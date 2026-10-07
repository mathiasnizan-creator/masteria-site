import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Bot, Cpu, Network, Workflow, PenLine, Braces,
  BarChart3, Target, Gauge, Globe, MapPin, GraduationCap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « agence SEO IA » (slug /agence-seo-ia). Requêtes visées : « seo ia »,
 * « agence seo ia », « agence de référencement ia », « agence seo chatgpt »,
 * « agences seo ia », « agence ia seo », « freelance seo ia ».
 *
 * POSITIONNEMENT : les deux intentions sur les mêmes pages, vues par un cabinet IA :
 *  - SEO outillé par IA (production relue, maillage, technique, données structurées) ;
 *  - GEO / AEO : être cité par ChatGPT, Perplexity, Gemini, AI Overviews et Mode IA.
 * Les audits seuls vivent sur /audit-seo-ia et /audit-geo-ia : cette page décrit le
 * travail suivi, au quotidien, et renvoie vers eux.
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre au moins 90 %) : plus de FounderNote ni de
 * formule entité commune ; chiffres GEO repris de reference_chiffres_geo_2026 avec
 * leur source ; consignes Google et OpenAI vérifiées sur la documentation le 07/10.
 * INTÉGRITÉ : aucun client nommé, aucun résultat client chiffré, aucun prix ferme
 * (fourchettes larges, au forfait après cadrage). Prestation SEO et GEO : pas
 * finançable par votre OPCO ; seule la formation associée l est.
 */

const SLUG = 'agence-seo-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_MODIFIED = '2026-10-07'

const META_TITLE = "Agence SEO IA : référencement et visibilité IA | Masteria"
const META_DESC = "Agence SEO IA à Lyon : contenus, maillage, données structurées et suivi de vos citations par ChatGPT, Gemini, Perplexity et les AI Overviews."
const KEYWORDS = "agence seo ia, seo ia, agence de référencement ia, agence seo chatgpt, agence ia seo, freelance seo ia, geo generative engine optimization, référencement ia"

/* Sources citées par la page (WebPage.citation + bloc OfficialSources). Vérifiées le 07/10/2026. */
const PAGE_CITATIONS = [
  { name: "Google Search Central : les fonctions d'IA de la recherche (AI Overviews, Mode IA) et votre site", url: 'https://developers.google.com/search/docs/appearance/ai-features' },
  { name: "Google Search Central : ses consignes pour les sites qui publient des textes rédigés avec une IA", url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content' },
  { name: "OpenAI : le rôle de ses robots OAI-SearchBot (recherche ChatGPT) et GPTBot (entraînement)", url: 'https://developers.openai.com/api/docs/bots' },
  { name: "Pew Research Center : les internautes cliquent moins quand un résumé IA s'affiche (22 juillet 2025)", url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
]

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: Search,  label: 'Google et moteurs génératifs' },
  { icon: Bot,     label: 'Citations suivies dans ChatGPT, Perplexity, Gemini' },
  { icon: Cpu,     label: 'Rédaction outillée, relue par un humain' },
  { icon: MapPin,  label: 'Lyon, France · Europe · États-Unis · Inde' },
]

/* ───────── Le travail au quotidien (6 cartes) ───────── */

