import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Radar, Network, BarChart3, MessagesSquare,
  FileText, ListChecks, ShieldCheck, MapPin, Check, Gauge,
  Presentation, Search, Landmark,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « audit GEO » (slug /audit-geo-ia) — cible « audit geo ia »
 * (90/mois, KD 5), dont la SERP est 100 % pages d'audit GEO dédiées (Eskimoz,
 * Pilot'in, Semji, WAM, Webconversion) + scanners gratuits (Geoptie, Genee).
 *
 * ARTICULATION DU CLUSTER (2026-08-10) :
 *  - /agence-seo-ia   = pilier agence (SEO augmenté + GEO, accompagnement) ;
 *  - /audit-seo-ia    = offre d'entrée combinée, cible « audit ia seo » ;
 *  - /audit-geo-ia    = CETTE page, l'audit GEO seul en profondeur, cible
 *    « audit geo ia » / « audit geo » / « audit visibilité ia ».
 *  La page combinée renvoie ici pour le volet GEO en détail ; cette page
 *  renvoie à la combinée quand le besoin couvre aussi le SEO. Le DefinedTermSet
 *  des termes de mesure (audit GEO, corpus, taux de citation, part de voix)
 *  vit ICI et nulle part ailleurs (déplacé depuis /audit-seo-ia le 2026-08-10).
 *
 * INTÉGRITÉ (ligne maison) : pas de garantie de citation ; la variabilité des
 * réponses IA est assumée (corpus stable + relevés répétés → tendance) ; pas
 * de « score » vendu comme absolu ; pas de fourchette de prix inventée ; le
 * GEO n'est pas finançable par votre OPCO (réservé formation). L'arbitrage
 * robots.txt (ouvrir ou non aux bots IA) est présenté comme un choix motivé,
 * pas comme une obligation.
 */

const SLUG = 'audit-geo-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Audit GEO IA : êtes-vous cité par ChatGPT ? | Masteria"
const META_DESC = "Audit GEO IA : taux de citation dans ChatGPT, Perplexity, Gemini et AI Overviews, part de voix face aux concurrents, accès des robots IA. Plan d'action priorisé."
const KEYWORDS = "audit geo ia, audit geo, audit visibilité ia, audit generative engine optimization, audit citation ia, audit aio, référencement aio, visibilité chatgpt perplexity"

/* ───────── Styles partagés (calque /audit-seo-ia) ───────── */

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
  { icon: Bot, label: 'ChatGPT · Perplexity · Gemini · AI Overviews' },
  { icon: Radar, label: 'Taux de citation et part de voix mesurés' },
  { icon: ListChecks, label: "Plan d'action priorisé, pas un score brut" },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Mission', value: "Mesurer si les IA vous citent quand vos clients leur posent des questions, et bâtir le plan pour devenir citable" },
  { label: 'On mesure', value: "Taux de citation par moteur, part de voix face aux concurrents, sources reprises, position dans les réponses" },
  { label: 'Moteurs', value: "ChatGPT, Perplexity, Gemini et les AI Overviews de Google, en relevés répétés sur un corpus stable" },
  { label: 'Livrable', value: "État des citations daté, écarts vs concurrents, correctifs techniques et plan de contenu citable, grille de re-mesure" },
  { label: 'Durée', value: "Quelques semaines entre cadrage et restitution : les relevés se font en plusieurs passes espacées" },
  { label: 'Prix', value: "Sur devis après un cadrage gratuit ; pas de pack à l'aveugle, pas de garantie de citation" },
]

/* ───────── Ce que vérifie l'audit (5 vérifications) ───────── */

