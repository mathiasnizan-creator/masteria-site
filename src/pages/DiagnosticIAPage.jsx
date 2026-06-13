import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Map as MapIcon, Layers, Target, FileText, ListChecks,
  Gauge, Zap, Users, Server, Building2, Calendar, ClipboardCheck, Workflow,
  Rocket, ShieldCheck, MapPin, Check,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

/*
 * Page de conversion high-ticket — offre d'entrée productisée « Diagnostic IA »
 * (slug /diagnostic-ia). Objectif : dé-risquer la première étape d'un acheteur
 * high-ticket (COMEX, DSI, directions métier) avec un livrable actionnable en
 * une journée, faible engagement, sans suite obligatoire.
 *
 * INTÉGRITÉ : posture orientée capacité. Aucun cas client nommé, aucun chiffre
 * de résultat fabriqué, aucun prix ferme inventé. Le « 1 500 / 98 % » n'est PAS
 * employé ici (chiffre de formation). Le coût est présenté honnêtement : cadrage
 * gratuit OU forfait court selon le périmètre, sans tarif vendu à l'aveugle.
 *
 * Design premium cabinet identique à /agence-developpement-ia : kickers, icônes
 * lucide (zéro emoji), cartes radius 16, réponses directes citables en gras,
 * accent #2563EB, CTA final sombre. Pas d'OPCO/Qualiopi (offre conseil).
 * Maillage : /conseil-strategie-ia, /agence-developpement-ia, /agents-ia-entreprise,
 * /outils-ia-sur-mesure, /methode-projet-ia, /contact.
 */

const SLUG = 'diagnostic-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Diagnostic IA : feuille de route en 1 journée | Masteria"
const META_DESC = "Diagnostic IA en une journée : cartographie de vos processus automatisables, priorisation impact/effort, feuille de route chiffrée. Un livrable actionnable, sans engagement."
const H1 = "Diagnostic IA : votre feuille de route en une journée"

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
  { icon: Calendar, label: 'Une journée' },
  { icon: FileText, label: 'Feuille de route livrée' },
  { icon: ShieldCheck, label: 'Sans engagement de suite' },
  { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
]

/* ───────── Ce que couvre le diagnostic (4 cartes) ───────── */

const COUVERTURE = [
  {
    icon: Target,
    title: 'Cadrage des usages',
    desc: "Nous délimitons vos enjeux, vos objectifs et vos contraintes avec les bonnes personnes autour de la table. Le diagnostic part de votre réalité métier, pas d'un catalogue d'idées génériques sur l'intelligence artificielle.",
  },
  {
    icon: Workflow,
    title: 'Cartographie des processus automatisables',
    desc: "Nous passons en revue vos flux de travail et identifions ceux qui se prêtent à l'IA : tâches répétitives, traitement de documents, qualification, rédaction, recherche d'information. Vous voyez clairement où la valeur se trouve.",
  },
  {
    icon: Gauge,
    title: 'Priorisation impact / effort',
    desc: "Chaque cas d'usage est positionné selon sa valeur attendue et sa difficulté de mise en œuvre. Vous repartez avec un ordre de marche clair : par quoi commencer, quoi reporter, quoi écarter.",
  },
  {
    icon: ShieldCheck,
    title: 'Lecture des contraintes',
    desc: "Données, sécurité, confidentialité, conformité (RGPD, AI Act), maturité des équipes : nous intégrons vos contraintes réelles dans la trajectoire, pour une feuille de route tenable et non un vœu pieux.",
  },
]

/* ───────── Ce que contient le livrable (4 cartes) ───────── */

const LIVRABLE = [
  {
    icon: MapIcon,
    title: 'Une feuille de route priorisée',
    desc: "La liste de vos cas d'usage IA, classés par impact et par effort, avec une recommandation d'ordre de déploiement. C'est le cœur du livrable : savoir quoi faire, dans quel ordre et pourquoi.",
  },
  {
    icon: ListChecks,
    title: 'Des estimations de budget et de délai',
    desc: "Pour les cas prioritaires, une fourchette de budget et de délai fondée sur des ordres de grandeur de marché, présentés comme tels. De quoi arbitrer et présenter un dossier en interne, sans engagement de devis ferme.",
  },
  {
    icon: Zap,
    title: 'Des quick wins identifiés',
    desc: "Un ou plusieurs gains rapides activables sans grand projet : ce que vos équipes peuvent mettre en place vite, pour créer de la traction et de l'adhésion autour de l'IA dès les premières semaines.",
  },
  {
    icon: ShieldCheck,
    title: 'Les points de vigilance',
    desc: "Les risques à surveiller, les prérequis de données et les questions de gouvernance à traiter avant d'industrialiser. Vous avancez les yeux ouverts, pas sur une promesse lissée.",
  },
]

