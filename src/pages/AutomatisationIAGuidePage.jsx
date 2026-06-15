import { Link } from 'react-router-dom'
import {
  ArrowRight, BookOpen, Check, ClipboardList,
  Compass, Cog, FileSpreadsheet, GitBranch, Handshake, Headphones, Megaphone,
  Plug, Scale, Sparkles, Users, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier éditoriale « automatisation IA » (slug /automatisation-ia).
 * Tête du cluster : « automatisation ia » (880/mois), « ia automatisation »,
 * « automatisation ia entreprise », « automatisation de process entreprise avec ia »,
 * « automatisation projet ia ». Guide long format (3 000+ mots), maillage vers
 * /formation-automatisation-ia, /agence-automatisation-ia, /agents-ia-entreprise,
 * /agence-ia et les articles de blog du cluster.
 * Design premium : icônes lucide (zéro emoji), kickers, tableaux comparatifs,
 * réponses directes citables sous les H2. Accent bleu Masteria (#2563EB).
 */

const SLUG = 'automatisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Automatisation IA : le guide complet | Masteria"
const META_DESC = "Automatisation IA : définition, exemples par métier, outils, méthode en 5 étapes et budgets pour automatiser vos processus. Cadrage initial gratuit."
const H1 = "Automatisation IA : le guide complet pour automatiser vos processus"

const SOMMAIRE = [
  { href: '#definition', label: "Qu'est-ce que l'automatisation IA ?" },
  { href: '#cas-usage', label: 'Que peut-on automatiser en 2026 ?' },
  { href: '#outils', label: 'Les outils : 3 familles' },
  { href: '#methode', label: 'La méthode en 5 étapes' },
  { href: '#sur-mesure', label: 'Le faire développer sur mesure' },
  { href: '#erreurs', label: 'Les 6 erreurs à éviter' },
  { href: '#cout', label: 'Combien ça coûte' },
  { href: '#faq', label: 'Questions fréquentes' },
]

const ESSENTIEL = [
  "L'automatisation IA confie à l'intelligence artificielle des tâches qui demandaient un jugement humain (lire, trier, rédiger, décider), là où la RPA classique n'exécute que des règles fixes.",
  "On automatise en priorité le tri d'emails, le traitement des factures, les comptes rendus, les relances, la qualification des demandes entrantes et le reporting.",
  "Trois familles d'outils suffisent : les assistants IA (GPTs, Projects, Gems), les plateformes no-code (Make, Zapier, n8n, Power Automate) et les agents IA autonomes.",
  "La méthode tient en cinq étapes : cartographier, scorer impact et faisabilité, prototyper sur un seul processus, sécuriser données et validation humaine, déployer et former.",
  "Côté budget : 0 à 50 € par mois et par personne pour les outils, un développement sur devis, et 1 980 € HT par jour pour former les équipes, seul poste finançable par l'OPCO.",
]

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1100, margin: '0 auto' }
const prose = { maxWidth: 860 }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em' }
const pStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 18px' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { ...prose, background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px' }

const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4 }
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

/* ───────── Comparatif RPA vs IA (tableau) ───────── */

const TABLE_RPA = [
  { critere: 'Logique de fonctionnement', rpa: "Exécute des règles fixes, définies à l'avance", ia: 'Interprète le contexte et applique des consignes écrites' },
  { critere: 'Données traitées', rpa: 'Structurées : tableaux, formulaires, champs normés', ia: 'Non structurées : emails, PDF, conversations' },
  { critere: 'Cas imprévus', rpa: "S'arrête ou se trompe dès qu'un cas sort du cadre", ia: 'Gérés et arbitrés, sous supervision humaine' },
  { critere: 'Terrain idéal', rpa: 'Processus stables à très gros volumes', ia: 'Tâches qui demandaient lecture et jugement' },
  { critere: 'Exemple type', rpa: 'Ressaisie entre deux logiciels au format constant', ia: 'Tri, synthèse et réponse aux emails entrants' },
]

/* ───────── Quelle famille d'outils pour quel besoin (tableau) ───────── */

const TABLE_FAMILLES = [
  {
    famille: 'Assistants IA personnalisés',
    sub: 'GPTs, Projects, Gems',
    besoin: 'Tâche individuelle récurrente : rédaction, synthèse, analyse',
    profil: 'Tout collaborateur, sans compétence technique',
    budget: "Inclus dans l'abonnement existant",
    limite: 'Un humain déclenche la tâche à chaque fois',
  },
  {
    famille: 'Plateformes no-code',
    sub: 'Make, Zapier, n8n, Power Automate',
    besoin: 'Flux entre applications, déclenché par un événement',
    profil: 'Profil métier formé une à deux journées',
    budget: "Quelques euros à quelques dizaines d'euros par mois",
    limite: 'Demande un processus clarifié en amont',
  },
  {
    famille: 'Agents IA autonomes',
    sub: 'Objectif confié, étapes décidées par l\'agent',
    besoin: 'Objectif en plusieurs étapes, décisions intermédiaires',
    profil: 'Équipe accompagnée, supervision rigoureuse',
    budget: 'Variable selon les volumes et les outils',
    limite: 'Supervision exigeante, à réserver aux besoins démontrés',
  },
]

/* ───────── Cas d'usage par fonction ───────── */

