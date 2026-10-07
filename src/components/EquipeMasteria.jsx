import { Link } from 'react-router-dom'
import { Compass, Cpu, GraduationCap, ArrowRight } from 'lucide-react'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Bloc « L'équipe Masteria » : le réseau d'indépendants mobilisé selon le projet.
 * Ordres de grandeur donnés par Mathias (08/09 et 02/10/2026) : une dizaine de
 * consultants IA en France, environ cinq développeurs IA, une vingtaine de
 * formateurs. Positionnement : des indépendants expérimentés, Masteria répond
 * d'une seule voix (cf. mémoire positionnement-reseau-formateurs).
 * Le tableau « qui intervient » décrit une composition type, ajustée au cadrage.
 */

const c = '#2563EB'
const LINE = '#E5E7EB'

const PROFILS = [
  { Icon: Compass, nombre: '≈ 10', title: 'consultants IA', desc: "Audit, stratégie, gouvernance et conduite du changement, sur les missions de conseil partout en France." },
  { Icon: Cpu, nombre: '≈ 5', title: 'développeurs IA', desc: "Agents, assistants branchés sur vos documents, automatisations, intégrations au CRM et à l'ERP. Détachables sur site." },
  { Icon: GraduationCap, nombre: '≈ 20', title: 'formateurs', desc: "La rigueur du consultant, la clarté du pédagogue\u00a0: ils animent les parcours par métier et par outil." },
]

/* Composition type d'une mission : 'p' = au cœur de la mission, 'a' = en appui. */
const COLONNES = ['Pilotage', 'Consultants IA', 'Développeurs IA', 'Formateurs']
const MISSIONS = [
  { label: 'Audit et conseil', href: '/audit-ia', roles: ['p', 'p', 'a', null] },
  { label: 'Outil ou agent sur mesure', href: '/outils-ia-sur-mesure', roles: ['p', 'a', 'p', 'a'] },
  { label: 'Formation et déploiement', href: '/formation-intelligence-artificielle', roles: ['p', null, null, 'p'] },
]

/* Textes par défaut (ceux de /mathias-nizan). Une page peut passer ses propres textes
   en props optionnelles (titre, intro, lignes, legende…) pour ne pas dupliquer ce bloc
   d'une page à l'autre (home, 07/10/2026). Sans props, le rendu reste identique. */
const LEGENDE = { coeur: 'au cœur de la mission', appui: 'en appui', absent: 'non mobilisé' }
const majuscule = (s) => s.charAt(0).toUpperCase() + s.slice(1)

function Pastille({ role, legende = LEGENDE }) {
  if (role === 'p') return <span title={majuscule(legende.coeur)} style={{ display: 'inline-block', width: 12, height: 12, borderRadius: '50%', background: c }} />
  if (role === 'a') return <span title={majuscule(legende.appui)} style={{ display: 'inline-block', width: 12, height: 12, borderRadius: '50%', border: `2px solid ${c}`, boxSizing: 'border-box' }} />
  return <span aria-hidden="true" style={{ display: 'inline-block', width: 12, height: 2, background: '#D1D5DB', verticalAlign: 'middle' }} />
}