const VERIFICATIONS = [
  {
    icon: MessagesSquare,
    title: 'Vos citations, question par question',
    desc: "Sur un corpus de questions représentatif de votre marché (découverte, comparaison, achat, expertise), nous relevons qui chaque moteur cite : votre marque, vos concurrents, la presse, les annuaires. C'est la matière première de tout le reste.",
  },
  {
    icon: BarChart3,
    title: 'Votre part de voix face aux concurrents',
    desc: "Le taux de citation seul ne dit rien : ce qui compte est votre part des citations face aux acteurs qui vous disputent le marché. Vous découvrez qui les IA recommandent à votre place, sur quelles questions, et avec quels contenus.",
  },
  {
    icon: Search,
    title: 'Les sources que les moteurs préfèrent',
    desc: "Chaque moteur a ses habitudes : médias, comparateurs, forums, sites experts. Nous identifions les sources reprises sur vos sujets, car y être présent ou cité est souvent le chemin le plus court vers la réponse générée.",
  },
  {
    icon: Gauge,
    title: 'Vos fondations techniques',
    desc: "Accès de votre site aux robots des IA (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) dans le robots.txt, données structurées Schema.org, performances et indexation. Un site fermé aux bots IA ne peut pas nourrir leurs réponses : l'ouverture est un choix, l'audit le rend éclairé.",
  },
  {
    icon: Network,
    title: 'La citabilité de votre contenu',
    desc: "Les moteurs de réponse sélectionnent des passages clairs, structurés et attribuables : réponse directe en tête de page, entités nettes, données datées et sourcées. Nous évaluons vos pages clés sur ces critères, page par page.",
  },
]

/* ───────── Méthode (5 étapes) ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage et corpus',
    desc: "Votre marché, vos concurrents, vos personas, et le corpus de questions : celles que vos clients posent réellement aux IA, par intention. Ce corpus est la colonne vertébrale de la mesure ; il se construit avec vous, il vous reste. Le cadrage est gratuit.",
  },
  {
    num: '02',
    title: 'Relevés multi-moteurs',
    desc: "Plusieurs passes de relevés espacées dans le temps, sur ChatGPT, Perplexity, Gemini et les AI Overviews. Les réponses varient d'une session à l'autre : une mesure ponctuelle est un instantané trompeur, la répétition sur un corpus stable donne une tendance fiable.",
  },
  {
    num: '03',
    title: 'Analyse des écarts',
    desc: "Taux de citation, part de voix, sources reprises : nous comparons votre présence à celle de vos concurrents, question par question. Les écarts se traduisent en opportunités : les questions où une place est prenable et ce qui la conditionne.",
  },
  {
    num: '04',
    title: 'Audit des fondations',
    desc: "Robots.txt et accès des bots IA, données structurées, citabilité des pages clés, cohérence des entités. Chaque constat ressort avec sa correction et son niveau d'effort, pour que le plan soit exécutable et non théorique.",
  },
  {
    num: '05',
    title: "Plan d'action et restitution",
    desc: "Un rapport unique : état des citations daté, écarts, correctifs techniques, plan de contenu citable priorisé, et la grille de re-mesure. Présenté en restitution pour arbitrer ensemble quoi lancer en premier.",
  },
]

/* ───────── Le livrable (5 cartes) ───────── */

const LIVRABLE = [
  {
    icon: Radar,
    title: 'Un état des citations daté',
    desc: "Votre taux de citation par moteur et par intention, mesuré sur le corpus, à date. C'est votre point de référence : toute action future se jugera contre lui, chiffres en main.",
  },
  {
    icon: BarChart3,
    title: 'La cartographie de la part de voix',
    desc: "Qui est cité sur votre marché, à quelle fréquence, sur quelles questions. Vos concurrents directs, les médias et comparateurs qui trustent les réponses, et les espaces encore vacants.",
  },
  {
    icon: ListChecks,
    title: 'Les correctifs techniques priorisés',
    desc: "Robots.txt, données structurées, performance, indexation : la liste des corrections classée par impact et par effort, avec les premières lignes exécutables la semaine suivante.",
  },
  {
    icon: Network,
    title: 'Un plan de contenu citable',
    desc: "Les questions à couvrir, les pages à restructurer en format citable, les entités à clarifier, les sources tierces où être présent. De quoi alimenter votre production pendant des mois.",
  },
  {
    icon: Presentation,
    title: 'La grille de re-mesure, qui vous reste',
    desc: "Le corpus, la méthode de relevé et le tableau de suivi vous appartiennent : vous re-mesurez votre part de voix à intervalle régulier, avec ou sans nous, et suivez l'effet réel des actions.",
  },
]

/* ───────── Ce qu'on ne vous promet pas ───────── */

