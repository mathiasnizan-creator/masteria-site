import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, ListChecks, Users, Eye,
  Scale, Target, Lock, BookOpen,
  ExternalLink, GraduationCap, ClipboardCheck, Building2,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « IA responsable » (slug /ia-responsable). Cible : « ia responsable »,
 * « ia éthique et responsable », « ia éthique entreprise », « principes ia responsable »,
 * « iso 42001 ».
 *
 * ANGLE PROPRE (07/10/2026) : l'éthique et l'impact. Des valeurs aux preuves, et la
 * mesure de ce qu'un système change pour les personnes (ISO/IEC 42005, article 27 de
 * l'AI Act, article 35 du RGPD). Les rôles sont sur /gouvernance-ia, le document sur
 * /charte-ia-entreprise, les données sur /ia-et-rgpd, la formation sur /formation-ai-act.
 *
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de FounderNote ni
 * d'OfficialSources. Calendrier corrigé (l'ancienne version disait « paliers jusqu'en
 * 2027 ») : article 50 depuis le 02/08/2026, annexe III au 02/12/2027, annexe I au
 * 02/08/2028 (règlement (UE) 2026/1744). Faits : lignes directrices HLEG du 08/04/2019
 * (4 principes, 7 exigences) ; ISO/IEC 42001 publiée en décembre 2023 ; ISO/IEC 42005
 * publiée en mai 2025 (iso.org, vérifié le 07/10/2026).
 */

const SLUG = 'ia-responsable'
const c = '#2563EB'
const cLight = '#DBEAFE'
const RDV = '/contact?type=projet&rdv=30'

const META_TITLE = 'IA responsable : principes, impacts et ISO 42001 | Masteria'
const META_DESC = "IA responsable : six principes vérifiables, de l'éthique aux preuves, impacts sur les personnes, ISO/IEC 42001 et 42005, AI Act au 7 octobre 2026."
const KEYWORDS = "ia responsable, intelligence artificielle responsable, ia éthique et responsable, ia éthique entreprise, principes ia responsable, iso 42001, iso/iec 42001, iso 42005, analyse d'impact ia, démarche ia responsable, ia responsable en entreprise, ia digne de confiance, supervision humaine, explicabilité de l'ia, ia responsable définition"

const SITE = 'https://www.master-ia.fr'
const FULL_URL = `${SITE}/${SLUG}`

/* ───────── Sources de référence (liens d'autorité) ───────── */

const REFERENCES = [
  { name: "Version publiée de l'AI Act (EUR-Lex)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Lignes directrices en matière d'éthique pour une IA digne de confiance (Commission européenne, avril 2019)", url: 'https://digital-strategy.ec.europa.eu/fr/library/ethics-guidelines-trustworthy-ai' },
  { name: "La CNIL et l'intelligence artificielle : dossier et recommandations", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "Fiche de la norme ISO/IEC 42001:2023 sur le site de l'ISO", url: 'https://www.iso.org/fr/standard/81230.html' },
  { name: "ISO/IEC 42005:2025, le guide d'évaluation des effets des systèmes d'IA", url: 'https://www.iso.org/standard/44545.html' },
]

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
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
  { icon: ListChecks,     label: 'Six principes vérifiables' },
  { icon: Users,          label: 'Impacts sur les personnes' },
  { icon: Scale,          label: 'AI Act & RGPD' },
  { icon: ClipboardCheck, label: 'ISO/IEC 42001 et 42005' },
]

/* ───────── En bref (synthèse citable · GEO) ───────── */

