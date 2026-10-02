import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Check, ReceiptText, UserSearch, Scale, NotebookPen, ChartColumn, Cpu, GraduationCap, Briefcase, Users, Gavel, ListChecks, Landmark } from 'lucide-react'
import { useIsDesktop } from '../hooks/useMediaQuery'
import ToolLogo from './ToolLogo'

/*
 * « Des équipes augmentées par l'IA » : bandeau animé en bas du hero de la home.
 * En haut, les agents IA que Masteria construit (conseil et développement) ; en
 * bas, les personnes que Masteria forme (formation). En boucle, une impulsion
 * descend de chaque agent vers sa personne : son avatar s'illumine, sa tâche
 * avance d'un coup et passe à « prêt ». Les colonnes s'enchaînent en vague.
 * Les styles de base décrivent l'état « augmenté » : c'est ce qui s'affiche,
 * figé, quand le visiteur demande moins de mouvement.
 * Scènes illustratives : aucun chiffre, aucun client.
 */

const CYCLE = 10
const STEP = 1.3

const EQUIPE = [
  { agent: 'Agent devis', court: 'Devis', Icon: ReceiptText, RoleIcon: Briefcase, role: 'Commerciale', tache: 'Prépare un devis', fait: 'Devis prêt', tone: '#9AA8BF' },
  { agent: 'Assistant RH', court: 'RH', Icon: UserSearch, RoleIcon: Users, role: 'Ressources humaines', tache: 'Trie les candidatures', fait: 'Short-list prête', tone: '#AEB9CB' },
  { agent: 'Agent contrats', court: 'Contrats', Icon: Scale, RoleIcon: Gavel, role: 'Juriste', tache: 'Relit un contrat', fait: 'Clauses relevées', tone: '#8E9DB5' },
  { agent: 'Agent réunions', court: 'Réunions', Icon: NotebookPen, RoleIcon: ListChecks, role: 'Chef de projet', tache: 'Rédige le compte rendu', fait: 'Compte rendu envoyé', tone: '#B6C0D0' },
  { agent: 'Tableau de bord', court: 'Pilotage', Icon: ChartColumn, RoleIcon: Landmark, role: 'Direction financière', tache: 'Prépare la revue', fait: 'Revue prête', tone: '#97A5BC' },
]

