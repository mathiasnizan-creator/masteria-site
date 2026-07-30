import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Brain, Briefcase, Cloud, Cog, Compass, Eye, Headphones,
  LayoutGrid, Lock, Megaphone, MessageSquare, Plug, RefreshCw, Rocket, Scale,
  ScrollText, Server, ShieldCheck, Sparkles, Target, TrendingUp, UserCheck,
  Users, Workflow, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « Agents IA en entreprise » : guide complet + 20 cas d'usage.
 * Cible les requêtes « agent ia entreprise », « agents ia pour entreprise »,
 * « ia agentique entreprise », « cas d'usage concrets des agents IA pour
 * entreprises ». Pensée pour le ranking ET la citation par les LLM (GEO) :
 * réponse directe en gras sous chaque H2, encadré définition citable,
 * tableau comparatif assistant / agent / workflow, FAQ JSON-LD.
 * Design premium cabinet : icônes lucide (zéro emoji), kickers, cartes
 * blanches à filets #E5E7EB, accent bleu unique #2563EB.
 */

const SLUG = 'agents-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Agents IA en entreprise : guide & 20 cas d'usage | Masteria"
const META_DESC = "Agents IA en entreprise : fonctionnement, 20 cas d'usage par fonction, outils 2026 et gouvernance. Le guide pour déployer, plus l'option sur mesure."
const H1 = "Agents IA en entreprise : le guide complet et 20 cas d'usage concrets"
const KEYWORDS = "agents ia, agent ia, agents ia en entreprise, agent ia entreprise, agent intelligence artificielle, déployer un agent ia, agents autonomes"

const TOC = [
  { href: '#definition', label: "Qu'est-ce qu'un agent IA ?" },
  { href: '#fonctionnement', label: 'Comment fonctionne un agent IA ?' },
  { href: '#cas-usage', label: "20 cas d'usage par fonction" },
  { href: '#sur-mesure', label: 'Faire développer vos agents sur mesure' },
  { href: '#outils', label: 'Quels outils en 2026 ?' },
  { href: '#risques', label: 'Risques et gouvernance' },
  { href: '#commencer', label: 'Par où commencer ?' },
  { href: '#faq', label: 'Questions fréquentes' },
]

const COMPARISON = [
  {
    icon: MessageSquare,
    title: 'Assistant IA',
    desc: "ChatGPT, Claude ou Copilot utilisés en conversation. L'assistant répond à vos questions et produit du texte, puis vous reprenez la main : copier le résultat, l'envoyer, mettre à jour le logiciel concerné. L'humain reste l'opérateur de chaque étape.",
  },
  {
    icon: Workflow,
    title: 'Workflow automatisé',
    desc: "Un scénario Make, n8n ou Power Automate enchaîne des étapes définies à l'avance : un déclencheur, des actions, toujours dans le même ordre. Fiable et prévisible, tant que le processus ne dévie jamais du scénario prévu.",
  },
  {
    icon: Bot,
    title: 'Agent IA',
    desc: "L'agent reçoit un objectif et choisit lui-même la séquence d'actions : consulter une base, appeler une API, rédiger, vérifier, recommencer si besoin. Il absorbe les cas imprévus qu'un workflow rigide rejette, sous le contrôle d'un humain.",
  },
]

/* Snippet magnet : tableau comparatif Assistant IA vs Agent IA vs Workflow automatisé */
const TABLE_COLS = ['Assistant IA', 'Agent IA', 'Workflow automatisé']
const TABLE_ROWS = [
  {
    label: 'Déclenchement',
    cells: [
      "Une question posée dans la conversation",
      "Un objectif confié, un événement ou une planification",
      "Un déclencheur fixe, défini à l'avance",
    ],
  },
  {
    label: 'Autonomie',
    cells: [
      "Aucune : l'humain pilote chaque étape",
      "Élevée : l'agent choisit la séquence d'actions",
      "Nulle : les étapes s'enchaînent dans un ordre fixe",
    ],
  },
  {
    label: 'Accès aux outils',
    cells: [
      "Limité à la conversation et aux fichiers fournis",
      "Connecté aux logiciels métiers (CRM, ERP, API)",
      "Connecté, sur des actions prédéfinies uniquement",
    ],
  },
  {
    label: 'Supervision',
    cells: [
      "Permanente : l'humain reprend chaque résultat",
      "Validation humaine sur les actions sensibles",
      "Contrôle a posteriori des exécutions",
    ],
  },
  {
    label: 'Exemple',
    cells: [
      "Rédiger un brouillon d'email dans ChatGPT ou Claude",
      "Qualifier un lead et créer la fiche dans le CRM",
      "Archiver chaque facture reçue dans le bon dossier",
    ],
  },
]

const LOOP_STEPS = [
  {
    num: '01',
    icon: Eye,
    title: 'Perception',
    desc: "L'agent collecte le contexte utile : votre demande, le contenu d'un email, l'historique CRM, un document, l'état d'un système. La qualité de cette matière première conditionne tout le reste.",
  },
  {
    num: '02',
    icon: Brain,
    title: 'Décision',
    desc: "Le modèle de langage raisonne sur l'objectif et choisit la prochaine action : chercher une information, appeler un outil, rédiger un contenu, ou demander une clarification à un humain.",
  },
  {
    num: '03',
    icon: Zap,
    title: 'Action',
    desc: "L'agent exécute l'action décidée via ses outils : requête dans une base, écriture dans le CRM, préparation d'un envoi, modification d'un fichier. Sans outils connectés, un agent reste un assistant.",
  },
  {
    num: '04',
    icon: RefreshCw,
    title: 'Vérification',
    desc: "L'agent contrôle le résultat obtenu, corrige si nécessaire et décide de la suite : poursuivre, recommencer ou rendre la main. La boucle se répète jusqu'à l'objectif ou jusqu'au point de contrôle humain.",
  },
]

