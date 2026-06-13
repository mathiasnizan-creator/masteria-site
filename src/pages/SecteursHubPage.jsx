import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Landmark, Factory, HeartPulse, Scale, ShoppingCart, Truck,
  Building2, Briefcase, Plane, Wheat, Server, Compass, Cpu, Workflow,
  Stethoscope, Grid3x3, Check,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { SECTEURS } from '../data/secteur-ia-data'

/*
 * Hub « IA par secteur d'activité » (slug /ia-secteurs).
 * Liste les 12 secteurs en cartes, intro citable, maillage vers chaque secteur,
 * /diagnostic-ia, /contact et /agence-developpement-ia.
 * Design premium identique aux pages secteur : kickers, icônes lucide, cartes
 * radius 16, CTA final sombre, accent #2563EB. Zéro emoji affiché.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'ia-secteurs'
const c = '#2563EB'
const cLight = '#DBEAFE'

const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const WRAP = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }

const META_TITLE = "IA par secteur d'activité · conseil & dev IA | Masteria"
const META_DESC = "IA par secteur : banque, industrie, santé, juridique, retail, logistique, secteur public, tech et plus. Conseil et dev IA sur mesure. Cadrage gratuit."
const H1 = "IA par secteur d'activité : conseil et développement sur mesure"

/* Mapping nom d'icône (données) -> composant lucide pour le hub. */
const ICONS = {
  Landmark, Factory, HeartPulse, Scale, ShoppingCart, Truck,
  Building2, Briefcase, Plane, Wheat, Server,
}

const APPROACH = [
  { icon: Compass, title: 'Un cadrage par secteur', desc: "Nous partons des cas d'usage réels de votre secteur et de vos contraintes (réglementation, confidentialité, systèmes) pour prioriser ce qui crée de la valeur." },
  { icon: Cpu, title: 'Un développement sur mesure', desc: "Agents, copilotes, intégrations LLM/RAG sur vos données : nous construisons les solutions propres à votre métier, du prototype à la mise en production." },
  { icon: Workflow, title: 'Une autonomie en sortie', desc: "Documentation et transfert systématiques : vous restez propriétaire du code et capable de faire vivre la solution une fois en production." },
]

