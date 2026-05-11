/**
 * static-prerender.mjs — Prerender sans navigateur.
 *
 * Lit les données SEO directement depuis les fichiers source, génère
 * le HTML statique pour chaque route du sitemap.xml, et l'écrit dans
 * dist/<route>/index.html sans aucun browser headless.
 *
 * Résultat : même bénéfice SEO que le prerender Puppeteer, mais sans
 * dépendance à Chrome.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const SITE = 'https://www.master-ia.fr';
const OG_IMAGE = `${SITE}/assets/logo-horizontal.png`;

// ──────────────────────────────────────────────────────────────────────────────
// 1) Import des données source
// ──────────────────────────────────────────────────────────────────────────────

const {
  GEO_CITIES, GEO_REGIONS, GEO_DESTINATIONS, GEO_TOOLS,
} = await import(pathToFileURL(path.join(root, 'src/data/geo-data.js')).href);

const { BLOG_ARTICLES } = await import(
  pathToFileURL(path.join(root, 'src/data/blog-articles.js')).href
);

const { CHATGPT_SPOKES } = await import(
  pathToFileURL(path.join(root, 'src/data/chatgpt-spokes-enriched.js')).href
);
const { COPILOT_SPOKES } = await import(
  pathToFileURL(path.join(root, 'src/data/copilot-spokes-enriched.js')).href
);
const { GEMINI_SPOKES } = await import(
  pathToFileURL(path.join(root, 'src/data/gemini-spokes-enriched.js')).href
);
const { CLAUDE_SPOKES } = await import(
  pathToFileURL(path.join(root, 'src/data/claude-spokes-enriched.js')).href
);
const { MISTRAL_SPOKES } = await import(
  pathToFileURL(path.join(root, 'src/data/mistral-spokes-enriched.js')).href
);
const { MULTI_OUTILS_SPOKES } = await import(
  pathToFileURL(path.join(root, 'src/data/multi-outils-spokes.js')).href
);

// Spokes BASE depuis seo-pages.js (via regex sur le texte)
const seoPagesText = fs.readFileSync(path.join(root, 'src/data/seo-pages.js'), 'utf8');

// ──────────────────────────────────────────────────────────────────────────────
// 2) Construction de la map route → SEO
// ──────────────────────────────────────────────────────────────────────────────

/** @type {Map<string, {title:string, desc:string, type?:string}>} */
const SEO = new Map();

// ── Helpers
function set(slug, title, desc, extra = {}) {
  SEO.set(slug, { title, desc, ...extra });
}

// ── Pages statiques
set('', 'Formation IA pour entreprises | Certifié Qualiopi | Masteria',
  'Centre de formation IA certifié Qualiopi. +500 professionnels formés. Formations ChatGPT, Copilot, Gemini, Claude, Mistral, finançables OPCO. Présentiel et distanciel partout en France.');

set('conseil-intelligence-artificielle',
  'Conseil IA pour entreprises | Audit, stratégie, déploiement | Masteria',
  'Cabinet de conseil IA spécialisé pour PME et grandes entreprises. Audit IA, stratégie de transformation, déploiement opérationnel. Certifié Qualiopi, partenaire formation inclus.');

set('centre-formation-ia-entreprise',
  'Masteria — Centre de formation IA certifié Qualiopi | Fondé par Mathias Nizan',
  'Masteria est un centre de formation IA certifié Qualiopi fondé en 2022 par Mathias Nizan. +500 professionnels formés, 98% de satisfaction. Présentiel et distanciel en France, Suisse et Belgique.');

set('contact',
  'Demander un devis formation IA | Réponse sous 24h | Masteria',
  'Obtenez un devis personnalisé pour votre formation IA en entreprise. Réponse sous 24h. Certifié Qualiopi, finançable OPCO. Présentiel ou distanciel, partout en France.');

set('blog',
  'Blog IA en entreprise | Guides, conseils et actualités | Masteria',
  'Guides pratiques, conseils et actualités sur l\'IA en entreprise. Prompt engineering, cas d\'usage métier, financement formation, comparatifs d\'outils. Par les experts Masteria.');

set('formation-intelligence-artificielle',
  'Formation IA en entreprise · Catalogue 89 formations · Certifié Qualiopi | Masteria',
  'Formation IA pour entreprises : 89 programmes certifiés Qualiopi, finançables OPCO. ChatGPT, Copilot, Gemini, Claude, Mistral. Adaptés à chaque métier, présentiel & distanciel. Devis sous 24h.');

