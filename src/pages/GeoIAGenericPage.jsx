import { useLocation, Link } from 'react-router-dom'
import {
  BadgeCheck, Wallet, MapPin, Clock, ArrowRight, CheckCircle2,
  ChevronDown, Building2, Users, Phone, Briefcase, Sparkles,
  Train, GraduationCap, Globe,
} from 'lucide-react'
import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import ToolLogo from '../components/ToolLogo'
import { FadeIn } from '../components/components'
import { useIsMobile } from '../hooks/useMediaQuery'
import { GEO_DESTINATIONS, GEO_CITIES, GEO_TOOLS, geoSlug, geoIaSlug } from '../data/geo-data'
import { METIERS } from '../data/seo-pages'

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

export default function GeoIAGenericPage() {
  const location = useLocation()
  const isMobile = useIsMobile()
  const slug = location.pathname.replace(/^\//, '')
  const citySlug = slug.replace(/^formation-ia-/, '')
  const city = GEO_DESTINATIONS.find(c => c.slug === citySlug)

  if (!city) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1>Page non trouvée</h1>
        <Link to="/" style={{ color: '#2563EB' }}>Retour à l'accueil</Link>
      </div>
    )
  }

  const isCountry = !!city.isCountry
  const isFrance = city.countryCode === 'FR'
  // Surcharges par ville (geo-data.js) : permet de viser la requête longue
  // « formation intelligence artificielle {ville} » sur les villes stratégiques.
  const h1 = city.h1Override || `Formation IA ${city.nameLoc} — ChatGPT, Claude et 89 programmes par métier`
  const metaTitle = city.metaTitleOverride || `Formation IA ${city.name} | ChatGPT, Claude, 13 métiers | Masteria`
  // Meta description ≤ ~155 car. (l'argument financement n'est plus tronqué par Google).
  // Le volet financement est conditionnel : pas d'OPCO hors France (cf. CH / BE).
  const financePhrase = isFrance
    ? "Certifié Qualiopi, finançable OPCO jusqu'à 100 %."
    : 'Certifié Qualiopi, formation finançable.'
  const metaDesc = `Formation IA ${city.nameLoc} pour entreprises : ChatGPT, Claude et 89 programmes par métier. ${financePhrase} Devis sous 24 h.`

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation intelligence artificielle', slug: 'formation-intelligence-artificielle' },
    { name: city.name, slug },
  ]

  // Course schema (catalogue de la ville)
  const courseData = {
    name: h1,
    description: metaDesc,
    price: '1980',
    duration: 'PT14H',
    level: 'Tous niveaux',
  }

  // ItemList JSON-LD : les 2 pages outil × ville priorisées (uniquement si la ville existe dans GEO_CITIES)
  const toolPagesItemList = !isCountry ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `https://www.master-ia.fr/${slug}#tool-list`,
    name: `Formations IA par outil ${city.nameLoc}`,
    numberOfItems: GEO_TOOLS.length,
    itemListElement: GEO_TOOLS.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.master-ia.fr/${geoSlug(t.slug, city.slug)}`,
      name: `Formation ${t.shortName} ${city.nameLoc}`,
    })),
  } : null

  // Place / LocalBusiness schema
  const localBusinessSchema = !isCountry && city.coordinates ? {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `https://www.master-ia.fr/${slug}#service-${city.slug}`,
    name: `Masteria ${city.nameLoc} — formation IA`,
    image: 'https://www.master-ia.fr/assets/logo-square.png',
    url: `https://www.master-ia.fr/${slug}`,
    telephone: '+33667754128',
    priceRange: '€€',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: city.region,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.latitude,
        longitude: city.coordinates.longitude,
      },
    },
    parentOrganization: { '@id': 'https://www.master-ia.fr/#organization' },
  } : null

  // Speakable retiré (cf. audit SEO 2026-05-21) : non supporté hors US/EN
  // et créait un second @type WebPage qui brouillait l'entité primaire.

  const faqItems = [
    {
      q: `Quels outils IA sont couverts dans vos formations ${city.nameLoc} ?`,
      a: `Masteria forme aux 5 principaux outils d'IA générative en entreprise : ChatGPT (OpenAI), Claude (Anthropic), Microsoft Copilot, Google Gemini et Mistral AI. Pour ${city.name}, deux outils ont des pages dédiées avec contenu local complet : ChatGPT et Claude IA. Pour Microsoft Copilot, Google Gemini et Mistral AI, nous proposons des formations identiques en intra dans vos locaux ${city.nameLoc} : il suffit de nous contacter pour un devis personnalisé.`,
    },
    {
      q: `Quels métiers sont couverts par vos formations IA ${city.nameLoc} ?`,
      a: `Nous proposons des programmes spécialisés pour 13 fonctions : marketing, ressources humaines, commercial, finance, communication, management, assistante de direction, SEO, service client, informatique, pédagogique, achats et formats transverses pour tous publics. Chaque programme est conçu pour la fonction visée, avec des cas d'usage et des exercices pratiques tirés du quotidien de ces métiers.`,
    },
    {
      q: `La formation IA ${city.nameLoc} est-elle finançable OPCO ?`,
      a: `Oui. Masteria est certifié Qualiopi, condition indispensable pour la prise en charge par votre OPCO en ${city.region}. ${city.opco} Nous gérons l'intégralité du dossier de financement à votre place.`,
    },
    {
      q: `Quels sont les pré-requis pour participer ?`,
      a: `Aucun prérequis technique. Nos formations IA sont conçues pour des professionnels non-développeurs. Il suffit d'utiliser un ordinateur au quotidien. Le niveau est adapté au groupe lors de l'appel de cadrage préalable.`,
    },
    {
      q: isCountry || city.intraOnly
        ? `Pourquoi proposez-vous uniquement de l'intra ${city.nameLoc} ?`
        : `Quels formats de formation sont disponibles ${city.nameLoc} ?`,
      a: isCountry || city.intraOnly
        ? `Nous privilégions l'intra-entreprise à ${city.name} : programme construit sur vos cas réels, exemples tirés de vos vrais documents (anonymisés), équipe formée ensemble pour aligner les pratiques. Pour les profils dirigeants ou experts qui souhaitent un format 1-to-1, l'accompagnement individuel sur mesure est disponible en présentiel ou en distanciel.`
        : `${city.nameLoc}, nous proposons deux formats : intra-entreprise dans vos locaux jusqu'à 12 participants, et accompagnement individuel sur mesure 1-to-1 en présentiel ou en distanciel, au même tarif de 1 980 €/jour. Les deux formats sont éligibles au financement OPCO jusqu'à 100 %.`,
    },
    {
      q: `Combien de temps dure une formation IA ?`,
      a: `Le format standard est d'une journée (7 heures), suffisant pour rendre une équipe autonome sur les cas d'usage clés de son métier. Pour un programme plus complet (multi-outils, plusieurs fonctions, gouvernance), nous proposons des formats de 2 à 3 jours. Nous proposons aussi le format Sprint IA en 3 heures pour la sensibilisation à grande échelle (jusqu'à 100 participants par session).`,
    },
    {
      q: `Que reçoivent les participants à l'issue de la formation ?`,
      a: `Chaque participant reçoit : une attestation de formation Qualiopi, une bibliothèque de prompts métier personnalisée, les supports de formation, et un accès à notre espace de ressources en ligne. Un suivi questions/réponses est disponible pendant 1 mois après la formation.`,
    },
    {
      q: `Combien coûte une formation IA ${city.nameLoc} ?`,
      a: `Le tarif intra-entreprise est de 1 980 € par jour pour un groupe (jusqu'à 12 participants), soit 165 € par personne pour un groupe complet. L'accompagnement individuel sur mesure (1-to-1) est à 1 980 € par jour. ${isFrance ? "Ces montants sont finançables jusqu'à 100 % par votre OPCO : selon votre prise en charge, le reste à charge peut être nul ou fortement réduit." : 'Plusieurs dispositifs de financement existent selon votre pays ; nous vous orientons lors du cadrage.'} Chaque devis est personnalisé selon le nombre de participants, la durée et le format.`,
    },
    {
      q: `Peut-on suivre la formation IA à distance depuis ${city.name} ?`,
      a: `Oui. Tous nos programmes existent en distanciel (classe virtuelle), avec la même pédagogie 100 % pratique qu'en présentiel : cas d'usage réels, exercices guidés et bibliothèque de prompts. Le présentiel ${city.nameLoc} reste idéal pour former une équipe entière, tandis que le distanciel convient aux profils dispersés et aux accompagnements individuels.`,
    },
    {
      q: `Proposez-vous une formation IA pour débutants ${city.nameLoc} ?`,
      a: `Oui. Aucune de nos formations n'exige de prérequis technique : elles sont conçues pour des professionnels non-développeurs. Pour les équipes qui partent de zéro, nous avons un programme d'initiation dédié qui pose les bases (comprendre l'IA générative, écrire de bons prompts, premiers cas d'usage métier) avant d'aller vers les usages avancés.`,
    },
    ...(city.additionalFAQ || []),
  ]

  // Autres villes pour le maillage interne
  const otherDestinations = GEO_DESTINATIONS.filter(c => c.slug !== city.slug).slice(0, 8)

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDesc}
        slug={slug}
        courseData={courseData}
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
        extraJsonLd={[toolPagesItemList, localBusinessSchema].filter(Boolean)}
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
            <Link to="/formation-intelligence-artificielle" style={{ color: '#4B5563', textDecoration: 'none' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#9CA3AF' }}>›</span>
            <span style={{ color: '#111827', fontWeight: 600 }}>{city.name}</span>
          </nav>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#DBEAFE', border: '1px solid #BFDBFE',
            borderRadius: 8, padding: '7px 14px', marginBottom: 20,
            fontSize: 12.5, fontWeight: 700, color: '#1E40AF',
          }}>
            <MapPin size={13} />
            Formation IA {city.nameLoc} — Certifié Qualiopi
          </div>

          <p id="geo-summary" style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, marginBottom: 20, maxWidth: 720, fontWeight: 500 }}>
            {`Formation intelligence artificielle ${city.nameLoc} pour les entreprises. Masteria forme vos équipes à ChatGPT, Claude, Microsoft Copilot, Google Gemini et Mistral AI, sur 13 fonctions métier. Certifié Qualiopi, financé jusqu'à 100 % par votre OPCO. Devis personnalisé sous 24 h.`}
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
              { icon: Briefcase,  label: '5 outils, 13 métiers' },
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
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#374151', border: '1px solid #E5E7EB',
              padding: '14px 28px', borderRadius: 10,
              textDecoration: 'none', fontSize: 15, fontWeight: 600,
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Voir tout le catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES & TISSU LOCAL ── */}
      {city.industriesDeep && city.industriesDeep.length > 0 && (
        <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#fff' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <FadeIn>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Tissu économique {city.nameLoc}</div>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.01em' }}>
                Les secteurs où l'IA fait la différence {city.nameLoc}
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
                Notre programme est calibré pour les enjeux concrets des entreprises {city.nameLoc}. Voici les quatre secteurs où nous voyons les gains les plus rapides en 2026.
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                {city.industriesDeep.map((ind, i) => (
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

            {/* Chiffres clés */}
            {city.localFacts && city.localFacts.length > 0 && (
              <FadeIn delay={120}>
                <div style={{ background: '#F0F9FF', borderRadius: 14, padding: isMobile ? '20px 22px' : '28px 32px', border: '1px solid #BAE6FD', marginTop: 24 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0C4A6E', margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Sparkles size={16} color="#0284C7" /> {city.name} en chiffres
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
      )}

      {/* ── OUTILS DÉDIÉS ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#F5F3EE' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1D4ED8', marginBottom: 10 }}>Outils IA dédiés</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 14, letterSpacing: '-0.01em' }}>
              Pages dédiées : ChatGPT et Claude IA {city.nameLoc}
            </h2>
            <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
              ChatGPT et Claude IA sont nos deux formations phare avec contenu local approfondi. Pour les autres outils (Microsoft Copilot, Google Gemini, Mistral AI), nous intervenons aussi en intra dans vos locaux : il suffit de demander un devis. Le programme et la qualité pédagogique sont identiques.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {GEO_TOOLS.map(tool => {
                const targetSlug = isCountry ? tool.hubSlug : geoSlug(tool.slug, city.slug)
                return (
                  <Link key={tool.slug} to={`/${targetSlug}`} style={{
                    display: 'block', textDecoration: 'none',
                    background: '#fff', border: '1px solid #E5E7EB', borderRadius: 14,
                    padding: 24, transition: 'transform 150ms, border-color 150ms',
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: tool.colorLight, border: `1px solid ${tool.color}33`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 14,
                    }}>
                      <ToolLogo tool={toolLogoSlug(tool.slug)} size={24} color={tool.color} />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 8 }}>
                      Formation {tool.shortName} {city.nameLoc}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.6, marginBottom: 14 }}>
                      {tool.pitch}
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 700, color: '#2563EB' }}>
                      Voir le programme local <ArrowRight size={13} />
                    </span>
                  </Link>
                )
              })}
              {/* Carte vers les autres outils */}
              <Link to="/formation-intelligence-artificielle" style={{
                display: 'block', textDecoration: 'none',
                background: '#fff', border: '2px dashed #BFDBFE', borderRadius: 14,
                padding: 24, transition: 'border-color 150ms',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                }}>
                  <Briefcase size={20} color="#1E40AF" strokeWidth={2.2} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 8 }}>
                  Copilot, Gemini, Mistral
                </h3>
                <p style={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.6, marginBottom: 14 }}>
                  Mêmes programmes en intra dans vos locaux {city.nameLoc}, devis sur demande.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 700, color: '#2563EB' }}>
                  Voir le catalogue complet <ArrowRight size={13} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 13 MÉTIERS ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>13 métiers couverts</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 14, letterSpacing: '-0.01em' }}>
              Formation IA par métier {city.nameLoc}
            </h2>
            <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
              Chaque programme est construit autour des cas d'usage réels de la fonction visée. Marketing, RH, commerciaux, finance, communication, management, assistantes de direction, SEO, service client, informatique, pédagogique, achats et formats transverses pour tous publics.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
              {METIERS.map(m => (
                <Link key={m.slug || m.id} to={`/formation-ia-${m.slug || m.id}`} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10,
                  padding: '14px 16px', textDecoration: 'none',
                  fontSize: 13.5, fontWeight: 600, color: '#374151',
                }}>
                  <CheckCircle2 size={14} color="#2563EB" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>{m.label || m.name || m.id}</span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROGRAMME, DURÉE & TARIFS ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#F5F3EE' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1D4ED8', marginBottom: 10 }}>Programme &amp; tarifs</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 14, letterSpacing: '-0.01em' }}>
              Programme, durée et tarifs de la formation IA {city.nameLoc}
            </h2>
            <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
              Un format court et opérationnel : en une journée, vos équipes repartent autonomes sur les cas d'usage IA de leur métier. Voici le déroulé type et les tarifs {city.nameLoc}.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
              {/* Déroulé type */}
              <div style={{ background: '#fff', borderRadius: 14, padding: '24px 26px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={16} color="#1E40AF" strokeWidth={2.2} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Déroulé type d'une journée</h3>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    ['Matin', "Fondamentaux de l'IA générative, panorama des 5 outils (ChatGPT, Claude, Copilot, Gemini, Mistral) et méthode de prompting (CRTF, system prompts)."],
                    ['Après-midi', "Cas d'usage appliqués à votre métier et exercices guidés sur vos vrais documents (anonymisés si besoin)."],
                    ['Clôture', "Bibliothèque de prompts personnalisée, plan d'action sur 30 jours et bonnes pratiques (RGPD, AI Act, confidentialité)."],
                  ].map(([t, d]) => (
                    <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>
                      <CheckCircle2 size={15} color="#2563EB" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span><strong style={{ color: '#0A0A0A' }}>{t} —</strong> {d}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.6, margin: '14px 0 0' }}>
                  Programme indicatif, ajusté à votre niveau et à vos objectifs lors de l'appel de cadrage.
                </p>
              </div>
              {/* Formats & tarifs */}
              <div style={{ background: '#fff', borderRadius: 14, padding: '24px 26px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Wallet size={16} color="#1E40AF" strokeWidth={2.2} />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>Formats &amp; tarifs</h3>
                </div>
                <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    ['Durée', '1 jour (7 h) en standard. Formats 2 à 3 jours ou Sprint IA de 3 h pour la sensibilisation.'],
                    ['Formats', `Intra-entreprise jusqu'à 12 participants, ou accompagnement individuel sur mesure (1-to-1). Présentiel ${city.nameLoc} ou distanciel.`],
                    ['Tarif', isFrance
                      ? 'Intra 1 980 €/jour pour le groupe (≈ 165 €/personne). Accompagnement individuel sur mesure 1 980 €/jour.'
                      : 'Intra 1 980 €/jour pour le groupe. Accompagnement individuel sur mesure 1 980 €/jour. Facturation adaptée à votre pays.'],
                    ['Financement', isFrance
                      ? "Jusqu'à 100 % par votre OPCO. Masteria gère l'intégralité du dossier."
                      : 'Dispositifs de financement locaux selon votre pays ; nous vous orientons lors du cadrage.'],
                  ].map(([t, d]) => (
                    <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <dt style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#2563EB' }}>{t}</dt>
                      <dd style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{d}</dd>
                    </div>
                  ))}
                </dl>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#0A0A0A', color: '#fff', padding: '10px 18px', borderRadius: 9, textDecoration: 'none', fontSize: 13.5, fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                    Demander un devis <ArrowRight size={14} />
                  </Link>
                  <Link to="/financement-formation-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', color: '#374151', border: '1px solid #E5E7EB', padding: '10px 18px', borderRadius: 9, textDecoration: 'none', fontSize: 13.5, fontWeight: 600, fontFamily: 'DM Sans, sans-serif' }}>
                    Voir le financement
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CAS D'USAGE LOCAUX ── */}
      {city.localCases && city.localCases.length > 0 && (
        <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <FadeIn>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1D4ED8', marginBottom: 10 }}>Cas d'usage observés</div>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 22 : 30, fontWeight: 900, color: '#0A0A0A', marginBottom: 14, letterSpacing: '-0.01em' }}>
                Trois équipes formées {city.nameLoc}
              </h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, marginBottom: 28, maxWidth: 720 }}>
                Profils anonymisés, tous accompagnés par Masteria sur les 12 derniers mois. Les cas d'usage reflètent les vrais enjeux des entreprises {city.nameLoc} en 2026.
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {city.localCases.map((c, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 14, padding: 24, border: '1px solid #E5E7EB' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 8 }}>Cas {i + 1}</div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 10, lineHeight: 1.35 }}>
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

      {/* ── COUVERTURE & ACCÈS ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '64px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>Notre couverture</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 20 : 26, fontWeight: 900, color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.01em' }}>
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

      {/* ── ÉCOSYSTÈME LOCAL ── */}
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
              Questions fréquentes — Formation IA {city.nameLoc}
            </h2>
            {faqItems.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
          </FadeIn>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: isMobile ? '40px 20px' : '52px 32px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <FadeIn>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 12 }}>
              Formation IA dans d'autres villes
            </h3>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {otherDestinations.map(c => (
                <Link key={c.slug} to={`/${geoIaSlug(c.slug)}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                  <MapPin size={13} color="#6B7280" /> Formation IA {c.name}
                </Link>
              ))}
              <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 700, color: '#1E40AF', textDecoration: 'none' }}>
                Tout le catalogue <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding: isMobile ? '48px 20px' : '72px 32px', background: '#0A0A0A', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: isMobile ? 24 : 34, fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Former vos équipes à l'IA {city.nameLoc} ?
          </h2>
          <p style={{ fontSize: 16, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 28 }}>
            Devis personnalisé sous 24 h. Programme construit sur vos cas d'usage réels. Financement OPCO en {city.region} pris en charge par Masteria.
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

      <OfficialSources />
    </>
  )
}
