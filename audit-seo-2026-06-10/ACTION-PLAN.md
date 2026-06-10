# Plan d'action SEO + GEO — master-ia.fr

**Source** : `FULL-AUDIT-REPORT.md` (audit du 2026-06-10)
**Lecture** : 4 sprints classés par ratio impact/effort. Chaque action indique fichiers, validation et effort.

---

## 🔴 Sprint 1 — Correctifs techniques (une demi-journée, cette semaine)

### 1.1 Passer la redirection apex → www en 308 permanent
- **Où** : dashboard Vercel → Settings → Domains → `master-ia.fr` → redirection permanente vers `www.master-ia.fr`.
- **Validation** : `curl -sI https://master-ia.fr/ | head -1` → `HTTP/2 308`.
- **Effort** : 5 min. **Impact** : consolidation propre du signal canonique.

### 1.2 Forcer le trailing slash unique
- **Où** : `vercel.json`, ajouter `"trailingSlash": false` à la racine.
- **Validation** : `curl -sI https://www.master-ia.fr/formation-chatgpt/` → 308 vers la version sans slash.
- **Effort** : 5 min + redéploiement.

### 1.3 lastmod réels dans le sitemap
- **Où** : `scripts/generate-sitemap.mjs`. Remplacer le `today` global par des constantes par famille (`HUB_LASTMOD`, `GEO_LASTMOD`...), mises à jour uniquement quand le contenu change. Le blog est déjà correct (dateModified réel).
- **Validation** : deux builds successifs sans changement de contenu produisent un sitemap identique.
- **Effort** : 1-2 h.

### 1.4 hreflang sur les pages Suisse/Belgique
- **Où** : `GeoIAGenericPage.jsx` (+ pages géo outil) : passer `locale={city.countryCode === 'CH' ? 'fr-CH' : city.countryCode === 'BE' ? 'fr-BE' : 'fr-FR'}` à `SEOHead` (la prop existe déjà, `SEOHead.jsx:352-357`).
- **Validation** : `curl -s https://www.master-ia.fr/formation-ia-geneve | grep hreflang` → contient `fr-CH`.
- **Effort** : 30 min.

### 1.5 Remplacer le lien raccourci share.google dans sameAs
- **Où** : `SEOHead.jsx:105`. Mettre l'URL canonique du profil Google Business (`https://maps.google.com/?cid=...`, récupérable depuis le dashboard Business Profile).
- **Effort** : 10 min.

### 1.6 NDA + SIRET visibles
- **Où** : footer (`components.jsx`), mentions légales, `QualiopiPage.jsx`, `public/llms.txt`.
- **Effort** : 30 min. **Impact** : E-E-A-T fort pour un OF, vérifiabilité machine (croisement Liste Publique des OF).

### 1.7 Page 404 brandée
- **Où** : générer un `404.html` au prerender (logo, message, liens vers les 7 hubs + contact) ; Vercel le sert automatiquement avec le statut 404 s'il est présent dans le static output.
- **Effort** : 1 h.

---

## 🟠 Sprint 2 — Gaps sémantiques à fort volume (2 semaines)

> Workflow habituel : gabarit SpokePage, entrée sitemap, maillage entrant (hub + 2 pages liées + llms.txt), puis `npm run build:prerender` + déploiement prébuilt.

### 2.1 `/formation-prompt-engineering` ★ priorité absolue
- Gabarit SpokePage complet (programme J1/J2, tarifs 1 380/1 980 €, FAQ, témoignages).
- Maillage : depuis le méga-hub, le hub ChatGPT, et l'article blog `prompt-engineering-guide-entreprise` (lien contextuel en intro d'article).
- Requêtes : « formation prompt engineering », « formation prompt », « cours prompt engineering ».

### 2.2 `/formation-ia-dirigeants`
- SpokePage adaptée executive : format séminaire/masterclass, ROI, gouvernance, cas COMEX (réutiliser les éléments du pitch FFF).
- Maillage : home (bloc audiences), conseil IA, article blog dirigeants existant.
- Requêtes : « formation ia dirigeants », « formation ia comex », « masterclass ia direction ».

### 2.3 `/formation-ai-act`
- Consolider le cluster : landing SpokePage + liens vers les 2 articles blog AI Act et le sprint 3 h. Angle : obligation de formation (article 4), sanctions, mise en conformité pratique.
- Requêtes : « formation ai act », « ai act formation obligatoire », « formation conformité ia ».