const LIVRABLES = [
  {
    icon: PenLine,
    title: 'Écrire les pages qui répondent',
    desc: "Chaque intention de recherche reçoit un brief : la question exacte, la réponse attendue en tête de page, les sources à citer, les pages à relier. Un assistant IA écrit une première version d'après ce brief ; un rédacteur la corrige, ajoute vos exemples et vos chiffres, puis la prépare pour la mise en ligne.",
  },
  {
    icon: Network,
    title: 'Relier les pages entre elles',
    desc: "Le maillage interne (les liens qui mènent d'une de vos pages à une autre) indique à Google quelle page fait référence sur quel sujet. Nous dessinons une page pilier par thème, ses pages filles, et des ancres de lien qui décrivent la destination au lieu d'un « cliquez ici ».",
  },
  {
    icon: Braces,
    title: 'Baliser votre entreprise pour les machines',
    desc: "Les données structurées (un balisage Schema.org invisible pour le lecteur) déclarent qui vous êtes, qui signe la page, ce que vous vendez et à quelles questions elle répond. Google précise qu'aucun balisage spécial n'est exigé pour ses AI Overviews : ce travail sert surtout à lever les ambiguïtés sur votre marque.",
  },
  {
    icon: BarChart3,
    title: 'Mesurer votre présence dans les IA',
    desc: "Nous tenons avec vous la liste des questions que posent vos clients, et nous la soumettons à date fixe à ChatGPT, Perplexity, Gemini et aux AI Overviews. Pour chaque réponse, on note si votre marque apparaît, si un lien pointe vers votre site et quel concurrent est cité à votre place.",
  },
  {
    icon: Gauge,
    title: 'Tenir la technique à jour',
    desc: "Indexation, vitesse d'affichage, pages en double, redirections : la technique décide si une page peut être lue. Nous relisons aussi le fichier robots.txt (les consignes données aux robots d'exploration) : un site qui bloque OAI-SearchBot, le robot de recherche d'OpenAI, sort des réponses de recherche de ChatGPT.",
  },
  {
    icon: Workflow,
    title: 'Automatiser le suivi',
    desc: "Les relevés de positions, la Search Console (l'outil de Google qui compte vos clics et vos apparitions) et les tests de citations alimentent un tableau de bord qui se met à jour seul, avec une alerte quand une page clé recule. Nos développeurs IA construisent ces flux ; votre équipe garde les décisions.",
  },
]

/* ───────── Méthode (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Mesurer le point de départ',
    desc: "Nous relevons vos positions et vos clics dans la Search Console, puis nous posons aux moteurs génératifs la liste de questions choisie avec vous. Ce relevé daté sert de référence pour toute la mission. Si vous voulez cette étape et rien d'autre, elle existe seule : c'est l'audit SEO IA.",
  },
  {
    num: '02',
    title: 'Cartographier les sujets et les entités',
    desc: "Pour un moteur, une entité est une chose identifiable : votre marque, un produit, un dirigeant, une norme. Nous listons celles de votre domaine et les questions qui s'y rattachent, puis nous les classons par valeur commerciale et par effort. Le résultat prend la forme d'un plan éditorial daté.",
  },
  {
    num: '03',
    title: "Produire avec l'IA, publier après relecture",
    desc: "Les briefs partent de la carte des sujets. L'IA accélère la recherche et le premier jet ; la relecture vérifie les faits, ajoute ce que seul votre métier sait et retire les généralités. Google le rappelle dans ses consignes : publier en masse des pages générées sans valeur ajoutée peut enfreindre sa règle contre les contenus produits à grande échelle.",
  },
  {
    num: '04',
    title: 'Régler la technique et le maillage',
    desc: "Indexation, vitesse, balisage Schema.org, liens internes, accès des robots d'exploration : nous corrigeons dans votre CMS (l'outil où vous éditez le site) ou nous rédigeons des tickets précis pour votre développeur.",
  },
  {
    num: '05',
    title: 'Relever, comparer, ajuster',
    desc: "À date fixe, le même relevé qu'au départ : positions, clics, citations moteur par moteur. Les pages qui progressent servent de modèle, celles qui stagnent sont reprises. Chaque bilan se termine par les décisions à prendre pour le cycle suivant.",
  },
]

/* ───────── Chiffres GEO (source : reference_chiffres_geo_2026, vérifiés le 30/09/2026) ───────── */

const CHIFFRES = [
  {
    v: '8 % au lieu de 15 %',
    l: "Sur cent visites Google qui affichent un résumé IA, huit se terminent par un clic vers un résultat, contre quinze sans résumé. Un clic sur une source citée dans le résumé n'intervient que dans 1 % des visites.",
    s: 'Pew Research Center, 22 juillet 2025 : 900 adultes américains, 68 879 recherches de mars 2025.',
  },
  {
    v: '2,5 milliards',
    l: "d'utilisateurs chaque mois pour les AI Overviews de Google, près d'un humain sur trois. Le Mode IA dépasse le milliard d'utilisateurs mensuels.",
    s: 'Google, conférence I/O, mai 2026.',
  },
  {
    v: '1,2 milliard',
    l: "d'utilisateurs de ChatGPT chaque semaine, environ un habitant de la planète sur sept, contre 400 millions en février 2025.",
    s: 'OpenAI, DevDay du 29 septembre 2026, chiffre rapporté par Engadget ; 400 millions annoncés par OpenAI en février 2025.',
  },
  {
    v: '59 %',
    l: "des personnes interrogées en France passent par un moteur de recherche pour s'informer, contre 28 % par l'IA générative : la recherche classique reste la première porte d'entrée.",
    s: 'Crédoc, Baromètre du numérique 2026 (Arcep, Arcom, CGE, ANCT) : 4 145 personnes de 12 ans et plus, terrain de juin 2025.',
  },
]

