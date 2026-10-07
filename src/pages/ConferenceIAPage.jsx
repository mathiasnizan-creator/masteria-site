import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Mic, Presentation, Users, GraduationCap, MapPin, Check, Video,
  Sparkles, MessagesSquare, ShieldCheck, Landmark, BarChart3, FileText,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « conférence IA » (slug /conference-ia), côté FORMATION.
 * Créée le 2026-09-04 (Semrush du 03/09 : « conférence ia », 260/mois, KD 14).
 * Réécrite le 2026-10-07 en texte propre (exigence ≥ 90 % de 6-grammes uniques).
 *
 * ANGLE PROPRE À CETTE PAGE : l'intervention devant un grand public interne (plénière
 * d'entreprise, convention, comité de direction, webinaire multi-sites), sa préparation
 * et son déroulé. Voisines : /sensibilisation-ia (la première prise de conscience, trois
 * formats), /acculturation-ia (l'organisation par vagues), /atelier-intelligence-
 * artificielle (la pratique en petit groupe), /coaching-ia (l'individuel),
 * /formation-ia-comex (la matinée exécutive).
 *
 * FAITS : prix au forfait sur devis (base : demi-journée d'intervention) ; la remise sur
 * cycle de l'ancienne version est retirée (absente des faits du 07/10). AI Act : fiche de
 * faits du 07/10, section 7. Cas : « industrie » de src/data/etudes-de-cas.js (matinée du
 * comité de direction, en anglais). « Séminaire » banni du texte (règle Masteria).
 */

const SLUG = 'conference-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conférence IA en entreprise : plénière, COMEX | Masteria"
const META_DESC = "Conférence IA en entreprise : une à deux heures devant le personnel, des démonstrations sur vos documents, les règles d'usage. Plénière, COMEX, visio."
const KEYWORDS = "conférence ia, conférence intelligence artificielle, conférence ia entreprise, conférencier ia, conférence ia convention, conférence ia comex, intervenant ia entreprise, keynote ia entreprise, conférence acculturation ia"

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
  { icon: Presentation, label: '60 à 120 minutes, salle de toute taille' },
  { icon: Sparkles, label: 'Démonstrations en direct sur vos pièces' },
  { icon: Users, label: 'Plénière, convention, comité de direction' },
  { icon: MapPin, label: 'Europe · États-Unis · Inde, sur scène ou à l\'écran' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Format', value: "Une intervention de 60 à 120 minutes lors d'une plénière, d'une convention, d'un comité de direction, ou diffusée en ligne pour plusieurs sites" },
  { label: 'Public', value: "De vingt à plusieurs centaines de personnes : direction, encadrement, équipes de terrain, membres d'un réseau ou d'une fédération" },
  { label: 'Contenu', value: "L'état des outils en octobre 2026, des démonstrations sur vos documents, les erreurs à surveiller, les règles d'usage, un temps de questions" },
  { label: 'Outils', value: "Celui que vos équipes utilisent déjà, ou plusieurs assistants côte à côte si le choix reste ouvert ; aucun éditeur ne finance nos interventions" },
  { label: 'Préparation', value: "Trente minutes de cadrage deux semaines avant, trois à cinq documents anonymisés une semaine avant" },
  { label: 'Ensuite', value: "Trois usages à essayer dans la semaine, puis des ateliers ou des formations par métier si vous le décidez" },
]

/* ───────── Les formats (4 cartes) ───────── */

const FORMATS = [
  {
    icon: Presentation,
    title: "La plénière de l'entreprise",
    desc: "Le cas le plus fréquent : 60 à 90 minutes devant tout le personnel, pendant la journée annuelle de l'entreprise ou une convention interne. Une démonstration sur un document que chacun connaît fait plus pour l'adoption qu'une heure de théorie.",
  },
  {
    icon: BarChart3,
    title: "La séance du comité de direction ou du conseil",
    desc: "Une intervention courte pour ceux qui décident : ce que les outils savent faire en octobre 2026, leurs limites, les risques à arbitrer, ce que font les concurrents, les premières décisions à prendre. Un comité qui veut construire sa feuille de route poursuit avec la formation IA COMEX.",
  },
  {
    icon: Users,
    title: 'La convention de réseau ou de fédération',
    desc: "Franchiseurs, fédérations professionnelles, clubs de dirigeants, groupements d'adhérents : l'intervention reprend les situations que vivent les membres dans leur métier. Elle donne envie de se former, sans qu'aucune licence ne soit vendue à la sortie.",
  },
  {
    icon: Video,
    title: 'Le webinaire pour plusieurs sites',
    desc: "Quand les équipes sont réparties entre plusieurs sites ou plusieurs pays : la même intervention, diffusée en ligne, enregistrable avec votre accord, avec des questions écrites et triées par un modérateur. Elle précède souvent des ateliers organisés sur place, site par site.",
  },
]

/* ───────── Le déroulé (4 temps) ───────── */

const DEROULE = [
  {
    num: '01',
    title: "Ouvrir sur l'état des outils, sans jargon",
    desc: "Un quart d'heure pour dire ce qu'est l'IA générative en octobre 2026 et ce qui a changé depuis deux ans, à partir des outils que vos salariés ont déjà sur leur poste. Aucune théorie sur les réseaux de neurones : seulement ce que cela change dans une journée de travail.",
  },
  {
    num: '02',
    title: 'Montrer, sur des documents internes',
    desc: "Trente minutes au cœur de l'intervention. Un compte rendu, un courriel tendu, un tableau, un cahier des charges, une note technique : vos pièces, anonymisées. La salle voit l'assistant produire, se tromper, puis être corrigé, et les idées toutes faites tombent dans les deux sens.",
  },
  {
    num: '03',
    title: 'Poser les limites et les règles du jeu',
    desc: "Vingt minutes sur ce que l'outil ignore, les fautes qu'il fait sans hésiter, les informations qu'il ne doit jamais recevoir et les consignes internes sur son emploi. Les questions sensibles y trouvent leur place : emploi, surveillance, fiabilité des réponses.",
  },
  {
    num: '04',
    title: 'Conclure par trois essais pour la semaine',
    desc: "Les questions de la salle, puis trois usages simples que chacun pourra tenter dans les jours suivants sur l'outil de l'entreprise, avec la règle qui s'y attache. Sans cette conclusion pratique, une conférence reste un bon moment sans lendemain.",
  },
]

/* ───────── La préparation (J-15 → J+7) ───────── */

const PREPARATION = [
  {
    periode: 'J-15',
    title: 'Trente minutes pour cadrer',
    desc: "Un échange avec la personne qui organise : qui sera dans la salle, ce que ce public sait déjà, les outils autorisés ou interdits, les sujets délicats, le message que la direction veut porter, la place de l'intervention dans le programme de la journée. Le ton se décide à ce moment.",
  },
  {
    periode: 'J-7',
    title: 'Trois à cinq documents anonymisés',
    desc: "Des pièces représentatives du travail de vos équipes : une note de service, un courriel de relance, un fichier de reporting, un devis. Vous retirez les noms ; nous construisons les démonstrations à partir d'elles. Une démonstration sur un exemple de manuel ne laisse aucun souvenir.",
  },
  {
    periode: 'Jour J',
    title: "L'intervention elle-même",
    desc: "De 60 à 120 minutes selon le format choisi, démonstrations en direct, questions et conclusion pratique comprises. Sur place, l'intervenant arrive en avance pour essayer l'écran et la connexion ; en ligne, un test technique a lieu la veille avec votre équipe.",
  },
  {
    periode: 'J+7',
    title: 'Un retour, puis votre décision',
    desc: "Une synthèse : les questions posées, les usages qui ont suscité l'intérêt, les réticences entendues. Vous décidez ensuite de la suite, qui peut être rien du tout, une charte d'usage, des ateliers par service ou une démarche d'acculturation. L'intervention a rempli son rôle si ce choix vous paraît simple.",
  },
]

/* ───────── Les erreurs (citable) ───────── */

const ERREURS = [
  {
    title: 'Le spectacle de démonstrations hors sujet',
    desc: "Une heure d'images générées, de poèmes et de vidéos bluffantes : la salle applaudit et le lundi ressemble au vendredi. Une intervention utile montre l'outil sur le travail des participants, y compris au moment où il se trompe.",
  },
  {
    title: "L'intervenant qui représente un éditeur",
    desc: "Un conférencier payé par un fournisseur présente un produit, et le public le sent vite. Masteria ne dépend d'aucun éditeur : nos démonstrations utilisent l'outil que vous avez, ou plusieurs outils côte à côte pour que la comparaison reste honnête.",
  },
  {
    title: 'La conférence que rien ne suit',
    desc: "L'intervention lance un mouvement sans former personne. Sans ateliers, formations ni référents prévus derrière, l'intérêt se dissipe en deux semaines et l'IA passe pour une mode. Décidez de la suite avant la date, même modeste.",
  },
  {
    title: 'Un seul discours pour des publics différents',
    desc: "Un directeur, un chef d'équipe et un technicien n'attendent pas la même chose. Une plénière commune fonctionne si chacun y trouve un exemple de son métier, et si personne ne parle stratégie à ceux qui veulent savoir quoi faire le lendemain.",
  },
  {
    title: 'Les règles passées sous silence',
    desc: "Une intervention qui enthousiasme sans tracer de limites produit, dans la semaine, des fichiers clients collés dans des comptes gratuits. Les règles d'usage tiennent en vingt minutes, en langage courant, et font partie de la conférence.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une conférence IA en entreprise ?",
    a: "C'est une intervention de 60 à 120 minutes devant un public nombreux, qui montre ce que l'intelligence artificielle générative change au travail : ce que les outils réussissent, ce qu'ils ratent, comment s'en servir avec discernement et dans quelles règles. Elle se tient lors d'une plénière, d'une convention, devant un comité de direction ou en ligne. Chez Masteria, elle s'appuie sur des démonstrations en direct construites à partir de vos documents et s'achève sur trois usages à tester dans la semaine. Elle ouvre une démarche ; la formation vient ensuite.",
  },
  {
    q: "Combien de temps dure une conférence IA ?",
    a: "Entre une et deux heures. Une heure suffit lorsque l'intervention est un moment parmi d'autres dans une journée d'entreprise : l'état des outils, deux ou trois démonstrations, quelques questions. Une heure et demie à deux heures laisse place à davantage de démonstrations, à un vrai passage sur les règles et à un échange plus long avec la salle. Au-delà, le format change de nature : on entre dans l'atelier de trois heures, où chacun manipule l'outil.",
  },
  {
    q: "Combien de personnes peut-on réunir ?",
    a: "De vingt à plusieurs centaines. La conférence est le seul format sans plafond naturel : une plénière de quatre cents personnes fonctionne si les exemples parlent à chacun des publics présents et si les questions sont triées. En dessous de vingt personnes, un atelier où chacun pratique donne de meilleurs résultats, et nous vous le dirons lors du cadrage. En ligne, la limite est technique et dépend de votre outil de visioconférence.",
  },
  {
    q: "Conférence ou formation à l'IA : laquelle prévoir ?",
    a: "La conférence ouvre les yeux, la formation donne la main. Pendant une conférence, les participants regardent, écoutent, posent leurs questions et repartent avec des idées d'usage. Pendant une formation, ils prennent l'outil en main sur leurs propres livrables, s'exercent, sont corrigés et évalués, sur une à deux journées. La conférence convient au lancement ou à un public large ; la formation s'adresse aux équipes dont l'IA sera l'outil de tous les jours. Une démarche d'acculturation les enchaîne.",
  },
  {
    q: "La conférence est-elle construite pour notre entreprise ?",
    a: "Oui, et c'est ce qui la sépare d'une intervention de salon. Les trente minutes de cadrage fixent le public, son niveau, les outils en place et les sujets délicats. Vous transmettez ensuite trois à cinq documents anonymisés, et les démonstrations se construisent à partir d'eux. La trame reste stable d'une entreprise à l'autre, éprouvée par des dizaines d'interventions ; les exemples, le vocabulaire et la profondeur des démonstrations sont les vôtres.",
  },
  {
    q: "Sur quels outils d'IA porte la conférence ?",
    a: "Sur celui que vos salariés vont utiliser. Si l'entreprise a déployé Gemini, ChatGPT, Claude, Vibe ou Microsoft Copilot (anciennement Microsoft 365 Copilot), l'intervenant fait ses démonstrations dans la version dont disposent vos équipes. Si rien n'est encore choisi, il soumet la même tâche à plusieurs assistants pour donner à la direction une base de comparaison loyale. Aucun éditeur ne finance nos conférences, et aucune licence n'est proposée à la sortie.",
  },
  {
    q: "Combien coûte une conférence IA ?",
    a: "Un forfait, établi sur la base d'une demi-journée d'intervention, qui comprend le cadrage, la construction des démonstrations sur vos documents, l'intervention et la synthèse de la semaine suivante. Vous découvrez ce montant dans le devis, reçu dans la journée ouvrée qui suit le cadrage. Le déplacement de l'intervenant vous est facturé au prix réel quand la conférence a lieu chez vous ; une intervention en ligne ne coûte aucun trajet.",
  },
  {
    q: "Votre OPCO peut-il payer une conférence IA ?",
    a: "Souvent, à condition qu'elle prenne la forme d'une action de formation courte : objectifs pédagogiques écrits, contenu structuré, feuille d'émargement, attestation. Masteria, dont la certification Qualiopi couvre les actions de formation, rassemble les pièces avec vous ; votre opérateur de compétences décide ensuite, d'après ses règles et ses fonds, et nous vous indiquons au cadrage ce qui est envisageable. Une intervention ouverte à des invités extérieurs, ou purement événementielle, sort du champ de la formation.",
  },
  {
    q: "Peut-on organiser la conférence en ligne ?",
    a: "Oui. Le webinaire est le format naturel des organisations réparties sur plusieurs sites ou plusieurs pays : même contenu, mêmes démonstrations en direct, questions écrites et triées. Un essai technique a lieu la veille avec votre équipe, et l'enregistrement peut être conservé pour les absents si vous en acceptez la diffusion. La distance coûte un peu d'énergie collective ; elle rapporte en portée, sans aucun déplacement.",
  },
  {
    q: "Qui intervient ?",
    a: "Mathias Nizan, fondateur de Masteria, assure la plupart des conférences ; il forme depuis 2022 des directions, des managers et des équipes de terrain, auprès d'industriels, de distributeurs, de cabinets de conseil et de fédérations. Selon la ville, la langue et la date, un formateur du réseau Masteria peut intervenir à sa place : un professionnel indépendant, retenu pour sa pratique, qui suit la même trame et utilise les démonstrations préparées sur vos documents. Le devis indique le nom de l'intervenant.",
  },
  {
    q: "Et après la conférence ?",
    a: "Une synthèse vous parvient dans la semaine : questions posées, usages qui ont retenu l'attention, réticences exprimées. La suite vous appartient. Beaucoup d'organisations poursuivent avec des ateliers par service ou une démarche d'acculturation ; d'autres s'arrêtent à la conférence et à une charte d'usage, ce qui se justifie quand l'outil n'est pas encore déployé. Nous ne conditionnons jamais l'intervention à une commande ultérieure.",
  },
  {
    q: "Une conférence suffit-elle au regard de l'article 4 de l'AI Act ?",
    a: "Elle constitue une première mesure, datée et documentée, sans couvrir tout le besoin. En vigueur depuis février 2025, puis reformulé par le règlement 2026/1744 fin juillet 2026, cet article attend de l'employeur des actions pour que ceux qui utilisent l'IA pour son compte la maîtrisent : il impose des moyens, sans réclamer de certificat. Une conférence avec objectifs, contenu et attestation trouve sa place dans votre registre interne. Les équipes qui travaillent avec l'IA chaque jour ont besoin d'une formation en plus, et personne ne peut promettre la conformité en une heure.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Conférence IA en entreprise (Masteria)',
  alternateName: "Intervention sur l'intelligence artificielle générative devant le personnel d'une entreprise",
  description: "Conférence IA de 60 à 120 minutes devant un public interne : état des outils, démonstrations en direct sur des pièces fournies par l'entreprise, règles d'usage, questions et trois usages à tester. En plénière, convention, comité de direction ou en ligne. L'outil de l'entreprise ou plusieurs assistants comparés, sans lien avec un éditeur.",
  url: 'https://www.master-ia.fr/conference-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conference-ia#webpage' },
  serviceType: "Conférence sur l'intelligence artificielle en entreprise",
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
    educationalRole: "Direction, encadrement, équipes de terrain, réseaux professionnels",
    audienceType: 'B2B',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formats de conférence IA',
    itemListElement: FORMATS.map(f => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: f.title, description: f.desc } })),
  },
}

