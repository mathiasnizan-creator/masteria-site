import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, MapPin, Network, ShieldCheck, Target, Workflow, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation make » (slug /formation-make), côté FORMATION.
 * Cible (Semrush fr, 2026-08-28) : « formation make » (720/mois, KD 12) ;
 * « formation integromat » capté par « (ex-Integromat) » dans title/FAQ.
 *
 * ANTI-CANNIBALISATION : le comparatif n8n/Make/Zapier vit sur /formation-n8n ;
 * CETTE page porte un tableau DIVERGENT « quel scénario Make pour quel
 * métier ». /formation-automatisation-ia = panorama ; /formation-zapier et
 * /formation-n8n = pages sœurs ; /agence-automatisation-ia = faire construire.
 *
 * INTÉGRITÉ : faits sobres (ex-Integromat, éditeur européen, modèle par
 * opérations, canevas visuel de scénarios, modules IA) — pas de compte
 * d'applications précis ni de tarifs éditeur. Masteria : 1 980 € HT/j, 2 jours.
 */

const SLUG = 'formation-make'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation Make (ex-Integromat) : scénarios et IA | Masteria'
const META_DESC = "Formation Make (ex-Integromat) en 2 jours : construire des scénarios fiables, maîtriser modules et opérations, insérer l'IA, superviser. Qualiopi, OPCO."
const KEYWORDS = "formation make, formation integromat, apprendre make, formation make automatisation, make ia, formation make entreprise"

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
  { icon: Network, label: 'Sans code : ateliers sur vos processus réels' },
  { icon: Building2, label: '2 jours en intra, dans vos locaux ou à distance' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; format 1 jour « premiers scénarios » possible au cadrage" },
  { label: 'Pour qui', value: "Équipes marketing, ventes, ADV, ops, RH et référents IA ; aucun prérequis technique" },
  { label: 'Outil', value: "Make (anciennement Integromat), connecté aux applications réelles de vos équipes" },
  { label: 'Méthode', value: "Chaque participant construit, teste et fiabilise un scénario complet sur un processus réel de son poste, étape IA comprise" },
  { label: 'Livrables', value: "Scénarios en état de marche, gestion d'erreurs posée, conventions d'équipe, plan d'automatisation" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable OPCO ; devis sous 24 h" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi Make'],
  ['#programme', 'Programme des 2 jours'],
  ['#metiers', 'Scénarios par métier'],
  ['#cas-usage', "Cas d'usage"],
  ['#pieges', 'Les pièges'],
  ['#tarif', 'Tarif'],
  ['#lexique', 'Lexique'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi Make (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Network,
    title: "Le visuel qui passe à l'échelle",
    desc: "Les scénarios Make se construisent sur un canevas : chaque module se voit, chaque flux se suit. Cette lisibilité, rare à ce niveau de puissance, fait de Make l'outil où les équipes métier deviennent réellement autonomes.",
  },
  {
    icon: Layers,
    title: 'Le juste milieu du marché',
    desc: "Nettement plus puissant que les outils d'entrée de gamme (routeurs, itérateurs, data stores, webhooks), nettement plus accessible que les orchestrateurs techniques : Make est le point d'équilibre pour la plupart des PME et ETI.",
  },
  {
    icon: Bot,
    title: "L'IA insérée dans les scénarios",
    desc: "Résumer un document entrant, extraire des champs, classer une demande, rédiger un brouillon : les modules IA s'insèrent comme n'importe quelle étape, avec un format de sortie imposé et une validation humaine là où ça engage.",
  },
  {
    icon: Zap,
    title: 'Un écosystème très large',
    desc: "Des milliers d'applications connectées, des webhooks pour tout le reste, et un éditeur européen : vos scénarios parlent à votre CRM, votre facturation, vos tableurs et vos messageries sans développement.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Prendre en main, construire ses premiers scénarios',
    resume: "De la logique de Make au premier scénario fiable sur un cas réel du poste.",
    matin: [
      { t: 'Make démontré en direct', d: "Scénarios, modules, opérations, exécutions : la logique de l'outil montrée sur des cas concrets avant de toucher au clavier." },
      { t: 'Connecter vos applications', d: "CRM, messagerie, tableurs, facturation : brancher les applications réelles de l'équipe avec des accès propres et nominatifs." },
      { t: "L'anatomie d'un scénario fiable", d: "Déclencheur, filtres, modules, sorties : la structure de référence, et le réflexe de nommage qui garde l'ensemble lisible." },
      { t: 'Comprendre le modèle par opérations', d: "Chaque module exécuté compte : on apprend à lire sa consommation dès le premier jour, pour concevoir des scénarios sobres." },
      { t: 'Atelier : le premier scénario', d: "Chaque participant choisit une tâche répétitive réelle de son poste et la monte de bout en bout, d'une page blanche ou d'un template Make adapté à son cas." },
    ],
    apresmidi: [
      { t: 'Transformer les données', d: "Mapping, fonctions, formats de date et de texte : le cœur du travail réel, là où la plupart des scénarios se jouent." },
      { t: 'Routeurs et chemins', d: "Un flux qui se sépare selon des conditions : le routeur, les filtres par branche, et les cas qui ne rentrent dans aucune case." },
      { t: 'Webhooks : réagir à un événement', d: "Formulaire soumis, paiement reçu, email entrant : déclencher un scénario depuis l'extérieur, proprement." },
      { t: 'Atelier : le scénario multi-branches', d: "Chacun enrichit son scénario du matin avec un routeur et des chemins selon les cas réels rencontrés." },
      { t: 'Revue croisée de fin de journée', d: "Chaque scénario passe devant le groupe : lisibilité, robustesse, consommation d'opérations." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: 'IA, fiabilisation, supervision',
    resume: "Des étapes IA sous garde-fous à la supervision et au plan d'automatisation de l'équipe.",
    matin: [
      { t: "Insérer l'IA dans un scénario", d: "Les modules IA sur des cas concrets : résumer, extraire des champs, classer une demande, rédiger un brouillon dans votre gabarit." },
      { t: "L'étape IA sous garde-fou", d: "Format de sortie imposé, cas de refus, validation humaine sur ce qui engage : l'IA prépare, l'humain décide, et c'est écrit dans le scénario." },
      { t: 'Data stores et mémoire', d: "Stocker un état entre deux exécutions : suivis, déduplication, historiques légers, sans monter une base de données." },
      { t: "La gestion d'erreurs, systématique", d: "Gestionnaires d'erreurs, exécutions incomplètes, reprises : un scénario qui casse en silence est le pire scénario ; chaque échec devient visible." },
      { t: 'Atelier : fiabiliser son scénario', d: "Gestion d'erreurs, garde-fous IA, test des cas limites : le scénario du jour 1 devient présentable en production." },
    ],
    apresmidi: [
      { t: 'Optimiser les opérations', d: "Boucles sur gros volumes, appels évitables, agrégations : les techniques qui divisent la consommation, donc la facture, à service égal." },
      { t: "Organiser le travail d'équipe", d: "Nommage, dossiers, documentation légère, propriétaire par scénario, export des blueprints pour sauvegarder et versionner : ce qui différencie trois scénarios qui durent de trente qui meurent." },
      { t: 'Données et RGPD', d: "Quelles données transitent par Make, quelles minimisations, quels accès : le cadre écrit, aligné sur les recommandations de la CNIL." },
      { t: 'Atelier : le plan de déploiement', d: "Pour chaque scénario construit : responsable, supervision, prochaine itération." },
      { t: "Plan d'automatisation de l'équipe", d: "Les trois processus prioritaires à automatiser ensuite, qui les porte, à quelle échéance ; la liste part avec vous." },
    ],
  },
]

/* ───────── Quel scénario Make pour quel métier (tableau divergent) ───────── */

const METIERS_TABLE = [
  {
    equipe: 'Marketing',
    scenarios: "Leads entrants vers le CRM avec enrichissement, publication multicanal préparée, collecte des retours de campagne",
    coeur: "Webhooks, routeurs, modules IA pour qualifier et rédiger",
  },
  {
    equipe: 'Ventes & ADV',
    scenarios: "Du devis signé à la facturation sans ressaisie, relances programmées, alertes sur le pipeline",
    coeur: "Filtres, data stores pour le suivi, notifications ciblées",
  },
  {
    equipe: 'Finance',
    scenarios: "Factures entrantes extraites et classées, rapprochements préparés, exports comptables planifiés",
    coeur: "Modules IA d'extraction, itérateurs et agrégateurs",
  },
  {
    equipe: 'Ops & RH',
    scenarios: "Onboarding orchestré (comptes, accès, documents), collecte de pièces, notifications d'équipe avec synthèse",
    coeur: "Déclencheurs planifiés, formulaires, étapes de validation humaine",
  },
]

/* ───────── Cas d'usage (6 cartes) ───────── */

const CAS_USAGE = [
  { icon: Target, title: 'Les leads sans ressaisie', desc: "Un formulaire ou une campagne génère un lead : le scénario l'enrichit, le crée dans le CRM, notifie le bon commercial avec un résumé IA du contexte." },
  { icon: Eye, title: 'La publication multicanal', desc: "Un contenu validé se décline et se programme sur chaque canal dans le bon format, avec un brouillon IA par déclinaison, relu avant envoi." },
  { icon: ListChecks, title: 'Les factures qui se classent', desc: "Une facture arrive : les champs sont extraits, le document est rangé, la ligne est préparée pour la compta, l'anomalie est signalée." },
  { icon: Layers, title: "L'onboarding orchestré", desc: "Un client ou un collaborateur arrive : comptes, accès, documents et messages de bienvenue s'enchaînent, avec des points de validation humaine." },
  { icon: Network, title: 'Les fichiers enrichis', desc: "Un tableau de contacts ou de produits s'enrichit automatiquement : données complétées, doublons signalés, formats normalisés." },
  { icon: Bot, title: "Les notifications intelligentes", desc: "Au lieu d'un flux brut, l'équipe reçoit des alertes triées et résumées par l'IA : l'information utile, au bon endroit, sans bruit." },
]

/* ───────── Les pièges (5 cartes) ───────── */

const PIEGES = [
  {
    title: 'Le scénario géant',
    desc: "Tout le processus dans un seul scénario tentaculaire, impossible à maintenir. La parade : découper par responsabilité, relier par webhooks, nommer proprement.",
  },
  {
    title: 'Les exécutions incomplètes ignorées',
    desc: "Make met de côté les exécutions qui échouent à mi-course ; personne ne les regarde, les données divergent. La formation en fait un rituel de supervision.",
  },
  {
    title: 'Le mapping fragile',
    desc: "Un champ renommé dans une application, et le scénario casse ou, pire, écrit faux. On apprend à mapper défensivement et à tester les cas limites.",
  },
  {
    title: 'Les opérations qui explosent',
    desc: "Une boucle sur un gros fichier et la consommation s'envole avec la facture. La sobriété se conçoit : agréger, filtrer tôt, éviter les appels inutiles.",
  },
  {
    title: 'Le scénario orphelin',
    desc: "Sans propriétaire ni documentation, un scénario survit à son créateur puis meurt à la première évolution. Chaque scénario de la formation sort avec un responsable et trois lignes de doc.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que la formation Make de Masteria ?",
    a: "Deux jours pour maîtriser Make en entreprise : comprendre la logique de scénarios, de modules et d'opérations, connecter vos applications réelles, construire des scénarios fiables avec gestion d'erreurs, y insérer des étapes IA sous garde-fous, puis organiser la supervision et le plan d'automatisation de l'équipe. Chaque participant travaille sur un processus réel de son poste. La formation est certifiée Qualiopi et finançable par votre OPCO.",
  },
  {
    q: 'Make et Integromat, est-ce le même outil ?',
    a: "Oui : Integromat a été renommé Make en 2022. Si vos équipes ont connu Integromat, elles retrouveront la même logique de scénarios visuels, dans une interface modernisée. La formation couvre l'outil actuel, et les recherches « formation Integromat » mènent au même programme.",
  },
  {
    q: 'Faut-il savoir coder pour suivre la formation Make ?',
    a: "Non, et c'est la force de Make : tout se construit visuellement, du déclencheur aux modules, avec des fonctions de transformation accessibles sans programmation. Il faut être à l'aise avec ses outils numériques du quotidien, rien de plus. C'est la formation d'automatisation que nous recommandons aux équipes marketing, ventes, ADV, ops et RH qui veulent devenir autonomes.",
  },
  {
    q: "C'est quoi, une « opération », et pourquoi ça compte ?",
    a: "Une opération est l'exécution d'un module dans un scénario : c'est l'unité de facturation de Make. Un scénario mal conçu peut consommer dix fois plus d'opérations qu'un scénario sobre, pour le même service rendu. La formation intègre cette lecture dès le premier jour : filtrer tôt, agréger, éviter les appels inutiles, et lire sa consommation comme on lit un compteur.",
  },
  {
    q: 'Make, n8n ou Zapier : comment choisir ?',
    a: "Make est le point d'équilibre : plus puissant que Zapier (routeurs, itérateurs, data stores), plus accessible que n8n, avec un vrai canevas visuel. n8n prend l'avantage sur les processus très complexes, les données sensibles (auto-hébergement européen) et les agents IA avancés ; Zapier sur la simplicité pure. Le comparatif détaillé des trois est sur la page formation n8n, et le cadrage tranche sur vos cas réels.",
  },
  {
    q: "Peut-on utiliser l'IA dans Make ?",
    a: "Oui : des modules IA s'insèrent dans les scénarios comme n'importe quelle étape, pour résumer un document entrant, extraire des champs, classer une demande ou rédiger un brouillon dans votre gabarit ; Make propose aussi ses propres agents IA pour les cas simples. La formation y consacre la matinée du jour 2, avec la règle appliquée partout chez Masteria : format de sortie imposé, et validation humaine sur tout ce qui engage l'entreprise.",
  },
  {
    q: 'Quel cadre RGPD pour des scénarios Make ?',
    a: "Make est un service cloud d'un éditeur européen : les données de vos scénarios y transitent, ce qui se cadre plutôt que s'improvise. La formation traite le sujet concrètement : minimiser les données qui circulent, gérer les accès et les connexions nominativement, documenter les flux dans le registre de traitements, en s'appuyant sur les recommandations de la CNIL. Pour les cas où les données ne doivent pas sortir de votre périmètre, l'auto-hébergement de n8n est l'alternative que nous présentons honnêtement.",
  },
  {
    q: 'La formation Make est-elle finançable par notre OPCO ?',
    a: "Oui : Masteria est certifiée Qualiopi, condition pour mobiliser votre OPCO dans le cadre du plan de développement des compétences. Nous préparons le dossier avec vous ; la décision et le niveau de prise en charge appartiennent à votre opérateur. Pas d'éligibilité CPF : c'est une formation d'équipe, qui relève du budget formation de l'entreprise.",
  },
  {
    q: 'Peut-on suivre la formation à distance ?',
    a: "Oui. Le format de référence est l'intra dans vos locaux, jusqu'à 12 participants ; le même programme se tient à distance en classe virtuelle, souvent en demi-journées. En individuel, un référent avance en tête-à-tête sur ses propres processus. Partout en France, en Suisse et en Belgique.",
  },
  {
    q: "Que reste-t-il dans l'entreprise après les 2 jours ?",
    a: "Les scénarios construits en atelier, en état de marche, avec leur gestion d'erreurs ; les conventions d'équipe (nommage, découpage, documentation légère, propriétaire par scénario) ; les règles écrites sur les données et la validation humaine ; la lecture de la consommation d'opérations ; et le plan d'automatisation de l'équipe : les trois processus suivants, qui les porte, à quelle échéance.",
  },
  {
    q: 'Et si nous préférons faire construire nos scénarios Make ?',
    a: "C'est une mission, pas une formation : notre agence d'automatisation IA conçoit, construit et maintient des scénarios Make ou des workflows n8n pour vous, avec la même exigence de gestion d'erreurs et de supervision. Les deux se combinent bien : une équipe formée cadre mieux le besoin et supervise mieux ce qu'on lui livre. Le cadrage, gratuit, oriente vers la bonne formule.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation Make (ex-Integromat) — Masteria',
  description: "Formation Make en 2 jours : logique de scénarios, modules et opérations, connexion de vos applications, construction de scénarios fiables avec gestion d'erreurs, étapes IA sous garde-fous, data stores, optimisation des opérations, supervision et gouvernance. Chaque participant automatise un processus réel de son poste. En intra, présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux, aucun prérequis technique',
  teaches: [
    "Comprendre la logique Make : scénarios, modules, opérations, exécutions",
    "Construire un scénario fiable de bout en bout sur un processus réel, gestion d'erreurs comprise",
    "Insérer des étapes IA (résumé, extraction, classification, rédaction) sous garde-fous",
    "Maîtriser routeurs, webhooks, data stores et mapping défensif",
    "Optimiser la consommation d'opérations et organiser la supervision d'équipe",
  ],
  about: "Make, anciennement Integromat (automatisation de scénarios)",
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: "Aucun prérequis technique ; être à l'aise avec ses outils numériques du quotidien.",
  audience: 'Équipes marketing, ventes, ADV, ops, RH, référents IA',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}

/* Le programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation Make (2 jours)',
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
  '@id': 'https://www.master-ia.fr/formation-make#article',
  headline: "Formation Make : des scénarios d'automatisation construits et fiabilisés",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-make#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30 ; Make n'a pas
     d'article dédié, on ancre sur les concepts. */
  about: [
    { '@type': 'Thing', name: 'Flux de travaux', sameAs: 'https://fr.wikipedia.org/wiki/Flux_de_travaux' },
    { '@type': 'Thing', name: 'Automatisation', sameAs: 'https://fr.wikipedia.org/wiki/Automatisation' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Interface de programmation', sameAs: 'https://fr.wikipedia.org/wiki/Interface_de_programmation' },
  ],
}

/* ── GEO : lexique Make (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique Make',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Scénario', description: "Enchaînement automatisé de modules dans Make, du déclencheur aux sorties : c'est l'unité que l'on construit, teste, documente et supervise." },
    { '@type': 'DefinedTerm', name: 'Module', description: "Brique d'un scénario : une action dans une application, une transformation, une étape IA. Les modules s'assemblent visuellement sur le canevas." },
    { '@type': 'DefinedTerm', name: 'Opération', description: "Exécution d'un module : l'unité de consommation et de facturation de Make. Concevoir sobre (filtrer tôt, agréger) divise la consommation à service égal." },
    { '@type': 'DefinedTerm', name: 'Routeur', description: "Module qui sépare un flux en plusieurs chemins selon des conditions : le cœur des scénarios qui traitent des cas différents." },
    { '@type': 'DefinedTerm', name: 'Webhook', description: "Adresse qui déclenche un scénario depuis un événement extérieur : formulaire soumis, paiement reçu, message entrant." },
    { '@type': 'DefinedTerm', name: 'Data store', description: "Petite base intégrée à Make pour garder un état entre deux exécutions : suivis, déduplication, historiques légers." },
    { '@type': 'DefinedTerm', name: 'Mapping', description: "Correspondance entre les champs d'une étape et ceux de la suivante. Un mapping défensif (valeurs par défaut, contrôles) évite les écritures fausses quand une source change." },
    { '@type': 'DefinedTerm', name: 'Itérateur et agrégateur', description: "Modules qui décomposent une liste en éléments, puis les regroupent : indispensables sur les volumes, et premier levier d'optimisation des opérations." },
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

export default function FormationMakePage() {
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
    { name: 'Formation Make', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation Make</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Network size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Make (ex-Integromat)
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation Make :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>vos scénarios d'automatisation, construits et fiabilisés</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation Make apprend à vos équipes à automatiser leurs processus avec Make (anciennement Integromat), l'outil de scénarios visuels le plus équilibré du marché. <strong style={{ color: '#fff', fontWeight: 700 }}>En 2 jours, chaque participant construit, fiabilise et supervise un scénario réel de son poste, étape IA comprise</strong>, en maîtrisant modules, routeurs, gestion d'erreurs et consommation d'opérations. Certifiée Qualiopi, finançable OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Make est l'outil où les équipes métier deviennent réellement autonomes sur l'automatisation : assez visuel pour se prendre en main vite, assez puissant pour tenir de vrais processus. La formation vise une seule chose : des scénarios propres, supervisés, qui ne cassent pas en silence.
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

      {/* ── POURQUOI MAKE ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>L'outil</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi Make est l'outil d'automatisation des équipes métier
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce que Make tient l'équilibre que les autres n'ont pas : un canevas visuel qui se prend en main en une matinée, et la puissance (routeurs, itérateurs, data stores, webhooks, modules IA) pour tenir de vrais processus. C'est l'outil où marketing, ventes, ADV et ops deviennent autonomes sans dépendre de l'IT.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour situer Make face aux alternatives, le comparatif complet n8n / Make / Zapier est sur la page <Link to="/formation-n8n" style={aStyle}>formation n8n</Link> ; et pour la démarche d'ensemble (quoi automatiser, dans quel ordre), voir la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link>.
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
            Le programme des 2 jours : du premier scénario à la supervision
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : la logique de Make, vos applications connectées, le modèle d'opérations compris, et un premier scénario réel multi-branches. Jour 2 : les étapes IA sous garde-fous, la gestion d'erreurs systématique, l'optimisation des opérations et le plan d'automatisation de l'équipe. Chaque participant travaille sur un processus de son poste.</strong>
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
            Le programme s'ajuste au cadrage, qui est gratuit : niveau réel des participants, applications en place, processus visés. En 1 jour, on s'arrête aux premiers scénarios fiables ; les 2 jours vont jusqu'à l'IA, l'optimisation et le plan d'automatisation.
          </p>
        </div>
      </section>

      {/* ── SCÉNARIOS PAR MÉTIER (tableau divergent) ── */}
      <section id="metiers" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Par métier</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quel scénario Make pour quelle équipe ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Make brille là où les processus traversent plusieurs applications : marketing, ventes et ADV, finance, ops et RH. Le tableau résume les scénarios types que nous construisons en atelier avec chaque équipe, et les briques Make qui les portent.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Équipe</th>
                  <th style={thStyle} scope="col">Scénarios types construits en atelier</th>
                  <th style={thStyle} scope="col">Les briques Make au cœur</th>
                </tr>
              </thead>
              <tbody>
                {METIERS_TABLE.map((row, i) => (
                  <tr key={row.equipe}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === METIERS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.equipe}</td>
                    <td style={{ ...tdStyle, borderBottom: i === METIERS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.scenarios}</td>
                    <td style={{ ...tdStyle, borderBottom: i === METIERS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.coeur}</td>
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
          <Kicker>Ce qu'on automatise</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que vos équipes construisent en atelier avec Make
          </h2>

          <p style={answerStyle}>
            <strong>Les ateliers partent des processus réels de vos équipes. Six familles reviennent le plus souvent : les leads sans ressaisie, la publication multicanal, les factures qui se classent, l'onboarding orchestré, les fichiers enrichis et les notifications intelligentes.</strong>
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

      {/* ── LES PIÈGES ── */}
      <section id="pieges" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ce qui fait échouer</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq pièges qui tuent les scénarios Make
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un déploiement Make qui déçoit a presque toujours l'une de ces cinq causes : le scénario géant, les exécutions incomplètes ignorées, le mapping fragile, les opérations qui explosent, le scénario orphelin. La formation traite chacun à l'endroit du programme où il se joue.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {PIEGES.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.75, margin: '26px 0 0', maxWidth: 860 }}>
            Ces règles viennent de nos missions : les scénarios que nous livrons en <Link to="/agence-automatisation-ia" style={{ color: c, fontWeight: 600 }}>agence d'automatisation</Link> vivent avec, et la formation transmet exactement les mêmes.
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
                1 980 € HT par jour de formation, pour le groupe
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La formation Make suit la grille unique de Masteria : 1 980 € HT par jour en intra, pour l'ensemble du groupe (jusqu'à 12 participants), soit 3 960 € HT les 2 jours ; le format d'une journée « premiers scénarios » se cale au cadrage. Masteria est certifiée Qualiopi : la formation est finançable par votre OPCO dans le cadre du plan de développement des compétences, nous préparons le dossier avec vous et la décision reste à votre opérateur. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes, et les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  "1 980 € HT par jour, pour le groupe (jusqu'à 12 personnes)",
                  '2 jours recommandés : IA, optimisation et plan compris',
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
                Des formateurs qui construisent des scénarios en mission
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria est un cabinet indépendant des éditeurs, spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022. Les scénarios montrés en formation appliquent les règles de nos propres <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>missions</Link> : gestion d'erreurs, garde-fous IA, sobriété des opérations, supervision. Les sessions sont animées par Mathias Nizan et un réseau de formateurs indépendants, expérimentés et pédagogues.
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
            Parler Make couramment : les huit termes à connaître
          </h2>
          <p style={answerStyle}>
            <strong>Huit termes suffisent pour suivre une conversation Make et lire sa documentation : scénario, module, opération, routeur, webhook, data store, mapping, itérateur. La formation les installe dès la première heure ; les voici tels que nous les enseignons.</strong>
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
                Formation Make : les questions fréquentes
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
            Make s'articule avec la démarche d'automatisation, les orchestrateurs voisins et, quand il faut du sur-mesure, nos missions de construction.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Panorama', desc: "Quoi automatiser et comment s'y prendre : la démarche complète, des outils natifs aux orchestrateurs." },
              { label: 'Formation n8n', href: '/formation-n8n', tag: 'Outil', desc: "L'orchestrateur auto-hébergeable aux agents IA les plus complets, et le comparatif n8n / Make / Zapier." },
              { label: 'Formation Zapier', href: '/formation-zapier', tag: 'Outil', desc: "La porte d'entrée de l'automatisation : des Zaps utiles en une journée, et les limites à connaître." },
              { label: 'Formation agents IA', href: '/formation-agents-ia', tag: 'Agents', desc: "Concevoir des agents dans vos outils bureau (ChatGPT, Claude, Copilot, Gemini), complément des scénarios." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Faire construire', desc: "Vos scénarios Make ou workflows n8n conçus, construits et maintenus en mission." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, plan de développement des compétences : les dispositifs qui financent la formation Make." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation Make</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Des scénarios propres, qui ne cassent pas en silence
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos processus répétitifs, vos applications et vos équipes. Nous revenons sous 24 heures avec un programme cadré et le devis, dossier OPCO compris.
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
