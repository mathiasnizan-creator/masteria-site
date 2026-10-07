import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Compass, Map as MapIcon, Layers, Target, FileText, ListChecks,
  Gauge, Zap, Users, Server, Building2, Calendar, ClipboardCheck, Workflow,
  Rocket, ShieldCheck, MapPin, Check, Sun, ExternalLink,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { CADRAGE_COURT } from '../data/offre-entree'
import { useIsDesktop } from '../hooks/useMediaQuery'
import CadrageLink from '../components/CadrageLink'

/*
 * Page de l'offre d'entrée « Diagnostic IA » (slug /diagnostic-ia). Objectif :
 * rendre la première étape facile pour un acheteur (direction générale, DSI,
 * direction métier) : une intervention courte, un livrable écrit, aucune suite
 * obligatoire, précédée de 30 minutes de cadrage offertes.
 * DURÉE ET PRIX : jamais affichés. La durée et le forfait se fixent au cadrage,
 * selon le périmètre (décisions de Mathias des 02 et 03/10/2026 ; formulations de
 * référence dans src/data/offre-entree.js).
 *
 * ANGLE (anti-cannibalisation du cluster conseil) : l'OFFRE D'ENTRÉE. La stratégie
 * complète vit sur /conseil-strategie-ia, l'audit exhaustif sur /audit-ia, le format
 * PME sur /conseil-ia-pme. Cette page garde l'intention transactionnelle « diagnostic ».
 *
 * INTÉGRITÉ : aucun client nommé, aucun chiffre de résultat ni prix inventé. Pas
 * d'OPCO/Qualiopi en avant (offre de conseil). Cas cités : src/data/etudes-de-cas.js.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards, de
 * FounderNote ni d'OfficialSources communs ; « quick wins » remplacé par « gains
 * rapides » (charte de voix).
 */

const SLUG = 'diagnostic-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Diagnostic IA : cas d'usage et feuille de route | Masteria"
const META_DESC = "Diagnostic IA : travail que l'IA peut reprendre, cas d'usage classés, feuille de route chiffrée. Durée et forfait fixés après 30 minutes de cadrage offertes."
// Répartition des intentions « audit » (depuis 2026-08-10) : la requête
// transactionnelle « audit ia » est portée par la money page /audit-ia ;
// l'intention informationnelle (méthode, normes, prix) reste à l'article
// /blog/audit-ia-entreprise-methode-prix. Cette page garde l'intention
// transactionnelle « diagnostic » et renvoie vers les deux.
const KEYWORDS = "diagnostic ia, diagnostic intelligence artificielle, audit des processus ia, état des lieux ia, diagnostic ia entreprise"

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
  { icon: Calendar, label: 'Intervention courte' },
  { icon: FileText, label: 'Livrable écrit qui vous appartient' },
  { icon: ShieldCheck, label: 'Aucune suite imposée' },
  { icon: MapPin, label: 'Lyon · Europe · États-Unis · Inde' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Avant tout', value: `${CADRAGE_COURT}, en visio ou au téléphone` },
  { label: 'Format', value: "Une intervention courte avec vos équipes, préparation et restitution comprises" },
  { label: 'Durée et prix', value: "Fixés lors du cadrage, selon le périmètre retenu ; aucun tarif affiché d'avance" },
  { label: 'Livrable', value: "Feuille de route classée par priorité, fourchettes de budget et de délai, gains rapides repérés" },
  { label: 'Engagement', value: "Léger : aucune suite obligatoire, et le document reste à vous" },
  { label: 'Pour qui', value: "Directions générales, DSI, directions métier · PME, ETI, grands groupes" },
  { label: 'Où', value: "Chez vous ou à distance, depuis Lyon et jusqu'en Inde" },
  { label: 'Ensuite', value: "Prototype, développement sur mesure ou appui en régie, si vous le décidez" },
]

/* ───────── Diagnostic vs audit vs POC (tableau citable, GEO) ───────── */

