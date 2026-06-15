import { useState, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, X, SlidersHorizontal, RotateCcw } from 'lucide-react'
import { FadeIn } from '../components/components'
import { FAQSection, FAQ_GENERAL, FAQ_FORMATIONS } from '../components/screens2'
import SEOHead from '../components/SEOHead'
import { BLOG_ARTICLES } from '../data/blog-articles'
import { getTagColor } from '../data/tag-colors'
import { META_CATEGORIES, getCategoryForTag } from '../data/blog-categories'
import { useIsMobile } from '../hooks/useMediaQuery'

const SORT_OPTIONS = [
  { id: 'recent',  label: 'Plus récents' },
  { id: 'oldest',  label: 'Plus anciens' },
  { id: 'short',   label: 'Plus courts'  },
  { id: 'long',    label: 'Plus longs'   },
]

function parseReadMin(rt) {
  const m = String(rt || '').match(/(\d+)/)
  return m ? parseInt(m[1], 10) : 0
}

function TagChip({ tag, size = 'sm' }) {
  const c = getTagColor(tag)
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: size === 'sm' ? '3px 10px' : '4px 12px',
      background: c.bg,
      border: `1px solid ${c.border}`,
      borderRadius: 999,
      fontSize: size === 'sm' ? 10 : 11,
      fontWeight: 700,
      color: c.text,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontFamily: 'DM Sans, sans-serif',
      flexShrink: 0,
    }}>
      {tag}
    </span>
  )
}

