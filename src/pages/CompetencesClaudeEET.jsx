import { useEffect, useState } from 'react'
import {
  Brain, Wrench, Package, MessageCircle, Settings, Building2, Share2, Ruler,
  Briefcase, Factory, ArrowDown,
  FileText, Paperclip, Code as CodeIcon, Puzzle, Crown, User, Landmark,
  Target, Search, FlaskConical, Scissors, Trash2, Lock,
  PenLine, ClipboardList, BarChart3, Palette, FileCheck, Handshake,
  Tag, RefreshCw,
  Lightbulb, AlertTriangle, CheckCircle2, XCircle, Zap, Info, Sparkles,
  Clock, Users as UsersIcon, ShieldCheck, Monitor,
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
  { id: 'p1',  num: '1', label: 'Comprendre',         labelLong: 'Comprendre les compétences',         Icon: Brain,        accent: '#EFF4FF', tint: C.blue },
  { id: 'p2',  num: '2', label: 'Créer',              labelLong: 'Créer une compétence',               Icon: Wrench,       accent: '#E0F7FA', tint: '#0EA5B8' },
  { id: 'p3',  num: '3', label: 'Packager',           labelLong: 'Packager & uploader',                Icon: Package,      accent: '#D1FAE5', tint: C.success },
  { id: 'p3b', num: '+', label: 'Fichiers via chat',  labelLong: 'Fichiers via conversation',          Icon: MessageCircle, accent: '#E0F7FA', tint: '#0EA5B8' },
  { id: 'p4',  num: '4', label: 'Gérer',              labelLong: 'Gérer ses compétences',              Icon: Settings,     accent: '#FEF3C7', tint: '#92400E' },
  { id: 'p5',  num: '5', label: 'Administration',     labelLong: 'Administration Enterprise',          Icon: Building2,    accent: '#EDE9FE', tint: '#6D28D9' },
  { id: 'p6',  num: '6', label: 'Partage',            labelLong: 'Partage de compétences',             Icon: Share2,       accent: '#FFE4E6', tint: '#BE123C' },
  { id: 'p7',  num: '7', label: 'Limites',            labelLong: 'Limites & bonnes pratiques',         Icon: Ruler,        accent: '#F1F5F9', tint: '#475569' },
  { id: 'p8',  num: '8', label: "Cas d'usage",        labelLong: "Cas d'usage Enterprise",             Icon: Briefcase,    accent: '#E8EDF5', tint: C.ink },
  { id: 'p9',  num: '★', label: 'Process EET',        labelLong: 'Process de création — EET',          Icon: Factory,      accent: '#EFF4FF', tint: C.blue },
]

function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: F.head, fontSize: 'clamp(22px, 2.6vw, 26px)', fontWeight: 800,
      color: C.ink, letterSpacing: '-0.02em', marginBottom: 6, lineHeight: 1.2,
    }}>{children}</h2>
  )
}

function H3({ children, style }) {
  return (
    <h3 style={{
      fontFamily: F.head, fontSize: 17, fontWeight: 800, color: C.ink,
      margin: '28px 0 12px', letterSpacing: '-0.01em', ...style,
    }}>{children}</h3>
  )
}

function P({ children, style }) {
  return (
    <p style={{ fontSize: 15.5, lineHeight: 1.7, color: C.text, marginBottom: 14, ...style }}>
      {children}
    </p>
  )
}

function Code({ children }) {
  return (
    <code style={{
      background: C.blueLight, color: C.blue,
      padding: '2px 7px', borderRadius: 4,
      fontFamily: F.mono, fontSize: 13,
    }}>{children}</code>
  )
}

function Pre({ children, style }) {
  return (
    <pre style={{
      background: '#0F1C35', color: '#E2E8F3',
      borderRadius: 12, padding: '20px 24px', margin: '16px 0',
      overflowX: 'auto', fontFamily: F.mono, fontSize: 13, lineHeight: 1.7,
      border: '1px solid rgba(255,255,255,.06)',
      whiteSpace: 'pre',
      ...style,
    }}>{children}</pre>
  )
}

function Callout({ kind = 'info', Icon, children }) {
  const styles = {
    info:    { bg: C.blueLight,   border: C.blueBorder,      left: C.blue,    text: C.ink },
    warning: { bg: C.warningBg,   border: C.warningBorder,   left: C.warning, text: C.warningText },
    success: { bg: C.successBg,   border: C.successBorder,   left: C.success, text: C.successText },
  }[kind]
  const DefaultIcon = kind === 'warning' ? AlertTriangle : kind === 'success' ? CheckCircle2 : Lightbulb
  const I = Icon || DefaultIcon
  return (
    <div style={{
      background: styles.bg, border: `1px solid ${styles.border}`,
      borderLeft: `4px solid ${styles.left}`, borderRadius: 6,
      padding: '14px 18px', margin: '16px 0',
      fontSize: 14.5, color: styles.text, lineHeight: 1.6,
      display: 'flex', gap: 12, alignItems: 'flex-start',
    }}>
      <I size={18} style={{ flexShrink: 0, marginTop: 2, color: styles.left }} />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )
}

