import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Cpu, Workflow, Check, AlertTriangle, Briefcase,
  ShieldCheck, ServerCog, GraduationCap, Layers, Grid3x3, Stethoscope,
  Landmark, Factory, HeartPulse, Scale, ShoppingCart, Truck, Building2, Plane, Wheat, Server,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { SECTEURS, getSecteur } from '../data/secteur-ia-data'

/* Mapping nom d'icône (données) -> composant lucide (même table que le hub). */
const ICONS = {
  Landmark, Factory, HeartPulse, Scale, ShoppingCart, Truck,
  Building2, Briefcase, Plane, Wheat, Server,
}

/* Rend l'icône lucide propre au secteur (clé = champ `icon` des données). */
function SectorGlyph({ name, size, color = '#2563EB' }) {
  const I = ICONS[name] || Briefcase
  return <I size={size} color={color} aria-hidden="true" />
}

/*
 * Template « IA pour {secteur} » — pages high-ticket conseil + développement par
 * secteur d'activité. Lit le secteur depuis le path (comme AgenceGeoPage) parmi
 * SECTEURS, 404 propre si le slug est inconnu.
 *
 * ANTI-DOORWAY : la section UNIQUE (contexte, douleurs, prestations, contrainte)
 * vient des données secteur-ia-data.js, vraiment distinctes d'un secteur à l'autre.
 *
 * INTÉGRITÉ : posture orientée capacité, aucun cas client nommé, aucun chiffre de
 * résultat fabriqué. onsiteDev = capacité PROPOSÉE de détacher des développeurs.
 * Cœur = conseil + dev high-ticket ; formation = bloc secondaire (OPCO seulement FR).
 * Design premium identique à /agence-ia : kickers, pictogrammes lucide, cartes
 * radius 16, CTA final sombre, accent #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const c = '#2563EB'
const cLight = '#DBEAFE'

const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const WRAP = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 880 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 880 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }

/* Les 3 offres de cœur, communes à tous les secteurs (le contenu propre est ailleurs). */
const OFFERS = [
  {
    icon: Compass,
    title: 'Conseil et stratégie IA',
    href: '/conseil-intelligence-artificielle',
    cta: 'Découvrir le conseil IA',
    desc: "Audit de maturité, cartographie des cas d'usage de votre secteur, feuille de route priorisée par impact et faisabilité, gouvernance des données et conformité (RGPD, AI Act). Vous savez où investir, dans quel ordre et avec quels garde-fous.",
    points: ['Audit IA et cadrage', 'Feuille de route priorisée', 'Gouvernance et conformité'],
  },
  {
    icon: Cpu,
    title: "Développement d'agents et d'outils sur mesure",
    href: '/agence-developpement-ia',
    cta: 'Découvrir le développement sur mesure',
    desc: "Conception et développement des solutions propres à votre métier : agents branchés sur votre système d'information, copilotes internes, intégrations LLM/RAG sur vos données. Du cadrage à la mise en production, avec une équipe qui code et documente.",
    points: ['Agents et copilotes sur mesure', 'Intégrations à votre SI', 'Du prototype à la production'],
    secondaryHref: '/outils-ia-sur-mesure',
    secondaryCta: 'Voir les outils IA sur mesure',
  },
  {
    icon: Workflow,
    title: 'Automatisation des processus',
    href: '/agence-automatisation-ia',
    cta: "Découvrir l'agence d'automatisation",
    desc: "Identification des processus métier à fort potentiel, construction de workflows et d'agents IA branchés sur vos outils existants, mesure du temps réellement gagné. Chaque automatisation est documentée puis transmise à vos équipes.",
    points: ['Processus prioritaires', 'Workflows et agents IA', 'Documentation et passation'],
  },
]

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