set('formation-ia-debutant',
  'Formation intelligence artificielle débutant · Sans prérequis · Certifié Qualiopi | Masteria',
  'Formation intelligence artificielle pour débutants : ChatGPT, Copilot ou Gemini en 1 journée, sans prérequis technique. Formation IA débutant certifiée Qualiopi, finançable OPCO. Devis sous 24h.');

set('mentions-legales',
  'Mentions légales | Masteria',
  'Mentions légales du site Masteria — centre de formation IA certifié Qualiopi.');

set('politique-de-confidentialite',
  'Politique de confidentialité | Masteria',
  'Politique de confidentialité et traitement des données personnelles — Masteria.');

// ── Topic pages
set('formation-intelligence-artificielle-cpf',
  'Formation IA et CPF : pourquoi utiliser l\'OPCO plutôt que le CPF | Masteria',
  'La formation IA n\'est pas éligible CPF (non certifiante RS/RNCP). Découvrez pourquoi l\'OPCO est plus avantageux : prise en charge 100%, pas de plafond individuel, montage dossier inclus.');

set('formation-intelligence-artificielle-distanciel',
  'Formation IA à distance (distanciel) | Synchrone, interactif, certifié Qualiopi | Masteria',
  'Formation IA en distanciel synchrone : mêmes formateurs, mêmes cas pratiques, mêmes résultats qu\'en présentiel. Certifié Qualiopi, finançable OPCO. Partout en France, Suisse et Belgique.');

set('formation-intelligence-artificielle-generative',
  'Formation IA générative en entreprise | ChatGPT, Gemini, Claude, Mistral | Masteria',
  'Formation IA générative pour les entreprises : comprendre les LLM, maîtriser le prompt engineering et déployer des cas d\'usage concrets. Certifié Qualiopi, finançable OPCO. Devis sous 24h.');

set('formation-ia-qualiopi',
  'Formation IA certifiée Qualiopi | Financement OPCO 100% | Masteria',
  'Masteria est certifié Qualiopi pour ses formations IA. Découvrez comment financer votre formation IA via votre OPCO : ATLAS, AKTO, OPCO 2i, CONSTRUCTYS... Dossier monté par nos soins.');

set('financement-formation-ia',
  'Financement formation IA : OPCO, Plan de développement, CPF | Guide complet | Masteria',
  'Guide complet du financement de la formation IA en entreprise. OPCO, plan de développement des compétences, France Travail : quels dispositifs utiliser ? Masteria certifié Qualiopi vous accompagne.');

// ── Hub pages
const HUBS_SEO = [
  { slug: 'formation-chatgpt',
    title: 'Formation ChatGPT pour les entreprises — Certifié Qualiopi | Masteria',
    desc: 'Formation ChatGPT certifiée Qualiopi, finançable OPCO jusqu\'à 100 %. Rédaction, analyse, automatisation. Présentiel ou distanciel, partout en France. Devis sous 24h.' },
  { slug: 'formation-microsoft-copilot',
    title: 'Formation Microsoft Copilot en entreprise | Word, Excel, Teams | Certifié Qualiopi | Masteria',
    desc: 'Formez vos équipes à Microsoft Copilot dans Word, Excel, Teams et Outlook. Formation pratique sur mesure, certifiée Qualiopi, finançable OPCO jusqu\'à 100 %. Devis sous 24h.' },
  { slug: 'formation-gemini-entreprise',
    title: 'Formation Google Gemini en entreprise | Gmail, Docs, Sheets | Certifié Qualiopi | Masteria',
    desc: 'Formez vos équipes à Google Gemini dans Gmail, Google Docs, Sheets et Meet. Formation pratique sur votre Workspace, certifiée Qualiopi, finançable OPCO. Devis sous 24h.' },
  { slug: 'formation-claude-ia',
    title: 'Formation Claude IA pour les entreprises — Certifié Qualiopi | Masteria',
    desc: 'Maîtrisez Claude, l\'IA d\'Anthropic. Formation présentiel ou distanciel, finançable OPCO jusqu\'à 100 %. Rédaction longue, analyse de documents, raisonnement complexe. Devis sous 24h.' },
  { slug: 'formation-mistral-ai',
    title: 'Formation Mistral AI — L\'IA française pour vos équipes | Masteria',
    desc: 'Formez-vous au LLM souverain Mistral. Cas d\'usage professionnels, conformité RGPD, hébergement UE. Certifié Qualiopi, financement OPCO disponible.' },
];
for (const h of HUBS_SEO) set(h.slug, h.title, h.desc);

