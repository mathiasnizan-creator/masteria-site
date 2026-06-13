import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Workflow, LayoutDashboard, Database, Plug, MonitorSmartphone,
  Target, FlaskConical, Code2, GraduationCap, Server,
  Cpu, Boxes, Check, MapPin, FileText, Lock, KeyRound,
  Package, Users,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

/*
 * Page pilier « agence de développement IA » (slug /agence-developpement-ia).
 * Cluster : « agence développement ia » (70), « agence de développement intelligence
 * artificielle » (50), « dev ia » (90), « ia dev » (140), « web dev ia » (260),
 * « ia dev web » (90), « agence dev ia » (40), « devis agence ia » (10).
 * Positionnement ORIENTÉ CAPACITÉ : offre de conseil + développement sur mesure
 * high-ticket (agents, automatisations, applications métier, intégrations LLM/RAG).
 * Aucun cas client inventé, aucun chiffre de résultat fabriqué : on décrit le service
 * par compétences, méthode et stack. Faits réels Masteria uniquement.
 * Maillage : /agence-automatisation-ia, /agents-ia-entreprise, /outils-ia-sur-mesure,
 * /conseil-intelligence-artificielle, /agence-ia, /formation-intelligence-artificielle, /contact.
 * Design premium : icônes lucide (zéro emoji), kickers, réponses directes citables,
 * accent bleu Masteria (#2563EB). PAS d'OPCO / Qualiopi mis en avant (high-ticket).
 */

const SLUG = 'agence-developpement-ia'
const c = '#2563EB'
const cDark = '#1d4ed8'
const cLight = '#DBEAFE'