const HONNETE = [
  "Aucune garantie de citation : personne ne contrôle ce qu'un modèle répond",
  "Pas de « score GEO » absolu : une tendance mesurée sur un corpus stable, méthode documentée",
  "Pas d'astuce miracle : la citabilité se construit par le contenu, la technique et l'autorité",
  "Si le GEO n'est pas votre priorité (marché, maturité), l'audit vous le dira au cadrage",
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un audit GEO IA ?",
    a: "C'est l'évaluation de votre visibilité dans les réponses générées par les IA. Le GEO (Generative Engine Optimization) désigne l'optimisation pour ces moteurs de réponse ; l'audit en est le point de départ : mesurer, sur un corpus de questions représentatif de votre marché, à quelle fréquence ChatGPT, Perplexity, Gemini et les AI Overviews de Google citent votre marque, qui ils citent à votre place, et pourquoi. Il vérifie aussi les fondations : accès de votre site aux robots des IA, données structurées, citabilité du contenu. Le résultat est un plan d'action priorisé pour devenir une source citée.",
  },
  {
    q: "Que mesure exactement un audit GEO ?",
    a: "Quatre familles d'indicateurs. Le taux de citation : la proportion des réponses, sur le corpus de questions, où votre marque ou votre site apparaît comme source ou recommandation. La part de voix : votre poids face aux concurrents sur les mêmes questions. Les sources reprises : les sites que chaque moteur privilégie sur vos sujets (médias, comparateurs, sites experts). Et l'état des fondations : robots.txt, données structurées, citabilité des pages. Le tout par moteur et par intention de recherche, car les résultats diffèrent nettement de l'un à l'autre.",
  },
  {
    q: "Les réponses des IA changent tout le temps : la mesure est-elle fiable ?",
    a: "C'est la bonne objection, et c'est elle qui dicte la méthode. Une réponse d'IA varie d'une session à l'autre : un relevé unique ne prouve rien. Nous mesurons donc en plusieurs passes espacées dans le temps, sur un corpus de questions stable et documenté, et nous raisonnons en tendance : votre fréquence de citation moyenne, sa direction, votre part de voix. C'est le même principe qu'un sondage : une mesure répétée sur un échantillon constant. Un prestataire qui vous vend un « score » issu d'un scan unique vous vend un instantané, pas une mesure.",
  },
  {
    q: "Quelle différence avec un audit SEO ?",
    a: "L'audit SEO mesure votre classement dans les résultats de recherche Google ; l'audit GEO mesure votre présence dans les réponses générées par les IA. Les fondations se recouvrent (site sain, contenu clair, données structurées), mais les indicateurs et une partie des leviers diffèrent : le GEO se joue sur les entités, les formats citables, l'autorité et l'accès des robots IA. Si votre besoin couvre les deux fronts, notre audit SEO IA & GEO combiné les traite dans un seul rapport ; cette page décrit le volet GEO mené pour lui-même.",
  },
  {
    q: "Faut-il ouvrir son site aux robots des IA (GPTBot, PerplexityBot) ?",
    a: "C'est un arbitrage, et l'audit le rend éclairé. Ouvrir votre robots.txt à GPTBot, PerplexityBot, ClaudeBot ou Google-Extended permet aux moteurs de lire et potentiellement citer vos contenus ; le fermer protège vos contenus de l'entraînement et de la réutilisation, au prix d'une visibilité moindre dans les réponses. Beaucoup de sites bloquent ces robots sans l'avoir jamais décidé, par un réglage hérité. L'audit établit votre configuration réelle, bot par bot, et vous donne les éléments pour choisir en connaissance de cause.",
  },
  {
    q: "Combien coûte un audit GEO ?",
    a: "Sur devis, après un cadrage gratuit qui fixe le périmètre : nombre de concurrents suivis, profondeur du corpus de questions, nombre de moteurs et de passes de relevés, marchés et langues. Nous ne publions pas de fourchette : les prix affichés par les agences ne reposent sur aucune référence de marché vérifiable. À noter : la prestation n'est pas finançable par votre OPCO, qui couvre la formation ; si une montée en compétence de vos équipes accompagne l'audit, ce volet formation est lui finançable, Masteria étant certifiée Qualiopi.",
  },
  {
    q: "Un scanner GEO gratuit ne suffit-il pas ?",
    a: "Pour éveiller le sujet en interne, si : un scan automatique montre en quelques minutes que la question se pose. Pour décider, non : il ne connaît ni vos concurrents réels, ni les questions que vos clients posent, il mesure en une passe unique ce qui demande des relevés répétés, et il ne priorise rien. L'audit fait le travail inverse : votre corpus, vos concurrents nommés, une tendance mesurée et un plan classé par impact et par effort. Beaucoup de nos cadrages commencent d'ailleurs par un scan gratuit apporté par le client : il ouvre la discussion, l'audit la tranche.",
  },
  {
    q: "Pouvez-vous garantir que ChatGPT citera mon entreprise ?",
    a: "Non, et méfiez-vous de qui le promet : personne ne contrôle ce qu'un modèle génère, ni OpenAI, ni Google, ni aucune agence. Ce qui se garantit, c'est la méthode : un point de départ mesuré, des actions qui augmentent objectivement vos chances d'être cité (contenu citable, entités claires, données structurées, présence dans les sources reprises), et une re-mesure qui montre l'évolution réelle. La visibilité dans les IA se travaille comme le référencement : par les fondamentaux, pas par une astuce.",
  },
  {
    q: "Que se passe-t-il après l'audit ?",
    a: "Le plan d'action est exploitable par vos équipes, votre agence actuelle ou avec nous : l'accompagnement de notre agence SEO IA couvre la production de contenu citable, la technique et les automatisations de suivi des citations. La grille de re-mesure vous reste dans tous les cas, pour objectiver les progrès à intervalle régulier. L'audit est facturé pour lui-même, sans engagement sur la suite ; c'est notre façon de travailler sur toutes nos offres d'entrée.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Audit GEO IA — Masteria',
  alternateName: "Audit de visibilité dans les moteurs de réponse IA",
  description: "Audit GEO : mesure du taux de citation et de la part de voix d'une marque dans ChatGPT, Perplexity, Gemini et les Google AI Overviews, sur un corpus de questions représentatif, en relevés répétés. Vérification des fondations (accès des robots IA, données structurées, citabilité) et plan d'action priorisé pour devenir une source citée.",
  url: 'https://www.master-ia.fr/audit-geo-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-geo-ia#webpage' },
  serviceType: 'Audit GEO (Generative Engine Optimization)',
  category: 'Visibilité dans les moteurs de réponse IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Audit GEO',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mesure des citations multi-moteurs', description: "Relevés répétés sur corpus stable dans ChatGPT, Perplexity, Gemini et les AI Overviews : taux de citation, part de voix, sources reprises." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit des fondations GEO', description: "Accès des robots IA (robots.txt), données structurées, citabilité des pages, entités." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan de contenu citable', description: "Questions à couvrir, formats citables, sources tierces où être présent, priorisation par impact." } },
    ],
  },
}

