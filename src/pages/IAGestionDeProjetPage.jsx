import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Workflow, Users, MapPin, Check, ClipboardCheck,
  Gauge, GraduationCap, Cpu, FileText, CalendarDays, AlertTriangle, MessagesSquare, Bot,
  Mail, Store, BookOpen,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page hub « IA en gestion de projet » (slug /ia-gestion-de-projet), cluster
 * CONSEIL + SOLUTIONS. Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 :
 * grappe « cabinet de conseil en gestion de projet » (210, KD 6), « consulting
 * gestion de projet » (170), « conseil en management de projet » (90), et les
 * variantes IA : « gestion automatisée de projets » (90, KD 11), « prompt ia
 * gestion de projet » (70), « reporting projet ia » (70).
 *
 * POSITIONNEMENT : Masteria n'est pas un cabinet de conseil en gestion de projet
 * (méthode, organisation du PMO) ; elle OUTILLE la fonction projet avec l'IA.
 * RÉPARTITION : /formation-ia-gestion-de-projet = la formation métier (2 j) ;
 * /methode-projet-ia = comment Masteria conduit ses propres projets ;
 * CETTE page = l'IA au service de VOS projets et de votre PMO.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : title et description
 * raccourcis, plus de FounderNote ni de bloc « Qui intervient » commun ni de
 * « +1 500 » ; outils datés au 7 octobre 2026 (fiche FAITS-OUTILS du 07/10 :
 * Teams, Copilot Cowork, connecteurs MCP de Gemini, Workspace Studio) ; trois
 * missions citées en deux phrases avec lien (src/data/missions-formation.js).
 */

const SLUG = 'ia-gestion-de-projet'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = "IA en gestion de projet : outiller votre PMO | Masteria"
const META_DESC = "IA en gestion de projet : comptes rendus, reporting et relances confiés à l'IA, estimations gardées par vos chefs de projet. 30 min de cadrage offertes."
const KEYWORDS = "ia gestion de projet, gestion automatisée de projets, reporting projet ia, prompt ia gestion de projet, pmo augmenté ia, cabinet de conseil en gestion de projet ia, consulting gestion de projet ia, conseil en management de projet ia, automatisation gestion de projet, agent ia chef de projet"

/* ───────── Styles ───────── */

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
  { icon: Workflow, label: 'Branché sur Jira, Planner, Monday, Notion ou Teams' },
  { icon: Users, label: 'Pour chefs de projet, PMO et directions de programme' },
  { icon: Compass, label: "Spécialiste de l'IA et rien d'autre, depuis 2022" },
  { icon: MapPin, label: "Basé à Lyon, missions jusqu'en Inde" },
]

const EN_BREF = [
  { label: 'Notre métier', value: "Équiper vos chefs de projet : assistants réglés sur vos gabarits, reporting produit depuis vos outils de suivi, relances automatiques, agents de consolidation, bibliothèque de prompts, formation" },
  { label: 'Hors de notre métier', value: "Redessiner votre méthode, organiser votre PMO ou piloter vos projets à votre place : ce métier appartient aux cabinets de gestion de projet, avec qui nous savons coopérer" },
  { label: 'Trois niveaux', value: "Assistants, puis automatisations, puis agents ; à chaque niveau, un chef de projet relit et tranche" },
  { label: 'Ce que vous gardez', value: "Des outils qui tournent sur un projet pilote, une bibliothèque de prompts d'équipe, des règles de confidentialité écrites, des chefs de projet formés" },
  { label: 'Prix', value: "Chaque étape a son forfait, chiffré après un premier échange de trente minutes, offert ; la formation est éligible à l'OPCO, alors que conseil et construction ne sont pas finançables par votre OPCO" },
  { label: 'Outils au 7 octobre 2026', value: "Copilot dans Teams pour les réunions, Copilot Cowork pour les tâches programmées, connecteurs MCP de Gemini vers Asana, Monday et Atlassian, n8n ou Make pour le reste" },
]

/* ───────── Ce que l'IA change, activité par activité ───────── */

