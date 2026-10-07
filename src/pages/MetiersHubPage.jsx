import { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Megaphone, Users, TrendingUp, Briefcase, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  BadgeCheck, Wallet, MonitorSmartphone, Building2, Sparkles,
  Filter, RotateCcw, ArrowRight, Check, ChevronRight,
  Clock, MapPin, ShieldCheck, Zap, Award, UserCheck, ShoppingCart,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ToolLogo from '../components/ToolLogo'
import { METIERS, SPOKES, HUBS } from '../data/seo-pages'
import { GEO_CITIES, geoIaSlug } from '../data/geo-data'
import { useIsMobile } from '../hooks/useMediaQuery'

const SITE_URL = 'https://www.master-ia.fr'
const metiersHub = HUBS.find(h => h.id === 'metiers')
const TOOL_HUBS = [
  ...HUBS.filter(h => h.id !== 'metiers' && h.id !== 'sprint-ia'),
  ...HUBS.filter(h => h.id === 'sprint-ia').map(h => ({ ...h, tool: 'Ateliers' })),
]

/* ─────────────────────────────────────────────
 * Métadonnées visuelles
 * ───────────────────────────────────────────── */
const METIER_ICONS = {
  marketing:             Megaphone,
  'ressources-humaines': Users,
  rh:                    Users,
  finance:               TrendingUp,
  commercial:            Briefcase,
  communication:         Radio,
  management:            Target,
  assistante:            CalendarCheck,
  seo:                   Search,
  'service-client':      Headphones,
  informatique:          Server,
  pedagogique:           GraduationCap,
  achats:                ShoppingCart,
  transverse:            Sparkles,
}


/* ─────────────────────────────────────────────
 * Pages fusionnées le 07/10/2026 (redirection 308) : le catalogue ne les
 * annonce plus, même si une donnée partagée les réintroduisait par erreur.
 * ───────────────────────────────────────────── */
const PAGES_FUSIONNEES = new Set([
  'formation-sprint-ia-prompts', 'formation-sprint-ia-managers', 'formation-sprint-ia-sensibilisation',
  'formation-gemini-rh', 'formation-gemini-commercial', 'formation-gemini-finance', 'formation-gemini-management',
  'formation-gemini-pedagogique', 'formation-gemini-seo', 'formation-gemini-service-client',
  'formation-mistral-informatique', 'formation-mistral-management', 'formation-mistral-marketing',
  'formation-mistral-ressources-humaines', 'formation-mistral-seo', 'formation-mistral-service-client',
  'formation-multi-outils-communication', 'formation-multi-outils-finance', 'formation-multi-outils-informatique',
  'formation-multi-outils-pedagogique',
])
const CATALOGUE = SPOKES.filter(s => !PAGES_FUSIONNEES.has(s.slug))

/* Balises propres à la page (le titre et la description du hub partagé
 * dépassaient 60 et 155 caractères). */
const META_TITLE = 'Formation intelligence artificielle en entreprise | Masteria'
const META_DESC = "Formation intelligence artificielle : plus de 100 programmes par outil (ChatGPT, Copilot, Gemini, Claude, Vibe) et par métier, en équipe ou seul."

/* ─────────────────────────────────────────────
 * FAQ ciblée "formation intelligence artificielle"
 * ───────────────────────────────────────────── */
const FAQ_IA = [
  {
    q: "Qu'est-ce qu'une formation en intelligence artificielle pour entreprise ?",
    a: "C'est un temps de formation, en groupe ou seul avec un formateur, où des salariés apprennent à confier une partie de leur travail à un assistant d'IA générative : rédiger, résumer, analyser un fichier, préparer une réunion. Le programme part d'un outil (ChatGPT, Copilot de Microsoft, Gemini de Google, Claude ou Vibe) et d'un métier, puis les exercices portent sur les documents des participants. Chacun repart avec des demandes types et des gabarits qu'il réutilise dès le lendemain.",
  },
  {
    q: 'Comment choisir la bonne formation dans ce catalogue ?',
    a: "Croisez deux critères : l'outil que l'entreprise paie déjà et le métier des personnes à former. Copilot s'impose souvent quand l'entreprise travaille dans Microsoft 365, Gemini quand elle vit dans Google Workspace ; un abonnement ChatGPT, Claude ou Vibe oriente vers l'outil concerné. Les filtres en haut de page font ce croisement en un clic. Si aucun outil n'est encore choisi, partez d'une formation multi-outils, qui fait travailler plusieurs assistants sur vos propres documents.",
  },
  {
    q: 'Masteria est-il certifié Qualiopi ?',
    a: "Oui. Certifopac a délivré à Masteria son certificat Qualiopi au titre des actions de formation, pour une période qui se termine le 28 janvier 2029. Il atteste des procédures de l'organisme, du recueil de vos besoins à l'évaluation des acquis ; sans lui, aucun OPCO ne réglerait la session.",
  },
  {
    q: 'Votre OPCO peut-il financer ces formations ?',
    a: "Oui, dans le cadre de ses règles et de ses fonds, qui varient d'une branche professionnelle à l'autre. Pour le dossier, Masteria fournit le devis, le programme jour par jour et la convention, puis, après la session, l'émargement signé par chaque stagiaire et le certificat de réalisation. Le dossier part à l'OPCO avant la session. Une équipe basée à Genève ou à Bruxelles reçoit un devis en euros HT, hors de tout circuit OPCO.",
  },
  {
    q: 'Combien Masteria facture-t-il une journée de formation ?',
    a: "Une journée est facturée 1 980 € HT, pour un groupe intra (douze stagiaires maximum, réunis chez vous ou derrière leurs écrans), comme pour une personne seule avec un programme écrit pour son poste. Pour deux journées, comptez 3 960 € HT. Masteria n'organise plus de sessions inter-entreprises : chaque devis porte sur votre équipe ou sur une personne.",
  },
  {
    q: "Sur quels outils d'IA portent les formations ?",
    a: "Le catalogue couvre cinq assistants : ChatGPT d'OpenAI, Microsoft Copilot, Gemini de Google, Claude d'Anthropic et Vibe, développé par Mistral AI. S'y ajoutent des parcours multi-outils, des sprints de trois heures consacrés à un thème, l'automatisation avec n8n, Make ou Zapier, et le développement assisté avec Claude Code ou le vibe coding. L'outil retenu dépend de votre environnement et de vos règles de confidentialité.",
  },
  {
    q: 'Les sessions ont-elles lieu sur place ou à distance ?',
    a: "Les deux. En présentiel, la session a lieu chez vous, en France, dans d'autres pays d'Europe, aux États-Unis ou en Inde. À distance, elle se tient en visioconférence, avec les mêmes ateliers et les mêmes supports. Les entreprises multisites combinent souvent les deux formats.",
  },
  {
    q: 'Combien de temps dure une formation ?',
    a: "Trois formats coexistent. Le sprint de trois heures traite un sujet précis, comme Excel, la veille ou l'AI Act. La journée de sept heures installe un outil dans un métier. Deux jours, soit quatorze heures, laissent le temps de construire des assistants et de traiter des cas complexes. Avant la session, chaque participant remplit un questionnaire de positionnement ; un mois après, un point fait le bilan avec le commanditaire.",
  },
  {
    q: 'Faut-il des prérequis pour suivre une formation IA ?',
    a: "Aucun prérequis technique pour les parcours métier : savoir se servir d'un navigateur et de la suite bureautique suffit. Les formations destinées aux équipes informatiques, à Claude Code ou à l'automatisation supposent une première culture technique, que le questionnaire de positionnement permet de vérifier avant la session.",
  },
  {
    q: 'Quelles organisations ont déjà suivi ces formations ?',
    a: "Des entreprises de toutes tailles, de la PME de quelques salariés au groupe international. Les études de cas publiées sur le site en décrivent plusieurs, anonymisées : un groupe industriel du packaging dont les managers pilotes sont passés par cinq sessions de deux jours, étalées de juillet à septembre 2026, un distributeur informatique de 58 salariés qui a formé dix référents en juin 2026, une interprofession agricole dont seize salariés ont suivi trois jours en septembre 2026, ou encore l'équipe pédagogique d'un éditeur de logiciels.",
  },
  {
    q: 'Comment se passe une journée de formation ?',
    a: "La journée alterne de courts apports (méthode pour rédiger ses demandes, comparaison des outils, règles de confidentialité et AI Act) et des ateliers où chacun travaille sur ses mails, ses tableaux et ses comptes rendus. Le formateur corrige en direct et règle le rythme sur le groupe. Chaque stagiaire garde l'accès aux supports et repart avec ses demandes types et ses gabarits ; un point à J+30 mesure ce qui est entré dans le travail.",
  },
  {
    q: 'Pouvez-vous écrire un programme sur mesure ?',
    a: "Oui, et la plupart des sessions intra en bénéficient : le catalogue sert de point de départ, puis le programme est réécrit sur la base de vos documents, de votre secteur et du niveau relevé avant la session. Un secteur réglementé, un outil interne ou un cas d'usage pointu se traitent de la même façon. Décrivez votre besoin sur la page contact ; la proposition revient avec un programme jour par jour et son prix.",
  },
]

/* ─────────────────────────────────────────────
 * Composants UI internes
 * ───────────────────────────────────────────── */

function FilterChip({ active, onClick, children, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 16px',
        borderRadius: 99,
        border: active ? `2px solid ${color || '#0A0A0A'}` : '2px solid #E5E7EB',
        background: active ? (color || '#0A0A0A') : '#fff',
        color: active ? '#fff' : '#374151',
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'DM Sans, sans-serif',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
      {active && <Check size={14} strokeWidth={3} />}
    </button>
  )
}

/* ─────────────────────────────────────────────
 * PAGE
 * ───────────────────────────────────────────── */

export default function MetiersHubPage() {
  const isMobile = useIsMobile()
  const [searchParams, setSearchParams] = useSearchParams()

  /* Filtres lus depuis l'URL, modifiables */
  const initialTools     = (searchParams.get('outil')    || '').split(',').filter(Boolean)
  const initialMetiers   = (searchParams.get('metier')   || '').split(',').filter(Boolean)

  const [selectedTools,    setSelectedTools]    = useState(initialTools)
  const [selectedMetiers,  setSelectedMetiers]  = useState(initialMetiers)

  /* Sync état → URL (shareable / bookmarkable) */
  useEffect(() => {
    const p = {}
    if (selectedTools.length)    p.outil  = selectedTools.join(',')
    if (selectedMetiers.length)  p.metier = selectedMetiers.join(',')
    setSearchParams(p, { replace: true })
  }, [selectedTools, selectedMetiers, setSearchParams])

  const toggle = (arr, setArr) => (val) => {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])
  }

  const resetFilters = () => {
    setSelectedTools([])
    setSelectedMetiers([])
  }

  /* Application des filtres */
  const filteredSpokes = useMemo(() => {
    return CATALOGUE.filter(s => {
      if (selectedTools.length && !selectedTools.includes(s.toolSlug)) return false

      if (selectedMetiers.length) {
        const norm = slug => (slug === 'rh' ? 'ressources-humaines' : slug)
        const spokeMetier = norm(s.metierSlug)
        const matched = selectedMetiers.some(m => norm(m) === spokeMetier)
        if (!matched) return false
      }

      return true
    })
  }, [selectedTools, selectedMetiers])

  const hasActiveFilters = selectedTools.length || selectedMetiers.length

  /* ───── SEO : ItemList JSON-LD pour toutes les formations ───── */
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catalogue des formations intelligence artificielle Masteria',
    numberOfItems: CATALOGUE.length,
    itemListElement: CATALOGUE.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/${s.slug}`,
      name: s.h1 || `Formation ${s.tool} pour ${s.metier}`,
    })),
  }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation intelligence artificielle', slug: metiersHub.slug },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={metiersHub.slug}
        faqItems={FAQ_IA.map(f => ({ q: f.q, a: f.a }))}
        breadcrumbs={breadcrumbs}
        extraJsonLd={itemListJsonLd}
        dateModified="2026-10-07"
      />

      {/* ═══════════════════════════════════════════════════════════
       * HERO : H1 ciblé "formation intelligence artificielle"
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        paddingTop: isMobile ? 80 : 120,
        paddingBottom: isMobile ? 48 : 72,
        paddingLeft: isMobile ? 20 : 40,
        paddingRight: isMobile ? 20 : 40,
        background: 'linear-gradient(180deg, #FAFAF7 0%, #fff 100%)',
        textAlign: 'center',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fef3c7', color: '#92400E',
            padding: '6px 16px', borderRadius: 99,
            fontSize: 13, fontWeight: 700, marginBottom: 24,
          }}>
            <Sparkles size={15} strokeWidth={2.2} />
            <span>Catalogue au 7 octobre 2026 · plus de 100 programmes</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(30px, 5.5vw, 56px)', fontWeight: 900,
            fontFamily: 'Nunito, sans-serif', marginBottom: 20, lineHeight: 1.08,
            color: '#0A0A0A', letterSpacing: '-0.02em',
          }}>
            Formation intelligence artificielle pour les entreprises
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)', color: '#4B5563',
            maxWidth: 720, margin: '0 auto 18px', lineHeight: 1.65,
          }}>
            Choisissez une formation IA pour votre entreprise en croisant
            l'<strong style={{ color: '#0A0A0A' }}>outil</strong> et le
            <strong style={{ color: '#0A0A0A' }}> métier</strong>.
            Depuis 2022, Masteria écrit des programmes sur ChatGPT, Copilot de Microsoft, Gemini de Google, Claude d'Anthropic et Vibe de Mistral AI, pour des équipes qui veulent s'en servir dès le lendemain.
            Pas encore d'outil en tête ? Notre <Link to="/quel-outil-ia" style={{ color: '#2563EB', fontWeight: 600 }}>simulateur de choix d'outil</Link> vous oriente en trois questions.
          </p>

          <p style={{ fontSize: 15, color: '#92400E', fontWeight: 600, margin: '0 auto 36px', maxWidth: 560 }}>
            Chaque fiche détaille la durée, les objectifs, les ateliers et le prix d'un programme.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#filtres" style={{
              background: '#0A0A0A', color: '#fff',
              padding: '14px 28px', borderRadius: 8, textDecoration: 'none',
              fontSize: 15, fontWeight: 700, boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <Filter size={16} strokeWidth={2.4} />
              Trouver ma formation
            </a>
            <Link to="/contact" style={{
              background: '#fff', color: '#0A0A0A', border: '2px solid #0A0A0A',
              padding: '12px 26px', borderRadius: 8, textDecoration: 'none',
              fontSize: 15, fontWeight: 700,
            }}>
              Parler à un expert
            </Link>
          </div>

          {/* Badges réassurance */}
          <div style={{
            display: 'flex', gap: 10, flexWrap: 'wrap',
            justifyContent: 'center', marginTop: 36,
          }}>
            {[
              { icon: BadgeCheck,        label: 'Qualiopi : actions de formation' },
              { icon: Wallet,            label: 'OPCO de branche mobilisable' },
              { icon: MonitorSmartphone, label: 'Sur site ou en visioconférence' },
              { icon: Building2,         label: 'Intra (12 au plus) ou individuel' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{
                background: '#fff', color: '#374151',
                padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600,
                border: '1px solid #E5E7EB',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                <Icon size={15} strokeWidth={2.2} style={{ color: '#d97706' }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pont : former toute une entreprise (page dédiée) ── */}
      <section style={{ background: '#0A0F1E', padding: '20px 24px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
          <p style={{ color: '#CBD5E1', fontSize: 14.5, lineHeight: 1.6, margin: 0, flex: '1 1 480px' }}>
            <strong style={{ color: '#F8FAFC' }}>Votre projet concerne toute l'entreprise, avec plusieurs équipes et plusieurs vagues ?</strong> Le cadrage, les sessions par service, les référents internes et la charte d'usage sont expliqués sur une page à part.
          </p>
          <Link to="/formation-ia-entreprise" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2563EB', color: '#fff', borderRadius: 8, padding: '10px 18px', textDecoration: 'none', fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap' }}>
            Formation IA en entreprise →
          </Link>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
       * FILTRES DYNAMIQUES
       * ═══════════════════════════════════════════════════════════ */}
      <section id="filtres" style={{
        padding: isMobile ? '48px 20px' : '72px 40px',
        background: '#fff',
        maxWidth: 1160, margin: '0 auto',
        scrollMarginTop: 80,
      }}>
        <nav aria-label="Catalogue des formations IA, filtrable par outil et par métier">
        <div style={{
          background: '#F9FAFB',
          borderRadius: 16,
          padding: isMobile ? 20 : 32,
          border: '1px solid #E5E7EB',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Filter size={20} strokeWidth={2.2} color="#0A0A0A" />
            <h2 style={{
              fontSize: 'clamp(20px, 2.6vw, 26px)', fontWeight: 800,
              fontFamily: 'Nunito, sans-serif', color: '#0A0A0A', margin: 0,
            }}>
              Trouvez la formation IA adaptée à votre besoin
            </h2>
          </div>
          <p style={{ color: '#6B7280', fontSize: 14, margin: '0 0 28px 32px' }}>
            Cochez un ou plusieurs outils, un ou plusieurs métiers : la liste suit chacun de vos clics.
          </p>

          {/* ── Filtre OUTIL ── */}
          <div style={{ marginBottom: 24 }}>
            <div style={labelStyle()}>
              <Sparkles size={14} strokeWidth={2.4} />
              Outil IA <span style={hintStyle()}>(multi-sélection)</span>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {TOOL_HUBS.map(hub => (
                <FilterChip
                  key={hub.id}
                  active={selectedTools.includes(hub.id)}
                  onClick={() => toggle(selectedTools, setSelectedTools)(hub.id)}
                  color={hub.color}
                >
                  <ToolLogo tool={hub.id} size={16} color={selectedTools.includes(hub.id) ? '#fff' : hub.color} />
                  {hub.tool}
                </FilterChip>
              ))}
            </div>
          </div>

          {/* ── Filtre MÉTIER ── */}
          <div style={{ marginBottom: 24 }}>
            <div style={labelStyle()}>
              <Users size={14} strokeWidth={2.4} />
              Métier <span style={hintStyle()}>(multi-sélection)</span>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {METIERS.map(m => {
                const Icon = METIER_ICONS[m.slug]
                return (
                  <FilterChip
                    key={m.slug}
                    active={selectedMetiers.includes(m.slug)}
                    onClick={() => toggle(selectedMetiers, setSelectedMetiers)(m.slug)}
                    color="#d97706"
                  >
                    {Icon && <Icon size={14} strokeWidth={2.2} />}
                    {m.label}
                  </FilterChip>
                )
              })}
            </div>
          </div>

          {/* ── Compteur + reset ── */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
            paddingTop: 20, borderTop: '1px solid #E5E7EB',
          }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A' }}>
              {filteredSpokes.length} formation{filteredSpokes.length > 1 ? 's' : ''} correspond{filteredSpokes.length > 1 ? 'ent' : ''} à votre sélection
            </div>
            {hasActiveFilters && (
              <button onClick={resetFilters} style={{
                background: 'transparent', border: 'none', color: '#6B7280',
                cursor: 'pointer', fontSize: 14, fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: 'DM Sans, sans-serif',
              }}>
                <RotateCcw size={14} />
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>

        {/* ═══════════ RÉSULTATS ═══════════ */}
        <div style={{ marginTop: 40 }}>
          {filteredSpokes.length === 0 ? (
            <div style={{
              padding: 48, textAlign: 'center',
              background: '#F9FAFB', borderRadius: 12, border: '1px dashed #D1D5DB',
            }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0A0A0A', marginBottom: 8 }}>
                Aucun programme ne croise encore ces critères
              </div>
              <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 20 }}>
                Cette combinaison n'existe pas au catalogue ; un programme peut s'écrire pour votre équipe.
              </p>
              <Link to="/contact" style={{
                display: 'inline-block',
                background: '#2563EB', color: '#fff',
                padding: '12px 24px', borderRadius: 8, textDecoration: 'none',
                fontSize: 14, fontWeight: 700,
              }}>
                Demander un programme sur mesure →
              </Link>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? 280 : 320}px, 1fr))`,
              gap: 20,
            }}>
              {filteredSpokes.map(s => {
                const MetierIcon = METIER_ICONS[s.metierSlug]
                return (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    style={{
                      display: 'block',
                      background: '#fff',
                      border: '1px solid #E5E7EB',
                      borderRadius: 12,
                      padding: 24,
                      textDecoration: 'none',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
                      e.currentTarget.style.borderColor = s.toolColor
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#E5E7EB'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: s.toolColorLight,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <ToolLogo tool={s.toolSlug} size={22} color={s.toolColor} />
                      </div>
                      <div style={{
                        fontSize: 12, fontWeight: 700, color: s.toolColor,
                        textTransform: 'uppercase', letterSpacing: '0.04em',
                      }}>
                        {s.tool}
                      </div>
                    </div>

                    <h3 style={{
                      fontSize: 17, fontWeight: 800, color: '#0A0A0A',
                      fontFamily: 'Nunito, sans-serif', marginBottom: 10, lineHeight: 1.3,
                    }}>
                      {s.h1 || `Formation ${s.tool} pour ${s.metier}`}
                    </h3>

                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: '#F3F4F6', color: '#374151',
                      padding: '4px 10px', borderRadius: 6,
                      fontSize: 12, fontWeight: 600, marginBottom: 14,
                    }}>
                      {MetierIcon && <MetierIcon size={12} strokeWidth={2.4} />}
                      {s.metier}
                    </div>

                    <p style={{
                      color: '#6B7280', fontSize: 13, lineHeight: 1.55,
                      marginBottom: 16,
                      display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {s.metaDesc}
                    </p>

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      color: s.toolColor, fontSize: 13, fontWeight: 700,
                    }}>
                      Voir la formation
                      <ArrowRight size={14} strokeWidth={2.4} />
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
        </nav>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * RACCOURCIS : HUBS PAR OUTIL & PAR MÉTIER
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: isMobile ? '48px 20px' : '72px 40px',
        background: '#F9FAFB',
        borderTop: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800,
            fontFamily: 'Nunito, sans-serif', color: '#0A0A0A',
            marginBottom: 28, textAlign: 'center',
          }}>
            Parcourir les formations par outil IA
          </h2>
          <nav aria-label="Formations par outil IA" style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? 180 : 200}px, 1fr))`,
            gap: 16,
          }}>
            {TOOL_HUBS.filter(hub => hub.slug).map(hub => (
              <Link key={hub.id} to={`/${hub.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', borderRadius: 12,
                  padding: 20, textAlign: 'center',
                  border: `2px solid ${hub.color}20`,
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: hub.colorLight, margin: '0 auto 12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <ToolLogo tool={hub.id} size={30} color={hub.color} />
                  </div>
                  <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: 14, lineHeight: 1.3, minHeight: '2.6em', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                    Formation {hub.tool}
                  </div>
                  <div style={{ color: hub.color, fontSize: 12, fontWeight: 600 }}>
                    Voir le parcours →
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FORMATIONS THÉMATIQUES & FORMATS (pages dédiées hors spokes,
       * absentes du filtre temps réel qui ne connaît que SPOKES)
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: isMobile ? '48px 20px' : '72px 40px',
        background: '#fff',
        borderTop: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800,
            fontFamily: 'Nunito, sans-serif', color: '#0A0A0A',
            marginBottom: 10, textAlign: 'center',
          }}>
            Les formations thématiques et les formats
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, textAlign: 'center', maxWidth: 640, margin: '0 auto 28px', lineHeight: 1.6 }}>
            Certaines formations ne dépendent ni d'un outil ni d'un métier : les agents, l'automatisation, la méthode des prompts, la conformité, ou les formats qui rythment un déploiement dans toute l'entreprise.
          </p>
          <nav aria-label="Formations thématiques et formats" style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? 220 : 250}px, 1fr))`,
            gap: 16,
          }}>
            {[
              { label: 'Formation agents IA', slug: 'formation-agents-ia', desc: "Créer un agent qui enchaîne plusieurs tâches, puis le tester et le surveiller." },
              { label: 'Formation automatisation IA', slug: 'formation-automatisation-ia', desc: "Relier vos applications et confier les tâches répétitives à n8n, Make ou Zapier." },
              { label: 'Formation n8n', slug: 'formation-n8n', desc: "L'outil d'automatisation installable sur vos propres serveurs, avec ses étapes d'IA." },
              { label: 'Formation Make', slug: 'formation-make', desc: "Des scénarios visuels (l'ancien Integromat) qui appellent l'IA sans faire exploser le compteur d'opérations." },
              { label: 'Formation Zapier', slug: 'formation-zapier', desc: "Des premiers Zaps fiables en une journée, pour qui n'a jamais rien automatisé." },
              { label: 'Formation prompt engineering', slug: 'formation-prompt-engineering', desc: "Une méthode pour formuler ses demandes, transposable d'un assistant à l'autre." },
              { label: 'Formation vibe coding', slug: 'formation-vibe-coding', desc: "Décrire une application à l'IA et obtenir un prototype qui tourne, sans savoir coder." },
              { label: 'Formation Claude Code', slug: 'formation-claude-code', desc: "L'agent de programmation d'Anthropic, dans le terminal et l'éditeur des développeurs." },
              { label: 'Formation AI Act (IA Act)', slug: 'formation-ai-act', desc: "Les obligations de l'AI Act après l'Omnibus de juillet 2026, et le plan d'action qui en découle." },
              { label: 'Formation CSE & IA', slug: 'formation-cse-ia', desc: "Élus et directions au même niveau : consultation, grille d'instruction, avis motivé." },
              { label: 'Formation data IA', slug: 'formation-data-ia', desc: "Faire parler ses fichiers avec l'IA, contrôler les chiffres obtenus, automatiser le reporting." },
              { label: 'Formation gouvernance IA', slug: 'formation-gouvernance-ia', desc: "Écrire la charte d'usage et organiser le pilotage de l'IA dans l'organisation." },
              { label: 'Formation IA générative', slug: 'formation-intelligence-artificielle-generative', desc: "Comprendre comment un modèle génératif produit ses réponses, et où il se trompe." },
              { label: 'Formation IA COMEX', slug: 'formation-ia-comex', desc: "Une session réservée au comité de direction, qui peut se tenir en anglais." },
              { label: 'Formation IA dirigeants', slug: 'formation-ia-dirigeants', desc: "Ce qu'un dirigeant doit savoir de l'IA pour arbitrer ses budgets et ses priorités." },
              { label: 'Formation IA en entreprise', slug: 'formation-ia-entreprise', desc: "Former toute l'entreprise par vagues successives, appuyées sur des référents internes et un bilan chiffré." },
              { label: 'Acculturation IA', slug: 'acculturation-ia', desc: "Donner une culture commune à tous les salariés, par conférences et ateliers courts." },
            ].map(t => (
              <Link key={t.slug} to={`/${t.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', borderRadius: 12, padding: 18,
                  border: '1px solid #E5E7EB', height: '100%', boxSizing: 'border-box',
                }}>
                  <div style={{ fontWeight: 800, color: '#0A0A0A', fontSize: 14.5, fontFamily: 'Nunito, sans-serif', marginBottom: 6 }}>{t.label}</div>
                  <div style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.55, marginBottom: 8 }}>{t.desc}</div>
                  <div style={{ color: '#2563EB', fontSize: 12.5, fontWeight: 700 }}>Voir la formation →</div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * POURQUOI CHOISIR MASTERIA
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: isMobile ? '64px 20px' : '96px 40px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 800,
            fontFamily: 'Nunito, sans-serif', color: '#0A0A0A',
            textAlign: 'center', marginBottom: 12, letterSpacing: '-0.01em',
          }}>
            Pourquoi choisir une formation IA Masteria
          </h2>
          <p style={{
            color: '#6B7280', fontSize: 16, textAlign: 'center',
            maxWidth: 620, margin: '0 auto 48px', lineHeight: 1.6,
          }}>
            Depuis 2022, Masteria forme des équipes à l'IA générative, à Lyon comme loin de Lyon : partout en France, dans les pays voisins, outre-Atlantique et en Inde. Un objectif guide chaque session : que les participants s'en servent le lundi suivant.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? 260 : 300}px, 1fr))`,
            gap: 24,
          }}>
            {[
              {
                icon: ShieldCheck, color: '#10a37f',
                title: 'Un organisme certifié Qualiopi',
                desc: "Le certificat n° 725311-1, émis par Certifopac, porte sur les actions de formation et expire le 28 janvier 2029 ; un audit de surveillance a lieu à mi-parcours. Votre OPCO règle la session selon ses critères de prise en charge et l'argent dont il dispose.",
              },
              {
                icon: UserCheck, color: '#2563EB',
                title: "La pratique occupe l'essentiel de la journée",
                desc: "Les apports théoriques durent quelques minutes ; le reste du temps, chacun travaille sur un dossier de son poste. Les demandes types et les gabarits construits en séance restent à chaque stagiaire.",
              },
              {
                icon: Award, color: '#d97706',
                title: 'Des missions publiées, vérifiables',
                desc: "Quatre études de cas anonymisées et six missions de formation sont décrites sur le site, du distributeur de 58 salariés au groupe industriel implanté sur trois continents.",
              },
              {
                icon: Zap, color: '#F97316',
                title: 'Cinq assistants au catalogue',
                desc: "ChatGPT, Copilot, Gemini, Claude et Vibe, plus des parcours multi-outils qui les comparent. Le choix suit votre environnement de travail et vos règles de confidentialité.",
              },
              {
                icon: MapPin, color: '#dc2626',
                title: 'Sur site ou à distance',
                desc: "Le formateur anime la session sur votre site, en France comme hors de France, ou en visioconférence quand l'équipe travaille sur plusieurs sites.",
              },
              {
                icon: Clock, color: '#6366F1',
                title: 'Des formats courts',
                desc: "Un sprint de trois heures, une journée ou deux : chaque format vise un résultat utilisable la semaine suivante, et les journées d'un même parcours s'espacent pour laisser le temps de pratiquer.",
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} style={{
                background: '#F9FAFB', borderRadius: 14, padding: 28,
                border: '1px solid #E5E7EB',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <Icon size={24} strokeWidth={2} color={color} />
                </div>
                <h3 style={{
                  fontSize: 17, fontWeight: 800, color: '#0A0A0A',
                  fontFamily: 'Nunito, sans-serif', marginBottom: 10, lineHeight: 1.3,
                }}>
                  {title}
                </h3>
                <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * MÉTHODE PÉDAGOGIQUE : contenu propre à la page
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: isMobile ? '64px 20px' : '96px 40px',
        background: '#F5F3EE',
        color: '#0A0A0A',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 800,
            fontFamily: 'Nunito, sans-serif', marginBottom: 24,
            letterSpacing: '-0.01em',
          }}>
            Notre méthode de formation en intelligence artificielle
          </h2>
          <p style={{ color: '#374151', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
            Une formation IA se juge aux habitudes qu'elle modifie, et ces habitudes se constatent un mois plus tard. La méthode tient en trois principes : <strong style={{ color: '#0A0A0A' }}>la pratique avant la théorie</strong>, <strong style={{ color: '#0A0A0A' }}>les dossiers apportés par les stagiaires</strong> et <strong style={{ color: '#0A0A0A' }}>des ressources qu'ils gardent</strong> après la session.
          </p>

          <h3 style={{
            fontSize: 20, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
            marginTop: 32, marginBottom: 14,
          }}>
            1. Le cadrage fixe les cas à traiter
          </h3>
          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
            Avant une session intra, un entretien avec le commanditaire et un questionnaire de positionnement rempli par chaque participant situent le niveau du groupe, les tâches à traiter en priorité et les contraintes du secteur. Le programme du catalogue est ensuite réécrit pour cette équipe. En individuel, le même travail se fait avec la personne formée, à partir de ses dossiers et de son agenda.
          </p>

          <h3 style={{
            fontSize: 20, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
            marginTop: 32, marginBottom: 14,
          }}>
            2. Les ateliers portent sur les dossiers des participants
          </h3>
          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
            Selon le programme, une ou plusieurs journées alternent des apports courts (méthode de rédaction des demandes, comparaison des outils, RGPD et AI Act) et des mises en situation. Les stagiaires apportent leurs mails, leurs tableaux Excel, leurs comptes rendus ; le formateur les aide à obtenir un résultat qu'ils sauront reproduire seuls, sur des documents anonymisés quand le sujet est sensible.
          </p>

          <h3 style={{
            fontSize: 20, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
            marginTop: 32, marginBottom: 14,
          }}>
            3. Les ressources restent après la session
          </h3>
          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
            Chaque stagiaire garde l'accès aux supports de la session, à ses demandes types et aux gabarits construits en atelier, et, selon le programme, à une grille pour choisir entre les outils ou à une charte d'usage. Un point à J+30 avec le commanditaire vérifie ce qui est entré dans le travail quotidien et prépare, s'il le faut, une deuxième vague.
          </p>

          <div style={{
            background: '#fff', border: '1px solid #E5E7EB',
            borderRadius: 12, padding: 24,
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}>
            <p style={{ margin: 0, color: '#374151', fontSize: 15, lineHeight: 1.7 }}>
              Deux missions récentes montrent ce cadrage à l'œuvre. Dans une interprofession agricole, seize salariés ont d'abord mis six assistants côte à côte en plénière, avant de s'en servir dans un atelier marketing et un atelier gestion ({' '}
              <Link to="/etudes-de-cas-ia#mission-interprofession-agricole" style={{ color: '#2563EB', fontWeight: 600 }}>voir la mission</Link>). L'équipe qui forme les clients d'un éditeur de logiciels B2B est passée, en deux jours, de ses projets Claude à des compétences partagées et à Cowork ({' '}
              <Link to="/etudes-de-cas-ia#mission-editeur-pole-formation" style={{ color: '#2563EB', fontWeight: 600 }}>voir la mission</Link>).
            </p>
            <p style={{ marginTop: 12, marginBottom: 0, color: '#6B7280', fontSize: 13.5, lineHeight: 1.6 }}>
              Mathias Nizan, fondateur de Masteria, pilote chacune de ces missions ; sa démarche est présentée sur{' '}
              <Link to="/mathias-nizan" style={{ color: '#2563EB', fontWeight: 600 }}>sa page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FORMATIONS PAR VILLE : découvrabilité géo
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: isMobile ? '56px 20px' : '80px 40px',
        background: '#F9FAFB',
        borderTop: '1px solid #E5E7EB',
      }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 10 }}>
              Formations par ville
            </div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 900, color: '#0A0A0A', letterSpacing: '-0.01em', marginBottom: 10 }}>
              Formation IA dans votre ville
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: 720, lineHeight: 1.65 }}>
              Chaque ville a sa page, avec les secteurs qui comptent sur place et les cas d'usage qui y reviennent. Les mêmes programmes se suivent en visioconférence pour les équipes installées ailleurs, en France ou à l'étranger.
            </p>
          </div>
          <nav aria-label="Formations IA par ville" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {GEO_CITIES.map(city => (
              <Link
                key={city.slug}
                to={`/${geoIaSlug(city.slug)}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: '#fff', border: '1px solid #E5E7EB',
                  borderRadius: 10, padding: '16px 18px',
                  textDecoration: 'none',
                  transition: 'border-color 150ms, box-shadow 150ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(37,99,235,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={16} color="#1E40AF" strokeWidth={2.5} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>
                    Formation IA {city.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#6B7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {city.region}
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FAQ : ciblée "formation intelligence artificielle"
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: isMobile ? '64px 20px' : '96px 40px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 800,
            fontFamily: 'Nunito, sans-serif', color: '#0A0A0A',
            marginBottom: 40, textAlign: 'center', letterSpacing: '-0.01em',
          }}>
            Ce qu'on nous demande avant de réserver une formation IA
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQ_IA.map((item, i) => (
              <details key={i} style={{
                background: '#F9FAFB', border: '1px solid #E5E7EB',
                borderRadius: 10, padding: '18px 22px',
              }}>
                <summary style={{
                  fontSize: 16, fontWeight: 700, color: '#0A0A0A',
                  fontFamily: 'Nunito, sans-serif', cursor: 'pointer',
                  listStyle: 'none', display: 'flex', alignItems: 'flex-start',
                  justifyContent: 'space-between', gap: 14,
                }}>
                  <span>{item.q}</span>
                  <ChevronRight size={18} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 2, color: '#9CA3AF' }} />
                </summary>
                <p style={{
                  color: '#4B5563', fontSize: 14, lineHeight: 1.75,
                  marginTop: 12, marginBottom: 0,
                }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * CTA FINAL
       * ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
        color: '#fff',
        padding: isMobile ? '64px 20px' : '96px 40px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 3.2vw, 40px)', fontWeight: 900,
            fontFamily: 'Nunito, sans-serif', marginBottom: 20,
            letterSpacing: '-0.01em',
          }}>
            Pas encore sûr de la bonne formation ?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 16, marginBottom: 32, lineHeight: 1.65 }}>
            Décrivez votre équipe et l'outil qu'elle utilise en quelques lignes : nous vous indiquons le programme du catalogue qui s'en approche le plus, ce qu'il faudrait y adapter et son prix.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block', background: '#fff', color: '#2563EB',
            padding: '16px 36px', borderRadius: 8, textDecoration: 'none',
            fontSize: 16, fontWeight: 800,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}>
            Demander une recommandation →
          </Link>
          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
            Ou écrivez-nous directement à{' '}
            <a href="mailto:mathias.nizan@master-ia.fr" style={{ color: '#fff', textDecoration: 'underline' }}>
              mathias.nizan@master-ia.fr
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────────────────────────
 * Styles helpers
 * ───────────────────────────────────────────── */
const labelStyle = () => ({
  display: 'inline-flex', alignItems: 'center', gap: 6,
  fontSize: 13, fontWeight: 700, color: '#0A0A0A',
  fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase',
  letterSpacing: '0.04em', marginBottom: 10,
})

const hintStyle = () => ({
  textTransform: 'none', letterSpacing: 0,
  color: '#6B7280', fontWeight: 500, fontSize: 12,
})
