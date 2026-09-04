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
  { path: 'conseil-strategie-ia',                prio: 0.7, freq: 'monthly', files: ['src/pages/ConseilStrategieIAPage.jsx'] },
  { path: 'conseil-transformation-ia',           prio: 0.8, freq: 'monthly', files: ['src/pages/ConseilTransformationIAPage.jsx'] },
  { path: 'conseil-ia-pme',                      prio: 0.8, freq: 'monthly', files: ['src/pages/ConseilIAPMEPage.jsx'] },
  { path: 'chief-ai-officer',                    prio: 0.8, freq: 'monthly', files: ['src/pages/ChiefAIOfficerPage.jsx'] },
  { path: 'ia-gestion-de-projet',                prio: 0.8, freq: 'monthly', files: ['src/pages/IAGestionDeProjetPage.jsx'] },
  { path: 'conseil-data-ia',                     prio: 0.75, freq: 'monthly', files: ['src/pages/ConseilDataIAPage.jsx'] },
  { path: 'gouvernance-ia',                       prio: 0.75, freq: 'monthly', files: ['src/pages/GouvernanceIAPage.jsx'] },
  { path: 'charte-ia-entreprise',                 prio: 0.75, freq: 'monthly', files: ['src/pages/CharteIAEntreprisePage.jsx'] },
  { path: 'ia-responsable',                       prio: 0.75, freq: 'monthly', files: ['src/pages/IAResponsablePage.jsx'] },
  { path: 'ia-et-rgpd',                           prio: 0.75, freq: 'monthly', files: ['src/pages/IAEtRGPDPage.jsx'] },
  { path: 'prix-projet-ia',                       prio: 0.75, freq: 'monthly', files: ['src/pages/PrixProjetIAPage.jsx'] },
  { path: 'roi-ia-entreprise',                    prio: 0.8, freq: 'monthly', files: ['src/pages/RoiIAEntreprisePage.jsx'] },
  { path: 'calculateur-roi-ia',                   prio: 0.7, freq: 'monthly', files: ['src/pages/CalculateurRoiIAPage.jsx'] },
  { path: 'ia-generative-entreprise',            prio: 0.8, freq: 'monthly', files: ['src/pages/IAGenerativeEntreprisePage.jsx'] },
  { path: 'cas-usage-ia-entreprise',             prio: 0.7, freq: 'monthly', files: ['src/pages/CasUsageIAEntreprisePage.jsx'] },
  { path: 'automatisation-ia',                   prio: 0.85, freq: 'monthly', files: ['src/pages/AutomatisationIAGuidePage.jsx'] },
  { path: 'agence-automatisation-ia',            prio: 0.8, freq: 'monthly', files: ['src/pages/AgenceAutomatisationIAPage.jsx'] },
  { path: 'agents-ia-entreprise',                prio: 0.8, freq: 'monthly', files: ['src/pages/AgentsIAEntreprisePage.jsx'] },
  { path: 'agence-ia',                           prio: 0.85, freq: 'monthly', files: ['src/pages/AgenceIAPage.jsx'] },
  { path: 'meilleure-agence-ia',                 prio: 0.8, freq: 'monthly', files: ['src/pages/MeilleureAgenceIAPage.jsx'] },
  { path: 'meilleur-cabinet-conseil-ia',         prio: 0.8, freq: 'monthly', files: ['src/pages/MeilleurCabinetConseilIAPage.jsx'] },
  { path: 'meilleure-formation-ia',              prio: 0.8, freq: 'monthly', files: ['src/pages/MeilleureFormationIAPage.jsx'] },
  { path: 'consultant-ia',                       prio: 0.8, freq: 'monthly', files: ['src/pages/ConsultantIAPage.jsx'] },
  { path: 'etudes-de-cas-ia',                    prio: 0.85, freq: 'monthly', files: ['src/pages/EtudesDeCasIAPage.jsx'] },
  { path: 'presse',                              prio: 0.5,  freq: 'monthly', files: ['src/pages/PressePage.jsx'] },
  { path: 'quel-opco',                           prio: 0.7,  freq: 'monthly', files: ['src/pages/QuelOpcoPage.jsx'] },
  { path: 'test-maturite-ia',                    prio: 0.6,  freq: 'monthly', files: ['src/pages/TestMaturiteIAPage.jsx'] },
  { path: 'quel-outil-ia',                       prio: 0.7,  freq: 'monthly', files: ['src/pages/QuelOutilIAPage.jsx'] },
  { path: 'bibliotheque-de-prompts',             prio: 0.8,  freq: 'monthly', files: ['src/pages/BibliothequePromptsPage.jsx', 'src/data/prompts-library.js'] },
  { path: 'agence-developpement-ia',             prio: 0.85, freq: 'monthly', files: ['src/pages/AgenceDeveloppementIAPage.jsx'] },
  { path: 'outils-ia-sur-mesure',                prio: 0.8, freq: 'monthly', files: ['src/pages/OutilsIASurMesurePage.jsx'] },
  { path: 'agence-ia-marketing',                 prio: 0.8, freq: 'monthly', files: ['src/pages/AgenceIAMarketingPage.jsx'] },
  { path: 'agence-seo-ia',                       prio: 0.8, freq: 'monthly', files: ['src/pages/AgenceSeoIAPage.jsx'] },
  { path: 'audit-seo-ia',                        prio: 0.8, freq: 'monthly', files: ['src/pages/AuditSeoIAPage.jsx'] },
  { path: 'audit-geo-ia',                        prio: 0.8, freq: 'monthly', files: ['src/pages/AuditGeoIAPage.jsx'] },
  { path: 'consultant-visibilite-ia',            prio: 0.8, freq: 'monthly', files: ['src/pages/ConsultantVisibiliteIAPage.jsx'] },
  { path: 'audit-conformite-ai-act',             prio: 0.8, freq: 'monthly', files: ['src/pages/AuditConformiteAIActPage.jsx'] },
  { path: 'audit-ia-medico-social',              prio: 0.75, freq: 'monthly', files: ['src/pages/AuditIAMedicoSocialPage.jsx'] },
  { path: 'agence-ia-lyon',                      prio: 0.8, freq: 'monthly', files: ['src/pages/AgenceGeoPage.jsx', 'src/data/agence-geo-data.js'] },
  { path: 'agence-ia-annecy',                    prio: 0.75, freq: 'monthly', files: ['src/pages/AgenceGeoPage.jsx', 'src/data/agence-geo-data.js'] },
  { path: 'agence-ia-paris',                     prio: 0.75, freq: 'monthly', files: ['src/pages/AgenceGeoPage.jsx', 'src/data/agence-geo-data.js'] },
  { path: 'agence-ia-geneve',                    prio: 0.75, freq: 'monthly', files: ['src/pages/AgenceGeoPage.jsx', 'src/data/agence-geo-data.js'] },
  { path: 'agence-ia-marseille',                 prio: 0.75, freq: 'monthly', files: ['src/pages/AgenceGeoPage.jsx', 'src/data/agence-geo-data.js'] },
  { path: 'agence-ia-strasbourg',                prio: 0.75, freq: 'monthly', files: ['src/pages/AgenceGeoPage.jsx', 'src/data/agence-geo-data.js'] },
  { path: 'agence-ia-nantes',                    prio: 0.75, freq: 'monthly', files: ['src/pages/AgenceGeoPage.jsx', 'src/data/agence-geo-data.js'] },
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
  'achats','qse','gestion-de-projet','marche-public','immobilier','commerce','sante',
  'juridique','comptabilite','assurance','btp','tourisme','transverse',
].map(m => `formation-ia-${m}`);

