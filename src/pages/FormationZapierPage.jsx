import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, MapPin, Network, Target, Workflow, Zap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation zapier » (slug /formation-zapier), côté FORMATION.
 * Cible (Semrush fr, 2026-08-28) : « formation zapier » (140/mois, KD 12).
 *
 * ANTI-CANNIBALISATION : le comparatif complet n8n/Make/Zapier vit sur
 * /formation-n8n ; CETTE page porte un tableau DIVERGENT et honnête
 * « Zapier suffit / passez à Make ou n8n ». 1 jour (l'outil est le plus
 * simple des trois, la journée est le bon format).
 *
 * INTÉGRITÉ : faits sobres (pionnier du secteur, éditeur américain, Zaps,
 * facturation à la tâche, « le plus grand catalogue d'applications du
 * marché » sans compte précis, étapes IA et agents en formulation prudente).
 * RGPD traité honnêtement (cloud US, transferts à cadrer).
 */

const SLUG = 'formation-zapier'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation Zapier : automatiser sans coder | Masteria'
const META_DESC = "Formation Zapier en 1 jour : construire des Zaps utiles et fiables, ajouter des étapes IA, connaître les limites et le cadre RGPD. Qualiopi, finançable OPCO."
const KEYWORDS = "formation zapier, apprendre zapier, formation zapier français, zapier sans coder, formation zapier entreprise"

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
  { icon: Zap, label: 'Sans code : des Zaps utiles dès le matin' },
  { icon: Building2, label: '1 jour en intra, dans vos locaux ou à distance' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "1 jour (7 h) en intra ; extension possible vers Make ou n8n quand les besoins grandissent" },
  { label: 'Pour qui', value: "Équipes non techniques : assistanat, marketing, RH, ADV, petites structures ; aucun prérequis" },
  { label: 'Outil', value: "Zapier, connecté aux applications réelles de vos équipes (le plus grand catalogue du marché)" },
  { label: 'Méthode', value: "Chaque participant construit et teste plusieurs Zaps réels de son poste, dont un avec une étape IA" },
  { label: 'Livrables', value: "Zaps en état de marche, check-list de fiabilité, règles d'usage écrites, liste des automatisations suivantes" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable OPCO ; devis sous 24 h" },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#pourquoi', 'Pourquoi Zapier'],
  ['#programme', 'Programme de la journée'],
  ['#limites', 'Zapier suffit-il ?'],
  ['#cas-usage', "Cas d'usage"],
  ['#tarif', 'Tarif'],
  ['#lexique', 'Lexique'],
  ['#faq', 'FAQ'],
]

