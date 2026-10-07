import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Compass, Workflow, Users, MapPin, Check, Target, Building2,
  ClipboardCheck, Gauge, GraduationCap, ShieldCheck, Server, Cpu, Wallet, Sun, ExternalLink,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { CADRAGE_HREF, CADRAGE_LABEL } from '../data/offre-entree'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « conseil IA pour PME et TPE » (slug /conseil-ia-pme), cluster CONSEIL.
 * Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 : « conseil pme » (170,
 * KD 13, commercial), « conseil si pme » (90, KD 5), « conseil aux pme » (70),
 * « conseil gestion pme » (70), « conseil pme rhone alpes » (70, KD 7), « conseil
 * en stratégie pme » (50), « conseil tpe » (50, commercial).
 *
 * RÉPARTITION D'INTENTIONS : /conseil-intelligence-artificielle = le cabinet et
 * tous ses formats ; CETTE page = le format PME/TPE : un Diagnostic IA court (durée
 * et forfait fixés au cadrage), deux ou trois processus, un dirigeant qui décide,
 * un budget par étape, et l'ancrage Auvergne-Rhône-Alpes. Les requêtes « conseil
 * gestion / financier pme » sont hors métier : dit explicitement (carte « hors de
 * notre métier »).
 *
 * INTÉGRITÉ : aucun client nommé, aucun chiffre de résultat ni prix inventé,
 * jamais Bpifrance ni dispositif public nommé (formule générique imposée le
 * 07/10/2026), financement : conseil hors OPCO, formation OPCO ou fonds selon
 * statut, sans détail juridique. Cas cités : src/data/etudes-de-cas.js.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de FounderNote ni de bloc
 * « Qui intervient » commun, sources propres à la page, deux cas de PME cités.
 */

const SLUG = 'conseil-ia-pme'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conseil IA PME et TPE : un format à votre taille | Masteria"
const META_DESC = "Conseil IA pour PME et TPE : diagnostic court, deux ou trois processus outillés, dirigeant et équipes formés, un point par trimestre. Depuis Lyon, partout."
const KEYWORDS = "conseil ia pme, conseil pme, conseil aux pme, conseil tpe, conseil si pme, conseil en stratégie pme, conseil pme rhone alpes, cabinet conseil pme lyon, conseil intelligence artificielle pme, accompagnement ia pme, conseil ia tpe"

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
  { icon: Building2, label: 'TPE, PME, petites ETI' },
  { icon: Compass, label: 'Un diagnostic court pour démarrer' },
  { icon: Wallet, label: 'Un forfait à chaque étape' },
  { icon: MapPin, label: 'Lyon · Auvergne-Rhône-Alpes · France entière' },
]

/* ───────── En bref ───────── */

const EN_BREF = [
  { label: 'Pour qui', value: "Dirigeants d'entreprises de 5 à 250 personnes, avec ou sans service informatique interne" },
  { label: 'Mission', value: "Un diagnostic court, deux ou trois processus outillés, le dirigeant puis les équipes formés, un point léger chaque trimestre" },
  { label: 'Différence', value: "Aucun comité ni schéma directeur : une décision prise vite, un premier résultat en quelques semaines, un budget découpé par étape" },
  { label: 'Vos outils', value: "L'IA s'installe dans votre messagerie, votre suite bureautique et votre logiciel de gestion, en accord avec votre prestataire informatique" },
  { label: 'Prix', value: "Un forfait par étape, fixé à l'issue du cadrage offert (30 minutes) ; votre OPCO ne finance que la partie formation" },
  { label: 'Équipe', value: "Mathias Nizan en personne, épaulé au besoin par des indépendants retenus pour votre dossier" },
]

/* ───────── Prestations ───────── */

