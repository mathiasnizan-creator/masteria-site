import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, Building2, Check, Eye, Factory, FileSpreadsheet, GraduationCap,
  Landmark, Layers, ListChecks, MapPin, ShieldCheck, Target, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PressMention } from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation data ia » (slug /formation-data-ia), côté FORMATION.
 * Cible (Semrush fr, 2026-08-28) : « formation data ia » (170/mois, KD 24)
 * + « formations data ia » (90/17) + « formation data ia entreprise » (90/30),
 * soit ~350/mois cumulés.
 *
 * ANTI-CANNIBALISATION :
 *  - CETTE page = FORMER les équipes métier à analyser leurs données avec
 *    l'IA générative (fichiers de travail, reporting), public non-data ;
 *  - /formation-gouvernance-donnees = gouverner et fiabiliser les données
 *    (patrimoine, rôles, référentiels, qualité) : angle distinct, lien croisé ;
 *  - /conseil-data-ia = les MISSIONS data (audit, pipelines, mise en qualité) ;
 *  - /formation-ia-finance = le métier finance complet ;
 *  - /formation-automatisation-ia et /formation-n8n = la collecte automatisée.
 *
 * DOCTRINE CALCUL (mémoire maison) : ne jamais dire « l'IA est faible en
 * calcul » : les assistants analysent en ÉCRIVANT ET EXÉCUTANT du code sur
 * le fichier fourni, ce qui rend les agrégats fiables ; les vraies limites
 * sont les très gros volumes et le contrôle de ce qui engage.
 * Réécrite le 07/10/2026 (texte propre, faits datés) : outils au 07/10/2026
 * (modes de Copilot dans Excel, tableurs de Vibe depuis le 22/09/2026,
 * FAITS-OUTILS-2026-10-07) ; deux cas cités avec lien vers leur ancre
 * (mission immobilier-etudes, cas industrie) ; FounderNote et OfficialSources
 * remplacés par une signature et des sources propres à la page.
 * AUCUN client nommé (règle d'anonymat absolue du site).
 * Entités Wikipédia vérifiées 200 le 2026-08-30.
 */

const SLUG = 'formation-data-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation data IA : analyse de données sans code | Masteria'
const META_DESC = "Formation data IA en 2 jours : analyser vos exports avec l'IA, vérifier chaque chiffre, reconstruire votre reporting. Copilot, ChatGPT, Claude, Gemini."
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
  { icon: GraduationCap, label: 'Qualiopi · actions de formation' },
  { icon: FileSpreadsheet, label: 'Vos exports, tableaux et verbatims' },
  { icon: Building2, label: 'Deux jours en intra, sur site ou en visio' },
  { icon: MapPin, label: 'France · Europe · États-Unis · Inde' },
]