const USAGES = [
  { icon: FileText, title: 'Une note de cadrage qui pose les bonnes questions', desc: "Partant des mails et des notes du lancement, et de votre gabarit, l'assistant rédige la note et transforme chaque information manquante en question pour le sponsor, au lieu de l'inventer. Le chef de projet comble, corrige et signe." },
  { icon: CalendarDays, title: 'Un découpage proposé, des dates laissées à l\'équipe', desc: "Lots, tâches, dépendances, chemin critique : l'IA en tire une structure depuis le périmètre. Les charges et les dates restent à l'équipe qui s'engage, parce qu'elle seule connaît ses forces." },
  { icon: MessagesSquare, title: 'Des comptes rendus qui partent le jour même', desc: "Des notes prises à la volée ou la transcription d'une réunion deviennent un relevé : décisions, actions avec responsable et date, questions ouvertes. Aucun débat reformulé, aucune décision ajoutée ; le chef de projet valide avant l'envoi." },
  { icon: Gauge, title: 'Un flash hebdomadaire tiré des données de suivi', desc: "L'outil part de l'export de Jira, de Planner ou de Monday, compare à la semaine précédente et rattache chaque phrase à un chiffre. Le chef de projet ajoute ce que les données ne disent pas : le climat, les signaux faibles." },
  { icon: AlertTriangle, title: 'Des arbitrages préparés en options', desc: "Pour un risque ou un dérapage, l'assistant liste les causes possibles, les parades connues et trois options chiffrées par l'équipe pour le comité. Le chef de projet distingue ce qui vient de ses notes et ce qui relève de la culture générale du modèle." },
  { icon: Bot, title: 'Des relances sans ressaisie', desc: "Un agent repère les actions en retard, rédige la relance adaptée à chaque destinataire et prépare les messages d'avancement pour les parties prenantes. Il propose ; le chef de projet envoie." },
]

/* ───────── Cabinet de gestion de projet ou cabinet IA (tableau sombre) ───────── */

const TABLE = [
  { critere: 'Sujet de la mission', sans: "La méthode, l'organisation du PMO, la gouvernance des projets", avec: "Les outils de la fonction projet : ce que l'IA prend en charge, ce que l'humain conserve" },
  { critere: 'Qui produit', sans: 'Des consultants installés dans vos équipes, souvent plusieurs mois', avec: 'Vos chefs de projet, équipés et formés ; nous construisons puis transmettons' },
  { critere: 'Ce qui reste après', sans: 'Des processus, une gouvernance, des tableaux de bord, un PMO en place', avec: 'Des assistants sur vos gabarits, des automatisations sur vos outils, des agents, une bibliothèque, une équipe formée' },
  { critere: 'Calendrier', sans: 'Une mission de plusieurs mois', avec: 'Un projet pilote équipé en quelques semaines, le PMO ensuite' },
  { critere: 'Ce qui ne bouge pas', sans: 'Estimations et arbitrages restent humains', avec: 'Estimations et arbitrages restent humains' },
]

/* ───────── Trois niveaux d'outillage ───────── */

const NIVEAUX = [
  { icon: Cpu, title: '1. Des assistants réglés sur vos gabarits', desc: "Un assistant par usage (cadrage, compte rendu, flash, arbitrage) dans l'outil d'IA que vous avez déjà : un projet ChatGPT ou Claude, un agent monté dans Agent Builder chez Microsoft, une compétence au format SKILL.md. Il connaît vos modèles de documents et votre vocabulaire. C'est le premier niveau, en place en quelques jours, avec la bibliothèque de prompts qui l'accompagne.", href: '/bibliotheque-de-prompts', cta: 'Ouvrir la bibliothèque de prompts' },
  { icon: Workflow, title: '2. Des automatisations sur vos outils de suivi', desc: "Le flash généré chaque vendredi depuis Jira, Planner, Monday ou Notion ; les comptes rendus produits à la sortie des réunions Teams ; les rappels envoyés aux porteurs d'actions en retard. Copilot Cowork sait déclencher une tâche selon un horaire ou dès qu'un mail arrive, et, depuis le 15 septembre 2026, Gemini dispose de connecteurs MCP pour Asana, Monday ou Atlassian. Chaque scénario s'arrête sur une validation avant l'envoi.", href: '/automatisation-ia', cta: "Lire le guide de l'automatisation" },
  { icon: Bot, title: '3. Des agents pour le PMO', desc: "Un agent qui consolide le reporting de plusieurs projets, un agent de compte rendu relié à la messagerie et à l'outil de suivi, un agent qui surveille les jalons du portefeuille. Ce niveau sert les PMO qui pilotent plusieurs projets, une fois les deux premiers en place.", href: '/agents-ia-entreprise', cta: 'Découvrir les agents IA' },
]

