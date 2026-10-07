import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Route as RouteIcon, Users, GraduationCap,
  MapPin, Check, Landmark, HeartHandshake, BarChart3, Factory, Bot, Sun,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « accompagnement IA » (slug /accompagnement-ia), cluster conseil.
 * Grappe Semrush (2026-08-10) : « accompagnement ia » (90, KD 22),
 * « accompagnement entreprises ia générative » (70), « agence accompagnement
 * ia » (70), puis les intentions d'adoption pliées en sections :
 * « accompagnement au changement ia », « conduite du changement ia »,
 * « adoption ia entreprise ».
 *
 * RÉPARTITION D'INTENTIONS (à ne pas casser) :
 *  - /conseil-intelligence-artificielle = l'expertise et la stratégie ;
 *  - /accompagnement-ia = CETTE page : la présence dans la durée, du cadrage
 *    à l'adoption par les équipes ;
 *  - /acculturation-ia = la montée en compétence collective (formation).
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards ni
 * de FounderNote ; trois cas cités en deux phrases avec lien vers leur ancre
 * (faits de src/data/etudes-de-cas.js, révisés le 05/10/2026) ; signature à la
 * première personne ; offre d'entrée « 30 minutes de cadrage offertes ».
 * Aides publiques : formulation générique uniquement, aucun dispositif nommé
 * (consigne de Mathias du 2026-08-10).
 */

const SLUG = 'accompagnement-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = "Accompagnement IA : du cadrage à l'adoption | Masteria"
const META_DESC = "Accompagnement IA en entreprise : choix des usages et des outils, référents, formation par métier, mesure de l'usage. 30 minutes de cadrage offertes."
const KEYWORDS = "accompagnement ia, accompagnement intelligence artificielle, accompagnement entreprises ia générative, agence accompagnement ia, accompagnement au changement ia, conduite du changement ia, adoption ia entreprise"

/* ───────── Styles partagés (calque cluster conseil) ───────── */

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

const HERO_BADGES = [
  { icon: RouteIcon, label: "De la décision à l'usage quotidien" },
  { icon: GraduationCap, label: "Journées de formation éligibles à votre OPCO" },
  { icon: HeartHandshake, label: 'Le même interlocuteur pendant des mois' },
  { icon: MapPin, label: "Lyon, puis l'Europe, les États-Unis, l'Inde" },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Mission', value: "Suivre votre entreprise pendant plusieurs mois : choisir les usages, installer les outils, faire adopter, mesurer, jusqu'à ce que vos équipes avancent seules" },
  { label: 'Rythme', value: "Des jalons serrés au démarrage, puis un point régulier ; sur site pour les lancements, à distance pour le suivi" },
  { label: 'Adoption', value: "Des référents choisis dans vos équipes, des formations construites sur leurs dossiers, une règle d'usage écrite, un suivi de l'usage" },
  { label: 'Financement', value: "L'OPCO dont relève votre entreprise peut financer les journées de formation, dans la limite de ses critères et de son budget ; le conseil n'est pas finançable par votre OPCO" },
  { label: 'Prix', value: "Un forfait écrit par étape, arrêté une fois vos 30 minutes de cadrage offertes passées" },
  { label: 'Fin de mission', value: "Elle arrive quand vos référents tiennent le sujet : c'est inscrit dans la proposition dès le départ" },
]

/* ───────── Les quatre temps (renvoient vers les pages existantes) ───────── */

