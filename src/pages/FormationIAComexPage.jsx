import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Briefcase, Building2, Check, Globe, GraduationCap, Landmark,
  Layers, ListChecks, Scale, ShieldCheck, Target, Users, Workflow, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation IA COMEX » (slug /formation-ia-comex), côté
 * FORMATION (OPCO/Qualiopi visibles, avec la nuance conférence honnête).
 * Cible (Semrush fr, relevé 2026-08-28) : « formation ia comex » (40/mois,
 * KD n/a = SERP quasi vide), « ia comex » (10) et « training ia comex » (10,
 * capté par l'angle « en français ou en anglais » + FAQ anglais).
 *
 * RÉPARTITION D'INTENTIONS (anti-cannibalisation, tranchée le 2026-08-28) :
 *  - /formation-ia-comex = CETTE page : la session exécutive COLLECTIVE d'un
 *    comité exécutif / CODIR (alignement, arbitrages, feuille de route, FR/EN) ;
 *  - /formation-ia-dirigeants = LA journée stratégique du dirigeant et de son
 *    CODIR (son metaTitle a été recentré « décider et piloter », COMEX retiré) ;
 *  - /formation-ia-management = les managers opérationnels ;
 *  - /acculturation-ia = la démarche d'ensemble qui suit la session COMEX.
 * Le tableau « quel programme pour qui » de cette page verrouille la partition.
 *
 * INTÉGRITÉ : preuve = uniquement les faits publiés sur /etudes-de-cas-ia
 * (groupe industriel international du packaging : déploiement commencé par le
 * COMEX et les pilotes, ~30 personnes au premier palier). Tarif exécutif
 * (tranché le 2026-09-01) : 1 980 € HT la session de 3 h ou la demi-journée,
 * 3 960 € HT la journée complète, pour l'ensemble du comité ; grille
 * distincte de l'intra équipes (1 980 €/jour sur /formation-ia-entreprise et
 * /formation-ia-dirigeants). Animation : Mathias Nizan OU un formateur senior
 * du réseau (ne jamais promettre le fondateur systématiquement).
 * Nuance financement honnête : action de formation = finançable, conférence
 * seule = budget de fonctionnement. Entités Wikipédia vérifiées (curl 200)
 * le 2026-08-28.
 */

const SLUG = 'formation-ia-comex'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation IA COMEX : embarquer votre comité exécutif | Masteria'
const META_DESC = "Formation IA COMEX : la session exécutive qui aligne votre comité sur l'IA (état de l'art, cas concrets, arbitrages, feuille de route). En français ou en anglais."
const KEYWORDS = "formation ia comex, ia comex, training ia comex, formation ia comité exécutif, formation ia codir, conférence ia comex, acculturation ia comex"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