/* ───────── Pourquoi Zapier (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Zap,
    title: 'Le plus simple du marché',
    desc: "Un Zap se monte en quelques minutes : un déclencheur, une ou plusieurs actions. C'est l'outil qui met l'automatisation à la portée d'équipes qui n'ouvriront jamais un orchestrateur technique.",
  },
  {
    icon: Network,
    title: 'Le plus grand catalogue',
    desc: "Zapier, pionnier du secteur, connecte des milliers d'applications, y compris beaucoup d'outils de niche absents ailleurs. Si vos applications sont peu courantes, c'est souvent lui qui les couvre.",
  },
  {
    icon: Bot,
    title: "Des étapes IA accessibles",
    desc: "Résumer, classer, rédiger un brouillon : les étapes IA s'ajoutent à un Zap simplement, et suffisent pour les premiers cas d'usage. La formation les cadre : format de sortie imposé, relecture humaine sur ce qui engage.",
  },
  {
    icon: Target,
    title: 'Le bon outil pour commencer',
    desc: "Petits volumes, besoins simples, équipes non techniques : Zapier rend service tout de suite. Et quand les besoins grandissent, la formation vous donne les critères pour passer à Make ou n8n au bon moment, sans tout jeter.",
  },
]

/* ───────── Programme 1 jour (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'La journée',
    titre: 'Des premiers Zaps aux bonnes pratiques',
    resume: "Chaque participant repart avec plusieurs Zaps réels en état de marche, dont un avec une étape IA.",
    matin: [
      { t: 'Zapier démontré en direct', d: "Zaps, déclencheurs, actions, tâches : la logique de l'outil montrée sur des cas concrets avant de toucher au clavier." },
      { t: 'Connecter vos applications', d: "Messagerie, tableurs, formulaires, CRM : brancher les applications réelles de l'équipe avec des accès propres, et les webhooks pour les outils absents du catalogue." },
      { t: 'Le premier Zap utile', d: "Un déclencheur, une action, un test : chaque participant automatise une vraie petite tâche de son poste avant la pause." },
      { t: 'Filtres, chemins et multi-étapes', d: "Ne déclencher que dans les bons cas, séparer les situations, enchaîner plusieurs actions : le Zap qui traite la réalité, pas la démo." },
      { t: 'Formatter : nettoyer les données', d: "Dates, textes, nombres : les transformations qui évitent 80 % des Zaps cassés." },
    ],
    apresmidi: [
      { t: "Ajouter une étape IA", d: "Résumer un message entrant, classer une demande, préparer un brouillon de réponse : l'IA dans un Zap, avec un format de sortie imposé." },
      { t: 'Fiabiliser ses Zaps', d: "Historique des tâches, alertes en cas d'échec, cas limites : la check-list qui différencie un Zap fiable d'un Zap oublié." },
      { t: 'Le cadre : données et RGPD', d: "Zapier est un service cloud américain : quelles données peuvent y transiter, lesquelles restent hors champ, ce qu'on écrit dans les règles d'usage." },
      { t: 'Les limites, honnêtement', d: "Volumes, complexité, coût à la tâche : les signaux qui indiquent qu'il est temps de passer à Make ou n8n, et comment migrer proprement." },
      { t: "Plan d'action de l'équipe", d: "Les automatisations suivantes, qui les porte, à quelle échéance ; chaque participant repart avec ses Zaps et sa liste." },
    ],
  },
]

/* ───────── Zapier suffit / passez à autre chose (tableau divergent) ───────── */

const LIMITES_TABLE = [
  {
    situation: "Automatiser des tâches simples entre deux ou trois applications",
    verdict: 'Zapier suffit',
    detail: "Formulaires vers tableur, alertes, sauvegardes, accusés de réception : le terrain naturel des Zaps, opérationnel en une journée.",
  },
  {
    situation: "Quelques dizaines d'exécutions par jour, petite équipe",
    verdict: 'Zapier suffit',
    detail: "À petit volume, la facturation à la tâche reste raisonnable et la simplicité l'emporte sur tout le reste.",
  },
  {
    situation: "Des processus à branches multiples, des transformations lourdes",
    verdict: 'Passez à Make',
    detail: "Routeurs, itérateurs, data stores : le canevas visuel de Make encaisse la complexité que les Zaps commencent à subir.",
  },
  {
    situation: "Gros volumes quotidiens, coût à la tâche qui s'envole",
    verdict: 'Passez à Make ou n8n',
    detail: "La facturation à la tâche de Zapier monte vite à volume ; Make (à l'opération) puis n8n (à l'exécution) reprennent l'avantage.",
  },
  {
    situation: "Données sensibles qui ne doivent pas quitter votre périmètre",
    verdict: 'Passez à n8n',
    detail: "n8n s'auto-héberge sur vos serveurs européens : pour les secteurs réglementés, c'est l'argument décisif.",
  },
  {
    situation: "Des agents IA qui enchaînent plusieurs outils avec garde-fous avancés",
    verdict: 'Passez à n8n',
    detail: "Les nœuds agents de n8n sont les plus complets ; Zapier couvre les premiers cas, pas les orchestrations sérieuses.",
  },
]

/* ───────── Cas d'usage (6 cartes) ───────── */

