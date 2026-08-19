import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  ChevronDown, BadgeCheck, Wallet, MonitorSmartphone, Building2,
  ShoppingCart, Sparkles, Check, ArrowRight, MapPin, ShieldCheck, Landmark,
  HardHat, Home, Store, HeartPulse, ClipboardList, Calculator,
  // Icônes des missions/profils par métier (nommées dans metier-content-enrichi.js)
  BarChart3, BookOpenCheck, LineChart, ScrollText, FileWarning, SearchCheck, PenLine, Bot, Gauge, Network,
  FileSearch, FileText, ListChecks, ClipboardCheck, KeyRound, UsersRound, Building, FileSignature, Tags,
  MessageSquareHeart, LayoutGrid, PackageSearch, ShoppingBag, Share2, Mail, Palette, RefreshCw, Database,
  Handshake, Compass, CalendarDays, TriangleAlert, MessagesSquare, Stethoscope, UserSearch, UserPlus, DoorOpen,
  UserCheck, Rocket, Presentation, FolderSearch, Lock, BookOpen, ListFilter, ShieldAlert, LayoutTemplate,
  Wrench, Smile, Newspaper, FileCode, Terminal, Radar, Code2, Route, Puzzle, Copyright, School, Globe, Truck,
  Zap, Layers, Award, Waves, NotebookPen, Eye,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { stripLeadingEmoji } from '../components/Pictogram'
import ToolLogo from '../components/ToolLogo'
import { useIsDesktop } from '../hooks/useMediaQuery'
import { METIERS, getSpokesByMetier } from '../data/seo-pages'
import { METIER_ENRICHI } from '../data/metier-content-enrichi'

/* Métiers couverts par /bibliotheque-de-prompts, listés en dur : importer
   prompts-library.js ici chargerait les 112 prompts sur chaque page métier. */
const PROMPT_LIB_SLUGS = [
  'marketing', 'ressources-humaines', 'commercial', 'finance', 'communication',
  'management', 'assistante', 'seo', 'service-client', 'informatique',
  'pedagogique', 'achats',
]
import { METIER_FAQ } from '../data/metier-faq'

// Icônes SVG par métier (lucide-react)
const METIER_ICONS = {
  marketing:           Megaphone,
  'ressources-humaines': Users,
  finance:             TrendingUp,
  commercial:          Briefcase,
  juridique:           Scale,
  communication:       Radio,
  management:          Target,
  assistante:          CalendarCheck,
  seo:                 Search,
  'service-client':    Headphones,
  informatique:        Server,
  pedagogique:         GraduationCap,
  achats:              ShoppingCart,
  transverse:          Sparkles,
  qse:                 HardHat,
  'gestion-de-projet': ClipboardList,
  'marche-public':     Landmark,
  immobilier:          Home,
  commerce:            Store,
  sante:               HeartPulse,
}

// Icônes nommables depuis la data enrichie (metier-content-enrichi.js)
const ICON_BY_NAME = {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio, Target, CalendarCheck, Search, Headphones,
  Server, GraduationCap, BadgeCheck, Wallet, MonitorSmartphone, Building2, ShoppingCart, Sparkles,
  Check, ArrowRight, MapPin, ShieldCheck, Landmark, HardHat, Home, Store, HeartPulse, ClipboardList, Calculator,
  BarChart3, BookOpenCheck, LineChart, ScrollText, FileWarning, SearchCheck, PenLine, Bot, Gauge, Network,
  FileSearch, FileText, ListChecks, ClipboardCheck, KeyRound, UsersRound, Users2: UsersRound, Building, FileSignature, Tags,
  MessageSquareHeart, LayoutGrid, PackageSearch, ShoppingBag, Share2, Mail, Palette, RefreshCw, Database,
  Handshake, Compass, CalendarDays, TriangleAlert, AlertTriangle: TriangleAlert, MessagesSquare, Stethoscope,
  UserSearch, UserPlus, DoorOpen, UserCheck, Rocket, Presentation, FolderSearch, Lock, BookOpen, ListFilter,
  ShieldAlert, LayoutTemplate, Wrench, Smile, Newspaper, FileCode, Terminal, Radar, Code2, Route, Puzzle,
  Copyright, School, Globe, Truck, Zap, Layers, Award, Waves, NotebookPen, Eye,
}

