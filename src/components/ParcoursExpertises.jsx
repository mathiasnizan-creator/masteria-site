import { useEffect, useRef, useState } from 'react'
import { useIsDesktop, useMediaQuery } from '../hooks/useMediaQuery'

/*
 * « Notre accompagnement · De l'audit à vos équipes augmentées par l'IA » (titre choisi par
 * Mathias ; la maquette disait « De la première question à l'usage quotidien ») : toutes
 * les expertises de Masteria en parcours de cinq étapes (handoff design du 03/10/2026),
 * adapté à la charte du site :
 * fond sombre des sections d'ancrage (#0A0F1E), bleu seul accent (l'ambre et le vert de
 * la maquette passent en bleu), Nunito et DM Sans (pas de police monospace pour les
 * étiquettes). Remplace sur la home le bandeau « Des équipes augmentées par l'IA ».
 * Épurée le 05/10/2026 à la demande de Mathias : plus de listes de liens sous les
 * étapes (« trop chargé »), ni de ligne « équipe », plus de bandeau « Point d'entrée
 * offert », et l'étape 04
 * ne cite plus « Claude · Copilot » (Masteria forme sur tous les outils).
 * Vignettes décoratives (aria-hidden). Depuis le 08/10/2026 (demande de Mathias : montrer
 * les étapes une par une), les cinq scènes jouent à tour de rôle : l'étape active anime sa
 * scène pendant DUREE_ETAPE, puis se fige dans son état final (styles de base, comme en
 * mouvement réduit) et s'atténue pendant que la suivante démarre ; une ligne de progression
 * segmentée relie 01 à 05. Pause au survol, clic ou bouton numéroté pour choisir une étape.
 * Sur mobile (une colonne), chaque carte s'allume en arrivant à l'écran. Mouvement réduit :
 * tout est fixe et rien n'est atténué. Le cycle ne démarre que quand la section est visible.
 * Intégrité : aucun gain présenté comme un résultat (le « +6 h/sem » de la maquette est
 * retiré, les heures de la cartographie sont un exemple) ; le diagnostic n'a pas de durée ;
 * la réponse d'IA illustrée cite « votre cabinet », pas Masteria.
 */

const BG = '#0A0F1E'
const TILE = '#111A2E'
const LINE_D = '#1E293B'
const LINE_D2 = '#334155'
const T2 = '#CBD5E1'
const T3 = '#94A3B8'
const INK = '#0A0A0A'
const MUTED = '#6B7280'
const BLUE = '#2563EB'
const BLUE_L = '#60A5FA'
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

const CSS = `
@keyframes pxIn{0%{opacity:0;transform:translateY(6px)}6%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:none}}
@keyframes pxGrow{0%{transform:scaleX(0)}14%,86%{transform:scaleX(1);opacity:1}94%,100%{transform:scaleX(1);opacity:0}}
@keyframes pxScan{0%{top:30px;opacity:0}5%{opacity:1}55%{top:150px;opacity:1}62%,100%{top:150px;opacity:0}}
@keyframes pxDrop{0%{transform:translateY(0);opacity:0}15%{opacity:1}75%{transform:translateY(30px);opacity:1}85%,100%{transform:translateY(30px);opacity:0}}
@keyframes pxPulse{0%,100%{box-shadow:0 0 0 0 rgba(37,99,235,.5)}50%{box-shadow:0 0 0 7px rgba(37,99,235,0)}}
@keyframes pxType{0%{width:0;animation-timing-function:steps(22,end)}35%,86%{width:100%;opacity:1}94%,100%{width:100%;opacity:0}}
@keyframes pxBlink{50%{opacity:0}}
@keyframes pxDraw{0%{stroke-dashoffset:260;opacity:1}45%,86%{stroke-dashoffset:0;opacity:1}94%,100%{stroke-dashoffset:0;opacity:0}}
@keyframes pxSettle{0%{opacity:0;transform:translate(-16px,16px)}12%,86%{opacity:1;transform:none}94%,100%{opacity:0}}
@keyframes pxSpin{to{transform:rotate(360deg)}}
@keyframes pxProgress{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.px-fige *{animation:none!important}
.px-pause *{animation-play-state:paused!important}
.px-num:focus-visible{outline:2px solid #60A5FA;outline-offset:3px}
.parcours:not(.parcours-actif) *{animation-play-state:paused!important}
@media (prefers-reduced-motion:reduce){.parcours *{animation:none!important}}
`