// ── Metier pages
const METIERS_SEO = [
  { slug: 'formation-ia-marketing',
    title: 'Formation IA Marketing | ChatGPT, Copilot, Gemini | Masteria, Qualiopi',
    desc: 'Formez vos équipes marketing à l\'IA : ChatGPT, Copilot, Gemini. Rédaction de contenus, campagnes, reporting. Certifié Qualiopi, finançable OPCO. +500 professionnels formés.' },
  { slug: 'formation-ia-ressources-humaines',
    title: 'Formation IA Ressources Humaines | ChatGPT, Copilot, Gemini | Masteria, Qualiopi',
    desc: 'Formez vos équipes RH à l\'IA : recrutement, onboarding, entretiens annuels, gestion administrative. Certifié Qualiopi, finançable OPCO. +500 professionnels formés.' },
  { slug: 'formation-ia-commercial',
    title: 'Formation IA Commercial & Vente | ChatGPT, Copilot, Gemini | Masteria, Qualiopi',
    desc: 'Formez vos équipes commerciales à l\'IA : prospection, propositions, suivi client. Certifié Qualiopi, finançable OPCO. Résultats mesurables dès la première semaine.' },
  { slug: 'formation-ia-finance',
    title: 'Formation IA Finance & Contrôle de Gestion | ChatGPT, Copilot, Gemini | Masteria',
    desc: 'Formez vos équipes finance à l\'IA : reporting, analyse de données, synthèses financières. Certifié Qualiopi, finançable OPCO. Résultats visibles dès la clôture suivante.' },
  { slug: 'formation-ia-communication',
    title: 'Formation intelligence artificielle Communication | Contenus, RP, réseaux sociaux | Certifié Qualiopi | Masteria',
    desc: 'Formation intelligence artificielle pour les équipes communication : contenus éditoriaux, relations presse, réseaux sociaux, communication de crise. Certifié Qualiopi, finançable OPCO. Devis sous 24h.' },
  { slug: 'formation-ia-management',
    title: 'Formation IA Management | ChatGPT, Copilot pour managers | Masteria, Qualiopi',
    desc: 'Formez vos managers à l\'IA : réunions, reporting, communication d\'équipe, conduite du changement. Certifié Qualiopi, finançable OPCO. Moins de tâches admin, plus de terrain.' },
  { slug: 'formation-ia-assistante',
    title: 'Formation IA Assistanat de direction | ChatGPT, Copilot | Masteria, Qualiopi',
    desc: 'Formez vos assistantes de direction à l\'IA : emails, courriers, organisation, comptes-rendus. Certifié Qualiopi, finançable OPCO. Rédiger dans le style de la direction en quelques minutes.' },
  { slug: 'formation-ia-seo',
    title: 'Formation IA pour les équipes SEO | ChatGPT, Gemini, Claude | Masteria, Qualiopi',
    desc: 'Formez vos équipes SEO à l\'IA : contenu optimisé à grande échelle, recherche sémantique, balises, maillage. Certifié Qualiopi, finançable OPCO. Productivité ×5.' },
  { slug: 'formation-ia-service-client',
    title: 'Formation IA Service Client | ChatGPT, Copilot, Gemini, Claude | Masteria',
    desc: 'Formez vos équipes service client à l\'IA : réponses rapides et cohérentes, gestion des escalades, scripts. Certifié Qualiopi, finançable OPCO. Traitement accéléré de 60%.' },
  { slug: 'formation-ia-informatique',
    title: 'Formation IA pour les DSI et équipes IT | ChatGPT, Copilot, Claude | Masteria',
    desc: 'Formez vos équipes IT et DSI à l\'IA : documentation technique, code, logs, gouvernance IA. Certifié Qualiopi, finançable OPCO. Usages pratiques et cadre stratégique.' },
  { slug: 'formation-ia-pedagogique',
    title: 'Formation IA pour les Équipes Pédagogiques | ChatGPT, Claude | Masteria',
    desc: 'Formez vos équipes pédagogiques à l\'IA : création de modules, individualisation des parcours, évaluations. Certifié Qualiopi, finançable OPCO. Un module en 2h au lieu de 2 jours.' },
];
for (const m of METIERS_SEO) set(m.slug, m.title, m.desc);

