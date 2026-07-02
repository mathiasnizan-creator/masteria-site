import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Rocket, GraduationCap,
  Package, Compass, ShieldCheck, KeyRound, Lock, Database,
  Scale, Cpu, Building2, Check, ServerCog, Handshake,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page de conversion high-ticket — « Méthode & modèles d'engagement IA »
 * (slug /methode-projet-ia). Objectif : la transparence d'engagement qui
 * rassure un acheteur high-ticket, avec mise en avant FORTE de la RÉGIE /
 * développeurs sur site (axe différenciant réel, confirmé par le dirigeant).
 *
 * INTÉGRITÉ : la régie est une capacité OFFERTE (présent/futur), jamais une
 * mission passée nommée. Aucun cas client, aucun chiffre de résultat, aucun
 * prix ferme inventé. Propriété du code AU CLIENT affirmée. Posture capacité.
 *
 * Design premium cabinet identique à /agence-developpement-ia : kickers, icônes
 * lucide (zéro emoji), cartes radius 16, réponses directes citables en gras,
 * accent #2563EB, CTA final sombre. Pas d'OPCO/Qualiopi (conseil/dev high-ticket).
 * Maillage : /agence-developpement-ia, /outils-ia-sur-mesure, /diagnostic-ia,
 * /conseil-intelligence-artificielle, /contact.
 */

const SLUG = 'methode-projet-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Méthode et modèles d'engagement IA | Masteria"
const META_DESC = "Méthode projet IA de bout en bout et trois modèles d'engagement, dont la régie avec développeurs sur site. Code propriété client, gouvernance, sécurité."
const KEYWORDS = "méthode projet ia, projet ia, conduite de projet ia, méthodologie projet ia, cadrage projet ia, poc ia, mvp ia"

/* ───────── Styles partagés (calque /agence-developpement-ia) ───────── */

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
  { icon: Package, label: 'Forfait au projet' },
  { icon: ServerCog, label: 'Régie · développeurs sur site' },
  { icon: Compass, label: 'Accompagnement conseil' },
  { icon: KeyRound, label: 'Code propriété client' },
]

/* ───────── En bref (synthèse citable — GEO) ───────── */

const EN_BREF = [
  { label: 'Méthode', value: "5 étapes (cadrage, prototype/POC, développement, déploiement, transfert), un livrable à chacune" },
  { label: 'Engagement', value: "Forfait au projet · régie (développeurs IA détachés, sur site ou à distance) · accompagnement conseil" },
  { label: 'Facturation', value: "Au forfait, au temps passé (régie) ou mixte selon le périmètre" },
  { label: 'Propriété', value: "Le code développé appartient au client" },
  { label: "Modèles d'IA", value: "Multi-LLM (Claude, GPT, Gemini, Mistral, Copilot), indépendants des éditeurs" },
  { label: 'Modalité', value: "Sur site ou à distance · Lyon, France, Suisse, Belgique" },
]

/* ───────── Forfait vs régie vs conseil (tableau de décision citable — GEO) ───────── */

const DECISION = [
  {
    critere: 'Ce qui est fixé',
    forfait: "Périmètre, prix et délai, définis avant de démarrer",
    regie: "Un cadre de collaboration ; le périmètre évolue avec vos priorités",
    conseil: "Des objectifs de cadrage, de gouvernance ou d'architecture",
  },
  {
    critere: 'Facturation',
    forfait: "Prix global fixé au projet",
    regie: "Au temps passé (taux journalier), selon le profil et la durée",
    conseil: "Au forfait ou au temps, selon le périmètre",
  },
  {
    critere: 'Idéal pour',
    forfait: "Un POC ou un projet bien cadré dont vous maîtrisez le coût",
    regie: "Un environnement sensible ou une montée en charge",
    conseil: "Un besoin en amont du build (stratégie, gouvernance)",
  },
  {
    critere: 'Vous gardez la main sur',
    forfait: "Le résultat attendu et le budget",
    regie: "Le pilotage, les priorités et la gouvernance au quotidien",
    conseil: "La décision finale, éclairée par un partenaire spécialisé",
  },
  {
    critere: 'Propriété du code',
    forfait: "Au client",
    regie: "Au client",
    conseil: "Au client (livrables et préconisations)",
  },
]

/* ───────── La méthode projet (timeline 5 étapes avec livrable) ───────── */