// ─── Contenu éditorial par métier ────────────────────────────────────────────
const METIER_CONTENT = {
  marketing: {
    metaTitle: 'Formation IA Marketing | Qualiopi | Masteria',
    metaDesc: 'Formation IA marketing : ChatGPT, Copilot, Gemini appliqués à vos contenus, campagnes et reporting. Certifiée Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: "Formation IA Marketing : formez vos équipes à l'intelligence artificielle",
    intro: "Notre formation IA marketing forme vos équipes à l'intelligence artificielle générative appliquée à leur métier : production de contenus, SEO, réseaux sociaux, emailing, publicité et analyse de performance. En 1 à 2 jours, certifiée Qualiopi et 100 % finançable OPCO, elle transforme ChatGPT, Copilot, Gemini, Claude ou Mistral en assistants opérationnels, avec des livrables produits sur vos propres campagnes et une bibliothèque de prompts adaptée à votre marque.",
    deepDiveTitle: "L'intelligence artificielle appliquée à chaque fonction marketing",
    deepDiveIntro: "Une formation IA marketing utile ne se limite pas à « savoir prompter ». Elle montre comment l'intelligence artificielle générative s'intègre concrètement dans chaque mission de votre équipe, avec des cas d'usage testés sur vos propres projets.",
    deepDive: [
      { title: 'Contenu & rédaction', text: "Rédigez articles de blog, pages web, livres blancs et newsletters 3× plus vite. L'IA produit des premiers jets structurés, des variantes de titres et des reformulations fidèles à votre ligne éditoriale, que vos équipes affinent au lieu de partir de la page blanche." },
      { title: 'SEO & GEO', text: "Générez des clusters de mots-clés, des briefs SEO, des balises title et meta, et optimisez vos contenus existants. La formation couvre aussi le GEO, le référencement dans les réponses des IA comme ChatGPT et Perplexity, nouvel enjeu du marketing 2026." },
      { title: 'Réseaux sociaux', text: "Déclinez un même message en posts LinkedIn, Instagram, X et TikTok, planifiez un calendrier éditorial trimestriel et adaptez le ton à chaque plateforme en quelques minutes." },
      { title: 'Email & CRM', text: "Rédigez des séquences d'emailing, personnalisez les messages par segment et testez des objets en A/B. L'IA accélère la production tout en gardant la cohérence de marque." },
      { title: 'Publicité & création', text: "Produisez des variantes d'annonces Google Ads et Meta, des accroches publicitaires et des briefs créatifs pour vos visuels, et testez plus d'angles à budget constant." },
      { title: 'Analyse & reporting', text: "Transformez un export de données campagne en synthèse claire, faites ressortir les enseignements et générez des recommandations actionnables, sans compétences data avancées." },
    ],
    painPoints: [
      'Produire 3× plus de contenus sans augmenter les effectifs',
      'Maintenir la cohérence de marque à grande échelle',
      'Analyser les données campagne sans compétences data',
    ],
    skills: [
      'Rédiger des briefs créatifs et contenus longs en 10 minutes',
      'Créer des variantes de messages pour A/B testing en quelques secondes',
      'Analyser les performances d\'une campagne et synthétiser les enseignements',
      'Adapter un contenu à 5 canaux différents (web, email, social, print, vidéo)',
      'Construire et maintenir une charte de prompts propre à votre marque',
      'Générer des angles éditoriaux et plans de contenu pour un trimestre entier',
    ],
  },
  'ressources-humaines': {
    metaTitle: 'Formation IA Ressources Humaines | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes RH à l\'IA : recrutement, onboarding, entretiens, gestion administrative. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: 'Formation IA pour les équipes RH',
    intro: "Recrutement, onboarding, entretiens annuels, communication interne : l'IA transforme toutes les dimensions du métier RH. Chaque formation est adaptée à votre environnement de travail, que vous soyez sur Microsoft 365 ou Google Workspace.",
    painPoints: [
      'Réduire le temps de rédaction des offres de 80%',
      'Personnaliser les entretiens annuels à grande échelle',
      'Automatiser les documents RH récurrents sans perdre en qualité',
    ],
    skills: [
      'Rédiger des offres d\'emploi différenciantes en moins de 5 minutes',
      'Analyser des CV et identifier les profils prioritaires automatiquement',
      'Créer des trames d\'entretien personnalisées selon le poste et le profil',
      'Produire des comptes-rendus d\'entretien structurés depuis des notes brutes',
      'Rédiger des communications internes et supports d\'onboarding cohérents',
      'Générer les tâches administratives RH récurrentes (courriers, fiches de poste) en quelques clics',
    ],
  },
  commercial: {
    metaTitle: 'Formation IA Commercial et Vente | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes commerciales à l\'IA : prospection, propositions, suivi client. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: 'Formation IA pour les équipes Commerciales',
    intro: "Prospection, propositions commerciales, suivi client, préparation de RDV : l'IA fait gagner plusieurs heures par semaine sur les tâches à faible valeur ajoutée. Vos commerciaux passent plus de temps à vendre, moins à rédiger.",
    painPoints: [
      'Diviser par 3 le temps de production des propositions',
      'Personnaliser chaque approche prospect sans effort supplémentaire',
      'Préparer un RDV stratégique en 10 minutes',
    ],
    skills: [
      'Rédiger une proposition commerciale personnalisée en moins de 20 minutes',
      'Préparer un pitch RDV avec contexte client et objections anticipées',
      'Produire des séquences de prospection email multicanal adaptées au profil',
      'Synthétiser un historique client pour une relance ciblée et pertinente',
      'Générer des comptes-rendus de RDV structurés avec actions de suivi',
      'Adapter une offre standard aux contraintes et enjeux d\'un prospect spécifique',
    ],
  },
  finance: {
    metaTitle: 'Formation IA Finance et gestion | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes finance à l\'IA : reporting, analyse de données, synthèses financières. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: 'Formation IA pour les équipes Finance',
    intro: "Reporting, commentaires de résultats, tableaux de bord, synthèses financières : l'IA permet aux équipes finance de se concentrer sur l'analyse à valeur ajoutée plutôt que sur la production de documents. Un cycle de clôture plus rapide, des analyses plus approfondies.",
    painPoints: [
      'Diviser par 3 le temps de rédaction des commentaires de résultats',
      'Interroger ses données Excel en langage naturel',
      'Préparer un CODIR en 30 minutes depuis les données brutes',
    ],
    skills: [
      'Rédiger des commentaires de résultats financiers en 30 minutes',
      'Interroger et analyser des tableaux Excel complexes en langage naturel',
      'Préparer des slides de CODIR depuis des données brutes en une heure',
      'Produire des synthèses financières lisibles pour des non-financiers',
      'Générer des scénarios et simulations depuis des hypothèses en texte libre',
      'Automatiser les narrations de rapports récurrents (mensuel, trimestriel)',
    ],
  },
  juridique: {
    metaTitle: 'Formation IA Juridique pour juristes | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes juridiques à l\'IA : analyse de contrats, synthèses, rédaction de clauses. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: 'Formation IA pour les équipes Juridiques',
    intro: "Revue de contrats, synthèses de documents légaux, rédaction de clauses, analyse de risques : l'IA aide les équipes juridiques à traiter plus de dossiers sans sacrifier la rigueur. La formation insiste sur un cadre d'utilisation sécurisé et défendable.",
    painPoints: [
      'Identifier les clauses inhabituelles dans un contrat en 2 minutes',
      'Synthétiser un dossier de 100 pages en points clés actionnables',
      'Rédiger des premières versions de documents juridiques standards',
    ],
    skills: [
      'Analyser un contrat de 50 pages et en extraire les clauses clés en 5 minutes',
      'Identifier les risques inhabituels ou les écarts par rapport au contrat type',
      'Rédiger des premières versions de clauses standards avec les bonnes contraintes',
      'Comparer deux versions d\'un document et localiser chaque modification',
      'Synthétiser un dossier volumineux en note de synthèse structurée',
      'Définir un cadre d\'utilisation de l\'IA conforme aux obligations déontologiques',
    ],
  },
  communication: {
    metaTitle: 'Formation IA Communication | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes communication à l\'IA : contenus éditoriaux, relations presse, réseaux sociaux, gestion de crise. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation IA pour les équipes Communication',
    intro: "Contenus éditoriaux, relations presse, communication de crise, communication institutionnelle : l'IA amplifie votre voix sans la dénaturer. La formation vous apprend à encoder votre ligne éditoriale dans les prompts pour produire plus, sans perdre l'authenticité.",
    painPoints: [
      'Adapter un même message à 5 audiences différentes sans tout réécrire',
      'Multiplier par 3 la production de contenus avec la même équipe',
      'Préparer une communication de crise structurée en moins d\'une heure',
    ],
    skills: [
      'Encoder la ligne éditoriale d\'une marque dans des prompts système réutilisables',
      'Décliner un message en 5 formats (communiqué, post social, mail, discours, FAQ)',
      'Produire un kit de communication de crise en moins de 2 heures',
      'Générer des interviews fictives et Q&A préparatoires pour les prises de parole',
      'Analyser le ton et la cohérence d\'une communication existante par rapport à la charte',
      'Rédiger des contenus complexes (discours, rapports annuels) avec un haut niveau de contrôle éditorial',
    ],
  },
  management: {
    metaTitle: 'Formation IA Management pour managers | Qualiopi | Masteria',
    metaDesc: 'Formez vos managers à l\'IA : réunions, reporting, communication d\'équipe, conduite du changement. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: 'Formation IA pour les Managers',
    intro: "Comptes-rendus de réunion, reporting, communication d'équipe, pilotage de l'activité : l'IA redonne aux managers du temps pour le terrain. Moins d'heures derrière l'écran, plus de présence auprès des équipes. Le manager est aussi le maillon décisif de l'adoption : selon PwC (2025), les équipes dont le manager utilise l'IA au quotidien adoptent les outils 3,4 fois plus vite. Sans son exemplarité, les solutions sont déployées mais peu utilisées. Notre approche le transforme en pilote d'une équipe augmentée : il cadre les usages, accompagne les profils, sécurise la conformité et installe les bons rituels.",
    deepDiveTitle: "L'intelligence artificielle appliquée à chaque mission de manager",
    deepDiveIntro: "De la synthèse d'un point d'équipe à la préparation d'un entretien délicat, l'IA s'intègre dans chacune des missions du manager. Voici six usages testés en situation, du quotidien individuel au pilotage collectif.",
    deepDive: [
      { title: "Le manager utilisateur", text: "ChatGPT et Copilot s'invitent dans le quotidien : synthèse d'un point, préparation d'un arbitrage, reformulation d'une note. Un manager qui prend la main sur ces gestes récupère facilement 3 à 5 heures par semaine et donne l'exemple à son équipe." },
      { title: "Pilotage d'équipe augmentée", text: "Cartographier les usages réels de l'équipe, fixer des objectifs IA réalistes et mesurer le gain de temps obtenu. Le manager passe d'une adoption subie à un pilotage chiffré, là où PwC observe une adoption 3,4 fois plus rapide quand il s'implique." },
      { title: "Conformité et cadre légal", text: "RGPD, AI Act, propriété intellectuelle, secret professionnel : le manager apprend à poser les limites avant que les usages ne dérapent. Quelles données on ne colle jamais dans un outil, quels contenus on vérifie, ce qui distingue un cadre clair d'un risque juridique." },
      { title: "Conduite du changement", text: "Quatre profils de résistance se côtoient dans une équipe : rationnel, émotionnel, identitaire, politique. À chacun son levier. Le manager apprend à lire la nature du blocage plutôt que d'insister sur l'outil, pour débloquer l'adoption sans forcer." },
      { title: "Communication managériale", text: "Préparer un entretien d'évaluation, formuler un feedback difficile, structurer un message sensible : l'IA aide à clarifier le fond et à choisir le ton. Le manager garde la décision et la relation, l'outil fait gagner du temps sur la mise en forme." },
      { title: "Rituels IA d'équipe", text: "Animer un point IA mensuel de trente minutes : ce qui marche, ce qui bloque, ce qu'on partage. Ce rituel simple transforme des essais isolés en pratique collective et entretient l'élan d'adoption sur la durée, sans réunion supplémentaire lourde." },
    ],
    painPoints: [
      'Automatiser les comptes-rendus de réunion et le suivi des actions',
      'Préparer un CODIR ou une revue d\'équipe en 30 minutes',
      'Communiquer le changement avec clarté et cohérence',
    ],
    skills: [
      'Générer un compte-rendu de réunion structuré avec points d\'action depuis des notes brutes',
      'Préparer un CODIR ou un board en 30 minutes depuis les données disponibles',
      'Rédiger des feedbacks d\'évaluation individualisés et constructifs',
      'Construire un plan de communication pour une réorganisation ou un changement majeur',
      'Analyser les signaux faibles d\'une équipe et préparer les bonnes questions',
      'Automatiser les reportings récurrents pour se concentrer sur l\'analyse',
    ],
  },
  assistante: {
    metaTitle: 'Formation IA Assistanat de direction | Qualiopi | Masteria',
    metaDesc: 'Formez vos assistantes de direction à l\'IA : emails, courriers, organisation, comptes-rendus. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: 'Formation IA pour les Assistants et assistantes de direction',
    intro: "Emails, courriers, comptes-rendus, organisation, gestion de projets transverses : l'IA est l'allié naturel des assistants et assistantes de direction qui jonglent avec tout. C'est probablement le métier qui gagne le plus à intégrer l'IA, avec un objectif réaliste de 5 à 7 heures récupérées chaque semaine sur les tâches répétitives à faible valeur ajoutée. La formation vous apprend à créer des prompts dans le style de votre direction, pour produire des documents irréprochables en quelques minutes. Elle s'adresse aussi aux office managers, sur le tri des mails, les comptes-rendus, la préparation de COMEX et la recherche de prestataires.",
    deepDiveTitle: "L'intelligence artificielle appliquée à chaque mission d'assistant et d'office manager",
    deepDiveIntro: "L'IA ne reste pas un outil à part : elle s'intègre dans chaque mission de la journée, du tri des mails à la préparation du comité de direction. Chaque cas ci-dessous a été testé en formation, avec des prompts que vous repartez en maîtrisant à la fin de la journée.",
    deepDive: [
      { title: "Tri et rédaction des mails", text: "L'IA prépare des réponses, hiérarchise une boîte de réception saturée et rédige des mails dirigeants en quelques secondes, dans le ton attendu. Sur une matinée de 40 messages, vous traitez l'essentiel en moitié moins de temps qu'à la main." },
      { title: "Comptes-rendus de réunion", text: "À partir d'un enregistrement Teams, l'IA produit un CR structuré avec décisions actées et actions assignées. Un point d'une heure devient un compte-rendu relu et diffusable en moins de 10 minutes, au lieu de 45." },
      { title: "Préparation d'agenda", text: "L'IA anticipe les réunions de la semaine, rédige un brief avant chaque rendez-vous et signale les conflits de planning. Votre direction arrive préparée à chaque créneau, sans que vous passiez la veille à reconstituer les dossiers." },
      { title: "Notes de frais et reporting", text: "Couplée à Excel et Copilot, l'IA monte les synthèses et les tableaux récurrents (notes de frais, suivis mensuels) à votre place. Un reporting qui mobilisait une demi-journée se boucle en moins d'une heure, formules comprises." },
      { title: "Préparation de COMEX", text: "De la collecte des inputs auprès des équipes jusqu'à la synthèse finale, l'IA structure les supports du comité de direction. Vous présentez un COMEX prêt en 2 heures là où la préparation prenait une journée entière." },
      { title: "Recherche fournisseurs", text: "Voyages, événements, prestataires : l'IA identifie des options, compare et qualifie en quelques minutes. Une recherche de fournisseur ou d'hôtel passe de plusieurs appels et onglets à 30 minutes de cadrage net." },
    ],
    painPoints: [
      'Synthétiser 50 emails en un brief matinal en 10 minutes',
      'Rédiger dans le style exact de son dirigeant',
      'Créer des comptes-rendus structurés depuis une réunion Teams',
    ],
    skills: [
      'Créer un profil de rédaction qui capture le ton et le style de votre direction',
      'Trier et synthétiser une boite mail volumineuse en 10 minutes',
      'Rédiger courriers, emails et mémos irréprochables en quelques minutes',
      'Produire des comptes-rendus de réunion structurés depuis des notes ou une transcription',
      'Préparer un dossier de déplacement ou une réunion stratégique en une heure',
      'Gérer des tableaux de suivi et rapports récurrents avec une précision accrue',
    ],
  },
  seo: {
    metaTitle: 'Formation IA pour les équipes SEO | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes SEO à l\'IA : contenu optimisé à grande échelle, recherche sémantique, balises, maillage. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation IA pour les équipes SEO',
    intro: "Le SEO est l'un des domaines où l'IA a le plus d'impact immédiat. Production de contenu optimisé à grande échelle, recherche sémantique accélérée, analyse de la SERP, rédaction de balises et de maillage interne : l'IA multiplie la capacité d'action des équipes SEO sans sacrifier la qualité.",
    painPoints: [
      'Produire des contenus SEO optimisés 5× plus vite sans perte de qualité',
      'Identifier les opportunités de mots-clés avec une précision accrue',
      'Automatiser les tâches répétitives (balises, maillage, descriptions)',
    ],
    skills: [
      'Rédiger des contenus SEO longs et optimisés en respectant l\'intention de recherche',
      'Générer des clusters de mots-clés et des structures de silos sémantiques',
      'Automatiser la production de balises title, meta-description et Hn pour un site entier',
      'Construire des plans de maillage interne optimisés depuis une liste de pages',
      'Analyser les contenus concurrents et identifier les angles manquants',
      'Créer des briefs de contenu détaillés avec instructions E-E-A-T pour les rédacteurs',
    ],
  },
  'service-client': {
    metaTitle: 'Formation IA Service Client | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes service client à l\'IA : réponses rapides et cohérentes, gestion des escalades, scripts. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation IA pour les équipes Service Client',
    intro: "Les équipes service client traitent des volumes considérables de demandes répétitives. L'IA permet de répondre plus vite, avec plus de cohérence, tout en libérant les agents pour les interactions à forte valeur. Selon McKinsey, 65 % des centres de relation client avaient déployé un cas d'usage d'IA générative en 2025, mais la majorité de ces projets déçoivent faute de conseillers et de managers formés à les piloter. La formation transforme les équipes en utilisateurs experts, capables de superviser, prompter et améliorer les outils déjà en place (chatbot, copilote conseiller, classification), sur la relation client comme sur le SAV. Elle couvre la rédaction de réponses, la gestion des escalades et l'exploitation des données client.",
    deepDiveTitle: "L'intelligence artificielle appliquée à chaque mission du service client et du SAV",
    deepDiveIntro: "L'IA ne reste pas un outil de démonstration : elle s'intègre dans le flux réel du conseiller, du tri du ticket jusqu'à l'analyse des verbatims. Chaque cas ci-dessous a été testé en conditions opérationnelles, avec des repères de gain mesurables.",
    deepDive: [
      { title: "Copilote conseiller", text: "L'IA suggère une réponse, vérifie le ton et la conformité, puis propose une escalade quand le cas le dépasse. Bien intégré au poste de travail, le copilote fait gagner 25 à 40 % de temps de traitement par interaction, sans retirer la main au conseiller." },
      { title: "Classification des tickets", text: "Le tri automatique répartit les demandes par motif, langue et urgence, puis route chaque ticket vers la bonne file. Les cas critiques remontent en priorité, ce qui réduit les délais de prise en charge et fiabilise les engagements de service." },
      { title: "Chatbot RAG fiable", text: "Branché sur votre base documentaire via une architecture RAG, le chatbot répond aux questions récurrentes à partir de vos sources réelles. Quand c'est bien cadré, il absorbe 30 à 50 % des tickets entrants au lieu d'inventer des réponses." },
      { title: "Analyse de verbatims", text: "L'IA lit les milliers de messages, e-mails et enquêtes pour faire ressortir tendances, irritants et signaux faibles en temps réel. Un irritant qui monte est repéré en quelques jours plutôt qu'après un trimestre de réclamations." },
      { title: "Qualité IA et garde-fous", text: "On installe les indicateurs qui comptent : taux d'escalade, conformité des réponses, satisfaction. Ces garde-fous permettent de détecter une dérive du modèle avant qu'elle n'atteigne le client et de corriger la base ou les prompts en continu." },
      { title: "Base de connaissances", text: "Un service client n'est jamais meilleur que sa documentation. La formation apprend à construire et maintenir un référentiel propre, structuré et exploitable par RAG, condition pour que copilote et chatbot s'appuient sur une information à jour." },
    ],
    painPoints: [
      'Réduire de 60% le temps de traitement des demandes récurrentes',
      'Maintenir une qualité de réponse uniforme quelle que soit la charge',
      'Former les agents à l\'IA sans déstabiliser leur pratique actuelle',
    ],
    skills: [
      'Rédiger des réponses types de haute qualité pour les 20 demandes les plus fréquentes',
      'Personnaliser des réponses génériques selon le contexte client en 30 secondes',
      'Synthétiser l\'historique client pour préparer une prise en charge efficace',
      'Gérer les situations sensibles (insatisfaction, escalade) avec le bon registre',
      'Construire et maintenir une base de connaissance IA pour toute l\'équipe',
      'Analyser des volumes de tickets pour détecter les tendances et irritants récurrents',
    ],
  },
  informatique: {
    metaTitle: 'Formation IA pour DSI et équipes IT | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes IT et DSI à l\'IA : documentation technique, code, logs, gouvernance IA. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: 'Formation IA pour les équipes Informatique / DSI',
    intro: "Les équipes IT sont en première ligne de la transformation IA, à la fois utilisateurs et garants de son déploiement sécurisé. La formation couvre les usages pratiques (documentation, code, analyse de logs) mais aussi le cadrage stratégique : gouvernance des données, choix des outils, sécurité des usages IA en entreprise.",
    painPoints: [
      'Accélérer la documentation technique et les spécifications fonctionnelles',
      'Utiliser l\'IA pour déboguer, refactoriser et générer du code',
      'Définir une politique d\'usage IA sécurisée pour toute l\'entreprise',
    ],
    skills: [
      'Générer et améliorer de la documentation technique et des spécifications fonctionnelles',
      'Utiliser l\'IA pour déboguer, refactoriser et expliquer du code existant',
      'Analyser des fichiers de logs et identifier des patterns d\'erreurs',
      'Rédiger des user stories et des cahiers des charges structurés',
      'Évaluer et cadrer le déploiement d\'un outil IA au niveau organisationnel',
      'Définir une politique d\'usage IA conforme aux exigences RGPD et sécurité',
    ],
  },
  pedagogique: {
    metaTitle: 'Formation IA équipes pédagogiques | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes pédagogiques à l\'IA : création de modules, individualisation des parcours, évaluations. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formation IA pour les Équipes Pédagogiques',
    intro: "Formateurs, responsables pédagogiques, ingénieurs de formation : l'IA transforme la conception et l'animation des parcours de formation. Créer des modules de formation, personnaliser les contenus selon les apprenants, générer des évaluations pertinentes, tout en gardant la main sur la qualité pédagogique.",
    painPoints: [
      'Créer un module de formation complet en 2 heures au lieu de 2 jours',
      'Individualiser les parcours selon les profils apprenants sans surcharge',
      'Générer des évaluations variées et pertinentes rapidement',
    ],
    skills: [
      'Créer la structure complète d\'un module de formation depuis un objectif pédagogique',
      'Adapter un contenu de formation à plusieurs niveaux ou profils d\'apprenants',
      'Générer des exercices, quiz et mises en situation variées sur un thème donné',
      'Rédiger des guides formateurs et des supports apprenants cohérents',
      'Construire un programme de formation complet avec séquençage pédagogique',
      'Analyser des évaluations et identifier les points de blocage récurrents des apprenants',
    ],
  },
  achats: {
    metaTitle: 'Formation IA Achats pour les acheteurs | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes Achats à l\'IA : sourcing, analyse d\'offres, négociation, suivi contractuel. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.',
    h1: 'Formation IA pour les équipes Achats',
    intro: "Sourcing, analyse comparative d'offres, négociation, suivi de contrats fournisseurs : les Achats sont confrontés à des volumes documentaires considérables où l'IA fait gagner un temps décisif. La formation couvre le cycle complet, du brief fournisseur à l'audit contractuel, avec une attention particulière sur la rigueur factuelle et la confidentialité.",
    painPoints: [
      'Comparer 10 propositions fournisseurs sur 30 critères en moins d\'une heure',
      'Détecter les clauses inhabituelles ou désavantageuses dans un contrat',
      'Synthétiser des cahiers des charges fournisseurs longs et techniques',
    ],
    skills: [
      'Cartographier un panel fournisseurs et identifier les sources alternatives crédibles',
      'Comparer plusieurs offres techniques et financières sur une grille de critères pondérés',
      'Rédiger des consultations, RFP et cahiers des charges structurés en quelques minutes',
      'Analyser un contrat fournisseur et repérer les clauses sensibles ou inhabituelles',
      'Préparer une négociation : objections probables, contre-arguments, BATNA',
      'Suivre la performance fournisseurs : synthèses de KPI, alertes contractuelles, tableaux de bord',
    ],
  },
  transverse: {
    metaTitle: 'Formation IA Tous publics et formats transverses | Masteria',
    metaDesc: 'Formations IA transverses pour acculturer toutes vos équipes : Sprint IA 3 h, prompts, AI Act flash. Certifié Qualiopi, finançable OPCO.',
    h1: 'Formations IA transverses, pour toutes vos équipes',
    intro: "Quand l'enjeu est de sensibiliser, acculturer ou outiller largement, sans bloquer l'agenda des collaborateurs, les formats transverses Masteria sont le bon point d'entrée. Sprint IA 3 h, sensibilisation grand public, prompts efficaces, conformité AI Act : autant de formats prêts à déployer à l'échelle d'une convention, d'un séminaire ou d'un plan IA d'entreprise.",
    painPoints: [
      'Acculturer 200 à 2 000 collaborateurs sans bloquer leur agenda',
      'Donner un socle commun à des équipes très hétérogènes',
      'Couvrir l\'obligation de littératie IA prévue par l\'AI Act (article 4)',
    ],
    skills: [
      'Comprendre ce que l\'IA générative peut faire, et ne peut pas faire, dans un contexte professionnel',
      'Manipuler ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral en autonomie',
      'Écrire des prompts structurés (méthode CRTF) reproductibles d\'un outil à l\'autre',
      'Identifier les usages IA conformes à la confidentialité et au RGPD dans son métier',
      'Repartir avec une bibliothèque personnelle de prompts adaptés à ses cas d\'usage',
      'Connaître les obligations clés de l\'AI Act (article 4, calendrier 2026, classifications)',
    ],
  },
}

