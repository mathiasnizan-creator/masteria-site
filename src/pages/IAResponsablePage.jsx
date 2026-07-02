import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ShieldCheck, ListChecks, Users, Eye,
  Scale, Target, Lock, BookOpen,
  ExternalLink, GraduationCap, ClipboardCheck, Building2,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « IA responsable » (slug /ia-responsable). Cible : « ia responsable »,
 * « ia éthique et responsable », « ia éthique entreprise », « principes ia responsable »,
 * « iso 42001 ».
 *
 * THÈSE : l'IA responsable se joue dans les processus, la supervision et la mesure.
 * Une déclaration de principes reste un vœu tant qu'aucun dispositif ne la porte.
 * La page traduit chaque principe en pratique opérationnelle et l'adosse à un
 * référentiel vérifiable (AI Act, RGPD/CNIL, ISO/IEC 42001, lignes directrices
 * européennes de 2019).
 *
 * INTÉGRITÉ : aucun cas client nommé, aucun chiffre de résultat inventé. Faits
 * sourcés uniquement (EUR-Lex, CNIL, ISO, Commission européenne), liens cliquables.
 * Le conseil en gouvernance n'est pas finançable OPCO ; seules les formations
 * Qualiopi le sont (1 980 € HT par jour).
 *
 * Design premium identique à /gouvernance-ia : hero sombre #0A0F1E, icônes lucide
 * (zéro emoji), accent unique #2563EB, réponses directes citables, une seule ancre
 * sombre au milieu de page (tableau principes / pratiques / référentiels), patron
 * éditorial asymétrique sticky, timeline à rail, FAQ maxHeight.
 */

const SLUG = 'ia-responsable'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'IA responsable : principes, pratiques et ISO 42001 | Masteria'
const META_DESC = "IA responsable : définition, 6 principes, différence avec l'IA éthique, ISO/IEC 42001, AI Act et méthode en 5 étapes pour passer des principes à la pratique."
const KEYWORDS = "ia responsable, intelligence artificielle responsable, ia éthique et responsable, ia éthique entreprise, principes ia responsable, iso 42001, iso/iec 42001, démarche ia responsable, ia responsable en entreprise, ia digne de confiance, supervision humaine, explicabilité de l'ia, ia responsable définition"

const SITE = 'https://www.master-ia.fr'
const FULL_URL = `${SITE}/${SLUG}`

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
  { icon: ListChecks,     label: 'Six principes opérationnels' },
  { icon: Eye,            label: 'Supervision humaine' },
  { icon: Scale,          label: 'AI Act & RGPD' },
  { icon: ClipboardCheck, label: 'ISO/IEC 42001' },
]

/* ───────── En bref (synthèse citable · GEO) ───────── */

const EN_BREF = [
  { label: 'Définition', value: "L'IA responsable traduit des principes (transparence, supervision humaine, équité, protection des données, robustesse, responsabilité) en pratiques vérifiables et mesurées" },
  { label: 'Éthique vs responsable', value: "L'IA éthique fixe les valeurs ; l'IA responsable les convertit en processus, contrôles et indicateurs" },
  { label: 'Référentiels', value: "AI Act (Règlement UE 2024/1689), RGPD et recommandations CNIL, ISO/IEC 42001:2023, lignes directrices européennes pour une IA digne de confiance (2019)" },
  { label: 'Méthode', value: "Cinq étapes : cartographier les usages, définir les principes applicables, poser la supervision et les contrôles, mesurer, améliorer en continu" },
  { label: 'Notre rôle', value: "Conseil en gouvernance IA (prestation de service, non finançable OPCO) et formations certifiées Qualiopi (finançables)" },
  { label: 'Zone', value: "Lyon, France, Suisse, Belgique · distanciel et présentiel" },
]

/* ───────── Les six principes de l'IA responsable (cartes) ───────── */

