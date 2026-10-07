import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BookOpen, Building2, Check, Factory, FileText, GraduationCap, Landmark,
  Layers, MapPin, MessagesSquare, Scale, ShieldCheck, Sparkles, Sprout, Target, Users, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation IA en entreprise » (slug /formation-ia-entreprise),
 * côté FORMATION (OPCO/Qualiopi visibles).
 * Cible (Semrush 2026-08) : « formation ia en entreprise » (110/mois, KD 24)
 * et « formation ia entreprise ». Intention : un dirigeant, un DRH ou un
 * responsable formation veut former SES équipes, en intra, dans l'entreprise.
 *
 * RÉPARTITION D'INTENTIONS (anti-cannibalisation) :
 *  - /formation-ia-entreprise = CETTE page : former ses équipes en intra
 *    (pourquoi l'intra, déroulé, formats, tarif) ;
 *  - /acculturation-ia = la démarche collective de montée en compétence ;
 *  - /formation-intelligence-artificielle = le hub catalogue (24 métiers) ;
 *  - /formation-sprint-ia et /formation-ia-transverse = les pages produit format.
 * Ne JAMAIS viser « formation intelligence artificielle » seule ni « acculturation ».
 *
 * Réécrite le 07/10/2026 (texte propre à la page, faits à jour) : plus de
 * FounderNote ni d'OfficialSources générique ; cas cités en une ou deux phrases
 * avec lien vers leur ancre (src/data/etudes-de-cas.js, missions-formation.js) ;
 * plus d'inter-entreprises (individuel au même tarif) ; noms d'outils au
 * 07/10/2026 (FAITS-OUTILS-2026-10-07) ; AI Act article 4 réécrit par le
 * règlement (UE) 2026/1744 (obligation de moyens, en vigueur le 27/07/2026).
 * Tarif : 1 980 € HT/jour intra pour le groupe, sprint 3 h à 1 980 € HT la
 * session. Jamais de promesse de prise en charge OPCO.
 */

const SLUG = 'formation-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation IA en entreprise : vos équipes en intra | Masteria'
const META_DESC = "Formation IA en entreprise, en intra : vos équipes formées sur leurs dossiers et vos outils, du sprint de 3 h aux 2 jours par métier. Qualiopi, OPCO."
const KEYWORDS = "formation ia en entreprise, formation ia entreprise, former les équipes à l'ia, formation intelligence artificielle entreprise, formation ia intra entreprise, plan de formation ia"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }
const srcLinkStyle = { color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }

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
  { icon: GraduationCap, label: 'Qualiopi · catégorie actions de formation' },
  { icon: Sparkles, label: 'ChatGPT, Copilot, Claude, Gemini, Vibe' },
  { icon: Building2, label: 'Chez vous ou en visio' },
  { icon: MapPin, label: 'France · Europe · États-Unis · Inde' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Formats', value: "Quatre au choix : une journée socle commune à tous les métiers, un sprint de 3 heures, deux jours dédiés à un métier, ou le parcours complet encadré par des référents internes" },
  { label: 'Pour qui', value: "Directions générales, DRH et responsables formation qui veulent faire progresser des équipes entières, du comité de direction au terrain" },
  { label: 'Outils', value: "Les licences déjà ouvertes chez vous, en version professionnelle : Claude Team, Gemini côté Google, ChatGPT Business, Copilot côté Microsoft ou Vibe" },
  { label: 'Méthode', value: "Chaque exercice part d'un dossier que l'équipe traite dans la semaine : offre, contrat, tableau de suivi, compte rendu, procédure" },
  { label: 'Déploiement', value: "Équipe après équipe, sur site ou à distance, en France et dans nos autres zones d'intervention : Europe, États-Unis, Inde" },
  { label: 'Tarif', value: "1 980 € HT par jour, facturé au groupe (douze personnes au plus) ; même grille pour une personne seule ; devis en 24 heures" },
]

/* ───────── Pourquoi l'intra (4 cartes + 1 carte sombre) ───────── */

const POURQUOI = [
  {
    icon: FileText,
    title: "Le dossier de la semaine sert d'exercice",
    desc: "Offres, contrats, tableaux de suivi, comptes rendus, procédures : l'atelier travaille sur ce que l'équipe a sous la main. Chacun quitte la salle avec une demande type déjà rodée sur son poste.",
  },
  {
    icon: Users,
    title: "Une seule règle du jeu pour l'équipe",
    desc: "Tout le monde apprend au même moment ce qu'on confie à un assistant, comment relire sa réponse et qui signe ce qui engage l'entreprise. Les habitudes qui divergeaient d'un bureau à l'autre s'alignent dès la première session.",
  },
  {
    icon: ShieldCheck,
    title: 'La confidentialité se règle avant de commencer',
    desc: "Le cadrage fixe quelles données passent dans quel outil, et sous quelle licence. Les sujets sensibles du métier se discutent entre collègues, sans personne d'une autre société dans la salle.",
  },
  {
    icon: Target,
    title: 'Un programme taillé pour chaque service',
    desc: "La relation client, le contrôle de gestion et le service achats n'ont ni les mêmes dossiers ni les mêmes urgences. Chaque service reçoit le programme de son métier, au niveau constaté pendant le cadrage.",
  },
]

