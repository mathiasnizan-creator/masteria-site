import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import { MISSIONS, RETOURS } from '../data/missions-formation'

/*
 * Section « Missions de formation récentes » de /etudes-de-cas-ia : chaque mission en
 * entier (contexte, ce qui a été travaillé, ce que les participants ont produit, la
 * suite), ancrée en #mission-<id> pour les cartes des pages formation, avec les retours
 * des participants qui s'y rattachent. Données : data/missions-formation.js.
 */

const INK = '#0A0A0A'
const TEXT = '#374151'
const MUTED = '#6B7280'
const LINE = '#E5E7EB'
const BLUE = '#2563EB'

const PAGE_LABELS = {
  'formation-claude-ia': 'Formation Claude',
  'formation-chatgpt': 'Formation ChatGPT',
  'formation-microsoft-copilot': 'Formation Microsoft Copilot',
  'formation-gemini-entreprise': 'Formation Google Gemini',
  'formation-mistral-ai': 'Formation Mistral AI',
  'formation-multi-outils': 'Formation multi-outils',
}

export default function MissionsFormationDetail({ pad = 'clamp(56px, 8vw, 96px) 24px' }) {
  if (!MISSIONS.length) return null
  return (
    <section id="missions-formation" style={{ scrollMarginTop: 96, padding: pad, background: '#fff', borderTop: `1px solid ${LINE}` }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BLUE, marginBottom: 12 }}>Missions de formation récentes</div>
        <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: INK, margin: '0 0 14px', lineHeight: 1.2 }}>
          {MISSIONS.length} formations menées ces derniers mois, de la demande au livrable
        </h2>
        <p style={{ fontSize: 16, color: TEXT, lineHeight: 1.75, margin: '0 0 36px', maxWidth: 820 }}>
          Plus courtes que les accompagnements ci-dessus, ces missions montrent comment une formation se construit sur les documents du client. Chaque fiche vient du dossier de mission : la demande, le programme suivi, les livrables travaillés en séance. Les retours cités sont copiés des questionnaires de fin de formation ou des messages reçus, sans note.
        </p>
        <div style={{ display: 'grid', gap: 22 }}>
          {MISSIONS.map(m => {
            const retours = RETOURS.filter(r => r.mission === m.id)
            return (
              <article key={m.id} id={`mission-${m.id}`} style={{ scrollMarginTop: 96, border: `1px solid ${LINE}`, borderLeft: `4px solid ${BLUE}`, borderRadius: 16, padding: 'clamp(20px, 3vw, 30px)', background: '#FAFAF7' }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{m.secteur} · {m.outils.join(', ')}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, color: INK, margin: '0 0 6px', lineHeight: 1.3 }}>{m.titre}</h3>
                <p style={{ fontSize: 14, color: MUTED, margin: '0 0 16px', lineHeight: 1.6 }}>{m.qui} · {m.format} · {m.date}</p>
                <p style={{ fontSize: 15.5, color: TEXT, lineHeight: 1.75, margin: '0 0 14px' }}>{m.contexte}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 18 }}>
                  {m.programme?.length > 0 && (
                    <div>
                      <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: INK, margin: '0 0 8px' }}>Ce qui a été travaillé</h4>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, color: TEXT, lineHeight: 1.65 }}>
                        {m.programme.map(p => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                  )}
                  {m.livrables?.length > 0 && (
                    <div>
                      <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: INK, margin: '0 0 8px' }}>Livrables travaillés pendant la formation</h4>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, color: TEXT, lineHeight: 1.65 }}>
                        {m.livrables.map(l => <li key={l}>{l}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
                {m.suite && <p style={{ fontSize: 14.5, color: TEXT, lineHeight: 1.7, margin: '14px 0 0' }}><strong style={{ color: INK }}>Et ensuite : </strong>{m.suite}</p>}
                {retours.map(r => (
                  <figure key={r.id} style={{ margin: '16px 0 0', background: '#fff', border: `1px solid ${LINE}`, borderRadius: 12, padding: '16px 18px', display: 'flex', gap: 12 }}>
                    <Quote size={18} strokeWidth={2} style={{ color: BLUE, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    <div>
                      <blockquote style={{ margin: 0, fontSize: 14.5, color: TEXT, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{r.verbatim}</blockquote>
                      <figcaption style={{ fontSize: 13, color: MUTED, marginTop: 6 }}>{r.attribution}{r.question ? ` · ${r.question}` : ''}</figcaption>
                    </div>
                  </figure>
                ))}
                {m.pages?.some(p => PAGE_LABELS[p]) && (
                  <p style={{ fontSize: 13.5, color: MUTED, margin: '14px 0 0' }}>
                    Voir aussi :{' '}
                    {m.pages.filter(p => PAGE_LABELS[p]).map((p, i, arr) => (
                      <span key={p}><Link to={`/${p}`} style={{ color: BLUE, fontWeight: 600 }}>{PAGE_LABELS[p]}</Link>{i < arr.length - 1 ? ' · ' : ''}</span>
                    ))}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
