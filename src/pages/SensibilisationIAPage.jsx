import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Sparkles, Users, GraduationCap, MapPin, Check, Presentation, Lightbulb,
  ShieldCheck, Landmark, MessagesSquare, BarChart3, Layers, Eye, Scale,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page hub « sensibilisation IA » (slug /sensibilisation-ia), côté FORMATION.
 * Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 : « sensibilisation ia »
 * (90/mois, KD 9, CPC 3,21 $). Jusque-là, la requête était portée par le spoke
 * /formation-sprint-ia-sensibilisation (atelier de 3 h), recentré le même jour sur
 * son nom « Sprint IA Sensibilisation » pour éviter la cannibalisation.
 *
 * RÉPARTITION D'INTENTIONS :
 *  - CETTE page = la DÉMARCHE de sensibilisation : à quoi elle sert, ce qu'elle
 *    contient, ses trois formats (conférence, atelier 3 h, programme par vagues),
 *    son lien avec la littératie IA de l'article 4 ;
 *  - /conference-ia = le format conférence ; /formation-sprint-ia-sensibilisation =
 *    l'atelier de 3 h ; /acculturation-ia = la démarche complète qui suit.
 *
 * INTÉGRITÉ : littératie IA = obligation de MOYENS (art. 4, précisée juillet 2026),
 * jamais « obligatoire sous peine d'amende » ; tarifs = grille Masteria (conférence
 * au forfait demi-journée, atelier 1 980 € HT la session) ; pas de CPF ; aucun
 * client nommé. Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'sensibilisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Sensibilisation IA en entreprise : conférence, atelier, programme | Masteria"
const META_DESC = "Sensibilisation IA en entreprise : faire comprendre l'IA générative à toutes vos équipes, ce qu'elle fait, ce qu'elle ne fait pas, dans quel cadre. Conférence, atelier de 3 h ou programme par vagues, sur vos cas. Qualiopi, OPCO."
const KEYWORDS = "sensibilisation ia, sensibilisation intelligence artificielle, sensibilisation ia entreprise, sensibilisation ia générative, sensibilisation ia salariés, programme de sensibilisation ia, littératie ia sensibilisation, sensibilisation ia collectivité"

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

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: Users, label: "De vingt personnes à toute l'organisation" },
  { icon: Sparkles, label: 'Multi-outils : ChatGPT, Copilot, Claude, Gemini, Mistral' },
  { icon: MapPin, label: 'Sur site, en visio · France, Suisse, Belgique' },
]

const EN_BREF = [
  { label: 'Objectif', value: "Que chaque salarié comprenne ce que l'IA générative fait, ce qu'elle ne fait pas, et dans quel cadre s'en servir" },
  { label: 'Formats', value: "La conférence (1 h à 2 h, public large), l'atelier de 3 h (douze personnes, manipulation), le programme par vagues pour toute l'organisation" },
  { label: 'Contenu', value: "Capacités réelles, limites, démonstrations sur vos documents, données et risques, cadre d'usage, questions ouvertes" },
  { label: 'Cadre', value: "La littératie IA est une obligation de moyens du règlement européen depuis février 2025 ; une sensibilisation documentée en est le premier acte" },
  { label: 'Prix', value: "Conférence au forfait, atelier 1 980 € HT la session pour le groupe, programme sur devis avec tarif dégressif par vagues" },
  { label: 'Et après', value: "Une charte d'usage, puis les ateliers ou parcours par métier pour ceux qui utiliseront l'IA chaque jour" },
]

/* ───────── Les trois formats ───────── */

const FORMATS = [
  { icon: Presentation, title: 'La conférence de sensibilisation', desc: "Une à deux heures devant un public large, en plénière, en séminaire, en COMEX ou en visio : état de l'art sans jargon, démonstrations sur vos documents, cadre, questions. Le format pour lancer.", href: '/conference-ia', cta: 'Voir la conférence IA' },
  { icon: Lightbulb, title: "L'atelier de sensibilisation de 3 heures", desc: "Douze personnes, chacune devant son écran : après une heure de cadrage, chacun manipule sur ses propres cas et repart avec trois usages à tester. C'est le Sprint IA Sensibilisation, le format de masse par vagues.", href: '/formation-sprint-ia-sensibilisation', cta: 'Voir le Sprint IA Sensibilisation' },
  { icon: Layers, title: 'Le programme par vagues', desc: "Pour sensibiliser toute une organisation : une conférence de lancement, puis des ateliers par site ou par métier, des référents internes et une mesure simple des usages à un mois. Il ouvre la démarche d'acculturation.", href: '/acculturation-ia', cta: "Voir l'acculturation IA" },
]

