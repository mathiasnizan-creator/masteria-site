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
const H1 = "Outils IA sur mesure : applications et copilotes métier conçus pour vous"

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

/* Cellule de tableau de décision : pastille de tonalité + texte. */
function DecisionCell({ cell, highlight }) {
  const toneColor = cell.tone === 'plus' ? c : cell.tone === 'minus' ? '#9CA3AF' : '#6B7280'
  return (
    <td style={{ ...tdStyle, background: highlight ? '#F5F8FF' : undefined }}>
      <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 8 }}>
        <span aria-hidden="true" style={{ flexShrink: 0, marginTop: 2, color: toneColor }}>
          {cell.tone === 'plus'
            ? <Check size={15} strokeWidth={2.6} />
            : <Minus size={15} strokeWidth={2.6} />}
        </span>
        <span style={{ color: highlight ? '#0A0A0A' : '#374151', fontWeight: highlight ? 500 : 400 }}>{cell.txt}</span>
      </span>
    </td>
  )
}

export default function OutilsIASurMesurePage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Outils IA sur mesure', slug: SLUG },
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
            <span style={{ color: c, fontWeight: 600 }}>Outils IA sur mesure</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Code2 size={16} strokeWidth={2.2} aria-hidden="true" />
              Développement sur mesure
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              De l'idée à l'outil
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em', maxWidth: 880 }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 720, fontWeight: 500 }}>
            <strong>Masteria conçoit des outils IA sur mesure : copilotes internes, assistants documentaires et applications métier adaptés à vos processus et à vos données, là où les outils du marché ne suffisent pas. Vous obtenez un vrai logiciel, dont le code et les données vous appartiennent.</strong>
          </p>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, marginBottom: 40, maxWidth: 720 }}>
            Les solutions du marché couvrent les besoins standards. Dès que votre processus, vos données ou votre niveau de confidentialité sortent du cadre, il faut un outil pensé pour vous. Nous le construisons de l'idée à la mise en service, puis nous le faisons vivre. Spécialistes de l'IA depuis 2022, basés à Lyon, nous intervenons en France, en Suisse et en Belgique.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Décrivez-nous votre besoin
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#process" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir la démarche
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

          {/* En bref — synthèse citable (GEO) */}
          <div style={{ ...cardStyle, padding: 'clamp(20px, 3vw, 28px)', marginTop: 36, maxWidth: 820 }}>
            <Kicker>En bref</Kicker>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                  <dt style={{ flex: '0 0 116px', fontWeight: 800, fontSize: 13.5, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#374151', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── 1. QUELS OUTILS IA CONSTRUIT-ON ? ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Livrables</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Quels outils IA construit-on ?
          </h2>

          <p style={answerStyle}>
            <strong>Masteria construit six grandes familles d'outils IA : copilote interne branché sur vos données, assistant documentaire avec recherche sourcée (RAG), outil d'analyse et de reporting, automatisation métier de bout en bout, application web IA dédiée et agent spécialisé. Chacun est conçu pour un usage réel, pas pour cocher une case « IA ».</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 860 }}>
            Le point commun de ces livrables : ils partent de votre besoin et de vos données, et ils s'intègrent à vos outils existants. Voici ce que nous concevons le plus souvent.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {OUTILS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 16 }}>
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

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 860 }}>
            Certains de ces outils ont leur page dédiée, avec cas d'usage et exemples : <Link to="/chatbot-ia-sur-mesure" style={aStyle}>chatbot IA sur mesure</Link> et <Link to="/integration-llm-rag" style={aStyle}>intégration LLM / RAG</Link>. Vous cherchez d'abord un partenaire de réalisation plutôt qu'un type d'outil précis ? Notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> détaille la démarche d'ingénierie, l'équipe et les modalités de collaboration. Pour automatiser des processus existants avec des outils du marché, voyez plutôt notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link>. Pas encore sûr du périmètre ? Un <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA gratuit</Link> aide à cadrer le bon outil avant tout développement.
          </p>
        </div>
      </section>

      {/* ── 2. SAAS / NO-CODE / SUR MESURE (tableau de décision) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Aide à la décision</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Outil du marché, no-code ou sur mesure ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le sur mesure n'est pas toujours la bonne réponse. Un SaaS du marché suffit quand le besoin est standard ; un assemblage no-code convient à des cas simples ; le développement sur mesure se justifie quand l'adéquation au besoin, la confidentialité des données ou l'évolutivité deviennent décisives. Voici un comparatif honnête pour trancher.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 860 }}>
            Nous n'avons aucun intérêt à vous vendre du développement si une solution existante fait l'affaire. Ce tableau sert à situer votre besoin, critère par critère, avant d'engager quoi que ce soit.
          </p>

          <div style={{ ...cardStyle, overflowX: 'auto', marginBottom: 20 }}>
            <table aria-label="Comparatif entre SaaS du marché, assemblage no-code et développement sur mesure" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ ...thStyle, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ ...thStyle, width: '26%' }}>SaaS du marché</th>
                  <th scope="col" style={{ ...thStyle, width: '26%' }}>Assemblage no-code</th>
                  <th scope="col" style={{ ...thStyle, width: '26%', color: c }}>Développement sur mesure</th>
                </tr>
              </thead>
              <tbody>
                {DECISION_ROWS.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ ...tdStyle, textAlign: 'left', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 14 }}>{row.critere}</th>
                    <DecisionCell cell={row.saas} />
                    <DecisionCell cell={row.nocode} />
                    <DecisionCell cell={row.surmesure} highlight />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 860 }}>
            <Check size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
            <span>En clair : choisissez le sur mesure quand l'outil doit épouser un processus singulier, quand vos données ne peuvent pas transiter par un tiers, ou quand vous comptez faire évoluer l'outil dans la durée. Sinon, un outil existant fait souvent très bien le travail.</span>
          </p>
        </div>
      </section>

      {/* ── 3. DE L'IDÉE À L'OUTIL (process) ── */}
      <section id="process" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Démarche</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            De l'idée à l'outil
          </h2>

          <p style={answerStyle}>
            <strong>Nous suivons cinq étapes : cadrage du besoin, maquette et preuve de concept, développement par incréments, mise en service dans votre environnement, puis évolutions au fil de l'eau. Vous validez la valeur sur un prototype avant d'engager le développement complet, et vous restez décisionnaire à chaque étape.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 44, lineHeight: 1.7, maxWidth: 860 }}>
            La même trajectoire pour chaque projet : comprendre, prouver, construire, déployer, faire vivre. Chaque étape produit quelque chose de concret et conditionne le passage à la suivante.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {PROCESS.map(step => (
              <div key={step.num} style={{ ...cardStyle, padding: '28px 30px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div aria-hidden="true" style={{ width: 48, height: 48, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
                  <step.icon size={22} strokeWidth={2} style={{ color: c }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif', letterSpacing: '0.04em' }}>ÉTAPE {step.num}</span>
                    <h3 style={h3Style}>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 860 }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
            {PROPRIETE.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconBox icon={card.icon} />
                </div>
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

          <div style={{ ...cardStyle, padding: '28px 30px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
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

      {/* ── 6. FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>FAQ</Kicker>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>
            Outils IA sur mesure : les questions fréquentes
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
            Choisir le bon partenaire, automatiser l'existant, ou cadrer la stratégie IA en amont.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Agence', desc: "L'équipe, la démarche d'ingénierie et les modalités pour faire développer votre outil IA." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Automatiser des processus existants avec les outils du marché, vos équipes restent autonomes." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Quand confier une mission autonome à un agent IA, et avec quels garde-fous." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA en amont du choix d'un outil." },
              { label: 'Toutes nos solutions IA', href: '/solutions-ia', tag: 'Solutions IA', desc: "Du diagnostic au déploiement : la vue d'ensemble de nos accompagnements IA pour entreprises." },
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

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Décrivez-nous votre besoin
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 580 }}>
            Expliquez-nous le problème métier que vous voulez résoudre et les données dont vous disposez. Nous revenons vers vous sous 24 heures avec une première lecture : faisabilité, périmètre d'un prototype et grandes options. Vous repartez avec une vision claire, avec ou sans nous.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
            Décrivez-nous votre besoin
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
            Réponse sous 24 h · Code et données qui vous appartiennent · Spécialistes IA depuis 2022 · Lyon, France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