const PRINCIPES = [
  {
    icon: Eye,
    title: 'Transparence et explicabilité',
    desc: "Les personnes savent quand elles interagissent avec une IA et l'organisation peut expliquer comment un système produit ses résultats : mentions visibles sur les contenus générés, documentation de chaque système, capacité à justifier une décision assistée auprès d'un client ou d'un salarié.",
  },
  {
    icon: Users,
    title: 'Supervision humaine',
    desc: "Un humain garde le contrôle sur les décisions sensibles prises ou assistées par l'IA : points de validation définis dans les processus métier, droit de reprise sur le système, personnes habilitées à superviser chaque usage.",
  },
  {
    icon: Scale,
    title: 'Équité et gestion des biais',
    desc: "Les systèmes traitent les personnes de manière équitable, quels que soient leur origine, leur genre ou leur situation. Cela se vérifie par des tests sur des populations variées, la mesure des écarts de traitement et la correction de ce qui produit des biais.",
  },
  {
    icon: Lock,
    title: 'Protection des données et vie privée',
    desc: "Les données personnelles mobilisées par l'IA restent protégées au niveau exigé par le RGPD : base légale vérifiée pour chaque traitement, minimisation des données transmises aux outils, encadrement contractuel des flux vers les fournisseurs d'IA.",
  },
  {
    icon: ShieldCheck,
    title: 'Robustesse et sécurité',
    desc: "Les systèmes fonctionnent de manière fiable, y compris face aux erreurs, aux dérives du modèle et aux attaques : tests avant mise en production, surveillance des sorties dans la durée, plan de repli quand le système produit des résultats aberrants.",
  },
  {
    icon: ClipboardCheck,
    title: 'Responsabilité et traçabilité',
    desc: "Chaque système d'IA a un propriétaire identifié et ses usages laissent une trace exploitable : responsable désigné par usage, journalisation des décisions assistées, revues régulières inscrites dans un système de management type ISO/IEC 42001.",
  },
]

/* ───────── Des principes aux référentiels (tableau · ancre sombre) ───────── */

const PRACTICE_TABLE = [
  {
    principe: 'Transparence et explicabilité',
    pratique: 'Signalement des contenus générés et des interactions avec une IA, documentation des systèmes.',
    referentiel: 'AI Act (Règlement UE 2024/1689), obligations de transparence',
  },
  {
    principe: 'Supervision humaine',
    pratique: 'Points de validation humaine sur les décisions sensibles, droit de reprise, superviseurs habilités.',
    referentiel: 'AI Act (Règlement UE 2024/1689), exigences des systèmes à haut risque',
  },
  {
    principe: 'Équité et gestion des biais',
    pratique: 'Tests sur des populations variées, mesure et correction des écarts de traitement.',
    referentiel: "Lignes directrices européennes pour une IA digne de confiance (2019)",
  },
  {
    principe: 'Protection des données et vie privée',
    pratique: 'Base légale par traitement, minimisation, encadrement contractuel des flux de données.',
    referentiel: 'RGPD et recommandations de la CNIL',
  },
  {
    principe: 'Robustesse et sécurité',
    pratique: 'Tests avant mise en production, surveillance des dérives, plan de repli.',
    referentiel: 'AI Act (Règlement UE 2024/1689), gestion des risques',
  },
  {
    principe: 'Responsabilité et traçabilité',
    pratique: "Propriétaire par système, journalisation, revues d'amélioration continue.",
    referentiel: "ISO/IEC 42001:2023, système de management de l'IA",
  },
]

/* ───────── Méthode (5 étapes · timeline à rail) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cartographier les usages et leurs impacts',
    desc: "Recensez chaque usage d'IA en place ou en projet : finalité, données mobilisées, personnes concernées, conséquences d'une erreur. Cette cartographie hiérarchise les usages selon leurs impacts et fixe le périmètre de la démarche d'IA responsable.",
  },
  {
    num: '02',
    title: 'Définir les principes applicables',
    desc: "Pour chaque usage cartographié, déterminez les principes qui s'appliquent et à quel degré : un agent conversationnel client appelle la transparence, un usage RH appelle l'équité et une supervision renforcée. Les principes se déclinent en règles précises, adossées aux référentiels (AI Act, RGPD, ISO/IEC 42001).",
  },
  {
    num: '03',
    title: 'Poser la supervision humaine et les contrôles',
    desc: "Installez les points de contrôle : qui valide quoi, à quel moment, avec quel droit de reprise sur le système. La supervision humaine se matérialise dans les processus métier, avec une journalisation qui rend chaque décision assistée traçable.",
  },
  {
    num: '04',
    title: 'Mesurer',
    desc: "Suivez des indicateurs concrets : erreurs détectées, écarts de traitement entre populations, incidents, usages hors cadre. La mesure apporte la preuve que les principes sont respectés en production ; elle nourrit les revues du comité IA.",
  },
  {
    num: '05',
    title: 'Améliorer en continu',
    desc: "Revoyez le dispositif à intervalle régulier : nouveaux usages à intégrer, contrôles à ajuster, indicateurs à faire évoluer. C'est la logique d'amélioration continue portée par ISO/IEC 42001, qui fait vivre le système de management de l'IA dans la durée.",
  },
]

/* ───────── Avantage business (4 cartes factuelles) ───────── */

