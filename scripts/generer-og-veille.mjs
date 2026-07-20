/**
 * Carte de partage d'une édition de la Veille IA, 1200 x 630.
 *
 * Rendue par Chrome headless à partir d'un gabarit HTML aux jetons du hero
 * sombre du site, puis capturée en PNG dans public/veille-data/og/<date>.png.
 * Appelée par publish.py à chaque publication ; l'échec est non bloquant,
 * les pages retombent alors sur le logo par défaut.
 *
 * Usage : node scripts/generer-og-veille.mjs <date> <titreEditorial> <dateLongue> <compteurs>
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const [, , date, titre, dateLongue, compteurs] = process.argv;
if (!date || !titre) {
  console.error('usage : generer-og-veille.mjs <date> <titre> <dateLongue> <compteurs>');
  process.exit(2);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sortieDir = path.join(root, 'public', 'veille-data', 'og');
fs.mkdirSync(sortieDir, { recursive: true });
const sortie = path.join(sortieDir, `${date}.png`);

const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Le titre éditorial est plafonné à 58 signes par publish.py : deux lignes
// maximum à cette taille, la carte ne peut pas déborder.
const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&family=DM+Sans:wght@500;600&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: #0A0F1E; position: relative;
         overflow: hidden; font-family: 'DM Sans', sans-serif;
         display: flex; flex-direction: column; justify-content: space-between;
         padding: 64px 72px 56px; }
  .filet { position: absolute; top: 0; left: 0; right: 0; height: 6px; background: #2563EB; }
  .trame { position: absolute; inset: 0;
           background-image: radial-gradient(rgba(255,255,255,0.05) 2px, transparent 2px);
           background-size: 44px 44px; }
  .halo { position: absolute; top: -260px; right: -180px; width: 880px; height: 880px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.20), rgba(37,99,235,0) 68%); }
  .haut, .bas, .milieu { position: relative; }
  .eyebrow { display: flex; align-items: center; gap: 18px; }
  .tuile { width: 56px; height: 56px; border-radius: 16px; background: rgba(37,99,235,0.16);
           border: 2px solid rgba(37,99,235,0.35); display: flex; align-items: center;
           justify-content: center; }
  .tuile svg { width: 30px; height: 30px; stroke: #60A5FA; stroke-width: 2.2;
               fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .label { font-size: 26px; font-weight: 600; letter-spacing: .16em;
           text-transform: uppercase; color: #7DA9F0; }
  h1 { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 74px;
       line-height: 1.08; color: #F8FAFC; letter-spacing: -0.02em; max-width: 1020px; }
  .date { font-size: 30px; color: #94A3B8; margin-top: 26px; }
  .bas { display: flex; justify-content: space-between; align-items: flex-end; }
  .compteurs { font-size: 26px; font-weight: 600; color: #CBD5E1;
               border: 2px solid #2A3650; border-radius: 999px; padding: 12px 28px; }
  .site { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 30px; color: #60A5FA; }
</style></head><body>
  <div class="filet"></div><div class="trame"></div><div class="halo"></div>
  <div class="haut eyebrow">
    <div class="tuile"><svg viewBox="0 0 24 24"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/></svg></div>
    <div class="label">Veille IA · Masteria</div>
  </div>
  <div class="milieu">
    <h1>${esc(titre)}</h1>
    <div class="date">${esc(dateLongue || date)}</div>
  </div>
  <div class="bas">
    <div class="compteurs">${esc(compteurs || '')}</div>
    <div class="site">master-ia.fr/veille</div>
  </div>
</body></html>`;

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--force-device-scale-factor=1'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  // domcontentloaded et non networkidle0 : si le réseau est fermé (bac à
  // sable, machine hors ligne), la requête Google Fonts pendrait jusqu'au
  // timeout. On attend ensuite les polices au mieux, quatre secondes au
  // plus, et la capture part avec la police de secours si elles manquent.
  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await Promise.race([
    page.evaluate(() => document.fonts.ready),
    new Promise(r => setTimeout(r, 4000)),
  ]);
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: sortie, type: 'png' });
  console.log(`ok ${path.relative(root, sortie)}`);
} finally {
  await browser.close();
}