/* ───────── Méthode sur un trimestre ───────── */

const METHODE = [
  { periode: 'Semaine 1', title: 'Cadrer sur un projet pilote', desc: "Un projet en cours, ses gabarits, ses outils, ses rituels. Nous repérons où partent les heures : cadrage, comptes rendus, reporting, relances. Les règles de confidentialité (projets clients, données personnelles, version entreprise de l'outil) sont écrites dès le premier jour." },
  { periode: 'Semaines 2 à 4', title: 'Assistants et bibliothèque', desc: "Les assistants réglés sur vos gabarits sont essayés par les chefs de projet du pilote, corrigés, puis rangés dans une bibliothèque d'équipe. La formation se fait sur ces assistants, avec les livrables du projet en cours." },
  { periode: 'Mois 2', title: 'Automatiser reporting et comptes rendus', desc: "Le flash part de l'outil de suivi, les comptes rendus sortent des réunions, les relances partent seules après validation. On relève le temps rendu à chaque chef de projet et le délai de production du reporting." },
  { periode: 'Mois 3', title: 'Étendre au PMO, puis transmettre', desc: "Les autres projets reprennent les outils du pilote ; le PMO reçoit des agents de consolidation quand le volume le justifie ; un référent interne tient la bibliothèque et les scénarios. Nous passons la main en restant joignables." },
]

/* ───────── Erreurs fréquentes ───────── */

const ERREURS = [
  { title: "Laisser l'IA chiffrer", desc: "Une charge ou une date sortie d'un modèle a l'air aussi solide qu'une vraie estimation, sans que personne sache d'où elle vient. L'IA structure et compare ; ce sont les personnes qui connaissent l'équipe qui chiffrent et s'engagent." },
  { title: 'Automatiser un reporting sur des données périmées', desc: "Un flash produit depuis un outil que personne ne tient à jour livre chaque vendredi un rapport faux, plus vite qu'avant. Souvent, le premier chantier est la discipline de saisie." },
  { title: 'Ajouter une plateforme au lieu de brancher les vôtres', desc: "Un énième outil de gestion de projet « avec IA » que les équipes n'ouvrent pas. L'IA se branche sur Jira, Planner, Monday, Notion ou Teams, là où les chefs de projet passent déjà leur journée." },
  { title: 'Négliger la confidentialité des projets', desc: "Un cahier des charges client collé dans un compte gratuit, la transcription d'un comité envoyée à un service grand public : l'incident arrive avant le premier succès. Les règles et la version entreprise de l'outil se fixent le premier jour." },
  { title: 'Former sans les gabarits de l\'équipe', desc: "Une formation générique à l'IA produit des enthousiastes sans méthode. On forme sur les assistants réglés, les modèles de documents et les livrables en cours de l'équipe." },
]

/* ───────── Trois missions citées (faits : src/data/missions-formation.js) ───────── */

