import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, Building2, Check, Compass, Cpu, Factory, FlaskConical,
  Globe, GraduationCap, Handshake, Landmark, MapPin, MonitorSmartphone,
  Radar, Rocket, Target, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import FounderNote from '../components/FounderNote'

/*
 * Page « Agence IA » ancrée à Lyon : cible « agence ia lyon » (210/mois, KD 17,
 * la priorité, Masteria est à Lyon), « agence ia » (1 600/mois, KD 59, tête de
 * cluster), « agence ia france », « agence spécialisée en ia », « agence conseil
 * ia entreprise ». Positionnement high-ticket : cabinet/agence IA lyonnais dont
 * le cœur d'offre est le conseil et le développement d'outils & agents sur
 * mesure ; l'automatisation prolonge le build et la formation reste une offre
 * secondaire mais visible. Interventions France/CH/BE.
 * Design premium cabinet : kickers, icônes lucide (zéro emoji), cartes radius 16,
 * CTA final sombre. Accent bleu Masteria (#2563EB), pas d'orange.
 */

const SLUG = 'agence-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Agence IA Lyon · Conseil & dev sur mesure | Masteria'
const META_DESC = "Agence IA à Lyon : conseil, développement d'agents et d'outils sur mesure, automatisation et formation. France, Suisse, Belgique. Premier cadrage gratuit."
const H1 = 'Agence IA à Lyon : conseil, automatisation et formation des équipes'

/* ── Design system local : kickers, titres, cartes, pastilles d'icônes ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const answerStyle = { fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '13px 16px', fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB', lineHeight: 1.35 }
const tdStyle = { padding: '13px 16px', fontSize: 13.5, color: '#374151', lineHeight: 1.6, verticalAlign: 'top' }

const HERO_BADGES = [
  { icon: BadgeCheck, label: 'Certifié Qualiopi' },
  { icon: Building2, label: 'Fondée à Lyon en 2022' },
  { icon: Globe, label: 'France · Suisse · Belgique' },
  { icon: MonitorSmartphone, label: 'Présentiel & distanciel' },
]

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
  },
  {
    icon: Workflow,
    title: 'Automatisation des processus',
    href: '/agence-automatisation-ia',
    cta: "Découvrir l'agence d'automatisation",
    desc: "Identification des processus à fort potentiel, construction de workflows et d'agents IA branchés sur vos outils existants, mesure du temps réellement gagné. Chaque automatisation est documentée puis transmise à vos équipes.",
    points: ['Cadrage des processus prioritaires', 'Workflows et agents IA sur mesure', 'Documentation et passation'],
  },
  {
    icon: GraduationCap,
    title: 'Formation IA des équipes',
    href: '/formation-intelligence-artificielle',
    cta: 'Découvrir les formations IA',
    desc: "Pour ancrer durablement les usages, des programmes par métier et par outil (ChatGPT, Claude, Copilot, Gemini), en intra-entreprise ou en accompagnement individuel, en présentiel comme en distanciel. Volet certifié Qualiopi, finançable par votre OPCO.",
    points: ['Programmes par métier et par outil', 'Intra-entreprise ou individuel', 'Finançable OPCO (Qualiopi)'],
  },
]

const LYON_SECTORS = [
  { icon: FlaskConical, title: 'Pharma et biotech', desc: "Documentation réglementaire, veille scientifique, dossiers qualité : des volumes documentaires où l'IA générative excelle." },
  { icon: Landmark, title: 'Banque et assurance', desc: "Conformité, relation client, traitement des dossiers : des processus répétitifs à fort enjeu de fiabilité et de traçabilité." },
  { icon: Factory, title: 'Industrie', desc: "Devis, achats, maintenance, HSE : l'automatisation libère les fonctions support des tâches récurrentes." },
  { icon: Rocket, title: 'Tech et scale-ups', desc: "Accélérer le support, la documentation produit et l'onboarding sans faire grossir les effectifs au même rythme." },
]

const FIRST_STEPS = [
  { num: '1', title: 'Vous décrivez votre besoin', desc: "Quelques lignes suffisent via le formulaire de contact : votre contexte, vos processus, vos objectifs. Nous revenons vers vous sous 24 h." },
  { num: '2', title: 'Échange de cadrage gratuit', desc: "En visio ou par téléphone, sans engagement. Nous qualifions ensemble le besoin dominant : stratégie, développement sur mesure, automatisation, formation, ou une combinaison." },
  { num: '3', title: 'Proposition écrite', desc: "Périmètre, livrables, calendrier, budget forfaitaire et conditions de déplacement. Vous savez exactement ce que vous achetez avant de signer." },
  { num: '4', title: 'Démarrage de la mission', desc: "Avec un objectif constant : transférer la compétence à vos équipes au fil de la mission, documentation et ateliers de passation à l'appui." },
]

const SPECIALIST_POINTS = [
  { icon: Target, title: 'Une seule discipline', desc: "Masteria travaille uniquement sur l'IA. Une ESN généraliste répartit son expertise sur des dizaines de technologies et staffe souvent ses consultants IA selon les disponibilités du moment." },
  { icon: Radar, title: 'Une veille en continu', desc: "Modèles, outils, tarifs, réglementation : l'écosystème IA bouge chaque mois. Nos recommandations sont réévaluées en permanence, indépendamment des éditeurs." },
  { icon: GraduationCap, title: "L'autonomie comme livrable", desc: "Le modèle économique de la régie repose sur la durée des missions. Le nôtre repose sur la solution livrée et la passation : nous concevons, nous développons, nous documentons et nous formons vos équipes pour qu'elles restent autonomes une fois l'outil en production." },
  { icon: Handshake, title: 'Des circuits courts', desc: "Un interlocuteur stable du cadrage à la passation, des décisions prises en quelques jours et un programme ajusté à votre réalité plutôt qu'à un catalogue." },
]

/* Comparatif 4 voies (snippet SEO + citation GEO) */
const COMPARISON_TABLE = [
  { critere: 'Expertise IA', agence: "Cœur de métier, veille continue, indépendante des éditeurs", esn: "L'IA parmi d'autres technologies, profils staffés selon les dispos", freelance: 'Pointue mais limitée à une seule personne', interne: 'À recruter (marché tendu, plusieurs mois)' },
  { critere: 'Délai de démarrage', agence: 'Quelques jours après le cadrage', esn: 'Long : cadrage et contractualisation lourds', freelance: 'Rapide si la personne est disponible', interne: 'Plusieurs mois (recrutement)' },
  { critere: 'Transfert & autonomie', agence: 'Structurel : documentation + formation des équipes', esn: 'Rare, dépendance prolongée (modèle régie)', freelance: 'Informel, lié à la personne', interne: 'Native, mais à construire' },
  { critere: 'Budget', agence: 'Mission forfaitaire cadrée, volet formation finançable OPCO', esn: 'Engagements longs, coûts de pilotage élevés', freelance: 'TJM attractif, cadrage à votre charge', interne: 'Coût annuel chargé élevé et durable' },
  { critere: 'Idéal pour', agence: 'PME, ETI, directions métier : trajectoire chiffrée + équipes autonomes', esn: 'Grands chantiers SI, renfort de capacité', freelance: 'Besoin ponctuel et bien délimité', interne: 'Usage récurrent à fort volume, à terme' },
]

