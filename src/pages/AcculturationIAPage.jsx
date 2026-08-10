import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Lightbulb, Presentation, Users, GraduationCap, MapPin, Check,
  Sparkles, MessagesSquare, Database, ShieldCheck, Landmark, BarChart3,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « acculturation IA » (slug /acculturation-ia) — côté FORMATION
 * (OPCO/Qualiopi visibles, contrairement au cluster conseil).
 * Cible la grappe (Semrush 2026-08-10) : « acculturation ia » (320/mois, KD 7,
 * CPC 2,11), « acculturation ia générative management » (140), « conférence
 * acculturation à l'ia » (70, KD 5), « acculturation data et ia » (50, KD 12).
 * SERP vérifiée le 2026-08-10 : organismes de formation (Aelion, datacraft),
 * cabinets de management, economie.gouv en tête ; l'AI Overview structure la
 * démarche en sensibiliser → former par les usages → expérimenter → ancrer.
 *
 * RÉPARTITION D'INTENTIONS :
 *  - /acculturation-ia = CETTE page : la démarche collective de montée en
 *    compétence (conférences, ateliers, parcours métier, référents) ;
 *  - /accompagnement-ia = la prestation continue projet + adoption (page sœur
 *    créée le même jour, cluster conseil) ;
 *  - /formation-intelligence-artificielle = le catalogue des formations ;
 *  - /formation-ia-dirigeants = le produit spécifique COMEX (l'angle
 *    « management » d'ici renvoie vers lui, pas de doublon).
 *
 * ANGLE DIFFÉRENCIANT (vérifié, article audit IA + EUR-Lex) : l'article 4 du
 * règlement européen (littératie IA) est applicable depuis le 2 février 2025,
 * assoupli en obligation de MOYENS par le paquet du 8 juillet 2026. Donc :
 * soutenir la montée en compétence, sans garantir un niveau individuel. Ne
 * jamais sur-vendre (« formation obligatoire sous peine d'amende » = non).
 *
 * INTÉGRITÉ : multi-outils, indépendance éditeurs, aucun cas client nommé,
 * pas de chiffre d'adoption inventé. Tarif formation : parité 1 980 €/jour
 * intra (mémoire tarifs) portée par le schema Course central, PAS répétée en
 * dur ici ; la page renvoie au devis.
 */

const SLUG = 'acculturation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Acculturation IA : embarquer toute l'entreprise | Masteria"
const META_DESC = "Acculturation IA : conférences, ateliers et parcours par métier pour faire comprendre et utiliser l'IA à toutes vos équipes. Certifié Qualiopi, finançable OPCO."
const KEYWORDS = "acculturation ia, acculturation intelligence artificielle, acculturation ia générative, acculturation ia générative management, conférence acculturation ia, acculturation data et ia, sensibilisation ia"

/* ───────── Styles partagés ───────── */

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
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: Sparkles, label: 'Multi-outils : ChatGPT, Copilot, Claude, Gemini, Mistral' },
  { icon: Users, label: 'Du COMEX aux équipes terrain' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Objectif', value: "Faire comprendre et utiliser l'IA par toutes les équipes : un langage commun, des réflexes concrets, un regard critique" },
  { label: 'Formats', value: "Conférence d'acculturation, ateliers découverte, parcours par métier, programme management, référents internes" },
  { label: 'Outils', value: "Multi-outils et indépendant des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral" },
  { label: 'Cadre', value: "La littératie IA est une obligation de moyens du règlement européen depuis février 2025 : l'acculturation y répond" },
  { label: 'Financement', value: "Actions de formation certifiées Qualiopi, finançables par votre OPCO ; devis sous 24 h" },
  { label: 'Et après', value: "Des référents formés qui entretiennent la dynamique, et une mesure des usages installés" },
]

/* ───────── Les formats (5 cartes) ───────── */

const FORMATS = [
  {
    icon: Presentation,
    title: "La conférence d'acculturation",
    desc: "Une à deux heures pour embarquer un large public d'un coup : ce que l'IA générative fait vraiment, ce qu'elle ne fait pas, démonstrations sur vos cas, questions ouvertes. Le format qui lance une démarche, en séminaire, en plénière ou en COMEX.",
  },
  {
    icon: Lightbulb,
    title: 'Les ateliers découverte',
    desc: "En petits groupes, les mains sur les outils : chacun manipule, teste sur ses propres situations de travail et repart avec deux ou trois usages installés. C'est là que la curiosité devient réflexe.",
  },
  {
    icon: Users,
    title: 'Les parcours par métier',
    desc: "Assistanat, commerce, marketing, RH, finance, juridique, technique : chaque métier a ses cas d'usage et ses pièges. Les parcours reprennent les vraies situations de chaque équipe, jamais des démonstrations génériques.",
  },
  {
    icon: BarChart3,
    title: 'Le programme management',
    desc: "Les managers et le COMEX ont un rôle à part : arbitrer, montrer l'exemple, fixer le cadre. Un programme dédié leur donne la lecture stratégique (capacités réelles, limites, risques, gouvernance) et les réflexes pour piloter des équipes augmentées.",
  },
  {
    icon: Database,
    title: 'Le volet data et IA',
    desc: "Comprendre ce que l'IA fait des données : ce qu'on peut lui confier, ce qui relève du RGPD, comment lire une réponse avec esprit critique. Indispensable pour les équipes qui manipulent des données clients ou sensibles.",
  },
]

/* ───────── La démarche (4 étapes, alignée sur les pratiques du terrain) ───────── */

const DEMARCHE = [
  {
    num: '01',
    title: 'Sensibiliser',
    desc: "Une conférence ou des sessions courtes pour tout le monde : démystifier, poser un langage commun, montrer des usages concrets sur vos métiers. On répond aux vraies questions, y compris celles qui fâchent (remplacement, surveillance, fiabilité).",
  },
  {
    num: '02',
    title: 'Former par les usages',
    desc: "Des parcours par métier, sur les cas réels des équipes : les documents qu'elles traitent, les processus qu'elles vivent. L'apprentissage tient quand il s'applique le jour même sur le poste de travail.",
  },
  {
    num: '03',
    title: 'Expérimenter en cadre sûr',
    desc: "Des ateliers de mise en pratique sur des cas choisis ensemble, avec un cadre d'usage clair : ce qu'on peut confier aux outils, ce qui reste interdit, comment vérifier une réponse. La charte IA se construit souvent à cette étape.",
  },
  {
    num: '04',
    title: 'Ancrer avec des référents',
    desc: "Des référents internes formés entretiennent la dynamique après notre passage : ils répondent aux questions du quotidien, font remonter les nouveaux cas d'usage et gardent le lien avec nous. C'est ce qui distingue une acculturation d'un événement ponctuel.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que l'acculturation à l'IA ?",
    a: "C'est la démarche par laquelle une organisation fait comprendre et adopter l'intelligence artificielle par l'ensemble de ses équipes : dirigeants, managers et opérationnels. Elle combine des temps de sensibilisation (conférences, ateliers), des formations par métier sur les cas réels, de l'expérimentation encadrée et des relais internes qui ancrent les pratiques. L'objectif est triple : un langage commun dans l'entreprise, des réflexes d'usage concrets, et un regard critique sur ce que les outils produisent. L'acculturation se distingue d'une formation isolée par son échelle : elle s'adresse à toute l'organisation, pas à un service.",
  },
  {
    q: "Quelle différence entre acculturation, sensibilisation et formation ?",
    a: "La sensibilisation ouvre le sujet : une conférence ou une session courte qui démystifie et donne envie. La formation installe des compétences : un parcours structuré, avec des exercices sur les cas du métier et une évaluation des acquis. L'acculturation est la démarche d'ensemble qui articule les deux dans le temps, ajoute l'expérimentation encadrée et les référents internes, et vise toute l'organisation. Une entreprise qui ne fait que sensibiliser crée de la curiosité sans usage ; une qui ne fait que former un service crée des îlots. L'acculturation évite les deux écueils.",
  },
  {
    q: "L'acculturation à l'IA est-elle obligatoire ?",
    a: "Le règlement européen sur l'IA impose, depuis le 2 février 2025, une obligation de littératie IA (article 4) : les organisations qui utilisent des systèmes d'IA doivent soutenir la montée en compétence des personnes qui les manipulent. Le paquet législatif du 8 juillet 2026 a précisé qu'il s'agit d'une obligation de moyens : démontrer des actions de sensibilisation et de formation, sans garantir un niveau individuel. Une démarche d'acculturation documentée y répond directement. Nous vous aidons à la calibrer sans sur-jouer la peur : c'est une obligation réelle, pas une menace d'amende imminente.",
  },
  {
    q: "Par quel format commencer ?",
    a: "Dans la plupart des cas, par une conférence d'acculturation : elle embarque un large public en une session, installe le langage commun et fait émerger les questions réelles de vos équipes. On enchaîne ensuite sur les parcours par métier pour les équipes prioritaires, puis sur les ateliers d'expérimentation. Si votre COMEX n'est pas encore aligné, le programme management passe en premier : une démarche d'acculturation portée par une direction convaincue va deux fois plus vite. Le cadrage initial, gratuit, sert à choisir cet ordre.",
  },
  {
    q: "Sur quels outils d'IA formez-vous ?",
    a: "Sur les outils du marché que vos équipes utiliseront réellement : ChatGPT, Microsoft Copilot, Claude, Gemini et Mistral. Nous sommes indépendants des éditeurs : quand votre entreprise a déjà déployé un outil, l'acculturation se fait dessus ; quand le choix reste ouvert, nous comparons sur vos cas d'usage. Les parcours mêlent les fondamentaux valables partout (formuler une demande, vérifier une réponse, protéger les données) et la pratique de l'outil retenu.",
  },
  {
    q: "Combien coûte une démarche d'acculturation IA ?",
    a: "Cela dépend du dispositif : une conférence seule, un programme management, ou une démarche complète avec parcours par métier et référents ne représentent pas le même volume de jours. Le devis se construit après un échange de cadrage gratuit, sous 24 heures. Point important pour votre budget : ce sont des actions de formation, certifiées Qualiopi, donc finançables par votre OPCO. Nous préparons les éléments du dossier de prise en charge avec vous.",
  },
  {
    q: "Combien de temps dure une acculturation ?",
    a: "La démarche se déploie sur plusieurs semaines à plusieurs mois selon la taille de l'organisation : une conférence de lancement, puis des vagues de parcours par métier, des ateliers d'expérimentation et la formation des référents. Ce rythme étalé est volontaire : les usages s'installent entre les sessions, et chaque vague s'ajuste sur les retours de la précédente. Une acculturation compressée en une semaine produit de l'enthousiasme qui retombe ; étalée et relayée par des référents, elle produit des pratiques.",
  },
  {
    q: "Comment mesurez-vous que l'acculturation a fonctionné ?",
    a: "Sur les usages, pas sur la satisfaction en fin de session. Les indicateurs qui comptent : la part des équipes qui utilisent les outils chaque semaine, les cas d'usage actifs par métier, les questions qui remontent aux référents, et les gains de temps déclarés sur les tâches ciblées. Nous posons ces indicateurs au démarrage et les relevons après chaque vague. Les questionnaires de satisfaction existent aussi (c'est une exigence qualité), mais ils mesurent l'accueil, pas l'adoption.",
  },
  {
    q: "L'acculturation concerne-t-elle aussi les petites entreprises ?",
    a: "Oui, à leur échelle. Une PME n'a pas besoin d'un programme de grand groupe : une conférence ou un atelier de lancement, un parcours pour les équipes les plus concernées et un référent interne suffisent souvent à installer une culture IA. C'est aussi la voie la plus économique, le volet formation étant finançable par votre OPCO. Pour une organisation de quelques personnes, un atelier unique sur vos cas réels peut suffire à débloquer les usages.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Acculturation IA — Masteria',
  alternateName: "Programme d'acculturation à l'intelligence artificielle",
  description: "Démarche d'acculturation à l'IA pour toute l'entreprise : conférence d'acculturation, ateliers découverte, parcours de formation par métier, programme management et référents internes. Multi-outils (ChatGPT, Copilot, Claude, Gemini, Mistral), certifié Qualiopi, finançable OPCO. Répond à l'obligation de littératie IA de l'article 4 du règlement européen.",
  url: 'https://www.master-ia.fr/acculturation-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/acculturation-ia#webpage' },
  serviceType: "Acculturation et littératie IA",
  category: 'Formation professionnelle en intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: "Dirigeants, managers et équipes opérationnelles",
    audienceType: 'B2B',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Formats d'acculturation IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Conférence d'acculturation à l'IA", description: "Une à deux heures pour un large public : capacités réelles, limites, démonstrations sur vos cas. En séminaire, plénière ou COMEX." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ateliers découverte et parcours par métier', description: "Pratique en petits groupes sur les cas réels de chaque équipe, du premier prompt aux usages installés." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Programme management et COMEX', description: "Lecture stratégique des capacités et des risques, cadre d'usage, pilotage d'équipes augmentées." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formation de référents internes', description: "Un réseau de relais formés qui entretient la dynamique et fait remonter les cas d'usage." } },
    ],
  },
}

