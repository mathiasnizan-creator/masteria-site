import { useEffect, useRef, useState } from 'react'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * « Où nous intervenons » (home, juste après « Notre accompagnement », demande de Mathias
 * du 22/10/2026) : carte à points reprise des propositions commerciales (Natural Earth,
 * même projection que la page « Réseau international » des devis), remplacée le même jour
 * par une carte vectorielle à frontières (voir VUE). Pays d'intervention en bleu :
 * France, Belgique, Suisse, États-Unis, Mexique ; les repères sont dessinés ici.
 * Lieux : Lyon (siège), Belgique, Suisse, Washington (sessions Albéa d'octobre 2026),
 * Querétaro (Mexique, idem). L'Inde n'apparaît pas tant que Goa n'a pas eu lieu.
 * Refaite le même jour (« la carte fait petite ») : carte pleine largeur sous le titre,
 * étiquettes en HTML posées sur la carte (taille de texte fixe quel que soit l'écran),
 * lieux en quatre cartes sous la carte. Animation (sans les pointillés de trajet, jugés
 * inutiles) : à l'arrivée de la section, les repères s'allument l'un après l'autre en
 * partant de Lyon, les étiquettes apparaissent en fondu, puis chaque lieu émet une onde
 * douce, en décalé. Mouvement réduit : tout est affiché d'emblée, sans onde.
 */

const INK = '#0A0A0A'
const TEXT = '#374151'
const MUTED = '#6B7280'
const BLUE = '#2563EB'
const BLUE_D = '#1D4ED8'

// Repère du fond public/assets/carte-presence.svg : Mercator, 128° O à 34° E, 8° à 66° N
// (Natural Earth 1:50m via world-atlas, frontières visibles ; « on ne reconnaît pas les
// pays » avec l'ancienne carte à points). Positions calculées par la même projection.
// Pas de mention de source affichée (demande de Mathias ; Natural Earth est dans le domaine public).
const VUE = { x: 0, y: 0, l: 1000, h: 498.1 }
const pctX = x => `${((x - VUE.x) / VUE.l) * 100}%`
const pctY = y => `${((y - VUE.y) / VUE.h) * 100}%`

const LYON = [820.0, 229.2]
const REPERES = [
  { id: 'be', x: 817.0, y: 182.0 },
  { id: 'ch', x: 836.1, y: 218.7 },
  { id: 'us', x: 314.6, y: 286.6 },
  { id: 'mx', x: 170.4, y: 417.8 },
]

// Étiquettes : point d'accroche (repère carte) + décalage en pixels écran.
const ETIQUETTES = [
  { cle: 'lyon', nom: 'Lyon', sous: 'Siège', x: LYON[0], y: LYON[1], dx: -16, dy: 6, ancre: 'droite-haut', siege: true },
  { cle: 'be', nom: 'Belgique', x: 817.0, y: 182.0, dx: 16, dy: 0, ancre: 'gauche-milieu', europe: true },
  { cle: 'ch', nom: 'Suisse', x: 836.1, y: 218.7, dx: 16, dy: 0, ancre: 'gauche-milieu', europe: true },
  { cle: 'be', nom: 'Belgique · Suisse', x: 817.0, y: 182.0, dx: -8, dy: -8, ancre: 'droite-bas', mobile: true },
  { cle: 'us', nom: 'Washington', sous: 'États-Unis', x: 314.6, y: 286.6, dx: 16, dy: 0, ancre: 'gauche-milieu' },
  { cle: 'mx', nom: 'Querétaro', sous: 'Mexique', x: 170.4, y: 417.8, dx: 16, dy: 0, ancre: 'gauche-milieu' },
]

const ANCRES = {
  'droite-haut': 'translate(-100%, 0)',
  'droite-bas': 'translate(-100%, -100%)',
  'gauche-bas': 'translate(0, -100%)',
  'gauche-haut': 'translate(0, 0)',
  'gauche-milieu': 'translate(0, -50%)',
}

const LIEUX = [
  { zone: 'Siège', titre: 'Lyon', langue: 'FR', desc: 'Conception des parcours, coordination des missions et du réseau de formateurs.', siege: true },
  { zone: 'Europe', titre: 'Belgique et Suisse', langue: 'FR', desc: 'Formations en présentiel et en classe virtuelle, en français.' },
  { zone: 'Amérique du Nord', titre: 'Washington', langue: 'EN', desc: "Sessions animées en anglais pour les équipes d'un groupe industriel." },
  { zone: 'Amérique latine', titre: 'Querétaro', langue: 'ES', desc: 'Sessions animées en espagnol sur le site de production du même groupe.' },
]

// Délai d'allumage (s) : Lyon, puis l'Europe, puis les Amériques.
const DELAIS = { lyon: 0, be: 0.35, ch: 0.5, us: 0.9, mx: 1.2 }

const CSS = `
@keyframes piAllume{0%{opacity:0;transform:scale(0)}70%{opacity:1;transform:scale(1.35)}100%{opacity:1;transform:scale(1)}}
@keyframes piEtiq{from{opacity:0;translate:0 8px}to{opacity:1;translate:0 0}}
@keyframes piOnde{0%{r:7;opacity:.6}70%,100%{r:34;opacity:0}}
.pi-carte .pi-point,.pi-carte .pi-etiq{opacity:0}
.pi-carte .pi-onde{opacity:0}
.pi-vu .pi-point{transform-box:fill-box;transform-origin:center;animation:piAllume .6s cubic-bezier(.2,.8,.3,1.2) var(--d) both}
.pi-vu .pi-etiq{animation:piEtiq .5s ease-out calc(var(--d) + .25s) both}
.pi-vu .pi-onde{animation:piOnde 3.6s ease-out calc(var(--d) + .8s) infinite}
@media (prefers-reduced-motion:reduce){
  .pi-carte .pi-point,.pi-carte .pi-etiq{opacity:1;animation:none}
  .pi-carte .pi-onde{display:none}
}
`

function Etiquette({ e, grand }) {
  return (
    <div className="pi-etiq" style={{
      '--d': `${DELAIS[e.cle]}s`,
      position: 'absolute', left: pctX(e.x), top: pctY(e.y), pointerEvents: 'none',
      transform: `translate(${e.dx}px, ${e.dy}px) ${ANCRES[e.ancre]}`,
      display: 'flex', flexDirection: 'column', gap: 1, whiteSpace: 'nowrap',
      padding: grand ? '7px 12px' : '4px 8px', borderRadius: 10,
      background: e.siege ? INK : '#fff', color: e.siege ? '#fff' : INK,
      boxShadow: '0 6px 20px rgba(15, 23, 42, 0.14)', border: e.siege ? 'none' : '1px solid #DBEAFE',
    }}>
      {e.sous && <span style={{ fontSize: grand ? 10.5 : 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: e.siege ? '#93C5FD' : BLUE }}>{e.sous}</span>}
      <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: grand ? 15 : 12, lineHeight: 1.2 }}>{e.nom}</span>
    </div>
  )
}

