import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, CalendarDays, MapPin, Users, Check, Compass, ClipboardCheck,
  Mic, Search, ExternalLink, Sparkles, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page ressource « salons IA » (slug /salons-ia), agenda des salons et conférences
 * IA, data et industrie en France, saison 2026-2027. Créée le 2026-09-04 depuis
 * l'analyse Semrush du 03/09 : « salon big data » (390, KD 12), « salon de la data »
 * (170), « salon ia paris » (140, KD 14), « salon big data et ia » (110), « big data
 * salon » (110), « salon industrie 2026 » (110), « salon paris industrie » (90),
 * « conférence ia » (260, page dédiée). Intention navigationnelle : la page sert
 * d'actif liable (chantier autorité) et renvoie vers les offres.
 *
 * INTÉGRITÉ : chaque date a été vérifiée le 2026-09-04 sur le site officiel de
 * l'événement (URL en source) ; la page le dit et invite à revérifier avant de
 * réserver. Aucune fréquentation « estimée » inventée : les chiffres d'affluence
 * sont ceux annoncés par les organisateurs, présentés comme tels ou omis.
 * Slug sans millésime : la page se met à jour chaque saison.
 * Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'salons-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const VERIFIED_ON = '4 septembre 2026'
const META_TITLE = "Salons IA 2026-2027 : agenda des salons data, IA et industrie en France | Masteria"
const META_DESC = "Agenda des salons IA, big data et industrie en France pour 2026-2027 : Big Data & AI Paris, SIDO Lyon, Salon de la Data Nantes, World AI Cannes Festival, Global Industrie, Documation, VivaTech. Dates vérifiées, et comment préparer sa visite."
const KEYWORDS = "salon ia, salon ia paris, salon big data, salon big data et ia, salon de la data, big data salon, salon industrie 2026, salon industrie 2027, salon intelligence artificielle, agenda salons ia 2026 2027, conférence ia"

/* ───────── Styles ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

/* ───────── Les salons (dates vérifiées le 2026-09-04 sur les sites officiels) ───────── */