/* ───────── SEO classique / SEO augmenté IA / GEO ───────── */

const TABLE = [
  {
    critere: 'Ce que vous cherchez',
    classique: 'Une bonne place dans la liste de liens de Google',
    augmente: 'La même place, atteinte plus vite et sur un plus grand nombre de pages',
    geo: "Être la source que l'IA nomme ou met en lien dans sa réponse",
  },
  {
    critere: "Où l'on vous voit",
    classique: 'Résultats naturels de Google et de Bing',
    augmente: 'Résultats naturels, extraits mis en avant, AI Overviews',
    geo: 'ChatGPT, Gemini, Perplexity, Claude, le Mode IA et les AI Overviews de Google',
  },
  {
    critere: 'Ce que l’on travaille',
    classique: 'Contenu, technique, liens venus d’autres sites',
    augmente: "Briefs, premiers jets et audits préparés par l'IA, relus par un humain",
    geo: 'Entités nommées, réponse en tête de page, sources citées, mentions de la marque hors du site',
  },
  {
    critere: 'Comment on mesure',
    classique: 'Positions et clics dans la Search Console',
    augmente: 'Positions, clics, pages publiées par mois',
    geo: 'Part des questions suivies dont la réponse vous nomme, moteur par moteur',
  },
]

/* ───────── Pourquoi une agence IA pour le SEO ───────── */