/* ───────── Le déroulé (5 étapes) ───────── */

const DEROULE = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "La direction et les managers décrivent les tâches de chaque équipe, les licences ouvertes, le niveau des participants et les périodes à éviter. Grâce à ce recueil, la première heure de session porte déjà sur vos dossiers. Les 30 premières minutes de cet échange ne vous sont pas facturées.",
  },
  {
    num: '02',
    title: 'Sessions par équipe',
    desc: "Selon son besoin, l'équipe suit un sprint de 3 heures, la journée socle ou deux jours sur son métier. Les groupes restent petits et chacun garde les mains sur l'outil, ses propres fichiers ouverts.",
  },
  {
    num: '03',
    title: 'Référents et partage',
    desc: "Quelques volontaires sont formés pour devenir référents. Les demandes types, gabarits et compétences créés en atelier sont déposés dans vos espaces d'équipe, où les absents du jour les retrouvent.",
  },
  {
    num: '04',
    title: 'Charte et gouvernance',
    desc: "Les règles passent à l'écrit : données autorisées par outil, relecture des documents qui engagent, propriétaire de chaque assistant ou compétence. Votre charte IA d'entreprise naît souvent à cette étape.",
  },
  {
    num: '05',
    title: 'Mesure et suite',
    desc: "Un mois plus tard, on relève les usages qui tiennent, on restitue à la direction et on arbitre la vague suivante : services restants, approfondissements, demandes remontées par les référents.",
  },
]

/* ───────── Les formats (4 cartes liées) ───────── */

const FORMATS = [
  {
    icon: Zap,
    href: '/formation-sprint-ia',
    title: 'Le sprint IA de 3 heures',
    desc: "Une demi-journée resserrée : une méthode pour formuler ses demandes, des exercices sur vos dossiers, les règles d'usage. Idéal pour essayer le format avec une première équipe.",
  },
  {
    icon: BookOpen,
    href: '/formation-ia-transverse',
    title: 'La journée socle commun',
    desc: "Une journée pour tous les services : ce que font les modèles, comment les interroger, la pratique sur les fichiers de chacun et le cadre. La base partagée avant toute spécialisation.",
  },
  {
    icon: Layers,
    href: '/formations',
    title: 'Les 2 jours par métier',
    desc: "Le programme complet d'un service : ateliers sur ses processus, fonctions avancées des outils, plan d'action à 30 jours. Les programmes détaillés figurent dans le catalogue.",
  },
  {
    icon: Users,
    href: '/acculturation-ia',
    title: 'Le parcours avec référents',
    desc: "Pour toute l'organisation : plusieurs vagues, un réseau de référents internes, une charte et un relevé des usages. La page acculturation IA détaille cette démarche.",
  },
]

/* ───────── Par métier (8 exemples liés, 24 programmes au total) ───────── */

const METIERS_LINKS = [
  { label: 'Marketing', href: '/formation-ia-marketing' },
  { label: 'Ressources humaines', href: '/formation-ia-ressources-humaines' },
  { label: 'Finance', href: '/formation-ia-finance' },
  { label: 'Commercial', href: '/formation-ia-commercial' },
  { label: 'Juridique', href: '/formation-ia-juridique' },
  { label: 'Comptabilité', href: '/formation-ia-comptabilite' },
  { label: 'Assistanat de direction', href: '/formation-ia-assistante' },
  { label: 'Service client', href: '/formation-ia-service-client' },
]

/* ───────── Par outil (6 cartes liées, faits au 07/10/2026) ───────── */

const OUTILS = [
  {
    tag: 'ChatGPT',
    href: '/formation-chatgpt',
    title: 'Formation ChatGPT',
    desc: "ChatGPT Business : projets partagés, compétences et plugins, agents d'espace de travail. Les GPTs personnalisés disparaissent le 11 décembre 2026 ; la session montre comment les migrer en plugins.",
  },
  {
    tag: 'Microsoft',
    href: '/formation-microsoft-copilot',
    title: 'Formation Microsoft Copilot',
    desc: "Copilot dans Word, Excel, PowerPoint, Outlook et Teams, les agents Researcher et Analyst, et Copilot Cowork, qui enchaîne une tâche en plusieurs étapes et sollicite votre accord avant toute action sensible.",
  },
  {
    tag: 'Claude',
    href: '/formation-claude-ia',
    title: 'Formation Claude',
    desc: "Claude Team ou Enterprise : projets, compétences (Skills) partagées à toute l'organisation, connecteurs vers les logiciels que vos équipes utilisent déjà.",
  },
  {
    tag: 'Google Workspace',
    href: '/formation-gemini-entreprise',
    title: 'Formation Gemini',
    desc: "Gemini intégré à Gmail, Docs, Meet et Sheets ; les compétences, déployées à partir du 5 octobre 2026, prennent la place des Gems ; Gemini Notebook interroge un fonds documentaire.",
  },
  {
    tag: 'Mistral',
    href: '/formation-mistral-ai',
    title: 'Formation Mistral',
    desc: "Vibe, l'assistant de Mistral, qui conserve par défaut vos données dans un pays de l'Union : compétences appelées par une barre oblique, bibliothèques, projets, analyse de tableurs.",
  },
  {
    tag: 'Multi-outils',
    href: '/formation-multi-outils',
    title: 'Formation multi-outils',
    desc: "Quand rien n'est encore choisi : comparer les assistants sur vos dossiers. Une compétence écrite une fois au format SKILL.md se transpose ensuite d'un outil à l'autre.",
  },
]

