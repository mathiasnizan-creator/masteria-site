import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, BadgeCheck, Building2, Check, Clock, Compass, Cpu,
  GraduationCap, LineChart, MonitorSmartphone, Route, Scale, Target,
  Users, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/*
 * Page service « Conseil stratégie IA » : modèle structurel des pages dédiées
 * (GestionDeProjetIAPage) : constantes en tête, SEOHead (FAQ + breadcrumbs),
 * hero avec badges, sections, FAQ, CTA contact. Pas de courseData : il s'agit
 * d'une prestation de conseil, pas d'une formation.
 * Cible : « conseil stratégie ia » (90/mois, KD 45), « conseil stratégique
 * intelligence artificielle », « conseil en transformation numérique et
 * intelligence artificielle ».
 */

const SLUG = 'conseil-strategie-ia'

/* ───────── Jetons de style (charte cabinet) ───────── */

const BLUE = '#2563EB'
const BLUE_SOFT = '#DBEAFE'
const INK = '#0A0A0A'
const GREY_700 = '#374151'
const GREY_500 = '#6B7280'
const BORDER = '#E5E7EB'
const BG_SOFT = '#F9FAFB'
const SECTION_PAD = 'clamp(64px, 9vw, 110px) clamp(20px, 4vw, 32px)'

const kickerStyle = {
  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
  textTransform: 'uppercase', color: BLUE, marginBottom: 14,
}
const h2Style = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 900,
  color: INK, lineHeight: 1.15, letterSpacing: '-0.02em',
  marginBottom: 18,
}
const cardStyle = {
  background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28,
}
const iconTileStyle = {
  width: 44, height: 44, borderRadius: 12, background: BLUE_SOFT,
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
}

const META_TITLE = "Conseil stratégie IA : audit, feuille de route | Masteria"
const META_DESC = "Conseil stratégie IA : diagnostic de maturité, cas d'usage priorisés par ROI, feuille de route 90 jours, puis développement des solutions. Cadrage gratuit."
const H1 = "Conseil stratégie IA : du diagnostic à la feuille de route"
const DIRECT_ANSWER = "Le conseil stratégie IA consiste à définir où, comment et dans quel ordre déployer l'intelligence artificielle dans une entreprise. Masteria structure la démarche en 4 phases : diagnostic de maturité, priorisation des cas d'usage par ROI, feuille de route à 90 jours et 12 mois, gouvernance et conduite du changement."
const INTRO = "Outils qui se multiplient, équipes qui s'équipent en ordre dispersé, budgets engagés sans indicateur de retour : les directions générales ont besoin d'un cap avant d'investir davantage. Notre mission de conseil stratégique en intelligence artificielle donne à votre COMEX une vision partagée, des priorités chiffrées et un plan d'exécution réaliste. Et parce qu'une stratégie ne vaut que par sa mise en œuvre, la même équipe développe et déploie ensuite les solutions retenues : de la feuille de route au build, sans rupture."

const HERO_BADGES = [
  { icon: Compass,           label: 'Cadrage gratuit de 30 minutes' },
  { icon: Building2,         label: 'PME, ETI et grands groupes' },
  { icon: MonitorSmartphone, label: 'Présentiel & distanciel' },
  { icon: BadgeCheck,        label: 'Formations associées certifiées Qualiopi' },
]

