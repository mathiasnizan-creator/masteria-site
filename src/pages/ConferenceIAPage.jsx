import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Mic, Presentation, Users, GraduationCap, MapPin, Check, Video,
  Sparkles, MessagesSquare, ShieldCheck, Landmark, BarChart3, FileText,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « conférence IA » (slug /conference-ia) — côté FORMATION.
 * Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 : « conférence ia »
 * (260/mois, KD 14, CPC 4,19 $, intention commerciale), aucune page dédiée
 * jusque-là ; le format n'existait que comme carte de /acculturation-ia.
 *
 * RÉPARTITION D'INTENTIONS :
 *  - /conference-ia = CETTE page : le format « une session » (plénière, séminaire,
 *    COMEX, convention, webinaire interne), son déroulé, sa préparation ;
 *  - /acculturation-ia = la démarche d'ensemble dans laquelle la conférence
 *    s'inscrit (vagues, parcours, référents) ;
 *  - /formation-ia-comex = le produit exécutif d'une matinée (pas une conférence) ;
 *  - /formation-sprint-ia-sensibilisation = l'atelier de 3 h avec manipulation.
 *
 * INTÉGRITÉ : multi-outils, indépendance éditeurs, aucun client nommé, aucun
 * chiffre de résultat inventé, aucun prix affiché (forfait à la demi-journée
 * d'intervention, devis après cadrage). Littératie IA = obligation de MOYENS
 * (art. 4, précisée juillet 2026) : une conférence est un premier acte, pas une
 * conformité. Jamais Bpifrance sur le site.
 * Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'conference-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conférence IA en entreprise : plénière, séminaire, COMEX | Masteria"
const META_DESC = "Conférence IA en entreprise : une session de 1 à 2 heures pour faire comprendre l'intelligence artificielle générative à vos équipes, avec des démonstrations sur vos cas réels. Plénière, séminaire, COMEX, convention. Devis sous 24 h."
const KEYWORDS = "conférence ia, conférence intelligence artificielle, conférence ia entreprise, conférencier ia, conférence ia séminaire, conférence ia comex, intervenant ia séminaire, keynote ia entreprise, conférence acculturation ia"

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
  { icon: Presentation, label: '1 h à 2 h · de 20 à plusieurs centaines de personnes' },
  { icon: Sparkles, label: 'Démonstrations en direct sur vos cas' },
  { icon: Users, label: 'COMEX, plénière, séminaire, convention' },
  { icon: MapPin, label: 'Sur site en France, Suisse, Belgique, ou en visio' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Format', value: "Une session de 1 h à 2 h, en plénière, en séminaire, en COMEX ou en convention ; en visio pour les organisations multi-sites" },
  { label: 'Public', value: "De vingt personnes à plusieurs centaines : dirigeants, managers, équipes terrain, réseau de franchisés ou d'adhérents" },
  { label: 'Contenu', value: "Ce que l'IA générative fait vraiment, ce qu'elle ne fait pas, démonstrations sur vos documents, cadre d'usage, questions ouvertes" },
  { label: 'Outils', value: "Multi-outils et indépendant des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, sur ceux que vous avez déjà" },
  { label: 'Préparation', value: "Un cadrage de 30 minutes et trois documents réels, anonymisés : la conférence se construit dessus" },
  { label: 'Et après', value: "Trois usages à tester la semaine suivante, puis des ateliers ou des parcours par métier si vous le décidez" },
]

/* ───────── Les formats (4 cartes) ───────── */

const FORMATS = [
  {
    icon: Presentation,
    title: "La plénière de séminaire d'entreprise",
    desc: "Le format le plus demandé : une heure à une heure et demie devant toute l'entreprise, au milieu d'un séminaire annuel ou d'une convention interne. Tout le monde entend la même chose, le langage commun s'installe, les idées reçues tombent devant une démonstration sur vos propres documents.",
  },
  {
    icon: BarChart3,
    title: "La conférence COMEX ou conseil d'administration",
    desc: "Une session courte pour les décideurs : capacités réelles, limites, risques, ce que font les concurrents, ce qu'il faut décider en premier. Sans jargon et sans démonstration de gadgets. Quand le comité veut aller plus loin, la formation IA COMEX prend le relais sur une matinée.",
  },
  {
    icon: Users,
    title: 'La convention commerciale ou de réseau',
    desc: "Fédérations, réseaux de franchisés, clubs de dirigeants, associations professionnelles : une conférence adaptée au métier de la salle, avec des démonstrations sur les situations que vos membres vivent. Le format qui donne envie de se former, sans vendre de licence.",
  },
  {
    icon: Video,
    title: 'Le webinaire interne multi-sites',
    desc: "Pour les organisations réparties sur plusieurs sites ou pays : une conférence en visio, enregistrée si vous le souhaitez, avec des questions modérées. Le contenu reste le même, la logistique disparaît. Elle sert souvent de lancement avant des ateliers en présentiel par site.",
  },
]

/* ───────── Le déroulé (4 temps, ancre sombre) ───────── */

const DEROULE = [
  {
    num: '01',
    title: "Ouvrir : l'état de l'art sans jargon",
    desc: "Quinze minutes pour poser ce qu'est l'IA générative en 2026, ce qui a changé en deux ans, ce que font les outils que vos équipes ont déjà sous la main. Pas de théorie sur les réseaux de neurones : ce qui compte, c'est ce que cela change dans une journée de travail.",
  },
  {
    num: '02',
    title: 'Montrer : des démonstrations sur vos cas',
    desc: "Le cœur de la conférence, trente minutes. Un compte rendu, un mail difficile, un tableau, un appel d'offres, un document technique : les vôtres, anonymisés. La salle voit l'outil produire, se tromper, être corrigé. C'est là que les idées reçues tombent, dans les deux sens.",
  },
  {
    num: '03',
    title: 'Cadrer : limites, risques et règles du jeu',
    desc: "Vingt minutes sur ce que l'IA ne sait pas faire, les erreurs qu'elle produit avec assurance, les données qu'on ne lui confie pas, et le cadre d'usage que l'entreprise pose. Les questions qui fâchent y ont leur place : remplacement, surveillance, fiabilité.",
  },
  {
    num: '04',
    title: 'Conclure : trois usages à tester lundi',
    desc: "Les questions de la salle, puis une conclusion opérationnelle : trois usages concrets que chacun peut essayer la semaine suivante, sur l'outil déjà disponible dans l'entreprise, avec la règle à respecter. C'est ce qui distingue une conférence d'un divertissement.",
  },
]

/* ───────── La préparation (timeline J-15 → J+7) ───────── */

const PREPARATION = [
  {
    periode: 'J-15',
    title: 'Cadrage de 30 minutes',
    desc: "Un échange avec le commanditaire : le public, ce qu'il sait déjà, les outils déployés ou interdits, les sujets sensibles, le message que la direction veut faire passer, la place de la conférence dans votre événement. C'est là que se décide le ton, du très débutant au public averti.",
  },
  {
    periode: 'J-7',
    title: 'Vos documents, anonymisés',
    desc: "Trois à cinq documents représentatifs du travail réel : un compte rendu, un mail, un tableau, une procédure, une offre. Vous les anonymisez, nous construisons les démonstrations dessus. Une conférence sur des exemples génériques est une conférence dont personne ne se souvient.",
  },
  {
    periode: 'Jour J',
    title: 'La conférence',
    desc: "Une heure à deux heures selon le format retenu, avec les démonstrations en direct, les questions de la salle et la conclusion en trois usages. En présentiel, nous arrivons en avance pour tester l'écran et le réseau ; en visio, un test technique se fait la veille.",
  },
  {
    periode: 'J+7',
    title: 'La suite, décidée avec vous',
    desc: "Un retour à chaud : les questions posées, les usages qui ont accroché, les résistances entendues. Puis la décision de la suite : rien, des ateliers par métier, un programme d'acculturation, une formation COMEX. La conférence a fait son travail si cette décision est facile à prendre.",
  },
]

/* ───────── Les erreurs qui font rater une conférence IA (citable) ───────── */

const ERREURS = [
  {
    title: 'Le show de démonstrations génériques',
    desc: "Une heure d'images générées, de poèmes et de vidéos spectaculaires : la salle applaudit et ne change rien le lendemain. Une conférence utile montre l'IA sur le travail réel des participants, y compris quand elle se trompe.",
  },
  {
    title: 'Le conférencier qui vend son outil',
    desc: "Un intervenant sponsorisé par un éditeur présente une solution, pas un sujet. Vos équipes le sentent et se ferment. Nous sommes indépendants des éditeurs et nous démontrons sur les outils que vous avez déjà, ou sur plusieurs, pour comparer.",
  },
  {
    title: "L'événement sans suite",
    desc: "La conférence lance ; elle ne forme pas. Sans ateliers, parcours ou référents derrière, l'enthousiasme retombe en quinze jours et le sujet passe pour une mode. La suite se décide avant la conférence, même si elle reste modeste.",
  },
  {
    title: 'Le public mélangé sans adaptation',
    desc: "Le COMEX, les managers et les équipes terrain n'ont ni les mêmes questions ni le même niveau de départ. Une plénière commune est possible, à condition d'adresser chaque public par des exemples qui lui parlent, et de ne pas parler stratégie à ceux qui veulent savoir quoi faire lundi.",
  },
  {
    title: 'Le cadre oublié',
    desc: "Une conférence qui donne envie sans dire ce qu'on ne fait pas produit, la semaine suivante, des données clients collées dans un outil grand public. Le cadre d'usage fait partie de la conférence, en vingt minutes, sans jargon juridique.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une conférence IA en entreprise ?",
    a: "C'est une session d'une à deux heures, devant un public large, qui fait comprendre ce que l'intelligence artificielle générative change dans le travail : ce que les outils font vraiment, ce qu'ils ne font pas, comment les utiliser avec un regard critique et dans quel cadre. Elle se tient en plénière de séminaire, en comité de direction, en convention de réseau ou en webinaire interne. Chez Masteria, elle repose sur des démonstrations en direct construites sur vos documents, et se conclut par trois usages concrets que chacun peut tester la semaine suivante. Elle ouvre une démarche ; elle ne remplace pas une formation.",
  },
  {
    q: "Combien de temps dure une conférence IA ?",
    a: "Entre une heure et deux heures. Le format d'une heure convient à une plénière de séminaire où la conférence est l'un des temps de la journée ; il tient l'état de l'art, deux ou trois démonstrations et les questions. Le format d'une heure et demie à deux heures permet davantage de démonstrations sur vos cas, un vrai temps sur le cadre d'usage et une séquence de questions plus longue. Au-delà de deux heures, on n'est plus dans une conférence mais dans un atelier : c'est le Sprint IA Sensibilisation de trois heures, avec manipulation par les participants.",
  },
  {
    q: "Combien de personnes peut-on réunir ?",
    a: "De vingt personnes à plusieurs centaines. Le format conférence est justement celui qui n'a pas de jauge naturelle : une plénière de quatre cents personnes fonctionne, à condition d'adapter les exemples aux publics présents et de modérer les questions. En dessous de vingt personnes, un atelier avec manipulation est plus efficace qu'une conférence, et nous vous le dirons au cadrage. En visio, le nombre de participants est sans limite technique ; la qualité tient à la modération des questions.",
  },
  {
    q: "Conférence IA ou formation IA : quelle différence ?",
    a: "La conférence fait comprendre ; la formation fait faire. En conférence, les participants écoutent, voient des démonstrations, posent des questions et repartent avec des usages à tester. En formation, ils manipulent les outils sur leurs propres livrables, avec des exercices, des corrections et une évaluation des acquis, sur une demi-journée à deux jours. La conférence est le bon point d'entrée pour un public large ou une organisation qui démarre ; la formation prend le relais pour les équipes qui vont utiliser l'IA chaque jour. Les deux s'enchaînent dans une démarche d'acculturation.",
  },
  {
    q: "La conférence est-elle personnalisée à notre entreprise ?",
    a: "Oui, et c'est ce qui la distingue d'une keynote de salon. Le cadrage de trente minutes fixe le public, le niveau, les outils déployés et les sujets sensibles. Vous nous transmettez ensuite trois à cinq documents réels, anonymisés : un compte rendu, un mail, un tableau, une procédure, une offre. Les démonstrations se construisent dessus. La trame reste la même d'une entreprise à l'autre, parce qu'elle fonctionne ; le contenu des démonstrations et des exemples est le vôtre.",
  },
  {
    q: "Sur quels outils d'IA porte la conférence ?",
    a: "Sur ceux que vos équipes utiliseront réellement. Si votre entreprise a déployé Microsoft Copilot, Gemini, ChatGPT, Claude ou Mistral, les démonstrations se font dessus, dans la version que vos équipes ont. Si aucun outil n'est déployé, nous montrons plusieurs outils sur les mêmes cas, ce qui donne à la direction une base de comparaison honnête. Nous sommes indépendants des éditeurs : aucune conférence n'est sponsorisée, et aucune licence n'est vendue à la fin.",
  },
  {
    q: "Combien coûte une conférence IA ?",
    a: "Un forfait, établi sur une demi-journée d'intervention, préparation sur vos cas comprise : cadrage, construction des démonstrations, conférence et retour à chaud. Les frais de déplacement s'ajoutent en dehors de Lyon, au réel. Une conférence en visio n'en comporte pas. Le devis arrive sous 24 heures après le cadrage, qui est gratuit. Pour un cycle de plusieurs conférences (plusieurs sites, plusieurs publics), le forfait se dégrade à partir de la deuxième session.",
  },
  {
    q: "Une conférence IA est-elle finançable par l'OPCO ?",
    a: "Souvent, oui, quand elle est construite comme une action de formation courte : objectifs pédagogiques écrits, contenu structuré, feuille d'émargement, attestation de fin. Masteria est certifiée Qualiopi et prépare le dossier avec vous ; la prise en charge dépend ensuite de votre OPCO et de votre branche, nous le confirmons au cadrage. Une conférence de convention ouverte à un public externe, ou purement événementielle, relève d'une prestation classique, hors financement formation.",
  },
  {
    q: "Peut-on organiser la conférence en visio ?",
    a: "Oui. Le webinaire interne est le format naturel des organisations multi-sites ou multi-pays : mêmes contenus, mêmes démonstrations en direct, questions écrites et modérées. Nous faisons un test technique la veille avec votre équipe, et la session peut être enregistrée pour les absents, avec votre accord sur la diffusion. La visio perd un peu de l'énergie de la salle ; elle gagne en portée et en coût, sans déplacement.",
  },
  {
    q: "Qui intervient ?",
    a: "Mathias Nizan, fondateur de Masteria, anime la plupart des conférences : il forme des dirigeants, des managers et des équipes terrain à l'IA générative depuis 2022, dans l'industrie, l'énergie, l'immobilier, le juridique ou le secteur public. Selon le lieu, la langue et la date, un formateur du réseau Masteria peut intervenir : des indépendants expérimentés, sélectionnés sur leur pratique, qui animent avec la même trame et les mêmes démonstrations sur vos cas. Le nom de l'intervenant figure sur le devis.",
  },
  {
    q: "Que se passe-t-il après la conférence ?",
    a: "Un retour à chaud sous une semaine : les questions posées, les usages qui ont accroché, les résistances entendues. Puis une décision, la vôtre. Beaucoup d'organisations enchaînent sur des ateliers par métier ou un programme d'acculturation complet ; d'autres s'arrêtent à la conférence et à la charte d'usage, ce qui est cohérent quand l'outil n'est pas encore déployé. Nous ne conditionnons pas la conférence à une suite ; nous vous la recommandons quand elle est utile.",
  },
  {
    q: "Une conférence suffit-elle pour l'obligation de littératie IA du règlement européen ?",
    a: "Non, mais elle en est un premier acte documenté. L'article 4 du règlement européen sur l'IA demande, depuis le 2 février 2025, que les organisations soutiennent la montée en compétence des personnes qui utilisent des systèmes d'IA ; le paquet législatif de juillet 2026 a précisé qu'il s'agit d'une obligation de moyens. Une conférence avec objectifs, contenu et attestation montre que la démarche est engagée. Pour les équipes qui utilisent l'IA au quotidien, une formation par métier complète le dispositif. Personne ne peut vous promettre une conformité en une heure.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Conférence IA en entreprise (Masteria)',
  alternateName: "Conférence sur l'intelligence artificielle générative pour les entreprises",
  description: "Conférence IA en entreprise d'une à deux heures : état de l'art sans jargon, démonstrations en direct sur les documents de l'entreprise, cadre d'usage, questions ouvertes et trois usages à tester. En plénière, séminaire, COMEX, convention ou webinaire interne. Multi-outils (ChatGPT, Copilot, Claude, Gemini, Mistral), indépendant des éditeurs.",
  url: 'https://www.master-ia.fr/conference-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conference-ia#webpage' },
  serviceType: "Conférence et sensibilisation à l'intelligence artificielle",
  category: 'Formation professionnelle en intelligence artificielle',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: "Dirigeants, managers, équipes opérationnelles, réseaux professionnels",
    audienceType: 'B2B',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formats de conférence IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Plénière de séminaire d'entreprise", description: "Une heure à une heure et demie devant toute l'entreprise, démonstrations sur ses documents." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Conférence COMEX ou conseil d'administration", description: "Session courte pour les décideurs : capacités, limites, risques, décisions à prendre." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Convention commerciale ou de réseau', description: "Conférence adaptée au métier d'une fédération, d'un réseau de franchisés ou d'un club." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Webinaire interne multi-sites', description: "La conférence en visio pour les organisations réparties, enregistrable, questions modérées." } },
    ],
  },
}

