import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BookOpen, Building2, Check, FileText, GraduationCap, Landmark,
  Layers, MapPin, MessagesSquare, Scale, ShieldCheck, Sparkles, Target, Users, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
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
 * INTÉGRITÉ : faits produit d'août 2026 (docs/brief-programme-metier.md),
 * aucun chiffre inventé. Tarif : parité 1 980 € HT/jour intra pour le groupe
 * (mémoire tarifs 2026-06-10), sprint 3 h à 1 980 € HT la session (aligné sur
 * le hub sprint). AI Act article 4 : obligation de moyens depuis le paquet du
 * 8 juillet 2026, formulé sobrement. Jamais de promesse de prise en charge OPCO.
 */

const SLUG = 'formation-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation IA en entreprise : formez vos équipes en intra | Masteria'
const META_DESC = "Formation IA en entreprise : formez vos équipes en intra, dans vos locaux ou à distance, sur leurs cas réels et sur vos outils (ChatGPT, Copilot, Claude, Gemini, Mistral). Certifié Qualiopi, finançable OPCO."
const KEYWORDS = "formation ia en entreprise, formation ia entreprise, former ses équipes à l'ia, formation intelligence artificielle entreprise, formation ia intra entreprise, plan de formation ia"

/* ───────── Styles partagés ───────── */

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
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: Sparkles, label: 'Multi-outils : ChatGPT, Copilot, Claude, Gemini, Mistral' },
  { icon: Building2, label: 'En intra : vos locaux ou à distance' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Formats', value: "Sprint de 3 h, journée socle commun, 2 jours par métier, parcours complet avec référents internes" },
  { label: 'Pour qui', value: "Dirigeants, DRH et responsables formation qui veulent former leurs équipes, du COMEX au terrain" },
  { label: 'Outils', value: "Selon votre environnement : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, en versions entreprise" },
  { label: 'Méthode', value: "Sessions en intra sur les cas réels de chaque équipe : vos documents, vos processus, vos règles" },
  { label: 'Déploiement', value: "Dans vos locaux ou à distance, par vagues d'équipes, partout en France, en Suisse et en Belgique" },
  { label: 'Financement', value: "Actions de formation certifiées Qualiopi, finançables par votre OPCO ; devis sous 24 h" },
]

/* ───────── Pourquoi l'intra (4 cartes + 1 carte sombre) ───────── */

const POURQUOI = [
  {
    icon: FileText,
    title: 'Vos documents, vos processus',
    desc: "Les exercices partent des documents que vos équipes traitent réellement : offres, contrats, tableaux, comptes rendus, procédures. Chacun repart avec des usages installés sur son propre poste, le jour même.",
  },
  {
    icon: Users,
    title: 'Les mêmes règles pour tous',
    desc: "Une session commune installe un langage partagé et des règles d'usage identiques : ce qu'on peut confier aux outils, comment relire une réponse, qui valide ce qui engage. Les pratiques dispersées disparaissent.",
  },
  {
    icon: ShieldCheck,
    title: "La confidentialité posée d'emblée",
    desc: "Le cadre est fixé dès le cadrage : quelles données peuvent passer dans quels outils, avec quelles licences. Les questions sensibles de vos métiers se traitent entre collègues, à huis clos.",
  },
  {
    icon: Target,
    title: 'Un programme par équipe',
    desc: "Le marketing, la comptabilité et le service client n'ont pas les mêmes cas d'usage. Chaque équipe suit le programme de son métier, ajusté à son niveau réel et aux outils dont elle dispose.",
  },
]

/* ───────── Le déroulé (5 étapes) ───────── */

