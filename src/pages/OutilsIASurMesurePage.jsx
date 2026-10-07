import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, FileSearch, BarChart3, Workflow, Globe, Sparkles,
  Compass, FlaskConical, Code2, Rocket, RefreshCw, ShieldCheck, KeyRound,
  Server, GraduationCap, MapPin, Building2, Check, Minus, Sun, Landmark,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'
import CadrageLink from '../components/CadrageLink'

/*
 * Page offre « développement IA sur mesure » (slug /outils-ia-sur-mesure).
 * Décision du 02/10/2026 : cette page porte la requête « développement IA sur
 * mesure » (title et H1) ; /prix-projet-ia y renvoie avec cette ancre exacte ;
 * /agence-developpement-ia garde « agence développement IA ».
 * Angle propre à la page : le LIVRABLE (l'outil remis au client), ses formes,
 * le choix entre logiciel du marché et sur-mesure, la propriété, la maintenance.
 * Cibles secondaires : « outils ia sur mesure », « ia sur mesure »,
 * « logiciel ia sur mesure », « copilote interne entreprise », « assistant ia interne ».
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards ni de
 * FounderNote ; fait daté ajouté sur la fin des GPTs personnalisés (11/12/2026,
 * vérifié sur help.openai.com le 07/10) et des Gems (au plus tôt le 01/03/2027,
 * page Google « gems-migration »). Prix en fourchettes larges, développement pas
 * finançable par l'OPCO, « 30 minutes de cadrage offertes ».
 * Design premium charte Masteria : icônes lucide (zéro emoji), kickers, cartes
 * radius 16, tableau de décision, CTA sombre. Accent bleu #2563EB.
 */

const SLUG = 'outils-ia-sur-mesure'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Développement IA sur mesure : outils et copilotes | Masteria"
const META_DESC = "Développement IA sur mesure : copilotes, assistants documentaires, applications. Code et données à vous, hébergement en UE. 30 min de cadrage offertes."
const KEYWORDS = "développement ia sur mesure, outil ia personnalisé, outils ia sur mesure, logiciel ia sur mesure, copilote ia interne, solution ia sur mesure, développement outil ia, ia sur mesure"

/* Sources citées par la page (WebPage.citation + liens visibles). */
const PAGE_CITATIONS = [
  { name: "OpenAI, centre d'aide : retrait des GPTs personnalisés et migration vers les plugins", url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
  { name: "Google Workspace : passage des Gems aux compétences pour les comptes professionnels", url: 'https://knowledge.workspace.google.com/p/gems-migration' },
]

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
  { icon: KeyRound,   label: 'Code et données remis au client' },
  { icon: ShieldCheck, label: 'Hébergement européen possible' },
  { icon: MapPin,     label: 'Lyon · Europe · États-Unis · Inde' },
  { icon: Building2,  label: "Un seul métier, l'IA, depuis 2022" },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Formes', value: "Copilote d'équipe, assistant documentaire (RAG), application web, outil d'analyse, automatisation, agent spécialisé" },
  { label: 'Démarche', value: "Besoin précisé, maquette, prototype, versions successives, mise en service, évolutions" },
  { label: 'Propriété', value: "Code source, documentation et données remis au client, sans licence captive" },
  { label: 'Confidentialité', value: "Des offres où vos données n'entraînent pas les modèles ; hébergement en Europe sur demande" },
  { label: 'Maintenance', value: "Contrat de maintenance avec nous, ou reprise par votre équipe après passation" },
  { label: 'Délai et prix', value: "Prototype en quelques semaines ; forfait fixé après cadrage" },
]

/* ───────── 1. Les formes d'un outil sur mesure (6 cartes IconBox) ───────── */