const SALONS = [
  {
    name: 'Big Data & AI Paris 2026',
    start: '2026-09-15', end: '2026-09-16', dateLabel: '15 et 16 septembre 2026',
    city: 'Paris', venue: 'Paris Expo Porte de Versailles',
    theme: 'Data, IA, cloud et gouvernance', tag: 'Data et IA',
    url: 'https://www.bigdataparis.com/',
    pourQui: "Directions data et SI, DSI, responsables IA, éditeurs et intégrateurs.",
    desc: "Le grand rendez-vous parisien de la donnée et de l'IA en entreprise : infrastructures, cloud, gouvernance, cybersécurité, IA générative et applications métier, avec un programme dense de conférences et d'ateliers. L'édition 2026 est centrée sur l'industrialisation de l'IA.",
  },
  {
    name: 'SIDO Lyon 2026',
    start: '2026-09-16', end: '2026-09-17', dateLabel: '16 et 17 septembre 2026',
    city: 'Lyon', venue: 'Cité Internationale de Lyon',
    theme: 'IoT, IA, robotique et XR', tag: 'Industrie et IA',
    url: 'https://www.sido-lyon.com/',
    pourQui: "Industriels, directions techniques, intégrateurs, chercheurs.",
    desc: "Le salon lyonnais de la convergence entre objets connectés, IA, robotique et réalité étendue, orienté industrie et production. Le bon terrain pour voir l'IA au contact des machines et des capteurs, à deux pas de nos bureaux.",
  },
  {
    name: "Salon de la Data et de l'IA 2026",
    start: '2026-09-22', end: '2026-09-22', dateLabel: '22 septembre 2026',
    city: 'Nantes', venue: 'Cité des Congrès de Nantes',
    theme: 'Data et IA, secteur privé et public', tag: 'Data et IA',
    url: 'https://salondata.fr/',
    pourQui: "Décideurs, experts et utilisateurs de la donnée, entreprises et collectivités du Grand Ouest.",
    desc: "Une journée gratuite, onzième édition, dédiée aux professionnels de la donnée du privé comme du public, accessible aussi en ligne. Le rendez-vous data de la métropole nantaise, dans le cadre de la Nantes Digital Week.",
  },
  {
    name: 'World AI Cannes Festival 2027',
    start: '2027-02-10', end: '2027-02-11', dateLabel: '10 et 11 février 2027',
    city: 'Cannes', venue: 'Palais des Festivals et des Congrès',
    theme: 'IA, décideurs et leaders internationaux', tag: 'IA',
    url: 'https://waicf.com/',
    pourQui: "Dirigeants, directions innovation, investisseurs, chercheurs.",
    desc: "Le festival international de l'IA sur la Croisette : conférences de haut niveau, exposants internationaux, rencontres entre décideurs et chercheurs. Plus stratégique que technique, utile pour prendre de la hauteur.",
  },
  {
    name: 'Global Industrie Lyon 2027',
    start: '2027-03-15', end: '2027-03-18', dateLabel: '15 au 18 mars 2027',
    city: 'Lyon', venue: 'Eurexpo Lyon',
    theme: "Industrie, automatisation, digitalisation et IA", tag: 'Industrie',
    url: 'https://www.global-industrie.com/',
    pourQui: "Industriels de toutes tailles, sous-traitants, bureaux d'études, méthodes et maintenance.",
    desc: "Le premier salon industriel français, en alternance Lyon et Paris : automatisation, digitalisation et IA, énergie, process et services. Quatre jours pour voir ce que l'IA change réellement dans un atelier, et rencontrer ses pairs de la filière.",
  },
  {
    name: 'All4Customer Paris 2027',
    start: '2027-03-23', end: '2027-03-25', dateLabel: '23 au 25 mars 2027',
    city: 'Paris', venue: 'Paris Expo Porte de Versailles',
    theme: 'Expérience client, IA, marketing digital, e-commerce, data', tag: 'Relation client',
    url: 'https://www.all4customer-paris.com/',
    pourQui: "Directions relation client, marketing, e-commerce, service client.",
    desc: "Le salon de l'expérience client et du marketing, où l'IA occupe désormais une place centrale : agents conversationnels, automatisation du support, personnalisation. Pour les équipes qui parlent aux clients.",
  },
  {
    name: 'Documation 2027',
    start: '2027-06-09', end: '2027-06-10', dateLabel: '9 et 10 juin 2027',
    city: 'Paris', venue: 'Paris Expo Porte de Versailles',
    theme: "Gestion de l'information, GED, processus documentaires", tag: 'Documentaire',
    url: 'https://salon-documation.com/',
    pourQui: "Responsables documentaires, DSI, qualité, juridique, directions administratives.",
    desc: "Le salon du management de l'information et des processus documentaires, où les éditeurs de GED présentent leurs couches d'IA. Le bon endroit pour comparer un assistant documentaire du marché à une solution sur mesure.",
  },
  {
    name: 'VivaTech 2027',
    start: '2027-06-16', end: '2027-06-19', dateLabel: '16 au 19 juin 2027',
    city: 'Paris', venue: 'Paris Expo Porte de Versailles',
    theme: 'Innovation, startups, technologie', tag: 'Tech',
    url: 'https://vivatech.com/',
    pourQui: "Dirigeants, directions innovation, grands comptes, startups, grand public le dernier jour.",
    desc: "Le plus grand événement technologique d'Europe, où l'IA est partout depuis plusieurs éditions. Foisonnant, parfois épuisant : on y va avec une liste de stands et de conférences, pas pour flâner.",
  },
]

/* ───────── Choisir ───────── */

const CHOISIR = [
  { icon: Target, title: 'Un objectif écrit avant de réserver', desc: "Rencontrer trois éditeurs pour un besoin précis, écouter deux retours d'expérience de votre secteur, voir un concurrent : un salon sans objectif coûte une journée et rapporte des goodies. L'objectif tient en une ligne, et il décide du salon." },
  { icon: Users, title: 'Le public du salon est votre public', desc: "Big Data & AI Paris parle aux directions data, Global Industrie aux ateliers, All4Customer aux services clients, Documation aux fonctions documentaires. Le meilleur salon est celui où vos pairs sont, pas le plus grand." },
  { icon: Search, title: 'Le programme avant le hall', desc: "Les conférences et les retours d'expérience valent plus que les stands : un témoignage d'une entreprise comparable donne en trente minutes ce que dix démonstrations ne donnent pas. Le programme se lit une semaine avant, et l'agenda se remplit à l'avance." },
]

/* ───────── Préparer sa visite ───────── */

