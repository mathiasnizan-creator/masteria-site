# Plan d'action — cluster Stratégie / Conseil / Audit IA

Priorisé par impact / effort. Réf. : `FULL-AUDIT-REPORT.md` (2026-06-14).

## P0 — À faire en premier (fort impact, effort faible)

### 1. Rendre les réponses de FAQ visibles dans le prérendu (T1) — GEO + SEO
- **Fichiers** : `src/pages/ConseilStrategieIAPage.jsx`, `DiagnosticIAPage.jsx`, `MethodeProjetIAPage.jsx`.
- **Quoi** : remplacer le rendu conditionnel `{open && <p>…</p>}` du composant `FAQItem` par un rendu **toujours présent** replié en CSS (sur le modèle de `FAQSection` dans `screens2.jsx` : `<div style={{maxHeight: open?…:0, overflow:'hidden'}}>` ou `hidden={!open}`).
- **Pourquoi** : ramène ~400–500 mots de Q&A par page dans le HTML crawlable ; rétablit la parité contenu/`FAQPage` ; ferme le principal angle mort GEO.
- **Effort** : ~15 lignes/page. **Vérif** : rebuild prerender, puis confirmer qu'une phrase de réponse FAQ apparaît dans le corps visible (hors `<script>`).

### 2. Capter l'intention « audit IA » sur /diagnostic-ia (S1)
- **Préalable** : extraire de Semrush le champ « audit ia / audit intelligence artificielle / audit maturité ia » (volumes + KD) et l'ajouter à `docs/seo-cluster-strategy.md`. **Ne pas inventer de volume.**
- **Si volume confirmé** : sur `/diagnostic-ia`, varier le title pour inclure « audit » (ex. « Audit & diagnostic IA : feuille de route en 1 journée | Masteria », ≤ 60 car.), ajouter un H2 « Audit IA ou diagnostic IA : quelle différence ? » avec réponse directe, semer « audit IA » dans le corps + 1 question FAQ.
- **Décision** : optimiser diagnostic plutôt que créer `/audit-ia` (évite la cannibalisation S2).

### 3. Re-mailler /conseil-strategie-ia (P1)
- **Footer** (`src/components/components.jsx`, liste vers ~ligne 752) : ajouter `['Conseil stratégie IA', '/conseil-strategie-ia']`.
- **Liens contextuels** depuis : `/ia-secteurs` + pages secteur (sur « priorisation des cas d'usage »), `/agence-ia`, `/formation-ia-dirigeants`, et la home.
- **Cible** : 3 → 12+ liens éditoriaux entrants. **Effort** : faible, réparti.

## P1 — Ensuite (impact moyen)

### 4. Mesurer les CWV (T2)
- Mesure manuelle https://pagespeed.web.dev sur `/conseil-intelligence-artificielle` + home, mobile & desktop. Confirme l'effet du retrait des 490 Ko. **Effort** : 5 min.

### 5. Réaligner les priorités sitemap (P2)
- `scripts/generate-sitemap.mjs` : passer `/conseil-strategie-ia` à 0.80 (au niveau de diagnostic). **Effort** : 1 ligne.

### 6. Sourcer les stats marché (S3)
- `ConseilIAPage` : lier la stat « >70 % des POC… » à une source réelle (rapport McKinsey/BCG/Gartner) ou la reformuler. **Effort** : faible. Bénéfice E-E-A-T + GEO.

## P2 — Optionnel (polish)

### 7. Homogénéiser les breadcrumbs (P3)
- Imbriquer `/diagnostic-ia` et `/methode-projet-ia` sous « Conseil IA » dans `breadcrumbs` (renforce le cluster topical). À arbitrer vs leur statut de pages de conversion.

### 8. Enrichir le schema service (T3)
- Ajouter `areaServed` détaillé / `priceRange` indicatif sur les nœuds `ProfessionalService` si pertinent. Bénéfice marginal.

---

### Ce qui ne demande AUCUNE action (déjà bon)
Titres/metas (longueurs OK), 1 H1/page, canonicals, redirection `/conseil-ia`, headers sécurité, graphe JSON-LD, robots IA, llms.txt, réponses directes citables, intégrité (pas d'OPCO sur conseil, pas de chiffre inventé sur diagnostic/méthode), maillage sortant. **Ne pas y toucher.**