const EN_BREF = [
  { label: 'Définition', value: "Des principes (transparence, supervision humaine, équité, vie privée, robustesse, responsabilité) traduits en contrôles, en mesures et en preuves" },
  { label: 'Éthique ou responsable', value: "L'éthique dit ce qui compte ; la démarche responsable montre comment on s'y tient, chiffres et traces à l'appui" },
  { label: 'Référentiels', value: "Règlement (UE) 2024/1689 dit AI Act, RGPD, lignes directrices européennes d'avril 2019, ISO/IEC 42001:2023 et ISO/IEC 42005:2025" },
  { label: 'Impacts', value: "Qui subit une erreur, à quelle échelle, avec quel recours : l'analyse d'impact précède les usages sensibles" },
  { label: 'Méthode', value: "Cinq étapes : cartographier les usages et leurs effets, choisir les principes applicables, poser les contrôles humains, mesurer, réviser" },
  { label: 'Notre rôle', value: "Conseil en gouvernance, au forfait et hors financement OPCO, et formations dont Masteria détient la certification Qualiopi" },
]

/* ───────── Les six principes de l'IA responsable (cartes) ───────── */

const PRINCIPES = [
  {
    icon: Eye,
    title: 'Transparence et explicabilité',
    desc: "Les personnes savent quand une IA intervient, et l'organisation sait expliquer d'où vient un résultat, au niveau de détail que son interlocuteur peut suivre. En pratique : une mention visible sur les contenus générés, une fiche par système, une réponse prête quand un client ou un salarié demande pourquoi.",
  },
  {
    icon: Users,
    title: 'Supervision humaine',
    desc: "Une personne compétente garde la main sur les décisions qui comptent : elle valide avant l'envoi, peut écarter la suggestion et arrêter le système. Le principe s'écrit dans le processus métier, en désignant nommément qui est habilité, usage par usage.",
  },
  {
    icon: Scale,
    title: 'Équité et lutte contre les biais',
    desc: "Le système traite chacun de façon équitable, quels que soient son origine, son genre, son âge ou sa situation. On le vérifie en le testant sur des groupes variés, en mesurant les écarts de résultat et en corrigeant leur cause, dans les données ou dans les règles.",
  },
  {
    icon: Lock,
    title: 'Respect de la vie privée',
    desc: "Les données personnelles mobilisées gardent la protection que le RGPD exige : base légale vérifiée, prompts limités au nécessaire, contrats signés avec les éditeurs. Notre page consacrée à l'IA et au RGPD détaille ce volet.",
  },
  {
    icon: ShieldCheck,
    title: 'Robustesse et sécurité',
    desc: "Le système résiste aux erreurs, aux dérives et aux attaques, comme l'injection de consignes cachées dans un document qu'on lui fait lire. Tests avant la mise en service, surveillance des sorties, plan de repli quand les réponses deviennent aberrantes.",
  },
  {
    icon: ClipboardCheck,
    title: 'Responsabilité et traçabilité',
    desc: "Chaque système a un responsable désigné, et ses décisions assistées laissent une trace exploitable. Les revues reviennent à date fixe, dans un système de management comme celui que décrit ISO/IEC 42001.",
  },
]

/* ───────── Des principes aux référentiels (tableau · ancre sombre) ───────── */

const PRACTICE_TABLE = [
  {
    principe: 'Transparence et explicabilité',
    pratique: 'Mention sur les contenus générés diffusés, agents conversationnels qui se présentent comme tels, fiche descriptive de chaque système.',
    referentiel: "AI Act, article 50, opposable depuis août 2026",
  },
  {
    principe: 'Supervision humaine',
    pratique: "Validation par une personne nommée sur les décisions sensibles, pouvoir d'écarter le résultat et d'arrêter le système.",
    referentiel: "AI Act, articles 14 et 26 (haut risque, 2 décembre 2027) ; RGPD, article 22",
  },
  {
    principe: 'Équité et lutte contre les biais',
    pratique: 'Tests sur des groupes variés, mesure des écarts de résultat, correction des données ou des règles en cause.',
    referentiel: "Lignes directrices européennes de 2019 ; AI Act, article 10 sur les données des systèmes à haut risque",
  },
  {
    principe: 'Respect de la vie privée',
    pratique: 'Base légale pour chaque traitement, données limitées au nécessaire, contrat signé avec chaque éditeur.',
    referentiel: 'RGPD, articles 5, 6 et 28 ; recommandations de la CNIL',
  },
  {
    principe: 'Robustesse et sécurité',
    pratique: "Tests avant la mise en service, surveillance des dérives, plan de repli, défense contre l'injection de consignes.",
    referentiel: 'AI Act, article 15 (exactitude, robustesse, cybersécurité)',
  },
  {
    principe: 'Responsabilité et traçabilité',
    pratique: "Responsable désigné par système, journal des décisions assistées, revues inscrites au calendrier.",
    referentiel: "ISO/IEC 42001:2023, norme de management certifiable",
  },
  {
    principe: 'Impact sur les personnes',
    pratique: "Analyse avant tout usage sensible : qui est touché, avec quelle gravité, quel recours est offert.",
    referentiel: "ISO/IEC 42005:2025 ; AI Act, article 27 ; RGPD, article 35",
  },
]

