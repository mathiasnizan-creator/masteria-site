# Plan d'action QA — master-ia.fr (2026-06-14)

## ✅ Fait dans cette passe
1. Schema **HowTo déprécié retiré** (SEOHead, ~80 pages).
2. **Perf site-wide** : `data-spokes` (490 kB) retiré du chargement initial de toutes les pages (App route depuis une liste de slugs légère ; HUBS/METIERS en module léger). `SpokePage` charge le dataset en lazy uniquement.

## 🔴 À faire (toi, 5 min chacun)
- **Mesurer les CWV** sur https://pagespeed.web.dev (home + 1 page cluster, mobile+desktop) — l'API est durablement bloquée. Confirmera l'impact du fix perf.
- **Search Console** : inspecter + demander l'indexation des nouveaux hubs (`/ia-secteurs`, `/solutions-ia`, `/diagnostic-ia`, `/methode-projet-ia`).

## 🟠 À faire (contenu, sur greenlight — je peux exécuter)
- **~26 titres > 70 car.** à raccourcir (catalogue formation : seo-pages.js, blog-articles.js, topics). Pires : /formation-ia-debutant (92), /glossaire-ia (84)…
- **~55 metas > 165 car.** à réécrire (même périmètre).
- **2 metas dupliquées** (paires blog/landing) à différencier.

> Les pages du cluster conseil/dev/agence/secteurs/solutions sont déjà aux bonnes longueurs (passe d'optimisation précédente). Les R1-R2 concernent uniquement le catalogue formation historique.

## Détails
Voir `FULL-AUDIT-REPORT.md`.
