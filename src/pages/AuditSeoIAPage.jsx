import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Bot, Gauge, Network, BarChart3,
  FileText, ListChecks, ShieldCheck, MapPin, Check,
  Radar, GraduationCap, Presentation,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Offre d'entrée du cluster SEO/GEO : « Audit SEO IA » (slug /audit-seo-ia).
 * Requêtes « audit seo ia », « audit ia seo » : l'intention mêle l'audit de référencement
 * outillé par l'IA et l'audit de visibilité dans les IA ; la page vend l'audit COMBINÉ.
 * « audit geo ia » appartient à /audit-geo-ia (volet GEO seul, termes de mesure en
 * DefinedTermSet) ; l'accompagnement suivi vit sur /agence-seo-ia (réécrite le 07/10,
 * ne pas recopier ses phrases) et le métier sur /consultant-visibilite-ia.
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre au moins 90 %) :
 * - angle « audit seul » : seul l'audit est facturé, la suite se chiffre après la restitution ;
 * - prix en fourchette large à plafond ouvert ; SEO et GEO pas finançables par votre OPCO ;
 * - chiffres de marché repris de reference_chiffres_geo_2026 avec leur source (Crédoc 2026,
 *   Adobe Digital Insights avril 2026) ; faits Google et OpenAI vérifiés le 07/10 sur leur
 *   documentation (AI Overviews : pages indexées et éligibles à un extrait ; OAI-SearchBot) ;
 * - plus de FounderNote ni de formule d'entité commune ; aucune garantie de position.
 */

const SLUG = 'audit-seo-ia'
const RDV = '/contact?type=projet&rdv=30'
const DATE_MODIFIED = '2026-10-07'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit SEO IA : technique, contenu, positions | Masteria"
const META_DESC = "Audit SEO IA : indexation, technique, contenu et positions Google examinés avec l'IA, plus vos citations dans ChatGPT et Gemini. Correctifs classés."
const KEYWORDS = "audit seo ia, audit ia seo, audit seo intelligence artificielle, audit référencement ia, audit seo augmenté ia"

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
  { icon: Search, label: 'Google et moteurs génératifs dans un même rapport' },
  { icon: Bot, label: 'Citations relevées plusieurs fois, sur une liste fixe' },
  { icon: ListChecks, label: 'Correctifs rangés par impact et par effort' },
  { icon: MapPin, label: 'France · Europe · États-Unis · Inde' },
]

/* ───────── En bref ───────── */

const EN_BREF = [
  { label: 'Objet', value: "Votre référencement Google et votre présence dans les réponses des IA, examinés dans un seul audit" },
  { label: 'Mesures', value: "Positions, clics et pages indexées d'après la Search Console ; mentions dans Gemini, ChatGPT, Perplexity et les résumés IA de Google ; écart avec les concurrents que vous nommez" },
  { label: 'Livrable', value: "Correctifs techniques classés, plan éditorial et entités, grille de relevé des citations que vous gardez" },
  { label: 'Durée', value: "Quelques jours d'analyse, répartis sur plusieurs semaines pour répéter les relevés dans les IA" },
  { label: 'Prix', value: "Forfait après cadrage : dès quelques milliers d'euros pour un site et une langue, davantage avec plusieurs marchés ; aucune position garantie" },
  { label: 'Ensuite', value: "Votre équipe, votre agence ou la nôtre applique le plan ; un accompagnement se chiffre après la restitution" },
]

/* ───────── Quatre volets ───────── */

const VOLETS = [
  {
    icon: Gauge,
    title: 'Technique et robots',
    desc: "Exploration, indexation, temps d'affichage (les Core Web Vitals de Google), données structurées, liens internes : l'IA aide à passer un site entier au crible. Le fichier robots.txt est relu robot par robot ; OpenAI indique par exemple qu'un site fermé à OAI-SearchBot n'apparaît plus dans les résultats de recherche de ChatGPT.",
  },
  {
    icon: Network,
    title: 'Contenu et entités',
    desc: "Sujets couverts et oubliés, intentions de recherche servies ou non, structure des pages, réponse donnée dès les premières lignes, cohérence des entités (votre marque, vos produits, vos dirigeants, les normes de votre métier). Google comme les modèles s'appuient sur ces repères pour situer votre expertise.",
  },
  {
    icon: Radar,
    title: 'Citations dans les IA',
    desc: "Une liste de questions proches de celles de vos clients est posée plusieurs fois aux principaux moteurs génératifs, de ChatGPT aux AI Overviews. On note qui est cité, avec quel lien, et à quelle fréquence vous l'êtes face aux autres.",
  },
  {
    icon: BarChart3,
    title: 'Concurrents et écarts',
    desc: "Qui se classe ou se fait citer à votre place, avec quels formats de pages. L'écart se traduit en liste de requêtes et de questions où une place reste à prendre, avec ce qu'il faut publier ou corriger pour l'obtenir.",
  },
]