const USE_CASE_GROUPS = [
  {
    id: 'commercial',
    icon: Briefcase,
    label: 'Fonction commerciale',
    cases: [
      {
        title: '1. Qualification des leads entrants',
        desc: "L'agent lit chaque demande entrante (formulaire, email), recherche l'entreprise, applique votre grille de qualification et crée une fiche complète dans le CRM. Le commercial reçoit un lead documenté et scoré, avec un brouillon de première réponse à valider.",
      },
      {
        title: '2. Préparation des rendez-vous commerciaux',
        desc: "Avant chaque rendez-vous, l'agent compile l'historique CRM, les actualités récentes du prospect et les échanges passés, puis produit une fiche de préparation d'une page. Le commercial arrive informé sans avoir passé sa soirée à chercher.",
      },
      {
        title: '3. Relance des devis en attente',
        desc: "L'agent surveille les propositions restées sans réponse, prépare une relance personnalisée selon le contexte du dossier et la soumet au commercial avant envoi. Le pipeline reste à jour sans tableur parallèle.",
      },
    ],
  },
  {
    id: 'marketing',
    icon: Megaphone,
    label: 'Marketing et communication',
    cases: [
      {
        title: '4. Veille concurrentielle continue',
        desc: "L'agent surveille les sites, pages tarifs, communiqués et publications des concurrents que vous lui désignez, puis livre chaque semaine une synthèse sourcée des changements détectés. L'équipe marketing décide de ce qui mérite une réaction.",
      },
      {
        title: '5. Déclinaison de contenus multicanale',
        desc: "À partir d'un contenu pilier validé (article, webinaire, étude), l'agent produit les déclinaisons : posts LinkedIn, newsletter, script vidéo, dans le respect de votre charte éditoriale. Tout passe en relecture avant publication.",
      },
      {
        title: '6. Reporting des campagnes',
        desc: "L'agent collecte les données de vos plateformes publicitaires et de votre analytics, repère les écarts notables et rédige un reporting commenté. Le responsable marketing consacre son temps aux arbitrages plutôt qu'à la collecte.",
      },
    ],
  },
  {
    id: 'rh',
    icon: Users,
    label: 'Ressources humaines',
    cases: [
      {
        title: '7. Présélection des candidatures',
        desc: "L'agent analyse les candidatures au regard de la grille de critères du poste et prépare une synthèse par candidat. Le recruteur garde la décision : le tri automatisé en recrutement relève des usages à haut risque de l'AI Act et exige une supervision humaine documentée.",
      },
      {
        title: "8. Accompagnement de l'onboarding",
        desc: "L'agent répond aux questions pratiques des nouveaux arrivants à partir de la documentation interne, déclenche les demandes d'accès et de matériel, et suit la check-list d'intégration. Les RH se concentrent sur les sujets humains, l'agent gère la logistique.",
      },
      {
        title: '9. Premier niveau de réponse RH',
        desc: "Congés, mutuelle, notes de frais, attestations : l'agent répond aux questions récurrentes en s'appuyant sur vos accords et politiques internes, et transfère à l'équipe RH dès qu'un cas sort du cadre prévu.",
      },
    ],
  },
  {
    id: 'finance',
    icon: TrendingUp,
    label: 'Finance et administratif',
    cases: [
      {
        title: '10. Traitement des factures fournisseurs',
        desc: "L'agent extrait les données des factures reçues, les rapproche des bons de commande, prépare l'imputation comptable et signale toute anomalie (montant inhabituel, doublon, fournisseur inconnu) à un humain avant validation.",
      },
      {
        title: '11. Relance des impayés',
        desc: "L'agent identifie les factures échues, adapte le ton de la relance à l'historique du client et prépare les courriers selon votre procédure d'escalade. Les envois et le passage au contentieux restent validés par l'équipe.",
      },
      {
        title: '12. Préparation du reporting de gestion',
        desc: "L'agent rassemble les chiffres dans vos outils (comptabilité, banque, facturation), construit les tableaux convenus et rédige un premier commentaire de gestion. Le DAF contrôle, corrige et garde la main sur l'analyse.",
      },
    ],
  },
  {
    id: 'service-client',
    icon: Headphones,
    label: 'Service client',
    cases: [
      {
        title: '13. Résolution des demandes de niveau 1',
        desc: "L'agent répond aux questions courantes à partir de la base de connaissances, consulte le statut réel d'une commande dans vos systèmes et exécute des gestes simples : renvoyer une facture, corriger une adresse. Il transfère à un conseiller dès que le cas l'exige.",
      },
      {
        title: '14. Tri et routage des tickets',
        desc: "À l'arrivée de chaque demande, l'agent identifie le sujet, l'urgence et le ton, enrichit le ticket avec le contexte client et le route vers la bonne équipe accompagné d'un résumé. Les conseillers démarrent chaque dossier avec l'essentiel sous les yeux.",
      },
      {
        title: '15. Synthèse de la voix du client',
        desc: "L'agent agrège tickets, avis et verbatims d'enquêtes, repère les motifs récurrents et produit un rapport d'irritants priorisé. Les équipes produit et qualité travaillent sur des signaux consolidés plutôt que sur des cas isolés.",
      },
    ],
  },
  {
    id: 'it-dev',
    icon: Server,
    label: 'IT et développement',
    cases: [
      {
        title: '16. Agents de code pour les équipes de développement',
        desc: "À partir d'un ticket, un agent de code comme Claude Code explore la base de code, propose une implémentation, écrit les tests et prépare une pull request qu'un développeur relit avant fusion. Le développeur consacre plus de temps à la conception et à la revue.",
        link: { to: '/formation-claude-ia', label: 'Découvrir la formation Claude' },
      },
      {
        title: '17. Support informatique interne',
        desc: "Réinitialisations de mot de passe, demandes d'accès, diagnostics standards : l'agent traite les sollicitations de niveau 1 selon vos procédures et escalade aux techniciens avec un diagnostic déjà documenté.",
      },
      {
        title: '18. Mise à jour de la documentation technique',
        desc: "L'agent compare régulièrement la documentation aux systèmes réels (code, configurations, procédures), repère les écarts et propose les corrections correspondantes. L'équipe IT valide les mises à jour au fil de l'eau.",
      },
    ],
  },
  {
    id: 'direction',
    icon: Target,
    label: 'Direction et fonctions transverses',
    cases: [
      {
        title: '19. Veille stratégique pour le comité de direction',
        desc: "L'agent surveille votre marché, la réglementation et les signaux concurrents sur un périmètre défini, puis prépare une note de synthèse sourcée à fréquence fixe. La direction lit dix minutes au lieu d'ouvrir cinquante onglets.",
      },
      {
        title: '20. Préparation des dossiers de COMEX',
        desc: "L'agent collecte les contributions et les chiffres des différents services, met en forme le dossier selon votre trame et signale les données manquantes avant l'échéance. Le dirigeant arbitre sur un dossier complet.",
      },
    ],
  },
]

