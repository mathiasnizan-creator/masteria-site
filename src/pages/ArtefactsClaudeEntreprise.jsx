import { useEffect, useState } from 'react'
import {
  Brain, Wrench, Settings, Sparkles, Database, Puzzle, Share2,
  Lightbulb, FileText, Code as CodeIcon, Image as ImageIcon, Layers,
  Globe, Eye, Download, RefreshCw, ExternalLink, Plug, Compass,
  Edit3, ArrowRight, ArrowDown, ChevronRight,
  Lock, Users as UsersIcon, Building2, Crown, ShieldCheck, Clock,
  AlertTriangle, CheckCircle2, XCircle, Info, Zap, Tag,
  PenLine, FlaskConical, Trash2, Search, Briefcase, Monitor,
  GitBranch, Wand2, Calendar, MessageSquare, Server, Hash,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

const C = {
  ink: '#1C1C1C',
  inkSoft: '#2A2A2A',
  text: '#374151',
  textSoft: '#4A4A4A',
  textMuted: '#6B7280',
  textDim: '#8A95A8',
  bg: '#FAFAFA',
  bgSoft: '#F5F5F5',
  bgMid: '#F0F0F0',
  border: '#E5E7EB',
  borderMid: '#D1D5DB',
  blue: '#2563EB',
  blueDark: '#1E40AF',
  blueLight: '#EFF4FF',
  blueBorder: '#C7D7F9',
  success: '#16A34A',
  successBg: '#F0FDF4',
  successBorder: '#A7F3D0',
  warning: '#D97706',
  warningBg: '#FFFBEB',
  warningBorder: '#FCD34D',
  warningText: '#78350F',
  successText: '#064E3B',
}

const F = {
  head: 'Nunito, sans-serif',
  body: 'DM Sans, sans-serif',
  mono: '"Fira Code", "Cascadia Code", Consolas, monospace',
}

const SECTIONS = [
  { id: 'p1', num: '1', label: 'Comprendre',     labelLong: 'Comprendre les artefacts',         Icon: Brain,     accent: '#EFF4FF', tint: C.blue },
  { id: 'p2', num: '2', label: 'Activer',        labelLong: 'Activer & paramétrer',             Icon: Settings,  accent: '#FEF3C7', tint: '#92400E' },
  { id: 'p3', num: '3', label: 'Travailler',     labelLong: 'Travailler avec un artefact',      Icon: Wrench,    accent: '#D1FAE5', tint: C.success },
  { id: 'p4', num: '4', label: 'Artefacts IA',   labelLong: 'Artefacts alimentés par l’IA',     Icon: Sparkles,  accent: '#EDE9FE', tint: '#6D28D9' },
  { id: 'p5', num: '5', label: 'Stockage',       labelLong: 'Stockage persistant',              Icon: Database,  accent: '#E0F7FA', tint: '#0EA5B8' },
  { id: 'p6', num: '6', label: 'MCP',            labelLong: 'Intégration MCP',                  Icon: Plug,      accent: '#FFE4E6', tint: '#BE123C' },
  { id: 'p7', num: '7', label: 'Partage',        labelLong: 'Partage & publication',            Icon: Share2,    accent: '#F1F5F9', tint: '#475569' },
  { id: 'p8', num: '8', label: 'Découvrir',      labelLong: 'Découvrir & personnaliser',        Icon: Compass,   accent: '#EFF4FF', tint: C.blue },
  { id: 'p9', num: '★', label: 'Cas pratique',   labelLong: 'Cas pratique : base produits',     Icon: FlaskConical, accent: '#FFEDD5', tint: '#9A3412' },
]

function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: F.head, fontSize: 'clamp(22px, 2.6vw, 28px)',
      fontWeight: 800, color: C.ink, letterSpacing: '-0.02em',
      margin: '0 0 18px',
    }}>{children}</h2>
  )
}

function H3({ children, style }) {
  return (
    <h3 style={{
      fontFamily: F.head, fontSize: 'clamp(16px, 1.8vw, 18px)',
      fontWeight: 700, color: C.ink, letterSpacing: '-0.01em',
      margin: '24px 0 12px', ...style,
    }}>{children}</h3>
  )
}

function P({ children, style }) {
  return (
    <p style={{
      fontSize: 14.5, color: C.text, lineHeight: 1.7,
      margin: '0 0 14px', ...style,
    }}>{children}</p>
  )
}

function Code({ children }) {
  return (
    <code style={{
      fontFamily: F.mono, fontSize: 12.5,
      background: C.bgSoft, color: C.ink,
      padding: '1.5px 6px', borderRadius: 4,
      border: `1px solid ${C.border}`,
    }}>{children}</code>
  )
}

function Callout({ kind = 'info', Icon, children }) {
  const palette = {
    info:    { bg: C.blueLight,    border: C.blueBorder,    text: C.text, accent: C.blue,    Icon: Icon || Info },
    success: { bg: C.successBg,    border: C.successBorder, text: C.successText, accent: C.success, Icon: Icon || CheckCircle2 },
    warning: { bg: C.warningBg,    border: C.warningBorder, text: C.warningText, accent: C.warning, Icon: Icon || AlertTriangle },
  }[kind]
  return (
    <div style={{
      background: palette.bg, border: `1px solid ${palette.border}`,
      borderRadius: 10, padding: '16px 18px',
      display: 'flex', alignItems: 'flex-start', gap: 12,
      margin: '18px 0',
    }}>
      <palette.Icon size={20} color={palette.accent} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ fontSize: 14, color: palette.text, lineHeight: 1.6 }}>{children}</div>
    </div>
  )
}

