# Audit SEO, GEO et E-E-A-T des pages Claude de master-ia.fr

**Date** : 5 octobre 2026
**Périmètre** : les 22 pages indexables consacrées à Claude (Anthropic).
- Le hub `/formation-claude-ia`.
- La page `/formation-claude-code`.
- Les 11 pages métier `/formation-claude-<métier>`.
- Les 7 pages villes `/formation-claude-ia-<ville>`.
- Le comparatif `/chatgpt-vs-claude`.
- L'article `/blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir`.

Trois pages Claude sont volontairement hors périmètre. Ce sont des pages client en `noindex` : `/competences-claude-eet`, `/artefacts-claude-entreprise` et `/securite-claude-entreprise`.

**Méthode** : chaque constat porte une étiquette.
- **Confirmé** : preuve directe.
- **Probable** : preuve indirecte.
- **À vérifier** : la donnée manque.

Les preuves viennent de cinq relevés.
1. **HTML de production** des 22 pages, tel que Googlebot le reçoit (prérendu), analysé balise par balise.
2. **DOM après hydratation** d'une page métier, lu dans le navigateur, pour contrôler les doublons de balises.
3. **Crawl des 391 URL du sitemap**, pour compter les liens entrants et repérer les liens cassés.
4. **Comparaison du texte** des 22 pages avec 40 pages voisines (ChatGPT et Copilot par métier, ChatGPT et IA générique par ville, hubs, comparatifs), en 6-grammes.
5. **Semrush, base France** : positions du 02/10 et deux relevés du 05/10. Le solde d'unités API est tombé à zéro le 05/10 (voir « Limites »).

Mesures page par page : [annexes/mesures-par-page.csv](annexes/mesures-par-page.csv). Données Semrush : [annexes/semrush-claude.md](annexes/semrush-claude.md).

---

## Verdict

Les pages Claude sont techniquement saines, mais elles ne rapportent presque rien.
- **Côté technique, tout va bien** : HTML prérendu, une seule balise title, meta et canonical après hydratation, robots.txt ouvert à tous les robots IA, les 22 pages dans llms.txt.
- **Côté résultats, le bilan est maigre** : 72 mots-clés et 9 visites par mois estimées pour les 22 pages, soit 5 % du trafic du site.
- **Aucune requête contenant « claude » n'est dans le top 3.**
- **15 pages sur 22 n'ont aucun mot-clé dans le top 100.** Ce sont les 7 pages villes et 8 pages métier sur 11.

Trois causes, par ordre d'impact :

1. **Les pages se contredisent sur l'outil lui-même.**
   - Le hub et la page finance présentent encore Claude Opus 4.8 et Sonnet 5 comme modèles de référence. Le comparatif, à jour au 3 octobre, cite Fable 5.1, Opus 5.5 et Sonnet 5.5.
   - L'article de blog annonce d'autres prix et d'autres minimums de sièges que le comparatif.
   - Douze pages affichent « Programme à jour · juillet 2026 », alors que trois modèles sont sortis en septembre.
   - Sur un sujet qui change chaque mois, Google comme les moteurs génératifs lisent ces écarts comme un défaut de fiabilité.
2. **Les 11 pages métier et la page Claude Code se ressemblent trop, et rien ne prouve l'expérience.**
   - Elles ne contiennent que 27 à 42 % de texte propre.
   - Le même bloc de 2 028 mots d'avis Google occupe près de la moitié de chaque page.
   - Chacune ne reçoit que 4 à 9 liens entrants depuis le contenu du site.
   - La meilleure preuve que vous ayez sur Claude n'apparaît sur aucune page Claude. C'est la mission chez le distributeur IT (58 commerciaux formés, 11 assistants Claude).
3. **Le hub prend la place des pages filles et pointe vers des pages mortes.**
   - Il se classe à la place de `/formation-claude-code` sur « formation claude code » (480 recherches par mois, 21e).
   - Il prend aussi la place des pages Rennes et Nantes sur leurs requêtes locales.
   - Sa grille « dans votre ville » envoie vers 4 pages en 404 et 5 liens qui redirigent vers le hub lui-même.

