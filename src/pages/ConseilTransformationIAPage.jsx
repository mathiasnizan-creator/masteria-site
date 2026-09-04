import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Workflow, Users, MapPin, Check, Layers, Target,
  ClipboardCheck, Gauge, GraduationCap, ShieldCheck, Cpu, RefreshCw,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « conseil en transformation IA » (slug /conseil-transformation-ia),
 * cluster CONSEIL (pas d'OPCO/Qualiopi en bandeau ; la formation associée seule est
 * finançable, en bloc secondaire).
 * Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 : « conseil transformation
 * ia » (70, KD 5, pertinence 74), « conseil transformation » (140, KD 15),
 * « conseil en transformation » (140, KD 15), « coach transformation digitale »
 * (90, KD 8), « conseil en organisation et management du changement » (70, KD 10),
 * « cabinet de conseil transformation modèle opérationnel » (50, KD 7),
 * « audit transformation digitale » (50, KD 12), « conseil innovation digitale » (90).
 *
 * RÉPARTITION D'INTENTIONS (anti-cannibalisation) :
 *  - /conseil-strategie-ia = le CAP : diagnostic, cas d'usage priorisés, feuille de route ;
 *  - /conseil-transformation-ia = CETTE page : l'ORGANISATION qui change quand l'IA
 *    entre dans le travail : processus reconçus, rôles, modèle opérationnel cible,
 *    gouvernance du programme, mesure ;
 *  - /accompagnement-ia = la PRÉSENCE dans la durée (cadrage, outils, adoption) ;
 *  - /acculturation-ia = la montée en compétence collective (formation).
 *
 * INTÉGRITÉ : posture capacité, aucun client nommé, aucun chiffre de résultat ni
 * prix inventé, jamais Bpifrance sur le site (dispositifs publics en termes
 * génériques). Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'conseil-transformation-ia'
const ENTITY = "Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan"
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conseil en transformation IA : organisation, processus, rôles | Masteria"
const META_DESC = "Conseil en transformation IA : cadrage du programme, refonte des processus, modèle opérationnel cible, gouvernance et conduite du changement pour une entreprise qui passe à l'IA à l'échelle. Cadrage gratuit."
const KEYWORDS = "conseil transformation ia, conseil en transformation, conseil transformation, cabinet de conseil transformation, transformation ia entreprise, cabinet de conseil transformation modèle opérationnel, coach transformation digitale, conseil en organisation et management du changement, conseil innovation digitale, audit transformation digitale, programme de transformation ia"

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
  { icon: Compass, label: 'Cabinet spécialisé IA depuis 2022' },
  { icon: Workflow, label: 'Processus, rôles, pilotage' },
  { icon: Users, label: 'Du COMEX aux équipes terrain' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Mission', value: "Réorganiser le travail autour de l'IA : processus reconçus, rôles redéfinis, programme piloté et mesuré" },
  { label: 'Livrables', value: "Diagnostic de transformation, modèle opérationnel cible, portefeuille de cas d'usage, plan de programme, gouvernance, tableau de mesure" },
  { label: 'Rythme', value: "Un cadrage de quelques semaines, puis un programme suivi par trimestre, avec un premier gain visible dès le premier cycle" },
  { label: 'Différence', value: "La stratégie fixe le cap, l'accompagnement assure la présence : la transformation change l'organisation elle-même" },
  { label: 'Prix', value: "Forfait fixé après un cadrage gratuit ; le conseil n'est pas finançable par votre OPCO, la formation associée l'est" },
  { label: 'Cabinet', value: ENTITY },
]

/* ───────── Prestations (5 cartes) ───────── */

