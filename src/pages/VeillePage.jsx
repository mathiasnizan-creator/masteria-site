import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Newspaper, Rss, Library, Languages,
  Flame, Landmark, Globe, Compass, FlaskConical, Zap,
  Briefcase, Code2, Scale, Users,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'
import VeilleNav from '../components/VeilleNav'
import VeilleLangSwitch from '../components/VeilleLangSwitch'
import { strings, baseVeille, baseData, alternatesVeille, inLanguageVeille } from '../data/veille-i18n'

/**
 * VeillePage — la porte d'entrée de la Veille IA (/veille-ia, /en/ai-watch).
 *
 * Rôle distinct depuis le 07/10/2026 : la page présente la veille (à qui elle
 * sert, ligne éditoriale, rythme, comment la recevoir), résume l'édition du
 * jour en quelques lignes et liste les éditions récentes. Le texte complet
 * d'une édition vit sur sa page datée, l'archive complète sur /publications :
 * aucune des trois ne reprend le texte des autres. Les titres d'éditions et
 * les titres d'actualités affichés ici sont des liens, balisés en <nav>.
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
const pStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 820 }

const SITE = 'https://www.master-ia.fr'
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
const JOURS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const ZONES = {
  une: { icon: Flame, rang: 0 },
  europe: { icon: Landmark, rang: 1 },
  international: { icon: Globe, rang: 2 },
  chine: { icon: Compass, rang: 3 },
  recherche: { icon: FlaskConical, rang: 4 },
  bref: { icon: Zap, rang: 5 },
  autre: { icon: Newspaper, rang: 6 },
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

/*
 * Textes propres à la page, dans les deux langues. Ils présentent la veille :
 * aucun ne reprend une phrase d'une édition, de /publications ou de /a-propos.
 */