/* Le déroulé en ItemList (séquence citable — GEO). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Le déroulé d'une conférence IA Masteria",
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
  name: 'Conférence IA : les termes',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Conférence IA',
      description: "Session d'une à deux heures devant un public large, qui fait comprendre ce que l'IA générative change dans le travail : capacités réelles, limites, démonstrations sur les cas de l'entreprise, cadre d'usage. Elle ouvre une démarche et ne remplace pas une formation.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Sensibilisation IA',
      description: "Premier temps d'une acculturation : conférences et sessions courtes qui démystifient l'IA, montrent des usages concrets et installent un langage commun, sans viser encore l'autonomie des participants.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Littératie IA',
      description: "Capacité à comprendre, utiliser et évaluer de façon critique les systèmes d'IA. L'article 4 du règlement européen sur l'IA en fait une obligation de moyens pour les organisations depuis le 2 février 2025.",
    },
  ],
}

/* Article : auteur (Mathias Nizan) et dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conference-ia#article',
  headline: "Conférence IA en entreprise : une session pour embarquer toute l'organisation",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conference-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Conférence', sameAs: 'https://fr.wikipedia.org/wiki/Conf%C3%A9rence' },
    { '@type': 'Thing', name: 'Littératie IA', description: "Capacité à comprendre, utiliser et évaluer de façon critique les systèmes d'IA (article 4 du règlement européen)" },
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
          { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle (article 4, littératie)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
          { name: "Acculturer à l'IA : partir du réel, expérimenter, partager — Mission innovation, economie.gouv.fr", url: 'https://www.economie.gouv.fr/mission-innovation/acculturer-lia-partir-du-reel-experimenter-partager' },
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
        dateModified="2026-09-04"
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
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>une session pour embarquer toute l'organisation</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une conférence IA fait comprendre à un public large ce que l'intelligence artificielle générative change dans le travail : <strong style={{ color: '#fff', fontWeight: 700 }}>ce que les outils font vraiment, ce qu'ils ne font pas, des démonstrations en direct sur vos documents, et le cadre pour s'en servir</strong>. En une à deux heures, en plénière, en COMEX, en convention ou en visio.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une conférence ne forme pas ; elle lance. Bien faite, elle fait tomber les idées reçues dans les deux sens, donne un langage commun à l'entreprise et rend la suite facile à décider. Mal faite, c'est un spectacle de démonstrations dont personne ne se souvient le lundi.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander une conférence
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#deroule" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le déroulé
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
                <strong>Quatre formats couvrent les demandes : la plénière de séminaire pour embarquer toute l'entreprise, la conférence COMEX pour les décideurs, la convention de réseau pour une fédération ou des franchisés, et le webinaire interne pour les organisations réparties. La trame est commune ; les exemples, le niveau et le ton changent.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Quand la salle doit manipuler, le format bascule vers l'atelier de trois heures du <Link to="/formation-sprint-ia-sensibilisation" style={aStyle}>Sprint IA Sensibilisation</Link> ; quand le comité veut décider, vers la <Link to="/formation-ia-comex" style={aStyle}>formation IA COMEX</Link>.
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
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Le cadre : un premier acte de littératie IA</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Depuis février 2025, l'article 4 du règlement européen demande aux organisations de soutenir la montée en compétence IA de leurs équipes, une obligation de moyens précisée en juillet 2026. Une conférence documentée en est le premier acte ; elle ne suffit pas seule, et personne ne devrait vous dire le contraire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE DÉROULÉ (ancre sombre — pivot) ── */}
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
            <strong style={{ color: '#fff' }}>Quatre temps : ouvrir sur l'état de l'art sans jargon, montrer l'IA sur vos documents, cadrer les limites et les règles du jeu, conclure par trois usages à tester la semaine suivante. Les démonstrations occupent le tiers du temps ; c'est là que la salle bascule.</strong>
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
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            En une heure, le déroulé se resserre sur deux démonstrations et un cadre plus court ; en deux heures, il gagne des démonstrations et une séquence de questions plus longue. La conférence s'inscrit ensuite, si vous le décidez, dans une démarche d'<Link to="/acculturation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>acculturation IA</Link>.
          </p>
        </div>
      </section>

      {/* ── LA PRÉPARATION (timeline J-15 → J+7) ── */}
      <section id="preparation" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>La préparation</Kicker>
          <h2 style={h2Style}>
            Ce que nous vous demandons avant la conférence
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Peu de choses, mais les bonnes : trente minutes de cadrage deux semaines avant, trois à cinq documents réels anonymisés une semaine avant, et un retour à chaud la semaine suivante pour décider de la suite. Une conférence construite sur vos cas demande cette préparation ; c'est elle qui fait la différence avec une keynote de salon.</strong>
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
            Une conférence peut se tenir plus vite quand l'agenda l'impose ; la qualité des démonstrations dépend alors des documents que vous pouvez transmettre dans le délai. Nous le disons au cadrage, qui est gratuit.
          </p>
        </div>
      </section>

      {/* ── LES ERREURS CLASSIQUES (citable + E-E-A-T terrain) ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les cinq erreurs qui font rater une conférence IA
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Cinq erreurs reviennent dans les conférences IA qui ne changent rien : le show de démonstrations génériques, le conférencier qui vend son outil, l'événement sans suite, le public mélangé sans adaptation et le cadre oublié. Aucune n'est une question de budget ; toutes sont une question de préparation.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 880 }}>
            Ce sont des schémas que nous observons depuis 2022, en formant plus de 1 500 professionnels du COMEX aux équipes terrain, dans l'industrie, l'énergie, l'immobilier, le juridique ou le secteur public. Nos <Link to="/etudes-de-cas-ia" style={aStyle}>études de cas</Link> montrent ce que produit une conférence suivie d'une vraie démarche.
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
          <Kicker>Qui intervient</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Un conférencier IA qui forme des équipes toute l'année
          </h2>

          <p style={answerStyle}>
            <strong>Une conférence IA est crédible quand l'intervenant fait le travail le reste de l'année. Mathias Nizan anime la plupart des conférences Masteria et forme des dirigeants, des managers et des équipes terrain depuis 2022 ; selon le lieu, la langue et la date, un formateur du réseau Masteria intervient avec la même trame et les mêmes démonstrations sur vos cas.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: Mic, title: 'Mathias Nizan, fondateur de Masteria', desc: "Formateur et consultant IA depuis 2022, il a formé plus de 1 500 professionnels du comité exécutif aux équipes terrain, dans l'industrie, l'énergie, l'immobilier, le juridique ou le secteur public. Il démontre en direct, sur vos documents, et répond aux questions qui fâchent." },
              { icon: Users, title: 'Le réseau de formateurs Masteria', desc: "Des indépendants expérimentés, sélectionnés sur leur pratique en entreprise, qui interviennent près de chez vous ou dans votre langue. Ils animent avec la trame Masteria et les démonstrations préparées sur vos cas. Le nom de l'intervenant figure sur le devis." },
              { icon: ShieldCheck, title: 'Ce que nous refusons', desc: "Les conférences sponsorisées par un éditeur, les promesses chiffrées de productivité, les démonstrations sur des exemples que personne ne reconnaît. Nous sommes indépendants des éditeurs, nous montrons l'IA quand elle se trompe, et nous disons quand une conférence n'est pas le bon format." },
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
            Que se passe-t-il après la conférence ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Une décision, la vôtre. La conférence a fait son travail si la suite est facile à choisir : rien pour l'instant, une charte d'usage, des ateliers par métier, ou un programme d'acculturation complet. Nous ne conditionnons pas la conférence à une suite ; nous la recommandons quand elle est utile.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: FileText, title: "La charte d'usage", desc: "Le minimum après une conférence : ce qu'on peut confier aux outils, ce qui reste interdit, comment vérifier une réponse. Une page, écrite avec vous, qui évite les accidents de la semaine suivante.", href: '/charte-ia-entreprise', cta: "Voir la charte IA d'entreprise" },
              { icon: GraduationCap, title: 'Les ateliers et parcours par métier', desc: "Pour les équipes qui vont utiliser l'IA chaque jour : des sessions en petits groupes, sur leurs livrables réels, avec évaluation des acquis. Certifiées Qualiopi, finançables par votre OPCO.", href: '/formation-intelligence-artificielle', cta: 'Voir les formations par métier' },
              { icon: MessagesSquare, title: "La démarche d'acculturation", desc: "Quand toute l'organisation doit monter en compétence : vagues de sessions, programme management, référents internes, mesure des usages. La conférence en est le lancement.", href: '/acculturation-ia', cta: "Voir l'acculturation IA" },
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
                Un forfait, et souvent une prise en charge OPCO
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La conférence se chiffre au forfait, sur une demi-journée d'intervention, préparation sur vos cas comprise ; le devis arrive sous 24 heures après le cadrage. Construite comme une action de formation courte (objectifs, contenu, émargement, attestation), elle peut être prise en charge par votre OPCO dans le plan de développement des compétences : Masteria est certifiée Qualiopi et prépare le dossier avec vous. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> vous répond en deux minutes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Forfait à la demi-journée, préparation comprise',
                  'Action de formation courte certifiée Qualiopi',
                  'Prise en charge OPCO confirmée au cadrage',
                  'Devis sous 24 h après cadrage gratuit',
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
                Conférence IA : les questions fréquentes
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
            La conférence ouvre ; les formats qui suivent installent les usages, alignent la direction et posent le cadre.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Sensibilisation IA', href: '/sensibilisation-ia', tag: 'La démarche courte', desc: "Conférence, atelier de 3 h ou programme par vagues : ce que contient une sensibilisation qui change quelque chose." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'La démarche', desc: "Conférence, ateliers, parcours par métier, référents : la montée en compétence de toute l'organisation." },
              { label: 'Ateliers IA', href: '/atelier-intelligence-artificielle', tag: 'Pratiquer', desc: "Quand la salle doit manipuler : six ateliers de 3 h à une journée, douze personnes, sur leurs propres documents." },
              { label: 'Sprint IA Sensibilisation', href: '/formation-sprint-ia-sensibilisation', tag: 'Atelier 3 h', desc: "Quand la salle doit manipuler : trois heures, en petits groupes ou en webinaire, avec prompts à emporter." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Comité exécutif', desc: "La matinée exécutive qui aligne le comité : état de l'art, arbitrages, feuille de route." },
              { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants', tag: 'Dirigeants', desc: "Le programme dédié aux directions : lecture stratégique, cadre, pilotage de la transformation." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Catalogue', desc: "Les parcours par métier qui prolongent la conférence : assistanat, commerce, RH, finance, marketing." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le cadre d'usage à poser après la conférence : ce qu'on peut confier aux outils, et comment." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Conformité', desc: "Pour aller au fond du règlement européen : obligations réelles, calendrier, littératie IA." },
              { label: 'Quel outil IA choisir', href: '/quel-outil-ia', tag: 'Outils', desc: "ChatGPT, Copilot, Claude, Gemini ou Mistral : le comparatif qui suit souvent une conférence." },
              { label: 'Salons IA 2026-2027', href: '/salons-ia', tag: 'Agenda', desc: "Les salons data, IA et industrie de la saison, dates vérifiées, et la conférence de retour de salon." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Conférence IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Lançons votre démarche IA par une conférence
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous le public, la date et le cadre de votre événement : plénière, séminaire, COMEX, convention ou visio. Nous revenons vers vous sous 24 heures avec le format recommandé, le nom de l'intervenant et le devis, prise en charge OPCO comprise quand elle s'applique.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander une conférence IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Certifié Qualiopi · Lyon, France, Suisse, Belgique, ou en visio
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
