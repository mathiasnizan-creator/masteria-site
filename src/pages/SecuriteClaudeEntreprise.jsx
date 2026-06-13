import { useEffect, useState } from 'react'
import {
  ShieldCheck, Lock, Award, FileCheck, Scale, Key, ClipboardList, Briefcase,
  Globe, Server, Database, FileText, Eye, Building2,
  Users as UsersIcon, Crown, Settings, AlertTriangle, CheckCircle2, XCircle,
  Info, Sparkles, Clock, ArrowDown, Trash2, RefreshCw,
  Search, Hash, Tag, KeyRound, ShieldAlert, BadgeCheck, Star, Check,
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
  navy: '#0B1B3A',
}

const F = {
  head: 'Nunito, sans-serif',
  body: 'DM Sans, sans-serif',
  mono: '"Fira Code", "Cascadia Code", Consolas, monospace',
}

const SECTIONS = [
  { id: 'p1', num: '1', label: 'Plans & ZDR',     labelLong: 'Plans commerciaux & ZDR',          Icon: ShieldCheck,  accent: '#EFF4FF', tint: C.blue },
  { id: 'p2', num: '2', label: 'Chiffrement',     labelLong: 'Chiffrement de bout en bout',      Icon: Lock,         accent: '#D1FAE5', tint: C.success },
  { id: 'p3', num: '3', label: 'Certifications',  labelLong: 'Certifications & audits',          Icon: Award,        accent: '#EDE9FE', tint: '#6D28D9' },
  { id: 'p4', num: '4', label: 'DPA',             labelLong: 'Addendum de traitement (DPA)',     Icon: FileCheck,    accent: '#E0F7FA', tint: '#0EA5B8' },
  { id: 'p5', num: '5', label: 'RGPD',            labelLong: 'Conformité RGPD',                  Icon: Scale,        accent: '#FFEDD5', tint: '#9A3412' },
  { id: 'p6', num: '6', label: 'Accès & SSO',     labelLong: 'SSO, RBAC & gestion des accès',    Icon: Key,          accent: '#FEF3C7', tint: '#92400E' },
  { id: 'p7', num: '7', label: 'Logs audit',      labelLong: 'Logs d’audit & traçabilité',       Icon: ClipboardList, accent: '#FFE4E6', tint: '#BE123C' },
  { id: 'p8', num: '★', label: 'Déploiement',     labelLong: 'Checklist de déploiement',         Icon: Briefcase,    accent: '#F1F5F9', tint: '#475569' },
]

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
            color: tint, marginBottom: 2, display: 'inline-flex', alignItems: 'center', gap: 5,
          }}>{num === '★' ? <><Star size={12} color={tint} fill={tint} style={{ flexShrink: 0 }} />Bonus</> : `Partie ${num}`}</div>
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

