/**
 * Index de recherche Pagefind — construit APRÈS le prerender.
 *
 * Principe : zéro backend. L'index est généré au build à partir des pages
 * prérendues de `dist/`, puis servi en statique sous `/pagefind/`. Le
 * navigateur charge `/pagefind/pagefind.js` à l'ouverture de la palette,
 * puis uniquement les fragments d'index nécessaires à la requête.
 *
 * Ce script ne demande AUCUNE modification des pages React : il enrichit
 * le HTML prérendu à la volée (en mémoire) avant de le confier à Pagefind :
 *   - `data-pagefind-body` sur <main id="contenu"> : seul le contenu de page
 *     est indexé (header, footer, bandeau cookies exclus) ;
 *   - un type de contenu (Formation, Article, Veille, …) déduit de l'URL,
 *     exposé en méta (affichage) et en filtre (regroupement) ;
 *   - la meta description de la page, copiée dans le corps pour servir
 *     de résumé ;
 *   - un poids réduit pour les éditions de veille (datées et nombreuses)
 *     afin qu'elles ne noient pas les pages de fond.
 *
 * La langue est lue sur <html lang> (fr / en) : Pagefind crée un index par
 * langue et la palette interroge celui de la page courante.
 *
 * Usage : `node scripts/build-search-index.mjs` (intégré à build:prerender).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as pagefind from 'pagefind';
import { parse } from 'node-html-parser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const outputPath = path.join(dist, 'pagefind');

// Pages sans intérêt pour un visiteur qui cherche un contenu.
const EXCLUDE = new Set(['/mentions-legales', '/politique-de-confidentialite', '/404', '/spa']);

// ─────────────────────────────────────────────────────────────────
// Classification par URL. Les libellés sont ceux affichés dans la palette.
// ─────────────────────────────────────────────────────────────────
const SECTEURS = /^\/ia-(banque-assurance|industrie|sante-pharma|juridique|retail-ecommerce|logistique-transport|immobilier-btp|secteur-public|services-conseil|tourisme-hotellerie|agroalimentaire|tech-saas)$/;
const SOLUTIONS = new Set([
  '/solutions-ia', '/outils-ia-sur-mesure', '/agents-ia-entreprise', '/copilote-ia-interne',
  '/assistant-documentaire-ia', '/agent-support-client-ia', '/automatisation-documentaire-ia',
  '/agent-commercial-ia', '/chatbot-ia-sur-mesure', '/integration-llm-rag', '/meilleur-agent-ia',
]);
const COMPARATIFS = new Set([
  '/quelle-est-la-meilleure-ia', '/quel-outil-ia', '/meilleure-ia-entreprise-2026', '/meilleure-ia-pour-coder',
]);
const RESSOURCES = new Set([
  '/glossaire-ia', '/bibliotheque-de-prompts', '/calculateur-roi-ia', '/test-maturite-ia',
  '/diagnostic-ia', '/quel-opco', '/roi-ia-entreprise', '/cas-usage-ia-entreprise',
]);
const FORMATION_EXTRA = new Set([
  '/acculturation-ia', '/coaching-ia', '/centre-formation-ia-entreprise', '/meilleure-formation-ia',
  '/financement-formation-ia',
]);
const MASTERIA = new Set(['/', '/contact', '/presse', '/etudes-de-cas-ia', '/methode-projet-ia']);

function classify(route) {
  if (/^\/(veille-ia|en\/ai-watch)\/\d{4}-\d{2}-\d{2}$/.test(route)) return { type: 'Veille', weight: 0.6 };
  if (/^\/(veille-ia|en\/ai-watch)(\/|$)/.test(route)) return { type: 'Veille', weight: 0.8 };
  if (/^\/(outils-veille-ia|veille-concurrentielle-ia|automatiser-sa-veille-ia)$/.test(route)) return { type: 'Veille', weight: 0.9 };
  if (/^\/blog\/.+/.test(route)) return { type: 'Article', weight: 0.9 };
  if (route === '/blog') return { type: 'Article', weight: 0.8 };
  if (route.startsWith('/formation-') || FORMATION_EXTRA.has(route)) return { type: 'Formation', weight: 1 };
  if (SECTEURS.test(route)) return { type: 'Secteur', weight: 1 };
  if (SOLUTIONS.has(route)) return { type: 'Solution', weight: 1 };
  if (COMPARATIFS.has(route) || /-vs-/.test(route)) return { type: 'Comparatif', weight: 1 };
  if (RESSOURCES.has(route)) return { type: 'Ressource', weight: 1 };
  if (MASTERIA.has(route)) return { type: 'Masteria', weight: 0.9 };
  return { type: 'Conseil', weight: 1 }; // conseil, agence, audit, gouvernance, RGPD, charte, prix…
}

// ─────────────────────────────────────────────────────────────────
// Routes depuis le sitemap (les routes privées/noindex ne sont pas indexées).
// ─────────────────────────────────────────────────────────────────
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/www\.master-ia\.fr(\/[^<]*)<\/loc>/g)]
  .map(m => m[1].replace(/\/+$/, '') || '/')
  .filter(r => !EXCLUDE.has(r));

function htmlPathFor(route) {
  return route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
}

// Blocs de maillage interne (« Pour aller plus loin », « Autres formations »…) :
// utiles au SEO, mais ils feraient remonter une page pour des termes qu'elle ne
// traite pas (une formation RH citant toutes les autres formations). On les
// exclut de l'index, comme les fils d'Ariane et les blocs de navigation.
const MAILLAGE_HEADING = /pour aller plus loin|autres formations|à lire aussi|a lire aussi|articles li[ée]s|voir aussi|sur le m[êe]me th[èe]me|formations li[ée]es|(formations|articles|ressources|contenus|pages) associ[ée]e?s|outils alternatifs|vous aimerez aussi|continuer la lecture|à d[ée]couvrir aussi/i;

function enrich(html, route) {
  const { type, weight } = classify(route);
  if (!html.includes('<main id="contenu"')) return null;

  const root = parse(html, { comment: false });
  const main = root.querySelector('main#contenu');
  if (!main) return null;

  // Navigation, encarts latéraux, fils d'Ariane : hors index.
  for (const el of main.querySelectorAll('nav, aside, [aria-label*="Ariane" i], [aria-label*="breadcrumb" i]')) {
    el.setAttribute('data-pagefind-ignore', '');
  }
  // Sections de maillage : on remonte du titre à sa <section> (ou à son parent direct).
  for (const h of main.querySelectorAll('h2, h3')) {
    if (!MAILLAGE_HEADING.test(h.text.trim())) continue;
    const block = h.closest('section') || h.parentNode;
    if (block && block !== main) block.setAttribute('data-pagefind-ignore', '');
  }

  main.setAttribute('data-pagefind-body', '');
  main.setAttribute('data-pagefind-meta', `type:${type}`);
  main.setAttribute('data-pagefind-filter', `type:${type}`);
  if (weight !== 1) main.setAttribute('data-pagefind-weight', String(weight));

  // Meta description de la page (déjà échappée en attribut HTML par Helmet),
  // copiée dans le corps pour servir de résumé.
  const descTag = html.match(/<meta[^>]*name="description"[^>]*>/i)?.[0] || '';
  if (descTag) {
    main.insertAdjacentHTML('afterbegin', descTag.replace(/\/?>$/, '') + ' data-pagefind-meta="description[content]" />');
  }

  // Un index par langue de BASE : les pages veille déclarent « fr-FR », les
  // autres « fr ». Sans cette normalisation, Pagefind créerait deux index
  // français et une recherche lancée depuis /veille-ia ignorerait le reste du site.
  const htmlEl = root.querySelector('html');
  const lang = htmlEl?.getAttribute('lang');
  if (lang && lang.includes('-')) htmlEl.setAttribute('lang', lang.split('-')[0]);

  return { html: root.toString(), type };
}

const { index } = await pagefind.createIndex({ verbose: false });

const counts = {};
let missing = 0, skipped = 0, indexed = 0;
const missingList = [];

for (const route of routes) {
  const file = htmlPathFor(route);
  if (!fs.existsSync(file)) { missing++; missingList.push(route); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const result = enrich(html, route);
  if (!result) { skipped++; console.warn(`  ⚠ ${route} : pas de <main id="contenu">, ignoré`); continue; }
  const { errors } = await index.addHTMLFile({ url: route, content: result.html });
  if (errors?.length) { skipped++; console.warn(`  ⚠ ${route} : ${errors.join(' ; ')}`); continue; }
  counts[result.type] = (counts[result.type] || 0) + 1;
  indexed++;
}

fs.rmSync(outputPath, { recursive: true, force: true });
const { errors: writeErrors } = await index.writeFiles({ outputPath });
if (writeErrors?.length) {
  console.error('✗ Écriture de l\'index échouée :', writeErrors.join(' ; '));
  process.exit(1);
}
await pagefind.close();

// Pagefind écrit aussi ses interfaces prêtes à l'emploi (pagefind-ui, modular-ui,
// highlight) : la palette n'en utilise aucune, on ne déploie que le moteur.
for (const f of fs.readdirSync(outputPath)) {
  if (/^pagefind-(ui|modular-ui|component-ui|highlight)\./.test(f)) fs.rmSync(path.join(outputPath, f));
}

const size = fs.readdirSync(outputPath, { recursive: true })
  .map(f => path.join(outputPath, f))
  .filter(f => fs.statSync(f).isFile())
  .reduce((s, f) => s + fs.statSync(f).size, 0);

console.log(`\n✅ Index de recherche : ${indexed} pages indexées (${Math.round(size / 1024)} Ko dans dist/pagefind/)`);
for (const [type, n] of Object.entries(counts).sort((a, b) => b[1] - a[1])) console.log(`   ${type.padEnd(12)} ${n}`);
if (skipped) console.log(`   ${skipped} page(s) ignorée(s)`);
if (missing) {
  console.log(`   ${missing} route(s) du sitemap sans HTML prérendu (non indexées)`);
  if (missing <= 20) missingList.forEach(r => console.log(`     - ${r}`));
}
// Un index partiel n'est pas un échec de build (prerender de réparation, tests),
// mais un index vide, si.
process.exit(indexed === 0 ? 1 : 0);