/* FAQ du hub : questions transverses au cluster, dont « combien coûte » (honnête) et différenciation. */
const HUB_FAQ = [
  {
    q: "Comment l'approche IA change-t-elle selon le secteur d'activité ?",
    a: "La valeur de l'IA et ses garde-fous dépendent du métier : conformité LCB-FT en banque, hébergement HDS en santé, secret professionnel dans le droit, souveraineté dans le public, propriété intellectuelle dans l'industrie. Les cas d'usage et les contraintes diffèrent, c'est pourquoi chaque secteur a sa page dédiée et son cadrage propre.",
  },
  {
    q: "Mon secteur n'a pas de page dédiée : pouvez-vous quand même intervenir ?",
    a: "Oui. Notre méthode (cadrer, développer, rendre autonome) s'applique à tout secteur B2B, même hors des douze pages publiées. Décrivez votre activité et vos enjeux : nous revenons sous 24 heures avec une première lecture des cas d'usage pertinents et une proposition de cadrage gratuit, sans engagement.",
  },
  {
    q: "Combien coûte un projet IA par secteur d'activité ?",
    a: "Il n'y a pas de prix sur étagère : le budget dépend du périmètre, des contraintes de données et du niveau d'intégration à vos systèmes. Nous travaillons au forfait, avec périmètre, livrables et calendrier écrits avant signature. Un cas pilote cadré reste un engagement contenu ; un déploiement à l'échelle est plus conséquent. Le cadrage initial est gratuit et débouche sur un devis ferme.",
  },
  {
    q: "Qu'est-ce qui distingue Masteria d'une ESN ou d'un éditeur généraliste ?",
    a: "Nous sommes un cabinet spécialisé uniquement sur l'IA, indépendant des éditeurs : nous ne vendons ni licence ni plateforme. Nous cadrons la stratégie, développons les solutions adaptées aux contraintes de votre secteur, documentons et transférons. Vous restez propriétaire du code et autonome, plutôt que captif d'un outil ou d'un abonnement.",
  },
  {
    q: "Faites-vous aussi de la formation en plus du conseil et du développement ?",
    a: "Oui. Au-delà du conseil et du développement sur mesure, nous formons vos équipes pour qu'elles sachent faire fonctionner et étendre ce qui a été construit, par métier et par outil. Le volet formation est certifié Qualiopi et finançable par votre OPCO en France ; le conseil et le développement, eux, restent des prestations de service non finançables par l'OPCO.",
  },
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
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function SecteursHubPage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'IA par secteur', slug: SLUG },
  ]

  /* JSON-LD ItemList des 12 secteurs. */
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE}/${SLUG}#itemlist`,
    name: "IA par secteur d'activité — Masteria",
    description: META_DESC,
    numberOfItems: SECTEURS.length,
    itemListElement: SECTEURS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `IA pour ${s.name}`,
      url: `${SITE}/${s.slug}`,
    })),
  }

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={HUB_FAQ}
        extraJsonLd={itemListJsonLd}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#F9FAFB', color: '#0A0A0A', padding: 'clamp(48px, 7vw, 72px) 24px clamp(56px, 8vw, 80px)', borderBottom: '1px solid #E5E7EB' }}>
        <div style={WRAP}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>IA par secteur</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Grid3x3 size={16} strokeWidth={2.2} aria-hidden="true" />
              12 secteurs B2B couverts
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Conseil · Développement sur mesure · Automatisation
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em', maxWidth: 920 }}>
            {H1}
          </h1>

          {/* Réponse directe en gras (citable LLM) */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 800 }}>
            <strong>
              Masteria conçoit et développe des solutions IA sur mesure secteur par secteur : agents, automatisations et outils adaptés aux cas d'usage et aux contraintes réglementaires de chaque industrie. Banque, industrie, santé, juridique, retail, logistique, immobilier, secteur public, conseil, tourisme, agroalimentaire et tech : chaque secteur a sa page dédiée.
            </strong>
          </p>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, marginBottom: 40, maxWidth: 800 }}>
            Les cas d'usage de l'IA ne se ressemblent pas d'un secteur à l'autre : la conformité LCB-FT en banque, l'hébergement HDS en santé, le secret professionnel dans le droit, la souveraineté dans le public, la propriété intellectuelle dans l'industrie. Nous partons de votre secteur, de ses contraintes et de ses cas réels, pour cadrer puis développer ce qui crée vraiment de la valeur. Cabinet spécialisé sur l'intelligence artificielle depuis 2022, fondé à Lyon.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/diagnostic-ia" style={{ background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Faire un diagnostic IA
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#secteurs" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir les 12 secteurs
            </a>
          </div>
        </div>
      </section>

      {/* ── GRILLE DES 12 SECTEURS ── */}
      <section id="secteurs" style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={WRAP}>
          <div style={kickerStyle}>Les secteurs</div>
          <h2 style={h2Style}>Choisissez votre secteur d'activité</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 820 }}>
            Chaque page détaille les enjeux propres du secteur, les difficultés que nous adressons, des prestations concrètes (agents, automatisations, copilotes) et la contrainte réglementaire ou de confidentialité à respecter.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {SECTEURS.map(s => {
              const Icon = ICONS[s.icon] || Briefcase
              return (
                <Link key={s.slug} to={`/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ ...cardStyle, padding: 28, transition: 'border-color 0.2s, box-shadow 0.2s', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = c; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.10)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.04)' }}
                  >
                    <div style={{ ...iconBoxStyle, marginBottom: 16 }}>
                      <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                      {s.name}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '0 0 16px', flex: 1 }}>{s.tagline}</p>
                    <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Voir l'IA pour ce secteur
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── NOTRE APPROCHE ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={WRAP}>
          <div style={kickerStyle}>Notre approche</div>
          <h2 style={h2Style}>Une même méthode, déclinée par secteur</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 820 }}>
            <strong style={{ color: '#0A0A0A' }}>Quel que soit le secteur, la logique est la même : cadrer la stratégie, développer les solutions sur mesure, rendre vos équipes autonomes.</strong>{' '}
            Ce qui change d'un secteur à l'autre, ce sont les cas d'usage et les contraintes, que nous intégrons dès le cadrage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {APPROACH.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ ...iconBoxStyle, marginBottom: 16 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 820 }}>
            Pour le détail de notre capacité de build (agents, automatisations, applications métier, intégrations LLM/RAG), consultez notre{' '}
            <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link>.
          </p>
        </div>
      </section>

      {/* ── POURQUOI UNE APPROCHE SECTORIELLE (réponses citables) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={kickerStyle}>Approche sectorielle</div>
          <h2 style={{ ...h2Style, marginBottom: 24 }}>Pourquoi une approche IA par secteur d'activité ?</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 24px' }}>
            <strong style={{ color: '#0A0A0A' }}>Parce que la valeur de l'IA et ses garde-fous dépendent du secteur.</strong>{' '}
            Un agent de synthèse de dossiers de crédit, un assistant documentaire conforme aux données de santé et un copilote de support e-commerce ne posent pas les mêmes questions de conception, de données et de conformité. Partir du secteur, c'est gagner en pertinence sur les cas d'usage et en sécurité sur les contraintes.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              "Des cas d'usage concrets et déjà identifiés pour votre métier, plutôt qu'une promesse générique.",
              "Les bonnes contraintes intégrées dès le départ : secret bancaire, hébergement HDS, secret professionnel, souveraineté, propriété intellectuelle.",
              "Un vocabulaire et des livrables qui parlent à vos équipes métier, ce qui accélère l'adoption.",
            ].map((pt, i) => (
              <li key={i} style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Check size={20} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 32 }}>Questions fréquentes sur l'IA par secteur</h2>
          <div>
            {HUB_FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} color={c} />
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 820 }}>
            Pour aller plus loin, faites un{' '}
            <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>, explorez{' '}
            <Link to="/solutions-ia" style={{ color: c, fontWeight: 600 }}>toutes nos solutions IA</Link> ou{' '}
            <Link to="/contact" style={{ color: c, fontWeight: 600 }}>contactez notre équipe</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE (bandeau sombre) ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ ...WRAP, background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div style={{ ...kickerStyle, color: cLight }}>Premier échange gratuit</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Votre secteur n'est pas dans la liste ?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Notre méthode s'applique à tout secteur B2B. Décrivez votre activité et vos enjeux : nous revenons vers vous sous 24 heures avec une première lecture des cas d'usage et une proposition de cadrage gratuit.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
              Contacter notre équipe
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '16px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, border: '1px solid #374151' }}>
              <Stethoscope size={17} strokeWidth={2.2} aria-hidden="true" />
              Faire un diagnostic IA
            </Link>
          </div>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
            IA par secteur · Conseil, développement sur mesure, automatisation · Spécialistes IA depuis 2022 · Lyon, France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
