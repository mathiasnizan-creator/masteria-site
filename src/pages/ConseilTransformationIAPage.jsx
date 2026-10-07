import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Compass, Workflow, Users, MapPin, Check, Layers, Target,
  ClipboardCheck, Gauge, GraduationCap, ShieldCheck, Cpu, RefreshCw, Factory, ExternalLink,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { CADRAGE_HREF, CADRAGE_LABEL } from '../data/offre-entree'
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
 *  - /conseil-strategie-ia = le CAP : état des lieux, cas d'usage priorisés, feuille de route ;
 *  - /conseil-transformation-ia = CETTE page : l'ORGANISATION qui change quand l'IA
 *    entre dans le travail : processus reconçus, rôles, modèle opérationnel cible,
 *    gouvernance du programme, mesure ;
 *  - /conseil-ia-pme = le format court des petites structures ;
 *  - /accompagnement-ia = la PRÉSENCE dans la durée (cadrage, outils, adoption) ;
 *  - /acculturation-ia = la montée en compétence collective (formation).
 *
 * INTÉGRITÉ : aucun client nommé, aucun chiffre de résultat ni prix inventé, jamais
 * Bpifrance sur le site (dispositifs publics en termes génériques). Cas cités :
 * src/data/etudes-de-cas.js (faits révisés le 05/10/2026).
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de FounderNote ni de bloc
 * « Qui intervient » commun, sources propres à la page, deux cas cités avec lien
 * vers leur ancre. Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'conseil-transformation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conseil en transformation IA : processus et rôles | Masteria"
const META_DESC = "Conseil en transformation IA : processus redessinés, rôles clarifiés, modèle opérationnel cible, programme piloté par vagues et mesuré. Cadrage offert."
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
  { icon: Compass, label: "Un seul métier : l'IA, depuis 2022" },
  { icon: Workflow, label: 'Processus, rôles, pilotage' },
  { icon: Users, label: 'De la direction aux équipes' },
  { icon: MapPin, label: 'Lyon · Europe · États-Unis · Inde' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Mission', value: "Réorganiser le travail autour de ce que l'IA produit : processus reconçus, rôles redéfinis, programme suivi vague après vague" },
  { label: 'Livrables', value: "Lecture de l'organisation actuelle, modèle opérationnel cible, liste des cas à traiter, plan par vagues, règles de pilotage, tableau de mesure" },
  { label: 'Rythme', value: "Quelques semaines pour cadrer, puis des cycles trimestriels ; un premier résultat mesuré avant la fin du premier" },
  { label: 'Périmètre', value: "La stratégie choisit la destination, l'accompagnement assure la présence ; cette mission fait bouger l'organisation elle-même" },
  { label: 'Prix', value: "Un forfait par phase, établi une fois le cadrage terminé ; seule la formation associée peut être financée par votre OPCO" },
  { label: 'Qui', value: "Mathias Nizan, qui a créé le cabinet à Lyon en 2022, entouré d'indépendants (conseil, développement, formation) choisis pour votre programme" },
]

/* ───────── Prestations (5 cartes) ───────── */

const PRESTATIONS = [
  {
    icon: ClipboardCheck,
    title: 'Lecture de votre transformation',
    desc: "Un audit de votre transformation digitale vue sous l'angle de l'IA : les outils déployés, les pratiques apparues sans aucune règle, les endroits où les heures s'évaporent, les attentes de la direction. Cette lecture désigne ce qu'il faut transformer en premier, et ce qui doit rester en l'état.",
  },
  {
    icon: Workflow,
    title: "Processus redessinés autour de l'IA",
    desc: "Processus après processus, nous redessinons le flux dès que l'IA en reprend une part : ce que l'outil rédige, ce qu'une personne relit, ce qu'un responsable tranche, ce qui disparaît. Ce travail se fait avec les équipes qui vivent le processus, sur leurs dossiers, jamais devant un schéma en salle.",
  },
  {
    icon: Layers,
    title: 'Modèle opérationnel cible',
    desc: "Les rôles bougent dès que l'IA prend une part du travail : relecteur, superviseur, référent, propriétaire d'un cas d'usage. Nous décrivons l'organisation visée, les compétences qu'elle demande et le chemin pour y parvenir depuis l'organisation actuelle, fonction par fonction.",
  },
  {
    icon: Gauge,
    title: 'Pilotage du programme',
    desc: "Un programme de transformation IA se gère comme un portefeuille : des cas classés, un comité qui arbitre, un rythme de revue, des règles d'usage, un budget par vague. Nous installons ce pilotage, volontairement léger, et nous le tenons à vos côtés jusqu'à ce que vos équipes le mènent seules.",
  },
  {
    icon: RefreshCw,
    title: 'Conduite du changement et mesure',
    desc: "Les managers portent le changement, avec des équipes formées sur leurs propres cas. La mesure porte sur le travail accompli, bien davantage que sur le nombre de connexions : nous écrivons dès le cadrage la façon de convertir le temps gagné en résultat, puis nous la relevons à chaque cycle.",
  },
]

