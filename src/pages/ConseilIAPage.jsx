import { Link } from 'react-router-dom'
import {
  ArrowRight, Boxes, BrainCircuit, Building2, Check, CheckCircle2, Clock, Compass,
  Cpu, GraduationCap, LineChart, Scale, Search, ShieldCheck, Sparkles, Target,
  Users, Workflow, Zap, BookOpen, ExternalLink, BarChart3,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { FAQSection } from '../components/screens2'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

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
  fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900,
  color: INK, lineHeight: 1.15, letterSpacing: '-0.02em',
  marginBottom: 18,
}
const cardStyle = {
  background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 30,
}
const iconTileStyle = {
  width: 44, height: 44, borderRadius: 12, background: BLUE_SOFT,
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
}

/* ───────── Données locales ───────── */

const SERVICES = [
  {
    Icon: Compass,
    title: 'Audit IA & diagnostic',
    desc: "Nous cartographions vos processus, identifions les cas d'usage à plus fort ROI et évaluons la maturité IA de vos équipes.",
    deliverables: [
      'Cartographie des cas d\'usage prioritaires',
      'Matrice impact × effort sur 12 mois',
      'Analyse de maturité par fonction',
      'Roadmap d\'implémentation chiffrée',
    ],
  },
  {
    Icon: Target,
    title: 'Stratégie & gouvernance IA',
    desc: "Nous vous aidons à définir une vision IA alignée sur votre business, à structurer la gouvernance et à cadrer les usages en interne.",
    deliverables: [
      'Vision et ambition IA à 3 ans',
      'Charte d\'usage interne (RGPD, sécurité)',
      'Gouvernance et comités de pilotage',
      'Indicateurs de succès',
    ],
  },
  {
    Icon: Workflow,
    title: 'Accompagnement opérationnel',
    desc: "Nous travaillons aux côtés de vos équipes pour prototyper, déployer et industrialiser des cas d'usage concrets.",
    deliverables: [
      'Ateliers d\'idéation par métier',
      'Prototypage rapide (POC)',
      'Bibliothèque de prompts sur mesure',
      'Transfert de compétences',
    ],
  },
  {
    Icon: BrainCircuit,
    title: 'Transformation culturelle',
    desc: "Acculturation, communication interne, plan de formation : nous embarquons l'ensemble de l'organisation dans la dynamique IA.",
    deliverables: [
      'Plan d\'acculturation IA',
      'Communication interne & change',
      'Programme de formation certifié Qualiopi',
      'Ambassadeurs IA par département',
    ],
  },
]

const MISSIONS = [
  {
    Icon: Search,
    strong: 'Audit des usages :',
    text: "cartographie des processus, des données et des outils déjà en place, mesure de la maturité des équipes, identification des cas d'usage à plus fort retour sur investissement.",
  },
  {
    Icon: Target,
    strong: 'Stratégie et feuille de route :',
    text: "définition de l'ambition, priorisation des chantiers et plan d'action séquencé sur 12 mois, avec budget et indicateurs associés.",
  },
  {
    Icon: Workflow,
    strong: 'Accompagnement au déploiement :',
    text: "prototypage rapide, choix des outils (ChatGPT, Copilot, Gemini, Claude, Mistral), intégration dans les processus métier et mesure des gains.",
  },
  {
    Icon: Scale,
    strong: 'Gouvernance et conformité AI Act :',
    text: "charte d'usage interne, registre des systèmes d'IA, conformité RGPD et classification des risques exigée par le règlement européen.",
  },
  {
    Icon: GraduationCap,
    strong: 'Formation des équipes :',
    text: "montée en compétences des collaborateurs, des dirigeants aux équipes métier, pour rendre l'organisation autonome.",
  },
]

const METHODO = [
  {
    n: '01',
    title: 'Comprendre',
    desc: "Immersion dans votre organisation : entretiens, ateliers, analyse de vos processus clés et de votre stack existante.",
    duration: '1 à 2 semaines',
  },
  {
    n: '02',
    title: 'Prioriser',
    desc: "Nous co-construisons une matrice des cas d'usage classés par impact, faisabilité et alignement avec votre stratégie.",
    duration: '1 semaine',
  },
  {
    n: '03',
    title: 'Prototyper',
    desc: "Nous lançons 1 à 3 POC sur vos cas d'usage prioritaires pour valider la valeur avant tout déploiement massif.",
    duration: '3 à 6 semaines',
  },
  {
    n: '04',
    title: 'Déployer',
    desc: "Industrialisation, formation des équipes, gouvernance et mesure continue du ROI sur 6 à 12 mois.",
    duration: '3 à 12 mois',
  },
]

const COMPARATIF = [
  {
    critere: 'Spécialisation',
    cabinet: "100 % dédiée à l'IA : veille continue sur les modèles, méthodes éprouvées en mission, lecture appliquée du RGPD et de l'AI Act.",
    esn: "L'IA est un sujet parmi d'autres ; les profils sont affectés selon les disponibilités du moment.",
    freelance: "Souvent pointue, mais limitée au parcours d'une seule personne.",
  },
  {
    critere: 'Transfert de compétence',
    cabinet: "Structurel : Masteria est aussi organisme de formation certifié Qualiopi, les équipes accompagnées sont formées en continu.",
    esn: "Rarement contractualisé ; la dépendance au prestataire se prolonge au-delà du projet.",
    freelance: "Informel, lié à la disponibilité et à la pédagogie de l'intervenant.",
  },
  {
    critere: 'Budget type',
    cabinet: "Mission cadrée sur devis, jalons et livrables validés ; le volet formation est finançable OPCO (1 980 € HT par jour).",
    esn: "Engagements longs, équipes nombreuses, coûts de pilotage et de coordination élevés.",
    freelance: "Tarif journalier attractif, mais cadrage, gouvernance et continuité restent à la charge du client.",
  },
  {
    critere: 'Pour qui',
    cabinet: "PME, ETI et directions métier qui veulent une trajectoire chiffrée et des équipes autonomes.",
    esn: "Grands comptes qui cherchent des renforts de capacité sur la durée.",
    freelance: "Besoin ponctuel, périmètre étroit et déjà bien défini.",
  },
]

