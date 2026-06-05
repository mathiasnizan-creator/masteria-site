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

for (const r of vercelJson.redirects || []) {
  routes.push({
    src: sourceToRegex(r.source),
    status: r.permanent ? 308 : 307,
    headers: { Location: r.destination },
  });
}

routes.push({ handle: 'filesystem' });

// SPA fallback: any path not matched by a static file is rewritten to
// index.html so React Router can handle the route client-side. This catches
// private/unlisted routes that aren't in the sitemap (and therefore aren't
// prerendered), and also any future route added to App.jsx before its
// prerendered HTML is generated.
routes.push({ src: '^/(.*)$', dest: '/index.html' });

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
