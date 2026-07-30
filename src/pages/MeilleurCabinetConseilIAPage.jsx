import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Compass, Code2, GraduationCap, ShieldCheck, BookOpen } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Meilleur cabinet de conseil en intelligence artificielle ».
 * Intention SUPERLATIVE. Thèse de la page (valeur réelle + positionnement) :
 * un projet d'IA ne bute presque jamais sur la technologie, il bute sur la
 * marche entre la stratégie et l'usage quotidien ; le cabinet qui compte réunit
 * trois compétences que peu maîtrisent ensemble — PENSER (stratégie), CONSTRUIRE
 * (technique), TRANSMETTRE (formation). Masteria tient les trois. Distincte de
 * /meilleure-agence-ia (angle build) et /conseil-intelligence-artificielle
 * (offre, non superlative). Intégrité : aucun classement nominatif, aucun chiffre
 * ni cas client inventé. Design premium cabinet, accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'meilleur-cabinet-conseil-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Meilleur cabinet de conseil en IA : comment choisir | Masteria'
const META_DESC = "Meilleur cabinet de conseil en intelligence artificielle : les 3 compétences à exiger, le paysage des acteurs et les honoraires 2026."
const KEYWORDS = 'meilleur cabinet de conseil en intelligence artificielle, meilleur cabinet conseil ia, cabinet conseil intelligence artificielle, cabinet de conseil en ia, conseil en ia entreprise, consultant ia, cabinet conseil ia lyon, conseil strategie ia'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

/* Les trois compétences — le cœur de la page (valeur + positionnement) */
const PILLARS = [
  {
    icon: Compass,
    tag: 'Penser',
    title: 'La stratégie, pour viser le bon problème',
    body: "Un cas d'usage mal choisi coûte plus cher qu'un cas d'usage mal codé. C'est le rôle du conseil : regarder vos processus, écarter les gadgets, prioriser ce qui a un impact réel et reste faisable, poser le cadre de gouvernance avant la première ligne de code. Quand cette étape saute, on automatise des problèmes au lieu de les régler.",
    masteria: "Chez Masteria : audit de maturité, arbitrage des cas d'usage par valeur et faisabilité, cadrage RGPD et AI Act, feuille de route que votre direction peut réellement tenir.",
  },
  {
    icon: Code2,
    tag: 'Construire',
    title: 'La technique, pour livrer autre chose qu\'un PowerPoint',
    body: "Beaucoup de cabinets s'arrêtent à la recommandation et confient la réalisation à un tiers. C'est là que la valeur se perd. Le cabinet qui compte sait mettre les mains dans le cambouis : agents, automatisations, applications métier, RAG sur vos données, intégration des modèles dans votre système d'information, API et MCP. Une recommandation ne devient un outil réellement utilisé que si quelqu'un sait la construire.",
    masteria: "Chez Masteria : développement sur mesure, de l'idée au déploiement, et le code vous appartient. Possibilité de régie, avec des développeurs intégrés à vos équipes le temps du projet.",
  },
  {
    icon: GraduationCap,
    tag: 'Transmettre',
    title: 'La formation, pour que vos équipes prennent le relais',
    body: "Le modèle économique de beaucoup de cabinets repose sur une dépendance qui dure. La formation referme la mission proprement : à la fin, vos équipes savent utiliser, corriger et faire évoluer ce qui a été livré, prompts et garde-fous compris. Un outil dont vos équipes ont la main continue de servir longtemps après la mise en ligne.",
    masteria: "Chez Masteria : formation certifiée Qualiopi, finançable par les OPCO, intégrée à la mission pour que l'autonomie de vos équipes soit le dernier livrable.",
  },
]