Il reste un frein extérieur aux pages : l'autorité du domaine (Authority Score 9, 82 domaines référents). C'est ce qui bloque le comparatif. Il est le meilleur contenu du lot, mais il reste 35e sur « claude vs chatgpt » (1 600 recherches par mois).

### Scores (jugement argumenté, sur 100)

| Famille | Pages | SEO | GEO | E-E-A-T | Lecture |
|---|---:|---:|---:|---:|---|
| Hub `/formation-claude-ia` | 1 | 55 | 50 | 45 | Bien placé (17e à 21e) sur ses requêtes, mais modèles périmés, superlatifs non sourcés, 9 liens morts, aucun auteur ni date |
| `/formation-claude-code` | 1 | 40 | 60 | 50 | Un seul mot-clé, éclipsée par le hub ; prérequis « aucun prérequis technique » sur une formation développeur |
| Pages métier | 11 | 40 | 50 | 45 | 0 mot-clé sur 8 pages ; ~30 % de texte propre ; sources génériques ; date de juillet |
| Pages villes | 7 | 55 | 75 | 65 | Réécrites le 03/10, sourcées et datées ; pas encore classées ; Rennes presque orpheline |
| `/chatgpt-vs-claude` | 1 | 60 | 85 | 75 | Le meilleur contenu : faits datés et sourcés, signé ; manque d'autorité externe |
| Article multi-outils | 1 | 60 | 45 | 40 | Prix contradictoires avec le comparatif, un seul lien externe (LinkedIn), date d'avril |
| **Ensemble (pondéré par le nombre de pages)** | **22** | **47** | **60** | **53** | **À améliorer** |

---

## 1. Positionnement (Semrush, base France)

Source : relevé du 02/10/2026, recoupé le 05/10. Le 05/10, le domaine compte 565 mots-clés et 161 visites par mois. Le hub en compte 27, pour 4 visites.

| Requête | Volume/mois | KD | Position | URL classée | Constat |
|---|---:|---:|---:|---|---|
| claude vs chatgpt | 1 600 | 24 | 35 | /chatgpt-vs-claude | La plus grosse requête du périmètre |
| formation claude | 880 | 10 | 19 | hub | KD faible : atteignable |
| claude ou chatgpt | 880 | 20 | 38 | /chatgpt-vs-claude | |
| claude gpt | 720 | 39 | 35 | /chatgpt-vs-claude | |
| formation claude code | 480 | 11 | 21 | **hub** | La page dédiée n'est pas classée (Confirmé) |
| formation claude ai | 390 | 9 | 17 | hub | |
| chatgpt vs claude | 390 | 21 | 26 | /chatgpt-vs-claude | |
| claude formation | 320 | 12 | 47 | hub | |
| anthropic formation | 260 | 19 | 12 | hub | |
| claude finance | 210 | 17 | 8 | /formation-claude-finance | La seule page métier qui fonctionne |
| formation claude nantes | 170 | 5 | 54 | **hub** | La page Nantes n'est pas classée |
| formation claude rennes | 140 | 1 | 7 | **hub** | Meilleur trafic Claude du site (3 visites), sur la mauvaise page |
| anthropic academy claude | 140 | 29 | 24 | hub | Intention « cours gratuits Anthropic », non traitée |
| claude code formation | 110 | 10 | 16 et 65 | hub et /formation-claude-code | Seule cannibalisation à deux URL |

Lecture :
- **Les comparatifs pèsent plus que la formation.** Ils totalisent 6 940 recherches par mois, contre 4 970 pour les requêtes de formation. Le site n'en tient aucun dans le top 10.
- **Côté formation**, les requêtes ont un KD de 9 à 18. Le hub est entre la 17e et la 21e place : la marche vers le top 10 est d'ordre on-page et maillage, pas d'autorité.
- **Requêtes absentes du top 100** : claude entreprise, claude team, claude tarif, claude code, claude cowork, formation claude paris, formation claude lyon, apprendre claude, tuto claude. Leurs volumes n'ont pas pu être mesurés le 05/10.
- **Un seul mot-clé hors sujet** : l'unique mot-clé de `/formation-claude-service-client` est une requête de marque d'un tiers, « seniors-formation.fr garantie satisfaction ».

