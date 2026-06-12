import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Workflow, BadgeCheck, Wallet, MapPin, Users,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

/*
 * Page offre « agence d'automatisation IA » (slug /agence-automatisation-ia).
 * Cible : « agence automatisation ia » (390/mois, KD 10), « agence d'automatisation ia »,
 * « conseil automatisation ia ». Positionnement : Masteria cadre et déploie
 * l'automatisation AVEC les équipes du client (formation intégrée, autonomie finale).
 * Maillage : /automatisation-ia (guide pilier), /formation-automatisation-ia,
 * /conseil-intelligence-artificielle, /contact.
 * Accent bleu Masteria (#2563EB), pas d'orange.
 */

const SLUG = 'agence-automatisation-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Agence automatisation IA · Cadrage & déploiement | Masteria"
const META_DESC = "Agence d'automatisation IA : audit des processus, prototypage, déploiement et formation Qualiopi. Vos équipes restent autonomes. Cadrage initial gratuit."
const H1 = "L'agence d'automatisation IA qui rend vos équipes autonomes"

const HERO_BADGES = [
  { icon: BadgeCheck, label: 'Certifié Qualiopi' },
  { icon: Wallet,     label: 'Volet formation finançable OPCO' },
  { icon: MapPin,     label: 'Lyon · France · Suisse · Belgique' },
  { icon: Users,      label: 'Vos équipes restent autonomes' },
]

/* ───────── Méthode en 4 temps ───────── */

const METHODE = [
  {
    num: '01',
    title: 'Audit des processus',
    badge: 'Cadrage initial gratuit',
    desc: "Nous cartographions les tâches répétitives de chaque équipe, mesurons le temps consommé et scorons chaque candidate selon son impact et sa faisabilité. Ce premier travail évite l'erreur classique : automatiser ce qui est facile au lieu de ce qui rapporte.",
    livrable: "Une feuille de route priorisée et chiffrée, qui vous appartient, que vous poursuiviez avec nous ou non.",
  },
  {
    num: '02',
    title: 'Prototypage rapide sur 1 ou 2 cas',
    badge: '2 à 4 semaines',
    desc: "Nous construisons avec vos équipes un prototype fonctionnel sur un ou deux processus prioritaires, en conditions réelles, avec mesure du temps passé avant et après. Vous constatez la valeur sur un vrai flux avant d'engager le déploiement.",
    livrable: "Une automatisation qui tourne sur un processus réel et des chiffres pour décider de la suite.",
  },
  {
    num: '03',
    title: 'Déploiement outillé',
    badge: 'Selon le périmètre',
    desc: "Nous installons et configurons les outils retenus (Make, Zapier, n8n, Power Automate, assistants IA personnalisés), connectons vos applications et posons les garde-fous : validation humaine sur les décisions sensibles, traçabilité, conformité RGPD.",
    livrable: "Des automatisations documentées, supervisées et intégrées à vos outils existants.",
  },
  {
    num: '04',
    title: 'Formation et autonomisation des équipes',
    badge: '1 980 € / jour · finançable OPCO',
    desc: "Vos équipes apprennent à utiliser, surveiller et faire évoluer leurs automatisations, avec notre pédagogie certifiée Qualiopi. À la fin de la mission, elles savent construire la suivante sans nous.",
    livrable: "Des référents internes formés et une équipe propriétaire de son système.",
  },
]

/* ───────── Ce qu'on automatise le plus souvent ───────── */

