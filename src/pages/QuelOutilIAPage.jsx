import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, Compass, RefreshCw, Scale, ShieldCheck, Sparkles,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { SPOKE_SLUGS } from '../data/spoke-slugs'

/*
 * « Quel outil IA pour votre métier ? » — outil gratuit liable, prolongement
 * du sujet de l'article Les Échos (choisir l'IA adaptée à son métier).
 * 3 questions (métier, environnement, priorité) → recommandation parmi
 * ChatGPT, Claude, Copilot, Gemini, Mistral (ou panorama multi-outils),
 * avec la formation exacte en face.
 * INTÉGRITÉ : les raisons reprennent le positionnement déjà publié sur le
 * site (hubs et comparatifs), aucune promesse de « meilleure IA » absolue.
 * LIENS : résolus à l'exécution contre SPOKE_SLUGS (spoke outil×métier si la
 * page existe, sinon hub outil) → zéro lien mort, y compris les slugs
 * irréguliers (copilot/gemini utilisent « rh »).
 * Le contenu de fond (5 profils d'outils, tableau, FAQ) est rendu
 * statiquement sous l'outil : crawlable et citable sans interaction.
 */

const c = '#2563EB'
const SECTION_PAD = 'clamp(56px, 8vw, 90px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(23px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 26 }
const radioCard = (selected) => ({
  display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer',
  border: `2px solid ${selected ? c : '#E5E7EB'}`, background: selected ? '#F8FAFF' : '#fff',
  borderRadius: 10, padding: '11px 14px', fontSize: 14, color: '#374151', lineHeight: 1.5,
})

const METIERS = [
  { slug: 'marketing', label: 'Marketing' },
  { slug: 'ressources-humaines', label: 'Ressources humaines' },
  { slug: 'commercial', label: 'Commercial' },
  { slug: 'finance', label: 'Finance' },
  { slug: 'communication', label: 'Communication' },
  { slug: 'management', label: 'Management' },
  { slug: 'assistante', label: 'Assistanat de direction' },
  { slug: 'seo', label: 'SEO et acquisition' },
  { slug: 'service-client', label: 'Service client' },
  { slug: 'informatique', label: 'Informatique et IT' },
  { slug: 'pedagogique', label: 'Métiers pédagogiques' },
  { slug: 'achats', label: 'Achats' },
  { slug: 'juridique', label: 'Juridique' },
]

/* Slugs irréguliers côté spokes (copilot/gemini écrivent « rh »). */
const SPOKE_ALIASES = { 'ressources-humaines': ['ressources-humaines', 'rh'] }
const METIER_HUB_SLUGS = ['marketing', 'ressources-humaines', 'commercial', 'finance', 'communication', 'management', 'assistante', 'seo', 'service-client', 'informatique', 'pedagogique', 'achats']