/* La démarche en ItemList (séquence citable — GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "La démarche d'acculturation IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEMARCHE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : les termes de la montée en compétence IA. */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/acculturation-ia#termes',
  name: "Acculturation IA : les termes de la démarche",
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Acculturation IA',
      description: "Démarche par laquelle une organisation fait comprendre et adopter l'intelligence artificielle par l'ensemble de ses équipes : sensibilisation, formation par métier, expérimentation encadrée et relais internes, pour créer un langage commun et des usages durables.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Littératie IA',
      description: "Capacité à comprendre, utiliser et évaluer de façon critique les systèmes d'IA. L'article 4 du règlement européen sur l'IA en fait une obligation de moyens pour les organisations depuis le 2 février 2025.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Sensibilisation IA',
      description: "Premier temps d'une acculturation : conférences et sessions courtes qui démystifient l'IA, montrent des usages concrets et installent un langage commun, sans viser encore l'autonomie des participants.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Référent IA',
      description: "Collaborateur formé pour être le relais interne de la démarche : il répond aux questions du quotidien, fait remonter les cas d'usage et entretient la dynamique après les formations.",
    },
  ],
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/acculturation-ia#article',
  headline: "Acculturation IA : embarquer toute l'entreprise, du COMEX au terrain",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/acculturation-ia#webpage' },
  /* Entités liées à Wikipédia (sameAs) : désambiguïsation pour les moteurs
     génératifs et le Knowledge Graph. URLs vérifiées le 2026-08-10. */
  about: [
    { '@type': 'Thing', name: 'Acculturation', sameAs: 'https://fr.wikipedia.org/wiki/Acculturation' },
    { '@type': 'Thing', name: 'Littératie IA', description: "Capacité à comprendre, utiliser et évaluer de façon critique les systèmes d'IA (article 4 du règlement européen)" },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
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

export default function AcculturationIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation intelligence artificielle', slug: 'formation-intelligence-artificielle' },
    { name: 'Acculturation IA', slug: SLUG },
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
        citations={[
          { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle (article 4, littératie)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
          { name: "Acculturer à l'IA : partir du réel, expérimenter, partager — Mission innovation, economie.gouv.fr", url: 'https://www.economie.gouv.fr/mission-innovation/acculturer-lia-partir-du-reel-experimenter-partager' },
        ]}
        extraJsonLd={[serviceJsonLd, processJsonLd, definitionsJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Acculturation IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lightbulb size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Acculturation IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Acculturation IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>embarquer toute l'entreprise, du COMEX au terrain</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'acculturation IA fait comprendre et utiliser l'intelligence artificielle par toutes vos équipes : <strong style={{ color: '#fff', fontWeight: 700 }}>conférences, ateliers, parcours par métier, programme management et référents internes</strong>. Une démarche certifiée Qualiopi et finançable par votre OPCO, qui répond aussi à l'obligation de littératie IA du règlement européen.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une entreprise ne devient pas « augmentée » parce qu'elle a acheté des licences : elle le devient quand chaque équipe sait quoi faire des outils, avec quel regard critique et dans quel cadre. C'est ce que l'acculturation installe, à un rythme qui laisse les usages prendre racine.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre démarche
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#formats" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les formats
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

          {/* En bref — synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 110px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LES FORMATS (éditorial asymétrique) ── */}
      <section id="formats" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les formats</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quels formats pour acculturer une entreprise à l'IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Cinq formats se combinent selon votre organisation : la conférence d'acculturation pour embarquer largement, les ateliers découverte pour mettre les mains sur les outils, les parcours par métier pour installer les usages, le programme management pour aligner la direction, et le volet data pour les équipes qui manipulent des données sensibles.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Tous sont des actions de formation certifiées Qualiopi, finançables par votre OPCO. Pour un programme dirigeants complet, voyez notre <Link to="/formation-ia-dirigeants" style={aStyle}>formation IA pour dirigeants</Link> ; pour le catalogue par métier, la <Link to="/formation-intelligence-artificielle" style={aStyle}>formation intelligence artificielle</Link>.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {FORMATS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
                {/* Carte sombre : l'angle réglementaire, sans sur-vente */}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShieldCheck size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Le cadre : la littératie IA</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Depuis février 2025, l'article 4 du règlement européen demande aux organisations de soutenir la montée en compétence IA de leurs équipes : une obligation de moyens, précisée en juillet 2026. Une acculturation documentée y répond, sans qu'il faille agiter des amendes imaginaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA DÉMARCHE (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>La démarche</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment se déroule une acculturation IA réussie ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Quatre étapes : sensibiliser largement pour créer le langage commun, former par les usages métier par métier, expérimenter dans un cadre sûr, puis ancrer avec des référents internes. Le rythme étalé est volontaire : les usages s'installent entre les sessions, et chaque vague s'ajuste sur la précédente.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
            {DEMARCHE.map(step => (
              <div key={step.num} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 15, color: '#60A5FA', fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Quand l'acculturation s'inscrit dans une transformation plus large (outils à déployer, processus à automatiser), elle devient le volet formation de notre <Link to="/accompagnement-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>accompagnement IA</Link>, mené dans la durée.
          </p>
        </div>
      </section>

      {/* ── POUR QUI / ANGLE MANAGEMENT ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Management et COMEX</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Pourquoi l'acculturation des managers passe en premier ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Parce que les équipes adoptent ce que leur management pratique. L'acculturation à l'IA générative des managers leur apprend à arbitrer les demandes, fixer le cadre d'usage, repérer les cas à fort potentiel et montrer l'exemple. Un COMEX aligné donne à la démarche son sponsor et son budget. C'est pourquoi le programme management ouvre souvent la démarche, avant le déploiement large.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: BarChart3, title: 'Ce que le programme management couvre', desc: "Capacités réelles et limites des modèles, lecture des risques (données, conformité, dépendance), cadre d'usage à fixer, pilotage d'équipes augmentées et arbitrage des cas d'usage. En session dédiée, au format court compatible avec les agendas de direction." },
              { icon: MessagesSquare, title: 'Le format conférence pour lancer', desc: "Une conférence d'acculturation en plénière ou en séminaire embarque tout le monde d'un coup : capacités, limites, démonstrations sur vos cas et questions ouvertes. C'est le format le plus demandé pour ouvrir une démarche, et le plus efficace pour faire tomber les idées reçues." },
              { icon: GraduationCap, title: 'Puis les parcours qui installent', desc: "Après la conférence, les parcours par métier transforment l'élan en pratiques : chaque équipe travaille sur ses cas réels, avec un cadre d'usage clair et des référents pour tenir la dynamique. La séquence complète fait la différence entre un bel événement et une culture installée." },
            ].map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINANCEMENT OPCO ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Une démarche finançable par votre OPCO
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                L'acculturation est faite d'actions de formation : conférences pédagogiques, ateliers, parcours par métier. Masteria est certifiée Qualiopi, ce qui rend ces actions finançables par votre OPCO dans le cadre du plan de développement des compétences. Nous préparons avec vous les éléments du dossier (programme, objectifs pédagogiques, modalités d'évaluation) et le devis arrive sous 24 heures. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> vous répond en deux minutes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Actions de formation certifiées Qualiopi',
                  'Prise en charge OPCO selon votre branche',
                  'Dossier de financement préparé ensemble',
                  'Devis sous 24 h après cadrage gratuit',
                ].map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
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
                Acculturation IA : les questions fréquentes
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
            L'acculturation s'articule avec la formation par métier, l'accompagnement dans la durée et le cadre d'usage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Dans la durée', desc: "Quand l'acculturation s'inscrit dans une transformation complète : cadrage, outils, changement, mesure." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Catalogue', desc: "Les parcours par métier qui prolongent l'acculturation : assistanat, commerce, RH, finance, marketing." },
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'COMEX', desc: "Le programme dédié aux directions : lecture stratégique, cadre, pilotage de la transformation." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Pour les profils clés : un accompagnement en tête-à-tête sur leurs cas réels, à leur rythme." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le cadre d'usage qui sécurise l'expérimentation : ce qu'on peut confier aux outils, et comment." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Conformité', desc: "Pour aller au fond du règlement européen : obligations réelles, calendrier, mise en conformité." },
              { label: 'Quel outil IA choisir', href: '/quel-outil-ia', tag: 'Outils', desc: "ChatGPT, Copilot, Claude, Gemini ou Mistral : le comparatif pour ancrer l'acculturation sur le bon outil." },
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Acculturation IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Créons la culture IA de votre entreprise
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre organisation : taille, métiers, où en sont les équipes. Nous revenons vers vous sous 24 heures avec une proposition de démarche (formats, séquence, calendrier) et le devis, prise en charge OPCO comprise. La conférence de lancement peut se tenir rapidement, le reste se construit à votre rythme.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un programme d'acculturation
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
