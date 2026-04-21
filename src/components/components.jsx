import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Megaphone, Users, TrendingUp, Briefcase, Scale, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  BadgeCheck, Wallet, MapPin, Menu, X, ChevronDown,
} from 'lucide-react';
import ToolLogo from './ToolLogo';
import { useIsMobile } from '../hooks/useMediaQuery';

const METIER_ICONS_NAV = {
  'formation-ia-marketing':           Megaphone,
  'formation-ia-ressources-humaines': Users,
  'formation-ia-finance':             TrendingUp,
  'formation-ia-commercial':          Briefcase,
  'formation-ia-juridique':           Scale,
  'formation-ia-communication':       Radio,
  'formation-ia-management':          Target,
  'formation-ia-assistante':          CalendarCheck,
  'formation-ia-seo':                 Search,
  'formation-ia-service-client':      Headphones,
  'formation-ia-informatique':        Server,
  'formation-ia-pedagogique':         GraduationCap,
};

function useFade() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

export function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, vis] = useFade();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: `opacity 480ms ${delay}ms ease, transform 480ms ${delay}ms ease`, ...style }}>
      {children}
    </div>
  );
}

export function PrimaryBtn({ children, onClick, style = {}, type = 'button' }) {
  const [h, setH] = useState(false);
  return (
    <button type={type} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 700, background: h ? '#000' : '#1C1C1C', color: '#fff', border: 'none', borderRadius: 8, padding: '13px 26px', cursor: 'pointer', transform: h ? 'scale(1.02)' : 'none', transition: 'all 150ms ease', lineHeight: 1, ...style }}>
      {children}
    </button>
  );
}

export function SecBtn({ children, onClick, style = {}, type = 'button' }) {
  const [h, setH] = useState(false);
  return (
    <button type={type} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600, background: h ? '#EBEBEB' : '#F0F0F0', color: '#1C1C1C', border: 'none', borderRadius: 8, padding: '13px 26px', cursor: 'pointer', transition: 'all 150ms ease', lineHeight: 1, ...style }}>
      {children}
    </button>
  );
}

const OUTILS = [
  { id: 'chatgpt', slug: 'formation-chatgpt-entreprise',  label: 'ChatGPT',           color: '#10a37f', bg: '#d1fae5', desc: 'Productivité et rédaction au quotidien' },
  { id: 'copilot', slug: 'formation-microsoft-copilot',   label: 'Microsoft Copilot', color: '#0078d4', bg: '#dbeafe', desc: 'IA intégrée à Microsoft 365' },
  { id: 'gemini',  slug: 'formation-gemini-entreprise',   label: 'Google Gemini',     color: '#8E75B2', bg: '#ede9fe', desc: 'IA intégrée à Google Workspace' },
  { id: 'claude',  slug: 'formation-claude-entreprise',   label: 'Claude (Anthropic)',color: '#d97706', bg: '#fef3c7', desc: 'Analyse et rédaction de précision' },
  { id: 'mistral', slug: 'formation-mistral-entreprise',   label: 'Mistral AI',        color: '#fa500a', bg: '#fed7aa', desc: "L'IA française souveraine, RGPD native" },
]

const METIERS_NAV = [
  { label: 'Marketing',               slug: 'formation-ia-marketing' },
  { label: 'Ressources Humaines',     slug: 'formation-ia-ressources-humaines' },
  { label: 'Commercial',              slug: 'formation-ia-commercial' },
  { label: 'Finance',                 slug: 'formation-ia-finance' },
  { label: 'Juridique',               slug: 'formation-ia-juridique' },
  { label: 'Communication',           slug: 'formation-ia-communication' },
  { label: 'Management',              slug: 'formation-ia-management' },
  { label: 'Assistante de direction', slug: 'formation-ia-assistante' },
  { label: 'SEO',                     slug: 'formation-ia-seo' },
  { label: 'Service Client',          slug: 'formation-ia-service-client' },
  { label: 'Informatique / DSI',      slug: 'formation-ia-informatique' },
  { label: 'Équipes Pédagogiques',    slug: 'formation-ia-pedagogique' },
]