/* ───────── En bref (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "Quatorze heures réparties sur deux journées, en intra ; une version d'une journée centrée sur l'analyse se décide au cadrage" },
  { label: 'Pour qui', value: "Les services qui vivent dans les exports : contrôle de gestion, opérations, marketing, commerce, RH, direction ; aucun bagage data exigé" },
  { label: 'Outils', value: "Ceux de vos licences : Copilot dans Excel, ChatGPT et son analyse de fichiers, Claude, Gemini dans Sheets, les tableurs de Vibe" },
  { label: 'Méthode', value: "Chacun analyse ses propres fichiers, apprend à contrôler un chiffre, puis reconstruit son reporting récurrent" },
  { label: 'Livrables', value: "Analyses reproductibles, gabarits de reporting, check-list de vérification, page de règles de l'équipe" },
  { label: 'Tarif', value: "1 980 € HT la journée, facturée au groupe ; 3 960 € HT le programme complet ; devis le lendemain du cadrage" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi maintenant'],
  ['#programme', 'Les deux jours'],
  ['#fiabilite', 'Grille de confiance'],
  ['#cas-usage', 'Ateliers types'],
  ['#tarif', 'Prix'],
  ['#lexique', 'Vocabulaire'],
  ['#faq', 'Questions'],
]

/* ───────── Pourquoi maintenant (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: FileSpreadsheet,
    title: 'Les exports dorment dans les dossiers partagés',
    desc: "Ventes, campagnes, tickets, temps passés, budgets : chaque service accumule des fichiers qu'il n'a ni le temps ni la méthode d'exploiter. C'est le premier terrain de l'IA générative, sans projet data ni infrastructure nouvelle.",
  },
  {
    icon: BarChart3,
    title: "L'assistant calcule en exécutant du code",
    desc: "Devant un fichier fourni, un assistant actuel n'estime pas : il écrit un petit programme, le fait tourner sur vos lignes et rend le résultat. Totaux, tris et croisements sortent donc d'un calcul, et la formation commence par le montrer.",
  },
  {
    icon: Layers,
    title: 'Vos licences savent déjà le faire',
    desc: "Les tableurs de Vibe depuis le 22 septembre 2026, Gemini dans Sheets, Claude et ses artefacts, ChatGPT et son analyse de fichiers, Copilot intégré à Excel : l'outil est souvent déjà payé. Les ateliers partent de vos licences, sans logiciel supplémentaire.",
  },
  {
    icon: ShieldCheck,
    title: 'Les limites se connaissent et se gèrent',
    desc: "Les volumes massifs demandent des outils data dédiés, et un chiffre qui engage l'entreprise se vérifie avant de circuler. La formation installe ces deux réflexes : savoir où l'IA est fiable, contrôler le reste.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Analyser ses fichiers, vérifier ses chiffres',
    resume: "De la question posée à l'analyse vérifiée, sur les exports que chaque participant apporte.",
    matin: [
      { t: "Rendre un fichier lisible pour l'assistant", d: "Des colonnes nommées, des formats propres, une ligne par observation : dix minutes de préparation qui changent la qualité de tout ce qui suit." },
      { t: 'Formuler une question de données', d: "Passer de « analyse ce fichier » à une demande précise : période, segment, indicateur, comparaison attendue, forme du résultat." },
      { t: "Lire ce que l'outil a calculé", d: "Le code exécuté, les étapes, les hypothèses retenues : comprendre la mécanique pour accorder sa confiance, ou corriger." },
      { t: 'Des graphiques et une synthèse lisibles', d: "Choisir le bon visuel (évolution, répartition, comparaison) et obtenir un commentaire rédigé dans votre format, prêt à relire." },
      { t: 'Atelier : un premier export passé au crible', d: "Chacun apporte un fichier de son poste et en tire trois constats vérifiés avant la pause." },
    ],
    apresmidi: [
      { t: 'Croiser deux sources', d: "Ventes et objectifs, tickets et effectifs, campagnes et chiffre d'affaires : la jointure expliquée simplement, avec ses pièges (clés, doublons, périmètres)." },
      { t: 'Tableaux croisés et cohortes', d: "Les analyses qui répondent aux questions du métier : par segment, par période, par équipe, par génération de clients." },
      { t: 'Repérer une analyse fausse', d: "Dates mal lues, doublons, colonnes ambiguës, moyennes trompeuses : les erreurs fréquentes et les contrôles qui les attrapent." },
      { t: 'Vérifier avant de diffuser', d: "La check-list maison : recouper avec un total connu, refaire le calcul par un autre chemin, tester un cas limite. Tout chiffre qui engage passe par là." },
      { t: 'Atelier : une analyse complète', d: "Question, préparation, calcul, vérification, synthèse : chacun déroule toute la méthode sur son fichier." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: 'Industrialiser le reporting',
    resume: "Du rapport récurrent reconstruit aux règles de l'équipe, jusqu'au plan d'action.",
    matin: [
      { t: "Le rapport récurrent, refait avec l'IA", d: "Votre reporting mensuel ou hebdomadaire reconstruit : gabarit stable, chiffres recalculés à chaque édition, commentaire préparé à relire." },
      { t: 'Le contexte marché, sourcé', d: "Compléter les chiffres internes par un état du marché grâce à la recherche approfondie des assistants, en vérifiant chacune de ses sources." },
      { t: "De l'analyse au support de réunion", d: "Messages clés, visuels, structure : transformer un tableau en décision préparée pour le comité ou pour le client." },
      { t: 'Une vue de suivi sans projet BI', d: "Construire une vue simple et datée, alimentée à chaque nouvel export, et savoir quand un outil d'informatique décisionnelle (BI) devient nécessaire." },
      { t: 'Atelier : votre reporting outillé', d: "Chacun repart avec son rapport récurrent prêt à servir : gabarit, demandes types, points de contrôle." },
    ],
    apresmidi: [
      { t: 'Automatiser la collecte, avec mesure', d: "Quand l'export manuel devient le goulot : ce que couvrent les tâches planifiées des assistants, et quand un orchestrateur comme n8n prend le relais." },
      { t: "Les fichiers dans les outils IA : les règles", d: "Version professionnelle, droits d'accès, données personnelles présentes dans les fichiers (RGPD), ce qu'on ne confie jamais à un assistant : l'équipe écrit ses règles." },
      { t: 'Partager les analyses', d: "Espaces d'équipe, conventions de nommage, qui actualise quoi : une analyse utile devient un bien commun." },
      { t: "Atelier : la page de règles de l'équipe", d: "Chaque équipe rédige sa page : fichiers autorisés, vérifications minimales, circuit de diffusion." },
      { t: "Le plan d'action", d: "Les trois analyses ou rapports à outiller ensuite, avec un responsable et une date pour chacun." },
    ],
  },
]

/* ───────── Fiable / à challenger / à proscrire (tableau divergent) ───────── */

