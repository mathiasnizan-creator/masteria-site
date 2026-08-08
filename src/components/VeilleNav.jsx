import { Link } from 'react-router-dom'
import { Newspaper, Library, Info, Rss } from 'lucide-react'
import { baseVeille } from '../data/veille-i18n'

/**
 * VeilleNav — sous-navigation de la rubrique Veille IA.
 *
 * Barre de section présente en tête de chaque page /veille-ia*, sous l'en-tête
 * du site. Elle rend les pages de la rubrique accessibles depuis n'importe
 * laquelle, avec la page courante mise en avant. Rendue quel que soit l'état
 * de chargement de la page, pour que la navigation reste toujours disponible.
 *
 * `active` : 'une' | 'publications' | 'apropos' | null (édition datée).
 */

const c = '#2563EB'

const ONGLETS = [
  { cle: 'une', label: 'La une', labelEn: 'Latest', to: '', icon: Newspaper },
  { cle: 'publications', label: 'Toutes les publications', labelEn: 'All editions', to: '/publications', icon: Library },
  // La page « À propos » n'existe qu'en français : le lien reste explicite.
  { cle: 'apropos', label: 'À propos', labelEn: 'About (FR)', to: '/veille-ia/a-propos', absolu: true, icon: Info },
]

export default function VeilleNav({ active = null, lang = 'fr' }) {
  return (
    <nav
      aria-label={lang === 'en' ? 'AI Watch navigation' : "Navigation de la Veille IA"}
      style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', position: 'relative', zIndex: 1 }}
    >
      <div style={{
        maxWidth: 1140, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', gap: 24,
        overflowX: 'auto', WebkitOverflowScrolling: 'touch',
      }}>
        <Link
          to={baseVeille(lang)}
          style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 15,
            color: '#0A0A0A', textDecoration: 'none', whiteSpace: 'nowrap',
            paddingRight: 8, flexShrink: 0,
          }}
        >
          Veille IA
        </Link>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: 4 }}>
          {ONGLETS.map(o => {
            const estActif = o.cle === active
            const Icon = o.icon
            return (
              <Link
                key={o.cle}
                to={o.absolu ? o.to : `${baseVeille(lang)}${o.to}`}
                aria-current={estActif ? 'page' : undefined}
                className="veille-onglet"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '16px 4px', whiteSpace: 'nowrap', textDecoration: 'none',
                  fontSize: 14, fontWeight: estActif ? 700 : 500,
                  color: estActif ? c : '#374151',
                  borderBottom: `2px solid ${estActif ? c : 'transparent'}`,
                  marginBottom: -1,
                }}
              >
                <Icon size={15} strokeWidth={2.2} aria-hidden="true"
                  style={{ color: estActif ? c : '#6B7280' }} />
                {lang === 'en' ? (o.labelEn || o.label) : o.label}
              </Link>
            )
          })}
        </div>

        <a
          href="/veille.xml"
          className="veille-onglet"
          aria-label={lang === 'en' ? 'AI Watch RSS feed' : "Flux RSS de la Veille IA"}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginLeft: 'auto', padding: '16px 4px', textDecoration: 'none',
            fontSize: 13.5, fontWeight: 600, color: '#6B7280', whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          <Rss size={14} strokeWidth={2.2} aria-hidden="true" />
          RSS
        </a>
      </div>
    </nav>
  )
}