---

## 2. SEO technique et on-page

### 2.1 Ce qui est en place (Confirmé)

- Les 22 URL répondent en 200, en HTTPS, avec un HTML prérendu complet de 3 000 à 6 000 mots dans `<main>`. Le contenu ne dépend pas du JavaScript.
- Après hydratation, la page `/formation-claude-marketing` garde une seule balise title, une seule meta description, une seule canonical et un seul og:title. Le dédoublonnage du 02/10 tient.
- Canonical auto-référente partout, robots `index, follow, max-snippet:-1`, hreflang `fr-CH` sur Genève et `fr-BE` sur Bruxelles.
- Les 22 URL sont dans le sitemap, avec une image OG dédiée par page.
- Les titles font de 50 à 63 caractères et les meta descriptions de 135 à 157, toutes uniques.
- En-têtes de sécurité : HSTS preload, nosniff, X-Frame-Options, Referrer-Policy et Permissions-Policy sont présents. Il manque une Content-Security-Policy (Info).
- Mesures dans le navigateur sur une page métier : CLS de 0, 18 fichiers JS pour 439 Ko transférés, DOMContentLoaded à 583 ms.

### 2.2 Problèmes

**T1. Le hub pointe vers 9 URL mortes ou circulaires (🔴 Critique, Confirmé)**
La section « Formation Claude dans votre ville » de `/formation-claude-ia` liste les 16 villes de `GEO_CITIES`. Seules 7 villes ont une page Claude.
- **En 404** : `/formation-claude-ia-aix-en-provence`, `-annecy`, `-grenoble` et `-nimes`.
- **En 308 vers le hub lui-même** : `-bordeaux`, `-lille`, `-nice`, `-strasbourg` et `-toulouse`.
- **Source** : `src/pages/HubPage.jsx:650`, qui fait `GEO_CITIES.map(...)` sans filtrer les villes qui ont une page.
- **Le hub ChatGPT a le même défaut** : `/formation-chatgpt-grenoble`, `-annecy`, `-aix-en-provence` et `-nimes` sont en 404, `-lille` en 308.

**T2. La page Claude Code et les pages villes sont cannibalisées par le hub (🔴 Critique, Confirmé)**
Le hub consacre son jour 2 entier à Claude Code (« Claude Code en CLI », sous-agents, comparatif Claude, GitHub Copilot et Cursor). Il prend donc les requêtes « formation claude code » (480), « certification claude code » et « claude code france ». La page dédiée n'a qu'un seul mot-clé, en 65e position. Il prend aussi « formation claude rennes » (7e) et « formation claude nantes » (54e).

**T3. Les signaux de fraîcheur se contredisent (⚠️ Important, Confirmé)**

| Pages | `dateModified` (JSON-LD) | `lastmod` (sitemap) | Mention visible |
|---|---|---|---|
| 11 pages métier | 2026-07-30 | 2026-10-04 | « Programme à jour · juillet 2026 » |
| Claude Code | 2026-07-01 | 2026-10-04 | « Programme à jour · juillet 2026 » |
| Hub | **absente** | 2026-10-04 | aucune |
| Article multi-outils | 2026-04-26 | 2026-04-26 | « Mis à jour le 26 avril 2026 » |

Les pages métier ont pourtant été modifiées début octobre : le passage à « un million de tokens » vient du lot 2 du 04/10. L'article contient une phrase sur Opus 5.5, un modèle sorti le 22 septembre, sous une date d'avril. Google se fie à la date visible et à la cohérence des trois signaux. Ici, chaque signal dit autre chose.
Source : `src/data/spoke-dates.js:27-38`.

**T4. Les pages métier, Claude Code et Rennes manquent de liens entrants (⚠️ Important, Confirmé)**
Liens depuis le contenu (hors menu et pied de page), mesurés sur les 391 pages :
- **Hub** : 57 liens.
- **Comparatif** : 10 liens.
- **Claude Code** : 9 liens.
- **Pages métier** : 4 à 8 liens chacune.
- **Pages villes** : 8 à 9 liens, sauf **Rennes, qui n'en a que 3**.