/* ───────── Les erreurs qui font échouer (sémantique : réussir sa formation IA) ───────── */

const ERREURS = [
  {
    title: 'Un même programme pour tous les services',
    desc: "Un exemple de campagne marketing n'apprend rien à un comptable. Le programme se construit service par service, sur les dossiers de chacun ; ce qui est commun à tous passe par la journée socle.",
  },
  {
    title: 'Aucune règle sur les données',
    desc: "Sans consigne écrite sur ce qui peut entrer dans quel outil, chacun improvise dès le lendemain, parfois sur un compte personnel gratuit. Les règles de confidentialité s'apprennent pendant la session, en même temps que les usages.",
  },
  {
    title: "Un outil que personne n'aura",
    desc: "Montrer ChatGPT à une entreprise équipée de Copilot fait perdre une journée, et l'inverse aussi. Le cadrage recense les licences ; la formation se fait sur l'outil que l'équipe trouvera sur son poste, avec ses limites du moment.",
  },
  {
    title: 'Rien après la session',
    desc: "Sans référents ni bibliothèque partagée, les acquis s'effacent en quelques semaines et partent avec les personnes qui quittent l'entreprise. Ce qui est produit en atelier reste rangé chez vous, et les référents entretiennent la pratique entre deux vagues.",
  },
  {
    title: 'Le spectacle à la place de la pratique',
    desc: "Une heure de démonstrations bluffantes impressionne la salle et ne change rien au poste de travail. En atelier, la proportion s'inverse : des apports brefs, puis chacun produit sur son propre document pendant que le formateur circule.",
  },
]

/* ───────── Le tempo d'un déploiement (sémantique : plan de formation, combien de temps) ───────── */

const VAGUES = [
  { periode: 'Semaines 1 et 2', titre: 'Cadrage, puis vague pilote', desc: "On recense les cas d'usage et les licences, on choisit une ou deux équipes pilotes, et elles passent en premier. Leur session rode le programme sur vos fichiers et fournit des exemples maison aux groupes suivants." },
  { periode: 'Ensuite', titre: 'Une vague par équipe', desc: "Les services passent par groupes de douze au plus, chacun au format qui lui convient. Un site ou une direction se couvre vague après vague, sans arrêter la production ni l'accueil des clients." },
  { periode: 'Pendant les vagues', titre: 'Référents, charte et bibliothèque', desc: "Les référents volontaires se forment au fil des sessions, la charte s'écrit avec la direction, et la bibliothèque de demandes types grossit à chaque atelier dans vos espaces partagés." },
  { periode: 'Un mois après', titre: 'Relevé des usages, vague suivante', desc: "Le relevé montre ce qui s'est installé et ce qui a décroché. La direction choisit la suite : services pas encore formés, fonctions avancées pour les équipes déjà passées, nouveaux cas apportés par les référents." },
]

/* ───────── Cas publiés (faits de src/data/etudes-de-cas.js et missions-formation.js) ───────── */

const CAS = [
  {
    icon: Users,
    secteur: 'Distribution IT B2B · 58 salariés',
    texte: "En juin 2026, dix référents ont suivi deux jours de formation, un projet chacun, et onze compétences Claude sont nées de leur travail : cotation, relances de devis, cahiers des charges, stocks. Le reste du personnel suivra entre octobre et décembre 2026.",
    href: '/etudes-de-cas-ia#distribution',
    lien: 'Lire le cas du distributeur',
  },
  {
    icon: Factory,
    secteur: 'Industrie · groupe international du packaging',
    texte: "Vingt-quatre managers pilotes ont appris Microsoft Copilot sur des exercices tirés des tableaux de leur propre groupe. Entre juillet et septembre 2026, cinq sessions se sont tenues, deux d'entre elles en anglais ; les sites américains et mexicains suivent en octobre 2026, puis l'Inde en décembre.",
    href: '/etudes-de-cas-ia#industrie',
    lien: 'Lire le cas industriel',
  },
  {
    icon: Sprout,
    secteur: 'Interprofession agricole · 16 salariés',
    texte: "En septembre 2026, une plénière a confronté six assistants sur des textes publics de leur secteur agricole, puis deux ateliers ont mis l'IA au travail, l'un en marketing, l'autre en gestion.",
    href: '/etudes-de-cas-ia#mission-interprofession-agricole',
    lien: 'Lire le récit de la mission',
  },
]

