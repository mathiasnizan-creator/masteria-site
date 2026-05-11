import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { FadeIn, PrimaryBtn, SecBtn } from '../components/components'
import { FAQSection } from '../components/screens2'
import SEOHead from '../components/SEOHead'
import { getArticleBySlug, getRelatedArticles, BLOG_ARTICLES } from '../data/blog-articles'

const SITE_URL = 'https://www.master-ia.fr'

/* Convertit une date FR ("21 avril 2026") en ISO ("2026-04-21") */
const MONTHS_FR = {
  janvier: '01', février: '02', fevrier: '02', mars: '03', avril: '04',
  mai: '05', juin: '06', juillet: '07', août: '08', aout: '08',
  septembre: '09', octobre: '10', novembre: '11', décembre: '12', decembre: '12',
}
function toISODate(frDate) {
  if (!frDate) return undefined
  const m = String(frDate).toLowerCase().match(/(\d{1,2})\s+([a-zéû]+)\s+(\d{4})/)
  if (!m) return undefined
  const day = m[1].padStart(2, '0')
  const month = MONTHS_FR[m[2]]
  if (!month) return undefined
  return `${m[3]}-${month}-${day}`
}

/* ──────────────────────────────────────────────
 * Block renderers
 * ────────────────────────────────────────────── */

