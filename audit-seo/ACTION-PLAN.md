# Action Plan SEO — master-ia.fr

**Source** : `FULL-AUDIT-REPORT.md` (audit du 2026-04-27)
**Lecture** : actions classées par impact / effort. Les fichiers concernés sont indiqués pour chaque action.

---

## 🔴 Sprint 1 — Cette semaine (impact fort, effort faible)

### 1. Retirer le balisage `FAQPage` du JSON-LD

**Pourquoi** : Google a restreint les rich results FAQPage aux sites gouvernementaux et autorités sanitaires (8 août 2023). Sur un site commercial, le balisage ajoute du poids HTML sans bénéfice et peut générer des warnings Search Console.

**Où** : `src/components/SEOHead.jsx` — chercher la fonction qui génère le bloc `@type: 'FAQPage'`.

**Comment** :
- Supprimer la génération JSON-LD `FAQPage`.
- Conserver les questions/réponses en HTML (`<h3>` + `<p>`) — c'est ce qui aide réellement les featured snippets et les LLM.

**Validation** : `curl -s https://www.master-ia.fr/ | grep -c '"FAQPage"'` doit retourner `0` après déploiement.

**Effort** : 15 min. **Impact** : ⭐⭐⭐ (nettoyage schema, suppression warnings).

---

### 2. Title `/formation-multi-outils` à raccourcir

**Pourquoi** : 103 chars actuellement → tronqué dès « ChatGPT, Copilot... » dans les SERP.

**Où** : `src/data/seo-pages.js`, entrée `id: 'multi-outils'`, champ `metaTitle`.

**Avant** :
```
Formation Multi-outils IA en entreprise | ChatGPT, Copilot, Gemini, Claude, Mistral comparés | Masteria
```

**Après proposé** (≤ 65 chars) :
```
Formation Multi-outils IA · ChatGPT, Copilot, Gemini | Masteria
```
(63 chars)

**Effort** : 2 min. **Impact** : ⭐⭐⭐ (CTR SERP).

---

### 3. H1 financement : espace manquant

**Pourquoi** : `Vos formations IA,<br>financées` est concaténé en `Vos formations IA,financées` côté Google et lecteurs d'écran.

**Où** : `src/pages/FinancementPage.jsx`, dans le H1 du hero.

**Avant** :
```jsx
Vos formations IA,<br />
<span style={TITLE_GRADIENT}>financées à 100 % par votre OPCO</span>
```

**Après** :
```jsx
Vos formations IA, <br />
<span style={TITLE_GRADIENT}>financées à 100 % par votre OPCO</span>
```

**Effort** : 30 secondes. **Impact** : ⭐⭐ (lisibilité, accessibilité).

---

## ⚠️ Sprint 2 — Sous 30 jours

### 4. Réduire les meta descriptions à ≤ 160 chars

**Où** : `src/data/seo-pages.js` (HUBS) et fichiers de page concernés.

**Pages à corriger** :

| Page | Actuel | Cible (≤ 160) |
|---|---:|---|
| `/` | 166 | « Formez vos équipes à ChatGPT, Copilot, Gemini, Claude, Mistral. Certifié Qualiopi, 100 % OPCO. +500 pros formés. Devis sous 24 h. » |
| `/formation-multi-outils` | 218 | « Comparer ChatGPT, Copilot, Gemini, Claude et Mistral sur vos cas réels. 2 jours, certifié Qualiopi, finançable OPCO. Devis sous 24 h. » |
| `/formation-sprint-ia` | 169 | « Formations IA de 3 h, prêtes à déployer à grande échelle. Sensibilisation, prompts, Excel, AI Act. Qualiopi, finançable OPCO. » |
| `/formation-intelligence-artificielle` | 207 | « Catalogue de 89 formations IA pour entreprises, certifiées Qualiopi, finançables OPCO. ChatGPT, Copilot, Gemini, Claude, Mistral. » |
| `/financement-formation-ia` | 205 | « Formation IA finançable à 100 % par votre OPCO. Masteria certifié Qualiopi gère votre dossier de A à Z. Tarifs transparents. » |
| `/formation-sprint-ia-ai-act` | 204 | « Sprint IA AI Act : 3 h pour comprendre l'AI Act européen, l'article 4, les classifications de risque, le calendrier 2026. » |

**Effort** : 30 min. **Impact** : ⭐⭐ (CTR SERP).

---

### 5. Étoffer la hiérarchie de titres

**5a — `/blog`** : 2 H2 / 43 H3. Ajouter au moins un H2 par section thématique (Articles récents, Catégories, Auteurs).

**5b — `/financement-formation-ia`** : 9 H2 / 0 H3. Sous-découper :
- H2 « Les étapes en 30 secondes » → ajouter H3 par étape
- H2 « Les leviers de financement » → H3 par levier (OPCO, FNE, plan de dév., CIF dirigeant)
- H2 « FAQ » → la liste de questions reste un H2 + accordéons en H3