/* ───────── Méthode (5 étapes · timeline à rail) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cartographier les usages et ce qu’ils changent pour les personnes',
    desc: "Pour chaque usage en place ou en projet : finalité, données, personnes concernées, conséquence d'une erreur. Un outil qui résume des comptes rendus n'a pas l'impact d'un logiciel qui classe des candidats ; la carte dit où concentrer l'effort.",
  },
  {
    num: '02',
    title: 'Choisir les principes qui s’appliquent',
    desc: "Un agent conversationnel ouvert aux clients appelle d'abord la transparence ; un usage RH, l'équité et une supervision serrée. Chaque principe retenu devient une règle précise, rattachée à l'AI Act, au RGPD ou à ISO/IEC 42001.",
  },
  {
    num: '03',
    title: 'Poser les contrôles humains',
    desc: "Qui valide quoi, à quel moment, avec quel droit d'arrêter le système. La supervision s'inscrit dans le processus métier, et une journalisation rend chaque décision assistée traçable après coup.",
  },
  {
    num: '04',
    title: 'Mesurer',
    desc: "Erreurs repérées, écarts de résultat entre groupes, incidents, usages sortis du cadre : des indicateurs simples, relevés à date fixe. Ils prouvent que les principes tiennent en production et nourrissent les revues du comité IA.",
  },
  {
    num: '05',
    title: 'Réviser',
    desc: "À intervalle régulier, intégrez les nouveaux usages, ajustez les contrôles, faites évoluer les indicateurs. C'est le cycle d'amélioration continue qu'ISO/IEC 42001 organise, et qui fait vivre le dispositif année après année.",
  },
]

/* ───────── Ce que la démarche rapporte (4 cartes factuelles) ───────── */

const BUSINESS = [
  {
    icon: Building2,
    title: 'Des réponses étayées dans les appels d’offres',
    desc: "Les acheteurs glissent des questions sur l'IA dans leurs consultations : politique écrite, supervision des décisions, traitement des données. Un dispositif formalisé y répond avec des documents joints au lieu de promesses.",
  },
  {
    icon: Scale,
    title: 'Une conformité préparée',
    desc: "Adopté en 2024, l'AI Act garde pour décembre 2027 et août 2028 ses obligations du haut risque. Une démarche responsable installée tôt couvre déjà l'essentiel de ce qu'il attendra : transparence, supervision humaine, documentation, gestion des risques.",
  },
  {
    icon: Target,
    title: 'Des décisions assistées mieux tenues',
    desc: "La supervision humaine et la mesure des écarts repèrent les erreurs avant qu'elles coûtent cher, et laissent une trace pour comprendre ce qui s'est passé. Le dispositif fonctionne comme un contrôle qualité permanent.",
  },
  {
    icon: Users,
    title: 'Des équipes qui osent s’en servir',
    desc: "Quand les règles sont posées, les salariés savent ce qu'ils peuvent faire et qui supervise quoi. La confiance dans les outils progresse avec la clarté du cadre, et les usages sortent de l'ombre.",
  },
]

