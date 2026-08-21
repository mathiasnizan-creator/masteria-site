import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, FileSearch, BarChart3, Workflow, Globe, Sparkles,
  Compass, FlaskConical, Code2, Rocket, RefreshCw, ShieldCheck, KeyRound,
  Server, GraduationCap, MapPin, Building2, Check, Minus,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page offre « outils IA sur mesure » (slug /outils-ia-sur-mesure).
 * Angle : le LIVRABLE — l'outil, l'application, le copilote métier — « de l'idée
 * à l'outil », propriété du code et des données, sécurité, maintenance (TMA).
 * Cibles : « outils ia sur mesure », « application ia sur mesure »,
 * « logiciel ia sur mesure », « développement application ia »,
 * « copilote interne entreprise », « assistant ia interne », sec. « web dev ia ».
 * Anti-cannibalisation : la page /agence-developpement-ia parle de l'AGENCE / du
 * service ; ici on parle du PRODUIT. On LIE vers elle, on ne la duplique pas.
 * Maillage : /agence-developpement-ia, /agence-automatisation-ia,
 * /agents-ia-entreprise, /conseil-intelligence-artificielle, /formation-intelligence-artificielle.
 * Design premium charte Masteria : icônes lucide (zéro emoji), kickers, cartes
 * radius 16, tableau de décision honnête, CTA sombre. Accent bleu #2563EB.
 */

const SLUG = 'outils-ia-sur-mesure'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Outils IA sur mesure : applications & copilotes | Masteria"
const META_DESC = "Outils IA sur mesure : copilotes internes, assistants documentaires et applications métier pour vos processus. Code et données qui vous appartiennent."
const KEYWORDS = "outils ia sur mesure, outil ia personnalisé, solution ia sur mesure, développement outil ia, logiciel ia sur mesure"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1100, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 860 }

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
  { icon: KeyRound,   label: 'Code et données qui vous appartiennent' },
  { icon: ShieldCheck, label: 'Hébergement UE possible' },
  { icon: MapPin,     label: 'Lyon · France · Suisse · Belgique' },
  { icon: Building2,  label: 'Spécialisés IA depuis 2022' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Outils', value: "Copilote interne, assistant documentaire (RAG), application web IA, automatisation métier, agent spécialisé" },
  { label: 'Démarche', value: "De l'idée à l'outil : cadrage, maquette et POC, développement, mise en service, évolutions" },
  { label: 'Propriété', value: "Code source et données au client, aucun enfermement chez un éditeur" },
  { label: 'Confidentialité', value: "Données non utilisées pour entraîner des modèles tiers · hébergement UE possible" },
  { label: 'Maintenance', value: "TMA (corrections, évolutions, montée de version des modèles) ou transfert à vos équipes" },
  { label: 'Délai', value: "Premier prototype en quelques semaines · France, Suisse, Belgique" },
]

/* ───────── 1. Quels outils IA construit-on ? (6 cartes IconBox) ───────── */

const OUTILS = [
  {
    icon: Bot,
    title: 'Copilote interne',
    desc: "Un assistant IA branché sur vos données et vos règles métier : il répond aux questions de vos équipes, rédige avec votre langage et déclenche les bonnes actions, sans recopier des informations dans un outil grand public.",
    href: '/copilote-ia-interne',
    linkLabel: 'Voir le copilote IA interne',
  },
  {
    icon: FileSearch,
    title: 'Assistant documentaire (RAG)',
    desc: "Une recherche en langage naturel dans vos documents, contrats, procédures et bases de connaissances. Chaque réponse cite sa source, ce qui rend l'outil vérifiable et fiable au quotidien.",
    href: '/assistant-documentaire-ia',
    linkLabel: "Voir l'assistant documentaire IA",
  },
  {
    icon: BarChart3,
    title: "Outil d'analyse et de reporting IA",
    desc: "Lecture et synthèse automatiques de vos données : tableaux de bord commentés, détection de signaux, rapports générés à la demande à partir de vos sources existantes.",
  },
  {
    icon: Workflow,
    title: 'Automatisation métier',
    desc: "Un outil qui prend en charge un processus de bout en bout : réception, traitement, contrôle puis restitution, avec une validation humaine sur les décisions sensibles et une traçabilité complète.",
    href: '/automatisation-documentaire-ia',
    linkLabel: "Voir l'automatisation documentaire IA",
  },
  {
    icon: Globe,
    title: 'Application web IA dédiée',
    desc: "Une interface propre à votre besoin, accessible depuis le navigateur, avec gestion des accès et des rôles. Vos équipes disposent d'un vrai logiciel, pas d'un assemblage fragile de scripts.",
  },
  {
    icon: Sparkles,
    title: 'Agent spécialisé',
    desc: "Un agent IA cadré sur une mission précise, capable d'enchaîner plusieurs étapes pour atteindre un objectif, avec les garde-fous qu'exige toute autonomie confiée à une machine.",
    href: '/agents-ia-entreprise',
    linkLabel: 'Voir les agents IA en entreprise',
  },
]

