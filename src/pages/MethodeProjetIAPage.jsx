import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Rocket, GraduationCap,
  Package, Compass, ShieldCheck, KeyRound, Lock, Database,
  Scale, Cpu, Building2, Check, ServerCog, Handshake,
  Clock, MonitorSmartphone, Sun, Factory, Landmark,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import CadrageLink from '../components/CadrageLink'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « méthode projet IA et modèles d'engagement » (slug /methode-projet-ia).
 * Angle propre à la page : la MÉTHODE PAS À PAS (cinq étapes, rythme des échanges
 * pendant la construction, livrables) puis les trois modèles d'engagement
 * (forfait, régie avec développeurs détachés, conseil seul). La régie est une
 * capacité OFFERTE, jamais une mission passée nommée.
 * Rythme de construction repris du standard des propositions de développement
 * fixé le 07/10/2026 : livraisons utilisables, version d'essai en ligne, point de
 * 30 minutes chaque semaine à jours constants, démonstration et décision à la fin
 * de chaque livraison.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards ni de
 * FounderNote, cas cités en deux phrases (faits de src/data/etudes-de-cas.js),
 * calendrier AI Act à jour (art. 4 depuis le 02/02/2025, art. 50 depuis le
 * 02/08/2026, annexe III reportée à décembre 2027 par le règlement 2026/1744).
 * « poc ia » reste à l'article /blog/poc-ia-passer-en-production.
 * Design premium cabinet identique à /agence-developpement-ia, accent #2563EB.
 */

const SLUG = 'methode-projet-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Méthode projet IA et modèles d'engagement | Masteria"
const META_DESC = "Méthode projet IA en cinq étapes, un point d'avancement chaque semaine et trois modèles d'engagement : forfait, régie, conseil. Code remis au client."
// « poc ia » est laissé à l'article /blog/poc-ia-passer-en-production, qui traite
// de front le passage du pilote à la production. Cette page garde l'intention
// « méthode et engagement contractuel ».
const KEYWORDS = "méthode projet ia, projet ia, conduite de projet ia, méthodologie projet ia, cadrage projet ia, mvp ia, régie ia"

