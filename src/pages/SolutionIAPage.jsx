import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle,
  Plug, Check, Cpu, Server, Lock, KeyRound, ShieldCheck, Workflow,
  MapPin, Users, Wrench,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { SOLUTIONS, getSolution } from '../data/solution-ia-data'

/*
 * Template « Solution IA sur mesure » — cluster bas de funnel (intention
 * solution-aware), une page par TYPE DE LIVRABLE. Lit le slug depuis le path
 * parmi SOLUTIONS, 404 propre si inconnu. Hub : /solutions-ia.
 *
 * POSITIONNEMENT : conseil + développement sur mesure high-ticket, orienté
 * CAPACITÉ. Aucun cas client nommé, exemples sectoriels génériques. Le code
 * développé appartient au client. PAS d'OPCO/Qualiopi (non finançable sur le
 * développement sur mesure).
 *
 * Design premium identique à /agence-developpement-ia et /agence-ia : kickers
 * uppercase #2563EB, icônes lucide (zéro emoji), cartes radius 16 bordées
 * #E5E7EB, réponses directes citables en gras, CTA final bandeau sombre #0A0A0A.
 */

const c = '#2563EB'
const cLight = '#DBEAFE'

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

/* Mapping du nom d'icône (champ data) vers le composant lucide. */
const ICONS = {
  Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle, Plug,
}