/* Le déroulé en ItemList (séquence citable, GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les quatre temps d'une conférence IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEROULE.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* DefinedTermSet : les termes du format. */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/conference-ia#termes',
  name: 'Conférence IA : définitions',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Conférence IA',
      description: "Intervention de 60 à 120 minutes devant un public nombreux, qui montre à partir de documents internes ce que l'IA générative réussit et rate, et rappelle les règles d'usage. Elle lance une démarche, la formation prend la suite.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Webinaire interne',
      description: "Conférence diffusée en ligne pour une organisation répartie sur plusieurs sites, avec questions écrites triées par un modérateur et enregistrement possible.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Littératie IA',
      description: "Aptitude du personnel à utiliser les outils d'IA et à juger leurs résultats ; l'AI Act confie à l'employeur le soin de la développer.",
    },
  ],
}

/* Article : auteur (Mathias Nizan) et dates. */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conference-ia#article',
  headline: "Conférence IA en entreprise : une intervention, toute la salle au même niveau",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conference-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Conférence', sameAs: 'https://fr.wikipedia.org/wiki/Conf%C3%A9rence' },
    { '@type': 'Thing', name: 'Littératie IA', description: "Aptitude du personnel à manier l'IA, dont le développement revient à l'employeur selon l'article 4" },
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

