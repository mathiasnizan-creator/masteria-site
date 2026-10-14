import { Link } from 'react-router-dom'
import { ArrowRight, Check, Filter } from 'lucide-react'

/*
 * Habillage de /catalogue : la page partagée par mail aux décideurs
 * (14/10/2026). Même module de filtres que /formation-intelligence-artificielle
 * (MetiersHubPage, variant="catalogue"), avec un en-tête court et une fin
 * orientée réponse. Page en noindex, absente du sitemap : elle ne concurrence
 * pas la page SEO et n'entre pas dans la mesure du texte propre.
 * Les liens ?metier=… et ?outil=… des mails préfiltrent le module.
 */

const c = '#2563EB'
const nunito = 'Nunito, sans-serif'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const BADGES = [
  'Qualiopi, actions de formation',
  "Prise en charge possible par l'OPCO",
  'Intra ou individuel, au même tarif',
  'Français ou anglais',
]

export function CatalogueHero({ isMobile }) {
  return (
    <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: isMobile ? '48px 20px 44px' : '72px 40px 64px', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
      <div style={{ ...wrap, position: 'relative' }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7DA9F0', marginBottom: 20 }}>
          Masteria · Catalogue 2027
        </div>
        <h1 style={{ fontFamily: nunito, fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.06, margin: '0 0 20px', letterSpacing: '-0.03em', maxWidth: 860 }}>
          Former vos équipes à l'intelligence artificielle
        </h1>
        <p style={{ fontSize: 'clamp(16px, 2.1vw, 19px)', color: '#CBD5E1', lineHeight: 1.6, margin: '0 0 30px', maxWidth: 720 }}>
          Choisissez l'outil de votre entreprise et le métier à former : le catalogue affiche les programmes qui correspondent, avec leur durée, leurs objectifs et leur prix. Chaque session se prépare ensuite sur les dossiers de votre équipe.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="#filtres" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
            <Filter size={16} strokeWidth={2.4} aria-hidden="true" /> Trouver la formation adaptée
          </a>
          <a href="#plus-loin" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 24px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
            Formats courts et conseil
          </a>
        </div>
        <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          {BADGES.map((b) => (
            <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
              <Check size={13} strokeWidth={2.6} style={{ color: '#60A5FA' }} aria-hidden="true" />{b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

const COURTS = [
  { nom: 'Sprint IA', href: '/formation-sprint-ia', duree: '3 heures', desc: "Une séance sur l'outil que l'entreprise fournit déjà, chacun sur une de ses tâches. Pour former beaucoup de monde vite." },
  { nom: 'IA pour le COMEX', href: '/formation-ia-comex', duree: '3 heures à 1 journée', desc: 'Le comité de direction au complet, en français ou en anglais, jusqu\'à une feuille de route écrite.' },
]

const PLUS_LOIN = [
  { nom: 'Diagnostic IA', href: '/diagnostic-ia', desc: 'Une feuille de route classée par priorité, avec fourchettes de budget et de délai.' },
  { nom: 'Accompagnement IA', href: '/accompagnement-ia', desc: 'Cadrer, équiper, faire adopter, mesurer, sans dépendre d\'un éditeur.' },
  { nom: 'Agents IA sur mesure', href: '/agents-ia-entreprise', desc: 'Un agent branché à vos logiciels, mis en service sous surveillance.' },
  { nom: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', desc: "Un outil interne dont le code et la documentation vous reviennent." },
]

const card = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 22, textDecoration: 'none', display: 'block' }
const gridOf = (min) => ({ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${min}px), 1fr))`, gap: 18 })

export function CatalogueSuite({ isMobile }) {
  const pad = isMobile ? '52px 20px' : '80px 40px'
  return (
    <>
      {/* Formats courts + aller plus loin */}
      <section id="plus-loin" style={{ padding: pad, background: '#F8FAFC', borderTop: '1px solid #E5E7EB', scrollMarginTop: 110 }}>
        <div style={wrap}>
          <h2 style={{ fontFamily: nunito, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 22px' }}>Les formats courts</h2>
          <div style={gridOf(320)}>
            {COURTS.map((f) => (
              <Link key={f.nom} to={f.href} style={{ ...card, borderTop: `3px solid ${c}` }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: c, marginBottom: 8, fontFamily: nunito }}>{f.duree}</div>
                <div style={{ fontFamily: nunito, fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{f.nom}</div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontFamily: nunito, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0A0A0A', margin: '56px 0 10px' }}>Aller plus loin</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, margin: '0 0 22px', maxWidth: 760 }}>
            Quand la formation ne suffit plus, nos consultants et développeurs prennent le relais. Tout commence par trente minutes de cadrage, offertes.
          </p>
          <div style={gridOf(240)}>
            {PLUS_LOIN.map((p) => (
              <Link key={p.nom} to={p.href} style={card}>
                <div style={{ fontFamily: nunito, fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{p.nom}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Étude de cas */}
      <section style={{ padding: pad, background: '#fff' }}>
        <div style={{ ...wrap, maxWidth: 960 }}>
          <div style={{ background: '#F3F7FF', border: '1px solid #DBEAFE', borderRadius: 20, padding: isMobile ? 26 : 44, display: isMobile ? 'block' : 'grid', gridTemplateColumns: '200px 1fr', gap: 40 }}>
            <div style={{ marginBottom: isMobile ? 18 : 0 }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 10, fontFamily: nunito }}>Étude de cas · Industrie</div>
              <div style={{ fontFamily: nunito, fontSize: 84, fontWeight: 900, lineHeight: 0.95, color: c, letterSpacing: '-0.04em' }}>59</div>
              <div style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.5, marginTop: 8 }}>managers formés à Copilot en 2026 dans un groupe industriel international</div>
            </div>
            <div>
              <p style={{ fontSize: 16, color: '#1F2937', lineHeight: 1.75, margin: '0 0 18px' }}>
                Une matinée en anglais pour le comité de direction, puis cinq sessions de deux jours pour les managers, de juillet à septembre, dont deux en anglais, sur treize ateliers bâtis avec les fichiers du groupe. Les sites des États-Unis et du Mexique suivent en octobre, l'Inde en décembre.
              </p>
              <Link to="/etudes-de-cas-ia#industrie" style={{ color: c, fontWeight: 700, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Lire l'étude de cas <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fin : demander un programme */}
      <section style={{ padding: isMobile ? '52px 20px' : '76px 40px', background: '#0A0F1E', textAlign: 'center' }}>
        <div style={{ ...wrap, maxWidth: 720 }}>
          <h2 style={{ fontFamily: nunito, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#F8FAFC', margin: '0 0 14px' }}>Un programme pour vos équipes</h2>
          <p style={{ fontSize: 16, color: '#94A3B8', lineHeight: 1.7, margin: '0 0 28px' }}>
            Dites-nous quel outil vous utilisez et quel service vous voulez former : vous recevez un programme calé sur vos dossiers et un devis sous vingt-quatre heures ouvrées. Vous pouvez aussi répondre directement au mail qui vous a mené ici.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
            Demander un programme <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