/* Piliers d'approche technique communs (illustrés par des icônes lucide). */
const STACK_ICONS = [Cpu, Database, Plug, Lock, Server]

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

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
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function SolutionIAPage() {
  const location = useLocation()
  const slug = location.pathname.replace(/^\//, '')
  const solution = getSolution(slug)

  if (!solution) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, color: '#0A0A0A' }}>Page non trouvée</h1>
        <Link to="/solutions-ia" style={{ color: c, fontWeight: 600 }}>Voir nos solutions IA sur mesure</Link>
      </div>
    )
  }

  const HeroIcon = ICONS[solution.icon] || Bot
  const related = solution.relatedSolutions
    .map(s => SOLUTIONS.find(x => x.slug === s))
    .filter(Boolean)

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Solutions IA', slug: 'solutions-ia' },
    { name: solution.name, slug: solution.slug },
  ]

  /* ── JSON-LD Service (serviceType = type de livrable) ── */
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'ProfessionalService'],
    '@id': `https://www.master-ia.fr/${solution.slug}#service`,
    name: `${solution.name} sur mesure — Masteria`,
    description: solution.metaDesc,
    url: `https://www.master-ia.fr/${solution.slug}`,
    serviceType: solution.name,
    provider: { '@id': 'https://www.master-ia.fr/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'Country', name: 'Belgique' },
    ],
    isPartOf: { '@id': 'https://www.master-ia.fr/solutions-ia#itemlist' },
  }

  return (
    <>
      <SEOHead
        title={solution.metaTitle}
        description={solution.metaDesc}
        slug={solution.slug}
        breadcrumbs={breadcrumbs}
        faqItems={solution.faq}
        extraJsonLd={serviceJsonLd}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#F9FAFB', color: '#0A0A0A', padding: 'clamp(48px, 7vw, 72px) 24px clamp(56px, 8vw, 80px)', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <Link to="/solutions-ia" style={{ color: '#6B7280' }}>Solutions IA</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>{solution.name}</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <HeroIcon size={16} strokeWidth={2.2} aria-hidden="true" />
              Solution IA sur mesure
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Développement · Intégration · Transfert
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em', maxWidth: 920 }}>
            {solution.h1}
          </h1>

          {/* GEO : réponse directe en gras (citable LLM) */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 760, fontWeight: 500 }}>
            <strong>{solution.directAnswer}</strong>
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)' }}>
              Demander un cadrage gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#methode" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Comment nous le construisons
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { icon: Cpu, label: 'Multi-LLM (Claude, GPT, Mistral)' },
              { icon: Database, label: 'RAG sur vos données' },
              { icon: KeyRound, label: 'Code livré au client' },
              { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon size={15} strokeWidth={2.2} style={{ color: c }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUE C'EST ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Ce que c'est</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            {`${solution.name} : de quoi parle-t-on ?`}
          </h2>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            {solution.whatItIs}
          </p>
        </div>
      </section>

      {/* ── COMMENT ON LE CONSTRUIT (4 étapes numérotées) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Méthode</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment nous construisons votre {solution.name.toLowerCase()}
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Quatre étapes, un livrable à chaque palier : cadrage du périmètre, prototype sur un cas réel, développement et intégration à vos outils, puis déploiement et transfert. Vous décidez à chaque étape, sur des éléments concrets, et vous repartez propriétaire du code.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {solution.howWeBuild.map((step, i) => (
              <div
                key={step.title}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  padding: '24px 0',
                  borderTop: i === 0 ? 'none' : '1px solid #E5E7EB',
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROCHE TECHNIQUE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Approche technique</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Sur quelles briques techniques ?
          </h2>
          <p style={{ ...answerStyle, background: '#F9FAFB' }}>
            <strong>Sur quatre briques : une approche multi-LLM (le bon modèle au bon endroit), du RAG pour ancrer les réponses dans vos données avec sources, des connecteurs API et MCP vers vos outils, et des garde-fous avec validation humaine. Hébergement dans l'Union européenne possible selon vos exigences de conformité.</strong>
          </p>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 880 }}>
            {solution.techApproach}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { icon: Cpu, label: 'Multi-LLM, le bon modèle au bon endroit' },
              { icon: Database, label: 'RAG : réponses sourcées sur vos données' },
              { icon: Plug, label: 'Connecteurs API & MCP' },
              { icon: ShieldCheck, label: 'Garde-fous & validation humaine' },
              { icon: Server, label: 'Hébergement UE possible' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ background: '#F9FAFB', color: '#374151', padding: '9px 14px', borderRadius: 8, fontSize: 13.5, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon size={16} strokeWidth={2.1} style={{ color: c }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Pour le détail de notre stack et de notre méthode d'ingénierie, parcourez notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link>.
          </p>
        </div>
      </section>

      {/* ── CAS PAR SECTEUR ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Cas d'usage</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            {`${solution.name} : exemples par secteur`}
          </h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 880 }}>
            Quelques exemples génériques de ce que cette solution permet selon le métier. Ils illustrent des usages possibles, à adapter à votre contexte lors du cadrage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
            {solution.useCasesBySector.map(uc => (
              <div key={uc.sector} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={Briefcase} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{uc.sector}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{uc.usage}</p>
              </div>
            ))}
          </div>
          {solution.sectorLinks && solution.sectorLinks.length > 0 && (
            <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 880 }}>
              Votre secteur en particulier :{' '}
              {solution.sectorLinks.map((lnk, i) => (
                <span key={lnk.href}>
                  <Link to={lnk.href} style={aStyle}>{lnk.label}</Link>
                  {i < solution.sectorLinks.length - 1 ? ' · ' : '.'}
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      {/* ── DÉVELOPPEURS SUR SITE / RÉGIE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Users size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={kickerStyle}>Modèle d'engagement</div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Des développeurs IA chez vous, sur site ou à distance
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                {solution.onsiteDevNote || "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Ce modèle convient aux environnements sensibles, où le code doit rester dans votre périmètre, et aux contextes de montée en charge où vous voulez accélérer sans recruter dans l'urgence. Nos développeurs travaillent avec vos équipes, transfèrent la compétence et documentent au fil de l'eau."}
              </p>
              <Link to="/methode-projet-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Voir notre méthode de projet IA
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>
            {`${solution.name} : questions fréquentes`}
          </h2>
          <div>
            {solution.faq.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAILLAGE : SOLUTIONS LIÉES + HUB ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Solutions liées</div>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            D'autres solutions IA sur mesure
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 880 }}>
            Selon votre besoin, ces livrables se combinent. Explorez les solutions proches, ou revenez au panorama complet.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 32 }}>
            {related.map(rel => {
              const RelIcon = ICONS[rel.icon] || Bot
              return (
                <Link key={rel.slug} to={`/${rel.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                  >
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={RelIcon} />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                      {rel.name}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.cardSummary}</p>
                    <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Découvrir
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link to="/solutions-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 700, color: '#1E40AF', textDecoration: 'none' }}>
              <Workflow size={13} aria-hidden="true" /> Toutes les solutions IA sur mesure
            </Link>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Cpu size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Agence de développement IA
            </Link>
            <Link to="/outils-ia-sur-mesure" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Wrench size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Outils IA par métier
            </Link>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Check size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Diagnostic IA gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div style={{ ...kickerStyle, color: cLight }}>Premier échange gratuit</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            {`Parlons de votre ${solution.name.toLowerCase()}`}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
            Décrivez votre contexte et vos contraintes. Nous revenons vers vous sous 24 heures avec une lecture du périmètre, un premier prototype envisageable et une proposition de cadrage. Vous repartez avec une vision claire de ce qu'il est possible de développer, et vous restez propriétaire du code.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
            Demander un cadrage gratuit
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
            Réponse sous 24 h · Code livré au client · Multi-LLM · Lyon, France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