export default function SecteurIAPage() {
  const location = useLocation()
  const slug = location.pathname.replace(/^\//, '')
  const secteur = getSecteur(slug)

  if (!secteur) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, color: '#0A0A0A' }}>Page non trouvée</h1>
        <Link to="/ia-secteurs" style={{ color: c, fontWeight: 600 }}>Voir l'IA par secteur d'activité</Link>
      </div>
    )
  }

  const related = secteur.relatedSectors
    .map(s => getSecteur(s))
    .filter(Boolean)

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'IA par secteur', slug: 'ia-secteurs' },
    { name: secteur.name, slug: secteur.slug },
  ]

  /* JSON-LD Service — conseil et développement IA pour ce secteur. */
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/${secteur.slug}#service`,
    name: `Conseil et développement IA — ${secteur.name}`,
    serviceType: `Conseil et développement IA — ${secteur.name}`,
    description: secteur.metaDesc,
    url: `${SITE}/${secteur.slug}`,
    provider: { '@id': `${SITE}/#organization` },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'Country', name: 'Belgique' },
    ],
    audience: { '@type': 'BusinessAudience', name: secteur.name },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Prestations IA pour ${secteur.name}`,
      itemListElement: secteur.useCases.map(u => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: u.title, description: u.desc },
      })),
    },
  }

  return (
    <>
      <SEOHead
        title={secteur.metaTitle}
        description={secteur.metaDesc}
        slug={secteur.slug}
        type="article"
        breadcrumbs={breadcrumbs}
        faqItems={secteur.faq}
        extraJsonLd={serviceJsonLd}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#F9FAFB', color: '#0A0A0A', padding: 'clamp(48px, 6vw, 64px) 24px clamp(64px, 8vw, 88px)', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <Link to="/ia-secteurs" style={{ color: '#6B7280' }}>IA par secteur</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>{secteur.name}</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <SectorGlyph name={secteur.icon} size={16} color={c} />
              IA pour {secteur.nameWithArticle}
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Conseil · Développement sur mesure · Automatisation
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {secteur.h1}
          </h1>

          {/* Réponse directe en gras (citable LLM / featured snippet) */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 760 }}>
            <strong>{secteur.directAnswer}</strong>
          </p>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.8, marginBottom: 40, maxWidth: 760 }}>
            {secteur.tagline} Masteria est un cabinet spécialisé sur l'intelligence artificielle depuis 2022, fondé à Lyon : nous cadrons votre stratégie, puis nous concevons et développons les solutions, en restant indépendants des éditeurs.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Demander un cadrage gratuit
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#secteur" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Les enjeux du secteur
            </a>
          </div>
        </div>
      </section>

      {/* ── LES 3 OFFRES ── */}
      <section id="offres" style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={WRAP}>
          <div style={kickerStyle}>Nos expertises</div>
          <h2 style={h2Style}>Ce que nous faisons pour {secteur.nameWithArticle}</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Masteria couvre trois expertises de cœur d'offre : le conseil en stratégie et gouvernance IA, le développement d'agents et d'outils sur mesure, et l'automatisation des processus.</strong>{' '}
            Elles s'enchaînent dans une même trajectoire : un cadrage stratégique débouche sur la conception et le développement des solutions, prolongés par l'automatisation puis consolidés par la formation des équipes qui en héritent.
          </p>
          <p style={mutedStyle}>
            Trois offres, une seule logique : concevoir, développer et vous rendre autonome. Chaque proposition est forfaitaire, avec périmètre, livrables et calendrier écrits avant signature.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {OFFERS.map(({ icon: Icon, title, href, cta, desc, points, secondaryHref, secondaryCta }) => (
              <div key={href} style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                <div style={{ ...iconBoxStyle, marginBottom: 18 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginBottom: 10, letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {points.map(pt => (
                    <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link to={href} style={{ color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    {cta}
                    <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                  {secondaryHref && (
                    <Link to={secondaryHref} style={{ color: '#6B7280', fontWeight: 600, fontSize: 13.5, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      {secondaryCta}
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION UNIQUE SECTEUR (anti-doorway) ── */}
      <section id="secteur" style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={WRAP}>
          <div style={kickerStyle}>Enjeux du secteur</div>
          <h2 style={h2Style}>L'IA dans {secteur.nameWithArticle} : où se crée la valeur ?</h2>
          <p style={answerStyle}>{secteur.context}</p>

          {/* Douleurs propres au secteur */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: '40px 0 20px', letterSpacing: '-0.01em' }}>
            Les difficultés que nous adressons
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 8 }}>
            {secteur.painPoints.map((pp, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={iconBoxStyle}>
                  <AlertTriangle size={20} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}>{pp}</p>
              </div>
            ))}
          </div>

          {/* Prestations concrètes propres au secteur */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: '48px 0 20px', letterSpacing: '-0.01em' }}>
            Des prestations concrètes pour {secteur.nameWithArticle}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {secteur.useCases.map((uc, i) => (
              <div key={i} style={{ ...cardStyle, padding: 26 }}>
                <div style={{ ...iconBoxStyle, marginBottom: 14 }}>
                  <Briefcase size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{uc.title}</h4>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{uc.desc}</p>
              </div>
            ))}
          </div>

          {/* Contrainte réglementaire / confidentialité propre */}
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: '28px 30px', margin: '48px 0 0', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={26} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                {secteur.constraints.title}
              </h3>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>{secteur.constraints.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DÉVELOPPEURS SUR SITE (modèle régie / équipe dédiée) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={WRAP}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ServerCog size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              <div style={kickerStyle}>Développeurs sur site · régie ou équipe dédiée</div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(22px, 2.8vw, 30px)', marginBottom: 14 }}>
                Détacher des développeurs IA dans vos équipes
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 820 }}>
                <strong style={{ color: '#0A0A0A' }}>{secteur.onsiteDev}</strong>
              </p>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 820 }}>
                Au-delà du forfait au projet, nous proposons un modèle d'engagement en régie ou en équipe dédiée : un ou plusieurs développeurs IA intégrés à vos équipes, sur site ou à distance, pour les environnements sensibles ou une montée en charge rapide. Le périmètre, la durée et les modalités sont cadrés et écrits avant de démarrer.
              </p>
              <Link to="/methode-projet-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                Voir notre méthode et nos modèles d'engagement
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMATION (offre secondaire) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={WRAP}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 52, height: 52, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={26} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              <div style={kickerStyle}>Et la formation des équipes ?</div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(22px, 2.8vw, 30px)' }}>Ancrer les usages après le déploiement</h2>
              <p style={answerStyle}>
                <strong style={{ color: '#0A0A0A' }}>Au-delà du conseil et du développement sur mesure, Masteria forme vos équipes pour qu'elles sachent faire fonctionner, corriger et étendre ce qui a été construit.</strong>{' '}
                Les programmes existent par métier et par outil (ChatGPT, Claude, Copilot, Gemini, Mistral), adaptés aux usages de votre secteur, en intra-entreprise ou en accompagnement individuel.
              </p>
              <p style={mutedStyle}>
                Le volet formation est certifié Qualiopi et finançable par votre OPCO en France. À noter : le conseil et le développement sur mesure restent des prestations de service, non finançables par l'OPCO.
              </p>
              <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                Découvrir les formations IA
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>Questions fréquentes — IA pour {secteur.nameWithArticle}</h2>
          <div>
            {secteur.faq.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAILLAGE : secteurs liés + hub + diagnostic ── */}
      <section style={{ padding: 'clamp(48px, 6vw, 72px) 24px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div style={WRAP}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 8, letterSpacing: '-0.01em' }}>
            Explorer d'autres secteurs
          </h3>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 760 }}>
            L'IA crée de la valeur dans tous les secteurs B2B. Découvrez les enjeux et les prestations propres aux secteurs proches du vôtre.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginBottom: 28 }}>
            {related.map(rel => (
              <Link key={rel.slug} to={`/${rel.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 24, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ ...iconBoxStyle, marginBottom: 14 }}>
                    <SectorGlyph name={rel.icon} size={22} color={c} />
                  </div>
                  <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    IA pour {rel.nameWithArticle}
                  </h4>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '0 0 12px' }}>{rel.tagline}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Voir le secteur
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link to="/ia-secteurs" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '9px 16px', fontSize: 13.5, fontWeight: 700, color: '#1E40AF', textDecoration: 'none' }}>
              <Grid3x3 size={14} aria-hidden="true" /> Tous les secteurs
            </Link>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 16px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Stethoscope size={14} style={{ color: '#6B7280' }} aria-hidden="true" /> Faire un diagnostic IA
            </Link>
            <Link to="/solutions-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 16px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Grid3x3 size={14} style={{ color: '#6B7280' }} aria-hidden="true" /> Toutes nos solutions IA
            </Link>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 16px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Layers size={14} style={{ color: '#6B7280' }} aria-hidden="true" /> Agence de développement IA
            </Link>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c, border: `1px solid ${c}`, borderRadius: 8, padding: '9px 16px', fontSize: 13.5, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
              Demander un cadrage gratuit
              <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE (bandeau sombre) ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ ...WRAP, background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div style={{ ...kickerStyle, color: cLight }}>Premier échange gratuit</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Parlons de votre projet IA pour {secteur.nameWithArticle}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Décrivez votre contexte en quelques lignes : processus chronophages, outils à construire, contraintes de données. Nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit et sans engagement.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
            Contacter notre équipe
            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
            {`IA pour ${secteur.nameWithArticle} · Conseil, développement sur mesure, automatisation · Spécialistes IA depuis 2022`}
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
