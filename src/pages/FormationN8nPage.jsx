import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, MapPin, Network, Scale, ShieldCheck, Sparkles, Target, Workflow, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation n8n » (slug /formation-n8n), côté FORMATION
 * (OPCO/Qualiopi visibles).
 * Cible (Semrush fr, relevé 2026-08-28) : « formation n8n » (1 000/mois,
 * KD 23) — le plus gros volume outil non couvert du site.
 *
 * RÉPARTITION D'INTENTIONS (anti-cannibalisation) :
 *  - /formation-n8n = CETTE page : MAÎTRISER n8n (2 jours, workflows + IA
 *    + agents + fiabilisation) ; porte le tableau comparatif n8n/Make/Zapier ;
 *  - /formation-make et /formation-zapier = les pages sœurs (tableaux
 *    DIVERGENTS : Make = scénarios par métier, Zapier = « suffit ou pas ») ;
 *  - /formation-automatisation-ia = le panorama de la démarche (quoi
 *    automatiser, 3 paliers) ;
 *  - /formation-agents-ia = concevoir des agents dans les outils bureau ;
 *  - /agence-automatisation-ia = FAIRE CONSTRUIRE (mission, pas formation).
 *
 * INTÉGRITÉ : faits produit sobres (auto-hébergeable, licence fair-code,
 * éditeur berlinois, nœuds IA et agents, facturation à l'exécution en cloud,
 * version auto-hébergée communautaire gratuite) — pas de compte d'intégrations
 * précis ni de prix éditeur. Tarif Masteria : 1 980 € HT/jour groupe, 2 jours.
 * Entité Wikipédia N8n vérifiée 200 le 2026-08-30.
 */

