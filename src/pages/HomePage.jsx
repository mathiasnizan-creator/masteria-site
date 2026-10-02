import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  BadgeCheck, MapPin, ShieldCheck, Layers, Compass, Cpu, Phone, Mail,
  ArrowRight, Quote, ShoppingCart, Handshake, Code2, Check, Plus, Clock,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ToolLogo from '../components/ToolLogo'
import CadrageLink from '../components/CadrageLink'
import EquipeMasteria from '../components/EquipeMasteria'
import EquipeAugmentee from '../components/EquipeAugmentee'
import { HUBS, METIERS } from '../data/catalog-meta'
import { CASES, METHODE_COMMUNE } from '../data/etudes-de-cas'
import { FAQ_GENERAL } from '../components/screens2'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page d'accueil, refondue le 02/10/2026 (audit conseil/dev, puis passe design) :
 * Masteria s'y présente comme un cabinet IA à trois métiers, dans cet ordre :
 * penser (audit, conseil), construire (outils et agents sur mesure), transmettre
 * (formation certifiée Qualiopi). Composition éditoriale : colonnes asymétriques,
 * filets, chiffres tirés des études de cas publiées, un seul accent (#2563EB).
 * Sombres : le hero, l'ancre « Par où commencer » et le CTA final.
 * INTÉGRITÉ : tous les chiffres viennent de src/data/etudes-de-cas.js ou de faits
 * déjà publiés ; aucun nom de client.
 */

const TOOL_HUBS = HUBS.filter(h => h.id !== 'metiers')

const c = '#2563EB'
const cLight = '#DBEAFE'
const INK = '#0A0A0A'
const TEXT = '#374151'
const MUTED = '#6B7280'
const LINE = '#E5E7EB'
const o = '#EA580C'
const oText = '#C2410C'
const oLight = '#FFEDD5'
const BEIGE = '#F5F3EE'
const SECTION_PAD = 'clamp(72px, 10vw, 120px) clamp(18px, 4vw, 32px)'
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 900, letterSpacing: '-0.025em', color: INK, lineHeight: 1.12, margin: '0 0 18px' }
const leadStyle = { fontSize: 17, color: TEXT, lineHeight: 1.75, margin: 0 }

const METIER_ICONS = {
  marketing: Megaphone,
  'ressources-humaines': Users,
  finance: TrendingUp,
  commercial: Briefcase,
  juridique: Scale,
  communication: Radio,
  management: Target,
  assistante: CalendarCheck,
  seo: Search,
  'service-client': Headphones,
  informatique: Server,
  pedagogique: GraduationCap,
  achats: ShoppingCart,
  transverse: Layers,
}

/* Sous-titres courts des hubs formation, pour la liste de la home. */
const TOOL_LIGNES = {
  chatgpt: 'Rédaction, analyse, projets partagés et GPT d\'équipe',
  copilot: 'Dans Word, Excel, Outlook, Teams et PowerPoint',
  gemini: 'Dans Gmail, Docs, Sheets et Google Workspace',
  claude: 'Documents longs, analyse fine, projets et artefacts',
  mistral: 'Le modèle européen, hébergement et conformité UE',
  'sprint-ia': 'Ateliers de 3 h, de 12 à 500 collaborateurs',
  'multi-outils': 'Comparer les cinq IA sur vos cas avant de choisir',
}

/* Reconnaissances, mises en avant juste sous le hero (logos), puis deux chiffres. */
const RECONNAISSANCES = [
  { id: 'qualiopi', label: 'Certifié Qualiopi au titre des actions de formation', to: '/formation-ia-qualiopi' },
  { id: 'francenum', label: 'Référencé pour accompagner les TPE et PME dans leur transition numérique' },
  { id: 'lesechos', label: "Mathias Nizan cité sur le choix des outils d'IA en entreprise", to: '/presse' },
]
const CHIFFRES = [
  { value: '2022', label: 'Cabinet fondé à Lyon par Mathias Nizan' },
  { value: '≈ 35', label: 'consultants, développeurs et formateurs' },
]
/* Badge officiel « Activateur France Num » (kit activateur) : à déposer dans public/assets
   puis à renseigner ici. Tant qu'il est vide, un badge typographique sobre le remplace. */
const FRANCE_NUM_BADGE = ''

/* Logos clients, affichés à la demande de Mathias (02/10/2026). Hauteurs réglées à l'œil. */
const CLIENTS = [
  { name: 'Albéa', src: '/assets/clients/albea.png', webp: '/assets/clients/albea.webp', h: 34, w: 91 },
  { name: 'EET', src: '/assets/clients/eet.png', webp: '/assets/clients/eet.webp', h: 44, w: 67 },
  { name: 'Signarama', src: '/assets/clients/signarama.svg', h: 40, w: 91 },
]
const SECTEURS_LIGNE = "et des PME, ETI et grands groupes de l'industrie, de la distribution, de l'énergie, de l'immobilier, de l'assurance, du conseil et de la santé"

