import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Brain, Briefcase, Cloud, Cog, Compass, Eye, Headphones,
  LayoutGrid, Lock, Megaphone, MessageSquare, Plug, RefreshCw, Rocket, Scale,
  ScrollText, Server, ShieldCheck, Sparkles, Target, TrendingUp, UserCheck,
  Users, Workflow, Zap, Wind, Sun, GraduationCap, Mail, Store,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « Agents IA en entreprise » : guide complet et 20 cas d'usage.
 * Requêtes : « agent ia entreprise », « agents ia pour entreprise », « ia agentique
 * entreprise », « cas d'usage concrets des agents IA pour entreprises ».
 * Pensée pour le classement et la citation par les moteurs génératifs : réponse
 * directe en gras sous chaque H2, définition citable, tableau assistant / agent /
 * workflow, FAQ JSON-LD.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : vingt usages distincts de ceux
 * de /cas-usage-ia-entreprise ; outils datés au 7 octobre 2026 (fiche FAITS-OUTILS
 * du 07/10 et src/data/claude-facts.js : Cowork, ChatGPT Work et agents payés en
 * crédits, Agent Builder, Copilot Studio, Copilot Cowork, Workspace Studio,
 * compétences SKILL.md, MCP) ; plus de CaseStudyCards, de FounderNote ni de
 * « +1 500 » ; quatre missions citées en deux phrases avec lien vers leur ancre.
 */

const SLUG = 'agents-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = "Agents IA en entreprise : guide & 20 cas d'usage | Masteria"
const META_DESC = "Agents IA en entreprise : fonctionnement, 20 usages par service, outils au 7 octobre 2026 (Cowork, Copilot Studio, agents ChatGPT) et garde-fous."
const H1 = "Agents IA en entreprise : le guide complet et 20 cas d'usage concrets"
const KEYWORDS = "agents ia, agent ia, agents ia en entreprise, agent ia entreprise, agent intelligence artificielle, déployer un agent ia, agents autonomes, ia agentique"

const TOC = [
  { href: '#definition', label: 'Définition' },
  { href: '#fonctionnement', label: 'La boucle d\'un agent' },
  { href: '#cas-usage', label: 'Vingt usages par service' },
  { href: '#sur-mesure', label: 'Agents construits sur mesure' },
  { href: '#outils', label: 'Les outils au 7 octobre 2026' },
  { href: '#risques', label: 'Garde-fous' },
  { href: '#commencer', label: 'Premier agent' },
  { href: '#missions', label: 'Missions' },
  { href: '#faq', label: 'FAQ' },
]

const COMPARISON = [
  {
    icon: MessageSquare,
    title: 'Assistant IA',
    desc: "ChatGPT, Claude ou Gemini dans une conversation. Il répond, rédige, résume, puis s'arrête : c'est vous qui copiez le texte, l'envoyez et mettez à jour le logiciel. Chaque étape passe par vos mains.",
  },
  {
    icon: Workflow,
    title: 'Workflow automatisé',
    desc: "Un scénario n8n, Make ou Power Automate exécute une suite d'étapes écrite d'avance, dans un ordre immuable, dès qu'un déclencheur se produit. Il ne se trompe pas tant que la réalité ressemble au scénario, et bloque dès qu'elle s'en écarte.",
  },
  {
    icon: Bot,
    title: 'Agent IA',
    desc: "On lui donne un but ; il choisit les étapes : chercher dans une base, appeler un logiciel, rédiger, contrôler, recommencer. Il sait traiter le cas atypique, dans les limites et avec les validations que vous avez fixées.",
  },
]

/* Tableau comparatif Assistant IA / Agent IA / Workflow automatisé */
const TABLE_COLS = ['Assistant IA', 'Agent IA', 'Workflow automatisé']
const TABLE_ROWS = [
  {
    label: 'Point de départ',
    cells: [
      "Une demande tapée par quelqu'un",
      "Un but confié, un événement ou une heure programmée",
      "Un déclencheur prévu à l'avance",
    ],
  },
  {
    label: 'Qui choisit les étapes',
    cells: [
      "La personne, à chaque fois",
      "L'agent, dans un périmètre fixé",
      "Personne : l'ordre est figé",
    ],
  },
  {
    label: 'Logiciels touchés',
    cells: [
      "Aucun, sauf fichiers joints ou connecteurs en lecture",
      "CRM, ERP, messagerie, bases, par API ou MCP",
      "Ceux du scénario, pour des actions listées",
    ],
  },
  {
    label: 'Contrôle humain',
    cells: [
      "Sur chaque résultat",
      "Avant chaque action sensible",
      "Après coup, sur les exécutions",
    ],
  },
  {
    label: 'Exemple',
    cells: [
      "Rédiger une réponse à une réclamation",
      "Traiter une demande entrante et créer la fiche client",
      "Ranger chaque facture reçue dans le bon dossier",
    ],
  },
]

const LOOP_STEPS = [
  {
    num: '01',
    icon: Eye,
    title: 'Observer',
    desc: "L'agent rassemble ce qu'il lui faut : la demande, un mail, la fiche du client, un document, l'état d'une commande. Un contexte pauvre donne une décision pauvre.",
  },
  {
    num: '02',
    icon: Brain,
    title: 'Choisir',
    desc: "Le modèle de langage raisonne sur le but et décide du geste suivant : chercher, appeler un outil, écrire, ou poser une question à un humain quand il lui manque une information.",
  },
  {
    num: '03',
    icon: Zap,
    title: 'Agir',
    desc: "L'agent passe à l'acte par ses outils : requête dans une base, écriture dans le CRM, brouillon de mail, fichier modifié. Privé d'outils, il redevient un simple assistant.",
  },
  {
    num: '04',
    icon: RefreshCw,
    title: 'Contrôler',
    desc: "Il regarde le résultat, corrige au besoin, puis continue, recommence ou rend la main. La boucle tourne jusqu'au but ou jusqu'au point de validation prévu.",
  },
]

