import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, Building2, Check, Eye, FileSpreadsheet, GraduationCap,
  Landmark, Layers, ListChecks, MapPin, ShieldCheck, Target, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation data ia » (slug /formation-data-ia), côté FORMATION.
 * Cible (Semrush fr, 2026-08-28) : « formation data ia » (170/mois, KD 24)
 * + « formations data ia » (90/17) + « formation data ia entreprise » (90/30),
 * soit ~350/mois cumulés.
 *
 * ANTI-CANNIBALISATION :
 *  - CETTE page = FORMER les équipes métier à analyser leurs données avec
 *    l'IA générative (fichiers réels, reporting), public non-data ;
 *  - /conseil-data-ia = les MISSIONS data (audit, pipelines, mise en qualité) ;
 *  - /formation-ia-finance = le métier finance complet ;
 *  - /formation-automatisation-ia et /formation-n8n = la collecte automatisée.
 *
 * DOCTRINE CALCUL (mémoire maison) : ne jamais dire « l'IA est faible en
 * calcul » — les assistants analysent en ÉCRIVANT ET EXÉCUTANT du code sur
 * le fichier fourni, ce qui rend les agrégats fiables ; les vraies limites
 * sont les très gros volumes et le contrôle de ce qui engage. Le tableau
 * « fiable / à challenger / à proscrire » porte cette doctrine.
 * AUCUN client cité (règle d'anonymat absolue du site).
 * Entités Wikipédia vérifiées 200 le 2026-08-30.
 */

const SLUG = 'formation-data-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation data IA : analysez vos données sans coder | Masteria'
const META_DESC = "Formation data IA en 2 jours : analyser vos fichiers réels avec l'IA (exports, tableaux, verbatims), fiabiliser les chiffres, automatiser le reporting. Qualiopi, OPCO."
const KEYWORDS = "formation data ia, formations data ia, formation data ia entreprise, formation ia analyse de données, analyser ses données avec l'ia, formation ia data"

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
  { icon: GraduationCap, label: 'Certifié Qualiopi · Finançable OPCO' },
  { icon: FileSpreadsheet, label: 'Sur vos fichiers réels : exports, tableaux, verbatims' },
  { icon: Building2, label: '2 jours en intra, dans vos locaux ou à distance' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; format 1 jour « analyser ses fichiers » possible au cadrage" },
  { label: 'Pour qui', value: "Équipes métier qui vivent dans les exports : contrôle de gestion, ops, marketing, commerce, RH, direction ; aucun prérequis data" },
  { label: 'Outils', value: "Ceux de votre environnement : Copilot dans Excel, ChatGPT et son analyse de fichiers, Claude, Gemini dans Sheets" },
  { label: 'Méthode', value: "Chaque participant analyse ses propres fichiers, apprend à vérifier les chiffres, puis reconstruit son reporting récurrent" },
  { label: 'Livrables', value: "Analyses reproductibles, gabarits de reporting outillés, check-list de vérification d'un chiffre, règles d'usage écrites" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable OPCO ; devis sous 24 h" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi maintenant'],
  ['#programme', 'Programme des 2 jours'],
  ['#fiabilite', 'Fiable ou pas'],
  ['#cas-usage', "Cas d'usage"],
  ['#tarif', 'Tarif'],
  ['#lexique', 'Lexique'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi maintenant (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: FileSpreadsheet,
    title: 'Vos données dorment dans des exports',
    desc: "Ventes, campagnes, tickets, temps, budgets : chaque équipe accumule des fichiers qu'elle n'a ni le temps ni l'outillage d'exploiter. Ce gisement est le premier terrain de jeu de l'IA générative, sans projet data ni infrastructure.",
  },
  {
    icon: BarChart3,
    title: "L'IA analyse en exécutant du code",
    desc: "Sur un fichier fourni, un assistant moderne n'estime pas les chiffres : il écrit du code, l'exécute sur vos données et restitue le résultat. C'est ce qui rend les agrégats, les tris et les croisements fiables, et c'est la première chose que la formation montre.",
  },
  {
    icon: Layers,
    title: 'Les outils sont déjà chez vous',
    desc: "Copilot dans Excel, l'analyse de fichiers de ChatGPT, Claude et ses artefacts, Gemini dans Sheets : votre environnement actuel sait déjà faire l'essentiel. La formation travaille sur vos licences réelles, pas sur un outil de plus.",
  },
  {
    icon: ShieldCheck,
    title: 'Les vraies limites se gèrent',
    desc: "Les très gros volumes appellent des outils data dédiés, et tout chiffre qui engage (publication, décision, client) se vérifie avant de circuler. La formation installe précisément ces réflexes : savoir ce qui est fiable, et contrôler le reste.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Analyser ses fichiers, vérifier ses chiffres',
    resume: "De la question de données à l'analyse fiable, sur les exports réels de chaque participant.",
    matin: [
      { t: "Préparer un fichier que l'IA comprend", d: "Colonnes nommées, formats propres, une ligne par observation : dix minutes de préparation qui changent toute la qualité des analyses." },
      { t: 'Poser une vraie question de données', d: "Passer de « analyse ce fichier » à une demande précise : période, segment, indicateur, comparaison attendue, format de sortie." },
      { t: "Lire ce que l'IA a réellement fait", d: "Le code exécuté, les étapes de calcul, les hypothèses prises : comprendre la mécanique pour pouvoir faire confiance, ou corriger." },
      { t: 'Graphiques et synthèses qui parlent', d: "Obtenir le bon visuel (évolution, répartition, comparaison) et une synthèse rédigée dans votre format, prête à relire." },
      { t: 'Atelier : premier export analysé', d: "Chaque participant apporte un fichier réel de son poste et en tire trois enseignements vérifiés avant la pause." },
    ],
    apresmidi: [
      { t: 'Croiser deux sources', d: "Ventes et objectifs, tickets et effectifs, campagnes et revenus : la jointure expliquée simplement, avec ses pièges (clés, doublons, périmètres)." },
      { t: 'Tableaux croisés et cohortes simples', d: "Les analyses qui répondent aux vraies questions du métier : par segment, par période, par équipe, par génération de clients." },
      { t: 'Les erreurs classiques et comment les voir', d: "Dates mal lues, doublons, colonnes ambiguës, moyennes trompeuses : le bêtisier des analyses fausses, et les contrôles qui les attrapent." },
      { t: 'Vérifier un chiffre avant de le diffuser', d: "La check-list maison : recouper avec un total connu, refaire le calcul autrement, tester un cas limite. Ce qui engage se vérifie, toujours." },
      { t: 'Atelier : une analyse complète de bout en bout', d: "Question, préparation, analyse, vérification, synthèse : chacun déroule la méthode entière sur son fichier." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: 'Industrialiser le reporting, cadrer les données',
    resume: "Du rapport récurrent reconstruit à la gouvernance des données, jusqu'au plan d'action de l'équipe.",
    matin: [
      { t: 'Le rapport récurrent, reconstruit', d: "Votre reporting mensuel ou hebdomadaire refait avec l'IA : gabarit stable, chiffres recalculés à chaque édition, commentaire pré-rédigé à relire." },
      { t: 'Le contexte externe avec la recherche approfondie', d: "Compléter vos chiffres internes par un état du marché sourcé : la recherche approfondie des assistants, et comment vérifier ses sources." },
      { t: 'Du tableau à la présentation', d: "Transformer une analyse en support de réunion : messages clés, visuels, structure. Le chiffre devient une décision préparée." },
      { t: 'Un tableau de bord léger, sans projet BI', d: "Quand un fichier suivi suffit : construire une vue simple et datée qui se met à jour à chaque nouvel export, et savoir quand un vrai outil BI se justifie." },
      { t: 'Atelier : son reporting reconstruit', d: "Chaque participant repart avec son rapport récurrent outillé : gabarit, demandes types, points de vérification." },
    ],
    apresmidi: [
      { t: 'Automatiser la collecte, raisonnablement', d: "Quand l'export manuel devient le goulot : ce que les tâches planifiées des assistants couvrent, et quand un orchestrateur comme n8n prend le relais." },
      { t: 'Gouvernance des données dans les outils IA', d: "Versions entreprise, périmètres d'accès, données personnelles dans les fichiers (RGPD), ce qui ne monte jamais dans un outil : les règles s'écrivent." },
      { t: "Partager sans perdre la maîtrise", d: "Analyses rangées dans les espaces d'équipe, conventions de nommage, qui met à jour quoi : l'analyse devient un actif collectif." },
      { t: "Atelier : les règles data de l'équipe", d: "Chaque équipe écrit sa page de règles : fichiers autorisés, vérifications minimales, diffusion." },
      { t: "Plan d'action collectif", d: "Les trois analyses ou rapports à outiller ensuite, qui les porte, à quelle échéance ; la liste part avec vous." },
    ],
  },
]

/* ───────── Fiable / à challenger / à proscrire (tableau divergent) ───────── */

const FIABILITE_TABLE = [
  {
    situation: "Calculs, tris et agrégats sur un fichier fourni",
    verdict: 'Fiable',
    detail: "L'assistant écrit et exécute du code sur vos données : le total, la moyenne, le classement sortent d'un calcul réel, pas d'une estimation. On apprend quand même à lire ce code.",
  },
  {
    situation: "Interprétations, tendances et explications",
    verdict: 'À challenger',
    detail: "L'IA propose des lectures plausibles de vos chiffres ; certaines sont justes, d'autres passent à côté du contexte métier. C'est un brouillon d'analyse, que votre connaissance du terrain valide.",
  },
  {
    situation: "Chiffres « de mémoire », sans fichier fourni",
    verdict: 'À proscrire',
    detail: "Un chiffre sorti de la mémoire du modèle (marché, statistique, benchmark) peut être daté ou inventé. La règle : pas de fichier ou de source vérifiable, pas de chiffre dans un document.",
  },
  {
    situation: "Très gros volumes et données temps réel",
    verdict: 'Outil data dédié',
    detail: "Au-delà des fichiers de travail (des dizaines de milliers de lignes, des flux continus), les outils BI et big data prennent le relais. La formation apprend à reconnaître cette frontière, notre conseil data prend la suite.",
  },
  {
    situation: "Chiffres qui engagent : publication, client, décision",
    verdict: 'Vérification systématique',
    detail: "Quel que soit l'outil, un chiffre qui sort de l'entreprise ou fonde une décision passe par la check-list de vérification : recoupement, recalcul, cas limite. C'est une règle d'équipe, écrite en formation.",
  },
]

/* ───────── Cas d'usage (6 cartes) ───────── */

const CAS_USAGE = [
  { icon: BarChart3, title: "L'export de ventes qui parle", desc: "Meilleures références, saisonnalité, clients qui décrochent : l'export mensuel devient trois décisions argumentées, chiffres vérifiés." },
  { icon: ListChecks, title: 'Le reporting mensuel en une heure', desc: "Le rapport récurrent se reconstruit : gabarit stable, calculs refaits à chaque édition, commentaire pré-rédigé qu'on relit au lieu de tout compiler." },
  { icon: Eye, title: 'Les verbatims clients quantifiés', desc: "Avis, réponses ouvertes, tickets : l'IA classe les motifs, compte les occurrences et illustre chaque thème de citations réelles." },
  { icon: Target, title: 'Le budget suivi sans y passer ses soirées', desc: "Réalisé contre prévu, écarts expliqués, alertes sur les lignes qui dérivent : le suivi budgétaire outillé sur vos propres tableaux." },
  { icon: FileSpreadsheet, title: 'Le fichier mis en qualité', desc: "Doublons, formats incohérents, champs manquants : l'IA diagnostique et corrige sous votre contrôle, avant que le fichier serve." },
  { icon: Workflow, title: 'La vue qui se met à jour', desc: "Un tableau de bord léger, daté, alimenté à chaque nouvel export : la visibilité d'équipe sans lancer un projet BI." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que la formation data IA de Masteria ?",
    a: "Deux jours pour apprendre aux équipes métier à analyser leurs données avec l'IA générative : préparer un fichier, poser une vraie question de données, lire ce que l'IA a calculé, vérifier un chiffre avant de le diffuser, puis industrialiser le reporting récurrent et écrire les règles data de l'équipe. Chaque participant travaille sur ses propres exports et repart avec son rapport récurrent outillé. La formation est certifiée Qualiopi et finançable par votre OPCO.",
  },
  {
    q: "L'IA est-elle fiable pour analyser des données chiffrées ?",
    a: "Oui, à une condition que la formation explique en détail : sur un fichier fourni, un assistant moderne ne calcule pas « de tête », il écrit du code, l'exécute sur vos données et restitue le résultat. Les totaux, moyennes, tris et croisements sont donc des calculs réels. Ce qui reste à contrôler : les interprétations (plausibles mais à valider par votre connaissance du métier), les chiffres cités sans fichier source (à proscrire), et tout ce qui engage, qui passe par une check-list de vérification. Le tableau de cette page résume cette grille.",
  },
  {
    q: 'Faut-il des compétences en data ou en statistiques ?',
    a: "Non : le public visé est l'équipe métier qui vit dans les exports sans être une équipe data : contrôle de gestion, ops, marketing, commerce, RH, direction. Il faut savoir manipuler ses fichiers du quotidien, rien de plus ; les notions utiles (jointure, cohorte, moyenne trompeuse) sont expliquées simplement, sur vos données. Les profils analystes y trouvent aussi leur compte : le cadrage ajuste le niveau et pousse plus loin sur la vérification et l'industrialisation.",
  },
  {
    q: 'Sur quels outils la formation se déroule-t-elle ?',
    a: "Sur votre environnement réel, en versions entreprise : Copilot dans Excel, ChatGPT et son analyse de fichiers, Claude et ses artefacts pour les visualisations, Gemini dans Sheets. Les fondamentaux (préparer un fichier, formuler la demande, vérifier le résultat) sont les mêmes partout ; les ateliers se font sur l'outil que vos équipes ouvriront le lendemain.",
  },
  {
    q: 'Que deviennent nos données pendant et après la formation ?',
    a: "Le cadre est posé avant le premier fichier : les sessions utilisent les offres entreprise, qui n'entraînent pas les modèles sur vos données ; les fichiers contenant des données personnelles sont anonymisés ou remplacés par des équivalents ; et la formation débouche sur des règles écrites (ce qui peut monter dans l'outil, ce qui reste hors champ, qui accède à quoi), alignées sur les recommandations de la CNIL. La gouvernance des données est un module du jour 2, pas une note de bas de page.",
  },
  {
    q: 'Quelle différence avec votre offre de conseil data & IA ?',
    a: "Cette page forme vos équipes à analyser elles-mêmes leurs fichiers de travail. Le conseil data & IA est une mission : audit de votre patrimoine de données, mise en qualité, pipelines, projets BI ou IA sur mesure. La frontière est simple : tant que vos questions tiennent dans des fichiers de travail, la formation rend l'équipe autonome ; quand les volumes, les flux ou les enjeux dépassent ce cadre, la mission prend le relais, et la formation vous a appris à reconnaître ce moment.",
  },
  {
    q: 'Peut-on automatiser le reporting après la formation ?',
    a: "C'est le fil du jour 2 : le rapport récurrent se reconstruit avec un gabarit stable et des demandes types, puis la collecte s'automatise raisonnablement : tâches planifiées des assistants pour les cas simples, orchestrateur pour les enchaînements entre applications. Quand ce second palier devient le besoin principal, les formations automatisation IA et n8n prennent la suite naturellement.",
  },
  {
    q: 'La formation data IA est-elle finançable par notre OPCO ?',
    a: "Oui : Masteria est certifiée Qualiopi, condition pour mobiliser votre OPCO dans le cadre du plan de développement des compétences. Nous préparons le dossier avec vous ; la décision et le niveau de prise en charge appartiennent à votre opérateur. Pas d'éligibilité CPF : c'est une formation d'équipe, qui relève du budget formation de l'entreprise.",
  },
  {
    q: 'Peut-on suivre la formation à distance ?',
    a: "Oui. Le format de référence est l'intra dans vos locaux, jusqu'à 12 participants ; le même programme se tient à distance en classe virtuelle, souvent en demi-journées, chacun gardant ses fichiers sous les yeux. Partout en France, en Suisse et en Belgique.",
  },
  {
    q: "Que reste-t-il dans l'équipe après les 2 jours ?",
    a: "Des analyses reproductibles sur vos fichiers réels, le reporting récurrent de chaque participant reconstruit (gabarit, demandes types, points de vérification), la check-list de vérification d'un chiffre, les règles data écrites de l'équipe, et le plan d'action : les trois analyses ou rapports à outiller ensuite, qui les porte, à quelle échéance.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation data IA — Masteria',
  description: "Formation data IA en 2 jours pour les équipes métier : analyser ses fichiers réels avec l'IA générative (préparation, question de données, lecture du code exécuté, vérification des chiffres), croiser des sources, reconstruire le reporting récurrent, poser la gouvernance des données (RGPD, versions entreprise, règles écrites). Sur vos outils : Copilot dans Excel, ChatGPT, Claude, Gemini dans Sheets. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux, aucun prérequis data',
  teaches: [
    "Préparer un fichier et formuler une vraie question de données",
    "Comprendre pourquoi les calculs de l'IA sont fiables (code exécuté) et ce qui reste à contrôler",
    "Croiser des sources, construire tableaux croisés et cohortes simples sur ses exports réels",
    "Vérifier un chiffre avant de le diffuser : recoupement, recalcul, cas limite",
    "Reconstruire son reporting récurrent et poser les règles data de l'équipe (RGPD compris)",
  ],
  about: "Analyse de données avec l'intelligence artificielle générative",
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: "Aucun prérequis data ou statistique ; savoir manipuler ses fichiers du quotidien.",
  audience: 'Contrôle de gestion, ops, marketing, commerce, RH, direction : les équipes métier qui vivent dans les exports',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}

/* Le programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation data IA (2 jours)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    { '@type': 'ListItem', position: di * 2 + 1, name: `${day.jour} · Matin — ${day.titre}`, description: day.matin.map(m => m.t).join(' ; ') },
    { '@type': 'ListItem', position: di * 2 + 2, name: `${day.jour} · Après-midi — ${day.titre}`, description: day.apresmidi.map(m => m.t).join(' ; ') },
  ]),
}

/* Article : auteur, dates, entités (E-E-A-T + GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-data-ia#article',
  headline: 'Formation data IA : vos données analysées, vos chiffres vérifiés, sans coder',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-data-ia#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30. */
  about: [
    { '@type': 'Thing', name: 'Analyse des données', sameAs: 'https://fr.wikipedia.org/wiki/Analyse_des_donn%C3%A9es' },
    { '@type': 'Thing', name: 'Visualisation de données', sameAs: 'https://fr.wikipedia.org/wiki/Visualisation_de_donn%C3%A9es' },
    { '@type': 'Thing', name: 'Tableur', sameAs: 'https://fr.wikipedia.org/wiki/Tableur' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

/* ── GEO : lexique data & IA (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique data & IA',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Code exécuté', description: "La raison pour laquelle les calculs de l'IA sont fiables sur un fichier fourni : l'assistant écrit un petit programme, l'exécute sur vos données et restitue le résultat. Savoir le lire, même en diagonale, change le niveau de confiance." },
    { '@type': 'DefinedTerm', name: 'Ancrage sur fichier', description: "Le principe de base de la formation : chaque chiffre vient d'un fichier fourni, jamais de la mémoire du modèle. Pas de source, pas de chiffre dans un document." },
    { '@type': 'DefinedTerm', name: 'Question de données', description: "Une demande d'analyse précise : période, segment, indicateur, comparaison, format de sortie. La qualité de l'analyse se joue à la formulation, avant tout calcul." },
    { '@type': 'DefinedTerm', name: 'Jointure', description: "Le croisement de deux sources par une clé commune (client, date, référence). Puissant et piégeux : doublons et périmètres différents produisent des chiffres faux plausibles, la formation montre les contrôles." },
    { '@type': 'DefinedTerm', name: 'Cohorte', description: "Un groupe suivi dans le temps (clients arrivés le même mois, dossiers ouverts le même trimestre) : l'analyse simple qui répond aux questions de fidélisation et de délai." },
    { '@type': 'DefinedTerm', name: 'Hallucination de chiffre', description: "Un chiffre plausible mais inventé ou daté, produit sans fichier source. Le risque principal des usages data de l'IA, neutralisé par l'ancrage sur fichier et la check-list de vérification." },
    { '@type': 'DefinedTerm', name: 'Gouvernance des données', description: "Les règles écrites de l'équipe : quels fichiers peuvent monter dans quels outils (versions entreprise), quelles données personnelles s'anonymisent, qui accède, qui vérifie, qui diffuse." },
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

/* Sources d'autorité : WebPage.citation + bloc visible. */
const PAGE_CITATIONS = [
  { name: "CNIL — Intelligence artificielle : recommandations et dossiers", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "Le plan de développement des compétences, ministère du Travail et de l'Emploi", url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences' },
]

export default function FormationDataIaPage() {
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
    { name: 'Formation data IA', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation data IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart3 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Data & IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation data & IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>vos données analysées, vos chiffres vérifiés, sans coder</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation data IA apprend aux équipes métier à analyser leurs données avec l'IA générative : exports de ventes, budgets, verbatims clients, fichiers de suivi. <strong style={{ color: '#fff', fontWeight: 700 }}>En 2 jours, chaque participant analyse ses propres fichiers, apprend à vérifier les chiffres et reconstruit son reporting récurrent</strong>, sur les outils déjà en place : Copilot dans Excel, ChatGPT, Claude, Gemini dans Sheets. Certifiée Qualiopi, finançable OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le point que tout le monde sous-estime : sur un fichier fourni, l'IA n'estime pas les chiffres, elle écrit et exécute du code pour les calculer. Bien utilisée, elle rend l'analyse de données accessible à toute équipe métier ; bien encadrée, elle ne laisse passer ni chiffre inventé ni conclusion hâtive. La formation installe les deux.
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

      {/* ── POURQUOI MAINTENANT ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Le constat</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi former vos équipes métier à la data avec l'IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce que le gisement est déjà là : chaque équipe accumule des exports qu'elle n'exploite pas, et les outils déjà en place savent désormais les analyser en exécutant du vrai code. Ce qui manque n'est ni la donnée ni l'outil : c'est la méthode, et les réflexes de vérification. Deux jours suffisent à installer les deux.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Quand les volumes ou les enjeux dépassent les fichiers de travail, notre <Link to="/conseil-data-ia" style={aStyle}>conseil data & IA</Link> prend le relais côté missions : audit, mise en qualité, projets sur mesure.
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
            Le programme des 2 jours : analyser, vérifier, industrialiser
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : analyser ses fichiers réels et vérifier ses chiffres : préparation, question de données, lecture du code exécuté, croisements, check-list de vérification. Jour 2 : industrialiser : le reporting récurrent reconstruit, la présentation, l'automatisation raisonnable de la collecte, et la gouvernance des données écrite.</strong>
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
                  {[['Matin', day.matin], ['Après-midi', day.apresmidi]].map(([label, items]) => (
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
            Le programme s'ajuste au cadrage, qui est gratuit : outils en place, fichiers types de chaque équipe, niveau réel. En 1 jour, on s'arrête à l'analyse vérifiée ; les 2 jours vont jusqu'au reporting industrialisé et aux règles d'équipe.
          </p>
        </div>
      </section>

      {/* ── FIABLE OU PAS (tableau divergent — doctrine calcul) ── */}
      <section id="fiabilite" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>La grille de confiance</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce qui est fiable, ce qu'on challenge, ce qu'on proscrit
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La bonne question n'est pas « peut-on faire confiance à l'IA sur les chiffres ? » mais « sur quoi, et à quelles conditions ». Cette grille est la colonne vertébrale de la formation : elle tient en cinq lignes, et elle évite les deux erreurs symétriques : tout croire, ou tout refuser.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Situation</th>
                  <th style={thStyle} scope="col">Verdict</th>
                  <th style={thStyle} scope="col">Pourquoi</th>
                </tr>
              </thead>
              <tbody>
                {FIABILITE_TABLE.map((row, i) => (
                  <tr key={row.situation}>
                    <td style={{ ...tdStyle, borderBottom: i === FIABILITE_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.situation}</td>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === FIABILITE_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.verdict}</td>
                    <td style={{ ...tdStyle, borderBottom: i === FIABILITE_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CAS D'USAGE ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ce qu'on analyse</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que vos équipes construisent en atelier
          </h2>

          <p style={answerStyle}>
            <strong>Les ateliers partent des fichiers réels de chaque participant. Six familles reviennent le plus souvent : l'export de ventes exploité, le reporting mensuel reconstruit, les verbatims quantifiés, le budget suivi, le fichier mis en qualité et la vue d'équipe qui se met à jour.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {CAS_USAGE.map((item, i) => (
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
      </section>

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT par jour de formation, pour le groupe
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La formation data IA suit la grille unique de Masteria : 1 980 € HT par jour en intra, pour l'ensemble du groupe (jusqu'à 12 participants), soit 3 960 € HT les 2 jours ; le format d'une journée « analyser ses fichiers » se cale au cadrage. Masteria est certifiée Qualiopi : la formation est finançable par votre OPCO dans le cadre du plan de développement des compétences, nous préparons le dossier avec vous et la décision reste à votre opérateur. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes, et les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  "1 980 € HT par jour, pour le groupe (jusqu'à 12 personnes)",
                  '2 jours recommandés : reporting industrialisé et règles comprises',
                  'Qualiopi : finançable OPCO, dossier préparé ensemble',
                  'Devis sous 24 h après un cadrage gratuit',
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
                Des formateurs qui analysent des données en mission chaque semaine
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, est indépendante des éditeurs. L'analyse de fichiers réels fait partie de nos parcours métier (finance, commerce, direction) et de nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>missions</Link> : la check-list de vérification enseignée ici est celle que nous appliquons à nos propres livrables. Les sessions sont animées par Mathias Nizan et un réseau de formateurs indépendants, expérimentés et pédagogues.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['Depuis 2022', 'spécialisé uniquement IA'],
                ['+1 500', 'professionnels formés'],
                ['Qualiopi', 'actions de formation certifiées'],
                ['FR · CH · BE', 'intra sur site ou à distance'],
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
            Parler data couramment : les sept termes à connaître
          </h2>
          <p style={answerStyle}>
            <strong>Sept termes suffisent pour analyser sereinement avec l'IA : code exécuté, ancrage sur fichier, question de données, jointure, cohorte, hallucination de chiffre, gouvernance des données. Les voici tels que nous les enseignons.</strong>
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
                Formation data IA : les questions fréquentes
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
            L'analyse de données s'articule avec les parcours métier, l'automatisation de la collecte et, quand les volumes l'exigent, nos missions data.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation gouvernance des données', href: '/formation-gouvernance-donnees', tag: 'Gouverner', desc: "Avant d'analyser : cartographier le patrimoine, nommer les rôles, gérer les données de référence." },
              { label: 'Conseil data & IA', href: '/conseil-data-ia', tag: 'Missions', desc: "Quand les fichiers ne suffisent plus : audit du patrimoine de données, mise en qualité, projets sur mesure." },
              { label: 'Formation IA finance', href: '/formation-ia-finance', tag: 'Métier', desc: "Le parcours complet des équipes finance : reporting, analyses, clôtures, avec le même socle data." },
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Métier', desc: "Campagnes, audiences et verbatims : l'analyse de données appliquée au quotidien marketing." },
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Automatisation', desc: "Automatiser la collecte et les tâches répétitives autour de vos données : le palier suivant." },
              { label: 'Formation n8n', href: '/formation-n8n', tag: 'Outil', desc: "L'orchestrateur qui alimente vos reportings automatiquement, workflows et étapes IA comprises." },
              { label: 'Formation agents IA', href: '/formation-agents-ia', tag: 'Agents', desc: "Des agents qui préparent dossiers et reportings en autonomie surveillée : la suite logique." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation data IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Vos exports valent mieux que le fond d'un dossier partagé
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos équipes, leurs fichiers types et leurs outils. Nous revenons sous 24 heures avec un programme cadré et le devis, dossier OPCO compris. Dès le premier matin, chaque participant analyse ses propres données.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un devis sous 24 h
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Certifié Qualiopi · Finançable OPCO · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources extra={PAGE_CITATIONS} />
    </>
  )
}
