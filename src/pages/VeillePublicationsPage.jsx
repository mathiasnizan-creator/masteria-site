import { useState, useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Search, X, Library, Rss,
  Flame, Landmark, Globe, Compass, FlaskConical, Zap, Newspaper,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'
import VeilleNav from '../components/VeilleNav'
import VeilleLangSwitch from '../components/VeilleLangSwitch'
import { strings, baseVeille, baseData, alternatesVeille, moisVeille, inLanguageVeille } from '../data/veille-i18n'

/**
 * VeillePublicationsPage — toutes les publications de la Veille IA, avec recherche.
 *
 * Rôle SEO : la liste complète est rendue par défaut, donc présente dans le
 * HTML prérendu. Chaque édition y est liée par son URL permanente, ce qui
 * maille l'intégralité du corpus. Les filtres sont une commodité client
 * par-dessus : l'état initial, celui que capture le prérendu, n'exclut rien.
 *
 * La donnée vient de /veille-data/archives.json, écrite par publish.py :
 * titres d'items, zones et sources de chaque édition, pour que la recherche
 * porte sur le contenu réel et pas seulement sur les titres d'éditions.
 *
 * Rôle distinct depuis le 07/10/2026 : l'archive complète (date et titre de
 * chaque édition, filtres). La liste est un ensemble de liens vers les
 * éditions, balisée en <nav> ; les titres appartiennent aux éditions datées.
 * La présentation de la veille vit sur /veille-ia, pas ici. Libellés en deux
 * langues dans TEXTES, mois recalculés depuis la clé AAAA-MM (les données
 * anglaises portent des noms de mois français).
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }

const SITE = 'https://www.master-ia.fr'

const ZONES = {
  une: { icon: Flame },
  europe: { icon: Landmark },
  international: { icon: Globe },
  chine: { icon: Compass },
  recherche: { icon: FlaskConical },
  bref: { icon: Zap },
  autre: { icon: Newspaper },
}

const TEXTES = {
  fr: {
    titre: 'Toutes les publications de la Veille IA | Masteria',
    description: meta => (meta
      ? `Toutes les éditions de la Veille IA depuis le ${meta.premiereDateAffichee} : ${meta.totalItems} actualités analysées et sourcées, avec recherche par sujet, zone et mois.`
      : 'Toutes les éditions de la Veille IA Masteria, avec recherche par sujet, zone géographique et mois.'),
    keywords: 'veille ia, toutes les publications veille ia, historique actualité intelligence artificielle, recherche actualité ia',
    nomCollection: 'Toutes les publications de la Veille IA Masteria',
    kicker: 'Archives',
    h1: 'Toutes les publications de la Veille IA',
    h1Suite: meta => (meta
      ? `${meta.totalEditions} édition${meta.totalEditions > 1 ? 's' : ''}, ${meta.totalItems} actualités analysées`
      : 'les parutions depuis juillet 2026'),
    intro: meta => `Cette page rassemble la collection entière${meta ? `, de la première parution du ${meta.premiereDateAffichee} à la plus récente` : ''}. Chaque ligne mène à l'édition datée, avec son texte, ses sources et son analyse.`,
    aide: "Pour retrouver un dossier, tapez le nom d'un acteur, d'un texte de loi ou d'un média : la recherche lit les titres des éditions, ceux de chaque actualité et le nom des sources. Les filtres par mois et par zone se combinent avec elle.",
    erreurTitre: 'Les publications ne sont pas accessibles pour le moment',
    erreurTexte: 'Rechargez la page pour réessayer, ou repassez par la page principale de la veille.',
    retour: 'Retour à la Veille IA',
    placeholder: 'Un sujet, un acteur, une source (CNIL, Mistral, AI Act…)',
    rechercheAria: 'Rechercher dans les publications',
    moisAria: 'Filtrer par mois',
    tousMois: 'Tous les mois',
    zones: { europe: 'Europe', international: 'International', chine: 'Chine et Asie', recherche: 'Recherche', bref: 'Brèves' },
    effacer: 'Effacer les filtres',
    aucune: 'Aucune édition ne correspond',
    aucuneTexte: 'Aucune édition ne correspond à cette recherche.',
    compte: (n, filtre, nb) => `${n} édition${n > 1 ? 's' : ''}${filtre ? ` trouvée${n > 1 ? 's' : ''}` : ''} · ${nb} actualité${nb > 1 ? 's' : ''} au total`,
    editions: n => `${n} édition${n > 1 ? 's' : ''}`,
    ligne: (n, t) => `${n} actualités · ${t} min`,
    autres: n => `et ${n} autre${n > 1 ? 's' : ''} dans cette édition`,
    listeAria: 'Archive des éditions',
    suivreAvant: 'Pour ne rien manquer, abonnez-vous au ',
    suivreRss: 'flux RSS',
    suivreMilieu: " ; la parution du jour s'ouvre depuis ",
    suivreLien: 'la page principale de la veille',
    ctaTitre: 'Un sujet de ces publications concerne vos équipes ?',
    ctaTexte: "Les archives montrent comment un dossier évolue sur plusieurs semaines, de l'AI Act aux tarifs des assistants. Nous aidons vos équipes à en tirer des décisions, par la formation ou par un projet bâti sur vos outils.",
  },
  en: {
    titre: 'All AI Watch editions | Masteria',
    description: meta => (meta
      ? `Every AI Watch edition since ${meta.premiereDateAffichee}: ${meta.totalItems} stories, analysed and sourced, searchable by topic, region and month.`
      : 'Every edition of Masteria AI Watch, searchable by topic, region and month.'),
    keywords: 'ai watch archive, ai news archive, artificial intelligence news history, ai news search',
    nomCollection: 'All editions of Masteria AI Watch',
    kicker: 'Archive',
    h1: 'All AI Watch editions',
    h1Suite: meta => (meta
      ? `${meta.totalEditions} edition${meta.totalEditions > 1 ? 's' : ''}, ${meta.totalItems} stories analysed`
      : 'every issue since August 2026'),
    intro: meta => `This page gathers the whole collection${meta ? `, from the first issue on ${meta.premiereDateAffichee} to the latest one` : ''}. Each line leads to the dated edition, with its text, its sources and its analysis.`,
    aide: 'To find a story, type the name of a company, a law or a news outlet: the search reads edition headlines, the title of every story and the names of the sources. Month and region filters work alongside it.',
    erreurTitre: 'The archive cannot be loaded right now',
    erreurTexte: 'Reload the page to try again, or go back to the AI Watch home page.',
    retour: 'Back to AI Watch',
    placeholder: 'A topic, a company, a source (CNIL, Mistral, AI Act…)',
    rechercheAria: 'Search the archive',
    moisAria: 'Filter by month',
    tousMois: 'All months',
    zones: { europe: 'Europe', international: 'International', chine: 'China and Asia', recherche: 'Research', bref: 'Briefs' },
    effacer: 'Clear filters',
    aucune: 'No edition matches',
    aucuneTexte: 'No edition matches this search.',
    compte: (n, filtre, nb) => `${n} edition${n > 1 ? 's' : ''}${filtre ? ' found' : ''} · ${nb} stor${nb > 1 ? 'ies' : 'y'} in total`,
    editions: n => `${n} edition${n > 1 ? 's' : ''}`,
    ligne: (n, t) => `${n} stories · ${t} min`,
    autres: n => `and ${n} more in this edition`,
    listeAria: 'Edition archive',
    suivreAvant: 'To keep up, subscribe to the ',
    suivreRss: 'RSS feed (French edition)',
    suivreMilieu: "; today's issue opens from ",
    suivreLien: 'the AI Watch home page',
    ctaTitre: 'Does one of these stories concern your teams?',
    ctaTexte: 'The archive shows how a story develops over several weeks, from the AI Act to assistant pricing. We help your teams turn it into decisions, through training or a project built on your own tools.',
  },
}
// Pills de filtre : les zones éditoriales, la une étant transverse.
const ZONES_FILTRE = ['europe', 'international', 'chine', 'recherche', 'bref']

function Kicker({ children }) { return <div style={kickerStyle}>{children}</div> }

// Comparaison insensible aux accents, à la casse et à la typographie :
// l'apostrophe courbe des claviers mobiles doit trouver l'apostrophe droite
// de la donnée, et NFD ne décompose pas les ligatures œ et æ.
function norm(s) {
  return (s || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[\u2019\u02BC]/g, "'")
    .replace(/œ/g, 'oe').replace(/æ/g, 'ae')
    .toLowerCase()
}

export default function VeillePublicationsPage({ lang = 'fr' }) {
  const L = strings(lang)
  const T = TEXTES[lang] || TEXTES.fr
  const base = baseVeille(lang)
  const isDesktop = useIsDesktop()
  const [data, setData] = useState(null)
  const [etat, setEtat] = useState('chargement')
  // Les filtres vivent aussi dans l'URL : une recherche se partage par lien,
  // et l'action de recherche déclarée au JSON-LD pointe sur ?q=. Le prérendu
  // charge la page sans paramètre, donc avec la liste complète.
  const paramsInitiaux = () => {
    if (typeof window === 'undefined') return { q: '', zones: [], mois: 'tous' }
    const p = new URLSearchParams(window.location.search)
    const zonesConnues = (p.get('zones') || '').split(',').filter(z => ZONES_FILTRE.includes(z))
    const m = p.get('mois') || 'tous'
    return {
      q: p.get('q') || '',
      zones: zonesConnues,
      mois: /^\d{4}-\d{2}$/.test(m) ? m : 'tous',
    }
  }
  const [q, setQ] = useState(() => paramsInitiaux().q)
  const [zonesActives, setZonesActives] = useState(() => paramsInitiaux().zones)
  const [mois, setMois] = useState(() => paramsInitiaux().mois)
  const champRecherche = useRef(null)

  // L'URL suit les filtres sans passer par le routeur : replaceState ne
  // déclenche ni navigation ni rechargement, et l'historique reste propre.
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Partir des paramètres existants : un lien de campagne (utm_*) ou un
    // hash ne doivent pas être balayés par la synchronisation des filtres.
    const p = new URLSearchParams(window.location.search)
    if (q.trim()) p.set('q', q.trim()); else p.delete('q')
    if (zonesActives.length) p.set('zones', zonesActives.join(',')); else p.delete('zones')
    if (mois !== 'tous') p.set('mois', mois); else p.delete('mois')
    const suffixe = p.toString()
    const cible = (suffixe ? `${window.location.pathname}?${suffixe}` : window.location.pathname)
      + window.location.hash
    if (cible !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.replaceState(window.history.state, '', cible)
    }
  }, [q, zonesActives, mois])

  useEffect(() => {
    let actif = true
    fetch(`${baseData(lang)}/archives.json`)
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then(d => {
        if (!actif) return
        if (!d || !Array.isArray(d.editions)) throw new Error('payload incomplet')
        setData(d); setEtat('ok')
      })
      .catch(() => actif && setEtat('erreur'))
    return () => { actif = false }
  }, [lang])

  const ok = etat === 'ok' && data
  const meta = ok ? data.meta : null
  const editions = (ok && data.editions) || []

  const moisDisponibles = useMemo(() => {
    const vus = new Map()
    editions.forEach(e => { if (!vus.has(e.mois)) vus.set(e.mois, moisVeille(e.mois, lang) || e.moisAffiche) })
    return [...vus.entries()]
  }, [editions, lang])

  const nq = norm(q).trim()
  const filtreActif = nq !== '' || zonesActives.length > 0 || mois !== 'tous'

  // Le filtrage renvoie aussi les items qui portent la correspondance texte,
  // pour les afficher en liens profonds sous l'édition.
  const resultats = useMemo(() => editions.map(e => {
    if (mois !== 'tous' && e.mois !== mois) return null
    if (zonesActives.length && !zonesActives.some(z => e.zones.some(ez => ez.cle === z))) return null
    if (!nq) return { e, itemsTrouves: [] }
    const direct = norm(e.titreEditorial).includes(nq)
      || norm(e.chapeau).includes(nq)
      || e.sources.some(s => norm(s).includes(nq))
    const itemsTrouves = e.items.filter(it => norm(it.t).includes(nq))
    if (!direct && !itemsTrouves.length) return null
    return { e, itemsTrouves }
  }).filter(Boolean), [editions, nq, zonesActives, mois])

  const nbActualites = resultats.reduce((n, r) => n + r.e.nbItems, 0)

  const groupes = useMemo(() => {
    const gs = []
    resultats.forEach(r => {
      const dernier = gs[gs.length - 1]
      if (dernier && dernier.mois === r.e.mois) dernier.items.push(r)
      else gs.push({ mois: r.e.mois, moisAffiche: moisVeille(r.e.mois, lang) || r.e.moisAffiche, items: [r] })
    })
    return gs
  }, [resultats, lang])

  const basculerZone = z => setZonesActives(prev =>
    prev.includes(z) ? prev.filter(x => x !== z) : [...prev, z])
  // Le bouton d'effacement se démonte en vidant les filtres : sans point de
  // chute, le focus clavier tomberait sur le corps de page.
  const reinitialiser = () => {
    setQ(''); setZonesActives([]); setMois('tous')
    if (champRecherche.current) champRecherche.current.focus()
  }

  const jsonLd = ok ? [
    {
      '@context': 'https://schema.org', '@type': 'CollectionPage',
      '@id': `${SITE}${base}/publications#collection`,
      name: T.nomCollection,
      url: `${SITE}${base}/publications`,
      inLanguage: inLanguageVeille(lang), isAccessibleForFree: true,
      isPartOf: { '@id': `${SITE}${base}#collection` },
      author: { '@id': `${SITE}/#organization` },
      editor: { '@id': `${SITE}/#mathias-nizan` },
      publisher: { '@id': `${SITE}/#organization` },
      // Pas de SearchAction : Googlebot explore l'urlTemplate littéralement
      // et crée une URL fantôme en Search Console, motif déjà purgé du site
      // le 2026-07-02 (voir SEOHead). Les URL ?q= restent partageables.
    },
    {
      '@context': 'https://schema.org', '@type': 'ItemList',
      '@id': `${SITE}${base}/publications#editions`,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: editions.length,
      itemListElement: editions.slice(0, 50).map((e, i) => ({
        '@type': 'ListItem', position: i + 1,
        name: e.titreEditorial, url: `${SITE}${base}/${e.date}`,
      })),
    },
  ] : undefined

  return (
    <div data-veille-pret={etat === 'chargement' ? '0' : '1'} data-veille-etat={etat}>
      <SEOHead
        title={T.titre}
        description={T.description(meta)}
        slug={`${base.slice(1)}/publications`}
        alternates={alternatesVeille('publications')}
        htmlLang={L.htmlLang}
        keywords={T.keywords}
        breadcrumbs={[
          { name: L.accueil, slug: '' },
          { name: L.rubrique, slug: base.slice(1) },
          { name: L.toutesPublications, slug: `${base.slice(1)}/publications` },
        ]}
        datePublished={meta ? meta.premiereDate : undefined}
        dateModified={meta ? meta.derniereDate : undefined}
        extraJsonLd={jsonLd}
      />

      <VeilleNav lang={lang} active="publications" />

      {/* ── 1. HERO SOMBRE (compact) ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 64px) 24px clamp(44px, 6vw, 64px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>{L.accueil}</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to={base} style={{ color: '#94A3B8' }}>{L.rubrique}</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>{L.toutesPublications}</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Library size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              {T.kicker}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.4vw, 44px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 16, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            {T.h1}
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>
              {T.h1Suite(meta)}
            </span>
          </h1>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 12px', maxWidth: 680 }}>
            {T.intro(meta)}
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: 0, maxWidth: 680 }}>
            {T.aide}
          </p>
        </div>
      </section>

      {/* ── 2. RECHERCHE ET LISTE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>

          {etat === 'erreur' && (
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}`, maxWidth: 720 }}>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 26px)' }}>{T.erreurTitre}</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 18px' }}>
                {T.erreurTexte}
              </p>
              <Link to={base} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700 }}>
                {T.retour}
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          )}

          {ok && (
            <>
              {/* Barre de filtres. L'état initial n'exclut rien : le prérendu
                  capture la liste complète. */}
              <div style={{ ...cardStyle, padding: 'clamp(18px, 2.6vw, 26px)', marginBottom: 12 }}>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ position: 'relative', flex: '1 1 260px', minWidth: 220 }}>
                    <Search size={16} strokeWidth={2.2} aria-hidden="true" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#6B7280' }} />
                    {/* 16 px minimum : en dessous, iOS zoome dans le champ au
                        focus. Pas d'outline:none : le focus clavier reste visible. */}
                    <input
                      ref={champRecherche}
                      type="search"
                      value={q}
                      onChange={e => setQ(e.target.value)}
                      placeholder={T.placeholder}
                      aria-label={T.rechercheAria}
                      style={{ width: '100%', boxSizing: 'border-box', padding: '11px 14px 11px 40px', fontSize: 16, color: '#0A0A0A', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, fontFamily: 'inherit' }}
                    />
                  </div>
                  <select
                    value={mois}
                    onChange={e => setMois(e.target.value)}
                    aria-label={T.moisAria}
                    style={{ padding: '11px 14px', fontSize: 14, color: '#374151', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, fontFamily: 'inherit' }}
                  >
                    <option value="tous">{T.tousMois}</option>
                    {moisDisponibles.map(([cle, libelle]) => (
                      <option key={cle} value={cle}>{libelle}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  {ZONES_FILTRE.map(z => {
                    const actif = zonesActives.includes(z)
                    const Icon = ZONES[z].icon
                    return (
                      <button
                        key={z}
                        type="button"
                        className="veille-pill"
                        onClick={() => basculerZone(z)}
                        aria-pressed={actif}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                          fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
                          color: actif ? '#1D4ED8' : '#374151',
                          background: actif ? cLight : '#fff',
                          border: `1px solid ${actif ? c : '#E5E7EB'}`,
                          borderRadius: 99, padding: '7px 14px',
                        }}
                      >
                        <Icon size={14} strokeWidth={2.2} aria-hidden="true" />
                        {T.zones[z]}
                      </button>
                    )
                  })}
                  {filtreActif && (
                    <button
                      type="button"
                      onClick={reinitialiser}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, cursor: 'pointer', fontSize: 13, fontWeight: 700, fontFamily: 'inherit', color: '#6B7280', background: 'none', border: 'none', padding: '7px 10px' }}
                    >
                      <X size={14} strokeWidth={2.4} aria-hidden="true" />
                      {T.effacer}
                    </button>
                  )}
                </div>
              </div>

              {/* aria-live tenu même à zéro résultat : le lecteur d'écran doit
                  entendre le changement. Le texte reste juste dans les deux cas. */}
              <p aria-live="polite" style={{ fontSize: 14, color: '#6B7280', margin: '0 0 24px' }}>
                {resultats.length === 0
                  ? T.aucune
                  : T.compte(resultats.length, filtreActif, nbActualites)}
              </p>

              {resultats.length === 0 && (
                <div style={{ ...cardStyle, padding: 28, maxWidth: 640 }}>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 14px' }}>
                    {T.aucuneTexte}
                  </p>
                  <button type="button" onClick={reinitialiser}
                    style={{ ...aStyle, cursor: 'pointer', fontSize: 14.5, fontWeight: 700, background: 'none', border: 'none', padding: 0, fontFamily: 'inherit' }}>
                    {T.effacer}
                  </button>
                </div>
              )}

              {groupes.length > 0 && (
                <nav aria-label={T.listeAria} style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
                  {groupes.map((g, k) => (
                    <div key={g.mois}>
                      <div style={{ background: '#F9FAFB', borderTop: k === 0 ? 'none' : '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13, color: '#0A0A0A', letterSpacing: '.02em' }}>{g.moisAffiche}</span>
                        <span style={{ fontSize: 12.5, color: '#6B7280' }}>{T.editions(g.items.length)}</span>
                      </div>
                      {g.items.map(({ e, itemsTrouves }) => (
                        <div key={e.date} style={{ borderTop: '1px solid #E5E7EB' }}>
                          <Link to={`${base}/${e.date}`} style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="veille-ligne-archive" style={{
                              display: 'grid',
                              gridTemplateColumns: isDesktop ? '150px 1fr auto' : '1fr',
                              gap: isDesktop ? 16 : 4, padding: '18px 24px', alignItems: 'baseline',
                            }}>
                              <time dateTime={e.date} style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>{e.dateCourte}</time>
                              <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.45 }}>{e.titreEditorial}</span>
                              {isDesktop && (
                                <span style={{ fontSize: 12.5, color: '#6B7280' }}>{T.ligne(e.nbItems, e.tempsLecture)}</span>
                              )}
                            </div>
                          </Link>
                          {itemsTrouves.length > 0 && (
                            <div style={{ padding: '0 24px 16px', marginTop: -6 }}>
                              {itemsTrouves.slice(0, 5).map(it => (
                                <Link key={it.id} to={`${base}/${e.date}#${it.id}`}
                                  className="veille-lien-fil"
                                  style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '5px 0 5px 24px', fontSize: 13.5, color: '#374151', textDecoration: 'none', lineHeight: 1.5 }}>
                                  <ArrowUpRight size={13} strokeWidth={2.4} style={{ color: c, flexShrink: 0, alignSelf: 'center' }} aria-hidden="true" />
                                  {it.t}
                                </Link>
                              ))}
                              {itemsTrouves.length > 5 && (
                                <span style={{ display: 'block', fontSize: 12.5, color: '#6B7280', margin: '4px 0 0 45px' }}>
                                  {T.autres(itemsTrouves.length - 5)}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </nav>
              )}

              <p style={{ fontSize: 14, color: '#6B7280', marginTop: 24 }}>
                {T.suivreAvant}
                <a href="/veille.xml" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  {T.suivreRss}
                  <Rss size={13} strokeWidth={2.2} aria-hidden="true" />
                </a>
                {T.suivreMilieu}
                <Link to={base} style={aStyle}>{T.suivreLien}</Link>.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ── 3. CTA FINALE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              {T.ctaTitre}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 640 }}>
              {T.ctaTexte}
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
              {L.ctaBouton}
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
