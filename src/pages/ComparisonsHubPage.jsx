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
    description: "Réponse complète : la meilleure IA dépend de votre profil. Comparatifs ChatGPT vs Claude, Copilot vs ChatGPT, panorama des 5 outils principaux pour entreprise.",
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
        description="Quelle est la meilleure IA en 2026 ? La réponse selon votre profil : ChatGPT, Claude, Copilot, Gemini ou Mistral, avec des comparatifs vérifiés le 3 octobre 2026."
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
            La meilleure IA dépend de votre suite bureautique, de votre métier et de vos contraintes.
            Pour ChatGPT, Claude, Microsoft Copilot, Google Gemini et Mistral AI, cette page donne une méthode de décision en trois minutes et l'accès à tous nos comparatifs détaillés.
          </p>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible, comme sur les comparatifs */}
          <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, maxWidth: 720, margin: '0 auto 32px' }}>
            Par <Link to="/mathias-nizan" style={{ color: '#0A0A0A', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour le <time dateTime={HUB_DATE_MODIFIED}>3 octobre 2026</time>, modèles et tarifs vérifiés sur les <a href="#sources-officielles" style={{ color: '#2563EB', fontWeight: 600 }}>pages officielles des éditeurs</a>
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
              Quel outil IA pour votre métier ? (simulateur) <ArrowRight size={16} />
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
            Trouvez en 30 secondes l'outil le plus adapté à votre contexte d'entreprise.
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
            Un guide par face-à-face, chacun daté et sourcé. Dernière vérification des modèles et des tarifs : 3 octobre 2026.
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
            La méthode Masteria : 5 questions pour décider
          </h2>
          <p style={{
            fontSize: 16, color: '#6B7280', lineHeight: 1.6,
            textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
          }}>
            Avant de tester ou comparer techniquement, posez-vous ces 5 questions structurantes.
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
            5 erreurs fréquentes au moment de choisir
          </h2>
          <p style={{
            fontSize: 16, color: '#6B7280', lineHeight: 1.6,
            textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
          }}>
            Les pièges qui reviennent au moment de choisir un outil d'IA.
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
            Les modèles, prix et fenêtres de contexte cités sur cette page ont été vérifiés le <time dateTime={HUB_DATE_MODIFIED}>3 octobre 2026</time> sur les pages officielles ci-dessous.
            Les offres changent vite : la page de l'éditeur fait foi, et chaque comparatif détaillé liste ses propres sources.
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
            Toujours pas sûr ? Faites tester par vos équipes.
          </h2>
          <p style={{
            fontSize: 17, color: '#D1D5DB', lineHeight: 1.65,
            marginBottom: 36, maxWidth: 600, margin: '0 auto 36px',
          }}>
            Notre formation multi-outils de deux jours fait tester les cinq outils à vos collaborateurs, sur leurs cas réels, avant de décider. Masteria est certifié Qualiopi : selon votre branche, votre OPCO peut financer la session.
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
const HUB_DATE_MODIFIED = '2026-10-03'

// Sources officielles consultées le 3 octobre 2026 : bloc visible + WebPage.citation (SEOHead)
const HUB_SOURCES = [
  {
    group: "OpenAI (ChatGPT)",
    items: [
      { name: "Tarifs de ChatGPT, page France", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "GPT-5.6 et GPT-6 Pro dans ChatGPT (centre d'aide)", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "Présentation de ChatGPT Business (centre d'aide)", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
      { name: "Résidence des données et de l'inférence (centre d'aide)", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "Notes de version de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
    ],
  },
  {
    group: "Anthropic (Claude)",
    items: [
      { name: "Offres et tarifs de Claude", url: "https://claude.com/pricing" },
      { name: "Fenêtre de contexte des offres payantes (centre d'aide)", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
      { name: "Vue d'ensemble des modèles Claude", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
      { name: "Cowork et la conversation réunis dans Claude (16 septembre 2026)", url: "https://claude.com/blog/cowork-is-now-claude" },
      { name: "Résidence des données (documentation de la plateforme)", url: "https://platform.claude.com/docs/en/manage-claude/data-residency" },
    ],
  },
  {
    group: "Microsoft (Copilot)",
    items: [
      { name: "Tarifs de Microsoft 365 Copilot pour les grandes entreprises, page France", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise" },
      { name: "Microsoft 365 Copilot Business pour les PME, page France", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
      { name: "Présentation de Microsoft Copilot (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Modèles d'Anthropic dans les services Microsoft (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
    ],
  },
  {
    group: "Google (Gemini)",
    items: [
      { name: "Tarifs de Google Workspace, page France", url: "https://workspace.google.com/intl/fr/pricing" },
      { name: "Application Gemini avec un compte professionnel, limites par édition", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
      { name: "Gemini Notebook par édition de Workspace", url: "https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/turn-gemini-notebook-on-or-off-for-users" },
      { name: "Gemini Enterprise (Google Cloud)", url: "https://cloud.google.com/gemini-enterprise" },
    ],
  },
  {
    group: "Mistral AI (Vibe)",
    items: [
      { name: "Tarifs de Mistral AI", url: "https://mistral.ai/pricing" },
      { name: "Le Chat devient Vibe (centre d'aide)", url: "https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe" },
      { name: "Lieu de stockage des données (centre d'aide)", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
      { name: "Utilisation des données pour l'entraînement (centre d'aide)", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
    ],
  },
  {
    group: "Réglementation européenne",
    items: [
      { name: "Règlement (UE) 2024/1689 sur l'intelligence artificielle (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
      { name: "Règlement (UE) 2026/1744, nouvel article 4 de l'AI Act (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    ],
  },
]

const DECISION_PROFILES = [
  {
    profile: "Entreprise sur Microsoft 365",
    tool: "Microsoft Copilot",
    color: "#0078D4",
    why: "Intégré à Word, Excel, Outlook et Teams, avec vos mails, fichiers et réunions via Microsoft Graph. 26 € HT par utilisateur et par mois, ou 18,20 € HT en Copilot Business jusqu'à 300 utilisateurs, en plus de Microsoft 365.",
    deepLink: "/copilot-vs-chatgpt",
  },
  {
    profile: "Entreprise sur Google Workspace",
    tool: "Google Gemini",
    color: "#4285F4",
    why: "Inclus dans les forfaits Workspace. Dès Business Standard, l'application Gemini lit un million de tokens et Gemini Notebook interroge 300 sources par carnet.",
    deepLink: "/gemini-vs-copilot",
  },
  {
    profile: "Marketing, communication, création",
    tool: "ChatGPT",
    color: "#10A37F",
    why: "ChatGPT Images 2.5 pour les visuels, ChatGPT Work pour les livrables complets, agents d'équipe montés en langage naturel.",
    deepLink: "/chatgpt-vs-claude",
  },
  {
    profile: "Code, développement, documents longs",
    tool: "Claude",
    color: "#D97706",
    why: "Un million de tokens par conversation sur les offres payantes avec Opus 5.5, Sonnet 5.5 et Fable 5.1, et Claude Code inclus dès l'offre Pro.",
    deepLink: "/chatgpt-vs-claude",
  },
  {
    profile: "Données à garder en Europe (santé, défense, secteur public)",
    tool: "Mistral AI",
    color: "#FA500F",
    why: "Données hébergées dans l'Union européenne par défaut et modèles à poids ouverts déployables chez vous. Hors offre Enterprise, désactivez l'entraînement sur les échanges.",
    deepLink: "/mistral-vs-chatgpt",
  },
  {
    profile: "Vous n'êtes encore sur aucune suite précise",
    tool: "ChatGPT Business",
    color: "#10A37F",
    why: "21 € par utilisateur et par mois en facturation annuelle, couverture large. Réévaluez les compléments au bout de trois à six mois.",
    deepLink: "/meilleure-ia-entreprise-2026",
  },
]

const METHOD_QUESTIONS = [
  {
    question: "Sur quel environnement vos équipes travaillent-elles déjà ?",
    explanation:
      "C'est le premier critère. Un outil intégré à la suite que vos équipes ouvrent chaque matin (Microsoft 365 pour Copilot, Google Workspace pour Gemini) travaille sur leurs mails, leurs fichiers et leurs réunions sans copier-coller. Un outil externe demande des connecteurs et un changement d'habitude : cette friction pèse souvent plus lourd que l'écart entre deux modèles.",
  },
  {
    question: "Quel cas d'usage dominant voulez-vous couvrir ?",
    explanation:
      "Création visuelle et agents d'équipe : ChatGPT. Code et documents longs : Claude. Productivité dans Office : Copilot. Courriels et réunions dans Gmail et Meet : Gemini. Le bon outil suit le métier dominant de l'équipe à former.",
  },
  {
    question: "Avez-vous des contraintes d'hébergement ou de confidentialité strictes ?",
    explanation:
      "Secteur public, défense, santé, finance régulée : l'hébergement des données pèse sur le choix. Mistral héberge dans l'Union européenne par défaut et publie des modèles à poids ouverts ; Copilot garde le trafic des utilisateurs européens dans l'EU Data Boundary, le périmètre européen de traitement de Microsoft ; ChatGPT Enterprise propose stockage et inférence en Europe aux clients éligibles ; Claude n'a pas de région européenne.",
  },
  {
    question: "Quel est votre budget par utilisateur et par mois ?",
    explanation:
      "Offres équipe au 3 octobre 2026 : ChatGPT Business à 21 € en annuel, Claude Team à 20 $ en annuel, Microsoft 365 Copilot à 26 € HT ou Copilot Business à 18,20 € HT en plus de Microsoft 365, Gemini inclus dans Workspace (Business Standard à 13,60 € HT), Mistral Team à 29,99 € TTC. L'arbitrage porte sur le ticket d'entrée acceptable pour un pilote, et sur les crédits d'usage des agents.",
  },
  {
    question: "Une seule IA ou plusieurs en parallèle ?",
    explanation:
      "Une configuration possible associe deux outils : le copilote de votre suite (Copilot ou Gemini) pour le quotidien, un assistant généraliste (ChatGPT ou Claude) pour les tâches créatives ou longues, et parfois Mistral pour les flux sensibles. Réévaluez chaque année : le marché change à chaque trimestre.",
  },
]

const CLUSTER_MISTAKES = [
  {
    title: "Choisir l'IA « la plus connue » plutôt que la plus adaptée",
    desc: "ChatGPT s'impose souvent par défaut parce que tout le monde en parle. Si toute votre activité tourne sur Microsoft 365, Copilot travaille là où vos équipes passent leurs journées, avec leurs mails, leurs fichiers et leurs réunions. La notoriété d'un outil ne dit rien de son adéquation à votre contexte.",
  },
  {
    title: "Ne tester qu'un seul outil avant de décider",
    desc: "Pour départager deux ou trois outils, testez-les sur deux ou trois cas d'usage métier réels, jamais sur des demandes jouées du type « écris un poème ». Notre formation multi-outils de deux jours sert à cela : tester ChatGPT, Claude, Copilot, Gemini et Mistral sur les vrais cas de votre équipe avant de trancher.",
  },
  {
    title: "Sous-estimer la formation et l'accompagnement",
    desc: "Cinquante sièges ChatGPT Business coûtent 12 600 € par an en facturation annuelle (50 × 21 € × 12). Sans formation, une bonne part de ce budget finance un outil sous-exploité. Le retour sur investissement vient de l'appropriation : formulation des demandes, choix du bon mode, vérification des sorties.",
  },
  {
    title: "Vouloir un seul outil « définitif » pour cinq ans",
    desc: "Le marché change à chaque trimestre : en septembre 2026, Anthropic a sorti trois modèles et OpenAI a lancé la famille GPT-6. Équipez vos équipes de deux outils complémentaires et réévaluez chaque année.",
  },
  {
    title: "Oublier les contraintes d'hébergement de votre secteur",
    desc: "En santé, défense, finance régulée ou secteur public, l'hébergement des données change le bon choix. Mistral héberge dans l'Union européenne par défaut et propose le déploiement sur site ; ChatGPT Enterprise offre stockage et inférence en Europe aux clients éligibles ; Anthropic ne propose pas de région européenne pour Claude.",
  },
]

// `a` : réponse affichée (JSX possible) ; `text` : même réponse en texte brut pour le JSON-LD FAQPage
const FAQ_ITEMS = [
  {
    q: "Quelle est la meilleure IA pour une entreprise en 2026 ?",
    text: "La meilleure IA dépend de trois critères : votre suite (Microsoft 365 pour Copilot, Google Workspace pour Gemini), votre cas d'usage dominant (création visuelle pour ChatGPT, code et documents longs pour Claude) et vos contraintes d'hébergement (données à garder dans l'Union européenne pour Mistral). Combiner deux outils est souvent la meilleure option. Pour un guide complet, consultez notre panorama des 5 outils.",
    a: (
      <>
        La meilleure IA dépend de trois critères :{' '}
        <strong>votre suite</strong> (Microsoft 365 → Copilot, Google Workspace → Gemini),{' '}
        <strong>votre cas d'usage dominant</strong> (création visuelle → ChatGPT, code et documents longs → Claude){' '}
        et <strong>vos contraintes d'hébergement</strong> (données à garder dans l'Union européenne → Mistral).
        Combiner deux outils est souvent la meilleure option.
        Pour un guide complet, consultez notre <Link to="/meilleure-ia-entreprise-2026" style={{ color: '#2563EB', fontWeight: 700 }}>panorama des 5 outils</Link>.
      </>
    ),
  },
  {
    q: "Quelle est la différence entre ChatGPT, Claude, Copilot, Gemini et Mistral ?",
    text: "ChatGPT (OpenAI) : le généraliste le plus complet, avec la génération d'images, ChatGPT Work et des agents d'équipe. Claude (Anthropic) : un million de tokens par conversation sur les offres payantes et Claude Code. Copilot (Microsoft) : intégré à Microsoft 365, avec accès à vos mails, fichiers et réunions via Microsoft Graph. Gemini (Google) : inclus dans Workspace, avec un million de tokens et Gemini Notebook dès Business Standard. Mistral (France) : données hébergées dans l'Union européenne par défaut et modèles à poids ouverts.",
    a: (
      <>
        <strong>ChatGPT</strong> (OpenAI) : le généraliste le plus complet, avec la génération d'images, ChatGPT Work et des agents d'équipe.{' '}
        <strong>Claude</strong> (Anthropic) : un million de tokens par conversation sur les offres payantes et Claude Code.{' '}
        <strong>Copilot</strong> (Microsoft) : intégré à Microsoft 365, avec accès à vos mails, fichiers et réunions via Microsoft Graph.{' '}
        <strong>Gemini</strong> (Google) : inclus dans Workspace, avec un million de tokens et Gemini Notebook dès Business Standard.{' '}
        <strong>Mistral</strong> (France) : données hébergées dans l'Union européenne par défaut et modèles à poids ouverts.
      </>
    ),
  },
  {
    q: "Faut-il utiliser une seule IA ou plusieurs en parallèle ?",
    text: "Plusieurs outils en parallèle se justifient souvent : le copilote de votre suite (Copilot ou Gemini) pour la productivité quotidienne, ChatGPT ou Claude pour les tâches créatives ou longues. Chiffrez le surcoût : un assistant généraliste en offre équipe coûte autour de 20 à 25 par siège et par mois, soit 21 € chez ChatGPT Business et 20 $ chez Claude Team en facturation annuelle.",
    a: "Plusieurs outils en parallèle se justifient souvent : le copilote de votre suite (Copilot ou Gemini) pour la productivité quotidienne, ChatGPT ou Claude pour les tâches créatives ou longues. Chiffrez le surcoût : un assistant généraliste en offre équipe coûte autour de 20 à 25 par siège et par mois, soit 21 € chez ChatGPT Business et 20 $ chez Claude Team en facturation annuelle.",
  },
  {
    q: "ChatGPT ou Claude : lequel est meilleur en français ?",
    text: "Les deux rédigent un français professionnel de bon niveau. Dans nos mises en situation, Claude tient mieux la structure des contenus longs, ChatGPT varie plus vite les formats courts. Pour un comparatif détaillé, voyez notre comparatif ChatGPT vs Claude.",
    a: (
      <>
        Les deux rédigent un français professionnel de bon niveau. Dans nos mises en situation, Claude tient mieux la structure des contenus longs, ChatGPT varie plus vite les formats courts.
        Pour un comparatif détaillé, voyez notre{' '}
        <Link to="/chatgpt-vs-claude" style={{ color: '#2563EB', fontWeight: 700 }}>comparatif ChatGPT vs Claude</Link>.
      </>
    ),
  },
  {
    q: "Microsoft Copilot remplace-t-il ChatGPT ?",
    text: "Pas entièrement. Copilot excelle dans Office et sur vos données internes ; ChatGPT garde l'avantage sur l'image, le code et les tâches hors Microsoft 365. Voyez notre comparatif Copilot vs ChatGPT pour les détails.",
    a: (
      <>
        Pas entièrement. Copilot excelle dans Office et sur vos données internes ; ChatGPT garde l'avantage sur l'image, le code et les tâches hors Microsoft 365.
        Voyez notre{' '}
        <Link to="/copilot-vs-chatgpt" style={{ color: '#2563EB', fontWeight: 700 }}>comparatif Copilot vs ChatGPT</Link>{' '}
        pour les détails.
      </>
    ),
  },
  {
    q: "Comment former mes équipes à choisir entre les outils d'IA ?",
    text: "Notre formation multi-outils de deux jours fait tester les cinq outils sur les cas d'usage réels de vos équipes avant de décider. Tarif : 1 980 € HT la journée en intra pour le groupe (jusqu'à 12 participants), au même tarif en individuel, TVA de 20 % en sus. Selon votre branche, votre OPCO peut financer la session.",
    a: "Notre formation multi-outils de deux jours fait tester les cinq outils sur les cas d'usage réels de vos équipes avant de décider. Tarif : 1 980 € HT la journée en intra pour le groupe (jusqu'à 12 participants), au même tarif en individuel, TVA de 20 % en sus. Selon votre branche, votre OPCO peut financer la session.",
  },
  {
    q: "Et l'IA chinoise (DeepSeek, Qwen) pour une entreprise française ?",
    text: "Posez les mêmes questions qu'à tout éditeur : lieu de traitement des données, droit applicable, garanties contractuelles, usage des échanges pour l'entraînement. Un modèle à poids ouverts exécuté sur votre propre infrastructure n'envoie rien à l'éditeur, quel que soit son pays d'origine ; une application en ligne, si.",
    a: "Posez les mêmes questions qu'à tout éditeur : lieu de traitement des données, droit applicable, garanties contractuelles, usage des échanges pour l'entraînement. Un modèle à poids ouverts exécuté sur votre propre infrastructure n'envoie rien à l'éditeur, quel que soit son pays d'origine ; une application en ligne, si.",
  },
]