/* ───────── Digital classique vs transformation IA (tableau sombre) ───────── */

const TABLE = [
  {
    critere: 'Point de départ',
    sans: "Un logiciel choisi par la direction, déployé, puis une campagne d'adoption",
    avec: 'Des usages déjà présents dans les équipes, à encadrer puis à étendre',
  },
  {
    critere: 'Rythme',
    sans: 'Programme sur plusieurs années, découpé en lots et en jalons',
    avec: 'Cycles de quelques semaines, chacun avec un gain relevé',
  },
  {
    critere: 'Rôle des équipes',
    sans: "Utilisateurs d'un logiciel, formés à ses écrans",
    avec: "Relecteurs et superviseurs de ce que l'IA rédige ou calcule",
  },
  {
    critere: 'Risque principal',
    sans: 'Un projet en retard, un budget dépassé',
    avec: "Les données exposées, la qualité des réponses, la dépendance envers un éditeur",
  },
  {
    critere: 'Mesure',
    sans: "Taux d'adoption, nombre de licences actives",
    avec: 'Heures rendues, erreurs évitées, délais raccourcis, processus par processus',
  },
]

/* ───────── Méthode (timeline) ───────── */

const METHODE = [
  {
    periode: 'Premières semaines',
    title: "Lecture de l'organisation",
    desc: "Entretiens avec les dirigeants et les responsables métier, observation des processus sur place, inventaire des usages IA déjà présents, examen des données et des logiciels. À la restitution : ce qu'il faut transformer d'abord, ce qui relève d'une formation, ce qui relève d'un chantier de données.",
  },
  {
    periode: 'Semaines suivantes',
    title: 'Organisation cible et liste des cas',
    desc: "L'organisation visée fonction par fonction, les rôles qui changent, les cas d'usage classés selon leur gain et leur faisabilité, le découpage en vagues, les règles de pilotage et la méthode de mesure qui servira tout au long du programme.",
  },
  {
    periode: 'Premier trimestre',
    title: 'Première vague : processus reconçus, équipes formées',
    desc: "Deux à quatre processus reconçus avec les équipes, outillés, mis en service ; les managers et les personnes concernées formés sur leurs cas ; un comité de programme réuni chaque mois pour arbitrer. Un premier résultat mesuré avant la fin du trimestre.",
  },
  {
    periode: 'Trimestres suivants',
    title: 'Extension et autonomie',
    desc: "Les vagues suivantes gagnent d'autres processus et d'autres fonctions ; les référents internes prennent la main ; les mesures nourrissent les arbitrages. Notre présence décroît à mesure que votre pilotage tient sans nous.",
  },
]

/* ───────── Pourquoi Masteria (4 cartes) ───────── */