const CSS = `
.aug-agent{animation:aug-agent ${CYCLE}s infinite}
@keyframes aug-agent{0%,3%{background:rgba(37,99,235,.12);border-color:rgba(96,165,250,.35);box-shadow:none}8%,22%{background:rgba(37,99,235,.4);border-color:#93C5FD;box-shadow:0 0 18px rgba(96,165,250,.55)}30%,100%{background:rgba(37,99,235,.12);border-color:rgba(96,165,250,.35);box-shadow:none}}
.aug-dot{animation:aug-dot ${CYCLE}s infinite}
@keyframes aug-dot{0%,8%{top:0;opacity:0}10%{top:0;opacity:1}22%{top:100%;opacity:1}25%,100%{top:100%;opacity:0}}
.aug-beam{animation:aug-beam ${CYCLE}s infinite}
@keyframes aug-beam{0%,8%{opacity:.22}12%,24%{opacity:.75}32%,100%{opacity:.22}}
.aug-ring{animation:aug-ring ${CYCLE}s infinite}
@keyframes aug-ring{0%,21%{border-color:rgba(255,255,255,.16);box-shadow:none}26%,82%{border-color:#60A5FA;box-shadow:0 0 0 4px rgba(37,99,235,.28),0 0 22px rgba(96,165,250,.55)}92%,100%{border-color:rgba(255,255,255,.16);box-shadow:none}}
.aug-card{animation:aug-card ${CYCLE}s infinite}
@keyframes aug-card{0%,21%{border-color:rgba(255,255,255,.09);background:rgba(255,255,255,.04)}28%,82%{border-color:rgba(96,165,250,.45);background:rgba(37,99,235,.10)}92%,100%{border-color:rgba(255,255,255,.09);background:rgba(255,255,255,.04)}}
.aug-badge{animation:aug-badge ${CYCLE}s infinite}
@keyframes aug-badge{0%,23%{transform:scale(0)}28%,82%{transform:scale(1)}90%,100%{transform:scale(0)}}
.aug-bar{animation:aug-bar ${CYCLE}s infinite}
@keyframes aug-bar{0%,22%{width:22%}40%,84%{width:100%}94%,100%{width:22%}}
.aug-task{animation:aug-task ${CYCLE}s infinite}
@keyframes aug-task{0%,34%{opacity:1}40%,84%{opacity:0}92%,100%{opacity:1}}
.aug-status{animation:aug-status ${CYCLE}s infinite}
@keyframes aug-status{0%,36%{opacity:0;transform:translateY(4px)}42%,84%{opacity:1;transform:none}92%,100%{opacity:0;transform:translateY(4px)}}
.aug-bus{animation:aug-bus 3.6s linear infinite}
@keyframes aug-bus{from{background-position:-40% 0}to{background-position:140% 0}}
.aug-underline{animation:aug-underline 5s ease-in-out infinite}
@keyframes aug-underline{0%{width:0;opacity:1}45%,82%{width:100%;opacity:1}100%{width:100%;opacity:0}}
.aug-vdot{animation:aug-vdot 3.2s ease-in-out infinite}
@keyframes aug-vdot{0%{top:0;opacity:0}12%{opacity:1}88%{opacity:1}100%{top:100%;opacity:0}}
@media (prefers-reduced-motion:reduce){.aug *{animation:none!important}}
`

function Silhouette({ tone }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" style={{ display: 'block', borderRadius: '50%' }}>
      <rect width="40" height="40" fill="#1E293B" />
      <circle cx="20" cy="16" r="7" fill={tone} />
      <path d="M5 40 C6 29, 34 29, 35 40 Z" fill={tone} />
    </svg>
  )
}

function Etiquette({ Icon, index, titre, lien, children }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93C5FD', marginBottom: 6 }}>
        <span aria-hidden="true" style={{ width: 24, height: 24, borderRadius: 7, background: 'rgba(37,99,235,0.18)', border: '1px solid rgba(96,165,250,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon size={13} strokeWidth={2.2} style={{ color: '#93C5FD' }} />
        </span>
        {index}
      </div>
      <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#F8FAFC', lineHeight: 1.3, marginBottom: 6 }}>{titre}</div>
      {children}
      <Link to={lien[1]} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, color: '#BFDBFE', textDecoration: 'none' }}>
        {lien[0]} <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
      </Link>
    </div>
  )
}

