import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, MapPin, MessagesSquare, Network, Scale, ShieldCheck, Sparkles,
  Target, Users, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation agents IA » (slug /formation-agents-ia), côté
 * FORMATION (OPCO/Qualiopi visibles).
 * Cible (Semrush fr, relevé 2026-08-28) : « formation agent ia » (390/mois,
 * KD 29, CPC 6,66 €), « formation agents ia » (170, KD 23) et « formation ia
 * agentique » (90, KD 18). Title = singulier exact-match, H1 = pluriel,
 * « IA agentique » traité en H2/FAQ/lexique.
 *
 * RÉPARTITION D'INTENTIONS (anti-cannibalisation) :
 *  - /formation-agents-ia = CETTE page : APPRENDRE à concevoir, fiabiliser et
 *    superviser des agents (formation, 2 jours) ;
 *  - /agents-ia-entreprise = le guide côté solutions + faire construire
 *    (ses H2 : « Qu'est-ce qu'un agent IA ? », « cas d'usage », « quels
 *    outils pour déployer » — ne PAS reprendre ces formulations) ;
 *  - /formation-automatisation-ia = les scénarios no-code (Make/Zapier/n8n) ;
 *  - /formation-vibe-coding = construire un OUTIL en pilotant l'IA ;
 *  - /formation-claude-code = les agents dans le code, pour les devs.
 *
 * INTÉGRITÉ : faits produit vérifiés août 2026 (agents d'espace de travail
 * ChatGPT, Agent Builder/Copilot Studio, Projets/Skills Claude, Gems/
 * NotebookLM/Workspace Studio selon édition, Vibe pour Mistral). Preuve :
 * uniquement les chiffres publiés sur /etudes-de-cas-ia (11 assistants IA,
 * distributeur IT B2B). Tarif : 1 980 € HT/jour groupe, jamais de promesse
 * OPCO, pas de CPF. Entités Wikipédia vérifiées (curl 200) le 2026-08-28.
 */

const SLUG = 'formation-agents-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation agent IA : construire des agents fiables | Masteria'
const META_DESC = "Formation agents IA : concevoir, tester et superviser des agents fiables sur vos outils (Claude, ChatGPT, Copilot, Gemini, n8n). Qualiopi, OPCO."
const KEYWORDS = "formation agent ia, formation agents ia, formation ia agentique, créer un agent ia, construire un agent ia sans coder, agent ia entreprise"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

