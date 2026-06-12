import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Target, Compass, Building2, MonitorSmartphone, BadgeCheck,
  LineChart, Users, CheckCircle2, GraduationCap,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

/*
 * Page service « Conseil stratégie IA » — modèle structurel des pages dédiées
 * (GestionDeProjetIAPage) : constantes en tête, SEOHead (FAQ + breadcrumbs),
 * hero avec badges, sections, FAQ, CTA contact. Pas de courseData : il s'agit
 * d'une prestation de conseil, pas d'une formation.
 * Cible : « conseil stratégie ia » (90/mois, KD 45), « conseil stratégique
 * intelligence artificielle », « conseil en transformation numérique et
 * intelligence artificielle ».
 */

const SLUG = 'conseil-strategie-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Conseil stratégie IA : audit, feuille de route | Masteria"
const META_DESC = "Conseil stratégie IA pour PME et ETI : diagnostic de maturité, cas d'usage priorisés par ROI, feuille de route 90 jours et gouvernance. Cadrage gratuit."
const H1 = "Conseil stratégie IA : du diagnostic à la feuille de route"
const DIRECT_ANSWER = "Le conseil stratégie IA consiste à définir où, comment et dans quel ordre déployer l'intelligence artificielle dans une entreprise. Masteria structure la démarche en 4 phases : diagnostic de maturité, priorisation des cas d'usage par ROI, feuille de route à 90 jours et 12 mois, gouvernance et conduite du changement."
const INTRO = "Outils qui se multiplient, équipes qui s'équipent en ordre dispersé, budgets engagés sans indicateur de retour : les directions générales ont besoin d'un cap avant d'investir davantage. Notre mission de conseil stratégique en intelligence artificielle donne à votre COMEX une vision partagée, des priorités chiffrées et un plan d'exécution réaliste."

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
    title: 'Rapport de maturité IA',
    desc: "État des lieux par fonction : usages, données, compétences, risques. Le point de départ objectif de la stratégie.",
  },
  {
    title: "Portefeuille de cas d'usage priorisé",
    desc: "Matrice impact × effort consolidée, gains et coûts estimés pour chaque cas d'usage retenu.",
  },
  {
    title: 'Feuille de route 90 jours / 12 mois',
    desc: "Plan séquencé avec jalons, budget, responsabilités et prérequis techniques pour chaque chantier.",
  },
  {
    title: 'Schéma de gouvernance',
    desc: "Comité IA, charte d'usage interne, registre des systèmes, dispositif de conformité RGPD et AI Act.",
  },
  {
    title: 'Plan de formation des équipes',
    desc: "Parcours par population (COMEX, managers, équipes métier), éligible OPCO grâce à notre certification Qualiopi.",
  },
  {
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
  serviceType: ['Conseil stratégie IA', 'Diagnostic de maturité IA', 'Feuille de route IA', 'Gouvernance IA'],
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: {
    '@type': 'Organization',
    name: 'Masteria',
    url: 'https://www.master-ia.fr',
  },
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
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 60, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <Link to="/conseil-intelligence-artificielle" style={{ color: '#6B7280' }}>Conseil IA</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Conseil stratégie IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Target size={16} strokeWidth={2.2} />
              Conseil stratégie IA
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Mission de 4 à 8 semaines
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM et featured snippet */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 680 }}>
            <strong>{DIRECT_ANSWER}</strong>
          </p>

          <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            {INTRO}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 4px 12px ${c}30` }}>
              Contacter notre équipe →
            </Link>
            <a href="#methode" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Découvrir la méthode
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
          { num: '+1 500', label: "professionnels formés à l'IA" },
          { num: '98 %', label: 'de taux de satisfaction' },
          { num: '2022', label: 'année de fondation à Lyon' },
          { num: 'FR · CH · BE', label: "zones d'intervention" },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#4B5563', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── QU'EST-CE QU'UNE STRATÉGIE IA ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', color: '#1F2937', fontSize: 16, lineHeight: 1.8 }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 24 }}>
            Qu'est-ce qu'une stratégie IA d'entreprise ?
          </h2>
          <p style={{ marginBottom: 24 }}>
            <strong>Une stratégie IA d'entreprise est le cadre de référence qui fixe l'ambition, les cas d'usage prioritaires, le budget, le calendrier et la gouvernance du déploiement de l'intelligence artificielle. Elle répond à quatre questions : pourquoi investir, sur quels processus, avec quels outils et quels garde-fous, selon quel séquencement.</strong>
          </p>
          <p style={{ marginBottom: 20 }}>
            Le sujet dépasse largement le choix d'un outil. Une stratégie IA aligne trois dimensions : la valeur (quels processus transformer en priorité, pour quel gain mesurable), les moyens (budget, compétences, architecture technique, qualité des données) et le cadre (RGPD, AI Act, sécurité, acceptabilité en interne). Les entreprises qui formalisent ce cadre avant d'investir évitent la dispersion des licences, les doublons d'outils et les pilotes sans lendemain.
          </p>
          <p style={{ marginBottom: 0 }}>
            La démarche s'inscrit dans la continuité du conseil en transformation numérique et intelligence artificielle : la stratégie IA en constitue aujourd'hui le volet le plus structurant, car elle touche simultanément les processus, les données et les compétences de toutes les directions.
          </p>
        </div>
      </section>

      {/* ── MÉTHODE EN 4 PHASES ── */}
      <section id="methode" style={{ padding: '80px 40px', background: '#F5F3EE', color: '#0A0A0A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            La méthode Masteria en 4 phases
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 56 }}>
            Une démarche séquencée, avec un livrable validé à la fin de chaque phase. Les trois premières phases tiennent en 4 à 8 semaines.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PHASES.map((phase, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 28, border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4, borderLeftStyle: 'solid' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: 0, display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <span style={{
                      fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900,
                      background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text', lineHeight: 1,
                    }}>
                      {phase.n}
                    </span>
                    {phase.title}
                  </h3>
                  <span style={{ background: '#F3F4F6', color: '#6B7280', padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{phase.duration}</span>
                </div>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 16 }}>{phase.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {phase.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#374151' }}>
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

      {/* ── POUR QUI ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            À qui s'adresse ce conseil stratégie IA ?
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
            La mission s'adresse aux instances qui décident et financent la trajectoire IA de l'organisation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {POUR_QUI.map((p, i) => (
              <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 28, border: `2px solid ${cLight}`, borderLeftColor: c, borderLeftWidth: 4 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: cLight, border: '1px solid #BFDBFE',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <p.Icon size={22} color={c} strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA MILIEU DE PAGE ── */}
      <section style={{ padding: '48px 40px', background: `linear-gradient(135deg, ${c} 0%, ${c}dd 100%)`, color: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25 }}>
              Besoin d'un cap clair pour votre stratégie IA&nbsp;?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Réponse sous 24 h · Cadrage gratuit de 30 minutes · Mission sur devis
            </p>
          </div>
          <Link to="/contact" style={{ background: '#fff', color: c, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Contacter notre équipe →
          </Link>
        </div>
      </section>

      {/* ── LIVRABLES ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Les livrables de votre stratégie IA
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40 }}>
            Six livrables concrets, remis en formats éditables et validés avec votre comité de direction à chaque phase.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {LIVRABLES.map((l, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <CheckCircle2 size={22} color={c} strokeWidth={2.2} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{l.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISPOSITIF COMPLET (maillage interne) ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Stratégie, conseil, formation : un dispositif complet
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, maxWidth: 720, lineHeight: 1.7 }}>
            Une stratégie produit ses effets quand elle s'accompagne d'une exécution outillée et d'équipes formées. Masteria articule la mission stratégique avec deux offres complémentaires, portées par la même équipe.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <Link to="/conseil-intelligence-artificielle" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#F9FAFB', borderRadius: 12, padding: 28, border: `2px solid ${c}20`, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = c}
                onMouseLeave={e => e.currentTarget.style.borderColor = `${c}20`}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: cLight, border: '1px solid #BFDBFE',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <Compass size={22} color={c} strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>
                  Cabinet de conseil en intelligence artificielle
                </h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>
                  Audit des usages, accompagnement opérationnel, transformation : l'ensemble de nos expertises de conseil IA, dont la stratégie constitue le premier volet.
                </p>
                <span style={{ fontSize: 13, color: c, fontWeight: 700 }}>Découvrir le conseil IA →</span>
              </div>
            </Link>
            <Link to="/formation-ia-dirigeants" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#F9FAFB', borderRadius: 12, padding: 28, border: `2px solid ${c}20`, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = c}
                onMouseLeave={e => e.currentTarget.style.borderColor = `${c}20`}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: cLight, border: '1px solid #BFDBFE',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <GraduationCap size={22} color={c} strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>
                  Formation IA pour dirigeants
                </h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>
                  Un programme dédié aux DG et COMEX pour comprendre les modèles, arbitrer les investissements et porter la stratégie en interne. Certifié Qualiopi, finançable OPCO.
                </p>
                <span style={{ fontSize: 13, color: c, fontWeight: 700 }}>Découvrir la formation dirigeants →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Questions fréquentes sur le conseil stratégie IA
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Parlons de votre stratégie IA
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Décrivez-nous votre organisation, vos premiers usages et vos échéances. Nous revenons vers vous sous 24 heures avec une proposition de cadrage, après un premier échange gratuit de 30 minutes.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: c, color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Cabinet de conseil et organisme de formation certifié Qualiopi · +1 500 professionnels formés · 98 % de satisfaction
          </p>
        </div>
      </section>
    </>
  )
}
