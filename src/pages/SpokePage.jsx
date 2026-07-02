import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  FileSpreadsheet, BadgeCheck, Wallet, MonitorSmartphone, Building2,
  Check, Star,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import Pictogram from '../components/Pictogram'
import { SPOKES, HUBS } from '../data/seo-pages'

/* Métiers disposant d'une page hub /formation-ia-{slug} (source : App.jsx) — sert au maillage interne depuis les spokes */
const METIER_HUB_SLUGS = ['marketing', 'ressources-humaines', 'commercial', 'finance', 'communication', 'management', 'assistante', 'seo', 'service-client', 'informatique', 'pedagogique', 'achats', 'transverse']

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
  { icon: Building2,          label: 'Intra ou accompagnement individuel' },
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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* Les clés `icon` sont des emojis (clé de correspondance Pictogram → icône lucide),
   écrites en échappement Unicode pour ne laisser aucun glyphe brut dans le source. */
const WHY_MASTERIA = [
  { icon: '\uD83C\uDFAF', title: 'Spécialisés à 100 % sur l\'IA', desc: "Masteria ne fait que ça. Chaque formateur pratique l'IA au quotidien dans des contextes professionnels réels. La différence se sent dans les exemples choisis, les pièges anticipés et les raccourcis partagés." },
  { icon: '\uD83D\uDCC1', title: 'On travaille sur vos fichiers', desc: "Zéro cas fictif. Chaque exercice s'appuie sur les documents réels de vos participants. Ce que vos équipes apprennent le matin, elles le réutilisent l'après-midi sur leurs vrais sujets." },
  { icon: '\uD83D\uDC65', title: 'Programme construit pour votre métier', desc: "Les cas d'usage, les exercices et les prompts sont sélectionnés autour des vraies missions de votre fonction. C'est ce qui explique nos 98 % de satisfaction post-formation." },
  { icon: '\uD83D\uDCB3', title: 'Financement intégral possible', desc: "Notre certification Qualiopi rend toutes nos formations éligibles au financement OPCO. Masteria prend en charge le montage du dossier. Dans la majorité des cas, la formation ne coûte rien à l'entreprise." },
]

const TRAINER = {
  name: 'Mathias Nizan',
  role: 'Fondateur & formateur principal, Masteria',
  quote: "L'intelligence artificielle ne remplace pas les humains. Elle décuple leur potentiel.",
  credentials: ['Expert IA certifié', '+1 500 professionnels formés', 'Fondateur Masteria', 'Certification Qualiopi'],
}

// Angles spécifiques par outil (pour éviter le duplicate content sur les 73 spokes)
const TOOL_ANGLES = {
  'ChatGPT': "des déploiements ChatGPT en entreprise — de l'abonnement Team aux GPTs personnalisés et à l'API",
  'Microsoft Copilot': "des déploiements Microsoft 365 Copilot et Copilot Studio chez des clients PME et ETI",
  'Google Gemini': "des projets Gemini et Gemini for Workspace dans des environnements Google",
  'Claude': "des cas d'usage Claude (Anthropic) pour l'analyse de documents longs et l'écriture de qualité",
  'Mistral AI': "l'intégration de Mistral AI et Le Chat dans des entreprises françaises attachées à la souveraineté",
  'Multi-outils IA': "la comparaison concrète ChatGPT, Copilot, Gemini, Claude et Mistral sur des cas d'usage réels",
  'Claude Code': "les déploiements Claude Code en équipe de développement, du terminal au CI, avec les garde-fous d'entreprise",
  'Prompt Engineering': "les techniques de prompt engineering qui rendent les résultats des IA fiables et reproductibles en entreprise",
  'IA': "les enjeux stratégiques de l'IA pour les directions générales : investissements, gouvernance, conduite du changement",
  'AI Act': "la mise en conformité AI Act d'entreprises françaises, de la cartographie des risques au plan de gouvernance",
  'Gouvernance IA': "la mise en place de dispositifs de gouvernance IA en entreprise : registre des usages, charte, comité et gouvernance des données",
}

