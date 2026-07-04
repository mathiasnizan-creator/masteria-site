import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, PenLine, Search, Megaphone, Share2,
  Mail, BarChart3, Cog, Workflow, Target,
  MapPin, Layers, GraduationCap, Sparkles,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page offre « agence IA marketing » (slug /agence-ia-marketing).
 * Cible : « agence ia marketing » (70/mois, KD 17), « agence ia marketing suisse » (40).
 * Intention : DÉLÉGUER (done-for-you), pas se former. Vente d'une PRESTATION
 * (on produit et pilote pour vous), distincte de /formation-ia-marketing.
 * Anti-cannibalisation : bloc honnête « déléguer ou former » + lien formation en bas.
 * Maillage : /agence-developpement-ia, /agence-automatisation-ia,
 * /outils-ia-sur-mesure, /conseil-intelligence-artificielle, /formation-ia-marketing.
 * Design premium charte Masteria (#2563EB), icônes lucide (zéro emoji).
 */

const SLUG = 'agence-ia-marketing'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Agence IA marketing : contenu, campagnes & SEO | Masteria"
const META_DESC = "Agence IA marketing : nous produisons et pilotons contenu, SEO/GEO, campagnes, social, emailing et reporting augmentés par l'IA. Done-for-you. FR, CH, BE."
const KEYWORDS = "agence ia marketing, ia marketing, marketing ia, agence marketing intelligence artificielle, ia pour le marketing"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 860 }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

function IconBox({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: Layers, label: 'Prestation clé en main (done-for-you)' },
  { icon: Sparkles, label: 'Multi-LLM (ChatGPT, Claude, Gemini, Copilot)' },
  { icon: MapPin, label: 'France · Suisse romande · Belgique' },
  { icon: Target, label: 'Vous validez, nous produisons et pilotons' },
]

/* ───────── Ce qu'on prend en charge (6 cartes) ───────── */

const PRESTATIONS = [
  { icon: PenLine, title: 'Production de contenu', desc: "Articles, pages, fiches produit, livres blancs et newsletters rédigés dans votre ligne éditoriale. L'IA accélère la production, nos consultants relisent et arbitrent avant publication." },
  { icon: Search, title: 'SEO & GEO', desc: "Recherche de mots-clés, clusters sémantiques, briefs et optimisation on-page, plus le GEO : votre visibilité dans les réponses des IA (ChatGPT, Perplexity, Google AI). Stratégie pilotée, contenus produits." },
  { icon: Megaphone, title: 'Campagnes & ads', desc: "Conception et déclinaison d'annonces Google Ads et Meta : variantes d'accroches, angles testés à budget constant, audiences et messages adaptés à chaque étape du parcours d'achat." },
  { icon: Share2, title: 'Social media', desc: "Calendrier éditorial, déclinaison d'un même message sur LinkedIn, Instagram, X et TikTok, adaptation du ton par plateforme. Production cadencée et cohérente avec votre marque." },
  { icon: Mail, title: 'Emailing & CRM', desc: "Séquences d'emailing, personnalisation par segment, objets testés en A/B, scénarios de marketing automation raccordés à votre CRM pour nourrir et qualifier vos contacts." },
  { icon: BarChart3, title: 'Reporting & analyse', desc: "Tableaux de bord consolidés, synthèses commentées et recommandations actionnables à partir de vos données de campagne, sans que vos équipes aient à manier la donnée." },
]