La cause pour Rennes : `src/pages/GeoPage.jsx:73` garde les 5 premières villes de la liste (`.slice(0, 5)`), et Rennes est en 12e position. Elle n'apparaît donc jamais dans « Formation Claude IA dans d'autres villes ».
Les ancres des pages métier sont génériques : « Voir le programme → », « Claude (Anthropic) pour Commercial Voir le programme ».

**T5. L'article multi-outils fait 3 liens internes via des redirections (Info, Confirmé)**
`/blog/chatgpt-vs-claude`, `/blog/copilot-vs-chatgpt` et `/blog/meilleure-ia-entreprise-2026` redirigent en 308 vers les comparatifs.

**T6. La meta description du hub cite des modèles dépassés (⚠️ Important, Confirmé)**
« Formation Claude IA (Anthropic) : Opus 4.8, Sonnet 5, Skills, Projects, Code. » (`src/data/catalog-meta.js:64`). C'est le texte affiché dans Google sous la requête « formation claude ».

**T7. Données structurées (Info)**
Toutes les pages portent Course, CourseInstance, Offer à 1 980, Organization, BreadcrumbList et FAQPage. Le FAQPage n'ouvre plus de résultat enrichi sur un site commercial depuis 2023, mais il reste utile aux moteurs génératifs : à garder.
- **Auteur** : aucun `author` sur le hub, les 11 pages métier et Claude Code. Les pages villes, le comparatif et l'article déclarent Mathias Nizan.
- **Speakable** : le hub n'a pas de `SpeakableSpecification`, contrairement aux pages métier et villes.

---

## 3. Contenu et E-E-A-T

### 3.1 Exactitude et fraîcheur des faits sur Claude (🔴 Critique)

Le comparatif `/chatgpt-vs-claude` a été vérifié le 3 octobre sur les sources d'Anthropic. Il sert ici de référence interne. Les écarts ci-dessous sont **Confirmés** comme contradictions entre pages. Avant de corriger, revérifiez les prix sur claude.com, car ils évoluent.

| Page | Ce qui est écrit | Problème | Source dans le code |
|---|---|---|---|
| Hub, meta | « Opus 4.8, Sonnet 5 » | Modèles remplacés le 22 et le 28 septembre | `catalog-meta.js:64` |
| Hub, programme jour 1 | « Claude Opus 4.8 et fonctionnalités enterprise », « Opus 4.8 vs Sonnet 5 vs Haiku 4.5 » | Idem ; Fable 5.1, le modèle le plus capable, n'est cité nulle part sur le hub | `hub-content.js:353-356` |
| Hub, programme | Jour 1, Jour 2, puis **un second Jour 1** (« Fonctionnalités avancées de Claude ») | Programme incohérent à l'affichage : un ajout a été empilé au lieu de remplacer | `hub-content.js:379-388` |
| Hub, programme jour 2 | « Computer Use : agent Claude qui prend le contrôle de votre ordinateur » | Vocabulaire de 2024 ; le reste du site parle de Cowork et de Claude dans Chrome | `hub-content.js:368` |
| Hub, FAQ | « ChatGPT dispose d'un écosystème de plugins plus riche et d'une intégration DALL-E » | Les plugins ChatGPT ont été retirés en 2024 et DALL-E remplacé par la génération d'images native en 2025 | `hub-content.js:394` |
| Hub, bénéfices | « précision inégalée », « gain de productivité sans équivalent », « les benchmarks indépendants publiés en 2024 et 2025 placent systématiquement Claude… en tête » | Superlatifs sans source, benchmarks non nommés et datés de l'an dernier | `hub-content.js:333-342` |
| Hub, intro | « 11 métiers (marketing, RH, finance, juridique, code, etc.) » | Il n'existe pas de page Claude juridique : `/formation-claude-juridique` redirige vers la formation générale | `catalog-meta.js:66` |
| Finance | « répartir les tâches entre Claude Opus 4.8, Sonnet 5 et GPT-5 » | Modèles dépassés des deux côtés | `claude-spokes-enriched.js:187` |
| Finance, programme | « Limites : pas de Code Interpreter natif comme ChatGPT » | Contredit le hub (« Claude produit directement des fichiers Word, Excel ou PowerPoint ») et la page Paris (Claude dans Excel) | `claude-spokes-enriched.js:164` (module 1) |
| Finance | « Extended Thinking garantit la rigueur des analyses » | Promesse absolue qu'aucune source ne soutient | `claude-spokes-enriched.js:149` (intro) |
| Article multi-outils | Claude « Pro (22 €/mois), Team (environ 30 €/utilisateur/mois, minimum 5 sièges), Enterprise (minimum 50 sièges) » | Le comparatif dit Pro à 20 $ (17 $ en annuel), Team à 25 $ (20 $ en annuel) **de 2 à 150 sièges**, Enterprise à 20 $ par siège plus la consommation | `blog-articles.js:1957` |
| Article multi-outils | ChatGPT « Plus (20 €/mois), Team (environ 30 €) » | Le comparatif dit Plus à 23 €, Business (ex-Team) à 21 € en annuel et 26 € en mensuel | `blog-articles.js:1902` |
| Article multi-outils | Mistral « valorisée à près de 12 milliards d'euros » | À vérifier : chiffre de 2025 | `blog-articles.js:1960` |

