import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Building2, Check, Eye, GraduationCap, Landmark,
  Scale, ShieldCheck, Users,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation cse ia » (slug /formation-cse-ia), côté FORMATION.
 * Cible (Semrush fr, 2026-08-28) : « formation cse ia » (70/mois, KD 5,
 * intention commerciale), SERP quasi vierge, first-mover.
 *
 * DOUBLE AUDIENCE assumée : les élus du CSE qui veulent instruire les
 * consultations IA, ET les directions/DRH qui veulent un dialogue social
 * de qualité sur leurs projets IA. Posture NEUTRE et factuelle.
 *
 * CADRE JURIDIQUE VÉRIFIÉ le 2026-08-30 :
 *  - art. L2312-8 C. trav. (consultation sur l'introduction de nouvelles
 *    technologies, entreprises d'au moins 50 salariés), cité via le Code
 *    du travail numérique (Légifrance bloque les robots, jamais en citation) ;
 *  - TJ Nanterre, 14 février 2025, n° 24/01457 : suspension en référé du
 *    déploiement d'applications d'IA, phase pilote comprise, jusqu'à la fin
 *    de la consultation du CSE. Formulé sobrement, sans dramatisation.
 * Réécrite le 07/10/2026 (texte propre, faits datés) :
 *  - FINANCEMENT formulé avec prudence : l'ancienne version affirmait que le
 *    budget de fonctionnement du CSE est « la voie classique » sans source.
 *    Vérifié le 07/10 sur code.travail.gouv.fr : L2315-61 (subvention de
 *    fonctionnement ; formation des délégués syndicaux et représentants de
 *    proximité sur délibération) et L2315-63 (stage de formation économique
 *    de 5 jours des élus titulaires d'un premier mandat, financé par le CSE,
 *    imputé sur le congé de formation économique, sociale, environnementale
 *    et syndicale). La page dit seulement que le comité peut décider de payer
 *    sur ses fonds, à valider avec son trésorier : point à trancher par Mathias.
 *  - AI Act daté après l'Omnibus (règlement (UE) 2026/1744) : haut risque
 *    annexe III au 2 décembre 2027, article 50 depuis le 2 août 2026.
 *  - FounderNote et OfficialSources remplacés par une signature et une
 *    section de sources propres à la page.
 * Entités Wikipédia vérifiées 200 le 2026-08-30.
 */

const SLUG = 'formation-cse-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation CSE & IA : comprendre et consulter | Masteria'
const META_DESC = "Formation CSE et IA en une journée : comprendre l'IA sans jargon, instruire la consultation du comité, rédiger un avis motivé. Pour élus et directions."
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
const srcLinkStyle = { color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }

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
  { icon: Users, label: 'Élus du CSE et directions' },
  { icon: Scale, label: 'Neutre : faits, droit, méthode' },
  { icon: Building2, label: 'Une journée, sur site ou en visio' },
  { icon: GraduationCap, label: 'Qualiopi · actions de formation' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "Une journée de 7 heures ; deux jours si vous voulez approfondir l'instruction sur les projets de l'entreprise" },
  { label: 'Pour qui', value: "Élus titulaires et suppléants, représentants syndicaux ; côté direction, DRH, relations sociales, chefs de projet IA" },
  { label: 'Contenu', value: "L'IA expliquée sans jargon, la procédure de consultation (article L2312-8), les questions utiles, l'avis motivé, le suivi après déploiement" },
  { label: 'Posture', value: "Neutre : Masteria ne dépend d'aucun éditeur, ne conseille ni la direction ni les élus et donne la même information à chacun" },
  { label: 'Livrables', value: "Grille d'instruction d'un projet IA, trame d'avis motivé, points de vigilance par famille de projet" },
  { label: 'Financement', value: "Par l'employeur, avec un dossier OPCO possible, ou par le comité sur ses propres fonds si les élus le décident ; devis en 24 heures" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi former le CSE'],
  ['#programme', 'La journée'],
  ['#projets', 'Famille par famille'],
  ['#tarif', 'Prix et financement'],
  ['#lexique', 'Vocabulaire'],
  ['#faq', 'Questions'],
]

/* ───────── Pourquoi former le CSE (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Scale,
    title: 'La consultation est obligatoire, et elle vient avant',
    desc: "Dès 50 salariés, le Code du travail (article L2312-8) impose de recueillir l'avis du comité avant d'introduire une technologie nouvelle. Le 14 février 2025, le juge des référés de Nanterre a gelé la mise en service d'outils d'IA, phase pilote comprise, tant que la consultation n'était pas achevée.",
  },
  {
    icon: Eye,
    title: 'Un avis éclairé pèse plus lourd',
    desc: "Face à un projet mal compris, un comité inquiet réclame des délais, une expertise, parfois le juge. Des élus qui savent ce que l'outil fait posent des questions précises, obtiennent des garanties et rendent un avis qui fait avancer le dossier.",
  },
  {
    icon: ShieldCheck,
    title: 'Les sujets sensibles existent',
    desc: "Données personnelles des salariés, outils qui touchent au recrutement ou à l'évaluation, effets sur la charge et les compétences : la consultation sert à examiner ces points-là, preuves à l'appui.",
  },
  {
    icon: Users,
    title: 'Direction et élus y trouvent leur compte',
    desc: "La direction veut avancer sans blocage ni contentieux ; les élus veulent jouer leur rôle sérieusement. Une base de connaissance commune et factuelle sert les deux, et la journée réunit les uns et les autres dans la même salle quand le climat social le permet.",
  },
]

/* ───────── Programme 1 jour (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'La journée',
    titre: "Le matin pour comprendre, l'après-midi pour instruire",
    resume: "Les élus repartent avec une grille d'instruction et une trame d'avis ; la direction, avec une consultation mieux préparée.",
    matin: [
      { t: "L'IA sans jargon, en démonstration", d: "Ce que font les modèles, du simple assistant de conversation à l'agent capable d'opérer seul dans un logiciel : démonstrations sur des tâches de bureau ordinaires, capacités et limites, sans discours commercial." },
      { t: 'Ce qui change au poste de travail', d: "Métier par métier, ce que l'IA déplace dans les tâches, la charge et les compétences attendues : la matière même de la consultation." },
      { t: 'Le droit de la consultation', d: "L'article L2312-8, le déroulé d'une information-consultation et l'ordonnance de Nanterre du 14 février 2025 : la consultation précède le déploiement, y compris une phase pilote quand le projet est déjà engagé." },
      { t: "L'AI Act vu par les élus", d: "Les usages RH rangés parmi les systèmes à haut risque (tri de candidatures, évaluation), dont les obligations sont repoussées à décembre 2027 ; l'article 4 sur la formation des utilisateurs ; la transparence, qui s'impose depuis août 2026. Ce que les élus peuvent légitimement demander." },
      { t: "Les données des salariés vues par un outil", d: "RGPD au travail, surveillance, journaux d'activité : faire la part entre l'acceptable, l'encadrable et l'interdit." },
    ],
    apresmidi: [
      { t: "La grille d'instruction", d: "Les pièces à réclamer (finalités, données, paramétrages, garanties), les questions décisives, les délais : une méthode qui resservira à chaque projet." },
      { t: 'Quatre familles de projets, quatre vigilances', d: "Assistants bureautiques, agents et automatisations, outils RH, outils de suivi d'activité : chaque famille a ses questions, résumées dans le tableau plus bas." },
      { t: "Atelier sur un projet de l'entreprise", d: "Sur un projet en cours ou un cas proche, les participants déroulent la grille, formulent leurs questions et listent les garanties à obtenir." },
      { t: 'Rédiger un avis motivé', d: "Structure, faits, réserves, conditions : un avis argumenté pèse dans le dossier, quel que soit son sens. La trame est fournie et travaillée en séance." },
      { t: 'Après le vote, le suivi', d: "Clause de revoyure, indicateurs, remontées des salariés : le rôle du comité continue une fois l'outil en place." },
    ],
  },
]

/* ───────── Points de vigilance par type de projet (tableau divergent) ───────── */

const PROJETS_TABLE = [
  {
    type: 'Assistants bureautiques (ChatGPT, Copilot, Claude, Gemini, Vibe)',
    questions: "Quelles données y entrent, quelle version (professionnelle ou grand public), qui est formé, quelles règles d'usage écrites existent",
    vigilance: "Comptes personnels hors de tout cadre, absence de charte, formation réservée à quelques services",
  },
  {
    type: 'Agents et automatisations (tri, réponses préparées, enchaînements)',
    questions: "Quelles décisions l'outil prépare ou prend seul, où se place la validation humaine, quel journal garde la trace des actions, qui supervise",
    vigilance: "Autonomie sans relecture sur ce qui engage, aucune traçabilité, charge déplacée sans discussion",
  },
  {
    type: 'Outils RH (recrutement, évaluation, mobilité)',
    questions: "L'AI Act range ces usages parmi les systèmes à haut risque : quelles garanties contre les biais, quel recours humain, quelle documentation du fournisseur",
    vigilance: "Tri automatique sans contrôle, critères opaques, données de candidats conservées sans règle",
  },
  {
    type: "Outils de suivi d'activité et de productivité",
    questions: "Finalité annoncée, proportionnalité, information des salariés, durée de conservation, accès aux données individuelles",
    vigilance: "Surveillance présentée comme du pilotage, indicateurs individuels détournés de l'usage déclaré",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'Que contient la formation CSE et IA de Masteria ?',
    a: "Une journée pour mettre élus et direction au même niveau sur l'intelligence artificielle. Elle montre ce que font les outils, démonstrations à l'appui, présente le cadre de la consultation (article L2312-8, décision de Nanterre, AI Act), puis enseigne l'instruction d'un projet : pièces à réclamer, questions à poser, avis motivé, suivi. Chacun repart avec une grille d'instruction et une trame d'avis réutilisables.",
  },
  {
    q: "Le comité doit-il être consulté avant la mise en service d'un outil d'IA ?",
    a: "Oui, à partir de 50 salariés : l'employeur doit recueillir l'avis du comité avant d'introduire une technologie nouvelle, c'est le sens de l'article L2312-8, et un projet d'IA qui modifie le travail entre dans ce champ. L'avis se recueille en amont : le 14 février 2025, le juge des référés de Nanterre a stoppé des applications d'IA, phase pilote comprise, jusqu'au terme de la consultation, en estimant le projet déjà engagé. La journée explique ce que cette décision change pour le calendrier d'un projet.",
  },
  {
    q: 'Une phase pilote échappe-t-elle à la consultation ?',
    a: "C'est la question tranchée à Nanterre en février 2025 : lorsque le déploiement dépasse la simple expérimentation et forme un projet engagé, la consultation s'impose dès la phase pilote. La limite s'apprécie au cas par cas (ampleur, durée, nombre de salariés concernés, intégration aux outils de travail). La formation donne ces critères aux deux parties : ce qu'une direction peut tester sans attendre, et ce qui déclenche la consultation.",
  },
  {
    q: 'La journée vise-t-elle les élus, la direction, ou les deux ?',
    a: "Les deux, de préférence ensemble : une information identique, dans la même salle, fait gagner du temps à la consultation qui suit. Quand le climat social le demande, la journée se tient pour les élus seuls ou pour la direction seule. Notre posture reste la même : indépendants des éditeurs d'IA, nous ne conseillons ni l'employeur ni les élus et nous nous en tenons aux faits, au droit et à la méthode.",
  },
  {
    q: "Quelles questions le CSE doit-il poser sur un projet d'IA ?",
    a: "Cinq familles reviennent : la finalité (quel problème l'outil règle, pour qui), les données (lesquelles entrent dans l'outil, où elles partent, version professionnelle ou grand public), l'effet sur le travail (tâches, charge, compétences, formation prévue), les garanties (validation humaine de ce qui engage, traçabilité, règles écrites) et le suivi (indicateurs, clause de revoyure). La grille remise en formation décline ces questions pour les assistants, les agents, les outils RH et les outils de suivi d'activité.",
  },
  {
    q: "Que prévoit l'AI Act sur les sujets du CSE ?",
    a: "Trois points intéressent les élus. Certains usages RH, comme le tri automatique de candidatures ou l'évaluation des personnes, figurent parmi les systèmes à haut risque ; le report décidé par l'Omnibus de juillet 2026 fait entrer leurs obligations en application le 2 décembre 2027. L'article 4, en vigueur dès février 2025, attend de l'employeur qu'il fasse monter en compétence quiconque se sert de ces outils, ce qui passe par de la formation. Enfin, des obligations de transparence (article 50) visent depuis le 2 août 2026 certains contenus et échanges produits par l'IA. La journée replace ces règles dans leur calendrier, sans dramatiser ni minimiser.",
  },
  {
    q: "Qui paie la formation : le comité ou l'employeur ?",
    a: "Les deux sont possibles. L'employeur peut la financer, surtout quand la session réunit élus et direction : Masteria étant certifiée Qualiopi, la journée peut alors être soumise à l'opérateur de compétences de la branche, au titre du plan de formation de l'entreprise, et l'opérateur décide selon ses règles. Le comité peut aussi choisir de la régler sur ses propres fonds ; c'est une décision des élus, à valider avec leur trésorier au regard des règles qui encadrent son budget. Le devis présente les deux options.",
  },
  {
    q: 'La formation est-elle neutre ?',
    a: "Oui, sinon elle ne servirait à rien. Le cabinet n'a de lien avec aucun éditeur d'IA, ne vend ni licence ni déploiement pendant cette journée, et le contenu ne change pas selon le commanditaire. Les capacités des outils sont montrées telles qu'elles sont, leurs limites aussi, et le droit est présenté sans lecture partisane. Un comité peut vérifier cette neutralité lors du cadrage, dont la première demi-heure est offerte.",
  },
  {
    q: 'La journée peut-elle se tenir à distance ?',
    a: "Oui. Elle se tient sur votre site ou à distance, découpée le plus souvent en deux matinées, ce qui facilite la présence des élus répartis sur plusieurs établissements. Nous intervenons partout en France, et le calendrier s'adapte aux réunions du comité.",
  },
  {
    q: 'Que garde le CSE après la formation ?',
    a: "La grille d'instruction d'une consultation IA (pièces, questions, garanties, délais), la trame d'avis motivé, le tableau des vigilances par famille de projet et une compréhension partagée qui resservira à chaque projet. Le but est l'autonomie : que le comité instruise seul les prochaines consultations et sache quand un appui extérieur se justifie.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation CSE et IA (Masteria)',
  description: "Journée de formation pour les élus du CSE et les directions : l'intelligence artificielle expliquée sans jargon et démontrée, le cadre de la consultation (article L2312-8, ordonnance de Nanterre du 14 février 2025, AI Act après l'Omnibus), l'instruction d'un projet (grille de questions, pièces, garanties), l'avis motivé et le suivi. Posture neutre, sans lien avec un éditeur. Action de formation certifiée Qualiopi.",
  level: 'Tous niveaux, aucun prérequis technique',
  teaches: [
    "Comprendre le fonctionnement des outils d'IA déployés en entreprise, des assistants aux agents",
    "Situer la consultation dans le droit : article L2312-8, calendrier, décision de Nanterre de 2025",
    "Repérer les vigilances propres à chaque famille de projet : assistants, agents, outils RH, suivi d'activité",
    "Instruire une consultation : pièces à réclamer, questions à poser, garanties à obtenir",
    "Rédiger un avis motivé et organiser le suivi une fois l'outil en place",
  ],
  about: "Comité social et économique et intelligence artificielle (consultation, dialogue social)",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique ou juridique.',
  audience: 'Élus du CSE (titulaires, suppléants), représentants syndicaux, DRH, relations sociales, chefs de projet IA',
  locationName: 'Masteria : vos locaux en France ou la classe virtuelle',
}

/* Le programme en ItemList (séquence citable, GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation CSE et IA (1 jour)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    { '@type': 'ListItem', position: di * 2 + 1, name: 'Matin : comprendre', description: day.matin.map(m => m.t).join(' ; ') },
    { '@type': 'ListItem', position: di * 2 + 2, name: 'Après-midi : instruire', description: day.apresmidi.map(m => m.t).join(' ; ') },
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
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-cse-ia#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30. */
  about: [
    { '@type': 'Thing', name: 'Comité social et économique', sameAs: 'https://fr.wikipedia.org/wiki/Comit%C3%A9_social_et_%C3%A9conomique' },
    { '@type': 'Thing', name: 'Dialogue social', sameAs: 'https://fr.wikipedia.org/wiki/Dialogue_social' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

/* ── GEO : lexique CSE & IA (DefinedTermSet, rendu aussi en section visible) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique de la consultation CSE sur un projet IA',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'CSE', description: "Le comité social et économique, instance représentative du personnel obligatoire dès 11 salariés ; à partir de 50 salariés, ses attributions consultatives s'élargissent, dont la consultation sur l'introduction de nouvelles technologies." },
    { '@type': 'DefinedTerm', name: 'Information-consultation', description: "La procédure par laquelle l'employeur transmet au comité des informations précises et écrites, lui laisse un délai d'examen, répond à ses questions puis recueille son avis. Pour un projet d'IA, elle se tient avant le déploiement." },
    { '@type': 'DefinedTerm', name: 'Introduction de nouvelles technologies', description: "Motif de consultation prévu par l'article L2312-8 ; un outil d'IA qui modifie l'organisation ou les conditions de travail y entre." },
    { '@type': 'DefinedTerm', name: 'Avis motivé', description: "L'avis que rend le comité à la fin de la consultation : favorable, défavorable ou assorti de réserves. Appuyé sur des faits et des demandes précises, il pèse dans le dossier quel que soit son sens." },
    { '@type': 'DefinedTerm', name: 'Budget de fonctionnement du CSE', description: "La subvention que l'employeur verse chaque année au comité pour son fonctionnement, distincte du budget des activités sociales et culturelles (article L2315-61 du Code du travail). Les élus en décident l'usage dans le cadre que fixe la loi." },
    { '@type': 'DefinedTerm', name: 'BDESE', description: "La base de données économiques, sociales et environnementales, support d'information du comité. Finalités, périmètre et calendrier d'un projet d'IA ont vocation à y figurer." },
    { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Ce que l'AI Act, à son article 4, attend de l'employeur : aider quiconque se sert d'un assistant ou d'un autre système d'IA à le maîtriser. Un argument concret pour les élus qui réclament des formations." },
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

/* Sources : WebPage.citation + section visible. Articles du Code du travail
   lus sur code.travail.gouv.fr le 07/10/2026 (L2315-61, L2315-63). */
const PAGE_CITATIONS = [
  { name: "L2312-8 : quand l'employeur consulte le comité sur une technologie nouvelle (Code du travail numérique)", url: 'https://code.travail.gouv.fr/code-du-travail/l2312-8' },
  { name: "L2315-61 : la subvention de fonctionnement versée au comité (Code du travail numérique)", url: 'https://code.travail.gouv.fr/code-du-travail/l2315-61' },
  { name: "L2315-63 : le stage de formation économique des élus titulaires (Code du travail numérique)", url: 'https://code.travail.gouv.fr/code-du-travail/l2315-63' },
  { name: "Le comité social et économique expliqué par le ministère du Travail", url: 'https://travail-emploi.gouv.fr/le-comite-social-et-economique-cse' },
  { name: "Texte de l'AI Act sur EUR-Lex (règlement 2024/1689)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Le règlement 2026/1744, qui repousse le haut risque, sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
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
        dateModified="2026-10-07"
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
            Écrit par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · relecture juridique d'octobre 2026, à l'usage des élus comme des directions
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation CSE et IA met élus et direction au même niveau sur l'intelligence artificielle. Le matin, les participants voient ce que font les outils et comment se déroule la consultation (article L2312-8, ordonnance de Nanterre de février 2025, AI Act) ; l'après-midi, <strong style={{ color: '#fff', fontWeight: 700 }}>ils apprennent à instruire un projet : pièces à réclamer, questions à poser, avis motivé, suivi</strong>. Une journée, une posture neutre, une action de formation couverte par notre certification Qualiopi.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Un projet d'IA qui touche l'organisation du travail passe par le CSE, et la décision de Nanterre rappelle que la consultation vient avant le déploiement, phase pilote comprise lorsque le projet est déjà engagé. Tout le monde y gagne quand le comité comprend le sujet : l'examen devient sérieux et le bras de fer s'évite.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Organiser la journée pour votre CSE
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Lire le déroulé de la journée
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

          {/* En bref : synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>La journée en résumé</div>
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
              <Kicker>Ce qui se joue</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi former le CSE à l'intelligence artificielle ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>La consultation du CSE sur un projet d'IA est obligatoire et préalable, et elle ne sert que si les élus comprennent le sujet. Formés, ils posent de meilleures questions, obtiennent de meilleures garanties et rendent des avis qui comptent : les salariés comme le projet en profitent.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Côté direction, la journée se combine avec la <Link to="/formation-ia-comex" style={aStyle}>session COMEX</Link> et la <Link to="/formation-gouvernance-ia" style={aStyle}>formation gouvernance IA</Link> : le cadre se construit des deux côtés de la table.
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
            Une journée en deux temps : comprendre le matin, instruire l'après-midi
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le matin installe la compréhension : l'IA montrée sans jargon, ses effets sur les postes, le droit de la consultation et les données des salariés. L'après-midi donne les outils : la grille d'instruction, les vigilances par famille de projet, un atelier sur un cas de l'entreprise, l'avis motivé et le suivi.</strong>
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
                  {[['Matin : comprendre', day.matin], ['Après-midi : instruire', day.apresmidi]].map(([label, items]) => (
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
            Le cadrage ajuste la journée à votre situation : projet déjà annoncé ou simple anticipation, session commune ou séparée, taille de l'entreprise ; sa première demi-heure n'est pas facturée. Sur deux jours, des ateliers d'instruction consacrés aux projets de l'entreprise s'y ajoutent.
          </p>
        </div>
      </section>

      {/* ── PROJET PAR PROJET (tableau divergent) ── */}
      <section id="projets" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>La grille de lecture</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quatre familles de projets, quatre jeux de questions pour le CSE
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un assistant bureautique ne soulève pas les mêmes questions qu'un logiciel qui trie des candidatures. Le tableau résume les quatre familles que les comités rencontrent le plus souvent, avec leurs questions clés et leurs points de vigilance : c'est la version courte de la grille remise en formation.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Famille de projet</th>
                  <th style={thStyle} scope="col">Questions à poser</th>
                  <th style={thStyle} scope="col">À surveiller</th>
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
            Cette grille rejoint la <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link> : quand une charte existe et que le comité l'a examinée, les consultations suivantes vont nettement plus vite.
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
              <Kicker>Prix et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT la journée, et deux façons de la financer
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La formation CSE et IA suit le tarif journalier de Masteria : 1 980 € HT pour le groupe, douze participants au plus. Deux sources de financement existent, et le devis présente les deux. <strong>L'employeur</strong> peut prendre la journée à sa charge, notamment quand elle réunit élus et direction ; la certification Qualiopi du cabinet permet alors de la présenter à l'OPCO de la branche, qui décide selon ses propres règles. <strong>Le comité</strong> peut aussi décider de la régler sur ses propres fonds : c'est un choix des élus, à valider avec le trésorier du CSE au regard des règles qui encadrent son budget. Le stage de formation économique de cinq jours prévu pour les élus titulaires d'un premier mandat (article L2315-63 du Code du travail) suit son propre cadre et reste distinct de cette journée. Le compte personnel de formation des salariés n'est pas mobilisé. La page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link> détaille les dispositifs côté employeur.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  '1 980 € HT la journée, douze participants au plus',
                  "Prise en charge par l'employeur, dossier OPCO possible",
                  'Ou règlement par le comité, sur décision des élus',
                  'Devis confidentiel en 24 heures après le cadrage',
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
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui anime la journée</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Un cabinet qui connaît les deux côtés de la table
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria déploie l'IA dans des PME comme dans des groupes depuis 2022, du comité de direction aux équipes : nous voyons ce que les outils font au quotidien, ce que les directions en attendent et ce que les salariés en vivent. Mathias Nizan, qui a fondé le cabinet à Lyon, pilote chaque session et s'appuie sur un réseau d'une vingtaine de formateurs indépendants. Pendant cette journée, le cabinet ne vend ni licence ni déploiement, et chacun reçoit la même information. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> racontent ces déploiements.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['Neutre', 'aucun lien avec un éditeur'],
                ['1 jour', 'pour instruire une première consultation'],
                ['≤ 12', 'élus ou cadres par groupe'],
                ['L2312-8', 'le texte au centre de la journée'],
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
            Sept mots pour suivre une consultation IA
          </h2>
          <p style={answerStyle}>
            <strong>Une consultation IA se suit avec sept notions : CSE, information-consultation, introduction de nouvelles technologies, avis motivé, budget de fonctionnement, BDESE, littératie IA. Les définitions ci-dessous sont celles que nous donnons en formation.</strong>
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
                Formation CSE & IA : les questions des élus et des DRH
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous préparez une consultation et votre question manque ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Écrivez-nous en toute confidentialité
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
          <Kicker>Autour de la consultation</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Conformité, gouvernance, charte : les pages liées
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            La consultation du comité touche à d'autres chantiers, du règlement européen à la formation de tous les salariés.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Conformité', desc: "Le règlement européen dans le détail : obligations, calendrier après l'Omnibus, plan de mise en conformité." },
              { label: 'Formation gouvernance IA', href: '/formation-gouvernance-ia', tag: 'Gouvernance', desc: "Les règles, les rôles et le pilotage des usages : le versant direction de cette journée." },
              { label: "Charte IA d'entreprise", href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le texte que le comité examinera : données autorisées, relectures, propriétaires des assistants." },
              { label: 'Formation IA ressources humaines', href: '/formation-ia-ressources-humaines', tag: 'RH', desc: "Les usages RH de l'IA, recrutement compris, avec les garde-fous contre la discrimination." },
              { label: 'Formation IA COMEX', href: '/formation-ia-comex', tag: 'Direction', desc: "La session qui aligne le comité exécutif, de l'autre côté du dialogue social." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Démarche', desc: "Faire progresser toute l'organisation, dialogue social compris : vagues, référents, mesure." },
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
                    Aller à la page
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Mathias Nizan a conçu cette journée pour qu'élus et directions entendent la même chose au même moment, et il en a relu le contenu juridique le 7 octobre 2026 ; pour en savoir plus sur lui, voyez <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page personnelle</Link>.
          </p>
          <PressMention />
        </div>
      </section>

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
              Élus ou direction, racontez-nous la situation : projet annoncé ou anticipation, session commune ou séparée. Dans les 24 heures, vous recevez un déroulé et un devis qui présente les deux sources de financement. L'échange reste confidentiel.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Organiser la journée
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Posture neutre · Qualiopi · sur site ou à distance · partout en France
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (section propre à la page, remplace OfficialSources) ── */}
      <section aria-labelledby="sources-cse" style={{ padding: '56px 40px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-cse" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Les textes de droit cités
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Code du travail, présentation officielle du CSE et règlements européens, à consulter dans leur version en vigueur :
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {PAGE_CITATIONS.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={srcLinkStyle}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