const USE_CASE_GROUPS = [
  {
    id: 'commercial',
    icon: Briefcase,
    label: 'Vente',
    cases: [
      {
        title: '1. Traiter les demandes entrantes',
        desc: "À chaque formulaire ou mail reçu, l'agent cherche l'entreprise, applique votre grille de qualification et crée la fiche dans le CRM avec un brouillon de réponse. Le commercial reprend un contact déjà documenté et classé.",
      },
      {
        title: '2. Relancer les devis restés sans réponse',
        desc: "L'agent repère chaque semaine les propositions sans retour, rédige une relance adaptée à l'historique du dossier et la soumet au commercial avant l'envoi. Le suivi ne dépend plus d'un tableur tenu à part.",
        link: { to: '/etudes-de-cas-ia#mission-franchise-gemini', label: 'Un réseau de franchise a préparé ce flux' },
      },
      {
        title: '3. Préparer un rendez-vous client',
        desc: "La veille, l'agent réunit l'historique du compte, les commandes en cours et l'actualité publique du client sur une page. Le commercial entre en réunion avec le contexte en tête.",
      },
    ],
  },
  {
    id: 'marketing',
    icon: Megaphone,
    label: 'Marketing',
    cases: [
      {
        title: '4. Surveiller la concurrence',
        desc: "Sur les sites, grilles tarifaires et communiqués que vous lui désignez, l'agent relève chaque semaine ce qui a bougé et l'envoie avec ses sources. L'équipe décide de ce qui mérite une réponse.",
      },
      {
        title: '5. Répondre aux avis en ligne',
        desc: "Chaque nouvel avis client est lu, une réponse est proposée dans le ton de la marque, et les avis négatifs remontent au responsable. Rien n'est publié sans un clic humain.",
      },
      {
        title: '6. Faire le bilan des campagnes',
        desc: "L'agent collecte les chiffres des plateformes publicitaires et de votre mesure d'audience, signale les écarts et rédige un bilan commenté. Le responsable marketing passe ses heures à arbitrer.",
      },
    ],
  },
  {
    id: 'rh',
    icon: Users,
    label: 'Ressources humaines',
    cases: [
      {
        title: '7. Présélectionner les candidatures',
        desc: "L'agent compare chaque dossier aux critères du poste et rédige une synthèse par candidat ; le recruteur décide. L'AI Act range ce tri parmi les usages « à haut risque » (annexe III), dont les obligations entreront en application le 2 décembre 2027 ; la supervision humaine doit être documentée.",
      },
      {
        title: "8. Organiser l'arrivée d'un salarié",
        desc: "Dès la signature, l'agent lance les demandes d'accès et de matériel, cale les rendez-vous de la première semaine et répond aux questions pratiques à partir du livret d'accueil. Les RH gardent l'accueil humain.",
      },
      {
        title: '9. Répondre aux questions RH courantes',
        desc: "Congés, mutuelle, frais : l'agent répond en s'appuyant sur vos accords et vos notes internes, et ouvre une demande au service RH dès que la situation sort des règles écrites.",
      },
    ],
  },
  {
    id: 'finance',
    icon: TrendingUp,
    label: 'Finance et administration',
    cases: [
      {
        title: '10. Saisir les factures fournisseurs',
        desc: "L'agent lit la facture, la rapproche de la commande et de la réception, prépare l'écriture et arrête tout ce qui cloche (montant inhabituel, doublon, fournisseur inconnu) pour un contrôle humain.",
      },
      {
        title: '11. Relancer les impayés',
        desc: "Les factures échues sont listées, le ton de la relance suit l'historique du client et votre procédure d'escalade. L'équipe valide chaque envoi et décide seule du passage au contentieux.",
      },
      {
        title: '12. Préparer le rapprochement bancaire',
        desc: "L'agent associe les lignes du relevé aux factures et aux paiements attendus, puis liste ce qui reste sans correspondance pour le comptable. La clôture démarre sur une liste courte.",
      },
    ],
  },
  {
    id: 'service-client',
    icon: Headphones,
    label: 'Service client',
    cases: [
      {
        title: '13. Traiter une demande simple de bout en bout',
        desc: "Où en est ma commande, pouvez-vous renvoyer ma facture, changer mon adresse : l'agent consulte vos systèmes, exécute le geste et répond. Il transmet le dossier à un conseiller dès que la demande dépasse ce cadre.",
      },
      {
        title: '14. Trier et router les tickets',
        desc: "À l'arrivée, l'agent identifie le sujet, l'urgence et l'humeur du client, ajoute le contexte du compte et envoie le ticket à la bonne équipe avec un résumé de trois lignes.",
      },
      {
        title: '15. Écouter la voix du client',
        desc: "Une fois par mois, l'agent passe en revue tickets, avis publics et réponses aux enquêtes, regroupe les plaintes qui reviennent et les classe par fréquence. Produit et qualité partent de tendances, plus d'anecdotes.",
      },
    ],
  },
  {
    id: 'it-dev',
    icon: Server,
    label: 'Informatique',
    cases: [
      {
        title: '16. Confier un ticket à un agent de code',
        desc: "Claude Code chez Anthropic ou Codex chez OpenAI lisent le dépôt, proposent la modification, écrivent les tests et ouvrent une demande de fusion. Un développeur relit avant d'accepter et garde la main sur l'architecture.",
        link: { to: '/formation-claude-ia', label: 'La formation Claude' },
      },
      {
        title: '17. Tenir le support informatique de premier niveau',
        desc: "Mot de passe oublié, droit d'accès, poste qui rame : l'agent applique vos procédures et transmet aux techniciens les cas qu'il ne résout pas, diagnostic déjà rédigé.",
      },
      {
        title: '18. Garder la documentation à jour',
        desc: "L'agent compare régulièrement la documentation au code, aux configurations et aux procédures, puis propose les corrections. L'équipe technique les accepte une à une.",
      },
    ],
  },
  {
    id: 'direction',
    icon: Target,
    label: 'Direction',
    cases: [
      {
        title: '19. Tenir une veille pour le comité de direction',
        desc: "Marché, réglementation, concurrents : sur un périmètre défini, l'agent produit à date fixe une note sourcée de deux pages. La direction lit l'essentiel au lieu de trier des dizaines d'alertes.",
      },
      {
        title: '20. Préparer un dossier à partir d\'un répertoire de fichiers',
        desc: "On désigne un dossier partagé et un but (préparer une session, un comité, un rendez-vous fournisseur) ; l'agent ouvre les fichiers, assemble le dossier et signale ce qui manque. C'est le terrain de Cowork, chez Anthropic comme chez Microsoft.",
        link: { to: '/etudes-de-cas-ia#mission-editeur-pole-formation', label: "Vu avec le pôle formation d'un éditeur" },
      },
    ],
  },
]

