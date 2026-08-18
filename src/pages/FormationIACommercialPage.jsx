import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Briefcase, Search, CalendarCheck, FileText, RefreshCw, Database, Handshake,
  GraduationCap, MapPin, Check, ShieldCheck, Sparkles, Landmark, Users, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation IA commercial » (slug /formation-ia-commercial).
 * REFONTE 2026-08-10 : sort du template MetierPage (générique 13 métiers) pour
 * une page au patron des money pages du jour. Cible « formation ia commercial »
 * (260/mois, KD 11, intention I — Semrush 2026-08-10) ; SERP FR tenue par
 * Kedge, Orsys (751 mots), Certalis, Lefebvre Dalloz, ISM, Halifax.
 *
 * ANTI-CANNIBALISATION : les spokes par outil (/formation-chatgpt-commercial,
 * /formation-copilot-commercial, -claude, -gemini, -mistral) tiennent la tête
 * « formation <outil> commercial » ; CETTE page tient « formation ia
 * commercial » (multi-outils) et renvoie vers eux. /agent-commercial-ia tient
 * l'intention SOLUTION (agent IA à développer), pas formation.
 *
 * INTÉGRITÉ (ligne maison) : posture capacité, aucun cas client nommé, pas de
 * chiffre de gain inventé (les « x3 » du template ont été retirés) ; tarif
 * porté par le schema Course via courseData (parité 1 980 €/jour, mémoire
 * tarifs) ; multi-outils, indépendance éditeurs ; Qualiopi/OPCO visibles
 * (formation) ; jamais de CPF ; programme en journées Matin/Après-midi
 * (mémoire programme 2 colonnes) ; RGPD et charte explicites.
 */

