import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, BadgeCheck, Wallet, MapPin, Check } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import Pictogram from '../components/Pictogram'
import { COMPARISONS, COMPARISONS_INDEX } from '../data/comparisons'

const SITE_URL = 'https://www.master-ia.fr'

export default function ComparisonsHubPage() {
  // JSON-LD CollectionPage + ItemList
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "Quelle est la meilleure IA en 2026 ?",
    url: `${SITE_URL}/quelle-est-la-meilleure-ia`,
    description: "La meilleure IA dépend de votre suite, de votre métier et de vos données : méthode de décision et sept comparatifs (ChatGPT, Claude, Copilot, Gemini, Mistral), revus le 7 octobre 2026.",
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: COMPARISONS_INDEX.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/${c.slug}`,
        name: c.title,
      })),
    },
  }

  // FAQ JSON-LD : même contenu que la FAQ visible (champ `text` de FAQ_ITEMS)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.text },
    })),
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Quelle est la meilleure IA', slug: 'quelle-est-la-meilleure-ia' },
  ]

  return (
    <>
      <SEOHead
        title="Quelle est la meilleure IA en 2026 ? | Masteria"
        description="Quelle est la meilleure IA en 2026 ? ChatGPT, Claude, Copilot, Gemini ou Mistral selon votre suite, votre métier et vos données. Revu le 7 octobre 2026."
        slug="quelle-est-la-meilleure-ia"
        breadcrumbs={breadcrumbs}
        dateModified={HUB_DATE_MODIFIED}
        citations={HUB_SOURCES.flatMap(group => group.items)}
        extraJsonLd={[itemListSchema, faqSchema]}
      />

      {/* ═════════════ HERO ═════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, #FAFAF7 0%, #fff 100%)',
        padding: 'clamp(72px, 10vw, 120px) clamp(18px, 4vw, 32px) clamp(40px, 6vw, 64px)',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EFF6FF', color: '#2563EB',
            padding: '7px 16px', borderRadius: 99,
            fontSize: 13, fontWeight: 700, marginBottom: 24,
          }}>
            <Trophy size={14} />
            Hub comparatifs IA · {COMPARISONS_INDEX.length} guides à jour
          </div>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
            letterSpacing: '-0.02em', color: '#0A0A0A',
            marginBottom: 24, lineHeight: 1.1,
          }}>
            Quelle est la meilleure IA en 2026&nbsp;?
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)', color: '#374151',
            lineHeight: 1.65, maxWidth: 720, margin: '0 auto 18px',
          }}>
            Aucun outil ne l'emporte partout : la bonne IA dépend de la suite bureautique de vos équipes, de leur métier et des règles qui encadrent vos données.
            Cette page vous donne une méthode de décision en trois minutes pour départager Microsoft Copilot, Google Gemini, ChatGPT, Claude et Mistral AI, puis l'accès à nos sept comparatifs détaillés.
          </p>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible, comme sur les comparatifs */}
          <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, maxWidth: 720, margin: '0 auto 32px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#0A0A0A', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour le <time dateTime={HUB_DATE_MODIFIED}>{HUB_DATE_TEXTE}</time>, modèles et tarifs relus sur les <a href="#sources-officielles" style={{ color: '#2563EB', fontWeight: 600 }}>pages officielles des éditeurs</a>
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#decision-rapide" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#0A0A0A', color: '#fff',
              padding: '14px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 800,
            }}>
              Décision rapide en 3 minutes <ArrowRight size={16} />
            </a>
            <Link to="/quel-outil-ia" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#0A0A0A', border: '1px solid #E5E7EB',
              padding: '14px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 700,
            }}>
              Simuler le choix selon votre métier <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═════════════ DÉCISION RAPIDE ═════════════ */}
      <section id="decision-rapide" style={{
        padding: 'clamp(48px, 7vw, 88px) clamp(18px, 4vw, 32px)',
        background: '#FAFAF7',
        scrollMarginTop: 80,
      }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
            color: '#0A0A0A', letterSpacing: '-0.02em',
            marginBottom: 14, textAlign: 'center', lineHeight: 1.15,
          }}>
            Votre profil → Notre recommandation
          </h2>
          <p style={{
            fontSize: 16, color: '#6B7280', lineHeight: 1.6,
            textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
          }}>
            Six situations d'entreprise, et l'outil que nous conseillons pour chacune.
          </p>

          <div style={{ display: 'grid', gap: 14 }}>
            {DECISION_PROFILES.map((p, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(220px, 1.3fr) minmax(160px, auto) 2.4fr',
                gap: 20, padding: 22,
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12,
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                    Profil
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4 }}>
                    {p.profile}
                  </div>
                </div>
                <div style={{
                  fontSize: 14, fontWeight: 800, color: p.color,
                  background: `${p.color}15`,
                  padding: '10px 18px', borderRadius: 99,
                  textAlign: 'center', whiteSpace: 'nowrap',
                  border: `1.5px solid ${p.color}30`,
                }}>
                  {p.tool}
                </div>
                <div>
                  <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.55, margin: 0, marginBottom: 8 }}>
                    {p.why}
                  </p>
                  {p.deepLink && (
                    <Link to={p.deepLink} style={{
                      fontSize: 13, fontWeight: 700, color: p.color,
                      textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
                    }}>
                      Voir le comparatif détaillé <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════ TOUS LES COMPARATIFS ═════════════ */}
      <section style={{
        padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
            color: '#0A0A0A', letterSpacing: '-0.02em',
            marginBottom: 14, textAlign: 'center', lineHeight: 1.15,
          }}>
            Tous nos comparatifs IA
          </h2>
          <p style={{
            fontSize: 16, color: '#6B7280', lineHeight: 1.6,
            textAlign: 'center', maxWidth: 640, margin: '0 auto 56px',
          }}>
            Sept guides datés et sourcés ; modèles et tarifs revus le {HUB_DATE_TEXTE}.
          </p>

          {/* Hero comparatif (panorama 5 outils) */}
          {COMPARISONS_INDEX.filter(c => c.isHero).map(c => (
            <Link key={c.slug} to={`/${c.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 24 }}>
              <div style={{
                background: 'linear-gradient(135deg, #0A0A0A 0%, #1F2937 100%)',
                color: '#fff',
                borderRadius: 18,
                padding: 'clamp(28px, 4vw, 48px)',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) auto',
                gap: 'clamp(20px, 3vw, 40px)',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{
                    display: 'inline-flex',
                    fontSize: 11, fontWeight: 800, color: '#FCD34D',
                    background: 'rgba(252,211,77,0.15)',
                    padding: '5px 12px', borderRadius: 99,
                    marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    {c.badge}
                  </div>
                  <h3 style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 900,
                    lineHeight: 1.2, marginBottom: 10,
                  }}>
                    {c.title}
                  </h3>
                  <p style={{
                    fontSize: 15, color: '#D1D5DB',
                    fontWeight: 600, marginBottom: 14, lineHeight: 1.4,
                  }}>
                    {c.subtitle}
                  </p>
                  <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 0 }}>
                    {c.excerpt}
                  </p>
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#fff', color: '#0A0A0A',
                  padding: '14px 24px', borderRadius: 10,
                  fontSize: 14, fontWeight: 800, whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  Lire le guide <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}

          {/* Face-à-face comparatifs (cards en grille) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 20,
          }}>
            {COMPARISONS_INDEX.filter(c => !c.isHero).map(c => {
              const data = COMPARISONS[c.slug]
              return (
                <Link key={c.slug} to={`/${c.slug}`} style={{ textDecoration: 'none' }}>
                  <article style={{
                    background: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: 14,
                    padding: 28,
                    height: '100%',
                    display: 'flex', flexDirection: 'column',
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#CBD5E1'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  >
                    {/* VS visuel pour les face-à-face, liste pour les panoramas spécialisés */}
                    {data && data.toolA && data.toolB && (
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        marginBottom: 18, fontSize: 14, fontWeight: 800,
                      }}>
                        <span style={{
                          padding: '4px 10px',
                          background: `${data.toolA.color}15`,
                          color: data.toolA.color,
                          borderRadius: 6, fontSize: 12,
                        }}>
                          {data.toolA.name}
                        </span>
                        <span style={{ color: '#9CA3AF', fontSize: 11, fontWeight: 700 }}>VS</span>
                        <span style={{
                          padding: '4px 10px',
                          background: `${data.toolB.color}15`,
                          color: data.toolB.color,
                          borderRadius: 6, fontSize: 12,
                        }}>
                          {data.toolB.name}
                        </span>
                      </div>
                    )}
                    {data && data.tools && !data.toolA && (
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        marginBottom: 18, flexWrap: 'wrap',
                      }}>
                        {data.tools.map(t => (
                          <span key={t.id} style={{
                            padding: '4px 10px',
                            background: `${t.color}15`,
                            color: t.color,
                            borderRadius: 6, fontSize: 11, fontWeight: 700,
                          }}>
                            {t.name.split(' ')[0]}
                          </span>
                        ))}
                      </div>
                    )}

                    <div style={{
                      display: 'inline-block',
                      fontSize: 10, fontWeight: 800, color: '#6B7280',
                      background: '#F3F4F6',
                      padding: '4px 10px', borderRadius: 99,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      marginBottom: 14, alignSelf: 'flex-start',
                    }}>
                      {c.badge}
                    </div>
                    <h3 style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: 19, fontWeight: 800, color: '#0A0A0A',
                      lineHeight: 1.3, marginBottom: 8,
                    }}>
                      {c.title}
                    </h3>
                    <p style={{
                      fontSize: 13.5, fontWeight: 600, color: '#475569',
                      marginBottom: 12, lineHeight: 1.5,
                    }}>
                      {c.subtitle}
                    </p>
                    <p style={{
                      fontSize: 13.5, color: '#6B7280',
                      lineHeight: 1.6, marginBottom: 18, flex: 1,
                    }}>
                      {c.excerpt}
                    </p>

                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      color: '#2563EB', fontSize: 13, fontWeight: 700,
                    }}>
                      Lire le comparatif <ArrowRight size={14} />
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═════════════ MÉTHODE : 5 QUESTIONS ═════════════ */}
      <section style={{
        padding: 'clamp(48px, 7vw, 96px) clamp(18px, 4vw, 32px)',
        background: '#FAFAF7',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900,
            color: '#0A0A0A', letterSpacing: '-0.02em',
            marginBottom: 14, textAlign: 'center', lineHeight: 1.15,
          }}>
            Cinq questions à trancher avant de choisir
          </h2>
          <p style={{
            fontSize: 16, color: '#6B7280', lineHeight: 1.6,
            textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
          }}>
            Répondez-y avant le moindre essai : la liste des candidats se réduit vite.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {METHOD_QUESTIONS.map((q, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid #E5E7EB',
                borderRadius: 12, padding: 24,
              }}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                }}>
                  <div style={{
                    flexShrink: 0, width: 36, height: 36,
                    borderRadius: '50%', background: '#0A0A0A',
                    color: '#fff', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: 15, fontWeight: 800,
                    fontFamily: 'Nunito, sans-serif',
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: 17, fontWeight: 800, color: '#0A0A0A',
                      marginBottom: 8, lineHeight: 1.35,
                    }}>
                      {q.question}
                    </h3>
                    <p style={{
                      fontSize: 14.5, color: '#374151',
                      lineHeight: 1.6, marginBottom: 0,
                    }}>
                      {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════ ERREURS FRÉQUENTES ═════════════ */}
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
            Cinq faux pas qui faussent le choix
          </h2>
          <p style={{
            fontSize: 16, color: '#6B7280', lineHeight: 1.6,
            textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
          }}>
            Ces faux pas reviennent dès qu'une direction choisit un assistant sans essai préalable.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CLUSTER_MISTAKES.map((m, i) => (
              <div key={i} style={{
                background: '#FEF2F2',
                border: '1px solid #FECACA',
                borderLeft: '4px solid #DC2626',
                borderRadius: 10,
                padding: '20px 24px',
                display: 'flex', alignItems: 'flex-start', gap: 14,
              }}>
                <div style={{ lineHeight: 1, marginTop: 2, flexShrink: 0 }}>
                  <Pictogram emoji={'\u{26A0}'} size={22} color="#DC2626" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: 17, fontWeight: 800, color: '#991B1B',
                    marginBottom: 8, lineHeight: 1.35,
                  }}>
                    Erreur n°{i + 1} : {m.title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════ FAQ ═════════════ */}
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
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} style={{
                padding: '20px 24px', background: '#FAFAF7',
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
                }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════ SOURCES OFFICIELLES (mêmes URL que WebPage.citation) ═════════════ */}
      <section id="sources-officielles" aria-labelledby="sources-officielles-titre" style={{
        padding: 'clamp(40px, 6vw, 64px) clamp(18px, 4vw, 32px)',
        background: '#fff',
        borderTop: '1px solid #E5E7EB',
        scrollMarginTop: 80,
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-officielles-titre" style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: 22, fontWeight: 800, color: '#0A0A0A',
            margin: '0 0 8px',
          }}>
            Sources officielles
          </h2>
          <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.6, margin: '0 0 24px' }}>
            Nous avons relu le <time dateTime={HUB_DATE_MODIFIED}>{HUB_DATE_TEXTE}</time> les modèles, les prix et les limites de texte cités ici, sur les pages officielles ci-dessous.
            Une offre peut changer d'une semaine à l'autre : la page de l'éditeur fait foi, et chaque comparatif détaillé donne ses propres sources.
          </p>
          <div style={{ display: 'grid', gap: 22 }}>
            {HUB_SOURCES.map(({ group, items }) => (
              <div key={group}>
                <h3 style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 15.5, fontWeight: 800, color: '#0A0A0A',
                  margin: '0 0 10px',
                }}>
                  {group}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 14.5, lineHeight: 1.55 }}>
                  {items.map(({ name, url }) => (
                    <li key={url}>
                      {/* Liens éditoriaux vers des sources de référence : suivis volontairement (pas de nofollow) */}
                      <a href={url} target="_blank" rel="noopener" style={{ color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Encore un doute ? Laissez vos équipes trancher sur pièces.
          </h2>
          <p style={{
            fontSize: 17, color: '#D1D5DB', lineHeight: 1.65,
            marginBottom: 36, maxWidth: 600, margin: '0 auto 36px',
          }}>
            En deux jours de formation multi-outils, vos collaborateurs passent d'un assistant à l'autre sur leurs propres dossiers, jusqu'à une grille de choix commune. Masteria détient Qualiopi au titre des actions de formation et prépare le dossier ; c'est votre OPCO de branche qui tranche ensuite, selon son barème.
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
              { Icon: MapPin,     label: 'Europe · États-Unis · Inde' },
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

// ═════════════════ DATA STATIC ═════════════════

// Date de la dernière vérification des faits de la page (format ISO, affichée en clair dans le texte)
const HUB_DATE_MODIFIED = '2026-10-07'
const HUB_DATE_TEXTE = '7 octobre 2026'

// Sources officielles relues le 7 octobre 2026 : bloc visible + WebPage.citation (SEOHead)
const HUB_SOURCES = [
  {
    group: "OpenAI (ChatGPT)",
    items: [
      { name: "Grille française des offres ChatGPT", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "Quel modèle GPT selon votre abonnement ChatGPT", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "Ce que contient ChatGPT Business", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
      { name: "Stocker et traiter les données ChatGPT en Europe", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "Toutes les mises à jour de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
    ],
  },
  {
    group: "Anthropic (Claude)",
    items: [
      { name: "Prix des formules Claude, de Pro à Enterprise", url: "https://claude.com/pricing" },
      { name: "Le million de tokens des abonnements payants de Claude", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
      { name: "Les quatre modèles Claude en service", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
      { name: "Cowork intégré à chaque conversation, 16 septembre 2026", url: "https://claude.com/blog/cowork-is-now-claude" },
      { name: "Où Anthropic héberge les données de Claude", url: "https://platform.claude.com/docs/en/manage-claude/data-residency" },
    ],
  },
  {
    group: "Microsoft (Copilot)",
    items: [
      { name: "Microsoft France : Copilot pour les grandes organisations", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise" },
      { name: "Copilot Business, l'offre des organisations de 300 utilisateurs au plus", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
      { name: "Copilot Chat et licence Copilot : ce que chacun permet", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Claude dans Copilot et règles propres à l'Europe", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
    ],
  },
  {
    group: "Google (Gemini)",
    items: [
      { name: "Prix France des éditions Google Workspace", url: "https://workspace.google.com/intl/fr/pricing" },
      { name: "Limites de l'application Gemini pour un compte d'entreprise", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
      { name: "Sources et carnets Gemini Notebook selon l'édition", url: "https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/turn-gemini-notebook-on-or-off-for-users" },
      { name: "Gemini Enterprise, licence Google Cloud pour les agents", url: "https://cloud.google.com/gemini-enterprise" },
    ],
  },
  {
    group: "Mistral AI (Vibe)",
    items: [
      { name: "Abonnements Vibe et tarifs de l'API Mistral", url: "https://mistral.ai/pricing" },
      { name: "Pourquoi l'assistant de Mistral s'appelle Vibe", url: "https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe" },
      { name: "Localisation des données chez Mistral AI", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
      { name: "Vos échanges Vibe et l'entraînement des modèles", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
    ],
  },
  {
    group: "Réglementation européenne",
    items: [
      { name: "AI Act : règlement (UE) 2024/1689, texte d'origine", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
      { name: "Omnibus numérique 2026 : règlement (UE) 2026/1744", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    ],
  },
]

const DECISION_PROFILES = [
  {
    profile: "Entreprise sur Microsoft 365",
    tool: "Microsoft Copilot",
    color: "#0078D4",
    why: "Copilot travaille depuis Word, Excel, Outlook et Teams, avec pour matière première le courrier, les documents et les réunions de chacun. Licence : 26 € HT chaque mois pour un utilisateur ; Copilot Business descend à 18,20 € HT si vous comptez 300 utilisateurs au plus ; l'abonnement Microsoft 365 reste à payer à part.",
    deepLink: "/copilot-vs-chatgpt",
  },
  {
    profile: "Entreprise sur Google Workspace",
    tool: "Google Gemini",
    color: "#4285F4",
    why: "Déjà compris dans votre forfait, Gemini gagne en puissance à partir de Business Standard : son application traite un million de tokens et Gemini Notebook (anciennement NotebookLM) réunit 300 sources par carnet.",
    deepLink: "/gemini-vs-copilot",
  },
  {
    profile: "Marketing, communication, création",
    tool: "ChatGPT",
    color: "#10A37F",
    why: "ChatGPT Images 2.5 produit vos visuels, ChatGPT Work livre des documents complets, et l'équipe décrit elle-même ses agents en langage courant.",
    deepLink: "/chatgpt-vs-claude",
  },
  {
    profile: "Code, développement, documents longs",
    tool: "Claude",
    color: "#D97706",
    why: "Opus 5.5 et ses deux cousins de septembre 2026 traitent jusqu'à un million de tokens par conversation payante, et la formule Pro inclut Claude Code.",
    deepLink: "/chatgpt-vs-claude",
  },
  {
    profile: "Données à garder en Europe (santé, défense, secteur public)",
    tool: "Mistral AI",
    color: "#FA500F",
    why: "Vos données restent par défaut sur des serveurs européens, et les modèles à poids ouverts de Mistral s'installent sur vos propres machines. Hors offre Enterprise, pensez à couper l'entraînement sur vos échanges.",
    deepLink: "/mistral-vs-chatgpt",
  },
  {
    profile: "Vous n'êtes encore sur aucune suite précise",
    tool: "ChatGPT Business",
    color: "#10A37F",
    why: "Un outil polyvalent pour 21 € mensuels par siège en facturation annuelle ; un bilan au bout d'un trimestre ou deux dira s'il faut un second outil.",
    deepLink: "/meilleure-ia-entreprise-2026",
  },
]

const METHOD_QUESTIONS = [
  {
    question: "Quelle suite vos équipes ouvrent-elles le matin ?",
    explanation:
      "C'est le premier critère. Un assistant intégré à la suite déjà installée, Copilot côté Microsoft, Gemini côté Google, travaille sur le courrier, les documents et les réunions sans copier-coller. Un outil extérieur demande des connecteurs et de nouvelles habitudes, une friction qui pèse souvent plus que l'écart entre deux modèles.",
  },
  {
    question: "Quelle tâche voulez-vous d'abord outiller ?",
    explanation:
      "Visuels et agents d'équipe : ChatGPT. Code et dossiers volumineux : Claude. Bureautique Office : Copilot. Gmail, Docs et Meet : Gemini. L'outil suit le métier qui domine dans l'équipe que vous formez en premier.",
  },
  {
    question: "Vos données doivent-elles rester en Europe ?",
    explanation:
      "Dans le secteur public, la défense, la santé ou la finance régulée, l'hébergement pèse sur la réponse. Les données restent d'office dans l'Union chez Mistral, qui diffuse aussi des modèles à poids ouverts ; Microsoft garde dans l'EU Data Boundary les requêtes des utilisateurs européens de Copilot ; OpenAI réserve à ChatGPT Enterprise, pour les clients éligibles, un stockage et un calcul en Europe ; Claude, enfin, n'a pas de région européenne chez Anthropic.",
  },
  {
    question: "Quel budget par personne et par mois ?",
    explanation:
      "Prix des offres équipe relevés le 7 octobre 2026 : Claude Team à 20 $ en annuel, ChatGPT Business à 21 € en formule annuelle, Microsoft Copilot (anciennement Microsoft 365 Copilot) à 26 € HT ou Copilot Business à 18,20 € HT en plus de Microsoft 365, Gemini compris dans Workspace (13,60 € en Business Standard), Mistral Team à 29,99 € TTC. Regardez le ticket d'entrée d'un pilote, puis les crédits que consomment les agents.",
  },
  {
    question: "Un outil ou deux ?",
    explanation:
      "Deux outils se complètent souvent : le copilote de la suite pour la bureautique, un généraliste comme ChatGPT ou Claude pour les textes longs et la création, et Mistral quand certains flux doivent rester en Europe. Revoyez le choix chaque année : chaque trimestre apporte son lot de nouveautés.",
  },
]

const CLUSTER_MISTAKES = [
  {
    title: "Prendre l'outil dont tout le monde parle",
    desc: "ChatGPT s'impose souvent par réflexe. Pour une société installée dans Microsoft 365, Copilot travaille pourtant là où ses équipes passent la journée, avec leurs mails, leurs fichiers et leurs réunions. La notoriété d'un outil ne dit rien de son adéquation à votre organisation.",
  },
  {
    title: "Décider après l'essai d'un seul assistant",
    desc: "Pour départager deux ou trois outils, confiez-leur deux ou trois tâches métier de votre semaine, jamais un poème ou une devinette. Notre formation multi-outils de deux jours sert à cela : ChatGPT, Claude, Copilot, Gemini et Mistral mis à l'épreuve sur les dossiers de votre équipe.",
  },
  {
    title: "Acheter des licences sans prévoir la formation",
    desc: "Cinquante sièges ChatGPT Business représentent 12 600 € par an à 21 € par mois (50 × 21 € × 12). Sans formation, une bonne partie de cette somme paie un outil que personne n'exploite. Le rendement vient de la manière de formuler les demandes, de choisir le bon mode et de relire les réponses.",
  },
  {
    title: "Signer pour cinq ans",
    desc: "L'offre bouge chaque trimestre : rien qu'en septembre 2026, trois modèles Claude et toute une famille GPT-6 sont sortis. Mieux vaut deux outils complémentaires et un bilan annuel qu'un choix gravé dans le marbre.",
  },
  {
    title: "Passer à côté des contraintes de votre secteur",
    desc: "Hôpitaux, défense, banques et assurances, administrations : le lieu de stockage des données décide de l'outil. Mistral les garde dans l'Union et s'installe sur site ; ChatGPT Enterprise peut héberger et calculer en Europe pour les clients qui y ont droit ; Anthropic ne propose aucun hébergement européen dans ses propres applications.",
  },
]

// `a` : réponse affichée (JSX possible) ; `text` : même réponse en texte brut pour le JSON-LD FAQPage
const FAQ_ITEMS = [
  {
    q: "Quelle IA retenir pour une entreprise en 2026 ?",
    text: "Trois critères la désignent : votre suite (Copilot pour Microsoft 365, Gemini pour Google Workspace), la tâche qui domine (ChatGPT pour la création visuelle, Claude pour le code et les documents longs) et vos contraintes d'hébergement (Mistral quand les données doivent rester dans l'Union européenne). Associer deux outils donne souvent le meilleur résultat. Notre panorama des 5 outils détaille chaque cas.",
    a: (
      <>
        Trois critères la désignent :{' '}
        <strong>votre suite</strong> (Copilot pour Microsoft 365, Gemini pour Google Workspace),{' '}
        <strong>la tâche qui domine</strong> (ChatGPT pour la création visuelle, Claude pour le code et les documents longs){' '}
        et <strong>vos contraintes d'hébergement</strong> (Mistral quand les données doivent rester dans l'Union européenne).
        Associer deux outils donne souvent le meilleur résultat.
        Notre <Link to="/meilleure-ia-entreprise-2026" style={{ color: '#2563EB', fontWeight: 700 }}>panorama des 5 outils</Link> détaille chaque cas.
      </>
    ),
  },
  {
    q: "En quoi ChatGPT, Claude, Copilot, Gemini et Mistral diffèrent-ils ?",
    text: "ChatGPT (OpenAI) couvre le plus de terrain : images, tâches longues confiées à ChatGPT Work, agents partagés par l'équipe. Claude (Anthropic) accepte des conversations d'un million de tokens avec un abonnement payant et inclut Claude Code. Copilot (Microsoft) vit dans Microsoft 365 et s'appuie, via Microsoft Graph, sur le contenu de vos boîtes, de vos dossiers et de vos réunions. Gemini (Google) fait partie de Workspace ; Business Standard lui donne un million de tokens et Gemini Notebook. Mistral, éditeur français, conserve les données de ses clients en Europe, sauf choix contraire, et diffuse des modèles à poids ouverts.",
    a: (
      <>
        <strong>ChatGPT</strong> (OpenAI) couvre le plus de terrain : images, tâches longues confiées à ChatGPT Work, agents partagés par l'équipe.{' '}
        <strong>Claude</strong> (Anthropic) accepte des conversations d'un million de tokens avec un abonnement payant et inclut Claude Code.{' '}
        <strong>Copilot</strong> (Microsoft) vit dans Microsoft 365 et s'appuie, via Microsoft Graph, sur le contenu de vos boîtes, de vos dossiers et de vos réunions.{' '}
        <strong>Gemini</strong> (Google) fait partie de Workspace ; Business Standard lui donne un million de tokens et Gemini Notebook.{' '}
        <strong>Mistral</strong>, éditeur français, conserve les données de ses clients en Europe, sauf choix contraire, et diffuse des modèles à poids ouverts.
      </>
    ),
  },
  {
    q: "Vaut-il mieux une seule IA ou plusieurs ?",
    text: "Deux outils se justifient souvent : celui qu'intègre votre suite (Copilot ou Gemini) pour la bureautique quotidienne, puis ChatGPT ou Claude pour la création et les dossiers longs. Le second se chiffre à part : 21 € mensuels le siège chez ChatGPT Business, 20 $ chez Claude Team, sur facture annuelle.",
    a: "Deux outils se justifient souvent : celui qu'intègre votre suite (Copilot ou Gemini) pour la bureautique quotidienne, puis ChatGPT ou Claude pour la création et les dossiers longs. Le second se chiffre à part : 21 € mensuels le siège chez ChatGPT Business, 20 $ chez Claude Team, sur facture annuelle.",
  },
  {
    q: "ChatGPT ou Claude : lequel est meilleur en français ?",
    text: "Tous deux écrivent un français professionnel solide. En formation, Claude tient la structure d'un document long avec plus de rigueur, ChatGPT décline plus vite les formats courts. Le détail figure dans notre comparatif ChatGPT vs Claude.",
    a: (
      <>
        Tous deux écrivent un français professionnel solide. En formation, Claude tient la structure d'un document long avec plus de rigueur, ChatGPT décline plus vite les formats courts.
        Le détail figure dans notre{' '}
        <Link to="/chatgpt-vs-claude" style={{ color: '#2563EB', fontWeight: 700 }}>comparatif ChatGPT vs Claude</Link>.
      </>
    ),
  },
  {
    q: "Microsoft Copilot peut-il tenir lieu de ChatGPT ?",
    text: "En partie seulement. Copilot excelle dans Office et sur le contenu interne ; pour les visuels, la programmation et ce qui sort de Microsoft 365, ChatGPT garde l'avantage. Notre comparatif Copilot vs ChatGPT entre dans le détail.",
    a: (
      <>
        En partie seulement. Copilot excelle dans Office et sur le contenu interne ; pour les visuels, la programmation et ce qui sort de Microsoft 365, ChatGPT garde l'avantage.
        Notre{' '}
        <Link to="/copilot-vs-chatgpt" style={{ color: '#2563EB', fontWeight: 700 }}>comparatif Copilot vs ChatGPT</Link>{' '}
        entre dans le détail.
      </>
    ),
  },
  {
    q: "Comment aider mes équipes à choisir entre les outils d'IA ?",
    text: "Sur deux jours de formation multi-outils, vos collaborateurs essaient les cinq assistants sur leurs propres tâches, avant toute décision. Une journée vous revient à 1 980 € HT (TVA de 20 % à ajouter), qu'il s'agisse d'un groupe intra jusqu'à douze personnes ou d'une personne seule. Votre OPCO de branche peut prendre la session en charge, d'après ses règles, Masteria étant certifié Qualiopi.",
    a: "Sur deux jours de formation multi-outils, vos collaborateurs essaient les cinq assistants sur leurs propres tâches, avant toute décision. Une journée vous revient à 1 980 € HT (TVA de 20 % à ajouter), qu'il s'agisse d'un groupe intra jusqu'à douze personnes ou d'une personne seule. Votre OPCO de branche peut prendre la session en charge, d'après ses règles, Masteria étant certifié Qualiopi.",
  },
  {
    q: "Peut-on utiliser une IA chinoise comme DeepSeek ou Qwen dans une entreprise française ?",
    text: "Posez-leur les questions que vous poseriez à n'importe quel éditeur : dans quel pays vos données sont traitées, sous quel droit, avec quelles garanties écrites, et si vos échanges entraînent ses modèles. Installé sur vos propres machines, un modèle à poids ouverts n'envoie rien à son éditeur, d'où qu'il vienne ; utilisé en ligne, il lui transmet chacune de vos demandes.",
    a: "Posez-leur les questions que vous poseriez à n'importe quel éditeur : dans quel pays vos données sont traitées, sous quel droit, avec quelles garanties écrites, et si vos échanges entraînent ses modèles. Installé sur vos propres machines, un modèle à poids ouverts n'envoie rien à son éditeur, d'où qu'il vienne ; utilisé en ligne, il lui transmet chacune de vos demandes.",
  },
]