const FAQ = [
  {
    q: 'Quelle est la meilleure agence IA à Lyon ?',
    a: "Aucun classement officiel ne désigne la meilleure agence IA à Lyon. Pour comparer sérieusement, quatre critères font la différence : la part de l'IA dans l'activité du prestataire, des références vérifiables, un transfert de compétence organisé et une certification contrôlée par un organisme tiers. Masteria coche ces quatre cases : agence lyonnaise fondée en 2022, dédiée à l'IA, certifiée Qualiopi, plus de 1 500 professionnels formés et 98 % de satisfaction. Notre guide « meilleure agence IA » détaille la méthode complète pour départager plusieurs prestataires.",
  },
  {
    q: 'Combien coûte une agence IA ?',
    a: "Les budgets dépendent de la mission. Ordres de grandeur constatés sur le marché français : 5 000 à 30 000 € pour un audit ou un cadrage stratégique, 15 000 à 80 000 € pour le développement d'un outil ou d'un agent sur mesure, 5 000 à 50 000 € pour l'automatisation d'un périmètre de processus, 1 000 à 2 500 € par jour de formation intra-entreprise. Chez Masteria, le premier échange de cadrage est gratuit et chaque proposition est forfaitaire. À noter : le conseil et le développement sur mesure ne sont pas finançables par l'OPCO ; seule la formation l'est, grâce à notre certification Qualiopi.",
  },
  {
    q: 'Agence IA ou recrutement interne ?',
    a: "Les deux approches se complètent. Recruter un profil IA expérimenté prend plusieurs mois sur un marché tendu, pour un coût annuel chargé souvent supérieur à celui d'une mission d'agence complète. L'agence apporte immédiatement des méthodes éprouvées et une vision transverse des outils. La trajectoire la plus efficace pour une PME ou une ETI : confier le cadrage et les premiers déploiements à une agence, puis internaliser progressivement grâce à la formation. Ce schéma correspond au modèle Masteria, où chaque mission intègre un transfert de compétence.",
  },
  {
    q: 'Intervenez-vous en dehors de Lyon ?',
    a: "Oui. Le siège de Masteria est à Lyon (Croix-Rousse) et nos consultants interviennent en présentiel dans toute la France, ainsi qu'en Suisse et en Belgique. Les frais de déplacement éventuels figurent en clair dans la proposition commerciale. Toutes nos missions de conseil, d'automatisation et de formation existent aussi en distanciel, avec les mêmes contenus et les mêmes livrables.",
  },
  {
    q: 'Quelle différence entre une agence IA et un cabinet de conseil IA ?',
    a: "Dans l'usage courant, une agence IA conçoit et déploie des solutions : développements sur mesure, agents, automatisations, intégrations d'outils. Un cabinet de conseil IA intervient plutôt en amont : stratégie, cadrage, gouvernance, choix d'outils. La frontière est devenue poreuse et de nombreuses structures combinent les deux. Masteria assume ce double positionnement : cabinet de conseil pour la stratégie et la feuille de route, agence pour le développement d'outils et d'agents sur mesure et l'automatisation des processus, organisme de formation pour la montée en compétence des équipes.",
  },
  {
    q: 'Travaillez-vous avec les PME ?',
    a: "Oui. Nos offres sont dimensionnées pour les PME et les ETI : cadrage gratuit, missions forfaitaires courtes, priorité aux cas d'usage à retour rapide et formations finançables par l'OPCO. Une PME a rarement besoin d'un programme de transformation de dix-huit mois : quelques processus bien automatisés et des équipes formées produisent déjà des gains mesurables. Le même socle s'adapte aux directions de grands groupes pour des cadrages stratégiques ou des plans de formation multi-équipes.",
  },
  {
    q: 'Quelle agence IA choisir en 2026 ?',
    a: "En 2026, le marché des agences IA s'est densifié : beaucoup de prestataires se sont ajouté la mention « IA » sans en avoir fait leur cœur de métier. Quatre critères permettent de trancher : une spécialisation réelle (l'IA comme activité principale, pas un sujet parmi d'autres), une indépendance vis-à-vis des éditeurs pour des choix d'outils objectifs, un transfert de compétence organisé pour rester autonome après la mission, et une certification contrôlée par un tiers (Qualiopi pour le volet formation). Masteria, agence IA lyonnaise dédiée à l'IA depuis 2022, répond à ces quatre critères. Notre guide « meilleure agence IA » détaille la méthode de comparaison.",
  },
  {
    q: 'Combien de temps dure un projet avec une agence IA ?',
    a: "Cela dépend du périmètre. Un audit ou un cadrage stratégique se mène en 2 à 4 semaines. Un premier prototype d'agent ou d'outil utile se construit souvent en quelques semaines, puis le développement complet et l'intégration s'étalent selon l'ampleur. Une automatisation de processus se déploie également en quelques semaines. Nous privilégions des missions forfaitaires courtes, avec des livrables intermédiaires et des points de décision, plutôt que des programmes de transformation au long cours.",
  },
  {
    q: "Avec quels modèles et outils d'IA travaillez-vous ?",
    a: "Nous sommes indépendants des éditeurs et travaillons en multi-modèles : ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Microsoft Copilot, Mistral et des modèles open source selon le cas. Le choix dépend de votre contexte : sensibilité des données, stack existante, budget, exigences de conformité. Pour les développements sur mesure, nous combinons RAG sur vos données, agents outillés et connecteurs (API, MCP), avec un hébergement dans l'Union européenne possible.",
  },
  {
    q: 'Agence IA ou freelance IA : que choisir ?',
    a: "Un freelance IA convient à un besoin ponctuel, bien cadré et porté par une seule compétence. Une agence apporte une combinaison de profils (stratégie, développement, conformité, formation), un interlocuteur stable et une méthode éprouvée, ce qu'un projet IA transverse exige souvent. Pour un cadrage stratégique, un développement intégré à votre système d'information ou un déploiement qui doit rendre vos équipes autonomes, l'agence sécurise mieux le résultat. Pour une tâche isolée et délimitée, un freelance peut suffire.",
  },
]

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.master-ia.fr/agence-ia#localbusiness',
  name: 'Masteria',
  description: META_DESC,
  url: 'https://www.master-ia.fr/agence-ia',
  image: 'https://www.master-ia.fr/assets/logo-square.png',
  telephone: '+33667754128',
  priceRange: '€€',
  foundingDate: '2022',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Rue Richan',
    postalCode: '69004',
    addressLocality: 'Lyon',
    addressRegion: 'Auvergne-Rhône-Alpes',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.764, longitude: 4.8357 },
  areaServed: [
    { '@type': 'City', name: 'Lyon' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Belgique' },
  ],
  knowsAbout: [
    'Intelligence artificielle générative',
    'Conseil et stratégie IA',
    "Développement d'outils et d'agents IA sur mesure",
    'Automatisation des processus',
    'Agents IA',
    "Formation professionnelle à l'IA",
    'Gouvernance et conformité IA (RGPD, AI Act)',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Certification Qualiopi (actions de formation), NDA 84 69 23218 69',
  },
  parentOrganization: { '@id': 'https://www.master-ia.fr/#organization' },
}

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
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function AgenceIAPage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        extraJsonLd={LOCAL_BUSINESS_JSONLD}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#F9FAFB', color: '#0A0A0A', padding: 'clamp(48px, 6vw, 64px) 24px clamp(64px, 8vw, 88px)', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Agence IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <MapPin size={16} strokeWidth={2.2} aria-hidden="true" />
              Agence IA · Lyon
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Conseil · Développement sur mesure · Formation
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 680 }}>
            <strong>
              Masteria est une agence IA basée à Lyon (Croix-Rousse), fondée en 2022. Son cœur d'offre : le conseil en stratégie IA et le développement d'outils et d'agents sur mesure, prolongés par l'automatisation des processus et, en appui, la formation des équipes. Plus de 1 500 professionnels formés, 98 % de satisfaction, des interventions dans toute la France, en Suisse et en Belgique, en présentiel comme en distanciel.
            </strong>
          </p>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            Notre métier : aider les directions générales et les équipes métier à passer de l'intention aux résultats. Nous cadrons votre stratégie et votre gouvernance IA, puis nous concevons et développons les solutions sur mesure qui s'intègrent à vos outils : agents, copilotes, automatisations. La formation prolonge la mise en œuvre, pour qu'à la fin vos équipes sachent faire fonctionner, corriger et étendre ce qui a été construit.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Demander un cadrage gratuit
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#offres" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir nos offres
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

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: '#fff', padding: '44px 24px', display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap', borderBottom: '1px solid #E5E7EB' }}>
        {[
          { num: '2022', label: 'année de fondation à Lyon' },
          { num: '+1 500', label: "professionnels formés à l'IA" },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '3 pays', label: 'France, Suisse, Belgique' },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#6B7280', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── LES 3 OFFRES ── */}
      <section id="offres" style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Nos expertises</div>
          <h2 style={h2Style}>Que fait une agence IA comme Masteria ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Masteria couvre quatre expertises, avec le conseil et le développement sur mesure en cœur d'offre : le conseil en stratégie et gouvernance IA, le développement d'outils et d'agents sur mesure, l'automatisation des processus et la formation des équipes.</strong>{' '}
            Elles s'enchaînent dans une même trajectoire : un cadrage stratégique débouche sur la conception et le développement des solutions, prolongés par l'automatisation puis consolidés par la formation des équipes qui en héritent.
          </p>
          <p style={mutedStyle}>
            Quatre offres, une seule logique : concevoir, développer et vous rendre autonome. Chaque proposition est forfaitaire, avec périmètre, livrables et calendrier écrits avant signature.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 32 }}>
            {OFFERS.map(({ icon: Icon, title, href, cta, desc, points }) => (
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
                <Link to={href} style={{ marginTop: 'auto', color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {cta}
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderLeft: `4px solid ${c}`, borderRadius: 12, padding: '20px 24px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: '#0A0A0A' }}>Du conseil à la solution livrée, sous un même toit.</strong>{' '}
              Nous ne nous arrêtons pas à la recommandation : nous concevons et développons les outils et les agents qui en découlent. Pour le détail de cette capacité de build, consultez notre{' '}
              <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link> et nos{' '}
              <Link to="/outils-ia-sur-mesure" style={{ color: c, fontWeight: 600 }}>outils IA sur mesure</Link> ; pour les chaînes de traitement répétitives, la page{' '}
              <Link to="/automatisation-ia" style={{ color: c, fontWeight: 600 }}>automatisation IA</Link> ; pour les assistants branchés sur votre SI, la page{' '}
              <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link>. La formation prolonge la mise en œuvre pour rendre vos équipes autonomes sur ce qui a été construit.
            </p>
          </div>
        </div>
      </section>

      {/* ── ANCRAGE LYONNAIS ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Ancrage local</div>
          <h2 style={h2Style}>Pourquoi travailler avec une agence IA basée à Lyon ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Masteria est une agence IA installée au 17 Rue Richan, sur le plateau de la Croix-Rousse (Lyon 4e).</strong>{' '}
            La proximité accélère ce qui se joue sur le terrain : ateliers de cadrage, observation des processus, conduite du changement. Nous intervenons en présentiel dans toute la métropole lyonnaise et en région Auvergne-Rhône-Alpes.
          </p>
          <p style={mutedStyle}>
            Le tissu économique régional s'y prête : la métropole concentre des sièges industriels, des acteurs de la santé et de la finance, des scale-ups et un réseau dense d'ETI. Quatre secteurs y produisent des gains particulièrement rapides.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 48 }}>
            <div style={{ ...cardStyle, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={iconBoxStyle}>
                <MapPin size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>Masteria · 17 Rue Richan, 69004 Lyon</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                  Siège sur le plateau de la Croix-Rousse (Lyon 4e). Organisme de formation enregistré sous le NDA 84 69 23218 69 auprès de la préfecture Auvergne-Rhône-Alpes.
                </p>
              </div>
            </div>
            <div style={{ ...cardStyle, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={iconBoxStyle}>
                <Building2 size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>Interventions dans la métropole et la région</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                  Part-Dieu, Confluence, Gerland et Villeurbanne pour la métropole, puis Saint-Étienne, Grenoble, Annecy, Clermont-Ferrand et Valence pour les missions régionales en présentiel.
                </p>
              </div>
            </div>
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', marginBottom: 20, letterSpacing: '-0.01em' }}>
            Des secteurs régionaux où l'IA produit des gains rapides
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20, marginBottom: 40 }}>
            {LYON_SECTORS.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ ...iconBoxStyle, marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>{title}</h4>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <div style={iconBoxStyle}>
              <Globe size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                Au-delà de la région : toute la France, la Suisse et la Belgique
              </h3>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Nos consultants et formateurs se déplacent dans toute la France, en Suisse et en Belgique. Les éventuels frais de déplacement figurent en clair dans la proposition commerciale : aucun supplément découvert en cours de mission. Toutes nos missions et formations existent aussi en distanciel, avec les mêmes contenus et les mêmes livrables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREMIER ÉCHANGE ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Premier contact</div>
          <h2 style={h2Style}>Comment se passe un premier échange ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Le premier échange est un cadrage gratuit et sans engagement, en visio ou par téléphone, avec une réponse sous 24 heures.</strong>{' '}
            Il qualifie votre besoin dominant avant tout chiffrage : stratégie, développement sur mesure, automatisation, formation ou une combinaison. Vous recevez ensuite une proposition écrite avec périmètre, livrables, calendrier et budget forfaitaire.
          </p>
          <p style={mutedStyle}>
            Quatre étapes séparent votre premier message du démarrage de la mission.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
            {FIRST_STEPS.map(step => (
              <div key={step.num} style={{ ...cardStyle, padding: 26 }}>
                <div style={{ width: 36, height: 36, background: cLight, color: c, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 16 }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '14px 0 0', letterSpacing: '-0.01em' }}>{step.title}</h3>
                <div style={{ height: 1, background: '#E5E7EB', margin: '14px 0' }} aria-hidden="true" />
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENCE SPÉCIALISÉE VS ESN ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Spécialisation</div>
          <h2 style={h2Style}>Pourquoi une agence spécialisée IA plutôt qu'une ESN généraliste ?</h2>
          <p style={answerStyle}>
            <strong style={{ color: '#0A0A0A' }}>Une agence spécialisée IA consacre l'intégralité de sa veille, de ses méthodes et de ses références à une seule discipline.</strong>{' '}
            Une ESN généraliste reste pertinente pour un grand chantier d'intégration SI ou un renfort en régie. Pour cadrer une stratégie, automatiser des processus métier et rendre les équipes autonomes, la spécialisation avance plus vite, avec des budgets plus serrés.
          </p>
          <p style={mutedStyle}>
            Beaucoup d'entreprises confient leurs projets IA à leur prestataire informatique habituel. Cela fonctionne pour l'intégration technique. Pour la stratégie, les usages métier et l'adoption par les équipes, la spécialisation change les résultats.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
            {SPECIALIST_POINTS.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ ...iconBoxStyle, marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Comparatif 4 voies — citable par les IA (GEO) + featured snippet (SEO) */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: '8px 0 8px', letterSpacing: '-0.01em' }}>
            Agence IA spécialisée, ESN, freelance ou équipe interne : le comparatif
          </h3>
          <p style={{ ...answerStyle, marginBottom: 24 }}>
            <strong style={{ color: '#0A0A0A' }}>Pour un projet IA transverse, une agence spécialisée combine expertise dédiée, démarrage rapide et transfert de compétence ; l'ESN convient aux grands chantiers SI, le freelance à un besoin ponctuel, et l'équipe interne à un usage récurrent à fort volume une fois constituée.</strong>{' '}
            Voici les quatre voies comparées, critère par critère.
          </p>
          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.04)', marginBottom: 32 }}>
            <table aria-label="Comparatif entre agence IA spécialisée, ESN généraliste, freelance IA et équipe interne" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 820 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ ...thStyle, width: '15%' }}>Critère</th>
                  <th scope="col" style={{ ...thStyle, color: c, width: '25%' }}>Agence IA spécialisée</th>
                  <th scope="col" style={thStyle}>ESN généraliste</th>
                  <th scope="col" style={thStyle}>Freelance IA</th>
                  <th scope="col" style={thStyle}>Équipe interne</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, i) => (
                  <tr key={row.critere} style={{ borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <th scope="row" style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', fontSize: 13 }}>{row.critere}</th>
                    <td style={{ ...tdStyle, color: '#0A0A0A', fontWeight: 500 }}>{row.agence}</td>
                    <td style={tdStyle}>{row.esn}</td>
                    <td style={tdStyle}>{row.freelance}</td>
                    <td style={tdStyle}>{row.interne}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: 0, maxWidth: 780 }}>
            La spécialisation pèse aussi sur la gouvernance : choix des modèles, encadrement des usages, conformité RGPD et AI Act évoluent chaque trimestre. Un cabinet dédié arbitre ces questions en continu pour l'ensemble de ses clients, là où une équipe généraliste les découvre projet après projet. Notre page{' '}
            <Link to="/conseil-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>conseil en intelligence artificielle</Link>{' '}
            détaille cette approche du cadrage, de la gouvernance et de la trajectoire.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>Questions fréquentes sur notre agence IA</h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', marginTop: 28, lineHeight: 1.75 }}>
            Vous comparez plusieurs prestataires ? Lisez notre guide{' '}
            <Link to="/meilleure-agence-ia" style={{ color: c, fontWeight: 600 }}>meilleure agence IA : comment choisir en 2026</Link>. Pour aller plus loin, découvrez notre{' '}
            <Link to="/ia-secteurs" style={{ color: c, fontWeight: 600 }}>expertise IA par secteur</Link>, nos{' '}
            <Link to="/solutions-ia" style={{ color: c, fontWeight: 600 }}>solutions IA par cas d'usage</Link> et notre{' '}
            <Link to="/methode-projet-ia" style={{ color: c, fontWeight: 600 }}>méthode de projet IA</Link>. Avant tout engagement, le{' '}
            <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link> cadre votre besoin et son périmètre.
          </p>
        </div>
      </section>

      {/* ── LE FONDATEUR (E-E-A-T + mention presse Les Échos) ── */}
      <FounderNote bg="#fff" />

      {/* ── CTA FINALE (bandeau sombre) ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div style={{ ...kickerStyle, color: cLight }}>Premier échange gratuit</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Parlons de votre projet IA
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Décrivez votre contexte en quelques lignes : processus chronophages, équipes à former, stratégie à cadrer. Nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit et sans engagement.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe
            <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
            Agence IA à Lyon · Conseil, développement sur mesure, automatisation, formation · France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