/* Les trois métiers, conseil et développement d'abord. */
const PILIERS = [
  {
    Icon: Compass,
    num: '01',
    tint: 'blue',
    kicker: 'Conseil & développement',
    title: 'Auditer et conseiller',
    desc: "Où l'IA crée de la valeur chez vous, dans quel ordre, avec quels garde-fous. Nous lisons vos processus flux par flux, chiffrons les gisements, puis posons la stratégie, la gouvernance et le cadre de conformité.",
    recoit: ['Cartographie des flux et des données', 'Matrice impact et faisabilité', 'Feuille de route chiffrée', "Charte d'usage, registre, AI Act et RGPD"],
    links: [
      ['Audit IA', '/audit-ia'],
      ["Diagnostic IA d'une journée", '/diagnostic-ia'],
      ['Conseil en stratégie IA', '/conseil-strategie-ia'],
      ['Gouvernance et AI Act', '/gouvernance-ia'],
      ['Accompagnement IA', '/accompagnement-ia'],
    ],
    cta: ['Le conseil en intelligence artificielle', '/conseil-intelligence-artificielle'],
  },
  {
    Icon: Cpu,
    num: '02',
    tint: 'blue',
    kicker: 'Conseil & développement',
    title: 'Développer vos outils',
    desc: "Agents IA, assistants branchés sur vos documents, automatisations et applications métier reliées à votre CRM, à votre ERP et à vos outils internes. Au forfait ou en régie, avec des développeurs détachables sur site.",
    recoit: ['Assistants et agents en production', 'Intégrations CRM, ERP et connecteurs MCP', 'Code source et documentation', "Guide d'utilisation et règles de mise à jour"],
    links: [
      ['Outils IA sur mesure', '/outils-ia-sur-mesure'],
      ['Agents IA en entreprise', '/agents-ia-entreprise'],
      ["Agence d'automatisation IA", '/agence-automatisation-ia'],
      ['Solutions IA par type de livrable', '/solutions-ia'],
    ],
    cta: ['Agence de développement IA', '/agence-developpement-ia'],
  },
  {
    Icon: GraduationCap,
    num: '03',
    tint: 'orange',
    kicker: 'Formation',
    title: 'Former vos équipes',
    desc: "Un outil ne vaut que par ceux qui s'en servent. Nous formons sur tous les LLM du marché, par outil et par métier, à partir des dossiers de vos équipes, en présentiel ou à distance.",
    recoit: ['Ateliers sur vos propres fichiers', 'Prompts et assistants prêts à l\'emploi', 'Supports accessibles après la formation', 'Attestation, formation certifiée Qualiopi'],
    links: [
      ['Formation ChatGPT', '/formation-chatgpt'],
      ['Formation Microsoft Copilot', '/formation-microsoft-copilot'],
      ['Formation Claude', '/formation-claude-ia'],
      ['Formation Google Gemini', '/formation-gemini-entreprise'],
    ],
    cta: ['Toutes les formations IA', '/formation-intelligence-artificielle'],
  },
]

/* Études de cas, présentées en liste discrète plus bas dans la page. */
const CAS_LISTE = ['industrie', 'photovoltaique', 'conseil-financier', 'distribution']

/* Par où commencer : l'offre d'entrée, identique sur tout le site (data/offre-entree.js). */
const ETAPES = [
  { n: '1', badge: 'Offert', title: '30 minutes de cadrage', desc: "En visio ou par téléphone\u00a0: votre contexte, vos processus, ce que vous attendez de l'IA. Vous savez ensuite par où commencer." },
  { n: '2', badge: '1 journée', title: 'Le Diagnostic IA', desc: "Ateliers avec vos équipes, cas d'usage priorisés par impact et par effort, feuille de route chiffrée. Forfait chiffré lors du cadrage." },
  { n: '3', badge: 'Forfait ou régie', title: 'Le projet', desc: "Audit approfondi, construction de l'outil, accompagnement ou formation. Le code et les livrables vous appartiennent." },
]

const ENGAGEMENTS = [
  { Icon: Handshake, title: 'Indépendant des éditeurs', desc: 'La recommandation suit votre cas, votre budget et vos contraintes.' },
  { Icon: Code2, title: 'Le code vous appartient', desc: 'Code, prompts, documentation et livrables vous sont remis.' },
  { Icon: Users, title: 'Ceux qui construisent forment', desc: "L'usage s'installe, le projet ne reste pas un pilote." },
  { Icon: ShieldCheck, title: 'Conformité dès le cadrage', desc: 'RGPD, AI Act, accord de confidentialité sur demande.' },
]

/* Questions conseil & développement d'abord, puis les questions formation. */
const FAQ_CONSEIL = [
  { q: "Combien coûte un projet d'IA avec Masteria\u00a0?", a: "Le premier échange, 30 minutes de cadrage, est offert. Le Diagnostic IA d'une journée est un forfait chiffré lors de ce cadrage. Un audit ou un développement se chiffre au forfait, après cadrage\u00a0: à partir de quelques milliers d'euros pour un premier outil, jusqu'à 100 000 € et plus pour un déploiement à l'échelle. Les formations sont à 1 980 € HT la journée, finançables par votre OPCO." },
  { q: 'À qui appartient le code des outils que vous développez ?', a: "À vous. Le code, les prompts, la documentation et les livrables vous sont remis. Vos équipes sont formées à l'outil, et vous restez libres de le faire évoluer en interne ou avec un autre prestataire." },
  { q: 'Combien de temps pour un premier outil en production ?', a: "Un prototype ou une première version utile se construit généralement en quelques semaines, selon la complexité et la disponibilité de vos données. Nous livrons d'abord le cas prioritaire, puis nous élargissons." },
]

