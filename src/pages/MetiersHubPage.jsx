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
import { METIERS, SPOKES, HUBS, getSpokesByMetier } from '../data/seo-pages'
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
 * FAQ ciblée "formation intelligence artificielle"
 * ───────────────────────────────────────────── */
const FAQ_IA = [
  {
    q: "Qu'est-ce qu'une formation en intelligence artificielle pour entreprise ?",
    a: "Une formation en intelligence artificielle pour entreprise est un programme pédagogique destiné aux professionnels qui veulent intégrer l'IA dans leurs tâches quotidiennes. Elle couvre généralement l'usage d'outils comme ChatGPT, Microsoft Copilot, Google Gemini, Claude ou Mistral AI, avec des cas pratiques adaptés au métier des participants. Chez Masteria, chaque formation dure une journée complète, alterne théorie et pratique, et s'appuie sur des exercices construits à partir des situations réelles des stagiaires.",
  },
  {
    q: "Quelle formation intelligence artificielle choisir pour son équipe ?",
    a: "Le choix dépend de deux critères principaux : l'outil d'IA adapté à votre environnement (ChatGPT, Microsoft Copilot, Google Gemini, Claude ou Mistral AI) et la fonction des apprenants (marketing, RH, finance, commercial, juridique, management, assistantes, etc.). Les filtres en haut de cette page permettent de croiser ces deux critères pour identifier la formation IA la plus adaptée. En cas de doute, notre équipe pédagogique propose un entretien gratuit de cadrage.",
  },
  {
    q: "Les formations Masteria sont-elles certifiées Qualiopi ?",
    a: "Oui, Masteria est un organisme de formation certifié Qualiopi au titre de la catégorie « actions de formation ». Cette certification garantit la qualité de nos processus pédagogiques et rend nos formations éligibles aux financements publics et paritaires (OPCO, FNE, plan de développement des compétences).",
  },
  {
    q: "Les formations sont-elles finançables par un OPCO ?",
    a: "Oui, toutes nos formations intelligence artificielle sont finançables à 100 % par les OPCO (Opérateurs de Compétences) au titre du plan de développement des compétences. Nous fournissons un devis, un programme détaillé, une convention de formation et une attestation de présence, documents nécessaires à toute prise en charge. Notre équipe accompagne les entreprises dans le montage des dossiers.",
  },
  {
    q: "Combien coûte une formation IA en entreprise ?",
    a: "Nos tarifs dépendent du format. En intra-entreprise, le tarif est de 1 980 € HT par jour pour un groupe jusqu'à 12 participants, dans vos locaux ou en distanciel. En accompagnement individuel sur mesure, le tarif est de 1 980 € HT par jour pour un coaching 1-to-1 (1 participant), en présentiel ou en distanciel, avec un programme co-construit sur vos enjeux. Tous ces montants sont éligibles au financement OPCO.",
  },
  {
    q: "Quels outils IA sont enseignés dans vos formations ?",
    a: "Masteria forme à cinq outils d'intelligence artificielle générative : ChatGPT (OpenAI), Microsoft Copilot, Google Gemini, Claude (Anthropic) et Mistral AI. Chaque outil fait l'objet d'un parcours dédié, décliné par métier. Le choix de l'outil dépend de l'environnement technique de l'entreprise et des contraintes de confidentialité.",
  },
  {
    q: "Les formations sont-elles dispensées en présentiel ou en distanciel ?",
    a: "Les deux formats sont possibles. Nous animons les formations intra-entreprise en présentiel dans vos locaux et en distanciel via visioconférence interactive. Les sessions intra-entreprises se déroulent au choix en présentiel dans vos locaux (France, Suisse, Belgique) ou en distanciel. Le contenu, le rythme et les exercices sont identiques dans les deux cas.",
  },
  {
    q: "Quelle est la durée d'une formation intelligence artificielle chez Masteria ?",
    a: "Nos formations durent une journée complète (7 heures) pour l'initiation et les parcours métiers. Les formats longs (2 jours) sont disponibles pour les profils avancés ou les entreprises qui veulent aller plus loin sur des cas d'usage complexes. Une phase de préparation asynchrone en amont et un accompagnement post-formation sont inclus.",
  },
  {
    q: "Faut-il des prérequis pour suivre une formation IA ?",
    a: "Aucun prérequis technique. Nos formations s'adressent à des professionnels sans bagage informatique particulier. Il suffit de maîtriser son poste de travail habituel (navigateur web, suite bureautique). Pour les formations orientées DSI ou développeurs, un premier niveau de culture technique est utile mais non bloquant.",
  },
  {
    q: "Quelles entreprises forment leurs équipes avec Masteria ?",
    a: "Masteria a formé plus de 1 500 professionnels dans des organisations de toutes tailles : PME, ETI, grands groupes, collectivités, cabinets de conseil, industries, services publics. Nos formations s'adaptent aux contraintes sectorielles spécifiques : confidentialité renforcée pour la santé et le juridique, souveraineté pour le secteur public, conformité RGPD pour les ressources humaines.",
  },
  {
    q: "Comment se déroule une formation intelligence artificielle type ?",
    a: "Chaque journée alterne des séquences théoriques courtes (15 à 20 minutes) et des ateliers pratiques sur cas d'usage réels apportés par les participants. Un kit de prompts et de ressources propre à chaque métier est remis en fin de session. Un suivi à 30 jours est inclus pour mesurer l'adoption et répondre aux questions post-formation.",
  },
  {
    q: "Peut-on construire une formation IA sur mesure ?",
    a: "Oui, nous construisons régulièrement des programmes sur mesure pour les équipes qui ont des besoins spécifiques (secteur régulé, outil interne, cas d'usage pointu). Le format intra-entreprise permet cette personnalisation complète : audit préalable, design pédagogique dédié, livrables adaptés. Contactez-nous pour un cadrage gratuit.",
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
    return SPOKES.filter(s => {
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
    numberOfItems: SPOKES.length,
    itemListElement: SPOKES.map((s, i) => ({
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
        title={metiersHub.metaTitle}
        description={metiersHub.metaDesc}
        slug={metiersHub.slug}
        faqItems={FAQ_IA.slice(0, 8).map(f => ({ q: f.q, a: f.a }))}
        breadcrumbs={breadcrumbs}
        extraJsonLd={itemListJsonLd}
      />

      {/* ═══════════════════════════════════════════════════════════
       * HERO — H1 ciblé "formation intelligence artificielle"
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
            <span>Catalogue complet · 89 formations · +1 500 pros formés</span>
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
            Trouvez la formation IA adaptée à votre équipe en croisant
            <strong style={{ color: '#0A0A0A' }}> outil</strong> et
            <strong style={{ color: '#0A0A0A' }}> métier</strong>.
            Masteria conçoit depuis 2022 des programmes opérationnels sur ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral AI.
          </p>

          <p style={{ fontSize: 15, color: '#92400E', fontWeight: 600, margin: '0 auto 36px', maxWidth: 560 }}>
            {metiersHub.pitch}
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
              { icon: BadgeCheck,        label: 'Certifié Qualiopi' },
              { icon: Wallet,            label: 'Finançable OPCO' },
              { icon: MonitorSmartphone, label: 'Présentiel & distanciel' },
              { icon: Building2,         label: 'Intra ou accompagnement individuel' },
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

      {/* ═══════════════════════════════════════════════════════════
       * FILTRES DYNAMIQUES
       * ═══════════════════════════════════════════════════════════ */}
      <section id="filtres" style={{
        padding: isMobile ? '48px 20px' : '72px 40px',
        background: '#fff',
        maxWidth: 1160, margin: '0 auto',
        scrollMarginTop: 80,
      }}>
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
            Combinez plusieurs critères. Le catalogue se met à jour en temps réel.
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
                Aucune formation ne correspond
              </div>
              <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 20 }}>
                Nous construisons aussi des programmes sur mesure. Dites-nous vos besoins.
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
                const hub = HUBS.find(h => h.id === s.toolSlug)
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
          <div style={{
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
                  <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: 14, marginBottom: 4 }}>
                    Formation {hub.tool}
                  </div>
                  <div style={{ color: hub.color, fontSize: 12, fontWeight: 600 }}>
                    Voir le parcours →
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
            Depuis 2022, nous formons les équipes françaises, suisses et belges à l'intelligence artificielle générative avec une promesse simple : des apprentissages immédiatement applicables dès le lundi matin.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? 260 : 300}px, 1fr))`,
            gap: 24,
          }}>
            {[
              {
                icon: ShieldCheck, color: '#10a37f',
                title: 'Organisme certifié Qualiopi',
                desc: "Formation inscrite au Répertoire Spécifique et finançable à 100 % par les OPCO. Certification Qualiopi délivrée pour 3 ans, avec audit de mi-parcours après 18 mois.",
              },
              {
                icon: UserCheck, color: '#2563EB',
                title: 'Pédagogie par la pratique',
                desc: "80 % du temps passé sur des exercices réels issus du quotidien des participants. Kit de prompts métier remis à chaque stagiaire.",
              },
              {
                icon: Award, color: '#d97706',
                title: '+1 500 professionnels formés',
                desc: "98 % de satisfaction. Une moyenne de 6 heures gagnées par semaine par participant après la formation.",
              },
              {
                icon: Zap, color: '#F97316',
                title: 'Catalogue couvrant 5 outils IA',
                desc: "ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral AI. Nous adaptons le choix de l'outil à votre stack et à vos contraintes.",
              },
              {
                icon: MapPin, color: '#dc2626',
                title: 'Présentiel partout en France',
                desc: "Formations animées dans vos locaux en France, Suisse et Belgique, ou en distanciel pour les équipes dispersées.",
              },
              {
                icon: Clock, color: '#6366F1',
                title: 'Formats courts et intensifs',
                desc: "Une journée suffit pour rendre une équipe autonome sur les cas d'usage clés de son métier. Pas de formation qui traîne sur plusieurs semaines.",
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
       * MÉTHODE PÉDAGOGIQUE — Content dense pour le SEO
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
            Une formation IA n'a de valeur que si elle produit un changement mesurable dans le quotidien des apprenants. Notre méthode est construite autour de trois principes : <strong style={{ color: '#0A0A0A' }}>apprentissage par la pratique</strong>, <strong style={{ color: '#0A0A0A' }}>cas d'usage réels apportés par les participants</strong>, et <strong style={{ color: '#0A0A0A' }}>kit de prompts métier</strong> directement réutilisables après la session.
          </p>

          <h3 style={{
            fontSize: 20, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
            marginTop: 32, marginBottom: 14,
          }}>
            1. Cadrage et design pédagogique
          </h3>
          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
            Avant chaque intra-entreprise, un entretien de cadrage permet d'identifier les cas d'usage prioritaires, le niveau de maturité IA des apprenants et les contraintes sectorielles. Le programme est ajusté en conséquence. En accompagnement individuel sur mesure, un brief approfondi en amont permet de calibrer le contenu, le rythme et les exercices sur les enjeux concrets du participant.
          </p>

          <h3 style={{
            fontSize: 20, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
            marginTop: 32, marginBottom: 14,
          }}>
            2. Journée(s) de formation en atelier
          </h3>
          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
            Une à plusieurs journées d'atelier (selon le programme) alternant séquences théoriques courtes — prompt engineering, comparaison d'outils, cadre réglementaire, RGPD — et mises en situation pratiques. Chaque participant travaille sur ses propres dossiers, ses vrais emails, ses vrais tableaux Excel, ses vrais comptes-rendus. L'objectif n'est pas de montrer ce que fait l'IA, c'est d'apprendre à obtenir un résultat concret sur ses tâches réelles.
          </p>

          <h3 style={{
            fontSize: 20, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
            marginTop: 32, marginBottom: 14,
          }}>
            3. Kit de prompts et ressources
          </h3>
          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
            Chaque stagiaire repart avec un kit pédagogique dédié à son métier : bibliothèque de prompts optimisés, guides de bonnes pratiques, matrices de sélection d'outils, checklists de conformité. Ces ressources sont pensées pour être utilisées immédiatement, pas pour être archivées.
          </p>

          <div style={{
            background: '#fff', border: '1px solid #E5E7EB',
            borderRadius: 12, padding: 24,
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}>
            <p style={{ margin: 0, color: '#374151', fontSize: 15, lineHeight: 1.7, fontStyle: 'italic' }}>
              « Une formation en intelligence artificielle réussie, c'est une formation dont les participants se disent, trois mois plus tard : cela a changé ma façon de travailler. »
            </p>
            <p style={{ marginTop: 12, color: '#6B7280', fontSize: 13, fontWeight: 600 }}>
              — Mathias Nizan, fondateur de Masteria
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FORMATIONS PAR VILLE — découvrabilité géo
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
              Pages dédiées avec contenu local : tissu économique, OPCO régional, cas d'usage par secteur, accès et zones desservies. Toutes nos formations sont aussi disponibles en distanciel partout en France, en Suisse et en Belgique.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
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
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
       * FAQ — ciblée "formation intelligence artificielle"
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
            Questions fréquentes sur la formation IA
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
            Notre équipe pédagogique propose un entretien gratuit de 20 minutes pour comprendre vos enjeux et recommander la formation intelligence artificielle la plus adaptée à vos équipes. Aucun engagement.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block', background: '#fff', color: '#2563EB',
            padding: '16px 36px', borderRadius: 8, textDecoration: 'none',
            fontSize: 16, fontWeight: 800,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}>
            Obtenir une recommandation gratuite →
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