const anim = (nom, duree, delai = '0s', suite = 'infinite both') => ({ animation: `${nom} ${duree} ${delai} ${suite}` })

const vignette = { boxSizing: 'border-box', background: TILE, border: `1px solid ${LINE_D}`, borderRadius: 14, minHeight: 272, padding: 14, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 8 }
const etiquette = { fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: T3 }
const carteBlanche = { background: '#fff', color: INK, borderRadius: 9, boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }
const pastilleBleue = { background: '#DBEAFE', color: '#1D4ED8', borderRadius: 999, whiteSpace: 'nowrap' }

/* 01 · Comprendre : cartographie des flux, gisements chiffrés (valeurs d'exemple). */
function SceneComprendre() {
  const lignes = [['Devis', '5 h/sem', '.8s'], ['Emails clients', '3 h/sem', '1.5s'], ['Reporting', '4 h/sem', '2.2s'], ['Tri des CV', '2 h/sem', '2.9s']]
  return (
    <div style={vignette}>
      <span style={etiquette}>Cartographie des flux · exemple</span>
      {lignes.map(([nom, heures, delai]) => (
        <div key={nom} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', color: INK, borderRadius: 7, padding: '7px 9px', fontSize: 11, fontWeight: 500 }}>
          <span>{nom}</span>
          <span style={{ ...pastilleBleue, fontWeight: 700, padding: '1px 6px', fontSize: 10, ...anim('pxIn', '7s', delai) }}>{heures}</span>
        </div>
      ))}
      <span style={{ position: 'absolute', left: 10, right: 10, top: 30, height: 2, background: BLUE, boxShadow: '0 0 8px rgba(37,99,235,0.5)', borderRadius: 2, opacity: 0, ...anim('pxScan', '7s') }} />
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', ...anim('pxIn', '7s', '3.6s') }}>
        <span style={{ fontSize: 11, color: T2 }}>Gisements chiffrés</span>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff' }}>14 h/sem</span>
      </div>
    </div>
  )
}

/* 02 · Cadrer : matrice impact × faisabilité, puis feuille de route. */
function SceneCadrer() {
  const point = (couleur, pulse) => ({ width: 9, height: 9, borderRadius: 999, background: couleur, flex: 'none', ...(pulse ? { animation: pulse } : {}) })
  const pose = (left, top, delai, extra = {}) => ({ position: 'absolute', left, top, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4, ...anim('pxSettle', '7s', delai), ...extra })
  const caseBlanche = { background: '#fff', borderRadius: 7, position: 'relative' }
  return (
    <div style={vignette}>
      <span style={etiquette}>Impact × faisabilité</span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '62px 62px', gap: 3, fontSize: 10, color: INK }}>
        <div style={caseBlanche}><span style={pose(10, 24, '1.4s')}><span style={point(T3)} />Veille</span></div>
        <div style={{ ...caseBlanche, background: '#DBEAFE', padding: '5px 7px', fontWeight: 700, color: '#1D4ED8' }}>
          Priorité
          <span style={pose(9, 24, '.6s', { color: INK, fontWeight: 500 })}><span style={point(BLUE, 'pxPulse 1.4s infinite')} />Devis</span>
          <span style={pose(9, 42, '1s', { color: INK, fontWeight: 500 })}><span style={point(BLUE, 'pxPulse 1.4s .4s infinite')} />Tri CV</span>
        </div>
        <div style={caseBlanche}><span style={pose(10, 30, '2.2s')}><span style={point(T2)} />Contrats</span></div>
        <div style={caseBlanche}><span style={pose(10, 18, '1.8s')}><span style={point(T3)} />CR réunion</span></div>
      </div>
      <span style={{ ...etiquette, marginTop: 4 }}>Feuille de route</span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, fontSize: 10, color: T2 }}>
        {[['M1', BLUE, '2.6s'], ['M2', BLUE_L, '3.1s'], ['M3', '#475569', '3.6s']].map(([mois, couleur, delai]) => (
          <div key={mois} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ height: 6, borderRadius: 999, background: couleur, transformOrigin: 'left', ...anim('pxGrow', '7s', delai) }} />
            {mois}
          </div>
        ))}
      </div>
    </div>
  )
}