const ETAPES = [
  {
    num: '01',
    title: 'Cadrage',
    desc: "Nous délimitons le périmètre, le critère de réussite, les contraintes de données et de sécurité. Cette étape aligne tout le monde avant la moindre ligne de code.",
    livrable: 'Note de cadrage : périmètre, objectifs, critère de réussite',
  },
  {
    num: '02',
    title: 'Prototype / POC',
    desc: "Nous construisons un prototype sur le cas prioritaire, en conditions réelles, pour prouver la valeur avant d'engager le développement complet. Vous décidez sur un vrai flux.",
    livrable: 'Prototype fonctionnel sur le cas prioritaire',
  },
  {
    num: '03',
    title: 'Développement',
    desc: "Nous développons la solution retenue par itérations courtes, avec des points réguliers. Le code est structuré et documenté pour rester maintenable dans la durée.",
    livrable: 'Solution développée, code documenté',
  },
  {
    num: '04',
    title: 'Déploiement',
    desc: "Nous intégrons la solution à vos outils et à votre environnement, posons les garde-fous, la supervision et la conformité, puis accompagnons la mise en production sans perturber vos opérations.",
    livrable: 'Solution en production, intégrée à votre SI',
  },
  {
    num: '05',
    title: 'Transfert aux équipes',
    desc: "Nous formons vos équipes à utiliser, surveiller et faire évoluer la solution. À la fin de la mission, vous êtes propriétaire du code et capable de le faire vivre, avec ou sans nous.",
    livrable: 'Documentation, formation, autonomie des équipes',
  },
]

/* ───────── Les 3 modèles d'engagement ───────── */

const MODELES = [
  {
    icon: Package,
    title: 'Forfait au projet',
    tagline: 'Périmètre, prix et délai fixés',
    desc: "Vous savez exactement ce que vous engagez avant de démarrer. Le périmètre, les livrables, le prix et le calendrier sont définis dans une proposition forfaitaire. Le modèle idéal pour un prototype, un POC ou un projet bien cadré dont vous voulez maîtriser le coût total.",
    points: [
      'Prix et délai connus à l\'avance',
      'Périmètre et livrables écrits',
      'Idéal POC et projets cadrés',
    ],
    highlight: false,
  },
  {
    icon: ServerCog,
    title: 'Régie · développeurs sur site',
    tagline: 'Nos développeurs IA dans vos équipes',
    desc: "Nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, pour les environnements sensibles (données qui ne sortent pas de votre SI) ou pour absorber une montée en charge. Vous gardez la main sur le pilotage et les priorités, nous apportons l'expertise IA au quotidien, intégrés à vos rituels et à vos outils.",
    points: [
      'Sur site ou à distance, selon vos contraintes',
      'Pour les environnements sensibles ou la montée en charge',
      'Vous pilotez, nous apportons l\'expertise IA',
    ],
    highlight: false,
  },
  {
    icon: Compass,
    title: 'Accompagnement conseil',
    tagline: 'Cadrage, gouvernance, architecture',
    desc: "Quand votre besoin se situe en amont du développement, nous intervenons en conseil : cadrage stratégique, gouvernance des données et des usages, choix d'architecture et de modèles, trajectoire à l'échelle de l'organisation. Vous décidez avec un partenaire spécialisé, sans nécessairement nous confier le build.",
    points: [
      'Cadrage et feuille de route',
      'Gouvernance et conformité',
      'Choix d\'architecture et de modèles',
    ],
    highlight: false,
  },
]

/* ───────── Gouvernance & sécurité (4 cartes) ───────── */

const GOUVERNANCE = [
  {
    icon: KeyRound,
    title: 'Propriété du code au client',
    desc: "Le code que nous développons pour votre projet vous appartient. Pas de dépendance imposée, pas de licence captive : vous pouvez l'exploiter, le modifier et le faire évoluer avec vos équipes ou un autre prestataire.",
  },
  {
    icon: Lock,
    title: 'Confidentialité',
    desc: "Vos informations restent confidentielles à chaque étape. Engagements écrits, cloisonnement des accès et journalisation : la confidentialité est un critère de conception, pas une clause de style.",
  },
  {
    icon: Database,
    title: 'Maîtrise des données',
    desc: "Vos données restent les vôtres. Pour les environnements sensibles, la régie sur site permet de travailler sans que les données ne sortent de votre système d'information. Un hébergement dans l'Union européenne est possible selon vos exigences.",
  },
  {
    icon: Scale,
    title: 'Conformité (RGPD, AI Act)',
    desc: "Nous intégrons les exigences réglementaires dès la conception : traitement des données conforme au RGPD, lecture des obligations de l'AI Act selon le niveau de risque de l'usage, traçabilité des décisions de l'IA.",
  },
]

