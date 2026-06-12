import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BadgeCheck, Building2, Compass, Globe, GraduationCap,
  MapPin, MonitorSmartphone, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

/*
 * Page « Agence IA » ancrée à Lyon — cible « agence ia lyon » (210/mois, KD 17,
 * la priorité : Masteria est à Lyon), « agence ia » (1 600/mois, KD 59, tête de
 * cluster), « agence ia france », « agence spécialisée en ia », « agence conseil
 * ia entreprise ». Positionnement honnête : cabinet/agence IA lyonnais qui réunit
 * conseil, automatisation et formation Qualiopi, interventions France/CH/BE.
 * Pattern : GestionDeProjetIAPage (hero clair, sections alternées, FAQ, CTA).
 * Accent bleu Masteria (#2563EB), pas d'orange.
 */

const SLUG = 'agence-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Agence IA Lyon · Conseil & automatisation | Masteria'
const META_DESC = "Masteria, agence IA à Lyon : conseil, automatisation des processus et formation certifiée Qualiopi. France, Suisse, Belgique. Premier cadrage gratuit."
const H1 = 'Agence IA à Lyon : conseil, automatisation et formation des équipes'

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
    icon: Workflow,
    title: 'Automatisation des processus',
    href: '/agence-automatisation-ia',
    cta: "Découvrir l'agence d'automatisation",
    desc: "Identification des processus à fort potentiel, construction de workflows et d'agents IA branchés sur vos outils existants, mesure du temps réellement gagné. Chaque automatisation est documentée puis transmise à vos équipes.",
    points: ['Cadrage des processus prioritaires', 'Workflows et agents IA sur mesure', 'Documentation et passation'],
  },
  {
    icon: GraduationCap,
    title: 'Formation IA certifiée Qualiopi',
    href: '/formation-intelligence-artificielle',
    cta: 'Découvrir les formations IA',
    desc: "Des programmes par métier et par outil (ChatGPT, Claude, Copilot, Gemini), en intra-entreprise ou en accompagnement individuel, en présentiel comme en distanciel. La certification Qualiopi ouvre droit à une prise en charge par votre OPCO.",
    points: ['Programmes par métier et par outil', 'Intra-entreprise ou individuel', 'Finançable OPCO (Qualiopi)'],
  },
]

const LYON_SECTORS = [
  { icon: '🧬', title: 'Pharma et biotech', desc: "Documentation réglementaire, veille scientifique, dossiers qualité : des volumes documentaires où l'IA générative excelle." },
  { icon: '🏦', title: 'Banque et assurance', desc: "Conformité, relation client, traitement des dossiers : des processus répétitifs à fort enjeu de fiabilité et de traçabilité." },
  { icon: '🏭', title: 'Industrie', desc: "Devis, achats, maintenance, HSE : l'automatisation libère les fonctions support des tâches récurrentes." },
  { icon: '🚀', title: 'Tech et scale-ups', desc: "Accélérer le support, la documentation produit et l'onboarding sans faire grossir les effectifs au même rythme." },
]

const FIRST_STEPS = [
  { num: '1', title: 'Vous décrivez votre besoin', desc: "Quelques lignes suffisent via le formulaire de contact : votre contexte, vos processus, vos objectifs. Nous revenons vers vous sous 24 h." },
  { num: '2', title: 'Échange de cadrage gratuit', desc: "En visio ou par téléphone, sans engagement. Nous qualifions ensemble le besoin dominant : stratégie, automatisation, formation, ou une combinaison des trois." },
  { num: '3', title: 'Proposition écrite', desc: "Périmètre, livrables, calendrier, budget forfaitaire et conditions de déplacement. Vous savez exactement ce que vous achetez avant de signer." },
  { num: '4', title: 'Démarrage de la mission', desc: "Avec un objectif constant : transférer la compétence à vos équipes au fil de la mission, documentation et ateliers de passation à l'appui." },
]

const SPECIALIST_POINTS = [
  { icon: '🎯', title: 'Une seule discipline', desc: "Masteria travaille uniquement sur l'IA. Une ESN généraliste répartit son expertise sur des dizaines de technologies et staffe souvent ses consultants IA selon les disponibilités du moment." },
  { icon: '🔭', title: 'Une veille en continu', desc: "Modèles, outils, tarifs, réglementation : l'écosystème IA bouge chaque mois. Nos recommandations sont réévaluées en permanence, indépendamment des éditeurs." },
  { icon: '🎓', title: "L'autonomie comme livrable", desc: "Le modèle économique de la régie repose sur la durée des missions. Le nôtre repose sur la formation : nous documentons, nous formons et nous partons quand vos équipes sont autonomes." },
  { icon: '🤝', title: 'Des circuits courts', desc: "Un interlocuteur stable du cadrage à la passation, des décisions prises en quelques jours et un programme ajusté à votre réalité plutôt qu'à un catalogue." },
]