/* 03 · Construire : vos données alimentent un agent, qui rend un document prêt. */
function SceneConstruire() {
  return (
    <div style={{ ...vignette, gap: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {['CRM', 'ERP', 'Docs'].map(s => (
          <span key={s} style={{ fontSize: 10.5, fontWeight: 600, color: '#fff', border: `1px solid ${LINE_D2}`, borderRadius: 999, padding: '4px 0', textAlign: 'center' }}>{s}</span>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, height: 40 }}>
        {[[BLUE_L, '0s'], [BLUE, '.5s'], ['#fff', '1s']].map(([couleur, delai], i) => (
          <div key={i} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <span style={{ width: 1, height: '100%', background: LINE_D2 }} />
            <span style={{ position: 'absolute', top: 2, width: 6, height: 6, borderRadius: 999, background: couleur, ...anim('pxDrop', '1.6s', delai) }} />
          </div>
        ))}
      </div>
      <div style={{ ...carteBlanche, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 22, height: 22, boxSizing: 'border-box', borderRadius: 999, border: '2px solid #E5E7EB', borderTopColor: BLUE, flex: 'none', animation: 'pxSpin 1s linear infinite' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
          <span style={{ fontWeight: 700, fontSize: 13 }}>Agent devis</span>
          <span style={{ fontSize: 10, color: MUTED }}>Lit la demande, chiffre, rédige</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', height: 18 }}><span style={{ width: 1, height: '100%', background: LINE_D2 }} /></div>
      <div style={{ ...carteBlanche, boxShadow: 'none', padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 6, fontSize: 11, ...anim('pxIn', '7s', '2s') }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span style={{ fontWeight: 600 }}>Devis D-2026-114</span>
          <span style={{ fontSize: 10, color: MUTED }}>{'12 lignes · 18 400 € HT'}</span>
        </div>
        <span style={{ background: BLUE, color: '#fff', borderRadius: 999, padding: '2px 7px', fontWeight: 600, fontSize: 10, whiteSpace: 'nowrap' }}>✓ Prêt</span>
      </div>
    </div>
  )
}

/* 04 · Adopter : un atelier sur les fonctions avancées, projet, connecteurs, agent. */
function SceneAdopter() {
  return (
    <div style={{ ...vignette, gap: 10 }}>
      <span style={etiquette}>Atelier avancé</span>
      <div style={{ ...carteBlanche, padding: 9, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 600, ...anim('pxIn', '7s', '.2s') }}>
          <span style={{ width: 14, height: 14, borderRadius: 4, background: BG, color: '#fff', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>P</span>
          Projet · Équipe commerciale
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <span style={{ fontSize: 9, border: '1px solid #E5E7EB', borderRadius: 4, padding: '2px 5px', whiteSpace: 'nowrap', ...anim('pxIn', '7s', '.7s') }}>Tarifs_2026.xlsx</span>
          <span style={{ ...pastilleBleue, fontSize: 9, padding: '2px 6px', ...anim('pxIn', '7s', '1.1s') }}>Connecteur CRM</span>
          <span style={{ ...pastilleBleue, fontSize: 9, padding: '2px 6px', ...anim('pxIn', '7s', '1.4s') }}>Analyse de données</span>
        </div>
        <div style={{ background: '#F3F4F6', borderRadius: 6, padding: '5px 7px', display: 'flex', alignItems: 'center', fontFamily: MONO, fontSize: 9 }}>
          <span style={{ color: BLUE, fontWeight: 600, marginRight: 4 }}>/agent</span>
          <span style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', ...anim('pxType', '7s', '1.8s') }}>{'relance clients > 15 j'}</span>
          <span style={{ width: 1, height: 11, background: INK, marginLeft: 1, animation: 'pxBlink .8s steps(1) infinite' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, fontSize: 9, color: '#4B5563' }}>
          {[['Lecture CRM · 42 comptes', '3.4s'], ['Croisement tarifs', '3.8s'], ['8 brouillons dans Outlook', '4.2s', true]].map(([texte, delai, fort]) => (
            <span key={texte} style={{ display: 'flex', justifyContent: 'space-between', fontWeight: fort ? 600 : 400, color: fort ? INK : undefined, ...anim('pxIn', '7s', delai) }}>
              <span>{texte}</span><span style={{ color: BLUE, fontWeight: 700 }}>✓</span>
            </span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {[['AR', '#fff', INK, '3.8s'], ['JM', BLUE, '#fff', '4s'], ['NP', BLUE_L, INK, '4.2s'], ['+9', LINE_D2, '#fff', '4.4s']].map(([initiales, fond, texte, delai], i) => (
            <span key={initiales} style={{ width: 26, height: 26, boxSizing: 'border-box', borderRadius: 999, background: fond, color: texte, fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${TILE}`, marginLeft: i ? -7 : 0, ...anim('pxIn', '7s', delai) }}>{initiales}</span>
          ))}
        </div>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', border: `1px solid ${LINE_D2}`, borderRadius: 999, padding: '3px 8px' }}>Qualiopi</span>
      </div>
      <div style={{ height: 6, flex: 'none', borderRadius: 999, background: LINE_D, overflow: 'hidden' }}>
        <span style={{ display: 'block', height: '100%', width: '100%', background: BLUE, transformOrigin: 'left', ...anim('pxGrow', '7s', '3.9s') }} />
      </div>
    </div>
  )
}

/* 05 · Piloter & rayonner : indicateurs suivis, puis visibilité dans les réponses d'IA. */
function ScenePiloter() {
  const courbe = 'M0,74 C40,73 55,66 72,56 C92,44 108,34 132,26 C156,18 176,14 196,12'
  return (
    <div style={vignette}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={etiquette}>Indicateurs suivis</span>
        <span style={{ fontSize: 10, color: T2, ...anim('pxIn', '7s', '2.6s') }}>Bilan à J+90</span>
      </div>
      <div style={{ width: '100%', maxWidth: 200, alignSelf: 'center' }}>
      <svg viewBox="0 0 200 84" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
        <line x1="0" y1="21" x2="200" y2="21" stroke={LINE_D2} strokeWidth="1" strokeDasharray="2 4" />
        <line x1="0" y1="47" x2="200" y2="47" stroke={LINE_D2} strokeWidth="1" strokeDasharray="2 4" />
        <line x1="0" y1="74" x2="200" y2="74" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" />
        <text x="0" y="70" fill={T3} fontSize="8" fontFamily="DM Sans, sans-serif">Point de départ</text>
        <path d={`${courbe} L196,84 L0,84 Z`} fill={BLUE_L} fillOpacity=".14" style={anim('pxIn', '7s', '1.6s')} />
        <path d={courbe} fill="none" stroke={BLUE_L} strokeWidth="2.5" strokeLinecap="round" pathLength="260" strokeDasharray="260" style={anim('pxDraw', '7s', '.4s')} />
        <g style={anim('pxIn', '7s', '1.2s')}><circle cx="72" cy="56" r="3.5" fill={TILE} stroke={BLUE_L} strokeWidth="2" /></g>
        <g style={anim('pxIn', '7s', '2.4s')}><circle cx="196" cy="12" r="9" fill={BLUE_L} fillOpacity=".2" /><circle cx="196" cy="12" r="4" fill={BLUE_L} /></g>
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: T3, marginTop: 6 }}><span>J0</span><span>J+30</span><span>J+90</span></div>
      </div>
      <div style={{ alignSelf: 'flex-end', background: LINE_D, color: '#fff', borderRadius: '8px 8px 2px 8px', padding: '5px 9px', fontSize: 10, marginTop: 2, ...anim('pxIn', '7s', '3.2s') }}>
        Quel expert-comptable à Lyon&nbsp;?
      </div>
      <div style={{ background: '#fff', color: INK, borderRadius: '8px 8px 8px 2px', padding: '8px 9px', fontSize: 10, lineHeight: 1.4, display: 'flex', flexDirection: 'column', gap: 5, ...anim('pxIn', '7s', '3.9s') }}>
        <span><strong>Votre cabinet</strong> est cité dans la réponse, votre site en source.</span>
        <span style={{ ...pastilleBleue, alignSelf: 'flex-start', fontSize: 9, padding: '2px 7px' }}>votre-site.fr</span>
      </div>
    </div>
  )
}

const ETAPES = [
  {
    num: '01', titre: 'Comprendre', desc: "Savoir où l'IA vous fera gagner du temps.", Scene: SceneComprendre,
  },
  {
    num: '02', titre: 'Cadrer', desc: 'Prioriser, sécuriser, décider.', Scene: SceneCadrer,
  },
  {
    num: '03', titre: 'Construire', desc: 'Des outils branchés sur vos données.', Scene: SceneConstruire,
  },
  {
    num: '04', titre: 'Adopter', desc: "Former ceux qui s'en servent.", Scene: SceneAdopter,
  },
  {
    num: '05', titre: 'Piloter & rayonner', desc: 'Durer, mesurer, être visible.', Scene: ScenePiloter,
  },
]

// Durée d'une étape (5 s, demande de Mathias du 08/10) : toutes les scènes ont fini
// d'apparaître vers 4,9 s et rien ne s'efface avant 6,02 s (86 % de leur boucle de 7 s).
const DUREE_ETAPE = 5000

export default function ParcoursExpertises() {
  const section = useRef(null)
  const cartes = useRef([])
  const isDesktop = useIsDesktop()
  const isWide = useMediaQuery('(min-width: 1200px)')
  const isTablet = useMediaQuery('(min-width: 640px)')
  const reduit = useMediaQuery('(prefers-reduced-motion: reduce)')
  // Cinq colonnes à partir de 1200 px, puis 3 + 2, 2 colonnes, une seule sur mobile.
  const colonnes = isWide ? 5 : isDesktop ? 3 : isTablet ? 2 : 1
  const mobile = colonnes === 1

  const [actif, setActif] = useState(0)
  const [tour, setTour] = useState(0) // change à chaque départ d'étape : relance la scène et la progression
  const [visible, setVisible] = useState(false)
  const [pause, setPause] = useState(false)
  const choisir = i => { setActif(i); setTour(n => n + 1) }

  // Les animations ne démarrent qu'une fois la section visible (classe parcours-actif).
  useEffect(() => {
    const el = section.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('parcours-actif')
      return undefined
    }
    const io = new IntersectionObserver(([entree]) => {
      if (entree.isIntersecting) {
        el.classList.add('parcours-actif')
        setVisible(true)
        io.disconnect()
      }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Cycle automatique (deux colonnes et plus) : une étape après l'autre, puis on reprend.
  useEffect(() => {
    if (!visible || pause || reduit || mobile) return undefined
    const t = setTimeout(() => { setActif(a => (a + 1) % ETAPES.length); setTour(n => n + 1) }, DUREE_ETAPE)
    return () => clearTimeout(t)
  }, [actif, tour, visible, pause, reduit, mobile])

  // Mobile : la carte qui arrive à l'écran devient l'étape active.
  useEffect(() => {
    if (!mobile || reduit || typeof IntersectionObserver === 'undefined') return undefined
    const io = new IntersectionObserver(entrees => {
      entrees.forEach(e => { if (e.isIntersecting) { setActif(Number(e.target.dataset.etape)); setTour(n => n + 1) } })
    }, { threshold: 0.6 })
    cartes.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [mobile, reduit])

  return (
    <section ref={section} id="expertises" className="parcours" aria-labelledby="parcours-titre" style={{ background: BG, color: '#fff', padding: 'clamp(64px, 9vw, 112px) clamp(18px, 4vw, 32px)', scrollMarginTop: 96 }}>
      <style>{CSS}</style>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 760 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: BLUE_L }}>
            <span aria-hidden="true" style={{ width: 22, height: 2, background: BLUE_L }} />
            Notre accompagnement
          </div>
          <h2 id="parcours-titre" style={{ margin: 0, fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(28px, 3.6vw, 44px)', letterSpacing: '-0.025em', lineHeight: 1.12, color: '#fff' }}>
            De l'audit à vos équipes <span style={{ color: BLUE_L }}>augmentées par l'IA</span>
          </h2>
          <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: T2 }}>
            Entrez à l'étape où vous en êtes. Chaque étape s'appuie sur la précédente, avec la même équipe du début à la fin.
          </p>
        </div>

        <ol
          className={pause ? 'px-pause' : undefined}
          onMouseEnter={() => { if (!mobile) setPause(true) }}
          onMouseLeave={() => { if (!mobile && pause) { setPause(false); setTour(n => n + 1) } }}
          style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: `repeat(${colonnes}, minmax(0, 1fr))`, gap: '36px 16px' }}
        >
          {ETAPES.map(({ num, titre, desc, Scene }, i) => {
            const enCours = i === actif
            const remplie = reduit || i < actif || (mobile && enCours)
            return (
              <li
                key={num}
                ref={el => { cartes.current[i] = el }}
                data-etape={i}
                aria-current={!reduit && enCours ? 'step' : undefined}
                onClick={() => choisir(i)}
                style={{ display: 'flex', flexDirection: 'column', gap: 20, cursor: 'pointer', opacity: reduit || enCours ? 1 : 0.4, transition: 'opacity .45s ease' }}
              >
                <div aria-hidden="true" className={enCours && !reduit ? undefined : 'px-fige'}>
                  <Scene key={enCours ? `a${tour}` : 'fige'} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span aria-hidden="true" style={{ display: 'block', height: 2, borderRadius: 2, background: LINE_D2, overflow: 'hidden', marginBottom: 8 }}>
                    <span
                      key={enCours ? `p${tour}` : 'p'}
                      style={{
                        display: 'block', height: '100%', background: BLUE_L, transformOrigin: 'left',
                        transform: remplie ? 'scaleX(1)' : 'scaleX(0)',
                        ...(enCours && !remplie && visible ? { animation: `pxProgress ${DUREE_ETAPE}ms linear forwards` } : {}),
                      }}
                    />
                  </span>
                  <button
                    type="button"
                    className="px-num"
                    onClick={e => { e.stopPropagation(); choisir(i) }}
                    aria-label={`Étape ${num} : ${titre}`}
                    style={{ alignSelf: 'flex-start', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: BLUE_L }}
                  >
                    {num}
                  </button>
                  <h3 style={{ margin: 0, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff' }}>{titre}</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: T2, minHeight: colonnes > 1 ? 42 : undefined }}>{desc}</p>
                </div>
              </li>
            )
          })}
        </ol>

      </div>
    </section>
  )
}
