import { Link } from 'react-router-dom'
import { Languages } from 'lucide-react'
import { strings, baseVeille } from '../data/veille-i18n'

/**
 * Bascule FR / EN de la Veille IA.
 *
 * Elle pointe vers la MÊME page dans l'autre langue : une édition renvoie à
 * son édition traduite, l'index à l'index. Le suffixe (une date, 'publications'
 * ou rien) est passé par `suite`.
 *
 * Deux libellés visibles plutôt qu'un drapeau : un drapeau désigne un pays, pas
 * une langue, et il est illisible en petit.
 */
export default function VeilleLangSwitch({ lang = 'fr', suite = '', compact = false }) {
  const L = strings(lang)
  const cible = `${baseVeille(L.autre)}${suite ? `/${suite}` : ''}`

  return (
    <Link
      to={cible}
      hrefLang={L.autre}
      aria-label={L.switchAria}
      title={L.autreTitre}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: compact ? '5px 11px' : '7px 14px',
        borderRadius: 999,
        border: '1px solid #2A3650',
        background: 'rgba(255,255,255,.03)',
        color: '#CBD5E1',
        fontSize: compact ? 13 : 13.5,
        fontWeight: 600,
        textDecoration: 'none',
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
      }}
    >
      <Languages size={compact ? 14 : 15} strokeWidth={2} aria-hidden="true" />
      <span>{L.autreLabel}</span>
    </Link>
  )
}
