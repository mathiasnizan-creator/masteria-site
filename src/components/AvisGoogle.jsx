import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Star, ExternalLink, Pause, Play, X } from 'lucide-react'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL, AVIS_GOOGLE } from '../data/avis-google'

/*
 * Avis Google qui défilent, avec la note de la fiche (sans le nombre d'avis, à la demande
 * de Mathias). Les textes viennent de data/avis-google.js, reproduits sans modification ;
 * tant que la liste est vide, seuls la note et le lien vers la fiche s'affichent.
 * Défilement : piste doublée (la copie est inerte et masquée aux lecteurs d'écran), pause
 * au survol, au focus, par bouton (WCAG 2.2.2) et pendant la lecture d'un avis ; arrêt
 * complet quand le visiteur réduit les animations. Cartes de même hauteur : texte limité à
 * six lignes, l'avis complet s'ouvre dans une fenêtre (texte intégral, jamais réécrit).
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
.avis-dialog::backdrop{background:rgba(15,23,42,.45)}
`

/* Au-delà, le texte dépasse les six lignes de la carte : bouton « Lire l'avis en entier ». */
const estLong = (texte) => texte.length > 230 || texte.split('\n').length > 3

function Etoiles({ size = 16, note = 5 }) {
  return (
    <span role="img" aria-label={`${note} étoiles sur 5`} style={{ display: 'inline-flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={size} strokeWidth={0} fill={i <= note ? ETOILE : LINE} aria-hidden="true" />
      ))}
    </span>
  )
}