/* ───────── Pour qui (3 profils) ───────── */

const POUR_QUI = [
  {
    icon: Building2,
    title: 'COMEX et directions générales',
    desc: "Vous voulez une lecture lucide de ce que l'IA peut apporter à votre organisation, sans bullshit ni promesse de transformation magique. Le diagnostic vous donne une trajectoire chiffrée à présenter et à arbitrer.",
  },
  {
    icon: Server,
    title: 'DSI et directions techniques',
    desc: "Vous devez cadrer les demandes IA qui remontent des métiers, évaluer la faisabilité et anticiper les contraintes de données et de sécurité. Le diagnostic vous fournit une grille de priorisation et des garde-fous.",
  },
  {
    icon: Users,
    title: 'Directions métier',
    desc: "Vous avez des processus chronophages et l'intuition que l'IA peut aider, mais vous ne savez pas par où commencer. Le diagnostic transforme cette intuition en plan d'action concret et priorisé.",
  },
]

/* ───────── Comment ça se déroule (3 étapes avant/pendant/après) ───────── */

const DEROULE = [
  {
    num: '01',
    phase: 'Avant',
    title: 'Préparation et collecte',
    desc: "Un court échange préalable cadre le périmètre et identifie les bons interlocuteurs. Nous récupérons les éléments utiles (organigramme des processus concernés, contraintes connues) pour arriver préparés et ne pas perdre votre journée en mise en contexte.",
  },
  {
    num: '02',
    phase: 'Pendant',
    title: 'La journée de diagnostic',
    desc: "Une journée de travail avec vos équipes : ateliers de cartographie, identification des cas d'usage, lecture des contraintes, priorisation à chaud. Conduite par un spécialiste IA, en présentiel ou en distanciel selon votre préférence.",
  },
  {
    num: '03',
    phase: 'Après',
    title: 'La restitution et le livrable',
    desc: "Nous formalisons la feuille de route, les estimations et les quick wins dans un livrable écrit, puis nous le présentons. Vous repartez avec un document exploitable en interne, que vous donniez suite avec nous ou non.",
  },
]

/* ───────── Ce que ça débloque (3 cartes) ───────── */

const DEBLOQUE = [
  {
    icon: Rocket,
    title: 'Le passage au projet',
    desc: "Le diagnostic identifie le ou les cas prioritaires prêts à passer en prototype. Si vous décidez d'avancer, le cadrage est déjà fait : nous enchaînons sur un POC sans repartir de zéro.",
  },
  {
    icon: ClipboardCheck,
    title: 'Une décision documentée',
    desc: "Vous disposez d'un dossier solide pour arbitrer en interne : où investir, quel budget anticiper, quels gains attendre. La décision se prend sur des faits, pas sur une présentation commerciale.",
  },
  {
    icon: Layers,
    title: "Une trajectoire à l'échelle",
    desc: "Au-delà du premier cas, le diagnostic dessine la suite : les usages à industrialiser, la gouvernance à mettre en place, les compétences à développer dans les équipes. Une vision, pas un coup ponctuel.",
  },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Combien coûte un diagnostic IA ?",
    a: "Cela dépend du périmètre. Pour un cadrage simple sur un périmètre restreint, le premier échange de cadrage est gratuit et sans engagement. Pour un diagnostic approfondi mobilisant une journée complète avec vos équipes, des ateliers et un livrable formalisé, l'intervention se chiffre au forfait court, établi après définition du périmètre. Nous ne publions pas de prix type et ne vendons rien à l'aveugle : le périmètre se fixe avant le devis.",
  },
  {
    q: "Que se passe-t-il si nous ne donnons pas suite après le diagnostic ?",
    a: "Rien ne vous y oblige. Le diagnostic est conçu comme une offre d'entrée à faible engagement : vous repartez avec un livrable actionnable, exploitable par vos propres équipes ou par un autre prestataire si vous le souhaitez. La feuille de route, les estimations et les quick wins vous appartiennent. Nous préférons une relation qui se prolonge parce qu'elle a de la valeur, pas par contrainte.",
  },
  {
    q: "En quoi consiste exactement le livrable ?",
    a: "Un document écrit qui contient une feuille de route priorisée de vos cas d'usage IA (classés par impact et par effort), des estimations de budget et de délai pour les cas prioritaires (en ordres de grandeur de marché), une liste de quick wins activables rapidement et les points de vigilance à traiter. C'est un support de décision concret, pas une note d'intention.",
  },
  {
    q: "Qui doit participer côté entreprise ?",
    a: "Les bons interlocuteurs selon le périmètre : un sponsor côté direction (COMEX ou direction métier), un référent technique ou DSI si des questions de données et de sécurité se posent, et les opérationnels qui connaissent les processus concernés. Un diagnostic réussi mobilise les personnes qui vivent les processus au quotidien, pas seulement la direction.",
  },
  {
    q: "Le diagnostic se fait-il sur site ou à distance ?",
    a: "Les deux sont possibles. Masteria est basée à Lyon et intervient dans toute la France ainsi qu'en Suisse et en Belgique. La journée de diagnostic peut se tenir sur site, ce qui facilite les ateliers et l'implication des équipes, ou en distanciel en visio. La préparation et la restitution se conduisent très bien à distance dans tous les cas.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'ProfessionalService'],
  name: 'Diagnostic IA — Masteria',
  description: "Diagnostic IA productisé en une journée : cadrage des usages, cartographie des processus automatisables, priorisation impact/effort. Livrable : feuille de route priorisée, estimations de budget et de délai, quick wins. Offre d'entrée à faible engagement, sans suite obligatoire.",
  url: 'https://www.master-ia.fr/diagnostic-ia',
  serviceType: "Diagnostic et feuille de route IA",
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'COMEX, DSI et directions métier',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Diagnostic IA",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cartographie des processus automatisables', description: "Revue des flux de travail et identification des cas d'usage IA à plus forte valeur." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Priorisation impact / effort', description: "Classement des cas d'usage selon leur valeur attendue et leur difficulté de mise en œuvre." } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Feuille de route priorisée', description: "Trajectoire chiffrée avec estimations de budget et de délai et quick wins activables." } },
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