/* ───────── Cas cités (faits de src/data/etudes-de-cas.js) ───────── */

const CAS = [
  {
    id: 'industrie',
    texte: "Chez un industriel international de l'emballage, la séance stratégique d'une matinée, réservée au comité de direction et tenue en anglais, a porté sur « ce qui fait un travailleur augmenté plutôt que réduit », avec le cadre fixé par l'AI Act et le RGPD, puis le coût des agents.",
  },
  {
    id: 'distribution',
    texte: "Chez un distributeur informatique B2B qui emploie 58 personnes, chaque compétence Claude a un propriétaire désigné, passe par la validation de la direction et revient en revue chaque trimestre.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Comment définir l'IA responsable ?",
    a: "L'IA responsable, ou intelligence artificielle responsable, désigne les principes et les pratiques qui font qu'un système d'IA reste transparent, supervisé par des personnes, équitable, robuste et respectueux des données. Six principes la structurent : transparence et explicabilité, supervision humaine, équité, vie privée, robustesse et sécurité, responsabilité et traçabilité. Une démarche responsable les inscrit dans des processus : registre des usages, contrôles humains, indicateurs suivis, revues à date fixe, analyse d'impact avant les usages sensibles. Son critère décisif est la preuve : chaque principe affiché doit pouvoir être audité.",
  },
  {
    q: 'IA éthique et IA responsable : quelle différence ?',
    a: "L'IA éthique relève des valeurs : équité, respect des personnes, bien commun. L'IA responsable en fait des pratiques contrôlables : processus, indicateurs, référentiels comme l'AI Act, le RGPD ou ISO/IEC 42001. Une organisation qui parle d'IA éthique et responsable promet les deux, des valeurs et la preuve qu'elle les tient. Devant une telle déclaration, posez la question du dispositif : quels contrôles sont en place, quelles mesures sont relevées, quel référentiel sert de cadre.",
  },
  {
    q: 'À quoi sert la norme ISO/IEC 42001 ?',
    a: "Publiée en décembre 2023 par l'ISO et la CEI, ISO/IEC 42001 est la première norme internationale consacrée au management de l'IA. Elle fixe les exigences pour bâtir, faire fonctionner et améliorer le dispositif qui encadre l'IA d'une organisation : politique, rôles, évaluation des risques et des impacts, contrôles, revues. Elle est certifiable par un organisme tiers, à la manière d'ISO/IEC 27001 pour la sécurité de l'information. Une certification apporte une preuve structurée de votre démarche ; elle ne vaut pas, à elle seule, conformité à l'AI Act.",
  },
  {
    q: 'Que change ISO/IEC 42005, publiée en 2025 ?',
    a: "Parue en mai 2025, ISO/IEC 42005 donne des lignes directrices pour évaluer ce qu'un système d'IA fait aux personnes, aux groupes et à la société : à quel moment du cycle de vie la conduire, quoi documenter, comment en tirer des mesures. Elle complète ISO/IEC 42001, qui exige d'évaluer ces impacts sans détailler la méthode. Pour une entreprise, elle offre une trame commune à l'analyse d'impact du RGPD (article 35) et à celle que l'article 27 de l'AI Act demandera à certains déployeurs d'usages à haut risque à partir de décembre 2027.",
  },
  {
    q: "L'IA responsable est-elle obligatoire ?",
    a: "La démarche d'ensemble reste volontaire ; plusieurs de ses pratiques sont des obligations. L'AI Act, en vigueur depuis l'été 2024, exige déjà des mesures pour que le personnel maîtrise l'IA (article 4) et, depuis août 2026, la transparence de certains systèmes (article 50) ; la supervision humaine et la gestion des risques des usages à haut risque suivront le 2 décembre 2027 et le 2 août 2028, dates fixées par le règlement (UE) 2026/1744. Le RGPD encadre depuis 2018 toute donnée personnelle traitée par une IA. Les normes ISO restent volontaires. Une démarche responsable rassemble ces obligations dans un dispositif cohérent au lieu de les traiter en silos.",
  },
  {
    q: "Par où commencer une démarche d'IA responsable ?",
    a: "Par la carte des usages et de leurs effets : recensez les systèmes en place ou en projet, leurs finalités, les données qu'ils emploient et ce qu'une erreur coûterait aux personnes concernées. Cette carte classe les priorités et dimensionne la suite : principes à retenir pour chaque usage, contrôles à poser, indicateurs à suivre. Pour qui démarre sans rien, le diagnostic IA fournit ce point de départ, dimension réglementaire comprise.",
  },
  {
    q: "Quel lien entre l'IA responsable et la gouvernance de l'IA ?",
    a: "L'IA responsable fixe le cap : des principes et leur traduction en pratiques. La gouvernance de l'IA apporte la mécanique qui les fait tenir : registre des usages, charte, comité, référent, plan de conformité. Sans cette mécanique, la démarche reste une déclaration. Dans les faits, la carte des usages alimente le registre, les principes se retrouvent dans la charte, et le comité suit les mesures puis décide des corrections. Le dispositif, et la mission qui l'installe, sont présentés sur la page de notre offre de gouvernance.",
  },
]

