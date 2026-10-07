import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Wallet, Bot, MessageSquare, LayoutDashboard, Workflow,
  Database, Cpu, Package, Users, Compass, Check, KeyRound, Layers,
  GitBranch, Gauge, Clock, ShieldCheck, Calculator, Sun, Landmark, GraduationCap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import CadrageLink from '../components/CadrageLink'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page bottom-funnel ACHAT, « Prix d'un projet IA » (slug /prix-projet-ia).
 * Intention : combien coûte un développement IA sur mesure. Mots-clés tissés :
 * « coût développement ia », « prix agent ia », « tarif chatbot ia »,
 * « prix application ia sur mesure », « combien coûte un projet ia »,
 * « prix projet ia », « tjm développeur ia », « budget projet ia ».
 * Angle propre à la page : LES PRIX (fourchettes, facteurs, facturation, contenu
 * du devis). Renvoi vers /outils-ia-sur-mesure avec l'ancre exacte
 * « développement IA sur mesure » (décision du 02/10/2026).
 *
 * INTÉGRITÉ STRICTE : fourchettes LARGES à plafond ouvert, jamais de prix ferme
 * inventé ; conseil et développement pas finançables par l'OPCO, seule la
 * formation l'est (1 980 € HT la journée, selon les règles et les fonds de
 * l'OPCO). Réécrite le 07/10/2026 (texte propre à la page) : plus de
 * CaseStudyCards ni de FounderNote, cas cités sans montant (faits de
 * src/data/etudes-de-cas.js), « 30 minutes de cadrage offertes ».
 * Design premium calqué sur /agence-developpement-ia : hero sombre #0A0F1E, accent
 * #2563EB uniquement, icônes lucide (zéro emoji), réponses citables.
 */

const SLUG = 'prix-projet-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Prix d'un projet IA : combien ça coûte ? | Masteria"
const META_DESC = "Budget d'un projet IA : ordres de grandeur par livrable (prototype, agent, application), forfait après cadrage, régie possible. 30 min de cadrage offertes."

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
  { icon: MessageSquare, label: 'Tarif chatbot IA' },
  { icon: Bot,           label: "Prix d'un agent IA" },
  { icon: LayoutDashboard, label: 'Application sur mesure' },
  { icon: Workflow,      label: 'Automatisation' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Prototype', value: "Quelques milliers d'euros pour vérifier qu'une idée tient, sur un extrait de vos données" },
  { label: 'En production', value: "Des dizaines de milliers d'euros dès qu'un agent, un copilote ou une application sert au quotidien" },
  { label: 'Grands programmes', value: "Plus de 100 000 € pour plusieurs sites ou pays, sans plafond fixé d'avance" },
  { label: 'Facturation', value: "Forfait écrit après cadrage ; régie au taux journalier quand vous voulez des développeurs dans votre équipe" },
  { label: 'Financement', value: "Formation des utilisateurs finançable par l'OPCO selon ses règles ; développement et conseil : pas finançables par votre OPCO" },
  { label: 'Premier pas', value: "30 minutes de cadrage offertes avant toute proposition" },
]

/* ───────── Ordres de grandeur par livrable (plafond ouvert) ───────── */