const FONCTIONS = [
  {
    icon: FileSpreadsheet,
    title: 'Administratif et comptabilité',
    intro: "Souvent la fonction la plus vite rentable : les volumes sont élevés et les règles sont claires.",
    examples: [
      "Extraction des données de factures fournisseurs (montants, échéances, TVA) et rapprochement avec les bons de commande, avant transfert vers l'outil comptable.",
      "Relances d'impayés rédigées automatiquement, avec un ton adapté à l'ancienneté de la créance et à l'historique du client.",
      "Tri des emails et du courrier numérisé : classement par nature, routage vers le bon service, projet de réponse préparé pour validation.",
      "Préparation des notes de frais : lecture des justificatifs, contrôle des plafonds, pré-saisie dans l'outil de gestion.",
    ],
  },
  {
    icon: Handshake,
    title: 'Commercial et ventes',
    intro: "L'IA prend la saisie et la préparation, le commercial garde la relation et la négociation.",
    examples: [
      "Qualification des leads entrants : lecture de la demande, enrichissement, scoring selon vos critères, routage au bon commercial avec une fiche de synthèse.",
      "Comptes rendus de rendez-vous générés depuis la transcription, avec mise à jour du CRM et création des tâches de suivi.",
      "Première trame de proposition commerciale assemblée à partir de votre bibliothèque d'offres et du contexte du prospect.",
      "Veille sur les comptes stratégiques : synthèse hebdomadaire des actualités de vos clients clés.",
    ],
  },
  {
    icon: Megaphone,
    title: 'Marketing et communication',
    intro: "La stratégie et la création restent humaines, la déclinaison et le suivi s'automatisent.",
    examples: [
      "Déclinaison d'un contenu pilier (article, webinaire, étude) en posts LinkedIn, newsletter et scripts vidéo, dans la charte éditoriale de la marque.",
      "Synthèse mensuelle des retours clients (avis, enquêtes, tickets) avec verbatims classés par thème.",
      "Personnalisation des campagnes email par segment, à partir des données du CRM.",
      "Brief créatif pré-rempli à partir des résultats des campagnes précédentes.",
    ],
  },
  {
    icon: Users,
    title: 'Ressources humaines',
    intro: "Des gains réels, avec une vigilance forte : le tri automatisé de candidatures figure parmi les usages à haut risque au sens de l'AI Act et impose une validation humaine systématique.",
    examples: [
      "Présélection assistée des candidatures sur des critères explicites et traçables, chaque décision restant validée par un recruteur.",
      "Rédaction des offres d'emploi et des réponses aux candidats à chaque étape du processus.",
      "Préparation de l'onboarding : checklist, demandes d'accès, emails de bienvenue, programme de la première semaine.",
      "Réponses aux questions RH récurrentes (congés, mutuelle, attestations) à partir de la documentation interne.",
    ],
  },
  {
    icon: Headphones,
    title: 'Service client',
    intro: "Le partage des rôles est simple : l'IA absorbe le répétitif, le conseiller traite le sensible.",
    examples: [
      "Réponses aux questions récurrentes à partir de la base de connaissances, avec escalade vers un humain au moindre doute.",
      "Tri et priorisation des tickets selon l'urgence, le sujet et le niveau d'insatisfaction détecté.",
      "Résumé de l'historique du client présenté au conseiller avant chaque prise en charge.",
      "Analyse hebdomadaire des motifs de contact pour traiter les causes en amont.",
    ],
  },
  {
    icon: ClipboardList,
    title: 'Gestion de projet',
    intro: "La production documentaire du pilotage se prête particulièrement bien à l'automatisation.",
    examples: [
      "Comptes rendus de réunion structurés (décisions, actions, échéances) générés depuis la transcription et diffusés aux participants.",
      "Reporting d'avancement consolidé à partir de vos outils de gestion de tâches, commenté et mis en forme automatiquement.",
      "Relances automatiques des porteurs d'actions en retard, avec rappel du contexte et de l'échéance.",
      "Création de tâches dans l'outil de gestion à partir des emails et des décisions de réunion.",
    ],
  },
  {
    icon: Scale,
    title: 'Juridique et conformité',
    intro: "L'IA prépare le travail, le juriste tranche : aucune automatisation ne doit engager l'entreprise sans relecture.",
    examples: [
      "Première lecture des contrats : repérage des clauses sensibles ou manquantes par rapport à votre grille de référence, avant la revue juridique.",
      "Veille réglementaire filtrée selon votre secteur et résumée chaque semaine.",
      "Préparation des registres et de la documentation RGPD à partir des informations collectées auprès des équipes.",
      "Comparaison de deux versions d'un document avec synthèse des écarts.",
    ],
  },
]

/* ───────── Méthode en 5 étapes ───────── */