const META_TITLE = "Agence de développement IA sur mesure | Masteria"
const META_DESC = "Agence de développement IA : agents, automatisations et applications métier sur mesure. De l'idée au déploiement, avec transfert de compétence. France, Suisse, Belgique."
const H1 = "Agence de développement IA : agents, automatisations et applications sur mesure"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4 }
const tdStyle = { padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }

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
  { icon: Code2,    label: 'Développement sur mesure' },
  { icon: Bot,      label: 'Agents & automatisations' },
  { icon: Cpu,      label: 'Multi-LLM (Claude, GPT, Mistral)' },
  { icon: MapPin,   label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── Ce que nous développons (6 cartes) ───────── */

const LIVRABLES = [
  {
    icon: Bot,
    title: 'Agents IA sur mesure',
    desc: "Des agents qui raisonnent, appellent vos outils et exécutent des tâches de bout en bout : qualification, recherche, rédaction, traitement de dossiers. Conçus avec des garde-fous, une validation humaine sur les décisions sensibles et une traçabilité complète.",
  },
  {
    icon: Workflow,
    title: 'Automatisations de processus',
    desc: "Orchestration de vos flux métier répétitifs, du déclencheur au résultat. Nous combinons no-code lorsque c'est suffisant et code lorsque la robustesse l'exige, puis nous intégrons le flux à vos applications existantes.",
  },
  {
    icon: LayoutDashboard,
    title: 'Applications & copilotes métier',
    desc: "Des outils internes et des copilotes pensés pour un métier précis : interface dédiée, logique propre à votre activité, connexion à vos données. L'objectif reste l'usage quotidien, pas la démonstration.",
  },
  {
    icon: Database,
    title: 'Intégrations LLM / RAG sur vos données',
    desc: "Vos documents, vos bases et votre savoir-faire deviennent interrogeables par un modèle, avec des réponses sourcées. Le RAG (retrieval-augmented generation) ancre l'IA dans vos contenus réels et limite les approximations.",
  },
  {
    icon: Plug,
    title: 'Connecteurs & API',
    desc: "Liaison de vos systèmes : MCP, CRM, ERP, outils internes. Les informations circulent sans ressaisie et vos applications dialoguent avec les modèles via des API documentées et maintenables.",
  },
  {
    icon: MonitorSmartphone,
    title: 'Interfaces web IA',
    desc: "Le volet web dev ia : interfaces, portails et assistants accessibles depuis le navigateur, reliés à vos modèles et à vos données. Le dev ia côté interface compte autant que la logique : une solution n'est utile que si elle est adoptée.",
  },
]

/* ───────── Déroulé d'un projet (timeline 5 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cadrage & ROI',
    desc: "Nous délimitons le périmètre, identifions les cas à plus forte valeur et évaluons la faisabilité technique. Ce premier travail fixe les objectifs, les contraintes de données et le critère de réussite, avant la moindre ligne de code.",
  },
  {
    num: '02',
    title: 'Prototype / POC',
    desc: "Nous construisons un prototype fonctionnel sur le cas prioritaire, en conditions réelles. Vous jugez la valeur sur un vrai flux et nous validons les choix techniques avant d'engager le développement complet.",
  },
  {
    num: '03',
    title: 'Développement',
    desc: "Nous développons la solution retenue : agents, automatisations, application ou intégration. Itérations courtes, points réguliers, code structuré et documenté pour rester maintenable dans la durée.",
  },
  {
    num: '04',
    title: 'Déploiement & intégration',
    desc: "Nous intégrons la solution à vos outils et à votre environnement, posons les garde-fous, la supervision et la conformité, puis accompagnons la mise en production sans perturber vos opérations.",
  },
  {
    num: '05',
    title: 'Transfert aux équipes',
    desc: "Nous formons vos équipes à utiliser, surveiller et faire évoluer la solution. À la fin de la mission, vous êtes propriétaire du code et capable de le faire vivre, avec ou sans nous.",
  },
]

/* ───────── Modèles d'engagement (forfait / régie) ───────── */

const ENGAGEMENTS = [
  {
    icon: Package,
    tag: 'Forfait au projet',
    title: 'Développement au forfait, du cadrage au déploiement',
    desc: "Le mode par défaut : nous prenons en charge la conception et le développement de la solution sur un périmètre défini, avec des livrables et un prix fixés à l'avance. Vous suivez l'avancement par points réguliers et vous récupérez le code, documenté et transféré à vos équipes.",
    points: ['Périmètre et budget fixés au cadrage', 'Livrables et points de décision à chaque étape', 'Transfert de compétence en fin de mission'],
  },
  {
    icon: Users,
    tag: 'Régie · équipe dédiée',
    title: 'Un ou plusieurs développeurs IA détachés dans vos équipes',
    desc: "Au-delà du forfait, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, pour les environnements sensibles ou une montée en charge. Le développeur travaille au sein de votre organisation, sous votre pilotage, tout en gardant l'appui méthodologique du cabinet.",
    points: ['Renfort sur site ou à distance', 'Adapté aux environnements sensibles', 'Montée en charge sur un programme IA en cours'],
  },
]

/* ───────── Notre approche technique (piliers stack) ───────── */

const STACK = [
  { icon: Cpu, title: 'Multi-LLM, le bon modèle au bon endroit', desc: "Claude, GPT, Mistral et les autres : nous choisissons le modèle selon le cas, le coût et les contraintes, sans dépendance à un fournisseur unique." },
  { icon: Database, title: 'RAG et données métier', desc: "Ancrage des réponses dans vos documents et vos bases, avec sources citables. L'IA répond à partir de votre réalité, pas d'une connaissance générale." },
  { icon: Boxes, title: 'Agents & MCP', desc: "Agents outillés et connecteurs MCP pour relier les modèles à vos systèmes, exécuter des actions et orchestrer des tâches complexes de manière contrôlée." },
  { icon: Code2, title: 'No-code quand pertinent, code quand nécessaire', desc: "Le no-code accélère ce qui peut l'être ; le code prend le relais dès que la robustesse, la performance ou la spécificité du besoin l'exigent." },
  { icon: Lock, title: 'Sécurité & confidentialité', desc: "Maîtrise des accès, cloisonnement des données sensibles, journalisation. La confidentialité de vos informations est un critère de conception, pas une option." },
  { icon: Server, title: 'Hébergement UE possible', desc: "Selon vos exigences de conformité, la solution peut être hébergée dans l'Union européenne, avec un traitement des données maîtrisé." },
]

/* ───────── Tableau : 3 voies de réalisation ───────── */

const TABLE_VOIES = [
  {
    critere: 'Délai de mise en place',
    nocode: 'Rapide sur un cas simple, vite limité',
    masteria: 'Prototype en quelques semaines, montée en charge maîtrisée',
    esn: 'Long : cadrage lourd, cycles étendus',
  },
  {
    critere: 'Robustesse en production',
    nocode: 'Fragile dès que le besoin se complexifie',
    masteria: 'Conçue pour la production, garde-fous et supervision',
    esn: 'Solide mais souvent surdimensionnée pour l\'IA',
  },
  {
    critere: 'Maintenance',
    nocode: 'À votre charge, sans cadre technique',
    masteria: 'Documentée, transférable, vous reprenez la main',
    esn: 'Récurrente et facturée, dépendance durable',
  },
  {
    critere: 'Pour qui',
    nocode: "Besoin ponctuel, équipe outillée et disponible",
    masteria: "Solution métier durable développée par des spécialistes IA",
    esn: "Très grands projets SI, IA non spécialiste",
  },
]

/* ───────── Pourquoi une agence spécialisée IA (vs ESN / agence web) ───────── */

const WHY = [
  { icon: Target, title: "Spécialistes de l'IA, pas généralistes", desc: "Masteria travaille sur l'intelligence artificielle depuis 2022. Les modèles, leurs limites, le RAG, les agents et leurs garde-fous sont notre quotidien, là où une ESN ou une agence web généraliste découvre le sujet en cours de route." },
  { icon: FlaskConical, title: 'Du prototype avant l\'engagement', desc: "Nous prouvons la valeur sur un cas réel avant de développer en grand. Vous décidez sur des faits, pas sur une promesse, et vous évitez les projets qui s'enlisent." },
  { icon: KeyRound, title: 'Propriété et autonomie', desc: "Le code et les données vous appartiennent. Nous documentons et transférons pour que vos équipes fassent vivre la solution, plutôt que d'installer une dépendance permanente." },
  { icon: Cpu, title: 'Indépendance technologique', desc: "Multi-LLM par principe : nous recommandons le modèle adapté à votre cas et à votre budget, sans contrat d'exclusivité avec un éditeur qui orienterait nos choix." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Combien coûte le développement d'une solution IA sur mesure ?",
    a: "Le développement sur mesure se chiffre au forfait, projet par projet, après un cadrage. Le budget dépend du périmètre : un prototype sur un cas unique, un agent outillé connecté à vos systèmes ou une application métier complète ne représentent pas le même engagement. Nous établissons un devis détaillé une fois le périmètre et le critère de réussite définis, sans forfait vendu à l'aveugle.",
  },
  {
    q: "Combien de temps pour livrer un premier outil ?",
    a: "Un prototype ou une première version utile se construit généralement en quelques semaines, selon la complexité et la disponibilité de vos données. Nous privilégions un premier livrable rapide sur le cas prioritaire, en conditions réelles, puis nous itérons. Le déploiement complet et l'intégration s'étalent ensuite selon le périmètre validé.",
  },
  {
    q: "Qui est propriétaire du code et des données ?",
    a: "Vous. Le code développé pour votre projet vous appartient, tout comme vos données, qui restent les vôtres à chaque étape. Nous documentons la solution et transférons la compétence à vos équipes pour qu'elles puissent l'exploiter et la faire évoluer en autonomie, sans dépendance imposée.",
  },
  {
    q: "Travaillez-vous avec notre stack existante ?",
    a: "Oui. Nous partons toujours de votre existant : CRM, ERP, outils internes, environnement cloud, exigences de sécurité. Les connecteurs et API (dont MCP) relient la solution à vos systèmes sans refonte de votre système d'information. L'objectif est d'ajouter de la valeur à ce que vous avez déjà, pas de tout remplacer.",
  },
  {
    q: "Agence IA ou développeur freelance ?",
    a: "Un freelance convient à un besoin ponctuel et bien cadré. Une agence spécialisée apporte la méthode, la continuité et la combinaison de compétences qu'un projet IA exige : cadrage, choix des modèles, sécurité, intégration et transfert aux équipes. Masteria couvre le cycle complet, de l'idée au déploiement, et reste joignable pour faire évoluer la solution.",
  },
  {
    q: "Intervenez-vous à distance ou hors de Lyon ?",
    a: "Les deux. Masteria est basée à Lyon, au 17 Rue Richan, et intervient dans toute la France ainsi qu'en Suisse et en Belgique. Le développement et le suivi se font très bien à distance, en visio et par points réguliers ; les phases de cadrage ou de transfert peuvent se tenir sur site selon vos préférences.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Développement IA sur mesure — Masteria',
  description: "Conception et développement de solutions IA sur mesure pour les entreprises : agents IA, automatisations de processus, applications et copilotes métier, intégrations LLM/RAG, connecteurs et API. De l'idée au déploiement, avec transfert de compétence aux équipes.",
  url: 'https://www.master-ia.fr/agence-developpement-ia',
  serviceType: 'Développement de solutions IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations de développement IA sur mesure',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agents IA sur mesure', description: "Agents outillés exécutant des tâches de bout en bout, avec garde-fous et validation humaine." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisations de processus', description: "Orchestration de flux métier, no-code et code, intégrée à vos applications." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Applications & copilotes métier', description: "Outils internes et copilotes dédiés à un métier, connectés à vos données." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intégrations LLM / RAG', description: "Réponses sourcées ancrées dans vos documents et vos bases." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Connecteurs & API (MCP, CRM, ERP)', description: "Liaison de vos systèmes pour faire circuler les informations sans ressaisie." } },
    ],
  },
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
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function AgenceDeveloppementIAPage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence de développement IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        extraJsonLd={serviceJsonLd}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#F9FAFB', color: '#0A0A0A', padding: 'clamp(48px, 7vw, 72px) 24px clamp(56px, 8vw, 80px)', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Agence de développement IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Code2 size={16} strokeWidth={2.2} aria-hidden="true" />
              Conseil & développement sur mesure
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              De l'idée au déploiement
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em', maxWidth: 920 }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 760, fontWeight: 500 }}>
            <strong>Masteria conçoit et développe des solutions IA sur mesure pour les entreprises : agents, automatisations, applications métier et intégrations. De l'idée au déploiement, avec un transfert de compétence aux équipes pour que vous restiez propriétaire et autonome de la solution.</strong>
          </p>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, marginBottom: 40, maxWidth: 760 }}>
            Au-delà de la formation, qui reste notre porte d'entrée, Masteria développe désormais des solutions IA sur mesure pour des besoins métier précis. Cabinet spécialisé sur l'intelligence artificielle depuis 2022, fondé à Lyon par Mathias Nizan, nous combinons expertise multi-LLM et méthode d'ingénierie : cadrage, prototype, développement, intégration, puis transfert à vos équipes.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Discuter de votre projet
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrables" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Ce que nous développons
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Icon size={15} strokeWidth={2.2} style={{ color: c }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUE NOUS DÉVELOPPONS ── */}
      <section id="livrables" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ce que nous développons</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quelles solutions IA développons-nous sur mesure ?
          </h2>

          <p style={answerStyle}>
            <strong>Masteria développe des agents IA, des automatisations de processus, des applications et copilotes métier, des intégrations LLM/RAG sur vos données, des connecteurs et API (MCP, CRM, ERP) et des interfaces web IA. Chaque solution est conçue pour un usage réel, intégrée à votre existant et transférée à vos équipes.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Du dev ia côté logique au web dev ia côté interface, nous couvrons l'ensemble de la chaîne : la solution la plus pertinente sur le papier ne vaut que si elle est utilisée au quotidien. Six familles de livrables reviennent dans la majorité des projets.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {LIVRABLES.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 880 }}>
            Selon le besoin, ces livrables se rejoignent : un projet peut combiner une <Link to="/agence-automatisation-ia" style={aStyle}>automatisation de vos processus</Link> et un <Link to="/agents-ia-entreprise" style={aStyle}>agent IA pour votre entreprise</Link>, ou prendre la forme d'un <Link to="/outils-ia-sur-mesure" style={aStyle}>outil IA sur mesure</Link> dédié à un métier. Pour une vue par cas d'usage, parcourez nos <Link to="/solutions-ia" style={aStyle}>solutions IA types</Link>.
          </p>
        </div>
      </section>

      {/* ── DÉROULÉ D'UN PROJET (timeline) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule un projet de développement IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un projet suit cinq étapes : cadrage et ROI pour fixer le périmètre, prototype ou POC pour prouver la valeur, développement de la solution, déploiement et intégration à vos outils, puis transfert aux équipes. Vous décidez à chaque étape, sur des livrables concrets.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 44, lineHeight: 1.7, maxWidth: 880 }}>
            Le même chemin pour chaque mission : cadrer, prouver, développer, intégrer, transmettre. Chaque étape produit un livrable et un point de décision, ce qui évite les projets qui s'enlisent.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  padding: '24px 0',
                  borderTop: i === 0 ? 'none' : '1px solid #E5E7EB',
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODÈLES D'ENGAGEMENT (FORFAIT / RÉGIE) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Modèles d'engagement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Deux façons de travailler avec nous
          </h2>

          <p style={answerStyle}>
            <strong>Vous pouvez nous confier le projet au forfait, du cadrage au déploiement, ou nous faire intervenir en régie. Au-delà du forfait, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, pour les environnements sensibles ou une montée en charge.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le mode d'engagement se décide au cadrage, selon la sensibilité de votre environnement, votre rythme et la place que vos équipes veulent tenir dans le projet. Les deux modèles partagent la même exigence : du code structuré, documenté et transférable, jamais une boîte noire.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24, marginBottom: 32 }}>
            {ENGAGEMENTS.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                  <span style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: '0.02em' }}>
                    {card.tag}
                  </span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>{card.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {card.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: '#374151', lineHeight: 1.55 }}>
                      <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Pour le détail du déroulé, des livrables et de la gouvernance de chaque mission, voyez notre <Link to="/methode-projet-ia" style={aStyle}>méthode de projet IA</Link>. Vous hésitez encore sur le périmètre ? Notre <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> est l'offre d'entrée qui cadre le besoin avant tout développement.
          </p>
        </div>
      </section>

      {/* ── NOTRE APPROCHE TECHNIQUE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Approche technique</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Sur quelle stack développons-nous ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Nous travaillons en multi-LLM (Claude, GPT, Mistral), avec du RAG pour ancrer les réponses dans vos données, des agents et des connecteurs MCP, du no-code quand il suffit et du code quand la robustesse l'exige. La sécurité et la confidentialité sont des critères de conception, et un hébergement dans l'Union européenne est possible.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Pas de stack imposée ni de jargon décoratif : nous choisissons les briques selon votre cas, votre budget et vos contraintes de conformité.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 56 }}>
            {STACK.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ ...h3Style, fontSize: 19, marginBottom: 8 }}>
            Faire soi-même, faire développer ou passer par une ESN généraliste ?
          </h3>
          <p style={{ color: '#374151', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Trois voies existent pour construire une solution IA. Le bon choix dépend de la durabilité attendue et de la criticité du besoin. Voici le comparatif, critère par critère.
          </p>

          <div style={{ ...cardStyle, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre faire soi-même en no-code, faire développer par Masteria et passer par une ESN généraliste" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ ...thStyle, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ ...thStyle, width: '26%' }}>Faire soi-même (no-code)</th>
                  <th scope="col" style={{ ...thStyle, width: '26%', color: c }}>Faire développer (Masteria)</th>
                  <th scope="col" style={{ ...thStyle, width: '26%' }}>ESN généraliste</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_VOIES.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ ...tdStyle, textAlign: 'left', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 14 }}>{row.critere}</th>
                    <td style={tdStyle}>{row.nocode}</td>
                    <td style={{ ...tdStyle, color: '#0A0A0A', fontWeight: 500 }}>{row.masteria}</td>
                    <td style={tdStyle}>{row.esn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── POURQUOI UNE AGENCE SPÉCIALISÉE IA ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pourquoi une agence spécialisée</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Pourquoi choisir une agence spécialisée IA plutôt qu'une ESN ou une agence web ?
          </h2>

          <p style={answerStyle}>
            <strong>Parce qu'un projet IA n'est pas un projet web classique : il exige le choix des modèles, la maîtrise du RAG et des agents, des garde-fous et une intégration aux données. Masteria est spécialisée sur l'IA depuis 2022 et conçoit la solution pour la production, en restant indépendante des éditeurs.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, margin: '32px 0' }}>
            {WHY.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Si votre besoin commence en amont du développement (stratégie IA, gouvernance, feuille de route à l'échelle de l'entreprise), notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> intervient en premier. Notre lecture des enjeux propres à votre activité s'appuie sur notre <Link to="/ia-secteurs" style={aStyle}>expertise IA par secteur</Link>. Pour une vue d'ensemble de nos accompagnements, de la formation au déploiement, parcourez notre <Link to="/agence-ia" style={aStyle}>agence IA</Link>.
          </p>
        </div>
      </section>

      {/* ── ON FORME VOS ÉQUIPES (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#fff', padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Transfert de compétence</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                On forme vos équipes à reprendre la main
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le développement reste le cœur de la mission, mais nous ne livrons pas une boîte noire. À la fin du projet, vos équipes savent utiliser, surveiller et faire évoluer la solution. Ce transfert est un différenciateur : organisme issu de la formation professionnelle, Masteria a formé plus de 1 500 professionnels à l'IA et sait rendre une équipe autonome sur ses propres outils.
              </p>
              <Link to="/formation-intelligence-artificielle" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Découvrir nos formations à l'intelligence artificielle
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUDGET & DEVIS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Budget & devis</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quel budget pour un projet de développement IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#F9FAFB' }}>
            <strong>Le développement IA sur mesure se chiffre au forfait, sur devis, selon le périmètre du projet. Nous ne publions pas de prix type : un prototype, un agent connecté ou une application métier complète n'engagent pas le même travail. Le devis est établi après un cadrage qui fixe le périmètre, les données et le critère de réussite.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 28 }}>
            {[
              { icon: Target, title: 'Un cadrage d\'abord', desc: "Nous délimitons le périmètre et le critère de réussite avant tout chiffrage, pour un devis fondé sur votre besoin réel et non sur une grille générique." },
              { icon: FileText, title: 'Un forfait au projet', desc: "Le développement est facturé au forfait, projet par projet, avec un périmètre et des livrables clairs. Vous savez ce que vous engagez avant de démarrer." },
              { icon: Check, title: 'Pas de prix inventés', desc: "Nous préférons un devis honnête à un tarif d'appel : le budget dépend du périmètre, de la complexité technique et du niveau d'intégration attendu." },
            ].map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Pour obtenir un devis d'agence IA adapté, décrivez-nous votre cas d'usage et vos contraintes. Nous revenons vers vous avec une première estimation de périmètre et une proposition de cadrage.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>FAQ</Kicker>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>
            Développement IA sur mesure : les questions fréquentes
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
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
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Le point de départ : un diagnostic qui cadre le besoin et le périmètre avant tout développement." },
              { label: 'Méthode de projet IA', href: '/methode-projet-ia', tag: 'Méthode', desc: "Le déroulé détaillé d'une mission, les livrables et nos modèles d'engagement, dont la régie." },
              { label: 'Solutions IA types', href: '/solutions-ia', tag: 'Solutions', desc: "Un panorama de nos solutions IA par cas d'usage, des agents aux applications métier." },
              { label: 'IA par secteur', href: '/ia-secteurs', tag: 'Secteurs', desc: "Notre lecture des enjeux et cas d'usage IA propres à chaque secteur d'activité." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Cadrage, prototypage et déploiement de vos automatisations IA, avec vos équipes." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Quand et comment déployer des agents IA, avec les garde-fous que cela exige." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Des outils et copilotes développés pour un métier précis, connectés à vos données." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA au niveau de la direction." },
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Discutons de votre projet
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
            Décrivez-nous le cas d'usage que vous voulez adresser et vos contraintes. Nous revenons vers vous sous 24 heures avec une lecture du périmètre et une proposition de cadrage : objectifs, faisabilité, premier prototype envisageable. Vous repartez avec une vision claire de ce qu'il est possible de développer.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
            Discuter de votre projet
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
            Réponse sous 24 h · Spécialistes IA depuis 2022 · Multi-LLM · Lyon, France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
