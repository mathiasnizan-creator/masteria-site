import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Bot, Gauge, Network, BarChart3,
  FileText, ListChecks, ShieldCheck, MapPin, Check,
  Radar, GraduationCap, Presentation,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Offre d'entrée productisée du cluster SEO/GEO — « Audit SEO IA & GEO »
 * (slug /audit-seo-ia). Même relation à /agence-seo-ia que /diagnostic-ia
 * au conseil : la page d'audit convertit, la page mère porte l'accompagnement.
 *
 * Cible « audit ia seo » (320/mois, KD 16), dont l'intention mélange « audit
 * SEO outillé par l'IA » et « audit de visibilité IA » : la page assume les
 * deux lectures et vend l'audit COMBINÉ. Depuis le 2026-08-10, la requête
 * « audit geo ia » (90/mois, KD 5) a SA page dédiée /audit-geo-ia, qui porte
 * la profondeur GEO (méthode de mesure, robots IA, DefinedTermSet) ; cette
 * page garde le combiné et renvoie vers elle pour le volet GEO seul.
 *
 * INTÉGRITÉ (alignée sur /agence-seo-ia et la ligne maison) : aucune garantie
 * de position ni de citation (aucune agence sérieuse n'en promet) ; la mesure
 * GEO est présentée honnêtement (réponses variables → corpus stable de
 * questions, relevés répétés, tendance) ; pas de fourchette de prix inventée,
 * devis après cadrage gratuit ; pas de tactiques black-hat. Le SEO/GEO n'est
 * pas finançable par votre OPCO (réservé formation) — seule la formation
 * associée l'est (/formation-ia-seo).
 *
 * Désambiguïsation : l'audit IA d'entreprise (maturité, conformité) vit sur
 * /audit-ia ; les deux pages se pointent mutuellement pour router l'intention.
 */

const SLUG = 'audit-seo-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit SEO IA & GEO : votre visibilité Google + IA | Masteria"
const META_DESC = "Audit SEO IA et audit GEO : positions Google, citations dans ChatGPT, Perplexity et AI Overviews, technique, contenu. Correctifs priorisés par impact, sur devis."
const KEYWORDS = "audit seo ia, audit ia seo, audit seo intelligence artificielle, audit référencement ia, audit seo augmenté ia"

/* ───────── Styles partagés (calque /agence-seo-ia) ───────── */

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
  { icon: Search, label: 'SEO + GEO en un seul audit' },
  { icon: Bot, label: 'Citations IA mesurées sur un corpus' },
  { icon: ListChecks, label: 'Correctifs priorisés par impact' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Mission', value: "Un seul audit, deux fronts : votre référencement Google et votre visibilité dans les réponses des IA" },
  { label: 'On mesure', value: "Positions et trafic Google, citations dans ChatGPT, Perplexity, Gemini et les AI Overviews, part de voix face à vos concurrents" },
  { label: 'Livrable', value: "Correctifs techniques priorisés par impact, plan contenu et entités, grille de suivi des citations IA réutilisable" },
  { label: 'Durée', value: "De quelques jours à quelques semaines selon le périmètre (taille du site, marchés, concurrents)" },
  { label: 'Prix', value: "Sur devis après un cadrage gratuit ; pas de pack à l'aveugle, pas de garantie de position" },
  { label: 'Et après', value: "Exécution par vos équipes, votre agence ou notre accompagnement SEO + GEO : le livrable se suffit" },
]

/* ───────── Ce que l'audit examine (4 volets) ───────── */

const VOLETS = [
  {
    icon: Gauge,
    title: 'Technique et accès des robots',
    desc: "Exploration, indexation, performance (Core Web Vitals), données structurées Schema.org et maillage, passés au crible avec l'aide de l'IA. Nous vérifions aussi ce que les agences oublient : l'accès de votre site aux robots des moteurs de réponse (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) dans votre robots.txt.",
  },
  {
    icon: Network,
    title: 'Contenu et entités',
    desc: "Couverture de vos sujets, intentions traitées et manquantes, structure des pages, citabilité (une réponse claire dès les premières lignes), cohérence des entités de votre domaine. C'est ce qui fait comprendre votre expertise à Google comme aux modèles.",
  },
  {
    icon: Radar,
    title: 'Visibilité dans les IA (GEO)',
    desc: "Sur un corpus de questions représentatif de votre marché, nous relevons qui les IA citent : votre marque, vos concurrents, quelles sources et sur quelles questions. Vous découvrez votre part de voix réelle dans ChatGPT, Perplexity, Gemini et les AI Overviews.",
  },
  {
    icon: BarChart3,
    title: 'Concurrence et écarts',
    desc: "Qui est cité et classé à votre place, avec quels contenus et quels formats. L'écart entre eux et vous se traduit en opportunités concrètes : les questions où une place est prenable, et ce qu'il faut produire ou corriger pour la prendre.",
  },
]

/* ───────── Audit SEO vs audit GEO (tableau citable — GEO) ───────── */

const COMPARATIF = [
  {
    critere: 'Objet',
    seo: "Votre classement dans les résultats de recherche Google",
    geo: "Votre présence dans les réponses générées par les IA",
  },
  {
    critere: 'Moteurs concernés',
    seo: "Google et les moteurs de recherche classiques",
    geo: "ChatGPT, Perplexity, Gemini, Google AI Overviews",
  },
  {
    critere: 'Ce qu\'on mesure',
    seo: "Positions, impressions, trafic organique, indexation",
    geo: "Taux de citation sur un corpus de questions, part de voix, sources reprises",
  },
  {
    critere: 'Signaux travaillés',
    seo: "Contenu, technique, maillage, popularité",
    geo: "Entités, données structurées, contenu citable, autorité, accès des robots IA",
  },
  {
    critere: 'Livrable type',
    seo: "Correctifs techniques et plan éditorial priorisés",
    geo: "État des citations, écarts vs concurrents, plan pour devenir citable",
  },
]

/* ───────── Méthode (5 étapes) ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Votre marché, vos concurrents, vos objectifs, et le corpus de mesure : les requêtes Google qui comptent pour vous et les questions que vos clients posent aux IA. Ce premier échange est gratuit et fixe le périmètre du devis.",
  },
  {
    num: '02',
    title: 'Mesure du point de départ',
    desc: "Positions et couverture sur Google d'un côté ; de l'autre, relevés répétés sur le corpus de questions dans plusieurs moteurs de réponse. Les réponses des IA varient d'une session à l'autre : c'est la répétition sur un corpus stable qui rend la mesure fiable.",
  },
  {
    num: '03',
    title: 'Audit technique',
    desc: "Crawl du site, indexation, performance, données structurées, maillage interne et accès des robots IA. Chaque constat ressort avec sa correction, son niveau d'impact et son niveau d'effort.",
  },
  {
    num: '04',
    title: 'Audit contenu et entités',
    desc: "Couverture thématique face aux intentions de votre marché, citabilité des pages, cohérence des entités, signaux d'autorité. Nous comparons ce que vous publiez à ce que les moteurs, classiques et génératifs, sélectionnent réellement sur vos sujets.",
  },
  {
    num: '05',
    title: 'Synthèse priorisée et restitution',
    desc: "Un rapport unique qui croise les deux fronts : quick wins, correctifs classés par impact et par effort, plan de contenu, et la grille de suivi des citations IA pour mesurer l'évolution. Présenté et discuté en restitution, pas déposé dans une boîte mail.",
  },
]

/* ───────── Le livrable (5 cartes) ───────── */

const LIVRABLE = [
  {
    icon: BarChart3,
    title: 'Un état de visibilité chiffré, Google + IA',
    desc: "Vos positions, votre couverture et votre trafic d'un côté ; votre taux de citation et votre part de voix dans les moteurs de réponse de l'autre. Un point de départ daté, mesuré sur un corpus documenté, qui servira de référence pour la suite.",
  },
  {
    icon: ListChecks,
    title: 'Des correctifs techniques priorisés',
    desc: "La liste des problèmes constatés avec leur correction, classée par impact et par effort. Pas un rapport de 80 pages illisible : un plan d'action dont les premières lignes sont exécutables la semaine suivante.",
  },
  {
    icon: Network,
    title: 'Un plan contenu et entités',
    desc: "Les questions à couvrir, les pages à créer ou à restructurer, les entités à clarifier et les formats citables à adopter. De quoi alimenter votre production éditoriale pendant plusieurs mois, en interne ou avec nous.",
  },
  {
    icon: Radar,
    title: 'Une grille de suivi des citations IA',
    desc: "Le corpus de questions et la méthode de relevé vous restent : vous pouvez re-mesurer votre part de voix dans les IA à intervalle régulier, avec ou sans nous, et suivre l'effet réel des actions engagées.",
  },
  {
    icon: Presentation,
    title: 'Une restitution qui arbitre',
    desc: "Nous présentons le rapport, répondons aux questions et aidons à trancher : quoi faire en premier, quoi confier à qui, quoi écarter. Le livrable est exploitable par vos équipes ou par une autre agence : il ne dépend pas de nous.",
  },
]

/* ───────── Ce qu'on ne vous promet pas (honnêteté) ───────── */

const HONNETE = [
  "Aucune garantie de position ni de citation : aucune agence sérieuse ne peut en promettre",
  "La mesure GEO est une tendance sur un corpus stable, pas un « score » absolu : les réponses des IA varient",
  "Pas de tactiques qui se retournent contre vous : ni ferme de contenu, ni réseau de liens artificiels",
  "Si votre vrai sujet est ailleurs (offre, données, site à refondre), l'audit vous le dira",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit SEO IA ?",
    a: "L'expression recouvre deux choses, et notre audit couvre les deux. D'abord, un audit SEO outillé par l'intelligence artificielle : exploration du site, indexation, performance, données structurées et contenu analysés plus vite et plus finement grâce à l'IA, avec des correctifs priorisés par impact. Ensuite, un audit de votre visibilité dans les IA elles-mêmes : mesurer si ChatGPT, Perplexity, Gemini et les AI Overviews de Google citent votre marque quand vos clients leur posent des questions. Le premier optimise votre présence sur Google, le second sur les moteurs de réponse.",
  },
  {
    q: "Faut-il un audit SEO, un audit GEO, ou les deux ?",
    a: "Cela dépend d'où se joue votre visibilité. Si vos clients passent surtout par Google et que votre site n'a jamais été audité sérieusement, le versant SEO prime. Si vos positions Google sont solides et que la question est votre présence dans les réponses des IA, notre audit GEO dédié suffit et va plus loin sur la mesure des citations. Dans la plupart des cas, les deux fronts s'ignorent l'un l'autre chez nos clients : c'est précisément l'intérêt de l'audit combiné, qui croise les constats dans un seul rapport et évite deux missions séparées. Le cadrage gratuit sert à trancher, y compris vers la formule la plus petite.",
  },
  {
    q: "Quelle est la différence entre un audit SEO et un audit GEO ?",
    a: "L'audit SEO mesure votre classement dans les résultats de recherche Google : positions, trafic, indexation, technique. L'audit GEO mesure votre présence dans les réponses générées par les IA : taux de citation, part de voix, sources reprises. Les signaux travaillés se recouvrent en partie (un contenu clair et structuré sert les deux), mais le GEO ajoute ses propres dimensions : entités, formats citables, accès des robots IA, autorité de la marque dans les corpus. Notre audit traite les deux dans un seul rapport, car vos clients utilisent les deux surfaces.",
  },
  {
    q: "Comment mesurez-vous la visibilité dans les IA ?",
    a: "Avec une méthode assumée plutôt qu'un score magique. Nous construisons avec vous un corpus de questions représentatif de votre marché (découverte, comparaison, achat, expertise), puis nous relevons les réponses de plusieurs moteurs (ChatGPT, Perplexity, Gemini, AI Overviews) de façon répétée : les réponses varient d'une session à l'autre, c'est la répétition sur un corpus stable qui rend la mesure fiable. Nous en tirons votre taux de citation, votre part de voix face aux concurrents et les sources que chaque moteur privilégie. La grille vous reste pour re-mesurer ensuite.",
  },
  {
    q: "Combien coûte un audit SEO IA ou un audit GEO ?",
    a: "Sur devis, après un premier échange de cadrage gratuit. Le prix dépend du périmètre réel : taille du site, nombre de marchés et de langues, profondeur du corpus de questions, nombre de concurrents suivis. Nous ne publions pas de fourchette : les prix affichés en ligne par les agences ne reposent sur aucune référence de marché vérifiable, et un pack vendu à l'aveugle est rarement dimensionné juste. Le cadrage fixe le périmètre, le devis en découle.",
  },
  {
    q: "Combien de temps prend l'audit ?",
    a: "De quelques jours à quelques semaines entre le cadrage et la restitution, selon le périmètre. La mesure GEO impose un délai incompressible : les relevés sur le corpus de questions se font en plusieurs passes espacées pour lisser la variabilité des réponses. Un site vitrine sur un marché se traite vite ; un site multi-marchés avec plusieurs concurrents suivis demande davantage. Le calendrier est posé au cadrage, avec la date de restitution.",
  },
  {
    q: "Un outil d'audit GEO gratuit ne suffit-il pas ?",
    a: "C'est un bon point de départ, et ses limites arrivent vite. Les scanners automatiques donnent un score en quelques minutes : utile pour sensibiliser une direction, insuffisant pour décider. Ils ne connaissent ni votre marché, ni vos concurrents réels, ni les questions que vos clients posent vraiment, et ils ne priorisent rien. Notre audit produit l'inverse : une mesure sur votre corpus, une comparaison avec vos concurrents nommés, et un plan d'action classé par impact et par effort. Le score dit qu'il y a un sujet ; l'audit dit quoi faire.",
  },
  {
    q: "Garantissez-vous des positions sur Google ou des citations dans les IA ?",
    a: "Non, et personne de sérieux ne le peut : les algorithmes de Google et les modèles d'IA évoluent en permanence, et aucun prestataire ne les contrôle. Ce que nous garantissons, c'est la méthode : un point de départ mesuré, des actions priorisées par impact attendu, et une re-mesure qui montre ce qui a progressé. Une agence qui vous promet la première position ou la citation systématique dans ChatGPT vous promet quelque chose qui ne dépend pas d'elle.",
  },
  {
    q: "Que se passe-t-il après l'audit ?",
    a: "Vous choisissez. Le livrable est autoporteur : vos équipes ou votre agence actuelle peuvent exécuter le plan, la grille de suivi des citations vous reste pour mesurer les progrès. Si vous préférez déléguer, notre accompagnement SEO + GEO prend la suite : production de contenu outillée par l'IA et relue humainement, optimisation technique, et automatisations de suivi des positions et des citations. L'audit reste facturé pour lui-même, sans engagement sur la suite.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit SEO IA & GEO — Masteria',
  alternateName: "Audit de visibilité Google et IA",
  description: "Audit SEO outillé par l'IA et audit GEO : mesure des positions Google et des citations dans ChatGPT, Perplexity, Gemini et les AI Overviews, audit technique (indexation, performance, données structurées, accès des robots IA), contenu et entités. Livrable : correctifs priorisés par impact, plan de contenu, grille de suivi des citations IA.",
  url: 'https://www.master-ia.fr/audit-seo-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-seo-ia#webpage' },
  serviceType: 'Audit SEO et audit GEO (visibilité dans les IA)',
  category: 'Référencement et visibilité IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Audit SEO IA & GEO',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit SEO technique outillé IA', description: "Exploration, indexation, performance, données structurées, maillage et accès des robots IA, correctifs priorisés par impact." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit de visibilité GEO', description: "Mesure des citations dans ChatGPT, Perplexity, Gemini et les AI Overviews sur un corpus de questions, part de voix face aux concurrents." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan contenu et entités', description: "Questions à couvrir, pages à créer ou restructurer, entités à clarifier, formats citables." } },
    ],
  },
}

