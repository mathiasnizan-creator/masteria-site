import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, Bot, PenLine, Gauge, Network, BarChart3, ShieldCheck, Sparkles as Spark,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation SEO IA » (slug /formation-ia-seo).
 * REFONTE 2026-08-10 : sort du template MetierPage (générique 13 métiers) pour
 * le patron des money pages formation. Cible « formation seo ia » (90/mois,
 * KD 19, intention C — Semrush 2026-08-10) et ses variantes « formation ia
 * seo », « formation seo intelligence artificielle », « formation geo ».
 *
 * ANTI-CANNIBALISATION : /agence-seo-ia = PRESTATION (agence SEO IA + GEO) ;
 * /audit-seo-ia et /audit-geo-ia = audits ; /formation-multi-outils-seo =
 * « Panorama IA SEO · 5 outils comparés » (comparatif) ; spokes par outil
 * (/formation-chatgpt-seo, -copilot, -claude, -gemini, -mistral) = « formation
 * <outil> seo ». CETTE page = la FORMATION métier SEO à l'IA (SEO outillé par
 * l'IA + GEO). Renvoie vers l'agence pour déléguer, vers les spokes pour
 * approfondir un outil.
 *
 * INTÉGRITÉ : pas de garantie de position ni de citation ; pas de fermes de
 * contenu ; relecture humaine ; la mesure GEO en tendance sur corpus stable
 * (même méthodo que /audit-geo-ia). Programme 2 jours Matin/Après-midi.
 */

const SLUG = 'formation-ia-seo'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation SEO IA : contenu, technique et GEO | Masteria"
const META_DESC = "Formation SEO IA sur vos propres mots-clés et pages : recherche d'intentions, briefs et contenu outillés par l'IA, technique et données structurées, GEO pour être cité par ChatGPT et Google. Qualiopi, OPCO."
const KEYWORDS = "formation seo ia, formation ia seo, formation seo intelligence artificielle, formation geo, formation référencement ia, formation seo chatgpt, formation generative engine optimization"

/* ───────── Styles partagés ───────── */

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
  { icon: Sparkles, label: 'ChatGPT · Copilot · Claude · Gemini · Mistral' },
  { icon: Target, label: "Sur vos mots-clés, vos pages et votre marché" },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; version 1 jour possible pour un périmètre resserré (contenu ou GEO)" },
  { label: 'Pour qui', value: "Équipes SEO et contenu, responsables acquisition, chargés de marketing digital, rédacteurs web, consultants SEO en agence" },
  { label: 'Outils', value: "Multi-outils, indépendants des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, articulés avec vos outils SEO (Search Console, Semrush ou équivalents)" },
  { label: 'Deux fronts', value: "Le SEO outillé par l'IA (recherche, briefs, contenu, technique) et le GEO : être cité dans les réponses de ChatGPT, Perplexity, Gemini et les AI Overviews" },
  { label: 'Livrables', value: "Bibliothèque de prompts SEO, gabarits de brief et de page citable, check-list technique GEO, corpus de mesure des citations IA" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Ce que couvre la page (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: Search,
    title: 'Recherche de mots-clés et d\'intentions',
    desc: "Grappes sémantiques, intentions derrière les requêtes, questions à couvrir, clusters pilier et pages liées : l'IA structure en minutes ce qui prenait des heures de tableur, à partir de vos exports Search Console et de vos outils. La formation apprend à cadrer cette recherche et à la vérifier contre les données réelles.",
  },
  {
    icon: PenLine,
    title: 'Briefs et production de contenu',
    desc: "Briefs structurés (intention, plan, entités, questions, maillage), premiers jets à votre ton, variantes de titres et de métas, FAQ, réécritures : la vitesse de l'IA au service d'un contenu utile, relu et enrichi par des humains. Jamais de ferme de contenu : Google et les IA le sanctionnent, la formation le démontre.",
  },
  {
    icon: Bot,
    title: 'Le GEO : être cité par les IA',
    desc: "Le versant nouveau du métier. Comprendre comment ChatGPT, Perplexity, Gemini et les AI Overviews sélectionnent leurs sources ; structurer une page citable (réponse directe, entités, données structurées, format) ; ouvrir ou non son site aux robots des IA ; mesurer sa part de voix sur un corpus de questions. La formation en fait un savoir-faire, pas un mot à la mode.",
  },
  {
    icon: Gauge,
    title: 'Technique et données structurées',
    desc: "Audit outillé par l'IA (indexation, performance, balisage), génération et contrôle des données structurées Schema.org, maillage interne, corrections priorisées par impact. L'IA écrit le JSON-LD et explique le rapport de crawl ; vous décidez et vérifiez.",
  },
  {
    icon: Network,
    title: 'Architecture sémantique et entités',
    desc: "Cartographie des sujets et des entités de votre domaine, cocon et maillage, cohérence thématique du site : ce qui fait comprendre votre expertise à Google comme aux modèles. L'IA aide à cartographier ; l'arbitrage éditorial reste le vôtre.",
  },
  {
    icon: BarChart3,
    title: 'Mesure, reporting et automatisations',
    desc: "Lecture d'un export de positions, synthèse mensuelle, suivi des citations IA sur un corpus stable, alertes : l'IA commente les données et automatise le récurrent. Avec la règle : positions et citations se mesurent en tendance, jamais en promesse.",
  },
]