/* ───────── SEO ou GEO (tableau citable) ───────── */

const COMPARATIF = [
  {
    critere: 'Ce qui est regardé',
    seo: "Votre rang dans les résultats de Google",
    geo: "Votre présence dans les réponses rédigées par les IA",
  },
  {
    critere: 'Moteurs',
    seo: "Google, Bing et les moteurs de recherche classiques",
    geo: "Gemini, ChatGPT, Perplexity, résumés IA et Mode IA de Google",
  },
  {
    critere: 'Indicateurs',
    seo: "Positions, impressions, clics, pages indexées",
    geo: "Part des questions où vous êtes cité, part de voix, sources reprises",
  },
  {
    critere: 'Leviers',
    seo: "Contenu, technique, maillage, liens venus d'autres sites",
    geo: "Entités claires, passages faciles à reprendre, citations de la marque ailleurs que chez vous, accès des robots",
  },
  {
    critere: 'Ce que vous recevez',
    seo: "Correctifs techniques et plan éditorial classés",
    geo: "Relevé daté des citations, écarts avec vos concurrents, pages à rendre citables",
  },
]

/* ───────── Cinq temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Marché, concurrents, objectifs, puis la liste de mesure : les requêtes Google qui comptent pour vous et ce que vos clients demandent aux IA. Ces 30 premières minutes vous sont offertes et fixent le périmètre du devis.",
  },
  {
    num: '02',
    title: 'Point de départ',
    desc: "D'un côté, positions et clics relevés dans la Search Console, l'outil gratuit de Google qui compte vos apparitions ; de l'autre, plusieurs passages des mêmes questions dans les moteurs génératifs. Une IA ne répond jamais deux fois tout à fait pareil : répéter le relevé sur une liste fixe le rend fiable.",
  },
  {
    num: '03',
    title: 'Examen technique',
    desc: "Exploration complète du site, indexation, vitesse, données structurées, maillage, robots. Chaque constat sort avec sa correction, son impact estimé et l'effort qu'il demande.",
  },
  {
    num: '04',
    title: 'Contenu et entités',
    desc: "Couverture des intentions de votre marché, pages capables d'être citées, entités cohérentes, signaux d'autorité. Nous comparons ce que vous publiez à ce que Google et les moteurs génératifs retiennent sur vos sujets.",
  },
  {
    num: '05',
    title: 'Rapport et restitution',
    desc: "Un document unique croise les deux terrains : correctifs classés, plan éditorial, grille de relevé des citations. Nous le présentons et en discutons avec vous ; la suite, si vous la voulez, se chiffre ensuite.",
  },
]

/* ───────── Les pièces du rapport ───────── */

const LIVRABLE = [
  {
    icon: BarChart3,
    title: 'Un état chiffré, Google et IA',
    desc: "Positions, couverture et clics d'un côté ; part des questions où vous êtes cité et part de voix de l'autre. Un point de départ daté, mesuré sur une liste documentée, auquel comparer chaque relevé suivant.",
  },
  {
    icon: ListChecks,
    title: 'Des correctifs techniques classés',
    desc: "Chaque problème avec sa correction, rangé par impact et par effort. Les premières lignes s'appliquent dans la semaine ; le reste se planifie avec votre développeur ou votre agence.",
  },
  {
    icon: Network,
    title: 'Un plan éditorial et entités',
    desc: "Questions à couvrir, pages à créer ou à restructurer, entités à clarifier, formats faciles à citer. De quoi nourrir plusieurs mois de publication, en interne ou avec un prestataire.",
  },
  {
    icon: Radar,
    title: 'Une grille de relevé des citations',
    desc: "La liste de questions et la méthode vous appartiennent : vous refaites le relevé quand vous le souhaitez, avec ou sans nous, pour voir l'effet des actions engagées.",
  },
  {
    icon: Presentation,
    title: 'Une restitution pour arbitrer',
    desc: "Nous présentons le rapport et vous aidons à trancher : quoi faire d'abord, qui s'en charge, quoi laisser de côté. Une autre agence peut reprendre le livrable tel quel.",
  },
]

