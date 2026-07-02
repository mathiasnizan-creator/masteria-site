# Audit SEO & GEO — Cluster money master-ia.fr

**Date** : 2 juillet 2026 · **Périmètre** : 27 pages (conseil ×7, développement/agence ×12, gouvernance/conformité ×7, hub secteurs ×1) · **Méthode** : analyse du HTML prérendu en production + contrôles site-wide (robots, llms.txt, en-têtes, redirections, sitemap) + revue du code source. Chaque constat est étiqueté **Confirmé** (preuve directe) ou **Probable** (preuve indirecte).

## Score global : 85 / 100 — Bon

| Catégorie | Poids | Score | Verdict |
|---|---|---|---|
| SEO technique | 25 % | 92 | ✅ Excellent |
| Qualité de contenu (E-E-A-T) | 20 % | 78 | ⚠️ Bon, hétérogène |
| On-page | 15 % | 84 | ✅ Bon |
| Données structurées | 15 % | 82 | ⚠️ Bon, incomplet |
| Performance | 10 % | 85 | ✅ Probable (PSI indisponible) |
| Images & médias | 10 % | 90 | ✅ Très bon |
| GEO (moteurs de réponse IA) | 5 % | 88 | ✅ Très bon |

## Ce qui est solide (confirmé sur les 27 pages)

- **Canonical exact** sur 27/27, **meta robots** `index, follow, max-image-preview:large, max-snippet:-1` partout, **un seul H1** par page, **0 image sans alt**, **OG + Twitter Card** partout, `lang="fr"` + 2 hreflang.
- **JSON-LD sans aucune erreur de parsing** sur 27/27 (Organization, Person avec `subjectOf` Les Échos, WebSite, WebPage, FAQPage, BreadcrumbList, + Course sur les formations).
- **Réponses FAQ présentes dans le DOM à l'état replié** sur 27/27 : le contenu est lisible par les crawlers IA sans interaction. C'est le socle GEO du site.
- **Profondeur de contenu** : 1 523 à 4 758 mots par page, aucune page mince.
- **Maillage interne dense** : 59 à 71 liens internes par page.
- **robots.txt exemplaire pour le GEO** : GPTBot, Google-Extended, ClaudeBot, PerplexityBot, anthropic-ai explicitement autorisés, sitemap déclaré, pages privées gérées par meta noindex (crawl permis, la bonne méthode).
- **HSTS preload, X-Content-Type-Options, X-Frame-Options, Referrer-Policy** présents.
- **Sitemap** : les 27 pages y sont, avec lastmod issus de git.
- **Une seule ancre sombre** par page money, blocs « réponse directe » sous les H2 en question, « En bref » et sources d'autorité sur l'ensemble du périmètre audité.

## Constats à corriger

### 🔴 C1 — llms.txt ampute le cluster le plus récent (GEO) — Confirmé
- **Preuve** : `curl llms.txt` liste 98 URLs ; absentes : `/charte-ia-entreprise`, `/ia-responsable`, `/ia-et-rgpd`, `/formation-gouvernance-ia`, `/formation-ia-qse`. Le fichier est maintenu à la main (`public/llms.txt`, aucun générateur dans `scripts/`).
- **Impact** : les moteurs de réponse qui lisent llms.txt ignorent les 5 pages les plus stratégiques du trimestre.
- **Correctif** : ajouter les 5 entrées dans la section correspondante de `public/llms.txt` avec une ligne descriptive chacune. Envisager la génération automatique depuis le sitemap pour supprimer la maintenance manuelle.

### ⚠️ C2 — Byline et schéma Article absents de 19 pages sur 27 (E-E-A-T) — Confirmé
- **Preuve** : « Par Mathias Nizan … Mis à jour en [mois] 2026 » + JSON-LD `Article` (author/editor `#mathias-nizan`, datePublished/dateModified) présents sur 8 pages seulement : les 2 guides « meilleur* », cas-usage, gouvernance-ia, charte, ia-responsable, ia-et-rgpd (+ Course avec dates sur les 3 formations). Les 7 pages conseil et 11 pages agence n'ont ni auteur visible ni dates.
- **Impact** : depuis décembre 2025, l'E-E-A-T pèse sur toutes les requêtes compétitives ; l'auteur identifié et la fraîcheur datée sont aussi des critères de citation des moteurs génératifs.
- **Correctif** : déployer le patron byline + `articleJsonLd` + props `datePublished/dateModified` (déjà en place sur les 8 pages conformes) sur les 19 restantes. `datePublished` = date git de création du fichier.

