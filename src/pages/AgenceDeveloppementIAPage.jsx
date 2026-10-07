import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Workflow, LayoutDashboard, Database, Plug, MonitorSmartphone,
  Target, FlaskConical, Code2, GraduationCap, Server,
  Cpu, Boxes, Check, FileText, Lock, KeyRound,
  Package, Users, Landmark, Sun,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import CadrageLink from '../components/CadrageLink'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « agence de développement IA » (slug /agence-developpement-ia).
 * Cluster : « agence développement ia », « agence de développement intelligence
 * artificielle », « dev ia », « ia dev », « web dev ia », « agence dev ia ».
 * Angle propre à la page (décision du 02/10/2026) : l'AGENCE et sa façon de
 * travailler (qui intervient, quel contrat, quels choix techniques). L'outil
 * livré est traité sur /outils-ia-sur-mesure (requête « développement IA sur
 * mesure »), les prix sur /prix-projet-ia, la méthode pas à pas sur
 * /methode-projet-ia, l'automatisation des processus sur /agence-automatisation-ia.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards ni de
 * FounderNote, cas cités en deux phrases avec lien vers leur ancre (faits de
 * src/data/etudes-de-cas.js), prix en fourchettes larges à plafond ouvert,
 * « 30 minutes de cadrage offertes », développement pas finançable par l'OPCO.
 * Design premium : icônes lucide (zéro emoji), kickers, accent bleu #2563EB.
 */

const SLUG = 'agence-developpement-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Agence de développement IA sur mesure | Masteria"
const META_DESC = "Agence de développement IA à Lyon : agents, applications métier et connecteurs, livrés avec leur code et leur documentation. 30 min de cadrage offertes."
const KEYWORDS = "agence développement ia, agence de développement ia, développement intelligence artificielle, développeur ia, dev ia, web dev ia, société développement ia"

