import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Home, Building, KeyRound, Users2, FileSignature, ScrollText, ShieldCheck as Shield,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
  ShieldCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation IA immobilier » (slug /formation-ia-immobilier).
 * CRÉATION 2026-08-10. Cible « formation ia immobilier » (90/mois, KD 6,
 * intention I+C — Semrush 2026-08-10) et variantes « formation ia agent
 * immobilier », « formation ia agence immobilière », « ia immobilier ».
 *
 * ANTI-CANNIBALISATION : /ia-immobilier-btp = CONSEIL et DÉVELOPPEMENT pour le
 * secteur (page secteur) ; CETTE page = la FORMATION des équipes immobilières
 * (transaction, gestion locative, promotion, syndic, foncières). Elle renvoie
 * vers la page secteur pour les solutions sur mesure.
 *
 * INTÉGRITÉ : matière Masteria = clients immobilier formés (mémoire : cas
 * Nexity données et présentations, formations « immobilier » citées dans
 * l'ancrage terrain), aucun cas nommé ici. Cadre spécifique : annonces et
 * mentions obligatoires (loi Hoguet, DPE, honoraires), non-discrimination
 * (sélection des locataires : jamais par l'IA), données personnelles des
 * candidats et copropriétaires (RGPD), estimations = aide à l'argumentation,
 * jamais un avis de valeur automatique vendu comme tel. Programme 2 jours
 * Matin/Après-midi (1 jour possible pour une agence).
 */

const SLUG = 'formation-ia-immobilier'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA immobilier : annonces, estimation, gestion, syndic | Masteria"
const META_DESC = "Formation IA immobilier sur vos vrais mandats et dossiers : annonces conformes, estimation argumentée, relation acquéreurs et locataires, gestion locative, syndic, promotion. ChatGPT, Copilot, Claude. Qualiopi, OPCO."
const KEYWORDS = "formation ia immobilier, formation ia agent immobilier, formation ia agence immobilière, formation intelligence artificielle immobilier, ia gestion locative, ia syndic, formation ia promotion immobilière"

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
  { icon: Target, label: "Sur vos mandats, vos annonces et vos dossiers réels" },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; version 1 jour possible pour une agence ou une équipe (transaction seule, ou gestion seule)" },
  { label: 'Pour qui', value: "Agents et négociateurs, gestionnaires locatifs, syndics de copropriété, promoteurs et foncières, dirigeants d'agence et de réseau, assistants immobiliers" },
  { label: 'Outils', value: "Multi-outils, indépendants des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral, articulés avec votre logiciel métier et vos portails" },
  { label: 'Méthode', value: "Chaque atelier travaille sur vos vrais mandats, annonces, dossiers de gestion et convocations, jamais sur des exemples génériques" },
  { label: 'Livrables', value: "Bibliothèque de prompts immobilier, gabarits (annonce conforme, argumentaire d'estimation, réponses locataires, convocations), cadre RGPD et non-discrimination" },
  { label: 'Financement', value: "Action de formation certifiée Qualiopi, finançable par votre OPCO ; devis sous 24 h" },
]

/* ───────── Ce que couvre la page (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: Home,
    title: 'Annonces et contenus de biens',
    desc: "Rédiger une annonce complète, juste et attractive à partir des caractéristiques du bien et des photos, la décliner par portail et par réseau social, produire la fiche et le dossier de présentation. Avec les mentions obligatoires vérifiées (DPE, honoraires, copropriété) : l'IA rédige vite, la formation apprend à ne rien laisser passer.",
  },
  {
    icon: KeyRound,
    title: 'Estimation et argumentaire',
    desc: "Structurer un avis de valeur argumenté à partir de vos comparables et de votre connaissance du marché : l'IA met en forme, compare, rédige la synthèse pour le vendeur, prépare le rendez-vous d'estimation. Elle ne fixe pas le prix : votre expertise et vos données le font, l'IA les rend lisibles et convaincantes.",
  },
  {
    icon: Users2,
    title: 'Relation acquéreurs et locataires',
    desc: "Réponses aux demandes entrantes, qualification, préparation des visites, suivi personnalisé, relances : les échanges qui font la différence et que le manque de temps rend impersonnels. Avec le cadre : la sélection d'un locataire ne se délègue jamais à l'IA, la non-discrimination et le RGPD encadrent chaque usage.",
  },
  {
    icon: Building,
    title: 'Gestion locative et copropriété',
    desc: "Courriers aux locataires et propriétaires, réponses aux réclamations, préparation des états des lieux, régularisations expliquées, convocations et procès-verbaux d'assemblée générale, synthèse d'un règlement de copropriété. Le volume d'écrits normés de la gestion, traité en un temps réduit.",
  },
  {
    icon: FileSignature,
    title: 'Promotion, foncières et montage',
    desc: "Notes de synthèse sur un foncier ou une opération, lecture de PLU et de documents d'urbanisme, préparation de comités, dossiers de commercialisation, réponses aux appels d'offres. Les documents longs et techniques du montage, digérés et restitués pour décider.",
  },
  {
    icon: ScrollText,
    title: 'Veille et réglementaire',
    desc: "Évolutions des lois immobilières (Hoguet, ALUR, Climat et résilience, encadrement des loyers, DPE), fiscalité, urbanisme : l'IA synthétise ce qui vous concerne et prépare la note pour l'équipe ou le client. À valider contre les textes et votre juriste, jamais sur la seule foi de l'outil.",
  },
]

/* ───────── Les atouts (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'Des annonces qui sortent du lot, conformes du premier coup',
    desc: "Complètes, justes, déclinées par canal, avec les mentions obligatoires vérifiées : le bien est mieux présenté et mis en ligne plus vite. Le temps gagné va aux visites et aux mandats.",
  },
  {
    title: 'Une estimation qui convainc le vendeur',
    desc: "L'avis de valeur devient un document argumenté, comparables à l'appui, lisible par un particulier. Votre expertise fixe le prix ; l'IA la met en scène et sécurise le rendez-vous d'estimation.",
  },
  {
    title: 'Une relation client personnalisée à grande échelle',
    desc: "Chaque acquéreur et chaque locataire reçoit une réponse rapide et personnelle, même quand l'agence croule sous les demandes. La réactivité redevient un avantage plutôt qu'un vœu.",
  },
  {
    title: 'La gestion et le syndic sans les soirées de courriers',
    desc: "Réclamations, régularisations, convocations, procès-verbaux : les écrits normés qui font le quotidien de la gestion se produisent en un temps réduit, avec plus de clarté pour les destinataires.",
  },
  {
    title: 'Un montage qui décide sur des documents lus',
    desc: "PLU, règlements, foncier, comités : les documents longs sont lus en profondeur et restitués. Le montage gagne en vitesse et en sécurité, la décision reste celle des experts.",
  },
  {
    title: 'Un cadre qui protège l\'agence et ses clients',
    desc: "Non-discrimination dans la sélection, RGPD sur les dossiers de candidats et de copropriétaires, mentions obligatoires, avis de valeur non automatisé : la formation pose le cadre qui rend l'usage défendable.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Fondamentaux, transaction et relation client",
    matin: [
      "Comprendre ce que les modèles font et ne font pas dans l'immobilier : capacités, limites, ce qui engage l'agence (mentions, non-discrimination, avis de valeur)",
      "Panorama des outils : ChatGPT, Copilot, Claude, Gemini, Mistral ; articulation avec votre logiciel métier et vos portails",
      "La méthode de la demande efficace : contexte, rôle, format, exemples, itération",
      "Atelier : encoder votre ton d'agence, vos gabarits d'annonce et vos mentions obligatoires dans des instructions réutilisables",
    ],
    apresmidi: [
      "Atelier annonces : rédiger et décliner une annonce à partir d'un vrai mandat, fiche et dossier de présentation, vérification des mentions",
      "Atelier estimation : structurer un avis de valeur argumenté à partir de vos comparables, préparer le rendez-vous",
      "Atelier relation client : réponses aux demandes entrantes, qualification, préparation de visite, suivi personnalisé et relances",
      "Cadre d'usage : RGPD sur les dossiers de candidats, non-discrimination (la sélection ne se délègue pas), confidentialité des mandats, ce qu'on ne confie jamais à un outil grand public",
    ],
  },
  {
    jour: 'Jour 2',
    titre: "Gestion, syndic, promotion, veille et industrialisation",
    matin: [
      "Atelier gestion locative : courriers, réponses aux réclamations, régularisations expliquées, préparation d'états des lieux",
      "Atelier syndic : convocations et procès-verbaux d'assemblée générale, synthèse d'un règlement de copropriété, réponses aux copropriétaires",
      "Atelier promotion et montage : note de synthèse sur un foncier, lecture d'un PLU, préparation d'un comité, dossier de commercialisation",
      "Atelier veille : synthétiser une évolution réglementaire (loi, DPE, fiscalité, urbanisme) et préparer la note client ou équipe, validation contre les textes",
    ],
    apresmidi: [
      "Industrialiser : la bibliothèque de prompts de l'agence ou du réseau, les gabarits outillés, les assistants ou GPTs personnalisés",
      "Mesurer : délais de mise en ligne, réactivité aux demandes, temps de gestion ; ce qu'on suit et comment",
      "Votre plan d'action : les trois usages à installer dans le mois, qui les porte, comment on mesure",
      "Évaluation des acquis et remise des livrables (prompts, gabarits, cadre d'usage)",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: Home, title: 'Agents, négociateurs et dirigeants d\'agence', desc: "Annonces, estimation, relation acquéreurs et vendeurs, prospection : les usages qui rendent des heures chaque semaine et améliorent la présentation des biens. Le cœur du jour 1 est fait pour vous." },
  { icon: Building, title: 'Gestionnaires locatifs et syndics', desc: "Courriers, réclamations, régularisations, convocations, procès-verbaux : le volume d'écrits normés de la gestion, traité plus vite et plus clairement, avec le RGPD en garde-fou." },
  { icon: FileSignature, title: 'Promoteurs, foncières, aménageurs', desc: "Notes de synthèse, documents d'urbanisme, comités, commercialisation, appels d'offres : les usages du montage et de la décision, sur vos vraies opérations." },
  { icon: Users, title: 'Réseaux, franchises et têtes de groupe', desc: "Vous voulez équiper des dizaines d'agences d'usages homogènes et d'un cadre commun. La formation se déploie par vagues, avec la bibliothèque de prompts et le cadre d'usage du réseau comme livrables." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'apprend-on dans une formation IA immobilier ?",
    a: "À intégrer l'intelligence artificielle générative dans le quotidien des métiers de l'immobilier, sur vos vrais dossiers : rédiger et décliner des annonces complètes et conformes, structurer un avis de valeur argumenté, personnaliser la relation avec les acquéreurs et les locataires, produire les écrits de la gestion locative et du syndic (courriers, régularisations, convocations, procès-verbaux), préparer les notes et lectures du montage en promotion, tenir la veille réglementaire. Et à poser le cadre propre au métier : non-discrimination, RGPD, mentions obligatoires, avis de valeur qui reste le vôtre.",
  },
  {
    q: "L'IA peut-elle estimer un bien à notre place ?",
    a: "Non, et il faut le dire à vos vendeurs : l'IA n'a ni vos comparables à jour, ni la connaissance du quartier, ni la vue sur l'état réel du bien. Ce qu'elle fait très bien : structurer votre avis de valeur à partir de vos comparables et de vos observations, rédiger un argumentaire lisible pour un particulier, préparer les objections du rendez-vous d'estimation. La formation apprend cette répartition, et met en garde contre les estimateurs automatiques présentés comme des avis de valeur : c'est votre expertise qui fixe le prix, l'IA la rend convaincante.",
  },
  {
    q: "Peut-on utiliser l'IA pour sélectionner des locataires ?",
    a: "Pour trier, comparer ou classer des candidats, non : c'est le terrain de la discrimination, interdite et sévèrement sanctionnée, et un traitement automatisé de ce type pose en plus des questions RGPD lourdes. Ce que l'IA peut faire dans la gestion locative : rédiger les réponses, expliquer les pièces demandées, préparer les états des lieux, produire les courriers et régularisations. La formation trace cette ligne noir sur blanc : la sélection reste une décision humaine sur des critères légaux, l'IA aide sur les écrits.",
  },
  {
    q: "Comment garantir que les annonces générées respectent les mentions obligatoires ?",
    a: "En les encodant dans le gabarit, ce que la formation fait en atelier. Les mentions exigées (DPE et classe énergie, honoraires et à la charge de qui, copropriété et charges, statut de l'annonceur, surface au bon référentiel) sont intégrées à l'instruction que l'agence réutilise, et une check-list de relecture ferme la boucle. L'IA rédige vite ; le gabarit et la relecture garantissent la conformité. Nous vous donnons la méthode ; la liste exacte se valide avec votre juriste ou votre réseau selon vos activités.",
  },
  {
    q: "Peut-on confier à l'IA nos dossiers de candidats, de copropriétaires ou nos mandats ?",
    a: "Sous conditions, et la formation les pose. Les dossiers de candidats et de copropriétaires contiennent des données personnelles, parfois sensibles (revenus, situation familiale) : anonymisation avant tout traitement, offres entreprise uniquement (elles n'entraînent pas leurs modèles sur vos données et offrent un cadre contractuel), jamais de version gratuite. Les mandats et les prix négociés sont confidentiels : même règle. Nous formalisons ensemble ce qu'on confie à quel outil, comment on anonymise, ce qu'on ne confie jamais. C'est un livrable.",
  },
  {
    q: "Sur quels outils la formation porte-t-elle ?",
    a: "Sur ceux que votre agence ou votre réseau utilise. Nous sommes indépendants des éditeurs et multi-outils : ChatGPT, Microsoft Copilot, Claude, Gemini et Mistral, articulés avec votre logiciel métier (transaction, gestion, syndic) et vos portails de diffusion. Si un outil est déployé au niveau du réseau, la formation s'y concentre ; sinon la première demi-journée compare sur vos cas. Les fondamentaux valent partout.",
  },
  {
    q: "La formation convient-elle à une petite agence indépendante ?",
    a: "Oui, en version d'une journée centrée sur la transaction (annonces, estimation, relation client) ou sur la gestion selon votre activité, pour l'équipe complète. Une agence indépendante y trouve les usages qui rendent le plus de temps tout de suite, avec le cadre d'usage pour se protéger. Les réseaux et têtes de groupe déploient plutôt le format deux jours par vagues d'agences, avec des livrables communs.",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est de deux jours (14 heures) en intra, en présentiel dans vos locaux ou à distance, pour un groupe de 4 à 10 personnes. Une version d'une journée existe pour un périmètre resserré : transaction seule, ou gestion et syndic seuls. Un accompagnement individuel est possible pour un dirigeant d'agence. Les journées pleines alternent apports courts et ateliers sur vos mandats et dossiers réels.",
  },
  {
    q: "Combien coûte une formation IA immobilier, et est-elle finançable ?",
    a: "Le tarif intra est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : une journée représente 1 980 € HT, deux jours 3 960 € HT. Certifiée Qualiopi, la formation est finançable par votre OPCO au titre du plan de développement des compétences (OPCO EP pour la plupart des agences, selon votre convention collective) ; nous préparons le dossier avec vous et notre outil Quel OPCO ? identifie votre opérateur. La formation n'est pas éligible au CPF. Devis sous 24 heures.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA immobilier — Masteria',
  description: "Formation à l'intelligence artificielle générative appliquée aux métiers de l'immobilier, sur les mandats et dossiers réels des participants : annonces conformes, avis de valeur argumenté, relation acquéreurs et locataires, gestion locative, syndic de copropriété, promotion et montage, veille réglementaire, cadre RGPD et non-discrimination. Multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). 2 jours en intra (1 jour possible), présentiel ou distanciel. Certifiée Qualiopi, finançable OPCO.",
  level: 'Tous niveaux',
  teaches: [
    "Rédiger et décliner des annonces complètes et conformes avec l'IA",
    "Structurer un avis de valeur argumenté à partir de ses comparables",
    "Personnaliser la relation acquéreurs et locataires dans le cadre RGPD et de non-discrimination",
    "Produire les écrits de la gestion locative et du syndic (courriers, régularisations, convocations, procès-verbaux)",
    "Préparer les notes de synthèse et lectures réglementaires du montage et de la veille",
  ],
  about: 'Intelligence artificielle générative appliquée à l\'immobilier',
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: 'Aucun prérequis technique. Pratique d\'un métier de l\'immobilier.',
  audience: 'Agents et négociateurs, gestionnaires locatifs, syndics, promoteurs, dirigeants d\'agence et de réseau',
  locationName: 'Masteria — intra-entreprise, présentiel (France, Suisse, Belgique) ou distanciel',
}
/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programme de la formation IA immobilier Masteria (2 jours)",
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
  '@id': 'https://www.master-ia.fr/formation-ia-immobilier#article',
  headline: "Formation IA immobilier : l'IA générative de l'annonce à la gestion, sur vos vrais mandats",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-immobilier#webpage' },
  about: [
    { '@type': 'Thing', name: 'Immobilier', sameAs: 'https://fr.wikipedia.org/wiki/Immobilier' },
    { '@type': 'Thing', name: 'Agent immobilier', sameAs: 'https://fr.wikipedia.org/wiki/Agent_immobilier' },
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

export default function FormationIAImmobilierPage() {
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
    { name: "Formation IA immobilier", slug: SLUG },
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
        datePublished="2026-08-10"
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA immobilier</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Home size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation métier · Immobilier
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA immobilier :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>l'IA générative de l'annonce à la gestion, sur vos vrais mandats</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation IA immobilier de Masteria apprend à vos équipes, sur vos vrais mandats et dossiers, à mettre l'intelligence artificielle générative au service du métier : <strong style={{ color: '#fff', fontWeight: 700 }}>annonces conformes, avis de valeur argumenté, relation acquéreurs et locataires, gestion locative, syndic, promotion, veille</strong>, avec le cadre RGPD et de non-discrimination posé noir sur blanc. Deux jours, multi-outils, certifiée Qualiopi et finançable par votre OPCO.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            L'immobilier est un métier d'écrits et de relation, sous contrainte réglementaire forte : c'est exactement là que l'IA générative fait gagner le plus, à condition de savoir ce qu'elle ne fait pas. Elle ne fixe pas un prix, ne sélectionne pas un locataire, ne dispense pas des mentions obligatoires. Elle rédige, structure, personnalise et relit, à votre ton, sur vos dossiers. La formation apprend cette frontière et en tire le maximum.
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
                Que change l'IA dans les métiers de l'immobilier ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>L'IA générative touche six activités de l'immobilier : les annonces et contenus de biens, l'estimation et son argumentaire, la relation acquéreurs et locataires, la gestion locative et la copropriété, la promotion et le montage, la veille réglementaire. Dans chacune, elle rédige, structure et personnalise ; le prix, la sélection et la décision restent aux professionnels.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La formation couvre les six, avec un poids ajusté à votre activité au cadrage. Pour des solutions IA sur mesure dans l'immobilier (agents, outils, automatisations), voyez notre page <Link to="/ia-immobilier-btp" style={aStyle}>IA pour l'immobilier et le BTP</Link>.
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
            Les atouts de l'IA générative pour une agence ou un groupe immobilier
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six gains : des annonces qui sortent du lot et conformes du premier coup, une estimation qui convainc le vendeur, une relation client personnalisée à grande échelle, la gestion et le syndic sans les soirées de courriers, un montage qui décide sur des documents lus, et un cadre qui protège l'agence et ses clients.</strong>
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
            Un mot d'honnêteté qui rend ces gains durables : l'IA peut inventer une mention, une surface ou une règle. Donnez-lui les données du mandat, encodez vos mentions obligatoires dans le gabarit, relisez avant diffusion : le reste, elle le fait remarquablement bien.
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
            Programme de la formation IA immobilier sur 2 jours
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : les fondamentaux et le cadre du métier, votre ton d'agence et vos gabarits encodés, puis les annonces, l'estimation et la relation client sur vos vrais mandats. Jour 2 : la gestion locative, le syndic, la promotion et le montage, la veille réglementaire, puis l'industrialisation avec la bibliothèque de prompts de l'agence et votre plan d'action.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le programme s'ajuste à votre activité : une agence de transaction approfondit le jour 1, un administrateur de biens le jour 2, un promoteur le montage. En version 1 jour, on prend un périmètre : transaction, ou gestion et syndic.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation IA immobilier ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>À tous les métiers de l'immobilier : agents, négociateurs et dirigeants d'agence, gestionnaires locatifs et syndics, promoteurs, foncières et aménageurs, réseaux et têtes de groupe qui veulent équiper leurs agences d'usages homogènes, assistants immobiliers. Sans prérequis technique : la pratique du métier suffit.</strong>
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
                Non-discrimination, RGPD, mentions obligatoires, avis de valeur : ce que la formation pose noir sur blanc
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                L'immobilier manipule des données personnelles sensibles (dossiers de candidats, copropriétaires, revenus) et obéit à des règles qui engagent l'agence : non-discrimination dans la sélection, mentions obligatoires des annonces, responsabilité de l'avis de valeur, confidentialité des mandats. La formation formalise avec vous ce qu'on peut confier à quel outil (offres entreprise uniquement pour toute donnée nominative), comment on anonymise, où s'arrête l'assistance (l'IA rédige et structure ; le prix, la sélection et la décision restent humains), et la relecture qui garantit la conformité des annonces. Ce cadre est un livrable, à intégrer à votre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA d'entreprise</Link>. Nous formons des équipes immobilières depuis 2022, en transaction, en gestion et en promotion : les mêmes questions reviennent, et elles ont des réponses pratiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['La sélection d\'un locataire ne se délègue jamais à l\'IA', 'Dossiers et mandats : offres entreprise, anonymisation', 'Mentions obligatoires encodées dans le gabarit, relues', 'L\'avis de valeur reste le vôtre ; l\'IA l\'argumente'].map(pt => (
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
                Le cadrage préalable avec vos éléments (mandats, annonces, gabarits, dossiers de gestion anonymisés, outils), l'animation des deux journées en présentiel ou à distance, les supports, les livrables (bibliothèque de prompts immobilier, gabarits outillés, cadre d'usage), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation IA immobilier : les questions fréquentes</h2>
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
              { label: 'IA pour l\'immobilier et le BTP', href: '/ia-immobilier-btp', tag: 'Secteur', desc: "Conseil et développement de solutions IA sur mesure pour l'immobilier : agents, outils, automatisations." },
              { label: 'Formation IA commercial', href: '/formation-ia-commercial', tag: 'Métier voisin', desc: "L'IA sur tout le cycle de vente : prospection, préparation de rendez-vous, propositions, relances." },
              { label: 'Formation IA assistanat', href: '/formation-ia-assistante', tag: 'Métier voisin', desc: "Pour les assistants d'agence : courriers, agendas, dossiers, comptes rendus avec l'IA." },
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Métier voisin', desc: "Pour la communication de l'agence ou du réseau : contenus, réseaux sociaux, campagnes." },
              { label: 'Formation Microsoft Copilot', href: '/formation-microsoft-copilot', tag: 'Par outil', desc: "Copilot dans Microsoft 365, souvent déjà déployé dans les groupes immobiliers." },
              { label: 'Formation ChatGPT', href: '/formation-chatgpt', tag: 'Par outil', desc: "L'outil le plus répandu dans les agences : projets, GPTs personnalisés, image." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le cadre d'usage qui protège l'agence : ce qu'on confie, comment, à qui." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Pour un dirigeant d'agence : le tête-à-tête sur ses mandats et son organisation." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA immobilier</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Formons votre agence ou votre réseau sur ses vrais mandats</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre activité (transaction, gestion, syndic, promotion), votre équipe, vos outils et vos enjeux du moment. Nous revenons vers vous sous 24 heures avec un programme ajusté, les dates possibles et le devis, dossier OPCO compris.
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
