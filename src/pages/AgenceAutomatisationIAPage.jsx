import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, Cog, Compass, FileText, Key,
  Mail, MapPin, PenLine, Plug, Receipt, RefreshCw, Rocket, Target, Workflow,
  Sun, Bot,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'
import CadrageLink from '../components/CadrageLink'

/*
 * Page offre « agence d'automatisation IA » (slug /agence-automatisation-ia).
 * Cible : « agence automatisation ia », « agence d'automatisation ia »,
 * « conseil automatisation ia ». Angle propre à la page : l'AUTOMATISATION DES
 * PROCESSUS (repérage des tâches qui reviennent, construction, raccordement aux
 * logiciels, passation aux référents).
 * Maillage : /automatisation-ia (guide pilier), /formation-automatisation-ia,
 * /agents-ia-entreprise, /agence-developpement-ia, /outils-ia-sur-mesure,
 * /conseil-intelligence-artificielle, /blog/automatisation-ia-pme-processus-prioritaires.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de FounderNote ; retrait
 * du « +1 500 », du « plusieurs heures par semaine » non sourcé, du « Gratuit »
 * et de l'offre « audit gratuit » (seules les 30 minutes de cadrage sont
 * offertes, le repérage des processus est le premier temps payant de la mission) ;
 * prix en fourchettes larges au forfait ; formation 1 980 € HT finançable par
 * l'OPCO selon ses règles et ses fonds, automatisation pas finançable par l'OPCO ;
 * deux exemples tirés de src/data/etudes-de-cas.js.
 * Design premium : icônes lucide (zéro emoji), kickers, accent bleu #2563EB.
 */

const SLUG = 'agence-automatisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Agence automatisation IA · Cadrage & déploiement | Masteria"
const META_DESC = "Agence d'automatisation IA : vos processus répétitifs repérés, automatisés et reliés à vos logiciels, puis remis à vos équipes. 30 min de cadrage offertes."
const KEYWORDS = "agence automatisation ia, agence d'automatisation ia, automatisation ia, conseil automatisation ia, automatisation intelligente, workflows ia, agence rpa ia"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1100, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 860 }