const COMPARATIF = [
  {
    critere: 'Question posée',
    diagnostic: "Par quoi commencer, et dans quel ordre ?",
    audit: "Où en sommes-nous, sur tous les plans ?",
    poc: "Ce cas précis tient-il ses promesses ?",
  },
  {
    critere: 'Durée',
    diagnostic: "Courte, arrêtée pendant le cadrage selon le périmètre",
    audit: "Plus longue, à la mesure de l'organisation étudiée",
    poc: "Le temps de construire et d'éprouver un prototype",
  },
  {
    critere: 'Ce que vous recevez',
    diagnostic: "Une feuille de route classée, des fourchettes, des gains rapides",
    audit: "Un rapport complet : maturité, données, outils, conformité",
    poc: "Un prototype testé sur un flux de travail existant",
  },
  {
    critere: 'Engagement',
    diagnostic: "Léger : un forfait connu d'avance, aucune suite imposée",
    audit: "Une mission de conseil cadrée",
    poc: "Un projet de développement sur un cas",
  },
  {
    critere: 'Moment opportun',
    diagnostic: "Avant tout projet, pour savoir où porter l'effort",
    audit: "Avant d'industrialiser, quand la direction veut un constat complet",
    poc: "Quand un cas est choisi et qu'il faut le valider",
  },
]

/* ───────── Ce que couvre le diagnostic (4 cartes) ───────── */

const COUVERTURE = [
  {
    icon: Target,
    title: 'Les enjeux, posés avec les bonnes personnes',
    desc: "Objectifs, contraintes, attentes de la direction : nous les écrivons avec ceux qui décident et ceux qui font. Le diagnostic part de votre métier, jamais d'une liste d'idées toutes faites sur l'intelligence artificielle.",
  },
  {
    icon: Workflow,
    title: "Les tâches que l'IA peut reprendre",
    desc: "Nous passons en revue vos flux de travail et repérons ceux qui se prêtent à l'IA : tâches répétitives, documents à traiter, demandes à qualifier, textes à rédiger, informations à retrouver. Vous voyez où se trouve la valeur, chiffres d'heures à l'appui.",
  },
  {
    icon: Gauge,
    title: 'Un classement valeur et effort',
    desc: "Chaque cas d'usage reçoit une place selon ce qu'il rapporterait et ce qu'il coûterait à mettre en œuvre. Vous repartez avec un ordre de marche : ce qu'on lance, ce qu'on reporte, ce qu'on abandonne.",
  },
  {
    icon: ShieldCheck,
    title: 'Les contraintes, sans angle mort',
    desc: "Données, sécurité, confidentialité, RGPD, AI Act, niveau des équipes : ces contraintes entrent dans la trajectoire dès le départ. La feuille de route peut donc être suivie sans attendre des conditions idéales.",
  },
]

/* ───────── Ce que contient le livrable (4 cartes) ───────── */

const LIVRABLE = [
  {
    icon: MapIcon,
    title: 'Une feuille de route classée',
    desc: "Vos cas d'usage IA, rangés selon leur valeur et leur effort, avec l'ordre de déploiement que nous recommandons. C'est le cœur du document : ce qu'il faut lancer, à quel moment, et pour quelles raisons.",
  },
  {
    icon: ListChecks,
    title: 'Des fourchettes de budget et de délai',
    desc: "Pour les cas prioritaires, une fourchette de coût et de durée, fondée sur les prix couramment constatés et présentée comme telle. De quoi arbitrer et défendre un dossier en interne, sans devis ferme à ce stade.",
  },
  {
    icon: Zap,
    title: 'Des gains rapides repérés',
    desc: "Une ou plusieurs actions faciles, sans projet lourd, que vos équipes peuvent engager tout de suite. Elles donnent un premier résultat visible et entraînent l'adhésion autour de l'IA dès les premières semaines.",
  },
  {
    icon: ShieldCheck,
    title: 'Les points de vigilance',
    desc: "Les risques à surveiller, les données à remettre en état et les questions de gouvernance à régler avant d'industrialiser. Vous avancez en connaissant les écueils, sans promesse enjolivée.",
  },
]

/* ───────── Pour qui (3 profils) ───────── */

const POUR_QUI = [
  {
    icon: Building2,
    title: 'Directions générales et COMEX',
    desc: "Vous cherchez une lecture lucide de ce que l'IA peut apporter à votre organisation, sans effet d'annonce. Le diagnostic vous remet une trajectoire chiffrée, prête à présenter et à arbitrer.",
  },
  {
    icon: Server,
    title: 'DSI et directions techniques',
    desc: "Les demandes d'IA affluent des métiers ; il faut juger leur faisabilité et anticiper ce que les données et la sécurité imposent. Le diagnostic vous donne une grille de tri et des garde-fous.",
  },
  {
    icon: Users,
    title: 'Directions métier',
    desc: "Vos équipes perdent des heures à des besognes que l'IA pourrait alléger, et vous ne savez pas par où commencer. Le diagnostic change cette intuition en plan d'action classé.",
  },
]

