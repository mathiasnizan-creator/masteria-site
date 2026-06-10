# Audit SEO stratégique, technique et sémantique — master-ia.fr

**Date** : 2026-06-10
**Cible** : https://www.master-ia.fr (Masteria, centre de formation IA + cabinet conseil, Lyon)
**Périmètre** : code source local (`~/Desktop/masteria-site`, à jour avec la prod) + site live
**Méthode** : audit LLM-first. Preuves issues du code source (fichier:ligne), de requêtes HTTP directes sur le site live, et de l'inspection du HTML prérendu. 3 agents d'exploration (sémantique, technique, contenu), affirmations critiques re-vérifiées manuellement.
**Limitation d'environnement** : API PageSpeed Insights en quota dépassé (429) le jour de l'audit. Core Web Vitals : confiance **Hypothesis**. Tout le reste : **Confirmé**.

---

## Score global

| Catégorie | Poids | Score | Évolution vs avril | Note |
|---|---:|---:|---|---|
| Technical SEO | 25 % | 90 | +4 | Excellent |
| Content Quality | 20 % | 80 | −2 (fraîcheur blog) | Bon |
| On-Page SEO | 15 % | 85 | +11 | Bon |
| Schema / Structured Data | 15 % | 88 | +28 | Excellent |
| Performance (CWV) | 10 % | – | – | Non vérifiable (quota API) |
| Image Optimization | 10 % | 90 | = | Excellent |
| AI Search Readiness (GEO) | 5 % | 95 | = | Excellent |

**Score pondéré (hors CWV) : ≈ 87/100. Bon, en nette progression (80 en avril).**

Le socle technique est désormais au niveau des meilleurs sites du secteur. Ce qui sépare Masteria de la position #1 n'est plus technique : c'est (1) la **couverture sémantique** (gaps commerciaux à fort volume), (2) l'**E-E-A-T** (preuves d'autorité vérifiables), (3) la **fraîcheur éditoriale** (blog à l'arrêt depuis le 26 avril), et (4) l'**autorité off-site** (backlinks, avis, entités).

---

## 1 — Technical SEO (Confirmé sur le live)

### ✅ Points forts confirmés le 2026-06-10

| Élément | Preuve | Impact |
|---|---|---|
| Vraies 404 | `curl /page-inexistante` → **HTTP 404** (79 octets) | Crawl budget protégé, pas de soft 404 |
| Prerender opérationnel | Home : 129 Ko HTML, title 61 car., desc 131 car., 1 seul H1, canonical propre | Indexation immédiate sans JS |
| Pages récentes déployées | `/formation-ia-gestion-de-projet` → 200, 102 Ko prérendu | Prod synchronisée avec le code local |
| Sitemap synchronisé | 184 URLs en local = 184 en live | Cohérence build/prod |
| Security headers | HSTS preload, nosniff, SAMEORIGIN, referrer-policy, permissions-policy | Confiance, pas de warning |
| Edge cache | `x-vercel-cache: HIT`, etag | TTFB faible |
| robots.txt | Crawlers IA explicitement autorisés (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai) + sitemap déclaré | SEO + GEO |
| HTTP→HTTPS apex | 308 permanent | Propre |
| Images home | 4 img, 100 % avec alt, WebP, preload logo LCP | Accessibilité + perf |

### 🔴 Problèmes confirmés

#### T1. Redirection apex HTTPS → www en **307 temporaire**
- **Evidence** : `curl -I https://master-ia.fr/` → `307 → https://www.master-ia.fr/`. Le hop HTTP→HTTPS est en 308, mais le hop critique apex→www est en 307.
- **Impact** : un 307 est une redirection temporaire. Google consolide moins nettement le signal vers www (le canonical compense, mais le signal est bruité). La règle 308 de `scripts/build-vercel-output-config.mjs` est court-circuitée par la redirection de domaine par défaut de Vercel, qui s'exécute en amont des routes.
- **Fix** : dashboard Vercel → Settings → Domains → `master-ia.fr` → cocher la redirection **permanente (308)** vers `www.master-ia.fr`. Vérifier ensuite : `curl -sI https://master-ia.fr/ | grep -i "^HTTP"` doit retourner 308.
- **Confiance** : Confirmé. **Effort** : 5 min.