/* ItemList JSON-LD : les 20 cas d'usage, pour le format listicle (rich results + citation GEO). */
const useCaseItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "20 cas d'usage concrets des agents IA en entreprise",
  description: "Vingt cas d'usage des agents IA en entreprise, classés par fonction : commercial, marketing, RH, finance, service client, IT et développement, direction.",
  numberOfItems: 20,
  itemListElement: USE_CASE_GROUPS.flatMap(g => g.cases).map((uc, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: uc.title.replace(/^\d+\.\s*/, ''),
  })),
}

/* Données de fraîcheur + schema TechArticle (E-E-A-T, GEO) */
const PUBLISHED = '2026-06-12'
const UPDATED = '2026-07-30'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  '@id': `https://www.master-ia.fr/${SLUG}#article`,
  headline: H1,
  description: META_DESC,
  inLanguage: 'fr-FR',
  datePublished: PUBLISHED,
  dateModified: UPDATED,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  about: [
    "Agents IA",
    "IA agentique en entreprise",
    "Automatisation par l'intelligence artificielle",
    "Model Context Protocol (MCP)",
  ],
  keywords: "agent ia entreprise, agents ia d'entreprise, agent ia pour entreprise, ia agentique entreprise, cas d'usage agents ia, gouvernance agents ia, mcp",
  isAccessibleForFree: true,
}

const TOOLS = [
  {
    icon: Sparkles,
    name: 'Claude et le standard MCP (Anthropic)',
    desc: "Les modèles Claude sont reconnus pour le travail documentaire et les agents de code (Claude Code). Le Model Context Protocol, protocole ouvert, connecte les agents à vos bases, API et fichiers avec des connecteurs réutilisables. Une option solide quand le besoin mêle analyse de documents, code et connexion au système d'information.",
  },
  {
    icon: MessageSquare,
    name: 'ChatGPT et les agents OpenAI',
    desc: "OpenAI propose des GPT personnalisés et des capacités agentiques adossées à l'écosystème ChatGPT, déjà familier de la plupart des équipes métiers. Cette familiarité accélère l'adoption ; elle impose en contrepartie un cadrage précis des données qui transitent par l'outil.",
  },
  {
    icon: LayoutGrid,
    name: 'Microsoft Copilot Studio',
    desc: "L'outil de création d'agents de l'écosystème Microsoft permet de construire des agents connectés à Microsoft 365, Teams et Dynamics. Le choix naturel des organisations déjà engagées sur le socle Microsoft, avec une gouvernance centralisable par la DSI.",
  },
  {
    icon: Cloud,
    name: 'Google Gemini et Vertex AI',
    desc: "Google propose les modèles Gemini et la plateforme Vertex AI pour construire et déployer des agents dans l'environnement Google Cloud et Workspace. Pertinent quand vos données et vos outils collaboratifs vivent déjà chez Google.",
  },
  {
    icon: Workflow,
    name: "n8n, Make et les plateformes d'orchestration",
    desc: "Ces plateformes relient les modèles d'IA à vos logiciels métiers et encadrent les agents dans des workflows contrôlés : déclencheurs, étapes, points de validation humaine. Elles conviennent bien aux premiers déploiements, où la prévisibilité compte autant que l'intelligence.",
  },
]

const RISKS = [
  {
    icon: Lock,
    title: "Périmètre d'action limité",
    desc: "Un agent reçoit uniquement les droits nécessaires à sa mission : lecture seule là où l'écriture est inutile, accès à un sous-ensemble de données, plafonds sur les actions (montants, volumes, destinataires). Le principe du moindre privilège, standard en sécurité informatique, s'applique pleinement aux agents.",
  },
  {
    icon: UserCheck,
    title: 'Validation humaine sur les actions sensibles',
    desc: "Tout envoi externe, paiement, engagement contractuel, suppression de données ou décision affectant une personne passe par une validation humaine explicite. L'agent prépare, l'humain décide.",
  },
  {
    icon: ShieldCheck,
    title: 'Protection des données sensibles',
    desc: "Les données personnelles et confidentielles appellent les mêmes exigences qu'avec tout sous-traitant logiciel : cadre contractuel sur l'usage des données par l'éditeur, hébergement maîtrisé, conformité RGPD et cloisonnement des accès entre agents.",
  },
  {
    icon: ScrollText,
    title: 'Traçabilité complète',
    desc: "Chaque action d'un agent est journalisée : ce qu'il a consulté, ce qu'il a décidé, ce qu'il a exécuté, qui a validé. Ce journal conditionne l'audit, le débogage et la confiance des équipes.",
  },
  {
    icon: Scale,
    title: "Conformité avec l'AI Act",
    desc: "Le règlement européen sur l'IA, entré en application par étapes depuis 2025, impose des obligations graduées selon le risque : transparence pour les systèmes qui interagissent avec des humains, exigences renforcées pour les usages à haut risque comme le recrutement. Cartographier vos agents au regard de ces catégories devient un prérequis.",
    link: { to: '/conseil-strategie-ia', label: "Cadrer la gouvernance de vos agents IA" },
  },
]

