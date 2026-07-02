import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, BadgeCheck, Building2, Check, Clock, Compass, Cpu,
  GraduationCap, LineChart, MonitorSmartphone, Route, Scale, Target,
  Users, Workflow, BookOpen, ExternalLink, ShieldCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page service « Conseil stratégie IA » : modèle structurel des pages dédiées
 * (GestionDeProjetIAPage) : constantes en tête, SEOHead (FAQ + breadcrumbs),
 * hero avec badges, sections, FAQ, CTA contact. Pas de courseData : il s'agit
 * d'une prestation de conseil, pas d'une formation.
 * Cible : « conseil stratégie ia » (90/mois, KD 45), « conseil stratégique
 * intelligence artificielle », « conseil en transformation numérique et
 * intelligence artificielle ».
 */

const SLUG = 'conseil-strategie-ia'

/* ───────── Jetons de style (charte cabinet) ───────── */

const BLUE = '#2563EB'
const BLUE_SOFT = '#DBEAFE'
const INK = '#0A0A0A'
const GREY_700 = '#374151'
const GREY_500 = '#6B7280'
const BORDER = '#E5E7EB'
const BG_SOFT = '#F9FAFB'
const SECTION_PAD = 'clamp(64px, 9vw, 110px) clamp(20px, 4vw, 32px)'