/* ───────── Ce que nous ne promettons pas ───────── */

const HONNETE = [
  "Aucune position ni citation garantie : l'algorithme de Google et les réponses des modèles échappent à tout prestataire",
  "La mesure des citations décrit une tendance sur une liste fixe de questions, méthode écrite à l'appui",
  "Aucun raccourci risqué : ni pages générées en masse, ni liens achetés",
  "Si votre frein principal est ailleurs (offre, site à refondre, données), le rapport le dit",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit SEO IA ?",
    a: "Le terme désigne deux choses, et notre audit couvre les deux. D'une part, un audit de référencement outillé par l'IA : exploration, indexation, vitesse, données structurées et contenus passés au crible plus vite, avec des correctifs classés par impact. D'autre part, la mesure de votre place dans ce que répondent Gemini, ChatGPT, Perplexity et les résumés IA de Google aux questions de vos clients. Le premier volet travaille votre place dans Google, le second votre place dans les moteurs génératifs.",
  },
  {
    q: "Faut-il un audit SEO, un audit GEO, ou les deux ?",
    a: "Tout dépend d'où viennent vos clients. Un site jamais audité, dont les prospects arrivent par Google, gagne à commencer par le volet SEO. Des positions solides et une question centrée sur les IA orientent vers notre audit GEO, plus poussé sur la mesure. Le plus souvent, les deux terrains se répondent : l'audit combiné croise les constats dans un seul rapport et vous évite deux missions. Le cadrage tranche, y compris en faveur de la formule la plus légère.",
  },
  {
    q: "Audit SEO, audit GEO : qu'est-ce qui les sépare ?",
    a: "L'audit SEO mesure votre rang dans Google : positions, clics, pages indexées, technique. L'audit GEO compte combien de fois les IA vous nomment dans leurs réponses : part des questions où vous êtes cité, part de voix, sources reprises. Un contenu clair et structuré sert les deux. Le GEO ajoute ses propres leviers : les entités, les passages faciles à reprendre, les citations de votre nom sur d'autres sites, l'ouverture de votre site aux robots des moteurs génératifs.",
  },
  {
    q: "Comment se mesure la présence d'une marque dans les IA ?",
    a: "Par une méthode écrite. Nous construisons avec vous une liste de questions qui ressemble à celles de vos clients (découvrir, comparer, acheter, approfondir), puis nous la posons plusieurs fois, à quelques jours d'intervalle, à Perplexity, Gemini, ChatGPT et aux résumés IA de Google. Deux sessions donnent rarement la même réponse : seule la répétition sur une liste fixe dégage une tendance. Nous en tirons votre part de citations, votre poids face aux concurrents et les sources préférées de chaque moteur. La liste vous reste.",
  },
  {
    q: "Combien coûte un audit SEO IA ?",
    a: "C'est un forfait, chiffré une fois le cadrage mené, et la première demi-heure de ce cadrage est offerte. Il dépend de la taille du site, du nombre de marchés et de langues, de la longueur de la liste de questions et du nombre de concurrents suivis. Pour un site et une langue, comptez quelques milliers d'euros au minimum ; un site multilingue présent sur plusieurs marchés coûte davantage, sans plafond fixé d'avance. Seul l'audit est facturé ; si vous nous confiez ensuite les corrections, elles feront l'objet d'un chiffrage à part.",
  },
  {
    q: "Combien de temps prend l'audit ?",
    a: "Quelques jours d'analyse, répartis sur plusieurs semaines jusqu'à la restitution. Les relevés dans les IA imposent ce délai : ils se font en plusieurs passages espacés pour lisser les variations des réponses. Un site vitrine sur un seul marché se traite vite ; un site présent dans plusieurs pays, avec de nombreux concurrents suivis, demande davantage. La date de restitution est fixée au cadrage.",
  },
  {
    q: "Un scanner de visibilité IA gratuit peut-il remplacer l'audit ?",
    a: "Il suffit à ouvrir le sujet. Un scanner donne un score en quelques minutes, ce qui aide à convaincre une direction ; il ignore votre marché, vos concurrents et les questions de vos clients, et ne classe aucune action. L'audit fait l'inverse : une mesure sur vos questions, une comparaison avec des concurrents nommés, un plan rangé par impact et par effort. Le score signale un sujet ; l'audit dit quoi faire.",
  },
  {
    q: "Pouvez-vous garantir une place sur Google ou une mention par les IA ?",
    a: "Non. Google et les éditeurs de modèles modifient leurs systèmes en permanence, et aucun prestataire ne les contrôle. Ce que nous garantissons tient en trois points : une mesure de départ, des actions classées selon leur effet attendu, un nouveau relevé qui montre ce qui a bougé. Une agence qui promet la première place ou une citation systématique dans ChatGPT vend un résultat que personne ne maîtrise.",
  },
  {
    q: "Et une fois le rapport rendu ?",
    a: "Vous décidez. Le rapport se suffit : votre équipe ou votre agence actuelle peut l'appliquer, et la grille de relevé vous reste. Si vous préférez déléguer, notre agence SEO IA peut prendre la suite (production relue, technique, suivi automatisé des positions et des citations) ; cet accompagnement se chiffre une fois le rapport rendu, d'après ses priorités. L'audit, lui, est facturé seul, sans engagement.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit SEO IA, Masteria',
  alternateName: "Audit de visibilité sur Google et dans les IA",
  description: "Audit de référencement outillé par l'IA, doublé d'une mesure des mentions de la marque par les moteurs génératifs (ChatGPT, Gemini, Perplexity, AI Overviews) : technique (indexation, vitesse, données structurées, robots), contenu et entités, écarts avec les concurrents. Livrable : correctifs classés par impact, plan éditorial, grille de relevé des citations. Seul l'audit est facturé.",
  url: 'https://www.master-ia.fr/audit-seo-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-seo-ia#webpage' },
  serviceType: 'Audit SEO et mesure de la visibilité dans les IA',
  category: 'Référencement et visibilité IA',
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
    name: 'Audit SEO IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Examen technique outillé par l’IA', description: "Exploration, indexation, vitesse, données structurées, maillage et robots, correctifs rangés par impact et par effort." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Relevé des citations dans les IA', description: "Liste de questions posée à plusieurs reprises aux moteurs génératifs ; comparaison avec les concurrents." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan éditorial et entités', description: "Questions à couvrir, pages à créer ou à restructurer, entités à clarifier, formats faciles à citer." } },
    ],
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les cinq temps de l'audit SEO IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* Les termes de la mesure GEO (DefinedTermSet) vivent sur /audit-geo-ia uniquement. */

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/audit-seo-ia#article',
  headline: "Audit SEO IA : votre visibilité Google mesurée, avec ses correctifs priorisés",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-seo-ia#webpage' },
  about: ['Audit SEO IA', 'Audit GEO', 'Visibilité dans les IA génératives', 'Generative Engine Optimization', 'Référencement naturel'],
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
  { name: 'Google Search Central : les AI Overviews, le Mode IA et les pages qu’ils citent', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
  { name: 'Google Search Central : guide de démarrage du référencement', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
  { name: 'OpenAI : OAI-SearchBot et GPTBot, deux robots aux rôles distincts', url: 'https://developers.openai.com/api/docs/bots' },
]

export default function AuditSeoIAPage() {
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
    { name: 'Audit SEO IA', slug: SLUG },
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
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Audit SEO IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Radar size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Audit seul · Google et visibilité IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 860 }}>
            Audit SEO IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>votre visibilité Google mesurée, avec ses correctifs priorisés</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Signé <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · Publié en août 2026, actualisé le 7 octobre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit SEO IA de Masteria examine votre site sur deux terrains : le référencement Google (indexation, technique, contenu, positions) et la place de votre marque dans les réponses que rédigent ChatGPT, Gemini, Perplexity ou les AI Overviews. Vous recevez <strong style={{ color: '#fff', fontWeight: 700 }}>un état chiffré et une liste de correctifs classés par impact</strong>, que votre équipe ou votre agence peut appliquer. Seul l'audit est facturé ; la suite se chiffre après la restitution.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Google ne cite dans ses AI Overviews que des pages indexées et éligibles à un extrait : un défaut technique qui vous coûte des positions vous coûte aussi des citations. L'audit regarde les deux terrains, avec l'outillage IA qui permet d'examiner un site entier en quelques jours. Il sert de porte d'entrée à notre <Link to="/agence-seo-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>agence SEO IA</Link>, sans obligation de poursuivre avec elle.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les pièces du rapport
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'audit en six lignes</div>
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

      {/* ── QUATRE VOLETS ── */}
      <section id="volets" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Quatre volets</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que contient un audit SEO IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>« Audit SEO IA » désigne deux besoins : examiner votre référencement en vous servant de l'IA, et mesurer votre place dans les réponses des IA. Notre audit traite les deux en quatre volets : technique et robots, contenu et entités, citations dans les IA, écarts avec vos concurrents.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les quatre volets nourrissent un rapport unique : ce qui freine votre visibilité, ce qui la débloquerait, dans quel ordre agir. Vous cherchiez un bilan de l'IA dans votre entreprise (maturité, processus, conformité) ? C'est notre <Link to="/audit-ia" style={aStyle}>audit IA</Link>, une mission distincte.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {VOLETS.map((item, i) => (
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
                Le volet IA peut aussi se commander seul : l'<Link to="/audit-geo-ia" style={aStyle}>audit GEO IA</Link> va plus loin sur la mesure des citations, la part de voix et le réglage des robots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO OU GEO (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Audit SEO ou audit GEO</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Audit SEO et audit GEO : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>L'audit SEO mesure votre rang sur Google ; l'audit GEO compte vos mentions dans les textes rédigés par les IA. Les fondations sont communes (un site techniquement propre, des textes nets, un balisage structuré), mais on ne mesure pas la même chose, et certains leviers changent. Nous menons les deux ensemble parce que vos clients passent par les deux portes.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Audit SEO et audit GEO comparés critère par critère" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '39%' }}>Audit SEO</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '39%' }}>Audit GEO (visibilité IA)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.seo}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 24 }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>59 % contre 28 %</div>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: '0 0 10px' }}>
                En France, six personnes sur dix s'informent d'abord par un moteur de recherche, moins de trois sur dix par une IA générative. Le moteur de recherche garde la main sur l'accès à votre site.
              </p>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0, fontWeight: 600 }}>Crédoc, Baromètre du numérique 2026 : 4 145 répondants âgés d'au moins 12 ans, terrain de juin 2025</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8 }}>+ 42 %</div>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: '0 0 10px' }}>
                de conversion pour les visites arrivées par une IA sur les sites marchands américains en mars 2026, face aux autres visites. Ce trafic a été multiplié par près de cinq en un an au premier trimestre.
              </p>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0, fontWeight: 600 }}>Adobe Digital Insights, rapport d'avril 2026</p>
            </div>
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Pour le volet GEO seul, voyez l'<Link to="/audit-geo-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>audit GEO IA</Link>. Pour un suivi au long cours, production et technique comprises, notre <Link to="/agence-seo-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence SEO IA</Link> prend le relais si vous le décidez après l'audit.
          </p>
        </div>
      </section>

      {/* ── CINQ TEMPS ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>
            Cinq temps entre le premier appel et le rapport
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Cadrage du marché et de la liste de mesure, relevé du point de départ, examen technique, examen du contenu et des entités, rapport et restitution. Les relevés dans les IA se répètent sur une liste de questions fixe, seule façon d'obtenir une mesure stable.</strong>
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
            Les cinq pièces du rapport d'audit SEO IA
          </h2>

          <p style={answerStyle}>
            <strong>Un état chiffré Google et IA, des correctifs techniques classés, un plan éditorial et entités, une grille de relevé des citations que vous gardez, une restitution qui aide à arbitrer. Le rapport se transmet tel quel à votre équipe ou à une autre agence.</strong>
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
              <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8, color: '#F8FAFC' }}>Un scanner gratuit donne un score</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                Les outils automatiques de « score GEO » répondent en une minute : utile pour alerter une direction, trop court pour décider. Ils ne connaissent ni votre marché ni vos concurrents et ne classent aucune action. L'audit part de vos questions et de vos rivaux nommés, et range les actions par rendement attendu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE QUE NOUS NE PROMETTONS PAS ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Ce que nous ne promettons pas</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Ce que l'audit garantit, et les limites qu'il assume
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La visibilité dans les IA attire les promesses invérifiables. Nous répondons de la méthode et de la mesure ; le comportement d'un algorithme ne dépend que de son éditeur. Quatre engagements en découlent.
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
                <h3 style={{ ...h3Style, fontSize: 16 }}>Le prix, cadré avant d'être chiffré</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Forfait fixé à l'issue du cadrage, dont la première demi-heure vous est offerte, selon la taille du site, les marchés et les langues, la longueur de la liste de questions, le nombre de concurrents suivis. Un site dans une seule langue démarre à quelques milliers d'euros ; plusieurs marchés ou langues font monter le forfait, sans plafond fixé d'avance. Le SEO et le GEO ne sont pas finançables par votre OPCO, dont les fonds vont à la formation. Seul l'audit figure au devis.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Si votre équipe applique le plan</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Notre <Link to="/formation-ia-seo" style={aStyle}>formation SEO IA</Link> prépare vos équipes à reprendre le plan : deux jours, plusieurs outils d'IA comparés, sur vos mots-clés et vos pages. Qualiopi, obtenu par Masteria au titre des actions de formation, permet un financement par l'OPCO dont dépend votre entreprise, sous réserve de ses critères et de son budget.
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
                Audit SEO IA : ce que nous demandent les équipes marketing
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une question sur votre site en particulier ? Envoyez l'adresse, nous répondons par écrit.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Poser votre question
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
          <Kicker>Pour la suite</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pages proches de l'audit SEO IA
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Selon ce que le rapport fait ressortir, la suite passe par un accompagnement, des automatisations ou une formation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Audit GEO IA', href: '/audit-geo-ia', tag: 'Visibilité IA', desc: "Le volet IA commandé seul et mesuré plus finement : citations, part de voix, robots." },
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Accompagnement', desc: "Le travail suivi qui peut prendre le relais du rapport : contenus relus, technique, suivi des citations." },
              { label: 'Consultant visibilité IA', href: '/consultant-visibilite-ia', tag: 'Le métier', desc: "Le rôle du consultant qui mène ce type d'audit, et les questions à lui poser avant de le choisir." },
              { label: "Audit IA d'entreprise", href: '/audit-ia', tag: 'Conseil', desc: "Une autre mission, centrée sur l'entreprise : maturité, processus, données, respect des textes." },
              { label: 'Formation SEO IA', href: '/formation-ia-seo', tag: 'Formation', desc: "Deux jours pour que votre équipe applique le plan elle-même, avec un financement possible par l'OPCO de votre branche." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Relevés de positions et de citations qui tournent seuls, alertes, tableau de bord." },
              { label: 'Agence IA marketing', href: '/agence-ia-marketing', tag: 'Marketing', desc: "L'IA au service du contenu, de l'acquisition et des campagnes, au-delà du référencement." },
              { label: 'Référencement AIO : le guide', href: '/blog/referencement-aio-strategie-contenu-ia', tag: 'Guide', desc: "AIO, GEO, AEO face au SEO, et ce qu'ils changent pour vos contenus." },
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
                    Voir la page
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
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui mène l'audit</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un fondateur qui applique la grille à son propre site
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Mathias Nizan conduit chaque audit SEO et GEO. Selon le site, il s'entoure de consultants SEO et IA (le réseau en compte une dizaine), de développeurs pour la technique et l'automatisation des relevés (cinq environ) et de formateurs (une vingtaine) quand l'équipe doit reprendre la main ; tous sont indépendants. Nous l'appliquons à notre propre site, master-ia.fr : une requête visée, une page dédiée, la réponse dans les premières lignes. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent des missions datées.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['≈ 10', 'consultants à mobiliser selon le site'],
                ['≈ 5', 'développeurs pour automatiser les relevés'],
                ['≈ 20', 'formateurs si votre équipe reprend le plan'],
                ['0', 'position promise, sur Google comme ailleurs'],
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
            Mathias Nizan, fondateur de Masteria, a écrit cette page et l'a mise à jour le 7 octobre 2026 en revérifiant les consignes publiées par Google et OpenAI. Son parcours figure sur <Link to="/mathias-nizan" style={aStyle}>sa page</Link>.
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
              Mesurons votre place sur Google et dans les réponses des IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Indiquez votre site, vos marchés et les concurrents qui vous gênent le plus. Une demi-heure suffit pour arrêter le périmètre, la liste de mesure et le calendrier ; le devis suit. Aucune position promise : un point de départ mesuré et des actions classées.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Seul l'audit est facturé · rapport utilisable par toute agence · missions menées depuis Lyon
            </p>
          </div>
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