const AUTOMATISATIONS = [
  { icon: '📥', title: 'Emails et demandes entrantes', desc: "Classement par nature, projet de réponse préparé, routage vers la bonne personne. La boîte générique cesse d'être un goulot d'étranglement." },
  { icon: '🧾', title: 'Factures et relances', desc: "Extraction des données de factures, rapprochement avec les commandes, relances d'impayés rédigées et programmées automatiquement." },
  { icon: '🗒️', title: 'Comptes rendus et reporting', desc: "Réunions transcrites et synthétisées, reporting hebdomadaire consolidé et commenté à partir de vos outils existants." },
  { icon: '🎯', title: 'Qualification des leads', desc: "Lecture de la demande, scoring selon vos critères, fiche de synthèse et routage au bon commercial, CRM mis à jour sans saisie." },
  { icon: '✍️', title: 'Contenus récurrents', desc: "Déclinaison de vos contenus piliers en posts, newsletters et fiches produit, dans votre charte éditoriale, avec validation humaine." },
  { icon: '🔄', title: 'Synchronisation entre outils', desc: "CRM, tableurs, outils métier : les informations circulent sans ressaisie, les doublons et les oublis disparaissent." },
]

/* ───────── Pourquoi Masteria ───────── */

const WHY_MASTERIA = [
  { icon: '🎯', title: "Spécialisés à 100 % sur l'IA", desc: "Masteria travaille sur l'intelligence artificielle depuis 2022, en formation comme en accompagnement. Les outils, les pièges et les raccourcis du sujet font notre quotidien." },
  { icon: '🎓', title: 'Une pédagogie certifiée Qualiopi', desc: "Plus de 1 500 professionnels formés et 98 % de satisfaction. Transférer la compétence est notre métier d'origine, et cela change la nature de l'accompagnement." },
  { icon: '🔑', title: "L'autonomie comme critère de succès", desc: "La mission réussit quand vos équipes savent faire vivre le système sans nous : créer un flux, corriger une dérive, former un nouvel arrivant." },
  { icon: '📍', title: 'Lyon, France entière, Suisse et Belgique', desc: "Basés à Lyon, nous intervenons sur site dans toute la France ainsi qu'en Suisse et en Belgique, et à distance pour le suivi." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Que fait une agence d'automatisation IA ?",
    a: "Elle identifie les processus automatisables d'une entreprise, conçoit les automatisations (workflows no-code, assistants IA, agents) et les déploie dans les outils existants. Chez Masteria, la mission inclut systématiquement la formation des équipes : vous restez propriétaire et opérateur de vos automatisations après notre départ.",
  },
  {
    q: "Quelle différence entre Masteria et une agence d'automatisation classique ?",
    a: "Une agence classique construit vos automatisations puis facture leur maintenance, ce qui installe une dépendance durable. Masteria construit avec vos équipes et les forme à reprendre la main. Cette approche vient de notre métier d'origine, la formation professionnelle certifiée Qualiopi : l'accompagnement se paie une fois, la compétence reste.",
  },
  {
    q: "Combien coûte un accompagnement en automatisation IA ?",
    a: "Le cadrage initial est gratuit. L'accompagnement (prototypage, déploiement) est chiffré sur devis après ce cadrage, selon le nombre de processus et le niveau d'autonomie visé. Le volet formation coûte 1 980 € HT par jour et il est finançable par votre OPCO grâce à notre certification Qualiopi. Seule cette partie formation est éligible OPCO : le conseil pur ne l'est pas, et nous ne promettons jamais l'inverse.",
  },
  {
    q: "Intervenez-vous à distance ou sur site ?",
    a: "Les deux. Masteria est basée à Lyon et intervient sur site dans toute la France, en Suisse et en Belgique, ainsi qu'à distance. Le format se choisit selon vos contraintes : les audits et les formations gagnent souvent à se faire sur site, le suivi de déploiement fonctionne très bien en visio.",
  },
  {
    q: "Avec quels outils travaillez-vous ?",
    a: "Make, Zapier, n8n et Power Automate pour les workflows, ainsi que les assistants IA du marché (ChatGPT, Claude, Gemini, Copilot) et leurs automatisations natives. Nous partons toujours de votre existant : si vos équipes vivent dans Microsoft 365, Power Automate s'impose souvent ; si la confidentialité exige un hébergement maîtrisé, n8n est un bon candidat. L'outil découle du besoin, jamais l'inverse.",
  },
]

