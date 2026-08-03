import { useLocation, Link } from 'react-router-dom'
import {
  BadgeCheck, Wallet, MapPin, Clock, ArrowRight, CheckCircle2,
  ChevronDown, Building2, Users, Phone, CalendarCheck, FileText,
  Briefcase, GraduationCap, Sparkles, ShieldCheck, Globe, Train,
} from 'lucide-react'
import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import ToolLogo from '../components/ToolLogo'
import { FadeIn } from '../components/components'
import { useIsMobile } from '../hooks/useMediaQuery'
import { GEO_CITIES, GEO_TOOLS, geoSlug, geoIaSlug } from '../data/geo-data'

// ToolLogo attend 'chatgpt' ou 'claude' — notre slug est 'claude-ia' (URL friendly)
const toolLogoSlug = (slug) => slug === 'claude-ia' ? 'claude' : slug

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '18px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4 }}>{q}</span>
        <ChevronDown size={18} strokeWidth={2} style={{ flexShrink: 0, color: '#6B7280', marginTop: 2, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
      </button>
      {open && <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, paddingBottom: 18, marginTop: -4 }}>{a}</p>}
    </div>
  )
}

export default function GeoPage() {
  const location = useLocation()
  const isMobile = useIsMobile()
  const slug = location.pathname.replace(/^\//, '')

  const tool = GEO_TOOLS.find(t => slug.startsWith(`formation-${t.slug}-`))
  const city = tool ? GEO_CITIES.find(c => slug === geoSlug(tool.slug, c.slug)) : null

  if (!tool || !city) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1>Page non trouvée</h1>
        <Link to="/" style={{ color: '#2563EB' }}>Retour à l'accueil</Link>
      </div>
    )
  }

  const isIntraOnly = city.intraOnly

  const h1 = isIntraOnly
    ? `Formation ${tool.shortName} ${city.nameLoc} — intra-entreprise sur mesure`
    : `Formation ${tool.shortName} ${city.nameLoc} — intra ou accompagnement individuel`
  const metaTitle = `Formation ${tool.shortName} ${city.name} | ${isIntraOnly ? 'Intra-entreprise' : 'Intra & individuel'} | Masteria`
  // Formulations calibrées pour rester sous 158 caractères, y compris dans le pire
  // cas « Claude (Anthropic) » + « à Marseille » (sinon troncature en SERP).
  const metaDesc = isIntraOnly
    ? `Formation ${tool.name} ${city.nameLoc} : intra-entreprise dans vos locaux, programme sur mesure. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.`
    : `Formation ${tool.name} ${city.nameLoc} : intra-entreprise ou accompagnement individuel sur mesure. Certifié Qualiopi, finançable OPCO. Devis sous 24 h.`
  const otherCities = GEO_CITIES.filter(c => c.slug !== city.slug).slice(0, 5)
  const otherTool = GEO_TOOLS.find(t => t.slug !== tool.slug)

  // Hiérarchie locale : la page outil×ville est rattachée à la page ville
  // (formation-ia-{ville}), page canonique de l'intention « formation ia {ville} ».
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: `Formation IA ${city.name}`, slug: `formation-ia-${city.slug}` },
    { name: `Formation ${tool.shortName} ${city.name}`, slug },
  ]

  const courseData = {
    name: h1,
    description: metaDesc,
    price: isIntraOnly ? '1980' : '1980',
    duration: 'PT14H',
    level: 'Professional',
  }

  // FAQ : combine tool-specific + city-specific
  const faqItems = [
    ...tool.faqLocal(city),
    ...(city.additionalFAQ || []),
    {
      q: "La formation est-elle éligible au financement OPCO ?",
      a: `Oui. Masteria est certifié Qualiopi, condition requise pour la prise en charge par votre OPCO en ${city.region}. ${city.opco} Nous gérons l'intégralité du dossier de financement à votre place.`,
    },
    {
      q: "Quels sont les pré-requis pour participer ?",
      a: `Aucun prérequis technique. Nos formations ${tool.shortName} sont conçues pour des professionnels non-développeurs. Il suffit d'utiliser un ordinateur au quotidien. Le niveau est adapté au groupe lors de l'appel de cadrage préalable.`,
    },
    {
      q: "Que reçoit-on à l'issue de la formation ?",
      a: "Chaque participant reçoit : une attestation de formation Qualiopi, une bibliothèque de prompts métier personnalisée, les supports de formation, et un accès à notre espace de ressources en ligne. Un suivi questions/réponses est disponible pendant 1 mois après la formation.",
    },
  ]

  // Schéma Course local (CourseInstance dans la ville)
  const localCourseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `https://www.master-ia.fr/${slug}#course-local`,
    name: h1,
    description: metaDesc,
    provider: { '@id': 'https://www.master-ia.fr/#organization' },
    educationalLevel: 'Professional',
    inLanguage: city.locale || 'fr',
    offers: {
      '@type': 'Offer',
      price: isIntraOnly ? '1980' : '1980',
      priceCurrency: 'EUR',
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
      availability: 'https://schema.org/InStock',
      url: `https://www.master-ia.fr/${slug}`,
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: isIntraOnly ? 'onsite' : ['onsite', 'online'],
        courseWorkload: 'PT14H',
        location: {
          '@type': 'Place',
          name: `Vos locaux ${city.nameLoc}`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: city.name,
            addressRegion: city.region,
            addressCountry: city.countryCode,
          },
          ...(city.coordinates && {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: city.coordinates.latitude,
              longitude: city.coordinates.longitude,
            },
          }),
        },
      },
    ],
  }

  // LocalBusiness schema (zone de service)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `https://www.master-ia.fr/${slug}#service-${city.slug}`,
    name: `Masteria ${city.nameLoc} — formation ${tool.shortName}`,
    image: 'https://www.master-ia.fr/assets/logo-square.png',
    url: `https://www.master-ia.fr/${slug}`,
    telephone: '+33667754128',
    priceRange: '€€',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: city.region,
      ...(city.coordinates && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.coordinates.latitude,
          longitude: city.coordinates.longitude,
        },
      }),
    },
    parentOrganization: { '@id': 'https://www.master-ia.fr/#organization' },
  }

  // Speakable (AEO) — laisse Google/Assistant lire les sections clés à voix haute
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://www.master-ia.fr/${slug}#webpage`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#geo-summary', '#geo-faq'],
    },
  }

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDesc}
        slug={slug}
        courseData={courseData}
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
        extraJsonLd={[localCourseSchema, localBusinessSchema, speakableSchema]}
        locale={city.locale}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 100%)',
        padding: isMobile ? '48px 20px 40px' : '72px 32px 64px',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#4B5563', display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#4B5563', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#9CA3AF' }}>›</span>
            <Link to={`/${tool.hubSlug}`} style={{ color: '#4B5563', textDecoration: 'none' }}>Formation {tool.shortName}</Link>
            <span style={{ color: '#9CA3AF' }}>›</span>
            <span style={{ color: '#111827', fontWeight: 600 }}>{city.name}</span>
          </nav>

          {/* Logo outil + badge format */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, flexWrap: 'wrap' }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: tool.colorLight, border: `1px solid ${tool.color}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <ToolLogo tool={toolLogoSlug(tool.slug)} size={32} color={tool.color} />
            </div>
            {isIntraOnly && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: '#DBEAFE', border: '1px solid #BFDBFE',
                borderRadius: 8, padding: '7px 14px',
                fontSize: 12.5, fontWeight: 700, color: '#1E40AF',
              }}>
                <Building2 size={13} />
                Formation disponible en intra-entreprise {city.nameLoc}
              </div>
            )}
          </div>

          {/* GEO first-paragraph (sans pricing) */}
          <p id="geo-summary" style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, marginBottom: 20, maxWidth: 720, fontWeight: 500 }}>
            {isIntraOnly
              ? `Masteria forme vos équipes à ${tool.name} directement dans vos locaux ${city.nameLoc}. Programme construit sur vos cas d'usage réels, jusqu'à 12 participants, certifié Qualiopi et financé jusqu'à 100 % par votre OPCO en ${city.region}. Devis personnalisé sous 24 h.`
              : `La formation ${tool.name} ${city.nameLoc} se décline en intra-entreprise dans vos locaux (jusqu'à 12 participants) ou en accompagnement individuel sur mesure (1-to-1) en présentiel ou en distanciel. Certifié Qualiopi, financé jusqu'à 100 % par votre OPCO. Devis personnalisé sous 24 h.`
            }
          </p>

          <h1 style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: isMobile ? 26 : 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 900, letterSpacing: '-0.02em',
            color: '#0A0A0A', lineHeight: 1.15, marginBottom: 20,
          }}>
            {h1}
          </h1>

          <p style={{ fontSize: isMobile ? 15 : 17, color: '#4B5563', lineHeight: 1.7, marginBottom: 32, maxWidth: 700 }}>
            {city.desc}
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              { icon: BadgeCheck, label: 'Certifié Qualiopi' },
              { icon: Wallet,     label: '100 % OPCO' },
              { icon: Users,      label: isIntraOnly ? 'Intra-entreprise' : 'Inter & intra' },
              { icon: Clock,      label: 'Devis sous 24 h' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#fff', border: '1px solid #DBEAFE', borderRadius: 99,
                padding: '7px 14px', fontSize: 12.5, fontWeight: 600, color: '#1E40AF',
              }}>
                <Icon size={13} color="#2563EB" strokeWidth={2.5} /> {label}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#0A0A0A', color: '#fff',
              padding: '14px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 700,
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Demander un devis <ArrowRight size={16} />
            </Link>
            <Link to={`/${tool.hubSlug}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#374151', border: '1px solid #E5E7EB',
              padding: '14px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 600,
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Voir tous les programmes {tool.shortName}
            </Link>
          </div>
        </div>
      </section>

      {/* ── POURQUOI SE FORMER ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Pourquoi {tool.shortName} {city.nameLoc}</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 18, letterSpacing: '-0.01em' }}>
              {tool.shortName} appliqué au tissu économique {city.nameLoc}
            </h2>
            <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, marginBottom: 24, maxWidth: 760 }}>
              {tool.deepValue}
            </p>
          </FadeIn>

          {/* Industries deep dive */}
          <FadeIn delay={80}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 32 }}>
              {city.industriesDeep?.map((ind, i) => (
                <div key={i} style={{ background: '#F9FAFB', borderRadius: 14, padding: '22px 24px', border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Briefcase size={16} color="#1E40AF" strokeWidth={2.2} />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>
                      {ind.sector}
                    </h3>
                  </div>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.55, marginBottom: 8 }}>
                    <strong style={{ color: '#374151' }}>Acteurs locaux :</strong> {ind.companies}
                  </p>
                  <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                    <strong>Cas d'usage prioritaires :</strong> {ind.focus}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Chiffres locaux pour AEO/GEO */}
          {city.localFacts && city.localFacts.length > 0 && (
            <FadeIn delay={120}>
              <div style={{ background: '#F0F9FF', borderRadius: 14, padding: isMobile ? '20px 22px' : '28px 32px', border: '1px solid #BAE6FD' }}>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0C4A6E', margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sparkles size={16} color="#0284C7" /> Le saviez-vous ? {city.name} en chiffres
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {city.localFacts.map((fact, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#0C4A6E', lineHeight: 1.6 }}>
                      <CheckCircle2 size={15} color="#0284C7" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ── CAS D'USAGE LOCAUX ── */}
      {city.localCases && city.localCases.length > 0 && (
        <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#F5F3EE' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <FadeIn>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1D4ED8', marginBottom: 10 }}>Cas d'usage observés</div>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 14, letterSpacing: '-0.01em' }}>
                Trois équipes formées à {tool.shortName} {city.nameLoc}
              </h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, marginBottom: 28, maxWidth: 720 }}>
                Profils anonymisés, tous accompagnés par Masteria sur les 12 derniers mois. Les cas d'usage reflètent les vrais enjeux des entreprises {city.nameLoc} aujourd'hui.
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {city.localCases.map((c, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 14, padding: 24, border: '1px solid #E5E7EB' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 8 }}>Cas {i + 1}</div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 10, lineHeight: 1.35 }}>
                      {c.profile}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                      {c.usage}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── PROGRAMME ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Programme</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 10, letterSpacing: '-0.01em' }}>
              Ce que vos équipes apprennent à faire
            </h2>
            <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, marginBottom: 24, maxWidth: 720 }}>
              {tool.differentiator}
            </p>
            <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 28 }}>
              <strong style={{ color: '#0A0A0A' }}>Point fort :</strong> {tool.pitch}.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
              {tool.useCases.map((uc, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: '#F9FAFB', borderRadius: 10, padding: '14px 16px', border: '1px solid #E5E7EB' }}>
                  <CheckCircle2 size={16} color="#2563EB" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{uc}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FORMAT (intra ou Lyon inter+intra) ── */}
      {isIntraOnly ? (
        <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <FadeIn>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Format disponible</div>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.01em' }}>
                Comment se déroule une formation intra {city.nameLoc}
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, marginBottom: 32, maxWidth: 720 }}>
                {city.introPitch}
              </p>
            </FadeIn>

            <FadeIn delay={80}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                {[
                  { icon: Users, title: "Jusqu'à 12 participants", desc: "Toute votre équipe forme ensemble, partage les mêmes apprentissages et adopte les mêmes pratiques dès le lendemain." },
                  { icon: FileText, title: "Programme 100 % sur mesure", desc: "Le formateur prépare le contenu à partir d'un audit de vos besoins : vos outils, vos processus, vos vrais cas d'usage." },
                  { icon: MapPin, title: `Dans vos locaux ${city.nameLoc}`, desc: `Aucun déplacement pour vos équipes. Masteria vient à vous. Couvre ${city.zones}.` },
                  { icon: CalendarCheck, title: "Date selon votre planning", desc: "Vous choisissez la date. Nous nous adaptons à vos contraintes d'agenda et de saisonnalité métier." },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#fff', borderRadius: 12, padding: '20px 22px', border: '1px solid #E5E7EB' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px -4px rgba(37,99,235,0.4)' }}>
                      <item.icon size={18} color="#fff" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 14.5, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 4, fontFamily: 'Nunito, sans-serif' }}>{item.title}</h3>
                      <p style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      ) : (
        /* Lyon : inter + intra */
        <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <FadeIn>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Formats disponibles {city.nameLoc}</div>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.01em' }}>
                Intra-entreprise ou accompagnement individuel : choisissez le format adapté
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, marginBottom: 28, maxWidth: 720 }}>
                {city.introPitch}
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
                <div style={{ background: '#fff', borderRadius: 14, padding: 28, border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Groupe sur mesure · 1 980 €/jour</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 10 }}>Intra-entreprise</h3>
                  <p style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
                    Nous venons former votre équipe dans vos locaux lyonnais (ou Grenoble, Saint-Étienne, Annecy). Programme 100 % sur mesure, jusqu'à 12 participants, date selon votre planning. Finançable OPCO.
                  </p>
                </div>
                <div style={{ background: '#fff', borderRadius: 14, padding: 28, border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Coaching 1-to-1 · 1 980 €/jour</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 10 }}>Accompagnement individuel</h3>
                  <p style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
                    Coaching personnalisé pour dirigeants, experts métier ou profils stratégiques. Programme co-construit autour de vos enjeux, rythme adapté, suivi entre les sessions. Présentiel à Lyon ou en distanciel.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── COUVERTURE & ACCÈS ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Notre couverture</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 28, fontWeight: 900, color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.01em' }}>
              Zones desservies et accès {city.nameLoc}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
              <div style={{ background: '#F9FAFB', borderRadius: 12, padding: '20px 24px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <MapPin size={18} color="#2563EB" />
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Zones couvertes</h3>
                </div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                  {city.zones}.
                </p>
              </div>
              {city.transportAccess && (
                <div style={{ background: '#F9FAFB', borderRadius: 12, padding: '20px 24px', border: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <Train size={18} color="#2563EB" />
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Accès et déplacement</h3>
                  </div>
                  <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                    {city.transportAccess}
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FINANCEMENT ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '64px 32px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Financement</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 20 : 26, fontWeight: 900, color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.01em' }}>
              Financement de la formation en {city.region}
            </h2>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 12, maxWidth: 720 }}>
              {city.opco}
            </p>
            <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 20, maxWidth: 700 }}>
              Masteria gère l'intégralité du dossier de financement à votre place. Vous n'avez aucune démarche administrative à faire.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
              {(city.countryCode === 'FR'
                ? ["OPCO (jusqu'à 100 %)", 'Plan de développement des compétences', 'CPF collectif', 'Autofinancement']
                : ['Plan de formation entreprise', 'Fonds sectoriels cantonaux', 'Conventions collectives', 'Autofinancement']
              ).map(f => (
                <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 99, padding: '7px 14px', fontSize: 13, fontWeight: 600, color: '#1E40AF' }}>
                  <CheckCircle2 size={13} color="#2563EB" strokeWidth={2.5} /> {f}
                </span>
              ))}
            </div>
            <Link to="/financement-formation-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 700, color: '#1E40AF', textDecoration: 'none' }}>
              Voir tous les leviers de financement <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── ÉCOSYSTÈME LOCAL (E-E-A-T) ── */}
      {city.localExperts && city.localExperts.length > 0 && (
        <section style={{ padding: isMobile ? '40px 20px' : '56px 32px', background: '#fff' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <FadeIn>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Écosystème IA {city.nameLoc}</div>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 18 : 22, fontWeight: 800, color: '#0A0A0A', marginBottom: 12, letterSpacing: '-0.01em' }}>
                Acteurs de référence dans la région
              </h2>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 18, maxWidth: 720 }}>
                Notre programme s'inscrit dans l'écosystème IA local. Nous échangeons régulièrement avec les acteurs suivants pour rester à jour sur les enjeux régionaux.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {city.localExperts.map((e, i) => (
                  <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '10px 16px', fontSize: 13 }}>
                    <GraduationCap size={14} color="#2563EB" strokeWidth={2.5} />
                    <span style={{ color: '#0A0A0A', fontWeight: 700 }}>{e.name}</span>
                    <span style={{ color: '#6B7280' }}>· {e.type}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section id="geo-faq" style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 28, fontWeight: 900, color: '#0A0A0A', marginBottom: 32, letterSpacing: '-0.01em' }}>
              Questions fréquentes — Formation {tool.shortName} {city.nameLoc}
            </h2>
            {faqItems.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
          </FadeIn>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: isMobile ? '40px 20px' : '52px 32px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 28 }}>
              <div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 12 }}>
                  Formation {tool.shortName} dans d'autres villes
                </h3>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {otherCities.map(c => (
                    <Link key={c.slug} to={`/${geoSlug(tool.slug, c.slug)}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                      <MapPin size={13} color="#6B7280" /> {c.name}
                    </Link>
                  ))}
                  <Link to={`/${tool.hubSlug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 700, color: '#1E40AF', textDecoration: 'none' }}>
                    Tous les programmes {tool.shortName} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 12 }}>
                  Autres formations {city.nameLoc}
                </h3>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <Link to={`/${geoIaSlug(city.slug)}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                    <Globe size={13} color="#6B7280" /> Toutes les formations IA {city.nameLoc}
                  </Link>
                  {otherTool && (
                    <Link to={`/${geoSlug(otherTool.slug, city.slug)}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                      <ToolLogo tool={toolLogoSlug(otherTool.slug)} size={14} color={otherTool.color} /> Formation {otherTool.shortName} {city.nameLoc}
                    </Link>
                  )}
                  <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 700, color: '#1E40AF', textDecoration: 'none' }}>
                    Catalogue 89 formations <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#0A0A0A', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 24 : 34, fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            {isIntraOnly
              ? `Former vos équipes à ${tool.shortName} ${city.nameLoc} ?`
              : `Prêt à démarrer ${city.nameLoc} ?`}
          </h2>
          <p style={{ fontSize: 16, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 28 }}>
            {isIntraOnly
              ? `Devis personnalisé sous 24 h. Programme construit sur vos cas d'usage réels. Financement OPCO en ${city.region} pris en charge par Masteria.`
              : `Formation intra-entreprise dans vos locaux ou accompagnement individuel sur mesure. Devis sous 24 h, financement OPCO inclus.`}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#0A0A0A', padding: '15px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 800, fontFamily: 'DM Sans, sans-serif' }}>
              Demander un devis <ArrowRight size={16} />
            </Link>
            <a href="tel:+33667754128" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '15px 24px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, fontFamily: 'DM Sans, sans-serif' }}>
              <Phone size={15} /> 06 67 75 41 28
            </a>
          </div>
        </div>
      </section>

      <OfficialSources tool={tool?.slug} />
    </>
  )
}