#### T2. Trailing slash : deux URLs servies en 200 pour la même page
- **Evidence** : `/formation-chatgpt` et `/formation-chatgpt/` retournent tous deux 200, sans redirection.
- **Impact** : duplication théorique. Le canonical (sans slash) consolide, donc risque faible, mais chaque variante crawlée est un hit de crawl budget gaspillé et un risque de dilution si un backlink externe pointe vers la version avec slash.
- **Fix** : ajouter `"trailingSlash": false` dans `vercel.json` (Vercel émet alors un 308 de `/x/` vers `/x`).
- **Confiance** : Confirmé. **Effort** : 5 min + redéploiement.

#### T3. `lastmod` du sitemap = date du build pour toutes les pages statiques
- **Evidence** : `scripts/generate-sitemap.mjs` : `const today = new Date().toISOString()...` appliqué à ~140 URLs statiques. Les 184 URLs du sitemap live affichent presque toutes `2026-06-06` (date du dernier build). Seuls les articles de blog utilisent `dateModified` réel.
- **Impact** : Google ne peut pas distinguer une page réellement mise à jour d'une page inchangée. À force de lastmod uniformes qui bougent à chaque build, le signal perd toute valeur et Google l'ignore (documenté par Google : un lastmod non fiable est déprioritisé).
- **Fix** : stocker une date de dernière modification réelle par famille de pages (constante par fichier de données, mise à jour quand le contenu change), comme c'est déjà fait pour le blog.
- **Confiance** : Confirmé. **Effort** : 1-2 h.

### ⚠️ Points secondaires

| Finding | Evidence | Impact | Fix | Confiance |
|---|---|---|---|---|
| hreflang géo incomplet | `SEOHead.jsx:352-357` : prop `locale` jamais passée par les pages Genève/Bruxelles | Signal international perdu (fr-CH, fr-BE) sur des pages qui visent ces marchés | Passer `locale` selon `city.countryCode` dans `GeoIAGenericPage.jsx` et les pages géo outil | Confirmé |
| `sameAs` avec lien raccourci `share.google` | `SEOHead.jsx:105` ; live : 302 vers google.com puis 200 | Fonctionne aujourd'hui, mais fragile (raccourcisseur). Le Knowledge Graph préfère l'URL canonique du profil | Remplacer par l'URL Google Maps canonique du Business Profile (`https://maps.google.com/?cid=...`) | Confirmé |
| Page 404 Vercel par défaut (79 octets) | Réponse 404 minimale, non brandée | Aucun impact ranking. UX et maillage perdus sur les hits 404 | Créer `dist/404.html` brandée (logo + liens hubs) servie avec statut 404 | Confirmé |
| Pas de header CSP | Absent des réponses live | Pas un facteur de ranking. Hygiène sécurité | Optionnel : CSP en report-only d'abord | Confirmé |
| Bundle JS principal lourd | Audit d'avril : 831 kB raw / 217 kB gzip ; code-splitting en place (`vite.config.js` manualChunks) | INP mobile potentiellement dégradé. Non mesurable aujourd'hui (quota PSI) | Mesurer via PageSpeed web UI ; si INP > 200 ms : lazy-loader les sections sous la ligne de flottaison | Hypothesis |

### ✅ Fausses alertes écartées pendant l'audit (vérifiées)

