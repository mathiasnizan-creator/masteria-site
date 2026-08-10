import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, UserRound, GraduationCap, MapPin, Sparkles,
  MessagesSquare, Target, Laptop, Landmark, CalendarCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « coaching IA » (slug /coaching-ia) — côté FORMATION (individuel).
 * Cible la grappe (Semrush 2026-08-10, ~1 670/mois cumulés, KD moyen 10) :
 * « coach ia » (170, KD 12), « coaching ia » (170, KD 9), « ia et coaching »
 * (90, KD 10) + les variantes villes « coaching individuel ia {paris,
 * marseille, toulouse, annecy...} » (70 chacune) — traitées par UNE page
 * avec sections villes + distanciel, PAS de pages doorway par ville.
 *
 * SERP vérifiée le 2026-08-10 : intention MIXTE. #1 CoachHub AIMY (coach IA
 * logiciel), #2 Mister IA (coaching individuel HUMAIN sur l'IA, notre offre).
 * La page cible le service humain et DÉSAMBIGUÏSE frontalement les deux sens
 * (tableau coach humain vs coach IA outil) : c'est ce qui capte aussi
 * « ia et coaching » (informationnel) et rend la page citable.
 *
 * INTÉGRITÉ & FINANCEMENT (mémoire maison) : structuré en action de formation
 * individuelle (programme, objectifs, évaluation) → certifié Qualiopi,
 * finançable OPCO ; jamais de promesse CPF (non éligible). Tarif : parité
 * intra/individuel portée par le schema Course central (1 980 €/jour),
 * pas de prix en dur dans le corps. Multi-outils, indépendance éditeurs.
 * Villes : présence honnête (base Lyon, déplacements + distanciel), pas de
 * fausse agence locale.
 */

const SLUG = 'coaching-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Coaching IA : accompagnement individuel sur mesure | Masteria"
const META_DESC = "Coaching IA individuel avec un formateur humain : vos cas réels, vos outils, à votre rythme. Dirigeants, managers, professionnels. Qualiopi, finançable OPCO."
const KEYWORDS = "coaching ia, coach ia, ia et coaching, coaching individuel ia, coaching intelligence artificielle, coaching ia dirigeant, formation ia individuelle"

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
  { icon: UserRound, label: 'Un formateur humain, en face à face' },
  { icon: Target, label: 'Vos cas réels, vos outils, votre rythme' },
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: MapPin, label: 'À distance et sur site · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Format', value: "Sessions individuelles avec un formateur humain, sur vos situations de travail réelles" },
  { label: 'Pour qui', value: "Dirigeants, managers, professionnels en poste ou en transition, indépendants" },
  { label: 'Outils', value: "Multi-outils selon votre contexte : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral" },
  { label: 'Où', value: "En visio partout en France, Suisse et Belgique ; sur site selon les villes (Paris, Lyon, Marseille, Toulouse, Annecy...)" },
  { label: 'Financement', value: "Structuré en action de formation individuelle : certifié Qualiopi, finançable par votre OPCO" },
  { label: 'Objectif', value: "L'autonomie : repartir avec des usages installés dans votre quotidien, pas des notes" },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  {
    icon: Target,
    title: 'Dirigeants et cadres dirigeants',
    desc: "Prendre la mesure de ce que l'IA change pour votre organisation, avec un interlocuteur qui s'adapte à votre agenda et parle stratégie autant qu'outils. Le format discret que beaucoup de dirigeants préfèrent à la formation en groupe.",
  },
  {
    icon: MessagesSquare,
    title: 'Managers et responsables d\'équipe',
    desc: "Piloter des équipes qui utilisent l'IA, arbitrer les demandes, montrer l'exemple. Le coaching part de vos situations de management réelles : préparation d'entretiens, synthèses, communication, cadrage des usages de l'équipe.",
  },
  {
    icon: Laptop,
    title: 'Professionnels en poste ou en transition',
    desc: "Monter en compétence sur les outils de votre métier, ou préparer un rebond professionnel avec l'IA dans la boîte à outils. Nous accompagnons aussi des parcours de transition (reconversion, mobilité), avec les financements adaptés à chaque dispositif.",
  },
  {
    icon: Sparkles,
    title: 'Indépendants et professions libérales',
    desc: "Consultants, avocats, experts-comptables, professions du chiffre et du droit : intégrer l'IA à une pratique individuelle exigeante, avec les précautions de confidentialité propres à votre déontologie.",
  },
]