const TEXTES = {
  fr: {
    titre: "Veille IA : l'actualité de l'IA chaque jour ouvré",
    description: "Chaque jour ouvré, 12 à 14 actualités de l'intelligence artificielle reliées à leur source, puis une analyse signée Masteria. Régulation, modèles, usages.",
    keywords: 'veille ia, actualité intelligence artificielle, actualité ia, ai act, veille technologique ia, analyse ia',
    kickerDefaut: 'Veille IA quotidienne',
    kickerEdition: (jour, retard) => `${retard ? 'Dernière édition' : 'Édition'} du ${jour}`,
    sousTitre: "l'actualité de l'intelligence artificielle, lue, triée et commentée chaque jour ouvré",
    signature: 'Une rubrique de Masteria, conduite par',
    chapeau: "Chaque jour ouvré, la rédaction de Masteria passe en revue 38 flux d'information sur l'intelligence artificielle, garde les nouvelles qui pèsent sur une organisation française et relie chacune à sa source. Une analyse signée explique ensuite ce que ces nouvelles modifient dans le travail de vos équipes.",
    intro: "Le but est simple : vous faire gagner la matinée que demanderait ce tri, sans perdre la nuance. Les actualités sont résumées avec nos mots, datées, et le lien ouvre toujours la publication d'origine.",
    lireEdition: jour => `Lire l'édition du ${jour}`,
    parcourir: 'Parcourir les archives',
    enBrefTitre: 'La veille en bref',
    enBref: (meta, retard, derniere) => [
      ['Rythme', retard ? `Dernière parution le ${derniere}` : 'Chaque jour ouvré, en général dans la matinée'],
      ['Contenu', '12 à 14 actualités sourcées, suivies d\'une analyse qui prend position'],
      ['Langues', 'Français, avec une traduction anglaise baptisée AI Watch'],
      ['Archives', meta ? `${meta.totalEditions} parutions depuis le ${meta.premiereDateAffichee}, toutes en accès libre` : 'Toutes les parutions restent en accès libre'],
    ],
    jourKicker: retard => (retard ? 'La dernière édition' : "L'édition du jour"),
    jourTitre: jour => `${jour.charAt(0).toUpperCase()}${jour.slice(1)} en quelques lignes`,
    lecture: n => `Comptez environ ${n} minutes de lecture.`,
    sommaireAria: "Au sommaire de l'édition du jour",
    titreEditorialLabel: 'Le titre du jour',
    aLaUne: 'À la une',
    lireComplete: "Ouvrir l'édition complète",
    allerAnalyse: "Aller directement à l'analyse",
    pourQuiKicker: 'Pour qui',
    pourQuiTitre: 'Une veille écrite pour ceux qui décident et pour ceux qui déploient',
    pourQuiIntro: "Nous écrivons pour tous les professionnels qui travaillent avec l'IA, spécialistes ou non. Chaque terme technique reçoit une courte explication la première fois qu'il apparaît.",
    publics: [
      { icon: Briefcase, titre: 'Dirigeants et comités de direction', desc: "Les hausses de prix des éditeurs, les décisions européennes et les signaux de marché arrivent déjà triés, avec un avis sur ce qu'ils changent pour votre budget et vos contrats." },
      { icon: Code2, titre: 'DSI, développeurs et équipes data', desc: "Sorties de modèles, outils pour développeurs, protocoles comme MCP (le standard qui relie un assistant à vos logiciels) et travaux de recherche, avec le lien vers la documentation d'origine." },
      { icon: Scale, titre: 'Juristes, DPO et conformité', desc: "AI Act, avis de la CNIL, procès sur les données d'entraînement : chaque texte est daté, et la source officielle est citée dès qu'elle existe." },
      { icon: Users, titre: 'RH, formation et managers', desc: "Ce que les nouveaux outils changent dans les métiers, les usages observés en entreprise et les compétences qui prennent de la valeur, pour nourrir vos plans de formation." },
    ],
    ligneKicker: 'Ligne éditoriale',
    ligneTitre: 'Ce que la rédaction retient, et ce qui reste dehors',
    ligneReponse: "Une nouvelle entre dans l'édition quand elle modifie une décision, un budget, un outil ou une obligation pour une organisation qui se sert de l'IA. Les communiqués sans date et les classements promotionnels restent dehors, et une rumeur n'est reprise que présentée comme telle.",
    ligneZones: "Les trois zones pèsent autant les unes que les autres. L'Europe et la France apportent la régulation et les acteurs proches de vous, l'international les grands laboratoires américains et leurs tarifs, la Chine et l'Asie les modèles ouverts et la bataille des semi-conducteurs. Une rubrique recherche signale enfin les travaux utiles aux équipes techniques.",
    ligneAnalyse: "L'analyse est écrite après la sélection, à partir des actualités du jour qu'elle cite par leur titre. Elle tranche, puis dit ce qu'une organisation française peut en faire. Aucune place n'est vendue dans la veille, et un sujet qui touche l'offre de Masteria est signalé.",
    ligneLien: 'Lire la politique éditoriale',
    recevoirKicker: 'La recevoir',
    recevoirTitre: 'Lire la veille au rythme qui vous convient',
    canaux: [
      { icon: Newspaper, titre: 'Sur cette page', desc: "La nouvelle édition paraît ici chaque jour ouvré, puis garde une adresse datée qui ne change plus." },
      { icon: Rss, titre: 'Par flux RSS', desc: "Branchez /veille.xml dans Feedly, dans un canal Slack ou Teams, ou dans une automatisation maison.", href: '/veille.xml', lien: 'Le flux RSS' },
      { icon: Languages, titre: 'En anglais', desc: "Une traduction paraît sous le nom AI Watch depuis août 2026, pour vos équipes et partenaires hors de France.", to: '/en/ai-watch', lien: 'AI Watch' },
      { icon: Library, titre: 'Dans les archives', desc: "Chaque parution reste en ligne. La page des archives se filtre par mois, par zone ou par mot, un acteur ou une source par exemple.", toBase: '/publications', lien: 'Les archives' },
    ],
    recentesKicker: 'Éditions récentes',
    recentesTitre: 'Les derniers jours de la veille',
    recentesAria: 'Éditions récentes',
    voirArchives: 'Toutes les éditions, avec recherche',
    plusLoinKicker: 'Aller plus loin',
    plusLoinTitre: "Quand l'actualité appelle un travail de fond",
    ressources: [
      { tag: 'Méthode', titre: 'Automatiser sa veille IA', desc: "Monter votre propre dispositif : choix des sources, filtres, outils et erreurs fréquentes, tirés de notre pratique.", href: '/automatiser-sa-veille-ia' },
      { tag: 'Formation', titre: "Former vos équipes à l'IA", desc: "Des programmes intra sur ChatGPT, Claude, Copilot, Gemini et Vibe de Mistral, finançables par l'OPCO de votre branche selon ses règles.", href: '/formations' },
      { tag: 'Conseil', titre: 'Cadrer votre stratégie IA', desc: "Choisir les cas d'usage qui rapportent, puis bâtir la feuille de route avec ceux qui les porteront.", href: '/conseil-intelligence-artificielle' },
      { tag: 'Développement', titre: 'Développer vos agents IA', desc: "Agents, automatisations et applications métier, livrés avec la formation de ceux qui les feront vivre.", href: '/agence-developpement-ia' },
      { tag: 'Publications', titre: 'Le blog Masteria', desc: "Des guides longs pour les sujets que l'actualité ne fait qu'effleurer.", href: '/blog' },
    ],
    enSavoirPlus: 'Découvrir',
    erreurTitre: 'Les éditions ne sont pas accessibles pour le moment',
    erreurTexte: 'Rechargez la page pour réessayer. Le flux RSS reste disponible.',
    ctaTitre: 'Passer de la lecture à la pratique avec vos équipes',
    ctaTexte: "Les sujets suivis ici deviennent des exercices dans nos formations et des chantiers dans nos missions : un changement de tarif chez un éditeur, une obligation de l'AI Act ou un nouvel agent se travaillent sur vos propres outils. Masteria intervient en France, en Europe, aux États-Unis et en Inde.",
    ctaBouton: 'Parler de votre projet',
  },
  en: {
    titre: 'AI Watch: daily artificial intelligence news',
    description: 'Every working day, 12 to 14 artificial intelligence stories linked to their source, then a signed analysis by Masteria. Regulation, models, adoption.',
    keywords: 'ai news, artificial intelligence news, ai watch, ai act, ai regulation, ai analysis',
    kickerDefaut: 'Daily AI Watch',
    kickerEdition: (jour, retard) => (retard ? `Latest edition: ${jour}` : `${jour} edition`),
    sousTitre: 'artificial intelligence news, read, sorted and explained every working day',
    signature: 'A Masteria column, edited by',
    chapeau: 'Every working day, the Masteria newsroom goes through 38 news feeds on artificial intelligence, keeps the stories that matter to an organisation working in Europe and links each one to its source. A signed analysis then explains what the news changes in the way your teams work.',
    intro: 'The aim is to spare you the morning that sorting would take, without losing the nuance. Stories are summarised in our own words and dated, and every link opens the original publication.',
    lireEdition: jour => `Read the ${jour} edition`,
    parcourir: 'Browse the archive',
    enBrefTitre: 'AI Watch at a glance',
    enBref: (meta, retard, derniere) => [
      ['Schedule', retard ? `Last published on ${derniere}` : 'Every working day, usually in the morning'],
      ['Content', '12 to 14 sourced stories, followed by an analysis that takes a position'],
      ['Languages', 'English translation of the French Veille IA'],
      ['Archive', meta ? `${meta.totalEditions} issues since ${meta.premiereDateAffichee}, all free to read` : 'Every issue stays free to read'],
    ],
    jourKicker: retard => (retard ? 'Latest edition' : "Today's edition"),
    jourTitre: jour => `${jour} in a few lines`,
    lecture: n => `Allow about ${n} minutes to read it.`,
    sommaireAria: "In today's edition",
    titreEditorialLabel: "Today's headline",
    aLaUne: 'Top story',
    lireComplete: 'Open the full edition',
    allerAnalyse: 'Go straight to the analysis',
    pourQuiKicker: 'Who it is for',
    pourQuiTitre: 'Written for the people who decide and the people who deploy',
    pourQuiIntro: 'We write for every professional who works with AI, specialist or not. Each technical term gets a short explanation the first time it appears.',
    publics: [
      { icon: Briefcase, titre: 'Executives and leadership teams', desc: 'Vendor price changes, European decisions and market signals arrive already sorted, with a view on what they mean for your budget and your contracts.' },
      { icon: Code2, titre: 'IT leaders, developers and data teams', desc: 'Model releases, developer tools, protocols such as MCP (the standard that connects an assistant to your software) and research papers, with a link to the original documentation.' },
      { icon: Scale, titre: 'Lawyers, DPOs and compliance', desc: 'The AI Act, rulings by data protection authorities, lawsuits over training data: every text is dated, and the official source is cited whenever there is one.' },
      { icon: Users, titre: 'HR, learning and managers', desc: 'What new tools change in day-to-day jobs, the uses observed inside companies and the skills that are gaining value, to feed your training plans.' },
    ],
    ligneKicker: 'Editorial line',
    ligneTitre: 'What the newsroom keeps, and what it leaves out',
    ligneReponse: 'A story makes the edition when it shifts a decision, a budget, a tool or an obligation for an organisation that uses AI. Undated press releases and promotional rankings stay out, and a rumour only appears when it is labelled as one.',
    ligneZones: 'The three regions carry equal weight. Europe and France bring regulation and the players closest to you, the international pages cover the large American labs and their pricing, and China and Asia cover open models and the semiconductor race. A research section flags the papers that matter to technical teams.',
    ligneAnalyse: 'The analysis is written after the selection, from the day\'s stories, which it cites by title. It takes a side, then says what an organisation can do about it. No space in AI Watch is for sale, and any story touching on Masteria\'s own services is flagged.',
    ligneLien: 'Read the editorial policy (in French)',
    recevoirKicker: 'How to follow it',
    recevoirTitre: 'Read AI Watch at the pace that suits you',
    canaux: [
      { icon: Newspaper, titre: 'On this page', desc: 'Each new edition appears here every working day, then keeps a dated address that never changes.' },
      { icon: Rss, titre: 'By RSS', desc: 'The /veille.xml feed carries the French edition. Plug it into Feedly, a Slack or Teams channel, or your own automation.', href: '/veille.xml', lien: 'RSS feed (French)' },
      { icon: Languages, titre: 'In French', desc: 'The original edition, Veille IA, comes out first, on the same day and with the same sources.', to: '/veille-ia', lien: 'Veille IA' },
      { icon: Library, titre: 'In the archive', desc: 'Every issue stays online. The archive page filters by month, by region or by keyword, such as a company or a source.', toBase: '/publications', lien: 'The archive' },
    ],
    recentesKicker: 'Recent editions',
    recentesTitre: 'The last few days of AI Watch',
    recentesAria: 'Recent editions',
    voirArchives: 'Every edition, with search',
    plusLoinKicker: 'Going further',
    plusLoinTitre: 'When the news calls for deeper work',
    ressources: [
      { tag: 'Method', titre: 'Automating your AI watch', desc: 'Build your own setup: choosing sources, filters, tools and common mistakes, drawn from our practice. In French.', href: '/automatiser-sa-veille-ia' },
      { tag: 'Training', titre: 'Training your teams in AI', desc: "In-house programmes on ChatGPT, Claude, Copilot, Gemini and Mistral's Vibe, run in French or in English.", href: '/formations' },
      { tag: 'Consulting', titre: 'Framing your AI strategy', desc: 'Pick the use cases that pay off, then build the roadmap with the people who will carry it.', href: '/conseil-intelligence-artificielle' },
      { tag: 'Development', titre: 'Building your AI agents', desc: 'Agents, automations and business applications, delivered with training for the people who will run them.', href: '/agence-developpement-ia' },
    ],
    enSavoirPlus: 'Find out more',
    erreurTitre: 'The editions cannot be loaded right now',
    erreurTexte: 'Reload the page to try again. The RSS feed is still available.',
    ctaTitre: 'From reading to practice with your teams',
    ctaTexte: 'The topics followed here become exercises in our training courses and workstreams in our projects: a vendor price change, an AI Act obligation or a new agent is worked through on your own tools. Masteria works in France, across Europe, in the United States and in India.',
    ctaBouton: 'Talk to us about your project',
  },
}