/* ───────── Pourquoi Masteria (4 cartes) ───────── */

const POURQUOI = [
  {
    icon: Cpu,
    title: 'Une agence spécialisée IA',
    desc: "Masteria travaille sur l'intelligence artificielle depuis 2022. Les modèles, leurs limites, le RAG, les agents et leurs garde-fous sont notre quotidien, là où un prestataire généraliste découvre le sujet en cours de route.",
  },
  {
    icon: GraduationCap,
    title: 'Qui forme aussi vos équipes',
    desc: "Issus de la formation professionnelle, nous ne livrons pas une boîte noire : nous transmettons. À la fin de la mission, vos équipes savent faire vivre la solution. L'autonomie est un livrable, pas une option.",
  },
  {
    icon: Cpu,
    title: 'Indépendante des éditeurs',
    desc: "Multi-LLM par principe (Claude, GPT, Mistral, Gemini, Copilot) : nous recommandons le modèle adapté à votre cas et à votre budget, sans contrat d'exclusivité qui orienterait nos choix.",
  },
  {
    icon: Handshake,
    title: 'Un interlocuteur stable',
    desc: "Du cadrage au transfert, vous gardez un interlocuteur qui connaît votre contexte. Des circuits courts, des décisions rapides et un suivi qui ne se dilue pas dans une chaîne de sous-traitance.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Pouvez-vous mettre un développeur chez nous, dans nos équipes ?",
    a: "Oui. C'est notre modèle de régie : nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, intégrés à vos rituels et à vos outils. Ce mode convient particulièrement aux environnements sensibles, où les données ne doivent pas sortir de votre système d'information, et aux situations de montée en charge où vous avez besoin de renfort sur l'expertise IA. Vous gardez la main sur le pilotage et les priorités ; nous apportons la compétence. Les modalités (durée, nombre de profils, présence sur site ou distancielle) se définissent ensemble selon votre besoin.",
  },
  {
    q: "À qui appartient le code développé ?",
    a: "À vous. Le code développé pour votre projet vous appartient, tout comme vos données. Nous documentons la solution et transférons la compétence à vos équipes pour qu'elles puissent l'exploiter et la faire évoluer en autonomie. Pas de licence captive, pas de dépendance imposée : vous restez libre de poursuivre avec nous, avec vos équipes ou avec un autre prestataire.",
  },
  {
    q: "Intervenez-vous sur site, ou seulement à distance ?",
    a: "Les deux. Masteria est basée à Lyon et intervient dans toute la France ainsi qu'en Suisse et en Belgique. Le développement et le suivi se conduisent très bien à distance, en visio et par points réguliers. Mais nous intervenons aussi sur site : c'est même un mode privilégié pour la régie, les phases de cadrage et les transferts aux équipes. Vous choisissez selon vos contraintes de sécurité et vos préférences.",
  },
  {
    q: "Comment choisir entre forfait, régie et accompagnement conseil ?",
    a: "Le forfait convient à un projet cadré dont vous voulez maîtriser le coût total : prototype, POC, développement à périmètre défini. La régie convient quand vous avez besoin d'un renfort durable, d'expertise IA intégrée à vos équipes ou de travailler dans un environnement sensible. L'accompagnement conseil intervient en amont, quand le besoin porte sur la stratégie, la gouvernance ou l'architecture plus que sur le build. Les modèles se combinent : un cadrage conseil peut précéder un forfait, qui peut basculer en régie pour la suite.",
  },
  {
    q: "Comment garantissez-vous la confidentialité et la conformité ?",
    a: "Par des engagements écrits de confidentialité, un cloisonnement des accès et une journalisation des traitements. Pour les environnements sensibles, la régie sur site permet de travailler sans que les données ne quittent votre SI, et un hébergement dans l'Union européenne reste possible. Côté conformité, nous intégrons le RGPD dès la conception et lisons les obligations de l'AI Act selon le niveau de risque de l'usage. La gouvernance n'est pas un sujet traité après coup : elle fait partie du cadrage.",
  },
  {
    q: "Qu'est-ce que la régie IA ?",
    a: "La régie consiste à détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, intégrés à vos rituels et à vos outils, et facturés au temps passé. À la différence du forfait, où le périmètre et le prix sont fixés à l'avance, la régie offre de la souplesse : le travail s'ajuste à vos priorités au fil de l'eau. Vous gardez la main sur le pilotage et la gouvernance ; nous apportons l'expertise IA au quotidien. Ce mode convient particulièrement aux environnements sensibles, où les données ne doivent pas sortir de votre système d'information, et aux phases de montée en charge.",
  },
  {
    q: "Travaillez-vous avec des PME ou seulement des grands groupes ?",
    a: "Les deux. La méthode et les modèles d'engagement s'adaptent à la taille de l'organisation et à l'ampleur du projet. Une PME démarre souvent par un projet cadré au forfait sur un cas précis ; une ETI ou un grand groupe mobilise plutôt la régie pour un renfort durable ou l'accompagnement conseil sur une trajectoire à l'échelle. Le point commun reste le même : un périmètre clair, des livrables concrets et un code qui vous appartient.",
  },
  {
    q: "Que se passe-t-il après le déploiement ? Assurez-vous la maintenance ?",
    a: "Oui, selon la formule qui vous convient. Une fois la solution en production, nous transférons la compétence à vos équipes pour qu'elles puissent l'exploiter en autonomie, documentation et formation à l'appui. Si vous préférez nous confier le suivi, nous proposons un accompagnement de maintenance et d'évolution, au forfait ou en régie. Comme le code vous appartient, vous restez libre d'assurer le run en interne, avec nous ou avec un autre prestataire.",
  },
  {
    q: "Quels modèles d'IA utilisez-vous pour développer les solutions ?",
    a: "Nous sommes indépendants des éditeurs et travaillons en multi-LLM : Claude (Anthropic), GPT (OpenAI), Gemini (Google), Mistral et Microsoft Copilot, ainsi que des modèles open source quand le contexte l'exige. Le choix du modèle dépend de votre cas d'usage et de vos contraintes de coût, de performance et de confidentialité, jamais d'un contrat d'exclusivité. Pour les environnements sensibles, nous privilégions les options qui gardent vos données dans l'Union européenne ou dans votre système d'information.",
  },
  {
    q: "Combien de temps dure un projet IA, du cadrage au déploiement ?",
    a: "Cela dépend du périmètre. Un prototype ou un POC sur un cas unique se mène souvent en quelques semaines. Un développement complet jusqu'à la mise en production s'étale sur plusieurs semaines à quelques mois selon la complexité, les intégrations à votre système d'information et les exigences de conformité. Notre méthode en étapes, avec un livrable et un point de décision à chacune, vous permet d'avancer par paliers maîtrisés : vous validez chaque étape avant d'engager la suivante.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: "Méthode et modèles d'engagement IA — Masteria",
  alternateName: "Modèles d'engagement IA : forfait, régie, conseil",
  description: "Méthode projet IA de bout en bout (cadrage, prototype, développement, déploiement, transfert) et trois modèles d'engagement : forfait au projet, régie avec développeurs sur site, accompagnement conseil. Propriété du code au client, gouvernance et conformité (RGPD, AI Act).",
  url: 'https://www.master-ia.fr/methode-projet-ia',
  serviceType: "Développement et conseil IA — modèles d'engagement",
  category: "Développement de solutions IA sur mesure",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Modèles d'engagement IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Forfait au projet', description: "Périmètre, prix et délai fixés. Idéal POC et projets cadrés." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Régie — développeurs IA sur site ou à distance', description: "Détachement d'un ou plusieurs développeurs IA dans vos équipes, pour les environnements sensibles ou une montée en charge." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accompagnement conseil', description: "Cadrage, gouvernance et choix d'architecture, en amont du développement." } },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/methode-projet-ia#article',
  headline: "Notre méthode et nos modèles d'engagement",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/methode-projet-ia#webpage' },
  about: ["Conduite de projet d'intelligence artificielle", 'Preuve de concept (POC)', 'Régie informatique', 'Développement de solutions IA'],
}

/* Méthode en 5 étapes décrite en ItemList (séquence citable — GEO ; HowTo
   volontairement évité, Google ayant retiré les rich results HowTo en 2023). */
const methodeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Méthode projet IA Masteria — 5 étapes",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: ETAPES.map((step, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: step.title,
    description: step.desc,
  })),
}

