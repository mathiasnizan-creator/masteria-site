import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const today = new Date().toISOString().split('T')[0];
const SITE = 'https://www.master-ia.fr';

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

// Pages statiques
const staticRoutes = [
  { path: '',                                    prio: 1.0, freq: 'weekly'  },
  { path: 'conseil-intelligence-artificielle',   prio: 0.9, freq: 'monthly' },
  { path: 'centre-formation-ia-entreprise',      prio: 0.7, freq: 'monthly' },
  { path: 'contact',                             prio: 0.8, freq: 'monthly' },
  { path: 'blog',                                prio: 0.8, freq: 'weekly'  },
  { path: 'formation-intelligence-artificielle', prio: 0.9, freq: 'monthly' },
  { path: 'formation-ia-debutant',               prio: 0.8, freq: 'monthly' },
  { path: 'glossaire-ia',                        prio: 0.7, freq: 'monthly' },
  { path: 'quelle-est-la-meilleure-ia',          prio: 0.9, freq: 'monthly' },
  { path: 'chatgpt-vs-claude',                   prio: 0.85, freq: 'monthly' },
  { path: 'copilot-vs-chatgpt',                  prio: 0.85, freq: 'monthly' },
  { path: 'meilleure-ia-entreprise-2026',        prio: 0.85, freq: 'monthly' },
  { path: 'meilleure-ia-pour-coder',             prio: 0.85, freq: 'monthly' },
  { path: 'meilleur-agent-ia',                   prio: 0.8,  freq: 'monthly' },
  { path: 'mentions-legales',                    prio: 0.2, freq: 'yearly'  },
  { path: 'politique-de-confidentialite',        prio: 0.2, freq: 'yearly' },
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
const spokeRe = /slug:\s*['"](formation-(?:chatgpt|copilot|gemini|claude|mistral|sprint-ia|ia)-[a-z0-9-]+)['"]/g;
let m;
while ((m = spokeRe.exec(src)) !== null) {
  // Exclure hubs et routes "formation-ia-{metier}" déjà listées en métiers
  if (hubSlugs.includes(m[1])) continue;
  if (metierSlugs.includes(m[1])) continue;
  spokeSet.add(m[1]);
}

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
  .filter(a => !a.externalPath) // exclut les stubs (pages standalone exposées dans /blog mais URL ailleurs)
  .map(a => ({
    slug: a.slug,
    lastmod: (a.dateModified || a.datePublished || today).split('T')[0],
  }));

// Dates figées par catégorie de page — à mettre à jour lors d'un changement de contenu significatif.
// Pour les pages très stables on fige la date à la dernière refonte éditoriale.
const STATIC_LASTMOD = '2026-04-24';   // dernière refonte globale (contraste, SEO géo, llms.txt)
const HUB_LASTMOD    = '2026-04-24';
const METIER_LASTMOD = '2026-04-24';
const GEO_LASTMOD    = '2026-04-24';
const SPOKE_LASTMOD  = '2026-04-24';

const urls = [];
for (const r of staticRoutes) urls.push({ loc: r.path ? `${SITE}/${r.path}` : `${SITE}/`, lastmod: STATIC_LASTMOD, changefreq: r.freq, priority: r.prio });
for (const s of hubSlugs)     urls.push({ loc: `${SITE}/${s}`,          lastmod: HUB_LASTMOD,    changefreq: 'monthly', priority: 0.9 });
for (const s of metierSlugs)  urls.push({ loc: `${SITE}/${s}`,          lastmod: METIER_LASTMOD, changefreq: 'monthly', priority: 0.8 });
for (const s of geoSlugs)     urls.push({ loc: `${SITE}/${s}`,          lastmod: GEO_LASTMOD,    changefreq: 'monthly', priority: 0.8 });
for (const s of geoIaSlugs)   urls.push({ loc: `${SITE}/${s}`,          lastmod: GEO_LASTMOD,    changefreq: 'monthly', priority: 0.85 });
const topicSlugs = ['formation-intelligence-artificielle-cpf','formation-intelligence-artificielle-distanciel','formation-intelligence-artificielle-generative','formation-ia-qualiopi','financement-formation-ia'];
for (const s of topicSlugs)   urls.push({ loc: `${SITE}/${s}`,          lastmod: STATIC_LASTMOD, changefreq: 'monthly', priority: 0.85 });
for (const s of [...spokeSet].sort()) urls.push({ loc: `${SITE}/${s}`,  lastmod: SPOKE_LASTMOD,  changefreq: 'monthly', priority: 0.7 });
for (const b of blogEntries)  urls.push({ loc: `${SITE}/blog/${b.slug}`, lastmod: b.lastmod,     changefreq: 'monthly', priority: 0.6 });
const blogSlugs = blogEntries.map(b => b.slug);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml);
console.log(`✅ ${urls.length} URLs → public/sitemap.xml`);
console.log(`   ${staticRoutes.length} statiques, ${hubSlugs.length} hubs, ${metierSlugs.length} métiers, ${geoSlugs.length} géo, ${spokeSet.size} spokes, ${blogSlugs.length} articles`);