const PHASES = [
  {
    num: '01',
    title: "Cadrer : repérer les tâches où l'IA rapporte chez vous",
    desc: "Nous écoutons les personnes qui font le travail, nous regardons leurs fichiers et leurs logiciels, puis nous classons les usages possibles selon le temps qu'ils rendent et la difficulté de les mettre en place. Pour un premier regard, le Diagnostic IA suffit ; le cadrage arrête sa durée et son prix. Pour un état des lieux de toute l'organisation, l'audit prend le relais.",
    links: [
      { label: 'Le Diagnostic IA', href: '/diagnostic-ia' },
      { label: "L'audit IA de l'organisation", href: '/audit-ia' },
      { label: 'La transformation IA', href: '/conseil-transformation-ia' },
    ],
  },
  {
    num: '02',
    title: 'Équiper : choisir les outils et les installer',
    desc: "Nous ne revendons aucune licence : l'outil retenu dépend de vos métiers, du niveau de confidentialité de vos données et des logiciels déjà en place. Nous le configurons, nous le relions à vos sources et nous construisons un outil sur mesure seulement quand une tâche le demande. Les premiers usages déployés sont ceux qui montrent vite un résultat.",
    links: [
      { label: "Comparer les outils d'IA", href: '/quel-outil-ia' },
      { label: 'Faire développer un outil', href: '/agence-developpement-ia' },
    ],
  },
  {
    num: '03',
    title: "Faire adopter : référents, formation et règle d'usage",
    desc: "Le moment le plus fragile d'un projet d'IA arrive après l'installation. Des référents nommés dans chaque équipe, des ateliers construits avec les documents de l'équipe et une charte qui dit ce qui est permis font passer l'outil de la démonstration au réflexe. Ces journées de formation relèvent de notre certification Qualiopi.",
    links: [
      { label: "L'acculturation des équipes", href: '/acculturation-ia' },
      { label: "Rédiger une charte d'usage", href: '/charte-ia-entreprise' },
    ],
  },
  {
    num: '04',
    title: "Mesurer : suivre l'usage et corriger le tir",
    desc: "Chaque mois, nous regardons qui se sert de quoi, sur quelles tâches, et ce que les équipes déclarent y gagner. Les blocages remontés aux référents deviennent la liste des corrections. Un usage qui progresse ouvre la porte au cas suivant ; un usage qui stagne se reprend avant de s'éteindre.",
    links: [
      { label: "Gouverner l'IA dans la durée", href: '/gouvernance-ia' },
    ],
  },
]

/* ───────── Conduite du changement (quatre leviers) ───────── */

const CHANGEMENT = [
  {
    icon: Users,
    title: 'Des référents dans chaque équipe',
    desc: "Nous formons en premier quelques collègues volontaires, ceux vers qui les autres se tournent déjà. Ils testent, ils dépannent leurs voisins de bureau et ils nous signalent ce qui coince. Quand la mission s'achève, ce sont eux qui gardent le sujet vivant.",
  },
  {
    icon: HeartHandshake,
    title: 'Une parole franche sur ce qui change',
    desc: "Les salariés craignent d'être remplacés, surveillés ou noyés sous un outil de plus. Ces craintes se comprennent. Nous aidons la direction à dire pour chaque poste ce que l'IA prendra, ce qu'elle ne touchera pas et qui décide, avant le premier déploiement.",
  },
  {
    icon: GraduationCap,
    title: 'Des formations taillées dans les dossiers du service',
    desc: "Un commercial apprend sur ses devis, une comptable sur ses rapprochements, un juriste sur ses contrats : chacun sur sa matière. Chaque atelier part des fichiers et des logiciels de l'équipe formée, et chacun repart avec un usage installé sur son poste.",
  },
  {
    icon: BarChart3,
    title: "Un tableau de bord de l'usage",
    desc: "Nombre de personnes actives par équipe, tâches outillées, temps gagné déclaré, questions reçues par les référents : quatre relevés simples, revus à date fixe. Un usage que personne ne regarde disparaît en quelques mois.",
  },
]

/* ───────── Pourquoi les projets IA échouent (cinq causes, citable) ───────── */