const WHY = [
  { icon: Cpu, title: "L'IA comme unique sujet", desc: "Pour un cabinet de transformation généraliste, l'IA reste un chapitre parmi d'autres. Depuis 2022, elle est le seul sujet de Masteria : nous connaissons ce que les modèles rédigent de fiable, les endroits où ils se trompent et la part d'un processus qu'on peut leur confier sans risque." },
  { icon: Workflow, title: 'Nous reconcevons, puis nous construisons', desc: "Quand un processus reconçu réclame un agent, une automatisation ou un assistant documentaire, nos développeurs le réalisent. Le schéma cible se transforme en outil utilisé, au lieu de rester dans un rapport que personne ne sait mettre en œuvre." },
  { icon: Users, title: 'Une petite équipe senior', desc: "Mathias Nizan pilote chaque programme et s'adjoint au besoin consultants, développeurs ou formateurs indépendants. Vous rémunérez le travail fourni, sans financer les étages d'un grand cabinet." },
  { icon: ShieldCheck, title: 'Aucune licence à vendre', desc: "Aucun partenariat commercial n'oriente nos recommandations. L'outil se choisit après le processus reconçu, et nous le disons franchement quand l'outil déjà en place suffit." },
]

/* ───────── Les erreurs d'une transformation IA ───────── */

const ERREURS = [
  { title: "Commencer par l'outil", desc: "Acheter des licences pour toute l'entreprise, puis chercher à quoi elles serviront. Les usages restent individuels, les processus ne bougent pas, et la direction conclut que l'IA ne rend rien. L'ordre inverse fonctionne : le processus d'abord, l'outil ensuite." },
  { title: 'Confier le programme à la DSI seule', desc: "La transformation IA touche le travail des métiers. La DSI sécurise les outils et les données ; elle n'a pas la légitimité pour redessiner les processus des autres directions. La direction générale porte le programme avec les métiers, la DSI en partenaire." },
  { title: 'Un plan sur trois ans sans résultat la première année', desc: "Un schéma directeur pluriannuel, six mois d'ateliers de cadrage, aucun processus transformé avant longtemps : l'énergie retombe. Un premier gain mesuré dès le premier trimestre conditionne la suite." },
  { title: 'Oublier les rôles', desc: "Introduire l'IA dans un processus sans dire qui relit, qui valide et qui répond de ce qu'elle produit. Les erreurs passent, la confiance s'effrite. Le modèle opérationnel cible sert précisément à écrire ces responsabilités." },
  { title: "Compter les connexions au lieu du travail", desc: "Le taux de connexion décrit l'usage d'un logiciel ; il ne dit rien de la transformation. Les bons indicateurs : les heures rendues par processus, les erreurs évitées, les délais raccourcis, et l'usage que les équipes font du temps libéré." },
]

/* ───────── Études de cas citées (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const TRANSFO_CASES = [
  {
    id: 'industrie',
    icon: Factory,
    sector: 'Industrie · groupe international',
    figure: '3 ajustements',
    figureLabel: 'apportés entre la session pilote et la suivante',
    text: "Pour un groupe du packaging, le déploiement avance par paliers mesurés. Après la session pilote, trois corrections ont précédé la seconde : les licences ont été contrôlées, les tables regroupées par métier, et du temps réservé à la construction des assistants. Le Data manager du groupe est devenu le garant des règles d'usage et de la collection de prompts partagée par les 24 pilotes ; le dispositif gagne les sites américains et mexicains en octobre 2026, puis l'Inde en décembre.",
  },
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distribution IT B2B · 58 salariés',
    figure: '10 référents',
    figureLabel: 'formés en juin 2026, chacun propriétaire d\'une compétence',
    text: "Chez ce distributeur, la transformation passe par un rôle nouveau : dix référents, deux jours de formation en juin, un projet chacun. Chacun a bâti une compétence Claude pour une tâche de son poste ; la direction relit et valide avant toute diffusion ; un propriétaire nommé, une revue trimestrielle et un dépôt versionné font vivre l'ensemble. Les autres salariés, une cinquantaine, recevront ces compétences entre octobre et décembre 2026.",
  },
]

/* ───────── Sources (liens d'autorité propres à la page) ───────── */

