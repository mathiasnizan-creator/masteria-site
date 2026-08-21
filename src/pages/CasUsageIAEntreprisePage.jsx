import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, LayoutGrid, Megaphone, Briefcase, Headphones, Users, Calculator,
  Scale, Cog, Server, Workflow, Bot, Database, FileSearch, PenLine, Network,
  Compass, ListChecks, Sparkles, Target, ShieldCheck, RefreshCw, TrendingUp,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page PILIER informationnel « cas d'usage IA en entreprise » (slug /cas-usage-ia-entreprise).
 * Intention top-funnel : panorama de cas concrets organisés par FONCTION et par TYPE de
 * solution. Ne se positionne PAS comme tête « agence / conseil » pour ne pas cannibaliser
 * les money pages : ce pilier MAILLE vers elles (/solutions-ia, /agents-ia-entreprise,
 * /automatisation-ia, /agence-automatisation-ia, /ia-secteurs, /copilote-ia-interne,
 * /assistant-documentaire-ia, /integration-llm-rag, /diagnostic-ia).
 * Mots-clés : cas d'usage ia entreprise, exemples ia entreprise, applications ia en entreprise,
 * cas concrets ia entreprise, cas d'usage intelligence artificielle entreprise,
 * exemples d'utilisation de l'ia en entreprise, cas d'usage agents ia.
 * Chaque cas est orienté GAIN CONCRET pour l'équipe (ligne « Ce que l'équipe y gagne »).
 * Intégrité stricte : aucun cas client nominatif, aucun chiffre de résultat inventé.
 * On décrit la CAPACITÉ et le gain qualitatif (« moins de ressaisie », « du temps rendu sur… »),
 * jamais « le client X a gagné Y % ».
 * Seule stat citée : Gartner (≥ 30 % des projets GenAI abandonnés après POC d'ici fin 2025).
 * Design premium : hero sombre #0A0F1E, rythme (ancre sombre + éditorial asymétrique +
 * familles de cartes), icônes lucide (zéro emoji), accent bleu unique #2563EB, zéro orange.
 * PAS d'OPCO ni Qualiopi (pilier informationnel). FounderNote pour l'E-E-A-T.
 */

const SLUG = 'cas-usage-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Cas d'usage de l'IA en entreprise | Masteria"
const META_DESC = "Cas d'usage de l'IA en entreprise : 30 exemples concrets par fonction (marketing, commercial, RH, finance) et par solution, avec le gain pour chaque équipe."

const H1_LINE1 = "Cas d'usage de l'IA en entreprise"
const H1_LINE2 = "exemples concrets et gains réels par métier"

const KEYWORDS = "cas d'usage ia entreprise, exemples ia entreprise, applications ia en entreprise, cas concrets ia entreprise, cas d'usage intelligence artificielle entreprise, exemples d'utilisation de l'ia en entreprise, cas d'usage agents ia"

const PUBLISHED = '2026-06-15'
const UPDATED = '2026-07-02'

/* ───────── Sommaire (TOC ancré) ───────── */

