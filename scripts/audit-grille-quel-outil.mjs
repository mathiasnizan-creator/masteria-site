// Audit de la grille d'arbitrage de /quel-outil-ia.
//
// À RELANCER À CHAQUE FOIS QU'UNE PONDÉRATION CHANGE dans QuelOutilIAPage.jsx :
// une pondération se règle vite, mais elle casse silencieusement des verdicts
// ailleurs. Ce script rejoue 15 attentes d'expert et balaie toutes les
// combinaisons métier × usage × environnement pour détecter les recommandations
// indéfendables (Copilot sous Google Workspace, Copilot sur le code…).
//
// Usage : node scripts/audit-grille-quel-outil.mjs
//
// ⚠️ Les constantes ci-dessous sont un MIROIR de celles de la page : après
// modification de la page, les recopier ici avant de relancer l'audit.

const KEYS = ['chatgpt', 'claude', 'copilot', 'gemini', 'mistral']

const USAGES = {
  docs:           { claude: 3, chatgpt: 2, gemini: 2, mistral: 1, copilot: 1 },
  redaction:      { chatgpt: 3, claude: 3, gemini: 2, mistral: 2, copilot: 2 },
  tableaux:       { copilot: 3, chatgpt: 2, gemini: 2, claude: 2, mistral: 1 },
  emails:         { copilot: 3, gemini: 3, chatgpt: 2, claude: 2, mistral: 2 },
  slides:         { copilot: 3, gemini: 2, chatgpt: 2, claude: 1, mistral: 1 },
  code:           { claude: 3, chatgpt: 3, gemini: 2, mistral: 2, copilot: 1 },
  client:         { chatgpt: 3, mistral: 2, claude: 2, gemini: 2, copilot: 2 },
  recherche:      { gemini: 3, chatgpt: 3, claude: 2, mistral: 2, copilot: 2 },
  automatisation: { chatgpt: 3, claude: 3, mistral: 2, gemini: 2, copilot: 2 },
}

const ENVS = {
  m365:      { copilot: 100, chatgpt: 55, claude: 55, mistral: 55, gemini: 5 },
  workspace: { gemini: 100, chatgpt: 55, claude: 55, mistral: 55, copilot: 5 },
  mixte:     { chatgpt: 75, claude: 75, mistral: 75, copilot: 35, gemini: 35 },
}

const CONTRAINTES = {
  sensibles: { copilot: 100, gemini: 100, mistral: 100, claude: 70, chatgpt: 70 },
  large:     { copilot: 100, gemini: 100, chatgpt: 100, claude: 70, mistral: 70 },
}

const METIERS = {
  juridique:              { claude: 4, mistral: 2, chatgpt: 1, copilot: 1, gemini: 0 },
  finance:                { copilot: 3, claude: 3, chatgpt: 1, gemini: 1, mistral: 1 },
  marketing:              { chatgpt: 3, gemini: 2, claude: 1, mistral: 1, copilot: 1 },
  'ressources-humaines':  { chatgpt: 2, copilot: 2, claude: 2, gemini: 1, mistral: 1 },
  commercial:             { chatgpt: 3, copilot: 2, claude: 1, gemini: 1, mistral: 1 },
  communication:          { chatgpt: 3, claude: 2, gemini: 1, mistral: 1, copilot: 1 },
  management:             { copilot: 3, chatgpt: 2, gemini: 1, claude: 1, mistral: 1 },
  assistante:             { copilot: 4, gemini: 3, chatgpt: 1, claude: 1, mistral: 1 },
  seo:                    { chatgpt: 3, gemini: 3, claude: 1, mistral: 1, copilot: 0 },
  'service-client':       { chatgpt: 3, mistral: 2, claude: 1, gemini: 1, copilot: 1 },
  informatique:           { claude: 4, chatgpt: 3, gemini: 1, mistral: 2, copilot: 1 },
  pedagogique:            { chatgpt: 3, claude: 2, gemini: 2, mistral: 1, copilot: 1 },
  achats:                 { claude: 3, copilot: 2, chatgpt: 1, gemini: 1, mistral: 1 },
  direction:              { claude: 2, chatgpt: 2, copilot: 2, gemini: 1, mistral: 1 },
}

const POIDS = { usages: 0.55, suite: 0.25, contraintes: 0.15, metier: 0.05 }
const NEUTRE = 50

function score({ metier, usages, env, contraintes = [], souverainete = false }) {
  const rows = KEYS.map(k => {
    const uf = usages.map(u => (USAGES[u][k] || 0) / 3 * 100)
    const cU = uf.length ? uf.reduce((a, b) => a + b, 0) / uf.length : NEUTRE
    const cS = env ? ENVS[env][k] : NEUTRE
    const cC = contraintes.length ? contraintes.reduce((a, id) => a + CONTRAINTES[id][k], 0) / contraintes.length : NEUTRE
    const cM = metier ? (METIERS[metier][k] || 0) / 4 * 100 : NEUTRE
    return { k, u: Math.round(cU), su: Math.round(cS), s: Math.round(cU * POIDS.usages + cS * POIDS.suite + cC * POIDS.contraintes + cM * POIDS.metier) }
  })
  const elig = rows.filter(r => !souverainete || r.k === 'mistral').sort((a, b) => b.s - a.s || b.u - a.u || b.su - a.su)
  return elig
}