const TERRAIN = [
  {
    href: '/etudes-de-cas-ia#mission-assistanat-direction',
    icon: Mail,
    who: 'Assistanat de direction, septembre 2026',
    text: "Pendant sa formation, une assistante de direction a appris à tirer de Teams un compte rendu décisions-actions à partir d'une réunion enregistrée, puis à suivre un comité dans les blocs-notes Copilot. Préparer le comité de direction, de l'ordre du jour au mémo du dirigeant, a servi de fil rouge à sa formation.",
  },
  {
    href: '/etudes-de-cas-ia#mission-franchise-gemini',
    icon: Store,
    who: 'Réseau de franchise B2B, septembre 2026',
    text: "Au siège, les dirigeants ont conçu dans Workspace Studio un flux hebdomadaire pour relancer les devis qui attendent toujours une réponse, prêt à activer. Leur feuille de route à trois mois prévoit ensuite d'ouvrir Gemini profil par profil et de publier la charte.",
  },
  {
    href: '/etudes-de-cas-ia#mission-editeur-pole-formation',
    icon: BookOpen,
    who: "Pôle formation d'un éditeur, septembre 2026",
    text: "Le pôle a appris à sortir un reporting de son tableau de suivi sans le recopier, puis à faire préparer une session par Cowork. Le pôle fera le point sur ses usages un mois après la formation, lors d'un bilan à froid.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Êtes-vous un cabinet de conseil en gestion de projet ?", a: "Non, et nous le disons d'emblée. Un cabinet de conseil en gestion ou en management de projet travaille sur la méthode, l'organisation du PMO et la gouvernance, parfois en pilotant les projets lui-même. Masteria équipe la fonction projet avec l'IA : assistants réglés sur vos gabarits, reporting produit depuis vos outils, relances automatiques, agents de consolidation, bibliothèque de prompts, formation. Si un cabinet PMO intervient déjà chez vous, nous partons de ses processus sans les redessiner." },
  { q: "Qu'est-ce qu'un PMO augmenté par l'IA ?", a: "C'est un bureau des projets qui a délégué à des assistants, des automatisations et des agents ses tâches documentaires : consolider le reporting, mettre les comptes rendus au propre, rappeler les actions oubliées, préparer les options d'un arbitrage. Il garde les estimations, les décisions, le lien avec les parties prenantes et la vérification de ce que la machine a livré. L'effet se mesure sur le temps rendu à chaque chef de projet et sur le délai de sortie du reporting." },
  { q: "Jusqu'où peut-on automatiser la gestion de projet ?", a: "Sa partie documentaire, oui ; le pilotage, non. Ce qu'on appelle gestion automatisée de projets couvre, en octobre 2026, les comptes rendus tirés des réunions enregistrées, le flash produit depuis vos données de suivi, les rappels aux retardataires, la consolidation de plusieurs lots et les supports de comité. Elle passe par des assistants réglés ou des scénarios branchés sur vos outils, avec une validation avant tout envoi. Décider, chiffrer, arbitrer et vérifier restent le métier du chef de projet." },
  { q: "Comment l'IA produit-elle un reporting projet fiable ?", a: "En travaillant sur les données de suivi, jamais sur un texte à embellir. On exporte ou on branche les chiffres de l'outil (avancement de chaque lot, charge déjà consommée, jalons, risques encore ouverts), l'IA rédige le flash selon votre gabarit et le compare à la semaine précédente, puis le chef de projet ajoute ce que les données ignorent. Automatisé, le flash arrive en brouillon chaque vendredi, graphiques prévu et réalisé compris. La condition : un outil de suivi tenu à jour, ce qui constitue souvent le premier chantier." },
  { q: "Quels prompts d'IA retenir en gestion de projet ?", a: "Une poignée, toujours appuyée sur un livrable et un gabarit : rédiger la note de cadrage depuis les échanges de lancement, découper un périmètre en lots sans dates, transformer des notes en relevé de décisions et d'actions, écrire le flash depuis l'export de suivi, recenser les risques, poser un arbitrage sous forme de trois scénarios. Notre bibliothèque publique en propose six pour la gestion de projet, chacun avec l'explication de sa construction ; la mission et la formation les adaptent à vos modèles." },
  { q: "Sur quels outils de gestion de projet travaillez-vous ?", a: "Sur ceux que vous avez : Jira, Microsoft Planner et Project, Monday, Notion, Asana, Trello, ou un simple tableur partagé ; Teams, Outlook ou Gmail pour les réunions et les messages. L'assistant d'entreprise déjà déployé chez vous (Microsoft Copilot, Gemini, Claude, ChatGPT ou Vibe de Mistral) porte les assistants ; n8n ou Make portent les automatisations que l'outil ne sait pas faire seul. Nous n'imposons aucune plateforme et ne revendons aucune licence." },
  { q: "L'IA sait-elle planifier ou chiffrer un projet ?", a: "Elle sait proposer un découpage, des dépendances et des comparaisons avec des projets proches ; elle ne doit fixer ni charge ni date. Un modèle annonce une estimation fantaisiste avec le même aplomb qu'une estimation juste, et rien n'indique sur quoi elle repose. Nous réglons les assistants pour qu'ils refusent de chiffrer, et nous apprenons aux chefs de projet à s'en servir pour structurer avant d'estimer eux-mêmes, ce que demandent aussi les méthodes agiles." },
  { q: "Comment gérez-vous la confidentialité des projets ?", a: "Les règles s'écrivent le premier jour : version entreprise de l'outil, données qui ne servent pas à entraîner les modèles, accès limités, consignes pour les projets clients et les données personnelles, liste de ce qu'on anonymise avant. Les automatisations tournent sur vos comptes et vos outils ; un agent ne lit que ce que le chef de projet a le droit de lire. Pour les environnements les plus sensibles, un hébergement souverain ou sur vos serveurs se discute au cadrage." },
  { q: "Combien coûte l'outillage IA de la fonction projet ?", a: "Chaque étape a son forfait, chiffré à l'issue d'un cadrage dont la première demi-heure est offerte : le projet pilote avec ses assistants et sa bibliothèque d'abord, puis les automatisations et l'extension au PMO selon leur périmètre. Vous décidez de l'étape suivante sur le résultat de la précédente. Le conseil et la construction ne sont pas finançables par votre OPCO ; la formation des chefs de projet, deux jours facturés 3 960 € HT, peut être prise en charge par votre OPCO, d'après ses critères." },
  { q: "Cela concerne-t-il une PME sans PMO ?", a: "Oui, à sa mesure. Une PME qui mène des projets sans bureau dédié gagne d'abord sur les comptes rendus, le point d'avancement au dirigeant et les relances : deux assistants et une automatisation sur l'outil déjà en place, confiés au chef de projet le plus à l'aise. Les agents de consolidation attendent qu'il y ait un portefeuille à consolider." },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IA en gestion de projet et PMO augmenté (Masteria)',
  description: META_DESC,
  url: 'https://www.master-ia.fr/ia-gestion-de-projet',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/ia-gestion-de-projet#webpage' },
  serviceType: "Outillage de la fonction projet par l'intelligence artificielle",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Suisse' }, { '@type': 'Country', name: 'Belgique' }, { '@type': 'Country', name: 'États-Unis' }, { '@type': 'Country', name: 'Inde' }],
  audience: { '@type': 'BusinessAudience', audienceType: 'Chefs de projet, PMO, directions de programme' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Niveaux d'outillage IA de la fonction projet",
    itemListElement: NIVEAUX.map(n => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n.title, description: n.desc } })),
  },
}

