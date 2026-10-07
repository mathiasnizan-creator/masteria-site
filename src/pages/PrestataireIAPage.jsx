import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Handshake, Building2, GraduationCap,
  MapPin, Check, ListChecks, ShieldCheck, Landmark, Scale, FolderSearch,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page hybride guide de choix + positionnement : « prestataire IA »
 * (slug /prestataire-ia). Grappe Semrush du 2026-08-10 : « prestataire ia »,
 * « prestataire de solution ia », « prestataires solutions ia sur mesure »,
 * « prestataires accompagnement ia personnalisées ».
 *
 * RÉPARTITION D'INTENTIONS (ne pas cannibaliser) :
 *  - /meilleure-agence-ia = juger une AGENCE (développement, intégration) ;
 *  - /meilleur-cabinet-conseil-ia = choisir un CABINET (conseil, gouvernance) ;
 *  - /prestataire-ia = CETTE page : la typologie COMPLÈTE des cinq familles,
 *    six critères communs et sept questions. Elle renvoie aux guides par famille.
 *
 * Réécrite le 07/10/2026 pour le texte propre : FounderNote, CaseStudyCards et
 * OfficialSources remplacés par des blocs écrits pour la page ; trois missions
 * résumées avec leur ancre (faits de src/data/etudes-de-cas.js). Guide assumé
 * comme écrit par un prestataire, renvoi à la cartographie France Num, aucun
 * classement nominatif de concurrents, prix en fourchettes à plafond ouvert.
 */

const SLUG = 'prestataire-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-08-10'
const DATE_MODIFIED = '2026-10-07'
const RDV_URL = '/contact?type=projet&rdv=30'

const META_TITLE = "Prestataire IA : les 5 types et comment choisir | Masteria"
const META_DESC = "Prestataire IA : agence, cabinet, intégrateur, organisme de formation ou indépendant. Quelle famille choisir, six critères communs, sept questions à poser."
const KEYWORDS = "prestataire ia, prestataire intelligence artificielle, prestataire de solution ia, prestataires solutions ia sur mesure, prestataire accompagnement ia, choisir prestataire ia"

/* ───────── Styles partagés (calque cluster conseil) ───────── */

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

