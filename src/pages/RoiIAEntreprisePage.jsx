import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, TrendingUp, Filter, FlaskConical, GitBranch, Receipt,
  Gauge, Globe2, Check, AlertTriangle, Calendar, Layers, Target, Users,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier — « ROI de l'IA en entreprise » (slug /roi-ia-entreprise).
 * Intention : comprendre pourquoi les gains mesurés de l'IA n'arrivent pas au
 * compte de résultat. Mots-clés tissés : « productivité ia entreprise »,
 * « ia et productivité », « roi ia », « roi projet ia », « kpi ia »,
 * « business case ia », « mesurer le roi de l'ia ».
 *
 * PARI GEO plus que SEO : les volumes de recherche français sur ce champ sont
 * quasi nuls (vérifié Semrush, août 2026, ~290 recherches/mois tous termes
 * confondus, zéro sur « 95 % des projets ia échouent »). La demande existe mais
 * elle a migré vers les assistants conversationnels. La page vise donc la
 * citation par les modèles : faits vérifiables, attribués, avec période de
 * collecte, plus une FAQ rédigée dans la formulation réelle des questions.
 *
 * INTÉGRITÉ STRICTE : chaque chiffre est vérifié sur sa source primaire et
 * affiché avec son échantillon ET sa période de mesure (pas la date de
 * publication). Aucun résultat client, aucun logo, aucun pourcentage fabriqué.
 * Ne jamais écrire que l'IA serait faible en calcul. Ne pas citer le prétendu
 * « 37 % du temps économisé réabsorbé » (absent de l'article HBR) ni le
 * « moins de 10 % ont mis l'IA à l'échelle » (absent de l'AI Index).
 *
 * Design : patron money premium, hero sombre #0A0F1E, accent #2563EB unique.
 * Maillage : /diagnostic-ia, /audit-ia, /conseil-strategie-ia, /methode-projet-ia,
 * /prix-projet-ia, /etudes-de-cas-ia, /formation-ia-entreprise, /contact.
 */

const SLUG = 'roi-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "ROI de l'IA en entreprise : que disent les études ? | Masteria"
const META_DESC = "80 % des salariés gagnent du temps avec l'IA, 6 % des entreprises le voient dans leurs comptes. Ce que mesurent vraiment les études, et où la conversion casse."

const KEYWORDS = "roi ia, roi ia entreprise, roi projet ia, productivité ia entreprise, ia et productivité, mesurer le roi de l'ia, kpi ia, business case ia, gains de productivité ia, 95% des projets ia échouent"

/* ───────── Styles partagés (patron money) ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const pStyle = { fontSize: 16, lineHeight: 1.75, color: '#374151', margin: '0 0 16px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }
const srcStyle = { fontSize: 13, lineHeight: 1.6, color: '#6B7280', margin: '14px 0 0' }

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

/* ───────── Données ───────── */

const HERO_CHIPS = [
  { icon: FlaskConical, label: '4 essais contrôlés randomisés' },
  { icon: Calendar, label: 'Période de mesure affichée' },
  { icon: Globe2, label: 'Données France et zone euro' },
]

const EN_BREF = [
  { label: 'Le constat', value: "80 % des salariés qui utilisent l'IA déclarent une hausse de leur productivité. 6 % des entreprises attribuent à l'IA au moins 5 % de leur résultat d'exploitation." },
  { label: 'La cause', value: "Le gain se produit au poste de travail. Rien ne le convertit en résultat, faute de mesure intermédiaire et de refonte des processus." },
  { label: 'Le chiffre mal lu', value: "Les « 95 % » proviennent d'un rapport dont les propres données montrent 80 % de pilotes aboutis sur les outils généralistes." },
  { label: 'Le piège de méthode', value: "Mesurer l'effet d'un pilote sur le compte de résultat à six mois revient à mesurer le creux d'investissement d'une technologie générique." },
]

const ETUDES = [
  {
    metier: 'Support client',
    revue: 'Quarterly Journal of Economics, 2025',
    modele: 'Assistant bâti sur GPT-3',
    periode: 'automne 2020 à hiver 2021 · 5 172 agents',
    effet: '+15 % de tickets résolus par heure',
    nuance: "Les moins expérimentés progressent en vitesse et en qualité. Les plus expérimentés gagnent peu en vitesse et perdent légèrement en qualité.",
  },
  {
    metier: 'Rédaction professionnelle',
    revue: 'Science, 2023',
    modele: 'ChatGPT, GPT-3.5',
    periode: 'début 2023 · 453 cadres',
    effet: '−40 % de temps, +18 % de qualité',
    nuance: "Tâches d'écriture courtes et isolées. Les écarts entre les plus performants et les autres se resserrent.",
  },
  {
    metier: 'Conseil',
    revue: 'Organization Science, 2026',
    modele: 'GPT-4, sans outils',
    periode: 'avril 2023 · 758 consultants',
    effet: '+12,2 % de tâches, +25,1 % de vitesse',
    nuance: "Sur une tâche située hors du périmètre du modèle, 19 % de bonnes réponses en moins que le groupe travaillant sans IA.",
    highlight: true,
  },
  {
    metier: 'Développement logiciel',
    revue: 'Management Science, 2025',
    modele: 'GitHub Copilot',
    periode: 'avant 2024 · 4 867 développeurs',
    effet: '+26 % de tâches livrées',
    nuance: "Trois expérimentations en entreprise, de deux à huit mois. Gains plus élevés chez les moins expérimentés.",
  },
]

const CHAINE = [
  { n: '1', icon: Users, title: 'Adoption réelle', desc: "Usage hebdomadaire par tâche, pas nombre de licences activées. Une licence attribuée n'est pas un usage.", kpi: "Part des collaborateurs utilisant l'outil sur une tâche identifiée, chaque semaine." },
  { n: '2', icon: Gauge, title: 'Gain unitaire net', desc: "Temps mesuré avant et après sur un panel, sur une tâche précise, déduction faite de la vérification et de la reprise.", kpi: 'Minutes gagnées par occurrence, nettes du contrôle.' },
  { n: '3', icon: Layers, title: 'Capacité libérée', desc: 'Gain unitaire multiplié par le volume réel de la tâche sur la période.', kpi: 'Heures libérées par mois et par équipe.' },
  { n: '4', icon: GitBranch, title: 'Capacité convertie', desc: "Ce que l'organisation décide de faire de ces heures. C'est une décision de management, jamais un effet automatique de l'outil.", kpi: 'Part des heures libérées réaffectées à une destination nommée.', leak: true },
  { n: '5', icon: Receipt, title: 'Effet sur le résultat', desc: "Chiffre d'affaires supplémentaire, coût externe évité, délai raccourci, qualité remontée.", kpi: 'Ligne du compte de résultat identifiée avant le déploiement.' },
]

const DESTINATIONS = [
  { title: 'Absorber plus de volume', desc: "Traiter davantage de dossiers, de demandes ou de commandes à effectif constant." },
  { title: 'Éviter un recrutement', desc: "Couvrir une croissance d'activité sans ouvrir de poste, décision qui se constate au budget." },
  { title: 'Réduire une dépense externe', desc: "Réinternaliser ce qui était sous-traité. C'est là que les retours documentés sont les plus nets." },
  { title: 'Remonter la qualité ou le délai', desc: "Effet indirect mais réel sur la rétention client et sur les coûts de non-qualité." },
]

const QUESTIONS = [
  { q: 'Mesure-t-on un avant ?', a: "Sur chaque pilote en cours, existe-t-il un temps de référence relevé avant le déploiement. Sans lui, le retour est incalculable par construction, quelle que soit la qualité de l'outil." },
  { q: 'Qui possède la capacité libérée ?', a: "Les heures gagnées appartiennent-elles à quelqu'un, et cette personne a-t-elle un objectif sur ce qu'elle en fait. Sans propriétaire, la capacité se dissipe." },
  { q: 'Quels processus avons-nous redécoupés ?', a: "Combien de processus ont été repensés de bout en bout, par opposition à ceux qu'on a simplement outillés. C'est le facteur le plus corrélé à un effet mesurable sur le résultat." },
  { q: 'Que coûtent la vérification et la reprise ?', a: "Qui porte ce coût aujourd'hui, et apparaît-il quelque part dans nos calculs. Il change de porteur, donc il ne remonte dans aucun tableau de bord." },
  { q: 'Nos budgets vont-ils où c\'est mesurable ou où c\'est rentable ?', a: "Quelle part de la dépense IA vise une réduction de dépense externe, par opposition aux fonctions où l'attribution est simplement plus facile." },
]

const FAQ = [
  {
    q: 'Est-il vrai que 95 % des projets IA échouent ?',
    a: "Non, pas sous cette formulation. Le chiffre vient d'un rapport de juillet 2025 issu du projet NANDA du MIT, un document préliminaire non relu par les pairs. Il dit que 95 % des organisations interrogées n'ont pas mesuré de retour sur leur compte de résultat, ce qui n'est pas un taux d'échec de pilotes. Ses propres données page 6 montrent deux parcours distincts : pour les outils généralistes de type ChatGPT ou Copilot, 80 % des organisations ont exploré, 50 % ont piloté et 40 % ont déployé, soit 80 % des pilotes aboutis. Pour les développements sur mesure, 60 % ont exploré, 20 % ont piloté et 5 % ont déployé, soit 25 % des pilotes aboutis. Le « 95 % » décrit le second parcours, jamais le premier.",
  },
  {
    q: "L'IA fait-elle vraiment gagner en productivité ?",
    a: "Oui, et c'est établi par des essais contrôlés randomisés publiés dans des revues à comité de lecture. Sur le support client, 5 172 agents ont résolu 15 % de tickets en plus par heure. Sur la rédaction professionnelle, 453 cadres ont réduit leur temps de 40 % avec une qualité en hausse de 18 %. Sur le conseil, 758 consultants ont traité 12,2 % de tâches en plus, 25,1 % plus vite. Sur le développement logiciel, 4 867 développeurs ont livré 26 % de tâches en plus. L'effet est plus fort sur les profils juniors et sur les tâches standardisées.",
  },
  {
    q: 'Pourquoi ces gains de productivité ne se voient-ils pas dans les résultats ?',
    a: "Parce que rien ne les convertit. Le gain se produit au poste de travail, sous forme de minutes récupérées sur des tâches fragmentées. Cinq minutes gagnées quarante fois ne deviennent pas un équivalent temps plein sans redécoupage du processus et sans décision explicite sur l'usage de la capacité libérée. L'enquête McKinsey de 2026, menée auprès de 1 719 dirigeants et professionnels, mesure exactement cet écart : 80 % des salariés utilisant l'IA constatent une hausse de leur productivité individuelle, 37 % des organisations attribuent un effet quelconque à leur résultat d'exploitation, et 6 % seulement lui attribuent au moins 5 % de cet EBIT avec un impact jugé significatif.",
  },
  {
    q: 'Combien de temps faut-il pour voir un retour sur investissement ?',
    a: "Mesurer l'effet d'un pilote sur le compte de résultat six mois après son lancement produit presque mécaniquement un zéro. Les travaux de Brynjolfsson, Rock et Syverson sur la courbe en J montrent qu'une technologie à usage général exige des investissements incorporels préalables, refonte des processus, formation, réorganisation, passés en charges et jamais capitalisés. La productivité mesurée baisse d'abord et monte ensuite. Leur estimation corrigée place la productivité globale des facteurs 11,3 % au-dessus des mesures officielles fin 2004 et 15,9 % au-dessus fin 2017. La conséquence pratique est de mesurer les étages intermédiaires, qui bougent en semaines, plutôt que le seul résultat financier.",
  },
  {
    q: "Comment calculer le ROI d'un projet IA ?",
    a: "En suivant cinq étages plutôt qu'un seul. L'adoption réelle par tâche, le gain unitaire net mesuré avant et après sur un panel, la capacité libérée obtenue en multipliant ce gain par le volume, la capacité effectivement convertie vers une destination nommée, et enfin l'effet sur une ligne du compte de résultat identifiée avant le déploiement. La plupart des organisations mesurent le premier étage sous forme de licences et le cinquième sous forme d'EBIT, en laissant les trois du milieu vides. C'est au quatrième étage que la valeur se perd le plus souvent.",
  },
  {
    q: "Où le retour sur investissement de l'IA apparaît-il le plus vite ?",
    a: "Dans les fonctions support plutôt que dans les fonctions commerciales, alors que les budgets font l'inverse. Le rapport MIT NANDA documente des économies de 2 à 10 millions de dollars par an sur des contrats de sous-traitance de back-office supprimés, une baisse de 30 % des dépenses d'agences externes et un million de dollars par an sur des contrôles de risque réinternalisés. Le rapport précise que ces gains sont venus de la réduction de dépenses externes, sans réduction d'effectifs internes. Les budgets, eux, se concentrent sur les ventes et le marketing, où l'attribution est plus facile mais la valeur moins nette.",
  },
  {
    q: "Le coût de l'IA se limite-t-il aux licences ?",
    a: "Non. Il faut ajouter le temps de vérification et de reprise des productions, qui change de porteur et n'apparaît donc dans aucun calcul. Une étude de BetterUp Labs et du Stanford Social Media Lab publiée par la Harvard Business Review en septembre 2025, portant sur 1 150 salariés américains à temps plein, mesure que 40 % d'entre eux ont reçu dans le mois un livrable généré par IA d'apparence soignée mais sans substance, pour un traitement moyen d'une heure et cinquante-six minutes par incident, soit environ 186 dollars par salarié et par mois.",
  },
  {
    q: "L'IA détruit-elle des emplois ?",
    a: "Les données disponibles ne vont pas dans ce sens à ce stade. La Banque de France, sur l'enquête SAFE de la BCE du quatrième trimestre 2025 couvrant 4 968 entreprises de douze pays, observe que dans l'industrie manufacturière et les services les entreprises utilisant le plus l'IA anticipent une croissance de l'emploi plus élevée, pas plus faible. Les auteurs précisent que ces résultats sont descriptifs et non causaux. Deux autres travaux vont dans le même sens, dont une étude portant sur plus de 12 000 sociétés non financières de l'Union européenne.",
  },
  {
    q: 'Les entreprises françaises sont-elles en retard ?',
    a: "Oui, et l'écart se creuse. Sur l'enquête SAFE de la BCE du quatrième trimestre 2025, 23 % des entreprises françaises déclarent un usage modéré ou important de l'IA contre 39 % en zone euro, 46 % en Allemagne et 44 % en Espagne. L'écart ne s'explique ni par la taille ni par la composition sectorielle, et il est le plus marqué sur les grandes entreprises, 22 % en France contre 46 % en zone euro. La part de l'investissement IA dans l'investissement total prévu s'établit à 7,2 % en France contre 9,1 % en zone euro.",
  },
  {
    q: "Les études citées sont-elles encore valables en 2026 ?",
    a: "Elles restent valables comme planchers, pas comme plafonds. Toutes ces mesures portent sur des modèles antérieurs à 2024, dépourvus de raisonnement, d'exécution de code et de lecture de corpus longs. L'étude sur le support client mesure un assistant bâti sur GPT-3 déployé fin 2020, publiée cinq ans plus tard. Le point décisif est ailleurs : entre ces mesures et aujourd'hui, les modèles ont changé plusieurs fois de génération, et la part d'entreprises attribuant un effet significatif à leur résultat d'exploitation est restée à 6 % d'une année sur l'autre. Si le modèle était le facteur limitant, ce chiffre aurait bougé.",
  },
]

const MAILLAGE = [
  { to: '/calculateur-roi-ia', title: 'Calculateur de ROI IA', desc: "Chiffrer les cinq étages sur un de vos usages et voir à quel étage la valeur se perd." },
  { to: '/diagnostic-ia', title: 'Diagnostic IA', desc: "Identifier les usages qui méritent d'être mesurés et ceux qui ne le méritent pas." },
  { to: '/audit-ia', title: 'Audit IA', desc: "État des lieux de vos usages, de vos outils et de ce qui se perd entre les deux." },
  { to: '/conseil-strategie-ia', title: 'Conseil en stratégie IA', desc: "Cadrer une trajectoire et arbitrer les investissements par leur convertibilité." },
  { to: '/methode-projet-ia', title: 'Méthode projet IA', desc: "Comment un projet se cadre, se pilote et se mesure du premier jour à la mise à l'échelle." },
  { to: '/formation-ia-entreprise', title: 'Formation IA en entreprise', desc: "Installer les usages là où le gain unitaire est réel, et la vérification là où elle est nécessaire." },
  { to: '/prix-projet-ia', title: "Prix d'un projet IA", desc: "Fourchettes indicatives par livrable et modèles de facturation." },
]

const CITATIONS = [
  { name: 'MIT NANDA — The GenAI Divide: State of AI in Business 2025', url: 'https://mitsloan.mit.edu/' },
  { name: 'McKinsey — The State of AI, Global Survey', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { name: 'Brynjolfsson, Li & Raymond — Generative AI at Work, Quarterly Journal of Economics', url: 'https://academic.oup.com/qje/article/140/2/889/7990658' },
  { name: 'Noy & Zhang — Experimental evidence on the productivity effects of generative AI, Science', url: 'https://www.science.org/doi/10.1126/science.adh2586' },
  { name: "Dell'Acqua et al. — Navigating the Jagged Technological Frontier, Organization Science", url: 'https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838' },
  { name: 'Cui et al. — The Effects of Generative AI on High-Skilled Work, Management Science', url: 'https://pubsonline.informs.org/doi/10.1287/mnsc.2025.00535' },
  { name: 'Brynjolfsson, Rock & Syverson — The Productivity J-Curve, NBER Working Paper 25148', url: 'https://www.nber.org/papers/w25148' },
  { name: "METR — Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", url: 'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/' },
  { name: "Banque de France — Entreprises françaises : existe-t-il un écart d'adoption de l'IA ?", url: 'https://www.banque-france.fr/fr/actualites/entreprises-francaises-existe-t-il-un-ecart-dadoption-de-lia' },
  { name: "Insee — Les technologies de l'information et de la communication dans les entreprises en 2025", url: 'https://www.insee.fr/fr/statistiques/9025878' },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `https://www.master-ia.fr/${SLUG}#article`,
  headline: "ROI de l'IA en entreprise : ce que mesurent vraiment les études",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: `https://www.master-ia.fr/${SLUG}`,
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  inLanguage: 'fr-FR',
  about: [
    { '@type': 'Thing', name: "Retour sur investissement de l'intelligence artificielle" },
    { '@type': 'Thing', name: 'Productivité en entreprise' },
  ],
}

/* ───────── Sous-composants ───────── */

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20, background: 'none', border: 'none', padding: '22px 0', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.4 }}>{q}</span>
        <span aria-hidden="true" style={{ flexShrink: 0, color: c, fontSize: 22, fontWeight: 700, lineHeight: 1, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {/* Réponse TOUJOURS dans le DOM (repli CSS maxHeight) pour rester citable par les LLM */}
      <div aria-hidden={!open} style={{ maxHeight: open ? 1600 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.78, padding: '0 0 22px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function RoiIAEntreprisePage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: "ROI de l'IA en entreprise", slug: SLUG },
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
        citations={CITATIONS}
        speakable={['#reponse-directe', '#faq']}
        datePublished="2026-08-30"
        dateModified="2026-08-30"
        extraJsonLd={[articleJsonLd]}
      />

      {/* ── HERO sombre ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>ROI de l&apos;IA en entreprise</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Mesure &amp; retour sur investissement
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Le ROI de l&apos;IA en entreprise
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>Pourquoi les gains sont réels et n&apos;arrivent pas dans vos comptes</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en août 2026
          </p>

          <p id="reponse-directe" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>80 %</strong> des salariés qui utilisent l&apos;IA déclarent une hausse de leur productivité. <strong style={{ color: '#fff', fontWeight: 700 }}>6 %</strong> des entreprises lui attribuent au moins 5 % de leur résultat d&apos;exploitation. L&apos;écart ne vient pas de la technologie, il vient de ce que personne ne convertit la capacité libérée.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 700 }}>
            Cette page reprend les études sur lesquelles le débat s&apos;appuie, en affichant pour chacune son échantillon et sa période de mesure. Elle explique où la valeur se perd entre le poste de travail et le compte de résultat, et propose une méthode pour mesurer les étages intermédiaires.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Faire le point sur vos usages
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#chiffre" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Le chiffre que tout le monde cite
            </a>
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_CHIPS.map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 880 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 150px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 220, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── ANCRE SOMBRE : les deux entonnoirs ── */}
      <section id="chiffre" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le chiffre que tout le monde cite</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 900 }}>
            Le rapport contient deux entonnoirs. Le débat public n&apos;en cite qu&apos;un.
          </h2>
          <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.75, maxWidth: 820, margin: '0 0 34px' }}>
            L&apos;affirmation selon laquelle 95 % des projets d&apos;IA échoueraient provient d&apos;un rapport publié en juillet 2025 par le projet NANDA du MIT. Le document indique que 95 % des organisations interrogées n&apos;ont pas mesuré de retour sur leur compte de résultat, ce qui n&apos;est pas la même chose qu&apos;un taux d&apos;échec de pilotes. Ses propres données, page 6, décrivent deux parcours très différents.
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #1E293B', borderRadius: 16, background: 'rgba(255,255,255,0.02)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <caption style={{ captionSide: 'top', textAlign: 'left', padding: '18px 22px 4px', fontSize: 13, color: '#94A3B8' }}>
                Parcours des projets GenAI, du premier examen à la mise en production
              </caption>
              <thead>
                <tr style={{ borderBottom: '1px solid #1E293B' }}>
                  {["Type d'outil", 'Étudié', 'Piloté', 'Déployé', 'Réussite des pilotes'].map(th => (
                    <th key={th} style={{ textAlign: 'left', padding: '14px 22px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7DA9F0' }}>{th}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #1E293B', background: 'rgba(37,99,235,0.08)' }}>
                  <td style={{ padding: '18px 22px', color: '#F8FAFC', fontWeight: 700, fontSize: 15 }}>
                    Outils généralistes
                    <div style={{ fontWeight: 500, color: '#94A3B8', fontSize: 13.5, marginTop: 3 }}>ChatGPT, Copilot, Claude, Gemini</div>
                  </td>
                  <td style={{ padding: '18px 22px', color: '#E2E8F0', fontSize: 15 }}>80 %</td>
                  <td style={{ padding: '18px 22px', color: '#E2E8F0', fontSize: 15 }}>50 %</td>
                  <td style={{ padding: '18px 22px', color: '#E2E8F0', fontSize: 15 }}>40 %</td>
                  <td style={{ padding: '18px 22px', color: '#93C5FD', fontWeight: 800, fontSize: 15 }}>80 % aboutissent</td>
                </tr>
                <tr>
                  <td style={{ padding: '18px 22px', color: '#F8FAFC', fontWeight: 700, fontSize: 15 }}>
                    Développements sur mesure
                    <div style={{ fontWeight: 500, color: '#94A3B8', fontSize: 13.5, marginTop: 3 }}>outils internes et solutions éditeurs</div>
                  </td>
                  <td style={{ padding: '18px 22px', color: '#E2E8F0', fontSize: 15 }}>60 %</td>
                  <td style={{ padding: '18px 22px', color: '#E2E8F0', fontSize: 15 }}>20 %</td>
                  <td style={{ padding: '18px 22px', color: '#E2E8F0', fontSize: 15 }}>5 %</td>
                  <td style={{ padding: '18px 22px', color: '#CBD5E1', fontWeight: 700, fontSize: 15 }}>25 % aboutissent</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ color: '#CBD5E1', fontSize: 15.5, lineHeight: 1.75, maxWidth: 860, margin: '26px 0 0' }}>
            Quarante déploiements pour cinquante pilotes font 80 % de réussite. Cinq pour vingt en font 25 %, et non 5 %. Le rapport écrit d&apos;ailleurs que les assistants généralistes présentent un taux de passage du pilote à la production d&apos;environ 83 %. Le « 95 % » décrit la seconde ligne, jamais la première, et jamais l&apos;IA en général.
          </p>
          <p style={{ ...srcStyle, color: '#7A8699', maxWidth: 860 }}>
            Source : MIT NANDA, <em>The GenAI Divide: State of AI in Business 2025</em>, juillet 2025. Document préliminaire, non relu par les pairs, fondé sur 300 initiatives publiques, 52 organisations interrogées et 153 réponses de dirigeants.
          </p>
        </div>
      </section>

      {/* ── PILIER 1 : les études, et leur date de mesure ── */}
      <section id="etudes" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pilier 1 · La preuve</Kicker>
          <h2 style={h2Style}>IA et productivité : les gains sont établis, et mal datés</h2>
          <p style={{ ...pStyle, maxWidth: 880 }}>
            Quatre essais contrôlés randomisés, publiés dans des revues à comité de lecture, mesurent l&apos;effet de l&apos;IA générative sur la productivité en entreprise. Ils convergent : le gain de productivité est réel, plus fort sur les profils juniors et sur les tâches standardisées.
          </p>
          <div style={answerStyle}>
            Le point que les reprises omettent presque toujours : <strong>la date de publication n&apos;est pas la date de mesure</strong>. Ces quatre études portent sur des modèles antérieurs à 2024, sans raisonnement, sans exécution de code, sans lecture de corpus longs. Ce sont des planchers, pas des plafonds.
          </div>

          <div style={{ overflowX: 'auto', ...cardStyle, marginTop: 8 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <thead>
                <tr style={{ background: '#0A0A0A' }}>
                  {['Métier étudié', 'Mesuré sur', 'Effet mesuré', "Ce que l'étude nuance"].map(th => (
                    <th key={th} style={{ textAlign: 'left', padding: '15px 20px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff' }}>{th}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ETUDES.map((e, i) => (
                  <tr key={e.metier} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', background: e.highlight ? '#F2F7FF' : i % 2 ? '#F9FAFB' : '#fff' }}>
                    <td style={{ padding: '18px 20px', verticalAlign: 'top' }}>
                      <div style={{ fontWeight: 800, fontSize: 15, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{e.metier}</div>
                      <div style={{ fontSize: 13, color: '#6B7280', marginTop: 3 }}>{e.revue}</div>
                    </td>
                    <td style={{ padding: '18px 20px', verticalAlign: 'top' }}>
                      <div style={{ fontWeight: 700, fontSize: 14.5, color: '#0A0A0A' }}>{e.modele}</div>
                      <div style={{ fontSize: 13, color: '#6B7280', marginTop: 3 }}>{e.periode}</div>
                    </td>
                    <td style={{ padding: '18px 20px', verticalAlign: 'top', fontSize: 14.5, color: '#0A0A0A', fontWeight: 600 }}>{e.effet}</td>
                    <td style={{ padding: '18px 20px', verticalAlign: 'top', fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{e.nuance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={srcStyle}>
            Les chiffres affichés sont ceux des versions publiées, qui diffèrent parfois des prépublications largement reprises. Les dates indiquées sont celles de la collecte des données, pas de la parution.
          </p>

          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div style={{ ...cardStyle, padding: 26 }}>
              <IconTile icon={AlertTriangle} />
              <h3 style={{ ...h3Style, margin: '16px 0 10px' }}>Une étude qui s&apos;est corrigée elle-même</h3>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: '#374151', margin: 0 }}>
                En juillet 2025, l&apos;organisation METR mesurait 16 développeurs expérimentés 19 % plus lents avec l&apos;IA sur leurs propres dépôts, alors qu&apos;ils s&apos;estimaient 20 % plus rapides. En février 2026, les mêmes auteurs ont publié une mise à jour : les nouveaux intervalles de confiance franchissent zéro, un biais de sélection de 30 à 50 % a été identifié, et ils concluent que les développeurs sont probablement accélérés aujourd&apos;hui. Ils ont abandonné le protocole.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 26 }}>
              <IconTile icon={Target} />
              <h3 style={{ ...h3Style, margin: '16px 0 10px' }}>Ce que l&apos;obsolescence démontre</h3>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: '#374151', margin: 0 }}>
                Entre ces mesures et aujourd&apos;hui, les modèles ont changé plusieurs fois de génération. La part d&apos;entreprises attribuant un effet significatif à leur résultat d&apos;exploitation est restée à 6 % d&apos;une année sur l&apos;autre. Si la capacité du modèle était le facteur limitant, ce chiffre aurait bougé. Il n&apos;a pas bougé, et c&apos;est la meilleure preuve que le goulot est organisationnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILIER 2 : la chaîne de conversion ── */}
      <section id="chaine-de-conversion" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pilier 2 · Le cadre</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Cinq étages séparent le poste de travail du compte de résultat</h2>
          <p style={{ ...pStyle, maxWidth: 880 }}>
            La plupart des organisations mesurent le premier étage sous forme de licences attribuées, et le cinquième sous forme de résultat d&apos;exploitation. Les trois du milieu restent vides, si bien qu&apos;aucune décision ne peut être prise sur ce qui se perd entre les deux.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18, marginTop: 30 }}>
            {CHAINE.map(step => (
              <div
                key={step.n}
                style={{
                  ...cardStyle,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  ...(step.leak ? { borderColor: c, boxShadow: `0 0 0 2px ${cLight}` } : {}),
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: c, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 15 }}>{step.n}</span>
                  <step.icon size={19} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 9 }}>{step.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#374151', margin: '0 0 14px' }}>{step.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #E5E7EB', fontSize: 13, color: '#6B7280', lineHeight: 1.55 }}>
                  <strong style={{ color: c, fontWeight: 700 }}>Ce qu&apos;on suit&nbsp;:</strong> {step.kpi}
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...answerStyle, marginTop: 34, maxWidth: '100%' }}>
            <strong>Le point de fuite est presque toujours au quatrième étage.</strong> Cinq minutes gagnées quarante fois ne deviennent jamais un équivalent temps plein sans redécoupage du processus. La conversion est une décision de management, jamais un effet automatique de l&apos;outil. Personne ne convertit par accident. Notre <Link to="/calculateur-roi-ia" style={{ color: c, fontWeight: 700 }}>calculateur de ROI IA</Link> chiffre les cinq étages sur un de vos usages.
          </div>

          <h3 style={{ ...h3Style, fontSize: 19, margin: '34px 0 16px' }}>Quatre destinations possibles pour la capacité libérée</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {DESTINATIONS.map(d => (
              <div key={d.title} style={{ ...cardStyle, padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Check size={17} strokeWidth={2.6} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                  <div>
                    <h4 style={{ ...h3Style, fontSize: 15.5, marginBottom: 6 }}>{d.title}</h4>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: '#6B7280', margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={srcStyle}>
            Si aucune de ces quatre destinations n&apos;est choisie explicitement, la capacité se dissipe et le retour sur investissement reste nul, quelle que soit la qualité de l&apos;outil déployé.
          </p>
        </div>
      </section>

      {/* ── PILIER 3 : le gain net ── */}
      <section id="cout-net" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pilier 3 · Le coût</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Le gain que vous pouvez convertir est le gain net</h2>
          <p style={{ ...pStyle, maxWidth: 880 }}>
            Le temps déclaré gagné sur une tâche est un montant brut. Il faut en retrancher la vérification et la reprise, qui changent de porteur et n&apos;apparaissent donc dans aucun tableau de bord. L&apos;émetteur gagne du temps, le destinataire le perd, et seul le premier est mesuré.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18, marginTop: 26 }}>
            {[
              ['40 %', "des salariés ont reçu dans le mois un livrable généré par IA d'apparence soignée mais sans substance"],
              ['1 h 56', 'de traitement en moyenne par incident'],
              ['186 $', 'par salarié et par mois de charge invisible'],
              ['42 %', "jugent l'émetteur moins digne de confiance qu'avant"],
            ].map(([v, l]) => (
              <div key={v} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 34, fontWeight: 900, color: c, letterSpacing: '-0.03em', lineHeight: 1 }}>{v}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: '#374151', margin: '10px 0 0' }}>{l}</p>
              </div>
            ))}
          </div>
          <p style={srcStyle}>
            Source : BetterUp Labs et Stanford Social Media Lab, « AI-Generated Workslop Is Destroying Productivity », <em>Harvard Business Review</em>, septembre 2025. 1 150 salariés américains à temps plein.
          </p>

          <h3 style={{ ...h3Style, fontSize: 20, margin: '40px 0 14px' }}>La frontière des tâches se déplace, et rien ne signale qu&apos;on la franchit</h3>
          <p style={{ ...pStyle, maxWidth: 880 }}>
            L&apos;étude menée auprès de 758 consultants a mis en évidence une frontière irrégulière entre les tâches où l&apos;IA améliore fortement la performance et celles où elle la dégrade. Sur la tâche située hors de cette frontière, les participants équipés ont produit 19 % de bonnes réponses en moins que le groupe travaillant sans IA. Cette tâche ne paraissait pas plus difficile que les autres, et le modèle y produisait une réponse plausible et fausse.
          </p>
          <p style={{ ...pStyle, maxWidth: 880 }}>
            L&apos;expérience datant d&apos;avril 2023, un coauteur a précisé en mars 2026 que la frontière s&apos;était déplacée de façon substantielle et que des tâches alors hors du périmètre pouvaient s&apos;y trouver aujourd&apos;hui, et inversement. Le contrôle et le recalcul de données chiffrées, la recherche de sources ou le traitement de corpus longs ont largement basculé du bon côté. Ce qui reste dehors relève d&apos;une autre nature : une réponse plausible que rien ne permet de vérifier de l&apos;intérieur, une information que l&apos;organisation n&apos;a jamais écrite, une décision qui engage et se contrôle ligne à ligne.
          </p>
          <div style={answerStyle}>
            La conséquence est plus exigeante que le constat initial. Le problème n&apos;est pas de savoir où passe la frontière, c&apos;est qu&apos;elle bouge tous les quelques mois. <strong>Une charte d&apos;usage figée devient fausse toute seule.</strong> Ce qui s&apos;installe n&apos;est pas une liste de tâches déléguables, c&apos;est une routine de test et de documentation à chaque changement de version.
          </div>
        </div>
      </section>

      {/* ── MÉTHODE : éditorial asymétrique ── */}
      <section id="mesurer" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ ...wrap, ...editorialGrid }}>
          <div style={editorialAside}>
            <Kicker>La méthode</Kicker>
            <h2 style={{ ...h2Style, fontSize: 'clamp(21px, 2.6vw, 30px)' }}>Cinq questions à poser dans votre organisation</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: '#6B7280', margin: 0 }}>
              Elles suffisent à situer où votre chaîne de conversion se rompt. Dans la plupart des organisations, la réponse à la première est déjà non.
            </p>
          </div>
          <div>
            {QUESTIONS.map((item, i) => (
              <div key={item.q} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                <span aria-hidden="true" style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 9, background: c, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 15 }}>{i + 1}</span>
                <div>
                  <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 7 }}>{item.q}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.72, color: '#374151', margin: 0 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OÙ LE RETOUR APPARAÎT ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Allocation</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>L&apos;argent va où l&apos;attribution est facile. Le retour est ailleurs.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20, marginTop: 26 }}>
            <div style={{ ...cardStyle, padding: 28 }}>
              <IconTile icon={Filter} />
              <h3 style={{ ...h3Style, margin: '16px 0 12px' }}>Ce qui capte les budgets</h3>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: '#374151', margin: '0 0 12px' }}>
                Les fonctions commerciales et marketing concentrent une part majoritaire des budgets d&apos;IA générative déclarés. L&apos;attribution y est simple, avec des indicateurs qui remontent bien en comité : volume de démonstrations, délai de réponse, taux de transformation.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: '#6B7280', margin: 0 }}>
                Gains constatés dans le rapport : qualification des prospects 40 % plus rapide, rétention en hausse de 10 %.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderColor: c, boxShadow: `0 0 0 2px ${cLight}` }}>
              <IconTile icon={Receipt} />
              <h3 style={{ ...h3Style, margin: '16px 0 12px' }}>Ce qui produit les économies</h3>
              <ul style={{ margin: '0 0 12px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                {[
                  'Sous-traitance de back-office remplacée : 2 à 10 millions de dollars par an',
                  "Dépenses d'agences externes réduites de 30 %",
                  'Contrôles de risque réinternalisés : un million de dollars par an',
                ].map(li => (
                  <li key={li} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.6, color: '#374151' }}>
                    <Check size={16} strokeWidth={2.6} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    {li}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: '#0A0A0A', margin: 0, fontWeight: 600 }}>
                Le rapport précise que ces gains sont venus de la réduction de dépenses externes, sans réduction d&apos;effectifs internes.
              </p>
            </div>
          </div>
          <p style={srcStyle}>Source : MIT NANDA, <em>The GenAI Divide</em>, juillet 2025, section consacrée aux organisations ayant obtenu un retour mesuré.</p>
        </div>
      </section>

      {/* ── LE MIROIR FRANCE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ ...wrap, ...editorialGrid }}>
          <div style={editorialAside}>
            <Kicker>Position française</Kicker>
            <h2 style={{ ...h2Style, fontSize: 'clamp(21px, 2.6vw, 30px)' }}>Pendant qu&apos;on débat du retour, l&apos;écart se creuse</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: '#6B7280', margin: 0 }}>
              Enquête SAFE de la Banque centrale européenne, quatrième trimestre 2025, 4 968 entreprises de douze pays de la zone euro dont 625 françaises.
            </p>
          </div>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 26 }}>
              {[
                ['23 %', "des entreprises françaises déclarent un usage modéré ou important de l'IA", true],
                ['39 %', 'en zone euro. Allemagne 46 %, Espagne 44 %, Italie 27 %', false],
                ['22 % / 46 %', 'grandes entreprises françaises contre grandes entreprises de la zone euro', false],
                ['7,2 % / 9,1 %', "part de l'investissement IA dans l'investissement total prévu", false],
              ].map(([v, l, hl]) => (
                <div key={v} style={{ ...cardStyle, padding: 22, ...(hl ? { background: c, borderColor: c } : {}) }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 900, color: hl ? '#fff' : c, letterSpacing: '-0.03em', lineHeight: 1 }}>{v}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: hl ? 'rgba(255,255,255,0.92)' : '#374151', margin: '9px 0 0' }}>{l}</p>
                </div>
              ))}
            </div>
            <p style={pStyle}>
              L&apos;écart ne s&apos;explique ni par la taille des entreprises ni par la composition sectorielle : la France est en retard dans chaque catégorie de taille et dans chacun des quatre grands secteurs. Le frein déclaré est spécifique, les entreprises françaises citant moins souvent le manque de compétences et plus souvent les préoccupations relatives aux données, à la vie privée et à l&apos;éthique.
            </p>
            <p style={pStyle}>
              Sur l&apos;emploi, la donnée contredit l&apos;intuition. Dans l&apos;industrie manufacturière et les services, les entreprises utilisant le plus intensivement l&apos;IA affichent des anticipations de croissance de l&apos;emploi plus élevées. Les auteurs précisent que ces résultats sont descriptifs et non causaux. Du côté français, l&apos;Insee mesure par ailleurs 18 % d&apos;entreprises de dix salariés ou plus utilisatrices d&apos;au moins une technologie d&apos;IA en 2025, contre 10 % en 2024, pour une moyenne européenne de 20 %.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Aller plus loin</Kicker>
          <h2 style={h2Style}>Passer du constat à la mesure</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginTop: 26 }}>
            {MAILLAGE.map(rel => (
              <Link key={rel.to} to={rel.to} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 24, height: '100%' }}>
                  <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{rel.title}</h3>
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

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Kicker>Questions fréquentes</Kicker>
          <h2 style={h2Style}>Ce qu&apos;on nous demande le plus souvent</h2>
          <div style={{ marginTop: 24, borderTop: '1px solid #E5E7EB' }}>
            {FAQ.map(item => <FaqItem key={item.q} {...item} />)}
          </div>
        </div>
      </section>

      {/* ── LE FONDATEUR ── */}
      <FounderNote />

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Premier échange</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Où votre chaîne de conversion se rompt-elle ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 640 }}>
              Décrivez-nous vos usages actuels et ce que vous mesurez aujourd&apos;hui. Nous revenons vers vous avec une lecture des cinq étages appliquée à votre organisation, les indicateurs qui manquent et les usages qui méritent d&apos;être mesurés en priorité.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Faire le point sur vos usages
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Cabinet indépendant des éditeurs · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Notre méthode de citation</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Chaque chiffre de cette page a été vérifié sur sa source primaire
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Nous affichons l&apos;échantillon et la période de mesure, pas seulement la date de parution. Les chiffres retenus sont ceux des versions publiées, qui diffèrent parfois des prépublications reprises dans la presse. Masteria est un cabinet spécialisé uniquement sur l&apos;intelligence artificielle, fondé à Lyon en 2022, indépendant des éditeurs. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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

      <OfficialSources extra={CITATIONS} />
    </>
  )
}