const OUTILS = [
  {
    icon: Bot,
    title: "Copilote d'équipe",
    desc: "Un assistant réservé à vos collaborateurs, qui connaît vos procédures, votre vocabulaire et vos modèles de documents. Il rédige, résume et répond, sans que personne ne colle de données dans un service grand public.",
    href: '/copilote-ia-interne',
    linkLabel: 'Le copilote IA interne en détail',
  },
  {
    icon: FileSearch,
    title: 'Assistant documentaire (RAG)',
    desc: "Une question posée en français, une réponse tirée de vos contrats, procédures ou fiches techniques, avec le lien vers le passage cité. Le collaborateur vérifie la source avant de s'en servir.",
    href: '/assistant-documentaire-ia',
    linkLabel: "Voir l'assistant documentaire",
  },
  {
    icon: BarChart3,
    title: "Outil d'analyse et de reporting",
    desc: "L'outil lit vos exports et vos tableaux, signale ce qui a bougé et rédige un commentaire que le responsable relit. Le rapport du lundi se prépare pendant la nuit.",
  },
  {
    icon: Workflow,
    title: "Automatisation d'un processus",
    desc: "Un dossier arrive, l'outil le lit, en extrait les données, les contrôle et prépare la suite. Une personne valide les décisions qui engagent, et chaque étape laisse une trace.",
    href: '/automatisation-documentaire-ia',
    linkLabel: "Voir l'automatisation documentaire",
  },
  {
    icon: Globe,
    title: 'Application web dédiée',
    desc: "Des écrans conçus pour un service, des comptes par utilisateur, des droits par rôle. Vos équipes travaillent dans un logiciel stable, loin des scripts bricolés qui cassent au premier changement de version.",
  },
  {
    icon: Sparkles,
    title: 'Agent spécialisé',
    desc: "Un agent reçoit un objectif précis et enchaîne plusieurs étapes pour l'atteindre, dans les limites que vous lui fixez. Plus il agit seul, plus ses garde-fous comptent.",
    href: '/agents-ia-entreprise',
    linkLabel: 'Les agents IA en entreprise',
  },
]

/* ───────── 2. Tableau d'aide à la décision ───────── */

const DECISION_ROWS = [
  {
    critere: 'Dépense de départ',
    saas: { txt: 'Faible : un abonnement par utilisateur', tone: 'plus' },
    nocode: { txt: 'Moyenne : licences et paramétrage', tone: 'neutral' },
    surmesure: { txt: 'Plus élevée : un développement à financer', tone: 'minus' },
  },
  {
    critere: 'Ajustement à votre façon de travailler',
    saas: { txt: "Partiel : l'équipe s'adapte au logiciel", tone: 'minus' },
    nocode: { txt: 'Correct sur des cas simples', tone: 'neutral' },
    surmesure: { txt: "Complet : l'outil suit vos étapes", tone: 'plus' },
  },
  {
    critere: 'Dépendance à un éditeur',
    saas: { txt: 'Forte : prix et fonctions décidés ailleurs', tone: 'minus' },
    nocode: { txt: 'Présente : la plateforme reste un tiers', tone: 'neutral' },
    surmesure: { txt: 'Faible : le socle vous appartient', tone: 'plus' },
  },
  {
    critere: 'Confidentialité',
    saas: { txt: "Fixée par le contrat de l'éditeur", tone: 'neutral' },
    nocode: { txt: 'Les données passent par la plateforme', tone: 'minus' },
    surmesure: { txt: 'Choisie : hébergement européen possible', tone: 'plus' },
  },
  {
    critere: 'Évolutions',
    saas: { txt: "Celles que l'éditeur programme", tone: 'minus' },
    nocode: { txt: 'Bornées par la plateforme', tone: 'neutral' },
    surmesure: { txt: 'Libres : on ajoute ce dont vous avez besoin', tone: 'plus' },
  },
]

/* ───────── 3. De l'idée à l'outil (process) ───────── */