const PRESTATIONS = [
  {
    icon: ClipboardCheck,
    title: 'Le Diagnostic IA',
    desc: "Une intervention brève, chez vous ou en visio ; le cadrage en arrête la durée et le forfait. Nous regardons vos processus, vos logiciels, ce que vos salariés font déjà avec l'IA et les tâches qui mangent les journées. Vous repartez avec trois cas classés, les pistes à écarter et un ordre de grandeur de budget. Bien des PME n'ont besoin de rien d'autre avant de se lancer.",
  },
  {
    icon: Server,
    title: "L'IA dans votre informatique",
    desc: "Votre informatique tient souvent à un prestataire : messagerie, suite bureautique, logiciel de gestion, dossiers partagés. Nous y plaçons l'IA : quel outil, quelle offre entreprise, quels réglages pour protéger vos données, quels accès, quelle règle d'usage. Ce travail se fait main dans la main avec votre prestataire.",
  },
  {
    icon: Workflow,
    title: 'Deux ou trois processus outillés',
    desc: "Devis, réponses aux clients, saisie administrative, relances, comptes rendus : nous retenons les processus qui gagnent le plus d'heures avec l'IA et nous les équipons d'un assistant réglé pour vous, d'une automatisation ou d'un agent branché sur votre logiciel de gestion. Le premier tourne en général au bout de quelques semaines.",
  },
  {
    icon: GraduationCap,
    title: 'Le dirigeant formé en premier',
    desc: "Dans une PME, le patron donne l'exemple : il est le premier à utiliser l'outil, le premier aussi à le défendre. Nous le formons d'abord, souvent en individuel, puis les équipes sur leurs propres dossiers. Ce volet relève de la formation professionnelle, finançable, selon votre statut, par votre OPCO ou par le fonds de formation du dirigeant, dans la limite de leurs règles.",
  },
  {
    icon: Gauge,
    title: 'Un point chaque trimestre',
    desc: "Une demi-journée par trimestre pour faire le tri : ce qui fonctionne, ce qui bloque, le prochain processus à équiper, les nouveautés qui méritent votre attention et celles à laisser passer. Sans ce rendez-vous, l'élan retombe souvent après le premier succès.",
  },
]

/* ───────── Grand compte vs PME (tableau sombre) ───────── */

const TABLE = [
  { critere: 'Point de départ', sans: 'Un audit de plusieurs semaines sur plusieurs entités', avec: 'Un diagnostic court, sur vos dossiers de tous les jours' },
  { critere: 'Décision', sans: 'Comité, arbitrages, budget voté une fois par an', avec: 'Le dirigeant tranche, souvent dans la journée' },
  { critere: 'Premier résultat', sans: 'Après plusieurs mois de cadrage', avec: 'Un processus outillé au bout de quelques semaines' },
  { critere: 'Interlocuteurs', sans: 'Une équipe de consultants en pyramide', avec: 'Un consultant senior, des renforts au besoin' },
  { critere: 'Budget', sans: "Un programme sur plusieurs années, engagé d'avance", avec: 'Un forfait par étape, la suivante décidée au vu du résultat' },
]

/* ───────── Méthode ───────── */