const DEROULE = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Un échange avec la direction et les managers : cas d'usage de chaque équipe, outils et licences en place, niveau des participants, contraintes de calendrier. Ce recueil rend les sessions concrètes dès la première heure, et il est gratuit.",
  },
  {
    num: '02',
    title: 'Sessions par équipe',
    desc: "Chaque équipe passe au format qui correspond à son besoin : sprint de 3 h, journée socle commun ou 2 jours métier. Petits groupes, les mains sur les outils, sur les documents que l'équipe traite au quotidien.",
  },
  {
    num: '03',
    title: 'Référents et partage',
    desc: "Des référents internes sont formés pour prolonger la dynamique. Ce qui se construit en session (bibliothèque de prompts, gabarits, compétences) est rangé dans vos espaces de travail partagés plutôt que sur des postes individuels.",
  },
  {
    num: '04',
    title: 'Charte et gouvernance',
    desc: "Les règles d'usage se formalisent : quelles données peuvent passer dans les outils, qui relit ce qui engage, qui possède les assistants et les compétences créés. La charte IA d'entreprise sort souvent de cette étape.",
  },
  {
    num: '05',
    title: 'Mesure et suite',
    desc: "Un relevé des usages installés, une restitution à la direction, puis la vague suivante : équipes restantes, approfondissements, nouveaux cas d'usage remontés par les référents. La montée en compétence devient un rythme.",
  },
]

/* ───────── Les formats (4 cartes liées) ───────── */

