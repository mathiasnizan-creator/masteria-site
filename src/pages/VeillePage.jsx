import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Newspaper, Clock, Link2, Rss, ExternalLink,
  Flame, Landmark, Globe, Compass, FlaskConical, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/**
 * VeillePage — la une du matin, pas un index d'éditions.
 *
 * L'édition du jour occupe la page : actualité de tête en entier, fil des
 * autres actualités, extrait de l'analyse. L'archive se lit en bas, par
 * titres éditoriaux plutôt que par dates.
 *
 * Une seule requête réseau : latest.json porte le catalogue et l'édition
 * complète. Ces fichiers vivent dans public/ et non dans le bundle, sinon
 * chaque publication changerait le hash des assets et invaliderait les pages
 * déjà prérendues du site.
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
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']

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

const RESSOURCES = [
  { tag: 'Formation', titre: 'Former vos équipes à l\'IA', desc: "Programmes intra sur ChatGPT, Claude, Copilot, Gemini et Mistral, finançables par votre OPCO.", href: '/formations' },
  { tag: 'Conseil', titre: 'Cadrer votre stratégie IA', desc: "Diagnostic, priorisation des cas d'usage et feuille de route pour dirigeants.", href: '/conseil-intelligence-artificielle' },
  { tag: 'Développement', titre: 'Développer vos agents IA', desc: "Agents, automatisations et applications métier, avec transfert de compétence.", href: '/agence-developpement-ia' },
  { tag: 'Publications', titre: 'Le blog Masteria', desc: "Guides longs et retours d'expérience, hors du rythme quotidien.", href: '/blog' },
]

function texteNu(html) {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}
function premiersMots(html, n) {
  const mots = texteNu(html).split(' ')
  return mots.slice(0, n).join(' ') + (mots.length > n ? '…' : '')
}

// Écart en jours ouvrés. Sert à ne jamais afficher une mention relative fausse.
function joursOuvresDepuis(iso) {
  const d = new Date(iso + 'T12:00:00')
  const now = new Date()
  const cur = new Date(d)
  let n = 0
  while (cur < now && n < 400) {
    cur.setDate(cur.getDate() + 1)
    const j = cur.getDay()
    if (j !== 0 && j !== 6) n++
  }
  return n
}
// Rendue après « Publiée le <date> · », donc sans verbe : « publiée hier »
// juste après « Publiée le 20 juillet » répéterait le participe.
function fraicheur(iso) {
  const n = joursOuvresDepuis(iso)
  if (n === 0) return 'ce matin'
  if (n === 1) return 'hier'
  if (n <= 3) return JOURS[new Date(iso + 'T12:00:00').getDay()]
  return ''
}
const enRetard = iso => joursOuvresDepuis(iso) > 2

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

export default function VeillePage() {
  const isDesktop = useIsDesktop()
  const [data, setData] = useState(null)
  const [etat, setEtat] = useState('chargement')
  // Rempli au montage seulement : le HTML prérendu est resservi jusqu'au
  // lendemain ouvré, une mention relative figée mentirait le samedi.
  const [relatif, setRelatif] = useState('')

  useEffect(() => {
    let actif = true
    fetch('/veille-data/latest.json')
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then(d => {
        if (!actif) return
        if (!d || !d.edition || !d.edition.une) throw new Error('payload incomplet')
        setData(d); setEtat('ok')
      })
      .catch(() => actif && setEtat('erreur'))
    return () => { actif = false }
  }, [])

  useEffect(() => {
    if (etat !== 'ok' || !data) return
    setRelatif(fraicheur(data.meta.derniereDate))
  }, [etat, data])

  const ok = etat === 'ok' && data
  const ed = ok ? data.edition : null
  const meta = ok ? data.meta : null
  const recentes = (ok && data.recentes) || []
  const sections = ok ? ordonner(ed.sections || []) : []
  const auFil = sections.filter(s => s.format !== 'bref')
  const nbBreves = sections.filter(s => s.format === 'bref').reduce((n, s) => n + s.items.length, 0)
  const retard = ok && enRetard(meta.derniereDate)

  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'CollectionPage',
      '@id': `${SITE}/veille#collection`,
      name: 'Veille IA Masteria', url: `${SITE}/veille`,
      inLanguage: 'fr-FR', isAccessibleForFree: true,
      author: { '@id': `${SITE}/#organization` },
      editor: { '@id': `${SITE}/#mathias-nizan` },
      publisher: { '@id': `${SITE}/#organization` },
    },
    ...(recentes.length ? [{
      '@context': 'https://schema.org', '@type': 'ItemList',
      '@id': `${SITE}/veille#editions`,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: recentes.length,
      itemListElement: recentes.slice(0, 20).map((e, i) => ({
        '@type': 'ListItem', position: i + 1,
        name: e.titreEditorial, url: `${SITE}/veille/${e.date}`,
      })),
    }] : []),
  ]

  const archives = recentes.slice(1)
  const groupes = []
  archives.forEach(e => {
    const dernier = groupes[groupes.length - 1]
    if (dernier && dernier.mois === e.mois) dernier.items.push(e)
    else groupes.push({ mois: e.mois, moisAffiche: e.moisAffiche, items: [e] })
  })

  return (
    <div data-veille-pret={etat === 'chargement' ? '0' : '1'} data-veille-etat={etat}>
      <SEOHead
        title="Veille IA : l'actualité de l'intelligence artificielle analysée | Masteria"
        description={ok ? ed.chapeau.slice(0, 158)
          : "Chaque matin ouvré, dix à quatorze actualités IA vérifiées et sourcées, puis une analyse signée Masteria. Europe, international, Chine et Asie."}
        slug="veille"
        keywords="veille ia, actualité intelligence artificielle, actualité ia, ai act, veille technologique ia, analyse ia"
        breadcrumbs={[{ name: 'Accueil', slug: '' }, { name: 'Veille IA', slug: 'veille' }]}
        datePublished={meta ? meta.premiereDate : undefined}
        dateModified={meta ? meta.derniereDate : undefined}
        extraJsonLd={jsonLd}
      />

      {/* ── 1. HERO SOMBRE ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>Veille IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Newspaper size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              {ok
                ? `${retard ? 'Dernière édition' : 'Édition'} du ${ed.dateLongue.replace(/\s\d{4}$/, '')}`
                : 'Veille IA quotidienne'}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Veille IA<br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>
              {ok ? ed.titreEditorial : "l'actualité de l'intelligence artificielle, chaque matin ouvré"}
            </span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par l'équipe éditoriale Masteria, sous la direction de <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>
            {ok && <> · Publiée le <time dateTime={ed.date}>{ed.dateAffichee}</time>{relatif ? ` · ${relatif}` : ''}</>}
          </p>

          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            {ok ? ed.chapeau : (
              <>Dix à quatorze actualités sourcées chaque matin ouvré, puis une <strong style={{ color: '#fff', fontWeight: 700 }}>analyse</strong> signée qui prend position.</>
            )}
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Trois zones suivies avec le même soin : l'Europe et la France, l'international, la Chine et l'Asie.
            Régulation, sorties de modèles, déploiements documentés, publications de recherche. Écrite par
            Masteria, organisme de formation et de conseil en IA, pour des dirigeants, des chefs de projet,
            des développeurs et des juristes.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            {ok ? (
              <Link to={`/veille/${ed.date}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                Lire l'édition du {ed.dateAffichee.replace(/\s\d{4}$/, '')}
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            ) : (
              <a href="#archives" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                Voir les éditions
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </a>
            )}
            {ok && recentes.length > 1 && (
              <a href="#archives" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
                Les éditions précédentes
              </a>
            )}
          </div>

          {ok && (
            <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
              {[
                { icon: Newspaper, label: `${ed.nbItems} actualités` },
                { icon: Link2, label: `${ed.nbSources} sources` },
                { icon: Clock, label: `${ed.tempsLecture} min de lecture` },
              ].map(({ icon: Icon, label }) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                  <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          )}

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {(ok ? [
                ['Au sommaire', [ed.une ? ed.une.zoneLibelle : null, ...sections.map(s => s.titre)].filter(Boolean).join(' · ')],
                ['Sources du jour', (ed.sourcesDuJour || []).join(' · ')],
                ['Analyse', "Signée par l'équipe éditoriale, publiée avec chaque édition"],
                ['Cadence', retard ? `Dernière édition : ${ed.dateLongue.replace(/\s\d{4}$/, '')}` : 'Publiée les jours ouvrés, vers 8h30'],
                ['Corpus', `${meta.totalItems} actualités traitées depuis le ${meta.premiereDateAffichee}`],
              ] : [
                ['Format', '10 à 14 actualités liées à leur source, puis une analyse signée'],
                ['Analyse', "Signée par l'équipe éditoriale, publiée avec chaque édition"],
                ['Cadence', 'Publiée les jours ouvrés, vers 8h30'],
              ]).filter(([, v]) => v).map(([label, valeur], i) => (
                <div key={label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 116px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{valeur}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Erreur de chargement ── */}
      {etat === 'erreur' && (
        <section style={{ padding: sectionPad, background: '#fff' }}>
          <div style={wrap}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}`, maxWidth: 720 }}>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 26px)' }}>Les éditions ne sont pas accessibles pour le moment</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 18px' }}>
                Rechargez la page pour réessayer. Le flux RSS reste disponible.
              </p>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <a href="/veille.xml" style={{ ...aStyle, fontSize: 14.5, fontWeight: 700 }}>Flux RSS</a>
                <Link to="/contact" style={{ ...aStyle, fontSize: 14.5, fontWeight: 700 }}>Nous signaler le problème</Link>
                <Link to="/blog" style={{ ...aStyle, fontSize: 14.5, fontWeight: 700 }}>Lire nos articles de fond</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 2. À LA UNE (famille F-UNE) ── */}
      {ok && ed.une && (
        <section id="une" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 140 }}>
          <div style={wrap}>
            <Kicker>À la une</Kicker>
            <article className="u-lift" style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: cLight, color: c, padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 14 }}>
                {(() => { const I = zoneIcon(ed.une.zone); return <I size={13} strokeWidth={2.2} aria-hidden="true" /> })()}
                {ed.une.zoneLibelle}
              </div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 14 }}>{ed.une.titre}</h2>
              <div className="veille-texte veille-texte--une" style={{ maxWidth: 780 }} dangerouslySetInnerHTML={{ __html: ed.une.texteHtml }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 22, paddingTop: 18, borderTop: '1px solid #E5E7EB' }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#6B7280' }}>
                  {ed.une.sources.length > 1 ? 'Sources' : 'Source'}
                </span>
                {ed.une.sources.map(s => (
                  <a key={s.url} className="veille-source" href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#374151', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 99, padding: '6px 13px', textDecoration: 'none' }}>
                    {s.nom}
                    <ExternalLink size={12} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ── 3. LE FIL DU JOUR (patron éditorial + famille F-FIL) ── */}
      {ok && auFil.length > 0 && (
        <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
          <div style={{ ...wrap, ...editorialGrid }}>
            <div style={editorialAside}>
              <Kicker>Le fil du jour</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Les {ed.nbItems - 1} autres actualités du {ed.dateAffichee.replace(/\s\d{4}$/, '')}
              </h2>
              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>{phraseRepartition(ed)}</strong>
              </p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 18px' }}>
                Chaque actualité porte sa source. Le texte complet et l'analyse sont dans l'édition du jour.
              </p>
              <Link to={`/veille/${ed.date}`} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700, textDecoration: 'none' }}>
                Ouvrir l'édition complète
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>

            <div>
              {auFil.map((s, i) => {
                const Icon = zoneIcon(s.zone)
                return (
                  <div key={s.id} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB', paddingTop: i === 0 ? 0 : 28, marginBottom: 28 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span aria-hidden="true" style={{ width: 28, height: 28, borderRadius: 8, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={15} strokeWidth={2.2} style={{ color: c }} />
                      </span>
                      <h3 style={{ ...h3Style, fontSize: 16 }}>{s.titre}</h3>
                      <span style={{ fontSize: 12.5, color: '#6B7280', fontWeight: 600, marginLeft: 'auto' }}>
                        {s.items.length} actualité{s.items.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {s.items.map((it, j) => (
                        <li key={it.id} style={{
                          display: isDesktop ? 'grid' : 'block',
                          gridTemplateColumns: isDesktop ? '1fr auto' : undefined,
                          gap: 14, alignItems: 'baseline',
                          padding: '12px 0', borderTop: j === 0 ? 'none' : '1px solid #E5E7EB',
                        }}>
                          <Link to={`/veille/${ed.date}#${it.id}`} className="veille-lien-fil"
                            style={{ fontSize: 15.5, fontWeight: 600, color: '#0A0A0A', lineHeight: 1.5, textDecoration: 'none' }}>
                            {it.titre || premiersMots(it.texteHtml, 12)}
                          </Link>
                          <span style={{ fontSize: 12.5, fontWeight: 500, color: '#6B7280', whiteSpace: isDesktop ? 'nowrap' : 'normal', display: 'block', marginTop: isDesktop ? 0 : 4 }}>
                            {it.sources[0] ? it.sources[0].nom : '—'}{it.sources.length > 1 ? ` +${it.sources.length - 1}` : ''}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
              {nbBreves > 0 && (
                <p style={{ fontSize: 14.5, color: '#6B7280', margin: '4px 0 0' }}>
                  Aussi dans cette édition : {nbBreves} brève{nbBreves > 1 ? 's' : ''}.
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. L'ANALYSE DU JOUR (ancre sombre unique) ── */}
      {ok && ed.analyse && (
        <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

          <div style={{ ...wrap, position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>L'analyse du jour</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>{ed.analyse.titre}</h2>

            {ed.analyse.these && (
              <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
                <strong style={{ color: '#fff' }}>{ed.analyse.these}</strong>
              </p>
            )}

            {ed.analyse.htmlExtrait && (
              <div className="veille-analyse" style={{ maxWidth: 760 }} dangerouslySetInnerHTML={{ __html: ed.analyse.htmlExtrait }} />
            )}

            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 28, paddingTop: 24, borderTop: '1px solid #1E293B' }}>
              <img src="/assets/mathias-nizan@240.jpg" width={44} height={44} loading="lazy" alt=""
                style={{ borderRadius: 99, objectFit: 'cover', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 15, color: '#F8FAFC' }}>{ed.analyse.auteur}</div>
                <div style={{ fontSize: 13, color: '#94A3B8' }}>{ed.analyse.auteurRole}</div>
              </div>
            </div>

            <Link to={`/veille/${ed.date}#analyse`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, marginTop: 26 }}>
              Lire l'analyse complète
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}

      {/* ── 5. LES ÉDITIONS PRÉCÉDENTES (famille F-ARCHIVE) ── */}
      {ok && recentes.length > 1 && (
        <section id="archives" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 140 }}>
          <div style={wrap}>
            <Kicker>Archives</Kicker>
            <h2 style={h2Style}>Les éditions précédentes</h2>
            <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, maxWidth: 720, marginBottom: 32 }}>
              Chaque édition reste en ligne avec ses sources et son analyse. Elles sont classées par leur titre du jour.
            </p>

            <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
              {groupes.map((g, k) => (
                <div key={g.mois}>
                  <div style={{ background: '#F9FAFB', borderTop: k === 0 ? 'none' : '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13, color: '#0A0A0A', letterSpacing: '.02em' }}>{g.moisAffiche}</span>
                    <span style={{ fontSize: 12.5, color: '#6B7280' }}>{g.items.length} édition{g.items.length > 1 ? 's' : ''}</span>
                  </div>
                  {g.items.map(e => (
                    <Link key={e.date} to={`/veille/${e.date}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <div className="veille-ligne-archive" style={{
                        display: 'grid',
                        gridTemplateColumns: isDesktop ? '150px 1fr auto' : '1fr',
                        gap: 16, padding: '18px 24px', borderTop: '1px solid #E5E7EB', alignItems: 'baseline',
                      }}>
                        <time dateTime={e.date} style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>{e.dateCourte}</time>
                        <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0A0A0A' }}>{e.titreEditorial}</span>
                        {isDesktop && (
                          <span style={{ fontSize: 12.5, color: '#94A3B8' }}>{e.nbItems} actualités · {e.tempsLecture} min</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <p style={{ fontSize: 14, color: '#6B7280', marginTop: 20 }}>
              {meta.totalEditions} éditions publiées, {meta.totalItems} actualités traitées depuis le {meta.premiereDateAffichee}.
            </p>
          </div>
        </section>
      )}

      {/* ── 6. ALLER PLUS LOIN (famille F7) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Aller plus loin</Kicker>
          <h2 style={h2Style}>Les sujets de cette veille, traités en profondeur</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {RESSOURCES.map(r => (
              <Link key={r.href} to={r.href} className="u-lift"
                style={{ ...cardStyle, padding: 26, textDecoration: 'none', transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}>
                <span style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{r.tag}</span>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{r.titre}</h3>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 14px' }}>{r.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: c, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  En savoir plus
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, marginTop: 28 }}>
            La régulation suivie dans cette veille est celle que nous appliquons dans nos projets. Voir{' '}
            <Link to="/agents-ia-entreprise" style={aStyle}>les agents IA en entreprise</Link>.
            {' '}La rubrique se suit aussi par flux, sur Feedly, un connecteur Slack ou Teams, ou une
            automatisation maison :{' '}
            <a href="/veille.xml" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              Flux RSS
              <Rss size={14} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <FounderNote bg="#F9FAFB" />

      {/* ── 8. CTA FINALE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              Former vos équipes sur ce que vous lisez ici
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              L'actualité suivie chaque matin nourrit nos formations et nos missions de conseil. Masteria
              accompagne dirigeants, chefs de projet, développeurs et juristes sur l'IA générative depuis 2022.
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