Ailleurs sur le site, hors périmètre mais même cause :
- `glossary-terms.js:83` cite « Claude Sonnet 5 ».
- `glossary-terms.js:113` présente Claude par « Constitutional AI ».
- `blog-articles.js:4353` (article Mistral) cite « Claude Opus 4.8 ».

### 3.2 Les pages métier se ressemblent trop (🔴 Critique, Confirmé)

Part des 6-grammes d'une page qui n'apparaissent dans aucune des 62 pages comparées :

| Famille | Texte propre | Page la plus proche |
|---|---:|---|
| Article multi-outils | 97 % | hub (2 % partagés) |
| Comparatif | 90 % | copilot-vs-chatgpt (8 %) |
| Pages villes | 61 à 71 % | page ChatGPT de la même ville (22 à 27 %) |
| Hub | 65 % | formation-chatgpt (30 %) |
| Claude Code | 42 % | formation-claude-informatique (57 %) |
| **Pages métier** | **27 à 34 %** | **une autre page métier Claude (61 à 69 %)** |

Sur 100 pages comparées au lieu de 391, ces chiffres sont des plafonds : la part propre réelle est un peu plus basse. Les pages villes sont à 61-71 % depuis le lot du 03/10. Les pages métier sont désormais la famille la plus faible.

Exemple : `/formation-claude-marketing` comparée à `/formation-claude-ressources-humaines`, section par section.

| Section | Mots | Part commune |
|---|---:|---:|
| À qui s'adresse cette formation | 131 | 7 % |
| Ce que vous allez maîtriser | 96 | 5 % |
| Programme (2 jours) | 665 | 5 % |
| Ce que vos équipes savent faire | 73 | 0 % |
| Modalités et tarifs | 146 | 100 % |
| Un mot du fondateur | 102 | 74 % |
| Pourquoi Masteria | 160 | 100 % |
| **Nos clients en parlent sur Google** | **2 028** | **100 %** |
| FAQ | 382 | 37 % |
| Sources et références officielles | 56 | 100 % |

Le cœur propre de chaque page ne fait qu'environ 1 000 mots, sur 4 300. Le bloc d'avis (`src/components/AvisGoogle.jsx`) pèse à lui seul 45 % de la page. Les sources sont les mêmes partout : anthropic.com, le ministère du Travail et la fiche Google. Aucune source n'est propre au métier.

### 3.3 Expérience : les preuves Claude existent mais ne sont pas montrées (🔴 Critique, Confirmé)