/* Sources citées par la page (WebPage.citation + liens visibles). */
const PAGE_CITATIONS = [
  { name: "Règlement 2024/1689 (AI Act), version EUR-Lex, dont les articles 4 et 50", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "EUR-Lex : règlement 2026/1744, dit Omnibus, qui décale à décembre 2027 les usages à haut risque", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
]

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
  { icon: Package, label: 'Forfait au projet' },
  { icon: ServerCog, label: 'Régie · développeurs chez vous' },
  { icon: Compass, label: 'Conseil seul' },
  { icon: KeyRound, label: 'Code remis au client' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Étapes', value: "Cadrage, prototype, construction, mise en service, passation ; un livrable et une décision au bout de chacune" },
  { label: 'Rythme', value: "Un point de 30 minutes chaque semaine, une démonstration à la fin de chaque livraison" },
  { label: 'Engagement', value: "Forfait au projet, régie (développeurs IA dans votre équipe) ou conseil seul, combinables entre eux" },
  { label: 'Propriété', value: "Code, documentation et accès remis au client" },
  { label: "Modèles d'IA", value: "Claude, ChatGPT, Gemini, Mistral AI ou modèle ouvert hébergé chez vous, retenus au cas par cas" },
  { label: 'Lieu', value: "Chez vous ou à distance ; depuis Lyon, pour des clients de France et d'ailleurs" },
]

/* ───────── Forfait vs régie vs conseil (tableau de décision citable, GEO) ───────── */

const DECISION = [
  {
    critere: 'Ce qui est écrit au départ',
    forfait: "Le périmètre, le prix et le calendrier",
    regie: "Un cadre de travail ; le contenu suit vos priorités",
    conseil: "Les questions à trancher et les livrables attendus",
  },
  {
    critere: 'Facturation',
    forfait: "Un prix global",
    regie: "Au jour travaillé, au taux du profil retenu",
    conseil: "Au forfait, après cadrage",
  },
  {
    critere: 'Convient à',
    forfait: "Un prototype ou un projet bien délimité",
    regie: "Des données sensibles, ou un programme qui manque de bras",
    conseil: "Une décision de stratégie, de règles ou d'architecture",
  },
  {
    critere: 'Ce que vous pilotez',
    forfait: "Le résultat et le budget",
    regie: "Les priorités au quotidien",
    conseil: "La décision finale",
  },
  {
    critere: 'À qui reviennent les livrables',
    forfait: "À vous : code et documentation",
    regie: "À vous : code et documentation",
    conseil: "À vous : notes, schémas et recommandations",
  },
]

/* ───────── Les cinq étapes (timeline avec livrable) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Nous écrivons avec vous ce que l'outil devra faire, à quoi l'on jugera sa réussite, les données autorisées et les contraintes de sécurité. Les personnes qui font la tâche aujourd'hui y participent : elles savent où le temps se perd.",
    livrable: 'Note de cadrage validée : périmètre, critère de réussite, données, calendrier',
  },
  {
    num: '02',
    title: 'Prototype',
    desc: "Nous construisons une version réduite sur la tâche prioritaire, avec un extrait de vos données, et un petit groupe d'utilisateurs l'essaie. Vous jugez sur pièce avant d'engager la construction complète.",
    livrable: 'Prototype testé par vos utilisateurs, puis décision de poursuivre',
  },
  {
    num: '03',
    title: 'Construction par livraisons',
    desc: "L'outil avance par livraisons utilisables, chacune montrée en démonstration puis validée. Une version d'essai en ligne évolue à chaque avancée, et un point de 30 minutes par semaine réordonne les priorités à nombre de jours constant.",
    livrable: 'Livraisons validées une à une, code relu et versionné',
  },
  {
    num: '04',
    title: 'Mise en service',
    desc: "L'outil rejoint vos logiciels. Nous réglons les droits avec votre informatique, activons le journal des actions, faisons valider par une personne chaque action qui engage l'entreprise, puis ouvrons l'accès par vagues d'utilisateurs.",
    livrable: 'Outil en service, branché sur vos logiciels',
  },
  {
    num: '05',
    title: 'Passation',
    desc: "Les utilisateurs s'entraînent avec leurs dossiers du moment ; un référent apprend à corriger les consignes et à ajouter des sources. Vous repartez avec le code (son dépôt complet), sa documentation et les droits d'administration.",
    livrable: 'Documentation, référent formé, code remis',
  },
]

/* ───────── Le rythme pendant la construction ───────── */

const RYTHME = [
  { icon: Clock, title: 'Un point de 30 minutes par semaine', desc: "Avec Mathias Nizan ou le consultant du projet, parfois un développeur. On regarde ce qui a avancé, ce qui bloque, et l'on réordonne les priorités sans toucher au nombre de jours prévu." },
  { icon: MonitorSmartphone, title: "Une version d'essai toujours en ligne", desc: "Vous testez l'outil quand vous le souhaitez, sur une adresse réservée, sans attendre la démonstration suivante." },
  { icon: Check, title: 'Une démonstration, puis une décision', desc: "Chaque livraison se termine devant les futurs utilisateurs. Vous validez, demandez un ajustement ou réorientez la suite." },
]

/* ───────── Votre part du travail ───────── */

const VOTRE_PART = [
  { icon: Handshake, title: 'Un décideur', desc: "Une personne de la direction valide le cadrage, assiste aux démonstrations qui comptent et tranche quand deux priorités s'opposent." },
  { icon: GraduationCap, title: 'Un référent interne', desc: "Il suit le projet au quotidien, participe au point hebdomadaire et deviendra le gardien de l'outil après la passation." },
  { icon: Database, title: "L'accès aux données et aux logiciels", desc: "Des extraits de données pour le prototype, puis des accès de test à vos logiciels, accordés par votre informatique selon vos règles." },
  { icon: Check, title: 'Des utilisateurs qui testent', desc: "Quelques personnes qui accomplissent la tâche aujourd'hui essaient chaque livraison et disent ce qui les aide ou les gêne." },
]

/* ───────── Les 3 modèles d'engagement ───────── */

const MODELES = [
  {
    icon: Package,
    title: 'Forfait au projet',
    tagline: 'Périmètre, prix et calendrier écrits',
    desc: "Le montant total est connu dès la signature. La proposition décrit les livraisons, leur contenu et leurs dates ; une demande nouvelle en cours de route reçoit son propre chiffrage. Ce modèle convient au prototype comme au projet bien délimité.",
    points: [
      'Montant total connu au départ',
      'Livraisons datées et décrites',
      'Demandes nouvelles chiffrées à part',
    ],
  },
  {
    icon: ServerCog,
    title: 'Régie · développeurs chez vous',
    tagline: 'Nos développeurs IA intégrés à vos équipes',
    desc: "Nos développeurs IA, un ou plusieurs, intègrent votre équipe sur votre site ou en télétravail, suivent vos rituels et travaillent dans vos outils. C'est la formule des environnements où les données ne quittent pas l'entreprise, et des programmes qui manquent de bras. Vous fixez les priorités ; le cabinet assure la méthode et la relecture du code.",
    points: [
      'Sur place ou à distance',
      'Données gardées dans votre SI',
      'Priorités fixées par vous',
    ],
  },
  {
    icon: Compass,
    title: 'Conseil seul',
    tagline: 'Cadrage, règles, architecture',
    desc: "Quand la question se pose avant toute construction, nous intervenons en conseil : choix des usages, règles d'usage et de données, architecture et modèles, feuille de route. Vous construisez ensuite avec nous, avec une autre équipe ou en interne. Comme tout conseil, cette mission n'est pas finançable par votre OPCO.",
    points: [
      'Feuille de route datée',
      "Règles d'usage et de données",
      "Choix d'architecture et de modèles",
    ],
  },
]

/* ───────── Sécurité et conformité (4 cartes) ───────── */

const GOUVERNANCE = [
  {
    icon: KeyRound,
    title: 'Le code vous revient',
    desc: "Aucune licence captive : vous exploitez, modifiez et faites évoluer l'outil avec qui vous voulez, nous compris.",
  },
  {
    icon: Lock,
    title: 'La confidentialité par écrit',
    desc: "Un engagement de confidentialité signé, des accès limités au strict nécessaire, un journal des échanges avec le modèle.",
  },
  {
    icon: Database,
    title: 'Des données sous votre contrôle',
    desc: "Pour les données sensibles, le travail se fait dans votre système d'information ; sinon, un hébergement européen est possible. Vos données ne servent qu'au projet.",
  },
  {
    icon: Scale,
    title: 'Le RGPD et l\'AI Act lus pour votre cas',
    desc: "Registre RGPD mis à jour, information des utilisateurs quand ils échangent avec une machine (transparence imposée par l'article 50, en application depuis le 2 août 2026), classement de l'usage selon son risque. Quant aux systèmes classés à haut risque (annexe III), leurs obligations ne s'appliqueront qu'en décembre 2027.",
  },
]

/* ───────── Pourquoi cette méthode (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Cpu,
    title: 'Une ossature éprouvée en mission',
    desc: "Cadrage avec la direction, lecture des tâches, priorités classées par impact et faisabilité, construction sur vos fichiers, formation, mesure : nos quatre études de cas publiées suivent cette même ossature.",
  },
  {
    icon: GraduationCap,
    title: 'La formation fait partie du métier',
    desc: "Masteria détient Qualiopi au titre des actions de formation ; la passation figure donc au planning dès la proposition. Depuis le 2 février 2025, l'AI Act oblige, par son article 4, les entreprises à prendre des mesures pour que leurs équipes maîtrisent les systèmes d'IA en usage.",
  },
  {
    icon: Cpu,
    title: 'Des modèles choisis librement',
    desc: "Claude, ChatGPT, Gemini, Mistral AI ou un modèle ouvert : la recommandation suit votre cas et votre budget, et aucune commission d'éditeur ne l'oriente.",
  },
  {
    icon: Handshake,
    title: 'Le même responsable à chaque étape',
    desc: "Mathias Nizan suit chaque projet. Les décisions se prennent vite, et le contexte ne se perd pas d'un sous-traitant à l'autre.",
  },
]

/* ───────── La méthode en situation (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const METHODE_CASES = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Photovoltaïque · équipe de trois',
    figure: '4',
    figureLabel: 'flux de travail décrits avant toute construction',
    text: "Trois entretiens (direction, commercial, opérations), quatre flux de travail détaillés, douze gisements de temps triés selon leur impact et leur faisabilité : le cadrage a précédé tout outil. La session de formation prévue sur place en octobre 2026 relèvera les points de départ, et un bilan suivra un mois plus tard.",
  },
  {
    id: 'industrie',
    icon: Factory,
    sector: 'Packaging · groupe international',
    figure: '3',
    figureLabel: 'ajustements entre la session pilote et la suivante',
    text: "Après la session pilote de l'été 2026, un bilan à chaud a conduit à vérifier les licences, à composer les tables par métier et à protéger du temps pour les assistants. Le dispositif gagne les États-Unis et le Mexique en octobre 2026, puis l'Inde en décembre.",
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    sector: 'Conseil financier · secteur public',
    figure: '4',
    figureLabel: 'ateliers de deux heures pour écrire et tester les assistants',
    text: "Chaque assistant a été rédigé avec les consultants, puis éprouvé sur des dossiers de consultation récents. Un guide répartit ensuite les mises à jour au sein du cabinet, et le dispositif vit désormais sans nous.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Pouvez-vous placer un développeur IA dans nos équipes ?",
    a: "Oui, c'est le modèle de la régie. Nous détachons un ou plusieurs développeurs IA auprès de votre équipe, chez vous ou à distance selon vos règles ; ils suivent vos rituels et travaillent dans vos outils. La formule convient quand vos données ne peuvent pas sortir de chez vous, ou quand un programme en cours manque de compétences en IA. Durée, nombre de profils et présence sur site se décident avec vous.",
  },
  {
    q: "À qui appartient le code développé ?",
    a: "À vous, dans les trois modèles. Code source, documentation et droits d'administration vous sont transmis, sans licence captive. Vous pouvez poursuivre avec nous, avec votre propre équipe, ou avec une autre société.",
  },
  {
    q: "Comment se passent les échanges pendant la construction ?",
    a: "Un point de 30 minutes chaque semaine permet de voir ce qui a avancé et de réordonner les priorités à nombre de jours constant. Une version d'essai en ligne reste accessible pour tester quand vous le souhaitez. Chaque livraison se termine par une démonstration et une décision : valider, ajuster ou réorienter.",
  },
  {
    q: "Intervenez-vous sur site ou seulement à distance ?",
    a: "Les deux. Les ateliers de cadrage, les heures passées à observer les postes et la passation gagnent à se faire chez vous ; la construction avance bien à distance. En régie, la présence sur site se décide selon vos règles de sécurité. Masteria part de Lyon et travaille en France comme hors de France.",
  },
  {
    q: "Comment choisir entre forfait, régie et conseil ?",
    a: "Le forfait sert les besoins bien définis, quand le budget doit être arrêté d'avance. La régie convient quand vous voulez des développeurs IA au sein de votre équipe, pour des données sensibles ou un programme qui manque de bras. Le conseil convient quand la décision à prendre précède la construction. Un cadrage en conseil peut précéder un forfait, lui-même suivi d'une régie.",
  },
  {
    q: "Qu'est-ce que la régie IA ?",
    a: "La régie met à votre disposition un ou plusieurs développeurs spécialisés en IA, payés au jour travaillé. Au forfait, le contenu et le prix sont fixés d'avance ; en régie, le travail suit vos priorités au fil des semaines. Vous dirigez le travail, et le cabinet répond de la qualité : méthode, relecture du code, modèles retenus.",
  },
  {
    q: "Travaillez-vous avec des PME ou seulement des grands groupes ?",
    a: "Avec les deux. Une PME commence souvent par un prototype au forfait sur une tâche précise ; un groupe combine plutôt conseil, forfait et régie sur plusieurs pays. Nos études de cas couvrent aussi bien une PME de trois personnes qu'un groupe du packaging implanté sur plusieurs continents.",
  },
  {
    q: "Qui s'occupe de l'outil une fois en service ?",
    a: "La passation rend votre équipe autonome : documentation, référent formé, utilisateurs formés. Si vous préférez nous confier la suite, nous assurons la maintenance (corrections, évolutions) au forfait ou en régie. Comme le code vous appartient, rien n'empêche de garder la maintenance en interne ou de la confier à un tiers.",
  },
  {
    q: "Quels modèles d'IA utilisez-vous ?",
    a: "Nous ne sommes liés à aucun éditeur. Selon le cas : Claude d'Anthropic, ChatGPT d'OpenAI, Gemini de Google, un modèle signé Mistral AI, ou bien un modèle ouvert hébergé chez vous lorsque la confidentialité l'exige. Pour trancher, nous tenons compte du coût d'usage, de la qualité attendue et de l'endroit où les données doivent rester.",
  },
  {
    q: "Que faut-il préparer avant les 30 minutes de cadrage ?",
    a: "Rien de formel. Il suffit de savoir quelle tâche vous coûte du temps, qui l'accomplit, dans quels logiciels, et ce que vous attendez de l'outil. Si vous disposez d'exemples de documents ou de fichiers, gardez-les sous la main : ils rendent l'échange concret.",
  },
  {
    q: "Combien de temps dure un projet IA, du cadrage à la mise en service ?",
    a: "Un prototype demande souvent quelques semaines. Un projet complet s'étend sur quelques mois dès qu'il faut relier plusieurs logiciels et respecter des exigences de conformité. Les étapes, chacune close par une décision, vous laissent avancer palier par palier.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: "Méthode projet IA et modèles d'engagement Masteria",
  alternateName: "Forfait, régie ou conseil : trois façons d'engager Masteria sur un projet IA",
  description: "Conduite de projets d'IA en cinq étapes (cadrage, prototype, construction par livraisons, mise en service, passation), point hebdomadaire de 30 minutes, et trois modèles d'engagement : forfait au projet, régie avec développeurs IA dans l'équipe du client, conseil seul. Code remis au client, RGPD et AI Act pris en compte dès le cadrage.",
  url: 'https://www.master-ia.fr/methode-projet-ia',
  serviceType: "Conduite de projets d'intelligence artificielle",
  category: "Développement de solutions IA sur mesure",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Modèles d'engagement d'un projet IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Forfait au projet', description: "Périmètre, prix et calendrier écrits avant le démarrage." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Régie : développeurs IA dans l'équipe du client", description: "Un ou plusieurs développeurs, sur place ou à distance, pour des données sensibles ou un programme qui manque de bras." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conseil seul', description: "Choix des usages, règles, architecture et feuille de route, avant toute construction." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/methode-projet-ia#article',
  headline: "Méthode projet IA : nos étapes et nos modèles d'engagement",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/methode-projet-ia#webpage' },
  about: ["Conduite de projet d'intelligence artificielle", 'Prototype et passage en production', 'Régie informatique', 'Développement de solutions IA'],
}

/* Méthode en 5 étapes décrite en ItemList (séquence citable, GEO ; HowTo
   volontairement évité, Google ayant retiré les rich results HowTo en 2023). */
const methodeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Méthode projet IA Masteria en cinq étapes',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: ETAPES.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
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

export default function MethodeProjetIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (pourquoi + FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Méthode & modèles d\'engagement', slug: SLUG },
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
        citations={PAGE_CITATIONS}
        datePublished="2026-06-13"
        dateModified="2026-10-07"
        extraJsonLd={[serviceJsonLd, methodeJsonLd, articleJsonLd]}
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
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Méthode & modèles d'engagement</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Notre façon de conduire un projet · étape par étape
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Méthode projet IA&nbsp;:{' '}
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>nos étapes et nos modèles d'engagement</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Méthode rédigée par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui l'applique à chaque mission · version du 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un projet IA mené avec Masteria traverse cinq étapes : le cadrage, le prototype, la construction, la mise en service et la passation à vos équipes. Chacune se termine par un livrable et une décision. <strong style={{ color: '#fff', fontWeight: 700 }}>Trois modèles d'engagement sont possibles (forfait, régie ou conseil seul), et le code développé vous revient dans tous les cas.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Quand un projet engage plusieurs équipes, la façon de travailler d'un prestataire compte autant que son prix. Cette page décrit nos étapes une à une, le rythme des échanges pendant la construction, puis les trois modèles d'engagement et notre manière de traiter la sécurité.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <a href="#modeles" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comparer les trois modèles
            </a>
          </div>

          {/* badges → chips sombres */}
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

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>La méthode en six lignes</div>
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

      {/* ── LES CINQ ÉTAPES (timeline à rail avec livrable) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Les cinq étapes</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule un projet IA, du cadrage à la passation ?
          </h2>

          <p style={answerStyle}>
            <strong>Cinq étapes se succèdent, chacune close par un livrable : la note de cadrage, le prototype, l'outil construit par livraisons, la mise en service dans votre système d'information, puis la passation avec documentation et formation. Au terme de chaque étape, vous décidez de poursuivre, d'ajuster ou d'arrêter.</strong>
          </p>
          {/* Renvoi vers l'article qui traite le passage du POC à la production. */}
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 16, maxWidth: 720 }}>
            Entre un prototype qui fonctionne et un outil en service, plusieurs obstacles se dressent ; notre article <Link to="/blog/poc-ia-passer-en-production" style={{ color: '#2563EB', fontWeight: 600 }}>les 5 murs entre le POC et la production</Link> les passe en revue.
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 44, lineHeight: 1.7, maxWidth: 880 }}>
            La même trame vaut pour chaque mission, quelle que soit sa taille ; seule la durée des étapes varie. Comme chaque étape aboutit à une décision, le projet ne s'enlise pas, et la main reste de votre côté.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 10px', maxWidth: 760 }}>{step.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '6px 12px', fontSize: 13, color: '#374151', fontWeight: 600 }}>
                    <Check size={14} strokeWidth={2.6} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    Livrable : {step.livrable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Le rythme pendant la construction */}
          <h3 style={{ ...h3Style, fontSize: 19, margin: '56px 0 8px' }}>
            Le rythme pendant la construction
          </h3>
          <p style={{ color: '#374151', fontSize: 15, marginBottom: 24, lineHeight: 1.7 }}>
            Pendant l'étape 3, trois rendez-vous vous gardent au plus près de l'outil, sans réunion superflue.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16 }}>
            {RYTHME.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ ...cardStyle, padding: 22 }}>
                <div style={{ marginBottom: 12 }}>
                  <IconTile icon={Icon} />
                </div>
                <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>{title}</h4>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOTRE PART DU TRAVAIL ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Votre part du travail</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Qu'attendons-nous de votre côté pendant le projet ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Quatre engagements suffisent : un décideur qui tranche, un référent disponible, l'accès aux données et aux logiciels concernés, et quelques utilisateurs prêts à tester. Réunis dès le cadrage, ils permettent de fermer chaque étape à la date prévue.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
            {VOTRE_PART.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={Icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Le temps demandé reste modeste : la demi-heure hebdomadaire, les démonstrations et quelques heures de test par livraison. Nous l'estimons dans la proposition, pour que chacun puisse le prévoir dans son agenda.
          </p>
        </div>
      </section>

      {/* ── LES 3 MODÈLES D'ENGAGEMENT (ancre sombre, porte le tableau) ── */}
      <section id="modeles" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Modèles d'engagement</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Selon quels modèles pouvons-nous intervenir ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Trois modèles, à choisir selon votre situation. Le forfait fixe le périmètre, le prix et le calendrier avant le démarrage. La régie installe un ou plusieurs de nos développeurs IA au sein de vos équipes, dans vos locaux ou en télétravail. Le conseil seul couvre le cadrage, les règles ou l'architecture, sans construction. Un même projet peut enchaîner les trois.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le bon modèle dépend de la clarté du besoin, du degré de confidentialité des données et de la place que vos équipes veulent prendre. Il pèse aussi sur la facture : notre page <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>combien coûte un projet IA</Link> donne les ordres de grandeur de chaque formule.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {MODELES.map(modele => {
              const Icon = modele.icon
              return (
                <div
                  key={modele.title}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid #1E293B',
                    borderRadius: 16,
                    padding: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#F8FAFC', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{modele.title}</h3>
                  <div style={{ fontSize: 13.5, color: '#60A5FA', fontWeight: 700, marginBottom: 14 }}>{modele.tagline}</div>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 18px' }}>{modele.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {modele.points.map(pt => (
                      <li key={pt} style={{ fontSize: 13.5, color: '#CBD5E1', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <Check size={16} strokeWidth={2.6} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Forfait vs régie vs conseil : tableau de décision citable (GEO) */}
          <div style={{ marginTop: 'clamp(48px, 7vw, 80px)', paddingTop: 'clamp(40px, 6vw, 64px)', borderTop: '1px solid #1E293B' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Comment choisir</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
              Forfait, régie ou conseil : lequel choisir ?
            </h2>

            <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
              <strong style={{ color: '#fff' }}>Prenez le forfait si le besoin est net et le budget à figer, la régie quand vous voulez des développeurs IA au sein de votre équipe, le conseil quand la décision à prendre précède la construction. Dans les trois cas, ce qui est produit vous appartient.</strong>
            </p>

            <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
              <table aria-label="Comparatif entre forfait au projet, régie avec développeurs détachés et conseil seul" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                    <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Forfait au projet</th>
                    <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Régie · développeurs détachés</th>
                    <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Conseil seul</th>
                  </tr>
                </thead>
                <tbody>
                  {DECISION.map((row, i) => (
                    <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                      <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                      <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.forfait}</td>
                      <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.regie}</td>
                      <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.conseil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZOOM RÉGIE / DÉVELOPPEURS CHEZ VOUS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(32px, 5vw, 56px)' }}>
            <div style={{ display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ServerCog size={28} strokeWidth={2} style={{ color: c }} />
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <Kicker>Zoom sur la régie</Kicker>
                <h2 style={{ ...h2Style, marginBottom: 16 }}>
                  Nous pouvons détacher des développeurs IA auprès de vos équipes
                </h2>
                <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 820 }}>
                  La régie répond à deux situations. Dans la première, vos données ne peuvent pas sortir de chez vous : le travail se fait dans vos locaux, avec vos accès. Dans la seconde, un programme déjà lancé a besoin de compétences en IA pour tenir ses dates.
                </p>
                <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 24px', maxWidth: 820 }}>
                  Le développeur suit vos rituels, utilise vos outils et rend compte à votre responsable. Le cabinet le soutient à distance : il relit son code et l'aide à choisir les modèles. Durée, nombre de profils et présence sur site se fixent avec vous, au moment du cadrage.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 12 }}>
                  {[
                    { icon: ShieldCheck, label: 'Données sensibles : le travail se fait dans votre SI' },
                    { icon: Rocket, label: 'Programme en cours : un renfort compétent en IA' },
                    { icon: Building2, label: 'Chez vous ou à distance, selon vos règles' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '14px 16px' }}>
                      <Icon size={18} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
                      <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.55 }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SÉCURITÉ ET CONFORMITÉ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Sécurité et conformité</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment traitons-nous la sécurité, les données et la conformité ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Dès le cadrage. Le code vous appartient, vos données ne servent qu'au projet, chacun n'accède qu'aux fonctions de son rôle, et l'outil journalise ses actions. Pour les données sensibles, la régie permet de travailler dans votre système d'information, et un hébergement européen reste possible. Protection des données et AI Act : leurs obligations sont examinées pour votre usage précis.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {GOUVERNANCE.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI CETTE MÉTHODE (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi cette méthode</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi nous confier votre projet IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Cette méthode vient d'un cabinet consacré à l'IA depuis ses débuts lyonnais, en 2022, et qui forme aussi : chaque projet s'achève sur des équipes capables de faire vivre l'outil. Masteria choisit les modèles sans lien avec un éditeur, et un même responsable suit votre projet du cadrage à la passation.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {POURQUOI.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                La page <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> présente l'équipe qui construit, et la page <Link to="/outils-ia-sur-mesure" style={aStyle}>développement IA sur mesure</Link> les outils qu'elle livre. Si tout reste à décider côté stratégie, notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> ouvre la démarche ; pour une première étape courte, le <Link to="/diagnostic-ia" style={aStyle}>Diagnostic IA</Link> pose la feuille de route ; il se dimensionne pendant le cadrage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE EN SITUATION (liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Études de cas</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            La méthode appliquée à trois missions de 2026
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            On y retrouve les étapes de cette page, telles qu'elles se sont déroulées ou telles qu'elles sont prévues. Les clients restent anonymes ; les faits viennent de nos dossiers.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {METHODE_CASES.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
              <article key={id} style={{ ...cardStyle, borderTop: `3px solid ${c}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                </div>
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '12px 14px' }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: c, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{figure}</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.45, marginTop: 4 }}>{figureLabel}</div>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Suivre la mission étape par étape
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
            La méthode commune à nos missions, avec leurs résultats, est détaillée sur la page <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas IA</Link>.
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
                Méthode et engagement : vos questions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Un point de méthode vous échappe ? Demandez-le par écrit, ou gardez-le pour le cadrage.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Poser une question sur la méthode
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
            Passer de la méthode à votre projet
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Les pages utiles pour la suite. Vous pouvez aussi parcourir nos <Link to="/solutions-ia" style={aStyle}>solutions IA classées par usage</Link> ou l'<Link to="/ia-secteurs" style={aStyle}>IA dans votre secteur</Link>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "L'équipe qui applique cette méthode, et ses choix techniques." },
              { label: 'Développement IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "L'outil remis en fin de projet, avec son code et sa documentation." },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Ce que coûtent les étapes et chacun des trois modèles d'engagement." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Une première étape courte, avant de lancer la méthode complète." },
              { label: 'IA en gestion de projet', href: '/ia-gestion-de-projet', tag: 'Vos projets', desc: "Un autre sujet : outiller vos chefs de projet avec l'IA, du planning au reporting." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "La stratégie et les règles, quand elles doivent précéder tout projet." },
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
                    Ouvrir
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
            Mathias Nizan a construit cette méthode au fil des missions de Masteria depuis 2022, et il la suit sur chaque projet, du premier cadrage à la passation. Version du 7 octobre 2026 ; son parcours est décrit sur <Link to="/mathias-nizan" style={aStyle}>sa page</Link>.
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
              Choisissons ensemble le bon modèle
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez votre contexte, vos contraintes de sécurité et l'aide recherchée : un projet confié au forfait, des développeurs dans votre équipe ou un regard de conseil. Pendant le cadrage, nous vous indiquons le modèle qui convient et les premières étapes.
            </p>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Forfait · régie · conseil · code remis au client · interventions en France et hors de France
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui applique la méthode (fondateur + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui applique la méthode</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Une équipe composée pour chaque projet, un responsable unique
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              La méthode est appliquée par des indépendants que Mathias Nizan réunit selon le projet : des consultants IA (une dizaine dans le réseau), des développeurs IA (cinq environ) et des formateurs, une vingtaine. Lui-même suit chaque étape et chaque décision. Masteria, fondée à Lyon en 2022, reste indépendante des éditeurs. Voir nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link>.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['5', 'étapes, chacune close par une décision'],
              ['30 min', 'de point chaque semaine pendant la construction'],
              ['3', "modèles d'engagement, combinables"],
              ['2022', 'création de Masteria, à Lyon'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources lean extra={PAGE_CITATIONS} />
    </>
  )
}