function SectionShell({ section, children }) {
  const { id, num, labelLong, Icon, accent, tint } = section
  return (
    <section id={id} style={{
      background: '#fff', borderRadius: 20, border: `1px solid ${C.border}`,
      padding: 'clamp(28px, 4vw, 44px)', marginBottom: 24, scrollMarginTop: 140,
    }}>
      <header style={{
        display: 'flex', alignItems: 'flex-start', gap: 18,
        marginBottom: 28, paddingBottom: 24, borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12, background: accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Icon size={24} color={tint} strokeWidth={2} />
        </div>
        <div>
          <div style={{
            fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: C.textMuted, marginBottom: 4,
          }}>{num === '★' ? 'Bonus' : `Partie ${num}`}</div>
          <H2>{labelLong}</H2>
        </div>
      </header>
      {children}
    </section>
  )
}

function Card({ Icon, title, children, accentLeft, footer }) {
  return (
    <div style={{
      background: C.bg, border: `1px solid ${C.border}`,
      borderLeft: accentLeft ? `3px solid ${accentLeft}` : undefined,
      borderRadius: 12, padding: 20,
    }}>
      {Icon && (
        <div style={{ marginBottom: 10 }}>
          <Icon size={24} color={C.blue} strokeWidth={2} />
        </div>
      )}
      <div style={{ fontFamily: F.head, fontSize: 15, fontWeight: 800, color: C.ink, marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontSize: 13.5, color: C.textSoft, lineHeight: 1.6 }}>{children}</div>
      {footer && <div style={{ marginTop: 10 }}>{footer}</div>}
    </div>
  )
}

function TagPill({ children, kind = 'blue' }) {
  const styles = {
    blue:  { bg: C.blueLight, color: C.blue,    border: C.blueBorder },
    green: { bg: '#D1FAE5',   color: '#065F46', border: '#A7F3D0' },
    amber: { bg: '#FEF3C7',   color: '#92400E', border: '#FCD34D' },
    navy:  { bg: '#E8EDF5',   color: C.ink,     border: '#C5CFE3' },
  }[kind]
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      background: styles.bg, color: styles.color,
      fontSize: 12, fontWeight: 600, padding: '3px 10px',
      borderRadius: 20, margin: 2, border: `1px solid ${styles.border}`,
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

function Th({ children, dark = true }) {
  return (
    <th style={{
      background: dark ? C.ink : '#fff', color: dark ? 'rgba(255,255,255,.88)' : C.ink,
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

function PromptBox({ children, label = 'Exemple de prompt' }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 8, padding: 16, border: `1px solid ${C.blueBorder}`,
    }}>
      <p style={{
        fontSize: 11, color: C.textMuted, marginBottom: 8,
        fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>{label}</p>
      <p style={{ fontFamily: F.mono, fontSize: 13.5, color: C.ink, margin: 0, lineHeight: 1.65 }}>
        {children}
      </p>
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
  }, [ids])
  return active
}

export default function CompetencesClaudeEET() {
  const active = useActiveSection([...SECTIONS.map(s => s.id), 'recap'])

  return (
    <>
      <SEOHead
        title="Les compétences Claude pour entreprise — Guide pratique"
        description="Guide pratique : créer, déployer et gérer des compétences Claude à l'échelle de votre organisation."
        slug="competences-claude-eet"
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
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(37,99,235,.28) 0%, transparent 70%)',
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
              width: 7, height: 7, borderRadius: '50%', background: '#5EEAD4',
              animation: 'pulse 2s infinite',
            }} />
            Formation Claude Enterprise · 2026
          </div>
          <h1 style={{
            fontFamily: F.head, fontSize: 'clamp(30px, 5vw, 50px)',
            fontWeight: 900, lineHeight: 1.12, marginBottom: 20, letterSpacing: '-0.025em', maxWidth: 820,
          }}>
            Les <span style={{ color: '#5EEAD4' }}>compétences Claude</span><br />pour entreprise
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(255,255,255,.74)',
            lineHeight: 1.6, maxWidth: 640, marginBottom: 36,
          }}>
            Créez, déployez et gérez des compétences personnalisées à l'échelle de votre organisation.
            De la structure d'un fichier SKILL.md au provisionnement pour 500 collaborateurs.
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'rgba(255,255,255,.7)' }}>
              <Clock size={16} /> 8 parties · Lecture ~20 min
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'rgba(255,255,255,.7)' }}>
              <UsersIcon size={16} /> Plans Team & Enterprise
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
        <div className="cc-layout" style={{
          maxWidth: 1140, margin: '0 auto', padding: '0 24px',
          display: 'grid', gap: 32,
        }}>
          {/* SIDEBAR */}
          <aside className="cc-sidebar" style={{
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

            {/* ────── PARTIE 1 ────── */}
            <SectionShell section={SECTIONS[0]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Ce que fait une compétence, comment elle se déclenche, ce qui la distingue des autres outils.
              </p>

              <H3 style={{ marginTop: 0 }}>Ce que fait une compétence</H3>
              <P>
                Une compétence Claude est un dossier d'instructions que vous préparez une fois et que Claude charge automatiquement quand le contexte l'exige. Au lieu de recopier les mêmes consignes à chaque conversation, vous les encodez dans un fichier <Code>SKILL.md</Code> et Claude les applique sans que vous ayez à les redemander.
              </P>
              <P>
                Claude charge les compétences disponibles au début de chaque conversation. Il lit leur nom et leur description (quelques dizaines de tokens par compétence) et décide laquelle activer selon votre demande. Le corps de la compétence ne se charge que si la tâche y correspond : c'est la <strong>divulgation progressive</strong>. Résultat : même avec une dizaine de compétences actives, la consommation de contexte reste raisonnable.
              </P>

              <Callout>
                <strong>Exemple concret :</strong> vous demandez à Claude de créer une présentation. Il détecte la compétence PowerPoint, charge ses instructions et génère le fichier selon votre charte graphique — sans que vous ayez précisé une seule règle de mise en forme.
              </Callout>

              <H3>Ce qu'une compétence peut contenir</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={FileText} title="Instructions">Règles de style, processus à suivre, contraintes de format, vocabulaire interdit.</Card>
                <Card Icon={Paperclip} title="Fichiers de référence">Templates, exemples de livrables, données métier, guides de marque.</Card>
                <Card Icon={CodeIcon} title="Scripts exécutables">Python, JavaScript — pour les compétences avancées qui produisent des fichiers.</Card>
              </div>

              <H3>Différence avec les autres outils de personnalisation</H3>
              <TableWrap>
                <table style={tableStyle}>
                  <thead><tr><Th>Outil</Th><Th>Comportement</Th><Th>Usage idéal</Th></tr></thead>
                  <tbody>
                    <tr><Td><strong>Instructions personnalisées</strong></Td><Td>Toujours actives, dans chaque conversation</Td><Td>Ton général, préférences permanentes</Td></tr>
                    <tr><Td><strong>Projets</strong></Td><Td>Connaissances statiques chargées en continu</Td><Td>Base documentaire d'un projet</Td></tr>
                    <tr><Td><strong>Compétences</strong></Td><Td>Activées à la demande selon le contexte</Td><Td>Procédures répétables, workflows métier</Td></tr>
                  </tbody>
                </table>
              </TableWrap>
            </SectionShell>

            {/* ────── PARTIE 2 ────── */}
            <SectionShell section={SECTIONS[1]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Deux méthodes : avec l'aide de Claude, ou manuellement.
              </p>

              <P>
                Une compétence est un dossier qui contient au minimum un fichier texte appelé <Code>SKILL.md</Code>. Ce fichier dit à Claude quoi faire et quand le faire. Vous avez deux façons de le créer.
              </P>

              <MethodBox tone="blue" badge="Méthode recommandée" badgeIcon={Sparkles} title="Demander à Claude de créer la compétence pour vous">
                <P style={{ color: C.textSoft, marginBottom: 16 }}>
                  C'est la façon la plus rapide. Vous décrivez ce que vous voulez, Claude rédige le <Code>SKILL.md</Code>, crée le ZIP et vous le livre prêt à uploader — tout en une conversation.
                </P>
                <PromptBox>
                  « Crée-moi une compétence Claude pour transformer des notes de réunion brutes en compte-rendu structuré. Le format doit inclure : participants, décisions prises avec le responsable, actions à suivre avec échéance. Longueur max 300 mots. Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </PromptBox>
                <p style={{ fontSize: 13.5, color: C.textSoft, marginTop: 12 }}>
                  Claude rédige le fichier, assemble le dossier correctement et vous donne un fichier <Code>.zip</Code> à télécharger directement.
                </p>
              </MethodBox>

              <MethodBox tone="dark" badge="Méthode manuelle" badgeIcon={PenLine} title="Créer le fichier SKILL.md vous-même">
                <P style={{ color: C.textSoft, marginBottom: 16 }}>
                  Ouvrez un éditeur de texte (Bloc-notes, TextEdit, VS Code…), créez un fichier nommé <Code>SKILL.md</Code> et respectez la structure suivante :
                </P>

                <p style={{ fontWeight: 700, color: C.ink, marginBottom: 8 }}>
                  Le fichier commence toujours par un bloc YAML entre <Code>---</Code> :
                </p>
                <Pre>{`---
name: Compte-rendu de réunion
description: Transformer des notes de réunion en compte-rendu structuré.
  Activer quand l'utilisateur fournit des notes ou demande un compte-rendu.
---`}</Pre>

                <p style={{ fontWeight: 700, color: C.ink, margin: '16px 0 8px' }}>Puis les instructions en texte libre :</p>
                <Pre>{`## Structure attendue

1. Contexte (participants, date, objet)
2. Décisions prises (responsable nommé pour chaque)
3. Actions à suivre (qui, quoi, échéance)
4. Points ouverts

## Règles

- Verbe d'action pour chaque décision : "Valider", "Reporter", "Confier à"
- Résultats uniquement, pas de reformulation des échanges
- 300 mots maximum`}</Pre>
              </MethodBox>

              <H3>Les deux champs indispensables</H3>
              <TableWrap>
                <table style={tableStyle}>
                  <thead><tr><Th>Champ</Th><Th>Rôle</Th><Th>Limite</Th></tr></thead>
                  <tbody>
                    <tr><Td><Code>name</Code></Td><Td>Nom affiché dans la liste des compétences</Td><Td>64 caractères</Td></tr>
                    <tr><Td><Code>description</Code></Td><Td><strong>C'est le déclencheur.</strong> Claude lit cette description pour décider si la compétence s'applique à votre demande. Plus elle est précise sur le contexte exact, mieux Claude l'active au bon moment.</Td><Td>200 caractères</Td></tr>
                  </tbody>
                </table>
              </TableWrap>

              <Callout kind="warning">
                <strong>Si Claude n'active pas votre compétence</strong>, la cause est presque toujours une description trop vague. Remplacez <em>« Aide à rédiger »</em> par quelque chose de précis comme <em>« Activer quand l'utilisateur fournit des notes de réunion ou mentionne un compte-rendu à faire »</em>.
              </Callout>

              <H3>Ajouter des fichiers de référence (optionnel)</H3>
              <P>
                Si votre compétence a besoin de documents supplémentaires — un template Word, un guide de style, des exemples — placez-les dans un sous-dossier et mentionnez-les dans le <Code>SKILL.md</Code>. Claude les chargera uniquement quand c'est utile.
              </P>
              <Pre>{`ma-competence/
├── SKILL.md
├── references/
│   └── guide-style.md     ← règles supplémentaires
└── templates/
    └── modele.docx         ← template à utiliser`}</Pre>

              <P>Dans <Code>SKILL.md</Code>, référencez-les :</P>
              <Pre>{`## Ressources
Consulter references/guide-style.md pour les règles typographiques.
Utiliser templates/modele.docx pour les documents clients.`}</Pre>

              <H3>Ajouter des scripts (compétences avancées)</H3>
              <P>
                Pour les compétences qui doivent produire des fichiers (Excel, PDF, Word), vous pouvez inclure un script Python ou JavaScript que Claude exécutera.
              </P>
              <Pre>{`competence-facturation/
├── SKILL.md
└── scripts/
    └── generer_facture.py`}</Pre>

              <Callout>
                Les scripts ne sont pas obligatoires pour commencer. Commencez par une compétence avec uniquement un <Code>SKILL.md</Code> et des instructions texte — c'est suffisant pour 90 % des usages.
              </Callout>
            </SectionShell>

            {/* ────── PARTIE 3 ────── */}
            <SectionShell section={SECTIONS[2]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Créer le ZIP et l'uploader dans Claude.ai.
              </p>

              <H3 style={{ marginTop: 0 }}>Étape 1 — Créer le ZIP</H3>
              <P>
                Claude.ai attend un fichier ZIP dont le <strong>dossier est à la racine</strong> — pas les fichiers directement. Voici comment faire selon votre système :
              </P>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, margin: '16px 0' }}>
                <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <Monitor size={22} color={C.ink} />
                    <strong style={{ fontFamily: F.head, color: C.ink }}>Mac</strong>
                  </div>
                  <StepList style={{ margin: 0 }}>
                    <Step n={1} title="Créez un dossier">Nommez-le exactement comme votre compétence (ex : <Code>compte-rendu</Code>)</Step>
                    <Step n={2} title="Placez le SKILL.md dedans">+ sous-dossiers si besoin (<Code>references/</Code>, <Code>templates/</Code>…)</Step>
                    <Step n={3} title="Clic droit sur le dossier → Compresser">Vous obtenez <Code>compte-rendu.zip</Code></Step>
                  </StepList>
                </div>
                <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <Monitor size={22} color={C.ink} />
                    <strong style={{ fontFamily: F.head, color: C.ink }}>Windows</strong>
                  </div>
                  <StepList style={{ margin: 0 }}>
                    <Step n={1} title="Créez un dossier">Nommez-le exactement comme votre compétence</Step>
                    <Step n={2} title="Placez le SKILL.md dedans">+ sous-dossiers si besoin</Step>
                    <Step n={3} title="Clic droit → Compresser dans un fichier ZIP">Vous obtenez <Code>compte-rendu.zip</Code></Step>
                  </StepList>
                </div>
              </div>

              <Callout kind="warning">
                Le <strong>nom du dossier</strong> doit correspondre exactement au champ <Code>name</Code> dans le <Code>SKILL.md</Code>. C'est la cause d'échec la plus fréquente à l'upload.
              </Callout>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, margin: '16px 0' }}>
                <div>
                  <Callout kind="success">
                    <strong>Structure correcte</strong>
                  </Callout>
                  <Pre style={{ marginTop: -8 }}>{`compte-rendu.zip
└── compte-rendu/
    ├── SKILL.md
    └── references/`}</Pre>
                </div>
                <div>
                  <Callout kind="warning">
                    <strong>Structure incorrecte</strong>
                  </Callout>
                  <Pre style={{ marginTop: -8 }}>{`compte-rendu.zip
├── SKILL.md
└── references/
← fichiers à la racine = erreur`}</Pre>
                </div>
              </div>

              <Callout Icon={Zap}>
                <strong>Alternative :</strong> demandez à Claude de créer le ZIP pour vous. Uploadez votre fichier <Code>SKILL.md</Code> dans la conversation et écrivez : <em>« Crée-moi le ZIP prêt à uploader dans Claude »</em>. Claude assemble la structure correcte et vous livre le fichier téléchargeable.
              </Callout>

              <Divider />

              <H3>Étape 2 — Le fichier .skill, c'est quoi ?</H3>
              <P>
                Quand Claude.ai exporte une compétence, il génère un fichier avec l'extension <Code>.skill</Code>. Ce n'est pas un format spécial — <strong>c'est un ZIP renommé</strong>. Les deux sont interchangeables.
              </P>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={CheckCircle2} title="Uploader un .skill directement" accentLeft={C.success}>
                  Claude.ai accepte les fichiers <Code>.skill</Code> à l'upload. Si vous réuploadez sur le même compte ou sur un autre compte Claude, pas besoin de renommer.
                </Card>
                <Card Icon={RefreshCw} title="Ouvrir ou modifier un .skill" accentLeft={C.blue}>
                  Renommez le fichier : remplacez <Code>.skill</Code> par <Code>.zip</Code>. Vous pouvez alors l'ouvrir, modifier les fichiers à l'intérieur, rezipper et réuploader.
                </Card>
              </div>

              <Divider />

              <H3>Étape 3 — Uploader dans Claude.ai</H3>
              <StepList>
                <Step n={1} title="Aller dans Personnaliser › Compétences">Depuis le menu principal de Claude.ai</Step>
                <Step n={2} title="Cliquer sur + puis « + Créer une compétence »" />
                <Step n={3} title="Sélectionner « Télécharger une compétence »">Choisissez votre fichier <Code>.zip</Code> ou <Code>.skill</Code></Step>
                <Step n={4} title="Activer la compétence">Elle apparaît dans votre liste avec un commutateur on/off</Step>
              </StepList>
            </SectionShell>

            {/* ────── PARTIE 3B ────── */}
            <SectionShell section={SECTIONS[3]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Faire évoluer une compétence avec l'aide de Claude, sans quitter le chat.
              </p>

              <P>
                Quand vous uploadez des fichiers dans une conversation Claude, ils sont disponibles pour cette conversation uniquement — ils ne modifient pas la compétence stockée dans votre compte. C'est deux choses distinctes.
              </P>
              <P>
                Mais vous pouvez utiliser cette conversation pour <strong>fabriquer ou enrichir une compétence</strong>, puis récupérer le ZIP mis à jour.
              </P>

              <Divider />

              <H3>Scénario A — Construire une compétence depuis vos documents</H3>
              <P>
                Vous avez des fichiers qui doivent nourrir la compétence (un catalogue produits, un template Word, des exemples de bons livrables). Uploadez-les dans la conversation et demandez à Claude de construire la compétence autour.
              </P>

              <div style={{
                background: C.blueLight, border: `1px solid ${C.blueBorder}`,
                borderRadius: 12, padding: 20, margin: '16px 0',
              }}>
                <PromptBox label="Exemple de prompt">
                  « Voici notre catalogue marques propres [fichier joint] et trois exemples d'offres commerciales que j'ai rédigées [fichiers joints]. Crée une compétence Claude qui reproduit ma façon de composer une offre, en intégrant ces marques en priorité. Livre-moi le ZIP. »
                </PromptBox>
              </div>

              <StepList>
                <Step n={1} title="Uploadez vos fichiers dans la conversation">Catalogue, templates, exemples de livrables — tout ce qui doit guider Claude</Step>
                <Step n={2} title="Demandez à Claude de créer la compétence">Précisez le nom, l'objectif, et ce que vous voulez que Claude fasse avec ces fichiers</Step>
                <Step n={3} title="Récupérez le ZIP">Claude génère le <Code>SKILL.md</Code>, intègre les fichiers dans le bon dossier, et livre le tout prêt à uploader</Step>
                <Step n={4} title="Uploadez dans Personnaliser › Compétences">La compétence est active, avec vos fichiers intégrés comme références</Step>
              </StepList>

              <Divider />

              <H3>Scénario B — Enrichir une compétence existante</H3>
              <P>
                Votre compétence existe déjà. Vous voulez lui ajouter un nouveau fichier (un template mis à jour, une nouvelle liste de produits, un exemple supplémentaire).
              </P>

              <StepList>
                <Step n={1} title={<>Uploadez votre fichier <Code>.skill</Code> existant dans la conversation</>} />
                <Step n={2} title="Uploadez le ou les nouveaux fichiers à intégrer" />
                <Step n={3} title="Demandez à Claude d'assembler"><em>« Ajoute ce fichier à la compétence et mets à jour le SKILL.md pour y faire référence. Livre le nouveau ZIP. »</em></Step>
                <Step n={4} title="Supprimez l'ancienne version dans Claude">Personnaliser › Compétences → <Code>...</Code> → Supprimer</Step>
                <Step n={5} title="Uploadez le nouveau ZIP" />
              </StepList>

              <Callout kind="success">
                Cette méthode fonctionne pour tous les types de fichiers : <strong>Excel, Word, PDF, CSV, images, Markdown</strong>. Claude les place dans le bon sous-dossier et met à jour les références dans le <Code>SKILL.md</Code> automatiquement.
              </Callout>

              <Callout kind="warning">
                Les fichiers uploadés dans la <strong>conversation</strong> restent dans cette conversation uniquement. Pour qu'ils fassent partie de la compétence de façon permanente, il faut passer par le ZIP et le réuploader dans vos paramètres.
              </Callout>
            </SectionShell>

            {/* ────── PARTIE 4 ────── */}
            <SectionShell section={SECTIONS[4]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Activer, désactiver, modifier, supprimer.
              </p>

              <H3 style={{ marginTop: 0 }}>Activer / Désactiver</H3>
              <P>
                Dans <strong>Personnaliser › Compétences</strong>, chaque compétence a un commutateur. Une compétence désactivée n'est jamais chargée par Claude, même si votre demande y correspond.
              </P>

              <Divider />

              <H3>Modifier une compétence — attention aux doublons</H3>
              <Callout kind="warning">
                <strong>Il n'y a pas d'édition en ligne.</strong> Si vous uploadez une nouvelle version sans supprimer l'ancienne, vous vous retrouvez avec deux compétences en double dans votre liste. Supprimez toujours l'ancienne d'abord.
              </Callout>

              <P>Procédure complète pour mettre à jour une compétence :</P>
              <StepList>
                <Step n={1} title="Modifier les fichiers en local">Éditez votre <Code>SKILL.md</Code> et les fichiers associés sur votre ordinateur</Step>
                <Step n={2} title="Recréer le ZIP">Dossier → clic droit → Compresser (même procédure qu'à la création)</Step>
                <Step n={3} title="Supprimer l'ancienne version dans Claude">Personnaliser › Compétences → cliquer sur la compétence → désactiver → <Code>...</Code> → Supprimer → Confirmer</Step>
                <Step n={4} title="Uploader le nouveau ZIP">La compétence mise à jour remplace l'ancienne, sans doublon</Step>
              </StepList>

              <Callout>
                Vous pouvez aussi demander à Claude de modifier le contenu du <Code>SKILL.md</Code> directement dans la conversation — uploadez votre fichier <Code>.skill</Code> ou <Code>.zip</Code>, demandez les modifications, récupérez le nouveau ZIP.
              </Callout>

              <Divider />

              <H3>Supprimer une compétence</H3>
              <StepList>
                <Step n={1} title="Aller dans Personnaliser › Compétences" />
                <Step n={2} title="Cliquer sur la compétence" />
                <Step n={3} title="Désactiver le commutateur">En haut à droite du panneau de détail</Step>
                <Step n={4} title="Cliquer sur « ... » → Supprimer → Confirmer" />
              </StepList>
              <p style={{ fontSize: 13.5, color: C.textSoft }}>Pour restaurer une compétence supprimée, réuploadez simplement le ZIP.</p>

              <Divider />

              <H3>Renommer une compétence</H3>
              <P>
                Il n'y a pas de bouton « Renommer » dans l'interface. Le nom s'affiche tel qu'il est déclaré dans le champ <Code>name</Code> du <Code>SKILL.md</Code>. Pour le changer :
              </P>

              <StepList>
                <Step n={1} title={<>Ouvrez le fichier <Code>.skill</Code> ou <Code>.zip</Code></>}>Renommez-le en <Code>.zip</Code> si besoin, puis ouvrez-le pour accéder au <Code>SKILL.md</Code></Step>
                <Step n={2} title={<>Modifiez le champ <Code>name</Code> dans le SKILL.md</>}>Ex : <Code>name: Offres commerciales EET</Code> → <Code>name: Générateur d'offres</Code></Step>
                <Step n={3} title="Renommez aussi le dossier parent">Le nom du dossier doit correspondre exactement au nouveau <Code>name</Code></Step>
                <Step n={4} title="Recréez le ZIP" />
                <Step n={5} title="Supprimez l'ancienne compétence → uploadez la nouvelle" />
              </StepList>

              <Callout Icon={Zap}>
                Vous pouvez aussi demander à Claude : <em>« Renomme cette compétence en [nouveau nom] et livre-moi le ZIP »</em> en lui uploadant le fichier <Code>.skill</Code> — il s'occupe des deux modifications (YAML + dossier) et vous livre le fichier prêt.
              </Callout>
            </SectionShell>

            {/* ────── PARTIE 5 ────── */}
            <SectionShell section={SECTIONS[5]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Prérequis, provisionnement d'organisation, droits propriétaire vs membre.
              </p>

              <H3 style={{ marginTop: 0 }}>Prérequis côté propriétaire</H3>
              <P>Deux capacités doivent être activées dans <strong>Paramètres de l'organisation › Capacités</strong> avant tout déploiement :</P>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={CodeIcon} title="Exécution de code et création de fichiers" accentLeft={C.blue}>
                  Prérequis technique indispensable. Sans lui, les compétences n'apparaissent pas.
                </Card>
                <Card Icon={Puzzle} title="Compétences" accentLeft="#0EA5B8">
                  Activer le module Compétences dans les paramètres d'organisation.
                </Card>
              </div>

              <H3>Provisionner une compétence pour toute l'organisation</H3>
              <StepList>
                <Step n={1} title="Aller dans Paramètres de l'organisation › Compétences" />
                <Step n={2} title="Dans « Compétences de l'organisation », cliquer sur + Ajouter" />
                <Step n={3} title="Uploader le ZIP">La compétence est immédiatement disponible pour tous les membres. Elle apparaît avec un indicateur visuel qui la distingue des compétences personnelles.</Step>
              </StepList>

              <Callout kind="success">
                Les membres peuvent <strong>désactiver</strong> une compétence provisionnée par l'organisation s'ils le souhaitent. Mais ils ne peuvent ni la modifier, ni la supprimer — c'est en lecture seule pour eux.
              </Callout>

              <H3>Droits : qui peut faire quoi</H3>
              <TableWrap>
                <table style={tableStyle}>
                  <thead><tr><Th>Action</Th><Th>Propriétaire</Th><Th>Membre</Th></tr></thead>
                  <tbody>
                    <tr><Td style={firstCellStyle}>Uploader une compétence d'organisation</Td><Td><YesIcon/></Td><Td><NoIcon/></Td></tr>
                    <tr><Td style={firstCellStyle}>Supprimer une compétence d'organisation</Td><Td><YesIcon/></Td><Td><NoIcon/></Td></tr>
                    <tr><Td style={firstCellStyle}>Mettre à jour une compétence d'organisation</Td><Td><YesIcon/></Td><Td><NoIcon/></Td></tr>
                    <tr><Td style={firstCellStyle}>Uploader une compétence personnelle</Td><Td><YesIcon/></Td><Td><YesIcon/></Td></tr>
                    <tr><Td style={firstCellStyle}>Partager une compétence (si activé)</Td><Td><YesIcon/></Td><Td><YesIcon/></Td></tr>
                    <tr><Td style={firstCellStyle}>Modifier une compétence partagée reçue</Td><Td><NoIcon/></Td><Td><NoIcon/></Td></tr>
                  </tbody>
                </table>
              </TableWrap>
            </SectionShell>

            {/* ────── PARTIE 6 ────── */}
            <SectionShell section={SECTIONS[6]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Activer le partage, partager entre collègues, répertoire d'organisation.
              </p>

              <H3 style={{ marginTop: 0 }}>Activer le partage (propriétaire requis)</H3>
              <P>
                Le partage est <strong>désactivé par défaut</strong>. Dans <strong>Paramètres de l'organisation › Compétences</strong>, deux commutateurs indépendants :
              </P>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={User} title="Partage de compétences" footer={<TagPill>Pair à pair</TagPill>}>
                  Un membre peut partager avec un ou plusieurs collègues précis. La compétence apparaît dans leur section « Partagé avec vous ».
                </Card>
                <Card Icon={Landmark} title="Partager avec l'organisation" footer={<TagPill>Répertoire</TagPill>}>
                  Un membre peut publier dans le répertoire de l'organisation. N'importe qui peut l'installer.
                </Card>
              </div>

              <Callout kind="warning">
                <strong>Aucun flux d'approbation</strong> pour le répertoire d'organisation : tout membre peut y publier sans validation. Si cela pose un problème de gouvernance, activez uniquement le partage pair-à-pair.
              </Callout>

              <H3>Partager une compétence (membre)</H3>
              <StepList>
                <Step n={1} title="Aller dans Personnaliser › Compétences" />
                <Step n={2} title="Ouvrir la compétence à partager" />
                <Step n={3} title="Cliquer sur « Partager »" />
                <Step n={4} title="Choisir la cible">Collègues spécifiques (par e-mail) ou toute l'organisation</Step>
              </StepList>

              <Callout Icon={RefreshCw}>
                Les compétences partagées sont en <strong>lecture seule</strong> pour les destinataires. Si vous mettez à jour la compétence source, les destinataires reçoivent automatiquement la nouvelle version.
              </Callout>

              <Divider />

              <H3>« Je ne vois pas de bouton Partager »</H3>
              <P>Le bouton Partager n'apparaît que si un propriétaire de l'organisation l'a activé. Il est désactivé par défaut sur tous les plans.</P>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={Crown} title="Vous êtes propriétaire" accentLeft={C.blue}>
                  Allez dans <strong>Paramètres de l'organisation › Compétences</strong> et activez <em>Partage de compétences</em> (pair-à-pair) et/ou <em>Partager avec l'organisation</em> (répertoire). Le bouton apparaît immédiatement pour tous.
                </Card>
                <Card Icon={User} title="Vous êtes membre" accentLeft={C.textMuted}>
                  Contactez votre administrateur pour qu'il active le partage. Tant que ce n'est pas fait, le bouton n'existe pas dans l'interface.
                </Card>
              </div>

              <Callout Icon={Info}>
                <strong>Plan individuel (Pro, Max) :</strong> le partage entre comptes n'est pas disponible. Envoyez le fichier <Code>.zip</Code> ou <Code>.skill</Code> manuellement — votre collègue l'uploade dans son propre compte.
              </Callout>

              <Divider />

              <H3>Vue d'ensemble des compétences pour un membre</H3>
              <TableWrap>
                <table style={tableStyle}>
                  <thead><tr><Th>Section</Th><Th>Contenu</Th><Th>Peut supprimer ?</Th></tr></thead>
                  <tbody>
                    <tr><Td><strong>Compétences personnelles</strong></Td><Td>Créées ou uploadées par le membre</Td><Td><YesIcon/></Td></tr>
                    <tr><Td><strong>Partagé avec vous</strong></Td><Td>Reçues directement d'un collègue, grisées jusqu'à activation</Td><Td><YesIcon/></Td></tr>
                    <tr><Td><strong>Compétences de l'organisation</strong></Td><Td>Provisionnées par un propriétaire ou publiées dans le répertoire</Td><Td>Désactiver uniquement</Td></tr>
                  </tbody>
                </table>
              </TableWrap>
            </SectionShell>

            {/* ────── PARTIE 7 ────── */}
            <SectionShell section={SECTIONS[7]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Limites techniques, conseils de rédaction et gouvernance.
              </p>

              <H3 style={{ marginTop: 0 }}>Limites techniques</H3>
              <TableWrap>
                <table style={tableStyle}>
                  <thead><tr><Th>Élément</Th><Th>Limite</Th><Th>Note</Th></tr></thead>
                  <tbody>
                    <tr><Td>Champ <Code>name</Code></Td><Td><strong>64 caractères</strong></Td><Td>—</Td></tr>
                    <tr><Td>Champ <Code>description</Code></Td><Td><strong>200 caractères</strong></Td><Td>Le champ le plus important</Td></tr>
                    <tr><Td>Taille du ZIP</Td><Td>Non publiée</Td><Td>Une erreur s'affiche si dépassée</Td></tr>
                    <tr><Td>Longueur du SKILL.md</Td><Td>Aucune limite officielle</Td><Td>Rester sous 500 lignes en pratique</Td></tr>
                    <tr><Td>Skills actifs simultanément</Td><Td>Pas de limite documentée</Td><Td>Efficacité optimale jusqu'à ~8</Td></tr>
                  </tbody>
                </table>
              </TableWrap>

              <H3>Bonnes pratiques</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={Target}        title="Une compétence = un workflow">Plusieurs compétences ciblées se composent mieux qu'une compétence qui tente tout faire.</Card>
                <Card Icon={Search}        title="La description est le déclencheur">Si Claude n'active pas la compétence au bon moment, c'est presque toujours la description trop vague. Précisez les situations exactes.</Card>
                <Card Icon={FlaskConical}  title="Testez avec 3-4 formulations">Après chaque upload, testez différentes façons de formuler la demande pour vérifier le déclenchement.</Card>
                <Card Icon={Scissors}      title="Descriptions courtes">2-3 lignes maximum. Chaque description s'ajoute au contexte permanent.</Card>
                <Card Icon={Trash2}        title="Retirez les compétences inutilisées">Une compétence inactive consomme quand même du contexte via son frontmatter.</Card>
                <Card Icon={Lock}          title="Zéro donnée sensible">Ne codez pas de clés API, mots de passe ou données confidentielles dans les fichiers de la compétence.</Card>
              </div>
            </SectionShell>

            {/* ────── PARTIE 8 ────── */}
            <SectionShell section={SECTIONS[8]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Exemples concrets par métier et fonction.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={PenLine} title="Charte éditoriale" footer={<><TagPill>Communication</TagPill><TagPill>Marketing</TagPill></>}>
                  Encode le ton de marque, les règles typographiques, le vocabulaire interdit. S'active automatiquement sur tout document destiné à l'externe. Tous les membres produisent des textes cohérents sans briefing répété.
                </Card>
                <Card Icon={ClipboardList} title="Compte-rendu de réunion" footer={<><TagPill>Management</TagPill><TagPill>Assistante</TagPill></>}>
                  L'utilisateur colle ses notes brutes. Claude structure selon le format interne (décisions, actions, responsables, échéances), adapte la longueur. Zéro reformatage manuel.
                </Card>
                <Card Icon={BarChart3} title="Génération de rapports" footer={<><TagPill>Finance</TagPill><TagPill>Data</TagPill></>}>
                  Un script Python prend des données en entrée et génère un Excel ou PDF formaté selon le template d'organisation. Le membre fournit les chiffres, Claude produit le fichier.
                </Card>
                <Card Icon={Palette} title="Directives de marque" footer={<><TagPill>Communication</TagPill><TagPill>Design</TagPill></>}>
                  Couleurs, polices, règles d'usage du logo. S'active sur les demandes de présentations et documents clients. Chaque PowerPoint respecte la charte automatiquement.
                </Card>
                <Card Icon={FileCheck} title="Processus d'approbation" footer={<><TagPill>Juridique</TagPill><TagPill>Achats</TagPill></>}>
                  Encode les étapes de validation interne pour un type de document (brief, contrat, proposition). Claude guide l'utilisateur et vérifie que rien n'est omis.
                </Card>
                <Card Icon={Handshake} title="Onboarding RH" footer={<><TagPill>RH</TagPill><TagPill>Management</TagPill></>}>
                  Produit automatiquement les documents d'accueil, programmes de formation et communications internes selon les templates validés par les RH.
                </Card>
              </div>
            </SectionShell>

            {/* ────── PARTIE 9 — PROCESS EET ────── */}
            <SectionShell section={SECTIONS[9]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Plan de déploiement Claude Enterprise — du sprint formation de juin à l'extension aux 58 collaborateurs en décembre 2026.
              </p>

              <Callout>
                EET est passé de 70+ à 58 employés. <strong>L'objectif :</strong> qu'avec 58 personnes assistées par Claude, EET retrouve la performance de 70+. Ce process structure le déploiement en 5 étapes sur 6 mois — uniquement avec les outils natifs Claude.ai (pas d'intégration externe, pour préserver la sécurité et les droits internes).
              </Callout>

              <Divider />

              {/* ───── ÉTAPE 0 ───── */}
              <H3 style={{ marginTop: 0 }}>Étape 0 — Prérequis propriétaire (Mai 2026, avant le sprint)</H3>
              <P>
                Jérémy active le socle technique avant la formation. Sans ces prérequis, plusieurs compétences ne sont pas construisables ou ne se déploient pas.
              </P>
              <StepList>
                <Step n={1} title="Activer « Exécution de code et création de fichiers » + « Compétences »">
                  Paramètres de l'organisation › Capacités. Indispensable pour que les compétences soient visibles dans Personnaliser.
                </Step>
                <Step n={2} title="Activer le partage pair-à-pair uniquement">
                  Paramètres › Compétences. Le répertoire d'organisation reste fermé pendant le pilote — pour contrôler la qualité avant de publier aux 58.
                </Step>
                <Step n={3} title="Créer le compte dédié eet.fr « voir en tant que »">
                  Compte technique interne, partagé entre les référents qui en ont besoin (Kadi en priorité). Permet à Claude d'identifier les références et prix spécifiques au client depuis le site interne.
                </Step>
                <Step n={4} title="Rediriger les emails 2FA vers une boîte EET dédiée">
                  Sinon Claude ne peut pas se reconnecter sur eet.fr quand la session expire. Boîte interne, accessible aux référents concernés.
                </Step>
                <Step n={5} title="Configurer l'export hebdomadaire TARGIT en Excel">
                  Visites web par client, exportées chaque lundi — même logique que le fichier devis. Nourrit la compétence de Samar. Export manuel ou planifié dans TARGIT, pas d'intégration externe.
                </Step>
                <Step n={6} title="Créer le dépôt interne « Compétences EET »">
                  SharePoint ou drive d'entreprise — pas de service externe. Chaque ZIP source est versionné (v1.0-juin2026, v1.1, etc.). La version provisionnée à l'organisation est toujours référencée à une version du dépôt.
                </Step>
              </StepList>

              <Divider />

              {/* ───── ÉTAPE 1 ───── */}
              <H3>Étape 1 — Construction (Juin 2026, sprint formation)</H3>
              <P>
                Chaque référent suit la même méthode en 6 sous-étapes, encadrée par le formateur. Objectif : repartir de la formation avec un ZIP testé sur au moins 3 cas réels du quotidien.
              </P>
              <StepList>
                <Step n={1} title="Cartographier le workflow actuel sur 1 page">
                  Ce qui entre, ce qui sort, les règles tacites. Sans cette étape, la <Code>description</Code> du SKILL.md sera trop vague et Claude ne déclenchera pas la compétence au bon moment.
                </Step>
                <Step n={2} title="Brief unifié à Claude (méthode recommandée)">
                  Le référent colle le template ci-dessous dans une conversation Claude. Claude rédige le <Code>SKILL.md</Code> et assemble le ZIP en quelques minutes.
                </Step>
                <Step n={3} title="Upload des fichiers de référence dans la conversation">
                  Catalogue, exemples de livrables validés, règles métier — uploadés directement dans le chat Claude. Claude les intègre dans le bon sous-dossier du ZIP. Aucun fichier ne sort de Claude.ai.
                </Step>
                <Step n={4} title="Test sur 3-5 cas réels du jour J">
                  Cas vraiment du quotidien — pas des cas inventés. Chronométrer le temps gagné avant / après.
                </Step>
                <Step n={5} title="Itération sur la description et les règles">
                  Si la compétence ne se déclenche pas, réécrire la <Code>description</Code> avec un déclencheur explicite. Si le livrable est faux, durcir les règles dans le SKILL.md.
                </Step>
                <Step n={6} title="Récupération du ZIP final + dépôt dans « Compétences EET »">
                  Stocker la version finale dans le dépôt interne versionné. Tagger : <Code>v1.0-juin2026</Code>.
                </Step>
              </StepList>

              <MethodBox tone="blue" badge="Template unifié" badgeIcon={Sparkles} title="Brief à Claude pour générer une compétence EET">
                <PromptBox>
                  « Crée-moi une compétence Claude nommée <em>[Nom de la compétence]</em>.<br /><br />
                  <strong>Quand l'activer :</strong> [situation déclencheuse précise, ex : « quand l'utilisateur partage un fichier Excel de devis du lundi matin »]<br /><br />
                  <strong>Ce que Claude reçoit en entrée :</strong> [type de fichier ou message client]<br /><br />
                  <strong>Ce que Claude doit produire :</strong> [livrable précis et format attendu]<br /><br />
                  <strong>Règles EET obligatoires à intégrer :</strong> marques propres prioritaires (Vivolink, MicroConnect, CoreParts, Capture, Lanview, Ernitec, Sandberg) ; accessoires systématiques sur chaque offre ; substitutions par marché (sites sensibles → Axis / HANWHA, jamais HIKVISION) ; argument One Stop Shop si pertinent.<br /><br />
                  <strong>Fichiers joints à intégrer dans la compétence :</strong> [liste — catalogue, exemples, base de connaissances]<br /><br />
                  Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </PromptBox>
              </MethodBox>

              <Divider />

              {/* ───── ÉTAPE 2 ───── */}
              <H3>Étape 2 — Pilote individuel (Juillet–Août 2026)</H3>
              <P>
                Pendant 4 à 6 semaines, chaque référent utilise sa compétence en <strong>compte personnel uniquement</strong> — pas encore partagée à l'organisation. L'objectif est de stabiliser avant de déployer aux 50 autres collaborateurs.
              </P>

              <H3 style={{ fontSize: 15, marginTop: 16 }}>Critères de succès à valider avant provisionnement</H3>
              <TableWrap>
                <table style={tableStyle}>
                  <thead><tr><Th>Critère</Th><Th>Seuil minimum</Th><Th>Méthode de mesure</Th></tr></thead>
                  <tbody>
                    <tr><Td>Déclenchement automatique au bon moment</Td><Td><strong>≥ 90 %</strong> des cas</Td><Td>Journal manuel sur 20 demandes types</Td></tr>
                    <tr><Td>Livrable utilisable sans retouche majeure</Td><Td><strong>≥ 80 %</strong></Td><Td>Évaluation du référent + 1 collègue témoin</Td></tr>
                    <tr><Td>Temps gagné mesurable</Td><Td><strong>≥ 50 %</strong></Td><Td>Chronométré sur 5 cas réels avant / après</Td></tr>
                    <tr><Td>Aucune hallucination sur référence ou prix</Td><Td><strong>100 %</strong></Td><Td>Vérification systématique pendant tout le pilote</Td></tr>
                  </tbody>
                </table>
              </TableWrap>

              <Callout kind="warning">
                Une compétence qui produit une fausse référence produit ou un prix inventé est <strong>bloquante</strong>. Mieux vaut une compétence qui refuse de répondre qu'une compétence qui hallucine. Les règles du SKILL.md doivent l'expliciter : « Si la référence n'est pas trouvée dans le catalogue fourni, ne pas inventer — demander une précision. »
              </Callout>

              <Divider />

              {/* ───── ÉTAPE 3 ───── */}
              <H3>Étape 3 — Provisionnement organisation (Septembre 2026)</H3>
              <P>
                Les compétences validées passent du compte personnel du référent à <strong>Compétences de l'organisation</strong>. Jérémy effectue le provisionnement — c'est lui le propriétaire au sens Claude Enterprise.
              </P>

              <StepList>
                <Step n={1} title="Préparer la version « org » du ZIP">
                  Le référent retire les exemples non-anonymisés, ajuste la description pour un public plus large que son seul périmètre. Mise à jour du tag de version.
                </Step>
                <Step n={2} title="Jérémy uploade dans Paramètres › Compétences de l'organisation">
                  Toute l'équipe la voit immédiatement, en <strong>lecture seule</strong>. Les membres peuvent désactiver mais pas modifier ni supprimer.
                </Step>
                <Step n={3} title="Le référent désactive sa compétence personnelle équivalente">
                  Pour éviter les doublons et garantir que tout le monde utilise la même version.
                </Step>
                <Step n={4} title="Annonce ciblée aux audiences concernées">
                  Email + canal interne avec le périmètre exact (Outside Sales, Inside Sales, SMB, BDM, Direction). Pas de notification automatique, pas d'outil externe.
                </Step>
              </StepList>

              <Callout kind="success">
                <strong>Avantage propriétaire Enterprise :</strong> chaque mise à jour d'une compétence d'organisation se propage automatiquement aux 58 collaborateurs. Pas besoin de réuploader 58 fois — un seul upload par Jérémy suffit.
              </Callout>

              <Divider />

              {/* ───── ÉTAPE 4 ───── */}
              <H3>Étape 4 — Adoption &amp; maintenance (Octobre–Décembre 2026)</H3>
              <P>
                Objectif des trois derniers mois : que chaque compétence soit utilisée quotidiennement par sa cible. Le référent reste responsable de sa compétence — il en est le « product owner » interne.
              </P>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={UsersIcon} title="Buddy system">
                  Chaque référent parraine 5 à 8 collaborateurs sur sa compétence : démo en réunion d'équipe, premiers prompts faits ensemble, retour terrain consolidé.
                </Card>
                <Card Icon={RefreshCw} title="Mise à jour mensuelle des fichiers">
                  Catalogue, base clients, exemples — le référent met à jour le ZIP en début de mois et le transmet à Jérémy. Une seule mise à jour propage aux 58.
                </Card>
                <Card Icon={BarChart3} title="Métriques en showcase CODIR">
                  Volume traité, temps gagné, marge supplémentaire, taux de marques propres. Chiffres présentés une fois par mois en comité de direction.
                </Card>
                <Card Icon={Search} title="Détection des cas non couverts">
                  Le référent collecte les demandes que sa compétence ne sait pas traiter et les intègre dans la version suivante. Cycle court : 1 itération par mois.
                </Card>
              </div>

              <Divider />

              {/* ───── CATALOGUE ───── */}
              <H3>Catalogue cible — 9 compétences à provisionner aux 58</H3>
              <P>
                Les 8 référents portent 9 compétences (Kadi + Patrice en portent 2 sur le périmètre CCTP / devis). Ce tableau sert de feuille de route pour Jérémy : qui pilote quoi, pour qui.
              </P>

              <TableWrap>
                <table style={tableStyle}>
                  <thead><tr><Th>Compétence</Th><Th>Référent (owner interne)</Th><Th>Audience cible</Th></tr></thead>
                  <tbody>
                    <tr><Td><strong>Tableau de bord EBITDA</strong></Td><Td>Jérémy Siccardi</Td><Td>Direction, BDM</Td></tr>
                    <tr><Td><strong>Générateur d'offres complètes</strong></Td><Td>Arnaud Chaussat</Td><Td>Outside Sales (toutes divisions)</Td></tr>
                    <tr><Td><strong>Machine à relances devis</strong></Td><Td>Emmanuelle Virot</Td><Td>Outside Sales, Inside Sales</Td></tr>
                    <tr><Td><strong>Moteur marques propres</strong></Td><Td>Pinar Bingol</Td><Td>Tous commerciaux (Outside, Inside, SMB)</Td></tr>
                    <tr><Td><strong>Analyseur CCTP</strong></Td><Td>Kadi Bah + Patrice Perez</Td><Td>BDM Sécurité, Réseau (Dimitri), POS (Vincent)</Td></tr>
                    <tr><Td><strong>Générateur de devis Navision</strong></Td><Td>Kadi Bah</Td><Td>Outside Sales, Inside Sales, SMB</Td></tr>
                    <tr><Td><strong>Génération de leads</strong></Td><Td>Bianca Zsulestyan</Td><Td>SMB, Outside Sales</Td></tr>
                    <tr><Td><strong>Réactivation SCPP + TARGIT</strong></Td><Td>Samar Guedouar</Td><Td>Inside Sales</Td></tr>
                    <tr><Td><strong>Gestionnaire de boîte mail</strong></Td><Td>Annie Lafitte</Td><Td>Inside Sales (8 personnes)</Td></tr>
                  </tbody>
                </table>
              </TableWrap>

              <Divider />

              {/* ───── RÈGLES EET ───── */}
              <H3>Règles EET à encoder dans toute compétence commerciale</H3>
              <P>
                Ces 6 règles métier doivent apparaître dans chaque <Code>SKILL.md</Code> commercial. Sans elles, les compétences produisent des offres génériques qui ratent l'avantage concurrentiel d'EET.
              </P>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={Tag} title="Marques propres prioritaires">
                  Vivolink, MicroConnect, CoreParts, Capture, Lanview, Ernitec, Sandberg — toujours proposées en premier dans toute offre.
                </Card>
                <Card Icon={Package} title="Accessoires obligatoires">
                  Aucun produit principal sans ses accessoires — marge 2 à 3× supérieure sur les accessoires.
                </Card>
                <Card Icon={Target} title="Adaptation au marché">
                  Sites sensibles ou urbains → Axis, HANWHA, Bosch, AVIGILON. <strong>Jamais HIKVISION.</strong> Standard → toutes marques autorisées.
                </Card>
                <Card Icon={RefreshCw} title="Substitution intelligente">
                  Face à SIDEV → Sharp / Philips. OEM → CoreParts. Milestone → Camtrace. Substitutions intégrées en règle dans le SKILL.md.
                </Card>
                <Card Icon={Share2} title="Cross-sell inter-divisions">
                  Toute offre explore systématiquement les opportunités dans les 4 autres divisions (Sécurité, ProAV, SCPP, POS, Réseau).
                </Card>
                <Card Icon={Crown} title="Argument One Stop Shop">
                  Le seul acteur en France à couvrir les 5 divisions avec service conseil. À rappeler systématiquement — c'est notre différenciant absolu.
                </Card>
              </div>

              <Divider />

              {/* ───── CALENDRIER ───── */}
              <H3>Calendrier de déploiement</H3>
              <TableWrap>
                <table style={tableStyle}>
                  <thead><tr><Th>Phase</Th><Th>Période</Th><Th>Livrable</Th></tr></thead>
                  <tbody>
                    <tr><Td><strong>Préparation</strong></Td><Td>Mai 2026</Td><Td>Prérequis Jérémy activés : capacités org, eet.fr, TARGIT, dépôt interne versionné</Td></tr>
                    <tr><Td><strong>Construction</strong></Td><Td>Juin 2026</Td><Td>9 ZIPs v1 livrés, chacun testé sur ≥ 3 cas réels du quotidien</Td></tr>
                    <tr><Td><strong>Pilote individuel</strong></Td><Td>Juillet – Août 2026</Td><Td>Chaque référent valide les 4 critères de succès sur sa compétence personnelle</Td></tr>
                    <tr><Td><strong>Provisionnement org</strong></Td><Td>Septembre 2026</Td><Td>Les 9 compétences disponibles en lecture seule pour les 58 collaborateurs</Td></tr>
                    <tr><Td><strong>Adoption</strong></Td><Td>Octobre – Décembre 2026</Td><Td>Buddy system actif, mise à jour mensuelle, showcase CODIR mensuel</Td></tr>
                  </tbody>
                </table>
              </TableWrap>

              <Callout kind="success">
                <strong>Cible 12 mois :</strong> EBITDA 4 % atteint (gap 825 000 €) via marques propres doublées (6,1 % → 12 %, +500 K€), réactivation SCPP (marge 20–44 % sans coût d'acquisition) et upsell inter-divisions automatisé — le tout sans intégration externe, en restant dans le périmètre Claude Enterprise + outils internes EET (Navision, TARGIT, eet.fr, SharePoint).
              </Callout>
            </SectionShell>

            {/* ────── RECAP ────── */}
            <div id="recap" style={{
              background: 'linear-gradient(135deg, #1C1C1C 0%, #2A2A2A 100%)',
              color: '#fff', borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)',
              marginBottom: 24, scrollMarginTop: 140,
            }}>
              <h2 style={{
                fontFamily: F.head, fontSize: 'clamp(22px, 2.6vw, 26px)', fontWeight: 800,
                marginBottom: 24, letterSpacing: '-0.02em',
              }}>Récapitulatif : les étapes clés</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                <RecapCol title="Créer une compétence" items={[
                  <>Créer un dossier avec un <code style={recapCodeStyle}>SKILL.md</code></>,
                  'Écrire le bloc YAML (name, description)',
                  'Ajouter les instructions en Markdown',
                  'Ajouter fichiers de référence ou scripts si besoin',
                  'Zipper le dossier (dossier à la racine)',
                  'Uploader dans Personnaliser › Compétences',
                ]}/>
                <RecapCol title="Déployer à l'organisation" items={[
                  <>Activer <em>Exécution de code</em> dans les paramètres d'organisation</>,
                  <>Activer <em>Compétences</em> dans les paramètres d'organisation</>,
                  "Uploader le ZIP dans Paramètres › Compétences de l'organisation",
                ]}/>
                <RecapCol title="Mettre à jour & partager" items={[
                  'Modifier les fichiers en local',
                  'Recréer le ZIP',
                  "Supprimer l'ancienne version",
                  'Uploader le nouveau ZIP',
                  'Pour le partage : activer les commutateurs dans Paramètres › Compétences',
                ]}/>
              </div>
            </div>

          </main>
        </div>
      </div>

      <style>{`
        .cc-layout { grid-template-columns: 240px minmax(0, 1fr); }
        @media (max-width: 960px) {
          .cc-layout { grid-template-columns: minmax(0, 1fr) !important; }
          .cc-sidebar { position: static !important; flex-direction: row !important; flex-wrap: wrap !important; }
          .cc-sidebar > a { flex: 0 0 auto; }
        }
      `}</style>
    </>
  )
}

// ──────────────────────────────────────────────────────────────
// Sub-helpers used above
// ──────────────────────────────────────────────────────────────

const tableStyle = {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  fontSize: 14,
}

const firstCellStyle = { fontWeight: 600, color: C.ink, background: '#F8FAFB' }

const recapCodeStyle = {
  color: 'rgba(255,255,255,.85)',
  background: 'rgba(255,255,255,.12)',
  padding: '1px 6px',
  borderRadius: 4,
  fontFamily: F.mono,
  fontSize: 12.5,
}

function TableWrap({ children }) {
  return (
    <div style={{
      overflowX: 'auto', margin: '16px 0',
      borderRadius: 12, border: `1px solid ${C.border}`,
      boxShadow: '0 1px 3px rgba(0,0,0,.04)',
    }}>
      {children}
    </div>
  )
}

function Divider() {
  return <div style={{ height: 1, background: C.border, margin: '28px 0' }} />
}

function RecapCol({ title, items }) {
  return (
    <div>
      <h4 style={{
        fontFamily: F.head, fontSize: 13, fontWeight: 800, letterSpacing: '0.06em',
        textTransform: 'uppercase', color: '#5EEAD4', marginBottom: 14,
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