/* Méthode en ItemList (séquence citable — GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Méthode de l'audit SEO IA & GEO Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* Le DefinedTermSet des termes de mesure GEO (audit GEO, corpus de prompts,
   taux de citation, part de voix) vit sur /audit-geo-ia depuis le 2026-08-10 :
   un seul balisage de ces entités sur le site, porté par la page dédiée. */

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/audit-seo-ia#article',
  headline: "Audit SEO IA & GEO : mesurer votre visibilité sur Google et dans les IA",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-seo-ia#webpage' },
  about: ['Audit SEO IA', 'Audit GEO', 'Visibilité dans les moteurs de réponse IA', 'Generative Engine Optimization', 'Référencement naturel'],
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

/* Sources d'autorité de la page : émises en WebPage.citation (JSON-LD) et
   affichées dans le bloc « Sources et références officielles ». */
const PAGE_CITATIONS = [
          { name: 'Google Search Central — AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
          { name: 'Google Search Central — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
        ]

export default function AuditSeoIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence SEO IA', slug: 'agence-seo-ia' },
    { name: 'Audit SEO IA & GEO', slug: SLUG },
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
        dateModified="2026-08-10"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd]}
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
            <Link to="/agence-seo-ia" style={{ color: '#94A3B8' }}>Agence SEO IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Audit SEO IA &amp; GEO</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Radar size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Offre d'entrée · Audit SEO &amp; GEO
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 860 }}>
            Audit SEO IA &amp; GEO :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>votre visibilité mesurée, sur Google et dans les IA</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit SEO IA &amp; GEO de Masteria mesure votre visibilité sur deux fronts : votre référencement Google (technique, contenu, positions) et votre présence dans les réponses de ChatGPT, Perplexity, Gemini et des AI Overviews. Vous repartez avec <strong style={{ color: '#fff', fontWeight: 700 }}>un état des lieux chiffré et des correctifs priorisés par impact</strong>, exploitables par vos équipes ou par une autre agence.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Vos clients cherchent sur Google et posent leurs questions aux IA. Un audit qui ne regarde que les positions passe à côté de la moitié du sujet : qui les moteurs de réponse citent sur votre marché, et pourquoi ce n'est pas encore vous. C'est l'offre d'entrée de notre <Link to="/agence-seo-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>agence SEO IA</Link> : un point de départ mesuré, sans engagement sur la suite.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre audit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le livrable
            </a>
          </div>

          {/* chips de réassurance */}
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

          {/* En bref — synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
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

      {/* ── CE QUE L'AUDIT EXAMINE (éditorial asymétrique) ── */}
      <section id="volets" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le périmètre</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que contient un audit SEO IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>« Audit SEO IA » recouvre deux besoins : auditer votre référencement avec l'aide de l'IA, et auditer votre visibilité dans les IA. Notre audit couvre les deux en quatre volets : la technique et l'accès des robots, le contenu et les entités, la mesure GEO de vos citations, et l'analyse des écarts face à vos concurrents.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les quatre volets alimentent un seul rapport : ce qui bride votre visibilité aujourd'hui, ce qui la débloquerait demain, et dans quel ordre s'y prendre. Vous cherchiez plutôt un état des lieux de l'IA dans votre entreprise (maturité, processus, conformité) ? C'est notre <Link to="/audit-ia" style={aStyle}>audit IA</Link>, une autre mission.
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
                Le volet visibilité IA peut aussi se mener pour lui-même : notre <Link to="/audit-geo-ia" style={aStyle}>audit GEO dédié</Link> approfondit la mesure des citations, la part de voix et l'arbitrage des robots IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDIT SEO VS AUDIT GEO (ancre sombre — pivot, tableau citable GEO) ── */}
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
            <strong style={{ color: '#fff' }}>L'audit SEO mesure votre classement sur Google ; l'audit GEO mesure vos citations dans les réponses des IA. Les fondations se recouvrent (contenu clair, site sain, données structurées), les mesures et une partie des leviers diffèrent. Nous les traitons ensemble : vos clients utilisent les deux surfaces, votre visibilité se joue sur les deux.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre audit SEO et audit GEO" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
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
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Pour le volet GEO mené seul, voyez notre <Link to="/audit-geo-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>audit GEO dédié</Link>. Pour la définition complète du SEO augmenté par l'IA et du GEO, et l'accompagnement qui suit l'audit, voyez notre <Link to="/agence-seo-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence SEO IA</Link>.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>
            Comment se déroule l'audit ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>L'audit suit cinq temps : cadrage du marché et du corpus de mesure, mesure du point de départ sur Google et dans les IA, audit technique, audit du contenu et des entités, puis synthèse priorisée et restitution. La mesure GEO repose sur des relevés répétés sur un corpus stable de questions : c'est ce qui la rend fiable malgré la variabilité des réponses.</strong>
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

      {/* ── LE LIVRABLE ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Avec quoi repartez-vous concrètement ?
          </h2>

          <p style={answerStyle}>
            <strong>Vous repartez avec un état de visibilité chiffré sur Google et dans les IA, des correctifs techniques priorisés par impact et par effort, un plan de contenu et d'entités, la grille de suivi des citations IA (corpus et méthode inclus, réutilisables sans nous) et une restitution qui aide à arbitrer. Un plan d'action, pas un rapport qui dort.</strong>
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
            {/* Carte sombre : le repère honnête face aux scanners gratuits */}
            <div style={{ ...cardStyle, padding: 28, background: '#0A0F1E', border: '1px solid #1E293B' }}>
              <div style={{ marginBottom: 16 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                </div>
              </div>
              <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8, color: '#F8FAFC' }}>Plus qu'un score automatique</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                Les scanners GEO gratuits sortent un score en une minute : utile pour sensibiliser, insuffisant pour décider. Ils ignorent votre marché, vos concurrents et les questions réelles de vos clients. Le score dit qu'il y a un sujet ; l'audit dit quoi faire, dans quel ordre et pourquoi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE QU'ON NE VOUS PROMET PAS (réassurance) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Ce qu'on ne vous promet pas</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Un audit honnête sur ce qu'il peut, et ne peut pas, garantir
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le marché de la visibilité IA attire les promesses invérifiables. Notre position est simple : on garantit la méthode et la mesure, jamais le comportement d'un algorithme que personne ne contrôle. Quatre engagements en découlent.
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

          {/* Prix + formation : deux repères pratiques */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 24 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <FileText size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Le prix, sans pack à l'aveugle</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                L'audit se chiffre sur devis, après un cadrage gratuit : taille du site, marchés et langues, profondeur du corpus, concurrents suivis. Les prestations de SEO et de GEO ne sont pas finançables par votre OPCO, qui couvre la formation. L'audit reste facturé pour lui-même, sans engagement sur la suite.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Et si vos équipes exécutent</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                L'audit se prolonge bien par une montée en compétence : notre <Link to="/formation-ia-seo" style={aStyle}>formation IA pour les équipes SEO</Link> (2 jours, 5 outils comparés) est certifiée Qualiopi et finançable par votre OPCO. Vos équipes reprennent le plan d'action en main, outillées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Audit SEO IA &amp; GEO : les questions fréquentes
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            L'audit est le point d'entrée : la suite se joue en accompagnement, en automatisation ou en formation, selon ce que le rapport fait remonter.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Audit GEO dédié', href: '/audit-geo-ia', tag: 'Visibilité IA', desc: "Le volet GEO mené seul et en profondeur : citations, part de voix, robots IA, plan pour devenir citable." },
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Accompagnement', desc: "L'accompagnement qui suit l'audit : contenu outillé par l'IA, technique, GEO et suivi des citations." },
              { label: 'Audit IA (entreprise)', href: '/audit-ia', tag: 'Conseil', desc: "L'autre audit IA : maturité, processus, données et conformité de votre organisation. Une mission distincte." },
              { label: 'Formation IA pour équipes SEO', href: '/formation-ia-seo', tag: 'Formation', desc: "2 jours, 5 outils comparés, pour exécuter le plan d'action en interne. Qualiopi, finançable OPCO." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Les workflows qui font tenir le suivi : surveillance des positions et des citations, alertes, reporting." },
              { label: 'Agence IA marketing', href: '/agence-ia-marketing', tag: 'Marketing', desc: "Le marketing assisté par IA au-delà de la visibilité : contenu, acquisition, growth." },
              { label: 'Agence développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Outils et intégrations sur mesure, dont les tableaux de bord de visibilité connectés à vos données." },
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
      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui intervient</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un cabinet spécialisé IA, indépendant des éditeurs
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria est un cabinet spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les audits sont menés par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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
        </div>
      </section>

      <FounderNote />

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Offre d'entrée</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Mesurons votre visibilité, sur Google et dans les IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre marché, vos concurrents et ce qui motive la demande. Nous revenons vers vous sous 24 heures avec une première lecture et une proposition de cadrage : périmètre, corpus de mesure, calendrier et devis. Aucune garantie de classement promise, un point de départ mesuré et des actions concrètes.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un audit SEO &amp; GEO
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cadrage gratuit · Livrable exploitable sans nous · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