const TOOLS = {
  chatgpt: {
    name: 'ChatGPT', spoke: 'chatgpt', hub: 'formation-chatgpt', comparatif: { slug: 'chatgpt-vs-claude', label: 'ChatGPT vs Claude' },
    reason: "L'outil le plus adopté en entreprise et le plus polyvalent : rédaction, synthèse, analyse, brainstorming, avec l'écosystème le plus riche (GPTs, intégrations). Le point d'entrée naturel quand les usages touchent à tout.",
  },
  claude: {
    name: 'Claude (Anthropic)', spoke: 'claude', hub: 'formation-claude-ia', comparatif: { slug: 'chatgpt-vs-claude', label: 'ChatGPT vs Claude' },
    reason: "La référence des documents longs et de la rédaction exigeante : analyse de contrats et de rapports volumineux, raisonnement structuré, fidélité au document source. Le choix des métiers à forte intensité documentaire.",
  },
  copilot: {
    name: 'Microsoft Copilot', spoke: 'copilot', hub: 'formation-microsoft-copilot', comparatif: { slug: 'copilot-vs-chatgpt', label: 'Copilot vs ChatGPT' },
    reason: "L'IA directement dans Word, Excel, Outlook et Teams : les équipes restent dans leurs outils Microsoft 365 et les données restent dans votre environnement. Le chemin le plus court quand la suite est déjà déployée.",
  },
  gemini: {
    name: 'Google Gemini', spoke: 'gemini', hub: 'formation-gemini-entreprise', comparatif: { slug: 'gemini-vs-copilot', label: 'Gemini vs Copilot' },
    reason: "L'IA native de Google Workspace : Gmail, Docs, Sheets, Meet. Le choix cohérent pour les organisations déjà dans l'écosystème Google, avec de solides capacités multimodales.",
  },
  mistral: {
    name: 'Mistral AI', spoke: 'mistral', hub: 'formation-mistral-ai', comparatif: { slug: 'mistral-vs-chatgpt', label: 'Mistral vs ChatGPT' },
    reason: "L'acteur français : hébergement européen, souveraineté des données, et l'assistant Vibe (anciennement Le Chat) pour le quotidien. Le choix des organisations qui exigent un cadre européen.",
  },
  multi: {
    name: 'Panorama multi-outils', spoke: 'multi-outils', hub: 'formation-multi-outils', comparatif: { slug: 'quelle-est-la-meilleure-ia', label: 'Nos comparatifs détaillés' },
    reason: "Le bon outil dépend de vos cas d'usage réels. La formation panorama compare ChatGPT, Claude, Copilot, Gemini et Mistral sur vos propres documents : l'équipe repart avec un choix argumenté, pas une intuition.",
  },
}

/* Formation à recommander : spoke outil×métier si la page existe, sinon hub outil. */
function formationFor(toolKey, metierSlug) {
  const tool = TOOLS[toolKey]
  const variants = SPOKE_ALIASES[metierSlug] || [metierSlug]
  for (const v of variants) {
    const s = `formation-${tool.spoke}-${v}`
    if (SPOKE_SLUGS.includes(s)) return { href: `/${s}`, label: `Formation ${tool.name} pour votre métier` }
  }
  return { href: `/${tool.hub}`, label: `Toutes les formations ${tool.name}` }
}

function recommend(env, priorite) {
  if (priorite === 'docs') return 'claude'
  if (priorite === 'souverainete') return 'mistral'
  if (priorite === 'bureautique') return env === 'm365' ? 'copilot' : env === 'workspace' ? 'gemini' : 'chatgpt'
  if (priorite === 'polyvalence') return 'chatgpt'
  return 'multi'
}

const ENVS = [
  { id: 'm365', label: 'Microsoft 365 (Word, Excel, Outlook, Teams)' },
  { id: 'workspace', label: 'Google Workspace (Gmail, Docs, Sheets)' },
  { id: 'mixte', label: 'Mixte, autre, ou en cours de choix' },
]

const PRIORITES = [
  { id: 'polyvalence', label: 'La polyvalence au quotidien : rédiger, synthétiser, analyser, brainstormer' },
  { id: 'docs', label: 'Les documents longs et la rigueur : contrats, rapports, appels d\'offres' },
  { id: 'bureautique', label: 'Rester dans mes outils bureautiques actuels' },
  { id: 'souverainete', label: 'La souveraineté : hébergement et acteur européens' },
  { id: 'nesaispas', label: 'Je ne sais pas encore, je veux comparer' },
]

const PROFILS_STATIQUES = [
  { key: 'chatgpt', ideal: 'Usages transverses, équipes qui touchent à tout', env: 'Tout environnement' },
  { key: 'claude', ideal: 'Documents longs, juridique, finance, rédaction exigeante', env: 'Tout environnement' },
  { key: 'copilot', ideal: 'Équipes qui vivent dans Word, Excel, Outlook, Teams', env: 'Microsoft 365' },
  { key: 'gemini', ideal: 'Équipes qui vivent dans Gmail, Docs, Sheets', env: 'Google Workspace' },
  { key: 'mistral', ideal: 'Exigence de souveraineté et de cadre européen', env: 'Tout environnement' },
]

