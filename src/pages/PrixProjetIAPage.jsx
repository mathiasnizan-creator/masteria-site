import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Wallet, Bot, MessageSquare, LayoutDashboard, Workflow,
  Database, Cpu, Package, Users, Compass, Check, KeyRound, Layers,
  GitBranch, Gauge, Clock, ShieldCheck, Calculator,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page bottom-funnel ACHAT — « Prix d'un projet IA » (slug /prix-projet-ia).
 * Intention : combien coûte un développement IA sur mesure. Mots-clés tissés :
 * « coût développement ia », « prix agent ia », « tarif chatbot ia »,
 * « prix application ia sur mesure », « combien coûte un projet ia »,
 * « prix projet ia », « tjm développeur ia », « budget projet ia ».
 *
 * INTÉGRITÉ STRICTE : fourchettes LARGES à plafond ouvert, jamais de prix ferme
 * inventé. Aucun cas client, aucun logo, aucun chiffre de résultat, aucun
 * pourcentage fabriqué. Régie = capacité réellement offerte. Posture capacité.
 * Pas d'OPCO / Qualiopi (conseil/dev non finançable). Propriété du code au client.
 *
 * Design premium calqué sur /agence-developpement-ia : hero sombre #0A0F1E, accent
 * #2563EB UNIQUEMENT (zéro orange), icônes lucide (zéro emoji), réponses citables.
 * Maillage : /agence-developpement-ia, /methode-projet-ia, /outils-ia-sur-mesure,
 * /agents-ia-entreprise, /diagnostic-ia, /conseil-intelligence-artificielle, /contact.
 */

const SLUG = 'prix-projet-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Prix d'un projet IA : combien ça coûte ? | Masteria"
const META_DESC = "Combien coûte un projet IA ? Fourchettes de prix par livrable : chatbot, agent IA, application sur mesure. Forfait ou régie, TJM, devis gratuit."

const KEYWORDS = "prix projet ia, coût développement ia, combien coûte un projet ia, prix agent ia, tarif chatbot ia, prix application ia sur mesure, tjm développeur ia, budget projet ia, devis projet ia"

/* ───────── Styles partagés (calque /agence-developpement-ia) ───────── */

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