/* ───────── Les atouts (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'Deux fronts couverts, pas un seul',
    desc: "La plupart des formations SEO IA enseignent à produire plus vite. Celle-ci ajoute ce qui décide de la visibilité de demain : être cité dans les réponses des IA. Vos équipes repartent avec les deux, et la façon dont ils se renforcent.",
  },
  {
    title: 'La vitesse sans le générique',
    desc: "L'IA mal utilisée produit du contenu que Google déclasse et que les IA ignorent. La formation apprend le contraire : briefs riches en entités, premiers jets relus et enrichis, sources citées. Ce qui tient face aux mises à jour et devient citable.",
  },
  {
    title: 'La technique démystifiée',
    desc: "Données structurées, JSON-LD, robots.txt, balisage : l'IA écrit et explique, vos équipes comprennent et contrôlent. Le fossé entre le SEO éditorial et le SEO technique se réduit.",
  },
  {
    title: 'Une mesure GEO qui tient la route',
    desc: "Un corpus de questions stable, des relevés répétés, une part de voix en tendance : la méthode que nous appliquons dans nos audits, transmise à vos équipes pour qu'elles la fassent vivre.",
  },
  {
    title: 'Formés par ceux qui le pratiquent',
    desc: "Masteria opère du SEO et du GEO pour ses clients et pour elle-même : la formation transmet une pratique, avec ses réussites et ses limites, pas une théorie de plaquette.",
  },
  {
    title: 'Des livrables qui servent le lendemain',
    desc: "Bibliothèque de prompts SEO, gabarits de brief et de page citable, check-list GEO, corpus de mesure : de quoi appliquer dès la semaine suivante sur vos propres pages.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Le SEO outillé par l'IA : recherche, briefs, contenu, technique",
    matin: [
      "Comprendre ce que les modèles font et ne font pas pour le SEO : capacités, limites, ce que Google sanctionne (contenu à l'échelle sans valeur)",
      "Panorama des outils : ChatGPT, Copilot, Claude, Gemini, Mistral, et leur articulation avec Search Console et vos outils SEO",
      "La méthode de la demande efficace appliquée au SEO : contexte, intention, entités, format, itération",
      "Atelier recherche : grappes de mots-clés, intentions et questions à partir de vos exports réels ; plan de cluster pilier et pages liées",
    ],
    apresmidi: [
      "Atelier brief : produire un brief complet (intention, plan, entités, questions, maillage) sur l'un de vos mots-clés",
      "Atelier contenu : du brief au premier jet à votre ton, variantes de titres et de métas, FAQ ; relecture et enrichissement humains",
      "Atelier technique : lire un rapport de crawl avec l'IA, générer et contrôler des données structurées Schema.org, prioriser les correctifs",
      "Cadre d'usage : originalité, sources, mention de l'IA, données clients dans les contenus, ce qu'on ne publie jamais sans vérifier",
    ],
  },
  {
    jour: 'Jour 2',
    titre: "Le GEO, l'architecture sémantique, la mesure et l'industrialisation",
    matin: [
      "Le GEO en clair : comment ChatGPT, Perplexity, Gemini et les AI Overviews sélectionnent leurs sources ; ce qu'un contenu citable contient",
      "Atelier page citable : restructurer une de vos pages (réponse directe, entités, données structurées, format) et vérifier l'accès des robots IA",
      "Atelier corpus : construire votre corpus de questions représentatif, relever les citations sur plusieurs moteurs, calculer une part de voix",
      "Architecture sémantique : cartographier les entités de votre domaine avec l'IA, cocon et maillage, cohérence thématique",
    ],
    apresmidi: [
      "Atelier mesure et reporting : commenter un export de positions, synthèse mensuelle, suivi des citations IA en tendance",
      "Automatiser le récurrent : alertes, briefs en série, contrôles techniques, avec l'IA et vos outils",
      "Industrialiser : la bibliothèque de prompts SEO de l'équipe, les gabarits, les assistants ou GPTs personnalisés",
      "Votre plan d'action : les trois usages à installer dans le mois, qui les porte, comment on mesure ; évaluation des acquis",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Search, title: 'Équipes SEO et acquisition', desc: "Recherche, briefs, technique, mesure : les usages qui multiplient votre capacité sans dégrader la qualité, et le GEO comme nouveau territoire à occuper avant les concurrents. Le cœur des ateliers est fait pour vous." },
  { icon: PenLine, title: 'Rédacteurs web et équipes contenu', desc: "Produire mieux et plus vite à partir de briefs riches, écrire citable pour les IA sans écrire pour les robots, relire et enrichir : la méthode qui protège votre valeur ajoutée." },
  { icon: Bot, title: 'Consultants SEO en agence', desc: "Industrialiser vos livrables (audits, briefs, reportings), ajouter le GEO à votre offre, former vos clients : la formation vous donne la méthode et les gabarits, sans vous rendre dépendants d'un outil." },
  { icon: Users, title: 'Responsables marketing digital', desc: "Comprendre où va la visibilité (Google et IA), arbitrer les efforts, mesurer honnêtement, fixer le cadre d'usage de l'équipe. La lecture d'ensemble sans jargon." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'apprend-on dans une formation SEO IA ?",
    a: "Deux choses, sur vos propres mots-clés et pages. D'abord le SEO outillé par l'IA : recherche d'intentions et clusters, briefs riches en entités, production de contenu relue et enrichie, technique et données structurées, mesure et automatisations. Ensuite le GEO (Generative Engine Optimization) : comprendre comment les IA sélectionnent leurs sources, structurer des pages citables, ouvrir ou non son site aux robots des IA, mesurer sa part de voix dans ChatGPT, Perplexity, Gemini et les AI Overviews. Et surtout la discipline qui rend tout cela durable : jamais de contenu à l'échelle sans valeur, relecture humaine, sources.",
  },
  {
    q: "Qu'est-ce que le GEO, et pourquoi le traiter dans une formation SEO ?",
    a: "Le GEO (Generative Engine Optimization, parfois AEO) est l'optimisation pour être cité dans les réponses générées par les IA : ChatGPT, Perplexity, Gemini, les AI Overviews de Google. Une part croissante des recherches reçoit une réponse directe sans clic ; sur ces requêtes, être absent des réponses revient à être absent. Les fondamentaux se recouvrent avec le SEO (contenu clair, site sain, données structurées), mais le GEO ajoute ses leviers : entités, formats citables, accès des robots IA, autorité, mesure sur corpus. Le traiter dans la même formation évite deux silos et deux prestataires.",
  },
  {
    q: "L'IA ne va-t-elle pas produire du contenu que Google pénalise ?",
    a: "Si on l'utilise mal, oui : du contenu à l'échelle sans valeur ajoutée est ce que Google déclasse depuis ses mises à jour sur le contenu utile, et ce que les IA ignorent. La formation enseigne l'inverse : des briefs riches en intentions et en entités, un premier jet à votre ton, une relecture et un enrichissement humains, des sources citées, une information réelle. L'IA accélère la production d'un contenu qui aurait été bon de toute façon ; elle ne transforme pas du vide en visibilité.",
  },
  {
    q: "Garantissez-vous des positions ou des citations dans les IA ?",
    a: "Non, et personne de sérieux ne le peut : les algorithmes de Google et les modèles d'IA évoluent en permanence. Ce que la formation garantit, c'est la méthode et la mesure : des actions qui augmentent objectivement vos chances (contenu citable, entités, données structurées, technique saine), une mesure honnête en tendance (positions, trafic, part de voix IA sur un corpus stable), et la capacité de vos équipes à itérer. Une formation qui vous promet la première position vous promet ce qui ne dépend pas d'elle.",
  },
  {
    q: "Sur quels outils la formation porte-t-elle ?",
    a: "Sur les IA génératives que votre équipe utilisera (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral) et sur leur articulation avec vos outils SEO existants : Search Console, Semrush, Ahrefs ou équivalents, votre CMS. Nous sommes indépendants des éditeurs : quand un outil est déployé, la formation s'y concentre ; sinon la première demi-journée compare sur vos cas. Pour approfondir un outil, voyez nos formations ChatGPT SEO ou Claude SEO ; pour un comparatif complet, notre panorama IA SEO.",
  },
  {
    q: "La formation travaille-t-elle sur nos vrais mots-clés et nos vraies pages ?",
    a: "Oui, c'est le principe. Avant la session, nous récupérons vos éléments : exports Search Console ou de votre outil SEO, deux ou trois pages représentatives, votre charte éditoriale, votre marché et vos concurrents. Chaque atelier part de là : votre grappe à structurer, votre brief à produire, votre page à rendre citable, votre corpus de questions. Les participants repartent avec des livrables directement utilisables.",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est de deux jours (14 heures) en intra-entreprise, en présentiel ou à distance, pour un groupe de 4 à 10 personnes. Une version d'une journée existe pour un périmètre resserré : le contenu outillé par l'IA seul, ou le GEO seul. Un accompagnement individuel est possible pour un responsable SEO ou un consultant. Les journées pleines alternent apports courts et ateliers pratiques, matin et après-midi.",
  },
  {
    q: "Combien coûte une formation SEO IA ?",
    a: "Le tarif intra-entreprise est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : deux jours représentent 3 960 € HT pour l'équipe. La formation étant certifiée Qualiopi, votre OPCO peut la prendre en charge dans le cadre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis détaillé sous 24 heures.",
  },
  {
    q: "Quelle différence avec votre agence SEO IA ?",
    a: "L'agence fait pour vous ; la formation apprend à vos équipes à faire. Beaucoup de clients combinent les deux : un audit SEO IA & GEO pour mesurer le point de départ et fixer les priorités, la formation pour que l'équipe interne exécute et fasse vivre, et un accompagnement plus léger ensuite. Si vous préférez déléguer entièrement, c'est le rôle de notre agence SEO IA. Le cadrage gratuit sert à choisir le bon montage.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation SEO IA — Masteria',
  description: "Formation au référencement à l'ère de l'IA générative, sur les mots-clés et pages réels des participants : recherche d'intentions et clusters, briefs et contenu outillés par l'IA avec relecture humaine, technique et données structurées, GEO (être cité par ChatGPT, Perplexity, Gemini et les AI Overviews), architecture sémantique, mesure et automatisations. Multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). 2 jours en intra, présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Structurer une recherche de mots-clés et d'intentions avec l'IA à partir de données réelles",
    "Produire des briefs riches en entités et un contenu relu, citable et utile",
    "Générer et contrôler des données structurées, lire un audit technique avec l'IA",
    "Rendre une page citable par les IA et mesurer sa part de voix sur un corpus stable",
    "Automatiser le reporting et les tâches SEO récurrentes",
  ],
  about: 'Référencement naturel et optimisation pour les moteurs génératifs (SEO et GEO)',
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: 'Aucun prérequis technique. Pratique du SEO, du contenu ou du marketing digital.',
  audience: 'Équipes SEO et contenu, acquisition, marketing digital, consultants SEO',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}
/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programme de la formation SEO IA Masteria (2 jours)",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((j, ji) => [
    { '@type': 'ListItem', position: ji * 2 + 1, name: `${j.jour} · Matin — ${j.titre}`, description: j.matin.join(' ; ') },
    { '@type': 'ListItem', position: ji * 2 + 2, name: `${j.jour} · Après-midi — ${j.titre}`, description: j.apresmidi.join(' ; ') },
  ]),
}

/* Article : auteur + dates (E-E-A-T + fraîcheur GEO), entités liées. */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-ia-seo#article',
  headline: "Formation SEO IA : le référencement outillé par l'IA et le GEO, sur vos propres pages",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2025-10-05',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-seo#webpage' },
  about: [
    { '@type': 'Thing', name: 'Optimisation pour les moteurs de recherche', sameAs: 'https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche' },
    { '@type': 'Thing', name: 'Optimisation pour les moteurs génératifs', sameAs: 'https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_g%C3%A9n%C3%A9ratifs' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
  ],
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
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

function DayBlock({ jour, titre, matin, apresmidi, isDesktop }) {
  const col = { flex: 1, minWidth: 0 }
  const list = { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }
  const li = { fontSize: 14.5, color: '#374151', lineHeight: 1.65, display: 'flex', gap: 9, alignItems: 'flex-start' }
  return (
    <div style={{ ...cardStyle, padding: 'clamp(22px, 3vw, 30px)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: c }}>{jour}</span>
        <h3 style={{ ...h3Style, fontSize: 18 }}>{titre}</h3>
      </div>
      <div style={{ display: 'flex', gap: isDesktop ? 28 : 20, flexDirection: isDesktop ? 'row' : 'column' }}>
        <div style={col}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>Matin</div>
          <ul style={list}>{matin.map((m, i) => <li key={i} style={li}><Check size={16} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />{m}</li>)}</ul>
        </div>
        <div style={col}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>Après-midi</div>
          <ul style={list}>{apresmidi.map((m, i) => <li key={i} style={li}><Check size={16} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />{m}</li>)}</ul>
        </div>
      </div>
    </div>
  )
}

export default function FormationIASEOPage() {
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
    { name: "Formation SEO IA", slug: SLUG },
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
        courseData={COURSE_DATA}
        datePublished="2025-10-05"
        dateModified="2026-08-10"
        speakable={['#geo-summary', '#en-bref']}
        citations={[
          { name: 'Google Search Central — AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
          { name: 'Google Search Central — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
          { name: 'Qualiopi, marque de certification qualité des prestataires de formation — travail-emploi.gouv.fr', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
        ]}
        extraJsonLd={[programmeJsonLd, articleJsonLd]}
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation SEO IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation métier · SEO & GEO
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation SEO IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>le référencement outillé par l'IA, et le GEO pour être cité par les IA</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation SEO IA de Masteria apprend à vos équipes, sur vos propres mots-clés et pages, à outiller tout le référencement avec l'IA générative (<strong style={{ color: '#fff', fontWeight: 700 }}>recherche d'intentions, briefs, contenu relu, technique, données structurées, mesure</strong>) et à occuper le nouveau front : le GEO, être cité dans les réponses de ChatGPT, Perplexity, Gemini et des AI Overviews. Deux jours, multi-outils, certifiée Qualiopi et finançable par votre OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le SEO change deux fois à la fois : l'IA accélère toute la chaîne de production, et une part croissante des recherches reçoit une réponse directe d'une IA, sans clic. La formation traite les deux mouvements ensemble, avec la discipline qui les rend durables : jamais de contenu à l'échelle sans valeur, relecture humaine, mesure en tendance. Transmise par une équipe qui pratique le SEO et le GEO pour ses clients et pour elle-même.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir le programme
            </a>
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

      {/* ── CE QUE L'IA CHANGE PAR MISSION (éditorial asymétrique) ── */}
      <section id="missions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Activité par activité</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que change l'IA dans le travail d'une équipe SEO ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>L'IA générative touche six activités du SEO : la recherche de mots-clés et d'intentions, les briefs et la production de contenu, le GEO (être cité par les IA), la technique et les données structurées, l'architecture sémantique, la mesure et les automatisations. Dans chacune, elle accélère et structure ; l'arbitrage éditorial, la relecture et la vérification restent aux professionnels.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La formation couvre les six, avec un poids ajusté à votre équipe au cadrage. Pour déléguer plutôt que former, voyez notre <Link to="/agence-seo-ia" style={aStyle}>agence SEO IA</Link> ; pour mesurer votre point de départ, l'<Link to="/audit-seo-ia" style={aStyle}>audit SEO IA & GEO</Link>.
              </p>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {MISSIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}><IconTile icon={item.icon} /></div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES ATOUTS DE L'IA POUR LA FINANCE ── */}
      <section id="atouts" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ce que vous y gagnez</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Les atouts de l'IA générative pour une équipe SEO
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six gains : deux fronts couverts (le SEO outillé et le GEO) au lieu d'un, la vitesse sans le générique, la technique démystifiée, une mesure GEO qui tient la route, une transmission par des praticiens, et des livrables applicables dès la semaine suivante sur vos propres pages.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {ATOUTS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Un mot d'honnêteté qui rend ces gains durables : ni les positions ni les citations ne se garantissent, les algorithmes et les modèles évoluant sans cesse. Ce qui se garantit, c'est la méthode, la mesure et la capacité de vos équipes à itérer. C'est exactement ce que la formation transmet.
          </p>
        </div>
      </section>

      {/* ── PROGRAMME 2 JOURS (ancre sombre — pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Programme de la formation SEO IA sur 2 jours
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : le SEO outillé par l'IA, de la recherche d'intentions aux briefs, au contenu relu et à la technique, sur vos mots-clés et vos pages réels. Jour 2 : le GEO (comment les IA citent, la page citable, le corpus de mesure), l'architecture sémantique, la mesure et les automatisations, puis l'industrialisation avec la bibliothèque de prompts de l'équipe et votre plan d'action.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le programme s'ajuste au cadrage : une équipe contenu approfondit le jour 1, une équipe acquisition ou une agence le jour 2. En version 1 jour, on choisit un front : le contenu outillé par l'IA, ou le GEO.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation SEO IA ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À ceux qui font ou pilotent le référencement : équipes SEO et acquisition, rédacteurs web et équipes contenu, consultants SEO en agence qui veulent industrialiser et ajouter le GEO à leur offre, responsables marketing digital qui arbitrent les efforts. Sans prérequis technique : la pratique du SEO, du contenu ou du marketing digital suffit.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, marginTop: 12 }}>
            {PROFILS.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CADRE : RGPD, DROITS, MARQUE (E-E-A-T + réassurance) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Le cadre, traité de front</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Contenu utile, sources, mention de l'IA : ce que la formation pose noir sur blanc
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le SEO outillé par l'IA a une réputation à tenir face à Google et face aux lecteurs. La formation formalise avec vous un cadre d'usage : ce qui distingue un contenu utile d'un contenu à l'échelle sans valeur (et ce que Google en fait), la relecture et l'enrichissement humains systématiques, les sources citées, la mention de l'IA quand elle s'impose, l'originalité et les droits sur les contenus générés, les données clients qu'on ne met jamais dans un prompt. Ce cadre est un livrable, à intégrer à votre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>. Nous pratiquons le SEO et le GEO au quotidien, pour nos clients et pour notre propre site : la formation transmet une pratique, avec ses réussites et ses limites.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Contenu utile vs contenu à l\'échelle : la ligne que Google trace', 'Relecture et enrichissement humains, systématiques', 'Sources citées, mention de l\'IA quand elle s\'impose', 'Aucune donnée client dans un prompt'].map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIF & FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Tarif et financement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>Combien coûte la formation, et comment la financer ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>1 980 € HT par jour de formation en intra-entreprise, pour le groupe (jusqu'à 10 participants), soit 3 960 € HT les deux jours. Certifiée Qualiopi, la formation est finançable par votre OPCO au titre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis sous 24 heures.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le cadrage préalable avec vos éléments (exports SEO, pages représentatives, charte éditoriale, concurrents), l'animation des deux journées en présentiel ou à distance, les supports, les livrables (bibliothèque de prompts SEO, gabarits de brief et de page citable, check-list GEO, corpus de mesure), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
              </p>
            </div>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Landmark size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>La prise en charge OPCO</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Masteria est certifiée Qualiopi : la formation est éligible au financement OPCO, selon votre branche et votre effectif. Nous fournissons programme, convention et pièces du dossier ; le dépôt se fait avant le début de la formation. Identifiez votre opérateur avec <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> et le détail des dispositifs sur <Link to="/financement-formation-ia" style={aStyle}>financer sa formation IA</Link>. Pas d'éligibilité CPF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation SEO IA : les questions fréquentes</h2>
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

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour aller plus loin</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>Approfondir par outil, ou élargir</h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            La formation métier compare les outils ; les formations par outil approfondissent celui que votre équipe a retenu.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence SEO IA', href: '/agence-seo-ia', tag: 'Déléguer', desc: "Quand vous préférez confier le SEO et le GEO : l'accompagnement opéré pour vous." },
              { label: 'Audit SEO IA & GEO', href: '/audit-seo-ia', tag: 'Point de départ', desc: "Mesurer votre visibilité sur Google et dans les IA avant de former : les priorités objectivées." },
              { label: 'Audit GEO', href: '/audit-geo-ia', tag: 'Visibilité IA', desc: "Le versant IA seul : taux de citation, part de voix, robots IA, plan pour devenir citable." },
              { label: 'Formation ChatGPT SEO', href: '/formation-chatgpt-seo', tag: 'Par outil', desc: "Approfondir ChatGPT pour le SEO : GPTs, projets, recherche, analyse de fichiers." },
              { label: 'Formation Claude SEO', href: '/formation-claude-seo', tag: 'Par outil', desc: "Claude pour la rédaction longue, les projets par site et les compétences réutilisables." },
              { label: 'Panorama IA SEO (5 outils)', href: '/formation-multi-outils-seo', tag: 'Comparatif', desc: "Quand le choix d'outil est ouvert : les cinq IA comparées sur vos cas SEO en 2 jours." },
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Métier voisin', desc: "L'IA pour toute l'équipe marketing : contenu, campagnes, réseaux, analyse." },
              { label: 'Bibliothèque de prompts', href: '/bibliotheque-de-prompts', tag: 'Ressource', desc: "Des modèles de prompts SEO et contenu pour prolonger la formation au quotidien." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}>
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation SEO IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Formons votre équipe SEO sur ses vrais mots-clés</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre équipe, vos outils, votre marché et vos enjeux du moment (contenu, technique, GEO). Nous revenons vers vous sous 24 heures avec un programme ajusté, les dates possibles et le devis, dossier OPCO compris.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Présentiel & distanciel</p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