/* ───────── Composants ───────── */

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
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

export default function MethodeProjetIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (1re section du corps + FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil en intelligence artificielle', slug: 'conseil-intelligence-artificielle' },
    { name: 'Méthode & modèles d\'engagement', slug: SLUG },
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
        datePublished="2026-06-13"
        dateModified="2026-07-02"
        extraJsonLd={[serviceJsonLd, methodeJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#94A3B8' }}>Conseil en intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Méthode & modèles d'engagement</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Comment on travaille · 3 modèles d'engagement
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Notre méthode et nos{' '}
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>modèles d'engagement</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria conduit ses projets IA de bout en bout (cadrage, prototype, développement, déploiement, transfert aux équipes) et propose trois modèles d'engagement : le forfait au projet, la régie avec des développeurs IA détachés dans vos équipes (sur site ou à distance) et l'accompagnement conseil. <strong style={{ color: '#fff', fontWeight: 700 }}>Le code développé vous appartient.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            La transparence sur la façon de travailler fait partie de la décision, surtout pour un engagement important. Cette page détaille notre méthode et les trois modèles selon lesquels nous pouvons intervenir, pour que vous choisissiez celui qui correspond à votre contexte et à vos contraintes de sécurité.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Discuter de votre projet
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#modeles" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les modèles d'engagement
            </a>
          </div>

          {/* badges de compétences → chips sombres */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* En bref — synthèse citable (GEO), carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 116px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE PROJET (timeline à rail avec livrable) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>La méthode</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule un projet, de l'idée au transfert ?
          </h2>

          <p style={answerStyle}>
            <strong>Un projet suit cinq étapes, chacune avec un livrable : cadrage (note de cadrage), prototype ou POC (prototype fonctionnel), développement (solution documentée), déploiement (mise en production intégrée à votre SI) et transfert aux équipes (documentation, formation, autonomie). Vous décidez à chaque étape, sur des livrables concrets.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 44, lineHeight: 1.7, maxWidth: 880 }}>
            Le même chemin pour chaque mission : cadrer, prouver, développer, déployer, transmettre. Chaque étape produit un livrable et un point de décision, ce qui évite les projets qui s'enlisent et garde le contrôle de votre côté.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === ETAPES.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 10px', maxWidth: 760 }}>{step.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '6px 12px', fontSize: 13, color: '#374151', fontWeight: 600 }}>
                    <Check size={14} strokeWidth={2.6} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    Livrable : {step.livrable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES 3 MODÈLES D'ENGAGEMENT (ancre sombre — pivot, porte le tableau) ── */}
      <section id="modeles" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Modèles d'engagement</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Selon quels modèles pouvons-nous intervenir ?
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Trois modèles, choisis selon votre contexte : le forfait au projet (périmètre, prix et délai fixés, idéal POC et projets cadrés), la régie avec des développeurs IA détachés dans vos équipes (sur site ou à distance, pour les environnements sensibles ou une montée en charge), et l'accompagnement conseil (cadrage, gouvernance, choix d'architecture). Les modèles se combinent.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le bon modèle dépend de votre besoin, de votre niveau de maturité et de vos contraintes de sécurité. Voici les trois, avec leurs cas d'usage. Le choix entre forfait et régie pèse aussi sur le budget : pour savoir <Link to="/prix-projet-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>combien coûte un projet IA</Link>, nous détaillons les fourchettes et ce qui fait varier le coût.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {MODELES.map(modele => {
              const Icon = modele.icon
              return (
                <div
                  key={modele.title}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid #1E293B',
                    borderRadius: 16,
                    padding: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#F8FAFC', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{modele.title}</h3>
                  <div style={{ fontSize: 13.5, color: '#60A5FA', fontWeight: 700, marginBottom: 14 }}>{modele.tagline}</div>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 18px' }}>{modele.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {modele.points.map(pt => (
                      <li key={pt} style={{ fontSize: 13.5, color: '#CBD5E1', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <Check size={16} strokeWidth={2.6} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Forfait vs régie vs conseil — tableau de décision citable (GEO) */}
          <div style={{ marginTop: 'clamp(48px, 7vw, 80px)', paddingTop: 'clamp(40px, 6vw, 64px)', borderTop: '1px solid #1E293B' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Comment choisir</div>
            <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
              Forfait, régie ou conseil : comment choisir ?
            </h2>

            <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
              <strong style={{ color: '#fff' }}>Choisissez le forfait pour un projet cadré dont vous voulez maîtriser le coût total, la régie pour intégrer des développeurs IA à vos équipes dans un environnement sensible ou une montée en charge, et l'accompagnement conseil quand le besoin se situe en amont du développement. Dans les trois cas, le code développé vous appartient, et les modèles se combinent.</strong>
            </p>

            <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
              <table aria-label="Comparatif entre forfait au projet, régie et accompagnement conseil" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '22%' }}>Critère</th>
                    <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Forfait au projet</th>
                    <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Régie · développeurs détachés</th>
                    <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '26%' }}>Accompagnement conseil</th>
                  </tr>
                </thead>
                <tbody>
                  {DECISION.map((row, i) => (
                    <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                      <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.critere}</th>
                      <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.forfait}</td>
                      <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>{row.regie}</td>
                      <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>{row.conseil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZOOM RÉGIE / DÉVELOPPEURS SUR SITE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(32px, 5vw, 56px)' }}>
            <div style={{ display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ServerCog size={28} strokeWidth={2} style={{ color: c }} />
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <Kicker>Zoom · Régie</Kicker>
                <h2 style={{ ...h2Style, marginBottom: 16 }}>
                  Nous pouvons détacher des développeurs IA dans vos équipes
                </h2>
                <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 820 }}>
                  Au-delà du forfait, nous proposons un mode régie : un ou plusieurs développeurs IA intégrés à vos équipes, sur site ou à distance. Ce modèle est pensé pour deux situations précises : les environnements sensibles, où les données ne doivent pas sortir de votre système d'information, et les phases de montée en charge, où vous avez besoin de renforcer rapidement votre capacité de développement avec de l'expertise IA.
                </p>
                <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 24px', maxWidth: 820 }}>
                  Le principe est clair : vous gardez la main sur le pilotage, les priorités et la gouvernance ; nous apportons la compétence IA au quotidien, intégrés à vos rituels et à vos outils. Les modalités (durée, nombre de profils, présence sur site ou à distance) se définissent ensemble selon votre besoin. C'est une capacité que nous proposons, à dimensionner avec vous.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 12 }}>
                  {[
                    { icon: ShieldCheck, label: 'Environnements sensibles : données dans votre SI' },
                    { icon: Rocket, label: 'Montée en charge : renfort rapide en expertise IA' },
                    { icon: Building2, label: 'Sur site ou à distance, selon vos contraintes' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, padding: '14px 16px' }}>
                      <Icon size={18} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
                      <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.55 }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOUVERNANCE & SÉCURITÉ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Gouvernance & sécurité</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment traitez-vous la sécurité, les données et la conformité ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le code développé vous appartient, vos données restent les vôtres et la confidentialité est un critère de conception. Pour les environnements sensibles, la régie sur site permet de travailler sans que les données ne sortent de votre SI, avec un hébergement possible dans l'Union européenne. Nous intégrons le RGPD et l'AI Act dès le cadrage.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {GOUVERNANCE.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Pourquoi Masteria</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Pourquoi nous confier votre projet IA ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: 0 }}>
                <strong>Parce que Masteria est une agence spécialisée sur l'IA depuis 2022, qui forme aussi vos équipes : vous gagnez en autonomie au lieu d'installer une dépendance. Indépendants des éditeurs (multi-LLM) et stables comme interlocuteur, du cadrage au transfert, nous concevons pour la production et nous transmettons.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {POURQUOI.map(card => (
                  <div key={card.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                    <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour le détail de notre capacité de développement, consultez notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> et nos <Link to="/outils-ia-sur-mesure" style={aStyle}>outils IA sur mesure</Link>. Si votre besoin commence en amont, notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> cadre la stratégie. Et pour dé-risquer la première étape, le <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> pose la feuille de route en une journée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Méthode & engagement : les questions fréquentes
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
            Du diagnostic au développement, explorez nos expertises et nos offres, ou parcourez nos <Link to="/solutions-ia" style={aStyle}>solutions IA par usage</Link> et l'<Link to="/ia-secteurs" style={aStyle}>IA appliquée à votre secteur</Link>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Agents, automatisations et applications métier sur mesure, de l'idée au déploiement." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Des outils et copilotes développés pour un métier précis, connectés à vos données." },
              { label: 'Diagnostic IA', href: '/diagnostic-ia', tag: 'Offre d\'entrée', desc: "Votre feuille de route IA en une journée, à faible engagement, avec un livrable actionnable." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Stratégie, gouvernance et feuille de route IA au niveau de la direction." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
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

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Parlons engagement</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Choisissons le bon modèle ensemble
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez-nous votre contexte, vos contraintes de sécurité et le renfort dont vous avez besoin : projet cadré au forfait, développeurs IA détachés dans vos équipes ou accompagnement conseil. Nous revenons vers vous sous 24 heures avec une proposition de modèle adaptée à votre situation.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Discuter de votre projet
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Forfait · Régie · Conseil · Code propriété client · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
