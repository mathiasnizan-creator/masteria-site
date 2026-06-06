import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, BadgeCheck, Wallet, MapPin, Check } from 'lucide-react'
import SEOHead from '../components/SEOHead'
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quelle est la meilleure IA pour une entreprise en 2026 ?",
        acceptedAnswer: { '@type': 'Answer', text: "La meilleure IA dépend de 3 critères : votre stack (Microsoft 365 → Copilot, Google Workspace → Gemini), votre cas d'usage dominant (créatif → ChatGPT, code/analyse → Claude) et vos contraintes de souveraineté (secteur sensible → Mistral). Beaucoup d'entreprises matures combinent 2 outils." },
      },
      {
        '@type': 'Question',
        name: "Quelle est la différence entre ChatGPT, Claude, Copilot, Gemini et Mistral ?",
        acceptedAnswer: { '@type': 'Answer', text: "ChatGPT (OpenAI) : polyvalent, écosystème mature. Claude (Anthropic) : excellence en code et analyse longue. Copilot (Microsoft) : intégré à Office 365 avec accès à vos données entreprise. Gemini (Google) : intégré à Workspace, multimodal puissant. Mistral (français) : souveraineté, hébergement européen." },
      },
      {
        '@type': 'Question',
        name: "Faut-il utiliser une seule IA ou plusieurs en parallèle ?",
        acceptedAnswer: { '@type': 'Answer', text: "Plusieurs outils en parallèle est recommandé. Le coût marginal est faible (~50 €/utilisateur/mois pour 2-3 outils), et le gain de productivité justifie largement l'investissement. Combinaison fréquente : Copilot ou Gemini pour la productivité quotidienne + ChatGPT ou Claude pour les tâches créatives ou complexes." },
      },
      {
        '@type': 'Question',
        name: "Comment former mes équipes à choisir entre les outils IA ?",
        acceptedAnswer: { '@type': 'Answer', text: "Notre formation panorama de 2 jours permet de tester les 5 outils sur les cas d'usage réels de vos équipes avant de décider. 1 980 €/jour en intra-entreprise, 1 380 €/jour en individuel, finançable OPCO. Idéale avant un déploiement à l'échelle." },
      },
    ],
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Quelle est la meilleure IA', slug: 'quelle-est-la-meilleure-ia' },
  ]

  return (
    <>
      <SEOHead
        title="Quelle est la meilleure IA en 2026 ? Le guide pour entreprises | Masteria"
        description="Quelle est la meilleure IA en 2026 ? Réponse selon votre profil : ChatGPT, Claude, Copilot, Gemini ou Mistral. Arbre de décision + tous nos comparatifs détaillés."
        slug="quelle-est-la-meilleure-ia"
        breadcrumbs={breadcrumbs}
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
            lineHeight: 1.65, maxWidth: 720, margin: '0 auto 32px',
          }}>
            La meilleure IA dépend de votre stack, votre métier et vos contraintes.
            ChatGPT, Claude, Microsoft Copilot, Google Gemini, Mistral AI : voici la méthode pour décider en 3 minutes, et tous nos comparatifs détaillés.
          </p>

          <a href="#decision-rapide" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#0A0A0A', color: '#fff',
            padding: '14px 28px', borderRadius: 10,
            textDecoration: 'none', fontSize: 15, fontWeight: 800,
          }}>
            Décision rapide en 3 minutes <ArrowRight size={16} />
          </a>
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
            Guides détaillés pour chaque face-à-face stratégique, mis à jour en continu par les formateurs Masteria.
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

      {/* ═════════════ MÉTHODE — 5 QUESTIONS ═════════════ */}
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
            Ce que nous voyons régulièrement dans les déploiements IA en entreprise.
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
                <div style={{ fontSize: 22, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>⚠️</div>
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
            Notre formation panorama de 2 jours permet à vos collaborateurs de tester les 5 outils sur leurs cas réels avant de décider. Certifié Qualiopi, finançable OPCO.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <Link to="/formation-multi-outils" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A',
              padding: '16px 32px', borderRadius: 10,
              textDecoration: 'none', fontSize: 16, fontWeight: 800,
            }}>
              Voir la formation panorama <ArrowRight size={16} />
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

// ═════════════════ DATA STATIC ═════════════════