const POUR_QUI = [
  {
    Icon: Building2,
    title: 'PME & ETI',
    desc: "Vous voulez structurer votre démarche IA sans gaspiller de budget sur des POC sans suite.",
  },
  {
    Icon: LineChart,
    title: 'Grandes entreprises',
    desc: "Vous cherchez un partenaire externe agile, capable de challenger vos équipes internes et d'accélérer les projets.",
  },
  {
    Icon: Users,
    title: 'Directions métier',
    desc: "Marketing, RH, finance, juridique : vous voulez déployer l'IA là où vous êtes, avec vos contraintes et vos objectifs.",
  },
]

const DIFFERENCIATEURS = [
  {
    Icon: Sparkles,
    title: 'Conseil + développement',
    desc: "Nous ne nous arrêtons pas à la recommandation : nous concevons et développons les solutions sur mesure qui en découlent, puis nous formons les équipes qui les utilisent. Du cadrage à la production, une seule équipe.",
  },
  {
    Icon: Zap,
    title: 'Vitesse d\'exécution',
    desc: "Nous livrons des POC fonctionnels en 3 à 6 semaines et transférons les compétences en continu, sans rapport de 120 pages.",
  },
  {
    Icon: ShieldCheck,
    title: 'Éthique & souveraineté',
    desc: "RGPD, sécurité des données, gouvernance des usages : nous cadrons chaque projet pour une IA maîtrisée en interne.",
  },
  {
    Icon: CheckCircle2,
    title: 'ROI mesurable',
    desc: "Chaque mission est assortie d'indicateurs de succès clairs. En moyenne, nos clients gagnent 6h par semaine par collaborateur formé.",
  },
]