const thStyle = { textAlign: 'left', padding: '12px 16px', fontSize: 12.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6B7280', borderBottom: '2px solid #E5E7EB', fontFamily: 'Nunito, sans-serif' }
const tdStyle = { padding: '14px 16px', fontSize: 14.5, color: '#374151', lineHeight: 1.6, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }

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
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: Bot, label: 'Sans code : construit en atelier sur vos outils' },
  { icon: Building2, label: '2 jours en intra, dans vos locaux ou à distance' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; format 1 jour ou accompagnement individuel possibles au cadrage" },
  { label: 'Pour qui', value: "Équipes métier, référents IA, managers, responsables de processus ; aucun prérequis technique" },
  { label: 'Outils', value: "Votre environnement : Claude, ChatGPT, Microsoft Copilot, Gemini, Mistral, et n8n ou Make pour l'orchestration" },
  { label: 'Méthode', value: "Chaque participant construit, teste et fiabilise un agent sur un processus réel de son poste, sans écrire de code" },
  { label: 'Livrables', value: "Agents partagés dans vos espaces de travail, gabarits de cadrage et d'instructions, grille d'évaluation, plan de déploiement" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable OPCO ; devis sous 24 h" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#autonomie', 'Agent, assistant, automatisation'],
  ['#programme', 'Programme des 2 jours'],
  ['#outils', 'Vos outils'],
  ['#fiabilite', 'Fiabilité'],
  ['#profils', 'Pour qui'],
  ['#tarif', 'Tarif'],
  ['#faq', 'FAQ'],
]

/* ───────── Trois niveaux d'autonomie (3 cartes + 1 carte sombre) ───────── */

const NIVEAUX = [
  {
    icon: MessagesSquare,
    title: "L'assistant",
    desc: "Vous demandez, il produit, vous gardez la main à chaque échange : un brouillon, une synthèse, une analyse. C'est le socle de nos formations par métier, et le point de départ de la plupart des équipes.",
  },
  {
    icon: Workflow,
    title: "L'automatisation classique",
    desc: "Un scénario écrit à l'avance se déroule à l'identique : un formulaire arrive, une ligne se crée, un accusé part. Robuste et prévisible, tant que les cas d'entrée gardent la même forme.",
  },
  {
    icon: Bot,
    title: "L'agent IA",
    desc: "Il reçoit un objectif : qualifier cette demande, préparer ce dossier, produire ce brief. Il décompose, va chercher l'information dans vos applications, produit, et rend la main sur ce qui engage. Son autonomie se règle.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Comprendre, cadrer, construire',
    resume: "De la boucle agentique au premier agent testé sur un cas réel du poste.",
    matin: [
      { t: 'La boucle agentique, démontrée en direct', d: "Objectif, décomposition, appel d'outils, vérification : ce qui se passe réellement quand un agent travaille, montré pas à pas sur vos outils." },
      { t: "Trois niveaux d'autonomie", d: "Assistant, automatisation, agent : une grille simple pour trancher, tâche par tâche, ce qui mérite un agent et ce qui n'en a pas besoin." },
      { t: 'Ce que vos licences permettent déjà', d: "Panorama de votre environnement réel : Claude, ChatGPT, Microsoft Copilot, Gemini, et ce que chaque édition autorise." },
      { t: "Cadrer un cas d'usage d'agent", d: "La tâche, les données mobilisées, les applications connectées, le point de validation humaine : un gabarit de cadrage réutilisable en interne." },
      { t: 'Atelier : qualifier son processus', d: "Chaque participant choisit un processus réel de son poste et le passe à la grille : agent, automatisation ou assistant." },
    ],
    apresmidi: [
      { t: 'Construire son premier agent, sans code', d: "Instructions, connaissances, outils : chacun monte un agent dans votre environnement (agent d'espace de travail, projet et compétences, Gem ou agent Copilot selon le cas)." },
      { t: 'Le nourrir de vos documents', d: "Gabarits, procédures, exemples maison : l'agent produit dans vos formats et votre ton, pas dans ceux d'un modèle générique." },
      { t: 'Le connecter à vos applications', d: "Messagerie, agenda, stockage, tableaux : ce que l'agent peut lire et faire selon vos licences, et ce qu'on lui interdit d'emblée." },
      { t: 'Atelier : premier test en conditions réelles', d: "L'agent traite de vrais cas du poste ; on note ce qui tient, ce qui dérive, ce qui manque." },
      { t: 'Revue croisée de fin de journée', d: "Chaque agent passe devant le groupe : erreurs typiques, corrections d'instructions, premiers garde-fous." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: 'Fiabiliser, orchestrer, gouverner',
    resume: "Des instructions testées à l'orchestration entre applications, jusqu'au plan de déploiement.",
    matin: [
      { t: "Des instructions d'agent qui tiennent", d: "Rôle, périmètre, refus, format de sortie, escalade vers l'humain : la différence entre un agent qui dérive et un agent qui rend service." },
      { t: 'Évaluer avant de déployer', d: "Un jeu de cas de test, cas pièges compris, et des critères d'acceptation : l'agent se recette comme un travail, jamais sur une démo réussie." },
      { t: 'Découper un processus complet', d: "Multi-étapes et multi-agents : quand un seul agent suffit, quand il vaut mieux une chaîne d'agents spécialisés qui se contrôlent." },
      { t: 'Orchestrer entre vos applications', d: "n8n ou Make : déclencheurs, étapes IA, points de contrôle humains ; l'agent s'insère dans le flux réel de l'équipe." },
      { t: 'Atelier : fiabiliser son agent', d: "Chacun durcit l'agent du jour 1 : instructions révisées, jeu de test, garde-fous, ou extension en chaîne multi-étapes." },
    ],
    apresmidi: [
      { t: 'Superviser au quotidien', d: "Journal des actions, revue des sorties, traitement des erreurs : qui surveille quoi, à quelle fréquence, et quand on débranche." },
      { t: 'Le cadre : RGPD, AI Act, propriété', d: "Données autorisées par agent, transparence quand l'agent interagit, littératie de l'article 4, propriété des agents créés : des règles écrites." },
      { t: "Déployer dans l'équipe", d: "Partage dans vos espaces de travail, référent désigné, montée de version : l'agent devient un outil d'équipe, jamais un secret de poste." },
      { t: 'Atelier : le plan de déploiement', d: "Pour chaque agent construit : responsable, indicateurs, prochaine itération, date de revue." },
      { t: "Plan d'action collectif", d: "Les trois agents prioritaires de l'équipe, qui les porte, à quelle échéance ; la liste part avec vous." },
    ],
  },
]

/* ───────── Objectifs (6 cartes) ───────── */

const OBJECTIFS = [
  { icon: Target, title: "Repérer les bons cas d'usage", desc: "Trancher, tâche par tâche, ce qui mérite un agent, ce qui relève d'une automatisation simple et ce qui reste à l'assistant." },
  { icon: Bot, title: 'Construire un agent sans code', desc: "Monter un agent dans votre environnement : instructions, connaissances, accès aux applications, sur un processus réel du poste." },
  { icon: ListChecks, title: 'Le tester comme un livrable', desc: "Constituer un jeu de cas de test, cas pièges compris, et prononcer une acceptation sur des critères écrits." },
  { icon: ShieldCheck, title: 'Poser les garde-fous', desc: "Limiter le périmètre, définir les refus, imposer la validation humaine sur tout ce qui engage l'entreprise." },
  { icon: Network, title: "L'orchestrer entre vos applications", desc: "Insérer l'agent dans le flux réel de l'équipe avec n8n ou Make : déclencheurs, étapes, points de contrôle." },
  { icon: Eye, title: 'Le superviser dans la durée', desc: "Lire le journal des actions, organiser la revue des sorties, faire évoluer l'agent sans le laisser dériver." },
]

/* ───────── Quel environnement pour quel agent (tableau) ───────── */

const OUTILS_TABLE = [
  {
    env: 'Claude (Team / Enterprise)',
    build: "Des assistants d'équipe sur vos corpus (Projets), des compétences réutilisables (Skills), des connecteurs vers vos outils",
    fort: "La qualité de rédaction et les compétences partageables entre collègues",
  },
  {
    env: 'ChatGPT (Business)',
    build: "Des agents d'espace de travail (les successeurs des GPTs), des tâches planifiées, de l'analyse de données",
    fort: "La polyvalence et un magasin d'agents interne à l'entreprise",
  },
  {
    env: 'Microsoft Copilot',
    build: "Des agents avec Agent Builder, des flux avancés avec Copilot Studio, dans Microsoft 365",
    fort: "L'ancrage dans Word, Excel, Outlook, Teams et SharePoint",
  },
  {
    env: 'Gemini (Google Workspace)',
    build: "Des Gems, des corpus NotebookLM, des automatisations Workspace Studio selon votre édition",
    fort: "L'intégration native à Gmail, Docs et Sheets",
  },
  {
    env: 'n8n ou Make',
    build: "Des chaînes complètes entre vos applications : déclencheur, étapes IA, points de contrôle humains",
    fort: "L'orchestration multi-applications, au-delà d'un seul outil",
  },
]

/* ───────── Ce qui fait échouer un agent (5 cartes) ───────── */

const ECHECS = [
  {
    title: "L'agent fourre-tout",
    desc: "Un agent à qui l'on demande tout ne fait rien de fiable. Un agent par processus, avec un périmètre écrit : c'est la première décision de cadrage, et la plus rentable.",
  },
  {
    title: "Les instructions d'ambiance",
    desc: "« Sois professionnel et efficace » ne contraint rien. Rôle, limites, refus, format de sortie, escalade : les instructions se rédigent comme une consigne de travail, puis se testent.",
  },
  {
    title: 'La démo qui tient lieu de test',
    desc: "Trois essais réussis devant le groupe ne valident rien. Un agent se recette sur un jeu de cas, cas pièges compris, avec des critères d'acceptation écrits.",
  },
  {
    title: "L'autonomie sans relecture",
    desc: "Un agent qui envoie, publie ou engage sans validation humaine finit par le faire de travers. Ce qui engage l'entreprise passe par un humain : c'est une règle de conception, jamais une option.",
  },
  {
    title: 'Personne ne surveille',
    desc: "Sans journal des actions ni revue des sorties, la dérive s'installe sans bruit. La supervision se décide à la conception : qui regarde quoi, à quelle fréquence, et quand on débranche.",
  },
]

/* ───────── Profils (6 cartes) ───────── */

const PROFILS = [
  { icon: Users, title: 'Équipes métier', desc: "Commercial, RH, finance, marketing, support : les processus répétitifs à plusieurs étapes y font les meilleurs premiers agents." },
  { icon: Sparkles, title: 'Référents IA', desc: "Ceux qui outillent leur service : ils repartent avec la grille de cadrage, le gabarit d'instructions et la méthode de recette." },
  { icon: Target, title: 'Managers et chefs de projet', desc: "Pour décider quoi confier à un agent, arbitrer le niveau d'autonomie et porter le plan de déploiement de l'équipe." },
  { icon: Workflow, title: 'Responsables de processus', desc: "Qualité, ops, ADV : ceux qui possèdent les flux que les agents vont traverser, et les points de contrôle qui vont avec." },
  { icon: Layers, title: 'PMO et transformation', desc: "Pour cadrer un portefeuille d'agents cohérent, avec des règles communes, au lieu d'initiatives dispersées." },
  { icon: Building2, title: 'DSI et IT de proximité', desc: "Pour poser licences, connecteurs et périmètres de données, et garder la main sur ce que les agents peuvent toucher." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une formation agents IA ?",
    a: "C'est une formation où vos équipes apprennent à concevoir, construire, tester et superviser des agents IA : des systèmes qui enchaînent les étapes d'une tâche (chercher, produire, vérifier, transmettre) en utilisant vos applications, sous le contrôle d'un humain. Chez Masteria, elle dure 2 jours, se tient en intra dans vos locaux ou à distance, et chaque participant construit un agent sur un processus réel de son poste, dans votre environnement : Claude, ChatGPT, Microsoft Copilot, Gemini, avec n8n ou Make pour l'orchestration. Elle est certifiée Qualiopi et finançable par votre OPCO.",
  },
  {
    q: 'Quelle différence entre un agent IA et un assistant comme ChatGPT ?',
    a: "L'assistant répond à vos demandes une par une : vous demandez, il produit, vous reprenez la main. L'agent reçoit un objectif et le poursuit : il décompose la tâche, choisit ses étapes, va chercher l'information dans vos applications, produit le livrable et s'arrête aux points de validation prévus. La frontière est l'autonomie : un agent agit entre deux interventions humaines, un assistant agit pendant l'échange. La formation commence par cette grille, car le premier gain consiste à choisir le bon niveau pour chaque tâche.",
  },
  {
    q: 'Que veut dire « IA agentique » ?',
    a: "L'IA agentique désigne l'approche où un modèle d'IA poursuit un objectif en plusieurs étapes et utilise des outils pour y arriver : lire une boîte mail, interroger un tableau, remplir un document, déclencher une action. « Agent IA » désigne le système concret construit sur cette logique. La formation démystifie le terme dès la première matinée : la boucle agentique (objectif, décomposition, action, vérification) s'observe en direct sur vos propres outils, puis chacun la met en œuvre.",
  },
  {
    q: 'Faut-il savoir coder pour suivre la formation agents IA ?',
    a: "Non. Tout ce qui se construit pendant les 2 jours se fait sans code : agents d'espace de travail côté ChatGPT, Projets et compétences côté Claude, Agent Builder côté Copilot, Gems côté Gemini, et n8n ou Make en glisser-déposer pour l'orchestration. L'atelier demande d'être à l'aise avec ses outils bureautiques, rien de plus. Les profils qui veulent ensuite passer au code, pour des agents intégrés à un produit ou à un système, poursuivent avec la formation Claude Code ou un développement sur mesure.",
  },
  {
    q: 'Quels agents construit-on pendant la formation ?',
    a: "Ceux de vos postes. Les cas typiques : qualifier et résumer les demandes entrantes avant réponse, préparer un dossier complet (recherche, pièces, synthèse) avant un rendez-vous, produire un premier livrable dans vos gabarits (compte rendu, brief, réponse type), tenir une veille et livrer une synthèse hebdomadaire, préparer les éléments d'un reporting. Le cadrage écarte volontairement les cas qui engagent l'entreprise sans relecture : ils viendront plus tard, quand la supervision aura fait ses preuves.",
  },
  {
    q: 'Sur quels outils la formation se déroule-t-elle ?',
    a: "Sur votre environnement réel, dans ses versions entreprise : Claude (Projets, compétences, connecteurs), ChatGPT (agents d'espace de travail, tâches planifiées), Microsoft Copilot (Agent Builder, Copilot Studio), Gemini (Gems, NotebookLM, Workspace Studio selon édition), Mistral avec Vibe côté assistants, et n8n ou Make pour orchestrer entre applications. Le cadrage recense licences et éditions : la formation travaille sur ce que vos équipes ouvriront le lendemain, avec les droits qu'elles auront réellement.",
  },
  {
    q: 'Un agent IA peut-il travailler seul, sans validation humaine ?',
    a: "Techniquement oui, et c'est justement ce que la formation encadre. La règle enseignée est simple : tout ce qui engage l'entreprise (envoyer, publier, répondre à un client, modifier un dossier) passe par une validation humaine ; l'agent prépare, l'humain décide. L'autonomie complète se réserve aux tâches sans enjeu d'engagement, avec un journal des actions et une revue régulière des sorties. Le niveau d'autonomie est une décision de conception, qui se revoit à mesure que l'agent fait ses preuves.",
  },
  {
    q: 'Quel cadre RGPD et AI Act pour des agents IA ?',
    a: "Deux étages. Côté données : les ateliers se font sur les offres entreprise, qui n'entraînent pas les modèles sur vos données, et chaque agent reçoit un périmètre écrit (ce qu'il peut lire, où il peut écrire, ce qui est exclu), en s'appuyant sur les recommandations de la CNIL. Côté règlement européen : l'article 4 demande de soutenir la littératie IA des utilisateurs, ce qu'une formation documentée couvre, et la transparence se prévoit quand un agent interagit avec des personnes. Rien de bloquant : tout se traite au cadrage.",
  },
  {
    q: 'La formation agents IA est-elle finançable par notre OPCO ?',
    a: "Oui : Masteria est certifiée Qualiopi, condition pour mobiliser votre OPCO dans le cadre du plan de développement des compétences. Nous préparons le dossier avec vous : programme détaillé, objectifs pédagogiques, modalités d'évaluation. La décision et le niveau de prise en charge appartiennent à votre opérateur, selon votre branche et votre budget formation. Pas d'éligibilité CPF : c'est une formation d'équipe, qui relève du budget formation de l'entreprise.",
  },
  {
    q: 'Peut-on suivre la formation à distance ou en individuel ?',
    a: "Oui. Le format de référence est l'intra en présentiel, dans vos locaux, jusqu'à 12 personnes par session ; le même programme se tient à distance en classe virtuelle, souvent en demi-journées. En individuel, un référent ou un dirigeant avance en tête-à-tête sur ses propres processus, au même tarif journalier. Partout en France, en Suisse et en Belgique.",
  },
  {
    q: "Que reste-t-il dans l'entreprise après les 2 jours ?",
    a: "Les agents construits en atelier, partagés dans vos espaces de travail plutôt que sur des comptes individuels ; le gabarit de cadrage et le gabarit d'instructions, réutilisables pour les agents suivants ; la grille d'évaluation et les jeux de test ; les règles écrites (données, validation humaine, supervision) ; et le plan de déploiement de l'équipe : les trois agents prioritaires, qui les porte, à quelle échéance.",
  },
  {
    q: 'Et si nous voulons faire construire nos agents plutôt que former nos équipes ?',
    a: "Les deux chemins existent et se combinent. Quand l'agent traverse plusieurs systèmes, demande des connecteurs spécifiques ou doit tenir une charge importante, nous le construisons en mission : c'est l'objet de notre offre agents IA en entreprise. La formation garde tout son sens dans ce cas : les équipes qui comprennent la boucle agentique cadrent mieux le besoin, recettent mieux le livrable et supervisent mieux les agents qu'on leur confie.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation agents IA — Masteria',
  description: "Formation agents IA en 2 jours : comprendre la boucle agentique, cadrer les cas d'usage, construire des agents sans code dans votre environnement (Claude, ChatGPT, Microsoft Copilot, Gemini), les fiabiliser (instructions, jeux de test, garde-fous), les orchestrer avec n8n ou Make et organiser la supervision. En intra, présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Distinguer assistant, automatisation et agent, et choisir le bon niveau d'autonomie par tâche",
    "Cadrer un cas d'usage d'agent : tâche, données, applications, point de validation humaine",
    "Construire un agent sans code dans son environnement (Claude, ChatGPT, Copilot, Gemini)",
    "Fiabiliser un agent : instructions testables, jeu de cas de test, garde-fous",
    "Orchestrer un agent entre plusieurs applications avec n8n ou Make",
    "Superviser des agents en production : journal des actions, revue des sorties, gouvernance",
  ],
  about: "Agents d'intelligence artificielle (IA agentique)",
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: "Aucun prérequis technique ; une pratique, même récente, d'un assistant IA aide.",
  audience: 'Équipes métier, référents IA, managers, responsables de processus, PMO, DSI',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}

/* Le programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation agents IA (2 jours)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    {
      '@type': 'ListItem',
      position: di * 2 + 1,
      name: `${day.jour} · Matin — ${day.titre}`,
      description: day.matin.map(m => m.t).join(' ; '),
    },
    {
      '@type': 'ListItem',
      position: di * 2 + 2,
      name: `${day.jour} · Après-midi — ${day.titre}`,
      description: day.apresmidi.map(m => m.t).join(' ; '),
    },
  ]),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-agents-ia#article',
  headline: 'Formation agents IA : concevoir, fiabiliser et gouverner vos agents',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-agents-ia#webpage' },
  /* Entités liées à Wikipédia (sameAs) : désambiguïsation pour les moteurs
     génératifs et le Knowledge Graph. URLs vérifiées (curl 200) le 2026-08-28. */
  about: [
    { '@type': 'Thing', name: 'Agent intelligent', sameAs: 'https://fr.wikipedia.org/wiki/Agent_intelligent' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Grand modèle de langage', sameAs: 'https://fr.wikipedia.org/wiki/Grand_mod%C3%A8le_de_langage' },
    { '@type': 'Thing', name: 'Automatisation', sameAs: 'https://fr.wikipedia.org/wiki/Automatisation' },
  ],
}

/* ── GEO : lexique structuré des termes de la page (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique des agents IA',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Agent IA', description: "Système qui poursuit un objectif confié par un humain : il décompose la tâche, utilise des applications (lire, chercher, produire, transmettre) et s'arrête aux points de validation prévus. Se distingue de l'assistant, qui agit pendant l'échange, et de l'automatisation, qui déroule un scénario figé." },
    { '@type': 'DefinedTerm', name: 'IA agentique', description: "Approche où un modèle d'IA enchaîne des étapes et mobilise des outils pour atteindre un objectif, au lieu de produire une seule réponse. « Agentique » qualifie l'approche ; « agent » désigne le système construit." },
    { '@type': 'DefinedTerm', name: 'Boucle agentique', description: "Cycle de travail d'un agent : comprendre l'objectif, décomposer, agir avec un outil, vérifier le résultat, recommencer ou rendre la main. C'est la notion centrale du jour 1 de la formation." },
    { '@type': 'DefinedTerm', name: 'Orchestrateur', description: "Outil qui relie les applications entre elles et y insère des étapes d'IA, comme n8n ou Make. Il porte les déclencheurs, les enchaînements et les points de contrôle humains d'un processus." },
    { '@type': 'DefinedTerm', name: 'Connecteur', description: "Accès donné à un agent vers une application (messagerie, agenda, stockage, tableur, CRM), en lecture ou en écriture. Le périmètre des connecteurs d'un agent se décide au cadrage et s'écrit." },
    { '@type': 'DefinedTerm', name: 'Garde-fou', description: "Règle de conception qui borne un agent : périmètre de données, cas de refus, format imposé, validation humaine obligatoire sur ce qui engage l'entreprise, journal des actions." },
    { '@type': 'DefinedTerm', name: "Agent d'espace de travail", description: "Agent partagé dans l'environnement d'équipe d'un outil (ChatGPT Business, Claude Team ou Enterprise, Copilot, Gemini) : instructions et connaissances communes, disponible pour toute l'équipe." },
    { '@type': 'DefinedTerm', name: 'Multi-agents', description: "Organisation où plusieurs agents spécialisés se répartissent un processus (l'un qualifie, l'autre produit, un troisième contrôle), reliés par un orchestrateur. Abordée au jour 2, après la fiabilisation du premier agent." },
  ],
}

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

/* Sources d'autorité de la page : émises en WebPage.citation (JSON-LD) et
   affichées dans le bloc « Sources et références officielles ». */
const PAGE_CITATIONS = [
  { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle (article 4, littératie)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "CNIL — Intelligence artificielle : recommandations et dossiers", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "Le plan de développement des compétences, ministère du Travail et de l'Emploi", url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences' },
]

export default function FormationAgentsIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation intelligence artificielle', slug: 'formation-intelligence-artificielle' },
    { name: 'Formation agents IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        courseData={COURSE_DATA}
        faqItems={FAQ}
        datePublished="2026-08-28"
        dateModified="2026-08-28"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[programmeJsonLd, articleJsonLd, termsJsonLd]}
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation agents IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Agents IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation agents IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>concevoir, fiabiliser et gouverner vos agents</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une formation agents IA apprend à vos équipes à construire des agents : des IA qui enchaînent les étapes d'une tâche, utilisent vos applications et rendent compte, sous le contrôle d'un humain. <strong style={{ color: '#fff', fontWeight: 700 }}>En 2 jours, chaque participant conçoit, teste et fiabilise un agent sur un processus réel de son poste, sans écrire de code</strong>, dans votre environnement : Claude, ChatGPT, Microsoft Copilot ou Gemini, avec n8n ou Make pour l'orchestration. Certifiée Qualiopi, finançable OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Les agents sont l'étape d'après pour les équipes qui pratiquent déjà un assistant IA : l'outil prend en charge un enchaînement complet, de la demande au livrable. Cette autonomie rend service à une condition : des instructions nettes, des tests sérieux et une supervision humaine. La formation installe les trois.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis sous 24 h
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le programme
            </a>
          </div>

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

      {/* ── SOMMAIRE ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '14px 24px' }}>
        <div style={{ ...wrap, display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', fontFamily: 'Nunito, sans-serif' }}>Sur cette page</span>
          {SOMMAIRE.map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 13.5, color: '#374151', fontWeight: 600, textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── AGENT / ASSISTANT / AUTOMATISATION (éditorial asymétrique) ── */}
      <section id="autonomie" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les notions</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Agent IA, assistant, automatisation : trois niveaux d'autonomie
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Un assistant répond à vos demandes, une automatisation déroule un scénario écrit à l'avance, un agent IA poursuit un objectif : il décompose la tâche, choisit ses étapes, utilise vos applications et s'arrête quand un humain doit valider. La formation apprend à choisir le bon niveau pour chaque tâche, puis à construire les agents qui le méritent.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                « IA agentique » désigne simplement cette approche par objectifs. Le terme impressionne, la logique se comprend en une matinée ; rendre un agent fiable demande davantage de travail, et c'est là que la formation passe le plus de temps. Si vous cherchez plutôt à faire construire vos agents, notre offre <Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link> décrit les déploiements sur mesure.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {NIVEAUX.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
                {/* Carte sombre : le multi-agents, abordé au jour 2 */}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Et le multi-agents ?</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Plusieurs agents spécialisés se passent le travail : l'un qualifie, l'autre rédige, un troisième contrôle. Utile sur les processus longs ; la formation l'aborde au jour 2, une fois le premier agent fiabilisé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE PROGRAMME (ancre sombre — pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Le programme des 2 jours : du premier agent au plan de déploiement
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : comprendre ce qu'est un agent, cadrer un cas d'usage sérieux et construire un premier agent sans code dans votre environnement. Jour 2 : le fiabiliser (instructions, jeux de test, garde-fous), l'orchestrer entre vos applications avec n8n ou Make, et organiser la supervision. Chaque participant travaille sur un processus réel de son poste.</strong>
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {PROGRAMME.map(day => (
              <div key={day.jour} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(22px, 3.5vw, 32px)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA' }}>{day.jour}</span>
                  <h3 style={{ ...h3Style, fontSize: 19, color: '#F8FAFC' }}>{day.titre}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#94A3B8', margin: '0 0 20px' }}>{day.resume}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(18px, 3vw, 32px)' }}>
                  {[['Matin', day.matin], ['Après-midi', day.apresmidi]].map(([label, items]) => (
                    <div key={label}>
                      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7DA9F0', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>{label}</div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                        {items.map(item => (
                          <li key={item.t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 99, background: '#60A5FA', flexShrink: 0, marginTop: 8 }} />
                            <div>
                              <div style={{ fontSize: 14.5, fontWeight: 700, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif', marginBottom: 3 }}>{item.t}</div>
                              <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 800 }}>
            Le programme s'ajuste au cadrage, qui est gratuit : niveau réel des participants, licences en place, processus visés. En 1 jour, on s'arrête au premier agent testé ; les 2 jours vont jusqu'à l'orchestration et au plan de déploiement.
          </p>
        </div>
      </section>

      {/* ── OBJECTIFS ── */}
      <section id="objectifs" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Les objectifs</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que vos équipes sauront faire
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À la fin de la formation, chaque participant sait cadrer un cas d'usage d'agent, construire l'agent sans code dans votre environnement, le tester sur un jeu de cas, le border par des garde-fous et organiser sa supervision. L'équipe repart avec ses agents en état de marche et un plan de déploiement.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {OBJECTIFS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOS OUTILS (tableau) ── */}
      <section id="outils" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Vos outils</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Sur quoi l'on construit : le bon environnement pour chaque agent
          </h2>

          <p style={answerStyle}>
            <strong>La formation se fait sur les outils que vos équipes ont déjà, dans leurs versions entreprise. Chaque environnement a sa manière de construire un agent ; le tableau résume ce qu'on y monte en atelier, et n8n ou Make prend le relais quand l'agent doit traverser plusieurs applications.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Environnement</th>
                  <th style={thStyle} scope="col">Ce qu'on construit en atelier</th>
                  <th style={thStyle} scope="col">Ce qui le distingue</th>
                </tr>
              </thead>
              <tbody>
                {OUTILS_TABLE.map((row, i) => (
                  <tr key={row.env}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === OUTILS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.env}</td>
                    <td style={{ ...tdStyle, borderBottom: i === OUTILS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.build}</td>
                    <td style={{ ...tdStyle, borderBottom: i === OUTILS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.fort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '24px 0 0', maxWidth: 880 }}>
            Mistral a sa place quand c'est votre environnement : Vibe (anciennement Le Chat) porte projets et bibliothèques, et l'orchestrateur prend le relais pour les enchaînements. Pour aller au fond de l'orchestrateur, la <Link to="/formation-n8n" style={aStyle}>formation n8n</Link> y consacre 2 jours ; le versant scénarios répétitifs est couvert par la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> ; et si vos développeurs veulent dépasser le sans-code, la <Link to="/formation-claude-code" style={aStyle}>formation Claude Code</Link> couvre les agents dans le code.
          </p>
        </div>
      </section>

      {/* ── CE QUI FAIT ÉCHOUER UN AGENT ── */}
      <section id="fiabilite" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ce qui fait échouer</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq raisons pour lesquelles un agent IA échoue en production
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un agent qui déçoit a presque toujours l'une de ces cinq causes : un périmètre fourre-tout, des instructions vagues, une validation à la démo, une autonomie sans relecture humaine, ou l'absence de supervision. Le jour 2 de la formation est construit sur leurs antidotes.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {ECHECS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.75, margin: '26px 0 0', maxWidth: 860 }}>
            Cette exigence vient du terrain : chez un distributeur IT B2B, onze assistants IA ont été conçus avec les équipes et déployés fonction par fonction. La démarche est détaillée dans nos <Link to="/etudes-de-cas-ia" style={{ color: c, fontWeight: 600 }}>études de cas</Link>.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section id="profils" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            À qui s'adresse la formation agents IA ?
          </h2>

          <p style={answerStyle}>
            <strong>Aux équipes qui pratiquent déjà un assistant IA et veulent passer aux agents, comme aux référents chargés d'outiller leur service. Aucun prérequis technique : tout se construit sans code. Les profils techniques y trouvent le cadre et la méthode, puis poursuivent côté code s'ils le souhaitent.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {PROFILS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE CADRE : DONNÉES, VALIDATION HUMAINE, CONFORMITÉ ── */}
      <section id="cadre" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Le cadre</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Des agents sous contrôle : données, validation humaine, conformité
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un agent a plus d'autonomie qu'un assistant ; le cadre se durcit d'autant. Les ateliers se font sur les offres entreprise, qui n'entraînent pas les modèles sur vos données ; chaque agent reçoit un périmètre de données écrit ; et tout ce qui engage l'entreprise passe par une validation humaine.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: ShieldCheck, title: 'Données et RGPD', desc: "Le cadrage fixe, agent par agent, ce qu'il peut lire et où il peut écrire : quelles données, quelles applications, quelles exclusions. Les recommandations de la CNIL sur l'IA servent de référence de travail, et les versions gratuites sont écartées pour toute donnée sensible." },
              { icon: Eye, title: 'La validation humaine', desc: "Envoyer un courrier, répondre à un client, modifier un dossier : ce qui engage passe par un humain, et l'agent prépare au lieu d'exécuter. Le niveau d'autonomie est une décision, revue à mesure que la confiance s'installe." },
              { icon: Scale, title: "L'AI Act, sans dramatiser", desc: "L'article 4 du règlement européen demande de soutenir la montée en compétence des personnes qui utilisent des systèmes d'IA : une formation documentée y répond. Et quand un agent interagit avec des personnes, la transparence se prévoit dès la conception. Le sujet complet est traité dans la formation AI Act.", link: { href: '/formation-ai-act', label: 'Voir la formation AI Act' } },
            ].map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: card.link ? '0 0 12px' : 0 }}>{card.desc}</p>
                  {card.link && (
                    <Link to={card.link.href} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                      {card.link.label}
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT par jour de formation, pour le groupe
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le tarif de la formation agents IA suit la grille unique de Masteria : 1 980 € HT par jour de formation en intra, pour l'ensemble du groupe (jusqu'à 12 personnes par session), soit 3 960 € HT les 2 jours. Le format se cale au cadrage : 2 jours complets, 1 jour centré sur le premier agent, ou un accompagnement individuel pour un référent. Masteria est certifiée Qualiopi : la formation est finançable par votre OPCO dans le cadre du plan de développement des compétences ; nous préparons le dossier avec vous, la décision de prise en charge restant à votre opérateur. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes, et les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  "1 980 € HT par jour, pour le groupe (jusqu'à 12 personnes)",
                  '2 jours recommandés : orchestration et plan de déploiement compris',
                  'Qualiopi : finançable OPCO, dossier préparé ensemble',
                  'Devis sous 24 h après un cadrage gratuit',
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

      {/* ── E-E-A-T : l'expérience derrière la page ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui vous forme</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Des formateurs qui déploient des agents en entreprise
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria est un cabinet indépendant des éditeurs, spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les agents montrés en formation ressemblent à ceux que nous construisons en mission : chez un distributeur IT B2B, onze assistants IA conçus avec les équipes et déployés fonction par fonction, une démarche détaillée dans nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link>. Les sessions sont animées par Mathias et par un réseau de formateurs indépendants, expérimentés et pédagogues.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['Depuis 2022', 'spécialisé uniquement IA'],
                ['+1 500', 'professionnels formés'],
                ['Qualiopi', 'actions de formation certifiées'],
                ['FR · CH · BE', 'intra sur site ou à distance'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                  <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Formation agents IA : les questions fréquentes
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
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Les agents s'articulent avec l'automatisation, les fondamentaux du prompt et, quand il faut du sur-mesure, nos missions de construction.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Faire construire', desc: "Le guide des agents côté déploiement : cas d'usage par fonction, outils, gouvernance, et nos missions sur mesure." },
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Automatisation', desc: "Automatiser les tâches répétitives avec Make, Zapier ou n8n : le versant scénarios, complémentaire des agents." },
              { label: 'Formation vibe coding', href: '/formation-vibe-coding', tag: 'Construire', desc: "Construire un outil ou un prototype en pilotant l'IA, sans être développeur : l'étape d'après côté création." },
              { label: 'Formation Claude Code', href: '/formation-claude-code', tag: 'Développeurs', desc: "Les agents dans le code, pour les équipes de développement : production, revue, industrialisation." },
              { label: 'Formation prompt engineering', href: '/formation-prompt-engineering', tag: 'Fondamentaux', desc: "Formuler des demandes précises : le socle qui rend les instructions d'agents nettes et testables." },
              { label: 'Quel est le meilleur agent IA ?', href: '/meilleur-agent-ia', tag: 'Comparatif', desc: "Le panorama des agents du marché, pour situer ce que vous construirez en formation." },
              { label: 'Formation IA en entreprise', href: '/formation-ia-entreprise', tag: 'Déploiement', desc: "Former vos équipes en intra, du sprint de 3 h au parcours par métier : le cadre général de nos interventions." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, plan de développement des compétences : les dispositifs qui financent la formation agents IA." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
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

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      <FounderNote />

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation agents IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Passez de l'assistant à l'agent, sans lâcher le contrôle
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos processus, vos outils et le niveau de vos équipes. Nous revenons sous 24 heures avec un programme cadré, un calendrier et le devis, dossier OPCO compris. Le premier agent de vos équipes peut être en test dans le mois.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis sous 24 h
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