const FORMATS = [
  {
    icon: Zap,
    href: '/formation-sprint-ia',
    title: 'Le sprint IA de 3 heures',
    desc: "Une session courte et dense pour débloquer les premiers usages d'une équipe : méthode de la demande efficace, exercices sur vos cas, cadre d'usage. Le bon point d'entrée pour tester le format.",
  },
  {
    icon: BookOpen,
    href: '/formation-ia-transverse',
    title: 'La journée socle commun',
    desc: "Un jour pour poser les fondamentaux dans tous les métiers : ce que les modèles font, la méthode, la pratique sur les documents de chacun, le cadre. La base commune avant les approfondissements.",
  },
  {
    icon: Layers,
    href: '/formations',
    title: 'Les 2 jours par métier',
    desc: "Le programme complet d'une équipe : ateliers sur ses processus réels, fonctionnalités avancées des outils, plan d'action. Les programmes détaillés sont dans le catalogue des formations.",
  },
  {
    icon: Users,
    href: '/acculturation-ia',
    title: 'Le parcours avec référents',
    desc: "Quand toute l'organisation monte en compétence : vagues de formation, référents internes, charte et mesure. C'est la démarche d'acculturation, décrite sur sa page dédiée.",
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

/* ───────── Par outil (6 cartes liées) ───────── */

const OUTILS = [
  {
    tag: 'ChatGPT',
    href: '/formation-chatgpt',
    title: 'Formation ChatGPT',
    desc: "La version Business au service de l'équipe : projets partagés, agents d'espace de travail, tâches planifiées, analyse de données.",
  },
  {
    tag: 'Microsoft 365',
    href: '/formation-microsoft-copilot',
    title: 'Formation Microsoft Copilot',
    desc: "Copilot dans Word, Excel, Outlook et Teams, Copilot Pages et les agents Researcher et Analyst, dans vos fichiers Microsoft 365.",
  },
  {
    tag: 'Claude',
    href: '/formation-claude-ia',
    title: 'Formation Claude',
    desc: "Projets, Artifacts, compétences (Skills) et connecteurs vers vos outils, en version Team ou Enterprise.",
  },
  {
    tag: 'Google Workspace',
    href: '/formation-gemini-entreprise',
    title: 'Formation Gemini',
    desc: "Gemini dans Gmail, Docs et Sheets, les Gems et NotebookLM pour les corpus documentaires de vos équipes.",
  },
  {
    tag: 'Mistral',
    href: '/formation-mistral-ai',
    title: 'Formation Mistral',
    desc: "Vibe (anciennement Le Chat) : projets, bibliothèques, tâches planifiées, avec un hébergement européen.",
  },
  {
    tag: 'Multi-outils',
    href: '/formation-multi-outils',
    title: 'Formation multi-outils',
    desc: "Quand le choix reste ouvert : comparer les outils sur vos cas d'usage et poser des fondamentaux valables partout.",
  },
]

/* ───────── FAQ ───────── */

/* ───────── Les erreurs qui font échouer (sémantique : réussir sa formation IA) ───────── */

const ERREURS = [
  {
    title: 'Former tout le monde pareil',
    desc: "Une session unique pour toute l'entreprise produit des exemples qui ne parlent à personne : un prompt de campagne marketing n'apprend rien à un comptable. Le programme se monte par équipe, sur les documents et les processus de chacune ; le socle commun, lui, se traite en journée transverse.",
  },
  {
    title: 'Former sans poser le cadre',
    desc: "Si la session ne fixe pas quelles données peuvent passer dans quels outils, chacun improvise dès le lendemain, parfois sur des comptes personnels gratuits. Le cadre de confidentialité s'enseigne en même temps que les usages : offres entreprise, anonymisation, relecture de ce qui engage.",
  },
  {
    title: "Former à un outil que personne n'aura",
    desc: "Une démonstration de ChatGPT ne sert à rien si l'entreprise déploie Copilot, et réciproquement. Le cadrage recense licences et environnement réel ; la formation travaille sur les outils que vos équipes ouvriront le lundi suivant, avec leurs fonctions réelles et leurs limites.",
  },
  {
    title: 'La session sans suite',
    desc: "Sans référents ni bibliothèque partagée, les acquis retombent en quelques semaines : chacun garde ses prompts pour soi et les départs emportent le savoir. Ce qui se construit en session est rangé dans vos espaces partagés, et des référents internes prolongent la dynamique entre les vagues.",
  },
  {
    title: 'Les démonstrations spectaculaires',
    desc: "Une heure d'exemples impressionnants convainc sur le moment et ne change rien au poste de travail. La proportion s'inverse en atelier : des apports courts, puis chacun produit sur son propre document, avec le formateur qui passe. C'est la transposition qui fait l'adoption, pas la démonstration.",
  },
]

/* ───────── Le tempo d'un déploiement (sémantique : plan de formation, combien de temps) ───────── */

const VAGUES = [
  { periode: 'Semaines 1 et 2', titre: 'Cadrage, puis vague pilote', desc: "Recueil des cas d'usage et des licences, choix des équipes pilotes, premières sessions. La vague pilote sert de preuve interne : elle rode les programmes sur vos documents et donne des exemples maison aux vagues suivantes." },
  { periode: 'Les semaines suivantes', titre: 'Vagues par équipe', desc: "Les équipes passent par groupes, au format qui correspond à leur besoin : sprint de 3 heures, journée socle, deux jours métier. Le calendrier suit vos contraintes d'activité ; un site ou un service complet se couvre vague après vague, sans bloquer l'exploitation." },
  { periode: 'En parallèle', titre: 'Référents, charte, bibliothèque', desc: "Les référents volontaires sont formés pendant les vagues, la charte d'usage se rédige avec la direction, et la bibliothèque de prompts et de gabarits s'alimente à chaque session dans vos espaces partagés." },
  { periode: 'À 30 jours', titre: 'Mesure, puis la suite', desc: "Relevé des usages réellement installés, restitution à la direction, arbitrage de la vague suivante : équipes restantes, approfondissements, fonctionnalités avancées pour les équipes déjà formées. La montée en compétence devient un rythme, pas un événement." },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'une formation IA en entreprise ?",
    a: "C'est une formation dispensée en intra : le groupe est composé de vos collaborateurs, la session se tient dans vos locaux ou à distance, et le programme est construit au cadrage sur les cas réels de chaque équipe. Elle se distingue de l'inter-entreprises, où chaque participant rejoint un groupe venu d'organisations différentes sur un programme standard. Chez Masteria, la formation IA en entreprise va du sprint de 3 h au parcours par métier, sur ChatGPT, Microsoft Copilot, Claude, Gemini ou Mistral selon votre environnement, partout en France, en Suisse et en Belgique.",
  },
  {
    q: 'Combien de personnes peut-on former par session ?',
    a: "Les ateliers se tiennent en petits groupes, jusqu'à 12 personnes, pour que chacun manipule les outils sur ses propres documents. Au-delà, on découpe en plusieurs sessions ou en vagues d'équipes, ce qui permet d'ajuster le programme à chaque métier. Pour embarquer un public large d'un coup, une conférence de lancement peut précéder les ateliers : elle installe le langage commun, puis les sessions par équipe installent les usages.",
  },
  {
    q: 'Sur quels outils formez-vous les équipes ?',
    a: "Sur ceux que vos équipes utiliseront réellement : ChatGPT, Microsoft Copilot, Claude, Gemini et Mistral, dans leurs versions entreprise. Nous sommes indépendants des éditeurs : quand votre entreprise a déjà déployé un outil, la formation s'y adosse ; quand le choix reste ouvert, la session compare les outils sur vos cas d'usage. Les fondamentaux (formuler une demande, vérifier une réponse, protéger les données) restent valables quel que soit l'outil retenu.",
  },
  {
    q: 'Travaillez-vous vraiment sur nos documents ?',
    a: "Oui, c'est le principe du format en entreprise : les exercices partent des documents et des processus que vos équipes traitent au quotidien (offres, contrats, tableaux, comptes rendus, procédures). Le cadre de confidentialité est posé au cadrage : quelles données peuvent passer dans quels outils, ce qui doit être anonymisé, ce qui reste hors champ. Les sessions utilisent les offres entreprise, qui n'entraînent pas les modèles sur vos données ; les versions gratuites sont écartées pour toute donnée sensible.",
  },
  {
    q: 'Combien de temps faut-il pour former toute une entreprise ?',
    a: "Le déploiement se fait par vagues : une conférence ou une journée de lancement, puis des sessions équipe par équipe, du sprint de 3 h aux 2 jours par métier. Selon la taille de l'organisation, cela représente quelques semaines à quelques mois. Ce rythme étalé est volontaire : les usages s'installent entre les sessions, les référents internes prennent le relais et chaque vague s'ajuste sur les retours de la précédente.",
  },
  {
    q: "La formation à l'IA des salariés est-elle obligatoire ?",
    a: "L'article 4 du règlement européen sur l'IA impose depuis le 2 février 2025 une obligation de littératie IA : les organisations qui utilisent des systèmes d'IA doivent soutenir la montée en compétence des personnes qui les manipulent. Le paquet législatif du 8 juillet 2026 a précisé qu'il s'agit d'une obligation de moyens : démontrer des actions de sensibilisation et de formation, sans avoir à prouver un niveau individuel atteint. Une formation documentée y répond directement. Nous vous aidons à la calibrer sans sur-jouer la peur : c'est une obligation réelle, pas une menace d'amende imminente.",
  },
  {
    q: 'Combien coûte une formation IA en entreprise ?',
    a: "Le tarif intra est de 1 980 € HT par jour de formation pour l'ensemble du groupe, jusqu'à 12 personnes par session d'atelier. Le sprint de 3 h est à 1 980 € HT la session, et un programme métier de 2 jours représente deux jours facturés. Le devis arrive sous 24 heures après un échange de cadrage gratuit, avec le programme détaillé et les éléments nécessaires au dossier de financement.",
  },
  {
    q: 'La formation est-elle finançable par notre OPCO ?',
    a: "Masteria est certifiée Qualiopi, condition nécessaire pour mobiliser votre OPCO dans le cadre du plan de développement des compétences. Nous préparons le dossier avec vous : programme, objectifs pédagogiques, modalités d'évaluation. La décision et le niveau de prise en charge appartiennent à votre opérateur, selon votre branche et votre budget formation ; aucun organisme sérieux ne peut vous promettre un montant à l'avance. Pas d'éligibilité CPF : ces formations d'équipe relèvent du budget formation de l'entreprise, pas des comptes individuels des salariés.",
  },
  {
    q: "Faut-il former tout le monde en même temps ?",
    a: "Non, et c'est rarement une bonne idée : bloquer toute l'entreprise le même jour coûte cher et produit des sessions trop hétérogènes. Le déploiement se fait par vagues : une vague pilote qui rode les programmes et crée des exemples internes, puis les équipes par groupes, au rythme de votre activité. Les managers passent tôt : leur pratique donne le ton, et ce sont eux qui font vivre les usages dans les équipes. Les référents se forment en parallèle des vagues.",
  },
  {
    q: "Que reste-t-il dans l'entreprise après la formation ?",
    a: "Des livrables concrets, rangés chez vous : la bibliothèque de prompts de chaque équipe, les gabarits outillés sur vos documents, les instructions et projets configurés dans vos espaces de travail, les compétences créées en atelier, la charte d'usage et le cadre de confidentialité. S'y ajoutent les référents internes formés et un relevé des usages installés remis à la direction. L'objectif est que la dynamique tienne sans nous : nous revenons pour approfondir, pas pour réinstaller.",
  },
  {
    q: "Quelle différence entre une formation IA en entreprise et une acculturation IA ?",
    a: "La formation en entreprise est l'acte de former : des sessions organisées pour vos équipes, sur leurs cas réels, au format adapté (sprint, journée socle, 2 jours par métier). L'acculturation est la démarche d'ensemble qui organise la montée en compétence de toute l'organisation : sensibilisation, vagues de formation, expérimentation encadrée, référents internes et mesure. Les deux s'emboîtent : une acculturation contient des formations, et une première formation d'équipe réussie déclenche souvent la démarche complète.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Formation IA en entreprise',
  alternateName: "Formation IA intra-entreprise pour former ses équipes",
  description: "Formation IA en entreprise, en intra : sessions dans vos locaux ou à distance, sur les cas réels de chaque équipe, multi-outils selon votre environnement (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). Du sprint de 3 h au parcours par métier avec référents internes. Certifié Qualiopi, finançable OPCO. France, Suisse, Belgique.",
  url: 'https://www.master-ia.fr/formation-ia-entreprise',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-entreprise#webpage' },
  serviceType: 'Formation IA en entreprise (intra-entreprise)',
  category: 'Formation professionnelle en intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'Dirigeants, DRH, responsables formation et leurs équipes',
    audienceType: 'B2B',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formats de formation IA en entreprise',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sprint IA (3 h)', description: "Session courte pour débloquer les premiers usages d'une équipe, sur ses cas réels." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Journée socle commun (1 jour)', description: "Les fondamentaux pour tous les métiers : méthode, pratique sur les documents de chacun, cadre d'usage." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formation par métier (2 jours)', description: "Programme complet d'une équipe : ateliers sur ses processus réels, fonctionnalités avancées des outils, plan d'action." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parcours avec référents internes', description: "Vagues de formation, référents, charte et mesure pour toute l'organisation." } },
    ],
  },
}

