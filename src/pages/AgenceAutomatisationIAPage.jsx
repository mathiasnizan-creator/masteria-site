import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, Cog, Compass, FileText, Key,
  Mail, MapPin, PenLine, Plug, Receipt, RefreshCw, Rocket, Target, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page offre « agence d'automatisation IA » (slug /agence-automatisation-ia).
 * Cible : « agence automatisation ia » (390/mois, KD 10), « agence d'automatisation ia »,
 * « conseil automatisation ia ». Positionnement : Masteria cadre et déploie
 * l'automatisation AVEC les équipes du client (formation intégrée, autonomie finale).
 * Maillage : /automatisation-ia (guide pilier), /formation-automatisation-ia,
 * /agents-ia-entreprise, /agence-ia, /conseil-intelligence-artificielle,
 * /blog/automatisation-ia-pme-processus-prioritaires, /contact.
 * Design premium : icônes lucide (zéro emoji), kickers, tableau « faire faire vs
 * faire avec vos équipes », réponses directes citables. Accent bleu Masteria (#2563EB).
 */

const SLUG = 'agence-automatisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Agence automatisation IA · Cadrage & déploiement | Masteria"
const META_DESC = "Agence d'automatisation IA : conception, développement et déploiement de vos automatisations sur mesure, intégrées à vos outils. Cadrage initial gratuit."
const KEYWORDS = "agence automatisation ia, automatisation ia, automatisation intelligente, automatiser avec l'ia, workflows ia, agence rpa ia"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1100, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 860 }