const DECISION_PROFILES = [
  {
    profile: 'Entreprise sur Microsoft 365',
    tool: 'Microsoft Copilot',
    color: '#0078D4',
    why: "Intégré dans Word, Excel, Outlook, Teams. Données dans votre tenant. ROI rapide pour la productivité quotidienne.",
    deepLink: '/copilot-vs-chatgpt',
  },
  {
    profile: 'Entreprise sur Google Workspace',
    tool: 'Google Gemini',
    color: '#4285F4',
    why: "Même logique que Copilot, mais pour la stack Google : Gmail, Docs, Sheets, Drive.",
    deepLink: '/meilleure-ia-entreprise-2026',
  },
  {
    profile: 'Marketing, communication, créatif',
    tool: 'ChatGPT',
    color: '#10A37F',
    why: "Écosystème le plus complet : DALL-E, GPTs, agents. Idéal pour la production de contenu et la créativité.",
    deepLink: '/chatgpt-vs-claude',
  },
  {
    profile: 'Code, dev, analyse complexe',
    tool: 'Claude',
    color: '#D97706',
    why: "Référence du marché 2026 sur le code. Fenêtre de 200k tokens permettant l'analyse de larges documents.",
    deepLink: '/chatgpt-vs-claude',
  },
  {
    profile: 'Souveraineté, secteur sensible (santé, défense, public)',
    tool: 'Mistral AI',
    color: '#FA500F',
    why: "Hébergement français, modèles open-weight pour le self-hosting, conformité GDPR native.",
    deepLink: '/meilleure-ia-entreprise-2026',
  },
  {
    profile: "Vous n'êtes encore sur aucune stack précise",
    tool: 'ChatGPT Team',
    color: '#10A37F',
    why: "Ticket d'entrée le plus bas (25 €/mois), polyvalent, équipes formées en 1 jour. Vous évaluerez les compléments dans 3-6 mois.",
    deepLink: '/chatgpt-vs-claude',
  },
]

const METHOD_QUESTIONS = [
  {
    question: "Sur quel environnement vos équipes travaillent-elles déjà ?",
    explanation:
      "C'est le critère n°1. Un outil intégré à votre stack existante (Microsoft 365 → Copilot, Google Workspace → Gemini) a un taux d'adoption 3 à 5 fois supérieur à un outil externe. La friction d'adoption tue plus de projets IA que la qualité du modèle.",
  },
  {
    question: "Quel est le cas d'usage dominant que vous voulez couvrir ?",
    explanation:
      "Marketing/contenu créatif → ChatGPT. Code et analyse complexe → Claude. Productivité Office au quotidien → Copilot. Réception/envoi mails massif → Gemini ou Copilot. Veille et brainstorming → ChatGPT ou Claude. Le bon outil dépend du métier dominant qui sera formé.",
  },
  {
    question: "Avez-vous des contraintes de souveraineté ou de confidentialité strictes ?",
    explanation:
      "Secteur public, défense, santé, finance régulée : la souveraineté change la donne. Mistral (français, hébergement Europe) ou Copilot (données dans votre tenant Microsoft) sont les options recommandées. ChatGPT et Claude proposent des versions Enterprise EU mais avec un coût plus élevé.",
  },
  {
    question: "Quel est votre budget par utilisateur et par mois ?",
    explanation:
      "Plans pro : ChatGPT 25 €, Claude 30 €, Copilot 30 $ + M365, Gemini 25 €, Mistral 15-25 €. La vraie question est rarement le coût (les abonnements représentent <5 % du gain de productivité) mais le ticket d'entrée acceptable pour démarrer un pilote.",
  },
  {
    question: "Une seule IA ou plusieurs en parallèle ?",
    explanation:
      "En 2026, les entreprises matures combinent souvent 2-3 outils : un pour la productivité quotidienne (Copilot ou Gemini selon la stack), un pour les tâches créatives ou complexes (ChatGPT ou Claude), parfois Mistral pour les cas sensibles. Le coût marginal est faible face au gain de complémentarité.",
  },
]

const CLUSTER_MISTAKES = [
  {
    title: "Choisir l'IA \"la plus connue\" plutôt que la plus adaptée",
    desc: "Beaucoup d'entreprises adoptent ChatGPT par défaut parce que c'est l'outil dont tout le monde parle. Or, si toute votre stack est sur Microsoft 365, Copilot vous fera gagner 3-5x plus de temps au quotidien (intégration native dans Outlook, Word, Excel, Teams). La notoriété d'un outil n'est pas un critère de choix.",
  },
  {
    title: "Ne tester qu'un seul outil avant de décider",
    desc: "Pour décider entre 2-3 IA, il faut les tester sur 2-3 cas d'usage métier réels (pas sur des prompts joués type \"écris un sonnet\"). Notre formation panorama de 2 jours est conçue exactement pour ça : tester ChatGPT, Claude, Copilot, Gemini, Mistral sur les vrais cas de votre équipe avant de trancher.",
  },
  {
    title: "Sous-estimer la formation et l'accompagnement",
    desc: "Acheter 50 abonnements ChatGPT Team à 25 €/mois sans former les équipes, c'est dépenser 15 000 €/an pour un outil utilisé à 20 % de son potentiel. Le ROI vient de la formation : +6 h/semaine en moyenne par collaborateur formé, vs ~+1 h/semaine pour ceux qui découvrent seuls.",
  },
  {
    title: "Vouloir un seul outil \"définitif\" pour 5 ans",
    desc: "Le marché de l'IA évolue tous les 6 mois. Claude était derrière en 2023, est devenu la référence en code en 2025. Microsoft a multiplié les fonctionnalités Copilot en 18 mois. La bonne stratégie : équiper vos équipes de 2 outils complémentaires, et réévaluer chaque année.",
  },
  {
    title: "Oublier les contraintes de souveraineté de votre secteur",
    desc: "Si vous êtes dans la santé, la défense, la finance régulée ou le secteur public, les contraintes RGPD et de souveraineté changent radicalement le bon choix. Mistral AI ou un déploiement self-hosted devient quasi obligatoire. ChatGPT Enterprise et Claude Pro proposent des options EU mais avec un coût qui peut multiplier le budget par 2-3.",
  },
]