// Écart en jours ouvrés. Sert à ne jamais afficher une mention relative fausse.
function joursOuvresDepuis(iso) {
  const d = new Date(iso + 'T12:00:00')
  // Midi du jour courant : une édition parue ce matin compte zéro jour, même
  // si la page est ouverte l'après-midi.
  const now = new Date()
  now.setHours(12, 0, 0, 0)
  const cur = new Date(d)
  let n = 0
  while (cur < now && n < 400) {
    cur.setDate(cur.getDate() + 1)
    const j = cur.getDay()
    if (j !== 0 && j !== 6) n++
  }
  return n
}
// Rendue après la date de parution, donc sans verbe.
function fraicheur(iso, lang = 'fr') {
  const n = joursOuvresDepuis(iso)
  const en = lang === 'en'
  if (n === 0) return en ? 'this morning' : 'ce matin'
  if (n === 1) return en ? 'yesterday' : 'hier'
  if (n <= 3) return (en ? JOURS_EN : JOURS)[new Date(iso + 'T12:00:00').getDay()]
  return ''
}
const enRetard = iso => joursOuvresDepuis(iso) > 2

// Répartition de l'édition du jour par zone. Elle n'est plus rendue sur les
// éditions datées : la phrase appartient à cette page.
function phraseRepartition(ed, lang = 'fr') {
  const jourMois = ed.dateAffichee.replace(/\s\d{4}$/, '')
  const en = lang === 'en'
  const seg = z => {
    const n = z.nb
    switch (z.cle) {
      case 'europe': return en ? `${n} on Europe and France` : `${n} pour l'Europe et la France`
      case 'international': return en ? `${n} international` : `${n} pour l'international`
      case 'chine': return en ? `${n} on China and Asia` : `${n} pour la Chine et l'Asie`
      case 'recherche': return en ? `${n} research paper${n > 1 ? 's' : ''}` : `${n} publication${n > 1 ? 's' : ''} de recherche`
      case 'bref': return en ? `${n} brief${n > 1 ? 's' : ''}` : `${n} brève${n > 1 ? 's' : ''}`
      default: return en ? `${n} other${n > 1 ? 's' : ''}` : `${n} autre${n > 1 ? 's' : ''}`
    }
  }
  const parts = (ed.zones || []).map(seg)
  const liste = parts.length > 1
    ? `${parts.slice(0, -1).join(', ')} ${en ? 'and' : 'et'} ${parts[parts.length - 1]}`
    : (parts[0] || '')
  const s1 = ed.nbItems > 1 ? 's' : ''
  const s2 = ed.nbSources > 1 ? 's' : ''
  if (en) {
    return `The ${jourMois} edition covers ${ed.nbItems} stor${ed.nbItems > 1 ? 'ies' : 'y'} from ${ed.nbSources} source${ed.nbSources > 1 ? 's' : ''}${liste ? `: ${liste}` : ''}.`
  }
  return `L'édition du ${jourMois} retient ${ed.nbItems} actualité${s1} issue${s1} de ${ed.nbSources} source${s2}${liste ? ` : ${liste}` : ''}.`
}