### ⚠️ C3 — Meta keywords fallback « formation » sur 14 pages conseil/agence — Confirmé
- **Preuve** : `meta keywords` = fallback générique (« formation IA entreprise, formation ChatGPT… ») sur conseil-intelligence-artificielle, conseil-strategie-ia, conseil-data-ia, diagnostic-ia, methode-projet-ia, agence-ia, agence-developpement-ia, agence-automatisation-ia, automatisation-ia, agence-ia-marketing, agence-seo-ia, outils-ia-sur-mesure, agents-ia-entreprise, ia-secteurs.
- **Impact** : faible sur Google, mais signal sémantique incohérent (mots-clés formation sur des pages conseil) pour Bing et certains crawlers IA.
- **Correctif** : passer un `keywords` spécifique à SEOHead sur ces 14 pages (le support existe).

### ⚠️ C4 — 3 meta descriptions au-dessus de 160 caractères — Confirmé
- **Preuve** : meilleur-cabinet-conseil-ia = 167, meilleure-agence-ia = 168, cas-usage-ia-entreprise = 172 (formation-ia-qse = 160, limite).
- **Impact** : troncature en SERP, appel au clic affaibli.
- **Correctif** : réécrire sous 158 caractères.

### ⚠️ C5 — 39 tournures « IA » candidates sur 15 pages anciennes (qualité copy) — Probable
- **Preuve** : grep épanorthoses/antithèses (« non pas… mais », « n'est pas X, c'est Y », « à la fois », « plutôt que », « fait toute la différence ») : CasUsageIAEntreprise 9, ConseilDataIA 4, ConseilIA 3, PrixProjetIA 3, AgenceIA 3, AgenceSeoIA 3, SecteursHub 3, les autres 1-2. Le cluster conformité (juillet 2026) est à zéro : la règle d'écriture n'a été appliquée qu'aux pages récentes.
- **Impact** : signal « texte généré » pour un lecteur exigeant et pour les détecteurs, incohérence de voix entre pages du même cluster.
- **Correctif** : passe de réécriture ciblée, en commençant par cas-usage-ia-entreprise et conseil-data-ia. Chaque hit doit être jugé en contexte (les regex attrapent des usages légitimes).

### ⚠️ C6 — Fils d'Ariane à 2 niveaux : le cluster n'est pas matérialisé — Confirmé
- **Preuve** : BreadcrumbList à 2 items (Accueil > page) sur 20/27 pages. Seuls conseil-strategie-ia, les 3 guides conformité, formation-ia-qse et les 2 « meilleur* » ont 3 niveaux.
- **Impact** : la hiérarchie hub → satellites (agence-ia comme pilier dev, conseil-intelligence-artificielle comme pilier conseil) n'est pas exposée aux moteurs.
- **Correctif** : rattacher agence-developpement/automatisation/marketing/seo/outils à `/agence-ia` ; conseil-data/strategie/diagnostic/methode/prix à `/conseil-intelligence-artificielle` (nav visible + JSON-LD).

### ℹ️ C7 — FAQPage sans rich results possibles — Confirmé, décision à acter
- **Preuve** : FAQPage JSON-LD sur 27/27. Depuis août 2023, Google réserve les rich results FAQ aux sites gouvernementaux et de santé.
- **Impact** : aucun rich result à attendre ; aucun malus non plus. Le balisage reste utile aux moteurs génératifs.
- **Correctif** : conserver tel quel, ne pas investir davantage dans ce balisage.

