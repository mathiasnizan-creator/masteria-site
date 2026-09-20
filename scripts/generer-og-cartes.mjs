/**
 * Cartes de partage et vignettes Google, pour tout le site.
 *
 * Google recadre EN CARRÉ la vignette qu'il affiche à côté d'un résultat. Tant
 * que la seule image déclarée était le logo horizontal, ce recadrage coupait le
 * mot-symbole en plein milieu (« Master… ») ; sur les pages qui n'avaient pas
 * d'image utile, Google allait chercher le badge Qualiopi de la page, tronqué
 * lui aussi. On lui fournit donc les rapports qu'il demande dans sa doc données
 * structurées — 16x9, 4x3, 1x1 — avec un carré pensé pour n'être jamais coupé :
 *
 *   public/og/<slug>.jpg        1200x630  carte au titre de la page (og:image)
 *   public/og/masteria-1x1.jpg  1200x1200 vignette carrée de marque
 *   public/og/masteria-4x3.jpg  1200x900  format intermédiaire
 *   public/og/masteria-16x9.jpg 1200x630  carte par défaut
 *
 * Les carrés sont communs à tout le site : à 92 px dans une SERP seule la marque
 * est lisible, une déclinaison par page rendrait exactement les mêmes pixels.
 *
 * Usage : node scripts/generer-og-cartes.mjs [--only slug,slug|marque] [--force]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const sortieDir = path.join(root, 'public', 'og');
const MARQUE_BLANCHE = path.join(root, 'public/assets/logo-mark-blanc.png');

const args = process.argv.slice(2);
const only = args.includes('--only')
  ? args[args.indexOf('--only') + 1].split(',').map(s => s.trim())
  : null;
const force = args.includes('--force');

// Seules les éditions françaises de la Veille IA ont déjà leur carte, produite
// par generer-og-veille.mjs et déclarée dans leur JSON d'édition ; le hub reprend
// celle de la dernière édition. Le reste de la section — pages À propos et
// Publications, et toute la version anglaise, qui n'a pas de carte propre —
// passe par le gabarit commun.
const EXCLUS = [
  /^veille-ia$/,
  /^veille-ia\/\d{4}-\d{2}-\d{2}$/,
];

const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const deEsc = s => String(s || '')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');

let _mark = null;
const MARK = () => (_mark ??= fs.readFileSync(MARQUE_BLANCHE).toString('base64'));

/**
 * Le logo carré du site est un symbole noir sur fond blanc OPAQUE : posé tel quel
 * sur une carte sombre, il affiche un pavé noir. On fabrique donc une fois un
 * symbole blanc détouré (alpha = 255 − luminance) conservé dans les assets.
 */
async function preparerMarque(browser) {
  if (fs.existsSync(MARQUE_BLANCHE) && !force) return;
  const src = fs.readFileSync(path.join(root, 'public/assets/logo-square.png')).toString('base64');
  const p = await browser.newPage();
  await p.setContent(`<img id="i" src="data:image/png;base64,${src}">`, { waitUntil: 'load' });
  const dataUrl = await p.evaluate(async () => {
    const img = document.getElementById('i');
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height);
    for (let i = 0; i < d.data.length; i += 4) {
      const lum = 0.2126 * d.data[i] + 0.7152 * d.data[i + 1] + 0.0722 * d.data[i + 2];
      d.data[i] = d.data[i + 1] = d.data[i + 2] = 255;
      d.data[i + 3] = Math.round(255 - lum);
    }
    ctx.putImageData(d, 0, 0);
    return c.toDataURL('image/png');
  });
  await p.close();
  fs.writeFileSync(MARQUE_BLANCHE, Buffer.from(dataUrl.split(',')[1], 'base64'));
  console.log('symbole blanc : public/assets/logo-mark-blanc.png');
}

