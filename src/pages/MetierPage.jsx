import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  ChevronDown, BadgeCheck, Wallet, MonitorSmartphone, Building2,
  ShoppingCart, Sparkles, Check,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { stripLeadingEmoji } from '../components/Pictogram'
import ToolLogo from '../components/ToolLogo'
import { METIERS, getSpokesByMetier } from '../data/seo-pages'
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
}

// ─── Contenu éditorial par métier ────────────────────────────────────────────
const METIER_CONTENT = {
  marketing: {
    metaTitle: 'Formation IA Marketing pour entreprises | Qualiopi | Masteria',
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
    metaDesc: 'Formez vos équipes RH à l\'IA : recrutement, onboarding, entretiens annuels, gestion administrative. Certifié Qualiopi, finançable OPCO. +1 500 professionnels formés.',
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
    metaDesc: 'Formez vos équipes commerciales à l\'IA : prospection, propositions, suivi client. Certifié Qualiopi, finançable OPCO. Résultats mesurables dès la première semaine.',
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
    metaTitle: 'Formation IA Finance et Contrôle de Gestion | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes finance à l\'IA : reporting, analyse de données, synthèses financières. Certifié Qualiopi, finançable OPCO. Résultats visibles dès la clôture suivante.',
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
    metaTitle: 'Formation IA Juridique | ChatGPT, Claude pour les juristes | Masteria, Qualiopi',
    metaDesc: 'Formez vos équipes juridiques à l\'IA : analyse de contrats, synthèses, rédaction de clauses. Claude et ChatGPT pour les juristes. Certifié Qualiopi, finançable OPCO.',
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
    metaTitle: 'Formation IA Communication pour entreprises | Qualiopi | Masteria',
    metaDesc: 'Formation intelligence artificielle pour les équipes communication : contenus éditoriaux, relations presse, réseaux sociaux, communication de crise. Certifié Qualiopi, finançable OPCO. Devis sous 24h.',
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
    metaDesc: 'Formez vos managers à l\'IA : réunions, reporting, communication d\'équipe, conduite du changement. Certifié Qualiopi, finançable OPCO. Moins de tâches admin, plus de terrain.',
    h1: 'Formation IA pour les Managers',
    intro: "Comptes-rendus de réunion, reporting, communication d'équipe, pilotage de l'activité : l'IA redonne aux managers du temps pour le terrain. Moins d'heures derrière l'écran, plus de présence auprès des équipes.",
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
    metaDesc: 'Formez vos assistantes de direction à l\'IA : emails, courriers, organisation, comptes-rendus. Certifié Qualiopi, finançable OPCO. Rédiger dans le style de la direction en quelques minutes.',
    h1: 'Formation IA pour les Assistants et assistantes de direction',
    intro: "Emails, courriers, comptes-rendus, organisation, gestion de projets transverses : l'IA est l'allié naturel des assistants et assistantes de direction qui jonglent avec tout. La formation vous apprend à créer des prompts dans le style de votre direction, pour produire des documents irréprochables en quelques minutes.",
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
    metaDesc: 'Formez vos équipes SEO à l\'IA : contenu optimisé à grande échelle, recherche sémantique, balises, maillage. Certifié Qualiopi, finançable OPCO. Productivité ×5.',
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
    metaDesc: 'Formez vos équipes service client à l\'IA : réponses rapides et cohérentes, gestion des escalades, scripts. Certifié Qualiopi, finançable OPCO. Traitement accéléré de 60%.',
    h1: 'Formation IA pour les équipes Service Client',
    intro: "Les équipes service client traitent des volumes considérables de demandes répétitives. L'IA permet de répondre plus vite, avec plus de cohérence, tout en libérant les agents pour les interactions à forte valeur. La formation couvre la rédaction de réponses, la gestion des escalades et l'exploitation des données client.",
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
    metaTitle: 'Formation IA pour les DSI et équipes IT | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes IT et DSI à l\'IA : documentation technique, code, logs, gouvernance IA. Certifié Qualiopi, finançable OPCO. Usages pratiques et cadre stratégique.',
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
    metaTitle: 'Formation IA pour les Équipes Pédagogiques | Qualiopi | Masteria',
    metaDesc: 'Formez vos équipes pédagogiques à l\'IA : création de modules, individualisation des parcours, évaluations. Certifié Qualiopi, finançable OPCO. Un module en 2h au lieu de 2 jours.',
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
    metaDesc: 'Formez vos équipes Achats à l\'IA : sourcing fournisseurs, analyse d\'offres, négociation, suivi contractuel. Certifié Qualiopi, finançable OPCO. Productivité ×3 sur l\'analyse documentaire.',
    h1: 'Formation IA pour les équipes Achats',
    intro: "Sourcing, analyse comparative d\'offres, négociation, suivi de contrats fournisseurs : les Achats sont confrontés à des volumes documentaires considérables où l\'IA fait gagner un temps décisif. La formation couvre le cycle complet, du brief fournisseur à l\'audit contractuel, avec une attention particulière sur la rigueur factuelle et la confidentialité.",
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
    metaDesc: 'Formations IA transverses pour acculturer toutes vos équipes : Sprint IA 3 h, prompts, AI Act flash. Certifié Qualiopi, finançable OPCO. Déploiement à grande échelle.',
    h1: 'Formations IA transverses, pour toutes vos équipes',
    intro: "Quand l\'enjeu est de sensibiliser, acculturer ou outiller largement, sans bloquer l\'agenda des collaborateurs, les formats transverses Masteria sont le bon point d\'entrée. Sprint IA 3 h, sensibilisation grand public, prompts efficaces, conformité AI Act : autant de formats prêts à déployer à l\'échelle d\'une convention, d\'un séminaire ou d\'un plan IA d\'entreprise.",
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
  claude:   { label: 'Claude (Anthropic)',  color: '#d97706', bg: '#fef3c7', hubSlug: 'formation-claude-ia' },
  mistral:  { label: 'Mistral AI',          color: '#fa500a', bg: '#fed7aa', hubSlug: 'formation-mistral-ai' },
}

// Ordre d'affichage des outils ("multi-outils" en premier pour mettre en avant le panorama)
const TOOL_ORDER = ['multi-outils', 'chatgpt', 'copilot', 'gemini', 'claude', 'mistral']

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
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, marginTop: -4 }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function MetierPage() {
  const location = useLocation()
  const metier = location.pathname.replace('/formation-ia-', '')
  const content = METIER_CONTENT[metier]
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

  // FAQ data pour ce métier
  const faqItems = (METIER_FAQ && METIER_FAQ[metier]) || []

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
    { name: metierData.label, slug: `formation-ia-${metier}` },
  ]

  return (
    <>
      <SEOHead
        title={content.metaTitle}
        description={content.metaDesc}
        slug={`formation-ia-${metier}`}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO clair ── */}
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', padding: '64px 40px 72px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#6B7280' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#6B7280', textDecoration: 'none' }}>Formations par métier</Link>
            <span style={{ color: '#6B7280' }}>/</span>
            <span style={{ color: '#92400E', fontWeight: 600 }}>{metierData.label}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
            {(() => { const Icon = METIER_ICONS[metier]; return Icon ? (
              <div style={{ width: 64, height: 64, borderRadius: 16, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #fde68a' }}>
                <Icon size={32} color="#d97706" strokeWidth={1.8} />
              </div>
            ) : null })()}
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
                <span style={{ background: '#fef3c7', color: '#92400E', padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700 }}>
                  {spokes.length} formation{spokes.length > 1 ? 's' : ''} disponible{spokes.length > 1 ? 's' : ''}
                </span>
                <span style={{ background: '#fff', color: '#6B7280', padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, border: '1px solid #E5E7EB' }}>
                  2 jours · 14h · Certifié Qualiopi
                </span>
              </div>
              <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
                {content.h1}
              </h1>
              <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.8, maxWidth: 660, marginBottom: 32 }}>
                {content.intro}
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                <a href="#formations" style={{ background: '#F97316', color: '#fff', padding: '13px 26px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 700, boxShadow: '0 6px 20px rgba(249,115,22,0.35)' }}>
                  Voir les formations →
                </a>
                <Link to="/contact" style={{ background: '#fff', color: '#0A0A0A', padding: '13px 26px', borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 600, border: '1px solid #E5E7EB' }}>
                  Contacter notre équipe
                </Link>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                  { icon: BadgeCheck,        label: 'Certifié Qualiopi' },
                  { icon: Wallet,            label: 'Finançable OPCO' },
                  { icon: MonitorSmartphone, label: 'Présentiel & distanciel' },
                  { icon: Building2,         label: 'Intra ou accompagnement individuel' },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  >
                    <Icon size={15} strokeWidth={2.2} style={{ color: '#d97706' }} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLÉMATIQUES MÉTIER ── */}
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

      {/* ── FORMATIONS PAR OUTIL ── */}
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

      {/* ── CTA ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 38px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Vous ne savez pas quel outil choisir ?
          </h2>
          <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Dites-nous votre environnement de travail et le profil de vos participants. On vous recommande la formation la plus adaptée sous 24 heures.
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