const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4 }
const tdStyle = { padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

function IconBox({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: Cog,    label: 'Automatisations construites pour vous' },
  { icon: Plug,   label: 'Reliées à vos logiciels (API, MCP)' },
  { icon: MapPin, label: 'Lyon · Europe · États-Unis · Inde' },
  { icon: Key,    label: 'Système remis à votre équipe' },
]

/* ───────── Chiffres clés ───────── */

const KEY_FIGURES = [
  { num: '4', label: 'temps par mission, du repérage à la passation' },
  { num: '2 à 4', label: 'semaines pour un premier prototype' },
  { num: '30 min', label: 'de cadrage offertes pour démarrer' },
  { num: '2022', label: 'création du cabinet, à Lyon' },
]

/* ───────── Les quatre temps d'une mission ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Repérage et architecture',
    badge: 'Premier temps de la mission',
    desc: "Nous dressons avec chaque service la liste des tâches répétitives, estimons pour chacune le temps qu'elle prend et la difficulté à l'automatiser, puis dessinons l'architecture : déclencheurs, traitements par l'IA, logiciels à relier, points de contrôle humain. On évite ainsi d'automatiser d'abord ce qui est facile au détriment de ce qui compte.",
    livrable: "Une feuille de route classée et chiffrée, qui vous appartient même si vous la réalisez sans nous.",
  },
  {
    num: '02',
    title: 'Prototype sur un ou deux flux',
    badge: '2 à 4 semaines',
    desc: "Nous automatisons un ou deux processus prioritaires sur vos données, en relevant le temps passé avant et après. Vous voyez le résultat sur un flux qui compte avant d'engager la suite.",
    livrable: "Un flux automatisé en service, et des mesures pour décider.",
  },
  {
    num: '03',
    title: 'Construction et raccordement',
    badge: 'Sur mesure',
    desc: "Nous construisons les automatisations retenues (enchaînements, assistants, agents), les relions à vos logiciels par API ou par MCP, puis installons les garde-fous : une personne valide avant tout envoi ou paiement, chaque action est journalisée, le RGPD est respecté.",
    livrable: "Des automatisations documentées, reliées à votre système d'information.",
  },
  {
    num: '04',
    title: 'Mise en production et passation',
    badge: 'Remise du système',
    desc: "Nous mettons en production par étapes, mesurons ce que chaque flux fait gagner et remettons la documentation complète. Vos référents apprennent à surveiller, corriger et étendre le système.",
    livrable: "Un système surveillé, dont votre équipe est propriétaire et qu'elle sait faire vivre.",
  },
]

/* ───────── Faire soi-même vs faire construire (tableau) ───────── */

const TABLE_AUTONOMIE = [
  {
    critere: 'Conception et fiabilité',
    classique: "Construite au fil de l'eau, fragile sur les cas particuliers",
    masteria: 'Architecture pensée d\'abord, contrôles et reprise sur erreur prévus',
  },
  {
    critere: 'Branchement sur vos logiciels',
    classique: 'Limité aux connecteurs proposés par la plateforme',
    masteria: 'Sur mesure, par API ou MCP, jusque dans vos logiciels métier',
  },
  {
    critere: 'Délai avant production',
    classique: "Long : l'équipe apprend en construisant",
    masteria: 'Court : une équipe qui monte ce type de système en continu',
  },
  {
    critere: 'Charge pour vos équipes',
    classique: 'Lourde : elles portent tout le chantier',
    masteria: 'Mesurée : nous construisons, vous validez',
  },
  {
    critere: 'Propriété et suite',
    classique: "À vous, mais dépendante de son auteur",
    masteria: 'À vous, documentée, avec des référents formés',
  },
]

/* ───────── Les processus automatisés le plus souvent ───────── */

const AUTOMATISATIONS = [
  { icon: Mail, title: 'Courriels et demandes entrantes', desc: "Chaque message est classé, un projet de réponse est préparé et la demande part vers la bonne personne. La boîte partagée cesse de déborder." },
  { icon: Receipt, title: 'Factures et relances', desc: "Les données des factures sont extraites et rapprochées des commandes ; les relances d'impayés sont rédigées, puis envoyées après validation." },
  { icon: FileText, title: 'Comptes rendus et reporting', desc: "Les réunions sont résumées, et le reporting de la semaine se consolide à partir de vos outils pour arriver commenté le lundi matin." },
  { icon: Target, title: 'Qualification des demandes commerciales', desc: "La demande est lue, notée selon vos critères, résumée en une fiche et confiée au bon commercial ; le CRM se met à jour sans saisie." },
  { icon: PenLine, title: 'Contenus récurrents', desc: "Un contenu de fond se décline en publications, lettres d'information ou fiches produits, dans votre ton, avec relecture humaine avant diffusion." },
  { icon: RefreshCw, title: 'Échanges entre logiciels', desc: "CRM, tableurs, logiciels métier : les informations passent de l'un à l'autre sans ressaisie, et les doublons disparaissent." },
]

/* ───────── Deux exemples tirés de nos missions (faits : src/data/etudes-de-cas.js) ───────── */

const EXEMPLES = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · trois personnes',
    text: "Autour d'Odoo, le progiciel de gestion où tout se passe dans cette PME, trois assistants sont prévus : le premier consultera les transporteurs avant chaque livraison, le deuxième saisira dans Odoo les arrivées en entrepôt, le troisième se chargera des devis puis des relances. Une formation sur place est programmée en octobre 2026.",
  },
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distribution IT B2B · 58 salariés',
    text: "Avant même la formation des dix référents, en juin 2026, la compétence qui rédige les relances de devis avait été éprouvée sur des devis de l'entreprise. D'autres compétences Claude bâtissent une cotation dès qu'un client écrit ; leur diffusion au reste des salariés est programmée entre octobre et décembre 2026.",
  },
]

/* ───────── Nous le construisons pour vous ───────── */