const FAQ = [
  {
    q: 'Formation IA en entreprise : de quoi parle-t-on exactement ?',
    a: "D'une formation organisée pour les salariés d'une seule société, dans ses murs ou en visio, dont le programme se construit au cadrage à partir des dossiers de chaque équipe. Chez Masteria, elle prend quatre formes (sprint, journée socle, deux jours métier, parcours avec référents), sur l'assistant que vos licences ouvrent (Claude, Gemini, ChatGPT, Copilot ou Vibe), en France comme à l'étranger. Masteria a arrêté les sessions inter-entreprises : une personne seule suit une formation individuelle.",
  },
  {
    q: 'Combien de personnes peut-on former par session ?',
    a: "Douze au plus par atelier, afin que chaque participant manipule ses fichiers avec l'aide du formateur. Pour un effectif plus large, on découpe en plusieurs groupes ou en vagues, ce qui permet d'adapter le contenu à chaque service. Une conférence d'ouverture peut réunir tout le monde avant les ateliers : elle donne un vocabulaire commun, puis les sessions par équipe installent les usages.",
  },
  {
    q: 'Sur quels outils formez-vous les équipes ?',
    a: "Sur ceux que vos équipes ont sous licence, en version professionnelle : ChatGPT Business, Microsoft Copilot, Claude, Gemini dans Google Workspace ou Vibe de Mistral. Masteria ne dépend d'aucun éditeur. Une entreprise déjà équipée est formée sur son outil ; une entreprise qui hésite voit plusieurs assistants comparés sur ses dossiers. Formuler une demande, contrôler une réponse et protéger les données restent des réflexes valables partout.",
  },
  {
    q: 'Les ateliers utilisent-ils les documents de nos équipes ?',
    a: "Oui, c'est le principe de l'intra : offres, contrats, tableaux, comptes rendus, procédures. Le cadrage fixe ce qu'on a le droit de confier à l'assistant, ce qui doit être anonymisé et ce qui reste dehors. Les ateliers se font sur des comptes professionnels dont les réglages d'entraînement sont vérifiés avant la session, et les versions gratuites sont exclues pour toute donnée sensible.",
  },
  {
    q: "Sur quelle durée s'étale le déploiement dans toute l'entreprise ?",
    a: "De quelques semaines à quelques mois, selon le nombre de services. Le schéma type commence par une vague pilote, puis une session par équipe, du sprint de 3 heures aux deux jours métier. L'étalement sert l'apprentissage : les usages se consolident entre deux sessions, les référents prennent le relais et chaque vague profite des retours de la précédente.",
  },
  {
    q: "Former les salariés à l'IA est-il obligatoire ?",
    a: "Depuis le 2 février 2025, l'AI Act attend de toute entreprise qui utilise des outils d'IA qu'elle aide ses salariés à les comprendre et à s'en servir : c'est son article 4. Le texte de simplification adopté à l'été 2026 (règlement 2026/1744, applicable depuis le 27 juillet 2026) en a précisé la portée : l'employeur montre ce qu'il a mis en place, sensibilisation et formations datées, sans prouver un niveau par salarié ni fournir de certificat. Une formation tracée y répond, et nous la dimensionnons sans dramatiser.",
  },
  {
    q: 'Quel budget prévoir pour former nos équipes en intra ?',
    a: "Comptez 1 980 € HT par journée, facturés pour le groupe entier (douze personnes au maximum dans un atelier), et 3 960 € HT pour deux journées. Le sprint de 3 heures est facturé lui aussi 1 980 € HT. Le premier rendez-vous, d'une demi-heure, n'est pas facturé ; le lendemain, le programme détaillé, le devis et les pièces du dossier de financement vous attendent.",
  },
  {
    q: "L'OPCO de notre branche peut-il prendre la session en charge ?",
    a: "C'est possible. Notre certification Qualiopi, catégorie « actions de formation », permet de présenter la session à votre opérateur dans votre plan de formation annuel ; programme, objectifs et modalités d'évaluation sont rédigés avec vous. Le montant financé relève de votre opérateur, qui applique ses propres critères et son budget de l'année : personne ne peut vous le garantir d'avance. Le CPF ne finance pas ces formations d'équipe.",
  },
  {
    q: 'Faut-il former tout le monde en même temps ?',
    a: "Rarement. Immobiliser toute l'entreprise le même jour coûte cher et mélange des niveaux trop différents. Une vague pilote rode d'abord le programme et produit des exemples maison, puis les services passent par groupes, au rythme de l'activité. Faites passer les managers tôt : ce sont eux qui entretiennent les nouveaux usages dans leurs équipes.",
  },
  {
    q: 'Qu\'est-ce qui reste chez nous une fois les sessions terminées ?',
    a: "Des livrables rangés chez vous : les demandes types de chaque équipe, des gabarits construits sur vos documents, les projets et compétences configurés dans vos espaces, la charte d'usage. S'y ajoutent des référents formés et un relevé des usages remis à la direction un mois après. Nous revenons pour approfondir, sans avoir à tout réinstaller.",
  },
  {
    q: 'Formation IA en entreprise ou acculturation IA : quelle différence ?',
    a: "La formation en entreprise désigne les sessions elles-mêmes, organisées pour vos équipes au format qui leur convient. L'acculturation désigne la démarche qui fait progresser toute l'organisation : sensibilisation, vagues de formation, essais encadrés, référents, mesure. L'une contient l'autre, et une première session d'équipe réussie lance souvent la démarche complète.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Formation IA en entreprise',
  alternateName: "Formation IA intra-entreprise pour les équipes d'une société",
  description: "Formation IA organisée dans l'entreprise, sur site ou à distance, à partir des dossiers de chaque équipe et sur les licences en place (ChatGPT Business, Microsoft Copilot, Claude, Gemini dans Workspace, Vibe). Quatre formats : sprint de 3 heures, journée socle, deux jours par métier, parcours avec référents internes. Actions de formation certifiées Qualiopi. France, Europe, États-Unis, Inde.",
  url: 'https://www.master-ia.fr/formation-ia-entreprise',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-entreprise#webpage' },
  serviceType: 'Formation IA en entreprise (intra-entreprise)',
  category: 'Formation professionnelle en intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'Directions générales, DRH, responsables formation et leurs équipes',
    audienceType: 'B2B',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formats de formation IA en entreprise',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sprint IA (3 h)', description: "Une demi-journée resserrée pour lancer une équipe sur ses premiers usages, à partir de ses propres dossiers." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Journée socle commun (1 jour)', description: "La base partagée par tous les services : méthode de demande, exercices sur les fichiers de chacun, règles d'usage." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formation par métier (2 jours)', description: "Le programme complet d'un service : ateliers sur ses processus, fonctions avancées des outils, plan d'action à 30 jours." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parcours avec référents internes', description: "Plusieurs vagues, un réseau de référents, une charte et un relevé des usages pour toute l'organisation." } },
    ],
  },
}