// Spokes (ChatGPT, Copilot, Gemini, Claude, Mistral, Sprint IA, Multi-outils Métier)
const src = fs.readFileSync(path.join(root, 'src/data/seo-pages.js'), 'utf8');
const spokeSet = new Set();
const spokeRe = /slug:\s*['"](formation-(?:chatgpt|copilot|gemini|claude|mistral|sprint-ia|ia|prompt|ai|vibe|gouvernance)-[a-z0-9-]+)['"]/g;
let m;
while ((m = spokeRe.exec(src)) !== null) {
  // Exclure hubs et routes "formation-ia-{metier}" déjà listées en métiers
  if (hubSlugs.includes(m[1])) continue;
  if (metierSlugs.includes(m[1])) continue;
  spokeSet.add(m[1]);
}

// Pages formation transversales stratégiques : retirées du lot spokes (0.5)
// et poussées à 0.7 (requêtes commerciales à fort volume).
const boostedSlugs = ['formation-claude-code', 'formation-vibe-coding', 'formation-prompt-engineering', 'formation-ia-dirigeants', 'formation-ai-act', 'formation-gouvernance-ia', 'formation-chatgpt-redaction'];
for (const s of boostedSlugs) spokeSet.delete(s);

// Pages géo : 2 outils × 5 villes = 10 pages outil×ville (stratégie ciblée)
const geoTools = ['chatgpt','claude-ia']
const geoCities = ['paris','lyon','marseille','geneve','bruxelles']
const geoSlugs = geoTools.flatMap(t => geoCities.map(c => `formation-${t}-${c}`))
// Exceptions outil×ville hors matrice (villes iaOnly avec whitelist `tools`
// dans geo-data.js) : Claude à Rennes et Nantes (demande locale forte).
geoSlugs.push('formation-claude-ia-rennes', 'formation-claude-ia-nantes')
geoSlugs.push('formation-chatgpt-rennes', 'formation-chatgpt-nantes', 'formation-chatgpt-nice', 'formation-chatgpt-bordeaux', 'formation-chatgpt-toulouse', 'formation-chatgpt-strasbourg')

// Pages géo génériques : /formation-ia-{ville} — les 5 villes historiques
// + l'extension du 2026-08-28 (iaOnly : pas de pages outil×ville pour celles-ci)
const geoIaCities = [...geoCities, 'nantes', 'nice', 'lille', 'bordeaux', 'toulouse', 'strasbourg', 'rennes', 'grenoble', 'annecy', 'aix-en-provence', 'nimes']
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

// Articles publiés hors bundle (public/blog-data/), comme la veille : une
// publication incrémentale n'invalide pas le bundle. Le sitemap les énumère
// depuis le manifeste du dossier (scripts/publish.py côté pipeline blog-ia).
try {
  const bdIdx = JSON.parse(fs.readFileSync(path.join(root, 'public/blog-data/index.json'), 'utf8'));
  const knownSlugs = new Set(blogEntries.map(b => b.slug));
  for (const a of (Array.isArray(bdIdx) ? bdIdx : [])) {
    if (!a || !a.slug || a.externalPath || knownSlugs.has(a.slug)) continue;
    blogEntries.push({ slug: a.slug, lastmod: (a.dateModified || a.datePublished || today).split('T')[0] });
  }
} catch {
  // Pas encore d'article publié hors bundle : rien à ajouter.
}

// Dates par famille de pages, dérivées de git (dernier commit touchant les
// sources de la famille). Le lastmod ne bouge donc que quand le contenu change.
const HUB_LASTMOD    = gitLastMod(['src/data/hub-content.js', 'src/data/seo-pages.js', 'src/pages/HubPage.jsx']);
// Pages métier : lastmod PAR métier (données dans src/data/metiers/<slug>.js + template partagé).
const METIER_SHARED = ['src/data/seo-pages.js', 'src/data/metier-faq.js', 'src/pages/MetierPage.jsx'];
const metierLastMod = s => gitLastMod([`src/data/metiers/${s.replace(/^formation-ia-/, '')}.js`, `src/pages/metiers/${s.replace(/^formation-ia-/, '')}.jsx`, ...METIER_SHARED]);
const GEO_LASTMOD    = gitLastMod(['src/data/geo-data.js', 'src/pages/GeoPage.jsx', 'src/pages/GeoIAGenericPage.jsx']);
const SPOKE_LASTMOD  = gitLastMod([
  'src/data/seo-pages.js', 'src/data/multi-outils-spokes.js',
  'src/data/chatgpt-spokes-enriched.js', 'src/data/claude-spokes-enriched.js',
  'src/data/copilot-spokes-enriched.js', 'src/data/gemini-spokes-enriched.js',
  'src/data/mistral-spokes-enriched.js', 'src/pages/SpokePage.jsx',
]);
const TOPIC_LASTMOD  = gitLastMod([
  'src/pages/TopicLandingPage.jsx', 'src/pages/AutomatisationIAPage.jsx',
  'src/pages/QualiopiPage.jsx', 'src/pages/FinancementPage.jsx',
]);

const urls = [];
// Pyramide de priorités aplatie pour un domaine jeune au crawl-budget limité :
// les seules pages priority ≥ 0.9 sont la home et les 7 hubs outils stratégiques.
// Le reste descend pour que Google concentre son crawl sur les pages à plus fort impact.
for (const r of staticRoutes) urls.push({ loc: r.path ? `${SITE}/${r.path}` : `${SITE}/`, lastmod: r.files ? gitLastMod(r.files) : today, changefreq: r.freq, priority: r.prio });
for (const s of hubSlugs)     urls.push({ loc: `${SITE}/${s}`,          lastmod: HUB_LASTMOD,    changefreq: 'monthly', priority: 0.9 });
for (const s of metierSlugs)  urls.push({ loc: `${SITE}/${s}`,          lastmod: metierLastMod(s), changefreq: 'monthly', priority: 0.6 });
// Hiérarchie géo : la page ville (formation-ia-{ville}) est la page canonique de
// l'intention locale ; les pages outil×ville sont ses enfants (0.6). Lyon est le
// siège de Masteria : priorité renforcée sur la requête locale principale.
for (const s of geoSlugs)     urls.push({ loc: `${SITE}/${s}`,          lastmod: GEO_LASTMOD,    changefreq: 'monthly', priority: 0.6 });
for (const s of geoIaSlugs)   urls.push({ loc: `${SITE}/${s}`,          lastmod: GEO_LASTMOD,    changefreq: 'monthly', priority: s === 'formation-ia-lyon' ? 0.8 : 0.7 });
const topicSlugs = ['formation-intelligence-artificielle-cpf','formation-intelligence-artificielle-distanciel','formation-intelligence-artificielle-generative','formation-automatisation-ia','formation-ia-qualiopi','financement-formation-ia'];
for (const s of topicSlugs)   urls.push({ loc: `${SITE}/${s}`,          lastmod: TOPIC_LASTMOD,  changefreq: 'monthly', priority: 0.7 });
for (const s of boostedSlugs) urls.push({ loc: `${SITE}/${s}`,          lastmod: SPOKE_LASTMOD,  changefreq: 'monthly', priority: 0.7 });
// Cluster « IA par secteur » : hub + 12 secteurs (conseil/dev high-ticket).
const SECTEUR_LASTMOD = gitLastMod(['src/data/secteur-ia-data.js', 'src/pages/SecteurIAPage.jsx', 'src/pages/SecteursHubPage.jsx']);
const secteurSlugs = ['ia-banque-assurance','ia-industrie','ia-sante-pharma','ia-juridique','ia-retail-ecommerce','ia-logistique-transport','ia-immobilier-btp','ia-secteur-public','ia-services-conseil','ia-tourisme-hotellerie','ia-agroalimentaire','ia-tech-saas'];
urls.push({ loc: `${SITE}/ia-secteurs`, lastmod: SECTEUR_LASTMOD, changefreq: 'monthly', priority: 0.8 });
for (const s of secteurSlugs) urls.push({ loc: `${SITE}/${s}`, lastmod: SECTEUR_LASTMOD, changefreq: 'monthly', priority: 0.7 });
// Cluster « solutions IA sur mesure » : hub + 7 solutions.
const SOLUTION_LASTMOD = gitLastMod(['src/data/solution-ia-data.js', 'src/pages/SolutionIAPage.jsx', 'src/pages/SolutionsHubPage.jsx']);
const solutionSlugs = ['copilote-ia-interne','assistant-documentaire-ia','agent-support-client-ia','automatisation-documentaire-ia','agent-commercial-ia','chatbot-ia-sur-mesure','integration-llm-rag'];
urls.push({ loc: `${SITE}/solutions-ia`, lastmod: SOLUTION_LASTMOD, changefreq: 'monthly', priority: 0.8 });
for (const s of solutionSlugs) urls.push({ loc: `${SITE}/${s}`, lastmod: SOLUTION_LASTMOD, changefreq: 'monthly', priority: 0.7 });
// Offres de conversion high-ticket.
urls.push({ loc: `${SITE}/diagnostic-ia`, lastmod: gitLastMod(['src/pages/DiagnosticIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/audit-ia`, lastmod: gitLastMod(['src/pages/AuditIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/accompagnement-ia`, lastmod: gitLastMod(['src/pages/AccompagnementIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/acculturation-ia`, lastmod: gitLastMod(['src/pages/AcculturationIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/conference-ia`, lastmod: gitLastMod(['src/pages/ConferenceIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/atelier-intelligence-artificielle`, lastmod: gitLastMod(['src/pages/AtelierIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/sensibilisation-ia`, lastmod: gitLastMod(['src/pages/SensibilisationIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/salons-ia`, lastmod: gitLastMod(['src/pages/SalonsIAPage.jsx']), changefreq: 'monthly', priority: 0.7 });
urls.push({ loc: `${SITE}/formation-ia-entreprise`, lastmod: gitLastMod(['src/pages/FormationIAEntreprisePage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/formation-agents-ia`, lastmod: gitLastMod(['src/pages/FormationAgentsIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/formation-ia-comex`, lastmod: gitLastMod(['src/pages/FormationIAComexPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/formation-n8n`, lastmod: gitLastMod(['src/pages/FormationN8nPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/formation-make`, lastmod: gitLastMod(['src/pages/FormationMakePage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/formation-zapier`, lastmod: gitLastMod(['src/pages/FormationZapierPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/formation-cse-ia`, lastmod: gitLastMod(['src/pages/FormationCseIaPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/formation-data-ia`, lastmod: gitLastMod(['src/pages/FormationDataIaPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/formation-gouvernance-donnees`, lastmod: gitLastMod(['src/pages/FormationGouvernanceDonneesPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/prestataire-ia`, lastmod: gitLastMod(['src/pages/PrestataireIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/coaching-ia`, lastmod: gitLastMod(['src/pages/CoachingIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
urls.push({ loc: `${SITE}/methode-projet-ia`, lastmod: gitLastMod(['src/pages/MethodeProjetIAPage.jsx']), changefreq: 'monthly', priority: 0.6 });
// Page pilier « veille IA » (intention méthode/outils, cible le mot-clé + le cluster automatisation).
urls.push({ loc: `${SITE}/automatiser-sa-veille-ia`, lastmod: gitLastMod(['src/pages/AutomatiserVeilleIAPage.jsx']), changefreq: 'monthly', priority: 0.8 });
// Pages sœurs du cluster veille (outils + usage concurrentiel).
urls.push({ loc: `${SITE}/outils-veille-ia`, lastmod: gitLastMod(['src/pages/OutilsVeilleIAPage.jsx']), changefreq: 'monthly', priority: 0.7 });
urls.push({ loc: `${SITE}/veille-concurrentielle-ia`, lastmod: gitLastMod(['src/pages/VeilleConcurrentielleIAPage.jsx']), changefreq: 'monthly', priority: 0.7 });
for (const s of [...spokeSet].sort()) urls.push({ loc: `${SITE}/${s}`,  lastmod: SPOKE_LASTMOD,  changefreq: 'monthly', priority: 0.5 });
for (const b of blogEntries)  urls.push({ loc: `${SITE}/blog/${b.slug}`, lastmod: b.lastmod,     changefreq: 'monthly', priority: 0.5 });
const blogSlugs = blogEntries.map(b => b.slug);

// ─── Veille IA ───
// Les éditions ne sont pas dans le bundle : elles vivent en JSON dans
// public/veille-data/ pour qu'une publication quotidienne ne change pas le
// hash des assets et n'invalide pas les pages déjà prérendues. Le sitemap les
// énumère donc depuis l'index de ce dossier, pas depuis un module importé.
// Le lastmod vient de la date de l'édition, qui est sa date de publication.
let veilleEditions = [];
try {
  const idx = JSON.parse(fs.readFileSync(path.join(root, 'public/veille-data/index.json'), 'utf8'));
  veilleEditions = (idx.editions || []).filter(e => /^\d{4}-\d{2}-\d{2}$/.test(e.date || ''));
} catch {
  // Pas encore d'édition publiée : la rubrique n'entre pas au sitemap.
}
if (veilleEditions.length) {
  const derniere = veilleEditions[0].date;
  urls.push({ loc: `${SITE}/veille-ia`, lastmod: derniere, changefreq: 'daily', priority: 0.8 });
  // Page À propos / politique éditoriale, statique.
  urls.push({ loc: `${SITE}/veille-ia/a-propos`, lastmod: gitLastMod(['src/pages/VeilleAProposPage.jsx']), changefreq: 'monthly', priority: 0.5 });
  // La page des publications change à chaque édition : sa liste s'allonge.
  urls.push({ loc: `${SITE}/veille-ia/publications`, lastmod: derniere, changefreq: 'daily', priority: 0.6 });
  for (const e of veilleEditions) {
    urls.push({ loc: `${SITE}/veille-ia/${e.date}`, lastmod: e.date, changefreq: 'yearly', priority: 0.5 });
  }
}

// Version anglaise de la veille (/en/ai-watch). Elle a son propre index, écrit
// par publish.py --lang en, et ne contient que les éditions effectivement
// traduites : les entrées ne sont donc jamais déduites du catalogue français.
let veilleEditionsEn = [];
try {
  const idxEn = JSON.parse(fs.readFileSync(path.join(root, 'public/veille-data/en/index.json'), 'utf8'));
  veilleEditionsEn = (idxEn.editions || []).filter(e => /^\d{4}-\d{2}-\d{2}$/.test(e.date || ''));
} catch { /* pas encore d'édition anglaise */ }

if (veilleEditionsEn.length) {
  const derniereEn = veilleEditionsEn[0].date;
  urls.push({ loc: `${SITE}/en/ai-watch`, lastmod: derniereEn, changefreq: 'daily', priority: 0.7 });
  urls.push({ loc: `${SITE}/en/ai-watch/publications`, lastmod: derniereEn, changefreq: 'daily', priority: 0.5 });
  for (const e of veilleEditionsEn) {
    urls.push({ loc: `${SITE}/en/ai-watch/${e.date}`, lastmod: e.date, changefreq: 'yearly', priority: 0.4 });
  }
}

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
console.log(`   ${staticRoutes.length} statiques, ${hubSlugs.length} hubs, ${metierSlugs.length} métiers, ${geoSlugs.length} géo, ${spokeSet.size} spokes, ${blogSlugs.length} articles, ${veilleEditions.length} éditions de veille`);

// ─────────────────────────────────────────────────────────────────
// Liste légère des slugs de spokes pour le routage (App.jsx).
// Perf : évite que App.jsx (chargé sur CHAQUE page) importe tout le dataset
// SPOKES enrichi (~490 kB) juste pour générer les <Route>. La page SpokePage,
// elle, charge le dataset complet en chunk lazy uniquement quand on l'ouvre.
// Source exacte = SPOKES (import dynamique), donc toujours synchro avec les pages.
const seoMod = await import(pathToFileURL(path.join(root, 'src/data/seo-pages.js')).href);
const spokeSlugList = seoMod.SPOKES.map(s => s.slug);
fs.writeFileSync(
  path.join(root, 'src/data/spoke-slugs.js'),
  `// Généré par scripts/generate-sitemap.mjs — NE PAS éditer à la main.\n` +
  `// Liste des slugs de spokes pour le routage léger (cf. App.jsx).\n` +
  `export const SPOKE_SLUGS = ${JSON.stringify(spokeSlugList, null, 0).replace(/","/g, "', '").replace(/^\["/, "['").replace(/"\]$/, "']")};\n`
);
console.log(`   + src/data/spoke-slugs.js (${spokeSlugList.length} slugs, routage léger)`);
