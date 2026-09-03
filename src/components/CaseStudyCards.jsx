import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CASES } from '../data/etudes-de-cas'

/*
 * Cartes « Études de cas » pour les pages money (conseil, audit, diagnostic…).
 * Données partagées avec /etudes-de-cas-ia (src/data/etudes-de-cas.js).
 * Usage : <CaseStudyCards ids={['photovoltaique', 'industrie']} title="…" intro="…" />
 * Chaque carte renvoie vers la section complète du cas (méthode en six temps,
 * résultats pour les équipes et l'organisation).
 */

const c = '#2563EB'
const cLight = '#DBEAFE'

export default function CaseStudyCards({ ids, kicker = 'Références', title = 'Des missions comparables, documentées', intro, bg = '#fff', bordered = true }) {
  const cases = ids.map(id => CASES.find(k => k.id === id)).filter(Boolean)
  if (!cases.length) return null
  return (
    <section id="etudes-de-cas" style={{ padding: 'clamp(64px, 9vw, 110px) 24px', background: bg, borderTop: bordered ? '1px solid #E5E7EB' : 'none', borderBottom: bordered ? '1px solid #E5E7EB' : 'none' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }}>{kicker}</div>
        <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em', maxWidth: 880 }}>{title}</h2>
        {intro && (
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 820 }}>{intro}</p>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${cases.length > 2 ? 280 : 320}px), 1fr))`, gap: 20 }}>
          {cases.map(k => {
            const Icon = k.icon
            return (
              <article key={k.id} style={{ background: '#fff', border: '1px solid #E5E7EB', borderTop: `3px solid ${c}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 10, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={2.2} style={{ color: c }} />
                  </span>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.sector}</span>
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{k.title}</h3>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{k.who}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, margin: '4px 0' }}>
                  {k.stats.slice(0, 2).map(([v, l]) => (
                    <div key={l} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '12px 14px' }}>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: c, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{v}</div>
                      <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.45, marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, flex: 1 }}>{k.teaser}</p>
                <Link to={`/etudes-de-cas-ia#${k.id}`} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 4 }}>
                  Lire la méthode en six temps et les résultats
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>
        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 880 }}>
          Cas anonymisés à la demande des clients : secteur, taille et chiffres issus des dossiers de mission, jamais de nom. Mise en relation possible en privé, sous accord de confidentialité. <Link to="/etudes-de-cas-ia" style={{ color: c, fontWeight: 600 }}>Toutes nos études de cas</Link>.
        </p>
      </div>
    </section>
  )
}
