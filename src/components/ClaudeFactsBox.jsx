import { CLAUDE_FAITS } from '../data/claude-facts'

/*
 * Encadré « Claude au <date> » : modèles, contexte, offres et données, avec les sources
 * Anthropic et la date de vérification. Lu par toutes les pages Claude depuis
 * data/claude-facts.js, pour qu'aucune page ne contredise une autre.
 * id="claude-faits" : zone citable déclarée en speakable par les pages qui l'affichent.
 */

const INK = '#0A0A0A'
const TEXT = '#374151'
const MUTED = '#6B7280'
const LINE = '#E5E7EB'

export default function ClaudeFactsBox({ color = '#d97706', bg = '#fff', compact = false }) {
  const f = CLAUDE_FAITS
  const lignes = [
    ['Modèles', f.modeles.map(m => `${m.nom}${m.sortie ? ` (${m.sortie})` : ''} : ${m.role}`)],
    ['Contexte', [f.contexte]],
    ['Offres', f.offres.map(o => `${o.nom} : ${o.prix}${o.note ? `, ${o.note}` : ''}`)],
    ['Données', [f.donnees]],
    ...(compact ? [] : [['Fonctions', f.fonctions]]),
  ]
  return (
    <section id="claude-faits" aria-labelledby="claude-faits-titre" style={{ background: bg, padding: 'clamp(48px, 7vw, 80px) clamp(18px, 4vw, 40px)', borderTop: `1px solid ${LINE}` }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color, marginBottom: 10 }}>Repères vérifiés</div>
        <h2 id="claude-faits-titre" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '0 0 10px' }}>
          Claude au {f.verifieLeTexte} : modèles, contexte et offres
        </h2>
        <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 24px', maxWidth: 760 }}>
          Anthropic fait évoluer Claude chaque mois. La formation part de l'état de l'outil le jour de la session ; voici celui que nous avons vérifié sur les sources d'Anthropic le {f.verifieLeTexte}.
        </p>
        <dl style={{ margin: 0, background: '#fff', border: `1px solid ${LINE}`, borderRadius: 14, padding: '6px 24px' }}>
          {lignes.map(([label, valeurs], i) => (
            <div key={label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}>
              <dt style={{ flex: '0 0 110px', fontWeight: 800, fontSize: 13.5, color: INK, fontFamily: 'Nunito, sans-serif' }}>{label}</dt>
              <dd style={{ margin: 0, flex: 1, minWidth: 220 }}>
                {valeurs.length === 1
                  ? <p style={{ margin: 0, fontSize: 14.5, color: TEXT, lineHeight: 1.65 }}>{valeurs[0]}</p>
                  : (
                    <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, color: TEXT, lineHeight: 1.65 }}>
                      {valeurs.map(v => <li key={v}>{v}</li>)}
                    </ul>
                  )}
              </dd>
            </div>
          ))}
        </dl>
        <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.6, margin: '14px 0 0' }}>
          {f.prixNote} Pages d'Anthropic consultées :{' '}
          {f.sources.map((s, i) => (
            <span key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: MUTED, textDecoration: 'underline' }}>{s.name}</a>
              {i < f.sources.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
