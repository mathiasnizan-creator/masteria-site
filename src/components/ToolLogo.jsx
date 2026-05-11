/**
 * ToolLogo, logos officiels des 4 outils IA
 * Gemini & Anthropic : simple-icons
 * OpenAI & Copilot   : chemins SVG codés en dur (brand assets publics)
 */
import { siGooglegemini, siAnthropic } from 'simple-icons'

/* ─── Chemins SVG ─────────────────────────────────────────────── */

// OpenAI "bloom", logo officiel OpenAI (fleur / hexapétale)
const OPENAI_PATH =
  'M22.2819 10.9211a6.0042 6.0042 0 0 0-.5157-4.9108 6.0752 6.0752 0 0 0-6.5098-2.9A6.065 6.065 0 0 0 4.9807 4.1818a6.0744 6.0744 0 0 0-4.0108 2.9199 6.0757 6.0757 0 0 0 .7426 7.0966 6.0042 6.0042 0 0 0 .5157 4.9109 6.0557 6.0557 0 0 0 6.5104 2.9 6.065 6.065 0 0 0 4.5769 2.9054 6.0775 6.0775 0 0 0 5.7799-4.2067 6.0042 6.0042 0 0 0 4.0108-2.919 6.0757 6.0757 0 0 0-.7426-7.0966zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0L4.77 14.5a4.5004 4.5004 0 0 1-2.4294-6.6044zm16.5963 3.8558L13.1038 8.36 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.1925 2.4204a4.4948 4.4948 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6962zm2.0107-3.0231-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.1925-2.4158a4.4924 4.4924 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654 2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z'

/* ─── Config par outil ────────────────────────────────────────── */
const TOOLS = {
  chatgpt: {
    // logo OpenAI single-path, viewBox 0 0 24 24
    render: (size, color) => (
      <svg
        width={size} height={size}
        viewBox="0 0 24 24"
        fill={color || '#10a37f'}
        aria-label="OpenAI ChatGPT logo"
        role="img"
      >
        <path d={OPENAI_PATH} />
      </svg>
    ),
  },

  copilot: {
    // Microsoft Copilot, 4 cercles colorés en roue (approx. logo officiel)
    render: (size) => (
      <svg
        width={size} height={size}
        viewBox="0 0 24 24"
        aria-label="Microsoft Copilot logo"
        role="img"
        style={{ overflow: 'visible' }}
      >
        {/* Haut-gauche : violet */}
        <circle cx="9.5"  cy="9.5"  r="5.5" fill="#825EC2" opacity="0.95" />
        {/* Haut-droit : bleu */}
        <circle cx="14.5" cy="9.5"  r="5.5" fill="#2E8EFF" opacity="0.9" />
        {/* Bas-droit : cyan */}
        <circle cx="14.5" cy="14.5" r="5.5" fill="#00B4D8" opacity="0.9" />
        {/* Bas-gauche : vert */}
        <circle cx="9.5"  cy="14.5" r="5.5" fill="#1ACF7A" opacity="0.9" />
        {/* Centre blanc pour renforcer la lisibilité */}
        <circle cx="12" cy="12" r="3.2" fill="#fff" opacity="0.35" />
      </svg>
    ),
  },

  gemini: {
    render: (size, color) => (
      <svg
        width={size} height={size}
        viewBox="0 0 24 24"
        fill={color || '#' + siGooglegemini.hex}
        aria-label="Google Gemini logo"
        role="img"
      >
        <path d={siGooglegemini.path} />
      </svg>
    ),
  },

  claude: {
    render: (size, color) => (
      <svg
        width={size} height={size}
        viewBox="0 0 24 24"
        fill={color || '#d97706'}
        aria-label="Claude by Anthropic logo"
        role="img"
      >
        <path d={siAnthropic.path} />
      </svg>
    ),
  },

  'multi-outils': {
    // Panorama multi-outils : 5 points colorés représentant ChatGPT/Copilot/Gemini/Claude/Mistral
    render: (size) => (
      <svg
        width={size} height={size}
        viewBox="0 0 24 24"
        aria-label="Formation multi-outils IA"
        role="img"
      >
        <circle cx="12" cy="4"    r="2.4" fill="#10a37f" />
        <circle cx="20"  cy="9"   r="2.4" fill="#0078d4" />
        <circle cx="17" cy="18"   r="2.4" fill="#ea4335" />
        <circle cx="7"  cy="18"   r="2.4" fill="#d97706" />
        <circle cx="4"  cy="9"    r="2.4" fill="#fa500a" />
        <circle cx="12" cy="12"   r="2.2" fill="#6366f1" />
      </svg>
    ),
  },

  'sprint-ia': {
    // Sprint IA, format court : éclair orange dans un chrono
    render: (size) => (
      <svg
        width={size} height={size}
        viewBox="0 0 24 24"
        aria-label="Sprint IA logo"
        role="img"
      >
        <circle cx="12" cy="13" r="8.5" fill="#F97316" />
        <path d="M12 7.5v-2 M9 5h6" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M12.5 9.5l-3 4.5h2.5l-1 4 3-4.5h-2.5l1-4z" fill="#fff" />
      </svg>
    ),
  },

  mistral: {
    // Mistral AI, drapeau stylisé : 5 bandes horizontales dégradées (jaune → orange → rouge)
    render: (size) => (
      <svg
        width={size} height={size}
        viewBox="0 0 24 24"
        aria-label="Mistral AI logo"
        role="img"
      >
        {/* Fond transparent + bandes horizontales caractéristiques de l'identité Mistral */}
        <rect x="3"  y="4"  width="18" height="3" fill="#FFD43B" />
        <rect x="3"  y="7.5" width="18" height="3" fill="#FFA94D" />
        <rect x="3"  y="11" width="18" height="3" fill="#FF8A3D" />
        <rect x="3"  y="14.5" width="18" height="3" fill="#FA5F1A" />
        <rect x="3"  y="18" width="18" height="2.5" fill="#E8340C" />
      </svg>
    ),
  },
}

/* ─── Composant principal ─────────────────────────────────────── */

/**
 * @param {string}  tool  , 'chatgpt' | 'copilot' | 'gemini' | 'claude'
 * @param {number}  size  , taille en px (défaut 24)
 * @param {string}  color , surcharge couleur fill (non applicable à Copilot)
 */
export function ToolLogo({ tool, size = 24, color, style, className }) {
  const config = TOOLS[tool]
  if (!config) return null
  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}
      className={className}
    >
      {config.render(size, color)}
    </span>
  )
}

export default ToolLogo