const TESTIMONIALS = [
  { name: 'Sophie M.', role: 'DRH, PME industrielle', quote: "En 2 jours, mon équipe a compris comment l'IA peut transformer notre quotidien RH. Concret et immédiatement applicable." },
  { name: 'Laurent B.', role: 'Directeur Marketing', quote: "Masteria a adapté la formation à nos enjeux. Nos campagnes sont maintenant 3× plus rapides à produire." },
  { name: 'Claire D.', role: 'Responsable RH, groupe 800 salariés', quote: "Pédagogie excellente. Nos équipes utilisent l'IA au quotidien, sans aucun prérequis technique." },
]

/* ─── Éléments de composition ─── */

function Kicker({ children, color = c }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color, marginBottom: 16 }}>
      <span aria-hidden="true" style={{ width: 22, height: 2, background: color }} />
      {children}
    </div>
  )
}

/* Logo d'une reconnaissance (Qualiopi, France Num, Les Échos), à hauteur commune. */
function Reconnaissance({ id }) {
  if (id === 'qualiopi') {
    return (
      <picture>
        <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
        <img src="/assets/qualiopi-logo.png" alt="Qualiopi, processus certifié" width="99" height="60" loading="lazy" decoding="async" style={{ height: 60, width: 'auto', display: 'block' }} />
      </picture>
    )
  }
  if (id === 'lesechos') {
    return <img src="/assets/lesechos-logo.png" alt="Les Échos" width="133" height="34" loading="lazy" decoding="async" style={{ height: 34, width: 'auto', display: 'block' }} />
  }
  if (FRANCE_NUM_BADGE) {
    return <img src={FRANCE_NUM_BADGE} alt="Activateur France Num" height="60" loading="lazy" decoding="async" style={{ height: 60, width: 'auto', display: 'block' }} />
  }
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', border: `1px solid ${LINE}`, borderRadius: 12, padding: '8px 16px', lineHeight: 1.1 }}>
      <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: MUTED }}>Activateur</span>
      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 21, fontWeight: 900, color: INK, letterSpacing: '-0.01em' }}>France Num</span>
    </span>
  )
}

