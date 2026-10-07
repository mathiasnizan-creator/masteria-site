import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, LayoutGrid, Megaphone, Briefcase, Headphones, Users, Calculator,
  Scale, Truck, Building2, Workflow, Bot, Database, FileSearch, PenLine, Network,
  Compass, ListChecks, Sparkles, Target, ShieldCheck, RefreshCw, TrendingUp,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page PILIER informationnel « cas d'usage IA en entreprise » (slug /cas-usage-ia-entreprise).
 * Intention top-funnel : panorama d'usages organisés par FONCTION puis par TYPE de solution.
 * Ne se positionne PAS en tête « agence / conseil » : elle maille vers les money pages
 * (/solutions-ia, /agents-ia-entreprise, /automatisation-ia, /agence-automatisation-ia,
 * /ia-secteurs, /copilote-ia-interne, /assistant-documentaire-ia, /integration-llm-rag,
 * /diagnostic-ia).
 * Mots-clés : cas d'usage ia entreprise, exemples ia entreprise, applications ia en entreprise,
 * cas concrets ia entreprise, exemples d'utilisation de l'ia en entreprise.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : vingt-quatre usages par fonction,
 * distincts des vingt cas de /agents-ia-entreprise ; aucun chiffre de gain (ni pourcentage,
 * ni heures) ; plus de statistique Gartner, de CaseStudyCards ni de FounderNote. Les usages
 * tirés de missions renvoient à l'ancre de leur mission sur /etudes-de-cas-ia (faits de
 * src/data/etudes-de-cas.js et missions-formation.js ; ce qui est à venir s'écrit au futur).
 */

const SLUG = 'cas-usage-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = "Cas d'usage de l'IA en entreprise | Masteria"
const META_DESC = "Cas d'usage de l'IA en entreprise : 30 exemples par service (marketing, vente, RH, finance, juridique, direction) et par type d'outil, sans gain inventé."

const H1_LINE1 = "Cas d'usage de l'IA en entreprise"
const H1_LINE2 = "trente exemples, service par service"

const KEYWORDS = "cas d'usage ia entreprise, exemples ia entreprise, applications ia en entreprise, cas concrets ia entreprise, cas d'usage intelligence artificielle entreprise, exemples d'utilisation de l'ia en entreprise"

const PUBLISHED = '2026-06-15'
const UPDATED = '2026-10-07'

/* ───────── Sommaire (TOC ancré) ───────── */