/* Paysage des acteurs : qui couvre laquelle des trois compétences (meter 3 niveaux) */
const LANDSCAPE = [
  { type: 'Grand cabinet de conseil en stratégie', strat: 3, tech: 1, form: 1, when: "Transformation de groupe, gouvernance internationale, accès au conseil d'administration." },
  { type: 'Cabinet de transformation numérique', strat: 2, tech: 2, form: 1, when: "L'IA s'inscrit dans un chantier d'organisation et de SI plus large." },
  { type: 'Boutique ou studio data & IA', strat: 1, tech: 3, form: 1, when: 'Un produit IA pointu à concevoir et à industrialiser.' },
  { type: 'ESN / régie technologique', strat: 1, tech: 3, form: 1, when: "Un renfort d'intégration durable sur votre système d'information." },
  { type: 'Cabinet hybride conseil + technique + formation', strat: 3, tech: 3, form: 3, highlight: true, when: 'Vous voulez un résultat utilisé sur le terrain et des équipes autonomes après le départ du cabinet.' },
]

/* Comparatif factuel d'acteurs réels du marché (panorama, PAS un classement). Neutre,
 * descriptif, sans jugement de valeur : conforme au cadre de la publicité comparative
 * et au parti pris d'intégrité (aucune note, aucune hiérarchie). À valider avant prod. */
const MARKET_ACTORS = [
  { cat: 'Conseil en stratégie (mondial)', names: 'McKinsey (QuantumBlack), BCG (BCG X), Bain', best: "Stratégie de transformation à grande échelle, accès au comité de direction.", fit: 'Grands groupes, programmes internationaux.' },
  { cat: 'Audit & conseil (Big Four)', names: 'Deloitte, EY, KPMG, PwC', best: 'Transformation, gouvernance et conduite du changement sur de larges périmètres.', fit: 'ETI et grands groupes.' },
  { cat: 'Conseil & ESN françaises', names: 'Capgemini Invent, Wavestone, Sia Partners, Onepoint', best: "Conseil opérationnel et intégration au système d'information.", fit: 'ETI et grands groupes français.' },
  { cat: 'Pure players data & IA', names: 'Artefact, Ekimetrics', best: "Data science, machine learning et déploiement de cas d'usage data.", fit: 'Directions data, cas d\'usage analytiques pointus.' },
  { cat: 'ESN & intégrateurs', names: 'Sopra Steria, Accenture, Devoteam', best: "Développement et intégration à grande échelle, régie sur le SI.", fit: 'DSI, gros chantiers d\'intégration.' },
  { cat: 'Cabinets hybrides spécialisés IA', names: 'Structures plus petites et spécialisées (catégorie de Masteria)', best: 'Cadrage, développement sur mesure et formation réunis, proximité terrain.', fit: 'PME, ETI et directions métier visant l\'autonomie.' },
]

const BUDGETS = [
  { mission: 'Audit et diagnostic de maturité IA', range: '5 000 à 30 000 €', note: "Selon la taille de l'entreprise et la profondeur de l'analyse." },
  { mission: 'Stratégie et feuille de route direction', range: '15 000 à 80 000 €', note: 'Programmes COMEX, gouvernance, trajectoire pluriannuelle.' },
  { mission: 'Construction d\'une solution IA sur mesure', range: '15 000 à 150 000 €', note: 'Agent, application métier, RAG, intégration au SI ; au forfait.' },
  { mission: 'Gouvernance et conformité (RGPD, AI Act)', range: '8 000 à 40 000 €', note: 'Cadre d\'usage, registre, classification des cas, clauses contractuelles.' },
  { mission: 'TJM consultant senior IA', range: '800 à 1 500 €', note: 'Ordre de grandeur du marché français pour un profil expérimenté.' },
  { mission: 'Formation des équipes (intra, par jour)', range: '1 980 € / jour', note: "Tarif intra Masteria (HT), finançable par les OPCO (organisme certifié Qualiopi)." },
]