/* ───────── Ce que contient une sensibilisation ───────── */

const CONTENU = [
  { icon: Eye, title: "Ce que l'IA générative fait vraiment", desc: "Rédiger, résumer, structurer, traduire, analyser un tableau, répondre depuis des documents : montré en direct sur vos cas, pas sur une démonstration de salon. Les participants voient l'outil produire, et voient où il s'arrête." },
  { icon: ShieldCheck, title: "Ce qu'elle ne fait pas, et où elle se trompe", desc: "Les réponses inventées avec assurance, les chiffres à vérifier, la mémoire générale confondue avec vos données : la sensibilisation installe le réflexe de relecture avant l'enthousiasme." },
  { icon: Scale, title: 'Les données et le cadre', desc: "Ce qu'on peut confier à un outil grand public, ce qui exige une version entreprise, ce qui ne sort jamais : RGPD, secret des affaires, données clients. Traduit en cinq règles que chacun retient." },
  { icon: MessagesSquare, title: 'Les questions qui fâchent', desc: "Remplacement, surveillance, fiabilité, dépendance : une sensibilisation qui les évite laisse la salle avec ses craintes. Nous y répondons, franchement, et c'est souvent le moment où l'adhésion bascule." },
  { icon: BarChart3, title: 'Trois usages à tester la semaine suivante', desc: "Chaque participant repart avec deux ou trois usages concrets sur l'outil déjà disponible dans l'entreprise, et la règle qui va avec. C'est ce qui distingue une sensibilisation d'une information." },
]

/* ───────── Programme par vagues (timeline) ───────── */

