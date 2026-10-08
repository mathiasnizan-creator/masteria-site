/**
 * Google Analytics 4, chargé uniquement après consentement à la finalité
 * « audience » (CNIL : GA n'est pas exempté de consentement).
 *
 * Tant que GA_MEASUREMENT_ID est vide, rien n'est chargé, rien n'est listé dans
 * le bandeau ni dans la politique de confidentialité : le module est inerte.
 *
 * Réglages appliqués :
 *  - Consent Mode v2 : tout refusé par défaut, seul analytics_storage est
 *    accordé après acceptation ; ad_storage, ad_user_data et
 *    ad_personalization restent refusés en permanence ;
 *  - Google Signals et personnalisation publicitaire désactivés (pas de suivi
 *    d'un site à l'autre) ;
 *  - cookies _ga limités à 13 mois, durée maximale recommandée par la CNIL ;
 *  - retrait du consentement : envoi coupé et cookies _ga supprimés.
 *
 * Les changements de page de la SPA sont comptés par la mesure améliorée de
 * GA4 (« changements d'historique du navigateur »), activée par défaut.
 */

/** Identifiant de flux web GA4 (G-XXXXXXXXXX). Vide = Google Analytics désactivé. */
export const GA_MEASUREMENT_ID = 'G-WN5ES0ZW1X';

/** 13 mois en secondes. */
const COOKIE_EXPIRES = 13 * 30 * 86400;

let loaded = false;

function gtag() {
  window.dataLayer = window.dataLayer || [];
  // gtag.js attend l'objet arguments, pas un tableau.
  window.dataLayer.push(arguments);
}

/** Charge gtag.js et accorde la mesure d'audience. Sans effet si déjà chargé ou sans identifiant. */
export function enableGA4() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || window.__MASTERIA_PRERENDER__) return;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  if (loaded) {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  loaded = true;
  window.gtag = gtag;
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  gtag('consent', 'update', { analytics_storage: 'granted' });
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: COOKIE_EXPIRES,
  });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
}

/** Retire le consentement : coupe l'envoi et supprime les cookies _ga. */
export function disableGA4() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  if (loaded) gtag('consent', 'update', { analytics_storage: 'denied' });
  const host = location.hostname.replace(/^www\./, '');
  document.cookie.split('; ').forEach((c) => {
    const name = c.split('=')[0];
    if (name === '_ga' || name.startsWith('_ga_')) {
      for (const domain of ['', `; Domain=.${host}`, `; Domain=${location.hostname}`]) {
        document.cookie = `${name}=; Max-Age=0; Path=/${domain}`;
      }
    }
  });
}

/** Envoie un événement GA4 si la mesure est active (sinon ne fait rien). */
export function trackEvent(name, params = {}) {
  if (loaded && typeof window !== 'undefined' && window.gtag) window.gtag('event', name, params);
}
