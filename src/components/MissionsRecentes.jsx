import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { MISSIONS, RETOURS, missionsPour, retoursPour } from '../data/missions-formation'
import { CASES } from '../data/etudes-de-cas'

/*
 * « Missions récentes et retours des participants » : études de cas anonymisées des
 * missions de formation (data/missions-formation.js), éventuellement précédées d'un
 * cas complet de /etudes-de-cas-ia, et extraits des questionnaires de fin de formation.
 * Sélection par page (slug), puis par outil et métier. Aucune note n'est affichée.
 * Usage : <MissionsRecentes page="formation-claude-pedagogique" outil="Claude" metier="pedagogique" casIds={['distribution']} />
 */

const INK = '#0A0A0A'
const TEXT = '#374151'
const MUTED = '#6B7280'
const LINE = '#E5E7EB'
// Première lettre en minuscule seulement : « Distribution IT B2B » → « distribution IT B2B »
const minuscule = t => t.charAt(0).toLowerCase() + t.slice(1)

export default function MissionsRecentes({ page, outil, metier, casIds = [], color = '#2563EB', bg = '#F9FAFB', max = 3, maxRetours = 3, titre, compact = false }) {
  // Compact (pages « propres ») : seulement ce qui vise CETTE page, en liens courts, pour ne pas
  // répéter sur des dizaines de pages le texte des cas déjà publié sur /etudes-de-cas-ia.
  const exact = it => it.pages?.includes(page)
  const missions = (compact ? missionsPour({ page, outil, metier }).filter(exact) : missionsPour({ page, outil, metier })).slice(0, max)
  const retours = (compact ? retoursPour({ page, outil, metier }).filter(exact) : retoursPour({ page, outil, metier })).slice(0, maxRetours)
  const cas = casIds.map(id => CASES.find(k => k.id === id)).filter(Boolean)
  if (!missions.length && !retours.length && !cas.length) return null

  if (compact) {
    return (
      <section id="missions" aria-labelledby="missions-titre" style={{ background: bg, padding: 'clamp(48px, 7vw, 72px) clamp(18px, 4vw, 40px)', borderTop: `1px solid ${LINE}`, scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 id="missions-titre" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(21px, 2.8vw, 30px)', fontWeight: 800, color: INK, margin: '0 0 18px' }}>
            {titre || (retours.length ? "Ce qu'en disent les participants" : 'Études de cas')}
          </h2>
          {retours.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
              {retours.map(r => (
                <figure key={r.id} style={{ margin: 0, background: '#fff', border: `1px solid ${LINE}`, borderRadius: 14, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <blockquote style={{ margin: 0, fontSize: 14.5, color: TEXT, lineHeight: 1.7, whiteSpace: 'pre-line' }}>« {r.verbatim} »</blockquote>
                  <figcaption style={{ marginTop: 'auto', fontSize: 12.5, color: MUTED, lineHeight: 1.5 }}>{r.attribution}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {(missions.length > 0 || cas.length > 0) && (
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: retours.length ? '16px 0 0' : 0 }}>
              {[
                ...cas.map(k => ({ href: `/etudes-de-cas-ia#${k.id}`, label: `Étude de cas, ${minuscule(k.sector)}` })),
                ...missions.map(m => ({ href: `/etudes-de-cas-ia#mission-${m.id}`, label: `Étude de cas, ${minuscule(m.secteur)} (${m.date})` })),
              ].map((l, i) => (
                <span key={l.href}>{i > 0 ? ' · ' : ''}<Link to={l.href} style={{ color, fontWeight: 600 }}>{l.label}</Link></span>
              ))}
            </p>
          )}
        </div>
      </section>
    )
  }

  return (
    <section id="missions" aria-labelledby="missions-titre" style={{ background: bg, padding: 'clamp(56px, 8vw, 96px) clamp(18px, 4vw, 40px)', borderTop: `1px solid ${LINE}`, scrollMarginTop: 96 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color, marginBottom: 10 }}>Études de cas</div>
        <h2 id="missions-titre" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '0 0 12px' }}>
          {titre || 'Missions récentes et retours des participants'}
        </h2>
        <p style={{ fontSize: 15.5, color: TEXT, lineHeight: 1.75, margin: '0 0 30px', maxWidth: 800 }}>
          Des formations menées ces derniers mois, décrites à partir des dossiers de mission : le contexte, ce qui a été travaillé sur les documents du client, ce que les participants ont produit. Les clients sont anonymisés.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
          {cas.map(k => (
            <article key={k.id} style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `3px solid ${color}`, borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.sector}</span>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, margin: 0, lineHeight: 1.3 }}>{k.title}</h3>
              <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, margin: 0 }}>{k.who}</p>
              <p style={{ fontSize: 14.5, color: TEXT, lineHeight: 1.7, margin: 0, flex: 1 }}>{k.teaser}</p>
              <Link to={`/etudes-de-cas-ia#${k.id}`} style={{ fontSize: 13.5, color, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                Lire l'étude de cas complète <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </article>
          ))}
          {missions.map(m => (
            <article key={m.id} style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `3px solid ${color}`, borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.secteur}</span>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, margin: 0, lineHeight: 1.3 }}>{m.titre}</h3>
              <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, margin: 0 }}>{m.qui} · {m.format} · {m.date}</p>
              <p style={{ fontSize: 14.5, color: TEXT, lineHeight: 1.7, margin: 0 }}>{m.contexte}</p>
              {m.programme?.length > 0 && (
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: TEXT, lineHeight: 1.6 }}>
                  {m.programme.slice(0, 3).map(p => <li key={p}>{p}</li>)}
                </ul>
              )}
              {m.livrables?.length > 0 && (
                <p style={{ fontSize: 13.5, color: TEXT, lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ color: INK }}>Travaillé pendant la formation : </strong>{m.livrables.join(' ; ')}.
                </p>
              )}
              <Link to={`/etudes-de-cas-ia#mission-${m.id}`} style={{ marginTop: 'auto', fontSize: 13.5, color, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                Lire l'étude de cas <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        {retours.length > 0 && (
          <div style={{ marginTop: 36 }}>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: INK, margin: '0 0 16px' }}>Ce qu'en disent les participants</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16 }}>
              {retours.map(r => (
                <figure key={r.id} style={{ margin: 0, background: '#fff', border: `1px solid ${LINE}`, borderRadius: 14, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <Quote size={18} strokeWidth={2} style={{ color }} aria-hidden="true" />
                  <blockquote style={{ margin: 0, fontSize: 14.5, color: TEXT, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{r.verbatim}</blockquote>
                  <figcaption style={{ marginTop: 'auto', fontSize: 13, color: MUTED, lineHeight: 1.5 }}>
                    <span style={{ color: TEXT, fontWeight: 600 }}>{r.attribution}</span>
                    {r.question && <span style={{ display: 'block', fontSize: 12, marginTop: 4 }}>{r.question}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.6, margin: '14px 0 0' }}>
              Réponses écrites aux questionnaires de fin de formation et aux appréciations des commanditaires, reproduites sans modification ni note. Les noms sont retirés ; un mot manquant dans l'original est ajouté entre crochets.
            </p>
          </div>
        )}

        <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: '24px 0 0' }}>
          <Link to="/etudes-de-cas-ia" style={{ color, fontWeight: 600 }}>Toutes nos études de cas</Link> · mise en relation possible avec un client, en privé.
        </p>
      </div>
    </section>
  )
}

export { MISSIONS, RETOURS }
