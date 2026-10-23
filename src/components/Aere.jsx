/* Mise en page aérée (23/10/2026) : outils communs aux gabarits pour éviter les gros
   blocs de texte. Règle : on réorganise le texte des pages, on n'en ajoute pas.
   Chaque phrase reste écrite telle quelle (citable par les moteurs, texte propre intact).

   - decouperPhrases(texte)   : phrases d'un texte (abréviations et liens {/slug|libellé} protégés)
   - paragraphes(texte, max)  : paragraphes de 1 à `max` phrases, 380 caractères au plus
   - <Paras>                  : rend un texte long en plusieurs <p> courts
   - <PointsCles>             : phrases en puces à pictos fins (durée, prix, public…)
   - <Reperes>                : faits clés en cartes (libellé + valeur + détail), clair ou sombre
   - lignesEnReperes(lignes)  : lignes « En bref » { label, value } → repères
*/
import {
  Clock, UsersRound, Wallet, BadgeCheck, UserCheck, Layers, ClipboardList, MapPin,
  GraduationCap, FileCheck2, CalendarDays, ShieldCheck, Languages, Target, Check,
  Building2, Bot, Scale, Euro, CreditCard,
} from 'lucide-react'

// Pictos nommés dans les données (les fichiers de data n'importent pas lucide)
const ICONES = { Clock, UsersRound, Wallet, BadgeCheck, UserCheck, Layers, ClipboardList, MapPin, GraduationCap, FileCheck2, CalendarDays, ShieldCheck, Languages, Target, Check, Building2, Bot, Scale, Euro, CreditCard }

import { decouperPhrases, paragraphes, scinderValeur } from './aere-texte.js'

export { decouperPhrases, paragraphes, scinderValeur }
export const ACCENT = '#2563EB'

/* Texte long → plusieurs <p> courts. `rich` rend un morceau (liens maison), sinon texte brut.
   `premier` : style propre au premier paragraphe (chapeau). */
export function Paras({ texte, style, premier, rich, max = 3, budget = 380, as: Tag = 'p', id, wrapStyle }) {
  if (texte == null || texte === '') return null
  const morceaux = paragraphes(texte, max, budget)
  const dernier = morceaux.length - 1
  const rendus = morceaux.map((m, i) => (
    <Tag key={i} id={i === 0 && dernier === 0 ? id : undefined} style={{
      ...style,
      ...(i === 0 && premier ? premier : null),
      ...(i < dernier ? { marginBottom: Math.max(12, parseInt(style?.marginBottom ?? 14, 10) || 14) } : null),
    }}>
      {rich ? rich(m) : m}
    </Tag>
  ))
  // Plusieurs paragraphes : une enveloppe, pour rester un seul élément dans une rangée flex ou une grille
  return dernier === 0 ? rendus[0] : <div id={id} style={wrapStyle}>{rendus}</div>
}

/* Encadré « réponse directe » : premier paragraphe appuyé, la suite en texte courant
   (avant : tout l'encadré en gras). */
export function Reponse({ texte, style, rich, fort = '#0A0A0A', courant = '#374151' }) {
  if (!texte) return null
  const { padding, background, border, borderLeft, borderRadius, maxWidth, margin, ...txt } = style || {}
  return (
    <div style={{ padding, background, border, borderLeft, borderRadius, maxWidth, margin }}>
      <Paras texte={texte} rich={rich} max={2} budget={320} style={{ ...txt, margin: 0, color: courant }} premier={{ fontWeight: 700, color: fort }} />
    </div>
  )
}

/* ── Pictos ──────────────────────────────────────────────────────── */

const REGLES_LIBELLE = [
  [/dur[ée]e|calendrier|rythme/i, Clock],
  [/tarif|prix|co[uû]t|budget|investissement/i, Wallet],
  [/financ|opco|prise en charge|qualiopi|certif/i, BadgeCheck],
  [/\bformats?\b|modalit|groupe|effectif|session/i, UsersRound],
  [/public|pour qui|participant|destinataire|profil|qui est concern/i, UserCheck],
  [/outil|logiciel|assistant|mod[eè]le|abonnement/i, Layers],
  [/pr[ée]requis|à apporter|mat[ée]riel|pr[ée]parer/i, ClipboardList],
  [/lieu|o[uù] |ville|zone|r[ée]gion|sur site|pr[ée]sentiel/i, MapPin],
  [/livrable|r[ée]sultat|à la sortie|vous repartez|remis/i, FileCheck2],
  [/d[ée]lai|d[ée]marrage|planning|date|quand/i, CalendarDays],
  [/donn[ée]es|s[ée]curit|rgpd|confidential/i, ShieldCheck],
  [/langue/i, Languages],
  [/objectif|apprenez|comp[ée]tence|vous saurez|programme|formation|contenu|ce que/i, GraduationCap],
  [/entreprise|secteur|client/i, Building2],
  [/agent|automatis/i, Bot],
  [/loi|r[èe]gle|cadre|ai act|juridique/i, Scale],
  [/enjeu|but|pourquoi/i, Target],
]

export function iconePourLibelle(label = '') {
  for (const [re, Icon] of REGLES_LIBELLE) if (re.test(label)) return Icon
  return Check
}