const PREPARER = [
  { periode: 'Avant', title: 'Une liste, pas un badge', desc: "Trois stands à voir, deux conférences à suivre, une question à poser à chaque éditeur (« montrez-moi ça sur mon document »). Un document réel anonymisé dans la poche, pour tester les démonstrations sur autre chose que l'exemple du commercial." },
  { periode: 'Pendant', title: 'Tester, noter, ne rien signer', desc: "Chaque démonstration se teste sur votre cas, chaque promesse se note avec le nom de la personne. Aucun engagement sur un stand : les offres de salon existent toujours la semaine suivante, et le cadrage se fait au calme." },
  { periode: 'Après', title: 'Une page de restitution, une décision', desc: "Ce qui a été vu, ce qui est crédible, ce qui mérite un cadrage, ce qu'on écarte. Une page, diffusée à la direction dans la semaine. C'est ce qui distingue une visite utile d'une journée agréable." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Quels sont les principaux salons IA en France en 2026 et 2027 ?", a: "Pour la saison 2026-2027, les rendez-vous vérifiés sont Big Data & AI Paris (15 et 16 septembre 2026, Porte de Versailles), SIDO Lyon (16 et 17 septembre 2026, Cité Internationale), le Salon de la Data et de l'IA de Nantes (22 septembre 2026, Cité des Congrès), le World AI Cannes Festival (10 et 11 février 2027, Palais des Festivals), Global Industrie à Lyon (15 au 18 mars 2027, Eurexpo), All4Customer Paris (23 au 25 mars 2027), Documation (9 et 10 juin 2027) et VivaTech (16 au 19 juin 2027, Porte de Versailles). Les dates ont été vérifiées sur les sites officiels ; revérifiez avant de réserver." },
  { q: "Quel salon big data et IA choisir à Paris ?", a: "Big Data & AI Paris, en septembre, est le salon de référence pour les directions data et SI : infrastructures, gouvernance, IA générative, applications métier. VivaTech, en juin, est plus large et plus grand public ; on y va pour l'innovation et les rencontres, moins pour choisir un outil. All4Customer, en mars, convient aux équipes relation client et marketing. Le choix dépend de qui vous êtes et de ce que vous cherchez, pas de la taille du salon." },
  { q: "Existe-t-il un salon IA à Lyon ?", a: "Deux rendez-vous majeurs. SIDO Lyon, en septembre, sur la convergence entre objets connectés, IA, robotique et réalité étendue, orienté industrie. Global Industrie, en mars 2027 à Eurexpo, le premier salon industriel français, où l'automatisation, la digitalisation et l'IA occupent une place centrale. Masteria est basée à Lyon et intervient dans les deux contextes, en visite avec des clients ou en conférence de retour de salon." },
  { q: "Un salon suffit-il pour lancer un projet IA ?", a: "Non. Un salon donne une vue du marché, des contacts et des idées ; il ne dit pas ce dont votre entreprise a besoin. Le passage utile après un salon est un cadrage : quels processus, quelles données, quel outil, quel gain attendu. C'est ce que fait un diagnostic IA d'une journée, ou un atelier cas d'usage avec la direction. Les entreprises qui achètent sur un stand reviennent souvent nous voir six mois plus tard avec une licence inutilisée." },
  { q: "Masteria est-elle présente sur ces salons ?", a: "Nous les visitons, avec des clients quand ils le souhaitent, et nous intervenons en conférence de retour de salon dans les entreprises qui veulent transformer ce qu'elles ont vu en décisions. Nous n'y tenons pas de stand : nous ne vendons ni licence ni plateforme. Si vous voulez préparer une visite ou en tirer une restitution, le cadrage est gratuit." },
  { q: "Ces dates sont-elles fiables ?", a: `Chaque date de cette page a été vérifiée le ${VERIFIED_ON} sur le site officiel de l'événement, dont le lien figure sur chaque fiche. Les organisateurs peuvent modifier une date ou un lieu ; vérifiez sur le site officiel avant de réserver un déplacement. La page est mise à jour à chaque saison, et la date de vérification est indiquée.` },
]

/* ───────── JSON-LD ───────── */

const eventsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Salons IA, data et industrie en France, saison 2026-2027',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: SALONS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Event',
      name: s.name,
      startDate: s.start,
      endDate: s.end,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@type': 'Place', name: s.venue, address: { '@type': 'PostalAddress', addressLocality: s.city, addressCountry: 'FR' } },
      description: s.desc,
      url: s.url,
    },
  })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/salons-ia#article',
  headline: 'Salons IA 2026-2027 : agenda des salons data, IA et industrie en France',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/salons-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Salon professionnel', sameAs: 'https://fr.wikipedia.org/wiki/Salon_professionnel' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

