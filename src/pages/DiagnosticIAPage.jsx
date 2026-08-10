import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Map as MapIcon, Layers, Target, FileText, ListChecks,
  Gauge, Zap, Users, Server, Building2, Calendar, ClipboardCheck, Workflow,
  Rocket, ShieldCheck, MapPin, Check,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page de conversion high-ticket — offre d'entrée productisée « Diagnostic IA »
 * (slug /diagnostic-ia). Objectif : dé-risquer la première étape d'un acheteur
 * high-ticket (COMEX, DSI, directions métier) avec un livrable actionnable en
 * une journée, faible engagement, sans suite obligatoire.
 *
 * INTÉGRITÉ : posture orientée capacité. Aucun cas client nommé, aucun chiffre
 * de résultat fabriqué, aucun prix ferme inventé. Le « 1 500 / 98 % » n'est PAS
 * employé ici (chiffre de formation). Le coût est présenté honnêtement : cadrage
 * gratuit OU forfait court selon le périmètre, sans tarif vendu à l'aveugle.
 *
 * Design premium cabinet identique à /agence-developpement-ia : kickers, icônes
 * lucide (zéro emoji), cartes radius 16, réponses directes citables en gras,
 * accent #2563EB, CTA final sombre. Pas d'OPCO/Qualiopi (offre conseil).
 * Maillage : /conseil-strategie-ia, /agence-developpement-ia, /agents-ia-entreprise,
 * /outils-ia-sur-mesure, /methode-projet-ia, /contact.
 */

const SLUG = 'diagnostic-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Diagnostic IA : feuille de route en 1 journée | Masteria"
const META_DESC = "Diagnostic IA en une journée : processus automatisables, cas d'usage priorisés et feuille de route chiffrée livrée. Cadrage gratuit, sans engagement."
// Répartition des intentions « audit » (depuis 2026-08-10) : la requête
// transactionnelle « audit ia » est portée par la money page /audit-ia ;
// l'intention informationnelle (méthode, normes, prix) reste à l'article
// /blog/audit-ia-entreprise-methode-prix. Cette page garde l'intention
// transactionnelle « diagnostic » et renvoie vers les deux.
const KEYWORDS = "diagnostic ia, diagnostic intelligence artificielle, maturité ia, état des lieux ia, diagnostic ia entreprise"

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