/* ─── Surtitre : la famille de pages, déduite du slug ─── */
function surtitre(slug) {
  if (slug === '') return 'Formation & conseil IA';
  const s = slug.replace(/^en\//, '');
  if (/^ai-watch(\/|$)/.test(s)) return 'AI Watch';
  if (/^veille-ia(\/|$)/.test(s)) return 'Veille IA';
  if (/^blog(\/|$)/.test(s)) return 'Blog Masteria';
  if (/^formation|^bootcamp|^ai-training|^training/.test(s)) return 'Formation IA';
  if (/^conseil|^chief-ai-officer|^prestataire|^agence|^cabinet|^consultant|consulting/.test(s)) return 'Conseil IA';
  if (/^gouvernance|rgpd|^charte|^ia-responsable|ai-act|^conformite|^audit/.test(s)) return 'Gouvernance & conformité';
  if (/^solutions-ia|^outils-ia-sur-mesure|^automatisation|^agents?-ia|^developpement|^integration/.test(s)) return 'Solutions IA';
  if (/^roi|^prix|^calculateur|^test-maturite|^quel|^quelle|vs-|^comparatif|^methode/.test(s)) return 'Repères & outils';
  if (/^etudes-de-cas|^references|^presse|^avis|^temoignages/.test(s)) return 'Références';
  if (/^mentions|^politique|^cgv|^cgu|^accessibilite|^plan-du-site/.test(s)) return 'Masteria';
  return 'Masteria';
}

/* ─── Le titre de la carte : le <title> débarrassé de ce que la carte porte déjà ─── */
// Segments qui n'apportent rien sur la carte : la marque figure dans l'en-tête,
// la certification dans le badge du bas. Le reste du titre est conservé tel quel
// (« Agence IA Lyon · Conseil & dev sur mesure » garde ses deux moitiés).
const SEGMENTS_MUETS = /^(masteria|qualiopi|opco|certifié qualiopi|finançable opco|comparatif|guide)$/i;

function titreCarte(titleTag) {
  let t = deEsc(titleTag)
    // Suffixe de marque : « | Masteria », « | Comparatif Masteria », « · Masteria »…
    .replace(/\s*[|·—–]\s*[^|·—–]*Masteria\s*$/i, '')
    .trim();
  const segments = t.split(' · ').map(x => x.trim()).filter(x => x && !SEGMENTS_MUETS.test(x));
  if (segments.length) t = segments.join(' · ');
  // Les titres de la Veille sont déjà tronqués par des points de suspension.
  // Recopiés tels quels, ils donnent une carte qui s'arrête au milieu d'une
  // phrase : on retire l'ellipse puis les mots-outils restés en suspens.
  if (/(\.\.\.|…)$/.test(t)) {
    t = t.replace(/\s*(\.\.\.|…)\s*$/, '');
    // Couper à la phrase la plus proche qui se tient : si l'avant-dernier mot est
    // un mot-outil, la locution qu'il ouvre est amputée, on retire les deux ;
    // sinon on ne retire que le mot-outil final. Au-delà, on couperait dans du
    // contenu utile (« Sony Music and Warner sue Anthropic » doit rester entier).
    const OUTIL = /^(as|the|an?|to|for|of|in|on|and|or|with|over|under|its|at|by|from|into|after|before|against|than|about|que|qui|de|du|des|la|les?|une?|et|ou|à|aux?|pour|dans|sur|par|avec|sa|ses|son)$/i;
    const mots = t.split(/\s+/);
    if (mots.length > 3 && OUTIL.test(mots[mots.length - 2])) mots.splice(-2);
    else if (mots.length > 2 && OUTIL.test(mots[mots.length - 1])) mots.pop();
    t = mots.join(' ').replace(/[\s,;:]+$/, '');
  }
  if (t.length > 92) t = t.slice(0, 89).replace(/[\s,;:.]+\S*$/, '') + '…';
  return t;
}

/* ─── Gabarits ───
   Pas de trame de points : à 1200 px de large elle triple le poids du PNG pour
   un motif invisible à la taille où ces images sont réellement vues. */
const BASE = `
  * { margin: 0; box-sizing: border-box; }
  body { background: #0A0F1E; position: relative; overflow: hidden;
         font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  .filet { position: absolute; top: 0; left: 0; right: 0; height: 6px; background: #2563EB; z-index: 3; }
  .halo { position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.26), rgba(37,99,235,0) 70%); }
  .mark { display: block; }
`;

const POLICES = `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&family=DM+Sans:wght@500;600;700&display=swap" rel="stylesheet">`;

function carte16x9({ titre, sur, en }) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">${POLICES}<style>${BASE}
  body { width: 1200px; height: 630px; display: flex; flex-direction: column;
         justify-content: space-between; padding: 56px 72px 52px; }
  .halo { top: -300px; right: -220px; width: 940px; height: 940px; }
  .haut, .milieu, .bas { position: relative; z-index: 2; }
  .haut { display: flex; align-items: center; gap: 18px; }
  .haut .mark { width: 60px; height: 60px; }
  .nom { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 40px;
         color: #F8FAFC; letter-spacing: -0.01em; }
  .sur { margin-left: auto; font-size: 23px; font-weight: 600; letter-spacing: .14em;
         text-transform: uppercase; color: #7DA9F0; }
  h1 { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 68px;
       line-height: 1.1; color: #F8FAFC; letter-spacing: -0.022em; max-width: 1000px; }
  h1.long { font-size: 56px; }
  .bas { display: flex; justify-content: space-between; align-items: center; }
  .site { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 30px; color: #60A5FA; }
  .badge { font-size: 23px; font-weight: 600; color: #CBD5E1;
           border: 2px solid #2A3650; border-radius: 999px; padding: 11px 26px; }
</style></head><body>
  <div class="filet"></div><div class="halo"></div>
  <div class="haut">
    <img class="mark" src="data:image/png;base64,${MARK()}" alt="">
    <div class="nom">Masteria</div>
    <div class="sur">${esc(sur)}</div>
  </div>
  <div class="milieu"><h1 class="${titre.length > 56 ? 'long' : ''}">${esc(titre)}</h1></div>
  <div class="bas">
    <div class="site">master-ia.fr</div>
    <div class="badge">${en ? 'Qualiopi-certified training provider' : 'Organisme certifié Qualiopi'}</div>
  </div>
</body></html>`;
}

function carteMarque({ w, h }) {
  // Vignette de marque : tout est centré, rien ne peut être coupé par un recadrage.
  const k = w === h ? 1 : 0.84;
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">${POLICES}<style>${BASE}
  body { width: ${w}px; height: ${h}px; display: flex; flex-direction: column;
         align-items: center; justify-content: center; gap: ${Math.round(46 * k)}px; }
  .halo { top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: ${Math.round(w * 1.2)}px; height: ${Math.round(w * 1.2)}px; }
  .mark { width: ${Math.round(392 * k)}px; height: ${Math.round(392 * k)}px;
          position: relative; z-index: 2; }
  .bloc { position: relative; z-index: 2; text-align: center; }
  .nom { font-family: 'Nunito', sans-serif; font-weight: 900; font-size: ${Math.round(108 * k)}px;
         color: #F8FAFC; letter-spacing: -0.02em; line-height: 1; }
  .sous { margin-top: ${Math.round(22 * k)}px; font-size: ${Math.round(35 * k)}px;
          font-weight: 600; letter-spacing: .17em; text-transform: uppercase; color: #7DA9F0; }
</style></head><body>
  <div class="filet"></div><div class="halo"></div>
  <img class="mark" src="data:image/png;base64,${MARK()}" alt="">
  <div class="bloc"><div class="nom">Masteria</div><div class="sous">Formation &amp; conseil IA</div></div>
</body></html>`;
}

/* ─── Recensement des pages depuis le prérendu ─── */
function recenser() {
  const pages = [];
  const parcourir = dir => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { if (e.name !== 'assets' && e.name !== 'og') parcourir(p); continue; }
      if (e.name !== 'index.html') continue;
      const rel = path.relative(distDir, dir);
      const slug = rel === '.' ? '' : rel;
      if (EXCLUS.some(re => re.test(slug))) continue;
      const html = fs.readFileSync(p, 'utf8');
      if (/<meta name="robots" content="noindex/.test(html)) continue;
      const m = html.match(/<title>([^<]*)<\/title>/);
      if (!m) continue;
      pages.push({ slug, titre: titreCarte(m[1]), sur: surtitre(slug), en: slug.startsWith('en/') });
    }
  };
  parcourir(distDir);
  return pages.sort((a, b) => a.slug.localeCompare(b.slug));
}

// JPEG et non PNG : ces cartes sont des dégradés lisses, le pire cas pour la
// compression PNG (230 Ko la carte, 78 Mo pour le site). En JPEG 92 la même
// carte pèse une quarantaine de kilo-octets sans différence visible.
export const nomCarte = slug => (slug === '' ? 'accueil' : slug.replace(/\//g, '--')) + '.jpg';

/* ─── Manifeste ───
   SEOHead ne peut pas deviner si la carte d'une page existe : une page tout
   juste créée n'en a pas encore, et pointer og:image vers un fichier absent
   vaut moins que pointer vers la carte par défaut. Le manifeste liste les slugs
   réellement rendus ; il est relu à la compilation, pas à l'exécution. */
function ecrireManifeste() {
  const slugs = fs.readdirSync(sortieDir)
    .filter(f => f.endsWith('.jpg') && !f.startsWith('masteria-'))
    .map(f => (f === 'accueil.jpg' ? '' : f.replace(/\.jpg$/, '').replace(/--/g, '/')))
    .sort();
  const dest = path.join(root, 'src', 'data', 'og-cartes.js');
  const avant = fs.existsSync(dest) ? fs.readFileSync(dest, 'utf8') : '';
  const contenu = `/* Généré par scripts/generer-og-cartes.mjs — ne pas éditer à la main.
 * Slugs disposant d'une carte de partage dédiée dans public/og/.
 */
export const SLUGS_AVEC_CARTE = new Set(${JSON.stringify(slugs, null, 2)});
`;
  fs.writeFileSync(dest, contenu);
  console.log(`manifeste : src/data/og-cartes.js (${slugs.length} slugs)`);
  const dejaCouverts = (avant.match(/"/g) || []).length / 2;
  return Math.max(0, slugs.length - dejaCouverts);
}

/* ─── Rendu ─── */
if (!fs.existsSync(distDir)) {
  console.error('dist/ absent : lancer `npm run build:prerender` avant de générer les cartes.');
  process.exit(2);
}
fs.mkdirSync(sortieDir, { recursive: true });

let pages = recenser();
if (only) pages = pages.filter(p => only.includes(p.slug) || only.includes(nomCarte(p.slug)));

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--force-device-scale-factor=1'],
});

try {
  await preparerMarque(browser);
  const page = await browser.newPage();

  async function rendre(html, w, h, sortie) {
    await page.setViewport({ width: w, height: h });
    await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 20000 });
    // Les polices viennent de Google Fonts : hors ligne, on part au bout de 5 s
    // avec la police de secours plutôt que de bloquer le build.
    await Promise.race([
      page.evaluate(() => document.fonts.ready),
      new Promise(r => setTimeout(r, 5000)),
    ]);
    await page.screenshot({ path: sortie, type: 'jpeg', quality: 92 });
    // Le script tourne APRÈS `vite build`, qui a déjà recopié public/ : sans ce
    // miroir, les cartes fraîches manqueraient au déploiement.
    const miroir = path.join(distDir, 'og', path.basename(sortie));
    fs.mkdirSync(path.dirname(miroir), { recursive: true });
    fs.copyFileSync(sortie, miroir);
  }

  if (!only || only.includes('marque')) {
    await rendre(carteMarque({ w: 1200, h: 1200 }), 1200, 1200, path.join(sortieDir, 'masteria-1x1.jpg'));
    await rendre(carteMarque({ w: 1200, h: 900 }), 1200, 900, path.join(sortieDir, 'masteria-4x3.jpg'));
    await rendre(carte16x9({ titre: 'Former et conseiller les entreprises sur l’IA', sur: 'Formation & conseil IA' }),
      1200, 630, path.join(sortieDir, 'masteria-16x9.jpg'));
    console.log('vignettes de marque : 1x1, 4x3, 16x9');
  }

  let faites = 0, sautees = 0;
  for (const p of pages) {
    const sortie = path.join(sortieDir, nomCarte(p.slug));
    if (!force && fs.existsSync(sortie)) { sautees++; continue; }
    await rendre(carte16x9(p), 1200, 630, sortie);
    if (++faites % 25 === 0) console.log(`  … ${faites} cartes`);
  }
  console.log(`cartes 16x9 : ${faites} produites, ${sautees} déjà à jour (${pages.length} pages)`);

  const nouvelles = ecrireManifeste();
  if (nouvelles) {
    // Le manifeste est compilé dans le bundle : les pages tout juste dotées d'une
    // carte pointent encore vers la carte par défaut dans le dist courant.
    console.log(`\n⚠ ${nouvelles} page(s) viennent de recevoir leur carte.`);
    console.log('  Relancer `npm run build:prerender` pour que leur og:image la vise.');
  }
} finally {
  await browser.close();
}
