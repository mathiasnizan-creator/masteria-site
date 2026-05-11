import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  ChevronDown, BadgeCheck, Wallet, MonitorSmartphone, Building2, MapPin,
  ShoppingCart, Sparkles,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ToolLogo from '../components/ToolLogo'
import { HUBS, SPOKES, METIERS } from '../data/seo-pages'
import { HUB_CONTENT } from '../data/hub-content'
import { GEO_CITIES, GEO_TOOLS, geoSlug } from '../data/geo-data'

const METIER_ICONS = {
  marketing:             Megaphone,
  'ressources-humaines': Users,
  rh:                    Users,
  finance:               TrendingUp,
  commercial:            Briefcase,
  juridique:             Scale,
  communication:         Radio,
  management:            Target,
  assistante:            CalendarCheck,
  seo:                   Search,
  'service-client':      Headphones,
  informatique:          Server,
  pedagogique:           GraduationCap,
  achats:                ShoppingCart,
  transverse:            Sparkles,
}

/* ── Composant accordéon FAQ ──────────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      borderBottom: '1px solid #E5E7EB',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4 }}>{q}</span>
        <ChevronDown
          size={20}
          strokeWidth={2}
          style={{
            flexShrink: 0, color: '#6B7280', marginTop: 2,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 200ms',
          }}
        />
      </button>
      {open && (
        <p style={{
          fontSize: 15, color: '#374151', lineHeight: 1.75,
          paddingBottom: 20, marginTop: -4,
        }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function HubPage() {
  const location = useLocation()
  const hubSlug = location.pathname.replace(/^\//, '')
  const hub = HUBS.find(h => h.slug === hubSlug)

  if (!hub) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1>Page non trouvée</h1>
        <Link to="/" style={{ color: '#2563EB' }}>Retour à l'accueil</Link>
      </div>
    )
  }

  const spokes      = SPOKES.filter(s => s.hubSlug === hub.slug)
  const hubContent  = HUB_CONTENT[hub.id] || {}
  const { why = [], programme = [], faq = [] } = hubContent

  // Nom court de l'outil (sans parenthèses) pour les titres H2 et CTA.
  // "Claude (Anthropic)" → "Claude IA" / "Microsoft Copilot" → "Microsoft 365 Copilot"
  const toolShort = (() => {
    const base = (hub.tool || '').replace(/\s*\(.*?\)\s*/g, '').trim()
    if (hub.id === 'claude-ia') return 'Claude IA'
    if (hub.id === 'copilot') return 'Microsoft 365 Copilot'
    if (hub.id === 'gemini') return 'Google Gemini'
    if (hub.id === 'mistral') return 'Mistral AI'
    return base
  })()

  const isSprintHub = hub.id === 'sprint-ia'
  const courseData = {
    name: hub.h1,
    description: hub.metaDesc,
    duration: isSprintHub ? 'PT3H' : 'PT14H',
    timeRequired: isSprintHub ? 'PT3H' : 'PT14H',
    price: isSprintHub ? '380' : '760',
    level: 'Intermédiaire',
    tool: hub.tool,
    audience: 'Professionnels en entreprise (B2B)',
    teaches: hubContent?.programme?.flatMap(p => p.items) || undefined,
    modules: hubContent?.programme?.flatMap((p, dayIdx) =>
      (p.items || []).map((item, i) => ({
        day: p.day || dayIdx + 1,
        title: item.split(':')[0]?.trim() || item.slice(0, 60),
        description: item,
      }))
    ) || undefined,
    about: `Formation ${hub.tool} pour les entreprises`,
    prerequisites: 'Aucun prérequis technique. Maîtrise des outils bureautiques courants.',
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: hub.tool || hub.h1, slug: hub.slug },
  ]

  // ItemList JSON-LD : catalogue des spokes rattachés à ce hub
  const spokeItemList = spokes.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `https://www.master-ia.fr/${hub.slug}#itemlist`,
    name: `Formations ${hub.tool || hub.h1} par métier et usage`,
    numberOfItems: spokes.length,
    itemListElement: spokes.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.master-ia.fr/${s.slug}`,
      name: s.h1 || s.metaTitle || s.slug,
    })),
  } : null

  return (
    <>
      <SEOHead
        title={hub.metaTitle}
        description={hub.metaDesc}
        slug={hub.slug}
        courseData={courseData}
        breadcrumbs={breadcrumbs}
        faqItems={faq}
        extraJsonLd={spokeItemList}
      />

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(8px)',
        padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <picture>
            <source
              type="image/webp"
              srcSet="/assets/logo-horizontal@400w.webp 400w, /assets/logo-horizontal@800w.webp 800w"
              sizes="120px"
            />
            <img
              src="/assets/logo-horizontal@400w.png"
              srcSet="/assets/logo-horizontal@400w.png 400w, /assets/logo-horizontal@800w.png 800w"
              sizes="120px"
              alt="Masteria, Centre de formation IA certifié Qualiopi"
              width="400" height="225"
              loading="lazy" decoding="async"
              style={{ height: 36, width: 'auto', display: 'block', filter: 'invert(1)' }}
            />
          </picture>
        </Link>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <Link to="/formation-intelligence-artificielle" style={{ color: '#fff', textDecoration: 'none', fontSize: 15 }}>Formations</Link>
          <Link to="/conseil-intelligence-artificielle" style={{ color: '#fff', textDecoration: 'none', fontSize: 15 }}>Conseil IA</Link>
          <Link to="/contact" style={{
            background: '#2563EB', color: '#fff', padding: '10px 20px',
            borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600,
          }}>Contacter notre équipe</Link>
        </div>
      </nav>

      {/* HERO clair */}
      <section style={{
        paddingTop: 120, paddingBottom: 80, paddingLeft: 40, paddingRight: 40,
        background: '#FAFAF7', color: '#0A0A0A', textAlign: 'center',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: hub.colorLight, color: hub.color,
          padding: '6px 16px', borderRadius: 99, fontSize: 14, fontWeight: 700,
          marginBottom: 24,
        }}>
          <ToolLogo tool={hub.id} size={18} color={hub.color} />
          <span>{hub.tool}</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          fontFamily: 'Nunito, sans-serif', marginBottom: 24, lineHeight: 1.1,
          color: '#0A0A0A', letterSpacing: '-0.02em',
        }}>
          {hub.h1}
        </h1>
        <p style={{ fontSize: 18, color: '#4B5563', maxWidth: 680, margin: '0 auto 16px', lineHeight: 1.7 }}>
          {hub.intro}
        </p>
        <p style={{ fontSize: 16, color: hub.color, maxWidth: 580, margin: '0 auto 40px', fontStyle: 'italic', fontWeight: 600 }}>
          {hub.pitch}
        </p>
        <Link to="/contact" style={{
          display: 'inline-block', background: hub.color, color: '#fff',
          padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
          fontSize: 16, fontWeight: 700, boxShadow: `0 4px 12px ${hub.color}30`,
        }}>
          Contacter notre équipe
        </Link>

        {/* Badges réassurance */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 40 }}>
          {[
            { icon: BadgeCheck,        label: 'Certifié Qualiopi' },
            { icon: Wallet,            label: 'Finançable OPCO' },
            { icon: MonitorSmartphone, label: 'Présentiel & distanciel' },
            { icon: Building2,         label: 'Intra ou inter-entreprises' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Icon size={15} strokeWidth={2.2} style={{ color: hub.color }} />
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* BADGES DE CONFIANCE, chiffres clés */}
      <section style={{
        background: '#fff', padding: '32px 40px',
        display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap',
        borderBottom: '1px solid #E5E7EB',
      }}>
        {[
          { label: '+1 500 formés', sub: 'depuis 2022' },
          { label: '100% finançable', sub: 'via OPCO' },
          { label: '98% satisfaction', sub: 'taux moyen' },
          { label: 'Qualiopi', sub: 'certifié' },
        ].map(b => (
          <div key={b.label} style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: 20, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{b.label}</div>
            <div style={{ fontSize: 13, color: '#4B5563' }}>{b.sub}</div>
          </div>
        ))}
      </section>

      {/* POURQUOI SE FORMER */}
      {why.length > 0 && (
        <section style={{ padding: '80px 40px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
              fontFamily: 'Nunito, sans-serif', marginBottom: 12, color: '#0A0A0A',
            }}>
              Pourquoi former vos équipes à {toolShort} ?
            </h2>
            <p style={{ color: '#6B7280', fontSize: 16, marginBottom: 48, maxWidth: 600 }}>
              Des bénéfices concrets, mesurables dès le retour en poste.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 28,
            }}>
              {why.map((item, i) => (
                <div key={i} style={{
                  background: '#F9FAFB', borderRadius: 12, padding: '28px 28px 32px',
                  borderLeft: `4px solid ${hub.color}`,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8, background: hub.colorLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <span style={{ fontSize: 16, fontWeight: 900, color: hub.color }}>{i + 1}</span>
                  </div>
                  <h3 style={{
                    fontSize: 15, fontWeight: 800, color: '#0A0A0A',
                    fontFamily: 'Nunito, sans-serif', marginBottom: 10, lineHeight: 1.35,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GRILLE DES SPOKES */}
      <section style={{ padding: '80px 40px', background: why.length ? '#F9FAFB' : '#fff', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800,
          fontFamily: 'Nunito, sans-serif', marginBottom: 12, color: '#0A0A0A',
        }}>
          {toolShort} adapté à chaque métier
        </h2>
        <p style={{ color: '#6B7280', fontSize: 16, marginBottom: 48, maxWidth: 600 }}>
          Chaque formation est construite autour des cas d'usage réels de votre fonction.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {spokes.map(spoke => {
            const metierData = METIERS.find(m => m.slug === spoke.metierSlug)
            // Nom court de l'outil : on retire les parenthèses (ex: "Claude (Anthropic)" → "Claude")
            // et les suffixes éditeurs ("Microsoft Copilot" reste, "Google Gemini" reste).
            const toolShort = (hub.tool || '').replace(/\s*\(.*?\)\s*/g, '').trim()
            // Card title format clean : "Formation [Outil] [Métier]"
            // Ex: "Formation Claude IA pour les équipes Finance"
            let cardTitle = `Formation ${toolShort} pour les équipes ${spoke.metier}`
            if (hub.id === 'sprint-ia') {
              const m = spoke.h1?.match(/^Sprint IA\s+(.+?)\s*,/)
              cardTitle = m ? `Sprint IA ${m[1]}` : cardTitle
            }
            // Pour Claude IA, on garde "Claude IA" pas juste "Claude"
            if (hub.id === 'claude-ia') {
              cardTitle = `Formation Claude IA pour les équipes ${spoke.metier}`
            }
            return (
              <Link
                key={spoke.slug}
                to={`/${spoke.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  border: '2px solid #E5E7EB',
                  borderRadius: 12, padding: 28,
                  background: '#fff',
                  transition: 'box-shadow 0.2s',
                  cursor: 'pointer',
                  position: 'relative',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: spoke.toolColorLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 14,
                  }}>
                    {(() => { const Icon = METIER_ICONS[spoke.metierSlug]; return Icon ? <Icon size={22} color={spoke.toolColor} strokeWidth={1.75} /> : null })()}
                  </div>
                  <h3 style={{
                    fontSize: 18, fontWeight: 800, color: '#0A0A0A',
                    fontFamily: 'Nunito, sans-serif', marginBottom: 8,
                  }}>
                    {cardTitle}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6, marginBottom: 16 }}>
                    {metierData?.desc || spoke.intro?.slice(0, 120) + '…'}
                  </p>
                  <span style={{ color: spoke.toolColor, fontWeight: 700, fontSize: 14 }}>
                    Voir le programme →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* SECTION ÉQUIPE PLURIDISCIPLINAIRE — formation sur mesure */}
      <section style={{
        padding: 'clamp(56px, 8vw, 88px) clamp(18px, 4vw, 40px)',
        background: '#FAFAF7',
        borderTop: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{
            background: '#fff',
            border: `2px solid ${hub.colorLight}`,
            borderLeft: `6px solid ${hub.color}`,
            borderRadius: 16,
            padding: 'clamp(28px, 4vw, 48px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
            alignItems: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: hub.colorLight, color: hub.color,
                padding: '6px 14px', borderRadius: 99,
                fontSize: 12, fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                <Users size={14} />
                Formation sur mesure
              </div>
              <h2 style={{
                fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 900,
                fontFamily: 'Nunito, sans-serif', color: '#0A0A0A',
                lineHeight: 1.25, marginBottom: 16, letterSpacing: '-0.01em',
              }}>
                Vous souhaitez réaliser une formation {toolShort} pour une équipe pluridisciplinaire&nbsp;?
              </h2>
              <p style={{
                fontSize: 16, color: '#4B5563', lineHeight: 1.65, marginBottom: 18,
              }}>
                Vos équipes mêlent plusieurs métiers&nbsp;? Marketing, RH, finance, commerciaux,
                opérationnels qui vont utiliser {toolShort} ensemble&nbsp;? Notre équipe construit
                un programme sur mesure mêlant les cas d'usage de chaque profil, sur la base de
                vos vrais documents, processus et outils.
              </p>
              <ul style={{
                listStyle: 'none', padding: 0, margin: '0 0 24px',
                display: 'flex', flexDirection: 'column', gap: 8,
              }}>
                {[
                  'Programme co-construit avec vos managers métier',
                  'Cas d\'usage adaptés à chaque profil dans le groupe',
                  'Bibliothèque de prompts partagée par toute l\'équipe',
                  'Animation par un formateur Masteria spécialisé',
                ].map(item => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    fontSize: 14.5, color: '#374151', lineHeight: 1.55,
                  }}>
                    <BadgeCheck size={18} color={hub.color} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: hub.colorLight,
                borderRadius: 12,
                padding: 28,
                marginBottom: 20,
              }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: hub.color, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
                  Tarif intra-entreprises
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', lineHeight: 1 }}>
                  1 500 €<span style={{ fontSize: 16, color: '#6B7280', fontWeight: 600 }}> / jour</span>
                </div>
                <div style={{ fontSize: 13, color: '#6B7280', marginTop: 6 }}>
                  Pour un groupe jusqu'à 12 personnes · Finançable OPCO
                </div>
              </div>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: hub.color, color: '#fff',
                padding: '14px 28px', borderRadius: 10,
                textDecoration: 'none', fontSize: 15, fontWeight: 800,
                boxShadow: `0 4px 16px ${hub.color}40`,
              }}>
                Contacter notre équipe
                <span style={{ fontSize: 16 }}>→</span>
              </Link>
              <div style={{ fontSize: 12, color: '#6B7280', marginTop: 12 }}>
                Réponse sous 24 h ouvrées
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA MILIEU DE PAGE */}
      <section style={{
        padding: '48px 40px',
        background: `linear-gradient(135deg, ${hub.color} 0%, ${hub.color}dd 100%)`,
        color: '#fff',
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{
              fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800,
              fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25,
            }}>
              Envie de former vos équipes à {toolShort} ?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Réponse sous 24h · Programme sur mesure · Inter ou intra-entreprises
            </p>
          </div>
          <Link to="/contact" style={{
            background: '#fff', color: hub.color, padding: '14px 28px',
            borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 800,
            whiteSpace: 'nowrap',
          }}>
            Contacter notre équipe →
          </Link>
        </div>
      </section>

      {/* PROGRAMME TYPE */}
      {programme.length > 0 && (
        <section style={{ padding: '80px 40px', background: '#F5F3EE', color: '#0A0A0A' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
              fontFamily: 'Nunito, sans-serif', marginBottom: 12,
            }}>
              Programme de formation {toolShort}
            </h2>
            <p style={{ color: '#6B7280', fontSize: 16, marginBottom: 48, maxWidth: 600 }}>
              {isSprintHub ? '3 heures · Format webinar ou présentiel · Certifié Qualiopi · Déployable à grande échelle' : '2 jours · 14 heures · Certifié Qualiopi · Adapté à votre secteur'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 24 }}>
              {programme.map((day, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: 12, padding: '28px 28px 32px',
                  borderTop: `3px solid ${hub.color}`,
                  border: '1px solid #E5E7EB',
                }}>
                  <div style={{
                    display: 'inline-block', background: hub.colorLight, color: hub.color,
                    fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 99,
                    marginBottom: 14,
                  }}>
                    Jour {day.day}
                  </div>
                  <h3 style={{
                    fontSize: 15, fontWeight: 800, color: '#0A0A0A',
                    fontFamily: 'Nunito, sans-serif', marginBottom: 18, lineHeight: 1.35,
                  }}>
                    {day.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {day.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: hub.color, fontWeight: 900, flexShrink: 0, marginTop: 1 }}>›</span>
                        <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                background: '#2563EB', color: '#fff', padding: '14px 28px',
                borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700,
              }}>
                Contacter notre équipe
              </Link>
              <Link to="/contact" style={{
                background: 'transparent', color: '#6B7280', padding: '14px 28px',
                borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600,
                border: '1px solid #374151',
              }}>
                Questions sur le financement OPCO
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section style={{ padding: '80px 40px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
              fontFamily: 'Nunito, sans-serif', marginBottom: 12, color: '#0A0A0A',
            }}>
              Questions fréquentes sur la formation {toolShort}
            </h2>
            <p style={{ color: '#6B7280', fontSize: 16, marginBottom: 40, maxWidth: 580 }}>
              Tout ce que vous devez savoir avant de vous inscrire.
            </p>
            <div>
              {faq.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MAILLAGE INTERNE, autres formations */}
      <section style={{ padding: '48px 40px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 16 }}>
            Autres formations IA disponibles
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {HUBS.filter(h => h.id !== hub.id && h.id !== 'metiers').map(h => (
              <Link key={h.slug} to={`/${h.slug}`} style={{
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8,
                padding: '10px 16px', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 14, fontWeight: 600, color: '#374151',
                transition: 'border-color 150ms',
              }}>
                <ToolLogo tool={h.id} size={16} color={h.color} />
                Formation {h.tool}
              </Link>
            ))}
            <Link to="/formation-intelligence-artificielle" style={{
              background: '#fff', border: '1px solid #E5E7EB', borderRadius: 8,
              padding: '10px 16px', textDecoration: 'none',
              fontSize: 14, fontWeight: 600, color: '#374151',
            }}>
              Formations par métier →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION VILLES */}
      {(() => {
        const geoTool = GEO_TOOLS.find(t => t.hubSlug === hub.slug)
        if (!geoTool) return null
        return (
          <section style={{ padding: '64px 32px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
            <div style={{ maxWidth: 1080, margin: '0 auto' }}>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Formations en ville</div>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 900, color: '#0A0A0A', letterSpacing: '-0.01em', marginBottom: 10 }}>
                  Formation {geoTool.shortName} dans votre ville
                </h2>
                <p style={{ fontSize: 15, color: '#6B7280', maxWidth: 560 }}>
                  Sessions en présentiel ou distanciel partout en France. Certifié Qualiopi, finançable via votre OPCO local.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
                {GEO_CITIES.map(city => (
                  <Link
                    key={city.slug}
                    to={`/${geoSlug(geoTool.slug, city.slug)}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      background: '#F9FAFB', border: '1px solid #E5E7EB',
                      borderRadius: 10, padding: '14px 16px',
                      textDecoration: 'none',
                      transition: 'border-color 150ms, box-shadow 150ms',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(37,99,235,0.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <MapPin size={15} color="#2563EB" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0A0A0A' }}>{city.name}</div>
                      <div style={{ fontSize: 11.5, color: '#6B7280' }}>{city.region}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{
                marginTop: 20,
                display: 'flex', alignItems: 'center', gap: 14,
                background: '#EFF6FF', border: '1px solid #BFDBFE',
                borderRadius: 12, padding: '16px 20px',
              }}>
                <MapPin size={18} color="#2563EB" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: 14, color: '#1E40AF', lineHeight: 1.55 }}>
                  <strong>Votre ville ne figure pas dans la liste ?</strong> Nos formateurs se déplacent dans toute la France, en Belgique et en Suisse. Nous intervenons directement dans vos locaux, où que vous soyez.{' '}
                  <Link to="/contact" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'underline' }}>Contactez-nous pour un devis.</Link>
                </p>
              </div>
            </div>
          </section>
        )
      })()}

      {/* CTA BAS DE PAGE */}
      <section style={{
        background: '#F5F3EE', color: '#0A0A0A',
        padding: '80px 40px', textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900,
          fontFamily: 'Nunito, sans-serif', marginBottom: 16,
        }}>
          Pas encore sûr de quelle formation vous convient ?
        </h2>
        <p style={{ color: '#6B7280', fontSize: 16, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          Échangeons 20 minutes pour identifier le programme idéal pour vos équipes.
        </p>
        <Link to="/contact" style={{
          display: 'inline-block', background: '#2563EB', color: '#fff',
          padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
          fontSize: 16, fontWeight: 700,
        }}>
          Contacter notre équipe
        </Link>
      </section>
    </>
  )
}
