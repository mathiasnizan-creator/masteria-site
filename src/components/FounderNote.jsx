import { useState } from 'react'
import { BadgeCheck } from 'lucide-react'

/* LinkedIn n'existe pas dans lucide-react (icônes de marque retirées) : SVG inline. */
function LinkedInGlyph({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/>
    </svg>
  )
}

/*
 * Bloc fondateur (E-E-A-T / preuve sociale) pour les pages high-ticket conseil & dev.
 * INTÉGRITÉ : aucun élément inventé. Photo réelle (/assets/mathias-nizan), citation
 * établie de Mathias Nizan, LinkedIn réel, faits déjà affichés sur le site (cabinet
 * spécialisé IA depuis 2022 fondé à Lyon, +1 500 professionnels formés, indépendant
 * des éditeurs, FR/CH/BE). Réutilise les jetons de design des pages money (#2563EB).
 */

const ACCENT = '#2563EB'
const ACCENT_LIGHT = '#DBEAFE'

const CREDENTIALS = [
  'Spécialiste IA depuis 2022',
  '+1 500 professionnels formés',
  'Cabinet indépendant des éditeurs',
  'Lyon · France · Suisse · Belgique',
]

const DEFAULT_QUOTE = "L'intelligence artificielle ne remplace pas les humains. Elle décuple leur potentiel."

/* Article Les Échos citant Mathias Nizan (URL canonique, tracking utm retiré). */
const ECHOS_ARTICLE_URL = 'https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741'

/* Mention presse. Affiche le logo officiel si /assets/lesechos-logo.svg est présent,
 * sinon bascule sur un libellé texte propre (fallback onError). */
function PressMention() {
  const [logoOk, setLogoOk] = useState(true)
  return (
    <a
      href={ECHOS_ARTICLE_URL}
      target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexWrap: 'wrap' }}
    >
      <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280' }}>
        Cité dans
      </span>
      {logoOk ? (
        <img
          src="/assets/lesechos-logo.png"
          alt="Les Échos"
          height="20"
          onError={() => setLogoOk(false)}
          style={{ height: 20, width: 'auto', display: 'block' }}
        />
      ) : (
        <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 18, fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>
          Les Échos
        </span>
      )}
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13.5, fontWeight: 700, color: ACCENT }}>
        Lire l'article
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>
      </span>
    </a>
  )
}

export default function FounderNote({ quote = DEFAULT_QUOTE, bg = '#F9FAFB' }) {
  return (
    <section style={{ padding: 'clamp(56px, 8vw, 96px) 24px', background: bg }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>
          Le fondateur
        </div>
        <div style={{
          background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 'clamp(28px, 4vw, 44px)',
          display: 'flex', gap: 'clamp(24px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap',
        }}>
          <div style={{ flexShrink: 0 }}>
            <img
              src="/assets/mathias-nizan@240.jpg"
              srcSet="/assets/mathias-nizan@120.jpg 120w, /assets/mathias-nizan@240.jpg 240w, /assets/mathias-nizan@360.jpg 360w"
              sizes="104px"
              alt="Mathias Nizan, fondateur de Masteria"
              width="104" height="104"
              loading="lazy" decoding="async"
              style={{ width: 104, height: 104, borderRadius: '50%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.6vw, 26px)', fontWeight: 900, color: '#0A0A0A', margin: '0 0 4px', letterSpacing: '-0.01em' }}>
              Mathias Nizan
            </h2>
            <p style={{ fontSize: 14, color: ACCENT, fontWeight: 600, margin: '0 0 18px' }}>
              Fondateur de Masteria, cabinet de conseil et développement IA
            </p>
            <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 18px', maxWidth: 720 }}>
              Mathias Nizan a fondé Masteria en 2022 à Lyon. Cabinet spécialisé uniquement sur l'intelligence artificielle et indépendant des éditeurs, Masteria a formé plus de 1 500 professionnels et accompagne PME, ETI et grands groupes, du cadrage stratégique au développement des solutions sur mesure, en France, en Suisse et en Belgique.
            </p>
            <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 18, margin: '0 0 20px' }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 700, color: '#0A0A0A', fontStyle: 'italic', margin: 0, lineHeight: 1.55 }}>
                « {quote} »
              </p>
            </blockquote>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              {CREDENTIALS.map(cred => (
                <span key={cred} style={{ background: ACCENT_LIGHT, color: ACCENT, padding: '5px 13px', borderRadius: 99, fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <BadgeCheck size={14} strokeWidth={2.4} aria-hidden="true" /> {cred}
                </span>
              ))}
              <a
                href="https://www.linkedin.com/in/mathias-nizan/"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13.5, fontWeight: 700, color: ACCENT, textDecoration: 'none', padding: '5px 4px' }}
              >
                <LinkedInGlyph size={16} /> LinkedIn
              </a>
            </div>

            {/* Citation presse — preuve sociale vérifiable */}
            <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid #E5E7EB' }}>
              <PressMention />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