/* ItemList JSON-LD : les 20 usages (listicle, citation GEO). */
const useCaseItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "20 cas d'usage concrets des agents IA en entreprise",
  description: "Vingt usages des agents IA en entreprise, rangés par service : vente, marketing, ressources humaines, finance, service client, informatique, direction.",
  numberOfItems: 20,
  itemListElement: USE_CASE_GROUPS.flatMap(g => g.cases).map((uc, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: uc.title.replace(/^\d+\.\s*/, ''),
  })),
}

/* Fraîcheur et TechArticle (E-E-A-T, GEO) */
const PUBLISHED = '2026-06-12'
const UPDATED = '2026-10-07'

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
  keywords: "agent ia entreprise, agents ia d'entreprise, agent ia pour entreprise, ia agentique entreprise, cas d'usage agents ia, gouvernance agents ia, mcp, cowork, copilot studio",
  isAccessibleForFree: true,
}

/* Outils au 7 octobre 2026 (sources : fiche FAITS-OUTILS du 07/10, claude-facts.js vérifié le 05/10, comparisons.js) */
const TOOLS = [
  {
    icon: Sparkles,
    name: 'Claude : Cowork, Claude Code et les compétences (Anthropic)',
    desc: "Cowork vit dans l'application Claude depuis le 16 septembre 2026, ouvert en premier aux offres Pro et Max : il mène une tâche à partir d'un dossier et de vos applications connectées, et peut la refaire à date fixe. Claude Code, compris dès l'offre Pro, travaille dans le dépôt des développeurs. Les compétences (fichiers SKILL.md) et les connecteurs MCP complètent la panoplie.",
  },
  {
    icon: MessageSquare,
    name: "OpenAI : ChatGPT Work et les agents d'équipe",
    desc: "ChatGPT Work, sorti le 9 juillet 2026, pousse une tâche longue jusqu'au document final. Sur Business, Enterprise et Edu, ses « agents d'espace de travail » sont ouverts à tous les clients de ces offres depuis le 21 mai 2026 : on les décrit en phrases ordinaires, on les partage, on les programme, ils répondent dans Slack ou par API. OpenAI les facture à l'exécution, en crédits, depuis le 6 juillet 2026, dès que l'enveloppe comprise dans le siège est épuisée ; selon l'éditeur, une exécution ordinaire coûte de 5 à 25 crédits. Les GPTs personnalisés seront retirés le 11 décembre 2026 ; seuls les espaces Enterprise qui ont obtenu un report les gardent jusqu'au 11 février 2027. Leur contenu migre vers des plugins.",
  },
  {
    icon: LayoutGrid,
    name: 'Microsoft Copilot : Agent Builder, Copilot Studio et Cowork',
    desc: "Dans Microsoft Copilot, Agent Builder monte un agent simple à partir de consignes et de sources. Copilot Studio construit des agents métier en programmant peu ou pas : publiés dans Microsoft Copilot, ils sont compris dans la licence ; autonomes ou ouverts à l'extérieur, ils consomment des crédits, vendus 173,30 € HT par mois le pack de 25 000 ou à l'usage. Copilot Cowork, ouvert à tous les comptes professionnels et facturé à l'usage, rédige et envoie des mails, cale des réunions, produit des documents, accepte jusqu'à 50 compétences personnalisées et demande votre accord avant chaque action sensible.",
  },
  {
    icon: Cloud,
    name: 'Google : Workspace Studio, compétences Gemini et connecteurs MCP',
    desc: "Workspace Studio décrit en langage courant des flux qui relient Gmail, Drive et Chat ; ses plafonds d'usage s'appliqueront à partir du 1er novembre 2026. Les compétences Gemini, au format SKILL.md, arrivent dans Workspace depuis le 5 octobre 2026 et prennent la place des Gems. Depuis le 15 septembre, des connecteurs MCP relient Gemini à Asana, Atlassian Rovo, HubSpot, Monday ou Salesforce. Les agents plus lourds passent par Gemini Enterprise, une licence Google Cloud à part.",
  },
  {
    icon: Wind,
    name: 'Mistral : les Skills de Vibe',
    desc: "Chez Mistral, les Skills ont pris la place des agents de Vibe le 22 septembre 2026 : la recherche approfondie est devenue une compétence parmi d'autres, et une Knowledge Base a pris la place des mémoires. Par défaut, Mistral stocke les données dans l'Union européenne.",
  },
  {
    icon: Workflow,
    name: "n8n, Make, Power Automate : l'orchestration",
    desc: "Ces plateformes branchent les modèles sur vos logiciels et tiennent l'agent dans un cadre : déclencheur, étapes, points d'arrêt pour validation. Pour un premier déploiement, cette prévisibilité vaut souvent plus qu'une autonomie maximale.",
  },
]