function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div style={{ borderTop: `1px solid ${LINE}` }}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} style={{ borderBottom: `1px solid ${LINE}` }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, lineHeight: 1.4 }}>{item.q}</span>
              <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: '50%', border: `1px solid ${isOpen ? c : LINE}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 220ms, border-color 220ms', transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                <Plus size={16} strokeWidth={2.2} style={{ color: isOpen ? c : MUTED }} />
              </span>
            </button>
            {/* Réponse toujours présente dans le DOM (lisible par les moteurs), repliée en CSS. */}
            <div aria-hidden={!isOpen} style={{ maxHeight: isOpen ? 600 : 0, overflow: 'hidden', transition: 'max-height 320ms ease' }}>
              <p style={{ fontSize: 15.5, color: TEXT, lineHeight: 1.75, margin: '0 0 24px', maxWidth: 720 }}>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function HomePage() {
  const isDesktop = useIsDesktop()
  const homeFaq = [...FAQ_CONSEIL, ...FAQ_GENERAL]
  const casListe = CAS_LISTE.map(id => CASES.find(k => k.id === id)).filter(Boolean)

  /* ── JSON-LD pour SEO & AI overviews ───────────────────────────── */
  // Note: Organization, WebSite, Person et FAQPage sont déjà injectés par SEOHead
  // (via jsonLdOrg / jsonLdWebsite / jsonLdPerson / faqItems). On garde ici
  // les deux ItemList propres à la page d'accueil : les services, puis les formations.
  const jsonLdServiceList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Audit, conseil et développement IA',
    itemListElement: [...PILIERS[0].links, ...PILIERS[1].links].map(([name, href], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name,
        url: `https://www.master-ia.fr${href}`,
        provider: { '@id': 'https://www.master-ia.fr/#organization' },
      },
    })),
  }
  const jsonLdCourseList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Formations IA',
    itemListElement: TOOL_HUBS.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        name: h.h1,
        description: h.metaDesc,
        url: `https://www.master-ia.fr/${h.slug}`,
        provider: { '@type': 'Organization', name: 'Masteria' },
      },
    })),
  }

  const btnPrimary = { display: 'inline-flex', alignItems: 'center', gap: 9, background: o, color: '#fff', padding: '15px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15.5, fontWeight: 800, boxShadow: '0 8px 22px -8px rgba(234,88,12,0.55)' }
  const btnGhost = { display: 'inline-flex', alignItems: 'center', gap: 8, color: INK, background: '#fff', padding: '15px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, border: `1px solid ${LINE}` }

  return (
    <>
      <SEOHead
        title="Masteria, cabinet IA à Lyon : audit, conseil, outils et formation"
        description="Cabinet IA à Lyon : audit IA, conseil, développement d'outils et d'agents sur mesure, formation de vos équipes certifiée Qualiopi. Devis sous 24 h."
        slug=""
        keywords="cabinet IA Lyon, audit IA, conseil IA, développement IA sur mesure, agents IA entreprise, formation IA entreprise, formation ChatGPT, formation Copilot, Qualiopi"
        faqItems={homeFaq}
        speakable={['#definition']}
        extraJsonLd={[jsonLdServiceList, jsonLdCourseList]}
      />

      {/* ════════════════════════ HERO clair + équipes augmentées par l'IA ════════════════════════ */}
      <section style={{ position: 'relative', backgroundColor: '#FAFAF7', backgroundImage: 'radial-gradient(circle 560px at 8% 0%, rgba(37,99,235,0.10), transparent 70%), radial-gradient(circle 620px at 96% 96%, rgba(234,88,12,0.09), transparent 70%)', backgroundRepeat: 'no-repeat', color: INK, overflow: 'hidden', borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative', padding: 'clamp(36px, 4.5vw, 56px) clamp(18px, 4vw, 32px) clamp(44px, 5vw, 56px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 22, background: '#fff', border: `1px solid ${LINE}`, borderRadius: 99, padding: '5px 14px 5px 5px' }}>
            <span aria-hidden="true" style={{ width: 26, height: 26, borderRadius: '50%', background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={15} strokeWidth={2.2} style={{ color: c }} />
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#374151' }}>Cabinet IA à Lyon depuis 2022</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1.25fr) minmax(0, 1fr)' : '1fr', gap: 'clamp(24px, 5vw, 72px)', alignItems: 'end' }}>
            <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(32px, 3.9vw, 50px)', fontWeight: 900, lineHeight: 1.05, margin: 0, color: INK, letterSpacing: '-0.035em' }}>
              Cabinet spécialisé en intelligence artificielle
              <br />
              <span style={{ color: c, fontWeight: 800 }}>audit, conseil, outils sur mesure et formation</span>
            </h1>

            <div>
              {/* GEO : définition citable (formule d'entité canonique) */}
              <p id="definition" style={{ fontSize: 'clamp(16px, 1.6vw, 18px)', fontWeight: 500, color: TEXT, lineHeight: 1.6, margin: '0 0 26px', paddingLeft: 18, borderLeft: `3px solid ${o}` }}>
                Masteria est un cabinet spécialisé en intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Nous auditons vos processus, construisons vos <strong style={{ color: INK, fontWeight: 700 }}>outils et agents IA</strong>, puis formons vos équipes à s'en servir au quotidien.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <CadrageLink style={{ ...btnPrimary, padding: '13px 22px', fontSize: 15 }}>
                  Réserver 30 minutes de cadrage
                  <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </CadrageLink>
                <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: INK, fontSize: 15, fontWeight: 700, textDecoration: 'none', padding: '13px 6px' }}>
                  Nos formations <ArrowRight size={15} strokeWidth={2.4} style={{ color: o }} aria-hidden="true" />
                </Link>
              </div>
              {/* Organisme de formation certifié Qualiopi (logo officiel avec la mention de catégorie) */}
              <Link to="/formation-ia-qualiopi" style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 22, paddingTop: 18, borderTop: `1px solid ${LINE}`, textDecoration: 'none' }}>
                <picture>
                  <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
                  <img src="/assets/qualiopi-logo.png" alt="Qualiopi, processus certifié, République française" width="76" height="46" decoding="async" style={{ height: 46, width: 'auto', display: 'block', flexShrink: 0 }} />
                </picture>
                <span style={{ lineHeight: 1.4 }}>
                  <span style={{ display: 'block', fontSize: 14.5, fontWeight: 800, color: INK }}>Organisme de formation certifié Qualiopi</span>
                  <span style={{ display: 'block', fontSize: 13, color: MUTED }}>Au titre des actions de formation · finançable OPCO</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Des équipes augmentées par l'IA : agents construits (conseil et développement) reliés aux personnes formées (formation) */}
        <EquipeAugmentee />
      </section>

      {/* ════════════════════════ RECONNAISSANCES ET CLIENTS ════════════════════════ */}
      <section aria-label="Reconnaissances et clients" style={{ background: '#fff', borderBottom: `1px solid ${LINE}`, padding: 'clamp(32px, 4.5vw, 48px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? '1.15fr 1.15fr 1.15fr 0.8fr 0.8fr' : 'repeat(auto-fit, minmax(160px, 1fr))', rowGap: 28 }}>
            {RECONNAISSANCES.map((r, i) => {
              const inner = (
                <>
                  <div style={{ height: 60, display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <Reconnaissance id={r.id} />
                  </div>
                  <div style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.5 }}>{r.label}</div>
                </>
              )
              const cell = { display: 'block', textDecoration: 'none', padding: isDesktop ? `0 28px 0 ${i === 0 ? 0 : 28}px` : '0 16px 0 0', borderLeft: isDesktop && i > 0 ? `1px solid ${LINE}` : 'none' }
              return r.to
                ? <Link key={r.id} to={r.to} style={cell}>{inner}</Link>
                : <div key={r.id} style={cell}>{inner}</div>
            })}
            {CHIFFRES.map(f => (
              <div key={f.label} style={{ padding: isDesktop ? '0 0 0 28px' : '0 16px 0 0', borderLeft: isDesktop ? `1px solid ${LINE}` : 'none' }}>
                <div style={{ height: 60, display: 'flex', alignItems: 'center', marginBottom: 12, fontFamily: 'Nunito, sans-serif', fontSize: 34, fontWeight: 900, color: INK, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{f.value}</div>
                <div style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.5 }}>{f.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: isDesktop ? 40 : 22, flexWrap: 'wrap', marginTop: 32, paddingTop: 26, borderTop: `1px solid ${LINE}` }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED }}>Ils nous font confiance</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center', gap: isDesktop ? 48 : 28, flexWrap: 'wrap' }}>
              {CLIENTS.map(cl => (
                <li key={cl.name}>
                  <picture>
                    {cl.webp && <source type="image/webp" srcSet={cl.webp} />}
                    <img
                      src={cl.src} alt={cl.name} width={cl.w} height={cl.h} loading="lazy" decoding="async"
                      style={{ height: cl.h, width: 'auto', display: 'block', filter: 'grayscale(1)', opacity: 0.7, transition: 'filter 200ms, opacity 200ms' }}
                      onMouseEnter={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1' }}
                      onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(1)'; e.currentTarget.style.opacity = '0.7' }}
                    />
                  </picture>
                </li>
              ))}
            </ul>
            <span style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, flex: '1 1 260px' }}>{SECTEURS_LIGNE}</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════ TROIS MÉTIERS (éditorial asymétrique) ════════════════════════ */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 360px) 1fr' : '1fr', gap: 'clamp(36px, 6vw, 88px)' }}>
          <div style={isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : undefined}>
            <Kicker>Nos expertises</Kicker>
            <h2 style={h2Style}>Deux expertises, une même équipe</h2>
            <p style={{ ...leadStyle, marginBottom: 24 }}>
              Le conseil et le développement d'un côté, la formation de l'autre. Nous pensons et construisons vos outils IA, puis nous formons les équipes qui vont s'en servir&nbsp;: un projet d'IA se joue sur la marche entre la décision et l'usage, et nos deux expertises la couvrent en entier.
            </p>
            <p style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Un budget à anticiper ? Voir le <Link to="/prix-projet-ia" style={{ color: c, fontWeight: 700, textDecoration: 'none' }}>prix d'un projet IA</Link> et notre dossier sur le <Link to="/roi-ia-entreprise" style={{ color: c, fontWeight: 700, textDecoration: 'none' }}>ROI de l'IA en entreprise</Link>.
            </p>
          </div>

          <div>
            {PILIERS.map(({ Icon, num, tint, kicker, title, desc, recoit, links, cta }, i) => (
              <article key={title} style={{ padding: i === 0 ? '0 0 44px' : '44px 0', borderBottom: i < PILIERS.length - 1 ? `1px solid ${LINE}` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <span aria-hidden="true" style={{ width: 46, height: 46, borderRadius: 13, background: tint === 'orange' ? oLight : cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} strokeWidth={1.9} style={{ color: tint === 'orange' ? o : c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: tint === 'orange' ? oText : c, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {num} · {kicker}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.4vw, 28px)', fontWeight: 900, color: INK, margin: '0 0 12px', letterSpacing: '-0.015em' }}>{title}</h3>
                <p style={{ fontSize: 16, color: TEXT, lineHeight: 1.75, margin: '0 0 26px', maxWidth: 680 }}>{desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20 }}>
                  <div style={{ background: '#F9FAFB', border: `1px solid ${LINE}`, borderRadius: 14, padding: '18px 20px' }}>
                    <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>Ce que vous recevez</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                      {recoit.map(r => (
                        <li key={r} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: INK, lineHeight: 1.45 }}>
                          <Check size={16} strokeWidth={2.6} style={{ color: tint === 'orange' ? o : c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ padding: '18px 4px' }}>
                    <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>Nos offres</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 9 }}>
                      {links.map(([label, href]) => (
                        <li key={href}>
                          <Link to={href} style={{ fontSize: 14.5, color: INK, fontWeight: 600, textDecoration: 'none', borderBottom: `1px solid ${LINE}`, paddingBottom: 1 }}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                    <Link to={cta[1]} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: tint === 'orange' ? oText : c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                      {cta[0]} <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ MÉTHODE EN SIX TEMPS ════════════════════════ */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) minmax(0, 1fr)' : '1fr', gap: 'clamp(16px, 4vw, 64px)', alignItems: 'end', marginBottom: 48 }}>
            <div>
              <Kicker>Notre méthode</Kicker>
              <h2 style={{ ...h2Style, margin: 0 }}>Six temps, les mêmes sur chaque mission</h2>
            </div>
            <p style={leadStyle}>
              Qu'il s'agisse d'un diagnostic d'une journée ou d'un déploiement international, chaque mission avance dans cet ordre. C'est ce qui rend les résultats comparables, et la suite facile à décider.
            </p>
          </div>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', borderTop: `1px solid ${LINE}`, borderLeft: isDesktop ? `1px solid ${LINE}` : 'none' }}>
            {METHODE_COMMUNE.map(m => (
              <li key={m.num} style={{ padding: 'clamp(22px, 3vw, 32px)', borderRight: isDesktop ? `1px solid ${LINE}` : 'none', borderBottom: `1px solid ${LINE}` }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', border: `1.5px solid ${c}`, color: c, fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 900, marginBottom: 16, fontVariantNumeric: 'tabular-nums' }}>{m.num}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: INK, margin: '0 0 8px' }}>{m.title}</h3>
                <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ════════════════════════ L'ÉQUIPE ════════════════════════ */}
      <EquipeMasteria bg="#fff" />

      {/* ════════════════════════ PAR OÙ COMMENCER (fond beige) ════════════════════════ */}
      <section style={{ position: 'relative', background: BEIGE, padding: SECTION_PAD, overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: -220, left: -160, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(234,88,12,0.10), rgba(234,88,12,0) 66%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) minmax(0, 1fr)' : '1fr', gap: 'clamp(16px, 4vw, 64px)', alignItems: 'end', marginBottom: 56 }}>
            <div>
              <Kicker>Par où commencer</Kicker>
              <h2 style={{ ...h2Style, margin: 0 }}>Trente minutes pour savoir par où commencer</h2>
            </div>
            <p style={leadStyle}>
              Vous savez que l'IA peut vous aider sans savoir par où commencer&nbsp;: c'est le cas de la plupart de nos clients au premier échange.
            </p>
          </div>

          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 56px', display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr', gap: isDesktop ? 32 : 28, position: 'relative' }}>
            {isDesktop && <span aria-hidden="true" style={{ position: 'absolute', top: 23, left: 24, right: '33%', height: 2, borderRadius: 2, background: '#D1D5DB' }} />}
            {ETAPES.map(({ n, badge, title, desc }, i) => (
              <li key={n} style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <span style={{ width: 48, height: 48, borderRadius: '50%', background: i === 0 ? o : '#fff', border: `1.5px solid ${i === 0 ? o : '#D1D5DB'}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 900, color: i === 0 ? '#fff' : c, position: 'relative', zIndex: 1, boxShadow: i === 0 ? '0 8px 20px -8px rgba(234,88,12,0.6)' : 'none' }}>{n}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? oText : MUTED, background: i === 0 ? oLight : '#fff', border: `1px solid ${i === 0 ? '#FED7AA' : LINE}`, borderRadius: 99, padding: '4px 11px', position: 'relative', zIndex: 1 }}>{badge}</span>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 21, fontWeight: 800, color: INK, margin: '0 0 10px' }}>{title}</h3>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.7, margin: 0, maxWidth: 340 }}>{desc}</p>
              </li>
            ))}
          </ol>

          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', borderTop: '1px solid #DDD9CF', borderBottom: '1px solid #DDD9CF', marginBottom: 40 }}>
            {ENGAGEMENTS.map(({ Icon, title, desc }, i) => (
              <div key={title} style={{ padding: '24px 22px', paddingLeft: isDesktop && i > 0 ? 22 : 0, borderLeft: isDesktop && i > 0 ? '1px solid #DDD9CF' : 'none' }}>
                <Icon size={20} strokeWidth={1.8} style={{ color: c, marginBottom: 12 }} aria-hidden="true" />
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 6 }}>{title}</div>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <CadrageLink style={btnPrimary}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <Link to="/diagnostic-ia" style={btnGhost}>
              Le Diagnostic IA en détail
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FORMATION ════════════════════════ */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 400px) 1fr' : '1fr', gap: 'clamp(36px, 6vw, 80px)', alignItems: 'start' }}>
            <div style={isDesktop ? { position: 'sticky', top: 130 } : undefined}>
              <Kicker color={oText}>Former vos équipes</Kicker>
              <h2 style={h2Style}>Tous les LLM du marché, plus de 100 programmes</h2>
              <p style={{ ...leadStyle, marginBottom: 24 }}>
                ChatGPT, Claude, Microsoft Copilot, Google Gemini, Mistral AI&nbsp;: nous formons vos équipes sur tous les LLM du marché, par outil et par métier, à partir de leurs propres dossiers. En présentiel ou à distance, en intra-entreprise ou en accompagnement individuel. Plus de 1 500 professionnels formés depuis 2022.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 18px', border: `1px solid ${LINE}`, borderRadius: 14, marginBottom: 26 }}>
                <picture>
                  <source type="image/webp" srcSet="/assets/qualiopi-logo.webp" />
                  <img src="/assets/qualiopi-logo.png" alt="Certification Qualiopi des actions de formation de Masteria" width="80" height="60" loading="lazy" decoding="async" style={{ height: 48, width: 'auto', flexShrink: 0 }} />
                </picture>
                <p style={{ fontSize: 13.5, color: TEXT, lineHeight: 1.55, margin: 0 }}>
                  Formation certifiée Qualiopi, finançable par votre OPCO. 1 980 € HT la journée.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                  Tout le catalogue <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link to="/contact?type=formation" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: INK, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                  Demander un devis de formation <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>Par outil</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', border: `1px solid ${LINE}`, borderRadius: 18, overflow: 'hidden' }}>
                {TOOL_HUBS.map((h, i) => (
                  <li key={h.id} style={{ borderTop: i > 0 ? `1px solid ${LINE}` : 'none' }}>
                    <Link to={`/${h.slug}`} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: 16, alignItems: 'center', padding: '16px 20px', textDecoration: 'none', background: '#fff', transition: 'background 160ms' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#F9FAFB' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#fff' }}
                    >
                      <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: '#F3F4F6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ToolLogo tool={h.id} size={24} color={h.id === 'copilot' ? undefined : h.color} />
                      </span>
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK }}>Formation {h.tool}</span>
                        <span style={{ display: 'block', fontSize: 13.5, color: MUTED, lineHeight: 1.45, marginTop: 2 }}>{TOOL_LIGNES[h.id] || h.pitch}</span>
                      </span>
                      <ArrowRight size={17} strokeWidth={2.2} style={{ color: '#9CA3AF' }} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: 12 }}>Par métier</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {METIERS.map(m => {
                  const Icon = METIER_ICONS[m.slug]
                  return (
                    <li key={m.slug}>
                      <Link to={`/formation-ia-${m.slug}`} title={m.desc} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 14px', border: `1px solid ${LINE}`, borderRadius: 99, fontSize: 14, fontWeight: 600, color: INK, textDecoration: 'none', background: '#fff' }}>
                        {Icon ? <Icon size={15} strokeWidth={1.8} style={{ color: MUTED }} aria-hidden="true" /> : null}
                        {m.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Témoignages d'équipes formées */}
          <div style={{ marginTop: 'clamp(56px, 7vw, 80px)', paddingTop: 32, borderTop: `1px solid ${LINE}` }}>
            <h3 style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, margin: '0 0 22px' }}>Ce que disent les équipes formées</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(20px, 3vw, 40px)' }}>
              {TESTIMONIALS.map(t => (
                <figure key={t.name} style={{ margin: 0 }}>
                  <Quote size={22} strokeWidth={1.8} style={{ color: c, marginBottom: 10 }} aria-hidden="true" />
                  <blockquote style={{ margin: '0 0 14px', fontSize: 15.5, color: INK, lineHeight: 1.7 }}>{t.quote}</blockquote>
                  <figcaption style={{ fontSize: 13.5, color: MUTED }}><strong style={{ color: INK }}>{t.name}</strong> · {t.role}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ MISSIONS RÉCENTES (liste discrète) ════════════════════════ */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(64px, 8vw, 96px) clamp(18px, 4vw, 32px)', borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 360px) 1fr' : '1fr', gap: 'clamp(28px, 5vw, 88px)' }}>
          <div>
            <Kicker>Références</Kicker>
            <h2 style={{ ...h2Style, fontSize: 'clamp(24px, 2.8vw, 34px)' }}>Quelques missions récentes</h2>
            <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.7, margin: '0 0 18px' }}>
              Présentées sans nom de client&nbsp;: secteur, taille et chiffres issus des dossiers de mission. Mise en relation possible en privé, sous accord de confidentialité.
            </p>
            <Link to="/etudes-de-cas-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
              Toutes les études de cas <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${LINE}` }}>
            {casListe.map(k => (
              <li key={k.id} style={{ borderBottom: `1px solid ${LINE}` }}>
                <Link to={`/etudes-de-cas-ia#${k.id}`} style={{ display: 'grid', gridTemplateColumns: isDesktop ? '190px 1fr 20px' : '1fr', gap: isDesktop ? 28 : 6, alignItems: 'baseline', padding: '22px 0', textDecoration: 'none' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: MUTED, lineHeight: 1.5 }}>{k.sector}</span>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: INK, lineHeight: 1.4 }}>{k.title}</span>
                    <span style={{ display: 'block', fontSize: 14, color: MUTED, lineHeight: 1.65, marginTop: 6 }}>{k.teaser}</span>
                  </span>
                  {isDesktop && <ArrowRight size={16} strokeWidth={2.2} style={{ color: '#9CA3AF', alignSelf: 'center' }} aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════ LE FONDATEUR ════════════════════════ */}
      <section style={{ background: '#fff', padding: SECTION_PAD, borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? '380px 1fr' : '1fr', gap: 'clamp(36px, 6vw, 80px)', alignItems: 'center' }}>
          <div style={{ maxWidth: isDesktop ? 'none' : 320 }}>
            <picture>
              <source type="image/webp" srcSet="/assets/mathias-nizan.webp" />
              <img
                src="/assets/mathias-nizan.jpg"
                alt="Mathias Nizan, fondateur de Masteria"
                width="400" height="500"
                loading="lazy" decoding="async"
                style={{ width: '100%', height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block', borderRadius: 22, boxShadow: '0 30px 60px -24px rgba(10,15,30,0.35)' }}
              />
            </picture>
          </div>
          <div>
            <Kicker>Le mot du fondateur</Kicker>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 800, color: INK, lineHeight: 1.3, margin: '0 0 28px', letterSpacing: '-0.015em' }}>
              « L'intelligence artificielle ne remplace pas les humains. Elle <span style={{ color: c }}>décuple leur potentiel</span>. »
            </p>
            <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.8, margin: '0 0 14px', maxWidth: 640 }}>
              Je suis convaincu que l'IA ne doit pas être réservée à une élite technologique. Elle peut, et doit, devenir un levier de transformation pour tous les professionnels, quels que soient leur métier ou leur niveau de départ.
            </p>
            <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.8, margin: '0 0 30px', maxWidth: 640 }}>
              C'est pour cela que j'ai fondé <strong style={{ color: INK }}>Masteria</strong>, un cabinet spécialisé en intelligence artificielle&nbsp;: nous auditons vos usages, nous construisons les outils qui manquent et nous formons les équipes qui vont s'en servir.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', paddingTop: 22, borderTop: `1px solid ${LINE}` }}>
              <div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK }}>Mathias Nizan</div>
                <div style={{ fontSize: 14, color: MUTED, marginTop: 2 }}>Fondateur de Masteria · Conseil et architecture de solutions IA</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED }}>
                  Cité dans <img src="/assets/lesechos-logo.png" alt="Les Échos" height="16" loading="lazy" style={{ height: 16, width: 'auto' }} />
                </span>
                <Link to="/mathias-nizan" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                  Son parcours <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FAQ (éditorial) ════════════════════════ */}
      <section id="faq" style={{ background: '#F9FAFB', padding: SECTION_PAD, borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 360px) 1fr' : '1fr', gap: 'clamp(32px, 6vw, 88px)' }}>
          <div style={isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : undefined}>
            <Kicker>Questions fréquentes</Kicker>
            <h2 style={h2Style}>Ce qu'on nous demande avant de démarrer</h2>
            <p style={{ ...leadStyle, fontSize: 15.5, marginBottom: 20 }}>
              Une question qui n'est pas dans la liste ? Posez-la pendant les 30 minutes de cadrage.
            </p>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: c, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              Réserver 30 minutes de cadrage <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
          </div>
          <FaqAccordion items={homeFaq} />
        </div>
      </section>

      {/* ════════════════════════ EXPLORER MASTERIA (maillage interne SEO) ════════════════════════ */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 8vw, 88px) clamp(18px, 4vw, 32px)', borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: INK, margin: '0 0 32px' }}>Explorer Masteria</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {[
              { title: 'Conseil et audit', links: [
                ['Conseil en intelligence artificielle', '/conseil-intelligence-artificielle'],
                ['Audit IA', '/audit-ia'],
                ['Diagnostic IA', '/diagnostic-ia'],
                ['Accompagnement IA', '/accompagnement-ia'],
                ['Gouvernance IA', '/gouvernance-ia'],
                ['Études de cas IA', '/etudes-de-cas-ia'],
              ] },
              { title: 'Développement', links: [
                ['Agence de développement IA', '/agence-developpement-ia'],
                ['Outils IA sur mesure', '/outils-ia-sur-mesure'],
                ['Agents IA en entreprise', '/agents-ia-entreprise'],
                ['Automatisation IA', '/agence-automatisation-ia'],
                ['Agence IA à Lyon', '/agence-ia'],
                ["Prix d'un projet IA", '/prix-projet-ia'],
              ] },
              { title: 'Formation par outil', links: [
                ['Formation ChatGPT', '/formation-chatgpt'],
                ['Formation Microsoft Copilot', '/formation-microsoft-copilot'],
                ['Formation Claude IA', '/formation-claude-ia'],
                ['Formation Google Gemini', '/formation-gemini-entreprise'],
                ['Formation Mistral AI', '/formation-mistral-ai'],
              ] },
              { title: 'Formation par ville', links: [
                ['Formation IA Lyon', '/formation-ia-lyon'],
                ['Formation IA Paris', '/formation-ia-paris'],
                ['Formation IA Marseille', '/formation-ia-marseille'],
                ['Formation IA Genève', '/formation-ia-geneve'],
                ['Formation IA Bruxelles', '/formation-ia-bruxelles'],
              ] },
            ].map(col => (
              <div key={col.title}>
                <h3 style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, margin: '0 0 16px' }}>{col.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <Link to={href} style={{ color: TEXT, textDecoration: 'none', fontSize: 14.5, fontWeight: 500 }}
                        onMouseEnter={e => { e.currentTarget.style.color = INK }}
                        onMouseLeave={e => { e.currentTarget.style.color = TEXT }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ CTA FINAL (fond beige) ════════════════════════ */}
      <section style={{ position: 'relative', background: BEIGE, padding: 'clamp(64px, 9vw, 104px) clamp(18px, 4vw, 32px)', overflow: 'hidden', borderTop: `1px solid ${LINE}` }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -200, right: -120, width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12), rgba(37,99,235,0) 66%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) 420px' : '1fr', gap: 'clamp(36px, 6vw, 80px)', alignItems: 'center' }}>
          <div>
            <Kicker>Contact</Kicker>
            <h2 style={h2Style}>Parlons de votre projet IA</h2>
            <p style={{ fontSize: 17, color: TEXT, lineHeight: 1.75, margin: '0 0 28px', maxWidth: 560 }}>
              Trente minutes pour poser votre contexte et voir par où commencer&nbsp;: audit, diagnostic d'une journée, outil sur mesure ou formation de vos équipes. L'échange est offert.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                { Icon: Code2, label: 'Le code vous appartient' },
                { Icon: BadgeCheck, label: 'Formation certifiée Qualiopi' },
                { Icon: MapPin, label: 'France · Suisse · Belgique' },
              ].map(({ Icon, label }) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: '#111827', background: '#fff', border: `1px solid ${LINE}`, borderRadius: 99, padding: '7px 14px' }}>
                  <Icon size={14} strokeWidth={2.2} style={{ color: c }} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderRadius: 22, padding: 'clamp(24px, 3vw, 32px)', boxShadow: '0 24px 60px -32px rgba(10,15,30,0.35)' }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: INK, marginBottom: 6 }}>Prendre rendez-vous</div>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: '0 0 20px' }}>En visio ou par téléphone, avec Mathias Nizan.</p>
            <CadrageLink style={{ ...btnPrimary, width: '100%', justifyContent: 'center', boxSizing: 'border-box', marginBottom: 20 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 18, borderTop: `1px solid ${LINE}` }}>
              <a href="tel:+33667754128" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: INK, fontSize: 14.5, fontWeight: 600, textDecoration: 'none' }}>
                <Phone size={16} strokeWidth={2} style={{ color: c }} aria-hidden="true" /> 06 67 75 41 28
              </a>
              <a href="mailto:mathias.nizan@master-ia.fr" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: INK, fontSize: 14.5, fontWeight: 600, textDecoration: 'none' }}>
                <Mail size={16} strokeWidth={2} style={{ color: c }} aria-hidden="true" /> mathias.nizan@master-ia.fr
              </a>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: MUTED, fontSize: 13.5 }}>
                <Clock size={16} strokeWidth={2} style={{ color: c }} aria-hidden="true" /> Réponse sous 24 h ouvrées
              </span>
            </div>
            <Link to="/contact?type=formation" style={{ display: 'block', marginTop: 18, fontSize: 13.5, color: oText, fontWeight: 700, textDecoration: 'none' }}>
              Un besoin de formation ? Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
