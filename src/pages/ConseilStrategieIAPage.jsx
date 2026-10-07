import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, BadgeCheck, Building2, Check, Clock, Compass, Cpu,
  Factory, GraduationCap, LineChart, MonitorSmartphone, Route, Scale, Sun, Target,
  Users, Workflow, BookOpen, ExternalLink, ShieldCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { CADRAGE_HREF, CADRAGE_LABEL } from '../data/offre-entree'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page service « Conseil stratégie IA » : constantes en tête, SEOHead (FAQ +
 * breadcrumbs), hero avec badges, sections, FAQ, CTA. Prestation de conseil,
 * pas de courseData.
 * Cible : « conseil stratégie ia » (90/mois, KD 45), « conseil stratégique
 * intelligence artificielle », « conseil en transformation numérique et
 * intelligence artificielle ».
 * ANGLE (anti-cannibalisation du cluster conseil) : le CAP. Décider où l'IA
 * travaille et dans quel ordre : état des lieux, priorisation, feuille de route
 * à 90 jours et à 12 mois, pilotage. L'organisation qui change relève de
 * /conseil-transformation-ia, le format PME de /conseil-ia-pme, les données de
 * /conseil-data-ia, l'offre d'entrée de /diagnostic-ia.
 * Réécrite le 07/10/2026 (texte propre à la page) : plus de CaseStudyCards ni
 * de FounderNote, cas cités en deux phrases avec lien vers leur ancre, plus de
 * Gartner ni de « +1 500 », AI Act au calendrier de l'Omnibus (2026/1744).
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
// Réponse directe encadrée (citable GEO), pour les blocs éditoriaux
const answerStyle = {
  background: BG_SOFT, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${BLUE}`,
  borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7,
  color: INK, margin: '0 0 28px', maxWidth: 880,
}

const META_TITLE = "Conseil stratégie IA : audit, feuille de route | Masteria"
const META_DESC = "Conseil stratégie IA pour directions : état des lieux, chantiers classés par valeur, plan à trois mois et à un an, règles d'usage. Cadrage offert."
const KEYWORDS = "conseil stratégie ia, stratégie ia entreprise, stratégie intelligence artificielle, feuille de route ia, schéma directeur ia, diagnostic maturité ia"
const INTRO = "Quand les abonnements d'IA s'accumulent et que personne ne sait chiffrer leur rendement, un comité de direction doit trancher trois questions : sur quelles tâches miser, dans quel ordre, sous quelles règles. Notre mission stratégique vous aide à y répondre par écrit, chiffres à l'appui. Ensuite, la même équipe construit les outils retenus puis apprend aux utilisateurs à s'en servir, sans changer d'interlocuteur entre le plan et sa mise en service."

const HERO_BADGES = [
  { icon: Compass,           label: '30 minutes de cadrage offertes' },
  { icon: Building2,         label: 'Directions générales et COMEX' },
  { icon: MonitorSmartphone, label: 'Entretiens sur site ou en visio' },
  { icon: BadgeCheck,        label: 'Qualiopi pour le volet formation' },
]

const KEY_FIGURES = [
  { num: '4', label: 'phases, chacune close par un livrable validé' },
  { num: '90 j · 12 mois', label: 'les deux horizons du calendrier' },
  { num: 'Lyon, 2022', label: "création d'un cabinet dédié à l'IA" },
  { num: 'Hors de France', label: 'Europe · États-Unis · Inde' },
]

const PHASES = [
  {
    n: '01',
    title: 'État des lieux de maturité',
    duration: '2 à 3 semaines',
    desc: "Nous rencontrons la direction et les responsables de chaque fonction, puis nous passons en revue les outils, les données et les pratiques en place, même celles que personne n'a signalées. Vous lisez votre maturité fonction par fonction, avec ses points d'appui et ses manques.",
    items: [
      'Entretiens avec les dirigeants et l\'encadrement',
      'Inventaire des outils, des données et des usages',
      'Note de maturité attribuée à chaque fonction',
      'Risques et écarts consignés par écrit',
    ],
  },
  {
    n: '02',
    title: "Priorisation des cas d'usage",
    duration: '1 à 2 semaines',
    desc: "Chaque direction apporte ses idées en atelier. Le comité les arbitre ensuite sur trois critères : ce que le cas rapporte, ce qu'il demande pour être construit, ce qu'il expose sur le plan réglementaire.",
    items: [
      "Un atelier d'idées par direction",
      'Matrice valeur et difficulté consolidée',
      'Gain et coût estimés pour chaque cas',
      'Trois à cinq chantiers retenus par le comité',
    ],
  },
  {
    n: '03',
    title: 'Feuille de route : trois mois, puis un an',
    duration: '1 à 2 semaines',
    desc: "Le plan fixe deux horizons. À 90 jours, des chantiers livrés et des équipes formées montrent que la démarche produit des résultats. À 12 mois, la trajectoire répartit l'investissement, les jalons et les responsabilités entre les directions.",
    items: [
      'Premiers outils livrés et premières formations à 90 jours',
      'Jalons, budget et porteurs sur douze mois',
      'Indicateurs choisis avant le lancement',
      'Présentation au comité de direction, puis arbitrage',
    ],
  },
  {
    n: '04',
    title: "Pilotage et règles d'usage",
    duration: '3 à 12 mois',
    desc: "Ce qui fait durer la stratégie : un comité IA réuni à date fixe, une charte d'usage, un inventaire tenu à jour des systèmes d'IA employés, les contrôles exigés par le RGPD et l'AI Act, la formation de chaque population et le relevé des gains, trimestre après trimestre.",
    items: [
      "Charte d'usage et registre des systèmes",
      'Comité de pilotage et calendrier de revue',
      'Plan de formation par population',
      'Bilan des gains chaque trimestre',
    ],
  },
]

const TABLE_PHASES = [
  { phase: '1. État des lieux de maturité', duree: '2 à 3 semaines', livrable: 'Note de maturité IA, fonction par fonction' },
  { phase: "2. Priorisation des cas d'usage", duree: '1 à 2 semaines', livrable: 'Trois à cinq chantiers classés, gains et coûts estimés' },
  { phase: '3. Feuille de route à deux horizons', duree: '1 à 2 semaines', livrable: 'Plan daté et budgété, adopté en comité de direction' },
  { phase: "4. Pilotage et règles d'usage", duree: '3 à 12 mois', livrable: "Charte, registre, comité et tableau d'indicateurs" },
]

const POUR_QUI = [
  {
    Icon: Building2,
    title: 'Direction générale et COMEX',
    desc: "Vous répartissez le budget IA des douze prochains mois et vous en rendez compte aux associés ou au conseil. La mission vous donne des priorités chiffrées que tout le comité a discutées avant de les signer.",
  },
  {
    Icon: LineChart,
    title: 'Direction de la transformation',
    desc: "Vous devez faire avancer plusieurs directions au même pas. La feuille de route devient votre calendrier commun : qui lance quel chantier, à quelle date, avec quel indicateur.",
  },
  {
    Icon: Users,
    title: 'DSI et direction du numérique',
    desc: "Les demandes d'outils IA arrivent de tous les services. La charte et la liste des systèmes autorisés vous donnent de quoi accepter, refuser et choisir une architecture en connaissance de cause.",
  },
]

const LIVRABLES = [
  {
    Icon: BarChart3,
    title: 'Note de maturité IA',
    desc: "Ce qui existe dans chaque fonction : usages, données, compétences, risques. Le point de départ que toute la direction partage.",
  },
  {
    Icon: Target,
    title: "Portefeuille de cas d'usage",
    desc: "Chaque cas placé sur la matrice valeur et difficulté, avec son gain estimé, son coût et ce qu'il exige des données.",
  },
  {
    Icon: Route,
    title: 'Feuille de route datée',
    desc: "Les chantiers dans l'ordre retenu, avec leurs jalons, leur budget, leur porteur et leurs prérequis techniques.",
  },
  {
    Icon: Scale,
    title: 'Schéma de pilotage',
    desc: "Comité IA, charte d'usage interne, registre des systèmes et points de contrôle RGPD et AI Act.",
  },
  {
    Icon: GraduationCap,
    title: 'Plan de formation',
    desc: "Un parcours par population (comité de direction, managers, équipes métier). Cette partie relève de la formation : l'opérateur de compétences de votre branche peut la financer, selon ses règles et ses fonds.",
  },
  {
    Icon: LineChart,
    title: "Tableau d'indicateurs",
    desc: "Temps rendu, qualité, adoption : des mesures posées avant le lancement, pour comparer la situation avant et après chaque chantier.",
  },
]

const FAQ = [
  {
    q: "Que désigne-t-on par stratégie IA d'entreprise ?",
    a: "C'est le document par lequel la direction fixe ce qu'elle attend de l'intelligence artificielle : l'ambition, les cas d'usage retenus, le budget, le calendrier et les règles. Il répond à quatre questions, dans cet ordre : pourquoi investir, sur quels processus, avec quels outils et quelles limites, à quel rythme. Faute de ce document, les initiatives restent éparses et personne ne peut dire ce qu'elles ont rapporté.",
  },
  {
    q: "En combien de temps une stratégie IA se définit-elle ?",
    a: "Dans une entreprise de taille moyenne, comptez en général de quatre à huit semaines entre le premier entretien et la feuille de route adoptée : l'état des lieux, les ateliers de priorisation, puis l'écriture du plan et des règles. La durée exacte se fixe au cadrage. Le pilotage s'installe ensuite sur trois à douze mois, selon le nombre de directions concernées.",
  },
  {
    q: "Combien coûte un conseil en stratégie IA ?",
    a: "Nous la vendons au forfait. Le devis suit les 30 minutes de cadrage offertes, quand nous connaissons la taille de l'organisation, le nombre d'entretiens et la profondeur de l'état des lieux. Pour donner un ordre d'idée, une mission courte pour une seule direction représente quelques milliers d'euros ; un programme qui couvre plusieurs pays atteint plusieurs dizaines de milliers d'euros, parfois davantage. Côté financement, le conseil n'est pas finançable par votre OPCO. La formation des dirigeants qui l'accompagne souvent, dont la journée coûte 1 980 € HT, entre en revanche dans le champ de votre opérateur de compétences, qui l'examine au regard de ses critères et de son budget.",
  },
  {
    q: "Quelle différence entre stratégie IA et conseil en transformation numérique ?",
    a: "Le conseil en transformation numérique et intelligence artificielle embrasse tout le système d'information : outils collaboratifs, données, processus dématérialisés. La stratégie IA en traite la part la plus récente : quels usages de l'IA générative et prédictive retenir, dans quel ordre, avec quelles règles (RGPD, AI Act), et comment former les équipes. Les deux suivent le même schéma directeur. Si c'est l'organisation du travail elle-même qui doit évoluer, notre conseil en transformation IA prend le relais.",
  },
  {
    q: "Faut-il former son COMEX avant de lancer la stratégie IA ?",
    a: "C'est souvent le meilleur ordre. Les arbitrages de la priorisation demandent de savoir ce qu'un modèle réussit et où il se trompe. Masteria programme sa formation IA pour dirigeants avant l'état des lieux ou pendant celui-ci ; les deux formats tiennent dans une même proposition, avec un seul interlocuteur.",
  },
  {
    q: "Par où commencer une stratégie IA ?",
    a: "Par un état des lieux de maturité : les usages déjà en place, la qualité des données, les compétences, les risques réglementaires. Les priorités s'appuient ensuite sur ce constat partagé. Pour vérifier d'abord que la démarche se justifie chez vous, le Diagnostic IA en donne une première lecture : c'est un format bref, dont le cadrage arrête la longueur et le forfait, et les 30 minutes de ce cadrage sont offertes.",
  },
  {
    q: "Quels sont les risques d'une stratégie IA mal cadrée, ou de son absence ?",
    a: "Des licences achetées en double, des outils concurrents entre deux services, des prototypes qui n'arrivent jamais en production, des budgets engagés sans mesure de retour, des usages contraires au RGPD ou à l'AI Act. La cause est rarement technique : personne n'a tranché l'ordre des priorités ni désigné qui porte chaque chantier. Une stratégie écrite concentre l'argent sur les cas qui rapportent et pose les règles avant les premiers déploiements.",
  },
  {
    q: "Comment mesure-t-on le ROI d'une stratégie IA ?",
    a: "Avec des indicateurs choisis avant le lancement, chantier par chantier, avec votre comité de pilotage : le temps rendu sur des tâches identifiées, relevé avant puis après ; la qualité (erreurs évitées, délais tenus) ; la capacité (ce que l'équipe fait désormais et ne faisait pas). Le bilan trimestriel confronte les résultats aux cibles. Sans indicateurs fixés en amont, aucun retour ne se démontre ; le calcul complet figure sur notre page consacrée au retour sur investissement de l'IA.",
  },
  {
    q: "Une PME a-t-elle besoin d'une stratégie IA ?",
    a: "Oui, en version courte. Deux ou trois cas prioritaires, un budget tenu, quelques règles d'usage et un calendrier de trois mois suffisent souvent. Ce format protège la PME du même écueil qu'un grand groupe : équiper chacun de son côté sans jamais mesurer ce que cela rapporte. Notre page consacrée au conseil IA pour PME décrit ce format resserré.",
  },
  {
    q: "Qui doit porter la stratégie IA en interne ?",
    a: "La direction générale, ou le comité de direction, la parraine : elle arbitre les budgets et fixe le cap. Un référent IA ou la direction de la transformation la met en œuvre, avec la DSI pour les choix techniques, la protection des accès et les données. Le consultant outille ces instances (arbitrages chiffrés, calendrier, règles) pour que la démarche survive au départ d'une personne.",
  },
  {
    q: "Stratégie IA et AI Act : qu'est-ce qui est obligatoire ?",
    a: "Le règlement européen sur l'IA (n° 2024/1689) est entré en vigueur le 1er août 2024. Depuis le 2 février 2025, certains usages sont interdits et son article 4 attend des entreprises qu'elles veillent au niveau de connaissance de l'IA de leurs équipes. Les règles de transparence de l'article 50 jouent depuis le 2 août 2026 : avertir l'utilisateur qu'un robot conversationnel lui répond, par exemple. Pour les systèmes que l'annexe III classe à haut risque, l'échéance a glissé à décembre 2027 avec l'Omnibus numérique (n° 2026/1744). Recenser ses usages et les classer par niveau de risque, en plus des exigences du RGPD, entre donc dans la feuille de route dès sa première version.",
  },
]

/* ───────── Repères datés et sourcés (citables) ───────── */
/* Chiffre de marché : memory/reference_chiffres_geo_2026.md (Crédoc, vérifié le 30/09/2026).
   Calendrier AI Act : brief du 07/10/2026 (Omnibus, règlement (UE) 2026/1744). */

const MARKET_STATS = [
  {
    Icon: BarChart3,
    stat: '48 %',
    label: "des Français âgés de 12 ans ou plus déclarent se servir de l'IA générative ; ils étaient 20 % en 2023",
    source: 'Crédoc, Baromètre du numérique 2026 (enquête de juin 2025)',
  },
  {
    Icon: Scale,
    stat: '2 août 2026',
    label: "la transparence exigée par l'article 50 devient opposable ; l'article 4, sur la culture IA des équipes, l'est depuis février 2025",
    source: 'Règlement (UE) 2024/1689',
  },
  {
    Icon: ShieldCheck,
    stat: 'Décembre 2027',
    label: "nouvelle date fixée pour les systèmes que l'annexe III range dans le haut risque, après le vote de l'Omnibus",
    source: 'Règlement (UE) 2026/1744',
  },
]

/* ───────── Définitions clés (ancrage d'entités pour la recherche générative) ───────── */

const GLOSSARY = [
  {
    term: 'Stratégie IA',
    def: "Document de décision : l'ambition, les chantiers retenus, le budget et le calendrier de chacun, les règles qui encadrent l'emploi de l'IA dans l'entreprise.",
  },
  {
    term: 'État des lieux de maturité',
    def: "Lecture, fonction par fonction, des usages, des données, des compétences et des risques présents au départ. Sans elle, les priorités reposent sur des impressions.",
  },
  {
    term: 'Feuille de route IA',
    def: "Calendrier à deux horizons : des chantiers livrés à 90 jours qui prouvent la démarche, une trajectoire à 12 mois qui répartit l'investissement.",
  },
  {
    term: 'Gouvernance IA',
    def: "Comité, charte d'usage, liste des systèmes et contrôles réglementaires : ce qui fait tenir les usages une fois le consultant parti.",
  },
  {
    term: 'Matrice valeur et difficulté',
    def: "Grille d'arbitrage qui croise ce qu'un cas rapporte, ce qu'il coûte à construire et le risque réglementaire qu'il porte.",
  },
]

/* ───────── Sources de référence (liens d'autorité, suivis) ───────── */

const REFERENCES = [
  { label: "Le texte de l'AI Act (n° 2024/1689) tel que publié sur EUR-Lex", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "L'Omnibus numérique (n° 2026/1744), qui repousse le calendrier du haut risque", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  { label: "Le cadre réglementaire de l'IA expliqué par la Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
  { label: "Les fiches de la CNIL sur l'IA et les données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── Études de cas citées (faits : src/data/etudes-de-cas.js, révisés le 05/10/2026) ───────── */

const STRATEGY_CASES = [
  {
    id: 'industrie',
    Icon: Factory,
    sector: 'Industrie · groupe international',
    figure: '24',
    figureLabel: 'managers pilotes passés en formation avant le comité de direction',
    text: "Ce groupe du packaging, présent sur trois continents, équipe ses managers de l'assistant Copilot de Microsoft, palier après palier. Une fois les pilotes formés, son comité de direction s'est réuni une matinée, en anglais, pour trancher : quelles données tenir à l'écart, comment contrôler les accès, quel agent construire d'abord, comment financer l'adoption. Les usines américaines et mexicaines suivent en octobre 2026, les sites indiens en décembre.",
  },
  {
    id: 'photovoltaique',
    Icon: Sun,
    sector: 'Distribution photovoltaïque · PME',
    figure: '90 jours',
    figureLabel: 'délai prévu avant de mesurer les premiers gains',
    text: "Trois personnes, trois entrepôts, un ERP (Odoo) au centre de tout. Le plan confie trois chantiers à trois responsables nommés, pose une charte et choisit un outil commun pour remplacer les comptes privés. Remis en septembre 2026, il programme la formation sur site en octobre et un relevé des résultats un mois après.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, Conseil stratégie IA',
  description: META_DESC,
  url: `https://www.master-ia.fr/${SLUG}`,
  serviceType: ['Conseil stratégie IA', 'État des lieux de maturité IA', 'Feuille de route IA', 'Gouvernance IA', 'Développement de solutions IA'],
  areaServed: ['France', 'Suisse', 'Belgique', 'États-Unis', 'Inde'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `https://www.master-ia.fr/${SLUG}#article`,
  headline: "Conseil stratégie IA : décider où l'IA travaille, et dans quel ordre",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-12',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `https://www.master-ia.fr/${SLUG}#webpage` },
  about: ["Stratégie IA d'entreprise", 'État des lieux de maturité IA', 'Feuille de route IA', 'Gouvernance IA'],
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
        dateModified="2026-10-07"
        speakable={['#definition', '#geo-summary']}
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
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>décider où l'IA travaille, et dans quel ordre</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Page signée par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui conduit les missions de stratégie du cabinet · actualisée le 7 octobre 2026
          </p>

          {/* GEO : définition autonome, citable hors contexte */}
          <div id="definition" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: '18px 22px', margin: '0 0 24px', maxWidth: 760 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 8 }}>Définition</div>
            <p style={{ fontSize: 15.5, color: '#E2E8F0', lineHeight: 1.65, margin: 0 }}>
              Le conseil en stratégie IA aide une direction à choisir les tâches que l'intelligence artificielle prendra en charge, à les classer selon leur valeur et leur difficulté, à fixer un calendrier qui court sur trois mois puis sur un an, et à écrire les règles qui encadrent ces usages. L'audit IA décrit la situation présente ; la stratégie engage les décisions qui suivent.
            </p>
          </div>

          {/* GEO : réponse directe pour citation LLM et featured snippet */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${BLUE}` }}>
            Une stratégie IA tient en quatre décisions écrites : ce qui existe déjà, les chantiers retenus, leur calendrier, les règles du jeu. Masteria les prépare avec votre comité en <strong style={{ color: '#fff', fontWeight: 700 }}>quatre phases</strong> : un état des lieux, le tri des cas d'usage, un calendrier sur deux horizons (trois mois, un an), puis le pilotage.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            {INTRO}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              {CADRAGE_LABEL}
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#methode" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les quatre phases
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

      {/* ── REPÈRES ── */}
      <section style={{ background: '#fff', padding: '44px clamp(20px, 4vw, 40px)', display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap', borderBottom: `1px solid ${BORDER}` }}>
        {KEY_FIGURES.map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: INK, margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: GREY_500, margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── CE QUE CONTIENT UNE STRATÉGIE IA (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Ce que recouvre le mot</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que contient une stratégie IA d'entreprise ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong style={{ color: INK }}>Une stratégie IA d'entreprise est un document de décision. Il dit pourquoi la direction investit, sur quels processus, avec quels outils et sous quelles règles, et dans quel ordre les chantiers se suivent. Chaque choix y reçoit un budget, un responsable et un indicateur.</strong>
              </p>
            </div>
            <div style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ margin: '0 0 20px' }}>
                Choisir un assistant ne fixe aucun cap. La stratégie relie trois registres : la valeur attendue (quels processus gagnent du temps ou de la qualité, et combien), les moyens (budget, compétences, état des données, architecture technique) et le cadre (RGPD, AI Act, sécurité, adhésion des équipes). Une direction qui écrit ces trois registres avant d'acheter évite les licences en double, les outils concurrents dans deux services voisins et les prototypes que personne ne reprend.
              </p>
              <p style={{ margin: 0 }}>
                Elle prolonge le conseil en transformation numérique et en devient aujourd'hui le volet le plus structurant, parce qu'elle touche en même temps les processus, les données et les compétences de chaque direction. Une large part des arbitrages porte sur l'<Link to="/ia-generative-entreprise" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>IA générative en entreprise</Link>, dont les usages se trient selon ce qu'ils rapportent. Elle ouvre aussi la plupart des missions de notre <Link to="/conseil-intelligence-artificielle" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>cabinet de conseil en intelligence artificielle</Link>, avant la construction des outils et la formation des utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE EN 4 PHASES ── */}
      <section id="methode" style={{ padding: SECTION_PAD, background: BG_SOFT, color: INK, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={kickerStyle}>La démarche</div>
          <h2 style={h2Style}>
            Les quatre phases d'une mission de conseil stratégie IA
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75, marginBottom: 44, maxWidth: 800 }}>
            <strong style={{ color: INK }}>La mission avance en quatre temps : mesurer la maturité, trier les cas d'usage, dater la feuille de route, puis installer le pilotage et ses règles.</strong>{' '}
            Une phase commence quand votre comité de direction a validé la précédente. Les durées affichées sont des repères ; le cadrage les ajuste à la taille de votre organisation.
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
            Les quatre phases réunies dans un tableau
          </h3>
          <div style={{ overflowX: 'auto', background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
              <thead>
                <tr>
                  {['Phase', 'Repère de durée', 'Ce que vous recevez'].map((h, i) => (
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
            <strong style={{ color: INK }}>Une feuille de route vaut par ce qu'elle met en service.</strong> Une fois les chantiers arbitrés, l'équipe qui les a choisis passe à la construction : notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link> réalise les agents, les assistants et les branchements à vos logiciels. Pour dimensionner chaque chantier dès la priorisation, nos repères pour <Link to="/prix-projet-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>budgéter un projet IA</Link> donnent des fourchettes larges : comptez quelques milliers d'euros pour éprouver une idée sur un prototype, plusieurs dizaines de milliers pour un outil que les équipes utilisent chaque jour, et plus de 100 000 € quand un groupe équipe plusieurs pays.
          </p>
          <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, marginTop: 0, marginBottom: 0, maxWidth: 800 }}>
            Beaucoup de comités suivent notre <Link to="/formation-ia-dirigeants" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>formation IA pour dirigeants</Link> avant la phase de priorisation : savoir ce qu'un modèle sait faire, et où il se trompe, accélère les arbitrages. La certification Qualiopi de Masteria couvre ses « actions de formation » : ce programme peut donc recevoir une prise en charge de votre opérateur de compétences, dans la limite de ses critères. Les parcours destinés aux équipes métier sont regroupés sur la page <Link to="/formation-intelligence-artificielle" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>formation intelligence artificielle</Link>.
          </p>
        </div>
      </section>

      {/* ── POUR QUI (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Les commanditaires</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                À qui s'adresse ce conseil stratégie IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong style={{ color: INK }}>La mission sert ceux qui décident et paient la trajectoire IA : la direction générale et le comité de direction, la direction de la transformation, la DSI.</strong>{' '}
                Elle leur remet une base d'arbitrage chiffrée, un calendrier et des règles d'usage qui tiennent compte des deux textes européens en jeu.
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
              Vos priorités IA sont-elles écrites quelque part&nbsp;?
            </h2>
            <p style={{ fontSize: 15, color: GREY_500, margin: 0, lineHeight: 1.6 }}>
              Trente minutes de cadrage offertes ouvrent la discussion ; la mission fait ensuite l'objet d'un forfait écrit. Chaque demande reçoit une réponse sous 24 heures.
            </p>
          </div>
          <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}>
            {CADRAGE_LABEL} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── LIVRABLES ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Ce que vous recevez</div>
          <h2 style={h2Style}>
            Six documents restent dans l'entreprise après la mission
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75, marginBottom: 40, maxWidth: 800 }}>
            <strong style={{ color: INK }}>La mission laisse six livrables : une note de maturité, le classement des cas d'usage, un plan daté, le schéma de pilotage, le programme de formation et les indicateurs de suivi.</strong>{' '}
            Vos équipes les reçoivent dans des formats modifiables, après validation en comité de direction à la fin de chaque phase.
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
          <div style={kickerStyle}>Après la feuille de route</div>
          <h2 style={h2Style}>
            La même équipe construit ce que la feuille de route décide
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, marginBottom: 36, maxWidth: 800, lineHeight: 1.75 }}>
            Une feuille de route produit ses effets quand quelqu'un l'exécute. Masteria la prolonge par un <Link to="/accompagnement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>accompagnement IA</Link> tenu par les mêmes personnes, et par un <Link to="/conseil-transformation-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>conseil en transformation IA</Link> lorsque l'organisation du travail doit changer. Nos développeurs réalisent les outils sur mesure, nos formateurs installent les usages. En amont, le <Link to="/diagnostic-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>Diagnostic IA</Link> (un format bref, durée et forfait décidés pendant le cadrage) mesure d'où vous partez ; nos <Link to="/ia-secteurs" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>exemples d'usages classés par secteur</Link> alimentent ensuite les ateliers de priorisation. Le conseil et le développement, vendus au forfait, ne sont pas finançables par votre OPCO, à la différence de la formation. Pour mener la démarche par vous-même, notre <Link to="/blog/strategie-ia-entreprise-guide" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>guide de la stratégie IA d'entreprise</Link> en détaille les étapes.
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
                  Les chantiers retenus deviennent des outils : agents, assistants, branchements au système d'information, du prototype jusqu'à la production.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Voir le développement IA <ArrowRight size={14} aria-hidden="true" />
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
                  Toutes nos missions, de l'audit à la mise en service, réunies sur une page ; la stratégie en ouvre souvent la marche.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Voir le cabinet <ArrowRight size={14} aria-hidden="true" />
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
                  Un programme pour le comité de direction : comprendre les modèles, arbitrer les dépenses, défendre la stratégie devant les équipes. Formation certifiée Qualiopi.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Voir le programme dirigeants <ArrowRight size={14} aria-hidden="true" />
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
                  Si le plan prévoit des traitements automatiques (documents, mails, enchaînements entre logiciels), cette équipe les conçoit et les met en service.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Voir l'automatisation IA <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTEXTE OCTOBRE 2026 : éditorial + repères chiffrés sourcés (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', color: '#B4C0D3', fontSize: 16, lineHeight: 1.75 }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Octobre 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>
            Pourquoi écrire sa stratégie IA maintenant ?
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${BLUE}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 24px' }}>
            <strong style={{ color: '#fff' }}>Les assistants sont désormais à la portée de n'importe quelle entreprise ; leur place dans les processus reste presque partout à définir. Ce décalage donne son prix à la stratégie : sans priorités écrites, chaque service s'équipe de son côté et la direction paie des abonnements dont personne ne mesure l'effet.</strong>
          </p>
          <p style={{ marginBottom: 20 }}>
            Le Crédoc l'a mesuré dans son Baromètre du numérique 2026, publié en février : presque un Français sur deux a recours à l'IA générative. Vos salariés en font partie, souvent avec des comptes personnels. La difficulté a donc changé de nature. Elle tient désormais au choix des cas, à la préparation des données, au respect des deux textes européens qui comptent ici (le RGPD et l'AI Act) et à l'apprentissage de ceux qui ouvrent chaque jour ChatGPT, Claude, Gemini ou Vibe (Mistral AI).
          </p>

          {/* Repères chiffrés sourcés, citables par les moteurs de réponse */}
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
            Une stratégie bien menée retourne ces contraintes à votre avantage : les chantiers les plus rentables passent en premier, la conformité entre dans la conception et l'organisation se prépare au passage à l'échelle. Le cadre se prolonge ensuite par la <Link to="/gouvernance-ia" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none' }}>gouvernance de l'IA</Link> : comité, charte, liste des systèmes, contrôles réguliers. Pour situer votre départ rapidement, le <Link to="/diagnostic-ia" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none' }}>Diagnostic IA</Link> suffit souvent ; pour un état des lieux complet avant d'industrialiser, l'<Link to="/audit-ia" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none' }}>audit IA</Link> examine maturité, données et conformité ; le reste de nos missions est décrit sur la page <Link to="/conseil-intelligence-artificielle" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none' }}>conseil en intelligence artificielle</Link>.
          </p>

          {/* Définitions clés, ancrage d'entités */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.01em', margin: '44px 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color="#60A5FA" strokeWidth={2.2} aria-hidden="true" /> Cinq notions à partager en comité
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#F8FAFC', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence, liens d'autorité suivis */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.01em', margin: '44px 0 16px' }}>
            Textes officiels cités sur cette page
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

      {/* ── ÉTUDES DE CAS (texte propre à la page, liens vers les ancres de /etudes-de-cas-ia) ── */}
      <section id="etudes-de-cas" style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Études de cas</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Deux feuilles de route écrites en 2026, pour un groupe international et pour une PME
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75, margin: '0 0 32px', maxWidth: 820 }}>
            Une matinée de décisions pour le comité d'un industriel, un plan sur trois mois pour une PME qui veut vendre plus sans recruter : deux échelles, la même discipline de priorités écrites. Les deux entreprises restent anonymes à leur demande.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {STRATEGY_CASES.map(({ id, Icon, sector, figure, figureLabel, text }) => (
              <article key={id} style={{ ...cardStyle, borderTop: `3px solid ${BLUE}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ ...iconTileStyle, width: 36, height: 36, borderRadius: 10 }}>
                    <Icon size={18} strokeWidth={2.2} color={BLUE} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sector}</span>
                </div>
                <div style={{ background: BG_SOFT, border: `1px solid ${BORDER}`, borderRadius: 12, padding: '12px 14px' }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: BLUE, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{figure}</div>
                  <div style={{ fontSize: 13, color: GREY_700, lineHeight: 1.45, marginTop: 4 }}>{figureLabel}</div>
                </div>
                <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, margin: 0, flex: 1 }}>{text}</p>
                <Link to={`/etudes-de-cas-ia#${id}`} style={{ fontSize: 13.5, color: BLUE, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  Le cas détaillé, étape par étape
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
            Deux autres cas de conseil et six missions de formation, avec leur méthode et leurs résultats, sont réunis sur la page <Link to="/etudes-de-cas-ia" style={{ color: BLUE, fontWeight: 600 }}>études de cas IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: BG_SOFT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Questions fréquentes sur le conseil stratégie IA
              </h2>
              <p style={{ color: GREY_700, fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre question ne figure pas dans la liste&nbsp;? Notez-la&nbsp;: nous y répondrons pendant le rendez-vous de cadrage, ou plus tôt par écrit.
              </p>
              <Link to="/contact?type=projet" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5 }}>
                Envoyer votre question
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

      {/* ── E-E-A-T : qui conduit la mission (fondateur + équipe, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui conduit la mission</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Le fondateur mène les entretiens de direction, l'équipe se compose pour votre plan
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              En 2022, Mathias Nizan lance à Lyon un cabinet consacré tout entier à l'intelligence artificielle. Il conduit les entretiens avec la direction et présente lui-même la feuille de route au comité. Selon l'ampleur de la mission, il fait appel à une dizaine de consultants IA, à cinq développeurs environ et à vingt formateurs à peu près ; tous travaillent en indépendants. Aucun éditeur ne rémunère le cabinet : le plan recommande l'outil adapté à vos contraintes. Des exemples datés figurent dans nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link>, et les articles qui nous citent sont listés dans la <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link>.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['2022', 'premier exercice du cabinet'],
              ['≈ 10', 'consultants pour les ateliers'],
              ['≈ 5', 'développeurs pour la suite'],
              ['Indépendant', 'sans licence à placer'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: GREY_700, lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan anime en personne les ateliers de priorisation et la restitution au comité de direction. Relue et mise à jour par lui le 7 octobre 2026, cette page complète <Link to="/mathias-nizan" style={{ color: BLUE, fontWeight: 600 }}>le récit de son parcours</Link>.
          </p>
          <PressMention />
        </div>
      </section>

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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Premier rendez-vous</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.2vw, 42px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff' }}>
              Mettons vos priorités IA sur la table
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 32px' }}>
              Dites-nous comment votre organisation est structurée, quels outils sont déjà ouverts dans vos services et quelles échéances pèsent sur la direction. Les 30 minutes de cadrage servent à délimiter la mission ; le forfait écrit vous parvient ensuite.
            </p>
            <Link to={CADRAGE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '15px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800 }}>
              {CADRAGE_LABEL} <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 24, marginBottom: 0 }}>
              Stratégie, outils et formation tenus par une même équipe, depuis Lyon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