/* ───────── JSON-LD ───────── */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Agence d'automatisation IA",
  description: "Cadrage, prototypage et déploiement d'automatisations IA avec les équipes du client : audit des processus, outils no-code (Make, Zapier, n8n, Power Automate), formation certifiée Qualiopi.",
  url: 'https://www.master-ia.fr/agence-automatisation-ia',
  serviceType: 'Automatisation par intelligence artificielle',
  areaServed: ['France', 'Suisse', 'Belgique'],
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
}

/* ───────── Composants ───────── */

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

export default function AgenceAutomatisationIAPage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agence automatisation IA', slug: SLUG },
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Agence automatisation IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Workflow size={16} strokeWidth={2.2} />
              Accompagnement opérationnel
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Cadrage initial gratuit
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          {/* GEO : réponse directe pour citation LLM */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 700, fontWeight: 500 }}>
            <strong>Masteria cadre, prototype et déploie vos automatisations IA avec vos équipes : audit des processus, mise en place des outils (Make, Zapier, n8n, Power Automate, assistants IA) et formation certifiée Qualiopi, pour que vos collaborateurs sachent faire vivre le système après notre départ. Le cadrage initial est gratuit.</strong>
          </p>

          <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.8, marginBottom: 40, maxWidth: 700 }}>
            La plupart des agences construisent vos automatisations puis facturent leur maintenance. Masteria fait le travail avec vos équipes et leur transfère la compétence : à la fin de la mission, elles savent surveiller, corriger et créer leurs propres flux. Cette autonomie est possible parce que la formation fait partie de la méthode, portée par un organisme certifié Qualiopi qui a déjà formé plus de 1 500 professionnels à l'IA.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/contact" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 4px 12px ${c}30` }}>
              Demander un cadrage gratuit →
            </Link>
            <a href="#methode" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir la méthode
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
          { num: '2022', label: 'année de création de Masteria' },
          { num: 'Gratuit', label: 'le cadrage initial de votre projet' },
        ].map(s => (
          <div key={s.num} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 36, fontWeight: 900, color: '#0A0A0A', margin: 0, lineHeight: 1 }}>{s.num}</p>
            <p style={{ fontSize: 13, color: '#4B5563', margin: '6px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── MÉTHODE EN 4 TEMPS ── */}
      <section id="methode" style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Notre méthode en 4 temps
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 16, lineHeight: 1.7 }}>
            Le même chemin pour chaque mission : comprendre, prouver, déployer, transmettre. Chaque temps produit un livrable concret et vous décidez de continuer ou non à chaque étape.
          </p>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 48, lineHeight: 1.7 }}>
            Vous découvrez le sujet ? Notre <Link to="/automatisation-ia" style={{ color: c, fontWeight: 600 }}>guide complet de l'automatisation IA</Link> pose les bases : définition, cas d'usage par fonction, outils et budgets.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {METHODE.map(step => (
              <div key={step.num} style={{ background: '#F9FAFB', borderRadius: 12, padding: '28px 30px', border: '1px solid #E5E7EB', borderLeftColor: c, borderLeftWidth: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>
                    <span style={{ color: c, fontWeight: 900, marginRight: 12 }}>{step.num}</span>
                    {step.title}
                  </h3>
                  <span style={{ background: cLight, color: c, padding: '4px 12px', borderRadius: 99, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{step.badge}</span>
                </div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 16px' }}>{step.desc}</p>
                <div style={{ background: `${c}12`, border: `1px solid ${c}30`, borderRadius: 8, padding: '12px 16px' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: c, display: 'block', marginBottom: 4 }}>CE QUE VOUS OBTENEZ</span>
                  <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{step.livrable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QU'ON AUTOMATISE LE PLUS SOUVENT ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Ce que nous automatisons le plus souvent
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 40, lineHeight: 1.7 }}>
            Six familles de processus reviennent dans la majorité des missions. Chaque déploiement part de vos outils existants, sans refonte de votre système d'information.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {AUTOMATISATIONS.map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI MASTERIA ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Pourquoi choisir Masteria comme agence d'automatisation IA ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
            {WHY_MASTERIA.map(card => (
              <div key={card.title} style={{ background: '#F9FAFB', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0 }}>
            Si votre besoin dépasse l'automatisation (stratégie IA globale, gouvernance, conformité, feuille de route à l'échelle de l'entreprise), notre <Link to="/conseil-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>cabinet de conseil en intelligence artificielle</Link> prend le relais.
          </p>
        </div>
      </section>

      {/* ── TARIFICATION TRANSPARENTE ── */}
      <section id="tarifs" style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Une tarification transparente
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 24, marginBottom: 28 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>CADRAGE INITIAL</div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, marginBottom: 20 }}>Gratuit</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Analyse de vos processus et de vos outils', 'Feuille de route priorisée', "Chiffrage détaillé de l'accompagnement", 'Sans engagement'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <span style={{ color: c }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>ACCOMPAGNEMENT</div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1, marginBottom: 20 }}>Sur devis</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Prototypage sur 1 ou 2 cas prioritaires', 'Déploiement dans vos outils', 'Documentation et garde-fous', 'Périmètre et budget fixés après cadrage'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <span style={{ color: c }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: `2px solid ${c}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: c, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>VOLET FORMATION</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 20 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 38, fontWeight: 900, color: '#0A0A0A', lineHeight: 1 }}>1 980 €</div>
                <div style={{ fontSize: 13, color: '#6B7280', paddingBottom: 6 }}>/ jour HT</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {["Intra-entreprise (jusqu'à 12 participants) ou individuel", 'Certifié Qualiopi', 'Finançable par votre OPCO', 'Montage du dossier pris en charge'].map(item => (
                  <li key={item} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <span style={{ color: c }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0 }}>
            Un point d'honnêteté sur le financement : seule la formation est finançable par votre OPCO. Le conseil et le déploiement ne le sont pas, et un prestataire qui vous promet l'inverse vous expose à un refus de prise en charge. Notre méthode intègre un vrai volet formation, décrit sur la page <Link to="/formation-automatisation-ia" style={{ color: c, fontWeight: 600 }}>formation automatisation IA</Link>, ce qui réduit légitimement le reste à charge.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 40 }}>
            Questions fréquentes, Agence d'automatisation IA
          </h2>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 12 }}>
            Pour aller plus loin
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32 }}>
            Comprendre le sujet, former vos équipes ou élargir à la stratégie IA de l'entreprise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { label: 'Automatisation IA : le guide complet', href: '/automatisation-ia', tag: 'Guide', desc: "Définition, cas d'usage par fonction, outils, méthode en 5 étapes et budgets." },
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Formation', desc: "2 jours pour apprendre à construire et superviser ses automatisations. Finançable OPCO." },
              { label: 'Conseil en intelligence artificielle', href: '/conseil-intelligence-artificielle', tag: 'Conseil', desc: "Audit, stratégie et gouvernance IA : l'accompagnement au niveau de la direction." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: 10, padding: 22, border: `2px solid ${c}20`, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${c}20`}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: '0 0 10px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700 }}>En savoir plus →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Parlons de vos processus
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Décrivez-nous les tâches qui consomment le plus de temps dans vos équipes. Nous revenons vers vous sous 24 heures avec un créneau pour le cadrage gratuit : analyse de vos processus, feuille de route priorisée, chiffrage. Vous repartez avec un plan, avec ou sans nous.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: c, color: '#fff', padding: '16px 36px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24, boxShadow: `0 4px 14px ${c}40` }}>
            Demander un cadrage gratuit →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Réponse sous 24 h · Certifié Qualiopi · +1 500 professionnels formés · Lyon, France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
