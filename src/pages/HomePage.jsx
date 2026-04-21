import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  BadgeCheck, Wallet, MapPin, Clock, Rocket, ShieldCheck, Sparkles,
  ArrowRight, Star, Zap, Quote,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ToolLogo from '../components/ToolLogo'
import { HUBS, METIERS } from '../data/seo-pages'
import { FAQSection, FAQ_GENERAL } from '../components/screens2'

const TOOL_HUBS = HUBS.filter(h => h.id !== 'metiers')

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
}

/* ─── Chiffre animé (anime de 0 à la valeur finale au scroll into view) ─── */
function AnimatedNumber({ value, suffix = '', prefix = '', duration = 1400 }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    if (!started) return
    const start = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, value, duration])
  useEffect(() => {
    const onScroll = () => setStarted(true)
    const t = setTimeout(onScroll, 150)
    return () => clearTimeout(t)
  }, [])
  return <>{prefix}{display.toLocaleString('fr-FR')}{suffix}</>
}

export default function HomePage() {
  const navigate = useNavigate()

  const testimonials = [
    { name: 'Sophie M.',  role: 'DRH, PME industrielle',      quote: "En 2 jours, mon équipe a compris comment l'IA peut transformer notre quotidien RH. Concret et immédiatement applicable." },
    { name: 'Laurent B.', role: 'Directeur Marketing',         quote: "Masteria a adapté la formation à nos enjeux. Nos campagnes sont maintenant 3× plus rapides à produire." },
    { name: 'Claire D.',  role: 'Responsable RH, groupe 800 salariés', quote: "Pédagogie excellente. Nos équipes utilisent l'IA au quotidien, sans aucun prérequis technique." },
  ]

  const homeFaq = FAQ_GENERAL

  /* ── JSON-LD pour SEO & AI overviews ───────────────────────────── */
  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Masteria',
    url: 'https://www.master-ia.fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.master-ia.fr/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization'],
    name: 'Masteria',
    url: 'https://www.master-ia.fr',
    logo: 'https://www.master-ia.fr/assets/logo-horizontal.png',
    description: "Centre de formation IA certifié Qualiopi. Formations ChatGPT, Microsoft Copilot, Google Gemini et Claude pour les entreprises. Finançable OPCO.",
    founder: { '@type': 'Person', name: 'Mathias Nizan' },
    foundingDate: '2022',
    areaServed: ['France', 'Suisse', 'Belgique'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Qualiopi',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'mathias.nizan@master-ia.fr',
      contactType: 'customer service',
      availableLanguage: 'French',
    },
    sameAs: ['https://www.linkedin.com/in/mathias-nizan/'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
    },
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const jsonLdCourseList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
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

  return (
    <>
      <SEOHead
        title="Formation IA pour entreprises | ChatGPT, Copilot, Gemini, Claude | Masteria, Certifié Qualiopi"
        description="Centre de formation IA certifié Qualiopi. +500 professionnels formés à ChatGPT, Microsoft Copilot, Google Gemini et Claude. Formations finançables OPCO. Présentiel et distanciel, France, Suisse et Belgique."
        slug=""
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourseList) }} />

      {/* ════════════════════════ HERO clair ════════════════════════ */}
      <section style={{
        position: 'relative',
        background: '#FAFAF7',
        color: '#0A0A0A',
        padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px) clamp(72px, 12vw, 120px)',
        overflow: 'hidden',
        borderBottom: '1px solid #E5E7EB',
      }}>
        {/* Halos décoratifs discrets */}
        <div aria-hidden style={{
          position: 'absolute', top: -120, left: '10%', width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: -160, right: '5%', width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', border: '1px solid #E5E7EB',
            borderRadius: 99, padding: '7px 16px', marginBottom: 28,
          }}>
            <Sparkles size={14} color="#D97706" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: '#374151' }}>
              +500 professionnels formés · 98 % de satisfaction
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: '0 auto 24px',
            maxWidth: 880,
            color: '#0A0A0A',
          }}>
            Formez vos équipes à l'<span style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 45%, #D97706 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>intelligence artificielle</span>, concrètement.
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.5vw, 19px)',
            color: '#4B5563',
            lineHeight: 1.7,
            maxWidth: 720,
            margin: '0 auto 32px',
          }}>
            Centre de formation <strong style={{ color: '#0A0A0A' }}>certifié Qualiopi</strong>, Masteria forme les entreprises à <strong style={{ color: '#0A0A0A' }}>ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral AI</strong>. Programmes par métier, finançables à 100 % via votre OPCO.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#F97316', color: '#fff',
              padding: '15px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 800,
              transition: 'transform 150ms',
              boxShadow: '0 6px 20px rgba(249,115,22,0.35)',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              Contacter notre équipe <ArrowRight size={16} />
            </Link>
            <Link to="/formation-ia-par-metier" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A',
              border: '1px solid #E5E7EB',
              padding: '14px 26px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 700,
            }}>
              Voir les formations par métier
            </Link>
          </div>

          {/* Logos des outils, "Wall of tools" */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: 32, flexWrap: 'wrap', marginTop: 16,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B7280' }}>
              Les IA que nous maîtrisons
            </div>
            {TOOL_HUBS.map(h => (
              <Link key={h.id} to={`/${h.slug}`}
                title={`Formation ${h.tool}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '10px 16px', borderRadius: 10,
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none',
                  transition: 'all 160ms',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = h.color
                  e.currentTarget.style.boxShadow = `0 4px 12px ${h.color}20`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <ToolLogo tool={h.id} size={20} color={h.id === 'copilot' ? undefined : h.color} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0A0A0A', letterSpacing: '0.01em' }}>{h.tool}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ CHIFFRES CLÉS ════════════════════════ */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: 'clamp(32px, 6vw, 48px) clamp(18px, 4vw, 32px)' }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24,
        }}>
          {[
            { value: 500, prefix: '+',  suffix: '',  label: 'Professionnels formés' },
            { value: 98,  prefix: '',   suffix: ' %', label: 'Taux de satisfaction' },
            { value: 6,   prefix: '+',  suffix: ' h', label: 'Gagnées chaque semaine' },
            { value: 100, prefix: '',   suffix: ' %', label: 'Finançable OPCO' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '16px 8px' }}>
              <div style={{
                fontFamily: 'Nunito, sans-serif', fontSize: 44, fontWeight: 900,
                color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.02em',
              }}>
                <AnimatedNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, color: '#6B7280', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════ FORMATIONS PAR OUTIL ════════════════════════ */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>
              Nos formations par outil IA
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900,
              letterSpacing: '-0.02em', color: '#0A0A0A',
              marginBottom: 14, lineHeight: 1.2,
            }}>
              Une formation dédiée pour chaque IA du marché
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 640, margin: '0 auto', lineHeight: 1.65 }}>
              ChatGPT, Microsoft Copilot, Google Gemini ou Claude : choisissez l'IA adaptée à votre environnement de travail, chaque programme est calibré pour vos équipes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 20,
          }}>
            {TOOL_HUBS.map(h => (
              <Link key={h.id} to={`/${h.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: 16,
                  padding: 28,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 220ms ease',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = h.color
                  e.currentTarget.style.boxShadow = `0 20px 40px -12px ${h.color}33`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = '#E5E7EB'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  {/* accent de couleur */}
                  <div aria-hidden style={{
                    position: 'absolute', top: 0, right: 0, width: 140, height: 140,
                    background: `radial-gradient(circle at top right, ${h.colorLight} 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />

                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: h.colorLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 18, position: 'relative', zIndex: 1,
                  }}>
                    <ToolLogo tool={h.id} size={30} color={h.id === 'copilot' ? undefined : h.color} />
                  </div>
                  <h3 style={{
                    fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800,
                    color: '#0A0A0A', marginBottom: 8,
                  }}>
                    Formation {h.tool}
                  </h3>
                  <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.65, marginBottom: 18, flex: 1 }}>
                    {h.pitch}
                  </p>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: h.color, fontSize: 14, fontWeight: 700,
                  }}>
                    Découvrir le programme <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ FORMATIONS PAR MÉTIER ════════════════════════ */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D97706', marginBottom: 10 }}>
              Nos formations par métier
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900,
              letterSpacing: '-0.02em', color: '#0A0A0A',
              marginBottom: 14, lineHeight: 1.2,
            }}>
              L'IA adaptée à votre fonction
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 640, margin: '0 auto', lineHeight: 1.65 }}>
              Formations IA construites autour des cas d'usage réels de votre métier, pas des tutoriels génériques.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: 16,
          }}>
            {METIERS.map(m => {
              const Icon = METIER_ICONS[m.slug]
              return (
                <Link key={m.slug} to={`/formation-ia-${m.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#fff', borderRadius: 12,
                    border: '1px solid #E5E7EB',
                    padding: '20px 22px',
                    display: 'flex', alignItems: 'center', gap: 14,
                    transition: 'all 180ms',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#2563EB'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(37,99,235,0.12)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: '#F3F4F6', border: '1px solid #E5E7EB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {Icon ? <Icon size={20} color="#0A0A0A" strokeWidth={1.75} /> : null}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.25, fontFamily: 'Nunito, sans-serif' }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: 12, color: '#6B7280', marginTop: 3, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {m.desc}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/formation-ia-par-metier" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: '#2563EB', fontSize: 15, fontWeight: 700,
              textDecoration: 'none',
            }}>
              Explorer toutes les formations métier <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════ POURQUOI MASTERIA ════════════════════════ */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#10B981', marginBottom: 10 }}>
              Pourquoi Masteria
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900,
              letterSpacing: '-0.02em', color: '#0A0A0A', lineHeight: 1.2,
            }}>
              Le partenaire de référence pour vos formations IA
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {[
              { Icon: BadgeCheck, color: '#10B981', title: 'Certifié Qualiopi',         desc: 'Organisme de formation certifié Qualiopi, gage de qualité reconnu par l\'État et condition indispensable au financement OPCO.' },
              { Icon: Wallet,     color: '#3B82F6', title: 'Finançable à 100 %',        desc: 'Toutes nos formations sont éligibles au financement OPCO. Nous vous accompagnons dans la constitution du dossier.' },
              { Icon: Rocket,     color: '#F59E0B', title: 'Résultats immédiats',       desc: 'Vos équipes repartent avec une bibliothèque de prompts et des cas d\'usage concrets, applicables dès le lendemain.' },
              { Icon: ShieldCheck,color: '#8B5CF6', title: 'Éthique & sécurité',        desc: 'Usage responsable de l\'IA : confidentialité RGPD, prévention des hallucinations, gouvernance en entreprise.' },
            ].map((p, i) => (
              <div key={i} style={{
                background: '#F9FAFB', borderRadius: 16,
                border: '1px solid #E5E7EB',
                padding: 28,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${p.color}1A`, border: `1px solid ${p.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <p.Icon size={22} color={p.color} strokeWidth={2} />
                </div>
                <h3 style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800,
                  color: '#0A0A0A', marginBottom: 10,
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ COMMENT ÇA MARCHE ════════════════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #111 100%)',
        color: '#fff', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)',
      }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 10 }}>
              Comment ça marche
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900,
              letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.2,
            }}>
              3 étapes pour former vos équipes
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { n: '01', title: 'Cadrage en 20 min',     desc: 'Nous échangeons sur votre contexte, vos outils, vos métiers. Vous recevez une proposition sous 24 h.' },
              { n: '02', title: '2 jours de formation',   desc: 'Programme 100 % adapté, animé par un formateur expert. Présentiel ou distanciel, inter ou intra.' },
              { n: '03', title: 'Suivi post-formation',   desc: 'Attestation Qualiopi, bibliothèque de prompts, support questions pendant 3 mois.' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 16, padding: 28,
                backdropFilter: 'blur(6px)',
              }}>
                <div style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900,
                  background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1, marginBottom: 18,
                }}>
                  {s.n}
                </div>
                <h3 style={{
                  fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800,
                  color: '#fff', marginBottom: 10,
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ CITATION FONDATEUR ════════════════════════ */}
      <section style={{ background: '#fff', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)',
          borderRadius: 24, padding: 'clamp(28px, 5vw, 56px)',
          border: '1px solid #E5E7EB',
          position: 'relative', overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(24px, 4vw, 56px)',
          alignItems: 'center',
        }}>
          <Quote size={120} color="#E5E7EB" style={{
            position: 'absolute', top: -20, right: -20, opacity: 0.6,
          }} />

          {/* Photo */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              aspectRatio: '4/5',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.18)',
              background: '#E5E7EB',
            }}>
              <img
                src="/assets/mathias-nizan.jpg"
                alt="Mathias Nizan, fondateur de Masteria, expert en formation IA"
                width="400" height="500"
                loading="lazy" decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Texte */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 18 }}>
              Le mot du fondateur
            </div>
            <p style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 700,
              color: '#0A0A0A', lineHeight: 1.35,
              marginBottom: 20, letterSpacing: '-0.01em',
            }}>
              « L'intelligence artificielle ne remplace pas les humains.<br />Elle <span style={{ color: '#2563EB' }}>décuple leur potentiel</span>. »
            </p>
            <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.75, margin: 0, marginBottom: 14 }}>
              Je suis convaincu que l'IA ne doit pas être réservée à une élite technologique. Elle peut, et doit, devenir un levier de transformation pour tous les professionnels, quels que soient leur métier ou leur niveau de départ.
            </p>
            <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.75, margin: 0, marginBottom: 14 }}>
              C'est pour cela que j'ai fondé <strong style={{ color: '#0A0A0A' }}>Masteria</strong>, un cabinet de conseil et centre de formation IA dédié à l'accompagnement des entreprises. Notre mission est claire : rendre l'intelligence artificielle accessible, concrète et directement utile sur le terrain.
            </p>
            <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.75, margin: 0, marginBottom: 22 }}>
              Chez Masteria, nous croyons en une IA <strong style={{ color: '#0A0A0A' }}>éthique, utile et profondément humaine</strong>.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 18, borderTop: '1px solid #E5E7EB' }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#0A0A0A' }}>Mathias Nizan</div>
                <div style={{ fontSize: 13, color: '#6B7280', marginTop: 2 }}>Fondateur de Masteria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ BANDEAU QUALIOPI ════════════════════════ */}
      <section style={{ background: '#fff', padding: 'clamp(24px, 5vw, 40px) clamp(18px, 4vw, 32px) clamp(48px, 8vw, 80px)' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)',
          borderRadius: 20,
          border: '1px solid #A7F3D0',
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(20px, 4vw, 40px)',
          textAlign: 'center',
        }}>
          <img
            src="/assets/qualiopi-logo.png"
            alt="Certification Qualiopi, Masteria centre de formation certifié"
            width="120" height="90"
            loading="lazy" decoding="async"
            style={{ height: 90, width: 'auto', flexShrink: 0 }}
          />
          <div style={{ maxWidth: 520, textAlign: 'left' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#059669', marginBottom: 8 }}>
              Organisme certifié
            </div>
            <h3 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 800,
              color: '#0A0A0A', margin: 0, marginBottom: 8, letterSpacing: '-0.01em',
            }}>
              Toutes nos formations sont certifiées Qualiopi
            </h3>
            <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
              Gage de qualité reconnu par l'État, condition indispensable au financement de vos formations via votre OPCO.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════ TÉMOIGNAGES ════════════════════════ */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F59E0B', marginBottom: 10 }}>
              Témoignages
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900,
              letterSpacing: '-0.02em', color: '#0A0A0A', lineHeight: 1.2,
            }}>
              Ce que disent nos apprenants
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 16,
                border: '1px solid #E5E7EB',
                padding: 28,
              }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[0,1,2,3,4].map(k => (
                    <Star key={k} size={14} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ fontSize: 15, color: '#1F2937', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>
                  « {t.quote} »
                </p>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#0A0A0A' }}>{t.name}</div>
                <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ FAQ ════════════════════════ */}
      <FAQSection items={homeFaq} title="Questions fréquentes sur nos formations IA" bg="#fff" />

      {/* ════════════════════════ CTA FINAL ════════════════════════ */}
      <section style={{
        background: '#0A0A0A', color: '#fff',
        padding: 'clamp(56px, 10vw, 96px) clamp(18px, 4vw, 32px)', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', width: 800, height: 800,
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 99, padding: '7px 16px', marginBottom: 24,
          }}>
            <Zap size={13} color="#FCD34D" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: '#E5E7EB' }}>
              Réponse sous 24 h ouvrées
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900,
            letterSpacing: '-0.02em', color: '#fff',
            marginBottom: 18, lineHeight: 1.15,
          }}>
            Prêt à former vos équipes à l'IA ?
          </h2>
          <p style={{ fontSize: 17, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 36 }}>
            Échangeons 20 minutes sur votre contexte. Nous vous proposons le programme adapté, sans engagement.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A',
              padding: '16px 32px', borderRadius: 10,
              textDecoration: 'none', fontSize: 16, fontWeight: 800,
            }}>
              Contacter notre équipe <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{
            display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap',
            marginTop: 24, fontSize: 13, color: '#6B7280',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <BadgeCheck size={14} color="#10B981" /> Certifié Qualiopi
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Wallet size={14} color="#3B82F6" /> Finançable OPCO
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={14} color="#F59E0B" /> France · Suisse · Belgique
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} color="#A78BFA" /> Réponse sous 24 h
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
