import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Calculator, BarChart3, BookOpenCheck, LineChart, FileText, ScrollText, Scale,
  GraduationCap, MapPin, Check, ShieldCheck, Sparkles, Landmark, Users, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation IA finance » (slug /formation-ia-finance).
 * REFONTE 2026-08-10 : sort du template MetierPage (générique 13 métiers) pour
 * une page au patron des money pages du jour. Cible « formation ia finance »
 * (320/mois, KD 16, CPC 4,63 $, intention C — Semrush 2026-08-10) ; SERP FR
 * tenue par Dauphine Executive, KPMG Formation, IHECF, Lefebvre Dalloz, First
 * Finance, Orsys — aucun spécialiste IA, AI Overview présent.
 *
 * ANTI-CANNIBALISATION : 6 spokes finance existent. Par outil (/formation-
 * chatgpt-finance, -copilot, -claude, -gemini, -mistral) = tête « formation
 * <outil> finance » ; /formation-multi-outils-finance = « Panorama IA Finance
 * 2 jours · 5 outils comparés » (intention comparatif). CETTE page tient
 * « formation ia finance » (le métier) et renvoie vers eux. /conseil-data-ia
 * tient le conseil données, pas la formation.
 *
 * SPÉCIFIQUE FINANCE (mémoire capacités calcul) : ne PAS dire « l'IA est
 * faible en calcul » ; la limite réelle = lecture des gros tableaux et
 * contrôle de ce qui engage. L'IA commente et rédige, Excel/l'ERP calculent.
 * Confidentialité des chiffres (offres entreprise, anonymisation) traitée
 * de front. Aucun chiffre de gain inventé.
 *
 * INTÉGRITÉ (ligne maison) : posture capacité, aucun cas client nommé, pas de
 * chiffre de gain inventé (les « x3 » du template ont été retirés) ; tarif
 * porté par le schema Course via courseData (parité 1 980 €/jour, mémoire
 * tarifs) ; multi-outils, indépendance éditeurs ; Qualiopi/OPCO visibles
 * (formation) ; jamais de CPF ; programme en journées Matin/Après-midi
 * (mémoire programme 2 colonnes) ; RGPD et charte explicites.
 */

const SLUG = 'formation-ia-finance'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA finance : Excel, reporting, clôture | Masteria"
const META_DESC = "Formation IA finance sur vos vrais dossiers : l'IA dans Excel, reporting et commentaires, clôture, contrôle de gestion, prévisions, notes. ChatGPT, Copilot, Claude, Gemini, Mistral. Qualiopi, OPCO."
const KEYWORDS = "formation ia finance, formation intelligence artificielle finance, formation ia contrôle de gestion, formation ia daf, formation ia comptabilité finance, formation ia direction financière"

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
  { icon: Target, label: 'Sur vos reportings et vos vrais dossiers' },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; version 1 jour possible pour un périmètre resserré" },
  { label: 'Pour qui', value: "Directions financières, contrôleurs de gestion, comptables et responsables comptables, trésoriers, analystes, FP&A" },
  { label: 'Outils', value: "Multi-outils, indépendants des éditeurs : ChatGPT, Microsoft Copilot (Excel compris), Claude, Gemini, Mistral" },
  { label: 'Méthode', value: "Chaque atelier travaille sur vos reportings, vos gabarits et vos vrais dossiers (anonymisés si besoin), jamais sur des exemples génériques" },
  { label: 'Livrables', value: "Bibliothèque de prompts finance, gabarits de commentaire et de note outillés, cadre de confidentialité des chiffres" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Ce que l'IA change dans chaque activité finance (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: Calculator,
    title: "L'IA dans Excel : votre nouvel analyste",
    desc: "Copilot dans Excel, l'analyse de données de ChatGPT et Claude, Gemini dans Sheets : décrivez ce que vous voulez en français et obtenez la formule, le tableau croisé, le graphique, la macro. Nettoyage de données, rapprochements, détection d'anomalies, scénarios : les tâches qui prenaient une après-midi de manipulation prennent quelques échanges. Le résultat se contrôle comme n'importe quel travail d'analyste, et le tableur reste le référentiel du calcul.",
  },
  {
    icon: BarChart3,
    title: 'Reporting et commentaires de résultats',
    desc: "Le tableau vient de votre outil ; le commentaire vient de vous, et c'est là que l'IA change la donne : à partir de vos chiffres arrêtés, elle rédige le premier jet du commentaire de gestion, les explications d'écarts et la synthèse pour la direction, dans votre format. Vous validez et affinez, au lieu de rédiger de zéro à chaque clôture.",
  },
  {
    icon: BookOpenCheck,
    title: 'Clôture et procédures',
    desc: "Check-lists de clôture, notes de procédure, documentation des schémas comptables, réponses aux demandes des commissaires aux comptes : l'IA structure et rédige la documentation qui entoure la clôture. Elle ne passe pas les écritures, elle libère le temps de ceux qui les passent.",
  },
  {
    icon: LineChart,
    title: 'Contrôle de gestion et analyse',
    desc: "Lecture d'un export propre, comparaison de périodes, explication d'un écart budget/réel, hypothèses de prévision à challenger, préparation d'une revue de performance. Avec la limite honnête, travaillée en atelier : l'IA lit mal les gros tableaux ; elle analyse bien ce que vous lui donnez déjà agrégé et propre.",
  },
  {
    icon: ScrollText,
    title: 'Notes, synthèses et lecture de documents',
    desc: "Synthèse d'un rapport annuel, d'un contrat de financement, d'une convention réglementée, d'une note fiscale ; note d'analyse pour un comité ; support de présentation des comptes. Les documents longs sont le terrain où l'IA fait gagner le plus de temps, à condition de vérifier chaque chiffre repris.",
  },
  {
    icon: Scale,
    title: 'Veille réglementaire et conformité',
    desc: "Synthèse d'une évolution normative ou fiscale, lecture d'un texte réglementaire, préparation d'une note d'impact, questions-réponses avant un audit. L'IA aide à comprendre et à formuler ; la position se valide avec l'expert-comptable, le CAC ou le fiscaliste, jamais sur la seule foi de l'outil.",
  },
]

