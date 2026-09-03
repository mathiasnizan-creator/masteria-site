import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Building2, Check, Compass, Cpu, Globe,
  GraduationCap, Handshake, MapPin, MonitorSmartphone, Radar, Target,
  Workflow, Briefcase, Landmark,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { AGENCE_GEO_CITIES, getAgenceGeoCity } from '../data/agence-geo-data'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Template « Agence IA {ville} » — pages géo high-ticket conseil + développement.
 * Lit la ville depuis le path (comme GeoPage) parmi AGENCE_GEO_CITIES, 404 propre
 * si le slug est inconnu. Cœur d'offre : conseil + développement d'agents/outils/
 * automatisations sur mesure ; formation = offre secondaire visible.
 *
 * INTÉGRITÉ : présence honnête (équipe Lyon + présentiel ponctuel/distanciel),
 * aucun client nommé, aucune adresse locale inventée. Genève (CH) : pas d'OPCO,
 * cadre suisse. Design premium cabinet identique à /agence-ia (kickers, icônes
 * lucide, cartes radius 16, CTA final sombre, accent #2563EB).
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const SITE = 'https://www.master-ia.fr'

/* ── Design system local (calque /agence-ia) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }

const OFFERS = [
  {
    icon: Compass,
    title: 'Conseil et stratégie IA',
    href: '/conseil-intelligence-artificielle',
    cta: 'Découvrir le conseil IA',
    desc: "Audit de maturité, cartographie des cas d'usage, feuille de route priorisée par impact et faisabilité, gouvernance des données et conformité RGPD et AI Act. Vous savez où investir, dans quel ordre et avec quels garde-fous.",
    points: ['Audit IA et cadrage stratégique', 'Feuille de route priorisée', 'Gouvernance, RGPD et AI Act'],
  },
  {
    icon: Cpu,
    title: "Développement d'outils et d'agents sur mesure",
    href: '/agence-developpement-ia',
    cta: 'Découvrir le développement sur mesure',
    desc: "Conception et développement de solutions IA propres à votre métier : agents autonomes branchés sur votre SI, copilotes internes, interfaces et intégrations sur mesure. Du cadrage fonctionnel à la mise en production, avec une équipe qui code et documente.",
    points: ['Agents et copilotes IA sur mesure', 'Intégrations à votre SI (CRM, ERP, API)', 'Du prototype à la mise en production'],
    secondaryHref: '/outils-ia-sur-mesure',
    secondaryCta: 'Voir les outils IA sur mesure',
  },
  {
    icon: Workflow,
    title: 'Automatisation des processus',
    href: '/agence-automatisation-ia',
    cta: "Découvrir l'agence d'automatisation",
    desc: "Identification des processus à fort potentiel, construction de workflows et d'agents IA branchés sur vos outils existants, mesure du temps réellement gagné. Chaque automatisation est documentée puis transmise à vos équipes.",
    points: ['Cadrage des processus prioritaires', 'Workflows et agents IA sur mesure', 'Documentation et passation'],
  },
]

const SPECIALIST_POINTS = [
  { icon: Target, title: 'Une seule discipline', desc: "Masteria travaille uniquement sur l'IA. Une ESN généraliste répartit son expertise sur des dizaines de technologies et staffe souvent ses consultants IA selon les disponibilités du moment." },
  { icon: Radar, title: 'Une veille en continu', desc: "Modèles, outils, tarifs, réglementation : l'écosystème IA bouge chaque mois. Nos recommandations sont réévaluées en permanence, indépendamment des éditeurs." },
  { icon: GraduationCap, title: "L'autonomie comme livrable", desc: "Le modèle de la régie repose sur la durée des missions. Le nôtre repose sur la solution livrée et la passation : nous concevons, nous développons, nous documentons et nous formons vos équipes pour qu'elles restent autonomes une fois l'outil en production." },
  { icon: Handshake, title: 'Des circuits courts', desc: "Un interlocuteur stable du cadrage à la passation, des décisions prises en quelques jours et un programme ajusté à votre réalité plutôt qu'à un catalogue." },
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

export default function AgenceGeoPage() {
  const location = useLocation()
  const isDesktop = useIsDesktop()
  const slug = location.pathname.replace(/^\//, '')
  const city = getAgenceGeoCity(slug)

  // Patron éditorial asymétrique réutilisable (offres / FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  if (!city) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, color: '#0A0A0A' }}>Page non trouvée</h1>
        <Link to="/agence-ia" style={{ color: c, fontWeight: 600 }}>Voir notre agence IA</Link>
      </div>
    )
  }

  const isFR = city.countryCode === 'FR'

  const metaTitle = `Agence IA ${city.name} · Conseil & dev sur mesure | Masteria`

  const otherCities = AGENCE_GEO_CITIES.filter(x => x.slug !== city.slug)

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: 'agence-ia' },
    { name: city.name, slug: city.slug },
  ]

  // Meta keywords localisés (le fallback SEOHead liste des mots-clés formation)
  const cityLower = city.name.toLowerCase()
  const keywords = `agence ia ${cityLower}, agence intelligence artificielle ${cityLower}, agence ia ${city.nameLoc.toLowerCase()}, conseil ia ${cityLower}, développement ia ${cityLower}, agents ia ${cityLower}, automatisation ia ${cityLower}, prestataire ia ${cityLower}`

  // E-E-A-T : byline visible + Article JSON-LD (auteur identifié, fraîcheur datée)
  const PUBLISHED = '2026-06-12'
  const MODIFIED = '2026-08-05'
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE}/${city.slug}#article`,
    headline: `Agence IA ${city.nameLoc} : conseil, développement et automatisation sur mesure`,
    description: city.metaDesc,
    author: { '@id': `${SITE}/#mathias-nizan` },
    editor: { '@id': `${SITE}/#mathias-nizan` },
    publisher: { '@id': `${SITE}/#organization` },
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    inLanguage: 'fr-FR',
    mainEntityOfPage: { '@id': `${SITE}/${city.slug}#webpage` },
    about: [`Agence IA ${city.nameLoc}`, 'Conseil et développement IA sur mesure', city.regionLong || city.region],
    // GEO : zones à lire en priorité par les moteurs génératifs (réponse directe + FAQ)
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#geo-summary', '#geo-faq'],
    },
    // Sources d'autorité du champ conseil/gouvernance évoqué sur la page
    citation: [
      { '@type': 'CreativeWork', name: 'Règlement (UE) 2024/1689 — AI Act', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
      { '@type': 'CreativeWork', name: 'CNIL — Intelligence artificielle', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
    ],
  }

  /* ── FAQ : locales + communes (les communes adaptées au cadre du pays) ── */
  const commonFaq = [
    isFR
      ? {
          q: `Combien coûte une agence IA ${city.nameLoc} ?`,
          a: "Les budgets dépendent de la mission. Ordres de grandeur constatés sur le marché français : 5 000 à 30 000 € pour un audit ou un cadrage stratégique, 15 000 à 80 000 € pour le développement d'un outil ou d'un agent sur mesure, 5 000 à 50 000 € pour l'automatisation d'un périmètre de processus. Chez Masteria, le premier échange de cadrage est gratuit et chaque proposition est forfaitaire. À noter : le conseil et le développement sur mesure ne sont pas finançables par l'OPCO ; seule la formation l'est.",
        }
      : {
          q: `Combien coûte une agence IA ${city.nameLoc} et comment se passe la facturation ?`,
          a: "Les budgets dépendent du périmètre : ordres de grandeur de marché, l'équivalent de quelques milliers à plusieurs dizaines de milliers de francs selon qu'il s'agit d'un cadrage, du développement d'un agent ou de l'automatisation d'un processus. Masteria facture selon le cadre suisse, en CHF ou en EUR selon votre préférence, avec la TVA suisse si vous y êtes assujetti. Il n'existe pas de dispositif de type OPCO en Suisse : chaque proposition est forfaitaire, avec périmètre, livrables et calendrier écrits avant signature. Le premier cadrage est gratuit.",
        },
    {
      q: `Pourquoi choisir Masteria plutôt qu'une autre agence IA ${city.nameLoc} ?`,
      a: "Masteria est une agence spécialisée uniquement sur l'IA depuis 2022, là où une ESN généraliste répartit son expertise sur des dizaines de technologies. Notre cœur d'offre couple conseil stratégique et développement sur mesure sous un même toit : nous cadrons, nous développons les agents et automatisations, puis nous documentons et formons vos équipes pour qu'elles restent autonomes. Chaque proposition est forfaitaire, avec un interlocuteur stable du cadrage à la passation.",
    },
    {
      q: `Quelle différence entre une agence IA et un cabinet de conseil IA ${city.nameLoc} ?`,
      a: "Dans l'usage courant, une agence IA conçoit et déploie des solutions : développements sur mesure, agents, automatisations, intégrations d'outils. Un cabinet de conseil IA intervient plutôt en amont, sur la stratégie, le cadrage et la gouvernance. La frontière est devenue poreuse. Masteria assume ce double positionnement : cabinet de conseil pour la stratégie et la feuille de route, agence pour le développement d'agents et d'outils sur mesure et l'automatisation des processus.",
    },
    {
      q: `Combien de temps pour démarrer une mission ${city.nameLoc} ?`,
      a: "Le premier échange de cadrage a lieu sous 24 heures après votre message, en visio ou par téléphone, sans engagement. Vous recevez ensuite une proposition écrite avec périmètre, livrables, calendrier et budget forfaitaire. Une fois la proposition validée, la mission démarre rapidement : un cadrage et un premier déploiement courent généralement sur quelques semaines, pas sur des mois.",
    },
    {
      q: `Peut-on mener toute la mission à distance ${city.nameLoc} ?`,
      a: `Oui. La présence sur site ${city.nameLoc} se concentre sur les phases qui en bénéficient vraiment : ateliers de cadrage, observation des processus, passation. Le développement des agents et des outils, les itérations et le suivi se conduisent en distanciel, avec les mêmes contenus et les mêmes livrables. Certaines missions se mènent intégralement à distance quand le contexte s'y prête, par points réguliers en visio. Vous gardez un interlocuteur stable du cadrage à la passation, quel que soit le format.`,
    },
    {
      q: `Travaillez-vous avec les PME ${city.nameLoc} ?`,
      a: "Oui, l'essentiel de nos missions se mène avec des PME et des ETI. Les cas d'usage les plus rentables s'y trouvent souvent : processus administratifs chargés, équipes réduites, données sous-exploitées. Les propositions forfaitaires et le premier cadrage gratuit sont pensés pour ce format d'entreprise : un périmètre resserré, un budget écrit à l'avance et des résultats mesurables, avec une charge interne réduite pendant la mission.",
    },
    {
      q: "Faut-il déjà utiliser l'IA en interne pour faire appel à vous ?",
      a: "Non. Une partie de nos missions part de zéro : aucun outil déployé, des usages individuels dispersés, des questions de conformité en suspens. Le cadrage et l'audit établissent le point de départ réel, y compris les usages officieux déjà installés dans les équipes. À l'inverse, si des outils sont déjà en place, la mission capitalise sur l'existant : elle consolide ce qui fonctionne et corrige ce qui expose.",
    },
    {
      q: "Que reste-t-il chez vous à la fin d'une mission ?",
      a: "Des livrables qui ne dépendent plus de nous : une feuille de route et ses arbitrages écrits pour le conseil, un outil documenté avec son code et ses accès pour le développement, des équipes formées et des supports réutilisables pour la formation. La passation fait partie de chaque mission, et la documentation est rédigée pour être reprise par vos équipes ou par un autre prestataire si vous le décidez.",
    },
  ]
  const faqItems = [...city.localFaq, ...commonFaq]

  /* ── Déroulé d'une mission (générique, ancré ville via nameLoc) ── */
  const missionSteps = [
    {
      num: '01',
      title: 'Cadrage',
      desc: `Un premier échange gratuit, sur site ${city.nameLoc} ou en visio, pour poser le contexte : votre activité, vos processus, vos outils, ce qui coûte du temps aux équipes. Il débouche sur une proposition écrite avec périmètre, livrables, calendrier et budget forfaitaire.`,
    },
    {
      num: '02',
      title: 'Audit des usages et des données',
      desc: "Nous examinons les processus concernés, les usages d'IA déjà installés dans les équipes, officiels ou officieux, et l'état de vos données : où elles vivent, qui y accède, ce que le RGPD et l'AI Act imposent. Cet état des lieux fonde toutes les décisions qui suivent.",
    },
    {
      num: '03',
      title: 'Recommandation indépendante des éditeurs',
      desc: "Nous recommandons les outils, les modèles et l'architecture adaptés à votre contexte, en toute indépendance : nous ne revendons aucune licence. La recommandation s'écrit, avec ses motifs, ses ordres de grandeur budgétaires et les options écartées.",
    },
    {
      num: '04',
      title: 'Construction ou formation, selon le besoin',
      desc: "La mission enchaîne sur ce que le cadrage a retenu : développement d'un agent ou d'un outil, automatisation d'un processus, formation des équipes. Certains projets combinent les trois, dans l'ordre fixé par la feuille de route.",
    },
    {
      num: '05',
      title: 'Suivi et mesure',
      desc: "Une fois la solution en production ou les équipes formées, nous mesurons ce qui a changé : temps rendu aux équipes, qualité des livrables, adoption réelle. La documentation et la passation closent la mission, avec des points de suivi si vous le souhaitez.",
    },
  ]

  /* ── Complémentarité des trois offres (conseil / développement / formation) ── */
  const formationHref = city.formationSlug ? `/${city.formationSlug}` : '/formation-intelligence-artificielle'
  const rolesCards = [
    {
      icon: Compass,
      title: 'Le conseil : décider',
      href: '/conseil-intelligence-artificielle',
      cta: 'Voir le conseil IA',
      desc: "Le conseil arbitre : quels cas d'usage lancer, dans quel ordre, avec quel budget et sous quelles règles de gouvernance. Il produit la feuille de route et évite de construire un outil que rien ne justifie.",
    },
    {
      icon: Cpu,
      title: 'Le développement : construire',
      href: '/agence-developpement-ia',
      cta: 'Voir le développement IA',
      desc: "Le développement transforme la décision en solution qui tourne : agent, copilote interne, automatisation branchée sur votre SI. Il livre un outil testé, documenté et maintenable par d'autres que nous.",
    },
    {
      icon: GraduationCap,
      title: 'La formation : installer les usages',
      href: formationHref,
      cta: city.formationSlug ? `Voir les formations IA ${city.nameLoc}` : 'Voir les formations IA',
      desc: "La formation ancre le dispositif dans le quotidien : des équipes qui savent utiliser, corriger et étendre ce qui a été construit. C'est elle qui rend les résultats durables après notre départ.",
    },
  ]

  /* ── JSON-LD ProfessionalService (areaServed = ville/région) ── */
  const professionalServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}/${city.slug}#service`,
    name: `Masteria — agence IA ${city.nameLoc}`,
    description: city.metaDesc,
    serviceType: "Conseil et développement IA sur mesure",
    url: `${SITE}/${city.slug}`,
    image: `${SITE}/assets/logo-square.png`,
    telephone: '+33667754128',
    priceRange: '€€',
    provider: { '@id': `${SITE}/#organization` },
    parentOrganization: { '@id': `${SITE}/#organization` },
    // NAP complet quand la ville a des bureaux réels (city.office : Lyon uniquement)
    ...(city.office ? {
      address: {
        '@type': 'PostalAddress',
        streetAddress: city.office.streetAddress,
        postalCode: city.office.postalCode,
        addressLocality: city.office.addressLocality,
        addressRegion: city.office.addressRegion,
        addressCountry: 'FR',
      },
      ...(city.coordinates && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.coordinates.latitude,
          longitude: city.coordinates.longitude,
        },
      }),
    } : {}),
    areaServed: [
      { '@type': 'City', name: city.name },
      {
        '@type': 'AdministrativeArea',
        name: city.regionLong || city.region,
        ...(city.coordinates && {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: city.coordinates.latitude,
            longitude: city.coordinates.longitude,
          },
        }),
      },
    ],
    knowsAbout: [
      'Conseil et stratégie IA',
      "Développement d'outils et d'agents IA sur mesure",
      'Automatisation des processus',
      'Agents IA',
      'Gouvernance et conformité IA (RGPD, AI Act)',
    ],
  }

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={city.metaDesc}
        slug={city.slug}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
        keywords={keywords}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        extraJsonLd={[professionalServiceJsonLd, articleJsonLd]}
        locale={city.locale}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-ia" style={{ color: '#5B6679' }}>Agence IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>{city.name}</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              {`Agence IA · ${city.name}`}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            {`Agence IA ${city.nameLoc}`}
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>conseil, développement et automatisation sur mesure</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible (hero sombre) */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '-8px 0 24px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en août 2026
          </p>

          {/* GEO : réponse directe en gras (citable LLM) — accroche */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            {`Masteria est une agence IA qui intervient ${city.nameLoc} : conseil en stratégie IA et développement d'agents, d'outils et d'automatisations sur mesure, prolongés par la formation des équipes. L'équipe est basée à Lyon et se déplace ${city.nameLoc} en présentiel pour le cadrage et les passations, le reste de la mission se conduisant en distanciel. `}
            <strong style={{ color: '#fff', fontWeight: 700 }}>Plus de 1 500 professionnels formés, 98 % de satisfaction.</strong>
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            {city.heroSubtitle}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un cadrage gratuit
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#offres" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir nos offres
            </a>
          </div>

          {/* chips de présence */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: city.keyFacts && city.keyFacts.length > 0 ? 40 : 0 }}>
            {[
              { icon: BadgeCheck, label: 'Spécialiste IA depuis 2022' },
              { icon: Building2, label: 'Équipe basée à Lyon' },
              { icon: MapPin, label: `Présentiel ${city.nameLoc}` },
              { icon: MonitorSmartphone, label: 'Présentiel & distanciel' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* En bref — faits citables (GEO), carte sombre, <dl> sémantique */}
          {city.keyFacts && city.keyFacts.length > 0 && (
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
              <dl style={{ margin: 0 }}>
                {city.keyFacts.map((fact, i) => (
                  <div key={fact.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <dt style={{ flex: '0 0 150px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{fact.label}</dt>
                    <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </section>

      {/* ── LES 3 OFFRES (éditorial asymétrique) ── */}
      <section id="offres" style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Nos expertises</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Ce que fait notre agence IA {city.nameLoc}</h2>
              <p style={{ ...answerStyle, background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', maxWidth: 'none', margin: '0 0 18px' }}>
                <strong style={{ color: '#0A0A0A' }}>Masteria couvre trois expertises de cœur d'offre : le conseil en stratégie et gouvernance IA, le développement d'agents et d'outils sur mesure, et l'automatisation des processus.</strong>{' '}
                Elles s'enchaînent dans une même trajectoire : un cadrage stratégique débouche sur la conception et le développement des solutions, prolongés par l'automatisation puis consolidés par la formation des équipes qui en héritent.
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Trois offres, une seule logique : concevoir, développer et vous rendre autonome. Chaque proposition est forfaitaire, avec périmètre, livrables et calendrier écrits avant signature.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginBottom: 24 }}>
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
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `4px solid ${c}`, borderRadius: 12, padding: '20px 24px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  <strong style={{ color: '#0A0A0A' }}>Du conseil à la solution livrée, sous un même toit.</strong>{' '}
                  Nous ne nous arrêtons pas à la recommandation : nous concevons et développons les agents et les outils qui en découlent. Pour le détail de cette capacité de build, consultez notre{' '}
                  <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link> et nos{' '}
                  <Link to="/outils-ia-sur-mesure" style={{ color: c, fontWeight: 600 }}>outils IA sur mesure</Link> ; pour les chaînes de traitement répétitives, la page{' '}
                  <Link to="/agence-automatisation-ia" style={{ color: c, fontWeight: 600 }}>automatisation IA</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION LOCALE UNIQUE (anti-doorway, cartes à filet supérieur) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Ancrage {city.regionLong}</div>
          <h2 style={h2Style}>Pourquoi une agence IA pour les entreprises {city.nameLoc} ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>{city.whyHere}</strong>
          </p>

          {/* Tissu économique + présence honnête */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, margin: '12px 0 48px' }}>
            <div style={{ ...cardStyle, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={iconBoxStyle}>
                <Landmark size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>Le tissu économique {city.nameLoc}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{city.localEconomy}</p>
              </div>
            </div>
            <div style={{ ...cardStyle, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={iconBoxStyle}>
                <MapPin size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>Notre présence {city.nameLoc}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{city.presence}</p>
              </div>
            </div>
          </div>

          {/* Cas d'usage locaux par secteur */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', marginBottom: 20, letterSpacing: '-0.01em' }}>
            Des prestations adaptées aux secteurs {city.nameLoc}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {city.useCasesLocal.map(({ sector, usage }) => (
              <div key={sector} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <div style={{ ...iconBoxStyle, marginBottom: 14 }}>
                  <Briefcase size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{sector}</h4>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATION (offre secondaire, bandeau filet latéral) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ ...cardStyle, background: '#fff', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={kickerStyle}>Et la formation des équipes ?</div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>Ancrer les usages après le déploiement</h2>
              <p style={answerStyle}>
                <strong style={{ color: '#0A0A0A' }}>Au-delà du conseil et du développement sur mesure, Masteria forme vos équipes pour qu'elles sachent faire fonctionner, corriger et étendre ce qui a été construit.</strong>{' '}
                Les programmes existent par métier et par outil (ChatGPT, Claude, Copilot, Gemini), en intra-entreprise ou en accompagnement individuel, en présentiel comme en distanciel.
              </p>
              {isFR ? (
                <p style={mutedStyle}>
                  Le volet formation est certifié Qualiopi et finançable par votre OPCO en {city.region}. À noter : le conseil et le développement sur mesure restent des prestations de service, non finançables par l'OPCO.
                </p>
              ) : (
                <p style={mutedStyle}>
                  La formation se conduit en français pour vos équipes du marché romand, en présentiel sur le bassin lémanique ou en distanciel. Facturation selon le cadre suisse, en CHF ou en EUR.
                </p>
              )}
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
                {city.formationSlug && (
                  <Link to={`/${city.formationSlug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                    Voir les formations IA {city.nameLoc}
                    <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                )}
                <Link to="/formation-intelligence-artificielle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: city.formationSlug ? '#6B7280' : c, fontWeight: city.formationSlug ? 600 : 700, fontSize: 14, textDecoration: 'none' }}>
                  {city.formationSlug ? 'Tout le catalogue de formations' : 'Découvrir les formations IA'}
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DÉROULÉ D'UNE MISSION (timeline à rail) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={kickerStyle}>Méthode</div>
          <h2 style={h2Style}>Le déroulé d'une mission {city.nameLoc}</h2>
          <p style={{ ...answerStyle, background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', maxWidth: 'none' }}>
            <strong style={{ color: '#0A0A0A' }}>Une mission suit cinq étapes : un cadrage sur site ou en visio, un audit des usages et des données, une recommandation indépendante des éditeurs, la construction ou la formation selon le besoin, puis le suivi et la mesure.</strong>{' '}
            Chaque étape produit un livrable écrit et vous gardez la décision entre chacune.
          </p>
          <p style={mutedStyle}>
            Le budget se chiffre sur devis après le cadrage, avec des fourchettes larges selon le périmètre : un audit court et le développement d'un outil complet ne mobilisent ni les mêmes profils ni la même durée.
          </p>
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {missionSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 16px' : (i === missionSteps.length - 1 ? '16px 0 0' : '16px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENCE SPÉCIALISÉE VS ESN (ancre sombre — pivot preuve) ── */}
      <section style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Spécialisation</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Pourquoi une agence spécialisée IA plutôt qu'une ESN généraliste ?</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 780 }}>
            <strong style={{ color: '#fff' }}>Une agence spécialisée IA consacre l'intégralité de sa veille, de ses méthodes et de ses références à une seule discipline.</strong>{' '}
            Une ESN généraliste reste pertinente pour un grand chantier d'intégration SI ou un renfort en régie. Pour cadrer une stratégie, développer des agents sur mesure et rendre les équipes autonomes, la spécialisation avance plus vite, avec des budgets plus serrés.
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }}>
            Beaucoup d'entreprises confient leurs projets IA à leur prestataire informatique habituel. Cela fonctionne pour l'intégration technique. Pour la stratégie, les usages métier et l'adoption par les équipes, la spécialisation change les résultats.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, marginBottom: 32 }}>
            {SPECIALIST_POINTS.map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 24 }}>
                  <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#F8FAFC', marginBottom: 8, letterSpacing: '-0.01em' }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: '#B4C0D3', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.75, margin: 0, maxWidth: 780 }}>
            La spécialisation pèse aussi sur la gouvernance : choix des modèles, encadrement des usages, conformité RGPD et AI Act évoluent chaque trimestre. Un cabinet dédié arbitre ces questions en continu pour l'ensemble de ses clients. Notre page{' '}
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#60A5FA', fontWeight: 600 }}>conseil en intelligence artificielle</Link>{' '}
            détaille cette approche du cadrage, de la gouvernance et de la trajectoire.
          </p>
        </div>
      </section>

      {/* ── CONSEIL / DÉVELOPPEMENT / FORMATION : QUI FAIT QUOI ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Trois briques complémentaires</div>
          <h2 style={h2Style}>Conseil, développement ou formation : qui fait quoi ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Les trois offres répondent à trois questions différentes : le conseil décide, le développement construit, la formation installe les usages.</strong>{' '}
            Une mission peut mobiliser une seule de ces briques ou les enchaîner ; le cadrage initial dit laquelle ouvre la trajectoire.
          </p>
          <p style={mutedStyle}>
            Un besoin encore flou commence par le conseil, un besoin déjà cadré part directement en construction, une équipe déjà équipée passe à la formation. Rien n'oblige à tout prendre : chaque brique se contracte séparément, avec son propre devis.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {rolesCards.map(({ icon: Icon, title, href, cta, desc }) => (
              <div key={title} style={{ ...cardStyle, padding: 26, display: 'flex', flexDirection: 'column', borderTop: `3px solid ${c}` }}>
                <div style={{ ...iconBoxStyle, marginBottom: 16 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 18px' }}>{desc}</p>
                <Link to={href} style={{ marginTop: 'auto', color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {cta}
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section id="geo-faq" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes — agence IA {city.nameLoc}</h2>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Vous comparez plusieurs prestataires ? Lisez notre guide{' '}
                <Link to="/meilleure-agence-ia" style={{ color: c, fontWeight: 600 }}>meilleure agence IA : comment choisir en 2026</Link>.
              </p>
            </div>
            <div>
              {faqItems.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: 'clamp(48px, 6vw, 72px) 24px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 16 }}>
            Notre agence IA dans d'autres villes
          </h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            {/* Ancre volontairement non exact-match « Agence IA Lyon » : cette requête
                appartient à /agence-ia-lyon (chip rendu via otherCities ci-dessous). */}
            <Link to="/agence-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 700, color: '#1E40AF', textDecoration: 'none' }}>
              <Building2 size={13} aria-hidden="true" /> Notre agence IA (présentation)
            </Link>
            {otherCities.map(x => (
              <Link key={x.slug} to={`/${x.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                <MapPin size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Agence IA {x.name}
              </Link>
            ))}
            <Link to="/meilleure-agence-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Globe size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Comparatif meilleure agence IA
            </Link>
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginTop: 0, marginBottom: 12 }}>
            Explorer nos expertises et notre méthode
          </h3>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0, maxWidth: 880 }}>
            {`Pour comprendre comment nous adaptons l'IA à votre activité ${city.nameLoc}, parcourez notre `}
            <Link to="/ia-secteurs" style={{ color: c, fontWeight: 600 }}>expertise IA par secteur</Link> et notre panorama de{' '}
            <Link to="/solutions-ia" style={{ color: c, fontWeight: 600 }}>solutions IA par cas d'usage</Link>. Le déroulé d'une mission, du cadrage au transfert, est détaillé dans notre{' '}
            <Link to="/methode-projet-ia" style={{ color: c, fontWeight: 600 }}>méthode de projet IA</Link>. Et si vous hésitez sur le périmètre, le{' '}
            <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link> est l'offre d'entrée qui cadre le besoin avant tout développement. Une question précise ?{' '}
            <Link to="/contact" style={{ color: c, fontWeight: 600 }}>Contactez notre équipe</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Premier échange gratuit</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Parlons de votre projet IA {city.nameLoc}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez votre contexte en quelques lignes : processus chronophages, outils à construire, stratégie à cadrer. Nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit et sans engagement.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Contacter notre équipe
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              {`Agence IA ${city.nameLoc} · Conseil, développement sur mesure, automatisation · Équipe basée à Lyon`}
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui intervient (cabinet + réseau, preuves) ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Qui intervient</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Un cabinet spécialisé IA, indépendant des éditeurs
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Masteria, cabinet spécialisé en intelligence artificielle fondé à Lyon en 2022 par Mathias Nizan, n'a qu'un seul métier : l'IA. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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

      <FounderNote />

      <OfficialSources />
    </>
  )
}