/* ───────── Comment ça se déroule (avant / pendant / après) ───────── */

const DEROULE = [
  {
    num: '01',
    phase: 'Avant',
    title: 'Le cadrage et la préparation',
    desc: "Les 30 minutes de cadrage, offertes, délimitent le périmètre, désignent les bons interlocuteurs et fixent la durée comme le forfait. Nous rassemblons ensuite les éléments utiles (processus concernés, contraintes connues, documents types) pour consacrer les séances au fond du sujet.",
  },
  {
    num: '02',
    phase: 'Pendant',
    title: 'Les séances de travail',
    desc: "Des ateliers avec vos équipes, sur la durée arrêtée au cadrage : repérage des tâches, idées de cas d'usage, lecture des contraintes, premier classement à chaud. Un consultant spécialisé en IA les anime, chez vous ou en visio selon votre préférence.",
  },
  {
    num: '03',
    phase: 'Après',
    title: 'Le livrable et sa restitution',
    desc: "Nous rédigeons la feuille de route, les fourchettes et les gains rapides dans un document écrit, puis nous vous le présentons. Vous disposez d'un support exploitable en interne, que vous continuiez avec nous ou avec d'autres.",
  },
]

/* ───────── Ce que ça débloque (3 cartes) ───────── */

const DEBLOQUE = [
  {
    icon: Rocket,
    title: 'Un projet prêt à démarrer',
    desc: "Le diagnostic désigne le ou les cas mûrs pour un prototype. Si vous décidez d'avancer, le cadrage est déjà fait : nous enchaînons sans repartir d'une page blanche.",
  },
  {
    icon: ClipboardCheck,
    title: 'Une décision appuyée sur des faits',
    desc: "Vous détenez un dossier pour arbitrer en interne : où investir, quel budget prévoir, quels gains viser. La direction tranche à partir d'éléments vérifiés, loin du discours d'un commercial.",
  },
  {
    icon: Layers,
    title: 'La suite déjà esquissée',
    desc: "Au-delà du premier cas, le document trace la suite : usages à étendre, règles à poser, compétences à développer dans les équipes. Vous voyez plus loin que le prochain trimestre.",
  },
]

/* ───────── Études de cas (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const DIAG_CASES = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · PME',
    text: "Trois entretiens (direction, commercial, opérations) et quatre flux suivis pas à pas ont suffi à repérer douze gisements de temps. Le document remis à la direction en septembre 2026 se lit sans nous ; elle devait y trancher trois points : quel outil partager, quels chantiers ouvrir, quelle charte signer. La formation sur site suit en octobre.",
  },
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distribution IT B2B · 58 salariés',
    text: "Le cadrage avec la direction a désigné les tâches qui font gagner le plus de temps : chiffrer une cotation, relancer un devis, répondre à un cahier des charges, prospecter, suivre les stocks. De ce tri sont nées onze compétences Claude, portées par les dix référents de l'entreprise, formés en juin 2026 ; le reste des salariés les découvrira d'octobre à décembre 2026.",
  },
]

/* ───────── Sources (liens d'autorité propres à la page) ───────── */