/* ───────── Coach humain vs coach IA (tableau citable — désambiguïsation) ───────── */

const COMPARATIF = [
  {
    critere: "Ce que c'est",
    humain: "Un formateur expert qui vous accompagne en sessions individuelles",
    outil: "Un logiciel conversationnel qui répond 24 h/24",
  },
  {
    critere: 'Ce qui est personnalisé',
    humain: "Tout : vos cas réels, vos outils, votre niveau, votre agenda",
    outil: "Les réponses, dans les limites de ce que l'outil connaît de vous",
  },
  {
    critere: 'Point fort',
    humain: "Le regard extérieur : il voit ce que vous ne voyez pas, corrige les mauvais réflexes",
    outil: "La disponibilité permanente et le coût marginal faible",
  },
  {
    critere: 'Limite',
    humain: "Des créneaux à planifier, un budget de formation",
    outil: "Pas de recul sur vos angles morts ; qualité inégale selon les produits",
  },
  {
    critere: 'Financement',
    humain: "Finançable OPCO quand structuré en action de formation (Qualiopi)",
    outil: "Abonnement logiciel, non finançable en formation",
  },
]

/* ───────── Déroulé (4 étapes) ───────── */

const DEROULE = [
  {
    num: '01',
    title: 'Cadrage individuel',
    desc: "Un échange gratuit pour poser votre contexte : métier, outils disponibles, niveau de départ, objectifs concrets. On en tire un programme personnalisé avec des objectifs évaluables, ce qui structure le coaching en action de formation finançable.",
  },
  {
    num: '02',
    title: 'Sessions sur vos cas réels',
    desc: "Chaque session part de vos situations de travail : vos documents, vos processus, vos écritures. Vous manipulez, le formateur corrige, les réflexes s'installent. Entre les sessions, des mises en pratique choisies ensemble font vivre les acquis.",
  },
  {
    num: '03',
    title: 'Montée en autonomie',
    desc: "Le contenu s'ajuste à votre progression : on approfondit ce qui sert, on écarte ce qui ne sert pas. Objectif assumé : que vous n'ayez plus besoin de nous, avec une boîte à outils personnelle documentée (prompts, méthodes, garde-fous).",
  },
  {
    num: '04',
    title: 'Évaluation et suite',
    desc: "Les acquis s'évaluent sur les objectifs posés au cadrage (exigence Qualiopi, et surtout bon sens). Selon le besoin, la suite peut être un point d'ancrage à distance quelques semaines plus tard, ou rien : le coaching se suffit.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que le coaching IA ?",
    a: "L'expression a deux sens, et cette page les distingue. Le premier, celui de notre offre : un accompagnement individuel par un formateur humain pour maîtriser l'intelligence artificielle dans votre travail, en sessions personnalisées sur vos cas réels. Le second : les « coachs IA », des logiciels conversationnels qui accompagnent un utilisateur en continu (sport, soft skills, préparation commerciale). Les deux ne s'opposent pas : un professionnel bien formé tire ensuite davantage de tous les outils, coachs logiciels compris. Si vous cherchez un accompagnement humain pour progresser sur l'IA, vous êtes au bon endroit.",
  },
  {
    q: "Quelle différence entre un coaching IA et une formation IA classique ?",
    a: "Le nombre de participants et le point de départ. Une formation collective suit un programme conçu pour un groupe, avec des cas représentatifs du métier. Un coaching individuel part de vous : vos documents, vos processus, votre niveau réel, votre agenda. On avance plus vite sur ce qui vous concerne, on écarte ce qui ne vous sert pas, et les questions que l'on n'ose pas poser en groupe se posent naturellement. Le coaching reste une action de formation au sens réglementaire quand il est structuré avec un programme, des objectifs et une évaluation : c'est ainsi que nous le construisons.",
  },
  {
    q: "Le coaching IA est-il finançable ?",
    a: "Oui, sous une condition de structure. Construit comme une action de formation individuelle (programme personnalisé, objectifs pédagogiques, évaluation des acquis), le coaching est finançable par votre OPCO dans le cadre du plan de développement des compétences : Masteria est certifiée Qualiopi et prépare le dossier avec vous. Un coaching libre, sans cadre pédagogique, n'est pas finançable par votre OPCO. Nos accompagnements ne sont pas éligibles au CPF. Pour les parcours de transition professionnelle, d'autres dispositifs s'appliquent selon votre situation : on fait le point au cadrage.",
  },
  {
    q: "Proposez-vous un coaching individuel IA à Paris, Marseille, Toulouse ou Annecy ?",
    a: "Oui, avec une organisation transparente : Masteria est basée à Lyon et le coaching individuel se déroule d'abord en visio, un format qui se prête très bien au travail en tête-à-tête sur écran partagé. Des sessions sur site se planifient à Paris, Lyon, Marseille, Toulouse, Annecy et dans les autres métropoles selon les agendas, ainsi qu'en Suisse et en Belgique. Beaucoup de parcours combinent une première session sur site et la suite à distance. La qualité de l'accompagnement ne dépend pas du lieu : elle dépend du travail sur vos cas réels.",
  },
  {
    q: "Sur quels outils le coaching porte-t-il ?",
    a: "Sur ceux qui comptent pour vous. Si votre entreprise a déployé un outil (Microsoft Copilot, ChatGPT, Claude, Gemini, Mistral), le coaching s'y concentre et en tire le maximum. Si vous êtes libre de choisir, on compare sur vos cas d'usage avant d'approfondir. Les fondamentaux travaillés valent partout : formuler une demande efficace, structurer un raisonnement avec l'outil, vérifier une réponse, protéger les données confidentielles. Nous sommes indépendants des éditeurs, la recommandation n'est jamais commissionnée.",
  },
  {
    q: "Combien coûte un coaching IA individuel ?",
    a: "Le tarif se construit sur le volume de sessions défini au cadrage, sur la base d'un tarif journalier unique : l'accompagnement individuel est aligné sur le tarif de nos formations intra-entreprise, sans supplément lié au format. Le cadrage initial est gratuit et débouche sur un devis sous 24 heures, avec le programme personnalisé et, si vous êtes salarié ou dirigeant d'entreprise, les éléments du dossier OPCO. Le budget final dépend surtout d'une variable : votre objectif d'autonomie, qui détermine le nombre de sessions.",
  },
  {
    q: "Combien de sessions faut-il pour progresser ?",
    a: "La plupart des parcours tiennent entre deux et six sessions espacées de une à trois semaines, selon le point de départ et l'objectif. L'espacement est volontaire : les réflexes s'installent entre les sessions, en pratiquant sur votre travail réel, et chaque session suivante s'ajuste sur ce qui a été tenté. Un besoin très ciblé (préparer un usage précis, prendre en main un outil déployé) peut tenir en une session ; une montée en compétence complète de dirigeant en demande davantage. Le cadrage gratuit dimensionne le parcours honnêtement.",
  },
  {
    q: "Un coach IA logiciel ne suffit-il pas ?",
    a: "Pour s'entraîner en continu, c'est un bon complément ; pour progresser vite et bien, rarement. Un logiciel répond à vos questions, mais il ne voit pas vos angles morts : les mauvais réflexes de formulation, les usages risqués avec des données confidentielles, les opportunités que vous ne voyez pas dans votre propre métier. C'est précisément ce que corrige un regard extérieur expert. Notre position est simple : le coaching humain installe les fondations et le regard critique, les outils prolongent ensuite l'entraînement au quotidien.",
  },
  {
    q: "Le coaching convient-il à un vrai débutant ?",
    a: "C'est même le format idéal pour débuter : personne ne vous regarde, le rythme est le vôtre et tout part de situations que vous connaissez par cœur puisqu'elles viennent de votre poste. Aucun prérequis technique n'est nécessaire au-delà de la bureautique courante. À l'inverse, le coaching sert aussi les profils avancés qui veulent franchir un palier précis : automatiser un processus, structurer une veille, fiabiliser des livrables. Le cadrage situe votre point de départ sans jugement.",
  },
]

