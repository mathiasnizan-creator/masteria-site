# SEO Full Audit — master-ia.fr

**Date** : 2026-04-27
**Cible** : https://www.master-ia.fr (Masteria, centre de formation IA + cabinet conseil, France)
**Méthode** : audit LLM-first avec preuves issues de fetch HTTP direct, lecture du code source local et inspection JSON-LD/HTML.
**Contraintes** : API PageSpeed Insights en quota dépassé le jour de l'audit (Core Web Vitals : confiance Hypothesis).

---

## Score global

| Catégorie | Poids | Score | Note |
|---|---:|---:|---|
| Technical SEO | 25 % | 86 / 100 | Bon |
| Content Quality | 20 % | 82 / 100 | Bon |
| On-Page SEO | 15 % | 74 / 100 | À améliorer |
| Schema / Structured Data | 15 % | 60 / 100 | À améliorer (FAQPage) |
| Performance (CWV) | 10 % | – | Non vérifiable (quota API) |
| Image Optimization | 10 % | 90 / 100 | Excellent |
| AI Search Readiness (GEO) | 5 % | 95 / 100 | Excellent |

**Score pondéré (hors CWV)** : ≈ **80 / 100 — Bon**, avec deux corrections à fort levier (FAQPage et longueur méta).

---

## 1 — Technical SEO

### ✅ Points forts confirmés

