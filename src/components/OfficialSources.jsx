/**
 * OfficialSources — bloc de liens externes vers des sources d'autorité.
 *
 * Objectif SEO : renforcer l'E-E-A-T des pages "money" (formations) en citant
 * des sources institutionnelles vérifiables + la documentation officielle de
 * l'outil concerné. Les liens sont SUIVIS (pas de rel="nofollow") : ce sont des
 * citations légitimes vers des sources fiables, ce que Google valorise.
 *
 * Le lien éditeur est dynamique selon l'outil de la page (prop `tool`).
 * Pour les pages sans outil unique (hubs métier, multi-outils), seuls les deux
 * liens institutionnels s'affichent.
 */

const VENDOR_LINKS = [
  { match: /chatgpt|gpt/i, label: 'Site officiel ChatGPT (OpenAI)', url: 'https://openai.com/chatgpt/' },
  { match: /claude/i, label: 'Site officiel Claude (Anthropic)', url: 'https://www.anthropic.com/claude' },
  { match: /copilot/i, label: 'Site officiel Microsoft Copilot', url: 'https://www.microsoft.com/fr-fr/microsoft-365/copilot' },
  { match: /gemini/i, label: 'Site officiel Google Gemini', url: 'https://gemini.google.com/' },
  { match: /mistral/i, label: 'Site officiel Mistral AI', url: 'https://mistral.ai/' },
]

function vendorFor(tool) {
  if (!tool) return null
  return VENDOR_LINKS.find(v => v.match.test(tool)) || null
}

const linkStyle = { color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }
const noteStyle = { color: '#6B7280' }

export default function OfficialSources({ tool }) {
  const vendor = vendorFor(tool)
  return (
    <section aria-labelledby="sources-officielles" style={{ padding: '56px 40px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <h2 id="sources-officielles" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
          Sources et références officielles
        </h2>
        <p style={{ ...noteStyle, fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
          Pour vérifier nos engagements (certification qualité, financement) et approfondir l'outil concerné&nbsp;:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
          <li>
            <a href="https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation" target="_blank" rel="noopener noreferrer" style={linkStyle}>Qualiopi — Ministère du Travail</a>
            <span style={noteStyle}> : la certification qualité qui rend nos formations finançables.</span>
          </li>
          <li>
            <a href="https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco" target="_blank" rel="noopener noreferrer" style={linkStyle}>Les OPCO — Ministère du Travail</a>
            <span style={noteStyle}> : le fonctionnement du financement de la formation par votre opérateur de compétences.</span>
          </li>
          {vendor && (
            <li>
              <a href={vendor.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>{vendor.label}</a>
              <span style={noteStyle}> : la documentation de l'éditeur sur l'outil que nous formons.</span>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