### 2.4 Comparatifs : `/mistral-vs-chatgpt` puis `/gemini-vs-copilot`
- **Où** : `src/data/comparisons.js` (gabarit existant, 5 comparatifs déjà en place).
- Angle Mistral : souveraineté, RGPD, hébergement UE. Angle Gemini vs Copilot : Workspace vs M365.

### 2.5 Hiérarchiser le triplet géo
- Breadcrumb + lien montant des pages outil×ville vers la page ville ; priorité sitemap des pages outil×ville à 0.6.
- **Où** : `GeoPage.jsx`, `generate-sitemap.mjs`.

---

## 🟡 Sprint 3 — E-E-A-T et AEO (semaines 3-5)

### 3.1 Page fondateur `/mathias-nizan`
- Bio détaillée datée, photo HD, NDA, parcours, interventions, LinkedIn. Balisage `ProfilePage` + `Person` enrichi (réutiliser l'@id existant `#mathias-nizan`).
- Lier depuis : footer, à-propos, chaque article blog (byline), SpokePages (bloc formateur).

### 3.2 Réponses directes sous les H2 (pattern AEO)
- 15 pages prioritaires : 7 hubs, 3 topics, financement, Qualiopi, conseil, à-propos, débutants.
- Pattern : H2 en question + réponse 40-60 mots en gras + développement.

### 3.3 Avis vérifiables
- Brancher les avis Google réels (lien profil Business + sélection affichée avec dates). Process de collecte systématique post-formation (QR code, relance J+2). Objectif 30+ avis.
- Dater les témoignages existants dans `testimonials.js` et ajouter 2-3 études de cas chiffrées.

### 3.4 Champ auteur + page auteur blog
- `blog-articles.js` : champ `author` ; page agrégeant les articles, liée en byline.

### 3.5 Maillage contextuel dans le corps des articles
- 2-4 liens contextuels par article majeur vers hubs/spokes, ancres descriptives variées.

### 3.6 Reprise du rythme éditorial
- 2 articles/mois minimum (le dernier date du 26 avril). Sujets alignés sur les gaps : AI Act pratique, agents IA en entreprise, retours d'expérience sectoriels.

---

## 🟢 Sprint 4 — Autorité et citations LLM (continu, démarrage semaine 6)

### 4.1 Entité Wikidata Masteria (30 min, gratuit)
- Organisme de formation, fondateur, siège Lyon, site officiel, date de création.

### 4.2 Annuaires institutionnels
- Liste Publique des OF (vérifier la fiche), France Num (devenir Activateur), CCI Lyon, annuaires Qualiopi. Cohérence NAP stricte avec le site et Google Business.

### 4.3 Baromètre propriétaire annuel
- « L'adoption de l'IA dans les PME françaises » à partir des données de formation anonymisées (1 500+ professionnels). Page dédiée + PDF + communiqué. C'est l'aimant à backlinks presse et à citations LLM le plus efficace du plan.

### 4.4 Automatiser `llms.txt`
- Générer les sections de liens depuis le sitemap au build (même mécanique que `generate-sitemap.mjs`), URLs absolues partout.

### 4.5 Mesure
- Baseline Search Console (positions + liens) maintenant, puis revue mensuelle.
- CWV : test manuel sur https://pagespeed.web.dev (le quota API était dépassé le jour de l'audit) ; surveiller l'INP mobile.
- Suivi citations LLM : tester mensuellement 10 requêtes cibles dans ChatGPT, Perplexity et AI Overviews (« meilleure formation IA entreprise », « formation chatgpt qualiopi »...) et noter si Masteria est cité.

---

## Récapitulatif des validations post-déploiement

```bash
curl -sI https://master-ia.fr/ | head -1                          # attendu : 308
curl -sI https://www.master-ia.fr/formation-chatgpt/ | head -1     # attendu : 308
curl -s https://www.master-ia.fr/formation-ia-geneve | grep -c 'fr-CH'   # attendu : ≥1
curl -s https://www.master-ia.fr/llms.txt | grep -c 'https://www.master-ia.fr/'  # URLs absolues
curl -s -o /dev/null -w "%{http_code}" https://www.master-ia.fr/formation-prompt-engineering  # 200 après Sprint 2
```