/* Méthode en ItemList (séquence citable — GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Méthode de l'audit GEO Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : les termes de la mesure GEO. Vit sur CETTE page uniquement
   (déplacé de /audit-seo-ia le 2026-08-10 pour éviter le double balisage). */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/audit-geo-ia#termes',
  name: "Audit GEO : les termes de la mesure",
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Audit GEO',
      description: "Évaluation de la visibilité d'une marque dans les réponses générées par les IA (ChatGPT, Perplexity, Gemini, Google AI Overviews) : taux de citation, part de voix, sources privilégiées, et fondations techniques (accès des robots IA, données structurées, citabilité).",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Corpus de prompts',
      description: "Ensemble stable de questions représentatives d'un marché (découverte, comparaison, achat, expertise), utilisé pour mesurer de façon répétable qui les moteurs de réponse citent.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Taux de citation',
      description: "Proportion des réponses d'un moteur génératif, sur un corpus de questions donné, dans lesquelles une marque ou son site est cité comme source ou recommandation.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Part de voix IA',
      description: "Répartition des citations entre une marque et ses concurrents sur un même corpus de questions : la mesure comparative de la visibilité dans les moteurs de réponse.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Robots IA (GPTBot, PerplexityBot, ClaudeBot, Google-Extended)',
      description: "Robots d'exploration des fournisseurs d'IA. Leur autorisation ou blocage dans le robots.txt d'un site conditionne la capacité des moteurs de réponse à lire, puis citer, ses contenus.",
    },
  ],
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/audit-geo-ia#article',
  headline: "Audit GEO IA : mesurer si les IA vous citent, et devenir citable",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-09-03',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/audit-geo-ia#webpage' },
  about: ['Audit GEO', 'Generative Engine Optimization', 'Taux de citation IA', 'Part de voix IA', 'Visibilité dans les moteurs de réponse'],
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
          { name: 'OpenAI — GPTBot documentation', url: 'https://platform.openai.com/docs/gptbot' },
          { name: 'Perplexity — PerplexityBot', url: 'https://docs.perplexity.ai/guides/bots' },
        ]

