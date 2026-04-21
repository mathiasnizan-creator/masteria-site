import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '../components/components'
import { FAQSection, FAQ_GENERAL, FAQ_FORMATIONS } from '../components/screens2'
import SEOHead from '../components/SEOHead'
import { BLOG_ARTICLES } from '../data/blog-articles'
import { useIsMobile } from '../hooks/useMediaQuery'

export default function BlogListPage() {
  const isMobile = useIsMobile()
  const [filter, setFilter] = useState('Tout')

  // Build tag list dynamically from articles (stable order: Tout first, then unique tags in article order)
  const tags = ['Tout', ...Array.from(new Set(BLOG_ARTICLES.map(a => a.tag)))]
  const filtered = filter === 'Tout' ? BLOG_ARTICLES : BLOG_ARTICLES.filter(a => a.tag === filter)

  const [featured, ...rest] = filtered

  return (
    <div>
      <SEOHead
        title="Blog IA en entreprise | Conseils, guides et retours terrain | Masteria"
        description="Guides pratiques, financement OPCO, retours terrain et méthodes pour déployer l'IA en entreprise. Par Masteria, cabinet de conseil et centre de formation certifié Qualiopi."
        slug="blog"
      />

      {/* HERO clair */}
      <section style={{
        background: '#FAFAF7',
        borderBottom: '1px solid #E5E7EB',
        padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 32px)',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F97316', marginBottom: 12 }}>
            Blog & ressources
          </div>
          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(32px, 4.5vw, 46px)',
            fontWeight: 900,
            color: '#0A0A0A',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 14,
          }}>
            Comprendre l'IA en entreprise, sans jargon
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            color: '#4B5563',
            lineHeight: 1.7,
            maxWidth: 640,
            marginBottom: 28,
          }}>
            Guides pratiques, méthodes, retours terrain et conseils de financement. Des articles pensés pour les décideurs et les responsables formation qui veulent déployer l'IA dans leurs équipes.
          </p>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13,
                  fontWeight: filter === t ? 700 : 500,
                  background: filter === t ? '#0A0A0A' : '#fff',
                  color: filter === t ? '#fff' : '#475569',
                  border: filter === t ? 'none' : '1px solid #E5E7EB',
                  borderRadius: 999,
                  padding: '8px 16px',
                  cursor: 'pointer',
                  transition: 'all 150ms',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: 'clamp(48px, 6vw, 72px) clamp(20px, 4vw, 32px) clamp(56px, 6vw, 96px)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Featured */}
        {featured && (
          <FadeIn style={{ marginBottom: 32 }}>
            <Link to={`/blog/${featured.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#0A0A0A',
                borderRadius: 18,
                padding: 'clamp(24px, 4vw, 44px)',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'minmax(0,1fr) auto',
                gap: 'clamp(16px, 3vw, 32px)',
                alignItems: 'center',
              }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'inline-flex', padding: '4px 12px', background: '#1F2937', borderRadius: 999, marginBottom: 14 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      À la une · {featured.tag}
                    </span>
                  </div>
                  <h2 style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 'clamp(20px, 2.6vw, 26px)',
                    fontWeight: 800,
                    color: '#fff',
                    lineHeight: 1.25,
                    marginBottom: 12,
                  }}>
                    {featured.title}
                  </h2>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 14,
                    color: '#9CA3AF',
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}>
                    {featured.excerpt}
                  </p>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#6B7280' }}>
                    {featured.date} · {featured.readTime} de lecture
                  </div>
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 20px',
                  background: '#fff',
                  color: '#0A0A0A',
                  borderRadius: 10,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  Lire l'article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Grid of other articles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
          marginBottom: 64,
        }}>
          {rest.map((a, i) => (
            <FadeIn key={a.slug} delay={i * 60}>
              <Link to={`/blog/${a.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: 14,
                  border: '1px solid #E5E7EB',
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  height: '100%',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
                  e.currentTarget.style.borderColor = '#CBD5E1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#E5E7EB'
                }}
                >
                  <div style={{ display: 'inline-flex', padding: '4px 12px', background: '#F1F5F9', borderRadius: 999, marginBottom: 14, alignSelf: 'flex-start' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {a.tag}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 17,
                    fontWeight: 800,
                    color: '#0A0A0A',
                    lineHeight: 1.35,
                    marginBottom: 10,
                    flex: 1,
                  }}>
                    {a.title}
                  </h3>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13,
                    color: '#6B7280',
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}>
                    {a.excerpt}
                  </p>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#9CA3AF' }}>
                    {a.date} · {a.readTime}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FAQSection
          items={[...FAQ_GENERAL.slice(0, 3), ...FAQ_FORMATIONS.slice(3, 5)]}
          title="Questions fréquentes"
          bg="#fff"
        />
        </div>
      </div>
    </div>
  )
}