const PRESTATIONS = [
  {
    icon: ClipboardCheck,
    title: 'Diagnostic de transformation',
    desc: "Un audit de votre transformation digitale et de vos usages IA réels : ce qui est déployé, ce que les équipes font déjà sans cadre, où le temps se perd, ce que la direction attend. Le diagnostic dit ce qu'il faut transformer en premier, et ce qu'il ne faut pas toucher.",
  },
  {
    icon: Workflow,
    title: "Refonte des processus avec l'IA",
    desc: "Processus par processus, nous redessinons le flux quand l'IA en prend une partie : ce qui est produit par l'outil, ce qui est relu, ce qui est décidé par une personne, ce qui disparaît. Avec les équipes qui vivent le processus, jamais sur un schéma en salle.",
  },
  {
    icon: Layers,
    title: 'Modèle opérationnel cible',
    desc: "Quand l'IA fait une partie du travail, les rôles changent : relecteur, superviseur, référent, propriétaire de cas d'usage. Nous décrivons l'organisation cible, les compétences qu'elle suppose, et le chemin depuis l'organisation actuelle, fonction par fonction.",
  },
  {
    icon: Gauge,
    title: 'Gouvernance et pilotage du programme',
    desc: "Un programme de transformation IA se pilote comme un portefeuille : cas d'usage priorisés, comité qui arbitre, rythme de revue, règles d'usage, budget par vague. Nous installons ce pilotage, léger, et nous le tenons avec vous le temps qu'il tienne seul.",
  },
  {
    icon: RefreshCw,
    title: 'Conduite du changement et mesure',
    desc: "Le changement se conduit par les managers, avec des équipes formées sur leurs cas, et se mesure sur le travail rendu plutôt que sur le taux d'adoption. Nous écrivons la chaîne de conversion au cadrage et nous la relevons à chaque cycle.",
  },
]

/* ───────── Digital classique vs transformation IA (tableau sombre) ───────── */

const TABLE = [
  {
    critere: 'Point de départ',
    sans: "Un outil choisi, déployé, puis une campagne d'adoption",
    avec: "Des usages qui émergent des équipes, à cadrer et à étendre",
  },
  {
    critere: 'Rythme',
    sans: 'Programme pluriannuel, lots, jalons de déploiement',
    avec: 'Cycles de quelques semaines, un gain mesuré par cycle',
  },
  {
    critere: 'Rôle des équipes',
    sans: "Utilisateurs d'un logiciel, formés à ses écrans",
    avec: 'Relecteurs et superviseurs de ce que produit l\'IA',
  },
  {
    critere: 'Risque principal',
    sans: 'Le projet en retard et le budget dépassé',
    avec: 'Les données, la qualité des sorties, la dépendance à un éditeur',
  },
  {
    critere: 'Mesure',
    sans: "Taux d'adoption, nombre de licences actives",
    avec: 'Temps rendu, erreurs évitées, délais raccourcis, par processus',
  },
]

/* ───────── Méthode (timeline) ───────── */

const METHODE = [
  {
    periode: 'Semaines 1-3',
    title: 'Diagnostic de transformation',
    desc: "Entretiens avec la direction et les métiers, observation des processus, inventaire des usages IA déjà présents, lecture des données et des outils. Restitution : ce qu'il faut transformer en premier, ce qui relève de la formation, ce qui relève des données.",
  },
  {
    periode: 'Semaines 4-6',
    title: 'Modèle opérationnel cible et portefeuille',
    desc: "L'organisation cible fonction par fonction, les rôles qui changent, le portefeuille de cas d'usage priorisés par gain et par faisabilité, le plan de programme par vagues, la gouvernance et la chaîne de conversion qui servira à mesurer.",
  },
  {
    periode: 'Trimestre 1',
    title: 'Première vague : processus reconçus et équipes formées',
    desc: "Deux à quatre processus reconçus avec les équipes, outillés, mis en production ; les managers et les équipes concernées formés sur leurs cas ; le comité de programme réuni chaque mois pour arbitrer. Un premier gain mesuré avant la fin du trimestre.",
  },
  {
    periode: 'Trimestres suivants',
    title: 'Extension, mesure, autonomie',
    desc: "Les vagues suivantes étendent la transformation à d'autres processus et fonctions ; les référents internes prennent le relais ; la mesure alimente les arbitrages. Notre présence diminue à mesure que le pilotage tient seul.",
  },
]

/* ───────── Pourquoi Masteria (4 cartes) ───────── */