const HERO_BADGES = [
  { icon: Scale, label: 'Cinq familles comparées' },
  { icon: ListChecks, label: 'Sept questions à poser avant la signature' },
  { icon: ShieldCheck, label: 'Écrit par un prestataire, et dit comme tel' },
  { icon: MapPin, label: 'Lyon · Europe · États-Unis · Inde' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Définition', value: "Une entreprise ou un expert extérieur qui vous aide à décider, construire, intégrer ou faire adopter l'intelligence artificielle" },
  { label: 'Les 5 familles', value: "Agence de développement, cabinet de conseil, ESN ou intégrateur, organisme de formation, indépendant" },
  { label: 'Critères communs', value: "Missions comparables racontées en détail, liens avec les éditeurs déclarés, livrables à votre nom, données protégées, équipes formées, suivi après la mise en service" },
  { label: 'Où chercher', value: "La cartographie publique de France Num pour un premier tour du marché, puis deux ou trois rendez-vous de cadrage" },
  { label: 'Les pièges', value: "Le revendeur qui se présente en conseiller, le rapport que personne n'exécute, l'outil livré sans formation, le contrat sans clause de sortie" },
  { label: 'Masteria', value: "Un prestataire qui réunit trois familles : conseil, outils développés pour vous, formations certifiées Qualiopi" },
]

/* ───────── Les 5 familles de prestataires (tableau citable) ───────── */

const TYPES = [
  {
    type: 'Agence de développement IA',
    livre: "Assistants, agents, automatisations et intégrations construits pour vous",
    quand: "L'outil à construire est identifié ; reste à trouver qui le fera bien",
  },
  {
    type: 'Cabinet de conseil IA',
    livre: "Diagnostic, priorités, feuille de route, règles d'usage",
    quand: "Vous ignorez encore quoi lancer, ou l'organisation n'est pas prête",
  },
  {
    type: 'ESN ou intégrateur',
    livre: "Raccordement au système d'information, régie, maintenance applicative",
    quand: "Grand compte, système d'information complexe, chantier de plus d'un an",
  },
  {
    type: 'Organisme de formation',
    livre: "Formations par outil et par métier, acculturation des équipes",
    quand: "Les licences sont achetées, les usages ne suivent pas",
  },
  {
    type: 'Indépendant',
    livre: "Une expertise pointue sur une mission courte",
    quand: "Besoin précis, budget serré, pilotage interne solide",
  },
]

/* ───────── Six critères communs aux cinq familles ───────── */

const CRITERES = [
  {
    icon: ListChecks,
    title: 'Des missions comparables, racontées en détail',
    desc: "Une page de logos ne prouve rien. Demandez trois missions proches de la vôtre, avec la situation de départ, ce qui a été livré, ce qui a changé ensuite et ce qui a résisté. Un prestataire qui parle aussi de ses difficultés vous donne une information fiable.",
  },
  {
    icon: Scale,
    title: 'Des liens avec les éditeurs déclarés',
    desc: "Partenaire exclusif, revendeur de licences, commissionné sur les abonnements : ces statuts sont légaux, à condition d'être annoncés. Un conseil qui ne connaît qu'un outil peut convenir, à condition que vous sachiez d'où il parle.",
  },
  {
    icon: ShieldCheck,
    title: 'Des livrables qui vous appartiennent',
    desc: "Code, prompts, paramétrages, abonnements souscrits auprès des fournisseurs de modèles, documentation : tout doit vous revenir et pouvoir passer à une autre équipe. La clause de réversibilité se négocie avant le premier jour de travail.",
  },
  {
    icon: Building2,
    title: 'Des données traitées avec soin',
    desc: "Par quels serveurs passent vos documents, sous quelle offre d'entreprise, combien de temps sont-ils conservés, servent-ils à entraîner un modèle ? Un prestataire qui esquive ces questions reporte le risque sur vous, RGPD et AI Act compris.",
  },
  {
    icon: GraduationCap,
    title: 'Des équipes formées à se servir du livrable',
    desc: "Un outil que personne n'a appris à utiliser tombe en désuétude en quelques semaines. Vérifiez que le prestataire forme lui-même, ou qu'il s'associe à un organisme titulaire de Qualiopi : cette certification conditionne un éventuel financement de cette partie par l'OPCO. Beaucoup d'appels d'offres l'oublient.",
  },
  {
    icon: Handshake,
    title: 'Un suivi prévu après la mise en service',
    desc: "Qui réagit quand les réponses se dégradent, qui suit l'usage, qui adapte l'outil quand le fournisseur change de modèle ? Faites écrire le format de suivi (forfait mensuel, régie, accompagnement) et son prix avant de signer.",
  },
]

/* ───────── Les sept questions (liste citable) ───────── */

const QUESTIONS = [
  "Quelle mission proche de la nôtre avez-vous menée, et qu'est-ce qui a résisté ?",
  "Avez-vous un statut de partenaire, de revendeur ou une commission chez un éditeur ? Lequel ?",
  "À la fin du contrat, que posséderons-nous : code, prompts, paramétrages, comptes ?",
  "Par où transitent nos données, sous quelle offre, et servent-elles à entraîner les modèles ?",
  "Qui forme nos équipes, et notre OPCO financera-t-il cette partie ?",
  "Après la mise en service, qui surveille l'outil, qui le fait évoluer, et pour quel budget mensuel ?",
  "Que nous déconseillez-vous de lancer, et pour quelle raison ?",
]

/* ───────── Trois missions où un même prestataire a tenu plusieurs rôles
   (faits relus dans src/data/etudes-de-cas.js le 07/10/2026) ───────── */

const CASES = [
  {
    anchor: 'conseil-financier',
    tag: 'Conseil, construction, formation',
    text: "Un cabinet de conseil financier au service du secteur public a d'abord fait cadrer ses pratiques de rédaction, puis construire quatre assistants pour ses mémoires techniques, avant une journée de formation pour tous ses consultants, sur ses sites de Paris et de Lyon.",
    link: 'Les trois temps de la mission',
  },
  {
    anchor: 'industrie',
    tag: 'Formation, puis décisions',
    text: "Pour un groupe industriel aux sites répartis entre l'Europe, les États-Unis et l'Inde, le même prestataire a formé 24 managers pilotes, puis réuni le comité de direction pour une matinée de décisions. Les prochaines sessions auront lieu en octobre 2026 aux États-Unis et au Mexique, en décembre en Inde.",
    link: 'Le déploiement par paliers',
  },
  {
    anchor: 'photovoltaique',
    tag: 'Diagnostic, puis outillage',
    text: "Une PME de distribution photovoltaïque a commencé par un diagnostic présenté en septembre 2026. Les assistants à construire et les deux journées de formation dans ses locaux, prévues en octobre, en découlent, avec une première mesure des gains un mois plus tard.",
    link: 'Du diagnostic au plan à 90 jours',
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'un prestataire IA ?",
    a: "C'est une entreprise ou un expert extérieur à qui vous confiez une partie de votre projet d'intelligence artificielle : décider des priorités, concevoir et développer des outils, les brancher sur votre système d'information, former les équipes ou poser les règles d'usage. Le mot recouvre cinq familles aux métiers distincts : les agences de développement, les cabinets de conseil, les ESN et intégrateurs, les organismes de formation et les indépendants. Le bon choix dépend de ce qui bloque chez vous.",
  },
  {
    q: 'Quel type de prestataire IA choisir ?',
    a: "Partez de ce qui bloque. Vous ne savez pas quoi lancer, dans quel ordre ni avec quel budget : faites appel à un cabinet de conseil ; un diagnostic court peut suffire. Vous savez quoi construire : une agence de développement. Il faut raccorder l'outil à un système d'information complexe pendant plus d'un an : une ESN ou un intégrateur. Les licences sont là mais personne ne s'en sert : un organisme de formation. Le besoin est pointu et bien délimité : un indépendant. Beaucoup de projets combinent deux familles ou plus ; certains prestataires, comme Masteria, en réunissent plusieurs, ce qui évite les passages de relais entre intervenants.",
  },
  {
    q: 'Où trouver des prestataires IA en France ?',
    a: "La cartographie publiée par France Num, le programme du ministère de l'Économie pour le numérique des petites entreprises, recense plusieurs centaines d'acteurs français de l'IA et se filtre par besoin : aucune source n'est plus neutre pour commencer. Les annuaires privés complètent, avec prudence sur les classements payés. Ensuite, rien ne vaut deux ou trois rendez-vous de cadrage : la manière dont un prestataire mène ce premier échange en dit plus long que sa fiche.",
  },
  {
    q: 'Combien coûte un prestataire IA ?',
    a: "Le prix dépend de la famille et du périmètre. Conseil et développement se chiffrent en général au forfait, sur devis après cadrage. Une maquette ou un périmètre réduit reste dans les milliers d'euros ; un outil utilisé en production, en dizaines de milliers ; un déploiement dans tout un groupe dépasse 100 000 € et atteint parfois plusieurs centaines de milliers. Chez Masteria, former une équipe revient à 1 980 € HT par jour. Les postes de coût sont décomposés sur notre page consacrée au prix d'un projet IA ; un devis sérieux découle toujours d'un périmètre écrit.",
  },
  {
    q: 'Quelles questions poser avant de signer avec un prestataire IA ?',
    a: "Sept questions font le tri : une mission comparable et ce qui a résisté, les liens avec les éditeurs, ce que vous posséderez à la fin du contrat, le trajet de vos données, la formation des équipes et son financement, le suivi après la mise en service et son budget, et ce que le prestataire vous déconseille de lancer. Demandez les réponses par écrit pour pouvoir les comparer.",
  },
  {
    q: 'Prestataire de solutions IA sur mesure : que vérifier en plus ?',
    a: "Trois points propres au sur-mesure. D'abord la réversibilité : code, prompts et architecture doivent être à vous et documentés, pour qu'une autre équipe puisse reprendre l'outil. La maintenance : les fournisseurs remplacent leurs modèles plusieurs fois par an, et un outil sans plan de suivi se dégrade. Le raccordement : la valeur d'un outil sur mesure tient à sa connexion à vos logiciels (CRM, ERP, gestion documentaire) ; vérifiez que le prestataire l'a déjà fait dans un environnement proche du vôtre.",
  },
  {
    q: "Qu'apporte un accompagnement IA personnalisé ?",
    a: "Une présence régulière plutôt qu'une intervention isolée : le prestataire cadre les usages, met les outils en service, aide les équipes à changer leurs habitudes et mesure ce qui sert au quotidien, au rythme de votre organisation. C'est le format adapté quand les freins sont autant humains que techniques. Chez Masteria, il est décrit sur la page consacrée à l'accompagnement IA, avec ce que l'OPCO peut financer et ce qu'il ne finance pas.",
  },
  {
    q: 'Prestataire IA, éditeur de logiciel, fournisseur de modèles : qui fait quoi ?',
    a: "Trois étages à distinguer avant de rédiger un cahier des charges. Les fournisseurs de modèles (OpenAI, Anthropic, Google, Mistral) entraînent les modèles et les vendent sous forme d'abonnements ou d'accès à la consommation. Les éditeurs intègrent ces modèles dans des logiciels prêts à l'emploi, comme Microsoft avec Copilot ou les éditeurs de logiciels métier. Le prestataire IA travaille pour vous : il choisit, assemble, développe, raccorde et forme en s'appuyant sur les deux autres étages. Pour départager les assistants eux-mêmes, voyez notre comparatif.",
  },
  {
    q: 'Pourquoi lire un guide de choix écrit par un prestataire ?',
    a: "En le sachant. Masteria vend du conseil, du développement et de la formation en IA : ce guide n'est donc pas neutre, et nous préférons le dire. Deux garde-fous : les critères et les questions proposés valent pour tout prestataire, nous compris, et nous renvoyons vers la cartographie publique de France Num pour élargir la comparaison. Si nos réponses vous conviennent, 30 minutes de cadrage vous sont offertes ; sinon, le guide reste utilisable avec un autre interlocuteur.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Masteria, prestataire IA',
  alternateName: "Prestataire en intelligence artificielle",
  description: "Prestataire IA qui réunit trois familles : cabinet de conseil (diagnostic, audit, stratégie, règles d'usage), agence de développement d'outils IA sur mesure (agents, assistants, intégrations) et organisme de formation détenteur de Qualiopi. Sans lien commercial avec les éditeurs, actif sur quatre zones : France, Europe, États-Unis, Inde.",
  url: 'https://www.master-ia.fr/prestataire-ia',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/prestataire-ia#webpage' },
  serviceType: 'Prestations en intelligence artificielle',
  category: 'Conseil, développement et formation IA',
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Place', name: 'Europe' },
    { '@type': 'Country', name: 'États-Unis' },
    { '@type': 'Country', name: 'Inde' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations IA de Masteria',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conseil et cadrage', description: "Diagnostic, audit, priorités, feuille de route, charte d'utilisation." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outils IA sur mesure', description: "Agents, assistants métier, raccordements et automatisations, avec code et prompts remis au client par contrat." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formation et accompagnement', description: "Acculturation, formations par métier et suivi dans la durée ; la formation détient la certification Qualiopi." } },
    ],
  },
}