const SOURCES = [
  { label: "L'AI Act (règlement 2024/1689), socle de la lecture réglementaire du diagnostic", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "La politique européenne en matière d'IA, telle que la décrit la Commission", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
  { label: "Les ressources de la CNIL pour concilier IA et protection des données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Combien coûte un diagnostic IA ?",
    a: "Le diagnostic est une prestation payante, vendue au forfait : une intervention courte avec vos équipes, préparation et restitution comprises. Sa durée et son forfait sont fixés lors du cadrage, selon le périmètre (nombre de processus, d'équipes et de sites concernés). Ce cadrage d'une demi-heure, par visio ou par téléphone, vous est offert et n'entraîne aucun engagement. Le périmètre est écrit noir sur blanc avant que vous ne receviez le devis.",
  },
  {
    q: "Et si nous ne donnons pas suite après le diagnostic ?",
    a: "Rien ne vous y oblige. Le diagnostic a été pensé comme une porte d'entrée légère : vous repartez avec un document que vos équipes, ou un prestataire de votre choix, peuvent reprendre. La feuille de route, les fourchettes et les gains rapides vous appartiennent. Nous tenons à ce qu'une collaboration se poursuive parce qu'elle vous sert, jamais par obligation.",
  },
  {
    q: "En quoi consiste exactement le livrable ?",
    a: "Un document écrit qui réunit la feuille de route de vos cas d'usage IA (classés selon leur valeur et leur effort), des fourchettes de budget et de délai pour les cas prioritaires (fondées sur les niveaux de prix observés), une liste de gains rapides à engager tout de suite et les points de vigilance à traiter. Votre direction peut décider à partir de ce seul document.",
  },
  {
    q: "Qui doit participer côté entreprise ?",
    a: "Les bons interlocuteurs pour le périmètre retenu : un commanditaire à la direction (générale ou métier), un référent technique ou la DSI si des questions de données et de sécurité se posent, et les opérationnels qui pratiquent les processus examinés. Un diagnostic utile réunit la direction et ceux qui exécutent le travail au quotidien.",
  },
  {
    q: "Le diagnostic se fait-il sur site ou à distance ?",
    a: "Les deux formules existent. Le cabinet est basé à Lyon ; ses consultants se rendent partout en France et à l'international (Europe, Amérique du Nord, Inde). Les séances peuvent se tenir dans vos locaux, ce qui facilite les ateliers et l'implication des équipes, ou en visio. La préparation et la restitution se déroulent sans difficulté à distance.",
  },
  {
    q: "Diagnostic IA ou audit IA : comment choisir ?",
    a: "Le diagnostic IA tient en une intervention brève qui recense vos usages et hiérarchise les cas possibles, afin de choisir le point de départ. L'audit IA passe au crible maturité, données, outils et organisation, et aboutit à un rapport complet assorti d'un plan de transformation. Le diagnostic offre l'entrée la plus rapide et la plus légère ; l'audit répond au besoin d'un constat exhaustif avant d'industrialiser. Les deux se complètent : rien n'empêche de faire suivre le diagnostic d'un audit limité aux cas retenus.",
  },
  {
    q: "Le diagnostic IA convient-il à une PME ?",
    a: "Oui. Son périmètre suit la taille de votre entreprise. Une PME y trouve une lecture claire de ce que l'IA peut lui apporter sans lancer un grand chantier, avec des gains rapides à la clé ; notre page de conseil IA pour PME décrit la suite habituelle. Les entreprises plus grandes s'en servent plutôt pour cadrer un périmètre précis avant d'industrialiser. Dans tous les cas, le livrable reste le même : une feuille de route classée, utilisable en interne.",
  },
  {
    q: "Doit-on déjà se servir de l'IA avant un diagnostic ?",
    a: "Non. Le diagnostic sert aussi bien aux organisations qui débutent qu'à celles qui ont déjà quelques usages. Si vous partez de zéro, il désigne les premiers cas d'usage et les gains rapides. Si vous avez déjà expérimenté, il range les initiatives, les classe et corrige la trajectoire. Les participants n'ont besoin d'aucun bagage technique.",
  },
  {
    q: "Combien de temps faut-il entre la demande et la restitution du livrable ?",
    a: "Le calendrier se décide pendant le cadrage, en fonction du périmètre et des disponibilités de vos équipes. Les séances de travail se placent à des dates convenues ensemble ; la préparation en amont et la rédaction du livrable en aval s'organisent autour. Après votre demande, nous reprenons contact sous 24 heures pour fixer le périmètre et les dates.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Diagnostic IA, Masteria',
  alternateName: 'Diagnostic intelligence artificielle',
  description: "Diagnostic IA sous forme d'intervention courte : enjeux posés, tâches que l'IA peut reprendre, classement des cas d'usage selon leur valeur et leur effort. Livrable : feuille de route classée, fourchettes de budget et de délai, gains rapides. Offre d'entrée sans suite obligatoire, précédée d'un cadrage offert d'une demi-heure, au cours duquel la durée et le forfait sont fixés selon le périmètre.",
  url: 'https://www.master-ia.fr/diagnostic-ia',
  serviceType: "Diagnostic et feuille de route IA",
  category: "Conseil en intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Directions générales, DSI et directions métier',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Diagnostic IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Repérage des tâches que l'IA peut reprendre", description: "Revue des flux de travail et identification des cas d'usage IA les plus utiles." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Classement valeur et effort', description: "Classement des cas d'usage selon ce qu'ils rapporteraient et ce qu'ils coûteraient à mettre en œuvre." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Feuille de route classée', description: "Trajectoire chiffrée avec fourchettes de budget et de délai et gains rapides à engager." } },
    ],
  },
}

