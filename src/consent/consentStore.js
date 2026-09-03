/**
 * Consentement cookies et traceurs (CNIL, lignes directrices 2020-091 et
 * recommandation 2020-092, toujours en vigueur).
 *
 * Principes appliqués :
 *  - rien de non essentiel n'est chargé avant un choix explicite ;
 *  - refuser est aussi simple qu'accepter (même écran, même taille de bouton) ;
 *  - le choix (acceptation OU refus) est mémorisé 6 mois, durée recommandée
 *    par la CNIL, pour ne pas redemander à chaque visite ;
 *  - le choix reste modifiable à tout moment (lien « Gérer les cookies » en
 *    pied de page, bouton dans la politique de confidentialité) ;
 *  - la preuve du consentement est conservée côté navigateur (horodatage,
 *    version de la liste des traceurs, choix par finalité).
 *
 * Le seul cookie déposé par Masteria est ce cookie de préférences, exempté de
 * consentement (il sert précisément à mémoriser le refus ou l'acceptation).
 */
import { useSyncExternalStore } from 'react';

export const CONSENT_COOKIE = 'masteria_consent';
/** À incrémenter si la liste des traceurs change : les visiteurs seront re-sollicités. */
export const CONSENT_VERSION = 1;
/** 6 mois, durée de validité recommandée par la CNIL. */
export const CONSENT_MAX_AGE_DAYS = 182;

/** Finalités soumises au consentement et traceurs associés (affichés dans le panneau). */
export const CATEGORIES = [
  {
    id: 'audience',
    label: "Mesure d'audience",
    description:
      "Compter les visites et savoir quelles pages sont lues, pour améliorer le site. Statistiques agrégées, sans profil individuel et sans suivi d'un site à l'autre.",
    tracers: [
      {
        name: 'Vercel Web Analytics',
        vendor: 'Vercel Inc. (États-Unis, clauses contractuelles types)',
        purpose: 'Pages vues, provenance des visites, type d’appareil.',
        storage: "Aucun cookie. Identifiant haché à partir de l'adresse IP et du navigateur, renouvelé chaque jour, jamais conservé en clair.",
      },
    ],
  },
  {
    id: 'performance',
    label: 'Performance du site',
    description:
      "Mesurer la vitesse réelle d'affichage des pages sur votre appareil (Core Web Vitals) pour corriger ce qui rame.",
    tracers: [
      {
        name: 'Vercel Speed Insights',
        vendor: 'Vercel Inc. (États-Unis, clauses contractuelles types)',
        purpose: "Temps de chargement et stabilité d'affichage, agrégés par page.",
        storage: 'Aucun cookie. Mesures techniques envoyées sans identifiant persistant.',
      },
    ],
  },
];

export const NECESSARY_TRACERS = [
  {
    name: CONSENT_COOKIE,
    vendor: 'Masteria',
    purpose: 'Mémoriser votre choix (acceptation ou refus) pour ne pas vous le redemander.',
    storage: `Cookie de préférences, ${CONSENT_MAX_AGE_DAYS} jours (6 mois).`,
  },
];

const ALL_OFF = Object.fromEntries(CATEGORIES.map(c => [c.id, false]));
const ALL_ON = Object.fromEntries(CATEGORIES.map(c => [c.id, true]));
export const choicesAllOff = () => ({ ...ALL_OFF });
export const choicesAllOn = () => ({ ...ALL_ON });

const listeners = new Set();
let cachedRaw;
let cachedValue = null;

function readRaw() {
  if (typeof document === 'undefined') return '';
  const m = document.cookie.match(new RegExp('(?:^|; )' + CONSENT_COOKIE + '=([^;]*)'));
  return m ? m[1] : '';
}

function parse(raw) {
  if (!raw) return null;
  try {
    const v = JSON.parse(decodeURIComponent(raw));
    if (!v || v.v !== CONSENT_VERSION || typeof v.c !== 'object') return null;
    const ageMs = Date.now() - (v.t || 0);
    if (!(ageMs >= 0 && ageMs < CONSENT_MAX_AGE_DAYS * 86400000)) return null;
    return { version: v.v, at: new Date(v.t), choices: { ...ALL_OFF, ...v.c } };
  } catch {
    return null;
  }
}

/** Retourne le consentement enregistré ({ choices, at, version }) ou null s'il n'y a pas encore de choix valide. */
export function readConsent() {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedValue = parse(raw);
  }
  return cachedValue;
}

/** Enregistre un choix par finalité. `choices` = { audience: bool, performance: bool }. */
export function saveConsent(choices) {
  const payload = { v: CONSENT_VERSION, t: Date.now(), c: { ...ALL_OFF, ...choices } };
  const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
  document.cookie =
    `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(payload))}` +
    `; Max-Age=${CONSENT_MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
  notify();
}

/** Efface le choix (le bandeau réapparaît). */
export function clearConsent() {
  document.cookie = `${CONSENT_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
  notify();
}

function notify() {
  readConsent();
  listeners.forEach(fn => fn());
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

const getServerSnapshot = () => null;

/** Hook : consentement courant, réactif aux changements (bandeau, panneau, pied de page). */
export function useConsent() {
  return useSyncExternalStore(subscribe, readConsent, getServerSnapshot);
}

/** Ouvre le panneau de préférences depuis n'importe où (pied de page, politique de confidentialité). */
export const PREFERENCES_EVENT = 'masteria:cookie-preferences';
export function openCookiePreferences() {
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent(PREFERENCES_EVENT));
}