const SLUG = 'formation-n8n'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation n8n : workflows, IA et agents, sans code | Masteria'
const META_DESC = "Formation n8n en 2 jours : construire des workflows fiables, y brancher l'IA et des agents, auto-héberger en Europe, superviser. Qualiopi, finançable OPCO."
const KEYWORDS = "formation n8n, formation n8n français, apprendre n8n, formation automatisation n8n, n8n agents ia, formation n8n entreprise"

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
  { icon: Workflow, label: 'Low-code : ateliers sur vos processus réels' },
  { icon: Building2, label: '2 jours en intra, dans vos locaux ou à distance' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; format 1 jour « premiers workflows » possible au cadrage" },
  { label: 'Pour qui', value: "Référents IA, ops, équipes métier outillées, IT de proximité ; à l'aise avec ses outils numériques, sans être développeur" },
  { label: 'Outil', value: "n8n en version cloud ou auto-hébergée sur vos serveurs (un atout pour les données sensibles), connecté à vos applications" },
  { label: 'Méthode', value: "Chaque participant construit, teste et fiabilise un workflow complet sur un processus réel de son poste, étapes IA comprises" },
  { label: 'Livrables', value: "Workflows en état de marche, conventions de nommage et gabarits, gestion d'erreurs posée, plan d'automatisation de l'équipe" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable OPCO ; devis sous 24 h" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi n8n'],
  ['#programme', 'Programme des 2 jours'],
  ['#comparatif', 'n8n, Make ou Zapier'],
  ['#cas-usage', "Cas d'usage"],
  ['#pieges', 'Les pièges'],
  ['#tarif', 'Tarif'],
  ['#lexique', 'Lexique'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi n8n (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Network,
    title: 'Des workflows sans plafond',
    desc: "Déclencheurs, branches, boucles, transformations, appels d'API : n8n encaisse les processus complexes que les outils plus simples finissent par bloquer. Le nœud Code reste disponible pour le dernier kilomètre, sans jamais être obligatoire.",
  },
  {
    icon: Bot,
    title: "L'IA et les agents intégrés",
    desc: "n8n embarque des nœuds dédiés à l'IA et aux agents : résumer, extraire, classer, décider d'une étape, interroger vos documents. C'est l'outil naturel pour orchestrer des workflows où l'IA travaille sous contrôle humain.",
  },
  {
    icon: ShieldCheck,
    title: 'Auto-hébergeable, en Europe',
    desc: "n8n s'installe sur vos serveurs ou chez votre hébergeur européen : les données de vos workflows restent chez vous. Pour les secteurs sensibles, c'est souvent l'argument qui fait choisir n8n, et la version auto-hébergée communautaire est gratuite.",
  },
  {
    icon: Layers,
    title: 'Un coût qui tient à volume',
    desc: "En cloud, n8n se facture à l'exécution de workflow plutôt qu'à la tâche unitaire : un processus de vingt étapes qui tourne mille fois reste prévisible. À volumétrie croissante, la différence avec les outils facturés à la tâche devient structurante.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Prendre en main, construire ses premiers workflows',
    resume: "De la logique de n8n au premier workflow fiable sur un cas réel du poste.",
    matin: [
      { t: 'n8n démontré en direct', d: "Workflows, nœuds, exécutions, credentials : la logique de l'outil montrée sur des cas concrets avant de toucher au clavier." },
      { t: 'Cloud ou auto-hébergé : poser le cadre', d: "Où tournent vos workflows, où passent vos données, qui a accès : le choix d'hébergement et la gestion des credentials se décident en premier." },
      { t: 'Connecter vos applications', d: "Messagerie, agenda, stockage, tableurs, CRM : brancher les applications réelles de l'équipe, proprement, avec des accès nominatifs." },
      { t: "L'anatomie d'un workflow fiable", d: "Déclencheur, étapes, transformations, sorties : la structure de référence, et les conventions de nommage qui gardent l'ensemble lisible." },
      { t: 'Atelier : le premier workflow', d: "Chaque participant choisit une tâche répétitive réelle de son poste et la monte de bout en bout, d'une page blanche ou d'un modèle de la bibliothèque de templates n8n adapté à son cas." },
    ],
    apresmidi: [
      { t: 'Transformer les données', d: "Filtres, mappings, boucles, fusions : le cœur du travail réel, là où la plupart des workflows se jouent." },
      { t: "Brancher l'IA dans le flux", d: "Les nœuds IA de n8n sur des cas concrets : résumer un document entrant, extraire des champs, classer une demande, rédiger un brouillon." },
      { t: 'Webhooks et déclencheurs avancés', d: "Réagir à un événement extérieur : formulaire, email entrant, changement dans une application tierce. Le nœud HTTP Request ouvre le reste : toute application dotée d'une API devient connectable." },
      { t: 'Atelier : une étape IA dans son workflow', d: "Chacun ajoute une étape IA utile à son workflow du matin, avec un format de sortie imposé et vérifiable." },
      { t: 'Revue croisée de fin de journée', d: "Chaque workflow passe devant le groupe : lisibilité, robustesse, ce qui casserait en production." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: 'Agents, fiabilisation, supervision',
    resume: "Des agents IA sous garde-fous à la supervision quotidienne des exécutions.",
    matin: [
      { t: 'Les agents IA dans n8n', d: "Quand une étape IA ne suffit plus : donner un objectif, des outils et des limites à un agent, et décider ce qu'il a le droit de faire seul." },
      { t: 'Interroger vos documents', d: "Brancher un corpus de référence (procédures, gabarits, historiques) pour que les étapes IA répondent avec vos contenus, pas de mémoire." },
      { t: "La gestion d'erreurs, systématique", d: "Workflows d'erreur, reprises, alertes : un échec silencieux est le pire scénario d'une automatisation ; on rend chaque échec visible." },
      { t: 'Sécurité et RGPD dans les workflows', d: "Quelles données transitent, où elles sont stockées, qui accède aux credentials : le cadre écrit, aligné sur les recommandations de la CNIL." },
      { t: 'Atelier : fiabiliser son workflow', d: "Gestion d'erreurs, garde-fous sur les étapes IA, test des cas limites : le workflow du jour 1 devient présentable en production." },
    ],
    apresmidi: [
      { t: 'Superviser au quotidien', d: "Lire les exécutions, repérer les dérives, décider quand on répare et quand on débranche : la supervision se rode en atelier." },
      { t: 'Industrialiser', d: "Sous-workflows réutilisables, conventions d'équipe, documentation légère : ce qui différencie trois workflows qui durent de trente qui meurent." },
      { t: 'Gouvernance des automatisations', d: "Qui crée, qui valide, qui possède : les règles d'équipe, la validation humaine sur ce qui engage, le registre des workflows actifs." },
      { t: 'Atelier : le plan de déploiement', d: "Pour chaque workflow construit : responsable, supervision, prochaine itération." },
      { t: "Plan d'automatisation de l'équipe", d: "Les trois processus prioritaires à automatiser ensuite, qui les porte, à quelle échéance ; la liste part avec vous." },
    ],
  },
]

/* ───────── Comparatif n8n / Make / Zapier ───────── */

const COMPARATIF = [
  {
    critere: 'Prise en main',
    n8n: "Exigeante mais structurante : la logique de nœuds s'apprend en une journée encadrée",
    make: "Visuelle et rapide : le canevas de scénarios parle tout de suite",
    zapier: "La plus simple du marché : un Zap se monte en quelques minutes",
  },
  {
    critere: 'Hébergement des données',
    n8n: "Cloud, ou auto-hébergé sur vos serveurs européens : les flux restent chez vous",
    make: "Cloud (éditeur européen)",
    zapier: "Cloud (éditeur américain) : les transferts de données se cadrent au préalable",
  },
  {
    critere: 'Modèle de coût',
    n8n: "À l'exécution de workflow en cloud ; version auto-hébergée communautaire gratuite",
    make: "À l'opération : chaque module exécuté compte",
    zapier: "À la tâche : simple au départ, le budget monte vite à volume",
  },
  {
    critere: 'IA et agents',
    n8n: "Nœuds IA et agents natifs, les plus complets des trois : extraction, classification, agents outillés, corpus",
    make: "Modules IA solides pour insérer des étapes intelligentes dans les scénarios",
    zapier: "Étapes IA et agents simples, suffisants pour les premiers cas",
  },
  {
    critere: 'Le bon choix quand',
    n8n: "Processus complexes, données sensibles, volumétrie, agents IA sérieux",
    make: "L'équilibre visuel-puissance pour le marketing et les ops",
    zapier: "Premiers pas, petits volumes, équipes non techniques",
  },
]

/* ───────── Cas d'usage (6 cartes) ───────── */

const CAS_USAGE = [
  { icon: Target, title: 'Qualifier les demandes entrantes', desc: "Un email ou un formulaire arrive : l'étape IA classe, résume, rapproche du dossier existant, et le workflow route vers la bonne personne avec un brouillon prêt." },
  { icon: Eye, title: 'La veille livrée chaque semaine', desc: "Collecter vos sources, écarter le bruit, faire résumer par l'IA, livrer une synthèse dans la messagerie de l'équipe : le workflow type du jour 1." },
  { icon: ListChecks, title: 'Le reporting préparé', desc: "Exports collectés, indicateurs calculés, commentaire pré-rédigé dans votre gabarit : le responsable relit et diffuse, au lieu de compiler." },
  { icon: Layers, title: 'Les dossiers assemblés', desc: "Avant un rendez-vous ou une échéance, le workflow rassemble pièces, historique et synthèse IA dans un document prêt à relire." },
  { icon: Network, title: 'Les applications synchronisées', desc: "CRM, facturation, tableurs : les doubles saisies disparaissent, avec des règles écrites sur qui fait foi en cas de conflit." },
  { icon: Bot, title: "L'agent de tri sous contrôle", desc: "Un agent n8n traite une boîte générique : il prépare réponses et classements, un humain valide ce qui engage. Le garde-fou est dans le workflow." },
]

/* ───────── Les pièges (5 cartes) ───────── */

const PIEGES = [
  {
    title: 'Le workflow-spaghetti',
    desc: "Quarante nœuds sans structure, illisibles trois semaines plus tard. La parade s'apprend au jour 2 : sous-workflows, conventions de nommage, documentation légère.",
  },
  {
    title: 'Les credentials partagés à la va-vite',
    desc: "Un compte personnel branché partout, et l'automatisation meurt au premier départ. Les accès se posent proprement dès le jour 1 : nominatifs, périmétrés, révocables.",
  },
  {
    title: "L'échec silencieux",
    desc: "Sans gestion d'erreurs, un workflow qui casse ne prévient personne, et l'équipe découvre le trou des semaines plus tard. Chaque workflow de la formation sort avec ses alertes.",
  },
  {
    title: "L'IA sans garde-fou",
    desc: "Une étape IA qui envoie ou modifie sans validation finira par le faire de travers. Ce qui engage passe par un humain : c'est une règle de conception, posée dans le flux lui-même.",
  },
  {
    title: 'Personne ne supervise',
    desc: "Des workflows jamais relus dérivent sans bruit : données qui changent de forme, volumes qui explosent. La supervision (exécutions, alertes, revue) se décide à la conception.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que la formation n8n de Masteria ?",
    a: "Deux jours pour maîtriser n8n en entreprise : comprendre la logique de workflows et de nœuds, connecter vos applications réelles, construire des workflows fiables (gestion d'erreurs comprise), y brancher des étapes IA et des agents sous garde-fous, puis organiser la supervision et la gouvernance. Chaque participant travaille sur un processus réel de son poste et repart avec des workflows en état de marche. La formation est certifiée Qualiopi et finançable par votre OPCO.",
  },
  {
    q: "C'est quoi n8n, exactement ?",
    a: "n8n est un outil d'automatisation de workflows édité à Berlin : on y assemble visuellement des nœuds (déclencheurs, applications, transformations, étapes IA) pour automatiser des processus entre vos outils. Sa particularité dans le paysage : il est auto-hébergeable sur vos propres serveurs, sa version communautaire auto-hébergée est gratuite, et ses nœuds IA et agents sont parmi les plus complets du marché. C'est l'outil que nous recommandons le plus souvent pour les processus complexes et les données sensibles.",
  },
  {
    q: 'Faut-il savoir coder pour suivre la formation n8n ?',
    a: "Non. n8n se pratique en low-code : l'essentiel se construit visuellement, nœud par nœud. Il faut être à l'aise avec ses outils numériques et ne pas craindre la logique (conditions, boucles, structures de données simples) ; c'est le profil type d'un référent IA, d'un ops ou d'un power user métier. Le nœud Code existe pour aller plus loin, il est montré en option et jamais requis. Les développeurs qui veulent pousser l'outil y trouvent aussi leur compte, le cadrage ajuste le niveau.",
  },
  {
    q: 'n8n, Make ou Zapier : lequel choisir ?',
    a: "n8n quand les processus sont complexes, les données sensibles (auto-hébergement européen) ou les volumes importants, et quand vous voulez des agents IA sérieux. Make pour l'équilibre entre puissance et prise en main visuelle, très apprécié des équipes marketing et ops. Zapier pour démarrer simplement sur de petits volumes. Le tableau comparatif de cette page détaille les critères ; et si votre choix est déjà fait pour Make ou Zapier, chacun a sa formation dédiée.",
  },
  {
    q: "L'auto-hébergement de n8n est-il un vrai avantage RGPD ?",
    a: "Oui, et c'est souvent décisif : auto-hébergé sur vos serveurs ou chez votre hébergeur européen, n8n fait transiter les données de vos workflows chez vous, pas chez un tiers. Cela ne dispense pas du travail RGPD (minimisation, accès, durées de conservation, registre), que la formation traite concrètement en s'appuyant sur les recommandations de la CNIL, mais cela simplifie nettement le dossier pour les secteurs sensibles. La version cloud de n8n reste une option légitime quand l'auto-hébergement n'est pas justifié.",
  },
  {
    q: 'Peut-on vraiment construire des agents IA dans n8n ?',
    a: "Oui : n8n propose des nœuds d'agents auxquels on donne un objectif, des outils (lire une boîte mail, chercher dans un corpus, écrire dans un tableau) et des limites. La formation y consacre la matinée du jour 2, avec la règle que nous appliquons partout : l'agent prépare, l'humain valide ce qui engage. Pour concevoir des agents dans vos outils bureautiques (ChatGPT, Claude, Copilot, Gemini) plutôt que dans l'orchestrateur, c'est la formation agents IA qui couvre le sujet.",
  },
  {
    q: 'Combien de temps pour un premier workflow utile ?',
    a: "En formation, chaque participant a un workflow réel qui tourne à la fin du jour 1 : une tâche répétitive de son poste, automatisée de bout en bout, souvent avec une étape IA. Le jour 2 le rend robuste (gestion d'erreurs, garde-fous, supervision), ce qui est la vraie différence entre une démo et une automatisation qui dure. Comptez ensuite quelques semaines de pratique pour que l'équipe enchaîne en autonomie sur son plan d'automatisation.",
  },
  {
    q: 'La formation n8n est-elle finançable par notre OPCO ?',
    a: "Oui : Masteria est certifiée Qualiopi, condition pour mobiliser votre OPCO dans le cadre du plan de développement des compétences. Nous préparons le dossier avec vous (programme détaillé, objectifs, modalités d'évaluation) ; la décision et le niveau de prise en charge appartiennent à votre opérateur. Pas d'éligibilité CPF : c'est une formation d'équipe, qui relève du budget formation de l'entreprise.",
  },
  {
    q: 'Peut-on suivre la formation à distance ?',
    a: "Oui. Le format de référence est l'intra dans vos locaux, jusqu'à 12 participants ; le même programme se tient à distance en classe virtuelle, souvent en demi-journées, ce qui convient bien à n8n (chacun garde son environnement sous les yeux). En individuel, un référent avance en tête-à-tête sur ses propres processus. Partout en France, en Suisse et en Belgique.",
  },
  {
    q: "Que reste-t-il dans l'entreprise après les 2 jours ?",
    a: "Les workflows construits en atelier, en état de marche et documentés ; les conventions d'équipe (nommage, structure, sous-workflows) ; la gestion d'erreurs et les alertes posées ; les règles écrites sur les données, les credentials et la validation humaine ; et le plan d'automatisation de l'équipe : les trois processus suivants, qui les porte, à quelle échéance.",
  },
  {
    q: "Comment installe-t-on n8n : cloud, Docker ou hébergeur ?",
    a: "Trois voies : le cloud n8n, le plus rapide pour démarrer ; l'auto-hébergement sur vos serveurs, le plus souvent via Docker, pour garder les données chez vous ; ou un prestataire européen qui opère n8n pour votre compte. La formation démarre sur l'environnement retenu au cadrage ; quand la question n'est pas tranchée, la première matinée pose les critères (données, volumes, compétences internes). L'installation elle-même relève de votre IT ou de notre agence, pas des deux jours de formation.",
  },
  {
    q: "n8n est en anglais : est-ce un obstacle pour mes équipes ?",
    a: "L'interface de n8n est en anglais, comme la plupart des orchestrateurs. En pratique, ce n'est pas un obstacle : le vocabulaire utile tient en une vingtaine de termes (workflow, node, trigger, credential, execution), que la formation installe dès la première heure, en français, avec le lexique de cette page. Les ateliers, les supports et la documentation d'équipe que vous construisez sont intégralement en français.",
  },
  {
    q: 'Et si nous préférons faire construire nos workflows n8n ?',
    a: "C'est une mission, pas une formation : notre agence d'automatisation IA conçoit, construit et maintient des workflows n8n ou Make pour vous, avec la même exigence de supervision et de garde-fous. Les deux se combinent bien : les équipes formées cadrent mieux le besoin et supervisent mieux ce qu'on leur livre. Le cadrage, gratuit, oriente vers la bonne formule.",
  },
  {
    q: 'Combien coûte la formation n8n ?',
    a: "1 980 € HT par jour de formation en intra, pour l'ensemble du groupe (jusqu'à 12 participants), soit 3 960 € HT les 2 jours. Un format d'une journée centré sur les premiers workflows se cale au cadrage quand le besoin est plus court. Le devis arrive sous 24 heures, dossier OPCO préparé avec vous. Côté licences n8n, la version auto-hébergée communautaire est gratuite et le cloud a ses propres tarifs éditeur, indépendants de la formation.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation n8n — Masteria',
  description: "Formation n8n en 2 jours : logique de workflows et de nœuds, connexion de vos applications, construction de workflows fiables avec gestion d'erreurs, étapes IA et agents sous garde-fous, auto-hébergement et RGPD, supervision et gouvernance. Chaque participant automatise un processus réel de son poste. En intra, présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: "Intermédiaire : à l'aise avec ses outils numériques",
  teaches: [
    "Comprendre la logique n8n : workflows, nœuds, déclencheurs, exécutions, credentials",
    "Construire un workflow fiable de bout en bout sur un processus réel, gestion d'erreurs comprise",
    "Brancher des étapes IA (résumé, extraction, classification) et des agents sous garde-fous",
    "Choisir et cadrer l'hébergement : cloud ou auto-hébergement européen, credentials, RGPD",
    "Superviser et industrialiser : exécutions, alertes, sous-workflows, conventions, gouvernance",
  ],
  about: "n8n (automatisation de workflows et agents IA)",
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: "Être à l'aise avec ses outils numériques ; aucune compétence en programmation requise.",
  audience: 'Référents IA, ops, équipes métier outillées, IT de proximité',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}

/* Le programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation n8n (2 jours)',
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
  '@id': 'https://www.master-ia.fr/formation-n8n#article',
  headline: 'Formation n8n : workflows, IA et agents, sous contrôle',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-n8n#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30. */
  about: [
    { '@type': 'Thing', name: 'n8n', sameAs: 'https://fr.wikipedia.org/wiki/N8n' },
    { '@type': 'Thing', name: 'Automatisation', sameAs: 'https://fr.wikipedia.org/wiki/Automatisation' },
    { '@type': 'Thing', name: 'Flux de travaux', sameAs: 'https://fr.wikipedia.org/wiki/Flux_de_travaux' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

/* ── GEO : lexique n8n (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique n8n',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Workflow', description: "Enchaînement automatisé d'étapes dans n8n, du déclencheur à la sortie : c'est l'unité de travail que l'on construit, teste, supervise et documente." },
    { '@type': 'DefinedTerm', name: 'Nœud', description: "Brique d'un workflow n8n : un déclencheur, une application connectée, une transformation de données, une étape IA ou un agent. Les workflows s'assemblent nœud par nœud, visuellement." },
    { '@type': 'DefinedTerm', name: 'Déclencheur', description: "Le nœud qui lance un workflow : un horaire, un webhook, un email entrant, un changement dans une application. Bien choisir le déclencheur conditionne la fiabilité de l'ensemble." },
    { '@type': 'DefinedTerm', name: 'Credential', description: "Accès enregistré vers une application (compte, clé, autorisation) que les nœuds utilisent. Les credentials se gèrent nominativement et se périmètrent : c'est un sujet de sécurité, traité au jour 1." },
    { '@type': 'DefinedTerm', name: 'Exécution', description: "Une occurrence d'un workflow qui a tourné, avec son détail étape par étape. Le journal des exécutions est l'outil de supervision quotidien : c'est là qu'on voit les échecs et les dérives." },
    { '@type': 'DefinedTerm', name: 'Sous-workflow', description: "Workflow appelé par un autre, pour réutiliser une logique commune (notification, journalisation, contrôle). C'est la parade principale au workflow-spaghetti." },
    { '@type': 'DefinedTerm', name: 'Auto-hébergement', description: "Installation de n8n sur vos propres serveurs ou chez votre hébergeur européen : les données des workflows restent dans votre périmètre. La version communautaire auto-hébergée est gratuite." },
    { '@type': 'DefinedTerm', name: 'Agent IA (n8n)', description: "Nœud qui poursuit un objectif en utilisant des outils (lire, chercher, écrire) dans les limites qu'on lui fixe. Dans nos formations, un agent prépare ; un humain valide ce qui engage." },
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
  { name: "Règlement (UE) 2024/1689 établissant des règles harmonisées concernant l'intelligence artificielle (article 4, littératie)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "Le plan de développement des compétences, ministère du Travail et de l'Emploi", url: 'https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences' },
]

export default function FormationN8nPage() {
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
    { name: 'Formation n8n', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation n8n</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Workflow size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · n8n
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation n8n :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>workflows, IA et agents, sous contrôle</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation n8n apprend à vos équipes à automatiser leurs processus avec n8n, l'outil de workflows auto-hébergeable aux nœuds IA et agents les plus complets du marché. <strong style={{ color: '#fff', fontWeight: 700 }}>En 2 jours, chaque participant construit, fiabilise et supervise un workflow réel de son poste, étapes IA comprises</strong>, avec la gestion d'erreurs, les garde-fous et la gouvernance qui font durer une automatisation. Certifiée Qualiopi, finançable OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            n8n est l'orchestrateur que nous installons le plus souvent après les assistants : assez puissant pour les processus complets, auto-hébergeable en Europe pour les données sensibles, et taillé pour faire travailler l'IA dans le flux, sous validation humaine. La formation vise une seule chose : des workflows qui tournent encore dans six mois.
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

      {/* ── POURQUOI N8N (éditorial asymétrique) ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>L'outil</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi apprendre n8n plutôt qu'un autre outil d'automatisation ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce que n8n cumule quatre atouts rares : des workflows sans plafond de complexité, des nœuds IA et agents natifs, l'auto-hébergement sur vos serveurs européens, et un modèle de coût qui tient à volume. C'est l'outil des automatisations sérieuses, et il s'apprend très bien en deux jours encadrés.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Si vous cherchez d'abord à savoir quoi automatiser, la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> pose le panorama ; cette page suppose que l'outil sera n8n, ou vous aide à le confirmer avec le comparatif ci-dessous.
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

      {/* ── LE PROGRAMME (ancre sombre — pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Le programme des 2 jours : du premier workflow à la supervision
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : comprendre la logique n8n, poser le cadre d'hébergement et de données, connecter vos applications et construire un premier workflow réel avec une étape IA. Jour 2 : les agents sous garde-fous, la gestion d'erreurs systématique, la supervision et la gouvernance. Chaque participant travaille sur un processus de son poste.</strong>
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
            Le programme s'ajuste au cadrage, qui est gratuit : niveau réel des participants, hébergement retenu, processus visés. En 1 jour, on s'arrête aux premiers workflows fiables ; les 2 jours vont jusqu'aux agents, à la supervision et au plan d'automatisation.
          </p>
        </div>
      </section>

      {/* ── COMPARATIF N8N / MAKE / ZAPIER ── */}
      <section id="comparatif" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Bien choisir</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            n8n, Make ou Zapier : le comparatif honnête
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>n8n pour les processus complexes, les données sensibles (auto-hébergement européen) et les agents IA sérieux ; Make pour l'équilibre visuel-puissance des équipes marketing et ops ; Zapier pour démarrer simplement sur de petits volumes. Les trois se forment chez Masteria : le bon outil dépend de vos processus, et le cadrage tranche sur pièces.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Critère</th>
                  <th style={thStyle} scope="col">n8n</th>
                  <th style={thStyle} scope="col">Make</th>
                  <th style={thStyle} scope="col">Zapier</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map((row, i) => (
                  <tr key={row.critere}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === COMPARATIF.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.critere}</td>
                    <td style={{ ...tdStyle, borderBottom: i === COMPARATIF.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.n8n}</td>
                    <td style={{ ...tdStyle, borderBottom: i === COMPARATIF.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.make}</td>
                    <td style={{ ...tdStyle, borderBottom: i === COMPARATIF.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.zapier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '24px 0 0', maxWidth: 880 }}>
            Votre choix est déjà fait pour un autre outil ? Les pages <Link to="/formation-make" style={aStyle}>formation Make</Link> et <Link to="/formation-zapier" style={aStyle}>formation Zapier</Link> détaillent leurs programmes respectifs, et les trois formations partagent la même exigence : gestion d'erreurs, garde-fous IA, supervision.
          </p>
        </div>
      </section>

      {/* ── CAS D'USAGE ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ce qu'on automatise</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que vos équipes construisent en atelier avec n8n
          </h2>

          <p style={answerStyle}>
            <strong>Les ateliers partent des processus réels de vos équipes. Six familles reviennent le plus souvent : la qualification des demandes entrantes, la veille livrée, le reporting préparé, les dossiers assemblés, les synchronisations entre applications et les agents de tri sous validation humaine.</strong>
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
            Cinq pièges qui tuent les déploiements n8n
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Un déploiement n8n qui meurt a presque toujours l'une de ces cinq causes : le workflow-spaghetti, les credentials bricolés, l'échec silencieux, l'étape IA sans garde-fou, l'absence de supervision. La formation traite chacun à l'endroit du programme où il se joue.</strong>
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
            Cette exigence vient de nos missions de construction : les workflows que nous livrons en <Link to="/agence-automatisation-ia" style={{ color: c, fontWeight: 600 }}>agence d'automatisation</Link> vivent avec ces règles, et la formation transmet exactement les mêmes.
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
                La formation n8n suit la grille unique de Masteria : 1 980 € HT par jour en intra, pour l'ensemble du groupe (jusqu'à 12 participants), soit 3 960 € HT les 2 jours ; le format d'une journée « premiers workflows » se cale au cadrage. Masteria est certifiée Qualiopi : la formation est finançable par votre OPCO dans le cadre du plan de développement des compétences, nous préparons le dossier avec vous et la décision de prise en charge reste à votre opérateur. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes, et les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  "1 980 € HT par jour, pour le groupe (jusqu'à 12 personnes)",
                  '2 jours recommandés : agents, supervision et plan compris',
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
                Des formateurs qui construisent des workflows en mission
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria est un cabinet indépendant des éditeurs, spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022. L'orchestration n8n et Make est le palier que nous installons après les assistants dans nos déploiements ; les règles enseignées (gestion d'erreurs, garde-fous IA, supervision) sont celles de nos propres <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>missions</Link>. Les sessions sont animées par Mathias Nizan et un réseau de formateurs indépendants, expérimentés et pédagogues.
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
            Parler n8n couramment : les huit termes à connaître
          </h2>
          <p style={answerStyle}>
            <strong>Huit termes suffisent pour suivre une conversation n8n et lire sa documentation : workflow, nœud, déclencheur, credential, exécution, sous-workflow, auto-hébergement, agent. La formation les installe dès la première heure, en français ; les voici tels que nous les enseignons.</strong>
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
                Formation n8n : les questions fréquentes
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
            n8n s'articule avec la démarche d'automatisation, les agents dans vos outils bureau et, quand il faut du sur-mesure, nos missions de construction.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Panorama', desc: "Quoi automatiser et comment s'y prendre : la démarche complète, des outils natifs aux orchestrateurs." },
              { label: 'Formation agents IA', href: '/formation-agents-ia', tag: 'Agents', desc: "Concevoir des agents dans vos outils bureau (ChatGPT, Claude, Copilot, Gemini), complément naturel de n8n." },
              { label: 'Formation Make', href: '/formation-make', tag: 'Outil', desc: "L'alternative visuelle : scénarios, modules et étapes IA, le favori des équipes marketing et ops." },
              { label: 'Formation Zapier', href: '/formation-zapier', tag: 'Outil', desc: "La porte d'entrée de l'automatisation : des Zaps utiles en une journée, et les limites à connaître." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Faire construire', desc: "Vos workflows n8n ou Make conçus, construits et maintenus en mission, avec la même exigence." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, plan de développement des compétences : les dispositifs qui financent la formation n8n." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation n8n</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Des workflows qui tournent encore dans six mois
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous vos processus répétitifs, vos applications et le niveau de vos équipes. Nous revenons sous 24 heures avec un programme cadré, la question de l'hébergement posée, et le devis, dossier OPCO compris.
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
