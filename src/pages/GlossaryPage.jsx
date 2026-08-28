import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, BookOpen, BadgeCheck, Wallet, MapPin } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import Pictogram from '../components/Pictogram'
import { GLOSSARY_TERMS, GLOSSARY_CATEGORIES, TOTAL_TERMS } from '../data/glossary-terms'

const SITE_URL = 'https://www.master-ia.fr'

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredTerms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return GLOSSARY_TERMS.filter(t => {
      const matchesCategory = activeCategory === 'all' || t.category === activeCategory
      if (!q) return matchesCategory
      const matchesSearch =
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, activeCategory])

  // Group filtered terms by category for display
  const termsByCategory = useMemo(() => {
    const grouped = {}
    GLOSSARY_CATEGORIES.forEach(c => { grouped[c.id] = [] })
    filteredTerms.forEach(t => {
      if (grouped[t.category]) grouped[t.category].push(t)
    })
    return grouped
  }, [filteredTerms])

  // JSON-LD DefinedTermSet
  const jsonLdGlossary = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: "Glossaire IA — 80 termes pour comprendre l'intelligence artificielle",
    url: `${SITE_URL}/glossaire-ia`,
    description: `Glossaire de référence sur l'IA en entreprise : ${TOTAL_TERMS} termes essentiels (LLM, RAG, prompt, agent, MCP, fine-tuning...) avec définitions claires par Masteria, centre de formation IA certifié Qualiopi.`,
    hasDefinedTerm: GLOSSARY_TERMS.map(t => ({
      '@type': 'DefinedTerm',
      '@id': `${SITE_URL}/glossaire-ia#${t.id}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${SITE_URL}/glossaire-ia`,
      url: `${SITE_URL}/glossaire-ia#${t.id}`,
    })),
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Glossaire IA', slug: 'glossaire-ia' },
  ]

  return (
    <>
      <SEOHead
        title={`Glossaire IA : ${TOTAL_TERMS} définitions essentielles | Masteria`}
        description={`${TOTAL_TERMS} termes essentiels de l'IA expliqués clairement : LLM, RAG, prompt, agent, MCP, fine-tuning, AI Act... Glossaire de référence pour vos équipes.`}
        slug="glossaire-ia"
        breadcrumbs={breadcrumbs}
        extraJsonLd={jsonLdGlossary}
      />

      {/* ═════════════════ HERO ═════════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, #FAFAF7 0%, #fff 100%)',
        padding: 'clamp(72px, 10vw, 120px) clamp(18px, 4vw, 32px) clamp(40px, 6vw, 64px)',
        textAlign: 'center', borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EFF6FF', color: '#2563EB',
            padding: '7px 16px', borderRadius: 99,
            fontSize: 13, fontWeight: 700, marginBottom: 24,
          }}>
            <BookOpen size={14} />
            Glossaire de référence — {TOTAL_TERMS} termes
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
            letterSpacing: '-0.02em', color: '#0A0A0A',
            marginBottom: 20, lineHeight: 1.1,
          }}>
            Glossaire IA : {TOTAL_TERMS} termes pour comprendre l'intelligence artificielle
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)', color: '#4B5563',
            lineHeight: 1.65, maxWidth: 680, margin: '0 auto 36px',
          }}>
            LLM, RAG, prompt, fine-tuning, agent, MCP, AI Act… Toutes les notions essentielles
            de l'IA en entreprise expliquées clairement, par des praticiens. Mis à jour en continu
            par les formateurs Masteria.{' '}
            Pour passer de la définition à la pratique, notre{' '}
            <Link to="/bibliotheque-de-prompts" style={{ color: '#2563EB', fontWeight: 600 }}>bibliothèque de prompts par métier</Link>{' '}
            rassemble des instructions prêtes à copier.
          </p>

          {/* Search bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: '#fff', border: '1.5px solid #E5E7EB',
            borderRadius: 12, padding: '12px 18px',
            maxWidth: 540, margin: '0 auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
          }}>
            <Search size={18} color="#6B7280" />
            <input
              type="text"
              placeholder="Rechercher un terme (ex: RAG, prompt, agent...)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                flex: 1, border: 'none', outline: 'none',
                fontSize: 15, fontFamily: 'inherit',
                background: 'transparent', color: '#0A0A0A',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'none', border: 'none', color: '#6B7280',
                  cursor: 'pointer', fontSize: 13, fontWeight: 600,
                }}
              >
                Effacer
              </button>
            )}
          </div>

          <div style={{ marginTop: 16, fontSize: 13, color: '#6B7280' }}>
            {searchQuery || activeCategory !== 'all' ? (
              <>
                <strong style={{ color: '#0A0A0A' }}>{filteredTerms.length}</strong> terme{filteredTerms.length > 1 ? 's' : ''} trouvé{filteredTerms.length > 1 ? 's' : ''}
              </>
            ) : (
              <>{TOTAL_TERMS} termes • 9 catégories</>
            )}
          </div>
        </div>
      </section>

      {/* ═════════════════ CATEGORY TABS (sticky) ═════════════════ */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #E5E7EB',
        padding: '14px clamp(18px, 4vw, 32px)',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', gap: 8, overflowX: 'auto', flexWrap: 'nowrap',
          WebkitOverflowScrolling: 'touch',
        }}>
          <CategoryTab
            label="Tous"
            emoji={'\u{1F4DA}'}
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          />
          {GLOSSARY_CATEGORIES.map(cat => (
            <CategoryTab
              key={cat.id}
              label={cat.label}
              emoji={cat.emoji}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>
      </div>

      {/* ═════════════════ TERMS LIST ═════════════════ */}
      <section style={{
        padding: 'clamp(40px, 6vw, 80px) clamp(18px, 4vw, 32px)',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          {filteredTerms.length === 0 && (
            <div style={{
              padding: 60, textAlign: 'center',
              border: '1px dashed #E5E7EB', borderRadius: 12,
            }}>
              <p style={{ fontSize: 16, color: '#6B7280', marginBottom: 16 }}>
                Aucun terme ne correspond à votre recherche.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
                style={{
                  background: '#0A0A0A', color: '#fff',
                  border: 'none', padding: '10px 20px', borderRadius: 8,
                  fontSize: 14, fontWeight: 600, cursor: 'pointer',
                }}
              >
                Réinitialiser
              </button>
            </div>
          )}

          {GLOSSARY_CATEGORIES.map(cat => {
            const terms = termsByCategory[cat.id] || []
            if (terms.length === 0) return null
            return (
              <div key={cat.id} style={{ marginBottom: 60 }}>
                <h2 id={cat.id} style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 900,
                  color: '#0A0A0A', letterSpacing: '-0.01em',
                  marginBottom: 8, paddingTop: 20,
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <Pictogram emoji={cat.emoji} tile size={24} />
                  {cat.label}
                </h2>
                <p style={{
                  fontSize: 14, color: '#6B7280',
                  marginBottom: 28, paddingLeft: 40,
                }}>
                  {terms.length} terme{terms.length > 1 ? 's' : ''}
                </p>

                <div style={{
                  display: 'grid', gap: 16,
                  gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                }}>
                  {terms.map(t => (
                    <article
                      key={t.id}
                      id={t.id}
                      style={{
                        padding: 24,
                        background: '#FAFAF7',
                        border: '1px solid #E5E7EB',
                        borderRadius: 12,
                        scrollMarginTop: 100,
                      }}
                    >
                      <h3 style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: 18, fontWeight: 800,
                        color: '#0A0A0A', marginBottom: 10,
                        lineHeight: 1.3,
                      }}>
                        <a
                          href={`#${t.id}`}
                          style={{ color: 'inherit', textDecoration: 'none' }}
                          aria-label={`Lien vers la définition de ${t.term}`}
                        >
                          {t.term}
                        </a>
                      </h3>
                      <p style={{
                        fontSize: 14.5, color: '#374151',
                        lineHeight: 1.65, margin: 0,
                      }}>
                        {t.definition}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═════════════════ CTA FORMATION ═════════════════ */}
      <section style={{
        background: '#0A0A0A', color: '#fff',
        padding: 'clamp(56px, 8vw, 96px) clamp(18px, 4vw, 32px)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 900,
            letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.2,
          }}>
            De la théorie à la pratique : formez vos équipes à l'IA
          </h2>
          <p style={{
            fontSize: 17, color: '#D1D5DB', lineHeight: 1.65,
            marginBottom: 36, maxWidth: 600, margin: '0 auto 36px',
          }}>
            Comprendre les termes, c'est un début. Maîtriser leur usage en entreprise,
            c'est l'étape suivante. Découvrez nos formations IA certifiées Qualiopi (plus de 100 programmes),
            adaptées par métier et par outil.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A',
              padding: '16px 32px', borderRadius: 10,
              textDecoration: 'none', fontSize: 16, fontWeight: 800,
            }}>
              Voir le catalogue formations <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', color: '#fff',
              padding: '16px 32px', borderRadius: 10,
              textDecoration: 'none', fontSize: 16, fontWeight: 700,
              border: '1.5px solid rgba(255,255,255,0.3)',
            }}>
              Demander un devis
            </Link>
          </div>

          <div style={{
            display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap',
          }}>
            {[
              { Icon: BadgeCheck, label: 'Certifié Qualiopi' },
              { Icon: Wallet,     label: 'Finançable OPCO' },
              { Icon: MapPin,     label: 'France · Suisse · Belgique' },
            ].map(({ Icon, label }) => (
              <span key={label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 99,
                padding: '8px 16px',
                fontSize: 13, fontWeight: 600, color: '#fff',
              }}>
                <Icon size={14} color="#60A5FA" strokeWidth={2.5} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ═════════════════ HELPERS ═════════════════
function CategoryTab({ label, emoji, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '8px 14px',
        background: active ? '#0A0A0A' : '#fff',
        color: active ? '#fff' : '#374151',
        border: `1px solid ${active ? '#0A0A0A' : '#E5E7EB'}`,
        borderRadius: 99,
        fontSize: 13, fontWeight: 600,
        cursor: 'pointer',
        whiteSpace: 'nowrap', flexShrink: 0,
        transition: 'all 150ms',
      }}
    >
      <Pictogram emoji={emoji} size={15} color={active ? '#fff' : '#374151'} />
      {label}
    </button>
  )
}