function Carte({ grand }) {
  const etiquettes = ETIQUETTES.filter(e => (grand ? !e.mobile : !e.europe))
  const ref = useRef(null)
  const [vu, setVu] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setVu(true); return }
    const io = new IntersectionObserver(([entree]) => {
      if (entree.isIntersecting) { setVu(true); io.disconnect() }
    }, { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={vu ? 'pi-carte pi-vu' : 'pi-carte'} style={{ position: 'relative' }}>
      <svg viewBox={`${VUE.x} ${VUE.y} ${VUE.l} ${VUE.h}`} aria-hidden="true" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <style>{CSS}</style>
        <image href="/assets/carte-presence.svg" x="0" y="0" width={VUE.l} height={VUE.h} />
        {REPERES.map(r => (
          <g key={r.id} style={{ '--d': `${DELAIS[r.id]}s` }}>
            <circle className="pi-onde" cx={r.x} cy={r.y} r="7" fill="none" stroke={BLUE_D} strokeWidth="2" />
            <g className="pi-point">
              <circle cx={r.x} cy={r.y} r="11" fill="#fff" fillOpacity="0.55" />
              <circle cx={r.x} cy={r.y} r="6" fill={BLUE_D} stroke="#fff" strokeWidth="2.5" />
            </g>
          </g>
        ))}
        <g style={{ '--d': '0s' }}>
          <circle className="pi-onde" cx={LYON[0]} cy={LYON[1]} r="7" fill="none" stroke={INK} strokeWidth="2" />
          <circle className="pi-point" cx={LYON[0]} cy={LYON[1]} r="7.5" fill={INK} stroke="#fff" strokeWidth="2.5" />
        </g>
      </svg>
      {etiquettes.map(e => <Etiquette key={e.nom} e={e} grand={grand} />)}
    </div>
  )
}

export default function PresenceInternationale() {
  const isDesktop = useIsDesktop()
  return (
    <section aria-labelledby="pi-titre" style={{ background: '#fff', padding: 'clamp(72px, 10vw, 120px) clamp(18px, 4vw, 32px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 1fr) minmax(0, 1fr)' : '1fr', gap: 'clamp(16px, 4vw, 64px)', alignItems: 'end', marginBottom: 'clamp(32px, 4vw, 48px)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: BLUE, marginBottom: 16 }}>
              <span aria-hidden="true" style={{ width: 22, height: 2, background: BLUE }} />
              Où nous intervenons
            </div>
            <h2 id="pi-titre" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 900, letterSpacing: '-0.025em', color: INK, lineHeight: 1.12, margin: 0 }}>
              Un siège à Lyon, des équipes accompagnées à l'international
            </h2>
          </div>
          <p style={{ fontSize: 17, color: TEXT, lineHeight: 1.75, margin: 0 }}>
            Les parcours sont conçus à Lyon. Nos formateurs se déplacent chez vous, en France comme à l'étranger, et animent en français, en anglais ou en espagnol.
          </p>
        </div>

        <figure style={{ margin: 0, borderRadius: 24, overflow: 'hidden', border: '1px solid #DBEAFE', background: '#F8FAFE' }}>
          <div>
            <Carte grand={isDesktop} />
          </div>
          <figcaption style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 18px', padding: isDesktop ? '12px 28px 18px' : '10px 16px 14px', fontSize: 12.5, color: MUTED }}>
            <span style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span aria-hidden="true" style={{ width: 9, height: 9, borderRadius: 999, background: INK }} />Siège</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span aria-hidden="true" style={{ width: 9, height: 9, borderRadius: 999, background: BLUE }} />Pays d'intervention</span>
            </span>
          </figcaption>
        </figure>

        <ul style={{ listStyle: 'none', padding: 0, margin: 'clamp(20px, 3vw, 28px) 0 0', display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(4, minmax(0, 1fr))' : 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 16 }}>
          {LIEUX.map(l => (
            <li key={l.titre} style={{ padding: '20px 20px 22px', borderRadius: 16, border: '1px solid #E5E7EB', background: l.siege ? INK : '#fff', color: l.siege ? '#fff' : INK }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: l.siege ? '#93C5FD' : BLUE }}>{l.zone}</span>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 999, background: l.siege ? 'rgba(255,255,255,0.12)' : '#EFF6FF', color: l.siege ? '#fff' : BLUE_D }}>{l.langue}</span>
              </div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 19, marginBottom: 6 }}>{l.titre}</div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: l.siege ? '#CBD5E1' : MUTED }}>{l.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
