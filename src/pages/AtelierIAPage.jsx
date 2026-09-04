import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Lightbulb, Users, GraduationCap, MapPin, Check, Sparkles, MessagesSquare,
  ShieldCheck, Landmark, Presentation, Compass, FileSpreadsheet, BarChart3, Wrench,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « atelier intelligence artificielle » (slug /atelier-intelligence-artificielle),
 * côté FORMATION. Créée le 2026-09-04 depuis l'analyse Semrush du 03/09 : « atelier
 * intelligence artificielle » (70, KD 7, CPC 2,16 $, intention commerciale).
 * Le mot « atelier » n'apparaissait dans aucune URL ; les Sprint IA (3 h) sont des
 * ateliers sans le dire. Cette page est le hub « atelier » : elle nomme les formats
 * et renvoie vers les Sprint IA et les formations par métier.
 *
 * RÉPARTITION D'INTENTIONS : /conference-ia = la salle écoute ; CETTE page = la salle
 * manipule (3 h à 1 jour, petits groupes, livrables réels) ; /formation-* = parcours
 * complets avec évaluation. Tarif = 1 980 € HT la session pour le groupe (grille
 * Sprint IA), packages dégressifs à partir de 5 sessions. Pas de CPF.
 * Voix : verdict d'abord, phrases courtes, pas de tirets cadratins.
 */

const SLUG = 'atelier-intelligence-artificielle'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Atelier intelligence artificielle : 3 h à 1 jour, sur vos cas | Masteria"
const META_DESC = "Atelier intelligence artificielle en entreprise : 3 heures à une journée, en petits groupes, les mains sur ChatGPT, Copilot, Claude, Gemini ou Mistral, sur vos documents réels. Découverte, métier, prompts, cas d'usage, managers. Qualiopi, OPCO."
const KEYWORDS = "atelier intelligence artificielle, atelier ia, atelier ia entreprise, atelier ia générative, atelier découverte ia, atelier prompts, atelier chatgpt entreprise, workshop ia, atelier cas d'usage ia"

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
  { icon: Users, label: 'Petits groupes, jusqu\'à 12 personnes' },
  { icon: Sparkles, label: 'Multi-outils : ChatGPT, Copilot, Claude, Gemini, Mistral' },
  { icon: MapPin, label: 'Sur site, à distance · France, Suisse, Belgique' },
]