function Block({ b }) {
  switch (b.type) {
    case 'h2':
      return (
        <h2 style={{
          fontFamily: 'Nunito, sans-serif',
          fontSize: 'clamp(22px, 2.8vw, 28px)',
          fontWeight: 800,
          color: '#0A0A0A',
          letterSpacing: '-0.01em',
          lineHeight: 1.25,
          marginTop: 48,
          marginBottom: 18,
        }}>
          {b.text}
        </h2>
      )

    case 'h3':
      return (
        <h3 style={{
          fontFamily: 'Nunito, sans-serif',
          fontSize: 'clamp(17px, 2vw, 19px)',
          fontWeight: 800,
          color: '#0A0A0A',
          lineHeight: 1.35,
          marginTop: 28,
          marginBottom: 10,
        }}>
          {b.text}
        </h3>
      )

    case 'p':
      return (
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(15px, 1.7vw, 16.5px)',
            color: '#2A2A2A',
            lineHeight: 1.75,
            marginBottom: 16,
          }}
          dangerouslySetInnerHTML={{ __html: b.text }}
        />
      )

    case 'ul':
      return (
        <ul style={{ margin: '8px 0 20px', paddingLeft: 22 }}>
          {b.items.map((it, i) => (
            <li
              key={i}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(15px, 1.7vw, 16px)',
                color: '#2A2A2A',
                lineHeight: 1.7,
                marginBottom: 8,
              }}
              dangerouslySetInnerHTML={{ __html: it }}
            />
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol style={{ margin: '8px 0 20px', paddingLeft: 22 }}>
          {b.items.map((it, i) => (
            <li
              key={i}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(15px, 1.7vw, 16px)',
                color: '#2A2A2A',
                lineHeight: 1.7,
                marginBottom: 10,
              }}
              dangerouslySetInnerHTML={{ __html: it }}
            />
          ))}
        </ol>
      )

    case 'table':
      return (
        <div style={{
          margin: '16px 0 28px',
          border: '1px solid #E5E7EB',
          borderRadius: 10,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            minWidth: 520,
          }}>
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {b.headers.map((h, i) => (
                  <th key={i} style={{
                    textAlign: 'left',
                    padding: '12px 14px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    borderBottom: '1px solid #E5E7EB',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri} style={{ borderBottom: ri === b.rows.length - 1 ? 'none' : '1px solid #F1F5F9' }}>
                  {r.map((c, ci) => (
                    <td key={ci} style={{
                      padding: '11px 14px',
                      color: '#2A2A2A',
                      lineHeight: 1.55,
                      verticalAlign: 'top',
                    }}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'callout':
      return (
        <div style={{
          borderLeft: '3px solid #2563EB',
          background: '#F8FAFC',
          padding: '16px 20px',
          borderRadius: '0 10px 10px 0',
          margin: '22px 0',
        }}>
          {b.title && (
            <div style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 13,
              fontWeight: 800,
              color: '#2563EB',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              {b.title}
            </div>
          )}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: '#0A0A0A',
              lineHeight: 1.7,
              fontStyle: b.italic === false ? 'normal' : 'italic',
            }}
            dangerouslySetInnerHTML={{ __html: b.text }}
          />
        </div>
      )

    default:
      return null
  }
}

/* ──────────────────────────────────────────────
 * Main page
 * ────────────────────────────────────────────── */

export default function BlogArticlePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = getArticleBySlug(slug)

  // Stub article : redirect vers la page standalone
  if (article?.externalPath) {
    if (typeof window !== 'undefined') {
      window.location.replace(article.externalPath)
    }
    return null
  }

  if (!article) {
    return (
      <div style={{ padding: 'clamp(64px, 12vw, 120px) clamp(18px, 4vw, 32px)', textAlign: 'center' }}>
        <SEOHead
          title="Article introuvable | Masteria"
          description="Cet article n'existe pas ou a été déplacé."
          slug="blog"
        />
        <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 32, fontWeight: 800, marginBottom: 16 }}>
          Article introuvable
        </h1>
        <p style={{ color: '#6B7280', marginBottom: 24 }}>
          Cet article a peut-être été déplacé ou renommé.
        </p>
        <Link to="/blog" style={{ color: '#2563EB', fontWeight: 700 }}>
          ← Retour au blog
        </Link>
      </div>
    )
  }

  const url = `${SITE_URL}/blog/${article.slug}`
  const isoDate = toISODate(article.date)

  const articleData = {
    headline: article.title,
    author: 'Mathias Nizan',
    datePublished: article.datePublished || isoDate,
    dateModified: article.dateModified || article.datePublished || isoDate,
    tag: article.tag,
    image: article.ogImage ? `${SITE_URL}${article.ogImage}` : `${SITE_URL}/assets/logo-square.png`,
  }

  // Auto-generate HowTo schema when article contains an ordered list (ol)
  // → eligible for Google "Things to do" / HowTo rich result
  const olBlock = article.blocks?.find(b => b.type === 'ol' && Array.isArray(b.items) && b.items.length >= 3)
  const howToSchema = olBlock ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: article.title,
    description: article.metaDesc || article.excerpt,
    step: olBlock.items.map((item, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: typeof item === 'string' ? item.split('.')[0].slice(0, 90) : `Étape ${i + 1}`,
      text: typeof item === 'string' ? item : String(item),
    })),
    totalTime: article.readTime ? `PT${parseInt(article.readTime) || 10}M` : 'PT10M',
    inLanguage: 'fr-FR',
  } : null
  const extraSchemas = [
    ...(article.extraJsonLd || []),
    ...(howToSchema ? [howToSchema] : []),
  ]

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Blog', slug: 'blog' },
    { name: article.title, slug: `blog/${article.slug}` },
  ]

  const related = getRelatedArticles(article.slug, 3)

  return (
    <article>
      <SEOHead
        title={article.metaTitle}
        description={article.metaDesc}
        slug={`blog/${article.slug}`}
        type="article"
        articleData={articleData}
        breadcrumbs={breadcrumbs}
        faqItems={article.faq}
      />
      {extraSchemas.length > 0 && (
        <Helmet>
          {extraSchemas.map((schema, i) => (
            <script key={`extra-${i}`} type="application/ld+json">{JSON.stringify(schema)}</script>
          ))}
        </Helmet>
      )}

      {/* Hero */}
      <header style={{
        background: '#FAFAFA',
        borderBottom: '1px solid #EEF2F7',
        padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 32px) clamp(36px, 5vw, 56px)',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13,
            color: '#6B7280',
            marginBottom: 22,
          }}>
            <Link to="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ margin: '0 8px', color: '#CBD5E1' }}>›</span>
            <Link to="/blog" style={{ color: '#6B7280', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px', color: '#CBD5E1' }}>›</span>
            <span style={{ color: '#0A0A0A' }}>{article.tag}</span>
          </nav>

          <div style={{
            display: 'inline-flex',
            padding: '4px 12px',
            background: '#EFF6FF',
            border: '1px solid #DBEAFE',
            borderRadius: 999,
            marginBottom: 18,
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {article.tag}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(28px, 4.2vw, 44px)',
            fontWeight: 800,
            color: '#0A0A0A',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            {article.title}
          </h1>

          <div style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13,
            color: '#6B7280',
            marginBottom: 24,
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} /> {article.date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} /> {article.readTime} de lecture
            </span>
            <span>Par Mathias Nizan</span>
          </div>

          {/* Intro / chapô */}
          <div style={{
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 12,
            padding: 'clamp(18px, 3vw, 26px)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            color: '#0A0A0A',
            lineHeight: 1.7,
          }}>
            {article.intro}
          </div>
        </div>
      </header>

      {/* Body */}
      <section style={{ padding: 'clamp(36px, 5vw, 64px) clamp(20px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {article.blocks.map((b, i) => <Block key={i} b={b} />)}
        </div>
      </section>

      {/* FAQ */}
      {article.faq && article.faq.length > 0 && (
        <FAQSection items={article.faq} title="Questions fréquentes" bg="#F8FAFC" />
      )}

      {/* CTA */}
      {article.cta && (
        <section style={{ padding: 'clamp(40px, 5vw, 72px) clamp(20px, 4vw, 32px)', background: '#F5F3EE' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <FadeIn>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(24px, 3.4vw, 32px)',
                fontWeight: 800,
                color: '#0A0A0A',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 14,
              }}>
                {article.cta.title}
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(14px, 1.7vw, 16px)',
                color: '#6B7280',
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 560,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                {article.cta.desc}
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                {article.cta.buttons.map((btn, i) => (
                  btn.primary
                    ? <PrimaryBtn key={i} onClick={() => navigate(btn.href)}>{btn.label}</PrimaryBtn>
                    : <SecBtn key={i} onClick={() => navigate(btn.href)}>{btn.label}</SecBtn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Aller plus loin / Internal links */}
      {article.internalLinks && article.internalLinks.length > 0 && (
        <section style={{ padding: 'clamp(40px, 5vw, 64px) clamp(20px, 4vw, 32px)', background: '#fff', borderTop: '1px solid #F1F5F9' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>
              Aller plus loin
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(20px, 2.6vw, 24px)',
              fontWeight: 800,
              color: '#0A0A0A',
              letterSpacing: '-0.01em',
              marginBottom: 20,
            }}>
              Ressources liées
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {article.internalLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.href} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 18px',
                    background: '#FAFAFA',
                    border: '1px solid #E5E7EB',
                    borderRadius: 10,
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#0A0A0A',
                    textDecoration: 'none',
                    transition: 'background 150ms, border-color 150ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F1F5F9'; e.currentTarget.style.borderColor = '#CBD5E1' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#FAFAFA'; e.currentTarget.style.borderColor = '#E5E7EB' }}
                  >
                    <span>{l.label}</span>
                    <ArrowRight size={16} color="#2563EB" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Author bio */}
      <section style={{ padding: 'clamp(32px, 4vw, 48px) clamp(20px, 4vw, 32px)', background: '#F8FAFC' }}>
        <div style={{
          maxWidth: 720,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 20,
          alignItems: 'center',
          background: '#fff',
          border: '1px solid #E5E7EB',
          borderRadius: 14,
          padding: 'clamp(18px, 3vw, 24px)',
        }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 800,
            fontSize: 22,
            flexShrink: 0,
          }}>MN</div>
          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>
              Mathias Nizan
            </div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>
              Fondateur de Masteria, cabinet de conseil et centre de formation IA certifié Qualiopi. +1 500 professionnels formés.
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section style={{ padding: 'clamp(40px, 5vw, 72px) clamp(20px, 4vw, 32px)', background: '#fff', borderTop: '1px solid #F1F5F9' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10 }}>
              À lire aussi
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(22px, 2.8vw, 28px)',
              fontWeight: 800,
              color: '#0A0A0A',
              letterSpacing: '-0.01em',
              marginBottom: 28,
            }}>
              Autres articles Masteria
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
            }}>
              {related.map(a => (
                <Link key={a.slug} to={`/blog/${a.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: 12,
                    padding: 22,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 180ms, box-shadow 180ms, border-color 180ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#CBD5E1' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E5E7EB' }}
                  >
                    <div style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '3px 10px', background: '#F1F5F9', borderRadius: 999, marginBottom: 12 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{a.tag}</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: 16,
                      fontWeight: 800,
                      color: '#0A0A0A',
                      lineHeight: 1.35,
                      marginBottom: 10,
                      flex: 1,
                    }}>
                      {a.title}
                    </h3>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#6B7280' }}>
                      {a.date} · {a.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
