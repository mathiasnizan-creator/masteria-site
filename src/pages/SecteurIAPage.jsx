import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  ArrowRight, Compass, Cpu, Workflow, Check, AlertTriangle, Briefcase,
  ShieldCheck, ServerCog, GraduationCap, Layers, Grid3x3, Stethoscope,
  Landmark, Factory, HeartPulse, Scale, ShoppingCart, Truck, Building2, Plane, Wheat, Server,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { getSecteur, SECTEUR_DATE_PUBLISHED, SECTEUR_DATE_MODIFIED } from '../data/secteur-ia-data'
import { useIsDesktop } from '../hooks/useMediaQuery'

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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function SecteurIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (section offres + FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

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
      {/* keywords : vocabulaire propre au secteur, pour éviter le fallback
          « formation IA » de SEOHead, incohérent sur des pages conseil + dev.
          datePublished / dateModified : signal de fraîcheur sur le nœud JSON-LD
          WebPage, dates réelles issues de l'historique git (cf. secteur-ia-data.js). */}
      <SEOHead
        title={secteur.metaTitle}
        description={secteur.metaDesc}
        slug={secteur.slug}
        type="article"
        breadcrumbs={breadcrumbs}
        faqItems={secteur.faq}
        extraJsonLd={serviceJsonLd}
        keywords={secteur.keywords}
        datePublished={SECTEUR_DATE_PUBLISHED}
        dateModified={SECTEUR_DATE_MODIFIED}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...WRAP, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/ia-secteurs" style={{ color: '#5B6679' }}>IA par secteur</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>{secteur.name}</span>
          </nav>

          {/* eyebrow : picto secteur (data-driven) en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <SectorGlyph name={secteur.icon} size={18} color="#60A5FA" />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              IA pour {secteur.nameWithArticle}
            </span>
          </div>

          {(() => {
            // H1 data-driven : « ... : ... » → partie après le « : » colorée en accent.
            const parts = secteur.h1.split(' : ')
            const hasSplit = parts.length === 2 && parts[0].length > 0 && parts[1].length > 0
            return (
              <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
                {hasSplit ? (
                  <>
                    {parts[0]}
                    <br />
                    <span style={{ color: '#60A5FA', fontWeight: 800 }}>{parts[1]}</span>
                  </>
                ) : (
                  secteur.h1
                )}
              </h1>
            )
          })()}

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>{secteur.directAnswer}</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            {secteur.tagline} Masteria est un cabinet spécialisé sur l'intelligence artificielle depuis 2022, fondé à Lyon : nous cadrons votre stratégie, puis nous concevons et développons les solutions, en restant indépendants des éditeurs.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un cadrage gratuit
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#secteur" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Les enjeux du secteur
            </a>
          </div>

          {/* chips de positionnement (charte sombre) */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
            {['Conseil', 'Développement sur mesure', 'Automatisation'].map(label => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Check size={14} strokeWidth={2.4} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES 3 OFFRES (éditorial asymétrique) ── */}
      <section id="offres" style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={WRAP}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Nos expertises</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Ce que nous faisons pour {secteur.nameWithArticle}</h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 14px' }}>
                <strong style={{ color: '#0A0A0A' }}>Masteria couvre trois expertises de cœur d'offre : le conseil en stratégie et gouvernance IA, le développement d'agents et d'outils sur mesure, et l'automatisation des processus.</strong>{' '}
                Elles s'enchaînent dans une même trajectoire : un cadrage stratégique débouche sur la conception et le développement des solutions, prolongés par l'automatisation puis consolidés par la formation des équipes qui en héritent.
              </p>
              <p style={{ ...mutedStyle, maxWidth: 'none', margin: 0 }}>
                Trois offres, une seule logique : concevoir, développer et vous rendre autonome. Chaque proposition est forfaitaire, avec périmètre, livrables et calendrier écrits avant signature.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
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
        </div>
      </section>

      {/* ── SECTION UNIQUE SECTEUR (ancre sombre — preuve / contenu technique) ── */}
      <section id="secteur" style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...WRAP, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Enjeux du secteur</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>L'IA dans {secteur.nameWithArticle} : où se crée la valeur ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 'none' }}>{secteur.context}</p>

          {/* Douleurs propres au secteur */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#F8FAFC', margin: '40px 0 20px', letterSpacing: '-0.01em' }}>
            Les difficultés que nous adressons
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginBottom: 8 }}>
            {secteur.painPoints.map((pp, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <AlertTriangle size={20} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                </div>
                <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{pp}</p>
              </div>
            ))}
          </div>

          {/* Prestations concrètes propres au secteur */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#F8FAFC', margin: '48px 0 20px', letterSpacing: '-0.01em' }}>
            Des prestations concrètes pour {secteur.nameWithArticle}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {secteur.useCases.map((uc, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 26 }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Briefcase size={22} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                </div>
                <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{uc.title}</h4>
                <p style={{ fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, margin: 0 }}>{uc.desc}</p>
              </div>
            ))}
          </div>

          {/* Contrainte réglementaire / confidentialité propre (bandeau filet latéral) */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderLeft: `4px solid ${c}`, borderRadius: 16, padding: '28px 30px', margin: '48px 0 0', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={26} strokeWidth={2} style={{ color: '#60A5FA' }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#F8FAFC', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                {secteur.constraints.title}
              </h3>
              <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.75, margin: 0 }}>{secteur.constraints.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DÉVELOPPEURS SUR SITE (bandeau filet latéral) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={WRAP}>
          <div style={{ ...cardStyle, borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
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

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={WRAP}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes — IA pour {secteur.nameWithArticle}</h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, fontSize: 14.5, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Posez-nous votre question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {secteur.faq.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
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
            <Link to="/cas-usage-ia-entreprise" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 16px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Compass size={14} style={{ color: '#6B7280' }} aria-hidden="true" /> Cas d'usage de l'IA
            </Link>
            <Link to="/ia-generative-entreprise" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 16px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Cpu size={14} style={{ color: '#6B7280' }} aria-hidden="true" /> IA générative en entreprise
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

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ ...WRAP, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Premier échange gratuit</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Parlons de votre projet IA pour {secteur.nameWithArticle}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez votre contexte en quelques lignes : processus chronophages, outils à construire, contraintes de données. Nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit et sans engagement.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Contacter notre équipe
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              {`IA pour ${secteur.nameWithArticle} · Conseil, développement sur mesure, automatisation · Spécialistes IA depuis 2022`}
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui vous forme (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria est un cabinet spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les missions et les formations sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues, qui connaissent le secteur. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['Depuis 2022', 'spécialisé uniquement IA'],
              ['+1 500', 'professionnels formés'],
              ['Indépendant', 'des éditeurs de solutions'],
              ['FR · CH · BE', 'sur site ou à distance'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
