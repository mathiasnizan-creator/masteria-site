import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Radar, Network, BarChart3, MessagesSquare,
  FileText, ListChecks, ShieldCheck, MapPin, Check, Gauge,
  Presentation, Search, Landmark,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « audit GEO » (slug /audit-geo-ia) : requêtes « audit geo ia », « audit geo »,
 * « audit visibilité ia ». Articulation du cluster : /agence-seo-ia porte l'accompagnement
 * (réécrite le 07/10, ne pas recopier), /audit-seo-ia l'audit combiné Google et IA,
 * /consultant-visibilite-ia le métier ; CETTE page décrit l'audit GEO commandé seul.
 * Le DefinedTermSet des termes de mesure vit ici et nulle part ailleurs.
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre au moins 90 %) :
 * - angle « audit seul » : seul l'audit est facturé, la suite se chiffre après la restitution ;
 * - chiffres de marché de reference_chiffres_geo_2026 uniquement, avec leur source
 *   (Forrester 94 %, Pew 1 %, Semrush 4,4 fois) ; faits OpenAI et Google vérifiés le 07/10
 *   (OAI-SearchBot pour la recherche ChatGPT, GPTBot pour l'entraînement ; AI Overviews :
 *   pages indexées et éligibles à un extrait) ;
 * - prix en fourchette large à plafond ouvert ; GEO pas finançable par votre OPCO ;
 * - plus de FounderNote ni de formule d'entité commune ; aucune citation garantie.
 */

const SLUG = 'audit-geo-ia'
const RDV = '/contact?type=projet&rdv=30'
const DATE_MODIFIED = '2026-10-07'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit GEO IA : êtes-vous cité par ChatGPT ? | Masteria"
const META_DESC = "Audit GEO IA : part de citations dans ChatGPT, Gemini, Perplexity et les AI Overviews, écart avec vos concurrents, robots, plan d'action classé."
const KEYWORDS = "audit geo ia, audit geo, audit visibilité ia, audit generative engine optimization, audit citation ia, audit aio, référencement aio, visibilité chatgpt perplexity"

/* ───────── Styles ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
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
  { icon: Bot, label: 'ChatGPT · Gemini · Perplexity · AI Overviews' },
  { icon: Radar, label: 'Mêmes questions, posées à plusieurs reprises' },
  { icon: ListChecks, label: "Plan d'action classé, sans score magique" },
  { icon: MapPin, label: 'France · Europe · États-Unis · Inde' },
]

/* ───────── En bref ───────── */

const EN_BREF = [
  { label: 'Objet', value: "Savoir si les IA vous nomment quand vos clients les interrogent, puis bâtir le plan pour que ce soit le cas" },
  { label: 'Indicateurs', value: "Part de citations par moteur, poids relatif face à vos rivaux, sources reprises, rang de votre nom dans la réponse" },
  { label: 'Moteurs', value: "ChatGPT, Gemini, Perplexity et les AI Overviews de Google, interrogés avec la même liste à intervalles réguliers" },
  { label: 'Livrable', value: "Relevé daté, carte de la part de voix, correctifs techniques, plan de pages citables, grille pour refaire la mesure" },
  { label: 'Durée', value: "Plusieurs semaines entre cadrage et restitution, le temps de répéter les relevés" },
  { label: 'Prix', value: "Forfait après cadrage : quelques milliers d'euros pour un marché et une langue, davantage au-delà ; aucune citation garantie" },
]

/* ───────── Cinq vérifications ───────── */

