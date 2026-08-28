import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import {
  Megaphone, Users, TrendingUp, Briefcase, Radio,
  Target, CalendarCheck, Search, Headphones, Server, GraduationCap,
  BadgeCheck, Wallet, MapPin, Menu, X, ChevronDown, ShoppingCart, Zap, Sparkles,
  Lightbulb, Compass, Code2, Wrench, Workflow, Bot, Building2, Award, Database, Cpu, Boxes,
  Newspaper, Library, Info,
  HardHat, ClipboardList, Landmark, Home, Store, HeartPulse, Scale, Calculator, Umbrella, Hammer, Plane,
} from 'lucide-react';
import ToolLogo from './ToolLogo';
import { useIsMobile, useMediaQuery } from '../hooks/useMediaQuery';

const METIER_ICONS_NAV = {
  'formation-ia-marketing':           Megaphone,
  'formation-ia-ressources-humaines': Users,
  'formation-ia-finance':             TrendingUp,
  'formation-ia-commercial':          Briefcase,
  'formation-ia-communication':       Radio,
  'formation-ia-management':          Target,
  'formation-ia-dirigeants':          Award,
  'formation-ia-assistante':          CalendarCheck,
  'formation-ia-seo':                 Search,
  'formation-ia-service-client':      Headphones,
  'formation-ia-informatique':        Server,
  'formation-ia-pedagogique':         GraduationCap,
  'formation-ia-achats':              ShoppingCart,
  'formation-ia-qse':                 HardHat,
  'formation-ia-gestion-de-projet':   ClipboardList,
  'formation-ia-marche-public':       Landmark,
  'formation-ia-immobilier':          Home,
  'formation-ia-commerce':            Store,
  'formation-ia-sante':               HeartPulse,
  'formation-ia-juridique':           Scale,
  'formation-ia-comptabilite':        Calculator,
  'formation-ia-assurance':           Umbrella,
  'formation-ia-btp':                 Hammer,
  'formation-ia-tourisme':            Plane,
  'formation-ia-transverse':          Sparkles,
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
  { id: 'chatgpt',      slug: 'formation-chatgpt',                  label: 'ChatGPT',           color: '#10a37f', bg: '#d1fae5', desc: 'Productivité et rédaction au quotidien' },
  { id: 'copilot',      slug: 'formation-microsoft-copilot',        label: 'Microsoft Copilot', color: '#0078d4', bg: '#dbeafe', desc: 'IA intégrée à Microsoft 365' },
  { id: 'gemini',       slug: 'formation-gemini-entreprise',        label: 'Google Gemini',     color: '#8E75B2', bg: '#ede9fe', desc: 'IA intégrée à Google Workspace' },
  { id: 'claude',       slug: 'formation-claude-ia',                label: 'Claude (Anthropic)',color: '#d97706', bg: '#fef3c7', desc: 'Analyse et rédaction de précision' },
  { id: 'mistral',      slug: 'formation-mistral-ai',               label: 'Mistral AI',        color: '#fa500a', bg: '#fed7aa', desc: "L'IA française souveraine, RGPD native" },
  { id: 'multi-outils', slug: 'formation-multi-outils',              label: 'Multi-outils',     color: '#6366f1', bg: '#e0e7ff', desc: 'Comparer les 5 IA sur vos cas réels' },
]

const METIERS_NAV = [
  { label: 'Marketing',               slug: 'formation-ia-marketing' },
  { label: 'Ressources Humaines',     slug: 'formation-ia-ressources-humaines' },
  { label: 'Commercial',              slug: 'formation-ia-commercial' },
  { label: 'Finance',                 slug: 'formation-ia-finance' },
  { label: 'Communication',           slug: 'formation-ia-communication' },
  { label: 'Management',              slug: 'formation-ia-management' },
  { label: 'Dirigeants & CODIR',      slug: 'formation-ia-dirigeants' },
  { label: 'Assistanat de direction', slug: 'formation-ia-assistante' },
  { label: 'SEO',                     slug: 'formation-ia-seo' },
  { label: 'Service Client',          slug: 'formation-ia-service-client' },
  { label: 'Informatique / DSI',      slug: 'formation-ia-informatique' },
  { label: 'Équipes Pédagogiques',    slug: 'formation-ia-pedagogique' },
  { label: 'Achats',                  slug: 'formation-ia-achats' },
  { label: 'QSE / HSE',               slug: 'formation-ia-qse' },
  { label: 'Gestion de projet',       slug: 'formation-ia-gestion-de-projet' },
  { label: 'Marchés publics',         slug: 'formation-ia-marche-public' },
  { label: 'Immobilier',              slug: 'formation-ia-immobilier' },
  { label: 'Commerce & e-commerce',   slug: 'formation-ia-commerce' },
  { label: 'Santé & médico-social',   slug: 'formation-ia-sante' },
  { label: 'Juridique',               slug: 'formation-ia-juridique' },
  { label: 'Comptabilité',            slug: 'formation-ia-comptabilite' },
  { label: 'Assurance',               slug: 'formation-ia-assurance' },
  { label: 'BTP & construction',      slug: 'formation-ia-btp' },
  { label: 'Tourisme & hôtellerie',   slug: 'formation-ia-tourisme' },
  { label: 'Multi-métier',            slug: 'formation-ia-transverse' },
]