/* ───────── JSON-LD ───────── */

/* Le schema Course (avec Offer 1 980 €/j) est généré par SEOHead via courseData. */
const COURSE_DATA = {
  name: 'Coaching IA individuel — Masteria',
  description: "Accompagnement individuel à l'intelligence artificielle avec un formateur humain : sessions personnalisées sur les cas réels du participant, multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral), programme et objectifs définis au cadrage, évaluation des acquis. En visio partout en France, Suisse et Belgique, sur site selon les villes. Certifié Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Formuler des demandes efficaces et structurer un raisonnement avec l'IA",
    'Appliquer les outils IA à ses propres situations de travail',
    'Vérifier les réponses et protéger les données confidentielles',
    'Installer des usages durables et une boîte à outils personnelle',
  ],
  about: 'Coaching individuel en intelligence artificielle',
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique. Maîtrise des outils bureautiques courants.',
  audience: 'Dirigeants, managers, professionnels et indépendants',
  locationName: 'Masteria — visio (France, Suisse, Belgique) ou sur site selon les villes',
}

/* Déroulé en ItemList (séquence citable — GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le déroulé du coaching IA Masteria',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEROULE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : désambiguïsation des deux sens (entité citable). */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/coaching-ia#termes',
  name: 'Coaching IA : les deux sens du terme',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Coaching IA (accompagnement humain)',
      description: "Accompagnement individuel par un formateur expert pour maîtriser l'intelligence artificielle dans son travail : sessions personnalisées sur les cas réels du participant, avec programme, objectifs et évaluation.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Coach IA (logiciel)',
      description: "Agent conversationnel qui accompagne un utilisateur en continu dans un domaine (soft skills, sport, préparation commerciale) : disponible en permanence, personnalisé dans les limites de ce que l'outil connaît de l'utilisateur.",
    },
  ],
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/coaching-ia#article',
  headline: "Coaching IA : un accompagnement individuel humain pour maîtriser l'IA",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/coaching-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Coaching IA', description: "Accompagnement individuel à l'intelligence artificielle" },
    { '@type': 'Thing', name: 'Coaching', sameAs: 'https://fr.wikipedia.org/wiki/Coaching' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
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

export default function CoachingIAPage() {
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
    { name: 'Coaching IA', slug: SLUG },
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
        courseData={COURSE_DATA}
        datePublished="2026-08-10"
        dateModified="2026-08-10"
        speakable={['#geo-summary', '#en-bref']}
        citations={[
          { name: 'Qualiopi, marque de certification qualité des prestataires de formation — travail-emploi.gouv.fr', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
        ]}
        extraJsonLd={[processJsonLd, definitionsJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Coaching IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserRound size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Individuel · Coaching IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Coaching IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>un accompagnement individuel, humain, sur vos cas réels</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le coaching IA de Masteria est un accompagnement individuel par un formateur humain : <strong style={{ color: '#fff', fontWeight: 700 }}>des sessions personnalisées sur vos situations de travail réelles</strong>, avec vos outils, à votre rythme, jusqu'à l'autonomie. Structuré en action de formation, il est certifié Qualiopi et finançable par votre OPCO. En visio partout, sur site selon les villes.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            « Coach IA » désigne aussi des logiciels qui accompagnent en continu : nous comparons honnêtement les deux plus bas, ils ne servent pas la même chose. Ici, il s'agit d'un coach IA humain (nous préférons dire formateur) : un regard extérieur expert en coaching à l'intelligence artificielle, qui part de votre métier, corrige les mauvais réflexes et voit les opportunités que vous ne voyez pas.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre coaching
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#deroule" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le déroulé
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

      {/* ── POUR QUI (éditorial asymétrique) ── */}
      <section id="profils" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pour qui</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                À qui s'adresse le coaching IA individuel ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>À celles et ceux pour qui la formation en groupe n'est pas le bon format : dirigeants qui veulent un cadre discret et un rythme adapté, managers qui pilotent des équipes augmentées, professionnels en poste ou en transition, indépendants aux contraintes de confidentialité fortes. Le point commun : progresser sur ses propres cas, pas sur des exemples génériques.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour une équipe entière, la <Link to="/formation-intelligence-artificielle" style={aStyle}>formation par métier</Link> ou l'<Link to="/acculturation-ia" style={aStyle}>acculturation d'entreprise</Link> sont plus adaptées ; le coaching individuel les complète bien pour les profils clés.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PROFILS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COACH HUMAIN VS COACH IA (ancre sombre — désambiguïsation citable) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>IA et coaching</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Coaching humain sur l'IA ou coach IA logiciel : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le coaching humain apporte le regard extérieur : il voit vos angles morts, corrige les réflexes et adapte tout à votre métier. Le coach IA logiciel apporte la disponibilité permanente pour s'entraîner en continu. Ils se complètent : l'humain installe les fondations et l'esprit critique, l'outil prolonge la pratique au quotidien.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre coaching humain sur l'IA et coach IA logiciel" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '39%' }}>Coaching humain sur l'IA</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '39%' }}>Coach IA (logiciel)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.humain}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.outil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Et si votre question est « quel outil d'IA choisir pour m'entraîner », notre comparateur <Link to="/quel-outil-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>Quel outil IA ?</Link> répond en quelques minutes.
          </p>
        </div>
      </section>

      {/* ── DÉROULÉ (timeline) ── */}
      <section id="deroule" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Le déroulé</Kicker>
          <h2 style={h2Style}>
            Comment se déroule un coaching IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Quatre temps : un cadrage individuel gratuit qui pose le programme et les objectifs, des sessions sur vos cas réels espacées de une à trois semaines, une montée en autonomie avec une boîte à outils personnelle, et une évaluation des acquis sur les objectifs posés. La plupart des parcours tiennent entre deux et six sessions.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {DEROULE.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === DEROULE.length - 1 ? '18px 0 0' : '18px 0'),
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

      {/* ── VILLES & DISTANCIEL + FINANCEMENT ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Où et comment</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            À distance partout, sur site selon les villes
          </h2>

          <p style={answerStyle}>
            <strong>Le coaching individuel IA se déroule d'abord en visio, un format taillé pour le tête-à-tête sur écran partagé, partout en France, en Suisse et en Belgique. Des sessions sur site se planifient à Paris, Lyon, Marseille, Toulouse, Annecy et dans les autres métropoles selon les agendas. Beaucoup de parcours combinent une première rencontre sur site et la suite à distance.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <CalendarCheck size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>L'organisation, en pratique</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Des sessions de une à trois heures selon votre agenda, espacées pour laisser les réflexes s'installer. Basés à Lyon, nous nous déplaçons pour les sessions sur site ; la visio garantit la même qualité de travail, vos documents et vos outils restant au centre de l'écran partagé.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Le financement, sans détour</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Structuré en action de formation individuelle (programme, objectifs, évaluation), le coaching est certifié Qualiopi et finançable par votre OPCO ; nous préparons le dossier avec vous. Pas d'éligibilité CPF. Parcours de transition professionnelle : les dispositifs varient selon votre situation, on fait le point au cadrage. Identifiez votre opérateur avec notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link>.
              </p>
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
                Coaching IA : les questions fréquentes
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
            Le coaching individuel s'articule avec les formats collectifs et les parcours par métier.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'COMEX', desc: "Le format collectif direction : une journée stratégique pour un CODIR ou un COMEX entier." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Entreprise', desc: "Quand c'est toute l'organisation qu'il faut embarquer : conférences, ateliers, parcours, référents." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Catalogue', desc: "Les parcours par métier, en intra ou en individuel : assistanat, commerce, RH, finance, marketing." },
              { label: 'Quel outil IA choisir', href: '/quel-outil-ia', tag: 'Outils', desc: "ChatGPT, Copilot, Claude, Gemini ou Mistral : situez le bon outil avant ou pendant le coaching." },
              { label: 'Bibliothèque de prompts', href: '/bibliotheque-de-prompts', tag: 'Pratique', desc: "Des modèles de prompts par métier pour prolonger l'entraînement entre les sessions." },
              { label: 'Quel OPCO ? (simulateur)', href: '/quel-opco', tag: 'Financement', desc: "Identifiez votre opérateur de compétences en deux minutes pour préparer la prise en charge." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Coaching IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Commençons par le cadrage, il est gratuit
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre métier, vos outils et ce que vous voulez savoir faire. Nous revenons vers vous sous 24 heures avec un programme personnalisé, le nombre de sessions recommandé et le devis, dossier OPCO compris si vous y êtes éligible. Le reste se joue en tête-à-tête.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un coaching IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cadrage gratuit · Certifié Qualiopi · Visio partout, sur site selon les villes
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