const SOURCES = [
  { label: "L'AI Act dans sa version officielle (n° 2024/1689), sur le site EUR-Lex", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "Le règlement 2026/1744, surnommé Omnibus numérique, qui décale les obligations à haut risque", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { label: "Ce que la CNIL demande quand une IA traite des données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "En quoi consiste le conseil en transformation IA ?",
    a: "C'est l'appui d'un cabinet à une entreprise qui réorganise son travail autour de l'intelligence artificielle, bien au-delà du déploiement d'un outil : quels processus reconcevoir et comment, quels rôles changent quand l'IA rédige ou calcule une partie du travail, comment piloter et mesurer un programme qui traverse plusieurs fonctions. Chez Masteria, la mission comprend une lecture de l'organisation, un modèle opérationnel cible, une liste de cas classés, le pilotage du programme et une méthode de mesure, puis une présence trimestrielle pendant les premières vagues. Le même cabinet construit les outils que la transformation demande.",
  },
  {
    q: "Quelle différence avec le conseil en stratégie IA et l'accompagnement IA ?",
    a: "Trois missions, trois questions. Le conseil en stratégie IA répond à « où aller » : état des lieux, classement des cas, calendrier daté. Le conseil en transformation IA répond à « comment l'organisation change » : les processus à reconcevoir, les rôles, le modèle opérationnel cible, le pilotage. L'accompagnement IA répond à « qui reste à vos côtés pendant le déploiement » : choix des outils, mise en service, adoption. Une entreprise peut n'avoir besoin que de l'une ; les trois s'enchaînent quand l'organisation bouge en profondeur.",
  },
  {
    q: "Comment vous situez-vous face à un cabinet de transformation classique ?",
    a: "Le périmètre d'abord, la méthode ensuite. Un cabinet de transformation généraliste traite l'organisation entière, avec des équipes nombreuses, sur des programmes longs, et l'IA n'y occupe qu'un chapitre. Masteria travaille sur l'IA seule depuis 2022, par cycles courts, avec un premier gain mesuré au premier trimestre. Mathias Nizan pilote chaque programme avec des indépendants choisis pour lui. Enfin, nous construisons les outils que la transformation réclame, tâche qu'un cabinet purement consultatif laisse à d'autres.",
  },
  {
    q: "Avons-nous besoin d'un coach de transformation digitale ?",
    a: "Si votre besoin est d'épauler un dirigeant ou un comité dans le pilotage d'une transformation, il s'agit bien d'un rôle de coach, et nous le tenons : présence au comité de programme, préparation des arbitrages, lecture des signaux faibles, franchise sur ce qui ne marche pas. Ce rôle rend possible le travail sur les processus et les rôles ; il ne le remplace pas. Au cadrage, nous disons si votre situation appelle le coaching seul, le programme complet, ou d'abord une formation des dirigeants.",
  },
  {
    q: "Quelle durée prévoir pour une transformation IA ?",
    a: "La lecture de l'organisation et le modèle cible prennent quelques semaines. La transformation elle-même avance par trimestres : une première vague de processus reconçus et d'équipes formées, puis des vagues d'extension. Notre présence est forte au démarrage et pendant la première vague, puis elle diminue à mesure que votre pilotage interne tient. La durée totale dépend du nombre de fonctions concernées ; chaque vague se justifie dans la proposition, sans engagement pluriannuel signé d'avance.",
  },
  {
    q: "Combien coûte une mission, et peut-elle être financée ?",
    a: "Chaque phase a son forfait, chiffré après les 30 minutes de cadrage offertes, une fois connus les fonctions, les processus et le nombre de vagues. Pour fixer les idées, une première lecture resserrée se règle en quelques milliers d'euros ; comptez plusieurs dizaines de milliers pour un programme couvrant plusieurs directions. Le conseil n'est pas finançable par votre OPCO, contrairement à la formation, qui peut concerner les dirigeants, les managers puis chaque équipe sur ses cas ; Masteria étant certifiée Qualiopi, votre opérateur de compétences peut en assurer le financement, selon ses règles et ses fonds. D'éventuelles aides publiques au conseil s'examinent aussi pendant le cadrage, selon votre profil.",
  },
  {
    q: "Quelle est la place de la DSI dans une transformation IA ?",
    a: "Celle d'un partenaire indispensable, sans être le porteur. La DSI sécurise les outils, les accès et les données, choisit les architectures, raccorde les solutions au système d'information et veille à la conformité. Elle ne peut pas redessiner les processus des métiers ni décider des rôles dans leurs équipes. La direction générale porte le programme avec les directions métier ; la DSI y siège avec un droit de veto sur la sécurité et les données. Les transformations qui échouent ont souvent été confiées à la DSI seule, ou menées contre elle.",
  },
  {
    q: "Un modèle opérationnel cible est-il indispensable ?",
    a: "Oui, dès que l'IA prend en charge une part du travail dans plus d'une fonction. Sans description des rôles qui changent, personne ne sait qui relit ce que l'outil produit, qui en répond, qui décide d'étendre un usage. Le modèle opérationnel cible décrit, fonction par fonction, ce que font les personnes quand l'IA fait le reste, les compétences que cela suppose et le chemin pour y arriver ; il va bien plus loin qu'un organigramme. Pour une PME, il tient en quelques pages ; pour un groupe, il se décline par direction.",
  },
  {
    q: "Comment mesurez-vous une transformation IA ?",
    a: "Processus par processus, sur le travail accompli, avec une méthode écrite dès le cadrage : heures libérées, erreurs évitées, délais raccourcis, puis ce que l'entreprise fait de ce temps (volume traité, qualité, chiffre d'affaires, service rendu). Le taux d'adoption et le nombre de licences actives sont suivis, sans servir de preuve. Aucun pourcentage de productivité n'est promis d'avance : les gains se constatent après chaque vague, sur vos indicateurs, et ils orientent la vague suivante.",
  },
  {
    q: "Le conseil en transformation IA concerne-t-il les PME ?",
    a: "Oui, en version resserrée. Dans une PME, la transformation tient souvent en une lecture rapide, deux ou trois processus reconçus, des rôles clarifiés dans une équipe et un dirigeant qui suit un tableau de mesure simple. Les décisions s'y prennent vite, ce qui accélère tout. Dans une ETI ou un groupe, le programme se structure par directions et par vagues, avec un comité et des référents. Le cadrage indique le format adapté ; la page consacrée au conseil IA des PME détaille la version courte.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conseil en transformation IA (Masteria)',
  alternateName: "Conseil en transformation par l'intelligence artificielle",
  description: "Conseil en transformation IA pour entreprises : lecture de l'organisation, processus redessinés autour de l'IA, modèle opérationnel cible, pilotage du programme par vagues, conduite du changement et mesure. Cabinet spécialisé en IA, indépendant des éditeurs.",
  url: 'https://www.master-ia.fr/conseil-transformation-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-transformation-ia#webpage' },
  serviceType: "Conseil en transformation par l'intelligence artificielle",
  category: 'Conseil en organisation et transformation',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
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
  headline: "Conseil en transformation IA : réorganiser le travail autour de ce que l'IA produit",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-10-07',
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
        dateModified="2026-10-07"
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
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>réorganiser le travail autour de ce que l'IA produit</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Texte de <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui pilote nos programmes de transformation · revu le 7 octobre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le conseil en transformation IA aide une entreprise à réorganiser son travail une fois que l'intelligence artificielle en assure une part : <strong style={{ color: '#fff', fontWeight: 700 }}>processus reconçus, rôles redéfinis, programme piloté et mesuré</strong>. Masteria mène ce travail avec les dirigeants et les équipes métier, puis construit les outils que la nouvelle organisation réclame.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Déployer un assistant ne transforme rien tant que les processus, les rôles et le pilotage restent identiques. Notre travail porte sur ces trois dimensions de l'organisation. Le choix du cap relève de la stratégie, et la présence au fil du déploiement, de l'accompagnement ; ici, les équipes changent leur façon de produire.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              {CADRAGE_LABEL}
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les cinq chantiers
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>La mission en six lignes</div>
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
              <Kicker>Cinq chantiers</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que couvre une mission de conseil en transformation IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Cinq chantiers, menés dans cet ordre : lire l'organisation actuelle, redessiner les processus avec l'IA, décrire le modèle opérationnel cible, installer le pilotage du programme, conduire le changement et le mesurer. Chacun produit un livrable et désigne un responsable chez vous.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La destination se choisit en amont avec notre <Link to="/conseil-strategie-ia" style={aStyle}>conseil en stratégie IA</Link> ; la présence au fil du déploiement relève de notre <Link to="/accompagnement-ia" style={aStyle}>accompagnement IA</Link>. Sur cette page, il s'agit de la façon dont vos équipes travaillent.
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
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Hors de notre champ</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Plan social, restructuration financière, refonte d'un ERP : d'autres cabinets font ces métiers. Nous transformons le travail autour de l'IA, et nous vous le signalons quand votre sujet relève d'un autre spécialiste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIGITAL CLASSIQUE vs TRANSFORMATION IA (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Une transformation d'un autre type</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Transformation digitale classique ou transformation IA : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La transformation digitale installait un logiciel puis organisait son adoption. La transformation IA part d'usages déjà présents dans les équipes, souvent hors de tout cadre, et change la nature du travail : les personnes relisent et supervisent ce que l'IA rédige ou calcule. Les méthodes de programme conçues pour déployer des logiciels s'y appliquent mal.</strong>
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
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Un audit de transformation digitale garde son utilité : il dit ce que vos logiciels et vos données permettent. Notre lecture de l'organisation l'intègre et y ajoute les pratiques d'IA que vos salariés ont déjà adoptées.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE (timeline) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Le déroulé</Kicker>
          <h2 style={h2Style}>
            Comment se déroule une transformation IA avec Masteria ?
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Quelques semaines pour lire l'organisation et décrire la cible, puis des vagues trimestrielles. La première reconçoit deux à quatre processus avec des équipes formées et mesure un premier gain avant sa fin ; les suivantes étendent le périmètre, et notre présence se réduit à mesure que votre pilotage tient seul.</strong>
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
            Ce calendrier donne un ordre d'idée et n'engage pas : une PME tient souvent la lecture et la première vague dans un même trimestre, un groupe échelonne les vagues direction par direction. Le rythme se décide au cadrage. Pour relier le temps gagné à un résultat chiffré, nous suivons la méthode décrite sur notre page <Link to="/roi-ia-entreprise" style={aStyle}>ROI de l'IA en entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── LES ERREURS D'UNE TRANSFORMATION IA ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Les pièges</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq erreurs font échouer la plupart des transformations IA
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Commencer par l'outil, confier le programme à la DSI seule, viser trois ans sans résultat la première année, oublier les rôles, compter les connexions au lieu du travail rendu. Aucune ne tient au budget ; toutes tiennent à l'ordre dans lequel on fait les choses.</strong>
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

      {/* ── ÉTUDES DE CAS (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Deux organisations qui ont changé leurs rôles en 2026
          </h2>
          <p style={{ color: '#374151', fontSize: 15.5, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Un industriel qui corrige son dispositif entre deux sessions, un distributeur qui crée un rôle de référent : dans les deux cas, la transformation a commencé par des personnes à qui l'on confie une responsabilité nouvelle. Les noms des clients restent confidentiels ; les étapes à venir sont écrites au futur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {TRANSFO_CASES.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
              <article key={id} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
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
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  Suivre ce cas sur la page dédiée
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi un cabinet IA plutôt qu'un cabinet de transformation généraliste ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px', background: '#fff' }}>
                <strong>Parce qu'une transformation IA se décide au niveau du détail : la qualité de ce qu'un modèle rédige, la part d'un processus qu'on peut lui confier, le contrôle humain qui reste nécessaire. Un cabinet consacré à l'IA, qui fabrique aussi les outils et assure la formation, maîtrise ce détail ; un généraliste maîtrise le programme d'ensemble.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les deux se combinent volontiers : votre cabinet habituel conduit le programme d'entreprise, Masteria prend le chantier IA. Nos <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas</Link> décrivent ce partage en situation.
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
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Former pour faire tenir</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                La transformation tient quand chacun est formé sur ses propres dossiers
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Chaque vague prévoit la formation des managers, puis des équipes touchées, sur les processus reconçus et leurs documents habituels. Ce volet constitue une action de formation au sens de Qualiopi, certification que détient Masteria : votre OPCO peut donc le prendre en charge, à hauteur de ce que permettent ses critères et son budget annuel. Les journées de conseil et le développement des outils se paient hors de ce circuit. Pour ouvrir le programme devant toute l'entreprise, la démarche d'<Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link> sert souvent de point de départ.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Les managers passent avant leurs équipes', 'Des ateliers sur les processus redessinés', 'Un référent interne dans chaque direction', 'Journée intra facturée 1 980 € HT'].map(pt => (
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Conseil en transformation IA : vos questions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre organisation a une particularité que ces réponses ne couvrent pas&nbsp;? Décrivez-la en quelques lignes : réponse dans les 24 heures.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Décrire votre situation
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
          <Kicker>Pages voisines</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Ce qui entoure une transformation IA
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Une destination, une présence au fil des mois, des règles et une mesure : chaque page ci-dessous traite l'un de ces appuis.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Conseil stratégie IA', href: '/conseil-strategie-ia', tag: 'Destination', desc: "État des lieux, cas d'usage classés et calendrier daté : le travail qui précède la réorganisation." },
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Présence', desc: "Un appui suivi pendant le déploiement : choix des outils, mise en service, adoption." },
              { label: 'Conseil IA pour PME', href: '/conseil-ia-pme', tag: 'Petites structures', desc: "La version resserrée pour les entreprises où le dirigeant décide seul et vite." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'Évaluation', desc: "Maturité, données, outils et conformité passés en revue, pour une direction qui veut un constat complet." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Formation collective', desc: "Conférence, ateliers et référents pour donner à toute l'entreprise un vocabulaire commun avant les vagues." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Règles', desc: "Politique d'usage, comité et conformité au règlement européen : le cadre dans lequel le programme avance." },
              { label: "ROI de l'IA en entreprise", href: '/roi-ia-entreprise', tag: 'Mesure', desc: "Comment passer des heures rendues à un résultat que la direction peut chiffrer." },
              { label: 'Chief AI Officer à temps partagé', href: '/chief-ai-officer', tag: 'Pilotage', desc: "Un pilote pour le programme quand le poste n'existe pas encore : mandat, comité, quelques jours par mois." },
              { label: 'Méthode projet IA', href: '/methode-projet-ia', tag: 'Construction', desc: "Forfait, régie ou équipe dédiée : la façon dont nous réalisons les outils demandés par les processus reconçus." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Vue complète', desc: "La page qui présente toutes nos missions de conseil, du premier état des lieux jusqu'aux outils en service." },
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
                    Ouvrir la page
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
            Mathias Nizan siège aux comités de programme des transformations que Masteria conduit, et il assume les arbitrages proposés. Il a mis cette page à jour le 7 octobre 2026 ; vous trouverez son itinéraire sur <Link to="/mathias-nizan" style={aStyle}>sa page personnelle</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Avant la première vague</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Cadrons ensemble votre transformation IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Présentez-nous votre organisation, les usages que vos équipes ont déjà adoptés et le résultat que la direction espère. Une fois le cadrage terminé, vous recevez un format de mission (lecture seule, première vague ou programme complet) et le forfait de chaque phase.
            </p>
            <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              {CADRAGE_LABEL}
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Processus, rôles et pilotage, puis les outils qui vont avec · cabinet lyonnais qui travaille aussi hors de France
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe d'une transformation ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'équipe d'un programme</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un pilote unique, des spécialistes réunis vague par vague
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              En 2022, à Lyon, Mathias Nizan crée Masteria avec une spécialité unique, l'intelligence artificielle. Il tient le pilotage de chaque transformation du premier comité au dernier. Autour de lui, les consultants (une dizaine), les développeurs (cinq environ) et les formateurs (une vingtaine) sont des indépendants, appelés selon la vague en cours. Masteria ne revend aucune licence : l'outil retenu découle du processus reconçu. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> donnent des exemples datés ; la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>page presse</Link> recense les articles qui parlent du cabinet.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['1 pilote', 'du cadrage au dernier comité'],
              ['≈ 20', 'formateurs pour les vagues'],
              ['≈ 10', 'consultants en renfort'],
              ['0', 'licence revendue'],
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
      <section aria-labelledby="sources-transformation" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-transformation" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les textes à garder sous la main pendant le programme
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Les règles d'usage écrites pendant la transformation s'appuient sur ces documents officiels.
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
