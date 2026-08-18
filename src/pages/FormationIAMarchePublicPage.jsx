import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Landmark as Land, FileSearch, FileText, ListChecks, Scale, ClipboardCheck, Users as UsersIcon,
  GraduationCap, MapPin, Check, Sparkles, Landmark, Users, Target,
  ShieldCheck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page dédiée « formation IA marché public » (slug /formation-ia-marche-public).
 * CRÉATION 2026-08-10. Cible « formation ia marché public » (90/mois, KD 9,
 * intention C — Semrush 2026-08-10) et ses variantes « formation ia appel
 * d'offres », « formation ia réponse marchés publics », « ia commande publique ».
 *
 * DOUBLE INTENTION assumée : (1) les entreprises qui RÉPONDENT aux marchés
 * publics (analyse du DCE, mémoire technique, pièces) — matière Masteria :
 * journée « appels d'offres » négaWatt, skill SAEV ; (2) les ACHETEURS publics
 * (collectivités, administrations, hôpitaux) qui rédigent et analysent — matière
 * DNUM. La page traite les deux versants dans le même programme, avec le cadre
 * de la commande publique en fil rouge (égalité de traitement, transparence,
 * confidentialité des offres, ce que l'IA ne doit pas décider).
 *
 * INTÉGRITÉ : jamais « l'IA rédige votre mémoire technique à votre place »
 * (contenu générique = mémoire éliminé) ; l'IA prépare, structure, relit ; le
 * mémoire porte votre offre réelle. Côté acheteur : l'IA n'analyse pas les
 * offres à la place de la commission, elle prépare la lecture. Secteur public
 * hospitalier : financement ANFH, jamais OPCO (mémoire) ; collectivités : CNFPT
 * / plan de formation ; entreprises : OPCO. Programme 2 jours Matin/Après-midi.
 *
 * ANTI-CANNIBALISATION : /ia-secteur-public = CONSEIL/dev pour le secteur
 * public ; /formation-ia-achats = achats privés (métier) ; CETTE page = la
 * formation IA appliquée aux marchés publics, côté répondant et côté acheteur.
 */

const SLUG = 'formation-ia-marche-public'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Formation IA marché public : répondre et acheter avec l'IA | Masteria"
const META_DESC = "Formation IA marché public sur vos vrais dossiers : analyser un DCE, structurer un mémoire technique, préparer les pièces, et côté acheteur rédiger et analyser dans le cadre de la commande publique. Qualiopi."
const KEYWORDS = "formation ia marché public, formation ia marchés publics, formation ia appel d'offres, formation ia réponse appel d'offres, formation ia commande publique, ia mémoire technique, formation ia acheteur public"

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
  { icon: Target, label: "Sur vos vrais DCE, mémoires et consultations" },
  { icon: MapPin, label: 'Présentiel & distanciel · France · Suisse · Belgique' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "2 jours (14 h) en intra ; version 1 jour possible pour un seul versant (répondre, ou acheter)" },
  { label: 'Pour qui', value: "Côté répondant : responsables appels d'offres, bid managers, commerciaux grands comptes, dirigeants de PME. Côté acheteur : acheteurs publics, services marchés, directions juridiques" },
  { label: 'Outils', value: "Multi-outils, indépendants des éditeurs : ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral (souveraineté), avec vos plateformes de dématérialisation" },
  { label: 'Méthode', value: "Chaque atelier travaille sur vos vrais dossiers : un DCE récent, un mémoire technique passé, une consultation en préparation" },
  { label: 'Cadre', value: "Le code de la commande publique en fil rouge : égalité de traitement, transparence, confidentialité des offres, ce que l'IA ne décide pas" },
  { label: 'Financement', value: "Certifiée Qualiopi : OPCO pour les entreprises ; pour le secteur public, plan de formation (CNFPT, ANFH selon le versant), détaillé au cadrage" },
]

/* ───────── Ce que couvre la page (6 cartes) ───────── */

