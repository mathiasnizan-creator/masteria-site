import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, X, Minus, Trophy, Clock, Calendar, BadgeCheck, Wallet, MapPin, Layers } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import Pictogram from '../components/Pictogram'
import { COMPARISONS } from '../data/comparisons'
import { PressMention } from '../components/FounderNote'
import { Paras, PointsCles, Rangees, texteLong, decouperPhrases } from '../components/Aere'

const SITE_URL = 'https://www.master-ia.fr'

/* GEO — désambiguïsation d'entités.
   Rattache chaque outil comparé à ses identifiants publics (Wikidata, Wikipédia,
   site officiel) pour que les moteurs génératifs citent la page sur la bonne entité
   et pas sur un homonyme (« Claude » le prénom, « Gemini » la constellation).
   Clés = `id` des outils dans src/data/comparisons.js.
   Q-ids et titres Wikipédia vérifiés sur Wikidata le 2026-08-08 : ne pas éditer
   de mémoire, revérifier via https://www.wikidata.org/wiki/Special:EntityData/<Qid>.json */
const ENTITY_SAMEAS = {
  chatgpt: ['https://www.wikidata.org/wiki/Q115564437', 'https://fr.wikipedia.org/wiki/ChatGPT', 'https://chatgpt.com'],
  claude: ['https://www.wikidata.org/wiki/Q118876059', 'https://fr.wikipedia.org/wiki/Claude_(mod%C3%A8le_de_langage)', 'https://claude.com'],
  copilot: ['https://www.wikidata.org/wiki/Q116793893', 'https://fr.wikipedia.org/wiki/Microsoft_Copilot', 'https://copilot.microsoft.com'],
  gemini: ['https://www.wikidata.org/wiki/Q116698014', 'https://fr.wikipedia.org/wiki/Gemini_(IA)', 'https://gemini.google.com'],
  mistral: ['https://www.wikidata.org/wiki/Q119718658', 'https://fr.wikipedia.org/wiki/Mistral_AI', 'https://mistral.ai'],
}

