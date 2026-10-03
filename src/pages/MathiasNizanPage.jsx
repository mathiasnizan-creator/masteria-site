import { Link } from 'react-router-dom'
import {
  ArrowRight, Building2, Compass, Cpu, GraduationCap, Languages, MapPin,
  Newspaper, CalendarClock, BookOpen, LineChart, Library, ShieldCheck, Plug, Handshake,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import CaseStudyCards from '../components/CaseStudyCards'
import CadrageLink from '../components/CadrageLink'
import EquipeMasteria from '../components/EquipeMasteria'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page auteur « Mathias Nizan » (/mathias-nizan) : E-E-A-T du conseil et du
 * développement. Cible des bylines, de FounderNote et du schéma Person (url,
 * mainEntityOfPage). Page de type ProfilePage, entité principale #mathias-nizan.
 * INTÉGRITÉ : uniquement des faits déjà publiés sur le site (page À propos,
 * espace presse, études de cas, pages conseil et développement). Rien sur les
 * diplômes ni les employeurs antérieurs tant que Mathias ne les a pas fournis.
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const SECTION_PAD = 'clamp(64px, 9vw, 100px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const linkStyle = { color: c, fontWeight: 700, textDecoration: 'none' }

const TITRE = 'Conseil et architecture de solutions IA'
const LINKEDIN_URL = 'https://www.linkedin.com/in/mathias-nizan/'
const ECHOS_ARTICLE_URL = 'https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741'
const ECHOS_ARTICLE_TITLE = "ChatGPT, Claude, Copilot, Gemini, Mistral : comment choisir l'IA la plus adaptée à son métier"

const EN_BREF = [
  { icon: Building2, label: 'Fonction', value: `Fondateur de Masteria · ${TITRE}` },
  { icon: CalendarClock, label: 'Parcours', value: "Dix ans de conseil en transformation digitale, IA générative depuis 2020, Masteria depuis 2022" },
  { icon: MapPin, label: 'Basé à', value: "Lyon, bureaux en presqu'île (Lyon 1ᵉʳ)" },
  { icon: Languages, label: 'Interventions', value: "France, Suisse, Belgique, et à l'international en anglais" },
  { icon: Newspaper, label: 'Presse', value: "Cité par Les Échos sur le choix des outils d'IA en entreprise" },
]

/* Les trois métiers qu'il exerce chez Masteria : penser, construire, transmettre. */
const METIERS = [
  {
    icon: Compass,
    kicker: 'Penser',
    title: 'Auditer et conseiller',
    desc: "Il conduit lui-même les audits IA, les diagnostics IA et les missions de stratégie\u00a0: cartographie des processus, priorisation des cas d'usage, gouvernance et conformité (AI Act, RGPD). Il présente les conclusions devant les comités de direction, en français ou en anglais.",
    links: [['Audit IA', '/audit-ia'], ['Diagnostic IA', '/diagnostic-ia'], ['Conseil en stratégie IA', '/conseil-intelligence-artificielle']],
  },
  {
    icon: Cpu,
    kicker: 'Construire',
    title: "Concevoir l'architecture des outils",
    desc: "Assistants branchés sur les documents de l'entreprise (RAG), agents reliés au CRM ou à l'ERP, automatisations, connecteurs MCP\u00a0: il choisit les briques et dessine l'architecture de ce que Masteria développe. Multi-LLM (Claude, GPT, Mistral), no-code quand il suffit, code quand la robustesse l'exige. Le code revient au client.",
    links: [["Développement d'outils sur mesure", '/agence-developpement-ia'], ['Agents IA en entreprise', '/agents-ia-entreprise'], ['Automatisation IA', '/agence-automatisation-ia']],
  },
  {
    icon: GraduationCap,
    kicker: 'Transmettre',
    title: 'Former les équipes',
    desc: "Un outil n'a de valeur que s'il est utilisé. Il conçoit les parcours de formation de Masteria, par métier et par outil, certifiés Qualiopi, et en anime une partie avec un réseau de formateurs indépendants expérimentés.",
    links: [['Formations IA par métier', '/formation-intelligence-artificielle'], ['Accompagnement IA', '/accompagnement-ia']],
  },
]

const PRINCIPES = [
  { icon: Handshake, title: 'Indépendant des éditeurs', desc: "Masteria est indépendante des éditeurs\u00a0: la recommandation suit votre cas, votre budget et vos contraintes de conformité." },
  { icon: Plug, title: "Partir de l'existant", desc: "CRM, ERP, fichiers, outils internes\u00a0: la solution se branche sur ce qui est en place, la refonte n'est pas un préalable." },
  { icon: ShieldCheck, title: 'Confidentialité', desc: "Accord de confidentialité sur demande avant tout échange de documents. Les références publiées sont anonymisées." },
  { icon: Compass, title: 'Cadrer avant de chiffrer', desc: "Le périmètre est écrit avant le devis. Le premier échange, 30 minutes, est offert." },
]

const PUBLICATIONS = [
  { icon: Newspaper, title: 'Les Échos', desc: ECHOS_ARTICLE_TITLE, href: ECHOS_ARTICLE_URL, external: true },
  { icon: CalendarClock, title: 'Veille IA quotidienne', desc: "Chaque matin ouvré, ce que l'actualité de l'IA change dans le travail des équipes.", href: '/veille-ia' },
  { icon: LineChart, title: "Le ROI de l'IA en entreprise", desc: "Dossier sourcé sur ce que l'IA rapporte vraiment, et à quel étage la valeur se perd.", href: '/roi-ia-entreprise' },
  { icon: Library, title: 'Bibliothèque de prompts', desc: '112 prompts par métier, chacun avec son « pourquoi ça marche ».', href: '/bibliotheque-de-prompts' },
  { icon: BookOpen, title: 'Le blog', desc: 'Guides de méthode\u00a0: audit, stratégie, agents, gouvernance.', href: '/blog' },
]

const EXPERTISES = [
  'Audit IA', 'Stratégie et feuille de route IA', 'Gouvernance et AI Act', 'RGPD appliqué à l\'IA',
  'Architecture de solutions IA', 'Agents IA', 'RAG', 'Connecteurs MCP', 'Intégration CRM et ERP',
  'Automatisation de processus', 'Claude', 'ChatGPT', 'Microsoft Copilot', 'Google Gemini', 'Mistral AI',
  'Formation des équipes',
]

export default function MathiasNizanPage() {
  const isDesktop = useIsDesktop()
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Mathias Nizan', slug: 'mathias-nizan' },
  ]

  return (
    <>
      <SEOHead
        title="Mathias Nizan, conseil et architecture de solutions IA | Masteria"
        description="Mathias Nizan, fondateur de Masteria à Lyon : audit IA, conseil, architecture d'outils et d'agents IA sur mesure, formation des équipes. Cité par Les Échos."
        slug="mathias-nizan"
        breadcrumbs={breadcrumbs}
        keywords="mathias nizan, fondateur masteria, consultant ia lyon, architecte solutions ia, expert ia entreprise"
        webPageType="ProfilePage"
        mainEntityId="https://www.master-ia.fr/#mathias-nizan"
        datePublished="2026-10-02"
        dateModified="2026-10-02"
        speakable={['#definition', '#en-bref']}
        citations={[{ name: `Les Échos : ${ECHOS_ARTICLE_TITLE}`, url: ECHOS_ARTICLE_URL }]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Mathias Nizan</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) 280px' : '1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
                <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
                </span>
                <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
                  Fondateur de Masteria
                </span>
              </div>

              <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em' }}>
                Mathias Nizan
                <br />
                <span style={{ color: '#60A5FA', fontWeight: 800 }}>conseil et architecture de solutions IA</span>
              </h1>

              {/* GEO : définition citable */}
              <p id="definition" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 20px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
                Mathias Nizan est le fondateur de Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022. Il conduit lui-même les <strong style={{ color: '#fff', fontWeight: 700 }}>missions d'audit et de conseil</strong>, conçoit l'architecture des outils et des agents IA que Masteria construit pour ses clients, et forme les équipes qui les utilisent.
              </p>
              <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.7, margin: '0 0 30px', maxWidth: 680 }}>
                Avant Masteria, il a passé dix ans à conseiller des entreprises sur leur transformation digitale. Il se consacre à l'IA générative depuis 2020.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                  Réserver 30 minutes de cadrage
                  <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
                </CadrageLink>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer me" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
                  LinkedIn
                </a>
              </div>
            </div>

            <div style={{ maxWidth: isDesktop ? 'none' : 240 }}>
              <picture>
                <source type="image/webp" srcSet="/assets/mathias-nizan.webp" />
                <img
                  src="/assets/mathias-nizan.jpg"
                  alt="Portrait de Mathias Nizan, fondateur de Masteria"
                  width="400" height="500"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 20, display: 'block', border: '1px solid #1E293B' }}
                />
              </picture>
            </div>
          </div>

          {/* En bref (GEO) */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', marginTop: 44 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '14px 32px' }}>
              {EN_BREF.map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Icon size={16} strokeWidth={2.2} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                  <div>
                    <dt style={{ fontSize: 13, fontWeight: 700, color: '#E2E8F0' }}>{label}</dt>
                    <dd style={{ margin: '2px 0 0', fontSize: 14, color: '#94A3B8', lineHeight: 1.55 }}>{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CE QU'IL FAIT CHEZ MASTERIA ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Son rôle chez Masteria</div>
          <h2 style={h2Style}>Il pense le projet, en dessine l'architecture et forme ceux qui s'en servent</h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 36px', maxWidth: 780 }}>
            Un projet d'IA se joue sur la marche entre la décision et l'usage. Chez Masteria, la même équipe cadre, construit et forme, sous sa direction, pour que cette marche soit franchie d'un seul tenant.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {METIERS.map(({ icon: Icon, kicker, title, desc, links }) => (
              <article key={title} style={{ ...cardStyle, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: 11, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} strokeWidth={2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{kicker}</span>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link to={href} style={{ ...linkStyle, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        {label} <ArrowRight size={13} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── L'ÉQUIPE QU'IL PILOTE ── */}
      <EquipeMasteria showFounder={false} bg="#F9FAFB" />

      {/* ── MISSIONS REPRÉSENTATIVES ── */}
      <CaseStudyCards
        ids={['industrie', 'photovoltaique', 'conseil-financier', 'distribution']}
        kicker="Missions représentatives"
        title="Quatre missions menées sous sa direction"
        intro="Un groupe industriel international, un distributeur photovoltaïque, un cabinet de conseil financier, un distributeur IT&nbsp;: la méthode en six temps et ce que les équipes en retirent."
        bg="#fff"
        bordered={false}
      />

      {/* ── COMMENT IL TRAVAILLE ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Sa façon de travailler</div>
          <h2 style={h2Style}>Quatre règles tenues sur chaque mission</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginTop: 28 }}>
            {PRINCIPES.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ borderLeft: `4px solid ${c}`, padding: '4px 0 4px 18px' }}>
                <Icon size={20} strokeWidth={2} style={{ color: c, marginBottom: 10 }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Publications et prises de parole</div>
          <h2 style={h2Style}>Ce qu'il publie</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16, marginTop: 28 }}>
            {PUBLICATIONS.map(({ icon: Icon, title, desc, href, external }) => {
              const inner = (
                <>
                  <Icon size={20} strokeWidth={2} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{title}</div>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                </>
              )
              const style = { ...cardStyle, padding: 22, display: 'flex', gap: 14, textDecoration: 'none' }
              return external
                ? <a key={title} href={href} target="_blank" rel="noopener noreferrer" style={style}>{inner}</a>
                : <Link key={title} to={href} style={style}>{inner}</Link>
            })}
          </div>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '24px 0 0' }}>
            Journaliste ? Bio, portraits et chiffres vérifiables sont dans l'<Link to="/presse" style={linkStyle}>espace presse</Link>.
          </p>
        </div>
      </section>

      {/* ── EXPERTISES ── */}
      <section style={{ padding: 'clamp(48px, 7vw, 72px) 24px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Domaines d'expertise</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {EXPERTISES.map(e => (
              <li key={e} style={{ background: cLight, color: '#1E40AF', borderRadius: 99, padding: '6px 14px', fontSize: 13.5, fontWeight: 600 }}>{e}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA FINAL sombre ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(56px, 9vw, 96px) 24px', overflow: 'hidden', textAlign: 'center' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 16px', lineHeight: 1.15 }}>
            Parlons de votre projet
          </h2>
          <p style={{ fontSize: 16.5, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 30px' }}>
            30 minutes pour poser votre contexte et voir par où commencer&nbsp;: audit, diagnostic court, outil sur mesure ou formation. L'échange est offert.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CadrageLink style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '15px 30px', borderRadius: 11, textDecoration: 'none', fontSize: 15.5, fontWeight: 700 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </CadrageLink>
            <Link to="/etudes-de-cas-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#E2E8F0', padding: '15px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Toutes les études de cas
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