const ETAPES = [
  {
    title: 'Cartographier les tâches automatisables',
    body: "Listez avec chaque équipe les tâches répétitives : fréquence, temps consommé, outils impliqués, niveau de risque en cas d'erreur. Une semaine d'observation honnête fait généralement émerger 15 à 30 candidates. Cherchez en priorité les tâches que tout le monde repousse, celles qui suivent toujours le même schéma et celles qui consistent à déplacer de l'information d'un outil vers un autre.",
  },
  {
    title: "Scorer l'impact et la faisabilité",
    body: "Évaluez chaque tâche sur deux axes. L'impact : temps récupéré, fréquence, nombre de personnes concernées. La faisabilité : clarté des règles, qualité des données disponibles, gravité d'une erreur. Les tâches à fort impact et forte faisabilité forment la première vague. Celles à fort impact mais faible faisabilité attendront : elles demandent souvent de nettoyer les données ou de clarifier le processus avant toute chose.",
  },
  {
    title: 'Prototyper sur un seul processus',
    body: "Choisissez un seul processus et construisez un prototype en conditions réelles sur deux à quatre semaines. Mesurez avant et après : temps passé, taux d'erreur, ressenti de l'équipe. Une automatisation qui tourne et fait gagner plusieurs heures par semaine convainc davantage qu'un schéma directeur de quarante pages.",
  },
  {
    title: 'Sécuriser les données et la validation humaine',
    body: "Avant d'élargir, verrouillez deux sujets. Les données : quelles informations sortent de l'entreprise, vers quels serveurs, avec quelles garanties contractuelles (RGPD, hébergement, durée de conservation). La supervision : pour chaque automatisation, définissez ce que l'IA décide seule, ce qui passe par une validation humaine et comment reprendre la main à tout moment.",
  },
  {
    title: 'Déployer, documenter et former',
    body: "Une automatisation non documentée meurt avec le départ de la personne qui l'a construite. Documentez chaque flux (déclencheur, traitement, action, responsable), nommez un référent, puis formez les équipes à utiliser, surveiller et faire évoluer leurs automatisations. Cette étape est la plus souvent sacrifiée et la plus déterminante pour que les gains durent.",
  },
]

/* ───────── Développement sur mesure (service dominant) ───────── */

const BUILD_STEPS = [
  {
    icon: Compass,
    title: 'Cadrage et architecture',
    desc: "Nous cartographions vos processus, identifions les automatisations à plus fort rendement et concevons l'architecture cible : déclencheurs, traitements IA, points de contrôle, intégrations à votre système d'information.",
  },
  {
    icon: Cog,
    title: 'Développement sur mesure',
    desc: "Nos équipes construisent les automatisations : workflows orchestrés, assistants spécialisés, agents connectés à vos outils via API et MCP. Vous gardez la propriété du code et des configurations.",
  },
  {
    icon: Plug,
    title: 'Intégration à vos outils',
    desc: "Nous raccordons les automatisations à votre existant (CRM, ERP, messagerie, outils métier) et posons les garde-fous : validation humaine sur les actions sensibles, traçabilité, conformité RGPD.",
  },
  {
    icon: GitBranch,
    title: 'Déploiement et maintien',
    desc: "Mise en production progressive, mesure des gains réels, documentation complète et passation. Vos automatisations tournent en conditions réelles, supervisées et faites pour durer.",
  },
]

/* ───────── Les 6 erreurs ───────── */

const ERREURS = [
  {
    title: 'Automatiser un processus bancal',
    body: "Si le processus est flou, mal défini ou contesté en interne, l'automatisation accélère le désordre. Clarifiez les règles et les responsabilités d'abord, automatisez ensuite. Une heure passée à formaliser le processus en économise dix en correctifs.",
  },
  {
    title: 'Commencer trop large',
    body: "Dix automatisations lancées en parallèle donnent dix chantiers à moitié finis et des équipes lassées. Un seul processus mené jusqu'au bout, mesuré et raconté en interne crée plus de valeur et plus d'envie pour la suite.",
  },
  {
    title: "Choisir l'outil avant le besoin",
    body: "L'abonnement souscrit sous le coup de l'enthousiasme finit souvent inutilisé au bout de trois mois. Partez de la cartographie des tâches : l'outil découle du besoin, et le bon outil est souvent celui que vous payez déjà.",
  },
  {
    title: 'Supprimer toute validation humaine',
    body: "Un modèle d'IA se trompe avec aplomb. Sur tout ce qui touche à l'argent, au juridique, aux clients ou aux salariés, un humain valide avant l'action. Le point de contrôle se place aux endroits où l'erreur coûte cher.",
  },
  {
    title: 'Ignorer les données et la conformité',
    body: "Envoyer des données clients ou RH vers un outil non vérifié expose l'entreprise. Hébergement, réutilisation des données pour l'entraînement des modèles, durée de conservation, conformité RGPD : ces vérifications se font avant le premier test.",
  },
  {
    title: "Négliger la formation et l'adoption",
    body: "Une automatisation que l'équipe ne comprend pas génère de la méfiance, puis des contournements, puis l'abandon. Le temps de formation fait partie du projet au même titre que le temps de construction, et il conditionne la durée de vie des gains.",
  },
]

/* ───────── FAQ (réponse directe en gras + complément) ───────── */