const PROCESS = [
  {
    num: '01',
    icon: Compass,
    title: 'Préciser le besoin',
    desc: "Nous partons du travail à faciliter avant de parler technologie : qui utilisera l'outil, sur quelles données, et quel signe montrera qu'il rend service. Ce qui ne mérite pas d'être construit est écarté dès cette étape.",
  },
  {
    num: '02',
    icon: FlaskConical,
    title: 'Une maquette, puis un prototype',
    desc: "La maquette montre les écrans ; le prototype fait ensuite tourner le cœur de l'outil sur une partie de vos données. Vous décidez d'aller plus loin après avoir manipulé quelque chose.",
  },
  {
    num: '03',
    icon: Code2,
    title: 'Une construction par livraisons',
    desc: "L'outil grandit par versions utilisables, chacune présentée en démonstration. Le modèle d'IA et l'architecture découlent du besoin et du budget, jamais de la mode du moment.",
  },
  {
    num: '04',
    icon: Rocket,
    title: 'La mise en service',
    desc: "Nous installons l'outil dans votre environnement, le relions à vos logiciels, posons les accès et les garde-fous, puis restons aux côtés des premiers utilisateurs pendant leurs premières semaines.",
  },
  {
    num: '05',
    icon: RefreshCw,
    title: 'Les évolutions',
    desc: "Une fois en service, l'outil continue d'avancer : corrections, fonctions nouvelles, passage à un modèle plus récent. Vous décidez du rythme et du contenu de chaque évolution.",
  },
]

/* ───────── 4. Propriété, sécurité et maintenance ───────── */

const PROPRIETE = [
  {
    icon: KeyRound,
    title: 'Le code et les données sont à vous',
    desc: "Le dépôt de code vous est transféré et vos données restent les vôtres. Vous pouvez en remettre les clés à d'autres développeurs sans demander d'autorisation ni racheter de licence.",
  },
  {
    icon: ShieldCheck,
    title: 'Une confidentialité prévue dès la conception',
    desc: "Les accès sont attribués par rôle, les échanges avec le modèle sont journalisés, et les données sensibles restent à l'écart des traitements qui n'en ont pas besoin.",
  },
  {
    icon: Server,
    title: 'Un hébergement choisi avec vous',
    desc: "Hébergeur européen, cloud de votre entreprise ou serveurs internes : le choix suit la sensibilité des données et votre politique de sécurité, puis il est consigné dans votre registre RGPD.",
  },
  {
    icon: RefreshCw,
    title: 'Maintenance ou reprise interne',
    desc: "Les modèles changent, vos besoins aussi. Un contrat de maintenance couvre corrections, évolutions et changements de modèle ; vous pouvez aussi reprendre l'outil en interne après la passation.",
  },
]