const SLUG = 'formation-ia-commercial'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA commercial : prospection, propositions, RDV | Masteria"
const META_DESC = "Formation IA commercial sur vos vrais comptes : prospection, préparation de RDV, propositions, relances, CRM. ChatGPT, Copilot, Claude, Gemini, Mistral. Qualiopi, finançable OPCO."
const KEYWORDS = "formation ia commercial, formation ia commerciaux, formation intelligence artificielle vente, formation ia pour équipe commerciale, formation ia prospection"

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
  { icon: Target, label: 'Sur vos comptes, vos offres et votre CRM' },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; version 1 jour possible pour un périmètre resserré" },
  { label: 'Pour qui', value: "Équipes commerciales : commerciaux terrain et sédentaires, business developers, key account managers, directeurs commerciaux" },
  { label: 'Outils', value: "Multi-outils, indépendants des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, articulés avec votre CRM" },
  { label: 'Méthode', value: "Chaque atelier travaille sur vos comptes, vos offres et vos vrais rendez-vous, jamais sur des exemples génériques" },
  { label: 'Livrables', value: "Bibliothèque de prompts commerciaux, gabarits de proposition et de séquence, cadre d'usage données clients" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Ce que l'IA change dans chaque étape du cycle de vente (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: Search,
    title: 'Prospection et ciblage',
    desc: "Recherche d'un compte, lecture de son actualité, identification des enjeux probables et des interlocuteurs : l'IA prépare en dix minutes ce qui prenait une heure. La formation apprend à cadrer cette recherche et à en vérifier les sorties, car une info fausse dans un mail de prospection se paie cash.",
  },
  {
    icon: CalendarCheck,
    title: 'Préparation de rendez-vous',
    desc: "Synthèse de l'historique du compte, hypothèses de besoins, questions de découverte, objections probables et réponses : le brief de rendez-vous se construit avec l'IA à partir de vos notes et de vos échanges. Le commercial arrive préparé, et garde l'écoute pour la vraie découverte.",
  },
  {
    icon: FileText,
    title: 'Propositions commerciales',
    desc: "À partir de votre trame et du compte rendu de découverte, l'IA produit un premier jet de proposition adapté aux enjeux du prospect, que le commercial affine. Le gain se joue autant sur le temps que sur la personnalisation : chaque proposition parle du client, pas de vous.",
  },
  {
    icon: RefreshCw,
    title: 'Relances et séquences',
    desc: "Séquences de relance multicanal adaptées au profil et à l'étape du cycle, reformulations, variantes de ton, timing : l'IA écrit les variantes, le commercial choisit et personnalise. Avec la règle d'or : jamais un mail envoyé sans relecture humaine.",
  },
  {
    icon: Database,
    title: 'CRM et comptes rendus',
    desc: "Compte rendu de rendez-vous structuré à partir de notes brutes ou d'une transcription, actions de suivi, mise à jour du CRM : la partie administrative de la vente, celle que les équipes repoussent, se fait en sortant du rendez-vous. Le pipeline devient enfin à jour.",
  },
  {
    icon: Handshake,
    title: 'Négociation et objections',
    desc: "Entraînement aux objections en jeu de rôle avec l'IA, préparation des arguments de valeur, simulation d'une négociation difficile avant la vraie. Un exercice que peu d'équipes font, faute d'interlocuteur disponible : l'IA en est un, à toute heure.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Fondamentaux, prospection et préparation de rendez-vous",
    matin: [
      "Comprendre ce que les modèles font et ne font pas : capacités, limites, ce qui engage la relation client",
      "Panorama des outils du commercial : ChatGPT, Copilot, Claude, Gemini, Mistral ; articulation avec votre CRM",
      "La méthode de la demande efficace : contexte, rôle, format, exemples, itération",
      "Atelier : encoder votre offre, vos personas acheteurs et votre ton dans une instruction réutilisable",
    ],
    apresmidi: [
      "Atelier prospection : rechercher un compte réel, identifier ses enjeux, rédiger une approche personnalisée",
      "Atelier préparation de RDV : brief de rendez-vous, questions de découverte, objections anticipées sur un vrai compte",
      "Vérification : détecter l'info fausse, le générique, le hors-ton ; ce qu'on n'envoie jamais sans relire",
      "Cadre d'usage : données clients, RGPD, confidentialité des offres, ce qu'on peut confier à quel outil",
    ],
  },
  {
    jour: 'Jour 2',
    titre: "Propositions, relances, CRM et industrialisation",
    matin: [
      "Atelier proposition commerciale : de votre trame et d'un compte rendu de découverte au premier jet personnalisé",
      "Atelier séquences : relances multicanal par profil et par étape du cycle, variantes, timing",
      "Atelier négociation : jeu de rôle objections avec l'IA, arguments de valeur, simulation d'une négociation",
      "Analyse : lire un export de pipeline, préparer une revue de compte, synthétiser un portefeuille",
    ],
    apresmidi: [
      "Atelier CRM : compte rendu structuré à partir de notes ou d'une transcription, actions, mise à jour",
      "Industrialiser : la bibliothèque de prompts de l'équipe, les gabarits, les assistants ou GPTs personnalisés",
      "Votre plan d'action : les trois usages à installer dans le mois, qui les porte, comment on mesure",
      "Évaluation des acquis et remise des livrables (prompts, gabarits, cadre d'usage)",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Briefcase, title: 'Commerciaux terrain et sédentaires', desc: "Prospecter, préparer, proposer, relancer : les usages qui rendent des heures chaque semaine et améliorent la personnalisation. Le cœur des ateliers pratiques est fait pour vous." },
  { icon: Target, title: 'Business developers et SDR', desc: "Ciblage, recherche de comptes, séquences de prospection multicanal, qualification : l'IA industrialise la préparation sans industrialiser le spam, la nuance est tout l'enjeu." },
  { icon: Handshake, title: 'Key account managers', desc: "Revues de compte, synthèses de portefeuille, préparation de négociations complexes, propositions sur mesure : les usages qui servent la profondeur de la relation." },
  { icon: Users, title: 'Directeurs et managers commerciaux', desc: "Fixer le cadre d'usage de l'équipe, choisir les outils, mesurer le gain, faire vivre la bibliothèque de prompts. La formation vous donne la lecture d'ensemble et les réflexes de pilotage." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'apprend-on dans une formation IA commercial ?",
    a: "À intégrer l'intelligence artificielle générative dans chaque étape du cycle de vente, sur vos propres comptes : rechercher un prospect et cadrer une approche personnalisée, préparer un rendez-vous (brief, questions, objections), produire une proposition adaptée à partir de votre trame, construire des séquences de relance par profil, structurer un compte rendu et tenir le CRM à jour, s'entraîner à la négociation. Et surtout à vérifier et personnaliser : c'est la différence entre un commercial augmenté et un envoyeur de mails génériques.",
  },
  {
    q: "Sur quels outils la formation porte-t-elle ?",
    a: "Sur ceux que votre équipe utilisera réellement. Nous sommes indépendants des éditeurs et multi-outils : ChatGPT, Microsoft Copilot, Claude, Gemini et Mistral, articulés avec votre CRM (les copilotes intégrés aux CRM du marché sont abordés pour ce qu'ils font et ne font pas). Si votre entreprise a déjà déployé un outil, souvent Copilot dans l'écosystème Microsoft, la formation s'y concentre ; sinon la première demi-journée compare sur vos cas. Pour approfondir un outil précis, voyez nos formations ChatGPT commercial ou Copilot commercial.",
  },
  {
    q: "La formation travaille-t-elle sur nos vrais comptes et nos vraies offres ?",
    a: "Oui, c'est le principe. Avant la session, nous récupérons vos éléments : offre, trames de proposition, personas acheteurs, deux ou trois comptes ou rendez-vous représentatifs (anonymisés si besoin), votre CRM. Chaque atelier part de là : le compte à prospecter, le rendez-vous à préparer, la proposition à produire. Les participants repartent avec des livrables directement utilisables : bibliothèque de prompts commerciaux, gabarits de proposition et de séquence, cadre d'usage.",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est de deux jours (14 heures) en intra-entreprise, en présentiel ou à distance, pour un groupe de 4 à 10 commerciaux. Une version d'une journée existe pour un périmètre resserré (prospection et préparation de rendez-vous par exemple). Un accompagnement individuel est possible pour un directeur commercial ou un key account manager. Les journées pleines alternent apports courts et ateliers pratiques, matin et après-midi.",
  },
  {
    q: "Combien coûte une formation IA commercial ?",
    a: "Le tarif intra-entreprise est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : deux jours représentent 3 960 € HT pour l'équipe. La formation étant certifiée Qualiopi, votre OPCO peut la prendre en charge dans le cadre du plan de développement des compétences ; nous préparons le dossier avec vous. Devis détaillé sous 24 heures.",
  },
  {
    q: "La formation est-elle finançable par notre OPCO ?",
    a: "Oui. Masteria est certifiée Qualiopi, ce qui rend la formation éligible au financement par votre OPCO au titre du plan de développement des compétences. La prise en charge dépend de votre branche et de la taille de l'entreprise. Nous fournissons le programme, la convention et les pièces du dossier ; le dépôt se fait avant le début de la formation. Notre outil Quel OPCO ? identifie votre opérateur en deux minutes. La formation n'est pas éligible au CPF.",
  },
  {
    q: "Peut-on utiliser l'IA sur nos données clients et nos offres confidentielles ?",
    a: "Sous conditions, et la formation les pose clairement. Les offres entreprise des grands éditeurs (ChatGPT Business, Copilot Microsoft 365, Claude Team, Gemini Workspace) n'utilisent pas vos données pour entraîner leurs modèles et offrent un cadre contractuel, contrairement aux versions gratuites. Le RGPD s'applique aux données personnelles de vos clients et prospects, comme pour tout traitement, y compris en prospection B2B. Nous formalisons ensemble un cadre d'usage : ce qu'on peut confier à quel outil, ce qui reste interdit, comment on anonymise. C'est un livrable de la formation.",
  },
  {
    q: "L'IA ne va-t-elle pas rendre nos mails de prospection encore plus génériques ?",
    a: "C'est le risque numéro un, et la formation le traite de front. Un commercial qui demande « écris-moi un mail de prospection » obtient le même mail que ses concurrents. La méthode que nous enseignons inverse la logique : la recherche du compte d'abord (actualité, enjeux, interlocuteurs), la personnalisation ensuite, l'IA comme accélérateur de cette préparation et non comme rédacteur de masse. Le résultat se mesure aux taux de réponse, pas au nombre de mails envoyés. Un mail bien préparé avec l'IA est plus personnel qu'un mail écrit à la main en deux minutes.",
  },
  {
    q: "Quelle différence avec une formation ChatGPT ou Copilot pour commerciaux ?",
    a: "L'angle. Une formation ChatGPT commercial ou Copilot commercial approfondit un outil précis, ses fonctions et ses limites : c'est le bon choix quand l'outil est déployé et imposé. La formation IA commercial part du métier : elle couvre l'ensemble du cycle de vente et compare les outils sur vos cas, ce qui convient quand l'équipe utilise plusieurs outils ou que le choix reste ouvert. Les deux se combinent bien : la formation métier d'abord, un approfondissement outil ensuite pour les usages intensifs.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA commercial — Masteria',
  description: "Formation à l'intelligence artificielle générative appliquée à la vente, sur les comptes réels des participants : prospection et ciblage, préparation de rendez-vous, propositions commerciales, relances et séquences, CRM et comptes rendus, négociation, cadre RGPD données clients. Multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). 2 jours en intra, présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Rechercher un compte et rédiger une approche de prospection personnalisée avec l'IA",
    "Préparer un rendez-vous : brief, questions de découverte, objections anticipées",
    "Produire une proposition commerciale personnalisée à partir de sa trame",
    "Construire des séquences de relance par profil et tenir son CRM à jour",
    "Appliquer un cadre d'usage RGPD aux données clients et prospects",
  ],
  about: 'Intelligence artificielle générative appliquée à la vente',
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: 'Aucun prérequis technique. Pratique du métier commercial.',
  audience: 'Équipes commerciales, business developers, key account managers',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}