const TOOL_CONFIG = {
  'multi-outils': { label: 'Multi-outils IA (panorama)', color: '#6366f1', bg: '#e0e7ff', hubSlug: 'formation-intelligence-artificielle' },
  chatgpt:  { label: 'ChatGPT',             color: '#10a37f', bg: '#d1fae5', hubSlug: 'formation-chatgpt' },
  copilot:  { label: 'Microsoft Copilot',   color: '#0078d4', bg: '#dbeafe', hubSlug: 'formation-microsoft-copilot' },
  gemini:   { label: 'Google Gemini',       color: '#ea4335', bg: '#fee2e2', hubSlug: 'formation-gemini-entreprise' },
  claude:   { label: 'Claude (Anthropic)',  color: '#2563EB', bg: '#DBEAFE', hubSlug: 'formation-claude-ia' },
  mistral:  { label: 'Mistral AI',          color: '#fa500a', bg: '#fed7aa', hubSlug: 'formation-mistral-ai' },
}

// Ordre d'affichage des outils ("multi-outils" en premier pour mettre en avant le panorama)
const TOOL_ORDER = ['multi-outils', 'chatgpt', 'copilot', 'gemini', 'claude', 'mistral']

/* ── Jetons de design des blocs enrichis (patron money page du site) ─────────
   Rendus UNIQUEMENT si le métier fournit le contenu dans METIER_ENRICHI ;
   les métiers non enrichis conservent le rendu historique. Accent bleu unique. */