const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4 }
const tdStyle = { padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

function IconBox({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: Cog,    label: 'Développement sur mesure' },
  { icon: Plug,   label: 'Intégré à vos outils (API, MCP)' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
  { icon: Key,    label: 'Vous restez propriétaire du système' },
]

/* ───────── Méthode en 4 temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Audit et architecture',
    badge: 'Cadrage initial gratuit',
    desc: "Nous cartographions les tâches répétitives de chaque équipe, scorons chaque candidate selon son impact et sa faisabilité, puis concevons l'architecture cible : déclencheurs, traitements IA, intégrations, points de contrôle. Ce travail évite l'erreur classique : automatiser ce qui est facile au lieu de ce qui rapporte.",
    livrable: "Une feuille de route priorisée et chiffrée, qui vous appartient, que vous poursuiviez avec nous ou non.",
  },
  {
    num: '02',
    title: 'Prototypage sur 1 ou 2 cas',
    badge: '2 à 4 semaines',
    desc: "Nous développons un prototype fonctionnel sur un ou deux processus prioritaires, en conditions réelles, avec mesure du temps passé avant et après. Vous constatez la valeur sur un vrai flux avant d'engager le déploiement complet.",
    livrable: "Une automatisation qui tourne sur un processus réel et des chiffres pour décider de la suite.",
  },
  {
    num: '03',
    title: 'Développement et intégration',
    badge: 'Sur mesure',
    desc: "Nos équipes construisent les automatisations retenues (workflows orchestrés, assistants spécialisés, agents), les raccordent à vos applications via API et MCP, et posent les garde-fous : validation humaine sur les décisions sensibles, traçabilité, conformité RGPD.",
    livrable: "Des automatisations sur mesure, documentées et intégrées à votre système d'information.",
  },
  {
    num: '04',
    title: 'Déploiement et passation',
    badge: 'Mise en production',
    desc: "Mise en production progressive, mesure des gains réels et documentation complète. Nous vous remettons un système supervisé dont vous gardez la propriété, et formons vos référents en complément pour qu'ils sachent le faire vivre.",
    livrable: "Des automatisations en production, supervisées, et une équipe propriétaire de son système.",
  },
]

/* ───────── Faire faire vs faire avec vos équipes (tableau) ───────── */

const TABLE_AUTONOMIE = [
  {
    critere: 'Conception et fiabilité',
    classique: 'Bricolée au fil de l\'eau, fragile sur les cas limites',
    masteria: 'Architecture pensée, traitements fiabilisés, garde-fous posés',
  },
  {
    critere: 'Intégration au système d\'information',
    classique: 'Limitée aux connecteurs prêts à l\'emploi',
    masteria: 'Sur mesure via API et MCP, raccordée à vos outils métier',
  },
  {
    critere: 'Temps avant production',
    classique: 'Long : vos équipes apprennent en construisant',
    masteria: 'Court : une équipe qui développe ce type de système tous les jours',
  },
  {
    critere: 'Mobilisation de vos équipes',
    classique: 'Forte : elles portent tout le chantier',
    masteria: 'Maîtrisée : nous construisons, vous validez et pilotez',
  },
  {
    critere: 'Propriété du système',
    classique: 'Vôtre, mais dépendante de la personne qui l\'a monté',
    masteria: 'Vôtre, documentée, avec passation et référents formés',
  },
]

/* ───────── Ce qu'on automatise le plus souvent ───────── */

const AUTOMATISATIONS = [
  { icon: Mail, title: 'Emails et demandes entrantes', desc: "Classement par nature, projet de réponse préparé, routage vers la bonne personne. La boîte générique cesse d'être un goulot d'étranglement." },
  { icon: Receipt, title: 'Factures et relances', desc: "Extraction des données de factures, rapprochement avec les commandes, relances d'impayés rédigées et programmées automatiquement." },
  { icon: FileText, title: 'Comptes rendus et reporting', desc: "Réunions transcrites et synthétisées, reporting hebdomadaire consolidé et commenté à partir de vos outils existants." },
  { icon: Target, title: 'Qualification des leads', desc: "Lecture de la demande, scoring selon vos critères, fiche de synthèse et routage au bon commercial, CRM mis à jour sans saisie." },
  { icon: PenLine, title: 'Contenus récurrents', desc: "Déclinaison de vos contenus piliers en posts, newsletters et fiches produit, dans votre charte éditoriale, avec validation humaine." },
  { icon: RefreshCw, title: 'Synchronisation entre outils', desc: "CRM, tableurs, outils métier : les informations circulent sans ressaisie, les doublons et les oublis disparaissent." },
]

/* ───────── On le construit pour vous (build steps) ───────── */

const BUILD_STEPS = [
  {
    icon: Compass,
    title: 'Cadrage et architecture',
    desc: "Nous traduisons vos processus en spécifications : déclencheurs, traitements IA, intégrations, points de validation humaine.",
  },
  {
    icon: Cog,
    title: 'Développement',
    desc: "Workflows orchestrés, assistants spécialisés, agents connectés à vos outils. Du sur mesure, pas un gabarit générique.",
  },
  {
    icon: Plug,
    title: 'Intégration API et MCP',
    desc: "Raccordement à votre CRM, ERP, messagerie et outils métier, avec traçabilité et conformité RGPD.",
  },
  {
    icon: Rocket,
    title: 'Mise en production',
    desc: "Déploiement progressif, mesure des gains réels, documentation et passation à vos référents.",
  },
]

/* ───────── Pourquoi Masteria ───────── */

const WHY_MASTERIA = [
  { icon: Target, title: "Spécialisés à 100 % sur l'IA", desc: "Masteria travaille sur l'intelligence artificielle depuis 2022, du conseil en automatisation IA au développement. Les outils, les pièges et les raccourcis du sujet font notre quotidien." },
  { icon: Cog, title: "De la conception à la production", desc: "Nous ne nous arrêtons pas au schéma : nous développons, intégrons via API et MCP, fiabilisons et déployons. Vous récupérez un système qui tourne, pas un prototype." },
  { icon: Key, title: "Vous restez propriétaire", desc: "Code, configurations et documentation vous appartiennent. Vos référents peuvent reprendre la main, et nous les formons en complément s'ils le souhaitent." },
  { icon: MapPin, title: 'Lyon, France entière, Suisse et Belgique', desc: "Basés à Lyon, nous intervenons sur site dans toute la France ainsi qu'en Suisse et en Belgique, et à distance pour le suivi." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Que fait une agence d'automatisation IA ?",
    a: "Elle identifie les processus automatisables d'une entreprise, conçoit l'architecture, développe les automatisations (workflows, assistants IA, agents) et les intègre aux outils existants jusqu'à la mise en production. Chez Masteria, nous menons ce développement sur mesure de bout en bout : vous récupérez un système qui tourne et dont vous gardez la propriété. Vos équipes peuvent se former en complément pour le faire évoluer.",
  },
  {
    q: "Automatisation classique ou automatisation par l'IA : que choisir ?",
    a: "L'automatisation classique (RPA, workflows no-code type Make ou Zapier) suffit pour des tâches répétitives et bien structurées : copier des données d'un outil à un autre, envoyer un rappel, mettre à jour un tableau. L'automatisation par l'IA prend le relais dès qu'il faut comprendre un texte, trier des demandes, rédiger, extraire une information d'un document ou décider selon un contexte. En pratique, une bonne agence d'automatisation combine les deux : le no-code pour la plomberie, l'IA pour l'intelligence de la tâche. Masteria conçoit ces systèmes hybrides et vous en laisse la propriété.",
  },
  {
    q: "Quelle différence entre Masteria et une agence d'automatisation classique ?",
    a: "Beaucoup d'agences livrent un prototype no-code et s'arrêtent là, ou facturent ensuite chaque évolution. Masteria conçoit, développe et intègre des automatisations fiabilisées, jusqu'à la production, et vous remet le système documenté dont vous restez propriétaire. Spécialisés sur l'IA depuis 2022, nous pouvons aussi former vos référents en complément pour qu'ils prennent la main.",
  },
  {
    q: "Combien coûte un accompagnement en automatisation IA ?",
    a: "Le cadrage initial est gratuit. Le développement sur mesure (prototypage, construction, intégration, déploiement) est chiffré sur devis après ce cadrage, selon le nombre de processus, les intégrations et le niveau d'autonomie visé. Une formation des équipes peut s'ajouter en complément, à 1 980 € HT par jour, finançable par votre OPCO grâce à notre certification Qualiopi. Le développement et l'intégration ne sont pas éligibles OPCO : seule la formation l'est, et nous ne promettons jamais l'inverse.",
  },
  {
    q: "Intervenez-vous à distance ou sur site ?",
    a: "Les deux. Masteria est basée à Lyon et intervient sur site dans toute la France, en Suisse et en Belgique, ainsi qu'à distance. Le format se choisit selon vos contraintes : les audits et les formations gagnent souvent à se faire sur site, le suivi de déploiement fonctionne très bien en visio.",
  },
  {
    q: "Avec quels outils travaillez-vous ?",
    a: "Make, Zapier, n8n et Power Automate pour les workflows, ainsi que les assistants IA du marché (ChatGPT, Claude, Gemini, Copilot) et leurs automatisations natives. Nous partons toujours de votre existant : si vos équipes vivent dans Microsoft 365, Power Automate s'impose souvent ; si la confidentialité exige un hébergement maîtrisé, n8n est un bon candidat. L'outil découle du besoin, jamais l'inverse.",
  },
  {
    q: "Proposez-vous du conseil en automatisation IA, ou seulement du développement ?",
    a: "Les deux. Le cadrage initial gratuit est déjà une mission de conseil : nous auditons vos processus, priorisons les automatisations à plus fort rendement et vous remettons une feuille de route, que vous poursuiviez avec nous ou non. Le conseil en automatisation IA se prolonge naturellement par le développement, mais vous restez libre de vous arrêter au plan.",
  },
  {
    q: "Pouvez-vous automatiser les process métier de mon entreprise ?",
    a: "Oui. Nous automatisons les process d'entreprise avec l'IA fonction par fonction : finance, RH, service client, commercial, administratif. La démarche part de vos outils existants, sans refonte de votre système d'information, et chaque process automatisé conserve une validation humaine sur les actions sensibles (paiement, envoi externe, décision affectant une personne).",
  },
  {
    q: "Combien de temps dure une mission d'automatisation IA ?",
    a: "Le cadrage initial se mène en quelques jours. Un premier prototype tourne en deux à quatre semaines. Le développement et l'intégration complète d'un ou plusieurs process s'étalent ensuite selon le périmètre retenu, fixé après le cadrage. Nous avançons par paliers, avec un livrable concret à chaque étape pour que vous décidiez de la suite.",
  },
  {
    q: "Comment choisir son agence d'automatisation IA ?",
    a: "Vérifiez trois points. L'agence va-t-elle jusqu'à la mise en production ou s'arrête-t-elle au prototype ? Restez-vous propriétaire du code et de la documentation ? Le financement annoncé est-il honnête, sachant que le développement n'est pas éligible OPCO et que seule la formation l'est ? Un cadrage gratuit et une feuille de route qui vous appartient sont de bons signaux de sérieux.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Agence d'automatisation IA",
  description: "Conception, développement et déploiement d'automatisations IA sur mesure : audit des processus, architecture, construction des workflows, assistants et agents, intégration aux outils (Make, Zapier, n8n, Power Automate, API, MCP) et mise en production.",
  url: 'https://www.master-ia.fr/agence-automatisation-ia',
  serviceType: 'Automatisation par intelligence artificielle',
  category: "Automatisation de processus d'entreprise par IA",
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'City', name: 'Lyon' },
  ],
  audience: { '@type': 'BusinessAudience', name: 'PME, ETI et grands comptes' },
  serviceOutput: "Automatisations IA en production, documentées, supervisées et dont le client garde la propriété",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  brand: { '@id': 'https://www.master-ia.fr/#organization' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Prestations d'automatisation IA",
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Cadrage initial : audit des processus',
        description: "Analyse des processus et des outils, feuille de route priorisée et chiffrée, sans engagement.",
        price: '0',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        name: 'Développement et déploiement sur mesure',
        description: "Sur devis après cadrage, selon le nombre de processus, les intégrations et le niveau d'autonomie visé.",
      },
      {
        '@type': 'Offer',
        name: 'Formation des équipes (en complément, certifiée Qualiopi)',
        description: "1 980 € HT par jour, en intra-entreprise ou en individuel, finançable OPCO.",
        price: '1980',
        priceCurrency: 'EUR',
      },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/agence-automatisation-ia#article',
  headline: "L'agence d'automatisation IA qui rend vos équipes autonomes",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-12',
  dateModified: '2026-07-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/agence-automatisation-ia#webpage' },
  about: [
    "Automatisation par intelligence artificielle",
    "Workflows automatisés avec l'IA",
    'Agents IA en entreprise',
    "Intégration d'applications via API et MCP",
  ],
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
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

export default function AgenceAutomatisationIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections cas fréquents / pourquoi / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Agence automatisation IA', slug: SLUG },
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
        dateModified="2026-07-30"
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 72px) 24px clamp(56px, 8vw, 80px)', overflow: 'hidden' }}>
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
            <Link to="/agence-ia" style={{ color: '#94A3B8' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Agence automatisation IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 26 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
              <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Workflow size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
              </span>
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
                Accompagnement opérationnel
              </span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 14px' }}>
              Cadrage initial gratuit
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            L'agence d'automatisation IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>qui rend vos équipes autonomes</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria conçoit, développe et déploie vos automatisations IA sur mesure : audit des processus, architecture, construction des workflows, assistants et agents, intégration à vos outils (Make, Zapier, n8n, Power Automate, API, MCP) et mise en production. Vous récupérez un <strong style={{ color: '#fff', fontWeight: 700 }}>système qui tourne et dont vous gardez la propriété</strong>. Le cadrage initial est gratuit.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Le no-code seul ne suffit pas à fiabiliser un processus qui compte : il faut concevoir l'architecture, raccorder vos outils, gérer les cas limites et poser les garde-fous. Nous prenons en charge cette ingénierie de bout en bout et vous livrons des automatisations en production, documentées et supervisées. Masteria travaille sur l'IA depuis 2022 et a accompagné plus de 1 500 professionnels, en France, en Suisse et en Belgique.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Discutons de votre projet
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#methode" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir la méthode
            </a>
          </div>

          {/* tags de compétences */}
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
      <section style={{ background: '#fff', padding: 'clamp(40px, 5vw, 56px) 24px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap' }}>
          {[
            { num: '+1 500', label: "professionnels formés à l'IA" },
            { num: '98 %', label: 'de taux de satisfaction' },
            { num: '2022', label: 'année de création de Masteria' },
            { num: 'Gratuit', label: 'le cadrage initial de votre projet' },
          ].map(s => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>{s.num}</p>
              <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MÉTHODE EN 4 TEMPS (timeline à rail) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Comment se déroule une mission d'automatisation IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Chaque mission suit quatre temps : un audit des processus et la conception de l'architecture, avec cadrage initial gratuit ; un prototypage de deux à quatre semaines sur un ou deux cas réels ; le développement et l'intégration des automatisations à vos outils ; puis la mise en production, avec passation à vos équipes pour qu'elles gardent la main.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 12, lineHeight: 1.7 }}>
            Le même chemin pour chaque mission : comprendre, prouver, déployer, transmettre. Chaque temps produit un livrable concret et vous décidez de continuer ou non à chaque étape.
          </p>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 44, lineHeight: 1.7 }}>
            Vous découvrez le sujet ? Notre <Link to="/automatisation-ia" style={aStyle}>guide complet de l'automatisation IA</Link> pose les bases : définition, cas d'usage par fonction, outils et budgets.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                    <span style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{step.badge}</span>
                  </div>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', maxWidth: 700 }}>{step.desc}</p>
                  <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.06em', display: 'block', marginBottom: 4 }}>CE QUE VOUS OBTENEZ</span>
                    <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{step.livrable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAIRE FAIRE VS FAIRE AVEC VOS ÉQUIPES ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Positionnement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Le faire soi-même en no-code ou le faire construire sur mesure ?
          </h2>

          <p style={answerStyle}>
            <strong>Monter ses automatisations soi-même en no-code dépanne sur des flux simples, mais montre vite ses limites dès qu'un processus compte vraiment : cas limites mal gérés, intégrations bloquées, fiabilité incertaine. Faire développer sur mesure mobilise moins vos équipes, sécurise l'architecture et vous laisse propriétaire d'un système robuste, documenté et tenu en production.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 860 }}>
            Les deux approches coexistent, et la différence se voit dès qu'on quitte le flux jouet pour un processus qui engage l'entreprise. Voici le comparatif honnête, critère par critère.
          </p>

          <div style={{ ...cardStyle, overflowX: 'auto', marginBottom: 20 }}>
            <table aria-label="Comparatif entre construire ses automatisations soi-même en no-code et les faire développer sur mesure" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ ...thStyle, width: '26%' }}>Critère</th>
                  <th scope="col" style={{ ...thStyle, width: '37%' }}>Le faire soi-même (no-code seul)</th>
                  <th scope="col" style={{ ...thStyle, width: '37%', color: c }}>Le faire construire (Masteria)</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_AUTONOMIE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ ...tdStyle, textAlign: 'left', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 14 }}>{row.critere}</th>
                    <td style={tdStyle}>{row.classique}</td>
                    <td style={{ ...tdStyle, color: '#0A0A0A', fontWeight: 500 }}>{row.masteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 860 }}>
            <Check size={18} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
            <span>Notre conviction : une automatisation qui touche à un processus qui compte mérite d'être conçue, développée et fiabilisée par des spécialistes. Vous en restez propriétaire, et vos équipes peuvent se former en complément pour la faire évoluer.</span>
          </p>
        </div>
      </section>

      {/* ── CE QU'ON AUTOMATISE LE PLUS SOUVENT (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Cas fréquents</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Ce que nous automatisons le plus souvent
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Six familles de processus reviennent dans la majorité des missions. Chaque déploiement part de vos outils existants, sans refonte de votre système d'information, et chaque flux mis en production fait gagner plusieurs heures par semaine à l'équipe concernée.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {AUTOMATISATIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconBox icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour prioriser dans votre contexte, notre article sur <Link to="/blog/automatisation-ia-pme-processus-prioritaires" style={aStyle}>les processus à automatiser en priorité dans une PME</Link> donne des repères concrets. Pour des exemples détaillés au-delà de ces six familles, parcourez nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>cas d'usage de l'IA en entreprise</Link>. Selon votre activité, nos pages <Link to="/ia-secteurs" style={aStyle}>IA par secteur</Link> déclinent ces automatisations métier par métier. Et quand un scénario fixe ne suffit plus, nous évaluons avec vous l'opportunité d'<Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link>, avec les garde-fous qu'ils exigent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ON LE CONSTRUIT POUR VOUS (ancre sombre — pivot service) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', color: '#fff', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>
            Nous le construisons pour vous
          </div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.4vw, 38px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 18px', lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: 820 }}>
            Confiez-nous le développement de vos automatisations
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '22px 26px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 860 }}>
            <strong style={{ color: '#fff' }}>Vous n'avez pas à monter vos automatisations vous-même. Nous concevons l'architecture, développons les workflows, assistants et agents adaptés à vos processus, les intégrons à vos outils via API et MCP, puis les déployons en production. Vous récupérez un système qui tourne, documenté et supervisé, dont vous gardez la propriété.</strong>
          </p>

          <p style={{ fontSize: 16, color: '#B4C0D3', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 760 }}>
            C'est notre offre principale : un développement sur mesure, mené par une équipe spécialisée sur l'IA depuis 2022. Vous décrivez le résultat attendu, nous prenons en charge l'ingénierie de bout en bout.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginBottom: 44 }}>
            {BUILD_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#60A5FA', letterSpacing: '0.06em', marginBottom: 6 }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16.5, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
              Discutons de votre projet
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '15px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)' }}>
              Notre agence de développement IA
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Votre besoin va au-delà du flux et appelle un véritable logiciel ? Nous concevons aussi des <Link to="/outils-ia-sur-mesure" style={{ color: '#60A5FA', fontWeight: 600 }}>outils IA sur mesure</Link>, pensés pour vos cas d'usage propres.
          </p>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA (éditorial asymétrique, cartes à filet supérieur) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi choisir Masteria comme agence d'automatisation IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Parce que nous menons le projet de la conception à la mise en production : Masteria conçoit, développe et intègre vos automatisations sur mesure, là où beaucoup de prestataires s'arrêtent aux recommandations. Spécialisés sur l'IA depuis 2022, nous avons accompagné plus de 1 500 professionnels, en France, en Suisse et en Belgique, et vous restez propriétaire du système livré.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {WHY_MASTERIA.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Si votre besoin dépasse l'automatisation (stratégie IA globale, gouvernance, conformité, feuille de route à l'échelle de l'entreprise), notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en intelligence artificielle</Link> prend le relais. Pour une vue d'ensemble de nos accompagnements, de la formation au déploiement, parcourez nos <Link to="/solutions-ia" style={aStyle}>solutions IA pour entreprises</Link>, et démarrez par un <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA gratuit</Link> pour situer vos priorités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIFICATION TRANSPARENTE ── */}
      <section id="tarifs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Tarifs</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Combien coûte une agence d'automatisation IA ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff', marginBottom: 36 }}>
            <strong>Chez Masteria, le cadrage initial est gratuit et le développement sur mesure se chiffre sur devis après cadrage, selon le nombre de processus, les intégrations et le niveau d'autonomie visé. Une formation des équipes peut s'ajouter en complément, à 1 980 € HT par jour. Aucun forfait n'est vendu avant l'analyse de vos processus.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 28 }}>
            <div style={{ ...cardStyle, padding: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Cadrage initial</div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, marginBottom: 20, letterSpacing: '-0.01em' }}>Gratuit</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Analyse de vos processus et de vos outils', 'Architecture cible et feuille de route', "Chiffrage détaillé du développement", 'Sans engagement'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 10, lineHeight: 1.6 }}>
                    <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ ...cardStyle, padding: 32, border: `2px solid ${c}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Développement sur mesure</div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, marginBottom: 20, letterSpacing: '-0.01em' }}>Sur devis</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Prototypage sur 1 ou 2 cas prioritaires', 'Développement et intégration via API, MCP', 'Mise en production, documentation, garde-fous', 'Périmètre et budget fixés après cadrage'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 10, lineHeight: 1.6 }}>
                    <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ ...cardStyle, padding: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Formation (en complément)</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 20 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.01em' }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>/ jour HT</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {["Pour rendre vos référents autonomes", "Intra (jusqu'à 12 participants) ou individuel", 'Certifié Qualiopi, finançable OPCO', 'Montage du dossier pris en charge'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 10, lineHeight: 1.6 }}>
                    <Check size={16} strokeWidth={2.4} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 860 }}>
            Pour situer le budget d'une mission avant le cadrage, notre repère sur le <Link to="/prix-projet-ia" style={aStyle}>prix d'un projet IA</Link> détaille les fourchettes selon le périmètre. Un point d'honnêteté sur le financement : le développement et l'intégration ne sont pas finançables par votre OPCO. Seule la formation l'est, grâce à notre certification Qualiopi, et un prestataire qui vous promet l'inverse vous expose à un refus de prise en charge. Si vous souhaitez former vos équipes en complément du déploiement, le détail figure sur la page <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Agence d'automatisation IA : les questions fréquentes
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Faire développer vos solutions sur mesure, comprendre le sujet ou former vos équipes en complément.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Sur mesure', desc: "Conception et développement de bout en bout de vos solutions IA, jusqu'à la production." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Au-delà du flux : applications et outils internes pilotés par l'IA, conçus pour vos cas d'usage." },
              { label: 'Automatisation IA : le guide complet', href: '/automatisation-ia', tag: 'Guide', desc: "Définition, cas d'usage par fonction, outils, méthode en 5 étapes et budgets." },
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Formation', desc: "En complément du déploiement, 2 jours pour rendre vos équipes autonomes. Finançable OPCO." },
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

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Parlons de vos processus
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 580 }}>
              Décrivez-nous les tâches qui consomment le plus de temps dans vos équipes. Nous revenons vers vous sous 24 heures avec un créneau pour le cadrage gratuit : analyse de vos processus, feuille de route priorisée, chiffrage. Vous repartez avec un plan, avec ou sans nous.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Certifié Qualiopi · +1 500 professionnels formés · Lyon, France, Suisse, Belgique
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
              Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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

      <FounderNote />

      <OfficialSources />
    </>
  )
}