const FAQ_ITEMS = [
  {
    q: "Quelle est la meilleure IA pour une entreprise en 2026 ?",
    a: (
      <>
        La meilleure IA dépend de 3 critères :{' '}
        <strong>votre stack</strong> (Microsoft 365 → Copilot, Google Workspace → Gemini),{' '}
        <strong>votre cas d'usage dominant</strong> (créatif → ChatGPT, code/analyse → Claude){' '}
        et <strong>vos contraintes de souveraineté</strong> (secteur sensible → Mistral).
        Beaucoup d'entreprises matures combinent 2 outils.
        Pour un guide complet, consultez notre <Link to="/meilleure-ia-entreprise-2026" style={{ color: '#2563EB', fontWeight: 700 }}>panorama des 5 outils</Link>.
      </>
    ),
  },
  {
    q: "Quelle est la différence entre ChatGPT, Claude, Copilot, Gemini et Mistral ?",
    a: (
      <>
        <strong>ChatGPT</strong> (OpenAI) : polyvalent, écosystème mature, leader grand public.{' '}
        <strong>Claude</strong> (Anthropic) : excellence en code et analyse de longs documents.{' '}
        <strong>Copilot</strong> (Microsoft) : intégré à Office 365 avec accès à vos données entreprise.{' '}
        <strong>Gemini</strong> (Google) : intégré à Workspace, multimodal puissant.{' '}
        <strong>Mistral</strong> (français) : souveraineté, hébergement européen.
      </>
    ),
  },
  {
    q: "Faut-il utiliser une seule IA ou plusieurs en parallèle ?",
    a: "Plusieurs outils en parallèle est recommandé en 2026. Le coût marginal est faible (~50 €/utilisateur/mois pour 2-3 outils), et le gain de productivité justifie largement l'investissement. Combinaison fréquente : Copilot ou Gemini pour la productivité quotidienne + ChatGPT ou Claude pour les tâches créatives ou complexes.",
  },
  {
    q: "ChatGPT vs Claude : lequel est meilleur en français ?",
    a: (
      <>
        Les deux sont excellents en français. Claude est parfois perçu comme légèrement plus naturel sur les contenus longs.
        Pour un comparatif détaillé, voyez notre{' '}
        <Link to="/chatgpt-vs-claude" style={{ color: '#2563EB', fontWeight: 700 }}>comparatif ChatGPT vs Claude</Link>.
      </>
    ),
  },
  {
    q: "Microsoft Copilot remplace-t-il ChatGPT ?",
    a: (
      <>
        Pas vraiment. Copilot est complémentaire : excellent dans Office, mais limité hors M365. Beaucoup d'entreprises utilisent les deux.
        Voyez notre{' '}
        <Link to="/copilot-vs-chatgpt" style={{ color: '#2563EB', fontWeight: 700 }}>comparatif Copilot vs ChatGPT</Link>{' '}
        pour les détails.
      </>
    ),
  },
  {
    q: "Comment former mes équipes à choisir entre les outils IA ?",
    a: "Notre formation panorama de 2 jours permet de tester les 5 outils sur les cas d'usage réels de vos équipes avant de décider. 1 980 €/jour en intra-entreprise, 1 380 €/jour en individuel, finançable OPCO. Idéale avant un déploiement à l'échelle.",
  },
  {
    q: "Et l'IA chinoise (DeepSeek, Qwen) ?",
    a: "Performante techniquement, mais déconseillée en entreprise française pour des raisons de souveraineté des données et de conformité GDPR. Pour les particuliers et la veille techno, oui ; pour des données d'entreprise, non.",
  },
]
