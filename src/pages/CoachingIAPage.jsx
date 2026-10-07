import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, UserRound, GraduationCap, MapPin, Sparkles,
  MessagesSquare, Target, Laptop, Landmark, CalendarCheck,
  BarChart3, Compass, Briefcase,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « coaching IA » (slug /coaching-ia), côté FORMATION (individuel).
 * Grappe Semrush du 10/08/2026 : « coach ia » (170), « coaching ia » (170),
 * « ia et coaching » (90), « coaching individuel ia {ville} » (70 chacune), traitée
 * par UNE page avec villes et distanciel, sans pages satellites par ville.
 * SERP mixte : coach logiciel (CoachHub AIMY) et coaching humain ; la page vise le
 * service humain et distingue les deux sens dans un tableau.
 * Réécrite le 2026-10-07 en texte propre (exigence ≥ 90 % de 6-grammes uniques).
 *
 * ANGLE PROPRE À CETTE PAGE : l'accompagnement individuel, en tête-à-tête. Voisines :
 * /sensibilisation-ia, /acculturation-ia, /atelier-intelligence-artificielle et
 * /conference-ia traitent des formats collectifs.
 *
 * FAITS : coaching individuel à 1 980 € HT la journée (brief commun du 07/10), volume
 * fixé au cadrage ; pas de CPF (formations sur mesure non enregistrées) ; transition
 * professionnelle : dispositif de la personne, sans le nommer (règle « aucun dispositif
 * public nommé »). Missions citées : « immobilier-etudes », « gerance-cabinet »,
 * « assistanat-direction » de src/data/missions-formation.js (formations individuelles
 * d'août et septembre 2026). Le chiffre « +1 500 formés » est retiré (décision en attente).
 */

const SLUG = 'coaching-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Coaching IA : un formateur pour vous seul | Masteria"
const META_DESC = "Coaching IA individuel : un formateur humain, vos dossiers, vos outils, votre agenda. Dirigeants, managers, experts. 1 980 € HT/jour, Qualiopi."
const KEYWORDS = "coaching ia, coach ia, ia et coaching, coaching individuel ia, coaching intelligence artificielle, coaching ia dirigeant, formation ia individuelle"

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
  { icon: UserRound, label: 'Un formateur, une seule personne' },
  { icon: Target, label: 'Vos dossiers de la semaine comme matière' },
  { icon: GraduationCap, label: 'Organisme certifié Qualiopi' },
  { icon: MapPin, label: 'En visio partout, sur place selon la ville' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Format', value: "Des rendez-vous individuels avec un formateur, construits sur les tâches que vous avez à traiter cette semaine" },
  { label: 'Pour qui', value: "Dirigeants, managers, experts métier, indépendants, personnes en reconversion" },
  { label: 'Outils', value: "Celui que vous utilisez ou que votre entreprise a choisi, parmi les cinq grands : Copilot, ChatGPT, Gemini, Claude, Vibe" },
  { label: 'Lieu', value: "À distance depuis n'importe quel pays ; sur place à Paris, Lyon, Marseille, Toulouse, Annecy et dans d'autres métropoles selon les agendas" },
  { label: 'Prix', value: "Une journée de coaching coûte 1 980 € HT, comme une journée de groupe ; le nombre de séances se fixe au cadrage" },
  { label: 'But', value: "Que vous continuiez seul : des usages en place, une boîte à outils écrite, des réflexes de vérification" },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  {
    icon: Target,
    title: 'Dirigeants et membres de comités exécutifs',
    desc: "Mesurer les effets de l'IA sur votre secteur et sur votre propre travail, avec un interlocuteur qui suit votre agenda et passe des choix stratégiques aux gestes concrets. Beaucoup de dirigeants préfèrent ce cadre discret à une salle de formation.",
  },
  {
    icon: MessagesSquare,
    title: "Managers et responsables de service",
    desc: "Encadrer une équipe qui commence à se servir de l'IA, trancher ses demandes d'outils, montrer l'exemple. Les séances partent de vos situations : préparer un entretien, rédiger une synthèse pour la direction, fixer les règles de l'équipe.",
  },
  {
    icon: Laptop,
    title: 'Experts métier et personnes en transition',
    desc: "Aller plus loin sur les outils de votre fonction, ou préparer un rebond professionnel avec l'IA parmi vos compétences. Pour une reconversion ou une mobilité, le financement suit le dispositif qui vous accompagne, et nous préparons les pièces qu'il demande.",
  },
  {
    icon: Sparkles,
    title: 'Indépendants et professions réglementées',
    desc: "Consultants, avocats, experts-comptables, architectes : faire entrer l'IA dans une pratique exigeante, en respectant le secret professionnel et les règles de confidentialité propres à votre ordre ou à vos clients.",
  },
]

/* ───────── Coach humain vs coach IA (tableau citable) ───────── */

const COMPARATIF = [
  {
    critere: "De quoi il s'agit",
    humain: "Un formateur expérimenté qui vous suit au fil de séances individuelles",
    outil: "Un logiciel conversationnel disponible à toute heure",
  },
  {
    critere: "Ce qui s'adapte à vous",
    humain: "Les cas traités, l'outil, le niveau de départ, le rythme et l'agenda",
    outil: "Les réponses, dans la limite de ce que le logiciel sait de vous",
  },
  {
    critere: 'Sa force',
    humain: "Un regard extérieur qui repère vos angles morts et corrige les mauvaises habitudes",
    outil: "La disponibilité permanente pour un coût d'usage faible",
  },
  {
    critere: 'Sa limite',
    humain: "Des créneaux à caler et un budget de formation à prévoir",
    outil: "Aucun recul sur ce que vous ne voyez pas ; qualité variable d'un produit à l'autre",
  },
  {
    critere: 'Financement',
    humain: "Demande possible auprès de l'OPCO quand le coaching est construit comme une formation",
    outil: "Abonnement logiciel, hors financement de la formation",
  },
]

/* ───────── Déroulé (4 étapes) ───────── */

const DEROULE = [
  {
    num: '01',
    title: 'Un cadrage en tête-à-tête',
    desc: "Trente minutes offertes pour faire le point : votre métier, les outils auxquels vous avez accès, votre niveau, ce que vous voulez savoir faire dans deux mois. Il en sort un programme écrit, avec des objectifs vérifiables, qui fait du coaching une action de formation.",
  },
  {
    num: '02',
    title: 'Des séances sur vos dossiers',
    desc: "Chaque séance part d'une tâche qui vous attend : une note à rendre, un tableau à analyser, un courrier délicat. Vous tenez le clavier, le formateur corrige la demande et explique pourquoi. Entre deux séances, vous appliquez sur votre travail ce qui a été vu.",
  },
  {
    num: '03',
    title: 'Une autonomie qui grandit',
    desc: "Le programme bouge avec vos progrès : on creuse ce qui vous sert, on abandonne ce qui ne vous sert pas. Le but : que vous puissiez vous passer du formateur, avec une boîte à outils écrite : demandes types, méthodes, règles de prudence.",
  },
  {
    num: '04',
    title: 'Une évaluation, et une suite au choix',
    desc: "Vos acquis sont vérifiés au regard des objectifs du cadrage, comme l'exige Qualiopi. Ensuite, deux options : un point à distance quelques semaines plus tard, ou rien de plus si le coaching a rempli son office.",
  },
]

/* ───────── Parcours types ───────── */

const PARCOURS = [
  {
    profil: 'Dirigeant',
    seances: '4 à 5 séances de 1 h 30',
    contenu: "Les effets de l'IA sur votre secteur, une pratique personnelle sur vos dossiers (notes, synthèses, préparation de comités), puis la démarche de l'entreprise : par quelles équipes commencer, quelles règles fixer, comment répondre aux demandes d'outils. La dernière séance pose votre feuille de route.",
  },
  {
    profil: 'Manager',
    seances: '4 séances de 1 h 30 à 2 h',
    contenu: "Vos situations d'encadrement : préparer un entretien annuel ou un retour difficile, produire un compte rendu ou un reporting, informer l'équipe, encadrer ses usages de l'IA. Chaque séance repart de ce que vous avez tenté depuis la précédente, réussites et blocages compris.",
  },
  {
    profil: 'Expert métier',
    seances: '5 à 6 séances de 2 h',
    contenu: "Le cœur de votre métier, avec l'outil de votre environnement (Gemini, Copilot, Claude, ChatGPT ou Vibe), jusqu'aux fonctions avancées : projets, compétences, analyse de fichiers, recherche approfondie. À la sortie, des usages en place et une bibliothèque personnelle que vous réutilisez.",
  },
  {
    profil: 'Transition professionnelle',
    seances: '5 à 6 séances sur la durée du dispositif',
    contenu: "Un socle commun à plusieurs assistants, puis l'application à votre projet : métier visé, candidatures et entretiens préparés avec l'IA, ou lancement d'une activité indépendante. Le calendrier suit celui de votre dispositif d'accompagnement.",
  },
]

/* ───────── Trois parcours individuels récents (missions de formation) ───────── */

const MISSIONS = [
  {
    id: 'gerance-cabinet',
    icon: Compass,
    titre: 'Un gérant de cabinet de géomètres-experts, en août 2026',
    texte: "Deux jours à distance avec un formateur du réseau : une compétence qui confronte chaque procès-verbal de bornage au plan et à l'acte, une seconde qui prépare la réponse à chaque demande de devis à partir des trames du cabinet, et sa messagerie Outlook reliée à Claude, chaque envoi restant soumis à sa relecture.",
  },
  {
    id: 'immobilier-etudes',
    icon: BarChart3,
    titre: "La responsable études d'un groupe de promotion immobilière, en septembre 2026",
    texte: "Une journée à distance pour tirer de ses tableaux commerciaux une note de lecture puis une présentation pour la direction, le fichier clients étant anonymisé avant d'entrer dans Claude.",
  },
  {
    id: 'assistanat-direction',
    icon: Briefcase,
    titre: "Une assistante de direction dans l'édition logicielle, en septembre 2026",
    texte: "Une journée consacrée à préparer un comité de direction, de l'ordre du jour au mémo du dirigeant, Copilot servant aux données internes et Claude aux contenus publics ou anonymisés ; elle repart avec ses priorités des trente prochains jours.",
  },
]

/* ───────── Les erreurs ───────── */

const ERREURS_COACHING = [
  {
    title: 'Arriver sans dossier',
    desc: "Un coaching nourri d'exemples génériques donne de la culture générale et aucun réflexe. Apportez à chaque séance une tâche de votre semaine : c'est la condition pour que les usages tiennent après la dernière.",
  },
  {
    title: 'Tout concentrer sur une journée',
    desc: "Les progrès viennent de l'alternance entre séance et pratique. Des séances espacées d'une à deux semaines, avec des essais entre elles, laissent plus de traces qu'une journée dense, pour le même nombre d'heures.",
  },
  {
    title: "Choisir l'outil avant de connaître le besoin",
    desc: "Le bon assistant dépend de vos logiciels habituels et de vos tâches, bien plus que de l'actualité. Le cadrage part de votre poste ; l'outil se choisit ensuite, et le programme couvre ses fonctions comme ses limites.",
  },
  {
    title: 'Oublier la confidentialité',
    desc: "Un usage individuel mal cadré expose autant qu'un usage collectif : un dossier client dans un compte gratuit, une pièce confidentielle dans le mauvais outil. Les règles (offre à utiliser, informations interdites, relecture systématique) entrent au programme dès la première séance.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que le coaching IA ?",
    a: "Le terme recouvre deux réalités, que cette page sépare. La première, celle que propose Masteria : un formateur humain qui vous fait progresser sur l'intelligence artificielle, en séances individuelles bâties sur votre propre travail. La seconde : les « coachs IA », des logiciels conversationnels qui accompagnent un utilisateur en continu, en sport, en prise de parole ou en vente. Les deux se complètent, puisqu'une personne bien formée tire davantage de tout outil, coach logiciel compris. Si vous cherchez un humain pour progresser, vous êtes au bon endroit.",
  },
  {
    q: "Coaching IA et formation en groupe : qu'est-ce qui change ?",
    a: "Deux choses : l'effectif et le point de départ. Une formation de groupe suit un programme pensé pour plusieurs personnes, avec des cas représentatifs du métier. Un coaching part de vous : vos fichiers, vos procédures, votre niveau, votre agenda. On avance plus vite sur ce qui vous concerne, on laisse de côté le reste, et les questions qu'on n'ose pas poser devant des collègues trouvent leur réponse. Construit avec un programme, des objectifs et une évaluation, le coaching reste une action de formation au sens réglementaire, et c'est ainsi que nous le bâtissons.",
  },
  {
    q: "Le coaching IA est-il finançable ?",
    a: "Oui, à une condition de forme. Bâti comme une action de formation individuelle (programme personnalisé, objectifs pédagogiques, évaluation des acquis), le coaching peut être financé en tout ou partie par votre OPCO, à sa discrétion et dans la limite de ses fonds ; Masteria, certifiée Qualiopi, constitue la demande à vos côtés. Un accompagnement libre, sans cadre pédagogique, n'est donc pas finançable par votre OPCO. Quant au CPF, il ne s'applique pas : il ne finance que des formations certifiantes enregistrées, et un parcours individuel sur mesure n'en fait pas partie. En transition professionnelle, c'est le dispositif qui vous accompagne qui finance, et nous en parlons au cadrage.",
  },
  {
    q: "Proposez-vous un coaching individuel IA à Paris, Marseille, Toulouse ou Annecy ?",
    a: "Oui, avec une organisation que nous assumons : Masteria est installée à Lyon, et le coaching individuel se fait d'abord à distance, un format qui convient au travail en tête-à-tête sur écran partagé. Des séances sur place s'organisent à Paris, Lyon, Marseille, Toulouse, Annecy et dans d'autres grandes villes selon les agendas, ainsi qu'à l'étranger (Europe, États-Unis, Inde). Beaucoup de parcours commencent par une rencontre sur place et continuent à distance. La qualité dépend du travail mené sur vos dossiers, quel que soit le lieu.",
  },
  {
    q: "Sur quels outils le coaching porte-t-il ?",
    a: "Sur ceux qui comptent dans votre quotidien. Si votre entreprise a déployé un assistant (ChatGPT, Gemini, Claude, Vibe ou Microsoft Copilot, anciennement Microsoft 365 Copilot), le coaching s'y concentre pour en tirer le meilleur. Si vous choisissez librement, nous comparons deux ou trois outils sur vos tâches avant d'approfondir le plus adapté. Les fondamentaux valent partout : formuler une demande précise, faire raisonner l'outil par étapes, contrôler une réponse, protéger ce qui est confidentiel. Masteria ne touche aucune commission d'éditeur.",
  },
  {
    q: "Combien coûte un coaching IA individuel ?",
    a: "Une journée de coaching revient à 1 980 € HT, au même prix qu'une journée de formation en groupe, sans supplément pour le format individuel. Le nombre de séances, donc le volume total, se fixe au cadrage d'après votre point de départ et votre objectif. Les trente minutes de cadrage sont offertes ; vous recevez ensuite sous 24 heures le programme personnalisé, le devis et, si vous êtes salarié ou dirigeant d'une entreprise, les éléments pour la demande à l'OPCO.",
  },
  {
    q: "Combien de séances faut-il pour progresser ?",
    a: "La plupart des parcours comptent entre deux et six séances, espacées d'une à trois semaines. Cet espacement est voulu : les réflexes se forment entre deux séances, quand vous pratiquez sur votre travail, et chaque séance s'ajuste sur ce que vous avez tenté. Un besoin précis, comme prendre en main un outil que l'entreprise vient de déployer, peut tenir en une séance ; la montée en compétence complète d'un dirigeant en demande davantage. Le cadrage dimensionne le parcours sans le gonfler.",
  },
  {
    q: "Un coach IA logiciel ne suffit-il pas ?",
    a: "Pour s'entraîner chaque jour, il complète utilement ; pour progresser vite, il montre ses limites. Un logiciel répond à vos questions, mais il ne voit pas ce que vous ne lui montrez pas : une formulation qui dessert vos demandes, une habitude risquée avec des données confidentielles, un usage évident dans votre métier que vous n'avez pas repéré. Un regard extérieur et expérimenté corrige ces travers. Notre position : le formateur pose les fondations et l'esprit critique, les outils prolongent l'entraînement ensuite.",
  },
  {
    q: "Le coaching convient-il à un vrai débutant ?",
    a: "C'est même le format le plus confortable pour commencer : personne ne vous observe, le rythme est le vôtre, et tout part de situations que vous connaissez par cœur. Il suffit de savoir utiliser une messagerie et un traitement de texte. Le coaching sert aussi les profils avancés qui veulent franchir un palier précis : automatiser une tâche répétitive, organiser une veille, fiabiliser des livrables. Le cadrage situe votre point de départ, sans jugement.",
  },
]

/* ───────── JSON-LD ───────── */

/* Le schema Course (avec Offer 1 980 €/jour) est généré par SEOHead via courseData. */
const COURSE_DATA = {
  name: 'Coaching IA individuel (Masteria)',
  description: "Coaching individuel à l'intelligence artificielle avec un formateur humain : séances construites sur les dossiers du participant, avec l'outil de son environnement (Copilot, Gemini, ChatGPT, Claude ou Vibe), programme et objectifs fixés au cadrage, évaluation des acquis. À distance partout, sur place selon les villes. 1 980 € HT la journée.",
  level: 'Tous niveaux',
  teaches: [
    "Écrire des demandes précises et faire raisonner l'outil par étapes",
    "Appliquer l'IA à ses propres dossiers et tâches de la semaine",
    'Contrôler les réponses et protéger les informations confidentielles',
    'Constituer une boîte à outils personnelle réutilisable',
  ],
  about: "Coaching individuel en intelligence artificielle",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique. Usage courant de la bureautique.',
  audience: 'Dirigeants, managers, experts métier, indépendants',
  locationName: 'Masteria : à distance (Europe, États-Unis, Inde) ou sur place selon les villes',
  priceDescription: "Coaching individuel : 1 980 € HT la journée, volume fixé au cadrage selon l'objectif.",
}

/* Déroulé en ItemList (séquence citable, GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les quatre étapes d'un coaching IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEROULE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : les deux sens du terme. */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/coaching-ia#termes',
  name: 'Coaching IA : deux sens à distinguer',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Coaching IA (formateur humain)',
      description: "Séances individuelles avec un formateur expérimenté pour maîtriser l'intelligence artificielle dans son travail, à partir de ses propres dossiers, avec programme, objectifs et évaluation.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Coach IA (logiciel)',
      description: "Agent conversationnel qui suit un utilisateur en continu dans un domaine (prise de parole, sport, vente) : toujours disponible, personnalisé dans la limite de ce qu'il sait de l'utilisateur.",
    },
  ],
}