const PAGE_CITATIONS = SALONS.map(s => ({ name: `${s.name} : site officiel (dates vérifiées le ${VERIFIED_ON})`, url: s.url }))

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

function monthLabel(iso) {
  const d = new Date(iso + 'T12:00:00')
  return d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '')
}
function dayLabel(iso) {
  return String(new Date(iso + 'T12:00:00').getDate())
}

export default function SalonsIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Veille IA', slug: 'veille-ia' },
    { name: 'Salons IA 2026-2027', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        datePublished="2026-09-04"
        dateModified="2026-09-04"
        speakable={['#geo-summary']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[eventsJsonLd, articleJsonLd]}
      />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/veille-ia" style={{ color: '#94A3B8' }}>Veille IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Salons IA 2026-2027</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <CalendarDays size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Ressource · Agenda</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Salons IA 2026-2027 :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>l'agenda des salons data, IA et industrie en France</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Dates vérifiées le {VERIFIED_ON}
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Huit rendez-vous pour la saison 2026-2027, vérifiés sur les sites officiels : <strong style={{ color: '#fff', fontWeight: 700 }}>Big Data & AI Paris, SIDO Lyon, le Salon de la Data et de l'IA de Nantes, le World AI Cannes Festival, Global Industrie, All4Customer, Documation et VivaTech</strong>. Avec, pour chacun, à qui il s'adresse, et une méthode pour en tirer une décision plutôt qu'une journée.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Nous n'y tenons pas de stand : nous ne vendons ni licence ni plateforme. Nous les visitons, parfois avec des clients, et nous aidons les entreprises à transformer ce qu'elles y ont vu en cadrage. Les dates changent ; vérifiez sur le site officiel avant de réserver.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#agenda" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Voir l'agenda
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <a href="#preparer" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Préparer sa visite</a>
          </div>
        </div>
      </section>

      {/* ── AGENDA ── */}
      <section id="agenda" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>L'agenda</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Les salons IA, data et industrie de la saison 2026-2027</h2>
          <p style={answerStyle}>
            <strong>Par ordre de date. Chaque fiche renvoie au site officiel de l'événement, où la date a été vérifiée le {VERIFIED_ON}. Les affluences et les contenus sont ceux annoncés par les organisateurs.</strong>
          </p>
          <div style={{ display: 'grid', gap: 18, marginTop: 12 }}>
            {SALONS.map(s => (
              <article key={s.name} style={{ ...cardStyle, padding: 'clamp(20px, 3vw, 28px)', display: 'flex', gap: 'clamp(16px, 3vw, 28px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div aria-hidden="true" style={{ width: 72, flexShrink: 0, textAlign: 'center', background: cLight, borderRadius: 14, padding: '10px 6px' }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 900, color: c, lineHeight: 1 }}>{dayLabel(s.start)}</div>
                  <div style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', color: c, letterSpacing: '0.06em', marginTop: 4 }}>{monthLabel(s.start)} {s.start.slice(0, 4)}</div>
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
                    <span style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700 }}>{s.tag}</span>
                    <span style={{ fontSize: 13, color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: 5 }}><MapPin size={13} aria-hidden="true" />{s.venue}, {s.city}</span>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 19, marginBottom: 4 }}>{s.name}</h3>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', marginBottom: 8 }}><time dateTime={s.start}>{s.dateLabel}</time> · {s.theme}</div>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>{s.desc}</p>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '0 0 12px' }}><strong style={{ color: '#374151' }}>Pour qui :</strong> {s.pourQui}</p>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700 }}>
                    Site officiel
                    <ExternalLink size={13} strokeWidth={2.4} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Un salon manque ? Écrivez-nous : nous ajoutons les événements professionnels en France dont la date est publiée sur un site officiel, et nous n'ajoutons rien d'autre.
          </p>
        </div>
      </section>

      {/* ── CHOISIR ── */}
      <section id="choisir" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Choisir</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Quel salon IA choisir, et pour quoi faire ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px', background: '#fff' }}>
                <strong>Le bon salon est celui où sont vos pairs et où le programme répond à une question que vous avez écrite avant de réserver. Le plus grand salon n'est pas le plus utile ; le plus proche non plus.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour une vue continue de ce qui change entre deux salons, notre <Link to="/veille-ia" style={aStyle}>veille IA quotidienne</Link> fait le tri.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {CHOISIR.map(card => {
                const Icon = card.icon
                return (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                      <h3 style={{ ...h3Style, fontSize: 15.5 }}>{card.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRÉPARER SA VISITE ── */}
      <section id="preparer" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Préparer sa visite</Kicker>
          <h2 style={h2Style}>Comment tirer une décision d'un salon plutôt qu'une journée ?</h2>
          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Une liste avant, des tests sur vos documents pendant, une page de restitution après. Trois gestes qui prennent deux heures au total et qui font la différence entre une visite et une dépense.</strong>
          </p>
          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {PREPARER.map((step, i) => (
              <div key={step.periode} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 18px' : (i === PREPARER.length - 1 ? '18px 0 0' : '18px 0') }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>{step.periode}</div>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 740 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ET APRÈS (offres) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Après le salon</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Ce que Masteria fait autour des salons</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Nous ne tenons pas de stand. Nous aidons les entreprises avant et après : préparer une visite avec un objectif, puis transformer ce qui a été vu en cadrage, en conférence de retour de salon ou en atelier cas d'usage.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: Mic, title: 'La conférence de retour de salon', desc: "Une heure devant l'équipe ou le comité : ce que le salon a montré, ce qui est crédible pour vous, ce qui relève du bruit, et les trois usages à tester. Sur vos cas, pas sur le catalogue des exposants.", href: '/conference-ia', cta: 'Voir la conférence IA' },
              { icon: Compass, title: "L'atelier cas d'usage avec la direction", desc: "Une demi-journée pour identifier, qualifier et prioriser les cas d'usage repérés : où le temps se perd, ce que l'IA peut prendre, ce qui engage. Trois cas à lancer, et ce qu'on écarte.", href: '/atelier-intelligence-artificielle', cta: 'Voir les ateliers IA' },
              { icon: ClipboardCheck, title: "Le diagnostic IA d'une journée", desc: "Quand un salon a donné des idées, le diagnostic dit lesquelles tiennent chez vous : processus, données, outils, budget. Le point d'entrée du conseil, avant tout achat de licence.", href: '/diagnostic-ia', cta: 'Voir le diagnostic IA' },
            ].map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, display: 'flex', flexDirection: 'column' }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: c }} />
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{card.desc}</p>
                  <Link to={card.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700 }}>
                    {card.cta}
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Salons IA : les questions fréquentes</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Un salon à ajouter, une date à corriger ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrivez-nous
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Pour aller plus loin</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Entre deux salons : la veille, les comparatifs et les points d'entrée.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Veille IA quotidienne', href: '/veille-ia', tag: 'Chaque jour', desc: "Ce qui change chez les éditeurs et dans la réglementation, trié et commenté, sans bruit." },
              { label: 'Outils de veille IA', href: '/outils-veille-ia', tag: 'Méthode', desc: "Comment organiser sa propre veille, avec quels outils et quel rythme." },
              { label: 'Meilleure IA entreprise 2026', href: '/meilleure-ia-entreprise-2026', tag: 'Comparatif', desc: "Les cinq outils comparés sur des critères d'entreprise, avant de visiter les stands." },
              { label: 'Conférence IA', href: '/conference-ia', tag: 'Format', desc: "La conférence en entreprise, y compris en retour de salon : plénière, COMEX, visio." },
              { label: 'IA pour l\'industrie', href: '/ia-industrie', tag: 'Secteur', desc: "Ce que l'IA change dans un atelier, pour préparer Global Industrie ou SIDO." },
              { label: 'Assistant documentaire IA', href: '/assistant-documentaire-ia', tag: 'Solution', desc: "Sur mesure ou couche IA d'une GED : de quoi comparer à Documation." },
              { label: 'Agence IA Lyon', href: '/agence-ia-lyon', tag: 'Local', desc: "Nos bureaux, à deux pas de SIDO et d'Eurexpo." },
              { label: 'Agence IA Nantes', href: '/agence-ia-nantes', tag: 'Local', desc: "Pour les entreprises du Grand Ouest, autour du Salon de la Data." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.borderColor = c} onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{rel.tag}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>{rel.label}</h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>En savoir plus<ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FounderNote />

      {/* ── CTA ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Après le salon</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Transformons ce que vous avez vu en décision</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous quel salon vous avez visité ou prévoyez de visiter, et ce que vous en attendez. Nous revenons vers vous sous 24 heures avec le format utile : conférence de retour, atelier cas d'usage ou diagnostic.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Réponse sous 24 h · Cabinet spécialisé IA depuis 2022 · Lyon, France, Suisse, Belgique</p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