const MISSIONS = [
  {
    icon: FileSearch,
    title: 'Analyser un DCE en une heure',
    desc: "Règlement de consultation, CCTP, CCAP, annexes : l'IA extrait les critères et leur pondération, les exigences bloquantes, les pièces attendues, le calendrier, les questions à poser. La décision go / no go se prend sur une lecture complète, pas sur un survol. La formation apprend à cadrer cette lecture et à vérifier chaque exigence extraite contre le document source.",
  },
  {
    icon: FileText,
    title: 'Structurer et rédiger le mémoire technique',
    desc: "Le plan du mémoire aligné sur les critères de jugement, les réponses point par point aux exigences du CCTP, la reformulation de votre offre réelle dans le langage de l'acheteur, la relecture croisée. L'IA ne rédige pas un mémoire générique (celui-là est éliminé) : elle structure, accélère et relit un mémoire qui porte votre offre.",
  },
  {
    icon: ListChecks,
    title: 'Préparer les pièces et la conformité',
    desc: "Check-list des pièces administratives, cohérence entre l'acte d'engagement, le BPU et le mémoire, contrôle des oublis, préparation du dépôt dématérialisé. Les rejets pour non-conformité formelle sont les plus rageants : l'IA sert de second regard systématique.",
  },
  {
    icon: ClipboardCheck,
    title: 'Côté acheteur : rédiger la consultation',
    desc: "Sourcing et rédaction du besoin, CCTP clair et non discriminatoire, critères de jugement pondérés et objectivables, règlement de consultation, réponses aux questions des candidats. L'IA aide à écrire mieux et plus vite ; le respect du code et l'égalité de traitement guident chaque formulation.",
  },
  {
    icon: Scale,
    title: 'Côté acheteur : préparer l\'analyse des offres',
    desc: "Grille d'analyse alignée sur les critères publiés, extraction structurée de chaque offre, repérage des non-conformités et des points à clarifier, préparation du rapport d'analyse. L'IA prépare la lecture ; la notation et le classement restent à la commission, motivés et traçables.",
  },
  {
    icon: UsersIcon,
    title: 'Capitaliser et industrialiser',
    desc: "Bibliothèque de réponses types à votre offre, retours d'expérience des consultations passées, veille sur les avis de marchés (BOAMP et plateformes) filtrée par l'IA, gabarits outillés. Chaque consultation nourrit la suivante, au lieu de repartir de zéro.",
  },
]

/* ───────── Les atouts (6 gains, citables) ───────── */

