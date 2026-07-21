import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowRight, ArrowLeft, ArrowUpRight, Newspaper, Clock, Link2, Calendar,
  Flame, Landmark, Globe, Compass, FlaskConical, Zap, PenLine, ExternalLink,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'
import VeilleNav from '../components/VeilleNav'

/**
 * VeilleEditionPage — une édition quotidienne de la Veille IA.
 *
 * Les données viennent de /veille-data/<date>.json, hors du bundle : une
 * publication par jour ouvré changerait sinon le hash des assets et
 * invaliderait les pages déjà prérendues du site.
 *
 * Le titre et le <h1> sont dérivés de la date de l'URL avant l'arrivée des
 * données. Le prérendu contrôle la présence d'un <title> et d'un <h1> : sans
 * ce repli, une réponse lente ferait échouer la route.
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

const SITE = 'https://www.master-ia.fr'
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
  'août', 'septembre', 'octobre', 'novembre', 'décembre']

// Ordre de rendu et pictogrammes. La donnée ne pilote jamais l'ordre : une
// erreur de publish.py ne peut pas brouiller la page. La différenciation des
// zones passe par le pictogramme, jamais par la teinte, l'accent étant unique.
const ZONES = {
  une: { libelle: "En tête d'affiche", icon: Flame, rang: 0 },
  europe: { libelle: 'Europe et France', icon: Landmark, rang: 1 },
  international: { libelle: 'International', icon: Globe, rang: 2 },
  chine: { libelle: 'Chine et Asie', icon: Compass, rang: 3 },
  recherche: { libelle: 'Recherche et publications', icon: FlaskConical, rang: 4 },
  bref: { libelle: 'En bref', icon: Zap, rang: 5 },
  autre: { libelle: 'Autre', icon: Newspaper, rang: 6 },
}
const zoneIcon = z => (ZONES[z] || ZONES.autre).icon
const ordonner = sections => [...sections].sort(
  (a, b) => (ZONES[a.zone] || ZONES.autre).rang - (ZONES[b.zone] || ZONES.autre).rang
)

function Kicker({ children }) { return <div style={kickerStyle}>{children}</div> }

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

function BlocSources({ sources, variante = 'item' }) {
  if (!sources || !sources.length) return null
  const grand = variante === 'une'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: grand ? 22 : 16, paddingTop: grand ? 18 : 14, borderTop: '1px solid #E5E7EB' }}>
      <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#6B7280' }}>
        {sources.length > 1 ? 'Sources' : 'Source'}
      </span>
      {sources.map(s => (
        <a key={s.url} className="veille-source" href={s.url} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: grand ? 13 : 12.5, fontWeight: 600, color: '#374151', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 99, padding: grand ? '6px 13px' : '5px 11px', textDecoration: 'none' }}>
          {s.nom}
          <ExternalLink size={12} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

// Marqueur de reprise dans l'analyse. Libellé seul : le filet 3 px d'accent
// est déjà employé par l'accroche du hero, le bloc réponse et le bord de la
// carte de une ; une occurrence de plus en ferait un tic.
function MarqueurAnalyse() {
  return (
    <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, display: 'block', marginBottom: 6 }}>
      Repris dans l'analyse
    </span>
  )
}

function dateLisible(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '')
  if (!m) return ''
  return `${Number(m[3])} ${MOIS[Number(m[2]) - 1]} ${m[1]}`
}

function texteNu(html) {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function premiersMots(html, n) {
  const mots = texteNu(html).split(' ')
  return mots.slice(0, n).join(' ') + (mots.length > n ? '…' : '')
}

// Phrase de répartition, générée depuis zones[]. Accord au singulier et au
// pluriel, zones absentes omises.
function phraseRepartition(ed) {
  const jourMois = ed.dateAffichee.replace(/\s\d{4}$/, '')
  const seg = z => {
    const n = z.nb
    switch (z.cle) {
      case 'europe': return `${n} pour l'Europe et la France`
      case 'international': return `${n} pour l'international`
      case 'chine': return `${n} pour la Chine et l'Asie`
      case 'recherche': return `${n} publication${n > 1 ? 's' : ''} de recherche`
      case 'bref': return `${n} brève${n > 1 ? 's' : ''}`
      default: return `${n} autre${n > 1 ? 's' : ''}`
    }
  }
  const parts = (ed.zones || []).map(seg)
  const liste = parts.length > 1
    ? `${parts.slice(0, -1).join(', ')} et ${parts[parts.length - 1]}`
    : (parts[0] || '')
  const s1 = ed.nbItems > 1 ? 's' : ''
  const s2 = ed.nbSources > 1 ? 's' : ''
  return `L'édition du ${jourMois} retient ${ed.nbItems} actualité${s1} issue${s1} de ${ed.nbSources} source${s2}${liste ? ` : ${liste}` : ''}.`
}

// Prochain jour ouvré, calculé côté client. La phrase n'est rendue que sur
// l'édition la plus récente : sur une archive elle serait fausse.
function prochainJourOuvre(iso) {
  const d = new Date(iso + 'T12:00:00')
  do { d.setDate(d.getDate() + 1) } while (d.getDay() === 0 || d.getDay() === 6)
  const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  return `${jours[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]}`
}

export default function VeilleEditionPage() {
  const { date } = useParams()
  const isDesktop = useIsDesktop()
  const [edition, setEdition] = useState(null)
  const [etat, setEtat] = useState('chargement')

  useEffect(() => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) { setEtat('introuvable'); return }
    let actif = true
    setEtat('chargement'); setEdition(null)
    fetch(`/veille-data/${date}.json`)
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then(d => {
        if (!actif) return
        if (!d || !d.une) throw new Error('payload incomplet')
        setEdition(d); setEtat('ok')
      })
      .catch(() => actif && setEtat('introuvable'))
    return () => { actif = false }
  }, [date])

  // Rejoue le défilement vers l'ancre une fois les données arrivées. Au moment
  // du changement de route, la cible n'existe pas encore dans le DOM (elle
  // vient du fetch), donc le navigateur ne défile pas. Couvre les liens
  // profonds du fil de /veille-ia et de la recherche des archives, ainsi que le
  // chargement direct d'une URL à ancre. scrollIntoView respecte les
  // scrollMarginTop posés sur les cibles.
  useEffect(() => {
    if (etat !== 'ok') return
    const id = decodeURIComponent((window.location.hash || '').slice(1))
    if (!id) return
    // Appel direct : l'effet s'exécute une fois le DOM installé, et
    // requestAnimationFrame peut ne jamais se déclencher dans une vue
    // considérée comme masquée. Instantané et non lisse : on arrive d'une
    // autre page, animer un défilement de dix mille pixels serait pénible.
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [etat])

  const lisible = dateLisible(date)
  const ok = etat === 'ok' && edition
  const sections = ok ? ordonner(edition.sections || []) : []
  const detaillees = sections.filter(s => s.format === 'detaille')
  const recherche = sections.filter(s => s.format === 'recherche')
  const breves = sections.filter(s => s.format === 'bref')
  const analyse = ok ? edition.analyse : null
  const cites = (analyse && analyse.itemsCites) || []

  // Objet vide et non gridTemplateColumns 1fr : les enfants restent en flux
  // normal, ce qui garantit un rendu correct si le hook renvoie false à la
  // première frame. Au prérendu le viewport fait 1280 px, donc il vaut true.
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const toutesSources = ok
    ? [...(edition.une ? edition.une.sources : []), ...sections.flatMap(s => s.items.flatMap(i => i.sources))]
    : []
  const tousItems = ok
    ? [...(edition.une ? [edition.une] : []), ...sections.flatMap(s => s.items)]
    : []

  const newsArticleJsonLd = ok ? {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${SITE}/veille-ia/${date}#article`,
    headline: edition.titreEditorial,
    alternativeHeadline: edition.titre,
    description: edition.chapeau,
    datePublished: edition.publieLe || `${date}T08:30:00+02:00`,
    dateModified: edition.publieLe || `${date}T08:30:00+02:00`,
    inLanguage: 'fr-FR',
    isAccessibleForFree: true,
    wordCount: edition.nbSignes ? Math.round(edition.nbSignes / 6) : undefined,
    timeRequired: `PT${edition.tempsLecture}M`,
    // L'analyse engage la rédaction, la direction éditoriale reste nominative.
    author: { '@id': `${SITE}/#organization` },
    editor: { '@id': `${SITE}/#mathias-nizan` },
    publisher: { '@id': `${SITE}/#organization` },
    mainEntityOfPage: { '@id': `${SITE}/veille-ia/${date}#webpage` },
    isPartOf: { '@type': 'CollectionPage', '@id': `${SITE}/veille-ia#collection`, name: 'Veille IA Masteria', url: `${SITE}/veille-ia` },
    articleSection: (edition.zones || []).map(z => z.libelle),
    image: edition.ogImage ? [`${SITE}${edition.ogImage}`] : undefined,
    speakable: {
      '@type': 'SpeakableSpecification',
      // La thèse est nullable : ne déclarer que les sélecteurs réellement rendus.
      cssSelector: ['.veille-chapeau', ...(analyse && analyse.these ? ['.veille-these'] : [])],
    },
    citation: toutesSources.map(s => ({ '@type': 'WebPage', name: s.nom, url: s.url })),
    hasPart: tousItems.filter(i => i.titre).map(i => ({
      '@type': 'NewsArticle', headline: i.titre, url: `${SITE}/veille-ia/${date}#${i.id}`,
    })),
  } : undefined

  const ancreCTA = analyse ? '#analyse' : '#dossier'
  const libelleCTA = analyse ? "Lire l'analyse Masteria" : 'Lire les actualités du jour'

  return (
    <div data-veille-pret={etat === 'chargement' ? '0' : '1'} data-veille-etat={etat}>
      <SEOHead
        title={ok
          ? `Veille IA du ${edition.dateAffichee} : ${edition.titreEditorial} | Masteria`.slice(0, 95)
          : `Veille IA du ${lisible} | Masteria`}
        description={ok ? edition.chapeau.slice(0, 158)
          : `L'actualité de l'intelligence artificielle du ${lisible}, commentée et analysée par Masteria.`}
        slug={`veille-ia/${date}`}
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Veille IA', slug: 'veille-ia' },
          { name: lisible || 'Édition', slug: `veille-ia/${date}` },
        ]}
        datePublished={date}
        dateModified={date}
        noindex={etat === 'introuvable'}
        articleMeta={ok ? { publishedTime: edition.publieLe || `${date}T08:30:00+02:00`, author: "L'équipe éditoriale Masteria", section: 'Veille IA' } : undefined}
        ogImage={ok && edition.ogImage ? `${SITE}${edition.ogImage}` : undefined}
        extraJsonLd={newsArticleJsonLd}
      />

      <VeilleNav active={null} />

      {/* ── 1. HERO SOMBRE ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/veille-ia" style={{ color: '#94A3B8' }}>Veille IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>{lisible}</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              {ok ? `Édition du ${edition.dateLongue}` : `Édition du ${lisible}`}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            {ok ? (
              <>
                {edition.titreEditorial}<br />
                <span style={{ color: '#60A5FA', fontWeight: 800 }}>Veille IA du {edition.dateLongue}</span>
              </>
            ) : `Veille IA du ${lisible}`}
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par l'équipe éditoriale Masteria, sous la direction de <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · Publiée le <time dateTime={date}>{lisible}</time>{ok && edition.publieLeAffiche ? ` à ${edition.publieLeAffiche}` : ''}
          </p>

          {ok && (
            <p className="veille-chapeau" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
              {edition.chapeau}
            </p>
          )}

          {ok && (
            <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
              {edition.nbArticlesCollectes
                ? `${edition.nbItems} actualités retenues sur ${edition.nbArticlesCollectes} collectées ce matin, issues de ${edition.nbFluxConsultes} flux. ${edition.nbSources} sources citées, environ ${edition.tempsLecture} minutes de lecture.`
                : `${edition.nbItems} actualités retenues ce matin. ${edition.nbSources} sources citées, environ ${edition.tempsLecture} minutes de lecture.`}
            </p>
          )}

          {ok && (
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
              <a href={ancreCTA} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                {libelleCTA}
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </a>
              {edition.precedente ? (
                <Link to={`/veille-ia/${edition.precedente.date}`} style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
                  Édition du {edition.precedente.dateLongue.replace(/^\w+\s/, '').replace(/\s\d{4}$/, '')}
                </Link>
              ) : (
                <Link to="/veille-ia" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
                  Toutes les éditions
                </Link>
              )}
            </div>
          )}

          {ok && (
            <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
              {[
                { icon: Newspaper, label: `${edition.nbItems} actualités` },
                { icon: Link2, label: `${edition.nbSources} sources` },
                { icon: Clock, label: `${edition.tempsLecture} min de lecture` },
              ].map(({ icon: Icon, label }) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                  <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          )}

          {/* Sommaire : navigation réelle, dans le DOM au prérendu donc citable */}
          {ok && (
            <nav aria-label="Sommaire de l'édition" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Au sommaire</div>
              {[
                ...(edition.une ? [{ id: 'une', libelle: 'À la une', zone: 'une', droite: edition.une.titre.slice(0, 42) + (edition.une.titre.length > 42 ? '…' : '') }] : []),
                ...sections.map(s => ({ id: s.id, libelle: s.titre, zone: s.zone, droite: `${s.items.length} actualité${s.items.length > 1 ? 's' : ''}` })),
                ...(analyse ? [{ id: 'analyse', libelle: "L'analyse Masteria", zone: 'analyse', droite: 'Signée' }] : []),
              ].map((row, i) => {
                const Icon = row.zone === 'analyse' ? PenLine : zoneIcon(row.zone)
                return (
                  <div key={row.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '11px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <a href={`#${row.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                      <span aria-hidden="true" style={{ width: 24, height: 24, borderRadius: 7, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={13} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
                      </span>
                      <span style={{ fontSize: 14.5, fontWeight: row.zone === 'analyse' ? 700 : 600, color: row.zone === 'analyse' ? '#60A5FA' : '#E2E8F0' }}>{row.libelle}</span>
                    </a>
                    <span style={{ fontSize: 13, color: '#94A3B8' }}>{row.droite}</span>
                  </div>
                )
              })}
            </nav>
          )}
        </div>
      </section>

      {/* ── Édition introuvable ── */}
      {etat === 'introuvable' && (
        <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
          <div style={wrap}>
            <div style={{ ...cardStyle, padding: 32, maxWidth: 720 }}>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 26px)' }}>Cette édition n'est pas disponible</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 18px' }}>
                Elle a peut-être été retirée, ou l'adresse comporte une erreur.
              </p>
              <Link to="/veille-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700 }}>
                Voir les éditions publiées
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── 2. À LA UNE (famille F-UNE, une seule occurrence) ── */}
      {ok && edition.une && (
        <section style={{ padding: sectionPad, background: '#fff' }}>
          <div style={wrap}>
            <Kicker>À la une</Kicker>
            <article id="une" className="u-lift" style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', borderTop: `3px solid ${c}`, scrollMarginTop: 140 }}>
              {cites.includes(1) && <MarqueurAnalyse />}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 14 }}>
                {(() => { const I = zoneIcon(edition.une.zone); return <I size={13} strokeWidth={2.2} aria-hidden="true" /> })()}
                {edition.une.zoneLibelle}
              </div>
              <h2 id={edition.une.id} style={{ ...h2Style, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 14, scrollMarginTop: 140 }}>{edition.une.titre}</h2>
              <div className="veille-texte veille-texte--une" style={{ maxWidth: 780 }} dangerouslySetInnerHTML={{ __html: edition.une.texteHtml }} />
              <BlocSources sources={edition.une.sources} variante="une" />
            </article>
          </div>
        </section>
      )}

      {/* ── 3. LE DÉTAIL DU JOUR (patron éditorial + famille F-ITEM) ── */}
      {ok && detaillees.length > 0 && (
        <section id="dossier" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 140 }}>
          <div style={{ ...wrap, ...editorialGrid }}>
            <div style={editorialAside}>
              <Kicker>Le détail du jour</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Les actualités du {edition.dateAffichee.replace(/\s\d{4}$/, '')}
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>{phraseRepartition(edition)}</strong>
              </p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 18px' }}>
                Chaque actualité porte sa ou ses sources. Les liens ouvrent la publication d'origine.
              </p>
              <nav aria-label="Sections de l'édition">
                {sections.map((s, i) => {
                  const Icon = zoneIcon(s.zone)
                  return (
                    <a key={s.id} href={`#${s.id}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', textDecoration: 'none', fontSize: 14, color: '#374151' }}>
                      <Icon size={14} strokeWidth={2.2} style={{ color: '#6B7280' }} aria-hidden="true" />
                      {s.titre}
                      <span style={{ marginLeft: 'auto', fontSize: 13, color: '#6B7280' }}>{s.items.length}</span>
                    </a>
                  )
                })}
              </nav>
            </div>

            <div>
              {detaillees.map(s => {
                const Icon = zoneIcon(s.zone)
                return (
                  <section key={s.id} id={s.id} style={{ marginBottom: 44, scrollMarginTop: 140 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 4 }}>
                      <span aria-hidden="true" style={{ width: 30, height: 30, borderRadius: 8, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={16} strokeWidth={2.2} style={{ color: c }} />
                      </span>
                      <h2 style={{ ...h2Style, fontSize: 'clamp(19px, 2.4vw, 24px)', margin: 0 }}>{s.titre}</h2>
                    </div>
                    <p style={{ fontSize: 13.5, color: '#6B7280', margin: '0 0 8px 41px' }}>
                      {s.items.length} actualité{s.items.length > 1 ? 's' : ''}
                    </p>
                    {s.items.map((it, j) => (
                      <article key={it.id} id={it.id} style={{ padding: '26px 0', borderTop: j === 0 ? 'none' : '1px solid #E5E7EB', scrollMarginTop: 140 }}>
                        {cites.includes(it.rang) && <MarqueurAnalyse />}
                        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#0A0A0A', letterSpacing: '-0.01em', margin: '0 0 10px', maxWidth: 720 }}>
                          {it.titre || premiersMots(it.texteHtml, 12)}
                        </h3>
                        <div className="veille-texte" style={{ maxWidth: 720 }} dangerouslySetInnerHTML={{ __html: it.texteHtml }} />
                        <BlocSources sources={it.sources} />
                      </article>
                    ))}
                  </section>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. AUSSI DANS L'ÉDITION (familles F-RECHERCHE et F-BREF) ── */}
      {ok && (recherche.length > 0 || breves.length > 0) && (
        <section style={{ padding: sectionPad, background: '#fff' }}>
          <div style={{
            ...wrap,
            ...(isDesktop && recherche.length > 0 && breves.length > 0
              ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 56px)', alignItems: 'start' }
              : {}),
          }}>
            {recherche.map(s => (
              <div key={s.id}>
                <Kicker>Recherche</Kicker>
                <h2 id={s.id} style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 26px)', marginBottom: 12, scrollMarginTop: 140 }}>{s.titre}</h2>
                <span style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
                  Pour les équipes techniques
                </span>
                {s.items.map(it => (
                  <div key={it.id} className="u-lift" style={{ ...cardStyle, padding: 24, marginBottom: 16 }}>
                    <div style={{ marginBottom: 14 }}><IconTile icon={FlaskConical} /></div>
                    <h3 id={it.id} style={{ ...h3Style, fontSize: 16, marginBottom: 8, scrollMarginTop: 140 }}>
                      {it.titre || premiersMots(it.texteHtml, 12)}
                    </h3>
                    <div className="veille-texte" dangerouslySetInnerHTML={{ __html: it.texteHtml }} />
                    <BlocSources sources={it.sources} />
                  </div>
                ))}
              </div>
            ))}

            {breves.map(s => (
              <div key={s.id}>
                <Kicker>Le reste de l'actualité</Kicker>
                <h2 id={s.id} style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 26px)', scrollMarginTop: 140 }}>{s.titre}</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 640 }}>
                  {s.items.map((it, j) => (
                    <li key={it.id} id={it.id} style={{ display: 'flex', gap: 16, padding: '16px 0', borderTop: j === 0 ? 'none' : '1px solid #E5E7EB', scrollMarginTop: 140 }}>
                      <div aria-hidden="true" style={{ width: 3, borderRadius: 99, background: c, flexShrink: 0, alignSelf: 'stretch' }} />
                      <div style={{ minWidth: 0 }}>
                        {it.titre && <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 6 }}>{it.titre}</h3>}
                        <div className="veille-texte" dangerouslySetInnerHTML={{ __html: it.texteHtml }} />
                        <BlocSources sources={it.sources} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 5. L'ANALYSE MASTERIA (ancre sombre unique) ── */}
      {ok && analyse && (
        <section id="analyse" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

          <div style={{ ...wrap, position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>L'analyse Masteria</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>{analyse.titre}</h2>

            {analyse.these && (
              <p className="veille-these" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
                <strong style={{ color: '#fff' }}>{analyse.these}</strong>
              </p>
            )}

            <div className="veille-analyse" style={{ maxWidth: 760 }} dangerouslySetInnerHTML={{ __html: analyse.html }} />

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760, marginTop: 36, display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <img src="/assets/mathias-nizan@240.jpg" width={56} height={56} loading="lazy" alt=""
                style={{ borderRadius: 99, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16, color: '#F8FAFC' }}>{analyse.auteur}</div>
                <div style={{ fontSize: 13.5, color: '#94A3B8' }}>{analyse.auteurRole}</div>
                <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.7, margin: '8px 0 10px' }}>
                  Il forme les équipes dirigeantes et techniques à l'IA générative depuis 2022.
                </p>
                <Link to="/centre-formation-ia-entreprise" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700, color: '#93C5FD', textDecoration: 'none' }}>
                  Son parcours
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {cites.length > 0 && (
              <div style={{ marginTop: 32, maxWidth: 760 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 6 }}>
                  Les actualités citées
                </div>
                {tousItems.filter(it => cites.includes(it.rang)).map((it, i) => (
                  <a key={it.id} href={`#${it.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B', textDecoration: 'none', fontSize: 14.5, color: '#E2E8F0' }}>
                    <ArrowUpRight size={14} strokeWidth={2.4} style={{ color: '#60A5FA', flexShrink: 0 }} aria-hidden="true" />
                    {it.titre || premiersMots(it.texteHtml, 10)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 6. MÉTHODE ET SOURCES ── */}
      {ok && (
        <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <Kicker>Méthode</Kicker>
            <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 26px)' }}>Comment cette édition a été produite</h2>
            <p style={{ ...answerStyle, background: '#fff' }}>
              <strong>
                {edition.nbArticlesCollectes
                  ? `${edition.nbFluxConsultes} flux ont été dépouillés le matin du ${edition.dateAffichee.replace(/\s\d{4}$/, '')}, ${edition.nbArticlesCollectes} actualités collectées, ${edition.nbItems} retenues, chacune reliée à sa source. L'analyse est écrite par l'équipe éditoriale et publiée avec l'édition.`
                  : `${edition.nbItems} actualités ont été retenues le ${edition.dateAffichee.replace(/\s\d{4}$/, '')}, chacune reliée à sa source. L'analyse est écrite par l'équipe éditoriale et publiée avec l'édition.`}
              </strong>
            </p>
            {edition.sourcesDuJour && edition.sourcesDuJour.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#6B7280' }}>
                  Sources du jour
                </span>
                {edition.sourcesDuJour.map(nom => (
                  <span key={nom} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 99, padding: '6px 13px', fontSize: 13, fontWeight: 600, color: '#374151' }}>
                    {nom}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 7. NAVIGUER ENTRE LES ÉDITIONS (famille F7) ── */}
      {ok && (
        <section style={{ padding: sectionPad, background: '#fff' }}>
          <div style={wrap}>
            <Kicker>Poursuivre la lecture</Kicker>
            <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)' }}>
              {edition.precedente || edition.suivante ? 'Les éditions voisines' : 'La suite de la rubrique'}
            </h2>
            {/* Grille rendue seulement s'il existe une voisine : une carte
                unique « Toutes les éditions » étirée sur toute la largeur
                annoncerait un voisinage qui n'existe pas encore. */}
            {(edition.precedente || edition.suivante) && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
              {[
                edition.precedente && { v: edition.precedente, tag: 'Édition précédente', Icon: ArrowLeft },
                edition.suivante && { v: edition.suivante, tag: 'Édition suivante', Icon: ArrowRight },
              ].filter(Boolean).map(({ v, tag, Icon }) => (
                <Link key={v.date} to={`/veille-ia/${v.date}`} className="u-lift"
                  style={{ ...cardStyle, padding: 26, textDecoration: 'none', display: 'block', height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    <Icon size={14} strokeWidth={2.4} aria-hidden="true" />
                    {tag}
                  </span>
                  <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 6 }}>{v.titreEditorial}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', margin: 0 }}>{v.dateLongue} · {v.nbItems} actualités</p>
                </Link>
              ))}
            </div>
            )}
            <div style={{ textAlign: 'center', marginTop: 28 }}>
              <Link to="/veille-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700, textDecoration: 'none' }}>
                Toutes les éditions de la veille
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              {!edition.suivante && (
                <p style={{ fontSize: 13.5, color: '#6B7280', marginTop: 16 }}>
                  Prochaine édition le {prochainJourOuvre(edition.date)} au matin.
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. CTA FINALE ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              Ce que cette actualité change pour vos équipes
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Masteria forme dirigeants, chefs de projet, développeurs et juristes sur l'IA générative, et développe les solutions qui vont avec.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Parler de votre projet
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Organisme certifié Qualiopi · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