/* ───────── Comment on travaille (4 temps) ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Cadrage',
    badge: 'Échange initial',
    desc: "Nous clarifions vos objectifs marketing, votre cible, votre positionnement et votre ligne éditoriale, puis cartographions les canaux à prendre en charge. Ce cadrage fixe le périmètre, les priorités et les indicateurs de suivi.",
    livrable: "Un périmètre d'intervention clair, des objectifs mesurables et une feuille de route validée ensemble.",
  },
  {
    num: '02',
    title: 'Mise en place des outils et automatisations',
    badge: 'Socle',
    desc: "Nous configurons le socle de production : sélection des LLM adaptés à chaque usage, encodage de votre charte éditoriale dans des prompts système, automatisations sur mesure raccordées à vos outils (CRM, CMS, planificateurs).",
    livrable: "Un dispositif de production opérationnel : modèles de prompts, workflows et intégrations à vos outils.",
  },
  {
    num: '03',
    title: 'Production',
    badge: 'Cadence régulière',
    desc: "Nos consultants produisent les contenus, campagnes et séquences prévus, à cadence régulière. Chaque livrable passe une relecture humaine et un contrôle de cohérence de marque avant de vous être soumis pour validation.",
    livrable: "Des livrables prêts à publier, relus et conformes à votre marque, livrés selon le rythme convenu.",
  },
  {
    num: '04',
    title: 'Pilotage',
    badge: 'Suivi continu',
    desc: "Nous mesurons les résultats, ajustons les angles et les canaux, et vous remettons un reporting commenté. Le dispositif évolue au fil des performances observées, avec des points de suivi réguliers.",
    livrable: "Un reporting régulier, des arbitrages documentés et un dispositif qui s'affine au fil des performances.",
  },
]

/* ───────── Déléguer ou former (tableau honnête) ───────── */

const TABLE_DELEGUER = [
  {
    critere: 'Qui produit',
    deleguer: 'Notre équipe produit et pilote pour vous',
    former: 'Vos équipes produisent, une fois montées en compétence',
  },
  {
    critere: 'Délai de mise en route',
    deleguer: 'Court : nous démarrons la production rapidement',
    former: 'Le temps de la formation, puis de la prise en main interne',
  },
  {
    critere: 'Charge pour vos équipes',
    deleguer: 'Faible : vous cadrez et validez, sans produire',
    former: 'Vos équipes portent la production au quotidien',
  },
  {
    critere: 'Montée en autonomie',
    deleguer: 'Optionnelle, via une passation en fin de mission',
    former: 'Objectif central : vos équipes deviennent autonomes',
  },
  {
    critere: 'Financement OPCO',
    deleguer: "Non éligible : c'est une prestation, pas une formation",
    former: 'Éligible : la formation est certifiée Qualiopi',
  },
]

/* ───────── Outils & approche ───────── */

