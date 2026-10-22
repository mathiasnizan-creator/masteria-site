import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * « Où nous intervenons » (home, juste après « Notre accompagnement », demande de Mathias
 * du 22/10/2026) : carte à points reprise des propositions commerciales (Natural Earth,
 * même projection que la page « Réseau international » des devis). Le fond de carte est
 * un fichier statique (public/assets/carte-presence-monde.svg, pays d'intervention en
 * bleu : France, Belgique, Suisse, États-Unis, Mexique) ; les repères sont dessinés
 * ici, dans le même repère 1000 × 420, sur un cadrage Amériques + Europe.
 * Lieux : Lyon (siège), Belgique, Suisse, Washington (sessions Albéa d'octobre 2026),
 * Querétaro (Mexique, idem). L'Inde n'apparaît pas tant que Goa n'a pas eu lieu.
 */

const INK = '#0A0A0A'
const TEXT = '#374151'
const MUTED = '#6B7280'
const LINE = '#E5E7EB'
const BLUE = '#2563EB'

const LYON = [499.5, 105.7]
const REPERES = [
  { nom: 'Belgique', x: 498.1, y: 90.0, lx: 512, ly: 86, ancre: 'start' },
  { nom: 'Suisse', x: 507.0, y: 102.1, lx: 518, ly: 107, ancre: 'start' },
  { nom: 'Washington', x: 265.6, y: 126.9, lx: 276, ly: 124, ancre: 'start' },
  { nom: 'Querétaro', x: 198.9, y: 183.5, lx: 210, ly: 198, ancre: 'start' },
]

const LIEUX = [
  { titre: 'Lyon, siège', desc: 'Conception des parcours, coordination des missions et du réseau de formateurs.' },
  { titre: 'Belgique et Suisse', desc: 'Formations en présentiel et en classe virtuelle, en français.' },
  { titre: 'États-Unis, Washington', desc: "Sessions animées en anglais pour les équipes d'un groupe industriel." },
  { titre: 'Mexique, Querétaro', desc: "Sessions animées en espagnol sur le site de production du même groupe." },
]

const CSS = `
@keyframes piOnde{0%{r:7;opacity:.55}100%{r:20;opacity:0}}
@keyframes piTrait{to{stroke-dashoffset:-24}}
.pi-onde{animation:piOnde 2.4s ease-out infinite}
.pi-trait{animation:piTrait 1.6s linear infinite}
@media (prefers-reduced-motion:reduce){.pi-onde,.pi-trait{animation:none}}
`

// Arc de Lyon vers un repère, bombé vers le nord comme une route aérienne.
const arc = ([x1, y1], [x2, y2]) => {
  const mx = (x1 + x2) / 2
  const my = Math.min(y1, y2) - Math.abs(x1 - x2) * 0.22
  return `M${x1} ${y1}Q${mx} ${my} ${x2} ${y2}`
}

const libelle = { fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fill: INK, stroke: '#fff', strokeWidth: 4, paintOrder: 'stroke' }

// Libellés agrandis sur mobile, où la carte est réduite d'un tiers environ.
function Carte({ grand }) {
  const taille = grand ? 13 : 18
  return (
    <svg viewBox="120 40 470 195" role="img" aria-labelledby="pi-carte-titre" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <title id="pi-carte-titre">Carte : siège à Lyon, interventions en Belgique, en Suisse, aux États-Unis (Washington) et au Mexique (Querétaro)</title>
      <style>{CSS}</style>
      <image href="/assets/carte-presence-monde.svg" x="0" y="0" width="1000" height="420" />
      {REPERES.filter(r => r.x < 400).map(r => (
        <path key={r.nom} className="pi-trait" d={arc(LYON, [r.x, r.y])} fill="none" stroke={BLUE} strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="4 8" strokeLinecap="round" />
      ))}
      {REPERES.map(r => (
        <g key={r.nom}>
          <circle cx={r.x} cy={r.y} r="7" fill="none" stroke={BLUE} strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx={r.x} cy={r.y} r="3.6" fill={BLUE} stroke="#fff" strokeWidth="1.8" />
          <text x={r.lx} y={r.ly} textAnchor={r.ancre} style={{ ...libelle, fontSize: taille }}>{r.nom}</text>
        </g>
      ))}
      <circle className="pi-onde" cx={LYON[0]} cy={LYON[1]} r="7" fill="none" stroke={BLUE} strokeWidth="2" />
      <circle cx={LYON[0]} cy={LYON[1]} r="5.5" fill={INK} stroke="#fff" strokeWidth="2" />
      <text x={LYON[0] - 4} y={LYON[1] + 10 + taille} textAnchor="middle" style={{ ...libelle, fontSize: taille + 1 }}>Lyon · siège</text>
    </svg>
  )
}

export default function PresenceInternationale() {
  const isDesktop = useIsDesktop()
  return (
    <section aria-labelledby="pi-titre" style={{ background: '#fff', padding: 'clamp(72px, 10vw, 120px) clamp(18px, 4vw, 32px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 5fr) minmax(0, 7fr)' : '1fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: BLUE, marginBottom: 16 }}>
            <span aria-hidden="true" style={{ width: 22, height: 2, background: BLUE }} />
            Où nous intervenons
          </div>
          <h2 id="pi-titre" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 900, letterSpacing: '-0.025em', color: INK, lineHeight: 1.12, margin: '0 0 18px' }}>
            Un siège à Lyon, des équipes formées sur deux continents
          </h2>
          <p style={{ fontSize: 17, color: TEXT, lineHeight: 1.75, margin: '0 0 28px' }}>
            Les parcours sont conçus à Lyon. Nos formateurs se déplacent chez vous, en France comme à l'étranger, et animent en français, en anglais ou en espagnol.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${LINE}` }}>
            {LIEUX.map((l, i) => (
              <li key={l.titre} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: `1px solid ${LINE}` }}>
                <span aria-hidden="true" style={{ flex: 'none', width: 10, height: 10, marginTop: 7, borderRadius: 999, background: i === 0 ? INK : BLUE }} />
                <div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16, color: INK }}>{l.titre}</div>
                  <div style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.6 }}>{l.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <figure style={{ margin: 0, background: '#F8FAFF', border: '1px solid #DBEAFE', borderRadius: 20, padding: 'clamp(12px, 2.5vw, 28px)' }}>
          <Carte grand={isDesktop} />
          <figcaption style={{ fontSize: 12.5, color: MUTED, marginTop: 10 }}>Pays d'intervention en bleu. Fond de carte : Natural Earth.</figcaption>
        </figure>
      </div>
    </section>
  )
}