/* ───────── 2. Tableau d'aide à la décision ───────── */

const DECISION_ROWS = [
  {
    critere: 'Coût initial',
    saas: { txt: 'Faible : abonnement par utilisateur', tone: 'plus' },
    nocode: { txt: 'Modéré : licences + mise en place', tone: 'neutral' },
    surmesure: { txt: 'Élevé : développement à financer', tone: 'minus' },
  },
  {
    critere: 'Adéquation au besoin',
    saas: { txt: "Standard : vous vous adaptez à l'outil", tone: 'minus' },
    nocode: { txt: 'Bonne sur des cas simples', tone: 'neutral' },
    surmesure: { txt: "Totale : l'outil épouse vos processus", tone: 'plus' },
  },
  {
    critere: 'Dépendance éditeur',
    saas: { txt: "Forte : tarifs et roadmap subis", tone: 'minus' },
    nocode: { txt: 'Réelle : la plateforme reste un tiers', tone: 'neutral' },
    surmesure: { txt: 'Faible : vous maîtrisez le socle', tone: 'plus' },
  },
  {
    critere: 'Confidentialité des données',
    saas: { txt: 'Variable selon le contrat éditeur', tone: 'neutral' },
    nocode: { txt: 'Données qui transitent par la plateforme', tone: 'minus' },
    surmesure: { txt: 'Maîtrisée : hébergement UE possible', tone: 'plus' },
  },
  {
    critere: 'Évolutivité',
    saas: { txt: "Limitée aux options de l'éditeur", tone: 'minus' },
    nocode: { txt: 'Bornée par la plateforme', tone: 'neutral' },
    surmesure: { txt: 'Ouverte : on étend ce qui existe', tone: 'plus' },
  },
]

/* ───────── 3. De l'idée à l'outil (process) ───────── */

const PROCESS = [
  {
    num: '01',
    icon: Compass,
    title: 'Cadrage du besoin',
    desc: "Nous partons du problème métier, pas de la technologie. Nous identifions l'usage réel, les utilisateurs, les données disponibles et le critère de réussite, puis nous écartons ce qui ne mérite pas d'être construit.",
  },
  {
    num: '02',
    icon: FlaskConical,
    title: 'Maquette et POC',
    desc: "Nous produisons rapidement une maquette puis une preuve de concept sur un périmètre réduit. Vous manipulez quelque chose de concret et décidez d'engager le développement sur des bases vérifiées.",
  },
  {
    num: '03',
    icon: Code2,
    title: 'Développement',
    desc: "Nous construisons l'outil par incréments, avec des points réguliers et des versions testables. Le choix du modèle (multi-LLM) et de l'architecture découle du besoin, jamais d'un effet de mode.",
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Mise en service',
    desc: "Nous déployons l'outil dans votre environnement, connectons vos applications, posons les accès et les garde-fous, puis accompagnons la prise en main des premiers utilisateurs.",
  },
  {
    num: '05',
    icon: RefreshCw,
    title: 'Évolutions',
    desc: "Une fois l'outil en production, nous le faisons vivre : corrections, nouvelles fonctions, montée de version des modèles. Vous restez décisionnaire du rythme et du périmètre.",
  },
]

/* ───────── 4. Propriété, sécurité et maintenance ───────── */

