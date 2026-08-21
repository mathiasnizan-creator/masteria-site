import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle,
  Plug, Check, Cpu, Server, ShieldCheck, Workflow,
  MapPin, Users, Wrench, Clock, Coins, X, FileCode2, Sparkles, Tag, KeyRound,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { SOLUTIONS, getSolution } from '../data/solution-ia-data'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Template « Solution IA sur mesure » — cluster bas de funnel (intention
 * solution-aware), une page par TYPE DE LIVRABLE. Lit le slug depuis le path
 * parmi SOLUTIONS, 404 propre si inconnu. Hub : /solutions-ia.
 *
 * POSITIONNEMENT : conseil + développement sur mesure high-ticket, orienté
 * CAPACITÉ. Aucun cas client nommé, exemples sectoriels génériques. Le code
 * développé appartient au client. PAS d'OPCO/Qualiopi (non finançable sur le
 * développement sur mesure).
 *
 * Design premium identique à /agence-developpement-ia et /agence-ia : kickers
 * uppercase #2563EB, icônes lucide (zéro emoji), cartes radius 16 bordées
 * #E5E7EB, réponses directes citables en gras, CTA final bandeau sombre #0A0A0A.
 */

const c = '#2563EB'
const cLight = '#DBEAFE'

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

/* Mapping du nom d'icône (champ data) vers le composant lucide. */
const ICONS = {
  Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle, Plug,
}