const ATOUTS = [
  {
    title: 'Un go / no go décidé sur une lecture complète',
    desc: "Le DCE de deux cents pages est lu, structuré et résumé en une heure : critères, pondérations, exigences bloquantes, pièces, calendrier. Vous répondez aux bons marchés, et vous n'y laissez plus des semaines pour découvrir un critère éliminatoire trop tard.",
  },
  {
    title: 'Un mémoire technique aligné sur les critères, sans page blanche',
    desc: "Le plan suit les critères de jugement, chaque exigence trouve sa réponse, l'offre réelle est reformulée dans le langage de l'acheteur. Le temps de rédaction baisse ; la qualité et la pertinence montent, parce que le mémoire est relu deux fois au lieu d'être fini à minuit.",
  },
  {
    title: 'Zéro rejet pour un oubli formel',
    desc: "Le second regard systématique de l'IA sur les pièces, la cohérence acte d'engagement / BPU / mémoire, la check-list de dépôt : la non-conformité formelle, première cause de rejet évitable, recule.",
  },
  {
    title: 'Côté acheteur : des consultations plus claires, mieux répondues',
    desc: "Un CCTP net et non discriminatoire attire de meilleures offres et moins de questions. Les critères objectivables sécurisent l'analyse et le rapport. L'IA aide à écrire ce que le code demande : clair, égal, transparent.",
  },
  {
    title: 'La commande publique respectée, pas contournée',
    desc: "L'IA ne note pas les offres et ne choisit pas l'attributaire ; elle prépare la lecture. La formation pose ces limites noir sur blanc, avec la confidentialité des offres et la traçabilité en fil rouge. C'est ce qui rend l'usage défendable en cas de recours.",
  },
  {
    title: 'Un capital qui grandit à chaque consultation',
    desc: "Réponses types, retours d'expérience, veille filtrée : l'équipe capitalise au lieu de tout recommencer. La bibliothèque de prompts et les gabarits sont des livrables de la formation.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: "Répondre aux marchés publics avec l'IA",
    matin: [
      "Comprendre ce que les modèles font et ne font pas sur un dossier de consultation : capacités, limites, ce qui engage votre offre",
      "Panorama des outils : ChatGPT, Copilot, Claude, Gemini, Mistral ; confidentialité des offres, choix d'un outil souverain quand le marché l'exige",
      "La méthode de la demande efficace, appliquée aux pièces de marché : contexte, document source, format, exemples, itération",
      "Atelier DCE : analyser un dossier réel, extraire critères, pondérations, exigences bloquantes, pièces et calendrier ; décider go / no go",
    ],
    apresmidi: [
      "Atelier mémoire technique : plan aligné sur les critères, réponses aux exigences du CCTP, reformulation de votre offre réelle, relecture croisée",
      "Atelier pièces et conformité : check-list, cohérence acte d'engagement / BPU / mémoire, préparation du dépôt dématérialisé",
      "Cadre d'usage : confidentialité des offres et des prix, données personnelles des équipes proposées, ce qu'on ne confie jamais à un outil grand public",
      "Capitalisation : bibliothèque de réponses types à votre offre, retours d'expérience, veille BOAMP filtrée",
    ],
  },
  {
    jour: 'Jour 2',
    titre: "Acheter avec l'IA dans le cadre de la commande publique, et industrialiser",
    matin: [
      "Le code de la commande publique et l'IA : égalité de traitement, transparence, traçabilité, ce que l'IA ne décide pas",
      "Atelier consultation : sourcing, rédaction du besoin, CCTP clair et non discriminatoire, critères pondérés et objectivables, règlement de consultation",
      "Atelier questions-réponses : traiter les questions des candidats de façon égale et documentée",
      "Atelier analyse : grille alignée sur les critères publiés, extraction structurée des offres, non-conformités et points à clarifier, préparation du rapport",
    ],
    apresmidi: [
      "Cas croisés : les répondants relisent une consultation, les acheteurs relisent un mémoire ; ce que chacun apprend de l'autre versant",
      "Industrialiser : la bibliothèque de prompts de l'équipe (répondant ou acheteur), les gabarits outillés, les assistants personnalisés",
      "Votre plan d'action : les trois usages à installer avant la prochaine consultation, qui les porte, comment on mesure (taux de succès, délais, conformité)",
      "Évaluation des acquis et remise des livrables",
    ],
  },
]

/* ───────── Pour qui (4 profils) ───────── */