/* ───────── Définitions clés (ancrage d'entités · JSON-LD DefinedTermSet) ───────── */

const GLOSSARY = [
  {
    term: 'IA responsable',
    def: "Principes et pratiques qui rendent un système d'intelligence artificielle transparent, supervisé, équitable, robuste et respectueux des données, preuves vérifiables à l'appui.",
  },
  {
    term: 'IA éthique',
    def: "Réflexion sur les valeurs qui doivent guider la conception et l'usage de l'IA : équité, respect des personnes, bien commun. Elle donne le cap que la démarche responsable met en pratique.",
  },
  {
    term: 'Explicabilité',
    def: "Capacité à dire comment un système d'IA a produit un résultat, avec un niveau de détail adapté à la personne qui demande : client, salarié, auditeur ou régulateur.",
  },
  {
    term: "Analyse d'impact d'un système d'IA",
    def: "Examen, avant et pendant l'usage, des effets d'un système sur les personnes, les groupes et la société. ISO/IEC 42005 en donne la méthode ; le RGPD et l'AI Act l'exigent dans certains cas.",
  },
  {
    term: 'ISO/IEC 42001',
    def: "Norme internationale qui décrit comment organiser le pilotage de l'IA dans une organisation, publiée en décembre 2023 et certifiable. Elle organise politique, rôles, évaluation des risques, contrôles et amélioration continue.",
  },
]

/* ───────── JSON-LD ───────── */

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'IA responsable : des principes aux preuves, usage par usage',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-02',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['IA responsable', 'IA éthique et responsable', 'ISO/IEC 42001', 'ISO/IEC 42005', 'AI Act', 'Supervision humaine'],
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: "Glossaire de l'IA responsable",
  hasDefinedTerm: GLOSSARY.map(g => ({
    '@type': 'DefinedTerm',
    name: g.term,
    description: g.def,
  })),
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
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