const PROPRIETE = [
  {
    icon: KeyRound,
    title: 'Vous possédez le code et les données',
    desc: "L'outil est le vôtre. Le code source vous revient, vos données restent vos données : aucune dépendance cachée, aucun enfermement chez un éditeur. Vous pouvez le faire évoluer avec nous ou avec une autre équipe.",
  },
  {
    icon: ShieldCheck,
    title: 'Confidentialité par conception',
    desc: "Vos données ne servent jamais à entraîner des modèles tiers et ne sortent pas de votre périmètre sans raison. Les flux sont tracés, les accès cloisonnés par rôle, et chaque traitement reste documenté.",
  },
  {
    icon: Server,
    title: 'Hébergement maîtrisé, UE possible',
    desc: "Selon vos exigences de conformité, l'outil s'héberge dans l'Union européenne, sur votre cloud ou sur une infrastructure dédiée. Le choix se fait avec vous, en fonction de la sensibilité des données traitées.",
  },
  {
    icon: RefreshCw,
    title: 'Maintenance et évolutions (TMA)',
    desc: "Un outil IA n'est pas figé : les modèles progressent, vos besoins changent. Nous proposons une maintenance applicative et des évolutions au fil de l'eau, ou un transfert à vos équipes si vous préférez internaliser.",
  },
]