/* Formation : tous les LLM du marché, logos aux couleurs d'origine sur tuiles blanches. */
const LLM = [['chatgpt', 'ChatGPT'], ['claude', 'Claude'], ['copilot', 'Microsoft Copilot'], ['gemini', 'Google Gemini'], ['mistral', 'Mistral AI']]
function TousLesLLM() {
  return (
    <div style={{ margin: '2px 0 10px' }}>
      <div style={{ fontSize: 13, color: '#94A3B8', marginBottom: 8 }}>Sur tous les LLM du marché</div>
      <ul aria-label="ChatGPT, Claude, Microsoft Copilot, Google Gemini et Mistral AI" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
        {LLM.map(([id, nom]) => (
          <li key={id} title={nom} style={{ width: 34, height: 34, borderRadius: 10, background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px -6px rgba(0,0,0,0.5)' }}>
            <ToolLogo tool={id} size={19} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const ETIQUETTE_CONSEIL = <Etiquette Icon={Cpu} index="01 · Conseil & développement" titre="Nous construisons vos outils IA" lien={['Le conseil', '/conseil-intelligence-artificielle']} />
const ETIQUETTE_FORMATION = (
  <Etiquette Icon={GraduationCap} index="02 · Formation" titre="Nous formons ceux qui s'en servent" lien={['Les formations', '/formation-intelligence-artificielle']}>
    <TousLesLLM />
  </Etiquette>
)

export default function EquipeAugmentee() {
  const isDesktop = useIsDesktop()
  const equipe = isDesktop ? EQUIPE : EQUIPE.slice(0, 3)
  const delay = i => ({ animationDelay: `${(i * STEP - CYCLE).toFixed(2)}s` })

  return (
    <div className="aug" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(13,20,39,0.2) 0%, rgba(13,20,39,0.85) 100%)' }}>
      <style>{CSS}</style>

      <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', margin: 0 }}>
        Illustration : une équipe (commerciale, ressources humaines, juriste, chef de projet, direction financière), chaque personne épaulée par un agent IA construit par Masteria et formée à s'en servir.
      </p>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isDesktop ? '34px clamp(18px, 4vw, 32px) 36px' : '34px 18px 32px' }}>
      {/* Titre du bandeau : « augmentées » souligné par une barre de progression qui se remplit */}
      <div style={{ display: 'flex', alignItems: isDesktop ? 'flex-end' : 'flex-start', justifyContent: 'space-between', gap: isDesktop ? 32 : 10, flexDirection: isDesktop ? 'row' : 'column', marginBottom: isDesktop ? 28 : 24 }}>
        <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 900, color: '#F8FAFC', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 }}>
          Des équipes{' '}
          <span style={{ position: 'relative', display: 'inline-block', color: '#93C5FD' }}>
            augmentées
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: -6, height: 3, borderRadius: 99, background: 'rgba(147,197,253,0.2)', overflow: 'hidden' }}>
              <span className="aug-underline" style={{ display: 'block', height: '100%', width: '100%', borderRadius: 99, background: 'linear-gradient(90deg, #3B82F6, #93C5FD)' }} />
            </span>
          </span>{' '}
          par l'IA
        </h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#94A3B8', maxWidth: 460 }}>
          Vos collaborateurs gardent la décision. Les agents prennent en charge le travail répétitif.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? '250px minmax(0, 1fr)' : '1fr', gap: isDesktop ? 44 : 26 }}>
        {/* Les deux expertises : à gauche sur desktop (alignées sur les deux rangées),
            au-dessus et en dessous de l'animation sur mobile */}
        {isDesktop ? (
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, paddingLeft: 18 }}>
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 6, bottom: 6, width: 1, background: 'rgba(147,197,253,0.35)' }}>
              <span className="aug-vdot" style={{ position: 'absolute', left: -2.5, width: 6, height: 6, borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px #93C5FD', opacity: 0 }} />
            </span>
            {ETIQUETTE_CONSEIL}
            {ETIQUETTE_FORMATION}
          </div>
        ) : ETIQUETTE_CONSEIL}

        {/* Animation : agents en haut, équipe en bas */}
        <div aria-hidden="true" style={{ position: 'relative', display: 'grid', gridTemplateColumns: `repeat(${equipe.length}, minmax(0, 1fr))`, gap: isDesktop ? 16 : 10 }}>
          {/* Bus IA qui relie les agents */}
          <span style={{ position: 'absolute', top: 17, left: `${50 / equipe.length}%`, right: `${50 / equipe.length}%`, height: 1, background: 'rgba(147,197,253,0.35)', zIndex: 0 }}>
            <span className="aug-bus" style={{ position: 'absolute', inset: '-1px 0', backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)', backgroundSize: '22% 100%', backgroundRepeat: 'no-repeat' }} />
          </span>

          {equipe.map((p, i) => (
            <div key={p.role} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
              <span className="aug-agent" style={{ ...delay(i), position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 6, maxWidth: '100%', height: 34, padding: isDesktop ? '0 12px' : '0 10px', borderRadius: 99, border: '1px solid rgba(96,165,250,0.35)', background: 'rgba(37,99,235,0.12)', color: '#DBEAFE', fontSize: isDesktop ? 12.5 : 11.5, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
                <p.Icon size={14} strokeWidth={2} style={{ color: '#93C5FD', flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{isDesktop ? p.agent : p.court}</span>
              </span>

              <span style={{ position: 'relative', width: 1, height: isDesktop ? 46 : 36 }}>
                <span className="aug-beam" style={{ ...delay(i), position: 'absolute', inset: 0, background: '#93C5FD', opacity: 0.22 }} />
                <span className="aug-dot" style={{ ...delay(i), position: 'absolute', left: -3, width: 7, height: 7, marginTop: -3.5, borderRadius: '50%', background: '#fff', boxShadow: '0 0 12px 2px rgba(147,197,253,0.9)', opacity: 0 }} />
              </span>

              <div className="aug-card" style={{ ...delay(i), width: '100%', boxSizing: 'border-box', borderRadius: 16, border: '1px solid rgba(96,165,250,0.45)', background: 'rgba(37,99,235,0.10)', padding: isDesktop ? '14px 14px 13px' : '12px 10px 11px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, minWidth: 0 }}>
                  <span className="aug-ring" style={{ ...delay(i), position: 'relative', flexShrink: 0, width: 40, height: 40, borderRadius: '50%', border: '2px solid #60A5FA', boxShadow: '0 0 0 4px rgba(37,99,235,0.28), 0 0 22px rgba(96,165,250,0.55)' }}>
                    <Silhouette tone={p.tone} />
                    <span className="aug-badge" style={{ ...delay(i), position: 'absolute', right: -4, bottom: -4, width: 17, height: 17, borderRadius: '50%', background: '#2563EB', border: '2px solid #0D1427', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(1)' }}>
                      <Bot size={10} strokeWidth={2.4} style={{ color: '#fff' }} />
                    </span>
                  </span>
                  {isDesktop && (
                    <span style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 13.5, fontWeight: 700, color: '#F1F5F9', lineHeight: 1.25, minWidth: 0 }}>
                      <p.RoleIcon size={14} strokeWidth={2} style={{ color: '#CBD5E1', flexShrink: 0, marginTop: 1 }} />
                      {p.role}
                    </span>
                  )}
                </div>
                {!isDesktop && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5, fontSize: 12.5, fontWeight: 700, color: '#F1F5F9', lineHeight: 1.25, marginBottom: 6 }}>
                    <p.RoleIcon size={13} strokeWidth={2} style={{ color: '#CBD5E1', flexShrink: 0, marginTop: 1 }} />
                    {p.role}
                  </div>
                )}
                <div style={{ position: 'relative', height: isDesktop ? 18 : 32, marginBottom: 8 }}>
                  <span className="aug-task" style={{ ...delay(i), position: 'absolute', inset: 0, fontSize: isDesktop ? 12 : 11.5, lineHeight: 1.35, color: '#94A3B8', whiteSpace: isDesktop ? 'nowrap' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', opacity: 0 }}>{p.tache}</span>
                  <span className="aug-status" style={{ ...delay(i), position: 'absolute', inset: 0, display: 'flex', alignItems: isDesktop ? 'center' : 'flex-start', gap: 5, fontSize: isDesktop ? 12 : 11.5, lineHeight: 1.35, fontWeight: 700, color: '#93C5FD', whiteSpace: isDesktop ? 'nowrap' : 'normal', overflow: 'hidden' }}>
                    <Check size={13} strokeWidth={2.8} style={{ flexShrink: 0 }} /> <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.fait}</span>
                  </span>
                </div>
                <div style={{ height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                  <span className="aug-bar" style={{ ...delay(i), display: 'block', height: '100%', width: '100%', borderRadius: 99, background: 'linear-gradient(90deg, #3B82F6, #93C5FD)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {!isDesktop && ETIQUETTE_FORMATION}
      </div>
      </div>
    </div>
  )
}