**Effort** : 1 h. **Impact** : ⭐⭐ (structure de l'extrait, GEO).

---

### 6. Étoffer `/formation-sprint-ia`

**Pourquoi** : 419 mots seulement pour un hub. Cible : 800-1 000 mots.

**Ajouter** :
- Un bloc « Pour quelles entreprises ? » (3-4 cas types)
- Un bloc « Sprint vs formation 2 jours » (mini-tableau comparatif)
- Un bloc « Comment se déroule une session » (3 étapes)

**Où** : `src/data/hub-content.js` — créer une entrée `'sprint-ia'` avec `why`, `programme`, `faq`.

**Effort** : 2 h. **Impact** : ⭐⭐ (autorité du hub, conversions).

---

### 7. Convertir les images principales en WebP/AVIF

**Pourquoi** : économie de poids ~30-40 %, gain LCP mobile.

**Images à convertir** (déjà servies via `<picture>` sur le logo, à étendre) :
- `/assets/logo-horizontal@400w.jpg` + `@800w` → ajouter `.webp` et `.avif`
- `/assets/mathias-nizan.jpg` → idem
- `/assets/qualiopi-logo.png` → conserver PNG (logo officiel à ne pas déformer) mais ajouter `.webp` en sortie

**Outil** : `sips` (macOS natif) ou `cwebp` / `avifenc`.
```bash
cwebp -q 82 public/assets/logo-horizontal@400w.jpg -o public/assets/logo-horizontal@400w.webp
```

**Effort** : 1 h. **Impact** : ⭐⭐ (LCP mobile, Lighthouse).

---

## ℹ️ Sprint 3 — Quand l'agenda permet (gains marginaux)

### 8. Ajouter 2-3 liens sortants d'autorité

**Pourquoi** : 0 lien sortant sur la home → silo isolé. L'E-E-A-T se construit aussi par citation explicite.

**Cibles** :
- Section certification → lien vers `https://travail-emploi.gouv.fr/qualiopi`
- Section AI Act → lien vers la page officielle de la Commission européenne
- Section financement → lien vers `https://www.francecompetences.fr/`

**Où** : `src/pages/HomePage.jsx`, `src/pages/FinancementPage.jsx`, `src/pages/QualiopiPage.jsx`.

**Effort** : 30 min. **Impact** : ⭐ (E-E-A-T, signal de confiance).

---

### 9. Liens sources sur les statistiques

**Pourquoi** : les chiffres « PwC », « SnapLogic », « McKinsey » sont cités sans lien vers la source. Pour les LLM (GEO), une citation cliquable renforce l'autorité.

**Où** : `src/pages/HomePage.jsx` (section stats secteur) ou tout fichier qui cite ces sources.

**Effort** : 30 min. **Impact** : ⭐ (GEO, AEO).

---

### 10. Code-splitting du bundle JS principal

**Pourquoi** : `index-Dd0hF54n.js` à 831 kB raw / 217 kB gzip. Le SSG masque l'impact en visite initiale, mais la navigation client-side reste lourde.

**Pistes** :
- `lazy()` les composants déjà appelés sur 1 seule page (FormationDetailScreen, BlogArticlePage). Vérifier qu'ils sont en `lazy()` (déjà le cas pour la plupart).
- Inspecter `dist/assets/blog-articles-*.js` à 423 kB — si tout le contenu blog est embarqué, le code-splitter par article.

**Effort** : 3-4 h. **Impact** : ⭐⭐ (TBT, INP mobile).

---

### 11. Relancer PageSpeed Insights

**Pourquoi** : l'API a renvoyé un quota dépassé le jour de l'audit. Les Core Web Vitals (LCP, INP, CLS) n'ont pas été vérifiés.

**Quand** : demain matin ou avec une clé API dédiée.

**Commande** :
```bash
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https%3A%2F%2Fwww.master-ia.fr%2F&strategy=mobile&key=YOUR_KEY"
```

**Effort** : 15 min. **Impact** : information indispensable pour Sprint 3.

---

## Tableau de pilotage

| # | Action | Sprint | Effort | Impact | Fichier(s) |
|---:|---|:---:|:---:|:---:|---|
| 1 | Retirer FAQPage JSON-LD | 1 | 15 min | ⭐⭐⭐ | `src/components/SEOHead.jsx` |
| 2 | Title multi-outils ≤ 65 chars | 1 | 2 min | ⭐⭐⭐ | `src/data/seo-pages.js` |
| 3 | H1 financement : espace après virgule | 1 | 30 s | ⭐⭐ | `src/pages/FinancementPage.jsx` |
| 4 | Meta desc ≤ 160 chars × 6 pages | 2 | 30 min | ⭐⭐ | `src/data/seo-pages.js`, `FinancementPage.jsx` |
| 5 | Hiérarchie titres blog + financement | 2 | 1 h | ⭐⭐ | `src/pages/FinancementPage.jsx`, blog |
| 6 | Étoffer Sprint IA hub | 2 | 2 h | ⭐⭐ | `src/data/hub-content.js` |
| 7 | Images WebP/AVIF | 2 | 1 h | ⭐⭐ | `public/assets/`, `<picture>` |
| 8 | Liens sortants d'autorité | 3 | 30 min | ⭐ | `HomePage.jsx`, `FinancementPage.jsx` |
| 9 | Liens sources des statistiques | 3 | 30 min | ⭐ | `HomePage.jsx` |
| 10 | Code-splitting plus fin | 3 | 3-4 h | ⭐⭐ | `vite.config.js`, lazy components |
| 11 | PageSpeed Insights re-run | 3 | 15 min | info | externe |

**Effort total estimé** : ~10 h sur 3 sprints.
**ROI attendu** : meilleur CTR SERP (titles/descs propres), schema clean (sans warnings FAQPage), GEO renforcé, foundations solides pour mesurer/optimiser CWV ensuite.

---

*Plan généré avec le SEO Skill — chaque action est traçable au finding du `FULL-AUDIT-REPORT.md`.*