/* Sources citées par la page (WebPage.citation + liens visibles). */
const PAGE_CITATIONS = [
  { name: "AI Act : version officielle du règlement 2024/1689, consultable sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Les fiches de la CNIL pour concevoir un système d'IA respectueux des données", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
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
  { icon: Bot,             label: 'Agents reliés à vos logiciels' },
  { icon: LayoutDashboard, label: 'Applications par métier' },
  { icon: Plug,            label: 'Connecteurs API et MCP' },
  { icon: MonitorSmartphone, label: 'Interfaces web' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Équipe', value: "Des développeurs IA (cinq environ), des consultants (une dizaine) et des formateurs (une vingtaine), tous indépendants, réunis selon le projet sous la conduite de Mathias Nizan" },
  { label: 'Livrables', value: "Agents, applications et copilotes par métier, recherche dans vos documents (RAG), connecteurs vers votre ERP ou votre CRM, interfaces web" },
  { label: 'Contrat', value: "Forfait écrit après cadrage ; renfort de développeurs dans vos locaux ou à distance quand le projet l'exige" },
  { label: 'Propriété', value: "Dépôt de code, documentation et accès d'administration remis à la livraison" },
  { label: 'Budget', value: "Un prototype se paie en milliers d'euros, un outil installé dans vos services en dizaines de milliers ; un déploiement multi-sites passe les 100 000 €" },
  { label: 'Premier pas', value: "30 minutes de cadrage offertes, le temps de juger la faisabilité" },
]

/* ───────── Ce que l'équipe construit (6 cartes) ───────── */

const LIVRABLES = [
  {
    icon: Bot,
    title: 'Agents IA',
    desc: "Un agent lit une demande, puise l'information dans vos logiciels et prépare l'action, qu'une personne valide quand elle engage l'entreprise. Exemple : la commande reçue par courriel, le stock vérifié dans l'ERP, la confirmation prête à partir.",
  },
  {
    icon: LayoutDashboard,
    title: 'Applications et copilotes par métier',
    desc: "Une application dessinée pour un service précis (achats, juridique, support client), avec ses écrans, ses droits d'accès et ses règles maison. Le copilote emploie le vocabulaire de l'équipe, puisqu'il a été construit avec elle.",
  },
  {
    icon: Database,
    title: 'Recherche dans vos documents (RAG)',
    desc: "Avec le RAG, le modèle cherche d'abord dans vos procédures, contrats ou fiches produits, puis rédige sa réponse en citant le passage d'origine. Le collaborateur vérifie la source en un clic.",
  },
  {
    icon: Plug,
    title: 'Connecteurs et API',
    desc: "Une API est la porte d'entrée technique d'un logiciel ; MCP, un standard ouvert, sert à y raccorder un assistant. Avec ces connecteurs, le modèle consulte votre CRM, votre ERP ou votre messagerie, et plus personne ne recopie de données.",
  },
  {
    icon: Workflow,
    title: 'Automatisations de processus',
    desc: "Quand une tâche se répète à l'identique, un enchaînement automatique suffit : un déclencheur, un traitement par le modèle, une vérification avant envoi. Ce volet a sa propre page, consacrée à l'automatisation.",
  },
  {
    icon: MonitorSmartphone,
    title: 'Interfaces web',
    desc: "Portail interne, formulaire qui pré-remplit un dossier, tableau de bord commenté : la partie que l'utilisateur ouvre dans son navigateur. Nous la dessinons écran par écran avec les personnes qui l'utiliseront.",
  },
]

/* ───────── Qui fait quoi (timeline 5 étapes, angle équipe) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Le cadrage, mené par un consultant',
    desc: "Il observe la tâche avec ceux qui l'accomplissent, recense les données disponibles et rédige avec vous le critère que l'outil devra remplir. Aucun développeur ne code avant que ce critère soit validé.",
  },
  {
    num: '02',
    title: 'Le prototype, monté par un développeur',
    desc: "Une première version tourne sur un extrait de vos données. Deux ou trois utilisateurs la testent, puis vous choisissez de continuer, d'ajuster ou d'arrêter.",
  },
  {
    num: '03',
    title: 'Le développement, confié à une petite équipe',
    desc: "Un ou deux développeurs construisent l'outil complet par livraisons utilisables. Le code est relu, versionné et commenté, pour qu'un autre développeur puisse le reprendre demain.",
  },
  {
    num: '04',
    title: "L'installation, faite avec votre informatique",
    desc: "L'équipe branche l'outil sur vos logiciels, règle les droits d'accès avec votre service informatique et active le journal des actions. La mise en service avance par étapes, sans bloquer le travail en cours.",
  },
  {
    num: '05',
    title: 'La reprise, préparée par un formateur',
    desc: "Un formateur Masteria forme les utilisateurs et le référent qui gardera l'outil. Le dépôt de code, la documentation et les accès vous sont remis le dernier jour.",
  },
]

/* ───────── Deux contrats (forfait / régie) ───────── */

const ENGAGEMENTS = [
  {
    icon: Package,
    tag: 'Forfait',
    title: 'Un projet confié de bout en bout',
    desc: "Notre équipe s'engage sur un résultat et sur un périmètre écrit. Vous validez chaque livraison lors d'une démonstration, et le prix reste celui de la proposition tant que le périmètre ne change pas.",
    points: ['Périmètre et prix signés avant le démarrage', 'Une démonstration à chaque livraison', 'Code et documentation remis en fin de projet'],
  },
  {
    icon: Users,
    tag: 'Renfort · régie',
    title: 'Des développeurs IA dans votre équipe',
    desc: "Un ou plusieurs développeurs rejoignent votre service informatique, travaillent dans vos outils et suivent vos priorités. Le cabinet reste derrière eux pour la méthode, la relecture du code et le choix des modèles.",
    points: ['Chez vous ou depuis nos bureaux', 'Adapté quand les données restent dans vos murs', 'Durée et nombre de profils fixés avec vous'],
  },
]

/* ───────── Choix techniques (6 cartes) ───────── */

const STACK = [
  { icon: Cpu, title: 'Le modèle adapté à la tâche', desc: "Un modèle rapide et peu coûteux pour trier des courriels, un modèle plus puissant pour rédiger un mémoire technique. Le coût de chaque requête entre dans le choix dès le cadrage." },
  { icon: Database, title: 'Vos documents comme source', desc: "La recherche dans vos documents cite le passage d'où vient chaque réponse. Nous la mettons à l'épreuve sur une liste de questions écrite avec vos experts, avant que le premier utilisateur y touche." },
  { icon: Boxes, title: 'Connecteurs MCP et API', desc: "Un connecteur donne à l'agent l'accès strictement nécessaire : lire une fiche client, créer un brouillon de devis. Chaque droit est listé, puis validé par votre informatique." },
  { icon: Code2, title: 'Sans code, puis avec du code', desc: "Make, n8n ou Power Automate suffisent pour un enchaînement simple. Dès que le volume, la sécurité ou la logique métier grandissent, nous écrivons du code, versionné dans votre dépôt." },
  { icon: Lock, title: 'Des accès par rôle, un journal des actions', desc: "Chaque utilisateur voit ce que son rôle autorise, et chaque action de l'agent laisse une trace datée. Après une erreur, on retrouve qui a validé quoi." },
  { icon: Server, title: 'Un hébergement en Europe si besoin', desc: "Selon la sensibilité des données, l'outil tourne chez un hébergeur européen, dans votre cloud ou sur vos serveurs. Le choix retenu figure dans votre registre RGPD." },
]

/* ───────── Tableau : trois voies de réalisation ───────── */

const TABLE_VOIES = [
  {
    critere: 'Mise en route',
    nocode: 'Immédiate pour un premier essai',
    masteria: 'Prototype testable en quelques semaines',
    esn: "Plus lente : appel d'offres, contrat cadre, affectation des profils",
  },
  {
    critere: 'Tenue en production',
    nocode: 'Fragile dès que les cas particuliers se multiplient',
    masteria: 'Testée sur vos données, avec journal et reprise sur erreur',
    esn: 'Solide, souvent dimensionnée pour de gros systèmes',
  },
  {
    critere: 'Après la livraison',
    nocode: "Repose sur son auteur, tant qu'il reste dans l'entreprise",
    masteria: 'Code, documentation et référent formé chez vous',
    esn: 'Maintenance facturée sur la durée',
  },
  {
    critere: 'Convient à',
    nocode: 'Un besoin ponctuel et une équipe disponible',
    masteria: "Un outil métier appelé à durer, sans équipe IA en interne",
    esn: "Un grand chantier informatique où l'IA occupe une petite place",
  },
]

/* ───────── Spécialisation (4 cartes) ───────── */

const WHY = [
  { icon: Target, title: 'Des tests sur vos propres questions', desc: "Une batterie de questions rédigées avec vos experts sert d'examen d'entrée à l'outil. Les réponses fausses sont corrigées ou bloquées, et la même liste resservira à chaque mise à jour." },
  { icon: FlaskConical, title: 'Une décision après le prototype', desc: "Le prototype tourne sur un extrait de vos données. Vous tranchez sur ce que vous avez vu fonctionner ; le développement complet attend votre accord." },
  { icon: KeyRound, title: 'Un code qui peut changer de mains', desc: "Le dépôt, la documentation et les accès vous sont remis. Votre équipe ou un autre prestataire reprend l'outil sans avoir à nous demander quoi que ce soit." },
  { icon: Cpu, title: 'Aucun éditeur à placer', desc: "Aucun fournisseur de modèle ne nous verse de commission. Quand un modèle moins cher fait le travail, c'est celui-là que nous recommandons." },
]

/* ───────── Études de cas (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const DEV_CASES = [
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distribution IT B2B · 58 salariés',
    figure: '11',
    figureLabel: "compétences Claude adossées à l'ERP et au CRM de l'entreprise",
    text: "Formés en juin 2026, dix référents ont construit avec nous des compétences Claude qui préparent une cotation depuis le courriel d'un client ou rédigent la relance d'un devis. Les autres collaborateurs y accéderont lors du déploiement programmé entre octobre et décembre 2026.",
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    sector: 'Conseil financier au secteur public',
    figure: '4',
    figureLabel: "assistants qui rédigent les réponses aux marchés publics, répartis par pôle",
    text: "Les consultants les ont rédigés et éprouvés avec nous sur quatre ateliers, deux heures à chaque fois, à partir des mémoires techniques les plus appréciés des jurys. Leur première consigne : demander au consultant ce qu'il sait de l'acheteur et quelles références citer, avant d'écrire.",
  },
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · trois personnes',
    figure: '3',
    figureLabel: "assistants prévus autour d'Odoo, le logiciel de gestion de la PME",
    text: "Le diagnostic remis en septembre 2026 retient trois outils : interroger les transporteurs avant chaque livraison, faire entrer dans Odoo les réceptions des entrepôts, rédiger devis et relances. Chacun aura un porteur dans l'équipe, et une formation de deux jours dans les locaux est prévue en octobre 2026.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une agence de développement IA ?",
    a: "C'est un prestataire qui conçoit et code des outils fondés sur des modèles d'intelligence artificielle : agents, applications par métier, recherche dans les documents, connecteurs. Son travail porte sur le modèle lui-même (choix, tests de qualité des réponses, garde-fous) autant que sur l'application qui l'entoure. Masteria mène ces projets du cadrage jusqu'à la remise du code, puis forme les personnes qui reprendront l'outil.",
  },
  {
    q: "Agence de développement IA ou agence web : quelle différence ?",
    a: "Une agence web livre des sites et des applications dont le comportement est écrit ligne à ligne. Un outil d'IA fonctionne avec un modèle de langage dont les réponses varient d'une fois sur l'autre : il faut les mesurer, les encadrer et prévoir une validation humaine. L'interface web, ce qu'on appelle parfois le « web dev IA », reste nécessaire et nous la réalisons aussi ; elle forme la partie visible d'un travail qui se joue surtout dans les données et les règles.",
  },
  {
    q: "Combien coûte le développement d'une solution IA ?",
    a: "Nous fixons un forfait une fois le cadrage terminé. Ordres de grandeur : un prototype ou un périmètre réduit se règle en milliers d'euros ; un outil relié à vos logiciels et utilisé chaque jour, en dizaines de milliers ; un déploiement multi-sites franchit la barre des 100 000 €, et certains programmes atteignent des centaines de milliers d'euros. Pour le financement, le développement n'est pas finançable par votre OPCO, à la différence de la formation des utilisateurs, que l'OPCO de votre branche prend en charge dans les limites que fixent ses règles et ses fonds.",
  },
  {
    q: "En combien de temps obtient-on un premier outil ?",
    a: "Un prototype utilisable sur un extrait de vos données demande en général quelques semaines. La version complète dépend du nombre de logiciels à relier et du temps de validation de votre côté. Le calendrier figure dans la proposition, découpé en livraisons que vous testez au fil de l'eau.",
  },
  {
    q: "À qui appartiennent le code et les données ?",
    a: "À vous. Le dépôt de code, la documentation technique et les accès d'administration vous sont remis à la livraison. Vos données restent les vôtres pendant le projet comme après ; elles ne servent qu'au projet, et leur traitement est décrit dans le contrat.",
  },
  {
    q: "Pouvez-vous travailler avec nos logiciels actuels ?",
    a: "Oui : nous partons toujours de ce qui existe. Nous relions l'outil à votre gestion commerciale, votre ERP, votre messagerie ou votre GED (gestion électronique des documents) par leurs API, ou par des connecteurs MCP quand l'éditeur en propose. Votre système d'information reste en place et l'outil vient s'y ajouter.",
  },
  {
    q: "Faut-il choisir une agence ou un développeur freelance ?",
    a: "Pour une mission courte qui demande une seule compétence, un indépendant seul fait l'affaire. Un projet qui mêle cadrage, développement, sécurité et formation des utilisateurs demande plusieurs profils habitués à travailler ensemble. Notre agence les réunit autour d'un même responsable, Mathias Nizan, du premier échange à la remise du code.",
  },
  {
    q: "Pouvez-vous travailler loin de Lyon, voire à l'étranger ?",
    a: "Oui. L'agence, dont les bureaux sont à Lyon, sert des clients en France et hors de nos frontières, de Genève aux États-Unis, et jusqu'en Inde. Le développement avance à distance, avec des démonstrations en visio ; le cadrage et la passation se tiennent volontiers dans vos locaux, frais de trajet chiffrés dans la proposition.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Agence de développement IA Masteria',
  description: "Équipe de développement qui conçoit pour les entreprises des agents IA, des applications par métier, des recherches documentaires (RAG), des connecteurs API et MCP et des interfaces web, puis remet le code et forme les équipes qui le reprennent.",
  url: 'https://www.master-ia.fr/agence-developpement-ia',
  serviceType: "Développement d'outils d'intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/agence-developpement-ia',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Ce que construit l'agence de développement IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agents IA reliés aux logiciels', description: "Agents qui préparent une action dans vos logiciels, validée par une personne quand elle engage l'entreprise." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Applications et copilotes par métier', description: "Écrans, droits d'accès et règles propres à un service de l'entreprise." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recherche documentaire (RAG)', description: "Réponses rédigées à partir de vos documents, avec le passage cité." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Connecteurs API et MCP', description: "Liaison du modèle avec votre ERP, votre CRM ou votre messagerie." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisations de processus', description: "Enchaînements automatiques avec vérification avant envoi." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interfaces web IA', description: "Portails, formulaires et tableaux de bord dessinés avec les utilisateurs." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/agence-developpement-ia#article',
  headline: "Agence de développement IA : une équipe qui construit vos agents et vos applications, puis vous les remet",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/agence-developpement-ia#webpage' },
  about: ['Agence de développement IA', 'Agents IA', 'Retrieval-augmented generation (RAG)', 'Model Context Protocol (MCP)'],
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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function AgenceDeveloppementIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections livrables / spécialisation / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Agence de développement IA', slug: SLUG },
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
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Agence de développement IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Développeurs IA · équipe pilotée depuis Lyon
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Agence de développement IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>une équipe qui construit vos agents et vos applications, puis vous les remet</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Texte signé <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui dirige Masteria · revu le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria est une agence de développement IA que Mathias Nizan a lancée à Lyon en 2022. <strong style={{ color: '#fff', fontWeight: 700 }}>Nous construisons des agents, des applications par métier et des connecteurs qui s'appuient sur des modèles de langage</strong>, et nous les installons dans vos logiciels. À la livraison, le code source, sa documentation et le savoir-faire pour le faire évoluer passent chez vous.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Un projet d'IA mobilise des profils qu'une PME recrute rarement en même temps : un consultant qui cadre l'usage, des développeurs capables de tenir un modèle de langage en production, un formateur qui prépare la reprise par vos équipes. Chez nous, ces trois métiers travaillent sur votre projet sous la conduite d'une seule personne.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <a href="#livrables" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir ce que l'équipe construit
            </a>
          </div>

          {/* tags de compétences */}
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'agence en six lignes</div>
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

      {/* ── CE QUE L'ÉQUIPE CONSTRUIT (éditorial asymétrique) ── */}
      <section id="livrables" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce que l'équipe construit</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quels outils une agence de développement IA construit-elle ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six familles de livrables reviennent dans nos projets : des agents qui agissent dans vos logiciels, des applications par métier, des recherches dans vos documents, des connecteurs, des automatisations et des interfaces web. Chacun part d'une tâche que vos équipes accomplissent déjà et finit branché sur leurs outils.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les expressions « dev IA » et « web dev IA » désignent les deux moitiés du travail : la logique qui interroge le modèle, et l'écran que l'utilisateur ouvre le matin. Nous menons les deux de front, car un bon agent caché derrière une interface confuse est abandonné en quelques semaines.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {LIVRABLES.map((item, i) => (
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
                Un même projet combine souvent plusieurs familles. Pour regarder l'outil remis à vos équipes (ses formes, sa propriété, sa maintenance), lisez la page <Link to="/outils-ia-sur-mesure" style={aStyle}>développement IA sur mesure</Link>. Les tâches qui passent d'un logiciel à l'autre relèvent de notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link>, et les assistants qui prennent des initiatives sont décrits sur la page <Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link>. D'autres exemples figurent dans nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>usages de l'IA rangés par service</Link>, nos <Link to="/solutions-ia" style={aStyle}>solutions IA rangées par besoin</Link> et la page sur l'<Link to="/ia-generative-entreprise" style={aStyle}>IA générative en entreprise</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUI FAIT QUOI (timeline à rail, rail étroit) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Qui fait quoi</Kicker>
          <h2 style={h2Style}>
            Comment se déroule un projet de développement IA avec notre équipe ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Cinq étapes, chacune confiée à la personne la mieux placée : le consultant cadre, le développeur prototype puis construit, l'équipe installe l'outil chez vous, le formateur prépare la reprise. Mathias Nizan suit le projet du premier au dernier jour, et vous retrouvez le même interlocuteur à chaque décision.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Le déroulé complet, avec les livrables de chaque étape et le rythme des démonstrations, figure sur la page <Link to="/methode-projet-ia" style={aStyle}>méthode d'un projet IA</Link>. Ici, l'accent porte sur les personnes qui interviennent.
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
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEUX CONTRATS (FORFAIT / RÉGIE) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Contrat</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Deux façons de faire appel à nos développeurs
          </h2>

          <p style={answerStyle}>
            <strong>Le plus souvent, vous nous confiez un projet au forfait : périmètre, livrables, dates et prix sont écrits avant le démarrage. Quand vos données ne doivent pas quitter vos murs, ou qu'un programme déjà lancé manque de bras, nous pouvons aussi placer un ou plusieurs développeurs dans votre équipe, sur place ou à distance.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le choix se fait pendant le cadrage. Il dépend de la sensibilité des données, du calendrier et du nombre de personnes prêtes, chez vous, à suivre le projet. Dans les deux formules, le code est écrit pour être relu et repris par quelqu'un d'autre.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24, maxWidth: 980, margin: '0 auto 32px' }}>
            {ENGAGEMENTS.map((card, i) => (
              <div key={card.title} style={{ ...cardStyle, padding: 32, ...(i === 0 ? { borderTop: `3px solid ${c}` } : {}) }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                  <span style={{ background: i === 0 ? c : cLight, color: i === 0 ? '#fff' : c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: '0.02em' }}>
                    {card.tag}
                  </span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>{card.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
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

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            La page <Link to="/methode-projet-ia" style={aStyle}>méthode et modèles d'engagement</Link> compare ces deux formules avec une troisième, le conseil seul. Si le besoin reste flou, le <Link to="/diagnostic-ia" style={aStyle}>Diagnostic IA</Link> le précise avant tout développement ; on en arrête la durée et le forfait pendant le cadrage.
          </p>
        </div>
      </section>

      {/* ── CHOIX TECHNIQUES (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Choix techniques</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Avec quels modèles et quelles briques techniques travaillons-nous ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le modèle se choisit projet par projet : ChatGPT d'OpenAI, Claude d'Anthropic, Gemini de Google, un modèle de Mistral AI, ou encore un modèle ouvert, téléchargeable, que vous hébergez vous-même. Autour de lui, nous assemblons la recherche dans vos documents, les connecteurs MCP et les API, et du code là où un outil sans code atteint ses limites. Pour des données sensibles, l'hébergement en Europe reste possible.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Les modèles se renouvellent vite : Anthropic a sorti Fable 5.1 le 1er septembre 2026, puis Opus 5.5 trois semaines plus tard et Sonnet 5.5 six jours après. Nous concevons donc chaque outil pour qu'on puisse changer de modèle sans le réécrire.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 56 }}>
            {STACK.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 28 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 15.5, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
            Monter l'outil vous-même, nous le confier ou passer par une ESN ?
          </h3>
          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Les trois voies se défendent. Le tableau aide à trouver la vôtre selon la durée de vie attendue de l'outil et ce que coûterait une panne.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre monter un outil IA soi-même en no-code, le confier à l'agence Masteria et passer par une ESN généraliste" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Vous-même, sans code</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Notre agence</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>ESN généraliste</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_VOIES.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.nocode}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.masteria}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.esn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SPÉCIALISATION (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Spécialisation</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi confier le développement à une agence spécialisée en IA plutôt qu'à une agence web ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Une agence web sait livrer un site. Un outil d'IA demande en plus de choisir un modèle, de mesurer la qualité de ses réponses et d'anticiper ses erreurs. Masteria ne travaille que sur l'IA depuis 2022 et construit chaque outil pour qu'il tienne en production, sans contrat avec un éditeur.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {WHY.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Si vous en êtes encore au choix des usages, des règles et des priorités, notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> commence par là. Les particularités de votre activité sont décrites sur nos pages consacrées à l'<Link to="/ia-secteurs" style={aStyle}>IA par secteur</Link>, et l'ensemble de nos offres sur la page <Link to="/agence-ia" style={aStyle}>agence IA</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REPRISE PAR VOS ÉQUIPES (bloc secondaire) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#fff', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Reprise par vos équipes</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Vos équipes apprennent à faire vivre l'outil
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Masteria forme aussi, sous certification Qualiopi (catégorie « actions de formation »), et la passation en profite. Le référent qui gardera l'outil apprend à lire le journal des actions, à corriger une consigne et à ajouter une source ; les utilisateurs s'exercent sur leurs propres dossiers. Pour former plus largement vos équipes à l'IA, chaque journée de formation vaut 1 980 € HT ; l'opérateur de compétences de votre branche (OPCO) peut la financer, selon ses règles et ses fonds. Côté code, aucun financement de ce genre : un projet de développement n'est pas finançable par votre OPCO.
              </p>
              <Link to="/formation-intelligence-artificielle" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Voir les formations à l'IA pour vos équipes
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUDGET ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Budget</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quel budget prévoir pour un projet de développement IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#F9FAFB' }}>
            <strong>Chaque projet reçoit un prix au forfait, écrit après le cadrage. Trois ordres de grandeur pour vous situer : quelques milliers d'euros pour éprouver une idée sur un prototype, plusieurs dizaines de milliers pour un outil que vos équipes utilisent chaque jour, tandis qu'un déploiement sur plusieurs sites ou pays franchit les 100 000 €, sans plafond fixé à l'avance.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 28 }}>
            {[
              { icon: Target, title: 'Les 30 premières minutes offertes', desc: "Nous écoutons votre besoin et posons les questions qui décident de la suite : quelles données, quel délai, combien d'utilisateurs. Vous savez ensuite si le projet tient debout." },
              { icon: FileText, title: 'Un forfait par étape', desc: "Le prototype a son prix, la version complète a le sien. Vous pouvez vous arrêter après le prototype sans rien devoir pour la suite." },
              { icon: Check, title: 'Des coûts de fonctionnement annoncés', desc: "Hébergement, consommation des modèles et maintenance sont estimés avant la signature, pour éviter la surprise de la première facture mensuelle." },
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
            Notre page <Link to="/prix-projet-ia" style={aStyle}>combien coûte un projet IA</Link> détaille, livrable par livrable, ce qui fait monter ou baisser la note. Pour une estimation sur votre cas, décrivez-nous la tâche à outiller et les logiciels concernés.
          </p>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Études de cas</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois outils construits avec les équipes de nos clients en 2026
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Les noms des clients restent confidentiels, à leur demande. Les faits ci-dessous viennent des dossiers de mission ; ce qui n'est pas encore fait est écrit au futur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {DEV_CASES.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
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
                  Le cas complet
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
            Chaque mission est racontée en entier, résultats compris, sur la page <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas IA</Link>.
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
                Questions sur notre agence de développement IA
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre question n'y figure pas ? Gardez-la pour notre échange de cadrage, ou posez-la par écrit.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrire à l'équipe de développement
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
            Préparer votre projet de développement
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            D'autres pages pour avancer, de la première question jusqu'au choix du contrat.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Une intervention courte pour préciser le besoin, avec une durée et un forfait arrêtés lors du cadrage." },
              { label: 'Méthode de projet IA', href: '/methode-projet-ia', tag: 'Méthode', desc: "Les étapes, les livrables, le rythme des démonstrations, puis le choix entre forfait, régie et conseil." },
              { label: 'Solutions IA', href: '/solutions-ia', tag: 'Solutions', desc: "Les outils que nous construisons, rangés par besoin : support client, documents, ventes." },
              { label: 'IA par secteur', href: '/ia-secteurs', tag: 'Secteurs', desc: "Industrie, distribution, services : ce que l'IA change dans chaque activité." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Relier vos logiciels pour qu'une tâche répétitive s'accomplisse sans ressaisie ni copier-coller." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Confier des actions à un agent, et choisir celles qui restent soumises à validation." },
              { label: 'Développement IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "L'outil livré vu de près : ses formes possibles, sa propriété, sa maintenance." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Choisir les usages, poser les règles et dater la feuille de route avant d'écrire du code." },
              { label: 'Formation vibe coding', href: '/formation-vibe-coding', tag: 'Formation', desc: "Apprendre à vos profils produit à prototyper une application en la décrivant à l'IA." },
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
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Fondateur de Masteria (Lyon, 2022), Mathias Nizan compose lui-même l'équipe de chaque projet de développement : il retient le consultant, les développeurs et le formateur selon votre secteur et vos logiciels. Vous trouverez son parcours sur <Link to="/mathias-nizan" style={aStyle}>sa page personnelle</Link> ; il a relu ce texte le 7 octobre 2026.
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
              Parlez-nous de l'outil qui vous manque
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Dites-nous quelle tâche vous voulez outiller, quels logiciels sont en jeu et qui s'en servira. Nous en parlons une demi-heure, par visio ou par téléphone, pour voir ce qui est faisable, ce qu'un prototype montrerait et par où commencer. La décision vous appartient ensuite.
            </p>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Agence de développement IA à Lyon · code et documentation remis au client · clients jusqu'aux États-Unis et en Inde
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe de développement (fondateur + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Les développeurs et leur encadrement</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Une équipe montée pour votre projet, sous la responsabilité du fondateur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria s'appuie sur un réseau d'indépendants, où l'on compte près de cinq développeurs IA, dix consultants environ et vingt formateurs à peu près. Pour chaque projet, Mathias Nizan choisit ceux qui connaissent vos logiciels ou votre secteur, et reste votre interlocuteur jusqu'à la remise du code. Aucun éditeur ne nous rémunère, si bien que le choix du modèle suit votre besoin. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en donnent des exemples datés.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 5', 'développeurs IA dans le réseau'],
              ['2022', "première année d'activité, à Lyon"],
              ['4', "études de cas anonymisées en ligne"],
              ['3', 'continents : Europe, Amérique, Asie'],
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