const EN_BREF = [
  { label: 'Format', value: "De 3 heures à une journée, en petits groupes jusqu'à 12 personnes, chacun devant son écran" },
  { label: 'Principe', value: "On manipule : chaque participant travaille sur ses propres documents et repart avec deux ou trois usages installés" },
  { label: 'Ateliers', value: "Découverte, métier, prompts, cas d'usage avec la direction, managers, Excel et données" },
  { label: 'Outils', value: "Ceux que vous avez déjà, dans leur version entreprise ; sinon plusieurs outils comparés sur les mêmes cas" },
  { label: 'Prix', value: "1 980 € HT la session pour le groupe, 3 heures ou une journée ; packages dégressifs à partir de 5 sessions" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Les ateliers ───────── */

const ATELIERS = [
  { icon: Lightbulb, title: "L'atelier découverte (3 h)", desc: "Pour un public qui démarre : ce que l'IA générative fait et ne fait pas, puis chacun manipule sur ses cas et repart avec trois usages à tester. C'est le Sprint IA Sensibilisation, le format de masse pour embarquer une organisation par vagues.", href: '/formation-sprint-ia-sensibilisation', cta: 'Voir le Sprint IA Sensibilisation' },
  { icon: Wrench, title: "L'atelier métier (demi-journée à 1 jour)", desc: "Une équipe, ses livrables : devis, comptes rendus, mails clients, fiches produits, dossiers. L'atelier construit les usages sur ces documents, avec les gabarits et les règles de l'équipe. Il ouvre ou condense un parcours par métier.", href: '/formation-intelligence-artificielle', cta: 'Voir les formations par métier' },
  { icon: MessagesSquare, title: "L'atelier prompts (3 h)", desc: "Pour ceux qui utilisent déjà un outil sans méthode : passer du prompt d'une ligne à des demandes structurées, itérer, constituer une bibliothèque d'équipe. C'est le Sprint IA Prompts.", href: '/formation-sprint-ia-prompts', cta: 'Voir le Sprint IA Prompts' },
  { icon: Compass, title: "L'atelier cas d'usage, avec la direction (demi-journée)", desc: "Identifier, qualifier et prioriser les cas d'usage de l'entreprise : où le temps se perd, ce que l'IA peut prendre, ce qui engage. Il se conclut par trois cas à lancer et ce qu'on écarte. Il précède souvent un diagnostic.", href: '/diagnostic-ia', cta: 'Voir le diagnostic IA' },
  { icon: BarChart3, title: "L'atelier managers (3 h)", desc: "Cadrer, arbitrer, montrer l'exemple : les managers manipulent sur leurs propres situations (point d'équipe, entretien, arbitrage) et repartent avec un cadre d'usage pour leur équipe. C'est le Sprint IA Managers.", href: '/formation-sprint-ia-managers', cta: 'Voir le Sprint IA Managers' },
  { icon: FileSpreadsheet, title: "L'atelier Excel et données (3 h)", desc: "Analyser un export, fiabiliser un chiffre, produire un reporting avec l'IA, sur les fichiers réels des participants. C'est le Sprint IA Excel ; la formation data IA prolonge sur deux jours.", href: '/formation-sprint-ia-excel', cta: 'Voir le Sprint IA Excel' },
]

/* ───────── Conférence / atelier / formation ───────── */

const TABLE = [
  { critere: 'Durée', conf: '1 h à 2 h', atelier: '3 h à 1 jour', form: '1 à 2 jours, parfois plus' },
  { critere: 'Taille du groupe', conf: 'De 20 à plusieurs centaines', atelier: "Jusqu'à 12, chacun devant son écran", form: "Jusqu'à 12, par métier" },
  { critere: 'Ce que font les participants', conf: 'Écoutent, voient des démonstrations, questionnent', atelier: 'Manipulent sur leurs propres documents', form: 'Manipulent, s\'exercent, sont évalués' },
  { critere: 'Résultat', conf: 'Un langage commun, trois usages à tester', atelier: 'Deux ou trois usages installés, une règle', form: 'Des compétences vérifiées, une bibliothèque, un plan' },
  { critere: 'Quand', conf: 'Pour lancer, en plénière ou en COMEX', atelier: 'Pour faire pratiquer vite, par vagues', form: "Pour les équipes qui utiliseront l'IA chaque jour" },
]

/* ───────── Déroulé ───────── */

const DEROULE = [
  { num: '01', title: 'Vingt minutes pour cadrer', desc: "Ce que l'outil fait, ce qu'il ne fait pas, la règle d'usage de l'entreprise, et les deux ou trois gestes que l'atelier va installer. Pas plus : la salle est là pour manipuler." },
  { num: '02', title: 'Premier cas, guidé pas à pas', desc: "Chacun ouvre l'outil et traite un premier document réel, avec le formateur qui montre, puis laisse faire. On compare les résultats, on voit où l'outil se trompe, on corrige la demande." },
  { num: '03', title: 'Deuxième et troisième cas, en autonomie', desc: "Les participants appliquent la méthode à leurs propres situations, le formateur circule. C'est le temps le plus long, et celui où les usages s'installent parce qu'ils sont les leurs." },
  { num: '04', title: 'Bibliothèque et plan', desc: "Les demandes qui ont marché sont mises en commun dans une bibliothèque d'équipe ; chacun note les deux usages qu'il reprend lundi. Une règle d'usage en cinq lignes clôt la session." },
]

/* ───────── Erreurs ───────── */

const ERREURS = [
  { title: 'Un atelier sans les vrais documents', desc: "Des exemples fournis par le formateur, des cas génériques : personne ne se reconnaît, rien ne s'installe. La règle : chacun apporte deux documents réels, anonymisés si besoin, avant la session." },
  { title: 'Trop de participants', desc: "Au-delà de douze, le formateur ne circule plus, une partie de la salle regarde l'autre faire. À vingt, c'est une conférence qui s'ignore. Le format de masse existe : c'est la conférence, suivie d'ateliers par vagues." },
  { title: "L'outil pas prêt le jour J", desc: "Comptes non créés, version grand public au lieu de la version entreprise, réseau bloqué : la première heure se perd. Un test technique une semaine avant, avec votre service informatique, règle le problème." },
  { title: "L'atelier-conférence déguisé", desc: "Trois heures de démonstrations brillantes, dix minutes de pratique à la fin. La salle applaudit et ne change rien. Un atelier, c'est au moins les deux tiers du temps les mains sur l'outil." },
  { title: "L'atelier sans suite", desc: "Une session réussie, puis rien : pas de bibliothèque partagée, pas de référent, pas de règle. Les usages retombent en trois semaines. La suite se décide avant l'atelier, même modeste." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  { q: "Qu'est-ce qu'un atelier intelligence artificielle en entreprise ?", a: "C'est une session de trois heures à une journée, en petit groupe, où chaque participant manipule un outil d'IA générative sur ses propres documents : un devis, un compte rendu, un mail difficile, un tableau, une procédure. Il se distingue de la conférence, où la salle écoute, et de la formation complète, qui installe des compétences évaluées sur un ou deux jours. Chez Masteria, l'atelier repart des cas réels des participants et se conclut par une bibliothèque d'équipe et une règle d'usage. Les ateliers de trois heures portent le nom de Sprint IA." },
  { q: "Quels ateliers IA proposez-vous ?", a: "Six formats, selon le public et l'objectif : l'atelier découverte pour un public qui démarre, l'atelier métier sur les livrables d'une équipe, l'atelier prompts pour ceux qui utilisent déjà un outil sans méthode, l'atelier cas d'usage avec la direction pour identifier et prioriser, l'atelier managers pour cadrer et arbitrer, et l'atelier Excel et données pour analyser des fichiers réels. Ils se combinent : un atelier découverte par vague, puis des ateliers métier pour les équipes prioritaires, est la séquence la plus courante." },
  { q: "Combien de participants par atelier ?", a: "Jusqu'à douze, chacun devant son écran, pour que le formateur puisse circuler et que chacun manipule réellement. En dessous de six, l'atelier gagne en profondeur ; au-dessus de douze, il devient une conférence. Pour embarquer un grand effectif, on organise des vagues d'ateliers, éventuellement précédées d'une conférence en plénière. Les packages dégressifs à partir de cinq sessions sont prévus pour cela." },
  { q: "Atelier IA ou conférence IA : que choisir ?", a: "La conférence pour lancer : une à deux heures, un public large, des démonstrations sur vos cas, un langage commun. L'atelier pour faire pratiquer : trois heures à une journée, douze personnes, chacun sur ses documents, des usages installés. Les deux s'enchaînent bien : la conférence ouvre la démarche, les ateliers par vagues la transforment en pratiques. Quand le public est déjà convaincu, on passe directement à l'atelier." },
  { q: "Atelier IA ou formation IA : quelle différence ?", a: "L'atelier installe deux ou trois usages en une session ; la formation installe des compétences sur un ou deux jours, par métier, avec des exercices, des corrections et une évaluation des acquis. L'atelier convient pour démarrer, pour un public large ou pour un besoin précis ; la formation pour les équipes qui utiliseront l'IA chaque jour. L'atelier métier d'une journée est la frontière entre les deux : il ouvre souvent un parcours complet." },
  { q: "Sur quels outils travaille-t-on pendant l'atelier ?", a: "Sur ceux que vos équipes ont déjà, dans leur version entreprise : ChatGPT, Microsoft Copilot, Claude, Gemini ou Mistral. Si rien n'est déployé, l'atelier compare plusieurs outils sur les mêmes cas, ce qui donne à la direction une base de choix. Nous sommes indépendants des éditeurs : aucun atelier n'est sponsorisé, aucune licence n'est vendue à la fin. Un test technique une semaine avant, avec votre service informatique, garantit que tout fonctionne le jour J." },
  { q: "Faut-il apporter ses propres documents ?", a: "Oui, c'est la condition d'un atelier utile. Chaque participant apporte deux ou trois documents réels de son poste : un mail, un compte rendu, un devis, un tableau, une procédure. Les données personnelles ou confidentielles sont anonymisées avant, et nous fournissons une consigne simple pour le faire. Un atelier sur des exemples génériques est un atelier dont personne ne se souvient." },
  { q: "Combien coûte un atelier IA ?", a: "1 980 € HT la session pour le groupe, jusqu'à douze participants, qu'elle dure trois heures ou une journée ; le format long ajoute des cas, pas du prix. À partir de cinq sessions, pour les déploiements par vagues, le tarif est dégressif. Les frais de déplacement s'ajoutent au réel en dehors de Lyon ; le distanciel n'en comporte pas. Le devis arrive sous 24 heures après un cadrage gratuit." },
  { q: "Un atelier IA est-il finançable par l'OPCO ?", a: "Oui. Chaque atelier est une action de formation courte, avec objectifs, contenu, émargement et attestation ; Masteria est certifiée Qualiopi. La prise en charge par votre OPCO dépend de votre branche et de vos droits, et nous préparons le dossier avec vous. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil Quel OPCO ? répond en deux minutes." },
  { q: "Peut-on organiser un atelier IA à distance ?", a: "Oui, en visio interactive, avec les mêmes règles : douze participants au plus, chacun devant son outil, ses documents préparés, un formateur qui suit les écrans partagés. Le format à distance convient bien aux ateliers prompts, Excel et managers ; l'atelier découverte et l'atelier cas d'usage gagnent à se tenir sur site quand c'est possible. Pour une organisation multi-sites, on mixe : une conférence en visio, puis des ateliers par site." },
  { q: "Que se passe-t-il après l'atelier ?", a: "Les usages tiennent si quelque chose les porte : une bibliothèque d'équipe partagée, une règle d'usage écrite, un référent qui répond aux questions, et un point à un mois pour voir ce qui a pris. Nous proposons ce point ; nous ne l'imposons pas. Quand une équipe veut aller plus loin, la formation par métier ou une démarche d'acculturation complète prend le relais." },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'EducationalOrganization'],
  name: 'Ateliers intelligence artificielle en entreprise (Masteria)',
  description: META_DESC,
  url: 'https://www.master-ia.fr/atelier-intelligence-artificielle',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/atelier-intelligence-artificielle#webpage' },
  serviceType: "Atelier pratique d'intelligence artificielle générative",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Suisse' }, { '@type': 'Country', name: 'Belgique' }],
  audience: { '@type': 'EducationalAudience', educationalRole: 'Équipes opérationnelles, managers, directions', audienceType: 'B2B' },
  offers: { '@type': 'Offer', price: '1980', priceCurrency: 'EUR', description: "1 980 € HT la session pour le groupe (jusqu'à 12 participants), 3 heures ou une journée", availability: 'https://schema.org/InStock' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Formats d'atelier IA",
    itemListElement: ATELIERS.map(a => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: a.title, description: a.desc } })),
  },
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Le déroulé d'un atelier IA Masteria",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DEROULE.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, description: s.desc })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/atelier-intelligence-artificielle#article',
  headline: "Atelier intelligence artificielle en entreprise : les mains sur les outils, sur vos cas",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/atelier-intelligence-artificielle#webpage' },
  about: [
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Atelier (formation)', sameAs: 'https://fr.wikipedia.org/wiki/Atelier_(r%C3%A9union)' },
  ],
}

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