const WHY = [
  { icon: Cpu, title: 'Nous savons comment un modèle choisit une source', desc: "Un moteur comme Perplexity lance des recherches, lit quelques pages et rédige une synthèse en citant celles dont la réponse est la plus nette. Masteria construit pour ses clients des assistants qui fonctionnent sur ce principe : nous voyons de près quelles pages ils retiennent et lesquelles ils laissent de côté." },
  { icon: Workflow, title: 'Le suivi tourne sans saisie manuelle', desc: "Relevés de citations, positions, alertes : nos développeurs IA relient ces données dans un tableau qui se met à jour seul. Vous lisez l'évolution d'un coup d'œil, sans compiler d'exports chaque mois." },
  { icon: Globe, title: 'Chaque moteur est suivi à part', desc: "Gemini, ChatGPT, Perplexity et les AI Overviews ne citent pas les mêmes sources pour une même question. Nous mesurons moteur par moteur, pour éviter de tout miser sur une plateforme dont les règles bougent souvent." },
  { icon: Target, title: 'Aucun raccourci qui se retourne contre vous', desc: "Les pages générées par centaines et les liens achetés enfreignent les règles anti-spam de Google, qui peut les déclasser. Nous publions moins de pages, chacune vérifiée et signée, pour qu'elles tiennent d'une mise à jour de l'algorithme à l'autre." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une agence SEO IA ?",
    a: "Une agence SEO IA, ou agence de référencement IA, mène deux chantiers sur les mêmes pages. Le premier est le référencement naturel outillé par l'IA : recherche de mots-clés, briefs, premiers jets et audits techniques préparés plus vite, puis relus. Le second est le GEO : faire en sorte que Gemini, ChatGPT, Perplexity et les AI Overviews nomment votre marque quand ils répondent à une question de votre marché. Masteria, cabinet lyonnais dédié à l'IA, mène les deux et mesure les résultats de chacun à part.",
  },
  {
    q: "SEO et GEO : quelle est la différence ?",
    a: "Le SEO (search engine optimization) travaille votre place dans la liste de résultats de Google. Le GEO (generative engine optimization), qu'on appelle aussi AEO pour answer engine optimization, travaille votre présence dans la réponse rédigée par une IA. Les fondations sont communes : une page indexable, une réponse nette en tête, des faits sourcés. Le GEO insiste davantage sur des entités sans ambiguïté, sur des passages qu'un modèle peut reprendre tels quels et sur les mentions de votre marque hors de votre site.",
  },
  {
    q: "L'IA va-t-elle remplacer le SEO ?",
    a: "Elle en change le terrain. D'après le Pew Research Center (juillet 2025, recherches de mars 2025 aux États-Unis), un résumé IA en haut de page fait tomber la part des visites suivies d'un clic vers un site de 15 % à 8 %. En France, le Crédoc mesure pourtant que 59 % des personnes passent encore par un moteur de recherche pour s'informer, contre 28 % par l'IA générative (Baromètre du numérique 2026). Le moteur de recherche reste la première porte d'entrée, et la réponse sans clic grignote une partie de ses visites : il faut travailler les deux.",
  },
  {
    q: "Comment être cité par ChatGPT, Gemini, Perplexity ou les résumés IA de Google ?",
    a: "Les robots doivent d'abord pouvoir lire vos pages. OpenAI précise qu'un site qui bloque son robot OAI-SearchBot n'apparaît pas dans les réponses de recherche de ChatGPT, et Google demande qu'une page soit indexée et éligible à un extrait pour servir de source à ses AI Overviews. La page doit ensuite répondre en clair dès ses premières lignes, avec des faits sourcés et une date. Les mentions de votre marque sur d'autres sites (presse, annuaires professionnels, comparatifs) aident les moteurs à vous reconnaître comme source. Google indique qu'aucun fichier ni balisage spécial n'est requis pour ses fonctions d'IA.",
  },
  {
    q: "Une agence SEO ChatGPT, est-ce un métier à part ?",
    a: "Le terme désigne une agence qui travaille votre présence parmi les sources que cite ChatGPT. Isoler ChatGPT a peu de sens en pratique. Avec 1,2 milliard d'utilisateurs par semaine annoncés par OpenAI fin septembre 2026, il pèse lourd, mais vos clients consultent aussi Gemini, Perplexity et les résumés IA de Google, les AI Overviews, utilisés par plus de 2,5 milliards de personnes chaque mois selon Google (I/O, mai 2026). Masteria suit ces moteurs avec la même liste de questions et rend compte moteur par moteur.",
  },
  {
    q: "Combien coûte une prestation de SEO IA ?",
    a: "Chaque mission est chiffrée au forfait. Le cadrage arrête d'abord son étendue : volume de pages, langues, moteurs suivis, part de rédaction confiée à votre équipe. Les ordres de grandeur sont larges. Un audit ou un premier lot de pages démarre à quelques milliers d'euros ; un programme de plusieurs mois, production et suivi compris, se compte en dizaines de milliers d'euros ; un déploiement multisite ou multilingue peut dépasser 100 000 €. Aucune position n'est garantie : personne ne contrôle l'algorithme de Google ni la réponse d'un modèle.",
  },
  {
    q: "Agence ou freelance SEO IA : que choisir ?",
    a: "Un freelance SEO IA convient à un site de taille modeste et à un besoin précis, la rédaction ou la technique. Une agence devient utile quand plusieurs compétences doivent avancer ensemble : rédaction, développement des outils de suivi, données structurées, formation de votre équipe. Masteria travaille avec des consultants, des développeurs et des formateurs IA indépendants, mobilisés selon le projet et pilotés par Mathias Nizan : vous gardez un seul interlocuteur, et l'équipe s'ajuste au volume.",
  },
  {
    q: "Travaillez-vous sur place à Lyon ou à distance ?",
    a: "La plupart des missions combinent les deux. Le cadrage et les ateliers avec votre équipe se tiennent volontiers en présentiel, à Lyon ou dans vos locaux ; la production, la technique et les relevés se font à distance, avec des points planifiés. Les missions se mènent depuis Lyon pour la France, l'Europe, les États-Unis et l'Inde : un site en anglais ou multilingue se suit avec la même méthode, langue par langue.",
  },
  {
    q: "Proposez-vous du référencement IA à Lyon ?",
    a: "Oui. Les entreprises de la métropole lyonnaise et d'Auvergne-Rhône-Alpes peuvent tenir leurs ateliers de cadrage en face à face, puis suivre le reste à distance. Un site local gagne à soigner sa fiche d'établissement Google, ses pages par ville ou par agence et les mentions de son nom dans la presse régionale : les moteurs génératifs peuvent reprendre ces informations quand on leur demande un prestataire près de chez soi.",
  },
  {
    q: "En combien de temps le SEO IA donne-t-il des résultats ?",
    a: "Les corrections techniques et les pages sur des requêtes peu disputées bougent souvent en quelques semaines. Les requêtes concurrentielles demandent plusieurs mois. Côté IA, une page qui devient la meilleure réponse à une question de niche peut être citée plus tôt, puis perdre sa place si un concurrent publie mieux. Le relevé de départ permet de comparer à date fixe, et aucun délai ferme n'est promis.",
  },
  {
    q: "Comment choisir parmi les agences SEO IA ?",
    a: "Les classements des « meilleures agences SEO IA » qu'on trouve en ligne sont souvent déclaratifs ou payés. Posez plutôt quatre questions à l'agence : quelle est sa propre visibilité, dans Google comme dans les réponses des IA ; comment elle mesure vos citations, moteur par moteur ; qui relit les textes rédigés avec l'IA ; ce qu'elle refuse de garantir. Nos 30 minutes de cadrage offertes servent à cela : juger la méthode sur vos pages avant de signer.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Agence SEO IA de Masteria',
  description: "Référencement naturel outillé par l'IA, plus présence comme source dans les réponses des assistants (Gemini, ChatGPT, Perplexity) et des AI Overviews : production de pages relues, maillage interne, données structurées, technique et suivi des citations.",
  url: 'https://www.master-ia.fr/agence-seo-ia',
  serviceType: 'Référencement SEO et GEO assisté par IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations SEO et GEO de Masteria',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Production éditoriale outillée par l'IA", description: "Briefs par intention de recherche, premiers jets assistés par l'IA, vérification des faits par un rédacteur avant mise en ligne." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maillage interne', description: "Pages piliers, pages filles et ancres de lien descriptives, thème par thème." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Données structurées Schema.org', description: "Balisage de l'organisation, des auteurs, des offres et des questions-réponses pour lever les ambiguïtés sur la marque." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mesure des citations IA', description: "Relevé à date fixe des réponses de ChatGPT, de Gemini, de Perplexity et des AI Overviews où votre marque apparaît." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technique SEO', description: "Indexation, vitesse, doublons, redirections et accès des robots d'exploration, dont OAI-SearchBot." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation du suivi', description: "Tableau de bord alimenté par la Search Console, les relevés de positions et les tests de citations, avec alertes." } },
    ],
  },
}