const TOC = [
  { href: '#par-fonction', label: 'Cas par fonction' },
  { href: '#par-type', label: 'Cas par type de solution' },
  { href: '#du-cas-a-la-mise-en-oeuvre', label: 'Du cas à la mise en œuvre' },
  { href: '#choisir', label: 'Par où commencer' },
  { href: '#faq', label: 'Questions fréquentes' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Cas couverts', value: "30 cas d'usage concrets de l'IA en entreprise, décrits par la capacité et le gain concret pour l'équipe, sans chiffre de résultat inventé" },
  { label: 'Fonctions', value: "Marketing, commercial, support et relation client, RH, finance et compta, juridique, opérations, IT" },
  { label: 'Types de solution', value: "Automatisation de process, agents autonomes, copilotes internes, génération de contenu, analyse documentaire, RAG, connecteurs" },
  { label: 'Gain pour l\'équipe', value: "Moins de ressaisie et de tâches répétitives, plus de temps sur ce qui demande du jugement humain" },
  { label: 'Du cas à l\'usage', value: "Un cas d'usage devient utile par un pilote cadré sur un processus réel, mesuré avant d'être étendu" },
  { label: 'Posture', value: "Panorama informationnel, neutre sur les outils ; renvoie vers les solutions adaptées à chaque cas" },
  { label: 'Zone', value: "Lyon, France, Suisse, Belgique · distanciel et présentiel ponctuel" },
]

/* ───────── Cas d'usage par FONCTION (8 fonctions, 24 cas) ───────── */

const FUNCTION_GROUPS = [
  {
    id: 'marketing',
    icon: Megaphone,
    label: 'Marketing et communication',
    cases: [
      {
        title: 'Production et déclinaison de contenus',
        desc: "L'IA générative produit des brouillons d'articles, de posts et de newsletters à partir d'un brief, puis décline un contenu pilier sur plusieurs canaux dans le respect d'une charte éditoriale. Les équipes relisent et arbitrent avant publication.",
        gain: "L'équipe part d'un brouillon solide plutôt que de la page blanche et concentre son temps sur l'angle et la relecture.",
      },
      {
        title: 'Veille concurrentielle et de marché',
        desc: "Un agent surveille les sites, communiqués et publications désignés, puis livre une synthèse sourcée des changements détectés à fréquence fixe. Le marketing décide de ce qui mérite une réaction plutôt que de scruter les sources à la main.",
        gain: "Fini les heures à surveiller les concurrents : l'équipe reçoit une synthèse prête et tranche sur l'essentiel.",
      },
      {
        title: 'Personnalisation des campagnes et segmentation',
        desc: "À partir des données du CRM et des comportements observés, l'IA propose des segments, adapte le message à chaque audience et génère les variantes d'objet et d'accroche à tester. Le marketing valide avant lancement.",
        gain: "Des campagnes vraiment ciblées sans le travail manuel de découpage des listes et de réécriture pour chaque segment.",
      },
    ],
  },
  {
    id: 'commercial',
    icon: Briefcase,
    label: 'Commercial et avant-vente',
    cases: [
      {
        title: 'Qualification des leads entrants',
        desc: "L'IA lit chaque demande entrante, recherche l'entreprise, applique une grille de qualification et prépare une fiche documentée dans le CRM. Le commercial reçoit un lead scoré avec un brouillon de première réponse à valider.",
        gain: "Le commercial concentre son énergie sur les leads à fort potentiel au lieu du tri et de la recherche d'informations.",
      },
      {
        title: 'Préparation des rendez-vous commerciaux',
        desc: "Avant un rendez-vous, l'IA compile l'historique du compte, les actualités du prospect et les échanges passés en une fiche de préparation d'une page. Le commercial arrive informé sans avoir passé sa soirée à rassembler le contexte.",
        gain: "Le commercial arrive préparé sans y passer sa soirée ; le contexte est déjà rassemblé et mis en forme.",
      },
      {
        title: 'Compte rendu et relances après rendez-vous',
        desc: "Après un échange ou un appel, l'IA rédige le compte rendu, met à jour le CRM et prépare les e-mails de relance avec les prochaines étapes. Le commercial corrige et envoie.",
        gain: "Plus de notes qui traînent ni de relances oubliées : le suivi se fait pendant que l'affaire est encore chaude.",
      },
    ],
  },
  {
    id: 'support',
    icon: Headphones,
    label: 'Support et relation client',
    cases: [
      {
        title: 'Réponse de niveau 1 et routage des tickets',
        desc: "L'IA répond aux questions courantes à partir de la base de connaissances, consulte le statut réel d'une commande et route les demandes complexes vers la bonne équipe avec un résumé. Le conseiller démarre chaque dossier avec l'essentiel sous les yeux.",
        gain: "Les conseillers se concentrent sur les échanges qui demandent un humain ; les demandes simples sont traitées sans attente.",
      },
      {
        title: 'Synthèse de la voix du client',
        desc: "L'IA agrège tickets, avis et verbatims d'enquêtes, repère les motifs récurrents et produit un rapport d'irritants priorisé. Les équipes produit et qualité travaillent sur des signaux consolidés plutôt que sur des cas isolés.",
        gain: "Les équipes produit et qualité agissent sur des irritants consolidés au lieu de réagir cas par cas.",
      },
      {
        title: 'Assistance en temps réel au conseiller',
        desc: "Pendant un échange, l'IA suggère au conseiller la réponse adaptée, l'article de base de connaissances pertinent et la procédure à suivre, en s'appuyant sur l'historique du dossier. Le conseiller reste maître de ce qu'il envoie.",
        gain: "Un conseiller qui débute répond avec le niveau d'un expert ; moins de mises en attente et d'escalades inutiles.",
      },
    ],
  },
  {
    id: 'rh',
    icon: Users,
    label: 'Ressources humaines',
    cases: [
      {
        title: 'Premier niveau de réponse RH',
        desc: "Congés, mutuelle, notes de frais, attestations : l'IA répond aux questions récurrentes en s'appuyant sur les accords et politiques internes, et transfère à l'équipe RH dès qu'un cas sort du cadre prévu.",
        gain: "L'équipe RH cesse de répondre dix fois à la même question et garde du temps pour l'accompagnement humain.",
      },
      {
        title: "Accompagnement de l'onboarding",
        desc: "L'IA répond aux questions pratiques des nouveaux arrivants à partir de la documentation interne et suit la check-list d'intégration. Les RH gardent les sujets humains, l'outil prend en charge la logistique répétitive.",
        gain: "Le nouvel arrivant est autonome plus vite ; les RH se réservent les moments qui comptent vraiment.",
      },
      {
        title: 'Tri et présélection des candidatures',
        desc: "L'IA lit les candidatures, les rapproche des critères du poste et prépare une synthèse comparée des profils en signalant ce qui mérite un second regard. Le recruteur décide qui rencontrer.",
        gain: "Le recruteur consacre son temps aux entretiens et à l'évaluation humaine plutôt qu'au tri de centaines de CV.",
      },
    ],
  },
  {
    id: 'finance',
    icon: Calculator,
    label: 'Finance et comptabilité',
    cases: [
      {
        title: 'Traitement des factures fournisseurs',
        desc: "L'IA extrait les données des factures reçues, les rapproche des bons de commande, prépare l'imputation et signale toute anomalie (montant inhabituel, doublon, fournisseur inconnu) à un humain avant validation.",
        gain: "La comptabilité valide au lieu de ressaisir ; les anomalies remontent avant le paiement, pas après.",
      },
      {
        title: 'Préparation du reporting de gestion',
        desc: "L'IA rassemble les chiffres dans les outils comptables, construit les tableaux convenus et rédige un premier commentaire de gestion. Le responsable financier contrôle, corrige et garde la main sur l'analyse.",
        gain: "Le responsable financier passe à l'analyse plus tôt, sans la corvée de consolidation des chiffres.",
      },
      {
        title: 'Suivi des paiements et relance des impayés',
        desc: "L'IA suit les échéances, repère les retards et prépare des relances adaptées au profil et à l'ancienneté de la créance, du rappel courtois à la mise en demeure. La finance garde la main sur le ton et l'envoi.",
        gain: "Des relances régulières et personnalisées sans charge manuelle, pour une trésorerie suivie de près.",
      },
    ],
  },
  {
    id: 'juridique',
    icon: Scale,
    label: 'Juridique et conformité',
    cases: [
      {
        title: 'Revue et synthèse de contrats',
        desc: "L'IA lit un contrat, en extrait les clauses clés (durée, résiliation, responsabilité, pénalités) et signale les écarts par rapport à une trame de référence. Le juriste se concentre sur l'analyse de risque plutôt que sur la lecture exhaustive.",
        gain: "Le juriste se concentre sur le risque réel au lieu de relire chaque clause de bout en bout.",
      },
      {
        title: 'Réponse aux questions de conformité internes',
        desc: "Interrogée sur les politiques internes, le RGPD ou les procédures, l'IA répond en citant les documents sources et oriente vers le référent quand le cas dépasse le cadre documenté. La connaissance interne devient interrogeable.",
        gain: "Les équipes trouvent elles-mêmes la règle applicable ; le juriste n'est sollicité que sur les vrais arbitrages.",
      },
      {
        title: 'Veille réglementaire',
        desc: "Un agent surveille les évolutions de la réglementation et des normes applicables à votre activité, puis livre une synthèse des changements et de leur impact possible. Le référent décide des actions à mener.",
        gain: "Plus de texte important manqué : la veille devient continue sans monopoliser un juriste.",
      },
    ],
  },
  {
    id: 'operations',
    icon: Cog,
    label: 'Opérations et production',
    cases: [
      {
        title: 'Rédaction et mise à jour des procédures',
        desc: "L'IA transforme des notes et des échanges en modes opératoires structurés, et compare régulièrement la documentation à la réalité du terrain pour proposer les corrections. Les équipes valident au fil de l'eau.",
        gain: "Les modes opératoires restent à jour sans chantier documentaire ; le terrain valide au fil de l'eau.",
      },
      {
        title: 'Aide à la planification et au suivi',
        desc: "L'IA consolide les informations dispersées (plannings, comptes rendus, tableaux), repère les écarts et prépare un point de situation. Le pilote d'activité arbitre sur une vue déjà mise en forme.",
        gain: "Le pilote d'activité arbitre sur une vue déjà consolidée au lieu de rassembler l'information à la main.",
      },
      {
        title: "Comptes rendus de réunion et plans d'action",
        desc: "À partir d'un enregistrement ou de notes, l'IA produit un compte rendu structuré, extrait les décisions et les actions avec leurs responsables, et prépare le suivi. Les participants valident.",
        gain: "Plus personne ne sacrifie l'écoute pour prendre des notes ; les actions sont tracées et rien ne se perd.",
      },
    ],
  },
  {
    id: 'it',
    icon: Server,
    label: 'IT et développement',
    cases: [
      {
        title: 'Agents de code pour les équipes de développement',
        desc: "À partir d'un ticket, un agent de code explore la base, propose une implémentation, écrit les tests et prépare une pull request qu'un développeur relit avant fusion. Le développeur consacre plus de temps à la conception et à la revue.",
        gain: "Le développeur consacre son temps à la conception et à la revue plutôt qu'au code répétitif.",
        link: { to: '/agents-ia-entreprise', label: 'En savoir plus sur les agents IA' },
      },
      {
        title: 'Support informatique interne de niveau 1',
        desc: "Réinitialisations de mot de passe, demandes d'accès, diagnostics standards : l'IA traite les sollicitations courantes selon les procédures et escalade aux techniciens avec un diagnostic déjà documenté.",
        gain: "Les techniciens se concentrent sur les vrais incidents ; les demandes courantes avancent sans file d'attente.",
      },
      {
        title: 'Documentation technique et revue de code',
        desc: "L'IA documente le code existant, rédige commentaires et guides, et signale en revue les écarts de style, les failles courantes et les cas de test manquants. L'équipe garde la décision finale.",
        gain: "Une base de code mieux documentée et relue sans alourdir la charge des développeurs.",
      },
    ],
  },
]

/* ───────── Cas d'usage par TYPE de solution (6 types) ───────── */

const TYPE_CASES = [
  {
    icon: Workflow,
    title: 'Automatisation de process bout en bout',
    desc: "Orchestration des flux répétitifs, du déclencheur au résultat : extraire une donnée, la transformer, la déposer dans le bon outil sans ressaisie. L'IA gère les étapes qui demandent du jugement, le reste suit des règles fixes.",
    gain: "Les équipes sont déchargées de la ressaisie et du copier-coller entre outils.",
    link: { to: '/automatisation-ia', label: "Guide de l'automatisation IA" },
  },
  {
    icon: Bot,
    title: 'Agents autonomes et copilotes internes',
    desc: "Un agent reçoit un objectif et choisit lui-même la séquence d'actions dans vos logiciels ; un copilote interne assiste un métier précis à partir de vos données. Tous deux fonctionnent sous supervision humaine sur les actions sensibles.",
    gain: "Chaque métier dispose d'un assistant qui agit dans ses outils, sous supervision sur les actions sensibles.",
    link: { to: '/copilote-ia-interne', label: 'Découvrir le copilote IA interne' },
  },
  {
    icon: PenLine,
    title: 'Génération et personnalisation de contenu',
    desc: "À partir d'un brief et de votre charte, l'IA rédige et adapte vos contenus — e-mails, fiches produit, descriptions, supports — et les décline par audience ou par canal. Les équipes relisent et arbitrent avant diffusion.",
    gain: "Les équipes produisent plus, et plus vite, sans sacrifier la cohérence de ton.",
    link: { to: '/ia-generative-entreprise', label: "L'IA générative en entreprise" },
  },
  {
    icon: FileSearch,
    title: 'Analyse et synthèse documentaire',
    desc: "L'IA lit des volumes de documents (rapports, contrats, comptes rendus, e-mails), en extrait l'essentiel et répond à des questions précises en citant ses sources. La masse documentaire cesse d'être un angle mort.",
    gain: "La masse documentaire devient exploitable : l'information utile se trouve en quelques secondes.",
    link: { to: '/assistant-documentaire-ia', label: "Assistant documentaire IA" },
  },
  {
    icon: Database,
    title: 'RAG sur votre base de connaissances interne',
    desc: "Le RAG (retrieval-augmented generation) ancre les réponses de l'IA dans vos propres contenus et documents, avec des sources citables. L'outil répond à partir de votre réalité métier, pas d'une connaissance générale.",
    gain: "Vos collaborateurs interrogent la connaissance de l'entreprise et obtiennent des réponses sourcées, pas génériques.",
    link: { to: '/integration-llm-rag', label: 'Intégration LLM et RAG' },
  },
  {
    icon: Network,
    title: 'Connecteurs et intégrations',
    desc: "L'IA se branche à vos outils existants — CRM, ERP, messagerie, espace documentaire — pour lire et écrire la donnée là où elle vit, sans changer vos logiciels. Les usages s'installent dans le flux de travail réel.",
    gain: "Pas de double saisie ni de nouvel outil à adopter : l'IA agit dans l'environnement déjà en place.",
    link: { to: '/agence-automatisation-ia', label: 'Mettre en œuvre vos intégrations' },
  },
]

/* Numérotation continue : cas par fonction (1…), puis cas par type de solution. */
let _caseNum = 0
FUNCTION_GROUPS.forEach(g => g.cases.forEach(uc => { uc.num = ++_caseNum }))
TYPE_CASES.forEach(uc => { uc.num = ++_caseNum })

/* ───────── Familles de solution (pictos de tête de section TYPE) ───────── */

const SOLUTION_FAMILIES = [
  { icon: Workflow, label: 'Automatisation de process' },
  { icon: Bot, label: 'Agents et copilotes' },
  { icon: PenLine, label: 'Génération de contenu' },
  { icon: FileSearch, label: 'Analyse documentaire' },
  { icon: Database, label: 'RAG sur base interne' },
  { icon: Network, label: 'Connecteurs et intégrations' },
]

/* ───────── Du cas à la mise en œuvre (3 jalons) ───────── */

const PATH_STEPS = [
  {
    icon: Compass,
    title: 'Choisir le bon cas',
    desc: "Un bon premier cas est fréquent, documenté, aux règles claires et à faible risque en cas d'erreur. Un cas critique ou mal défini fait échouer le projet quel que soit l'outil retenu.",
  },
  {
    icon: ListChecks,
    title: 'Cadrer et piloter',
    desc: "Le cas se transforme en pilote borné : objectif, données mobilisées, périmètre d'action et points de validation humaine. On mesure le temps rendu, le taux de reprises et le taux d'escalade sur quelques semaines.",
  },
  {
    icon: RefreshCw,
    title: 'Étendre par paliers',
    desc: "Une fois la fiabilité démontrée, on élargit le périmètre puis on réplique sur un deuxième cas. L'autonomie accordée à l'outil suit la fiabilité mesurée, jamais l'inverse.",
  },
]

/* ───────── Ressources / maillage final ───────── */

const NEXT_STEPS = [
  { label: 'Solutions IA', href: '/solutions-ia', tag: 'Solutions', desc: "Le panorama de nos solutions IA par cas d'usage, des agents aux applications métier." },
  { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Le guide complet des agents IA et 20 cas d'usage agents, avec la gouvernance à poser." },
  { label: 'Automatisation IA', href: '/automatisation-ia', tag: 'Automatisation', desc: "Comment automatiser vos process avec l'IA : du déclencheur au résultat, étape par étape." },
  { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Mise en œuvre', desc: "Cadrage, prototypage et déploiement de vos automatisations IA, avec vos équipes." },
  { label: 'IA par secteur', href: '/ia-secteurs', tag: 'Secteurs', desc: "Les cas d'usage IA propres à chaque secteur d'activité et leurs enjeux." },
  { label: 'Copilote IA interne', href: '/copilote-ia-interne', tag: 'Copilote', desc: "Un assistant connecté à vos données, pensé pour un métier précis." },
  { label: 'Assistant documentaire IA', href: '/assistant-documentaire-ia', tag: 'Documentaire', desc: "Interroger vos documents et obtenir des réponses sourcées sur votre base interne." },
  { label: 'Intégration LLM et RAG', href: '/integration-llm-rag', tag: 'RAG', desc: "Ancrer un modèle dans vos contenus réels, avec des réponses citables." },
  { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'Générative', desc: "Ce que recouvre l'IA générative en entreprise et les usages qu'elle ouvre par métier." },
  { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les fourchettes de prix d'un projet IA et ce qui fait varier le budget d'un cas à l'autre." },
  { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Gouvernance', desc: "Cadrer les règles, la supervision et la conformité avant d'étendre un cas d'usage." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Quels sont les cas d'usage de l'IA en entreprise ?",
    aStrong: "Les cas d'usage les plus matures de l'IA en entreprise couvrent la production et la déclinaison de contenus, la qualification de leads, le support client de niveau 1, le traitement des factures, l'analyse documentaire et les agents de code.",
    aRest: "Au-delà de ces exemples, l'IA s'applique à presque toutes les fonctions : marketing, commercial, support et relation client, RH, finance et comptabilité, juridique, opérations et IT. Leur point commun reste un processus fréquent et documenté, où l'IA prépare le travail et où un humain valide les actions sensibles. Ce panorama en détaille trente, par fonction et par type de solution, avec le gain concret pour l'équipe à chaque fois.",
  },
  {
    q: "Quel est le gain réel de l'IA pour les équipes ?",
    aStrong: "Le gain le plus tangible de l'IA pour les équipes, c'est du temps libéré sur les tâches répétitives et à faible valeur : ressaisie, recherche d'informations, premiers brouillons, tri de demandes — au profit du travail qui demande du jugement et de la relation humaine.",
    aRest: "Concrètement, l'IA prépare et l'humain décide : le commercial part d'une fiche déjà documentée, le comptable valide au lieu de ressaisir, le conseiller répond plus vite avec le bon contexte. L'ampleur du gain dépend du volume, de la qualité des données et du niveau de supervision. Nous n'avançons aucun pourcentage générique : un pilote mesuré objective le gain propre à votre contexte avant toute extension.",
  },
  {
    q: "Par où commencer pour appliquer l'IA dans son entreprise ?",
    aStrong: "Commencez par un cas fréquent, documenté et à faible risque, transformez-le en pilote borné avec validation humaine, mesurez pendant plusieurs semaines, puis étendez par paliers.",
    aRest: "Le bon premier cas est le plus mesurable, même s'il paraît moins spectaculaire : tri de demandes, préparation de reporting, qualification de leads. La connaissance fine du processus pèse plus lourd que la technique. Un diagnostic permet d'identifier le cas à plus forte valeur avant tout déploiement.",
  },
  {
    q: "Quels cas d'usage de l'IA pour une PME ?",
    aStrong: "Une PME tire le meilleur parti de l'IA sur des cas concrets et accessibles : déclinaison de contenus, premier niveau de support, qualification de leads, traitement de factures et interrogation de sa documentation interne.",
    aRest: "Ces cas reposent sur des outils du marché et un périmètre limité, ce qui les rend abordables sans projet informatique lourd. La démarche raisonnable consiste à démarrer sur un seul cas, à mesurer le gain réel, puis à répliquer la méthode plutôt qu'à tout lancer en même temps.",
  },
  {
    q: "Combien de temps pour mettre en place un premier cas d'usage IA ?",
    aStrong: "Un premier cas utile se met en place en quelques semaines lorsqu'il est bien borné et que les données sont disponibles, le temps de cadrer, de configurer un pilote supervisé et de mesurer sur des cas réels.",
    aRest: "Le délai dépend de la complexité du processus, de la qualité des données et du niveau de connexion à vos outils. Un pilote sur un cas simple va plus vite qu'un déploiement multi-services avec connecteurs sur mesure. Nous n'avançons aucun chiffre de gain générique : le pilote objective le résultat propre à votre contexte.",
  },
  {
    q: "Cas d'usage des agents IA ou simple automatisation : quelle différence ?",
    aStrong: "Une automatisation enchaîne des étapes fixes, dans le même ordre, à partir d'un déclencheur défini ; un agent IA reçoit un objectif et choisit lui-même la séquence d'actions, ce qui lui permet d'absorber les cas imprévus qu'un scénario rigide rejette.",
    aRest: "L'automatisation convient aux processus stables et prévisibles ; l'agent prend le relais sur les étapes qui demandent du jugement. Dans la pratique, les deux se combinent souvent : l'orchestration encadre le processus, l'agent gère ce qui varie. Beaucoup de cas de ce panorama relèvent de l'un, de l'autre, ou des deux.",
  },
  {
    q: "Pourquoi beaucoup de projets IA s'arrêtent-ils après le POC ?",
    aStrong: "Le cabinet Gartner estime qu'au moins 30 % des projets d'IA générative seront abandonnés après la phase de preuve de concept d'ici fin 2025, faute de qualité des données, de coûts maîtrisés ou de valeur métier clairement démontrée.",
    aRest: "Un cas d'usage spectaculaire en démonstration ne survit pas toujours au passage en conditions réelles. C'est pourquoi le bon réflexe consiste à choisir un cas mesurable, à cadrer un pilote supervisé et à mesurer la valeur avant d'étendre. Un cas bien choisi et bien gouverné a beaucoup plus de chances d'atteindre la production.",
  },
]

/* ───────── JSON-LD ───────── */

const ALL_FUNCTION_CASES = FUNCTION_GROUPS.flatMap(g => g.cases)
const ALL_CASES = [...ALL_FUNCTION_CASES, ...TYPE_CASES]

const useCaseItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${ALL_CASES.length} cas d'usage de l'IA en entreprise`,
  description: "Cas d'usage concrets de l'intelligence artificielle en entreprise, classés par fonction (marketing, commercial, support, RH, finance, juridique, opérations, IT) et par type de solution (automatisation, agents, copilotes, génération de contenu, analyse documentaire, RAG, connecteurs), avec le gain concret pour l'équipe.",
  numberOfItems: ALL_CASES.length,
  itemListElement: ALL_CASES.map((uc, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: uc.title,
  })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `https://www.master-ia.fr/${SLUG}#article`,
  headline: `${H1_LINE1} : ${H1_LINE2}`,
  description: META_DESC,
  inLanguage: 'fr-FR',
  datePublished: PUBLISHED,
  dateModified: UPDATED,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  about: [
    "Cas d'usage de l'intelligence artificielle en entreprise",
    "Applications de l'IA par fonction",
    "Automatisation et agents IA",
    "RAG et analyse documentaire",
  ],
  keywords: KEYWORDS,
  isAccessibleForFree: true,
}

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1100, margin: '0 auto' }

const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 16px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }
const answerStyle = { fontSize: 16.5, color: '#374151', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 820 }
const pStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20, maxWidth: 820 }
const linkStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }

/* ───────── Briques UI ───────── */

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

/* GainLine : ce que l'équipe gagne concrètement (gain qualitatif, jamais chiffré). */
function GainLine({ text, dark = false }) {
  return (
    <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px dashed ${dark ? '#22304D' : '#E5E7EB'}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: dark ? '#60A5FA' : c, marginBottom: 5 }}>
        <TrendingUp size={13} strokeWidth={2.4} aria-hidden="true" />
        <span>Ce que l'équipe y gagne</span>
      </div>
      <p style={{ fontSize: 13.5, color: dark ? '#9FB0C9' : '#475569', lineHeight: 1.6, margin: 0 }}>{text}</p>
    </div>
  )
}

/* FAQItem : réponse TOUJOURS dans le DOM (repli CSS), jamais {open && <p>}. */
function FAQItem({ q, aStrong, aRest, color }) {
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
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>
          <strong style={{ color: '#0A0A0A' }}>{aStrong}</strong> {aRest}
        </p>
      </div>
    </div>
  )
}

/* ───────── Page ───────── */

export default function CasUsageIAEntreprisePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (par type / du cas à la mise en œuvre / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "Cas d'usage de l'IA en entreprise", slug: SLUG },
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
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Cas d'usage de l'IA en entreprise</span>
          </nav>

          {/* eyebrow : picto en tuile + label + badge de fraîcheur */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26, flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
              <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <LayoutGrid size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
              </span>
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
                Panorama des cas d'usage
              </span>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 13px' }}>
              <Sparkles size={13} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
              Mis à jour en juillet 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 860 }}>
            {H1_LINE1}
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>{H1_LINE2}</span>
          </h1>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Trente <strong style={{ color: '#fff', fontWeight: 700 }}>cas d'usage concrets de l'IA en entreprise</strong>, classés par fonction et par type de solution, avec pour chacun <strong style={{ color: '#fff', fontWeight: 700 }}>ce que vos équipes y gagnent concrètement</strong> : du temps rendu sur les tâches répétitives, au profit de ce qui demande du jugement.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Ce panorama réunit des exemples d'utilisation de l'IA en entreprise, du marketing à l'IT, et les classe aussi par type de solution : automatisation de process, agents autonomes, copilotes internes, génération de contenu, analyse documentaire, RAG et connecteurs. Chaque cas décrit une capacité et le gain pour l'équipe, sans chiffre de résultat inventé.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Identifier votre cas d'usage prioritaire
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#par-fonction" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les cas d'usage
            </a>
          </div>

          {/* En bref — synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 860 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 128px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE (TOC ancré, section claire) ── */}
      <section style={{ padding: 'clamp(36px, 5vw, 52px) 24px', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
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

      {/* ── CAS PAR FONCTION ── */}
      <section id="par-fonction" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Cas d'usage par fonction</Kicker>
          <h2 style={h2Style}>Quels cas d'usage de l'IA selon la fonction ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>L'IA en entreprise s'applique à presque toutes les fonctions : marketing, commercial, support et relation client, RH, finance et comptabilité, juridique, opérations et IT.</strong> Voici, fonction par fonction, des exemples concrets d'applications de l'IA en entreprise. Chacun décrit une capacité et ce que l'équipe y gagne concrètement, jamais un résultat chiffré : l'ampleur du gain dépend de votre volume, de vos données et du niveau de supervision retenu.
          </p>

          {FUNCTION_GROUPS.map(group => (
            <div key={group.id} style={{ marginTop: 48 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                <IconTile icon={group.icon} />
                <h3 style={{ ...h3Style, fontSize: 'clamp(18px, 2vw, 21px)', margin: 0 }}>{group.label}</h3>
                <div aria-hidden="true" style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
                {group.cases.map(uc => (
                  <div key={uc.title} style={{ ...cardStyle, padding: '24px 26px', display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em', lineHeight: 1.35 }}>{uc.num}. {uc.title}</h4>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{uc.desc}</p>
                    {uc.gain && <GainLine text={uc.gain} />}
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

      {/* ── CAS PAR TYPE DE SOLUTION (ancre sombre — pivot) ── */}
      <section id="par-type" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Cas d'usage par type de solution</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Les mêmes cas, lus par type de solution</h2>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '22px 26px', margin: '0 0 28px', maxWidth: 860 }}>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, margin: 0, color: '#E2E8F0' }}>
              <strong style={{ color: '#fff' }}>Au-delà des fonctions, les cas d'usage de l'IA en entreprise se rangent par type de solution : automatisation de process, agents autonomes et copilotes internes, génération de contenu, analyse et synthèse documentaire, RAG sur votre base de connaissances interne, et connecteurs vers vos outils.</strong> Cette lecture aide à choisir la brique technique adaptée à chaque cas.
            </p>
          </div>

          <p style={{ ...pStyle, color: '#B4C0D3' }}>
            Un même besoin peut s'adresser de plusieurs manières : un cas peut relever d'une simple automatisation, d'un agent qui décide, ou d'un copilote interrogeant vos documents. Les familles ci-dessous reviennent dans la majorité des projets.
          </p>

          {/* Famille de pictos — solutions types */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '0 0 40px' }}>
            {SOLUTION_FAMILIES.map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '8px 15px' }}>
                <Icon size={15} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
            {TYPE_CASES.map(uc => {
              const Icon = uc.icon
              return (
                <div key={uc.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column' }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16.5, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em', lineHeight: 1.35 }}>{uc.num}. {uc.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.7, margin: 0 }}>{uc.desc}</p>
                  {uc.gain && <GainLine text={uc.gain} dark />}
                  {uc.link && (
                    <Link to={uc.link.to} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 14, color: '#93C5FD', fontWeight: 700, textDecoration: 'none' }}>
                      {uc.link.label}
                      <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DU CAS À LA MISE EN ŒUVRE (éditorial asymétrique) ── */}
      <section id="du-cas-a-la-mise-en-oeuvre" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Du cas à la mise en œuvre</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Comment passer d'un cas d'usage à une solution en production ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong style={{ color: '#0A0A0A' }}>On passe d'un cas d'usage à la production en choisissant un cas fréquent et mesurable, en le cadrant comme un pilote supervisé, puis en l'étendant par paliers une fois la fiabilité démontrée.</strong> Un cas séduisant en démonstration ne survit pas toujours au passage en conditions réelles.
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le cabinet Gartner estime qu'au moins 30 % des projets d'IA générative seront abandonnés après le POC d'ici fin 2025. La cause est rarement la technologie : c'est le choix du cas et l'absence de mesure. Trois jalons réduisent ce risque.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20, marginBottom: 32 }}>
                {PATH_STEPS.map((step, i) => (
                  <div key={step.title} style={{ ...cardStyle, padding: 26 }}>
                    <IconTile icon={step.icon} />
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: c, margin: '18px 0 4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Jalon {String(i + 1).padStart(2, '0')}</div>
                    <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0 }}>
                Selon le cas, la mise en œuvre prend la forme d'une <Link to="/automatisation-ia" style={linkStyle}>automatisation de vos process</Link>, d'un <Link to="/agents-ia-entreprise" style={linkStyle}>agent IA en entreprise</Link> ou d'un <Link to="/copilote-ia-interne" style={linkStyle}>copilote IA interne</Link> connecté à vos données. Quand le besoin repose sur vos documents, l'<Link to="/integration-llm-rag" style={linkStyle}>intégration LLM et RAG</Link> ancre les réponses dans vos contenus réels. Pour cadrer le bon premier cas, le <Link to="/diagnostic-ia" style={linkStyle}>diagnostic IA</Link> est le point de départ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAR OÙ COMMENCER (familles de cartes + maillage) ── */}
      <section id="choisir" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Par où commencer</Kicker>
          <h2 style={h2Style}>Quel cas d'usage choisir en premier ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Le meilleur premier cas est le plus fréquent, le plus documenté et le moins risqué en cas d'erreur, même s'il paraît moins spectaculaire.</strong> Il rend la valeur visible vite et sert de modèle pour répliquer la démarche sur d'autres cas.
          </p>
          <p style={pStyle}>
            Pour aller plus loin sur un type de cas précis, ou pour voir comment ces usages se déclinent dans votre secteur, ces ressources prolongent ce panorama.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24, margin: '32px 0 0' }}>
            {NEXT_STEPS.map(rel => (
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

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Cas d'usage de l'IA en entreprise : questions fréquentes</h2>
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

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      <FounderNote />

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
              <Target size={28} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
            </div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Trouvez votre cas d'usage prioritaire
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez-nous le processus qui consomme le plus de temps dans vos équipes. Nous revenons vers vous sous 24 heures avec une lecture honnête : quel cas d'usage adresser en premier, et par quelle solution le mettre en œuvre.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
                Demander un diagnostic IA
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '16px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)' }}>
                Nous contacter
                <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              <ShieldCheck size={14} strokeWidth={2.2} style={{ color: '#60A5FA', verticalAlign: 'text-bottom', marginRight: 6 }} aria-hidden="true" />
              Réponse sous 24 h · Spécialistes IA depuis 2022 · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria est un cabinet spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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
