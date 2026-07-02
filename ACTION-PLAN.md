# Plan d'action SEO & GEO — Cluster money master-ia.fr

Issu de l'audit du 2 juillet 2026 (voir FULL-AUDIT-REPORT.md). Priorisé par impact ÷ effort.

## P0 — Cette semaine (impact fort, effort faible)

1. **Compléter llms.txt** *(C1 — 15 min)*
   Ajouter à `public/llms.txt` : `/charte-ia-entreprise`, `/ia-responsable`, `/ia-et-rgpd`, `/formation-gouvernance-ia`, `/formation-ia-qse` avec une ligne descriptive chacune. Bonus : générer la liste depuis le sitemap dans `generate-sitemap.mjs` pour que ça n'arrive plus.

2. **Raccourcir les 3 meta descriptions hors limite** *(C4 — 15 min)*
   meilleur-cabinet-conseil-ia (167 → ≤158), meilleure-agence-ia (168 → ≤158), cas-usage-ia-entreprise (172 → ≤158). Vérifier formation-ia-qse (160, limite).

## P1 — Ce mois-ci (impact fort, effort moyen)

3. **Déployer byline + Article JSON-LD + dates sur les 19 pages sans E-E-A-T daté** *(C2 — ~2 h, mécanique)*
   Patron déjà en place sur 8 pages : « Par Mathias Nizan, fondateur de Masteria · Mis à jour en [mois] 2026 » + `articleJsonLd` + props `datePublished/dateModified` (date git de création). Ordre : les 7 pages conseil d'abord (requêtes les plus compétitives), puis les 11 agence/dev, puis ia-secteurs.

4. **Keywords dédiés sur les 14 pages en fallback formation** *(C3 — ~1 h)*
   Une constante KEYWORDS par page, calée sur la requête cible et ses variantes, passée à SEOHead.

5. **Fils d'Ariane à 3 niveaux : matérialiser les deux hubs** *(C6 — ~1 h 30)*
   - Pilier conseil : rattacher conseil-data-ia, diagnostic-ia, methode-projet-ia, prix-projet-ia à `/conseil-intelligence-artificielle` (conseil-strategie-ia l'est déjà).
   - Pilier dev : rattacher agence-developpement-ia, agence-automatisation-ia, agence-ia-marketing, agence-seo-ia, outils-ia-sur-mesure à `/agence-ia`.
   Nav visible + tableau `breadcrumbs` (le JSON-LD suit automatiquement).

## P2 — Trimestre (fond)

6. **Passe anti-tics sur les 15 pages anciennes** *(C5 — 1 à 2 sessions)*
   Commencer par cas-usage-ia-entreprise (9 hits) et conseil-data-ia (4). Juger chaque occurrence en contexte, réécrire selon la règle d'écriture maison. Le cluster conformité (0 hit) sert d'étalon.

7. **og:image dédiées par pilier** *(C8 — optionnel)*
   Un visuel 1200×630 par famille (conseil / dev / gouvernance) plutôt que le logo générique partout.

8. **Relancer PageSpeed quand le quota le permet** *(C8)*
   `curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.master-ia.fr/gouvernance-ia&strategy=mobile"` — vérifier LCP < 2,5 s et INP < 200 ms sur mobile. Aucun signal d'alerte local en attendant.

## Décisions actées (pas d'action)

- **FAQPage JSON-LD** : conservé pour le GEO malgré l'absence de rich results Google (restriction d'août 2023). Ne pas en ajouter davantage, ne pas retirer.
- **Chaîne de redirection 2 sauts** http→apex→www : standard Vercel, coût marginal, à revoir seulement en cas de refonte DNS.
- **CSP** : non prioritaire sur un site statique sans données utilisateur.

## Déjà conforme — à préserver tel quel

Canonical, meta robots, H1 uniques, alt images, OG/Twitter, JSON-LD valide, FAQ dans le DOM (ne jamais revenir à un rendu conditionnel `{open && ...}`), robots.txt ouvert aux crawlers IA, HSTS, sitemap avec lastmod git, ancre sombre unique par page, blocs réponse citables, maillage 59-71 liens/page.
