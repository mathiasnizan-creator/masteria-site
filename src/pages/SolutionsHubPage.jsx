import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle,
  Plug, Check, Cpu, KeyRound, Users, Workflow, Wrench,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'
import { SOLUTIONS } from '../data/solution-ia-data'

/*
 * Hub « Solutions IA sur mesure » (slug /solutions-ia). Point d'entrée du cluster
 * bas de funnel : 7 pages par TYPE DE LIVRABLE. Intro citable + grille 7 cartes,
 * CTA vers /diagnostic-ia et /contact, liens /agence-developpement-ia et
 * /outils-ia-sur-mesure. JSON-LD ItemList + breadcrumbs.
 *
 * Design premium identique au reste du site : kickers #2563EB, icônes lucide
 * (zéro emoji), cartes radius 16, CTA final sombre #0A0A0A. Orienté CAPACITÉ,
 * aucun cas client nommé. Code livré au client. Pas d'OPCO sur le sur-mesure.
 */

const c = '#2563EB'
const cLight = '#DBEAFE'
const SITE = 'https://www.master-ia.fr'

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }
const kickerStyle = { fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const aStyle = { color: c, fontWeight: 600 }

const SLUG = 'solutions-ia'
const META_TITLE = 'Solutions IA sur mesure pour entreprises | Masteria'
const META_DESC =
  "Solutions IA sur mesure : copilote interne, assistant documentaire (RAG), agent support, automatisation documentaire, agent commercial, chatbot, intégration LLM/RAG. Code livré au client."
const H1 = 'Solutions IA sur mesure pour entreprises'

const ICONS = {
  Bot, Database, MessagesSquare, Files, Briefcase, MessageCircle, Plug,
}

const HUB_FAQ = [
  {
    q: 'Qu\'est-ce qu\'une solution IA sur mesure ?',
    a: "Une solution IA sur mesure est une application développée pour un usage précis de votre entreprise, branchée sur vos données et vos outils, par opposition à un logiciel générique acheté sur étagère. Copilote interne, assistant documentaire, agent de support, chatbot, intégration : chaque solution est conçue, développée et intégrée à votre environnement, puis transférée à vos équipes avec son code.",
  },
  {
    q: 'Combien coûte une solution IA sur mesure ?',
    a: "Le développement se chiffre au forfait, sur devis, après un cadrage. Selon le type de livrable et le périmètre, les budgets de marché vont couramment de 8 000 € pour un chatbot ou un prototype ciblé à 70 000 € et plus pour un agent ou une automatisation reliés à plusieurs systèmes. Chez Masteria, le premier échange de cadrage est gratuit et le devis suit la définition du périmètre.",
  },
  {
    q: 'À qui appartient le code des solutions développées ?',
    a: "À vous. Le code développé pour votre projet vous appartient, comme vos données. Nous documentons la solution et transférons la compétence à vos équipes pour qu'elles l'exploitent et la fassent évoluer en autonomie. Vous n'êtes pas enfermé dans un abonnement à une plateforme fermée.",
  },
]

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE}/${SLUG}#itemlist`,
  name: 'Solutions IA sur mesure — Masteria',
  description: META_DESC,
  itemListElement: SOLUTIONS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${SITE}/${s.slug}`,
  })),
}

export default function SolutionsHubPage() {
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
        breadcrumbs={breadcrumbs}
        faqItems={HUB_FAQ}
        extraJsonLd={itemListJsonLd}
      />

      {/* ── HERO clair ── */}
      <section style={{ background: '#F9FAFB', color: '#0A0A0A', padding: 'clamp(48px, 7vw, 72px) 24px clamp(56px, 8vw, 80px)', borderBottom: '1px solid #E5E7EB' }}>
        <div style={wrap}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Solutions IA</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Wrench size={16} strokeWidth={2.2} aria-hidden="true" />
              Développement sur mesure
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              7 types de livrables
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em', maxWidth: 920 }}>
            {H1}
          </h1>

          {/* GEO : réponse directe en gras (citable LLM) */}
          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 780, fontWeight: 500 }}>
            <strong>Masteria conçoit et développe des solutions IA sur mesure pour les entreprises : copilote interne, assistant documentaire en RAG, agent de support, automatisation documentaire, agent commercial, chatbot et intégration LLM/RAG. Chaque solution est branchée sur vos données, intégrée à vos outils et livrée avec son code.</strong>
          </p>

          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, marginBottom: 40, maxWidth: 780 }}>
            Choisissez par type de livrable. Chaque page détaille ce que la solution permet, comment nous la construisons en quatre étapes, l'approche technique et des exemples par secteur. Cabinet spécialisé sur l'IA depuis 2022, nous restons indépendants des éditeurs et vous rendons propriétaire et autonome de ce que nous développons.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)' }}>
              Lancer un diagnostic IA gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#solutions" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Voir les 7 solutions
            </a>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { icon: Cpu, label: 'Multi-LLM (Claude, GPT, Mistral)' },
              { icon: Database, label: 'RAG sur vos données' },
              { icon: KeyRound, label: 'Code livré au client' },
              { icon: Users, label: 'Développeurs en régie possibles' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon size={15} strokeWidth={2.2} style={{ color: c }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE 7 SOLUTIONS ── */}
      <section id="solutions" style={{ padding: sectionPad, background: '#fff' }}>
        <div style={wrap}>
          <div style={kickerStyle}>Par type de livrable</div>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Quelle solution IA correspond à votre besoin ?
          </h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 880 }}>
            Sept familles de solutions reviennent dans la majorité des projets. Un même besoin peut en combiner plusieurs : c'est l'objet du cadrage.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
            {SOLUTIONS.map(s => {
              const Icon = ICONS[s.icon] || Bot
              return (
                <Link key={s.slug} to={`/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ ...cardStyle, padding: 28, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                  >
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 16 }}>
                      <Icon size={22} strokeWidth={2} style={{ color: c }} />
                    </div>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
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
      </section>

      {/* ── DÉVELOPPEURS EN RÉGIE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
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

      {/* ── MAILLAGE / RESSOURCES ── */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
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
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
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

      {/* ── FAQ ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 24 }}>
            Solutions IA sur mesure : questions fréquentes
          </h2>
          {HUB_FAQ.map((item, i) => (
            <div key={i} style={{ borderTop: i === 0 ? '1px solid #E5E7EB' : 'none', borderBottom: '1px solid #E5E7EB', padding: '20px 0' }}>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif', margin: '0 0 10px' }}>{item.q}</h3>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, background: '#0A0A0A', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div style={{ ...kickerStyle, color: cLight }}>Premier échange gratuit</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
            Quelle solution IA pour votre entreprise ?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 600 }}>
            Pas sûr du type de livrable ? Lancez un diagnostic IA gratuit ou décrivez-nous votre contexte. Nous revenons vers vous sous 24 heures avec une lecture du périmètre et une proposition de cadrage. Vous restez propriétaire de ce que nous développons.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
            <Link to="/diagnostic-ia" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800 }}>
              Lancer un diagnostic IA gratuit
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, border: '1px solid #374151' }}>
              Contacter notre équipe
            </Link>
          </div>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
            Réponse sous 24 h · Code livré au client · Multi-LLM · Lyon, France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