const BUSINESS = [
  {
    icon: Building2,
    title: 'Confiance clients et appels d\'offres',
    desc: "Les donneurs d'ordres intègrent des exigences d'IA responsable dans leurs consultations : politique IA documentée, supervision des décisions, conformité des traitements de données. Un dispositif formalisé fournit des réponses opposables, pièces à l'appui.",
  },
  {
    icon: Scale,
    title: 'Conformité anticipée',
    desc: "L'AI Act, entré en vigueur le 1ᵉʳ août 2024, est applicable par paliers depuis février 2025. Les organisations qui installent leur démarche d'IA responsable en amont couvrent déjà une large part des obligations : transparence, supervision humaine, documentation, gestion des risques.",
  },
  {
    icon: Target,
    title: 'Qualité des décisions',
    desc: "La supervision humaine et la mesure des écarts fiabilisent les décisions assistées par l'IA : les erreurs sont détectées et corrigées, avec une trace exploitable. Le dispositif agit comme un contrôle qualité permanent sur les usages.",
  },
  {
    icon: Users,
    title: 'Adoption interne',
    desc: "Un cadre clair facilite l'adoption : les équipes savent ce qui est autorisé, ce qui est encadré et qui supervise quoi. La confiance dans les outils progresse quand les règles du jeu sont posées et connues de tous.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que l'IA responsable ?",
    a: "L'IA responsable, ou intelligence artificielle responsable, désigne l'ensemble des principes et des pratiques qui garantissent qu'un système d'intelligence artificielle est transparent, supervisé par l'humain, équitable, sûr et respectueux des données personnelles. Six principes la structurent : transparence et explicabilité, supervision humaine, équité et gestion des biais, protection des données et vie privée, robustesse et sécurité, responsabilité et traçabilité. Une démarche d'IA responsable les traduit en processus concrets : registre des usages, points de contrôle humain, indicateurs mesurés, revues régulières. Le critère décisif reste la vérifiabilité : chaque principe affiché doit pouvoir être audité.",
  },
  {
    q: "Quelle différence entre IA éthique et IA responsable ?",
    a: "L'IA éthique relève des valeurs : équité, respect des personnes, bien commun. L'IA responsable les transforme en pratiques concrètes : processus, contrôles, indicateurs et référentiels comme l'AI Act, le RGPD ou ISO/IEC 42001. Quand une organisation parle d'IA éthique et responsable, elle associe les deux niveaux : les valeurs qu'elle se donne et les preuves qu'elle peut produire. Face à une telle déclaration, la question utile porte sur le dispositif : les contrôles en place, les mesures suivies et le référentiel qui sert de cadre.",
  },
  {
    q: "Qu'est-ce que la norme ISO/IEC 42001 ?",
    a: "ISO/IEC 42001:2023 est la première norme internationale de système de management de l'intelligence artificielle, publiée en décembre 2023 par l'ISO et l'IEC. Elle définit les exigences pour établir, mettre en œuvre, maintenir et améliorer en continu le dispositif qui encadre l'IA d'une organisation : politique, rôles et responsabilités, évaluation des impacts, contrôles, amélioration continue. Elle est certifiable : un organisme tiers peut auditer votre dispositif et attester sa conformité, sur le modèle d'ISO/IEC 27001 pour la sécurité de l'information. Pour une entreprise, elle apporte un référentiel structuré et une preuve opposable de sa démarche d'IA responsable.",
  },
  {
    q: "L'IA responsable est-elle obligatoire ?",
    a: "La démarche d'ensemble est volontaire, plusieurs de ses pratiques sont des obligations légales. L'AI Act (Règlement UE 2024/1689), entré en vigueur le 1ᵉʳ août 2024 et applicable par paliers jusqu'en 2027, impose la transparence, la supervision humaine et la gestion des risques selon le niveau de risque de chaque système. Le RGPD, en application depuis le 25 mai 2018, encadre tout traitement de données personnelles, y compris par un système d'IA. La certification ISO/IEC 42001 reste volontaire. Une démarche d'IA responsable couvre ces obligations et les organise dans un dispositif cohérent, au lieu de les traiter en silos.",
  },
  {
    q: "Par où commencer une démarche d'IA responsable ?",
    a: "Par la cartographie des usages : recensez les systèmes d'IA en place ou en projet, leurs finalités, les données qu'ils mobilisent et l'impact d'une erreur pour les personnes concernées. Ce premier état des lieux classe les priorités et dimensionne la suite de la démarche : principes applicables à chaque usage, contrôles à poser, indicateurs à suivre. Pour les organisations qui partent de zéro, notre diagnostic IA cadre ce point de départ, dimension responsable et réglementaire comprise.",
  },
  {
    q: "Quel lien entre l'IA responsable et la gouvernance de l'IA ?",
    a: "L'IA responsable fixe le cap : les principes et leur traduction en pratiques. La gouvernance de l'IA fournit le dispositif qui les fait vivre : registre des usages, charte et politique IA, comité de gouvernance, plan de conformité. Une démarche d'IA responsable s'incarne dans ce dispositif ; hors de lui, elle reste déclarative. Concrètement, la cartographie alimente le registre, les principes se traduisent dans la charte et le comité pilote la mesure puis l'amélioration continue. Notre page gouvernance de l'IA détaille le dispositif et l'accompagnement que nous proposons pour le mettre en place.",
  },
]

