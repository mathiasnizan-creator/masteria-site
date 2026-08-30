import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, MapPin, Scale, ShieldCheck, Target, Users, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation cse ia » (slug /formation-cse-ia), côté FORMATION.
 * Cible (Semrush fr, 2026-08-28) : « formation cse ia » (70/mois, KD 5,
 * intention commerciale) — SERP quasi vierge, first-mover.
 *
 * DOUBLE AUDIENCE assumée : les élus du CSE qui veulent instruire les
 * consultations IA, ET les directions/DRH qui veulent un dialogue social
 * de qualité sur leurs projets IA. Posture NEUTRE et factuelle.
 *
 * CADRE JURIDIQUE VÉRIFIÉ le 2026-08-30 :
 *  - art. L2312-8 C. trav. (consultation sur l'introduction de nouvelles
 *    technologies, entreprises d'au moins 50 salariés) — cité via le Code
 *    du travail numérique (Légifrance bloque les robots, jamais en citation) ;
 *  - TJ Nanterre, 14 février 2025, n° 24/01457 : suspension en référé du
 *    déploiement d'applications d'IA, phase pilote comprise, jusqu'à la fin
 *    de la consultation du CSE. Formulé sobrement, sans dramatisation.
 * FINANCEMENT spécifique : budget de fonctionnement du CSE (voie classique
 * pour la formation des élus) OU employeur (Qualiopi/OPCO) — sans promesse.
 * Entités Wikipédia vérifiées 200 le 2026-08-30.
 */

const SLUG = 'formation-cse-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation CSE & IA : comprendre et consulter | Masteria'
const META_DESC = "Formation CSE & IA : comprendre l'IA sans jargon, instruire la consultation, poser les bonnes questions, rendre un avis motivé. 1 jour, pour élus et directions. Qualiopi."
const KEYWORDS = "formation cse ia, formation ia cse, cse intelligence artificielle, consultation cse ia, formation élus cse ia, avis cse projet ia"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

const thStyle = { textAlign: 'left', padding: '12px 16px', fontSize: 12.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6B7280', borderBottom: '2px solid #E5E7EB', fontFamily: 'Nunito, sans-serif' }
const tdStyle = { padding: '14px 16px', fontSize: 14.5, color: '#374151', lineHeight: 1.6, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }

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
  { icon: Users, label: 'Pour les élus du CSE et pour les directions' },
  { icon: Scale, label: 'Posture neutre : les faits, le droit, la méthode' },
  { icon: Building2, label: '1 jour, dans vos locaux ou à distance' },
  { icon: GraduationCap, label: 'Certifié Qualiopi' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "1 jour (7 h) ; 2 jours possibles avec ateliers d'instruction approfondis" },
  { label: 'Pour qui', value: "Élus titulaires et suppléants du CSE, représentants syndicaux, et côté direction : DRH, relations sociales, chefs de projet IA" },
  { label: 'Contenu', value: "Comprendre l'IA sans jargon, le cadre de la consultation (art. L2312-8), les questions à poser, l'avis motivé, le suivi" },
  { label: 'Posture', value: "Neutre et factuelle : indépendants des éditeurs, ni conseil de la direction ni conseil des élus, la même information pour tous" },
  { label: 'Livrables', value: "Grille d'instruction d'une consultation IA, trame d'avis motivé, points de vigilance par type de projet" },
  { label: 'Financement', value: "Budget de fonctionnement du CSE (voie classique pour les élus) ou employeur ; action de formation certifiée Qualiopi ; devis sous 24 h" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi former le CSE'],
  ['#programme', 'Programme de la journée'],
  ['#projets', 'Projet par projet'],
  ['#tarif', 'Tarif et financement'],
  ['#lexique', 'Lexique'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi former le CSE (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Scale,
    title: 'La consultation est obligatoire, et préalable',
    desc: "L'article L2312-8 du Code du travail impose de consulter le CSE sur l'introduction de nouvelles technologies. En février 2025, le juge des référés de Nanterre a suspendu un déploiement d'IA, phase pilote comprise, jusqu'à la fin de la consultation : le calendrier n'est pas une option.",
  },
  {
    icon: Eye,
    title: "Un avis éclairé vaut mieux qu'un avis hostile",
    desc: "Face à un projet IA mal compris, un CSE inquiet demande des délais, des expertises, parfois le juge. Des élus qui comprennent ce que l'outil fait réellement posent de meilleures questions, obtiennent de meilleures garanties, et rendent des avis qui font avancer.",
  },
  {
    icon: ShieldCheck,
    title: 'Les sujets de vigilance sont réels',
    desc: "Données personnelles des salariés, outils qui touchent au recrutement ou à l'évaluation (encadrés par le règlement européen sur l'IA), impact sur la charge et les compétences : ce ne sont pas des fantasmes, ce sont les points que la consultation sert précisément à instruire.",
  },
  {
    icon: Users,
    title: "L'intérêt est partagé",
    desc: "La direction veut déployer sans blocage ni contentieux ; les élus veulent exercer leur rôle sérieusement. Une base de connaissance commune, factuelle, sert les deux : c'est exactement ce que la journée installe, élus et direction dans la même salle quand c'est possible.",
  },
]

/* ───────── Programme 1 jour (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'La journée',
    titre: "Comprendre le matin, instruire l'après-midi",
    resume: "Les élus repartent avec une grille d'instruction et une trame d'avis motivé ; la direction avec une consultation mieux préparée.",
    matin: [
      { t: "L'IA sans jargon, démontrée en direct", d: "Ce que font réellement les modèles, des assistants aux agents : démonstrations sur des cas de travail concrets, capacités et limites, sans récit marketing." },
      { t: 'Ce que ça change aux postes de travail', d: "Fonction par fonction, ce que l'IA modifie dans les tâches, la charge, les compétences attendues : la matière même de la consultation." },
      { t: 'Le cadre juridique de la consultation', d: "L'article L2312-8 (introduction de nouvelles technologies), le déroulé d'une information-consultation, et la jurisprudence de février 2025 : la consultation précède le déploiement, phase pilote comprise quand le projet est engagé." },
      { t: "Le règlement européen sur l'IA, côté CSE", d: "Les usages RH encadrés (tri de candidatures, évaluation), l'obligation de littératie de l'article 4, la transparence : ce que les élus peuvent légitimement demander." },
      { t: "Données des salariés : ce qu'un outil voit", d: "RGPD au travail, surveillance, journaux d'activité : distinguer ce qui est acceptable, encadrable et hors limites." },
    ],
    apresmidi: [
      { t: "La grille d'instruction d'une consultation IA", d: "Les pièces à demander (finalités, données, paramétrages, garanties), les questions qui comptent, les délais : une méthode réutilisable à chaque projet." },
      { t: 'Les points de vigilance, projet par projet', d: "Assistants bureautiques, agents et automatisations, outils RH, outils de suivi d'activité : chaque famille a ses questions propres, résumées dans le tableau de cette page." },
      { t: 'Atelier : instruire un cas concret', d: "Sur un projet réel de l'entreprise ou un cas proche : les participants déroulent la grille, formulent leurs questions, identifient les garanties à obtenir." },
      { t: "Rédiger un avis motivé qui compte", d: "Structure, faits, réserves et conditions : un avis argumenté pèse dans le dossier, quel que soit son sens. Trame fournie et travaillée en séance." },
      { t: 'Le suivi après le déploiement', d: "Clause de revoyure, indicateurs à suivre, remontées des salariés : la consultation ne s'arrête pas au jour du vote." },
    ],
  },
]

/* ───────── Points de vigilance par type de projet (tableau divergent) ───────── */

const PROJETS_TABLE = [
  {
    type: 'Assistants bureautiques (ChatGPT, Copilot, Claude, Gemini)',
    questions: "Quelles données peuvent y entrer, quelles versions (entreprise ou grand public), qui est formé, quelles règles d'usage écrites",
    vigilance: "Comptes personnels non cadrés, absence de charte, formation réservée à certaines équipes",
  },
  {
    type: 'Agents et automatisations (workflows, tri, réponses préparées)',
    questions: "Quelles décisions l'outil prépare ou prend, où est la validation humaine, quel journal des actions, qui supervise",
    vigilance: "Autonomie sans relecture sur ce qui engage, absence de traçabilité, charge déplacée sans être discutée",
  },
  {
    type: "Outils RH (recrutement, évaluation, mobilité)",
    questions: "Le règlement européen encadre ces usages : quelle classification, quelles garanties contre les biais, quel recours humain",
    vigilance: "Tri automatisé sans contrôle, critères opaques, données de candidats conservées sans cadre",
  },
  {
    type: "Outils de suivi d'activité et de productivité",
    questions: "Finalité déclarée, proportionnalité, information des salariés, durée de conservation, accès aux données individuelles",
    vigilance: "Surveillance déguisée en pilotage, indicateurs individuels utilisés à d'autres fins que celles déclarées",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que la formation CSE & IA de Masteria ?",
    a: "Une journée pour mettre élus et direction au même niveau sur l'intelligence artificielle : comprendre ce que font réellement les outils (démonstrations à l'appui), connaître le cadre de la consultation (article L2312-8 du Code du travail, jurisprudence récente, règlement européen sur l'IA), puis apprendre à instruire : pièces à demander, questions à poser, avis motivé, suivi. Les participants repartent avec une grille d'instruction et une trame d'avis réutilisables à chaque projet.",
  },
  {
    q: 'La consultation du CSE est-elle vraiment obligatoire avant de déployer une IA ?',
    a: "Dans les entreprises d'au moins 50 salariés, le CSE doit être informé et consulté sur l'introduction de nouvelles technologies, ce qui couvre les projets d'IA (article L2312-8 du Code du travail). Et la consultation précède le déploiement : en février 2025, le tribunal judiciaire de Nanterre a suspendu en référé le déploiement d'applications d'IA, phase pilote comprise, jusqu'à la fin de la consultation, considérant que le projet était déjà suffisamment engagé. La formation présente cette décision et ce qu'elle implique concrètement pour le calendrier d'un projet.",
  },
  {
    q: 'Une phase pilote ou une expérimentation dispense-t-elle de consulter ?',
    a: "C'est précisément le point tranché en février 2025 : quand le déploiement dépasse la simple expérimentation et constitue un projet engagé, la consultation s'impose dès la phase pilote. La frontière s'apprécie au cas par cas (ampleur, durée, nombre de salariés concernés, intégration aux outils de travail), et la formation donne les critères des deux côtés : ce qu'une direction peut tester sereinement, et ce qui déclenche la consultation.",
  },
  {
    q: "La formation s'adresse-t-elle aux élus, à la direction, ou aux deux ?",
    a: "Aux deux, et idéalement ensemble : la même information factuelle, dans la même salle, fait gagner un temps considérable à la consultation qui suit. Quand le contexte social le justifie, la journée se tient pour les élus seuls (souvent financée par le budget de fonctionnement du CSE) ou pour la direction seule. Notre posture est la même dans tous les cas : indépendants des éditeurs d'IA, ni conseil de la direction ni conseil des élus, les faits, le droit et la méthode.",
  },
  {
    q: 'Quelles questions le CSE doit-il poser sur un projet IA ?',
    a: "Les grandes familles : la finalité (quel problème l'outil résout, pour qui), les données (lesquelles entrent dans l'outil, où elles vont, versions entreprise ou grand public), l'impact sur le travail (tâches, charge, compétences, formation prévue), les garanties (validation humaine sur ce qui engage, traçabilité, règles d'usage écrites), et le suivi (indicateurs, clause de revoyure). La grille d'instruction remise en formation détaille ces questions projet par projet : assistants, agents, outils RH, outils de suivi d'activité.",
  },
  {
    q: "Que dit le règlement européen sur l'IA pour les sujets du CSE ?",
    a: "Trois choses utiles aux élus : certains usages RH (tri automatisé de candidatures, évaluation des personnes) font partie des systèmes spécifiquement encadrés ; l'article 4 impose à l'employeur de soutenir la littératie IA des personnes qui utilisent ces systèmes, ce qui inclut la formation ; et des obligations de transparence s'appliquent quand une IA interagit avec des personnes. La formation replace ces règles dans le calendrier réel du règlement, sans dramatisation ni minimisation.",
  },
  {
    q: "Qui finance la formation : le CSE ou l'employeur ?",
    a: "Les deux voies existent. Le budget de fonctionnement du CSE finance classiquement la formation des élus : c'est la voie de l'autonomie, sans accord de l'employeur. L'employeur peut aussi la prendre en charge, notamment quand la session réunit élus et direction ; Masteria étant certifiée Qualiopi, cette voie ouvre le dossier OPCO dans le cadre du plan de développement des compétences, la décision de prise en charge restant à l'opérateur. Le devis précise les deux options.",
  },
  {
    q: 'La formation est-elle neutre ?',
    a: "Oui, et c'est sa condition d'utilité : nous sommes indépendants des éditeurs d'IA, nous ne vendons ni licences ni déploiement dans cette journée, et le contenu est identique quel que soit le commanditaire. Les capacités des outils sont montrées telles qu'elles sont, les limites aussi, le droit est présenté sans lecture partisane. Un CSE peut vérifier cette neutralité en amont lors du cadrage, qui est gratuit.",
  },
  {
    q: 'Peut-on suivre la formation à distance ?',
    a: "Oui. La journée se tient dans vos locaux ou en classe virtuelle, souvent en deux demi-journées à distance, ce qui facilite la présence des élus multi-sites. Partout en France ; le format s'adapte au calendrier des réunions du CSE.",
  },
  {
    q: "Que reste-t-il au CSE après la formation ?",
    a: "La grille d'instruction d'une consultation IA (pièces, questions, garanties, délais), la trame d'avis motivé, le tableau des points de vigilance par type de projet, et une base commune de compréhension qui servira à chaque projet suivant. L'objectif est l'autonomie : que le CSE instruise seul les consultations à venir, et sache quand un appui extérieur se justifie.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation CSE & IA — Masteria',
  description: "Formation d'une journée pour les élus du CSE et les directions : comprendre l'intelligence artificielle sans jargon (démonstrations), connaître le cadre de la consultation (article L2312-8 du Code du travail, jurisprudence 2025, règlement européen sur l'IA), instruire un projet (grille de questions, pièces, garanties), rédiger un avis motivé et organiser le suivi. Posture neutre et factuelle. Certifiée Qualiopi.",
  level: 'Tous niveaux, aucun prérequis technique',
  teaches: [
    "Comprendre ce que font réellement les outils d'IA déployés en entreprise, des assistants aux agents",
    "Connaître le cadre de la consultation : article L2312-8, calendrier, jurisprudence récente",
    "Identifier les points de vigilance par type de projet : assistants, agents, outils RH, suivi d'activité",
    "Instruire une consultation : pièces à demander, questions à poser, garanties à obtenir",
    "Rédiger un avis motivé et organiser le suivi après déploiement",
  ],
  about: "Comité social et économique et intelligence artificielle (consultation, dialogue social)",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique ou juridique.',
  audience: 'Élus du CSE (titulaires, suppléants), représentants syndicaux, DRH, relations sociales, chefs de projet IA',
  locationName: 'Masteria — dans vos locaux (France) ou à distance',
}

/* Le programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation CSE & IA (1 jour)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    { '@type': 'ListItem', position: di * 2 + 1, name: `Matin — Comprendre`, description: day.matin.map(m => m.t).join(' ; ') },
    { '@type': 'ListItem', position: di * 2 + 2, name: `Après-midi — Instruire`, description: day.apresmidi.map(m => m.t).join(' ; ') },
  ]),
}

/* Article : auteur, dates, entités (E-E-A-T + GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-cse-ia#article',
  headline: 'Formation CSE & IA : des élus éclairés pour une consultation utile',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-cse-ia#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30. */
  about: [
    { '@type': 'Thing', name: 'Comité social et économique', sameAs: 'https://fr.wikipedia.org/wiki/Comit%C3%A9_social_et_%C3%A9conomique' },
    { '@type': 'Thing', name: 'Dialogue social', sameAs: 'https://fr.wikipedia.org/wiki/Dialogue_social' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

/* ── GEO : lexique CSE & IA (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique de la consultation CSE sur un projet IA',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'CSE', description: "Comité social et économique : l'instance de représentation du personnel, obligatoire à partir de 11 salariés, dotée d'attributions consultatives élargies à partir de 50 salariés, dont la consultation sur l'introduction de nouvelles technologies." },
    { '@type': 'DefinedTerm', name: 'Information-consultation', description: "Procédure par laquelle l'employeur remet au CSE des informations précises et écrites sur un projet, laisse un délai d'examen, répond aux questions, puis recueille un avis. Pour un projet d'IA, elle précède le déploiement." },
    { '@type': 'DefinedTerm', name: 'Introduction de nouvelles technologies', description: "Motif de consultation prévu à l'article L2312-8 du Code du travail : le déploiement d'outils d'IA qui modifient l'organisation ou les conditions de travail entre dans ce cadre." },
    { '@type': 'DefinedTerm', name: 'Avis motivé', description: "L'avis rendu par le CSE au terme de la consultation : favorable, défavorable ou assorti de réserves et de conditions. Un avis argumenté, appuyé sur des faits et des demandes précises, pèse dans le dossier quel que soit son sens." },
    { '@type': 'DefinedTerm', name: 'Budget de fonctionnement du CSE', description: "Budget propre du comité (distinct du budget des activités sociales), qui finance classiquement la formation des élus : c'est la voie d'autonomie pour se former à l'IA sans accord de l'employeur." },
    { '@type': 'DefinedTerm', name: 'BDESE', description: "Base de données économiques, sociales et environnementales : le support d'information du CSE. Les éléments d'un projet IA (finalités, périmètre, calendrier) ont vocation à y figurer pour nourrir la consultation." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Obligation de l'article 4 du règlement européen sur l'IA : l'employeur soutient la montée en compétence des personnes qui utilisent des systèmes d'IA. Un argument concret que les élus peuvent mobiliser pour demander de la formation." },
  ],
}

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

/* Sources d'autorité : WebPage.citation + bloc visible. URLs vérifiées 200. */
const PAGE_CITATIONS = [
  { name: "Article L2312-8 du Code du travail (consultation sur l'introduction de nouvelles technologies) — Code du travail numérique", url: 'https://code.travail.gouv.fr/code-du-travail/l2312-8' },
  { name: "Le comité social et économique (CSE), ministère du Travail et de l'Emploi", url: 'https://travail-emploi.gouv.fr/le-comite-social-et-economique-cse' },
  { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
]

export default function FormationCseIaPage() {
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
    { name: 'Formation CSE & IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        courseData={COURSE_DATA}
        faqItems={FAQ}
        datePublished="2026-08-30"
        dateModified="2026-08-30"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[programmeJsonLd, articleJsonLd, termsJsonLd]}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation CSE & IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · CSE & dialogue social
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation CSE & IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>des élus éclairés pour une consultation utile</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation CSE & IA met élus et direction au même niveau sur l'intelligence artificielle : comprendre ce que font réellement les outils, connaître le cadre de la consultation (article L2312-8, jurisprudence 2025, règlement européen), puis <strong style={{ color: '#fff', fontWeight: 700 }}>instruire : les pièces à demander, les questions à poser, l'avis motivé, le suivi</strong>. Une journée, posture neutre et factuelle, certifiée Qualiopi.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le déploiement de l'IA passe par le CSE : la consultation est obligatoire et, depuis la jurisprudence de février 2025, elle précède le projet, phase pilote comprise. Le meilleur scénario pour tout le monde est un comité qui comprend le sujet : la consultation devient un examen sérieux au lieu d'un bras de fer.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un devis sous 24 h
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

          {/* En bref — synthèse citable (GEO), carte sombre */}
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

      {/* ── SOMMAIRE ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '14px 24px' }}>
        <div style={{ ...wrap, display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', fontFamily: 'Nunito, sans-serif' }}>Sur cette page</span>
          {SOMMAIRE.map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 13.5, color: '#374151', fontWeight: 600, textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── POURQUOI FORMER LE CSE ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le point de départ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi former le CSE à l'intelligence artificielle ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce que la consultation du CSE sur les projets d'IA est obligatoire et préalable, et qu'une consultation utile suppose des élus qui comprennent le sujet. Des élus formés posent de meilleures questions, obtiennent de meilleures garanties, et rendent des avis qui pèsent : c'est l'intérêt des salariés comme celui du projet.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Côté direction, cette journée s'articule avec la <Link to="/formation-ia-comex" style={aStyle}>session COMEX</Link> et la <Link to="/formation-gouvernance-ia" style={aStyle}>gouvernance IA</Link> : le cadre se construit aux deux bouts du dialogue social.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {POURQUOI.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE PROGRAMME (ancre sombre) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Le programme de la journée : comprendre le matin, instruire l'après-midi
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le matin pose la compréhension : l'IA démontrée sans jargon, ce qu'elle change aux postes, le cadre juridique de la consultation et les données des salariés. L'après-midi outille : la grille d'instruction, les points de vigilance par type de projet, un atelier sur cas concret, l'avis motivé et le suivi.</strong>
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {PROGRAMME.map(day => (
              <div key={day.jour} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(22px, 3.5vw, 32px)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA' }}>{day.jour}</span>
                  <h3 style={{ ...h3Style, fontSize: 19, color: '#F8FAFC' }}>{day.titre}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#94A3B8', margin: '0 0 20px' }}>{day.resume}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(18px, 3vw, 32px)' }}>
                  {[['Matin — Comprendre', day.matin], ['Après-midi — Instruire', day.apresmidi]].map(([label, items]) => (
                    <div key={label}>
                      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7DA9F0', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>{label}</div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                        {items.map(item => (
                          <li key={item.t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 99, background: '#60A5FA', flexShrink: 0, marginTop: 8 }} />
                            <div>
                              <div style={{ fontSize: 14.5, fontWeight: 700, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif', marginBottom: 3 }}>{item.t}</div>
                              <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 800 }}>
            Le cadrage, gratuit, adapte la journée au contexte : projet déjà annoncé ou anticipation, session commune élus-direction ou séparée, taille de l'entreprise. Un format de 2 jours ajoute des ateliers d'instruction approfondis sur vos projets réels.
          </p>
        </div>
      </section>

      {/* ── PROJET PAR PROJET (tableau divergent) ── */}
      <section id="projets" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>La grille de lecture</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que le CSE peut demander, projet par projet
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Tous les projets d'IA ne posent pas les mêmes questions. Le tableau résume les quatre familles que la consultation rencontre le plus, avec les questions clés et les points de vigilance de chacune : c'est la version courte de la grille d'instruction remise en formation.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Type de projet</th>
                  <th style={thStyle} scope="col">Les questions clés</th>
                  <th style={thStyle} scope="col">Points de vigilance</th>
                </tr>
              </thead>
              <tbody>
                {PROJETS_TABLE.map((row, i) => (
                  <tr key={row.type}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', borderBottom: i === PROJETS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.type}</td>
                    <td style={{ ...tdStyle, borderBottom: i === PROJETS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.questions}</td>
                    <td style={{ ...tdStyle, borderBottom: i === PROJETS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.vigilance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '24px 0 0', maxWidth: 880 }}>
            Côté cadre d'usage, cette grille rejoint la <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link> : quand la charte existe et que le CSE l'a examinée, la plupart des consultations suivantes s'instruisent beaucoup plus vite.
          </p>
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
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT la journée, deux voies de financement
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La formation CSE & IA suit la grille unique de Masteria : 1 980 € HT la journée, pour l'ensemble du groupe (jusqu'à 12 participants). Deux voies de financement, et le devis présente les deux : le <strong>budget de fonctionnement du CSE</strong>, voie classique et autonome pour la formation des élus, sans accord de l'employeur ; ou <strong>l'employeur</strong>, notamment pour les sessions communes élus-direction, avec le dossier OPCO possible puisque Masteria est certifiée Qualiopi (plan de développement des compétences, décision de prise en charge à l'opérateur). Pas d'éligibilité CPF. Les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  "1 980 € HT la journée, pour le groupe (jusqu'à 12 personnes)",
                  'Finançable sur le budget de fonctionnement du CSE',
                  "Ou par l'employeur : Qualiopi, dossier OPCO préparé ensemble",
                  'Devis sous 24 h après un cadrage gratuit et confidentiel',
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

      {/* ── E-E-A-T ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui vous forme</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un cabinet qui voit les deux côtés de la consultation
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria est un cabinet indépendant des éditeurs, spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022. Nous déployons l'IA en entreprise au quotidien, du comité de direction aux équipes : nous savons ce que les outils font vraiment, ce que les directions projettent et ce que les salariés vivent. C'est cette double connaissance, technique et de terrain, que la journée met au service du dialogue social, avec la même information pour tous. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> décrivent ces déploiements.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['Depuis 2022', 'spécialisé uniquement IA'],
                ['+1 500', 'professionnels formés'],
                ['Neutre', 'indépendant des éditeurs'],
                ['Qualiopi', 'actions de formation certifiées'],
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

      {/* ── LEXIQUE VISIBLE (mêmes termes que le DefinedTermSet JSON-LD) ── */}
      <section id="lexique" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Le vocabulaire</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            La consultation IA en sept termes
          </h2>
          <p style={answerStyle}>
            <strong>Sept termes suffisent pour suivre une consultation IA de bout en bout : CSE, information-consultation, introduction de nouvelles technologies, avis motivé, budget de fonctionnement, BDESE, littératie IA. Les voici tels que nous les enseignons.</strong>
          </p>
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, margin: 0 }}>
            {termsJsonLd.hasDefinedTerm.map(t => (
              <div key={t.name} style={{ ...cardStyle, padding: 22 }}>
                <dt style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{t.name}</dt>
                <dd style={{ margin: 0, fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{t.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Formation CSE & IA : les questions fréquentes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
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
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            La consultation du CSE s'inscrit dans un cadre plus large : conformité, gouvernance, charte d'usage et montée en compétence de tous.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Conformité', desc: "Le règlement européen au fond : obligations réelles, calendrier, littératie, plan de conformité." },
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Gouvernance', desc: "Le cadre qui structure les usages : règles, rôles, pilotage. Le pendant direction de cette page." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le document que le CSE examinera : données autorisées, relectures, propriété des assistants créés." },
              { label: 'Formation IA ressources humaines', href: '/formation-ia-ressources-humaines', tag: 'RH', desc: "Les usages RH de l'IA, recrutement compris, avec le cadre de non-discrimination posé." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Direction', desc: "La session exécutive qui aligne le comité de direction : l'autre bout du dialogue social." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Démarche', desc: "La montée en compétence de toute l'organisation : vagues, référents, mesure, dialogue social inclus." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    En savoir plus
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FONDATEUR ── */}
      <FounderNote />

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation CSE & IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Une consultation instruite vaut mieux qu'un bras de fer
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Élus ou direction, décrivez-nous votre contexte : projet annoncé ou anticipation, session commune ou séparée. Nous revenons sous 24 heures avec un déroulé et le devis, les deux voies de financement présentées. Le cadrage est gratuit et confidentiel.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis sous 24 h
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Posture neutre · Certifié Qualiopi · Partout en France
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