// Picto d'une phrase entière : on cherche l'indice le plus parlant
const REGLES_PHRASE = [
  [/\d[\d\s\u00a0]*(?:€|euros?)\b|€|\$|tarif|prix/i, Euro],
  [/qualiopi|opco|financ/i, BadgeCheck],
  [/\b(?:heures?|jours?|journ[ée]es?|demi-journ|semaines?)\b/i, Clock],
  [/personnes|participants|groupe|individuel|intra|stagiaires|[ée]quipe/i, UsersRound],
  [/donn[ée]es|rgpd|confidential|s[ée]curit/i, ShieldCheck],
  [/chatgpt|copilot|gemini|claude|mistral|vibe|outil/i, Layers],
  [/sur site|visioconf|distance|locaux|ville/i, MapPin],
]

// Le picto suit l'indice qui apparaît le plus tôt dans la phrase
export function iconePourPhrase(phrase = '') {
  const t = typeof phrase === 'string' ? phrase : ''
  let meilleur = null, pos = Infinity
  for (const [re, Icon] of REGLES_PHRASE) {
    const m = t.match(re)
    if (m && m.index < pos) { pos = m.index; meilleur = Icon }
  }
  return meilleur || Check
}

/* ── Puces à pictos ──────────────────────────────────────────────── */

export function PointsCles({ phrases, sombre = false, rich, style, taille = 15.5 }) {
  const items = (phrases || []).filter(Boolean)
  if (!items.length) return null
  const cIcone = sombre ? '#60A5FA' : ACCENT
  const cTexte = sombre ? '#CBD5E1' : '#374151'
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gap: 10, maxWidth: 720, ...style }}>
      {items.map((ph, i) => {
        const Icon = iconePourPhrase(ph)
        return (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: taille, lineHeight: 1.6, color: cTexte }}>
            <span aria-hidden="true" style={{
              flexShrink: 0, width: 28, height: 28, borderRadius: 8, marginTop: -1,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: sombre ? 'rgba(37,99,235,0.14)' : '#EFF4FF',
            }}>
              <Icon size={15} strokeWidth={1.75} style={{ color: cIcone }} />
            </span>
            <span>{rich ? rich(ph) : ph}</span>
          </li>
        )
      })}
    </ul>
  )
}

/* ── Repères (cartes de faits clés) ──────────────────────────────── */

export function lignesEnReperes(lignes) {
  return (lignes || []).map(l => {
    const { tete, detail } = scinderValeur(l.value)
    return { label: l.label, value: tete, detail, icon: l.icon }
  })
}

/* items : [{ icon?, label, value?, detail?, liste?: [string], large?: bool }]
   colonnes : nombre de colonnes visé sur ordinateur (la grille passe à 1 ou 2 colonnes sur mobile). */
export function Reperes({ items, sombre = false, colonnes, id, titre, style, rich, centre = false, compact = false }) {
  const liste = (items || []).filter(Boolean)
  if (!liste.length) return null
  const n = colonnes || (liste.length <= 3 ? liste.length : liste.length === 4 ? 4 : 3)
  const t = sombre
    ? { fond: 'rgba(255,255,255,0.035)', bord: '#1E293B', label: '#60A5FA', valeur: '#F8FAFC', detail: '#94A3B8', titre: '#60A5FA' }
    : { fond: '#fff', bord: '#E5E7EB', label: ACCENT, valeur: '#0A0A0A', detail: '#4B5563', titre: ACCENT }
  const r = x => (rich && typeof x === 'string' ? rich(x) : x)
  return (
    <div id={id} style={{ margin: '0 0 32px', ...style }}>
      {titre && (
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: t.titre, marginBottom: 12, textAlign: centre ? 'center' : 'left' }}>{titre}</div>
      )}
      <dl className={compact ? 'rp-grille rp-m2' : 'rp-grille'} style={{ '--rp-col': n, margin: 0, textAlign: 'left' }}>
        {liste.map(({ icon, icone, label, value, detail, liste: puces, large, haut }) => {
          const Icon = icon || ICONES[icone] || iconePourLibelle(label)
          return (
            <div key={label} className={['rp-carte', large && 'rp-large', haut && 'rp-haut'].filter(Boolean).join(' ')} style={{ background: t.fond, border: `1px solid ${t.bord}`, borderRadius: 12 }}>
              <dt style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8, fontSize: 12, fontWeight: 700, color: t.label, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.3 }}>
                <Icon size={15} strokeWidth={1.75} aria-hidden="true" style={{ flexShrink: 0 }} />
                {label}
              </dt>
              <dd style={{ margin: 0 }}>
                {value && <span style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: t.valeur, lineHeight: 1.3 }}>{r(value)}</span>}
                {detail && <span style={{ display: 'block', fontSize: 14, color: t.detail, lineHeight: 1.55, marginTop: value ? 5 : 0 }}>{r(detail)}</span>}
                {puces?.length > 0 && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: value || detail ? '8px 0 0' : 0, display: 'grid', gap: 5 }}>
                    {puces.map((p, i) => (
                      <li key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', fontSize: 14, color: t.detail, lineHeight: 1.45 }}>
                        <Check size={14} strokeWidth={2} aria-hidden="true" style={{ color: t.label, flexShrink: 0, marginTop: 3 }} />
                        <span>{r(p)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}