const CAS_USAGE = [
  { icon: ListChecks, title: 'Formulaires vers tableur et CRM', desc: "Chaque réponse de formulaire crée sa ligne, son contact, sa notification : plus de copier-coller, plus d'oubli." },
  { icon: Eye, title: 'Les alertes qui comptent', desc: "Un avis client, un paiement, un email important : l'équipe est prévenue au bon endroit, avec un résumé IA du contexte." },
  { icon: Layers, title: 'Pièces jointes rangées', desc: "Les documents reçus se sauvegardent au bon endroit, nommés proprement, sans intervention." },
  { icon: Target, title: 'Les tâches créées toutes seules', desc: "Un email ou un événement déclenche la tâche dans votre outil de gestion, assignée, datée, avec le contexte." },
  { icon: Bot, title: "L'accusé de réception intelligent", desc: "Une demande entrante reçoit une première réponse propre, préparée par l'IA dans votre gabarit, relue quand elle engage." },
  { icon: Workflow, title: 'Le mini-reporting périodique', desc: "Chaque semaine, les chiffres clés se rassemblent dans un message d'équipe : simple, régulier, sans réunion." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce que la formation Zapier de Masteria ?",
    a: "Une journée pour rendre vos équipes autonomes sur Zapier : comprendre la logique des Zaps, connecter vos applications réelles, construire des automatisations utiles et fiables (filtres, chemins, multi-étapes, Formatter), ajouter une étape IA cadrée, et connaître honnêtement les limites de l'outil. Chaque participant repart avec plusieurs Zaps réels en état de marche. La formation est certifiée Qualiopi et finançable par votre OPCO.",
  },
  {
    q: "C'est quoi, un Zap ?",
    a: "Un Zap est une automatisation Zapier : un déclencheur (une réponse de formulaire arrive, un email est reçu, une ligne est ajoutée) suivi d'une ou plusieurs actions (créer un contact, envoyer une notification, sauvegarder un document). Chaque exécution d'une étape s'appelle une tâche, et c'est l'unité de facturation de Zapier ; la formation apprend aussi à lire cette consommation.",
  },
  {
    q: 'Faut-il des compétences techniques pour suivre la formation Zapier ?',
    a: "Aucune, et c'est le public visé : Zapier est l'outil d'automatisation le plus simple du marché, conçu pour les équipes non techniques. Il faut savoir utiliser ses applications du quotidien (messagerie, tableur, formulaires), rien de plus. C'est la formation que nous recommandons aux assistants, aux petites équipes marketing ou RH et aux TPE qui veulent des résultats le jour même.",
  },
  {
    q: 'Zapier, Make ou n8n : comment choisir ?',
    a: "Zapier pour démarrer simplement sur de petits volumes, avec le plus grand catalogue d'applications du marché. Make quand les processus se complexifient (branches, transformations, volumes moyens). n8n pour les processus lourds, les données sensibles (auto-hébergement européen) et les agents IA avancés. Le tableau de cette page donne les situations concrètes, et le comparatif complet des trois est sur la page formation n8n.",
  },
  {
    q: "Peut-on utiliser l'IA dans Zapier ?",
    a: "Oui : des étapes IA s'ajoutent aux Zaps pour résumer un message, classer une demande ou préparer un brouillon de réponse, et Zapier propose aussi des agents pour les cas simples. L'écosystème complète le tout : Tables pour stocker des données, Interfaces pour créer de petits formulaires, sans changer d'outil. La formation met tout cela en place avec le cadre que nous appliquons partout : format de sortie imposé, et relecture humaine sur tout ce qui engage l'entreprise. Pour des agents qui enchaînent plusieurs outils avec des garde-fous avancés, n8n est l'étape d'après.",
  },
  {
    q: 'Quel cadre RGPD pour des Zaps ?',
    a: "Zapier est un service cloud d'un éditeur américain : les données de vos Zaps y transitent, ce qui impose de cadrer les transferts hors Union européenne (garanties contractuelles, minimisation des données, registre). La formation traite le sujet sans langue de bois, en s'appuyant sur les recommandations de la CNIL : quelles données peuvent passer dans un Zap, lesquelles restent hors champ, et quand la question fait basculer vers n8n auto-hébergé.",
  },
  {
    q: 'Que construit-on concrètement pendant la journée ?',
    a: "Des Zaps réels, sur les tâches de chaque participant : formulaires vers tableur et CRM, alertes triées, pièces jointes rangées, tâches créées automatiquement, accusés de réception préparés par l'IA, mini-reporting d'équipe. L'après-midi fiabilise (historique, alertes d'échec, cas limites) et pose les règles d'usage écrites de l'équipe.",
  },
  {
    q: 'La formation Zapier est-elle finançable par notre OPCO ?',
    a: "Oui : Masteria est certifiée Qualiopi, condition pour mobiliser votre OPCO dans le cadre du plan de développement des compétences. Nous préparons le dossier avec vous ; la décision et le niveau de prise en charge appartiennent à votre opérateur. Pas d'éligibilité CPF : c'est une formation d'équipe, qui relève du budget formation de l'entreprise.",
  },
  {
    q: 'Peut-on suivre la formation à distance ?',
    a: "Oui. Le format de référence est l'intra dans vos locaux, jusqu'à 12 participants ; la même journée se tient à distance en classe virtuelle, souvent en deux demi-journées. Partout en France, en Suisse et en Belgique.",
  },
  {
    q: 'Et si Zapier ne suffit plus dans six mois ?',
    a: "C'est un scénario prévu, pas un échec : la formation vous donne les signaux qui indiquent le bon moment (volumes, complexité, coût à la tâche, données sensibles) et la façon de migrer proprement vers Make ou n8n, qui ont chacun leur formation dédiée. Ce que vous apprenez avec Zapier (penser en déclencheurs et actions, fiabiliser, cadrer les données) se transfère intégralement.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation Zapier — Masteria',
  description: "Formation Zapier en 1 jour : logique des Zaps, connexion de vos applications, filtres, chemins et multi-étapes, Formatter, étape IA cadrée, fiabilisation (historique, alertes), cadre RGPD, limites honnêtes et critères de passage vers Make ou n8n. Chaque participant repart avec plusieurs Zaps réels en état de marche. En intra, présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Débutant, aucun prérequis technique',
  teaches: [
    "Comprendre la logique Zapier : Zaps, déclencheurs, actions, tâches",
    "Construire des Zaps utiles et fiables : filtres, chemins, multi-étapes, Formatter",
    "Ajouter une étape IA cadrée : format de sortie imposé, relecture humaine",
    "Fiabiliser : historique des tâches, alertes d'échec, cas limites",
    "Connaître les limites et les critères de passage vers Make ou n8n",
  ],
  about: "Zapier (automatisation sans code)",
  timeRequired: 'PT7H',
  duration: 'PT7H',
  prerequisites: "Aucun prérequis technique.",
  audience: 'Assistanat, marketing, RH, ADV, TPE et PME, équipes non techniques',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}

/* Le programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation Zapier (1 jour)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    { '@type': 'ListItem', position: di * 2 + 1, name: `Matin — ${day.titre}`, description: day.matin.map(m => m.t).join(' ; ') },
    { '@type': 'ListItem', position: di * 2 + 2, name: `Après-midi — ${day.titre}`, description: day.apresmidi.map(m => m.t).join(' ; ') },
  ]),
}

/* Article : auteur, dates, entités (E-E-A-T + GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-zapier#article',
  headline: 'Formation Zapier : automatiser les tâches répétitives, sans coder',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-zapier#webpage' },
  /* Entités Wikipédia vérifiées (curl 200) le 2026-08-30. */
  about: [
    { '@type': 'Thing', name: 'Zapier', sameAs: 'https://fr.wikipedia.org/wiki/Zapier' },
    { '@type': 'Thing', name: 'Automatisation', sameAs: 'https://fr.wikipedia.org/wiki/Automatisation' },
    { '@type': 'Thing', name: 'Interface de programmation', sameAs: 'https://fr.wikipedia.org/wiki/Interface_de_programmation' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
  ],
}

/* ── GEO : lexique Zapier (DefinedTermSet) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Lexique Zapier',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Zap', description: "Automatisation Zapier : un déclencheur suivi d'une ou plusieurs actions. C'est l'unité que l'on construit, teste et supervise." },
    { '@type': 'DefinedTerm', name: 'Déclencheur', description: "L'événement qui lance un Zap : réponse de formulaire, email reçu, ligne ajoutée, horaire. Bien le choisir évite les déclenchements parasites." },
    { '@type': 'DefinedTerm', name: 'Action', description: "Ce que le Zap fait : créer, envoyer, sauvegarder, notifier. Un Zap multi-étapes enchaîne plusieurs actions." },
    { '@type': 'DefinedTerm', name: 'Tâche', description: "Exécution d'une action : l'unité de facturation de Zapier. À volume croissant, ce modèle devient le premier critère de passage vers Make ou n8n." },
    { '@type': 'DefinedTerm', name: 'Filtre et chemin', description: "Le filtre ne laisse passer que les bons cas ; les chemins séparent les situations. Les deux transforment une démo en automatisation qui traite la réalité." },
    { '@type': 'DefinedTerm', name: 'Formatter', description: "Les transformations intégrées de Zapier (dates, textes, nombres) : le nettoyage de données qui évite la plupart des Zaps cassés." },
    { '@type': 'DefinedTerm', name: 'Étape IA', description: "Étape qui mobilise un modèle d'IA dans un Zap : résumer, classer, rédiger. Chez Masteria, toujours avec un format de sortie imposé et une relecture humaine sur ce qui engage." },
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

export default function FormationZapierPage() {
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
    { name: 'Formation Zapier', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation Zapier</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Zapier
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation Zapier :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>automatiser les tâches répétitives, sans coder</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en août 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation Zapier apprend à vos équipes à automatiser leurs tâches répétitives avec l'outil le plus simple du marché. <strong style={{ color: '#fff', fontWeight: 700 }}>En 1 jour, chaque participant construit plusieurs Zaps réels de son poste, dont un avec une étape IA</strong>, apprend à les fiabiliser, et repart en connaissant honnêtement les limites de l'outil et le bon moment pour passer à Make ou n8n. Certifiée Qualiopi, finançable OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Zapier est la porte d'entrée idéale de l'automatisation : des résultats le jour même, aucune compétence technique requise, le plus grand catalogue d'applications du marché. Une journée bien menée suffit pour installer les réflexes, et pour savoir jusqu'où l'outil vous portera.
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

      {/* ── POURQUOI ZAPIER ── */}
      <section id="pourquoi" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>L'outil</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi Zapier est la meilleure porte d'entrée de l'automatisation
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Parce qu'aucun autre outil ne met une automatisation utile entre les mains d'une équipe non technique aussi vite : un Zap se monte en minutes, le catalogue couvre des milliers d'applications, et les étapes IA suffisent aux premiers cas. La journée de formation installe les réflexes, et la lucidité sur les limites.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Pour situer Zapier face à ses alternatives plus puissantes, le comparatif complet est sur la page <Link to="/formation-n8n" style={aStyle}>formation n8n</Link> ; la <Link to="/formation-make" style={aStyle}>formation Make</Link> couvre l'étape intermédiaire.
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
            Le programme de la journée : des Zaps utiles dès le matin
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le matin : la logique des Zaps, vos applications connectées, un premier Zap réel avant la pause, puis filtres, chemins et nettoyage de données. L'après-midi : une étape IA cadrée, la fiabilisation, le cadre RGPD, les limites honnêtes et le plan d'action de l'équipe.</strong>
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
            Le programme s'ajuste au cadrage, qui est gratuit : applications en place, tâches répétitives visées, niveau des participants. Quand l'équipe vise des processus plus lourds, le cadrage oriente directement vers la formation Make ou n8n.
          </p>
        </div>
      </section>

      {/* ── ZAPIER SUFFIT-IL (tableau divergent) ── */}
      <section id="limites" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Lucidité</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Zapier suffit-il, ou faut-il passer à Make ou n8n ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Zapier suffit pour les tâches simples à petit volume, et c'est déjà beaucoup. Les signaux de bascule sont connus : branches multiples, gros volumes, coût à la tâche qui grimpe, données sensibles. Le tableau donne les situations concrètes ; la formation vous apprend à les reconnaître avant qu'elles coûtent.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Votre situation</th>
                  <th style={thStyle} scope="col">Verdict</th>
                  <th style={thStyle} scope="col">Pourquoi</th>
                </tr>
              </thead>
              <tbody>
                {LIMITES_TABLE.map((row, i) => (
                  <tr key={row.situation}>
                    <td style={{ ...tdStyle, borderBottom: i === LIMITES_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.situation}</td>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === LIMITES_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.verdict}</td>
                    <td style={{ ...tdStyle, borderBottom: i === LIMITES_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '24px 0 0', maxWidth: 880 }}>
            Ce réalisme est volontaire : recommander Zapier partout serait aussi faux que le déconseiller partout. Les pages <Link to="/formation-make" style={aStyle}>formation Make</Link> et <Link to="/formation-n8n" style={aStyle}>formation n8n</Link> prennent le relais quand vos besoins les appellent.
          </p>
        </div>
      </section>

      {/* ── CAS D'USAGE ── */}
      <section id="cas-usage" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ce qu'on automatise</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Ce que vos équipes construisent pendant la journée
          </h2>

          <p style={answerStyle}>
            <strong>Les ateliers partent des tâches réelles de chaque participant. Six familles reviennent le plus souvent : formulaires vers tableur et CRM, alertes triées, pièces jointes rangées, tâches créées automatiquement, accusés de réception préparés par l'IA, mini-reporting d'équipe.</strong>
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
                1 980 € HT la journée, pour le groupe
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La formation Zapier suit la grille unique de Masteria : 1 980 € HT la journée en intra, pour l'ensemble du groupe (jusqu'à 12 participants). Masteria est certifiée Qualiopi : la formation est finançable par votre OPCO dans le cadre du plan de développement des compétences, nous préparons le dossier avec vous et la décision reste à votre opérateur. Pas d'éligibilité CPF. Pour identifier votre opérateur, notre outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> répond en deux minutes, et les dispositifs sont détaillés sur la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  "1 980 € HT la journée, pour le groupe (jusqu'à 12 personnes)",
                  'Des Zaps réels en état de marche dès le soir',
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
                Des formateurs qui automatisent en mission, tous outils confondus
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, est indépendante des éditeurs. Nous pratiquons Zapier, Make et n8n en <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>mission</Link> : c'est ce qui permet de vous dire honnêtement ce que chaque outil couvre, et quand en changer. Les sessions sont animées par Mathias Nizan et un réseau de formateurs indépendants, expérimentés et pédagogues.
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
            Parler Zapier couramment : les sept termes à connaître
          </h2>
          <p style={answerStyle}>
            <strong>Sept termes suffisent pour suivre une conversation Zapier et lire sa documentation : Zap, déclencheur, action, tâche, filtre et chemin, Formatter, étape IA. La formation les installe dès la première heure ; les voici tels que nous les enseignons.</strong>
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
                Formation Zapier : les questions fréquentes
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
            Zapier est la première marche : la démarche d'automatisation, les orchestrateurs plus puissants et les agents IA prennent le relais quand vos besoins grandissent.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Panorama', desc: "Quoi automatiser et comment s'y prendre : la démarche complète, des outils natifs aux orchestrateurs." },
              { label: 'Formation Make', href: '/formation-make', tag: 'Outil', desc: "L'étape d'après : scénarios visuels, routeurs, data stores, le point d'équilibre du marché." },
              { label: 'Formation n8n', href: '/formation-n8n', tag: 'Outil', desc: "L'orchestrateur auto-hébergeable aux agents IA les plus complets, et le comparatif des trois outils." },
              { label: 'Formation agents IA', href: '/formation-agents-ia', tag: 'Agents', desc: "Concevoir des agents dans vos outils bureau (ChatGPT, Claude, Copilot, Gemini)." },
              { label: "Agence d'automatisation IA", href: '/agence-automatisation-ia', tag: 'Faire construire', desc: "Vos automatisations conçues, construites et maintenues en mission, quel que soit l'outil." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "OPCO, plan de développement des compétences : les dispositifs qui financent la formation Zapier." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation Zapier</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Vos premières automatisations tournent ce soir
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous les tâches répétitives de vos équipes et vos applications. Nous revenons sous 24 heures avec un programme cadré et le devis, dossier OPCO compris.
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