/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Programme de la formation IA commercial Masteria (2 jours)',
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
  '@id': 'https://www.master-ia.fr/formation-ia-commercial#article',
  headline: "Formation IA commercial : l'IA générative sur tout votre cycle de vente",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2025-09-15',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-commercial#webpage' },
  about: [
    { '@type': 'Thing', name: 'Vente', sameAs: 'https://fr.wikipedia.org/wiki/Vente' },
    { '@type': 'Thing', name: 'Intelligence artificielle générative', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative' },
    { '@type': 'Thing', name: 'Gestion de la relation client', sameAs: 'https://fr.wikipedia.org/wiki/Gestion_de_la_relation_client' },
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

export default function FormationIACommercialPage() {
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
    { name: 'Formation IA commercial', slug: SLUG },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA commercial</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation métier · Commercial
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA commercial :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>l'IA générative sur tout votre cycle de vente</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation IA commercial de Masteria apprend à vos équipes de vente à intégrer l'intelligence artificielle générative dans chaque étape du cycle : <strong style={{ color: '#fff', fontWeight: 700 }}>prospection, préparation de rendez-vous, propositions, relances, CRM, négociation</strong>, sur vos propres comptes et vos vraies offres. Deux jours, multi-outils, certifiée Qualiopi et finançable par votre OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            La vente est le métier où l'IA fait le plus gagner de temps sur la préparation, et celui où le générique se paie le plus cher : un mail de prospection standard finit à la corbeille. La formation ne se limite pas à « savoir prompter » : elle apprend à rechercher, personnaliser, vérifier et suivre, pour que la vitesse serve la relation au lieu de la dégrader.
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
              <Kicker>Étape par étape</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que change l'IA dans le travail d'un commercial ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>L'IA générative touche six étapes du cycle de vente : la prospection et le ciblage, la préparation des rendez-vous, les propositions commerciales, les relances et séquences, le CRM et les comptes rendus, la négociation. Dans chacune, elle accélère la préparation et le premier jet ; la valeur reste dans la personnalisation, la vérification et la relation, que la formation travaille autant que la production.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La formation couvre les six, avec un poids ajusté à votre équipe au cadrage. Si votre besoin est un agent IA qui qualifie ou relance à votre place, c'est une solution à développer : voyez notre page <Link to="/agent-commercial-ia" style={aStyle}>agent commercial IA</Link>.
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

      {/* ── PROGRAMME 2 JOURS (ancre sombre — pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Programme de la formation IA commercial sur 2 jours
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : les fondamentaux, votre offre et vos personas encodés, la prospection et la préparation de rendez-vous sur de vrais comptes. Jour 2 : propositions, séquences de relance, négociation en jeu de rôle, CRM et comptes rendus, puis l'industrialisation avec la bibliothèque de prompts de l'équipe et votre plan d'action. Chaque demi-journée alterne apports courts et ateliers sur vos comptes.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le programme s'ajuste au cadrage : une équipe de prospection approfondit le jour 1, des key account managers le jour 2. En version 1 jour, on garde les fondamentaux, l'offre encodée et deux ateliers au choix.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation IA commercial ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À toutes les équipes de vente : commerciaux terrain et sédentaires, business developers et SDR, key account managers, directeurs et managers commerciaux qui fixent le cadre et mesurent le gain. Sans prérequis technique : la pratique du métier suffit, en B2B comme en B2C.</strong>
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
                Données clients, prospection B2B, offres confidentielles : ce que la formation pose noir sur blanc
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La vente manipule des données personnelles (contacts, historiques, échanges) et des informations sensibles (offres, prix, conditions) : les deux appellent un cadre. La formation formalise avec vous ce qu'on peut confier à quel outil (offres entreprise sans entraînement sur vos données, versions gratuites à proscrire pour le confidentiel), comment on anonymise un compte rendu, ce que le RGPD impose en prospection B2B, et comment on garde la relation personnelle quand la préparation accélère. Ce cadre d'usage est un livrable, à intégrer à votre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>. Nous formons des équipes commerciales depuis 2022, dans l'industrie, les services, l'immobilier ou la tech : les mêmes questions reviennent partout, et elles ont des réponses pratiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Cadre d\'usage RGPD par outil et par type de donnée', 'Prospection B2B : ce que le RGPD impose vraiment', 'Offre et personas encodés, réutilisables', 'Relecture : ce qu\'on n\'envoie jamais sans vérifier'].map(pt => (
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
                Le cadrage préalable avec vos éléments (offre, trames, personas, comptes), l'animation des deux journées en présentiel ou à distance, les supports, les livrables (bibliothèque de prompts commerciaux, gabarits de proposition et de séquence, cadre d'usage), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation IA commercial : les questions fréquentes</h2>
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
              { label: 'Formation ChatGPT commercial', href: '/formation-chatgpt-commercial', tag: 'Par outil', desc: "Approfondir ChatGPT pour la vente : GPTs personnalisés, projets, recherche web, réglages." },
              { label: 'Formation Copilot commercial', href: '/formation-copilot-commercial', tag: 'Par outil', desc: "Copilot dans Microsoft 365 pour la vente : Outlook, Teams, Word, Excel, agents." },
              { label: 'Formation Claude commercial', href: '/formation-claude-commercial', tag: 'Par outil', desc: "Claude pour les propositions longues, les projets par compte et les compétences réutilisables." },
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Métier voisin', desc: "L'IA pour les équipes marketing : contenu, SEO, campagnes, analyse. Souvent formées ensemble." },
              { label: 'Formation IA management', href: '/formation-ia-management', tag: 'Métier voisin', desc: "Pour les managers commerciaux : piloter une équipe augmentée, fixer le cadre, mesurer." },
              { label: 'Agent commercial IA', href: '/agent-commercial-ia', tag: 'Solution', desc: "Quand le besoin est un agent qui qualifie ou relance à votre place : le développement sur mesure." },
              { label: 'Bibliothèque de prompts', href: '/bibliotheque-de-prompts', tag: 'Ressource', desc: "Des modèles de prompts commerciaux pour prolonger la formation au quotidien." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Pour un directeur commercial ou un key account manager : le tête-à-tête sur ses comptes." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA commercial</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Formons votre équipe de vente sur ses vrais comptes</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre équipe, votre cycle de vente, vos outils et votre CRM. Nous revenons vers vous sous 24 heures avec un programme ajusté, les dates possibles et le devis, dossier OPCO compris.
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
