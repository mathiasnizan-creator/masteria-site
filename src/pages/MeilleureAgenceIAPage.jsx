import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Boxes, Compass, Code2, GraduationCap, AlertTriangle, ShieldCheck, BookOpen } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Meilleure agence IA » : guide de choix 2026, angle BUILD / exécution.
 * Thèse de la page (valeur réelle + positionnement) : faire une démo d'IA prend
 * un après-midi ; mettre en production un outil que vos équipes utilisent et que
 * vous possédez, c'est un autre métier. La meilleure agence IA franchit ce pas :
 * elle cadre le bon cas d'usage, elle construit proprement (le code vous
 * appartient), elle forme vos équipes à le faire vivre. Masteria couvre les
 * trois. Distincte de /meilleur-cabinet-conseil-ia (angle conseil/stratégie) et
 * de /agence-ia (présentation de l'offre). Intégrité : aucun classement
 * nominatif, aucun chiffre ni cas client inventé. Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'meilleure-agence-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Meilleure agence IA : comment choisir en 2026 | Masteria'
const META_DESC = "Meilleure agence IA : comment choisir celle qui met votre projet en production. Propriété du code, paysage des acteurs et budgets 2026."
const KEYWORDS = 'meilleure agence ia, agence ia 2026, agence intelligence artificielle, agence developpement ia, comparatif agences ia, agence ia france, agence ia lyon, agence automatisation ia'

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

/* Ce qu'une agence IA doit savoir faire au-delà de coder (les 3 compétences, entrée build) */
const PILLARS = [
  {
    icon: Compass,
    tag: 'Cadrer',
    title: 'Choisir le bon cas d\'usage avant d\'écrire la moindre ligne',
    body: "Une agence qui code sans avoir compris votre métier livre une démo en quelques jours, puis un problème qui dure des mois. Avant de construire, il faut observer vos processus, écarter les gadgets et prioriser ce qui a un impact mesurable. C'est ce cadrage qui évite de payer pour un outil que personne n'utilisera.",
  },
  {
    icon: Code2,
    tag: 'Construire',
    title: 'Livrer un outil propre, en production, et qui vous appartient',
    body: "Le cœur du métier : agents, automatisations, applications, RAG sur vos données, intégration des modèles à votre SI, API et MCP. Une bonne agence livre du code documenté, maintenable et dont vous restez propriétaire. Vous le mesurerez le jour où vous voudrez faire évoluer l'outil en interne.",
  },
  {
    icon: GraduationCap,
    tag: 'Transmettre',
    title: 'Former vos équipes pour qu\'elles fassent vivre l\'outil',
    body: "Un outil que personne ne sait corriger meurt au premier changement de modèle. La meilleure agence forme vos équipes à utiliser, surveiller et ajuster ce qu'elle a livré. C'est la condition pour que l'investissement dure au-delà de la mise en ligne.",
  },
]

/* Comment faire construire votre IA : 5 voies (tableau texte, axe build) */
const ROUTES = [
  { route: 'Équipe interne', speed: 'Lente au démarrage', code: 'À vous', maint: 'À votre charge', skill: 'Forte si l\'équipe existe', when: "Vous avez déjà des développeurs IA et un besoin récurrent." },
  { route: 'ESN / régie', speed: 'Moyenne', code: 'À vous', maint: 'Tant que la régie dure', skill: 'Variable', when: "Renfort durable sur votre SI, au temps passé." },
  { route: 'Agence build spécialisée', speed: 'Rapide', code: 'À négocier', maint: 'En option', skill: 'Faible par défaut', when: "Un produit IA pointu à concevoir vite." },
  { route: 'Plateforme no-code', speed: 'Très rapide', code: 'Dépend de l\'outil', maint: 'Liée à l\'abonnement', skill: 'Moyenne', when: "Automatiser des processus simples à faible budget." },
  { route: 'Agence full-stack (cadrage + build + formation)', highlight: true, speed: 'Rapide', code: 'À vous', maint: 'Transférée à vos équipes', skill: 'Forte, par conception', when: "Un outil utilisé sur le terrain et des équipes autonomes ensuite." },
]

/* Les 5 étapes d'un projet IA, du cadrage à la production. Section à valeur ajoutée
 * (méthode concrète) qui répond à la thèse de la page : franchir la marche démo→production. */
const PROCESS = [
  { step: 'Cadrage', goal: "Choisir le bon cas d'usage et définir ce que « réussi » veut dire pour vous.", deliver: "Note de cadrage, critères de succès mesurables, estimation de budget et de délai.", duration: '1 à 2 semaines', watch: "Ne pas écrire une ligne de code avant d'avoir tranché le cas d'usage." },
  { step: 'Prototype', goal: "Valider la faisabilité sur vos vraies données, pas sur une démo générique.", deliver: "Prototype testable et premiers résultats chiffrés.", duration: '2 à 4 semaines', watch: "Un prototype sert à décider, il reste jetable tant que la valeur n'est pas prouvée." },
  { step: 'Industrialisation', goal: "Transformer le prototype en outil fiable, sécurisé et maintenable.", deliver: "Application ou agent en conditions réelles, intégrations au SI, garde-fous, conformité RGPD et AI Act.", duration: '1 à 3 mois', watch: "Sécurité, supervision et propriété du code se décident à cette étape." },
  { step: 'Déploiement et adoption', goal: "Mettre l'outil entre les mains des équipes et lever les freins d'usage.", deliver: "Mise en production, formation des utilisateurs, documentation.", duration: '2 à 4 semaines', watch: "Un outil non adopté ne rapporte rien : la conduite du changement compte autant que le code." },
  { step: 'Run et évolutions', goal: "Faire vivre l'outil dans la durée et le faire progresser.", deliver: "Supervision, maintenance, améliorations, montée en compétence de vos équipes.", duration: 'En continu', watch: "Le budget de run et d'évolutions s'anticipe dès le cadrage." },
]

const BUDGETS = [
  { mission: "Automatisation d'un processus", range: '3 000 à 50 000 €', note: 'Du workflow simple au déploiement multi-équipes.' },
  { mission: 'Chatbot ou assistant IA interne', range: '8 000 à 60 000 €', note: 'Selon les sources de données et le niveau d\'intégration.' },
  { mission: 'Agent IA métier', range: '20 000 à 120 000 €', note: 'Autonomie, outils connectés, garde-fous, supervision.' },
  { mission: 'Application IA sur mesure ou RAG', range: '30 000 à 300 000 € et plus', note: 'Produit complet, intégrations profondes au SI.' },
  { mission: 'Maintenance et évolutions (par mois)', range: '2 000 à 15 000 €', note: 'Run, supervision, ajustements après mise en production.' },
  { mission: 'Régie (développeur IA, par jour)', range: '600 à 1 200 €', note: 'TJM d\'un développeur ou data scientist détaché sur votre projet.' },
  { mission: 'Formation des équipes (intra, par jour)', range: '1 980 € / jour', note: "Tarif intra Masteria (HT), finançable par les OPCO (organisme certifié Qualiopi)." },
]

/* ── Repères citables (GEO) : stats sourcées, glossaire build, références ── */
const MARKET_STATS = [
  { value: '≥ 30 %', label: "des projets d'IA générative seraient abandonnés après le POC, faute de cadrage et de passage en production (prévision Gartner publiée en 2024).", source: 'Gartner, 2024', url: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025' },
  { value: '1ᵉʳ août 2024', label: "entrée en vigueur de l'AI Act (règlement européen 2024/1689), à intégrer dès la conception d'une solution IA.", source: 'Union européenne', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { value: '25 mai 2018', label: "application du RGPD, qui encadre les données mobilisées par toute application d'IA.", source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

const GLOSSARY = [
  { term: 'Agence IA', def: "Structure qui conçoit et développe des solutions d'IA sur mesure (agents, automatisations, applications, RAG, intégrations). Les agences full-stack y ajoutent le cadrage stratégique et la formation des équipes." },
  { term: 'RAG (retrieval-augmented generation)', def: "Technique qui connecte un modèle de langage à vos documents pour des réponses ancrées dans vos données, plutôt que sur ses seules connaissances générales." },
  { term: 'Agent IA', def: "Système qui enchaîne des actions de façon autonome (consulter un outil, décider, exécuter) pour accomplir une tâche, sous garde-fous et supervision humaine." },
  { term: 'MCP (Model Context Protocol)', def: "Protocole standard pour connecter un modèle d'IA à vos outils et données internes de manière sécurisée et réutilisable." },
]

const REFERENCES = [
  { label: "Règlement européen sur l'IA (AI Act, 2024/1689)", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { label: "L'intelligence artificielle, Commission européenne", url: 'https://digital-strategy.ec.europa.eu/fr/policies/european-approach-artificial-intelligence' },
  { label: "Intelligence artificielle, CNIL", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { label: "Qualiopi, Ministère du Travail", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
]

const FAQ = [
  {
    q: 'Qu\'est-ce qu\'une agence IA ?',
    a: "Une agence IA conçoit et développe des solutions d'intelligence artificielle sur mesure : automatisations, chatbots, agents, applications métier, RAG sur vos données, intégrations dans votre système d'information. Les agences les plus complètes, dites full-stack, ajoutent le cadrage stratégique en amont et la formation des équipes en aval, pour que l'outil livré soit utilisé et maintenu en interne.",
  },
  {
    q: 'Quelle est la meilleure agence IA en 2026 ?',
    a: "Aucune autorité ne décerne ce titre et les classements en ligne sont déclaratifs ou sponsorisés. La meilleure agence pour vous est celle qui sait franchir le pas de la démo à la production : elle cadre le bon cas d'usage, construit un outil propre dont le code vous appartient, et forme vos équipes à le faire vivre. Présélectionnez trois agences du bon profil, demandez à voir un outil déjà déployé et posez-leur les mêmes questions.",
  },
  {
    q: 'Agence IA, ESN ou cabinet de conseil : laquelle choisir ?',
    a: "L'agence IA construit la solution. L'ESN apporte une force d'intégration, souvent en régie au temps passé. Le cabinet de conseil porte la stratégie et la gouvernance, sans toujours livrer le build. Pour comparer les acteurs sous l'angle stratégie, consultez notre guide du meilleur cabinet de conseil en IA. Une agence full-stack réunit le cadrage, le développement et la formation.",
  },
  {
    q: 'Combien coûte un projet d\'agence IA en 2026 ?',
    a: "Ordres de grandeur du marché français : 3 000 à 50 000 € pour automatiser un processus, 8 000 à 60 000 € pour un assistant IA interne, 20 000 à 120 000 € pour un agent métier, 30 000 à 300 000 € et plus pour une application sur mesure, 2 000 à 15 000 € par mois pour la maintenance. La formation intra chez Masteria est à 1 980 € HT par jour, finançable par votre OPCO car nous sommes certifiés Qualiopi ; le développement ne l'est pas.",
  },
  {
    q: 'À qui appartient le code développé par une agence IA ?',
    a: "Cela se négocie avant la signature, et c'est un critère décisif. Une agence sérieuse vous transfère le code, les prompts, la documentation et les accès, pour que vous puissiez faire évoluer l'outil sans elle. Méfiez-vous des modèles qui gardent le code propriétaire ou imposent un abonnement obligatoire à leurs outils : ils organisent votre dépendance. Chez Masteria, le code vous appartient.",
  },
  {
    q: 'Comment éviter qu\'un projet IA reste au stade du POC ?',
    a: "Cadrez le cas d'usage et les indicateurs de succès avant de construire, choisissez une agence qui a déjà mis des outils en production, et prévoyez dès le départ la maintenance, la sécurité et la formation des équipes. La plupart des projets abandonnés le sont parce que le passage du prototype à la production n'a jamais été préparé.",
  },
  {
    q: 'Faut-il internaliser le développement IA ou passer par une agence ?',
    a: "Internaliser a du sens si vous avez déjà une équipe IA et un besoin récurrent. Une agence apporte de la vitesse, une expertise à jour et un transfert de compétence vers vos équipes. La voie la plus sûre pour beaucoup d'entreprises : faire construire par une agence full-stack qui forme vos équipes en chemin, pour internaliser progressivement la maintenance.",
  },
  {
    q: 'Agence IA pour PME ou grand groupe : comment choisir ?',
    a: "Une PME a intérêt à une agence proche du terrain, capable de cadrer vite, de livrer un premier outil utile en quelques semaines et de former les équipes pour qu'elles reprennent la main. Un grand groupe a souvent besoin d'une capacité à staffer plusieurs profils, à s'intégrer à un système d'information complexe et à respecter des exigences de sécurité et de gouvernance renforcées. Dans les deux cas, la propriété du code et le transfert de compétence restent les critères qui protègent l'investissement.",
  },
  {
    q: 'Faut-il une agence IA locale (Paris, Lyon) ou peut-on travailler à distance ?',
    a: "Les deux fonctionnent. La proximité aide pour les ateliers de cadrage et la conduite du changement ; le distanciel convient au développement, au suivi et à la formation. Le bon critère : une agence capable des deux, qui annonce ses frais de déplacement dans la proposition. Masteria est basé à Lyon, intervient à Paris et dans toute la France, ainsi qu'en Suisse et en Belgique, en présentiel comme à distance.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, agence IA full-stack',
  description: META_DESC,
  url: FULL_URL,
  serviceType: ['Développement de solutions IA', 'Automatisation IA', 'Agents IA', 'Intégration LLM et RAG', 'Conseil IA', 'Formation IA'],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': `${SITE}/#organization` },
}

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossaire des agences et du développement IA',
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Meilleure agence IA : comment choisir en 2026',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ['Agence IA', 'Développement de solutions IA', 'Automatisation IA'],
}

/* ItemList : séquence citable des 5 étapes (GEO). HowTo proscrit (Google l'a retiré). */
const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Les 5 étapes d'un projet d'agence IA, du cadrage à la production",
  itemListElement: PROCESS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.step, description: p.goal })),
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

export default function MeilleureAgenceIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Meilleure agence IA', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, definedTermSetJsonLd, articleJsonLd, processJsonLd]}
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
            <Link to="/agence-ia" style={{ color: '#94A3B8' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Meilleure agence IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Boxes size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide de choix · 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 840 }}>
            Meilleure agence IA en 2026
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>celle qui transforme une démo en outil utilisé</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juin 2026
          </p>

          {/* GEO : réponse directe citable — la thèse de la page */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Faire une démo d'IA prend un après-midi. Mettre en production un outil que vos équipes utilisent vraiment, et que vous possédez, c'est un autre métier. <strong style={{ color: '#fff', fontWeight: 700 }}>La meilleure agence IA est celle qui franchit ce pas</strong> : elle cadre le bon cas d'usage, elle construit proprement avec un code qui vous appartient, et elle forme vos équipes à le faire vivre.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Vous trouverez ici pourquoi tant de projets restent bloqués au stade de la démo, ce qu'une agence doit savoir faire au-delà de coder, les façons de faire construire votre IA, les cinq étapes pour passer de l'idée à la production et les budgets 2026. Aucun concurrent n'est cité par son nom : un palmarès en ligne vaut ce que vaut son sponsor.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#savoir-faire" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Ce qu'une agence doit savoir faire
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
                ['Le vrai critère', "Une agence IA se juge sur sa capacité à passer de la démo à la production : cadrer le besoin, construire proprement, former vos équipes."],
                ['Existe-t-il un classement ?', "Aucun classement officiel en France. Les palmarès en ligne sont déclaratifs ou sponsorisés."],
                ['Le point décisif', "La propriété du code. Exigez que le code, les prompts et les accès vous reviennent en fin de mission."],
                ['Budgets 2026', "Automatisation 3 000 à 50 000 €, agent métier 20 000 à 120 000 €, application sur mesure 30 000 à 300 000 € et plus."],
                ['Et Masteria ?', "Une agence full-stack : cadrage, développement sur mesure (le code vous appartient) et formation certifiée Qualiopi."],
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

      {/* ── POURQUOI LES PROJETS RESTENT AU STADE DE LA DÉMO (POV) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeader icon={AlertTriangle} kicker="Le vrai problème" title="Pourquoi la plupart des projets IA ne dépassent jamais la démo" />
          <p style={leadStyle}>
            La technologie est rarement le point de blocage. Un prototype impressionnant se construit en quelques jours. Ce qui coince vient après : faire tourner l'outil de façon fiable, le sécuriser, le brancher à vos données réelles, et obtenir que vos équipes s'en servent tous les jours.
          </p>
          <p style={answerStyle}>
            Trois pièges expliquent l'essentiel des abandons. Le cas d'usage a été choisi pour son effet « waouh » plutôt que pour son impact. Le passage en production n'a jamais été préparé : pas de maintenance, pas de sécurité, pas de propriété claire du code. Et personne en interne n'a été formé à reprendre la main, donc l'outil meurt au premier changement de modèle ou de besoin.
          </p>
          <p style={mutedStyle}>
            Le bon réflexe : juger une agence à sa capacité à éviter ces trois pièges. C'est exactement ce que recouvrent les trois compétences ci-dessous.
          </p>
        </div>
      </section>

      {/* ── CE QU'UNE AGENCE DOIT SAVOIR FAIRE AU-DELÀ DE CODER ── */}
      <section id="savoir-faire" style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Au-delà du code</div>
          <h2 style={h2Style}>Ce qu'une agence IA doit savoir faire, au-delà de coder</h2>
          <p style={leadStyle}>
            Coder un modèle est devenu accessible. Livrer un outil qui sert, qui dure et que vous possédez demande trois compétences que peu d'agences réunissent. Les meilleures les tiennent toutes les trois.
          </p>
          <p style={mutedStyle}>
            Cadrer, construire, transmettre. La construction reste le cœur du métier d'agence, mais elle ne vaut que si elle est encadrée en amont et prolongée en aval.
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.tag} style={{ ...cardStyle, padding: 'clamp(24px, 3vw, 34px)', display: 'grid', gridTemplateColumns: isDesktop ? '52px 1fr' : '1fr', gap: isDesktop ? 24 : 16, borderTop: `3px solid ${c}`, background: '#fff' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{`0${i + 1} · ${p.tag}`}</span>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.title}</h3>
                    </div>
                    <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Votre besoin penche d'abord vers la stratégie et la gouvernance ? Notre guide{' '}
            <Link to="/meilleur-cabinet-conseil-ia" style={{ color: c, fontWeight: 600 }}>meilleur cabinet de conseil en IA</Link>{' '}
            compare les acteurs sous l'angle conseil. Pour le détail de nos réalisations, voyez l'{' '}
            <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link>.
          </p>
        </div>
      </section>

      {/* ── COMMENT FAIRE CONSTRUIRE VOTRE IA (tableau texte, axe build) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Les voies possibles</div>
          <h2 style={h2Style}>Internaliser, régie ou agence : comment faire construire votre IA</h2>
          <p style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }}>
            <strong>Cinq voies mènent à un outil IA : l'équipe interne, l'ESN en régie, l'agence build spécialisée, la plateforme no-code et l'agence full-stack qui cadre, construit et forme.</strong>{' '}
            Elles se départagent surtout sur quatre points : la vitesse, la propriété du code, la maintenance et l'autonomie qu'elles laissent à vos équipes.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Le tableau compare ces voies sur ces critères. La propriété du code et la maintenance sont les deux colonnes qui pèsent le plus sur le coût réel à deux ans.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 980 }}>
              <caption style={srOnlyStyle}>
                Comparatif des cinq voies pour faire construire une solution IA : vitesse, propriété du code, maintenance, montée en compétence interne et besoin adapté
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Voie</th>
                  <th scope="col" style={thStyle}>Vitesse</th>
                  <th scope="col" style={thStyle}>Propriété du code</th>
                  <th scope="col" style={thStyle}>Maintenance</th>
                  <th scope="col" style={thStyle}>Autonomie interne</th>
                  <th scope="col" style={thStyle}>Pour quel besoin</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES.map((r, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={r.route} style={r.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ padding: '16px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: r.highlight ? c : '#0A0A0A', textAlign: 'left', lineHeight: 1.5, minWidth: 180 }}>
                        {r.route}
                        {r.highlight && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Le profil de Masteria
                          </span>
                        )}
                      </th>
                      <td style={td}>{r.speed}</td>
                      <td style={{ ...td, fontWeight: r.highlight ? 700 : 400, color: r.highlight ? c : '#374151' }}>{r.code}</td>
                      <td style={td}>{r.maint}</td>
                      <td style={td}>{r.skill}</td>
                      <td style={{ ...td, minWidth: 220 }}>{r.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DE L'IDÉE À LA PRODUCTION : LES 5 ÉTAPES (timeline, section à valeur ajoutée) ── */}
      <section id="methode" style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>La méthode</div>
          <h2 style={h2Style}>De l'idée à la production : les 5 étapes d'un projet IA</h2>
          <p style={leadStyle}>
            C'est là que se gagne ou se perd un projet d'IA. Voici le chemin qu'une agence sérieuse suit pour faire passer une idée du tableau blanc à un outil utilisé tous les jours, sans rester bloqué au stade du prototype.
          </p>
          <p style={mutedStyle}>
            Les durées sont indicatives et se chevauchent souvent. Le point de vigilance de chaque étape est l'endroit où les projets déraillent le plus.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 19, top: 18, bottom: 18, width: 2, background: '#E5E7EB' }} />
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 22 }}>
              {PROCESS.map((p, i) => (
                <li key={p.step} style={{ position: 'relative', paddingLeft: 60 }}>
                  <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, width: 40, height: 40, borderRadius: '50%', background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>{i + 1}</span>
                  <div style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                      <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{p.step}</h3>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: c, background: cLight, borderRadius: 99, padding: '4px 11px', whiteSpace: 'nowrap' }}>{p.duration}</span>
                    </div>
                    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>{p.goal}</p>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '0 0 8px' }}><strong style={{ color: '#0A0A0A' }}>Livrable : </strong>{p.deliver}</p>
                    <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 8px 8px 0', padding: '10px 14px' }}><strong style={{ color: c }}>Point de vigilance : </strong><span style={{ color: '#374151' }}>{p.watch}</span></p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── BUDGETS (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Budgets 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Combien coûte un projet d'agence IA en 2026 (par type de solution) ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Comptez 3 000 à 50 000 € pour automatiser un processus, 20 000 à 120 000 € pour un agent métier, 30 000 à 300 000 € et plus pour une application sur mesure, et 2 000 à 15 000 € par mois pour la maintenance.</strong>{' '}
            Seule la formation délivrée par un organisme certifié Qualiopi ouvre droit à un financement OPCO.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ordres de grandeur larges constatés sur le marché français. La maintenance et les évolutions, souvent oubliées du premier devis, pèsent lourd à deux ans. Pour chiffrer un projet précis, notre guide des{' '}
            <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>prix d'un projet IA</Link>{' '}
            détaille les postes de coût.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <caption style={srOnlyStyle}>Budgets constatés en 2026 par type de solution développée par une agence IA sur le marché français</caption>
              <thead>
                <tr>
                  {['Type de solution', 'Budget constaté', 'Précisions'].map(h => (
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

          <div style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid #1E293B', borderRadius: 12, padding: '18px 22px' }}>
            <p style={{ fontSize: 14, color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#fff' }}>À savoir pour votre financement :</strong> en France, seules les actions de formation délivrées par un organisme certifié Qualiopi sont finançables par les OPCO. Le développement sur mesure ne l'est pas. Une agence qui promet une prise en charge OPCO sur du développement mérite une vérification attentive.
            </p>
          </div>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="L'IA en production : repères et vocabulaire" />
          <p style={answerStyle}>
            Trois chiffres pour situer un projet, le vocabulaire technique qui revient dans toute mission, et les sources officielles. Pour encadrer vos usages dès la conception, notre guide{' '}
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
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Le vocabulaire du développement IA</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Quatre termes reviennent dans toute discussion avec une agence IA.
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

      {/* ── MASTERIA ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Notre positionnement</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Où se situe Masteria</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
                <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
                Agence full-stack : cadrage · build · formation
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Votre question porte plutôt sur les modèles (ChatGPT, Claude, Gemini, Mistral) ? Voyez notre comparatif{' '}
                <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>quelle est la meilleure IA</Link>.
              </p>
            </div>

            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Mathias Nizan a fondé Masteria à Lyon en 2022 sur une conviction : une agence IA n'a de valeur que si l'outil qu'elle livre est utilisé sur le terrain et reste entre vos mains. Nous tenons les trois compétences au même niveau d'exigence.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 14 }}>
                  {[
                    ['Technique', "développement sur mesure (agents, automatisations, applications métier, RAG, intégration des modèles à votre SI, API et MCP), de l'idée au déploiement. Le code vous appartient, régie possible sur site."],
                    ['Conseil et accompagnement', "cadrage du cas d'usage, priorisation, gouvernance RGPD et AI Act, conduite du changement jusqu'à l'adoption réelle."],
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
                  Nous accompagnons aussi bien des PME et des ETI que de grandes organisations, des directions métier au comité de direction, qui veulent un outil adopté et des équipes autonomes ensuite. Nous adaptons le dispositif à votre taille et à votre maturité, et vous dirons franchement au premier rendez-vous si un autre profil d'acteur correspond mieux à votre besoin. Pour situer votre besoin, commencez par notre{' '}
                  <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>, ou voyez l'{' '}
                  <Link to="/agence-ia" style={{ color: c, fontWeight: 600 }}>agence IA à Lyon</Link>.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur le choix d'une agence IA</h2>
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
              De la démo à la production, parlons-en
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez votre projet en quelques lignes. Lors d'un échange de cadrage gratuit, nous vous disons ce qui est réaliste, à quel budget, et si notre profil correspond à votre besoin.
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
