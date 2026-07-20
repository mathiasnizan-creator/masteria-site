/**
 * Prerender incrémental — régénère le HTML statique de quelques routes
 * seulement, en réutilisant le `dist/` déjà construit.
 *
 * Motivation : `npm run build:prerender` reconstruit les 230+ routes en une
 * dizaine de minutes et se fait tuer par l'OS quand la mémoire est basse.
 * Publier une édition de veille chaque matin ouvré à ce prix n'est pas tenable.
 * Ici, on ne touche qu'aux routes demandées.
 *
 * Condition de validité : le bundle JS ne doit pas avoir changé depuis le
 * dernier build complet. C'est pour cela que les éditions de veille vivent en
 * JSON dans public/veille-data/ au lieu du bundle. Si vous modifiez du code
 * source, repassez par un build complet.
 *
 * Usage :
 *   node scripts/prerender-routes.mjs /veille-ia /veille-ia/2026-07-20
 *   node scripts/prerender-routes.mjs --veille          (toutes les routes veille du sitemap)
 *   PRERENDER_PORT=4500 node scripts/prerender-routes.mjs /veille
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

// Port distinct du 4195 de prerender.mjs. Les deux scripts tuent les zombies
// de leur propre port ; partager le port ferait s'entretuer deux runs
// concurrents, panne déjà rencontrée sur ce dépôt.
const PORT = Number(process.env.PRERENDER_PORT || 4396);
const BASE = `http://127.0.0.1:${PORT}`;
const SITE = 'https://www.master-ia.fr';
const NAV_TIMEOUT = 25000;
const HELMET_WAIT = 900;      // les pages veille chargent leur JSON avant de poser le title
const MIN_HTML_SIZE = 20_000;

// ─────────────────────────────────────────────────────────────────
// Routes demandées
// ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
let routes = args.filter(a => a.startsWith('/'));

if (args.includes('--veille')) {
  const sitemapPath = path.join(dist, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('✗ dist/sitemap.xml absent. Lancer `npm run sitemap && npx vite build` d\'abord.');
    process.exit(1);
  }
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const veille = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(m => m[1].replace(SITE, ''))
    .filter(r => r === '/veille-ia' || r.startsWith('/veille-ia/'));
  routes = [...new Set([...routes, ...veille])];
}

if (!routes.length) {
  console.error('Aucune route. Usage : node scripts/prerender-routes.mjs /veille-ia [/veille-ia/2026-07-20] | --veille');
  process.exit(1);
}

// Prérendre "/" écraserait dist/index.html, qui sert de coquille SPA aux
// routes non prérendues. Un run incrémental n'a aucune raison de le faire.
if (routes.includes('/')) {
  console.error('✗ La route "/" relève du build complet, elle réécrit la coquille SPA.');
  process.exit(1);
}

// ─────────────────────────────────────────────────────────────────
// Coquille servie aux routes
// ─────────────────────────────────────────────────────────────────
// dist/spa.html est la coquille propre sauvegardée par le build complet.
// dist/index.html, lui, contient la home prérendue : s'en servir injecterait
// les balises Helmet de la home dans chaque page produite ici.
// Deux situations donnent une coquille valable :
//   - dist/spa.html, écrit par le build complet ;
//   - dist/index.html juste après un `vite build`, avant tout prérendu.
// Le second cas doit être vérifié : une fois la home prérendue, index.html
// pèse plus de 150 Ko et porte ses propres balises Helmet. S'en servir
// injecterait le contenu de la home dans chaque page produite ici.
function lireCoquille() {
  const spa = path.join(dist, 'spa.html');
  if (fs.existsSync(spa)) return fs.readFileSync(spa, 'utf8');

  const index = path.join(dist, 'index.html');
  if (fs.existsSync(index)) {
    const html = fs.readFileSync(index, 'utf8');
    if (html.length < 15_000 && !/<h1[\s>]/.test(html)) return html;
    console.error('✗ dist/index.html contient une page prérendue, pas une coquille vierge.');
    console.error('  dist/spa.html est absent. Relancer `npm run build:prerender` une fois.');
    process.exit(1);
  }
  console.error('✗ dist/ ne contient ni spa.html ni index.html. Lancer `npx vite build` d\'abord.');
  process.exit(1);
}
const SHELL_HTML = lireCoquille();

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

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const candidate = path.join(dist, urlPath);
  fs.stat(candidate, (err, stat) => {
    if (!err && stat.isFile() && !candidate.endsWith('index.html')) {
      return fs.readFile(candidate, (e, data) => {
        if (e) { res.writeHead(500); return res.end('500'); }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(candidate)] || 'application/octet-stream' });
        res.end(data);
      });
    }
    res.writeHead(200, { 'Content-Type': MIME['.html'] });
    res.end(SHELL_HTML);
  });
});
server.on('error', () => {});
server.on('clientError', (err, socket) => { try { socket.destroy(); } catch {} });

await new Promise(resolve => server.listen(PORT, resolve));
console.log(`→ ${routes.length} route(s) à prérendre, serveur ${BASE}`);

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  timeout: 120000,
  protocolTimeout: 120000,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage',
    '--disable-gpu', '--no-first-run', '--no-default-browser-check'],
});

async function renderOne(route) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.setRequestInterception(true);
    page.on('request', req => {
      const t = req.resourceType();
      // Les images ne servent pas au HTML produit. Le JSON des éditions passe
      // en type fetch/xhr et doit impérativement aboutir.
      if (t === 'image' || t === 'font' || t === 'media') return req.abort();
      req.continue();
    });
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle0', timeout: NAV_TIMEOUT });

    // Les pages de veille chargent leur contenu après le rendu initial. Une
    // attente fixe laisserait passer une page vide : le hero, l'en-tête, le
    // pied et les blocs JSON-LD franchissent à eux seuls le seuil de 20 Ko,
    // et le contrôle ne verrait rien. On attend donc le verrou posé par le
    // composant, puis on refuse tout état autre que « ok ».
    const estVeille = route === '/veille-ia' || route.startsWith('/veille-ia/');
    if (estVeille) {
      await page.waitForSelector('[data-veille-pret="1"]', { timeout: 8000 });
    }
    await new Promise(r => setTimeout(r, estVeille ? 400 : HELMET_WAIT));
    const html = await page.content();

    if (estVeille) {
      const m = /data-veille-etat="([a-z]+)"/.exec(html);
      const etat = m ? m[1] : 'inconnu';
      if (etat !== 'ok') {
        throw new Error(`données non chargées (état « ${etat} »)`);
      }
    }

    const hasTitle = /<title>[^<]{8,}<\/title>/.test(html);
    const hasH1 = /<h1[\s>]/.test(html);
    if (html.length < MIN_HTML_SIZE || !hasTitle || !hasH1) {
      throw new Error(`coquille vide (taille=${html.length}, title=${hasTitle}, h1=${hasH1})`);
    }

    const outDir = path.join(dist, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    return html.length;
  } finally {
    try { await page.close(); } catch {}
  }
}

let ok = 0;
const echecs = [];

for (const route of routes) {
  let rendu = false;
  for (let essai = 1; essai <= 2 && !rendu; essai++) {
    try {
      const taille = await renderOne(route);
      console.log(`  ok  ${route}  ${Math.round(taille / 1024)} Ko`);
      ok++; rendu = true;
    } catch (e) {
      const msg = e.message.split('\n')[0];
      if (essai === 1) {
        console.warn(`  ⟲  ${route} — ${msg}, nouvelle tentative`);
        await new Promise(r => setTimeout(r, 800));
      } else {
        console.warn(`  ✗  ${route} — ${msg}`);
        echecs.push(route);
      }
    }
  }
}

try { await browser.close(); } catch {}
server.close();

console.log(`\n${ok} route(s) prérendue(s), ${echecs.length} échec(s)`);
if (echecs.length) {
  console.log('En échec : ' + echecs.join(', '));
  console.log('Le dist n\'a pas été modifié pour ces routes, l\'ancien HTML reste en place.');
}
process.exit(echecs.length ? 1 : 0);
