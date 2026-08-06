// Signalement IndexNow — à lancer APRÈS chaque déploiement en production.
//
// Bing et les moteurs qui alimentent ChatGPT Search et Copilot acceptent le
// protocole IndexNow : on leur signale les URL changées, ils crawlent dans la
// foulée au lieu d'attendre leur passage. Google l'ignore (il a le sitemap).
// La veille quotidienne pingue déjà ses propres URL (veille-matin.sh, étape
// 10 bis) ; ce script couvre les déploiements du site.
//
// Usage :
//   node scripts/ping-indexnow.mjs                     → toutes les URL du sitemap
//   node scripts/ping-indexnow.mjs /formation-ia-lyon  → routes précises uniquement
//
// npm : `npm run ping:indexnow [-- /route-a /route-b]`
// Jamais bloquant : un échec s'affiche mais ne fait pas échouer le déploiement.

import fs from 'fs'
import path from 'path'

const HOST = 'www.master-ia.fr'
const root = process.cwd()

const key = fs.readFileSync(path.join(root, 'public/indexnow-cle.txt'), 'utf8').trim()
if (!key) {
  console.log('⚠ clé IndexNow absente (public/indexnow-cle.txt), signalement sauté')
  process.exit(0)
}

const args = process.argv.slice(2)
let urls
if (args.length > 0) {
  urls = args.map(r => `https://${HOST}${r.startsWith('/') ? r : `/${r}`}`)
} else {
  const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8')
  urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])
}
if (urls.length === 0) {
  console.log('aucune URL à signaler')
  process.exit(0)
}

// L'API accepte jusqu'à 10 000 URL par POST : un seul envoi suffit largement (≈260).
const body = JSON.stringify({
  host: HOST,
  key,
  keyLocation: `https://${HOST}/${key}.txt`,
  urlList: urls,
})

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  })
  if (res.status === 200 || res.status === 202) {
    console.log(`✅ IndexNow : ${urls.length} URL signalées (HTTP ${res.status})`)
  } else {
    console.log(`⚠ IndexNow : réponse ${res.status} (non bloquant)`)
  }
} catch (e) {
  console.log(`⚠ IndexNow injoignable : ${e.message} (non bloquant)`)
}
