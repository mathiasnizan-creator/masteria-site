import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Database, ShieldCheck, Sparkles, Search, BarChart3, Network,
  Workflow, Cpu, Server, Lock, FileText, Target, Layers, Gauge, Check,
  MapPin, GraduationCap, BookOpen, ExternalLink, Scale,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « conseil data & IA » (slug /conseil-data-ia). Comble un gap du
 * cluster conseil : « conseil en données et ia » (70, KD36), « conseil data & ia »
 * (50, KD12), « cabinet de conseil en data et ia » (50, KD29), « conseil en données
 * et ia ». Angle : la donnée est le carburant de l'IA. Un agent, un RAG ou un modèle
 * d'analyse ne tient ses promesses que si les données sont fiables et accessibles.
 *
 * POSITIONNEMENT : conseil + mise en œuvre, depuis l'identité cabinet IA. Masteria
 * cadre le socle data (audit, gouvernance, qualité, préparation), puis développe les
 * solutions IA qui s'appuient dessus (RAG, agents, analytics). Cœur high-ticket.
 *
 * INTÉGRITÉ : posture capacité. Aucun cas client nommé, aucun chiffre de résultat ni
 * prix inventé. On décrit compétences, méthode, livrables. Le conseil pur n'est pas
 * finançable OPCO ; seule la formation associée l'est (bloc secondaire).
 *
 * Design premium identique à /agence-developpement-ia et /agence-seo-ia : icônes
 * lucide (zéro emoji), kickers, réponses directes citables, accent #2563EB.
 */

