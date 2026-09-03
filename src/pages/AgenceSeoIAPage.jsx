import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Bot, Cpu, Network, Workflow,
  BarChart3, Target, Gauge, Globe, MapPin, GraduationCap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « agence SEO IA » (slug /agence-seo-ia). Comble un gap du cluster
 * high-ticket : « agence seo ia » (320, KD14, CPC 9 $), « agences seo ia » (110),
 * « agence ia seo » (50), « agence référencement ia lyon » (40), « référencement ia ».
 *
 * POSITIONNEMENT : la requête « agence seo ia » couvre deux intentions, on adresse
 * les DEUX depuis l'angle d'un cabinet IA, pas d'une agence SEO classique :
 *  - SEO augmenté par l'IA (production de contenu, clusters, audits techniques outillés) ;
 *  - GEO / AEO = être cité PAR les IA (ChatGPT, Perplexity, Google AI Overviews, Gemini).
 *
 * INTÉGRITÉ : posture orientée capacité. Aucun cas client nommé, aucune position ni
 * chiffre de résultat fabriqué, aucun prix inventé. On décrit compétences, méthode,
 * stack. Pas de promesse de PBN / black-hat. PAS d'OPCO/Qualiopi mis en avant (le SEO
 * n'est pas finançable ; seule la formation associée l'est, dans le bloc secondaire).
 *
 * Design premium identique à /agence-developpement-ia : icônes lucide (zéro emoji),
 * kickers, réponses directes citables en gras, accent bleu #2563EB, CTA finale sombre.
 *
 * Depuis 2026-08-10, l'offre d'entrée du cluster vit sur /audit-seo-ia (requêtes
 * « audit ia seo » et « audit geo ia ») : cette page reste le pilier « agence »,
 * l'audit convertit et renvoie ici pour l'accompagnement.
 */