export default function AtelierIAPage() {
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
    { name: 'Atelier intelligence artificielle', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, processJsonLd, articleJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Atelier intelligence artificielle</span>
          </nav>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lightbulb size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Formation · Ateliers IA</span>
          </div>
          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 900 }}>
            Atelier intelligence artificielle :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>les mains sur les outils, sur vos cas</span>
          </h1>
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en septembre 2026
          </p>
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un atelier intelligence artificielle Masteria dure de trois heures à une journée, réunit au plus douze personnes, chacune devant son écran, et <strong style={{ color: '#fff', fontWeight: 700 }}>installe deux ou trois usages sur les documents réels des participants</strong>. Six formats : découverte, métier, prompts, cas d'usage, managers, Excel et données. Certifiés Qualiopi, finançables par votre OPCO.
          </p>
          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            La conférence fait comprendre, la formation fait acquérir ; l'atelier fait faire, vite. C'est le format qui transforme la curiosité en réflexe, à condition que la salle manipule au moins les deux tiers du temps et que chacun travaille sur ses propres cas.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un atelier
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#ateliers" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>Voir les six ateliers</a>
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

      {/* ── LES SIX ATELIERS (éditorial asymétrique) ── */}
      <section id="ateliers" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les six ateliers</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Quel atelier IA pour quel besoin ?</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six ateliers, un principe commun : douze personnes au plus, chacune devant son outil, sur ses propres documents. Découverte pour démarrer, métier pour une équipe et ses livrables, prompts pour ceux qui ont déjà l'outil, cas d'usage avec la direction, managers pour cadrer, Excel et données pour les chiffres.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Les ateliers de trois heures sont nos <Link to="/formation-sprint-ia" style={aStyle}>Sprint IA</Link> ; pour un public large qui doit d'abord comprendre, la <Link to="/conference-ia" style={aStyle}>conférence IA</Link> précède.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {ATELIERS.map((item, i) => (
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
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFÉRENCE / ATELIER / FORMATION (ancre sombre) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le bon format</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>Conférence, atelier ou formation : lequel choisir ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>La conférence pour lancer, l'atelier pour faire pratiquer vite, la formation pour installer des compétences vérifiées. Les trois s'enchaînent dans une démarche d'acculturation ; le choix dépend de ce que les participants doivent faire en sortant.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Comparatif conférence, atelier et formation IA" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  {['Critère', 'Conférence', 'Atelier', 'Formation'].map((h, i) => (
                    <th key={h} scope="col" style={{ background: i === 2 ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: i === 2 ? '#60A5FA' : '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: i === 0 ? '22%' : '26%' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.conf}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.atelier}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.form}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DÉROULÉ ── */}
      <section id="deroule" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Le déroulé</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Comment se déroule un atelier IA de trois heures ?</h2>
          <p style={answerStyle}>
            <strong>Vingt minutes pour cadrer, un premier cas guidé, puis les deux tiers du temps en autonomie sur ses propres documents, et une bibliothèque d'équipe pour finir. Un atelier d'une journée garde la même structure avec plus de cas et un temps de mise en commun plus long.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginTop: 12 }}>
            {DEROULE.map(step => (
              <div key={step.num} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Ce que nous vous demandons avant : un cadrage de trente minutes, deux documents réels par participant, et un test technique avec votre service informatique une semaine avant la session.
          </p>
        </div>
      </section>

      {/* ── ERREURS ── */}
      <section id="erreurs" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que le terrain apprend</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Les cinq erreurs qui font rater un atelier IA</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un atelier sans les vrais documents, trop de participants, l'outil pas prêt le jour J, l'atelier-conférence déguisé et l'atelier sans suite. Cinq erreurs que nous voyons depuis 2022, en animant des ateliers du COMEX aux équipes terrain, et qui se corrigent toutes avant la session.</strong>
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
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>1 980 € HT la session, pour le groupe</h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Un atelier coûte 1 980 € HT la session pour le groupe, jusqu'à douze participants, qu'elle dure trois heures ou une journée : le format long ajoute des cas, pas du prix. À partir de cinq sessions, pour un déploiement par vagues, le tarif est dégressif. Chaque atelier est une action de formation courte, certifiée Qualiopi et finançable par votre OPCO ; nous préparons le dossier avec vous. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {["1 980 € HT la session, jusqu'à 12 participants", 'Tarif dégressif à partir de 5 sessions', 'Qualiopi : finançable OPCO, dossier préparé ensemble', 'Devis sous 24 h après un cadrage gratuit'].map(pt => (
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Atelier IA : les questions fréquentes</h2>
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
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Ce qui précède un atelier, ce qui le prolonge, et les outils qui en sortent.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Sprint IA', href: '/formation-sprint-ia', tag: '3 heures', desc: "Les six ateliers de trois heures : sensibilisation, prompts, Excel, managers, veille, AI Act." },
              { label: 'Conférence IA', href: '/conference-ia', tag: 'Pour lancer', desc: "Quand la salle doit d'abord comprendre : une à deux heures en plénière, COMEX ou visio." },
              { label: 'Sensibilisation IA', href: '/sensibilisation-ia', tag: 'Premier temps', desc: "Quand il faut d'abord faire comprendre : conférence, atelier de 3 h ou programme par vagues." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'La démarche', desc: "Conférence, ateliers par vagues, parcours par métier, référents : la montée en compétence de toute l'organisation." },
              { label: 'Formation intelligence artificielle', href: '/formation-intelligence-artificielle', tag: 'Parcours', desc: "Les formations complètes par métier qui prolongent un atelier métier." },
              { label: 'Bibliothèque de prompts', href: '/bibliotheque-de-prompts', tag: 'Outils', desc: "Les prompts par métier issus de nos ateliers, avec la raison de chaque construction." },
              { label: 'Formation IA débutant', href: '/formation-ia-debutant', tag: 'Sans prérequis', desc: "Pour les équipes qui partent de loin : les bases, sans jargon, avant ou à la place de l'atelier découverte." },
              { label: 'Quel outil IA choisir', href: '/quel-outil-ia', tag: 'Comparatif', desc: "ChatGPT, Copilot, Claude, Gemini ou Mistral : de quoi choisir avant d'ouvrir les comptes." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Cadre', desc: "La règle d'usage en une page qui clôt chaque atelier, et ce qu'elle doit contenir." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Atelier intelligence artificielle</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Faisons pratiquer vos équipes</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Dites-nous le public, l'outil en place et ce que les participants doivent savoir faire en sortant. Nous revenons vers vous sous 24 heures avec l'atelier recommandé, les documents à préparer et le devis, prise en charge OPCO comprise.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un atelier IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Lyon, France, Suisse, Belgique, ou à distance</p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