function SectionShell({ section, children }) {
  const { id, num, labelLong, Icon, accent, tint } = section
  return (
    <section id={id} style={{
      background: '#fff', borderRadius: 16, padding: 'clamp(24px, 4vw, 40px)',
      marginBottom: 28, boxShadow: '0 1px 3px rgba(0,0,0,.04)',
      border: `1px solid ${C.border}`, scrollMarginTop: 140,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, background: accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={22} color={tint} />
        </div>
        <div>
          <div style={{
            fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: tint, marginBottom: 2,
          }}>Partie {num}</div>
          <h2 style={{
            fontFamily: F.head, fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800,
            color: C.ink, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2,
          }}>{labelLong}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

function Card({ Icon, title, children, footer }) {
  return (
    <div style={{
      background: '#fff', border: `1px solid ${C.border}`, borderRadius: 12,
      padding: 18, display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      {Icon && (
        <div style={{
          width: 36, height: 36, borderRadius: 9, background: C.blueLight,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><Icon size={18} color={C.blue} /></div>
      )}
      <strong style={{ fontFamily: F.head, fontSize: 15, fontWeight: 700, color: C.ink }}>{title}</strong>
      <span style={{ fontSize: 13.5, color: C.textSoft, lineHeight: 1.55, flex: 1 }}>{children}</span>
      {footer && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>{footer}</div>
      )}
    </div>
  )
}

function TagPill({ children, kind = 'blue' }) {
  const c = kind === 'blue'
    ? { bg: C.blueLight, fg: C.blue, br: C.blueBorder }
    : { bg: C.bgSoft, fg: C.textMuted, br: C.border }
  return (
    <span style={{
      fontSize: 11, fontWeight: 700, letterSpacing: '0.03em',
      background: c.bg, color: c.fg, border: `1px solid ${c.br}`,
      padding: '2px 8px', borderRadius: 12,
    }}>{children}</span>
  )
}

function Step({ n, title, children }) {
  return (
    <li style={{
      display: 'flex', alignItems: 'flex-start', gap: 14,
      background: C.bg, borderRadius: 8, padding: '14px 16px',
      border: `1px solid ${C.border}`, listStyle: 'none',
    }}>
      <div style={{
        width: 28, height: 28, background: C.ink, color: '#fff',
        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 800, flexShrink: 0, marginTop: 1, fontFamily: F.head,
      }}>{n}</div>
      <div style={{ flex: 1 }}>
        <strong style={{ display: 'block', fontWeight: 700, color: C.ink, fontSize: 14.5, marginBottom: 3 }}>
          {title}
        </strong>
        {children && <span style={{ fontSize: 13.5, color: C.textSoft, lineHeight: 1.55 }}>{children}</span>}
      </div>
    </li>
  )
}

function StepList({ children, style }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: '16px 0', display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      {children}
    </ol>
  )
}

function Th({ children }) {
  return (
    <th style={{
      background: C.ink, color: 'rgba(255,255,255,.88)',
      fontFamily: F.head, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase',
      padding: '12px 18px', textAlign: 'left',
    }}>{children}</th>
  )
}

function Td({ children, style }) {
  return (
    <td style={{ padding: '12px 18px', color: C.text, verticalAlign: 'middle', fontSize: 14, ...style }}>
      {children}
    </td>
  )
}

function YesIcon() { return <CheckCircle2 size={18} color={C.success} style={{ verticalAlign: 'middle' }} /> }
function NoIcon()  { return <XCircle      size={18} color="#DC2626"   style={{ verticalAlign: 'middle' }} /> }

function MethodBox({ tone = 'blue', badge, badgeIcon: BadgeIcon, title, children }) {
  const isBlue = tone === 'blue'
  return (
    <div style={{
      background: isBlue ? C.blueLight : C.bg,
      border: `1px solid ${isBlue ? C.blueBorder : C.border}`,
      borderRadius: 12, padding: 24, margin: '20px 0',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{
          background: isBlue ? C.blue : C.ink, color: '#fff',
          fontFamily: F.head, fontSize: 12, fontWeight: 800, letterSpacing: '0.03em',
          padding: '5px 14px', borderRadius: 20,
        }}>{badge}</span>
        <strong style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: F.head, color: C.ink, fontSize: 16 }}>
          {BadgeIcon && <BadgeIcon size={18} color={isBlue ? C.blue : C.ink} />}
          {title}
        </strong>
      </div>
      {children}
    </div>
  )
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-25% 0px -60% 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ids.join('|')])
  return active
}

// ──────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ──────────────────────────────────────────────────────────────────────
export default function ArtefactsClaudeEntreprise() {
  const active = useActiveSection([...SECTIONS.map(s => s.id), 'recap'])

  return (
    <>
      <SEOHead
        title="Les artefacts Claude pour entreprise : guide pratique"
        description="Guide pratique : créer, partager et déployer des artefacts Claude dans votre organisation. Du document Markdown à l'app React alimentée par l'IA."
        slug="artefacts-claude-entreprise"
        noindex
      />

      {/* ────── HERO ────── */}
      <section style={{
        background: '#1C1C1C', color: '#fff',
        padding: 'clamp(56px, 9vw, 84px) 24px clamp(64px, 10vw, 92px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(109,40,217,.32) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)',
            color: 'rgba(255,255,255,.92)', fontSize: 13, fontWeight: 600,
            padding: '6px 14px', borderRadius: 20, marginBottom: 24,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#C4B5FD',
              animation: 'pulse 2s infinite',
            }} />
            Guide Claude Enterprise · 2026
          </div>
          <h1 style={{
            fontFamily: F.head, fontSize: 'clamp(30px, 5vw, 50px)',
            fontWeight: 900, lineHeight: 1.12, marginBottom: 20, letterSpacing: '-0.025em', maxWidth: 820,
          }}>
            Les <span style={{ color: '#C4B5FD' }}>artefacts Claude</span><br />pour entreprise
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(255,255,255,.74)',
            lineHeight: 1.6, maxWidth: 640, marginBottom: 36,
          }}>
            Transformer des idées en applications, outils et contenus partageables dans Claude. Du document Markdown à l'app React avec stockage persistant et intégrations MCP.
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'rgba(255,255,255,.7)' }}>
              <Clock size={16} /> 9 parties · Lecture ~22 min
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'rgba(255,255,255,.7)' }}>
              <UsersIcon size={16} /> Plans Free, Pro, Max, Team & Enterprise
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'rgba(255,255,255,.7)' }}>
              <ShieldCheck size={16} /> Documentation officielle Anthropic
            </span>
          </div>
        </div>
        <style>{`@keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: .4 } }`}</style>
      </section>

      {/* ────── PROGRESS NAV (sticky) ────── */}
      <div style={{
        background: '#fff', borderBottom: `1px solid ${C.border}`,
        position: 'sticky', top: 0, zIndex: 50,
        overflowX: 'auto',
      }}>
        <div style={{
          maxWidth: 1140, margin: '0 auto', padding: '0 24px',
          display: 'flex', gap: 0,
        }}>
          {SECTIONS.map(s => {
            const isActive = active === s.id
            return (
              <a key={s.id} href={`#${s.id}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 14px', textDecoration: 'none',
                color: isActive ? C.blue : C.textSoft,
                fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
                borderBottom: `2px solid ${isActive ? C.blue : 'transparent'}`,
              }}>
                <span style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: isActive ? C.blueLight : C.bgMid,
                  color: isActive ? C.blue : C.textMuted,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 800, flexShrink: 0,
                }}>{s.num}</span>
                {s.label}
              </a>
            )
          })}
        </div>
      </div>

      {/* ────── LAYOUT ────── */}
      <div style={{ background: C.bg, padding: 'clamp(32px, 5vw, 56px) 0' }}>
        <div className="ar-layout" style={{
          maxWidth: 1140, margin: '0 auto', padding: '0 24px',
          display: 'grid', gap: 32,
        }}>
          {/* SIDEBAR */}
          <aside className="ar-sidebar" style={{
            display: 'flex', flexDirection: 'column', gap: 4,
            position: 'sticky', top: 64, alignSelf: 'start',
          }}>
            <div style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: C.textMuted, padding: '0 8px 10px', borderBottom: `1px solid ${C.border}`, marginBottom: 6,
            }}>Sommaire</div>
            {SECTIONS.map(s => {
              const isActive = active === s.id
              return (
                <a key={s.id} href={`#${s.id}`} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px', textDecoration: 'none',
                  color: isActive ? C.blue : C.textSoft,
                  fontSize: 13.5, borderRadius: 6,
                  borderLeft: `2px solid ${isActive ? C.blue : 'transparent'}`,
                  background: isActive ? C.blueLight : 'transparent',
                  fontWeight: isActive ? 600 : 400,
                }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: isActive ? C.blue : C.bgMid,
                    color: isActive ? '#fff' : C.textMuted,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10.5, fontWeight: 800, flexShrink: 0,
                  }}>{s.num}</span>
                  {s.labelLong}
                </a>
              )
            })}
            <a href="#recap" style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px',
              textDecoration: 'none', color: active === 'recap' ? C.blue : C.textSoft,
              fontSize: 13.5, borderRadius: 6,
              borderLeft: `2px solid ${active === 'recap' ? C.blue : 'transparent'}`,
              background: active === 'recap' ? C.blueLight : 'transparent',
            }}>
              <span style={{
                width: 20, height: 20, borderRadius: '50%', background: C.bgMid,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: C.textMuted, flexShrink: 0,
              }}><ArrowDown size={11} /></span>
              Récapitulatif
            </a>
          </aside>

          {/* CONTENT */}
          <main style={{ minWidth: 0 }}>

            {/* ════════════ PARTIE 1 — COMPRENDRE ════════════ */}
            <SectionShell section={SECTIONS[0]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Ce qu'est un artefact, quand Claude en crée un, et ce qu'on peut y mettre.
              </p>

              <H3 style={{ marginTop: 0 }}>Ce que fait un artefact</H3>
              <P>
                Un artefact est un contenu autonome que Claude affiche dans une fenêtre dédiée, à droite du chat. C'est un espace de travail séparé : le texte de la conversation reste léger, et le livrable (document, code, app, visuel) vit dans sa propre fenêtre, prêt à être modifié, exporté ou partagé.
              </P>
              <P>
                Concrètement, dès que Claude produit quelque chose de plus long que 15 lignes, de complexe ou de réutilisable, il bascule en artefact. Vous pouvez itérer dessus sans encombrer la conversation, naviguer entre les versions et le partager d'un clic.
              </P>

              <Callout>
                <strong>Exemple concret :</strong> vous demandez à Claude un tableau de suivi en HTML. Il génère le code dans un artefact, vous le voyez s'afficher en direct dans une fenêtre, vous demandez d'ajouter une colonne, la nouvelle version remplace l'ancienne. Vous récupérez le HTML final en un clic.
              </Callout>

              <H3>Quand Claude crée un artefact</H3>
              <P>Claude bascule en artefact quand le contenu coche au moins un de ces critères :</P>
              <StepList>
                <Step n={1} title="Contenu significatif et autonome">
                  Généralement plus de 15 lignes. Trop long pour rester confortablement dans le fil de discussion.
                </Step>
                <Step n={2} title="À itérer ou à réutiliser hors du chat">
                  Document que vous allez réviser, code que vous allez intégrer ailleurs, gabarit que vous allez recopier.
                </Step>
                <Step n={3} title="Complexe et indépendant du contexte">
                  Le livrable se suffit à lui-même : pas besoin de la conversation pour le comprendre.
                </Step>
                <Step n={4} title="À conserver pour plus tard">
                  Quelque chose que vous voudrez retrouver, ré-ouvrir, dériver.
                </Step>
              </StepList>

              <H3>Ce qu'un artefact peut contenir</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={FileText} title="Documents">Markdown ou texte brut. Notes, comptes-rendus, articles, mémos.</Card>
                <Card Icon={CodeIcon} title="Extraits de code">Tout langage. Du script Python au composant React.</Card>
                <Card Icon={Globe} title="Sites HTML mono-page">Une page complète, prête à intégrer sur un site existant.</Card>
                <Card Icon={ImageIcon} title="Images SVG">Logos, icônes, illustrations vectorielles éditables.</Card>
                <Card Icon={GitBranch} title="Diagrammes & flowcharts">Schémas Mermaid, arbres de décision, organigrammes.</Card>
                <Card Icon={Layers} title="Composants React interactifs">Apps avec état, formulaires, calculateurs, mini-outils métier.</Card>
              </div>

              <Callout kind="success">
                <strong>Disponibilité :</strong> les artefacts sont actifs sur <strong>tous les plans Claude</strong> (gratuit, Pro, Max, Team, Enterprise). Les fonctionnalités avancées (stockage persistant, MCP, partage org) sont réservées aux plans payants.
              </Callout>
            </SectionShell>

            {/* ════════════ PARTIE 2 — ACTIVER ════════════ */}
            <SectionShell section={SECTIONS[1]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Comment activer les artefacts côté utilisateur, et ce que l'admin Team ou Enterprise peut piloter au niveau de l'organisation.
              </p>

              <H3 style={{ marginTop: 0 }}>Côté utilisateur (chaque membre)</H3>
              <StepList>
                <Step n={1} title="Ouvrir les paramètres">
                  Cliquer sur vos initiales ou votre nom dans le coin inférieur gauche.
                </Step>
                <Step n={2} title="Aller dans Capacités">
                  <Code>Paramètres › Capacités</Code>. La capacité <em>Artefacts</em> y est listée avec les autres (compétences, exécution de code, etc.).
                </Step>
                <Step n={3} title="Activer la bascule Artefacts">
                  Une fois activée, l'espace artefacts apparaît dans la barre latérale gauche. C'est le hub central de tous vos artefacts.
                </Step>
              </StepList>

              <H3>Accès à vos artefacts via la barre latérale</H3>
              <P>
                Depuis l'espace dédié, vous pouvez voir toutes vos créations au même endroit, parcourir les artefacts d'inspiration créés par Anthropic, en créer de nouveaux à partir de zéro, et organiser votre collection.
              </P>
              <P>
                Sur les plans <strong>Team et Enterprise</strong>, l'espace inclut aussi les artefacts orientés métier partagés au sein de l'organisation.
              </P>

              <H3>Côté admin organisation (Team / Enterprise)</H3>
              <Callout kind="info">
                <strong>Pour les admins :</strong> certains paramètres d'artefacts se pilotent au niveau de l'organisation. C'est notamment le cas de l'accès MCP (activer ou désactiver la possibilité pour les artefacts d'appeler des serveurs MCP) et des règles autour des artefacts alimentés par l'IA et du stockage. Ces réglages se trouvent dans la console d'administration Claude, à côté des autres capacités org.
              </Callout>

              <Callout kind="warning">
                <strong>Limite admin :</strong> l'admin peut activer ou désactiver <strong>l'accès MCP global</strong>, mais ne peut pas filtrer serveur par serveur. Si MCP est ouvert au niveau org, chaque utilisateur reste libre de connecter les serveurs MCP de son choix sur ses propres artefacts.
              </Callout>
            </SectionShell>

            {/* ════════════ PARTIE 3 — TRAVAILLER ════════════ */}
            <SectionShell section={SECTIONS[2]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Vue d'ensemble de l'interface, méthode pour modifier, naviguer entre versions, ouvrir plusieurs artefacts et corriger une erreur.
              </p>

              <H3 style={{ marginTop: 0 }}>L'interface en un coup d'œil</H3>
              <P>
                Quand Claude crée un artefact, il s'affiche dans une fenêtre à droite du chat principal. Vous voyez en direct ce qu'il produit, sans avoir à scroller dans la conversation.
              </P>

              <H3>Modifier &amp; itérer</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={Edit3} title="Demander une mise à jour">Vous décrivez le changement à Claude (en chat), la mise à jour s'applique directement dans l'artefact.</Card>
                <Card Icon={RefreshCw} title="Versions multiples">Chaque mise à jour crée une nouvelle version. Vous pouvez basculer entre les versions via le sélecteur en haut de l'artefact.</Card>
                <Card Icon={GitBranch} title="Bifurquer la conversation">Modifier un message précédent crée une nouvelle branche de chat avec son propre jeu d'artefacts. Pratique pour explorer une autre direction sans perdre le travail en cours.</Card>
              </div>

              <Callout>
                <strong>Bon à savoir :</strong> vos modifications dans la fenêtre artefact ne modifient pas la mémoire de Claude du contenu original. Si vous tapez directement dans l'artefact pour ajuster un détail, Claude continuera à raisonner sur la dernière version qu'il a générée.
              </Callout>

              <H3>Plusieurs artefacts dans une même conversation</H3>
              <P>
                Une conversation peut contenir plusieurs artefacts en parallèle. Pour basculer entre eux, utilisez les contrôles de chat (icône curseur en haut à droite). Vous pouvez aussi sélectionner explicitement l'artefact que vous voulez que Claude modifie au prochain message, ce qui évite les confusions quand plusieurs livrables coexistent.
              </P>

              <H3>Afficher, copier, exporter</H3>
              <P>Dans le coin inférieur droit de la fenêtre artefact :</P>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={Eye} title="Voir le code">Bascule entre l'aperçu rendu et le code source. Utile pour vérifier ce que Claude a réellement écrit.</Card>
                <Card Icon={CodeIcon} title="Copier">Copie le contenu (texte, code, Markdown) dans le presse-papiers en un clic.</Card>
                <Card Icon={Download} title="Télécharger">Récupère un fichier (HTML, MD, SVG, PNG selon le type d'artefact) pour l'utiliser hors de Claude.</Card>
              </div>

              <H3>Corriger une erreur</H3>
              <Callout>
                Si un artefact (typiquement un composant React ou un code interactif) renvoie une erreur d'exécution, un bouton <strong>« Essayer de corriger avec Claude »</strong> apparaît près du message d'erreur. Cliquer dessus copie automatiquement le détail de l'erreur dans un nouveau message à Claude, qui diagnostique et propose un correctif. Pratique sans être magique : certaines erreurs demandent quand même une intervention humaine.
              </Callout>
            </SectionShell>

            {/* ════════════ PARTIE 4 — ARTEFACTS IA ════════════ */}
            <SectionShell section={SECTIONS[3]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Embarquer Claude dans un artefact pour le transformer en mini-application interactive accessible à toute votre équipe.
              </p>

              <H3 style={{ marginTop: 0 }}>Le concept</H3>
              <P>
                Un artefact alimenté par l'IA est une application qui appelle Claude en interne. Vous décrivez ce que vous voulez (un quiz adaptatif, un coach de pitch, un générateur de fiches client, un jeu de rôle), Claude écrit le code et déploie l'application sur l'infrastructure d'Anthropic. Vos collègues l'utilisent comme un outil web classique.
              </P>

              <H3>Comment ça marche</H3>
              <StepList>
                <Step n={1} title="Vous décrivez l'application à Claude">
                  « Construis un outil qui prend une description de poste et génère 5 questions d'entretien adaptées au niveau senior. »
                </Step>
                <Step n={2} title="Claude écrit le code">
                  Un artefact React (ou autre) qui inclut les appels à l'API Claude pour les parties intelligentes.
                </Step>
                <Step n={3} title="L'application tourne sur l'infrastructure Anthropic">
                  Pas de serveur à provisionner, pas d'hébergement à gérer. Anthropic exécute l'artefact.
                </Step>
                <Step n={4} title="Vos utilisateurs s'authentifient avec leur compte Claude">
                  Chacun interagit avec sa propre instance. Ses données et son contexte restent à lui.
                </Step>
              </StepList>

              <Callout kind="success">
                <strong>Modèle de coût (très favorable au créateur) :</strong> pas de clé API à gérer, pas de coût pour vous quand quelqu'un utilise votre artefact. L'utilisation compte sur les limites d'abonnement Claude de <strong>l'utilisateur final</strong>, pas du créateur. Que 10 ou 10 000 personnes utilisent votre app, c'est gratuit pour vous.
              </Callout>

              <Callout kind="info">
                <strong>Spécifique Team / Enterprise :</strong> quand vous partagez un artefact alimenté par l'IA au sein de votre organisation, les membres l'utilisent sans coût supplémentaire pour le créateur ni pour l'org (au-delà du forfait Team / Enterprise lui-même).
              </Callout>

              <H3>Exemples d'usages</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={MessageSquare} title="Coach interne">Coaching de pitch, simulation d'entretien client, formation aux objections. Chacun s'entraîne à son rythme.</Card>
                <Card Icon={FlaskConical} title="Générateur métier">Fiches produit, descriptifs SEO, comptes-rendus à partir de notes brutes : un même gabarit, mille variantes.</Card>
                <Card Icon={Brain} title="Apprentissage adaptatif">Quiz qui ajustent leur difficulté, fiches de révision personnalisées, parcours métier interactifs.</Card>
                <Card Icon={Wand2} title="Mini-outils décisionnels">Calculateurs avec recommandation IA, aides au choix, simulateurs avec interprétation des résultats.</Card>
              </div>
            </SectionShell>

            {/* ════════════ PARTIE 5 — STOCKAGE ════════════ */}
            <SectionShell section={SECTIONS[4]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Conserver les données entre les sessions pour bâtir des journaux, des suivis, des classements ou des outils collaboratifs.
              </p>

              <H3 style={{ marginTop: 0 }}>Disponibilité</H3>
              <P>
                Le stockage persistant est réservé aux plans <strong>Pro, Max, Team et Enterprise</strong>, sur Claude web et Claude desktop. Il permet à un artefact de mémoriser des données d'une utilisation à l'autre, ce que ne fait pas un artefact classique.
              </P>

              <H3>Deux modes de stockage</H3>
              <div style={{ overflowX: 'auto', margin: '16px 0', borderRadius: 12, border: `1px solid ${C.border}`, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
                <table style={tableStyle}>
                  <thead><tr><Th>Mode</Th><Th>Comportement</Th><Th>Cas d'usage</Th></tr></thead>
                  <tbody>
                    <tr>
                      <Td><strong><Lock size={14} style={{ verticalAlign: 'text-bottom', marginRight: 6, color: C.blue }} />Personnel</strong></Td>
                      <Td>Chaque utilisateur a ses propres données, isolées des autres.</Td>
                      <Td>Journal de bord, suivi de progression, notes privées, préférences personnelles.</Td>
                    </tr>
                    <tr>
                      <Td><strong><UsersIcon size={14} style={{ verticalAlign: 'text-bottom', marginRight: 6, color: '#BE123C' }} />Partagé</strong></Td>
                      <Td>Tous les utilisateurs voient et écrivent dans les mêmes données.</Td>
                      <Td>Classement de jeu, base d'idées collective, tracker d'équipe, ressources mutualisées.</Td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Callout kind="warning">
                <strong>Confidentialité, point d'attention :</strong> avant d'entrer des informations sensibles dans un artefact, vérifiez s'il utilise du stockage <em>partagé</em>. Une boîte de dialogue de confirmation s'affiche la première fois que vous interagissez avec un artefact à stockage partagé, mais c'est facile à valider sans réfléchir.
              </Callout>

              <H3>Spécifications techniques</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={Hash} title="20 Mo par artefact">Largement suffisant pour des journaux, listes, classements. Pas pour de la donnée massive.</Card>
                <Card Icon={FileText} title="Texte uniquement">Pas d'images, pas de fichiers, pas de binaires. JSON, chaînes, nombres.</Card>
                <Card Icon={Lock} title="Personnel et partagé isolés">Les deux espaces ne communiquent pas. Pas de fuite accidentelle d'un mode à l'autre.</Card>
                <Card Icon={AlertTriangle} title="Disponible uniquement quand publié">Pendant le développement, les opérations de stockage échouent. Il faut publier l'artefact pour activer le stockage.</Card>
              </div>

              <Callout kind="warning">
                <strong>Important :</strong> dépublier un artefact supprime <strong>définitivement et irrévocablement</strong> toutes les données de stockage associées (personnelles et partagées). Pas de bouton retour. Si vous tenez à ces données, exportez-les avant de dépublier.
              </Callout>
            </SectionShell>

            {/* ════════════ PARTIE 6 — MCP ════════════ */}
            <SectionShell section={SECTIONS[5]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Connecter un artefact à des services externes (Asana, Calendar, Slack, MCP custom) pour bâtir des applications qui lisent et écrivent dans vos outils métier.
              </p>

              <H3 style={{ marginTop: 0 }}>Disponibilité</H3>
              <P>
                L'intégration MCP pour les artefacts est disponible sur les plans <strong>Pro, Max, Team et Enterprise</strong>, sur Claude web et Claude desktop. MCP (Model Context Protocol) est le standard ouvert qui permet à Claude de discuter avec des outils externes.
              </P>

              <H3>Ce qu'un artefact peut faire via MCP</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={Calendar} title="Google Calendar">Créer un événement, lire l'agenda du jour, proposer un créneau libre.</Card>
                <Card Icon={MessageSquare} title="Slack">Publier un message dans un canal, résumer un thread, transférer un livrable à une équipe.</Card>
                <Card Icon={Hash} title="Asana, Linear, Jira">Créer une tâche, mettre à jour un statut, lier un livrable à un ticket existant.</Card>
                <Card Icon={Server} title="Serveurs MCP custom">Tout ce que vous avez en interne : base produit, ERP, CRM, intranet, dès qu'un serveur MCP existe pour cet outil.</Card>
              </div>

              <H3>Le workflow d'authentification</H3>
              <StepList>
                <Step n={1} title="Première utilisation">
                  Quand un artefact a besoin d'appeler un outil MCP, une fenêtre de demande d'autorisation s'affiche. Vous validez, l'accès est ouvert.
                </Step>
                <Step n={2} title="Utilisations suivantes">
                  Vos préférences persistent. Pas besoin de re-autoriser à chaque fois sur le même artefact.
                </Step>
                <Step n={3} title="Authentification par utilisateur">
                  <strong>Chaque utilisateur authentifie les serveurs MCP indépendamment</strong>, même sur un artefact partagé ou publié. Vos credentials ne se partagent jamais avec ceux d'un collègue.
                </Step>
              </StepList>

              <Callout kind="success">
                <strong>Bonne nouvelle gouvernance :</strong> aucune fuite de droits possible. Si un artefact partagé en interne lit votre calendrier, c'est <em>votre</em> calendrier, pas celui du créateur. Personne n'utilise les credentials d'un autre par accident.
              </Callout>

              <Callout kind="info">
                <strong>Contrôle admin Enterprise :</strong> les admins peuvent activer ou désactiver l'accès MCP des artefacts <em>au niveau de l'organisation</em>. En revanche, ils ne peuvent pas restreindre à une liste de serveurs MCP autorisés. Si MCP est ouvert, chaque utilisateur connecte ce qu'il veut sur ses propres artefacts.
              </Callout>
            </SectionShell>

            {/* ════════════ PARTIE 7 — PARTAGE ════════════ */}
            <SectionShell section={SECTIONS[6]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Deux régimes selon votre plan : publication publique (gratuit, Pro, Max) ou partage interne à l'organisation (Team, Enterprise).
              </p>

              <H3 style={{ marginTop: 0 }}>Publication vs partage</H3>
              <div style={{ overflowX: 'auto', margin: '16px 0', borderRadius: 12, border: `1px solid ${C.border}`, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
                <table style={tableStyle}>
                  <thead><tr><Th>Régime</Th><Th>Plans concernés</Th><Th>Qui peut accéder</Th></tr></thead>
                  <tbody>
                    <tr><Td><strong>Publication publique</strong></Td><Td>Gratuit, Pro, Max</Td><Td>Toute personne avec le lien. Pas d'inscription requise pour consulter ni interagir.</Td></tr>
                    <tr><Td><strong>Partage interne</strong></Td><Td>Team, Enterprise</Td><Td>Uniquement les membres connectés à votre organisation. <strong>Pas de publication publique possible</strong> depuis un compte Team / Enterprise.</Td></tr>
                  </tbody>
                </table>
              </div>

              <H3>Publier un artefact (Free, Pro, Max)</H3>
              <StepList>
                <Step n={1} title="Ouvrir l'artefact concerné">
                  Vérifier que vous êtes sur la <strong>bonne version</strong> de l'artefact (le sélecteur de version est en haut à droite).
                </Step>
                <Step n={2} title="Cliquer sur Publier">
                  Un lien public est généré. Vous le copiez, vous le partagez : tout le monde peut voir et interagir avec l'artefact.
                </Step>
                <Step n={3} title="Récupérer le code d'intégration (optionnel)">
                  Bouton <Code>Obtenir le code d'intégration</Code> : un snippet HTML à coller sur un site web. Vous devez préciser les domaines autorisés (URL séparées par des virgules) pour qu'il s'affiche uniquement sur les sites que vous contrôlez.
                </Step>
              </StepList>

              <Callout kind="warning">
                <strong>Dépublication, point critique :</strong> une fois dépublié, vous <strong>ne pouvez pas republier ce même artefact</strong>. Si vous voulez à nouveau le rendre public, il faudra le recréer. Et toutes les données de stockage associées (personnelles + partagées) sont supprimées définitivement à la dépublication.
              </Callout>

              <H3>Partager un artefact dans votre organisation (Team, Enterprise)</H3>
              <StepList>
                <Step n={1} title="Ouvrir l'artefact concerné">
                  Vérifier la bonne version.
                </Step>
                <Step n={2} title="Cliquer sur Partager">
                  Puis <Code>Partager et copier le lien</Code> dans la fenêtre modale. Le lien fonctionne uniquement pour les utilisateurs authentifiés sur votre compte Team ou Enterprise.
                </Step>
                <Step n={3} title="Cas particulier des artefacts issus d'un projet">
                  Si l'artefact a été créé à partir d'un projet, les destinataires doivent <strong>aussi avoir accès au projet</strong> pour ouvrir l'artefact. Sinon, accès refusé.
                </Step>
              </StepList>

              <Callout kind="warning">
                <strong>Pièces jointes incluses, attention :</strong> partager un artefact donne <strong>aussi accès à toutes les pièces jointes et fichiers de la conversation d'origine</strong>. Si la conversation contient un document confidentiel (devis, CV, brief client), réfléchissez avant de partager. La règle simple : créer l'artefact dans une conversation propre, sans pièce jointe sensible.
              </Callout>

              <H3>Arrêter le partage</H3>
              <P>
                Cliquer sur <Code>Partager</Code> en haut à droite de l'artefact, puis sur <Code>Arrêter le partage</Code> dans la fenêtre modale. L'artefact redevient privé. Contrairement à la dépublication publique, vous pourrez le re-partager plus tard.
              </P>
            </SectionShell>

            {/* ════════════ PARTIE 8 — DÉCOUVRIR ════════════ */}
            <SectionShell section={SECTIONS[7]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                L'onglet Inspiration pour s'inspirer et personnaliser, et le réflexe Team / Enterprise de parcourir les artefacts de l'organisation.
              </p>

              <H3 style={{ marginTop: 0 }}>L'onglet Inspiration</H3>
              <P>
                Depuis l'espace artefacts dans la barre latérale, l'onglet <Code>Inspiration</Code> (ou la bannière « Inspirez-vous » sur mobile) ouvre une collection d'artefacts curatée par Anthropic. C'est utile pour deux raisons : apprendre par l'exemple ce qu'un artefact peut faire, et partir d'une base existante au lieu de tout coder.
              </P>

              <H3>Catégories</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={Brain} title="Apprendre quelque chose">Quiz, fiches mémo, simulations pédagogiques, parcours d'apprentissage interactifs.</Card>
                <Card Icon={Lightbulb} title="Astuces de vie">Trackers de routine, mini-outils du quotidien, calculateurs, listes intelligentes.</Card>
                <Card Icon={Wand2} title="Soyez créatif">Générateurs visuels, mini-jeux, expériences narratives, outils de création.</Card>
              </div>

              <Callout kind="info">
                <strong>Spécifique Team / Enterprise :</strong> en plus des artefacts d'inspiration publics, vous voyez aussi les artefacts <em>orientés métier</em> partagés au sein de votre organisation. C'est là que se construit une bibliothèque interne d'outils internes Claude.
              </Callout>

              <H3>Personnaliser un artefact existant</H3>
              <StepList>
                <Step n={1} title="Ouvrir l'artefact qui vous intéresse">
                  Que ce soit un artefact d'inspiration Anthropic ou un artefact partagé par un collègue.
                </Step>
                <Step n={2} title="Cliquer sur Personnaliser">
                  Une nouvelle conversation Claude s'ouvre, avec le contenu de l'artefact déjà chargé comme point de départ.
                </Step>
                <Step n={3} title="Modifier, étendre, adapter">
                  Vous travaillez sur <strong>votre propre copie</strong>. L'original n'est pas affecté, le créateur ne voit pas vos changements.
                </Step>
              </StepList>

              <Callout>
                <strong>Cas de figure :</strong> si vous n'aviez jamais utilisé d'artefacts auparavant, cliquer sur <Code>Personnaliser</Code> active automatiquement la capacité sur votre compte. Sans compte Claude, vous êtes invité à vous inscrire avant de personnaliser.
              </Callout>
            </SectionShell>

            {/* ════════════ PARTIE 9 — CAS PRATIQUE ════════════ */}
            <SectionShell section={SECTIONS[8]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Question récurrente : « peut-on donner à Claude un catalogue produits et créer un artefact qui interroge cette base ? » Oui, selon 4 approches. Détail pas à pas de la plus pragmatique pour démarrer.
              </p>

              <H3 style={{ marginTop: 0 }}>Les 4 approches possibles</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={CodeIcon} title="1. BDD embarquée dans le code" footer={<><TagPill kind="gray">Catalogue statique</TagPill><TagPill kind="gray">&lt; 1 000 produits</TagPill></>}>
                  Le catalogue est inséré directement dans le code de l'artefact (JSON littéral). Claude lit, filtre, affiche. Pas de stockage externe. Mise à jour = recréer l'artefact.
                </Card>
                <Card Icon={Database} title="2. Stockage persistant artefact" footer={<><TagPill>Recommandé pour démarrer</TagPill><TagPill kind="gray">&lt; 20 Mo</TagPill></>}>
                  Le catalogue est importé une fois dans le storage de l'artefact (personnel ou partagé org). L'artefact est publié, l'équipe l'utilise. Mise à jour mensuelle par le propriétaire.
                </Card>
                <Card Icon={Plug} title="3. Intégration MCP" footer={<><TagPill kind="gray">BDD live</TagPill><TagPill kind="gray">Pro / Max / Team / Ent.</TagPill></>}>
                  L'artefact appelle un serveur MCP qui parle à votre vraie base (Navision, ERP, PIM). Données toujours fraîches, droits gérés côté outil source. Requiert un serveur MCP existant ou à développer.
                </Card>
                <Card Icon={Briefcase} title="4. Compétence Claude avec fichier joint" footer={<><TagPill kind="gray">Voie pragmatique</TagPill><TagPill kind="gray">Tous plans</TagPill></>}>
                  Le catalogue est attaché au ZIP d'une compétence. Claude charge le fichier à chaque activation. L'artefact généré dans la conversation s'en sert. Le catalogue suit la compétence.
                </Card>
              </div>

              <Callout>
                <strong>Comment choisir ?</strong> Si la base change quotidiennement et que les droits dépendent du client, partez sur la 3 (MCP). Sinon, la 2 est la voie pragmatique pour servir 10 à 100 utilisateurs avec un catalogue stable et une mise à jour mensuelle. La 4 reste utile pour les usages individuels en conversation. La 1 ne sert que pour des très petits catalogues figés.
              </Callout>

              <Divider />

              <H3 style={{ marginTop: 0 }}>Détail de l'option 2 — stockage persistant, étape par étape</H3>
              <P>
                Scénario type : vous avez un catalogue produits de quelques milliers de lignes (références, désignations, marques, prix, marges, catégories) que vous voulez rendre interrogeable par toute l'équipe via un artefact partagé dans l'organisation.
              </P>

              <StepList>
                <Step n={1} title="Préparer les données en JSON ou CSV simple">
                  Une ligne par produit. Colonnes utiles seulement : référence, désignation, marque, prix, marge, catégorie, stock indicatif. Retirez les colonnes lourdes (descriptions longues, URL d'images). Format JSON tableau d'objets recommandé : plus facile à manipuler dans l'artefact. <strong>Cible :</strong> moins de 18 Mo pour garder une marge sous la limite 20 Mo.
                </Step>
                <Step n={2} title="Décrire l'artefact à Claude (brief unifié, voir ci-dessous)">
                  Le brief précise : import du catalogue via bouton, stockage en mode <strong>partagé</strong> pour que l'org voit le même catalogue, recherche multi-critères, filtres, fiche produit, export des résultats. Claude écrit le code React.
                </Step>
                <Step n={3} title="Tester en mode brouillon">
                  Avant publication, le stockage persistant n'est pas actif (les opérations échouent silencieusement ou lèvent une erreur). Pendant le développement, on simule avec <Code>localStorage</Code> pour valider la logique. Demander explicitement à Claude un mode <em>dev</em> qui bascule sur <Code>localStorage</Code>.
                </Step>
                <Step n={4} title="Publier l'artefact dans l'organisation">
                  Bouton <Code>Partager</Code> (Team / Enterprise) ou <Code>Publier</Code> (Free / Pro / Max). Sans publication, pas de stockage persistant. Une fois publié, le stockage <strong>partagé</strong> devient disponible.
                </Step>
                <Step n={5} title="Importer le catalogue la première fois">
                  Ouvrez l'artefact publié, cliquez sur <Code>Importer le catalogue</Code>, sélectionnez votre fichier JSON. Le parsing se fait dans le navigateur, l'écriture dans le stockage prend quelques secondes. Confirmation visible : nombre de produits chargés. Toute l'org y a maintenant accès.
                </Step>
                <Step n={6} title="Maintenir le catalogue dans le temps">
                  Stratégie simple : un bouton <Code>Remplacer le catalogue</Code> qui efface le storage et réimporte le nouveau fichier. À faire une fois par mois (ou à chaque mise à jour majeure du PIM). Stratégie avancée : delta updates (le bouton accepte un fichier de modifications, ajoute / met à jour / supprime). Demander à Claude la version delta si besoin.
                </Step>
              </StepList>

              <MethodBox tone="blue" badge="Brief à coller dans Claude" badgeIcon={Sparkles} title="Artefact recherche catalogue avec stockage persistant">
                <div style={{
                  background: '#fff', borderRadius: 8, padding: 16, border: `1px solid ${C.blueBorder}`,
                }}>
                  <p style={{
                    fontSize: 11, color: C.textMuted, marginBottom: 8,
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>Template à adapter à votre catalogue</p>
                  <p style={{ fontFamily: F.mono, fontSize: 13, color: C.ink, margin: 0, lineHeight: 1.7 }}>
                    « Crée un artefact React nommé <em>Recherche catalogue produits</em>.<br /><br />
                    <strong>Données d'entrée :</strong> JSON tableau d'objets, format <Code>{'[{ "ref", "designation", "marque", "prix", "marge", "categorie", "stock" }]'}</Code>. Volume cible : 5 000 à 20 000 produits, moins de 18 Mo.<br /><br />
                    <strong>Fonctionnalités requises :</strong><br />
                    1. Bouton <em>Importer le catalogue</em> qui accepte un fichier JSON (validation du schéma, message d'erreur clair si mauvais format).<br />
                    2. Stockage des produits en mode <strong>partagé</strong> (toute l'org accède au même catalogue).<br />
                    3. Vérification automatique de la taille avant écriture (refus si &gt; 18 Mo, avec message explicite).<br />
                    4. Liste paginée (50 produits par page), tri sur chaque colonne.<br />
                    5. Barre de recherche multi-critères : référence, désignation, marque (recherche partielle, insensible à la casse).<br />
                    6. Filtres latéraux : catégorie (multi-select), marque (multi-select), plage de prix (slider), marge minimum (input).<br />
                    7. Clic sur un produit : ouverture d'une fiche détaillée avec toutes les colonnes.<br />
                    8. Bouton <em>Exporter la sélection</em> : télécharge un CSV des résultats filtrés.<br />
                    9. Bouton <em>Remplacer le catalogue</em> : confirmation obligatoire, vide le storage et réimporte.<br />
                    10. Affichage en haut : nombre total de produits chargés, date du dernier import.<br /><br />
                    <strong>Règles techniques :</strong> mode <em>dev</em> en localStorage avant publication, mode <em>prod</em> en stockage persistant partagé après publication. Détection automatique selon que <Code>window.claude.storage</Code> est dispo. Aucune donnée externe, aucun appel API, tout reste dans l'artefact.<br /><br />
                    <strong>Style :</strong> interface sobre, fond clair, accents bleu marine, lisible sur grand écran. »
                  </p>
                </div>
              </MethodBox>

              <H3>Limites et points de vigilance</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, margin: '16px 0' }}>
                <Card Icon={AlertTriangle} title="Plafond 20 Mo">Pour un catalogue avec descriptions longues, stripper les colonnes lourdes. Un produit pèse rarement plus de 200 octets de texte utile, soit environ 100 000 produits maximum dans 20 Mo. Largement assez pour la majorité des cas EET.</Card>
                <Card Icon={Lock} title="Stockage actif après publication">Pendant les tests, le storage ne fonctionne pas. Toujours prévoir un mode <em>dev</em> sur <Code>localStorage</Code> pour valider la logique avant publication.</Card>
                <Card Icon={Trash2} title="Dépublication = effacement définitif">Si vous dépubliez l'artefact, tout le stockage est supprimé sans retour. Toujours exporter le catalogue avant de dépublier. Prévoir un bouton <em>Export complet JSON</em> dans l'artefact.</Card>
                <Card Icon={Search} title="Recherche côté navigateur">La recherche tourne en JavaScript dans le navigateur. Latence sensible au-delà de 50 000 lignes ou avec des recherches très complexes. Indexer les colonnes filtrées si besoin (Claude sait le faire si on le demande).</Card>
                <Card Icon={UsersIcon} title="Pas de droits fins par utilisateur">Tout le monde dans l'org voit le même catalogue. Pas de filtrage par client, par division, par rôle. Pour ça, il faut l'option 3 (MCP) avec gestion des droits côté serveur.</Card>
                <Card Icon={RefreshCw} title="Mise à jour manuelle">La mise à jour passe par un humain qui clique sur <em>Remplacer le catalogue</em>. Pas de synchronisation auto avec Navision. À cadencer (hebdo / mensuel) selon la fraîcheur attendue.</Card>
              </div>

              <Callout kind="warning">
                <strong>Bonnes pratiques de gouvernance :</strong> nommez l'artefact avec un numéro de version visible (ex : <Code>Recherche catalogue v1.2 — mai 2026</Code>). Désignez un propriétaire interne (en clair dans le titre). Sauvegardez le JSON source dans le SharePoint <Code>Compétences EET</Code> à chaque mise à jour : si l'artefact tombe, la donnée reste accessible.
              </Callout>

              <Divider />

              <H3>Quand cette approche ne suffit plus</H3>
              <P>
                Trois signaux qu'il faut passer à l'option 3 (MCP) :
              </P>
              <StepList>
                <Step n={1} title="Le catalogue change tous les jours">
                  Si une mise à jour mensuelle laisse des écarts trop importants (prix, stock, nouvelles références), la donnée doit être lue en direct depuis la source.
                </Step>
                <Step n={2} title="Les droits sont fins et dépendent du client ou du commercial">
                  Si chaque utilisateur doit voir un prix différent (prix client, niveau de remise, conditions négociées), seule la base source connaît la règle. Le pousser dans un artefact partagé n'a pas de sens.
                </Step>
                <Step n={3} title="Le catalogue dépasse 100 000 produits ou plusieurs Mo par fiche">
                  Au-delà de cette volumétrie, le stockage 20 Mo sature. La recherche côté navigateur devient lente. C'est le moment de passer sur une base externe interrogée via MCP.
                </Step>
              </StepList>

              <Callout kind="success">
                <strong>Le chemin recommandé :</strong> démarrer en option 2 (rapide, autonome, prouve la valeur), puis basculer en option 3 quand le besoin métier justifie le développement d'un serveur MCP. Les deux options coexistent : un artefact MCP peut tout à fait garder du stockage local pour les préférences utilisateur, l'historique des recherches, les favoris.
              </Callout>
            </SectionShell>

            {/* ════════════ RECAP ════════════ */}
            <div id="recap" style={{
              background: 'linear-gradient(135deg, #1C1C1C 0%, #2A2A2A 100%)',
              color: '#fff', borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)',
              marginBottom: 24, scrollMarginTop: 140,
            }}>
              <h2 style={{
                fontFamily: F.head, fontSize: 'clamp(22px, 2.6vw, 26px)', fontWeight: 800,
                marginBottom: 24, letterSpacing: '-0.02em',
              }}>Récapitulatif : les réflexes à garder</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                <RecapCol title="Créer un artefact" items={[
                  'Activer la capacité Artefacts dans Paramètres › Capacités',
                  'Demander à Claude un livrable de plus de 15 lignes, ou complexe, ou réutilisable',
                  'Itérer dans la fenêtre dédiée à droite du chat',
                  'Naviguer entre versions avec le sélecteur',
                  'Exporter via Copier ou Télécharger',
                ]}/>
                <RecapCol title="Le partager" items={[
                  <>Plans <em>Team / Enterprise</em> : bouton <code style={recapCodeStyle}>Partager</code> (interne org uniquement)</>,
                  <>Plans <em>Free / Pro / Max</em> : bouton <code style={recapCodeStyle}>Publier</code> (public, lien + embed)</>,
                  'Vérifier la version active avant de partager',
                  'Attention aux pièces jointes de la conversation : elles suivent l\'artefact',
                  'La dépublication publique est irréversible',
                ]}/>
                <RecapCol title="L'enrichir (plans payants)" items={[
                  'Stockage persistant pour les artefacts publiés (20 Mo, texte)',
                  'MCP pour connecter Calendar, Slack, Asana, ou un serveur custom',
                  'Authentification MCP par utilisateur (jamais partagée)',
                  'Artefacts alimentés par l\'IA : coût supporté par l\'utilisateur, pas par le créateur',
                  'Bibliothèque org pour mutualiser les artefacts métier',
                ]}/>
              </div>
            </div>

          </main>
        </div>
      </div>

      <style>{`
        .ar-layout { grid-template-columns: 240px minmax(0, 1fr); }
        @media (max-width: 960px) {
          .ar-layout { grid-template-columns: minmax(0, 1fr) !important; }
          .ar-sidebar { position: static !important; flex-direction: row !important; flex-wrap: wrap !important; }
          .ar-sidebar > a { flex: 0 0 auto; }
        }
      `}</style>
    </>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Sub-helpers used above
// ──────────────────────────────────────────────────────────────────────

const tableStyle = {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  fontSize: 14,
}

const recapCodeStyle = {
  color: 'rgba(255,255,255,.85)',
  background: 'rgba(255,255,255,.12)',
  padding: '1px 6px',
  borderRadius: 4,
  fontFamily: F.mono,
  fontSize: 12.5,
}

function Divider() {
  return <div style={{ height: 1, background: C.border, margin: '28px 0' }} />
}

function RecapCol({ title, items }) {
  return (
    <div>
      <h4 style={{
        fontFamily: F.head, fontSize: 13, fontWeight: 800, letterSpacing: '0.06em',
        textTransform: 'uppercase', color: '#C4B5FD', marginBottom: 14,
        paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,.12)',
      }}>{title}</h4>
      <ol style={{ paddingLeft: 18, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <li key={i} style={{ color: 'rgba(255,255,255,.82)', fontSize: 13.5, lineHeight: 1.6 }}>{it}</li>
        ))}
      </ol>
    </div>
  )
}