const ECHECS = [
  {
    num: '1',
    title: 'Des licences achetées avant de savoir pour quoi faire',
    cause: "L'entreprise équipe tout le monde, puis découvre au premier bilan que l'outil sert à une poignée de personnes. On conclut que l'IA ne marche pas, alors que personne n'avait choisi les tâches à outiller.",
    parade: "Nous commençons par les tâches qui méritent l'IA, puis nous dimensionnons les licences sur ces tâches.",
  },
  {
    num: '2',
    title: 'Le prototype qui ne quitte jamais la salle de réunion',
    cause: "La démonstration impressionne le comité, puis le projet s'arrête : personne pour le faire entrer dans la production, aucun budget pour passer à l'échelle, aucune place dans le travail des équipes.",
    parade: "Chaque étape se clôt sur une décision écrite : on déploie, on ajuste ou on arrête. Un prototype sans décision reste un coût.",
  },
  {
    num: '3',
    title: "Un sujet qui n'a pas de porteur",
    cause: "Sans sponsor à la direction ni relais dans les équipes, chacun bricole de son côté. Les pratiques divergent, les questions restent en suspens et l'élan retombe avec le premier imprévu.",
    parade: "Nous installons deux étages dès le départ : un sponsor qui tranche, des référents formés qui font vivre le sujet au jour le jour.",
  },
  {
    num: '4',
    title: 'Une formation qui ne parle pas du métier',
    cause: "Une journée d'exemples hors sujet, un questionnaire de fin, puis rien ne bouge : les participants n'ont reconnu ni leurs dossiers ni leurs logiciels dans ce qu'on leur a montré.",
    parade: "Nos ateliers partent des documents de l'équipe et se jugent sur les usages installés quelques semaines plus tard.",
  },
  {
    num: '5',
    title: "Un usage que personne ne mesure",
    cause: "Sans relevé, l'échec reste invisible jusqu'au renouvellement des abonnements. On apprend alors qu'une petite minorité se sert de l'outil, sans savoir pourquoi les autres l'ont lâché.",
    parade: "Le suivi de l'usage démarre avec le premier déploiement : ce qui décroche se voit tôt et se corrige.",
  },
]

/* ───────── Un accompagnement représentatif, trimestre par trimestre ───────── */

const TRIMESTRES = [
  {
    periode: 'Trimestre 1',
    title: 'Choisir et prouver',
    desc: "Cadrage des usages, choix de l'outil, réunion de lancement avec les équipes concernées, puis un ou deux usages mis en service dans une équipe volontaire. À la fin du trimestre, un résultat visible en interne sert d'argument pour la suite.",
  },
  {
    periode: 'Trimestre 2',
    title: 'Étendre et former',
    desc: "Les équipes prioritaires suivent, par vagues. Chacune reçoit sa formation sur ses propres dossiers, ses référents et la charte d'usage. Les premiers relevés d'usage orientent les corrections.",
  },
  {
    periode: 'Trimestre 3',
    title: 'Transmettre',
    desc: "Les référents prennent la main sur le quotidien, les usages suivants passent en service, les règles se stabilisent. Nos visites s'espacent à dessein ; ensuite, un point ponctuel à votre demande suffit.",
  },
]

/* ───────── Comparatif conseil / accompagnement / acculturation ───────── */

const COMPARATIF = [
  {
    critere: 'Ce que vous obtenez',
    conseil: "Une décision éclairée : priorités, outils, feuille de route",
    accompagnement: "Des usages installés, suivis jusqu'à ce que les équipes les tiennent",
    acculturation: "Des équipes qui comprennent l'IA et savent s'en servir",
  },
  {
    critere: 'Durée',
    conseil: "Quelques jours à quelques semaines",
    accompagnement: "Plusieurs mois, à un rythme qui suit vos jalons",
    acculturation: "Un programme réparti : conférences, ateliers, parcours",
  },
  {
    critere: 'À la fin',
    conseil: "Un document qui tranche et chiffre",
    accompagnement: "Des outils en service, des référents, des relevés d'usage",
    acculturation: "Un vocabulaire commun et des référents formés",
  },
  {
    critere: 'Prise en charge',
    conseil: "Pas finançable par votre OPCO",
    accompagnement: "Journées de formation éligibles à l'OPCO ; cadrage et outils payés par l'entreprise",
    acculturation: "Programme de formation, donc éligible à une prise en charge par l'OPCO",
  },
]