const START_STEPS = [
  {
    num: 1,
    title: 'Choisir un processus pilote',
    desc: "Cherchez un processus fréquent, bien documenté, aux règles claires et au risque faible en cas d'erreur : tri de tickets, préparation de reporting, qualification de leads. Évitez de commencer par un processus critique ou mal défini.",
  },
  {
    num: 2,
    title: 'Déployer un agent supervisé',
    desc: "Configurez l'agent avec un périmètre d'action minimal et une validation humaine sur chaque action sortante. Les premières semaines servent à construire la confiance et à affiner les consignes sur des cas réels.",
  },
  {
    num: 3,
    title: 'Mesurer',
    desc: "Suivez trois familles d'indicateurs : le temps rendu à l'équipe, le taux d'erreurs ou de reprises, et le taux d'escalade vers un humain. Ces mesures objectivent la décision d'étendre, d'ajuster ou d'arrêter.",
  },
  {
    num: 4,
    title: 'Étendre progressivement',
    desc: "Élargissez le périmètre du premier agent, puis répliquez la démarche sur un deuxième processus. L'autonomie accordée à l'agent augmente à mesure que la fiabilité mesurée le justifie, jamais l'inverse.",
  },
]

const BUILD_STEPS = [
  {
    icon: Compass,
    title: 'Cadrage',
    desc: "Nous choisissons le processus pilote, définissons l'objectif de l'agent, son périmètre d'action et les points de validation humaine. L'architecture est posée avant la première ligne de configuration.",
  },
  {
    icon: Cog,
    title: 'Build de l\'agent',
    desc: "Nos équipes construisent l'agent : moteur de raisonnement, consignes, outils, garde-fous. Du sur mesure aligné sur vos règles métier, pas un assistant générique.",
  },
  {
    icon: Plug,
    title: 'Intégration MCP et API',
    desc: "Nous connectons l'agent à vos logiciels (CRM, ERP, helpdesk, fichiers) via le standard MCP et vos API, avec droits limités au strict nécessaire et traçabilité complète.",
  },
  {
    icon: Rocket,
    title: 'Déploiement supervisé',
    desc: "Mise en production progressive en mode supervisé, mesure du taux d'erreurs et d'escalade, documentation et passation. L'autonomie de l'agent s'élargit à mesure de sa fiabilité démontrée.",
  },
]

const NEXT_STEPS = [
  {
    to: '/agence-developpement-ia',
    tag: 'Sur mesure',
    title: 'Agence de développement IA',
    desc: "Nous concevons, développons et intégrons vos agents et solutions IA de bout en bout, jusqu'à la production.",
  },
  {
    to: '/outils-ia-sur-mesure',
    tag: 'Sur mesure',
    title: 'Outils IA sur mesure',
    desc: "Des applications et outils internes pilotés par l'IA, conçus pour vos cas d'usage propres.",
  },
  {
    to: '/solutions-ia',
    tag: 'Solutions IA',
    title: "Toutes nos solutions IA",
    desc: "Du diagnostic au déploiement : la vue d'ensemble de nos accompagnements IA pour entreprises.",
  },
]