- **« Topics orphelins → 404 soft »** : faux. `/formation-ia-qualiopi`, `/financement-formation-ia`, `/formation-automatisation-ia`, `/formation-ia-gestion-de-projet` ont des routes et pages dédiées (`App.jsx:1320-1323`). Seuls 3 slugs passent par `TopicLandingPage` et ils sont tous définis dans `TOPICS`.
- **« Soft 404 généralisé »** : faux. Le live retourne de vraies 404.
- **« FAQPage à supprimer »** : choix assumé et documenté. Plus de rich result Google depuis 2023 (réservé gov/santé), mais conservé volontairement pour la lisibilité machine (LLM). Cohérent avec la stratégie GEO. Ne pas y toucher.
- **« aggregateRating manquant »** : retiré volontairement (risque de pénalité sans avis vérifiables affichés). Bonne décision. Réintroduire uniquement avec de vrais avis Google affichés sur la page.

---

## 2 — On-Page SEO

### ✅ Confirmé sur échantillon live

| Page | Title | Desc | H1 | Verdict |
|---|---|---|---|---|
| `/` | 61 car. | 131 car. | 1 seul, riche | ✅ |
| `/formation-chatgpt` | 57 car. | ok | 1 | ✅ |

- 41 liens internes uniques sur la home : bon maillage descendant.
- JSON-LD home : 6 blocs (Organization+EducationalOrganization, Person, WebSite+SearchAction, 7×Course, FAQ, Breadcrumb). Spoke : Course + HowTo (15 steps) + FAQ + Breadcrumb, `priceValidUntil: 2027-12-31`. C'est un balisage de très haut niveau, rare dans le secteur.

### ⚠️ À améliorer

#### O1. Réponse directe absente sous les H2 (format featured snippet / citation LLM)
- **Evidence** : `TopicLandingPage.jsx` (sections CPF, lignes ~18-26) : les H2 sont suivis de paragraphes de 200+ mots sans réponse condensée en tête.
- **Impact** : Google extrait les featured snippets et les LLM citent les passages qui répondent en 2-3 phrases sous un heading-question. Le contenu actuel est bon mais « enterre » la réponse.
- **Fix** : généraliser le pattern : H2 formulé en question + **réponse directe de 2-3 phrases en gras** + développement. Prioriser : pages topics, FAQ des hubs, pages financement/Qualiopi.
- **Confiance** : Confirmé. **Effort** : 2-4 h sur les 15 pages principales.

#### O2. Maillage contextuel dans le corps des articles
- **Evidence** : `blog-articles.js` : les liens internes sont regroupés dans des blocs « formations associées » en fin d'article, peu de liens dans le corps du texte.
- **Impact** : le lien contextuel (dans une phrase, avec ancre descriptive) transmet plus de signal thématique que les blocs de fin de page.
- **Fix** : ajouter 2-4 liens contextuels dans le corps de chaque article majeur vers le hub/spoke correspondant, avec des ancres variées (« formation ChatGPT pour les équipes marketing » plutôt que « cliquez ici »).

---

## 3 — Architecture sémantique et couverture des requêtes

### Inventaire (184 URLs indexables)

| Famille | Nb | Template | Requête type |
|---|---:|---|---|
| Hubs outil | 7 | HubPage | « formation chatgpt » |
| Méga-hub catalogue | 1 | – | « formation intelligence artificielle » |
| Métiers | 11 | MetierPage | « formation ia marketing » |
| Spokes outil×métier | ~59 | SpokePage | « formation copilot rh » |
| Géo (ville + outil×ville) | 15 | GeoIAGenericPage/GeoPage | « formation ia lyon » |
| Topics éditoriaux | 7 | TopicLandingPage + dédiées | « formation ia cpf » |
| Comparatifs | 5 | ComparisonPage | « chatgpt vs claude » |
| Blog | ~44 | BlogArticlePage | informationnel |
| Glossaire | 1 | GlossaryPage | « définition RAG » |
| Corporate/légal | ~6 | – | marque |

Architecture hub & spoke propre, sans équivalent visible chez les concurrents directs français sur ce niveau de granularité outil×métier. C'est l'actif principal du site.

### 🟠 Cannibalisation : 2 zones à clarifier (pas de cas grave)