/* ───────── Les atouts de l'IA pour la finance (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'La fin de la page blanche à chaque clôture',
    desc: "Commentaire de gestion, explication d'écarts, note de synthèse, réponse aux CAC : le premier jet arrive en minutes, dans votre format, à partir de vos chiffres. Le temps se déplace de la rédaction vers l'analyse et le contrôle, là où votre expertise compte.",
  },
  {
    title: 'Un analyste Excel disponible en permanence',
    desc: "Formules imbriquées, tableaux croisés, macros, scripts, nettoyage de fichiers hétérogènes, rapprochements : l'IA écrit et explique. Les équipes qui n'osaient pas les fonctions avancées y accèdent en langage naturel, et les experts vont plus vite.",
  },
  {
    title: "Des documents longs lus en profondeur",
    desc: "Rapport annuel d'un concurrent, contrat de financement de quatre-vingts pages, texte réglementaire, réponse d'appel d'offres : l'IA en extrait l'essentiel, les clauses qui comptent, les chiffres clés, avec renvoi aux passages sources pour vérification.",
  },
  {
    title: 'Des scénarios et des prévisions à challenger',
    desc: "Décrire une hypothèse et en obtenir les implications, tester des sensibilités, formuler les questions qu'un comité posera : l'IA aide à explorer plus large avant de figer un budget ou un forecast. Le modèle reste le vôtre ; l'IA élargit la réflexion.",
  },
  {
    title: 'Une veille réglementaire enfin tenable',
    desc: "Synthèse d'une évolution normative ou fiscale, note d'impact pour la direction, questions-réponses avant un audit : ce que personne n'a le temps de lire est digéré et restitué, à valider ensuite avec l'expert-comptable, le CAC ou le fiscaliste.",
  },
  {
    title: 'Une fonction finance qui monte en valeur',
    desc: "Moins de temps sur la production, plus sur le conseil aux opérationnels, la lecture des tendances et la préparation des décisions. C'est le déplacement que les directions financières recherchent depuis longtemps ; l'IA générative le rend concret, à condition de garder le contrôle.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Fondamentaux, reporting et clôture",
    matin: [
      "Comprendre ce que les modèles font et ne font pas : capacités réelles, la limite des gros tableaux, ce qui engage la direction financière",
      "Panorama des outils de la finance : ChatGPT, Copilot dans Excel et Microsoft 365, Claude, Gemini dans Sheets, Mistral ; lequel pour quoi",
      "La méthode de la demande efficace : contexte, rôle, format, exemples, itération",
      "Atelier : encoder vos gabarits (commentaire de gestion, note de synthèse, flash) et votre vocabulaire dans des instructions réutilisables",
    ],
    apresmidi: [
      "Atelier reporting : de vos chiffres arrêtés au commentaire de gestion et à la synthèse direction, dans votre format",
      "Atelier écarts : expliquer un écart budget/réel à partir d'un export propre, formuler les causes et les actions",
      "Atelier clôture : check-list, note de procédure, réponse structurée à une demande de commissaire aux comptes",
      "Cadre de confidentialité : chiffres, offres entreprise, anonymisation, ce qu'on confie à quel outil et ce qu'on ne confie jamais",
    ],
  },
  {
    jour: 'Jour 2',
    titre: "Analyse, documents, Excel et industrialisation",
    matin: [
      "Atelier analyse : lecture d'un export agrégé, comparaison de périodes, hypothèses de prévision à challenger, préparation d'une revue",
      "Atelier documents : synthèse d'un rapport annuel ou d'un contrat de financement, note d'analyse pour un comité, vérification des chiffres repris",
      "Atelier Excel et données : formules imbriquées, tableaux croisés, macros et scripts en langage naturel, nettoyage et rapprochement de fichiers, Copilot dans Excel et analyse de données de ChatGPT et Claude sur vos exports",
      "Veille réglementaire : synthétiser une évolution normative ou fiscale, préparer une note d'impact, valider avec les experts",
    ],
    apresmidi: [
      "Industrialiser : la bibliothèque de prompts finance, les gabarits outillés, les assistants ou GPTs de l'équipe",
      "Contrôler : la relecture chiffre par chiffre, la traçabilité des sources, ce qu'on ne diffuse jamais sans vérifier",
      "Votre plan d'action : les trois usages à installer avant la prochaine clôture, qui les porte, comment on mesure",
      "Évaluation des acquis et remise des livrables (prompts, gabarits, cadre de confidentialité)",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Landmark, title: 'DAF et responsables financiers', desc: "Décider quoi automatiser dans la production financière, fixer le cadre de confidentialité, arbitrer les outils et mesurer le gain. La formation vous donne la lecture d'ensemble et les réflexes de pilotage d'une fonction finance augmentée." },
  { icon: LineChart, title: 'Contrôleurs de gestion et FP&A', desc: "Commentaires d'écarts, revues de performance, hypothèses de prévision, présentations : les usages qui rendent des heures à chaque cycle, avec la rigueur du contrôle en garde-fou. Le cœur des ateliers d'analyse est fait pour vous." },
  { icon: BookOpenCheck, title: 'Comptables et responsables comptables', desc: "Documentation de clôture, procédures, réponses aux CAC, lecture de textes : l'IA prend la rédaction qui entoure les écritures. Vous restez sur les écritures elles-mêmes, où votre expertise est irremplaçable." },
  { icon: Users, title: 'Trésoriers, analystes, équipes finance élargies', desc: "Synthèses de contrats de financement, notes d'analyse, veille, préparation de comités : les usages transverses de la fonction, avec le même cadre de confidentialité et de vérification." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'apprend-on dans une formation IA finance ?",
    a: "À intégrer l'intelligence artificielle générative dans le travail quotidien d'une direction financière, sur vos vrais dossiers : rédiger les commentaires de gestion et les synthèses direction à partir de vos chiffres arrêtés, expliquer des écarts, documenter la clôture et répondre aux commissaires aux comptes, analyser des exports propres et challenger des hypothèses de prévision, synthétiser des documents longs (rapports, contrats, textes réglementaires), et utiliser l'IA comme assistant technique d'Excel. Et surtout à vérifier chiffre par chiffre : en finance, la vitesse ne vaut rien sans le contrôle.",
  },
  {
    q: "L'IA peut-elle faire notre clôture ou notre reporting à notre place ?",
    a: "Non, et il faut le dire clairement pour l'utiliser bien. L'IA ne passe pas les écritures, ne consolide pas et ne remplace ni votre ERP ni Excel : les chiffres viennent de vos outils, arrêtés et contrôlés par vos équipes. Ce qu'elle fait très bien, c'est tout ce qui entoure les chiffres : le commentaire de gestion, l'explication d'écart, la note de synthèse, la documentation de procédure, la réponse structurée à une demande. C'est la partie rédactionnelle de la finance, souvent la plus chronophage à chaque clôture, qui se trouve accélérée. La formation apprend précisément à placer cette frontière.",
  },
  {
    q: "Que sait faire l'IA dans Excel pour la finance ?",
    a: "Beaucoup, et c'est souvent le déclic de la formation. Copilot dans Excel, l'analyse de données de ChatGPT et de Claude, Gemini dans Sheets : vous décrivez en français ce que vous voulez et l'IA écrit la formule (y compris imbriquée), construit le tableau croisé ou le graphique, génère la macro ou le script, nettoie et rapproche des fichiers hétérogènes, repère les anomalies d'un export. Elle explique aussi une formule héritée que personne n'ose toucher. Une réserve à connaître : sur un classeur volumineux à vingt onglets, mieux vaut lui donner des extraits agrégés qu'un tout indigeste ; sur des données préparées, elle est excellente. Le tableur reste le référentiel du calcul, l'IA en devient l'analyste.",
  },
  {
    q: "Peut-on confier nos chiffres et nos documents financiers à l'IA ?",
    a: "Sous conditions, et la formation les pose noir sur blanc. Les offres entreprise des grands éditeurs (ChatGPT Business, Copilot Microsoft 365, Claude Team, Gemini Workspace) n'utilisent pas vos données pour entraîner leurs modèles et offrent un cadre contractuel, contrairement aux versions gratuites, à proscrire pour toute donnée financière. Certaines informations restent sensibles même dans ce cadre (données de marché non publiques, opérations en cours) : nous formalisons ensemble ce qu'on confie à quel outil, comment on anonymise un dossier, et ce qu'on ne confie jamais. C'est un livrable de la formation.",
  },
  {
    q: "Sur quels outils la formation porte-t-elle ?",
    a: "Sur ceux que votre équipe utilisera réellement. Nous sommes indépendants des éditeurs et multi-outils : ChatGPT, Microsoft Copilot (y compris dans Excel, pour ce qu'il sait faire réellement), Claude, Gemini et Mistral. En finance, l'écosystème Microsoft domine : quand Copilot est déployé, la formation s'y appuie largement ; quand le choix est ouvert, la première demi-journée compare sur vos cas. Pour approfondir un outil, voyez nos formations Copilot finance ou ChatGPT finance ; pour un comparatif complet, notre panorama IA finance en 2 jours.",
  },
  {
    q: "La formation travaille-t-elle sur nos vrais reportings ?",
    a: "Oui, c'est le principe. Avant la session, nous récupérons vos éléments : gabarits (commentaire de gestion, note de synthèse, flash), un ou deux reportings récents et un export d'écarts, anonymisés si vous le souhaitez, vos outils. Chaque atelier part de là : votre commentaire à rédiger, votre écart à expliquer, votre note à produire. Les participants repartent avec des livrables directement utilisables : bibliothèque de prompts finance, gabarits outillés, cadre de confidentialité.",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est de deux jours (14 heures) en intra-entreprise, en présentiel ou à distance, pour un groupe de 4 à 10 personnes de la fonction finance. Une version d'une journée existe pour un périmètre resserré (reporting et commentaires par exemple). Un accompagnement individuel est possible pour un DAF ou un responsable du contrôle de gestion. Les journées pleines alternent apports courts et ateliers pratiques, matin et après-midi.",
  },
  {
    q: "Combien coûte une formation IA finance ?",
    a: "Le tarif intra-entreprise est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : deux jours représentent 3 960 € HT pour l'équipe. La formation étant certifiée Qualiopi, votre OPCO peut la prendre en charge dans le cadre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis détaillé sous 24 heures.",
  },
  {
    q: "La formation est-elle finançable par notre OPCO ?",
    a: "Oui. Masteria est certifiée Qualiopi, ce qui rend la formation éligible au financement par votre OPCO au titre du plan de développement des compétences. La prise en charge dépend de votre branche et de la taille de l'entreprise. Nous fournissons le programme, la convention et les pièces du dossier ; le dépôt se fait avant le début de la formation. Notre outil Quel OPCO ? identifie votre opérateur en deux minutes. La formation n'est pas éligible au CPF.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA finance — Masteria',
  description: "Formation à l'intelligence artificielle générative appliquée à la fonction finance, sur les dossiers réels des participants : reporting et commentaires de gestion, clôture et procédures, contrôle de gestion et analyse d'écarts, notes de synthèse et lecture de documents, Excel et données, veille réglementaire, cadre de confidentialité des chiffres. Multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). 2 jours en intra, présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Rédiger commentaires de gestion et synthèses direction à partir de chiffres arrêtés",
    "Expliquer des écarts budget/réel et challenger des hypothèses de prévision avec l'IA",
    "Documenter la clôture et répondre aux commissaires aux comptes",
    "Synthétiser des documents financiers longs en vérifiant chaque chiffre repris",
    "Appliquer un cadre de confidentialité aux données financières confiées à l'IA",
  ],
  about: 'Intelligence artificielle générative appliquée à la finance d\'entreprise',
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: 'Aucun prérequis technique. Pratique d\'un métier de la fonction finance.',
  audience: 'Directions financières, contrôle de gestion, comptabilité, trésorerie, FP&A',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}

/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Programme de la formation IA finance Masteria (2 jours)',
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
  '@id': 'https://www.master-ia.fr/formation-ia-finance#article',
  headline: "Formation IA finance : l'IA générative d'Excel au reporting, jusqu'à la clôture",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2025-09-15',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-finance#webpage' },
  about: [
    { '@type': 'Thing', name: "Finance d'entreprise", sameAs: 'https://fr.wikipedia.org/wiki/Finance_d%27entreprise' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Contrôle de gestion', sameAs: 'https://fr.wikipedia.org/wiki/Contr%C3%B4le_de_gestion' },
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

export default function FormationIAFinancePage() {
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
    { name: 'Formation IA finance', slug: SLUG },
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
        datePublished="2025-09-15"
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA finance</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation métier · Finance
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA finance :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>l'IA générative d'Excel au reporting, jusqu'à la clôture</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation IA finance de Masteria apprend à votre direction financière à intégrer l'intelligence artificielle générative dans le travail quotidien : <strong style={{ color: '#fff', fontWeight: 700 }}>commentaires de gestion, clôture, analyse d'écarts, notes de synthèse, Excel, veille réglementaire</strong>, sur vos vrais dossiers, avec le contrôle en garde-fou. Deux jours, multi-outils, certifiée Qualiopi et finançable par votre OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            L'IA générative est devenue l'analyste que toute direction financière rêvait d'avoir : elle écrit vos formules et vos macros dans Excel, rédige le commentaire de gestion à partir de vos chiffres, digère un contrat de quatre-vingts pages, explique un écart, prépare une note de synthèse. Elle ne passe pas les écritures et ne remplace ni votre ERP ni votre tableur : elle décuple ce que vous en faites. La formation apprend à en tirer le maximum, à vérifier chiffre par chiffre et à protéger la confidentialité de vos données.
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
                Que change l'IA dans le travail d'une direction financière ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>L'IA générative touche six activités de la fonction finance : le reporting et les commentaires de résultats, la clôture et ses procédures, le contrôle de gestion et l'analyse d'écarts, les notes et la lecture de documents longs, Excel et les données, la veille réglementaire. Dans chacune, elle prend la rédaction et la mise en forme ; les chiffres, leur contrôle et la position finale restent aux professionnels.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La formation couvre les six, avec un poids ajusté à votre équipe au cadrage. Si votre sujet est la donnée elle-même (qualité, gouvernance, préparation pour des projets IA), c'est notre <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link>.
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
            Les atouts de l'IA générative pour une direction financière
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six gains concrets : la fin de la page blanche à chaque clôture, un analyste Excel disponible en permanence, des documents longs lus en profondeur, des scénarios et prévisions à challenger, une veille réglementaire enfin tenable, et une fonction finance qui monte en valeur en déplaçant son temps de la production vers le conseil et la décision.</strong>
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
            Un mot d'honnêteté qui rend ces gains durables : la limite réelle de l'IA en finance n'est pas le raisonnement, ce sont les très gros tableaux et le contrôle de ce qui engage. Donnez-lui des données préparées, demandez la source de chaque chiffre repris, relisez : le reste, elle le fait remarquablement bien.
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
            Programme de la formation IA finance sur 2 jours
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : les fondamentaux et la limite des gros tableaux, vos gabarits encodés, le reporting, les écarts et la clôture sur vos vrais dossiers, le cadre de confidentialité. Jour 2 : analyse, documents longs, Excel, veille réglementaire, puis l'industrialisation avec la bibliothèque de prompts finance, le contrôle chiffre par chiffre et votre plan d'action avant la prochaine clôture.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le programme s'ajuste au cadrage : une équipe comptable approfondit la clôture et les procédures, un contrôle de gestion l'analyse et les prévisions. En version 1 jour, on garde les fondamentaux, les gabarits encodés et deux ateliers au choix.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation IA finance ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À toute la fonction finance : DAF et responsables financiers qui fixent le cadre et arbitrent, contrôleurs de gestion et FP&A, comptables et responsables comptables, trésoriers, analystes. Sans prérequis technique : la pratique d'un métier de la finance suffit, en PME comme en groupe.</strong>
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
                Confidentialité des chiffres, contrôle, frontière de l'outil : ce que la formation pose noir sur blanc
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La finance manipule ce qu'une entreprise a de plus sensible : ses résultats avant publication, ses opérations en cours, ses conditions de financement. La formation formalise avec vous ce qu'on peut confier à quel outil (offres entreprise sans entraînement sur vos données, versions gratuites à proscrire pour toute donnée financière), comment on anonymise un dossier, où s'arrête l'assistance (l'IA rédige et explique, les chiffres et la position finale restent humains), et la discipline de relecture chiffre par chiffre. Ce cadre est un livrable, à intégrer à votre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>. Nous formons des équipes finance depuis 2022, dans l'industrie, l'énergie, les services ou l'immobilier : les mêmes questions reviennent partout, et elles ont des réponses pratiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Cadre de confidentialité par outil et par type de donnée', 'La frontière : l\'IA rédige, vos outils calculent, vous validez', 'Gabarits finance encodés et mutualisés', 'Relecture chiffre par chiffre, source de chaque donnée reprise'].map(pt => (
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
                Le cadrage préalable avec vos éléments (gabarits, reportings récents, exports d'écarts anonymisés), l'animation des deux journées en présentiel ou à distance, les supports, les livrables (bibliothèque de prompts finance, gabarits outillés, cadre de confidentialité), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation IA finance : les questions fréquentes</h2>
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
              { label: 'Formation Copilot finance', href: '/formation-copilot-finance', tag: 'Par outil', desc: "Copilot dans Microsoft 365 et Excel pour la finance : l'outil naturel de la plupart des directions financières." },
              { label: 'Formation ChatGPT finance', href: '/formation-chatgpt-finance', tag: 'Par outil', desc: "Approfondir ChatGPT pour la finance : analyse de fichiers, projets, GPTs personnalisés, recherche." },
              { label: 'Formation Claude finance', href: '/formation-claude-finance', tag: 'Par outil', desc: "Claude pour les documents longs, les rapports annuels et les projets par dossier." },
              { label: 'Panorama IA finance (5 outils)', href: '/formation-multi-outils-finance', tag: 'Comparatif', desc: "Quand le choix d'outil est ouvert : les cinq IA comparées sur vos fichiers finance en 2 jours." },
              { label: 'Sprint IA Excel (3 h)', href: '/formation-sprint-ia-excel', tag: 'Format court', desc: "L'atelier de 3 heures centré sur Excel et l'IA : formules, nettoyage, Copilot." },
              { label: 'Formation IA achats', href: '/formation-ia-achats', tag: 'Métier voisin', desc: "Pour les équipes achats, souvent formées avec la finance : appels d'offres, analyse fournisseurs, contrats." },
              { label: 'Conseil data & IA', href: '/conseil-data-ia', tag: 'Conseil', desc: "Quand le sujet est la donnée elle-même : qualité, gouvernance, préparation pour des projets IA." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Pour un DAF ou un responsable du contrôle de gestion : le tête-à-tête sur ses dossiers." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA finance</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Formons votre direction financière sur ses vrais dossiers</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre équipe finance, vos outils, votre calendrier de clôture et vos enjeux du moment. Nous revenons vers vous sous 24 heures avec un programme ajusté, les dates possibles et le devis, dossier OPCO compris.
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