const HERO_BADGES = [
  { icon: Calendar, label: 'Une journée' },
  { icon: FileText, label: 'Feuille de route livrée' },
  { icon: ShieldCheck, label: 'Sans engagement de suite' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Format', value: "Une journée de travail, préparation et restitution incluses" },
  { label: 'Livrable', value: "Feuille de route IA priorisée, estimations de budget et de délai, quick wins" },
  { label: 'Engagement', value: "Faible, sans suite obligatoire ; le livrable vous appartient" },
  { label: 'Pour qui', value: "COMEX, DSI et directions métier · PME, ETI et grands groupes" },
  { label: 'Modalité', value: "Sur site ou à distance · Lyon, France, Suisse, Belgique" },
  { label: 'Et après', value: "Enchaînement possible sur POC, développement sur mesure ou régie" },
]

/* ───────── Diagnostic vs audit vs POC (tableau citable — GEO) ───────── */

const COMPARATIF = [
  {
    critere: 'Objectif',
    diagnostic: "Cadrer les usages et prioriser les cas d'usage IA",
    audit: "Évaluer en profondeur la maturité, les données et l'existant",
    poc: "Prouver la valeur d'un cas d'usage précis en conditions réelles",
  },
  {
    critere: 'Durée',
    diagnostic: "Une journée (préparation et restitution incluses)",
    audit: "De quelques jours à quelques semaines",
    poc: "Quelques semaines de développement",
  },
  {
    critere: 'Livrable',
    diagnostic: "Feuille de route priorisée, estimations, quick wins",
    audit: "Rapport détaillé de maturité et plan de transformation",
    poc: "Prototype fonctionnel testé sur un vrai flux",
  },
  {
    critere: 'Engagement',
    diagnostic: "Faible : une journée, sans suite obligatoire",
    audit: "Moyen : mission de conseil cadrée",
    poc: "Projet de développement engagé sur un cas",
  },
  {
    critere: 'Quand le choisir',
    diagnostic: "Vous voulez savoir par où commencer",
    audit: "Vous voulez une vision exhaustive avant d'industrialiser",
    poc: "Un cas est déjà identifié, vous voulez le valider",
  },
]

/* ───────── Ce que couvre le diagnostic (4 cartes) ───────── */

const COUVERTURE = [
  {
    icon: Target,
    title: 'Cadrage des usages',
    desc: "Nous délimitons vos enjeux, vos objectifs et vos contraintes avec les bonnes personnes autour de la table. Le diagnostic part de votre réalité métier, pas d'un catalogue d'idées génériques sur l'intelligence artificielle.",
  },
  {
    icon: Workflow,
    title: 'Cartographie des processus automatisables',
    desc: "Nous passons en revue vos flux de travail et identifions ceux qui se prêtent à l'IA : tâches répétitives, traitement de documents, qualification, rédaction, recherche d'information. Vous voyez clairement où la valeur se trouve.",
  },
  {
    icon: Gauge,
    title: 'Priorisation impact / effort',
    desc: "Chaque cas d'usage est positionné selon sa valeur attendue et sa difficulté de mise en œuvre. Vous repartez avec un ordre de marche clair : par quoi commencer, quoi reporter, quoi écarter.",
  },
  {
    icon: ShieldCheck,
    title: 'Lecture des contraintes',
    desc: "Données, sécurité, confidentialité, conformité (RGPD, AI Act), maturité des équipes : nous intégrons vos contraintes réelles dans la trajectoire, pour une feuille de route tenable et non un vœu pieux.",
  },
]

/* ───────── Ce que contient le livrable (4 cartes) ───────── */

const LIVRABLE = [
  {
    icon: MapIcon,
    title: 'Une feuille de route priorisée',
    desc: "La liste de vos cas d'usage IA, classés par impact et par effort, avec une recommandation d'ordre de déploiement. C'est le cœur du livrable : savoir quoi faire, dans quel ordre et pourquoi.",
  },
  {
    icon: ListChecks,
    title: 'Des estimations de budget et de délai',
    desc: "Pour les cas prioritaires, une fourchette de budget et de délai fondée sur des ordres de grandeur de marché, présentés comme tels. De quoi arbitrer et présenter un dossier en interne, sans engagement de devis ferme.",
  },
  {
    icon: Zap,
    title: 'Des quick wins identifiés',
    desc: "Un ou plusieurs gains rapides activables sans grand projet : ce que vos équipes peuvent mettre en place vite, pour créer de la traction et de l'adhésion autour de l'IA dès les premières semaines.",
  },
  {
    icon: ShieldCheck,
    title: 'Les points de vigilance',
    desc: "Les risques à surveiller, les prérequis de données et les questions de gouvernance à traiter avant d'industrialiser. Vous avancez les yeux ouverts, pas sur une promesse lissée.",
  },
]

/* ───────── Pour qui (3 profils) ───────── */

const POUR_QUI = [
  {
    icon: Building2,
    title: 'COMEX et directions générales',
    desc: "Vous voulez une lecture lucide de ce que l'IA peut apporter à votre organisation, sans bullshit ni promesse de transformation magique. Le diagnostic vous donne une trajectoire chiffrée à présenter et à arbitrer.",
  },
  {
    icon: Server,
    title: 'DSI et directions techniques',
    desc: "Vous devez cadrer les demandes IA qui remontent des métiers, évaluer la faisabilité et anticiper les contraintes de données et de sécurité. Le diagnostic vous fournit une grille de priorisation et des garde-fous.",
  },
  {
    icon: Users,
    title: 'Directions métier',
    desc: "Vous avez des processus chronophages et l'intuition que l'IA peut aider, mais vous ne savez pas par où commencer. Le diagnostic transforme cette intuition en plan d'action concret et priorisé.",
  },
]

/* ───────── Comment ça se déroule (3 étapes avant/pendant/après) ───────── */

const DEROULE = [
  {
    num: '01',
    phase: 'Avant',
    title: 'Préparation et collecte',
    desc: "Un court échange préalable cadre le périmètre et identifie les bons interlocuteurs. Nous récupérons les éléments utiles (organigramme des processus concernés, contraintes connues) pour arriver préparés et ne pas perdre votre journée en mise en contexte.",
  },
  {
    num: '02',
    phase: 'Pendant',
    title: 'La journée de diagnostic',
    desc: "Une journée de travail avec vos équipes : ateliers de cartographie, identification des cas d'usage, lecture des contraintes, priorisation à chaud. Conduite par un spécialiste IA, en présentiel ou en distanciel selon votre préférence.",
  },
  {
    num: '03',
    phase: 'Après',
    title: 'La restitution et le livrable',
    desc: "Nous formalisons la feuille de route, les estimations et les quick wins dans un livrable écrit, puis nous le présentons. Vous repartez avec un document exploitable en interne, que vous donniez suite avec nous ou non.",
  },
]

/* ───────── Ce que ça débloque (3 cartes) ───────── */

const DEBLOQUE = [
  {
    icon: Rocket,
    title: 'Le passage au projet',
    desc: "Le diagnostic identifie le ou les cas prioritaires prêts à passer en prototype. Si vous décidez d'avancer, le cadrage est déjà fait : nous enchaînons sur un POC sans repartir de zéro.",
  },
  {
    icon: ClipboardCheck,
    title: 'Une décision documentée',
    desc: "Vous disposez d'un dossier solide pour arbitrer en interne : où investir, quel budget anticiper, quels gains attendre. La décision se prend sur des faits, pas sur une présentation commerciale.",
  },
  {
    icon: Layers,
    title: "Une trajectoire à l'échelle",
    desc: "Au-delà du premier cas, le diagnostic dessine la suite : les usages à industrialiser, la gouvernance à mettre en place, les compétences à développer dans les équipes. Une vision, pas un coup ponctuel.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Combien coûte un diagnostic IA ?",
    a: "Cela dépend du périmètre. Pour un cadrage simple sur un périmètre restreint, le premier échange de cadrage est gratuit et sans engagement. Pour un diagnostic approfondi mobilisant une journée complète avec vos équipes, des ateliers et un livrable formalisé, l'intervention se chiffre au forfait court, établi après définition du périmètre. Nous ne publions pas de prix type et ne vendons rien à l'aveugle : le périmètre se fixe avant le devis.",
  },
  {
    q: "Que se passe-t-il si nous ne donnons pas suite après le diagnostic ?",
    a: "Rien ne vous y oblige. Le diagnostic est conçu comme une offre d'entrée à faible engagement : vous repartez avec un livrable actionnable, exploitable par vos propres équipes ou par un autre prestataire si vous le souhaitez. La feuille de route, les estimations et les quick wins vous appartiennent. Nous préférons une relation qui se prolonge parce qu'elle a de la valeur, pas par contrainte.",
  },
  {
    q: "En quoi consiste exactement le livrable ?",
    a: "Un document écrit qui contient une feuille de route priorisée de vos cas d'usage IA (classés par impact et par effort), des estimations de budget et de délai pour les cas prioritaires (en ordres de grandeur de marché), une liste de quick wins activables rapidement et les points de vigilance à traiter. C'est un support de décision concret, pas une note d'intention.",
  },
  {
    q: "Qui doit participer côté entreprise ?",
    a: "Les bons interlocuteurs selon le périmètre : un sponsor côté direction (COMEX ou direction métier), un référent technique ou DSI si des questions de données et de sécurité se posent, et les opérationnels qui connaissent les processus concernés. Un diagnostic réussi mobilise les personnes qui vivent les processus au quotidien, pas seulement la direction.",
  },
  {
    q: "Le diagnostic se fait-il sur site ou à distance ?",
    a: "Les deux sont possibles. Masteria est basée à Lyon et intervient dans toute la France ainsi qu'en Suisse et en Belgique. La journée de diagnostic peut se tenir sur site, ce qui facilite les ateliers et l'implication des équipes, ou en distanciel en visio. La préparation et la restitution se conduisent très bien à distance dans tous les cas.",
  },
  {
    q: "Quelle est la différence entre un diagnostic IA et un audit IA ?",
    a: "Le diagnostic IA est une intervention courte, d'une journée, qui cadre vos usages et priorise les cas d'usage à plus forte valeur pour savoir par où commencer. L'audit IA va plus loin : il évalue en détail votre maturité, vos données, vos outils et votre organisation, sur plusieurs jours ou semaines, et débouche sur un rapport complet et un plan de transformation. Le diagnostic est le point d'entrée le plus rapide et le moins engageant ; l'audit convient quand vous voulez une vision exhaustive avant d'industrialiser. Les deux se complètent : un diagnostic peut précéder un audit ciblé sur les cas retenus.",
  },
  {
    q: "Le diagnostic IA convient-il à une PME ?",
    a: "Oui. Le diagnostic est dimensionné selon votre taille et votre périmètre. Une PME y trouve une lecture claire de ce que l'IA peut lui apporter sans lancer un grand chantier, avec des quick wins activables rapidement. Une ETI ou un grand groupe l'utilise plutôt pour cadrer un périmètre précis avant d'industrialiser. Dans tous les cas, le livrable reste le même : une feuille de route priorisée et exploitable en interne.",
  },
  {
    q: "Faut-il déjà utiliser l'IA pour faire un diagnostic ?",
    a: "Non. Le diagnostic s'adresse autant aux organisations qui débutent qu'à celles qui ont déjà quelques usages en place. Si vous partez de zéro, il identifie les premiers cas d'usage et les quick wins. Si vous avez déjà expérimenté, il met de l'ordre dans les initiatives, priorise et corrige la trajectoire. Aucun prérequis technique n'est nécessaire pour y participer.",
  },
  {
    q: "Combien de temps faut-il entre la demande et la restitution du livrable ?",
    a: "Comptez le plus souvent de une à trois semaines entre le premier échange de cadrage et la restitution, selon vos disponibilités et celles de vos équipes. La journée de diagnostic se planifie à une date convenue ensemble ; la préparation en amont et la formalisation du livrable en aval s'organisent autour. Après votre demande, nous revenons vers vous sous 24 heures pour fixer le périmètre et la date.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Diagnostic IA — Masteria',
  alternateName: 'Diagnostic intelligence artificielle',
  description: "Diagnostic IA productisé en une journée : cadrage des usages, cartographie des processus automatisables, priorisation impact/effort. Livrable : feuille de route priorisée, estimations de budget et de délai, quick wins. Offre d'entrée à faible engagement, sans suite obligatoire.",
  url: 'https://www.master-ia.fr/diagnostic-ia',
  serviceType: "Diagnostic et feuille de route IA",
  category: "Conseil en intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'COMEX, DSI et directions métier',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Diagnostic IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cartographie des processus automatisables', description: "Revue des flux de travail et identification des cas d'usage IA à plus forte valeur." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Priorisation impact / effort', description: "Classement des cas d'usage selon leur valeur attendue et leur difficulté de mise en œuvre." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Feuille de route priorisée', description: "Trajectoire chiffrée avec estimations de budget et de délai et quick wins activables." } },
    ],
  },
}

