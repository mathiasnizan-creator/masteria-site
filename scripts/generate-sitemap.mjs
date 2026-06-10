import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const today = new Date().toISOString().split('T')[0];
const SITE = 'https://www.master-ia.fr';

// lastmod = date du dernier commit touchant les fichiers qui produisent la page
// (données + template), PAS la date du build. Un lastmod qui bouge à chaque
// build sans changement réel est un signal que Google apprend à ignorer.
// Les modifications non commitées comptent aussi (le contenu servi va changer).
function gitLastMod(paths) {
  try {
    const dirty = execSync(`git status --porcelain -- ${paths.map(p => `"${p}"`).join(' ')}`,
      { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    if (dirty) return today;
    const out = execSync(`git log -1 --format=%cs -- ${paths.map(p => `"${p}"`).join(' ')}`,
      { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    return out || today;
  } catch {
    return today; // hors dépôt git : on retombe sur la date du jour
  }
}

// Hubs — URLs canoniques après migration
const hubSlugs = [
  'formation-chatgpt',
  'formation-claude-ia',
  'formation-mistral-ai',
  'formation-microsoft-copilot',
  'formation-gemini-entreprise',
  'formation-sprint-ia',
  'formation-multi-outils',
];

// Pages statiques — `files` liste les sources (template + données) dont le
// dernier commit donne le lastmod de la page.
const COMPARISON_FILES = ['src/pages/ComparisonPage.jsx', 'src/data/comparisons.js'];
const staticRoutes = [
  { path: '',                                    prio: 1.0, freq: 'weekly',  files: ['src/pages/HomePage.jsx'] },
  { path: 'conseil-intelligence-artificielle',   prio: 0.9, freq: 'monthly', files: ['src/pages/ConseilIAPage.jsx'] },
  { path: 'centre-formation-ia-entreprise',      prio: 0.7, freq: 'monthly', files: ['src/App.jsx'] },
  { path: 'contact',                             prio: 0.8, freq: 'monthly', files: ['src/App.jsx'] },
  { path: 'blog',                                prio: 0.8, freq: 'weekly',  files: ['src/pages/BlogListPage.jsx', 'src/data/blog-articles.js'] },
  { path: 'formation-intelligence-artificielle', prio: 0.95, freq: 'monthly', files: ['src/pages/MetiersHubPage.jsx', 'src/data/seo-pages.js'] },
  { path: 'formation-ia-debutant',               prio: 0.8, freq: 'monthly', files: ['src/pages/DebutantPage.jsx'] },
  { path: 'glossaire-ia',                        prio: 0.7, freq: 'monthly', files: ['src/pages/GlossaryPage.jsx', 'src/data/glossary-terms.js'] },
  { path: 'quelle-est-la-meilleure-ia',          prio: 0.9, freq: 'monthly', files: ['src/pages/ComparisonsHubPage.jsx', 'src/data/comparisons.js'] },
  { path: 'chatgpt-vs-claude',                   prio: 0.85, freq: 'monthly', files: COMPARISON_FILES },
  { path: 'copilot-vs-chatgpt',                  prio: 0.85, freq: 'monthly', files: COMPARISON_FILES },
  { path: 'meilleure-ia-entreprise-2026',        prio: 0.85, freq: 'monthly', files: COMPARISON_FILES },
  { path: 'meilleure-ia-pour-coder',             prio: 0.85, freq: 'monthly', files: COMPARISON_FILES },
  { path: 'meilleur-agent-ia',                   prio: 0.8,  freq: 'monthly', files: COMPARISON_FILES },
  { path: 'mistral-vs-chatgpt',                  prio: 0.85, freq: 'monthly', files: COMPARISON_FILES },
  { path: 'gemini-vs-copilot',                   prio: 0.85, freq: 'monthly', files: COMPARISON_FILES },
  { path: 'mentions-legales',                    prio: 0.2, freq: 'yearly',  files: ['src/pages/LegalPages.jsx'] },
  { path: 'politique-de-confidentialite',        prio: 0.2, freq: 'yearly',  files: ['src/pages/LegalPages.jsx'] },
];

// Métiers
const metierSlugs = [
  'marketing','ressources-humaines','commercial','finance',
  'communication','management','assistante',
  'seo','service-client','informatique','pedagogique',
  'achats','transverse',
].map(m => `formation-ia-${m}`);

// Spokes (ChatGPT, Copilot, Gemini, Claude, Mistral, Sprint IA, Multi-outils Métier)
const src = fs.readFileSync(path.join(root, 'src/data/seo-pages.js'), 'utf8');
const spokeSet = new Set();
const spokeRe = /slug:\s*['"](formation-(?:chatgpt|copilot|gemini|claude|mistral|sprint-ia|ia|prompt|ai)-[a-z0-9-]+)['"]/g;
let m;
while ((m = spokeRe.exec(src)) !== null) {
  // Exclure hubs et routes "formation-ia-{metier}" déjà listées en métiers
  if (hubSlugs.includes(m[1])) continue;
  if (metierSlugs.includes(m[1])) continue;
  spokeSet.add(m[1]);
}

// Pages formation transversales stratégiques : retirées du lot spokes (0.5)
// et poussées à 0.7 (requêtes commerciales à fort volume).
const boostedSlugs = ['formation-claude-code', 'formation-prompt-engineering', 'formation-ia-dirigeants', 'formation-ai-act'];
for (const s of boostedSlugs) spokeSet.delete(s);

// Pages géo : 2 outils × 5 villes = 10 pages outil×ville (stratégie ciblée)
const geoTools = ['chatgpt','claude-ia']
const geoCities = ['paris','lyon','marseille','geneve','bruxelles']
const geoSlugs = geoTools.flatMap(t => geoCities.map(c => `formation-${t}-${c}`))

// Pages géo génériques : /formation-ia-{ville} sur les 5 mêmes villes
const geoIaCities = [...geoCities]
const geoIaSlugs = geoIaCities.map(c => `formation-ia-${c}`)

// Spokes multi-outils (générés dynamiquement depuis METIERS_SPEC)
const multiOutilsMetiers = [
  'marketing', 'ressources-humaines', 'finance', 'commercial',
  'communication', 'management', 'assistante',
  'seo', 'service-client', 'informatique', 'pedagogique',
];
for (const met of multiOutilsMetiers) spokeSet.add(`formation-multi-outils-${met}`);

// Blog — import dynamique pour récupérer slug + dateModified/datePublished
const blogMod = await import(pathToFileURL(path.join(root, 'src/data/blog-articles.js')).href);
const BLOG = blogMod.BLOG_ARTICLES || [];
const blogEntries = BLOG
  // Exclut :
  //   - les stubs (externalPath) qui redirigent ailleurs → l'URL canonique est la cible
  //   - les articles sans contenu (pas de blocks) qui rendraient une page vide → soft 404
  //   - les articles sans intro (souvent un signe d'article jamais finalisé)
  .filter(a => !a.externalPath && Array.isArray(a.blocks) && a.blocks.length > 0 && a.intro)
  .map(a => ({
    slug: a.slug,
    lastmod: (a.dateModified || a.datePublished || today).split('T')[0],
  }));

// Dates par famille de pages, dérivées de git (dernier commit touchant les
// sources de la famille). Le lastmod ne bouge donc que quand le contenu change.
const HUB_LASTMOD    = gitLastMod(['src/data/hub-content.js', 'src/data/seo-pages.js', 'src/pages/HubPage.jsx']);
const METIER_LASTMOD = gitLastMod(['src/data/seo-pages.js', 'src/data/metier-faq.js', 'src/pages/MetierPage.jsx']);
const GEO_LASTMOD    = gitLastMod(['src/data/geo-data.js', 'src/pages/GeoPage.jsx', 'src/pages/GeoIAGenericPage.jsx']);
const SPOKE_LASTMOD  = gitLastMod([
  'src/data/seo-pages.js', 'src/data/multi-outils-spokes.js',
  'src/data/chatgpt-spokes-enriched.js', 'src/data/claude-spokes-enriched.js',
  'src/data/copilot-spokes-enriched.js', 'src/data/gemini-spokes-enriched.js',
  'src/data/mistral-spokes-enriched.js', 'src/pages/SpokePage.jsx',
]);
const TOPIC_LASTMOD  = gitLastMod([
  'src/pages/TopicLandingPage.jsx', 'src/pages/AutomatisationIAPage.jsx',
  'src/pages/GestionDeProjetIAPage.jsx', 'src/pages/QualiopiPage.jsx', 'src/pages/FinancementPage.jsx',
]);

const urls = [];
// Pyramide de priorités aplatie pour un domaine jeune au crawl-budget limité :
// les seules pages priority ≥ 0.9 sont la home et les 7 hubs outils stratégiques.
// Le reste descend pour que Google concentre son crawl sur les pages à plus fort impact.
for (const r of staticRoutes) urls.push({ loc: r.path ? `${SITE}/${r.path}` : `${SITE}/`, lastmod: r.files ? gitLastMod(r.files) : today, changefreq: r.freq, priority: r.prio });
for (const s of hubSlugs)     urls.push({ loc: `${SITE}/${s}`,          lastmod: HUB_LASTMOD,    changefreq: 'monthly', priority: 0.9 });
for (const s of metierSlugs)  urls.push({ loc: `${SITE}/${s}`,          lastmod: METIER_LASTMOD, changefreq: 'monthly', priority: 0.6 });
// Hiérarchie géo : la page ville (formation-ia-{ville}) est la page canonique de
// l'intention locale ; les pages outil×ville sont ses enfants (0.6). Lyon est le
// siège de Masteria : priorité renforcée sur la requête locale principale.
for (const s of geoSlugs)     urls.push({ loc: `${SITE}/${s}`,          lastmod: GEO_LASTMOD,    changefreq: 'monthly', priority: 0.6 });
for (const s of geoIaSlugs)   urls.push({ loc: `${SITE}/${s}`,          lastmod: GEO_LASTMOD,    changefreq: 'monthly', priority: s === 'formation-ia-lyon' ? 0.8 : 0.7 });
const topicSlugs = ['formation-intelligence-artificielle-cpf','formation-intelligence-artificielle-distanciel','formation-intelligence-artificielle-generative','formation-ia-gestion-de-projet','formation-automatisation-ia','formation-ia-qualiopi','financement-formation-ia'];
for (const s of topicSlugs)   urls.push({ loc: `${SITE}/${s}`,          lastmod: TOPIC_LASTMOD,  changefreq: 'monthly', priority: 0.7 });
for (const s of boostedSlugs) urls.push({ loc: `${SITE}/${s}`,          lastmod: SPOKE_LASTMOD,  changefreq: 'monthly', priority: 0.7 });
for (const s of [...spokeSet].sort()) urls.push({ loc: `${SITE}/${s}`,  lastmod: SPOKE_LASTMOD,  changefreq: 'monthly', priority: 0.5 });
for (const b of blogEntries)  urls.push({ loc: `${SITE}/blog/${b.slug}`, lastmod: b.lastmod,     changefreq: 'monthly', priority: 0.5 });
const blogSlugs = blogEntries.map(b => b.slug);

// Tri par priority décroissante : Google crawl en priorité les URL en haut du sitemap.
// Important pour les sites avec budget de crawl limité (domaine jeune).
urls.sort((a, b) => b.priority - a.priority);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(2)}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml);
console.log(`✅ ${urls.length} URLs → public/sitemap.xml`);
console.log(`   ${staticRoutes.length} statiques, ${hubSlugs.length} hubs, ${metierSlugs.length} métiers, ${geoSlugs.length} géo, ${spokeSet.size} spokes, ${blogSlugs.length} articles`);
