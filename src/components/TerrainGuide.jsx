import { useState } from 'react'
import { Copy, Check, AlertTriangle } from 'lucide-react'

/* Guide terrain : contenu propre à une page (src/data/spoke-guides/<slug>.js ou
   geo-guides/<slug>.js). Thèse, sections, tableau, cas pratique avec prompt prêt à
   copier, pièges et sources. Rendu identique sur SpokePage et GeoPage.
   Chargement des données : src/data/terrain-guides.js. */

function PromptBlock({ prompt, color }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }).catch(() => {})
  }
  return (
    <div style={{ background: '#0F172A', borderRadius: 10, marginTop: 8, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid #1E293B' }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94A3B8' }}>Prompt prêt à copier</span>
        <button
          type="button"
          onClick={copy}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', border: `1px solid ${color}`, color: '#fff', borderRadius: 6, padding: '4px 10px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
        >
          {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
          {copied ? 'Copié' : 'Copier'}
        </button>
      </div>
      <pre style={{ margin: 0, padding: '16px 18px', color: '#E2E8F0', fontSize: 13.5, lineHeight: 1.65, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
        {prompt}
      </pre>
    </div>
  )
}

export default function TerrainGuide({ guide, color = '#2563EB', background = '#fff', padding = '80px 40px' }) {
  if (!guide) return null
  const c = color
  const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }
  const pStyle = { fontSize: 15.5, color: '#374151', lineHeight: 1.8, margin: '0 0 14px' }

  return (
    <section id="guide" style={{ padding, background, scrollMarginTop: 96 }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {guide.kicker && (
          <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c, marginBottom: 10 }}>{guide.kicker}</div>
        )}
        <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 16px', lineHeight: 1.2 }}>
          {guide.h2}
        </h2>
        {guide.lead && (
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.75, margin: '0 0 40px', fontWeight: 500 }}>{guide.lead}</p>
        )}

        {guide.sections?.map((s, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <h3 style={h3Style}>{s.h3}</h3>
            {s.paras?.map((p, j) => <p key={j} style={pStyle}>{p}</p>)}
            {s.list?.length > 0 && (
              <ul style={{ margin: '4px 0 0', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.list.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.7 }}>
                    <span style={{ color: c, fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {guide.table?.rows?.length > 0 && (
          <div style={{ margin: '8px 0 44px', overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 12 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 560 }}>
              {guide.table.caption && (
                <caption style={{ captionSide: 'top', textAlign: 'left', padding: '14px 16px', fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 15, color: '#0A0A0A', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                  {guide.table.caption}
                </caption>
              )}
              <thead>
                <tr>
                  {guide.table.headers.map((h, i) => (
                    <th key={i} scope="col" style={{ textAlign: 'left', padding: '12px 16px', background: '#F9FAFB', color: '#0A0A0A', fontWeight: 700, borderBottom: `2px solid ${c}` }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {guide.table.rows.map((row, i) => (
                  <tr key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '12px 16px', color: j === 0 ? '#0A0A0A' : '#4B5563', fontWeight: j === 0 ? 600 : 400, verticalAlign: 'top', lineHeight: 1.6 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {guide.cas && (
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `4px solid ${c}`, borderRadius: 12, padding: '28px 28px 24px', marginBottom: 44 }}>
            <h3 style={h3Style}>{guide.cas.h3}</h3>
            {guide.cas.contexte && <p style={pStyle}>{guide.cas.contexte}</p>}
            {guide.cas.etapes?.length > 0 && (
              <ol style={{ margin: '0 0 18px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {guide.cas.etapes.map((e, i) => (
                  <li key={i} style={{ fontSize: 15, color: '#374151', lineHeight: 1.7 }}>{e}</li>
                ))}
              </ol>
            )}
            {guide.cas.prompt && <PromptBlock prompt={guide.cas.prompt} color={c} />}
            {guide.cas.resultat && (
              <p style={{ ...pStyle, margin: '18px 0 0' }}>
                <strong style={{ color: '#0A0A0A' }}>Ce que vous obtenez. </strong>{guide.cas.resultat}
              </p>
            )}
          </div>
        )}

        {guide.pieges?.length > 0 && (
          <div>
            <h3 style={h3Style}>Les pièges à connaître</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 8 }}>
              {guide.pieges.map((p, i) => (
                <div key={i} style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10, padding: '18px 20px' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                    <AlertTriangle size={16} color="#B45309" aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }} />
                    <strong style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, color: '#0A0A0A', lineHeight: 1.4 }}>{p.titre}</strong>
                  </div>
                  <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, margin: 0 }}>{p.texte}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {guide.sources?.length > 0 && (
          <div style={{ marginTop: 36, fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>
            <strong style={{ color: '#374151' }}>Sources consultées : </strong>
            {guide.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && ' · '}
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#4B5563' }}>{s.name}</a>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