const PROFILS = [
  { icon: FileText, title: 'Responsables appels d\'offres et bid managers', desc: "Vous répondez à des dizaines de consultations par an et le temps manque toujours. Analyse de DCE, mémoire aligné, pièces sans oubli, capitalisation : le cœur du jour 1 est fait pour vous." },
  { icon: Target, title: 'Dirigeants et commerciaux de PME', desc: "Vous répondez aux marchés publics sans équipe dédiée. La formation vous donne la méthode pour décider vite (go / no go), rédiger juste et déposer conforme, avec l'IA comme second regard." },
  { icon: Land, title: 'Acheteurs publics et services marchés', desc: "Collectivités, administrations, hôpitaux, établissements publics : rédiger des consultations claires, traiter les questions, préparer l'analyse dans le respect du code. Le jour 2 est construit pour vous, financement adapté à votre statut." },
  { icon: Scale, title: 'Directions juridiques et achats', desc: "Sécuriser l'usage de l'IA de part et d'autre : confidentialité, égalité de traitement, traçabilité, données personnelles. Le cadre d'usage est un livrable de la formation." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'apprend-on dans une formation IA marché public ?",
    a: "À utiliser l'intelligence artificielle générative sur les deux versants de la commande publique, sur vos vrais dossiers. Côté répondant : analyser un DCE en une heure (critères, pondérations, exigences bloquantes, pièces), décider go / no go, structurer et rédiger un mémoire technique aligné sur les critères, préparer les pièces sans oubli, capitaliser d'une consultation à l'autre. Côté acheteur : rédiger une consultation claire et non discriminatoire, traiter les questions des candidats, préparer la grille et le rapport d'analyse. Le tout dans le cadre du code de la commande publique, avec ce que l'IA ne doit pas décider.",
  },
  {
    q: "L'IA peut-elle rédiger notre mémoire technique à notre place ?",
    a: "Non, et c'est heureux : un mémoire générique est un mémoire éliminé, les acheteurs les reconnaissent au premier paragraphe. Ce que l'IA fait très bien : construire le plan à partir des critères de jugement, vérifier que chaque exigence du CCTP a sa réponse, reformuler votre offre réelle dans le langage de l'acheteur, relire et repérer les incohérences. Le contenu, lui, vient de votre offre, de vos références et de votre méthode. La formation apprend précisément cette répartition : l'IA structure et relit, vous portez la valeur.",
  },
  {
    q: "Un acheteur public peut-il utiliser l'IA pour analyser les offres ?",
    a: "Pour préparer l'analyse, oui, dans un cadre strict que la formation détaille. L'IA peut construire la grille alignée sur les critères publiés, extraire de chaque offre les éléments répondant à chaque critère, repérer les non-conformités et les points à clarifier, structurer le rapport. Ce qu'elle ne fait pas : noter, classer, choisir. La notation et le classement restent à la commission ou au pouvoir adjudicateur, motivés et traçables, dans le respect de l'égalité de traitement et de la transparence. Un usage documenté ainsi est défendable en cas de recours ; un usage opaque ne l'est pas.",
  },
  {
    q: "Peut-on confier un DCE ou une offre à un outil d'IA ?",
    a: "Selon l'outil et le document. Un DCE publié est un document public : il peut être analysé dans une offre entreprise sans difficulté. Une offre en cours de rédaction contient vos prix, votre méthode et les données de vos équipes : elle ne va que dans une offre entreprise qui n'entraîne pas ses modèles sur vos données et offre un cadre contractuel, jamais dans une version gratuite. Côté acheteur, les offres reçues sont confidentielles : même règle, renforcée, et certains marchés imposent un hébergement souverain, ce que Mistral ou des déploiements dédiés permettent. La formation formalise ce cadre avec vous.",
  },
  {
    q: "La formation convient-elle aux acheteurs publics comme aux entreprises qui répondent ?",
    a: "Oui, et c'est voulu : le jour 1 est construit pour les répondants, le jour 2 pour les acheteurs, avec des cas croisés où chacun relit le travail de l'autre versant, ce qui apprend beaucoup aux deux. En intra, la formation s'ajuste au public réel : une PME qui répond prend le jour 1 en priorité, un service marchés le jour 2. Les fondamentaux (demande efficace, vérification, confidentialité, cadre de la commande publique) sont communs.",
  },
  {
    q: "Comment la formation est-elle financée pour une collectivité ou un hôpital ?",
    a: "Le financement dépend de votre statut, et nous le vérifions au cadrage. Pour les entreprises privées qui répondent aux marchés : OPCO, la formation étant certifiée Qualiopi. Pour les collectivités territoriales : plan de formation de la collectivité, éventuellement CNFPT selon les modalités. Pour les hôpitaux et établissements publics de santé : plan de formation de l'établissement, ANFH selon les cas. Pour l'État et ses opérateurs : plan de formation du service. Nous fournissons dans tous les cas la convention, le programme et les pièces attendues par votre financeur.",
  },
  {
    q: "Sur quels outils la formation porte-t-elle ?",
    a: "Sur ceux que votre organisation peut utiliser. Nous sommes indépendants des éditeurs et multi-outils : ChatGPT, Microsoft Copilot, Claude, Gemini et Mistral. Pour le secteur public et les marchés sensibles, l'exigence de souveraineté oriente souvent vers Mistral ou des déploiements dédiés ; la formation en tient compte. Nous articulons aussi l'IA avec vos plateformes de dématérialisation et vos outils de veille (BOAMP, profils d'acheteur).",
  },
  {
    q: "Combien de temps dure la formation et en quel format ?",
    a: "Le format de référence est de deux jours (14 heures) en intra, en présentiel ou à distance, pour un groupe de 4 à 10 personnes. Une version d'une journée existe pour un seul versant : répondre aux marchés (jour 1) ou acheter avec l'IA (jour 2). Un accompagnement individuel est possible pour un responsable appels d'offres ou un acheteur seul sur sa fonction. Les journées pleines alternent apports courts et ateliers sur vos dossiers réels.",
  },
  {
    q: "Combien coûte une formation IA marché public ?",
    a: "Le tarif intra est de 1 980 € HT par jour de formation pour le groupe, quel que soit le nombre de participants dans la limite de 10 : deux jours représentent 3 960 € HT. Pour un organisme public, nous établissons le devis dans les formes attendues (le cas échéant, dans le cadre de vos propres règles d'achat de formation). Certifiée Qualiopi, la formation est finançable par votre OPCO pour les entreprises ; pour le secteur public, selon votre plan de formation. Devis détaillé sous 24 heures.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation IA marché public — Masteria',
  description: "Formation à l'intelligence artificielle générative appliquée aux marchés publics, sur les dossiers réels des participants. Côté répondant : analyse de DCE, go / no go, mémoire technique aligné sur les critères, pièces et conformité, capitalisation. Côté acheteur : rédaction de consultation, questions des candidats, préparation de l'analyse des offres dans le cadre du code de la commande publique. Multi-outils (ChatGPT, Microsoft Copilot, Claude, Gemini, Mistral). 2 jours en intra, présentiel ou distanciel. Certifiée Qualiopi.",
  level: 'Tous niveaux',
  teaches: [
    "Analyser un dossier de consultation et décider go / no go sur une lecture complète",
    "Structurer et rédiger un mémoire technique aligné sur les critères de jugement",
    "Préparer les pièces et contrôler la conformité d'une réponse",
    "Rédiger une consultation claire et non discriminatoire, préparer l'analyse des offres",
    "Appliquer le cadre de la commande publique et la confidentialité aux usages de l'IA",
  ],
  about: 'Intelligence artificielle générative appliquée aux marchés publics et à la commande publique',
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: 'Aucun prérequis technique. Pratique des marchés publics, côté répondant ou côté acheteur.',
  audience: 'Responsables appels d\'offres, bid managers, dirigeants de PME, acheteurs publics, services marchés',
  locationName: 'Masteria — intra-entreprise et intra-administration, présentiel (France, Suisse, Belgique) ou distanciel',
}
/* Programme en ItemList (séquence citable — GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programme de la formation IA marché public Masteria (2 jours)",
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
  '@id': 'https://www.master-ia.fr/formation-ia-marche-public#article',
  headline: "Formation IA marché public : répondre aux appels d'offres et acheter avec l'IA, dans le cadre de la commande publique",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-ia-marche-public#webpage' },
  about: [
    { '@type': 'Thing', name: 'Marché public en France', sameAs: 'https://fr.wikipedia.org/wiki/March%C3%A9_public_en_France' },
    { '@type': 'Thing', name: 'Commande publique', sameAs: 'https://fr.wikipedia.org/wiki/Commande_publique' },
    { '@type': 'Thing', name: "Appel d'offres", sameAs: 'https://fr.wikipedia.org/wiki/Appel_d%27offres' },
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

export default function FormationIAMarchePublicPage() {
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
    { name: "Formation IA marché public", slug: SLUG },
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
          { name: 'BOAMP — Bulletin officiel des annonces des marchés publics', url: 'https://www.boamp.fr/' },
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation IA marché public</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Land size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation métier · Marchés publics
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation IA marché public :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>répondre aux appels d'offres et acheter avec l'IA</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mise à jour août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            La formation IA marché public de Masteria apprend, sur vos vrais dossiers, à mettre l'intelligence artificielle générative au service des deux versants de la commande publique : <strong style={{ color: '#fff', fontWeight: 700 }}>analyser un DCE, décider go / no go, structurer un mémoire technique aligné sur les critères, préparer les pièces</strong> côté répondant ; <strong style={{ color: '#fff', fontWeight: 700 }}>rédiger une consultation claire et préparer l'analyse des offres</strong> côté acheteur. Deux jours, multi-outils, certifiée Qualiopi.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Les marchés publics sont un métier d'écrit et de délais : des DCE de deux cents pages, des mémoires rendus à minuit, des consultations à rédiger sans ambiguïté. C'est exactement ce que l'IA générative sait assister, à une condition que la formation pose d'emblée : elle structure, accélère et relit, elle ne remplace ni votre offre ni la décision de la commission. Le cadre de la commande publique reste le fil rouge.
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
                Que change l'IA dans les marchés publics ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Six étapes de la commande publique sont transformées : l'analyse du DCE, la rédaction du mémoire technique, la préparation des pièces, et côté acheteur la rédaction de la consultation, la préparation de l'analyse des offres, puis la capitalisation d'une consultation à l'autre. Dans chacune, l'IA lit, structure et relit ; l'offre, la notation et la décision restent humaines.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                La formation couvre les six, avec un poids ajusté à votre versant au cadrage. Pour le conseil et le développement de solutions IA dans le secteur public, voyez notre page <Link to="/ia-secteur-public" style={aStyle}>IA pour le secteur public</Link>.
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
            Les atouts de l'IA générative pour les marchés publics
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Six gains : un go / no go décidé sur une lecture complète du DCE, un mémoire technique aligné sur les critères sans page blanche, la fin des rejets pour oubli formel, des consultations plus claires côté acheteur, la commande publique respectée plutôt que contournée, et un capital de réponses qui grandit à chaque consultation.</strong>
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
            Un mot d'honnêteté qui rend ces gains durables : l'IA peut halluciner une exigence ou en oublier une. Donnez-lui le document source, demandez la référence de chaque point extrait (page, article), relisez contre le DCE avant de décider : le reste, elle le fait remarquablement bien.
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
            Programme de la formation IA marché public sur 2 jours
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1, côté répondant : les fondamentaux, l'analyse d'un DCE réel et le go / no go, le mémoire technique aligné sur les critères, les pièces et la conformité, le cadre de confidentialité, la capitalisation. Jour 2, côté acheteur : le code de la commande publique et l'IA, la rédaction d'une consultation, les questions des candidats, la préparation de l'analyse des offres ; puis les cas croisés, l'industrialisation et votre plan d'action.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROGRAMME.map(j => <DayBlock key={j.jour} {...j} isDesktop={isDesktop} />)}
          </div>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 760 }}>
            Le programme s'ajuste au public : une PME qui répond approfondit le jour 1, un service marchés le jour 2. En version 1 jour, on prend un versant : répondre, ou acheter.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>À qui s'adresse la formation IA marché public ?</h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Aux deux versants de la commande publique : responsables appels d'offres et bid managers, dirigeants et commerciaux de PME qui répondent sans équipe dédiée, acheteurs publics et services marchés des collectivités, administrations et hôpitaux, directions juridiques et achats qui sécurisent l'usage. Sans prérequis technique : la pratique des marchés publics suffit.</strong>
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
                Confidentialité des offres, égalité de traitement, ce que l'IA ne décide pas
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Les marchés publics manipulent des informations sensibles (prix, méthodes, données des équipes proposées, offres reçues) et obéissent à des principes qui engagent : égalité de traitement des candidats, transparence, traçabilité des décisions. La formation formalise avec vous ce qu'on peut confier à quel outil (offres entreprise uniquement pour toute donnée d'offre, hébergement souverain quand le marché l'exige), où s'arrête l'assistance (l'IA lit, structure et relit ; elle ne rédige pas votre offre, ne note pas et ne choisit pas), et comment documenter l'usage pour qu'il tienne en cas de recours. Ce cadre est un livrable, à intégrer à votre <Link to="/charte-ia-entreprise" style={aStyle}>charte IA</Link>. Nous formons des équipes qui répondent aux appels d'offres et des acteurs publics depuis 2022 : les mêmes questions reviennent, et elles ont des réponses pratiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {['Offres et prix : offres entreprise uniquement, souverain si exigé', 'L\'IA structure et relit ; l\'offre et la décision restent humaines', 'Égalité de traitement et traçabilité documentées', 'Vérification de chaque exigence contre le document source'].map(pt => (
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
            <strong>1 980 € HT par jour de formation en intra, pour le groupe (jusqu'à 10 participants), soit 3 960 € HT les deux jours. Certifiée Qualiopi, la formation est finançable par votre OPCO pour les entreprises ; pour les collectivités, administrations et hôpitaux, elle relève de votre plan de formation (CNFPT, ANFH ou service selon votre statut), vérifié au cadrage. Devis sous 24 heures, dans les formes attendues par votre financeur.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, marginTop: 12 }}>
            <div style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ ...h3Style, fontSize: 16 }}>Ce que comprend le tarif</h3>
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Le cadrage préalable avec vos éléments (un DCE récent, un mémoire passé, une consultation en préparation, vos outils), l'animation des deux journées en présentiel ou à distance, les supports, les livrables (bibliothèque de prompts, gabarits de mémoire et de grille d'analyse, check-list de conformité, cadre d'usage), l'évaluation des acquis et le certificat de réalisation. En présentiel hors Lyon, les frais de déplacement s'ajoutent au réel.
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
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Formation IA marché public : les questions fréquentes</h2>
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
              { label: 'IA pour le secteur public', href: '/ia-secteur-public', tag: 'Secteur', desc: "Conseil et développement de solutions IA pour les collectivités, administrations et établissements publics." },
              { label: 'Formation IA achats', href: '/formation-ia-achats', tag: 'Métier voisin', desc: "L'IA pour les acheteurs privés : sourcing, appels d'offres privés, analyse fournisseurs, contrats." },
              { label: 'Formation IA commercial', href: '/formation-ia-commercial', tag: 'Métier voisin', desc: "L'IA sur tout le cycle de vente B2B, en amont des réponses aux consultations." },
              { label: 'Formation IA écrits professionnels', href: '/formation-ia-ecrits-pro', tag: 'Compétence', desc: "Rédiger mieux et plus vite avec l'IA : notes, courriers, comptes rendus, synthèses." },
              { label: 'Formation IA gestion de projet', href: '/formation-ia-gestion-de-projet', tag: 'Métier voisin', desc: "Après le marché gagné : cadrage, comptes rendus, reporting du projet avec l'IA." },
              { label: 'Formation AI Act', href: '/formation-ai-act', tag: 'Conformité', desc: "Ce que le règlement européen impose à vos propres usages de l'IA, et quand." },
              { label: 'Charte IA d\'entreprise', href: '/charte-ia-entreprise', tag: 'Cadre', desc: "Le cadre d'usage qui sécurise l'IA sur les dossiers sensibles." },
              { label: 'Coaching IA individuel', href: '/coaching-ia', tag: 'Individuel', desc: "Pour un responsable appels d'offres ou un acheteur seul sur sa fonction : le tête-à-tête sur ses dossiers." },
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
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation IA marché public</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>Formons votre équipe sur ses vrais dossiers de consultation</h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez-nous votre versant (répondant, acheteur, ou les deux), votre volume de consultations, vos outils et votre statut. Nous revenons vers vous sous 24 heures avec un programme ajusté, les dates possibles et le devis dans les formes attendues par votre financeur.
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