### ℹ️ C8 — Divers mineurs
- **Redirection en 2 sauts** : `http://master-ia.fr` → `https://master-ia.fr` → `https://www.master-ia.fr` (308 + 308). Standard Vercel, un saut de trop ; à laisser sauf refonte DNS.
- **CSP absente** des en-têtes (site statique à faible risque ; ajout possible via vercel.json).
- **og:image générique** (logo) sur toutes les pages : des visuels par page amélioreraient le CTR social ; non prioritaire.
- **PageSpeed Insights** : quota API épuisé au moment de l'audit (limitation d'environnement). Indices locaux : HTML prérendu servi directement (LCP indépendant du JS), ~284 Ko de JS non bloquant, styles inline. Performance **probablement bonne**, à confirmer quand le quota le permet.

## Score par page (extrait des mesures)

| Page | Title | Desc | Mots | H2 ? | BC | Article | Byline | KW dédiés |
|---|---|---|---|---|---|---|---|---|
| gouvernance-ia | 50 | 154 | 4 625 | 5 | 2 | ✅ | ✅ | ✅ |
| charte-ia-entreprise | 55 | 153 | 3 713 | 4 | 3 | ✅ | ✅ | ✅ |
| ia-responsable | 61 | 157 | 3 226 | 5 | 3 | ✅ | ✅ | ✅ |
| ia-et-rgpd | 58 | 148 | 3 462 | 4 | 3 | ✅ | ✅ | ✅ |
| meilleur-cabinet-conseil-ia | 62 | **167** | 3 445 | 1 | 3 | ✅ | ✅ | ✅ |
| meilleure-agence-ia | 56 | **168** | 3 331 | 1 | 3 | ✅ | ✅ | ✅ |
| cas-usage-ia-entreprise | 44 | **172** | 4 205 | 3 | 2 | — | ✅ | ✅ |
| conseil-intelligence-artificielle | 58 | 153 | 4 263 | 7 | 2 | — | — | — |
| conseil-strategie-ia | 57 | 155 | 3 391 | 6 | 3 | — | — | — |
| conseil-data-ia | 58 | 154 | 3 248 | 4 | 2 | — | — | — |
| diagnostic-ia | 56 | 149 | 2 866 | 6 | 2 | — | — | — |
| methode-projet-ia | 45 | 152 | 3 088 | 5 | 2 | — | — | — |
| prix-projet-ia | 51 | 144 | 3 452 | 5 | 2 | — | — | ✅ |
| agence-ia | 52 | 154 | 3 299 | 4 | 2 | — | — | — |
| agence-developpement-ia | 48 | 154 | 3 326 | 5 | 2 | — | — | — |
| agence-automatisation-ia | 59 | 153 | 2 851 | 4 | 2 | — | — | — |
| automatisation-ia | 47 | 148 | 4 741 | 7 | 2 | — | — | — |
| agence-ia-marketing | 57 | 154 | 2 646 | 4 | 2 | — | — | — |
| agence-seo-ia | 57 | 152 | 2 835 | 4 | 2 | — | — | — |
| outils-ia-sur-mesure | 58 | 150 | 2 887 | 2 | 2 | — | — | — |
| solutions-ia | 51 | 150 | 1 572 | 2 | 2 | — | — | ✅ |
| agents-ia-entreprise | 59 | 148 | 4 758 | 7 | 2 | — | — | — |
| ia-generative-entreprise | 52 | 145 | 3 607 | 6 | 2 | — | — | ✅ |
| formation-gouvernance-ia | 62 | 156 | 2 175 | 3 | 2 | Course | — | ✅ |
| formation-ai-act | 54 | 148 | 2 068 | 3 | 2 | Course | — | ✅ |
| formation-ia-qse | 50 | **160** | 1 550 | 2 | 3 | Course | — | ✅ |
| ia-secteurs | 55 | 150 | 1 523 | 2 | 2 | — | — | — |

*(Title/Desc en caractères ; H2 ? = H2 formulés en question ; BC = niveaux de fil d'Ariane ; gras = hors limite.)*

## Limitations d'environnement

- Scripts embarqués du skill SEO non disponibles dans cette installation : contrôles réimplémentés localement (requests + BeautifulSoup), même périmètre de preuve.
- PageSpeed Insights : quota API journalier épuisé → catégorie Performance en confiance « Probable ».
- Pas de données Search Console / CrUX : aucune conclusion sur les positions ou le trafic réel.