const WHY = [
  { icon: Cpu, title: 'Un cabinet qui ne fait que de l\'IA', desc: "Les cabinets de conseil en transformation traitent l'IA comme un sujet parmi d'autres. Nous ne faisons que cela depuis 2022 : nous savons ce que les outils produisent réellement, où ils se trompent, et ce qu'un processus peut leur confier sans risque." },
  { icon: Workflow, title: 'Nous transformons et nous construisons', desc: "Quand un processus reconçu demande un agent, une automatisation ou un assistant documentaire, nous le développons. Le conseil ne s'arrête pas à un schéma cible que personne ne sait mettre en œuvre." },
  { icon: Users, title: 'Un consultant senior, pas une armée', desc: "Une transformation IA se mène avec un intervenant senior qui connaît vos processus et un réseau d'indépendants expérimentés mobilisés à la demande. Vous payez le travail, pas la pyramide d'un grand cabinet." },
  { icon: ShieldCheck, title: 'Indépendant des éditeurs', desc: "Aucune licence à vendre, aucun partenariat qui oriente la recommandation. L'outil suit le processus reconçu, pas l'inverse ; et nous disons quand l'outil déjà en place suffit." },
]

/* ───────── Les erreurs d'une transformation IA ───────── */

const ERREURS = [
  { title: "Commencer par l'outil", desc: "Acheter des licences pour toute l'entreprise, puis chercher quoi en faire. Les usages restent individuels, les processus ne bougent pas, et la direction conclut que l'IA ne rend rien. L'ordre inverse fonctionne : le processus d'abord, l'outil ensuite." },
  { title: 'Déléguer à la DSI seule', desc: "La transformation IA touche le travail des métiers ; la DSI en sécurise les outils et les données, elle ne peut pas redessiner les processus des autres. Le programme se porte par la direction générale, avec les métiers, la DSI en partenaire." },
  { title: 'Le programme pluriannuel sans premier gain', desc: "Un schéma directeur sur trois ans, des ateliers de cadrage pendant six mois, aucun processus transformé la première année. L'énergie retombe. Un premier gain mesuré dans le premier trimestre est la condition pour que le reste suive." },
  { title: 'Oublier les rôles', desc: "Mettre l'IA dans un processus sans dire qui relit, qui valide, qui est responsable de ce qu'elle produit. Les erreurs passent, la confiance se perd. Le modèle opérationnel cible existe pour cette raison." },
  { title: "Mesurer l'adoption au lieu du travail", desc: "Le taux de connexion mesure l'usage d'un logiciel, pas la transformation. Ce qui compte : le temps rendu par processus, les erreurs évitées, les délais raccourcis, et ce que les équipes font de ce temps." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que le conseil en transformation IA ?",
    a: "C'est l'accompagnement d'une entreprise qui réorganise son travail autour de l'intelligence artificielle, au-delà du déploiement d'outils : quels processus reconcevoir et comment, quels rôles changent quand l'IA produit une partie du travail, comment piloter et mesurer un programme qui touche plusieurs fonctions. Chez Masteria, la mission comprend un diagnostic de transformation, un modèle opérationnel cible, un portefeuille de cas d'usage priorisés, la gouvernance du programme et une chaîne de mesure, puis une présence par trimestre pendant les premières vagues. Elle est menée par un cabinet qui ne fait que de l'IA et qui construit aussi les solutions.",
  },
  {
    q: "Quelle différence avec le conseil en stratégie IA et l'accompagnement IA ?",
    a: "Trois missions, trois questions. Le conseil en stratégie IA répond à « où aller » : diagnostic de maturité, cas d'usage priorisés, feuille de route. Le conseil en transformation IA répond à « comment l'organisation change » : processus reconçus, rôles, modèle opérationnel cible, pilotage du programme. L'accompagnement IA répond à « qui est là pendant que ça se fait » : cadrage, choix des outils, déploiement, adoption, dans la durée. Une entreprise peut n'avoir besoin que de l'une ; les trois s'enchaînent quand la transformation est réelle.",
  },
  {
    q: "En quoi êtes-vous différents d'un cabinet de conseil en transformation classique ?",
    a: "Par le périmètre et par la méthode. Un cabinet de conseil en transformation traite l'organisation dans son ensemble, avec des équipes nombreuses, sur des programmes longs, et l'IA y est un chapitre. Nous ne faisons que de l'IA depuis 2022 : nous savons ce que les outils produisent réellement et ce qu'un processus peut leur confier. Nous travaillons avec un intervenant senior et un réseau d'indépendants, par cycles courts, avec un premier gain mesuré dans le premier trimestre. Et nous construisons les solutions que la transformation réclame, ce qu'un cabinet de conseil pur ne fait pas.",
  },
  {
    q: "Avons-nous besoin d'un coach de transformation digitale ?",
    a: "Si votre besoin est d'accompagner un dirigeant ou un comité dans le pilotage d'une transformation, c'est bien un rôle de coach de transformation, et nous le tenons : présence au comité de programme, préparation des arbitrages, lecture des signaux faibles, franchise sur ce qui ne marche pas. Ce rôle ne remplace pas le travail sur les processus et les rôles ; il le rend possible. Au cadrage, nous disons si votre situation demande le coaching seul, le programme complet, ou d'abord une formation des dirigeants.",
  },
  {
    q: "Combien de temps dure une mission de conseil en transformation IA ?",
    a: "Le diagnostic et le modèle opérationnel cible se font en quelques semaines. La transformation elle-même se conduit par trimestres : une première vague de processus reconçus et d'équipes formées, puis des vagues d'extension. Notre présence est forte au cadrage et pendant la première vague, puis diminue à mesure que le pilotage interne tient seul. La durée totale dépend du nombre de fonctions concernées ; elle se justifie vague par vague dans la proposition, jamais en engagement pluriannuel signé d'avance.",
  },
  {
    q: "Combien coûte une mission, et peut-elle être financée ?",
    a: "La mission se chiffre au forfait par phase, après un cadrage gratuit qui délimite le périmètre : fonctions, processus, nombre de vagues. Le conseil n'est pas finançable par votre OPCO, qui couvre la formation ; en revanche, le volet formation de la transformation (dirigeants, managers, équipes sur leurs cas) est certifié Qualiopi et finançable. Selon votre taille, votre secteur et votre région, des dispositifs publics de soutien au conseil et à la transformation numérique peuvent s'appliquer ; nous faisons le point sur ceux qui sont mobilisables lors du cadrage.",
  },
  {
    q: "Quelle est la place de la DSI dans une transformation IA ?",
    a: "Celle d'un partenaire indispensable, pas celle du porteur. La DSI sécurise les outils, les accès et les données, choisit les architectures, intègre les solutions au système d'information et tient la conformité. Elle ne peut pas redessiner les processus des métiers ni décider des rôles dans les équipes. Le programme se porte par la direction générale avec les directions métier ; la DSI y siège avec un droit de veto sur la sécurité et les données. Les transformations qui échouent sont souvent celles qui ont été confiées à la DSI seule, ou menées contre elle.",
  },
  {
    q: "Faut-il vraiment un modèle opérationnel cible ?",
    a: "Oui, dès que l'IA fait une partie du travail dans plus d'une fonction. Sans description des rôles qui changent, personne ne sait qui relit ce que l'outil produit, qui en est responsable, qui décide d'étendre un usage. Le modèle opérationnel cible n'est pas un organigramme : c'est la description, fonction par fonction, de ce que font les personnes quand l'IA fait le reste, des compétences que cela suppose et du chemin pour y arriver. Pour une PME, il tient en quelques pages ; pour un groupe, il se décline par direction.",
  },
  {
    q: "Comment mesurez-vous une transformation IA ?",
    a: "Sur le travail rendu, processus par processus, avec une chaîne de conversion écrite au cadrage : temps libéré, erreurs évitées, délais raccourcis, puis ce que l'entreprise fait de ce temps (volume traité, qualité, chiffre d'affaires, service). Le taux d'adoption et le nombre de licences actives sont suivis, mais ils ne prouvent rien. Nous refusons les pourcentages de productivité annoncés d'avance : les gains se mesurent après chaque vague, sur vos indicateurs, et ils décident de la vague suivante.",
  },
  {
    q: "Le conseil en transformation IA concerne-t-il les PME ?",
    a: "Oui, à leur échelle. Une PME n'a pas besoin d'un programme de groupe : un diagnostic court, deux ou trois processus reconçus, des rôles clarifiés dans une équipe, un dirigeant qui pilote avec un tableau de mesure simple. C'est souvent la transformation la plus rapide, parce que les décisions se prennent vite. Pour une ETI ou un groupe, le programme se structure par directions et par vagues, avec un comité et des référents. Le cadrage, gratuit, dit quel format convient.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conseil en transformation IA (Masteria)',
  alternateName: "Conseil en transformation par l'intelligence artificielle",
  description: "Conseil en transformation IA pour entreprises : diagnostic de transformation, refonte des processus avec l'IA, modèle opérationnel cible, gouvernance et pilotage du programme, conduite du changement et mesure. Cabinet spécialisé IA, indépendant des éditeurs.",
  url: 'https://www.master-ia.fr/conseil-transformation-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-transformation-ia#webpage' },
  serviceType: "Conseil en transformation par l'intelligence artificielle",
  category: 'Conseil en organisation et transformation',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: { '@type': 'BusinessAudience', audienceType: 'PME, ETI et groupes' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations de conseil en transformation IA',
    itemListElement: PRESTATIONS.map(p => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.title, description: p.desc } })),
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "La méthode de transformation IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({ '@type': 'ListItem', position: i + 1, name: `${step.periode} : ${step.title}`, description: step.desc })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conseil-transformation-ia#article',
  headline: "Conseil en transformation IA : réorganiser le travail, pas seulement déployer des outils",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-transformation-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Transformation numérique', sameAs: 'https://fr.wikipedia.org/wiki/Transformation_num%C3%A9rique' },
    { '@type': 'Thing', name: 'Conduite du changement', sameAs: 'https://fr.wikipedia.org/wiki/Conduite_du_changement' },
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
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
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