/* Les questions à poser en ItemList (liste citable, GEO). */
const questionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sept questions à poser à un prestataire IA avant de signer',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: QUESTIONS.map((q, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: q,
  })),
}

/* DefinedTermSet : la typologie des prestataires (entités citables). */
const definitionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.master-ia.fr/prestataire-ia#termes',
  name: 'Les prestataires IA et leur vocabulaire',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Prestataire IA',
      description: "Entreprise ou expert extérieur qui aide une organisation à décider, construire, intégrer ou faire adopter l'intelligence artificielle.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'ESN ou intégrateur IA',
      description: "Entreprise de services du numérique qui raccorde l'IA à un système d'information existant, souvent en régie, pour de grands comptes et sur des chantiers de plus d'un an.",
    },
    {
      '@type': 'DefinedTerm',
      name: 'Réversibilité',
      description: "Possibilité, prévue au contrat et dans la technique, de reprendre ou de confier à une autre équipe un outil IA (code, prompts, paramétrages, documentation) sans dépendre de son auteur.",
    },
  ],
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/prestataire-ia#article',
  headline: 'Prestataire IA : cinq familles, six critères communs et sept questions à poser',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/prestataire-ia#webpage' },
  about: [
    { '@type': 'Thing', name: 'Prestataire IA', description: "Entreprise ou expert extérieur qui apporte des compétences en intelligence artificielle" },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Entreprise de services du numérique', sameAs: 'https://fr.wikipedia.org/wiki/Entreprise_de_services_du_num%C3%A9rique' },
  ],
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* Sources de la page : émises en WebPage.citation (JSON-LD) et affichées avec
   une note écrite pour la page, à la place du bloc commun OfficialSources. */