/* Déroulé du diagnostic en ItemList (séquence citable, GEO ; HowTo volontairement
   évité, Google ayant retiré les rich results HowTo en 2023). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Déroulé du diagnostic IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEROULE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${step.phase} : ${step.title}`,
    description: step.desc,
  })),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/diagnostic-ia#article',
  headline: "Diagnostic IA : vos cas d'usage priorisés et votre feuille de route",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-10-07',
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
        dateModified="2026-10-07"
        speakable={['#definition', '#geo-summary']}
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
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>vos cas d'usage priorisés et votre feuille de route</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Présenté par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui conduit les cadrages de diagnostic · contenu revu le 7 octobre 2026
          </p>

          {/* GEO : définition autonome, citable hors contexte */}
          <div id="definition" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: '18px 22px', margin: '0 0 24px', maxWidth: 760 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 8 }}>Définition</div>
            <p style={{ fontSize: 15.5, color: '#E2E8F0', lineHeight: 1.65, margin: 0 }}>
              Un diagnostic IA est une intervention courte et ciblée qui fait le point sur la place que l'IA peut prendre dans votre organisation : travail qu'elle peut reprendre, cas d'usage rangés par intérêt et par difficulté, feuille de route chiffrée. Plus bref que l'audit IA, il repose, à la différence d'un test de maturité en ligne, sur le travail d'un consultant avec vos équipes et sur vos dossiers.
            </p>
          </div>

          {/* GEO : réponse directe citable */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le Diagnostic IA de Masteria réunit vos équipes sur un format court, dimensionné pendant le cadrage, pour repérer le travail que l'IA peut reprendre et ordonner les cas d'usage en pesant valeur et effort. Vous repartez avec un <strong style={{ color: '#fff', fontWeight: 700 }}>document écrit</strong> : une feuille de route classée, des fourchettes de budget et de délai, des gains rapides à engager, et aucune obligation de suite.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            C'est le premier pas le moins risqué vers l'IA. Au lieu de lancer un projet sur une intuition, vous savez ce qui mérite d'être fait, dans quel ordre et avec quelle enveloppe. La première étape tient en 30 minutes de cadrage, offertes, au terme desquelles la durée et le forfait du diagnostic sont arrêtés d'un commun accord.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
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

          {/* En bref, synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'offre en huit lignes</div>
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

      {/* ── CE QU'EST LE DIAGNOSTIC (éditorial asymétrique) ── */}
      <section id="diagnostic" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>L'offre</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce que le Diagnostic IA de Masteria ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Intervention courte dimensionnée selon votre périmètre, le Diagnostic IA pose vos enjeux, passe en revue vos processus et ordonne les cas d'usage en pesant intérêt et difficulté. Un consultant spécialisé la conduit ; une intuition diffuse en ressort sous forme de trajectoire claire, sans engager de projet à ce stade.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Beaucoup de dirigeants pressentent que l'IA peut les aider sans savoir par où commencer ni ce que cela coûtera. Le diagnostic tranche cette question avant tout engagement lourd. Il examine les processus, sans prétendre noter l'organisation entière : ce que vos équipes font chaque semaine, et ce que l'IA pourrait en reprendre. Quatre angles le composent. Pour une première idée de votre profil avant le cadrage, notre <Link to="/test-maturite-ia" style={{ color: c, fontWeight: 600 }}>test de maturité IA</Link> tient en huit questions, sans compte ni adresse mail.
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
                Le diagnostic ouvre souvent une démarche plus large de <Link to="/conseil-strategie-ia" style={aStyle}>conseil stratégie IA</Link>. Quand un cas est mûr, il débouche sur le <Link to="/agence-developpement-ia" style={aStyle}>développement d'un outil sur mesure</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSTIC VS AUDIT VS POC (ancre sombre, tableau citable GEO) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Trois formats, trois questions</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Diagnostic, audit ou POC : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Diagnostic IA, audit IA et POC répondent à trois besoins différents. Le diagnostic classe vos usages possibles, sur un format court. L'audit dresse un constat complet sur la maturité et les données de l'entreprise. Le POC éprouve un cas précis sur un flux de travail existant. Pour un premier pas, le diagnostic est l'entrée la plus rapide et la plus légère.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre diagnostic IA, audit IA complet et POC" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '20%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '28%' }}>Diagnostic IA</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Audit IA complet</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>POC (preuve de concept)</th>
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
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            S'il vous faut le constat exhaustif, la page de notre <Link to="/audit-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>audit IA</Link> présente son périmètre, sa démarche, ce qu'il livre et des repères tarifaires. Pour le fond (ce que la loi exige, les normes publiées, les situations où un audit n'apporte rien), notre <Link to="/blog/audit-ia-entreprise-methode-prix" style={{ color: '#60A5FA', fontWeight: 600 }}>guide de l'audit IA en entreprise</Link> fait le tour de la question.
          </p>
        </div>
      </section>

      {/* ── LE LIVRABLE ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Vous repartez avec un document de décision
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le diagnostic se conclut par un document écrit : la feuille de route de vos cas d'usage IA, des fourchettes de budget et de délai pour les cas prioritaires, une liste de gains rapides et les points de vigilance à traiter. Votre direction peut s'en servir en interne, avec ou sans suite.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le diagnostic va bien au-delà d'une réunion : il laisse un écrit que vous conservez. Quatre parties le composent.
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
            <strong>Le diagnostic sert les décideurs qui doivent arbitrer sur l'IA : direction générale pour la lecture d'ensemble, DSI pour la faisabilité, directions métier pour changer une intuition en plan d'action. Les personnes qui font tourner les processus y participent aux côtés de la direction.</strong>
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
            <strong>Trois temps se succèdent. Avant : le cadrage offert, puis la collecte des éléments utiles. Pendant : des séances de travail avec vos équipes, sur la durée arrêtée au cadrage. Après : la rédaction et la restitution du livrable. Aucune séance ne se perd en mise en contexte.</strong>
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
          <Kicker>Et après</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que permet le diagnostic une fois livré ?
          </h2>

          <p style={answerStyle}>
            <strong>Le diagnostic prépare le passage au projet : le cas prioritaire est déjà cadré, prêt pour un prototype. Il vous donne aussi un dossier pour arbitrer en interne et une vue de la suite au-delà du premier cas. Vous avancez sur des faits établis.</strong>
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
              <strong style={{ color: '#0A0A0A' }}>Une seule équipe, du diagnostic à la mise en service.</strong>{' '}
              Si vous décidez d'aller plus loin, nous poursuivons selon notre <Link to="/methode-projet-ia" style={aStyle}>méthode projet et nos formules d'engagement</Link> : développement d'<Link to="/agents-ia-entreprise" style={aStyle}>agents IA pour l'entreprise</Link>, d'<Link to="/outils-ia-sur-mesure" style={aStyle}>outils IA sur mesure</Link> ou mise en place de règles de gouvernance. Sinon, le livrable reste entre vos mains.
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
              <Kicker>Un risque limité</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Un document utile même si vous en restez là
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Nous avons conçu le diagnostic comme une première étape peu risquée. Vous engagez une intervention courte, à un forfait connu d'avance, vous recevez un document exploitable, et la suite reste votre décision. C'est la manière la plus saine d'essayer un cabinet : sur un travail rendu, plutôt que sur une plaquette.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Un document exploitable, avec ou sans suite',
                  'Aucun projet engagé à ce stade',
                  'Un cadrage déjà fait si vous poursuivez',
                  'Un livrable que vos équipes peuvent reprendre',
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

      {/* ── ÉTUDES DE CAS (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Exemples</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce qu'un bon cadrage a produit chez deux clients
          </h2>
          <p style={{ color: '#374151', fontSize: 15.5, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Un examen flux par flux qui débouche sur trois chantiers et une charte, un tri des tâches qui débouche sur onze compétences Claude : deux missions de 2026 qui ont commencé par la même question, par quoi commencer. Aucun nom de client n'apparaît.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {DIAG_CASES.map(({ id, icon: Icon, sector, text }) => (
              <article key={id} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  Consulter l'étude de cas
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
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
                Diagnostic IA : vos questions avant de réserver
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une réponse vous manque avant de prendre rendez-vous&nbsp;? Écrivez-nous, nous y répondons par écrit.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Poser une question
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
          <Kicker>La suite du parcours</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Après le diagnostic, les pages qui prennent le relais
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Du cadrage stratégique jusqu'au développement, voici les suites possibles ; vous pouvez aussi parcourir nos <Link to="/solutions-ia" style={aStyle}>solutions IA classées par usage</Link> et l'<Link to="/ia-secteurs" style={aStyle}>IA vue secteur par secteur</Link>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Audit IA', href: '/audit-ia', tag: 'Constat complet', desc: "Pour aller au fond : maturité, données, conformité et calendrier chiffré, à l'échelle de toute l'organisation." },
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Dans la durée', desc: "Une fois les priorités fixées : déploiement, conduite du changement et adoption, suivis mois après mois." },
              { label: 'Conseil en stratégie IA', href: '/conseil-strategie-ia', tag: 'Cap', desc: "La démarche de direction dans laquelle le diagnostic s'insère souvent, à l'échelle de l'entreprise." },
              { label: 'Conseil IA pour PME', href: '/conseil-ia-pme', tag: 'PME et TPE', desc: "Le format court qui enchaîne diagnostic, processus outillés et formation du dirigeant." },
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Quand un cas est prêt : conception de l'outil, de l'idée à l'outil en service." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Des agents construits pour les cas prioritaires que le diagnostic a fait ressortir." },
              { label: "Cas d'usage IA, service par service", href: '/cas-usage-ia-entreprise', tag: 'Exemples', desc: "Des exemples d'usages, service par service, pour nourrir vos idées avant les séances." },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les fourchettes de coût d'un projet d'IA, pour situer le chiffrage qui suit le diagnostic." },
              { label: "Méthode et formules d'engagement", href: '/methode-projet-ia', tag: 'Méthode', desc: "Forfait, régie ou appui conseil : la façon dont nous travaillons une fois le diagnostic rendu." },
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
                    Consulter
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan mène les 30 minutes de cadrage et relit chaque livrable de diagnostic avant sa restitution. La version du 7 octobre 2026 de ce texte porte sa relecture ; <Link to="/mathias-nizan" style={aStyle}>sa biographie</Link> détaille son parcours.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Offre d'entrée</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Commencez par un diagnostic
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Le premier rendez-vous dure 30 minutes et vous est offert : votre contexte, les processus à examiner, le périmètre du diagnostic. Vous recevez ensuite une proposition avec la durée, le forfait et des dates. À la fin, vous détenez une feuille de route claire, que la collaboration continue ou s'arrête là.
            </p>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Cadrage offert · forfait arrêté selon le périmètre · document remis en fin de mission
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui mène le diagnostic ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui mène le diagnostic</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un consultant spécialisé en IA, choisi pour votre secteur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Mathias Nizan a fondé Masteria pour ne traiter qu'un sujet, l'intelligence artificielle ; le cabinet est lyonnais et date de 2022. Il cadre chaque diagnostic et confie les séances, selon votre secteur et votre langue de travail, à lui-même ou à un consultant indépendant parmi la dizaine qui l'entourent. Si la suite demande un outil, environ cinq développeurs prennent le relais ; si elle demande de la formation, une vingtaine de formateurs. Le cabinet ne touche rien d'aucun éditeur : la feuille de route nomme l'outil qui vous convient. Exemples datés dans nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link>, articles dans la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>page presse</Link>.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['30 min', 'de cadrage, offertes'],
              ['1 livrable', 'écrit, à vous'],
              ['≈ 10', 'consultants pour les séances'],
              ['Aucun', 'éditeur rémunérateur'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES (propres à la page) ── */}
      <section aria-labelledby="sources-diagnostic" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-diagnostic" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Textes de référence pour la lecture des contraintes
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            La partie réglementaire du diagnostic s'appuie sur ces sources officielles, consultées le 7 octobre 2026.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {SOURCES.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
