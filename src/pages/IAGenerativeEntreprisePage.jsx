import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Sparkles, Workflow, FileText, MessagesSquare, Database, Search,
  Target, FlaskConical, Rocket, ShieldCheck, Scale, Cpu, Boxes, Check,
  Lock, AlertTriangle, GraduationCap, Compass, Layers, BookOpen, ExternalLink,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page pilier « IA générative en entreprise » (slug /ia-generative-entreprise).
 * Cible mid-funnel large. Mots-clés confirmés : « ia générative entreprise » (140, KD 24),
 * « ia générative en entreprise » (110, KD 25). Tissés : « déploiement ia générative »,
 * « intégration ia générative », « ia générative pour les entreprises »,
 * « solutions ia générative entreprise », « mettre en place l'ia générative ».
 * Anti-cannibalisation : on reste sur la tête « IA générative » (pas d'agence/cabinet/
 * développement dans H1/title — ces têtes appartiennent à d'autres pages du cluster).
 * Posture CAPACITÉ : aucun cas client ni chiffre inventé. Faits sourcés réels uniquement
 * (AI Act 2024/1689, Gartner). Formation = offre SECONDAIRE, non mise en avant comme finançable.
 * Maillage : /cas-usage-ia-entreprise, /solutions-ia, /agents-ia-entreprise, /gouvernance-ia,
 * /diagnostic-ia, /conseil-intelligence-artificielle, /prix-projet-ia, /contact.
 * Design : mirror AgenceDeveloppementIAPage (hero sombre, rythme, accent #2563EB, zéro emoji).
 */

const SLUG = 'ia-generative-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "IA générative en entreprise : la déployer | Masteria"
const META_DESC = "IA générative en entreprise : cas d'usage, déploiement maîtrisé du POC à la production, garde-fous RGPD et AI Act. Cadrage gratuit avec Masteria."

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

const HERO_CHIPS = [
  { icon: MessagesSquare, label: 'Cas d\'usage' },
  { icon: Rocket,         label: 'Déploiement' },
  { icon: ShieldCheck,    label: 'Garde-fous' },
  { icon: Scale,          label: 'RGPD & AI Act' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Définition', value: "L'IA générative produit textes, code, images et synthèses à partir d'une consigne ; en entreprise, elle s'intègre aux processus métier pour faire gagner du temps" },
  { label: 'Usages', value: "Rédaction et reformulation, synthèse documentaire, recherche dans vos données, support, assistance au code, première version de livrables" },
  { label: 'Déploiement', value: "Quatre temps : cadrage des cas d'usage, POC sur un périmètre réel, mise en production intégrée, gouvernance dans la durée" },
  { label: 'Garde-fous', value: "Confidentialité des données, contrôle des hallucinations, validation humaine, conformité RGPD et AI Act (règlement 2024/1689)" },
  { label: 'Masteria', value: "Conseil, développement de solutions sur mesure et formation des équipes, du cas d'usage au déploiement maîtrisé" },
  { label: 'Zone', value: "Lyon, France, Suisse, Belgique · distanciel et présentiel ponctuel" },
]

/* ───────── Ce qu'elle change (gains / limites honnêtes) ───────── */

const GAINS = [
  { icon: FileText, title: 'Rédaction et reformulation', desc: "Premières versions de notes, emails, comptes rendus et supports, à relire et valider. Le modèle accélère la mise en forme ; le fond et la décision restent humains." },
  { icon: Search, title: 'Recherche et synthèse documentaire', desc: "Interrogation de volumes de documents impossibles à traiter manuellement, avec restitution synthétique. Ancrée sur vos contenus via du RAG, la réponse devient sourçable." },
  { icon: MessagesSquare, title: 'Assistance au support et au métier', desc: "Aide à la réponse client, qualification de demandes, préparation de dossiers. L'IA propose, l'équipe arbitre, ce qui réduit le temps de traitement sur les tâches répétitives." },
  { icon: Cpu, title: 'Assistance au code et aux données', desc: "Génération, explication et revue de code, transformation de données, scripts d'automatisation. Un appui pour les équipes techniques, pas un remplacement du jugement d'ingénierie." },
]

const LIMITES = [
  { icon: AlertTriangle, title: 'Hallucinations', desc: "Un modèle peut produire une réponse fausse formulée avec assurance. Sans ancrage sur vos données ni validation humaine, le risque d'erreur reste réel sur les sujets sensibles." },
  { icon: Lock, title: 'Confidentialité', desc: "Saisir des données sensibles dans un outil non maîtrisé expose l'entreprise. Le périmètre des données, le choix de l'hébergement et les accès se cadrent avant tout usage." },
  { icon: Scale, title: 'Conformité', desc: "Le RGPD encadre tout traitement de données personnelles ; l'AI Act impose documentation et classification par niveau de risque. L'usage doit être tracé, pas improvisé." },
]

/* ───────── Cas d'usage transverses (6 fonctions) ───────── */

const USAGES = [
  { icon: MessagesSquare, fn: 'Marketing & communication', desc: "Première version de contenus, déclinaison de messages, synthèse de retours et veille. L'IA accélère la production, la ligne éditoriale reste tenue par l'équipe." },
  { icon: FileText, fn: 'Commercial & relation client', desc: "Préparation de propositions, qualification de demandes, réponses types, comptes rendus d'échanges. Le temps gagné se reporte sur la relation et la négociation." },
  { icon: Search, fn: 'Juridique & conformité', desc: "Lecture et synthèse de contrats, recherche dans un corpus, repérage de clauses. Toujours avec relecture experte : l'IA dégrossit, le juriste tranche." },
  { icon: Database, fn: 'RH & support interne', desc: "Réponses aux questions récurrentes, aide à la rédaction d'offres et de comptes rendus, assistance documentaire pour les collaborateurs." },
  { icon: Cpu, fn: 'IT & data', desc: "Assistance au développement, transformation de données, documentation technique, automatisation de tâches d'exploitation répétitives." },
  { icon: Layers, fn: 'Direction & pilotage', desc: "Synthèse de documents de gestion, préparation de réunions, première lecture de masses d'informations pour décider plus vite, sans déléguer la décision." },
]

/* ───────── Comment la déployer (timeline 4 étapes) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cadrage des cas d\'usage',
    desc: "Nous identifions les cas à plus forte valeur, leur faisabilité et leurs contraintes de données. Ce travail fixe le périmètre, le critère de réussite et le niveau de risque, avant tout déploiement. Mieux vaut prioriser un usage utile que multiplier les pilotes sans suite.",
  },
  {
    num: '02',
    title: 'Preuve de concept (POC)',
    desc: "Nous construisons un prototype sur le cas prioritaire, en conditions réelles, pour mesurer la valeur sur un vrai flux. Le POC valide les choix techniques et expose les limites avant d'engager une mise en production complète.",
  },
  {
    num: '03',
    title: 'Mise en production',
    desc: "Nous intégrons la solution à vos outils et à votre environnement, posons les garde-fous, la supervision et l'ancrage sur vos données. C'est l'étape où la plupart des projets d'IA générative s'arrêtent faute de préparation ; nous la traitons comme un projet à part entière.",
  },
  {
    num: '04',
    title: 'Gouvernance dans la durée',
    desc: "Nous mettons en place la charte d'usage, le suivi de la qualité, la conformité RGPD et AI Act et la formation des équipes. L'objectif est un usage maîtrisé qui tient, pas une démonstration ponctuelle.",
  },
]

/* ───────── Modèles disponibles (familles, sans comparatif biaisé) ───────── */

const MODELES = [
  { fam: 'Claude (Anthropic)', desc: "Famille de modèles orientée raisonnement, rédaction longue et tâches outillées. Adaptée aux usages exigeant de la rigueur et un cadre de sécurité." },
  { fam: 'GPT (OpenAI)', desc: "Famille généraliste très répandue, disponible via API et intégrée à de nombreux outils, dont l'écosystème Microsoft Copilot." },
  { fam: 'Gemini (Google)', desc: "Famille multimodale intégrée à l'écosystème Google Workspace, utile lorsque la suite collaborative Google est déjà en place." },
  { fam: 'Mistral', desc: "Famille de modèles européenne, propriétaire et open source, pertinente quand la souveraineté et l'hébergement en Europe sont prioritaires." },
]

/* ───────── Comment Masteria accompagne (3 leviers) ───────── */

const LEVIERS = [
  {
    icon: Compass,
    tag: 'Conseil',
    title: 'Cadrer les usages et la gouvernance',
    desc: "Nous identifions les cas d'usage à fort retour, cadrons les données et posons la gouvernance (charte, RGPD, AI Act). Vous décidez sur des arbitrages objectivés, indépendants des éditeurs.",
    points: ['Cartographie des cas d\'usage prioritaires', 'Cadrage RGPD et AI Act', 'Choix des modèles sans dépendance'],
  },
  {
    icon: Boxes,
    tag: 'Développement',
    title: 'Construire la solution sur mesure',
    desc: "Du POC à la mise en production : agents, intégrations LLM/RAG sur vos données, connecteurs à vos outils. Vous restez propriétaire du code et des données.",
    points: ['POC en conditions réelles', 'Intégration à votre existant', 'Code et données au client'],
  },
  {
    icon: GraduationCap,
    tag: 'Formation',
    title: 'Rendre les équipes autonomes',
    desc: "En offre secondaire, nous formons vos équipes à utiliser l'IA générative avec méthode et garde-fous, pour ancrer l'usage une fois la solution déployée.",
    points: ['Bonnes pratiques et garde-fous', 'Montée en compétence par métier', 'Autonomie sur les outils déployés'],
  },
]

/* ───────── Repères chiffrés (faits sourcés, citables) ───────── */

const MARKET_STATS = [
  {
    stat: '≥ 30 %',
    label: "des projets d'IA générative seraient abandonnés après la preuve de concept d'ici fin 2025, le plus souvent pour des raisons organisationnelles",
    source: 'Gartner, 2024',
  },
  {
    stat: '1ᵉʳ août 2024',
    label: "entrée en vigueur de l'AI Act européen (règlement 2024/1689), qui encadre les usages d'IA par niveau de risque",
    source: 'Commission européenne',
  },
  {
    stat: '25 mai 2018',
    label: "application du RGPD, cadre de conformité de tout traitement de données personnelles par un système d'IA",
    source: 'CNIL',
  },
]

/* ───────── Définitions clés (ancrage d'entités — GEO) ───────── */

const GLOSSARY = [
  {
    term: 'IA générative',
    def: "Catégorie d'intelligence artificielle qui produit du contenu nouveau (texte, code, image, synthèse) à partir d'une consigne, en s'appuyant sur des modèles entraînés sur de grands volumes de données.",
  },
  {
    term: 'LLM (grand modèle de langage)',
    def: "Modèle entraîné à prédire et générer du langage naturel, socle de la plupart des usages d'IA générative en entreprise (Claude, GPT, Gemini, Mistral).",
  },
  {
    term: 'RAG (retrieval-augmented generation)',
    def: "Technique qui ancre les réponses d'un modèle dans vos propres documents et bases, pour des réponses sourcées et limiter les approximations.",
  },
  {
    term: 'Hallucination',
    def: "Réponse fausse mais formulée avec assurance par un modèle. Elle se maîtrise par l'ancrage sur des données fiables et la validation humaine.",
  },
  {
    term: 'Fine-tuning',
    def: "Ajustement d'un modèle existant sur des données spécifiques pour l'adapter à un domaine ou à un style, en complément ou en alternative au RAG.",
  },
]

/* ───────── Sources de référence (liens d'autorité) ───────── */

const REFERENCES = [
  { label: "AI Act — texte officiel (EUR-Lex, règlement 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689' },
  { label: "Cadre réglementaire de l'IA — Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai' },
  { label: "Intelligence artificielle — CNIL", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que l'IA générative en entreprise ?",
    a: "L'IA générative en entreprise désigne l'usage de modèles capables de produire du contenu (texte, code, image, synthèse) à partir d'une consigne, intégré aux processus métier d'une organisation. Concrètement, elle aide à rédiger, reformuler, résumer, rechercher dans des documents et assister le support ou le développement. Sa valeur ne vient pas de l'outil seul mais de son intégration à vos données et à vos flux, avec des garde-fous. Masteria accompagne ce passage du cas d'usage au déploiement maîtrisé, du conseil à la solution en production.",
  },
  {
    q: "Quels cas d'usage de l'IA générative pour les entreprises ?",
    a: "Les cas d'usage transverses reviennent dans la plupart des fonctions : rédaction et reformulation, synthèse documentaire, recherche dans vos données, assistance au support client, préparation de propositions commerciales, lecture de contrats côté juridique, assistance au code et à la data côté IT. Le bon point de départ est un cas prioritaire à forte valeur et à faible risque, plutôt qu'un déploiement tous azimuts. Pour des exemples par fonction et par secteur, voyez nos cas d'usage de l'IA en entreprise et nos solutions IA types.",
  },
  {
    q: "Comment déployer l'IA générative en entreprise ?",
    a: "Le déploiement suit quatre temps : cadrer les cas d'usage prioritaires et leurs contraintes de données, prouver la valeur sur un POC en conditions réelles, mettre en production en intégrant la solution à vos outils avec les garde-fous nécessaires, puis gouverner dans la durée (charte d'usage, suivi de qualité, conformité, formation). L'étape la plus négligée est la mise en production : beaucoup de pilotes prometteurs ne passent jamais à l'échelle faute de préparation. Mettre en place l'IA générative est un projet à part entière, pas une simple souscription d'outil.",
  },
  {
    q: "Quels risques et quelle conformité RGPD / AI Act ?",
    a: "Trois risques principaux : les hallucinations (réponses fausses formulées avec assurance), la confidentialité des données saisies dans des outils non maîtrisés, et la conformité réglementaire. Le RGPD encadre tout traitement de données personnelles ; l'AI Act, règlement (UE) 2024/1689 entré en vigueur le 1ᵉʳ août 2024, impose une documentation des usages et une classification par niveau de risque. Les garde-fous se cadrent en amont : périmètre des données, ancrage sur vos contenus, validation humaine, traçabilité. Notre offre de gouvernance IA détaille ce cadre.",
  },
  {
    q: "Quel modèle d'IA générative choisir ?",
    a: "Il n'existe pas de meilleur modèle dans l'absolu : le choix dépend du cas d'usage, du coût, de la sensibilité des données et de votre écosystème existant. Les principales familles sont Claude (Anthropic), GPT (OpenAI), Gemini (Google) et Mistral, propriétaires ou open source. Nous travaillons sans dépendance à un fournisseur unique et recommandons le modèle adapté à votre contexte, en pondérant performance, coût d'usage, conformité et capacité d'intégration. Une approche multi-modèle évite de s'enfermer dans un choix qui vieillit vite.",
  },
  {
    q: "Combien coûte un projet d'IA générative en entreprise ?",
    a: "Un projet d'IA générative se chiffre sur devis, selon son périmètre : un POC sur un cas unique, une intégration sur vos données ou une solution complète mise en production n'engagent pas le même travail. Le coût se précise après un cadrage qui fixe le périmètre, les données et le critère de réussite. Pour des repères de budget et la logique de chiffrage, consultez notre page sur le prix d'un projet IA. Notre diagnostic IA cadre le besoin avant tout engagement.",
  },
  {
    q: "L'IA générative remplace-t-elle les équipes ?",
    a: "Non. En entreprise, l'IA générative est un appui qui accélère des tâches répétitives et dégrossit le travail : elle propose, l'équipe arbitre. Les usages sérieux gardent une validation humaine sur les décisions sensibles, parce que le modèle peut se tromper. L'enjeu est moins de remplacer que de redéployer du temps vers ce qui demande du jugement, de la relation et de l'expertise.",
  },
]

/* ───────── JSON-LD (tableau : Service + DefinedTermSet) ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: "IA générative en entreprise — Masteria",
  description: "Accompagnement au déploiement de l'IA générative en entreprise : cadrage des cas d'usage, POC, mise en production et gouvernance (RGPD, AI Act). Conseil, développement de solutions sur mesure et formation des équipes.",
  url: 'https://www.master-ia.fr/ia-generative-entreprise',
  serviceType: "Déploiement et intégration de l'IA générative",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  brand: { '@id': 'https://www.master-ia.fr/#organization' },
  mainEntityOfPage: 'https://www.master-ia.fr/ia-generative-entreprise',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Accompagnement IA générative en entreprise",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Cadrage des cas d'usage IA générative", description: "Identification et priorisation des cas d'usage à fort retour, contraintes de données et niveau de risque." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Déploiement et mise en production", description: "Du POC à la production : intégration aux outils, ancrage RAG, garde-fous et supervision." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Gouvernance IA (RGPD, AI Act)", description: "Charte d'usage, conformité RGPD et AI Act, validation humaine et traçabilité." } },
    ],
  },
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/ia-generative-entreprise#glossaire',
  name: "Glossaire de l'IA générative en entreprise",
  hasDefinedTerm: GLOSSARY.map(g => ({
    '@type': 'DefinedTerm',
    name: g.term,
    description: g.def,
    inDefinedTermSet: 'https://www.master-ia.fr/ia-generative-entreprise#glossaire',
  })),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/ia-generative-entreprise#article',
  headline: "IA générative en entreprise : du cas d'usage au déploiement maîtrisé",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-15',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/ia-generative-entreprise#webpage' },
  about: ['IA générative', "Déploiement de l'IA en entreprise", 'RGPD', 'AI Act'],
}

const extraJsonLd = [serviceJsonLd, definedTermSetJsonLd, articleJsonLd]

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
      {/* Réponse TOUJOURS rendue dans le DOM (repli CSS via maxHeight) pour l'indexation */}
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function IAGenerativeEntreprisePage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en IA', slug: 'conseil-intelligence-artificielle' },
    { name: 'IA générative en entreprise', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        datePublished="2026-06-15"
        dateModified="2026-07-02"
        extraJsonLd={extraJsonLd}
        keywords="ia générative entreprise, ia générative en entreprise, déploiement ia générative, intégration ia générative, ia générative pour les entreprises, solutions ia générative entreprise, mettre en place l'ia générative, RGPD, AI Act"
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
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#5B6679' }}>Conseil en IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">IA générative en entreprise</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              IA générative en entreprise
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            IA générative en entreprise
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>du cas d'usage au déploiement maîtrisé</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>L'IA générative produit textes, code et synthèses à partir d'une consigne. En entreprise, sa valeur vient de son intégration à vos données et à vos processus, avec des garde-fous.</strong> Masteria vous accompagne du cas d'usage au déploiement maîtrisé.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Cabinet spécialisé sur l'intelligence artificielle depuis 2022, fondé à Lyon par Mathias Nizan. Nous cadrons les usages, développons les solutions sur mesure et formons les équipes, en France, en Suisse et en Belgique.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer votre projet IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#deploiement" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comment la déployer
            </a>
          </div>

          {/* tags */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_CHIPS.map(({ icon: Icon, label }) => (
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
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 116px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── QU'EST-CE QUE L'IA GÉNÉRATIVE EN ENTREPRISE (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Définition</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Qu'est-ce que l'IA générative en entreprise ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>L'IA générative en entreprise désigne l'usage de modèles capables de produire du contenu (texte, code, image, synthèse) à partir d'une consigne, intégré aux processus métier. Sa valeur ne tient pas à l'outil seul mais à son intégration à vos données et à vos flux, avec des garde-fous.</strong>
              </p>
            </div>

            <div style={{ color: '#374151', fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ marginTop: 0, marginBottom: 20 }}>
                Depuis la diffusion massive des modèles de langage, la technologie est accessible à toutes les entreprises. La difficulté s'est déplacée : ce n'est plus l'accès à l'IA générative qui distingue les organisations, mais la qualité de son intégration aux processus, son ancrage sur les données réelles et la maîtrise de ses limites.
              </p>
              <p style={{ marginBottom: 20 }}>
                Concrètement, l'IA générative pour les entreprises s'appuie sur des grands modèles de langage (LLM) reliés à vos contenus, souvent via du RAG (retrieval-augmented generation) pour produire des réponses sourcées. Elle assiste la rédaction, la synthèse, la recherche documentaire, le support et le développement, là où ces tâches sont répétitives et chronophages.
              </p>
              <p style={{ marginBottom: 0 }}>
                Un usage sérieux garde l'humain dans la boucle sur les décisions sensibles. L'IA propose, l'équipe arbitre. C'est cette articulation, et non l'outil lui-même, qui fait la différence entre une démonstration et un usage qui tient dans la durée. Pour des exemples concrets, parcourez nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>cas d'usage de l'IA en entreprise</Link> et nos <Link to="/solutions-ia" style={aStyle}>solutions IA types</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE QU'ELLE CHANGE : GAINS & LIMITES HONNÊTES ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce qu'elle change</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que l'IA générative apporte, et ce qu'elle ne fait pas
          </h2>

          <p style={answerStyle}>
            <strong>L'IA générative fait gagner du temps sur la rédaction, la synthèse, la recherche documentaire et l'assistance au support ou au code. Elle ne décide pas à votre place et peut se tromper : les gains réels supposent un ancrage sur vos données et une validation humaine.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Les bénéfices sont concrets quand l'usage est cadré. Les limites le sont tout autant : les passer sous silence, c'est préparer un projet qui déçoit. Voici les deux faces, sans survente.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginBottom: 44 }}>
            {GAINS.map(item => (
              <div key={item.title} style={{ ...cardStyle, padding: 26 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 16 }}>Les limites à garder en tête</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {LIMITES.map(item => (
              <div key={item.title} style={{ ...cardStyle, padding: 24, borderLeft: `3px solid ${c}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <item.icon size={20} strokeWidth={2.2} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 15.5 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS D'USAGE TRANSVERSES ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Cas d'usage transverses</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quels cas d'usage de l'IA générative pour les entreprises ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Les cas d'usage transverses reviennent dans toutes les fonctions : rédaction, synthèse documentaire, recherche dans vos données, support, préparation de propositions, lecture de contrats, assistance au code. Le bon point de départ est un cas prioritaire, à forte valeur et faible risque.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {USAGES.map(item => (
                  <div key={item.fn} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <IconTile icon={item.icon} />
                      <h3 style={{ ...h3Style, fontSize: 15.5 }}>{item.fn}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Selon le besoin, ces usages prennent la forme d'un <Link to="/agents-ia-entreprise" style={aStyle}>agent IA pour votre entreprise</Link> ou d'une solution dédiée à un métier. Pour un panorama par cas, voyez nos <Link to="/solutions-ia" style={aStyle}>solutions IA</Link> et nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>cas d'usage de l'IA en entreprise</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT LA DÉPLOYER (ancre sombre — section la plus technique) ── */}
      <section id="deploiement" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Déploiement</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment déployer l'IA générative en entreprise ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le déploiement de l'IA générative suit quatre temps : cadrer les cas d'usage, prouver la valeur sur un POC en conditions réelles, mettre en production en l'intégrant à vos outils, puis gouverner dans la durée. L'étape la plus négligée est la mise en production.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 12, lineHeight: 1.7, maxWidth: 880 }}>
            Selon Gartner, au moins 30 % des projets d'IA générative seraient abandonnés après la preuve de concept d'ici fin 2025, le plus souvent pour des raisons organisationnelles. Mettre en place l'IA générative est un projet à part entière, pas une souscription d'outil.
          </p>

          <div style={{ position: 'relative', marginTop: 40, maxWidth: 880 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#1E293B' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: '#60A5FA', fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 17, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: '36px 0 0', maxWidth: 880 }}>
            Pour cadrer le besoin avant tout déploiement, notre <Link to="/diagnostic-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>diagnostic IA</Link> est l'offre d'entrée. Pour la trajectoire au niveau direction, voyez notre <Link to="/conseil-intelligence-artificielle" style={{ color: '#60A5FA', fontWeight: 600 }}>conseil en intelligence artificielle</Link>.
          </p>
        </div>
      </section>

      {/* ── RISQUES & GARDE-FOUS ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Risques & garde-fous</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quels risques et quelle conformité RGPD / AI Act ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Trois risques cadrent l'usage : hallucinations, confidentialité des données et conformité réglementaire. Le RGPD encadre les données personnelles ; l'AI Act, règlement (UE) 2024/1689 en vigueur depuis le 1ᵉʳ août 2024, impose documentation et classification par niveau de risque.</strong>
              </p>
            </div>

            <div style={{ color: '#374151', fontSize: 16, lineHeight: 1.75 }}>
              <p style={{ marginTop: 0, marginBottom: 20 }}>
                Les garde-fous se posent en amont, pas après l'incident. Côté hallucinations, l'ancrage des réponses sur vos données fiables (RAG) et la validation humaine sur les sujets sensibles réduisent fortement le risque d'erreur. Côté confidentialité, le périmètre des données, le choix de l'hébergement et la maîtrise des accès se décident avant le moindre usage en production.
              </p>
              <p style={{ marginBottom: 20 }}>
                Côté conformité, deux cadres se cumulent. Le RGPD, appliqué depuis le 25 mai 2018, encadre tout traitement de données personnelles par un système d'IA. L'AI Act, règlement européen 2024/1689 entré en vigueur le 1ᵉʳ août 2024, classe les systèmes par niveau de risque et impose documentation, traçabilité et garde-fous. Concrètement, l'entreprise doit savoir quels usages d'IA elle déploie, sur quelles données, et le tracer.
              </p>
              <p style={{ marginBottom: 0 }}>
                Une charte d'usage interne, un registre des systèmes d'IA et des procédures de revue humaine transforment ces obligations en cadre opérationnel. C'est l'objet de notre offre de <Link to="/gouvernance-ia" style={aStyle}>gouvernance IA</Link>, qui structure un déploiement maîtrisé de l'IA générative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODÈLES DISPONIBLES ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Modèles disponibles</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quel modèle d'IA générative choisir ?
          </h2>

          <p style={answerStyle}>
            <strong>Il n'existe pas de meilleur modèle dans l'absolu : le choix dépend du cas d'usage, du coût, de la sensibilité des données et de votre écosystème. Les principales familles sont Claude (Anthropic), GPT (OpenAI), Gemini (Google) et Mistral. Nous travaillons sans dépendance à un fournisseur unique.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le marché évolue vite, et un choix figé vieillit mal. Une approche multi-modèle permet de retenir le modèle adapté à chaque cas, en pondérant performance, coût d'usage, conformité et capacité d'intégration. Voici les grandes familles, sans classement marketing.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
            {MODELES.map(m => (
              <div key={m.fam} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <Cpu size={18} strokeWidth={2.2} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                  <h3 style={{ ...h3Style, fontSize: 15.5 }}>{m.fam}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
            Cette présentation est volontairement factuelle et sans comparatif biaisé : le bon modèle se détermine au cas par cas, en fonction de votre contexte réel.
          </p>
        </div>
      </section>

      {/* ── COMMENT MASTERIA ACCOMPAGNE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Notre accompagnement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment Masteria vous accompagne sur l'IA générative
          </h2>

          <p style={answerStyle}>
            <strong>Masteria couvre le chemin complet : conseil pour cadrer les usages et la gouvernance, développement des solutions sur mesure du POC à la production, et formation des équipes en offre secondaire pour ancrer l'usage. Vous restez propriétaire du code et des données.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Spécialiste de l'IA depuis 2022, indépendant des éditeurs, le cabinet objective les arbitrages et conçoit pour la production, pas pour la démonstration. Trois leviers se combinent selon votre besoin.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
            {LEVIERS.map((card, i) => (
              <div key={card.title} style={{ ...cardStyle, padding: 30, ...(i === 0 ? { borderTop: `3px solid ${c}` } : {}) }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                  <span style={{ background: i === 0 ? c : cLight, color: i === 0 ? '#fff' : c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: '0.02em' }}>
                    {card.tag}
                  </span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px' }}>{card.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {card.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: '#374151', lineHeight: 1.55 }}>
                      <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            La formation est ici une offre secondaire, mobilisée une fois la solution déployée pour rendre les équipes autonomes. Le cœur du sujet reste le passage du cas d'usage au déploiement, via notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en IA</Link> et nos <Link to="/solutions-ia" style={aStyle}>solutions IA</Link>.
          </p>
        </div>
      </section>

      {/* ── REPÈRES, DÉFINITIONS & SOURCES (SEO + GEO) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>Repères du marché</Kicker>
          <h2 style={h2Style}>
            L'IA générative en entreprise : ce que disent les chiffres
          </h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, maxWidth: 820, marginBottom: 32 }}>
            <strong style={{ color: '#0A0A0A' }}>La technologie est accessible à toutes les entreprises ; c'est son intégration et sa conformité qui font la différence.</strong>{' '}
            Trois repères vérifiables cadrent l'enjeu et expliquent pourquoi le déploiement et la gouvernance sont déterminants.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginBottom: 40 }}>
            {MARKET_STATS.map((s, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', lineHeight: 1.1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.stat}</div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: '0 0 10px' }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#6B7280', margin: 0, fontWeight: 600 }}>Source : {s.source}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', margin: '0 0 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={20} color={c} strokeWidth={2.2} aria-hidden="true" /> Définitions clés
          </h3>
          <dl style={{ margin: 0, display: 'grid', gap: 16 }}>
            {GLOSSARY.map((g, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cLight}`, paddingLeft: 16 }}>
                <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{g.term}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.65 }}>{g.def}</dd>
              </div>
            ))}
          </dl>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', margin: '44px 0 16px' }}>
            Sources de référence
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

      {/* ── BUDGET (renvoi prix) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Budget</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Combien coûte un projet d'IA générative ?
          </h2>

          <p style={{ ...answerStyle, background: '#F9FAFB' }}>
            <strong>Un projet d'IA générative se chiffre sur devis, selon le périmètre : un POC sur un cas unique, une intégration sur vos données ou une solution complète en production n'engagent pas le même travail. Le coût se précise après un cadrage qui fixe le périmètre, les données et le critère de réussite.</strong>
          </p>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            Nous ne publions pas de prix type, car un tarif à l'aveugle ne veut rien dire sur un projet sur mesure. Pour des repères de budget et la logique de chiffrage, consultez notre page sur le <Link to="/prix-projet-ia" style={aStyle}>prix d'un projet IA</Link>. Pour situer votre point de départ sans engagement, notre <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> cadre le besoin avant tout chiffrage.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                IA générative en entreprise : les questions fréquentes
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
            Explorer nos expertises IA, du cadrage au déploiement.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: "Cas d'usage de l'IA en entreprise", href: '/cas-usage-ia-entreprise', tag: "Cas d'usage", desc: "Des exemples concrets d'IA générative par fonction et par secteur, pour identifier vos priorités." },
              { label: 'Solutions IA types', href: '/solutions-ia', tag: 'Solutions', desc: "Un panorama de nos solutions IA par cas d'usage, des agents aux applications métier." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Quand et comment déployer des agents IA, avec les garde-fous que cela exige." },
              { label: 'Gouvernance IA', href: '/gouvernance-ia', tag: 'Conformité', desc: "Charte d'usage, RGPD, AI Act et validation humaine pour un déploiement maîtrisé." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Guide', desc: "Les 8 rubriques d'une charte d'utilisation de l'IA, avec des exemples de formulation." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: "Offre d'entrée", desc: "Le point de départ : un diagnostic qui cadre le besoin avant tout déploiement." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA au niveau de la direction." },
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

      {/* ── CTA FINALE SOMBRE (#0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Passez du cas d'usage au déploiement
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez-nous le cas d'usage d'IA générative que vous voulez adresser et vos contraintes. Nous revenons vers vous sous 24 heures avec une lecture du périmètre et une proposition de cadrage : faisabilité, garde-fous, premier POC envisageable.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
                Cadrer votre projet IA
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E2E8F0', padding: '16px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, border: '1px solid #2A3650' }}>
                Nous contacter
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Spécialistes IA depuis 2022 · Multi-modèle · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

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

      <OfficialSources />
    </>
  )
}