/* ───────── Définitions clés (ancrage d'entités · JSON-LD DefinedTermSet) ───────── */

const GLOSSARY = [
  {
    term: 'IA responsable',
    def: "Ensemble des principes et des pratiques qui garantissent qu'un système d'intelligence artificielle est transparent, supervisé par l'humain, équitable, sûr et respectueux des données personnelles, avec des preuves vérifiables à l'appui.",
  },
  {
    term: 'IA éthique',
    def: "Réflexion sur les valeurs qui doivent guider la conception et l'usage de l'intelligence artificielle : équité, respect des personnes, bien commun. Elle fixe le cap que l'IA responsable traduit en pratiques vérifiables.",
  },
  {
    term: 'Explicabilité',
    def: "Capacité à expliquer comment un système d'IA produit un résultat donné, à un niveau de détail adapté à l'interlocuteur : client, salarié, auditeur ou régulateur.",
  },
  {
    term: 'Supervision humaine',
    def: "Maintien d'un contrôle humain sur les décisions prises ou assistées par un système d'IA, avec des points de validation définis et un droit de reprise sur le système. Exigence de l'AI Act pour les systèmes à haut risque.",
  },
  {
    term: 'ISO/IEC 42001',
    def: "Première norme internationale de système de management de l'intelligence artificielle, publiée en décembre 2023. Elle définit les exigences pour établir, mettre en œuvre, maintenir et améliorer en continu le dispositif qui encadre l'IA d'une organisation, et elle est certifiable.",
  },
]

/* ───────── Sources de référence (liens d'autorité) ───────── */

