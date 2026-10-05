# Plan d'action : pages Claude de master-ia.fr

Ce plan découle de [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md) (5 octobre 2026). Les actions sont classées par impact, puis par effort. Les numéros de ligne renvoient à `~/masteria-site`.

## P0 : cette semaine (corrections, environ une demi-journée au total)

| # | Action | Où | Effort | Pourquoi |
|---|---|---|---|---|
| 1 | Grille « dans votre ville » du hub : n'afficher que les villes qui ont une page pour l'outil. Pour Claude, ce sont Paris, Lyon, Marseille, Genève, Bruxelles, Nantes et Rennes. Corrige aussi le hub ChatGPT | `src/pages/HubPage.jsx:650` (filtrer `GEO_CITIES` sur les slugs qui ont une route, ou ajouter une liste `cities` à chaque entrée de `GEO_TOOLS`) | 30 min | 4 liens en 404 et 5 liens qui bouclent sur le hub ; même défaut sur `/formation-chatgpt` |
| 2 | « Autres villes » des pages villes : même filtre, et retirer le `.slice(0, 5)`, pour que Rennes apparaisse | `src/pages/GeoPage.jsx:73` | 15 min | Rennes n'a que 3 liens entrants |
| 3 | Remplacer partout les modèles périmés : meta du hub, programme du hub, FAQ finance, glossaire, article Mistral | `catalog-meta.js:64`, `hub-content.js:353-356`, `claude-spokes-enriched.js:187`, `glossary-terms.js:83` et `113`, `blog-articles.js:4353` | 45 min | Opus 4.8 et Sonnet 5 sont contredits par le comparatif ; Fable 5.1 est absent du hub |
| 4 | Programme du hub : fusionner le second « Jour 1 » dans les jours 1 et 2. Remplacer « Computer Use » par Cowork et Claude dans Chrome, et retirer « Constitutional AI » comme module | `hub-content.js:350-388` | 30 min | Le programme affiche Jour 1, Jour 2, Jour 1 |
| 5 | FAQ du hub : retirer « plugins » et « DALL-E ». Bénéfices du hub : retirer « précision inégalée », « sans équivalent », « benchmarks 2024 et 2025 », ou les remplacer par un fait daté et sourcé | `hub-content.js:333-342`, `394` | 30 min | Faits faux ou invérifiables |
| 6 | Intro du hub : dans la liste des 11 métiers, remplacer « juridique » par un métier qui a sa page (assistanat, service client…) | `catalog-meta.js:66` | 5 min | Promesse d'une page qui n'existe pas |
| 7 | Page finance : retirer « pas de Code Interpreter natif » et « garantit la rigueur » | `claude-spokes-enriched.js:149`, `164` | 10 min | Contredit le hub et la page Paris |
| 8 | Article multi-outils : aligner les prix et les sièges sur le comparatif, ou les remplacer par un renvoi vers lui. Ajouter les sources officielles, mettre à jour la date et corriger les 3 liens qui passent par une 308 | `blog-articles.js:1902-1960` | 45 min | Deux tarifs différents sur le site pour la même offre |
| 9 | Claude Code : prérequis développeur (terminal, Git, un dépôt de travail) | `src/pages/SpokePage.jsx:374` (laisser la page fournir ses prérequis) | 15 min | « Aucun prérequis technique » sur une formation développeur |
| 10 | Dates : ne passer `updatedAt` et `updatedLabel` à « octobre 2026 » qu'une fois les points 3 à 9 faits. Donner un `dateModified` au hub | `src/data/spoke-dates.js:27-38`, gabarit `HubPage` | 15 min | Trois signaux de date qui se contredisent |

Vérifier ensuite les prix et les modèles sur claude.com et support.claude.com le jour même, puis lancer le prérendu, déployer et pinger IndexNow.

## P1 : sous deux semaines (contenu et preuves)

