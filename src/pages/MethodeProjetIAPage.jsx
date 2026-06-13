import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Target, FlaskConical, Code2, Rocket, GraduationCap,
  Package, Users, Compass, ShieldCheck, KeyRound, Lock, Database,
  Scale, Cpu, Building2, MapPin, Check, ServerCog, Handshake,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

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
const H1 = "Notre méthode et nos modèles d'engagement"

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
    highlight: true,
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
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: "Méthode et modèles d'engagement IA — Masteria",
  description: "Méthode projet IA de bout en bout (cadrage, prototype, développement, déploiement, transfert) et trois modèles d'engagement : forfait au projet, régie avec développeurs sur site, accompagnement conseil. Propriété du code au client, gouvernance et conformité (RGPD, AI Act).",
  url: 'https://www.master-ia.fr/methode-projet-ia',
  serviceType: "Développement et conseil IA — modèles d'engagement",
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
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function MethodeProjetIAPage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Méthode & modèles d\'engagement', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        extraJsonLd={serviceJsonLd}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#F9FAFB', color: '#0A0A0A', padding: 'clamp(48px, 7vw, 72px) 24px clamp(56px, 8vw, 80px)', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Méthode & modèles d'engagement</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Compass size={16} strokeWidth={2.2} aria-hidden="true" />
              Comment on travaille
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Méthode · 3 modèles d'engagement
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em', maxWidth: 920 }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 760, fontWeight: 500 }}>
            <strong>Masteria conduit ses projets IA de bout en bout (cadrage, prototype, développement, déploiement, transfert aux équipes) et propose trois modèles d'engagement : le forfait au projet, la régie avec des développeurs IA détachés dans vos équipes (sur site ou à distance) et l'accompagnement conseil. Le code développé vous appartient.</strong>
          </p>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, marginBottom: 40, maxWidth: 760 }}>
            La transparence sur la façon de travailler fait partie de la décision, surtout pour un engagement important. Cette page détaille notre méthode et les trois modèles selon lesquels nous pouvons intervenir, pour que vous choisissiez celui qui correspond à votre contexte et à vos contraintes de sécurité.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Discuter de votre projet
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#modeles" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir les modèles d'engagement
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Icon size={15} strokeWidth={2.2} style={{ color: c }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA MÉTHODE PROJET (timeline avec livrable) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ETAPES.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  padding: '24px 0',
                  borderTop: i === 0 ? 'none' : '1px solid #E5E7EB',
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
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

      {/* ── LES 3 MODÈLES D'ENGAGEMENT ── */}
      <section id="modeles" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Modèles d'engagement</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Selon quels modèles pouvons-nous intervenir ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Trois modèles, choisis selon votre contexte : le forfait au projet (périmètre, prix et délai fixés, idéal POC et projets cadrés), la régie avec des développeurs IA détachés dans vos équipes (sur site ou à distance, pour les environnements sensibles ou une montée en charge), et l'accompagnement conseil (cadrage, gouvernance, choix d'architecture). Les modèles se combinent.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le bon modèle dépend de votre besoin, de votre niveau de maturité et de vos contraintes de sécurité. Voici les trois, avec leurs cas d'usage.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {MODELES.map(modele => (
              <div
                key={modele.title}
                style={{
                  ...cardStyle,
                  padding: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  border: modele.highlight ? `2px solid ${c}` : '1px solid #E5E7EB',
                  boxShadow: modele.highlight ? '0 8px 24px rgba(37,99,235,0.12)' : '0 1px 2px rgba(0,0,0,0.04)',
                  position: 'relative',
                }}
              >
                {modele.highlight && (
                  <span style={{ position: 'absolute', top: -12, left: 30, background: c, color: '#fff', fontSize: 11.5, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 99 }}>
                    Axe fort
                  </span>
                )}
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={modele.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 4 }}>{modele.title}</h3>
                <div style={{ fontSize: 13.5, color: c, fontWeight: 700, marginBottom: 14 }}>{modele.tagline}</div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 18px' }}>{modele.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {modele.points.map(pt => (
                    <li key={pt} style={{ fontSize: 13.5, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <Check size={16} strokeWidth={2.6} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZOOM RÉGIE / DÉVELOPPEURS SUR SITE (axe fort) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#0A0A0A', padding: 'clamp(32px, 5vw, 56px)', borderColor: '#0A0A0A' }}>
            <div style={{ display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ServerCog size={28} strokeWidth={2} style={{ color: '#fff' }} />
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ ...kickerStyle, color: cLight }}>Zoom · Régie</div>
                <h2 style={{ ...h2Style, color: '#fff', marginBottom: 16 }}>
                  Nous pouvons détacher des développeurs IA dans vos équipes
                </h2>
                <p style={{ fontSize: 16, color: '#E5E7EB', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 820 }}>
                  Au-delà du forfait, nous proposons un mode régie : un ou plusieurs développeurs IA intégrés à vos équipes, sur site ou à distance. Ce modèle est pensé pour deux situations précises : les environnements sensibles, où les données ne doivent pas sortir de votre système d'information, et les phases de montée en charge, où vous avez besoin de renforcer rapidement votre capacité de développement avec de l'expertise IA.
                </p>
                <p style={{ fontSize: 16, color: '#E5E7EB', lineHeight: 1.75, margin: '0 0 24px', maxWidth: 820 }}>
                  Le principe est clair : vous gardez la main sur le pilotage, les priorités et la gouvernance ; nous apportons la compétence IA au quotidien, intégrés à vos rituels et à vos outils. Les modalités (durée, nombre de profils, présence sur site ou à distance) se définissent ensemble selon votre besoin. C'est une capacité que nous proposons, à dimensionner avec vous.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 12 }}>
                  {[
                    { icon: ShieldCheck, label: 'Environnements sensibles : données dans votre SI' },
                    { icon: Rocket, label: 'Montée en charge : renfort rapide en expertise IA' },
                    { icon: Building2, label: 'Sur site ou à distance, selon vos contraintes' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#1a1a1a', border: '1px solid #262626', borderRadius: 10, padding: '14px 16px' }}>
                      <Icon size={18} strokeWidth={2.2} style={{ color: cLight, flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
                      <span style={{ fontSize: 13.5, color: '#E5E7EB', lineHeight: 1.55 }}>{label}</span>
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

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pourquoi Masteria</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Pourquoi nous confier votre projet IA ?
          </h2>

          <p style={answerStyle}>
            <strong>Parce que Masteria est une agence spécialisée sur l'IA depuis 2022, qui forme aussi vos équipes : vous gagnez en autonomie au lieu d'installer une dépendance. Indépendants des éditeurs (multi-LLM) et stables comme interlocuteur, du cadrage au transfert, nous concevons pour la production et nous transmettons.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, margin: '12px 0 0' }}>
            {POURQUOI.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 880 }}>
            Pour le détail de notre capacité de développement, consultez notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link> et nos <Link to="/outils-ia-sur-mesure" style={aStyle}>outils IA sur mesure</Link>. Si votre besoin commence en amont, notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>conseil en intelligence artificielle</Link> cadre la stratégie. Et pour dé-risquer la première étape, le <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA</Link> pose la feuille de route en une journée.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>FAQ</Kicker>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>
            Méthode & engagement : les questions fréquentes
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
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
            Du diagnostic au développement, explorez nos expertises et nos offres.
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

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div style={{ ...kickerStyle, color: cLight }}>Parlons engagement</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Choisissons le bon modèle ensemble
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
            Décrivez-nous votre contexte, vos contraintes de sécurité et le renfort dont vous avez besoin : projet cadré au forfait, développeurs IA détachés dans vos équipes ou accompagnement conseil. Nous revenons vers vous sous 24 heures avec une proposition de modèle adaptée à votre situation.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
            Discuter de votre projet
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
            Réponse sous 24 h · Forfait · Régie · Conseil · Code propriété client · Lyon, France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