export default function AuditGeoIAPage() {
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
        dateModified="2026-09-03"
        speakable={['#definition', '#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, definitionsJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Audit GEO IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Visibilité IA · Audit GEO
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Audit GEO IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>les IA citent-elles votre marque, ou vos concurrents ?</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : définition autonome (56 mots), citable hors contexte */}
          <div id="definition" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: '18px 22px', margin: '0 0 24px', maxWidth: 760 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 8 }}>Définition</div>
            <p style={{ fontSize: 15.5, color: '#E2E8F0', lineHeight: 1.65, margin: 0 }}>
              Un audit GEO IA mesure si une marque est citée dans les réponses des assistants d'intelligence artificielle, ChatGPT, Perplexity, Gemini et AI Overviews : taux de citation sur un corpus de questions, part de voix face aux concurrents, accès des robots IA au site. Il se distingue de l'audit SEO, qui mesure le classement dans Google.
            </p>
          </div>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'audit GEO de Masteria mesure votre visibilité dans les réponses de ChatGPT, Perplexity, Gemini et des AI Overviews : <strong style={{ color: '#fff', fontWeight: 700 }}>taux de citation, part de voix face à vos concurrents, sources reprises</strong>, sur un corpus de questions propre à votre marché et en relevés répétés. Vous repartez avec un plan d'action priorisé pour devenir une source citée. La discipline s'appelle aussi référencement AIO (Artificial Intelligence Optimization) ; c'est le même audit.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Quand un prospect demande à une IA « quel prestataire pour X », quelqu'un est recommandé. L'audit établit si c'est vous, pourquoi ce sont souvent d'autres, et ce qui changerait la donne. Conduit par un cabinet spécialisé sur l'IA depuis 2022, qui comprend de l'intérieur comment un moteur de réponse sélectionne ses sources.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre audit GEO
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

      {/* ── CE QUE VÉRIFIE L'AUDIT (éditorial asymétrique) ── */}
      <section id="verifications" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le périmètre</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que vérifie un audit GEO ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Un audit GEO vérifie cinq choses : vos citations question par question, votre part de voix face aux concurrents, les sources que chaque moteur privilégie sur vos sujets, vos fondations techniques (accès des robots IA, données structurées) et la citabilité de vos contenus. Cinq vérifications, un seul plan d'action.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Si votre besoin couvre aussi le référencement Google, notre <Link to="/audit-seo-ia" style={aStyle}>audit SEO IA</Link> traite les deux fronts dans un seul rapport. Et pour l'accompagnement qui suit, voyez notre <Link to="/agence-seo-ia" style={aStyle}>agence SEO IA</Link>.
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
                {/* Carte sombre : la variabilité, assumée */}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Radar size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>La variabilité, assumée</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Les réponses des IA changent d'une session à l'autre. C'est pour cela que nous mesurons en passes répétées sur un corpus stable, comme un sondage sur un échantillon constant. Un score issu d'un scan unique est un instantané, pas une mesure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI MAINTENANT (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Pourquoi un audit GEO</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Vos clients posent leurs questions aux IA. Qui leur répond ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Une part croissante des recherches reçoit une réponse directe d'une IA, sans clic vers un site. Sur ces requêtes, être absent des réponses revient à être absent du marché, quelles que soient vos positions Google. L'audit GEO établit votre situation réelle avant que vos concurrents n'installent la leur : les premiers cités deviennent les sources que les moteurs réutilisent.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {[
              { title: 'Un signal d\'avance', desc: "Le GEO est jeune : peu d'acteurs mesurent sérieusement leur part de voix. Sur la plupart des marchés, les places de « source citée » sont encore prenables, à un coût sans commune mesure avec les requêtes Google disputées." },
              { title: 'Des décisions qui se prennent sans vous', desc: "Comparaisons de prestataires, présélections d'outils, recommandations : les IA formulent des réponses tranchées. Si elles se fondent sur les contenus de vos concurrents, leurs arguments deviennent la référence." },
              { title: 'Un actif qui se construit', desc: "Contenu citable, entités claires, présence dans les sources reprises : les leviers du GEO sont des fondamentaux durables. Ce que vous bâtissez pour être cité sert aussi votre SEO, votre marque et vos ventes." },
            ].map(card => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Ce que recouvre le GEO, et comment il s'articule avec le SEO : voyez notre <Link to="/agence-seo-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence SEO IA</Link>, qui porte le glossaire complet SEO / GEO / AEO.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>
            Comment se déroule l'audit GEO ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Cinq temps : cadrage et construction du corpus de questions, relevés répétés sur plusieurs moteurs, analyse des écarts face aux concurrents, audit des fondations techniques, puis plan d'action et restitution. La mesure s'étale sur plusieurs passes espacées : c'est ce qui la rend fiable malgré la variabilité des réponses.</strong>
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
            <strong>Vous repartez avec un état des citations daté, la cartographie de votre part de voix face aux concurrents, des correctifs techniques priorisés, un plan de contenu citable et la grille de re-mesure (corpus et méthode inclus), réutilisable sans nous. Le livrable arme une décision, il ne se contente pas de constater.</strong>
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
            {/* Carte sombre : différenciation vs scanners */}
            <div style={{ ...cardStyle, padding: 28, background: '#0A0F1E', border: '1px solid #1E293B' }}>
              <div style={{ marginBottom: 16 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                </div>
              </div>
              <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8, color: '#F8FAFC' }}>Ce qu'un scanner ne fera pas</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                Un scan gratuit sort un score en une minute, sans connaître vos concurrents ni les questions de vos clients. Utile pour ouvrir la discussion en interne ; l'audit la tranche : mesure sur votre corpus, écarts nommés, plan priorisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE QU'ON NE VOUS PROMET PAS + PRIX ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Ce qu'on ne vous promet pas</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                La visibilité IA attire les promesses invérifiables. Pas ici.
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Personne ne contrôle ce qu'un modèle répond, ni OpenAI, ni Google, ni aucune agence. Nous garantissons la méthode et la mesure ; le reste se constate, chiffres en main, à la re-mesure. Quatre engagements en découlent.
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
                <h3 style={{ ...h3Style, fontSize: 16 }}>Le prix, cadré avant chiffré</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Sur devis, après un cadrage gratuit : concurrents suivis, profondeur du corpus, moteurs couverts, passes de relevés, marchés et langues. La prestation n'est pas finançable par votre OPCO, qui couvre la formation ; l'audit est facturé pour lui-même, sans engagement sur la suite.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Besoin des deux fronts ?</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Si votre visibilité Google mérite le même examen, l'<Link to="/audit-seo-ia" style={aStyle}>audit SEO IA</Link> traite les deux dans un seul rapport, au même niveau d'exigence. Le cadrage gratuit sert aussi à choisir le bon périmètre, y compris quand c'est le plus petit.
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
                Audit GEO : les questions fréquentes
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
            L'audit GEO est un point de départ : la suite se joue en contenu, en technique et en suivi automatisé des citations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Audit SEO IA', href: '/audit-seo-ia', tag: "Offre d'entrée", desc: "Les deux fronts dans un seul rapport : référencement Google et visibilité dans les IA." },
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Accompagnement', desc: "L'accompagnement qui suit l'audit : contenu citable, technique, GEO et suivi des citations." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "La surveillance en continu des citations et de la part de voix, branchée sur vos outils." },
              { label: 'Agence IA marketing', href: '/agence-ia-marketing', tag: 'Marketing', desc: "Le marketing assisté par IA au-delà de la visibilité : contenu, acquisition, growth." },
              { label: 'Audit IA (entreprise)', href: '/audit-ia', tag: 'Conseil', desc: "L'autre audit IA : maturité, processus, données et conformité de votre organisation." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Comprendre les moteurs de réponse de l'intérieur : ce que font les agents et comment ils citent." },
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
                Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, n'a qu'un seul métier : l'IA. Les audits sont menés par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Audit GEO</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Sachons qui les IA citent sur votre marché
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre marché et vos concurrents. Nous revenons vers vous sous 24 heures avec une première lecture et une proposition de cadrage : corpus de questions, moteurs couverts, calendrier des relevés et devis. Aucune citation garantie, une mesure documentée et un plan d'action concret.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un audit GEO
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cadrage gratuit · Grille de re-mesure incluse · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