const RISKS = [
  {
    icon: Lock,
    title: 'Des droits réduits au strict nécessaire',
    desc: "Lecture seule quand l'écriture ne sert à rien, accès limité aux données de la mission, plafonds sur les montants, les volumes et les destinataires. Le principe du moindre privilège, connu des informaticiens, vaut pour un agent comme pour un salarié.",
  },
  {
    icon: UserCheck,
    title: 'Un feu vert humain avant toute action qui engage',
    desc: "Mail à un client, paiement, signature, suppression de données, décision qui touche une personne : l'agent prépare, quelqu'un valide explicitement. Copilot Cowork applique cette règle par défaut en demandant l'accord avant chaque action sensible.",
  },
  {
    icon: ShieldCheck,
    title: 'Des données traitées comme chez un sous-traitant',
    desc: "Contrat avec l'éditeur sur l'usage des données, offre entreprise sans entraînement des modèles, hébergement connu, registre RGPD à jour, cloisonnement entre agents qui n'ont pas à se parler.",
  },
  {
    icon: ScrollText,
    title: 'Un journal de chaque action',
    desc: "Ce que l'agent a lu, décidé, exécuté, et qui a validé : ce journal sert à corriger une erreur, à répondre à un audit et à gagner la confiance des équipes.",
  },
  {
    icon: Scale,
    title: "Un classement des agents au regard de l'AI Act",
    desc: "L'article 50, applicable depuis le 2 août 2026, oblige un agent qui dialogue avec le public à se présenter comme une IA. Les usages de l'annexe III, comme le recrutement, seront soumis aux règles « haut risque » le 2 décembre 2027, date fixée par l'Omnibus. Tenir la liste de vos agents et de leurs usages devient la première tâche de conformité.",
    link: { to: '/audit-conformite-ai-act', label: "Faire vérifier la conformité de vos agents" },
  },
]

const START_STEPS = [
  {
    num: 1,
    title: 'Choisir la tâche pilote',
    desc: "Une tâche fréquente, écrite quelque part, aux règles nettes, dont une erreur se rattrape : tri des demandes, saisie de factures, relance de devis. Laissez de côté pour l'instant les processus critiques ou mal définis.",
  },
  {
    num: 2,
    title: 'Lancer un agent sous surveillance',
    desc: "Droits minimaux, validation humaine sur chaque action vers l'extérieur. Les premières semaines servent à corriger les consignes sur des dossiers ordinaires et à installer la confiance.",
  },
  {
    num: 3,
    title: 'Relever trois chiffres',
    desc: "Le temps rendu à l'équipe, la part des résultats à reprendre, la part des dossiers renvoyés à un humain. Ces relevés décident de la suite : étendre, corriger ou arrêter.",
  },
  {
    num: 4,
    title: 'Desserrer la bride pas à pas',
    desc: "On élargit le périmètre du premier agent, puis on reproduit la méthode sur une deuxième tâche. L'agent gagne en autonomie à mesure que ses relevés le permettent, jamais avant.",
  },
]

const BUILD_STEPS = [
  {
    icon: Compass,
    title: 'Cadrer la mission',
    desc: "Nous choisissons la tâche, écrivons le but de l'agent, ses droits et ses points de validation. Le schéma d'ensemble est arrêté avant le premier réglage.",
  },
  {
    icon: Cog,
    title: "Construire l'agent",
    desc: "Modèle, consignes, compétences, outils, garde-fous : l'agent suit vos règles métier, testées sur vos dossiers. Le choix de la plateforme dépend de votre environnement, pas de nos préférences.",
  },
  {
    icon: Plug,
    title: 'Le brancher sur vos logiciels',
    desc: "CRM, ERP, outil de support, partage de fichiers : nous relions l'agent par MCP ou par les API de vos éditeurs, avec des droits limités et un journal de chaque action.",
  },
  {
    icon: Rocket,
    title: 'Le mettre en service sous surveillance',
    desc: "Démarrage avec validation humaine, relevé des erreurs et des renvois, documentation et passation à votre référent. L'autonomie s'élargit sur preuve.",
  },
]

/* Quatre missions où des assistants préparent et où des humains valident (faits : etudes-de-cas.js, missions-formation.js) */
const MISSIONS = [
  {
    href: '/etudes-de-cas-ia#photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · équipe de trois',
    text: "Le diagnostic de septembre 2026 a retenu trois assistants autour d'Odoo : demandes de prix aux transporteurs, saisie des arrivages de l'entrepôt, devis et relances. Chacun prépare, une personne valide ; leur construction précède deux jours de formation sur site prévus en octobre 2026.",
  },
  {
    href: '/etudes-de-cas-ia#mission-editeur-pole-formation',
    icon: GraduationCap,
    sector: 'Équipe pédagogique · éditeur B2B',
    text: "En septembre 2026, trois personnes de ce pôle ont délégué à Cowork tout le travail préparatoire d'une session de formation et tiré un reporting de leur tableau de suivi. Deux compétences, ouvertes à tous les salariés de l'éditeur, servent désormais à ses supports et à l'administratif des sessions.",
  },
  {
    href: '/etudes-de-cas-ia#mission-assistanat-direction',
    icon: Mail,
    sector: 'Assistanat de direction · éditeur B2B',
    text: "Une assistante de direction a construit dans Agent Builder un assistant « mail dirigeant ». Une règle de tri décide quel outil reçoit quelle donnée : ce qui est interne ou nominatif va dans Copilot, ce qui est public ou anonymisé peut aller dans Claude.",
  },
  {
    href: '/etudes-de-cas-ia#mission-franchise-gemini',
    icon: Store,
    sector: 'Siège d\'un réseau de franchise',
    text: "Huit membres de la direction ont monté avec Workspace Studio un flux qui rassemble chaque semaine les devis restés sans retour et en prépare la relance ; il attend d'être activé. Ses deux administrateurs ont cadré la console et la charte d'usage.",
  },
]