const FAQ = [
  {
    q: "Quelle différence entre automatisation IA et RPA ?",
    strong: "La RPA exécute des règles fixes sur des données structurées. L'automatisation IA interprète le contexte et traite des données non structurées : emails, documents, conversations.",
    rest: "La RPA reste imbattable sur les processus stables à très gros volumes, comme certaines opérations de back-office. L'automatisation IA couvre les tâches qui demandaient jusqu'ici une lecture et un jugement humains. Les grandes organisations combinent souvent les deux approches.",
  },
  {
    q: "Faut-il savoir coder pour automatiser avec l'IA ?",
    strong: "Non. Les assistants IA personnalisés et les plateformes no-code comme Make, Zapier ou Power Automate se configurent visuellement, sans écrire de code.",
    rest: "Des compétences techniques deviennent utiles sur les cas avancés : connexion à des API internes, agents autonomes, gros volumes. Pour la majorité des besoins d'une PME, un profil métier formé pendant deux jours construit et maintient ses automatisations.",
  },
  {
    q: "Quels processus automatiser en premier ?",
    strong: "Commencez par les tâches fréquentes, chronophages, aux règles claires et au risque faible en cas d'erreur : tri d'emails, comptes rendus, relances, ressaisies entre deux outils.",
    rest: "Ces cas produisent des gains visibles en quelques semaines et créent l'adhésion pour la suite. Gardez les processus sensibles (paie, juridique, décisions client) pour une seconde vague, avec validation humaine systématique.",
  },
  {
    q: "Combien coûte une automatisation IA pour une PME ?",
    strong: "Comptez 0 à 50 € par mois et par personne pour les outils, un accompagnement sur devis si vous vous faites aider, et 1 980 € par jour pour former une équipe.",
    rest: "Beaucoup de premières automatisations se construisent avec les abonnements que l'entreprise paie déjà. Le véritable investissement porte sur le temps de cadrage et sur la montée en compétence des équipes.",
  },
  {
    q: "L'automatisation IA est-elle compatible avec le RGPD ?",
    strong: "Oui, à condition de choisir des outils offrant des garanties contractuelles sur les données et de définir précisément ce qui peut leur être transmis.",
    rest: "Vérifiez la localisation de l'hébergement, la non-réutilisation de vos données pour l'entraînement des modèles, les durées de conservation et la base légale des traitements. Certains usages, comme le tri de candidatures, relèvent en plus des exigences de l'AI Act et imposent une supervision humaine renforcée.",
  },
  {
    q: "Quelle différence entre une automatisation IA et un agent IA ?",
    strong: "Une automatisation IA suit un scénario défini à l'avance. Un agent IA reçoit un objectif et décide lui-même des étapes pour l'atteindre.",
    rest: "L'agent gère des situations plus ouvertes, au prix d'une supervision plus exigeante. Dans la pratique, on commence par des automatisations à scénario et on introduit des agents quand le besoin de flexibilité est démontré.",
  },
  {
    q: "Quels secteurs profitent le plus de l'automatisation IA ?",
    strong: "Tout secteur où le travail administratif se répète en tire parti : services, industrie, santé, juridique, immobilier, retail, secteur public.",
    rest: "Les fonctions support (finance, RH, service client, commercial) se ressemblent d'un secteur à l'autre, et c'est là qu'apparaissent les premiers gains. Les spécificités métier se traitent ensuite, processus par processus, une fois les cas transverses rentabilisés.",
  },
  {
    q: "Combien de temps faut-il pour automatiser un premier processus ?",
    strong: "Comptez quatre à six semaines entre le cadrage et la mise en production d'un premier processus, pour un gain de plusieurs heures par semaine sur l'équipe concernée.",
    rest: "Les cas simples comme le tri d'emails ou les comptes rendus se prototypent en quelques jours. Les processus reliés à plusieurs outils demandent davantage d'intégration. Démarrer sur un seul processus reste la voie la plus rapide vers un résultat visible.",
  },
  {
    q: "Make, Zapier ou n8n : quel outil d'automatisation IA choisir ?",
    strong: "Make et Zapier sont les plus accessibles pour démarrer, n8n s'auto-héberge quand la confidentialité prime, et Power Automate s'impose dans un environnement Microsoft 365.",
    rest: "Le bon outil dépend de votre existant et du niveau de maîtrise des données souhaité, pas d'un classement absolu. On part des applications que vous payez déjà avant d'en ajouter de nouvelles.",
  },
  {
    q: "Comment mesurer le retour sur investissement d'une automatisation IA ?",
    strong: "Mesurez trois indicateurs avant et après : le temps passé sur la tâche, le taux d'erreurs ou de reprises, et le volume traité à effectif constant.",
    rest: "Un prototype en conditions réelles sur deux à quatre semaines suffit à objectiver le gain. Le retour vient surtout du temps redéployé vers des tâches à plus forte valeur, au-delà de la seule baisse des coûts directs.",
  },
]

const faqItems = FAQ.map(f => ({ q: f.q, a: `${f.strong} ${f.rest}` }))

/* ───────── Pour aller plus loin ───────── */