const FAQ = [
  {
    q: 'Quelle différence entre un agent IA et un chatbot ?',
    aStrong: "Un chatbot répond à des questions dans une conversation ; un agent IA exécute des actions dans vos logiciels pour accomplir une tâche complète.",
    aRest: "Le chatbot reste dans le canal conversationnel : il informe, oriente, rédige. L'agent se connecte à vos outils (CRM, ERP, helpdesk, fichiers) et agit : il crée une fiche, met à jour un dossier, prépare un envoi. Beaucoup de services client combinent les deux, avec un chatbot en façade et un agent derrière pour exécuter les gestes.",
  },
  {
    q: 'Un agent IA peut-il travailler sans supervision ?',
    aStrong: "Techniquement oui, sur des tâches étroites et bien bornées ; en pratique, la plupart des déploiements en entreprise conservent une validation humaine sur les actions importantes.",
    aRest: "L'autonomie complète suppose une fiabilité démontrée, des actions réversibles et un risque faible. La démarche raisonnable consiste à démarrer en mode supervisé, à mesurer le taux d'erreurs, puis à élargir l'autonomie par paliers, sur les seules actions où l'agent a fait ses preuves.",
  },
  {
    q: "Qu'est-ce que l'IA agentique ?",
    aStrong: "L'IA agentique désigne la famille de systèmes d'IA capables de poursuivre un objectif de façon autonome : planifier des étapes, utiliser des outils, évaluer leurs résultats et ajuster leur démarche.",
    aRest: "Le terme s'est imposé pour distinguer ces systèmes des assistants conversationnels. Une IA agentique d'entreprise combine un modèle de langage, des connecteurs vers les logiciels métiers (souvent via le standard MCP) et des règles de supervision. Les définitions associées figurent dans notre glossaire de l'IA.",
  },
  {
    q: "Combien coûte le déploiement d'un agent IA ?",
    aStrong: "Le budget se répartit entre trois postes : la consommation ou les licences des modèles d'IA, l'intégration aux logiciels existants et l'accompagnement humain (cadrage, formation, supervision).",
    aRest: "Un pilote sur un processus simple, avec des outils du marché, reste accessible à une PME. Un déploiement multi-services avec connecteurs sur mesure constitue un vrai projet informatique. Le coût d'intégration et de conduite du changement dépasse souvent celui des licences, ce qui plaide pour démarrer petit et mesurer avant d'étendre.",
  },
  {
    q: "Quels sont les risques d'un agent IA en entreprise ?",
    aStrong: "Les principaux risques sont les erreurs d'exécution, les actions hors périmètre, la fuite de données sensibles et la non-conformité réglementaire.",
    aRest: "Tous se maîtrisent par la gouvernance : droits d'accès limités au strict nécessaire, validation humaine sur les actions sensibles, journalisation complète des actions et cartographie des usages au regard de l'AI Act. Un agent sans garde-fous constitue un risque opérationnel ; un agent gouverné reste un outil de productivité contrôlé.",
  },
  {
    q: 'Quelles compétences faut-il en interne pour déployer des agents IA ?',
    aStrong: "Trois profils suffisent pour démarrer : un expert du processus métier concerné, une personne formée au paramétrage et au pilotage des agents, et un référent qui supervise les résultats et la conformité.",
    aRest: "Aucun de ces rôles n'exige un data scientist. La connaissance fine du processus pèse plus lourd que la technique : un agent mal cadré sur un processus flou échouera quel que soit l'outil. Beaucoup d'entreprises préfèrent confier le développement et l'intégration à une équipe spécialisée, puis garder en interne le pilotage métier et la supervision. Masteria développe l'agent sur mesure et forme vos référents en complément.",
  },
  {
    q: "Comment créer un agent IA pour son entreprise ?",
    aStrong: "Créer un agent IA repose sur quatre briques : un objectif clair et borné, un modèle de langage comme moteur de raisonnement, des connecteurs vers vos logiciels (souvent via le standard MCP) et des règles de supervision.",
    aRest: "On part d'un processus pilote bien documenté, on configure l'agent avec un périmètre d'action minimal et une validation humaine, puis on élargit à mesure de la fiabilité mesurée. Beaucoup d'entreprises confient la création et l'intégration à une équipe spécialisée et gardent en interne le pilotage métier. Masteria développe l'agent sur mesure et forme vos référents en complément.",
  },
  {
    q: "Les agents IA font-ils vraiment gagner du temps ?",
    aStrong: "Oui, sur des tâches fréquentes et répétitives : l'agent prend en charge la collecte, la préparation et la première exécution, pendant que l'humain valide et arbitre.",
    aRest: "Le gain dépend du volume traité, de la qualité des données et du niveau de supervision retenu. Il se mesure avant et après sur le temps passé, le taux de reprises et le volume traité à effectif constant. Nous n'avançons aucun pourcentage générique : un pilote en conditions réelles sur quelques semaines objective le gain propre à votre contexte.",
  },
  {
    q: "Un agent IA peut-il exploiter mes données commerciales ?",
    aStrong: "Oui : connecté à votre CRM et à vos outils commerciaux, un agent peut lire, enrichir et mettre à jour vos données pour qualifier des leads, préparer des rendez-vous ou relancer des devis.",
    aRest: "Cet accès se borne au strict nécessaire : droits limités, cloisonnement entre agents, journalisation de chaque action et cadre contractuel sur l'usage des données par l'éditeur du modèle. Les données commerciales sensibles appellent les mêmes exigences RGPD qu'avec tout sous-traitant logiciel, à cadrer avant le premier test.",
  },
]

/* ── Briques UI ── */

function Kicker({ children }) {
  return (
    <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }}>
      {children}
    </div>
  )
}

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
    </div>
  )
}

function FAQItem({ q, aStrong, aRest, color }) {
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
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>
          <strong style={{ color: '#0A0A0A' }}>{aStrong}</strong> {aRest}
        </p>
      </div>
    </div>
  )
}

