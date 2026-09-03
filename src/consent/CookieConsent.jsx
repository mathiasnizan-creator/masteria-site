import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  CATEGORIES, NECESSARY_TRACERS, PREFERENCES_EVENT,
  useConsent, saveConsent, choicesAllOff, choicesAllOn,
} from './consentStore';
import './cookie-consent.css';

const SHOW_DELAY_MS = 400; // petit délai après le chargement (en idle) du chunk, pour une entrée calme

/**
 * Bandeau de consentement + panneau de préférences.
 * Chargé paresseusement par ConsentMount (App.jsx) : jamais dans le bundle
 * initial, jamais chargé si le visiteur a déjà exprimé un choix valide.
 * `autoOpen` : ouvrir directement le panneau (clic « Gérer les cookies »
 * survenu avant que le chunk soit chargé).
 *
 * Le bandeau ne bloque rien : pas de voile, pas de scroll verrouillé, il se pose
 * dans un coin. Le panneau de préférences, lui, est un vrai dialogue modal.
 */
export default function CookieConsent({ autoOpen = false }) {
  const consent = useConsent();
  const [ready, setReady] = useState(false);
  const [panelOpen, setPanelOpen] = useState(autoOpen);

  // Apparition différée, jamais lors du prerender (le HTML statique ne doit pas contenir le bandeau)
  useEffect(() => {
    if (typeof window === 'undefined' || window.__MASTERIA_PRERENDER__) return;
    const t = setTimeout(() => setReady(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const showBanner = ready && !consent && !panelOpen;

  // Ouverture du panneau depuis le pied de page ou la politique de confidentialité
  useEffect(() => {
    const open = () => setPanelOpen(true);
    window.addEventListener(PREFERENCES_EVENT, open);
    return () => window.removeEventListener(PREFERENCES_EVENT, open);
  }, []);

  const decide = useCallback((choices) => {
    saveConsent(choices);
    setPanelOpen(false);
  }, []);

  return (
    <>
      {showBanner && (
        <Banner
          onAcceptAll={() => decide(choicesAllOn())}
          onRefuseAll={() => decide(choicesAllOff())}
          onCustomize={() => setPanelOpen(true)}
        />
      )}
      {panelOpen && (
        <PreferencesPanel
          initial={consent ? consent.choices : choicesAllOff()}
          onSave={decide}
          onClose={() => setPanelOpen(false)}
        />
      )}
    </>
  );
}

/* ───────────── Bandeau (premier niveau) ───────────── */

function Banner({ onAcceptAll, onRefuseAll, onCustomize }) {
  return (
    <section
      className="ck-banner"
      role="region"
      aria-label="Cookies et mesure d'audience"
    >
      <div className="ck-banner__icon" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z" />
          <circle cx="8.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="15.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="12.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <div className="ck-banner__body">
        <p className="ck-banner__title">On compte les visites, pas les visiteurs.</p>
        <p className="ck-banner__text">
          En acceptant, vous aidez un cabinet indépendant à savoir quelles pages vous sont
          utiles et à améliorer les autres. <strong>Aucune publicité, aucune revente, aucun
          suivi d'un site à l'autre</strong>, et vous pouvez changer d'avis à tout moment.
        </p>
        <div className="ck-banner__actions">
          <button type="button" className="ck-btn ck-btn--refuse" onClick={onRefuseAll}>Tout refuser</button>
          <button type="button" className="ck-btn ck-btn--accept" onClick={onAcceptAll}>Tout accepter</button>
        </div>
        <div className="ck-banner__links">
          <button type="button" className="ck-link" onClick={onCustomize}>Personnaliser</button>
          <span aria-hidden="true">·</span>
          <Link className="ck-link" to="/politique-de-confidentialite#cookies">En savoir plus</Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Panneau de préférences (second niveau, modal) ───────────── */

function PreferencesPanel({ initial, onSave, onClose }) {
  const [choices, setChoices] = useState(initial);
  const [openDetails, setOpenDetails] = useState(null);
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Focus, Échap, restitution du focus
  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    dialogRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previouslyFocused.current?.focus?.();
    };
  }, [onClose]);

  // Piège de focus léger (Tab reste dans le dialogue)
  const onKeyDown = (e) => {
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const focusables = dialogRef.current.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  const toggle = (id) => setChoices(c => ({ ...c, [id]: !c[id] }));

  return (
    <div className="ck-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className="ck-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ck-panel-title"
        ref={dialogRef}
        tabIndex={-1}
        onKeyDown={onKeyDown}
      >
        <div className="ck-panel__head">
          <h2 id="ck-panel-title" className="ck-panel__title">Vos préférences de cookies</h2>
          <button type="button" className="ck-panel__close" onClick={onClose} aria-label="Fermer sans modifier mes choix">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <p className="ck-panel__intro">
          Choisissez finalité par finalité. Rien n'est activé tant que vous ne l'avez pas décidé,
          et vous pouvez revenir sur votre choix à tout moment depuis le lien « Gérer les cookies » en bas de chaque page.
        </p>

        <div className="ck-cat ck-cat--locked">
          <div className="ck-cat__row">
            <div>
              <p className="ck-cat__label">Strictement nécessaires</p>
              <p className="ck-cat__desc">Mémorisation de votre choix sur ce bandeau. Sans ce cookie, on devrait vous reposer la question à chaque page.</p>
            </div>
            <span className="ck-cat__always">Toujours actif</span>
          </div>
          <DetailsToggle id="necessary" open={openDetails} setOpen={setOpenDetails} tracers={NECESSARY_TRACERS} />
        </div>

        {CATEGORIES.map(cat => (
          <div className="ck-cat" key={cat.id}>
            <div className="ck-cat__row">
              <div>
                <p className="ck-cat__label" id={`ck-label-${cat.id}`}>{cat.label}</p>
                <p className="ck-cat__desc">{cat.description}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={!!choices[cat.id]}
                aria-labelledby={`ck-label-${cat.id}`}
                className={`ck-switch${choices[cat.id] ? ' is-on' : ''}`}
                onClick={() => toggle(cat.id)}
              >
                <span className="ck-switch__knob" />
              </button>
            </div>
            <DetailsToggle id={cat.id} open={openDetails} setOpen={setOpenDetails} tracers={cat.tracers} />
          </div>
        ))}

        <div className="ck-panel__actions">
          <button type="button" className="ck-btn ck-btn--refuse" onClick={() => onSave(choicesAllOff())}>Tout refuser</button>
          <button type="button" className="ck-btn ck-btn--accept" onClick={() => onSave(choicesAllOn())}>Tout accepter</button>
          <button type="button" className="ck-btn ck-btn--save" onClick={() => onSave(choices)}>Enregistrer mes choix</button>
        </div>
        <p className="ck-panel__foot">
          Détails complets dans la <Link className="ck-link" to="/politique-de-confidentialite#cookies" onClick={onClose}>politique de confidentialité</Link>.
        </p>
      </div>
    </div>
  );
}

function DetailsToggle({ id, open, setOpen, tracers }) {
  const isOpen = open === id;
  return (
    <div className="ck-details">
      <button
        type="button"
        className="ck-link ck-details__btn"
        aria-expanded={isOpen}
        aria-controls={`ck-details-${id}`}
        onClick={() => setOpen(isOpen ? null : id)}
      >
        {isOpen ? 'Masquer le détail' : `Voir le détail (${tracers.length})`}
      </button>
      {isOpen && (
        <ul id={`ck-details-${id}`} className="ck-details__list">
          {tracers.map(t => (
            <li key={t.name}>
              <strong>{t.name}</strong> <span className="ck-details__vendor">{t.vendor}</span>
              <br />{t.purpose}
              <br /><em>{t.storage}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