const VERIFICATIONS = [
  {
    icon: MessagesSquare,
    title: 'Qui est cité, question par question',
    desc: "Sur une liste de questions qui reflète votre marché (on découvre, on compare, on achète, on approfondit), nous notons ce que chaque moteur nomme : votre marque, vos concurrents, la presse, des annuaires. Tout le reste de l'audit découle de ce relevé.",
  },
  {
    icon: BarChart3,
    title: 'Votre poids face aux concurrents',
    desc: "Être cité une fois sur cinq ne dit rien isolément. Ce qui compte, c'est votre part des citations face aux acteurs qui visent les mêmes clients : qui les IA recommandent à votre place, sur quelles questions, à partir de quels contenus.",
  },
  {
    icon: Search,
    title: 'Les sources que les moteurs reprennent',
    desc: "Chaque moteur a ses habitudes : médias, comparateurs, forums, sites spécialisés. Repérer les sources reprises sur vos sujets indique souvent le chemin le plus court vers une citation : y figurer vous-même.",
  },
  {
    icon: Gauge,
    title: 'Les fondations techniques',
    desc: "Robots.txt relu robot par robot, données structurées, vitesse, indexation. OpenAI distingue OAI-SearchBot, qui alimente la recherche de ChatGPT, et GPTBot, chargé de rassembler des pages pour entraîner ses modèles ; Google ne puise les sources de ses AI Overviews que parmi des pages qu'il a indexées et qui peuvent apparaître en extrait. Ouvrir ou fermer un robot reste un choix, que l'audit vous aide à faire.",
  },
  {
    icon: Network,
    title: 'Des pages faciles à citer',
    desc: "Les moteurs génératifs retiennent des passages nets et attribuables : réponse en tête de page, entités sans ambiguïté, faits datés et sourcés. Vos pages clés sont évaluées une à une selon ces critères.",
  },
]

/* ───────── Cinq temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage et liste de questions',
    desc: "Marché, concurrents, profils d'acheteurs, puis la liste des questions que vos clients adressent aux IA, classées par intention. Cette liste porte toute la mesure ; nous la bâtissons avec vous et elle vous appartient. La première demi-heure de cadrage est offerte.",
  },
  {
    num: '02',
    title: 'Relevés sur plusieurs moteurs',
    desc: "Plusieurs séries de relevés, espacées dans le temps, sur ChatGPT, Gemini, Perplexity et les AI Overviews. Un relevé isolé donne une image trompeuse ; la répétition sur une liste stable dessine une tendance.",
  },
  {
    num: '03',
    title: 'Lecture des écarts',
    desc: "Part de citations, part de voix, sources reprises : votre présence est comparée à celle de vos concurrents, question par question. Chaque écart devient une piste, avec la question où la place est libre et ce qui conditionne son obtention.",
  },
  {
    num: '04',
    title: 'Examen des fondations',
    desc: "Accès des robots, données structurées, pages clés, cohérence des entités. Pour chaque constat : la correction et l'effort qu'elle demande, afin que le plan reste applicable.",
  },
  {
    num: '05',
    title: 'Plan et restitution',
    desc: "Un rapport unique réunit le relevé daté, les écarts, les correctifs techniques, le plan de pages citables et la grille pour refaire la mesure. La restitution sert à choisir ensemble par quoi commencer.",
  },
]

/* ───────── Le rapport ───────── */

const LIVRABLE = [
  {
    icon: Radar,
    title: 'Un relevé daté des citations',
    desc: "Votre part de citations par moteur et par intention, mesurée sur la liste, à une date donnée. Toute action future se jugera par rapport à ce relevé.",
  },
  {
    icon: BarChart3,
    title: 'La carte de la part de voix',
    desc: "Qui est cité sur votre marché, à quelle fréquence, sur quelles questions : concurrents directs, médias et comparateurs qui occupent les réponses, places encore vides.",
  },
  {
    icon: ListChecks,
    title: 'Des correctifs techniques classés',
    desc: "Robots.txt, données structurées, vitesse, indexation : les corrections rangées par impact et par effort, en commençant par celles qui s'appliquent dès la semaine suivante.",
  },
  {
    icon: Network,
    title: 'Un plan de pages citables',
    desc: "Questions à couvrir, pages à réécrire pour être reprises, entités à clarifier, sources extérieures où apparaître. Plusieurs mois de travail éditorial balisés.",
  },
  {
    icon: Presentation,
    title: 'La grille de mesure, à vous',
    desc: "La liste de questions, la méthode de relevé et le tableau de suivi vous appartiennent : vous refaites la mesure au rythme que vous choisissez, avec ou sans nous.",
  },
]