/* Lexique express (ancrage d'entités GEO → DefinedTermSet) */
const LEXIQUE = [
  { t: 'LLM (grand modèle de langage)', d: "Le moteur derrière ChatGPT, Claude, Copilot, Gemini et Mistral : un modèle entraîné sur de vastes corpus de texte, capable de rédiger, synthétiser, analyser et raisonner à partir d'instructions en langage naturel." },
  { t: 'Suite bureautique intégrée', d: "L'IA installée directement dans les documents et la messagerie : Copilot dans Microsoft 365, Gemini dans Google Workspace. L'intégration évite les copier-coller mais n'a de valeur que si la suite est réellement déployée." },
  { t: 'Souveraineté des données', d: "La localisation et la juridiction qui s'appliquent à vos données : hébergement en Europe, droit européen, acteur européen. Le critère qui fait choisir Mistral à certaines organisations publiques et régulées." },
  { t: 'Fenêtre de contexte', d: "La quantité de texte qu'un modèle peut traiter en une fois. Une grande fenêtre permet d'analyser des contrats ou rapports entiers sans les découper, la force historique de Claude sur les documents longs." },
]

const FAQ = [
  { q: 'Quelle est la meilleure IA pour une entreprise en 2026 ?', a: "Aucun outil ne domine tous les usages : ChatGPT est le plus polyvalent et le plus adopté, Claude est la référence des documents longs et de la rédaction rigoureuse, Copilot et Gemini gagnent quand les équipes vivent déjà dans Microsoft 365 ou Google Workspace, Mistral répond à l'exigence de souveraineté européenne. La bonne question est celle de vos cas d'usage : ce simulateur donne un point de départ, une formation panorama permet de trancher sur vos vrais documents." },
  { q: 'Faut-il attendre que les modèles se stabilisent avant de choisir ?', a: "Non, pour deux raisons. D'abord les usages en cachette existent déjà dans la plupart des équipes : attendre, c'est laisser des données partir vers des comptes personnels non cadrés. Ensuite les compétences se transfèrent : une équipe formée au prompting et aux bons réflexes sur un outil bascule vers un autre en quelques jours. On choisit un point de départ et un cadre, pas un mariage définitif." },
  { q: 'ChatGPT ou Claude, comment trancher ?', a: "Par la nature du travail. Pour la polyvalence quotidienne (emails, brainstorming, contenus variés, écosystème d'intégrations), ChatGPT reste le point d'entrée le plus naturel. Dès que le volume documentaire et la rigueur priment (contrats, rapports d'audit, mémoires techniques, appels d'offres), Claude prend l'avantage grâce à sa gestion des documents longs et sa fidélité au texte source. Beaucoup d'équipes finissent avec les deux, chacun sur son terrain." },
  { q: 'Copilot ou Gemini ?', a: "Suivez votre suite bureautique : Copilot n'a de sens plein que dans Microsoft 365, Gemini que dans Google Workspace. Choisir l'IA de l'autre écosystème revient à payer une intégration dont vous ne profiterez pas. Si votre environnement est mixte ou en cours de choix, un outil indépendant de la suite (ChatGPT, Claude ou Mistral) évite de figer la décision." },
  { q: 'Peut-on utiliser plusieurs outils en même temps ?', a: "Oui, et les organisations matures le font : un outil bureautique intégré (Copilot ou Gemini) pour le quotidien dans les documents, et un assistant généraliste (ChatGPT, Claude ou Mistral) pour les tâches de fond. L'important est un cadre d'usage clair : qui utilise quoi, avec quelles données. Nos formations multi-outils comparent les cinq sur vos cas réels." },
  { q: 'Et la confidentialité des données ?', a: "Elle se règle par le choix de l'offre, pas seulement de l'outil : les offres professionnelles des cinq acteurs excluent par défaut vos données de l'entraînement des modèles, ce que ne garantissent pas les comptes gratuits grand public. La règle d'or : des comptes professionnels administrés, une charte d'usage écrite, et la liste de ce qui ne doit jamais être saisi. Ce cadrage fait partie de chacune de nos formations." },
  { q: 'Cette recommandation vaut-elle décision définitive ?', a: "Non, elle donne un point de départ solide. Les modèles évoluent vite et le bon choix dépend de vos documents, de vos volumes et de vos contraintes. Pour décider en connaissance de cause : une formation panorama multi-outils sur vos propres cas, ou un échange de cadrage gratuit avec Masteria." },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '18px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4, fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <ChevronDown size={18} strokeWidth={2} style={{ flexShrink: 0, color: '#6B7280', marginTop: 2, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, paddingBottom: 18, margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* Maillage croisé entre les outils gratuits du site */
const AUTRES_OUTILS = [
  { href: '/quel-opco', label: 'Quel est mon OPCO ? (simulateur)' },
  { href: '/test-maturite-ia', label: 'Test de maturité IA (3 min)' },
]

const PAGE_URL = 'https://www.master-ia.fr/quel-outil-ia'

/* Entité outil gratuit (rich result Software + signal GEO « outil ») */
const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${PAGE_URL}#app`,
  name: 'Quel outil IA pour votre métier ? — simulateur',
  url: PAGE_URL,
  description: "Simulateur gratuit : votre métier, votre environnement de travail et votre priorité → une recommandation parmi ChatGPT, Claude, Microsoft Copilot, Google Gemini et Mistral AI, avec la formation correspondante.",
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  inLanguage: 'fr-FR',
}

const definedTermsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${PAGE_URL}#lexique`,
  name: "Lexique du choix d'un outil IA",
  hasDefinedTerm: LEXIQUE.map(({ t, d }) => ({ '@type': 'DefinedTerm', name: t, description: d })),
}

export default function QuelOutilIAPage() {
  const [metier, setMetier] = useState('')
  const [env, setEnv] = useState('')
  const [priorite, setPriorite] = useState('')
  const done = metier && env && priorite
  const toolKey = done ? recommend(env, priorite) : null
  const tool = toolKey ? TOOLS[toolKey] : null
  const formation = toolKey ? formationFor(toolKey, metier) : null
  const metierHub = METIER_HUB_SLUGS.includes(metier) ? `/formation-ia-${metier}` : null

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Quelle est la meilleure IA ?', slug: 'quelle-est-la-meilleure-ia' },
    { name: 'Quel outil IA pour votre métier ?', slug: 'quel-outil-ia' },
  ]

  return (
    <>
      <SEOHead
        title="Quel outil IA choisir pour votre métier ? | Masteria"
        description="ChatGPT, Claude, Copilot, Gemini ou Mistral : 3 questions et vous obtenez l'outil adapté à votre métier et votre environnement, avec la formation en face."
        slug="quel-outil-ia"
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        keywords="quel outil ia choisir, quelle ia choisir, chatgpt ou claude, copilot ou gemini, meilleur outil ia métier, choisir son ia entreprise"
        datePublished="2026-08-07"
        dateModified="2026-08-07"
        speakable={['#geo-summary', '#profils-outils']}
        citations={[
          { name: "Les Échos — ChatGPT, Claude, Copilot, Gemini, Mistral : comment choisir l'IA la plus adaptée à son métier", url: 'https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741' },
        ]}
        extraJsonLd={[webAppJsonLd, definedTermsJsonLd]}
      />

      {/* ── HERO sombre compact ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 64px) 24px clamp(48px, 7vw, 72px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/quelle-est-la-meilleure-ia" style={{ color: '#5B6679' }}>Quelle est la meilleure IA ?</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Quel outil pour votre métier ?</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Outil gratuit · 1 minute</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 16, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 800 }}>
            Quel outil IA choisir pour votre métier&nbsp;?
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 20px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(16px, 2.2vw, 18.5px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            ChatGPT, Claude, Copilot, Gemini ou Mistral : aucun ne domine tous les usages, et un outil mal choisi finit contourné par les équipes. Trois questions suffisent pour un point de départ solide : votre métier, votre environnement de travail, votre priorité.
          </p>

          {/* Sommaire ancré « Sur cette page » (sitelinks + navigation) */}
          <nav aria-label="Sur cette page" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
            {[['Le simulateur', '#simulateur'], ['Les 5 outils', '#profils-outils'], ['Lexique', '#lexique'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', textDecoration: 'none', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 12px' }}>
                {label}
              </a>
            ))}
          </nav>

          {/* En bref — synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(18px, 3vw, 24px)', maxWidth: 720 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 12 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {[
                ['Format', '3 questions, 1 minute, sans compte ni email'],
                ['Choix couvert', 'ChatGPT, Claude, Microsoft Copilot, Google Gemini, Mistral AI, ou panorama multi-outils'],
                ['Résultat', 'Un outil recommandé, la raison, et la formation correspondante parmi 89 programmes'],
                ['Et après', 'Un comparatif détaillé pour creuser, une formation pour trancher sur vos vrais documents'],
              ].map(([label, value], i) => (
                <div key={label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '8px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 130px', fontWeight: 800, fontSize: 13, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 13.5, color: '#94A3B8', lineHeight: 1.55 }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LE SIMULATEUR ── */}
      <section id="simulateur" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ marginBottom: 26 }}>
            <label htmlFor="metier-select" style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>
              1. Votre métier
            </label>
            <select
              id="metier-select"
              value={metier}
              onChange={e => setMetier(e.target.value)}
              style={{ width: '100%', padding: '13px 14px', borderRadius: 10, border: '1px solid #D1D5DB', fontSize: 15, color: '#0A0A0A', background: '#F9FAFB', fontFamily: 'DM Sans, sans-serif' }}
            >
              <option value="">Sélectionnez votre métier…</option>
              {METIERS.map(m => <option key={m.slug} value={m.slug}>{m.label}</option>)}
            </select>
          </div>

          <fieldset style={{ border: 'none', padding: 0, margin: '0 0 26px' }}>
            <legend style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>2. Votre environnement de travail</legend>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 8 }}>
              {ENVS.map(e => (
                <label key={e.id} style={radioCard(env === e.id)}>
                  <input type="radio" name="env" checked={env === e.id} onChange={() => setEnv(e.id)} style={{ marginTop: 3, accentColor: c }} />
                  {e.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset style={{ border: 'none', padding: 0, margin: '0 0 30px' }}>
            <legend style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>3. Votre priorité numéro un</legend>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {PRIORITES.map(p => (
                <label key={p.id} style={radioCard(priorite === p.id)}>
                  <input type="radio" name="priorite" checked={priorite === p.id} onChange={() => setPriorite(p.id)} style={{ marginTop: 3, accentColor: c }} />
                  {p.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div aria-live="polite">
            {done && tool ? (
              <div style={{ border: `2px solid ${c}`, borderRadius: 16, padding: 'clamp(22px, 3vw, 32px)', background: '#F8FAFF' }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 8 }}>Notre recommandation</div>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', margin: '0 0 10px' }}>{tool.name}</p>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 18px' }}>{tool.reason}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
                  <Link to={formation.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '12px 24px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
                    {formation.label} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <button onClick={() => { setMetier(''); setEnv(''); setPriorite('') }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 20px', fontSize: 14, fontWeight: 600, color: '#374151', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    <RefreshCw size={14} aria-hidden="true" /> Recommencer
                  </button>
                </div>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>
                  Pour creuser : <Link to={`/${tool.comparatif.slug}`} style={{ color: c, fontWeight: 600 }}>{tool.comparatif.label}</Link>
                  {metierHub && <> · <Link to={metierHub} style={{ color: c, fontWeight: 600 }}>toutes les formations IA de votre métier</Link></>}
                </p>
              </div>
            ) : (
              <p style={{ fontSize: 14, color: '#6B7280', margin: 0 }}>
                La recommandation s'affiche ici dès les trois réponses données.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── LES 5 PROFILS (contenu statique citable) ── */}
      <section id="profils-outils" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La grille de lecture</div>
          <h2 style={h2Style}>À qui va chaque outil</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 30px', maxWidth: 760 }}>
            Le résumé de ce que nous observons en formation et en mission, outil par outil. Les modèles évoluent vite ; ces profils d'usage, eux, restent stables.
          </p>
          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 14, border: '1px solid #E5E7EB' }}>
            <table aria-label="Comparatif des 5 outils IA : profil idéal, environnement, formation" style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', fontSize: 13.5 }}>
              <thead>
                <tr style={{ background: '#F9FAFB' }}>
                  {['Outil', 'Idéal pour', 'Environnement', 'Se former'].map(h => (
                    <th key={h} scope="col" style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12.5, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROFILS_STATIQUES.map(({ key, ideal, env: e }) => {
                  const t = TOOLS[key]
                  return (
                    <tr key={key}>
                      <td style={{ padding: '12px 16px', color: '#0A0A0A', fontWeight: 700, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>{t.name}</td>
                      <td style={{ padding: '12px 16px', color: '#374151', lineHeight: 1.55, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>{ideal}</td>
                      <td style={{ padding: '12px 16px', color: '#374151', lineHeight: 1.55, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>{e}</td>
                      <td style={{ padding: '12px 16px', borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }}>
                        <Link to={`/${t.hub}`} style={{ color: c, fontWeight: 700, textDecoration: 'none', fontSize: 13 }}>Programmes {t.name.split(' ')[0]}</Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '18px 0 0' }}>
            Les comparatifs détaillés, critère par critère : <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>quelle est la meilleure IA ?</Link> et <Link to="/meilleure-ia-entreprise-2026" style={{ color: c, fontWeight: 600 }}>meilleure IA pour entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── APRÈS LE CHOIX ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Après le choix</div>
          <h2 style={h2Style}>L'outil ne fait pas l'adoption</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 18 }}>
            {[
              { icon: Sparkles, title: 'Former sur vos cas réels', desc: "L'article des Échos qui cite notre fondateur le résume : un modèle mal adapté, et les gens vont chercher ailleurs. La formation sur vos propres documents ancre l'outil choisi dans le quotidien." },
              { icon: ShieldCheck, title: "Cadrer l'usage", desc: 'Comptes professionnels, charte, liste des données interdites : le cadre se pose au moment du déploiement, pas après le premier incident.' },
              { icon: Scale, title: 'Réévaluer chaque année', desc: "Les modèles et les tarifs bougent vite. Un point annuel suffit pour vérifier que l'outil choisi reste le bon, sans zapping permanent." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={cardStyle}>
                <div style={{ width: 44, height: 44, background: '#DBEAFE', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
            <Link to="/formation-multi-outils" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '13px 26px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Comparer les 5 outils en formation <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#374151', border: '1px solid #E5E7EB', padding: '13px 26px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
              Échanger sur votre contexte
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEXIQUE EXPRESS (DefinedTermSet) ── */}
      <section id="lexique" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>Lexique express</div>
          <h2 style={h2Style}>Les 4 notions qui éclairent le choix</h2>
          <div style={{ ...cardStyle, padding: 'clamp(20px, 3vw, 28px)' }}>
            <dl style={{ margin: 0 }}>
              {LEXIQUE.map(({ t, d }, i) => (
                <div key={t} style={{ padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{t}</dt>
                  <dd style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '16px 0 0' }}>
            83 autres termes de l'IA en entreprise dans notre <Link to="/glossaire-ia" style={{ color: c, fontWeight: 600 }}>glossaire IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={h2Style}>Questions fréquentes</h2>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── AUTRES OUTILS GRATUITS ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }}>
            Nos autres outils gratuits
          </h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {AUTRES_OUTILS.map(o => (
              <Link key={o.href} to={o.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 15px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                {o.label} <ArrowRight size={13} color="#6B7280" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