const TOC = [
  { href: '#par-fonction', label: 'Vingt-quatre usages par service' },
  { href: '#par-type', label: 'Six types de solution' },
  { href: '#du-cas-a-la-mise-en-oeuvre', label: "De l'idée à l'usage installé" },
  { href: '#choisir', label: 'Le premier usage à choisir' },
  { href: '#origine', label: "D'où viennent ces exemples" },
  { href: '#faq', label: 'FAQ' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Contenu', value: "Trente usages de l'IA décrits par ce que l'outil fait et ce que l'équipe y gagne, sans pourcentage ni promesse chiffrée" },
  { label: 'Services', value: "Marketing, vente, service client, ressources humaines, finance, juridique, opérations, direction et assistanat" },
  { label: 'Solutions', value: "Assistants et compétences, automatisations, agents, recherche dans vos documents, branchements sur vos logiciels, production de fichiers" },
  { label: 'Origine', value: "Une partie vient de missions menées par Masteria en 2026, signalées par un lien vers leur récit" },
  { label: 'Méthode', value: "Un usage se teste sur une équipe et sur ses propres fichiers, se mesure, puis s'étend" },
  { label: 'Outils', value: "Indifférents ici : la plupart de ces usages tournent dans Claude, Gemini, ChatGPT, Vibe ou Microsoft Copilot" },
]

/* ───────── Usages par FONCTION (8 services, 24 usages) ───────── */

const FUNCTION_GROUPS = [
  {
    id: 'marketing',
    icon: Megaphone,
    label: 'Marketing et communication',
    cases: [
      {
        title: 'Écrire la voix de marque une seule fois, pour tous',
        desc: "Le ton, les mots à employer et ceux à proscrire, des textes validés en exemple : tout tient dans un assistant de service que chacun consulte avant d'écrire. Les textes déclinés en anglais ou pour un salon gardent la même signature.",
        gain: "Personne ne réécrit plus le texte d'un collègue pour le remettre dans le ton.",
        link: { to: '/etudes-de-cas-ia#mission-interprofession-agricole', label: 'Vu en mission dans une interprofession agricole' },
      },
      {
        title: 'Bâtir une page pour le référencement et son calendrier',
        desc: "À partir des requêtes visées et de vos contenus existants, l'outil propose la structure d'une page, ses intertitres et un calendrier de publication. Le rédacteur vérifie les faits et ajoute ce que seul le terrain connaît.",
        gain: "Le rédacteur consacre ses heures aux exemples et aux preuves, la charpente étant posée.",
      },
      {
        title: 'Essayer plusieurs accroches avant une campagne',
        desc: "Pour un même message, l'IA rédige des variantes d'objet de mail, de titre d'annonce ou de texte de visuel, adaptées à chaque cible. L'équipe retient celles qui partent en test et garde la main sur la promesse faite au client.",
        gain: "Une campagne testée sous plusieurs angles sans multiplier les heures de rédaction.",
      },
    ],
  },
  {
    id: 'commercial',
    icon: Briefcase,
    label: 'Vente et avant-vente',
    cases: [
      {
        title: 'Préparer une cotation à partir du courriel reçu',
        desc: "Le courriel de demande est lu, les références reconnues dans la base articles, les quantités reportées dans la trame de cotation. Le commercial contrôle prix et délais avant l'envoi.",
        gain: "Moins de ressaisie entre la boîte mail et le logiciel de devis, des réponses qui partent plus tôt.",
        link: { to: '/etudes-de-cas-ia#distribution', label: 'Vu chez un distributeur IT de 58 salariés' },
      },
      {
        title: "Répondre à un appel d'offres",
        desc: "L'assistant décortique le dossier de consultation (ce qui est exigé, comment les offres seront notées, ce que l'acheteur attend sans l'écrire), propose un plan de mémoire et rédige les parties récurrentes au style de la maison. Le chargé d'affaires garde la stratégie de réponse et le prix.",
        gain: "Le temps de mise en forme se reporte sur la compréhension du besoin de l'acheteur.",
        link: { to: '/etudes-de-cas-ia#conseil-financier', label: 'Vu en mission dans un cabinet de conseil financier' },
      },
      {
        title: 'Tenir le CRM à jour après chaque échange',
        desc: "Les notes prises pendant un rendez-vous, ou dictées en sortant, deviennent une fiche rangée : besoin exprimé, interlocuteurs, prochaine étape, date de rappel. Le commercial relit avant l'enregistrement.",
        gain: "Un historique client complet, sans séance de saisie en fin de semaine.",
      },
    ],
  },
  {
    id: 'support',
    icon: Headphones,
    label: 'Service client',
    cases: [
      {
        title: 'Rédiger la réponse à une réclamation',
        desc: "L'IA lit la réclamation, le dossier de commande et votre politique de geste commercial, puis propose une réponse courtoise qui cite les éléments vérifiés. Le conseiller choisit le geste et signe.",
        gain: "Des réponses homogènes d'un conseiller à l'autre, y compris sur les dossiers tendus.",
      },
      {
        title: 'Nourrir la base de réponses avec les tickets résolus',
        desc: "Chaque semaine, les tickets clos sont relus pour en tirer de nouvelles questions-réponses ou corriger les fiches périmées. Le responsable du support valide avant publication.",
        gain: "Une base de connaissances qui colle aux questions des clients du moment.",
      },
      {
        title: 'Servir les clients étrangers dans leur langue',
        desc: "Une demande reçue en allemand, en espagnol ou en anglais est traduite, la réponse se prépare en français puis repart dans la langue du client. Un relecteur bilingue contrôle les envois sensibles.",
        gain: "L'export ne dépend plus des deux personnes de l'équipe qui parlent la langue.",
      },
    ],
  },
  {
    id: 'rh',
    icon: Users,
    label: 'Ressources humaines',
    cases: [
      {
        title: "Rédiger une offre d'emploi et sa fiche de poste",
        desc: "À partir de l'échange avec le manager et des fiches existantes, l'outil rédige l'annonce, les missions et les compétences attendues, en écartant les formulations discriminantes. Le recruteur ajuste au marché local.",
        gain: "Des annonces publiées plus vite et cohérentes avec le référentiel interne.",
      },
      {
        title: 'Préparer les entretiens annuels',
        desc: "Le manager reçoit une trame préremplie avec les objectifs de l'année et les faits qu'il a notés, puis la complète lui-même. Le jugement reste humain, et l'AI Act y veille : il classe « à haut risque » tout système qui évalue des salariés.",
        gain: "Des entretiens mieux préparés, sans confier l'évaluation à une machine.",
      },
      {
        title: 'Recenser les besoins de formation',
        desc: "Les demandes remontées en entretien et les compétences visées sont regroupées par équipe et par thème, doublons signalés. Le responsable formation arbitre le plan et le budget.",
        gain: "Un plan de développement des compétences construit sur des demandes consolidées.",
      },
    ],
  },
  {
    id: 'finance',
    icon: Calculator,
    label: 'Finance et comptabilité',
    cases: [
      {
        title: 'Contrôler les notes de frais dans Excel',
        desc: "Les lignes du mois sont confrontées à la politique de frais : plafonds dépassés, justificatifs manquants, doublons. Un récapitulatif par personne sort pour validation.",
        gain: "Le contrôle porte sur les anomalies signalées au lieu de chaque ligne.",
      },
      {
        title: 'Faire parler un fichier de ventes',
        desc: "Des questions posées en français à un export de ventes ou de parts de marché produisent graphiques et note de lecture, puis le support destiné à la direction. Les chiffres clés sont recalculés à la main avant diffusion.",
        gain: "De l'analyse au support de direction dans un même fil de travail.",
        link: { to: '/etudes-de-cas-ia#mission-immobilier-etudes', label: 'Vu en mission dans un groupe immobilier' },
      },
      {
        title: 'Remettre en ordre un classeur et ses formules',
        desc: "L'outil repère les formules cassées, les doublons et les formats incohérents, puis propose des corrections essayées sur un échantillon avant d'être étendues. Le contrôleur garde la version de référence.",
        gain: "Des fichiers fiables sans chasse à la cellule fautive.",
      },
    ],
  },
  {
    id: 'juridique',
    icon: Scale,
    label: 'Juridique et conformité',
    cases: [
      {
        title: 'Comparer un contrat reçu à votre modèle',
        desc: "Durée, résiliation, responsabilité, pénalités : les clauses du contrat entrant sont extraites et confrontées à votre trame, écarts surlignés. Le juriste concentre son analyse sur ce qui diffère.",
        gain: "Une première lecture qui indique où porter l'attention.",
      },
      {
        title: 'Vérifier un document technique contre ses sources',
        desc: "Une compétence met côte à côte un procès-verbal de bornage, le plan et l'acte, puis liste les incohérences relevées. Le géomètre-expert tranche avant de signer.",
        gain: "Les erreurs repérées avant signature plutôt qu'après.",
        link: { to: '/etudes-de-cas-ia#mission-gerance-cabinet', label: 'Vu en mission chez un géomètre-expert' },
      },
      {
        title: "Tirer des fiches pratiques d'un texte réglementaire",
        desc: "Un décret, un cahier des charges ou une norme deviennent des fiches par service : ce qui change, pour qui, à quelle date, avec le renvoi à l'article. Le référent valide avant diffusion.",
        gain: "Les équipes lisent une page au lieu de quarante.",
      },
    ],
  },
  {
    id: 'operations',
    icon: Truck,
    label: 'Opérations et logistique',
    cases: [
      {
        title: 'Consulter les transporteurs avant une livraison',
        desc: "Pour chaque expédition, l'assistant prépare les demandes de prix aux transporteurs habituels et range les réponses dans un comparatif. La personne des opérations choisit et confirme.",
        gain: "Moins d'allers-retours de mails dans les deux semaines qui précèdent une livraison.",
        link: { to: '/etudes-de-cas-ia#photovoltaique', label: 'Prévu chez un distributeur photovoltaïque' },
      },
      {
        title: "Importer les réceptions d'entrepôt dans l'ERP",
        desc: "Les fichiers envoyés par l'entrepôt, numéros de série compris, sont remis au format attendu par le logiciel de gestion, avec un contrôle des écarts avant import. L'opérateur valide.",
        gain: "Plus aucun numéro recopié à la main d'un fichier à l'autre.",
      },
      {
        title: 'Écrire les modes opératoires avec le terrain',
        desc: "Les notes d'un technicien ou un échange de mails deviennent une procédure numérotée, avec ses points de contrôle. Le responsable qualité relit et date la version.",
        gain: "Des procédures écrites par ceux qui font le geste, sans grand chantier documentaire.",
      },
    ],
  },
  {
    id: 'direction',
    icon: Building2,
    label: 'Direction et assistanat',
    cases: [
      {
        title: "Monter le dossier complet d'un comité de direction",
        desc: "Ordre du jour, note de synthèse, support de présentation et mémo pour le dirigeant sortent d'un même fil, à partir des contributions reçues. L'assistante de direction contrôle et diffuse.",
        gain: "Un dossier complet plus tôt, les manques signalés avant la réunion.",
        link: { to: '/etudes-de-cas-ia#mission-assistanat-direction', label: 'Vu en mission avec une assistante de direction' },
      },
      {
        title: 'Commencer la journée par un point sur la messagerie',
        desc: "Branché sur la boîte mail et le calendrier, l'assistant résume les mails de la nuit, repère les demandes urgentes et prépare des brouillons, sans rien envoyer seul. Le dirigeant lit, corrige, envoie.",
        gain: "Les urgences sautent aux yeux dès l'arrivée au bureau.",
      },
      {
        title: "Suivre les décisions d'une réunion à la suivante",
        desc: "La transcription d'une réunion donne un relevé des décisions et des actions, avec responsable et échéance ; à la réunion d'après, l'outil liste ce qui n'a pas avancé. L'animateur valide le relevé.",
        gain: "Moins de décisions oubliées entre deux comités.",
      },
    ],
  },
]

/* ───────── Usages par TYPE de solution (6 types) ───────── */

const TYPE_CASES = [
  {
    icon: Sparkles,
    title: 'Assistants configurés et compétences',
    desc: "Un assistant reçoit des consignes, des fichiers de référence et parfois une compétence, c'est-à-dire une procédure écrite au format SKILL.md que l'outil ouvre au moment utile. C'est le premier niveau d'outillage, en place en quelques jours dans l'abonnement que vous avez déjà.",
    gain: "Chacun réutilise le même savoir-faire au lieu de réinventer ses consignes.",
    link: { to: '/copilote-ia-interne', label: 'Le copilote IA interne' },
  },
  {
    icon: Workflow,
    title: 'Automatisations entre logiciels',
    desc: "Un scénario (n8n, Make, Power Automate ou Workspace Studio chez Google) déplace une donnée d'un outil à l'autre selon des règles fixes et appelle l'IA pour les étapes où il faut lire ou rédiger.",
    gain: "La ressaisie disparaît des flux qui se répètent chaque jour.",
    link: { to: '/automatisation-ia', label: "Comprendre l'automatisation IA" },
  },
  {
    icon: Bot,
    title: 'Agents',
    desc: "On confie à l'agent un objectif ; c'est lui qui décide des actions à enchaîner dans vos logiciels, et une personne valide tout ce qui engage l'entreprise. Il prend le relais quand le chemin change d'un client à l'autre.",
    gain: "Des tâches en plusieurs étapes menées à terme, sous contrôle.",
    link: { to: '/agents-ia-entreprise', label: 'Vingt usages des agents IA' },
  },
  {
    icon: FileSearch,
    title: 'Recherche dans vos documents',
    desc: "Vos procédures, contrats et comptes rendus sont indexés ; avant de répondre, l'outil va chercher les passages utiles et cite sa source. Les spécialistes parlent de RAG, pour génération augmentée par la recherche.",
    gain: "Une réponse vérifiable en quelques secondes, sans fouiller les dossiers partagés.",
    link: { to: '/assistant-documentaire-ia', label: "L'assistant documentaire IA" },
  },
  {
    icon: Network,
    title: 'Branchements sur vos logiciels',
    desc: "L'IA lit et écrit dans votre CRM, votre ERP ou votre messagerie grâce à leurs API ou au protocole MCP, standard ouvert de connexion entre assistants et logiciels d'entreprise. Vos outils ne changent pas.",
    gain: "Les usages vivent dans les écrans que l'équipe ouvre déjà.",
    link: { to: '/integration-llm-rag', label: 'Intégrer un modèle à votre système' },
  },
  {
    icon: PenLine,
    title: 'Production de fichiers et de supports',
    desc: "Documents Word, classeurs Excel, présentations PowerPoint : plusieurs assistants les produisent dans vos gabarits à partir d'une source, prêts à être relus.",
    gain: "Le premier jet arrive au bon format, avec la charte de l'entreprise.",
    link: { to: '/ia-generative-entreprise', label: 'Le guide de l\'IA générative' },
  },
]

/* Numérotation continue : usages par fonction (1…), puis types de solution. */
let _caseNum = 0
FUNCTION_GROUPS.forEach(g => g.cases.forEach(uc => { uc.num = ++_caseNum }))
TYPE_CASES.forEach(uc => { uc.num = ++_caseNum })

/* ───────── Familles de solution (pictos de tête de section TYPE) ───────── */

const SOLUTION_FAMILIES = [
  { icon: Sparkles, label: 'Assistants et compétences' },
  { icon: Workflow, label: 'Automatisations' },
  { icon: Bot, label: 'Agents' },
  { icon: FileSearch, label: 'Recherche documentaire' },
  { icon: Network, label: 'API et MCP' },
  { icon: PenLine, label: 'Fichiers et supports' },
]

/* ───────── De l'idée à l'usage installé (3 jalons) ───────── */

const PATH_STEPS = [
  {
    icon: Compass,
    title: "Retenir l'usage qui revient le plus",
    desc: "Fréquent, documenté, facile à vérifier, sans conséquence grave en cas d'erreur : ce profil fait un bon premier usage. Une tâche rare ou floue fait échouer le projet, quel que soit l'outil.",
  },
  {
    icon: ListChecks,
    title: 'Le tester sur une équipe',
    desc: "Quelques semaines avec les personnes concernées, sur leurs propres fichiers, avec des points de relecture écrits. On relève le temps rendu, les corrections nécessaires et les cas renvoyés à un humain.",
  },
  {
    icon: RefreshCw,
    title: "L'étendre quand il tient",
    desc: "Une fois l'usage fiable, d'autres équipes l'adoptent, puis un deuxième usage démarre avec la même méthode. On donne plus de latitude à l'outil à mesure que ses résultats le justifient.",
  },
]

/* ───────── Ressources / maillage final ───────── */

const NEXT_STEPS = [
  { label: 'Solutions IA', href: '/solutions-ia', tag: 'Outils types', desc: "Les assistants, agents et applications que nous adaptons à votre métier." },
  { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Comment un agent enchaîne seul ses actions, vingt exemples et les outils qui les permettent." },
  { label: 'Automatisation IA', href: '/automatisation-ia', tag: 'Flux', desc: "Relier vos logiciels entre eux et confier à l'IA les étapes de lecture et de rédaction." },
  { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Réalisation', desc: "Nous construisons et mettons en service vos scénarios avec vos équipes." },
  { label: 'IA par secteur', href: '/ia-secteurs', tag: 'Secteurs', desc: "Industrie, santé, immobilier, services : les usages propres à chaque activité." },
  { label: 'Copilote IA interne', href: '/copilote-ia-interne', tag: 'Assistant métier', desc: "Un assistant relié à vos données, conçu pour un service précis." },
  { label: 'Assistant documentaire IA', href: '/assistant-documentaire-ia', tag: 'Documents', desc: "Interroger vos procédures et vos contrats, réponse sourcée à l'appui." },
  { label: 'Intégration LLM et RAG', href: '/integration-llm-rag', tag: 'Technique', desc: "Brancher un modèle sur votre système d'information, proprement." },
  { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'Guide', desc: "Ce que sait faire l'IA générative, ses limites, ses règles, les modèles du moment." },
  { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les facteurs qui pèsent sur le budget d'un usage, du prototype au déploiement." },
  { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Cadre', desc: "Rôles, relecture et conformité avant d'étendre un usage à toute l'entreprise." },
]

/* ───────── Sources citées (AI Act) ───────── */

const PAGE_CITATIONS = [
  { name: "AI Act, règlement (UE) 2024/1689 : l'annexe III liste les usages « à haut risque »", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Règlement (UE) 2026/1744 : report au 2 décembre 2027 des règles « haut risque »", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Quels sont les cas d'usage de l'IA en entreprise ?",
    aStrong: "Les plus répandus touchent l'écrit et la lecture : réponses aux clients, cotations et appels d'offres, comptes rendus, analyse de fichiers de chiffres, comparaison de contrats, préparation de comités.",
    aRest: "Presque chaque service en compte plusieurs, des ressources humaines à la logistique. Leur point commun : une tâche qui revient souvent, des documents qui existent déjà et une personne qui relit avant que le résultat parte. Cette page en décrit vingt-quatre par service, puis six types de solution.",
  },
  {
    q: "Quel gain attendre de l'IA pour les équipes ?",
    aStrong: "Du temps rendu sur la ressaisie, la recherche d'informations, les premiers jets et la mise en forme, réinvesti dans ce qui demande du jugement et du contact humain.",
    aRest: "Nous ne publions aucun pourcentage générique : l'effet varie avec le volume traité, l'état de vos fichiers et la part de relecture que vous gardez. Il se mesure sur une équipe pilote, avant et après, en temps passé et en corrections nécessaires. C'est ce relevé, et lui seul, qui justifie d'étendre.",
  },
  {
    q: "Par où commencer pour appliquer l'IA dans son entreprise ?",
    aStrong: "Par l'usage le plus fréquent et le plus facile à vérifier dans une équipe volontaire, testé quelques semaines sur ses propres fichiers.",
    aRest: "Un premier usage modeste mais mesurable vaut mieux qu'un projet spectaculaire qu'on ne sait pas évaluer : tri de demandes entrantes, contrôle de notes de frais, préparation d'une cotation. La connaissance fine de la tâche compte davantage que la technique. Le Diagnostic IA de Masteria sert à faire ce choix ; on en fixe la durée et le prix au cadrage.",
  },
  {
    q: "Quels usages de l'IA conviennent à une PME ?",
    aStrong: "Une PME gagne d'abord sur les tâches qui reposent sur deux ou trois personnes : devis et relances, réponses aux clients, documents fournisseurs, comptes rendus.",
    aRest: "Ces usages tournent dans un abonnement d'équipe du marché, sans projet informatique lourd. Commencez par un seul, mesurez-le, puis reproduisez la méthode. Parmi nos études de cas, celle d'une équipe de trois personnes dans la distribution photovoltaïque montre comment trois chantiers ont été retenus avant toute formation.",
  },
  {
    q: "Combien de temps faut-il pour installer un premier usage ?",
    aStrong: "Quelques jours pour un assistant configuré dans un outil existant, quelques semaines pour un usage relié à vos logiciels et testé sur une équipe.",
    aRest: "Le délai dépend de l'état de vos fichiers, du nombre de logiciels à relier et de la disponibilité des personnes qui testent. Un branchement sur mesure à un ERP prend plus de temps qu'un assistant de rédaction. Nous fixons ce calendrier au cadrage, avec la date du premier relevé.",
  },
  {
    q: "Cas d'usage des agents IA ou simple automatisation : quelle différence ?",
    aStrong: "Une automatisation suit toujours le même chemin, défini à l'avance ; un agent choisit lui-même les étapes pour atteindre un objectif, ce qui lui permet de traiter un dossier qui sort de l'ordinaire.",
    aRest: "L'automatisation convient aux flux stables ; l'agent aux tâches dont le déroulé varie. Les deux se combinent souvent : le scénario encadre, l'agent traite l'étape délicate. Plusieurs usages de cette page relèvent de l'un, de l'autre ou des deux.",
  },
  {
    q: "Pourquoi tant de projets d'IA s'arrêtent-ils après le prototype ?",
    aStrong: "Parce que le prototype a été choisi pour impressionner plutôt que pour durer : tâche rare, données introuvables, personne pour l'installer dans le travail quotidien, aucun relevé pour prouver son utilité.",
    aRest: "Le remède tient en trois gestes : choisir une tâche fréquente, désigner dès le départ qui l'installera dans le travail courant, mesurer avant d'étendre. Un usage modeste mais installé rapporte davantage qu'une démonstration brillante restée dans un tiroir.",
  },
  {
    q: "Quels cas d'usage demandent une vigilance au regard de l'AI Act ?",
    aStrong: "Ceux qui touchent des personnes : tri de candidatures, évaluation de salariés, accès à un crédit. L'AI Act les range « à haut risque » dans son annexe III ; le règlement (UE) 2026/1744 a reporté leurs obligations au 2 décembre 2027.",
    aRest: "Autre règle, en vigueur depuis le 2 août 2026 (article 50) : un assistant qui dialogue avec vos clients doit leur indiquer qu'ils échangent avec une IA. La plupart des usages de cette page (rédaction, synthèse, analyse de fichiers) présentent un risque minimal, sans obligation propre au-delà de l'article 4, qui demande d'aider les utilisateurs à maîtriser ces outils.",
  },
]

/* ───────── JSON-LD ───────── */

const ALL_FUNCTION_CASES = FUNCTION_GROUPS.flatMap(g => g.cases)
const ALL_CASES = [...ALL_FUNCTION_CASES, ...TYPE_CASES]

const useCaseItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${ALL_CASES.length} cas d'usage de l'IA en entreprise`,
  description: "Usages de l'intelligence artificielle en entreprise rangés par service (marketing, vente, service client, RH, finance, juridique, opérations, direction) puis par type de solution (assistants et compétences, automatisations, agents, recherche documentaire, API et MCP, production de fichiers).",
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
    "Usages de l'IA par service",
    "Automatisation et agents IA",
    "Recherche documentaire et RAG",
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

/* GainLine : ce que l'équipe gagne (gain qualitatif, jamais chiffré). */
function GainLine({ text, dark = false }) {
  return (
    <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px dashed ${dark ? '#22304D' : '#E5E7EB'}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: dark ? '#60A5FA' : c, marginBottom: 5 }}>
        <TrendingUp size={13} strokeWidth={2.4} aria-hidden="true" />
        <span>Pour l'équipe</span>
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
  // Patron éditorial asymétrique réutilisable (du cas à la mise en œuvre / FAQ)
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
        citations={PAGE_CITATIONS}
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
                Panorama par service
              </span>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 13px' }}>
              <Sparkles size={13} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
              Revu le 7 octobre 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 860 }}>
            {H1_LINE1}
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>{H1_LINE2}</span>
          </h1>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Trente <strong style={{ color: '#fff', fontWeight: 700 }}>exemples d'usage de l'IA au travail</strong> : vingt-quatre rangés par service, du marketing à la direction, puis six types de solution. Pour chacun, <strong style={{ color: '#fff', fontWeight: 700 }}>ce que fait l'outil, qui relit, et ce que l'équipe y gagne</strong>, sans chiffre de gain avancé.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Ces exemples d'utilisation de l'IA en entreprise viennent pour partie de missions menées en 2026, signalées par un lien vers leur récit. Les autres sont des usages que nous voyons revenir en atelier, quel que soit l'outil choisi.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#par-fonction" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parcourir les trente usages
            </a>
          </div>

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 860 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Mode d'emploi de la page</div>
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
            <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>Dans cette page</p>
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

      {/* ── USAGES PAR FONCTION ── */}
      <section id="par-fonction" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Par service</Kicker>
          <h2 style={h2Style}>Chaque service de l'entreprise compte au moins trois usages de l'IA</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Marketing, vente, service client, ressources humaines, finance, juridique, logistique, direction : aucun service n'échappe à l'IA, parce que tous écrivent, lisent et recopient.</strong> Les vingt-quatre usages suivants disent ce que fait l'outil, qui garde la décision et ce que l'équipe y gagne. Aucun chiffre n'est avancé : l'effet dépend de vos volumes, de vos fichiers et de la relecture que vous conservez.
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

      {/* ── PAR TYPE DE SOLUTION (ancre sombre, pivot) ── */}
      <section id="par-type" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Par type de solution</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Six briques techniques portent tous ces usages</h2>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '22px 26px', margin: '0 0 28px', maxWidth: 860 }}>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, margin: 0, color: '#E2E8F0' }}>
              <strong style={{ color: '#fff' }}>Derrière les vingt-quatre usages se cachent six briques : l'assistant configuré, l'automatisation, l'agent, la recherche dans vos documents, le branchement sur vos logiciels et la production de fichiers.</strong> Savoir laquelle convient évite d'acheter un agent là où un assistant suffit.
            </p>
          </div>

          <p style={{ ...pStyle, color: '#B4C0D3' }}>
            Un même besoin admet plusieurs réponses. La cotation depuis un mail peut se traiter avec un assistant et une compétence, avec un scénario qui lit la boîte de réception, ou avec un agent qui crée le devis dans l'ERP. Le choix dépend du volume, du risque et des logiciels en place.
          </p>

          {/* Famille de pictos : briques types */}
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

      {/* ── DE L'IDÉE À L'USAGE INSTALLÉ (éditorial asymétrique) ── */}
      <section id="du-cas-a-la-mise-en-oeuvre" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>De l'idée à l'usage</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Un cas d'usage devient utile après trois jalons</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong style={{ color: '#0A0A0A' }}>Retenir la tâche qui revient le plus, la tester sur une équipe et ses propres fichiers, puis l'étendre une fois qu'elle tient.</strong> Une idée séduisante sur le papier ne résiste pas toujours aux dossiers du lundi matin.
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les projets qui s'arrêtent après le prototype échouent rarement sur la technologie. Ils butent sur un mauvais choix de tâche ou sur l'absence de relevé. Les trois jalons ci-contre réduisent ces deux risques.
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
                La mise en œuvre prend ensuite la forme d'une <Link to="/automatisation-ia" style={linkStyle}>automatisation entre vos logiciels</Link>, d'un <Link to="/agents-ia-entreprise" style={linkStyle}>agent qui enchaîne les actions</Link> ou d'un <Link to="/copilote-ia-interne" style={linkStyle}>assistant interne relié à vos données</Link>. Si l'usage repose sur vos documents, l'<Link to="/integration-llm-rag" style={linkStyle}>intégration d'un modèle avec recherche documentaire</Link> lui donne des réponses sourcées. Pour choisir par où commencer, le <Link to="/diagnostic-ia" style={linkStyle}>Diagnostic IA</Link> fait le tri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE PREMIER USAGE À CHOISIR (cartes de maillage) ── */}
      <section id="choisir" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le premier usage</Kicker>
          <h2 style={h2Style}>Le meilleur premier usage est souvent le moins spectaculaire</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Choisissez la tâche la plus fréquente, la mieux documentée et la moins risquée en cas d'erreur.</strong> Elle montre vite un résultat et sert ensuite de modèle pour les usages suivants.
          </p>
          <p style={pStyle}>
            Pour creuser un type de solution, ou voir ce que donnent ces usages dans votre secteur, ces pages prennent le relais.
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
                    Aller voir
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── D'OÙ VIENNENT CES EXEMPLES (remplace CaseStudyCards) ── */}
      <section id="origine" style={{ padding: sectionPad, background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>D'où viennent ces exemples</Kicker>
          <h2 style={h2Style}>Une partie de ces usages sort de sept missions menées en 2026</h2>
          <p style={pStyle}>
            Chez un distributeur IT de 58 salariés, dix référents formés en juin 2026 ont conçu des compétences Claude, dont celle qui prépare une cotation à partir du mail du client ; le reste de l'entreprise les recevra d'octobre à décembre 2026 (<Link to="/etudes-de-cas-ia#distribution" style={linkStyle}>le cas complet</Link>). Dans un cabinet de conseil financier, quatre assistants préparent les mémoires d'appels d'offres et interrogent le consultant avant d'écrire (<Link to="/etudes-de-cas-ia#conseil-financier" style={linkStyle}>le récit</Link>).
          </p>
          <p style={pStyle}>
            Chez un distributeur de panneaux photovoltaïques qui compte trois personnes, la consultation des transporteurs et le chargement dans Odoo de ce que l'entrepôt a reçu sont les deux premiers assistants à construire, avant une formation sur site prévue en octobre 2026 (<Link to="/etudes-de-cas-ia#photovoltaique" style={linkStyle}>le diagnostic</Link>). Les notes de frais et le comité de direction viennent d'une formation individuelle d'assistante de direction, le procès-verbal de bornage d'un géomètre-expert formé en août 2026. La voix de marque et les fiches tirées d'un texte réglementaire ont été travaillées avec une interprofession agricole, l'analyse d'un fichier de ventes avec la responsable études d'un groupe immobilier.
          </p>
          <p style={{ ...pStyle, marginBottom: 0 }}>
            Aucun de ces clients n'est nommé, à sa demande. Leurs récits complets, y compris ceux des missions de formation, se lisent sur la page <Link to="/etudes-de-cas-ia" style={linkStyle}>études de cas IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Huit questions que posent les dirigeants</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Un usage de votre service manque à la liste ? Décrivez-le-nous, il complétera peut-être la page.
              </p>
              <Link to="/contact?type=projet" style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Proposer un usage
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
            Je tiens cette liste à jour au fil des ateliers : chaque usage décrit ici a été vu chez un client ou demandé par une équipe en formation. Quand un exemple vient d'une mission, il renvoie à son récit, qui sépare l'acquis de ce qui est encore prévu. Pour savoir qui écrit, voyez <Link to="/mathias-nizan" style={linkStyle}>ma page de fondateur</Link>.
          </p>
          <p style={{ fontSize: 14, color: '#6B7280', margin: 0, fontWeight: 600 }}>Mathias Nizan, fondateur de Masteria, Lyon</p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(24px, 4vw, 48px) 24px clamp(64px, 9vw, 110px)' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
              <Target size={28} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
            </div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Lequel de ces usages commencer chez vous ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Racontez-nous la tâche qui prend le plus de temps à vos équipes et les logiciels qu'elles utilisent. Pendant les 30 minutes de cadrage offertes, on regarde ensemble quel usage tester d'abord et avec quelle brique.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '16px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)' }}>
                Le Diagnostic IA
                <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              <ShieldCheck size={14} strokeWidth={2.2} style={{ color: '#60A5FA', verticalAlign: 'text-bottom', marginRight: 6 }} aria-hidden="true" />
              En visio ou par téléphone · avis sans engagement · tous outils confondus
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui écrit ces exemples ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui a réuni ces exemples</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet qui voit ces usages naître en atelier
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria conseille, construit des outils et forme des équipes, sans autre sujet que l'IA. Mathias Nizan pilote chaque mission et s'appuie, selon le besoin, sur un réseau de formateurs indépendants (une vingtaine), de consultants (une dizaine) et de développeurs (près de cinq). Les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> documentent ce travail.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['30', 'usages décrits sur cette page'],
              ['8', 'services couverts, de la vente à la direction'],
              ['7', 'missions de 2026 à la source de plusieurs exemples'],
              ['0', 'pourcentage de gain avancé sans mesure'],
            ].map(([k, v]) => (
              <div key={k + v}>
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