const SLUG = 'conseil-data-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conseil data & IA : préparer vos données à l'IA | Masteria"
const META_DESC = "Conseil data & IA pour entreprises : audit, gouvernance et qualité de vos données pour des projets d'IA fiables (RAG, agents, analytics). Cadrage gratuit."
const KEYWORDS = "conseil data ia, conseil data, data et ia, gouvernance des données, qualité des données, audit data, préparation des données ia"

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
  { icon: Database,    label: 'Audit & gouvernance data' },
  { icon: Search,      label: 'RAG sur vos données' },
  { icon: ShieldCheck, label: 'RGPD & AI Act' },
  { icon: MapPin,      label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── Prestations (6 cartes) ───────── */

const LIVRABLES = [
  {
    icon: Gauge,
    title: 'Audit de maturité data',
    desc: "Cartographie de vos sources, de leur qualité et de leur accessibilité. Nous identifions ce qui est exploitable par l'IA dès aujourd'hui, ce qui demande un travail de mise en forme et ce qui manque pour vos cas d'usage prioritaires.",
  },
  {
    icon: ShieldCheck,
    title: 'Gouvernance & qualité des données',
    desc: "Catalogue des données, propriété et responsabilités, règles de qualité, conformité RGPD et lecture de l'AI Act. La gouvernance qui rend vos données fiables, traçables et utilisables sans risque par des systèmes d'IA.",
  },
  {
    icon: Layers,
    title: "Préparation des données pour l'IA",
    desc: "Nettoyage, structuration, déduplication et mise en forme de vos contenus et bases pour qu'un modèle puisse les exploiter. La préparation qui sépare une démonstration prometteuse d'un usage réellement fiable.",
  },
  {
    icon: Database,
    title: 'RAG & exploitation par l\'IA',
    desc: "Vos documents et vos bases deviennent interrogeables en langage naturel, avec des réponses sourcées. Le RAG (retrieval-augmented generation) ancre l'IA dans votre réalité plutôt que dans une connaissance générale et approximative.",
  },
  {
    icon: BarChart3,
    title: 'Analytics & dataviz augmentés par l\'IA',
    desc: "Reporting, analyse et copilotes data qui rendent vos chiffres lisibles et interrogeables par les équipes métier. L'IA fait remonter les écarts et les tendances ; vos équipes gardent la décision.",
  },
  {
    icon: Network,
    title: 'Architecture & flux de données',
    desc: "Connecteurs, pipelines et circulation des données entre vos outils, avec un hébergement dans l'Union européenne selon vos exigences. Le socle technique qui alimente vos solutions IA sans ressaisie ni silo.",
  },
]

/* ───────── Méthode (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Audit du patrimoine data',
    desc: "Nous mesurons votre point de départ : sources, qualité, accessibilité, gouvernance existante et conformité. Nous relions chaque constat aux cas d'usage IA que vous visez, pour savoir ce qui bloque réellement.",
  },
  {
    num: '02',
    title: 'Cartographie & priorisation',
    desc: "Nous classons les chantiers data par impact sur vos projets IA et par faisabilité. Vous obtenez une trajectoire claire : ce qu'il faut traiter d'abord pour débloquer le premier cas d'usage à valeur.",
  },
  {
    num: '03',
    title: 'Gouvernance & qualité',
    desc: "Nous posons les règles : catalogue, propriété, qualité, RGPD et lecture de l'AI Act. La donnée devient fiable et traçable, condition d'un usage de l'IA maîtrisé et défendable.",
  },
  {
    num: '04',
    title: "Mise à disposition pour l'IA",
    desc: "Nous préparons et structurons les données, posons les connecteurs et, lorsque le cas l'exige, le RAG. Les données passent d'un état brut à un état réellement exploitable par vos solutions d'IA.",
  },
  {
    num: '05',
    title: 'Exploitation & mesure',
    desc: "Nous branchons les cas d'usage (RAG, agents, analytics) sur le socle préparé et mesurons la qualité des résultats. Le travail data se juge à ce qu'il rend possible côté IA, pas en soi.",
  },
]

/* ───────── Données laissées en l'état vs cadrées pour l'IA ───────── */

const TABLE = [
  {
    critere: 'Qualité',
    sans: 'Doublons, champs manquants, formats hétérogènes',
    avec: 'Données nettoyées, structurées et contrôlées',
  },
  {
    critere: 'Accessibilité',
    sans: 'Données dispersées en silos, difficiles à relier',
    avec: 'Sources connectées et interrogeables par l\'IA',
  },
  {
    critere: 'Gouvernance',
    sans: 'Propriété floue, conformité RGPD incertaine',
    avec: 'Catalogue, responsabilités et conformité posés',
  },
  {
    critere: "Résultat avec l'IA",
    sans: 'RAG approximatif, réponses non fiables',
    avec: 'Réponses sourcées, agents et analyses fiables',
  },
]

/* ───────── Pourquoi un cabinet IA pour la data ───────── */

const WHY = [
  { icon: Target, title: "La data au service d'un cas d'usage IA", desc: "Nous ne traitons pas la donnée pour elle-même : chaque chantier data est relié à un cas d'usage IA concret. Vous investissez sur ce qui débloque réellement un agent, un RAG ou une analyse, pas sur un grand projet data sans débouché." },
  { icon: Workflow, title: 'Nous préparons ET nous exploitons', desc: "Cabinet et agence de développement IA, nous ne nous arrêtons pas au diagnostic : nous préparons les données puis construisons les solutions qui s'appuient dessus, sans passer la main à un intégrateur tiers." },
  { icon: Cpu, title: 'Expertise RAG et modèles', desc: "Notre cœur de métier, c'est l'IA depuis 2022 : RAG, vectorisation, choix des modèles, garde-fous. Nous savons précisément quelles données préparer, et comment, pour qu'un modèle les exploite correctement." },
  { icon: Lock, title: 'Conformité et souveraineté', desc: "RGPD, cloisonnement des données sensibles, hébergement dans l'Union européenne possible : la conformité est un critère de conception du socle data, pas une couche ajoutée après coup." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que le conseil data & IA ?",
    a: "Le conseil data & IA aide les entreprises à structurer, gouverner et valoriser leurs données pour que leurs projets d'intelligence artificielle tiennent leurs promesses. Il couvre l'audit du patrimoine de données, la gouvernance et la qualité, la préparation des données pour l'IA et leur exploitation (RAG, agents, analytics). Chez Masteria, ce conseil se prolonge par la mise en œuvre : nous préparons le socle data, puis développons les solutions IA qui s'appuient dessus.",
  },
  {
    q: "Pourquoi la qualité des données est-elle décisive pour l'IA ?",
    a: "Parce qu'un modèle d'IA ne vaut que les données auxquelles il accède. Un agent branché sur des données incomplètes, un RAG nourri de documents mal structurés ou une analyse fondée sur des chiffres incohérents produiront des résultats peu fiables, quelle que soit la qualité du modèle. La plupart des projets d'IA qui échouent butent sur la donnée bien avant de buter sur la technologie. Cadrer le socle data en amont est la façon la plus sûre de fiabiliser un projet d'IA.",
  },
  {
    q: "Faut-il un data lake ou un gros projet data avant de faire de l'IA ?",
    a: "Pas nécessairement. Un grand chantier data sans cas d'usage défini est un risque classique : beaucoup d'investissement, peu de valeur à l'arrivée. Nous recommandons l'inverse : partir d'un cas d'usage IA prioritaire, identifier les seules données qu'il exige, et les préparer. Le socle data se construit alors par paliers, débloqué cas d'usage par cas d'usage, plutôt qu'en une refonte massive préalable.",
  },
  {
    q: "Comment gérez-vous la conformité RGPD et l'AI Act sur les données ?",
    a: "La conformité est intégrée dès le cadrage. Nous cartographions les données sensibles, posons les règles d'accès et de cloisonnement, et documentons les usages au regard du RGPD et de l'AI Act européen. Un hébergement dans l'Union européenne est possible selon vos exigences. L'objectif est un socle data exploitable par l'IA sans créer de risque réglementaire ni de fuite de données.",
  },
  {
    q: "Combien coûte une mission de conseil data & IA ?",
    a: "La mission se chiffre sur devis, selon le périmètre : un audit data ponctuel, un chantier de gouvernance ou une préparation complète des données pour un cas d'usage IA ne représentent pas le même engagement. Nous établissons une proposition après un premier échange qui cadre vos objectifs et votre point de départ. Le conseil est une prestation de service, non finançable par l'OPCO ; seule la formation associée, certifiée Qualiopi, l'est.",
  },
  {
    q: "Intervenez-vous à Lyon et à distance ?",
    a: "Les deux. Masteria est un cabinet spécialisé sur l'intelligence artificielle basé à Lyon, et intervient dans toute la France ainsi qu'en Suisse et en Belgique. L'essentiel du travail data se mène à distance ; les phases de cadrage, d'ateliers de gouvernance ou de transfert aux équipes peuvent se tenir sur site selon vos préférences.",
  },
  {
    q: "Qu'est-ce que le RAG et pourquoi a-t-il besoin de données préparées ?",
    a: "Le RAG (retrieval-augmented generation, ou génération augmentée par la recherche) est une technique qui branche un modèle de langage sur vos propres documents et bases : au lieu de répondre depuis sa connaissance générale, le modèle va d'abord retrouver les passages pertinents dans vos données, puis formule une réponse sourcée. Sa fiabilité dépend directement de la qualité des données indexées. Des documents mal structurés, des doublons ou des contenus obsolètes produisent des réponses approximatives. Préparer et structurer les données en amont est donc la condition d'un RAG réellement fiable.",
  },
  {
    q: "Combien de temps prend la préparation des données pour un projet IA ?",
    a: "Cela dépend de l'état de départ et du périmètre du cas d'usage. Un socle déjà propre et bien gouverné peut être rendu exploitable en quelques semaines ; des données dispersées en silos, hétérogènes ou non documentées demandent davantage. La préparation des données reste l'étape la plus chronophage d'un projet d'IA : selon les enquêtes du secteur (Anaconda, State of Data Science), les équipes data y consacrent près de la moitié de leur temps. Notre approche par cas d'usage limite ce coût en ne préparant que les données réellement nécessaires au premier usage à valeur.",
  },
  {
    q: "Faut-il anonymiser les données avant de les utiliser avec l'IA ?",
    a: "Tout dépend de la sensibilité des données et du cas d'usage. Les données personnelles relèvent du RGPD : leur traitement par un système d'IA suppose une base légale, une minimisation et, selon les cas, une anonymisation ou une pseudonymisation. Nous cartographions les données sensibles dès le cadrage, posons les règles d'accès et de cloisonnement, et privilégions, lorsque c'est requis, un hébergement dans l'Union européenne. L'objectif est un socle exploitable par l'IA sans créer de risque réglementaire ni de fuite de données.",
  },
  {
    q: "Conseil data & IA ou ESN data : quelle différence ?",
    a: "Une ESN data fournit des compétences techniques (ingénieurs data, data scientists) pour construire des entrepôts, des pipelines ou des tableaux de bord, souvent indépendamment de l'usage final. Un cabinet de conseil data & IA part de l'inverse : du cas d'usage IA visé, pour ne préparer que les données qu'il exige et éviter les grands chantiers sans débouché. Masteria réunit les deux logiques : nous cadrons le socle data en fonction de l'IA, puis développons nous-mêmes les solutions qui s'appuient dessus, sans passer la main à un intégrateur tiers.",
  },
]

/* ───────── Repères chiffrés (faits sourcés, citables) ───────── */

const MARKET_STATS = [
  {
    icon: Layers,
    stat: '≈ 50 %',
    label: "du temps des équipes data consacré à préparer et nettoyer les données avant tout usage",
    source: 'Anaconda, State of Data Science',
  },
  {
    icon: Scale,
    stat: '1ᵉʳ août 2024',
    label: "entrée en vigueur de l'AI Act européen (règlement 2024/1689) : usages des données par l'IA documentés et classés par risque",
    source: 'Commission européenne',
  },
  {
    icon: ShieldCheck,
    stat: '25 mai 2018',
    label: "application du RGPD, socle de conformité de tout traitement de données personnelles par un système d'IA",
    source: 'CNIL',
  },
]

/* ───────── Définitions clés (ancrage d'entités pour la recherche générative) ───────── */

const GLOSSARY = [
  {
    term: 'RAG (retrieval-augmented generation)',
    def: "Technique qui branche un modèle de langage sur vos documents et bases : il retrouve les passages pertinents dans vos données, puis formule une réponse sourcée plutôt qu'une connaissance générale et approximative.",
  },
  {
    term: 'Gouvernance des données',
    def: "Ensemble des règles qui rendent les données fiables et traçables : catalogue, propriété et responsabilités, règles de qualité, conformité RGPD et AI Act.",
  },
  {
    term: 'Préparation des données',
    def: "Nettoyage, structuration, déduplication et mise en forme des contenus et bases pour qu'un modèle puisse les exploiter. L'étape qui sépare une démonstration d'un usage fiable.",
  },
  {
    term: 'Qualité des données',
    def: "Niveau de complétude, de cohérence, de fraîcheur et d'homogénéité des données. Un modèle ne vaut que les données auxquelles il accède.",
  },
  {
    term: 'Vectorisation (embeddings)',
    def: "Conversion de textes ou documents en représentations numériques permettant à l'IA de retrouver les contenus par sens et non par mots-clés exacts. Brique technique du RAG.",
  },
]

/* ───────── Sources de référence (liens d'autorité, suivis) ───────── */

const REFERENCES = [
  { label: "AI Act — texte officiel (EUR-Lex, règlement 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "IA et données personnelles — CNIL", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { label: "Cadre réglementaire de l'IA — Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Conseil data & IA — Masteria',
  description: "Conseil data & IA pour les entreprises : audit du patrimoine de données, gouvernance et qualité, préparation des données pour l'IA, RAG, analytics et architecture des flux. Du cadrage à la mise en œuvre des solutions IA.",
  url: 'https://www.master-ia.fr/conseil-data-ia',
  serviceType: 'Conseil en données et intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations de conseil data & IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit de maturité data', description: "Cartographie des sources, de leur qualité et de leur accessibilité pour l'IA." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gouvernance & qualité des données', description: "Catalogue, propriété, qualité, conformité RGPD et AI Act." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Préparation des données pour l'IA", description: "Nettoyage, structuration et mise en forme pour exploitation par les modèles." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG & exploitation par l\'IA', description: "Réponses sourcées ancrées dans vos documents et vos bases." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics & dataviz augmentés par l\'IA', description: "Reporting et analyse interrogeables par les équipes métier." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conseil-data-ia#article',
  headline: "Conseil data & IA : des données prêtes pour l'intelligence artificielle",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-14',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-data-ia#webpage' },
  about: ['Conseil data & IA', 'Gouvernance des données', 'Qualité des données', 'RAG (retrieval-augmented generation)'],
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

export default function ConseilDataIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Prestations / Pourquoi / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Conseil data & IA', slug: SLUG },
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
        dateModified="2026-07-02"
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Conseil data & IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Database size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil data & intelligence artificielle
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Conseil data & IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des données prêtes pour l'intelligence artificielle</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le conseil data & IA aide les entreprises à structurer, gouverner et valoriser leurs données pour que leurs projets d'intelligence artificielle tiennent leurs promesses. Sans données fiables et accessibles, un agent, un RAG ou un modèle d'analyse reste une démonstration. <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria cadre votre socle data, puis développe les solutions IA qui s'appuient dessus.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            La donnée est le carburant de l'IA, et c'est presque toujours là que les projets butent. Cabinet spécialisé sur l'intelligence artificielle depuis 2022, fondé à Lyon, nous relions chaque chantier data à un cas d'usage IA précis : nous préparons les données utiles, posons la gouvernance, puis construisons les solutions qui les exploitent.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre projet data & IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Ce que nous faisons
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

      {/* ── PRESTATIONS (éditorial asymétrique) ── */}
      <section id="prestations" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Nos prestations</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que couvre une mission de conseil data & IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Une mission de conseil data & IA couvre l'audit de votre patrimoine de données, la gouvernance et la qualité, la préparation des données pour l'IA, le RAG, l'analytics augmenté et l'architecture des flux. L'objectif est constant : rendre vos données fiables, accessibles et réellement exploitables par vos solutions d'intelligence artificielle.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Six familles de prestations reviennent dans la plupart des missions. Elles se combinent selon votre maturité : certains partent d'un audit, d'autres d'un besoin de gouvernance, d'autres encore d'un cas d'usage IA déjà identifié mais bloqué par la donnée.
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
                Une fois le socle préparé, l'exploitation passe par nos solutions : l'<Link to="/assistant-documentaire-ia" style={aStyle}>assistant documentaire IA</Link> et l'<Link to="/integration-llm-rag" style={aStyle}>intégration LLM / RAG</Link> interrogent vos données en langage naturel, et notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> construit les outils qui s'appuient dessus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE (timeline à rail, rail étroit) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule une mission data & IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Une mission suit cinq étapes : audit du patrimoine de données, cartographie et priorisation des chantiers, mise en place de la gouvernance et de la qualité, préparation et mise à disposition des données pour l'IA, puis exploitation et mesure des résultats. Chaque étape est reliée à un cas d'usage IA concret.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Nous partons du cas d'usage, pas de la donnée pour elle-même : c'est ce qui évite les grands chantiers data sans débouché et concentre l'investissement là où il débloque de la valeur.
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

      {/* ── DONNÉES BRUTES vs PRÊTES POUR L'IA (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Pourquoi la donnée d'abord</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Données laissées en l'état ou cadrées pour l'IA : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un projet d'IA réussit ou échoue d'abord sur la donnée. Des données dispersées, incomplètes ou mal gouvernées produisent des résultats peu fiables, quel que soit le modèle. Des données nettoyées, accessibles et gouvernées permettent à un RAG, à un agent ou à une analyse de tenir leurs promesses.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Le tableau résume ce qui change, critère par critère, entre des données laissées en l'état et un socle data cadré pour l'IA.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre données laissées en l'état et données cadrées pour l'IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Données laissées en l'état</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Données cadrées pour l'IA</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.sans}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.avec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── POURQUOI UN CABINET IA POUR LA DATA (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi confier votre data à un cabinet IA plutôt qu'à une ESN data ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: 0 }}>
                <strong>Parce que nous relions chaque chantier data à un cas d'usage IA concret, et que nous ne nous arrêtons pas au diagnostic : nous préparons les données puis développons les solutions qui s'appuient dessus. Spécialisés sur l'IA depuis 2022, nous savons précisément quelles données préparer, et comment, pour qu'un modèle les exploite.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {WHY.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                La data n'est qu'un volet de la transformation : pour la stratégie d'ensemble, voyez notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link>, et pour situer votre point de départ, notre <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link>. La gouvernance des données prolonge directement celle des systèmes d'IA : nos repères sur la <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA et l'AI Act</Link> complètent le socle data décrit ici.
              </p>
            </div>
          </div>
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
                On peut aussi former vos équipes à exploiter la donnée avec l'IA
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Au-delà de la mission, nous formons vos équipes data et métier à interroger leurs données avec l'IA, à fiabiliser leurs analyses et à garder la main sur la gouvernance. Le volet formation est certifié Qualiopi et finançable par votre OPCO en France. À noter : le conseil et la préparation des données restent des prestations de service, non finançables par l'OPCO.
              </p>
              <Link to="/formation-intelligence-artificielle" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Découvrir nos formations à l'intelligence artificielle
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTEXTE & REPÈRES : éditorial + stats sourcées + définitions (SEO + GEO) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Contexte & repères</Kicker>
          <h2 style={h2Style}>
            Pourquoi la donnée décide du sort des projets d'IA
          </h2>

          <p style={answerStyle}>
            <strong>La plupart des projets d'IA qui échouent butent sur la donnée bien avant de buter sur la technologie. Un agent branché sur des données incomplètes, un RAG nourri de documents mal structurés ou une analyse fondée sur des chiffres incohérents produisent des résultats peu fiables, quelle que soit la qualité du modèle.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            C'est pourquoi nous traitons la donnée comme un préalable, pas comme un sujet annexe. Préparer le socle data en amont, le gouverner et le mettre en conformité (RGPD, AI Act) est la façon la plus sûre de fiabiliser un projet d'IA et d'en sécuriser le passage à l'échelle.
          </p>

          {/* Repères chiffrés sourcés — citables par les moteurs de réponse */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, margin: '0 0 32px' }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={s.icon} />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>Source : {s.source}</p>
              </div>
            ))}
          </div>

          {/* Définitions clés — ancrage d'entités */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '8px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Définitions clés
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence — liens d'autorité suivis */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '44px 0 16px' }}>
            Sources de référence
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {REFERENCES.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Conseil data & IA : les questions fréquentes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
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
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Explorer nos autres expertises IA, du conseil au déploiement.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Intégration LLM / RAG', href: '/integration-llm-rag', tag: 'RAG', desc: "Rendre vos données interrogeables par un modèle, avec des réponses sourcées." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'GenAI', desc: "Ce que vos données fiabilisées rendent possible : assistants et contenus générés ancrés dans votre réalité." },
              { label: 'Assistant documentaire IA', href: '/assistant-documentaire-ia', tag: 'Solution', desc: "Interroger votre base documentaire en langage naturel, une fois le socle data prêt." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Guide', desc: "Les principes RGPD appliqués à l'IA, l'AIPD et les garanties à vérifier outil par outil." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA au niveau de la direction." },
              { label: 'Agence développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Conception et développement des solutions IA qui s'appuient sur vos données." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Des agents branchés sur vos données et vos logiciels métier." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Un point de départ qui cadre votre maturité, données comprises." },
              { label: 'IA par secteur', href: '/ia-secteurs', tag: 'Secteurs', desc: "Les enjeux data et IA propres à chaque secteur d'activité." },
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Visibilité', desc: "Référencement augmenté par l'IA et visibilité dans les moteurs de réponse." },
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
                    En savoir plus
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      <FounderNote />

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Parlons de vos données et de vos projets IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous le cas d'usage IA que vous visez et l'état de vos données. Nous revenons vers vous sous 24 heures avec une première lecture de votre socle data et une proposition de cadrage. Le travail data se juge à ce qu'il rend possible côté IA.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Cadrer votre projet data & IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Audit, gouvernance, RAG · Spécialistes IA depuis 2022 · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria est un cabinet spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Depuis 2022', 'spécialisé uniquement IA'],
              ['+1 500', 'professionnels formés'],
              ['Indépendant', 'des éditeurs de solutions'],
              ['FR · CH · BE', 'sur site ou à distance'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