/* DefinedTermSet : définitions citables (GEO) de SEO, SEO augmenté, GEO et AEO,
   reprises du comparatif visible sur la page. */
const DEFINITIONS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/agence-seo-ia#glossaire',
  name: "Glossaire de la page agence SEO IA : SEO, GEO, AEO et SEO outillé par l'IA",
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'SEO (Search Engine Optimization)',
      description: "Référencement naturel : travail du contenu, de la technique et des liens pour qu'un site occupe une bonne place dans la liste de résultats de Google ou de Bing.",
    },
    {
      '@type': 'DefinedTerm',
      name: "SEO augmenté par l'IA",
      description: "Référencement naturel dont la recherche de mots-clés, les briefs, les premiers jets et les audits sont préparés avec des outils d'IA, puis vérifiés par un rédacteur avant publication.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'GEO (Generative Engine Optimization)',
      description: "Travail des pages, des entités et des mentions de marque pour qu'une IA comme ChatGPT, Gemini, Perplexity ou les résumés IA de Google cite le site comme source dans sa réponse.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'AEO (Answer Engine Optimization)',
      description: "Terme voisin du GEO, centré sur les moteurs de réponse : il insiste sur des réponses nettes en tête de page, que l'IA peut reprendre telles quelles.",
    },
  ],
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/agence-seo-ia#article',
  headline: 'Agence SEO IA : être visible sur Google et dans les réponses des IA',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-14',
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/agence-seo-ia#webpage' },
  about: ['SEO (Search Engine Optimization)', 'GEO (Generative Engine Optimization)', "Référencement naturel augmenté par l'IA", 'Moteurs de réponse IA'],
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function AgenceSeoIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (prestations / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Agence SEO IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        datePublished="2026-06-14"
        dateModified={DATE_MODIFIED}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, DEFINITIONS_JSONLD, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#94A3B8' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Agence SEO IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              SEO, GEO et suivi des citations
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Agence SEO IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>être visible sur Google et dans les réponses des IA</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui pilote les missions SEO et GEO du cabinet · Texte revu le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une agence SEO IA travaille votre visibilité sur deux surfaces : la liste de résultats de Google, et les réponses que rédigent ChatGPT, Gemini, Perplexity ou Google dans ses AI Overviews. <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria produit vos pages, règle la technique et relève dans le temps les questions qui font apparaître votre marque</strong>, avec des outils d'IA qui accélèrent le travail et une relecture humaine avant chaque mise en ligne.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Masteria est un cabinet consacré à l'intelligence artificielle, que Mathias Nizan a créé à Lyon en 2022. Le référencement en découle : savoir comment un modèle de langage (le moteur qui rédige la réponse de ChatGPT ou de Gemini) choisit ses sources aide à écrire des pages qu'il retient. La méthode s'applique d'abord à master-ia.fr, où chaque intention de recherche a sa page et sa réponse dès la première phrase.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact?type=projet&rdv=30" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le travail au quotidien
            </a>
          </div>

          {/* tags de compétences */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE TRAVAIL AU QUOTIDIEN (éditorial asymétrique) ── */}
      <section id="prestations" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Au quotidien</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que fait une agence SEO IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Une agence SEO IA écrit et met à jour vos pages, les relie entre elles, balise vos informations clés pour les machines et vérifie à intervalle régulier si Gemini, ChatGPT, Perplexity et les AI Overviews vous citent. Chez Masteria, l'IA prépare les briefs et les premiers jets, un rédacteur relit et vérifie les faits, et un tableau de suivi montre ce qui progresse.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Six chantiers composent l'essentiel d'une mission suivie. Leur dosage dépend de votre site : quarante pages bien écrites ont surtout besoin de maillage et de mesure, un catalogue de deux mille fiches produits commence souvent par la technique.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {LIVRABLES.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour un état des lieux sans mission de suivi, l'<Link to="/audit-seo-ia" style={aStyle}>audit SEO IA</Link> dresse le bilan Google et IA de votre site, et l'<Link to="/audit-geo-ia" style={aStyle}>audit GEO</Link> se concentre sur vos citations dans les moteurs génératifs. Le rôle du <Link to="/consultant-visibilite-ia" style={aStyle}>consultant en visibilité IA</Link> est détaillé sur sa propre page, utile avant de choisir un prestataire. Les tableaux de suivi s'appuient sur notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link> et, pour les outils plus lourds, sur notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link>. Quand le besoin dépasse le référencement (campagnes, réseaux sociaux, acquisition payante), notre <Link to="/agence-ia-marketing" style={aStyle}>agence IA marketing</Link> prend le relais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE (timeline à rail, rail étroit) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={h2Style}>
            Comment se déroule une mission de SEO IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Une mission commence par une mesure de départ, puis enchaîne la carte des sujets, la production, la technique et un relevé à date fixe des positions et des citations. Chaque étape se termine par un livrable que vous validez avant la suivante.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Le rythme des points se fixe au cadrage, selon le volume de pages à produire. Aucun classement n'est promis : Masteria s'engage sur le travail livré et sur une mesure honnête de ses effets.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO vs SEO augmenté vs GEO (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>SEO, SEO outillé &amp; GEO</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Référencement classique, SEO augmenté par l'IA et GEO : que choisir ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le référencement classique cherche une place dans la liste de liens de Google. Le SEO augmenté par l'IA poursuit ce but avec des outils qui accélèrent la recherche, la rédaction et les audits. Le GEO (generative engine optimization, l'optimisation pour les moteurs génératifs) vise la réponse rédigée par une IA, où votre marque doit apparaître comme source. Une page bien construite sert les trois.</strong>
          </p>

          <h3 style={{ ...h3Style, color: '#F8FAFC', fontSize: 17, margin: '0 0 16px' }}>
            Quatre chiffres datés expliquent pourquoi on travaille Google et les IA ensemble
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: 16, marginBottom: 24 }}>
            {CHIFFRES.map(item => (
              <div key={item.v} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderRadius: 14, padding: 20 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.01em', marginBottom: 8 }}>{item.v}</div>
                <p style={{ fontSize: 14, color: '#CBD5E1', lineHeight: 1.6, margin: '0 0 10px' }}>{item.l}</p>
                <p style={{ fontSize: 12.5, color: '#8392A8', lineHeight: 1.5, margin: 0 }}>{item.s}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Pour une entreprise française, la lecture tient en deux phrases. Le moteur de recherche garde la première place, et une part grandissante des réponses se lit désormais sans clic. Il faut donc des pages qui se classent et des pages qu'une IA peut citer : ce sont le plus souvent les mêmes, mieux construites. Le tableau ci-dessous situe les trois approches critère par critère.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Tableau comparant le SEO classique, le SEO outillé par l'IA et le GEO" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>SEO classique</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>SEO augmenté par l'IA</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>GEO / référencement génératif</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.classique}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.augmente}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── POURQUOI UNE AGENCE IA POUR LE SEO ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pourquoi une agence IA</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Pourquoi confier votre SEO à une agence IA plutôt qu'à une agence SEO classique ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Parce qu'une partie de vos clients lit la réponse d'une IA avant de voir le moindre lien, et que pour y figurer il faut comprendre comment un modèle choisit ses sources. Masteria se consacre à l'IA depuis sa création en 2022 : modèles, recherche augmentée (un modèle qui lit des documents avant de répondre), agents. Le référencement profite de cette connaissance, et nos développeurs IA construisent les automatisations de suivi propres à votre site.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, margin: '32px 0' }}>
            {WHY.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Si la question porte d'abord sur la stratégie (quelle place donner à l'IA dans votre marketing, quelles règles de rédaction fixer), notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> la traite en amont. Les entreprises de la région peuvent passer par notre <Link to="/agence-ia-lyon" style={aStyle}>agence IA à Lyon</Link> pour des ateliers de cadrage en présentiel, et l'ensemble des métiers du cabinet figure sur la page <Link to="/agence-ia" style={aStyle}>agence IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FORMATION (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Former vos équipes</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Votre équipe peut aussi apprendre à écrire pour Google et pour les IA
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 760 }}>
                Certaines entreprises préfèrent garder la rédaction en interne. Nous formons alors les responsables marketing et les rédacteurs à préparer un brief, à faire produire un premier jet par un assistant IA, à le vérifier, puis à relever eux-mêmes leurs citations dans les moteurs génératifs. Comptez 1 980 € HT par journée, que la formation réunisse en interne 12 personnes au plus ou une seule. Masteria détient la certification Qualiopi au titre des actions de formation : votre OPCO de branche peut prendre en charge ce module, selon ses règles et ses fonds. La prestation de référencement relève du conseil et de la production : elle n'est donc pas finançable par votre OPCO.
              </p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                En septembre 2026, l'atelier marketing et communication d'une interprofession agricole a produit une page destinée au référencement, avec le calendrier éditorial qui l'accompagne : <Link to="/etudes-de-cas-ia#mission-interprofession-agricole" style={aStyle}>le récit de cette mission</Link>. Le <Link to="/formation-intelligence-artificielle" style={aStyle}>catalogue de formations</Link> compte plus de 100 programmes.
              </p>
              <Link to="/formation-ia-seo" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Voir la formation IA pour le SEO
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Agence SEO IA : vos questions avant le premier rendez-vous
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une question manque à la liste ? Envoyez-la avec l'adresse de votre site.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrire à Masteria
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pages voisines pour approfondir le sujet
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Les audits proposés seuls, le métier, la formation, puis les autres services du cabinet qui touchent à votre visibilité.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Référencement AIO : le guide', href: '/blog/referencement-aio-strategie-contenu-ia', tag: 'Guide', desc: "Cinq décisions éditoriales pour écrire des pages que les résumés de Google et les assistants reprennent." },
              { label: 'Audit SEO IA', href: '/audit-seo-ia', tag: 'Audit seul', desc: "Le bilan daté de votre site, côté Google et côté IA, quand vous voulez commencer par un constat." },
              { label: 'Audit GEO', href: '/audit-geo-ia', tag: 'Audit des citations', desc: "Vos citations dans les moteurs génératifs, mesurées question par question, et ce qui manque pour être retenu." },
              { label: 'Consultant visibilité IA', href: '/consultant-visibilite-ia', tag: 'Métier', desc: "Ce que fait ce consultant, ce qu'il livre et les questions à lui poser avant de l'engager." },
              { label: 'Formation IA pour le SEO', href: '/formation-ia-seo', tag: 'Formation', desc: "Pour les équipes qui gardent la rédaction : brief, premier jet assisté, vérification, relevé des citations." },
              { label: 'Agence IA marketing', href: '/agence-ia-marketing', tag: 'Au-delà du SEO', desc: "Campagnes, contenus de marque et acquisition, quand votre besoin déborde du référencement." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Suivi automatisé', desc: "Les flux qui relient Search Console, relevés de citations et alertes dans un même tableau." },
              { label: 'Agence développement IA', href: '/agence-developpement-ia', tag: 'Outils', desc: "Assistants, connecteurs et applications métier, dont les outils de suivi de visibilité les plus poussés." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Stratégie', desc: "La place de l'IA dans votre organisation, vos règles d'usage et l'ordre des projets à lancer." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Premier pas', desc: "Une intervention courte pour situer vos usages de l'IA ; sa durée et son forfait se fixent au cadrage." },
              { label: 'Agence IA Lyon', href: '/agence-ia-lyon', tag: 'Lyon', desc: "Le cabinet côté lyonnais : ateliers en présentiel pour les équipes de la région, missions partout en France." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Un outil construit pour votre métier et branché sur vos données, quand aucun logiciel du marché ne convient." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'IA générative', desc: "Comment fonctionnent les modèles qui rédigent les réponses de ChatGPT ou de Gemini, et ce qu'ils changent au travail." },
              { label: 'Études de cas', href: '/etudes-de-cas-ia', tag: 'Références', desc: "Quatre cas anonymisés et six missions de formation récentes, avec ce qui a été livré et la suite prévue." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Ouvrir la page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (remplace FounderNote, texte propre à la page) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            <Link to="/mathias-nizan" style={aStyle}>Mathias Nizan</Link> dirige chaque mission SEO et GEO de Masteria et choisit les intervenants selon le site à traiter. Sur master-ia.fr, il applique la règle qu'il propose à ses clients : une intention de recherche, une page, et la réponse dès la première phrase.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Faisons le point sur votre visibilité, Google et IA compris
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Envoyez l'adresse de votre site et les trois questions qui reviennent le plus chez vos clients. Sous 24 heures, une réponse vous arrive avec nos premières observations et une date de rendez-vous : 30 minutes de cadrage offertes pour décider de la suite.
            </p>
            <Link to="/contact?type=projet&rdv=30" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Cabinet IA fondé en 2022 · SEO et GEO sur les mêmes pages · France, Europe, États-Unis, Inde
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui travaille sur votre référencement ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'équipe</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Qui travaille sur votre référencement
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Mathias Nizan cadre la mission et en reste responsable jusqu'au bilan. Selon le volume, il mobilise des consultants IA pour la stratégie et la rédaction, des développeurs IA pour les automatisations de suivi et des formateurs quand votre équipe reprend la main. Ces intervenants sont des indépendants expérimentés. Le cabinet ne dépend d'aucun éditeur de logiciels : l'outil de suivi se choisit avec vous, selon votre budget. Les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link>, dont une citation dans Les Échos, montrent le cabinet au travail.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['2022', 'fondation du cabinet à Lyon'],
              ['~10', 'consultants IA mobilisables'],
              ['~5', 'développeurs IA pour le suivi'],
              ['4 zones', 'France, Europe, États-Unis, Inde'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