const PROGRAMME = [
  { periode: 'Semaine 1', title: 'Le COMEX et les managers d\'abord', desc: "Une conférence ou une session courte pour la direction et l'encadrement : ce qu'ils doivent porter, le cadre qu'ils fixent, l'exemple qu'ils donnent. Les équipes adoptent ce que leur management pratique." },
  { periode: 'Semaines 2-3', title: 'La conférence de lancement', desc: "Une plénière, ou une par site, ou un webinaire multi-sites : tout le monde entend la même chose, le langage commun s'installe, les questions réelles émergent et alimentent la suite." },
  { periode: 'Semaines 3-8', title: 'Les ateliers par vagues', desc: "Des ateliers de trois heures par métier ou par site, douze personnes, chacun sur ses documents. Les usages qui accrochent deviennent les exemples internes ; les résistances entendues sont traitées, pas ignorées." },
  { periode: 'Semaine 10', title: 'Charte, référents, première mesure', desc: "La charte d'usage en une page, des référents nommés par équipe, un relevé simple des usages à un mois. Puis la décision : s'arrêter là, ou enchaîner sur les parcours par métier pour les équipes prioritaires." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'La sensibilisation obligatoire, sur un ton de conformité', desc: "Présenter la sensibilisation comme une contrainte réglementaire produit une salle qui subit. Le règlement européen demande des moyens, pas une séance punitive : on sensibilise pour rendre du temps aux équipes, et la conformité en découle." },
  { title: 'Le module en ligne que personne ne finit', desc: "Un parcours vidéo de quarante minutes, un quiz, une attestation automatique : la case est cochée, rien n'a changé. Une sensibilisation qui tient passe par la démonstration sur les cas des participants et par leurs questions." },
  { title: 'Sensibiliser sans cadre', desc: "Donner envie sans dire ce qu'on ne fait pas produit, la semaine suivante, des données clients dans un outil grand public. Le cadre d'usage fait partie de la sensibilisation, en vingt minutes, sans jargon juridique." },
  { title: 'Le même contenu pour tous', desc: "Le COMEX, les managers et les équipes terrain n'ont ni les mêmes questions ni le même point de départ. Une trame commune, des exemples et un ton adaptés à chaque public." },
  { title: 'Sensibiliser une fois, puis rien', desc: "Une belle session, pas de référent, pas de charte, pas de suite : l'élan retombe en trois semaines. La suite se décide avant la sensibilisation, même modeste : une charte et un point à un mois suffisent souvent." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Qu'est-ce qu'une sensibilisation à l'IA en entreprise ?", a: "C'est le premier temps d'une montée en compétence : une conférence, un atelier court ou un programme par vagues qui fait comprendre à toutes les équipes ce que l'IA générative fait, ce qu'elle ne fait pas, quelles données on peut lui confier et dans quel cadre l'utiliser. Elle se distingue de la formation, qui installe des compétences évaluées sur un ou deux jours, par métier. Chez Masteria, la sensibilisation repose sur des démonstrations sur vos documents, répond aux questions qui fâchent, et se conclut par trois usages à tester la semaine suivante et une règle d'usage." },
  { q: "La sensibilisation à l'IA est-elle obligatoire ?", a: "Le règlement européen sur l'IA impose, depuis le 2 février 2025, une obligation de littératie IA (article 4) : les organisations qui utilisent des systèmes d'IA doivent soutenir la montée en compétence des personnes qui les manipulent. Le paquet législatif de juillet 2026 a précisé qu'il s'agit d'une obligation de moyens : démontrer des actions de sensibilisation et de formation adaptées, sans garantir un niveau individuel. Une sensibilisation documentée, avec objectifs, contenu et attestation, en est le premier acte. Personne ne devrait vous vendre une séance sous la menace d'une amende." },
  { q: "Quel format choisir : conférence, atelier ou programme ?", a: "La conférence pour un public large qui doit d'abord comprendre : une à deux heures, en plénière, en COMEX ou en visio. L'atelier de trois heures pour un groupe de douze qui doit manipuler et repartir avec des usages installés. Le programme par vagues quand toute l'organisation est concernée : une conférence de lancement, puis des ateliers par site ou par métier, des référents et une mesure. Le cadrage, gratuit, dit lequel convient ; souvent les trois s'enchaînent." },
  { q: "Combien de personnes peut-on sensibiliser ?", a: "Toute l'organisation, par vagues. La conférence n'a pas de jauge : de vingt personnes à plusieurs centaines, ou sans limite en webinaire. L'atelier tient à douze personnes pour que chacun manipule. Un programme combine les deux : une conférence pour tous, puis des ateliers de douze par vagues, avec un tarif dégressif à partir de cinq sessions. Nous avons sensibilisé des organisations de toutes tailles, du comité de direction d'un groupe aux équipes terrain d'une PME." },
  { q: "Sur quels outils porte la sensibilisation ?", a: "Sur ceux que vos équipes utiliseront réellement : ChatGPT, Microsoft Copilot, Claude, Gemini ou Mistral, dans la version que l'entreprise a déployée. Si rien n'est déployé, nous montrons plusieurs outils sur les mêmes cas, ce qui donne à la direction une base de choix. Nous sommes indépendants des éditeurs : aucune sensibilisation n'est sponsorisée, et aucune licence n'est vendue à la fin." },
  { q: "La sensibilisation est-elle personnalisée ?", a: "Oui, par les exemples. La trame est commune parce qu'elle fonctionne ; les démonstrations se font sur vos documents, anonymisés, transmis avant la session : un compte rendu, un mail, un tableau, une procédure, une offre. Le ton et le niveau s'adaptent au public, du COMEX aux équipes de terrain. Une sensibilisation sur des exemples génériques est une sensibilisation dont personne ne se souvient." },
  { q: "Combien coûte une sensibilisation à l'IA ?", a: "La conférence se chiffre au forfait, sur une demi-journée d'intervention, préparation sur vos cas comprise. L'atelier de trois heures coûte 1 980 € HT la session pour le groupe, jusqu'à douze participants, avec un tarif dégressif à partir de cinq sessions. Le programme par vagues se chiffre sur devis à partir de ces briques. Les frais de déplacement s'ajoutent au réel hors de Lyon ; la visio n'en comporte pas. Le devis arrive sous 24 heures après un cadrage gratuit." },
  { q: "La sensibilisation est-elle finançable par l'OPCO ?", a: "Oui, quand elle est construite comme une action de formation : objectifs pédagogiques, contenu, émargement, attestation. Masteria est certifiée Qualiopi et prépare le dossier avec vous ; la prise en charge dépend de votre OPCO et de votre branche, nous la confirmons au cadrage. Pas d'éligibilité CPF. Une conférence purement événementielle, ouverte à un public externe, relève d'une prestation classique." },
  { q: "Faut-il sensibiliser les dirigeants séparément ?", a: "Oui, et en premier. Le COMEX et les managers ont des questions différentes : ce qu'il faut décider, le cadre à poser, l'exemple à donner, les risques à arbitrer. Une session dédiée, courte, avant le lancement pour les équipes, fait que la démarche est portée et non subie. Pour un comité qui veut aller plus loin, la formation IA COMEX prend le relais sur une matinée." },
  { q: "Que se passe-t-il après la sensibilisation ?", a: "Le minimum : une charte d'usage en une page et un point à un mois sur ce qui a pris. Souvent : des référents nommés, puis des ateliers ou des parcours par métier pour les équipes qui utiliseront l'IA chaque jour. C'est la démarche d'acculturation, dont la sensibilisation est le premier temps. Nous ne conditionnons pas la sensibilisation à une suite ; nous la recommandons quand elle est utile, et nous disons quand elle ne l'est pas." },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Sensibilisation IA en entreprise (Masteria)',
  description: META_DESC,
  url: 'https://www.master-ia.fr/sensibilisation-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/sensibilisation-ia#webpage' },
  serviceType: "Sensibilisation à l'intelligence artificielle générative",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Suisse' }, { '@type': 'Country', name: 'Belgique' }],
  audience: { '@type': 'EducationalAudience', educationalRole: "Dirigeants, managers, équipes opérationnelles", audienceType: 'B2B' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formats de sensibilisation IA',
    itemListElement: FORMATS.map(f => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: f.title, description: f.desc } })),
  },
}