const PAGE_CITATIONS = [
  { name: "EUR-Lex, journal officiel de l'Union : le texte de 2024 sur l'intelligence artificielle", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Journal officiel de l'Union : l'Omnibus IA de 2026, qui a réécrit l'article 4", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Ministère de l'Économie, Mission innovation : comment acculturer des équipes à l'IA", url: 'https://www.economie.gouv.fr/mission-innovation/acculturer-lia-partir-du-reel-experimenter-partager' },
]

export default function ConferenceIAPage() {
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
    { name: 'Conférence IA', slug: SLUG },
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
        datePublished="2026-09-04"
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Conférence IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mic size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Conférence IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Conférence IA en entreprise :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>une intervention, toute la salle au même niveau</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Rédigé par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui donne la plupart de ces conférences · publiée en septembre, mise à jour le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une conférence IA montre en 60 à 120 minutes, devant un public nombreux, ce que l'intelligence artificielle générative change au travail : <strong style={{ color: '#fff', fontWeight: 700 }}>les tâches que l'outil réussit, celles qu'il rate, des démonstrations en direct sur vos documents et les règles pour s'en servir</strong>. Elle se tient en plénière, en convention, devant un comité de direction ou en ligne.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            La conférence a un rôle précis : réunir tout le monde au même point de départ, le même jour. Réussie, elle dissipe les idées toutes faites, des plus inquiètes aux plus naïves, donne un vocabulaire commun et rend la décision suivante évidente. Ratée, elle laisse le souvenir d'un spectacle et rien sur les postes de travail.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver une date
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#deroule" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Lire le déroulé
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
              <Kicker>Les formats</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quelle conférence IA pour quel public ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Quatre situations reviennent : la plénière où toute l'entreprise est réunie, la séance réservée aux dirigeants, la convention d'un réseau ou d'une fédération, le webinaire qui relie plusieurs sites. La trame ne change pas ; les exemples, la profondeur et le registre s'ajustent à la salle.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Si la salle doit manipuler, le bon format devient l'<Link to="/atelier-intelligence-artificielle" style={aStyle}>atelier intelligence artificielle</Link> ou un <Link to="/formation-sprint-ia" style={aStyle}>Sprint IA de trois heures</Link> ; si le comité doit trancher, la <Link to="/formation-ia-comex" style={aStyle}>formation IA COMEX</Link>.
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
                  </div>
                ))}
                {/* Carte sombre : l'angle réglementaire, sans sur-vente */}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShieldCheck size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Une ligne dans votre registre AI Act</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Depuis le 27 juillet 2026 et sa réécriture par l'Omnibus, l'article 4 du règlement sur l'IA impose à l'employeur d'agir pour que ses salariés sachent manier les outils d'IA. Une conférence datée, avec émargement, en est une trace ; les équipes qui s'en servent chaque jour auront besoin d'une formation complémentaire, quoi qu'on vous dise.
                  </p>
                </div>
              </div>
              <p style={{ color: '#4B5563', fontSize: 14.5, lineHeight: 1.7, margin: '22px 0 0' }}>
                Exemple de séance pour décideurs : les dirigeants d'un groupe du packaging présent sur plusieurs continents ont suivi en 2026 une matinée en anglais sur les mots de l'IA, du modèle jusqu'à l'agent, les obligations européennes et le RGPD, puis ce que coûtent les agents, avant que le groupe étende Copilot à ses sites étrangers. Le détail figure dans l'<Link to="/etudes-de-cas-ia#industrie" style={aStyle}>étude de cas industrie</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE DÉROULÉ (ancre sombre, pivot) ── */}
      <section id="deroule" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le déroulé</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment se déroule une conférence IA de 90 minutes ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>En quatre temps : l'état des outils sans jargon, des démonstrations sur vos documents, les limites et les règles, puis trois essais à faire dans la semaine. Les démonstrations prennent un tiers de la durée, et c'est pendant ce tiers que la salle change d'avis.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
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
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Sur une heure, le plan se resserre autour de deux démonstrations et d'un passage plus bref sur les règles ; sur deux heures, il s'enrichit de démonstrations et d'un temps d'échange plus long. Si vous le décidez, la conférence ouvre ensuite une démarche d'<Link to="/acculturation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>acculturation IA</Link> sur un trimestre.
          </p>
        </div>
      </section>

      {/* ── LA PRÉPARATION (J-15 → J+7) ── */}
      <section id="preparation" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>La préparation</Kicker>
          <h2 style={h2Style}>
            Ce que nous vous demandons avant la conférence
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Peu de choses, mais à la bonne date : trente minutes de cadrage deux semaines avant, trois à cinq documents anonymisés une semaine avant, puis une synthèse la semaine suivante pour décider de la suite. Cette préparation sépare une conférence construite pour vous d'une intervention de salon.</strong>
          </p>

          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {PREPARATION.map((step, i) => (
              <div
                key={step.periode}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === PREPARATION.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 11.5, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif', textAlign: 'center', lineHeight: 1.1 }}>{step.periode.replace('Jour ', '')}</span>
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
            Une conférence peut se monter en moins de deux semaines quand l'agenda l'exige ; la qualité des démonstrations dépend alors des documents que vous parvenez à transmettre dans ce délai. Nous vous le disons dès le premier échange.
          </p>
        </div>
      </section>

      {/* ── LES ERREURS CLASSIQUES ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Les écueils</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Pourquoi tant de conférences IA ne changent rien
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Cinq causes reviennent : un spectacle de démonstrations hors sujet, un intervenant lié à un éditeur, une conférence que rien ne suit, un seul discours pour des publics différents, des règles passées sous silence. Aucune ne tient au budget ; toutes tiennent à la préparation.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 880 }}>
            Nous les observons depuis 2022, devant des directions comme devant des équipes de production, dans des usines, des réseaux de distribution, des cabinets ou des fédérations. Les <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas</Link> montrent ce que devient une intervention lorsqu'une démarche la prolonge.
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

      {/* ── QUI INTERVIENT (E-E-A-T) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>L'intervenant</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Un conférencier IA qui forme des équipes le reste de l'année
          </h2>

          <p style={answerStyle}>
            <strong>Une conférence sur l'IA gagne en crédit quand l'intervenant passe le reste de l'année à former des salariés. Mathias Nizan donne la plupart des conférences Masteria ; selon la ville, la langue ou la date, un formateur du réseau prend sa place, avec la même trame et les démonstrations préparées sur vos documents.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: Mic, title: 'Mathias Nizan, fondateur de Masteria', desc: "Il a fondé le cabinet à Lyon en 2022 et forme depuis des comités de direction, des managers et des équipes de terrain. Sur scène, il travaille en direct sur vos documents et répond aux questions qui dérangent." },
              { icon: Users, title: 'Le réseau de formateurs', desc: "Une vingtaine d'indépendants retenus pour leur pratique en entreprise, qui interviennent près de chez vous ou dans votre langue. Ils suivent la trame Masteria et utilisent les démonstrations préparées à partir de vos pièces. Le devis indique leur nom." },
              { icon: ShieldCheck, title: 'Ce que nous refusons', desc: "Les interventions financées par un éditeur, les promesses chiffrées de productivité, les démonstrations sur des cas que personne ne reconnaît. Nous montrons aussi l'outil quand il se trompe, et nous vous disons quand une conférence n'est pas le format qu'il vous faut." },
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
        </div>
      </section>

      {/* ── APRÈS LA CONFÉRENCE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Et après</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Et une fois la conférence passée ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Vous décidez, sur la base de la synthèse remise dans la semaine. Les options vont de ne rien faire pour l'instant à une démarche complète, en passant par une charte d'usage ou des ateliers par service. Nous ne faisons jamais d'une conférence la condition d'une autre commande.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: FileText, title: "Une charte d'usage", desc: "La suite la plus légère : une page qui liste les informations autorisées dans l'outil, celles qui n'y entrent jamais et les vérifications à faire sur une réponse. Elle s'écrit avec vous et prévient les maladresses de la semaine suivante.", href: '/charte-ia-entreprise', cta: "Lire la page sur la charte IA" },
              { icon: GraduationCap, title: 'Des ateliers par service', desc: "Pour les services dont l'IA deviendra un outil quotidien : des groupes de douze, sur leurs propres documents, pendant trois heures ou une journée, avec attestation. Une demande de prise en charge auprès de l'OPCO reste possible.", href: '/atelier-intelligence-artificielle', cta: 'Voir les ateliers IA' },
              { icon: MessagesSquare, title: "Une démarche d'acculturation", desc: "Quand toute l'organisation doit monter en compétence : ateliers par vagues, formations métier, sessions pour les managers, référents et suivi des usages. La conférence en marque le coup d'envoi.", href: '/acculturation-ia', cta: "Découvrir l'acculturation IA" },
            ].map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: 14 }}>
                    <IconTile icon={Icon} />
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{card.desc}</p>
                  <Link to={card.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700 }}>
                    {card.cta}
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </div>
              )
            })}
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
              <Kicker>Prix et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Un forfait, et souvent une prise en charge par l'OPCO
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Nous facturons la conférence au forfait, sur une base d'une demi-journée d'intervention, préparation des démonstrations comprise ; le devis vous parvient dans les 24 heures qui suivent le cadrage. Lorsqu'elle est organisée comme une action de formation courte (objectifs, contenu, émargement, attestation), elle peut s'ajouter aux formations prévues dans l'année et être présentée à l'OPCO, qui fixe sa participation. Masteria, certifiée Qualiopi, monte la demande avec vous. Le simulateur <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> donne le nom de votre opérateur à partir de votre branche.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Forfait sur une demi-journée, préparation incluse',
                  'Format de formation courte possible',
                  'Financement à confirmer avec votre OPCO',
                  'Aucun frais de déplacement en ligne',
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
                Conférence IA : ce que les organisateurs nous demandent
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre événement a une contrainte particulière ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Parlons-en
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
            Prolonger la conférence
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            La conférence lance le mouvement ; ces formats l'installent dans le travail, alignent la direction et fixent les règles.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Sensibilisation IA', href: '/sensibilisation-ia', tag: 'Premier contact', desc: "Conférence, Sprint ou programme par vagues : ce qu'une première séance doit contenir." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Sur un trimestre', desc: "La démarche complète dont la conférence est souvent le coup d'envoi." },
              { label: 'Atelier intelligence artificielle', href: '/atelier-intelligence-artificielle', tag: 'Pratiquer', desc: "Les ateliers où chacun travaille ses propres documents, en groupe de douze." },
              { label: 'Sprint IA', href: '/formation-sprint-ia', tag: 'Trois heures', desc: "Les séances courtes où la salle manipule, en présentiel ou à distance." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Comité exécutif', desc: "Une matinée pour que le comité arrête sa feuille de route." },
              { label: 'Formation IA dirigeants', href: '/formation-ia-dirigeants', tag: 'Direction', desc: "Le programme des dirigeants : décider, budgéter, piloter l'adoption." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Catalogue', desc: "Les formations par métier qui prennent le relais de la conférence." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Règles', desc: "La page de règles à rédiger juste après l'intervention." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Réglementation', desc: "Le texte européen en détail, pour ceux qui portent la conformité." },
              { label: 'Quel outil IA choisir', href: '/quel-outil-ia', tag: 'Choix de l\'outil', desc: "Le comparateur que l'on consulte souvent après une conférence." },
              { label: 'Salons IA 2026-2027', href: '/salons-ia', tag: 'Agenda', desc: "Le calendrier des salons data et IA de la saison, dates vérifiées." },
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
                    Aller à la page
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
            Mathias Nizan a écrit cette page à partir des conférences qu'il donne depuis la création de Masteria, et l'a mise à jour le 7 octobre 2026. Pour connaître son parcours avant de l'inviter, consultez <Link to="/mathias-nizan" style={aStyle}>sa page personnelle</Link>.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Conférence IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Donnez à toute la salle le même point de départ
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Indiquez-nous le public attendu, la date et le cadre de l'événement : plénière, convention, comité de direction ou diffusion en ligne. Sous 24 heures, nous revenons vers vous avec le format conseillé, le nom de l'intervenant et un devis qui précise ce que l'OPCO pourrait financer.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander une conférence IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Interventions possibles en anglais · sur scène ou en ligne · cabinet cité dans Les Échos
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (propres à la page) ── */}
      <section aria-labelledby="sources-conference" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-conference" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>Références citées</h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>Les textes européens évoqués dans la conférence, un document public du ministère de l'Économie et la certification de Masteria.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {[
              ...PAGE_CITATIONS,
              { name: "travail-emploi.gouv.fr : la marque Qualiopi et ce qu'elle garantit", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
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