| Élément | Preuve | Impact |
|---|---|---|
| HTTPS + HSTS preload | `strict-transport-security: max-age=63072000; includeSubDomains; preload` | Indexation, sécurité |
| HTTP → HTTPS | 1 hop, 301/308 propre | Pas de duplication |
| `referrer-policy` | `strict-origin-when-cross-origin` | Confidentialité Referer |
| `x-content-type-options: nosniff` | Header présent | Sécurité MIME |
| `x-frame-options: SAMEORIGIN` | Header présent | Anti-clickjacking |
| `permissions-policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | Confidentialité |
| Sitemap | 264 URLs, lastmod 2026-04-24, priorités graduées | Découverte |
| robots.txt | AI crawlers explicitement autorisés (GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended) | GEO |
| Cache | `cache-control: public, max-age=0, must-revalidate` + `etag` + `x-vercel-cache: HIT` | Edge caching |
| Hreflang | `fr-FR` + `x-default` corrects | International |
| Prerendering SSG | 264 routes prérendues + déploiement Vercel `--prebuilt` | Indexation rapide |

### ⚠️ Points à surveiller

| Finding | Evidence | Impact | Confidence |
|---|---|---|---|
| Bundle JS principal lourd | `dist/assets/index-Dd0hF54n.js : 831 kB raw / 217 kB gzip` (build log) | TBT, INP mobile | Likely |
| Pas de Content-Security-Policy | Header `content-security-policy` absent dans la réponse | Sécurité (pas un facteur de ranking direct) | Confirmé |
| Core Web Vitals non vérifiés ce jour | `PageSpeed quota exceeded` | LCP / INP / CLS inconnus | Hypothesis |

---

## 2 — On-Page SEO (titles, descriptions, headings)

### Conformité longueur (échantillon de 7 pages)

| Page | Title (chars) | Meta desc (chars) | Statut |
|---|---:|---:|---|
| `/` | 54 | 166 | ⚠️ Desc légèrement longue |
| `/formation-chatgpt` | 69 | 165 | ⚠️ Title longuet, desc OK |
| `/formation-multi-outils` | **103** | **218** | 🔴 Title et desc tronqués |
| `/formation-sprint-ia` | 65 | 169 | ⚠️ Desc légèrement longue |
| `/formation-intelligence-artificielle` | **83** | **207** | 🔴 Title et desc tronqués |
| `/financement-formation-ia` | 61 | **205** | ⚠️ Desc tronquée |
| `/formation-sprint-ia-ai-act` | 59 | **204** | ⚠️ Desc tronquée |

> **Seuils utilisés** : title 30-65 chars, meta desc 110-165 chars (Google tronque au-delà sur mobile).

### H1 / H2 / H3

| Page | H1 count | H1 ok ? | H2 / H3 |
|---|---:|---|---|
| `/` | 1 | ✅ | 7 / 15 |
| `/formation-chatgpt` | 1 | ✅ | 7 / 16 |
| `/formation-multi-outils` | 1 | ✅ | 6 / 16 |
| `/formation-sprint-ia` | 1 | ✅ | 3 / 6 |
| `/formation-intelligence-artificielle` | 1 | ✅ | 6 / 92 |
| `/formation-ia-marketing` | 1 | ✅ | 7 / 8 |
| `/financement-formation-ia` | 1 | ⚠️ | 9 / 0 |
| `/formation-sprint-ia-ai-act` | 1 | ✅ | 10 / 16 |
| `/blog` | 1 | ⚠️ | 2 / 43 |

### 🔴 Findings on-page critiques

1. **H1 financement : espace manquant après la virgule**
   `Vos formations IA,<br>financées à 100 % par votre OPCO` — le `<br>` masque visuellement le défaut, mais Google et les screen readers concatènent en `Vos formations IA,financées`. Insérer un espace : `Vos formations IA, <br>financées…`.
2. **`/formation-multi-outils` title 103 chars** — tronqué en SERP. Cible : `Formation Multi-outils IA · ChatGPT, Copilot, Gemini, Claude, Mistral | Masteria` (≈ 80 → toujours long, viser < 65).
3. **Hiérarchie blog : 2 H2 / 43 H3** — les 12 cartes d'articles utilisent des H3 sans H2 parent visible. Ajouter un H2 par section thématique (« Articles récents », « Catégorie X »).
4. **`/financement-formation-ia` : 9 H2, 0 H3** — la page est plate. Sous-découper certaines sections en H3 (étapes, leviers de financement, FAQ).

### ⚠️ On-page à améliorer

5. Plusieurs meta desc dépassent 165 chars (5 pages sur 7). Tronquer à ~155 chars en gardant le verbe d'action et les chiffres clés.

---

## 3 — Schema.org / Structured Data

### Inventaire JSON-LD (7-9 blocs / page)

| Type | Pages | Statut |
|---|---|---|
| `Organization` + `EducationalOrganization` + `LocalBusiness` (graph) | toutes | ✅ Excellent |
| `Person` (Mathias Nizan) | toutes | ✅ E-E-A-T fort |
| `WebSite` (avec SearchAction) | toutes | ✅ |
| `WebPage` | toutes | ✅ |
| `BreadcrumbList` | hubs et spokes | ✅ |
| `ItemList` (catalogue de spokes) | hubs | ✅ |
| `Course` | hubs outils + spokes | ✅ |
| **`FAQPage`** | home + 5 hubs + spokes | 🔴 **À retirer** |

### 🔴 FAQPage : restriction Google depuis août 2023

> Google limite les rich results FAQPage aux **sites gouvernementaux et autorités sanitaires** depuis le 8 août 2023. Pour un site commercial comme Masteria, le balisage FAQPage :
> - ne génère plus de rich snippet,
> - peut déclencher un avertissement « élément structuré non éligible » dans la Search Console,
> - ne pénalise pas le ranking mais ajoute du poids HTML inutile.

**Action recommandée** : retirer les blocs `FAQPage` du markup JSON-LD côté `SEOHead` (commercial pages). Conserver les questions/réponses en HTML lisible — c'est ce qui aide réellement les featured snippets et les LLM (GEO/AEO).

### ✅ Points forts schema

- Graph `Organization → EducationalOrganization → LocalBusiness` avec adresse complète, fondateur, certification Qualiopi : excellent signal local + autorité.
- `Course` sur les hubs et spokes avec offer/price/duration.
- `Person` Mathias Nizan rattaché aux pages — aide à construire un Knowledge Panel auteur.
- Aucun usage de schema déprécié (HowTo absent, ✓).

---

## 4 — Content Quality & E-E-A-T

### Volume de contenu

| Page | Mots | Évaluation |
|---|---:|---|
| `/financement-formation-ia` | 2 209 | ✅ Très complet |
| `/blog` | 2 419 | ✅ Index riche |
| `/formation-sprint-ia-ai-act` | 1 252 | ✅ Bon |
| `/` | 1 202 | ✅ Bon (homepage) |
| `/formation-ia-marketing` | 1 049 | ✅ Bon |
| `/formation-chatgpt` | 1 042 | ✅ Bon |
| `/formation-multi-outils` | 1 007 | ✅ Bon |
| `/formation-sprint-ia` | **419** | ⚠️ Léger pour un hub |

### E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

| Signal | État |
|---|---|
| Auteur identifié (Mathias Nizan, fondateur, LinkedIn) | ✅ |
| Bio + photo + parcours | ✅ Présents (centre-formation-ia-entreprise) |
| Certification officielle (Qualiopi + PDF accessible) | ✅ Logo + lien PDF certificat |
| Adresse physique + ville | ✅ 17 Rue Richan, 69004 Lyon |
| Sources tierces / citations | ⚠️ Quelques mentions PwC/SnapLogic mais pas de liens sortants vers ces sources |
| Cas clients / témoignages | ⚠️ Présents dans la home mais sans lien vers profil ou logo entreprise tiers |
| Ancienneté / chiffres | ✅ « depuis 2022 » + « +500 pros formés » |

**0 lien sortant sur la home** : le site est en silo. Ajouter 2-3 liens d'autorité (Qualiopi.fr, Commission européenne sur l'AI Act, France compétences) renforcerait l'E-E-A-T.

---

## 5 — Image Optimization

| Vérification | Résultat |
|---|---|
| Alt text sur toutes les images | ✅ Présent et descriptif |
| Width/height attributes | ✅ Présents (CLS protection) |
| Lazy loading hors LCP | ✅ `loading="lazy"` + `decoding="async"` |
| `fetchpriority="high"` sur le LCP | ✅ Logo header |
| Formats modernes | ⚠️ JPG/PNG actuellement, pas de WebP/AVIF |
| Srcset responsive | ✅ Logo footer (`@400w` + `@800w`) |

**À considérer** : convertir les 4 images principales (logo horizontal, Mathias Nizan, Qualiopi logo) en WebP/AVIF pour gagner ~30-40 % de poids.

---

## 6 — AI Search / GEO (Generative Engine Optimization)

| Signal | État |
|---|---|
| `llms.txt` présent et structuré | ✅ |
| AI crawlers autorisés (robots.txt) | ✅ GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai |
| Contenu factuel + chiffres clés | ✅ Tarifs, certifications, dates explicites |
| Person + Organization JSON-LD | ✅ Aide à la désambiguïsation |
| Citations de sources | ⚠️ Pas de liens cliquables vers PwC, SnapLogic, McKinsey |
| Pages comparatives | ✅ `/formation-multi-outils` |
| Réponses directes (Q/R) | ✅ FAQ HTML sur toutes les pages |

**Excellent setup pour GEO**. Le seul gain marginal : transformer les statistiques citées en éléments avec source liée (renforce l'autorité côté LLM).

---

## 7 — Linking & Architecture

| Métrique | Valeur |
|---|---|
| Internal links sur la home | 56 |
| External links sur la home | 0 |
| Profondeur max d'une URL | 1 (hub-and-spoke à plat) |
| Pages orphelines détectées | 0 (toutes accessibles depuis le menu ou la home) |
| Routes prérendues | 264 (sitemap) |
| Redirects 308 (vercel.json → output config) | 38 actifs |

**Architecture hub-and-spoke** très propre. Un seul point d'amélioration : ajouter quelques liens sortants vers des autorités (ci-dessus).

---

## 8 — Technical Limitations

| Limite | Cause |
|---|---|
| Core Web Vitals non mesurés | `PageSpeed Insights API` quota dépassé (`Quota exceeded for quota metric 'Queries'`). À relancer demain ou avec une clé API dédiée. |
| Lighthouse SEO/Accessibility scores | Idem — quota API |
| Visual analysis (screenshots) | Pas de Playwright dans cet environnement |

---

## 9 — Synthèse priorisée

### 🔴 Critical (à corriger immédiatement)

1. **Retirer le balisage `FAQPage`** des JSON-LD côté `SEOHead`. Conserver les FAQ en HTML.
2. **Title `/formation-multi-outils` (103 chars)** — réécrire à < 65 chars.
3. **H1 `/financement-formation-ia`** — ajouter un espace après la virgule.

### ⚠️ Warning (à corriger sous 30 jours)

4. Réduire les meta descriptions à ≤ 160 chars sur 5 pages.
5. Hiérarchie de titres : ajouter des H2 sur `/blog`, des H3 sur `/financement-formation-ia`.
6. Étoffer `/formation-sprint-ia` (419 mots → cible 800-1 000) avec un bloc « Cas d'usage clients » et un comparatif rapide vs formation 2 jours.
7. Convertir les 4 images principales en WebP/AVIF.

### ℹ️ Info (gain marginal)

8. Ajouter 2-3 liens sortants d'autorité depuis la home et la page financement (Qualiopi, France compétences, AI Act).
9. Transformer les statistiques citées en `<a>` vers la source (PwC, SnapLogic, McKinsey).
10. Bundle JS : envisager un code-splitting plus agressif ; le chunk `index-Dd0hF54n.js` à 831 kB peut être scindé par route.
11. Relancer PageSpeed dès que le quota est libéré pour vérifier LCP / INP / CLS.

---

## 10 — Forces majeures à préserver

- ✅ Architecture hub-and-spoke prérendue (264 routes SSG)
- ✅ Schema.org riche (Organization graph, Person, Course, ItemList, BreadcrumbList)
- ✅ AI search ready (llms.txt + crawlers autorisés)
- ✅ Sécurité : HSTS preload, headers complets, HTTPS only
- ✅ Image discipline : alt, width/height, lazy, fetchpriority
- ✅ Internal linking dense et cohérent
- ✅ Hreflang correct (fr-FR + x-default)
- ✅ Sitemap structuré avec lastmod / changefreq / priority

---

*Audit produit avec le SEO Skill (LLM-first, evidence-first). Confiance : Confirmé sur HTML/headers/schema, Hypothesis sur Core Web Vitals (API en quota).*