const OUTILS = [
  { icon: Sparkles, title: 'Approche multi-LLM', desc: "Nous choisissons le bon modèle pour chaque usage : ChatGPT, Claude, Gemini, Copilot ou Mistral. Le rédactionnel exigeant ne va pas sur le même outil que la production de volume ou l'analyse de données." },
  { icon: Cog, title: 'Automatisations sur mesure', desc: "Au-delà des prompts, nous construisons les workflows qui font circuler vos contenus de la production à la publication, et qui synchronisent vos outils marketing sans ressaisie." },
  { icon: PenLine, title: 'Cohérence de marque', desc: "Votre ligne éditoriale est encodée dans des prompts système réutilisables. Chaque livrable passe une relecture humaine : l'IA accélère, le consultant arbitre." },
  { icon: Target, title: 'Pilotage par les résultats', desc: "Les angles, canaux et formats sont arbitrés en fonction des performances mesurées, pas d'intuitions. Le dispositif s'ajuste en continu." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une agence IA marketing ?",
    a: "C'est un prestataire qui produit et pilote vos actions marketing en s'appuyant sur l'intelligence artificielle : contenu, SEO et GEO, campagnes publicitaires, social media, emailing et reporting. Chez Masteria, il s'agit d'une prestation clé en main : nous prenons en charge la production avec nos consultants et nos outils, vous cadrez et validez. L'IA accélère le travail, mais chaque livrable passe une relecture humaine avant publication.",
  },
  {
    q: "En quoi est-ce différent d'une formation IA marketing ?",
    a: "La formation rend vos équipes autonomes pour produire elles-mêmes : c'est une montée en compétence, certifiée Qualiopi et finançable OPCO. L'agence IA marketing fait l'inverse : nous produisons et pilotons à votre place, sans mobiliser vos équipes au quotidien. Si vous préférez internaliser la compétence, notre page formation IA marketing détaille cette voie. Les deux peuvent se combiner : nous produisons, puis nous transmettons en fin de mission.",
  },
  {
    q: "Intervenez-vous en Suisse romande ?",
    a: "Oui. Masteria est basée à Lyon et intervient en Suisse romande comme en France et en Belgique, à distance pour la production et le pilotage, et en présentiel ponctuel pour les temps de cadrage qui le justifient. Le dispositif se pilote très bien à distance : production, validation et reporting se font en ligne, avec des points de suivi réguliers selon votre fuseau et vos contraintes.",
  },
  {
    q: "Avec quels outils d'IA travaillez-vous ?",
    a: "Nous sommes multi-LLM : ChatGPT, Claude, Gemini, Copilot et Mistral, choisis selon l'usage. Le rédactionnel exigeant, la production de volume et l'analyse de données n'appellent pas le même modèle. Nous y ajoutons des automatisations sur mesure pour raccorder votre CRM, votre CMS et vos planificateurs, afin que les contenus circulent de la production à la publication sans ressaisie.",
  },
  {
    q: "Gardez-vous une relecture humaine sur les contenus produits par l'IA ?",
    a: "Oui, systématiquement. L'IA accélère la production, mais elle ne publie jamais seule. Chaque livrable passe une relecture humaine et un contrôle de cohérence de marque par nos consultants avant de vous être soumis. Vous gardez la validation finale sur tout ce qui sort sous votre nom.",
  },
  {
    q: "Combien coûte une agence IA marketing ?",
    a: "Le budget dépend du périmètre : canaux pris en charge, volume de production, niveau de pilotage et automatisations à mettre en place. Nous chiffrons sur devis après le cadrage initial, une fois ces éléments clarifiés. La prestation n'est pas finançable par votre OPCO : seule une formation l'est, et nous ne promettons jamais l'inverse. Si vous préférez former vos équipes, la voie finançable est détaillée sur la page formation IA marketing.",
  },
  {
    q: "Agence marketing IA ou agence IA marketing : est-ce la même chose ?",
    a: "Oui, les deux expressions désignent la même réalité : un prestataire qui produit et pilote vos actions marketing en s'appuyant sur l'intelligence artificielle. « Agence marketing IA » et « agence IA marketing » sont des variantes du même besoin, l'ordre des mots ne change rien à la prestation. Chez Masteria, il s'agit dans les deux cas d'une prestation clé en main : contenu, SEO et GEO, campagnes, social media, emailing et reporting augmentés par l'IA, avec relecture humaine sur chaque livrable.",
  },
  {
    q: "Quels résultats attendre d'une agence marketing IA ?",
    a: "Le gain le plus immédiat est la capacité de production : davantage de contenus et de campagnes à qualité tenue, sans grossir l'équipe. Viennent ensuite la cohérence de marque sur l'ensemble des canaux et un pilotage fondé sur les données mesurées. Nous ne promettons pas de chiffre de performance à l'aveugle : les indicateurs de succès (trafic, visibilité, engagement, conversions selon vos objectifs) sont définis avec vous au cadrage, mesurés en continu et commentés dans un reporting régulier.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agence IA marketing',
  description: "Prestation clé en main de marketing augmenté par l'IA : production de contenu, SEO et GEO, campagnes et publicité, social media, emailing et CRM, reporting et analyse. Masteria produit et pilote pour vous, avec une approche multi-LLM et des automatisations sur mesure.",
  url: 'https://www.master-ia.fr/agence-ia-marketing',
  serviceType: "Marketing augmenté par l'IA",
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Prestations de marketing augmenté par l'IA",
    itemListElement: [
      { '@type': 'Offer', name: 'Production de contenu augmentée par l\'IA', description: "Articles, pages, fiches produit et newsletters dans votre ligne éditoriale, avec relecture humaine." },
      { '@type': 'Offer', name: 'SEO et GEO pilotés par l\'IA', description: "Mots-clés, clusters, briefs, optimisation on-page et visibilité dans les réponses des IA." },
      { '@type': 'Offer', name: 'Campagnes, social media, emailing et reporting', description: "Conception, déclinaison et pilotage des campagnes, du social media, de l'emailing et du reporting." },
    ],
  },
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/agence-ia-marketing#article',
  headline: "Agence IA marketing : production de contenu, campagnes et SEO augmentés par l'IA",
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-06-13',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/agence-ia-marketing#webpage' },
  about: ["Marketing augmenté par l'IA", 'SEO et GEO', 'IA générative', 'Marketing automation'],
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