// Angles spécifiques par métier
const METIER_ANGLES = {
  'marketing': "les vraies missions des équipes marketing : rédaction de contenus, SEO, emailing, analyse de campagnes",
  'ressources-humaines': "le quotidien RH : rédaction de fiches de poste, sourcing, synthèses d'entretiens, communication interne",
  'commercial': "les enjeux commerciaux : prospection, qualification de leads, rédaction de propositions, suivi client",
  'finance': "les tâches finance : automatisation Excel, synthèse de liasses, notes d'analyse, reportings",
  'juridique': "le travail juridique : analyse de contrats, veille réglementaire, rédaction de clauses, recherches jurisprudentielles",
  'communication': "les missions communication : rédaction éditoriale, community management, communiqués, newsletters",
  'management': "les enjeux du management : synthèses, préparation de réunions, feedback, décisions",
  'assistante': "les missions d'assistanat : synthèses de mails, comptes rendus, agendas, préparation de dossiers",
  'seo': "les cas d'usage SEO : recherche de mots-clés, briefs rédacteurs, audits, optimisation de contenus",
  'service-client': "le service client : tri de tickets, réponses personnalisées, synthèses de verbatims, automatisation",
  'informatique': "les besoins IT : rédaction de documentation, aide au code, rédaction de spécifications, veille technique",
  'pedagogique': "les métiers pédagogiques : conception de supports, quiz, synthèses, préparation de cours",
  'transverse': "les enjeux transverses de conformité, de gouvernance et de pilotage des usages IA, du DPO à la direction générale",
}

// Minuscule le libellé métier en préservant les sigles (DPO, DSI, RH, SEO…)
function lowerMetier(metier) {
  return metier.split(' ').map(w => (/^[A-Z]{2,}[,;.]?$/.test(w) ? w : w.toLowerCase())).join(' ')
}