// ── Spoke pages (enriched files)
const ALL_SPOKES = [
  ...CHATGPT_SPOKES, ...COPILOT_SPOKES, ...GEMINI_SPOKES,
  ...CLAUDE_SPOKES, ...MISTRAL_SPOKES, ...MULTI_OUTILS_SPOKES,
];
for (const s of ALL_SPOKES) {
  if (s.metaTitle && s.metaDesc) set(s.slug, s.metaTitle, s.metaDesc);
}

// ── Spoke pages BASE (depuis seo-pages.js text — fallback pour les non-enriched)
// Extrait: slug → { metaTitle, metaDesc }
{
  // Pattern : cherche un bloc {slug:'...', ...metaTitle:'...', ...metaDesc:'...'}
  const blockRe = /\{[\s\S]*?slug:\s*['"]([^'"]+)['"][\s\S]*?metaTitle:\s*['"]([^'"]*(?:\\'[^'"]*)*)['"]/g;
  const descRe = /metaDesc:\s*['"]([^'"]*(?:\\'[^'"]*)*)['"]/;
  let bm;
  while ((bm = blockRe.exec(seoPagesText)) !== null) {
    const slug = bm[1];
    const title = bm[2].replace(/\\'/g, "'");
    if (!SEO.has(slug)) {
      // Find desc in the next 500 chars
      const chunk = seoPagesText.slice(bm.index, bm.index + 800);
      const dm = chunk.match(descRe);
      const desc = dm ? dm[1].replace(/\\'/g, "'") : '';
      if (title && desc) set(slug, title, desc);
    }
  }
}

// ── Spoke fallback : génération automatique pour les spokes non-enrichis
// Pattern : formation-{toolSlug}-{metierSlug}
const TOOL_NAMES = {
  'chatgpt': 'ChatGPT',
  'copilot': 'Microsoft Copilot',
  'gemini': 'Google Gemini',
  'claude': 'Claude IA',
  'mistral': 'Mistral AI',
};
const METIER_NAMES = {
  'marketing': 'Marketing',
  'ressources-humaines': 'Ressources Humaines',
  'rh': 'Ressources Humaines',
  'commercial': 'Commercial & Vente',
  'finance': 'Finance',
  'communication': 'Communication',
  'management': 'Management',
  'assistante': 'Assistanat de direction',
  'seo': 'SEO',
  'service-client': 'Service Client',
  'informatique': 'IT & DSI',
  'pedagogique': 'Équipes Pédagogiques',
  'word-excel': 'Word & Excel',
};
// Génère pour tous les combos tool × metier manquants
for (const [toolSlug, toolName] of Object.entries(TOOL_NAMES)) {
  for (const [metierSlug, metierName] of Object.entries(METIER_NAMES)) {
    const spoke = `formation-${toolSlug}-${metierSlug}`;
    if (!SEO.has(spoke)) {
      set(spoke,
        `Formation ${toolName} ${metierName} | Certifié Qualiopi | Masteria`,
        `Formez vos équipes ${metierName} à ${toolName}. Formation pratique, certifiée Qualiopi, finançable OPCO. Cas d'usage concrets adaptés à votre métier. Devis sous 24h.`
      );
    }
  }
}

// ── Geo spoke pages (formation-{tool}-{city})
for (const tool of GEO_TOOLS) {
  for (const city of GEO_CITIES) {
    const slug = `formation-${tool.slug}-${city.slug}`;
    if (!SEO.has(slug)) {
      set(slug,
        `Formation ${tool.shortName} ${city.nameLoc} | Certifié Qualiopi | Masteria`,
        `Formation ${tool.shortName} en intra-entreprise ${city.nameLoc}. Programme sur mesure, cas d'usage ${city.sectors?.split(',')[0] || 'métier'}. Certifié Qualiopi, finançable OPCO. Devis sous 24h.`
      );
    }
  }
}

// ── Geo IA generiques (formation-ia-{city})
for (const dest of GEO_DESTINATIONS) {
  const slug = `formation-ia-${dest.slug}`;
  const locPrep = dest.nameLoc; // "à Paris", "en Suisse"
  set(slug,
    `Formation IA ${locPrep} | ChatGPT, Copilot, Gemini | Certifié Qualiopi | Masteria`,
    `Formation intelligence artificielle ${locPrep} : ChatGPT, Copilot, Gemini, Claude, Mistral. Intra-entreprise sur mesure, certifié Qualiopi, finançable OPCO${dest.isCountry ? '' : ' en ' + dest.region}. Devis sous 24h.`
  );
}

// ── Blog articles
for (const art of BLOG_ARTICLES) {
  set(`blog/${art.slug}`,
    art.metaTitle || art.title,
    art.metaDesc || art.excerpt || '',
    { type: 'article', datePublished: art.datePublished, dateModified: art.dateModified }
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// 3) Lecture du shell HTML et du sitemap
// ──────────────────────────────────────────────────────────────────────────────

const SHELL_HTML = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const sitemapXml = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const routes = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(m => m[1].replace(SITE, '').replace(/^\/?/, ''))
  .map(r => r === '' ? '' : r);

// ──────────────────────────────────────────────────────────────────────────────
// 4) Injection SEO dans le HTML
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Génère les balises SEO à injecter dans <head>.
 * Remplace les valeurs existantes dans le shell si elles existent déjà,
 * sinon les ajoute avant </head>.
 */
function buildSeoTags(slug, { title, desc, type = 'website', datePublished, dateModified } = {}) {
  const fullUrl = slug ? `${SITE}/${slug}` : `${SITE}/`;
  const safeTitle = (title || '').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const safeDesc = (desc || '').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  // JSON-LD Organization
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization'],
    '@id': `${SITE}/#organization`,
    name: 'Masteria',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo-horizontal.png`, width: 1200, height: 675 },
    description: 'Centre de formation IA certifié Qualiopi et cabinet de conseil. Formations ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral AI, finançables OPCO.',
    foundingDate: '2022',
    address: { '@type': 'PostalAddress', streetAddress: '17 Rue Richan', postalCode: '69004', addressLocality: 'Lyon', addressCountry: 'FR' },
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+33-6-67-75-41-28', email: 'mathias.nizan@master-ia.fr' },
    hasCredential: { '@type': 'EducationalOccupationalCredential', name: 'Certification Qualiopi', credentialCategory: 'Actions de formation' },
  };

  // JSON-LD WebPage
  const jsonLdPage = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'BlogPosting' : 'WebPage',
    '@id': `${fullUrl}#webpage`,
    url: fullUrl,
    name: title,
    description: desc,
    inLanguage: 'fr-FR',
    publisher: { '@id': `${SITE}/#organization` },
    ...(datePublished ? { datePublished, dateModified: dateModified || datePublished } : {}),
  };

  return `<title>${safeTitle}</title>
<meta name="description" content="${safeDesc}">
<link rel="canonical" href="${fullUrl}">
<link rel="alternate" hreflang="fr-FR" href="${fullUrl}">
<link rel="alternate" hreflang="x-default" href="${fullUrl}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta property="og:type" content="${type}">
<meta property="og:title" content="${safeTitle}">
<meta property="og:description" content="${safeDesc}">
<meta property="og:url" content="${fullUrl}">
<meta property="og:site_name" content="Masteria">
<meta property="og:locale" content="fr_FR">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${safeTitle}">
<meta name="twitter:description" content="${safeDesc}">
<meta name="twitter:image" content="${OG_IMAGE}">
<script type="application/ld+json">${JSON.stringify(jsonLdOrg)}</script>
<script type="application/ld+json">${JSON.stringify(jsonLdPage)}</script>`;
}

function prerenderOne(slug, seoData) {
  const tags = buildSeoTags(slug, seoData);
  let html = SHELL_HTML;

  // Retire les tags existants du shell (title, meta description, canonical)
  html = html
    .replace(/<title>[^<]*<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>/i, '');

  // Injecte les nouveaux tags avant </head>
  html = html.replace('</head>', `${tags}\n</head>`);
  return html;
}

// ──────────────────────────────────────────────────────────────────────────────
// 5) Boucle principale
// ──────────────────────────────────────────────────────────────────────────────

let ok = 0, fallback = 0, fail = 0;
const missing = [];

for (const route of routes) {
  const seoData = SEO.get(route);

  try {
    const html = seoData ? prerenderOne(route, seoData) : SHELL_HTML;
    if (!seoData) { fallback++; missing.push(route); }

    const outDir = route === '' ? dist : path.join(dist, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    ok++;
  } catch (e) {
    fail++;
    console.warn(`✗ ${route || '/'} — ${e.message.split('\n')[0]}`);
  }
}

console.log(`\n✅ Static prerender terminé — ${ok} écrits, ${fallback} sans SEO data, ${fail} erreurs`);
if (missing.length) {
  console.log(`\n⚠ Routes sans SEO data (shell générique utilisé) :`);
  missing.forEach(r => console.log(`  - /${r}`));
}
if (fail > 0) process.exit(1);
