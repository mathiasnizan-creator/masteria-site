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
import { useIsDesktop } from '../hooks/useMediaQuery'

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
const KEYWORDS = "ia par secteur, intelligence artificielle par secteur, ia secteur d'activité, ia banque, ia industrie, ia santé, cas d'usage ia secteur"

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${SITE}/${SLUG}#article`,
  headline: "IA par secteur d'activité : conseil et développement sur mesure",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-06-13',
  dateModified: '2026-07-02',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${SITE}/${SLUG}#webpage` },
  about: ["Intelligence artificielle par secteur d'activité", 'IA dans la banque et la finance', "IA dans l'industrie", 'IA dans la santé'],
}

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
    a: "Nous sommes un cabinet spécialisé uniquement sur l'IA, indépendant des éditeurs : nous ne vendons ni licence ni plateforme. Nous cadrons la stratégie, développons les solutions adaptées aux contraintes de votre secteur, documentons et transférons. Vous restez propriétaire du code et autonome : aucune dépendance à un outil ou à un abonnement.",
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
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function SecteursHubPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (intro « Notre approche » + FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

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
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={HUB_FAQ}
        datePublished="2026-06-13"
        dateModified="2026-07-02"
        extraJsonLd={[itemListJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...WRAP, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>IA par secteur</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Grid3x3 size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              IA par secteur d'activité
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            IA par secteur d'activité
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>conseil et développement sur mesure</span>
          </h1>

          {/* Byline E-E-A-T : auteur identifié + fraîcheur visible */}
          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en juillet 2026
          </p>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria conçoit et développe des solutions IA sur mesure secteur par secteur : agents, automatisations et outils adaptés aux cas d'usage et aux contraintes réglementaires de chaque industrie. Banque, industrie, santé, juridique, retail, logistique, immobilier, secteur public, conseil, tourisme, agroalimentaire et tech : <strong style={{ color: '#fff', fontWeight: 700 }}>chaque secteur a sa page dédiée</strong>.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Les cas d'usage de l'IA ne se ressemblent pas d'un secteur à l'autre : la conformité LCB-FT en banque, l'hébergement HDS en santé, le secret professionnel dans le droit, la souveraineté dans le public, la propriété intellectuelle dans l'industrie. Nous partons de votre secteur, de ses contraintes et de ses cas réels, pour cadrer puis développer ce qui crée vraiment de la valeur. Cabinet spécialisé sur l'intelligence artificielle depuis 2022, fondé à Lyon.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Faire un diagnostic IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#secteurs" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les 12 secteurs
            </a>
          </div>

          {/* chips de positionnement */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
            {['12 secteurs B2B couverts', 'Conseil', 'Développement sur mesure', 'Automatisation'].map((label, i) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                {i === 0 && <Grid3x3 size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />}
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE DES 12 SECTEURS (ancre sombre — section dense) ── */}
      <section id="secteurs" style={{ position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...WRAP, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Les secteurs</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Choisissez votre secteur d'activité</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 40px', maxWidth: 880 }}>
            Chaque page détaille les enjeux propres du secteur, les difficultés que nous adressons, des prestations concrètes (agents, automatisations, copilotes) et la contrainte réglementaire ou de confidentialité à respecter.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {SECTEURS.map(s => {
              const Icon = ICONS[s.icon] || Briefcase
              return (
                <Link key={s.slug} to={`/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 28, transition: 'border-color 0.2s, box-shadow 0.2s', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = c; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.18)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#1E293B'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 16 }}>
                      <Icon size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                      {s.name}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.6, margin: '0 0 16px', flex: 1 }}>{s.tagline}</p>
                    <span style={{ fontSize: 13, color: '#60A5FA', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
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

      {/* ── NOTRE APPROCHE (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={WRAP}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Notre approche</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Une même méthode, déclinée par secteur</h2>
              <p style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#0A0A0A', margin: 0, maxWidth: 'none' }}>
                <strong style={{ color: '#0A0A0A' }}>Quel que soit le secteur, la logique est la même : cadrer la stratégie, développer les solutions sur mesure, rendre vos équipes autonomes.</strong>{' '}
                Ce qui change d'un secteur à l'autre, ce sont les cas d'usage et les contraintes, que nous intégrons dès le cadrage.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
                {APPROACH.map(({ icon: Icon, title, desc }) => (
                  <div key={title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                    <div style={{ ...iconBoxStyle, marginBottom: 16 }}>
                      <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0' }}>
                Pour le détail de notre capacité de build (agents, automatisations, applications métier, intégrations LLM/RAG), consultez notre{' '}
                <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI UNE APPROCHE SECTORIELLE (réponses citables) ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={kickerStyle}>Approche sectorielle</div>
          <h2 style={{ ...h2Style, marginBottom: 24 }}>Pourquoi une approche IA par secteur d'activité ?</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 24px' }}>
            <strong style={{ color: '#0A0A0A' }}>Parce que la valeur de l'IA et ses garde-fous dépendent du secteur.</strong>{' '}
            Un agent de synthèse de dossiers de crédit, un assistant documentaire conforme aux données de santé et un copilote de support e-commerce ne posent pas les mêmes questions de conception, de données et de conformité. Partir du secteur, c'est gagner en pertinence sur les{' '}
            <Link to="/cas-usage-ia-entreprise" style={{ color: c, fontWeight: 600 }}>cas d'usage de l'IA en entreprise</Link> et en sécurité sur les contraintes.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              "Des cas d'usage concrets et déjà identifiés pour votre métier, directement actionnables.",
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

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={WRAP}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions fréquentes sur l'IA par secteur</h2>
              <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: 0 }}>
                Pour aller plus loin, faites un{' '}
                <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link>, découvrez l'apport de l'{' '}
                <Link to="/ia-generative-entreprise" style={{ color: c, fontWeight: 600 }}>IA générative en entreprise</Link>, explorez{' '}
                <Link to="/solutions-ia" style={{ color: c, fontWeight: 600 }}>toutes nos solutions IA</Link> ou{' '}
                <Link to="/contact" style={{ color: c, fontWeight: 600 }}>contactez notre équipe</Link>.
              </p>
            </div>
            <div>
              {HUB_FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE (bandeau sombre #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ ...WRAP, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Premier échange gratuit</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Votre secteur n'est pas dans la liste ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Notre méthode s'applique à tout secteur B2B. Décrivez votre activité et vos enjeux : nous revenons vers vous sous 24 heures avec une première lecture des cas d'usage et une proposition de cadrage gratuit.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
                Contacter notre équipe
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '16px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, border: '1px solid #2A3650' }}>
                <Stethoscope size={17} strokeWidth={2.2} aria-hidden="true" />
                Faire un diagnostic IA
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              IA par secteur · Conseil, développement sur mesure, automatisation · Spécialistes IA depuis 2022 · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