/* Article : auteur (Mathias Nizan) et dates. */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/coaching-ia#article',
  headline: "Coaching IA : un formateur humain, vos dossiers, votre rythme",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/coaching-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Coaching IA', description: "Accompagnement individuel d'un professionnel sur l'intelligence artificielle" },
    { '@type': 'Thing', name: 'Coaching', sameAs: 'https://fr.wikipedia.org/wiki/Coaching' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
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
  { name: "Ce que garantit la marque Qualiopi, selon le ministère du Travail", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { name: "Ministère du Travail : le rôle de l'OPCO dans le plan de formation d'une entreprise", url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
]

export default function CoachingIAPage() {
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
    { name: 'Coaching IA', slug: SLUG },
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
        courseData={COURSE_DATA}
        datePublished="2026-08-10"
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[processJsonLd, definitionsJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Coaching IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserRound size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Individuel · Coaching IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Coaching IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>un formateur humain, vos dossiers, votre rythme</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Page de <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · ouverte en août 2026, réécrite le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le coaching IA de Masteria met un formateur humain face à une seule personne : <strong style={{ color: '#fff', fontWeight: 700 }}>des séances construites sur les dossiers que vous avez à traiter, avec votre outil et à votre rythme, jusqu'à ce que vous avanciez seul</strong>. Facturé 1 980 € HT par journée, il peut, structuré comme une formation, faire l'objet d'une demande à l'OPCO. À distance partout, sur place selon les villes.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            « Coach IA » désigne aussi des logiciels qui accompagnent un utilisateur en continu ; le tableau plus bas compare honnêtement les deux, qui ne rendent pas le même service. Ici, le coach est une personne, que nous appelons plutôt formateur : un regard extérieur qui part de votre métier, corrige les habitudes qui vous freinent et repère les usages que vous ne voyez pas encore.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Préparer votre coaching
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#deroule" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les quatre étapes
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

      {/* ── POUR QUI (éditorial asymétrique) ── */}
      <section id="profils" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pour qui</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qui a intérêt à un coaching IA individuel ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Les personnes pour qui une salle de formation ne convient pas : un dirigeant qui veut de la discrétion et un horaire choisi, un manager qui encadre une équipe déjà outillée, un expert ou une personne en reconversion, un indépendant tenu par le secret professionnel. Tous veulent progresser sur leurs propres dossiers.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour une équipe entière, la <Link to="/formation-intelligence-artificielle" style={aStyle}>formation par métier</Link> ou l'<Link to="/acculturation-ia" style={aStyle}>acculturation de l'entreprise</Link> conviennent mieux ; le coaching vient alors en complément pour une ou deux personnes clés.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PROFILS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COACH HUMAIN VS COACH IA (ancre sombre, désambiguïsation) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>IA et coaching</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Coaching humain sur l'IA ou coach IA logiciel : quelle différence ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le formateur humain apporte un regard extérieur : il repère ce que vous ne voyez pas, corrige les habitudes et adapte tout à votre métier. Le coach logiciel apporte une disponibilité permanente pour s'entraîner. Le premier pose les bases et l'esprit critique, le second entretient la pratique au quotidien.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif entre coaching humain sur l'IA et coach IA logiciel" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '39%' }}>Coaching humain sur l'IA</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '39%' }}>Coach IA (logiciel)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.humain}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.outil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Si votre question porte plutôt sur l'assistant à choisir pour vous entraîner seul, le comparateur <Link to="/quel-outil-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>Quel outil IA ?</Link> donne une première réponse en quelques minutes.
          </p>
        </div>
      </section>

      {/* ── DÉROULÉ (timeline) ── */}
      <section id="deroule" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Le déroulé</Kicker>
          <h2 style={h2Style}>
            Comment se déroule un coaching IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Un cadrage individuel, dont les trente minutes sont offertes, fixe le programme et les objectifs. Suivent des séances sur vos dossiers, espacées d'une à trois semaines, une autonomie qui grandit avec une boîte à outils écrite, puis une évaluation des acquis au regard des objectifs. Deux à six séances suffisent dans la plupart des cas.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {DEROULE.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === DEROULE.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARCOURS TYPES ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Parcours types</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À quoi ressemble un coaching IA, selon votre profil ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Chaque coaching se dessine au cadrage, mais quatre schémas reviennent souvent : le dirigeant qui veut une lecture stratégique et une pratique personnelle, le manager qui encadre une équipe outillée, l'expert qui installe des usages avancés et la personne en transition qui prépare son projet. De quatre à six séances, à distance ou sur place.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {PARCOURS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                  <h3 style={{ ...h3Style, fontSize: 16, margin: 0 }}>{item.profil}</h3>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: c }}>{item.seances}</span>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.68, margin: 0 }}>{item.contenu}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.7, margin: '24px 0 0', maxWidth: 820 }}>
            Le nombre de séances suit votre point de départ et vos objectifs ; aucun forfait n'est imposé. Le tarif journalier, 1 980 € HT, ne varie pas avec le profil.
          </p>
        </div>
      </section>

      {/* ── TROIS PARCOURS INDIVIDUELS RÉCENTS ── */}
      <section id="parcours-recents" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Parcours récents</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Trois personnes formées seules, à distance, en 2026</h2>
          <p style={answerStyle}>
            <strong>Un gérant, une responsable études et une assistante de direction ont suivi un parcours individuel cet été et cette rentrée. Chacun a travaillé sur ses propres fichiers et repart avec des outils qu'il a lui-même construits.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {MISSIONS.map(({ id, icon: Icon, titre, texte }) => (
              <div key={id} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 16 }}>{titre}</h3>
                </div>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.7, margin: 0, flex: 1 }}>{texte}</p>
                <Link to={`/etudes-de-cas-ia#mission-${id}`} style={{ ...aStyle, fontSize: 13.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Lire le déroulé de la mission
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VILLES & DISTANCIEL + FINANCEMENT ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Où et comment</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            À distance partout, sur place selon les villes
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le coaching individuel IA se fait d'abord en visioconférence, un format adapté au tête-à-tête sur écran partagé, depuis la France comme depuis l'étranger, en Europe, aux États-Unis ou en Inde. Des séances sur place se prévoient à Paris, Lyon, Marseille, Toulouse, Annecy et dans d'autres métropoles selon les agendas. Beaucoup de parcours s'ouvrent par une rencontre en personne et continuent à distance.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <CalendarCheck size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Comment s'organisent les séances</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Des séances d'une à trois heures, calées sur votre agenda et espacées pour laisser aux réflexes le temps de s'installer. Masteria est installée à Lyon et le formateur se déplace pour les séances sur place ; à distance, le travail reste aussi précis, puisque vos documents et votre outil occupent l'écran partagé.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Le financement, en clair</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Monté comme une formation individuelle (programme, objectifs, évaluation), le coaching peut être présenté à l'OPCO de votre entreprise, qui décide de sa prise en charge ; Masteria, certifiée Qualiopi, s'occupe des pièces avec vous. Quant au CPF, ces parcours sur mesure n'y ouvrent pas droit. En reconversion, le dispositif qui vous accompagne prend le relais, et nous lui fournissons les pièces demandées. Le simulateur <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> retrouve votre opérateur selon votre domaine d'activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES ERREURS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pour en tirer le meilleur</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Quatre erreurs qui gâchent un coaching IA</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20, marginTop: 8 }}>
            {ERREURS_COACHING.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
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
                Coaching IA : vos questions, nos réponses
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une hésitation que ces réponses ne lèvent pas ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Envoyez-nous un message
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
            À lire avant ou pendant votre coaching
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Les formats collectifs qui complètent le tête-à-tête, et les outils utiles entre deux séances.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation IA dirigeants', href: '/formation-ia-dirigeants', tag: 'Direction', desc: "Le format collectif pour un comité de direction entier, quand plusieurs dirigeants avancent ensemble." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Toute l\'entreprise', desc: "Quand c'est l'organisation entière qui doit s'y mettre, service après service." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Catalogue', desc: "Le catalogue complet, plus de 100 programmes, à suivre en groupe ou seul." },
              { label: 'Formation IA à distance', href: '/formation-intelligence-artificielle-distanciel', tag: 'En visio', desc: "Comment se passe une formation suivie entièrement en ligne, outils et rythme compris." },
              { label: 'Quel outil IA choisir', href: '/quel-outil-ia', tag: 'Outils', desc: "Pour situer l'assistant le plus adapté avant ou pendant le coaching." },
              { label: 'Bibliothèque de prompts', href: '/bibliotheque-de-prompts', tag: 'Pratique', desc: "Des demandes types par métier, pour s'exercer entre deux séances." },
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
                    Découvrir
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUI INTERVIENT (cabinet + réseau) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre formateur</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un fondateur qui coache lui-même, un réseau pour les autres langues et métiers
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                En créant Masteria à Lyon en 2022, Mathias Nizan a choisi de ne travailler que sur l'IA. Il suit lui-même une partie des coachings et confie les autres à l'un des quelque vingt formateurs indépendants du réseau, choisi pour votre métier, votre outil ou votre langue. Aucun éditeur ne rémunère nos recommandations. Les <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>page presse</Link> donnent des exemples datés de ce travail.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['2022', 'création du cabinet, à Lyon'],
                ['~20', 'formateurs indépendants dans le réseau'],
                ['Aucun', "lien commercial avec un éditeur d'IA"],
                ['3 zones', 'Europe, États-Unis, Inde'],
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

      {/* ── SIGNATURE (remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan a repris ce texte le 7 octobre 2026 à partir des parcours individuels menés cette année. Avant un premier échange, vous pouvez lire <Link to="/mathias-nizan" style={aStyle}>son parcours et sa façon de travailler</Link>.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Coaching IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Commençons par votre prochaine tâche
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous votre métier, les outils à votre disposition et ce que vous voulez savoir faire dans deux mois. Après trente minutes de cadrage, vous recevez dans les 24 heures un programme personnalisé, le nombre de séances conseillé et le devis, avec les éléments pour l'OPCO si vous y avez droit.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un coaching IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Tarif journalier de 1 980 € HT · à distance ou sur place · Activateur France Num
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (propres à la page) ── */}
      <section aria-labelledby="sources-coaching" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-coaching" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Pour vérifier le cadre du financement</h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>Deux pages officielles : la certification détenue par Masteria et le fonctionnement des opérateurs de compétences.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {PAGE_CITATIONS.map(s => (
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
