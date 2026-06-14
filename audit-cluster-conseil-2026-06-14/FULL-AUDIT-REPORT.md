# Audit SEO + GEO — cluster Stratégie / Conseil / Audit IA

**Date** : 2026-06-14
**Périmètre** : les 4 pages du cluster « conseil / stratégie / audit » + l'infrastructure SEO partagée (`SEOHead`, prerender, sitemap, robots, llms.txt, maillage).
**Pages** :
- `/conseil-intelligence-artificielle` — hub cabinet (`ConseilIAPage.jsx`)
- `/conseil-strategie-ia` — mission stratégie (`ConseilStrategieIAPage.jsx`)
- `/diagnostic-ia` — offre d'entrée / audit productisé (`DiagnosticIAPage.jsx`)
- `/methode-projet-ia` — méthode & modèles d'engagement (`MethodeProjetIAPage.jsx`)
**Méthode** : lecture du code source + parsing du **HTML réellement prérendu** (`dist/` et `.vercel/output/static/`, soit ce que voient Google et les moteurs IA sans exécuter de JS) + croisement avec la stratégie `docs/seo-cluster-strategy.md` et le QA technique du 2026-06-14. Aucune donnée inventée.

---

## Verdict — 85 / 100 (Good, borne haute)

Cluster **mature et bien construit**. Base technique saine (prerender complet, schema riche en JSON-LD, titres/metas dans les clous, 1 H1 par page, maillage cross-cluster soigné, intégrité éditoriale réelle : pas d'OPCO promis sur le conseil, pas de chiffre inventé sur diagnostic/méthode). Le cluster est déjà au-dessus du standard du marché « cabinet conseil IA ».

Trois leviers à fort effet de levier subsistent :
1. **Un bug de parité de contenu sur les FAQ** de 3 pages sur 4 (réponses absentes du HTML prérendu) — le correctif le plus rentable.
2. **Un trou sémantique « audit IA »** : c'est le mot du cluster (vous l'appelez vous-même ainsi), mais aucune page ne le cible en title/H1/slug et il n'est pas dans la recherche de mots-clés.
3. **`/conseil-strategie-ia` sous-maillée** : page argent (KD 45) mais seulement 3 liens éditoriaux entrants et absente du footer.