const FIABILITE_TABLE = [
  {
    situation: 'Calculs, tris et agrégats sur un fichier fourni',
    verdict: 'Fiable',
    detail: "L'assistant exécute du code sur vos lignes : total, moyenne et classement viennent d'un calcul, sans estimation. On apprend malgré tout à relire ce code.",
  },
  {
    situation: 'Interprétations, tendances, explications',
    verdict: 'À challenger',
    detail: "L'outil propose des lectures plausibles ; certaines tombent juste, d'autres ignorent le contexte métier. Traitez-les comme un brouillon que votre connaissance du terrain valide.",
  },
  {
    situation: 'Chiffres « de mémoire », sans fichier',
    verdict: 'À proscrire',
    detail: "Un chiffre tiré de la mémoire du modèle (marché, statistique, comparaison) peut être daté ou inventé. Règle d'équipe : sans fichier ni source vérifiable, aucun chiffre dans un document.",
  },
  {
    situation: 'Volumes massifs, flux en continu',
    verdict: 'Outil data dédié',
    detail: "Au-delà des fichiers de travail (des dizaines de milliers de lignes, des flux continus), les outils de BI et les bases de données prennent le relais. La formation apprend à reconnaître cette limite ; notre conseil data s'occupe de la suite.",
  },
  {
    situation: 'Chiffres qui engagent : publication, client, décision',
    verdict: 'Vérification systématique',
    detail: "Avec n'importe quel outil, un chiffre qui sort de l'entreprise ou fonde une décision passe la check-list : recoupement, second calcul, cas limite. L'équipe l'inscrit dans ses règles.",
  },
]

/* ───────── Cas d'usage (6 cartes) ───────── */

const CAS_USAGE = [
  { icon: BarChart3, title: "L'export de ventes qui parle", desc: "Meilleures références, saisonnalité, clients qui décrochent : l'export mensuel débouche sur trois décisions argumentées, chiffres vérifiés." },
  { icon: ListChecks, title: 'Le reporting mensuel sans copier-coller', desc: "Le rapport récurrent se reconstruit : gabarit stable, calculs refaits à chaque édition, commentaire préparé qu'on relit au lieu de tout compiler." },
  { icon: Eye, title: 'Les verbatims clients comptés', desc: "Avis, réponses ouvertes, tickets : l'outil classe les motifs, compte les occurrences et illustre chaque thème par des citations tirées du fichier." },
  { icon: Target, title: 'Le budget suivi sans y passer ses soirées', desc: "Réalisé contre prévu, écarts expliqués, alerte sur les lignes qui dérivent : le suivi budgétaire outillé sur vos propres tableaux." },
  { icon: FileSpreadsheet, title: 'Le fichier remis en état', desc: "Doublons, formats incohérents, champs vides : l'outil diagnostique et corrige sous votre contrôle, avant que le fichier serve à une analyse." },
  { icon: Workflow, title: 'La vue qui se met à jour', desc: "Une vue de suivi légère, datée, alimentée à chaque nouvel export : la visibilité d'équipe sans projet de BI." },
]