const ENGAGEMENT = [
  { name: 'Forfait au projet', desc: "Périmètre, livrables et prix fixés à l'avance. Le bon choix quand le besoin est cadré et le résultat clair." },
  { name: 'Régie', desc: "Des consultants ou développeurs intégrés à vos équipes, facturés au temps passé. Utile pour un besoin évolutif ou un renfort durable." },
  { name: 'Accompagnement continu', desc: "Un abonnement mensuel de supervision, d'évolutions et de support une fois la solution en production." },
]

/* ── Repères citables (GEO) : stats sourcées, glossaire d'entités, références ── */
const MARKET_STATS = [
  { value: '≥ 30 %', label: "des projets d'IA générative seraient abandonnés après le POC, faute de cadrage et de valeur démontrée (prévision Gartner publiée en 2024).", source: 'Gartner, 2024', url: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025' },
  { value: '1ᵉʳ août 2024', label: "entrée en vigueur de l'AI Act (règlement européen 2024/1689), avec une application progressive jusqu'en 2026-2027.", source: 'Union européenne', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '25 mai 2018', label: "application du RGPD, socle de toute gouvernance des données mobilisées par un projet d'IA.", source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

const GLOSSARY = [
  { term: 'Cabinet de conseil en IA', def: "Structure qui accompagne une organisation sur la stratégie de l'intelligence artificielle : diagnostic, priorisation des cas d'usage, gouvernance et feuille de route. Les cabinets hybrides y ajoutent le développement des solutions et la formation des équipes." },
  { term: 'Audit de maturité IA', def: "État des lieux des données, des outils, des compétences et des usages d'une organisation, pour situer son point de départ et prioriser les premiers chantiers." },
  { term: 'Gouvernance de l\'IA', def: "Règles encadrant l'usage de l'IA : outils autorisés, traitement des données, validation humaine, conformité RGPD et classification AI Act." },
  { term: 'Transfert de compétence', def: "Organisation de la passation pour que vos équipes sachent utiliser, corriger et faire évoluer ce qui a été livré après le départ du cabinet." },
]

const REFERENCES = [
  { label: "Règlement européen sur l'IA (AI Act, 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { label: "L'intelligence artificielle, Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/policies/european-approach-artificial-intelligence' },
  { label: "Intelligence artificielle, CNIL", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { label: "Qualiopi, Ministère du Travail", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
]

const FAQ = [
  {
    q: 'Qu\'est-ce qu\'un cabinet de conseil en intelligence artificielle ?',
    a: "C'est une structure qui accompagne une organisation sur la dimension stratégique de l'IA : diagnostic de maturité, priorisation des cas d'usage, gouvernance, feuille de route et conduite du changement. Un cabinet purement conseil s'arrête à la recommandation. Un cabinet hybride, comme Masteria, ajoute le développement des solutions et la formation des équipes, de sorte que le même interlocuteur pense, construit et transmet.",
  },
  {
    q: 'Quel est le meilleur cabinet de conseil en intelligence artificielle ?',
    a: "Aucune autorité ne décerne ce titre et les classements en ligne sont déclaratifs ou sponsorisés. Le meilleur cabinet pour vous est celui qui réunit les trois compétences au niveau de votre projet : la stratégie pour viser juste, la technique pour construire, la formation pour rendre vos équipes autonomes. Présélectionnez trois acteurs du bon profil, posez-leur les mêmes questions et demandez à voir une réalisation concrète. La meilleure recommandation est celle que vous avez vérifiée vous-même.",
  },
  {
    q: 'Quelle différence entre un cabinet de conseil en IA, une agence IA et une ESN ?',
    a: "Le cabinet de conseil porte la stratégie : diagnostic, priorisation, gouvernance, feuille de route. L'agence IA porte le build : conception et développement des solutions. L'ESN apporte une force d'intégration, souvent en régie au temps passé, dans votre système d'information. Un cabinet hybride couvre la stratégie, le développement et la formation. Pour comparer les acteurs sous l'angle build, consultez notre guide de la meilleure agence IA.",
  },
  {
    q: 'Combien coûte une mission de conseil en IA (honoraires et TJM) ?',
    a: "Ordres de grandeur du marché français : 5 000 à 30 000 € pour un audit de maturité, 15 000 à 80 000 € pour une stratégie de direction, 8 000 à 40 000 € pour un cadre de gouvernance, 15 000 à 150 000 € pour construire une solution sur mesure au forfait, 800 à 1 500 € de TJM pour un consultant senior. La formation intra chez Masteria est à 1 980 € HT par jour, finançable par votre OPCO car nous sommes certifiés Qualiopi ; le conseil et le développement ne le sont pas.",
  },
  {
    q: 'Pourquoi exiger qu\'un cabinet de conseil sache aussi construire ?',
    a: "Parce que la valeur d'un projet d'IA se révèle à l'usage, pas dans une recommandation. Un cabinet qui conseille sans jamais livrer dépend d'un tiers pour la réalisation, ce qui rallonge les délais, dilue la responsabilité et éloigne le résultat du terrain. Un cabinet qui sait construire teste ses propres recommandations contre la réalité technique. C'est aussi pour cela que la maîtrise du développement (agents, RAG, intégration au SI) est devenue un critère de choix à part entière.",
  },
  {
    q: 'Cabinet de conseil en IA pour PME, ETI ou grand groupe : comment choisir ?',
    a: "La taille oriente le profil. Une PME a intérêt à un cabinet proche du terrain, capable de cadrer vite, de construire et de rendre les équipes autonomes : souvent un cabinet hybride. Une ETI engagée dans une transformation plus large peut s'appuyer sur un cabinet de transformation numérique. Un grand groupe avec des enjeux de gouvernance internationaux se tournera vers un grand cabinet de stratégie. Dans tous les cas, vérifiez les trois compétences sur trois acteurs du profil adapté.",
  },
  {
    q: 'Le conseil en IA est-il finançable (OPCO, Bpifrance) ?',
    a: "En France, seules les actions de formation délivrées par un organisme certifié Qualiopi sont finançables par les OPCO. Le conseil et le développement ne le sont pas. Côté diagnostic, certains audits peuvent être soutenus par des dispositifs publics français comme le Diag Data IA de Bpifrance, sous conditions d'éligibilité. Ces dispositifs concernent la France ; en Suisse et en Belgique, le cadre diffère. Un prestataire qui promet une prise en charge OPCO sur du conseil mérite une vérification attentive.",
  },
  {
    q: 'Que prouve la certification Qualiopi pour un cabinet de conseil en IA ?',
    a: "Qualiopi est auditée par un organisme tiers accrédité. Elle atteste de la qualité du processus de formation et rend les formations finançables par les OPCO. Elle ne note pas la qualité du conseil ni l'expertise technique du cabinet. C'est un signal de sérieux contrôlé par un tiers, à compléter par les références joignables et la spécialisation réelle sur l'IA.",
  },
  {
    q: 'Faut-il un cabinet de conseil en IA à Paris ou Lyon, ou peut-on travailler à distance ?',
    a: "Les deux fonctionnent. La proximité aide pour les ateliers de cadrage et la conduite du changement ; le distanciel convient au suivi, à la formation et aux missions bien périmétrées. Le bon critère : un cabinet capable des deux, qui annonce ses frais de déplacement dans la proposition. Masteria est basé à Lyon et intervient en France, en Suisse et en Belgique, en présentiel comme à distance.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, cabinet de conseil en intelligence artificielle',
  description: META_DESC,
  url: FULL_URL,
  serviceType: ['Conseil en IA', 'Stratégie IA', 'Gouvernance IA', 'Développement de solutions IA', 'Formation IA'],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': `${SITE}/#organization` },
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossaire du conseil en intelligence artificielle',
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Meilleur cabinet de conseil en intelligence artificielle : comment choisir',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Cabinet de conseil en intelligence artificielle', 'Conseil en IA', 'Stratégie IA'],
}

function CoverMeter({ level, label }) {
  // level: 3 = maîtrisée, 2 = partielle, 1 = secondaire
  return (
    <span role="img" aria-label={`${label} : ${level === 3 ? 'maîtrisée' : level === 2 ? 'partielle' : 'secondaire'}`} style={{ display: 'inline-flex', gap: 4 }}>
      {[1, 2, 3].map(i => (
        <span key={i} aria-hidden="true" style={{ width: 9, height: 9, borderRadius: '50%', background: i <= level ? c : '#D1D5DB', display: 'inline-block' }} />
      ))}
    </span>
  )
}

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
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

function SectionHeader({ icon: Icon, kicker, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 18 }}>
      <div style={{ ...iconBoxStyle, marginTop: 4 }}>
        <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
      </div>
      <div>
        <div style={{ ...kickerStyle, marginBottom: 8 }}>{kicker}</div>
        <h2 style={{ ...h2Style, margin: 0 }}>{title}</h2>
      </div>
    </div>
  )
}

export default function MeilleurCabinetConseilIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en IA', slug: 'conseil-intelligence-artificielle' },
    { name: 'Meilleur cabinet de conseil en IA', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, definedTermSetJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Meilleur cabinet de conseil en IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide de décision · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Meilleur cabinet de conseil en intelligence artificielle
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>comment reconnaître celui qui livre vraiment</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juin 2026
          </p>

          {/* GEO : réponse directe citable — la thèse de la page */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Dans un projet d'IA, la technologie est rarement ce qui coince. Le vrai obstacle se dresse entre la belle stratégie et l'usage réel, le lundi matin. <strong style={{ color: '#fff', fontWeight: 700 }}>Le cabinet qui compte est celui qui franchit toute cette marche</strong> : il pense le bon cas d'usage, il le construit pour de vrai, et il rend vos équipes capables de s'en servir sans lui. Peu d'acteurs réunissent ces trois compétences.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Vous trouverez ici les trois compétences à exiger, un panorama factuel des acteurs du marché avec leurs noms, les honoraires constatés en 2026 et de quoi décider. Le panorama situe les acteurs par catégorie : il ne les note pas et n'en classe aucun.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#competences" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Les 3 compétences à exiger
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parler de votre projet
            </Link>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Le vrai critère', "Un cabinet de conseil en IA se juge sur trois compétences réunies : la stratégie (viser le bon cas d'usage), la technique (le construire), la formation (rendre vos équipes autonomes)."],
                ['Existe-t-il un classement ?', "Aucun classement officiel en France. Les palmarès en ligne sont déclaratifs ou sponsorisés."],
                ['L\'erreur la plus coûteuse', "Confier la stratégie à un acteur incapable de construire, ou le développement à un acteur qui n'a pas cadré le besoin."],
                ['Honoraires 2026', "Audit 5 000 à 30 000 €, feuille de route 15 000 à 80 000 €, TJM senior 800 à 1 500 €."],
                ['Et Masteria ?', "Un cabinet qui tient les trois compétences : conseil, développement sur mesure (le code vous appartient) et formation certifiée Qualiopi."],
              ].map(([k, v], i) => (
                <div key={k} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', marginBottom: 4 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LES TROIS COMPÉTENCES (le cœur) ── */}
      <section id="competences" style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Le vrai critère</div>
          <h2 style={h2Style}>Les trois compétences qu'un cabinet de conseil en IA doit réunir</h2>
          <p style={leadStyle}>
            La plupart des cabinets en maîtrisent une, parfois deux. Les rares qui tiennent les trois sont ceux qui transforment une idée en résultat utilisé, puis s'effacent en laissant vos équipes autonomes. Comparez les prestataires là-dessus avant même de regarder le prix.
          </p>
          <p style={mutedStyle}>
            Penser, construire, transmettre. Voici ce que recouvre chacune, et pourquoi l'absence d'une seule fragilise tout le projet.
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.tag} style={{ ...cardStyle, padding: 'clamp(24px, 3vw, 34px)', display: 'grid', gridTemplateColumns: isDesktop ? '52px 1fr' : '1fr', gap: isDesktop ? 24 : 16, borderTop: `3px solid ${c}` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{`0${i + 1} · ${p.tag}`}</span>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.title}</h3>
                    </div>
                    <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>{p.body}</p>
                    <p style={{ fontSize: 14.5, color: '#0A0A0A', lineHeight: 1.7, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '12px 16px' }}>
                      <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />
                      {p.masteria}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LE PAYSAGE : QUI COUVRE QUOI (tableau meter, snippet magnet) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Le paysage des acteurs</div>
          <h2 style={h2Style}>Qui couvre quoi : cabinet, agence, ESN, studio data</h2>
          <p style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Cinq familles d'acteurs se partagent le marché, et chacune est forte sur une compétence, faible sur une autre.</strong>{' '}
            Comparer un grand cabinet de stratégie, une ESN et un studio data sur les mêmes critères n'a pas de sens : ils ne jouent pas le même rôle. Repérez d'abord la famille qui correspond à votre besoin dominant.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Le tableau lit chaque famille à travers les trois compétences : stratégie, technique, formation. Trois points pleins signalent une compétence maîtrisée, un point une compétence secondaire.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>
                Les familles d'acteurs du conseil en IA lues à travers trois compétences (stratégie, technique, formation) et le bon moment pour choisir chacune
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille d'acteurs</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Stratégie</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Technique</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Formation</th>
                  <th scope="col" style={thStyle}>Quand la choisir</th>
                </tr>
              </thead>
              <tbody>
                {LANDSCAPE.map((row, i) => {
                  const td = { padding: '18px', verticalAlign: 'middle', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={row.type} style={row.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: row.highlight ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 220 }}>
                        {row.type}
                        {row.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Le profil de Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.strat} label="Stratégie" /></td>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.tech} label="Technique" /></td>
                      <td style={{ ...td, textAlign: 'center' }}><CoverMeter level={row.form} label="Formation" /></td>
                      <td style={{ ...td, fontSize: 13.5, color: '#374151', lineHeight: 1.65, minWidth: 240 }}>{row.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Votre besoin penche nettement vers la construction d'un produit ? Notre guide{' '}
            <Link to="/meilleure-agence-ia" style={{ color: c, fontWeight: 600 }}>meilleure agence IA</Link>{' '}
            compare les acteurs sous l'angle build. Pour la trajectoire en amont, la page{' '}
            <Link to="/conseil-strategie-ia" style={{ color: c, fontWeight: 600 }}>conseil en stratégie IA</Link>{' '}
            détaille la méthode de feuille de route, et{' '}
            <Link to="/ia-secteurs" style={{ color: c, fontWeight: 600 }}>l'IA par secteur</Link>{' '}
            les enjeux propres à votre métier. Votre besoin porte sur la montée en compétences de vos équipes ? Notre guide{' '}
            <Link to="/meilleure-formation-ia" style={{ color: c, fontWeight: 600 }}>meilleure formation IA</Link>{' '}
            compare les organismes sous l'angle transmission.
          </p>
        </div>
      </section>

      {/* ── LES ACTEURS DU MARCHÉ (comparatif factuel, noms réels, sans classement) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Les acteurs du marché</div>
          <h2 style={h2Style}>Les acteurs du conseil en IA en France : qui fait quoi</h2>
          <p style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Plus haut, nous avons lu le marché par compétence. Voici les noms qui peuplent chaque famille.</strong>{' '}
            Ce tableau n'est ni un classement ni une recommandation : les cabinets cités sont des exemples connus de leur catégorie, pour savoir vers qui regarder selon votre besoin.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Panorama non exhaustif. Vérifiez toujours vous-même les références, le périmètre réel de la mission et les profils réellement staffés avant de choisir.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
              <caption style={srOnlyStyle}>
                Panorama non classé des familles d'acteurs du conseil en IA en France, avec des exemples reconnus, ce qu'ils font le mieux et le profil de client adapté
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Catégorie</th>
                  <th scope="col" style={thStyle}>Exemples d'acteurs reconnus</th>
                  <th scope="col" style={thStyle}>Ce qu'ils font le mieux</th>
                  <th scope="col" style={thStyle}>Plutôt adapté à</th>
                </tr>
              </thead>
              <tbody>
                {MARKET_ACTORS.map((a, i) => {
                  const td = { padding: '18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.65, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  const last = i === MARKET_ACTORS.length - 1
                  return (
                    <tr key={a.cat} style={last ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ padding: '18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: last ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 180 }}>{a.cat}</th>
                      <td style={{ ...td, minWidth: 200, color: last ? c : '#374151', fontWeight: last ? 600 : 400 }}>{a.names}</td>
                      <td style={{ ...td, minWidth: 220 }}>{a.best}</td>
                      <td style={{ ...td, minWidth: 180 }}>{a.fit}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            <strong>Masteria</strong> appartient à la dernière famille, les cabinets hybrides qui réunissent conseil, développement et formation. Nous accompagnons aussi bien des PME et des ETI que de grandes organisations, en adaptant le dispositif à la taille et à la maturité de chaque structure.
          </p>
        </div>
      </section>

      {/* ── HONORAIRES & MODÈLES D'ENGAGEMENT (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Honoraires & engagement</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Combien coûte une mission de conseil en IA en 2026 (honoraires et TJM) ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Comptez 5 000 à 30 000 € pour un audit de maturité, 15 000 à 80 000 € pour une stratégie de direction, 15 000 à 150 000 € pour construire une solution sur mesure, et un TJM de 800 à 1 500 € pour un consultant senior.</strong>{' '}
            Seule la formation délivrée par un organisme certifié Qualiopi ouvre droit à un financement OPCO.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ordres de grandeur larges constatés sur le marché français, qui varient selon la taille de l'entreprise, le secteur et l'exigence. Pour chiffrer une mission précise, notre guide des{' '}
            <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>prix d'un projet IA</Link>{' '}
            détaille les postes de coût.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 36 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>Honoraires constatés en 2026 par type de mission de conseil en IA sur le marché français</caption>
              <thead>
                <tr>
                  {['Type de mission', 'Honoraires constatés', 'Précisions'].map(h => (
                    <th key={h} scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BUDGETS.map((b, i) => (
                  <tr key={b.mission}>
                    <th scope="row" style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#F8FAFC', textAlign: 'left', minWidth: 220, lineHeight: 1.5 }}>{b.mission}</th>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: '#60A5FA', whiteSpace: 'nowrap' }}>{b.range}</td>
                    <td style={{ padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, minWidth: 220 }}>{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(17px, 2vw, 20px)', fontWeight: 800, color: '#F8FAFC', margin: '0 0 18px' }}>Trois modèles d'engagement à connaître</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 16, marginBottom: 28 }}>
            {ENGAGEMENT.map(e => (
              <div key={e.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 12, padding: '20px 22px' }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{e.name}</div>
                <p style={{ fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid #1E293B', borderRadius: 12, padding: '18px 22px' }}>
            <p style={{ fontSize: 14, color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#fff' }}>À savoir pour votre financement :</strong> en France, seules les actions de formation délivrées par un organisme certifié Qualiopi sont finançables par les OPCO. Le conseil et le développement ne le sont pas. Certains diagnostics peuvent relever de dispositifs publics comme le Diag Data IA de Bpifrance, sous conditions. Un cabinet qui promet une prise en charge OPCO sur du conseil mérite une vérification attentive.
            </p>
          </div>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="Le conseil en IA en quelques repères vérifiables" />
          <p style={answerStyle}>
            Trois chiffres pour situer un projet, le vocabulaire qui revient dans toute mission, et les sources officielles. Pour encadrer vos usages, notre guide{' '}
            <Link to="/gouvernance-ia" style={{ color: c, fontWeight: 600 }}>gouvernance de l'IA et AI Act</Link>{' '}
            détaille le cadre de conformité.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '36px 0 44px' }}>
            {MARKET_STATS.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 28, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ ...kickerStyle, marginBottom: 10 }}>Définitions</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Le vocabulaire du conseil en IA</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Quatre notions reviennent dans toute mission de conseil en intelligence artificielle.
              </p>
            </div>
            <div>
              <dl style={{ margin: 0, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, overflow: 'hidden' }}>
                {GLOSSARY.map((g, i) => (
                  <div key={g.term} style={{ padding: '20px 24px', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{g.term}</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>{g.def}</dd>
                  </div>
                ))}
              </dl>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '24px 0 12px', fontWeight: 700 }}>Sources et références officielles</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {REFERENCES.map(r => (
                  <li key={r.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, fontSize: 14.5, textDecoration: 'underline', textUnderlineOffset: 2, lineHeight: 1.6 }}>{r.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASTERIA : le profil qui tient les trois compétences ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Notre positionnement</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Pourquoi Masteria tient les trois compétences</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
                <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
                Conseil · Technique · Formation
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Votre question porte plutôt sur les modèles (ChatGPT, Claude, Gemini, Mistral) ? Voyez notre comparatif{' '}
                <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>quelle est la meilleure IA</Link>.
              </p>
            </div>

            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Mathias Nizan a fondé Masteria à Lyon en 2022 sur une conviction : un cabinet de conseil en IA n'a de valeur que s'il sait aussi construire et transmettre. Nous tenons les trois compétences au même niveau d'exigence.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 14 }}>
                  {[
                    ['Conseil et accompagnement', "audit de maturité, priorisation des cas d'usage, gouvernance RGPD et AI Act, feuille de route, conduite du changement jusqu'au terrain."],
                    ['Technique', "développement sur mesure (agents, automatisations, applications métier, RAG, intégration des modèles à votre SI, API et MCP), de l'idée au déploiement. Le code vous appartient, régie possible sur site."],
                    ['Formation', "parcours certifiés Qualiopi et finançables OPCO ; plus de 1 500 professionnels formés, satisfaction mesurée en fin de session."],
                  ].map(([t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <BadgeCheck size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                      <span style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}><strong style={{ color: '#0A0A0A' }}>{t} : </strong>{d}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Nous restons indépendants des éditeurs : nos recommandations d'outils sont argumentées, jamais commissionnées. Interventions en France, en Suisse et en Belgique, en présentiel comme à distance. Mathias Nizan est cité par Les Échos sur le choix des modèles d'IA en entreprise.
                </p>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, margin: 0 }}>
                  Nous accompagnons aussi bien des PME et des ETI que de grandes organisations, des directions métier au comité de direction, qui veulent un résultat utilisé et des équipes autonomes. Nous adaptons le dispositif à votre taille et à votre maturité, et vous dirons franchement au premier rendez-vous si un autre profil d'acteur correspond mieux à votre besoin. Pour situer votre besoin, commencez par notre{' '}
                  <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>, puis voyez le détail de nos{' '}
                  <Link to="/conseil-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>missions de conseil</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FONDATEUR (E-E-A-T) ── */}
      <FounderNote bg="#fff" />

      {/* ── FAQ ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur le choix d'un cabinet de conseil en IA</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Vous ne trouvez pas votre réponse ici ?</p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Un avis franc sur votre projet</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Décrivez votre besoin, on vous dit la vérité
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
              En quelques lignes, dites-nous où vous en êtes. Lors d'un échange de cadrage gratuit, nous vous disons si notre profil correspond, et vers quelle famille d'acteurs vous tourner si ce n'est pas le cas.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange gratuit et sans engagement · Réponse sous 24 h · Certifié Qualiopi
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
