import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, X, Minus, Trophy, Clock, Calendar, BadgeCheck, Wallet, MapPin } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { COMPARISONS } from '../data/comparisons'

const SITE_URL = 'https://www.master-ia.fr'

export default function ComparisonPage({ slug: propSlug }) {
  const params = useParams()
  const slug = propSlug || params.slug

  const data = COMPARISONS[slug]
  if (!data) {
    return (
      <div style={{ padding: 80, textAlign: 'center' }}>
        <h1>Comparatif non trouvé</h1>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    )
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Comparatifs IA', slug: 'comparatifs-ia' },
    { name: data.h1.split(':')[0].trim(), slug: data.slug },
  ]

  // JSON-LD Article enrichi (Mathias Nizan auteur, dates fraîches, mots-clés)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/${data.slug}#article`,
    headline: data.h1,
    description: data.metaDesc,
    image: `${SITE_URL}/assets/logo-square.png`,
    author: {
      '@type': 'Person',
      name: 'Mathias Nizan',
      jobTitle: 'Fondateur & expert formation IA',
      url: 'https://www.linkedin.com/in/mathias-nizan/',
      affiliation: { '@id': `${SITE_URL}/#organization` },
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Masteria',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo-square.png`, width: 512, height: 512 },
    },
    datePublished: data.datePublished || '2026-05-04',
    dateModified: data.lastUpdate ? '2026-05-05' : '2026-05-05',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${data.slug}` },
    inLanguage: 'fr-FR',
    articleSection: 'Comparatif IA',
    keywords: data.keywords || `comparatif IA, ${data.toolA?.name || ''}, ${data.toolB?.name || ''}, formation IA entreprise`,
    about: data.tools ? data.tools.map(t => ({ '@type': 'SoftwareApplication', name: t.name, applicationCategory: 'AI Assistant' })) : undefined,
    isPartOf: { '@id': `${SITE_URL}/quelle-est-la-meilleure-ia#cluster` },
  }

  // Speakable retiré (cf. audit SEO 2026-05-21) : non supporté hors US/EN
  // et créait un second @type WebPage qui brouillait l'entité primaire.

  // JSON-LD FAQPage
  const faqSchema = data.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  const isPanorama = data.isPanorama

  return (
    <>
      <SEOHead
        title={data.metaTitle}
        description={data.metaDesc}
        slug={data.slug}
        breadcrumbs={breadcrumbs}
        type="article"
        extraJsonLd={faqSchema ? [articleSchema, faqSchema] : [articleSchema]}
      />

      {/* ═════════════ HERO ═════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, #FAFAF7 0%, #fff 100%)',
        padding: 'clamp(72px, 10vw, 120px) clamp(18px, 4vw, 32px) clamp(40px, 6vw, 64px)',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          {/* Breadcrumb visuel */}
          <nav aria-label="Fil d'Ariane" style={{
            fontSize: 13, color: '#6B7280', marginBottom: 28,
            display: 'flex', gap: 8, flexWrap: 'wrap',
          }}>
            <Link to="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Accueil</Link>
            <span>›</span>
            <span>Comparatifs IA</span>
            <span>›</span>
            <span style={{ color: '#0A0A0A', fontWeight: 600 }}>{data.h1.split(':')[0].trim()}</span>
          </nav>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EFF6FF', color: '#2563EB',
            padding: '7px 16px', borderRadius: 99,
            fontSize: 13, fontWeight: 700, marginBottom: 20,
          }}>
            <Trophy size={14} />
            Comparatif {data.lastUpdate}
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 900,
            letterSpacing: '-0.02em', color: '#0A0A0A',
            marginBottom: 24, lineHeight: 1.1,
          }}>
            {data.h1}
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)', color: '#374151',
            lineHeight: 1.65, marginBottom: 24,
          }}
            dangerouslySetInnerHTML={{ __html: formatBold(data.intro) }}
          />

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: '#6B7280' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} /> Mis à jour : {data.lastUpdate}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} /> Lecture : {data.readTime}
            </span>
            <span>Par les formateurs Masteria</span>
          </div>
        </div>
      </section>

      {/* ═════════════ TOOLS HEADER (face-à-face ou panorama) ═════════════ */}
      {!isPanorama && (
        <section style={{
          padding: 'clamp(40px, 6vw, 72px) clamp(18px, 4vw, 32px)',
          background: '#fff',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
              alignItems: 'stretch',
            }}>
              <ToolCard tool={data.toolA} />
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Nunito, sans-serif',
                fontSize: 32, fontWeight: 900, color: '#9CA3AF',
              }}>
                VS
              </div>
              <ToolCard tool={data.toolB} />
            </div>
          </div>
        </section>
      )}

      {isPanorama && (
        <section style={{
          padding: 'clamp(40px, 6vw, 72px) clamp(18px, 4vw, 32px)',
          background: '#fff',
        }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
            }}>
              {data.tools.map(t => (
                <div key={t.id} style={{
                  padding: 20,
                  background: '#FAFAF7',
                  border: '1px solid #E5E7EB',
                  borderTop: `4px solid ${t.color}`,
                  borderRadius: 12,
                }}>
                  <div style={{ fontFamily: 'Nunito', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 12 }}>
                    {t.editor} · {t.country}
                  </div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.5, marginBottom: 12 }}>
                    {t.strengths}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: t.color }}>
                    {t.priceMonthly}/mois
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ VERDICT EN 30 SECONDES ═════════════ */}
      <section style={{
        padding: 'clamp(40px, 6vw, 80px) clamp(18px, 4vw, 32px)',
        background: '#FAFAF7',
        borderTop: '1px solid #E5E7EB',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 900,
            color: '#0A0A0A', marginBottom: 20, letterSpacing: '-0.01em',
          }}>
            {data.verdict.title}
          </h2>
          <p
            style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, marginBottom: 32 }}
            dangerouslySetInnerHTML={{ __html: formatBold(data.verdict.summary) }}
          />

          {!isPanorama && (
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20,
            }}>
              <div style={{ padding: 24, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: data.toolA.color, marginBottom: 12 }}>
                  ✓ Choisir {data.toolA.name} si...
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {data.verdict.recommendA?.map(r => (
                    <li key={r} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                      <Check size={16} color="#10B981" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: 24, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: data.toolB.color, marginBottom: 12 }}>
                  ✓ Choisir {data.toolB.name} si...
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {data.verdict.recommendB?.map(r => (
                    <li key={r} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                      <Check size={16} color="#10B981" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {isPanorama && data.verdict.profiles && (
            <div style={{ display: 'grid', gap: 12 }}>
              {data.verdict.profiles.map((p, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(180px, 1fr) minmax(120px, auto) 2fr',
                  gap: 16, padding: 18, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10,
                  alignItems: 'center',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A' }}>{p.profile}</div>
                  <div style={{
                    fontSize: 13, fontWeight: 700, color: '#2563EB',
                    background: '#EFF6FF', padding: '6px 12px', borderRadius: 99,
                    textAlign: 'center', whiteSpace: 'nowrap',
                  }}>{p.tool}</div>
                  <div style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.55 }}>{p.why}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═════════════ COMPARAISON DÉTAILLÉE (face-à-face) ═════════════ */}
      {!isPanorama && data.criteria && (
        <section style={{
          padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
          background: '#fff',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              Comparatif détaillé : {data.toolA.name} vs {data.toolB.name}
            </h2>
            <p style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 640, margin: '0 auto 56px',
            }}>
              {data.criteria.length} critères analysés objectivement, basés sur l'usage réel par 1 500+ professionnels formés.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {data.criteria.map((c, i) => (
                <div key={i} style={{
                  padding: 28, background: '#FAFAF7',
                  border: '1px solid #E5E7EB', borderRadius: 14,
                }}>
                  <h3 style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 21, fontWeight: 800, color: '#0A0A0A',
                    marginBottom: 8, lineHeight: 1.3,
                  }}>
                    {i + 1}. {c.title}
                  </h3>
                  <div style={{
                    display: 'inline-block',
                    fontSize: 12, fontWeight: 700,
                    color: c.winner === 'a' ? data.toolA.color
                         : c.winner === 'b' ? data.toolB.color
                         : '#6B7280',
                    background: c.winner === 'a' ? `${data.toolA.color}15`
                              : c.winner === 'b' ? `${data.toolB.color}15`
                              : '#F3F4F6',
                    padding: '4px 12px', borderRadius: 99, marginBottom: 20,
                  }}>
                    {c.winner === 'tie' ? '🤝 ' : '🏆 '}{c.winnerText}
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 20,
                  }}>
                    <div style={{ paddingLeft: 16, borderLeft: `3px solid ${data.toolA.color}` }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: data.toolA.color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {data.toolA.name}
                      </div>
                      <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                        {c.descriptionA}
                      </p>
                    </div>
                    <div style={{ paddingLeft: 16, borderLeft: `3px solid ${data.toolB.color}` }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: data.toolB.color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {data.toolB.name}
                      </div>
                      <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                        {c.descriptionB}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ DEEP DIVE PAR OUTIL (panorama uniquement) ═════════════ */}
      {isPanorama && data.deepDive && (
        <section style={{
          padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
          background: '#fff',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              Analyse approfondie des 5 outils
            </h2>
            <p style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 640, margin: '0 auto 56px',
            }}>
              Forces, faiblesses et profil idéal pour chaque outil.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {data.deepDive.map((tool, i) => {
                const toolData = data.tools.find(t => t.id === tool.tool)
                return (
                  <div key={i} style={{
                    padding: 32, background: '#FAFAF7',
                    border: '1px solid #E5E7EB',
                    borderTop: `5px solid ${toolData?.color || '#6B7280'}`,
                    borderRadius: 14,
                  }}>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: toolData?.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
                        {tool.position}
                      </div>
                      <h3 style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: 24, fontWeight: 900, color: '#0A0A0A',
                        margin: 0, letterSpacing: '-0.01em',
                      }}>
                        {tool.title}
                      </h3>
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: 20, marginBottom: 20,
                    }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#10B981', marginBottom: 10 }}>
                          ✓ Points forts
                        </div>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {tool.pros.map((p, j) => (
                            <li key={j} style={{ fontSize: 14, color: '#374151', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                              <Check size={15} color="#10B981" style={{ flexShrink: 0, marginTop: 2 }} />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#EF4444', marginBottom: 10 }}>
                          ✗ Points faibles
                        </div>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {tool.cons.map((p, j) => (
                            <li key={j} style={{ fontSize: 14, color: '#374151', lineHeight: 1.55, display: 'flex', gap: 8 }}>
                              <X size={15} color="#EF4444" style={{ flexShrink: 0, marginTop: 2 }} />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{
                      padding: '14px 20px', background: '#fff',
                      border: '1px dashed #E5E7EB', borderRadius: 10,
                    }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: 12 }}>
                        Idéal pour :
                      </span>
                      <span style={{ fontSize: 14, color: '#0A0A0A', fontWeight: 600 }}>
                        {tool.idealFor}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ TABLEAU SYNTHÈSE (panorama uniquement) ═════════════ */}
      {isPanorama && data.comparisonTable && (
        <section style={{
          padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
          background: '#FAFAF7',
        }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 32, letterSpacing: '-0.01em',
              textAlign: 'center',
            }}>
              Tableau de synthèse
            </h2>
            <div style={{ overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                <thead>
                  <tr style={{ background: '#FAFAF7' }}>
                    <th style={thStyle}>Critère</th>
                    {data.tools.map(t => (
                      <th key={t.id} style={{ ...thStyle, color: t.color }}>{t.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Rendu dynamique : itère sur data.tools[] et lit row[tool.id].
                      Évite le bug où les comparatifs spécialisés (meilleure-ia-pour-coder
                      avec github-copilot/cursor, meilleur-agent-ia avec manus) affichaient
                      des colonnes vides parce que le template hardcodait chatgpt/claude/copilot/gemini/mistral. */}
                  {data.comparisonTable.map((row, i) => (
                    <tr key={i} style={{ borderTop: '1px solid #F3F4F6' }}>
                      <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A' }}>{row.criterion}</td>
                      {data.tools.map(t => (
                        <td key={t.id} style={tdStyle}>{row[t.id] ?? '—'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ MÉTHODOLOGIE (E-E-A-T) ═════════════ */}
      {data.methodology && (
        <section style={{
          padding: 'clamp(32px, 4vw, 48px) clamp(18px, 4vw, 32px)',
          background: '#fff',
          borderTop: '1px solid #E5E7EB',
        }}>
          <div style={{
            maxWidth: 880, margin: '0 auto',
            background: '#F0F9FF',
            border: '1px solid #BAE6FD',
            borderLeft: '4px solid #2563EB',
            borderRadius: 10,
            padding: '20px 24px',
          }}>
            <div style={{
              display: 'inline-block',
              fontSize: 11, fontWeight: 800, color: '#2563EB',
              textTransform: 'uppercase', letterSpacing: '0.08em',
              marginBottom: 8,
            }}>
              Notre méthodologie
            </div>
            <p
              style={{ fontSize: 14.5, color: '#1E3A8A', lineHeight: 1.65, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: formatBold(data.methodology) }}
            />
          </div>
        </section>
      )}

      {/* ═════════════ CAS PRATIQUES (long-tail SEO + dwell time) ═════════════ */}
      {data.realCases && (
        <section style={{
          padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
          background: '#fff',
          borderTop: '1px solid #E5E7EB',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              Cas pratiques : qui gagne sur vos vrais usages ?
            </h2>
            <p style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 700, margin: '0 auto 56px',
            }}>
              {data.realCases.length} scénarios professionnels concrets exploitant les fonctionnalités avancées des forfaits entreprise (Projects, Artifacts, Code Interpreter, Custom GPTs, Microsoft Graph, Researcher, Operator, MCP).
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {data.realCases.map((c, i) => {
                // Winner peut être : 'a'/'b'/'tie' (face-à-face) OU un tool.id (panorama)
                let winnerTool
                if (c.winner === 'tie') {
                  winnerTool = { name: 'Match nul', color: '#6B7280' }
                } else if (c.winner === 'a') {
                  winnerTool = data.toolA
                } else if (c.winner === 'b') {
                  winnerTool = data.toolB
                } else if (data.tools) {
                  // Panorama : recherche par id dans data.tools
                  winnerTool = data.tools.find(t => t.id === c.winner) || { name: c.winner, color: '#6B7280' }
                } else {
                  winnerTool = { name: c.winner, color: '#6B7280' }
                }
                return (
                  <article key={i} style={{
                    background: '#FAFAF7',
                    border: '1px solid #E5E7EB',
                    borderRadius: 14,
                    padding: 28,
                  }}>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        fontSize: 11, fontWeight: 800, color: '#6B7280',
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        marginBottom: 10,
                      }}>
                        Cas #{i + 1}
                      </div>
                      <h3 style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: 19, fontWeight: 800, color: '#0A0A0A',
                        marginBottom: 8, lineHeight: 1.3,
                      }}>
                        {c.scenario}
                      </h3>
                      {c.feature && (
                        <div style={{
                          fontSize: 12.5, color: '#4338CA',
                          background: '#EEF2FF',
                          padding: '5px 10px', borderRadius: 6,
                          display: 'inline-block', fontWeight: 600,
                        }}>
                          ⚙ {c.feature}
                        </div>
                      )}
                    </div>

                    {c.prompt && (
                      <div style={{
                        background: '#0F172A', color: '#E2E8F0',
                        borderRadius: 8, padding: 18,
                        fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                        fontSize: 13, lineHeight: 1.6, marginBottom: 18,
                        position: 'relative',
                      }}>
                        <div style={{
                          position: 'absolute', top: 10, right: 14,
                          fontSize: 10, color: '#64748B', fontWeight: 700,
                          textTransform: 'uppercase', letterSpacing: '0.1em',
                        }}>
                          Prompt
                        </div>
                        {c.prompt}
                      </div>
                    )}

                    <div style={{
                      padding: '16px 20px',
                      background: '#fff',
                      border: `1.5px solid ${winnerTool.color}30`,
                      borderLeft: `4px solid ${winnerTool.color}`,
                      borderRadius: 10,
                    }}>
                      <div style={{
                        display: 'inline-block',
                        fontSize: 12, fontWeight: 800, color: winnerTool.color,
                        background: `${winnerTool.color}15`,
                        padding: '4px 12px', borderRadius: 99,
                        marginBottom: 10,
                      }}>
                        {c.winner === 'tie' ? '🤝 ' : '🏆 '}Verdict : {winnerTool.name}
                      </div>
                      <p
                        style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: formatBold(c.verdictText) }}
                      />
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ USE CASES PAR MÉTIER ═════════════ */}
      {data.useCases && (
        <section style={{
          padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
          background: isPanorama ? '#fff' : '#FAFAF7',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              Notre recommandation par métier
            </h2>
            <p style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
            }}>
              Basé sur les retours de 1 500+ professionnels formés depuis 2022.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {data.useCases.map((u, i) => {
                const tool = u.recommendation === 'tie'
                  ? { name: 'Match nul', color: '#6B7280' }
                  : u.recommendation === 'a'
                  ? data.toolA
                  : u.recommendation === 'b'
                  ? data.toolB
                  : { name: u.recommendation, color: '#6B7280' }

                return (
                  <div key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(200px, 1.5fr) minmax(120px, auto) 2.5fr',
                    gap: 20, padding: 20,
                    background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10,
                    alignItems: 'center',
                  }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A' }}>
                      {u.metier}
                    </div>
                    <div style={{
                      fontSize: 13, fontWeight: 700, color: tool.color,
                      background: `${tool.color}15`,
                      padding: '6px 14px', borderRadius: 99,
                      textAlign: 'center', whiteSpace: 'nowrap',
                    }}>
                      {tool.name}
                    </div>
                    <div style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.55 }}>
                      {u.why}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ COÛT ANNUEL PAR TAILLE (panorama uniquement) ═════════════ */}
      {data.costScenarios && (
        <section style={{
          padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
          background: '#FAFAF7',
          borderTop: '1px solid #E5E7EB',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              Combien ça coûte vraiment ?
            </h2>
            <p style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 700, margin: '0 auto 48px',
            }}>
              Estimations annuelles selon la taille de l'entreprise (abonnement uniquement, hors formation et accompagnement).
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {data.costScenarios.map((s, i) => (
                <div key={i} style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 24,
                  display: 'grid',
                  gridTemplateColumns: 'minmax(220px, 1fr) minmax(140px, auto) 2.5fr',
                  gap: 24,
                  alignItems: 'flex-start',
                }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                      Taille d'entreprise
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.4 }}>
                      {s.size}
                    </div>
                  </div>
                  <div style={{
                    background: '#0A0A0A', color: '#fff',
                    padding: '12px 16px', borderRadius: 8,
                    textAlign: 'center', whiteSpace: 'nowrap',
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: 2 }}>
                      Budget
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800 }}>
                      {s.annualCost}
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: 11, fontWeight: 700, color: '#2563EB',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      marginBottom: 6,
                    }}>
                      Stack recommandée
                    </div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0A0A0A', marginBottom: 8 }}>
                      {s.recommendation}
                    </div>
                    <p style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                      {s.rationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 32, padding: '16px 20px',
              background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8,
              fontSize: 13.5, color: '#1E3A8A', lineHeight: 1.6,
            }}>
              💡 <strong>À retenir :</strong> les abonnements représentent ~5-10 % du coût total. Le ROI vient de la formation (~760 €/personne) et de l'adoption.
              Le retour sur investissement typique est de moins d'1 mois pour les profils cadres formés.
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ ERREURS FRÉQUENTES (People Also Ask SEO) ═════════════ */}
      {data.mistakes && (
        <section style={{
          padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
          background: '#fff',
          borderTop: '1px solid #E5E7EB',
        }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              {data.mistakes.length} erreurs fréquentes à éviter
            </h2>
            <p style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
            }}>
              Les pièges les plus courants observés sur les déploiements IA en entreprise depuis 2022.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {data.mistakes.map((m, i) => (
                <div key={i} style={{
                  background: '#FEF2F2',
                  border: '1px solid #FECACA',
                  borderLeft: '4px solid #DC2626',
                  borderRadius: 10,
                  padding: '20px 24px',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                  }}>
                    <div style={{
                      flexShrink: 0, fontSize: 22, lineHeight: 1, marginTop: 2,
                    }}>
                      ⚠️
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: 17, fontWeight: 800, color: '#991B1B',
                        marginBottom: 8, lineHeight: 1.35,
                      }}>
                        Erreur n°{i + 1} : {m.title}
                      </h3>
                      <p style={{
                        fontSize: 14.5, color: '#374151',
                        lineHeight: 1.65, margin: 0,
                      }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ OUTILS ALTERNATIFS (also-rans pour compléter le maillage) ═════════════ */}
      {data.alsoConsidered && (
        <section style={{
          padding: 'clamp(40px, 6vw, 72px) clamp(18px, 4vw, 32px)',
          background: '#FAFAF7',
        }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 14, letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              Et les autres outils alors&nbsp;?
            </h2>
            <p style={{
              fontSize: 15, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 600, margin: '0 auto 36px',
            }}>
              Quelques alternatives parfois citées dans les réflexions d'achat.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 14,
            }}>
              {data.alsoConsidered.map((t, i) => (
                <div key={i} style={{
                  padding: 18, background: '#fff',
                  border: '1px solid #E5E7EB', borderRadius: 10,
                }}>
                  <div style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 15, fontWeight: 800, color: '#0A0A0A',
                    marginBottom: 8,
                  }}>
                    {t.name}
                  </div>
                  <p
                    style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.6, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: linkify(t.summary) }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ FAQ ═════════════ */}
      {data.faq && (
        <section style={{
          padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
          background: '#FAFAF7',
        }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 40, letterSpacing: '-0.02em',
              textAlign: 'center',
            }}>
              Questions fréquentes
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {data.faq.map((item, i) => (
                <details key={i} style={{
                  padding: '20px 24px', background: '#fff',
                  border: '1px solid #E5E7EB', borderRadius: 12,
                  cursor: 'pointer',
                }}>
                  <summary style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 17, fontWeight: 800, color: '#0A0A0A',
                    listStyle: 'none', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', gap: 12,
                  }}>
                    {item.q}
                    <span style={{ fontSize: 22, color: '#9CA3AF', flexShrink: 0 }}>+</span>
                  </summary>
                  <div style={{
                    marginTop: 14, fontSize: 15, color: '#374151', lineHeight: 1.65,
                  }}
                    dangerouslySetInnerHTML={{ __html: formatBold(item.a) }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ LIENS RELATÉS (maillage interne) ═════════════ */}
      {data.relatedLinks && (
        <section style={{
          padding: 'clamp(40px, 6vw, 72px) clamp(18px, 4vw, 32px)',
          background: '#fff',
          borderTop: '1px solid #E5E7EB',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 22, fontWeight: 800, color: '#0A0A0A',
              marginBottom: 24, textAlign: 'center',
            }}>
              Pour aller plus loin
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 12,
            }}>
              {data.relatedLinks.map(l => (
                <Link key={l.href} to={l.href} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: '#FAFAF7', border: '1px solid #E5E7EB', borderRadius: 10,
                  textDecoration: 'none', color: '#0A0A0A',
                  fontSize: 14.5, fontWeight: 600,
                }}>
                  {l.label}
                  <ArrowRight size={15} color="#6B7280" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ CTA FORMATION ═════════════ */}
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
            Vous hésitez encore ? Testez avant de choisir.
          </h2>
          <p style={{
            fontSize: 17, color: '#D1D5DB', lineHeight: 1.65,
            marginBottom: 36, maxWidth: 600, margin: '0 auto 36px',
          }}>
            Nos formations multi-outils permettent à vos équipes de tester les 5 IA principales sur leurs cas d'usage réels avant de décider. 2 jours, certifié Qualiopi, finançable OPCO.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <Link to="/formation-multi-outils" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A',
              padding: '16px 32px', borderRadius: 10,
              textDecoration: 'none', fontSize: 16, fontWeight: 800,
            }}>
              Voir la formation multi-outils <ArrowRight size={16} />
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

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { Icon: BadgeCheck, label: 'Certifié Qualiopi' },
              { Icon: Wallet,     label: 'Finançable OPCO' },
              { Icon: MapPin,     label: 'France · Suisse · Belgique' },
            ].map(({ Icon, label }) => (
              <span key={label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 99, padding: '8px 16px',
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

// ═══════════════════ HELPERS ═══════════════════
function ToolCard({ tool }) {
  return (
    <div style={{
      padding: 28, background: '#fff',
      border: '1px solid #E5E7EB',
      borderTop: `5px solid ${tool.color}`,
      borderRadius: 14,
    }}>
      <div style={{
        display: 'inline-block', fontSize: 11, fontWeight: 800, color: tool.color,
        background: `${tool.color}15`, padding: '4px 10px', borderRadius: 99,
        textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12,
      }}>
        {tool.editor}
      </div>
      <h2 style={{
        fontFamily: 'Nunito, sans-serif',
        fontSize: 28, fontWeight: 900, color: '#0A0A0A',
        marginBottom: 8, letterSpacing: '-0.01em',
      }}>
        {tool.name}
      </h2>
      <div style={{ fontSize: 13, color: '#6B7280', marginBottom: 18 }}>
        Modèle : {tool.currentModel}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
        <div><span style={{ color: '#6B7280' }}>Pays :</span> <span style={{ color: '#0A0A0A', fontWeight: 600 }}>{tool.country}</span></div>
        <div><span style={{ color: '#6B7280' }}>Lancement :</span> <span style={{ color: '#0A0A0A', fontWeight: 600 }}>{tool.foundedAI}</span></div>
        <div style={{ marginTop: 6 }}><span style={{ color: '#6B7280' }}>Tarifs :</span> <span style={{ color: '#0A0A0A', fontWeight: 600 }}>{tool.pricing}</span></div>
      </div>
    </div>
  )
}

function formatBold(text) {
  if (!text) return ''
  // Convert **text** to <strong>text</strong>
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

function linkify(text) {
  if (!text) return ''
  // Convert [label](href) → <a href> (internal only — no http) + bold
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#2563EB;font-weight:600;text-decoration:none;border-bottom:1px solid currentColor">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

const thStyle = {
  padding: '14px 16px', textAlign: 'left',
  fontSize: 13, fontWeight: 800, color: '#0A0A0A',
  borderBottom: '2px solid #E5E7EB',
}
const tdStyle = {
  padding: '14px 16px', fontSize: 13, color: '#374151',
  verticalAlign: 'top', lineHeight: 1.5,
}