/* ───────── Engagements ───────── */

const HONNETE = [
  "Aucune citation garantie : aucun éditeur, aucune agence ne décide de ce qu'un modèle répondra",
  "Aucun « score GEO » absolu : une tendance mesurée sur une liste fixe, méthode écrite à l'appui",
  "Aucune astuce : les citations se gagnent par le contenu, la technique et la réputation",
  "Si le GEO ne doit pas être votre priorité, le cadrage vous le dit",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit GEO IA ?",
    a: "C'est l'évaluation de votre visibilité dans ce que répondent les IA. Le GEO, pour generative engine optimization, désigne le travail qui vise ces moteurs ; l'audit en est le point de départ. Sur une liste de questions calquée sur celles de vos clients, il mesure à quelle fréquence votre marque apparaît dans les réponses de Gemini, de Perplexity, de ChatGPT et des résumés IA de Google, qui est nommé à votre place, et pourquoi. Il vérifie aussi l'accès des robots à votre site, vos données structurées et la facilité à citer vos pages, puis se conclut par un plan d'action classé.",
  },
  {
    q: "Que mesure exactement un audit GEO ?",
    a: "Quatre familles d'indicateurs. La part de citations : sur l'ensemble des questions, la proportion de réponses qui nomment votre marque ou renvoient à votre site. La part de voix : la place que vous occupez, sur les mêmes questions, à côté de vos concurrents. Les sources reprises : les sites que chaque moteur privilégie sur vos sujets. L'état des fondations enfin : robots, données structurées, pages clés. Le tout moteur par moteur et intention par intention, car les résultats varient beaucoup d'un moteur à son voisin.",
  },
  {
    q: "Les réponses des IA changent tout le temps : la mesure est-elle fiable ?",
    a: "L'objection est juste, et c'est elle qui fixe la méthode. Un relevé unique ne prouve rien, puisque la même question produit des réponses différentes selon le moment. Nous relevons donc en plusieurs passages espacés, sur une liste de questions stable et documentée, et nous lisons une tendance : fréquence moyenne de citation, sens de son évolution, part de voix. Le principe ressemble à celui d'un sondage répété auprès du même échantillon.",
  },
  {
    q: "Quelle différence avec un audit SEO ?",
    a: "Un audit SEO s'occupe de votre classement parmi les liens de Google ; l'audit GEO, votre présence dans le texte que rédigent les IA. Les fondations se recoupent (site sain, contenu clair, données structurées), les indicateurs diffèrent, et le GEO joue sur d'autres leviers : entités, passages faciles à reprendre, réputation, accès des robots. Pour couvrir Google et les IA dans un seul rapport, choisissez l'audit SEO IA ; cette page décrit le volet GEO commandé seul.",
  },
  {
    q: "Faut-il laisser les robots des IA explorer votre site ?",
    a: "C'est un arbitrage, et l'audit vous donne de quoi le rendre. OpenAI distingue OAI-SearchBot, dont se sert la recherche de ChatGPT, et GPTBot, qui collecte des pages pour l'entraînement : bloquer le premier écarte votre site de la recherche intégrée à ChatGPT, bloquer le second limite la réutilisation de vos textes pour entraîner les modèles. Il arrive qu'un site bloque un robot sans l'avoir décidé, par un réglage hérité. L'audit relève votre configuration robot par robot et vous aide à trancher.",
  },
  {
    q: "Combien coûte un audit GEO ?",
    a: "Un forfait, établi au terme du cadrage, dont les 30 minutes initiales sont offertes. Le montant varie avec le nombre de concurrents suivis, le nombre de questions suivies, les moteurs couverts, le nombre de relevés, les marchés et les langues. Pour un marché et une langue, prévoyez quelques milliers d'euros ; au-delà, il augmente sans plafond fixé d'avance. Cet audit n'est pas finançable par votre OPCO : ce dernier paie des formations. Une formation de vos équipes, si vous en décidez une ensuite, peut obtenir un financement de leur OPCO, dans la mesure de ses fonds disponibles.",
  },
  {
    q: "Un outil gratuit de score GEO peut-il suffire ?",
    a: "Pour lancer le sujet en interne, oui. Pour décider, non : il ne sait rien de vos rivaux ni de ce que demandent vos clients, mesure en un passage ce qui demande des relevés répétés, et ne classe rien. L'audit fait le chemin inverse : votre liste, des concurrents nommés, une tendance mesurée, un plan rangé selon l'impact et l'effort. Il arrive qu'un cadrage commence par un scan apporté par le client : il ouvre la discussion, l'audit la conclut.",
  },
  {
    q: "ChatGPT citera-t-il mon entreprise si je vous confie l'audit ?",
    a: "Rien ne permet de le promettre, et une telle promesse devrait vous alerter. Personne ne contrôle ce que génère un modèle, ni OpenAI, ni Google, ni une agence. Nous pouvons garantir la méthode : une mesure initiale, des actions qui augmentent vos chances d'être cité (pages citables, entités claires, données structurées, présence dans les sources reprises) et un nouveau relevé qui montre l'évolution. La visibilité dans les IA se travaille sur les fondamentaux, sans raccourci.",
  },
  {
    q: "Qui applique le plan une fois l'audit rendu ?",
    a: "Le plan s'applique avec votre équipe, votre agence actuelle ou la nôtre ; dans ce dernier cas, l'accompagnement (pages citables, technique, suivi automatisé des citations) fait l'objet d'une proposition séparée, bâtie sur les conclusions du rapport. La grille de mesure vous reste dans tous les cas. L'audit est facturé seul, sans engagement sur la suite.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit GEO IA, Masteria',
  alternateName: "Mesure de la visibilité dans les IA génératives",
  description: "Audit GEO : part de citations et part de voix d'une marque dans ChatGPT, Gemini, Perplexity et les AI Overviews de Google, mesurées à plusieurs reprises sur une liste de questions construite pour le marché. Vérification des robots, des données structurées et des pages clés, puis plan d'action classé pour devenir une source citée. Seul l'audit est facturé.",
  url: 'https://www.master-ia.fr/audit-geo-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-geo-ia#webpage' },
  serviceType: 'Audit GEO (Generative Engine Optimization)',
  category: 'Visibilité dans les IA génératives',
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
    name: 'Audit GEO',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Relevés de citations sur plusieurs moteurs', description: "Même liste de questions posée à intervalles réguliers : part de citations, part de voix, sources reprises." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Examen des fondations GEO', description: "Robots.txt, données structurées, pages clés, cohérence des entités." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan de pages citables', description: "Questions à couvrir, pages à réécrire, sources extérieures où apparaître, classement par impact." } },
    ],
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les cinq temps de l'audit GEO Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : les termes de la mesure GEO, sur CETTE page uniquement. */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/audit-geo-ia#termes',
  name: "Audit GEO : les termes de la mesure",
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Audit GEO',
      description: "Évaluation de la place d'une marque dans les réponses rédigées par les IA (ChatGPT, Gemini, Perplexity, AI Overviews de Google) : part de citations, part de voix, sources reprises, robots, données structurées et pages citables.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Corpus de questions',
      description: "Liste stable de questions représentatives d'un marché (découverte, comparaison, achat, expertise), posée à intervalles réguliers aux moteurs génératifs pour mesurer qui ils citent.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Part de citations',
      description: "Proportion des réponses d'un moteur génératif, sur une liste de questions donnée, qui nomment une marque ou renvoient vers son site.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Part de voix IA',
      description: "Répartition des citations entre une marque et ses concurrents sur une même liste de questions : la mesure comparative de la visibilité dans les moteurs génératifs.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Robots des IA (OAI-SearchBot, GPTBot, PerplexityBot)',
      description: "Robots d'exploration des éditeurs d'IA. OpenAI sépare OAI-SearchBot, utilisé par la recherche de ChatGPT, et GPTBot, utilisé pour l'entraînement ; les autoriser ou les bloquer dans le robots.txt n'a donc pas le même effet.",
    },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/audit-geo-ia#article',
  headline: "Audit GEO IA : les IA citent-elles votre marque, ou vos concurrents ?",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-geo-ia#webpage' },
  about: ['Audit GEO', 'Generative Engine Optimization', 'Part de citations IA', 'Part de voix IA', 'Visibilité dans les moteurs génératifs'],
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