const TARIFS = [
  {
    icon: MessageSquare,
    livrable: 'Chatbot IA sur mesure',
    desc: "Un assistant de conversation qui puise dans vos contenus et cite ses sources.",
    fourchette: "Dès quelques milliers d'euros",
    facteurs: 'Nombre de sources à indexer, canaux de diffusion (site, intranet, messagerie interne), langues',
  },
  {
    icon: Bot,
    livrable: 'Agent IA',
    desc: "Un programme qui enchaîne des actions dans vos logiciels, une personne validant chaque action engageante.",
    fourchette: "Plusieurs dizaines de milliers d'euros, souvent davantage",
    facteurs: "Nombre d'actions autorisées, logiciels à relier, part du contrôle humain",
  },
  {
    icon: LayoutDashboard,
    livrable: 'Copilote interne',
    desc: "Un assistant réservé à une équipe, branché sur ses documents et ses règles maison.",
    fourchette: "Dizaines de milliers d'euros",
    facteurs: "Taille de l'équipe, droits d'accès par profil, sources à connecter",
  },
  {
    icon: Workflow,
    livrable: 'Automatisation de processus',
    desc: "Un enchaînement qui transmet une tâche répétitive entre vos logiciels.",
    fourchette: "Dès quelques milliers d'euros par flux",
    facteurs: 'Nombre d\'étapes, contrôles à prévoir, logiciels concernés',
  },
  {
    icon: LayoutDashboard,
    livrable: 'Application IA sur mesure',
    desc: "Un logiciel complet, avec ses écrans, ses utilisateurs et sa logique métier.",
    fourchette: "Plusieurs dizaines de milliers d'euros ; plus de 100 000 € pour un usage multi-sites",
    facteurs: "Nombre d'écrans et d'utilisateurs, exigences de disponibilité, travail de design",
  },
  {
    icon: Database,
    livrable: 'Recherche documentaire (RAG)',
    desc: "Vos documents interrogés en langage courant, chaque réponse reliée au passage d'origine.",
    fourchette: 'Sur devis, selon le volume',
    facteurs: 'Volume et état des documents, fréquence des mises à jour, règles de confidentialité',
  },
]

/* ───────── Ce qui fait varier le prix (5 cartes) ───────── */

const FACTEURS = [
  {
    icon: Layers,
    title: "Ce que l'outil doit savoir faire",
    desc: "Répondre à une question ou traiter un dossier de bout en bout ne demandent pas le même travail. Chaque cas particulier à gérer ajoute du développement, et surtout des tests.",
  },
  {
    icon: GitBranch,
    title: 'Les logiciels à relier',
    desc: "Chaque branchement sur un CRM, un ERP ou une messagerie se conçoit, se sécurise et se teste. Un outil autonome coûte moins cher qu'un outil relié à cinq logiciels.",
  },
  {
    icon: Database,
    title: "L'état de vos données",
    desc: "Des documents à jour et bien rangés se préparent vite. Des doublons, des versions contradictoires ou des scans illisibles imposent un tri qui entre dans le budget.",
  },
  {
    icon: Gauge,
    title: "La liberté laissée à l'IA",
    desc: "Un assistant qui propose coûte moins qu'un agent qui agit. Plus l'IA agit seule, plus il faut de contrôles, de journalisation et de validation humaine, donc de développement.",
  },
  {
    icon: ShieldCheck,
    title: 'Le fonctionnement dans la durée',
    desc: "Hébergement, consommation des modèles facturée à l'usage, surveillance, évolutions : ces coûts reviennent chaque mois. Les obligations du RGPD, et celles de l'AI Act pour certains usages, viennent s'y ajouter.",
  },
]

/* ───────── Modèles de facturation (forfait / régie / conseil) ───────── */

const MODELES = [
  {
    icon: Package,
    tag: 'Forfait',
    title: 'Un prix global, connu au départ',
    desc: "Nous chiffrons le projet une fois le cadrage terminé. Le prix couvre un périmètre écrit, découpé en livraisons ; toute évolution du périmètre reçoit son propre chiffrage, que vous acceptez ou non.",
    points: ['Montant connu avant le démarrage', 'Livraisons et contenu écrits', 'Évolutions chiffrées à part'],
  },
  {
    icon: Users,
    tag: 'Régie · TJM',
    title: 'Des jours de développeur, au temps passé',
    desc: "Un ou plusieurs développeurs IA rejoignent votre équipe, chez vous ou en télétravail, et vous payez les jours travaillés. Le taux journalier dépend du profil et de la durée ; il figure dans la proposition.",
    points: ['Taux journalier selon profil et durée', 'Renfort sur place ou à distance', 'Utile quand les priorités bougent souvent'],
  },
  {
    icon: Compass,
    tag: 'Conseil',
    title: 'Le cadrage avant la construction',
    desc: "Quand la question porte sur le choix des usages, l'architecture ou les règles, une mission de conseil au forfait vient d'abord. Elle vous évite de financer le mauvais outil, ou un outil trop gros.",
    points: ["Choix des usages et de l'architecture", 'Forfait écrit après cadrage', 'Pas finançable par votre OPCO'],
  },
]

