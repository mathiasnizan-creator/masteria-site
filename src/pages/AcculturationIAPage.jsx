import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Lightbulb, Presentation, Users, GraduationCap, MapPin, Check,
  Sparkles, MessagesSquare, Database, ShieldCheck, Landmark, BarChart3,
  FileSpreadsheet, Layers, Compass, Factory, Bot,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « acculturation IA » (slug /acculturation-ia), côté FORMATION.
 * Grappe Semrush (10/08 et 03/09/2026) : « acculturation ia » (390, KD 13),
 * « acculturation intelligence artificielle » (110), « acculturation data » (90),
 * « acculturation informatique » (90), « acculturation data et ia » (50),
 * « acculturation ia générative management » (140).
 * Réécrite le 2026-10-07 en texte propre (exigence ≥ 90 % de 6-grammes uniques).
 *
 * ANGLE PROPRE À CETTE PAGE : l'organisation entière, par vagues, sur un trimestre
 * (sensibiliser, former par métier, expérimenter, ancrer avec des référents, mesurer).
 * Voisines : /sensibilisation-ia (la première prise de conscience), /conference-ia
 * (l'intervention devant un grand public interne), /atelier-intelligence-artificielle
 * (la pratique en petit groupe), /coaching-ia (l'individuel), /accompagnement-ia
 * (projet et adoption, côté conseil).
 *
 * FAITS : AI Act d'après la fiche de faits du 07/10, section 7 (article 4 réécrit par le
 * règlement (UE) 2026/1744, applicable depuis le 27/07/2026). Entraînement des modèles :
 * fiche du 07/10, section 6 (faits [V] pour Google et Mistral). Cas : « industrie » et
 * « distribution » de src/data/etudes-de-cas.js (faits révisés le 05/10). Tarifs : brief
 * commun du 07/10. Aucun client nommé, aucun chiffre d'adoption inventé.
 */

const SLUG = 'acculturation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Acculturation IA et data, en un trimestre | Masteria"
const META_DESC = "Acculturation IA et data : un trimestre pour faire passer toute l'organisation de la curiosité à l'usage, par vagues, avec référents et mesure."
const KEYWORDS = "acculturation ia, acculturation intelligence artificielle, acculturation ia générative, acculturation ia générative management, conférence acculturation ia, acculturation data et ia, acculturation data, acculturation informatique, acculturation numérique, sensibilisation ia"

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
  { icon: GraduationCap, label: 'Qualiopi, catégorie actions de formation' },
  { icon: Sparkles, label: 'ChatGPT, Gemini, Copilot, Claude ou Vibe' },
  { icon: Users, label: "De la direction jusqu'aux ateliers" },
  { icon: MapPin, label: 'Depuis Lyon · Europe · États-Unis · Inde' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Objectif', value: "Qu'au bout d'un trimestre, chaque service se serve de l'IA sur ses propres tâches, avec des mots communs, des règles connues et un œil critique sur les résultats" },
  { label: 'Briques', value: "Une intervention d'ouverture, des ateliers courts, des formations métier d'un ou deux jours, un parcours pour l'encadrement et des référents internes" },
  { label: 'Outils', value: "Celui que l'entreprise a choisi, ou plusieurs assistants comparés quand rien n'est encore décidé ; Masteria ne dépend d'aucun éditeur" },
  { label: 'Data', value: "Un volet sur les données : quoi confier à quel outil, comment contrôler un chiffre produit par l'IA, où s'arrête ce que permet le RGPD" },
  { label: 'Cadre', value: "Depuis sa réécriture de l'été 2026, l'article 4 exige de l'employeur des actions concrètes pour que ses équipes sachent utiliser l'IA ; chaque vague en documente une" },
  { label: 'Prix', value: "Chaque journée de formation intra est facturée 1 980 € HT, chaque Sprint de trois heures aussi ; le devis additionne les briques que vous retenez" },
  { label: 'À la fin', value: "Des référents qui répondent aux questions sans nous, un relevé des usages par service et une recommandation pour la suite" },
]

/* ───────── Les formats (5 cartes) ───────── */

const FORMATS = [
  {
    icon: Presentation,
    title: "L'intervention d'ouverture",
    desc: "Une ou deux heures devant le plus grand nombre, en salle ou à distance, pour que chacun parte avec le même vocabulaire et voie l'outil travailler sur un document interne. Elle donne le signal de départ du trimestre. Son déroulé est décrit sur la page conférence IA.",
    href: '/conference-ia',
  },
  {
    icon: Lightbulb,
    title: 'Les ateliers de prise en main',
    desc: "Des groupes de douze, le temps d'une matinée ou d'une journée, où chacun manipule l'assistant sur ses propres pièces puis quitte la salle avec deux ou trois usages qu'il refait dès le lendemain. Les formats sont détaillés sur la page atelier intelligence artificielle.",
    href: '/atelier-intelligence-artificielle',
  },
  {
    icon: Users,
    title: 'Les formations par métier',
    desc: "Une ou deux journées pour les services qui se serviront de l'IA chaque jour : clôture comptable, recrutement, réponse aux appels d'offres, relation client. Les exercices partent des pièces de la fonction, avec une évaluation des acquis à la fin.",
  },
  {
    icon: BarChart3,
    title: "Le parcours de l'encadrement",
    desc: "Les managers et la direction tranchent les demandes d'outils, fixent les règles et donnent l'exemple. Leur parcours leur fait pratiquer l'outil sur leurs dossiers, puis traite les risques, le budget des licences et la manière de suivre une équipe qui s'en sert.",
  },
  {
    icon: Database,
    title: 'Le volet data et IA',
    desc: "Ce que l'IA fait des informations qu'on lui transmet, comment lire un chiffre qu'elle calcule, ce que le RGPD interdit de coller dans un outil. Il vise d'abord les équipes qui traitent des fichiers clients, des dossiers médicaux ou la paie.",
  },
]

/* ───────── La démarche (4 étapes) ───────── */

const DEMARCHE = [
  {
    num: '01',
    title: 'Ouvrir le sujet devant tous',
    desc: "Une intervention ou des sessions courtes réunissent le plus de monde possible : ce dont l'outil est capable sur vos documents, ce qu'il rate, les règles de base. Les inquiétudes (emploi, surveillance, fiabilité) reçoivent une réponse dès ce premier temps.",
  },
  {
    num: '02',
    title: 'Former service par service',
    desc: "Chaque métier passe une ou deux journées sur ses propres tâches : la relance client du commercial, le tableau de bord du contrôleur de gestion, la fiche de poste du recruteur. Ce qui a été appris le matin s'applique sur le poste l'après-midi.",
  },
  {
    num: '03',
    title: 'Expérimenter sous des règles écrites',
    desc: "Quelques cas choisis avec les équipes sont testés pendant plusieurs semaines, avec des règles claires sur les données autorisées et la relecture des résultats. La charte d'usage prend souvent forme à ce moment, à partir de ce que les tests ont appris.",
  },
  {
    num: '04',
    title: 'Confier la suite à des référents',
    desc: "Des salariés volontaires, formés un cran plus loin que leurs collègues, répondent aux questions du quotidien, repèrent les nouveaux usages et tiennent la charte à jour. Ce relais interne permet à la démarche de continuer après notre départ.",
  },
]

/* ───────── Programme type sur un trimestre ───────── */

const PROGRAMME_TYPE = [
  {
    periode: 'Semaines 1-2',
    title: "Cadrage, puis ouverture devant tout l'effectif",
    desc: "Une réunion avec la direction fixe les métiers prioritaires, l'outil, les indicateurs et le calendrier. L'intervention d'ouverture suit : tout le monde reçoit les mêmes repères, et les questions entendues pendant l'ouverture alimentent la préparation des ateliers.",
  },
  {
    periode: 'Semaines 3-6',
    title: 'Ateliers de prise en main, métier après métier',
    desc: "Des groupes de douze se succèdent par service ou par site et travaillent avec l'outil sur leurs propres tâches. Les réussites d'un service deviennent les exemples montrés au suivant, ce qui accélère chaque nouvelle vague.",
  },
  {
    periode: 'Semaines 7-10',
    title: 'Formations approfondies et charte',
    desc: "Les services prioritaires suivent leur formation métier d'une ou deux journées, l'encadrement suit son propre parcours, et la charte d'usage s'écrit avec les équipes : données autorisées, outils retenus, relecture obligatoire des résultats.",
  },
  {
    periode: 'Semaines 11-12',
    title: 'Référents formés et bilan à la direction',
    desc: "Les référents reçoivent leur formation, les indicateurs posés au cadrage sont relevés, et la direction reçoit un bilan : les usages installés, les services en retrait, la suite que nous recommandons. La démarche appartient alors à l'entreprise.",
  },
]

/* ───────── Les erreurs (citable) ───────── */

const ERREURS = [
  {
    title: "Une belle intervention, puis plus rien",
    desc: "L'auditorium applaudit, personne ne reçoit de formation ensuite, et trois semaines plus tard l'IA redevient le sujet de quelques passionnés. L'ouverture n'a de valeur que si les ateliers sont déjà au calendrier le jour où elle a lieu.",
  },
  {
    title: 'Des exemples venus d\'ailleurs',
    desc: "Une démonstration sur un cas de start-up californienne ne parle pas à un service de paie ou à un atelier de production. Chaque séance de la démarche part de documents que les participants traitent dans leur semaine.",
  },
  {
    title: "Des licences ouvertes avant les règles",
    desc: "Quand l'outil arrive sans charte ni formation, les plus audacieux y collent des données sensibles et les autres ne l'ouvrent jamais. Les règles d'usage font partie de la démarche dès la première vague.",
  },
  {
    title: "L'encadrement laissé de côté",
    desc: "Des équipes formées sous des managers qui n'ont jamais ouvert l'outil reçoivent des consignes contradictoires. Les équipes suivent ce que leur hiérarchie pratique ; l'encadrement passe donc avant elles.",
  },
  {
    title: 'Aucun indicateur posé au départ',
    desc: "Sans mesure, impossible de distinguer une démarche qui a pris d'une campagne de communication. Trois indicateurs suffisent : la part des salariés qui se servent de l'outil chaque semaine, les usages actifs par service, les questions reçues par les référents.",
  },
]

/* ───────── Acculturation data et IA (4 cartes) ───────── */

const DATA_IA = [
  {
    icon: Database,
    title: "Trois familles de données, trois conduites",
    desc: "Les informations publiques peuvent aller dans presque tout outil ; les documents internes sans caractère sensible demandent un compte d'entreprise ; les données personnelles et confidentielles exigent une décision explicite, ou restent dehors. Chaque équipe repart avec ce tri, aligné sur votre charte.",
  },
  {
    icon: FileSpreadsheet,
    title: "Contrôler un chiffre que l'IA a calculé",
    desc: "Résumer un export de ventes, commenter un écart budgétaire, préparer un reporting : l'outil le fait vite et se trompe parfois sur une somme ou une période. Les participants apprennent trois contrôles à faire avant d'envoyer un chiffre à qui que ce soit.",
  },
  {
    icon: ShieldCheck,
    title: 'Ce que disent le RGPD et le secret des affaires',
    desc: "Les règles existent depuis longtemps ; peu de salariés savent les appliquer à un assistant d'IA. Le volet data les traduit en gestes : retirer les noms avant de coller un document, distinguer une donnée client d'un total agrégé, savoir quand interroger le DPO de l'entreprise.",
  },
  {
    icon: Layers,
    title: "L'entraînement des modèles, réglage par réglage",
    desc: "Au 7 octobre 2026, Gemini dans Google Workspace laisse vos contenus en dehors de l'entraînement de ses modèles, alors que Vibe de Mistral AI s'en sert par défaut sur ses offres Free, Pro et Team tant qu'un administrateur ne l'a pas désactivé. Savoir où se trouve ce réglage protège davantage qu'une interdiction générale.",
  },
]

/* ───────── Cas cités (études de cas, faits du 05/10) ───────── */

const CAS = [
  {
    id: 'industrie',
    icon: Factory,
    titre: 'Un groupe du packaging avance par paliers, de la direction aux sites étrangers',
    texte: "Après vingt-quatre managers pilotes, réunis lors de deux premières sessions de deux jours, le groupe a tenu cinq sessions au total de juillet à fin septembre 2026, dont deux animées en anglais, plus une matinée réservée à son comité de direction. Le dispositif gagne en octobre 2026 les sites américains et mexicains ; l'Inde suit en décembre.",
  },
  {
    id: 'distribution',
    icon: Bot,
    titre: 'Un distributeur de 58 salariés commence par dix référents',
    texte: "En juin 2026, dix référents ont suivi deux jours de formation et construit onze compétences Claude sur leurs propres tâches : cotation, relances, stocks. Ils épauleront leurs collègues lors de la diffusion programmée entre octobre et décembre 2026.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que l'acculturation à l'IA ?",
    a: "C'est le travail par lequel une organisation entière apprend à se servir de l'intelligence artificielle, de la direction aux postes de terrain. Il combine une ouverture devant tous, des ateliers de prise en main, des formations par métier, une période d'essais encadrés et des référents qui prennent le relais. Trois résultats sont visés : un vocabulaire partagé, des usages installés dans chaque service, et un regard critique sur ce que l'outil produit. Sa différence avec une formation isolée tient à l'échelle : elle concerne tous les services, et elle s'étale sur plusieurs semaines.",
  },
  {
    q: "Acculturation, sensibilisation, formation : où passe la frontière ?",
    a: "La sensibilisation est le premier contact : une ou deux heures pour voir l'outil travailler et connaître les règles. La formation, d'un ou deux jours, développe des savoir-faire évalués à partir des pièces du métier. L'acculturation organise les deux dans le temps pour toute l'entreprise, y ajoute des essais encadrés et des référents, et mesure ce qui a pris. Sensibiliser sans former laisse de la curiosité sans usage ; former un seul service crée un îlot.",
  },
  {
    q: "L'acculturation IA est-elle une obligation légale ?",
    a: "L'AI Act, nom courant du texte européen 2024/1689, impose depuis février 2025 à toute entreprise utilisatrice de veiller à ce que son personnel maîtrise l'IA (article 4). L'Omnibus, règlement 2026/1744, a reformulé cette exigence à partir du 27 juillet 2026 : l'employeur doit agir, sans avoir à garantir un niveau pour chaque salarié ni à produire de certificat ; tenir un registre des formations suivies suffit. Une démarche d'acculturation datée, vague après vague, alimente ce registre. Nous la calibrons sur vos usages, sans agiter de sanction.",
  },
  {
    q: "Par quel format commencer ?",
    a: "Le plus souvent, par une intervention d'ouverture devant le plus grand nombre : elle installe le vocabulaire commun et révèle les questions que se posent les équipes. Les ateliers de prise en main suivent, puis les formations par métier pour les services prioritaires. Si la direction n'a pas encore tranché ses propres questions, le parcours de l'encadrement passe avant tout le reste. Le premier échange permet de fixer cet ordre pour votre organisation.",
  },
  {
    q: "Sur quels outils d'IA formez-vous ?",
    a: "Sur l'outil que vos équipes auront entre les mains : ChatGPT, Microsoft Copilot (anciennement Microsoft 365 Copilot), Gemini, Claude ou Vibe de Mistral AI. Quand l'entreprise a déjà choisi, la démarche se déroule dessus ; quand le choix reste ouvert, les ateliers confrontent plusieurs assistants à des tâches identiques pour éclairer la décision. Les réflexes de fond valent pour tous : écrire une demande précise, contrôler la réponse, protéger les données.",
  },
  {
    q: "Qu'est-ce que l'acculturation data et IA ?",
    a: "C'est la partie de la démarche consacrée aux données : ce que l'IA fait de ce qu'on lui transmet, quelles informations confier à quel outil, comment vérifier un chiffre ou une analyse qu'elle produit, et ce que le RGPD et le secret des affaires interdisent. Elle concerne tous les métiers : une assistante qui condense un export clients ou un commercial qui prépare son point mensuel manipulent des données. Chez Masteria, ce volet est intégré aux ateliers et aux formations par métier, et devient une session à part pour les équipes qui traitent des données sensibles chaque jour. La formation data et IA va plus loin pour celles qui analysent des fichiers à longueur de semaine.",
  },
  {
    q: "Faut-il une acculturation informatique avant l'acculturation IA ?",
    a: "Elle s'intègre à la démarche sans servir de barrière d'entrée. Certains salariés peinent déjà avec un tableur, un dossier partagé ou une messagerie. Pour eux, les premiers ateliers commencent par les gestes de base, le vocabulaire et la sécurité des mots de passe, puis présentent l'assistant comme une aide à la rédaction ou à la dictée. Les équipes de terrain sont souvent celles qui y gagnent le plus, parce que l'outil leur évite une partie de l'informatique qu'elles subissaient. La formation IA débutant part de ce niveau.",
  },
  {
    q: "Faut-il former à la data avant de former à l'IA ?",
    a: "Les deux avancent ensemble. Un cours de données séparé parle à des personnes qui n'en voient pas l'usage ; un cours d'IA sans les données forme des gens qui ignorent ce qu'ils transmettent. En pratique, chaque atelier contient son réflexe data : quelle information je colle, dans quel outil, comment je contrôle le résultat. La situation change quand les données elles-mêmes sont en désordre (doublons, droits d'accès dispersés, aucun référentiel) : leur remise en état précède alors l'IA et relève du conseil data, une prestation pas finançable par votre OPCO.",
  },
  {
    q: "Combien coûte une démarche d'acculturation IA ?",
    a: "Le budget dépend des briques retenues. Prévoyez 1 980 € HT pour chaque journée, avec une salle de douze stagiaires maximum, et 3 960 € HT pour deux jours ; un Sprint, soit trois heures, revient à 1 980 € HT ; l'intervention d'ouverture fait l'objet d'un forfait. Une PME de quarante salariés et un groupe de deux mille ne mobilisent pas le même nombre de séances. Ces briques étant des actions de formation, votre OPCO de branche peut en assumer une part, selon ses règles et ses fonds ; nous rédigeons la demande avec vous.",
  },
  {
    q: "Combien de temps dure une acculturation ?",
    a: "Un trimestre dans la plupart des cas, davantage pour un groupe réparti sur plusieurs pays. Cet étalement a une raison : les usages se consolident entre deux séances, et chaque vague profite de ce que la précédente a appris. Une démarche comprimée en une semaine laisse un souvenir agréable ; étalée sur douze semaines et relayée par des référents, elle change les habitudes de travail.",
  },
  {
    q: "Comment savoir si l'acculturation a fonctionné ?",
    a: "En regardant les usages, plus que les questionnaires de fin de séance. Trois mesures comptent : la part des salariés qui ouvrent l'outil chaque semaine, le nombre d'usages actifs par service, les questions qui arrivent chez les référents. S'y ajoutent les temps gagnés que les équipes déclarent sur les tâches visées, relevés à un mois. Les questionnaires de satisfaction restent obligatoires pour un organisme certifié Qualiopi ; ils disent si la séance a plu, sans dire si l'outil sert.",
  },
  {
    q: "Combien de personnes chaque format accueille-t-il ?",
    a: "L'intervention d'ouverture accepte plusieurs centaines de personnes en salle, et davantage à distance. Les ateliers et les formations par métier s'arrêtent à douze participants, pour que chacun pratique sous le regard du formateur. Le parcours de l'encadrement suit la taille du comité ou du collectif de managers. Une démarche complète alterne donc les grandes jauges, qui créent le vocabulaire commun, et les petits groupes, qui installent les gestes.",
  },
  {
    q: "Faut-il avoir déployé un outil d'IA avant de commencer ?",
    a: "Les deux ordres fonctionnent. Avec un outil déjà en place, la démarche accélère son adoption et justifie les licences achetées. Sans outil, elle éclaire le choix : les ateliers révèlent les usages qui comptent, et ces usages deviennent les critères de sélection, avec notre comparatif des assistants en appui. L'ordre qui échoue est le troisième : équiper chaque poste d'une licence, sans formation ni règles, en espérant que l'usage suive.",
  },
  {
    q: "L'acculturation concerne-t-elle aussi les petites entreprises ?",
    a: "Oui, à leur mesure. Une PME n'a pas besoin du dispositif d'un groupe : une séance d'ouverture, une formation pour les deux ou trois postes les plus concernés et un référent désigné suffisent souvent. Pour une structure de quelques personnes, une journée sur ses propres dossiers débloque déjà beaucoup. C'est aussi une voie économique, puisque l'OPCO peut participer au coût de chaque brique de formation.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Acculturation IA (Masteria)',
  alternateName: "Démarche d'acculturation à l'intelligence artificielle par vagues",
  description: "Démarche qui fait adopter l'IA générative et les bons réflexes sur les données par une organisation entière, sur un trimestre : intervention d'ouverture, ateliers de prise en main, formations métier, sessions des managers, volet data et relais internes. Outil choisi par l'entreprise ou comparaison de plusieurs assistants. Briques éligibles à une demande auprès de l'OPCO.",
  url: 'https://www.master-ia.fr/acculturation-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/acculturation-ia#webpage' },
  serviceType: "Acculturation et maîtrise de l'IA",
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
    educationalRole: "Direction, encadrement et équipes opérationnelles",
    audienceType: 'B2B',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Briques d'une acculturation IA",
    itemListElement: FORMATS.map(f => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: f.title, description: f.desc } })),
  },
}

