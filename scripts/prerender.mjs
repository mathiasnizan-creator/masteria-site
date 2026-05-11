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
const BATCH_SIZE = 10;          // redémarre le browser toutes les N routes
const NAV_TIMEOUT = 25000;
const HELMET_WAIT = 250;        // ms pour laisser react-helmet-async s'appliquer

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
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(m => m[1].replace(SITE, '').replace(/^\/?/, '/'))
  .map(r => r === '' ? '/' : r);

console.log(`→ ${routes.length} routes à prerender (lots de ${BATCH_SIZE})`);

// Backup de l'index.html source (vite build) : utilisé comme shell pour chaque
// route AVANT écriture. Sinon, dès qu'on prerender "/", les routes suivantes
// chargent dist/index.html déjà peuplé des tags HomePage → doublons de canonicals/meta.
const SHELL_PATH = path.join(dist, 'index.html');
const SHELL_HTML = fs.readFileSync(SHELL_PATH, 'utf8');
// On placera "/" en dernier pour ne pas écraser le shell pendant le run.
const orderedRoutes = [...routes.filter(r => r !== '/'), '/'];

// ─────────────────────────────────────────────────────────────────
// 3) Serveur + boucle prerender par lots
// ─────────────────────────────────────────────────────────────────
await new Promise(resolve => server.listen(PORT, resolve));
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
  try {
    await renderOne(browser, route);
    ok++;
  } catch (e) {
    const msg = e.message.split('\n')[0];
    // Si le browser a crashé, on en recrée un seul nouveau
    if (msg.includes('Connection closed') || msg.includes('detached') || msg.includes('Target closed') || msg.includes('Protocol error')) {
      console.warn(`    ✗ ${route} — ${msg} [restart browser]`);
      try { await browser.close(); } catch {}
      try { browser = await launchBrowser(); } catch (le) { console.warn('    ⚠ browser restart échoué:', le.message.split('\n')[0]); }
    } else {
      console.warn(`    ✗ ${route} — ${msg}`);
    }
    fail++;
    failures.push({ route, err: e.message });
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
