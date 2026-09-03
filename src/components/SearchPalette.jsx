/**
 * Recherche sur le site — palette ⌘K.
 *
 * 100 % côté navigateur, zéro backend : l'index Pagefind est généré au build
 * (scripts/build-search-index.mjs) et servi en statique sous /pagefind/.
 * Rien n'est chargé tant que la palette n'est pas ouverte, et aucune requête
 * ne quitte le navigateur (aucune donnée visiteur transmise).
 *
 * Ouverture : bouton <SearchButton /> (header), raccourci ⌘K / Ctrl+K, ou
 * `window.dispatchEvent(new Event('masteria:search'))` depuis n'importe où.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { SEARCH_OPEN_EVENT, openSearch } from './searchBus';

const RESULTS_MAX = 14;

// Ordre d'affichage des groupes (aligné sur le script d'indexation).
const TYPE_ORDER = ['Formation', 'Conseil', 'Solution', 'Comparatif', 'Secteur', 'Ressource', 'Article', 'Veille', 'Masteria'];
const TYPE_STYLE = {
  Formation:  { bg: '#DBEAFE', fg: '#1D4ED8', label: 'Formation' },
  Conseil:    { bg: '#EDE9FE', fg: '#6D28D9', label: 'Conseil' },
  Solution:   { bg: '#D1FAE5', fg: '#047857', label: 'Solution' },
  Comparatif: { bg: '#FEF3C7', fg: '#B45309', label: 'Comparatif' },
  Secteur:    { bg: '#FFE4E6', fg: '#BE123C', label: 'Secteur' },
  Ressource:  { bg: '#E0F2FE', fg: '#0369A1', label: 'Ressource' },
  Article:    { bg: '#F3F4F6', fg: '#374151', label: 'Blog' },
  Veille:     { bg: '#0A0F1E', fg: '#B4C0D3', label: 'Veille' },
  Masteria:   { bg: '#F3F4F6', fg: '#374151', label: 'Masteria' },
};

const QUICK_LINKS = [
  { label: 'Catalogue des formations IA', hint: 'Par outil et par métier', path: '/formation-intelligence-artificielle' },
  { label: 'Financer sa formation', hint: 'OPCO, plan de développement des compétences', path: '/financement-formation-ia' },
  { label: 'Conseil et audit IA', hint: 'Diagnostic, stratégie, conformité', path: '/conseil-intelligence-artificielle' },
  { label: 'Veille IA du jour', hint: 'L\'actualité IA lue pour vous', path: '/veille-ia' },
  { label: 'Glossaire IA', hint: 'Les termes expliqués simplement', path: '/glossaire-ia' },
  { label: 'Bibliothèque de prompts', hint: 'Prêts à copier, par métier', path: '/bibliotheque-de-prompts' },
];

const SUGGESTIONS = ['Copilot', 'ChatGPT pour les RH', 'financement OPCO', 'AI Act', 'agents IA', 'RGPD', 'Claude', 'Gemini'];

// Chargement paresseux et partagé de Pagefind.
let pagefindPromise = null;
function loadPagefind() {
  if (!pagefindPromise) {
    pagefindPromise = import(/* @vite-ignore */ '/pagefind/pagefind.js')
      .then(async pf => {
        // Langue de base de la page (fr-FR → fr) : l'index est construit par langue de base.
        const language = (document.documentElement.lang || 'fr').split('-')[0].toLowerCase();
        await pf.options({ excerptLength: 22, language });
        await pf.init();
        return pf;
      })
      .catch(err => { pagefindPromise = null; throw err; });
  }
  return pagefindPromise;
}

function isMac() {
  if (typeof navigator === 'undefined') return true;
  return /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
}