function buildTrainerBio(spoke) {
  const toolAngle = TOOL_ANGLES[spoke.tool] || `des projets ${spoke.tool} en entreprise`
  const metierAngle = METIER_ANGLES[spoke.metierSlug] || `les missions des équipes ${lowerMetier(spoke.metier)}`
  return `Mathias Nizan a fondé Masteria en 2022 après 10 ans passés à accompagner des entreprises sur leurs enjeux digitaux. Spécialisé sur ${spoke.tool}, il maîtrise ${toolAngle}. Pour concevoir le programme de cette formation ${spoke.tool} × ${spoke.metier}, il s'est entouré d'experts métier qui connaissent ${metierAngle}. Sa conviction : l'IA ne remplace pas les humains, elle décuple leur potentiel.`
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

  // Détection durée : Sprint IA (3h), 1 jour, 2 jours (défaut)
  const isSprint = spoke.toolSlug === 'sprint-ia'
  const durationKey = isSprint ? '3h' : (spoke.duration || '2j')
  const isOneDay = durationKey === '1j'
  const is3h = durationKey === '3h'

  const durationBadge = is3h ? '3 heures' : isOneDay ? '1 jour · 7h' : '2 jours · 14h'
  const programTitle = is3h
    ? 'Programme du Sprint IA — 3 heures intensives'
    : isOneDay
      ? "Programme, 1 journée de formation pratique"
      : 'Programme, 2 jours de formation pratique'
  const programIntro = is3h
    ? "3 heures denses et opérationnelles, en présentiel ou distanciel. Démonstration en direct, manipulation guidée et atelier sur vos propres cas."
    : isOneDay
      ? "7 h de formation effective sur une journée. La matinée pose la méthode et les outils, l'après-midi est consacré aux cas pratiques sur vos fichiers réels."
      : "14h de formation effective réparties sur 2 jours. Chaque demi-journée alterne démonstration en direct et exercice sur vos fichiers réels."
  const objectivesTitle = is3h
    ? "Ce que vos équipes savent faire à l'issue du Sprint"
    : isOneDay
      ? "Ce que vos équipes savent faire à l'issue de la journée"
      : "Ce que vos équipes savent faire à l'issue des 2 jours"
  const useCasesIntro = is3h
    ? "Cas d'usage concrets, manipulés en direct pendant les 3 heures du Sprint."
    : isOneDay
      ? `Cas d'usage ${lowerMetier(spoke.metier)} concrets, travaillés sur vos propres fichiers pendant la journée.`
      : `6 cas d'usage ${lowerMetier(spoke.metier)} concrets, travaillés sur vos propres fichiers pendant les 2 jours.`
  const heroSentence = is3h
    ? <>Le <strong>Sprint IA {spoke.metier}</strong> proposé par Masteria est un format court de <strong>3 heures</strong> certifié Qualiopi, en présentiel ou distanciel. Tarif&nbsp;: <strong>1 980 €/session</strong>, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel sur mesure. Financement OPCO 100&nbsp;%. Idéal pour acculturer en cascade plusieurs centaines de collaborateurs.</>
    : isOneDay
      ? <>La formation <strong>{spoke.tool} pour {spoke.metier}</strong> proposée par Masteria est un programme de <strong>1 jour (7 h)</strong> certifié Qualiopi, dispensé en présentiel ou distanciel. Tarif&nbsp;: <strong>1 980 €/jour</strong>, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel. Financement OPCO 100&nbsp;%. Programme opérationnel dès le lundi matin.</>
      : <>La formation <strong>{spoke.tool} pour {spoke.metier}</strong> proposée par Masteria est un programme de <strong>2 jours (14 h)</strong> certifié Qualiopi, dispensé en présentiel ou distanciel. Tarif&nbsp;: <strong>1 980 €/jour</strong>, en intra-entreprise (jusqu'à 12 participants) comme en accompagnement individuel sur mesure. Financement OPCO 100&nbsp;%. Programme opérationnel dès le lundi matin.</>

  // Modules grouped by day
  const modulesJ1 = spoke.modules?.filter(m => m.day === 1) || []
  const modulesJ2 = spoke.modules?.filter(m => m.day === 2) || []

  // Hero clair (validé, déployé sur toutes les pages)
  const useLightHero = true
  const MetierIcon = METIER_ICONS[spoke.metierSlug] || Briefcase

  const courseData = {
    name: spoke.h1,
    description: spoke.metaDesc,
    level: 'Intermédiaire',
    duration: is3h ? 'PT3H' : isOneDay ? 'PT7H' : 'PT14H',
    timeRequired: is3h ? 'PT3H' : isOneDay ? 'PT7H' : 'PT14H',
    price: is3h ? '1980' : '1980',
    audience: `Professionnels ${spoke.metier}`,
    tool: spoke.tool, // ChatGPT, Claude, Copilot, etc.
    teaches: spoke.objectives, // compétences enseignées
    objectives: spoke.objectives,
    modules: spoke.modules, // pour HowTo schema
    about: `Formation ${spoke.tool} pour les équipes ${spoke.metier} en entreprise`,
    prerequisites: 'Aucun prérequis technique. Maîtrise des outils bureautiques courants.',
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    ...(hub ? [{ name: spoke.tool, slug: hub.slug }] : []),
    { name: spoke.metier, slug: spoke.slug },
  ]

  const objectives = spoke.objectives || [
    `Utilise ${spoke.tool} seul dans ses tâches ${lowerMetier(spoke.metier)} au quotidien`,
    `Formule des demandes précises adaptées à son métier et obtient des résultats utilisables immédiatement`,
    `Gagne en moyenne 1 h 30 par jour sur les tâches de rédaction, d'analyse et de synthèse`,
    `Construit une bibliothèque de prompts ${lowerMetier(spoke.metier)} réutilisables par toute l'équipe`,
    `Utilise l'IA de façon sécurisée et conforme aux bonnes pratiques RGPD`,
  ]

  return (
    <>
      <SEOHead
        title={spoke.metaTitle}
        description={spoke.metaDesc}
        slug={spoke.slug}
        courseData={courseData}
        breadcrumbs={breadcrumbs}
        faqItems={spoke.faq}
        datePublished={spoke.datePublished}
        dateModified={spoke.updatedAt || spoke.datePublished}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 60, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            {hub && <Link to={`/${hub.slug}`} style={{ color: '#6B7280' }}>{spoke.tool}</Link>}
            {hub && <span style={{ color: '#374151' }}>/</span>}
            {METIER_HUB_SLUGS.includes(spoke.metierSlug)
              ? <Link to={`/formation-ia-${spoke.metierSlug}`} style={{ color: c, fontWeight: 600 }}>{spoke.metier}</Link>
              : <span style={{ color: c, fontWeight: 600 }}>{spoke.metier}</span>}
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <MetierIcon size={16} strokeWidth={2.2} />
              {spoke.tool} × {spoke.metier}
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              {durationBadge}
            </span>
            {spoke.updatedLabel && (
              <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
                {spoke.updatedLabel}
              </span>
            )}
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {spoke.h1}
          </h1>

          {/* GEO-optimized first paragraph : réponse directe à la query pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 680, fontWeight: 500 }}>
            {heroSentence}
          </p>

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
          { num: '+1 500', label: "professionnels formés à l'IA" },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '100 %', label: 'finançable via votre OPCO' },
          { num: '+6 h', label: 'gagnées par semaine' },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: useLightHero ? '#0A0A0A' : '#fff', margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: useLightHero ? '#4B5563' : '#9CA3AF', margin: '6px 0 0' }}>{s.label}</p>
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
              Cette formation est conçue pour les professionnels {lowerMetier(spoke.metier)} qui veulent des résultats concrets, pas une initiation théorique.
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
              {useCasesIntro}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {spoke.useCases.map((uc, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                  <div style={{ marginBottom: 12 }}><Pictogram emoji={uc.icon} tile size={26} /></div>
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
        <section style={{ padding: '80px 40px', background: '#F5F3EE', color: '#0A0A0A' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
              {programTitle}
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 56 }}>
              {isSprint || isOneDay ? programIntro : "14h de formation effective. Chaque module alterne démonstration en direct et exercice sur vos vrais fichiers métier."}
            </p>

            {[{ label: 'Jour 1', modules: modulesJ1 }, { label: 'Jour 2', modules: modulesJ2 }].filter(day => day.modules.length > 0).map(day => (
              <div key={day.label} style={{ marginBottom: 56 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                  <div style={{ background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, padding: '6px 18px', borderRadius: 99 }}>{day.label}</div>
                  <div style={{ flex: 1, height: 1, background: '#F3F4F6' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {day.modules.map((mod, i) => (
                    <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 28, border: `1px solid #E5E7EB`, borderLeftColor: c, borderLeftWidth: 4 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{mod.title}</h3>
                        {mod.duration && (
                          <span style={{ background: '#F3F4F6', color: '#6B7280', padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{mod.duration}</span>
                        )}
                      </div>
                      {mod.description && (
                        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 16 }}>{mod.description}</p>
                      )}
                      {mod.items?.length > 0 && (
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: mod.exercise ? 16 : 0 }}>
                          {mod.items.map((item, j) => (
                            <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#374151' }}>
                              <span style={{ color: c, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {mod.exercise && (
                        <div style={{ background: `${c}18`, border: `1px solid ${c}40`, borderRadius: 8, padding: '12px 16px', marginTop: 16 }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: c, display: 'block', marginBottom: 4 }}>EXERCICE CONCRET</span>
                          <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{mod.exercise}</span>
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
        <section style={{ padding: '80px 40px', background: '#F5F3EE', color: '#0A0A0A' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
              {programTitle}
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 48 }}>
              {programIntro}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {spoke.program.map((part, i) => (
                <div key={i} style={{ borderLeft: `4px solid ${c}`, paddingLeft: 28 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: c, marginBottom: 20 }}>{part.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {part.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: '#374151', background: '#fff', borderRadius: 8, padding: '12px 16px', border: '1px solid #E5E7EB' }}>
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
              Prêt à former votre équipe {lowerMetier(spoke.metier)}&nbsp;?
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
            {objectivesTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {objectives.map((obj, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 26, height: 26, background: c, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Check size={14} color="#fff" strokeWidth={3} aria-hidden="true" />
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
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>ACCOMPAGNEMENT INDIVIDUEL</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>{is3h ? '/ session' : '/ jour'}</div>
              </div>
              <div style={{ fontSize: 13, color: c, fontWeight: 600, marginBottom: 20 }}>{is3h ? 'Sprint de 3 heures · 1-to-1 sur mesure' : isOneDay ? '1 journée de 7 h · coaching 1-to-1' : 'Soit 3 960 € pour 2 jours · 1-to-1'}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(is3h
                  ? ['Session de 3 heures · 1-to-1', 'Programme co-construit sur vos enjeux', 'Présentiel ou distanciel', 'Finançable OPCO']
                  : isOneDay
                    ? ['1 journée intensive (7 h) · 1-to-1', 'Programme co-construit sur vos enjeux', 'Présentiel ou distanciel', 'Suivi entre les sessions']
                    : ['2 jours consécutifs ou espacés · 1-to-1', 'Programme co-construit sur vos enjeux', 'Présentiel ou distanciel', 'Suivi entre les sessions']
                ).map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={16} color={c} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }} /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: `2px solid ${c}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>INTRA-ENTREPRISE</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>{is3h ? '/ session de 3 h' : '/ jour'}</div>
              </div>
              <div style={{ fontSize: 13, color: c, fontWeight: 600, marginBottom: 20 }}>{is3h ? 'Jusqu\'à 12 participants · Packages dégressifs dès 5 sessions' : isOneDay ? 'Jusqu\'à 12 participants · 1 journée intensive' : 'Soit 3 960 € pour 2 jours (jusqu\'à 12 participants)'}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(is3h
                  ? ['Réservé à votre équipe', 'Session de 3 h sur mesure (intra)', 'Contenu adapté à votre secteur', 'OPCO, plan de développement des compétences']
                  : isOneDay
                    ? ['Réservé à votre équipe', '1 journée sur mesure, dans vos locaux', 'Contenu adapté à votre secteur', 'OPCO, plan de développement des compétences']
                    : ['Réservé à votre équipe', '2 jours sur mesure, dans vos locaux', 'Contenu adapté à votre secteur', 'OPCO, plan de développement des compétences']
                ).map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={16} color={c} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }} /><span>{item}</span>
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
            Un mot du fondateur
          </h2>
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flexShrink: 0 }}>
              <img
                src="/assets/mathias-nizan@120.jpg"
                srcSet="/assets/mathias-nizan@120.jpg 1x, /assets/mathias-nizan@240.jpg 2x"
                alt="Mathias Nizan, fondateur de Masteria, expert en formation IA"
                width="100" height="100"
                loading="lazy" decoding="async"
                style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: '0 0 4px' }}>{TRAINER.name}</h3>
              <p style={{ fontSize: 14, color: c, fontWeight: 600, margin: '0 0 16px' }}>{TRAINER.role}</p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>{buildTrainerBio(spoke)}</p>
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
                <div style={{ marginBottom: 12 }}><Pictogram emoji={card.icon} tile size={26} /></div>
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
        <section style={{ padding: '80px 40px', background: '#F5F3EE' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
                Ce qu'ils disent de la formation
              </h2>
              <p style={{ color: '#6B7280', fontSize: 15, margin: 0 }}>
                Retours d'expérience de professionnels formés par Masteria, entreprises réelles, postes réels.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
              {spoke.testimonials.map((t, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 14, padding: 28, border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Étoiles */}
                  <div style={{ display: 'flex', gap: 3 }}>
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={14} color="#FBBF24" fill="#FBBF24" aria-hidden="true" />
                    ))}
                  </div>
                  {/* Texte */}
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0, flex: 1, fontStyle: 'italic' }}>
                    "{t.text}"
                  </p>
                  {/* Auteur */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #E5E7EB' }}>
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
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', margin: 0, fontFamily: 'Nunito, sans-serif' }}>{t.name}</p>
                      <p style={{ fontSize: 12, color: '#6B7280', margin: '2px 0 0', lineHeight: 1.4 }}>{t.role}</p>
                      <p style={{ fontSize: 12, color: '#6B7280', margin: '1px 0 0', lineHeight: 1.4 }}>{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, textAlign: 'center' }}>
              <p style={{ fontSize: 14, color: '#6B7280' }}>
                Formation certifiée Qualiopi · <span style={{ display: 'inline-flex', gap: 2, verticalAlign: 'middle' }}>{[1,2,3,4,5].map(s => <Star key={s} size={13} color="#FBBF24" fill="#FBBF24" aria-hidden="true" />)}</span> <span style={{ color: '#6B7280' }}>98 % de satisfaction (500+ participants formés)</span>
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
                <Link to="/formation-intelligence-artificielle" style={{ color: '#2563EB', fontWeight: 600 }}>les formations par métier</Link>.
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Parlons de votre équipe {lowerMetier(spoke.metier)}
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Dites-nous combien de personnes vous souhaitez former et leur niveau actuel. On revient vers vous sous 24 heures avec {is3h ? 'un Sprint IA adapté à vos équipes' : isOneDay ? 'un programme adapté sur 1 journée' : 'un programme adapté sur 2 jours'}.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: '#2563EB', color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Formation certifiée Qualiopi · Finançable OPCO · +1 500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>

      <OfficialSources tool={spoke.tool} />
    </>
  )
}
