/**
 * Prerender — génère un HTML statique pré-rendu par route.
 *
 * Stratégie :
 *  1. Démarre un serveur HTTP local qui sert `dist/` en SPA fallback.
 *  2. Lance Puppeteer, traite les URLs par lots (redémarre le browser
 *     tous les BATCH_SIZE URLs pour éviter les crashes mémoire de
 *     Chromium sur les longs runs).
 *  3. Pour chaque URL : navigate, attend Helmet, écrit dist/<route>/index.html.
 *  4. Ferme tout.
 *
 * Vercel sert les fichiers statiques en priorité : chaque URL prerendée
 * livre le bon <title>, <meta>, <link canonical> et <script JSON-LD>
 * au premier octet, sans exécution JS côté client.
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const PORT = 4195;
const BASE = `http://127.0.0.1:${PORT}`;
const SITE = 'https://www.master-ia.fr';
const BATCH_SIZE = 10;          // taille d'un lot (affichage de progression)
const RECYCLE_EVERY = 4;        // recycle le browser toutes les N routes pour plafonner
                                // la mémoire de Chromium et éviter l'OOM (SIGKILL) sur les longs runs
const NAV_TIMEOUT = 25000;
const HELMET_WAIT = 800;        // ms pour laisser react-helmet-async s'appliquer
                                // (augmenté de 250→800 après détection de 10 pages blog prérendues vides)
const MIN_HTML_SIZE = 20_000;   // octets — sous ce seuil, le prerender est considéré comme échec
                                // (le shell vide fait ~8 400 octets, une page valide ≥ 30 KB)

// ─────────────────────────────────────────────────────────────────
// 1) Serveur statique minimaliste avec fallback SPA
// ─────────────────────────────────────────────────────────────────
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
};

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(500); res.end('500'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  });
}

// Le serveur ne sert JAMAIS un index.html déjà prerendé comme fallback :
// pour les routes non-fichiers, on sert toujours le SHELL_HTML original
// (sinon les tags Helmet des runs précédents s'accumulent).
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  // Pour "/" ou "/index.html", on sert le shell.
  if (urlPath === '/' || urlPath === '/index.html') {
    res.writeHead(200, { 'Content-Type': MIME['.html'] });
    return res.end(SHELL_HTML);
  }
  const candidate = path.join(dist, urlPath);
  fs.stat(candidate, (err, stat) => {
    if (!err && stat.isFile() && !candidate.endsWith('index.html')) {
      return serveFile(res, candidate);
    }
    // Fallback SPA : toujours le shell, jamais un index.html prerendé
    res.writeHead(200, { 'Content-Type': MIME['.html'] });
    res.end(SHELL_HTML);
  });
});
// Évite que ECONNRESET/EPIPE (Chrome qui crash) tue le serveur Node
server.on('error', () => {});
server.on('clientError', (err, socket) => { try { socket.destroy(); } catch {} });

// ─────────────────────────────────────────────────────────────────
// 2) Routes depuis sitemap.xml
// ─────────────────────────────────────────────────────────────────
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const sitemapRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(m => m[1].replace(SITE, '').replace(/^\/?/, '/'))
  .map(r => r === '' ? '/' : r);

// Routes privées (noindex, non listées dans sitemap.xml) — on les prerender
// quand même pour qu'elles renvoient un HTTP 200 et un HTML correct au lieu
// d'un 404 (Vercel sert filesystem-first sans fallback SPA fiable).
const PRIVATE_ROUTES = ['/competences-claude-eet', '/artefacts-claude-entreprise', '/securite-claude-entreprise'];

// Catalogue interne (noindex, hors sitemap) : prérendu pour qu'un accès direct
// (nouvel onglet, refresh) renvoie 200 au lieu d'un 404. Les sous-routes
// /formations/:id passent par le fallback SPA ciblé du config Vercel.
const EXTRA_ROUTES = ['/formations'];

const allRoutes = [...sitemapRoutes, ...PRIVATE_ROUTES, ...EXTRA_ROUTES];

// Mode réparation : PRERENDER_ONLY="/a,/b" ne re-prerender que ces routes
// (après un échec transitoire de Chrome), sans refaire les ~290 autres.
const REPAIR = (process.env.PRERENDER_ONLY || '').split(',').map(r => r.trim()).filter(Boolean);
const routes = REPAIR.length ? allRoutes.filter(r => REPAIR.includes(r)) : allRoutes;
if (REPAIR.length) console.log(`→ mode réparation : ${routes.length}/${REPAIR.length} routes demandées trouvées`);

console.log(`→ ${routes.length} routes à prerender (lots de ${BATCH_SIZE})`);

// Backup de l'index.html source (vite build) : utilisé comme shell pour chaque
// route AVANT écriture. Sinon, dès qu'on prerender "/", les routes suivantes
// chargent dist/index.html déjà peuplé des tags HomePage → doublons de canonicals/meta.
// En mode réparation, dist/index.html est déjà la home prérendue : le shell
// propre est alors dist/spa.html (écrit par le run complet précédent).
const SHELL_PATH = path.join(dist, (REPAIR.length && fs.existsSync(path.join(dist, 'spa.html'))) ? 'spa.html' : 'index.html');
const SHELL_HTML = fs.readFileSync(SHELL_PATH, 'utf8');
// Copie pérenne du shell SPA propre : servie par Vercel (en /spa, via cleanUrls)
// comme fallback des routes non prérendues (/formations/:id, filets de sécurité).
// Nécessaire car dist/index.html sera remplacé par la home prérendue en fin de run.
fs.writeFileSync(path.join(dist, 'spa.html'), SHELL_HTML);
// On placera "/" en dernier pour ne pas écraser le shell pendant le run.
const orderedRoutes = REPAIR.length ? routes : [...routes.filter(r => r !== '/'), '/'];

// ─────────────────────────────────────────────────────────────────
// 3) Serveur + boucle prerender par lots
// ─────────────────────────────────────────────────────────────────
await new Promise((resolve, reject) => {
  // Un port occupé (serveur zombie d'un prérendu planté) laissait Node sortir
  // en code 0 avec zéro page rendue : le build « réussissait » à 15 pages et
  // la production restait figée. L'échec doit être bruyant.
  server.on('error', (e) => {
    console.error(`✗ impossible d'écouter sur le port ${PORT} : ${e.code || e.message}`);
    console.error(`  Un serveur zombie occupe sans doute le port :  lsof -nP -iTCP:${PORT} -sTCP:LISTEN`);
    process.exit(1);
  });
  server.listen(PORT, resolve);
});
console.log(`→ Serveur local ${BASE}`);

async function launchBrowser() {
  return puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    timeout: 120000,
    protocolTimeout: 120000,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-features=VizDisplayCompositor',
      // Empreinte mémoire minimale (machine sous forte pression RAM/swap) :
      '--single-process',
      '--renderer-process-limit=1',
      '--disable-extensions',
      '--disable-background-networking',
      '--disable-software-rasterizer',
      '--mute-audio',
      '--js-flags=--max-old-space-size=512',
    ],
  });
}

async function renderOne(browser, route) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.setRequestInterception(true);
    page.on('request', req => {
      const t = req.resourceType();
      if (t === 'image' || t === 'font' || t === 'media') return req.abort();
      req.continue();
    });
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle0', timeout: NAV_TIMEOUT });
    await new Promise(r => setTimeout(r, HELMET_WAIT));
    const html = await page.content();

    // Validation : un prerender « réussi » mais qui renvoie le shell vide
    // (sans <title> custom ou trop petit) est un échec silencieux qui pollue
    // l'index Google. On le détecte ici et on le compte en échec.
    const hasTitle = /<title>[^<]{8,}<\/title>/.test(html);
    const hasH1 = /<h1[\s>]/.test(html);
    if (html.length < MIN_HTML_SIZE || !hasTitle || !hasH1) {
      throw new Error(`empty-shell (size=${html.length}, title=${hasTitle}, h1=${hasH1})`);
    }

    const outDir = route === '/' ? dist : path.join(dist, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    return true;
  } finally {
    try { await page.close(); } catch {}
  }
}

let ok = 0, fail = 0;
const failures = [];

// Un seul browser pour tout le run — évite le rate-limit macOS sur les lancements Chrome
let browser = await launchBrowser();
console.log(`  Browser lancé — traitement séquentiel de ${orderedRoutes.length} routes`);

for (let idx = 0; idx < orderedRoutes.length; idx++) {
  const route = orderedRoutes[idx];
  if (idx % BATCH_SIZE === 0) {
    const lot = Math.floor(idx / BATCH_SIZE) + 1;
    const total = Math.ceil(orderedRoutes.length / BATCH_SIZE);
    console.log(`  lot ${lot}/${total} — routes ${idx + 1}-${Math.min(idx + BATCH_SIZE, orderedRoutes.length)}`);
  }
  // Recyclage périodique du navigateur : plafonne la mémoire de Chromium et
  // évite que l'OS tue le process (SIGKILL/OOM) au milieu d'un long run.
  // On ferme PUIS on attend que l'OS récupère la RAM avant de relancer, pour
  // ne jamais avoir deux instances Chrome simultanées (le pic qui déclenche l'OOM).
  if (idx > 0 && idx % RECYCLE_EVERY === 0) {
    console.log(`    ↻ recyclage du navigateur (route ${idx}) pour libérer la mémoire`);
    try { await browser.close(); } catch {}
    await new Promise(r => setTimeout(r, 2000));
    try {
      browser = await launchBrowser();
    } catch (le) {
      console.warn(`    ⚠ relance du navigateur échouée (${le.message.split('\n')[0]}) — nouvelle tentative dans 4 s`);
      await new Promise(r => setTimeout(r, 4000));
      browser = await launchBrowser();
    }
  }
  let attempts = 0;
  let succeeded = false;
  while (attempts < 2 && !succeeded) {
    attempts++;
    try {
      await renderOne(browser, route);
      succeeded = true;
      ok++;
    } catch (e) {
      const msg = e.message.split('\n')[0];
      // Si le browser a crashé, on en recrée un seul nouveau
      if (msg.includes('Connection closed') || msg.includes('detached') || msg.includes('Target closed') || msg.includes('Protocol error')) {
        console.warn(`    ✗ ${route} — ${msg} [restart browser]`);
        try { await browser.close(); } catch {}
        try { browser = await launchBrowser(); } catch (le) { console.warn('    ⚠ browser restart échoué:', le.message.split('\n')[0]); }
      } else if (msg.startsWith('empty-shell') && attempts < 2) {
        // Empty shell : on retry une fois avec un wait plus long (souvent un Helmet lent)
        console.warn(`    ⟲ ${route} — ${msg} [retry avec wait étendu]`);
        await new Promise(r => setTimeout(r, 600));
        continue;
      } else {
        console.warn(`    ✗ ${route} — ${msg}`);
      }
      if (attempts >= 2 || !msg.startsWith('empty-shell')) {
        fail++;
        failures.push({ route, err: e.message });
        break;
      }
    }
  }
}

try { await browser.close(); } catch {}

server.close();

console.log(`\n✅ Prerender terminé — ${ok} OK, ${fail} échecs sur ${orderedRoutes.length}`);
if (failures.length) {
  console.log('\nRoutes en échec :');
  failures.forEach(f => console.log(`  - ${f.route} — ${f.err.split('\n')[0]}`));
}
process.exit(fail > orderedRoutes.length * 0.1 ? 1 : 0); // fail build si >10% d'échecs