const PHASES = [
  {
    n: '01',
    title: 'Diagnostic de maturité',
    duration: '2 à 3 semaines',
    desc: "Entretiens avec la direction et les métiers, revue des outils, des données et des compétences en place. Vous obtenez un état des lieux objectif de votre maturité IA, fonction par fonction.",
    items: [
      'Entretiens direction et managers métier',
      'Revue de la stack, des données et des usages existants',
      'Scoring de maturité par fonction',
      'Synthèse des forces, des écarts et des risques',
    ],
  },
  {
    n: '02',
    title: "Cadrage des cas d'usage et priorisation ROI",
    duration: '1 à 2 semaines',
    desc: "Ateliers par métier pour identifier les cas d'usage, puis arbitrage en comité selon trois critères : impact business, faisabilité technique, risque réglementaire.",
    items: [
      "Ateliers d'idéation par direction",
      'Matrice impact × effort consolidée',
      "Estimation des gains et des coûts par cas d'usage",
      'Sélection de 3 à 5 chantiers prioritaires',
    ],
  },
  {
    n: '03',
    title: 'Feuille de route 90 jours / 12 mois',
    duration: '1 à 2 semaines',
    desc: "Un plan d'exécution à deux horizons : des gains rapides visibles à 90 jours pour créer la dynamique, une trajectoire à 12 mois pour structurer l'investissement.",
    items: [
      'Plan 90 jours : premiers déploiements et formations',
      'Trajectoire 12 mois : jalons, budget, responsabilités',
      'Indicateurs de suivi définis avant le lancement',
      'Restitution au COMEX et arbitrage final',
    ],
  },
  {
    n: '04',
    title: 'Gouvernance et conduite du changement',
    duration: '3 à 12 mois',
    desc: "Le cadre qui sécurise le déploiement dans la durée : comité IA, charte d'usage, conformité RGPD et AI Act, formation des équipes et mesure continue des gains.",
    items: [
      "Charte d'usage et registre des systèmes d'IA",
      'Comité de pilotage et rituels de suivi',
      'Plan de formation par population',
      'Mesure du ROI et ajustements trimestriels',
    ],
  },
]

const TABLE_PHASES = [
  { phase: '1. Diagnostic de maturité', duree: '2 à 3 semaines', livrable: 'Rapport de maturité IA, fonction par fonction' },
  { phase: "2. Cadrage et priorisation des cas d'usage", duree: '1 à 2 semaines', livrable: "Portefeuille de cas d'usage priorisé par ROI" },
  { phase: '3. Feuille de route 90 jours / 12 mois', duree: '1 à 2 semaines', livrable: 'Plan séquencé et budgété, validé en COMEX' },
  { phase: '4. Gouvernance et conduite du changement', duree: '3 à 12 mois', livrable: "Schéma de gouvernance et tableau d'indicateurs ROI" },
]

const POUR_QUI = [
  {
    Icon: Building2,
    title: 'DG et COMEX de PME-ETI',
    desc: "Vous devez arbitrer les investissements IA des 12 prochains mois et rendre des comptes sur leur retour. La démarche vous donne une base de décision objective, chiffrée et partagée par le comité de direction.",
  },
  {
    Icon: LineChart,
    title: 'Directions de la transformation',
    desc: "Vous pilotez le changement et devez aligner les métiers sur des priorités communes. La feuille de route séquencée devient votre référentiel unique pour cadencer les chantiers et suivre les gains.",
  },
  {
    Icon: Users,
    title: 'DSI et directions du numérique',
    desc: "Vous garantissez la cohérence du système d'information face à la multiplication des outils IA. Le schéma de gouvernance cadre les choix d'architecture, la sécurité des données et la conformité.",
  },
]