// ── Données méga-menu "Conseil & Développement" ──
const CONSEIL_COLS = [
  {
    head: 'Conseil & stratégie',
    items: [
      { label: 'Diagnostic IA',         desc: 'Audit + feuille de route en 1 journée', slug: 'diagnostic-ia',                Icon: Search },
      { label: 'Audit IA',              desc: 'Maturité, conformité, plan d\'action',   slug: 'audit-ia',                     Icon: Target },
      { label: 'Accompagnement IA',     desc: 'Du cadrage à l\'adoption, dans la durée', slug: 'accompagnement-ia',           Icon: TrendingUp },
      { label: 'Cabinet de conseil IA', desc: 'Cadrage, gouvernance et trajectoire IA', slug: 'conseil-intelligence-artificielle', Icon: Lightbulb },
      { label: 'Conseil stratégie IA',  desc: 'Feuille de route et priorisation des cas', slug: 'conseil-strategie-ia',            Icon: Compass },
      { label: 'Conseil data & IA',     desc: 'Données prêtes pour vos projets IA',      slug: 'conseil-data-ia',              Icon: Database },
      { label: 'Gouvernance & AI Act',  desc: 'Conformité et cadrage de vos usages IA',  slug: 'gouvernance-ia',               Icon: BadgeCheck },
      { label: 'Méthode & engagement',  desc: 'Forfait, régie, développeurs sur site',  slug: 'methode-projet-ia',            Icon: Users },
    ],
  },
  {
    head: 'Développement sur mesure',
    items: [
      { label: 'Agence développement IA', desc: 'Conception et intégration sur mesure', slug: 'agence-developpement-ia', Icon: Code2 },
      { label: 'Solutions IA sur mesure', desc: 'Copilotes, agents, RAG, automatisations', slug: 'solutions-ia',         Icon: Boxes },
      { label: 'Outils IA sur mesure',    desc: 'Applications et copilotes métier',     slug: 'outils-ia-sur-mesure',  Icon: Wrench },
      { label: 'Agence automatisation IA',desc: 'Workflows et automatisations métier',   slug: 'agence-automatisation-ia', Icon: Workflow },
      { label: 'Agents IA en entreprise', desc: 'Agents autonomes et copilotes',         slug: 'agents-ia-entreprise',  Icon: Bot },
      { label: 'Prix d\'un projet IA',     desc: 'Fourchettes de prix et modèles de coût', slug: 'prix-projet-ia',       Icon: Wallet },
    ],
  },
  {
    head: 'Secteurs & guides',
    items: [
      { label: 'IA par secteur',          desc: 'Banque, industrie, santé, juridique…', slug: 'ia-secteurs',          Icon: Briefcase },
      { label: 'IA générative en entreprise', desc: 'Du cas d\'usage au déploiement',    slug: 'ia-generative-entreprise', Icon: Sparkles },
      { label: 'Cas d\'usage de l\'IA',    desc: '20 exemples concrets par fonction',    slug: 'cas-usage-ia-entreprise', Icon: Target },
      { label: 'Agence IA',               desc: 'Équipe basée à Lyon, France entière', slug: 'agence-ia',           Icon: Building2 },
      { label: 'Agence IA marketing',     desc: 'IA appliquée au marketing et au growth', slug: 'agence-ia-marketing', Icon: Megaphone },
      { label: 'Agence SEO IA',           desc: 'Référencement Google et visibilité dans les IA', slug: 'agence-seo-ia', Icon: Search },
      { label: 'Automatisation IA · guide', desc: 'Comprendre et cadrer vos automatisations', slug: 'automatisation-ia', Icon: Workflow },
    ],
  },
]

const VEILLE_LINKS = [
  { label: 'La une',                  desc: "L'édition du jour",               path: '/veille-ia',              Icon: Newspaper },
  { label: 'Toutes les publications', desc: 'Historique et recherche',         path: '/veille-ia/publications', Icon: Library },
  { label: 'À propos',                desc: 'Méthode et politique éditoriale', path: '/veille-ia/a-propos',      Icon: Info },
  { label: 'Automatiser sa veille',   desc: 'Méthode et outils',               path: '/automatiser-sa-veille-ia', Icon: Workflow },
  { label: 'Outils de veille',        desc: 'Le comparatif',                   path: '/outils-veille-ia',       Icon: Wrench },
  { label: 'Veille concurrentielle',  desc: 'Surveiller ses concurrents',      path: '/veille-concurrentielle-ia', Icon: Target },
];

// Déroulant « À propos » : regroupe les pages d'identité et de preuve. Les études
// de cas étaient jusque-là accessibles depuis le seul pied de page, alors que
// c'est la page que les prospects cherchent avant de nous contacter.
const APROPOS_LINKS = [
  { label: 'À propos de Masteria', desc: 'Le centre de formation et le cabinet', path: '/centre-formation-ia-entreprise', Icon: Info },
  { label: 'Études de cas IA',     desc: 'Trois déploiements, résultats mesurés', path: '/etudes-de-cas-ia',                Icon: BadgeCheck },
  { label: 'Certification Qualiopi', desc: 'Portée et financement OPCO',         path: '/formation-ia-qualiopi',            Icon: Award },
  { label: 'Financement',          desc: 'OPCO et plan de développement',        path: '/financement-formation-ia',         Icon: Wallet },
];