const FAQ_CONSEIL = [
  {
    q: "Que fait un cabinet de conseil en intelligence artificielle ?",
    a: "Un cabinet de conseil en intelligence artificielle accompagne les entreprises sur cinq missions : audit des usages et des processus, définition de la stratégie et de la feuille de route, accompagnement au déploiement des outils, mise en place de la gouvernance (RGPD, AI Act) et formation des équipes. Chez Masteria, ces cinq volets sont couverts par une même équipe, du diagnostic initial à l'autonomie complète de vos collaborateurs.",
  },
  {
    q: "En quoi Masteria se distingue d'un cabinet de conseil classique ?",
    a: "Un cabinet classique remet ses recommandations puis se retire. Masteria prolonge le conseil par la mise en œuvre : nous concevons et développons les solutions sur mesure qui découlent de la feuille de route, puis nous formons les équipes qui les utilisent. Du cadrage à la production, une seule équipe, sans passer la main à un intégrateur tiers.",
  },
  {
    q: "Combien coûte un cabinet de conseil en IA ?",
    a: "Le jour de conseil se chiffre sur devis, selon la nature de la mission (audit, stratégie, accompagnement opérationnel), sa durée, le nombre d'interlocuteurs et la complexité technique et réglementaire. Le premier échange de cadrage de 30 minutes est gratuit. À noter : le conseil pur ne bénéficie d'aucune prise en charge OPCO. Seules les formations sont finançables, au tarif de 1 980 € HT par jour, grâce à notre certification Qualiopi. Associer un volet formation à la mission réduit donc son coût net.",
  },
  {
    q: "Faut-il un expert en conseil IA externe ou recruter en interne ?",
    a: "Recruter un expert IA en interne se justifie quand les projets sont continus et nombreux, mais le profil reste rare, cher et long à trouver. Un expert en conseil IA externe apporte une expertise à jour immédiatement, une vision transverse issue de nombreuses missions, et un transfert de compétence qui fait monter vos équipes. Beaucoup d'entreprises combinent les deux : un accompagnement IA externe pour cadrer et lancer, puis une internalisation progressive une fois les premiers cas d'usage en production.",
  },
  {
    q: "Cabinet de conseil IA ou agence IA : quelle différence ?",
    a: "Une agence IA développe des solutions : elle conçoit, code et livre des produits ou des intégrations sur mesure. Un cabinet de conseil IA intervient en amont et en transverse : il audite l'existant, définit la stratégie, sélectionne les outils de façon indépendante, structure la gouvernance et forme les équipes. Masteria réunit les deux : le conseil cadre la trajectoire, puis notre agence de développement IA assure elle-même la réalisation technique, sans rupture entre la recommandation et la solution livrée.",
  },
  {
    q: "Pourquoi choisir un cabinet spécialisé plutôt qu'un généraliste ?",
    a: "Un cabinet généraliste traite l'IA comme un sujet parmi d'autres. Un cabinet spécialisé y consacre la totalité de sa veille, de ses méthodes et de ses retours d'expérience : suivi continu des modèles (OpenAI, Anthropic, Google, Mistral), bibliothèques de prompts éprouvées en conditions réelles, lecture fine du RGPD et de l'AI Act appliqués à des cas concrets. Masteria a formé plus de 1 500 professionnels depuis 2022 avec 98 % de satisfaction : cette pratique quotidienne du terrain alimente directement nos recommandations de conseil.",
  },
  {
    q: "Travaillez-vous avec des petites structures ?",
    a: "Oui. Nous accompagnons aussi bien des PME de 20 personnes que des groupes cotés. Nos formats sont modulaires : certaines missions peuvent démarrer avec un accompagnement ponctuel d'une semaine, puis s'étendre selon vos besoins.",
  },
  {
    q: "Sur quels outils IA travaillez-vous ?",
    a: "Nous sommes agnostiques : ChatGPT, Microsoft Copilot, Google Gemini, Claude d'Anthropic, Mistral, outils open source. Le choix dépend de votre contexte (stack existante, sensibilité des données, budget). Nous vous aidons à trancher objectivement.",
  },
  {
    q: "Comment garantissez-vous la sécurité des données ?",
    a: "Nous travaillons uniquement avec des solutions respectant le RGPD. Chaque mission démarre par une cartographie des données sensibles et des cas d'usage compatibles. Nous formons également vos équipes aux bonnes pratiques (anonymisation, prompts, confidentialité).",
  },
  {
    q: "Puis-je combiner conseil et formation ?",
    a: "Oui, et c'est même ce que nous recommandons. La plupart de nos clients associent une phase d'audit/stratégie (conseil) à un programme de formation par métier (finançable OPCO). Nous construisons l'offre sur mesure.",
  },
  {
    q: "Quels livrables concrets remettez-vous à la fin d'un audit IA ?",
    a: "Un audit IA Masteria se solde par : (1) une cartographie des cas d'usage prioritaires classés par impact et faisabilité, (2) une matrice impact × effort sur 12 mois, (3) une analyse de maturité par fonction, (4) une roadmap d'implémentation chiffrée avec jalons trimestriels, (5) une note de cadrage RGPD et gouvernance, (6) une présentation de restitution au comité de direction. Tous les livrables sont remis en formats éditables (PowerPoint, Excel, Notion).",
  },
  {
    q: "Quels secteurs d'activité accompagnez-vous ?",
    a: "Nous intervenons dans des secteurs variés : services aux entreprises (B2B), industrie, santé, finance, juridique, retail, secteur public et associatif. Notre approche est sectoriellement agnostique mais notre méthodologie s'adapte aux contraintes spécifiques de chaque environnement (réglementation sectorielle, sensibilité des données, maturité digitale).",
  },
  {
    q: "Quelle est la différence entre un audit IA et une stratégie IA ?",
    a: "L'audit IA est un état des lieux : il cartographie l'existant (processus, outils, données, compétences) et identifie les cas d'usage à fort potentiel. La stratégie IA est prospective : elle définit la vision, l'ambition à 3 ans, la trajectoire d'investissement, la gouvernance et les indicateurs de succès. Dans la pratique, les deux exercices se chaînent : l'audit alimente la stratégie.",
  },
  {
    q: "Comment mesurez-vous le ROI d'un projet IA ?",
    a: "Nous mesurons le ROI sur trois dimensions : (1) la productivité, soit le temps gagné par collaborateur sur des tâches identifiées, mesuré avant/après ; (2) la qualité, soit la réduction des erreurs, la satisfaction client et la conformité ; (3) la capacité, soit les nouveaux usages rendus possibles (par ex. analyse de masse de documents impossible manuellement). Chaque indicateur est défini contradictoirement avec votre comité de pilotage en début de mission.",
  },
  {
    q: "Combien de temps dure une mission de conseil IA ?",
    a: "Les durées varient selon le périmètre : audit IA initial entre 2 et 4 semaines, mission de stratégie entre 4 et 8 semaines, accompagnement opérationnel entre 3 et 12 mois. Nous privilégions des sprints courts (2 à 6 semaines) avec livrables intermédiaires plutôt que des missions au long cours non séquencées.",
  },
  {
    q: "Quand faut-il faire appel à un cabinet de conseil en IA ?",
    a: "Trois signaux justifient l'appel à un cabinet : les équipes s'équipent en outils IA en ordre dispersé sans cap commun, des budgets sont engagés sans indicateur de retour, ou des pilotes prometteurs ne passent jamais à l'échelle. C'est aussi pertinent en amont d'un investissement important, pour objectiver les arbitrages, ou face à une échéance de conformité (RGPD, AI Act). Dans tous les cas, mieux vaut cadrer avant de déployer : un diagnostic initial évite des mois d'efforts dispersés.",
  },
  {
    q: "Faut-il préparer ses données avant de lancer un projet d'IA ?",
    a: "Souvent, oui. La donnée est le carburant de l'IA : un agent, un RAG ou un modèle d'analyse ne tient ses promesses que si les données sont fiables, accessibles et gouvernées. La plupart des projets d'IA qui échouent butent sur la donnée avant de buter sur la technologie. Nous ne recommandons pas pour autant un grand chantier data préalable : il vaut mieux partir d'un cas d'usage prioritaire et ne préparer que les données qu'il exige. C'est l'objet de notre conseil data & IA, qui cadre le socle data au service d'usages concrets.",
  },
]

/* ───────── Repères chiffrés (faits sourcés, citables) ───────── */

const MARKET_STATS = [
  {
    Icon: BarChart3,
    stat: '≥ 30 %',
    label: "des projets d'IA générative abandonnés après la preuve de concept d'ici fin 2025, surtout pour des raisons organisationnelles",
    source: 'Gartner, 2024',
  },
  {
    Icon: Scale,
    stat: '1ᵉʳ août 2024',
    label: "entrée en vigueur de l'AI Act européen (règlement 2024/1689) : gouvernance des usages d'IA par niveau de risque",
    source: 'Commission européenne',
  },
  {
    Icon: ShieldCheck,
    stat: '25 mai 2018',
    label: "application du RGPD, cadre de conformité de tout traitement de données par un système d'IA",
    source: 'CNIL',
  },
]