/* ───────── Ce qui est inclus (4 cartes) ───────── */

const INCLUS = [
  {
    icon: Compass,
    title: 'Le cadrage et la conception',
    desc: "Ce que l'outil doit faire, la façon de juger sa réussite et les choix techniques sont écrits avant le premier jour de développement. Ces pages servent de référence jusqu'à la livraison.",
  },
  {
    icon: KeyRound,
    title: 'Le code et ses accès',
    desc: "Vous recevez le dépôt de code et les droits d'administration. Vos développeurs, ou toute autre société, font évoluer l'outil sans licence à racheter.",
  },
  {
    icon: Check,
    title: 'La documentation et la passation',
    desc: "Un guide technique, un guide pour les utilisateurs et une séance avec la personne chargée de l'outil chez vous. La passation figure au planning dès la proposition.",
  },
  {
    icon: ShieldCheck,
    title: 'Les garde-fous',
    desc: "Validation humaine sur les actions qui engagent, journal des actions, droits par rôle : prévus dès la conception, donc compris dans le prix.",
  },
]

/* ───────── Alléger la facture (6 leviers) ───────── */

const ECONOMIES = [
  { icon: Layers, title: 'Commencer par une seule tâche', desc: "Un premier outil centré sur la tâche qui revient le plus souvent coûte moins, se livre plus vite et montre sa valeur sur vos données. Les autres tâches s'ajoutent ensuite, sur une base déjà testée." },
  { icon: GitBranch, title: 'Garder vos logiciels', desc: "Brancher l'outil sur ce qui existe revient moins cher que de remplacer un logiciel. Nous partons de votre ERP, de votre CRM et de votre messagerie, sans proposer d'en changer." },
  { icon: Database, title: 'Préparer les données chez vous', desc: "Trier les documents, supprimer les doublons, désigner la version qui fait foi : vos équipes peuvent s'en charger en suivant nos consignes, ce qui retire autant de jours au devis." },
  { icon: Cpu, title: 'Adapter le modèle à la tâche', desc: "Un modèle léger suffit souvent pour classer ou extraire ; le plus puissant reste réservé à la rédaction ou au raisonnement. La facture mensuelle de consommation s'en ressent." },
  { icon: Gauge, title: "Limiter l'autonomie au départ", desc: "Un assistant qui prépare et laisse valider coûte moins qu'un agent qui agit seul. Sa marge d'action pourra s'élargir plus tard, une fois l'outil éprouvé." },
  { icon: GraduationCap, title: 'Former au lieu de construire', desc: "Certaines tâches se règlent avec un assistant du marché bien employé. Une journée de formation à 1 980 € HT, que l'OPCO peut financer selon ses règles et ses fonds, coûte parfois moins qu'un développement." },
]

/* ───────── Trois missions découpées en paliers (faits : src/data/etudes-de-cas.js) ───────── */