const METHODE = [
  { periode: 'Au départ', title: 'Le diagnostic', desc: "Un temps de travail avec le dirigeant et les personnes clés, sur une durée arrêtée au cadrage : processus, logiciels, données, pratiques déjà en place. À la restitution : trois cas classés, ce qu'on écarte, l'enveloppe à prévoir, et parfois la conclusion qu'une formation suffit." },
  { periode: 'Le mois suivant', title: 'Réglages et premier processus', desc: "Choix de l'outil dans votre informatique, réglages des données et des accès avec votre prestataire, règle d'usage tenue sur une page, puis conception du premier processus avec ceux qui le font tous les jours." },
  { periode: 'Mois 2 et 3', title: 'Mise en service et formation', desc: "Le premier processus tourne, le dirigeant est formé, puis les équipes sur leurs cas. Un deuxième, voire un troisième processus suit si le premier tient. La mesure se fait en heures rendues, puis en usage de ces heures." },
  { periode: 'Chaque trimestre', title: 'Le rendez-vous de suivi', desc: "Une demi-journée pour passer en revue les acquis, les blocages, le processus suivant, les outils à regarder ou à ignorer. La démarche appartient à l'entreprise ; nous restons joignables, sans abonnement imposé." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Imiter le grand groupe', desc: "Un programme, un comité, un schéma directeur : la PME s'épuise à cadrer et ne met rien en service. La bonne échelle tient en quatre mots : un diagnostic, un processus, un résultat, puis le suivant." },
  { title: 'Offrir une licence à tout le monde', desc: "Trente comptes payants distribués sans cas d'usage ni règle : cinq personnes s'en servent, souvent mal. Commencez par les processus et les personnes qui gagnent le plus, puis élargissez." },
  { title: "Laisser le sujet au prestataire informatique", desc: "Votre prestataire sécurise les outils et les accès ; il ne connaît pas vos métiers et n'a pas vocation à les réorganiser. L'IA se règle avec lui et se décide avec vous." },
  { title: 'Ouvrir par un robot sur le site', desc: "Le premier projet visible rapporte rarement le plus, et il expose l'entreprise plus que les autres. Les gains d'une PME se trouvent d'abord en interne : devis, administratif, réponses, comptes rendus." },
  { title: 'Attendre des données impeccables', desc: "Une PME ne construira jamais d'entrepôt de données. L'IA générative travaille sur ce que vous avez : mails, documents, logiciel de gestion. Le diagnostic distingue ce qui sert tel quel et ce qui réclame un peu de rangement." },
]

/* ───────── Études de cas PME (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const PME_CASES = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · 3 personnes',
    figure: '12 gisements',
    figureLabel: 'de temps repérés, dont 3 chantiers retenus',
    text: "Tout passe par Odoo et par deux personnes qui se remplacent l'une l'autre. L'IA était déjà entrée par des comptes privés ; la direction posait une condition, des contrôles systématiques. La réponse tient en un compte d'équipe géré par l'entreprise elle-même, une charte signée en amont, un référent désigné et trois assistants à construire. Les deux journées sur place sont prévues en octobre 2026.",
  },
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distribution IT B2B · 58 salariés',
    figure: '11 compétences',
    figureLabel: 'Claude construites avec dix référents',
    text: "Ce distributeur, rattaché à un groupe européen, vise la capacité commerciale d'une équipe de 70 personnes alors qu'il en compte 58, sans recruter ni changer de logiciel : la gestion commerciale, le catalogue produits et l'outil de relation client restent en place. Ses dix référents, passés en formation en juin 2026, portent chacun une compétence (cotation, relances, cahiers des charges, stocks). Le reste de l'entreprise y accédera d'octobre à décembre 2026.",
  },
]

/* ───────── Rhône-Alpes ───────── */

const REGION = [
  { icon: MapPin, title: 'Une équipe lyonnaise, des déplacements en région', desc: "Le cabinet est installé à Lyon. Diagnostics et formations se tiennent dans vos locaux, dans la métropole comme à Grenoble, Saint-Étienne, Annecy, Chambéry, Valence, Bourg-en-Bresse ou Clermont-Ferrand, en déplacements planifiés." },
  { icon: Users, title: 'Des formateurs près de chez vous', desc: "Quand la formation compte plusieurs sessions ou plusieurs sites, des formateurs indépendants aguerris, choisis pour leur pratique, interviennent sur place en suivant la trame de Masteria." },
  { icon: Cpu, title: 'Le tissu des PME régionales', desc: "Industrie et sous-traitance, BTP, négoce, services aux entreprises, agroalimentaire, santé : ces entreprises ont des processus concrets et des équipes resserrées. Notre format de conseil a été pensé pour elles." },
]

/* ───────── Pourquoi Masteria ───────── */

const WHY = [
  { icon: Cpu, title: "L'IA, rien d'autre", desc: "Ni gestion, ni finance, ni organisation générale : de l'intelligence artificielle appliquée à votre travail, et cela depuis 2022. L'expérience nous a appris la part de travail qu'un assistant assure sans faillir et ce qu'une petite structure peut lui confier." },
  { icon: Workflow, title: 'Le conseil et la réalisation', desc: "Quand un processus réclame un assistant réglé pour vous, une automatisation ou un agent, nous le fabriquons. Le diagnostic aboutit à un outil en service, sans détour par un intégrateur." },
  { icon: Target, title: 'Une échelle de PME', desc: "Un diagnostic court, un processus après l'autre, un forfait par étape, un consultant senior. La suite se décide sur le résultat obtenu, jamais sur un engagement de plusieurs années." },
  { icon: ShieldCheck, title: 'Aucun éditeur derrière nous', desc: "Nous ne vendons aucune licence : si l'outil déjà inclus dans votre suite suffit, nous le recommandons, et s'il ne suffit pas, nous l'écrivons noir sur blanc." },
]

/* ───────── Sources (liens d'autorité propres à la page) ───────── */

const SOURCES = [
  { label: "France Num, le programme public d'accompagnement numérique des TPE et PME, dont Masteria est Activateur", url: 'https://www.francenum.gouv.fr/' },
  { label: "Le ministère du Travail sur Qualiopi, la certification exigée pour qu'une formation soit financée", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { label: "Comment fonctionnent les OPCO, sur le site du ministère du Travail", url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "À quoi ressemble le conseil IA pour une PME ?",
    a: "Un appui calibré pour une entreprise de 5 à 250 personnes : un Diagnostic IA qui repère où l'IA vous rend du temps, le réglage de l'outil dans votre informatique actuelle, deux ou trois processus équipés et mis en service, le dirigeant puis les équipes formés sur leurs dossiers, et un point léger chaque trimestre. Face au conseil destiné aux grands comptes, tout change d'échelle : aucun comité, des décisions rapides, un forfait par étape et un premier résultat au bout de quelques semaines. Masteria le pratique depuis Lyon, en Auvergne-Rhône-Alpes et dans le reste de la France.",
  },
  {
    q: "À partir de quelle taille d'entreprise le conseil IA a-t-il un sens ?",
    a: "Dès qu'il existe des tâches répétitives et quelqu'un pour décider. Une entreprise de cinq personnes qui rédige des devis, répond à des mails clients et traite de l'administratif a déjà matière à gagner du temps ; le conseil s'y résume souvent à un diagnostic court et à la formation du dirigeant. Pour un indépendant seul, un accompagnement individuel ou une formation suffit, et nous le disons. Au-delà de 250 personnes, plusieurs directions doivent s'accorder : le format passe alors par l'audit et le programme.",
  },
  {
    q: "Accompagnez-vous les TPE ?",
    a: "Oui, avec un format encore allégé : un diagnostic resserré sur l'essentiel, souvent à distance, une formation individuelle du dirigeant sur ses propres dossiers, puis un ou deux processus équipés avec les outils déjà en place. Une TPE attend surtout de savoir quoi faire le lundi suivant, avec quel outil et quelle règle. Le financement de la formation dépend du statut du dirigeant : OPCO quand l'entreprise emploie des salariés, fonds de formation lorsque le dirigeant n'est pas salarié ; nous vous orientons pendant le cadrage.",
  },
  {
    q: "Combien coûte le conseil IA pour une PME ?",
    a: "Chaque étape a son forfait. Celui du diagnostic, comme sa durée, se fixe au cadrage, après 30 minutes d'échange offertes ; le réglage de l'outil et chaque processus équipé se chiffrent ensuite selon leur périmètre, en général en milliers d'euros pour une PME, et vous décidez de la suite au vu de l'étape précédente. Nous ne proposons jamais de programme pluriannuel à une petite entreprise. Hors de Lyon, les déplacements sont refacturés à leur coût ; une séance à distance n'en entraîne aucun.",
  },
  {
    q: "Le conseil IA est-il finançable pour une PME ?",
    a: "Le conseil n'est pas finançable par votre OPCO, dont le rôle est de financer la formation. Le volet formation (dirigeant, équipes) entre dans le périmètre Qualiopi du cabinet : si vous employez des salariés, votre OPCO peut le prendre en charge selon ses règles et ses fonds, et le fonds de formation du dirigeant peut intervenir selon son statut. Selon votre taille, votre secteur et votre région, des dispositifs publics de soutien au conseil peuvent s'appliquer ; le tour se fait au cadrage.",
  },
  {
    q: "Faites-vous du conseil SI pour PME ?",
    a: "Sur le volet IA de votre informatique, oui. Nous plaçons l'outil d'IA dans votre système d'information : quelle suite, quelle offre entreprise, quels réglages pour que vos données n'entraînent aucun modèle, quels accès, comment relier un agent à votre logiciel de gestion. Votre prestataire informatique garde la main sur l'infrastructure, la sécurité et les licences, et nous travaillons avec lui. L'infogérance, le réseau et les migrations restent son métier, et nous ne les prenons pas en charge.",
  },
  {
    q: "Intervenez-vous en Auvergne-Rhône-Alpes ?",
    a: "C'est notre région d'origine. L'équipe travaille depuis Lyon et se déplace dans la métropole et dans toute l'Auvergne-Rhône-Alpes : Grenoble, Saint-Étienne, Annecy, Chambéry, Valence, Bourg-en-Bresse, Clermont-Ferrand. Le diagnostic et les formations ont lieu chez vous ; le réglage des outils, leur construction et le suivi se font surtout à distance. Pour une PME située ailleurs, le format reste identique : la visio d'abord, des déplacements prévus pour les moments qui comptent.",
  },
  {
    q: "Au bout de combien de temps voit-on un premier résultat ?",
    a: "Quelques semaines. Le diagnostic est court et sa durée se décide au cadrage ; le premier processus équipé entre en service deux à six semaines plus tard, selon sa complexité et le temps que vos équipes peuvent y consacrer ; la formation du dirigeant se cale dans le même intervalle. Le résultat se lit sur ce processus : temps rendu, erreurs évitées, délai raccourci. C'est lui, et aucun plan écrit d'avance, qui désigne le processus suivant.",
  },
  {
    q: "Par quel processus une PME doit-elle commencer ?",
    a: "Par celui qui coûte le plus d'heures répétitives à des personnes qualifiées sans engager l'entreprise auprès de ses clients. Dans la plupart des PME, il s'agit des devis et propositions, des réponses aux clients par mail, de la saisie et du classement administratifs, des comptes rendus et des relances. Le robot conversationnel public ou l'outil visible de l'extérieur viennent plus tard, quand les équipes maîtrisent l'IA en interne. Le diagnostic tranche à partir de vos chiffres.",
  },
  {
    q: "Nous n'avons pas de données structurées : est-ce un problème ?",
    a: "Non, pour l'IA générative. Elle exploite ce qu'une PME possède déjà : des mails, des documents, d'anciens devis, un logiciel de gestion, des dossiers partagés. Le diagnostic sépare ce qui sert tel quel, ce qui demande un rangement léger (un dossier remis en ordre, une fiche client à jour) et ce qui relèverait d'un chantier de données, rare à cette taille. Attendre des données parfaites reste l'erreur la plus fréquente : elle repousse sans fin un gain à portée de main.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conseil IA pour PME et TPE (Masteria)',
  alternateName: 'Conseil en intelligence artificielle pour petites et moyennes entreprises',
  description: "Conseil IA pour PME et TPE : Diagnostic IA court, réglage de l'IA dans l'informatique existante, deux ou trois processus outillés, formation du dirigeant et des équipes, point trimestriel. Cabinet spécialisé en IA installé à Lyon, missions en Auvergne-Rhône-Alpes et dans toute la France.",
  url: 'https://www.master-ia.fr/conseil-ia-pme',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-ia-pme#webpage' },
  serviceType: 'Conseil en intelligence artificielle pour PME',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  audience: { '@type': 'BusinessAudience', audienceType: 'TPE, PME et petites ETI', numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 250 } },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations de conseil IA pour PME',
    itemListElement: PRESTATIONS.map(p => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.title, description: p.desc } })),
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'La méthode de conseil IA pour PME Masteria',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE.map((step, i) => ({ '@type': 'ListItem', position: i + 1, name: `${step.periode} : ${step.title}`, description: step.desc })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conseil-ia-pme#article',
  headline: 'Conseil IA pour PME et TPE : un format court, décidé étape par étape',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-ia-pme#webpage' },
  about: [
    { '@type': 'Thing', name: 'Petite ou moyenne entreprise', sameAs: 'https://fr.wikipedia.org/wiki/Petite_ou_moyenne_entreprise' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Auvergne-Rhône-Alpes', sameAs: 'https://fr.wikipedia.org/wiki/Auvergne-Rh%C3%B4ne-Alpes' },
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

function CardGrid({ items, min = 260 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`, gap: 24, marginTop: 12 }}>
      {items.map(card => {
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
  )
}

export default function ConseilIAPMEPage() {
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
    { name: 'Conseil IA pour PME', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Conseil IA pour PME</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building2 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil · PME et TPE
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Conseil IA pour PME et TPE :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>un format court, décidé étape par étape</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui reçoit lui-même les dirigeants de PME au cadrage · à jour au 7 octobre 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Pour une PME, le conseil IA de Masteria se déroule en quatre temps : <strong style={{ color: '#fff', fontWeight: 700 }}>un diagnostic court, deux ou trois processus outillés dans vos logiciels actuels, le dirigeant puis les équipes formés, un point léger chaque trimestre</strong>. Le cabinet travaille depuis Lyon, en Auvergne-Rhône-Alpes et partout en France.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une PME n'a que faire d'un schéma directeur. Elle veut savoir où l'IA lui fait gagner des heures, quel outil choisir, sous quelle règle, et voir un premier résultat en quelques semaines. Nous avons construit ce format pour elle : un forfait à chaque étape, et un dirigeant qui décide de la suivante en regardant ce que la précédente a produit.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              {CADRAGE_LABEL}
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Le détail du format
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Le format PME résumé</div>
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
              <Kicker>Ce que nous faisons</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Les cinq interventions du cabinet dans une PME
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Cinq interventions, dans cet ordre : un Diagnostic IA court, le réglage de l'IA dans votre informatique, deux ou trois processus outillés, la formation du dirigeant puis de ses équipes, et un rendez-vous par trimestre. Chacune a son forfait ; vous lancez la suivante en connaissant le résultat de la précédente.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Si votre organisation compte plusieurs directions à mettre d'accord, deux pages vous concernent davantage : l'<Link to="/audit-ia" style={aStyle}>audit IA</Link> et le <Link to="/conseil-transformation-ia" style={aStyle}>conseil en transformation IA</Link>.
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
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Hors de notre métier</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Gestion, finance, droit, infogérance : votre expert-comptable, votre avocat et votre prestataire informatique gardent leur place. Nous nous occupons de l'IA appliquée à votre travail, en lien avec eux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRAND COMPTE vs PME (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Une question d'échelle</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Conseil aux PME ou conseil aux grands comptes : ce qui change
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Une PME possède un atout qui manque aux grands groupes : la décision se prend dans le bureau d'à côté. Un conseil taillé pour elle exploite cet atout au lieu de l'étouffer sous un programme. Un diagnostic à sa mesure, un processus, un résultat, puis le suivant.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre conseil aux grands comptes et conseil aux PME" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Conseil aux grands comptes</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Conseil IA pour PME</th>
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
        </div>
      </section>

      {/* ── MÉTHODE (timeline) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Le calendrier type</Kicker>
          <h2 style={h2Style}>
            Comment se déroule le conseil IA dans une PME ?
          </h2>
          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Un diagnostic court, puis le réglage de l'outil et un premier processus le mois suivant, la mise en service et la formation pendant les deuxième et troisième mois, et enfin un rendez-vous par trimestre. Le calendrier suit la disponibilité de vos équipes.</strong>
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
            Le premier temps a sa propre page, le <Link to="/diagnostic-ia" style={aStyle}>Diagnostic IA</Link>. Pour traduire le temps rendu en argent, la méthode de calcul figure sur <Link to="/roi-ia-entreprise" style={aStyle}>ROI de l'IA en entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>À éviter</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les cinq erreurs des PME qui se lancent dans l'IA
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Imiter le grand groupe, offrir une licence à tout le monde, laisser le sujet au prestataire informatique, ouvrir par un robot sur le site, attendre des données impeccables. Nous les croisons depuis 2022 dans des PME de la région et d'ailleurs, et chacune se corrige simplement.</strong>
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

      {/* ── ÉTUDES DE CAS PME (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Deux PME en 2026</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois personnes d'un côté, 58 salariés de l'autre
          </h2>
          <p style={{ color: '#374151', fontSize: 15.5, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Deux tailles de PME, deux réponses : une lecture par flux de travail et une charte pour la plus petite, des référents qui portent chacun une compétence pour la plus grande. Leur nom reste confidentiel, à leur demande.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {PME_CASES.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
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
                  Voir comment la mission s'est déroulée
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RHÔNE-ALPES ── */}
      <section id="region" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Auvergne-Rhône-Alpes</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Conseil IA pour les PME de Lyon et d'Auvergne-Rhône-Alpes
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le cabinet est né à Lyon et se rend dans les entreprises de toute la région : le diagnostic et les formations ont lieu chez vous, le réglage et la construction des outils surtout à distance. Une PME d'une autre région bénéficie du même format, avec la visio en premier et des déplacements réservés aux étapes clés.</strong>
          </p>
          <CardGrid items={REGION} min={280} />
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Trois pages décrivent notre présence locale : l'<Link to="/agence-ia-lyon" style={aStyle}>agence IA lyonnaise</Link>, l'<Link to="/agence-ia-annecy" style={aStyle}>agence IA d'Annecy</Link> et la <Link to="/formation-ia-grenoble" style={aStyle}>formation IA à Grenoble</Link>.
          </p>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi un spécialiste de l'IA plutôt qu'un conseiller de PME généraliste ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce que le résultat dépend de détails précis : ce qu'un assistant rédige correctement, ce qu'on peut lui laisser faire, ce qu'une personne doit relire. Un cabinet qui ne travaille que sur l'IA depuis 2022, fabrique les outils puis forme ceux qui s'en servent, connaît ces détails. Un conseiller généraliste, lui, tient le plan d'ensemble.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Nos <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas</Link> montrent ce format appliqué, de la toute petite équipe au groupe international.
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
          <div style={{ ...cardStyle, background: '#fff', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Se former</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Le dirigeant d'abord, ses équipes ensuite, chacun sur ses dossiers
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le dirigeant d'une PME montre le chemin : notre <Link to="/formation-ia-dirigeants" style={aStyle}>formation IA pour dirigeants</Link> ou un <Link to="/coaching-ia" style={aStyle}>coaching IA individuel</Link> le rendent autonome en quelques séances. Les équipes suivent, métier par métier, sur leurs propres documents. La journée de formation revient à 1 980 € HT, pour un groupe de votre entreprise (douze personnes au plus) comme pour une personne seule. La certification Qualiopi du cabinet couvrant ce type d'action, ce volet peut être financé par votre OPCO ou par le fonds du dirigeant, selon le statut de chacun ; le conseil et la construction des outils restent des prestations de service. Pour connaître votre opérateur, l'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Le dirigeant en individuel, sur ses cas', 'Les équipes par métier, chez vous ou en visio', '1 980 € HT la journée, douze personnes au plus', 'OPCO ou fonds du dirigeant selon le statut'].map(pt => (
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

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Conseil IA pour PME : ce que les dirigeants nous demandent
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre situation sort de ces cas de figure&nbsp;? Racontez-nous votre activité en quelques lignes.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Nous écrire
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
          <Kicker>Pour continuer</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Les pages utiles à un dirigeant de PME
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Le point de départ, les formats plus larges, les outils que nous fabriquons et la formation du dirigeant.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Pour démarrer', desc: "Le premier rendez-vous de travail : vos usages passés en revue et trois cas classés pour la suite." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'Plusieurs directions', desc: "Quand l'organisation dépasse la PME : maturité, données, outils, conformité et calendrier." },
              { label: 'Conseil en transformation IA', href: '/conseil-transformation-ia', tag: 'Organisation', desc: "Quand il faut revoir les rôles et la conduite du programme, au-delà de deux ou trois processus." },
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'Dirigeants', desc: "Le programme qui fait du dirigeant l'utilisateur le plus à l'aise de son entreprise." },
              { label: 'Automatisation IA', href: '/automatisation-ia', tag: 'Tâches répétitives', desc: "Ce qu'une PME automatise en premier, avec quels outils et pour quel budget." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Outils', desc: "Des agents branchés sur votre gestion commerciale et votre messagerie, à la mesure d'une petite structure." },
              { label: 'Agence IA à Lyon', href: '/agence-ia-lyon', tag: 'Local', desc: "Conseil, développement et formation pour les sociétés de Lyon et de ses environs." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Cabinet', desc: "La présentation de toutes nos missions, de la TPE au groupe." },
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
            Mathias Nizan échange lui-même avec les dirigeants de PME pendant le cadrage, puis il suit chaque étape jusqu'au point trimestriel. Il a révisé cette page le 7 octobre 2026 ; <Link to="/mathias-nizan" style={aStyle}>une page lui est consacrée</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(40px, 6vw, 80px) 24px clamp(64px, 9vw, 110px)' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Pour commencer</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Trente minutes pour cadrer votre premier chantier IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Indiquez-nous votre activité, votre effectif et les logiciels de la maison. Le cadrage offert sert à dimensionner le Diagnostic IA ; nous vous adressons ensuite une proposition (durée, forfait, dates) et les pistes que nous pensons trouver chez vous.
            </p>
            <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              {CADRAGE_LABEL}
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Un dirigeant, un consultant senior, des étapes courtes · Lyon, la région et le reste de la France
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : avec qui vous travaillez ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Avec qui vous travaillez</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un interlocuteur stable, des renforts quand votre dossier le demande
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria est l'entreprise de Mathias Nizan, lancée à Lyon en 2022 et entièrement tournée vers l'intelligence artificielle. Dans une PME, vous l'avez en face de vous du cadrage au suivi. Quand il faut construire un agent ou former plusieurs équipes, il fait appel à l'un des développeurs (cinq environ) ou des formateurs (une vingtaine) indépendants avec qui il travaille, ou à l'un de la dizaine de consultants du réseau. Aucun éditeur ne nous rémunère : nous recommandons ce qui sert votre entreprise. Masteria est également Activateur France Num. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>espace presse</Link> en donnent des exemples datés.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Lyon', 'siège et point de départ'],
              ['1 interlocuteur', 'pour le dirigeant'],
              ['France Num', 'Activateur'],
              ['5 à 250', 'salariés, notre cœur de cible'],
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
      <section aria-labelledby="sources-pme" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-pme" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Trois liens officiels pour un dirigeant de PME
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Trois sources pour vérifier nos engagements et comprendre qui finance la formation&nbsp;:
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