/* Déroulé du diagnostic en ItemList (séquence citable — GEO ; HowTo volontairement
   évité, Google ayant retiré les rich results HowTo en 2023). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Déroulé du diagnostic IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEROULE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${step.phase} — ${step.title}`,
    description: step.desc,
  })),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/diagnostic-ia#article',
  headline: 'Diagnostic IA : votre feuille de route en une journée',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/diagnostic-ia#webpage' },
  about: ['Diagnostic IA', 'Audit de maturité IA', 'Feuille de route IA', 'Conseil en intelligence artificielle'],
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

export default function DiagnosticIAPage() {
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
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Diagnostic IA', slug: SLUG },
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Diagnostic IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Offre d'entrée · Diagnostic IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Diagnostic IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>votre feuille de route en une journée</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le Diagnostic IA de Masteria est une journée de travail qui cadre vos usages, cartographie vos processus automatisables et les priorise par impact et par effort. Vous repartez avec un <strong style={{ color: '#fff', fontWeight: 700 }}>livrable concret</strong> : une feuille de route priorisée, des estimations de budget et de délai et des quick wins activables, sans engagement de suite.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            C'est l'étape qui dé-risque votre premier pas vers l'IA. Plutôt que de lancer un projet sur une intuition, vous obtenez une lecture lucide de ce qui mérite d'être fait, dans quel ordre et avec quel budget. Une offre productisée à faible engagement, conçue par un cabinet spécialisé sur l'intelligence artificielle depuis 2022.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un diagnostic
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
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 92px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CE QU'EST LE DIAGNOSTIC (éditorial asymétrique) ── */}
      <section id="diagnostic" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce que c'est</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce que le Diagnostic IA de Masteria ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Le Diagnostic IA est une intervention d'une journée qui cadre vos usages, cartographie vos processus automatisables et priorise les cas d'usage par impact et par effort. Conduit par un spécialiste IA, il transforme une intuition diffuse en une trajectoire claire, sans engager de projet à ce stade.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Beaucoup d'organisations savent que l'IA peut les aider, sans savoir par où commencer ni ce que cela représente. Le diagnostic répond à cette question avant tout engagement lourd. Il couvre quatre dimensions. Pour une première photographie en 3 minutes, notre <Link to="/test-maturite-ia" style={{ color: c, fontWeight: 600 }}>test de maturité IA</Link> gratuit situe votre profil avant même l'échange de cadrage.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {COUVERTURE.map((item, i) => (
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
                Le diagnostic s'inscrit dans une logique plus large de <Link to="/conseil-strategie-ia" style={aStyle}>conseil en stratégie IA</Link>. Quand un cas est prêt, il enchaîne naturellement sur le <Link to="/agence-developpement-ia" style={aStyle}>développement sur mesure</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC VS AUDIT VS POC (ancre sombre — pivot, tableau citable GEO) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Diagnostic, audit ou POC</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Diagnostic, audit ou POC : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le diagnostic IA, l'audit IA et le POC répondent à trois besoins distincts. Le diagnostic cadre et priorise vos usages en une journée. L'audit évalue en profondeur votre maturité et vos données. Le POC prouve la valeur d'un cas précis en conditions réelles. Pour un premier pas, le diagnostic est le point d'entrée le plus rapide et le moins engageant.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre diagnostic IA, audit IA complet et POC" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '28%' }}>Diagnostic IA</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Audit IA complet</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>POC / preuve de concept</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.diagnostic}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.audit}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.poc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Renvois : la mission audit vit sur /audit-ia (intention transactionnelle),
              le fond (méthode, normes, prix) sur l'article (intention informationnelle). */}
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Si c'est la vision exhaustive qu'il vous faut, voyez notre <Link to="/audit-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>audit IA</Link> : périmètre, méthode, livrable et repères de prix. Pour le fond du sujet (ce que la loi impose, les normes publiées, les cas où l'audit ne sert à rien), lisez notre <Link to="/blog/audit-ia-entreprise-methode-prix" style={{ color: '#60A5FA', fontWeight: 600 }}>guide complet de l'audit IA</Link>.
          </p>
        </div>
      </section>

      {/* ── LE LIVRABLE ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Avec quoi repartez-vous concrètement ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Vous repartez avec un livrable écrit et actionnable : une feuille de route priorisée de vos cas d'usage IA, des estimations de budget et de délai pour les cas prioritaires, une liste de quick wins activables rapidement et les points de vigilance à traiter. Un support de décision exploitable en interne, avec ou sans suite.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le diagnostic ne se résume pas à une réunion : il produit un document que vous gardez. Quatre éléments le composent.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {LIVRABLE.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            À qui s'adresse le diagnostic ?
          </h2>

          <p style={answerStyle}>
            <strong>Le diagnostic s'adresse aux décideurs qui doivent arbitrer sur l'IA : COMEX et directions générales pour une lecture stratégique, DSI et directions techniques pour cadrer la faisabilité, directions métier pour transformer une intuition en plan d'action. Il mobilise les personnes qui vivent les processus, pas seulement la direction.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {POUR_QUI.map(card => {
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

      {/* ── COMMENT ÇA SE DÉROULE (avant / pendant / après) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Déroulé</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule le diagnostic ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le diagnostic se déroule en trois temps : avant, une préparation et une collecte d'éléments pour arriver cadrés ; pendant, une journée d'ateliers avec vos équipes ; après, la formalisation et la restitution du livrable. Vous ne perdez pas votre journée en mise en contexte, le travail est utile de bout en bout.</strong>
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
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>{step.phase}</div>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUE ÇA DÉBLOQUE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ce que ça débloque</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que permet le diagnostic une fois livré ?
          </h2>

          <p style={answerStyle}>
            <strong>Le diagnostic débloque le passage au projet : le cas prioritaire est déjà cadré, prêt à enchaîner sur un prototype. Il vous donne aussi une décision documentée pour arbitrer en interne et une trajectoire à l'échelle au-delà du premier cas. Vous avancez sur des faits, pas sur une promesse.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, margin: '12px 0 0' }}>
            {DEBLOQUE.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: '20px 24px', marginTop: 32 }}>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: '#0A0A0A' }}>Du diagnostic à la mise en production, sous un même toit.</strong>{' '}
              Si vous décidez d'avancer, nous enchaînons selon notre <Link to="/methode-projet-ia" style={aStyle}>méthode projet et nos modèles d'engagement</Link> : développement d'<Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link>, d'<Link to="/outils-ia-sur-mesure" style={aStyle}>outils IA sur mesure</Link> ou cadrage de gouvernance. Sans suite, le livrable reste le vôtre.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAIBLE ENGAGEMENT (réassurance) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Faible engagement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Repartir avec de la valeur, même sans suite
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le diagnostic est volontairement conçu comme un point d'entrée à faible risque. Vous engagez une journée, vous repartez avec un livrable exploitable, et vous restez libre de la suite. C'est la façon la plus saine de tester une collaboration avec un cabinet : sur un résultat tangible, pas sur une promesse commerciale.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Un livrable actionnable, qu\'il y ait suite ou non',
                  'Aucun engagement de projet à ce stade',
                  'Un cadrage déjà fait si vous décidez d\'avancer',
                  'Un document exploitable par vos propres équipes',
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
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Diagnostic IA : les questions fréquentes
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
            Du cadrage stratégique au développement, explorez la suite logique du diagnostic, ou parcourez nos <Link to="/solutions-ia" style={aStyle}>solutions IA par usage</Link> et l'<Link to="/ia-secteurs" style={aStyle}>IA par secteur d'activité</Link>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Audit IA', href: '/audit-ia', tag: 'Conseil', desc: "Quand il faut la vision exhaustive : maturité, données, conformité et feuille de route chiffrée." },
              { label: 'Conseil en stratégie IA', href: '/conseil-strategie-ia', tag: 'Conseil', desc: "Le cadrage stratégique dans lequel s'inscrit le diagnostic, à l'échelle de l'entreprise." },
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Quand un cas est prêt : conception et développement de la solution, de l'idée au déploiement." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Déployer des agents IA sur les cas prioritaires que le diagnostic fait remonter." },
              { label: 'Cas d\'usage de l\'IA en entreprise', href: '/cas-usage-ia-entreprise', tag: 'Cas d\'usage', desc: "Les cas d'usage de l'IA en entreprise que le diagnostic aide à identifier et à prioriser." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'Génératif', desc: "Cadrer l'IA générative en entreprise : ce qu'elle permet et où elle crée vraiment de la valeur." },
              { label: 'Prix d\'un projet IA', href: '/prix-projet-ia', tag: 'Budget', desc: "Après le diagnostic vient le chiffrage : les ordres de grandeur du prix d'un projet IA." },
              { label: 'Méthode & modèles d\'engagement', href: '/methode-projet-ia', tag: 'Méthode', desc: "Comment nous travaillons après le diagnostic : forfait, régie ou accompagnement conseil." },
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

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Offre d'entrée</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Commencez par un diagnostic
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez-nous votre contexte et les processus que vous voulez examiner. Nous revenons vers vous sous 24 heures pour cadrer le périmètre du diagnostic et convenir d'une date. Vous repartez de la journée avec une feuille de route claire, que vous donniez suite ou non.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un diagnostic IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Faible engagement · Livrable actionnable · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