/* La démarche en ItemList (séquence citable, GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les quatre temps d'une acculturation IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEMARCHE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : les termes de la démarche. */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/acculturation-ia#termes',
  name: "Acculturation IA : vocabulaire de la démarche",
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Acculturation IA',
      description: "Apprentissage de l'IA par une organisation entière, étalé sur plusieurs semaines : ouverture devant tous, ateliers, formations par métier, essais encadrés et référents, pour installer un vocabulaire partagé et des usages durables.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Maîtrise de l\'IA (littératie IA)',
      description: "Capacité à manier un outil d'IA, à en connaître les limites et à évaluer ce qu'il rend. Le texte européen, en son article 4, oblige l'employeur à agir pour la développer, sans résultat individuel imposé.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Acculturation data et IA',
      description: "Partie de la démarche consacrée aux données : quoi transmettre à quel outil, comment contrôler un chiffre calculé par l'IA, ce que le RGPD et le secret des affaires interdisent. Elle concerne tous les métiers.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Référent IA',
      description: "Salarié volontaire formé plus loin que ses collègues, qui répond aux questions du quotidien, repère les nouveaux usages et tient la charte à jour après la démarche.",
    },
  ],
}

/* Article : auteur (Mathias Nizan) et dates. */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/acculturation-ia#article',
  headline: "Acculturation IA : un trimestre pour que chaque service s'en serve",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/acculturation-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Acculturation', sameAs: 'https://fr.wikipedia.org/wiki/Acculturation' },
    { '@type': 'Thing', name: 'Littératie IA', description: "Compétence dont l'AI Act, en son article 4, confie le développement aux employeurs" },
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

