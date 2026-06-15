import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle,
  Plug, Cpu, KeyRound, Users, Wrench, Target,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { SOLUTIONS } from '../data/solution-ia-data'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Hub « Solutions IA sur mesure » (slug /solutions-ia). Point d'entrée du cluster
 * bas de funnel : 7 pages par TYPE DE LIVRABLE. Intro citable + grille 7 cartes,
 * CTA vers /diagnostic-ia et /contact, liens /agence-developpement-ia et
 * /outils-ia-sur-mesure. JSON-LD ItemList + breadcrumbs.
 *
 * Design premium : hero sombre #0A0F1E, kickers #2563EB, icônes lucide
 * (zéro emoji), cartes radius 16, ancre sombre sur la matrice objectif→solution,
 * CTA final sombre #0A0F1E. Orienté CAPACITÉ, aucun cas client nommé. Code livré
 * au client. Pas d'OPCO sur le sur-mesure.
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const SITE = 'https://www.master-ia.fr'

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }
const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }
const aStyle = { color: c, fontWeight: 600 }

const SLUG = 'solutions-ia'
const META_TITLE = 'Solutions IA sur mesure pour entreprises | Masteria'
const META_DESC =
  "Solutions IA sur mesure : copilote interne, assistant documentaire RAG, agent support, automatisation, chatbot, intégration LLM. Code livré au client."
const H1 = 'Solutions IA sur mesure pour entreprises'

const ICONS = {
  Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle, Plug,
}

const HERO_CHIPS = [
  { icon: Cpu, label: 'Multi-LLM (Claude, GPT, Mistral)' },
  { icon: Database, label: 'RAG sur vos données' },
  { icon: KeyRound, label: 'Code livré au client' },
  { icon: Users, label: 'Développeurs en régie possibles' },
]

const HUB_FAQ = [
  {
    q: 'Qu\'est-ce qu\'une solution IA sur mesure ?',
    a: "Une solution IA sur mesure est une application développée pour un usage précis de votre entreprise, branchée sur vos données et vos outils, par opposition à un logiciel générique acheté sur étagère. Copilote interne, assistant documentaire, agent de support, chatbot, intégration : chaque solution est conçue, développée et intégrée à votre environnement, puis transférée à vos équipes avec son code.",
  },
  {
    q: 'Combien coûte une solution IA sur mesure ?',
    a: "Le développement se chiffre au forfait, sur devis, après un cadrage. Selon le type de livrable et le périmètre, comptez de l'ordre de 8 000 € pour un chatbot ou un prototype ciblé, de 15 000 à 70 000 € pour une solution en production reliée à vos données et à vos outils, et au-delà de 100 000 € pour un déploiement à l'échelle ou en régie, jusqu'à plusieurs centaines de milliers d'euros sur les programmes les plus ambitieux. Chez Masteria, le premier échange de cadrage est gratuit et le devis suit la définition du périmètre.",
  },
  {
    q: 'À qui appartient le code des solutions développées ?',
    a: "À vous. Le code développé pour votre projet vous appartient, comme vos données. Nous documentons la solution et transférons la compétence à vos équipes pour qu'elles l'exploitent et la fassent évoluer en autonomie. Vous n'êtes pas enfermé dans un abonnement à une plateforme fermée.",
  },
  {
    q: 'Comment choisir la bonne solution pour mon besoin ?',
    a: "Partez du résultat attendu : retrouver de l'information mène vers l'assistant documentaire, décharger le support vers l'agent de support, traiter des documents entrants vers l'automatisation. Un même besoin combine souvent plusieurs briques. C'est l'objet du cadrage, gratuit, qui définit le périmètre avant tout chiffrage.",
  },
  {
    q: 'Quelle différence entre une solution sur mesure et un outil IA sur étagère ?',
    a: "Un outil sur étagère est générique et borné aux possibilités de sa plateforme. Une solution sur mesure est conçue pour votre usage, branchée sur vos données et vos outils, et vous en êtes propriétaire. Pour un outil ou un copilote développé autour d'un métier précis, voyez aussi nos outils IA sur mesure, qui abordent le sujet sous l'angle du poste de travail.",
  },
]