#### S1. Triplet géo par ville
`/formation-ia-paris` vs `/formation-chatgpt-paris` vs `/formation-claude-ia-paris` : trois pages au même niveau de priorité sitemap (0.7), sans hiérarchie de maillage explicite.
- **Fix** : faire des pages outil×ville des enfants évidents de la page ville : breadcrumb `Formation IA Paris > Formation ChatGPT Paris`, lien montant systématique dans l'intro, et lien descendant depuis la page ville. Baisser la priorité sitemap des pages outil×ville à 0.6. La page ville devient la page canonique de l'intention « formation ia {ville} ».

#### S2. Métier vs spokes outil×métier
`/formation-ia-ressources-humaines` (hub métier) vs 5 spokes outil×RH. Même logique : le hub métier doit recevoir un lien montant depuis chaque spoke (c'est en partie le cas via « formations associées », à systématiser dans l'intro).

Pas de cannibalisation home vs méga-hub : la home vise la marque + « formation IA entreprise », le méga-hub vise le catalogue. Les intentions sont distinctes.

### 🔴 Gaps sémantiques : requêtes commerciales sans page dédiée

Classés par valeur business estimée (volume × intention × adéquation offre). Les pages marquées ★ s'appuient sur du contenu déjà existant (création rapide).

| # | Page à créer | Requêtes visées | Pourquoi maintenant | Template |
|---|---|---|---|---|
| G1 ★ | `/formation-prompt-engineering` | « formation prompt engineering » et variantes | Volume fort, intention commerciale directe, l'article blog `prompt-engineering-guide-entreprise` existe déjà pour le maillage. Tous les concurrents qui rankent ont une page dédiée. | SpokePage |
| G2 ★ | `/formation-ia-dirigeants` | « formation ia dirigeants », « formation ia comex », « séminaire ia direction » | CPC très élevé, cycle court, et l'offre existe déjà (accompagnement stratégique niveau COMEX, cf. pitch FFF). L'article blog `formation-ia-dirigeants-ceo-comex` ne capte que l'intention info. | SpokePage adapté (pricing executive) |
| G3 ★ | `/formation-ai-act` | « formation ai act », « ai act formation obligatoire », « conformité ai act entreprise » | L'article 4 de l'AI Act impose la maîtrise de l'IA aux employeurs depuis février 2025 : requête en croissance forte. Le contenu existe, fragmenté (2 articles blog + sprint 3 h). Une landing consolidée capterait le cluster entier. | SpokePage |
| G4 | `/acculturation-ia-entreprise` | « acculturation ia », « acculturation ia entreprise » | Vocabulaire exact des DRH/DSI acheteurs. Aligné avec l'offre conseil. Peu de concurrence éditoriale sérieuse. | TopicLandingPage enrichie |
| G5 | Comparatifs manquants : `/mistral-vs-chatgpt`, `/gemini-vs-copilot` | « mistral vs chatgpt », « copilot vs gemini » | 5 comparatifs existants performants (`comparisons.js`). Mistral vs ChatGPT = angle souveraineté, très différenciant en France. Gemini vs Copilot = choix Workspace vs M365, décision d'achat fréquente. | ComparisonPage |
| G6 | Verticales sectorielles : `/formation-ia-sante`, `/formation-ia-juridique`, `/formation-ia-industrie`, `/formation-ia-banque-assurance` | « formation ia santé »... | Long-tail à forte conversion. À créer seulement avec du contenu sectoriel réel (cas clients, contraintes réglementaires du secteur). Commencer par les secteurs où Masteria a des références. | MetierPage |
| G7 | `/seminaire-ia-entreprise` | « séminaire ia », « atelier ia entreprise », « conférence ia entreprise » | Format événementiel recherché par les CODIR, panier élevé. | SpokePage |

**Anti-recommandation** : ne pas créer de page « formation IA gratuite » tant que le funnel payant n'est pas saturé. Trafic élevé mais intention faible, et risque de dilution du message premium.

---

## 4 — E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