const RELATED = [
  { label: "Agence de développement IA", href: '/agence-developpement-ia', tag: 'Sur mesure', desc: "Nous concevons et développons vos automatisations et vos solutions IA de bout en bout, jusqu'à la mise en production." },
  { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Service', desc: "Masteria cadre, construit et déploie vos automatisations. Cadrage initial gratuit, vous restez propriétaire du système." },
  { label: "Outils IA sur mesure", href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Au-delà du flux : des applications et outils internes pilotés par l'IA, conçus pour vos cas d'usage propres." },
  { label: 'Les agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Guide', desc: "Ce que les agents IA autonomes savent faire, leurs limites et les conditions d'un déploiement sûr." },
  { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Formation', desc: "En complément du déploiement, 2 jours pour rendre vos équipes autonomes. Certifié Qualiopi, finançable OPCO." },
  { label: 'Automatisation IA en PME : les processus prioritaires', href: '/blog/automatisation-ia-pme-processus-prioritaires', tag: 'Blog', desc: "Les processus qui rapportent le plus vite quand on démarre, classés par impact et faisabilité." },
]

/* ───────── Données de fraîcheur + schema TechArticle (E-E-A-T, GEO) ───────── */

const PUBLISHED = '2026-06-12'
const UPDATED = '2026-06-14'

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
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.master-ia.fr/${SLUG}` },
  about: [
    "Automatisation IA",
    "Automatisation des processus par l'intelligence artificielle",
    "Workflows no-code",
    "Agents IA",
  ],
  keywords: "automatisation ia, ia automatisation, automatisation ia entreprise, automatisation de process entreprise avec ia, automatisation projet ia, agents ia, workflow no-code, make, zapier, n8n, power automate",
  isAccessibleForFree: true,
}

export default function AutomatisationIAGuidePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (Définition / Outils / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Automatisation IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
        extraJsonLd={articleJsonLd}
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Automatisation IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide complet · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Automatisation IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le guide complet pour automatiser vos processus</span>
          </h1>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Trier les factures, qualifier les demandes entrantes, rédiger les comptes rendus, relancer les impayés : une partie du travail de bureau se répète chaque semaine, presque à l'identique. L'intelligence artificielle sait désormais prendre en charge ces tâches, y compris <strong style={{ color: '#fff', fontWeight: 700 }}>celles qui demandaient de lire, comprendre et décider</strong>.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Ce guide fait le tour du sujet en sept points : la définition et la différence avec l'automatisation classique, ce que l'on peut automatiser fonction par fonction, les familles d'outils, la méthode pour réussir, les erreurs courantes, les budgets à prévoir et les questions que tout le monde se pose.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Discutons de votre projet
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Notre agence de développement IA
            </Link>
          </div>
        </div>
      </section>

      {/* ── L'essentiel + Sommaire ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          {/* L'essentiel (résumé citable GEO) */}
          <div style={{ ...cardStyle, padding: '26px 30px', maxWidth: 720, marginBottom: 20, borderLeft: `3px solid ${c}` }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>L'essentiel en 5 points</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {ESSENTIEL.map((point, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.6 }}>
                  <Check size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sommaire */}
          <div style={{ ...cardStyle, padding: '26px 30px', maxWidth: 720 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 14px' }}>Sommaire</p>
            <ol style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SOMMAIRE.map(item => (
                <li key={item.href} style={{ fontSize: 15, color: '#374151' }}>
                  <a href={item.href} style={{ color: c, fontWeight: 600, textDecoration: 'none' }}>{item.label}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 1. DÉFINITION (éditorial asymétrique) ── */}
      <section id="definition" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Définition</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Qu'est-ce que l'automatisation IA ?</h2>

              {/* Réponse directe (GEO) */}
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>L'automatisation IA consiste à confier à l'intelligence artificielle des tâches qui exigeaient jusqu'ici un jugement humain : lire un email et décider de la suite, résumer une réunion, qualifier une demande. Là où l'automatisation classique (RPA) exécute des règles fixes, l'IA interprète le contexte et traite les cas imprévus.</strong>
              </p>
            </div>

            <div>
              <p style={pStyle}>
                La différence avec l'automatisation traditionnelle tient à la nature des tâches prises en charge. La RPA (Robotic Process Automation), les macros et les scripts exécutent des scénarios entièrement prévisibles : copier une cellule, remplir un formulaire, déplacer un fichier. Dès qu'une variation apparaît, par exemple une facture dont la mise en page change ou un email ambigu, le robot s'arrête ou se trompe.
              </p>
              <p style={pStyle}>
                L'IA générative ajoute la part de jugement qui manquait. Un modèle de langage peut lire un document qu'il n'a jamais vu, en extraire l'essentiel, reformuler, classer, proposer une décision argumentée. Combinée aux outils d'automatisation, elle permet de traiter des flux entiers de travail intellectuel répétitif : la machine gère les cas standards, l'humain garde les cas sensibles et la validation finale.
              </p>
              <p style={pStyle}>
                Concrètement, une automatisation IA combine trois briques : un déclencheur (un email arrive, un formulaire est soumis, une échéance tombe), un traitement par l'IA (lire, résumer, extraire, rédiger, décider selon des consignes écrites) et une action (mettre à jour le CRM, envoyer une réponse, créer une tâche, alerter un humain).
              </p>

              {/* Tableau comparatif RPA vs IA */}
              <div style={{ ...cardStyle, overflowX: 'auto', margin: '32px 0' }}>
                <table aria-label="Comparatif entre automatisation classique (RPA) et automatisation IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                  <thead>
                    <tr>
                      <th scope="col" style={{ ...thStyle, width: '24%' }}>Critère</th>
                      <th scope="col" style={{ ...thStyle, width: '38%' }}>Automatisation classique (RPA, macros)</th>
                      <th scope="col" style={{ ...thStyle, width: '38%', color: c }}>Automatisation IA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_RPA.map((row, i) => (
                      <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                        <th scope="row" style={{ ...tdStyle, textAlign: 'left', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 14 }}>{row.critere}</th>
                        <td style={tdStyle}>{row.rpa}</td>
                        <td style={tdStyle}>{row.ia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={{ ...pStyle, marginBottom: 0 }}>
                Les deux approches se complètent, mais pour une PME ou une ETI qui démarre en 2026, l'automatisation IA offre le meilleur rapport effort sur résultat : les outils sont accessibles sans développeur et les cas d'usage couvrent la majorité des tâches de bureau. Pour donner ces réflexes à vos équipes, la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> de Masteria couvre ces fondamentaux en deux jours de pratique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CAS D'USAGE PAR FONCTION ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Cas d'usage</Kicker>
          <h2 style={{ ...h2Style, ...prose }}>Que peut-on automatiser avec l'IA en 2026 ?</h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Toute tâche répétitive qui suit une logique explicable et tolère une relecture humaine peut être automatisée : tri des emails, traitement des factures, comptes rendus, relances, qualification des demandes entrantes, reporting. En 2026, cela couvre une large part du travail administratif d'une PME, sans écrire une ligne de code.</strong>
          </p>

          <p style={{ ...pStyle, ...prose, marginBottom: 36 }}>
            Voici un panorama par fonction, avec des exemples réalistes tels qu'on les rencontre en PME et en ETI. Dans nos cadrages, chaque équipe identifie en général dix à quinze tâches candidates dès le premier atelier, et les plus simples se prototypent dans la semaine. Pour savoir lesquelles traiter en premier, notre article sur <Link to="/blog/automatisation-ia-pme-processus-prioritaires" style={aStyle}>les processus prioritaires à automatiser en PME</Link> propose une grille de lecture simple.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))', gap: 24 }}>
            {FONCTIONS.map(f => (
              <div key={f.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <IconBox icon={f.icon} />
                  <h3 style={{ ...h3Style, margin: 0, fontSize: 18 }}>{f.title}</h3>
                </div>
                <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 16px' }}>{f.intro}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {f.examples.map((ex, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>
                      <ArrowRight size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ ...pStyle, ...prose, marginTop: 32, marginBottom: 0 }}>
            Chacun de ces exemples se construit en quelques jours à quelques semaines selon la complexité. Pour une vue d'ensemble organisée des <Link to="/cas-usage-ia-entreprise" style={aStyle}>cas d'usage de l'IA par fonction</Link>, et pour les usages propres à votre activité, nos pages <Link to="/ia-secteurs" style={aStyle}>IA par secteur</Link> déclinent l'automatisation métier par métier. Pour identifier ceux qui rapportent le plus dans votre contexte et les déployer sans faux départ, un cadrage structuré fait gagner des mois : c'est précisément le rôle de notre <Link to="/agence-automatisation-ia" style={aStyle}>agence d'automatisation IA</Link>, dont le cadrage initial est gratuit. Pour situer vos priorités en quelques minutes, commencez par un <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA gratuit</Link>.
          </p>
        </div>
      </section>

      {/* ── 3. LES OUTILS (éditorial asymétrique) ── */}
      <section id="outils" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Outils</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Quels outils pour automatiser avec l'IA ? Les 3 familles à connaître</h2>

              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Trois familles d'outils couvrent la quasi-totalité des besoins : les assistants IA personnalisés (GPTs, Projects, Gems) pour les tâches individuelles récurrentes, les plateformes no-code (Make, Zapier, n8n, Power Automate) pour les flux entre applications, et les agents IA autonomes pour les objectifs en plusieurs étapes.</strong>
              </p>
            </div>

            <div>
          <p style={{ ...pStyle, marginBottom: 36 }}>
            Le marché est foisonnant, mais la quasi-totalité des solutions se range dans ces trois familles. Bien les distinguer évite de payer pour des outils redondants et de complexifier là où un réglage simple suffit.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 44 }}>
            <div style={{ ...cardStyle, padding: '28px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <IconBox icon={Sparkles} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>Famille 1</div>
                  <h3 style={{ ...h3Style, margin: 0 }}>Les assistants IA et leurs automatisations natives</h3>
                </div>
              </div>
              <p style={{ ...pStyle, fontSize: 15 }}>
                ChatGPT, Claude et Gemini intègrent des fonctions qui automatisent les tâches récurrentes sans aucun outil supplémentaire : les GPTs personnalisés côté ChatGPT, les Projects côté Claude, les Gems côté Gemini. Le principe : vous enregistrez une fois vos instructions, votre contexte et vos documents de référence, puis chaque membre de l'équipe relance la tâche en quelques secondes.
              </p>
              <p style={{ ...pStyle, fontSize: 15, marginBottom: 0 }}>
                C'est la porte d'entrée idéale : coût inclus dans l'abonnement existant, mise en place en une heure, aucun risque technique. La limite est connue : un humain doit déclencher la tâche à chaque fois.
              </p>
            </div>

            <div style={{ ...cardStyle, padding: '28px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <IconBox icon={Workflow} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>Famille 2</div>
                  <h3 style={{ ...h3Style, margin: 0 }}>Les plateformes d'automatisation no-code</h3>
                </div>
              </div>
              <p style={{ ...pStyle, fontSize: 15 }}>
                Make, Zapier, n8n et Power Automate connectent vos applications entre elles et exécutent des scénarios sans intervention humaine : un événement déclenche le flux (email reçu, formulaire soumis, ligne ajoutée dans un tableur), l'IA traite, l'action s'exécute. Tout se configure visuellement, par glisser-déposer.
              </p>
              <p style={{ ...pStyle, fontSize: 15, marginBottom: 0 }}>
                Make et Zapier sont les plus accessibles pour démarrer. n8n peut s'auto-héberger, un atout quand la confidentialité des données est un sujet. Power Automate s'impose naturellement dans les environnements Microsoft 365. C'est la famille reine pour les flux entre applications : CRM, boîte mail, tableurs, outils métier.
              </p>
            </div>

            <div style={{ ...cardStyle, padding: '28px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <IconBox icon={Compass} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>Famille 3</div>
                  <h3 style={{ ...h3Style, margin: 0 }}>Les agents IA autonomes</h3>
                </div>
              </div>
              <p style={{ ...pStyle, fontSize: 15 }}>
                Un agent IA reçoit un objectif, le décompose en étapes, utilise des outils (recherche, lecture de fichiers, rédaction, applications connectées) et enchaîne les actions jusqu'au résultat, avec des points de validation humaine. Là où une automatisation suit un chemin tracé, l'agent choisit son chemin.
              </p>
              <p style={{ ...pStyle, fontSize: 15, marginBottom: 0 }}>
                C'est la famille la plus récente et la plus puissante, et celle qui exige le plus de rigueur dans la supervision. Notre guide des <Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link> détaille les cas d'usage pertinents et les conditions d'un déploiement maîtrisé.
              </p>
            </div>
          </div>

          {/* Tableau : quelle famille pour quel besoin */}
          <h3 style={{ ...h3Style, fontSize: 20, marginBottom: 18, marginTop: 0 }}>Quelle famille d'outils pour quel besoin ?</h3>
          <div style={{ ...cardStyle, overflowX: 'auto', marginBottom: 20 }}>
            <table aria-label="Quelle famille d'outils d'automatisation IA pour quel besoin" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 780 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ ...thStyle, width: '22%' }}>Famille</th>
                  <th scope="col" style={{ ...thStyle, width: '23%' }}>Besoin type</th>
                  <th scope="col" style={{ ...thStyle, width: '18%' }}>Profil requis</th>
                  <th scope="col" style={{ ...thStyle, width: '18%' }}>Budget indicatif</th>
                  <th scope="col" style={{ ...thStyle, width: '19%' }}>Limite principale</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_FAMILLES.map((row, i) => (
                  <tr key={row.famille} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ ...tdStyle, textAlign: 'left' }}>
                      <span style={{ display: 'block', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 14 }}>{row.famille}</span>
                      <span style={{ display: 'block', fontSize: 12.5, color: '#6B7280', fontWeight: 500, marginTop: 2 }}>{row.sub}</span>
                    </th>
                    <td style={tdStyle}>{row.besoin}</td>
                    <td style={tdStyle}>{row.profil}</td>
                    <td style={tdStyle}>{row.budget}</td>
                    <td style={tdStyle}>{row.limite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0 }}>
            <Check size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
            <span>Dans le doute, commencez par la famille la plus simple qui couvre le besoin, puis montez en complexité quand la valeur est prouvée. Le bon outil est souvent celui que vous payez déjà.</span>
          </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. LA MÉTHODE ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, ...prose }}>Comment automatiser un processus avec l'IA ? La méthode en 5 étapes</h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Cartographiez les tâches répétitives, scorez leur impact et leur faisabilité, prototypez sur un seul processus, sécurisez les données et la validation humaine, puis déployez en formant les équipes. Cette séquence en cinq étapes fait réussir la grande majorité des projets, menés en interne comme accompagnés.</strong>
          </p>

          <p style={{ ...pStyle, ...prose, marginBottom: 36 }}>
            Le détail de chaque étape ci-dessous. Sur le terrain, un premier processus passe du cadrage à la mise en production en quatre à six semaines, et fait gagner plusieurs heures par semaine à l'équipe concernée.
          </p>

          <div style={{ maxWidth: 820, position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((etape, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, background: cLight, borderRadius: 99, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{etape.title}</h3>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0, maxWidth: 700 }}>{etape.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ ...pStyle, ...prose, marginTop: 28, marginBottom: 0 }}>
            Cette méthode demande du temps et des mains. La plupart des organisations préfèrent confier la construction à une équipe qui la mène tous les jours, plutôt que d'apprendre sur le tas en mobilisant leurs collaborateurs. C'est précisément ce que nous faisons : nous développons vos automatisations sur mesure et vous les livrons en production.
          </p>
        </div>
      </section>

      {/* ── DÉVELOPPEMENT SUR MESURE (ancre sombre — service dominant) ── */}
      <section id="sur-mesure" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', color: '#fff', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>
            L'option clé en main
          </div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 38px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 18px', lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: 820 }}>
            Faire développer vos automatisations IA sur mesure
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '22px 26px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 860 }}>
            <strong style={{ color: '#fff' }}>Plutôt que de monter vos automatisations en interne, vous nous confiez la construction de bout en bout : nous concevons l'architecture, développons les workflows, assistants et agents adaptés à vos processus, les intégrons à vos outils via API et MCP, puis les déployons en production. Vous récupérez un système qui tourne, documenté et supervisé.</strong>
          </p>

          <p style={{ fontSize: 16, color: '#B4C0D3', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 760 }}>
            Le guide ci-dessus décrit ce qu'il est possible de faire et comment. Le passage à l'échelle, lui, repose sur de l'ingénierie : connecter des outils, fiabiliser les traitements, gérer les cas limites, poser les garde-fous. C'est un travail de conception et de développement que nous prenons en charge pour vous, processus par processus.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20, marginBottom: 44 }}>
            {BUILD_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#60A5FA', letterSpacing: '0.06em', marginBottom: 6 }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
              Discutons de votre projet
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '15px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid #2A3650' }}>
              Notre agence de développement IA
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Besoin d'un outil interne complet plutôt que d'un simple flux ? Nous concevons aussi des <Link to="/outils-ia-sur-mesure" style={{ color: '#60A5FA', fontWeight: 600 }}>outils IA sur mesure</Link>. Et pour donner les bons réflexes à vos équipes en complément du déploiement, la <Link to="/formation-automatisation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>formation automatisation IA</Link> reste disponible.
          </p>
        </div>
      </section>

      {/* ── CTA MILIEU ── */}
      <section style={{ padding: 'clamp(48px, 6vw, 64px) 24px', background: c, color: '#fff' }}>
        <div style={{ ...wrap, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: '0 0 8px', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
              On construit vos automatisations pour vous
            </h2>
            <p style={{ fontSize: 15, color: cLight, margin: 0, lineHeight: 1.65 }}>
              Confiez-nous le développement et le déploiement de bout en bout. Vos équipes peuvent aussi se former en complément.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: c, padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
              Discutons de votre projet
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/agence-automatisation-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.55)' }}>
              Notre agence d'automatisation
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. LES 6 ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pièges à éviter</Kicker>
          <h2 style={{ ...h2Style, ...prose }}>Quelles erreurs font échouer un projet d'automatisation IA ?</h2>

          <p style={answerStyle}>
            <strong>Six erreurs expliquent la plupart des échecs : automatiser un processus bancal, commencer trop large, choisir l'outil avant le besoin, supprimer toute validation humaine, ignorer les données et la conformité, négliger la formation des équipes. Toutes se repèrent et se préviennent au moment du cadrage.</strong>
          </p>

          <p style={{ ...pStyle, ...prose, marginBottom: 36 }}>
            Les échecs se ressemblent davantage que les réussites. Ces six erreurs reviennent dans la grande majorité des projets abandonnés, et chacune a son antidote.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {ERREURS.map((err, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                <div aria-hidden="true" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 40, fontWeight: 900, color: cLight, lineHeight: 1, marginBottom: 12 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5 }}>{err.title}</h3>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0 }}>{err.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. COMBIEN ÇA COÛTE ── */}
      <section id="cout" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Budget</Kicker>
          <h2 style={{ ...h2Style, ...prose }}>Combien coûte l'automatisation IA ?</h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Pour une PME, comptez 0 à 50 € par mois et par personne pour les outils, un accompagnement sur devis établi après cadrage, et 1 980 € HT par jour pour former les équipes, seul poste finançable par votre OPCO.</strong>
          </p>

          <p style={{ ...pStyle, ...prose, marginBottom: 36 }}>
            Les ordres de grandeur ci-dessous valent pour une PME ou une ETI. Trois postes de coût se combinent, et le premier est souvent plus bas que ce que l'on imagine.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 28 }}>
            <div style={{ ...cardStyle, padding: 30 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Les outils</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 16 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.01em' }}>0 à 50 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 4 }}>/ mois / personne</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Les versions gratuites des assistants IA et des plateformes no-code suffisent pour expérimenter. Les abonnements professionnels des assistants tournent autour d'une vingtaine d'euros par mois et par utilisateur, et les plateformes d'automatisation facturent à l'usage : quelques euros à quelques dizaines d'euros par mois aux volumes d'une PME.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 30 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Le développement</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 16 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.01em' }}>Sur devis</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Faire concevoir et développer vos automatisations sur mesure se chiffre selon le nombre de processus, les intégrations à votre système d'information et le niveau d'autonomie visé. Un cadrage sérieux précède tout chiffrage : méfiez-vous des forfaits vendus avant analyse. Chez Masteria, le cadrage initial est gratuit et débouche sur une <Link to="/agence-developpement-ia" style={aStyle}>feuille de route de développement</Link> chiffrée.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 30, border: `2px solid ${c}` }}>
              <span style={{ display: 'inline-block', background: c, color: '#fff', padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>La formation</span>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 16 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.01em' }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 4 }}>/ jour HT</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Former une équipe à construire et superviser ses automatisations coûte 1 980 € HT par jour, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Masteria est certifié Qualiopi : ce volet est finançable par votre OPCO, et nous montons le dossier avec vous.
              </p>
            </div>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 860 }}>
            Un point d'honnêteté sur le financement : seule la formation est finançable par votre OPCO. Le conseil et le déploiement ne le sont pas, et une offre qui vous promet la prise en charge OPCO d'une prestation de conseil vous expose à un refus de financement. Pour décomposer le <Link to="/prix-projet-ia" style={aStyle}>coût d'un projet d'automatisation IA</Link> poste par poste, consultez notre page dédiée aux prix. Pour le détail des deux approches, voyez la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> et l'<Link to="/agence-automatisation-ia" style={aStyle}>accompagnement par notre agence</Link>, ou l'ensemble de nos <Link to="/solutions-ia" style={aStyle}>solutions IA pour entreprises</Link>.
          </p>
        </div>
      </section>

      {/* ── 7. FAQ (éditorial asymétrique) ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Automatisation IA : les questions fréquentes</h2>
              <p style={{ ...pStyle, margin: 0 }}>
                Les questions qui reviennent le plus souvent dans nos cadrages et nos formations, avec des réponses directes.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {FAQ.map((item, i) => (
                <div key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px 28px' }}>
                  <h3 style={{ ...h3Style, fontSize: 17 }}>{item.q}</h3>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                    <strong style={{ color: '#0A0A0A' }}>{item.strong}</strong>
                    {' '}{item.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POUR ALLER PLUS LOIN ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Pour aller plus loin</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Faire construire vos automatisations, explorer un développement sur mesure ou former vos équipes en complément : les suites logiques de ce guide.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
            {RELATED.map(rel => (
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
                    En savoir plus
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Par où commencer chez vous ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 560 }}>
              Décrivez-nous les tâches qui consomment le plus de temps dans vos équipes. Nous revenons vers vous sous 24 heures avec un avis honnête : ce qui s'automatise vite, ce qui demande un cadrage, et ce qui ne vaut pas l'effort.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Contacter notre équipe
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Organisme certifié Qualiopi · +1 500 professionnels formés · 98 % de satisfaction
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