const HERO_CHIPS = [
  { icon: MessageSquare, label: 'Chatbot IA' },
  { icon: Bot,           label: 'Agent IA' },
  { icon: LayoutDashboard, label: 'Application sur mesure' },
  { icon: Workflow,      label: 'Automatisation' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Livrables', value: "Chatbot IA, agent IA, copilote interne, automatisation de process, application/outil IA sur mesure, intégration LLM/RAG" },
  { label: 'Fourchettes', value: "Des POC et petits outils à partir de quelques milliers d'euros, jusqu'à 100 000 € et plus pour les projets d'ampleur" },
  { label: 'Engagement', value: "Forfait au projet (prix fixé au cadrage) ou régie (développeurs IA détachés, facturés au TJM)" },
  { label: 'Ce qui fait le prix', value: "Complexité, intégrations, volume de données, niveau d'autonomie de l'IA et besoins de run/maintenance" },
  { label: 'Propriété', value: "Le code développé appartient au client, sans licence captive" },
  { label: 'Délai & zone', value: "Prototype en quelques semaines · France, Suisse, Belgique · sur site ou à distance" },
]

/* ───────── Tableau de fourchettes par livrable (plafond ouvert) ───────── */

const TARIFS = [
  {
    icon: MessageSquare,
    livrable: 'Chatbot IA sur mesure',
    desc: "Assistant conversationnel branché sur vos contenus, avec réponses sourcées.",
    fourchette: 'À partir de quelques milliers d\'euros',
    facteurs: 'Volume de données, nombre de sources, canaux et niveau de personnalisation',
  },
  {
    icon: Bot,
    livrable: 'Agent IA',
    desc: "Agent outillé qui raisonne, appelle vos outils et exécute des tâches de bout en bout.",
    fourchette: 'Quelques dizaines de milliers d\'euros et plus',
    facteurs: 'Nombre d\'actions, garde-fous, intégrations et niveau d\'autonomie',
  },
  {
    icon: LayoutDashboard,
    livrable: 'Copilote interne',
    desc: "Assistant métier dédié à une équipe, connecté à vos données et à vos process.",
    fourchette: 'Quelques dizaines de milliers d\'euros et plus',
    facteurs: 'Périmètre métier, interface, droits d\'accès et connexions au SI',
  },
  {
    icon: Workflow,
    livrable: 'Automatisation de process',
    desc: "Orchestration d'un flux métier répétitif, du déclencheur au résultat.",
    fourchette: 'À partir de quelques milliers d\'euros',
    facteurs: 'Nombre d\'étapes, fiabilité attendue et outils à connecter',
  },
  {
    icon: LayoutDashboard,
    livrable: 'Application / outil IA sur mesure',
    desc: "Application métier complète avec interface dédiée et logique propre à votre activité.",
    fourchette: 'À partir de plusieurs dizaines de milliers d\'euros',
    facteurs: 'Étendue fonctionnelle, nombre d\'utilisateurs, design et robustesse en production',
  },
  {
    icon: Database,
    livrable: 'Intégration LLM / RAG',
    desc: "Vos documents et vos bases deviennent interrogeables par un modèle, avec sources.",
    fourchette: 'Variable selon le volume, sur devis',
    facteurs: 'Volume documentaire, qualité des données et exigences de sécurité',
  },
]

/* ───────── Ce qui fait varier le prix (5 cartes) ───────── */

const FACTEURS = [
  {
    icon: Layers,
    title: 'Complexité fonctionnelle',
    desc: "Un outil sur un cas simple ne représente pas le même travail qu'un agent multi-tâches ou une application métier complète. Plus la logique est riche, plus le développement et les tests pèsent dans le budget.",
  },
  {
    icon: GitBranch,
    title: 'Intégrations au système d\'information',
    desc: "Chaque connexion à un CRM, un ERP ou un outil interne ajoute du développement et de la coordination. Une solution autonome coûte moins qu'une solution profondément intégrée à votre SI.",
  },
  {
    icon: Database,
    title: 'Volume et qualité des données',
    desc: "Le RAG et l'ancrage dans vos contenus dépendent du volume documentaire et de la propreté des données. Des données dispersées ou à nettoyer demandent un travail de préparation qui pèse sur le coût.",
  },
  {
    icon: Gauge,
    title: 'Niveau d\'autonomie de l\'IA',
    desc: "Un assistant qui suggère coûte moins qu'un agent qui décide et agit. Plus l'IA prend d'initiatives, plus il faut de garde-fous, de validation humaine et de traçabilité, donc d'ingénierie.",
  },
  {
    icon: ShieldCheck,
    title: 'Run, maintenance et conformité',
    desc: "Au-delà du build, comptez le run : hébergement, supervision, évolutions et coûts d'usage des modèles. Les exigences de sécurité et de conformité (RGPD, AI Act) influent aussi sur le budget.",
  },
]

/* ───────── Modèles de facturation (forfait / régie / conseil) ───────── */

const MODELES = [
  {
    icon: Package,
    tag: 'Forfait au projet',
    title: 'Un prix fixé au cadrage',
    desc: "Le mode par défaut pour un périmètre défini : nous chiffrons le projet au forfait après le cadrage, avec un prix et des livrables connus avant de démarrer. Idéal pour un POC, un chatbot ou un outil bien délimité dont vous voulez maîtriser le coût total.",
    points: ['Prix global connu avant de démarrer', 'Périmètre et livrables écrits', 'Idéal POC et projets cadrés'],
  },
  {
    icon: Users,
    tag: 'Régie · TJM',
    title: 'Des développeurs IA au temps passé',
    desc: "Quand le périmètre évolue ou que l'environnement est sensible, nous détachons un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, facturés au taux journalier (TJM). Le TJM se définit selon le profil et la durée de la mission. Vous pilotez, nous apportons l'expertise.",
    points: ['Facturation au TJM, selon profil et durée', 'Renfort sur site ou à distance', 'Pour les environnements sensibles ou la montée en charge'],
  },
  {
    icon: Compass,
    tag: 'Accompagnement conseil',
    title: 'En amont du développement',
    desc: "Quand le besoin se situe avant le build (cadrage, choix d'architecture, gouvernance), nous intervenons en conseil, au forfait ou au temps passé. Cette étape sécurise le budget : elle évite de développer la mauvaise solution ou de surdimensionner le projet.",
    points: ['Cadrage et choix d\'architecture', 'Au forfait ou au temps passé', 'Sécurise le budget avant le build'],
  },
]

/* ───────── Ce qui est inclus (4 cartes) ───────── */

const INCLUS = [
  {
    icon: Compass,
    title: 'Le cadrage et la conception',
    desc: "La délimitation du périmètre, le critère de réussite et les choix techniques sont intégrés au projet. Le devis repose sur votre besoin réel, pas sur une grille générique.",
  },
  {
    icon: KeyRound,
    title: 'La propriété du code',
    desc: "Le code développé vous appartient. Pas de licence captive ni de dépendance imposée : vous pouvez l'exploiter et le faire évoluer avec vos équipes ou un autre prestataire.",
  },
  {
    icon: Check,
    title: 'La documentation et le transfert',
    desc: "À la livraison, la solution est documentée et vos équipes sont formées à l'utiliser, la surveiller et la faire évoluer. L'autonomie fait partie du livrable.",
  },
  {
    icon: ShieldCheck,
    title: 'Les garde-fous et la sécurité',
    desc: "Validation humaine sur les décisions sensibles, journalisation et cloisonnement des accès sont prévus dès la conception, sans surcoût caché ajouté après coup.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Combien coûte un projet IA sur mesure ?",
    a: "Le prix d'un projet IA dépend du périmètre, et nous le chiffrons au forfait après un cadrage. Les fourchettes sont larges : un POC ou un petit outil démarre à partir de quelques milliers d'euros, tandis qu'un projet d'ampleur (application métier complète, agents multiples, intégrations profondes au système d'information) peut dépasser 100 000 €. Nous ne publions pas de prix type, car un chatbot simple et une application sur mesure n'engagent pas le même travail. Le devis est établi une fois le périmètre, les données et le critère de réussite définis.",
  },
  {
    q: "Quel est le prix d'un agent IA ?",
    a: "Le prix d'un agent IA varie fortement selon ce qu'il doit faire. Un agent qui raisonne, appelle vos outils et exécute des tâches de bout en bout représente plus de travail qu'un simple assistant conversationnel : il faut concevoir les actions, poser des garde-fous, prévoir la validation humaine sur les décisions sensibles et assurer la traçabilité. Comptez à partir de quelques dizaines de milliers d'euros pour un agent outillé connecté à vos systèmes, avec un budget qui monte selon le nombre d'actions, le niveau d'autonomie et la profondeur des intégrations. Le chiffrage se fait sur devis, après cadrage.",
  },
  {
    q: "Quel est le tarif d'un chatbot IA ?",
    a: "Le tarif d'un chatbot IA sur mesure démarre à partir de quelques milliers d'euros pour un assistant branché sur vos contenus avec des réponses sourcées. Le prix augmente avec le volume de données à indexer, le nombre de sources et de canaux (site, intranet, messagerie), le niveau de personnalisation et les exigences de sécurité. Un chatbot qui se contente de répondre à partir d'une base documentaire coûte moins qu'un assistant capable d'effectuer des actions ou de se connecter à plusieurs outils. Nous précisons le budget une fois le périmètre cadré.",
  },
  {
    q: "Quel est le prix d'une application IA sur mesure ?",
    a: "Une application ou un outil IA sur mesure se chiffre généralement à partir de plusieurs dizaines de milliers d'euros, et le budget dépend de l'étendue fonctionnelle, du nombre d'utilisateurs, du design de l'interface, des connexions à votre système d'information et du niveau de robustesse attendu en production. Une application métier complète, pensée pour un usage quotidien et profondément intégrée, représente un projet d'ampleur dont le budget peut dépasser 100 000 €. Comme pour chaque livrable, nous établissons un devis au forfait après le cadrage.",
  },
  {
    q: "Faut-il choisir le forfait ou la régie, et à quel coût ?",
    a: "Le forfait convient à un projet cadré dont vous voulez maîtriser le coût total : le prix global est fixé avant de démarrer. La régie convient quand le périmètre évolue, que vous voulez un renfort durable ou que l'environnement est sensible : vous payez au temps passé, au taux journalier (TJM), selon le profil détaché et la durée de la mission. Les deux modèles se combinent : un forfait peut précéder une régie pour la suite. Le choix se décide au cadrage, selon votre besoin de prévisibilité budgétaire et la place que vos équipes veulent tenir.",
  },
  {
    q: "Quel est le TJM d'un développeur IA ?",
    a: "Le TJM (taux journalier moyen) d'un développeur IA dépend du profil, de la séniorité, de la durée de la mission et du mode d'intervention (sur site ou à distance). Plutôt que d'afficher un tarif unique qui serait trompeur, nous calons le TJM sur le profil dont vous avez besoin et la durée de l'engagement, et nous le précisons dans la proposition de régie. Ce mode de facturation au temps passé s'oppose au forfait, où c'est le prix global du projet qui est fixé à l'avance plutôt que le coût d'une journée.",
  },
  {
    q: "Pourquoi ne donnez-vous pas un prix fixe affiché ?",
    a: "Parce qu'un prix fixe affiché serait soit un tarif d'appel trompeur, soit une surfacturation de précaution. Deux projets IA portant le même nom (un agent, un chatbot, une automatisation) peuvent représenter un travail très différent selon la complexité, les intégrations, le volume de données et le niveau d'autonomie attendu. Nous préférons un devis honnête établi après cadrage à un prix générique qui ne correspondrait pas à votre besoin réel. Les fourchettes indicatives de cette page vous donnent un ordre de grandeur ; le chiffrage précis vient après l'analyse de votre cas.",
  },
  {
    q: "Quel budget prévoir pour un premier projet IA ?",
    a: "Pour un premier projet, le plus prudent est de démarrer petit : un POC ou un outil sur un cas prioritaire, à partir de quelques milliers d'euros, qui prouve la valeur en conditions réelles avant d'engager un budget plus important. Cette approche par paliers évite de s'engager à l'aveugle sur un projet long. Si vous voulez sécuriser la première étape, notre diagnostic IA cadre le besoin et le périmètre à faible engagement, avant tout développement. Le budget complet se construit ensuite sur un périmètre validé, pas sur une estimation à l'aveugle.",
  },
  {
    q: "Le prix inclut-il la maintenance et l'hébergement ?",
    a: "Le devis de développement couvre la conception, le build, la documentation et le transfert à vos équipes. Le run (hébergement, supervision, évolutions et coûts d'usage des modèles) est un poste distinct, que nous chiffrons à part selon vos besoins. Comme le code vous appartient, vous restez libre d'assurer la maintenance en interne, avec nous au forfait ou en régie, ou avec un autre prestataire. Nous précisons ces coûts récurrents dès le cadrage pour qu'il n'y ait pas de surprise après la mise en production.",
  },
  {
    q: "Intervenez-vous en France, en Suisse et en Belgique ?",
    a: "Oui. Masteria est basée à Lyon et intervient dans toute la France ainsi qu'en Suisse et en Belgique. Le développement et le suivi se conduisent très bien à distance, en visio et par points réguliers ; les phases de cadrage, de régie sur site et de transfert peuvent se tenir chez vous selon vos préférences. Les fourchettes de prix de cette page valent comme ordre de grandeur quel que soit le pays, le devis final étant établi en fonction de votre périmètre.",
  },
]

/* ───────── JSON-LD ───────── */

/* Service (ProfessionalService) avec AggregateOffer à lowPrice SANS highPrice :
   le plafond ouvert reflète l'intégrité tarifaire (fourchettes larges, jamais de
   prix ferme). areaServed FR/CH/BE, brand Masteria, mainEntityOfPage. Pas de
   courseData (réservé formations), pas de HowTo. */
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: "Développement de projets IA sur mesure — Masteria",
  description: "Conception et développement de solutions IA sur mesure pour les entreprises : chatbot IA, agent IA, copilote interne, automatisation de process, application sur mesure, intégration LLM/RAG. Tarification au forfait après cadrage ou en régie (TJM). Le code développé appartient au client.",
  url: 'https://www.master-ia.fr/prix-projet-ia',
  serviceType: 'Développement de solutions IA sur mesure',
  brand: { '@type': 'Brand', name: 'Masteria' },
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/prix-projet-ia',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '3000',
    // Pas de highPrice : plafond ouvert (gros projets 100 000 €+), fourchettes larges.
    availability: 'https://schema.org/InStock',
    offerCount: 6,
    seller: { '@id': 'https://www.master-ia.fr/#organization' },
    eligibleRegion: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'Country', name: 'Belgique' },
    ],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Livrables IA sur mesure et fourchettes indicatives',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chatbot IA sur mesure', description: "Assistant conversationnel branché sur vos contenus, réponses sourcées. À partir de quelques milliers d'euros." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent IA', description: "Agent outillé qui raisonne et exécute des tâches de bout en bout. À partir de quelques dizaines de milliers d'euros." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copilote interne', description: "Assistant métier dédié à une équipe, connecté à vos données. À partir de quelques dizaines de milliers d'euros." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation de process', description: "Orchestration d'un flux métier répétitif. À partir de quelques milliers d'euros." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application / outil IA sur mesure', description: "Application métier complète avec interface dédiée. À partir de plusieurs dizaines de milliers d'euros." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intégration LLM / RAG', description: "Vos documents et bases interrogeables par un modèle, avec sources. Sur devis selon le volume." } },
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
        aria-expanded={open}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {/* Réponse TOUJOURS dans le DOM (repli CSS maxHeight) pour rester citable par les LLM */}
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function PrixProjetIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique sticky réutilisable
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Prix d\'un projet IA', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Prix d'un projet IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wallet size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Budget & devis · développement IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Combien coûte un projet IA ?
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>Prix d'un développement IA sur mesure</span>
          </h1>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le prix d'un projet IA va de <strong style={{ color: '#fff', fontWeight: 700 }}>quelques milliers d'euros</strong> pour un POC ou un chatbot, à <strong style={{ color: '#fff', fontWeight: 700 }}>plus de 100 000 €</strong> pour une application métier complète. Le coût de développement IA se chiffre au forfait après un cadrage, ou en régie au TJM.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Masteria développe des solutions IA sur mesure depuis Lyon. Cette page donne des fourchettes indicatives par type de livrable, explique ce qui fait varier le budget projet IA et détaille nos modèles de facturation, sans prix d'appel ni tarif générique.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#tarifs" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les fourchettes de prix
            </a>
          </div>

          {/* tags de livrables */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_CHIPS.map(({ icon: Icon, label }) => (
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
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 132px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── FOURCHETTES PAR LIVRABLE (ancre sombre — section technique pivot, porte le tableau) ── */}
      <section id="tarifs" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Fourchettes de prix</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Quel prix par type de projet IA ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un chatbot IA ou une automatisation démarre à partir de quelques milliers d'euros ; un agent IA ou un copilote interne, à partir de quelques dizaines de milliers d'euros ; une application IA sur mesure, à partir de plusieurs dizaines de milliers d'euros, et au-delà de 100 000 € pour un projet d'ampleur. Ce sont des ordres de grandeur ; le prix exact est chiffré sur devis après cadrage.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Les fourchettes ci-dessous sont indicatives et à plafond ouvert : le même type de livrable peut représenter un travail très différent selon les facteurs détaillés plus bas. Aucun prix n'est ferme avant l'analyse de votre cas.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Fourchettes de prix indicatives par type de livrable IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '30%' }}>Livrable</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '30%' }}>Fourchette indicative</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '40%' }}>Ce qui fait varier le prix</th>
                </tr>
              </thead>
              <tbody>
                {TARIFS.map((row, i) => {
                  const Icon = row.icon
                  return (
                    <tr key={row.livrable} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                      <th scope="row" style={{ padding: '14px 18px', textAlign: 'left', verticalAlign: 'top' }}>
                        <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <Icon size={18} strokeWidth={2.2} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                          <span>
                            <span style={{ display: 'block', fontSize: 14.5, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', lineHeight: 1.4 }}>{row.livrable}</span>
                            <span style={{ display: 'block', fontSize: 13, color: '#94A3B8', lineHeight: 1.55, marginTop: 4, fontWeight: 400 }}>{row.desc}</span>
                          </span>
                        </span>
                      </th>
                      <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 600, lineHeight: 1.55, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.fourchette}</td>
                      <td style={{ padding: '14px 18px', fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.facteurs}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#94A3B8', fontSize: 13.5, marginTop: 18, lineHeight: 1.7, maxWidth: 880 }}>
            Montants hors taxes, à titre indicatif. Pour le détail de ce que recouvre chaque livrable, voyez notre <Link to="/agence-developpement-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence de développement IA</Link> et nos <Link to="/outils-ia-sur-mesure" style={{ color: '#60A5FA', fontWeight: 600 }}>outils IA sur mesure</Link>.
          </p>
        </div>
      </section>

      {/* ── CE QUI FAIT VARIER LE PRIX (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce qui fait le prix</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce qui fait varier le coût d'un développement IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Cinq facteurs pèsent sur le prix : la complexité fonctionnelle, le nombre d'intégrations à votre système d'information, le volume et la qualité des données, le niveau d'autonomie de l'IA, et les besoins de run et de maintenance. Deux projets au même nom peuvent coûter très différemment selon ces critères.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                C'est précisément pour cela qu'un prix générique n'aurait pas de sens : le budget projet IA se construit sur votre cas réel. Le cadrage sert à mesurer ces facteurs avant de chiffrer.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {FACTEURS.map(item => (
                  <div key={item.title} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour estimer ces facteurs sur votre besoin sans engager le développement, notre <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> cadre le périmètre et pose une première fourchette. Le déroulé complet d'une mission est détaillé dans notre <Link to="/methode-projet-ia" style={aStyle}>méthode de projet IA</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODÈLES DE FACTURATION (forfait / régie / conseil) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Comment on facture</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Forfait au projet ou régie au TJM ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Au forfait, le prix global du projet est fixé au cadrage : vous savez ce que vous engagez avant de démarrer. En régie, nous détachons des développeurs IA dans vos équipes, facturés au taux journalier (TJM) selon le profil et la durée. L'accompagnement conseil, en amont du build, se chiffre au forfait ou au temps passé. Les modèles se combinent.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le mode de facturation se décide au cadrage, selon votre besoin de prévisibilité budgétaire, la sensibilité de votre environnement et la place que vos équipes veulent tenir dans le projet. Dans tous les cas, le code développé vous appartient.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {MODELES.map((card, i) => (
              <div key={card.title} style={{ ...cardStyle, padding: 30, display: 'flex', flexDirection: 'column', ...(i === 0 ? { borderTop: `3px solid ${c}` } : {}) }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                  <span style={{ background: i === 0 ? c : cLight, color: i === 0 ? '#fff' : c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: '0.02em' }}>
                    {card.tag}
                  </span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>{card.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
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

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 880 }}>
            Pour le détail de nos modèles d'engagement, dont la régie avec développeurs détachés, voyez notre <Link to="/methode-projet-ia" style={aStyle}>méthode et modèles d'engagement IA</Link>.
          </p>
        </div>
      </section>

      {/* ── CE QUI EST INCLUS (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce qui est inclus</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce que le prix d'un projet IA couvre ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Le devis inclut le cadrage et la conception, le développement, la documentation et le transfert à vos équipes, ainsi que les garde-fous et la sécurité. Le code développé vous appartient. Le run (hébergement, supervision, évolutions) est un poste distinct, chiffré à part et annoncé dès le cadrage.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {INCLUS.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={card.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                La propriété du code et le transfert de compétence sont au cœur de notre approche : vous ne payez pas une boîte noire, mais une solution que vos équipes savent faire vivre. Si votre besoin commence en amont, notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> cadre la stratégie avant tout chiffrage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DÉLAIS INDICATIFS (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#fff', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Clock size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Délais indicatifs</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Combien de temps, et quel lien avec le budget ?
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Un prototype ou un premier outil utile se construit souvent en quelques semaines ; un développement complet jusqu'à la mise en production s'étale sur plusieurs semaines à quelques mois selon la complexité et les intégrations. Le délai et le budget vont de pair : démarrer par un POC à faible coût permet de prouver la valeur avant d'engager un budget plus important, par paliers maîtrisés plutôt qu'à l'aveugle.
              </p>
              <Link to="/methode-projet-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Voir notre méthode étape par étape
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ON CHIFFRE (rassurance devis) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Notre devis</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment on établit le prix de votre projet
          </h2>

          <p style={{ ...answerStyle, background: '#F9FAFB' }}>
            <strong>Nous ne vendons pas de forfait à l'aveugle. Le devis est établi après un cadrage qui fixe le périmètre, les données et le critère de réussite. Vous obtenez un prix fondé sur votre besoin réel, des fourchettes honnêtes plutôt qu'un tarif d'appel, et un budget clair avant de vous engager.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 28 }}>
            {[
              { icon: Compass, title: 'Un cadrage d\'abord', desc: "Nous délimitons le périmètre et le critère de réussite avant tout chiffrage, pour un devis fondé sur votre cas et non sur une grille générique." },
              { icon: Calculator, title: 'Une fourchette, puis un devis', desc: "Nous posons d'abord un ordre de grandeur, puis un devis détaillé au forfait une fois le périmètre validé. Vous savez ce que vous engagez avant de démarrer." },
              { icon: Cpu, title: 'Pas de prix inventés', desc: "Le budget dépend de la complexité, des intégrations et du niveau d'autonomie. Nous préférons un devis honnête à un tarif générique qui ne correspondrait pas à votre besoin." },
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
            Décrivez-nous votre cas d'usage et vos contraintes : nous revenons sous 24 heures avec une lecture du périmètre et une première estimation de budget. Besoin d'un agent en particulier ? Voyez nos <Link to="/agents-ia-entreprise" style={aStyle}>agents IA pour l'entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Prix d'un projet IA : les questions fréquentes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Demander un devis gratuit
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
            Du cadrage au développement, explorez nos expertises et nos offres pour affiner votre projet et votre budget.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Agents, automatisations et applications métier sur mesure, de l'idée au déploiement." },
              { label: 'Méthode & modèles d\'engagement', href: '/methode-projet-ia', tag: 'Méthode', desc: "Le déroulé d'une mission, le forfait, la régie au TJM et la propriété du code." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Offre d\'entrée', desc: "Cadre le besoin et pose une première fourchette de budget, avant tout développement." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Des outils et copilotes développés pour un métier précis, connectés à vos données." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Quand et comment déployer des agents IA, avec les garde-fous que cela exige." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA au niveau de la direction." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'Panorama', desc: "Ce que recouvre l'IA générative en entreprise et les usages qui justifient un budget." },
              { label: "Cas d'usage de l'IA en entreprise", href: '/cas-usage-ia-entreprise', tag: 'Cas d\'usage', desc: "Des cas d'usage de l'IA en entreprise pour repérer le projet à chiffrer en premier." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Gouvernance', desc: "La gouvernance de l'IA, du cadrage à la conformité, qui pèse aussi sur le budget." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Devis gratuit</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Obtenez le prix de votre projet IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez-nous votre cas d'usage, vos contraintes et le livrable visé. Nous revenons vers vous sous 24 heures avec une lecture du périmètre et une première estimation de budget : fourchette indicative, modèle de facturation adapté et prochaines étapes. Vous repartez avec une vision claire du coût.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis gratuit
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Forfait ou régie · Code propriété client · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