const NEXT_STEPS = [
  {
    to: '/agence-developpement-ia',
    tag: 'Construction',
    title: 'Agence de développement IA',
    desc: "Conception, développement et intégration de vos agents, puis passation à votre équipe.",
  },
  {
    to: '/outils-ia-sur-mesure',
    tag: 'Applications',
    title: 'Outils IA sur mesure',
    desc: "Quand le besoin dépasse un agent : une application interne pilotée par l'IA, taillée pour votre métier.",
  },
  {
    to: '/solutions-ia',
    tag: 'Catalogue',
    title: 'Toutes nos solutions IA',
    desc: "Agents commerciaux, support client, assistants documentaires : les solutions types que nous adaptons.",
  },
]

const FAQ = [
  {
    q: "Agent IA ou chatbot : qu'est-ce qui les sépare ?",
    aStrong: "Un chatbot converse ; un agent IA agit dans vos logiciels pour mener une tâche jusqu'au bout.",
    aRest: "Le chatbot informe, oriente, rédige, sans quitter la fenêtre de discussion. L'agent ouvre le CRM, met à jour un dossier, prépare un envoi, contrôle le résultat. Beaucoup de services client combinent les deux : la conversation en façade, l'agent derrière pour exécuter le geste demandé.",
  },
  {
    q: 'Un agent IA peut-il travailler sans supervision ?',
    aStrong: "Sur une tâche étroite, réversible et peu risquée, oui ; dans la plupart des entreprises, une validation humaine reste en place sur les actions qui comptent.",
    aRest: "L'autonomie se gagne sur preuve. On démarre sous surveillance, on relève les erreurs et les renvois, puis on élargit, action par action, là où l'agent a montré qu'il était fiable. Les outils du marché vont dans ce sens : Copilot Cowork demande votre accord avant chaque action sensible.",
  },
  {
    q: "Qu'est-ce que l'IA agentique ?",
    aStrong: "On appelle IA agentique les systèmes capables de poursuivre un but par eux-mêmes : planifier des étapes, utiliser des outils, juger leurs résultats, ajuster leur route.",
    aRest: "Le mot sert à les distinguer des assistants qui se contentent de répondre. En entreprise, une IA agentique réunit un modèle de langage, des branchements vers les logiciels (souvent par MCP) et des règles de validation. Notre glossaire de l'IA en donne les définitions voisines.",
  },
  {
    q: "Combien coûte le déploiement d'un agent IA ?",
    aStrong: "Deux postes : l'usage de la plateforme (licences, crédits ou consommation d'API) et les heures d'ingénierie (cadrage, construction, branchements, formation).",
    aRest: "Côté plateforme, les agents se paient désormais à l'exécution chez plusieurs éditeurs : crédits chez OpenAI depuis le 6 juillet 2026, crédits Copilot Studio à 173,30 € HT les 25 000 par mois, Copilot Cowork à l'usage. Côté mise en œuvre, Masteria chiffre au forfait après cadrage : un prototype coûte quelques milliers d'euros, une à plusieurs dizaines de milliers d'euros quand l'agent est branché sur vos logiciels et mis en service, plus de 100 000 € quand il se déploie sur plusieurs sites.",
  },
  {
    q: "Quels sont les risques d'un agent IA en entreprise ?",
    aStrong: "Une action mal exécutée, une action hors de son périmètre, une donnée sensible qui sort, une obligation légale ignorée.",
    aRest: "Chacun a sa parade : droits minimaux, validation humaine avant ce qui engage, offre entreprise et registre RGPD, journal de chaque action, liste des agents classés selon l'AI Act. Sans ces garde-fous, l'agent est un risque opérationnel ; avec eux, il devient un outil de travail qu'on peut auditer.",
  },
  {
    q: 'Quelles compétences faut-il en interne pour déployer des agents IA ?',
    aStrong: "Trois rôles suffisent pour commencer : la personne qui connaît la tâche par cœur, une personne formée au réglage des agents, et un référent qui suit les résultats et la conformité.",
    aRest: "Aucun ne demande un profil de data scientist. La connaissance du métier compte davantage que la technique : un agent posé sur une tâche floue échoue quel que soit l'outil. Beaucoup d'entreprises confient la construction et les branchements à une équipe spécialisée et gardent en interne le pilotage. Notre formation agents IA prépare ce référent.",
  },
  {
    q: "Comment créer un agent IA pour son entreprise ?",
    aStrong: "Il faut un but étroit et écrit, un modèle de langage pour raisonner, des branchements vers vos logiciels et des règles de validation.",
    aRest: "Pour un agent simple, Agent Builder chez Microsoft, les agents d'équipe de ChatGPT ou Cowork chez Anthropic se configurent sans programmer. Dès qu'il faut écrire dans un ERP ou enchaîner plusieurs logiciels, Copilot Studio, n8n ou un développement sur mesure prennent le relais. Dans tous les cas, on part d'une tâche pilote et on élargit à mesure des relevés.",
  },
  {
    q: "Les agents IA font-ils gagner du temps ?",
    aStrong: "Oui, sur les tâches fréquentes et répétitives, à condition de compter aussi le temps passé à relire et à corriger.",
    aRest: "Le gain varie avec le volume de dossiers, la propreté des données et la part de validation conservée. Il se mesure avant et après : temps passé par dossier, part des résultats repris, volume traité à effectif égal. Nous ne donnons aucun pourcentage d'avance : quelques semaines de pilote sur vos dossiers disent ce qu'il en est chez vous.",
  },
  {
    q: "Un agent IA peut-il exploiter mes données commerciales ?",
    aStrong: "Oui : branché sur le CRM et la messagerie, un agent lit, complète et met à jour vos fiches pour qualifier une demande, préparer un rendez-vous ou relancer un devis.",
    aRest: "Cet accès se limite au nécessaire : droits réduits, agents cloisonnés, journal des actions, contrat avec l'éditeur sur l'usage des données. Les données commerciales nominatives relèvent du RGPD comme chez n'importe quel sous-traitant ; on fixe ce cadre avant tout essai.",
  },
]