export function MasteriaHeader() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileFormationsOpen, setMobileFormationsOpen] = useState(false);
  const menuRef = useRef(null);
  const timerRef = useRef(null);

  // Fermer le menu mobile au changement de page
  useEffect(() => {
    setMobileNavOpen(false);
    setMobileFormationsOpen(false);
  }, [location.pathname]);

  // Bloquer le scroll body quand le drawer est ouvert
  useEffect(() => {
    if (mobileNavOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [mobileNavOpen]);

  const handleEnter = () => {
    clearTimeout(timerRef.current);
    setMenuOpen(true);
  };
  const handleLeave = () => {
    timerRef.current = setTimeout(() => setMenuOpen(false), 120);
  };

  const navLinks = [
    { label: 'Conseil IA', path: '/conseil-ia' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const formationsActive = location.pathname.startsWith('/formation');

  return (
    <header style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #EFEFEF', zIndex: 200 }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 32px',
        height: isMobile ? 64 : 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/assets/logo-horizontal.png" alt="Masteria, Centre de formation IA certifié Qualiopi" width="1920" height="1080" fetchpriority="high" decoding="async" style={{ height: isMobile ? 40 : 56, width: 'auto', display: 'block' }} />
        </Link>

        {/* ═════════════ NAV DESKTOP ═════════════ */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>

            {/* ── Formations + méga-menu ── */}
            <div ref={menuRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{ position: 'relative' }}>
              <button
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, background: 'none', border: 'none',
                  cursor: 'pointer', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 5,
                  color: formationsActive ? '#111' : '#717171',
                  borderBottom: formationsActive ? '2px solid #111' : '2px solid transparent',
                  transition: 'all 150ms',
                }}
              >
                Formations
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" style={{ transform: menuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', marginTop: 1 }}>
                  <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {menuOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 16px)', left: '50%', transform: 'translateX(-50%)',
                  background: '#fff', borderRadius: 14, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', border: '1px solid #EFEFEF',
                  padding: '24px 28px', width: 680, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 28,
                  zIndex: 300,
                }}>
                  <div style={{ position: 'absolute', top: -7, left: '50%', transform: 'translateX(-50%)', width: 14, height: 14, background: '#fff', border: '1px solid #EFEFEF', borderRight: 'none', borderBottom: 'none', rotate: '45deg' }} />

                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 12 }}>Par outil IA</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {OUTILS.map(o => (
                        <Link key={o.slug} to={`/${o.slug}`} onClick={() => setMenuOpen(false)}
                          style={{ textDecoration: 'none', borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 10, transition: 'background 120ms' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <div style={{ width: 34, height: 34, borderRadius: 8, background: o.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <ToolLogo tool={o.id} size={20} color={o.color} />
                          </div>
                          <div>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#111' }}>{o.label}</div>
                            <div style={{ fontSize: 11, color: '#9CA3AF' }}>{o.desc}</div>
                          </div>
                        </Link>
                      ))}
                      <Link to="/formation-ia-par-metier" onClick={() => setMenuOpen(false)}
                        style={{ textDecoration: 'none', borderRadius: 8, padding: '8px 10px', marginTop: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#F9FAFB', transition: 'background 120ms' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#F0F0F0'}
                        onMouseLeave={e => e.currentTarget.style.background = '#F9FAFB'}
                      >
                        <div style={{ width: 34, height: 34, borderRadius: 8, background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Target size={16} color="#d97706" strokeWidth={2} />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#111' }}>Toutes les formations</div>
                          <div style={{ fontSize: 11, color: '#9CA3AF' }}>Par métier, outil ou niveau</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 12 }}>Par métier</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px 4px' }}>
                      {METIERS_NAV.map(m => {
                        const Icon = METIER_ICONS_NAV[m.slug];
                        return (
                          <Link key={m.slug} to={`/${m.slug}`} onClick={() => setMenuOpen(false)}
                            style={{ textDecoration: 'none', borderRadius: 7, padding: '5px 8px', display: 'flex', alignItems: 'center', gap: 7, transition: 'background 120ms' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            {Icon && <Icon size={13} color="#6B7280" strokeWidth={2} style={{ flexShrink: 0 }} />}
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500, color: '#374151', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map(item => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: active ? '#111' : '#717171', textDecoration: 'none', borderBottom: active ? '2px solid #111' : '2px solid transparent', padding: '4px 0', transition: 'all 150ms' }}>
                  {item.label}
                </Link>
              );
            })}

            <Link to="/contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, background: '#F97316', color: '#fff', borderRadius: 7, padding: '9px 18px', textDecoration: 'none', transition: 'all 150ms', boxShadow: '0 2px 8px rgba(249,115,22,0.30)' }}>
              Demander un devis
            </Link>
          </nav>
        )}

        {/* ═════════════ BURGER MOBILE ═════════════ */}
        {isMobile && (
          <button
            aria-label={mobileNavOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMobileNavOpen(v => !v)}
            style={{
              background: 'none', border: 'none', padding: 8, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {mobileNavOpen ? <X size={26} color="#0A0A0A" /> : <Menu size={26} color="#0A0A0A" />}
          </button>
        )}
      </div>

      {/* ═════════════ DRAWER MOBILE ═════════════ */}
      {isMobile && mobileNavOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
          background: '#fff', overflowY: 'auto', zIndex: 199,
          padding: '20px 20px 40px',
        }}>
          {/* Formations accordion */}
          <button
            onClick={() => setMobileFormationsOpen(v => !v)}
            style={{
              width: '100%', background: 'none', border: 'none', padding: '16px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 700,
              color: '#0A0A0A', cursor: 'pointer', borderBottom: '1px solid #F3F4F6',
            }}
          >
            Formations
            <ChevronDown size={20} style={{ transform: mobileFormationsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
          </button>
          {mobileFormationsOpen && (
            <div style={{ paddingLeft: 4, paddingBottom: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', margin: '16px 0 8px' }}>Par outil IA</div>
              {OUTILS.map(o => (
                <Link key={o.slug} to={`/${o.slug}`} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 8px',
                  textDecoration: 'none', borderRadius: 8,
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: o.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ToolLogo tool={o.id} size={18} color={o.color} />
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#0A0A0A' }}>{o.label}</span>
                </Link>
              ))}

              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', margin: '16px 0 8px' }}>Par métier</div>
              <Link to="/formation-ia-par-metier" style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 8px',
                textDecoration: 'none', background: '#F9FAFB', borderRadius: 8, marginBottom: 6,
              }}>
                <Target size={16} color="#d97706" />
                <span style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A' }}>Voir toutes les formations métiers</span>
              </Link>
              {METIERS_NAV.map(m => {
                const Icon = METIER_ICONS_NAV[m.slug];
                return (
                  <Link key={m.slug} to={`/${m.slug}`} style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '9px 8px',
                    textDecoration: 'none',
                  }}>
                    {Icon && <Icon size={15} color="#6B7280" />}
                    <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{m.label}</span>
                  </Link>
                );
              })}
            </div>
          )}

          {navLinks.map(item => (
            <Link key={item.path} to={item.path} style={{
              display: 'block', padding: '16px 0',
              fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 700,
              color: '#0A0A0A', textDecoration: 'none',
              borderBottom: '1px solid #F3F4F6',
            }}>
              {item.label}
            </Link>
          ))}

          <Link to="/contact" style={{
            display: 'block', marginTop: 24, textAlign: 'center',
            fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 700,
            background: '#F97316', color: '#fff', borderRadius: 10,
            padding: '16px 22px', textDecoration: 'none',
            boxShadow: '0 6px 18px rgba(249,115,22,0.30)',
          }}>
            Demander un devis
          </Link>
        </div>
      )}

      {/* ═════════════ BANDEAU CONFIANCE ═════════════ */}
      <div style={{
        background: '#FAFAF7',
        borderTop: '1px solid #E5E7EB',
        padding: isMobile ? '8px 12px' : '11px 16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: isMobile ? 14 : 40,
        flexWrap: 'wrap',
      }}>
        {[
          { Icon: BadgeCheck, label: 'Certifié Qualiopi',          shortLabel: 'Qualiopi',     color: '#059669' },
          { Icon: Wallet,     label: 'Finançable OPCO',            shortLabel: 'OPCO',          color: '#2563EB' },
          { Icon: MapPin,     label: 'France · Suisse · Belgique', shortLabel: 'FR · CH · BE', color: '#D97706' },
        ].map(({ Icon, label, shortLabel, color }, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: isMobile ? 5 : 8,
            fontFamily: 'DM Sans, sans-serif',
            fontSize: isMobile ? 11 : 12.5, fontWeight: 700, color: '#0A0A0A',
            letterSpacing: '0.02em',
          }}>
            <span style={{
              width: isMobile ? 18 : 22, height: isMobile ? 18 : 22, borderRadius: 999,
              background: `${color}18`, border: `1px solid ${color}40`,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={isMobile ? 11 : 13} color={color} strokeWidth={2.5} />
            </span>
            {isMobile ? shortLabel : label}
          </span>
        ))}
      </div>
    </header>
  );
}

export function MasteriaFooter() {
  const isMobile = useIsMobile();
  const colHead = { fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginBottom: 14 };
  const lStyle = { display: 'block', color: '#9A9A9A', fontSize: 13, padding: '3px 0', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', transition: 'color 150ms' };
  return (
    <footer style={{ background: '#111', padding: isMobile ? '48px 20px 28px' : '56px 32px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? 28 : 40,
          marginBottom: isMobile ? 32 : 48,
        }}>
          <div>
            <img src="/assets/logo-horizontal.png" alt="Masteria, Centre de formation IA certifié Qualiopi" width="1920" height="1080" loading="lazy" decoding="async" style={{ filter: 'invert(1)', marginBottom: 14, height: 44, width: 'auto', display: 'block' }} />
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.75, maxWidth: 260 }}>Centre de formation certifié Qualiopi. L'IA au service des hommes, pas l'inverse.</p>
          </div>
          <div>
            <div style={colHead}>Formations</div>
            {[
              ['ChatGPT en entreprise', '/formation-chatgpt-entreprise'],
              ['Microsoft Copilot', '/formation-microsoft-copilot'],
              ['Google Gemini', '/formation-gemini-entreprise'],
              ['Formation IA par métier', '/formation-ia-par-metier'],
              ['Toutes les formations', '/formation-ia-par-metier'],
            ].map(([l, path]) => (
              <Link key={l} to={path} style={lStyle}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={colHead}>Masteria</div>
            {[['Conseil IA', '/conseil-ia'], ['À propos', '/a-propos'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, path]) => (
              <Link key={path} to={path} style={lStyle}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={colHead}>Contact</div>
            <div style={{ fontSize: 13, color: '#888', lineHeight: 2 }}>
              <div>mathias.nizan@master-ia.fr</div>
              <div>France · Suisse · Belgique</div>
              <a href="https://master-ia.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: 13, display: 'block', marginTop: 10 }}>master-ia.fr →</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #222', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: '#444' }}>© 2026 Masteria · Fondé par Mathias Nizan</span>
            <Link to="/mentions-legales" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Mentions légales</Link>
            <Link to="/politique-de-confidentialite" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Confidentialité</Link>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Qualiopi', 'OPCO'].map(b => (
              <span key={b} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: '#222', color: '#666', padding: '3px 10px', borderRadius: 999 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function TrainingCard({ tag, title, desc, price, unit, color, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: h ? '0 8px 32px rgba(0,0,0,0.10)' : '0 2px 12px rgba(0,0,0,0.06)', transform: h ? 'translateY(-3px)' : 'none', transition: 'all 200ms ease', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 5, background: color || '#E8E8E8' }} />
      <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A9A9A', marginBottom: 8 }}>{tag}</div>
        <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#111', lineHeight: 1.3, marginBottom: 10, flex: 1 }}>{title}</div>
        <p style={{ fontSize: 13, color: '#717171', lineHeight: 1.55, marginBottom: 16 }}>{desc}</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#111', whiteSpace: 'nowrap' }}>{price}</span>
          <span style={{ fontSize: 12, color: '#9A9A9A' }}>{unit}</span>
        </div>
      </div>
    </div>
  );
}

export function StatsBar() {
  const stats = [
    { num: '+500', label: 'Professionnels formés' },
    { num: '98%', label: 'Satisfaction' },
    { num: '100%', label: 'Finançable OPCO' },
    { num: '+6h', label: 'Productivité / semaine' },
    { num: '3', label: 'Pays couverts' },
  ];
  return (
    <section style={{ background: '#1C1C1C', padding: 'clamp(28px, 5vw, 40px) clamp(16px, 4vw, 32px)' }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: 'clamp(16px, 3vw, 24px)',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: 12, color: '#9A9A9A', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
