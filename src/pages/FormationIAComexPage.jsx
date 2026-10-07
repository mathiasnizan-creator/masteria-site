import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Briefcase, Building2, Check, Factory, Globe, GraduationCap, Landmark,
  Layers, ListChecks, Network, Scale, ShieldCheck, Target, Users, Workflow, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
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
 * Réécrite le 07/10/2026 (texte propre à la page, faits à jour) : plus de
 * FounderNote ni d'OfficialSources générique ; deux cas cités avec lien vers
 * leur ancre (industrie, mission franchise-gemini) ; AI Act daté après
 * l'Omnibus (règlement (UE) 2026/1744).
 * Tarif exécutif (tranché le 2026-09-01) : 1 980 € HT la session de 3 h ou la
 * demi-journée, 3 960 € HT la journée complète, pour l'ensemble du comité.
 * Animation : Mathias Nizan OU un formateur senior du réseau (ne jamais
 * promettre le fondateur systématiquement).
 * Nuance financement honnête : action de formation = finançable, conférence
 * seule = budget de fonctionnement. Entités Wikipédia vérifiées (curl 200)
 * le 2026-08-28.
 */

const SLUG = 'formation-ia-comex'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation IA COMEX : aligner le comité exécutif | Masteria'
const META_DESC = "Formation IA COMEX : de 3 h à une journée pour aligner votre comité exécutif sur l'IA et arbitrer sa feuille de route. En français ou en anglais."
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
const srcLinkStyle = { color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }

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
  { icon: Briefcase, label: 'Pour COMEX, CODIR et directions générales' },
  { icon: Globe, label: 'Session en français ou en anglais' },
  { icon: Building2, label: 'Chez vous ou hors site' },
  { icon: GraduationCap, label: 'Qualiopi · formats de formation' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Format', value: "Session de 3 heures, demi-journée avec manipulation ou journée complète ; un second jour d'ateliers reste possible" },
  { label: 'Pour qui', value: "Comités exécutifs, CODIR et directions générales, de la PME au groupe présent sur plusieurs continents" },
  { label: 'Langue', value: "Français ou anglais, voire les deux quand le comité réunit plusieurs nationalités" },
  { label: 'Contenu', value: "Ce que l'IA sait faire en octobre 2026, cas comparables de votre secteur, arbitrages, feuille de route" },
  { label: 'Animation', value: "Mathias Nizan ou un formateur senior du réseau Masteria, retenu selon votre secteur, la langue et la date" },
  { label: 'Tarif', value: "1 980 € HT pour 3 heures ou une demi-journée, 3 960 € HT pour une journée complète, comité entier ; devis le lendemain du cadrage" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Le comité en premier'],
  ['#deroule', 'Déroulé'],
  ['#formats', 'Durées'],
  ['#themes', 'Sujets'],
  ['#quel-programme', 'Quel programme ?'],
  ['#tarif', 'Prix'],
  ['#faq', 'Questions'],
]

/* ───────── Pourquoi commencer par le COMEX (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Target,
    title: 'Les arbitrages se prennent à ce niveau',
    desc: "Choix des outils, périmètre des données, budget de formation, gouvernance : aucune direction ne peut trancher seule ces sujets transverses. La session les pose sur la table, avec les éléments pour décider.",
  },
  {
    icon: Users,
    title: "L'exemple part du comité",
    desc: "Les équipes s'approprient l'IA quand leurs dirigeants s'en servent et en parlent avec précision. Un comité qui a manipulé les outils, constaté leurs limites et posé des règles donne le ton du déploiement.",
  },
  {
    icon: Scale,
    title: "Les dirigeants entrent dans le champ de l'article 4",
    desc: "L'AI Act attend depuis février 2025 que l'entreprise aide chaque utilisateur d'IA à comprendre ses outils, membres du comité inclus. Une session documentée compte parmi ces mesures.",
  },
  {
    icon: Layers,
    title: 'Un cap commun pour toutes les directions',
    desc: "Sans position commune, chaque direction essaie un outil dans son coin : abonnements en double, données exposées, efforts dispersés. Une ligne de comité, même prudente, vaut mieux que six lignes implicites.",
  },
]

/* ───────── Le déroulé (5 étapes) ───────── */

const DEROULE = [
  {
    num: '01',
    title: 'Cadrage avec la direction générale',
    desc: "Avant la session, un échange avec le directeur général ou son bras droit : secteur, priorités, ce que le comité connaît déjà, décisions en attente. Le contenu se prépare sur vos sujets. La première demi-heure de cet entretien n'est pas facturée.",
  },
  {
    num: '02',
    title: "L'état des lieux, sans jargon",
    desc: "Ce que les modèles savent faire en octobre 2026, de l'assistant conversationnel à l'agent qui agit dans vos logiciels : capacités, limites, part de promesse. Des démonstrations en direct, peu de diapositives.",
  },
  {
    num: '03',
    title: 'Des cas proches du vôtre',
    desc: "Ce que des organisations comparables ont mis en place, ce que cela leur a demandé et ce qu'elles en retirent. Selon le format, les membres essaient eux-mêmes les outils sur des dossiers voisins des leurs.",
  },
  {
    num: '04',
    title: 'Les arbitrages',
    desc: "Données, outils, achat ou développement sur mesure, organisation, budget, risques : chaque question passe par une grille de décision. Le comité tranche en séance ce qui peut l'être et note le reste.",
  },
  {
    num: '05',
    title: 'La feuille de route',
    desc: "Un relevé de décisions et un plan : premiers chantiers, équipes pilotes, cadre d'usage, dates. La suite (acculturation des équipes, formations métier) se branche directement dessus.",
  },
]

/* ───────── Les formats (3 cartes) ───────── */

const FORMATS = [
  {
    icon: Zap,
    title: 'La session exécutive de 3 heures',
    desc: "Le format le plus demandé : état des lieux, démonstrations en direct, premiers arbitrages. Il tient dans l'ordre du jour d'un comité et suffit à élever le niveau de la discussion.",
  },
  {
    icon: Layers,
    title: 'La demi-journée avec manipulation',
    desc: "Après l'état des lieux, chaque membre teste les outils sur des dossiers de l'entreprise. Un dirigeant convaincu par ce qu'il a produit lui-même défend mieux le projet devant ses équipes.",
  },
  {
    icon: ListChecks,
    title: 'La journée feuille de route',
    desc: "Le format complet : état des lieux, manipulation, puis travail d'arbitrage jusqu'au relevé de décisions et à la feuille de route écrite. Un second jour d'ateliers peut s'y ajouter.",
  },
]

/* ───────── Les thèmes traités (6 cartes) ───────── */

const THEMES = [
  { icon: Bot, title: "De l'assistant à l'agent", desc: "Assistants, agents, automatisations : ce que chaque niveau permet, montré en direct, et ce que cela change dans vos processus." },
  { icon: ShieldCheck, title: 'Données, RGPD, sécurité', desc: "Quelles données peuvent entrer dans un assistant, et sous quelles conditions : comptes professionnels, périmètres de données, réglages d'entraînement vérifiés." },
  { icon: Scale, title: 'AI Act et gouvernance', desc: "Le calendrier du règlement après l'Omnibus de juillet 2026 : article 4 en vigueur dès 2025, obligations de transparence (article 50) applicables au 2 août 2026, haut risque de l'annexe III reporté à décembre 2027." },
  { icon: Workflow, title: 'Effets sur les métiers', desc: "Service par service, les tâches que l'IA transforme à court terme : où les gains sont à portée de main, où les attentes dépassent ce que les outils tiennent." },
  { icon: Target, title: 'Acheter ou construire', desc: "Outils du marché, développement sur mesure ou un mélange des deux : une grille pour décider quoi acheter, quoi faire construire, quoi laisser mûrir." },
  { icon: ListChecks, title: 'La feuille de route', desc: "Prioriser les chantiers, désigner les équipes pilotes, ordonner formation et déploiement : ce que le comité emporte en sortant." },
]

/* ───────── Quel programme pour qui (tableau de partition) ───────── */

const QUEL_PROGRAMME = [
  {
    vous: 'Un comité exécutif ou un CODIR à aligner ensemble',
    programme: 'Formation IA COMEX (cette page)',
    href: null,
    couvre: "Session collective : état des lieux, arbitrages, feuille de route, en français ou en anglais",
  },
  {
    vous: 'Un dirigeant qui veut décider avec quelques directeurs',
    programme: 'Formation IA dirigeants',
    href: '/formation-ia-dirigeants',
    couvre: "Une journée de décision : grille de lecture, retour sur investissement, gouvernance, plan à 90 jours",
  },
  {
    vous: "Des managers dont les équipes utilisent l'IA",
    programme: 'Formation IA management',
    href: '/formation-ia-management',
    couvre: "Encadrer les usages de l'équipe, les faire adopter, suivre ce qu'ils produisent",
  },
]

/* ───────── Cas publiés (faits de src/data/etudes-de-cas.js et missions-formation.js) ───────── */

const CAS = [
  {
    icon: Factory,
    secteur: 'Groupe international du packaging',
    texte: "Après la formation de 24 managers pilotes à Microsoft Copilot (anciennement Microsoft 365 Copilot), le comité de direction, accompagné du Data manager du groupe, a suivi une matinée stratégique en anglais : vocabulaire du modèle à l'agent, cadre AI Act et RGPD, coût des agents. Il en est ressorti avec la liste des questions à trancher pour sa feuille de route, avant la phase internationale lancée en octobre 2026.",
    href: '/etudes-de-cas-ia#industrie',
    lien: 'Lire le cas industriel',
  },
  {
    icon: Network,
    secteur: 'Franchiseur B2B · équipe du siège',
    texte: "En septembre 2026, huit dirigeants du siège ont passé deux jours sur Gemini dans Google Workspace, chacun avec un projet tiré de son poste ; leurs deux administrateurs ont ensuite consacré une journée en classe virtuelle à la console, à la charte et à un plan échelonné sur trois mois.",
    href: '/etudes-de-cas-ia#mission-franchise-gemini',
    lien: 'Lire le récit complet',
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'Formation IA COMEX : en quoi consiste-t-elle ?',
    a: "En une session exécutive réservée à un comité de direction. Sur une durée de 3 heures à une journée, elle met tous les membres au même niveau sur ce que l'IA sait faire, de l'assistant à l'agent, les confronte à des cas de leur secteur et les conduit à des arbitrages : données, outils, organisation, budget, feuille de route. Masteria l'anime en français ou en anglais, chez vous ou hors site, par la voix de Mathias Nizan ou d'un formateur senior du réseau ; les formats construits en action de formation relèvent de la certification Qualiopi.",
  },
  {
    q: 'En quoi diffère-t-elle de la formation IA pour dirigeants ?',
    a: "La formation COMEX est collective : le comité entier partage le même état des lieux, puis tranche ensemble. La formation IA pour dirigeants est une journée de décision pensée pour un dirigeant et son CODIR, surtout en PME et en ETI. Les deux se recoupent en partie ; le cadrage vous oriente en fonction de votre effectif et du résultat que vous attendez.",
  },
  {
    q: 'Combien de temps le comité doit-il bloquer ?',
    a: "Entre 3 heures et une journée. La version de 3 heures se glisse dans une réunion de comité ordinaire et couvre l'état des lieux et les premiers arbitrages. La demi-journée ajoute la manipulation des outils ; la journée complète produit la feuille de route écrite. Des ateliers d'approfondissement peuvent occuper un second jour, souvent quelques semaines plus tard.",
  },
  {
    q: 'Les membres du comité doivent-ils avoir des notions techniques ?',
    a: "Non. La session s'adresse à des décideurs : peu de jargon, des démonstrations en direct, des grilles de décision. Les questions techniques qui surgissent (architecture, données, intégrations) sont traitées au niveau utile à un comité : ce que cela permet, ce que cela coûte, ce que cela engage.",
  },
  {
    q: 'La session peut-elle se tenir en anglais ?',
    a: "Oui. Beaucoup de nos clients ont des comités internationaux : la session se déroule alors entièrement en anglais (executive AI training), supports et démonstrations compris. Le cadrage se fait dans la langue de votre choix, et une version bilingue convient aux comités qui mêlent les deux. En 2026, Masteria a déjà conduit en anglais une matinée stratégique de comité de direction et deux sessions de managers.",
  },
  {
    q: 'Avec quoi le comité repart-il ?',
    a: "Avec un relevé de décisions, une grille d'arbitrage remplie sur ses propres sujets (données, outils, organisation, budget), un premier jet du cadre d'usage, puis un plan : chantiers prioritaires, équipes pilotes, calendrier. Sur les formats courts, la feuille de route reste au stade des orientations ; après une journée complète, elle est écrite.",
  },
  {
    q: "Quel est le prix d'une session COMEX ?",
    a: "Comptez 1 980 € HT pour 3 heures ou une demi-journée, 3 960 € HT pour une journée complète, dans les deux cas pour l'ensemble du comité (douze membres au plus), cadrage et préparation sur vos dossiers compris. Un programme étalé sur deux jours compte deux journées. Ce prix couvre un intervenant senior et un contenu préparé pour votre secteur.",
  },
  {
    q: 'Notre OPCO peut-il financer la session ?',
    a: "Les formats montés en action de formation, avec objectifs, émargement et évaluation (en pratique la demi-journée et la journée), entrent dans le périmètre Qualiopi du cabinet. Votre OPCO peut alors les financer en appliquant ses propres critères, dans la mesure de ses fonds ; le dossier se monte avec notre équipe. Une conférence courte sans évaluation se règle plutôt sur le budget de fonctionnement ; nous vous le disons au cadrage plutôt que d'habiller le format.",
  },
  {
    q: "Le comité exécutif est-il concerné par l'obligation de littératie IA ?",
    a: "Oui. Son article 4, applicable dès février 2025, demande aux entreprises d'accompagner toute personne qui se sert d'un outil d'IA pour elles, membres du comité inclus. Le règlement Omnibus 2026/1744, applicable au 27 juillet 2026, parle désormais de mesures pour soutenir cette maîtrise : on juge les moyens mis en place, sans certificat. Une session COMEX documentée en fait partie, sans qu'il soit utile d'en faire un argument de peur.",
  },
  {
    q: 'Qui anime la session ?',
    a: "Un intervenant senior, retenu au cadrage selon votre secteur, la langue et la date : soit Mathias Nizan, qui dirige Masteria, soit l'un des formateurs seniors de son réseau d'indépendants, choisi pour sa pratique de l'IA en entreprise et son aisance devant un comité. Vous recevez son profil avant la session. Le même réseau intervient ensuite pour la suite du déploiement, de l'acculturation aux formations par métier.",
  },
  {
    q: 'Et une fois la session terminée ?',
    a: "La feuille de route se déroule : acculturation par vagues pour les équipes, formations par métier sur leurs dossiers, cadre d'usage transformé en charte et, selon les arbitrages, chantiers de construction (agents, automatisations, outils sur mesure). Chaque étape a sa page sur ce site, et le comité fixe le rythme.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA COMEX (Masteria)',
  description: "Session exécutive pour comités de direction : état des lieux de l'IA sans jargon, de l'assistant à l'agent, démonstrations en direct, cas du secteur, arbitrages (données, outils, organisation, budget) et feuille de route. Durée de 3 heures à une journée ; langue française ou anglaise ; conduite soit par Mathias Nizan, soit par un formateur senior du réseau Masteria. 1 980 € HT pour 3 heures ou une demi-journée, 3 960 € HT pour une journée complète, comité entier. Formats montés en action de formation relevant de la certification Qualiopi.",
  level: 'Direction générale, comités exécutifs et comités de direction',
  teaches: [
    "Comprendre sans jargon ce que l'IA sait faire en entreprise, des assistants jusqu'aux agents",
    "Mesurer ce que l'IA modifie dans les fonctions de son secteur à court terme",
    "Trancher données, outils, achat ou construction, organisation et budget avec une grille de décision",
    "Poser le cadre : gouvernance, charte d'usage, article 4 de l'AI Act",
    "Écrire la feuille de route IA de l'organisation : chantiers, pilotes, calendrier",
  ],
  about: "Stratégie et gouvernance de l'intelligence artificielle en entreprise",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique.',
  audience: 'Comités exécutifs, comités de direction, directions générales (PME, ETI, groupes)',
  locationName: 'Masteria : vos locaux, un lieu hors site ou la visio ; comités en France, en Europe, aux États-Unis, en Inde',
  /* Grille exécutive propre à cette page (≠ intra équipes) : prix d'entrée
     porté par l'Offer, détail des deux formats dans la priceSpecification. */
  price: '1980',
  priceDescription: "Pour le comité entier (douze membres au plus) : 1 980 € HT pour 3 heures ou une demi-journée, 3 960 € HT pour une journée complète.",
}

/* Le déroulé en ItemList (séquence citable, GEO). */
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
  headline: 'Formation IA COMEX : aligner le comité, décider la feuille de route',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-28',
  dateModified: '2026-10-07',
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
    { '@type': 'DefinedTerm', name: 'COMEX', description: "Le comité exécutif : il réunit la direction générale et les directeurs de fonction d'une entreprise ou d'un groupe pour piloter la stratégie et sa mise en œuvre." },
    { '@type': 'DefinedTerm', name: 'CODIR', description: "Le comité de direction, son équivalent fréquent en PME et en ETI : le dirigeant et ses directeurs. La session COMEX convient aux deux instances." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "La maîtrise de l'IA visée par l'article 4 de l'AI Act, à encourager chez quiconque se sert d'un outil d'IA pour l'entreprise, comité compris ; une obligation de moyens." },
    { '@type': 'DefinedTerm', name: 'Feuille de route IA', description: "Ce que le comité emporte en sortant : chantiers prioritaires, équipes pilotes, cadre d'usage, budget et calendrier, décidés par le comité lui-même et transmis aux équipes." },
    { '@type': 'DefinedTerm', name: 'Acheter ou construire', description: "Le choix entre des outils du marché, une solution développée sur mesure ou une combinaison des deux, instruit en séance pour chaque usage envisagé." },
    { '@type': 'DefinedTerm', name: "Gouvernance de l'IA", description: "Les règles qui encadrent l'IA dans l'organisation : données autorisées, relecture humaine de tout ce qui engage l'entreprise, propriétaire des assistants et des agents, charte d'usage." },
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

/* Sources de la page : émises en WebPage.citation (JSON-LD) et listées dans
   la section de sources propre à la page. */
const PAGE_CITATIONS = [
  { name: "Texte officiel de l'AI Act, règlement 2024/1689, article 4 compris", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Le règlement Omnibus 2026/1744 sur EUR-Lex, qui a reporté les obligations « haut risque »", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { name: "Plan de développement des compétences : ce qu'en dit le ministère du Travail", url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences' },
  { name: "Qualiopi, la certification des prestataires de formation (ministère du Travail)", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
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
        dateModified="2026-10-07"
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
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>aligner le comité, décider la feuille de route</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Signé <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur du cabinet · version revue en octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation IA COMEX est une session exécutive pour un comité de direction entier : de 3 heures à une journée, elle donne à chaque membre la même lecture de ce que l'IA sait faire aujourd'hui, de l'assistant à l'agent, puis conduit le comité à trancher sur les données, les outils, l'organisation et le budget. <strong style={{ color: '#fff', fontWeight: 700 }}>En français ou en anglais, Mathias Nizan l'anime lui-même ou la confie à un formateur senior du réseau Masteria</strong>, dans vos locaux ou hors site.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Un déploiement de l'IA tient quand le comité exécutif a fixé le cadre, voté le budget et montré l'exemple. Une session dédiée évite deux pièges fréquents : la démonstration brillante qui ne débouche sur rien, et la prudence qui laisse chaque direction tester de son côté.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Préparer la session de votre comité
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#deroule" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parcourir le déroulé
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>La session en six lignes</div>
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
              <Kicker>Par où commencer</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi commencer le déploiement IA par le comité exécutif ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Les décisions qui conditionnent tout le reste se prennent au comité : quelles données peuvent aller dans quels outils, quel budget, quelle organisation, quel exemple montrer aux équipes. Une session suffit pour aligner ses membres, et elle épargne des mois d'initiatives éparpillées.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Nous suivons cet ordre en mission : la session du comité, puis la démarche d'<Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link> qui forme les équipes par vagues, et enfin les formations par métier qui installent les usages au poste.
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

      {/* ── LE DÉROULÉ (ancre sombre, pivot) ── */}
      <section id="deroule" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Cinq temps</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment se déroule une formation IA pour comité exécutif ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La session suit cinq temps : un cadrage avec la direction générale, un état des lieux sans jargon illustré par des démonstrations, des cas tirés de votre secteur, des arbitrages pris un à un, puis la feuille de route qui engage la suite. Le devis arrive le lendemain du cadrage.</strong>
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
          <Kicker>Trois durées</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            De la session de 3 heures à la journée feuille de route
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le format dépend du temps que le comité peut libérer. La session de 3 heures couvre l'état des lieux et les premiers arbitrages ; la demi-journée ajoute la manipulation des outils ; la journée complète va jusqu'à la feuille de route écrite. Le cadrage aide à choisir.</strong>
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
          <Kicker>Les sujets</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six sujets que la session met sur la table du comité
          </h2>

          <p style={answerStyle}>
            <strong>Le cadrage dose six sujets selon vos priorités : l'état des lieux de l'assistant à l'agent, les données et le RGPD, l'AI Act et la gouvernance, l'effet sur les métiers, le choix entre acheter et construire, puis la feuille de route qui transforme le tout en décisions.</strong>
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
            COMEX, dirigeants ou managers : quel programme choisir ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Trois programmes se partagent le niveau direction. La formation IA COMEX aligne un comité entier en session collective ; la formation IA dirigeants outille un dirigeant et ses proches collaborateurs pour décider ; la formation IA management prépare les managers à encadrer des équipes qui utilisent l'IA. Le cadrage oriente vers la bonne porte.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Votre situation</th>
                  <th style={thStyle} scope="col">Programme conseillé</th>
                  <th style={thStyle} scope="col">Contenu</th>
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
              <Kicker>Prix de la session</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT pour 3 heures, 3 960 € HT pour la journée
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le prix couvre le comité entier, jusqu'à douze membres, ainsi que le cadrage et la préparation sur vos dossiers. Trois heures ou une demi-journée reviennent à 1 980 € HT ; la journée complète, qui va jusqu'à la feuille de route écrite, à 3 960 € HT. Un programme étalé sur deux jours compte deux journées. Les formats montés en action de formation (objectifs, feuille d'émargement, évaluation) sont couverts par notre certification Qualiopi, et l'opérateur de compétences de votre branche décide de leur financement selon ses propres règles. Une conférence sans évaluation se paie en général sur le budget de fonctionnement de l'entreprise, et nous le précisons dès le cadrage. Un comité installé à Genève ou à Bruxelles ne dépend d'aucun OPCO ; son devis est libellé en euros, HT. Pour trouver votre opérateur, l'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> suffit, et la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link> recense chaque dispositif.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  '1 980 € HT : trois heures ou une demi-journée, comité entier',
                  '3 960 € HT : journée complète et feuille de route écrite',
                  'Formats de formation présentables à votre OPCO',
                  'Devis le lendemain du cadrage avec la direction générale',
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

      {/* ── CAS PUBLIÉS (directions déjà formées) ── */}
      <section id="cas" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ils sont passés par là</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Deux équipes de direction formées en 2026
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Une session de comité prend tout son sens quand elle ouvre un déploiement. Les deux exemples ci-dessous, anonymisés, sont racontés en entier dans nos études de cas.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
            {CAS.map(cas => (
              <div key={cas.href} style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <IconTile icon={cas.icon} />
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.35 }}>{cas.secteur}</div>
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

      {/* ── E-E-A-T : qui anime ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui anime</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un intervenant senior en salle, choisi pour votre comité
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Qui sera devant votre comité ? Mathias Nizan, à l'origine du cabinet lyonnais en 2022, ou l'un des formateurs seniors du réseau, des indépendants habitués aux comités de direction. Le choix dépend de votre secteur, de la langue et de la date, et vous connaissez le profil retenu avant de signer. Le cabinet ne revend ni licence ni abonnement, ce qui laisse le comité libre de ses choix d'outils. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> complètent le portrait.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['FR · EN', 'sessions dans les deux langues'],
                ['3 h', 'pour le format le plus demandé'],
                ['≤ 12', 'membres du comité par session'],
                ['Hors site', 'ou dans vos locaux, au choix'],
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
                Les questions des directions générales sur la session COMEX
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre comité se pose une autre question ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Transmettez-la nous
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
          <Kicker>La suite</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Après la session, les pages qui prolongent le travail du comité
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            La session du comité ouvre plusieurs chantiers : faire progresser les équipes, poser un cadre d'usage, construire des outils quand les arbitrages le demandent.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation IA dirigeants', href: '/formation-ia-dirigeants', tag: 'Dirigeants', desc: "Une journée pour un dirigeant et son CODIR : grille de lecture, retour sur investissement, plan à 90 jours." },
              { label: 'Formation IA management', href: '/formation-ia-management', tag: 'Managers', desc: "Préparer les managers à encadrer des équipes qui utilisent l'IA au quotidien." },
              { label: 'Conférence IA', href: '/conference-ia', tag: 'Format court', desc: "Une heure devant le comité ou devant toute l'entreprise, quand une matinée entière n'est pas possible." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Démarche', desc: "Faire progresser les équipes après la décision du comité : vagues, référents, charte, mesure." },
              { label: 'Formation IA en entreprise', href: '/formation-ia-entreprise', tag: 'Équipes', desc: "Organiser la formation des services en intra, de la demi-journée de sprint aux programmes métier de deux jours." },
              { label: 'Conseil en stratégie IA', href: '/conseil-strategie-ia', tag: 'Conseil', desc: "Quand la feuille de route demande un travail de fond : priorisation, gouvernance, cadrage des projets." },
              { label: 'Études de cas IA', href: '/etudes-de-cas-ia', tag: 'Exemples', desc: "Des déploiements anonymisés, du comité de direction jusqu'aux équipes, avec leurs dates et leurs méthodes." },
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
                    Consulter
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
            Mathias Nizan anime une partie des sessions COMEX et relit chaque préparation confiée à un formateur du réseau. Ce texte reflète l'état des outils et des règles au 7 octobre 2026 ; pour connaître l'homme derrière le cabinet, voyez <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>son portrait</Link>.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA COMEX</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Donnez à votre comité une lecture commune de l'IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Présentez-nous votre comité, votre secteur et les décisions en attente. Le lendemain, vous recevez un format, un déroulé préparé sur vos dossiers et le devis. La session s'insère dans un ordre du jour de comité, en français ou en anglais.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Préparer la session du comité
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              De 3 heures à une journée · français ou anglais · certifié Qualiopi · comités basés en France ou à l'étranger
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (section propre à la page, remplace OfficialSources) ── */}
      <section aria-labelledby="sources-comex" style={{ padding: '56px 40px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-comex" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Pour vérifier ce que dit cette page
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Les textes européens et les règles de financement auxquels renvoie la session du comité :
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