const PALIER_CASES = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Photovoltaïque · PME de trois personnes',
    figure: '90 j',
    figureLabel: 'jours prévus avant de mesurer les premiers gains',
    text: "Le diagnostic rendu en septembre 2026 a classé douze gisements de temps et en a retenu trois. La construction des assistants, puis une formation de deux jours chez le client, sont programmées pour octobre 2026 : chaque palier se décide après le précédent.",
  },
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distributeur IT B2B · 58 salariés',
    figure: '10',
    figureLabel: "référents formés avant d'élargir à toute l'entreprise",
    text: "Ces référents se sont formés pendant deux jours, en juin 2026, et chacun a quitté la formation avec une compétence Claude taillée pour sa tâche. Les autres salariés suivront entre octobre et décembre 2026 : un petit groupe d'abord, l'entreprise ensuite.",
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    sector: 'Cabinet de conseil · secteur public',
    figure: '4',
    figureLabel: 'ateliers de deux heures pour bâtir les assistants',
    text: "Ces ateliers avec les consultants ont produit quatre assistants pour rédiger les mémoires de réponse, chacun spécialisé dans un type de marché public. Les consultants se sont ensuite formés une journée ensemble, sur des dossiers de consultation récents.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Combien coûte un projet IA sur mesure ?",
    a: "Comptez quelques milliers d'euros pour un prototype ou une première tâche outillée, des dizaines de milliers pour un outil utilisé en production ; un programme déployé sur plusieurs sites dépasse 100 000 €, et les plus importants se comptent en centaines de milliers d'euros. Chez Masteria, un forfait est arrêté après un cadrage qui précise ce que l'outil doit faire, avec quelles données, et à quoi l'on jugera qu'il réussit. Nous n'affichons pas de tarif catalogue, car un chatbot simple et une application métier n'ont presque rien de comparable.",
  },
  {
    q: "Quel est le prix d'un agent IA ?",
    a: "Un agent qui lit une demande, consulte vos logiciels et prépare une action coûte plusieurs dizaines de milliers d'euros dès qu'il est relié à vos systèmes et utilisé en production. Le montant grimpe avec le nombre d'actions autorisées, les logiciels à relier et la place laissée au contrôle humain. Un prototype d'agent, testé sur une portion de vos données, reste dans les quelques milliers d'euros.",
  },
  {
    q: "Quel est le tarif d'un chatbot IA ?",
    a: "Un chatbot qui s'appuie sur vos documents et cite ses sources coûte au départ quelques milliers d'euros. Le prix monte avec le nombre de sources, les canaux (site web, intranet, messagerie interne), les langues et les règles de confidentialité. S'il doit aussi agir, par exemple ouvrir un ticket ou modifier une commande, il devient un agent et change de catégorie de prix.",
  },
  {
    q: "Quel est le prix d'une application IA sur mesure ?",
    a: "Une application complète, avec ses écrans, ses utilisateurs et ses branchements sur vos logiciels, demande un budget de plusieurs dizaines de milliers d'euros. Utilisée sur plusieurs sites, avec de fortes exigences de disponibilité, elle dépasse 100 000 €. Le devis donne le prix de chaque livraison, pour que vous puissiez commencer par la plus utile.",
  },
  {
    q: "Forfait ou régie : que choisir, et à quel coût ?",
    a: "Le forfait convient quand le périmètre est clair et que vous voulez connaître le montant total avant de démarrer. La régie convient à un renfort de développeurs dans votre équipe, quand les priorités changent souvent ou que vos données doivent rester dans vos locaux ; elle se paie à la journée, au taux journalier. Un forfait peut ouvrir le projet et une régie prendre le relais.",
  },
  {
    q: "Quel est le TJM d'un développeur IA ?",
    a: "Le taux journalier moyen (TJM) d'un développeur IA varie avec son expérience, la durée de la mission et le lieu de travail. Nous ne publions pas de taux unique : celui de notre proposition de régie correspond au profil retenu pour votre projet. Au forfait, c'est le prix total qui est fixé, pas celui d'une journée.",
  },
  {
    q: "Pourquoi ne publiez-vous pas de prix fixe ?",
    a: "Un prix affiché serait trop bas pour la plupart des projets, ou gonflé par précaution pour couvrir les cas difficiles. Deux agents peuvent n'avoir presque rien en commun selon les logiciels à relier et le contrôle humain à prévoir. Les fourchettes de cette page donnent l'ordre de grandeur ; le devis vient après l'examen de votre situation.",
  },
  {
    q: "Quel budget prévoir pour un premier projet IA ?",
    a: "Commencez petit : un prototype de quelques milliers d'euros, sur une tâche qui revient souvent, suffit à voir si l'idée tient sur vos propres données. Si elle tient, la version complète se chiffre sur un périmètre déjà éprouvé. Quand la tâche à viser reste à trouver, un Diagnostic IA peut venir avant ; le cadrage en fixe la durée et le prix.",
  },
  {
    q: "Le Diagnostic IA est-il payant ?",
    a: "Oui. Seul le cadrage de 30 minutes est offert ; le Diagnostic IA vient ensuite, si votre besoin le justifie. C'est une intervention courte avec vos équipes, dont on fixe la longueur et le prix pendant ce cadrage, selon le nombre d'équipes et de processus à examiner. Nous n'en publions pas le prix, qui dépend de ce périmètre.",
  },
  {
    q: "Le prix comprend-il l'hébergement et la maintenance ?",
    a: "Le devis de développement couvre la conception, la construction, les tests, la documentation et la passation. Le fonctionnement mensuel se chiffre à part : hébergement, consommation des modèles facturée à l'usage par l'éditeur, surveillance et évolutions. Nous l'estimons avant la signature. Le code étant à vous, la maintenance peut revenir à votre équipe, à nous, ou à un tiers de votre choix.",
  },
  {
    q: "L'OPCO peut-il financer un projet IA ?",
    a: "Conseil comme développement sortent du champ des actions de formation : cette partie du projet n'est pas finançable par votre OPCO. Pour former les utilisateurs, c'est différent, car Masteria détient la certification Qualiopi pour ses actions de formation. Pour un groupe interne de 12 personnes au plus, ou pour une seule personne, la journée vaut 1 980 € HT et les deux jours 3 960 € HT ; l'OPCO de votre branche la finance dans la limite de ce que permettent ses règles et ses fonds.",
  },
  {
    q: "Ces prix valent-ils hors de France ?",
    a: "Les ordres de grandeur valent pour tous nos clients, qu'ils travaillent en France, dans un autre pays européen, en Amérique du Nord ou en Inde ; seuls les frais de déplacement et la facturation changent d'un pays à l'autre. Les OPCO n'existent qu'en France : à Genève ou à Bruxelles, le devis s'établit en euros hors taxes, sans ce financement.",
  },
]