function Carte({ avis, cache = false, onLire, court = false }) {
  return (
    <figure inert={cache || undefined} aria-hidden={cache || undefined} style={{ flex: 'none', width: 'min(340px, 78vw)', boxSizing: 'border-box', margin: 0, background: '#fff', border: `1px solid ${LINE}`, borderRadius: 16, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Etoiles size={14} note={avis.note} />
      <blockquote style={{ margin: 0, fontSize: 14.5, color: TEXT, lineHeight: 1.65, whiteSpace: 'pre-line', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 6, overflow: 'hidden' }}>{court ? extrait(avis.texte, 120) : avis.texte}</blockquote>
      {(court ? extrait(avis.texte, 120) !== avis.texte : estLong(avis.texte)) && (
        <button type="button" onClick={() => onLire(avis)} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', padding: 0, fontSize: 13.5, fontWeight: 700, color: BLUE, cursor: 'pointer' }}>
          Lire l'avis en entier
        </button>
      )}
      <figcaption style={{ marginTop: 'auto', fontSize: 13, color: MUTED }}>
        <strong style={{ color: INK, fontWeight: 700 }}>{avis.auteur}</strong> · avis Google, {moisAnnee(avis.date)}
      </figcaption>
    </figure>
  )
}

const sAbonner = () => () => {}

/* Avis les plus proches de la page en tête (ex. ['Claude'] sur les pages Claude), ordre
   d'origine conservé ensuite. Tous les avis restent affichés : on ne fait que les trier. */
const scorer = priorite => {
  const motifs = (priorite || []).map(m => new RegExp(m, 'i'))
  return a => motifs.reduce((n, re) => n + (re.test(a.texte) ? 1 : 0), 0)
}
const trier = (avis, priorite) => {
  if (!priorite?.length) return avis
  const score = scorer(priorite)
  return avis.map((a, i) => ({ a, i, s: score(a) })).sort((x, y) => y.s - x.s || x.i - y.i).map(x => x.a)
}
/* Extrait affiché dans le HTML (mode « pertinents ») : début de l'avis coupé à un mot, suivi de « … ».
   L'avis complet, sans modification, s'ouvre en un clic. */
const extrait = (texte, max = 170) => {
  if (texte.length <= max) return texte
  const coupe = texte.slice(0, max)
  return coupe.slice(0, coupe.lastIndexOf(' ')).replace(/[\s,;:.!?]+$/, '') + '…'
}

export default function AvisGoogle({ variant = 'section', bg = '#fff', priorite, titre = 'Nos clients en parlent sur Google', pertinents }) {
  const [tous, setTous] = useState(false)
  const [pause, setPause] = useState(false)
  const [lu, setLu] = useState(null)
  const fenetre = useRef(null)
  useEffect(() => {
    const d = fenetre.current
    if (!d) return
    if (lu && !d.open) d.showModal()
    if (!lu && d.open) d.close()
  }, [lu])
  // La copie de la piste (qui ne sert qu'à boucler le défilement) n'est ajoutée qu'après
  // le chargement, jamais au prérendu : le HTML lu par les moteurs contient chaque avis
  // une seule fois au lieu de deux.
  const boucle = useSyncExternalStore(sAbonner, () => !window.__MASTERIA_PRERENDER__, () => false)
  const avis = trier(AVIS_GOOGLE, priorite)
  // Assez de cartes pour que la piste dépasse la largeur de l'écran, puis doublée pour boucler.
  const tour = avis.length
    ? Array.from({ length: Math.ceil(5 / avis.length) }, () => avis).flat()
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
    <div className="avis-zone" data-pause={pause || Boolean(lu)} style={{ overflow: 'hidden', marginTop: 28, WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)', maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}>
      <div className="avis-piste" style={{ '--avis-duree': `${tour.length * 9}s`, alignItems: 'stretch', animationName: boucle ? undefined : 'none' }}>
        {tour.map((a, i) => <Carte key={`a${i}`} avis={a} cache={i >= avis.length} onLire={setLu} />)}
        {boucle && tour.map((a, i) => <Carte key={`b${i}`} avis={a} cache onLire={setLu} />)}
      </div>
    </div>
  )

  // Mode « pertinents » (pages propres) : les avis les plus proches de la page en extraits dans le
  // HTML, les autres affichés à la demande (jamais au prérendu) ; tous restent accessibles.
  const score = scorer(priorite)
  // Aucun avis ne parle de la page : pas d'extrait mis en avant (07/10/2026). Les trois mêmes
  // extraits par défaut se répétaient sur près de 90 pages ; tous les avis restent à un clic.
  const enTete = pertinents ? avis.filter(a => score(a) > 0).slice(0, pertinents) : []
  const autres = pertinents ? avis.filter(a => !enTete.includes(a)) : []
  const grille = pertinents && (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
        {[...enTete, ...(tous ? autres : [])].map((a, i) => <Carte key={`p${i}`} avis={a} onLire={setLu} court />)}
      </div>
      {!tous && autres.length > 0 && (
        <button type="button" onClick={() => setTous(true)} style={{ marginTop: 16, background: '#fff', border: `1px solid ${LINE}`, borderRadius: 99, padding: '8px 16px', fontSize: 13.5, fontWeight: 700, color: BLUE, cursor: 'pointer' }}>
          {enTete.length ? `Voir les ${autres.length} autres avis` : `Lire les ${autres.length} avis`}
        </button>
      )}
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

  const lecture = tour.length > 0 && (
    <dialog ref={fenetre} className="avis-dialog" aria-labelledby="avis-lecture-titre" onClose={() => setLu(null)}
      onClick={e => { if (e.target === e.currentTarget) setLu(null) }}
      style={{ margin: 'auto', border: 'none', borderRadius: 18, padding: 0, width: 'min(560px, calc(100vw - 32px))', maxHeight: 'calc(100vh - 48px)', overflowY: 'auto', boxShadow: '0 24px 60px -20px rgba(15,23,42,0.35)' }}>
      {lu && (
        <div style={{ padding: '24px 26px 26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
            <Etoiles size={16} note={lu.note} />
            <button type="button" onClick={() => setLu(null)} aria-label="Fermer l'avis" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 99, border: `1px solid ${LINE}`, background: '#fff', cursor: 'pointer', color: TEXT }}>
              <X size={16} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
          <p id="avis-lecture-titre" style={{ margin: '0 0 12px', fontSize: 14, color: MUTED }}>
            <strong style={{ color: INK, fontWeight: 700 }}>{lu.auteur}</strong> · avis Google, {moisAnnee(lu.date)}
          </p>
          <blockquote style={{ margin: 0, fontSize: 15.5, color: TEXT, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{lu.texte}</blockquote>
        </div>
      )}
    </dialog>
  )

  if (variant === 'bloc') {
    return (
      <div>
        <style>{CSS}</style>
        <h3 style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, margin: '0 0 18px' }}>Avis Google</h3>
        {resume}
        {defilement}
        {pied}
        {lecture}
      </div>
    )
  }

  return (
    <section aria-labelledby="avis-google" style={{ background: bg, padding: 'clamp(56px, 7vw, 88px) clamp(18px, 4vw, 40px)' }}>
      <style>{CSS}</style>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <h2 id="avis-google" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '0 0 22px' }}>
          {titre}
        </h2>
        {resume}
        {pertinents ? grille : defilement}
        {pertinents
          ? <p style={{ margin: '14px 0 0', fontSize: 12.5, color: MUTED }}>Extraits ; chaque avis s'ouvre en entier, sans modification.</p>
          : pied}
        {lecture}
      </div>
    </section>
  )
}
