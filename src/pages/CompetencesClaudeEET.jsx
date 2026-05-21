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
  { id: 'p9',  num: '★', label: 'Formations EET',     labelLong: 'Préparation formations EET',         Icon: Briefcase,    accent: '#EFF4FF', tint: C.blue },
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
            Comprendre, construire et déployer des compétences Claude pour vos équipes. Avec la préparation détaillée des 8 formations EET de juin.
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
                <strong>Exemple concret :</strong> vous demandez à Claude de créer une présentation. Il détecte la compétence PowerPoint, charge ses instructions et génère le fichier selon votre charte graphique, sans que vous ayez précisé une seule règle de mise en forme.
              </Callout>

              <H3>Ce qu'une compétence peut contenir</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '16px 0' }}>
                <Card Icon={FileText} title="Instructions">Règles de style, processus à suivre, contraintes de format, vocabulaire interdit.</Card>
                <Card Icon={Paperclip} title="Fichiers de référence">Templates, exemples de livrables, données métier, guides de marque.</Card>
                <Card Icon={CodeIcon} title="Scripts exécutables">Python, JavaScript, pour les compétences avancées qui produisent des fichiers.</Card>
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
                  C'est la façon la plus rapide. Vous décrivez ce que vous voulez, Claude rédige le <Code>SKILL.md</Code>, crée le ZIP et vous le livre prêt à uploader, le tout en une seule conversation.
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
                Si votre compétence a besoin de documents supplémentaires (un template Word, un guide de style, des exemples), placez-les dans un sous-dossier et mentionnez-les dans le <Code>SKILL.md</Code>. Claude les chargera uniquement quand c'est utile.
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
                Les scripts ne sont pas obligatoires pour commencer. Commencez par une compétence avec uniquement un <Code>SKILL.md</Code> et des instructions texte. C'est suffisant pour 90 % des usages.
              </Callout>
            </SectionShell>

            {/* ────── PARTIE 3 ────── */}
            <SectionShell section={SECTIONS[2]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Créer le ZIP et l'uploader dans Claude.ai.
              </p>

              <H3 style={{ marginTop: 0 }}>Étape 1 : créer le ZIP</H3>
              <P>
                Claude.ai attend un fichier ZIP dont le <strong>dossier est à la racine</strong>, pas les fichiers directement. Voici comment faire selon votre système :
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

              <H3>Étape 2 : le fichier .skill, c'est quoi ?</H3>
              <P>
                Quand Claude.ai exporte une compétence, il génère un fichier avec l'extension <Code>.skill</Code>. Ce n'est pas un format spécial : <strong>c'est un ZIP renommé</strong>. Les deux sont interchangeables.
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

              <H3>Étape 3 : uploader dans Claude.ai</H3>
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
                Quand vous uploadez des fichiers dans une conversation Claude, ils sont disponibles pour cette conversation uniquement. Ils ne modifient pas la compétence stockée dans votre compte. C'est deux choses distinctes.
              </P>
              <P>
                Mais vous pouvez utiliser cette conversation pour <strong>fabriquer ou enrichir une compétence</strong>, puis récupérer le ZIP mis à jour.
              </P>

              <Divider />

              <H3>Scénario A : construire une compétence depuis vos documents</H3>
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
                <Step n={1} title="Uploadez vos fichiers dans la conversation">Catalogue, templates, exemples de livrables, tout ce qui doit guider Claude</Step>
                <Step n={2} title="Demandez à Claude de créer la compétence">Précisez le nom, l'objectif, et ce que vous voulez que Claude fasse avec ces fichiers</Step>
                <Step n={3} title="Récupérez le ZIP">Claude génère le <Code>SKILL.md</Code>, intègre les fichiers dans le bon dossier, et livre le tout prêt à uploader</Step>
                <Step n={4} title="Uploadez dans Personnaliser › Compétences">La compétence est active, avec vos fichiers intégrés comme références</Step>
              </StepList>

              <Divider />

              <H3>Scénario B : enrichir une compétence existante</H3>
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

              <H3>Modifier une compétence : attention aux doublons</H3>
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
                Vous pouvez aussi demander à Claude de modifier le contenu du <Code>SKILL.md</Code> directement dans la conversation : uploadez votre fichier <Code>.skill</Code> ou <Code>.zip</Code>, demandez les modifications, récupérez le nouveau ZIP.
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
                Vous pouvez aussi demander à Claude : <em>« Renomme cette compétence en [nouveau nom] et livre-moi le ZIP »</em> en lui uploadant le fichier <Code>.skill</Code>. Il s'occupe des deux modifications (YAML + dossier) et vous livre le fichier prêt.
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
                Les membres peuvent <strong>désactiver</strong> une compétence provisionnée par l'organisation s'ils le souhaitent. Mais ils ne peuvent ni la modifier, ni la supprimer : c'est en lecture seule pour eux.
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
                <strong>Plan individuel (Pro, Max) :</strong> le partage entre comptes n'est pas disponible. Envoyez le fichier <Code>.zip</Code> ou <Code>.skill</Code> manuellement. Votre collègue l'uploade dans son propre compte.
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

            {/* ────── PARTIE 9 — PRÉPARATION FORMATIONS EET ────── */}
            <SectionShell section={SECTIONS[8]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 24, marginTop: -16 }}>
                Ce que Jérémy active avant les formations, puis la configuration détaillée de chaque compétence : un brief Claude prêt à coller, les fichiers à apporter en formation, les prérequis spécifiques.
              </p>

              <Callout>
                <strong>8 formations, 9 compétences à construire.</strong> Kadi et Patrice portent ensemble deux compétences sur le périmètre Sécurité (CCTP + Devis Navision). Tout reste dans le périmètre Claude.ai natif et des outils internes EET. Pas d'intégration externe, pour préserver la sécurité et les droits d'accès.
              </Callout>

              <Divider />

              {/* ═══════════════════════════════════════════════════ */}
              {/* PARTIE A — PRÉREQUIS JÉRÉMY                          */}
              {/* ═══════════════════════════════════════════════════ */}
              <H3 style={{ marginTop: 0 }}>A. Ce que Jérémy active en amont (mai 2026)</H3>
              <P>
                Sans ces prérequis, plusieurs compétences ne sont pas construisables. À faire avant la première formation pour que les référents arrivent avec un environnement opérationnel.
              </P>

              <StepList>
                <Step n={1} title="Activer les capacités Claude Enterprise au niveau organisation">
                  <strong>Paramètres › Capacités :</strong> cocher « Exécution de code et création de fichiers » + « Compétences ». Sans ces deux capacités, les compétences ne sont pas visibles dans <Code>Personnaliser</Code> côté collaborateurs.
                </Step>
                <Step n={2} title="Activer le partage pair-à-pair des compétences (phase pilote)">
                  <strong>Paramètres › Compétences :</strong> autoriser le partage entre utilisateurs. Le répertoire d'organisation reste fermé jusqu'au provisionnement de septembre, pour contrôler la qualité avant la diffusion aux 58.
                </Step>
                <Step n={3} title="Activer les connecteurs web sur les comptes Kadi et Bianca">
                  <strong>Paramètres › Connecteurs :</strong> activer la recherche web et la navigation. Kadi en a besoin pour se loguer sur eet.fr (compétence Devis Navision). Bianca en a besoin pour la recherche de prospects.
                </Step>
                <Step n={4} title="Créer le compte technique eet.fr « voir en tant que »">
                  Compte interne dédié, partagé entre Kadi (priorité 1) et Patrice. Permet à Claude d'identifier les références et les prix spécifiques au client depuis le site interne, via le mode <em>voir en tant que</em> déjà existant dans eet.fr.
                </Step>
                <Step n={5} title="Configurer l'export hebdomadaire TARGIT en Excel">
                  Visites web par client, exportées chaque lundi matin, sur la même logique que le fichier devis d'Emmanuelle. Export manuel ou planifié dans TARGIT, déposé dans un dossier interne SharePoint. Indispensable pour la compétence de Samar.
                </Step>
                <Step n={6} title="Préparer les exports Navision nécessaires">
                  Catalogue produits par famille (Arnaud, Pinar), catalogue marques propres avec marges (Pinar), base des 12 500 clients SCPP inactifs (Samar), base clients EET globale pour exclusion (Bianca). Exports ponctuels, à fournir aux référents la veille de leur formation.
                </Step>
                <Step n={7} title="Créer le dépôt SharePoint « Compétences EET » versionné">
                  Drive interne, jamais un service externe. Chaque ZIP source est versionné (<Code>v1.0-juin2026</Code>, <Code>v1.1</Code>, etc.). La version provisionnée à l'organisation est toujours référencée à une version du dépôt, ce qui permet de revenir en arrière si une mise à jour casse l'usage.
                </Step>
              </StepList>

              <Callout kind="success">
                <strong>Avantage propriétaire Enterprise :</strong> une fois ces 7 prérequis activés, chaque mise à jour ultérieure d'une compétence d'organisation se propage automatiquement aux 58 collaborateurs. Pas besoin de réuploader 58 fois : un seul upload par Jérémy suffit.
              </Callout>

              <Divider />

              {/* ═══════════════════════════════════════════════════ */}
              {/* PARTIE B — CONFIG PAR FORMATION                      */}
              {/* ═══════════════════════════════════════════════════ */}
              <H3>B. Configuration détaillée par formation</H3>
              <P>
                Pour chaque référent : le brief unifié à coller dans Claude pendant la formation pour générer le <Code>SKILL.md</Code> et le ZIP, la liste des fichiers à apporter et les prérequis spécifiques. Les formations sont ordonnées dans la séquence de déploiement.
              </P>

              <MethodBox tone="ink" badge="Méthode" badgeIcon={Lightbulb} title="Comment se déroule chaque formation">
                <P style={{ marginTop: 0, fontSize: 14, color: C.textSoft }}>
                  Chaque référent arrive avec ses fichiers. Pendant la formation : (1) cartographie du workflow actuel sur 1 page ; (2) brief Claude collé dans une conversation, avec upload des fichiers de référence ; (3) Claude génère le <Code>SKILL.md</Code> et assemble le ZIP ; (4) test sur 3 à 5 cas réels du jour ; (5) itérations sur la <Code>description</Code> et les règles ; (6) récupération du ZIP final et dépôt dans <Code>Compétences EET</Code>.
                </P>
              </MethodBox>

              {/* ─── 1. JÉRÉMY ─── */}
              <SkillSetup
                n="1"
                name="Jérémy Siccardi"
                role="Directeur Général · première formation, ouvre le sprint"
                project="Tableau de bord EBITDA & pilotage de la performance"
                briefName="Pilotage EBITDA EET"
                brief={<>
                  « Crée-moi une compétence Claude nommée <em>Pilotage EBITDA EET</em>.<br /><br />
                  <strong>Quand l'activer :</strong> quand je partage un fichier chiffres mensuel, un PNL ou que je demande un point d'avancement EBITDA.<br /><br />
                  <strong>Entrée :</strong> Excel chiffres mensuels (CA et marge par division) + PNL mensuel format EET.<br /><br />
                  <strong>Sortie attendue :</strong> synthèse structurée en 4 blocs. (1) Évolution des marges par division vs N-1 et vs budget. (2) Alertes automatiques sur les écarts &gt; 5 %. (3) Leviers prioritaires pour atteindre 4 % EBITDA. (4) Suivi cumulé du gap restant (825 000 € au démarrage).<br /><br />
                  <strong>Règles :</strong> comparaison systématique vs budget annuel et N-1 ; détection automatique des dérives ; priorisation des actions par impact EBITDA estimé ; mise en avant des divisions sous-performantes ; recommandation concrète par alerte (jamais juste un constat).<br /><br />
                  <strong>Fichiers à intégrer :</strong> budget annuel 2026 par division, historique 12 mois CA et marge, structure type du PNL EET.<br /><br />
                  Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </>}
                files={[
                  'Excel chiffres mensuels (3 derniers mois)',
                  'PNL mensuel format EET',
                  'Budget annuel 2026 par division',
                  'Historique 12 mois CA et marge par division',
                ]}
                prereqs={<>Aucun spécifique. Jérémy étant l'admin org, les capacités sont déjà activées avant sa propre formation.</>}
              />

              {/* ─── 2. ARNAUD ─── */}
              <SkillSetup
                n="2"
                name="Arnaud Chaussat"
                role="Outside Sales · meilleure marge Outside (17 %)"
                project="Générateur d'offres complètes"
                briefName="Générateur d'offres EET complètes"
                brief={<>
                  « Crée-moi une compétence Claude nommée <em>Générateur d'offres EET complètes</em>.<br /><br />
                  <strong>Quand l'activer :</strong> quand un commercial colle une demande client (« j'ai besoin de X caméras pour... », « il me faut un système de Y »).<br /><br />
                  <strong>Entrée :</strong> demande client en langage naturel + type de marché (sensible / standard) + division concernée.<br /><br />
                  <strong>Sortie attendue :</strong> offre écosystème complète, prête à formuler au client : produit principal, accessoires systématiques, alternatives marques propres, argument One Stop Shop.<br /><br />
                  <strong>Règles EET obligatoires :</strong> marques propres prioritaires (Vivolink, MicroConnect, CoreParts, Capture, Lanview, Ernitec, Sandberg) ; accessoires obligatoires sur chaque offre (marge 2 à 3× supérieure) ; substitution intelligente (sites sensibles → Axis / HANWHA / Bosch / AVIGILON, jamais HIKVISION) ; cross-sell inter-divisions exploré systématiquement.<br /><br />
                  <strong>Fichiers à intégrer :</strong> catalogue Navision par famille d'articles, catalogue complet des 7 marques propres, 3 exemples d'offres complètes validées (anonymisées).<br /><br />
                  Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </>}
                files={[
                  'Extraction Navision : produits par famille d\'articles',
                  'Catalogue complet des 7 marques propres avec fiches techniques',
                  '3 à 5 exemples d\'offres complètes envoyées récemment (anonymisées)',
                ]}
                prereqs={<>Aucun spécifique. Compétence purement basée sur catalogue interne, pas d'accès externe nécessaire.</>}
              />

              {/* ─── 3. EMMANUELLE ─── */}
              <SkillSetup
                n="3"
                name="Emmanuelle Virot"
                role="Outside Sales"
                project="Machine à relances devis"
                briefName="Relances devis hebdomadaires EET"
                brief={<>
                  « Crée-moi une compétence Claude nommée <em>Relances devis hebdomadaires EET</em>.<br /><br />
                  <strong>Quand l'activer :</strong> quand l'utilisateur partage le fichier Excel des devis du lundi matin.<br /><br />
                  <strong>Entrée :</strong> Excel des devis en cours (colonnes : client, montant, ancienneté, commercial, division, statut).<br /><br />
                  <strong>Sortie attendue :</strong> un email par client regroupant tous ses devis en attente, personnalisé selon l'ancienneté et le montant, prêt à envoyer. Les emails sont ordonnés du plus prioritaire au moins prioritaire.<br /><br />
                  <strong>Règles :</strong> tri par priorité (montant &gt; ancienneté &gt; division) ; regroupement systématique par client (un seul email par client, jamais un par devis) ; ton EET (cordial, structuré, action attendue claire) ; accroche personnalisée selon l'ancienneté (devis &lt; 15 j vs &gt; 30 j) ; signature commerciale du référent du devis.<br /><br />
                  <strong>Fichiers à intégrer :</strong> 3 exemples d'emails de relance validés (ton, structure, signature), annuaire interne des commerciaux par division.<br /><br />
                  Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </>}
                files={[
                  'Fichier Excel devis du lundi (1 exemple récent)',
                  '3 à 5 emails de relance que tu envoies habituellement (différents niveaux d\'ancienneté)',
                  'Annuaire interne des commerciaux par division',
                ]}
                prereqs={<>Aucun spécifique. Le fichier Excel hebdomadaire des devis est déjà disponible chaque lundi.</>}
              />

              {/* ─── 4. PINAR ─── */}
              <SkillSetup
                n="4"
                name="Pinar Bingol"
                role="Outside Sales · spécialiste Private Label (17 % marge)"
                project="Moteur de substitution et promotion des marques propres"
                briefName="Substitution marques propres EET"
                brief={<>
                  « Crée-moi une compétence Claude nommée <em>Substitution marques propres EET</em>.<br /><br />
                  <strong>Quand l'activer :</strong> quand un commercial demande une alternative à une marque concurrente ou un argumentaire de substitution.<br /><br />
                  <strong>Entrée :</strong> marque + référence concurrente + contexte client (vertical, sensibilité, budget).<br /><br />
                  <strong>Sortie attendue :</strong> alternative marque propre EET équivalente + tableau comparatif qualité/prix/délai + script de vente (Inside et Outside) + argument de marge pour le commercial.<br /><br />
                  <strong>Règles :</strong> tableaux comparatifs systématiques ; mise en avant de la marge supérieure (chiffrée si possible) ; jamais de dévalorisation directe de la marque concurrente (équivalence + avantages EET) ; toujours conclure par un argument de marge interne pour motiver le commercial.<br /><br />
                  <strong>Substitutions clés à encoder :</strong> Vivolink vs Samsung, CoreParts vs HP OEM, Capture vs Logitech, Ernitec vs marques tier 2, Sandberg vs Belkin, MicroConnect vs câbles génériques.<br /><br />
                  <strong>Fichiers à intégrer :</strong> catalogue exhaustif des 7 marques propres, données de marge par produit, fiches comparatives existantes.<br /><br />
                  Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </>}
                files={[
                  'Catalogue exhaustif des 7 marques propres (Vivolink, MicroConnect, CoreParts, Capture, Lanview, Ernitec, Sandberg)',
                  'Données de marge par produit marque propre (Excel ou export Navision)',
                  'Fiches comparatives existantes (si disponibles, sinon on les construit en formation)',
                ]}
                prereqs={<>Aucun spécifique. Cible : doubler la part marques propres (6,1 % → 12 %, +500 K€ EBITDA).</>}
              />

              {/* ─── 5. KADI + PATRICE (2 compétences) ─── */}
              <SkillSetup
                n="5"
                name="Kadi Bah + Patrice Perez"
                role="Outside Sales + Presales Manager Sécurité (20 ans d'expérience) · double compétence"
                project="Projet 1 : Analyseur CCTP   |   Projet 2 : Générateur de devis Navision (Kadi en autonomie)"
                briefName="Analyse CCTP EET + Devis Navision EET (2 compétences distinctes)"
                brief={<>
                  <strong>Compétence A · Analyse CCTP EET (binôme Kadi + Patrice)</strong><br /><br />
                  « Crée-moi une compétence Claude nommée <em>Analyse CCTP EET</em>.<br /><br />
                  <strong>Quand l'activer :</strong> quand l'utilisateur upload un CCTP, un DCE ou un dossier de consultation.<br /><br />
                  <strong>Entrée :</strong> PDF CCTP / dossier complet d'appel d'offres.<br /><br />
                  <strong>Sortie attendue :</strong> (1) synthèse 1 page (périmètre, contraintes techniques clés, exclusions, dates clés) ; (2) liste structurée des références techniques exigées avec correspondances catalogue EET ; (3) points de vigilance à valider techniquement par Patrice ; (4) structure recommandée de réponse commerciale.<br /><br />
                  <strong>Règles :</strong> ne jamais inventer une référence (si non trouvée dans le catalogue fourni, demander confirmation) ; signaler les contraintes incompatibles avec l'offre EET ; identifier systématiquement les opportunités cross-division (un CCTP Sécurité contient souvent des opportunités Réseau ou ProAV).<br /><br />
                  <strong>Fichiers :</strong> 2-3 CCTP archives anonymisés, catalogue Sécurité, glossaire technique EET. »<br /><br />
                  ─────────────────<br /><br />
                  <strong>Compétence B · Devis Navision EET (Kadi en autonomie)</strong><br /><br />
                  « Crée-moi une compétence Claude nommée <em>Devis Navision EET</em>.<br /><br />
                  <strong>Quand l'activer :</strong> quand l'utilisateur colle une demande client en langage naturel et indique un code client EET.<br /><br />
                  <strong>Entrée :</strong> demande client + code client EET (ex : « il me faut 12 caméras dôme PoE pour un site logistique sensible, client 12345 »).<br /><br />
                  <strong>Sortie attendue :</strong> (1) fichier Excel au format Navision (références, désignations, quantités, prix spécifiques au client) prêt à copier-coller dans Navision ; (2) alternative marque propre EET systématiquement proposée pour chaque ligne.<br /><br />
                  <strong>Règles :</strong> utiliser le connecteur web pour se loguer sur <Code>eet.fr</Code> avec le compte technique « voir en tant que » du client ; vérifier le prix spécifique au client (jamais utiliser le prix catalogue) ; jamais inventer une référence ; alternative marque propre obligatoire pour chaque ligne.<br /><br />
                  <strong>Fichiers :</strong> exemple Excel devis Navision validé (format colonnes exact), liste des champs Navision dans l'ordre, structure d'un devis type. »
                </>}
                files={[
                  '2 à 3 CCTP archives anonymisés (Sécurité + une autre division)',
                  'Exemple de fichier Excel devis Navision validé (format colonnes attendu)',
                  'Glossaire technique métier EET (acronymes, normes, équivalences)',
                  '5 à 10 codes clients représentatifs (à anonymiser pour la formation)',
                ]}
                prereqs={<>
                  <strong>Critique :</strong> compte technique <Code>eet.fr</Code> « voir en tant que » créé par Jérémy, et connecteur web Claude.ai activé sur les comptes Kadi et Patrice (<em>Paramètres › Connecteurs</em>). Sans ces 2 prérequis, la compétence B (Devis Navision) ne fonctionne pas.
                </>}
              />

              {/* ─── 6. BIANCA ─── */}
              <SkillSetup
                n="6"
                name="Bianca Zsulestyan"
                role="SMB · spécialiste accueil nouveaux clients"
                project="Génération de leads & prospection ciblée"
                briefName="Prospection ciblée EET"
                brief={<>
                  « Crée-moi une compétence Claude nommée <em>Prospection ciblée EET</em>.<br /><br />
                  <strong>Quand l'activer :</strong> quand l'utilisateur demande une liste de prospects ou un message de prise de contact pour un vertical et une division.<br /><br />
                  <strong>Entrée :</strong> vertical cible (retail, logistique, éducation, municipalités, hôtellerie...) + division EET concernée + critères (taille, géographie, contexte).<br /><br />
                  <strong>Sortie attendue :</strong> (1) liste de 10 à 20 prospects pertinents identifiés via recherche web manuelle (connecteur web Claude.ai) ; (2) message de prise de contact personnalisé par profil de prospect ; (3) script d'approche LinkedIn + email à envoyer.<br /><br />
                  <strong>Règles :</strong> croiser systématiquement avec la base clients EET fournie pour exclure les doublons ; segmentation par profil (taille, vertical, division) ; messages courts (max 80 mots) et concrets, jamais générique ; toujours proposer une porte d'entrée par produit ou service spécifique ; pas d'utilisation d'API LinkedIn, recherches via le connecteur web standard.<br /><br />
                  <strong>Fichiers à intégrer :</strong> base clients EET (noms d'entreprises uniquement, pour exclusion), 3 messages de prospection validés, liste des verticals et divisions EET avec arguments clés par segment.<br /><br />
                  Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </>}
                files={[
                  'Export base clients EET (Navision), noms d\'entreprises uniquement, pour exclusion',
                  '3 à 5 messages de prospection envoyés récemment (différents verticals)',
                  'Liste des verticals que tu cibles le plus + arguments par segment',
                  '(Optionnel) liste de leads déjà identifiés à enrichir',
                ]}
                prereqs={<>Connecteur web Claude.ai activé sur le compte Bianca (recherches manuelles, pas d'intégration LinkedIn Sales Navigator pour préserver les droits d'accès et la sécurité).</>}
              />

              {/* ─── 7. SAMAR ─── */}
              <SkillSetup
                n="7"
                name="Samar Guedouar"
                role="Inside Sales"
                project="Réactivation base clients SCPP inactive + enrichissement TARGIT"
                briefName="Réactivation SCPP EET"
                brief={<>
                  « Crée-moi une compétence Claude nommée <em>Réactivation SCPP EET</em>.<br /><br />
                  <strong>Quand l'activer :</strong> (a) quand l'utilisateur partage l'export des 12 500 clients inactifs ; (b) quand l'utilisateur partage l'export TARGIT hebdomadaire des visites web par client.<br /><br />
                  <strong>Entrée :</strong> Excel clients SCPP inactifs (Navision) OU Excel visites web (TARGIT).<br /><br />
                  <strong>Sortie attendue :</strong> (1) segmentation des inactifs par profil / ancienneté / potentiel ; (2) emails de réactivation personnalisés par segment, prêts à envoyer ; (3) emails hyper-ciblés sur les clients SCPP ayant visité une page produit récemment, signal d'intention chaud à exploiter dans la semaine.<br /><br />
                  <strong>Règles :</strong> prioriser absolument les visiteurs récents (signal chaud, traiter dans les 7 jours) ; segmenter les inactifs par ancienneté (&lt; 18 mois, 18-36 mois, &gt; 36 mois) avec un ton différent par segment ; ton SCPP (relation longue, retour facilité, pas d'agressivité) ; jamais de message générique, toujours référence à un produit ou une commande passée.<br /><br />
                  <strong>Fichiers à intégrer :</strong> 3 exemples d'emails de réactivation validés (ton SCPP), segments SCPP types avec arguments clés par segment.<br /><br />
                  Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </>}
                files={[
                  'Export Excel des 12 500 clients SCPP inactifs (Navision)',
                  'Premier export TARGIT visites web (configuré par Jérémy en amont)',
                  '3 emails de réactivation que tu envoies (ton EET SCPP)',
                ]}
                prereqs={<>
                  Export hebdomadaire TARGIT configuré par Jérémy (visites web par client → Excel, déposé chaque lundi dans le dossier SharePoint). Export base clients SCPP inactifs Navision (one-shot, fourni en formation).
                </>}
              />

              {/* ─── 8. ANNIE ─── */}
              <SkillSetup
                n="8"
                name="Annie Lafitte"
                role="Team Leader Inside Sales (8 personnes)"
                project="Gestionnaire intelligent de la boîte mail"
                briefName="Gestion mails Inside Sales EET"
                brief={<>
                  « Crée-moi une compétence Claude nommée <em>Gestion mails Inside Sales EET</em>.<br /><br />
                  <strong>Quand l'activer :</strong> (a) quand l'utilisateur colle un lot d'emails à trier ; (b) quand l'utilisateur demande une réponse à une situation récurrente (demande de prix, relance bid, client mécontent, transmission BDM, demande de stock...).<br /><br />
                  <strong>Entrée :</strong> lot d'emails (collés en texte brut) OU email unique + situation détectée.<br /><br />
                  <strong>Sortie attendue :</strong> (1) tri Urgent / Important / Standard / À dispatcher avec critères explicites ; (2) brouillon de réponse personnalisé par type de situation, prêt à copier-coller dans la messagerie ; (3) traitement groupé : 15 emails similaires traités en une seule soumission, 15 réponses générées.<br /><br />
                  <strong>Règles :</strong> bibliothèque de 10 à 15 prompts encodés par situation type récurrente ; ton EET Inside Sales (réactif, structuré, signature commerciale standard) ; priorité absolue aux clients existants ; dispatcher proprement vers BDM de la division concernée, Outside Sales ou Inside Sales selon le sujet.<br /><br />
                  <strong>Fichiers à intégrer :</strong> 10 à 15 exemples d'emails de chaque situation type avec la réponse attendue (anonymisés), grille de priorisation actuelle de l'équipe, annuaire interne BDM / Outside / Inside par division.<br /><br />
                  Génère le SKILL.md et livre-moi un ZIP prêt à uploader. »
                </>}
                files={[
                  '10 à 15 exemples d\'emails par situation type avec ta réponse (anonymisés) : demande prix, relance bid, client mécontent, transfert BDM, demande stock',
                  'Grille de priorisation actuelle de l\'équipe',
                  'Annuaire interne BDM / Outside / Inside par division',
                ]}
                prereqs={<>
                  <strong>Aucune intégration boîte mail :</strong> processus 100 % manuel (copier-coller des emails dans Claude). Pas d'intégration Gmail / Outlook pour préserver les droits d'accès et la sécurité interne. Le gain de temps vient de la bibliothèque de prompts et du traitement groupé.
                </>}
              />

              <Divider />

              <Callout kind="success">
                <strong>Sortie du sprint formation :</strong> 9 ZIPs versionnés <Code>v1.0-juin2026</Code> dans le dépôt SharePoint <Code>Compétences EET</Code>, chacun testé sur 3 à 5 cas réels du jour. Les référents repartent avec leur compétence active sur leur compte personnel. Provisionnement org prévu en septembre 2026 après validation pilote.
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

function SkillSetup({ n, name, role, project, briefName, brief, files, prereqs }) {
  return (
    <article style={{
      background: '#fff',
      border: `1px solid ${C.border}`,
      borderRadius: 16,
      padding: 'clamp(20px, 3vw, 28px)',
      marginBottom: 20,
      boxShadow: '0 1px 3px rgba(0,0,0,.04)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 10, flexWrap: 'wrap' }}>
        <span style={{
          background: C.blue, color: '#fff', fontFamily: F.head,
          minWidth: 38, height: 38, borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 16, flexShrink: 0,
        }}>{n}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{
            fontFamily: F.head, fontSize: 'clamp(17px, 2vw, 19px)', fontWeight: 800,
            margin: 0, color: C.ink, letterSpacing: '-0.01em', lineHeight: 1.3,
          }}>
            {name}
          </h3>
          <p style={{ margin: '3px 0 0', fontSize: 13.5, color: C.textSoft, lineHeight: 1.5 }}>
            {role}
          </p>
        </div>
      </div>

      {/* Project title */}
      <div style={{
        background: C.blueLight, color: C.blue,
        padding: '12px 16px', borderRadius: 10,
        fontWeight: 700, fontSize: 14.5, marginBottom: 16,
        border: `1px solid ${C.blueBorder}`,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <Target size={16} style={{ flexShrink: 0 }} />
        <span>{project}</span>
      </div>

      {/* Brief box */}
      <MethodBox tone="blue" badge="Brief à coller dans Claude" badgeIcon={Sparkles} title={briefName}>
        <PromptBox label="Template à coller en formation">
          {brief}
        </PromptBox>
      </MethodBox>

      {/* Files + Prereqs grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 14,
        marginTop: 16,
      }}>
        <div style={{
          background: C.bg,
          padding: '14px 16px',
          borderRadius: 10,
          border: `1px solid ${C.border}`,
        }}>
          <h4 style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: F.head, fontSize: 12, fontWeight: 800, letterSpacing: '0.05em',
            textTransform: 'uppercase', color: C.ink, margin: '0 0 10px',
          }}>
            <Paperclip size={14} color={C.blue} /> Fichiers à apporter
          </h4>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: C.text, lineHeight: 1.6 }}>
            {files.map((f, i) => <li key={i} style={{ marginBottom: 4 }}>{f}</li>)}
          </ul>
        </div>
        <div style={{
          background: C.bg,
          padding: '14px 16px',
          borderRadius: 10,
          border: `1px solid ${C.border}`,
        }}>
          <h4 style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: F.head, fontSize: 12, fontWeight: 800, letterSpacing: '0.05em',
            textTransform: 'uppercase', color: C.ink, margin: '0 0 10px',
          }}>
            <Settings size={14} color={C.blue} /> Prérequis spécifiques
          </h4>
          <div style={{ fontSize: 13.5, color: C.text, lineHeight: 1.6 }}>{prereqs}</div>
        </div>
      </div>
    </article>
  )
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