const SLUG = 'agence-seo-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Agence SEO IA : référencement et visibilité IA | Masteria"
const META_DESC = "Agence SEO IA à Lyon : référencement Google augmenté par l'IA et optimisation GEO pour être cité dans ChatGPT, Perplexity et les AI Overviews de Google."
const KEYWORDS = "agence seo ia, seo ia, ia seo, référencement ia, geo generative engine optimization, seo intelligence artificielle"

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
  { icon: Search,  label: 'SEO + GEO' },
  { icon: Bot,     label: 'Visible dans ChatGPT, Perplexity, Gemini' },
  { icon: Cpu,     label: "SEO outillé par l'IA" },
  { icon: MapPin,  label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── Ce que fait une agence SEO IA (6 cartes) ───────── */

const LIVRABLES = [
  {
    icon: Search,
    title: "SEO augmenté par l'IA",
    desc: "Référencement naturel accéléré par l'intelligence artificielle : analyse de la SERP et des intentions, briefs de contenu structurés, production à grande échelle relue et validée par des humains. La vitesse de l'IA au service d'un contenu réellement utile, jamais du remplissage.",
  },
  {
    icon: Bot,
    title: 'GEO / référencement génératif',
    desc: "L'optimisation pour les moteurs de réponse (AEO) : être cité dans ChatGPT, Perplexity, Google AI Overviews et Gemini. Contenu citable, entités claires, données structurées et autorité de marque, pour apparaître là où vos clients posent désormais leurs questions.",
  },
  {
    icon: Gauge,
    title: 'Audit SEO technique outillé IA',
    desc: "Exploration, indexation, performance (Core Web Vitals), données structurées et maillage passés au crible avec l'aide de l'IA. Vous obtenez une liste de correctifs priorisés par impact, pas un rapport de 80 pages illisible.",
  },
  {
    icon: Network,
    title: 'Architecture sémantique & cocon',
    desc: "Cartographie de vos mots-clés en clusters thématiques (pilier et pages liées), structuration du maillage interne et couverture des entités de votre domaine. L'architecture qui fait comprendre votre expertise à Google comme aux modèles.",
  },
  {
    icon: Workflow,
    title: 'Automatisations SEO',
    desc: "Surveillance des positions et des citations IA, alertes, reporting et workflows de production reliés à vos outils. En tant qu'agence de développement, nous construisons ces automatisations au lieu de tout faire à la main.",
  },
  {
    icon: BarChart3,
    title: 'Mesure de visibilité IA',
    desc: "Au-delà des positions Google, nous suivons votre présence dans les réponses génératives : sur quelles questions votre marque est citée, par quels moteurs, et comment cette part de voix évolue dans le temps.",
  },
]

/* ───────── Méthode (5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Audit de visibilité (Google + IA)',
    desc: "Nous mesurons votre point de départ sur les deux fronts : positions et couverture sur Google, et présence réelle dans les réponses de ChatGPT, Perplexity, Gemini et des AI Overviews. Nous identifions les écarts à plus fort potentiel.",
  },
  {
    num: '02',
    title: "Stratégie d'entités et de contenu",
    desc: "Nous construisons la carte des sujets et des entités de votre domaine, priorisée par impact business et faisabilité. C'est la trajectoire éditoriale qui couvre les requêtes classiques et les questions posées aux IA.",
  },
  {
    num: '03',
    title: "Production outillée par l'IA",
    desc: "Nous produisons les contenus avec l'aide de l'IA, à partir de briefs précis, puis nous les relisons et les enrichissons humainement. Objectif : un contenu juste, sourcé et citable, qui tient la qualité dans la durée.",
  },
  {
    num: '04',
    title: 'Technique, données structurées & maillage',
    desc: "Nous traitons le socle technique : performance, indexation, balisage Schema.org, formats citables par les IA et maillage interne. Le contenu ne sert que s'il est trouvable et compréhensible par les machines.",
  },
  {
    num: '05',
    title: 'Mesure & itération',
    desc: "Nous suivons les positions, le trafic et les citations dans les IA, puis nous itérons sur ce qui progresse. Chaque cycle s'appuie sur des données réelles, pas sur des promesses de classement.",
  },
]

/* ───────── SEO classique / SEO augmenté IA / GEO ───────── */

const TABLE = [
  {
    critere: 'Objectif',
    classique: 'Se classer dans les résultats Google',
    augmente: 'Se classer plus vite et mieux, à plus grande échelle',
    geo: 'Être cité dans les réponses générées par les IA',
  },
  {
    critere: 'Où vous gagnez en visibilité',
    classique: 'Pages de résultats classiques (liens bleus)',
    augmente: 'SERP classiques + featured snippets',
    geo: 'ChatGPT, Perplexity, Gemini, Google AI Overviews',
  },
  {
    critere: 'Leviers principaux',
    classique: 'Contenu, technique, popularité',
    augmente: "Contenu et audits produits avec l'IA, automatisations",
    geo: 'Entités, données structurées, contenu citable, autorité',
  },
  {
    critere: 'Comment on mesure',
    classique: 'Positions, trafic organique',
    augmente: 'Positions, trafic, productivité éditoriale',
    geo: 'Part de citations dans les réponses IA',
  },
]

/* ───────── Pourquoi une agence IA pour le SEO ───────── */

const WHY = [
  { icon: Cpu, title: "Nous comprenons comment les IA citent", desc: "Notre cœur de métier, c'est l'IA : modèles, RAG, entités, manière dont un moteur de réponse sélectionne et cite une source. Cette lecture interne du fonctionnement des LLM est précisément ce que le GEO demande, et qu'une agence SEO généraliste découvre seulement." },
  { icon: Workflow, title: 'Nous construisons les automatisations', desc: "Au-delà des recommandations, nous développons les workflows : surveillance des citations IA, reporting, pipelines de production. Notre nature d'agence de développement IA transforme la stratégie SEO en outils qui tournent." },
  { icon: Globe, title: 'Plusieurs moteurs, pas un seul', desc: "Multi-LLM par principe : nous optimisons votre visibilité pour Google et pour plusieurs moteurs de réponse, sans miser sur une seule plateforme dont l'algorithme peut changer du jour au lendemain." },
  { icon: Target, title: 'Du contenu durable, pas du spam', desc: "Pas de fermes de contenu ni de réseaux de liens artificiels : ces approches se retournent contre vous. Nous misons sur un contenu utile, sourcé et bien structuré, le seul qui tienne face aux mises à jour de Google et aux IA." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une agence SEO IA ?",
    a: "Une agence SEO IA, ou agence de référencement IA, combine le référencement naturel et l'intelligence artificielle de deux façons. D'abord, elle utilise l'IA pour produire du contenu, des briefs et des audits techniques plus vite et à plus grande échelle : c'est le SEO augmenté par l'IA. Ensuite, elle optimise votre présence dans les réponses générées par les IA elles-mêmes (ChatGPT, Perplexity, Google AI Overviews, Gemini) : c'est le GEO, ou référencement génératif. Masteria couvre les deux, depuis l'angle d'un cabinet spécialisé sur l'IA.",
  },
  {
    q: "SEO et GEO : quelle est la différence ?",
    a: "Le SEO (Search Engine Optimization) vise à se classer dans les résultats des moteurs de recherche classiques, Google en tête. Le GEO (Generative Engine Optimization), aussi appelé AEO (Answer Engine Optimization), vise à être cité dans les réponses générées par les IA conversationnelles et les AI Overviews de Google. Les deux se renforcent : un contenu clair, structuré et faisant autorité aide Google à vous classer et les modèles à vous citer. La différence se joue surtout sur les entités, les données structurées et le format citable du contenu.",
  },
  {
    q: "L'IA va-t-elle remplacer le SEO ?",
    a: "Non, elle le déplace. Une part croissante des recherches reçoit une réponse directe d'une IA, sans clic vers un site. Le SEO classique reste utile pour les requêtes transactionnelles et la marque, mais la visibilité dans les réponses génératives devient un enjeu à part entière. Travailler les deux, SEO et GEO, est la façon réaliste de rester visible quand vos clients passent autant par Google que par ChatGPT ou Perplexity.",
  },
  {
    q: "Comment être cité par ChatGPT, Perplexity ou les AI Overviews de Google ?",
    a: "Les moteurs de réponse privilégient des sources claires, structurées et faisant autorité sur un sujet. Concrètement : un contenu qui répond directement à la question dès les premières lignes, des entités bien définies, des données structurées (Schema.org), une cohérence thématique sur l'ensemble du site et des signaux d'autorité réels. Nous auditons votre présence actuelle dans ces moteurs, puis nous travaillons le contenu et la technique pour augmenter vos chances d'être sélectionné et cité.",
  },
  {
    q: "Combien coûte une prestation de SEO IA ?",
    a: "La prestation se chiffre sur devis, selon le périmètre : un audit ponctuel, un accompagnement éditorial récurrent ou un programme combinant SEO, GEO et automatisations ne représentent pas le même engagement. Nous établissons une proposition après un premier échange qui cadre vos objectifs, votre marché et votre point de départ. Nous ne vendons pas de pack à l'aveugle ni de garantie de position, qu'aucune agence sérieuse ne peut promettre.",
  },
  {
    q: "Intervenez-vous à Lyon et à distance ?",
    a: "Les deux. Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, intervient dans toute la France ainsi qu'en Suisse et en Belgique. Le travail de SEO et de GEO se mène très bien à distance, par points réguliers ; les phases de cadrage ou de transfert aux équipes peuvent se tenir sur site selon vos préférences.",
  },
  {
    q: "Proposez-vous du référencement IA à Lyon ?",
    a: "Oui. Masteria est une agence de référencement IA basée à Lyon : nous accompagnons les entreprises de la métropole lyonnaise et de la région Auvergne-Rhône-Alpes sur le référencement naturel augmenté par l'IA et sur le GEO, en présentiel pour les temps de cadrage et en distanciel pour la production et le suivi. Le référencement IA ne se limite pas à une zone : nous travaillons aussi dans toute la France, en Suisse et en Belgique, la visibilité dans Google comme dans les moteurs de réponse n'ayant pas de frontière géographique.",
  },
  {
    q: "Combien de temps pour voir des résultats en SEO IA ?",
    a: "Le SEO et le GEO sont des leviers de fond, pas des interrupteurs : les premiers effets sur la visibilité apparaissent généralement en quelques semaines pour la partie technique et les contenus à faible concurrence, et se consolident sur plusieurs mois pour les requêtes disputées. La visibilité dans les réponses des IA peut évoluer plus vite sur des sujets de niche bien traités. Nous mesurons le point de départ dès l'audit, puis suivons les positions, le trafic et les citations IA à intervalle régulier. Aucune agence sérieuse ne garantit un classement ni un délai ferme.",
  },
  {
    q: "Comment choisir parmi les agences SEO IA ?",
    a: "Sur des critères vérifiables plutôt que sur les classements : les palmarès des « meilleures agences SEO IA » publiés en ligne sont déclaratifs ou sponsorisés. Une agence experte en IA et SEO se reconnaît à des choses concrètes : elle montre sa propre visibilité (positions et citations dans les moteurs de réponse), elle explique sa méthode sur vos pages plutôt qu'en généralités, elle écrit ce qu'elle ne garantit pas, et elle sait dire où finit le SEO et où commence le GEO. Que vous cherchiez une agence IA SEO pour un audit ponctuel ou un accompagnement continu, le cadrage gratuit permet de juger sur pièces.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Agence SEO IA — Masteria',
  description: "Agence SEO IA : référencement naturel augmenté par l'intelligence artificielle et optimisation GEO/AEO pour la visibilité dans les moteurs de réponse (ChatGPT, Perplexity, Google AI Overviews, Gemini). Audit, contenu, technique et automatisations SEO.",
  url: 'https://www.master-ia.fr/agence-seo-ia',
  serviceType: 'Référencement SEO et GEO assisté par IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations de SEO et GEO assistées par IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "SEO augmenté par l'IA", description: "Production de contenu, briefs et stratégie éditoriale accélérés par l'IA, relus par des humains." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO / référencement génératif (AEO)', description: "Optimisation de la visibilité dans ChatGPT, Perplexity, Google AI Overviews et Gemini." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit SEO technique outillé IA', description: "Exploration, indexation, performance, données structurées et maillage, priorisés par impact." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Architecture sémantique & cocon', description: "Clustering des mots-clés, couverture des entités et maillage interne." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisations SEO', description: "Surveillance des positions et des citations IA, reporting et workflows de production." } },
    ],
  },
}