const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/ia-gestion-de-projet#termes',
  name: 'IA en gestion de projet : les termes',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: "PMO augmenté par l'IA", description: "Bureau des projets qui confie à des assistants, des automatisations et des agents ses tâches documentaires (reporting, comptes rendus, relances, consolidation) et garde les estimations et les arbitrages." },
    { '@type': 'DefinedTerm', name: 'Gestion automatisée de projets', description: "Automatisation des tâches documentaires de la conduite de projet, branchée sur les outils de suivi et de messagerie, avec une validation humaine avant tout envoi." },
    { '@type': 'DefinedTerm', name: 'Reporting projet IA', description: "Flash d'avancement rédigé par l'IA à partir des données de l'outil de suivi, selon un gabarit, comparé à la période précédente et relu par le chef de projet." },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/ia-gestion-de-projet#article',
  headline: "IA en gestion de projet : outiller la fonction projet, sans laisser l'IA estimer",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/ia-gestion-de-projet#webpage' },
  about: [
    { '@type': 'Thing', name: 'Gestion de projet', sameAs: 'https://fr.wikipedia.org/wiki/Gestion_de_projet' },
    { '@type': 'Thing', name: 'Bureau des projets', sameAs: 'https://fr.wikipedia.org/wiki/Bureau_des_projets' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function IAGestionDeProjetPage() {
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
    { name: 'IA en gestion de projet', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, definitionsJsonLd, articleJsonLd]}
      />

      {/* ── HERO ── */}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>IA en gestion de projet</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ClipboardCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Chefs de projet · PMO · programmes</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            IA en gestion de projet :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>outiller la fonction projet, sans laisser l'IA estimer</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Un texte de <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, publié en septembre 2026 et revu le 7 octobre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            En gestion de projet, l'IA prend en charge la part documentaire du métier : <strong style={{ color: '#fff', fontWeight: 700 }}>cadrage écrit, comptes rendus, flash d'avancement, relances, préparation des arbitrages</strong>. Elle le fait par des assistants réglés sur vos gabarits, des automatisations branchées sur vos outils de suivi et, pour le PMO, des agents. Les estimations et les décisions restent aux personnes ; Masteria construit l'outillage et forme vos chefs de projet à s'en servir.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Masteria n'exerce pas le métier de cabinet de conseil en gestion de projet : nous ne touchons pas à votre méthode et nous ne pilotons pas vos projets. Nous équipons ceux qui les pilotent, en partant de leurs modèles de documents, de leurs logiciels et de leurs réunions, sur un projet pilote d'abord.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#usages" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Six activités transformées</a>
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En six lignes</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 150px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CE QUE L'IA CHANGE (éditorial asymétrique) ── */}
      <section id="usages" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Six activités</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>L'IA change six activités du chef de projet</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Le cadrage, le découpage, les comptes rendus, le reporting, la préparation des arbitrages et les relances : six activités où le chef de projet passe une grande partie de sa semaine à produire des documents. L'IA s'occupe de la mise en forme et du premier jet ; il garde l'estimation, la décision et le contrôle.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Notre <Link to="/formation-ia-gestion-de-projet" style={aStyle}>formation IA gestion de projet</Link> suit le même découpage, sur les projets en cours des participants.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {USAGES.map((item, i) => (
                <div key={i} style={{ ...cardStyle, padding: 24 }}>
                  <div style={{ marginBottom: 14 }}><IconTile icon={item.icon} /></div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CABINET DE GESTION DE PROJET OU CABINET IA (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Deux métiers voisins</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Un cabinet de conseil en gestion de projet organise, un cabinet IA équipe</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Si votre méthode et votre PMO tiennent, mais que vos chefs de projet passent leurs journées à produire des documents, il vous faut de l'outillage. Si la méthode elle-même vacille, commencez par un cabinet de gestion de projet ; nous viendrons ensuite, ou à ses côtés.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre cabinet de conseil en gestion de projet et outillage IA de la fonction projet" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '24%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>Cabinet de conseil en gestion de projet</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '38%' }}>PMO augmenté par l'IA (Masteria)</th>
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
            La manière dont Masteria mène ses propres projets IA chez ses clients est un autre sujet, traité sur notre page <Link to="/methode-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>méthode projet IA</Link>.
          </p>
        </div>
      </section>

      {/* ── TROIS NIVEAUX ── */}
      <section id="niveaux" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>L'outillage</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>L'outillage se construit en trois niveaux, dans cet ordre</h2>
          <p style={answerStyle}>
            <strong>D'abord des assistants réglés sur vos gabarits, en place en quelques jours ; puis des automatisations sur vos outils de suivi pour le reporting et les comptes rendus ; enfin des agents, pour un PMO qui pilote un portefeuille. Chaque niveau repose sur le précédent, et aucun n'envoie rien sans validation.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {NIVEAUX.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{card.desc}</p>
                  <Link to={card.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700 }}>
                    {card.cta}
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── MÉTHODE ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={h2Style}>Un trimestre suffit pour équiper une fonction projet</h2>
          <p style={{ ...answerStyle, maxWidth: 'none', background: '#fff' }}>
            <strong>Un projet pilote et ses outils la première semaine ; des assistants, une bibliothèque et la formation le premier mois ; l'automatisation du reporting et des comptes rendus le deuxième ; l'extension au PMO et la passation le troisième. Les règles de confidentialité s'écrivent le premier jour.</strong>
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
            Deux relevés, faits avant et après, servent de juge : le temps rendu à chaque chef de projet et le délai de sortie du reporting. La façon de les convertir en euros est expliquée sur notre page <Link to="/roi-ia-entreprise" style={aStyle}>ROI de l'IA en entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pièges connus</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Cinq erreurs reviennent quand l'IA arrive dans les projets</h2>
          <p style={answerStyle}>
            <strong>Laisser l'IA chiffrer, automatiser un reporting sur des données périmées, ajouter une plateforme au lieu de brancher les vôtres, négliger la confidentialité, former sans les gabarits de l'équipe. Nous les voyons en formation comme en mission depuis 2022, et toutes se corrigent au cadrage.</strong>
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

      {/* ── SUR LE TERRAIN (missions citées, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="terrain" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Comptes rendus, relances, reporting : trois missions de septembre 2026</h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Ces clients ne portent pas tous le titre de chef de projet, mais leurs gestes sont ceux de la fonction projet. Ils ont demandé à rester anonymes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {TERRAIN.map(({ href, icon: Icon, who, text }) => (
              <article key={href} style={{ ...cardStyle, borderTop: `3px solid ${c}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{who}</span>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={href} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Lire la mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
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
              <Kicker>Le volet formation</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Vos chefs de projet apprennent sur leurs propres livrables</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La <Link to="/formation-ia-gestion-de-projet" style={aStyle}>formation IA gestion de projet</Link> dure deux jours (14 heures) en intra, pour 3 960 € HT le groupe ; elle se resserre sur une seule journée si le périmètre est étroit. Elle travaille sur les projets en cours des participants, du cadrage au reporting, et laisse une bibliothèque de prompts d'équipe. Elle suffit seule quand vos gabarits existent ; elle prolonge la mission quand les assistants ont été réglés. Masteria étant certifiée Qualiopi pour ses actions de formation, l'OPCO de votre branche peut la financer selon ses propres règles ; le conseil et la construction restent des prestations de service.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Les projets en cours servent de support', 'Du cadrage au flash, six activités', "Une bibliothèque d'équipe à la sortie", "Prise en charge OPCO possible"].map(pt => (
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Dix questions de chefs de projet et de PMO</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Une question sur votre outil de suivi ou vos rituels ? Écrivez-nous.</p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Poser ma question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>À lire ensuite</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Formation, prompts, automatisation : les pages voisines</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>De quoi approfondir chaque niveau d'outillage, ou former l'équipe qui le portera.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation IA gestion de projet', href: '/formation-ia-gestion-de-projet', tag: 'Deux jours', desc: "Les six activités travaillées sur les projets des participants, bibliothèque comprise." },
              { label: 'Bibliothèque de prompts', href: '/bibliotheque-de-prompts', tag: 'Prompts', desc: "Six prompts de gestion de projet expliqués, parmi plus de cent rangés par métier." },
              { label: 'Automatisation IA', href: '/automatisation-ia', tag: 'Scénarios', desc: "Ce qu'on automatise et avec quels outils ; le flash projet en est un exemple type." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Niveau 3', desc: "Des agents reliés à l'outil de suivi et à la messagerie, sous validation humaine." },
              { label: 'Formation n8n', href: '/formation-n8n', tag: 'Autonomie', desc: "Pour que votre PMO construise et entretienne lui-même ses scénarios." },
              { label: 'Formation IA management', href: '/formation-ia-management', tag: 'Encadrement', desc: "Pour les managers dont les équipes travaillent déjà avec l'IA." },
              { label: 'Conseil en transformation IA', href: '/conseil-transformation-ia', tag: 'Organisation', desc: "Quand c'est la fonction projet entière qu'il faut repenser : rôles, processus, pilotage." },
              { label: 'Méthode projet IA', href: '/methode-projet-ia', tag: 'Nos projets', desc: "Forfait, régie, équipe dédiée : comment Masteria conduit ses propres missions." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Continuer<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
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
            J'ai écrit cette page à l'intention des chefs de projet qui me disent passer plus de temps sur leurs comptes rendus que sur leurs projets. La règle que j'y défends, ne jamais laisser une machine chiffrer à leur place, vient des ateliers où nous avons vu des estimations sorties d'un modèle passer pour des engagements. Mon parcours est présenté sur <Link to="/mathias-nizan" style={aStyle}>ma page de fondateur</Link>.
          </p>
          <p style={{ fontSize: 14, color: '#6B7280', margin: 0, fontWeight: 600 }}>Mathias Nizan, fondateur de Masteria</p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Rendons à vos chefs de projet le temps des documents</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Parlez-nous de vos outils de suivi, de vos réunions récurrentes et du projet que vous prendriez comme pilote. Pendant ce rendez-vous, nous indiquons le premier niveau d'outillage à installer, ce qu'il faut préparer, et la forme du devis par étape.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Visio ou téléphone · un projet pilote pour commencer · vos outils de suivi conservés</p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui équipe vos projets ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui équipe vos projets</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>Des spécialistes de l'IA qui parlent la langue des projets</h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Lyonnais, Mathias Nizan a lancé Masteria en 2022 avec une seule spécialité, l'intelligence artificielle, et il conduit chaque mission. Selon le chantier, il fait appel à des développeurs pour les automatisations et les agents (cinq environ dans le réseau), à des consultants (une dizaine) et à des formateurs (une vingtaine), tous à leur compte. Aucune licence n'est revendue : l'outil retenu est le vôtre. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en donnent des exemples.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[['6', 'prompts de gestion de projet publiés et commentés'], ['3', "niveaux d'outillage, du plus simple au plus autonome"], ['14 h', 'de formation sur les projets en cours'], ['1', 'projet pilote avant toute extension']].map(([k, v]) => (
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