/* Sources de la page (WebPage.citation et bloc visible), vérifiées le 07/10/2026. */
const PAGE_CITATIONS = [
  { name: 'Google Search Central : AI Overviews, Mode IA et sélection des sources', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
  { name: 'OpenAI : documentation de ses robots d’exploration', url: 'https://developers.openai.com/api/docs/bots' },
  { name: 'Perplexity : documentation de PerplexityBot', url: 'https://docs.perplexity.ai/guides/bots' },
  { name: 'Pew Research Center : clics et résumés IA dans Google (22 juillet 2025)', url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
]

export default function AuditGeoIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence SEO IA', slug: 'agence-seo-ia' },
    { name: 'Audit GEO IA', slug: SLUG },
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
        datePublished="2026-08-10"
        dateModified={DATE_MODIFIED}
        speakable={['#definition', '#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, definitionsJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-seo-ia" style={{ color: '#94A3B8' }}>Agence SEO IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Audit GEO IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Visibilité dans les IA · Audit GEO seul
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Audit GEO IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>les IA citent-elles votre marque, ou vos concurrents ?</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · Mis en ligne en août 2026, chiffres et sources revus le 7 octobre 2026
          </p>

          <div id="definition" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: '18px 22px', margin: '0 0 24px', maxWidth: 760 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 8 }}>Définition</div>
            <p style={{ fontSize: 15.5, color: '#E2E8F0', lineHeight: 1.65, margin: 0 }}>
              Un audit GEO IA mesure la place d'une marque dans ce que répondent les assistants d'IA : ChatGPT, Gemini, Perplexity, AI Overviews de Google. Le sigle vient de l'anglais generative engine optimization, le travail de visibilité auprès des moteurs qui rédigent une réponse. L'audit relève la part des questions où la marque est citée, son poids face aux concurrents et l'accès des robots au site ; l'audit SEO s'intéresse, lui, au classement parmi les liens que Google affiche.
            </p>
          </div>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit GEO de Masteria pose à ChatGPT, Gemini, Perplexity et aux AI Overviews une liste de questions taillée pour votre marché, à plusieurs reprises, et relève <strong style={{ color: '#fff', fontWeight: 700 }}>la fréquence à laquelle vous êtes nommé, votre rang parmi vos concurrents et les sites dont chaque moteur s'inspire</strong>. Il se conclut par un plan d'action classé pour devenir une source citée. On parle aussi de référencement AIO (artificial intelligence optimization) : la mesure est la même.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Quand un acheteur demande à une IA quel prestataire retenir, la réponse nomme quelqu'un. L'audit établit si c'est vous, pourquoi ce sont souvent d'autres, et ce qui modifierait le résultat. Vous ne payez que l'audit ; décider d'une mise en œuvre, et la chiffrer, vient après la restitution.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Le contenu du rapport
            </a>
          </div>

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

          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'audit GEO en résumé</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 100px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CINQ VÉRIFICATIONS ── */}
      <section id="verifications" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Cinq vérifications</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que vérifie un audit GEO ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Qui est cité sur chaque question, votre part de voix parmi vos concurrents, les sites que chaque moteur privilégie, vos fondations techniques (robots, données structurées) et la facilité avec laquelle vos pages se laissent citer. Les cinq vérifications aboutissent à un seul plan d'action.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Si votre référencement Google doit aussi être examiné, l'<Link to="/audit-seo-ia" style={aStyle}>audit SEO IA</Link> réunit Google et les IA dans un rapport unique. L'accompagnement qui peut suivre est décrit sur la page de notre <Link to="/agence-seo-ia" style={aStyle}>agence SEO IA</Link> ; il se chiffre après la restitution.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {VERIFICATIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Radar size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Des réponses qui varient</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Une IA ne formule pas deux fois la même réponse à l'identique. Nous mesurons donc en plusieurs passages sur une liste fixe, à la manière d'un sondage répété auprès d'un même échantillon. Un score tiré d'un seul passage décrit un instant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI MESURER MAINTENANT (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Pourquoi mesurer maintenant</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Vos clients interrogent les IA : qui leur répond ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>94 % des acheteurs professionnels se servent de l'IA dans leur processus d'achat, contre 89 % un an plus tôt (Forrester, Buyers' Journey Survey 2025, publié en janvier 2026). Quand Google affiche un résumé IA, les internautes ne cliquent sur l'une des sources citées que lors d'une visite sur cent, selon le Pew Research Center (juillet 2025, recherches de mars 2025 aux États-Unis). Être nommé dans la réponse devient la vitrine ; le clic, l'exception.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {[
              { title: 'Des places encore libres', desc: "Le GEO est une discipline récente. Sur de nombreux marchés, la place de source citée reste à prendre, pour un effort sans rapport avec la bataille des requêtes Google les plus disputées." },
              { title: 'Des choix faits sans vous', desc: "Comparatifs de prestataires, présélections d'outils, recommandations : les IA tranchent. Si elles s'appuient sur les pages de vos concurrents, leurs arguments deviennent la référence du marché." },
              { title: 'Un visiteur qui vaut plus', desc: "Selon une étude Semrush de juin 2025, un visiteur arrivé par une recherche IA vaut 4,4 fois un visiteur venu de la recherche organique classique. Le volume reste plus faible ; la valeur de chaque visite, plus haute." },
            ].map(card => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le glossaire SEO, GEO et AEO, et la façon dont les deux disciplines se complètent, sont présentés sur la page de notre <Link to="/agence-seo-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence SEO IA</Link>.
          </p>
        </div>
      </section>

      {/* ── CINQ TEMPS ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>
            Comment se déroule l'audit GEO ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Construction de la liste de questions, relevés répétés sur plusieurs moteurs, lecture des écarts avec les concurrents, examen des fondations techniques, plan et restitution. Les relevés s'étalent sur plusieurs semaines pour gommer les écarts d'une réponse à l'autre.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0'),
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

      {/* ── LE RAPPORT ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que contient le rapport d'audit GEO
          </h2>

          <p style={answerStyle}>
            <strong>Un relevé daté des citations, la carte de votre part de voix, des corrections techniques rangées par priorité, un plan de pages citables et la grille de mesure, que vous gardez. Le rapport sert à décider ; il peut passer sans retouche à vos salariés ou à un autre prestataire.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            {LIVRABLE.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
            <div style={{ ...cardStyle, padding: 28, background: '#0A0F1E', border: '1px solid #1E293B' }}>
              <div style={{ marginBottom: 16 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                </div>
              </div>
              <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8, color: '#F8FAFC' }}>Ce que le scanner ne voit pas</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                Un scan gratuit sort un chiffre en une minute, sans connaître vos concurrents ni les questions de vos clients. Il lance la discussion en interne ; l'audit la tranche, avec une mesure sur votre liste, des écarts nommés et un plan classé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ET PRIX ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Nos engagements</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Personne ne peut vous promettre une citation
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Ni OpenAI, ni Google, ni une agence ne décide de ce qu'un modèle écrira demain. Notre garantie porte sur la méthode et la mesure ; le reste se constate au relevé suivant. D'où ces quatre engagements.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {HONNETE.map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 24 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <FileText size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Le prix, après le cadrage</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le forfait tient compte du nombre de concurrents suivis, du nombre de questions posées, des moteurs couverts, du nombre de relevés, des marchés et des langues. Un marché dans une langue part de quelques milliers d'euros ; au-delà, le montant grimpe sans plafond défini à l'avance. Le GEO relève du conseil marketing et n'est pas finançable par votre OPCO, dont le rôle est de financer la formation. L'audit est facturé seul.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Google aussi ?</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Si votre référencement Google mérite le même examen, l'<Link to="/audit-seo-ia" style={aStyle}>audit SEO IA</Link> couvre les deux terrains dans un rapport unique. Le cadrage sert aussi à choisir le bon périmètre, y compris le plus petit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Audit GEO : les réponses avant de vous lancer
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous voulez savoir comment un moteur précis traite votre marque ? Écrivez-nous en citant la question qui vous préoccupe.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Nous écrire
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pages utiles</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Où aller après l'audit GEO
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            L'audit GEO pose le point de départ ; la suite passe par le contenu, la technique et le suivi automatisé des citations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Référencement AIO : le guide', href: '/blog/referencement-aio-strategie-contenu-ia', tag: 'Guide', desc: "Les sigles du référencement par l'IA, les résumés IA de Google et une stratégie de contenu en cinq décisions." },
              { label: 'Audit SEO IA', href: '/audit-seo-ia', tag: 'Google et IA', desc: "Les deux terrains dans un seul rapport : référencement classique et citations par les IA." },
              { label: 'Consultant visibilité IA', href: '/consultant-visibilite-ia', tag: 'Le métier', desc: "Ce que fait un consultant en visibilité IA, et les critères pour le choisir." },
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Accompagnement', desc: "Pages citables, technique et suivi des citations, si vous déléguez une fois l'audit rendu." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Des relevés de citations et de part de voix qui tournent sans saisie manuelle." },
              { label: 'Agence IA marketing', href: '/agence-ia-marketing', tag: 'Marketing', desc: "Contenu, acquisition, campagnes : l'IA dans tout le marketing." },
              { label: "Audit IA d'entreprise", href: '/audit-ia', tag: 'Conseil', desc: "Rien à voir avec la visibilité : la maturité IA de votre organisation, ses données et sa conformité." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Comment fonctionnent les agents qui cherchent, lisent et citent des sources." },
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
                    Lire
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUI MÈNE L'AUDIT ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Derrière l'audit</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un cabinet qui construit lui-même des assistants appuyés sur des sources
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Mathias Nizan dirige chaque audit GEO. Selon le marché, il travaille avec une partie de la dizaine de consultants du réseau et avec les développeurs, cinq environ, qui automatisent les relevés ; tous sont indépendants. Nos équipes conçoivent aussi des assistants documentaires pour des clients, comme les quatre assistants qui aident un cabinet de conseil à rédiger ses réponses aux marchés publics : elles savent ce qu'un modèle garde d'une page et ce qu'il laisse. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en donnent des exemples datés.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['≈ 10', 'consultants IA, mobilisés selon le marché'],
                ['≈ 5', 'développeurs qui automatisent les relevés'],
                ['4', 'moteurs suivis dans chaque audit'],
                ['0', "citation promise, à qui que ce soit"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                  <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Fondateur de Masteria, Mathias Nizan signe cette page ; les chiffres de marché et la documentation des robots y ont été revérifiés le 7 octobre 2026. Pour en savoir plus sur lui, voyez <Link to="/mathias-nizan" style={aStyle}>sa présentation</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#fff', padding: 'clamp(24px, 4vw, 48px) 24px clamp(64px, 9vw, 110px)' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Découvrons quels noms les IA citent sur votre marché
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Donnez-nous votre site, votre marché et les rivaux que vous rencontrez en rendez-vous. En 30 minutes, nous fixons la liste de questions, les moteurs et le calendrier des relevés ; le devis suit. Aucune citation promise : une mesure documentée et un plan classé.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Audit GEO facturé seul · grille de mesure incluse · missions menées depuis Lyon
            </p>
          </div>
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