/* DefinedTermSet : définitions citables (GEO) de SEO, SEO augmenté, GEO et AEO.
   Reprend en données structurées le comparatif déjà présent sur la page. */
const DEFINITIONS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/agence-seo-ia#glossaire',
  name: 'Glossaire — SEO, SEO augmenté par l\'IA, GEO et AEO',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'SEO (Search Engine Optimization)',
      description: "Référencement naturel : ensemble des techniques visant à positionner un site dans les résultats des moteurs de recherche classiques comme Google, via le contenu, la technique et la popularité.",
    },
    {
      '@type': 'DefinedTerm',
      name: "SEO augmenté par l'IA",
      description: "Pratique du référencement naturel accélérée par l'intelligence artificielle : production de contenu, briefs, clusters sémantiques et audits techniques réalisés plus vite et à plus grande échelle, avec relecture humaine.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'GEO (Generative Engine Optimization)',
      description: "Optimisation pour les moteurs génératifs : ensemble des techniques visant à être cité dans les réponses générées par les IA (ChatGPT, Perplexity, Google AI Overviews, Gemini), via des entités claires, des données structurées et un contenu citable faisant autorité.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'AEO (Answer Engine Optimization)',
      description: "Optimisation pour les moteurs de réponse, synonyme proche du GEO : structurer le contenu pour répondre directement aux questions et maximiser les chances d'être sélectionné comme source par une IA conversationnelle.",
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
  dateModified: '2026-07-30',
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
        dateModified="2026-07-30"
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
              SEO & référencement génératif
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Agence SEO IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>être visible sur Google et dans les réponses des IA</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une agence SEO IA combine le référencement naturel et l'intelligence artificielle pour vous rendre visible sur Google et dans les réponses des IA (ChatGPT, Perplexity, Google AI Overviews, Gemini). <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria met son expertise des modèles au service de votre visibilité</strong> : SEO accéléré par l'IA, et GEO pour être cité par les moteurs de réponse.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Vos clients ne cherchent plus seulement sur Google : ils posent leurs questions à des IA qui répondent directement. Notre approche du référencement IA travaille les deux terrains à la fois. Cabinet spécialisé sur l'intelligence artificielle depuis 2022, fondé à Lyon, nous combinons le référencement naturel classique et la visibilité dans les réponses génératives, avec une lecture interne du fonctionnement des modèles.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Auditer votre visibilité IA
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

      {/* ── CE QUE FAIT UNE AGENCE SEO IA (éditorial asymétrique) ── */}
      <section id="prestations" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Nos prestations</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que fait une agence SEO IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Une agence SEO IA travaille votre visibilité sur deux fronts : le SEO augmenté par l'IA (contenu, audits techniques et clusters produits plus vite et à plus grande échelle) et le GEO, l'optimisation pour être cité dans les réponses des IA. Masteria couvre l'audit, le contenu, la technique, l'architecture sémantique et les automatisations de suivi.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Six familles de prestations reviennent dans la plupart des missions. Elles se combinent selon votre maturité : certains partent d'un audit, d'autres d'un besoin de contenu, d'autres encore de la visibilité dans les IA.
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
                Le point d'entrée le plus fréquent est l'<Link to="/audit-seo-ia" style={aStyle}>audit SEO IA</Link> : un état des lieux chiffré de votre visibilité sur Google et dans les IA, dont découle le reste. Pour le seul versant IA, l'<Link to="/audit-geo-ia" style={aStyle}>audit GEO IA</Link> mesure vos citations et votre part de voix en profondeur. Le volet automatisation s'appuie sur notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link> et notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link>. Si votre enjeu est plus large que la visibilité, notre <Link to="/agence-ia-marketing" style={aStyle}>agence IA marketing</Link> couvre l'ensemble du marketing assisté par IA.
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
            <strong>Une mission suit cinq étapes : audit de votre visibilité sur Google et dans les IA, stratégie d'entités et de contenu, production outillée par l'IA et relue par des humains, optimisation technique et maillage, puis mesure des positions et des citations IA. Vous décidez à chaque étape, sur des éléments concrets.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Le même chemin pour chaque mission : mesurer le point de départ, cadrer la stratégie, produire, optimiser la technique, puis itérer sur les données réelles. Pas de garantie de classement promise à l'aveugle, des progrès mesurés.
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

      {/* ── SEO vs SEO augmenté vs GEO (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>SEO, SEO augmenté &amp; GEO</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Référencement classique, SEO augmenté par l'IA et GEO : que choisir ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le SEO classique vise un bon classement sur Google. Le SEO augmenté par l'IA fait la même chose plus vite et à plus grande échelle. Le GEO vise une autre surface : être cité dans les réponses générées par les IA. Les trois se complètent, et c'est leur combinaison qui sécurise votre visibilité quand les usages de recherche se partagent entre Google et les IA.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Voici la lecture des trois approches, critère par critère, pour situer celle qui correspond à votre besoin.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre SEO classique, SEO augmenté par l'IA et GEO" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
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
            <strong>Parce que la visibilité se joue désormais autant dans les réponses des IA que sur Google, et que cela demande de comprendre de l'intérieur comment les modèles sélectionnent et citent une source. Masteria est spécialisée sur l'IA depuis 2022 : nous appliquons cette expertise au référencement et nous construisons les automatisations qui le font tenir.</strong>
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
            Si votre besoin commence en amont (stratégie de présence, gouvernance de contenu, priorisation), notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> intervient en premier. Pour une vue d'ensemble de nos accompagnements à Lyon et en France, parcourez notre <Link to="/agence-ia" style={aStyle}>agence IA</Link>.
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
                On peut aussi former vos équipes au SEO et au GEO à l'ère de l'IA
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Au-delà de la prestation, nous formons vos équipes marketing et contenu à produire avec l'IA, à structurer un contenu citable et à suivre leur visibilité dans les moteurs de réponse. Le volet formation est certifié Qualiopi et finançable par votre OPCO en France. À noter : les prestations de SEO et de GEO restent des services, non finançables par l'OPCO.
              </p>
              <Link to="/formation-intelligence-artificielle" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Découvrir nos formations à l'intelligence artificielle
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
                Agence SEO IA : les questions fréquentes
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
              { label: 'Référencement AIO : le guide', href: '/blog/referencement-aio-strategie-contenu-ia', tag: 'Guide', desc: "AIO, GEO, AEO face au SEO, les AI Overviews de Google et la stratégie de contenu en cinq décisions." },
              { label: 'Audit SEO IA', href: '/audit-seo-ia', tag: "Offre d'entrée", desc: "L'état des lieux chiffré de votre visibilité sur Google et dans les IA, avec correctifs priorisés." },
              { label: 'Audit GEO', href: '/audit-geo-ia', tag: 'Visibilité IA', desc: "Le versant IA seul : taux de citation, part de voix face aux concurrents et plan pour devenir citable." },
              { label: 'Agence IA marketing', href: '/agence-ia-marketing', tag: 'Marketing', desc: "Le marketing assisté par IA dans son ensemble : contenu, acquisition, growth, au-delà du seul SEO." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Les workflows et automatisations qui font tourner votre suivi SEO et votre production de contenu." },
              { label: 'Agence développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Agents, intégrations et outils sur mesure, dont les automatisations de monitoring de visibilité." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA au niveau de la direction." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Un point de départ qui cadre votre maturité et vos priorités, visibilité comprise." },
              { label: 'Agence IA Lyon', href: '/agence-ia-lyon', tag: 'Agence', desc: "Notre agence IA basée à Lyon : conseil, développement et formation, en France et au-delà." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Des outils et copilotes développés pour un métier précis, connectés à vos données." },
              { label: 'IA par secteur', href: '/ia-secteurs', tag: 'Secteurs', desc: "Notre lecture des enjeux et cas d'usage IA propres à chaque secteur d'activité." },
              { label: "IA générative en entreprise", href: '/ia-generative-entreprise', tag: 'IA générative', desc: "Les modèles génératifs qui alimentent la production de contenu et la visibilité dans les moteurs de réponse." },
              { label: "Cas d'usage de l'IA en entreprise", href: '/cas-usage-ia-entreprise', tag: 'Cas d\'usage', desc: "Un panorama des usages concrets de l'IA en entreprise, au-delà du seul référencement." },
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
              Parlons de votre visibilité dans l'IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez-nous votre marché et vos objectifs de visibilité. Nous revenons vers vous sous 24 heures avec une première lecture de votre présence sur Google et dans les IA, et une proposition de cadrage. Aucune garantie de classement promise, des leviers concrets et mesurables.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Auditer votre visibilité IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · SEO + GEO · Spécialistes IA depuis 2022 · Lyon, France, Suisse, Belgique
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
              Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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