/* ───────── 6. FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un outil IA sur mesure ?",
    a: "Un outil IA sur mesure est une application développée spécifiquement pour une entreprise, autour de ses processus et de ses données, plutôt qu'un logiciel standard du marché. Il peut prendre la forme d'un copilote interne, d'un assistant documentaire, d'une application web ou d'un agent spécialisé. Chez Masteria, ces outils s'appuient sur un ou plusieurs grands modèles de langage (LLM), s'intègrent à votre système d'information existant, et leur code comme leurs données restent votre propriété.",
  },
  {
    q: "Quelle différence entre un outil IA sur mesure et un logiciel SaaS du marché ?",
    a: "Un logiciel SaaS est conçu pour le plus grand nombre : vous adaptez votre fonctionnement à l'outil, vos données transitent par l'éditeur et vous dépendez de sa feuille de route et de ses tarifs. Une application IA sur mesure épouse au contraire vos processus, garde la maîtrise de vos données (hébergement dans l'Union européenne possible) et reste évolutive parce que vous en possédez le socle. Le SaaS suffit quand le besoin est standard ; le sur mesure se justifie dès que l'adéquation au besoin, la confidentialité ou l'évolutivité deviennent décisives.",
  },
  {
    q: "Peut-on développer un copilote IA interne sur mesure pour nos équipes ?",
    a: "Oui. Le copilote IA interne est l'un des outils que nous développons le plus souvent : un assistant branché sur vos données et vos règles métier, qui répond aux questions de vos collaborateurs, rédige avec votre langage et déclenche les bonnes actions, sans recopier d'informations dans un outil grand public. Les accès sont cloisonnés par rôle et les traitements tracés. C'est l'équivalent privé et maîtrisé d'un assistant IA, conçu pour votre organisation.",
  },
  {
    q: "Combien coûte un outil IA sur mesure ?",
    a: "Le budget dépend du périmètre : un copilote documentaire branché sur quelques sources n'a pas le coût d'une application métier complète avec gestion des accès et intégrations. Nous chiffrons sur devis après un cadrage, et nous commençons souvent par un prototype à coût maîtrisé pour valider la valeur avant d'engager le développement complet. Le développement sur mesure n'est pas finançable par un OPCO ; seul un éventuel volet de formation à l'usage de l'outil peut l'être.",
  },
  {
    q: "Faut-il remplacer nos logiciels actuels ?",
    a: "Non. Un outil IA sur mesure vient compléter votre système d'information, pas le remplacer. Nous nous intégrons à votre existant (CRM, ERP, messagerie, bases documentaires) et l'outil se branche sur ces sources. L'objectif est d'ajouter une capacité là où le marché ne répond pas, sans refonte de ce qui fonctionne déjà.",
  },
  {
    q: "Nos données sont-elles confidentielles ?",
    a: "Oui, c'est une exigence de conception. Vos données ne servent pas à entraîner des modèles tiers, les accès sont cloisonnés par rôle et les traitements sont tracés. Selon la sensibilité, l'outil s'héberge dans l'Union européenne, sur votre cloud ou sur une infrastructure dédiée. Nous arbitrons ces choix avec vous au cadrage, en fonction de votre politique de sécurité.",
  },
  {
    q: "Qui maintient l'outil ensuite ?",
    a: "Vous décidez. Le code et les données vous appartiennent, vous n'êtes donc jamais captif. Nous proposons une maintenance applicative et des évolutions au fil de l'eau (corrections, nouvelles fonctions, montée de version des modèles), mais nous pouvons aussi former vos équipes pour qu'elles reprennent la main et internalisent la maintenance.",
  },
  {
    q: "Combien de temps pour un premier prototype ?",
    a: "Selon la complexité, un premier prototype manipulable se construit généralement en quelques semaines. Cette étape vise à prouver la valeur sur un périmètre réduit et en conditions réelles, avant d'engager le développement complet. Le calendrier précis se fixe au cadrage, une fois le besoin et les données clarifiés.",
  },
  {
    q: "Avec quels modèles d'IA travaillez-vous ?",
    a: "Nous sommes multi-LLM et indépendants des éditeurs : nous retenons le modèle adapté à chaque usage (ChatGPT, Claude, Gemini, Mistral, ou un modèle hébergé en propre quand la confidentialité l'impose). Le choix du modèle découle du besoin, du niveau de confidentialité et du budget, jamais d'un parti pris commercial.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Développement d'outils IA sur mesure",
  description: "Conception d'outils IA sur mesure : copilotes internes, assistants documentaires (RAG), applications web IA, automatisations métier et agents spécialisés, adaptés aux processus et aux données du client. De l'idée à l'outil, code et données propriété du client, hébergement UE possible, maintenance et évolutions.",
  url: 'https://www.master-ia.fr/outils-ia-sur-mesure',
  serviceType: "Développement d'outils IA sur mesure",
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/outils-ia-sur-mesure',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Types d'outils IA développés sur mesure",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copilote IA interne', description: "Assistant IA branché sur vos données et vos règles métier, accès cloisonnés par rôle." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Assistant documentaire IA (RAG)', description: "Recherche en langage naturel dans vos documents, avec réponses sourcées." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Outil d'analyse et de reporting IA", description: "Synthèse de vos données, tableaux de bord commentés et rapports générés à la demande." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation métier IA', description: "Prise en charge d'un processus de bout en bout, avec validation humaine et traçabilité." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application web IA dédiée', description: "Interface propre à votre besoin, gestion des accès et des rôles." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent IA spécialisé', description: "Agent cadré sur une mission précise, avec garde-fous." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/outils-ia-sur-mesure#article',
  headline: 'Outils IA sur mesure : applications et copilotes métier conçus pour vous',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/outils-ia-sur-mesure#webpage' },
  about: ['Outils IA sur mesure', "Développement d'applications IA", 'Copilote IA interne', 'Assistant documentaire (RAG)'],
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

/* Cellule de tableau de décision : pastille de tonalité + texte. */
function DecisionCell({ cell, highlight, dark }) {
  const toneColor = dark
    ? (cell.tone === 'plus' ? '#60A5FA' : cell.tone === 'minus' ? '#64748B' : '#94A3B8')
    : (cell.tone === 'plus' ? c : cell.tone === 'minus' ? '#9CA3AF' : '#6B7280')
  const tdBase = dark
    ? { padding: '14px 18px', fontSize: 14.5, lineHeight: 1.65, verticalAlign: 'top', borderTop: '1px solid #1E293B' }
    : tdStyle
  const cellBg = dark
    ? (highlight ? 'rgba(37,99,235,0.10)' : undefined)
    : (highlight ? '#F5F8FF' : undefined)
  const textColor = dark
    ? (highlight ? '#fff' : '#B4C0D3')
    : (highlight ? '#0A0A0A' : '#374151')
  return (
    <td style={{ ...tdBase, background: cellBg }}>
      <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 8 }}>
        <span aria-hidden="true" style={{ flexShrink: 0, marginTop: 2, color: toneColor }}>
          {cell.tone === 'plus'
            ? <Check size={15} strokeWidth={2.6} />
            : <Minus size={15} strokeWidth={2.6} />}
        </span>
        <span style={{ color: textColor, fontWeight: highlight ? 500 : 400 }}>{cell.txt}</span>
      </span>
    </td>
  )
}

