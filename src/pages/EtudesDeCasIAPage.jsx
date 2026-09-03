import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, BadgeCheck, ShieldCheck, Lock, Quote, Users, Building2 } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import FounderNote from '../components/FounderNote'
import OfficialSources from '../components/OfficialSources'
import { useIsDesktop } from '../hooks/useMediaQuery'
import { CASES, METHODE_COMMUNE } from '../data/etudes-de-cas'

/*
 * Page « Études de cas IA » — la PREUVE (E-E-A-T + conversion).
 * Quatre missions anonymisées à la demande des clients (secteur + taille, jamais
 * de nom). INTÉGRITÉ ABSOLUE : chaque chiffre vient des dossiers de mission
 * (fiches de satisfaction, comptes rendus, livrables). Aucun chiffre inventé,
 * aucun verbatim fabriqué, aucune cible écrite comme un résultat. Les clients
 * peuvent être mis en relation en privé, sous NDA.
 * Depuis le 2026-09-03 : chaque cas expose la MÉTHODE en six temps et les
 * RÉSULTATS pour les équipes et pour l'organisation ; les données vivent dans
 * src/data/etudes-de-cas.js, partagées avec le composant CaseStudyCards des
 * pages money. Accent bleu #2563EB, gabarit money pages.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'etudes-de-cas-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Études de cas IA : 4 missions de conseil et de formation | Masteria'
const META_DESC = "Études de cas IA anonymisées : comité de direction et déploiement international d'un groupe industriel, assistants d'appels d'offres d'un cabinet de conseil, diagnostic et feuille de route d'un distributeur photovoltaïque, force de vente outillée. Méthode en six temps, résultats pour les équipes et l'organisation."
const KEYWORDS = "étude de cas ia, études de cas ia entreprise, cas client ia, exemple déploiement ia entreprise, étude de cas conseil ia, exemple audit ia, retour d'expérience ia, assistants ia entreprise, projet ia entreprise exemple, adoption ia entreprise"

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }

const FAQ = [
  {
    q: 'Pourquoi vos études de cas IA sont-elles anonymisées ?',
    a: "Parce que nos clients considèrent leur avance sur l'IA comme un avantage concurrentiel et préfèrent ne pas communiquer publiquement dessus. Nous respectons ce choix : chaque cas est décrit par son secteur, sa taille, sa méthode et ses résultats, sans nommer l'entreprise ni les personnes. Tous les chiffres publiés viennent des dossiers de mission : propositions, livrables, fiches de satisfaction, comptes rendus.",
  },
  {
    q: 'Peut-on vérifier ces références ou parler à vos clients ?',
    a: "Oui. Sur demande, dans le cadre d'une discussion commerciale avancée, nous organisons une mise en relation avec un client comparable à votre situation, sous accord de confidentialité. C'est la contrepartie de l'anonymat public : la vérification se fait en privé.",
  },
  {
    q: "Quelle est la méthode d'accompagnement de Masteria ?",
    a: "Six temps, quel que soit le secteur : cadrer avec la direction, cartographier les flux de travail avec les personnes qui font le travail, prioriser les gisements par impact et faisabilité à trois mois, concevoir les assistants et les ateliers sur les fichiers de l'entreprise, former par métier en posant le cadre d'usage, puis mesurer à J+30 et relancer une deuxième vague. Chaque étude de cas ci-dessus détaille ces six temps tels qu'ils ont été menés.",
  },
  {
    q: "Quels types d'entreprises accompagnez-vous ?",
    a: "Des PME de quelques personnes, des ETI et des groupes internationaux. Les quatre cas présentés couvrent un distributeur IT B2B (force commerciale de 58 personnes), un groupe industriel international (comité de direction, managers pilotes, sites à l'étranger), un cabinet indépendant de conseil financier (une vingtaine de consultants sur deux sites) et un distributeur photovoltaïque de cinq personnes. Le dispositif s'adapte à la taille : équipe de référents chez le distributeur, déploiement par paliers chez l'industriel, assistants par pôle au cabinet, trois chantiers et une charte chez le distributeur photovoltaïque.",
  },
  {
    q: "Comment mesurez-vous les résultats ?",
    a: "À chaud, par des fiches de satisfaction détaillées question par question, et par un bilan écrit sous cinq jours qui corrige la session suivante. Sur les missions de conseil, par des indicateurs relevés en séance (point de départ) et revus à J+30, avec une cible par tâche : délai de réponse à une demande, temps par consultation, part des réceptions traitées sans ressaisie. Un gain qui n'est pas mesuré est écrit comme une cible, jamais comme un résultat.",
  },
  {
    q: 'Quels outils utilisez-vous : Claude, Copilot, ChatGPT ?',
    a: "Le choix découle du contexte, jamais l'inverse. Les assistants métier sur documents et données de l'entreprise s'appuient souvent sur Claude (projets, compétences personnalisées). Quand les équipes vivent dans Microsoft 365, Copilot s'impose par son intégration native, comme pour le groupe industriel. Les assistants d'appels d'offres du cabinet de conseil vivent dans un environnement ChatGPT d'équipe. Nous restons indépendants des éditeurs et formons aussi sur Gemini et Mistral.",
  },
  {
    q: 'Ces dispositifs sont-ils finançables par un OPCO ?',
    a: "Le volet formation, oui : Masteria est certifié Qualiopi, les sessions sont finançables par votre OPCO ou votre plan de développement des compétences, à 1 980 € HT par jour en intra. Le diagnostic, la conception et le déploiement des assistants relèvent du conseil et du développement, qui ne sont pas éligibles OPCO. Nous ne promettons jamais l'inverse.",
  },
  {
    q: 'Comment garantissez-vous la confidentialité des données pendant ces missions ?',
    a: "Chaque mission démarre par un cadre d'usage écrit : offres entreprise dont les données ne servent pas à entraîner les modèles, règles sur les données sensibles, sources citées et validation humaine sur ce qui engage l'entreprise. C'est ce cadre qui a permis à un cabinet travaillant sur des marchés publics, à un groupe industriel ou à un distributeur qui manipule des stocks de déployer l'IA sans exposer leurs informations.",
  },
]

/* ───────── JSON-LD ───────── */

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: 'Études de cas IA en entreprise : quatre missions documentées, méthode et résultats',
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: '2026-07-30',
  dateModified: '2026-09-03',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: ["Étude de cas IA", "Conseil en intelligence artificielle", "Déploiement d'assistants IA en entreprise", "Formation IA en entreprise", "Audit IA"],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}

const casesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Études de cas IA Masteria : quatre missions en entreprise",
  numberOfItems: CASES.length,
  itemListElement: CASES.map((k, i) => ({ '@type': 'ListItem', position: i + 1, name: k.title, description: k.who })),
}

const methodeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "La méthode d'accompagnement Masteria en six temps",
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: METHODE_COMMUNE.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, description: s.desc })),
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color: c, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

function CaseSection({ k, index, isDesktop }) {
  const Icon = k.icon
  const dark = index % 2 === 1
  const bg = dark ? '#0A0F1E' : (index % 2 === 0 && index > 0 ? '#F9FAFB' : '#fff')
  const ink = dark ? '#F8FAFC' : '#0A0A0A'
  const body = dark ? '#B4C0D3' : '#374151'
  const cardBg = dark ? 'rgba(255,255,255,0.03)' : '#fff'
  const cardBorder = dark ? '1px solid #1E293B' : '1px solid #E5E7EB'
  const accent = dark ? '#60A5FA' : c
  const h3 = { fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: ink, margin: '0 0 10px' }
  const label = { fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: dark ? '#93C5FD' : c, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }
  return (
    <section id={k.id} style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: bg, overflow: 'hidden' }}>
      {dark && <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />}
      {dark && <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />}
      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
          <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: dark ? 'rgba(37,99,235,0.16)' : cLight, border: dark ? '1px solid rgba(37,99,235,0.35)' : 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={18} strokeWidth={2.2} style={{ color: accent }} />
          </span>
          <span style={{ ...kickerStyle, marginBottom: 0, color: accent }}>{k.kicker}</span>
        </div>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: dark ? '#94A3B8' : '#6B7280', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{k.who}</p>
        <h2 style={{ ...h2Style, color: ink }}>{k.title}</h2>

        {/* chiffres de la mission */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 14, margin: '28px 0 36px' }}>
          {k.stats.map(([v, l]) => (
            <div key={l} style={{ background: cardBg, border: cardBorder, borderRadius: 14, padding: '18px 20px' }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: accent, letterSpacing: '-0.02em' }}>{v}</div>
              <div style={{ fontSize: 13.5, color: body, lineHeight: 1.5, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* défi / réponse */}
        <div style={isDesktop ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)' } : {}}>
          <div>
            <h3 style={h3}>Le défi</h3>
            <p style={{ fontSize: 15, color: body, lineHeight: 1.75, margin: 0 }}>{k.defi}</p>
          </div>
          <div style={!isDesktop ? { marginTop: 26 } : {}}>
            <h3 style={h3}>La réponse Masteria</h3>
            <p style={{ fontSize: 15, color: body, lineHeight: 1.75, margin: 0 }}>{k.reponse}</p>
          </div>
        </div>

        {/* LA MÉTHODE EN SIX TEMPS (colonne vertébrale) */}
        <div style={{ marginTop: 40 }}>
          <div style={label}>L'accompagnement, étape par étape</div>
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 21, top: 22, bottom: 22, width: 2, background: dark ? '#1E293B' : '#E5E7EB' }} />
            {k.methode.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', padding: i === 0 ? '0 0 16px' : (i === k.methode.length - 1 ? '16px 0 0' : '16px 0') }}>
                <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 99, background: dark ? 'rgba(37,99,235,0.18)' : cLight, border: dark ? '1px solid rgba(37,99,235,0.35)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: 15, color: accent, fontWeight: 800, fontFamily: 'Nunito, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                  <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: ink, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{step.title}</h4>
                  <p style={{ fontSize: 14.5, color: body, lineHeight: 1.7, margin: 0, maxWidth: 820 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* déployé + résultat */}
        <div style={{ ...(isDesktop ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)' } : {}), marginTop: 40 }}>
          <div>
            <h3 style={{ ...h3, marginBottom: 12 }}>Ce qui a été déployé</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 9 }}>
              {k.livrables.map(l => (
                <li key={l} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: body, lineHeight: 1.6 }}>
                  <BadgeCheck size={16} strokeWidth={2.4} style={{ color: accent, flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div style={!isDesktop ? { marginTop: 26 } : {}}>
            <div style={{ background: dark ? 'rgba(37,99,235,0.12)' : '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '16px 20px' }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: dark ? '#93C5FD' : c, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Où en est la mission</div>
              <p style={{ fontSize: 14.5, color: dark ? '#E2E8F0' : '#0A0A0A', lineHeight: 1.7, margin: 0 }}>{k.resultat}</p>
            </div>
            {k.verbatim && (
              <blockquote style={{ margin: '20px 0 0', padding: '16px 20px', background: cardBg, border: cardBorder, borderRadius: 14 }}>
                <Quote size={16} style={{ color: accent, marginBottom: 6 }} aria-hidden="true" />
                <p style={{ fontSize: 14.5, color: ink, fontStyle: 'italic', lineHeight: 1.7, margin: '0 0 8px' }}>« {k.verbatim.text} »</p>
                <footer style={{ fontSize: 13, color: body }}>{k.verbatim.role}</footer>
              </blockquote>
            )}
          </div>
        </div>

        {/* RÉSULTATS pour les équipes / pour l'organisation */}
        {k.resultats && (
          <div style={{ marginTop: 40 }}>
            <div style={label}>Ce que ça change</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 16 }}>
              {[
                { icon: Users, t: 'Pour les équipes', items: k.resultats.equipes },
                { icon: Building2, t: "Pour l'organisation", items: k.resultats.organisation },
              ].map(({ icon: RIcon, t, items }) => (
                <div key={t} style={{ background: cardBg, border: cardBorder, borderTop: `3px solid ${c}`, borderRadius: 14, padding: '20px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: 9, background: dark ? 'rgba(37,99,235,0.18)' : cLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <RIcon size={16} strokeWidth={2.2} style={{ color: accent }} />
                    </span>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: ink }}>{t}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                    {items.map(it => (
                      <li key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: body, lineHeight: 1.65 }}>
                        <ArrowRight size={15} strokeWidth={2.4} style={{ color: accent, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Accompagnement global : conseil, construction, formation (penser / construire / transmettre) */}
        {k.pillars && (
          <div style={{ marginTop: 36 }}>
            <div style={label}>Les trois piliers de la mission</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 14 }}>
              {k.pillars.map((p, pi) => (
                <div key={p.t} style={{ background: cardBg, border: cardBorder, borderRadius: 14, padding: '18px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, color: accent }}>{`0${pi + 1}`}</span>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: ink }}>{p.t}</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: body, lineHeight: 1.65, margin: 0 }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default function EtudesDeCasIAPage() {
  const isDesktop = useIsDesktop()
  const { hash } = useLocation()
  // Les cartes des pages money pointent vers /etudes-de-cas-ia#<cas> : la page
  // est chargée à la volée, le navigateur ne peut pas défiler seul vers l'ancre.
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    let tries = 0
    const tick = () => {
      const el = document.getElementById(id)
      if (el) {
        // 'instant' neutralise le scroll-behavior:smooth global ; passages répétés
        // pendant 1,5 s car polices et sections tardives décalent la hauteur de page.
        const go = () => el.scrollIntoView({ block: 'start', behavior: 'instant' })
        go()
        ;[300, 800, 1500].forEach(ms => setTimeout(go, ms))
        return
      }
      if (tries++ < 20) setTimeout(tick, 100)
    }
    tick()
  }, [hash])
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Études de cas IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        datePublished="2026-07-30"
        dateModified="2026-09-03"
        extraJsonLd={[articleJsonLd, casesJsonLd, methodeJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Études de cas IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Références · Missions accompagnées
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Études de cas IA en entreprise
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>quatre missions, une méthode en six temps, des résultats pour les équipes et l'organisation</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Publié en juillet 2026, mis à jour en septembre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 760, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Le comité de direction et les managers d'un groupe industriel international, les consultants d'un cabinet de conseil financier qui répondent à des appels d'offres, un distributeur photovoltaïque de cinq personnes, la force de vente d'un distributeur IT : <strong style={{ color: '#fff', fontWeight: 700 }}>quatre organisations accompagnées de bout en bout par Masteria</strong>, avec la même méthode. Cadrer, cartographier, prioriser, concevoir sur leurs fichiers, former par métier, mesurer.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 700 }}>
            Nos clients considèrent leur avance sur l'IA comme un avantage concurrentiel et ne communiquent pas publiquement dessus. Ces études de cas sont donc anonymisées : secteur, taille, méthode et chiffres, sans les noms. La mise en relation avec un client reste possible en privé, sous accord de confidentialité.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#industrie" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Lire les 4 études de cas
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parler de votre projet
            </Link>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {[
                ['Industrie · groupe international', "Cadrage, 24 managers pilotes formés sur 13 ateliers construits avec les fichiers du groupe, matinée stratégique du comité de direction, puis sessions en anglais aux États-Unis, en Inde et au Mexique."],
                ['Conseil financier · secteur public', "Quatre assistants d'appels d'offres par pôle d'expertise, co-construits en quatre ateliers avec les consultants, une journée de formation sur des marchés récents."],
                ['Distribution photovoltaïque · PME', "Diagnostic par flux, douze gisements chiffrés, trois chantiers avec porteur, charte en huit règles, feuille de route de 90 jours avec cinq indicateurs."],
                ['Distribution IT B2B', "58 commerciaux formés en six sessions, 10 référents, 11 assistants Claude métier, les premiers en production."],
                ['Pourquoi anonymisées ?', "À la demande des clients, qui ne communiquent pas sur leur avance IA. Références vérifiables en privé, sous NDA."],
              ].map(([k, v], i) => (
                <div key={k} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', marginBottom: 4 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#methode', 'La méthode'],
            ['#distribution', 'Cas 01 · Distribution'],
            ['#industrie', 'Cas 02 · Industrie'],
            ['#conseil-financier', 'Cas 03 · Conseil financier'],
            ['#photovoltaique', 'Cas 04 · Photovoltaïque'],
            ['#cadre', 'Notre cadre'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── LA MÉTHODE COMMUNE ── */}
      <section id="methode" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La méthode</div>
          <h2 style={h2Style}>Six temps, quelle que soit la mission</h2>
          <p style={leadStyle}>
            Une PME de cinq personnes et un groupe de plusieurs milliers de salariés ne reçoivent pas le même dispositif. Ils reçoivent la même méthode : on cadre avec la direction, on cartographie les flux avec ceux qui font le travail, on priorise à trois mois, on construit sur les fichiers de l'entreprise, on forme par métier en posant le cadre, on mesure. Chaque étude de cas ci-dessous déroule ces six temps tels qu'ils ont été menés.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 18, marginTop: 28 }}>
            {METHODE_COMMUNE.map(s => (
              <div key={s.num} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: c }}>{s.num}</span>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES 4 CAS ── */}
      {CASES.map((k, i) => <CaseSection key={k.id} k={k} index={i} isDesktop={isDesktop} />)}

      {/* ── NOTRE CADRE (discrétion + intégrité) ── */}
      <section id="cadre" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Notre cadre</div>
          <h2 style={h2Style}>Ce que ces quatre missions ont en commun</h2>
          <p style={leadStyle}>
            Quatre secteurs, quatre tailles d'organisation, un même fil conducteur : sur chaque mission, Masteria articule le conseil (cadrer avec la direction, prioriser, poser le cadre), la construction (des assistants branchés sur les données de l'entreprise) et la formation (des équipes capables de faire vivre le dispositif), puis mesure le résultat et le dit tel qu'il est.
          </p>
          <p style={mutedStyle}>
            Et une règle que nous assumons : la discrétion. Nos clients gardent leur avance pour eux, nous gardons leurs noms pour nous.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {[
              { icon: BadgeCheck, t: "Sur les dossiers de l'entreprise", d: "Chaque atelier et chaque assistant est construit sur les fichiers, données et documents de l'entreprise, jamais sur des exemples génériques." },
              { icon: ShieldCheck, t: 'Un cadre de confidentialité écrit', d: "Offres entreprise sans entraînement sur vos données, règles d'usage, sources citées, validation humaine sur ce qui engage : le cadre est posé avant le premier prompt." },
              { icon: Lock, t: 'Anonymat public, vérification privée', d: "Les cas sont anonymisés à la demande des clients. En discussion avancée, nous organisons une mise en relation sous accord de confidentialité." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
                <div style={{ width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '30px 0 0', maxWidth: 860 }}>
            Envie du même type de dispositif ? Commencez par un <Link to="/diagnostic-ia" style={{ color: c, fontWeight: 600 }}>diagnostic IA</Link> d'une journée ou un <Link to="/audit-ia" style={{ color: c, fontWeight: 600 }}>audit IA</Link> complet, voyez notre <Link to="/conseil-strategie-ia" style={{ color: c, fontWeight: 600 }}>conseil stratégie IA</Link> pour un comité de direction, ou comment nous déployons des <Link to="/agents-ia-entreprise" style={{ color: c, fontWeight: 600 }}>agents IA en entreprise</Link>. Pour la montée en compétence des équipes, le <Link to="/formation-intelligence-artificielle" style={{ color: c, fontWeight: 600 }}>catalogue de formations IA</Link> couvre tous les outils.
          </p>
        </div>
      </section>

      {/* ── FONDATEUR (E-E-A-T) ── */}
      <FounderNote bg="#fff" />

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>FAQ</div>
          <h2 style={{ ...h2Style, marginBottom: 24 }}>Questions fréquentes sur nos études de cas IA</h2>
          {FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F9FAFB', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre cas, maintenant</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Et si la prochaine étude de cas, c'était vous ?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez votre contexte en quelques lignes. Lors d'un échange de cadrage gratuit, nous vous disons quel dispositif correspond à votre situation, avec la même méthode et la même discrétion que pour nos clients actuels.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
              Demander un cadrage gratuit
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange gratuit et sans engagement · Réponse sous 24 h · Certifié Qualiopi
            </p>
          </div>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