export function MasteriaHeader() {
  const location = useLocation();
  // La nav desktop réclame ~950 px (logo + 6 entrées + CTA). En dessous de 1024 px
  // elle débordait de l'écran et venait coller le logo (scroll horizontal parasite
  // entre 768 et 1023 px) : on bascule sur le menu burger dès cette largeur.
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const [conseilOpen, setConseilOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileFormationsOpen, setMobileFormationsOpen] = useState(false);
  const [mobileConseilOpen, setMobileConseilOpen] = useState(false);
  const [veilleOpen, setVeilleOpen] = useState(false);
  const [mobileVeilleOpen, setMobileVeilleOpen] = useState(false);
  const [aproposOpen, setAproposOpen] = useState(false);
  const [mobileAproposOpen, setMobileAproposOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(104);
  const menuRef = useRef(null);
  const conseilRef = useRef(null);
  const timerRef = useRef(null);
  const conseilTimerRef = useRef(null);
  const veilleRef = useRef(null);
  const veilleTimerRef = useRef(null);
  const aproposRef = useRef(null);
  const aproposTimerRef = useRef(null);
  const headerRef = useRef(null);

  // Mesure la hauteur réelle du header (nav + bandeau confiance)
  useEffect(() => {
    if (!headerRef.current) return;
    const update = () => setHeaderHeight(headerRef.current.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  // Fermer le menu mobile au changement de page
  useEffect(() => {
    setMobileNavOpen(v => (v ? false : v));
    setMobileFormationsOpen(v => (v ? false : v));
    setMobileConseilOpen(v => (v ? false : v));
    setMobileVeilleOpen(v => (v ? false : v));
    setMobileAproposOpen(v => (v ? false : v));
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

  const handleConseilEnter = () => {
    clearTimeout(conseilTimerRef.current);
    setConseilOpen(true);
  };
  const handleConseilLeave = () => {
    conseilTimerRef.current = setTimeout(() => setConseilOpen(false), 120);
  };

  const handleVeilleEnter = () => {
    clearTimeout(veilleTimerRef.current);
    setVeilleOpen(true);
  };
  const handleVeilleLeave = () => {
    veilleTimerRef.current = setTimeout(() => setVeilleOpen(false), 120);
  };
  const handleAproposEnter = () => {
    clearTimeout(aproposTimerRef.current);
    setAproposOpen(true);
  };
  const handleAproposLeave = () => {
    aproposTimerRef.current = setTimeout(() => setAproposOpen(false), 120);
  };

  // « À propos » et « Financement » sont désormais dans le déroulant APROPOS_LINKS.
  const navLinks = [
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const formationsActive = location.pathname.startsWith('/formation') || location.pathname === '/acculturation-ia' || location.pathname === '/coaching-ia';
  const CONSEIL_PATHS = [
    '/conseil-intelligence-artificielle', '/conseil-strategie-ia',
    '/agence-developpement-ia', '/outils-ia-sur-mesure', '/agence-automatisation-ia',
    '/agents-ia-entreprise', '/agence-ia', '/agence-ia-marketing', '/agence-seo-ia',
    '/automatisation-ia', '/meilleure-agence-ia', '/meilleur-cabinet-conseil-ia',
    '/gouvernance-ia', '/prix-projet-ia', '/ia-generative-entreprise', '/cas-usage-ia-entreprise',
    '/audit-ia', '/audit-seo-ia', '/audit-geo-ia', '/accompagnement-ia', '/prestataire-ia',
  ];
  const conseilActive = CONSEIL_PATHS.includes(location.pathname);
  const veilleActive = location.pathname.startsWith('/veille-ia');
  const aproposActive = APROPOS_LINKS.some(l => l.path === location.pathname);

  return (
    <header ref={headerRef} style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid #EFEFEF', zIndex: 200, transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 32px',
        height: isMobile ? 64 : 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: isMobile ? 12 : 48, // gouttière minimale entre le logo et la nav
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <picture>
            <source
              type="image/webp"
              srcSet="/assets/logo-horizontal@400w.webp 400w"
              sizes="(max-width: 768px) 120px, 160px"
            />
            <source
              type="image/jpeg"
              srcSet="/assets/logo-horizontal@400w.jpg 400w"
              sizes="(max-width: 768px) 120px, 160px"
            />
            <img
              src="/assets/logo-horizontal@400w.jpg"
              alt="Masteria, Centre de formation IA certifié Qualiopi"
              width="400" height="225"
              fetchPriority="high" decoding="sync"
              style={{ height: isMobile ? 40 : 56, width: 'auto', display: 'block' }}
            />
          </picture>
        </Link>

        {/* ═════════════ NAV DESKTOP ═════════════ */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }}>

            {/* ── Formations + méga-menu ── */}
            <div ref={menuRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{ position: 'relative' }}>
              <button
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, background: 'none', border: 'none',
                  cursor: 'pointer', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap',
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
                  position: 'fixed', top: 84, left: '50%', transform: 'translateX(-50%)',
                  background: '#fff', borderRadius: 14, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', border: '1px solid #EFEFEF',
                  padding: '20px 24px 24px', width: 940, maxWidth: 'calc(100vw - 32px)',
                  zIndex: 300,
                }}>

                  {/* Bannière "Toutes les formations" */}
                  <Link to="/formation-intelligence-artificielle" onClick={() => setMenuOpen(false)}
                    style={{ textDecoration: 'none', borderRadius: 10, padding: '12px 14px', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12, background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', border: '1px solid #FCD34D', transition: 'transform 120ms' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Target size={18} color="#d97706" strokeWidth={2.2} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 800, color: '#111' }}>Catalogue complet · plus de 100 formations</div>
                      <div style={{ fontSize: 12, color: '#92400E' }}>Filtrer par outil et métier pour trouver la formation adaptée</div>
                    </div>
                    <span style={{ fontSize: 16, color: '#92400E', fontWeight: 700 }}>→</span>
                  </Link>

                  <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 280px', gap: 24 }}>
                  {/* COL 1 — Par outil IA */}
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Par outil IA</p>
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
                            <div style={{ fontSize: 11, color: '#6B7280' }}>{o.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* COL 2 — Par métier */}
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Par métier</p>
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

                  {/* COL 3 — Ateliers Sprint IA */}
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Ateliers & thématiques</p>
                    <Link to="/formation-sprint-ia" onClick={() => setMenuOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', padding: '12px 14px', borderRadius: 10, background: 'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)', border: '1px solid #FDBA74', transition: 'transform 120ms' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                    >
                      <div style={{ width: 38, height: 38, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Zap size={18} color="#2563EB" strokeWidth={2.4} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 800, color: '#7C2D12' }}>Sprints IA · 3 h</div>
                        <div style={{ fontSize: 11.5, color: '#9A3412' }}>Formats courts pour acculturer une équipe</div>
                      </div>
                      <span style={{ fontSize: 16, color: '#9A3412', fontWeight: 700 }}>→</span>
                    </Link>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 10 }}>
                      {[
                        ['Formation IA en entreprise', '/formation-ia-entreprise'],
                        ['Formation agents IA', '/formation-agents-ia'],
                        ['Formation automatisation IA', '/formation-automatisation-ia'],
                        ['Formation prompt engineering', '/formation-prompt-engineering'],
                        ['Formation vibe coding', '/formation-vibe-coding'],
                        ['Formation Claude Code', '/formation-claude-code'],
                        ['Formation AI Act', '/formation-ai-act'],
                        ['Formation IA COMEX', '/formation-ia-comex'],
                        ['Acculturation IA (entreprise)', '/acculturation-ia'],
                        ['Coaching IA individuel', '/coaching-ia'],
                      ].map(([l, path]) => (
                        <Link key={path} to={path} onClick={() => setMenuOpen(false)}
                          style={{ textDecoration: 'none', borderRadius: 7, padding: '7px 10px', fontFamily: 'DM Sans, sans-serif', fontSize: 12.5, fontWeight: 600, color: '#374151', transition: 'background 120ms' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          {l}
                        </Link>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Conseil & Développement + méga-menu ── */}
            <div ref={conseilRef} onMouseEnter={handleConseilEnter} onMouseLeave={handleConseilLeave} style={{ position: 'relative' }}>
              <button
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, background: 'none', border: 'none',
                  cursor: 'pointer', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap',
                  color: conseilActive ? '#111' : '#717171',
                  borderBottom: conseilActive ? '2px solid #111' : '2px solid transparent',
                  transition: 'all 150ms',
                }}
              >
                Conseil &amp; Développement
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" style={{ transform: conseilOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', marginTop: 1 }}>
                  <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {conseilOpen && (
                <div style={{
                  position: 'fixed', top: 84, left: '50%', transform: 'translateX(-50%)',
                  background: '#fff', borderRadius: 14, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', border: '1px solid #EFEFEF',
                  padding: '20px 24px 24px', width: 880, maxWidth: 'calc(100vw - 32px)',
                  zIndex: 300,
                }}>

                  {/* Bannière "Agence IA" */}
                  <Link to="/agence-ia" onClick={() => setConseilOpen(false)}
                    style={{ textDecoration: 'none', borderRadius: 10, padding: '12px 14px', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12, background: '#DBEAFE', border: '1px solid #BFDBFE', transition: 'transform 120ms' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Cpu size={18} color="#2563EB" strokeWidth={2.2} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 800, color: '#111' }}>Agence IA · conseil, développement &amp; automatisation</div>
                      <div style={{ fontSize: 12, color: '#1E40AF' }}>Du cadrage stratégique à la mise en production de vos outils IA</div>
                    </div>
                    <span style={{ fontSize: 16, color: '#1E40AF', fontWeight: 700 }}>→</span>
                  </Link>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                    {CONSEIL_COLS.map(col => (
                      <div key={col.head}>
                        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 12 }}>{col.head}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {col.items.map(it => (
                            <Link key={it.slug} to={`/${it.slug}`} onClick={() => setConseilOpen(false)}
                              style={{ textDecoration: 'none', borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 10, transition: 'background 120ms' }}
                              onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                            >
                              <div style={{ width: 34, height: 34, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <it.Icon size={18} color="#2563EB" strokeWidth={2.2} />
                              </div>
                              <div>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#111' }}>{it.label}</div>
                                <div style={{ fontSize: 11, color: '#6B7280' }}>{it.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Veille IA + déroulant ── */}
            <div ref={veilleRef} onMouseEnter={handleVeilleEnter} onMouseLeave={handleVeilleLeave} style={{ position: 'relative' }}>
              <Link to="/veille-ia"
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
                  cursor: 'pointer', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none', whiteSpace: 'nowrap',
                  color: veilleActive ? '#111' : '#717171',
                  borderBottom: veilleActive ? '2px solid #111' : '2px solid transparent',
                  transition: 'all 150ms',
                }}
              >
                Veille IA
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" style={{ transform: veilleOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', marginTop: 1 }}>
                  <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {veilleOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)',
                  background: '#fff', borderRadius: 14, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', border: '1px solid #EFEFEF',
                  padding: 10, width: 300, zIndex: 300,
                }}>
                  {VEILLE_LINKS.map(v => (
                    <Link key={v.path} to={v.path} onClick={() => setVeilleOpen(false)}
                      style={{ textDecoration: 'none', borderRadius: 8, padding: '9px 10px', display: 'flex', alignItems: 'center', gap: 10, transition: 'background 120ms' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <v.Icon size={17} color="#2563EB" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#111' }}>{v.label}</div>
                        <div style={{ fontSize: 11, color: '#6B7280' }}>{v.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ── À propos + déroulant (identité et preuves) ── */}
            <div ref={aproposRef} onMouseEnter={handleAproposEnter} onMouseLeave={handleAproposLeave} style={{ position: 'relative' }}>
              <Link to="/centre-formation-ia-entreprise"
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
                  cursor: 'pointer', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none', whiteSpace: 'nowrap',
                  color: aproposActive ? '#111' : '#717171',
                  borderBottom: aproposActive ? '2px solid #111' : '2px solid transparent',
                  transition: 'all 150ms',
                }}
              >
                À propos
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" style={{ transform: aproposOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', marginTop: 1 }}>
                  <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {aproposOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)',
                  background: '#fff', borderRadius: 14, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', border: '1px solid #EFEFEF',
                  padding: 10, width: 300, zIndex: 300,
                }}>
                  {APROPOS_LINKS.map(v => (
                    <Link key={v.path} to={v.path} onClick={() => setAproposOpen(false)}
                      style={{ textDecoration: 'none', borderRadius: 8, padding: '9px 10px', display: 'flex', alignItems: 'center', gap: 10, transition: 'background 120ms' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <v.Icon size={17} color="#2563EB" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#111' }}>{v.label}</div>
                        <div style={{ fontSize: 11, color: '#6B7280' }}>{v.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map(item => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: active ? '#111' : '#717171', textDecoration: 'none', borderBottom: active ? '2px solid #111' : '2px solid transparent', padding: '4px 0', transition: 'all 150ms', whiteSpace: 'nowrap' }}>
                  {item.label}
                </Link>
              );
            })}

            <Link to="/contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 700, background: '#2563EB', color: '#fff', borderRadius: 7, padding: '10px 20px', textDecoration: 'none', transition: 'all 150ms', boxShadow: '0 2px 8px rgba(37,99,235,0.30)', whiteSpace: 'nowrap', textAlign: 'center' }}>
              Demander un devis
            </Link>
          </nav>
        )}

        {/* ═════════════ CTA + BURGER MOBILE ═════════════ */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link to="/contact" style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 12.5, fontWeight: 700,
              background: '#2563EB', color: '#fff', borderRadius: 7,
              padding: '8px 14px', textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(37,99,235,0.30)',
              whiteSpace: 'nowrap',
            }}>
              Devis
            </Link>
            <button
              aria-label={mobileNavOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setMobileNavOpen(v => !v)}
              style={{
                background: 'none', border: 'none', padding: 6, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {mobileNavOpen ? <X size={26} color="#0A0A0A" /> : <Menu size={26} color="#0A0A0A" />}
            </button>
          </div>
        )}
      </div>

      {/* ═════════════ DRAWER MOBILE (portal hors du header pour éviter le backdrop-filter) ═════════════ */}
      {isMobile && mobileNavOpen && createPortal(
        <div style={{
          position: 'fixed', top: headerHeight, left: 0, right: 0, bottom: 0,
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
              {/* Catalogue complet (bannière en haut) */}
              <Link to="/formation-intelligence-artificielle" style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
                border: '1px solid #FCD34D',
                borderRadius: 10, margin: '16px 0 8px',
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Target size={17} color="#d97706" strokeWidth={2.2} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#111' }}>Catalogue complet · plus de 100 formations</div>
                  <div style={{ fontSize: 12, color: '#92400E' }}>Filtrer par outil et métier</div>
                </div>
                <span style={{ color: '#92400E', fontWeight: 700 }}>→</span>
              </Link>

              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', margin: '16px 0 8px' }}>Par outil IA</div>
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

              <Link to="/formation-sprint-ia" style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)',
                border: '1px solid #FDBA74',
                borderRadius: 10, margin: '16px 0 8px',
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Zap size={17} color="#2563EB" strokeWidth={2.4} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#7C2D12' }}>Sprints IA · 3 h</div>
                  <div style={{ fontSize: 12, color: '#9A3412' }}>Ateliers courts pour acculturer</div>
                </div>
                <span style={{ color: '#9A3412', fontWeight: 700 }}>→</span>
              </Link>

              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', margin: '16px 0 8px' }}>Thématiques & formats</div>
              {[
                ['Formation IA en entreprise', '/formation-ia-entreprise'],
                ['Formation agents IA', '/formation-agents-ia'],
                ['Formation automatisation IA', '/formation-automatisation-ia'],
                ['Formation prompt engineering', '/formation-prompt-engineering'],
                ['Formation vibe coding', '/formation-vibe-coding'],
                ['Formation Claude Code', '/formation-claude-code'],
                ['Formation AI Act', '/formation-ai-act'],
                ['Formation IA COMEX', '/formation-ia-comex'],
                ['Acculturation IA', '/acculturation-ia'],
                ['Coaching IA individuel', '/coaching-ia'],
              ].map(([l, path]) => (
                <Link key={path} to={path} style={{ display: 'block', padding: '9px 8px', textDecoration: 'none', fontSize: 14, color: '#374151', fontWeight: 500 }}>{l}</Link>
              ))}

              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', margin: '16px 0 8px' }}>Par métier</div>
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

          {/* Conseil & Développement accordion */}
          <button
            onClick={() => setMobileConseilOpen(v => !v)}
            style={{
              width: '100%', background: 'none', border: 'none', padding: '16px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 700,
              color: '#0A0A0A', cursor: 'pointer', borderBottom: '1px solid #F3F4F6',
            }}
          >
            Conseil &amp; Développement
            <ChevronDown size={20} style={{ transform: mobileConseilOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
          </button>
          {mobileConseilOpen && (
            <div style={{ paddingLeft: 4, paddingBottom: 12 }}>
              {/* Bannière Agence IA */}
              <Link to="/agence-ia" style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                textDecoration: 'none',
                background: '#DBEAFE',
                border: '1px solid #BFDBFE',
                borderRadius: 10, margin: '16px 0 8px',
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Cpu size={17} color="#2563EB" strokeWidth={2.2} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#111' }}>Agence IA · conseil &amp; dev</div>
                  <div style={{ fontSize: 12, color: '#1E40AF' }}>Du cadrage à la mise en production</div>
                </div>
                <span style={{ color: '#1E40AF', fontWeight: 700 }}>→</span>
              </Link>

              {CONSEIL_COLS.map(col => (
                <div key={col.head}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', margin: '16px 0 8px' }}>{col.head}</div>
                  {col.items.map(it => (
                    <Link key={it.slug} to={`/${it.slug}`} style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '10px 8px',
                      textDecoration: 'none', borderRadius: 8,
                    }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <it.Icon size={17} color="#2563EB" strokeWidth={2.2} />
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#0A0A0A' }}>{it.label}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Veille IA accordion */}
          <button
            onClick={() => setMobileVeilleOpen(v => !v)}
            style={{
              width: '100%', background: 'none', border: 'none', padding: '16px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 700,
              color: '#0A0A0A', cursor: 'pointer', borderBottom: '1px solid #F3F4F6',
            }}
          >
            Veille IA
            <ChevronDown size={20} style={{ transform: mobileVeilleOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
          </button>
          {mobileVeilleOpen && (
            <div style={{ paddingLeft: 4, paddingBottom: 12 }}>
              {VEILLE_LINKS.map(v => (
                <Link key={v.path} to={v.path} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 8px',
                  textDecoration: 'none', borderRadius: 8,
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <v.Icon size={17} color="#2563EB" strokeWidth={2.2} />
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#0A0A0A' }}>{v.label}</span>
                </Link>
              ))}
            </div>
          )}

          {/* À propos accordion */}
          <button
            onClick={() => setMobileAproposOpen(v => !v)}
            style={{
              width: '100%', background: 'none', border: 'none', padding: '16px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 700,
              color: '#0A0A0A', cursor: 'pointer', borderBottom: '1px solid #F3F4F6',
            }}
          >
            À propos
            <ChevronDown size={20} style={{ transform: mobileAproposOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
          </button>
          {mobileAproposOpen && (
            <div style={{ paddingLeft: 4, paddingBottom: 12 }}>
              {APROPOS_LINKS.map(v => (
                <Link key={v.path} to={v.path} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 8px',
                  textDecoration: 'none', borderRadius: 8,
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <v.Icon size={17} color="#2563EB" strokeWidth={2.2} />
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#0A0A0A' }}>{v.label}</span>
                </Link>
              ))}
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
            background: '#2563EB', color: '#fff', borderRadius: 10,
            padding: '16px 22px', textDecoration: 'none',
            boxShadow: '0 6px 18px rgba(37,99,235,0.30)',
          }}>
            Demander un devis
          </Link>
        </div>
      , document.body)}

      {/* ═════════════ BANDEAU CONFIANCE ═════════════ */}
      <style>{`
        @keyframes shimmer-trust {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
      <div style={{
        background: '#EFF6FF',
        borderTop: '1px solid #DBEAFE',
        padding: isMobile ? '8px 12px' : '10px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: isMobile ? 16 : 32,
        flexWrap: 'wrap',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* ── Shimmer sweep ── */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%)',
          animation: 'shimmer-trust 3s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {[
          { Icon: BadgeCheck, label: 'Certifié Qualiopi',          shortLabel: 'Qualiopi' },
          { Icon: Wallet,     label: 'Finançable OPCO',            shortLabel: 'OPCO' },
          { Icon: MapPin,     label: 'France · Suisse · Belgique', shortLabel: 'FR · CH · BE' },
        ]
          // Le conseil et le développement sur mesure ne sont pas finançables OPCO :
          // on masque ce badge sur les pages service/agence/conseil/dev (honnêteté + positionnement high-ticket).
          .filter(b => b.label !== 'Finançable OPCO' || !/^\/(agence|conseil|meilleur-cabinet|meilleure-agence|outils|automatisation-ia|agents-ia|ia-|solutions-ia|diagnostic-ia|methode-projet-ia|prix-projet-ia|gouvernance-ia|cas-usage-ia|audit-|accompagnement-ia|prestataire-ia)/.test(location.pathname))
          .map(({ Icon, label, shortLabel }, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: isMobile ? 5 : 6,
            fontFamily: 'DM Sans, sans-serif',
            fontSize: isMobile ? 11 : 12, fontWeight: 700, color: '#1E40AF',
            letterSpacing: '0.03em',
            position: 'relative',
          }}>
            <span style={{
              width: isMobile ? 17 : 20, height: isMobile ? 17 : 20, borderRadius: 999,
              background: '#2563EB',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 2px 6px rgba(37,99,235,0.35)',
            }}>
              <Icon size={isMobile ? 10 : 11} color="#fff" strokeWidth={2.5} />
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
  const lStyle = { display: 'block', color: '#B5BAC1', fontSize: 13, padding: '3px 0', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', transition: 'color 150ms' };
  return (
    <footer style={{ background: '#111', padding: isMobile ? '48px 20px 28px' : '56px 32px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          // 6 colonnes desktop : on enrichit le maillage interne avec une colonne "Métiers"
          // et une colonne "Conseil & développement" (pages conseil/dev/agence exposées ici).
          gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr 1fr 1fr 1fr 1fr',
          gap: isMobile ? 28 : 32,
          marginBottom: isMobile ? 24 : 36,
        }}>
          <div>
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/logo-horizontal@400w.webp 400w, /assets/logo-horizontal@800w.webp 800w"
                sizes="160px"
              />
              <img
                src="/assets/logo-horizontal@400w.png"
                srcSet="/assets/logo-horizontal@400w.png 400w, /assets/logo-horizontal@800w.png 800w"
                sizes="160px"
                alt="Masteria, Centre de formation IA certifié Qualiopi"
                width="400" height="225"
                loading="lazy" decoding="async"
                style={{ filter: 'invert(1)', marginBottom: 14, height: 44, width: 'auto', display: 'block' }}
              />
            </picture>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.75, maxWidth: 260 }}>Centre de formation certifié Qualiopi. L'IA au service des hommes, pas l'inverse.</p>
            <p style={{ fontSize: 12, color: '#666', lineHeight: 1.6, maxWidth: 260, marginTop: 10 }}>Déclaration d'activité n° 84 69 23218 69 enregistrée auprès du préfet de région Auvergne-Rhône-Alpes</p>
            <a
              href="/assets/qualiopi-certificat-masteria.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', fontSize: 12, color: '#888', textDecoration: 'underline', marginTop: 8 }}
            >
              Voir notre certificat Qualiopi (PDF)
            </a>
          </div>
          <div>
            <div style={colHead}>Formations par outil</div>
            {[
              ['Formation ChatGPT', '/formation-chatgpt'],
              ['Formation Claude IA', '/formation-claude-ia'],
              ['Formation Mistral AI', '/formation-mistral-ai'],
              ['Formation Microsoft Copilot', '/formation-microsoft-copilot'],
              ['Formation Google Gemini', '/formation-gemini-entreprise'],
              ['Formation automatisation IA', '/formation-automatisation-ia'],
              ['Formation agents IA', '/formation-agents-ia'],
              ['Formation prompt engineering', '/formation-prompt-engineering'],
              ['Formation vibe coding', '/formation-vibe-coding'],
              ['Formation Claude Code', '/formation-claude-code'],
              ['Formation AI Act', '/formation-ai-act'],
              ['Toutes les formations IA', '/formation-intelligence-artificielle'],
            ].map(([l, path]) => (
              <Link key={l} to={path} style={lStyle}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={colHead}>Formations par métier</div>
            {[
              ['Marketing', '/formation-ia-marketing'],
              ['Commercial', '/formation-ia-commercial'],
              ['Ressources humaines', '/formation-ia-ressources-humaines'],
              ['Finance', '/formation-ia-finance'],
              ['Communication', '/formation-ia-communication'],
              ['Management', '/formation-ia-management'],
              ['Gestion de projet', '/formation-ia-gestion-de-projet'],
              ['Dirigeants & CODIR', '/formation-ia-dirigeants'],
              ['Formation IA COMEX', '/formation-ia-comex'],
              ['Service client', '/formation-ia-service-client'],
              ['Marchés publics', '/formation-ia-marche-public'],
              ['Immobilier', '/formation-ia-immobilier'],
              ['Commerce & e-commerce', '/formation-ia-commerce'],
              ['Santé & médico-social', '/formation-ia-sante'],
              ['Juridique', '/formation-ia-juridique'],
              ['Comptabilité', '/formation-ia-comptabilite'],
              ['Assurance', '/formation-ia-assurance'],
              ['BTP & construction', '/formation-ia-btp'],
              ['Tourisme & hôtellerie', '/formation-ia-tourisme'],
              ['Formation IA en entreprise', '/formation-ia-entreprise'],
              ['Formation agents IA', '/formation-agents-ia'],
              ['Acculturation IA', '/acculturation-ia'],
              ['Coaching IA individuel', '/coaching-ia'],
              ['Tous les métiers', '/formation-intelligence-artificielle'],
            ].map(([l, path]) => (
              <Link key={path} to={path} style={lStyle}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={colHead}>Formations par ville</div>
            {[
              ['Formation IA Paris', '/formation-ia-paris'],
              ['Formation IA Lyon', '/formation-ia-lyon'],
              ['Formation IA Marseille', '/formation-ia-marseille'],
              ['Formation IA Nantes', '/formation-ia-nantes'],
              ['Formation IA Nice', '/formation-ia-nice'],
              ['Formation IA Lille', '/formation-ia-lille'],
              ['Formation IA Bordeaux', '/formation-ia-bordeaux'],
              ['Formation IA Toulouse', '/formation-ia-toulouse'],
              ['Formation IA Strasbourg', '/formation-ia-strasbourg'],
              ['Formation IA Rennes', '/formation-ia-rennes'],
              ['Formation IA Grenoble', '/formation-ia-grenoble'],
              ['Formation IA Annecy', '/formation-ia-annecy'],
              ['Formation IA Aix-en-Provence', '/formation-ia-aix-en-provence'],
              ['Formation IA Nîmes', '/formation-ia-nimes'],
              ['Formation IA Genève', '/formation-ia-geneve'],
              ['Formation IA Bruxelles', '/formation-ia-bruxelles'],
            ].map(([l, path]) => (
              <Link key={l} to={path} style={lStyle}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={colHead}>Conseil &amp; développement</div>
            {[
              ['Diagnostic IA', '/diagnostic-ia'],
              ['Audit IA', '/audit-ia'],
              ['Accompagnement IA', '/accompagnement-ia'],
              ['Prestataire IA : le guide', '/prestataire-ia'],
              ['Cabinet de conseil IA', '/conseil-intelligence-artificielle'],
              ['Conseil stratégie IA', '/conseil-strategie-ia'],
              ['Conseil data & IA', '/conseil-data-ia'],
              ['Gouvernance & AI Act', '/gouvernance-ia'],
              ['IA générative en entreprise', '/ia-generative-entreprise'],
              ['Cas d\'usage de l\'IA', '/cas-usage-ia-entreprise'],
              ['Prix d\'un projet IA', '/prix-projet-ia'],
              ['Agence développement IA', '/agence-developpement-ia'],
              ['Solutions IA sur mesure', '/solutions-ia'],
              ['Agents IA en entreprise', '/agents-ia-entreprise'],
              ['Agence automatisation IA', '/agence-automatisation-ia'],
              ['IA par secteur', '/ia-secteurs'],
              ['Outils IA sur mesure', '/outils-ia-sur-mesure'],
              ['Méthode & engagement', '/methode-projet-ia'],
              ['Agence IA', '/agence-ia'],
              ['Agence IA Lyon', '/agence-ia-lyon'],
              ['Agence IA marketing', '/agence-ia-marketing'],
              ['Agence SEO IA', '/agence-seo-ia'],
              ['Audit SEO IA & GEO', '/audit-seo-ia'],
              ['Audit GEO', '/audit-geo-ia'],
              ['Agence IA Paris', '/agence-ia-paris'],
              ['Agence IA Annecy', '/agence-ia-annecy'],
              ['Agence IA Genève', '/agence-ia-geneve'],
              ['Agence IA Marseille', '/agence-ia-marseille'],
            ].map(([l, path]) => (
              <Link key={path} to={path} style={lStyle}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={colHead}>Masteria</div>
            {[
              ['À propos', '/centre-formation-ia-entreprise'],
              ['Études de cas IA', '/etudes-de-cas-ia'],
              ['Quel OPCO ? (simulateur)', '/quel-opco'],
              ['Test de maturité IA', '/test-maturite-ia'],
              ['Quel outil IA ? (simulateur)', '/quel-outil-ia'],
              ['Bibliothèque de prompts', '/bibliotheque-de-prompts'],
              ['Presse', '/presse'],
              ['Veille IA quotidienne', '/veille-ia'],
              ['À propos de la Veille IA', '/veille-ia/a-propos'],
              ['Blog', '/blog'],
              ['Glossaire IA (83 termes)', '/glossaire-ia'],
              ['Quelle est la meilleure IA ?', '/quelle-est-la-meilleure-ia'],
              ['Meilleure agence IA', '/meilleure-agence-ia'],
              ['Meilleur cabinet de conseil IA', '/meilleur-cabinet-conseil-ia'],
              ['Meilleure formation IA', '/meilleure-formation-ia'],
              ['Consultant IA (métier & TJM)', '/consultant-ia'],
              ['Contact', '/contact'],
            ].map(([l, path]) => (
              <Link key={path} to={path} style={lStyle}>{l}</Link>
            ))}
            <div style={{ marginTop: 16, fontSize: 13, color: '#888', lineHeight: 1.9 }}>
              <div>mathias.nizan@master-ia.fr</div>
              <div>France · Suisse · Belgique</div>
            </div>
          </div>
        </div>

        {/* Bandeau comparatifs — maillage interne supplémentaire vers les pages comparatives
            (URLs à forte intention transactionnelle, sous-exploitées par le crawl). */}
        <div style={{
          borderTop: '1px solid #222',
          paddingTop: isMobile ? 20 : 22,
          paddingBottom: isMobile ? 20 : 22,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: isMobile ? 10 : 14,
        }}>
          <span style={{ ...colHead, marginBottom: 0, color: '#777' }}>Comparatifs IA</span>
          {[
            ['ChatGPT vs Claude', '/chatgpt-vs-claude'],
            ['Copilot vs ChatGPT', '/copilot-vs-chatgpt'],
            ['Meilleure IA entreprise 2026', '/meilleure-ia-entreprise-2026'],
            ['Meilleure IA pour coder', '/meilleure-ia-pour-coder'],
            ['Meilleur agent IA', '/meilleur-agent-ia'],
          ].map(([l, path]) => (
            <Link
              key={path}
              to={path}
              style={{
                fontSize: 12,
                color: '#B5BAC1',
                textDecoration: 'none',
                fontFamily: 'DM Sans, sans-serif',
                padding: '4px 10px',
                border: '1px solid #2a2a2a',
                borderRadius: 999,
              }}
            >{l}</Link>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #222', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: '#444' }}>© 2026 Masteria · Fondé par Mathias Nizan</span>
            <Link to="/mentions-legales" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Mentions légales</Link>
            <Link to="/politique-de-confidentialite" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Confidentialité</Link>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <a
              href="/assets/qualiopi-certificat-masteria.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: '#222', color: '#666', padding: '3px 10px', borderRadius: 999, textDecoration: 'none' }}
            >
              Qualiopi
            </a>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: '#222', color: '#666', padding: '3px 10px', borderRadius: 999 }}>OPCO</span>
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
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 8 }}>{tag}</div>
        <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#111', lineHeight: 1.3, marginBottom: 10, flex: 1 }}>{title}</div>
        <p style={{ fontSize: 13, color: '#717171', lineHeight: 1.55, marginBottom: 16 }}>{desc}</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#111', whiteSpace: 'nowrap' }}>{price}</span>
          <span style={{ fontSize: 12, color: '#6B7280' }}>{unit}</span>
        </div>
      </div>
    </div>
  );
}

export function StatsBar() {
  const stats = [
    { num: '+1 500', label: 'Professionnels formés' },
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
            <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