/* ───────── Cas publiés (faits de src/data/missions-formation.js et etudes-de-cas.js) ───────── */

const CAS = [
  {
    icon: Building2,
    secteur: 'Groupe immobilier · formation individuelle',
    texte: "Une journée en tête-à-tête, en septembre 2026, pour la responsable des études d'un groupe immobilier : ses tableaux de ventes et ses parts de marché interrogés en langage courant, le fichier clients rendu anonyme avant tout import. Elle a terminé avec une note de lecture illustrée de graphiques et une présentation des résultats prête pour PowerPoint.",
    href: '/etudes-de-cas-ia#mission-immobilier-etudes',
    lien: 'Lire le récit de cette journée',
  },
  {
    icon: Factory,
    secteur: 'Groupe industriel du packaging · managers',
    texte: "Les managers pilotes formés à Microsoft Copilot (anciennement Microsoft 365 Copilot) ont fait leurs exercices Excel sur les tableaux internes du groupe, tarifs, volumes d'activité, coûts et fichier du personnel, plutôt que sur des exemples génériques. Dans leurs retours écrits, c'est le point qu'ils citent en premier.",
    href: '/etudes-de-cas-ia#industrie',
    lien: 'Lire le cas industriel',
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: 'Que couvre la formation data IA de Masteria ?',
    a: "Deux jours pendant lesquels des équipes métier apprennent à faire parler leurs fichiers avec l'IA générative : préparer un fichier, formuler une question précise, lire ce que l'outil a calculé, vérifier un chiffre avant de le diffuser, puis reconstruire le reporting récurrent et écrire les règles de l'équipe. Chacun travaille sur ses propres exports et repart avec son rapport outillé. La session relève de notre certification Qualiopi.",
  },
  {
    q: "Peut-on se fier à l'IA pour analyser des chiffres ?",
    a: "Oui, sous une condition expliquée en détail pendant les deux jours : sur un fichier fourni, l'assistant ne calcule pas de tête, il exécute du code sur vos données. Totaux, moyennes, tris et croisements sont donc de vrais calculs. Restent à contrôler les interprétations, plausibles mais à confronter à votre connaissance du métier, les chiffres cités sans fichier, à proscrire, et tout ce qui engage, qui passe par une check-list. La grille de confiance de cette page résume ces règles.",
  },
  {
    q: 'Faut-il être analyste ou statisticien pour suivre ?',
    a: "Non. La formation vise les équipes métier qui vivent dans les exports sans être des équipes data : contrôle de gestion, opérations, marketing, commerce, RH, direction. Savoir manipuler ses fichiers du quotidien suffit ; jointure, cohorte ou moyenne trompeuse sont expliquées simplement, sur vos données. Un public d'analystes y trouve aussi son compte : le cadrage relève alors le niveau et insiste sur la vérification et l'industrialisation.",
  },
  {
    q: 'Quels outils utilise-t-on pendant les deux jours ?',
    a: "Ceux que vous avez, en version professionnelle. Au 7 octobre 2026, cela peut être Copilot dans Excel, avec ses modes édition, plan et conversation ; ChatGPT et son analyse de fichiers ; Claude et ses artefacts pour les visualisations ; Gemini dans Google Sheets ; ou Vibe de Mistral, qui analyse les fichiers Excel et CSV depuis le 22 septembre 2026. Préparer, formuler, vérifier : la méthode ne change pas selon l'outil.",
  },
  {
    q: 'Que deviennent nos données pendant et après la formation ?',
    a: "Le cadre se pose avant d'ouvrir le premier fichier. Les exercices tournent sur des comptes professionnels réglés pour que vos fichiers ne servent pas à entraîner les modèles ; les fichiers qui contiennent des données personnelles sont anonymisés ou remplacés par des équivalents ; et la formation aboutit à des règles écrites (ce qui a le droit d'aller dans l'assistant, ce qui reste dehors, qui accède à quoi), conformes aux recommandations de la CNIL. Ces règles occupent un module entier du jour 2.",
  },
  {
    q: 'Quelle différence avec la formation gouvernance des données ?',
    a: "Les deux se complètent. Cette formation apprend aux équipes métier à tirer des analyses fiables de leurs fichiers avec l'IA. La formation gouvernance des données s'adresse aux personnes responsables des données de l'entreprise : patrimoine, rôles, qualité des référentiels, RGPD. Quand les fichiers analysés se contredisent entre services, c'est souvent par elle qu'il faut commencer.",
  },
  {
    q: 'Quelle différence avec votre offre de conseil data et IA ?',
    a: "Ici, vos équipes apprennent à analyser elles-mêmes leurs fichiers de travail. Le conseil data et IA est une mission menée par nos consultants : audit du patrimoine de données, mise en qualité, chaînes d'alimentation, projets de BI ou d'IA sur mesure. Chiffrée au forfait, cette prestation de conseil n'est pas finançable par votre OPCO. Tant que vos questions tiennent dans des fichiers de travail, la formation rend l'équipe autonome ; au-delà, la mission prend le relais.",
  },
  {
    q: 'Peut-on automatiser le reporting après la formation ?',
    a: "C'est le fil rouge du jour 2 : le rapport récurrent se reconstruit avec un gabarit et des demandes types, puis la collecte s'automatise dans une juste mesure, avec les tâches planifiées des assistants pour les cas simples et un orchestrateur pour les enchaînements entre logiciels. Si ce second palier devient le besoin principal, les formations automatisation IA et n8n prennent la suite.",
  },
  {
    q: 'Qui peut financer la formation data IA ?',
    a: "L'entreprise, avec l'appui possible de son opérateur de compétences. Masteria est certifiée Qualiopi pour ses actions de formation, ce qui permet de déposer un dossier auprès de votre OPCO ; nous le préparons avec vous, et l'opérateur décide du montant en fonction de ses critères et de son enveloppe. Le compte personnel de formation n'entre pas en jeu : il s'agit d'une formation d'équipe, inscrite au plan de formation.",
  },
  {
    q: 'La formation existe-t-elle en classe virtuelle ?',
    a: "Oui. L'intra dans vos locaux reste la formule la plus courante, jusqu'à douze participants ; le même programme se donne en classe virtuelle, souvent par demi-journées, chacun gardant ses fichiers ouverts. Nous formons en France et hors de France : Belgique, Suisse, États-Unis, Inde.",
  },
  {
    q: "Avec quoi l'équipe repart-elle ?",
    a: "Des analyses reproductibles sur ses fichiers, le reporting récurrent de chacun reconstruit (gabarit, demandes types, points de contrôle), la check-list de vérification d'un chiffre, la page de règles de l'équipe et le plan d'action : les trois analyses ou rapports à outiller ensuite, avec un responsable et une date.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation data IA (Masteria)',
  description: "Formation de deux jours pour les équipes métier : analyser ses propres fichiers avec l'IA générative (préparation, question de données, lecture du code exécuté, contrôle des chiffres), croiser des sources, reconstruire le reporting récurrent et écrire les règles de l'équipe sur l'usage des fichiers. Sur les licences en place : Copilot dans Excel, ChatGPT, Claude, Gemini dans Sheets, Vibe. Couverte par la certification Qualiopi de Masteria.",
  level: 'Tous niveaux, aucun prérequis data',
  teaches: [
    "Préparer un fichier et formuler une question de données précise",
    "Comprendre pourquoi un calcul sur fichier est fiable (code exécuté) et ce qui reste à contrôler",
    "Croiser des sources, construire tableaux croisés et cohortes sur ses propres exports",
    "Vérifier un chiffre avant diffusion : recoupement, second calcul, cas limite",
    "Reconstruire son reporting récurrent et écrire les règles de l'équipe, RGPD compris",
  ],
  about: "Analyse de données avec l'intelligence artificielle générative",
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: "Aucun bagage data ou statistique ; savoir manipuler ses fichiers du quotidien.",
  audience: 'Contrôle de gestion, opérations, marketing, commerce, RH, direction : les services qui vivent dans les exports',
  locationName: 'Masteria : intra en présentiel (France, Europe, États-Unis, Inde) ou classe virtuelle',
}

/* Le programme en ItemList (séquence citable, GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation data IA (2 jours)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    { '@type': 'ListItem', position: di * 2 + 1, name: `${day.jour}, matin : ${day.titre}`, description: day.matin.map(m => m.t).join(' ; ') },
    { '@type': 'ListItem', position: di * 2 + 2, name: `${day.jour}, après-midi : ${day.titre}`, description: day.apresmidi.map(m => m.t).join(' ; ') },
  ]),
}

/* Article : auteur, dates, entités (E-E-A-T + GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-data-ia#article',
  headline: "Formation data IA : analyser vos données avec l'IA, sans coder",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-10-07',
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

/* ── GEO : lexique data & IA (DefinedTermSet, rendu aussi en section visible) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: "Lexique de l'analyse de données avec l'IA",
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Code exécuté', description: "Ce qui rend fiable un calcul sur fichier : l'assistant écrit un petit programme, le lance sur vos données et rend le résultat. Savoir le relire, même en diagonale, change le niveau de confiance." },
    { '@type': 'DefinedTerm', name: 'Ancrage sur fichier', description: "Le principe de base de la formation : chaque chiffre vient d'un fichier fourni, jamais de la mémoire du modèle. Pas de source, pas de chiffre dans un document." },
    { '@type': 'DefinedTerm', name: 'Question de données', description: "Une demande d'analyse précise (période, segment, indicateur, comparaison, forme du résultat). La qualité du résultat se joue dans cette formulation, avant tout calcul." },
    { '@type': 'DefinedTerm', name: 'Jointure', description: "Le croisement de deux sources par une clé commune (client, date, référence). Utile et piégeux : doublons et périmètres différents donnent des chiffres faux qui semblent justes." },
    { '@type': 'DefinedTerm', name: 'Cohorte', description: "Un groupe suivi dans le temps, comme les clients arrivés le même mois : l'analyse simple qui répond aux questions de fidélité et de délai." },
    { '@type': 'DefinedTerm', name: 'Chiffre halluciné', description: "Un chiffre plausible mais inventé ou périmé, produit sans fichier source. Le principal risque des usages data de l'IA, écarté par l'ancrage sur fichier et la check-list." },
    { '@type': 'DefinedTerm', name: "Règles d'équipe sur les fichiers", description: "Ce que l'équipe écrit en fin de formation : fichiers autorisés dans chaque outil, données personnelles à anonymiser, qui vérifie, qui diffuse. La gouvernance des données à l'échelle de l'entreprise a sa propre formation." },
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

/* Sources : WebPage.citation + section visible. */
const PAGE_CITATIONS = [
  { name: "CNIL : dossier intelligence artificielle et recommandations sur les données personnelles", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: "Microsoft : les modes de Copilot dans Excel (page d'aide en anglais)", url: 'https://support.microsoft.com/en-us/office/agent-mode-in-excel-a2fd6fe4-97ac-416b-b89a-22f4d1357c7a' },
  { name: "Mistral : notes de version de Vibe, dont l'analyse de tableurs du 22 septembre 2026", url: 'https://docs.mistral.ai/resources/release-notes' },
  { name: "Plan de développement des compétences : fiche officielle du ministère du Travail", url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences' },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation data IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart3 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Analyse de données
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation data IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>analyser vos données avec l'IA, sans coder</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Programme rédigé par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · fonctions d'analyse des outils relevées le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable, accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation data IA apprend à des équipes métier à exploiter leurs propres fichiers avec l'IA générative : exports de ventes, budgets, verbatims clients, tableaux de suivi. <strong style={{ color: '#fff', fontWeight: 700 }}>En deux jours, chaque participant analyse ses exports, apprend à contrôler un chiffre et reconstruit son reporting récurrent</strong>, dans les outils déjà payés par l'entreprise : Copilot dans Excel, ChatGPT, Claude, Gemini dans Sheets ou Vibe. Masteria est certifiée Qualiopi pour ce type d'action.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Le point que beaucoup ignorent : devant un fichier, l'IA écrit et exécute du code pour calculer, elle ne devine pas. Bien utilisée, elle ouvre l'analyse de données à tout service ; bien encadrée, elle ne laisse passer ni chiffre inventé ni conclusion hâtive. Les deux jours installent l'usage et l'encadrement.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Programmer la formation data
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Détail des deux jours
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Fiche rapide</div>
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
                Pourquoi former vos équipes métier à l'analyse de données avec l'IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>La matière première est déjà là : chaque équipe accumule des exports qu'elle n'exploite pas, et les outils en place savent les analyser en exécutant du code. Il manque une méthode et des réflexes de vérification, et deux jours suffisent à les installer.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Si les fichiers se contredisent d'un service à l'autre, commencez par la <Link to="/formation-gouvernance-donnees" style={aStyle}>formation gouvernance des données</Link>. Quand les volumes dépassent les fichiers de travail, notre <Link to="/conseil-data-ia" style={aStyle}>conseil data et IA</Link> prend le relais en mission.
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
            Deux jours pour passer de l'export brut au reporting vérifié
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le jour 1 porte sur l'analyse : préparer le fichier, formuler la question, lire le code exécuté, croiser des sources, vérifier les chiffres. Le jour 2 porte sur la durée : reconstruire le reporting récurrent, le présenter, automatiser raisonnablement la collecte, écrire les règles de l'équipe.</strong>
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
            Le cadrage ajuste le programme : outils en place, fichiers types de chaque équipe, niveau de départ. Les trente premières minutes de ce cadrage sont offertes. En une journée, le programme s'arrête à l'analyse vérifiée ; en deux, il va jusqu'au reporting outillé et aux règles d'équipe.
          </p>
        </div>
      </section>

      {/* ── FIABLE OU PAS (tableau divergent, doctrine calcul) ── */}
      <section id="fiabilite" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>La grille de confiance</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Fiable, à challenger, à proscrire : où placer sa confiance
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Plutôt que de vous demander si l'on peut croire l'IA sur les chiffres, demandez-vous sur quoi et à quelles conditions. Cette grille de cinq lignes structure toute la formation et évite deux erreurs opposées : tout croire ou tout rejeter.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Cas de figure</th>
                  <th style={thStyle} scope="col">Verdict</th>
                  <th style={thStyle} scope="col">Explication</th>
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
          <Kicker>Ateliers types</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six analyses que les équipes construisent en atelier
          </h2>

          <p style={answerStyle}>
            <strong>Chaque atelier part des fichiers que les participants apportent. Six familles reviennent souvent : l'export de ventes exploité, le reporting mensuel reconstruit, les verbatims comptés, le budget suivi, le fichier remis en état et la vue d'équipe tenue à jour.</strong>
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

      {/* ── CAS PUBLIÉS ── */}
      <section id="exemples" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>En situation</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Deux formations récentes, sur les fichiers des participants
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Une personne seule ou une équipe de managers : le principe reste de travailler sur ses propres tableaux. Ces deux exemples, anonymisés, sont détaillés dans nos études de cas.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
            {CAS.map(cas => (
              <div key={cas.href} style={{ ...cardStyle, padding: 24, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <IconTile icon={cas.icon} />
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.35 }}>{cas.secteur}</div>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 14px', flex: 1 }}>{cas.texte}</p>
                <Link to={cas.href} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                  {cas.lien}
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>
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
              <Kicker>Prix et prise en charge</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                1 980 € HT par journée, soit 3 960 € HT le parcours
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le tarif est celui de toutes nos formations : chaque journée est facturée 1 980 € HT au groupe, douze personnes au maximum, et le programme complet revient donc à 3 960 € HT ; la version d'une journée centrée sur l'analyse se décide au cadrage. Notre certification Qualiopi, obtenue pour les actions de formation, permet de soumettre la session à votre opérateur de compétences, qui décide du financement selon ses propres critères ; nous constituons le dossier ensemble. Pas de CPF pour ces formations d'équipe. Pour une entreprise suisse ou belge, à Genève ou à Bruxelles, aucun OPCO n'intervient et le devis est établi en euros HT. L'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> retrouve votre opérateur, et la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link> passe les dispositifs en revue.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Une journée : 1 980 € HT pour tout le groupe',
                  "Deux jours conseillés : jusqu'au reporting outillé",
                  'Session présentable à votre OPCO',
                  'Devis le lendemain du cadrage',
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
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Les formateurs</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Des formateurs qui vérifient des chiffres pour leurs clients
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                L'analyse de fichiers revient dans nos parcours métier (finance, commerce, direction) et dans nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>missions</Link> : la check-list enseignée ici est celle que nous appliquons à nos propres livrables. Fondateur de Masteria (Lyon, 2022), Mathias Nizan pilote chaque session ; il l'anime ou en délègue l'animation à un formateur indépendant de son réseau, choisi pour son aisance avec les données. Aucun éditeur de logiciel ne rémunère le cabinet.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['2 jours', "de l'export brut au reporting vérifié"],
                ['5', 'lignes dans la grille de confiance'],
                ['7', 'notions de vocabulaire data'],
                ['0', 'ligne de code à écrire vous-même'],
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
            Sept notions pour parler data avec l'IA
          </h2>
          <p style={answerStyle}>
            <strong>Sept notions suffisent pour analyser sereinement avec un assistant : code exécuté, ancrage sur fichier, question de données, jointure, cohorte, chiffre halluciné, règles d'équipe sur les fichiers. Les définitions qui suivent sont celles de nos ateliers.</strong>
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
                Formation data IA : réponses aux questions courantes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Une question sur vos fichiers ou vos outils reste sans réponse ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Envoyez-la-nous
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
          <Kicker>Pour prolonger</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour prolonger l'analyse de données
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            L'analyse de fichiers rejoint la gouvernance des données, les parcours métier, l'automatisation de la collecte et, quand les volumes l'imposent, nos missions data.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation gouvernance des données', href: '/formation-gouvernance-donnees', tag: 'Gouverner', desc: "En amont de l'analyse : cartographier les données, nommer leurs responsables, fiabiliser les référentiels." },
              { label: 'Conseil data & IA', href: '/conseil-data-ia', tag: 'Missions', desc: "Quand les fichiers ne suffisent plus : audit, mise en qualité, projets sur mesure menés par nos consultants." },
              { label: 'Formation IA finance', href: '/formation-ia-finance', tag: 'Métier', desc: "Le parcours complet des équipes finance : reporting, analyses, clôtures." },
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Métier', desc: "Campagnes, audiences, verbatims : l'analyse appliquée au quotidien du marketing." },
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Automatisation', desc: "Automatiser la collecte et les tâches répétitives autour de vos fichiers." },
              { label: 'Formation n8n', href: '/formation-n8n', tag: 'Outil', desc: "L'orchestrateur qui alimente vos rapports sans intervention, étapes IA comprises." },
              { label: 'Formation agents IA', href: '/formation-agents-ia', tag: 'Agents', desc: "Des agents qui préparent dossiers et rapports sous supervision : l'étape suivante." },
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
                    Voir cette page
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
            Mathias Nizan a construit ce programme à partir des analyses que le cabinet produit pour ses propres missions, et il y a intégré le 7 octobre 2026 les fonctions d'analyse disponibles dans chaque outil. <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>Sa page</Link> présente son parcours.
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation data IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Vos exports valent mieux que le fond d'un dossier partagé
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Parlez-nous de vos équipes, de leurs fichiers types et de leurs outils. Le lendemain, un programme cadré et le devis vous parviennent, dossier OPCO compris. Dès la première matinée, chaque participant travaille sur ses propres données.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Programmer la formation data
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Deux jours · 3 960 € HT pour le groupe · sur site ou en visio · Qualiopi
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES (section propre à la page, remplace OfficialSources) ── */}
      <section aria-labelledby="sources-data" style={{ padding: '56px 40px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-data" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Où vérifier les informations de cette page
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Protection des données, documentation des éditeurs et financement de la formation :
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