const BUILD_STEPS = [
  {
    icon: Compass,
    title: 'Cadrage et architecture',
    desc: "Vos processus deviennent un cahier précis : déclencheurs, traitements par l'IA, logiciels à relier, étapes de validation humaine.",
  },
  {
    icon: Cog,
    title: 'Construction',
    desc: "Enchaînements, assistants spécialisés, agents reliés à vos outils : chaque brique est écrite pour votre processus.",
  },
  {
    icon: Plug,
    title: 'Raccordement API et MCP',
    desc: "Branchement sur la gestion commerciale, l'ERP, la messagerie et les logiciels métier, avec journal des actions et respect du RGPD.",
  },
  {
    icon: Rocket,
    title: 'Mise en production',
    desc: "Ouverture progressive, mesure des gains, documentation et passation à vos référents.",
  },
]

/* ───────── Pourquoi Masteria ───────── */

const WHY_MASTERIA = [
  { icon: Target, title: "Un seul métier : l'IA", desc: "Depuis 2022, Masteria ne fait que de l'intelligence artificielle, du conseil en automatisation jusqu'à la construction. Les outils du marché, leurs limites et leurs pièges font partie de notre quotidien." },
  { icon: Cog, title: "Jusqu'à la production", desc: "Nous construisons, raccordons par API et MCP, testons et mettons en service : vous recevez un système qui tourne, documentation comprise." },
  { icon: Key, title: 'Vous restez propriétaire', desc: "Code, paramétrages et documentation vous appartiennent. Vos référents peuvent reprendre la main, et nous les formons s'ils le souhaitent." },
  { icon: MapPin, title: 'Depuis Lyon, là où sont vos équipes', desc: "Installés à Lyon, nous intervenons sur site dans toute la France, et au-delà quand vos équipes y travaillent, puis suivons les déploiements à distance." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Que fait une agence d'automatisation IA ?",
    a: "Elle repère les processus qui peuvent s'automatiser, conçoit l'architecture, construit les automatisations (enchaînements, assistants, agents) et les relie aux logiciels de l'entreprise jusqu'à la mise en production. Masteria mène ce travail de bout en bout, puis remet un système documenté dont vous êtes propriétaire ; vos équipes peuvent se former pour le faire évoluer.",
  },
  {
    q: "Automatisation classique ou automatisation par l'IA : que choisir ?",
    a: "L'automatisation classique, avec la RPA (des robots logiciels qui reproduisent les clics d'un utilisateur) ou des enchaînements sans code dans Make ou Zapier, suffit pour des tâches répétitives et bien structurées : recopier une donnée, envoyer un rappel, mettre à jour un tableau. L'IA prend le relais quand il faut lire un texte, trier des demandes, rédiger, extraire une information d'un document ou décider selon le contexte. La plupart des systèmes associent les deux : la tuyauterie sans code, la compréhension par l'IA.",
  },
  {
    q: "Quelle différence entre Masteria et une agence d'automatisation classique ?",
    a: "Beaucoup d'agences livrent un prototype sans code, puis facturent chaque évolution. Masteria conçoit, construit et raccorde des automatisations testées jusqu'à la production, remet le système documenté et peut former vos référents. Le cabinet, né en 2022, n'a jamais travaillé que sur l'IA ; le choix des outils suit votre existant, sans attache avec un éditeur.",
  },
  {
    q: "Combien coûte une mission d'automatisation IA ?",
    a: "La première demi-heure de cadrage est offerte. Le forfait de la mission dépend ensuite du nombre de processus, des logiciels à relier et de l'autonomie laissée à l'IA : quelques milliers d'euros pour un premier flux, des dizaines de milliers pour un ensemble en production, et un programme couvrant plusieurs sites dépasse 100 000 €. La formation des équipes, facturée 1 980 € HT la journée, relève du budget formation, que l'OPCO de votre branche couvre à hauteur de ce qu'autorisent ses règles et ses fonds ; quant à l'automatisation, elle n'est pas finançable par votre OPCO.",
  },
  {
    q: "Intervenez-vous à distance ou sur site ?",
    a: "Les deux. Le repérage des processus et la formation gagnent à se faire dans vos locaux ; le suivi du déploiement fonctionne bien en visio. Depuis sa base lyonnaise, Masteria se déplace partout en France ; à l'étranger aussi, lorsque vos sites s'y trouvent.",
  },
  {
    q: "Avec quels outils travaillez-vous ?",
    a: "Make, n8n, Power Automate et Zapier pour les enchaînements ; pour la partie IA, les assistants et modèles du marché (Claude, ChatGPT, Gemini, ceux de Microsoft et de Mistral AI). Nous partons de votre existant : une société déjà équipée de Microsoft 365 se tourne souvent vers Power Automate, et si les données doivent rester sur vos machines, n8n s'installe chez vous. L'outil découle du besoin.",
  },
  {
    q: "Proposez-vous du conseil en automatisation IA, ou seulement de la construction ?",
    a: "Les deux. Le repérage des processus relève déjà du conseil : nous classons les automatisations selon ce qu'elles rapportent et ce qu'elles coûtent à construire, puis remettons une feuille de route qui vous appartient. Libre à vous de la mettre en œuvre avec nous, en interne ou avec un autre prestataire. Comme la construction, ce travail de repérage n'est pas finançable par votre OPCO.",
  },
  {
    q: "Pouvez-vous automatiser les processus métier de mon entreprise ?",
    a: "Oui, fonction par fonction : finance, ressources humaines, service client, ventes, administration. Nous partons de vos logiciels actuels, sans refonte, et chaque processus automatisé garde un contrôle humain avant toute action sensible : un paiement, un envoi à l'extérieur, une décision touchant un salarié ou un client.",
  },
  {
    q: "Combien de temps dure une mission d'automatisation IA ?",
    a: "Le repérage des processus se mène en quelques jours. Un premier prototype tourne en deux à quatre semaines. La construction et le raccordement de l'ensemble suivent, selon le périmètre fixé après le cadrage ; chaque palier livre un résultat qui vous permet de décider de la suite.",
  },
  {
    q: "Comment choisir son agence d'automatisation IA ?",
    a: "Vérifiez trois points : que l'agence va jusqu'au bout, mise en production comprise, que code et documentation vous reviennent, et que le financement annoncé est exact, l'automatisation n'étant pas finançable par votre OPCO, au contraire des journées de formation. Une demi-heure de cadrage offerte, puis une feuille de route que vous gardez, sont de bons indices de sérieux.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Agence d'automatisation IA",
  description: "Repérage des processus répétitifs, architecture, construction d'enchaînements, d'assistants et d'agents, raccordement aux logiciels de l'entreprise (Make, n8n, Power Automate, Zapier, API, MCP), mise en production et passation aux référents.",
  url: 'https://www.master-ia.fr/agence-automatisation-ia',
  serviceType: 'Automatisation par intelligence artificielle',
  category: "Automatisation de processus d'entreprise par IA",
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
    { '@type': 'City', name: 'Lyon' },
  ],
  audience: { '@type': 'BusinessAudience', name: 'PME, ETI et grands comptes' },
  serviceOutput: "Automatisations en production, documentées, surveillées, dont le client garde la propriété",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  brand: { '@id': 'https://www.master-ia.fr/#organization' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Offres d'automatisation IA",
    itemListElement: [
      {
        '@type': 'Offer',
        name: '30 minutes de cadrage offertes',
        description: "Premier échange en visio ou au téléphone pour situer vos processus et les premiers flux à automatiser, sans engagement.",
        price: '0',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        name: "Mission d'automatisation au forfait",
        description: "Repérage, prototype, construction, raccordement et mise en production, chiffrés au forfait après cadrage selon le nombre de processus et de logiciels.",
      },
      {
        '@type': 'Offer',
        name: 'Formation des équipes (Qualiopi, actions de formation)',
        description: "Journée à 1 980 € HT ; groupe interne de douze personnes au plus, ou séance individuelle ; financement selon les règles et les fonds disponibles chez l'OPCO.",
        price: '1980',
        priceCurrency: 'EUR',
      },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/agence-automatisation-ia#article',
  headline: "L'agence d'automatisation IA qui rend vos équipes autonomes",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-12',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/agence-automatisation-ia#webpage' },
  about: [
    "Automatisation par intelligence artificielle",
    "Enchaînements automatisés avec l'IA",
    'Agents IA en entreprise',
    "Raccordement d'applications par API et MCP",
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

export default function AgenceAutomatisationIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections processus / pourquoi / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Agence automatisation IA', slug: SLUG },
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
        datePublished="2026-06-12"
        dateModified="2026-10-07"
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 72px) 24px clamp(56px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#94A3B8' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Agence automatisation IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 26 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
              <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Workflow size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
              </span>
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
                Automatisation des processus
              </span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 14px' }}>
              30 minutes de cadrage offertes
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            L'agence d'automatisation IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>qui rend vos équipes autonomes</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · mis à jour le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria repère les tâches répétitives de vos équipes, conçoit et construit les automatisations qui les prennent en charge, les relie à vos logiciels (Make, n8n, Power Automate, Zapier, API, MCP) et les met en service. <strong style={{ color: '#fff', fontWeight: 700 }}>Vous gardez la propriété d'un système documenté, que vos référents savent faire évoluer.</strong> Le premier échange, une demi-heure de cadrage, vous est offert.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Un outil sans code suffit pour copier une ligne d'un tableur à un autre. Dès qu'un processus touche à vos clients, à vos factures ou à vos stocks, il faut penser les cas particuliers, les contrôles et la reprise après erreur. Nous prenons en charge ce travail d'ingénierie, puis nous formons vos référents pour que l'automatisation ne dépende pas de nous.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <a href="#methode" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les quatre temps
            </a>
          </div>

          {/* tags de compétences */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
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

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: '#fff', padding: 'clamp(40px, 5vw, 56px) 24px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap' }}>
          {KEY_FIGURES.map(s => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>{s.num}</p>
              <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LES QUATRE TEMPS (timeline à rail) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Les quatre temps</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Comment se déroule une mission d'automatisation IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Quatre temps : un repérage des processus et une architecture, un prototype de deux à quatre semaines sur un ou deux flux, la construction et le raccordement à vos logiciels, puis la mise en production et la passation à vos référents. Avant le premier temps, une demi-heure de cadrage offerte permet de vérifier que l'automatisation est la bonne réponse.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 12, lineHeight: 1.7 }}>
            Chaque temps se termine par un résultat visible, et vous décidez à chaque fois de la suite.
          </p>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 44, lineHeight: 1.7 }}>
            Vous découvrez le sujet ? Notre <Link to="/automatisation-ia" style={aStyle}>guide de l'automatisation IA</Link> en pose les bases : définitions, usages par fonction, outils et budgets.
          </p>

          <div style={{ position: 'relative' }}>
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                    <span style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{step.badge}</span>
                  </div>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', maxWidth: 700 }}>{step.desc}</p>
                  <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.06em', display: 'block', marginBottom: 4 }}>À LA FIN DE CE TEMPS</span>
                    <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{step.livrable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAIRE SOI-MÊME OU FAIRE CONSTRUIRE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Faire soi-même ou faire construire</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Monter vos automatisations vous-même ou les faire construire ?
          </h2>

          <p style={answerStyle}>
            <strong>Un outil sans code dépanne sur des flux simples. Pour un processus qui engage l'entreprise, les cas particuliers, les branchements et la fiabilité demandent un travail d'ingénierie : le confier à une équipe qui le pratique chaque semaine mobilise moins vos salariés et vous laisse un système documenté.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 860 }}>
            Les deux approches cohabitent souvent dans une même entreprise. Le tableau les compare sur cinq critères.
          </p>

          <div style={{ ...cardStyle, overflowX: 'auto', marginBottom: 20 }}>
            <table aria-label="Comparatif entre monter ses automatisations soi-même sans code et les faire construire par Masteria" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ ...thStyle, width: '26%' }}>Critère</th>
                  <th scope="col" style={{ ...thStyle, width: '37%' }}>Vous-même, sans code</th>
                  <th scope="col" style={{ ...thStyle, width: '37%', color: c }}>Construit par Masteria</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_AUTONOMIE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ ...tdStyle, textAlign: 'left', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 14 }}>{row.critere}</th>
                    <td style={tdStyle}>{row.classique}</td>
                    <td style={{ ...tdStyle, color: '#0A0A0A', fontWeight: 500 }}>{row.masteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 860 }}>
            <Check size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
            <span>Notre position : un processus qui touche vos clients, vos factures ou vos stocks mérite une automatisation conçue et testée par des spécialistes. Vous en restez propriétaire, et vos équipes peuvent se former pour la faire évoluer.</span>
          </p>
        </div>
      </section>

      {/* ── PROCESSUS FRÉQUENTS (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Processus fréquents</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quels processus automatisons-nous le plus souvent ?
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Six familles reviennent d'une mission à l'autre. Chacune part des logiciels que vous utilisez déjà, qu'il n'est pas question de remplacer, et garde un contrôle humain sur ce qui engage l'entreprise.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {AUTOMATISATIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconBox icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Deux exemples tirés de nos missions */}
              <h3 style={{ ...h3Style, fontSize: 17, margin: '36px 0 16px' }}>Deux exemples tirés de nos missions de 2026</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
                {EXEMPLES.map(({ id, icon: Icon, sector, text }) => (
                  <article key={id} style={{ ...cardStyle, borderTop: `3px solid ${c}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                      </span>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                    </div>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                    <Link to={`/etudes-de-cas-ia#${id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                      Lire l'étude de cas
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>

              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour choisir par où commencer dans une PME, notre article sur <Link to="/blog/automatisation-ia-pme-processus-prioritaires" style={aStyle}>les processus à automatiser en priorité</Link> donne des repères. Vous trouverez d'autres idées dans nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>exemples d'usages par fonction</Link> et sur nos pages <Link to="/ia-secteurs" style={aStyle}>IA par secteur</Link>. Quand un enchaînement figé ne suffit plus, nous examinons avec vous l'intérêt d'<Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link>, encadrés par des garde-fous adaptés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOUS LE CONSTRUISONS POUR VOUS (ancre sombre, pivot service) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', color: '#fff', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>
            Nous le construisons pour vous
          </div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 38px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 18px', lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: 820 }}>
            Confiez-nous la construction de vos automatisations
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '22px 26px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 860 }}>
            <strong style={{ color: '#fff' }}>Vous décrivez le résultat attendu. Nous concevons l'architecture, construisons les enchaînements, les assistants et les agents, les relions à vos logiciels par API ou MCP, puis les mettons en production. Vous recevez un système en service, documenté et surveillé, dont vous êtes propriétaire.</strong>
          </p>

          <p style={{ fontSize: 16, color: '#B4C0D3', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 760 }}>
            C'est le cœur de cette offre : un travail de construction confié à une équipe spécialisée en IA depuis la création du cabinet, en 2022. Vos équipes valident les étapes et gardent la main sur les décisions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginBottom: 44 }}>
            {BUILD_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#60A5FA', letterSpacing: '0.06em', marginBottom: 6 }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16.5, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '15px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)' }}>
              Notre agence de développement IA
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Votre besoin dépasse l'enchaînement de tâches et demande un logiciel à part entière ? La page <Link to="/outils-ia-sur-mesure" style={{ color: '#60A5FA', fontWeight: 600 }}>développement IA sur mesure</Link> décrit les outils que nous construisons dans ce cas.
          </p>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA (éditorial asymétrique, cartes à filet supérieur) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi choisir Masteria comme agence d'automatisation IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Parce que nous allons jusqu'à la mise en production : Masteria conçoit, construit et raccorde vos automatisations, là où beaucoup de prestataires s'arrêtent au schéma ou au prototype. Le cabinet travaille sur l'IA depuis 2022, intervient chez des clients de France, d'Europe, des États-Unis et d'Inde, et vous laisse propriétaire de ce qu'il livre.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {WHY_MASTERIA.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Si votre besoin dépasse l'automatisation (stratégie d'ensemble, gouvernance, conformité), notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> prend le relais. Nos <Link to="/solutions-ia" style={aStyle}>solutions IA pour entreprises</Link> donnent la vue d'ensemble, et <CadrageLink style={aStyle}>30 minutes de cadrage offertes</CadrageLink> suffisent pour situer vos priorités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section id="tarifs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Tarifs</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Combien coûte une agence d'automatisation IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', marginBottom: 36 }}>
            <strong>Chez Masteria, la première demi-heure de cadrage est offerte. La mission se chiffre ensuite au forfait, selon le nombre de processus, le nombre de logiciels concernés et la marge d'action laissée à l'IA : quelques milliers d'euros pour un premier flux, des dizaines de milliers pour un ensemble de processus en production, et un programme multi-sites passe au-delà de 100 000 €. La formation des équipes peut s'y ajouter, à 1 980 € HT la journée.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 28 }}>
            <div style={{ ...cardStyle, padding: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>30 minutes de cadrage</div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, marginBottom: 20, letterSpacing: '-0.01em' }}>Offertes</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Vos processus et vos logiciels passés en revue', 'Les premiers flux à automatiser repérés', 'Une idée du budget et des étapes', 'Sans engagement'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 10, lineHeight: 1.6 }}>
                    <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ ...cardStyle, padding: 32, border: `2px solid ${c}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Mission d'automatisation</div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, marginBottom: 20, letterSpacing: '-0.01em' }}>Au forfait</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Repérage des processus et architecture', 'Prototype sur un ou deux flux', 'Construction et raccordement par API, MCP', 'Mise en production, documentation, passation'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 10, lineHeight: 1.6 }}>
                    <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ ...cardStyle, padding: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Formation (en complément)</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 20 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.01em' }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>/ jour HT</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Pour rendre vos référents autonomes', "Intra (jusqu'à 12 participants) ou individuel", 'Qualiopi au titre des actions de formation', "Financement OPCO selon ses règles et ses fonds"].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 10, lineHeight: 1.6 }}>
                    <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 860 }}>
            Pour situer le budget avant le cadrage, notre page sur le <Link to="/prix-projet-ia" style={aStyle}>prix d'un projet IA</Link> détaille les ordres de grandeur. Côté financement, la règle est simple : une mission d'automatisation n'est pas finançable par votre OPCO ; seuls les jours de formation peuvent l'être, et un prestataire qui promet le contraire vous expose à un refus de prise en charge. Pour former vos équipes en parallèle du déploiement, la page <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> présente le programme de deux jours.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Agence d'automatisation IA : vos questions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Un processus particulier vous préoccupe ? Décrivez-le-nous, nous vous dirons s'il s'automatise.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Décrire un processus
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
            Pour aller plus loin sur l'automatisation
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Faire construire un outil complet, comprendre le sujet ou former vos équipes en parallèle.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Quand le besoin dépasse l'enchaînement de tâches : agents, applications, connecteurs." },
              { label: 'Développement IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Les outils que nous livrons quand un logiciel à part entière s'impose." },
              { label: "Automatisation IA : le guide", href: '/automatisation-ia', tag: 'Guide', desc: "Définitions, usages par fonction, outils et budgets, pour poser les bases." },
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Formation', desc: "Deux jours pour que vos équipes montent leurs propres enchaînements ; financement OPCO selon ses règles." },
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
                    Découvrir
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan, fondateur de Masteria, pilote chaque mission d'automatisation, du repérage des processus jusqu'à la passation. Il a mis cette page à jour le 7 octobre 2026 ; son parcours se lit sur <Link to="/mathias-nizan" style={aStyle}>sa page</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Parlons de vos processus
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 580 }}>
              Dites-nous quelles tâches prennent le plus de temps à vos équipes, et dans quels logiciels elles se passent. Nous vous proposons sous 24 heures un créneau pour la demi-heure de cadrage offerte ; viennent ensuite, si vous le souhaitez, le repérage des processus, la feuille de route et le chiffrage.
            </p>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Agence d'automatisation IA basée à Lyon · système remis à votre équipe · formation en complément, certifiée Qualiopi (actions de formation)
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui construit vos automatisations (fondateur + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui construit vos automatisations</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des spécialistes de l'automatisation, réunis par le fondateur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Pour chaque mission, Mathias Nizan puise dans le réseau d'indépendants de Masteria : cinq développeurs IA environ construisent et raccordent, une dizaine de consultants repèrent les processus, une vingtaine de formateurs assurent la passation. Il suit lui-même la mission jusqu'au bout. Masteria est Activateur France Num, sans attache avec un éditeur. Consultez nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link>.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['4', 'temps, du repérage à la passation'],
              ['API · MCP', 'pour relier vos logiciels'],
              ['Activateur', 'France Num'],
              ['2022', 'année de création, à Lyon'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources lean />
    </>
  )
}
