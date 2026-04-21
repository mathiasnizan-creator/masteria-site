import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  FileSpreadsheet, BadgeCheck, Wallet, MonitorSmartphone, Building2,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { SPOKES, HUBS } from '../data/seo-pages'

/* ── Icônes par métier (même mapping que HubPage) ── */
const METIER_ICONS = {
  marketing:             Megaphone,
  'ressources-humaines': Users,
  rh:                    Users,
  finance:               TrendingUp,
  commercial:            Briefcase,
  juridique:             Scale,
  communication:         Radio,
  management:            Target,
  assistante:            CalendarCheck,
  seo:                   Search,
  'service-client':      Headphones,
  informatique:          Server,
  pedagogique:           GraduationCap,
  'word-excel':          FileSpreadsheet,
}

/* ── Badges de réassurance (icône + libellé) ── */
const HERO_BADGES = [
  { icon: BadgeCheck,         label: 'Certifié Qualiopi' },
  { icon: Wallet,             label: 'Finançable OPCO' },
  { icon: MonitorSmartphone,  label: 'Présentiel & distanciel' },
  { icon: Building2,          label: 'Intra ou inter-entreprises' },
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
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

const WHY_MASTERIA = [
  { icon: '🎯', title: 'Spécialisés à 100 % sur l\'IA', desc: "Masteria ne fait que ça. Chaque formateur pratique l'IA au quotidien dans des contextes professionnels réels. La différence se sent dans les exemples choisis, les pièges anticipés et les raccourcis partagés." },
  { icon: '📁', title: 'On travaille sur vos fichiers', desc: "Zéro cas fictif. Chaque exercice s'appuie sur les documents réels de vos participants. Ce que vos équipes apprennent le matin, elles le réutilisent l'après-midi sur leurs vrais sujets." },
  { icon: '👥', title: 'Programme construit pour votre métier', desc: "Les cas d'usage, les exercices et les prompts sont sélectionnés autour des vraies missions de votre fonction. C'est ce qui explique nos 98 % de satisfaction post-formation." },
  { icon: '💳', title: 'Financement intégral possible', desc: "Notre certification Qualiopi rend toutes nos formations éligibles au financement OPCO. Masteria prend en charge le montage du dossier. Dans la majorité des cas, la formation ne coûte rien à l'entreprise." },
]

const TRAINER = {
  name: 'Mathias Nizan',
  role: 'Fondateur & formateur principal, Masteria',
  bio: "Après 10 ans passés à accompagner des entreprises sur leurs enjeux digitaux, Mathias Nizan a fondé Masteria en 2023 pour accélérer l'adoption de l'IA en entreprise. Il forme personnellement des équipes de PME, ETI et grands groupes et intervient régulièrement sur des sujets de transformation par l'IA. Sa conviction : l'IA ne remplace pas les humains, elle décuple leur potentiel.",
  quote: "L'intelligence artificielle ne remplace pas les humains. Elle décuple leur potentiel.",
  credentials: ['Expert IA certifié', '+500 professionnels formés', 'Fondateur Masteria', 'Certification Qualiopi'],
}

export default function SpokePage() {
  const location = useLocation()
  const spokeSlug = location.pathname.replace(/^\//, '')
  const spoke = SPOKES.find(s => s.slug === spokeSlug)

  if (!spoke) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1>Page non trouvée</h1>
        <Link to="/" style={{ color: '#2563EB' }}>Retour à l'accueil</Link>
      </div>
    )
  }

  const hub = HUBS.find(h => h.slug === spoke.hubSlug)
  const relatedSpokes = SPOKES.filter(s => spoke.relatedSpokes?.includes(s.slug))
  const c = spoke.toolColor
  const cLight = spoke.toolColorLight

  // Modules grouped by day
  const modulesJ1 = spoke.modules?.filter(m => m.day === 1) || []
  const modulesJ2 = spoke.modules?.filter(m => m.day === 2) || []

  // Hero clair (validé, déployé sur toutes les pages)
  const useLightHero = true
  const MetierIcon = METIER_ICONS[spoke.metierSlug] || Briefcase

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: spoke.h1,
    description: spoke.metaDesc,
    url: `https://www.master-ia.fr/${spoke.slug}`,
    timeRequired: 'P2D',
    educationalLevel: 'Débutant à intermédiaire',
    courseMode: ['onsite', 'online'],
    inLanguage: 'fr',
    provider: { '@type': 'Organization', name: 'Masteria', url: 'https://www.master-ia.fr' },
    instructor: {
      '@type': 'Person',
      name: 'Mathias Nizan',
      jobTitle: 'Fondateur & Expert IA',
      worksFor: { '@type': 'Organization', name: 'Masteria' },
    },
    hasCourseInstance: [
      { '@type': 'CourseInstance', courseMode: 'onsite', name: 'Formation intra-entreprise', offers: { '@type': 'Offer', price: '3000', priceCurrency: 'EUR', description: '2 jours, max 12 participants' } },
      { '@type': 'CourseInstance', courseMode: 'online', name: 'Formation inter-entreprises', offers: { '@type': 'Offer', price: '1520', priceCurrency: 'EUR', description: '2 × 760 €/participant' } },
    ],
  }

  const jsonLdFaq = spoke.faq?.length
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: spoke.faq.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }
    : null

  const objectives = spoke.objectives || [
    `Utilise ${spoke.tool} seul dans ses tâches ${spoke.metier.toLowerCase()} au quotidien`,
    `Formule des demandes précises adaptées à son métier et obtient des résultats utilisables immédiatement`,
    `Gagne en moyenne 1 h 30 par jour sur les tâches de rédaction, d'analyse et de synthèse`,
    `Construit une bibliothèque de prompts ${spoke.metier.toLowerCase()} réutilisables par toute l'équipe`,
    `Utilise l'IA de façon sécurisée et conforme aux bonnes pratiques RGPD`,
  ]

  return (
    <>
      <SEOHead title={spoke.metaTitle} description={spoke.metaDesc} slug={spoke.slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {jsonLdFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />}

      {/* ── HERO clair ── */}
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 60, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#D1D5DB' }}>/</span>
            {hub && <Link to={`/${hub.slug}`} style={{ color: '#6B7280' }}>{spoke.tool}</Link>}
            {hub && <span style={{ color: '#D1D5DB' }}>/</span>}
            <span style={{ color: c, fontWeight: 600 }}>{spoke.metier}</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <MetierIcon size={16} strokeWidth={2.2} />
              {spoke.tool} × {spoke.metier}
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              2 jours · 14h
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {spoke.h1}
          </h1>

          <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            {spoke.intro}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 4px 12px ${c}30` }}>
              Contacter notre équipe →
            </Link>
            <a href="#tarifs" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir les tarifs
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Icon size={15} strokeWidth={2.2} style={{ color: c }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: useLightHero ? '#fff' : '#1C1C1C', padding: '40px', display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap', borderBottom: useLightHero ? '1px solid #E5E7EB' : 'none' }}>
        {[
          { num: '+500', label: "professionnels formés à l'IA" },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '100 %', label: 'finançable via votre OPCO' },
          { num: '+6 h', label: 'gagnées par semaine' },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: useLightHero ? '#0A0A0A' : '#fff', margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── À QUI S'ADRESSE ── */}
      {spoke.audience?.length > 0 && (
        <section style={{ padding: '80px 40px', background: '#fff' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
              À qui s'adresse cette formation ?
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
              Cette formation est conçue pour les professionnels {spoke.metier.toLowerCase()} qui veulent des résultats concrets, pas une initiation théorique.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {spoke.audience.map((profile, i) => (
                <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 28, border: `2px solid ${cLight}`, borderLeftColor: c, borderLeftWidth: 4 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>{profile.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{profile.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CAS D'USAGE ── */}
      {spoke.useCases?.length > 0 && (
        <section style={{ padding: '80px 40px', background: spoke.audience?.length > 0 ? '#F9FAFB' : '#fff' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
              Ce que vous allez maîtriser
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
              6 cas d'usage {spoke.metier.toLowerCase()} concrets, travaillés sur vos propres fichiers pendant les 2 jours.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {spoke.useCases.map((uc, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: 30, marginBottom: 12 }}>{uc.icon}</div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{uc.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROGRAMME (modules enrichis) ── */}
      {(modulesJ1.length > 0 || modulesJ2.length > 0) ? (
        <section style={{ padding: '80px 40px', background: '#0A0A0A', color: '#fff' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
              Programme, 2 jours de formation pratique
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 15, marginBottom: 56 }}>
              14h de formation effective. Chaque module alterne démonstration en direct et exercice sur vos vrais fichiers métier.
            </p>

            {[{ label: 'Jour 1', modules: modulesJ1 }, { label: 'Jour 2', modules: modulesJ2 }].map(day => (
              <div key={day.label} style={{ marginBottom: 56 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                  <div style={{ background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, padding: '6px 18px', borderRadius: 99 }}>{day.label}</div>
                  <div style={{ flex: 1, height: 1, background: '#1F2937' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {day.modules.map((mod, i) => (
                    <div key={i} style={{ background: '#111', borderRadius: 12, padding: 28, border: `1px solid #1F2937`, borderLeftColor: c, borderLeftWidth: 4 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#fff', margin: 0 }}>{mod.title}</h3>
                        {mod.duration && (
                          <span style={{ background: '#1F2937', color: '#9CA3AF', padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{mod.duration}</span>
                        )}
                      </div>
                      {mod.description && (
                        <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 16 }}>{mod.description}</p>
                      )}
                      {mod.items?.length > 0 && (
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: mod.exercise ? 16 : 0 }}>
                          {mod.items.map((item, j) => (
                            <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#D1D5DB' }}>
                              <span style={{ color: c, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {mod.exercise && (
                        <div style={{ background: `${c}18`, border: `1px solid ${c}40`, borderRadius: 8, padding: '12px 16px', marginTop: 16 }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: c, display: 'block', marginBottom: 4 }}>EXERCICE CONCRET</span>
                          <span style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.6 }}>{mod.exercise}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : spoke.program?.length > 0 && (
        /* Fallback: ancien format */
        <section style={{ padding: '80px 40px', background: '#0A0A0A', color: '#fff' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
              Programme, 2 jours de formation pratique
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 15, marginBottom: 48 }}>
              14h de formation effective réparties sur 2 jours. Chaque demi-journée alterne démonstration en direct et exercice sur vos fichiers réels.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {spoke.program.map((part, i) => (
                <div key={i} style={{ borderLeft: `4px solid ${c}`, paddingLeft: 28 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: c, marginBottom: 20 }}>{part.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {part.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: '#D1D5DB', background: '#111', borderRadius: 8, padding: '12px 16px', border: '1px solid #1F2937' }}>
                        <span style={{ color: c, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA MILIEU DE PAGE ── */}
      <section style={{ padding: '48px 40px', background: `linear-gradient(135deg, ${c} 0%, ${c}dd 100%)`, color: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25 }}>
              Prêt à former votre équipe {spoke.metier.toLowerCase()}&nbsp;?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Réponse sous 24h · Programme adapté à votre contexte · Finançable OPCO
            </p>
          </div>
          <Link to="/contact" style={{ background: '#fff', color: c, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Contacter notre équipe →
          </Link>
        </div>
      </section>

      {/* ── OBJECTIFS ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 32 }}>
            Ce que vos équipes savent faire à l'issue des 2 jours
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {objectives.map((obj, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 26, height: 26, background: c, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <span style={{ fontSize: 12, color: '#fff', fontWeight: 700 }}>✓</span>
                </div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, margin: 0 }}>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section id="tarifs" style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Modalités et tarifs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 24 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>INTER-ENTREPRISES</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>760 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>/ jour / participant</div>
              </div>
              <div style={{ fontSize: 13, color: c, fontWeight: 600, marginBottom: 20 }}>Soit 1 520 € pour 2 jours</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['2 jours consécutifs ou espacés', 'Groupe de 5 à 10 personnes', 'Paris, Lyon, Bordeaux, distanciel', 'OPCO, FIF-PL, FIFPL'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <span style={{ color: c }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#0A0A0A', borderRadius: 12, padding: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>INTRA-ENTREPRISE</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#fff', lineHeight: 1 }}>1 500 €</div>
                <div style={{ fontSize: 13, color: '#9CA3AF', paddingBottom: 6 }}>/ jour</div>
              </div>
              <div style={{ fontSize: 13, color: c, fontWeight: 600, marginBottom: 20 }}>Soit 3 000 € pour 2 jours (max 12 participants)</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Réservé à votre équipe', '2 jours sur mesure, dans vos locaux', 'Contenu adapté à votre secteur', 'OPCO, plan de développement des compétences'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#D1D5DB', display: 'flex', gap: 8 }}>
                    <span style={{ color: c }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>
            Masteria est certifié Qualiopi. Toutes nos formations sont finançables à 100 % via votre OPCO (Atlas, Afdas, Akto, Constructys, Opco 2i…). Notre équipe vous accompagne dans la constitution du dossier de A à Z. Chaque participant repart avec un support de formation complet et une bibliothèque de prompts prête à l'emploi.
          </p>
        </div>
      </section>

      {/* ── FORMATEUR (E-E-A-T : Expérience & Expertise) ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Votre formateur
          </h2>
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>
                🧑‍💼
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: '0 0 4px' }}>{TRAINER.name}</h3>
              <p style={{ fontSize: 14, color: c, fontWeight: 600, margin: '0 0 16px' }}>{TRAINER.role}</p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>{TRAINER.bio}</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {TRAINER.credentials.map(cred => (
                  <span key={cred} style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>{cred}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Pourquoi Masteria pour cette formation {spoke.tool} ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 48 }}>
            {WHY_MASTERIA.map(card => (
              <div key={card.title} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <blockquote style={{ borderLeft: `4px solid ${c}`, paddingLeft: 24, margin: 0 }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 700, color: '#0A0A0A', fontStyle: 'italic', marginBottom: 8 }}>
              "{TRAINER.quote}"
            </p>
            <cite style={{ fontSize: 14, color: '#6B7280', fontStyle: 'normal' }}>{TRAINER.name}, fondateur de Masteria</cite>
          </blockquote>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      {spoke.testimonials?.length > 0 && (
        <section style={{ padding: '80px 40px', background: '#0A0A0A' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
                Ce qu'ils disent de la formation
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: 15, margin: 0 }}>
                Retours d'expérience de professionnels formés par Masteria, entreprises réelles, postes réels.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
              {spoke.testimonials.map((t, i) => (
                <div key={i} style={{ background: '#111', borderRadius: 14, padding: 28, border: '1px solid #1F2937', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Étoiles */}
                  <div style={{ display: 'flex', gap: 3 }}>
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{ color: '#FBBF24', fontSize: 14 }}>★</span>
                    ))}
                  </div>
                  {/* Texte */}
                  <p style={{ fontSize: 14, color: '#D1D5DB', lineHeight: 1.75, margin: 0, flex: 1, fontStyle: 'italic' }}>
                    "{t.text}"
                  </p>
                  {/* Auteur */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #1F2937' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: c, color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
                      flexShrink: 0,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: 0, fontFamily: 'Nunito, sans-serif' }}>{t.name}</p>
                      <p style={{ fontSize: 12, color: '#6B7280', margin: '2px 0 0', lineHeight: 1.4 }}>{t.role}</p>
                      <p style={{ fontSize: 12, color: '#4B5563', margin: '1px 0 0', lineHeight: 1.4 }}>{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, textAlign: 'center' }}>
              <p style={{ fontSize: 14, color: '#4B5563' }}>
                Formation certifiée Qualiopi · <span style={{ color: '#FBBF24' }}>★★★★★</span> <span style={{ color: '#6B7280' }}>98 % de satisfaction (500+ participants formés)</span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {spoke.faq?.length > 0 && (
        <section style={{ padding: '80px 40px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
              Questions fréquentes, Formation {spoke.tool} {spoke.metier}
            </h2>
            <div>
              {spoke.faq.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MAILLAGE INTERNE ── */}
      {relatedSpokes.length > 0 && (
        <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
              Formations associées
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32 }}>
              Compléter votre parcours ou former d'autres équipes avec un outil différent.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {relatedSpokes.map(rel => (
                <Link key={rel.slug} to={`/${rel.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', borderRadius: 10, padding: 22, border: `2px solid ${rel.toolColor}20`, transition: 'border-color 0.2s' }}>
                    <div style={{ display: 'inline-block', background: rel.toolColorLight, color: rel.toolColor, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
                      {rel.tool}
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>
                      {rel.tool} pour {rel.metier}
                    </h3>
                    <span style={{ fontSize: 13, color: rel.toolColor, fontWeight: 700 }}>Voir le programme →</span>
                  </div>
                </Link>
              ))}
            </div>
            {hub && (
              <p style={{ fontSize: 14, color: '#6B7280', marginTop: 24 }}>
                Voir tous les programmes{' '}
                <Link to={`/${hub.slug}`} style={{ color: c, fontWeight: 600 }}>{spoke.tool}</Link>
                {' '}ou explorer{' '}
                <Link to="/formation-ia-par-metier" style={{ color: '#2563EB', fontWeight: 600 }}>les formations par métier</Link>.
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Parlons de votre équipe {spoke.metier.toLowerCase()}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Dites-nous combien de personnes vous souhaitez former et leur niveau actuel. On revient vers vous sous 24 heures avec un programme adapté sur 2 jours.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: '#2563EB', color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Formation certifiée Qualiopi · Finançable OPCO · +500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>
    </>
  )
}