/* ───────── Définitions clés (ancrage d'entités pour la recherche générative) ───────── */

const GLOSSARY = [
  {
    term: 'Cabinet de conseil en IA',
    def: "Partenaire externe qui aide une entreprise à passer de l'intention à l'usage : audit des processus, stratégie et feuille de route, accompagnement au déploiement, gouvernance et formation des équipes.",
  },
  {
    term: 'Audit IA',
    def: "État des lieux des processus, outils, données et compétences, débouchant sur une cartographie des cas d'usage prioritaires classés par impact et faisabilité.",
  },
  {
    term: 'Gouvernance IA',
    def: "Règles et instances (charte d'usage, registre des systèmes, conformité RGPD et AI Act, revue humaine) qui encadrent un déploiement maîtrisé de l'IA en interne.",
  },
  {
    term: 'AI Act',
    def: "Règlement européen 2024/1689 sur l'intelligence artificielle, qui classe les systèmes par niveau de risque et impose documentation, traçabilité et garde-fous.",
  },
  {
    term: 'ROI IA',
    def: "Retour sur investissement d'un projet d'IA, mesuré sur trois axes : productivité (temps gagné), qualité (erreurs, conformité) et capacité (usages nouveaux rendus possibles).",
  },
]

/* ───────── Sources de référence (liens d'autorité, suivis) ───────── */

