import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, HardHat, ScrollText, FileWarning, ClipboardList, SearchCheck, BarChart3, ShieldCheck,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation IA pour responsable QSE » (slug /formation-ia-qse).
 * REFONTE 2026-08-10 : sort du template SpokePage (générique, emojis) pour le
 * patron des money pages formation. Cible « formation ia pour responsable qse »
 * (110/mois, KD 10, intention C — Semrush 2026-08-10) et « formation ia qse /
 * hse ». Reprend la matière métier de la fiche d'origine (1 jour, cas vérifiés :
 * veille HSE, DUERP, procédures, analyses d'accidents, audits, reporting CSRD).
 *
 * SPÉCIFIQUE QSE : données d'accidents = données de santé (sensibles au sens du
 * RGPD) → anonymisation avant tout traitement, offres entreprise uniquement ;
 * l'IA prépare, le préventeur et le CSE/CSSCT décident ; la veille produite
 * se valide contre les textes (Légifrance, INRS) — jamais sur la seule foi de
 * l'outil. Programme 1 jour Matin/Après-midi (format 2 jours possible).
 *
 * ANTI-CANNIBALISATION : pas de spokes par outil sur QSE ; /formation-ia-
 * informatique et /formation-ia-achats sont des métiers voisins distincts ;
 * les secteurs conseil (/ia-industrie) tiennent l'intention conseil/dev.
 */

const SLUG = 'formation-ia-qse'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA pour responsable QSE / HSE : veille, DUERP, audits | Masteria"
const META_DESC = "Formation IA pour responsable QSE / HSE, 1 jour sur vos documents : veille réglementaire, document unique, procédures, analyses d'accidents, audits, reporting. Qualiopi, finançable OPCO."
const KEYWORDS = "formation ia pour responsable qse, formation ia qse, formation ia hse, formation intelligence artificielle qse, ia veille réglementaire hse, ia document unique, formation ia sécurité environnement"

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
  { icon: Target, label: "Sur vos procédures, votre DUERP et vos vrais dossiers" },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "1 jour (7 h) en intra ; format 2 jours possible avec ateliers approfondis sur vos documents" },
  { label: 'Pour qui', value: "Responsables et animateurs QSE / HSE / QHSE, préventeurs, responsables qualité et environnement, chargés de conformité réglementaire, responsables de site" },
  { label: 'Outils', value: "Multi-outils, indépendants des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral" },
  { label: 'Méthode', value: "Chaque atelier travaille sur vos documents réels : DUERP, procédures, comptes rendus d'analyse, grilles d'audit, extraits de veille" },
  { label: 'Livrables', value: "Bibliothèque de prompts QSE, gabarits outillés (procédure, fiche de non-conformité, synthèse de veille), cadre RGPD données de santé" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Ce que couvre la page (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: ScrollText,
    title: 'Veille réglementaire HSE',
    desc: "Code du travail, régimes ICPE, normes ISO 9001, 14001 et 45001, textes sectoriels : l'IA synthétise une évolution, en extrait ce qui concerne votre site et rédige la note d'impact. La formation apprend à cadrer cette veille et à la valider contre les textes sources (Légifrance, INRS), jamais sur la seule foi de l'outil.",
  },
  {
    icon: FileWarning,
    title: 'Document unique et évaluation des risques',
    desc: "Préparer et mettre à jour le DUERP : formuler des situations dangereuses à partir de notes terrain, proposer des cotations à challenger, structurer les plans d'action associés, harmoniser les unités de travail. L'IA accélère la rédaction et la cohérence ; l'évaluation reste celle du préventeur, avec le CSE.",
  },
  {
    icon: ClipboardList,
    title: 'Procédures et modes opératoires',
    desc: "Rédiger ou réviser une procédure claire à partir de notes, de photos d'atelier ou d'un mode opératoire ancien ; adapter le niveau de langue au poste ; produire les versions courtes affichables. Le document qui n'était jamais à jour le devient en une séance.",
  },
  {
    icon: SearchCheck,
    title: "Analyses d'accidents et de presqu'accidents",
    desc: "Structurer un arbre des causes à partir des faits recueillis, rédiger le compte rendu d'analyse, formuler les mesures correctives et de prévention. Avec la précaution absolue : les données d'accidents sont des données de santé, anonymisées avant tout traitement, dans une offre entreprise uniquement.",
  },
  {
    icon: ShieldCheck,
    title: 'Audits internes et non-conformités',
    desc: "Préparer les grilles d'audit interne à partir de vos référentiels, formuler des fiches de non-conformité exploitables (fait, écart, exigence, cause, action), préparer les revues de direction. L'IA rend l'audit plus rigoureux et moins chronophage.",
  },
  {
    icon: BarChart3,
    title: 'Reporting QSE et CSRD',
    desc: "Transformer les données sécurité et environnement (accidentologie, consommations, émissions, déchets) en synthèses lisibles pour la direction, préparer les indicateurs de durabilité attendus par la CSRD, rédiger les commentaires. Les chiffres viennent de vos outils ; l'IA les met en récit.",
  },
]