| Preuve disponible | Où elle est | Où elle manque |
|---|---|---|
| Étude de cas « Des assistants Claude au service des équipes commerciales » : 58 commerciaux formés, 10 référents, 11 assistants Claude branchés sur l'ERP et le CRM | `/etudes-de-cas-ia#distribution` (`etudes-de-cas.js:20`) | Les 22 pages Claude. Elles ne pointent que vers `/etudes-de-cas-ia` en général, jamais vers l'ancre. Le hub et `/formation-claude-commercial` n'en disent pas un mot |
| Avis Google de Tanguy G. (consultants IT formés à Claude, juillet 2026) et de POLYMENTO (dirigeant, Claude pour le marketing) | Noyés dans les 2 028 mots d'avis des pages métier | Hub, pages villes, comparatif |
| Article des Échos sur le choix entre ChatGPT, Claude, Copilot, Gemini et Mistral | Déclaré en JSON-LD (`NewsArticle`) sur toutes les pages, lien visible sur le hub seulement | Pages métier, Claude Code, comparatif, alors que c'est exactement leur sujet |

Les pages villes appliquent la règle du 03/10 (« Mise en situation » quand il n'y a pas de retour publié), et c'est juste. Mais la seule mission Claude publiée devrait au moins figurer sur le hub, sur la page commercial et dans le comparatif.

### 3.4 Expertise et auteur (⚠️ Important)

- **Auteur absent du balisage (Confirmé)** : le hub, les 11 pages métier et Claude Code n'ont pas d'`author` en JSON-LD. Ils ne lient pas non plus `/mathias-nizan`, alors que le bloc « Un mot du fondateur » le cite. Les pages villes, le comparatif et l'article le font.
- **Page auteur incomplète (Confirmé)** : `/mathias-nizan` ne présente toujours pas le parcours. C'est un point déjà ouvert, en attente de votre décision.
- **Aucune pratique documentée de l'outil (Probable)** : rien ne montre que l'équipe pratique Claude au-delà de la formation (compétences construites, Claude Code utilisé, cours Anthropic Academy suivis). La requête « anthropic academy claude » (140 par mois) montre que les acheteurs comparent avec les cours gratuits d'Anthropic. À n'écrire que si c'est vrai.

### 3.5 Confiance (⚠️ Important)

- **« +1 500 professionnels formés » et « 98 % de taux de satisfaction »** figurent sur le hub, les 11 pages métier, Claude Code et le comparatif. Ces chiffres attendent votre décision depuis le 04/10 : les documenter ou les retirer.
- **Claude Code** : le bloc « En bref » indique « Aucun prérequis technique, maîtrise des outils bureautiques courants » pour une formation qui travaille sur le dépôt Git des développeurs. C'est la valeur par défaut du gabarit (`src/pages/SpokePage.jsx:374`).
- **Genève et Bruxelles** : le texte dit bien qu'il n'y a pas d'OPCO. Le bloc commun « Sources » cite pourtant « Les OPCO, Ministère du Travail ».
- **Hub** : la section villes promet « finançable via votre OPCO local » juste au-dessus de Genève et Bruxelles.

---

## 4. GEO (visibilité dans les moteurs génératifs)

84 % des requêtes du domaine affichent un AI Overview (70 % pour celles du hub). Dans ce contexte, être cité compte autant qu'être classé.

### 4.1 Acquis (Confirmé)

- robots.txt autorise nommément GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended, MistralAI-User et d'autres.
- `llms.txt` liste les 22 pages avec une description.
- Les pages villes et le comparatif contiennent des passages citables, datés et sourcés. Sources officielles citées : support.claude.com, privacy.claude.com, FINMA, ANSSI, EUR-Lex, INSEE. Ces pages portent aussi un `SpeakableSpecification`.
- Le comparatif affiche « Faits et tarifs vérifiés » avec la date, et une section « Ce qui a changé depuis notre version d'août 2026 ». C'est le format que les moteurs génératifs citent volontiers.

### 4.2 Manques

1. **Faits contradictoires d'une page à l'autre (Confirmé).** Un moteur qui lit le hub (Opus 4.8) et le comparatif (Opus 5.5), ou l'article (Pro à 22 €) et le comparatif (Pro à 20 $), ne peut pas citer Masteria comme source fiable. Le premier levier GEO consiste à n'avoir qu'une version de chaque fait.
2. **Le hub n'a pas de bloc de définition (Confirmé).** Il manque un passage de 40 à 60 mots qui répond seul à « qu'est-ce qu'une formation Claude ». Il manque aussi un encadré daté des modèles et des offres, et le `speakable`. Les pages `/audit-ia`, `/diagnostic-ia` et `/audit-geo-ia` en ont un depuis septembre.
3. **Pages métier sans sources propres (Confirmé).** Elles ne citent rien d'extérieur au métier : pas d'étude, pas de chiffre daté, pas de doc Anthropic dédiée à l'usage (Claude for Financial Services pour la finance, par exemple).
4. **Comparatif tourné dans le mauvais sens (Probable).** La requête la plus cherchée est « claude vs chatgpt » (1 600), puis « claude ou chatgpt » (880). Le title et le H1 commencent par « ChatGPT vs Claude ».

Proposition de bloc de définition pour le hub (58 mots, à valider) :
> Une formation Claude apprend à une équipe à utiliser Claude, l'assistant IA d'Anthropic, sur ses propres documents : projets partagés, compétences (Skills), recherche approfondie, fichiers Word, Excel et PowerPoint, et Claude Code pour les développeurs. Chez Masteria, elle dure 2 jours (14 h), en intra jusqu'à 12 personnes, à 1 980 € HT par jour, certifiée Qualiopi.

Suivi d'un encadré « Claude au 5 octobre 2026 » : modèles (Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 4.5), contexte d'un million de tokens sur les offres payantes, offres et prix, avec les liens Anthropic. Ce même encadré, en un seul composant, alimente toutes les pages Claude (voir le plan d'action).

---

## 5. Page par page : les trois points à traiter

| Page | Points |
|---|---|
| `/formation-claude-ia` | 1) Grille villes : 4 liens en 404 et 5 qui bouclent. 2) Modèles et FAQ périmés, second « Jour 1 », superlatifs. 3) Bloc de définition, auteur, date et mission Claude à ajouter ; le contenu Claude Code doit renvoyer vers sa page |
| `/formation-claude-code` | 1) Prérequis développeur. 2) Mieux liée depuis le hub, le vibe coding, l'informatique et le comparatif, avec l'ancre « formation Claude Code ». 3) Date et auteur |
| Pages métier (×11) | 1) Bloc d'avis réduit à 3 ou 4 avis, ceux sur Claude en tête. 2) Sources et un fait daté propres au métier. 3) Date honnête, auteur ; mission Claude sur la page commercial |
| `/formation-claude-finance` | Corriger Opus 4.8, Sonnet 5 et GPT-5, « pas de Code Interpreter natif » et « garantit » |
| `/formation-claude-ia-rennes` | 1) Réintégrer Rennes dans les listes « autres villes ». 2) Lien depuis le hub avec l'ancre « formation Claude Rennes ». 3) Demander l'indexation dans GSC |
| `/formation-claude-ia-nantes` | Mêmes points 2 et 3 que Rennes |
| Autres villes (×5) | Laisser travailler le texte du 03/10 ; mesurer à J+30 |
| `/chatgpt-vs-claude` | 1) Tester « Claude vs ChatGPT » dans le title. 2) Mission Claude et article des Échos. 3) Liens externes (voir P2 du plan) |
| Article multi-outils | 1) Prix alignés sur le comparatif, ou renvoi vers lui. 2) Sources officielles. 3) Date mise à jour, liens sans redirection |