/* ───────── JSON-LD ───────── */

/* Service (ProfessionalService) avec AggregateOffer à lowPrice SANS highPrice :
   le plafond ouvert reflète l'intégrité tarifaire (fourchettes larges, jamais de
   prix ferme). areaServed FR/CH/BE/US/IN, brand Masteria, mainEntityOfPage. Pas de
   courseData (réservé formations), pas de HowTo. */
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Projets IA sur mesure chiffrés par Masteria',
  description: "Prototypes, chatbots, agents, copilotes, automatisations, applications et recherches documentaires (RAG) conçus pour une entreprise. Prix au forfait après cadrage, régie au taux journalier possible, code remis au client. Conseil et développement non finançables par l'OPCO.",
  url: 'https://www.master-ia.fr/prix-projet-ia',
  serviceType: 'Développement de solutions IA sur mesure',
  brand: { '@type': 'Brand', name: 'Masteria' },
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/prix-projet-ia',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '3000',
    // Pas de highPrice : plafond ouvert (gros projets au-delà de 100 000 €), fourchettes larges.
    availability: 'https://schema.org/InStock',
    offerCount: 6,
    seller: { '@id': 'https://www.master-ia.fr/#organization' },
    eligibleRegion: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'Country', name: 'Belgique' },
      { '@type': 'Country', name: 'États-Unis' },
      { '@type': 'Country', name: 'Inde' },
    ],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ordres de grandeur par livrable IA, hors taxes',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chatbot IA sur mesure', description: "Assistant de conversation qui cite ses sources. Dès quelques milliers d'euros." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent IA', description: "Actions enchaînées dans vos logiciels, avec validation humaine. Plusieurs dizaines de milliers d'euros, souvent davantage." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copilote interne', description: "Assistant réservé à une équipe, branché sur ses documents. Dizaines de milliers d'euros." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation de processus', description: "Tâche répétitive passée d'un outil à l'autre. Dès quelques milliers d'euros par flux." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application IA sur mesure', description: "Logiciel complet avec écrans et utilisateurs. Dizaines de milliers d'euros ; au-delà de 100 000 € en multi-sites." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recherche documentaire (RAG)', description: "Documents interrogés en langage courant, réponses reliées à leur source. Sur devis selon le volume." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/prix-projet-ia#article',
  headline: "Combien coûte un projet IA ? Ordres de grandeur, facteurs de prix et facturation au 7 octobre 2026",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-15',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/prix-projet-ia#webpage' },
  about: ["Prix d'un projet d'intelligence artificielle", 'Coût de développement IA', 'Taux journalier moyen (TJM) développeur IA', 'Facturation au forfait et en régie'],
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
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
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
        datePublished="2026-06-15"
        dateModified="2026-10-07"
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Prix d'un projet IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wallet size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Budget d'un projet IA · repères d'octobre 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Combien coûte un projet IA ?
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>Prix d'un développement IA sur mesure</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Fourchettes vérifiées le 7 octobre 2026 par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui signe les propositions de Masteria
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le prix d'un projet IA va de <strong style={{ color: '#fff', fontWeight: 700 }}>quelques milliers d'euros</strong> pour un prototype à <strong style={{ color: '#fff', fontWeight: 700 }}>plus de 100 000 €</strong> pour un programme déployé sur plusieurs sites, et les plus vastes se comptent en centaines de milliers d'euros. Chez Masteria, chaque projet de conseil ou de développement est chiffré au forfait, par écrit, une fois le cadrage mené.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Vous trouverez ici, livrable par livrable, nos ordres de grandeur, puis les cinq facteurs qui font varier la note, nos trois façons de facturer et le contenu d'un devis. Tous les montants s'entendent hors taxes et valent au 7 octobre 2026.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <a href="#tarifs" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les ordres de grandeur
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

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Les prix en six lignes</div>
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

      {/* ── ORDRES DE GRANDEUR PAR LIVRABLE (ancre sombre, porte le tableau) ── */}
      <section id="tarifs" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Ordres de grandeur</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Quel prix pour chaque type de projet IA ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un prototype, un chatbot nourri de vos documents ou une automatisation simple coûtent quelques milliers d'euros. Un agent relié à vos logiciels, un copilote d'équipe ou une application métier se chiffrent en dizaines de milliers. Un programme déployé sur plusieurs sites ou pays dépasse 100 000 €. Ces repères à plafond ouvert précèdent toujours un devis au forfait.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Deux projets qui portent le même nom peuvent demander un travail sans commune mesure : un chatbot qui répond sur dix fiches produits et un autre qui interroge trois logiciels n'ont presque rien en commun. Le tableau donne donc des points de départ, jamais des plafonds.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Ordres de grandeur de prix, hors taxes, par type de livrable IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '30%' }}>Livrable</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '30%' }}>Ordre de grandeur (HT)</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '40%' }}>Ce qui pèse sur le montant</th>
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
            Montants hors taxes, indicatifs, relevés au 7 octobre 2026. Le contenu de chaque livrable est décrit sur nos pages <Link to="/agence-developpement-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence de développement IA</Link> et <Link to="/outils-ia-sur-mesure" style={{ color: '#60A5FA', fontWeight: 600 }}>développement IA sur mesure</Link>.
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
                <strong>Cinq facteurs expliquent l'essentiel de l'écart entre deux devis : l'étendue fonctionnelle, le nombre de logiciels à relier, l'état de vos données, la liberté laissée à l'IA et le coût de fonctionnement après la mise en service.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Nous les mesurons pendant le cadrage, sur votre situation, avant d'écrire le moindre montant. Un devis honnête montre lequel de ces facteurs pèse le plus chez vous.
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
                Pour mesurer ces facteurs sur votre cas sans engager de développement, le <Link to="/diagnostic-ia" style={aStyle}>Diagnostic IA</Link> pose le périmètre ; sa durée et son prix se décident avec vous au cadrage. Les étapes d'un projet sont décrites sur la page <Link to="/methode-projet-ia" style={aStyle}>méthode d'un projet IA</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODÈLES DE FACTURATION (forfait / régie / conseil) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Comment nous facturons</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Forfait au projet ou régie au TJM ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le forfait reste notre mode courant : un prix global, écrit après le cadrage, pour un périmètre et des livrables définis. La régie sert quand vous voulez un ou plusieurs développeurs IA dans votre équipe ; elle se paie au taux journalier (TJM), selon le profil et la durée. Le conseil seul se chiffre au forfait. Les trois formules peuvent se succéder dans un même projet.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            La formule se choisit pendant le cadrage, selon votre besoin de visibilité budgétaire, la sensibilité de vos données et la disponibilité de vos équipes. Quelle que soit la formule, le code vous revient.
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
            La page <Link to="/methode-projet-ia" style={aStyle}>méthode et modèles d'engagement IA</Link> compare les trois formules critère par critère, régie comprise.
          </p>
        </div>
      </section>

      {/* ── CE QUI EST INCLUS (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Dans le devis</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que couvre le prix d'un projet IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Le forfait comprend le cadrage détaillé, la conception, le développement, les tests, la documentation, la formation des personnes qui reprendront l'outil et les garde-fous. Le code vous revient. Le fonctionnement mensuel (hébergement, consommation des modèles, maintenance) occupe une ligne à part, chiffrée avant la signature.</strong>
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
                Comme le code vous appartient, vous payez un outil que vos équipes savent faire vivre, et vous ne dépendez pas de nous pour la suite. Si votre besoin commence par la stratégie, notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> la cadre avant tout chiffrage de développement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DÉLAIS (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#fff', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Clock size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Délais</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Combien de temps dure un projet, et quel lien avec le budget ?
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Un prototype tourne souvent en quelques semaines. Une version complète, reliée à vos logiciels, se mesure en semaines ou en mois : tout dépend des intégrations et du temps que prennent vos validations. Délai et budget avancent ensemble : un premier palier peu coûteux montre si l'idée tient, et la suite se décide sur pièces.
              </p>
              <Link to="/methode-projet-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Voir les étapes d'un projet
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT NOUS CHIFFRONS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Notre devis</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment établissons-nous le prix de votre projet ?
          </h2>

          <p style={{ ...answerStyle, background: '#F9FAFB' }}>
            <strong>En trois temps : 30 minutes de cadrage offertes pour comprendre le besoin, une fourchette annoncée dans la foulée, puis un devis au forfait détaillé par livraison une fois le périmètre validé. Aucun montant ne vous engage avant votre signature.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 28 }}>
            {[
              { icon: Compass, title: 'Une demi-heure pour comprendre', desc: "Vous décrivez la tâche, les logiciels et les utilisateurs. Nous posons les questions qui pèsent sur le prix : volumes, état des données, contrôles nécessaires." },
              { icon: Calculator, title: 'Une fourchette, puis un devis', desc: "La fourchette arrive vite. Le devis détaillé suit, avec un prix par livraison et une estimation des coûts de fonctionnement." },
              { icon: Cpu, title: 'Des montants justifiés', desc: "Chaque ligne renvoie à un livrable et à un nombre de jours. Vous voyez ce que vous payez, et ce que vous pourriez retirer pour alléger la note." },
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
            Votre projet porte sur un agent ? La page <Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link> décrit ce qu'ils savent faire et les garde-fous qui entrent dans leur prix.
          </p>
        </div>
      </section>

      {/* ── ALLÉGER LA FACTURE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Alléger la facture</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment réduire le coût d'un projet IA sans perdre l'essentiel ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six leviers réduisent le budget sans retirer ce qui rend l'outil utile : commencer par une tâche, garder vos logiciels, préparer vos données en interne, adapter le modèle à chaque tâche, limiter l'autonomie au départ et, parfois, former vos équipes au lieu de construire.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {ECONOMIES.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Nous discutons de ces leviers dès le cadrage : un devis bien construit indique ce que chacun retirerait du montant, pour que vous arbitriez en connaissance de cause.
          </p>
        </div>
      </section>

      {/* ── TROIS MISSIONS DÉCOUPÉES EN PALIERS (liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#fff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Études de cas</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment trois missions de 2026 ont été découpées
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Nous ne publions pas les montants payés par nos clients, qui restent anonymes. Ces trois cas montrent comment une mission se découpe en paliers, ce qui pèse directement sur le budget.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {PALIER_CASES.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
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
                  Voir les étapes de cette mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
            Le récit complet de chaque mission figure sur la page <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas IA</Link>.
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
                Prix d'un projet IA : vos questions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une question de budget reste sans réponse ? Posez-la pendant le cadrage, nous y répondrons chiffres en main.
              </p>
              <CadrageLink style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </CadrageLink>
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
            Pour affiner votre budget
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Des pages pour préciser le projet avant de demander un chiffrage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Qui construit l'outil, avec quel contrat et quels choix techniques." },
              { label: "Méthode et modèles d'engagement", href: '/methode-projet-ia', tag: 'Méthode', desc: "Les cinq étapes d'un projet, puis la comparaison entre forfait, régie et conseil." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Préciser le besoin avant d'engager un budget de développement." },
              { label: 'Développement IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Copilotes, assistants documentaires, applications : les formes que prend l'outil livré." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Ce qu'un agent sait faire, et pourquoi ses garde-fous comptent dans le prix." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Cadrer la stratégie et les usages avant de chiffrer un développement." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'Panorama', desc: "Les usages de l'IA générative qui justifient un premier budget." },
              { label: "Exemples d'usages par service", href: '/cas-usage-ia-entreprise', tag: 'Exemples', desc: "Des usages classés par service, pour repérer la tâche à chiffrer en premier." },
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Gouvernance', desc: "Règles d'usage, registre, conformité : un poste à prévoir dans le budget." },
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
                    Lire
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Les fourchettes de cette page sont celles que Mathias Nizan, fondateur de Masteria, applique dans les propositions du cabinet. Il les a revues le 7 octobre 2026. Pour connaître son parcours, voyez <Link to="/mathias-nizan" style={aStyle}>la page qui lui est consacrée</Link>.
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
              Obtenez un ordre de prix pour votre projet
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez la tâche visée, les logiciels concernés et le livrable que vous imaginez. Au terme de cette demi-heure, vous repartez avec une fourchette, la formule de facturation qui vous convient et les prochaines étapes.
            </p>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Prix au forfait après cadrage · régie possible · code remis au client · montants hors taxes
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui chiffre et qui construit ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui chiffre, qui construit</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Le devis et le projet restent entre les mêmes mains
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Le devis est établi par Mathias Nizan, fondateur du cabinet lyonnais, qui suit ensuite le projet jusqu'à la livraison. Il choisit l'équipe parmi les indépendants du réseau Masteria : environ vingt formateurs, dix consultants et cinq développeurs spécialisés en IA. Le cabinet ne revend aucune licence : le prix payé rémunère le travail fait pour vous. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Forfait', 'écrit une fois le cadrage fini'],
              ['HT', 'pour tous les montants cités'],
              ['1 980 €', 'HT la journée de formation, seul prix fixe'],
              ['2022', 'création du cabinet, à Lyon'],
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