const FAQ = [
  {
    q: 'Quelle est la meilleure agence IA à Lyon ?',
    a: "Aucun classement officiel ne désigne la meilleure agence IA à Lyon. Pour comparer sérieusement, quatre critères font la différence : la part de l'IA dans l'activité du prestataire, des références vérifiables, un transfert de compétence organisé et une certification contrôlée par un organisme tiers. Masteria coche ces quatre cases : agence lyonnaise fondée en 2022, dédiée à l'IA, certifiée Qualiopi, plus de 1 500 professionnels formés et 98 % de satisfaction. Notre guide « meilleure agence IA » détaille la méthode complète pour départager plusieurs prestataires.",
  },
  {
    q: 'Combien coûte une agence IA ?',
    a: "Les budgets dépendent de la mission. Ordres de grandeur constatés sur le marché français : 5 000 à 30 000 € pour un audit ou un cadrage stratégique, 5 000 à 50 000 € pour l'automatisation d'un périmètre de processus, 1 000 à 2 500 € par jour de formation intra-entreprise. Chez Masteria, le premier échange de cadrage est gratuit et chaque proposition est forfaitaire. Point utile pour votre budget : les formations sont finançables par votre OPCO grâce à notre certification Qualiopi, le conseil pur ne l'est pas.",
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
    a: "Dans l'usage courant, une agence IA conçoit et déploie des solutions : automatisations, agents, intégrations d'outils. Un cabinet de conseil IA intervient plutôt en amont : stratégie, cadrage, gouvernance, choix d'outils. La frontière est devenue poreuse et de nombreuses structures combinent les deux. Masteria assume ce double positionnement : cabinet de conseil pour la stratégie et la feuille de route, agence pour l'automatisation des processus, organisme de formation certifié Qualiopi pour la montée en compétence des équipes.",
  },
  {
    q: 'Travaillez-vous avec les PME ?',
    a: "Oui. Nos offres sont dimensionnées pour les PME et les ETI : cadrage gratuit, missions forfaitaires courtes, priorité aux cas d'usage à retour rapide et formations finançables par l'OPCO. Une PME a rarement besoin d'un programme de transformation de dix-huit mois : quelques processus bien automatisés et des équipes formées produisent déjà des gains mesurables. Le même socle s'adapte aux directions de grands groupes pour des cadrages stratégiques ou des plans de formation multi-équipes.",
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
        <span style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
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
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 60, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Agence IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <MapPin size={16} strokeWidth={2.2} />
              Agence IA · Lyon
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Conseil · Automatisation · Formation
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 680 }}>
            <strong>
              Masteria est une agence IA basée à Lyon (Croix-Rousse), fondée en 2022 et certifiée Qualiopi. Elle réunit trois expertises : le conseil en stratégie IA, l'automatisation des processus et la formation des équipes. Plus de 1 500 professionnels formés, 98 % de satisfaction, des interventions dans toute la France, en Suisse et en Belgique, en présentiel comme en distanciel.
            </strong>
          </p>

          <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            Notre métier : aider les directions générales et les équipes métier à passer de l'intention aux résultats. Nous cadrons votre stratégie IA, nous automatisons vos processus sur vos outils existants et nous formons vos collaborateurs. Notre différence vient de notre ADN d'organisme de formation : à la fin de chaque mission, vos équipes savent faire fonctionner, corriger et étendre ce qui a été construit.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 4px 12px ${c}30` }}>
              Demander un cadrage gratuit →
            </Link>
            <a href="#offres" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir nos trois offres
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
      <section style={{ background: '#fff', padding: '40px', display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap', borderBottom: '1px solid #E5E7EB' }}>
        {[
          { num: '2022', label: 'année de fondation à Lyon' },
          { num: '+1 500', label: "professionnels formés à l'IA" },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '3 pays', label: 'France, Suisse, Belgique' },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#4B5563', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── LES 3 OFFRES ── */}
      <section id="offres" style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Trois offres, une seule logique : vous rendre autonome
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720 }}>
            Conseil, automatisation et formation se combinent : un cadrage stratégique peut déboucher sur un chantier d'automatisation, lui-même consolidé par la formation des équipes qui en héritent.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 32 }}>
            {OFFERS.map(({ icon: Icon, title, href, cta, desc, points }) => (
              <div key={href} style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB', borderTopColor: c, borderTopWidth: 4, display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 44, height: 44, background: cLight, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={22} strokeWidth={2.2} style={{ color: c }} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {points.map(pt => (
                    <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: c, fontWeight: 700 }}>✓</span>{pt}
                    </li>
                  ))}
                </ul>
                <Link to={href} style={{ marginTop: 'auto', color: c, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                  {cta} →
                </Link>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', border: `1px solid ${c}40`, borderLeft: `4px solid ${c}`, borderRadius: 10, padding: '20px 24px' }}>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: '#0A0A0A' }}>La différence Masteria : vos équipes finissent autonomes.</strong>{' '}
              Masteria est d'abord un organisme de formation. Le transfert de compétence est intégré à chaque mission de conseil et d'automatisation : documentation, ateliers de passation, formation des utilisateurs. Pour explorer les cas d'usage concrets (relances, comptes rendus, reporting, support), consultez la page{' '}
              <Link to="/automatisation-ia" style={{ color: c, fontWeight: 600 }}>automatisation IA</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── ANCRAGE LYONNAIS ── */}
      <section style={{ padding: '80px 40px', background: '#F5F3EE' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Une agence IA installée à Lyon, à la Croix-Rousse
          </h2>
          <p style={{ color: '#4B5563', fontSize: 15, lineHeight: 1.8, marginBottom: 28, maxWidth: 720 }}>
            Notre siège se trouve au 17 Rue Richan, sur le plateau de la Croix-Rousse (Lyon 4e). Nous intervenons en présentiel dans toute la métropole (Part-Dieu, Confluence, Gerland, Villeurbanne) et en région Auvergne-Rhône-Alpes : Saint-Étienne, Grenoble, Annecy, Clermont-Ferrand, Valence.
          </p>

          <div style={{ background: '#fff', borderRadius: 10, padding: '18px 22px', border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'flex-start', gap: 12, marginBottom: 40 }}>
            <MapPin size={18} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 2 }} />
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', margin: 0, fontFamily: 'Nunito, sans-serif' }}>Masteria · 17 Rue Richan, 69004 Lyon</p>
              <p style={{ fontSize: 13, color: '#6B7280', margin: '4px 0 0' }}>Organisme de formation enregistré sous le NDA 84 69 23218 69 (préfecture Auvergne-Rhône-Alpes)</p>
            </div>
          </div>

          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginBottom: 16 }}>
            Des secteurs régionaux où l'IA produit des gains rapides
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
            {LYON_SECTORS.map(s => (
              <div key={s.title} style={{ background: '#fff', borderRadius: 12, padding: 22, border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{s.icon}</div>
                <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>{s.title}</h4>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB' }}>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Globe size={18} strokeWidth={2.2} style={{ color: c }} />
              Au-delà de la région : toute la France, la Suisse et la Belgique
            </h3>
            <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: 0 }}>
              Nos consultants et formateurs se déplacent dans toute la France, en Suisse et en Belgique. Les éventuels frais de déplacement figurent en clair dans la proposition commerciale : aucun supplément découvert en cours de mission. Toutes nos missions et formations existent aussi en distanciel, avec les mêmes contenus et les mêmes livrables.
            </p>
          </div>
        </div>
      </section>

      {/* ── PREMIER ÉCHANGE ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Comment se passe un premier échange ?
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720 }}>
            Le cadrage initial est gratuit et sans engagement. Il sert à qualifier votre besoin réel avant tout chiffrage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {FIRST_STEPS.map(step => (
              <div key={step.num} style={{ background: '#F9FAFB', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ width: 34, height: 34, background: c, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 15, marginBottom: 14 }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENCE SPÉCIALISÉE VS ESN ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Pourquoi une agence spécialisée IA plutôt qu'une ESN généraliste ?
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, maxWidth: 720 }}>
            Beaucoup d'entreprises confient leurs projets IA à leur prestataire informatique habituel. Cela fonctionne pour l'intégration technique. Pour la stratégie, les usages métier et l'adoption par les équipes, la spécialisation change les résultats.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
            {SPECIALIST_POINTS.map(card => (
              <div key={card.title} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: 0, maxWidth: 760 }}>
            Une ESN reste un choix pertinent pour un chantier d'intégration SI de grande ampleur ou un renfort en régie de longue durée. Pour cadrer une stratégie IA, automatiser des processus métier et faire monter vos équipes en compétence, une agence spécialisée avance plus vite, avec des budgets plus serrés.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Questions fréquentes sur notre agence IA
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', marginTop: 28 }}>
            Vous comparez plusieurs prestataires ? Lisez notre guide{' '}
            <Link to="/meilleure-agence-ia" style={{ color: c, fontWeight: 600 }}>meilleure agence IA : comment choisir en 2026</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Parlons de votre projet IA
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Décrivez votre contexte en quelques lignes : processus chronophages, équipes à former, stratégie à cadrer. Nous revenons vers vous sous 24 heures pour un échange de cadrage gratuit et sans engagement.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: c, color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Agence IA à Lyon · Conseil, automatisation, formation · Certifié Qualiopi · France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
