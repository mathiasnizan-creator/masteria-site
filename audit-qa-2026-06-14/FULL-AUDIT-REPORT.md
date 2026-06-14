# Audit QA technique + mesure — master-ia.fr

**Date** : 2026-06-14
**Périmètre** : les 232 pages prérendues (dist/), + contrôles live (headers, redirections, robots).
**Méthode** : audit déterministe (parsing HTML, validation schema, intégrité des liens) + contrôles HTTP live. Pas d'estimation : chaque constat est mesuré.
**Contexte** : passe de consolidation après une grosse vague de build (cluster high-ticket conseil/dev/agence + secteurs + solutions).

---

## Verdict

Le site est **structurellement sain**. Aucun défaut bloquant. Deux corrections appliquées dans cette passe (schema déprécié + perf site-wide), et une liste de recommandations concentrées sur le catalogue formation (longueurs de titres/metas).

---

## 1 — Ce qui est vérifié sain (0 action)

| Contrôle | Résultat |
|---|---|
| Liens internes cassés | **0** sur 232 pages (tous les href résolvent vers une route réelle) |
| Titres `<title>` manquants | 0 |
| Titres dupliqués | 0 |
| H1 manquants / multiples | 0 / 0 (exactement 1 H1 par page) |
| Meta description manquante | 0 |
| Canonical manquant / incohérent | 0 / 0 (tous auto-référents, format propre) |
| Pages noindex | 4, toutes correctes (3 pages privées Claude + /formations catalogue) |
| `aggregateRating` dans le schema | **absent partout** (volontaire, évite la pénalité Google) |
| Placeholder dans JSON-LD | faux positif (« votre nom » = copie FAQ légitime sur /agence-ia-marketing) |
| Apex → www | 308 permanent |
| HTTP → HTTPS | 308 |
| Trailing slash (`/x/` → `/x`) | 308 |
| Redirections legacy (ex. /conseil-ia) | 308 |
| Page 404 | vraie 404 (statut 404, page brandée) |
| Headers sécurité | HSTS preload, X-Content-Type nosniff, X-Frame SAMEORIGIN, Referrer-Policy, Permissions-Policy — tous présents |
| robots.txt / llms.txt / sitemap.xml | 200 |

---

## 2 — Corrections appliquées dans cette passe

### A. Schema HowTo déprécié retiré (site-wide)
- **Constat** : ~80 pages de formation (course pages) émettaient un JSON-LD `HowTo` généré par `SEOHead`. Google a **supprimé les rich results HowTo en septembre 2023** : balisage sans bénéfice, qui alourdit le HTML.
- **Fix** : génération `jsonLdHowTo` retirée de `SEOHead.jsx`. Le programme reste décrit par le schema `Course` (hasCourseInstance), qui lui est toujours actif.

### B. Performance : 490 kB de données retirés du chargement initial de CHAQUE page
- **Constat** (le point le plus impactant) : `App.jsx` (le routeur, chargé sur **toutes** les pages) importait le dataset complet `SPOKES` (~490 kB / 118 kB gzip) **uniquement pour générer les `<Route>`**. Résultat : `data-spokes` était préchargé (`modulepreload`) et évalué sur chaque page, y compris la home → coût TBT/INP inutile partout.
- **Fix** :
  - `HUBS`/`METIERS` extraits dans un module léger `src/data/catalog-meta.js` (réexporté par seo-pages, aucun consommateur cassé).
  - Liste légère des slugs de spokes générée au build (`src/data/spoke-slugs.js`, via `generate-sitemap.mjs`, source = `SPOKES` donc toujours synchro) ; `App.jsx` route désormais depuis cette liste.
  - `seo-pages.js` rendu importable en Node (extensions `.js` ajoutées) pour la génération.
- **Résultat mesuré** : `data-spokes` **n'apparaît plus dans les modulepreloads de l'entrée** (vérifié sur le build). La page `SpokePage` charge ce dataset en chunk lazy **uniquement** quand on ouvre une page spoke. Toutes les routes (spoke, hub, métier, géo, home) vérifiées fonctionnelles après refonte.

---

## 3 — Recommandations (non appliquées — à arbitrer)

### R1. Longueurs de titres (truncation SERP) — catalogue formation
Mesure sur les pages **indexables** :

| Tranche | Nb pages |
|---|---|
| 61-65 car. | 51 (limite, souvent OK) |
| 66-70 car. | 19 |
| 71-75 car. | 13 |
| **76+ car.** | **13** (tronqués nets) |

Pires (>70, indexables) : `/formation-ia-debutant` (92), `/glossaire-ia` (84), `/formation-multi-outils-marketing` (84), `/formation-intelligence-artificielle-generative` (83), `/blog` (82), plusieurs `/formation-mistral-*` (80-81)… Ce sont des **pages formation** (data : seo-pages.js, blog-articles.js, topics). Le cluster conseil/dev récemment optimisé est dans les clous.
**Action** : raccourcir en priorité les ~26 titres > 70 car.

### R2. Longueurs de meta descriptions (truncation)
| Tranche | Nb pages |
|---|---|
| 156-165 car. | 43 (limite) |
| 166-180 car. | 43 |
| **181+ car.** | **12** |
Même périmètre (formation). **Action** : réécrire en priorité les ~55 metas > 165 car.

### R3. 2 meta descriptions dupliquées (paires blog/landing)
- `/blog/formation-ecrits-pro-ia-redaction` ↔ `/formation-ia-ecrits-pro`
- `/blog/formation-manager-avec-ia` ↔ `/formation-ia-managers`
**Action** : différencier la meta de l'un des deux.

### R4. Core Web Vitals — non mesurables via API
L'API PageSpeed Insights anonyme reste durablement en **quota dépassé (429)** (avril, juin). Impossible de mesurer LCP/INP/CLS programmatiquement.
**Action (toi, 5 min)** : mesurer manuellement sur https://pagespeed.web.dev (home + une page cluster, mobile + desktop). Le fix perf B ci-dessus devrait améliorer le TBT/INP mobile ; cette mesure confirmera l'impact.

---

## 4 — Limitations de l'audit

- **CWV non mesurés** (quota PSI durable) — voir R4.
- **Backlinks / positions** non audités (pas d'outil de link data dans l'environnement) — à croiser avec un export Search Console.
- Audit basé sur le **prérendu** (ce que voient Google et les visiteurs sans JS) + le HTTP live ; représentatif de l'expérience réelle.