---

## 6. Limites de cet audit

- **Scripts du skill SEO absents.** L'installation ne contient que le SKILL.md. Toute la collecte a été faite avec des scripts écrits pour l'occasion (curl et BeautifulSoup, dans le scratchpad de la session).
- **PageSpeed Insights indisponible.** Le quota journalier de l'API était dépassé. Ni LCP ni INP ne sont mesurés : seuls le CLS et le poids JS l'ont été, dans le navigateur. La performance n'est pas notée.
- **Semrush à zéro unité le 05/10.** Les positions datent du 02/10. Il manque les SERP et les concurrents, les volumes des requêtes absentes et les questions associées. Pour débloquer : https://www.semrush.com/mcp-access.
- **Search Console non branchée.** Pas d'impressions ni de clics réels, pas d'état d'indexation des pages villes réécrites le 03/10.
- **Faits produits non revérifiés en ligne aujourd'hui.** Ils sont comparés au comparatif du 03/10, qui cite ses sources Anthropic et OpenAI. Revérifiez prix et modèles le jour de la correction.

---

## Mise à jour du 5 octobre au soir : corrections appliquées (dans le dépôt, pas encore en ligne)

### Texte propre par page (6-grammes absents de toute autre page du site)

| Page | Avant | Après |
|---|---:|---:|
| Hub /formation-claude-ia | 65 % | 92,1 % |
| /formation-claude-code | 42 % | 94,4 % |
| 11 pages métier | 27 à 34 % | 92,9 à 94,5 % |
| 7 pages villes | 61 à 71 % | 94,1 à 95,4 % |
| /chatgpt-vs-claude | 72 % (corpus complet) | 99,4 % |
| Article multi-outils | 87 % (corpus complet) | 93,9 % |