export default function AgenceIAMarketingPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (sections « périmètre » / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: 'Agence IA marketing', slug: SLUG },
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
        extraJsonLd={[serviceJsonLd, articleJsonLd]}
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
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#94A3B8' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Agence IA marketing</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 26 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
              <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
              </span>
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
                Prestation clé en main
              </span>
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
              Done-for-you, pas une formation
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Agence IA marketing
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>production de contenu, campagnes et SEO augmentés par l'IA</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe pour citation LLM — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria est une agence IA marketing qui produit et pilote vos actions à votre place : contenu, SEO et GEO, campagnes et publicité, social media, emailing et reporting, augmentés par l'intelligence artificielle. C'est une prestation clé en main, multi-LLM, avec <strong style={{ color: '#fff', fontWeight: 700 }}>relecture humaine sur chaque livrable</strong>. Vous cadrez et validez, nous exécutons. Interventions en France, Suisse romande et Belgique.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            L'IA générative démultiplie la capacité de production marketing, à condition de savoir quel modèle utiliser, comment encoder votre marque dans les prompts et où placer le contrôle humain. En tant qu'agence marketing IA, nous prenons en charge cette ingénierie éditoriale de bout en bout et livrons des contenus et campagnes prêts à publier. Masteria travaille sur l'IA depuis 2022 et a accompagné plus de 1 500 professionnels.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Discutons de votre marketing
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#prestations" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Ce qu'on prend en charge
            </a>
          </div>

          {/* tags de compétences */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
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
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: '#fff', padding: 'clamp(40px, 5vw, 56px) 24px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap' }}>
          {[
            { num: '+1 500', label: "professionnels formés à l'IA" },
            { num: '98 %', label: 'de satisfaction (formations)' },
            { num: '2022', label: 'année de création de Masteria' },
            { num: 'Multi-LLM', label: 'ChatGPT, Claude, Gemini, Copilot, Mistral' },
          ].map(s => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>{s.num}</p>
              <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CE QU'ON PREND EN CHARGE (éditorial asymétrique) ── */}
      <section id="prestations" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Périmètre</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Que prend en charge une agence IA marketing ?
              </h2>

              <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Nous couvrons six familles de prestations, toutes augmentées par l'IA : la production de contenu, le SEO et le GEO, les campagnes et la publicité, le social media, l'emailing et le CRM, le reporting et l'analyse. Vous choisissez le périmètre, nous produisons et pilotons, vos équipes ne portent pas la charge quotidienne.</strong>
              </p>

              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Le périmètre se construit avec vous : vous pouvez nous confier l'ensemble du dispositif ou un canal précis. Chaque livrable reste relu par un consultant et fidèle à votre marque.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {PRESTATIONS.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconBox icon={item.icon} />
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

      {/* ── COMMENT ON TRAVAILLE (timeline à rail, rail étroit) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Kicker>Méthode</Kicker>
          <h2 style={h2Style}>
            Comment se déroule une mission d'agence IA marketing ?
          </h2>

          <p style={{ ...answerStyle, maxWidth: 'none' }}>
            <strong>Chaque mission suit quatre temps : un cadrage de vos objectifs et de votre ligne éditoriale, la mise en place des outils et automatisations qui servent de socle de production, la production des contenus et campagnes à cadence régulière avec relecture humaine, puis le pilotage par les résultats avec un reporting commenté.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
            Le même chemin pour chaque mission : cadrer, outiller, produire, piloter. Chaque temps produit un livrable concret et vous gardez la validation à chaque étape.
          </p>

          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {METHODE.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === METHODE.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                    <span style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{step.badge}</span>
                  </div>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px', maxWidth: 700 }}>{step.desc}</p>
                  <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px', maxWidth: 700 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.06em', display: 'block', marginBottom: 4 }}>CE QUE VOUS OBTENEZ</span>
                    <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{step.livrable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTILS & APPROCHE (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Outils et approche</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 860 }}>
            Multi-LLM et automatisations sur mesure, pas un gabarit générique
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 860 }}>
            <strong style={{ color: '#fff' }}>Nous travaillons en multi-LLM (ChatGPT, Claude, Gemini, Copilot, Mistral) en choisissant le bon modèle pour chaque usage, et nous construisons des automatisations sur mesure pour raccorder votre CRM, votre CMS et vos planificateurs. L'IA accélère la production, le consultant arbitre, et le dispositif s'ajuste selon les résultats mesurés.</strong>
          </p>

          <p style={{ color: '#B4C0D3', fontSize: 15, lineHeight: 1.75, margin: '0 0 40px', maxWidth: 760 }}>
            Aucun outil n'est imposé par principe : le besoin commande le choix du modèle et de l'automatisation. Cette ingénierie est notre cœur de métier depuis 2022.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20, marginBottom: 44 }}>
            {OUTILS.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16.5, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>

          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: 0, maxWidth: 820 }}>
            Les workflows qui font circuler vos contenus relèvent de notre <Link to="/agence-automatisation-ia" style={{ color: '#60A5FA', fontWeight: 600 }}>agence d'automatisation IA</Link>. Quand le besoin va au-delà du flux et appelle un véritable logiciel, nous concevons des <Link to="/outils-ia-sur-mesure" style={{ color: '#60A5FA', fontWeight: 600 }}>outils IA sur mesure</Link> adaptés à vos cas d'usage marketing. Le rédactionnel, la création visuelle et la déclinaison de campagnes reposent sur l'<Link to="/ia-generative-entreprise" style={{ color: '#60A5FA', fontWeight: 600 }}>IA générative en entreprise</Link>, dont nous maîtrisons les modèles et les garde-fous.
          </p>
        </div>
      </section>

      {/* ── DÉLÉGUER OU FORMER (bloc honnête) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <Kicker>Déléguer ou former</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Déléguer votre marketing IA ou former vos équipes ?
          </h2>

          <p style={answerStyle}>
            <strong>Déléguer signifie que nous produisons et pilotons pour vous : peu de charge pour vos équipes, démarrage rapide, mais la prestation n'est pas finançable OPCO. Former signifie rendre vos équipes autonomes pour produire elles-mêmes : c'est une montée en compétence certifiée Qualiopi et finançable. Les deux approches peuvent se combiner.</strong>
          </p>

          <p style={{ color: '#374151', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 860 }}>
            Voici la comparaison honnête, critère par critère, pour choisir la voie adaptée à votre contexte.
          </p>

          <div style={{ ...cardStyle, overflowX: 'auto', marginBottom: 20 }}>
            <table aria-label="Comparatif entre déléguer son marketing IA à Masteria et former ses équipes" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '26%' }}>Critère</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: c, borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '37%' }}>Déléguer (cette prestation)</th>
                  <th scope="col" style={{ background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.4, width: '37%' }}>Former vos équipes</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_DELEGUER.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 14, lineHeight: 1.65, verticalAlign: 'top' }}>{row.critere}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#0A0A0A', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top' }}>{row.deleguer}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#374151', lineHeight: 1.65, verticalAlign: 'top' }}>{row.former}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 860 }}>
            <GraduationCap size={18} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
            <span>Vous préférez monter la compétence en interne ? Notre <Link to="/formation-ia-marketing" style={aStyle}>formation IA marketing</Link>, certifiée Qualiopi et finançable OPCO, rend vos équipes autonomes sur les mêmes usages. Et rien n'empêche de combiner : nous produisons d'abord, puis nous transmettons à vos équipes en fin de mission.</span>
          </p>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pourquoi Masteria</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 860 }}>
            Pourquoi choisir Masteria comme agence IA marketing ?
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Parce que nous combinons l'expertise IA et l'exigence éditoriale : Masteria travaille sur l'intelligence artificielle depuis 2022, en conseil comme en développement, et a accompagné plus de 1 500 professionnels. Nous produisons et pilotons votre marketing avec une approche multi-LLM, des automatisations sur mesure et une relecture humaine sur chaque livrable.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, margin: '32px 0' }}>
            {[
              { icon: Sparkles, title: "Spécialistes de l'IA depuis 2022", desc: "L'IA générative est notre cœur de métier : nous connaissons les forces, les pièges et les bons réglages de chaque modèle, et nous le mettons au service de votre marketing." },
              { icon: PenLine, title: 'Exigence éditoriale', desc: "Votre marque est encodée dans nos prompts, chaque livrable est relu par un consultant. L'IA accélère, l'humain arbitre : rien ne sort sous votre nom sans validation." },
              { icon: Workflow, title: 'Du contenu aux automatisations', desc: "Nous ne livrons pas que des textes : nous mettons en place les workflows et intégrations qui font tourner votre dispositif marketing de bout en bout." },
              { icon: MapPin, title: 'France, Suisse romande et Belgique', desc: "Basés à Lyon, nous intervenons à distance pour la production et le pilotage, et en présentiel ponctuel pour les temps de cadrage qui le justifient." },
            ].map(card => (
              <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 15.5, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0, maxWidth: 860 }}>
            Votre besoin dépasse le marketing et touche à une stratégie IA d'ensemble (gouvernance, conformité, feuille de route) ? Notre <Link to="/conseil-intelligence-artificielle" style={aStyle}>cabinet de conseil en intelligence artificielle</Link> prend le relais. Pour les développements applicatifs, voyez notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Agence IA marketing : les questions fréquentes
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
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Ressources</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Déléguer une partie de votre dispositif, automatiser vos flux, ou former vos équipes en complément. Pour cadrer le périmètre avant de démarrer, notre <Link to="/diagnostic-ia" style={aStyle}>diagnostic IA gratuit</Link> situe vos priorités marketing en une vingtaine de minutes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Sur mesure', desc: "Conception et développement de bout en bout de vos solutions IA, jusqu'à la production." },
              { label: 'Agence d\'automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Workflows, assistants et agents qui font circuler vos contenus et synchronisent vos outils." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Applications et outils internes pilotés par l'IA, conçus pour vos cas d'usage marketing." },
              { label: "Cas d'usage de l'IA en marketing", href: '/cas-usage-ia-entreprise', tag: 'Cas d\'usage', desc: "Des exemples concrets côté marketing : contenu, SEO, campagnes et reporting augmentés par l'IA." },
              { label: 'Formation IA marketing', href: '/formation-ia-marketing', tag: 'Formation', desc: "Préférez-vous former vos équipes ? Montée en compétence certifiée Qualiopi, finançable OPCO." },
              { label: 'Formation multi-outils marketing', href: '/formation-multi-outils-marketing', tag: 'Formation', desc: "Comparer ChatGPT, Copilot, Gemini, Claude et Mistral sur vos cas marketing pour choisir le bon outil." },
              { label: 'Formation ChatGPT marketing', href: '/formation-chatgpt-marketing', tag: 'Formation', desc: "Maîtriser ChatGPT pour la production de contenus, les campagnes et l'analyse marketing." },
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
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Confiez-nous votre marketing IA
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez-nous vos objectifs et les canaux à prendre en charge. Nous revenons vers vous sous 24 heures avec un créneau de cadrage : périmètre, dispositif de production et indicateurs de suivi. Vous validez, nous produisons et pilotons.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Discutons de votre projet
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Multi-LLM · Relecture humaine · France, Suisse romande, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