/* Le déroulé en ItemList (séquence citable — GEO). */
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
  headline: 'Formation IA en entreprise : vos équipes, vos cas réels, vos outils',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
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

/* ───────── Composants ───────── */

/* ── GEO : lexique structuré des termes de la page (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique de la formation IA en entreprise',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Formation intra-entreprise', description: "Session organisée pour les salariés d'une seule entreprise, dans ses locaux ou à distance, sur ses cas réels ; par opposition à l'inter-entreprises, qui réunit des participants de plusieurs organisations." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Niveau de compréhension et de maîtrise de l'IA que l'article 4 du règlement européen sur l'IA demande aux entreprises d'assurer, à la mesure du contexte, pour toute personne qui utilise un système d'IA dans un cadre professionnel." },
    { '@type': 'DefinedTerm', name: 'Référent IA', description: "Collaborateur formé pour prolonger la dynamique après les sessions : il anime la bibliothèque de prompts, répond aux questions du quotidien et fait remonter les nouveaux cas d'usage." },
    { '@type': 'DefinedTerm', name: 'Sprint IA', description: "Format court de 3 heures signé Masteria : un atelier intelligence artificielle ciblé et pratique, conçu pour acculturer rapidement une équipe ou un grand nombre de collaborateurs." },
    { '@type': 'DefinedTerm', name: 'Plan de développement des compétences', description: "Cadre dans lequel l'employeur organise la formation de ses salariés ; c'est à ce titre que les formations IA certifiées Qualiopi sont finançables par l'OPCO de l'entreprise." },
    { '@type': 'DefinedTerm', name: "Charte IA d'entreprise", description: "Document qui fixe les règles d'usage de l'IA dans l'entreprise : données autorisées par outil, relecture de ce qui engage, propriété des assistants et des compétences créés." },
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

/* Sources d'autorité de la page : émises en WebPage.citation (JSON-LD) et
   affichées dans le bloc « Sources et références officielles ». */