export default function OutilsIASurMesurePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections livrables / propriété / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Outils IA sur mesure', slug: SLUG },
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
        datePublished="2026-06-13"
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#94A3B8' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Outils IA sur mesure</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Développement sur mesure
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Outils IA sur mesure :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>applications et copilotes métier conçus pour vous</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria conçoit des outils IA sur mesure : copilotes internes, assistants documentaires et applications métier adaptés à vos processus et à vos données, là où les outils du marché ne suffisent pas. Vous obtenez un vrai logiciel, dont le <strong style={{ color: '#fff', fontWeight: 700 }}>code et les données vous appartiennent</strong>.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Les solutions du marché couvrent les besoins standards. Dès que votre processus, vos données ou votre niveau de confidentialité sortent du cadre, il faut un outil pensé pour vous. Nous le construisons de l'idée à la mise en service, puis nous le faisons vivre. Spécialistes de l'IA depuis 2022, basés à Lyon, nous intervenons en France, en Suisse et en Belgique.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Décrivez-nous votre besoin
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#process" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir la démarche
            </a>
          </div>

          {/* chips */}
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
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 116px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── 1. QUELS OUTILS IA CONSTRUIT-ON ? (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Livrables</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quels outils IA construit-on ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Masteria construit six grandes familles d'outils IA : copilote interne branché sur vos données, assistant documentaire avec recherche sourcée (RAG), outil d'analyse et de reporting, automatisation métier de bout en bout, application web IA dédiée et agent spécialisé. Chacun est conçu pour un usage réel, pas pour cocher une case « IA ».</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le point commun de ces livrables : ils partent de votre besoin et de vos données, et ils s'intègrent à vos outils existants. Voici ce que nous concevons le plus souvent.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {OUTILS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconBox icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    {item.href && (
                      <Link to={item.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, marginTop: 16 }}>
                        {item.linkLabel}
                        <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Certains de ces outils ont leur page dédiée, avec cas d'usage et exemples : <Link to="/chatbot-ia-sur-mesure" style={aStyle}>chatbot IA sur mesure</Link> et <Link to="/integration-llm-rag" style={aStyle}>intégration LLM / RAG</Link>. Pour vous projeter, parcourez nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>cas d'usage de l'IA en entreprise</Link>, qui illustrent les outils déjà déployés par métier. Vous cherchez d'abord un partenaire de réalisation plutôt qu'un type d'outil précis ? Notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> détaille la démarche d'ingénierie, l'équipe et les modalités de collaboration. Pour automatiser des processus existants avec des outils du marché, voyez plutôt notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link>. Pas encore sûr du périmètre ? Un <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA gratuit</Link> aide à cadrer le bon outil avant tout développement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SAAS / NO-CODE / SUR MESURE (ancre sombre — tableau de décision) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Aide à la décision</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 860 }}>
            Outil du marché, no-code ou sur mesure ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 860 }}>
            <strong style={{ color: '#fff' }}>Le sur mesure n'est pas toujours la bonne réponse. Un SaaS du marché suffit quand le besoin est standard ; un assemblage no-code convient à des cas simples ; le développement sur mesure se justifie quand l'adéquation au besoin, la confidentialité des données ou l'évolutivité deviennent décisives. Voici un comparatif honnête pour trancher.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 860 }}>
            Nous n'avons aucun intérêt à vous vendre du développement si une solution existante fait l'affaire. Ce tableau sert à situer votre besoin, critère par critère, avant d'engager quoi que ce soit.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 20 }}>
            <table aria-label="Comparatif entre SaaS du marché, assemblage no-code et développement sur mesure" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>SaaS du marché</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Assemblage no-code</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Développement sur mesure</th>
                </tr>
              </thead>
              <tbody>
                {DECISION_ROWS.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 700, color: '#F8FAFC', fontFamily: 'Nunito, sans-serif', fontSize: 14, verticalAlign: 'top', lineHeight: 1.5, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>{row.critere}</th>
                    <DecisionCell cell={row.saas} dark />
                    <DecisionCell cell={row.nocode} dark />
                    <DecisionCell cell={row.surmesure} highlight dark />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: 0, maxWidth: 860 }}>
            <Check size={18} strokeWidth={2.4} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
            <span>En clair : choisissez le sur mesure quand l'outil doit épouser un processus singulier, quand vos données ne peuvent pas transiter par un tiers, ou quand vous comptez faire évoluer l'outil dans la durée. Sinon, un outil existant fait souvent très bien le travail.</span>
          </p>
        </div>
      </section>

      {/* ── 3. DE L'IDÉE À L'OUTIL (timeline à rail, rail étroit) ── */}
      <section id="process" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Démarche</Kicker>
          <h2 style={h2Style}>
            De l'idée à l'outil
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Nous suivons cinq étapes : cadrage du besoin, maquette et preuve de concept, développement par incréments, mise en service dans votre environnement, puis évolutions au fil de l'eau. Vous validez la valeur sur un prototype avant d'engager le développement complet, et vous restez décisionnaire à chaque étape.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            La même trajectoire pour chaque projet : comprendre, prouver, construire, déployer, faire vivre. Chaque étape produit quelque chose de concret et conditionne le passage à la suivante.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {PROCESS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === PROCESS.length - 1 ? '18px 0 0' : '18px 0'),
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

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0' }}>
            Quand le livrable repose surtout sur de l'autonomie confiée à l'IA, nous évaluons avec vous l'opportunité d'<Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link>, avec les garde-fous qu'ils exigent.
          </p>
        </div>
      </section>

      {/* ── 4. PROPRIÉTÉ, SÉCURITÉ ET MAINTENANCE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Propriété & sécurité</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Propriété, sécurité et maintenance
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un outil sur mesure vous appartient : le code source vous revient, vos données restent les vôtres et ne servent pas à entraîner des modèles tiers. L'hébergement peut se faire dans l'Union européenne, et la maintenance applicative (corrections, évolutions, montée de version des modèles) se poursuit avec nous ou s'internalise dans vos équipes.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 860 }}>
            Sur un projet à fort enjeu, ces trois questions comptent autant que les fonctionnalités : à qui appartient l'outil, où vivent les données, et qui le maintient dans le temps. Voici nos réponses.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
            {PROPRIETE.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 860 }}>
            Si votre réflexion porte sur la stratégie IA d'ensemble (gouvernance, conformité, feuille de route, choix de faire ou faire faire), notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en intelligence artificielle</Link> intervient en amont du choix d'un outil.
          </p>
        </div>
      </section>

      {/* ── 5. VOS ÉQUIPES MONTENT EN COMPÉTENCE (bloc secondaire formation) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Adoption</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Vos équipes montent en compétence
          </h2>

          <p style={answerStyle}>
            <strong>Un outil n'a de valeur que s'il est utilisé. À la mise en service, nous formons vos équipes à l'usage de l'outil que nous avons construit, pour qu'elles l'adoptent vite et en tirent le meilleur. Masteria est aussi un organisme de formation IA, ce qui rend ce transfert de compétence naturel.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 860 }}>
            Construire l'outil et former à son usage sont deux faces du même projet. Nos formateurs connaissent l'outil de l'intérieur, puisqu'ils l'ont conçu avec vous : la prise en main des premiers utilisateurs en est d'autant plus rapide.
          </p>

          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: '28px 30px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <IconBox icon={GraduationCap} />
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>Former vos équipes à l'usage de l'IA</h3>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>
                Au-delà de la prise en main de l'outil, nous formons vos collaborateurs aux usages professionnels de l'IA, pour qu'ils en exploitent tout le potentiel au quotidien. Plus de 1 500 professionnels ont déjà été formés par Masteria.
              </p>
              <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                Découvrir nos formations à l'intelligence artificielle
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Outils IA sur mesure : les questions fréquentes
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
            Choisir le bon partenaire, automatiser l'existant, ou cadrer la stratégie IA en amont.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Agence', desc: "L'équipe, la démarche d'ingénierie et les modalités pour faire développer votre outil IA." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Automatiser des processus existants avec les outils du marché, vos équipes restent autonomes." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Quand confier une mission autonome à un agent IA, et avec quels garde-fous." },
              { label: "Prix d'une application IA sur mesure", href: '/prix-projet-ia', tag: 'Budget', desc: "Les fourchettes de prix d'un projet IA sur mesure, du prototype à l'application complète." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA en amont du choix d'un outil." },
              { label: 'Toutes nos solutions IA', href: '/solutions-ia', tag: 'Solutions IA', desc: "Du diagnostic au déploiement : la vue d'ensemble de nos accompagnements IA pour entreprises." },
              { label: 'Formation vibe coding', href: '/formation-vibe-coding', tag: 'Formation', desc: "Créer soi-même un prototype ou un outil interne en décrivant son besoin à l'IA, avec Lovable, Bolt ou Cursor." },
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
              Décrivez-nous votre besoin
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 580 }}>
              Expliquez-nous le problème métier que vous voulez résoudre et les données dont vous disposez. Nous revenons vers vous sous 24 heures avec une première lecture : faisabilité, périmètre d'un prototype et grandes options. Vous repartez avec une vision claire, avec ou sans nous.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Décrivez-nous votre besoin
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Code et données qui vous appartiennent · Spécialistes IA depuis 2022 · Lyon, France, Suisse, Belgique
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