export default function ConseilTransformationIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Conseil en transformation IA', slug: SLUG },
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
        datePublished="2026-09-04"
        dateModified="2026-09-04"
        speakable={['#geo-summary', '#en-bref']}
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd]}
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Conseil en transformation IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <RefreshCw size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil · Transformation IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Conseil en transformation IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>réorganiser le travail, pas seulement déployer des outils</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le conseil en transformation IA accompagne une entreprise qui réorganise son travail autour de l'intelligence artificielle : <strong style={{ color: '#fff', fontWeight: 700 }}>processus reconçus, rôles redéfinis, programme piloté et mesuré</strong>. {ENTITY.split(',')[0]} mène ce travail avec la direction et les métiers, et construit les solutions que la transformation réclame.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une entreprise ne se transforme pas parce qu'elle a déployé un outil d'IA : elle se transforme quand ses processus, ses rôles et son pilotage ont changé pour en tirer parti. C'est ce travail-là, celui de l'organisation, que nous menons. Le cap relève de la stratégie ; la présence dans la durée, de l'accompagnement.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre transformation
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Ce que nous faisons
            </a>
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

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

      {/* ── PRESTATIONS (éditorial asymétrique) ── */}
      <section id="prestations" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Nos prestations</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que couvre une mission de conseil en transformation IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Cinq chantiers, dans cet ordre : un diagnostic de transformation, la refonte des processus avec l'IA, le modèle opérationnel cible, la gouvernance du programme, puis la conduite du changement et la mesure. Chaque chantier a un livrable et un responsable chez vous.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le cap se fixe en amont avec notre <Link to="/conseil-strategie-ia" style={aStyle}>conseil en stratégie IA</Link> ; la présence pendant le déploiement relève de notre <Link to="/accompagnement-ia" style={aStyle}>accompagnement IA</Link>. Ici, c'est l'organisation qui change.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PRESTATIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Target size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Ce que nous ne faisons pas</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Ni plan social, ni restructuration financière, ni refonte d'un ERP : ce sont d'autres métiers. Nous transformons le travail autour de l'IA, et nous disons quand votre sujet relève d'un autre cabinet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIGITAL CLASSIQUE vs TRANSFORMATION IA (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Pourquoi ce n'est pas une transformation digitale de plus</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Transformation digitale classique ou transformation IA : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La transformation digitale déployait un outil puis organisait son adoption. La transformation IA part d'usages qui existent déjà dans les équipes, souvent sans cadre, et change la nature du travail : les personnes relisent et supervisent ce que l'IA produit. Les méthodes de programme classiques, pensées pour des déploiements de logiciels, s'y appliquent mal.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre transformation digitale classique et transformation IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Transformation digitale classique</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Transformation IA</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.sans}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.avec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Un audit de transformation digitale reste utile : il dit ce que vos outils et vos données permettent. Notre diagnostic le comprend, et ajoute ce que les équipes font déjà avec l'IA.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE (timeline) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>
            Comment se déroule une transformation IA avec Masteria ?
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Un diagnostic de quelques semaines, un modèle opérationnel cible et un portefeuille de cas d'usage, puis des vagues par trimestre : la première reconçoit deux à quatre processus avec les équipes formées, et mesure un premier gain avant sa fin. Les suivantes étendent, et notre présence diminue à mesure que le pilotage tient seul.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div key={step.periode} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0') }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>{step.periode}</div>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 740 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '24px 0 0' }}>
            Ce déroulé est représentatif, pas contractuel : une PME condense le diagnostic et la première vague en un trimestre ; un groupe étale les vagues par direction. Le rythme se pose au cadrage, gratuit. La mesure suit la chaîne de conversion décrite sur notre page <Link to="/roi-ia-entreprise" style={aStyle}>ROI de l'IA en entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── LES ERREURS D'UNE TRANSFORMATION IA ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les cinq erreurs qui font échouer une transformation IA
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Commencer par l'outil, déléguer à la DSI seule, lancer un programme pluriannuel sans premier gain, oublier les rôles, mesurer l'adoption au lieu du travail rendu. Aucune n'est une question de budget ; toutes sont une question d'ordre.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {ERREURS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: '3px solid #DC2626' }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi un cabinet IA plutôt qu'un cabinet de conseil en transformation ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce que la transformation IA se joue dans le détail de ce que les outils produisent et de ce qu'un processus peut leur confier. Un cabinet qui ne fait que de l'IA depuis 2022, qui construit les solutions et forme les équipes, tient ce détail. Un cabinet généraliste tient le programme.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les deux peuvent travailler ensemble : le programme d'entreprise chez votre cabinet, le chantier IA chez nous. Nos <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas</Link> montrent ce que cela produit.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {WHY.map(card => {
                const Icon = card.icon
                return (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                      <h3 style={{ ...h3Style, fontSize: 15.5 }}>{card.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMATION (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Le volet formation</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                La transformation tient quand les équipes sont formées sur leurs cas
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Chaque vague comprend la formation des managers et des équipes concernées, sur les processus reconçus et leurs livrables réels. Ce volet est certifié Qualiopi et finançable par votre OPCO ; le conseil et le développement restent des prestations de service, hors financement formation. Pour embarquer toute l'organisation, la démarche d'<Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link> ouvre souvent le programme.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Managers formés avant les équipes', 'Ateliers sur les processus reconçus', 'Référents internes par direction', 'Formation certifiée Qualiopi, finançable OPCO'].map(pt => (
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
                Conseil en transformation IA : les questions fréquentes
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
            La transformation s'appuie sur un cap, une présence dans la durée, une gouvernance et une mesure.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Conseil stratégie IA', href: '/conseil-strategie-ia', tag: 'Le cap', desc: "Diagnostic de maturité, cas d'usage priorisés, feuille de route : ce qui précède la transformation." },
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Dans la durée', desc: "La présence pendant le déploiement : cadrage, choix des outils, adoption, mesure." },
              { label: 'Conseil IA pour PME', href: '/conseil-ia-pme', tag: 'PME et TPE', desc: "Le format court : un diagnostic d'une journée, deux ou trois processus, le dirigeant qui décide." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'État des lieux', desc: "L'évaluation complète, maturité, données, outils, conformité, quand la direction veut une vision opposable." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Formation', desc: "La montée en compétence collective qui ouvre et soutient le programme : conférence, ateliers, référents." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Cadre', desc: "Registre des usages, politique IA, comité, conformité au règlement européen : le cadre du programme." },
              { label: "ROI de l'IA en entreprise", href: '/roi-ia-entreprise', tag: 'Mesure', desc: "La chaîne de conversion qui sert à mesurer une transformation sur le travail rendu." },
              { label: 'Chief AI Officer à temps partagé', href: '/chief-ai-officer', tag: 'Pilotage', desc: "Qui pilote le programme quand le poste n'existe pas : un mandat, un comité, quelques jours par mois." },
              { label: 'Méthode projet IA', href: '/methode-projet-ia', tag: 'Construction', desc: "Comment nous construisons les solutions que la transformation réclame : forfait, régie, équipe dédiée." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "L'ensemble de nos missions de conseil IA, du diagnostic au développement." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Conseil en transformation IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Cadrons votre transformation IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre organisation, ce que les équipes font déjà avec l'IA et ce que la direction attend. Nous revenons vers vous sous 24 heures avec un format de mission : diagnostic seul, première vague, ou programme complet, avec son forfait par phase.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cabinet spécialisé IA depuis 2022 · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              {ENTITY} n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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