/* Sources de la page : émises en WebPage.citation (JSON-LD) et affichées en bas de page. */
const PAGE_CITATIONS = [
  { name: "L'AI Act tel que publié sur EUR-Lex (2024/1689), article 4 compris", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "EUR-Lex : règlement 2026/1744, qui modifie le texte sur l'IA à compter de juillet 2026", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "economie.gouv.fr : la méthode de la Mission innovation pour acculturer les équipes à l'IA", url: 'https://www.economie.gouv.fr/mission-innovation/acculturer-lia-partir-du-reel-experimenter-partager' },
]

export default function AcculturationIAPage() {
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
    { name: 'Acculturation IA', slug: SLUG },
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Acculturation IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lightbulb size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Acculturation IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Acculturation IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>un trimestre pour que chaque service s'en serve</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Texte de <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui dirige Masteria · première version en août 2026, revue complète le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'acculturation IA fait passer une organisation entière de la curiosité à l'usage, en un trimestre : <strong style={{ color: '#fff', fontWeight: 700 }}>une ouverture devant tous, des ateliers de prise en main, des formations par métier, un parcours pour l'encadrement, puis des référents qui prennent le relais</strong>. Chaque vague est une action de formation que l'OPCO peut examiner, et chacune documente les efforts que l'article 4 de l'AI Act réclame à l'employeur.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Acheter des licences ne change pas une entreprise. Elle change quand le comptable, la commerciale et le chef d'équipe savent chacun ce que l'outil fait pour eux, ce qu'il ne doit pas recevoir et comment vérifier ce qu'il rend. L'acculturation organise cet apprentissage service après service, à un rythme qui laisse aux habitudes le temps de se former.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Préparer votre trimestre
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#formats" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les briques
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

      {/* ── LES FORMATS (éditorial asymétrique) ── */}
      <section id="formats" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les briques</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Avec quelles briques acculturer une entreprise à l'IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Cinq briques s'assemblent selon votre organisation. L'ouverture touche tout le monde, les ateliers mettent l'outil entre les mains, les formations par métier installent les usages durables, le parcours de l'encadrement aligne ceux qui décident, et le volet data protège les équipes qui manipulent des informations sensibles.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Masteria détient la certification Qualiopi pour la catégorie d'action « actions de formation », dont relève chaque brique. Les directions qui veulent leur propre programme le trouvent dans la <Link to="/formation-ia-dirigeants" style={aStyle}>formation IA dirigeants</Link> ; les fonctions, dans le <Link to="/formation-intelligence-artificielle" style={aStyle}>catalogue de formation intelligence artificielle</Link>, qui compte plus de 100 programmes.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {FORMATS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    {item.href && (
                      <Link to={item.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, marginTop: 12 }}>
                        Lire le détail
                        <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                ))}
                {/* Carte sombre : l'angle réglementaire, sans sur-vente */}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShieldCheck size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Chaque vague nourrit votre registre</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Le règlement 2026/1744 a reformulé l'article 4 à partir du 27 juillet 2026 : l'employeur agit pour que chacun sache utiliser les outils d'IA qu'on lui confie, sans niveau à garantir. Chaque séance de la démarche, datée et émargée, s'inscrit dans le registre interne qui en apporte la preuve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA DÉMARCHE (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>La démarche</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment se déroule une acculturation IA réussie ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>En quatre temps qui se recouvrent : ouvrir le sujet devant tous, former service par service, expérimenter sous des règles écrites, puis confier la suite à des référents. Le trimestre laisse aux habitudes le temps de se former entre deux séances, et chaque vague corrige la précédente.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
            {DEMARCHE.map(step => (
              <div key={step.num} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 15, color: '#60A5FA', fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Quand l'acculturation accompagne un projet plus large, comme un outil à construire ou des tâches à automatiser, elle devient le volet formation de notre <Link to="/accompagnement-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>accompagnement IA</Link>, conduit sur plusieurs mois.
          </p>
        </div>
      </section>

      {/* ── PROGRAMME TYPE SUR UN TRIMESTRE ── */}
      <section id="programme-type" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Le calendrier</Kicker>
          <h2 style={h2Style}>
            Douze semaines d'acculturation, vague par vague
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Un calendrier représentatif tient en douze semaines : cadrage et ouverture au début, ateliers métier après métier, formations approfondies avec la charte, puis référents et bilan. Une PME le resserre, un groupe l'étire site par site ; l'enchaînement des quatre temps reste le même.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {PROGRAMME_TYPE.map((step, i) => (
              <div
                key={step.periode}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === PROGRAMME_TYPE.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 11.5, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif', textAlign: 'center', lineHeight: 1.1 }}>{step.periode.replace('Semaines ', 'S')}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>{step.periode}</div>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 740 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '24px 0 0' }}>
            Ce calendrier sert de point de départ et s'adapte à chaque organisation. Le vôtre se fixe lors de l'échange de cadrage, à partir de vos effectifs, de vos sites et de l'outil retenu.
          </p>
        </div>
      </section>

      {/* ── DEUX DÉMARCHES EN COURS (études de cas) ── */}
      <section id="exemples" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Sur le terrain</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Deux organisations qui avancent par vagues</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le premier palier compte plus que l'ampleur du plan. Un groupe industriel a commencé par vingt-quatre managers, un distributeur par dix référents ; les deux prévoient de l'étendre entre octobre et décembre 2026, à partir de ce que ce premier groupe a construit.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
            {CAS.map(({ id, icon: Icon, titre, texte }) => (
              <div key={id} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 16 }}>{titre}</h3>
                </div>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.7, margin: 0, flex: 1 }}>{texte}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ ...aStyle, fontSize: 13.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Lire l'étude de cas
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES ERREURS CLASSIQUES ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Les pièges</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce qui fait échouer une acculturation IA
          </h2>

          <p style={answerStyle}>
            <strong>Cinq erreurs reviennent dans les démarches qui s'essoufflent : une ouverture sans suite, des exemples venus d'ailleurs, des licences ouvertes avant les règles, un encadrement tenu à l'écart et aucun indicateur posé au départ. Aucune ne dépend du budget ; toutes dépendent de l'ordre des séances.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 880 }}>
            Nous les avons rencontrées depuis 2022, chez des industriels, des distributeurs, des cabinets de conseil, des promoteurs immobiliers et des organisations professionnelles. Les <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas de Masteria</Link> décrivent ce que donne l'ordre inverse, mission par mission.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {ERREURS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: '3px solid #DC2626' }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANGLE MANAGEMENT ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Management et direction</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Pourquoi les managers passent-ils avant leurs équipes ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Une équipe adopte ce que son responsable pratique. L'acculturation à l'IA générative des managers leur apprend à trancher les demandes d'outils, à poser les règles, à repérer les tâches où l'outil fait gagner du temps et à s'en servir devant leurs équipes. Une direction alignée donne à la démarche son budget et sa légitimité ; c'est pourquoi son parcours ouvre souvent le trimestre.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: BarChart3, title: "Le parcours de l'encadrement couvre quatre sujets", desc: "La pratique personnelle sur ses propres dossiers, la lecture des risques (données, conformité, dépendance à un éditeur), les règles à fixer pour l'équipe et l'arbitrage des demandes. Il tient en sessions courtes, compatibles avec un agenda de direction." },
              { icon: MessagesSquare, title: "L'ouverture donne le même point de départ à tous", desc: "Devant toute l'entreprise, une intervention montre l'outil sur des pièces internes, ses limites et les règles de base. C'est la brique la plus demandée pour lancer une démarche, et celle qui dissipe le plus vite les idées toutes faites." },
              { icon: GraduationCap, title: 'Les formations métier transforment l\'élan en habitudes', desc: "Après l'ouverture, chaque service travaille ses propres tâches pendant une ou deux journées, avec des règles écrites et un référent désigné. Sans cette étape, l'élan de l'ouverture retombe avant d'avoir produit un seul usage durable." },
            ].map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Pour un comité exécutif appelé à trancher sa feuille de route, la <Link to="/formation-ia-comex" style={aStyle}>formation IA COMEX</Link> tient en une matinée ; pour des managers d'équipe, la <Link to="/formation-ia-management" style={aStyle}>formation IA management</Link> va plus loin sur le pilotage au quotidien.
          </p>
        </div>
      </section>

      {/* ── ACCULTURATION DATA ET IA ── */}
      <section id="data-ia" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Data et IA</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Acculturation data et IA : ce que chaque équipe doit savoir des données
          </h2>

          <p style={answerStyle}>
            <strong>L'acculturation data et IA apprend aux équipes ce que l'intelligence artificielle fait des informations qu'elles lui transmettent : lesquelles lui confier, comment elle les traite, ce que vaut ce qu'elle en tire.</strong> Une démarche qui l'oublie produit des salariés enthousiastes qui collent un fichier clients dans un compte gratuit. Avec ce volet, chacun sait repérer une donnée sensible, choisir l'outil adapté à son niveau de confidentialité et contrôler un chiffre avant de le diffuser.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24, marginTop: 12 }}>
            {DATA_IA.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>

          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Ce volet est intégré aux ateliers et aux formations par métier. Les équipes qui analysent des fichiers toute la semaine poursuivent avec la <Link to="/formation-data-ia" style={aStyle}>formation data et IA</Link> ; le cadre juridique est développé sur la page <Link to="/ia-et-rgpd" style={aStyle}>IA et RGPD</Link>. Quand les données doivent d'abord être remises en ordre (qualité, droits d'accès, référentiels), le <Link to="/conseil-data-ia" style={aStyle}>conseil data et IA</Link> intervient avant toute formation.
          </p>

          {/* Intention « acculturation informatique » : les équipes qui partent de loin */}
          <div style={{ ...cardStyle, background: '#F9FAFB', padding: 'clamp(24px, 3.5vw, 36px)', marginTop: 40, maxWidth: 880 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <IconTile icon={Compass} />
              <div>
                <h3 style={{ ...h3Style, marginBottom: 10 }}>Acculturation informatique : quand l'ordinateur lui-même pose problème</h3>
                <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.75, margin: '0 0 12px' }}>
                  Dans beaucoup d'organisations, une partie des salariés travaille peu sur écran : agents de production, techniciens itinérants, personnel d'accueil. Pour eux, l'acculturation IA commence par une courte remise à niveau informatique, glissée dans les premiers ateliers : ouvrir un dossier partagé, retrouver un fichier, choisir un mot de passe solide. L'assistant arrive ensuite, présenté comme une aide pour rédiger ou dicter un texte.
                </p>
                <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.75, margin: 0 }}>
                  Ces équipes figurent souvent parmi celles qui en tirent le plus, parce que l'outil leur épargne des écrans qu'elles n'aimaient pas : un rapport d'intervention dicté, un courrier mis en forme en quelques secondes. La <Link to="/formation-ia-debutant" style={aStyle}>formation IA débutant</Link> est construite pour ce point de départ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCEMENT OPCO ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Budget et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Des briques au prix connu, présentables à votre OPCO
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le tarif est public : une journée dans vos murs ou à distance vaut 1 980 € HT pour un groupe plafonné à douze, deux journées 3 960 € HT, une séance de Sprint 1 980 € HT ; seule l'intervention d'ouverture se chiffre au forfait. Inscrites parmi les formations de l'année, ces briques peuvent être financées par l'OPCO de votre branche, à hauteur de ce que ses règles et son budget autorisent. Programme, objectifs, modalités d'évaluation : nous rassemblons avec vous tout ce que l'opérateur demande. L'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> vous indique votre opérateur d'après votre secteur.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Journée intra : 1 980 € HT, douze stagiaires maximum',
                  'Sprint de trois heures : 1 980 € HT',
                  'Demande OPCO préparée avec vous',
                  'Aucune prise en charge par le CPF',
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

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Acculturation IA : réponses aux questions des directions
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre cas sort de ces réponses ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Décrivez-le-nous
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
            Les pages à lire avant de lancer votre trimestre
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Chaque brique a sa page, et la démarche touche aussi au choix de l'outil, aux données et aux règles internes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Sensibilisation IA', href: '/sensibilisation-ia', tag: 'Premier contact', desc: "Les trois formats du tout premier temps, et ce que chaque séance doit contenir." },
              { label: 'Conférence IA en entreprise', href: '/conference-ia', tag: 'Ouverture', desc: "L'intervention devant toute l'entreprise : déroulé, préparation, suites possibles." },
              { label: 'Atelier intelligence artificielle', href: '/atelier-intelligence-artificielle', tag: 'Prise en main', desc: "Des ateliers en petits groupes pour prendre l'outil en main, chacun sur ses propres pièces." },
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Projet complet', desc: "Quand la formation s'inscrit dans un projet d'outils et d'automatisation sur plusieurs mois." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Catalogue', desc: "Le catalogue de plus de 100 programmes, classés par outil et par métier, pour la deuxième vague." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Comité exécutif', desc: "Le comité y règle ses propres questions en une matinée, avant le lancement." },
              { label: 'Formation IA dirigeants', href: '/formation-ia-dirigeants', tag: 'Direction', desc: "Le programme des directions : décisions, budget, pilotage d'une organisation outillée." },
              { label: 'Coaching IA', href: '/coaching-ia', tag: 'En tête-à-tête', desc: "Le format individuel, pour la dirigeante ou l'expert qui progresse mieux seul face à un formateur." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Règles', desc: "La charte qui s'écrit pendant les essais encadrés, et ce qu'elle doit trancher." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Réglementation', desc: "Le règlement européen pour les fonctions juridiques, conformité et données." },
              { label: 'Quel outil IA choisir', href: '/quel-outil-ia', tag: 'Choix de l\'outil', desc: "Un comparateur pour départager les assistants avant d'acheter des licences." },
              { label: 'Formation data et IA', href: '/formation-data-ia', tag: 'Data', desc: "Analyser ses fichiers avec l'IA, sans écrire de code, pour les équipes de chiffres." },
              { label: 'Formation gouvernance des données', href: '/formation-gouvernance-donnees', tag: 'Data', desc: "Pour les responsables des données : rôles, qualité, référentiels, patrimoine." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données personnelles', desc: "Les réglages qui protègent vos données et la place du délégué à la protection." },
              { label: 'Formation IA débutant', href: '/formation-ia-debutant', tag: 'Premiers pas', desc: "Pour les salariés qui débutent aussi sur l'ordinateur, au rythme qui leur convient." },
              { label: 'Conseil data et IA', href: '/conseil-data-ia', tag: 'Conseil', desc: "Quand les données doivent être remises en ordre avant de brancher une IA dessus." },
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
                    Consulter
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan conduit chaque démarche d'acculturation, du cadrage au bilan, avec des formateurs indépendants choisis pour la langue, le secteur ou le site : une vingtaine au total, aux côtés d'une dizaine de consultants. Cette page reprend ce qu'il a observé depuis la création de Masteria en 2022 et a été revue le 7 octobre 2026 ; sa <Link to="/mathias-nizan" style={aStyle}>biographie</Link> détaille son parcours.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Acculturation IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Dessinons ensemble vos douze semaines
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Parlez-nous de votre organisation : effectif, sites, métiers, outil déjà choisi ou non, et ce que la direction attend à la fin du trimestre. Vous recevez sous 24 heures une proposition de séquence, un calendrier et le devis, qui indique ce que l'OPCO est susceptible de financer.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander une proposition d'acculturation
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Activateur France Num · cabinet indépendant des éditeurs · missions en France comme hors de nos frontières
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (propres à la page) ── */}
      <section aria-labelledby="sources-acculturation" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-acculturation" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Textes et organismes de référence</h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>Pour vérifier le cadre européen, la certification de l'organisme et le rôle des opérateurs de compétences.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {[
              ...PAGE_CITATIONS,
              { name: "Ministère du Travail : la certification Qualiopi des prestataires de formation", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
              { name: "Ministère du Travail : ce que font les opérateurs de compétences", url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
            ].map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