// ── Attentes d'expert : ce qu'un praticien répondrait ──
const ATTENDUS = [
  { nom: 'Assistanat + emails/slides sous M365', p: { metier: 'assistante', usages: ['emails', 'slides'], env: 'm365' }, ok: ['copilot'] },
  { nom: 'Assistanat + emails sous Workspace', p: { metier: 'assistante', usages: ['emails'], env: 'workspace' }, ok: ['gemini'] },
  { nom: 'Juridique + documents longs', p: { metier: 'juridique', usages: ['docs'], env: 'mixte' }, ok: ['claude'] },
  { nom: 'Juridique + docs SOUS M365 (la suite ne doit pas emporter le doc long)', p: { metier: 'juridique', usages: ['docs'], env: 'm365' }, ok: ['claude'] },
  { nom: 'IT + code sous M365 (M365 Copilot n’est pas un outil de dev)', p: { metier: 'informatique', usages: ['code'], env: 'm365' }, ok: ['claude', 'chatgpt'] },
  { nom: 'IT + code + automatisation', p: { metier: 'informatique', usages: ['code', 'automatisation'], env: 'mixte' }, ok: ['claude', 'chatgpt'] },
  { nom: 'Finance + tableaux sous M365', p: { metier: 'finance', usages: ['tableaux'], env: 'm365' }, ok: ['copilot'] },
  { nom: 'Marketing + rédaction/recherche sous Workspace', p: { metier: 'marketing', usages: ['redaction', 'recherche'], env: 'workspace' }, ok: ['gemini', 'chatgpt'] },
  { nom: 'SEO + recherche sous Workspace', p: { metier: 'seo', usages: ['recherche'], env: 'workspace' }, ok: ['gemini'] },
  { nom: 'Service client + volume', p: { metier: 'service-client', usages: ['client'], env: 'mixte' }, ok: ['chatgpt'] },
  { nom: 'Souveraineté cochée (n’importe quel profil)', p: { metier: 'marketing', usages: ['redaction'], env: 'mixte', souverainete: true }, ok: ['mistral'] },
  { nom: 'Données sensibles + RH sous M365', p: { metier: 'ressources-humaines', usages: ['redaction', 'emails'], env: 'm365', contraintes: ['sensibles'] }, ok: ['copilot'] },
  { nom: 'Direction + docs/recherche, environnement mixte', p: { metier: 'direction', usages: ['docs', 'recherche'], env: 'mixte' }, ok: ['claude', 'chatgpt'] },
  { nom: 'Achats + docs longs', p: { metier: 'achats', usages: ['docs'], env: 'mixte' }, ok: ['claude'] },
  { nom: 'Pédagogique + rédaction', p: { metier: 'pedagogique', usages: ['redaction'], env: 'mixte' }, ok: ['chatgpt', 'claude'] },
]

let echecs = 0
console.log('=== Attentes d\'expert ===')
for (const t of ATTENDUS) {
  const r = score(t.p)
  const gagnant = r[0].k
  const pass = t.ok.includes(gagnant)
  if (!pass) echecs++
  console.log(`${pass ? '✅' : '❌'} ${t.nom}\n     → ${r.map(x => `${x.k} ${x.s}`).join(' · ')}`)
}

// ── Balayage : un outil gagne-t-il quelque part où il ne devrait jamais ? ──
console.log('\n=== Anomalies structurelles ===')
const anomalies = []
for (const metier of Object.keys(METIERS)) {
  for (const env of ['m365', 'workspace', 'mixte']) {
    for (const u of Object.keys(USAGES)) {
      const r = score({ metier, usages: [u], env })
      const g = r[0].k
      // Gemini ne doit jamais gagner en environnement Microsoft, et inversement.
      if (env === 'm365' && g === 'gemini') anomalies.push(`Gemini gagne sous M365 : ${metier}/${u}`)
      if (env === 'workspace' && g === 'copilot') anomalies.push(`Copilot gagne sous Workspace : ${metier}/${u}`)
      // M365 Copilot ne doit jamais gagner sur le code.
      if (u === 'code' && g === 'copilot') anomalies.push(`Copilot gagne sur le code : ${metier}/${env}`)
    }
  }
}
console.log(anomalies.length ? anomalies.join('\n') : 'aucune')

// ── Dispersion : le classement discrimine-t-il, ou tout se vaut-il ? ──
console.log('\n=== Pouvoir de discrimination ===')
const ecarts = []
for (const metier of Object.keys(METIERS)) {
  for (const env of ['m365', 'workspace', 'mixte']) {
    const r = score({ metier, usages: ['redaction', 'docs'], env })
    ecarts.push(r[0].s - r[4].s)
  }
}
const moy = ecarts.reduce((a, b) => a + b, 0) / ecarts.length
console.log(`écart moyen 1er↔5e : ${moy.toFixed(1)} points (min ${Math.min(...ecarts)}, max ${Math.max(...ecarts)})`)
console.log(`\n${echecs} échec(s) sur ${ATTENDUS.length} attentes`)