const REFERENCES = [
  { label: "AI Act — texte officiel (EUR-Lex, règlement 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "Cadre réglementaire de l'IA — Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
  { label: "Intelligence artificielle — CNIL", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── Meta ───────── */

const META_DESC = "Conseil IA pour PME, ETI et grands groupes : audit des usages, stratégie, feuille de route et développement des solutions sur mesure. Cadrage gratuit."
const KEYWORDS = "conseil ia, conseil en intelligence artificielle, conseil en ia, conseil intelligence artificielle, accompagnement ia, accompagnement ia entreprise, accompagnement intelligence artificielle, expert conseil ia, transformation ia"

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, Cabinet de conseil IA',
  description: "Cabinet de conseil spécialisé en intelligence artificielle pour entreprises. Audit, stratégie, développement de solutions sur mesure et transformation.",
  url: 'https://www.master-ia.fr/conseil-intelligence-artificielle',
  serviceType: ['Audit IA', 'Stratégie IA', "Développement de solutions IA sur mesure", 'Accompagnement IA', 'Transformation IA'],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/conseil-intelligence-artificielle#article',
  headline: "Le cabinet de conseil en intelligence artificielle qui forme vos équipes",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-04-21',
  dateModified: '2026-07-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/conseil-intelligence-artificielle#webpage' },
  about: ['Conseil en intelligence artificielle', 'Audit IA', 'Stratégie IA', "Gouvernance de l'IA"],
  // GEO : passages lus/cités en priorité par les assistants vocaux et génératifs.
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  citation: [
    'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689',
    'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025',
  ],
}

/* ───────── Composant ───────── */

const answerStyle = {
  background: BG_SOFT, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${BLUE}`,
  borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7,
  color: INK, margin: '0 0 24px', maxWidth: 880,
}

export default function ConseilIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  return (
    <>
      <SEOHead
        title="Conseil en intelligence artificielle pour entreprises | Masteria"
        description={META_DESC}
        slug="conseil-intelligence-artificielle"
        keywords={KEYWORDS}
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Agence IA', slug: 'agence-ia' },
          { name: 'Conseil IA', slug: 'conseil-intelligence-artificielle' },
        ]}
        faqItems={FAQ_CONSEIL}
        datePublished="2026-04-21"
        dateModified="2026-07-30"
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

        <div style={{ maxWidth: 920, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#5B6679' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Conseil IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Cabinet de conseil IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Le cabinet de conseil en
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>intelligence artificielle qui forme vos équipes</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${BLUE}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>Masteria est un cabinet de conseil en intelligence artificielle fondé en 2022 à Lyon. Nous aidons PME, ETI et grands groupes à auditer leurs usages, définir leur stratégie IA et déployer les cas d'usage à fort ROI, en France, en Suisse et en Belgique.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Notre singularité : nous ne nous arrêtons pas au rapport. Nous concevons et développons les solutions sur mesure qui en découlent, et nous formons les équipes qui les utilisent.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Contacter notre équipe
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir nos services
            </a>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré (SEO/GEO : jump-to links + cibles d'ancre pour sitelinks) ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#services', 'Nos services'],
            ['#deroulement', "Déroulé d'une mission"],
            ['#choisir', 'Cabinet, ESN ou freelance'],
            ['#pourquoi', 'Pourquoi un cabinet'],
            ['#chiffres', 'Chiffres 2026'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: INK, textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* QUE FAIT UN CABINET DE CONSEIL EN IA : réponse directe (éditorial asymétrique) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Le rôle du cabinet</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que fait un cabinet de conseil en IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong style={{ color: INK }}>Un cabinet de conseil en IA aide les entreprises à passer de l'intention à l'usage : il audite les processus et les outils, identifie les cas d'usage rentables, définit la stratégie et la feuille de route, encadre le déploiement, structure la gouvernance et forme les équipes pour ancrer les usages dans la durée.</strong>
              </p>
            </div>

            <div style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ marginTop: 0, marginBottom: 22 }}>
                Concrètement, une mission de conseil en intelligence artificielle couvre cinq champs d'intervention :
              </p>
              <ul style={{ margin: '0 0 26px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {MISSIONS.map((m, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <m.Icon size={18} color={BLUE} strokeWidth={2} aria-hidden="true" style={{ flexShrink: 0, marginTop: 4 }} />
                    <span>
                      <strong style={{ color: INK }}>{m.strong}</strong> {m.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p style={{ marginBottom: 0 }}>
                Masteria couvre ces cinq missions avec une particularité : nous prolongeons le conseil par la mise en œuvre, en concevant et en développant nous-mêmes les solutions retenues. Pour le volet stratégique, consultez notre offre de <Link to="/conseil-strategie-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>conseil stratégie IA</Link> ; pour le passage à la réalisation, notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link> ; pour le détail de nos expertises, parcourez <a href="#services" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>nos services</a> ci-dessous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PASSER DU CONSEIL À LA SOLUTION : pont vers le développement sur mesure (cartes filet supérieur) */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Du conseil à la mise en œuvre</div>
          <h2 style={{ ...h2Style, marginBottom: 16 }}>
            Passer du conseil à la solution
          </h2>
          <p style={{ fontSize: 16, color: GREY_700, lineHeight: 1.75, maxWidth: 820, marginBottom: 36 }}>
            <strong style={{ color: INK }}>Un cabinet de conseil classique remet ses recommandations puis se retire. Masteria conçoit ET développe les solutions qui en découlent.</strong>{' '}
            Une fois la feuille de route arbitrée, la même équipe passe à la réalisation : agents autonomes, copilotes internes, intégrations à votre SI, automatisations métier. Le conseil garde la maîtrise d'ouvrage, l'exécution reste alignée sur la trajectoire validée.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 36 }}>
            {[
              { Icon: Cpu, title: 'Agence de développement IA', desc: "Conception et développement de solutions IA sur mesure, du cadrage fonctionnel à la mise en production, avec une équipe qui code et documente.", href: '/agence-developpement-ia', cta: 'Découvrir le développement IA' },
              { Icon: Boxes, title: 'Outils IA sur mesure', desc: "Copilotes internes, assistants documentaires, agents branchés sur vos données : des outils propres à votre métier, taillés pour vos processus.", href: '/outils-ia-sur-mesure', cta: 'Voir les outils sur mesure' },
              { Icon: Workflow, title: 'Automatisation des processus', desc: "Workflows et chaînes de traitement répétitives (documents, emails, reporting) conçus et déployés sur vos outils existants.", href: '/agence-automatisation-ia', cta: "Découvrir l'automatisation" },
            ].map((b, i) => (
              <Link key={i} to={b.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  ...cardStyle, borderTop: `3px solid ${BLUE}`,
                  padding: 28, height: '100%', boxSizing: 'border-box',
                  display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
                >
                  <div style={{ ...iconTileStyle, marginBottom: 18 }}>
                    <b.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 10, letterSpacing: '-0.01em' }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: '0 0 16px' }}>{b.desc}</p>
                  <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, color: BLUE, fontWeight: 700 }}>
                    {b.cta} <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: GREY_500, lineHeight: 1.65, margin: 0, maxWidth: 820 }}>
            Conseil et développement sur mesure sont des prestations sur devis, non finançables par l'OPCO. Seule la formation associée, certifiée Qualiopi, l'est.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ scrollMarginTop: 96, background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={kickerStyle}>Nos expertises</div>
            <h2 style={{ ...h2Style, marginBottom: 16 }}>
              4 pôles pour transformer votre organisation par l'IA
            </h2>
            <p style={{ fontSize: 16, color: GREY_500, maxWidth: 660, margin: '0 auto', lineHeight: 1.7 }}>
              De l'audit initial à l'industrialisation, nos missions s'articulent autour de quatre expertises complémentaires, portées par une même équipe et cadencées par des livrables validés en comité de pilotage.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                <div style={{ ...iconTileStyle, marginBottom: 20 }}>
                  <s.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800,
                  color: INK, marginBottom: 12, letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, marginBottom: 18 }}>
                  {s.desc}
                </p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, marginTop: 'auto' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREY_500, marginBottom: 10 }}>
                    Livrables
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {s.deliverables.map((d, j) => (
                      <li key={j} style={{ fontSize: 13, color: GREY_700, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <Check size={16} color={BLUE} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DIAGNOSTIC : pont vers l'offre d'entrée productisée */}
      <section style={{ background: '#fff', padding: 'clamp(40px, 6vw, 64px) clamp(20px, 4vw, 32px)' }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          background: BLUE_SOFT, border: '1px solid #BFDBFE', borderRadius: 16,
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: '1 1 440px' }}>
            <div style={kickerStyle}>Par où commencer</div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 10 }}>
              Commencez par un diagnostic IA
            </h2>
            <p style={{ fontSize: 15, color: GREY_700, lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
              En une journée, nous évaluons votre maturité IA, identifions les premiers cas d'usage à fort ROI et posons une feuille de route. Le cadrage initial est gratuit et sans engagement.
            </p>
          </div>
          <Link to="/diagnostic-ia" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: BLUE, color: '#fff', padding: '14px 26px', borderRadius: 12,
            textDecoration: 'none', fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap',
          }}>
            Découvrir le diagnostic IA <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* MÉTHODOLOGIE (timeline à rail) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Notre méthodologie</div>
            <h2 id="deroulement" style={{ ...h2Style, scrollMarginTop: 96, marginBottom: 18 }}>
              Comment se déroule une mission de conseil IA ?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 720, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Une mission Masteria suit quatre étapes : comprendre votre organisation, prioriser les cas d'usage selon leur impact et leur faisabilité, prototyper sur des périmètres réels, puis déployer avec formation des équipes et mesure du ROI.</strong>{' '}
              Chaque étape se conclut par un livrable validé avec votre comité de pilotage, du cadrage initial au bilan à 12 mois.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: BORDER }} />
            {METHODO.map((m, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                padding: i === 0 ? '0 0 18px' : (i === METHODO.length - 1 ? '18px 0 0' : '18px 0'),
              }}>
                <div aria-hidden="true" style={{
                  width: 44, height: 44, borderRadius: 99, background: BLUE_SOFT,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  position: 'relative', zIndex: 1,
                  fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: BLUE,
                }}>
                  {m.n}
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 8 }}>
                    <h3 style={{
                      fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800,
                      color: INK, margin: 0, letterSpacing: '-0.01em',
                    }}>
                      {m.title}
                    </h3>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: 12.5, fontWeight: 600, color: GREY_700,
                      background: BG_SOFT, border: `1px solid ${BORDER}`,
                      padding: '4px 12px', borderRadius: 99,
                    }}>
                      <Clock size={13} color={BLUE} strokeWidth={2.2} aria-hidden="true" /> {m.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIF cabinet / ESN / freelance (ancre sombre — pivot preuve) */}
      <section style={{ position: 'relative', background: '#0A0F1E', padding: SECTION_PAD, overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Bien choisir son partenaire</div>
          <h2 id="choisir" style={{ ...h2Style, scrollMarginTop: 96, color: '#F8FAFC' }}>
            Cabinet de conseil IA, ESN généraliste ou freelance : que choisir ?
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${BLUE}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un cabinet de conseil IA spécialisé apporte le cadrage stratégique, la gouvernance et le transfert de compétences ; une ESN généraliste fournit des renforts de capacité sur des projets longs ; un freelance traite un besoin ponctuel et délimité.</strong>{' '}
            Pour bâtir une trajectoire IA durable et arbitrer les investissements, le cabinet spécialisé reste l'option la plus structurante.
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #1E293B', borderRadius: 16 }}>
            <table aria-label="Comparatif entre un cabinet de conseil IA spécialisé, une ESN généraliste et un freelance IA" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 760 }}>
              <thead>
                <tr>
                  {['Critère', 'Cabinet de conseil IA spécialisé', 'ESN généraliste', 'Freelance IA'].map((h, i) => (
                    <th key={i} scope="col" style={{
                      background: i === 1 ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.05)', textAlign: 'left',
                      padding: '14px 18px', borderBottom: '1px solid #1E293B',
                      fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13.5,
                      color: i === 1 ? '#60A5FA' : '#E2E8F0', whiteSpace: 'nowrap',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => {
                  const cell = {
                    padding: '16px 18px',
                    borderTop: i === 0 ? 'none' : '1px solid #1E293B',
                    color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top',
                  }
                  return (
                    <tr key={i}>
                      <th scope="row" style={{
                        ...cell, textAlign: 'left',
                        fontFamily: 'Nunito, sans-serif', fontWeight: 700,
                        color: '#F8FAFC', fontSize: 13.5, whiteSpace: 'nowrap',
                      }}>
                        {row.critere}
                      </th>
                      <td style={{ ...cell, color: '#fff', fontWeight: 500, background: 'rgba(37,99,235,0.10)' }}>{row.cabinet}</td>
                      <td style={cell}>{row.esn}</td>
                      <td style={cell}>{row.freelance}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, marginTop: 16, marginBottom: 0 }}>
            Le cabinet spécialisé combine indépendance de conseil et transfert de compétences ; Masteria y ajoute la certification Qualiopi, qui rend le volet formation finançable par votre OPCO.
          </p>
        </div>
      </section>

      {/* POUR QUI */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Pour qui</div>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>
              À qui s'adresse notre cabinet de conseil IA ?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 740, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Masteria accompagne les PME et ETI qui structurent leur démarche IA, les grandes entreprises qui cherchent un partenaire agile pour challenger leurs équipes, et les directions métier qui déploient l'IA sur leur périmètre.</strong>{' '}
              Les formats sont modulaires, d'une semaine de cadrage à douze mois d'accompagnement.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}>
            {POUR_QUI.map((p, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ ...iconTileStyle, marginBottom: 18 }}>
                  <p.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 10, letterSpacing: '-0.01em' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFÉRENCIATEURS */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={kickerStyle}>Notre différence</div>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>
              Pourquoi Masteria&nbsp;?
            </h2>
            <p style={{ fontSize: 16, color: GREY_700, maxWidth: 740, margin: '0 auto', lineHeight: 1.7 }}>
              <strong style={{ color: INK }}>Masteria réunit le conseil, le développement sur mesure et la formation : chaque mission peut aller de la stratégie jusqu'à la solution en production, sans passer la main à un tiers.</strong>{' '}
              S'y ajoutent des prototypes livrés en 3 à 6 semaines, un cadrage RGPD et AI Act systématique et des indicateurs de ROI définis dès le lancement.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {DIFFERENCIATEURS.map((d, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${BLUE}` }}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: 13.5, color: GREY_700, lineHeight: 1.7, margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENU ÉDITORIAL : densité SEO sur "conseil IA entreprise" (éditorial asymétrique) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Comprendre l'enjeu</div>
              <h2 id="pourquoi" style={{ ...h2Style, scrollMarginTop: 96, marginBottom: 18 }}>
                Pourquoi recourir à un cabinet de conseil en intelligence artificielle ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong style={{ color: INK }}>Recourir à un cabinet de conseil en intelligence artificielle permet d'objectiver les arbitrages d'investissement, de cadrer les usages (RGPD, AI Act) et de garantir un retour mesurable sur chaque projet engagé. Indépendant des éditeurs, le cabinet sélectionne les outils sans conflit d'intérêt et séquence la trajectoire de déploiement.</strong>
              </p>
            </div>

            <div style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
          <p style={{ marginTop: 0, marginBottom: 20 }}>
            La généralisation des modèles de langage (ChatGPT, Claude, Gemini, Mistral, Microsoft Copilot) a déplacé l'enjeu : la technologie est accessible à tous, sa bonne intégration aux processus métier reste à construire. Une mission de conseil apporte cette lecture stratégique, opérationnelle et réglementaire de la transformation, jusqu'à <Link to="/ia-generative-entreprise" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>déployer l'IA générative en entreprise</Link> sur des cas d'usage à fort impact.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Cadrer la stratégie IA avant de déployer
          </h3>
          <p style={{ marginBottom: 20 }}>
            Plus de 70 % des projets d'IA générative engagés en 2024-2025 n'ont pas dépassé le stade du proof of concept (source : enquêtes McKinsey, BCG, Gartner). La cause principale est <strong style={{ color: INK }}>organisationnelle et stratégique</strong>, bien avant d'être technique. Sans cadrage initial, les équipes se dispersent sur des cas d'usage à faible valeur, dupliquent des outils et accumulent des coûts d'abonnement sans ROI mesurable. Un audit IA hiérarchise les cas d'usage selon leur impact business, leur faisabilité technique et leur niveau de risque réglementaire (RGPD, AI Act européen, sécurité des données), puis fixe une trajectoire d'investissement que le comité de direction peut arbitrer en connaissance de cause.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Gouvernance, RGPD et AI Act : un cadre désormais incontournable
          </h3>
          <p style={{ marginBottom: 20 }}>
            Depuis l'entrée en application progressive de l'AI Act européen, toute entreprise déployant des systèmes d'IA (y compris des assistants génériques comme ChatGPT Enterprise ou Microsoft Copilot) doit documenter ses usages, classifier ses systèmes par niveau de risque et tracer les flux de données. Notre mission de conseil intègre systématiquement un volet gouvernance : <strong style={{ color: INK }}>charte d'usage interne, registre des traitements IA, politique de confidentialité des prompts, procédures de revue humaine</strong>. Cette dimension réglementaire est devenue un préalable à tout déploiement à l'échelle. Pour aller plus loin sur ce cadre, consultez notre approche de la <Link to="/gouvernance-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>gouvernance de l'IA et de la conformité à l'AI Act</Link>.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Conseil, développement et formation : un modèle intégré pour ancrer les usages
          </h3>
          <p style={{ marginBottom: 20 }}>
            La singularité de Masteria réside dans la continuité entre le conseil, la réalisation et la formation. Un cabinet classique remet son rapport puis se retire. Nous restons pour <strong style={{ color: INK }}>concevoir et développer les solutions retenues</strong>, via notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link>, puis pour former les équipes qui les utilisent, du comité de direction (avec notre <Link to="/formation-ia-dirigeants" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>formation IA pour dirigeants</Link>) jusqu'aux fonctions métier. Cette continuité évite le piège bien connu du « livrable sans suite » : les recommandations stratégiques deviennent des outils en production et des compétences réelles, opérables au quotidien. Le conseil et le développement se chiffrent sur devis ; seul le volet formation, certifié Qualiopi, est éligible aux financements OPCO.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Outils, modèles et stack technique : choisir sans s'enfermer
          </h3>
          <p style={{ marginBottom: 20 }}>
            Le marché des outils IA évolue à un rythme inédit. Entre les modèles propriétaires (OpenAI, Anthropic, Google, Microsoft) et les modèles ouverts (Mistral, Llama, DeepSeek), entre les solutions souveraines hébergées en Europe et les API généralistes, les arbitrages dépendent de votre stack existante, de votre niveau de sensibilité des données et de votre exposition au risque de dépendance. Nous accompagnons ce choix de manière <strong style={{ color: INK }}>agnostique</strong>, en pondérant performance, coût d'usage, conformité RGPD et capacité d'intégration avec vos outils métier (CRM, ERP, suite collaborative). Lorsque les arbitrages débouchent sur des développements sur mesure, la même équipe passe à la réalisation : notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link> conçoit et code les <Link to="/outils-ia-sur-mesure" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>outils IA sur mesure</Link> ; pour les chaînes de traitement répétitives, notre <Link to="/agence-automatisation-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence d'automatisation IA</Link> déploie les workflows. Le conseil garde la maîtrise d'ouvrage, l'exécution reste alignée sur la feuille de route.
          </p>

          <h3 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800,
            color: INK, marginTop: 36, marginBottom: 14, letterSpacing: '-0.01em',
          }}>
            Quels résultats attendre d'une mission de conseil IA ?
          </h3>
          <p style={{ marginBottom: 20 }}>
            Sur les missions menées en 2024-2025, nos clients constatent en moyenne : <strong style={{ color: INK }}>6 heures gagnées par semaine et par collaborateur formé</strong> sur des tâches récurrentes (rédaction, synthèse, analyse documentaire, préparation de réunions, traitement d'emails), une réduction de 30 à 50 % du temps de traitement sur certains processus identifiés (réponse aux appels d'offres, comptes-rendus, analyse de contrats), et une montée en autonomie progressive permettant de réduire la dépendance aux prestataires externes pour les usages courants. Ces gains se mesurent dès les 3 premiers mois post-formation, à condition d'avoir cadré les indicateurs en amont.
          </p>

          <p style={{ marginBottom: 0 }}>
            Pour situer votre point de départ avant tout engagement, notre <Link to="/diagnostic-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>diagnostic IA</Link> évalue gratuitement votre maturité et fait remonter les premiers cas d'usage. Quand la direction veut une vision exhaustive avant d'industrialiser (maturité, données, conformité RGPD et AI Act), notre <Link to="/audit-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>audit IA</Link> livre le rapport complet et la feuille de route chiffrée. Et quand l'enjeu est de tenir la transformation dans la durée jusqu'aux usages installés, notre <Link to="/accompagnement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>accompagnement IA</Link> couvre le cadrage, le déploiement, la conduite du changement et l'<Link to="/acculturation-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>acculturation des équipes</Link>. Si votre besoin relève d'un métier précis, nos <Link to="/ia-secteurs" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>cas d'usage de l'IA par secteur</Link> détaillent les leviers prioritaires. Et pour structurer la décision au niveau direction, notre <Link to="/conseil-strategie-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>conseil en stratégie IA</Link> formalise une feuille de route arbitrable en COMEX. Pour cadrer le budget en amont, notre repère sur le <Link to="/prix-projet-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>prix d'un projet IA</Link> donne les fourchettes à anticiper. Et si vous comparez plusieurs prestataires, notre guide du <Link to="/prestataire-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>prestataire IA</Link> compare les cinq familles d'acteurs, et celui du <Link to="/meilleur-cabinet-conseil-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>meilleur cabinet de conseil en IA</Link> détaille les trois compétences à exiger et les questions à poser. Si votre besoin penche vers le développement, comparez les acteurs dans notre guide de la <Link to="/meilleure-agence-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>meilleure agence IA</Link>.
          </p>

          <p style={{ marginBottom: 0, fontStyle: 'italic', color: GREY_700, borderLeft: `3px solid ${BLUE}`, paddingLeft: 16, marginTop: 32 }}>
            Vous envisagez un projet IA dans votre organisation ? <Link to="/contact" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>Échangeons 30 minutes</Link>{' '}pour cadrer vos enjeux et identifier les premiers cas d'usage à fort impact.
          </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPÈRES, DÉFINITIONS & SOURCES (SEO + GEO) */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={kickerStyle}>Repères du marché</div>
          <h2 id="chiffres" style={{ ...h2Style, scrollMarginTop: 96 }}>
            L'IA en entreprise en 2026 : ce que disent les chiffres
          </h2>
          <p style={{ fontSize: 16, color: GREY_700, lineHeight: 1.75, maxWidth: 820, marginBottom: 32 }}>
            <strong style={{ color: INK }}>La technologie est accessible à toutes les entreprises ; c'est son intégration aux processus et sa conformité qui font la différence.</strong>{' '}
            Trois repères vérifiables cadrent l'enjeu et expliquent pourquoi le conseil et la gouvernance sont devenus déterminants.
          </p>

          {/* Repères chiffrés sourcés */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginBottom: 40 }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ ...iconTileStyle, marginBottom: 14 }}>
                  <s.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: INK, lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: GREY_700, lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: GREY_500, margin: 0, fontWeight: 600 }}>Source : {s.source}</p>
              </div>
            ))}
          </div>

          {/* Définitions clés */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '0 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={BLUE} strokeWidth={2.2} aria-hidden="true" /> Définitions clés
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${BLUE_SOFT}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: INK, marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: GREY_700, lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          {/* Sources de référence */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '44px 0 16px' }}>
            Sources de référence
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
            {REFERENCES.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: BLUE, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14.5 }}>
                  <ExternalLink size={15} strokeWidth={2.2} aria-hidden="true" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQ_CONSEIL} title="Questions fréquentes sur nos missions de conseil IA" bg="#F9FAFB" />

      {/* FORMATION : offre secondaire, pour ancrer les usages */}
      <section style={{ background: '#fff', padding: '56px clamp(20px, 4vw, 32px)' }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          background: BG_SOFT, border: `1px solid ${BORDER}`, borderRadius: 16,
          padding: 'clamp(28px, 4vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: '1 1 420px' }}>
            <div style={kickerStyle}>Pour ancrer les usages</div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 10 }}>
              Et la formation des équipes ?
            </h2>
            <p style={{ fontSize: 15, color: GREY_700, lineHeight: 1.7, margin: 0, maxWidth: 680 }}>
              Une fois la solution déployée, nos programmes de formation rendent vos équipes autonomes sur les outils mis en place. Volet certifié Qualiopi et finançable OPCO, en complément du conseil et du développement.
            </p>
          </div>
          <Link to="/formation-intelligence-artificielle" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: INK, border: `1px solid ${BORDER}`,
            padding: '14px 24px', borderRadius: 12,
            textDecoration: 'none', fontSize: 14.5, fontWeight: 700, whiteSpace: 'nowrap',
          }}>
            Voir les formations IA <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* LE FONDATEUR — preuve sociale E-E-A-T */}
      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria est un cabinet spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Depuis 2022', 'spécialisé uniquement IA'],
              ['+1 500', 'professionnels formés'],
              ['Indépendant', 'des éditeurs de solutions'],
              ['FR · CH · BE', 'sur site ou à distance'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderNote bg="#fff" />

      {/* CTA FINAL (charte sombre unique #0A0F1E) */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          maxWidth: 1120, margin: '0 auto',
          background: '#0A0F1E', color: '#fff',
          borderRadius: 16,
          padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)',
          textAlign: 'center',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 900,
              lineHeight: 1.15, letterSpacing: '-0.02em',
              marginBottom: 18, color: '#fff',
            }}>
              Parlons de votre projet IA
            </h2>
            <p style={{ fontSize: 16, color: '#CBD5E1', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 36px' }}>
              Un premier échange de 30 minutes pour cadrer vos besoins, sans engagement. Nous revenons vers vous sous 24 h ouvrées avec une proposition adaptée.
            </p>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: BLUE, color: '#fff',
              padding: '16px 32px', borderRadius: 12,
              textDecoration: 'none', fontSize: 15, fontWeight: 800,
            }}>
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