const C = '#2563EB'
const C_LIGHT = '#DBEAFE'
const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: C, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${C}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: C_LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: C }} />
    </div>
  )
}

/* Rend un lien interne inline dans un texte enrichi : "…{/slug|libellé}…" */
function RichText({ text }) {
  const parts = String(text).split(/(\{\/[^|}]+\|[^}]+\})/g)
  return parts.map((part, i) => {
    const m = part.match(/^\{(\/[^|}]+)\|([^}]+)\}$/)
    return m ? <Link key={i} to={m[1]} style={aStyle}>{m[2]}</Link> : <span key={i}>{part}</span>
  })
}

/* Un item de programme est soit une phrase (ancien format), soit { t, d } :
   titre court en gras + détail (format approfondi, fonctionnalités avancées des outils). */
function ProgItem({ item, li }) {
  if (item && typeof item === 'object') {
    return (
      <li style={{ ...li, alignItems: 'flex-start' }}>
        <Check size={16} strokeWidth={2.5} style={{ color: C, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
        <span>
          <strong style={{ color: '#111827', fontWeight: 700 }}>{item.t}</strong>
          {item.d && <span style={{ display: 'block', color: '#4B5563', fontSize: 14, lineHeight: 1.65, marginTop: 2 }}>{item.d}</span>}
        </span>
      </li>
    )
  }
  return <li style={li}><Check size={16} strokeWidth={2.5} style={{ color: C, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />{item}</li>
}

function DayBlock({ jour, titre, matin, apresmidi, isDesktop }) {
  const col = { flex: 1, minWidth: 0 }
  const list = { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }
  const li = { fontSize: 14.5, color: '#374151', lineHeight: 1.65, display: 'flex', gap: 9, alignItems: 'flex-start' }
  const head = { fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }
  return (
    <div style={{ ...cardStyle, padding: 'clamp(22px, 3vw, 30px)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: C }}>{jour}</span>
        <h3 style={{ ...h3Style, fontSize: 18 }}>{titre}</h3>
      </div>
      <div style={{ display: 'flex', gap: isDesktop ? 28 : 20, flexDirection: isDesktop ? 'row' : 'column' }}>
        <div style={col}>
          <div style={head}>Matin</div>
          <ul style={list}>{matin.map((m, i) => <ProgItem key={i} item={m} li={li} />)}</ul>
        </div>
        <div style={col}>
          <div style={head}>Après-midi</div>
          <ul style={list}>{apresmidi.map((m, i) => <ProgItem key={i} item={m} li={li} />)}</ul>
        </div>
      </div>
    </div>
  )
}

/* ── Composant accordéon FAQ ──────────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4 }}>{q}</span>
        <ChevronDown
          size={20} strokeWidth={2}
          style={{ flexShrink: 0, color: '#6B7280', marginTop: 2, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}
        />
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', marginTop: -4 }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function MetierPage() {
  const location = useLocation()
  const isDesktop = useIsDesktop()
  const metier = location.pathname.replace('/formation-ia-', '')
  const enrichi = METIER_ENRICHI[metier] || null
  // Le contenu enrichi (data/metier-content-enrichi.js) prime sur le contenu
  // historique ; un métier enrichi sans entrée historique reste valide.
  const content = enrichi
    ? { ...(METIER_CONTENT[metier] || {}), ...enrichi.base }
    : METIER_CONTENT[metier]
  const metierData = METIERS.find(m => m.slug === metier)

  if (!content || !metierData) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1>Page non trouvée</h1>
        <Link to="/" style={{ color: '#2563EB' }}>Retour à l'accueil</Link>
      </div>
    )
  }

  const spokes = getSpokesByMetier(metier)
  // Grouper par outil dans l'ordre défini
  const spokesByTool = TOOL_ORDER.reduce((acc, toolSlug) => {
    const list = spokes.filter(s => s.toolSlug === toolSlug)
    if (list.length) acc[toolSlug] = list
    return acc
  }, {})
  const toolSlugs = Object.keys(spokesByTool)

  // Autres métiers pour le maillage interne
  const otherMetiers = METIERS.filter(m => m.slug !== metier)

  // FAQ data pour ce métier (enrichie prioritaire, sinon historique)
  const faqItems = (enrichi && enrichi.faq && enrichi.faq.length) ? enrichi.faq : ((METIER_FAQ && METIER_FAQ[metier]) || [])
  const slug = `formation-ia-${metier}`
  const url = `https://www.master-ia.fr/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: content.h1,
    description: content.metaDesc,
    numberOfItems: spokes.length,
    itemListElement: spokes.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        name: s.h1,
        url: `https://www.master-ia.fr/${s.slug}`,
        provider: { '@type': 'Organization', name: 'Masteria' },
      },
    })),
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formations par métier', slug: 'formation-intelligence-artificielle' },
    { name: metierData.label, slug },
  ]

  /* Blocs JSON-LD enrichis (GEO) : programme en ItemList, Article auteur/dates/entités. */
  const progText = items => items.map(it => (it && typeof it === 'object') ? `${it.t} : ${it.d || ''}`.trim() : it).join(' ; ')
  const extraJsonLd = []
  const syllabusSections = enrichi?.programme?.length
    ? enrichi.programme.flatMap(j => [
        { '@type': 'Syllabus', name: `${j.jour} · Matin — ${j.titre}`, description: progText(j.matin) },
        { '@type': 'Syllabus', name: `${j.jour} · Après-midi — ${j.titre}`, description: progText(j.apresmidi) },
      ])
    : undefined
  if (enrichi?.programme?.length) {
    extraJsonLd.push({
      '@context': 'https://schema.org', '@type': 'ItemList',
      name: `Programme de la ${content.h1.split(':')[0].trim().toLowerCase()} Masteria`,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: enrichi.programme.flatMap((j, ji) => [
        { '@type': 'ListItem', position: ji * 2 + 1, name: `${j.jour} · Matin — ${j.titre}`, description: progText(j.matin) },
        { '@type': 'ListItem', position: ji * 2 + 2, name: `${j.jour} · Après-midi — ${j.titre}`, description: progText(j.apresmidi) },
      ]),
    })
  }
  if (enrichi?.article) {
    extraJsonLd.push({
      '@context': 'https://schema.org', '@type': 'Article', '@id': `${url}#article`,
      headline: enrichi.article.headline, description: content.metaDesc,
      author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' }, editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
      publisher: { '@id': 'https://www.master-ia.fr/#organization' },
      datePublished: enrichi.article.datePublished, dateModified: enrichi.article.dateModified,
      inLanguage: 'fr-FR', mainEntityOfPage: { '@id': `${url}#webpage` },
      about: enrichi.article.about,
    })
  }

  return (
    <>
      <SEOHead
        title={content.metaTitle}
        description={content.metaDesc}
        slug={slug}
        keywords={enrichi?.base?.keywords}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
        courseData={enrichi?.course ? { ...enrichi.course, syllabusSections } : undefined}
        datePublished={enrichi?.article?.datePublished}
        dateModified={enrichi?.article?.dateModified}
        speakable={enrichi ? ['#geo-summary', '#en-bref'] : undefined}
        citations={enrichi?.citations}
        extraJsonLd={extraJsonLd.length ? extraJsonLd : undefined}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO sombre premium (patron du site, accent bleu unique) ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: C }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formations par métier</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>{metierData.label}</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            {(() => { const Icon = METIER_ICONS[metier] || Sparkles; return (
              <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
              </span>
            ) })()}
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              {enrichi?.base?.eyebrow || `Formation métier · ${metierData.label}`}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            {enrichi?.base?.h1a ? (
              <>
                {enrichi.base.h1a}
                <br />
                <span style={{ color: '#60A5FA', fontWeight: 800 }}>{enrichi.base.h1b}</span>
              </>
            ) : content.h1}
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria{enrichi?.article?.dateModified ? ` · Mise à jour ${enrichi.article.dateLabel || ''}` : ''}
          </p>

          {enrichi?.base?.geo ? (
            <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${C}` }}>
              <RichText text={enrichi.base.geo} />
            </p>
          ) : (
            <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${C}` }}>
              {content.intro}
            </p>
          )}
          {enrichi?.base?.sub && (
            <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
              <RichText text={enrichi.base.sub} />
            </p>
          )}

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href={enrichi?.programme?.length ? '#programme' : '#formations'} style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              {enrichi?.programme?.length ? 'Voir le programme' : 'Voir les formations'}
            </a>
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: enrichi?.enBref ? 40 : 0 }}>
            {[
              { icon: BadgeCheck, label: 'Certifié Qualiopi · Finançable OPCO' },
              { icon: Sparkles, label: 'ChatGPT · Copilot · Claude · Gemini · Mistral' },
              { icon: Target, label: enrichi?.base?.badge3 || 'Sur vos cas réels' },
              { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {enrichi?.enBref && (
            <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
              <dl style={{ margin: 0 }}>
                {enrichi.enBref.map((row, i) => (
                  <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <dt style={{ flex: '0 0 110px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                    <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </section>

      {/* ── PROBLÉMATIQUES MÉTIER (historique ; masqué quand le métier est enrichi :
          les painPoints d'origine portaient des chiffres non sourcés) ── */}
      {!enrichi && content.painPoints?.length > 0 && (
      <section style={{ background: '#fff', padding: '36px 40px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>
            Ce que vous résolvez
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flex: 1 }}>
            {content.painPoints.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Check size={15} color="#10B981" strokeWidth={2.75} aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ── MISSIONS / ACTIVITÉS (enrichi : éditorial asymétrique, 6 cartes) ── */}
      {enrichi?.missions?.length > 0 && (
        <section id="missions" style={{ padding: sectionPad, background: '#fff' }}>
          <div style={wrap}>
            <div style={isDesktop ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' } : {}}>
              <div style={isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }}>
                <div style={kickerStyle}>{enrichi.missionsHead?.kicker || 'Activité par activité'}</div>
                <h2 style={{ ...h2Style, marginBottom: 18 }}>{enrichi.missionsHead?.h2}</h2>
                <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}><strong>{enrichi.missionsHead?.answer}</strong></p>
                {enrichi.missionsHead?.foot && (
                  <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}><RichText text={enrichi.missionsHead.foot} /></p>
                )}
              </div>
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                  {enrichi.missions.map((item, i) => (
                    <div key={i} style={{ ...cardStyle, padding: 24 }}>
                      <div style={{ marginBottom: 14 }}><IconTile icon={METIER_ICONS[item.icon] || ICON_BY_NAME[item.icon] || Sparkles} /></div>
                      <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                      <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ATOUTS (enrichi : 6 gains citables) ── */}
      {enrichi?.atouts?.length > 0 && (
        <section id="atouts" style={{ padding: sectionPad, background: '#F9FAFB' }}>
          <div style={wrap}>
            <div style={kickerStyle}>{enrichi.atoutsHead?.kicker || 'Ce que vous y gagnez'}</div>
            <h2 style={{ ...h2Style, maxWidth: 880 }}>{enrichi.atoutsHead?.h2}</h2>
            <p style={{ ...answerStyle, background: '#fff' }}><strong>{enrichi.atoutsHead?.answer}</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
              {enrichi.atouts.map((item, i) => (
                <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${C}` }}>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            {enrichi.atoutsHead?.foot && (
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>{enrichi.atoutsHead.foot}</p>
            )}
          </div>
        </section>
      )}

      {/* ── PROGRAMME Matin / Après-midi (enrichi : ancre sombre — pivot) ── */}
      {enrichi?.programme?.length > 0 && (
        <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: C }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ ...wrap, position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>{enrichi.programmeHead?.h2}</h2>
            <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${C}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
              <strong style={{ color: '#fff' }}>{enrichi.programmeHead?.answer}</strong>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {enrichi.programme.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
            </div>
            {enrichi.programmeHead?.foot && (
              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>{enrichi.programmeHead.foot}</p>
            )}
          </div>
        </section>
      )}

      {/* ── POUR QUI (enrichi : 4 profils) ── */}
      {enrichi?.profils?.length > 0 && (
        <section style={{ padding: sectionPad, background: '#fff' }}>
          <div style={wrap}>
            <div style={kickerStyle}>Pour qui</div>
            <h2 style={{ ...h2Style, maxWidth: 880 }}>{enrichi.profilsHead?.h2}</h2>
            <p style={answerStyle}><strong>{enrichi.profilsHead?.answer}</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, marginTop: 12 }}>
              {enrichi.profils.map(card => {
                const Icon = ICON_BY_NAME[card.icon] || METIER_ICONS[card.icon] || Users
                return (
                  <div key={card.title} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${C}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <Icon size={20} strokeWidth={2.1} style={{ color: C, flexShrink: 0 }} aria-hidden="true" />
                      <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CADRE (enrichi : RGPD / confidentialité / frontière, E-E-A-T terrain) ── */}
      {enrichi?.cadre && (
        <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
          <div style={wrap}>
            <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: C_LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={28} strokeWidth={2} style={{ color: C }} />
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={kickerStyle}>{enrichi.cadre.kicker || 'Le cadre, traité de front'}</div>
                <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>{enrichi.cadre.h2}</h2>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}><RichText text={enrichi.cadre.p} /></p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                  {enrichi.cadre.points.map(pt => (
                    <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <Check size={17} strokeWidth={2.5} style={{ color: C, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TARIF & FINANCEMENT (enrichi) ── */}
      {enrichi?.tarif && (
        <section id="tarif" style={{ padding: sectionPad, background: '#fff' }}>
          <div style={wrap}>
            <div style={kickerStyle}>Tarif et financement</div>
            <h2 style={{ ...h2Style, maxWidth: 880 }}>Combien coûte la formation, et comment la financer ?</h2>
            <p style={{ ...answerStyle }}><strong>{enrichi.tarif.answer}</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
              <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${C}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <GraduationCap size={20} strokeWidth={2.1} style={{ color: C, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{enrichi.tarif.inclus}</p>
              </div>
              <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${C}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <Landmark size={20} strokeWidth={2.1} style={{ color: C, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 16 }}>La prise en charge</h3>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                  <RichText text={enrichi.tarif.financement || "Masteria est certifiée Qualiopi : la formation est éligible au financement OPCO, selon votre branche et votre effectif. Nous fournissons programme, convention et pièces du dossier ; le dépôt se fait avant le début de la formation. Identifiez votre opérateur avec {/quel-opco|Quel OPCO ?} et le détail des dispositifs sur {/financement-formation-ia|financer sa formation IA}. Pas d'éligibilité CPF."} />
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BIBLIOTHÈQUE DE PROMPTS DU MÉTIER (maillage vers l'actif liable) ── */}
      <section style={{ background: '#F9FAFB', padding: '30px 40px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#0A0A0A' }}>Avant même de vous former :</strong>{' '}
            notre{' '}
            <Link to={PROMPT_LIB_SLUGS.includes(metier) ? `/bibliotheque-de-prompts#${metier}` : '/bibliotheque-de-prompts'} style={{ color: '#2563EB', fontWeight: 600 }}>
              bibliothèque de prompts {metierData.label.toLowerCase()}
            </Link>{' '}
            rassemble des prompts prêts à copier, tirés de nos formations, avec pour chacun la raison de sa construction.
          </p>
        </div>
      </section>

      {/* ── IA PAR FONCTION MÉTIER (profondeur éditoriale + couverture sémantique) ── */}
      {content.deepDive && (
        <section style={{ background: '#fff', padding: '72px 40px', borderBottom: '1px solid #E5E7EB' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.01em' }}>
              {content.deepDiveTitle}
            </h2>
            {content.deepDiveIntro && (
              <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.8, maxWidth: 720, marginBottom: 40 }}>
                {content.deepDiveIntro}
              </p>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {content.deepDive.map((d, i) => (
                <div key={i} style={{ background: '#FAFAF7', border: '1px solid #E5E7EB', borderRadius: 12, padding: '24px 24px 26px' }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{d.title}</h3>
                  <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FORMATIONS PAR OUTIL (uniquement si le métier a des spokes) ── */}
      {spokes.length > 0 && (
      <section id="formations" style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            {spokes.length} formation{spokes.length > 1 ? 's' : ''} {metierData.label} disponible{spokes.length > 1 ? 's' : ''}
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 56, maxWidth: 640 }}>
            Choisissez l'outil IA adapté à votre environnement de travail. Le programme et les exercices sont identiques dans leur exigence, seul l'outil change.
          </p>

          {toolSlugs.map(toolSlug => {
            const tc = TOOL_CONFIG[toolSlug]
            const list = spokesByTool[toolSlug]
            return (
              <div key={toolSlug} style={{ marginBottom: 56 }}>
                {/* En-tête outil */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                  <div style={{ background: tc.bg, padding: '5px 14px 5px 8px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <ToolLogo tool={toolSlug} size={22} color={tc.color} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: tc.color }}>{tc.label}</span>
                  </div>
                  <div style={{ flex: 1, height: 1, background: '#F3F4F6' }} />
                  <Link to={`/${tc.hubSlug}`} style={{ fontSize: 12, color: '#6B7280', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    Voir toutes les formations {tc.label} →
                  </Link>
                </div>

                {/* Cartes */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                  {list.map(spoke => (
                    <SpokeCard key={spoke.slug} spoke={spoke} tc={tc} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
      )}

      {/* ── CTA MILIEU DE PAGE ── */}
      <section style={{ padding: '48px 40px', background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)', color: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25 }}>
              Former votre équipe {metierData.label.toLowerCase()} à l'IA&nbsp;?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Devis sous 24h · Certifié Qualiopi · Finançable OPCO · Intra ou accompagnement individuel
            </p>
          </div>
          <Link to="/contact" style={{ background: '#fff', color: '#2563EB', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Contacter notre équipe →
          </Link>
        </div>
      </section>

      {/* ── COMPÉTENCES ACQUISES ── */}
      {content.skills?.length > 0 && (
        <section style={{ padding: '72px 40px', background: '#F9FAFB' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>
              Ce que vous saurez faire après la formation
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 36, maxWidth: 580 }}>
              Des compétences concrètes, applicables dès le lendemain de la formation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
              {content.skills.map((skill, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '14px 18px', border: '1px solid #E5E7EB', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check size={16} color="#10B981" strokeWidth={2.75} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.55, fontWeight: 500 }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── QUEL OUTIL CHOISIR ? ── */}
      {toolSlugs.length > 1 && (
        <section style={{ padding: '72px 40px', background: '#F9FAFB' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>
              ChatGPT, Copilot, Gemini ou Claude : lequel choisir ?
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
              Le meilleur outil IA est celui qui correspond à votre environnement et à vos besoins. Choisissez en fonction de votre contexte.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { toolSlug: 'chatgpt', when: "Vous n'êtes pas dans une suite bureautique spécifique, ou vous voulez l'IA la plus polyvalente et créative du marché." },
                { toolSlug: 'copilot', when: "Votre équipe travaille dans Microsoft 365 au quotidien : Word, Excel, Outlook, Teams, PowerPoint. Copilot s'intègre directement dans vos outils." },
                { toolSlug: 'gemini', when: "Votre entreprise est sur Google Workspace : Gmail, Docs, Sheets, Meet, Slides. Gemini est l'IA native de cet environnement." },
                { toolSlug: 'claude', when: "Vous traitez des documents longs, des analyses complexes ou des textes qui requièrent rigueur et nuance. Claude est l'IA reconnue pour la qualité rédactionnelle et le raisonnement approfondi." },
              ].filter(r => toolSlugs.includes(r.toolSlug)).map(row => {
                const tc = TOOL_CONFIG[row.toolSlug]
                return (
                  <div key={row.toolSlug} style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', border: '1px solid #E5E7EB', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: tc.bg, borderRadius: 8, padding: '6px 10px 6px 8px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <ToolLogo tool={row.toolSlug} size={20} color={tc.color} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: tc.color }}>{tc.label}</span>
                    </div>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}>{row.when}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── STATS + CONFIANCE ── */}
      <section style={{ background: '#F5F3EE', padding: '56px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}>
          {[
            { num: '+1 500', label: 'professionnels formés' },
            { num: '98 %', label: 'taux de satisfaction' },
            { num: '100 %', label: 'finançable OPCO' },
            { num: '2 jours', label: 'de formation intensive' },
          ].map(s => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 34, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      {faqItems.length > 0 && (
        <section style={{ padding: '80px 40px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>
              Questions fréquentes, Formation IA {metierData.label}
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 560 }}>
              Tout ce que vous devez savoir avant de vous inscrire.
            </p>
            <div>
              {faqItems.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MAILLAGE ENRICHI (par outil, métiers voisins, ressources) ── */}
      {enrichi?.maillage?.length > 0 && (
        <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
          <div style={wrap}>
            <div style={kickerStyle}>Pour aller plus loin</div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Approfondir par outil, ou élargir</h2>
            <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
              La formation métier compare les outils ; les formations par outil approfondissent celui que votre équipe a retenu.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
              {enrichi.maillage.map(rel => (
                <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                  <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = C}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                    <div style={{ display: 'inline-block', background: C_LIGHT, color: C, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                    <span style={{ fontSize: 13, color: C, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>En savoir plus<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AUTRES MÉTIERS ── */}
      <section style={{ padding: '72px 40px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>
            Explorer d'autres métiers
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 28 }}>
            Former plusieurs équipes ? Chaque formation est adaptée aux cas d'usage spécifiques de chaque fonction.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
            {otherMetiers.map(m => (
              <Link key={m.slug} to={`/formation-ia-${m.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '14px 16px', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: 10, transition: 'border-color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#D1D5DB'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  {(() => { const Icon = METIER_ICONS[m.slug]; return Icon ? <Icon size={18} color="#6B7280" strokeWidth={1.5} /> : null })()}
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#374151' }}>{m.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      <FounderNote />

      {/* ── CTA ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 38px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            {enrichi?.cta?.h2 || 'Vous ne savez pas quel outil choisir ?'}
          </h2>
          <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            {enrichi?.cta?.p || "Dites-nous votre environnement de travail et le profil de vos participants. On vous recommande la formation la plus adaptée sous 24 heures."}
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: '#2563EB', color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 20 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Certifié Qualiopi · Finançable OPCO · +1 500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}

// ─── Carte formation ─────────────────────────────────────────────────────────
function SpokeCard({ spoke, tc }) {
  const [hovered, setHovered] = useState(false)

  // Extraire 3 cas d'usage, toujours convertir en string (useCases et useCasesRaw peuvent être des objets).
  // stripLeadingEmoji retire un éventuel emoji en tête de chaîne (rendu via pictogramme ailleurs, jamais en glyphe brut).
  const toStr = u => stripLeadingEmoji(typeof u === 'string' ? u : (u?.title || u?.desc || ''))
  const rawUC = (spoke.useCasesRaw || []).slice(0, 3).map(toStr).filter(Boolean)
  const objUC = (spoke.useCases || []).slice(0, 3).map(toStr).filter(Boolean)
  const displayUC = rawUC.length ? rawUC : objUC

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 14,
        border: `2px solid ${hovered ? tc.color : '#E5E7EB'}`,
        overflow: 'hidden',
        transition: 'border-color 0.18s, box-shadow 0.18s',
        boxShadow: hovered ? `0 8px 24px ${tc.color}18` : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* En-tête colorée */}
      <div style={{ background: tc.bg, padding: '18px 20px 14px', borderBottom: `1px solid ${tc.color}22` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: 0, lineHeight: 1.3 }}>
            {spoke.h1}
          </h3>
          <span style={{ background: '#fff', color: tc.color, padding: '2px 8px', borderRadius: 99, fontSize: 11, fontWeight: 700, flexShrink: 0, border: `1px solid ${tc.color}33` }}>
            2 jours
          </span>
        </div>
      </div>

      {/* Corps */}
      <div style={{ padding: '16px 20px', flex: 1 }}>
        {displayUC.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {displayUC.map((uc, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, color: '#374151', lineHeight: 1.5 }}>
                <span style={{ color: tc.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                {uc}
              </li>
            ))}
          </ul>
        )}

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          {['Certifié Qualiopi', 'Finançable OPCO', 'Intra ou individuel'].map(badge => (
            <span key={badge} style={{ fontSize: 11, fontWeight: 600, color: '#6B7280', background: '#F3F4F6', padding: '3px 8px', borderRadius: 4 }}>{badge}</span>
          ))}
        </div>
      </div>

      {/* Footer carte */}
      <div style={{ padding: '12px 20px 16px', borderTop: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 900, color: '#0A0A0A' }}>1 980 €</span>
          <span style={{ fontSize: 12, color: '#6B7280' }}> /jour (groupe)</span>
        </div>
        <Link to={`/${spoke.slug}`} style={{
          background: hovered ? tc.color : '#0A0A0A',
          color: '#fff', padding: '9px 16px', borderRadius: 7,
          textDecoration: 'none', fontSize: 13, fontWeight: 700,
          transition: 'background 0.18s', flexShrink: 0,
        }}>
          Voir le programme →
        </Link>
      </div>
    </div>
  )
}