const LIVRABLES = [
  {
    Icon: BarChart3,
    title: 'Rapport de maturité IA',
    desc: "État des lieux par fonction : usages, données, compétences, risques. Le point de départ objectif de la stratégie.",
  },
  {
    Icon: Target,
    title: "Portefeuille de cas d'usage priorisé",
    desc: "Matrice impact × effort consolidée, gains et coûts estimés pour chaque cas d'usage retenu.",
  },
  {
    Icon: Route,
    title: 'Feuille de route 90 jours / 12 mois',
    desc: "Plan séquencé avec jalons, budget, responsabilités et prérequis techniques pour chaque chantier.",
  },
  {
    Icon: Scale,
    title: 'Schéma de gouvernance',
    desc: "Comité IA, charte d'usage interne, registre des systèmes, dispositif de conformité RGPD et AI Act.",
  },
  {
    Icon: GraduationCap,
    title: 'Plan de formation des équipes',
    desc: "Parcours par population (COMEX, managers, équipes métier), éligible OPCO grâce à notre certification Qualiopi.",
  },
  {
    Icon: LineChart,
    title: "Tableau d'indicateurs ROI",
    desc: "Indicateurs de productivité, de qualité et d'adoption, définis avant le lancement pour mesurer les gains réels.",
  },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'une stratégie IA d'entreprise ?",
    a: "Une stratégie IA d'entreprise est le cadre de référence qui fixe l'ambition, les cas d'usage prioritaires, le budget, le calendrier et la gouvernance du déploiement de l'intelligence artificielle. Elle répond à quatre questions : pourquoi investir, sur quels processus, avec quels outils et quels garde-fous, selon quel séquencement. Sans ce cadre, les initiatives restent dispersées et le retour sur investissement difficile à mesurer.",
  },
  {
    q: "Combien de temps faut-il pour définir une stratégie IA ?",
    a: "Comptez 4 à 8 semaines pour une PME ou une ETI : 2 à 3 semaines de diagnostic de maturité, 1 à 2 semaines d'ateliers de priorisation des cas d'usage, puis la formalisation de la feuille de route et du schéma de gouvernance. La conduite du changement s'étale ensuite sur 3 à 12 mois selon la taille de l'organisation.",
  },
  {
    q: "Combien coûte un conseil en stratégie IA ?",
    a: "La mission se chiffre sur devis, selon la taille de l'organisation, le nombre d'entretiens et la profondeur du diagnostic. Le premier échange de cadrage de 30 minutes est gratuit. Le conseil pur ne bénéficie d'aucun financement OPCO. Seules les formations associées (par exemple la formation IA pour dirigeants, à 1 980 € HT par jour) sont finançables grâce à la certification Qualiopi de Masteria.",
  },
  {
    q: "Quelle différence entre stratégie IA et conseil en transformation numérique ?",
    a: "Le conseil en transformation numérique et intelligence artificielle couvre l'ensemble du système d'information : outils collaboratifs, données, processus digitalisés. La stratégie IA en constitue le volet le plus récent : elle se concentre sur les usages de l'IA générative et prédictive, leur priorisation par ROI, leur gouvernance (RGPD, AI Act) et la montée en compétences des équipes. Les deux démarches se complètent et s'alignent sur le même schéma directeur.",
  },
  {
    q: "Faut-il former son COMEX avant de lancer la stratégie IA ?",
    a: "Une acculturation préalable du COMEX accélère nettement la démarche : les arbitrages de la phase de priorisation supposent de comprendre les capacités et les limites réelles des modèles. Masteria propose une formation IA dédiée aux dirigeants, souvent programmée en amont ou en parallèle du diagnostic de maturité. Les deux formats se combinent dans un même dispositif, avec un seul interlocuteur.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masteria, Conseil stratégie IA',
  description: META_DESC,
  url: `https://www.master-ia.fr/${SLUG}`,
  serviceType: ['Conseil stratégie IA', 'Diagnostic de maturité IA', 'Feuille de route IA', 'Gouvernance IA', "Déploiement et développement de solutions IA"],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: INK, fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color: BLUE, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: GREY_700, lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function ConseilStrategieIAPage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Conseil IA', slug: 'conseil-intelligence-artificielle' },
    { name: 'Conseil stratégie IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        extraJsonLd={serviceJsonLd}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: BG_SOFT, color: INK, padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px) clamp(64px, 9vw, 88px)', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: GREY_500, display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: GREY_500 }}>Accueil</Link>
            <span style={{ color: GREY_700 }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: GREY_500 }}>Conseil IA</Link>
            <span style={{ color: GREY_700 }}>/</span>
            <span style={{ color: BLUE, fontWeight: 600 }}>Conseil stratégie IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: BLUE_SOFT, color: BLUE, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Target size={16} strokeWidth={2.2} aria-hidden="true" />
              Conseil stratégie IA
            </span>
            <span style={{ background: '#fff', color: GREY_500, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: `1px solid ${BORDER}` }}>
              Mission de 4 à 8 semaines
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: INK, letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM et featured snippet */}
          <p style={{ fontSize: 17, color: INK, lineHeight: 1.7, marginBottom: 20, maxWidth: 680 }}>
            <strong>{DIRECT_ANSWER}</strong>
          </p>

          <p style={{ fontSize: 17, color: GREY_700, lineHeight: 1.75, marginBottom: 40, maxWidth: 680 }}>
            {INTRO}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}>
              Contacter notre équipe <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href="#methode" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: INK, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: `1px solid ${BORDER}` }}>
              Découvrir la méthode
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ background: '#fff', color: GREY_700, padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, border: `1px solid ${BORDER}`, display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Icon size={15} strokeWidth={2.2} aria-hidden="true" style={{ color: BLUE }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: '#fff', padding: '44px clamp(20px, 4vw, 40px)', display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap', borderBottom: `1px solid ${BORDER}` }}>
        {[
          { num: '+1 500', label: "professionnels formés à l'IA" },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '2022', label: 'année de fondation à Lyon' },
          { num: 'FR · CH · BE', label: "zones d'intervention" },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: INK, margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: GREY_500, margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── QU'EST-CE QU'UNE STRATÉGIE IA ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', color: GREY_700, fontSize: 16, lineHeight: 1.75 }}>
          <div style={kickerStyle}>Définition</div>
          <h2 style={h2Style}>
            Qu'est-ce qu'une stratégie IA d'entreprise ?
          </h2>
          <p style={{ marginBottom: 24 }}>
            <strong style={{ color: INK }}>Une stratégie IA d'entreprise est le cadre de référence qui fixe l'ambition, les cas d'usage prioritaires, le budget, le calendrier et la gouvernance du déploiement de l'intelligence artificielle. Elle répond à quatre questions : pourquoi investir, sur quels processus, avec quels outils et quels garde-fous, selon quel séquencement.</strong>
          </p>
          <p style={{ marginBottom: 20 }}>
            Le sujet dépasse largement le choix d'un outil. Une stratégie IA aligne trois dimensions : la valeur (quels processus transformer en priorité, pour quel gain mesurable), les moyens (budget, compétences, architecture technique, qualité des données) et le cadre (RGPD, AI Act, sécurité, acceptabilité en interne). Les entreprises qui formalisent ce cadre avant d'investir évitent la dispersion des licences, les doublons d'outils et les pilotes sans lendemain.
          </p>
          <p style={{ marginBottom: 0 }}>
            La démarche s'inscrit dans la continuité du conseil en transformation numérique et intelligence artificielle : la stratégie IA en constitue aujourd'hui le volet le plus structurant, car elle touche simultanément les processus, les données et les compétences de toutes les directions. Elle forme aussi le premier temps des missions de notre <Link to="/conseil-intelligence-artificielle" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>cabinet de conseil en intelligence artificielle</Link>, qui couvre l'audit des usages, l'accompagnement opérationnel et la transformation culturelle.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE EN 4 PHASES ── */}
      <section id="methode" style={{ padding: SECTION_PAD, background: BG_SOFT, color: INK, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={kickerStyle}>Notre méthode</div>
          <h2 style={h2Style}>
            Comment se déroule une mission de conseil stratégie IA ?
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75, marginBottom: 44, maxWidth: 800 }}>
            <strong style={{ color: INK }}>La mission s'organise en quatre phases : diagnostic de maturité (2 à 3 semaines), cadrage et priorisation des cas d'usage par ROI (1 à 2 semaines), feuille de route 90 jours / 12 mois (1 à 2 semaines), puis gouvernance et conduite du changement (3 à 12 mois).</strong>{' '}
            Chaque phase se conclut par un livrable validé avec votre comité de direction.
          </p>

          <div style={{ ...cardStyle, padding: 'clamp(20px, 4vw, 36px)' }}>
            {PHASES.map((phase, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 'clamp(16px, 3vw, 28px)',
                padding: '28px 0',
                borderTop: i === 0 ? 'none' : `1px solid ${BORDER}`,
              }}>
                <div style={{
                  ...iconTileStyle,
                  fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 900, color: BLUE,
                }}>
                  {phase.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 10 }}>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: INK, margin: 0, letterSpacing: '-0.01em' }}>
                      {phase.title}
                    </h3>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: 12.5, fontWeight: 600, color: GREY_700,
                      background: BG_SOFT, border: `1px solid ${BORDER}`,
                      padding: '4px 12px', borderRadius: 99, flexShrink: 0,
                    }}>
                      <Clock size={13} color={BLUE} strokeWidth={2.2} aria-hidden="true" /> {phase.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, marginBottom: 14, marginTop: 0 }}>{phase.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px 20px' }}>
                    {phase.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: GREY_700 }}>
                        <Check size={16} color={BLUE} strokeWidth={2.5} aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Tableau récapitulatif des 4 phases */}
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: INK, letterSpacing: '-0.01em', margin: '48px 0 16px' }}>
            Les 4 phases en synthèse
          </h3>
          <div style={{ overflowX: 'auto', background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
              <thead>
                <tr>
                  {['Phase', 'Durée indicative', 'Livrable principal'].map((h, i) => (
                    <th key={i} scope="col" style={{
                      background: BG_SOFT, textAlign: 'left',
                      padding: '14px 18px', borderBottom: `1px solid ${BORDER}`,
                      fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13.5,
                      color: INK, whiteSpace: 'nowrap',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_PHASES.map((row, i) => {
                  const cell = {
                    padding: '15px 18px',
                    borderBottom: i === TABLE_PHASES.length - 1 ? 'none' : `1px solid ${BORDER}`,
                    color: GREY_700, lineHeight: 1.6, verticalAlign: 'top',
                  }
                  return (
                    <tr key={i}>
                      <th scope="row" style={{ ...cell, textAlign: 'left', fontWeight: 700, color: INK, fontFamily: 'Nunito, sans-serif', fontSize: 13.5 }}>{row.phase}</th>
                      <td style={{ ...cell, whiteSpace: 'nowrap' }}>{row.duree}</td>
                      <td style={cell}>{row.livrable}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, marginTop: 20, marginBottom: 14, maxWidth: 800 }}>
            <strong style={{ color: INK }}>En aval, la feuille de route appelle une mise en œuvre.</strong> Une fois les chantiers prioritaires arbitrés, la même équipe passe au build : notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link> conçoit et développe les solutions sur mesure, de l'agent métier à l'intégration au SI. La stratégie ne s'arrête pas au document : elle se déploie.
          </p>
          <p style={{ fontSize: 14.5, color: GREY_700, lineHeight: 1.7, marginTop: 0, marginBottom: 0, maxWidth: 800 }}>
            Pour préparer les arbitrages de la phase de cadrage, beaucoup de nos clients programment en amont notre <Link to="/formation-ia-dirigeants" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>formation IA pour dirigeants</Link>, certifiée Qualiopi et finançable OPCO : comprendre les capacités réelles des modèles rend les décisions de priorisation plus rapides et mieux argumentées. Pour la montée en compétences des équipes métier, l'ensemble de nos parcours est détaillé sur la page <Link to="/formation-intelligence-artificielle" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>formation intelligence artificielle</Link>.
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Pour qui</div>
          <h2 style={h2Style}>
            À qui s'adresse ce conseil stratégie IA ?
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75, marginBottom: 40, maxWidth: 800 }}>
            <strong style={{ color: INK }}>La mission s'adresse aux instances qui décident et financent la trajectoire IA : directions générales et COMEX de PME-ETI, directions de la transformation, DSI et directions du numérique.</strong>{' '}
            Elle leur fournit une base d'arbitrage chiffrée, une feuille de route séquencée et un schéma de gouvernance conforme au RGPD et à l'AI Act.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {POUR_QUI.map((p, i) => (
              <div key={i} style={cardStyle}>
                <div style={{ ...iconTileStyle, marginBottom: 18 }}>
                  <p.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 10, letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA MILIEU DE PAGE ── */}
      <section style={{ padding: '56px clamp(20px, 4vw, 40px)', background: BG_SOFT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          padding: 'clamp(28px, 4vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25, color: INK, letterSpacing: '-0.01em' }}>
              Besoin d'un cap clair pour votre stratégie IA&nbsp;?
            </h2>
            <p style={{ fontSize: 15, color: GREY_500, margin: 0, lineHeight: 1.6 }}>
              Réponse sous 24 h · Cadrage gratuit de 30 minutes · Mission sur devis
            </p>
          </div>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}>
            Contacter notre équipe <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── LIVRABLES ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Livrables</div>
          <h2 style={h2Style}>
            Quels livrables recevez-vous à l'issue de la mission ?
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, lineHeight: 1.75, marginBottom: 40, maxWidth: 800 }}>
            <strong style={{ color: INK }}>Six livrables structurent la mission : rapport de maturité IA, portefeuille de cas d'usage priorisé, feuille de route 90 jours / 12 mois, schéma de gouvernance, plan de formation des équipes et tableau d'indicateurs ROI.</strong>{' '}
            Tous sont remis en formats éditables et validés avec votre comité de direction à la fin de chaque phase.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {LIVRABLES.map((l, i) => (
              <div key={i} style={cardStyle}>
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <l.Icon size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>{l.title}</h3>
                <p style={{ fontSize: 14, color: GREY_700, lineHeight: 1.7, margin: 0 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISPOSITIF COMPLET (maillage interne) ── */}
      <section style={{ padding: SECTION_PAD, background: BG_SOFT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>De la feuille de route au déploiement</div>
          <h2 style={h2Style}>
            La stratégie débouche sur du build, pas seulement sur un rapport
          </h2>
          <p style={{ color: GREY_700, fontSize: 16, marginBottom: 36, maxWidth: 800, lineHeight: 1.75 }}>
            Une feuille de route ne produit ses effets que si elle est exécutée. Masteria prolonge la mission stratégique par la réalisation, portée par la même équipe : conception et développement des solutions sur mesure par notre <Link to="/agence-developpement-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>agence de développement IA</Link>, automatisation des processus, puis montée en compétences des équipes. En amont, un <Link to="/diagnostic-ia" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>diagnostic IA gratuit</Link> objective votre maturité, et nos <Link to="/ia-secteurs" style={{ color: BLUE, fontWeight: 700, textDecoration: 'none' }}>cas d'usage de l'IA par secteur</Link> alimentent la phase de priorisation. Conseil et développement se chiffrent sur devis ; seule la formation associée est finançable OPCO.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <Link to="/agence-developpement-ia" style={{ textDecoration: 'none' }}>
              <div
                style={{ ...cardStyle, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
              >
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <Cpu size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  Agence de développement IA
                </h3>
                <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '0 0 14px' }}>
                  Le débouché opérationnel de la feuille de route : conception et développement des solutions sur mesure (agents, copilotes, intégrations au SI), du prototype à la mise en production.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Découvrir le développement IA <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link to="/conseil-intelligence-artificielle" style={{ textDecoration: 'none' }}>
              <div
                style={{ ...cardStyle, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
              >
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <Compass size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  Cabinet de conseil en intelligence artificielle
                </h3>
                <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '0 0 14px' }}>
                  Audit des usages, accompagnement opérationnel, transformation : l'ensemble de nos expertises de conseil IA, dont la stratégie constitue le premier volet.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Découvrir le conseil IA <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link to="/formation-ia-dirigeants" style={{ textDecoration: 'none' }}>
              <div
                style={{ ...cardStyle, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
              >
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <GraduationCap size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  Formation IA pour dirigeants
                </h3>
                <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '0 0 14px' }}>
                  Un programme dédié aux DG et COMEX pour comprendre les modèles, arbitrer les investissements et porter la stratégie en interne. Certifié Qualiopi, finançable OPCO.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Découvrir la formation dirigeants <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
            <Link to="/agence-automatisation-ia" style={{ textDecoration: 'none' }}>
              <div
                style={{ ...cardStyle, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}
              >
                <div style={{ ...iconTileStyle, marginBottom: 16 }}>
                  <Workflow size={22} color={BLUE} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: '-0.01em' }}>
                  Agence d'automatisation IA
                </h3>
                <p style={{ fontSize: 14, color: GREY_500, lineHeight: 1.7, margin: '0 0 14px' }}>
                  Quand la feuille de route prévoit des chaînes de traitement automatisées (documents, emails, workflows multi-outils), notre agence d'automatisation IA conçoit et déploie les solutions.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: BLUE, fontWeight: 700 }}>
                  Découvrir l'automatisation IA <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 36 }}>
            Questions fréquentes sur le conseil stratégie IA
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: BG_SOFT, padding: SECTION_PAD, borderTop: `1px solid ${BORDER}` }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          background: INK, color: '#fff',
          borderRadius: 16,
          padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)',
          textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.2vw, 42px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff' }}>
            Parlons de votre stratégie IA
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 32px' }}>
            Décrivez-nous votre organisation, vos premiers usages et vos échéances. Nous revenons vers vous sous 24 heures avec une proposition de cadrage, après un premier échange gratuit de 30 minutes.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLUE, color: '#fff', padding: '15px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 800 }}>
            Contacter notre équipe <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 24, marginBottom: 0 }}>
            Cabinet de conseil et organisme de formation certifié Qualiopi · +1 500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>
    </>
  )
}
