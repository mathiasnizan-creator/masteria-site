import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Clock, Calendar, BookOpen, ChevronDown, ChevronUp, Share2, Check, RefreshCw } from 'lucide-react'
import { FadeIn, PrimaryBtn, SecBtn } from '../components/components'
import { FAQSection } from '../components/screens2'
import SEOHead from '../components/SEOHead'
import { getArticleBySlug, getRelatedArticles, BLOG_ARTICLES } from '../data/blog-articles'
import { getTagColor } from '../data/tag-colors'
import { useIsMobile } from '../hooks/useMediaQuery'

const SITE_URL = 'https://www.master-ia.fr'
const LINKEDIN_URL = 'https://www.linkedin.com/in/mathias-nizan/'

// Icône LinkedIn inline (lucide-react ne l'exporte pas dans la version utilisée)
function LinkedinIcon({ size = 12, color = '#0A66C2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
    </svg>
  )
}

// Mapping tag → 3 formations Masteria pertinentes (h2 "Formations correspondantes").
// Renforce le maillage interne blog → hubs/spokes (capture l'intention transactionnelle).
const TAG_TO_FORMATIONS = {
  'Comparatif':      [['Quelle est la meilleure IA ?', '/quelle-est-la-meilleure-ia'], ['ChatGPT vs Claude', '/chatgpt-vs-claude'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Outils':          [['Formation ChatGPT', '/formation-chatgpt'], ['Formation Claude IA', '/formation-claude-ia'], ['Formation Mistral AI', '/formation-mistral-ai']],
  'Métier':          [['Formations IA par métier', '/formation-intelligence-artificielle'], ['Formation ChatGPT', '/formation-chatgpt'], ['Formation Microsoft Copilot', '/formation-microsoft-copilot']],
  'Métiers':         [['Formations IA par métier', '/formation-intelligence-artificielle'], ['Formation ChatGPT', '/formation-chatgpt'], ['Formation Microsoft Copilot', '/formation-microsoft-copilot']],
  'Marketing':       [['Formation IA Marketing', '/formation-ia-marketing'], ['Formation ChatGPT Marketing', '/formation-chatgpt-marketing'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'RH':              [['Formation IA RH', '/formation-ia-ressources-humaines'], ['Formation ChatGPT', '/formation-chatgpt'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Management':      [['Formation IA Management', '/formation-ia-management'], ['Conseil IA', '/conseil-intelligence-artificielle'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Pilotage':        [['Conseil IA', '/conseil-intelligence-artificielle'], ['Formation IA Management', '/formation-ia-management'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Stratégie':       [['Conseil IA', '/conseil-intelligence-artificielle'], ['Meilleure IA entreprise 2026', '/meilleure-ia-entreprise-2026'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Conseil IA':      [['Conseil IA', '/conseil-intelligence-artificielle'], ['Sprint IA', '/formation-sprint-ia'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Financement':     [['Financement formation IA', '/financement-formation-ia'], ['Formation IA Qualiopi', '/formation-ia-qualiopi'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Réglementation':  [['Formation IA Qualiopi', '/formation-ia-qualiopi'], ['Conseil IA', '/conseil-intelligence-artificielle'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Conformité':      [['Formation IA Qualiopi', '/formation-ia-qualiopi'], ['Conseil IA', '/conseil-intelligence-artificielle'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Sécurité':        [['Formation Mistral AI', '/formation-mistral-ai'], ['Conseil IA', '/conseil-intelligence-artificielle'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Sprint IA':       [['Sprint IA', '/formation-sprint-ia'], ['Formation ChatGPT', '/formation-chatgpt'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Data':            [['Formation analyse de données IA', '/formation-ia-analyse-donnees'], ['Formation IA Finance', '/formation-ia-finance'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'GEO / SEO':       [['Formation IA SEO', '/formation-ia-seo'], ['Formation ChatGPT', '/formation-chatgpt'], ['Formation Claude IA', '/formation-claude-ia']],
  'Productivité':    [['Formation ChatGPT', '/formation-chatgpt'], ['Formation Microsoft Copilot', '/formation-microsoft-copilot'], ['Sprint IA', '/formation-sprint-ia']],
  "Cas d'usage":     [['Formation ChatGPT', '/formation-chatgpt'], ['Formation Microsoft Copilot', '/formation-microsoft-copilot'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Géographie':      [['Formation IA Lyon', '/formation-ia-lyon'], ['Formation IA Paris', '/formation-ia-paris'], ['Toutes les formations IA', '/formation-intelligence-artificielle']],
  'Retours terrain': [['Toutes les formations IA', '/formation-intelligence-artificielle'], ['Conseil IA', '/conseil-intelligence-artificielle'], ['Sprint IA', '/formation-sprint-ia']],
  'Format':          [['Toutes les formations IA', '/formation-intelligence-artificielle'], ['Sprint IA', '/formation-sprint-ia'], ['Formation IA distanciel', '/formation-intelligence-artificielle-distanciel']],
  'Guide':           [['Toutes les formations IA', '/formation-intelligence-artificielle'], ['Conseil IA', '/conseil-intelligence-artificielle'], ['Sprint IA', '/formation-sprint-ia']],
  'Guide pratique':  [['Toutes les formations IA', '/formation-intelligence-artificielle'], ['Conseil IA', '/conseil-intelligence-artificielle'], ['Sprint IA', '/formation-sprint-ia']],
  'Guide décideur':  [['Conseil IA', '/conseil-intelligence-artificielle'], ['Toutes les formations IA', '/formation-intelligence-artificielle'], ['Meilleure IA entreprise 2026', '/meilleure-ia-entreprise-2026']],
  'Ressource':       [['Toutes les formations IA', '/formation-intelligence-artificielle'], ['Glossaire IA', '/glossaire-ia'], ['Conseil IA', '/conseil-intelligence-artificielle']],
}
const DEFAULT_FORMATIONS = [
  ['Toutes les formations IA', '/formation-intelligence-artificielle'],
  ['Conseil IA', '/conseil-intelligence-artificielle'],
  ['Contact', '/contact'],
]

// Compte les mots dans tous les blocks textuels d'un article (pour wordCount Article schema).
function countWords(blocks) {
  if (!Array.isArray(blocks)) return 0
  let total = 0
  for (const b of blocks) {
    if (typeof b?.text === 'string') total += b.text.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
    if (Array.isArray(b?.items)) for (const it of b.items) total += String(it).split(/\s+/).filter(Boolean).length
    if (Array.isArray(b?.rows)) for (const r of b.rows) total += r.flatMap(c => String(c).split(/\s+/)).filter(Boolean).length
  }
  return total
}

const MONTHS_FR = {
  janvier: '01', février: '02', fevrier: '02', mars: '03', avril: '04',
  mai: '05', juin: '06', juillet: '07', août: '08', aout: '08',
  septembre: '09', octobre: '10', novembre: '11', décembre: '12', decembre: '12',
}
function toISODate(frDate) {
  if (!frDate) return undefined
  const m = String(frDate).toLowerCase().match(/(\d{1,2})\s+([a-zéû]+)\s+(\d{4})/)
  if (!m) return undefined
  return `${m[3]}-${MONTHS_FR[m[2]]?.padStart(2, '0') || '01'}-${m[1].padStart(2, '0')}`
}

const MONTH_NAMES_FR = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
function formatFRDate(iso) {
  if (!iso) return ''
  const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (!m) return iso
  const day = parseInt(m[3], 10)
  const month = MONTH_NAMES_FR[parseInt(m[2], 10) - 1] || ''
  return `${day} ${month} ${m[1]}`
}

function slugify(text) {
  return text.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/* ── Block renderers ── */
function Block({ b }) {
  switch (b.type) {
    case 'h2':
      return (
        <h2
          id={slugify(b.text)}
          style={{
            position: 'relative',
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(24px, 3vw, 30px)',
            fontWeight: 900,
            color: '#0A0A0A',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginTop: 60,
            marginBottom: 20,
            paddingTop: 6,
            scrollMarginTop: 24,
          }}
        >
          {/* Petite barre orange en accent à gauche du h2 — meilleur rythme visuel */}
          <span aria-hidden="true" style={{
            position: 'absolute', left: -16, top: 14, bottom: 14,
            width: 3, background: '#F97316', borderRadius: 2,
          }} />
          {b.text}
        </h2>
      )

    case 'h3':
      return (
        <h3 style={{
          fontFamily: 'Nunito, sans-serif',
          fontSize: 'clamp(18px, 2.1vw, 20px)',
          fontWeight: 800,
          color: '#1F2937',
          lineHeight: 1.35,
          letterSpacing: '-0.01em',
          marginTop: 32,
          marginBottom: 12,
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
            lineHeight: 1.8,
            marginBottom: 18,
          }}
          dangerouslySetInnerHTML={{ __html: b.text }}
        />
      )

    case 'ul':
      return (
        <ul style={{ margin: '8px 0 22px', paddingLeft: 0, listStyle: 'none' }}>
          {b.items.map((it, i) => (
            <li
              key={i}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(15px, 1.7vw, 16px)',
                color: '#2A2A2A',
                lineHeight: 1.72,
                marginBottom: 10,
                paddingLeft: 22,
                position: 'relative',
              }}
            >
              <span style={{
                position: 'absolute', left: 0, top: '0.55em',
                width: 6, height: 6, borderRadius: '50%',
                background: '#F97316', flexShrink: 0,
              }} />
              <span dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol style={{ margin: '8px 0 22px', paddingLeft: 0, listStyle: 'none', counterReset: 'ol-counter' }}>
          {b.items.map((it, i) => (
            <li
              key={i}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(15px, 1.7vw, 16px)',
                color: '#2A2A2A',
                lineHeight: 1.72,
                marginBottom: 12,
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
              }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 24, height: 24, borderRadius: '50%',
                background: '#0A0A0A', color: '#fff',
                fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
                flexShrink: 0, marginTop: 2,
              }}>
                {i + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ol>
      )

    case 'table':
      return (
        <div style={{
          margin: '16px 0 28px',
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
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
                    padding: '13px 16px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    borderBottom: '1px solid #E5E7EB',
                    fontSize: 13,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr
                  key={ri}
                  style={{
                    borderBottom: ri === b.rows.length - 1 ? 'none' : '1px solid #F1F5F9',
                    background: ri % 2 === 0 ? '#fff' : '#FAFAFA',
                  }}
                >
                  {r.map((c, ci) => (
                    <td key={ci} style={{
                      padding: '11px 16px',
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

    case 'callout': {
      // Si pas de title ET italique → pull-quote stylé en grand (citation visuelle).
      const isPullQuote = !b.title && b.italic !== false
      if (isPullQuote) {
        return (
          <figure style={{
            margin: '32px 0',
            padding: 'clamp(20px, 3vw, 32px) clamp(24px, 4vw, 40px)',
            background: 'linear-gradient(135deg, #FFFAF5 0%, #FFFFFF 100%)',
            borderTop: '3px solid #F97316',
            borderBottom: '1px solid #F5E6D3',
            position: 'relative',
            textAlign: 'center',
          }}>
            <span aria-hidden="true" style={{
              position: 'absolute', top: 8, left: 16,
              fontFamily: 'Nunito, sans-serif',
              fontSize: 60, lineHeight: 1, color: '#F97316', opacity: 0.25,
              fontWeight: 900, pointerEvents: 'none',
            }}>“</span>
            <blockquote
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                fontWeight: 700,
                color: '#0A0A0A',
                lineHeight: 1.45,
                letterSpacing: '-0.01em',
                margin: 0,
                fontStyle: 'italic',
              }}
              dangerouslySetInnerHTML={{ __html: b.text }}
            />
          </figure>
        )
      }
      return (
        <div style={{
          borderLeft: '3px solid #2563EB',
          background: 'linear-gradient(135deg, #F0F7FF 0%, #F8FAFC 100%)',
          padding: '18px 22px',
          borderRadius: '0 12px 12px 0',
          margin: '24px 0',
        }}>
          {b.title && (
            <div style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 12,
              fontWeight: 800,
              color: '#2563EB',
              letterSpacing: '0.06em',
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
              lineHeight: 1.72,
              fontStyle: b.italic === false ? 'normal' : 'italic',
            }}
            dangerouslySetInnerHTML={{ __html: b.text }}
          />
        </div>
      )
    }

    default:
      return null
  }
}

/* ── Table of Contents ── */
function TableOfContents({ blocks, collapsed, onToggle }) {
  const headings = (blocks || []).filter(b => b.type === 'h2')
  if (headings.length < 2) return null

  return (
    <div style={{
      background: '#F8FAFC',
      border: '1px solid #E5E7EB',
      borderRadius: 14,
      overflow: 'hidden',
      marginBottom: 36,
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 18px',
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'DM Sans, sans-serif',
        }}
      >
        <span style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 13, fontWeight: 700, color: '#0A0A0A',
        }}>
          <BookOpen size={15} color="#6B7280" />
          Sommaire ({headings.length} sections)
        </span>
        {collapsed
          ? <ChevronDown size={16} color="#9CA3AF" />
          : <ChevronUp size={16} color="#9CA3AF" />}
      </button>

      {!collapsed && (
        <ol style={{ margin: 0, padding: '0 18px 16px', listStyle: 'none' }}>
          {headings.map((h, i) => (
            <li key={i}>
              <a
                href={`#${slugify(h.text)}`}
                style={{
                  display: 'flex', alignItems: 'baseline', gap: 10,
                  padding: '6px 0',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13, color: '#374151', textDecoration: 'none',
                  borderTop: i === 0 ? 'none' : '1px solid #F1F5F9',
                  transition: 'color 150ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#2563EB' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#374151' }}
              >
                <span style={{
                  fontSize: 10, fontWeight: 700, color: '#CBD5E1',
                  fontFamily: 'DM Sans, sans-serif', flexShrink: 0, minWidth: 16,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{h.text}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

/* ── Sidebar TOC (desktop) ── */
function SidebarTOC({ blocks }) {
  const headings = (blocks || []).filter(b => b.type === 'h2')
  if (headings.length < 2) return null

  return (
    <div style={{
      position: 'sticky',
      top: 32,
      alignSelf: 'start',
    }}>
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: '#9CA3AF',
        fontFamily: 'DM Sans, sans-serif', marginBottom: 12,
      }}>
        Sommaire
      </div>
      <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {headings.map((h, i) => (
          <li key={i} style={{ marginBottom: 2 }}>
            <a
              href={`#${slugify(h.text)}`}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 8,
                padding: '5px 8px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 12.5, color: '#6B7280', textDecoration: 'none',
                borderRadius: 6,
                lineHeight: 1.45,
                transition: 'all 150ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#0A0A0A'
                e.currentTarget.style.background = '#F1F5F9'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#6B7280'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <span style={{ color: '#D1D5DB', flexShrink: 0, marginTop: 1, fontWeight: 700, fontSize: 10 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ── Share button ── */
function ShareButton({ url, title }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title, url }) } catch {}
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleShare}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '7px 14px',
        background: copied ? '#ECFDF5' : '#F1F5F9',
        border: `1px solid ${copied ? '#BBF7D0' : '#E5E7EB'}`,
        borderRadius: 8,
        fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600,
        color: copied ? '#16A34A' : '#374151',
        cursor: 'pointer', transition: 'all 200ms ease',
      }}
    >
      {copied ? <Check size={13} /> : <Share2 size={13} />}
      {copied ? 'Lien copié !' : 'Partager'}
    </button>
  )
}

/* ── Main page ── */
export default function BlogArticlePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const article = getArticleBySlug(slug)
  const [readProgress, setReadProgress] = useState(0)
  const [tocCollapsed, setTocCollapsed] = useState(false)

  useEffect(() => {
    setReadProgress(0)
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setReadProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [article?.slug])

  if (article?.externalPath) {
    if (typeof window !== 'undefined') window.location.replace(article.externalPath)
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
  const tagColor = getTagColor(article.tag)

  // wordCount = intro + excerpt + tous les blocks textuels (Google utilise ce signal pour évaluer la profondeur)
  const wordCount = (article.intro ? article.intro.split(/\s+/).filter(Boolean).length : 0)
                  + (article.excerpt ? article.excerpt.split(/\s+/).filter(Boolean).length : 0)
                  + countWords(article.blocks)
  // Convertit "9 min" (readTime) → "PT9M" (ISO 8601 duration) pour Schema.org timeRequired.
  const readMinutes = article.readTime ? (parseInt(String(article.readTime).match(/\d+/)?.[0] || '10', 10)) : 10
  const articleData = {
    headline: article.title,
    author: 'Mathias Nizan',
    datePublished: article.datePublished || isoDate,
    dateModified: article.dateModified || article.datePublished || isoDate,
    tag: article.tag,
    image: article.ogImage ? `${SITE_URL}${article.ogImage}` : `${SITE_URL}/assets/logo-square.png`,
    wordCount,
    timeRequired: `PT${readMinutes}M`,
    keywords: article.keywords || [article.tag, 'formation IA', 'Masteria', 'Qualiopi', 'OPCO'].filter(Boolean),
  }
  const isUpdated = articleData.datePublished && articleData.dateModified
    && articleData.datePublished !== articleData.dateModified
  const relatedFormations = TAG_TO_FORMATIONS[article.tag] || DEFAULT_FORMATIONS

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
  const hasTOC = (article.blocks || []).filter(b => b.type === 'h2').length >= 2

  return (
    <article>
      {/* Reading progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: 3, zIndex: 9999, pointerEvents: 'none',
          background: '#F0F4F8',
        }}
      >
        <div style={{
          height: '100%',
          width: `${readProgress}%`,
          background: `linear-gradient(90deg, ${tagColor.bar} 0%, #F97316 100%)`,
          transition: 'width 60ms linear',
        }} />
      </div>

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

      {/* ── Header ──
          Hero avec wash de couleur tag-aware (gradient subtil) + halo décoratif.
          Le tag pilote l'identité visuelle de l'article : il colore le breadcrumb,
          la barre verticale d'intro, et un halo d'accent en arrière-plan. */}
      <header style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(180deg, ${tagColor.bg} 0%, #FAFAFA 60%, #FFFFFF 100%)`,
        borderBottom: '1px solid #EEF2F7',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 32px) clamp(36px, 5vw, 56px)',
      }}>
        {/* Halo décoratif (cercle flou tag-coloré en haut à droite) — purement visuel */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: -120, right: -120,
          width: 320, height: 320, borderRadius: '50%',
          background: tagColor.bar, opacity: 0.06,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13, color: '#9CA3AF',
            marginBottom: 28,
            display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
          }}>
            <Link to="/" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => e.currentTarget.style.color = '#374151'}
              onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
            >Accueil</Link>
            <span style={{ color: '#D1D5DB' }}>›</span>
            <Link to="/blog" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => e.currentTarget.style.color = '#374151'}
              onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
            >Blog</Link>
            <span style={{ color: '#D1D5DB' }}>›</span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 11px',
              background: '#fff', border: `1px solid ${tagColor.border}`,
              borderRadius: 99, fontSize: 11, fontWeight: 800,
              color: tagColor.text, letterSpacing: '0.08em', textTransform: 'uppercase',
              boxShadow: `0 1px 2px ${tagColor.bar}10`,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: tagColor.bar, display: 'inline-block' }} />
              {article.tag}
            </span>
          </nav>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(30px, 4.6vw, 48px)',
            fontWeight: 900,
            color: '#0A0A0A',
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 760,
          }}>
            {article.title}
          </h1>

          {/* Meta row : enrichie pour signaux E-E-A-T (auteur cliquable LinkedIn),
              freshness (badge "Mis à jour"), et SEO sémantique (<time datetime>). */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16, flexWrap: 'wrap',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13, color: '#6B7280',
            marginBottom: 32,
          }}>
            <time dateTime={articleData.datePublished}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Calendar size={13} /> Publié le {article.date}
            </time>
            {isUpdated && (
              <time dateTime={articleData.dateModified} style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '3px 10px',
                background: '#ECFDF5', border: '1px solid #A7F3D0',
                borderRadius: 99, color: '#065F46', fontWeight: 700,
              }}>
                <RefreshCw size={11} /> Mis à jour le {formatFRDate(articleData.dateModified)}
              </time>
            )}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Clock size={13} /> {article.readTime} de lecture
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Par{' '}
              <a href={LINKEDIN_URL} target="_blank" rel="author noopener noreferrer"
                 style={{ color: '#374151', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                Mathias Nizan <LinkedinIcon size={12} />
              </a>
            </span>
            <ShareButton url={url} title={article.title} />
          </div>

          {/* Intro lead — typographie augmentée + barre tag-colorée à gauche */}
          <div style={{
            position: 'relative',
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderLeft: `4px solid ${tagColor.bar}`,
            borderRadius: '0 14px 14px 0',
            padding: 'clamp(20px, 3vw, 30px) clamp(22px, 3.5vw, 32px)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(16px, 1.9vw, 18px)',
            color: '#1A1A1A',
            lineHeight: 1.72,
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            {article.intro}
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <section style={{ padding: 'clamp(36px, 5vw, 64px) clamp(20px, 4vw, 32px)' }}>
        {isMobile || !hasTOC ? (
          /* Mobile: single column with inline TOC */
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {hasTOC && (
              <TableOfContents
                blocks={article.blocks}
                collapsed={tocCollapsed}
                onToggle={() => setTocCollapsed(v => !v)}
              />
            )}
            {article.blocks.map((b, i) => <Block key={i} b={b} />)}
          </div>
        ) : (
          /* Desktop: side-by-side with sticky TOC */
          <div style={{
            maxWidth: 1040,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 720px) 200px',
            gap: 48,
            alignItems: 'start',
          }}>
            <div>
              {article.blocks.map((b, i) => <Block key={i} b={b} />)}
            </div>
            <SidebarTOC blocks={article.blocks} />
          </div>
        )}
      </section>

      {/* ── FAQ ── */}
      {article.faq && article.faq.length > 0 && (
        <FAQSection items={article.faq} title="Questions fréquentes" bg="#F8FAFC" />
      )}

      {/* ── CTA ──
          Le template attend cta = { title, desc, buttons: [{label, href, primary}] }.
          Certains articles utilisent l'ancien format { title, text, buttonLabel, buttonHref }.
          On normalise ici pour éviter un crash render (`.map` sur undefined). */}
      {article.cta && (() => {
        const ctaButtons = article.cta.buttons
          || (article.cta.buttonLabel && article.cta.buttonHref
              ? [{ label: article.cta.buttonLabel, href: article.cta.buttonHref, primary: true }]
              : []);
        const ctaDesc = article.cta.desc || article.cta.text || '';
        return (
        <section style={{ padding: 'clamp(40px, 5vw, 72px) clamp(20px, 4vw, 32px)', background: '#0A0A0A' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <FadeIn>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(249,115,22,0.1)',
                border: '1px solid rgba(249,115,22,0.2)',
                borderRadius: 999, padding: '5px 14px', marginBottom: 20,
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#F97316' }} />
                <span style={{
                  fontSize: 11, fontWeight: 700, color: '#F97316',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontFamily: 'DM Sans, sans-serif',
                }}>
                  Masteria
                </span>
              </div>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 'clamp(24px, 3.4vw, 32px)',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 14,
              }}>
                {article.cta.title}
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(14px, 1.7vw, 16px)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 520,
                marginLeft: 'auto', marginRight: 'auto',
              }}>
                {ctaDesc}
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                {ctaButtons.map((btn, i) => (
                  btn.primary
                    ? <PrimaryBtn key={i} onClick={() => navigate(btn.href)}
                        style={{ background: '#F97316', color: '#fff' }}>
                        {btn.label}
                      </PrimaryBtn>
                    : <SecBtn key={i} onClick={() => navigate(btn.href)}
                        style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                        {btn.label}
                      </SecBtn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
        );
      })()}

      {/* ── Formations correspondantes ──
          Maillage interne blog → hubs/spokes : 3 formations Masteria mappées au tag de l'article.
          Capture l'intention transactionnelle (lecteur qui veut passer à l'action après lecture)
          et donne du jus PageRank aux pages produit (qui en ont le plus besoin pour l'indexation).
          Schema ItemList JSON-LD aide Google à comprendre la structure de l'offre. */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          '@id': `${url}#related-formations`,
          name: 'Formations Masteria correspondantes',
          itemListOrder: 'https://schema.org/ItemListOrderDescending',
          numberOfItems: relatedFormations.length,
          itemListElement: relatedFormations.map(([label, path], i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: label,
            url: `${SITE_URL}${path}`,
          })),
        })}</script>
      </Helmet>
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 32px)',
        background: 'linear-gradient(180deg, #FFFAF5 0%, #FAFAFA 100%)',
        borderTop: '1px solid #F5E6D3',
      }}>
        {/* Halo orange décoratif */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: -100, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 200, borderRadius: '50%',
          background: '#F97316', opacity: 0.04, filter: 'blur(80px)', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', border: '1px solid #FED7AA',
            padding: '6px 14px', borderRadius: 999, marginBottom: 14,
            boxShadow: '0 1px 3px rgba(249,115,22,0.1)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316' }} />
            <span style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#C2410C',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Passer à l'action
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(24px, 3.2vw, 32px)',
            fontWeight: 900, color: '#0A0A0A',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: 10,
          }}>
            Formations Masteria correspondantes
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(14px, 1.7vw, 16px)',
            color: '#6B7280', lineHeight: 1.7, marginBottom: 32,
            maxWidth: 620,
          }}>
            Trois programmes Masteria pour traduire ce que vous venez de lire en compétences concrètes pour vos équipes. Certifié Qualiopi · 100 % finançable OPCO.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {relatedFormations.map(([label, path], i) => (
              <Link
                key={path}
                to={path}
                style={{
                  position: 'relative',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  minHeight: 140,
                  padding: '22px 24px',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 14,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'transform 200ms, box-shadow 200ms, border-color 200ms',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(249,115,22,0.12)'
                  e.currentTarget.style.borderColor = '#F97316'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#E5E7EB'
                }}
              >
                {/* Numéro discret en filigrane */}
                <div aria-hidden="true" style={{
                  position: 'absolute', top: -10, right: 10,
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 90, fontWeight: 900,
                  color: '#FFEDD5', lineHeight: 1,
                  pointerEvents: 'none', userSelect: 'none',
                }}>
                  {i + 1}
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center',
                    fontSize: 10, fontWeight: 800, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: '#F97316',
                    fontFamily: 'DM Sans, sans-serif', marginBottom: 10,
                  }}>
                    Formation
                  </div>
                  <h3 style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 17, fontWeight: 800,
                    color: '#0A0A0A', lineHeight: 1.3,
                    letterSpacing: '-0.005em',
                    margin: 0,
                  }}>
                    {label}
                  </h3>
                </div>
                <div style={{
                  position: 'relative',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  marginTop: 18,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13, fontWeight: 700,
                  color: '#F97316',
                }}>
                  Voir le programme <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal links ── */}
      {article.internalLinks && article.internalLinks.length > 0 && (
        <section style={{ padding: 'clamp(40px, 5vw, 64px) clamp(20px, 4vw, 32px)', background: '#fff', borderTop: '1px solid #F1F5F9' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#9CA3AF',
              marginBottom: 10, fontFamily: 'DM Sans, sans-serif',
            }}>
              Aller plus loin
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(20px, 2.6vw, 24px)',
              fontWeight: 800, color: '#0A0A0A',
              letterSpacing: '-0.01em', marginBottom: 20,
            }}>
              Ressources liées
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
              {article.internalLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.href}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '13px 18px',
                      background: '#FAFAFA', border: '1px solid #E5E7EB',
                      borderRadius: 10,
                      fontFamily: 'DM Sans, sans-serif', fontSize: 15,
                      fontWeight: 600, color: '#0A0A0A', textDecoration: 'none',
                      transition: 'background 150ms, border-color 150ms',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#F1F5F9'; e.currentTarget.style.borderColor = '#CBD5E1' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#FAFAFA'; e.currentTarget.style.borderColor = '#E5E7EB' }}
                  >
                    <span>{l.label}</span>
                    <ArrowRight size={15} color="#2563EB" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Author bio ──
          Carte premium avec gradient, badges crédibilité, jobTitle, double CTA.
          Signal E-E-A-T fort visible : photo + LinkedIn + crédibilité Qualiopi + 500 clients. */}
      <section style={{ padding: 'clamp(40px, 5vw, 56px) clamp(20px, 4vw, 32px)', background: '#F8FAFC', borderTop: '1px solid #F1F5F9' }}>
        <div style={{
          maxWidth: 760, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 24,
          alignItems: 'center',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFBFD 100%)',
          border: '1px solid #E5E7EB',
          borderRadius: 18,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: 'clamp(18px, 3vw, 28px)',
        }}>
          {/* Avatar : vraie photo (WebP + JPG fallback) au lieu des initiales.
              Signal E-E-A-T fort + meilleur taux de clic sur le bloc auteur. */}
          {/* Avatar : vraie photo (WebP + JPG fallback) au lieu des initiales.
              Signal E-E-A-T fort + meilleur taux de clic sur le bloc auteur.
              Halo orange subtil derrière la photo pour l'identité visuelle Masteria. */}
          <a href={LINKEDIN_URL} target="_blank" rel="author noopener noreferrer"
             aria-label="Profil LinkedIn de Mathias Nizan"
             style={{ flexShrink: 0, lineHeight: 0, position: 'relative' }}>
            <span aria-hidden="true" style={{
              position: 'absolute', inset: -6,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
              opacity: 0.18, filter: 'blur(8px)', pointerEvents: 'none',
            }} />
            <picture>
              <source type="image/webp" srcSet="/assets/mathias-nizan@120.webp 1x, /assets/mathias-nizan@240.webp 2x" />
              <img
                src="/assets/mathias-nizan@120.jpg"
                srcSet="/assets/mathias-nizan@120.jpg 1x, /assets/mathias-nizan@240.jpg 2x"
                alt="Mathias Nizan, fondateur de Masteria, expert en formation IA"
                width="80" height="80"
                loading="lazy" decoding="async"
                style={{
                  position: 'relative',
                  width: 80, height: 80, borderRadius: '50%',
                  border: '3px solid #fff',
                  boxShadow: '0 4px 12px rgba(249,115,22,0.25)',
                  objectFit: 'cover', display: 'block',
                }}
              />
            </picture>
          </a>
          <div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#9CA3AF',
              marginBottom: 4,
            }}>
              Écrit par
            </div>
            <div style={{
              fontFamily: 'Nunito, sans-serif', fontSize: 18,
              fontWeight: 900, color: '#0A0A0A', marginBottom: 2,
              letterSpacing: '-0.01em',
            }}>
              <a href={LINKEDIN_URL} target="_blank" rel="author noopener noreferrer"
                 style={{ color: '#0A0A0A', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Mathias Nizan <LinkedinIcon size={16} />
              </a>
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 13,
              color: '#374151', fontWeight: 600, marginBottom: 8,
            }}>
              Fondateur de Masteria · Formateur principal
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 13,
              color: '#6B7280', lineHeight: 1.6, marginBottom: 14,
            }}>
              Cabinet de conseil et centre de formation IA certifié Qualiopi. Plus de 1 500 professionnels formés depuis 2022 à ChatGPT, Claude, Microsoft Copilot, Gemini et Mistral AI.
            </div>
            {/* Badges crédibilité */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
              {[
                { label: 'Qualiopi', color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
                { label: '+1500 formés', color: '#F97316', bg: '#FFF7ED', border: '#FED7AA' },
                { label: '★ 4,9/5', color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0' },
              ].map(b => (
                <span key={b.label} style={{
                  fontSize: 11, fontWeight: 700,
                  padding: '3px 9px', borderRadius: 99,
                  color: b.color, background: b.bg, border: `1px solid ${b.border}`,
                  fontFamily: 'DM Sans, sans-serif',
                }}>{b.label}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/centre-formation-ia-entreprise" style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                fontWeight: 700, color: '#2563EB', textDecoration: 'none',
              }}>
                À propos de Masteria <ArrowRight size={12} />
              </Link>
              <Link to="/blog" style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                fontWeight: 600, color: '#6B7280', textDecoration: 'none',
              }}>
                Tous les articles <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <section style={{ padding: 'clamp(40px, 5vw, 72px) clamp(20px, 4vw, 32px)', background: '#fff', borderTop: '1px solid #F1F5F9' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#9CA3AF',
              marginBottom: 10, fontFamily: 'DM Sans, sans-serif',
            }}>
              À lire aussi
            </div>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(22px, 2.8vw, 28px)',
              fontWeight: 800, color: '#0A0A0A',
              letterSpacing: '-0.01em', marginBottom: 28,
            }}>
              Autres articles Masteria
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 18,
            }}>
              {related.map((a, i) => {
                const c = getTagColor(a.tag)
                return (
                  <Link key={a.slug} to={`/blog/${a.slug}`} style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        background: '#fff',
                        border: '1px solid #E5E7EB',
                        borderRadius: 14,
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex', flexDirection: 'column',
                        transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.07)'
                        e.currentTarget.style.borderColor = c.border
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'none'
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.borderColor = '#E5E7EB'
                      }}
                    >
                      <div style={{ height: 3, background: c.bar }} />
                      <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                          display: 'inline-flex', alignSelf: 'flex-start',
                          padding: '3px 9px',
                          background: c.bg, border: `1px solid ${c.border}`,
                          borderRadius: 999, marginBottom: 12,
                          fontSize: 10, fontWeight: 700, color: c.text,
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                          fontFamily: 'DM Sans, sans-serif',
                        }}>
                          {a.tag}
                        </div>
                        <h3 style={{
                          fontFamily: 'Nunito, sans-serif', fontSize: 15,
                          fontWeight: 800, color: '#0A0A0A',
                          lineHeight: 1.35, marginBottom: 10, flex: 1,
                        }}>
                          {a.title}
                        </h3>
                        <div style={{
                          fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                          color: '#9CA3AF',
                        }}>
                          {a.date} · {a.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