### ✅ Acquis
- Mathias Nizan présent et balisé : Person JSON-LD avec `sameAs` LinkedIn (`SEOHead.jsx:42-63`), bio formateur sur les SpokePages, auteur affiché sur le blog avec photo.
- Qualiopi visible partout, credential balisé (`EducationalOccupationalCredential` avec France Compétences en `recognizedBy`).
- Témoignages riches et spécifiques par spoke (`testimonials.js` : nom, rôle, entreprise typée, secteur).
- Sources officielles citées (`OfficialSources.jsx`).
- Tarifs publics et précis (760 €/j inter, 1 980 €/j intra) : signal de confiance fort, et donnée citée telle quelle par les LLM.

### 🔴 Manques

| # | Finding | Evidence | Impact | Fix |
|---|---|---|---|---|
| E1 | Pas de page fondateur dédiée | Aucune route `/equipe` ni page bio complète ; la page à-propos (`centre-formation-ia-entreprise`) parle de l'organisme | Les LLM et Google évaluent l'autorité via une entité-personne documentée. C'est LE signal E-E-A-T le moins cher à produire | Créer `/mathias-nizan` (ou section dédiée enrichie sur l'à-propos) : bio détaillée avec parcours daté, photo HD, NDA, interventions publiques, liens LinkedIn + profils. Balisage `ProfilePage` + `Person` enrichi |
| E2 | NDA (numéro de déclaration d'activité) absent du site public | Recherche dans le code : aucune occurrence ; le SIRET n'apparaît que comme placeholder (`FinancementPage.jsx`) | Pour un OF, le NDA est l'élément de vérification #1 (acheteurs ET machines croisent avec la Liste Publique des Organismes de Formation) | Afficher NDA + SIRET dans le footer, les mentions légales, la page Qualiopi et `llms.txt` |
| E3 | Témoignages non vérifiables | Pas de photo, pas de lien, pas de date (`testimonials.js`) | Risque de perception « avis fabriqués », et zéro poids pour les LLM | Brancher les avis Google réels (widget ou capture + lien vers le profil Business), dater les témoignages, ajouter 2-3 études de cas avec métriques chiffrées |
| E4 | Champ auteur absent des données blog | `blog-articles.js` : pas de champ `author` ; le template hardcode Mathias Nizan | Autorité d'auteur diluée ; pas de page auteur agrégeant les contenus | Ajouter `author` aux articles + créer la page auteur listant tous ses contenus, liée depuis chaque article |
| E5 | Blog à l'arrêt depuis le 26 avril 2026 | `blog-articles.js` : dernier `datePublished: 2026-04-26` (6 semaines) | La fraîcheur est un facteur composite : un blog actif tire tout le domaine, en SEO comme en GEO (les LLM survalorisent le contenu récent daté) | Reprendre un rythme de 2 articles/mois minimum, avec `dateModified` réel lors des mises à jour |
| E6 | Pages géo : ~16-20 % de contenu unique par ville | `geo-data.js` vs template partagé `GeoIAGenericPage.jsx` ; « 89 programmes » identique sur les 5 villes | Risque doorway modéré (5 villes seulement, donc sous le radar, mais ça plafonne le ranking local) | +300-500 mots uniques par ville : cas client local, entreprises formées, chiffres emploi IA locaux, lieux de formation précis |

---

## 5 — GEO / AEO (visibilité dans les LLM et moteurs de réponse)

### ✅ Niveau déjà excellent (95/100)
- `llms.txt` riche, structuré, à jour (nouvelles pages incluses), avec faits citables : tarifs, volumes, certification, zones. C'est encore rare : avantage compétitif réel.
- Crawlers IA tous autorisés dans robots.txt.
- FAQPage JSON-LD conservé pour la lisibilité machine : bon arbitrage.
- HTML prérendu complet : les LLM qui ne rendent pas le JS voient tout le contenu (différenciant vs les SPA concurrentes).
- Données précises et datées dans le contenu (prix, durées, modalités) : exactement ce que citent Perplexity/ChatGPT/AI Overviews.

### ⚠️ Pour passer au niveau supérieur

| # | Action | Détail |
|---|---|---|
| A1 | Réponses directes sous les H2 | Voir O1. C'est le levier AEO #1 : chaque page stratégique doit contenir 3-5 passages auto-suffisants de 40-60 mots, citables tels quels |
| A2 | URLs absolues dans `llms.txt` | Certaines entrées sont des chemins relatifs ; les agents construisent mieux les URLs absolues |
| A3 | Données propriétaires citables | Publier 1-2 « baromètres » par an (ex. : « Adoption de l'IA dans les PME françaises : ce que montrent 1 500 professionnels formés »). Les stats propriétaires sont le meilleur aimant à citations LLM et à backlinks presse |
| A4 | Entité Knowledge Graph | Créer l'entrée **Wikidata** de Masteria (organisme de formation, fondateur, siège, site). Coût : 30 min. Aide Google ET les LLM à désambiguïser la marque |
| A5 | Cohérence NAP partout | Nom + adresse + téléphone identiques sur site, Google Business, LinkedIn, annuaires OF (croisement automatique par les moteurs de réponse) |
| A6 | Automatiser le llms.txt | Générer les sections « pages » depuis le sitemap au build (comme `generate-sitemap.mjs`) pour qu'il ne dérive plus jamais |

---

## 6 — Autorité off-site (le facteur limitant pour la place #1)

Hors périmètre du code, mais c'est le levier qui départage les positions 1-3 une fois l'on-site propre. Confiance : Likely (non mesuré, pas d'accès à un outil de backlinks pendant l'audit).

1. **Avis Google Business** : levier local #1. Process systématique post-formation (QR code en fin de session, relance J+2). Objectif : 30+ avis avec mots-clés naturels. Ils nourrissent aussi les LLM.
2. **Profils annuaires de confiance** : Liste Publique des OF, France Num (Activateur), CCI Lyon, annuaires Qualiopi. Backlinks institutionnels + vérifiabilité E-E-A-T.
3. **RP / presse spécialisée** : le baromètre propriétaire (A3) comme produit d'appel RP. 2-3 retombées presse éco régionale + presse RH/formation par an suffisent à creuser l'écart.
4. **LinkedIn de Mathias** : republier les articles du blog en version courte avec lien canonique. Signal d'entité-auteur + trafic direct.
5. **Interventions publiques** : webinaires, podcasts formation/RH. Chaque apparition = 1 backlink + 1 mention d'entité.

---

## 7 — Limitations de l'audit

- **Core Web Vitals non mesurés** : quota PageSpeed API dépassé (429), comme en avril. À mesurer manuellement sur https://pagespeed.web.dev (5 min). Proxys observés tous bons : edge cache HIT, fonts optimisées avec fallback size-adjusted, preload LCP, code-splitting. Le risque résiduel est l'INP mobile (bundle 217 kB gzip).
- **Backlinks non audités** : aucun outil de link data disponible dans l'environnement. Recommandation : export Search Console (Liens) + un crawl Semrush/Ahrefs pour établir la baseline.
- **Positions réelles non mesurées** : pas d'accès Search Console pendant l'audit. Les priorités sémantiques (section 3) sont à croiser avec les données de positions réelles avant d'arbitrer.

---

## Verdict

Le site est techniquement excellent et sémantiquement bien architecturé. Les 4 chantiers qui mènent à la place #1, dans l'ordre :

1. **Combler les gaps commerciaux** (G1-G3 en priorité : prompt engineering, dirigeants, AI Act). C'est du volume qualifié immédiat sur un socle déjà performant.
2. **Verrouiller l'E-E-A-T** (page fondateur, NDA public, avis vérifiables). Préalable à la fois pour Google et pour les citations LLM.
3. **Relancer la machine éditoriale** (2 articles/mois + baromètre propriétaire annuel).
4. **Construire l'autorité off-site** (avis Google, annuaires OF, RP). Le seul levier que les concurrents ne peuvent pas copier en un sprint.

Les correctifs techniques restants (307 apex, trailing slash, lastmod, hreflang géo) tiennent en une demi-journée et sont listés dans l'ACTION-PLAN.
