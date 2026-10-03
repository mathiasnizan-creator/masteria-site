import { useState } from 'react'
import { Star, ExternalLink, Pause, Play } from 'lucide-react'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL, AVIS_GOOGLE } from '../data/avis-google'

/*
 * Avis Google qui défilent, avec la note de la fiche (sans le nombre d'avis, à la demande
 * de Mathias). Les textes viennent de data/avis-google.js, reproduits sans modification ;
 * tant que la liste est vide, seuls la note et le lien vers la fiche s'affichent.
 * Défilement : piste doublée (la copie est masquée aux lecteurs d'écran), pause au survol,
 * au focus et par bouton (WCAG 2.2.2), arrêt complet quand le visiteur réduit les animations.
 * Variantes : « section » (bloc autonome, pages formation) et « bloc » (inséré dans une
 * section existante, home).
 */

const BLUE = '#2563EB'
const INK = '#0A0A0A'
const TEXT = '#374151'
const MUTED = '#6B7280'
const LINE = '#E5E7EB'
const ETOILE = '#F59E0B'
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const moisAnnee = (d) => {
  const [annee, mois] = d.split('-')
  return `${MOIS[Number(mois) - 1]} ${annee}`
}

const CSS = `
.avis-piste{display:flex;gap:18px;width:max-content;animation:avis-defile var(--avis-duree) linear infinite}
.avis-zone:hover .avis-piste,.avis-zone:focus-within .avis-piste,.avis-zone[data-pause="true"] .avis-piste{animation-play-state:paused}
@keyframes avis-defile{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media (prefers-reduced-motion:reduce){.avis-piste{animation:none}.avis-zone{overflow-x:auto!important}}
`

function Etoiles({ size = 16, note = 5 }) {
  return (
    <span role="img" aria-label={`${note} étoiles sur 5`} style={{ display: 'inline-flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={size} strokeWidth={0} fill={i <= note ? ETOILE : LINE} aria-hidden="true" />
      ))}
    </span>
  )
}

function Carte({ avis, cache = false }) {
  return (
    <figure aria-hidden={cache || undefined} style={{ flex: 'none', width: 'min(340px, 78vw)', boxSizing: 'border-box', margin: 0, background: '#fff', border: `1px solid ${LINE}`, borderRadius: 16, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Etoiles size={14} note={avis.note} />
      <blockquote style={{ margin: 0, fontSize: 14.5, color: TEXT, lineHeight: 1.65 }}>{avis.texte}</blockquote>
      <figcaption style={{ marginTop: 'auto', fontSize: 13, color: MUTED }}>
        <strong style={{ color: INK, fontWeight: 700 }}>{avis.auteur}</strong> · avis Google, {moisAnnee(avis.date)}
      </figcaption>
    </figure>
  )
}

export default function AvisGoogle({ variant = 'section', bg = '#fff' }) {
  const [pause, setPause] = useState(false)
  // Assez de cartes pour que la piste dépasse la largeur de l'écran, puis doublée pour boucler.
  const tour = AVIS_GOOGLE.length
    ? Array.from({ length: Math.ceil(5 / AVIS_GOOGLE.length) }, () => AVIS_GOOGLE).flat()
    : []

  const resume = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px 18px', flexWrap: 'wrap' }}>
      <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: variant === 'section' ? 44 : 38, fontWeight: 900, color: INK, letterSpacing: '-0.02em', lineHeight: 1 }}>
        {NOTE_GOOGLE.valeur}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <Etoiles size={18} />
        <span style={{ fontSize: 13.5, color: MUTED }}>
          {tour.length > 0 ? 'Note de notre fiche Google' : `Note de notre fiche Google, ${moisAnnee(NOTE_GOOGLE.releveeLe)}`}
        </span>
      </span>
      <a href={FICHE_GOOGLE_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginLeft: 'auto', fontSize: 14, fontWeight: 700, color: BLUE, textDecoration: 'none' }}>
        Voir les avis sur Google <ExternalLink size={14} strokeWidth={2.2} aria-hidden="true" />
        <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}> (nouvel onglet)</span>
      </a>
    </div>
  )

  const defilement = tour.length > 0 && (
    <div className="avis-zone" data-pause={pause} style={{ overflow: 'hidden', marginTop: 28, WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)', maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}>
      <div className="avis-piste" style={{ '--avis-duree': `${tour.length * 9}s`, alignItems: 'stretch' }}>
        {tour.map((a, i) => <Carte key={`a${i}`} avis={a} cache={i >= AVIS_GOOGLE.length} />)}
        {tour.map((a, i) => <Carte key={`b${i}`} avis={a} cache />)}
      </div>
    </div>
  )

  const pied = tour.length > 0 && (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px 18px', flexWrap: 'wrap', marginTop: 18 }}>
      <p style={{ margin: 0, fontSize: 12.5, color: MUTED, lineHeight: 1.6, flex: '1 1 320px' }}>
        Avis déposés sur notre fiche Google et reproduits sans modification. Masteria ne les modère pas. Note relevée en {moisAnnee(NOTE_GOOGLE.releveeLe)}.
      </p>
      <button type="button" onClick={() => setPause(p => !p)} aria-pressed={pause} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: `1px solid ${LINE}`, borderRadius: 99, padding: '6px 12px', fontSize: 12.5, fontWeight: 600, color: TEXT, cursor: 'pointer' }}>
        {pause ? <Play size={13} strokeWidth={2.2} aria-hidden="true" /> : <Pause size={13} strokeWidth={2.2} aria-hidden="true" />}
        {pause ? 'Reprendre le défilement' : 'Mettre en pause'}
      </button>
    </div>
  )

  if (variant === 'bloc') {
    return (
      <div>
        <style>{CSS}</style>
        <h3 style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, margin: '0 0 18px' }}>Avis Google</h3>
        {resume}
        {defilement}
        {pied}
      </div>
    )
  }

  return (
    <section aria-labelledby="avis-google" style={{ background: bg, padding: 'clamp(56px, 7vw, 88px) clamp(18px, 4vw, 40px)' }}>
      <style>{CSS}</style>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <h2 id="avis-google" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '0 0 22px' }}>
          Nos clients en parlent sur Google
        </h2>
        {resume}
        {defilement}
        {pied}
      </div>
    </section>
  )
}