const PAGE_CITATIONS = [
          { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle (article 4, littératie)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
          { name: "Le plan de développement des compétences, ministère du Travail et de l'Emploi", url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences' },
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
        dateModified="2026-08-21"
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
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>vos équipes, vos cas réels, vos outils</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une formation IA en entreprise forme vos équipes en intra, dans vos locaux ou à distance, <strong style={{ color: '#fff', fontWeight: 700 }}>sur les cas réels de chaque équipe et sur les outils de votre environnement</strong> : ChatGPT, Microsoft Copilot, Claude, Gemini ou Mistral. Du sprint de 3 h au parcours par métier, chaque session est certifiée Qualiopi et finançable par votre OPCO, partout en France, en Suisse et en Belgique.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une équipe formée ensemble, sur ses propres dossiers, repart avec des usages installés le jour même et des règles communes. C'est ce que permet le format en entreprise : le formateur vient à vous, le programme part de vos cas, et ce qui se construit en session reste dans vos espaces de travail.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis sous 24 h
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#formats" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les formats
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

      {/* ── POURQUOI EN ENTREPRISE (éditorial asymétrique) ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Intra ou inter</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi une formation IA en entreprise plutôt qu'en inter ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce qu'une équipe se forme mieux sur ses propres documents que sur des exemples génériques. En intra, la session se tient dans vos locaux ou à distance, sur vos cas réels ; tout le monde entend les mêmes règles d'usage, le cadre de confidentialité est posé d'emblée et chaque équipe suit un programme construit pour son métier.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Toutes ces sessions sont des actions de formation certifiées Qualiopi, finançables par votre OPCO. Le catalogue complet des programmes est sur la page <Link to="/formation-intelligence-artificielle" style={aStyle}>formation intelligence artificielle</Link>.
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
                {/* Carte sombre : l'inter garde sa place, sans dénigrement */}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MessagesSquare size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Et l'inter-entreprises ?</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    L'inter garde sa place : pour former une personne isolée ou découvrir un sujet, rejoindre un groupe d'autres entreprises fonctionne très bien. Dès que plusieurs collaborateurs sont concernés, l'intra permet de travailler sur vos cas et d'aligner toute l'équipe. C'est le format que cette page décrit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE DÉROULÉ (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le déroulé</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment se passe une formation IA en entreprise ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Cinq étapes : un cadrage qui recueille les cas d'usage et l'environnement d'outils, des sessions par équipe au format adapté, des référents et des compétences partagées qui ancrent les usages, une charte qui fixe les règles, puis la mesure qui décide de la suite. Le cadrage est gratuit et le devis arrive sous 24 heures.</strong>
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
            Quand la montée en compétence concerne toute l'organisation, avec des vagues et des référents, la démarche complète est décrite sur la page <Link to="/acculturation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>acculturation IA</Link>.
          </p>
        </div>
      </section>

      {/* ── LE TEMPO : combien de temps pour former l'entreprise ── */}
      <section id="tempo" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le tempo</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Combien de temps pour former toute l'entreprise ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Une équipe se forme en une session, de 3 heures à 2 jours ; une entreprise se forme par vagues, en quelques semaines à quelques mois selon le nombre d'équipes et votre calendrier. Le rythme est le vôtre : la formation IA en entreprise s'organise autour de l'activité, jamais contre elle.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Par où commencer ? Par les équipes qui produisent le plus d'écrit (assistanat, RH, commercial, marketing) : les gains y sont immédiats et visibles. Et par les managers, tôt : leur pratique donne le ton du reste de l'entreprise.
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
          <Kicker>Les formats</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Du sprint de 3 h au parcours complet : quel format pour vos équipes ?
          </h2>

          <p style={answerStyle}>
            <strong>Quatre formats couvrent les besoins : le sprint de 3 h pour débloquer les premiers usages d'une équipe, la journée socle commun pour poser les fondamentaux dans tous les métiers, les 2 jours par métier pour installer les usages avancés, et le parcours avec référents quand toute l'organisation monte en compétence.</strong>
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
                    Voir le format
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Trois pages se répondent sur ce sujet : celle-ci décrit comment former vos équipes en entreprise ; la page <Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link> couvre la démarche collective de montée en compétence (conférences, vagues, référents, mesure) ; et le hub <Link to="/formation-intelligence-artificielle" style={aStyle}>formation intelligence artificielle</Link> rassemble le catalogue par métier et par outil.
          </p>
        </div>
      </section>

      {/* ── PAR MÉTIER ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Par métier</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Un programme par équipe : 24 formations métier
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Chaque équipe suit le programme de son métier : 24 programmes couvrent les fonctions de l'entreprise, du marketing à la comptabilité. Les ateliers reprennent les documents et les processus réels de chaque fonction, puis vont jusqu'aux fonctionnalités avancées des outils quand l'équipe est prête.</strong>
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
            Huit exemples ci-dessus ; l'ensemble des 24 programmes métier (management, communication, achats, gestion de projet, immobilier, BTP et les autres) est sur la page <Link to="/formation-intelligence-artificielle" style={aStyle}>formation intelligence artificielle</Link>.
          </p>
        </div>
      </section>

      {/* ── PAR OUTIL ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Par outil</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            ChatGPT, Copilot, Claude, Gemini ou Mistral : on forme sur votre environnement
          </h2>

          <p style={answerStyle}>
            <strong>La formation se fait sur les outils que vos équipes utiliseront le lendemain, dans leurs versions entreprise : ChatGPT, Microsoft Copilot, Claude, Gemini ou Mistral. Quand un outil est déjà déployé chez vous, la formation s'y adosse ; quand le choix reste ouvert, la session compare les outils sur vos cas d'usage.</strong>
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
                    Voir la formation
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
          <Kicker>Ce qui fait échouer</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les cinq erreurs qui font échouer une formation IA en entreprise
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Cinq schémas reviennent dans les déploiements qui n'ont rien produit : la session unique pour tous les métiers, l'absence de cadre de confidentialité, la formation à un outil sans licence, la session sans suite, et la démonstration spectaculaire sans transposition au poste. Chacun a son antidote, intégré à notre déroulé.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {ERREURS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.75, margin: '26px 0 0', maxWidth: 860 }}>
            Ce sont des schémas que nous observons depuis 2022, en formant plus de 1 500 professionnels du COMEX aux équipes terrain. Nos <Link to="/etudes-de-cas-ia" style={{ color: c, fontWeight: 600 }}>études de cas</Link> détaillent ce que produit la séquence inverse, équipe par équipe.
          </p>
        </div>
      </section>

      {/* ── LE CADRE : RGPD, CONFIDENTIALITÉ, AI ACT ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le cadre</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Confidentialité, RGPD et AI Act : le cadre se pose avant le premier prompt
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Les sessions utilisent les offres entreprise des outils, qui n'entraînent pas les modèles sur vos données. Le cadrage définit ce qui peut passer dans les outils au regard du RGPD, la formation débouche sur des règles d'usage écrites, et une formation documentée répond à l'obligation de littératie IA de l'article 4 du règlement européen.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: ShieldCheck, title: 'Confidentialité et RGPD', desc: "Les sessions se font sur les offres entreprise des outils, qui n'entraînent pas les modèles sur vos données. Le cadrage liste ce qui peut passer dans l'outil, ce qui doit être anonymisé et ce qui reste hors champ ; les versions gratuites sont écartées pour toute donnée sensible." },
              { icon: FileText, title: "Des règles écrites pour l'équipe", desc: "Chaque formation débouche sur des règles d'usage partagées : quelles données, quels outils, qui relit ce qui engage. Ces règles se formalisent dans une charte que nous aidons à rédiger, détaillée sur la page charte IA d'entreprise.", link: { href: '/charte-ia-entreprise', label: 'Voir la charte IA' } },
              { icon: Scale, title: "L'AI Act, sans dramatiser", desc: "L'article 4 du règlement européen demande depuis février 2025 de soutenir la montée en compétence IA des personnes qui utilisent ces systèmes : une obligation de moyens, précisée en juillet 2026. Une formation documentée y répond. Il n'y a pas d'amende à agiter pour justifier un budget." },
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
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT par jour de formation, pour le groupe
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le tarif de la formation IA en entreprise est simple : 1 980 € HT par jour de formation en intra, pour l'ensemble du groupe (jusqu'à 12 personnes par session d'atelier), quel que soit le métier. Le sprint de 3 h est à 1 980 € HT la session. Masteria est certifiée Qualiopi : les sessions sont finançables par votre OPCO dans le cadre du plan de développement des compétences. La décision de prise en charge appartient à votre opérateur, selon votre branche et votre budget formation ; nous préparons le dossier avec vous et le devis arrive sous 24 heures. Pas d'éligibilité CPF : ces formations relèvent du budget formation de l'entreprise. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes, et les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  '1 980 € HT par jour de formation en intra, pour le groupe',
                  'Sprint de 3 h : 1 980 € HT la session',
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
                Un cabinet spécialisé IA, et des formateurs qui connaissent votre métier
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria est un cabinet indépendant des éditeurs, spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les sessions sont animées par Mathias et par un réseau de formateurs indépendants, expérimentés et pédagogues, choisis pour leur connaissance du métier formé. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Formation IA en entreprise : les questions fréquentes
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
            La formation de vos équipes s'articule avec la démarche collective, les formats courts et le cadre d'usage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Démarche', desc: "La montée en compétence collective : conférences, vagues de formation, référents internes, mesure." },
              { label: 'Sprint IA', href: '/formation-sprint-ia', tag: '3 heures', desc: "Le format court qui débloque les premiers usages d'une équipe en trois heures, sur ses cas réels." },
              { label: 'Journée socle commun', href: '/formation-ia-transverse', tag: '1 jour', desc: "Les fondamentaux pour tous les métiers en une journée : méthode, pratique, cadre d'usage." },
              { label: 'Catalogue des formations', href: '/formations', tag: 'Programmes', desc: "Tous les programmes détaillés : durées, objectifs, modalités, du sprint aux 2 jours par métier." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Hub', desc: "Le point d'entrée du catalogue : les formations par métier et par outil, pour composer votre plan." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Pour les profils clés : un accompagnement en tête-à-tête sur leurs cas réels, à leur rythme." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, plan de développement des compétences : les dispositifs qui financent vos formations." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Les règles d'usage qui sécurisent le déploiement : données, outils, relectures, gouvernance." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA en entreprise</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Formez vos équipes sur leurs cas réels
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos équipes, leurs outils et où elles en sont. Nous revenons vers vous sous 24 heures avec une proposition de formats, un calendrier par équipe et le devis, dossier OPCO compris. La première session peut se tenir rapidement, dans vos locaux ou à distance.
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