/* ───────── Trois accompagnements cités (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const CAS = [
  {
    id: 'industrie',
    icon: Factory,
    sector: 'Packaging · groupe international',
    figure: '24',
    figureLabel: 'managers pilotes avant tout passage à l\'échelle',
    text: "Évaluée à chaud, la première session a changé trois choses dans la deuxième : contrôler les licences en amont, composer les tables par métier, garder du temps pour construire les assistants. Entre juillet et septembre 2026, le groupe a suivi cinq sessions de deux jours ; ses équipes américaines et mexicaines enchaînent en octobre, celles d'Inde en décembre.",
  },
  {
    id: 'distribution',
    icon: Bot,
    sector: 'Distribution IT B2B · 58 salariés',
    figure: '10',
    figureLabel: 'référents formés en juin 2026, un projet chacun',
    text: "Les référents ont conçu avec nous onze compétences Claude sur la cotation, les relances et les cahiers des charges. Ce sont eux qui porteront le déploiement vers leurs collègues, prévu d'octobre à décembre 2026.",
  },
  {
    id: 'photovoltaique',
    icon: Sun,
    sector: 'Distribution photovoltaïque · équipe de trois',
    figure: '90 j',
    figureLabel: 'pour passer de la décision à une première mesure',
    text: "Une charte signée avant la formation, un référent qui administre les comptes et un point mensuel encadrent l'usage. Les deux jours sur site sont prévus en octobre 2026, avec un bilan un mois plus tard sur le délai des devis et le temps passé avec les transporteurs.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "En quoi consiste un accompagnement IA ?",
    a: "Masteria reste à vos côtés plusieurs mois pour faire entrer l'IA dans le travail de vos équipes. Nous choisissons avec vous les tâches à outiller, nous installons et configurons l'outil, nous formons des référents et chaque métier sur ses propres dossiers, puis nous suivons l'usage chaque mois. La mission s'arrête quand vos référents n'ont plus besoin de nous.",
  },
  {
    q: "Quelle est la différence entre conseil IA et accompagnement IA ?",
    a: "Une mission de conseil répond à une question de direction (quelles priorités, quel outil, quel budget) et se termine par un document qui tranche. L'accompagnement commence souvent là où ce document s'arrête : il met les décisions en œuvre, forme les équipes et vérifie dans le temps que les usages prennent. Beaucoup de nos accompagnements démarrent par un Diagnostic IA court, puis enchaînent.",
  },
  {
    q: "Comment se conduit le changement autour de l'IA ?",
    a: "Par quatre moyens, dans cet ordre : des référents nommés dans chaque équipe, une parole claire de la direction sur ce que l'IA fera et ne fera pas pour chaque poste, des formations bâties sur les documents de chaque métier, puis un suivi de l'usage à date fixe. Les réticences des salariés ont des raisons ; elles reculent devant des réponses précises et des résultats visibles, rarement devant une consigne.",
  },
  {
    q: "Comment mesure-t-on l'adoption de l'IA par les équipes ?",
    a: "Avec quatre relevés : le nombre de personnes actives par équipe, les tâches outillées qui tournent, le temps gagné déclaré par les utilisateurs et les questions reçues par les référents. Nous les complétons par un tour de table en atelier sur ce qui avance et ce qui bloque. Ces chiffres servent à décider : étendre, corriger ou arrêter un usage.",
  },
  {
    q: "Combien de temps dure un accompagnement IA ?",
    a: "En général deux à trois trimestres. Le démarrage est dense (cadrage, premiers déploiements, premières formations), puis le rythme s'espace : un point régulier, quelques ateliers, les relevés d'usage. La durée se règle au cadrage avec des jalons de décision, et la proposition prévoit dès le début le moment où vos référents prennent le relais.",
  },
  {
    q: "Combien coûte un accompagnement IA ?",
    a: "Chaque étape reçoit un forfait écrit, que nous chiffrons une fois le cadrage fait. Le montant dépend du nombre d'équipes, de sites et d'usages : un budget de quelques milliers d'euros suffit à un périmètre resserré, des dizaines de milliers pour un déploiement sur plusieurs services, plus de 100 000 € quand un groupe couvre plusieurs pays. Les journées de formation, elles, ont un tarif fixe : 1 980 € HT l'une, 3 960 € HT pour deux.",
  },
  {
    q: "Peut-on faire financer un accompagnement IA ?",
    a: "En partie. L'OPCO dont dépend votre entreprise peut payer les journées de formation, d'après ses propres critères et le budget qu'il lui reste : Masteria est certifiée Qualiopi, dans la catégorie « actions de formation ». Pour le cadrage et la construction d'outils, la réponse est non : ils ne sont pas finançables par votre OPCO. Selon votre région et votre taille, une aide publique au conseil peut parfois s'ajouter : nous vérifions ce point avec vous pendant le cadrage, sans le promettre d'avance.",
  },
  {
    q: "Travaillez-vous avec un outil IA en particulier ?",
    a: "Non. Masteria ne dépend d'aucun éditeur et travaille avec ChatGPT, Microsoft Copilot, Claude, Gemini et Vibe de Mistral. Le choix se fait sur vos métiers, vos contraintes de données, vos logiciels en place et votre budget. Un outil déjà en place chez vous sert de point de départ ; le remplacer est rarement la bonne première décision.",
  },
  {
    q: "Nous avons déjà déployé un outil d'IA et il n'a pas pris : que faire ?",
    a: "C'est une situation de départ fréquente, et elle se rattrape. L'histoire se ressemble souvent : l'outil est arrivé avant les usages, la formation est restée générale, personne ne portait le sujet et aucun relevé n'existait. Nous reprenons dans l'ordre : un cadrage court, une relance dans une ou deux équipes volontaires formées sur leurs propres dossiers, des référents, des relevés d'usage. Relancer un abonnement déjà payé coûte moins cher que l'abandonner pour tout recommencer plus tard.",
  },
  {
    q: "Faut-il associer le CSE et les équipes à la démarche ?",
    a: "Oui, et dès le début. À partir de 50 salariés, le CSE doit être informé puis consulté avant l'arrivée d'une nouvelle technologie (article L. 2312-8 du code du travail), ce qui vise un outil d'IA. Sur le terrain, un projet présenté tôt aux représentants du personnel avance plus vite qu'un projet découvert après coup. Nous aidons la direction à préparer ces échanges : ce que l'outil fera, ce qu'il ne fera pas, ce qui sera mesuré et ce qui ne le sera pas.",
  },
  {
    q: "Comment gérez-vous un accompagnement multi-sites ?",
    a: "Un site pilote passe en premier. Ses collègues racontent ensuite aux autres sites ce qui a changé pour eux, ce qui convainc mieux qu'un consultant. Les vagues suivantes reprennent ce qui a été validé (usages, supports, règles) en l'adaptant au contexte local, avec un référent par site. Le suivi et une partie des formations se font à distance ; un lancement de site gagne à se faire sur place.",
  },
  {
    q: "L'accompagnement convient-il à une PME ?",
    a: "Oui, en le taillant à sa mesure. Une PME a souvent besoin d'un cadrage court, d'un ou deux usages bien choisis, d'une formation de l'équipe et d'un référent interne. Une ETI ou un groupe demandera plusieurs métiers, une charte, un réseau de référents et un pilotage plus formel. La logique reste identique : partir du travail de l'équipe, montrer un résultat, puis transmettre.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Accompagnement IA (Masteria)',
  alternateName: "Accompagnement à l'adoption de l'intelligence artificielle",
  description: "Accompagnement IA en entreprise sur plusieurs mois : choix des usages et des outils, installation, référents internes, formation par métier certifiée Qualiopi, suivi de l'usage jusqu'à l'autonomie des équipes.",
  url: 'https://www.master-ia.fr/accompagnement-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/accompagnement-ia#webpage' },
  serviceType: "Accompagnement à l'adoption de l'IA",
  category: 'Conseil et accompagnement en intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'PME, ETI et grands groupes, directions générales et métiers',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Accompagnement IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cadrage des usages', description: "Écoute des équipes, lecture des fichiers et des logiciels, classement des usages selon le temps rendu et la difficulté." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Choix et installation des outils', description: "Choix indépendant des éditeurs, configuration, raccordement aux sources, outil sur mesure quand une tâche le demande." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Adoption et formation', description: "Référents internes, formations bâties sur les documents de chaque métier, charte d'usage, prise en charge possible par l'OPCO pour la formation." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Suivi de l'usage", description: "Relevés mensuels par équipe, corrections, ouverture des usages suivants." } },
    ],
  },
}

/* Les quatre temps en ItemList (séquence citable, GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les quatre temps de l'accompagnement IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PHASES.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : termes de l'accompagnement (distincts de /acculturation-ia). */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/accompagnement-ia#termes',
  name: "Accompagnement IA : les termes de la démarche",
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Accompagnement IA',
      description: "Prestation menée sur plusieurs mois pour faire entrer l'IA dans le travail des équipes : choix des usages, installation des outils, référents et formation, suivi de l'usage jusqu'à l'autonomie.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Conduite du changement IA',
      description: "Ce qui fait passer un outil d'IA de l'installation à l'usage : référents dans les équipes, parole claire de la direction, formations sur les documents de chaque métier, suivi à date fixe.",
    },
    {
      '@type': 'DefinedTerm',
      name: "Adoption de l'IA",
      description: "Part des équipes qui se servent des outils d'IA dans leur travail, suivie par quelques relevés : personnes actives, tâches outillées, temps gagné déclaré, questions reçues par les référents.",
    },
  ],
}