/* Sources citées par la page (WebPage.citation et liens visibles). */
const PAGE_CITATIONS = [
  { name: "Annonce d'Anthropic du 9 décembre 2025 : MCP rejoint une fondation ouverte", url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation' },
  { name: "OpenAI : les agents d'espace de travail de ChatGPT Business et Enterprise", url: 'https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business' },
  { name: 'Microsoft Learn : documentation de Copilot Cowork', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/' },
  { name: 'Microsoft : Copilot Studio et ses crédits, page France', url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio' },
  { name: "AI Act : règlement (UE) 2024/1689 sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Omnibus : règlement (UE) 2026/1744, qui décale l'échéance du haut risque", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
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
    { name: 'Agence IA', slug: 'agence-ia' },
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
        citations={PAGE_CITATIONS}
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
            <Link to="/agence-ia" style={{ color: '#5B6679' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Agents IA en entreprise</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              IA agentique · guide pratique
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Agents IA en entreprise :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le guide complet et 20 cas d'usage concrets</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié et fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Guide tenu par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · outils et prix vérifiés le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un agent IA mène une tâche entière dans vos logiciels au lieu de se contenter de répondre : <strong style={{ color: '#fff', fontWeight: 700 }}>traiter une demande entrante, saisir une facture, régler un ticket, corriger du code</strong>, avec une personne qui valide ce qui engage.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Vous trouverez ici la définition, la mécanique d'un agent, vingt usages rangés par service, les outils disponibles au 7 octobre 2026 avec leur mode de facturation, et les garde-fous à poser avant le premier déploiement.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#cas-usage" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les vingt usages
            </a>
          </div>
        </div>
      </section>

      {/* ── Sommaire ── */}
      <section style={{ padding: 'clamp(36px, 5vw, 52px) 24px', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ ...cardStyle, padding: '22px 26px' }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>Au programme</p>
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

      {/* ── 1. DÉFINITION (ancre sombre) ── */}
      <section id="definition" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Définition</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Un agent IA reçoit un but et choisit lui-même ses actions</h2>

          {/* GEO : réponse directe citable, encadré distinctif */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '26px 30px', margin: '24px 0 32px', maxWidth: 860 }}>
            <p style={{ fontSize: 17, lineHeight: 1.75, margin: 0, color: '#E2E8F0' }}>
              <strong style={{ color: '#fff' }}>Un agent IA est un programme qui observe une situation, décide d'une suite d'actions et les exécute avec des outils (logiciels métier, bases de données, API) pour atteindre un but fixé par une personne. Un assistant conversationnel produit une réponse ; un agent produit un résultat, en plusieurs étapes, sans qu'on le guide à chacune.</strong>
            </p>
          </div>

          <p style={{ ...pStyle, color: '#B4C0D3' }}>
            Prenez la consigne « traite cette demande et crée la fiche dans le CRM ». L'agent lit le message, cherche ce qu'il sait du demandeur, décide des champs à remplir, écrit dans le logiciel, puis vérifie que la fiche est complète. Le grand modèle de langage (LLM) lui sert de cerveau ; les branchements vers vos logiciels lui servent de mains. Le mot « agentique » désigne cette façon de faire travailler l'IA.
          </p>
          <p style={{ ...pStyle, color: '#B4C0D3' }}>
            Dans ce guide, un agent d'entreprise est relié aux logiciels de l'organisation et soumis à ses règles de sécurité. Deux notions voisines prêtent à confusion ; les distinguer aide à choisir l'outil et à mesurer le risque.
          </p>

          <h3 style={{ ...h3Style, color: '#F8FAFC', fontSize: 22, margin: '40px 0 24px' }}>Assistant, workflow, agent : trois façons de confier du travail</h3>
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

          {/* Tableau comparatif */}
          <h3 style={{ ...h3Style, color: '#F8FAFC', fontSize: 22, margin: '48px 0 12px' }}>Assistant IA, agent IA, workflow automatisé : le tableau</h3>
          <p style={{ ...pStyle, color: '#B4C0D3', marginBottom: 24 }}>
            Cinq lignes suffisent pour choisir : d'où part le travail, qui décide des étapes, quels logiciels sont touchés, où se place le contrôle.
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
            Sur le terrain, les trois se mêlent. Un déploiement typique de 2026 glisse un agent dans un workflow : le scénario tient le déroulé, l'agent traite l'étape qui demande du jugement. Notre <Link to="/automatisation-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>guide de l'automatisation IA</Link> décrit ces montages ; le glossaire définit l'<Link to="/glossaire-ia#agent-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>agent IA</Link> et le <Link to="/glossaire-ia#workflow-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>workflow IA</Link>.
          </p>
        </div>
      </section>

      {/* ── 2. FONCTIONNEMENT (éditorial asymétrique) ── */}
      <section id="fonctionnement" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Fonctionnement</Kicker>
              <h2 style={h2Style}>Tout agent IA tourne sur la même boucle en quatre temps</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong style={{ color: '#0A0A0A' }}>Observer, choisir, agir, contrôler : l'agent recommence cette boucle jusqu'à atteindre son but ou un point de validation humaine.</strong> Le modèle de langage choisit ; les outils branchés exécutent.
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Quel que soit l'éditeur, la mécanique reste celle-ci. La connaître suffit pour cadrer un projet, discuter avec un intégrateur et repérer les promesses trop belles.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20, marginBottom: 44 }}>
                {LOOP_STEPS.map(step => (
                  <div key={step.num} style={{ ...cardStyle, padding: 26 }}>
                    <IconTile icon={step.icon} />
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: c, margin: '18px 0 4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Temps {step.num}</div>
                    <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ ...h3Style, fontSize: 20, marginBottom: 12 }}>Les branchements : le rôle de MCP</h3>
              <p style={{ ...pStyle, maxWidth: 'none' }}>
                Pour agir, l'agent demande l'exécution d'une fonction précise (créer une fiche, lire une commande) avec des paramètres structurés, et reçoit la réponse : c'est le <Link to="/glossaire-ia#function-calling" style={linkStyle}>function calling, ou appel d'outil</Link>. Le <Link to="/glossaire-ia#mcp" style={linkStyle}>Model Context Protocol (MCP)</Link>, standard ouvert publié par Anthropic fin 2024 puis remis le 9 décembre 2025 à une fondation indépendante, l'Agentic AI Foundation, normalise ces branchements. ChatGPT, Gemini et Microsoft Copilot (anciennement Microsoft 365 Copilot) l'ont adopté : un connecteur MCP écrit une fois sert à plusieurs agents, quel que soit le modèle.
              </p>

              <h3 style={{ ...h3Style, fontSize: 20, marginBottom: 12 }}>Les compétences : une procédure écrite une fois</h3>
              <p style={{ ...pStyle, maxWidth: 'none' }}>
                Une compétence (skill) est un dossier contenant un fichier SKILL.md : la procédure, les exemples, parfois un script. L'agent la charge quand la tâche s'y prête. Anthropic a publié ce format en standard ouvert le 18 décembre 2025 ; Google l'a repris pour remplacer les Gems à partir du 5 octobre 2026, Microsoft l'utilise dans Cowork, OpenAI dans ses plugins et Mistral dans les Skills de Vibe. Pour une entreprise, cela veut dire qu'une procédure bien écrite survit à un changement d'outil.
              </p>

              <h3 style={{ ...h3Style, fontSize: 20, marginBottom: 12 }}>La place de l'humain</h3>
              <p style={{ ...pStyle, maxWidth: 'none', marginBottom: 0 }}>
                Un agent sérieux prévoit des points de contrôle humains, ce que les spécialistes appellent l'<Link to="/glossaire-ia#humain-dans-la-boucle" style={linkStyle}>humain dans la boucle</Link>. Trois réglages existent : une personne valide chaque action, elle valide seulement les actions sensibles (envoi, paiement, suppression), ou elle contrôle après coup sur échantillon. Chez nos clients, en octobre 2026, la plupart des agents tournent avec le deuxième réglage. La supervision humaine fait partie des principes de l'<Link to="/ia-responsable" style={linkStyle}>IA responsable</Link>, aux côtés de la transparence et de la traçabilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. LES 20 CAS D'USAGE ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Kicker>Vingt usages</Kicker>
          <h2 style={h2Style}>Vingt cas d'usage concrets des agents IA, service par service</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Les agents les plus répandus traitent les demandes entrantes, saisissent les factures, règlent les demandes simples des clients, écrivent du code et tiennent une veille.</strong> Tous travaillent sur des tâches fréquentes et documentées, préparent le travail, et laissent à une personne la validation de ce qui engage.
          </p>
          <p style={pStyle}>
            Chaque usage suppose un agent relié aux logiciels concernés et suivi par l'équipe métier. Aucun gain n'est chiffré : tout tient au nombre de dossiers, à la propreté des données et à la part de validation conservée. Pour les usages qui se passent d'agent (rédaction, synthèse, analyse de fichiers), voyez notre <Link to="/cas-usage-ia-entreprise" style={linkStyle}>panorama des cas d'usage, service après service</Link>.
          </p>

          {/* Aperçu scannable des 20 usages */}
          <div style={{ ...cardStyle, padding: '24px 28px', margin: '8px 0 0', background: '#F9FAFB' }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>La liste complète</p>
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

      {/* ── AGENTS SUR MESURE (service, sombre) ── */}
      <section id="sur-mesure" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', color: '#fff', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>
            Construits pour vous
          </div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 38px)', fontWeight: 900, color: '#fff', margin: '0 0 18px', lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: 820 }}>
            Masteria construit vos agents IA sur mesure
          </h2>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '22px 26px', margin: '0 0 28px', maxWidth: 860 }}>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, margin: 0, color: '#E2E8F0' }}>
              <strong style={{ color: '#fff' }}>Vous pouvez nous confier l'agent de bout en bout : cadrage de la tâche, construction, branchement sur vos logiciels par MCP ou par API, mise en service sous surveillance. Vous repartez avec un agent qui travaille dans vos outils, encadré par des garde-fous, et qui vous appartient.</strong>
            </p>
          </div>

          <p style={{ fontSize: 16, color: '#B4C0D3', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 760 }}>
            Les vingt usages ci-dessus disent ce qu'un agent peut faire. Les faire tourner chez vous demande du travail d'ingénieur : relier les systèmes, fiabiliser les décisions, borner les actions, tout journaliser, situer chaque agent dans les catégories de l'AI Act. Nous chiffrons ce travail au forfait après cadrage ; notre page sur le <Link to="/prix-projet-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>prix d'un agent IA</Link> détaille les postes.
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
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '15px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)' }}>
              Notre agence de développement IA
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Si le besoin dépasse un agent et appelle une vraie application interne, nous développons aussi des <Link to="/outils-ia-sur-mesure" style={{ color: '#93C5FD', fontWeight: 600 }}>outils IA sur mesure</Link>. Et si vos équipes veulent construire et surveiller elles-mêmes leurs agents, notre <Link to="/formation-agents-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>formation agents IA</Link> leur en donne les moyens en deux jours.
          </p>
        </div>
      </section>

      {/* ── CTA MILIEU ── */}
      <section style={{ padding: '56px 24px', background: c }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 380px' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#fff', margin: '0 0 8px', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
              L'un de ces vingt usages ressemble à votre semaine ?
            </h2>
            <p style={{ fontSize: 15, color: cLight, margin: 0, lineHeight: 1.65 }}>
              Trente minutes offertes pour en parler · un avis franc : agent, workflow ou simple assistant
            </p>
          </div>
          <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: c, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Prendre rendez-vous
            <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── 4. OUTILS AU 7 OCTOBRE 2026 ── */}
      <section id="outils" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Kicker>Outils au 7 octobre 2026</Kicker>
          <h2 style={h2Style}>Six familles d'outils pour bâtir des agents, chacune avec son mode de facturation</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Claude avec Cowork et Claude Code, ChatGPT avec ses agents d'équipe, Microsoft avec Agent Builder, Copilot Studio et Copilot Cowork, Google avec Workspace Studio, Mistral avec les Skills de Vibe, et les orchestrateurs comme n8n.</strong> Votre système d'information, les compétences de vos équipes et le degré d'autonomie visé départagent ces options.
          </p>
          <p style={pStyle}>
            Le paysage bouge chaque mois : depuis l'été 2026, presque tous les éditeurs facturent l'exécution des agents en crédits ou à l'usage, en plus du siège. Ces six fiches datent du 7 octobre 2026 ; nous les revoyons à chaque annonce d'éditeur.
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
            Les plateformes d'orchestration reposent sur un <Link to="/glossaire-ia#orchestrateur" style={linkStyle}>orchestrateur</Link> qui coordonne modèles et logiciels. Pour comparer forces et limites outil par outil, lisez notre guide du <Link to="/meilleur-agent-ia" style={linkStyle}>meilleur agent IA</Link>.
          </p>
        </div>
      </section>

      {/* ── 5. GARDE-FOUS (éditorial asymétrique) ── */}
      <section id="risques" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Garde-fous</Kicker>
              <h2 style={h2Style}>Cinq garde-fous rendent un agent IA sûr</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong style={{ color: '#0A0A0A' }}>Des droits minimaux, un feu vert humain avant toute action qui engage, des données traitées comme chez un sous-traitant, un journal de chaque action et un recensement des agents au regard de l'AI Act.</strong> Posés dès le pilote, ils transforment un risque opérationnel en outil qu'on peut auditer.
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Donner des mains à une IA change la nature du risque : une erreur ne reste plus dans une fenêtre de discussion, elle part dans vos systèmes. Le cadre d'ensemble relève de la <Link to="/gouvernance-ia" style={linkStyle}>gouvernance de l'IA</Link>.
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

      {/* ── 6. PREMIER AGENT ── */}
      <section id="commencer" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={h2Style}>Un premier agent se déploie en quatre étapes</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Choisir une tâche pilote fréquente et rattrapable, lancer l'agent sous surveillance, relever trois chiffres pendant quelques semaines, puis desserrer la bride pas à pas.</strong> L'autonomie suit les preuves, jamais l'inverse.
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
            Masteria conçoit, construit et met en service des agents sur mesure, comme décrit plus haut. Le cabinet, créé à Lyon en 2022, travaille pour des clients français et étrangers, jusqu'aux États-Unis et en Inde. Notre <Link to="/agence-ia" style={linkStyle}>agence IA</Link> présente l'ensemble de nos services ; le <Link to="/diagnostic-ia" style={linkStyle}>Diagnostic IA</Link>, intervention courte dont la durée se fixe au cadrage, désigne le premier agent à construire chez vous. Vos équipes peuvent se former en parallèle.
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
                    Voir cette page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSIONS (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Kicker>Missions 2026</Kicker>
          <h2 style={h2Style}>Quatre clients où l'assistant prépare et la personne valide</h2>
          <p style={pStyle}>
            Cowork, Agent Builder, Workspace Studio, assistants autour d'un ERP : ces quatre missions anonymes montrent des premiers pas agentiques tenus par des règles simples.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20 }}>
            {MISSIONS.map(({ href, icon: Icon, sector, text }) => (
              <article key={href} style={{ ...cardStyle, borderTop: `3px solid ${c}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={href} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Le récit de la mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ (éditorial asymétrique) ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Neuf questions sur les agents IA en entreprise</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre question porte sur un agent précis ? Décrivez-le, nous vous répondons sous 24 heures.
              </p>
              <Link to="/contact?type=projet" style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Décrire mon agent
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

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Les agents sont le sujet qui a le plus changé en 2026 : Cowork chez Anthropic puis chez Microsoft, les agents de ChatGPT désormais payés en crédits, la fin annoncée des GPTs et des Gems au profit des compétences. Je mets ce guide à jour à chaque annonce qui touche nos clients ; cette version date du 7 octobre 2026. Mon parcours est sur <Link to="/mathias-nizan" style={linkStyle}>ma page de fondateur</Link>.
          </p>
          <p style={{ fontSize: 14, color: '#6B7280', margin: 0, fontWeight: 600 }}>Mathias Nizan, fondateur de Masteria</p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ padding: 'clamp(24px, 4vw, 48px) 24px clamp(64px, 9vw, 110px)', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
            <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>30 minutes de cadrage offertes</div>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, color: '#fff', margin: '0 0 16px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Quelle tâche confieriez-vous à votre premier agent ?
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 560 }}>
                Décrivez-la, avec les logiciels qu'elle traverse. Au bout de trente minutes, vous saurez ce qui convient le mieux : un agent, un scénario automatisé, ou un assistant bien réglé et une équipe formée.
              </p>
              <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 28 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
                Visio ou téléphone · aucun éditeur à placer · agents construits en France pour des équipes du monde entier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui construit les agents ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui construit vos agents</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des développeurs et des consultants réunis autour de votre tâche
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Mathias Nizan dirige chaque projet d'agent. Il mobilise, selon la mission, quelques-uns des cinq développeurs IA environ et de la dizaine de consultants du réseau Masteria, tous indépendants, et les formateurs quand vos équipes doivent prendre le relais. Aucun éditeur ne nous rémunère : la plateforme retenue est celle qui convient à votre système. Les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en témoignent.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['MCP', 'et API pour brancher vos logiciels'],
              ['6', "familles d'outils suivies chaque mois"],
              ['2022', 'premiers projets du cabinet, à Lyon'],
              ['3', 'continents où nous intervenons'],
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