function Card({ Icon, title, children, footer, accent }) {
  return (
    <div style={{
      background: '#fff', border: `1px solid ${C.border}`, borderRadius: 12,
      padding: 18, display: 'flex', flexDirection: 'column', gap: 8,
      borderLeft: accent ? `4px solid ${accent}` : undefined,
    }}>
      {Icon && (
        <div style={{
          width: 36, height: 36, borderRadius: 9, background: C.blueLight,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><Icon size={18} color={accent || C.blue} /></div>
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
    : kind === 'success'
    ? { bg: C.successBg, fg: C.success, br: C.successBorder }
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
      padding: '12px 14px', textAlign: 'left',
    }}>{children}</th>
  )
}

function Td({ children, style }) {
  return (
    <td style={{ padding: '12px 14px', color: C.text, verticalAlign: 'middle', fontSize: 13.5, borderBottom: `1px solid ${C.border}`, ...style }}>
      {children}
    </td>
  )
}

function YesIcon() { return <CheckCircle2 size={16} color={C.success} style={{ verticalAlign: 'middle', marginRight: 4 }} /> }
function NoIcon()  { return <XCircle      size={16} color="#DC2626"   style={{ verticalAlign: 'middle', marginRight: 4 }} /> }

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
// MAIN
// ──────────────────────────────────────────────────────────────────────
export default function SecuriteClaudeEntreprise() {
  const active = useActiveSection([...SECTIONS.map(s => s.id), 'recap'])

  return (
    <>
      <SEOHead
        title="Sécurité Claude Enterprise : guide DSI & DPO"
        description="Guide pratique sur la sécurité, la conformité et la gouvernance de Claude Enterprise pour DSI et DPO : ZDR, chiffrement, SOC 2, ISO 27001, ISO 42001, RGPD, DPA, SSO, RBAC, logs d'audit, checklist de déploiement."
        slug="securite-claude-entreprise"
        noindex
      />

      {/* HERO */}
      <section style={{
        background: '#0B1B3A', color: '#fff',
        padding: 'clamp(56px, 9vw, 84px) 24px clamp(64px, 10vw, 92px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(14,165,184,.28) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)',
            color: 'rgba(255,255,255,.92)', fontSize: 13, fontWeight: 600,
            padding: '6px 14px', borderRadius: 20, marginBottom: 24,
          }}>
            <ShieldCheck size={14} color="#5EEAD4" /> Sécurité Enterprise · Guide DSI & DPO 2026
          </div>
          <h1 style={{
            fontFamily: F.head, fontSize: 'clamp(30px, 5vw, 50px)',
            fontWeight: 900, lineHeight: 1.12, marginBottom: 20, letterSpacing: '-0.025em', maxWidth: 820,
          }}>
            Claude Enterprise :<br /><em style={{ color: '#5EEAD4', fontStyle: 'normal' }}>vos données restent vos données.</em>
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(255,255,255,.74)',
            lineHeight: 1.6, maxWidth: 720, marginBottom: 32,
          }}>
            Claude Enterprise est conçu pour un usage professionnel exigeant. Chiffrement bout-en-bout, aucun entraînement sur vos conversations, conformité RGPD et certifications SOC 2, ISO 27001 et ISO 42001. Voici ce que ça signifie concrètement pour votre organisation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              'SOC 2 Type II', 'ISO 27001:2022', 'ISO 42001:2023',
              'RGPD · DPA disponible', 'HIPAA · BAA disponible', 'SSO SAML 2.0 / OIDC',
            ].map(b => (
              <span key={b} style={{
                background: 'rgba(94,234,212,.08)', border: '1px solid rgba(94,234,212,.25)',
                color: '#A7F3D0', fontSize: 12.5, fontWeight: 600,
                padding: '6px 12px', borderRadius: 14,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5EEAD4' }} />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESS NAV */}
      <div style={{
        background: '#fff', borderBottom: `1px solid ${C.border}`,
        position: 'sticky', top: 0, zIndex: 50, overflowX: 'auto',
      }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'flex' }}>
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
                }}>{s.num === '★' ? <Star size={12} color={isActive ? C.blue : C.textMuted} fill={isActive ? C.blue : C.textMuted} /> : s.num}</span>
                {s.label}
              </a>
            )
          })}
        </div>
      </div>

      {/* LAYOUT */}
      <div style={{ background: C.bg, padding: 'clamp(32px, 5vw, 56px) 0' }}>
        <div className="sec-layout" style={{
          maxWidth: 1140, margin: '0 auto', padding: '0 24px',
          display: 'grid', gap: 32,
        }}>
          {/* SIDEBAR */}
          <aside className="sec-sidebar" style={{
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
                  }}>{s.num === '★' ? <Star size={11} color={isActive ? '#fff' : C.textMuted} fill={isActive ? '#fff' : C.textMuted} /> : s.num}</span>
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

            {/* ════════════ PARTIE 1 — PLANS & ZDR ════════════ */}
            <SectionShell section={SECTIONS[0]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 20, marginTop: -16 }}>
                Ce que protègent les plans commerciaux (Team et Enterprise) par rapport au gratuit, et comment fonctionne le Zero Data Retention.
              </p>

              <Callout>
                <strong>Team vs Enterprise en un mot :</strong> sur les deux plans, vos conversations sont sous Conditions Commerciales et aucune n'alimente l'entraînement des modèles. Enterprise ajoute les outils de gouvernance avancés (ZDR, SCIM, logs d'audit SIEM, DPA formel). Pour une équipe sans contraintes réglementaires spécifiques, Team est une bonne base.
              </Callout>

              <div style={{ overflowX: 'auto', margin: '20px 0', borderRadius: 12, border: `1px solid ${C.border}` }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 13.5 }}>
                  <thead><tr>
                    <Th>Plan</Th><Th>Entraînement</Th><Th>DPA</Th><Th>ZDR</Th><Th>Rétention API</Th><Th>Verdict</Th>
                  </tr></thead>
                  <tbody>
                    <tr>
                      <Td><strong>Free</strong></Td>
                      <Td><NoIcon /> Oui (opt-out depuis sept. 2025)</Td>
                      <Td><NoIcon /> Non</Td>
                      <Td><NoIcon /> Non</Td>
                      <Td>N/A</Td>
                      <Td><TagPill kind="gray">Usage personnel</TagPill></Td>
                    </tr>
                    <tr>
                      <Td><strong>Pro / Max</strong></Td>
                      <Td>Opt-out possible</Td>
                      <Td><NoIcon /> Non</Td>
                      <Td><NoIcon /> Non</Td>
                      <Td>N/A</Td>
                      <Td><TagPill kind="gray">Pas adapté données sensibles</TagPill></Td>
                    </tr>
                    <tr>
                      <Td><strong>Team</strong></Td>
                      <Td><YesIcon /> Non. Plan commercial.</Td>
                      <Td>Conditions commerciales, DPA sur demande</Td>
                      <Td><NoIcon /> Non</Td>
                      <Td>N/A</Td>
                      <Td><TagPill kind="gray">Protection de base</TagPill></Td>
                    </tr>
                    <tr style={{ background: C.successBg }}>
                      <Td><strong>Enterprise</strong></Td>
                      <Td><YesIcon /> Jamais.</Td>
                      <Td><YesIcon /> Oui · DPA inclus</Td>
                      <Td><YesIcon /> Oui</Td>
                      <Td>30 jours (configurable)</Td>
                      <Td><TagPill kind="success">Usage professionnel</TagPill></Td>
                    </tr>
                    <tr style={{ background: C.successBg }}>
                      <Td><strong>API Anthropic</strong></Td>
                      <Td><YesIcon /> Jamais. Sans exception.</Td>
                      <Td><YesIcon /> Oui</Td>
                      <Td><YesIcon /> Oui</Td>
                      <Td><strong>7 jours</strong> (depuis sept. 2025)</Td>
                      <Td><TagPill kind="success">Le plus strict du marché</TagPill></Td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Callout kind="success">
                <strong>À retenir :</strong> les plans Team et Enterprise ne forment pas les modèles avec vos données. Enterprise ajoute ZDR, SCIM, logs d'audit SIEM et DPA formel pour les organisations qui en ont besoin.
              </Callout>

              {/* ZDR Block */}
              <div id="zdr" style={{
                background: C.navy, borderRadius: 16, padding: 28, marginTop: 28, color: '#fff',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{
                    width: 40, height: 40, background: 'rgba(14,165,184,.2)', borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Trash2 size={20} color="#5EEAD4" />
                  </div>
                  <div>
                    <div style={{ fontFamily: F.head, fontWeight: 800, fontSize: 17 }}>Zero Data Retention (ZDR)</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', marginTop: 2 }}>Disponible sur Enterprise et API · Activation par avenant</div>
                  </div>
                </div>
                <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.7)', lineHeight: 1.7, marginBottom: 18 }}>
                  Sans ZDR, chaque conversation est temporairement conservée sur les serveurs Anthropic (30 jours sur Enterprise, 7 jours sur l'API). Avec ZDR, la requête est traitée en mémoire vive et effacée immédiatement après la réponse. Aucune trace sur disque. Garantie contractuelle, pas un simple paramètre.
                </p>
                <div style={{
                  background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12, padding: 18,
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20,
                }}>
                  <div>
                    <div style={{ fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>Sans ZDR (défaut Enterprise)</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13.5, color: 'rgba(255,255,255,.7)' }}>
                      <span><span style={{ color: '#FBBF24', marginRight: 6 }}>◉</span>Données conservées 30 jours</span>
                      <span><span style={{ color: '#FBBF24', marginRight: 6 }}>◉</span>Logs accessibles pour la sécurité</span>
                      <span><span style={{ color: '#FBBF24', marginRight: 6 }}>◉</span>Suffisant pour la majorité des usages</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>Avec ZDR</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13.5, color: 'rgba(255,255,255,.85)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}><Check size={14} color="#5EEAD4" strokeWidth={3} style={{ marginRight: 6, flexShrink: 0 }} />Traitement en mémoire uniquement</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}><Check size={14} color="#5EEAD4" strokeWidth={3} style={{ marginRight: 6, flexShrink: 0 }} />Zéro trace après la réponse</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}><Check size={14} color="#5EEAD4" strokeWidth={3} style={{ marginRight: 6, flexShrink: 0 }} />Garantie contractuelle écrite</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}><Check size={14} color="#5EEAD4" strokeWidth={3} style={{ marginRight: 6, flexShrink: 0 }} />Simplifie la conformité RGPD</span>
                    </div>
                  </div>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: 10, padding: '14px 18px', marginTop: 16,
                  fontSize: 13.5, color: 'rgba(255,255,255,.6)', lineHeight: 1.6,
                }}>
                  <strong style={{ color: 'rgba(255,255,255,.85)' }}>À noter :</strong> le ZDR couvre le traitement côté Anthropic. Il s'active via un avenant signé dans votre contrat Enterprise. L'API standard à 7 jours de rétention par défaut depuis septembre 2025 est déjà très courte. Pour la majorité des usages, ces deux niveaux sont largement suffisants.
                </div>
              </div>
            </SectionShell>

            {/* ════════════ PARTIE 2 — CHIFFREMENT ════════════ */}
            <SectionShell section={SECTIONS[1]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 20, marginTop: -16 }}>
                Les données Anthropic sont chiffrées à tous les niveaux, en transit et au repos, selon les standards industriels les plus exigeants.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                <Card Icon={Lock} accent={C.success} title="Données au repos" footer={<TagPill kind="success">AES-256</TagPill>}>
                  Toutes les données stockées sur les serveurs Anthropic sont chiffrées avec l'algorithme AES-256, le standard de référence pour la protection des données sensibles.
                </Card>
                <Card Icon={ShieldCheck} accent={C.blue} title="Données en transit" footer={<TagPill>TLS 1.2+</TagPill>}>
                  Toutes les communications entre votre navigateur ou application et les serveurs Anthropic utilisent TLS 1.2 minimum. La connexion est toujours chiffrée, sans exception.
                </Card>
                <Card Icon={KeyRound} accent="#6D28D9" title="BYOK · Bring Your Own Key" footer={<TagPill kind="gray">H1 2026</TagPill>}>
                  En déploiement depuis le premier semestre 2026. Le BYOK permet aux clients Enterprise de gérer eux-mêmes leurs clés de chiffrement, pour une souveraineté totale sur leurs données.
                </Card>
              </div>
            </SectionShell>

            {/* ════════════ PARTIE 3 — CERTIFICATIONS ════════════ */}
            <SectionShell section={SECTIONS[2]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 20, marginTop: -16 }}>
                Anthropic a complété les audits de sécurité les plus reconnus du secteur. Ces certifications couvrent l'infrastructure Claude, pas seulement les pratiques internes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 24 }}>
                <Card Icon={FileCheck} accent={C.blue} title="SOC 2 Type II" footer={<><TagPill>Sécurité</TagPill><TagPill>Disponibilité</TagPill><TagPill>Confidentialité</TagPill></>}>
                  Audit indépendant validant la sécurité, la disponibilité et la confidentialité de l'infrastructure Claude. Rapport complet disponible sous NDA via le Trust Portal Anthropic pour les clients Enterprise.
                </Card>
                <Card Icon={Globe} accent="#0EA5B8" title="ISO 27001:2022" footer={<TagPill kind="success">Sécurité de l'information</TagPill>}>
                  Certification du système de management de la sécurité de l'information (SMSI). Référence internationale pour la gestion des risques liés aux données et la protection des informations sensibles.
                </Card>
                <Card Icon={BadgeCheck} accent="#6D28D9" title="ISO 42001:2023" footer={<TagPill kind="gray">Gouvernance IA</TagPill>}>
                  Première norme internationale dédiée aux systèmes de management de l'IA. Atteste que les pratiques de développement et de déploiement de Claude respectent un cadre de gouvernance IA rigoureux.
                </Card>
              </div>

              <Callout>
                <strong>Secteur financier &amp; distribution B2B :</strong> la certification SOC 2 Type II est généralement suffisante pour les cas d'usage courants en distribution et en B2B. Pour les échanges de données avec des partenaires grands comptes, le DPA apporte la base contractuelle nécessaire. PCI-DSS : validation cas par cas si paiement impliqué.
              </Callout>
            </SectionShell>

            {/* ════════════ PARTIE 4 — DPA ════════════ */}
            <SectionShell section={SECTIONS[3]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 20, marginTop: -16 }}>
                Le DPA d'Anthropic définit précisément comment vos données personnelles sont traitées, protégées et supprimées. Il est obligatoire pour tout usage professionnel conforme au RGPD.
              </p>

              <Callout kind="success">
                <strong>Comment signer le DPA :</strong> le DPA d'Anthropic est automatiquement incorporé dans les Conditions Commerciales de Service. En acceptant ces conditions, vous acceptez également le DPA. Le document est consultable à l'adresse <Code>anthropic.com/legal/data-processing-addendum</Code>. Note : si vous accédez à Claude via une plateforme tierce, votre utilisation est régie par les conditions du prestataire, pas directement par le DPA Anthropic.
              </Callout>

              <H3>Ce que le DPA garantit</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
                {[
                  ['Traitement limité', "Anthropic ne traite les données que pour fournir et maintenir les services. Aucune utilisation à d'autres fins."],
                  ['Aucune revente', 'Les données personnelles ne sont jamais vendues ni partagées au sens des lois applicables.'],
                  ['Confidentialité des accès', 'Toute personne autorisée à traiter vos données est soumise à une obligation de confidentialité.'],
                  ['Notification de violation', 'Anthropic notifie le client par écrit dans les 48 heures suivant la découverte d\'une violation de sécurité.'],
                  ['Suppression à la résiliation', 'Dans les 30 jours suivant la fin du contrat, Anthropic supprime toutes les copies des données client.'],
                  ['Assistance RGPD', 'Anthropic transmet sans délai toute demande d\'exercice de droits reçue d\'une personne concernée.'],
                ].map(([title, body]) => (
                  <div key={title} style={{ background: C.bg, borderRadius: 10, padding: '12px 16px', border: `1px solid ${C.border}` }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <CheckCircle2 size={16} color={C.success} style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: 13.5, color: C.ink, marginBottom: 3 }}>{title}</strong>
                        <span style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.55 }}>{body}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <H3>Mesures de sécurité contractualisées (Annexe 2)</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                {[
                  ['Contrôle des accès', 'MFA obligatoire pour tous les accès aux systèmes traitant des données clients. Principe du moindre privilège via RBAC. Révocation immédiate à la fin du contrat de travail.'],
                  ['Tests d\'intrusion annuels', 'Évaluations annuelles par des experts externes. Résumé du rapport disponible sur demande client.'],
                  ['Isolation logique des données', 'Les données de chaque client sont logiquement isolées. Aucun client ne peut accéder aux données d\'un autre sans autorisation explicite.'],
                  ['Droit d\'audit', 'Sur demande écrite, le client peut mandater un auditeur externe pour vérifier la conformité. Un audit maximum par période de 12 mois, sauf en cas d\'incident.'],
                ].map(([title, body]) => (
                  <div key={title} style={{ background: C.bg, borderRadius: 10, padding: '14px 16px', border: `1px solid ${C.border}` }}>
                    <strong style={{ display: 'block', fontSize: 13.5, color: C.ink, marginBottom: 4 }}>{title}</strong>
                    <span style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.55 }}>{body}</span>
                  </div>
                ))}
              </div>

              <H3>Transferts internationaux</H3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
                <Card Icon={Globe} title="Union Européenne">
                  Clauses Contractuelles Types (CCT) Module 2 et 3 incorporées. Droit applicable : République d'Irlande. Autorité compétente : superviseur du pays d'établissement de l'exportateur.
                </Card>
                <Card Icon={Globe} title="Royaume-Uni">
                  UK Addendum aux CCT intégré, conforme au UK GDPR et au Data Protection Act 2018. L'addendum approuvé version B.1.0 de l'ICO est applicable.
                </Card>
                <Card Icon={Globe} title="Suisse">
                  Swiss Addendum applicable, conforme à la Loi fédérale sur la protection des données (LPD). Autorité compétente : Préposé fédéral à la protection des données (PFPDT).
                </Card>
              </div>
            </SectionShell>

            {/* ════════════ PARTIE 5 — RGPD ════════════ */}
            <SectionShell section={SECTIONS[4]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 20, marginTop: -16 }}>
                Pour les organisations européennes, Anthropic propose un cadre contractuel complet. Mais la conformité finale reste de votre responsabilité.
              </p>

              <H3 style={{ marginTop: 0 }}>Ce qu'Anthropic fournit</H3>
              <StepList>
                <Step n={1} title="DPA (Data Processing Addendum)">
                  Établit la relation responsable de traitement / sous-traitant requise par le RGPD.
                </Step>
                <Step n={2} title="Clauses contractuelles types (SCCs)">
                  Pour les transferts de données hors EEE, conformes aux décisions d'adéquation de la Commission européenne.
                </Step>
                <Step n={3} title="Droits RGPD">
                  Accès, rectification, suppression, portabilité, opposition. Contact : <Code>privacy@anthropic.com</Code>.
                </Step>
                <Step n={4} title="Résidence des données UE">
                  À confirmer avec votre équipe Anthropic selon les termes de votre contrat.
                </Step>
              </StepList>

              <Callout kind="warning">
                <strong>Point contesté :</strong> l'interface d'opt-in de septembre 2025 (grand bouton « Accepter » pré-coché) a été critiquée comme un dark pattern potentiellement contraire au RGPD. Aucune action réglementaire à ce jour (mai 2026), mais la conformité de l'interface reste contestée.
              </Callout>

              <H3>Ce que vous devez faire</H3>
              <StepList>
                <Step n={1} title="Signer le DPA avec Anthropic">
                  Le demander à votre account manager Anthropic avant tout déploiement impliquant des données personnelles.
                </Step>
                <Step n={2} title="Mettre à jour votre registre des traitements (ROPA)">
                  Anthropic doit figurer comme sous-traitant dans votre Register of Processing Activities.
                </Step>
                <Step n={3} title="Réaliser une DPIA si nécessaire">
                  Pour les traitements à risque élevé (données de santé, surveillance, profilage), une analyse d'impact est obligatoire.
                </Step>
                <Step n={4} title="Former vos collaborateurs">
                  Les employés doivent savoir quelles données peuvent être soumises à Claude et lesquelles ne le peuvent pas.
                </Step>
              </StepList>
            </SectionShell>

            {/* ════════════ PARTIE 6 — SSO ════════════ */}
            <SectionShell section={SECTIONS[5]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 20, marginTop: -16 }}>
                Claude Enterprise s'intègre à vos outils d'identité existants et permet un contrôle granulaire des accès par rôle.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                <Card Icon={Key} accent={C.blue} title="SSO — Single Sign-On" footer={<><TagPill>SAML 2.0</TagPill><TagPill>OIDC</TagPill><TagPill>Okta</TagPill><TagPill>Azure AD</TagPill><TagPill>Google Workspace</TagPill><TagPill>Auth0</TagPill></>}>
                  Authentification centralisée via vos outils d'identité existants. Enforce vos politiques MFA automatiquement. L'intégration passe par WorkOS, le fournisseur technique d'Anthropic pour la vérification de domaine.
                </Card>
                <Card Icon={UsersIcon} accent="#0EA5B8" title="RBAC — Contrôle par rôle" footer={<><TagPill>Propriétaire</TagPill><TagPill>Admin</TagPill><TagPill>Membre</TagPill></>}>
                  Assignez des permissions précises selon le rôle de chaque collaborateur. Principe du moindre privilège : chaque utilisateur accède uniquement aux fonctionnalités dont il a besoin.
                </Card>
                <Card Icon={Building2} accent="#6D28D9" title="Domain Capture" footer={<TagPill>DNS TXT validation</TagPill>}>
                  Les nouveaux comptes créés avec un email de votre domaine sont automatiquement rattachés à votre organisation. Évite les comptes « fantômes » hors périmètre de sécurité.
                </Card>
              </div>

              <Callout>
                <strong>Team vs Enterprise :</strong> les deux plans supportent SSO et JIT. Le SCIM (synchronisation automatique des annuaires) est réservé à Enterprise et aux organisations Console éligibles.
              </Callout>

              <Callout kind="success">
                <strong>Recommandation :</strong> activez le Domain Capture dès le déploiement. Sans lui, des collaborateurs peuvent créer des comptes personnels avec leur email professionnel et utiliser Claude hors du périmètre Enterprise, sans les protections contractuelles de votre organisation.
              </Callout>
            </SectionShell>

            {/* ════════════ PARTIE 7 — LOGS AUDIT ════════════ */}
            <SectionShell section={SECTIONS[6]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 20, marginTop: -16 }}>
                Claude Enterprise enregistre toutes les actions clés dans des logs exportables, intégrables à vos outils SIEM existants.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                <div>
                  <H3 style={{ marginTop: 0 }}>Ce qui est tracé</H3>
                  <StepList>
                    <Step n={1} title="Connexions et sessions">Démarrages de session, utilisation des tokens API.</Step>
                    <Step n={2} title="Appels aux modèles">Métadonnées associées (sans le contenu si ZDR actif).</Step>
                    <Step n={3} title="Événements de fichiers">Upload, téléchargement, suppression.</Step>
                    <Step n={4} title="Modifications de configuration">Changements de paramètres organisationnels.</Step>
                    <Step n={5} title="Activations de compétences">Activation et désactivation par utilisateur.</Step>
                  </StepList>

                  <H3>Rétention &amp; export</H3>
                  <P>
                    Disponibles sur les plans <strong>Team et Enterprise</strong> depuis septembre 2025. Rétention par défaut : <strong>30 jours</strong> dans la console Admin. Export en <Code>JSON</Code> ou <Code>CSV</Code>. Intégration SIEM via Compliance API (Enterprise uniquement).
                  </P>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                    {['Splunk', 'Datadog', 'Grafana', 'Elastic / SIEM'].map(t => (
                      <span key={t} style={{
                        background: C.bg, border: `1px solid ${C.border}`,
                        fontFamily: F.mono, fontSize: 12,
                        padding: '4px 10px', borderRadius: 6,
                      }}>{t}</span>
                    ))}
                  </div>
                  <Callout kind="warning">
                    <strong>Team vs Enterprise sur les logs :</strong> les deux plans ont accès aux logs d'audit de base. Mais l'intégration SIEM en temps réel via la Compliance API et le push automatisé vers Splunk, Datadog ou Elastic sont réservés à Enterprise.
                  </Callout>
                </div>

                <div style={{
                  background: C.navy, borderRadius: 16, padding: 24, alignSelf: 'start',
                }}>
                  <div style={{ fontFamily: F.head, fontWeight: 700, fontSize: 14.5, color: '#fff', marginBottom: 14 }}>Exemple d'entrée de log</div>
                  <pre style={{
                    fontFamily: F.mono, fontSize: 12, lineHeight: 1.9, color: 'rgba(255,255,255,.7)',
                    background: 'transparent', margin: 0, whiteSpace: 'pre-wrap',
                  }}>
{`{
  "event": "model_call",
  "timestamp": "2026-05-13T09:42:11Z",
  "user_id": "usr_...",
  "model": "claude-sonnet-4-6",
  "tokens_input": 1842,
  "tokens_output": 412,
  "zdr_active": true,
  /* contenu non conservé */
}`}
                  </pre>
                </div>
              </div>
            </SectionShell>

            {/* ════════════ PARTIE 8 — DÉPLOIEMENT ════════════ */}
            <SectionShell section={SECTIONS[7]}>
              <p style={{ fontSize: 15.5, color: C.textSoft, lineHeight: 1.6, marginBottom: 20, marginTop: -16 }}>
                Les étapes varient selon votre plan. Commencez par la colonne qui correspond à votre situation.
              </p>

              {/* Plan selector */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0,
                border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden', marginBottom: 32,
              }}>
                <div style={{ background: C.bg, padding: 24, borderRight: `1px solid ${C.border}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                    <TagPill kind="gray">Plan Team</TagPill>
                    <span style={{ fontSize: 12.5, color: C.textMuted }}>5 à 150 membres · 20 $ / siège / mois</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: C.textSoft, lineHeight: 1.65, marginBottom: 14 }}>
                    Bon point de départ. Inclut SSO, Domain Capture et RBAC de base. Pas de ZDR, pas de SCIM, pas de DPA formalisé, pas de logs d'audit avancés.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13 }}>
                    {[
                      [true, 'SSO + Domain Capture + JIT'],
                      [true, 'RBAC (Propriétaire / Admin / Membre)'],
                      [true, 'Conditions commerciales (pas d\'entraînement)'],
                      [false, 'ZDR non disponible'],
                      [false, 'SCIM non disponible'],
                      [false, 'Logs d\'audit avancés non disponibles'],
                      [false, 'DPA formalisé non disponible'],
                    ].map(([ok, txt]) => (
                      <li key={txt} style={{ display: 'flex', gap: 8, color: ok ? C.text : C.textMuted }}>
                        {ok ? <CheckCircle2 size={14} color={C.success} style={{ flexShrink: 0, marginTop: 2 }} /> : <XCircle size={14} color="#DC2626" style={{ flexShrink: 0, marginTop: 2 }} />}
                        {txt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: C.navy, padding: 24, color: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                    <span style={{ background: C.blue, color: '#fff', fontFamily: F.head, fontWeight: 700, fontSize: 12, padding: '3px 12px', borderRadius: 20 }}>Plan Enterprise</span>
                    <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.45)' }}>20+ membres · prix sur devis</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.65)', lineHeight: 1.65, marginBottom: 14 }}>
                    Ajoute les outils de gouvernance complets sur tout ce qui est dans Team. Nécessaire pour les données sensibles ou les obligations contractuelles de non-conservation.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13 }}>
                    {[
                      'Tout ce qui est dans Team',
                      'ZDR (zéro rétention, sur avenant)',
                      'SCIM (synchro automatique annuaire)',
                      'Audit logs + Compliance API',
                      'DPA formalisé inclus',
                    ].map(txt => (
                      <li key={txt} style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,.85)' }}>
                        <CheckCircle2 size={14} color="#5EEAD4" style={{ flexShrink: 0, marginTop: 2 }} />
                        {txt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Étapes Team */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <TagPill kind="gray">Plan Team</TagPill>
                <div style={{ flex: 1, height: 1, background: C.border }} />
                <span style={{ fontSize: 12.5, color: C.textMuted }}>3 étapes avant de commencer</span>
              </div>

              <StepList>
                <Step n={1} title="Activer le SSO et le Domain Capture">
                  Garantit que tous les accès passent par votre annuaire et empêche les collaborateurs de créer des comptes personnels avec leur email professionnel. Configurer le SSO dans <Code>Paramètres › Organisation et accès › Authentification</Code>, puis importer les métadonnées XML SAML 2.0 ou OIDC depuis votre IdP (Okta, Azure AD, Google Workspace, Auth0). Activer <strong>Require SSO for Claude</strong> après test pilote. Activer le Domain Capture dans WorkOS et valider par enregistrement <Code>DNS TXT</Code> (5 min pour votre IT).
                </Step>
                <Step n={2} title="Configurer les rôles (RBAC)">
                  Trois niveaux d'accès sur Team. Propriétaire (accès complet, facturation, direction / DSI / DPO), Admin (gère les utilisateurs et accès, IT / référents IA), Membre (utilise Claude dans le cadre défini). Assigner les rôles dans <Code>Paramètres › Membres</Code> avant d'inviter vos utilisateurs.
                </Step>
                <Step n={3} title="Mettre à jour le registre RGPD (ROPA)">
                  Obligation légale dès que Claude traite des données personnelles. Documenter : sous-traitant Anthropic PBC, durée de conservation 30 jours sur Team sans ZDR, transferts hors UE encadrés par les CCT incluses dans les conditions commerciales. Faire valider la fiche par votre DPO, évaluer si une DPIA est requise, informer les collaborateurs que leurs interactions transitent par Anthropic.
                </Step>
              </StepList>

              <Callout>
                Comptez 2 à 4 heures selon votre IdP pour le SSO. Testez avec un compte pilote avant d'activer <em>Require SSO</em> : un SSO mal configuré peut bloquer tous les accès.
              </Callout>

              {/* Étapes Enterprise */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 14 }}>
                <span style={{ background: C.blue, color: '#fff', fontFamily: F.head, fontWeight: 700, fontSize: 12, padding: '4px 14px', borderRadius: 20 }}>Plan Enterprise</span>
                <div style={{ flex: 1, height: 1, background: C.border }} />
                <span style={{ fontSize: 12.5, color: C.textMuted }}>3 étapes supplémentaires</span>
              </div>

              <StepList>
                <Step n={4} title="Formaliser le DPA (Enterprise uniquement)">
                  Sur Enterprise, le DPA est inclus et formalisé dans le contrat. Il s'active à la souscription. Le transmettre à votre DPO, l'archiver dans votre dossier fournisseurs, l'inscrire dans votre ROPA. Le document est sur <Code>anthropic.com/legal/data-processing-addendum</Code> et inclut les CCT pour l'UE, l'UK Addendum et le Swiss Addendum.
                </Step>
                <Step n={5} title="Activer le ZDR si nécessaire (Enterprise uniquement)">
                  Avenant contractuel, pas un paramètre en self-serve. Contacter Anthropic via votre account manager, demander l'avenant ZDR dans votre contrat Enterprise, une fois signé il s'applique à tous les appels de votre organisation. Pertinent pour les obligations contractuelles de non-conservation client, ou les données commerciales / financières à fort enjeu de confidentialité. Sans ZDR, la rétention de 30 jours reste suffisante pour la majorité des usages.
                </Step>
                <Step n={6} title="Réaliser l'évaluation des risques fournisseur (recommandé Enterprise)">
                  Souvent requise pour les processus d'achat grands comptes. Trust Portal sur <Code>trust.anthropic.com</Code> avec rapport SOC 3 public, rapport SOC 2 Type II sous NDA, certificats ISO 27001 et ISO 42001, liste des sous-traitants. Réponses types questionnaire : AES-256 au repos, TLS 1.2+ en transit, notification de violation 48 heures, tests d'intrusion annuels.
                </Step>
              </StepList>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 24 }}>
                <Card Icon={UsersIcon} title="Former vos équipes">
                  Politique d'usage documentée. Classification des données. Règles sur les données clients et RH. Référent sécurité IA par équipe.
                </Card>
                <Card Icon={Search} title="En continu">
                  Revue des logs d'audit mensuels. Revue des rôles tous les trimestres. Veille sur les mises à jour des CGU. Revue annuelle de la DPIA si applicable.
                </Card>
                <Card Icon={ShieldAlert} accent={C.blue} title="Besoin d'aide">
                  Masteria accompagne les équipes DSI et DPO dans la mise en place de ces étapes, de la configuration technique à la rédaction de la fiche ROPA.
                </Card>
              </div>
            </SectionShell>

            {/* RECAP */}
            <div id="recap" style={{
              background: 'linear-gradient(135deg, #0B1B3A 0%, #1E3050 100%)',
              color: '#fff', borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)',
              marginBottom: 24, scrollMarginTop: 140,
            }}>
              <h2 style={{
                fontFamily: F.head, fontSize: 'clamp(22px, 2.6vw, 26px)', fontWeight: 800,
                marginBottom: 24, letterSpacing: '-0.02em',
              }}>Récapitulatif : les points à retenir</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                <RecapCol title="Plans commerciaux" items={[
                  'Team et Enterprise : pas d\'entraînement sur vos conversations',
                  'Free et Pro / Max : opt-out à activer, pas adapté aux données sensibles',
                  'API Anthropic : la politique la plus stricte du marché',
                  'ZDR sur Enterprise (avenant) et API uniquement',
                ]}/>
                <RecapCol title="Conformité" items={[
                  'SOC 2 Type II, ISO 27001:2022, ISO 42001:2023',
                  'DPA inclus dans les Conditions Commerciales',
                  'CCT pour l\'UE, UK et Swiss Addendums',
                  'Notification de violation contractuelle sous 48h',
                  'Suppression des données 30 jours après résiliation',
                ]}/>
                <RecapCol title="Déploiement" items={[
                  'SSO + Domain Capture en priorité (Team et Enterprise)',
                  'Rôles RBAC assignés avant les invitations',
                  'ROPA mis à jour, DPO consulté, DPIA si traitement à risque',
                  'Logs d\'audit revus mensuellement',
                  'ZDR uniquement si l\'obligation contractuelle le justifie',
                ]}/>
              </div>
            </div>

          </main>
        </div>
      </div>

      <style>{`
        .sec-layout { grid-template-columns: 240px minmax(0, 1fr); }
        @media (max-width: 960px) {
          .sec-layout { grid-template-columns: minmax(0, 1fr) !important; }
          .sec-sidebar { position: static !important; flex-direction: row !important; flex-wrap: wrap !important; }
          .sec-sidebar > a { flex: 0 0 auto; }
        }
      `}</style>
    </>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Sub-helpers
// ──────────────────────────────────────────────────────────────────────

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
