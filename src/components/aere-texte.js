/* Découpage du texte pour la mise en page aérée (voir Aere.jsx). Fonctions pures, sans React. */

/* ── Phrases ─────────────────────────────────────────────────────── */

// Mots après lesquels un point n'achève pas la phrase
const ABREV = new Set(['art', 'arts', 'p', 'pp', 'n', 'no', 'nos', 'cf', 'env', 'm', 'mm', 'mme', 'mmes', 'mlle', 'dr', 'pr', 'me', 'st', 'ste',
  'vol', 'chap', 'fig', 'éd', 'ed', 'ex', 'av', 'apr', 'vs', 'inc', 'corp', 'ltd', 'co', 'sa', 'sas', 'jr', 'sr', 'al', 'resp', 'min', 'max', 'hab', 'tél', 'tel', 'mds', 'md', 'mrd'])

export function decouperPhrases(texte) {
  if (typeof texte !== 'string') return [texte]
  const s = texte.trim()
  const out = []
  let debut = 0, accolade = 0
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '{') accolade++
    else if (ch === '}') accolade = Math.max(0, accolade - 1)
    if (accolade || !'.!?…'.includes(ch)) continue
    // ponctuation finale éventuellement suivie d'un guillemet ou d'une parenthèse fermante
    let j = i + 1
    // « … fini. » : espace (insécable ou non) puis guillemet fermant
    if ((s[j] === ' ' || s[j] === '\u00a0' || s[j] === '\u202f') && s[j + 1] === '»') j += 1
    while (j < s.length && '»")’'.includes(s[j])) j++
    if (j < s.length && s[j] !== ' ' && s[j] !== '\u00a0') continue
    let k = j
    while (k < s.length && (s[k] === ' ' || s[k] === '\u00a0')) k++
    if (k >= s.length) break
    const suivant = s[k]
    if (!/[A-ZÀ-ÖØ-Þ«"(\d{]/.test(suivant)) continue
    if (ch === '.') {
      const mot = (s.slice(debut, i).match(/([\p{L}]+)$/u) || [])[1] || ''
      if (ABREV.has(mot.toLowerCase())) continue
      if (/^\p{Lu}$/u.test(mot)) continue // initiale : « J. Dupont »
    }
    out.push(s.slice(debut, j).trim())
    debut = k
    i = k - 1
  }
  const fin = s.slice(debut).trim()
  if (fin) out.push(fin)
  return out
}

/* Regroupe les phrases en paragraphes de 1 à `max` phrases (et `budget` caractères).
   Une dernière phrase très courte rejoint le paragraphe précédent. */
export function paragraphes(texte, max = 3, budget = 380) {
  if (typeof texte !== 'string') return [texte]
  if (texte.length <= budget) return [texte]
  const groupes = []
  let cour = []
  let n = 0
  for (const ph of decouperPhrases(texte)) {
    if (cour.length && (cour.length >= max || n + ph.length + 1 > budget)) {
      groupes.push(cour); cour = []; n = 0
    }
    cour.push(ph); n += ph.length + 1
  }
  if (cour.length) {
    const prec = groupes[groupes.length - 1]
    if (prec && cour.length === 1 && cour[0].length < 90 && prec.length < max) prec.push(cour[0])
    else groupes.push(cour)
  }
  return groupes.map(g => g.join(' '))
}

/* Sépare une valeur « En bref » en tête courte (en gras) et détail, sans changer un mot :
   « Deux journées, souvent séparées… » → tête « Deux journées », détail « Souvent séparées… ». */
export function scinderValeur(valeur) {
  if (typeof valeur !== 'string') return { tete: null, detail: valeur }
  const v = valeur.trim()
  if (v.length <= 48) return { tete: v, detail: null }
  const m = v.match(/^(.{6,60}?)(?:\s*[,;:]\s+|\s+·\s+|\s+:\s+)(.{18,})$/s)
  if (!m || /\d$/.test(m[1]) && /^\d/.test(m[2])) return { tete: null, detail: v }
  const detail = m[2].charAt(0).toUpperCase() + m[2].slice(1)
  return { tete: m[1], detail }
}