export default function EquipeMasteria({
  bg = '#fff',
  showFounder = true,
  titre = 'Une équipe mobilisée selon votre projet',
  intro = "Mathias Nizan pilote chaque mission. Autour de lui, Masteria réunit une dizaine de consultants IA, environ cinq développeurs IA et une vingtaine de formateurs\u00a0: des indépendants expérimentés, mobilisés selon ce que le projet demande, au moment où il le demande.",
  fondateurLigne = 'Fondateur · conseil et architecture de solutions IA',
  lignes,           // descriptions des trois profils, dans l'ordre de PROFILS
  tableauTitre = 'Qui intervient, selon votre projet',
  legende = LEGENDE,
  caption = 'Composition type des équipes Masteria selon le type de mission',
  colonnes = COLONNES,
  projets,          // intitulés des trois lignes du tableau, dans l'ordre de MISSIONS
  note = "Composition type, ajustée lors du cadrage. Une seule voix pour vous\u00a0: Masteria contractualise, coordonne les intervenants et répond de la qualité de chaque intervention.",
}) {
  const isDesktop = useIsDesktop()
  const profils = PROFILS.map((p, i) => ({ ...p, desc: lignes?.[i] ?? p.desc }))
  const missions = MISSIONS.map((m, i) => ({ ...m, label: projets?.[i] ?? m.label }))
  return (
    <section id="equipe" style={{ background: bg, padding: 'clamp(64px, 9vw, 112px) clamp(18px, 4vw, 32px)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'minmax(0, 420px) 1fr' : '1fr', gap: 'clamp(36px, 6vw, 80px)', alignItems: 'start' }}>
          {/* Colonne gauche : message + fondateur */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c, marginBottom: 16 }}>
              <span aria-hidden="true" style={{ width: 22, height: 2, background: c }} /> L'équipe Masteria
            </div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#0A0A0A', lineHeight: 1.15, margin: '0 0 18px' }}>
              {titre}
            </h2>
            <p style={{ fontSize: 16.5, color: '#374151', lineHeight: 1.75, margin: '0 0 28px' }}>
              {intro}
            </p>
            {showFounder && (
              <Link to="/mathias-nizan" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, border: `1px solid ${LINE}`, borderRadius: 16, textDecoration: 'none', background: '#fff', maxWidth: 400 }}>
                <img
                  src="/assets/mathias-nizan@120.jpg"
                  srcSet="/assets/mathias-nizan@120.jpg 1x, /assets/mathias-nizan@240.jpg 2x"
                  alt="Mathias Nizan"
                  width="56" height="56" loading="lazy" decoding="async"
                  style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A' }}>Mathias Nizan</span>
                  <span style={{ display: 'block', fontSize: 13, color: '#6B7280', lineHeight: 1.45 }}>{fondateurLigne}</span>
                </span>
                <ArrowRight size={16} strokeWidth={2.4} style={{ color: c, marginLeft: 'auto', flexShrink: 0 }} aria-hidden="true" />
              </Link>
            )}
          </div>

          {/* Colonne droite : les trois profils */}
          <div style={{ borderTop: `1px solid ${LINE}` }}>
            {profils.map(({ Icon, nombre, title, desc }) => (
              <div key={title} style={{ display: 'grid', gridTemplateColumns: isDesktop ? '150px 1fr' : '1fr', gap: isDesktop ? 28 : 8, padding: '26px 0', borderBottom: `1px solid ${LINE}`, alignItems: 'baseline' }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 900, color: c, letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                  {nombre}
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>
                    <Icon size={18} strokeWidth={1.8} style={{ color: '#6B7280' }} aria-hidden="true" /> {title}
                  </h3>
                  <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qui intervient, selon le projet */}
        <div style={{ marginTop: 'clamp(48px, 6vw, 72px)', background: bg === '#fff' ? '#F9FAFB' : '#fff', border: `1px solid ${LINE}`, borderRadius: 20, padding: 'clamp(22px, 3vw, 34px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 19, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{tableauTitre}</h3>
            <span style={{ display: 'inline-flex', gap: 18, fontSize: 13, color: '#6B7280', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Pastille role="p" legende={legende} /> {legende.coeur}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Pastille role="a" legende={legende} /> {legende.appui}</span>
            </span>
          </div>
          {!isDesktop ? (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${LINE}` }}>
              {missions.map(m => (
                <li key={m.label} style={{ padding: '16px 0', borderBottom: `1px solid ${LINE}` }}>
                  <Link to={m.href} style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', textDecoration: 'none', marginBottom: 10 }}>{m.label}</Link>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {m.roles.map((r, i) => r && (
                      <span key={colonnes[i]} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: '#374151', background: '#fff', border: `1px solid ${LINE}`, borderRadius: 99, padding: '5px 11px' }}>
                        <Pastille role={r} legende={legende} /> {colonnes[i]}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560, fontSize: 14.5 }}>
              <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                {caption}
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: 'left', padding: '10px 12px 12px 0', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', borderBottom: `1px solid ${LINE}` }}>Votre projet</th>
                  {colonnes.map(col => (
                    <th key={col} scope="col" style={{ textAlign: 'center', padding: '10px 12px 12px', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280', borderBottom: `1px solid ${LINE}` }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {missions.map(m => (
                  <tr key={m.label}>
                    <th scope="row" style={{ textAlign: 'left', padding: '16px 12px 16px 0', fontWeight: 700, borderBottom: `1px solid ${LINE}` }}>
                      <Link to={m.href} style={{ color: '#0A0A0A', textDecoration: 'none' }}>{m.label}</Link>
                    </th>
                    {m.roles.map((r, i) => (
                      <td key={i} style={{ textAlign: 'center', padding: '16px 12px', borderBottom: `1px solid ${LINE}` }}>
                        <Pastille role={r} legende={legende} />
                        <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                          {r === 'p' ? legende.coeur : r === 'a' ? legende.appui : legende.absent}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
          <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '16px 0 0' }}>
            {note}
          </p>
        </div>
      </div>
    </section>
  )
}