/* ── Styles partagés ── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 16, lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }
const pStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20, maxWidth: 780 }
const answerStyle = { fontSize: 16.5, color: '#374151', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 780 }
const linkStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }

export default function AgentsIAEntreprisePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (fonctionnement / risques / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agents IA en entreprise', slug: SLUG },
  ]

  const faqItems = FAQ.map(({ q, aStrong, aRest }) => ({ q, a: `${aStrong} ${aRest}` }))

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
        datePublished={PUBLISHED}
        dateModified={UPDATED}
        extraJsonLd={[useCaseItemList, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Agents IA en entreprise</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide agents IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Agents IA en entreprise :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le guide complet et 20 cas d'usage concrets</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Les agents IA exécutent des tâches complètes dans vos logiciels : <strong style={{ color: '#fff', fontWeight: 700 }}>qualifier un lead, traiter une facture, résoudre un ticket, corriger du code</strong>.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Ce guide explique ce qu'est un agent IA, comment il fonctionne, puis détaille 20 cas d'usage concrets des agents IA pour entreprises, fonction par fonction, avec les outils disponibles en 2026 et les règles de gouvernance à poser avant de déployer.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Faire développer vos agents sur mesure
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#cas-usage" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les 20 cas d'usage
            </a>
          </div>
        </div>
      </section>

      {/* ── Sommaire ── */}
      <section style={{ padding: 'clamp(36px, 5vw, 52px) 24px', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ ...cardStyle, padding: '22px 26px' }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>Sommaire</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 22px' }}>
              {TOC.map(item => (
                <a key={item.href} href={item.href} style={{ fontSize: 14, color: c, fontWeight: 600, textDecoration: 'none' }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. DÉFINITION (ancre sombre — pivot technique/preuve) ── */}
      <section id="definition" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Définition</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Qu'est-ce qu'un agent IA ?</h2>

          {/* GEO : réponse directe citable, encadré distinctif */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '26px 30px', margin: '24px 0 32px', maxWidth: 860 }}>
            <p style={{ fontSize: 17, lineHeight: 1.75, margin: 0, color: '#E2E8F0' }}>
              <strong style={{ color: '#fff' }}>Un agent IA est un système qui perçoit un contexte, décide d'une séquence d'actions et les exécute via des outils (logiciels métiers, bases de données, API) pour atteindre un objectif fixé par un humain. Là où un assistant conversationnel répond à une question, un agent accomplit une tâche complète, en plusieurs étapes, avec un minimum d'allers-retours.</strong>
            </p>
          </div>

          <p style={{ ...pStyle, color: '#B4C0D3' }}>
            Concrètement, un agent IA d'entreprise reçoit une mission (« qualifie ce lead et crée la fiche dans le CRM »), consulte les informations disponibles, choisit les actions à mener, les exécute dans vos logiciels et vérifie le résultat. Le grand modèle de langage (LLM) lui sert de moteur de raisonnement ; les connecteurs vers vos outils lui servent de bras. On parle aussi d'IA agentique pour désigner cette approche, par opposition aux usages purement conversationnels.
          </p>
          <p style={{ ...pStyle, color: '#B4C0D3' }}>
            Dans ce guide, « agent IA pour entreprise » désigne un agent connecté aux logiciels de l'organisation et soumis à ses règles de sécurité. La distinction avec deux notions voisines mérite d'être posée d'emblée, car elle conditionne le choix des outils et le niveau de risque.
          </p>

          <h3 style={{ ...h3Style, color: '#F8FAFC', fontSize: 22, margin: '40px 0 24px' }}>Assistant, workflow automatisé, agent : trois logiques différentes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 24 }}>
            {COMPARISON.map(item => {
              const Icon = item.icon
              return (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 28 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                  </div>
                  <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#F8FAFC', margin: '18px 0 8px', letterSpacing: '-0.01em' }}>{item.title}</h4>
                  <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Snippet magnet : tableau comparatif */}
          <h3 style={{ ...h3Style, color: '#F8FAFC', fontSize: 22, margin: '48px 0 12px' }}>Assistant IA vs Agent IA vs Workflow automatisé : le comparatif</h3>
          <p style={{ ...pStyle, color: '#B4C0D3', marginBottom: 24 }}>
            Le tableau résume les différences qui comptent au moment de choisir une approche : qui déclenche, qui décide, qui contrôle.
          </p>
          <div style={{ overflowX: 'auto', border: '1px solid #1E293B', borderRadius: 16, marginBottom: 32 }}>
            <table aria-label="Comparatif entre un assistant IA, un agent IA et un workflow automatisé" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', padding: '14px 18px', textAlign: 'left', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#E2E8F0', borderBottom: '1px solid #1E293B' }}>Critère</th>
                  {TABLE_COLS.map(col => {
                    const highlight = col === 'Agent IA'
                    return (
                      <th key={col} scope="col" style={{ background: highlight ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.05)', padding: '14px 18px', textAlign: 'left', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: highlight ? '#60A5FA' : '#E2E8F0', borderBottom: '1px solid #1E293B' }}>{col}</th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => {
                  const border = i < TABLE_ROWS.length - 1 ? '1px solid #1E293B' : 'none'
                  return (
                    <tr key={row.label}>
                      <th scope="row" style={{ padding: '14px 18px', textAlign: 'left', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#F8FAFC', borderBottom: border, verticalAlign: 'top', whiteSpace: 'nowrap' }}>{row.label}</th>
                      {row.cells.map((cell, j) => {
                        const highlight = TABLE_COLS[j] === 'Agent IA'
                        return (
                          <td key={j} style={{ padding: '14px 18px', fontSize: 14, lineHeight: 1.6, verticalAlign: 'top', borderBottom: border, color: highlight ? '#fff' : '#B4C0D3', fontWeight: highlight ? 500 : 400, background: highlight ? 'rgba(37,99,235,0.10)' : 'transparent' }}>{cell}</td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ ...pStyle, color: '#B4C0D3', marginBottom: 0 }}>
            Dans la pratique, les trois approches se combinent. Beaucoup de déploiements 2026 insèrent un agent dans un workflow : l'orchestration encadre le processus, l'agent gère les étapes qui demandent du jugement. Notre <Link to="/automatisation-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>guide de l'automatisation IA</Link> détaille cette combinaison, et les définitions complètes figurent dans le glossaire, aux entrées <Link to="/glossaire-ia#agent-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>agent IA</Link> et <Link to="/glossaire-ia#workflow-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>workflow IA</Link>.
          </p>
        </div>
      </section>

      {/* ── 2. FONCTIONNEMENT (éditorial asymétrique) ── */}
      <section id="fonctionnement" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Fonctionnement</Kicker>
              <h2 style={h2Style}>Comment fonctionne un agent IA ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong style={{ color: '#0A0A0A' }}>Un agent IA fonctionne en boucle : il perçoit un contexte, décide d'une action grâce à un modèle de langage, l'exécute via des outils connectés, puis vérifie le résultat avant de poursuivre.</strong> La boucle se répète jusqu'à l'objectif atteint ou jusqu'au point de contrôle humain prévu par votre gouvernance.
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Tous les agents du marché, quel que soit l'éditeur, reposent sur cette même mécanique. La comprendre suffit pour cadrer un projet, dialoguer avec un intégrateur et repérer les promesses excessives.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20, marginBottom: 44 }}>
                {LOOP_STEPS.map(step => (
                  <div key={step.num} style={{ ...cardStyle, padding: 26 }}>
                    <IconTile icon={step.icon} />
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: c, margin: '18px 0 4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Étape {step.num}</div>
                    <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ ...h3Style, fontSize: 20, marginBottom: 12 }}>L'accès aux outils : le rôle du standard MCP</h3>
              <p style={{ ...pStyle, maxWidth: 'none' }}>
                Pour agir, un agent doit se connecter à vos logiciels. Cette connexion passe par ce que les éditeurs appellent le <Link to="/glossaire-ia#function-calling" style={linkStyle}>function calling ou tool use</Link> : le modèle demande l'exécution d'une fonction précise, avec des paramètres structurés, et reçoit le résultat en retour. Le <Link to="/glossaire-ia#mcp" style={linkStyle}>Model Context Protocol (MCP)</Link>, protocole ouvert lancé par Anthropic fin 2024, standardise cette connexion entre les modèles et les systèmes externes : bases de données, API, fichiers. Son adoption large en a fait un standard de fait : un connecteur MCP développé une fois peut servir à plusieurs agents, quel que soit le modèle qui les anime.
              </p>

              <h3 style={{ ...h3Style, fontSize: 20, marginBottom: 12 }}>La supervision humaine</h3>
              <p style={{ ...pStyle, maxWidth: 'none', marginBottom: 0 }}>
                Un agent d'entreprise sérieux fonctionne avec des points de contrôle humains, ce que la littérature appelle le <Link to="/glossaire-ia#humain-dans-la-boucle" style={linkStyle}>human-in-the-loop</Link>. Trois niveaux existent : l'humain valide chaque action (le mode le plus prudent), l'humain valide uniquement les actions sensibles (envoi externe, paiement, suppression), ou l'humain contrôle a posteriori sur échantillon. La plupart des déploiements 2026 restent supervisés : l'autonomie se gagne progressivement, à mesure que la fiabilité est démontrée sur le terrain. La supervision humaine est aussi l'un des six principes de l'<Link to="/ia-responsable" style={linkStyle}>IA responsable</Link>, avec l'équité, la transparence et la traçabilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. LES 20 CAS D'USAGE ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Kicker>20 cas d'usage</Kicker>
          <h2 style={h2Style}>Quels sont les cas d'usage concrets des agents IA pour entreprises ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Les cas d'usage les plus matures des agents IA en entreprise concernent la qualification de leads, le traitement des factures fournisseurs, le support client de niveau 1, les agents de code et la veille.</strong> Leur point commun : des processus fréquents et documentés, où l'agent prépare le travail et où un humain valide les actions sensibles.
          </p>
          <p style={pStyle}>
            Les 20 cas qui suivent sont classés par fonction. Chacun suppose un agent connecté aux outils concernés et supervisé par l'équipe métier. Aucun chiffre de gain n'est avancé : les résultats dépendent du volume traité, de la qualité des données et du niveau de supervision retenu. Pour élargir le regard au-delà des seuls agents, notre panorama des <Link to="/cas-usage-ia-entreprise" style={linkStyle}>cas d'usage de l'IA en entreprise</Link> couvre aussi les usages conversationnels et l'automatisation.
          </p>

          {/* Aperçu scannable des 20 cas (listicle) */}
          <div style={{ ...cardStyle, padding: '24px 28px', margin: '8px 0 0', background: '#F9FAFB' }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>Les 20 cas en un coup d'œil</p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))', gap: '10px 28px' }}>
              {USE_CASE_GROUPS.flatMap(g => g.cases).map(uc => (
                <li key={uc.title} style={{ fontSize: 14, color: '#374151', lineHeight: 1.5, display: 'flex', gap: 10 }}>
                  <span style={{ color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif', flexShrink: 0, minWidth: 22 }}>{uc.title.match(/^\d+/)?.[0]}</span>
                  <span>{uc.title.replace(/^\d+\.\s*/, '')}</span>
                </li>
              ))}
            </ol>
          </div>

          {USE_CASE_GROUPS.map(group => (
            <div key={group.id} style={{ marginTop: 52 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <IconTile icon={group.icon} />
                <h3 style={{ ...h3Style, fontSize: 'clamp(19px, 2vw, 22px)', margin: 0 }}>{group.label}</h3>
                <div aria-hidden="true" style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24 }}>
                {group.cases.map(uc => (
                  <div key={uc.title} style={{ ...cardStyle, padding: '24px 26px' }}>
                    <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em', lineHeight: 1.35 }}>{uc.title}</h4>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{uc.desc}</p>
                    {uc.link && (
                      <Link to={uc.link.to} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 14, color: c, fontWeight: 700, textDecoration: 'none' }}>
                        {uc.link.label}
                        <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ON DÉVELOPPE VOS AGENTS POUR VOUS (service dominant, sombre harmonisé) ── */}
      <section id="sur-mesure" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', color: '#fff', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>
            Nous le construisons pour vous
          </div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 38px)', fontWeight: 900, color: '#fff', margin: '0 0 18px', lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: 820 }}>
            On développe vos agents IA sur mesure
          </h2>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '22px 26px', margin: '0 0 28px', maxWidth: 860 }}>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, margin: 0, color: '#E2E8F0' }}>
              <strong style={{ color: '#fff' }}>Plutôt que d'outiller vous-même vos agents, vous nous confiez la construction de bout en bout : cadrage du processus, développement de l'agent, intégration à vos logiciels via MCP et API, puis déploiement supervisé. Vous récupérez un agent qui agit dans vos outils, encadré par des garde-fous, et dont vous gardez la propriété.</strong>
            </p>
          </div>

          <p style={{ fontSize: 16, color: '#B4C0D3', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 760 }}>
            Les 20 cas d'usage ci-dessus décrivent ce qu'un agent peut faire. Les rendre réels suppose de l'ingénierie : connecter vos systèmes, fiabiliser le raisonnement, borner les actions, journaliser, cartographier les usages au regard de l'AI Act. C'est ce travail que nous prenons en charge, agent par agent. Pour situer le budget, nous détaillons par ailleurs le <Link to="/prix-projet-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>prix d'un agent IA</Link>, poste par poste.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginBottom: 44 }}>
            {BUILD_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#60A5FA', letterSpacing: '0.06em', marginBottom: 6 }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ ...h3Style, color: '#F8FAFC', fontSize: 16.5 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
              Discutons de votre projet
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '15px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)' }}>
              Notre agence de développement IA
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Votre besoin dépasse l'agent isolé et appelle un véritable logiciel piloté par l'IA ? Nous concevons aussi des <Link to="/outils-ia-sur-mesure" style={{ color: '#93C5FD', fontWeight: 600 }}>outils IA sur mesure</Link>. Et pour donner les bons réflexes à vos équipes en complément, la <Link to="/formation-claude-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>formation Claude</Link> les outille sur les agents de code.
          </p>
        </div>
      </section>

      {/* ── CTA MILIEU ── */}
      <section style={{ padding: '56px 24px', background: c }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 380px' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#fff', margin: '0 0 8px', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
              Un de ces cas d'usage ressemble à votre quotidien ?
            </h2>
            <p style={{ fontSize: 15, color: cLight, margin: 0, lineHeight: 1.65 }}>
              Réponse sous 24 h · Cadrage sur vos processus réels · Organisme certifié Qualiopi
            </p>
          </div>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: c, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Parler à notre équipe
            <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── 4. OUTILS 2026 ── */}
      <section id="outils" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Kicker>Outils 2026</Kicker>
          <h2 style={h2Style}>Quels outils pour déployer des agents IA en 2026 ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Cinq familles d'outils dominent les déploiements d'agents IA en 2026 : Claude et le standard MCP, les agents OpenAI, Microsoft Copilot Studio, Google Gemini avec Vertex AI, et les plateformes d'orchestration comme n8n ou Make.</strong> Le bon choix dépend de votre système d'information, des compétences internes et du niveau d'autonomie visé.
          </p>
          <p style={pStyle}>
            Le marché évolue vite : les éditeurs livrent de nouvelles capacités agentiques chaque trimestre, et les positions de 2026 ne préjugent pas de celles de 2027. Voici les cinq options qui structurent les déploiements actuels, sans classement : chacune domine sur son terrain.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '32px 0' }}>
            {TOOLS.map(tool => (
              <div key={tool.name} style={{ ...cardStyle, padding: '26px 30px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <IconTile icon={tool.icon} />
                <div style={{ flex: '1 1 320px' }}>
                  <h3 style={{ ...h3Style, fontSize: 17 }}>{tool.name}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ ...pStyle, marginBottom: 0 }}>
            Les plateformes d'orchestration s'appuient souvent sur un <Link to="/glossaire-ia#orchestrateur" style={linkStyle}>orchestrateur</Link> qui coordonne modèles et outils. Pour un comparatif détaillé des forces et des limites de chaque solution, consultez notre guide <Link to="/meilleur-agent-ia" style={linkStyle}>meilleur agent IA</Link>.
          </p>
        </div>
      </section>

      {/* ── 5. RISQUES ET GOUVERNANCE (éditorial asymétrique) ── */}
      <section id="risques" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Risques et gouvernance</Kicker>
              <h2 style={h2Style}>Comment maîtriser les risques des agents IA en entreprise ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong style={{ color: '#0A0A0A' }}>La maîtrise des risques repose sur cinq garde-fous : des droits d'accès limités au strict nécessaire, une validation humaine sur les actions sensibles, une protection des données conforme au RGPD, une journalisation complète des actions et une cartographie des usages au regard de l'AI Act.</strong> Appliqués dès le pilote, ces garde-fous transforment un risque opérationnel en outil contrôlé.
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Donner des capacités d'action à un système d'IA crée des risques nouveaux par rapport à un simple assistant : une erreur ne reste plus dans une fenêtre de conversation, elle se propage dans vos systèmes. Les cinq chantiers ci-dessous permettent de les maîtriser, et le cadre d'ensemble relève de la <Link to="/gouvernance-ia" style={linkStyle}>gouvernance des agents IA et de l'AI Act</Link>.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {RISKS.map(risk => (
                <div key={risk.title} style={{ ...cardStyle, padding: '26px 30px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <IconTile icon={risk.icon} />
                  <div style={{ flex: '1 1 280px' }}>
                    <h3 style={{ ...h3Style, fontSize: 17 }}>{risk.title}</h3>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{risk.desc}</p>
                    {risk.link && (
                      <Link to={risk.link.to} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, fontSize: 14, color: c, fontWeight: 700, textDecoration: 'none' }}>
                        {risk.link.label}
                        <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PAR OÙ COMMENCER ── */}
      <section id="commencer" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={h2Style}>Par où commencer pour déployer un agent IA ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Commencez par un processus pilote fréquent, documenté et à faible risque, déployez un agent supervisé avec validation humaine, mesurez pendant plusieurs semaines, puis étendez le périmètre par paliers.</strong> L'autonomie accordée à l'agent suit la fiabilité démontrée sur le terrain, jamais l'inverse. Quatre étapes structurent la démarche.
          </p>

          <div style={{ position: 'relative', maxWidth: 820, margin: '32px 0 56px' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {START_STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === START_STEPS.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 15, color: c }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 6 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ ...h3Style, fontSize: 22, marginBottom: 8 }}>Avancer avec Masteria</h3>
          <p style={{ ...pStyle, marginBottom: 28 }}>
            Masteria conçoit, développe et déploie vos agents IA sur mesure, comme détaillé ci-dessus. Spécialisés sur l'IA depuis 2022 et basés à Lyon, nous avons accompagné plus de 1 500 professionnels, en France, en Suisse et en Belgique. Pour une vue d'ensemble de nos accompagnements, notre <Link to="/agence-ia" style={linkStyle}>agence IA à Lyon</Link> rassemble le tout, et un <Link to="/diagnostic-ia" style={linkStyle}>diagnostic IA gratuit</Link> identifie le premier agent à déployer chez vous. Vos équipes peuvent aussi se former en complément.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {NEXT_STEPS.map(item => (
              <Link key={item.to} to={item.to} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: '#1d4ed8', padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {item.tag}
                  </div>
                  <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{item.title}</h4>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{item.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, color: c, fontWeight: 700 }}>
                    En savoir plus
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ (éditorial asymétrique) ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur les agents IA en entreprise</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} aStrong={item.aStrong} aRest={item.aRest} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
            <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, color: '#fff', margin: '0 0 16px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Déployez vos premiers agents IA
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 560 }}>
                Décrivez-nous le processus qui consomme le plus de temps dans vos équipes. On revient vers vous sous 24 heures avec un avis honnête : agent, workflow, ou simple formation des équipes.
              </p>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 28 }}>
                Contacter notre équipe
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
                Organisme certifié Qualiopi · +1 500 professionnels formés · 98 % de satisfaction · France, Suisse, Belgique
              </p>
            </div>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