/* Article : auteur (Mathias Nizan) et dates (E-E-A-T, fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/accompagnement-ia#article',
  headline: "Accompagnement IA : du premier cadrage à l'adoption par vos équipes",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/accompagnement-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Accompagnement IA', description: "Prestation d'adoption de l'intelligence artificielle en entreprise, menée sur plusieurs mois" },
    { '@type': 'Thing', name: 'Conduite du changement', sameAs: 'https://fr.wikipedia.org/wiki/Conduite_du_changement' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
}

/* ───────── Composants ───────── */

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
   affichées dans le bloc des sources, en version courte (lean). */
const PAGE_CITATIONS = [
  { name: "Texte de l'AI Act publié sur EUR-Lex, règlement (UE) 2024/1689", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Règlement (UE) 2026/1744 dit Omnibus, qui a modifié l'AI Act en juillet 2026", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
]

export default function AccompagnementIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Accompagnement IA', slug: SLUG },
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
        datePublished="2026-08-10"
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, processJsonLd, definitionsJsonLd, articleJsonLd]}
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Accompagnement IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Plusieurs mois à vos côtés · Accompagnement IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Accompagnement IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>du premier cadrage à l'adoption par vos équipes</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Signé <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui pilote les accompagnements de Masteria · texte revu le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un accompagnement IA, chez Masteria, suit votre entreprise pendant plusieurs mois, de la première décision jusqu'au jour où vos équipes se servent de l'IA sans nous. Il enchaîne quatre temps : <strong style={{ color: '#fff', fontWeight: 700 }}>choisir les usages, installer les outils, faire adopter, mesurer</strong>. Votre OPCO peut financer les journées de formation ; le conseil reste à votre charge.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Un projet d'IA s'enlise rarement sur la technique. Il s'arrête plutôt le jour où l'outil est installé et où chacun retourne à ses habitudes. Notre accompagnement prend en charge ce moment-là, avec le conseil, la construction d'outils et la formation réunis dans un cabinet qui ne dépend d'aucun éditeur.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#phases" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les quatre temps de la démarche
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
                  <dt style={{ flex: '0 0 116px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LES QUATRE TEMPS (timeline avec renvois) ── */}
      <section id="phases" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Quatre temps</Kicker>
          <h2 style={h2Style}>
            Un accompagnement IA complet tient en quatre temps
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Cadrer les usages, équiper les équipes, faire adopter, mesurer : chaque temps se termine par un résultat que vous pouvez constater avant d'engager le suivant. Vous gardez la main sur chaque passage d'un temps à l'autre.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {PHASES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === PHASES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 10px', maxWidth: 740 }}>{step.desc}</p>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    {step.links.map(l => (
                      <Link key={l.href} to={l.href} style={{ ...aStyle, fontSize: 13.5, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        {l.label}
                        <ArrowRight size={13} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDUITE DU CHANGEMENT (ancre sombre, pivot) ── */}
      <section id="changement" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Conduite du changement</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            L'accompagnement au changement se joue après l'installation de l'outil
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Quatre leviers font passer un outil d'IA de l'installation à l'usage : des référents dans chaque équipe, une parole franche de la direction, des formations construites avec les fichiers de chaque service et un suivi de l'usage à date fixe. Les réticences des salariés ont des raisons ; on y répond par des faits.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {CHANGEMENT.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 24, maxWidth: 820 }}>
            Le règlement européen pousse dans le même sens : son article 4, en vigueur depuis le 2 février 2025, attend des entreprises qui utilisent l'IA qu'elles aident leurs salariés à maîtriser ces outils, et l'Omnibus de juillet 2026 a précisé qu'on y attend des efforts plutôt qu'un résultat. Former chaque métier sur ses propres dossiers y répond. Quand l'objectif est d'abord de faire monter toutes les équipes en compétence, voyez notre démarche d'<Link to="/acculturation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>acculturation à l'IA</Link>.
          </p>
        </div>
      </section>

      {/* ── POURQUOI LES PROJETS IA ÉCHOUENT (citable, terrain) ── */}
      <section id="echecs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Ce que les missions enseignent</Kicker>
          <h2 style={h2Style}>
            Cinq raisons font échouer un projet d'IA, et aucune n'est technique
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Des licences achetées avant les usages, un prototype jamais mis en service, un sujet sans porteur, une formation qui ignore le métier, un usage que personne ne relève : ces cinq causes reviennent d'un projet à l'autre. L'accompagnement existe pour les traiter une par une.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '0 0 28px' }}>
            Nous retrouvons ces schémas depuis 2022, chez une équipe de trois comme chez un industriel implanté sur trois continents. Nos <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas</Link> racontent ce qui se passe quand on les traite dès le départ.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {ECHECS.map(item => (
              <div key={item.num} style={{ ...cardStyle, padding: '22px 24px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 99, background: cLight, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.num}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>{item.cause}</p>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: c }}>Notre réponse :</strong> {item.parade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UN ACCOMPAGNEMENT REPRÉSENTATIF ── */}
      <section id="deroule-type" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Le déroulé</Kicker>
          <h2 style={h2Style}>
            Trois trimestres suffisent le plus souvent
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Le premier trimestre choisit et prouve sur une équipe pilote, le deuxième étend et forme par vagues, le troisième transmet aux référents. Chaque trimestre livre un résultat que la direction peut constater.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginTop: 12 }}>
            {TRIMESTRES.map(t => (
              <div key={t.periode} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}` }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 8 }}>{t.periode}</div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{t.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '24px 0 0' }}>
            Ce calendrier donne un ordre de grandeur. Une PME au périmètre net le parcourt plus vite ; un groupe à plusieurs sites l'étire. Le vôtre se fixe au cadrage, avec ses dates de décision.
          </p>
        </div>
      </section>

      {/* ── CONSEIL, ACCOMPAGNEMENT OU ACCULTURATION (tableau citable) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Choisir la bonne porte</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Conseil, accompagnement ou acculturation : trois besoins distincts
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le conseil aide la direction à décider. L'accompagnement fait aboutir cette décision dans les équipes, sur plusieurs mois. L'acculturation donne à tous un socle commun. Les trois se combinent ; seules les journées de formation peuvent être financées par l'OPCO.</strong>
          </p>

          <div style={{ border: '1px solid #E5E7EB', borderRadius: 16, overflowX: 'auto', background: '#fff' }}>
            <table aria-label="Comparatif entre conseil IA, accompagnement IA et acculturation IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '19%' }}>Critère</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '27%' }}>Conseil IA</th>
                  <th scope="col" style={{ background: cLight, textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: c, borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '27%' }}>Accompagnement IA</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '27%' }}>Acculturation IA</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#0A0A0A', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.conseil}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#0A0A0A', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: '#EFF6FF' }}>{row.accompagnement}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.acculturation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, marginTop: 20, maxWidth: 880 }}>
            Si la décision reste à prendre, passez par notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link>. Si vos équipes partent de zéro, l'<Link to="/acculturation-ia" style={aStyle}>acculturation</Link> pose le socle. Si vous voulez la décision et sa mise en œuvre tenues par le même interlocuteur, l'accompagnement réunit les deux.
          </p>
        </div>
      </section>

      {/* ── FINANCEMENT ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Les journées de formation peuvent être financées, le conseil non
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La certification Qualiopi de Masteria porte sur ses actions de formation. Chaque journée d'atelier peut donc être financée par l'OPCO de votre secteur, aux conditions qu'il fixe et tant que son enveloppe le permet. Le cadrage, le conseil et la construction d'outils ne sont pas finançables par votre OPCO. Selon la région et la taille de l'entreprise, une aide publique au conseil existe parfois ; nous regardons ce point avec vous au cadrage.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  '1 980 € HT par journée de formation',
                  '3 960 € HT pour un parcours de deux jours',
                  "Jusqu'à 12 participants par groupe intra",
                  "Dossier OPCO préparé avec vous",
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

      {/* ── ÉTUDES DE CAS (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: sectionPad, background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <Kicker>Trois accompagnements en cours</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Des référents, des paliers, une mesure : trois clients en 2026</h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>
            Leurs noms restent confidentiels, à leur demande. Chaque fiche sépare ce qui est fait de ce qui reste à venir, dates à l'appui.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {CAS.map(({ id, icon: Icon, sector, figure, figureLabel, text }) => (
              <article key={id} style={{ ...cardStyle, borderTop: `3px solid ${c}`, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                </div>
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '12px 14px' }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: c, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{figure}</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.45, marginTop: 4 }}>{figureLabel}</div>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Voir la fiche complète
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Accompagnement IA : vos questions, nos réponses
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une autre question sur la conduite du projet ? Gardez-la pour le cadrage, ou écrivez-nous.
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrire à Masteria
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pages liées</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Les autres briques de la démarche
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Chacune peut se commander seule ; l'accompagnement les enchaîne dans le bon ordre.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Point de départ', desc: "Une intervention courte pour choisir les premiers usages ; durée et forfait fixés au cadrage." },
              { label: 'Audit IA', href: '/audit-ia', tag: 'État des lieux', desc: "Toute l'organisation passée en revue quand la direction veut décider sur une vue d'ensemble." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Socle commun', desc: "Conférences, ateliers et parcours par métier pour que chacun parle le même langage." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Dirigeants', desc: "Des séances en tête-à-tête, calées sur l'agenda d'un dirigeant ou d'un profil clé." },
              { label: 'Méthode projet IA', href: '/methode-projet-ia', tag: 'Contrat', desc: "Forfait, régie ou présence suivie : la façon dont nous contractualisons une mission longue." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Règles', desc: "Ce que les salariés peuvent faire avec l'IA, sur quelles données, et à qui demander." },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Des fourchettes pour anticiper ce que coûtent outils, construction et formation." },
            ].map(rel => (
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
                    Ouvrir la page
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
            J'ai créé Masteria à Lyon en 2022 et je suis chaque accompagnement de près, du premier rendez-vous au dernier point d'étape avec vos référents. Ce que cette page décrit, je le vois chaque mois chez nos clients : l'outil compte moins que la façon dont une équipe se l'approprie. Mon parcours est détaillé sur <Link to="/mathias-nizan" style={aStyle}>ma page de fondateur</Link>.
          </p>
          <p style={{ fontSize: 14, color: '#6B7280', margin: 0, fontWeight: 600 }}>Mathias Nizan, fondateur de Masteria</p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(24px, 4vw, 48px) 24px clamp(64px, 9vw, 110px)' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Dites-nous où en est l'IA chez vous
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Rien n'est lancé, des licences dorment, ou un projet piétine : chaque point de départ se travaille. Pendant une demi-heure, en visio ou au téléphone, nous regardons votre situation et vous repartez avec une première idée de la marche à suivre, même si la suite se fait sans nous.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Conseil, outils et formation sous un même toit · aucun éditeur à vous vendre · des équipes autonomes comme objectif
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : l'équipe mobilisée ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui vous accompagne</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Une équipe composée pour votre projet, un pilote constant
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Mathias Nizan reste votre interlocuteur du début à la fin. Autour de lui, Masteria mobilise selon les besoins de la mission des consultants IA (une dizaine dans son réseau), des développeurs (environ cinq) et des formateurs (une vingtaine), qui exercent tous en indépendants. Les missions ont lieu en France et ailleurs en Europe, aux États-Unis comme en Inde ; nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> en donnent des exemples datés.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Qualiopi', 'pour nos actions de formation'],
              ['France Num', 'Masteria y est Activateur'],
              ['+100', 'formations au catalogue, par outil et par métier'],
              ['0', "licence revendue, aucune commission d'éditeur"],
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