const kickerStyle = {
  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
  textTransform: 'uppercase', color: BLUE, marginBottom: 14,
}
const h2Style = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 900,
  color: INK, lineHeight: 1.15, letterSpacing: '-0.02em',
  marginBottom: 18,
}
const cardStyle = {
  background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28,
}
const iconTileStyle = {
  width: 44, height: 44, borderRadius: 12, background: BLUE_SOFT,
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
}
// Réponse-directe encadrée (citable GEO) — pour les blocs éditoriaux
const answerStyle = {
  background: BG_SOFT, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${BLUE}`,
  borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7,
  color: INK, margin: '0 0 28px', maxWidth: 880,
}

const META_TITLE = "Conseil stratégie IA : audit, feuille de route | Masteria"
const META_DESC = "Conseil stratégie IA : diagnostic de maturité, cas d'usage priorisés par ROI, feuille de route 90 jours, puis développement des solutions. Cadrage gratuit."
const KEYWORDS = "conseil stratégie ia, stratégie ia entreprise, stratégie intelligence artificielle, feuille de route ia, schéma directeur ia, diagnostic maturité ia"
const INTRO = "Outils qui se multiplient, équipes qui s'équipent en ordre dispersé, budgets engagés sans indicateur de retour : les directions générales ont besoin d'un cap avant d'investir davantage. Notre mission de conseil stratégique en intelligence artificielle donne à votre COMEX une vision partagée, des priorités chiffrées et un plan d'exécution réaliste. Et parce qu'une stratégie ne vaut que par sa mise en œuvre, la même équipe développe et déploie ensuite les solutions retenues : de la feuille de route au build, sans rupture."

const HERO_BADGES = [
  { icon: Compass,           label: 'Cadrage gratuit de 30 minutes' },
  { icon: Building2,         label: 'PME, ETI et grands groupes' },
  { icon: MonitorSmartphone, label: 'Présentiel & distanciel' },
  { icon: BadgeCheck,        label: 'Formations associées certifiées Qualiopi' },
]

const PHASES = [
  {
    n: '01',
    title: 'Diagnostic de maturité',
    duration: '2 à 3 semaines',
    desc: "Entretiens avec la direction et les métiers, revue des outils, des données et des compétences en place. Vous obtenez un état des lieux objectif de votre maturité IA, fonction par fonction.",
    items: [
      'Entretiens direction et managers métier',
      'Revue de la stack, des données et des usages existants',
      'Scoring de maturité par fonction',
      'Synthèse des forces, des écarts et des risques',
    ],
  },
  {
    n: '02',
    title: "Cadrage des cas d'usage et priorisation ROI",
    duration: '1 à 2 semaines',
    desc: "Ateliers par métier pour identifier les cas d'usage, puis arbitrage en comité selon trois critères : impact business, faisabilité technique, risque réglementaire.",
    items: [
      "Ateliers d'idéation par direction",
      'Matrice impact × effort consolidée',
      "Estimation des gains et des coûts par cas d'usage",
      'Sélection de 3 à 5 chantiers prioritaires',
    ],
  },
  {
    n: '03',
    title: 'Feuille de route 90 jours / 12 mois',
    duration: '1 à 2 semaines',
    desc: "Un plan d'exécution à deux horizons : des gains rapides visibles à 90 jours pour créer la dynamique, une trajectoire à 12 mois pour structurer l'investissement.",
    items: [
      'Plan 90 jours : premiers déploiements et formations',
      'Trajectoire 12 mois : jalons, budget, responsabilités',
      'Indicateurs de suivi définis avant le lancement',
      'Restitution au COMEX et arbitrage final',
    ],
  },
  {
    n: '04',
    title: 'Gouvernance et conduite du changement',
    duration: '3 à 12 mois',
    desc: "Le cadre qui sécurise le déploiement dans la durée : comité IA, charte d'usage, conformité RGPD et AI Act, formation des équipes et mesure continue des gains.",
    items: [
      "Charte d'usage et registre des systèmes d'IA",
      'Comité de pilotage et rituels de suivi',
      'Plan de formation par population',
      'Mesure du ROI et ajustements trimestriels',
    ],
  },
]

const TABLE_PHASES = [
  { phase: '1. Diagnostic de maturité', duree: '2 à 3 semaines', livrable: 'Rapport de maturité IA, fonction par fonction' },
  { phase: "2. Cadrage et priorisation des cas d'usage", duree: '1 à 2 semaines', livrable: "Portefeuille de cas d'usage priorisé par ROI" },
  { phase: '3. Feuille de route 90 jours / 12 mois', duree: '1 à 2 semaines', livrable: 'Plan séquencé et budgété, validé en COMEX' },
  { phase: '4. Gouvernance et conduite du changement', duree: '3 à 12 mois', livrable: "Schéma de gouvernance et tableau d'indicateurs ROI" },
]

const POUR_QUI = [
  {
    Icon: Building2,
    title: 'DG et COMEX de PME-ETI',
    desc: "Vous devez arbitrer les investissements IA des 12 prochains mois et rendre des comptes sur leur retour. La démarche vous donne une base de décision objective, chiffrée et partagée par le comité de direction.",
  },
  {
    Icon: LineChart,
    title: 'Directions de la transformation',
    desc: "Vous pilotez le changement et devez aligner les métiers sur des priorités communes. La feuille de route séquencée devient votre référentiel unique pour cadencer les chantiers et suivre les gains.",
  },
  {
    Icon: Users,
    title: 'DSI et directions du numérique',
    desc: "Vous garantissez la cohérence du système d'information face à la multiplication des outils IA. Le schéma de gouvernance cadre les choix d'architecture, la sécurité des données et la conformité.",
  },
]

const LIVRABLES = [
  {
    Icon: BarChart3,
    title: 'Rapport de maturité IA',
    desc: "État des lieux par fonction : usages, données, compétences, risques. Le point de départ objectif de la stratégie.",
  },
  {
    Icon: Target,
    title: "Portefeuille de cas d'usage priorisé",
    desc: "Matrice impact × effort consolidée, gains et coûts estimés pour chaque cas d'usage retenu.",
  },
  {
    Icon: Route,
    title: 'Feuille de route 90 jours / 12 mois',
    desc: "Plan séquencé avec jalons, budget, responsabilités et prérequis techniques pour chaque chantier.",
  },
  {
    Icon: Scale,
    title: 'Schéma de gouvernance',
    desc: "Comité IA, charte d'usage interne, registre des systèmes, dispositif de conformité RGPD et AI Act.",
  },
  {
    Icon: GraduationCap,
    title: 'Plan de formation des équipes',
    desc: "Parcours par population (COMEX, managers, équipes métier), éligible OPCO grâce à notre certification Qualiopi.",
  },
  {
    Icon: LineChart,
    title: "Tableau d'indicateurs ROI",
    desc: "Indicateurs de productivité, de qualité et d'adoption, définis avant le lancement pour mesurer les gains réels.",
  },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'une stratégie IA d'entreprise ?",
    a: "Une stratégie IA d'entreprise est le cadre de référence qui fixe l'ambition, les cas d'usage prioritaires, le budget, le calendrier et la gouvernance du déploiement de l'intelligence artificielle. Elle répond à quatre questions : pourquoi investir, sur quels processus, avec quels outils et quels garde-fous, selon quel séquencement. Sans ce cadre, les initiatives restent dispersées et le retour sur investissement difficile à mesurer.",
  },
  {
    q: "Combien de temps faut-il pour définir une stratégie IA ?",
    a: "Comptez 4 à 8 semaines pour une PME ou une ETI : 2 à 3 semaines de diagnostic de maturité, 1 à 2 semaines d'ateliers de priorisation des cas d'usage, puis la formalisation de la feuille de route et du schéma de gouvernance. La conduite du changement s'étale ensuite sur 3 à 12 mois selon la taille de l'organisation.",
  },
  {
    q: "Combien coûte un conseil en stratégie IA ?",
    a: "La mission se chiffre sur devis, selon la taille de l'organisation, le nombre d'entretiens et la profondeur du diagnostic. Le premier échange de cadrage de 30 minutes est gratuit. Le conseil pur ne bénéficie d'aucun financement OPCO. Seules les formations associées (par exemple la formation IA pour dirigeants, à 1 980 € HT par jour) sont finançables grâce à la certification Qualiopi de Masteria.",
  },
  {
    q: "Quelle différence entre stratégie IA et conseil en transformation numérique ?",
    a: "Le conseil en transformation numérique et intelligence artificielle couvre l'ensemble du système d'information : outils collaboratifs, données, processus digitalisés. La stratégie IA en constitue le volet le plus récent : elle se concentre sur les usages de l'IA générative et prédictive, leur priorisation par ROI, leur gouvernance (RGPD, AI Act) et la montée en compétences des équipes. Les deux démarches se complètent et s'alignent sur le même schéma directeur.",
  },
  {
    q: "Faut-il former son COMEX avant de lancer la stratégie IA ?",
    a: "Une acculturation préalable du COMEX accélère nettement la démarche : les arbitrages de la phase de priorisation supposent de comprendre les capacités et les limites réelles des modèles. Masteria propose une formation IA dédiée aux dirigeants, souvent programmée en amont ou en parallèle du diagnostic de maturité. Les deux formats se combinent dans un même dispositif, avec un seul interlocuteur.",
  },
  {
    q: "Par où commencer une stratégie IA ?",
    a: "Par un diagnostic de maturité. Avant de fixer des priorités, il faut un état des lieux objectif : quels usages existent déjà, quelle est la qualité des données, quelles compétences sont en place, quels risques réglementaires pèsent. Ce diagnostic, mené en 2 à 3 semaines, sert de socle aux arbitrages. Chez Masteria, un premier échange de cadrage gratuit de 30 minutes permet de situer votre point de départ avant tout engagement.",
  },
  {
    q: "Quels sont les risques d'une stratégie IA mal cadrée, ou de son absence ?",
    a: "Sans cadre stratégique, les initiatives se dispersent : multiplication des licences et des outils en doublon, pilotes qui n'aboutissent jamais, budgets engagés sans indicateur de retour, usages non conformes au RGPD ou à l'AI Act. Gartner anticipe qu'au moins 30 % des projets d'IA générative seront abandonnés après la preuve de concept d'ici fin 2025, le plus souvent pour des raisons organisationnelles avant d'être techniques. Une stratégie formalisée concentre l'investissement sur les cas d'usage à valeur réelle et fixe les garde-fous en amont.",
  },
  {
    q: "Comment mesure-t-on le ROI d'une stratégie IA ?",
    a: "Sur trois dimensions, définies avant le lancement avec votre comité de pilotage : la productivité (temps gagné par collaborateur sur des tâches identifiées, mesuré avant et après), la qualité (réduction des erreurs, conformité, satisfaction) et la capacité (nouveaux usages rendus possibles). La feuille de route fixe les indicateurs cible pour chaque chantier prioritaire ; le suivi trimestriel compare les gains réels aux objectifs. Sans indicateurs posés en amont, le retour reste impossible à objectiver.",
  },
  {
    q: "Une PME a-t-elle vraiment besoin d'une stratégie IA ?",
    a: "Oui, à une échelle adaptée. Une PME n'a pas besoin d'un plan de transformation à plusieurs années, mais d'un cap clair sur 2 ou 3 cas d'usage prioritaires, d'un budget maîtrisé et de quelques règles de gouvernance. La démarche est plus courte et plus légère que pour un grand groupe, mais elle évite le même piège : équiper les équipes en ordre dispersé sans jamais mesurer le retour. Une feuille de route 90 jours suffit souvent à enclencher la dynamique.",
  },
  {
    q: "Qui doit porter la stratégie IA dans l'entreprise ?",
    a: "Le sponsor est la direction générale ou le COMEX, qui arbitre les investissements et donne le cap. L'exécution est confiée à un référent IA ou à la direction de la transformation, en lien avec la DSI pour les questions d'architecture, de sécurité et de données. Le rôle du conseil est d'outiller ces instances : base de décision chiffrée, feuille de route séquencée et schéma de gouvernance partagé, pour que la stratégie ne dépende pas d'une seule personne.",
  },
  {
    q: "Stratégie IA et AI Act : qu'est-ce qui est obligatoire ?",
    a: "L'AI Act européen (règlement 2024/1689), entré en vigueur le 1er août 2024, impose un cadre par niveau de risque : interdiction de certains usages depuis février 2025, obligations renforcées pour les systèmes à haut risque applicables à partir d'août 2026. Toute entreprise déployant des systèmes d'IA doit documenter ses usages, les classer par niveau de risque et tracer les flux de données, en complément du RGPD. C'est pourquoi la gouvernance et la conformité font partie intégrante de la feuille de route, et non d'un volet traité après coup.",
  },
]

/* ───────── Repères chiffrés (faits sourcés, citables) ───────── */

const MARKET_STATS = [
  {
    Icon: BarChart3,
    stat: '≥ 30 %',
    label: "des projets d'IA générative abandonnés après la preuve de concept d'ici fin 2025",
    source: 'Gartner, 2024',
  },
  {
    Icon: Scale,
    stat: '1ᵉʳ août 2024',
    label: "entrée en vigueur de l'AI Act européen (règlement 2024/1689), qui impose une gouvernance par niveau de risque",
    source: 'Commission européenne',
  },
  {
    Icon: ShieldCheck,
    stat: '25 mai 2018',
    label: "application du RGPD, socle de conformité de tout traitement de données par un système d'IA",
    source: 'CNIL',
  },
]

/* ───────── Définitions clés (ancrage d'entités pour la recherche générative) ───────── */

const GLOSSARY = [
  {
    term: 'Stratégie IA',
    def: "Cadre de référence qui fixe l'ambition, les cas d'usage prioritaires, le budget, le calendrier et la gouvernance du déploiement de l'intelligence artificielle dans une organisation.",
  },
  {
    term: 'Diagnostic de maturité IA',
    def: "État des lieux objectif, fonction par fonction, des usages, des données, des compétences et des risques en place. Point de départ de toute stratégie.",
  },
  {
    term: 'Feuille de route IA',
    def: "Plan d'exécution séquencé à deux horizons : gains rapides à 90 jours pour créer la dynamique, trajectoire à 12 mois pour structurer l'investissement.",
  },
  {
    term: 'Gouvernance IA',
    def: "Ensemble des règles, comités et documents (charte d'usage, registre des systèmes, conformité RGPD et AI Act) qui sécurisent le déploiement de l'IA dans la durée.",
  },
  {
    term: 'Priorisation par ROI',
    def: "Méthode d'arbitrage des cas d'usage selon trois critères croisés : impact business, faisabilité technique et niveau de risque réglementaire.",
  },
]

/* ───────── Sources de référence (liens d'autorité, suivis) ───────── */

const REFERENCES = [
  { label: "AI Act — texte officiel (EUR-Lex, règlement 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "Cadre réglementaire de l'IA — Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
  { label: "Intelligence artificielle — CNIL", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, Conseil stratégie IA',
  description: META_DESC,
  url: `https://www.master-ia.fr/${SLUG}`,
  serviceType: ['Conseil stratégie IA', 'Diagnostic de maturité IA', 'Feuille de route IA', 'Gouvernance IA', "Déploiement et développement de solutions IA"],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `https://www.master-ia.fr/${SLUG}#article`,
  headline: 'Conseil stratégie IA : du diagnostic à la feuille de route',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-12',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  about: ["Stratégie IA d'entreprise", 'Diagnostic de maturité IA', 'Feuille de route IA', 'Gouvernance IA'],
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: INK, fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color: BLUE, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: GREY_700, lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function ConseilStrategieIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (Définition / Pour qui / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil IA', slug: 'conseil-intelligence-artificielle' },
    { name: 'Conseil stratégie IA', slug: SLUG },
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
        datePublished="2026-06-12"
        dateModified="2026-07-02"
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#5B6679' }}>Conseil IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Conseil stratégie IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Conseil stratégie IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Conseil stratégie IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>du diagnostic à la feuille de route</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe pour citation LLM et featured snippet — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${BLUE}` }}>
            Le conseil stratégie IA consiste à définir où, comment et dans quel ordre déployer l'intelligence artificielle dans une entreprise. Masteria structure la démarche en <strong style={{ color: '#fff', fontWeight: 700 }}>4 phases</strong> : diagnostic de maturité, priorisation des cas d'usage par ROI, feuille de route à 90 jours et 12 mois, gouvernance et conduite du changement.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            {INTRO}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Contacter notre équipe
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#methode" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Découvrir la méthode
            </a>
          </div>

          {/* chips */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
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
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: '#fff', padding: '44px clamp(20px, 4vw, 40px)', display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap', borderBottom: `1px solid ${BORDER}` }}>
        {[
          { num: '+1 500', label: "professionnels formés à l'IA" },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '2022', label: 'année de fondation à Lyon' },
          { num: 'FR · CH · BE', label: "zones d'intervention" },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: INK, margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: GREY_500, margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── QU'EST-CE QU'UNE STRATÉGIE IA (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Définition</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce qu'une stratégie IA d'entreprise ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong style={{ color: INK }}>Une stratégie IA d'entreprise est le cadre de référence qui fixe l'ambition, les cas d'usage prioritaires, le budget, le calendrier et la gouvernance du déploiement de l'intelligence artificielle. Elle répond à quatre questions : pourquoi investir, sur quels processus, avec quels outils et quels garde-fous, selon quel séquencement.</strong>
              </p>
            </div>
            <div style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ margin: '0 0 20px' }}>
                Le sujet dépasse largement le choix d'un outil. Une stratégie IA aligne trois dimensions : la valeur (quels processus transformer en priorité, pour quel gain mesurable), les moyens (budget, compétences, architecture technique, qualité des données) et le cadre (RGPD, AI Act, sécurité, acceptabilité en interne). Les entreprises qui formalisent ce cadre avant d'investir évitent la dispersion des licences, les doublons d'outils et les pilotes sans lendemain.
              </p>
              <p style={{ margin: 0 }}>
                La démarche s'inscrit dans la continuité du conseil en transformation numérique et intelligence artificielle : la stratégie IA en constitue aujourd'hui le volet le plus structurant, car elle touche simultanément les processus, les données et les compétences de toutes les directions. La priorisation porte en grande partie sur les usages de l'<Link to="/ia-generative-entreprise" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>IA générative en entreprise</Link>, dont il faut trier les cas d'usage selon leur valeur réelle. Cette démarche forme aussi le premier temps des missions de notre <Link to="/conseil-intelligence-artificielle" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>cabinet de conseil en intelligence artificielle</Link>, qui couvre l'audit des usages, l'accompagnement opérationnel et la transformation culturelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE EN 4 PHASES ── */}
      <section id="methode" style={{ padding: SECTION_PAD, background: BG_SOFT, color: INK, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={kickerStyle}>Notre méthode</div>
          <h2 style={h2Style}>
            Comment se déroule une mission de conseil stratégie IA ?
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75, marginBottom: 44, maxWidth: 800 }}>
            <strong style={{ color: INK }}>La mission s'organise en quatre phases : diagnostic de maturité (2 à 3 semaines), cadrage et priorisation des cas d'usage par ROI (1 à 2 semaines), feuille de route 90 jours / 12 mois (1 à 2 semaines), puis gouvernance et conduite du changement (3 à 12 mois).</strong>{' '}
            Chaque phase se conclut par un livrable validé avec votre comité de direction.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: BORDER }} />
            {PHASES.map((phase, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 20, position: 'relative',
                padding: i === 0 ? '0 0 18px' : (i === PHASES.length - 1 ? '18px 0 0' : '18px 0'),
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 99, background: BLUE_SOFT,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  position: 'relative', zIndex: 1,
                  fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: BLUE,
                }}>
                  {phase.n}
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 10 }}>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: INK, margin: 0, letterSpacing: '-0.01em' }}>
                      {phase.title}
                    </h3>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: 12.5, fontWeight: 600, color: GREY_700,
                      background: BG_SOFT, border: `1px solid ${BORDER}`,
                      padding: '4px 12px', borderRadius: 99, flexShrink: 0,
                    }}>
                      <Clock size={13} color={BLUE} strokeWidth={2.2} aria-hidden="true" /> {phase.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, marginBottom: 14, marginTop: 0 }}>{phase.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px 20px' }}>
                    {phase.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: GREY_700 }}>
                        <Check size={16} color={BLUE} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Tableau récapitulatif des 4 phases */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '48px 0 16px' }}>
            Les 4 phases en synthèse
          </h3>
          <div style={{ overflowX: 'auto', background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
              <thead>
                <tr>
                  {['Phase', 'Durée indicative', 'Livrable principal'].map((h, i) => (
                    <th key={i} scope="col" style={{
                      background: BG_SOFT, textAlign: 'left',
                      padding: '14px 18px', borderBottom: `1px solid ${BORDER}`,
                      fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13.5,
                      color: INK, whiteSpace: 'nowrap',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_PHASES.map((row, i) => {
                  const cell = {
                    padding: '15px 18px',
                    borderBottom: i === TABLE_PHASES.length - 1 ? 'none' : `1px solid ${BORDER}`,
                    color: GREY_700, lineHeight: 1.6, verticalAlign: 'top',
                  }
                  return (
                    <tr key={i}>
                      <th scope="row" style={{ ...cell, textAlign: 'left', fontWeight: 700, color: INK, fontFamily: 'Nunito, sans-serif', fontSize: 13.5 }}>{row.phase}</th>
                      <td style={{ ...cell, whiteSpace: 'nowrap' }}>{row.duree}</td>
                      <td style={cell}>{row.livrable}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, marginTop: 20, marginBottom: 14, maxWidth: 800 }}>
            <strong style={{ color: INK }}>En aval, la feuille de route appelle une mise en œuvre.</strong> Une fois les chantiers prioritaires arbitrés, la même équipe passe au build : notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link> conçoit et développe les solutions sur mesure, de l'agent métier à l'intégration au SI. Cet arbitrage entre ambition stratégique et enveloppe disponible s'appuie sur des repères de coûts : nos fourchettes pour <Link to="/prix-projet-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>budgéter un projet IA</Link> aident à dimensionner chaque chantier dès la priorisation. La stratégie ne s'arrête pas au document : elle se déploie.
          </p>
          <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, marginTop: 0, marginBottom: 0, maxWidth: 800 }}>
            Pour préparer les arbitrages de la phase de cadrage, beaucoup de nos clients programment en amont notre <Link to="/formation-ia-dirigeants" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>formation IA pour dirigeants</Link>, certifiée Qualiopi et finançable OPCO : comprendre les capacités réelles des modèles rend les décisions de priorisation plus rapides et mieux argumentées. Pour la montée en compétences des équipes métier, l'ensemble de nos parcours est détaillé sur la page <Link to="/formation-intelligence-artificielle" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>formation intelligence artificielle</Link>.
          </p>
        </div>
      </section>

      {/* ── POUR QUI (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Pour qui</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                À qui s'adresse ce conseil stratégie IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong style={{ color: INK }}>La mission s'adresse aux instances qui décident et financent la trajectoire IA : directions générales et COMEX de PME-ETI, directions de la transformation, DSI et directions du numérique.</strong>{' '}
                Elle leur fournit une base d'arbitrage chiffrée, une feuille de route séquencée et un schéma de gouvernance conforme au RGPD et à l'AI Act.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
              {POUR_QUI.map((p, i) => (
                <div key={i} style={cardStyle}>
                  <div style={{ ...iconTileStyle, marginBottom: 18 }}>
                    <p.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 10, letterSpacing: '-0.01em' }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA MILIEU DE PAGE ── */}
      <section style={{ padding: '56px clamp(20px, 4vw, 40px)', background: BG_SOFT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          background: '#fff', border: `1px solid ${BORDER}`, borderLeft: `4px solid ${BLUE}`, borderRadius: 16,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          padding: 'clamp(28px, 4vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25, color: INK, letterSpacing: '-0.01em' }}>
              Besoin d'un cap clair pour votre stratégie IA&nbsp;?
            </h2>
            <p style={{ fontSize: 15, color: GREY_500, margin: 0, lineHeight: 1.6 }}>
              Réponse sous 24 h · Cadrage gratuit de 30 minutes · Mission sur devis
            </p>
          </div>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}>
            Contacter notre équipe <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── LIVRABLES ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Livrables</div>
          <h2 style={h2Style}>
            Quels livrables recevez-vous à l'issue de la mission ?
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75, marginBottom: 40, maxWidth: 800 }}>
            <strong style={{ color: INK }}>Six livrables structurent la mission : rapport de maturité IA, portefeuille de cas d'usage priorisé, feuille de route 90 jours / 12 mois, schéma de gouvernance, plan de formation des équipes et tableau d'indicateurs ROI.</strong>{' '}
            Tous sont remis en formats éditables et validés avec votre comité de direction à la fin de chaque phase.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {LIVRABLES.map((l, i) => (
              <div key={i} style={{ ...cardStyle, borderTop: `3px solid ${BLUE}` }}>
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <l.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>{l.title}</h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: 0 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISPOSITIF COMPLET (maillage interne) ── */}
      <section style={{ padding: SECTION_PAD, background: BG_SOFT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>De la feuille de route au déploiement</div>
          <h2 style={h2Style}>
            La stratégie débouche sur du build, pas seulement sur un rapport
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, marginBottom: 36, maxWidth: 800, lineHeight: 1.75 }}>
            Une feuille de route ne produit ses effets que si elle est exécutée. Masteria prolonge la mission stratégique par la réalisation, portée par la même équipe : conception et développement des solutions sur mesure par notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link>, automatisation des processus, puis montée en compétences des équipes. En amont, un <Link to="/diagnostic-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>diagnostic IA gratuit</Link> objective votre maturité, et nos <Link to="/ia-secteurs" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>cas d'usage de l'IA par secteur</Link> alimentent la phase de priorisation. Conseil et développement se chiffrent sur devis ; seule la formation associée est finançable OPCO.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <Link to="/agence-developpement-ia" style={{ textDecoration: 'none' }}>
              <div
                style={{ ...cardStyle, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
              >
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <Cpu size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  Agence de développement IA
                </h3>
                <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '0 0 14px' }}>
                  Le débouché opérationnel de la feuille de route : conception et développement des solutions sur mesure (agents, copilotes, intégrations au SI), du prototype à la mise en production.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Découvrir le développement IA <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link to="/conseil-intelligence-artificielle" style={{ textDecoration: 'none' }}>
              <div
                style={{ ...cardStyle, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
              >
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <Compass size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  Cabinet de conseil en intelligence artificielle
                </h3>
                <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '0 0 14px' }}>
                  Audit des usages, accompagnement opérationnel, transformation : l'ensemble de nos expertises de conseil IA, dont la stratégie constitue le premier volet.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Découvrir le conseil IA <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link to="/formation-ia-dirigeants" style={{ textDecoration: 'none' }}>
              <div
                style={{ ...cardStyle, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
              >
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <GraduationCap size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  Formation IA pour dirigeants
                </h3>
                <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '0 0 14px' }}>
                  Un programme dédié aux DG et COMEX pour comprendre les modèles, arbitrer les investissements et porter la stratégie en interne. Certifié Qualiopi, finançable OPCO.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Découvrir la formation dirigeants <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link to="/agence-automatisation-ia" style={{ textDecoration: 'none' }}>
              <div
                style={{ ...cardStyle, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
              >
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <Workflow size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  Agence d'automatisation IA
                </h3>
                <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '0 0 14px' }}>
                  Quand la feuille de route prévoit des chaînes de traitement automatisées (documents, emails, workflows multi-outils), notre agence d'automatisation IA conçoit et déploie les solutions.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Découvrir l'automatisation IA <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTEXTE 2026 : éditorial + repères chiffrés sourcés (ancre sombre — preuve) ── */}
      <section style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', color: '#B4C0D3', fontSize: 16, lineHeight: 1.75 }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Contexte 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>
            Pourquoi formaliser une stratégie IA maintenant ?
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${BLUE}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 24px' }}>
            <strong style={{ color: '#fff' }}>La technologie est devenue accessible à toutes les entreprises ; sa bonne intégration aux processus métier reste à construire. C'est ce décalage qui rend la stratégie décisive : sans cap, les organisations s'équipent en ordre dispersé et engagent des budgets sans retour mesurable.</strong>
          </p>
          <p style={{ marginBottom: 20 }}>
            La généralisation des modèles de langage (ChatGPT, Claude, Gemini, Mistral, Microsoft Copilot) a déplacé la difficulté. Le frein n'est plus l'accès aux outils mais la capacité à choisir les bons cas d'usage, à préparer les données, à cadrer les usages au regard du RGPD et de l'AI Act, et à embarquer les équipes. Les entreprises qui formalisent ce cadre avant d'investir évitent la dispersion des licences, les doublons d'outils et les pilotes sans lendemain.
          </p>

          {/* Repères chiffrés sourcés — citables par les moteurs de réponse */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, margin: '32px 0 28px' }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <s.Icon size={22} color="#60A5FA" strokeWidth={2} aria-hidden="true" />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#F8FAFC', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#8092AB', margin: 0, fontWeight: 600 }}>Source : {s.source}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: 0 }}>
            Une stratégie IA bien menée transforme ces contraintes en avantage : elle priorise les chantiers à plus fort ROI, intègre la conformité dès la conception et prépare l'organisation au déploiement à l'échelle. Une fois la trajectoire fixée, la <Link to="/gouvernance-ia" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none' }}>gouvernance de l'IA</Link> en prolonge le cadre dans la durée : comité de pilotage, charte d'usage et conformité RGPD et AI Act. Pour situer votre point de départ avant tout engagement, notre <Link to="/diagnostic-ia" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none' }}>diagnostic IA</Link> évalue gratuitement votre maturité ; pour le périmètre conseil complet (audit, accompagnement, transformation), consultez notre <Link to="/conseil-intelligence-artificielle" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none' }}>cabinet de conseil en intelligence artificielle</Link>.
          </p>

          {/* Définitions clés — ancrage d'entités */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.01em', margin: '44px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color="#60A5FA" strokeWidth={2.2} aria-hidden="true" /> Définitions clés
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#F8FAFC', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence — liens d'autorité suivis */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.01em', margin: '44px 0 16px' }}>
            Sources de référence
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {REFERENCES.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: '#60A5FA', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Questions fréquentes sur le conseil stratégie IA
              </h2>
              <p style={{ color: GREY_700, fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5 }}>
                Posez-nous votre question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LE FONDATEUR (E-E-A-T) ── */}
      <FounderNote bg="#fff" quote="Une stratégie IA ne vaut que par sa mise en œuvre. Nous restons jusqu'à ce que la feuille de route devienne des solutions en production." />

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}` }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          maxWidth: 1080, margin: '0 auto',
          background: '#0A0F1E', color: '#fff',
          borderRadius: 16,
          padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)',
          textAlign: 'center',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.2vw, 42px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff' }}>
              Parlons de votre stratégie IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 32px' }}>
              Décrivez-nous votre organisation, vos premiers usages et vos échéances. Nous revenons vers vous sous 24 heures avec une proposition de cadrage, après un premier échange gratuit de 30 minutes.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '15px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800 }}>
              Contacter notre équipe <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 24, marginBottom: 0 }}>
              Cabinet de conseil et organisme de formation certifié Qualiopi · +1 500 professionnels formés · 98 % de satisfaction
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