/* Le déroulé en ItemList (séquence citable, GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Le déroulé d'une formation IA en entreprise avec Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEROULE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-ia-entreprise#article',
  headline: 'Formation IA en entreprise : vos équipes formées sur leurs dossiers',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-21',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-entreprise#webpage' },
  /* Entités liées à Wikipédia (sameAs) : désambiguïsation pour les moteurs
     génératifs et le Knowledge Graph. URLs vérifiées (curl 200) le 2026-08-21. */
  about: [
    { '@type': 'Thing', name: 'Formation professionnelle', sameAs: 'https://fr.wikipedia.org/wiki/Formation_professionnelle' },
    { '@type': 'Thing', name: 'Formation continue', sameAs: 'https://fr.wikipedia.org/wiki/Formation_continue' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
}

/* ── GEO : lexique structuré des termes de la page (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique de la formation IA en entreprise',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Formation intra-entreprise', description: "Session réservée aux salariés d'une même société, tenue dans ses locaux ou en visio, dont le programme part des dossiers de ses équipes." },
    { '@type': 'DefinedTerm', name: "Maîtrise de l'IA (article 4)", description: "Ce que l'AI Act, en son article 4, demande aux entreprises de soutenir chez les personnes qui utilisent un système d'IA pour leur compte ; une obligation de moyens depuis le règlement (UE) 2026/1744." },
    { '@type': 'DefinedTerm', name: 'Référent IA', description: "Volontaire formé pour entretenir la pratique entre deux sessions : il tient la bibliothèque de demandes types, répond aux questions de ses collègues et fait remonter les nouveaux besoins." },
    { '@type': 'DefinedTerm', name: 'Sprint IA', description: "Le format de 3 heures de Masteria : un atelier resserré qui lance une équipe sur ses premiers usages, vendu 1 980 € HT la session." },
    { '@type': 'DefinedTerm', name: 'Plan de développement des compétences', description: "Le cadre dans lequel l'employeur organise la formation de ses salariés, et par lequel une session certifiée Qualiopi peut être présentée à l'OPCO de la branche." },
    { '@type': 'DefinedTerm', name: "Charte IA d'entreprise", description: "Le texte qui écrit les règles d'usage : données autorisées pour chaque outil, documents à relire avant envoi, propriétaire des assistants et des compétences créés." },
  ],
}

/* ── GEO : les 24 formations métier en ItemList ── */
const METIERS_ALL = [
  ['Marketing', 'marketing'], ['Ressources humaines', 'ressources-humaines'], ['Commercial', 'commercial'], ['Finance', 'finance'],
  ['Communication', 'communication'], ['Management', 'management'], ['Assistanat de direction', 'assistante'], ['SEO', 'seo'],
  ['Service client', 'service-client'], ['Informatique / DSI', 'informatique'], ['Équipes pédagogiques', 'pedagogique'], ['Achats', 'achats'],
  ['QSE / HSE', 'qse'], ['Gestion de projet', 'gestion-de-projet'], ['Marchés publics', 'marche-public'], ['Immobilier', 'immobilier'],
  ['Commerce & e-commerce', 'commerce'], ['Santé & médico-social', 'sante'], ['Juridique', 'juridique'], ['Comptabilité', 'comptabilite'],
  ['Assurance', 'assurance'], ['BTP & construction', 'btp'], ['Tourisme & hôtellerie', 'tourisme'], ['Tous publics (socle commun)', 'transverse'],
]
const metiersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE}/${SLUG}#metiers`,
  name: 'Les 24 formations IA par métier de Masteria',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  numberOfItems: METIERS_ALL.length,
  itemListElement: METIERS_ALL.map(([label, slug], i) => ({ '@type': 'ListItem', position: i + 1, name: `Formation IA ${label}`, url: `${SITE}/formation-ia-${slug}` })),
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