/* ───────── Les atouts (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'La veille enfin tenable',
    desc: "Ce que personne n'a le temps de lire est digéré et restitué pour votre site, avec la note d'impact prête à valider. La fonction QSE reprend la main sur la réglementation au lieu de la subir.",
  },
  {
    title: 'Des documents à jour, sans y passer les week-ends',
    desc: "DUERP, procédures, modes opératoires, affichages : la production documentaire normée est le terrain où l'IA fait gagner le plus de temps. Le temps se déplace vers le terrain et la prévention.",
  },
  {
    title: 'Des analyses plus rigoureuses',
    desc: "Arbre des causes structuré, compte rendu complet, mesures formulées clairement : l'IA aide à ne rien oublier et à écrire ce qui est difficile à écrire, sans jamais décider à la place du préventeur.",
  },
  {
    title: 'Un audit interne moins lourd, mieux exploité',
    desc: "Grilles préparées, non-conformités formulées de façon exploitable, revue de direction alimentée : l'audit redevient un outil d'amélioration plutôt qu'une corvée.",
  },
  {
    title: 'Le reporting durabilité sans y perdre le sens',
    desc: "Indicateurs CSRD, commentaires, synthèses direction : l'IA met les données en récit lisible, et vous gardez le contrôle des chiffres et de leur source.",
  },
  {
    title: 'Un cadre RGPD solide sur les données de santé',
    desc: "Le sujet le plus sensible du métier est traité de front : anonymisation, offres entreprise, ce qu'on ne confie jamais. Vous repartez avec un cadre écrit, défendable devant le CSE et le DPO.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Boîte à outils IA pour la QSE, puis vos documents",
    matin: [
      "Cartographier ses tâches QSE : où l'IA aide vraiment, où elle n'a rien à faire (l'évaluation du risque, la décision de prévention)",
      "ChatGPT, Copilot, Gemini, Claude, Mistral : qui fait quoi pour la qualité, la sécurité et l'environnement",
      "La méthode de la demande efficace, appliquée aux écrits normés : contexte, référentiel, format, exemples, itération",
      "Confidentialité et RGPD : données d'accidents = données de santé ; anonymisation, offres entreprise, ce qu'on ne confie jamais",
    ],
    apresmidi: [
      "Atelier veille : produire une synthèse de veille réglementaire ciblée sur votre secteur, avec sa note d'impact, et la valider contre les textes",
      "Atelier document unique : mettre à jour une section du DUERP à partir de notes terrain, cotations à challenger, plan d'action",
      "Atelier analyse : structurer l'arbre des causes d'un presqu'accident anonymisé et rédiger le compte rendu",
      "Atelier procédure et audit : réviser une procédure, formuler une fiche de non-conformité ; plan d'action personnel et évaluation des acquis",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: HardHat, title: 'Responsables et animateurs QSE / HSE / QHSE', desc: "Vous portez la veille, les documents, les analyses et les audits, souvent seul sur votre site. Le cœur des ateliers est fait pour vous : chaque usage rend des heures et améliore la qualité des écrits." },
  { icon: FileWarning, title: 'Préventeurs et responsables sécurité', desc: "DUERP, analyses d'accidents, plans de prévention, causeries : l'IA prépare, vous décidez. Le cadre RGPD sur les données de santé est traité en priorité." },
  { icon: BarChart3, title: 'Responsables qualité et environnement', desc: "Procédures, audits ISO, non-conformités, indicateurs environnementaux et CSRD : les usages qui structurent la démarche d'amélioration continue." },
  { icon: Users, title: 'Responsables de site et directions industrielles', desc: "Vous voulez que la fonction QSE gagne en réactivité et en qualité documentaire sans recruter. La formation vous donne la lecture d'ensemble et les usages à installer dans l'équipe." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'apprend-on dans une formation IA pour responsable QSE ?",
    a: "À intégrer l'intelligence artificielle générative dans les écrits et analyses du métier, sur vos propres documents : produire une synthèse de veille réglementaire HSE avec sa note d'impact, mettre à jour le document unique à partir de notes terrain, rédiger ou réviser des procédures et modes opératoires, structurer une analyse d'accident (arbre des causes, compte rendu, mesures), préparer des grilles d'audit et formuler des non-conformités exploitables, transformer les données QSE en reporting lisible, y compris CSRD. Et à poser le cadre : les données d'accidents sont des données de santé.",
  },
  {
    q: "Peut-on utiliser l'IA sur des données d'accidents du travail ?",
    a: "Avec des précautions strictes, et la formation les pose en premier. Les données d'accidents contiennent des données de santé, sensibles au sens du RGPD : anonymisation systématique avant tout traitement (retirer noms, matricules, éléments identifiants), usage exclusif d'offres entreprise qui n'entraînent pas leurs modèles sur vos données et offrent un cadre contractuel, jamais de version gratuite. Dans ce cadre, l'IA aide à structurer l'arbre des causes et à rédiger l'analyse. La position finale et les mesures restent au préventeur, en lien avec le CSE ou la CSSCT.",
  },
  {
    q: "L'IA peut-elle faire notre veille réglementaire HSE à notre place ?",
    a: "Elle la rend tenable, pas automatique. L'IA synthétise une évolution, en extrait ce qui concerne votre site et rédige la note d'impact en minutes, ce qui prenait des heures. Deux règles la rendent fiable : lui donner le texte source plutôt que lui demander de le connaître (elle peut confondre des versions), et valider chaque point contre les références officielles (Légifrance, INRS, textes ICPE) avant diffusion. La formation apprend cette discipline ; la responsabilité de la conformité reste la vôtre.",
  },
  {
    q: "L'IA peut-elle évaluer les risques et remplir le DUERP ?",
    a: "Elle prépare, elle ne décide pas. À partir de vos notes terrain, elle formule des situations dangereuses de façon claire et homogène, propose des cotations à challenger et structure les plans d'action : le document devient cohérent et à jour bien plus vite. Mais l'évaluation du risque est un jugement professionnel, qui se construit avec les salariés et le CSE et engage l'employeur : la formation apprend à utiliser l'IA comme assistant de rédaction et de cohérence du DUERP, jamais comme évaluateur.",
  },
  {
    q: "Sur quels outils la formation porte-t-elle ?",
    a: "Sur ceux que votre organisation utilise. Nous sommes indépendants des éditeurs et multi-outils : ChatGPT, Microsoft Copilot, Claude, Gemini et Mistral. En industrie, Copilot dans Microsoft 365 est souvent déjà déployé et la formation s'y appuie ; quand le choix est ouvert, la matinée compare sur vos cas. Les fondamentaux (demande efficace, vérification, confidentialité) valent quel que soit l'outil.",
  },
  {
    q: "La formation travaille-t-elle sur nos vrais documents ?",
    a: "Oui, c'est le principe. Avant la session, nous récupérons vos éléments : une section de DUERP, une ou deux procédures à réviser, un compte rendu d'analyse anonymisé, une grille d'audit, un extrait de veille récent, vos outils. Chaque atelier part de là. Les participants repartent avec des livrables directement utilisables : bibliothèque de prompts QSE, gabarits outillés, cadre RGPD données de santé.",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est d'une journée (7 heures) en intra-entreprise, en présentiel sur site (souvent le plus adapté au métier) ou à distance, pour un groupe de 4 à 10 personnes de la fonction QSE / HSE. Un format de deux jours ajoute des ateliers approfondis sur vos documents (refonte d'un corpus de procédures, plan de veille complet, tableau de bord). Un accompagnement individuel est possible pour un responsable QSE seul sur son site.",
  },
  {
    q: "Combien coûte la formation IA QSE ?",
    a: "Le tarif intra-entreprise est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : la journée représente 1 980 € HT pour l'équipe, le format deux jours 3 960 € HT. La formation étant certifiée Qualiopi, votre OPCO peut la prendre en charge dans le cadre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis détaillé sous 24 heures.",
  },
  {
    q: "La formation est-elle finançable par notre OPCO ?",
    a: "Oui. Masteria est certifiée Qualiopi, ce qui rend la formation éligible au financement par votre OPCO au titre du plan de développement des compétences (OPCO 2i pour l'industrie, Constructys pour le BTP, selon votre branche). La prise en charge dépend de votre branche et de la taille de l'entreprise. Nous fournissons le programme, la convention et les pièces du dossier ; le dépôt se fait avant le début de la formation. Notre outil Quel OPCO ? identifie votre opérateur en deux minutes. La formation n'est pas éligible au CPF.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA pour responsable QSE / HSE — Masteria',
  description: "Formation à l'intelligence artificielle générative appliquée aux métiers QSE / HSE, sur les documents réels des participants : veille réglementaire HSE, document unique (DUERP), procédures et modes opératoires, analyses d'accidents, audits internes et non-conformités, reporting QSE et CSRD, cadre RGPD sur les données de santé. Multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). 1 jour en intra (2 jours possibles), présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Produire une synthèse de veille réglementaire HSE avec sa note d'impact et la valider contre les textes",
    "Mettre à jour le document unique et rédiger des procédures à partir de notes terrain",
    "Structurer une analyse d'accident (arbre des causes, compte rendu, mesures) dans un cadre RGPD strict",
    "Préparer des grilles d'audit interne et formuler des non-conformités exploitables",
    "Transformer les données QSE en reporting lisible, y compris pour la CSRD",
  ],
  about: 'Intelligence artificielle générative appliquée à la qualité, la sécurité et l\'environnement',
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: 'Aucun prérequis technique. Pratique d\'un métier QSE / HSE.',
  audience: 'Responsables et animateurs QSE / HSE, préventeurs, responsables qualité et environnement',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}
/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programme de la formation IA QSE / HSE Masteria (1 jour)",
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
  '@id': 'https://www.master-ia.fr/formation-ia-qse#article',
  headline: "Formation IA pour responsable QSE / HSE : la veille, le DUERP, les analyses et les audits avec l'IA",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-07-02',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-qse#webpage' },
  about: [
    { '@type': 'Thing', name: 'Qualité, sécurité, environnement', sameAs: 'https://fr.wikipedia.org/wiki/Qualit%C3%A9,_s%C3%A9curit%C3%A9,_environnement' },
    { '@type': 'Thing', name: "Document unique d'évaluation des risques professionnels", sameAs: 'https://fr.wikipedia.org/wiki/Document_unique_d%27%C3%A9valuation_des_risques_professionnels' },
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

export default function FormationIAQSEPage() {
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
    { name: "Formation IA QSE / HSE", slug: SLUG },
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
        datePublished="2026-07-02"
        dateModified="2026-08-10"
        speakable={['#geo-summary', '#en-bref']}
        citations={[
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA QSE / HSE</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <HardHat size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation métier · QSE / HSE
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA pour responsable QSE / HSE :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>la veille, le DUERP, les analyses et les audits avec l'IA</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation IA pour responsable QSE / HSE de Masteria apprend, en une journée sur vos propres documents, à mettre l'intelligence artificielle générative au service du métier : <strong style={{ color: '#fff', fontWeight: 700 }}>veille réglementaire, document unique, procédures, analyses d'accidents, audits internes, reporting QSE et CSRD</strong>, avec un cadre RGPD strict sur les données de santé. Multi-outils, certifiée Qualiopi et finançable par votre OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le quotidien QSE repose sur des écrits normés et de l'analyse documentaire : exactement le terrain où l'IA générative fait gagner le plus de temps. Ce qu'elle ne fait pas, et la formation le dit clairement : évaluer un risque ou décider d'une mesure de prévention. Elle prépare ; le préventeur, avec le CSE, décide.
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
                Que change l'IA dans le travail d'un responsable QSE ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>L'IA générative touche six activités de la fonction QSE / HSE : la veille réglementaire, le document unique, les procédures et modes opératoires, les analyses d'accidents, les audits internes et non-conformités, le reporting QSE et CSRD. Dans chacune, elle prend la rédaction, la synthèse et la mise en cohérence ; l'évaluation du risque et la décision de prévention restent au professionnel.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La formation couvre les six, avec un poids ajusté à votre site et à vos référentiels au cadrage. Pour la conformité de vos usages d'IA eux-mêmes, voyez la <Link to="/formation-ai-act" style={aStyle}>formation AI Act</Link>.
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
            Les atouts de l'IA générative pour une fonction QSE / HSE
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six gains concrets : une veille réglementaire enfin tenable, des documents à jour sans y passer les week-ends, des analyses d'accidents plus rigoureuses, un audit interne moins lourd et mieux exploité, un reporting durabilité lisible, et un cadre RGPD solide sur les données de santé, défendable devant le CSE et le DPO.</strong>
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
            Un mot d'honnêteté qui rend ces gains durables : l'IA peut confondre des versions de textes ou inventer une référence. Donnez-lui le texte source, demandez la référence de chaque point repris, validez contre Légifrance et l'INRS avant diffusion : le reste, elle le fait remarquablement bien.
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
            Programme de la formation IA QSE / HSE sur 1 jour
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Matin : cartographier où l'IA aide vraiment dans vos tâches QSE, comparer les outils, la méthode de la demande efficace appliquée aux écrits normés, et le cadre RGPD sur les données de santé. Après-midi : quatre ateliers sur vos documents réels, veille, document unique, analyse d'un presqu'accident, procédure et audit, puis votre plan d'action et l'évaluation des acquis.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            En format 2 jours, la seconde journée approfondit sur vos documents : refonte d'un corpus de procédures, plan de veille complet par référentiel, tableau de bord QSE et indicateurs CSRD outillés, bibliothèque de prompts de l'équipe.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation IA QSE / HSE ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À toute la fonction : responsables et animateurs QSE / HSE / QHSE, préventeurs et responsables sécurité, responsables qualité et environnement, chargés de conformité réglementaire, responsables de site et directions industrielles qui veulent une fonction QSE plus réactive. Sans prérequis technique : la pratique du métier suffit.</strong>
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
                Données de santé, jugement professionnel, sources : ce que la formation pose noir sur blanc
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La QSE manipule ce qu'une entreprise a de plus protégé : des données d'accidents, donc de santé, sensibles au sens du RGPD ; et des évaluations qui engagent la responsabilité de l'employeur. La formation formalise avec vous ce qu'on peut confier à quel outil (offres entreprise uniquement pour toute donnée nominative, jamais de version gratuite), comment on anonymise avant tout traitement, où s'arrête l'assistance (l'IA prépare et rédige, le préventeur évalue et décide, avec le CSE), et la discipline de validation contre les textes sources. Ce cadre est un livrable, à intégrer à votre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>. Nous formons des équipes QSE et industrielles depuis 2022 : les mêmes questions reviennent partout, et elles ont des réponses pratiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Données d\'accidents = données de santé : anonymisation, offres entreprise', 'L\'IA prépare, le préventeur et le CSE décident', 'Validation contre Légifrance et l\'INRS avant diffusion', 'Gabarits QSE encodés et mutualisés'].map(pt => (
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
            <strong>1 980 € HT la journée de formation en intra-entreprise, pour le groupe (jusqu'à 10 participants) ; 3 960 € HT le format deux jours avec ateliers approfondis. Certifiée Qualiopi, la formation est finançable par votre OPCO au titre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis sous 24 heures.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le cadrage préalable avec vos éléments (section de DUERP, procédures, analyse anonymisée, grille d'audit, extrait de veille), l'animation de la journée en présentiel ou à distance, les supports, les livrables (bibliothèque de prompts QSE, gabarits outillés, cadre RGPD), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation IA QSE / HSE : les questions fréquentes</h2>
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
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Conformité', desc: "Ce que le règlement européen impose à vos propres usages de l'IA, et quand." },
              { label: 'Formation IA informatique / DSI', href: '/formation-ia-informatique', tag: 'Métier voisin', desc: "Pour les équipes IT qui outillent la QSE : usages, sécurité, déploiement." },
              { label: 'Formation IA achats', href: '/formation-ia-achats', tag: 'Métier voisin', desc: "Appels d'offres, analyse fournisseurs, contrats : souvent formés avec la QSE sur les sujets conformité." },
              { label: 'Formation IA management', href: '/formation-ia-management', tag: 'Métier voisin', desc: "Pour les responsables de site et managers qui pilotent des équipes augmentées." },
              { label: 'IA pour l\'industrie', href: '/ia-industrie', tag: 'Secteur', desc: "Les cas d'usage IA de l'industrie côté conseil et développement, au-delà de la QSE." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le cadre d'usage qui sécurise l'IA sur site : ce qu'on confie, comment, à qui." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Pour un responsable QSE seul sur son site : le tête-à-tête sur ses documents." },
              { label: 'Acculturation IA', href: '/acculturation-ia', tag: 'Entreprise', desc: "Quand c'est tout le site, au-delà de la QSE, qu'il faut embarquer." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA QSE / HSE</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Formons votre fonction QSE sur ses vrais documents</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre site, vos référentiels, vos outils et vos enjeux du moment. Nous revenons vers vous sous 24 heures avec un programme ajusté, les dates possibles et le devis, dossier OPCO compris.
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
