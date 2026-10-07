// Articles de blog réécrits (septembre 2026). Chaque fichier remplace, dans
// blog-articles.js, les champs qu'il fournit (title, blocks, faq, etc.).
// Imports explicites : ce module est aussi chargé par les scripts Node (sitemap, prérendu).
import aiAct from './ai-act-formation-ia-obligatoire-entreprise.js'
import auditIa from './audit-ia-entreprise-methode-prix.js'
import automatiser from './automatiser-taches-repetitives-chatgpt.js'
import financer from './financer-formation-ia-opco-qualiopi.js'
import marketing from './formation-ia-marketing-equipes.js'
import former from './former-ses-equipes-ia-par-ou-commencer.js'
import appelsOffres from './ia-pour-repondre-appels-doffres.js'
import strategie from './strategie-ia-entreprise-guide.js'

export const BLOG_REFONTE = Object.fromEntries(
  [aiAct, auditIa, automatiser, financer, marketing, former, appelsOffres, strategie].map(a => [a.slug, a])
)