export default function IAResponsablePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections Principes / Business / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: "Gouvernance de l'IA", slug: 'gouvernance-ia' },
    { name: 'IA responsable', slug: SLUG },
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
        citations={REFERENCES}
        datePublished="2026-07-02"
        dateModified="2026-10-07"
        extraJsonLd={[articleJsonLd, definedTermSetJsonLd]}
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/gouvernance-ia" style={{ color: '#94A3B8' }}>Gouvernance de l'IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>IA responsable</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Éthique, impacts et preuves
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            IA responsable
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des principes aux preuves, usage par usage</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · normes et échéances vérifiées le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'IA responsable rassemble les principes et les pratiques qui rendent un système d'IA transparent, supervisé, équitable, robuste et respectueux des données. <strong style={{ color: '#fff', fontWeight: 700 }}>Elle se prouve : par des contrôles posés dans les processus, des mesures relevées et un référentiel qu'un tiers peut auditer.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Le mot circule dans les rapports annuels et les appels d'offres. Derrière lui se trouvent des exigences précises : l'AI Act, le RGPD, les normes ISO/IEC 42001 (système de management) et 42005 (analyse d'impact). Cabinet lyonnais consacré à l'IA depuis 2022, Masteria aide les organisations à passer de la déclaration au dispositif. Cette page définit l'IA responsable, la distingue de l'IA éthique, montre comment mesurer ses impacts et décrit la méthode.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#principes" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Lire les six principes
            </a>
          </div>

          {/* tags de compétences */}
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
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 132px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── DÉFINITION + LES SIX PRINCIPES (éditorial asymétrique) ── */}
      <section id="principes" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Définition</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce que l'IA responsable ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>L'IA responsable désigne les principes et les pratiques qui gardent un système d'intelligence artificielle transparent, supervisé par des personnes, équitable, robuste et respectueux des données. Six principes la structurent, et chacun appelle des contrôles précis : transparence et explicabilité, supervision humaine, équité, vie privée, robustesse et sécurité, responsabilité et traçabilité.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Un principe que rien n'applique reste une intention. La suite de la page décline les six en gestes concrets, puis les rattache aux textes et aux normes qui permettent de vérifier qu'on s'y tient.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PRINCIPES.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                L'intensité de chaque principe se règle sur l'impact de l'usage. Le volet données est traité sur la page <Link to="/ia-et-rgpd" style={aStyle}>IA et RGPD</Link> ; les règles que vos salariés appliqueront prennent la forme d'une <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IA ÉTHIQUE VS IA RESPONSABLE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Éthique et responsabilité</Kicker>
          <h2 style={h2Style}>
            IA éthique et responsable : quelle différence ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>L'IA éthique pose des valeurs : équité, respect des personnes, bien commun. L'IA responsable les convertit en pratiques que l'on peut contrôler : processus, indicateurs, référentiels. Dire « IA éthique et responsable », c'est promettre les deux, des valeurs et la preuve qu'on les tient.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 18px' }}>
            Les <a href="https://digital-strategy.ec.europa.eu/fr/library/ethics-guidelines-trustworthy-ai" target="_blank" rel="noopener noreferrer" style={aStyle}>lignes directrices pour une IA digne de confiance</a>, publiées le 8 avril 2019 par le groupe d'experts de haut niveau réuni par la Commission européenne, montrent ce passage. Elles partent de quatre principes éthiques (respect de l'autonomie humaine, prévention des préjudices, équité, explicabilité) et les déclinent en sept exigences : action et contrôle humains, robustesse technique et sécurité, respect de la vie privée et gouvernance des données, transparence, diversité, non-discrimination et équité, bien-être sociétal et environnemental, responsabilité. L'AI Act a donné force de loi à plusieurs d'entre elles en 2024.
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            Pour une entreprise, la conséquence est pratique. Quand un client, un candidat ou un auditeur vous interroge sur votre démarche, il attend une description : les contrôles en place, les mesures relevées, le référentiel retenu. Le tableau suivant fait ce lien, principe par principe, avec une septième ligne consacrée à l'impact sur les personnes.
          </p>
        </div>
      </section>

      {/* ── DES PRINCIPES À LA PRATIQUE (ancre sombre · pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Des principes aux référentiels</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment passer des principes à la pratique ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Chaque principe se traduit en pratiques rattachées à un texte ou à une norme qu'un tiers peut vérifier : l'AI Act pour la transparence, la supervision et la robustesse, le RGPD et la CNIL pour les données, ISO/IEC 42001 pour la responsabilité, ISO/IEC 42005 et l'article 27 de l'AI Act pour l'impact, les lignes directrices de 2019 pour l'équité.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Un principe pèse quand son application se contrôle, se mesure et s'audite. Le tableau donne, pour chacun, le geste attendu et le texte qui permet de le vérifier ; les dates suivent le calendrier applicable à la date du 7 octobre 2026.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Principes d'IA responsable, pratiques attendues et textes de référence" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Principe</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '44%' }}>Ce que l'on met en place</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '34%' }}>Texte ou norme qui permet de le vérifier</th>
                </tr>
              </thead>
              <tbody>
                {PRACTICE_TABLE.map((row, i) => (
                  <tr key={row.principe} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.principe}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.pratique}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.referentiel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#94A3B8', fontSize: 13.5, lineHeight: 1.7, margin: '18px 0 0', maxWidth: 880 }}>
            À consulter en ligne : <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>l'AI Act sur EUR-Lex</a>, la <a href="https://www.cnil.fr/fr/intelligence-artificielle" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>doctrine de la CNIL en matière d'IA</a>, la fiche <a href="https://www.iso.org/fr/standard/81230.html" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>ISO/IEC 42001</a> et la fiche <a href="https://www.iso.org/standard/44545.html" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>ISO/IEC 42005</a> sur le site de l'ISO, ainsi que les <a href="https://digital-strategy.ec.europa.eu/fr/library/ethics-guidelines-trustworthy-ai" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>lignes directrices européennes de 2019</a>.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE (timeline à rail) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment mettre en place une démarche d'IA responsable ?
          </h2>

          <p style={answerStyle}>
            <strong>Une démarche d'IA responsable s'installe en cinq étapes : cartographier les usages et leurs effets sur les personnes, choisir les principes applicables, poser les contrôles humains, mesurer, puis réviser. Elle prend corps dans le dispositif de gouvernance, avec un registre, une charte et un comité.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Les étapes s'emboîtent : un contrôle suppose la carte des usages, une mesure suppose un contrôle déjà en place.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
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

          {/* Sur le terrain : deux cas anonymisés */}
          <div style={{ ...cardStyle, background: '#F9FAFB', padding: 'clamp(20px, 3vw, 28px)', marginTop: 36 }}>
            <div style={{ ...kickerStyle, marginBottom: 10 }}>Sur le terrain</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
              {CAS.map(cas => (
                <li key={cas.id} style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>
                  {cas.texte}{' '}
                  <Link to={`/etudes-de-cas-ia#${cas.id}`} style={{ ...aStyle, whiteSpace: 'nowrap' }}>Ouvrir le cas</Link>
                </li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '36px 0 0' }}>
            La carte des usages alimente le registre, les principes passent dans la charte et le comité suit les mesures : notre page <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link> détaille ce dispositif, la <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link> en est la pièce que voient les équipes.
          </p>
        </div>
      </section>

      {/* ── CE QUE LA DÉMARCHE RAPPORTE (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Ce que la démarche rapporte</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi l'IA responsable est-elle un avantage business ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: 0 }}>
                <strong>Une démarche d'IA responsable produit des effets visibles sur l'activité : des réponses étayées dans les appels d'offres, des obligations de l'AI Act préparées, des décisions assistées mieux contrôlées, des équipes qui adoptent les outils en confiance.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {BUSINESS.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={card.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour inscrire ces effets dans vos choix de direction, voyez notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> ; pour mesurer d'abord votre point de départ, le <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> couvre aussi la dimension réglementaire.
              </p>
            </div>
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
                IA responsable : réponses aux questions courantes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Un usage sensible à évaluer, un client qui demande votre politique d'IA ?
              </p>
              <Link to={RDV} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Abordons-le pendant le cadrage
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

      {/* ── BANDEAU : Masteria installe et forme ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Conseil et formation</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Masteria installe le dispositif, puis forme ceux qui le tiendront
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Deux voies, qui se complètent. En conseil, nous posons le dispositif : carte des usages, analyse d'impact des usages sensibles, charte et politique, comité, plan de conformité ; la mission se règle au forfait et ne relève pas du financement de l'OPCO. En formation, vos équipes prennent en main l'IA et ses cadres ; ces journées à 1 980 € HT, en intra ou en individuel, entrent dans le périmètre Qualiopi de Masteria.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link to="/gouvernance-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  La mission de gouvernance IA
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/formation-intelligence-artificielle" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Les formations à l'intelligence artificielle
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE + REPÈRES + SOURCES ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Prolonger la démarche
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Du dispositif de gouvernance à la formation des équipes, les pages qui donnent une suite concrète aux principes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Rôles', desc: "Qui décide, qui contrôle, qui répond : le registre, le comité et le référent qui font tenir les principes." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Document', desc: "Le document que lisent les salariés, rubrique par rubrique, de la relecture humaine à la transparence." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Données', desc: "Le principe de vie privée appliqué article par article, analyse d'impact et contrats compris." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Formation', desc: "Former ceux qui porteront la conformité : dates, niveaux de risque, plan d'action." },
              { label: 'Rendre un système auditable', href: '/blog/auditabilite-systeme-ia', tag: 'Article', desc: "Les traces à conserver pour qu'un principe affiché se vérifie le jour d'un contrôle." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Point d'entrée", desc: "Situer votre maturité, usages sensibles et règles en place compris, avant de lancer la démarche." },
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
                  <ArrowRight size={15} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          {/* Repères datés et sourcés, citables par les moteurs de réponse (GEO) */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '52px 0 16px' }}>
            Quatre dates pour situer l'IA responsable
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, margin: '0 0 12px' }}>
            {[
              { stat: '8 avril 2019', label: "publication des lignes directrices européennes pour une IA digne de confiance et de leurs sept exigences", source: "Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/library/ethics-guidelines-trustworthy-ai' },
              { stat: 'Décembre 2023', label: "parution d'ISO/IEC 42001, première norme certifiable pour organiser le pilotage de l'IA", source: 'ISO', url: 'https://www.iso.org/fr/standard/81230.html' },
              { stat: 'Mai 2025', label: "parution d'ISO/IEC 42005, qui guide l'évaluation des effets d'un système d'IA sur les individus et la société", source: 'ISO', url: 'https://www.iso.org/standard/44545.html' },
              { stat: '2 août 2026', label: "l'AI Act impose, par son article 50, d'annoncer les agents conversationnels et de signaler les hypertrucages diffusés", source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
            ].map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: '#0A0A0A', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>
                  Source : <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#6B7280', textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.source}</a>
                </p>
              </div>
            ))}
          </div>

          {/* Définitions clés */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '52px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Cinq mots à employer avec précision
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16, maxWidth: 880 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence : liens d'autorité suivis */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '52px 0 16px' }}>
            Les référentiels cités sur cette page
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {REFERENCES.map(r => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'flex-start', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 4 }} aria-hidden="true" /> {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan a fondé Masteria avec une conviction : une technologie ne vaut que par ce qu'elle permet aux personnes qui s'en servent. Sa dernière relecture date du 7 octobre 2026, normes ISO et échéances de l'AI Act comprises ; vous trouverez son parcours sur <Link to="/mathias-nizan" style={aStyle}>sa page de fondateur</Link>.
          </p>
          <PressMention />
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>30 minutes de cadrage offertes</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Montrez ce que vos principes deviennent dans vos processus
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Racontez-nous comment l'IA sert chez vous et ce que vous affichez déjà : charte, engagements RSE, réponses aux appels d'offres. Trente minutes suffisent pour repérer les principes qui s'appliquent, les contrôles qui manquent et le référentiel qui vous servira de cadre. Cette lecture vous reste acquise, sans engagement.
            </p>
            <Link to={RDV} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Principes, contrôles, mesures · AI Act, RGPD, ISO/IEC 42001 et 42005 · France, Europe, États-Unis, Inde
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