const thStyle = { textAlign: 'left', padding: '12px 16px', fontSize: 12.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6B7280', borderBottom: '2px solid #E5E7EB', fontFamily: 'Nunito, sans-serif' }
const tdStyle = { padding: '14px 16px', fontSize: 14.5, color: '#374151', lineHeight: 1.6, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }

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
  { icon: Briefcase, label: 'Conçue pour COMEX, CODIR et direction générale' },
  { icon: Globe, label: 'En français ou en anglais' },
  { icon: Building2, label: 'Dans vos locaux ou hors site' },
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Format', value: "Session de 3 h, demi-journée ou journée complète ; 2 jours possibles avec ateliers d'approfondissement" },
  { label: 'Pour qui', value: "Comités exécutifs, comités de direction et directions générales de PME, d'ETI et de groupes" },
  { label: 'Langue', value: "En français ou en anglais, pour les comités internationaux" },
  { label: 'Contenu', value: "État de l'art sans jargon (du modèle à l'agent), cas concrets de votre secteur, arbitrages et feuille de route" },
  { label: 'Animation', value: "Mathias Nizan, fondateur de Masteria, ou un formateur senior du réseau, choisi selon votre secteur et votre calendrier" },
  { label: 'Tarif', value: "1 980 € HT la session de 3 h ou la demi-journée, 3 960 € HT la journée complète, pour l'ensemble du comité ; formats action de formation certifiés Qualiopi et finançables OPCO ; devis sous 24 h" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi le COMEX d\'abord'],
  ['#deroule', 'Le déroulé'],
  ['#formats', 'Les formats'],
  ['#themes', 'Les thèmes'],
  ['#quel-programme', 'COMEX, dirigeants ou managers ?'],
  ['#tarif', 'Tarif'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi commencer par le COMEX (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Target,
    title: 'Les arbitrages sont à ce niveau',
    desc: "Outils retenus, périmètre de données, budget formation, gouvernance : autant de décisions transverses qu'aucune direction ne peut trancher seule. La session les met sur la table, avec de quoi décider.",
  },
  {
    icon: Users,
    title: "L'exemple vient d'en haut",
    desc: "Les équipes adoptent l'IA quand leur direction la pratique et en parle précisément. Un comité qui a manipulé, vu les limites et posé le cadre donne le ton de tout le déploiement.",
  },
  {
    icon: Scale,
    title: 'La littératie IA concerne aussi les dirigeants',
    desc: "L'article 4 du règlement européen demande de soutenir la montée en compétence de toute personne qui utilise l'IA, comité exécutif compris. Une session documentée y contribue, sans dramatisation.",
  },
  {
    icon: Layers,
    title: "Éviter l'ordre dispersé",
    desc: "Sans position commune, chaque direction expérimente dans son coin : outils redondants, données exposées, énergie perdue. Une position de comité, même prudente, vaut mieux que six positions implicites.",
  },
]

/* ───────── Le déroulé (5 étapes) ───────── */

const DEROULE = [
  {
    num: '01',
    title: 'Cadrage avec la direction générale',
    desc: "Un échange préalable : votre secteur, vos enjeux, ce que le comité sait déjà, les décisions à instruire. La session se prépare sur vos cas, jamais sur un support générique. Ce cadrage est gratuit.",
  },
  {
    num: '02',
    title: "L'état de l'art, sans jargon",
    desc: "Ce que les modèles font réellement en 2026, du modèle à l'agent : capacités, limites, ce qui relève du réel et ce qui relève du récit. Démonstrations en direct plutôt que slides.",
  },
  {
    num: '03',
    title: 'Les cas de votre secteur',
    desc: "Ce que des organisations comparables ont déployé, ce que ça a demandé, ce que ça a produit. Selon le format, le comité manipule lui-même sur des cas proches des siens.",
  },
  {
    num: '04',
    title: 'Les arbitrages',
    desc: "Données, outils, faire ou faire faire, organisation, budget, risques : chaque sujet est instruit avec une grille de décision. Le comité tranche en séance ce qui peut l'être.",
  },
  {
    num: '05',
    title: 'La feuille de route et la suite',
    desc: "Un relevé de décisions et une feuille de route : premiers chantiers, équipes pilotes, cadre d'usage, calendrier. La suite (acculturation des équipes, formations métier) s'enclenche derrière.",
  },
]

/* ───────── Les formats (3 cartes) ───────── */

const FORMATS = [
  {
    icon: Zap,
    title: 'La session exécutive de 3 h',
    desc: "Le format le plus demandé : état de l'art, démonstrations en direct, discussion d'arbitrages. Assez court pour tenir dans un ordre du jour de comité, assez dense pour changer le niveau de la conversation.",
  },
  {
    icon: Layers,
    title: 'La demi-journée avec ateliers',
    desc: "L'état de l'art, puis un passage en manipulation : le comité teste les outils sur des cas réels de l'entreprise. Le niveau de conviction change quand chacun a produit quelque chose lui-même.",
  },
  {
    icon: ListChecks,
    title: 'La journée feuille de route',
    desc: "Le format complet : état de l'art, manipulation, puis travail d'arbitrage structuré jusqu'à la feuille de route et au relevé de décisions. Extensible à 2 jours avec des ateliers d'approfondissement.",
  },
]

/* ───────── Les thèmes traités (6 cartes) ───────── */

const THEMES = [
  { icon: Bot, title: "Du modèle à l'agent", desc: "Assistants, agents, automatisation : ce que chaque niveau permet, démontré en direct, et ce que ça change pour vos processus." },
  { icon: ShieldCheck, title: 'Données, RGPD, sécurité', desc: "Ce qui peut être confié aux outils et sous quelles conditions : offres entreprise, périmètres de données, points de vigilance réels." },
  { icon: Scale, title: 'AI Act et gouvernance', desc: "Le calendrier réel du règlement européen, l'obligation de littératie, la charte d'usage : de quoi cadrer sans sur-réagir." },
  { icon: Workflow, title: 'Impact sur les métiers', desc: "Fonction par fonction, ce que l'IA change dans les 18 prochains mois : où sont les gains rapides, où sont les illusions." },
  { icon: Target, title: 'Faire ou faire faire', desc: "Outils du marché, développements sur mesure, ou les deux : une grille pour décider quoi acheter, quoi construire, quoi attendre." },
  { icon: ListChecks, title: 'La feuille de route', desc: "Prioriser les chantiers, choisir les équipes pilotes, séquencer formation et déploiement : la sortie concrète de la session." },
]

/* ───────── Quel programme pour qui (tableau de partition) ───────── */

const QUEL_PROGRAMME = [
  {
    vous: 'Un comité exécutif ou un CODIR à aligner collectivement',
    programme: 'Formation IA COMEX (cette page)',
    href: null,
    couvre: "Session exécutive collective : état de l'art, arbitrages, feuille de route ; en français ou en anglais",
  },
  {
    vous: 'Un dirigeant qui veut décider et piloter pour son entreprise',
    programme: 'Formation IA dirigeants',
    href: '/formation-ia-dirigeants',
    couvre: "Une journée stratégique : grille de lecture, ROI, gouvernance, feuille de route à 90 jours",
  },
  {
    vous: "Des managers qui pilotent des équipes utilisatrices de l'IA",
    programme: 'Formation IA management',
    href: '/formation-ia-management',
    couvre: "Le programme management : cadrer les usages de l'équipe, faire adopter, suivre les résultats",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une formation IA COMEX ?",
    a: "C'est une session exécutive conçue pour un comité de direction : en 3 heures à une journée, elle met tout le comité au même niveau sur ce que l'IA fait réellement (du modèle à l'agent), le confronte à des cas concrets de son secteur et débouche sur des arbitrages : données, outils, organisation, budget, feuille de route. Chez Masteria, elle est animée par un formateur senior, en français ou en anglais, dans vos locaux ou hors site. Les formats structurés en action de formation sont certifiés Qualiopi.",
  },
  {
    q: 'Quelle différence avec la formation IA pour dirigeants ?',
    a: "La formation IA COMEX est une session collective d'alignement et d'arbitrage : le comité entier partage le même état de l'art puis tranche ensemble. La formation IA pour dirigeants est une journée stratégique orientée décision, pensée pour le dirigeant et son CODIR, notamment en PME et ETI. Les deux se recouvrent en partie ; le cadrage, gratuit, oriente vers le bon format selon la taille de l'organisation et ce que vous voulez en sortir.",
  },
  {
    q: 'Combien de temps faut-il mobiliser le comité ?',
    a: "De 3 heures à une journée. La session de 3 h tient dans un ordre du jour de comité et suffit pour l'état de l'art et les premiers arbitrages. La demi-journée ajoute la manipulation des outils ; la journée complète va jusqu'à la feuille de route écrite. Les ateliers d'approfondissement, quand ils sont demandés, se programment sur un second jour, souvent quelques semaines plus tard.",
  },
  {
    q: 'Faut-il un bagage technique pour suivre ?',
    a: "Aucun. La session est conçue pour des décideurs : zéro jargon inutile, des démonstrations en direct plutôt que des slides, et des grilles de décision plutôt que des concepts. Les questions techniques qui émergent (architecture, données, intégrations) sont traitées au niveau où un comité en a besoin : ce que ça permet, ce que ça coûte, ce que ça engage.",
  },
  {
    q: "La session peut-elle se tenir en anglais ?",
    a: "Oui. Les comités exécutifs internationaux sont fréquents chez nos clients : la même session se tient intégralement en anglais (executive AI training), supports et démonstrations compris. Le cadrage se fait dans la langue de votre choix, et un format bilingue est possible quand le comité mélange les deux.",
  },
  {
    q: 'Que produit concrètement la session ?',
    a: "Un relevé de décisions, la grille d'arbitrage remplie sur vos sujets (données, outils, organisation, budget), une première version du cadre d'usage et une feuille de route : chantiers prioritaires, équipes pilotes, calendrier. Sur les formats courts, la feuille de route reste à l'état d'orientations ; sur la journée complète, elle repart écrite.",
  },
  {
    q: 'Combien coûte une formation IA COMEX ?',
    a: "1 980 € HT pour la session de 3 h ou la demi-journée, 3 960 € HT pour la journée complète, dans les deux cas pour l'ensemble du comité (jusqu'à 12 participants), cadrage et préparation sur vos cas compris. Un programme étendu à 2 jours représente deux journées facturées. Le positionnement est exécutif : un intervenant senior, un contenu préparé sur votre secteur et une session qui débouche sur des décisions et une feuille de route.",
  },
  {
    q: 'Est-ce finançable par notre OPCO ?',
    a: "Les formats structurés en action de formation (objectifs pédagogiques, émargement, évaluation), typiquement la demi-journée et la journée, sont certifiés Qualiopi et finançables par votre OPCO dans le cadre du plan de développement des compétences ; nous préparons le dossier avec vous, la décision restant à votre opérateur. Une conférence courte sans dispositif d'évaluation relève en général du budget de fonctionnement, et nous vous le disons clairement au cadrage plutôt que de maquiller le format.",
  },
  {
    q: "Le comité exécutif est-il concerné par l'obligation de littératie IA ?",
    a: "Oui. L'article 4 du règlement européen sur l'IA demande aux organisations de soutenir la montée en compétence de toute personne qui utilise des systèmes d'IA dans un cadre professionnel, dirigeants compris. C'est une obligation de moyens : des actions documentées de sensibilisation et de formation suffisent à y répondre, et une session COMEX en fait partie. Aucune raison d'en faire un argument de peur ; c'est simplement une case de plus que la session coche.",
  },
  {
    q: 'Qui anime la session ?',
    a: "Un formateur senior, choisi au cadrage selon votre secteur, la langue et le calendrier : Mathias Nizan, fondateur de Masteria, ou un formateur expérimenté de son réseau, des indépendants sélectionnés pour leur pratique réelle de l'IA en entreprise et leur aisance face à un comité de direction. À ce niveau, la valeur tient autant à la qualité du dialogue et des arbitrages qu'au contenu ; le profil de l'intervenant vous est présenté avant la session. Pour la suite du déploiement (acculturation des équipes, formations métier), le même réseau intervient.",
  },
  {
    q: 'Et après la session du comité, quelle suite ?',
    a: "La session débouche sur une feuille de route, et la suite la déroule : une démarche d'acculturation par vagues pour embarquer les équipes, des formations par métier sur les cas réels de chacune, un cadre d'usage qui se formalise en charte, et selon les arbitrages, des chantiers de construction (agents, automatisations, outils sur mesure). Chaque brique existe en page dédiée sur ce site ; le comité décide du rythme.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA COMEX — Masteria',
  description: "Formation IA pour comités exécutifs et comités de direction : état de l'art sans jargon (du modèle à l'agent), démonstrations en direct, cas concrets du secteur, arbitrages (données, outils, organisation, budget) et feuille de route. Session de 3 h, demi-journée ou journée complète, en français ou en anglais, animée par un formateur senior. 1 980 € HT la demi-journée, 3 960 € HT la journée complète, pour l'ensemble du comité. Formats action de formation certifiés Qualiopi, finançables OPCO.",
  level: 'Direction générale, comités exécutifs et comités de direction',
  teaches: [
    "Lire l'état de l'art réel de l'IA en entreprise, du modèle à l'agent, sans jargon",
    "Évaluer ce que l'IA change pour son secteur et ses fonctions dans les 18 mois",
    "Arbitrer données, outils, faire ou faire faire, organisation et budget avec une grille de décision",
    "Poser le cadre : gouvernance, charte d'usage, obligation de littératie de l'article 4",
    "Construire la feuille de route IA de l'organisation : chantiers, pilotes, calendrier",
  ],
  about: "Stratégie et gouvernance de l'intelligence artificielle en entreprise",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique.',
  audience: 'Comités exécutifs, comités de direction, directions générales (PME, ETI, groupes)',
  locationName: 'Masteria — dans vos locaux ou hors site (France, Suisse, Belgique) ou distanciel',
  /* Grille exécutive propre à cette page (≠ intra équipes) : prix d'entrée
     porté par l'Offer, détail des deux formats dans la priceSpecification. */
  price: '1980',
  priceDescription: "Session exécutive pour l'ensemble du comité (jusqu'à 12 participants) : 1 980 € HT la session de 3 h ou la demi-journée, 3 960 € HT la journée complète.",
}

/* Le déroulé en ItemList (séquence citable — GEO). */
const derouleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Le déroulé d'une formation IA COMEX avec Masteria",
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
  '@id': 'https://www.master-ia.fr/formation-ia-comex#article',
  headline: 'Formation IA COMEX : aligner le comité exécutif, décider la feuille de route',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-28',
  dateModified: '2026-09-01',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-comex#webpage' },
  /* Entités liées à Wikipédia (sameAs) : désambiguïsation pour les moteurs
     génératifs et le Knowledge Graph. URLs vérifiées (curl 200) le 2026-08-28. */
  about: [
    { '@type': 'Thing', name: 'Comité exécutif', sameAs: 'https://fr.wikipedia.org/wiki/Comit%C3%A9_ex%C3%A9cutif' },
    { '@type': 'Thing', name: 'Comité de direction', sameAs: 'https://fr.wikipedia.org/wiki/Comit%C3%A9_de_direction' },
    { '@type': 'Thing', name: "Gouvernance d'entreprise", sameAs: 'https://fr.wikipedia.org/wiki/Gouvernance_d%27entreprise' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

/* ── GEO : lexique structuré des termes de la page (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique de la formation IA COMEX',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'COMEX', description: "Comité exécutif : l'instance qui réunit les dirigeants exécutifs d'une entreprise ou d'un groupe (direction générale et directions de fonctions) pour piloter la stratégie et son exécution." },
    { '@type': 'DefinedTerm', name: 'CODIR', description: "Comité de direction : l'équivalent du comité exécutif dans les PME et ETI, réunissant le dirigeant et ses directeurs. La session IA s'adresse aux deux formats d'instance." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Niveau de compréhension et de maîtrise de l'IA que l'article 4 du règlement européen demande aux organisations d'assurer pour toute personne qui utilise un système d'IA, dirigeants compris. Obligation de moyens." },
    { '@type': 'DefinedTerm', name: 'Feuille de route IA', description: "Le livrable de sortie de la session : chantiers prioritaires, équipes pilotes, cadre d'usage, budget et calendrier, arbitrés par le comité plutôt que subis par les équipes." },
    { '@type': 'DefinedTerm', name: 'Faire ou faire faire', description: "L'arbitrage entre s'équiper d'outils du marché, faire construire des solutions sur mesure, ou combiner les deux ; instruit en session avec une grille de décision par cas d'usage." },
    { '@type': 'DefinedTerm', name: "Gouvernance de l'IA", description: "Les règles qui encadrent l'usage de l'IA dans l'organisation : données autorisées, validation humaine de ce qui engage, propriété des assistants et agents créés, charte d'usage." },
  ],
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

export default function FormationIAComexPage() {
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
    { name: 'Formation IA COMEX', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        courseData={COURSE_DATA}
        faqItems={FAQ}
        datePublished="2026-08-28"
        dateModified="2026-09-01"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[derouleJsonLd, articleJsonLd, termsJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA COMEX</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · COMEX & direction générale
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA COMEX :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>aligner le comité exécutif, décider la feuille de route</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Une formation IA COMEX est une session exécutive conçue pour un comité de direction : en 3 heures à une journée, elle met tout le comité au même niveau sur ce que l'IA fait réellement, du modèle à l'agent, puis débouche sur des arbitrages concrets : données, outils, organisation, feuille de route. <strong style={{ color: '#fff', fontWeight: 700 }}>Animée par un formateur senior, en français ou en anglais</strong>, dans vos locaux ou hors site.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le comité exécutif est le premier étage d'un déploiement IA qui tient : c'est là que se décident le cadre, le budget et l'exemple donné au reste de l'entreprise. Une session dédiée évite les deux écueils classiques, la démonstration spectaculaire sans suite et la prudence qui laisse chaque direction avancer en ordre dispersé.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis sous 24 h
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

      {/* ── SOMMAIRE ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '14px 24px' }}>
        <div style={{ ...wrap, display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', fontFamily: 'Nunito, sans-serif' }}>Sur cette page</span>
          {SOMMAIRE.map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 13.5, color: '#374151', fontWeight: 600, textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── POURQUOI LE COMEX D'ABORD (éditorial asymétrique) ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le point de départ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi commencer le déploiement IA par le comité exécutif ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce que les décisions qui conditionnent tout le reste se prennent à ce niveau : quelles données peuvent aller dans quels outils, quel budget, quelle organisation, quel exemple donné aux équipes. Un comité aligné en une session évite des mois d'initiatives dispersées.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                C'est aussi l'ordre que nous pratiquons en mission : la session du comité d'abord, puis la démarche d'<Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link> qui embarque les équipes par vagues, et les formations par métier qui installent les usages.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE DÉROULÉ (ancre sombre — pivot) ── */}
      <section id="deroule" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le déroulé</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment se passe une formation IA pour comité exécutif ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Cinq temps : un cadrage avec la direction générale, un état de l'art sans jargon appuyé sur des démonstrations en direct, les cas de votre secteur, les arbitrages instruits un par un, et la feuille de route qui engage la suite. Le cadrage est gratuit et le devis arrive sous 24 heures.</strong>
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
        </div>
      </section>

      {/* ── LES FORMATS ── */}
      <section id="formats" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Les formats</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            De la session de 3 h à la journée feuille de route
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Trois formats selon le temps que le comité peut mobiliser : la session exécutive de 3 h pour l'état de l'art et les premiers arbitrages, la demi-journée qui ajoute la manipulation des outils, et la journée complète qui va jusqu'à la feuille de route écrite. Le cadrage oriente vers le bon format.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {FORMATS.map((item, i) => (
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
      </section>

      {/* ── LES THÈMES ── */}
      <section id="themes" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Les thèmes</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que la session met sur la table du comité
          </h2>

          <p style={answerStyle}>
            <strong>Six sujets structurent la session, dosés au cadrage selon vos priorités : l'état de l'art du modèle à l'agent, les données et le RGPD, l'AI Act et la gouvernance, l'impact sur les métiers, l'arbitrage faire ou faire faire, et la feuille de route qui transforme le tout en décisions.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {THEMES.map((item, i) => (
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
      </section>

      {/* ── COMEX, DIRIGEANTS OU MANAGERS (tableau de partition) ── */}
      <section id="quel-programme" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Bien choisir</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            COMEX, dirigeants ou managers : quel programme pour qui ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Trois programmes se répondent au niveau direction : la formation IA COMEX aligne un comité entier en session collective ; la formation IA dirigeants outille le dirigeant et son CODIR pour décider ; la formation IA management donne aux managers les réflexes pour piloter des équipes utilisatrices. Le cadrage, gratuit, oriente vers le bon point d'entrée.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Vous êtes</th>
                  <th style={thStyle} scope="col">Le bon programme</th>
                  <th style={thStyle} scope="col">Ce qu'il couvre</th>
                </tr>
              </thead>
              <tbody>
                {QUEL_PROGRAMME.map((row, i) => (
                  <tr key={row.programme}>
                    <td style={{ ...tdStyle, borderBottom: i === QUEL_PROGRAMME.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.vous}</td>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', borderBottom: i === QUEL_PROGRAMME.length - 1 ? 'none' : tdStyle.borderBottom }}>
                      {row.href ? <Link to={row.href} style={aStyle}>{row.programme}</Link> : row.programme}
                    </td>
                    <td style={{ ...tdStyle, borderBottom: i === QUEL_PROGRAMME.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.couvre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT la demi-journée, 3 960 € HT la journée complète
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le tarif couvre l'ensemble du comité (jusqu'à 12 participants), le cadrage préalable et la préparation sur vos cas : 1 980 € HT pour la session de 3 h ou la demi-journée, 3 960 € HT pour la journée complète, qui va jusqu'à la feuille de route écrite ; un programme étendu à 2 jours représente deux journées facturées. Les formats structurés en action de formation (objectifs, émargement, évaluation) sont certifiés Qualiopi et finançables par votre OPCO dans le cadre du plan de développement des compétences ; une conférence seule relève en général du budget de fonctionnement, et nous vous le disons au cadrage. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes, et les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  "1 980 € HT la session de 3 h ou la demi-journée, pour le comité entier",
                  '3 960 € HT la journée complète, jusqu\'à la feuille de route écrite',
                  'Qualiopi : formats formation finançables OPCO, dossier préparé ensemble',
                  'Devis sous 24 h après un cadrage gratuit avec la direction générale',
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
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui anime</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un formateur senior en salle, et des déploiements de groupe derrière
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Les sessions COMEX sont animées en français ou en anglais par Mathias Nizan, fondateur de Masteria, ou par un formateur senior de son réseau, choisi pour votre secteur. C'est le format que nous pratiquons en mission : chez un groupe industriel international du packaging, le déploiement IA a commencé par le comité exécutif et les pilotes, une trentaine de personnes au premier palier, avant les vagues managers et équipes. La démarche est détaillée dans nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link>, et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> complète le tableau.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['Depuis 2022', 'spécialisé uniquement IA'],
                ['+1 500', 'professionnels formés'],
                ['FR · EN', 'sessions dans les deux langues'],
                ['FR · CH · BE', 'sur site ou à distance'],
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
      <section id="faq" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Formation IA COMEX : les questions fréquentes
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
            La session du comité ouvre une démarche : acculturation des équipes, formations par métier, cadre d'usage et, selon les arbitrages, chantiers de construction.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation IA dirigeants', href: '/formation-ia-dirigeants', tag: 'Dirigeants', desc: "La journée stratégique du dirigeant et de son CODIR : grille de lecture, ROI, feuille de route 90 jours." },
              { label: 'Formation IA management', href: '/formation-ia-management', tag: 'Managers', desc: "Les réflexes pour piloter des équipes utilisatrices de l'IA : cadrer, faire adopter, suivre." },
              { label: 'Conférence IA', href: '/conference-ia', tag: 'Format court', desc: "Quand le comité veut une session d'une heure plutôt qu'une matinée : état de l'art, démonstrations sur vos cas, questions." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Démarche', desc: "La montée en compétence collective qui suit la session COMEX : vagues, référents, charte, mesure." },
              { label: 'Formation IA en entreprise', href: '/formation-ia-entreprise', tag: 'Équipes', desc: "Former les équipes en intra, du sprint de 3 h au parcours par métier, sur leurs cas réels." },
              { label: 'Conseil en stratégie IA', href: '/conseil-strategie-ia', tag: 'Conseil', desc: "Quand la feuille de route demande un travail de fond : cadrage stratégique, priorisation, gouvernance." },
              { label: 'Études de cas IA', href: '/etudes-de-cas-ia', tag: 'Preuves', desc: "Des déploiements réels, du COMEX aux équipes : ce qui a été fait, comment, avec quels résultats." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA COMEX</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Une session, un comité aligné, une feuille de route
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre comité, votre secteur et les décisions à instruire. Nous revenons sous 24 heures avec un format, un déroulé préparé sur vos cas et le devis. La session se cale sur un ordre du jour de comité, en français ou en anglais.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis sous 24 h
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Certifié Qualiopi · Français ou anglais · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