export default function DiagnosticIAPage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Diagnostic IA', slug: SLUG },
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
            <span style={{ color: c, fontWeight: 600 }}>Diagnostic IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Compass size={16} strokeWidth={2.2} aria-hidden="true" />
              Offre d'entrée · Diagnostic IA
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Une journée · Un livrable
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em', maxWidth: 920 }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 760, fontWeight: 500 }}>
            <strong>Le Diagnostic IA de Masteria est une journée de travail qui cadre vos usages, cartographie vos processus automatisables et les priorise par impact et par effort. Vous repartez avec un livrable concret : une feuille de route priorisée, des estimations de budget et de délai et des quick wins activables, sans engagement de suite.</strong>
          </p>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, marginBottom: 40, maxWidth: 760 }}>
            C'est l'étape qui dé-risque votre premier pas vers l'IA. Plutôt que de lancer un projet sur une intuition, vous obtenez une lecture lucide de ce qui mérite d'être fait, dans quel ordre et avec quel budget. Une offre productisée à faible engagement, conçue par un cabinet spécialisé sur l'intelligence artificielle depuis 2022.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un diagnostic
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#livrable" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir le livrable
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

      {/* ── CE QU'EST LE DIAGNOSTIC ── */}
      <section id="diagnostic" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ce que c'est</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Qu'est-ce que le Diagnostic IA de Masteria ?
          </h2>

          <p style={answerStyle}>
            <strong>Le Diagnostic IA est une intervention d'une journée qui cadre vos usages, cartographie vos processus automatisables et priorise les cas d'usage par impact et par effort. Conduit par un spécialiste IA, il transforme une intuition diffuse en une trajectoire claire, sans engager de projet à ce stade.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Beaucoup d'organisations savent que l'IA peut les aider, sans savoir par où commencer ni ce que cela représente. Le diagnostic répond à cette question avant tout engagement lourd. Il couvre quatre dimensions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {COUVERTURE.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 880 }}>
            Le diagnostic s'inscrit dans une logique plus large de <Link to="/conseil-strategie-ia" style={aStyle}>conseil en stratégie IA</Link>. Quand un cas est prêt, il enchaîne naturellement sur le <Link to="/agence-developpement-ia" style={aStyle}>développement sur mesure</Link>.
          </p>
        </div>
      </section>

      {/* ── LE LIVRABLE ── */}
      <section id="livrable" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Le livrable</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Avec quoi repartez-vous concrètement ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Vous repartez avec un livrable écrit et actionnable : une feuille de route priorisée de vos cas d'usage IA, des estimations de budget et de délai pour les cas prioritaires, une liste de quick wins activables rapidement et les points de vigilance à traiter. Un support de décision exploitable en interne, avec ou sans suite.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 40, lineHeight: 1.7, maxWidth: 880 }}>
            Le diagnostic ne se résume pas à une réunion : il produit un document que vous gardez. Quatre éléments le composent.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {LIVRABLE.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16.5, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            À qui s'adresse le diagnostic ?
          </h2>

          <p style={answerStyle}>
            <strong>Le diagnostic s'adresse aux décideurs qui doivent arbitrer sur l'IA : COMEX et directions générales pour une lecture stratégique, DSI et directions techniques pour cadrer la faisabilité, directions métier pour transformer une intuition en plan d'action. Il mobilise les personnes qui vivent les processus, pas seulement la direction.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {POUR_QUI.map(card => (
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

      {/* ── COMMENT ÇA SE DÉROULE (avant / pendant / après) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Déroulé</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Comment se déroule le diagnostic ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Le diagnostic se déroule en trois temps : avant, une préparation et une collecte d'éléments pour arriver cadrés ; pendant, une journée d'ateliers avec vos équipes ; après, la formalisation et la restitution du livrable. Vous ne perdez pas votre journée en mise en contexte, le travail est utile de bout en bout.</strong>
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 12 }}>
            {DEROULE.map((step, i) => (
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
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>{step.phase}</div>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 760 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUE ÇA DÉBLOQUE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Ce que ça débloque</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Que permet le diagnostic une fois livré ?
          </h2>

          <p style={answerStyle}>
            <strong>Le diagnostic débloque le passage au projet : le cas prioritaire est déjà cadré, prêt à enchaîner sur un prototype. Il vous donne aussi une décision documentée pour arbitrer en interne et une trajectoire à l'échelle au-delà du premier cas. Vous avancez sur des faits, pas sur une promesse.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, margin: '12px 0 0' }}>
            {DEBLOQUE.map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={card.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: '20px 24px', marginTop: 32 }}>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: '#0A0A0A' }}>Du diagnostic à la mise en production, sous un même toit.</strong>{' '}
              Si vous décidez d'avancer, nous enchaînons selon notre <Link to="/methode-projet-ia" style={aStyle}>méthode projet et nos modèles d'engagement</Link> : développement d'<Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link>, d'<Link to="/outils-ia-sur-mesure" style={aStyle}>outils IA sur mesure</Link> ou cadrage de gouvernance. Sans suite, le livrable reste le vôtre.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAIBLE ENGAGEMENT (réassurance) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Faible engagement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Repartir avec de la valeur, même sans suite
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Le diagnostic est volontairement conçu comme un point d'entrée à faible risque. Vous engagez une journée, vous repartez avec un livrable exploitable, et vous restez libre de la suite. C'est la façon la plus saine de tester une collaboration avec un cabinet : sur un résultat tangible, pas sur une promesse commerciale.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Un livrable actionnable, qu\'il y ait suite ou non',
                  'Aucun engagement de projet à ce stade',
                  'Un cadrage déjà fait si vous décidez d\'avancer',
                  'Un document exploitable par vos propres équipes',
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

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <Kicker>FAQ</Kicker>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>
            Diagnostic IA : les questions fréquentes
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Du cadrage stratégique au développement, explorez la suite logique du diagnostic.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Conseil en stratégie IA', href: '/conseil-strategie-ia', tag: 'Conseil', desc: "Le cadrage stratégique dans lequel s'inscrit le diagnostic, à l'échelle de l'entreprise." },
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Développement', desc: "Quand un cas est prêt : conception et développement de la solution, de l'idée au déploiement." },
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Agents', desc: "Déployer des agents IA sur les cas prioritaires que le diagnostic fait remonter." },
              { label: 'Méthode & modèles d\'engagement', href: '/methode-projet-ia', tag: 'Méthode', desc: "Comment nous travaillons après le diagnostic : forfait, régie ou accompagnement conseil." },
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
          <div style={{ ...kickerStyle, color: cLight }}>Offre d'entrée</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Commencez par un diagnostic
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
            Décrivez-nous votre contexte et les processus que vous voulez examiner. Nous revenons vers vous sous 24 heures pour cadrer le périmètre du diagnostic et convenir d'une date. Vous repartez de la journée avec une feuille de route claire, que vous donniez suite ou non.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
            Demander un diagnostic IA
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
            Réponse sous 24 h · Faible engagement · Livrable actionnable · Lyon, France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
