/* Guides terrain propres à une page (src/data/spoke-guides/<slug>.js et
   geo-guides/<slug>.js), affichés par le composant TerrainGuide.

   Un chunk par guide, chargé à la demande : seule la page concernée le télécharge.
   La page le lit avec use() (React 19) et suspend jusqu'à son arrivée, sous le même
   Suspense que le chargement de la page elle-même : pas d'intro de hero qui change
   après coup, et le prérendu (networkidle) capture la version complète. */

const SPOKE_LOADERS = import.meta.glob('./spoke-guides/*.js', { import: 'default' })
const GEO_LOADERS = import.meta.glob('./geo-guides/*.js', { import: 'default' })

// Une promesse par guide, gardée en cache : use() exige une promesse stable entre deux rendus.
const cache = new Map()

function load(loaders, key) {
  const loader = loaders[key]
  if (!loader) return null
  if (!cache.has(key)) cache.set(key, loader())
  return cache.get(key)
}

export function spokeGuidePromise(slug) {
  return load(SPOKE_LOADERS, `./spoke-guides/${slug}.js`)
}

export function geoGuidePromise(slug) {
  return load(GEO_LOADERS, `./geo-guides/${slug}.js`)
}