const PAGE_KEYWORDS = [
  'solutions IA sur mesure', 'solution IA entreprise', 'développement IA sur mesure',
  'copilote IA', 'assistant documentaire IA', 'RAG entreprise', 'agent IA support client',
  'agent IA commercial', 'chatbot IA sur mesure', 'intégration LLM', 'Masteria',
].join(', ')

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE}/${SLUG}#itemlist`,
  name: 'Solutions IA sur mesure — Masteria',
  description: META_DESC,
  numberOfItems: SOLUTIONS.length,
  itemListOrder: 'https://schema.org/ItemListUnordered',
  itemListElement: SOLUTIONS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE}/${s.slug}`,
    item: {
      '@type': 'Service',
      name: s.name,
      description: s.cardSummary,
      url: `${SITE}/${s.slug}`,
      serviceType: s.name,
      provider: { '@id': `${SITE}/#organization` },
    },
  })),
}

export default function SolutionsHubPage() {
  const isDesktop = useIsDesktop()
  // Patron éditorial asymétrique réutilisable (grille 7 solutions + FAQ)
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Solutions IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={PAGE_KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={HUB_FAQ}
        extraJsonLd={itemListJsonLd}
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
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Solutions IA</span>
          </nav>

          {/* eyebrow : picto en tuile + label */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wrench size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Développement sur mesure
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 820 }}>
            Solutions IA sur mesure
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>pour entreprises</span>
          </h1>

          {/* GEO : réponse directe citable — accroche */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Masteria conçoit et développe des solutions IA sur mesure pour les entreprises : copilote interne, assistant documentaire en RAG, agent de support, automatisation documentaire, agent commercial, chatbot et intégration LLM/RAG. Chaque solution est branchée sur vos données, intégrée à vos outils et <strong style={{ color: '#fff', fontWeight: 700 }}>livrée avec son code</strong>.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 660 }}>
            Choisissez par type de livrable. Chaque page détaille ce que la solution permet, comment nous la construisons en quatre étapes, l'approche technique et des exemples par secteur. Cabinet spécialisé sur l'IA depuis 2022, nous restons indépendants des éditeurs et vous rendons propriétaire et autonome de ce que nous développons.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Lancer un diagnostic IA gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#solutions" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Voir les 7 solutions
            </a>
          </div>

          {/* tags de compétences — chips sombres */}
          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
            {HERO_CHIPS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE 7 SOLUTIONS (éditorial asymétrique) ── */}
      <section id="solutions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Par type de livrable</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Quelle solution IA correspond à votre besoin ?
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Sept familles de solutions IA reviennent dans la majorité des projets : copilote interne, assistant documentaire en RAG, agent de support, automatisation documentaire, agent commercial, chatbot et intégration LLM. Un même besoin peut en combiner plusieurs.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Chaque carte mène à une page dédiée : ce que la solution permet, comment nous la construisons, l'approche technique et des exemples par secteur. Le cadrage, gratuit, définit le périmètre avant tout chiffrage.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
                {SOLUTIONS.map(s => {
                  const Icon = ICONS[s.icon] || Bot
                  return (
                    <Link key={s.slug} to={`/${s.slug}`} style={{ textDecoration: 'none' }}>
                      <div
                        style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                      >
                        <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 16 }}>
                          <Icon size={22} strokeWidth={2} style={{ color: c }} />
                        </div>
                        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                          {s.name}
                        </h3>
                        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 16px' }}>{s.cardSummary}</p>
                        <span style={{ marginTop: 'auto', fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          Découvrir la solution
                          <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MATRICE DE DÉCISION : OBJECTIF → SOLUTION (ancre sombre — pivot) ── */}
      <section style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Quelle solution pour quel objectif</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Partez de votre objectif, trouvez la solution
          </h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Le plus simple est de partir du résultat attendu. À chaque objectif courant correspond une famille de solution ; un même besoin en combine souvent plusieurs.</strong>
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table aria-label="Matrice objectif métier vers la solution IA adaptée" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 460 }}>
              <caption style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                Objectif métier et solution IA adaptée, avec lien vers chaque page de solution.
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: '#E2E8F0', borderBottom: '1px solid #1E293B', textTransform: 'uppercase', letterSpacing: '0.04em', width: '58%' }}>Votre objectif</th>
                  <th scope="col" style={{ background: 'rgba(37,99,235,0.12)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: '#60A5FA', borderBottom: '1px solid #1E293B', textTransform: 'uppercase', letterSpacing: '0.04em', width: '42%' }}>La solution adaptée</th>
                </tr>
              </thead>
              <tbody>
                {SOLUTIONS.map((s, i) => (
                  <tr key={s.slug} style={{ borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                    <th scope="row" style={{ padding: '16px 18px', fontSize: 14.5, color: '#F8FAFC', fontWeight: 600, fontFamily: 'Nunito, sans-serif', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.55 }}>
                      <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <Target size={17} strokeWidth={2.2} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                        <span>{s.goal}</span>
                      </span>
                    </th>
                    <td style={{ padding: '16px 18px', fontSize: 14, lineHeight: 1.5, verticalAlign: 'top', background: 'rgba(37,99,235,0.10)' }}>
                      <Link to={`/${s.slug}`} style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>{s.name}</span>
                        <ArrowRight size={15} strokeWidth={2.4} style={{ flexShrink: 0, color: '#60A5FA' }} aria-hidden="true" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DÉVELOPPEURS EN RÉGIE (bandeau filet-latéral) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#F9FAFB', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Users size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={kickerStyle}>Modèle d'engagement</div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Forfait au projet ou développeurs détachés chez vous
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                La plupart de ces solutions se livrent au forfait, périmètre et livrables définis. Pour les environnements sensibles ou une montée en charge, nous pouvons aussi détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Le code reste dans votre périmètre et vos équipes montent en compétence au fil de l'eau.
              </p>
              <Link to="/methode-projet-ia" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Voir notre méthode de projet IA
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE / RESSOURCES (cartes filet-supérieur) ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Pour aller plus loin</div>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Du conseil au développement sur mesure
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7, maxWidth: 880 }}>
            Les solutions ci-dessus sont des types de livrables. Pour la capacité de build complète et l'approche d'ingénierie, explorez ces pages.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agence de développement IA', href: '/agence-developpement-ia', tag: 'Build', desc: "Agents, automatisations, applications et intégrations : de l'idée au déploiement, avec transfert de compétence." },
              { label: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', tag: 'Sur mesure', desc: "Des outils et copilotes développés pour un métier précis, connectés à vos données." },
              { label: 'Agence automatisation IA', href: '/agence-automatisation-ia', tag: 'Automatisation', desc: "Cadrage, prototypage et déploiement de vos automatisations IA, avec vos équipes." },
              { label: "Cas d'usage de l'IA en entreprise", href: '/cas-usage-ia-entreprise', tag: 'Exemples', desc: "Un panorama d'exemples concrets par fonction, pour relier chaque solution à un usage réel." },
              { label: 'IA générative en entreprise', href: '/ia-generative-entreprise', tag: 'GenAI', desc: "Du cas d'usage au déploiement maîtrisé des modèles de langage, garde-fous compris." },
              { label: "Prix d'un projet IA", href: '/prix-projet-ia', tag: 'Budget', desc: "Fourchettes de prix par type de solution et modèles de facturation, sans tarif d'appel." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, borderTop: `3px solid ${c}`, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    En savoir plus
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Solutions IA sur mesure : questions fréquentes
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
              {HUB_FAQ.map((item, i) => (
                <div key={i} style={{ borderTop: i === 0 ? '1px solid #E5E7EB' : 'none', borderBottom: '1px solid #E5E7EB', padding: '20px 0' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: '0 0 10px' }}>{item.q}</h3>
                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
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
              Quelle solution IA pour votre entreprise ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
              Pas sûr du type de livrable ? Lancez un diagnostic IA gratuit ou décrivez-nous votre contexte. Nous revenons vers vous sous 24 heures avec une lecture du périmètre et une proposition de cadrage. Vous restez propriétaire de ce que nous développons.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
                Lancer un diagnostic IA gratuit
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, border: '1px solid #2A3650' }}>
                Contacter notre équipe
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Réponse sous 24 h · Code livré au client · Multi-LLM · Lyon, France, Suisse, Belgique
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