Les deux dernières lignes « avant » sont mesurées sur les 391 pages du site, comme la colonne « après ». Le tableau du §3.2 avait été mesuré sur un échantillon de 62 pages, d'où ses valeurs plus favorables.

Méthode de mesure :
- Les pages sont rendues par le serveur de développement comme au prérendu.
- Chaque page est comparée au crawl de production, dans lequel les pages modifiées remplacent leur ancienne version.
- L'en-tête, le pied de page et les balises `<nav>` sont exclus.

### Ce qui a été fait

1. **Contenu propre.**
   - 12 guides de page métier (≈ 4 300 à 5 400 mots chacun) avec cas pratique, prompt, pièges, programme, FAQ et sources propres au métier.
   - 7 pages villes complétées : résumé, programme local, formats, accès, financement.
   - Hub, comparatif et article réécrits là où ils reprenaient d'autres pages.
2. **Mode « page propre » dans les gabarits.** SpokePage, HubPage, GeoPage et ComparisonPage masquent leurs blocs communs et affichent les textes de la page.
3. **Faits Claude.**
   - Source unique dans `src/data/claude-facts.js`, revérifiée le 5 octobre 2026.
   - Corrections : modèles (fin d'Opus 4.8 et Sonnet 5), programme du hub (plus de second « Jour 1 »), FAQ (plugins, DALL-E), Word ajouté à Excel et PowerPoint, Claude dans Chrome, hébergement européen.
4. **Liens.** Plus de 404 ni de 308 depuis la grille des villes (hub Claude et hub ChatGPT) ; Rennes réintégrée dans les listes « autres villes » ; ancre « formation Claude Code » depuis le hub et les comparatifs.
5. **E-E-A-T.**
   - Auteur déclaré et date du 5 octobre 2026 sur toutes les pages Claude ; mention des Échos.
   - 6 nouvelles études de cas anonymisées sur /etudes-de-cas-ia, avec ancres.
   - 19 retours écrits de participants, sans note, une page principale chacun.
6. **Avis Google.**
   - Sur chaque page formation, les 2 ou 3 avis les plus proches du sujet s'affichent en extrait. Les autres s'ouvrent en un clic, texte complet sans modification.
   - La copie de défilement n'est plus dans le HTML prérendu.
7. **Intégrité.** Corrections harmonisées sur 31 fichiers :
   - cas EET : 10 référents formés et 11 compétences, déploiement prévu d'octobre à décembre 2026 ;
   - cas Sunliberty : 3 personnes, 16 pages, formation des 12 et 13 octobre à venir ;
   - cas industriel : plus de notes, sites internationaux au futur.
   
   Ont aussi été retirés « 98 % », « 4,9/5 » et « OPCO jusqu'à 100 % » des gabarits concernés et de llms.txt.

### Restent à décider ou à faire
- Mise en ligne : commit, prérendu, déploiement Vercel, IndexNow, puis demandes d'indexation dans Search Console.
- « +1 500 professionnels formés » et « +6 h gagnées par semaine » : toujours présents, en attente de décision.
- « 98 % » sur des pages hors périmètre Claude : AgenceIA, ConseilIA, MetiersHub, Automatisation, AgentsIA, ConseilStrategie, Presse, Gemini…
- Recharger les unités Semrush, puis mesurer les positions à J+30.