const SOURCES = [
  { name: 'La cartographie des solutions IA françaises, par France Num', note: "le recensement public des acteurs, à filtrer selon votre besoin avant de prendre rendez-vous.", url: 'https://www.francenum.gouv.fr/intelligence-artificielle' },
  { name: "L'AI Act (règlement 2024/1689) sur EUR-Lex", note: "le texte à garder en tête quand un prestataire décrit le traitement de vos données et la transparence de ses outils.", url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689' },
  { name: 'Les recommandations IA de la CNIL', note: "les points de vigilance quand un prestataire fait passer des données personnelles par un modèle.", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: 'Qualiopi, présenté par le ministère du Travail', note: "la certification à exiger d'un prestataire qui forme vos équipes, si vous comptez sur l'OPCO.", url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
  { name: 'Les OPCO, page officielle du ministère du Travail', note: "comment votre OPCO décide de financer, ou non, une formation commandée à un prestataire.", url: 'https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco' },
]
const PAGE_CITATIONS = SOURCES.map(s => ({ name: s.name, url: s.url }))

export default function PrestataireIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Prestataire IA', slug: SLUG },
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
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        author
        extraJsonLd={[serviceJsonLd, questionsJsonLd, definitionsJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Prestataire IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Handshake size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Guide · cinq familles de prestataires
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Prestataire IA&nbsp;:
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>les 5 types, et comment trouver le vôtre</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Guide écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · révisé le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Un prestataire IA est une entreprise ou un expert extérieur à qui vous confiez une partie de votre projet d'intelligence artificielle : le décider, le construire, le brancher sur vos logiciels ou former les équipes. Le mot recouvre <strong style={{ color: '#fff', fontWeight: 700 }}>cinq familles aux métiers distincts</strong> : l'agence de développement, le cabinet de conseil, l'ESN ou intégrateur, l'organisme de formation et l'indépendant. Ce guide aide à choisir la bonne famille, puis à juger un prestataire précis.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Masteria est lui-même prestataire IA : ce guide est écrit par une partie intéressée, et nous préférons le dire d'entrée. Les critères et les questions qui suivent s'appliquent à tous, nous compris, et la cartographie publique de France Num vous permet d'élargir la comparaison bien au-delà de ce que nous écrivons.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <a href="#types" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Comparer les cinq familles
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Réserver 30 minutes de cadrage
            </Link>
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 100px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LES 5 FAMILLES (tableau citable) ── */}
      <section id="types" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>La typologie</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quels sont les types de prestataires IA ?
          </h2>

          <p style={answerStyle}>
            <strong>Cinq familles de prestataires IA se partagent le marché : l'agence construit, le cabinet aide à décider, l'ESN intègre à grande échelle, l'organisme de formation fait progresser les équipes et l'indépendant apporte une expertise ciblée. Partez de ce qui bloque chez vous, plutôt que du nom le plus visible.</strong>
          </p>

          <div style={{ border: '1px solid #E5E7EB', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Les cinq familles de prestataires IA : ce que chacune livre et dans quelle situation la choisir" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '26%' }}>Famille</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '37%' }}>Ce qu'elle livre</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '37%' }}>Votre situation</th>
                </tr>
              </thead>
              <tbody>
                {TYPES.map((row, i) => (
                  <tr key={row.type} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#0A0A0A', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.type}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.livre}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.quand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, marginTop: 20, maxWidth: 880 }}>
            Trois familles ont leur guide détaillé : celui de la <Link to="/meilleure-agence-ia" style={aStyle}>meilleure agence IA</Link>, celui du <Link to="/meilleur-cabinet-conseil-ia" style={aStyle}>meilleur cabinet IA</Link> et celui de la <Link to="/meilleure-formation-ia" style={aStyle}>meilleure formation IA</Link>. Pour un premier tour d'horizon des acteurs français, la <a href="https://www.francenum.gouv.fr/intelligence-artificielle" target="_blank" rel="noopener noreferrer" style={aStyle}>cartographie de France Num</a> recense les entreprises référencées ; Masteria fait partie des Activateurs France Num.
          </p>
        </div>
      </section>

      {/* ── LES CRITÈRES (ancre sombre, pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Six critères communs</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Comment choisir un prestataire IA ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Quelle que soit la famille, six critères font le tri : des missions comparables racontées en détail, des liens avec les éditeurs déclarés, des livrables qui vous appartiennent, des données traitées avec soin, des équipes formées et un suivi prévu après la mise en service. Un prestataire sérieux accepte d'être jugé sur les six.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
            {CRITERES.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LES 7 QUESTIONS (liste citable) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Kicker>Avant de signer</Kicker>
          <h2 style={h2Style}>
            Les 7 questions à poser à tout prestataire IA
          </h2>

          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Posez ces sept questions à chaque prestataire rencontré, Masteria compris, et demandez les réponses par écrit. La septième est la plus parlante : un prestataire qui ne déconseille jamais rien cherche surtout à remplir son carnet de commandes.</strong>
          </p>

          <ol style={{ margin: 0, padding: 0, listStyle: 'none', counterReset: 'q' }}>
            {QUESTIONS.map((q, i) => (
              <li key={i} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 22px', marginBottom: 12 }}>
                <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 99, background: cLight, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                <p style={{ margin: 0, fontSize: 15.5, color: '#0A0A0A', fontWeight: 600, lineHeight: 1.6, paddingTop: 5 }}>{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── OÙ SE SITUE MASTERIA (transparence) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Où nous nous situons</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Masteria réunit trois familles sous un même toit
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Dans cette typologie, Masteria appartient à trois familles. Comme cabinet de conseil, nous menons des <Link to="/diagnostic-ia" style={aStyle}>diagnostics</Link>, des <Link to="/audit-ia" style={aStyle}>audits</Link> et des missions de <Link to="/conseil-strategie-ia" style={aStyle}>stratégie</Link>. Comme agence, nous développons des <Link to="/outils-ia-sur-mesure" style={aStyle}>outils IA sur mesure</Link> dont le code et les prompts vous reviennent par contrat. Comme organisme certifié Qualiopi au titre des actions de formation, nous formons les équipes, de l'<Link to="/acculturation-ia" style={aStyle}>acculturation</Link> aux parcours par métier. L'<Link to="/accompagnement-ia" style={aStyle}>accompagnement dans la durée</Link> relie les trois. Nous répondons aux sept questions de ce guide dès le premier rendez-vous.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Aucun lien commercial avec les éditeurs',
                  'Code et prompts à votre nom, écrits au contrat',
                  "Formation certifiée, que l'OPCO peut prendre en charge",
                  "Un seul interlocuteur, du cadrage à l'usage",
                ].map(pt => (
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

      {/* ── TROIS MISSIONS, PLUSIEURS RÔLES (remplace les cartes communes) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
            <FolderSearch size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
            <Kicker>Sur dossier</Kicker>
          </div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Trois missions où un même prestataire a tenu plusieurs rôles</h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.7, margin: '0 0 32px', maxWidth: 760 }}>
            Les clients ont demandé l'anonymat. Vous trouverez chaque mission en entier, avec ses chiffres, dans nos études de cas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CASES.map(k => (
              <div key={k.anchor} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ ...kickerStyle, fontSize: 12, marginBottom: 12 }}>{k.tag}</div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{k.text}</p>
                <Link to={`/etudes-de-cas-ia#${k.anchor}`} style={{ color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {k.link}
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Prestataire IA : neuf questions avant de choisir
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre consultation de prestataires soulève une autre question ?
              </p>
              <Link to="/contact?type=projet" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrivez-nous
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Six pages pour préparer votre consultation
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Comparer une famille de plus près, estimer un budget, clarifier vos priorités avant le premier rendez-vous.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Meilleure agence IA', href: '/meilleure-agence-ia', tag: 'Guide', desc: "Six questions pour juger une agence qui développe et branche l'IA sur vos logiciels." },
              { label: 'Meilleur cabinet IA', href: '/meilleur-cabinet-conseil-ia', tag: 'Guide', desc: 'Six critères, chacun avec un test, pour départager des cabinets de conseil.' },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Les postes de coût d'un projet, pour lire une proposition ligne par ligne." },
              { label: 'Accompagnement IA', href: '/accompagnement-ia', tag: 'Dans la durée', desc: "Un prestataire présent après le lancement : suivi des usages, réglages, formation des nouveaux arrivants." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: 'Assistants, agents et automatisations bâtis à partir de vos documents, branchés sur vos logiciels.' },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Point de départ', desc: "Une intervention courte pour fixer vos priorités avant de consulter des prestataires." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Ouvrir la page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui écrit ce guide (remplace FounderNote et le bloc commun) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui écrit ce guide</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un prestataire qui se soumet à sa propre grille
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Ce guide est signé par <Link to="/mathias-nizan" style={{ color: '#93C5FD', fontWeight: 600 }}>Mathias Nizan</Link>, fondateur de Masteria (Lyon, 2022), qui suit lui-même chaque dossier. Il en compose l'équipe avec des consultants, des développeurs et des formateurs indépendants. Masteria compte parmi les Activateurs France Num, et le cabinet a été cité par Les Échos, comme le montre notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link>. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> décrivent les missions dans le détail.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['3 en 1', 'conseil, développement, formation'],
                ['≈ 35', 'consultants, développeurs et formateurs indépendants'],
                ['Qualiopi', 'la certification de nos formations'],
                ['2022', 'Lyon · Europe · États-Unis · Inde'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                  <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Et maintenant</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Soumettez-nous les sept questions
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez votre besoin en quelques lignes. En 30 minutes de cadrage offertes, nous répondons aux sept questions de ce guide, nous vous disons quelle famille de prestataire vous convient et, quand une autre que la nôtre serait plus adaptée, vers qui vous tourner.
            </p>
            <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Réserver 30 minutes de cadrage
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange en visio · un créneau proposé sous 24 heures · conseil, développement et formation sous un même toit
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (rédigées pour la page, à la place du bloc commun) ── */}
      <section aria-labelledby="sources-prestataire-ia" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-prestataire-ia" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les références utiles pour consulter des prestataires
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Des sources publiques, à ouvrir pendant la rédaction de votre cahier des charges ou la lecture des propositions reçues.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            {SOURCES.map(s => (
              <li key={s.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 15, lineHeight: 1.6 }}>
                <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                <span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.name}</a>
                  <span style={{ color: '#6B7280' }}> : {s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