const REFERENCES = [
  { label: 'AI Act, texte officiel (EUR-Lex, Règlement UE 2024/1689)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "Lignes directrices en matière d'éthique pour une IA digne de confiance (Commission européenne, 2019)", url: 'https://digital-strategy.ec.europa.eu/fr/library/ethics-guidelines-trustworthy-ai' },
  { label: 'Intelligence artificielle et RGPD (CNIL)', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { label: "ISO/IEC 42001:2023, système de management de l'IA (ISO)", url: 'https://www.iso.org/fr/standard/81230.html' },
]

/* ───────── JSON-LD ───────── */

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'IA responsable : des principes aux pratiques vérifiables',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-02',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['IA responsable', 'IA éthique et responsable', 'ISO/IEC 42001', 'AI Act', 'Supervision humaine'],
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
        datePublished="2026-07-02"
        dateModified="2026-07-02"
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
              IA responsable en entreprise
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            IA responsable
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des principes aux pratiques vérifiables</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            L'IA responsable désigne l'ensemble des principes et des pratiques qui garantissent qu'un système d'IA est transparent, supervisé par l'humain, équitable, sûr et respectueux des données. <strong style={{ color: '#fff', fontWeight: 700 }}>Elle se joue dans les processus, la supervision et la mesure : une déclaration de principes reste un vœu tant qu'aucun dispositif ne la porte.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            L'expression recouvre des exigences précises, encadrées par des textes et des normes : AI Act, RGPD, ISO/IEC 42001. Organisme de formation et cabinet de conseil spécialisé sur l'IA, fondé à Lyon, Masteria traduit ces exigences en dispositifs concrets. Cette page définit l'IA responsable, la différencie de l'IA éthique et détaille la méthode pour l'installer dans votre organisation.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre démarche IA responsable
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#principes" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Découvrir les six principes
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
                <strong>L'IA responsable désigne l'ensemble des principes et des pratiques qui garantissent qu'un système d'intelligence artificielle est transparent, supervisé par l'humain, équitable, sûr et respectueux des données personnelles. Six principes la structurent : transparence et explicabilité, supervision humaine, équité et gestion des biais, protection des données et vie privée, robustesse et sécurité, responsabilité et traçabilité.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Chaque principe appelle des pratiques précises et un référentiel qui permet de les vérifier. La suite de cette page traduit les six principes en pratiques opérationnelles, puis les adosse aux textes et aux normes de référence.
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
                Ces principes s'appliquent usage par usage, avec une intensité proportionnée aux impacts. Le volet données est détaillé sur notre page <Link to="/ia-et-rgpd" style={aStyle}>IA et RGPD</Link> ; les règles internes qui en découlent prennent la forme d'une <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>.
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
            <strong>L'IA éthique fixe les valeurs : équité, respect des personnes, bien commun. L'IA responsable traduit ces valeurs en pratiques vérifiables : processus, contrôles, indicateurs et référentiels. Parler d'IA éthique et responsable revient à associer les deux niveaux, celui des valeurs et celui des preuves.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 18px' }}>
            Les <a href="https://digital-strategy.ec.europa.eu/fr/library/ethics-guidelines-trustworthy-ai" target="_blank" rel="noopener noreferrer" style={aStyle}>lignes directrices pour une IA digne de confiance</a>, publiées en 2019 par le groupe d'experts de haut niveau mandaté par la Commission européenne, illustrent ce passage : elles partent de principes éthiques et les déclinent en sept exigences concrètes, dont la transparence, la robustesse technique et le contrôle humain. L'AI Act a ensuite donné une portée juridique à plusieurs de ces exigences. Le mouvement est constant depuis 2019 : les principes éthiques migrent vers des obligations légales et des normes auditables.
          </p>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            Pour une entreprise, la conséquence est directe. Quand un client, un candidat ou un auditeur interroge votre démarche d'IA éthique et responsable, la réponse attendue décrit un dispositif : quels contrôles sont en place, quelles mesures sont suivies, quel référentiel sert de cadre. Le tableau suivant fait ce lien, principe par principe.
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
            <strong style={{ color: '#fff' }}>Chaque principe d'IA responsable se traduit en pratiques opérationnelles adossées à un référentiel vérifiable : l'AI Act (Règlement UE 2024/1689) couvre la transparence, la supervision humaine et la robustesse ; le RGPD et la CNIL encadrent les données ; ISO/IEC 42001:2023 structure la responsabilité et l'amélioration continue ; l'équité s'appuie sur les lignes directrices européennes de 2019.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 28, lineHeight: 1.7, maxWidth: 880 }}>
            Le tableau relie chaque principe à sa traduction opérationnelle et au référentiel qui permet de la vérifier. C'est le cœur de la démarche : un principe pèse quand son application se contrôle, se mesure et s'audite.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Traduction des principes d'IA responsable en pratiques opérationnelles et référentiels" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Principe</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '46%' }}>Traduction opérationnelle</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '32%' }}>Référentiel de référence</th>
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
            Référentiels consultables en ligne : le <a href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>texte de l'AI Act sur EUR-Lex</a>, les <a href="https://www.cnil.fr/fr/intelligence-artificielle" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>recommandations de la CNIL sur l'intelligence artificielle</a>, la <a href="https://www.iso.org/fr/standard/81230.html" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>norme ISO/IEC 42001:2023 sur le site de l'ISO</a> et les <a href="https://digital-strategy.ec.europa.eu/fr/library/ethics-guidelines-trustworthy-ai" target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>lignes directrices pour une IA digne de confiance de la Commission européenne</a>.
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
            <strong>Une démarche d'IA responsable se met en place en cinq étapes : cartographier les usages et leurs impacts, définir les principes applicables à chacun, poser la supervision humaine et les contrôles, mesurer des indicateurs concrets, puis améliorer le dispositif en continu. Elle s'incarne dans le dispositif de gouvernance de l'IA : registre des usages, charte, comité.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Les étapes s'enchaînent dans cet ordre parce que chacune s'appuie sur les livrables de la précédente : la supervision suppose la cartographie, la mesure suppose des contrôles déjà posés.
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

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '36px 0 0' }}>
            La démarche s'incarne dans le dispositif de gouvernance de l'IA : la cartographie alimente le registre des usages, les principes se traduisent dans la charte IA et le comité pilote la mesure puis l'amélioration continue. Notre page <Link to="/gouvernance-ia" style={aStyle}>gouvernance de l'IA</Link> détaille ce dispositif ; la <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link> en est la pièce la plus visible pour les équipes.
          </p>
        </div>
      </section>

      {/* ── AVANTAGE BUSINESS (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Avantage business</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi l'IA responsable est-elle un avantage business ?
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: 0 }}>
                <strong>Une démarche d'IA responsable produit des effets directs sur l'activité : garanties documentées pour les appels d'offres, obligations de l'AI Act anticipées, décisions assistées plus fiables grâce à la supervision et à la mesure, adoption des outils facilitée par un cadre clair.</strong>
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
                Pour inscrire ces effets dans votre stratégie, voyez notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> ; pour objectiver votre point de départ, notre <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> couvre la dimension responsable et réglementaire.
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
                IA responsable : les questions fréquentes
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

      {/* ── BANDEAU : Masteria accompagne et forme ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Conseil et formation, distincts</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Masteria installe le dispositif et forme vos équipes
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                L'IA responsable décrite sur cette page s'installe par deux voies complémentaires. En conseil, nous mettons en place le dispositif de gouvernance : registre des usages, charte et politique IA, comité, plan de conformité ; cette prestation de service n'est pas finançable par l'OPCO. En formation, notre organisme certifié Qualiopi rend vos équipes autonomes sur l'IA et ses cadres réglementaires ; ces formations sont finançables et facturées 1 980 € HT par jour, quel que soit le format.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link to="/gouvernance-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Découvrir le conseil en gouvernance IA
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/formation-intelligence-artificielle" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                  Découvrir la formation intelligence artificielle
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
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
            Explorer les pages qui prolongent la démarche d'IA responsable, du dispositif de gouvernance à la formation des équipes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Gouvernance de l'IA", href: '/gouvernance-ia', tag: 'Conseil', desc: "Le dispositif qui fait vivre l'IA responsable : audit, registre des usages, politique, comité." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Cadre interne', desc: "Le document qui fixe les règles d'usage de l'IA pour vos équipes, principe par principe." },
              { label: 'IA et RGPD', href: '/ia-et-rgpd', tag: 'Conformité', desc: "La protection des données appliquée aux systèmes d'IA : base légale, minimisation, flux fournisseurs." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Formation', desc: "La montée en compétences de vos équipes sur l'IA, certifiée Qualiopi et finançable." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, feuille de route et cadrage des projets IA au niveau de la direction." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Le point de départ qui cadre votre maturité IA, démarche responsable comprise." },
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

          {/* Repères chiffrés sourcés — citables par les moteurs de réponse (GEO) */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '52px 0 16px' }}>
            Trois repères pour situer l'intelligence artificielle responsable
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, margin: '0 0 12px' }}>
            {[
              { stat: '7 exigences', label: "posées par les lignes directrices européennes pour une IA digne de confiance (2019), socle des principes de l'IA responsable", source: 'Groupe d\'experts de haut niveau, Commission européenne', url: 'https://digital-strategy.ec.europa.eu/fr/library/ethics-guidelines-trustworthy-ai' },
              { stat: 'Décembre 2023', label: "publication d'ISO/IEC 42001, première norme certifiable de système de management de l'intelligence artificielle", source: 'ISO', url: 'https://www.iso.org/fr/standard/81230.html' },
              { stat: '1ᵉʳ août 2024', label: "entrée en vigueur de l'AI Act (Règlement UE 2024/1689), qui transforme plusieurs principes de l'IA responsable en obligations", source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
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

          {/* Sources de référence : liens d'autorité suivis */}
          <h3 style={{ ...h3Style, fontSize: 20, margin: '52px 0 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Sources de référence
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {REFERENCES.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      <FounderNote />

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Passez des principes à la pratique
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos usages d'IA et votre niveau de maturité. Sous 24 heures, nous vous envoyons une première lecture de votre situation et une proposition de cadrage : principes applicables, contrôles à poser, référentiels pertinents. De quoi lancer votre démarche d'IA responsable sur des bases posées.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Cadrer votre démarche IA responsable
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Principes, supervision, mesure · AI Act, RGPD, ISO/IEC 42001 · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