/* Sources de la page : émises en WebPage.citation (JSON-LD) et listées dans
   la section « Les textes derrière cette page ». */
const PAGE_CITATIONS = [
  { name: "AI Act, règlement (UE) 2024/1689 : texte officiel, avec son article 4 (EUR-Lex)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Règlement (UE) 2026/1744, qui a réécrit l'article 4 et repoussé les échéances « haut risque » (EUR-Lex)", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Plan de développement des compétences : la fiche du ministère du Travail", url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences' },
  { name: "La marque Qualiopi expliquée par le ministère du Travail", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { name: "Ce que fait un OPCO, d'après le ministère du Travail", url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
  { name: "Centre d'aide OpenAI : calendrier de retrait des GPTs personnalisés", url: 'https://help.openai.com/en/articles/20001519' },
  { name: "Google Workspace : migration des Gems vers les compétences", url: 'https://knowledge.workspace.google.com/p/gems-migration' },
]

export default function FormationIAEntreprisePage() {
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
    { name: 'Formation IA en entreprise', slug: SLUG },
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
        datePublished="2026-08-21"
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd, termsJsonLd, metiersJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA en entreprise</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building2 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Intra-entreprise
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA en entreprise :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>vos équipes formées sur leurs dossiers</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Texte de <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui dirige Masteria · relu le 7 octobre 2026, outils et règles à jour
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une formation IA en entreprise réunit des collègues d'une même société, dans vos locaux ou en visio, <strong style={{ color: '#fff', fontWeight: 700 }}>autour des documents qu'ils traitent chaque semaine et des outils dont ils disposent</strong> : Claude, Gemini, ChatGPT, Vibe de Mistral ou le Copilot de Microsoft (anciennement Microsoft 365 Copilot). Masteria propose quatre formats, depuis un sprint de 3 heures jusqu'à un parcours encadré par des référents internes. Toutes nos sessions relèvent de la certification Qualiopi du cabinet, ce qui ouvre la porte à un financement par votre opérateur de compétences.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le groupe apprend ensemble, sur ses propres fichiers, et repart le soir même avec des usages en place et des consignes communes. Le formateur se déplace chez vous ou se connecte à distance ; ce que l'équipe construit pendant l'atelier (demandes types, gabarits, compétences) reste rangé dans vos espaces partagés.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Recevoir une proposition pour vos équipes
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#formats" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comparer les quatre formats
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

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>L'essentiel</div>
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

      {/* ── POURQUOI EN ENTREPRISE (éditorial asymétrique) ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le choix de l'intra</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi organiser la formation IA dans l'entreprise ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Un collaborateur retient ce qu'il a fait lui-même sur son dossier, avec les outils qu'il rouvrira lundi matin. L'intra crée ces conditions : la session part de vos documents, l'équipe entière entend les mêmes consignes, et les questions de confidentialité se règlent entre vous, sans participant extérieur.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La certification Qualiopi couvre chacune de ces sessions. Les programmes, classés par métier et par outil, se consultent sur la page <Link to="/formation-intelligence-artificielle" style={aStyle}>formation intelligence artificielle</Link>.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {POURQUOI.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
                {/* Carte sombre : le cas d'une personne seule (plus d'inter-entreprises) */}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MessagesSquare size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Et pour une seule personne ?</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Masteria a arrêté les sessions inter-entreprises. Quand une seule personne doit se former, la journée se tient en individuel, au même tarif journalier, ou prend la forme d'un <Link to="/coaching-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>coaching IA</Link>. Dès que plusieurs collègues partagent les mêmes outils, l'intra reste le format le plus simple à organiser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE DÉROULÉ (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Pas à pas</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment se déroule une formation IA en entreprise ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le dispositif tient en cinq étapes. Le cadrage recense les cas d'usage et les licences ; les sessions s'enchaînent équipe par équipe ; des référents et des compétences partagées prolongent le travail ; une charte écrit les règles ; un relevé à un mois décide de la suite. Le devis vous parvient sous 24 heures après le cadrage.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20 }}>
            {DEROULE.map(step => (
              <div key={step.num} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 15, color: '#60A5FA', fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Si toute l'organisation doit progresser, avec plusieurs vagues et un réseau de référents, la page <Link to="/acculturation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>acculturation IA</Link> décrit la démarche complète.
          </p>
        </div>
      </section>

      {/* ── LE TEMPO : combien de temps pour former l'entreprise ── */}
      <section id="tempo" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le calendrier</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Former toute l'entreprise : sur combien de semaines ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Une équipe se forme en une session, de 3 heures à deux jours. Une entreprise se forme par vagues, sur quelques semaines ou quelques mois selon le nombre de services. Le calendrier se cale sur vos pics de charge, et les sessions évitent les périodes où l'activité ne peut pas s'arrêter.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Par quel service commencer ? Ceux qui rédigent le plus (assistanat, RH, commercial, marketing) trouvent vite leurs premiers usages, et leurs exemples nourrissent les vagues suivantes. Faites passer les managers tôt : leur pratique donne le ton au reste de la maison.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              {VAGUES.map((v, i) => (
                <div key={i} style={{ ...cardStyle, padding: 22, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, minWidth: 132, fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: c, paddingTop: 3 }}>{v.periode}</div>
                  <div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 6 }}>{v.titre}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LES FORMATS ── */}
      <section id="formats" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Quatre formats</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Sprint, journée socle, deux jours métier ou parcours : quel format retenir ?
          </h2>

          <p style={answerStyle}>
            <strong>Le sprint de 3 heures lance une équipe sur ses premiers usages. La journée socle donne la même base à tous les services. Les deux jours par métier vont jusqu'aux fonctions avancées des outils, et le parcours avec référents organise la progression de toute l'organisation.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: 20 }}>
            {FORMATS.map(item => (
              <Link key={item.href} to={item.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 24, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                >
                  <div style={{ marginBottom: 14 }}>
                    <IconTile icon={item.icon} />
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{item.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Découvrir ce format
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Trois pages se partagent le sujet. Celle-ci explique comment organiser la formation de vos équipes dans l'entreprise ; la page <Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link> traite la démarche collective, avec ses vagues, ses référents et sa mesure ; le hub <Link to="/formation-intelligence-artificielle" style={aStyle}>formation intelligence artificielle</Link> classe les programmes par métier et par outil.
          </p>
        </div>
      </section>

      {/* ── PAR MÉTIER ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Par service</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Un programme par service : 24 formations métier
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le catalogue compte 24 programmes métier, du marketing à la comptabilité en passant par les achats et le juridique. Les ateliers reprennent les dossiers et les processus propres à chaque fonction, puis abordent les fonctions avancées des outils quand le groupe est prêt.</strong>
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
            {METIERS_LINKS.map(m => (
              <Link
                key={m.href}
                to={m.href}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 99, padding: '10px 18px', textDecoration: 'none', color: '#0A0A0A', fontSize: 14, fontWeight: 700, fontFamily: 'Nunito, sans-serif', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
              >
                {m.label}
                <ArrowRight size={14} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
              </Link>
            ))}
          </div>

          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            Ces huit liens donnent un aperçu. Les 24 programmes, dont le management, la communication, la gestion de projet, l'immobilier et le BTP, sont présentés sur la page <Link to="/formation-intelligence-artificielle" style={aStyle}>formation intelligence artificielle</Link>.
          </p>
        </div>
      </section>

      {/* ── PAR OUTIL ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Par outil</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            ChatGPT, Copilot, Claude, Gemini ou Vibe : la formation suit vos licences
          </h2>

          <p style={answerStyle}>
            <strong>Les ateliers se déroulent dans les outils que vos équipes ouvriront le lendemain, en version professionnelle. Si un outil est déjà déployé, la formation s'appuie sur lui ; si le choix reste ouvert, la session compare plusieurs assistants sur vos propres cas. Les noms et fonctions ci-dessous sont à jour au 7 octobre 2026.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {OUTILS.map(rel => (
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
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Ouvrir le programme
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES ERREURS QUI FONT ÉCHOUER ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Les pièges</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq erreurs qui font échouer une formation IA en entreprise
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Les déploiements qui n'ont rien laissé se ressemblent : un seul programme servi à tous les services, aucune règle sur les données, un outil que personne n'a sous licence, aucune suite après l'atelier, des démonstrations sans exercice au poste. Notre déroulé prévoit une parade à chacune.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {ERREURS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS PUBLIÉS (remplace CaseStudyCards) ── */}
      <section id="cas" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois entreprises qui ont formé leurs équipes par étapes
          </h2>
          <p style={answerStyle}>
            <strong>Les clients concernés ont demandé l'anonymat ; leurs récits complets figurent dans nos études de cas. Ils montrent la même logique : un premier groupe formé sur ses propres fichiers, puis l'élargissement aux autres équipes.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CAS.map(cas => (
              <div key={cas.href} style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <IconTile icon={cas.icon} />
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.35 }}>{cas.secteur}</div>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 14px', flex: 1 }}>{cas.texte}</p>
                <Link to={cas.href} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  {cas.lien}
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE CADRE : RGPD, CONFIDENTIALITÉ, AI ACT ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Les règles</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Confidentialité, RGPD et AI Act : les règles avant la première demande
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Les ateliers se font sur des comptes pro que votre service informatique administre. Le cadrage décide, au regard du RGPD, ce qui peut passer dans l'outil ; chaque session se conclut par des consignes écrites ; la trace des formations répond à ce que l'AI Act demande en matière de compétences.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: ShieldCheck, title: 'Confidentialité et RGPD', desc: "Au 7 octobre 2026, Claude Team, ChatGPT Business, Gemini côté Workspace et Copilot ouvert avec un compte professionnel ne se servent pas de vos échanges pour entraîner leurs modèles, sauf réglage contraire ; sur Vibe Team, l'administrateur doit couper ce réglage. Le cadrage liste ce qu'on anonymise et ce qu'on garde à l'écart, et les comptes gratuits sont écartés pour toute donnée sensible." },
              { icon: FileText, title: "Des consignes écrites pour l'équipe", desc: "Chaque session débouche sur des règles communes : quelles données, quel outil, qui relit avant envoi. Elles alimentent une charte que nous aidons à rédiger, présentée sur sa propre page.", link: { href: '/charte-ia-entreprise', label: 'Voir la charte IA' } },
              { icon: Scale, title: "L'AI Act, à sa juste mesure", desc: "Depuis février 2025, l'AI Act demande aux entreprises d'aider leurs salariés à comprendre les outils d'IA qu'elles leur confient. Sa réécriture de juillet 2026 l'a confirmé : on juge les moyens déployés, sans niveau individuel à prouver ni certificat à produire. Une formation tracée y répond." },
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
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Prix et prise en charge</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT la journée, pour tout le groupe
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Chez Masteria, le prix se compte à la journée et au groupe : 1 980 € HT pour une salle de quatre collègues comme pour une salle de douze, quel que soit le métier. Deux jours font 3 960 € HT, le sprint de 3 heures 1 980 € HT la session, et la même grille vaut pour une personne seule. Grâce à la certification Qualiopi du cabinet, l'OPCO de votre branche peut financer la session, suivant ses critères et l'état de ses fonds ; la décision lui revient, et le dossier se prépare à quatre mains. Le CPF ne s'applique pas à ces sessions d'équipe. Les sociétés de Genève ou de Bruxelles ne relèvent d'aucun OPCO : elles reçoivent un devis en euros hors taxes. L'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> identifie votre opérateur, et la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link> détaille les dispositifs.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  '1 980 € HT la journée, groupe de 12 au plus',
                  '3 960 € HT les deux jours',
                  'Sprint de 3 heures : 1 980 € HT',
                  'Dossier OPCO monté avec vous, devis en 24 heures',
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

      {/* ── E-E-A-T : qui forme vos équipes ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Les formateurs</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Des formateurs choisis pour le métier de chaque équipe
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Fondateur du cabinet lyonnais en 2022, Mathias Nizan pilote chaque déploiement. Les sessions sont animées par lui ou par l'un des quelque vingt formateurs indépendants du réseau, retenus pour leur connaissance du métier formé : une équipe de contrôle de gestion ne reçoit pas le même intervenant qu'un service juridique. Le cabinet ne revend aucune licence : c'est votre contexte qui décide de l'outil. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ces formations en situation.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['≈ 20', 'formateurs indépendants mobilisables'],
                ['24', 'programmes métier, du marketing au BTP'],
                ['12', 'participants au plus par atelier'],
                ['4 zones', 'France, Europe, États-Unis, Inde'],
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Formation IA en entreprise : vos questions avant de lancer
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une question sur vos équipes qui ne figure pas dans cette liste ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrivez-nous, nous répondons
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
          <Kicker>Pages voisines</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Les sujets qui accompagnent la formation de vos équipes
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Former vos équipes rejoint d'autres questions : la démarche collective, les formats courts, le financement et les règles d'usage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Démarche', desc: "Faire progresser toute l'organisation par vagues, avec des référents et une mesure des usages." },
              { label: 'Sprint IA', href: '/formation-sprint-ia', tag: '3 heures', desc: "Trois heures pour lancer une équipe sur ses premiers usages, à partir de ses propres dossiers." },
              { label: 'Journée socle commun', href: '/formation-ia-transverse', tag: '1 jour', desc: "Une base commune à tous les services : méthode de demande, exercices, consignes d'usage." },
              { label: 'Catalogue des formations', href: '/formations', tag: 'Programmes', desc: "Chaque programme détaillé, avec sa durée, ses objectifs et ses modalités d'évaluation." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Hub', desc: "L'entrée du catalogue, classé par métier et par outil, pour bâtir votre plan de formation." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Une personne clé suivie seule, séance après séance, au rythme de son agenda." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, plan de développement des compétences, sociétés basées en Suisse ou en Belgique : qui paie quoi." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le document qui fixe les données autorisées, les relectures et les propriétaires des assistants créés." },
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
                    Lire la page
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
            Mathias Nizan suit lui-même chaque déploiement de formation, du premier cadrage au relevé des usages un mois plus tard. Il a revu cette page début octobre 2026 ; vous trouverez son itinéraire sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>la page qui lui est consacrée</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA en entreprise</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Parlez-nous de vos équipes et de leurs outils
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous combien de personnes sont concernées, quels logiciels elles utilisent et où elles en sont avec l'IA. Dans la journée qui suit, une proposition vous arrive : formats, calendrier par équipe, devis et pièces du dossier OPCO. La première session peut se tenir chez vous ou à distance.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Recevoir une proposition
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Qualiopi · 1 980 € HT la journée · sur site ou en visio · France, Europe, États-Unis, Inde
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (section propre à la page, remplace OfficialSources) ── */}
      <section aria-labelledby="sources-formation-entreprise" style={{ padding: '56px 40px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-formation-entreprise" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les textes derrière cette page
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Règlements européens, financement de la formation et calendriers des éditeurs, consultés lors de la révision d'octobre 2026 :
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {PAGE_CITATIONS.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={srcLinkStyle}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