/* Lignes du comparatif « sur étagère vs sur mesure » (génériques, valables pour les 7 solutions). */
const COMPARISON_ROWS = [
  { aspect: 'Connexion à vos données et outils', off: 'Limitée ou absente', custom: 'Branchée sur vos sources (RAG) et vos outils via API et MCP' },
  { aspect: 'Adaptation à votre métier', off: 'Générique, comportement imposé', custom: 'Votre périmètre, votre ton et vos garde-fous' },
  { aspect: 'Propriété du code', off: "Dépendance à l'éditeur", custom: 'Code livré : vous êtes propriétaire' },
  { aspect: 'Évolutivité', off: 'Bornée aux options de la plateforme', custom: 'Évolue avec vos besoins, sans plafond fonctionnel' },
  { aspect: 'Confidentialité et hébergement', off: 'Selon les règles du fournisseur', custom: 'Cloisonnement et hébergement UE possibles' },
]

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
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
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {/* Réponse TOUJOURS présente dans le DOM (repliée en CSS) : crawlable + citable par les LLM (GEO). */}
      <div style={{ maxHeight: open ? 800 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

export default function SolutionIAPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (aside collante + grille à 2 colonnes)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const location = useLocation()
  const slug = location.pathname.replace(/^\//, '')
  const solution = getSolution(slug)

  if (!solution) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
        <h1 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, color: '#0A0A0A' }}>Page non trouvée</h1>
        <Link to="/solutions-ia" style={{ color: c, fontWeight: 600 }}>Voir nos solutions IA sur mesure</Link>
      </div>
    )
  }

  const HeroIcon = ICONS[solution.icon] || Bot
  const related = solution.relatedSolutions
    .map(s => SOLUTIONS.find(x => x.slug === s))
    .filter(Boolean)

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Solutions IA', slug: 'solutions-ia' },
    { name: solution.name, slug: solution.slug },
  ]

  // Plancher tarifaire numérique extrait du budgetRange ("Dès ~15 000 € · …") pour le JSON-LD.
  const priceFrom = (solution.budgetRange?.match(/(\d[\d\s]*)\s*€/) || [])[1]?.replace(/\s/g, '')

  // Découpe du H1 sur le « : » (data-driven) : tête en blanc, suite en accent bleu.
  // Si pas de « : » fiable, on garde le H1 entier en blanc sur une seule ligne.
  const h1ColonIdx = solution.h1.indexOf(' : ')
  const h1Head = h1ColonIdx > -1 ? solution.h1.slice(0, h1ColonIdx) : solution.h1
  const h1Tail = h1ColonIdx > -1 ? solution.h1.slice(h1ColonIdx + 3) : null

  // Mots-clés spécifiques à la solution (synonymes inclus) — remplace les keywords formation par défaut.
  const pageKeywords = [
    solution.name,
    ...(solution.alsoKnownAs || []),
    'solution IA sur mesure', 'développement IA', 'IA pour entreprise', 'Masteria',
  ].join(', ')

  /* ── JSON-LD Service enrichi (serviceType = type de livrable) ── */
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'ProfessionalService'],
    '@id': `https://www.master-ia.fr/${solution.slug}#service`,
    name: `${solution.name} sur mesure — Masteria`,
    description: solution.metaDesc,
    url: `https://www.master-ia.fr/${solution.slug}`,
    serviceType: solution.name,
    category: 'Développement de solutions IA sur mesure',
    provider: { '@id': 'https://www.master-ia.fr/#organization' },
    brand: { '@id': 'https://www.master-ia.fr/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'Country', name: 'Belgique' },
    ],
    audience: { '@type': 'BusinessAudience', name: 'PME, ETI et grands groupes' },
    serviceOutput: {
      '@type': 'Thing',
      name: `${solution.name} : application sur mesure, code source livré au client`,
    },
    termsOfService: 'https://www.master-ia.fr/methode-projet-ia',
    isPartOf: { '@id': 'https://www.master-ia.fr/solutions-ia#itemlist' },
    // Fourchette à plancher bas (prototype) et plafond OUVERT : les grands projets dépassent 100 000 €.
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      ...(priceFrom ? { lowPrice: priceFrom } : {}),
      availability: 'https://schema.org/InStock',
      url: `https://www.master-ia.fr/${solution.slug}`,
      seller: { '@id': 'https://www.master-ia.fr/#organization' },
      description:
        "Développement au forfait, sur devis après cadrage. Fourchette indicative : un prototype démarre plus bas, un déploiement à l'échelle ou en régie dépasse 100 000 € et peut atteindre plusieurs centaines de milliers d'euros.",
      eligibleRegion: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Suisse' },
        { '@type': 'Country', name: 'Belgique' },
      ],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Modèles d'engagement",
      itemListElement: [
        { '@type': 'Offer', name: 'Forfait au projet', description: 'Périmètre et livrables définis, prix ferme après cadrage.' },
        { '@type': 'Offer', name: 'Régie / équipe dédiée', description: 'Un ou plusieurs développeurs IA détachés dans vos équipes, sur site ou à distance.' },
      ],
    },
  }

  return (
    <>
      <SEOHead
        title={solution.metaTitle}
        description={solution.metaDesc}
        slug={solution.slug}
        keywords={pageKeywords}
        breadcrumbs={breadcrumbs}
        faqItems={solution.faq}
        extraJsonLd={serviceJsonLd}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        {/* filet d'accent en haut */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        {/* trame de points */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        {/* halo d'accent */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/solutions-ia" style={{ color: '#5B6679' }}>Solutions IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>{solution.name}</span>
          </nav>

          {/* eyebrow : picto data-driven en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <HeroIcon size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Solution IA sur mesure
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            {h1Head}
            {h1Tail && (
              <>
                <br />
                <span style={{ color: '#60A5FA', fontWeight: 800 }}>{h1Tail}</span>
              </>
            )}
          </h1>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>{solution.directAnswer}</strong>
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Demander un cadrage gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#methode" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Comment nous le construisons
            </a>
          </div>

          {/* chips de compétences (sombres) */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {[
              { icon: Cpu, label: 'Multi-LLM (Claude, GPT, Mistral)' },
              { icon: Database, label: 'RAG sur vos données' },
              { icon: KeyRound, label: 'Code livré au client' },
              { icon: MapPin, label: 'Lyon · France · Suisse · Belgique' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* Faits-clés citables (GEO) : budget, délai, livrable, propriété — carte sombre */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {[
                { icon: Coins, label: 'Budget indicatif', value: solution.budgetRange },
                { icon: Clock, label: 'Mise en route', value: solution.timeline },
                { icon: FileCode2, label: 'Livrable', value: 'Code source livré et documenté' },
                { icon: KeyRound, label: 'Propriété', value: 'Vous, le client' },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'baseline', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 150px', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>
                    <Icon size={15} strokeWidth={2.2} style={{ color: '#60A5FA', flexShrink: 0 }} aria-hidden="true" />
                    {label}
                  </dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CE QUE C'EST (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Ce que c'est</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                {`${solution.name} : de quoi parle-t-on ?`}
              </h2>
              {/* Aussi appelé : synonymes / requêtes proches (couverture sémantique SEO) */}
              {solution.alsoKnownAs && solution.alsoKnownAs.length > 0 && (
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
                  <Tag size={14} strokeWidth={2.2} style={{ color: '#9CA3AF' }} aria-hidden="true" />
                  <span><strong style={{ color: '#374151', fontWeight: 700 }}>Aussi appelé :</strong> {solution.alsoKnownAs.join(', ')}.</span>
                </p>
              )}
            </div>

            <div>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 'none' }}>
                {solution.whatItIs}
              </p>

              {/* À retenir : points citables (GEO / featured snippet) */}
              {solution.keyTakeaways && solution.keyTakeaways.length > 0 && (
                <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '24px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <Sparkles size={18} strokeWidth={2.2} style={{ color: c }} aria-hidden="true" />
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A' }}>À retenir</span>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {solution.keyTakeaways.map((t, i) => (
                      <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <Check size={18} strokeWidth={2.6} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                        <span style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.6 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ON LE CONSTRUIT (timeline à rail) ── */}
      <section id="methode" style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={kickerStyle}>Méthode</div>
          <h2 style={h2Style}>
            Comment nous construisons votre {solution.name.toLowerCase()}
          </h2>
          <p style={{ ...answerStyle, background: '#fff', maxWidth: 'none' }}>
            <strong>Quatre étapes, un livrable à chaque palier : cadrage du périmètre, prototype sur un cas réel, développement et intégration à vos outils, puis déploiement et transfert. Vous décidez à chaque étape, sur des éléments concrets, et vous repartez propriétaire du code.</strong>
          </p>
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: '#E5E7EB' }} />
            {solution.howWeBuild.map((step, i) => (
              <div
                key={step.title}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative',
                  padding: i === 0 ? '0 0 18px' : (i === solution.howWeBuild.length - 1 ? '18px 0 0' : '18px 0'),
                }}
              >
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: c, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h3 style={{ ...h3Style, fontSize: 17, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROCHE TECHNIQUE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Approche technique</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Sur quelles briques techniques ?
          </h2>
          <p style={{ ...answerStyle, background: '#F9FAFB' }}>
            <strong>Sur quatre briques : une approche multi-LLM (le bon modèle au bon endroit), du RAG pour ancrer les réponses dans vos données avec sources, des connecteurs API et MCP vers vos outils, et des garde-fous avec validation humaine. Hébergement dans l'Union européenne possible selon vos exigences de conformité.</strong>
          </p>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 880 }}>
            {solution.techApproach}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { icon: Cpu, label: 'Multi-LLM, le bon modèle au bon endroit' },
              { icon: Database, label: 'RAG : réponses sourcées sur vos données' },
              { icon: Plug, label: 'Connecteurs API & MCP' },
              { icon: ShieldCheck, label: 'Garde-fous & validation humaine' },
              { icon: Server, label: 'Hébergement UE possible' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ background: '#F9FAFB', color: '#374151', padding: '9px 14px', borderRadius: 8, fontSize: 13.5, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon size={16} strokeWidth={2.1} style={{ color: c }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Pour le détail de notre stack et de notre méthode d'ingénierie, parcourez notre <Link to="/agence-developpement-ia" style={aStyle}>agence de développement IA</Link>.
          </p>
        </div>
      </section>

      {/* ── CAS PAR SECTEUR ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Cas d'usage</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            {`${solution.name} : exemples par secteur`}
          </h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 880 }}>
            Quelques exemples génériques de ce que cette solution permet selon le métier. Ils illustrent des usages possibles, à adapter à votre contexte lors du cadrage. Pour un panorama plus large, parcourez nos <Link to="/cas-usage-ia-entreprise" style={aStyle}>cas d'usage de l'IA en entreprise</Link>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
            {solution.useCasesBySector.map(uc => (
              <div key={uc.sector} style={{ ...cardStyle, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <IconTile icon={Briefcase} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{uc.sector}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{uc.usage}</p>
              </div>
            ))}
          </div>
          {solution.sectorLinks && solution.sectorLinks.length > 0 && (
            <p style={{ fontSize: 14.5, color: '#6B7280', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 880 }}>
              Votre secteur en particulier :{' '}
              {solution.sectorLinks.map((lnk, i) => (
                <span key={lnk.href}>
                  <Link to={lnk.href} style={aStyle}>{lnk.label}</Link>
                  {i < solution.sectorLinks.length - 1 ? ' · ' : '.'}
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      {/* ── COMPARATIF : SUR ÉTAGÈRE VS SUR MESURE (ancre sombre — GEO snippet) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Comparatif</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            {`${solution.offTheShelfLabel} ou ${solution.name.replace(/\s+sur mesure$/i, '')} sur mesure ?`}
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Un outil sur étagère est générique et borné aux possibilités de sa plateforme. Une solution sur mesure est branchée sur vos données et vos outils, adopte votre métier et vous en êtes propriétaire : le code vous est livré.</strong>
          </p>
          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label={`Comparatif entre ${solution.offTheShelfLabel} et une solution ${solution.name} sur mesure développée par Masteria`} style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <caption style={{ captionSide: 'top', textAlign: 'left', padding: '0 0 16px', fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.6 }}>
                Sur étagère contre sur mesure, critère par critère.
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '32%' }}>Critère</th>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '34%' }}>{solution.offTheShelfLabel}</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', lineHeight: 1.4, width: '34%' }}>Sur mesure (Masteria)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontSize: 14, color: '#F8FAFC', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.5 }}>{row.aspect}</th>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#B4C0D3', lineHeight: 1.65, verticalAlign: 'top' }}>
                      <span style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <X size={16} strokeWidth={2.4} style={{ color: '#64748B', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                        <span>{row.off}</span>
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px', fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.65, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>
                      <span style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <Check size={16} strokeWidth={2.6} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                        <span>{row.custom}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DÉVELOPPEURS SUR SITE / RÉGIE ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Users size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={kickerStyle}>Modèle d'engagement</div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Des développeurs IA chez vous, sur site ou à distance
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                {solution.onsiteDevNote || "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Ce modèle convient aux environnements sensibles, où le code doit rester dans votre périmètre, et aux contextes de montée en charge où vous voulez accélérer sans recruter dans l'urgence. Nos développeurs travaillent avec vos équipes, transfèrent la compétence et documentent au fil de l'eau."}
              </p>
              <Link to="/methode-projet-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Voir notre méthode de projet IA
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                {`${solution.name} : questions fréquentes`}
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Vous ne trouvez pas votre réponse ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Posez-nous votre question
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {solution.faq.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE : SOLUTIONS LIÉES + HUB ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Solutions liées</div>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            D'autres solutions IA sur mesure
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 880 }}>
            Selon votre besoin, ces livrables se combinent. Explorez les solutions proches, ou revenez au panorama complet.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 32 }}>
            {related.map(rel => {
              const RelIcon = ICONS[rel.icon] || Bot
              return (
                <Link key={rel.slug} to={`/${rel.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                  >
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={RelIcon} />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                      {rel.name}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.cardSummary}</p>
                    <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Découvrir
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link to="/solutions-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 700, color: '#1E40AF', textDecoration: 'none' }}>
              <Workflow size={13} aria-hidden="true" /> Toutes les solutions IA sur mesure
            </Link>
            <Link to="/agence-developpement-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Cpu size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Agence de développement IA
            </Link>
            <Link to="/outils-ia-sur-mesure" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Wrench size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Outils IA par métier
            </Link>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Check size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Diagnostic IA gratuit
            </Link>
            <Link to="/prix-projet-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
              <Coins size={13} style={{ color: '#6B7280' }} aria-hidden="true" /> Prix d'un projet IA
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE (charte sombre unique #0A0F1E) ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Premier échange gratuit</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              {`Parlons de votre ${solution.name.toLowerCase()}`}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Décrivez votre contexte et vos contraintes. Nous revenons vers vous sous 24 heures avec une lecture du périmètre, un premier prototype envisageable et une proposition de cadrage. Vous repartez avec une vision claire de ce qu'il est possible de développer, et vous restez propriétaire du code.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Code livré au client · Multi-LLM · Lyon, France, Suisse, Belgique
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
              Masteria est un cabinet spécialisé uniquement sur l'intelligence artificielle, fondé à Lyon en 2022 par Mathias Nizan. Les missions sont menées par Mathias et par un réseau d'intervenants indépendants, expérimentés et pédagogues. L'indépendance vis-à-vis des éditeurs garantit une recommandation qui suit votre intérêt, pas un catalogue. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>études de cas</Link> et notre <Link to="/presse" style={{ color: '#93C5FD', fontWeight: 600 }}>revue de presse</Link> montrent ce travail en situation.
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