const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/sensibilisation-ia#termes',
  name: 'Sensibilisation IA : les termes',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Sensibilisation IA', description: "Premier temps d'une montée en compétence : conférences, ateliers courts ou programme par vagues qui font comprendre ce que l'IA générative fait, ce qu'elle ne fait pas, et dans quel cadre l'utiliser, sans viser encore l'autonomie des participants." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Capacité à comprendre, utiliser et évaluer de façon critique les systèmes d'IA. L'article 4 du règlement européen sur l'IA en fait une obligation de moyens pour les organisations depuis le 2 février 2025." },
    { '@type': 'DefinedTerm', name: 'Acculturation IA', description: "Démarche complète qui suit la sensibilisation : formation par métier, expérimentation encadrée, référents internes, mesure des usages." },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/sensibilisation-ia#article',
  headline: "Sensibilisation IA en entreprise : faire comprendre l'IA à toutes les équipes, dans un cadre",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/sensibilisation-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Littératie IA', description: "Capacité à comprendre, utiliser et évaluer de façon critique les systèmes d'IA (article 4 du règlement européen)" },
  ],
}

const PAGE_CITATIONS = [
          { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle (article 4, littératie)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
          { name: "Acculturer à l'IA : partir du réel, expérimenter, partager — Mission innovation, economie.gouv.fr", url: 'https://www.economie.gouv.fr/mission-innovation/acculturer-lia-partir-du-reel-experimenter-partager' },
        ]

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

export default function SensibilisationIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation intelligence artificielle', slug: 'formation-intelligence-artificielle' },
    { name: 'Sensibilisation IA', slug: SLUG },
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
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[serviceJsonLd, definitionsJsonLd, articleJsonLd]}
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Sensibilisation IA</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Formation · Sensibilisation IA</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Sensibilisation IA en entreprise :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>faire comprendre l'IA à toutes les équipes, dans un cadre</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La sensibilisation IA est le premier temps d'une montée en compétence : <strong style={{ color: '#fff', fontWeight: 700 }}>faire comprendre à chaque salarié ce que l'IA générative fait, ce qu'elle ne fait pas, quelles données on peut lui confier et dans quel cadre s'en servir</strong>. En conférence, en atelier de trois heures ou en programme par vagues, sur vos cas. Certifiée Qualiopi, finançable par votre OPCO.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Une sensibilisation ne forme pas ; elle ouvre. Bien faite, elle installe un langage commun, fait tomber les idées reçues dans les deux sens et évite les accidents de la semaine suivante. Elle répond aussi, comme premier acte, à l'obligation de littératie IA du règlement européen, sans qu'il faille agiter des amendes.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Cadrer une sensibilisation
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#formats" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Voir les trois formats</a>
          </div>
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 110px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LES TROIS FORMATS (éditorial asymétrique) ── */}
      <section id="formats" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les formats</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Quel format de sensibilisation IA pour quel public ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Trois formats, du plus large au plus profond : la conférence pour faire comprendre à un public nombreux, l'atelier de trois heures pour faire manipuler douze personnes, le programme par vagues pour sensibiliser toute l'organisation avec des référents et une mesure. Le cadrage, gratuit, dit lequel convient.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour les équipes qui utiliseront l'IA chaque jour, la sensibilisation ouvre sur les <Link to="/formation-intelligence-artificielle" style={aStyle}>formations par métier</Link>.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {FORMATS.map((item, i) => (
                <div key={i} style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: 14 }}><IconTile icon={item.icon} /></div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 14px', flex: 1 }}>{item.desc}</p>
                  <Link to={item.href} style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700 }}>
                    {item.cta}
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </div>
              ))}
              <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                <div style={{ marginBottom: 14 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Le cadre : la littératie IA</h3>
                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                  Depuis février 2025, l'article 4 du règlement européen demande aux organisations de soutenir la montée en compétence IA de leurs équipes, une obligation de moyens précisée en juillet 2026. Une sensibilisation documentée en est le premier acte ; elle ne suffit pas seule pour ceux qui utilisent l'IA chaque jour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENU (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le contenu</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Que contient une sensibilisation à l'IA qui change quelque chose ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Cinq blocs, quel que soit le format : ce que l'IA fait vraiment, montré sur vos documents ; ce qu'elle ne fait pas et où elle se trompe ; les données et le cadre ; les questions qui fâchent ; trois usages à tester la semaine suivante. Le reste est de la décoration.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
            {CONTENU.map(item => {
              const Icon = item.icon
              return (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME PAR VAGUES ── */}
      <section id="programme" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Toute l'organisation</Kicker>
          <h2 style={h2Style}>Comment sensibiliser toute une entreprise à l'IA ?</h2>
          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Par vagues, dans un ordre qui a fait ses preuves : le COMEX et les managers d'abord, une conférence de lancement, des ateliers de trois heures par métier ou par site, puis une charte, des référents et une première mesure. Dix semaines pour une organisation moyenne ; le rythme s'ajuste, l'ordre reste.</strong>
          </p>
          <div style={{ position: 'relative', marginTop: 12 }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {PROGRAMME.map((step, i) => (
              <div key={step.periode} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 18px' : (i === PROGRAMME.length - 1 ? '18px 0 0' : '18px 0') }}>
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
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '24px 0 0' }}>
            Quand l'organisation veut aller au-delà de la sensibilisation, parcours par métier, expérimentation encadrée, mesure des usages, c'est la démarche d'<Link to="/acculturation-ia" style={aStyle}>acculturation IA</Link>, dont ce programme est le premier temps.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Les cinq erreurs qui font rater une sensibilisation IA</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La sensibilisation vendue comme une contrainte, le module en ligne que personne ne finit, la séance sans cadre, le même contenu pour tous, et l'événement sans suite. Cinq erreurs observées depuis 2022, en sensibilisant du COMEX aux équipes terrain, et qui se corrigent toutes avant la première session.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {ERREURS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: '3px solid #DC2626' }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Des briques au forfait, finançables par votre OPCO</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La conférence se chiffre au forfait, sur une demi-journée d'intervention, préparation sur vos cas comprise. L'atelier de trois heures coûte 1 980 € HT la session pour le groupe, jusqu'à douze participants, avec un tarif dégressif à partir de cinq sessions. Le programme par vagues se compose de ces briques, sur devis. Chaque session est une action de formation certifiée Qualiopi, finançable par votre OPCO ; nous préparons le dossier avec vous. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Conférence au forfait, préparation comprise', "Atelier 1 980 € HT la session, jusqu'à 12 personnes", 'Tarif dégressif à partir de 5 sessions', 'Qualiopi : finançable OPCO, devis sous 24 h'].map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Sensibilisation IA : les questions fréquentes</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>Vous ne trouvez pas votre réponse ici ?</p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>{FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} color={c} />)}</div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Pour aller plus loin</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Les formats de la sensibilisation, la démarche qui la prolonge et le cadre qui la sécurise.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Conférence IA', href: '/conference-ia', tag: 'Format', desc: "Une à deux heures en plénière, séminaire, COMEX ou visio, avec démonstrations sur vos cas." },
              { label: 'Sprint IA Sensibilisation', href: '/formation-sprint-ia-sensibilisation', tag: 'Atelier 3 h', desc: "Douze personnes, chacune devant son écran, trois usages à tester en sortant." },
              { label: 'Ateliers IA', href: '/atelier-intelligence-artificielle', tag: 'Pratiquer', desc: "Les six ateliers de 3 h à une journée : découverte, métier, prompts, cas d'usage, managers, données." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'La démarche', desc: "Ce qui suit la sensibilisation : parcours par métier, expérimentation, référents, mesure." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Direction', desc: "La matinée qui aligne le comité avant de lancer la sensibilisation des équipes." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Cadre', desc: "La règle d'usage en une page qui suit toute sensibilisation." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Conformité', desc: "Pour aller au fond du règlement européen : obligations réelles, calendrier, littératie IA." },
              { label: 'Formation IA débutant', href: '/formation-ia-debutant', tag: 'Sans prérequis', desc: "Pour les équipes qui partent de loin, y compris sur l'informatique." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Sensibilisation IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Donnons un langage commun à vos équipes</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous votre effectif, les outils en place et ce que la direction attend. Nous revenons vers vous sous 24 heures avec le format recommandé, conférence, atelier ou programme par vagues, et le devis, prise en charge OPCO comprise.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander une sensibilisation IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Lyon, France, Suisse, Belgique, ou en visio</p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