export default function VeillePage({ lang = 'fr' }) {
  const L = strings(lang)
  const T = TEXTES[lang] || TEXTES.fr
  const base = baseVeille(lang)
  const isDesktop = useIsDesktop()
  const [data, setData] = useState(null)
  const [etat, setEtat] = useState('chargement')
  // Rempli au montage seulement : le HTML prérendu est resservi jusqu'au
  // lendemain ouvré, une mention relative figée mentirait le samedi.
  const [relatif, setRelatif] = useState('')

  useEffect(() => {
    let actif = true
    // Dépend de lang : la bascule FR/EN réutilise le même composant, sans ce
    // rechargement la page anglaise resterait remplie de données françaises.
    setEtat('chargement'); setData(null)
    fetch(`${baseData(lang)}/latest.json`)
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then(d => {
        if (!actif) return
        if (!d || !d.edition || !d.edition.une) throw new Error('payload incomplet')
        setData(d); setEtat('ok')
      })
      .catch(() => actif && setEtat('erreur'))
    return () => { actif = false }
  }, [lang])

  useEffect(() => {
    if (etat !== 'ok' || !data) return
    setRelatif(fraicheur(data.meta.derniereDate, lang))
  }, [etat, data, lang])

  const ok = etat === 'ok' && data
  const ed = ok ? data.edition : null
  const meta = ok ? data.meta : null
  const recentes = (ok && data.recentes) || []
  const sections = ok ? ordonner(ed.sections || []) : []
  const retard = ok && enRetard(meta.derniereDate)
  const jourMois = ok ? ed.dateAffichee.replace(/\s\d{4}$/, '') : ''

  // Un tour d'horizon : la une, puis la première actualité de chaque zone.
  const tour = ok ? [
    ...(ed.une ? [{ id: ed.une.id, titre: ed.une.titre, zone: 'une', libelle: T.aLaUne }] : []),
    ...sections.filter(s => s.format !== 'bref' && s.items.length).map(s => ({
      id: s.items[0].id, titre: s.items[0].titre, zone: s.zone, libelle: s.titre,
    })),
  ].filter(x => x.titre) : []

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'CollectionPage',
      '@id': `${SITE}${base}#collection`,
      name: lang === 'en' ? 'Masteria AI Watch' : 'Veille IA Masteria', url: `${SITE}${base}`,
      inLanguage: inLanguageVeille(lang), isAccessibleForFree: true,
      author: { '@id': `${SITE}/#organization` },
      editor: { '@id': `${SITE}/#mathias-nizan` },
      publisher: { '@id': `${SITE}/#organization` },
    },
    ...(recentes.length ? [{
      '@context': 'https://schema.org', '@type': 'ItemList',
      '@id': `${SITE}${base}#editions`,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: Math.min(recentes.length, 6),
      itemListElement: recentes.slice(0, 6).map((e, i) => ({
        '@type': 'ListItem', position: i + 1,
        name: e.titreEditorial, url: `${SITE}${base}/${e.date}`,
      })),
    }] : []),
  ]

  const recentesAffichees = recentes.slice(1, 6)

  return (
    <div data-veille-pret={etat === 'chargement' ? '0' : '1'} data-veille-etat={etat}>
      <SEOHead
        title={`${T.titre} | Masteria`}
        description={T.description}
        slug={base.slice(1)}
        alternates={alternatesVeille()}
        htmlLang={L.htmlLang}
        keywords={T.keywords}
        breadcrumbs={[{ name: L.accueil, slug: '' }, { name: L.rubrique, slug: base.slice(1) }]}
        datePublished={meta ? meta.premiereDate : undefined}
        dateModified={meta ? meta.derniereDate : undefined}
        ogImage={ok && ed.ogImage ? `${SITE}${ed.ogImage}` : undefined}
        extraJsonLd={jsonLd}
      />

      <VeilleNav lang={lang} active="une" />

      {/* ── 1. HERO SOMBRE : ce qu'est la veille ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
            <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: '#94A3B8' }}>{L.accueil}</Link>
              <span style={{ color: '#3A4658' }}>/</span>
              <span aria-current="page" style={{ color: '#93C5FD', fontWeight: 600 }}>{L.rubrique}</span>
            </nav>
            <VeilleLangSwitch lang={lang} compact />
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Newspaper size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              {ok ? T.kickerEdition(ed.dateLongue.replace(/\s\d{4}$/, ''), retard) : T.kickerDefaut}
              {relatif ? ` · ${relatif}` : ''}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            {L.rubrique}
            <span style={{ display: 'block', marginTop: 12, fontSize: 'clamp(17px, 2.1vw, 24px)', fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.01em', color: '#60A5FA', maxWidth: 820 }}>
              {T.sousTitre}
            </span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            {T.signature} <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>
          </p>

          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            {T.chapeau}
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            {T.intro}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            {ok ? (
              <Link to={`${base}/${ed.date}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                {T.lireEdition(jourMois)}
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            ) : null}
            <Link to={`${base}/publications`} style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              {T.parcourir}
            </Link>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>{T.enBrefTitre}</div>
            <dl style={{ margin: 0 }}>
              {T.enBref(meta, retard, ok ? ed.dateAffichee : '').map(([label, valeur], i) => (
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
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 26px)' }}>{T.erreurTitre}</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 18px' }}>
                {T.erreurTexte}
              </p>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <a href="/veille.xml" style={{ ...aStyle, fontSize: 14.5, fontWeight: 700 }}>{L.fluxRss}</a>
                <Link to="/contact" style={{ ...aStyle, fontSize: 14.5, fontWeight: 700 }}>{L.signalerProbleme}</Link>
                <Link to="/blog" style={{ ...aStyle, fontSize: 14.5, fontWeight: 700 }}>{L.lireArticles}</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 2. L'ÉDITION DU JOUR, EN QUELQUES LIGNES ──
          Le titre éditorial et les titres d'actualités sont des liens vers
          l'édition datée : ils restent dans une <nav>. Le texte de l'édition
          n'est pas repris ici. */}
      {ok && (
        <section id="edition-du-jour" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 140 }}>
          <div style={{ ...wrap, ...(isDesktop ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' } : {}) }}>
            <div style={isDesktop ? {} : { marginBottom: 28 }}>
              <Kicker>{T.jourKicker(retard)}</Kicker>
              <h2 style={h2Style}>{T.jourTitre(ed.dateLongue.replace(/\s\d{4}$/, ''))}</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>{phraseRepartition(ed, lang)}</strong> {T.lecture(ed.tempsLecture)}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
                <Link to={`${base}/${ed.date}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '13px 24px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
                  {T.lireComplete}
                  <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                {ed.analyse && (
                  <Link to={`${base}/${ed.date}#analyse`} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700, textDecoration: 'none' }}>
                    {T.allerAnalyse}
                    <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>

            <nav aria-label={T.sommaireAria} className="u-lift" style={{ ...cardStyle, padding: 'clamp(24px, 3.4vw, 36px)', borderTop: `3px solid ${c}` }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 8 }}>{T.titreEditorialLabel}</div>
              <Link to={`${base}/${ed.date}`} className="veille-lien-fil" style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 800, lineHeight: 1.4, color: '#0A0A0A', textDecoration: 'none', marginBottom: 22 }}>
                {ed.titreEditorial}
              </Link>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {tour.map((it, j) => {
                  const Icon = zoneIcon(it.zone)
                  return (
                    <li key={it.id} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 0', borderTop: j === 0 ? '1px solid #E5E7EB' : '1px solid #F3F4F6' }}>
                      <span aria-hidden="true" style={{ width: 28, height: 28, borderRadius: 8, background: cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon size={15} strokeWidth={2.2} style={{ color: c }} />
                      </span>
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#6B7280', marginBottom: 2 }}>{it.libelle}</span>
                        <Link to={`${base}/${ed.date}#${it.id}`} className="veille-lien-fil" style={{ fontSize: 15.5, fontWeight: 600, color: '#0A0A0A', lineHeight: 1.5, textDecoration: 'none' }}>
                          {it.titre}
                        </Link>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </section>
      )}

      {/* ── 3. POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>{T.pourQuiKicker}</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 820 }}>{T.pourQuiTitre}</h2>
          <p style={{ ...pStyle, margin: '0 0 32px' }}>{T.pourQuiIntro}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20 }}>
            {T.publics.map(p => (
              <div key={p.titre} style={{ ...cardStyle, padding: 26 }}>
                <div style={{ marginBottom: 14 }}><IconTile icon={p.icon} /></div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{p.titre}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LIGNE ÉDITORIALE (ancre sombre unique) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>{T.ligneKicker}</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>{T.ligneTitre}</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px' }}>
            <strong style={{ color: '#fff' }}>{T.ligneReponse}</strong>
          </p>
          <p style={{ fontSize: 16, color: '#B4C0D3', lineHeight: 1.75, margin: '0 0 16px' }}>{T.ligneZones}</p>
          <p style={{ fontSize: 16, color: '#B4C0D3', lineHeight: 1.75, margin: '0 0 22px' }}>{T.ligneAnalyse}</p>
          <Link to="/veille-ia/a-propos" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700, color: '#93C5FD', textDecoration: 'none' }}>
            {T.ligneLien}
            <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── 5. LA RECEVOIR ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>{T.recevoirKicker}</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 820 }}>{T.recevoirTitre}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 20, marginTop: 12 }}>
            {T.canaux.map(k => (
              <div key={k.titre} style={{ ...cardStyle, padding: 26, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 14 }}><IconTile icon={k.icon} /></div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{k.titre}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 14px', flex: 1 }}>{k.desc}</p>
                {k.href && (
                  <a href={k.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700 }}>
                    {k.lien}
                    <Rss size={14} strokeWidth={2.2} aria-hidden="true" />
                  </a>
                )}
                {(k.to || k.toBase) && (
                  <Link to={k.to || `${base}${k.toBase}`} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                    {k.lien}
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ÉDITIONS RÉCENTES (liens, donc <nav>) ── */}
      {recentesAffichees.length > 0 && (
        <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
          <nav aria-label={T.recentesAria} style={wrap}>
            <Kicker>{T.recentesKicker}</Kicker>
            <h2 style={h2Style}>{T.recentesTitre}</h2>
            <div style={{ ...cardStyle, padding: 0, overflow: 'hidden', marginTop: 8 }}>
              {recentesAffichees.map((e, k) => (
                <Link key={e.date} to={`${base}/${e.date}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="veille-ligne-archive" style={{
                    display: 'grid',
                    gridTemplateColumns: isDesktop ? '150px 1fr' : '1fr',
                    gap: isDesktop ? 16 : 4, padding: '18px 24px', borderTop: k === 0 ? 'none' : '1px solid #E5E7EB', alignItems: 'baseline',
                  }}>
                    <time dateTime={e.date} style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>{e.dateCourte}</time>
                    <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.45 }}>{e.titreEditorial}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <Link to={`${base}/publications`} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700, textDecoration: 'none' }}>
                {T.voirArchives}
                <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </section>
      )}

      {/* ── 7. ALLER PLUS LOIN (famille F7) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>{T.plusLoinKicker}</Kicker>
          <h2 style={h2Style}>{T.plusLoinTitre}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {T.ressources.map(r => (
              <Link key={r.href} to={r.href} className="u-lift"
                style={{ ...cardStyle, padding: 26, textDecoration: 'none', transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}>
                <span style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{r.tag}</span>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{r.titre}</h3>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 14px' }}>{r.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: c, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  {T.enSavoirPlus}
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA FINALE ── */}
      <section style={{ background: '#F9FAFB', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
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
              {T.ctaBouton}
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
