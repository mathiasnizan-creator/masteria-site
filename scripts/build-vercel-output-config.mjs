/**
 * Build .vercel/output/config.json in Build Output API v3 format.
 *
 * Reads vercel.json (top-level `redirects` and `headers` arrays — schema
 * honored only by Vercel's source-build pipeline) and emits a v3 config
 * where each rule is a `routes` entry — the only schema honored when
 * deploying with `vercel deploy --prebuilt`.
 *
 * Conversion:
 *   redirects[i] = { source, destination, permanent }
 *     -> routes[i] = { src: <regex>, status: 308|307, headers: { Location } }
 *   headers[i]   = { source, headers: [{ key, value }] }
 *     -> routes[i] = { src: <regex>, headers: {...}, continue: true }
 *
 * Order: header rules first (with `continue: true`), then redirects, then
 * `{ handle: 'filesystem' }` so static files take precedence over any
 * catch-all afterwards.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const vercelJsonPath = path.join(root, 'vercel.json');
const outDir = path.join(root, '.vercel', 'output');
const outPath = path.join(outDir, 'config.json');

const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));

// vercel.json `source` is path-to-regexp-like; Build Output API v3 `src` is
// pure regex. The rules in this project use either plain paths or already-
// regex patterns with `(.*)` capture groups — we anchor with ^…$ and escape
// literal dots only when the string has no regex metachars.
function sourceToRegex(src) {
  const looksLikeRegex = /[()\\?+*|]/.test(src);
  if (looksLikeRegex) return `^${src}$`;
  const escaped = src.replace(/[.+?^${}|[\]]/g, '\\$&');
  return `^${escaped}$`;
}

const routes = [];

for (const entry of vercelJson.headers || []) {
  const headers = {};
  for (const h of entry.headers) headers[h.key] = h.value;
  routes.push({
    src: sourceToRegex(entry.source),
    headers,
    continue: true,
  });
}

// Domaine canonique : apex (master-ia.fr) -> www en 308 PERMANENT (et non 307),
// pour consolider le link equity sur le domaine canonique. La valeur de `host`
// est ancrée (^...$) afin de NE PAS matcher www.master-ia.fr — sinon boucle de
// redirection. Placé après les headers (continue:true) pour que la réponse de
// redirection porte aussi les en-têtes de sécurité (HSTS, etc.).
routes.push({
  src: '^/(.*)$',
  has: [{ type: 'host', value: '^master-ia\\.fr$' }],
  status: 308,
  headers: { Location: 'https://www.master-ia.fr/$1' },
});

// Trailing slash : /page/ -> /page en 308. Le champ `trailingSlash` de vercel.json
// n'est PAS honoré par le Build Output API en déploiement --prebuilt (vérifié en
// prod le 2026-06-10) : on le réplique en route explicite. `^/(.+)/$` épargne la
// racine `/`.
routes.push({
  src: '^/(.+)/$',
  status: 308,
  headers: { Location: '/$1' },
});

for (const r of vercelJson.redirects || []) {
  routes.push({
    src: sourceToRegex(r.source),
    status: r.permanent ? 308 : 307,
    headers: { Location: r.destination },
  });
}

routes.push({ handle: 'filesystem' });

// IMPORTANT (vérifié en prod le 2026-06-10) : avec cleanUrls, les chemins `.html`
// littéraux renvoient NOT_FOUND (`/404.html` → 404, `/404` → 200). Tout `dest`
// doit donc viser le chemin SANS extension. C'est pour ça que l'ancien fallback
// `dest: '/index.html'` n'a jamais fonctionné (/formations était mort en prod).

// Fallback SPA ciblé : les sous-routes du catalogue interne (/formations/:id,
// noindex, non prérendues) servent le shell SPA propre (/spa, écrit par le
// prerender) et React Router rend le détail côté client.
routes.push({ src: '^/formations/.+$', dest: '/spa' });

// Filet de sécurité prerender : si une page légitime des namespaces connus
// (formation-*, blog/*) manque du filesystem (échec ponctuel de prerender),
// on sert le shell SPA (200, React rend la bonne page) plutôt qu'une 404 qui
// tuerait une URL du sitemap. Les URLs fantaisistes hors namespaces restent en 404.
// Précision (2026-08-19, soft 404 vus par Bing sur /formation-chat-gpt) : le filet
// ne couvre que les routes CONNUES du sitemap, pas n'importe quel slug du namespace.
// Une URL fantaisiste (faute de frappe, ancien lien) tombe donc en vraie 404.
// Regex chunkées (≤ 40 slugs par route) pour rester loin des limites de taille.
{
  let known = [];
  try {
    const sm = fs.readFileSync('dist/sitemap.xml', 'utf8');
    known = [...sm.matchAll(/<loc>https:\/\/www\.master-ia\.fr(\/[^<]+)<\/loc>/g)]
      .map(m => m[1])
      .filter(p => /^\/formation-[a-z0-9-]+$/.test(p) || /^\/blog\/[a-z0-9-]+$/.test(p));
  } catch { known = []; }
  if (known.length) {
    const esc = p => p.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
    for (let i = 0; i < known.length; i += 40) {
      routes.push({ src: `^(${known.slice(i, i + 40).map(esc).join('|')})$`, dest: '/spa' });
    }
    console.log(`[build-vercel-output-config] filet SPA précis : ${known.length} routes connues (${Math.ceil(known.length / 40)} règles)`);
  } else {
    // Repli si le sitemap manque (ne devrait pas arriver après build:prerender)
    routes.push({ src: '^/formation-[a-z0-9-]+$', dest: '/spa' });
    routes.push({ src: '^/blog/[a-z0-9-]+$', dest: '/spa' });
  }
}

// Toute autre URL inconnue : vraie 404 (status 404 + page brandée avec liens de
// reprise). Surtout PAS de fallback SPA global ici : il servirait la home en 200
// pour n'importe quelle URL fantôme (soft 404 massif, crawl budget gaspillé).
routes.push({ src: '^/(.*)$', status: 404, dest: '/404' });

// `cleanUrls` from vercel.json is only honored by the source-build pipeline.
// When deploying with --prebuilt, we must replicate it explicitly so that
// /foo serves /foo/index.html (or /foo.html) without a trailing slash.
const config = {
  version: 3,
  cleanUrls: vercelJson.cleanUrls === true ? true : undefined,
  trailingSlash: vercelJson.trailingSlash,
  routes,
};
// Strip undefined to keep the JSON tidy.
for (const k of Object.keys(config)) if (config[k] === undefined) delete config[k];

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(config, null, 2) + '\n');

const redirectCount = (vercelJson.redirects || []).length;
const headerCount = (vercelJson.headers || []).length;
console.log(
  `[build-vercel-output-config] wrote ${outPath} — ${headerCount} header rules + ${redirectCount} redirects -> ${routes.length} routes.`
);