/* ───────── Études de cas (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const OUTIL_CASES = [
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · PME',
    figure: '3',
    figureLabel: 'assistants à construire, chacun confié à un porteur',
    text: "Chez ce distributeur où trois personnes font tout tourner autour d'Odoo, les assistants prévus interrogeront les transporteurs, importeront les réceptions d'entrepôt et s'occuperont des devis et des relances. La direction recevra aussi un tableau de bord ; l'outil prépare, l'humain valide.",
  },
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distribution IT B2B',
    figure: '11',
    figureLabel: 'compétences Claude installées sur les outils existants',
    text: "Chiffrer une demande reçue par courriel, relancer un devis, répondre à un cahier des charges en puisant dans l'ERP, suivre les stocks : chaque compétence a été conçue par un référent sur son propre travail. Livrées avec des données fictives, elles passent ensuite sur les fichiers de l'entreprise, juste avant la mise en production.",
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    sector: 'Conseil financier · secteur public',
    figure: '5',
    figureLabel: 'livrables, du schéma des assistants au guide de mise à jour',
    text: "Les quatre assistants conçus pour les appels d'offres du cabinet sont arrivés avec leur base de connaissance, leurs consignes complètes et un guide qui désigne qui met à jour quoi. Le cabinet fait désormais évoluer le dispositif sans Masteria.",
  },
]

/* ───────── 6. FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que le développement IA sur mesure ?",
    a: "C'est la construction d'un outil propre à une entreprise, autour de ses tâches et de ses données, à la place d'un logiciel standard. L'outil peut être un copilote d'équipe, d'un assistant documentaire, d'une application web ou d'un agent spécialisé ; il s'appuie sur un ou plusieurs modèles de langage et se branche sur votre système d'information. Chez Masteria, le code et les données restent votre propriété.",
  },
  {
    q: "Outil IA sur mesure ou logiciel SaaS : comment choisir ?",
    a: "Un logiciel en abonnement (SaaS) vise le plus grand nombre : votre équipe s'adapte à lui, vos données passent chez l'éditeur, et son calendrier s'impose à vous. Un outil sur mesure suit vos étapes, laisse les données là où vous le décidez et grandit avec vous. Pour un besoin courant, prenez le SaaS ; un outil construit pour vous devient pertinent dès que l'ajustement, la confidentialité ou l'évolution dans la durée pèsent dans la décision.",
  },
  {
    q: "Pouvez-vous développer un copilote IA interne pour nos équipes ?",
    a: "Oui, et on nous le demande souvent. Ce copilote connaît vos procédures et vos modèles de documents, répond aux questions des collaborateurs, rédige dans votre ton et peut déclencher certaines actions. Les droits suivent les rôles, chaque échange est journalisé, et personne n'a besoin de copier des données dans un service grand public.",
  },
  {
    q: "Combien coûte un outil IA sur mesure ?",
    a: "Pour un prototype, prévoyez quelques milliers d'euros ; pour un outil complet utilisé tous les jours, plusieurs dizaines de milliers ; au-dessus de 100 000 € dès que l'outil se déploie sur plusieurs sites. Le forfait exact tombe après le cadrage, et la page consacrée au budget d'un projet IA entre dans le détail de chaque livrable. Côté financement, la formation des utilisateurs peut relever de l'OPCO, mais le développement n'est pas finançable par votre OPCO.",
  },
  {
    q: "Faut-il remplacer nos logiciels actuels ?",
    a: "Non. L'outil s'ajoute à votre système d'information : il lit et écrit dans les logiciels que vous utilisez déjà (CRM, ERP, messagerie, base documentaire). Il comble un manque que le marché ne couvre pas, et ce qui fonctionne reste en place.",
  },
  {
    q: "Nos données restent-elles confidentielles ?",
    a: "Oui, c'est une exigence posée dès le cadrage. Nous retenons des offres où vos données n'entraînent pas les modèles, les accès suivent les rôles et les échanges sont journalisés. Selon la sensibilité des informations, il peut être hébergé en Europe, dans le cloud de votre entreprise ou sur vos propres machines.",
  },
  {
    q: "Qui maintient l'outil après la livraison ?",
    a: "C'est vous qui décidez. Le code vous appartenant, vous n'êtes lié à personne. Nous proposons un contrat de maintenance (corrections, évolutions, changement de modèle) ; votre équipe peut aussi être formée pour reprendre l'outil en interne.",
  },
  {
    q: "Combien de temps pour obtenir un premier prototype ?",
    a: "Comptez en général quelques semaines ; tout dépend de la complexité et de l'accès à vos données. Le prototype prouve la valeur sur un périmètre réduit avant que vous financiez la suite ; le calendrier précis se fixe pendant le cadrage.",
  },
  {
    q: "Avec quels modèles d'IA construisez-vous ces outils ?",
    a: "Avec celui qui convient à l'usage : Claude, ChatGPT, Gemini, un modèle Mistral AI, voire un modèle hébergé sur vos propres machines quand la confidentialité l'exige. Nous ne dépendons d'aucun éditeur, et l'architecture permet de changer de modèle sans reconstruire l'outil.",
  },
  {
    q: "Que deviennent les GPTs personnalisés et les Gems de nos équipes ?",
    a: "Les GPTs personnalisés d'OpenAI s'arrêtent le 11 décembre 2026, quelle que soit l'offre, et un report jusqu'au 11 février 2027 existe pour une partie des espaces Enterprise ; chaque GPT peut être migré en plugin, ses instructions devenant une compétence. Google remplace les Gems par des compétences ; les comptes professionnels conservent leurs Gems au moins jusqu'au 1er mars 2027. Si l'un de ces assistants porte un usage important, c'est le moment de le reconstruire : en compétence chez l'éditeur, ou en outil sur mesure dont vous gardez le code.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Développement IA sur mesure',
  description: "Outils d'intelligence artificielle construits pour une entreprise : copilotes d'équipe, assistants documentaires (RAG), outils d'analyse, automatisations, applications web et agents spécialisés. Code, documentation et données remis au client, hébergement européen possible, maintenance ou reprise interne.",
  url: 'https://www.master-ia.fr/outils-ia-sur-mesure',
  serviceType: 'Développement IA sur mesure',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/outils-ia-sur-mesure',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formes que prend un outil IA sur mesure',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Copilote d'équipe", description: "Assistant réservé aux collaborateurs, nourri de vos procédures et de vos modèles de documents." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Assistant documentaire (RAG)', description: "Réponses tirées de vos documents, avec le lien vers le passage cité." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Outil d'analyse et de reporting", description: "Lecture de vos exports et commentaire rédigé, relu par le responsable." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Automatisation d'un processus", description: "Lecture, extraction et contrôle d'un dossier, validation humaine des décisions qui engagent." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application web dédiée', description: "Écrans conçus pour un service, comptes par utilisateur et droits par rôle." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent spécialisé', description: "Objectif précis atteint en plusieurs étapes, dans des limites fixées par vous." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/outils-ia-sur-mesure#article',
  headline: 'Développement IA sur mesure : des outils et des copilotes taillés pour votre métier',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/outils-ia-sur-mesure#webpage' },
  about: ['Développement IA sur mesure', "Outils d'intelligence artificielle sur mesure", 'Copilote IA interne', 'Assistant documentaire (RAG)'],
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
  // Patron éditorial asymétrique réutilisable (sections formes / FAQ)
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
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Outils IA sur mesure</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              L'outil livré · code et données à vous
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Développement IA sur mesure&nbsp;:
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des outils et des copilotes taillés pour votre métier</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Page tenue par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> (Masteria) · dernière révision le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Chez Masteria, le développement IA sur mesure aboutit à un outil que vos équipes ouvrent chaque jour : un copilote nourri de vos règles, un assistant qui cherche dans vos documents, une application conçue pour un seul service. <strong style={{ color: '#fff', fontWeight: 700 }}>Le code, les données et la documentation vous appartiennent</strong>, et vous pouvez faire évoluer l'outil sans nous.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Les logiciels du marché couvrent les besoins courants. Quand votre façon de travailler, vos données ou vos exigences de confidentialité sortent de leur cadre, un outil construit pour vous devient la voie raisonnable. Vous verrez ici les formes qu'il peut prendre, comment trancher entre logiciel du marché et sur-mesure, et ce que vous recevez à la livraison.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
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

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'outil en six lignes</div>
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

      {/* ── 1. FORMES D'UN OUTIL SUR MESURE (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Formes possibles</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quelles formes prend un outil IA sur mesure ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six formes reviennent le plus souvent : le copilote d'équipe, l'assistant qui cherche dans vos documents, l'outil d'analyse qui commente vos chiffres, l'automatisation d'un processus, l'application web dédiée et l'agent spécialisé. Le choix dépend de la tâche, de qui s'en sert et de la marge d'action que vous laissez à l'IA.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Toutes partent d'une tâche déjà faite à la main dans votre entreprise, et toutes se branchent sur les logiciels en place.
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
                Deux de ces outils ont une page à part : le <Link to="/chatbot-ia-sur-mesure" style={aStyle}>chatbot IA sur mesure</Link> et l'<Link to="/integration-llm-rag" style={aStyle}>intégration LLM et RAG</Link>. Nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>exemples d'usages classés par métier</Link> aident à vous projeter. Pour connaître l'équipe qui construit et le contrat proposé, lisez la page <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> ; pour relier des logiciels existants sans créer d'outil nouveau, celle de notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link>. Si le périmètre reste à préciser, <CadrageLink style={aStyle}>30 minutes de cadrage offertes</CadrageLink> suffisent souvent à choisir la bonne forme ; un <Link to="/diagnostic-ia" style={aStyle}>Diagnostic IA</Link> peut ensuite l'affiner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. LOGICIEL DU MARCHÉ / SANS CODE / SUR MESURE (ancre sombre, tableau de décision) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Aide à la décision</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 860 }}>
            Logiciel du marché, assemblage sans code ou outil sur mesure ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 860 }}>
            <strong style={{ color: '#fff' }}>Trois situations appellent un outil construit pour vous : une façon de travailler qui n'appartient qu'à votre entreprise, des données qui ne peuvent pas transiter par un tiers, un outil appelé à grandir pendant des années. Pour un besoin courant, un logiciel du marché fait l'affaire ; pour un enchaînement simple, un assemblage sans code suffit.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 860 }}>
            Nous vivons de la construction d'outils, et nous vous dirons pourtant quand un abonnement suffit. Le tableau situe votre besoin, critère par critère, avant toute dépense.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 20 }}>
            <table aria-label="Comparatif entre logiciel du marché, assemblage sans code et outil IA développé sur mesure" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Logiciel du marché (SaaS)</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Assemblage sans code</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Outil sur mesure</th>
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

          <p style={{ color: '#B4C0D3', fontSize: 15, lineHeight: 1.7, margin: '0 0 20px', maxWidth: 860 }}>
            Un repère daté montre ce que coûte la dépendance à une plateforme. Chez OpenAI, les GPTs personnalisés disparaissent le 11 décembre 2026 pour toutes les offres ; chez Google, les Gems cèdent la place aux compétences, et les comptes professionnels les garderont au moins jusqu'au 1er mars 2027. Un outil dont vous détenez le code repose lui aussi sur un modèle, mais vous choisissez quand et comment en changer.
          </p>

          <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: 0, maxWidth: 860 }}>
            <Check size={18} strokeWidth={2.4} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
            <span>Retenez le sur-mesure pour un processus qui vous est propre, des données qui doivent rester chez vous ou un outil appelé à grandir. Dans les autres cas, commencez par ce qui existe.</span>
          </p>
        </div>
      </section>

      {/* ── 3. DE L'IDÉE À L'OUTIL (timeline à rail, rail étroit) ── */}
      <section id="process" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Démarche</Kicker>
          <h2 style={h2Style}>
            Comment passe-t-on d'une idée à un outil en service ?
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>En cinq temps : préciser le besoin, montrer une maquette puis un prototype, construire par livraisons, mettre en service dans votre environnement, puis faire évoluer. Vous jugez la valeur sur le prototype avant de financer la version complète.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Chaque temps livre quelque chose que vous pouvez voir ou tester. La méthode complète, avec le rythme des démonstrations et les modèles d'engagement, figure sur la page <Link to="/methode-projet-ia" style={aStyle}>méthode d'un projet IA</Link>.
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
            Quand l'outil doit surtout agir seul, nous étudions avec vous l'option d'un agent, décrite sur la page <Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link>, et les garde-fous qu'il réclame.
          </p>
        </div>
      </section>

      {/* ── 4. PROPRIÉTÉ, SÉCURITÉ ET MAINTENANCE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Propriété et sécurité</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            À qui appartient l'outil, où vivent les données, qui le maintient ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>L'outil vous appartient : code source, documentation et données vous reviennent. Nous retenons des offres où vos données n'entraînent pas les modèles, l'hébergement peut rester en Europe, et la maintenance se poursuit avec nous ou passe à votre équipe.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 860 }}>
            Pour un outil qui touche à vos clients ou à vos chiffres, ces trois questions pèsent autant que les fonctions. Nos réponses tiennent en quatre engagements.
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
            Si votre question reste stratégique (usages à prioriser, règles, conformité, choix entre faire et faire faire), notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> intervient avant le choix d'un outil.
          </p>
        </div>
      </section>

      {/* ── 5. ADOPTION (bloc secondaire formation) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Adoption</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Vos équipes prennent l'outil en main
          </h2>

          <p style={answerStyle}>
            <strong>Un outil sert à condition d'être adopté. À la mise en service, les futurs utilisateurs apprennent à s'en servir sur leurs propres dossiers, et un référent apprend à le corriger. Masteria est aussi un organisme de formation, si bien que cette passation fait partie du métier.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 860 }}>
            Les formateurs qui interviennent connaissent l'outil, puisqu'ils l'ont vu se construire avec vous. La prise en main va plus vite, et les questions trouvent leur réponse sur place.
          </p>

          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: '28px 30px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <IconBox icon={GraduationCap} />
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>Former vos équipes à l'IA, au-delà de l'outil</h3>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>
                Nous formons aussi vos collaborateurs aux assistants du quotidien et à l'écriture de consignes. La formation est facturée à la journée (1 980 € HT), en groupe interne jusqu'à douze personnes ou en séance individuelle ; l'OPCO de votre secteur peut la financer, si ses règles et ses fonds le permettent. Le développement de l'outil reste hors de ce cadre : il n'est pas finançable par votre OPCO.
              </p>
              <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                Parcourir les formations IA
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Études de cas</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Trois outils conçus pour les fichiers de nos clients
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Clients anonymes, faits tirés de nos dossiers de mission. Ce qui reste à faire est écrit au futur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {OUTIL_CASES.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
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
                  Ouvrir le cas
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 860 }}>
            Méthode et résultats complets de ces missions : page <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas IA</Link>.
          </p>
        </div>
      </section>

      {/* ── 6. FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Développement IA sur mesure : vos questions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre outil soulève une question qui n'est pas ici ? Envoyez-la, ou réservez une demi-heure pour en parler.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Envoyer votre question
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
            Aller plus loin sur l'outil sur mesure
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Choisir le partenaire, relier des logiciels existants, cadrer la stratégie ou estimer le budget.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Agence', desc: "Les personnes qui construisent votre outil, et le contrat qui vous lie à elles." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Relier entre eux les logiciels en place, sans créer d'outil nouveau." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Quand confier un objectif à un agent, et quelles limites lui donner." },
              { label: "Budget d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les ordres de grandeur, du prototype jusqu'à l'application déployée sur plusieurs sites." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Prioriser les usages et poser les règles avant de choisir un outil." },
              { label: 'Toutes nos solutions IA', href: '/solutions-ia', tag: 'Solutions IA', desc: "Les outils et accompagnements Masteria, classés par besoin." },
              { label: 'Formation vibe coding', href: '/formation-vibe-coding', tag: 'Formation', desc: "Apprendre à vos équipes produit à monter un prototype avec Lovable, Bolt ou Cursor." },
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
                    Voir la page
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
            Mathias Nizan pilote chaque projet d'outil sur mesure mené par Masteria, de la première question à la remise du code. Il a révisé cette page le 7 octobre 2026 ; son parcours figure sur <Link to="/mathias-nizan" style={aStyle}>sa fiche</Link>.
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
              Décrivez l'outil que vous imaginez
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 580 }}>
              Expliquez-nous la tâche à faciliter, les données disponibles et les personnes qui s'en serviraient. En une demi-heure, nous examinons la faisabilité, la forme d'outil la plus adaptée et ce qu'un prototype permettrait de vérifier.
            </p>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Code et données remis au client · hébergement européen possible · depuis Lyon, pour des clients jusqu'en Inde et outre-Atlantique
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe qui construit (fondateur + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'équipe qui construit</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Développeurs, consultant et formateur réunis autour de votre outil
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Chaque outil sur mesure mobilise un petit groupe tiré du réseau d'indépendants de Masteria, qui réunit, en chiffres arrondis, cinq développeurs IA, dix consultants et vingt formateurs. Mathias Nizan en choisit les membres et répond de la livraison. Le cabinet reste indépendant des éditeurs de modèles. Ses <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et sa <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en témoignent.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Code', 'remis au client à la livraison'],
              ['UE', 'hébergement possible sur demande'],
              ['≈ 5', 'développeurs IA mobilisables'],
              ['2022', 'naissance du cabinet, à Lyon'],
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