/** Bouton d'ouverture (header). `compact` : icône seule. */
export function SearchButton({ compact = false, style = {} }) {
  const [kbd] = useState(() => (isMac() ? '⌘K' : 'Ctrl K'));
  return (
    <button
      type="button"
      onClick={openSearch}
      aria-label="Rechercher sur le site"
      title={kbd ? `Rechercher (${kbd})` : 'Rechercher'}
      className="sp-trigger"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        height: compact ? 38 : 40, padding: compact ? '0 8px' : '0 12px 0 12px',
        background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 9,
        color: '#4B5563', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: 14,
        whiteSpace: 'nowrap', ...style,
      }}
    >
      <Search size={17} strokeWidth={2.2} />
      {!compact && <span style={{ fontWeight: 500 }}>Rechercher</span>}
      {!compact && kbd && (
        <kbd style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, color: '#6B7280',
          background: '#fff', border: '1px solid #E5E7EB', borderRadius: 5, padding: '1px 6px', lineHeight: '16px',
        }}>{kbd}</kbd>
      )}
    </button>
  );
}

export default function SearchPalette() {
  // Chemin sur lequel la palette a été ouverte : un changement de page la ferme d'office.
  const [openedAt, setOpenedAt] = useState(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | ready | unavailable
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const requestId = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();
  const open = openedAt === location.pathname;
  const setOpen = useCallback(v => setOpenedAt(prev => {
    const next = typeof v === 'function' ? v(prev === location.pathname) : v;
    return next ? location.pathname : null;
  }), [location.pathname]);

  const close = useCallback(() => setOpen(false), [setOpen]);

  // Ouverture : événement global + raccourci clavier.
  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setOpen(v => !v);
      }
    };
    window.addEventListener(SEARCH_OPEN_EVENT, onOpen);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener(SEARCH_OPEN_EVENT, onOpen);
      window.removeEventListener('keydown', onKey);
    };
  }, [setOpen]);

  // À l'ouverture : focus, blocage du scroll, préchargement de l'index.
  useEffect(() => {
    if (!open) return;
    document.body.classList.add('no-scroll');
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    loadPagefind().then(() => setStatus(s => (s === 'idle' ? 'ready' : s))).catch(() => setStatus('unavailable'));
    return () => { clearTimeout(t); document.body.classList.remove('no-scroll'); };
  }, [open]);

  // Recherche (débouncée) à chaque frappe.
  useEffect(() => {
    const q = query.trim();
    if (!open || !q) return;
    const id = ++requestId.current;
    const t = setTimeout(async () => {
      setStatus(s => (s === 'unavailable' ? s : 'loading'));
      try {
        const pf = await loadPagefind();
        const res = await pf.search(q);
        if (id !== requestId.current) return;
        const data = await Promise.all(res.results.slice(0, RESULTS_MAX).map(r => r.data()));
        if (id !== requestId.current) return;
        setResults(data);
        setActive(0);
        setStatus('ready');
      } catch {
        if (id === requestId.current) setStatus('unavailable');
      }
    }, 120);
    return () => clearTimeout(t);
  }, [query, open]);

  // Regroupement par type, dans un ordre stable, puis liste plate pour le clavier.
  const groups = useMemo(() => {
    const byType = new Map();
    if (!query.trim()) return [];
    for (const r of results) {
      const type = r.meta?.type || 'Masteria';
      if (!byType.has(type)) byType.set(type, []);
      byType.get(type).push(r);
    }
    return [...byType.entries()].sort((a, b) => TYPE_ORDER.indexOf(a[0]) - TYPE_ORDER.indexOf(b[0]));
  }, [results, query]);
  const flat = useMemo(() => groups.flatMap(([, items]) => items), [groups]);

  const go = useCallback(url => {
    if (!url) return;
    setOpen(false);
    try {
      const u = new URL(url, window.location.origin);
      navigate(u.pathname + u.search + u.hash);
    } catch {
      navigate(url);
    }
  }, [navigate, setOpen]);

  // Clavier au niveau de la fenêtre : la palette répond même si le focus a
  // quitté le champ (clic sur le fond, tabulation, retour d'un autre onglet).
  useEffect(() => {
    if (!open) return;
    const onKeyDown = e => {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (!flat.length) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => (i + 1) % flat.length); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => (i - 1 + flat.length) % flat.length); }
      else if (e.key === 'Enter') { e.preventDefault(); go(flat[active]?.url); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, flat, active, close, go]);

  // Garde l'élément actif visible.
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${active}"]`);
    el?.scrollIntoView?.({ block: 'nearest' });
  }, [active]);

  if (!open || typeof document === 'undefined') return null;

  const q = query.trim();
  const showEmptyState = !q;
  const showNoResult = q && status === 'ready' && flat.length === 0;

  return createPortal(
    <div
      className="sp-overlay"
      onMouseDown={e => { if (e.target === e.currentTarget) close(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9500, // au-dessus du bandeau cookies (9000/9001)
        background: 'rgba(10, 15, 30, 0.55)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: 'max(8vh, 24px) 12px 24px',
      }}
    >
      <div
        role="dialog" aria-modal="true" aria-label="Rechercher sur le site"
        className="sp-panel"
        style={{
          width: '100%', maxWidth: 680, maxHeight: 'min(72vh, 640px)',
          background: '#fff', borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 30px 80px -20px rgba(10, 15, 30, 0.45), 0 0 0 1px rgba(15, 23, 42, 0.06)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Champ */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px 14px 18px', borderBottom: '1px solid #EFEFEF' }}>
          <Search size={20} color="#2563EB" strokeWidth={2.4} style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Une formation, un outil, un métier, une question…"
            aria-label="Votre recherche"
            role="combobox" aria-expanded={flat.length > 0} aria-controls="sp-results" aria-autocomplete="list"
            autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
            enterKeyHint="go"
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: '#0A0A0A', minWidth: 0,
            }}
          />
          {query && (
            <button type="button" onClick={() => { setQuery(''); inputRef.current?.focus(); }} aria-label="Effacer"
              style={{ background: '#F3F4F6', border: 'none', borderRadius: 6, padding: 4, cursor: 'pointer', display: 'flex', color: '#6B7280' }}>
              <X size={14} />
            </button>
          )}
          <button type="button" onClick={close} aria-label="Fermer la recherche"
            style={{ background: 'none', border: '1px solid #E5E7EB', borderRadius: 6, padding: '3px 7px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, color: '#6B7280' }}>
            Esc
          </button>
        </div>

        {/* Corps */}
        <div ref={listRef} id="sp-results" style={{ overflowY: 'auto', padding: '10px 8px 12px', flex: 1 }}>
          {status === 'unavailable' && (
            <div style={{ padding: '28px 16px', textAlign: 'center', color: '#6B7280', fontSize: 14, lineHeight: 1.6 }}>
              La recherche n'est pas disponible pour le moment.<br />
              <span style={{ fontSize: 13 }}>L'index est généré au build du site ; en développement, lancez <code style={{ fontSize: 12 }}>npm run build:prerender</code>.</span>
            </div>
          )}

          {status !== 'unavailable' && showEmptyState && (
            <>
              <div style={sectionLabel}>Accès directs</div>
              {QUICK_LINKS.map(l => (
                <button key={l.path} type="button" className="sp-item" onClick={() => go(l.path)} style={itemStyle}>
                  <span style={{ width: 34, height: 34, borderRadius: 8, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ArrowRight size={16} color="#2563EB" strokeWidth={2.4} />
                  </span>
                  <span style={{ minWidth: 0 }}>
                    <span style={itemTitle}>{l.label}</span>
                    <span style={itemHint}>{l.hint}</span>
                  </span>
                </button>
              ))}
              <div style={{ ...sectionLabel, marginTop: 12 }}>Essayez</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '4px 10px 6px' }}>
                {SUGGESTIONS.map(s => (
                  <button key={s} type="button" className="sp-chip" onClick={() => { setQuery(s); inputRef.current?.focus(); }}
                    style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 999, padding: '6px 12px', cursor: 'pointer' }}>
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}

          {status !== 'unavailable' && !showEmptyState && flat.length === 0 && status === 'loading' && (
            <div style={{ padding: '28px 16px', textAlign: 'center', color: '#9CA3AF', fontSize: 14 }}>Recherche…</div>
          )}

          {showNoResult && (
            <div style={{ padding: '28px 16px', textAlign: 'center', color: '#6B7280', fontSize: 14, lineHeight: 1.6 }}>
              Aucun résultat pour <strong style={{ color: '#0A0A0A' }}>« {q} »</strong>.<br />
              <span style={{ fontSize: 13 }}>Essayez un outil (Copilot, ChatGPT…), un métier (RH, commercial…) ou un thème (AI Act, RGPD…).</span>
              <div style={{ marginTop: 14 }}>
                <button type="button" onClick={() => go('/contact')} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#2563EB', background: '#EFF6FF', border: 'none', borderRadius: 8, padding: '8px 14px', cursor: 'pointer' }}>
                  Poser la question à Masteria
                </button>
              </div>
            </div>
          )}

          {flat.length > 0 && (() => {
            let idx = -1;
            return groups.map(([type, items]) => {
              const ts = TYPE_STYLE[type] || TYPE_STYLE.Masteria;
              return (
                <div key={type} role="group" aria-label={ts.label}>
                  <div style={sectionLabel}>{ts.label}</div>
                  {items.map(r => {
                    idx += 1;
                    const i = idx;
                    const isActive = i === active;
                    const title = r.meta?.title || r.meta?.pagetitle || r.url;
                    let pathLabel = r.url;
                    try { pathLabel = new URL(r.url, 'https://www.master-ia.fr').pathname; } catch { /* noop */ }
                    return (
                      <button
                        key={r.url} type="button" role="option" aria-selected={isActive}
                        data-index={i} data-active={isActive ? 'true' : 'false'}
                        className="sp-item"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(r.url)}
                        style={itemStyle}
                      >
                        <span style={{
                          alignSelf: 'flex-start', marginTop: 2, flexShrink: 0,
                          fontFamily: 'DM Sans, sans-serif', fontSize: 10.5, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase',
                          color: ts.fg, background: ts.bg, borderRadius: 5, padding: '3px 6px', lineHeight: '12px',
                        }}>{ts.label}</span>
                        <span style={{ minWidth: 0, flex: 1 }}>
                          <span style={itemTitle}>{title}</span>
                          {r.excerpt && (
                            <span className="sp-excerpt" style={{ ...itemHint, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                              dangerouslySetInnerHTML={{ __html: r.excerpt }} />
                          )}
                          <span style={{ display: 'block', fontSize: 11.5, color: '#9CA3AF', marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pathLabel}</span>
                        </span>
                        {isActive && <CornerDownLeft size={15} color="#9CA3AF" style={{ flexShrink: 0, alignSelf: 'center' }} aria-hidden="true" />}
                      </button>
                    );
                  })}
                </div>
              );
            });
          })()}
        </div>

        {/* Pied */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '9px 16px', borderTop: '1px solid #EFEFEF', background: '#FAFAFA', fontSize: 11.5, color: '#6B7280', fontFamily: 'DM Sans, sans-serif' }}>
          <span className="sp-hints" style={{ display: 'flex', gap: 14 }}>
            <span><kbd style={kbdStyle}>↑</kbd><kbd style={kbdStyle}>↓</kbd> naviguer</span>
            <span><kbd style={kbdStyle}>↵</kbd> ouvrir</span>
            <span><kbd style={kbdStyle}>esc</kbd> fermer</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap' }}>
            <Sparkles size={12} color="#2563EB" aria-hidden="true" /> Recherche locale, rien ne quitte votre navigateur
          </span>
        </div>
      </div>
    </div>,
    document.body,
  );
}

const sectionLabel = {
  fontFamily: 'DM Sans, sans-serif', fontSize: 10.5, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
  color: '#9CA3AF', padding: '8px 12px 4px',
};
const itemStyle = {
  width: '100%', display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left',
  background: 'transparent', border: 'none', borderRadius: 10, padding: '9px 10px', cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif', color: '#0A0A0A',
};
// Titre sur 2 lignes maximum (les titres SEO sont longs, surtout sur mobile).
const itemTitle = { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', fontSize: 14.5, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.3, overflow: 'hidden' };
const itemHint = { display: 'block', fontSize: 12.5, color: '#6B7280', lineHeight: 1.45, marginTop: 2 };
const kbdStyle = {
  display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: 10.5, fontWeight: 700, color: '#6B7280',
  background: '#fff', border: '1px solid #E5E7EB', borderRadius: 4, padding: '0 5px', lineHeight: '16px', marginRight: 3,
};