| # | Action | Où | Effort | Gain attendu |
|---|---|---|---|---|
| 11 | **Une seule source pour les faits Claude** : un composant « Claude au [date] » (modèles, contexte, offres et prix, liens Anthropic, date de vérification), utilisé par le hub, les pages métier, Claude Code et l'article. Le comparatif garde son tableau mais lit les mêmes données | nouveau `src/data/claude-facts.js` et un composant | 2 h | Plus de contradictions ; mise à jour en un seul endroit à chaque sortie de modèle |
| 12 | **Bloc d'avis des pages métier** : 3 ou 4 avis au lieu de tous, ceux qui parlent de Claude en tête (Tanguy G. et POLYMENTO), puis un lien vers la fiche Google. Même choix sur Claude Code | `src/components/AvisGoogle.jsx` (prop `limit` et `prioriser`) | 1 h | La part de texte propre passe d'environ 30 % à environ 55 % ; preuve Claude visible en haut |
| 13 | **Mission Claude visible** : un encadré « Mission Claude : 58 commerciaux formés, 11 assistants Claude » avec lien vers `/etudes-de-cas-ia#distribution`, sur le hub, `/formation-claude-commercial`, le comparatif et l'article | données de `etudes-de-cas.js:20` | 1 h | Expérience vérifiable sur les pages qui vendent Claude |
| 14 | **Bloc de définition du hub** (texte proposé au §4.2 du rapport) avec `speakable`, auteur (`#mathias-nizan`) et date | `HubPage.jsx`, `hub-content.js` | 45 min | Passage citable par les moteurs génératifs ; aligne le hub sur /audit-ia |
| 15 | **Claude Code reprend ses requêtes** : le jour 2 du hub résume Claude Code en 2 lignes et renvoie vers la page, avec l'ancre « formation Claude Code ». Ajouter le même lien depuis `/formation-vibe-coding`, `/formation-claude-informatique`, `/meilleure-ia-pour-coder`, `/formation-agents-ia` et le comparatif | `hub-content.js`, pages citées | 1 h | « formation claude code » (480/mois, KD 11) porté par la bonne page |
| 16 | **Pages métier : un fait daté et une source par métier.** Exemples : finance, l'offre Claude for Financial Services d'Anthropic ; RH, l'AI Act sur les systèmes de recrutement (annexe III) ; service client, les chiffres publiés par un éditeur ou une étude datée | `claude-spokes-enriched.js` | 3 h pour 11 pages | Sources propres et passages citables |
| 17 | **Auteur et page auteur** : `author` en JSON-LD sur le hub, les pages métier et Claude Code ; lien vers `/mathias-nizan` dans « Un mot du fondateur » | `SpokePage.jsx`, `HubPage.jsx` | 30 min | E-E-A-T homogène |
| 18 | **Article des Échos visible** sur les pages métier, Claude Code et le comparatif (déjà déclaré en JSON-LD) | composant commun | 30 min | Autorité tierce sur le sujet exact |
| 19 | **Sources de Genève et Bruxelles** : retirer « Les OPCO » du bloc commun. Hub : « finançable via votre OPCO local » devient « en France, finançable par votre OPCO selon votre branche » | gabarit des sources, `HubPage.jsx` | 15 min | Cohérence avec la règle « jamais d'OPCO hors de France » |

## P2 : sous un à deux mois (visibilité et autorité)

| # | Action | Détail |
|---|---|---|
| 20 | Comparatif : tester « Claude vs ChatGPT 2026 : lequel choisir ? » dans le title, et ajouter « Claude ou ChatGPT » dans l'intro | « claude vs chatgpt » pèse 1 600/mois, contre 390 pour « chatgpt vs claude » |
| 21 | Liens externes vers le comparatif et le hub | Le comparatif daté est l'actif le plus facile à faire citer : presse (Les Échos a déjà traité le sujet), newsletters IA, partenaires, Wikidata. Voir le chantier autorité |
| 22 | Nouvelles pages, après mesure des volumes (Semrush rechargé) | « Claude Team et Enterprise : déployer Claude en entreprise » (offres, administration, sécurité, coûts) ; « Anthropic Academy ou formation : que choisir » (« anthropic academy claude », 140/mois, déjà 24e) ; éventuellement un guide Claude Cowork. Règle maison : une requête, une page |
| 23 | Search Console : demander l'indexation du hub, de Claude Code, des 7 villes et des pages métier corrigées | Puis mesurer à J+30 (début novembre) : positions « formation claude », « formation claude code », « formation claude rennes » et « claude vs chatgpt » |
| 24 | Pages métier sans mot-clé à J+60 | Si une page reste à zéro après les points 12 et 16, l'enrichir encore ou la fusionner dans le hub en 308. Décision au cas par cas |

## Décisions qui vous reviennent

1. **« +1 500 professionnels formés » et « 98 % de satisfaction »** : les documenter (source, période) ou les retirer. Ces chiffres sont sur le hub, les pages métier, Claude Code et le comparatif.
2. **Parcours sur `/mathias-nizan`** : c'est ce qui manque le plus à l'E-E-A-T de toutes les pages signées.
3. **Avis Google** : d'accord pour n'en montrer que 3 ou 4 par page métier, ceux sur Claude d'abord ?
4. **Pratique de Claude** : pouvez-vous affirmer des éléments vérifiables (compétences Claude construites pour des clients, cours Anthropic Academy suivis, usage de Claude Code) ? À n'écrire que si c'est vrai.

## Mesure

- **Semrush**, une fois les unités rechargées : positions des 14 requêtes du §1 du rapport, et SERP des 6 requêtes cibles pour identifier les concurrents.
- **PageSpeed Insights** : quota dépassé le 05/10, à relancer pour le hub, une page métier, une page ville et le comparatif.
- **Contrôle de non-régression** après correction :

```bash
grep -rn "Opus 4\.8\|Sonnet 5[^.]\|DALL-E\|Code Interpreter natif" ~/masteria-site/src
```