| Catégorie | Score | Confiance |
|---|---|---|
| Technique (crawl, prerender, canonical, redirections, headers) | 88 | Confirmé |
| Contenu / E-E-A-T | 85 | Confirmé |
| On-page (titres, metas, Hn, intentions) | 82 | Confirmé |
| Données structurées (schema) | 90 | Confirmé |
| Performance (CWV) | 80 | **Hypothèse** (PSI en quota 429, non mesuré) |
| Images | 85 | Confirmé (UI à base d'icônes vectorielles, peu de risque) |
| GEO / lisibilité IA | 85 | Confirmé |

---

## 1 — Ce qui est sain (à conserver)

| Contrôle | Constat (mesuré sur le prérendu) |
|---|---|
| Prerender | Les 4 pages livrent 95–132 Ko de HTML statique avec H1, titres, metas, canonical et JSON-LD au premier octet. Pas de dépendance au JS pour le contenu principal. |
| `<title>` | 4/4 ≤ 58 caractères (56, 57, 45, 58). Aucun tronqué en SERP. |
| Meta description | 4/4 entre 149 et 155 caractères. Aucune dupliquée dans le cluster. |
| H1 | Exactement 1 par page, mot-clé cible présent. |
| Hiérarchie Hn | 8–11 H2 + 18–23 H3 par page, **H2 formulés en questions** (« Que fait… », « Comment se déroule… », « À qui s'adresse… ») → structure AEO idéale. |
| Réponse directe | Chaque page ouvre ses sections par un paragraphe **en gras citable** (featured snippet / citation LLM). Excellent pour le GEO. |
| Canonical | 4/4 auto-référents, propres, cohérents. |
| Redirection legacy | `/conseil-ia` → `/conseil-intelligence-artificielle` (308). |
| Schema JSON-LD | Graphe complet et propre : `Organization`+`EducationalOrganization`, `Person` (Mathias Nizan, E-E-A-T), `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage`, + `ProfessionalService` / `Service` + `OfferCatalog` selon la page. `@id` partagés, `aggregateRating` retiré (évite la pénalité). 100 % JSON-LD, aucun Microdata. |
| robots.txt | Crawl IA explicitement autorisé : GPTBot, Google-Extended, ClaudeBot, PerplexityBot, anthropic-ai. |
| llms.txt | Les 4 pages du cluster y figurent avec description. |
| Intégrité | Badge « Finançable OPCO » filtré sur les pages conseil/agence/diagnostic/méthode (composants). Diagnostic et Méthode n'utilisent **pas** le « 1 500 / 98 % » (chiffre formation) — posture capacité respectée. |
| Maillage sortant | Dense et orienté intention (du diagnostic vers le dev, de la stratégie vers le build, du conseil vers la formation). |

---

## 2 — Findings techniques

### 🔴 T1 — Réponses de FAQ absentes du HTML prérendu (3 pages sur 4)
**Preuve** : sur `/conseil-strategie-ia`, `/diagnostic-ia` et `/methode-projet-ia`, le composant `FAQItem` rend la réponse en `{open && <p>…</p>}` (rendu conditionnel). Test sur le prérendu :

| Page | Phrase de réponse FAQ dans le JSON-LD | Dans le corps **visible** |
|---|---|---|
| /conseil-intelligence-artificielle | oui | **oui** ✅ (composant `FAQSection`, repli en CSS `maxHeight:0`) |
| /conseil-strategie-ia | oui | **non** ❌ |
| /diagnostic-ia | oui | **non** ❌ |
| /methode-projet-ia | oui | **non** ❌ |

**Impact** : ~400–500 mots de Q&A à forte intention (« combien coûte… », « à qui appartient le code… », « combien de temps… ») n'existent que dans le JSON-LD. Conséquences :
- les moteurs IA qui priorisent le texte visible et n'analysent pas toujours le JSON-LD (et la plupart des crawlers GEO qui n'exécutent pas le JS) ne voient pas ces réponses → perte de citabilité GEO ;
- défaut de **parité de contenu** entre le `FAQPage` schema et le corps de page (Google demande que le contenu balisé soit présent sur la page) ;
- `/conseil-strategie-ia` ne pèse que 1 883 mots visibles au lieu d'environ 2 300.

**Correctif** : aligner les 3 pages sur le pattern de `FAQSection` (toujours rendre le `<p>`, replier en CSS via `maxHeight`/`hidden`) au lieu du rendu conditionnel `{open && …}`. ~15 lignes par page, zéro risque.

### ⚠️ T2 — Core Web Vitals non vérifiés
**Preuve** : l'API PageSpeed Insights anonyme est en quota 429 durable (constaté avril + juin). LCP/INP/CLS non mesurables programmatiquement.
**Atténuation déjà en place** : la passe du 2026-06-14 a retiré 490 Ko (dataset `SPOKES`) du chargement initial de toutes les pages → TBT/INP mobile en principe améliorés.
**Action** : mesure manuelle sur https://pagespeed.web.dev (1 page cluster, mobile + desktop) pour confirmer. Confiance « hypothèse » tant que non mesuré.

### ℹ️ T3 — `ProfessionalService` sans adresse/`priceRange` propre
**Preuve** : le nœud `ProfessionalService`/`Service` pointe `provider → #organization` (qui porte bien l'adresse Lyon), mais le nœud service lui-même n'a ni `address` ni `priceRange`.
**Impact** : faible. `ProfessionalService` est un sous-type de `LocalBusiness` ; Google peut attendre ces champs pour certains rich results locaux. Non bloquant ici (ce ne sont pas des pages de local pack).

---

## 3 — Findings sémantiques

### 🔴 S1 — Trou « audit IA » (le mot du cluster n'est ciblé nulle part)
**Preuve** : recherche `audit-ia` / `audit intelligence artificielle` dans `src`, `public`, `docs` → **0 résultat** en tant que slug ou requête ciblée. `docs/seo-cluster-strategy.md` n'a aucune ligne de volume pour ce champ. Pourtant :
- `/diagnostic-ia` EST de facto la page d'audit (sa description méga-menu = « Audit + feuille de route en 1 journée ») mais son title/H1 disent « Diagnostic », pas « Audit » ;
- `ConseilIAPage` a un service « Audit IA & diagnostic » mais aucune page n'optimise la requête « audit ia ».

**Impact** : un acheteur qui cherche « audit ia entreprise », « audit intelligence artificielle », « audit maturité IA » ne trouve pas de cible optimisée. Intention transactionnelle haute, manquée.
**Recommandation** : **ne pas créer de nouvelle page** (risque de cannibalisation avec diagnostic). Plutôt **doubler l'intention « audit » sur `/diagnostic-ia`** : variante de title (« Audit IA / diagnostic… »), un H2 « Audit IA ou diagnostic IA : quelle différence ? », occurrences « audit IA » dans le corps et la FAQ. Avant d'agir, **extraire de Semrush** le champ « audit ia / audit intelligence artificielle » (volumes/KD), pour décider entre optimisation de diagnostic et page dédiée — pas de volume inventé ici.

### ⚠️ S2 — Recouvrement « audit / feuille de route / stratégie » entre 3 pages (cannibalisation à surveiller)
**Preuve** : `/conseil-strategie-ia` (title « …audit, feuille de route »), `/diagnostic-ia` (« feuille de route en 1 journée ») et `/conseil-intelligence-artificielle` (desc « audit des usages, stratégie et feuille de route ») partagent le même vocabulaire.
**Atténuation** : les intentions sont en réalité distinctes (cabinet large / mission stratégie COMEX / offre d'entrée productisée 1 jour) et le maillage croisé énonce clairement le rôle de chacune. Risque **modéré**, pas critique.
**Recommandation** : figer la cartographie canonique requête→page (cf. `seo-cluster-strategy.md`) et garder « feuille de route 90 jours / 12 mois » comme signature exclusive de `/conseil-strategie-ia`, « 1 journée / quick wins » comme signature exclusive de `/diagnostic-ia`. Éviter d'ajouter « stratégie » en title de diagnostic.

### ℹ️ S3 — Statistiques marché non sourcées (E-E-A-T)
**Preuve** : `ConseilIAPage` affirme « Plus de 70 % des projets d'IA générative… n'ont pas dépassé le POC (source : enquêtes McKinsey, BCG, Gartner) » sans lien.
**Impact** : faible, mais un lien vers la source réelle renforce l'E-E-A-T et la citabilité GEO.

---

## 4 — Findings stratégiques

### 🔴 P1 — `/conseil-strategie-ia` sous-maillée pour sa valeur
**Preuve** : liens **éditoriaux** entrants par page (occurrences `to="/slug"` dans `src`) :

| Page | Liens éditoriaux entrants | Footer | Méga-menu |
|---|---:|---|---|
| /diagnostic-ia | 22 | ✅ | ✅ |
| /conseil-intelligence-artificielle | 14 | ✅ | ✅ |
| /methode-projet-ia | 7 | ✅ | ✅ |
| **/conseil-strategie-ia** | **3** | **❌ absente** | ✅ |

Les 3 liens viennent uniquement de ConseilIA (×2) et Diagnostic (×1). C'est pourtant la cible de « conseil stratégie ia » (90/mois, KD 45) et la porte d'entrée COMEX (panier le plus élevé).
**Recommandation** : ajouter `/conseil-strategie-ia` au **footer** ; ajouter des liens contextuels depuis les pages secteur (`/ia-secteurs` et les 12 pages secteur, où « priorisation des cas d'usage » est pertinent), `/agence-ia`, `/formation-ia-dirigeants` et la home. Cible : passer de 3 à 12+ liens éditoriaux.

### ⚠️ P2 — Priorités sitemap à réaligner sur la valeur business
**Preuve** : priorités actuelles — conseil 0.90, diagnostic 0.80, strategie 0.70, méthode 0.60. La page stratégie (mission COMEX, panier max) est priorisée sous diagnostic (offre d'entrée).
**Impact** : faible (la priority sitemap est un signal mineur), mais autant l'aligner : envisager strategie à 0.80.

### ℹ️ P3 — Hiérarchie de breadcrumb hétérogène
**Preuve** : `/conseil-strategie-ia` est bien imbriquée (Accueil › Conseil IA › Conseil stratégie IA). `/diagnostic-ia` et `/methode-projet-ia` sont à plat (Accueil › X).
**Impact** : faible. Acceptable pour des pages de conversion, mais imbriquer diagnostic et méthode sous « Conseil IA » renforcerait le signal de cluster topical.

---

## 5 — GEO / AEO (lisibilité par les moteurs IA)

| Signal | État |
|---|---|
| Crawlers IA autorisés (robots.txt) | ✅ GPTBot, Google-Extended, ClaudeBot, PerplexityBot, anthropic-ai |
| llms.txt | ✅ Les 4 pages listées avec description ; entité, NDA, SIRET, fondateur présents |
| Réponses directes citables | ✅ Bloc gras sous chaque H2 question |
| Comparatifs structurés | ✅ Table cabinet/ESN/freelance (ConseilIA), tables phases (Stratégie) — formats très cités par les LLM |
| Q&A en texte visible | ⚠️ **KO sur 3 pages** (cf. T1) — c'est LE point GEO à corriger |
| Entité / E-E-A-T machine-readable | ✅ `Person` + `Organization` + `hasCredential` Qualiopi + `sameAs` LinkedIn/Knowledge Graph |

Le cluster est déjà très « LLM-friendly ». Corriger T1 (FAQ dans le corps) ferme le principal angle mort GEO.

---

## 6 — Limitations de l'audit
- **CWV non mesurés** (quota PSI 429) — voir T2.
- **Backlinks / positions / volumes réels** non audités (pas d'outil de link/keyword data dans l'environnement). Les volumes proviennent de vos exports Semrush ; les recommandations sémantiques (S1) sont à confirmer sur un export à jour.
- Audit fondé sur le **prérendu** (ce que voient Google et les moteurs IA) + le QA HTTP live du 2026-06-14 ; représentatif de l'expérience réelle.