export default function ComparisonPage({ slug: propSlug }) {
  const params = useParams()
  const slug = propSlug || params.slug

  const data = COMPARISONS[slug]
  // Textes de section propres à ce comparatif (sinon formulations communes à tous les comparatifs).
  // Clés reconnues dans `data.textes` (toutes facultatives, chaînes) :
  //   cas, casTitre · metiers, metiersTitre · erreurs, erreursTitre · alternatives, alternativesTitre
  //   criteres (intro du comparatif détaillé) · legende (légende du tableau de faits ou de synthèse)
  //   analyse, analyseTitre (panoramas : analyse par outil) · cout, coutTitre, aRetenir (panoramas : coûts)
  //   ctaTitre, ctaTexte (bloc final). Sans clé, la formulation commune s'affiche comme avant.
  const T = data?.textes || {}
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

  // Outils comparés : panorama (data.tools) ou face-à-face (toolA / toolB).
  const comparedTools = data.tools || [data.toolA, data.toolB].filter(Boolean)

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
    dateModified: data.dateModified || data.datePublished || '2026-05-04',
    url: `${SITE_URL}/${data.slug}`,
    mainEntityOfPage: { '@id': `${SITE_URL}/${data.slug}#webpage` },
    inLanguage: 'fr-FR',
    articleSection: 'Comparatif IA',
    keywords: data.keywords || `comparatif IA, ${data.toolA?.name || ''}, ${data.toolB?.name || ''}, formation IA entreprise`,
    // GEO : entités logicielles explicites (nom + éditeur + sameAs) pour que les moteurs
    // génératifs rattachent la page aux bonnes entités plutôt qu'à des homonymes.
    about: comparedTools.length
      ? comparedTools.map(t => ({
        '@type': 'SoftwareApplication',
        name: t.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android, Windows, macOS',
        ...(t.editor ? { author: { '@type': 'Organization', name: t.editor } } : {}),
        ...(ENTITY_SAMEAS[t.id] ? { sameAs: ENTITY_SAMEAS[t.id] } : {}),
      }))
      : undefined,
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
        webPageType="WebPage"
        keywords={data.keywords}
        datePublished={data.datePublished}
        dateModified={data.dateModified}
        citations={data.citations}
        articleMeta={{
          publishedTime: data.datePublished,
          modifiedTime: data.dateModified || data.datePublished,
          author: 'Mathias Nizan',
          section: 'Comparatif IA',
        }}
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

          {/* Réponse directe : 1re phrase en accroche, les suivantes en puces à pictos */}
          {(() => {
            const phrases = phrasesMd(data.intro)
            return (
              <>
                <p style={{
                  fontSize: 'clamp(17px, 2.2vw, 20px)', color: '#0A0A0A', fontWeight: 500,
                  lineHeight: 1.58, margin: '0 0 22px', paddingLeft: 20, borderLeft: '3px solid #2563EB',
                }}
                  dangerouslySetInnerHTML={{ __html: formatBold(phrases[0]) }}
                />
                <PointsCles phrases={phrases.slice(1, 7)} rich={md} style={{ margin: '0 0 24px', maxWidth: 'none' }} />
                {phrases.length > 7 && (
                  <ParasMd texte={phrases.slice(7).join(' ')} style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.7, margin: '0 0 24px' }} />
                )}
              </>
            )
          })()}

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: '#6B7280' }}>
            {/* Byline E-E-A-T : auteur identifié, lien vers sa page */}
            <span>
              Par <Link to="/mathias-nizan" style={{ color: '#0A0A0A', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} />
              {data.dateModified ? (
                <>Mis à jour : <time dateTime={data.dateModified}>{data.lastUpdate}</time></>
              ) : (
                <>Mis à jour : {data.lastUpdate}</>
              )}
            </span>
            {data.verifiedOn && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <BadgeCheck size={14} /> Faits et tarifs vérifiés le {data.verifiedOn}
              </span>
            )}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} /> Lecture : {data.readTime}
            </span>
          </div>
          {data.casIds && <div style={{ marginTop: 16 }}><PressMention /></div>}
        </div>
      </section>

      {/* ═════════════ RÉPONSE DIRECTE (GEO) ═════════════
          Bloc autoportant placé haut : c'est l'unité la plus citable de la page
          par les moteurs génératifs (question explicite + réponse chiffrée + entités). */}
      {data.answerBox && (
        <section
          id="reponse-directe"
          style={{
            padding: 'clamp(36px, 5vw, 64px) clamp(18px, 4vw, 32px)',
            background: '#fff',
          }}
        >
          <div style={{
            maxWidth: 880, margin: '0 auto',
            background: '#F0F9FF',
            border: '1px solid #BAE6FD',
            borderLeft: '4px solid #1A62FF',
            borderRadius: 12,
            padding: 'clamp(22px, 3vw, 32px)',
          }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(19px, 2.6vw, 24px)', fontWeight: 900,
              color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em',
            }}>
              {data.answerBox.question}
            </h2>
            <ParasMd texte={data.answerBox.answer} max={2} budget={320} style={{ fontSize: 16.5, color: '#1F2937', lineHeight: 1.7, margin: 0 }} />
            {data.answerBox.bullets?.length > 0 && (
              <ul style={{
                margin: '20px 0 0', padding: 0, listStyle: 'none',
                display: 'grid', gap: 9,
              }}>
                {data.answerBox.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: 14.5, color: '#374151', display: 'flex', gap: 9, lineHeight: 1.55 }}>
                    <Check size={16} color="#1A62FF" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ═════════════ TABLEAU DE FAITS DATÉS (SEO + GEO) ═════════════
          Vrai <table> HTML : structure explicite critère → valeur A → valeur B,
          exploitable en extrait enrichi comme en citation par un moteur génératif.
          Réservé au face-à-face : la légende cite toolA / toolB, absents des panoramas.
          Ces derniers passent par `comparisonTable` + `comparisonTableMeta` (N colonnes). */}
      {data.keyFacts && data.toolA && data.toolB && (
        <section
          id="tableau-comparatif"
          style={{
            padding: 'clamp(36px, 5vw, 72px) clamp(18px, 4vw, 32px)',
            background: '#FAFAF7',
            borderTop: '1px solid #E5E7EB',
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(22px, 3.2vw, 32px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 8, letterSpacing: '-0.01em',
            }}>
              {data.keyFacts.title}
            </h2>
            {data.keyFacts.note && (
              <Paras texte={data.keyFacts.note} style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 720 }} />
            )}
            <div style={{ overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                <caption style={{
                  captionSide: 'bottom', textAlign: 'left', fontSize: 12.5,
                  color: '#6B7280', padding: '12px 18px', lineHeight: 1.5,
                }}>
                  {T.legende || `${data.toolA.name} (${data.toolA.editor}) face à ${data.toolB.name} (${data.toolB.editor})${data.verifiedOn ? `, situation au ${data.verifiedOn}` : ''}.`}
                </caption>
                <thead>
                  <tr style={{ background: '#FAFAF7' }}>
                    <th scope="col" style={thStyle}>Critère</th>
                    <th scope="col" style={{ ...thStyle, color: data.toolA.color }}>{data.toolA.name}</th>
                    <th scope="col" style={{ ...thStyle, color: data.toolB.color }}>{data.toolB.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.keyFacts.rows.map((row, i) => (
                    <tr key={i} style={{ borderTop: '1px solid #F3F4F6' }}>
                      <th scope="row" style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', textAlign: 'left' }}>
                        {row.criterion}
                      </th>
                      <td style={tdStyle}>{row.a}</td>
                      <td style={tdStyle}>{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

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
                    {t.priceFull || `${t.priceMonthly}/mois`}
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
          <ParasMd texte={data.verdict.summary} style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, marginBottom: 32 }} />

          {!isPanorama && (
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20,
            }}>
              <div style={{ padding: 24, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: data.toolA.color, marginBottom: 12 }}>
                  <Pictogram emoji="\u{2705}" size={15} color={data.toolA.color} />
                  Choisir {data.toolA.name} si...
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: data.toolB.color, marginBottom: 12 }}>
                  <Pictogram emoji="\u{2705}" size={15} color={data.toolB.color} />
                  Choisir {data.toolB.name} si...
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
              {/* Ligne profil · outil · raison : flex qui passe à la ligne sur mobile (la grille débordait) */}
              {data.verdict.profiles.map((p, i) => (
                <div key={i} style={{
                  display: 'flex', flexWrap: 'wrap',
                  gap: '10px 16px', padding: 18, background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10,
                  alignItems: 'center',
                }}>
                  <div style={{ flex: '1 1 160px', fontSize: 14, fontWeight: 700, color: '#0A0A0A' }}>{p.profile}</div>
                  <div style={{
                    flex: '0 0 auto',
                    fontSize: 13, fontWeight: 700, color: '#2563EB',
                    background: '#EFF6FF', padding: '6px 12px', borderRadius: 99,
                    textAlign: 'center', whiteSpace: 'nowrap',
                  }}>{p.tool}</div>
                  <div style={{ flex: '2 1 300px', fontSize: 13.5, color: '#4B5563', lineHeight: 1.55 }}>{p.why}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═════════════ SE FORMER (pont vers les formations) ═════════════
          Placé sous le verdict : le lecteur qui a sa réponse voit tout de suite
          la formation qui correspond. `formations` = { titre, texte, liens [{ href, label, desc }] },
          texte écrit pour la page (pas de formulation commune). */}
      {data.formations?.liens?.length > 0 && (
        <section id="se-former" style={{
          padding: 'clamp(36px, 5vw, 64px) clamp(18px, 4vw, 32px)',
          background: '#EFF6FF',
          borderBottom: '1px solid #DBEAFE',
        }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(21px, 2.8vw, 28px)', fontWeight: 900,
              color: '#0A0A0A', margin: '0 0 12px', letterSpacing: '-0.01em',
            }}>
              {data.formations.titre}
            </h2>
            {data.formations.texte && (
              <ParasMd texte={data.formations.texte} style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.7, margin: '0 0 22px' }} />
            )}
            <nav aria-label="Formations liées" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12,
            }}>
              {data.formations.liens.map(l => (
                <Link key={l.href} to={l.href} style={{
                  display: 'flex', flexDirection: 'column', gap: 6,
                  padding: '16px 18px', background: '#fff',
                  border: '1px solid #BFDBFE', borderRadius: 10,
                  textDecoration: 'none',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, fontSize: 15, fontWeight: 800, color: '#1D4ED8' }}>
                    {l.label} <ArrowRight size={15} />
                  </span>
                  {l.desc && <span style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.5 }}>{l.desc}</span>}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      )}

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
            <Paras texte={T.criteres || `${data.criteria.length} critères, vérifiés sur les sources des éditeurs et confrontés à nos formations sur les deux outils.`} style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 640, margin: '0 auto 56px',
            }} />

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
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 12, fontWeight: 700,
                    color: c.winner === 'a' ? data.toolA.color
                         : c.winner === 'b' ? data.toolB.color
                         : '#6B7280',
                    background: c.winner === 'a' ? `${data.toolA.color}15`
                              : c.winner === 'b' ? `${data.toolB.color}15`
                              : '#F3F4F6',
                    padding: '4px 12px', borderRadius: 99, marginBottom: 20,
                  }}>
                    <Pictogram
                      emoji={c.winner === 'tie' ? '\u{1F91D}' : '\u{1F3C6}'}
                      size={16}
                      color={c.winner === 'a' ? data.toolA.color
                           : c.winner === 'b' ? data.toolB.color
                           : '#6B7280'}
                    />
                    {c.winnerText}
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
                      <Paras texte={c.descriptionA} max={2} style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }} />
                    </div>
                    <div style={{ paddingLeft: 16, borderLeft: `3px solid ${data.toolB.color}` }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: data.toolB.color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {data.toolB.name}
                      </div>
                      <Paras texte={c.descriptionB} max={2} style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }} />
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
              {/* Compte dynamique : meilleure-ia-pour-coder et meilleur-agent-ia
                  n'ont que 4 outils, le libellé « 5 outils » était faux sur ces pages. */}
              {T.analyseTitre || `Analyse approfondie des ${data.deepDive.length} outils`}
            </h2>
            <Paras texte={T.analyse || 'Forces, faiblesses et profil idéal pour chaque outil.'} style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 640, margin: '0 auto 56px',
            }} />

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
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 800, color: '#10B981', marginBottom: 10 }}>
                          <Pictogram emoji="\u{2705}" size={15} color="#10B981" />
                          Points forts
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 800, color: '#EF4444', marginBottom: 10 }}>
                          <Pictogram emoji="\u{274C}" size={15} color="#EF4444" />
                          Points faibles
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
              color: '#0A0A0A', marginBottom: 8, letterSpacing: '-0.01em',
              textAlign: 'center',
            }}>
              {data.comparisonTableMeta?.title || 'Tableau de synthèse'}
            </h2>
            {data.comparisonTableMeta?.note && (
              <Paras texte={data.comparisonTableMeta.note} style={{
                fontSize: 14, color: '#6B7280', lineHeight: 1.6,
                margin: '0 auto 24px', maxWidth: 760, textAlign: 'center',
              }} />
            )}
            <div style={{ overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, marginTop: 24 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                <caption style={{
                  captionSide: 'bottom', textAlign: 'left', fontSize: 12.5,
                  color: '#6B7280', padding: '12px 18px', lineHeight: 1.5,
                }}>
                  {T.legende || `${data.tools.map(t => t.name).join(', ')} comparés critère par critère${data.verifiedOn ? `, situation au ${data.verifiedOn}` : ''}.`}
                </caption>
                <thead>
                  <tr style={{ background: '#FAFAF7' }}>
                    <th scope="col" style={thStyle}>Critère</th>
                    {data.tools.map(t => (
                      <th key={t.id} scope="col" style={{ ...thStyle, color: t.color }}>{t.name}</th>
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
                      <th scope="row" style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', textAlign: 'left' }}>
                        {row.criterion}
                      </th>
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
            <ParasMd texte={data.methodology} style={{ fontSize: 14.5, color: '#1E3A8A', lineHeight: 1.65, margin: 0 }} />

            {data.citations?.length > 0 && (
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid #BAE6FD' }}>
                <div style={{
                  fontSize: 11, fontWeight: 800, color: '#2563EB',
                  textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8,
                }}>
                  Sources officielles consultées
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 5 }}>
                  {data.citations.map((c, i) => (
                    <li key={i} style={{ fontSize: 13.5, color: '#1E3A8A', lineHeight: 1.55 }}>
                      {/* Liens éditoriaux vers des sources de référence : suivis volontairement
                          (pas de nofollow), c'est un signal de qualité et non un lien sponsorisé. */}
                      <a href={c.url} target="_blank" rel="noopener" style={{ color: '#1E40AF' }}>
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═════════════ JOURNAL DES MISES À JOUR (fraîcheur SEO + GEO) ═════════════
          Delta daté : signale explicitement ce qui a bougé depuis la version
          précédente, y compris nos propres corrections. */}
      {data.changelog?.items?.length > 0 && (
        <section
          id="mises-a-jour"
          style={{
            padding: 'clamp(32px, 4vw, 56px) clamp(18px, 4vw, 32px)',
            background: '#fff',
          }}
        >
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(20px, 2.8vw, 26px)', fontWeight: 900,
              color: '#0A0A0A', marginBottom: 20, letterSpacing: '-0.01em',
            }}>
              {data.changelog.title}
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 12 }}>
              {data.changelog.items.map((item, i) => (
                <li key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(96px, auto) 1fr',
                  gap: 16, alignItems: 'baseline',
                  padding: '14px 18px',
                  background: '#FAFAF7',
                  border: '1px solid #E5E7EB',
                  borderRadius: 10,
                }}>
                  <span style={{
                    fontSize: 12, fontWeight: 800, color: '#1A62FF',
                    textTransform: 'uppercase', letterSpacing: '0.04em',
                  }}>
                    {item.date}
                  </span>
                  <Paras texte={item.text} style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.6, margin: 0 }} />
                </li>
              ))}
            </ul>
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
              {T.casTitre || 'Cas pratiques : qui gagne sur vos vrais usages ?'}
            </h2>
            <Paras texte={T.cas || `${data.realCases.length} scénarios professionnels concrets exploitant les fonctionnalités des offres professionnelles (projets, artefacts, analyse de données, connecteurs et MCP, agents de recherche).`} style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 700, margin: '0 auto 56px',
            }} />

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
                          display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600,
                        }}>
                          <Pictogram emoji="\u{2699}" size={14} color="#4338CA" />
                          {c.feature}
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
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 12, fontWeight: 800, color: winnerTool.color,
                        background: `${winnerTool.color}15`,
                        padding: '4px 12px', borderRadius: 99,
                        marginBottom: 10,
                      }}>
                        <Pictogram emoji={c.winner === 'tie' ? '\u{1F91D}' : '\u{1F3C6}'} size={16} color={winnerTool.color} />
                        Verdict : {winnerTool.name}
                      </div>
                      <ParasMd texte={c.verdictText} max={2} budget={320} style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }} />
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
              {T.metiersTitre || 'Notre recommandation par métier'}
            </h2>
            <Paras texte={T.metiers || "D'après les formations que nous menons par métier depuis 2022."} style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {data.useCases.map((u, i) => {
                const tool = u.recommendation === 'tie'
                  ? { name: 'Match nul', color: '#6B7280' }
                  : u.recommendation === 'a'
                  ? data.toolA
                  : u.recommendation === 'b'
                  ? data.toolB
                  : { name: u.recommendation, color: '#6B7280' }

                // Ligne métier · outil · raison : flex qui passe à la ligne sur mobile (la grille débordait)
                return (
                  <div key={i} style={{
                    display: 'flex', flexWrap: 'wrap',
                    gap: '12px 20px', padding: 20,
                    background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10,
                    alignItems: 'center',
                  }}>
                    <div style={{ flex: '1.5 1 160px', fontSize: 15, fontWeight: 700, color: '#0A0A0A' }}>
                      {u.metier}
                    </div>
                    <div style={{
                      flex: '0 0 auto',
                      fontSize: 13, fontWeight: 700, color: tool.color,
                      background: `${tool.color}15`,
                      padding: '6px 14px', borderRadius: 99,
                      textAlign: 'center', whiteSpace: 'nowrap',
                    }}>
                      {tool.name}
                    </div>
                    <div style={{ flex: '2.5 1 300px', fontSize: 14, color: '#4B5563', lineHeight: 1.55 }}>
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
              {T.coutTitre || 'Combien ça coûte ?'}
            </h2>
            <Paras texte={T.cout || "Estimations annuelles selon la taille de l'entreprise (abonnement uniquement, hors formation et accompagnement)."} style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 700, margin: '0 auto 48px',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Ligne taille · budget · offre : flex qui passe à la ligne sur mobile (la grille débordait) */}
              {data.costScenarios.map((s, i) => (
                <div key={i} style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 24,
                  display: 'flex', flexWrap: 'wrap',
                  gap: '16px 24px',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ flex: '1 1 180px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                      Taille d'entreprise
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.4 }}>
                      {s.size}
                    </div>
                  </div>
                  <div style={{
                    flex: '0 0 auto',
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
                  <div style={{ flex: '2.5 1 300px' }}>
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
              <span style={{ display: 'inline-flex', verticalAlign: 'text-bottom', marginRight: 6 }}>
                <Pictogram emoji="\u{1F4A1}" size={15} color="#1E3A8A" />
              </span>
              <strong>À retenir :</strong> {T.aRetenir || "le coût d'un outil ne se limite pas à l'abonnement. La formation d'une équipe (à partir de 1 980 € HT la journée pour un groupe de 12 au plus en intra) et l'adoption au quotidien décident du retour sur investissement, qui se mesure sur vos propres tâches."}
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
              {T.erreursTitre || `${data.mistakes.length} erreurs fréquentes à éviter`}
            </h2>
            <Paras texte={T.erreurs || 'Les pièges les plus courants observés sur les déploiements IA en entreprise depuis 2022.'} style={{
              fontSize: 16, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 640, margin: '0 auto 48px',
            }} />

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
                      flexShrink: 0, lineHeight: 1, marginTop: 2,
                    }}>
                      <Pictogram emoji="\u{26A0}" size={22} color="#DC2626" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: 17, fontWeight: 800, color: '#991B1B',
                        marginBottom: 8, lineHeight: 1.35,
                      }}>
                        Erreur n°{i + 1} : {m.title}
                      </h3>
                      <Paras texte={m.desc} max={2} style={{
                        fontSize: 14.5, color: '#374151',
                        lineHeight: 1.65, margin: 0,
                      }} />
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
              {T.alternativesTitre || 'Et les autres outils alors\u00a0?'}
            </h2>
            <Paras texte={T.alternatives || "Quelques alternatives parfois citées dans les réflexions d'achat."} style={{
              fontSize: 15, color: '#6B7280', lineHeight: 1.6,
              textAlign: 'center', maxWidth: 600, margin: '0 auto 36px',
            }} />

            {/* Résumés longs : liste verticale pleine largeur ; courts : cartes côte à côte */}
            {texteLong(data.alsoConsidered.map(t => t.summary)) ? (
              <Rangees items={data.alsoConsidered.map(t => ({
                titre: t.name,
                texte: <span dangerouslySetInnerHTML={{ __html: linkify(t.summary) }} />,
                icon: Layers,
              }))} />
            ) : (
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
            )}
          </div>
        </section>
      )}

      {/* ═════════════ ÉTUDES DE CAS (E-E-A-T) ═════════════ */}
      {data.terrain && (
        <section id="terrain" style={{ padding: 'clamp(40px, 6vw, 64px) clamp(18px, 4vw, 32px)', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(21px, 2.8vw, 28px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px' }}>{data.terrain.titre}</h2>
            {(data.terrain.paras || []).map((t, i) => (
              <ParasMd key={i} texte={t} style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 12px' }} />
            ))}
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
                  <div style={{ marginTop: 14 }}>
                    <ParasMd texte={item.a} style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═════════════ LIENS RELATÉS (maillage interne) ═════════════ */}
      {data.relatedLinks && (
        <nav aria-label="Pour aller plus loin" style={{
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
        </nav>
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
            {T.ctaTitre || 'Vous hésitez encore ? Testez avant de choisir.'}
          </h2>
          <Paras texte={T.ctaTexte || "Nos formations multi-outils permettent à vos équipes de tester les 5 IA principales sur leurs cas d'usage réels avant de décider. 2 jours, certifié Qualiopi, finançable OPCO."} style={{
            fontSize: 17, color: '#D1D5DB', lineHeight: 1.65,
            maxWidth: 600, margin: '0 auto 36px',
          }} />

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

/* Mise en page aérée : un texte Markdown (gras **…**, liens [libellé](/chemin)) se découpe
   AVANT formatage. Les phrases sont repérées sur le texte sans balises, puis recoupées dans
   la chaîne d'origine ; un gras ouvert d'un morceau au suivant est refermé puis rouvert.
   Aucun mot ne change. max = phrases par morceau, budget = caractères par morceau. */
function morceauxMd(texte, max = 3, budget = 380) {
  if (typeof texte !== 'string' || !texte.trim()) return []
  // Texte sans balises (libellé de lien entre accolades : aucune coupe n'y tombe) et position d'origine de chaque caractère
  let brut = ''
  const pos = []
  for (let i = 0; i < texte.length;) {
    if (texte.startsWith('**', i)) { i += 2; continue }
    const lien = /^\[([^\]]+)\]\(([^)]+)\)/.exec(texte.slice(i))
    if (lien) {
      brut += `{${lien[1]}}`
      pos.push(i)
      for (let k = 0; k < lien[1].length; k++) pos.push(i + 1 + k)
      pos.push(i + lien[0].length - 1)
      i += lien[0].length
      continue
    }
    brut += texte[i]
    pos.push(i)
    i++
  }
  if (brut.length <= budget) return [texte.trim()]
  // Bornes de chaque phrase dans le texte sans balises
  const bornes = []
  let cur = 0
  for (const ph of decouperPhrases(brut)) {
    const d = brut.indexOf(ph, cur)
    if (d < 0) return [texte.trim()]
    bornes.push([d, d + ph.length])
    cur = d + ph.length
  }
  // Regroupement : même règle que paragraphes() de aere-texte.js
  const groupes = []
  let g = [], n = 0
  for (const b of bornes) {
    const l = b[1] - b[0]
    if (g.length && (g.length >= max || n + l + 1 > budget)) { groupes.push(g); g = []; n = 0 }
    g.push(b); n += l + 1
  }
  if (g.length) {
    const prec = groupes[groupes.length - 1]
    if (prec && g.length === 1 && g[0][1] - g[0][0] < 90 && prec.length < max) prec.push(g[0])
    else groupes.push(g)
  }
  // Coupe dans la chaîne d'origine (le gras refermé juste après la phrase lui reste attaché)
  const out = []
  let debut = 0
  groupes.forEach((grp, k) => {
    if (k === groupes.length - 1) { out.push(texte.slice(debut).trim()); return }
    let fin = pos[grp[grp.length - 1][1] - 1] + 1
    while (texte.startsWith('**', fin)) fin += 2
    out.push(texte.slice(debut, fin).trim())
    debut = fin
  })
  let ouvert = false
  return out.filter(Boolean).map(m => {
    const s = (ouvert ? '**' : '') + m
    ouvert = (s.match(/\*\*/g) || []).length % 2 === 1
    return ouvert ? `${s}**` : s
  })
}

// Une phrase par morceau (accroche + puces)
const phrasesMd = texte => morceauxMd(texte, 1, 0)

// Rendu d'un morceau Markdown dans une puce ou une rangée
const md = t => <span dangerouslySetInnerHTML={{ __html: formatBold(t) }} />

/* Paragraphes courts d'un texte Markdown, chaque morceau formaté après la coupe. */
function ParasMd({ texte, style, max = 3, budget = 380, format = formatBold }) {
  const morceaux = morceauxMd(texte, max, budget)
  if (!morceaux.length) return null
  if (morceaux.length === 1) return <p style={style} dangerouslySetInnerHTML={{ __html: format(morceaux[0]) }} />
  const ecart = Math.max(12, parseInt(style?.marginBottom ?? 14, 10) || 14)
  return (
    <div>
      {morceaux.map((m, i) => (
        <p key={i} style={{ ...style, ...(i < morceaux.length - 1 ? { marginBottom: ecart } : null) }} dangerouslySetInnerHTML={{ __html: format(m) }} />
      ))}
    </div>
  )
}

function formatBold(text) {
  if (!text) return ''
  // **texte** → <strong>, et [libellé](/chemin) → lien interne (maillage depuis les données)
  return text
    .replace(/\[([^\]]+)\]\((\/[^)]*)\)/g, '<a href="$2" style="color:#2563EB;font-weight:600;text-decoration:none;border-bottom:1px solid currentColor">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
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