function CategoryCard({ category, count, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)
  const Icon = category.icon
  const c = category.color
  const focused = isActive || hovered

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textAlign: 'left',
        background: isActive ? c.text : (focused ? c.bg : '#fff'),
        border: `1px solid ${isActive ? c.text : (focused ? c.border : '#E5E7EB')}`,
        borderRadius: 14,
        padding: '16px 18px',
        cursor: 'pointer',
        transition: 'all 180ms ease',
        transform: focused && !isActive ? 'translateY(-2px)' : 'none',
        boxShadow: focused && !isActive ? '0 6px 20px rgba(0,0,0,0.06)' : 'none',
        fontFamily: 'DM Sans, sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        width: 40, height: 40,
        flexShrink: 0,
        borderRadius: 10,
        background: isActive ? 'rgba(255,255,255,0.18)' : c.bg,
        border: isActive ? '1px solid rgba(255,255,255,0.22)' : `1px solid ${c.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 180ms ease',
      }}>
        <Icon size={19} color={isActive ? '#fff' : c.text} strokeWidth={2.2} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 14, fontWeight: 700,
          color: isActive ? '#fff' : '#0A0A0A',
          lineHeight: 1.2, marginBottom: 3,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {category.label}
        </div>
        <div style={{
          fontSize: 12,
          color: isActive ? 'rgba(255,255,255,0.7)' : '#6B7280',
          lineHeight: 1.3,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ fontWeight: 600, color: isActive ? '#fff' : c.text }}>
            {count}
          </span>
          <span>article{count > 1 ? 's' : ''}</span>
        </div>
      </div>
    </button>
  )
}

function ArticleCard({ a, index }) {
  const [hovered, setHovered] = useState(false)
  const [newCutoff] = useState(() => Date.now() - 45 * 24 * 60 * 60 * 1000)
  const c = getTagColor(a.tag)
  const isNew = a.datePublished && new Date(a.datePublished).getTime() > newCutoff

  return (
    <FadeIn delay={Math.min(index * 35, 240)}>
      <Link
        to={a.externalPath || `/blog/${a.slug}`}
        style={{ textDecoration: 'none', height: '100%', display: 'block' }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: '#fff',
            borderRadius: 16,
            border: `1px solid ${hovered ? c.border : '#E5E7EB'}`,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
            transform: hovered ? 'translateY(-4px)' : 'none',
            boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)' : '0 1px 3px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{
            height: 3,
            background: c.bar,
            opacity: hovered ? 1 : 0.45,
            transition: 'opacity 220ms ease',
          }} />

          <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
              <TagChip tag={a.tag} />
              {isNew && (
                <span style={{
                  fontSize: 9, fontWeight: 800, color: '#fff',
                  background: '#F97316', padding: '2px 7px',
                  borderRadius: 999, letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
                }}>
                  Nouveau
                </span>
              )}
            </div>

            <h3 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 16,
              fontWeight: 800,
              color: hovered ? c.text : '#0A0A0A',
              lineHeight: 1.35,
              marginBottom: 10,
              flex: 1,
              transition: 'color 180ms ease',
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

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 14,
              borderTop: '1px solid #F1F5F9',
            }}>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 12,
                color: '#9CA3AF',
                display: 'flex', gap: 10,
              }}>
                <span>{a.date}</span>
                <span>·</span>
                <span>{a.readTime}</span>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 4,
                fontSize: 12, fontWeight: 700, color: c.text,
                fontFamily: 'DM Sans, sans-serif',
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
                transition: 'opacity 200ms ease, transform 200ms ease',
              }}>
                Lire <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  )
}

function FeaturedCard({ article }) {
  const [hovered, setHovered] = useState(false)
  const isMobile = useIsMobile()
  const c = getTagColor(article.tag)

  return (
    <Link to={article.externalPath || `/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#0A0A0A',
          borderRadius: 20,
          padding: 'clamp(28px, 4vw, 48px)',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
          gap: 'clamp(24px, 4vw, 40px)',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 220ms ease, box-shadow 220ms ease',
          transform: hovered ? 'scale(1.008)' : 'none',
          boxShadow: hovered ? '0 24px 64px rgba(0,0,0,0.22)' : '0 4px 16px rgba(0,0,0,0.12)',
        }}
      >
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 360, height: 360,
          background: `radial-gradient(circle, ${c.bar}30 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -40, left: 40,
          width: 200, height: 200,
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', padding: '4px 12px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 999, fontSize: 10, fontWeight: 700,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              À la une
            </span>
            <TagChip tag={article.tag} />
          </div>

          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 900, color: '#fff',
            letterSpacing: '-0.025em', lineHeight: 1.2,
            marginBottom: 14,
          }}>
            {article.title}
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14, color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7, marginBottom: 20, maxWidth: 580,
          }}>
            {article.excerpt}
          </p>

          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 12, color: 'rgba(255,255,255,0.35)',
          }}>
            {article.date} · {article.readTime} de lecture
          </div>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 22px',
          background: hovered ? '#F97316' : '#fff', color: '#0A0A0A',
          borderRadius: 12,
          fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 700,
          whiteSpace: 'nowrap', flexShrink: 0,
          transition: 'background 200ms ease, transform 200ms ease',
          transform: hovered ? 'scale(1.04)' : 'none',
          alignSelf: isMobile ? 'flex-start' : 'center',
        }}>
          Lire l'article <ArrowRight size={15} />
        </div>
      </div>
    </Link>
  )
}

export default function BlogListPage() {
  const isMobile = useIsMobile()
  const [activeCategories, setActiveCategories] = useState(() => new Set())
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('recent')
  const [sortOpen, setSortOpen] = useState(false)
  const searchRef = useRef(null)

  const toggleCategory = (id) => {
    setActiveCategories(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  /* Compteurs par méta-catégorie */
  const categoryCounts = useMemo(() => {
    const counts = { all: BLOG_ARTICLES.length }
    META_CATEGORIES.forEach(cat => { counts[cat.id] = 0 })
    BLOG_ARTICLES.forEach(a => {
      const cat = getCategoryForTag(a.tag)
      if (cat) counts[cat.id] += 1
    })
    return counts
  }, [])

  /* Filtre + recherche + tri */
  const filtered = useMemo(() => {
    let result = BLOG_ARTICLES
    if (activeCategories.size > 0) {
      result = result.filter(a => {
        const cat = getCategoryForTag(a.tag)
        return cat && activeCategories.has(cat.id)
      })
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(a =>
        a.title.toLowerCase().includes(q) ||
        (a.excerpt || '').toLowerCase().includes(q) ||
        a.tag.toLowerCase().includes(q)
      )
    }
    result = [...result]
    switch (sort) {
      case 'oldest':
        result.sort((a, b) => (a.datePublished || '').localeCompare(b.datePublished || ''))
        break
      case 'short':
        result.sort((a, b) => parseReadMin(a.readTime) - parseReadMin(b.readTime))
        break
      case 'long':
        result.sort((a, b) => parseReadMin(b.readTime) - parseReadMin(a.readTime))
        break
      case 'recent':
      default:
        result.sort((a, b) => (b.datePublished || '').localeCompare(a.datePublished || ''))
    }
    return result
  }, [activeCategories, search, sort])

  const isFiltered = activeCategories.size > 0 || search.trim().length > 0 || sort !== 'recent'
  const showFeatured = activeCategories.size === 0 && !search.trim() && sort === 'recent' && filtered.length > 0
  const [featured, ...rest] = filtered

  const resetAll = () => {
    setActiveCategories(new Set())
    setSearch('')
    setSort('recent')
  }

  const activeCats = META_CATEGORIES.filter(c => activeCategories.has(c.id))

  /* Suggestions de catégorie quand 0 résultat */
  const suggestions = useMemo(() => {
    if (filtered.length > 0) return []
    return META_CATEGORIES
      .filter(c => categoryCounts[c.id] > 0 && !activeCategories.has(c.id))
      .sort((a, b) => categoryCounts[b.id] - categoryCounts[a.id])
      .slice(0, 3)
  }, [filtered.length, categoryCounts, activeCategories])

  return (
    <div>
      <SEOHead
        title="Blog IA en entreprise : guides et financement | Masteria"
        description="Guides pratiques, comparatifs des outils IA, financement OPCO et retours terrain pour déployer l'IA dans vos équipes. Par Masteria, certifié Qualiopi."
        slug="blog"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Blog', slug: 'blog' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog Masteria : IA en entreprise',
        url: 'https://www.master-ia.fr/blog',
        publisher: { '@type': 'Organization', name: 'Masteria', url: 'https://www.master-ia.fr' },
        blogPost: BLOG_ARTICLES.filter(a => !a.externalPath).map(a => ({
          '@type': 'BlogPosting',
          headline: a.title,
          url: `https://www.master-ia.fr/blog/${a.slug}`,
          datePublished: a.datePublished,
          dateModified: a.dateModified || a.datePublished,
          author: { '@type': 'Person', name: a.author || 'Mathias Nizan' },
        })),
      }) }} />

      {/* ── HERO ── */}
      <section style={{
        background: '#FAFAF7',
        padding: 'clamp(56px, 7vw, 96px) clamp(20px, 4vw, 32px) clamp(48px, 6vw, 72px)',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid #EEEAE0',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(10,10,10,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.22)',
            borderRadius: 999, padding: '5px 14px', marginBottom: 22,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316' }} />
            <span style={{
              fontSize: 11, fontWeight: 700, color: '#C2410C',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Blog & ressources
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 900, color: '#0A0A0A',
            letterSpacing: '-0.025em', lineHeight: 1.1,
            marginBottom: 16, maxWidth: 760,
          }}>
            Blog IA en entreprise : formations,{' '}
            <span style={{ color: '#F97316' }}>financement et retours terrain</span>
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            color: '#4B5563',
            lineHeight: 1.7, maxWidth: 560, marginBottom: 36,
          }}>
            Guides pratiques, méthodes, retours terrain et conseils de financement OPCO. Tous nos contenus pour déployer l'IA dans vos équipes, par les formateurs Masteria.
          </p>

          <div style={{ display: 'flex', gap: 32, marginBottom: 36, flexWrap: 'wrap' }}>
            {[
              { value: BLOG_ARTICLES.length, label: 'articles' },
              { value: META_CATEGORIES.length, label: 'thématiques' },
              { value: '1 500+', label: 'pros formés' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 900, color: '#0A0A0A', lineHeight: 1,
                }}>
                  {value}
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 12, color: '#9CA3AF',
                  marginTop: 4, letterSpacing: '0.04em',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 12, padding: '11px 16px',
            maxWidth: 460,
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <Search size={16} color="#9CA3AF" style={{ flexShrink: 0 }} />
            <input
              ref={searchRef}
              type="text"
              placeholder="Rechercher un article…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                flex: 1, border: 'none', background: 'transparent',
                fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                color: '#0A0A0A', outline: 'none',
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                aria-label="Effacer la recherche"
              >
                <X size={14} color="#9CA3AF" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── CATEGORY CARDS ── */}
      <section style={{
        background: '#fff',
        padding: 'clamp(36px, 5vw, 56px) clamp(20px, 4vw, 32px) clamp(28px, 4vw, 40px)',
        borderBottom: '1px solid #F1F5F9',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          {/* Header row */}
          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            gap: 16, marginBottom: 20, flexWrap: 'wrap',
          }}>
            <div>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#9CA3AF',
                fontFamily: 'DM Sans, sans-serif', marginBottom: 6,
              }}>
                Explorer par thématique
              </div>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(20px, 2.6vw, 24px)',
                fontWeight: 800, color: '#0A0A0A',
                margin: 0, letterSpacing: '-0.01em',
              }}>
                Choisissez votre angle d'entrée
              </h2>
            </div>

            {/* Tout / Reset + hint */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                color: '#9CA3AF', fontStyle: 'italic',
              }}>
                Cumulez plusieurs thématiques
              </span>
              <button
                onClick={() => setActiveCategories(new Set())}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13, fontWeight: activeCategories.size === 0 ? 700 : 600,
                  background: activeCategories.size === 0 ? '#0A0A0A' : 'transparent',
                  color: activeCategories.size === 0 ? '#fff' : '#374151',
                  border: `1px solid ${activeCategories.size === 0 ? '#0A0A0A' : '#E5E7EB'}`,
                  borderRadius: 999, padding: '7px 14px',
                  cursor: 'pointer', transition: 'all 150ms ease',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}
              >
                Tous
                <span style={{
                  fontSize: 10, fontWeight: 600,
                  background: activeCategories.size === 0 ? 'rgba(255,255,255,0.2)' : '#F1F5F9',
                  color: activeCategories.size === 0 ? '#fff' : '#9CA3AF',
                  borderRadius: 99, padding: '1px 5px', lineHeight: 1.5,
                }}>
                  {BLOG_ARTICLES.length}
                </span>
              </button>
            </div>
          </div>

          {/* Category grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? 'repeat(auto-fill, minmax(160px, 1fr))'
              : 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 12,
          }}>
            {META_CATEGORIES.map(cat => (
              <CategoryCard
                key={cat.id}
                category={cat}
                count={categoryCounts[cat.id] || 0}
                isActive={activeCategories.has(cat.id)}
                onClick={() => toggleCategory(cat.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLBAR : search recall + sort + reset ── */}
      <section style={{
        background: '#fff',
        padding: '14px clamp(20px, 4vw, 32px)',
        borderBottom: '1px solid #F1F5F9',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255,255,255,0.95)',
      }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          display: 'flex', alignItems: 'center',
          gap: 12, flexWrap: 'wrap',
        }}>
          {/* Inline mini search */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#F8FAFC',
            border: '1px solid #E5E7EB',
            borderRadius: 10, padding: '7px 12px',
            flex: '1 1 240px', maxWidth: 360,
          }}>
            <Search size={14} color="#9CA3AF" style={{ flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Rechercher…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                flex: 1, border: 'none', background: 'transparent',
                fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                color: '#0A0A0A', outline: 'none', minWidth: 0,
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                aria-label="Effacer la recherche"
              >
                <X size={12} color="#9CA3AF" />
              </button>
            )}
          </div>

          {/* Active filter chips (one per selected category) */}
          {activeCats.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              {activeCats.map(cat => (
                <span key={cat.id} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: cat.color.bg,
                  border: `1px solid ${cat.color.border}`,
                  color: cat.color.text,
                  fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700,
                  padding: '5px 10px', borderRadius: 999,
                }}>
                  {cat.label}
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', color: 'inherit' }}
                    aria-label={`Retirer ${cat.label}`}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          )}

          <div style={{ flex: 1 }} />

          {/* Sort selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setSortOpen(v => !v)}
              onBlur={() => setTimeout(() => setSortOpen(false), 120)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600,
                background: '#fff', color: '#374151',
                border: '1px solid #E5E7EB', borderRadius: 10,
                padding: '7px 12px', cursor: 'pointer',
                transition: 'border-color 150ms',
              }}
            >
              <SlidersHorizontal size={13} />
              <span style={{ color: '#9CA3AF' }}>Trier :</span>
              <span>{SORT_OPTIONS.find(s => s.id === sort)?.label}</span>
            </button>
            {sortOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', right: 0,
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 10,
                boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                padding: 6, minWidth: 160, zIndex: 20,
              }}>
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onMouseDown={() => { setSort(opt.id); setSortOpen(false) }}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                      fontWeight: sort === opt.id ? 700 : 500,
                      background: sort === opt.id ? '#F1F5F9' : 'transparent',
                      color: sort === opt.id ? '#0A0A0A' : '#374151',
                      border: 'none', borderRadius: 6,
                      padding: '8px 10px', cursor: 'pointer',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clear all */}
          {isFiltered && (
            <button
              onClick={resetAll}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600,
                background: 'transparent', color: '#6B7280',
                border: 'none', cursor: 'pointer', padding: '5px 8px',
                borderRadius: 8,
                transition: 'color 150ms',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#0A0A0A'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
            >
              <RotateCcw size={12} />
              Réinitialiser
            </button>
          )}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div style={{
        background: '#F8F8F6',
        padding: 'clamp(32px, 4vw, 48px) clamp(20px, 4vw, 32px) clamp(72px, 8vw, 104px)',
        minHeight: 400,
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>

          {/* Result counter */}
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13, color: '#6B7280',
            marginBottom: 20,
            display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap',
          }}>
            <strong style={{ color: '#0A0A0A', fontSize: 14 }}>{filtered.length}</strong>
            {search.trim()
              ? <>résultat{filtered.length > 1 ? 's' : ''} pour «&nbsp;{search}&nbsp;»</>
              : <>article{filtered.length > 1 ? 's' : ''}</>}
            {activeCats.length === 0 ? (
              !search.trim() && <> au total</>
            ) : activeCats.length === 1 ? (
              <> dans <strong style={{ color: activeCats[0].color.text }}>{activeCats[0].label}</strong></>
            ) : activeCats.length <= 3 ? (
              <>
                {' dans '}
                {activeCats.map((c, i) => (
                  <span key={c.id}>
                    {i > 0 && <span style={{ color: '#CBD5E1' }}> · </span>}
                    <strong style={{ color: c.color.text }}>{c.label}</strong>
                  </span>
                ))}
              </>
            ) : (
              <> dans <strong style={{ color: '#0A0A0A' }}>{activeCats.length} thématiques</strong></>
            )}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{
              background: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: 16,
              padding: 'clamp(32px, 5vw, 56px) clamp(20px, 4vw, 32px)',
              textAlign: 'center',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: '#F1F5F9', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 18px',
              }}>
                <Search size={22} color="#CBD5E1" />
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#374151', marginBottom: 6 }}>
                Aucun article ne correspond
              </div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 24 }}>
                Essayez avec d'autres mots-clés ou explorez une thématique adjacente.
              </div>

              {suggestions.length > 0 && (
                <>
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: '#9CA3AF',
                    marginBottom: 12,
                  }}>
                    Suggestions
                  </div>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
                    {suggestions.map(s => {
                      const Icon = s.icon
                      return (
                        <button
                          key={s.id}
                          onClick={() => { setSearch(''); toggleCategory(s.id) }}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: s.color.bg, color: s.color.text,
                            border: `1px solid ${s.color.border}`,
                            borderRadius: 999, padding: '7px 14px',
                            fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                            fontWeight: 600, cursor: 'pointer',
                          }}
                        >
                          <Icon size={13} />
                          {activeCategories.size > 0 ? `+ ${s.label}` : s.label}
                          <span style={{ opacity: 0.65, fontSize: 11 }}>({categoryCounts[s.id]})</span>
                        </button>
                      )
                    })}
                  </div>
                </>
              )}

              <button
                onClick={resetAll}
                style={{
                  fontSize: 13, fontWeight: 700, color: '#fff',
                  background: '#0A0A0A', border: 'none', borderRadius: 8,
                  padding: '10px 20px', cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Voir tous les articles
              </button>
            </div>
          )}

          {/* Featured */}
          {showFeatured && (
            <FadeIn style={{ marginBottom: 32 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#9CA3AF',
                marginBottom: 14, fontFamily: 'DM Sans, sans-serif',
              }}>
                À la une
              </div>
              <FeaturedCard article={featured} />
            </FadeIn>
          )}

          {/* Section title */}
          {filtered.length > 0 && (
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(20px, 2.6vw, 24px)',
              fontWeight: 800, color: '#0A0A0A',
              margin: showFeatured ? '40px 0 20px' : '0 0 20px',
              letterSpacing: '-0.01em',
            }}>
              {search.trim()
                ? 'Résultats'
                : activeCats.length === 0
                  ? 'Tous les articles'
                  : activeCats.length === 1
                    ? activeCats[0].label
                    : `${activeCats.length} thématiques sélectionnées`}
            </h2>
          )}

          {/* Cards grid */}
          {filtered.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
              marginBottom: 72,
            }}>
              {(showFeatured ? rest : filtered).map((a, i) => (
                <ArticleCard key={a.slug} a={a} index={i} />
              ))}
            </div>
          )}

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
