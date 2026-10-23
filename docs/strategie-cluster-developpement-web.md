# Cluster « développement » : stratégie mots-clés (23/10/2026)

Source : export Semrush FR collé par Mathias le 23/10/2026 (volume mensuel, KD %, CPC €).
Règle du site : une intention = une page. Les variantes d'une même intention vont sur la même page (title, H1, H2, FAQ), jamais sur une page clone.

## 1. Lecture des requêtes

| Requête | Intention | Vol. | KD | Page cible |
|---|---|---:|---:|---|
| agence de developpeur web | C | 590 | 19 | /agence-developpement-web |
| entreprise agence de développement web | I | 210 | 21 | /agence-developpement-web |
| agence web developpement | C | 170 | 16 | /agence-developpement-web |
| societe de developpement web | C | 140 | 21 | /agence-developpement-web |
| société de développement web | C | 110 | 16 | /agence-developpement-web |
| entreprises développement web | C | 90 | 18 | /agence-developpement-web |
| développement de sites web | I | 90 | 26 | /agence-developpement-web (section « étapes ») |
| agence de développement de site web | C | 70 | 25 | /agence-developpement-web |
| agence de développement site web | I | 70 | 12 | /agence-developpement-web |
| agence developpement sur mesure | C | 390 | 27 | /agence-developpement-sur-mesure |
| entreprise de developpement logiciel | C | 90 | 27 | /agence-developpement-sur-mesure |
| entreprise de développement | C | 90 | 31 | /agence-developpement-sur-mesure |
| agence de développement web et mobile | C | 140 | 18 | /agence-developpement-application-web |
| agence developpement application web | I | 70 | 22 | /agence-developpement-application-web |
| sous traitance developpement web | I | 110 | 7 | /sous-traitance-developpement-web |
| agence francaise developpement | N | 140 | 27 | **Écartée** : requête de navigation vers l'AFD (Agence française de développement, banque publique) |
| développeur ia (+ variantes métier, salaire, TJM, freelance) | I/C | – | – | /developpeur-ia (créée le même jour) |

Volume adressé : environ 2 300 recherches par mois, KD 7 à 31. Cible la plus facile : « sous traitance developpement web » (KD 7).

## 2. Architecture

```
/agence-developpement-web            PILIER + HUB du cluster (590 + variantes)
 ├─ /agence-developpement-sur-mesure     logiciel et application métier sur mesure
 ├─ /agence-developpement-application-web applications web et mobiles
 ├─ /sous-traitance-developpement-web     marque blanche, régie, renfort pour agences et ESN
 ├─ /agence-developpement-ia             (existant) l'IA dans le logiciel
 ├─ /developpeur-ia                      (créée) fiche métier + recrutement
 ├─ /outils-ia-sur-mesure                (existant)
 └─ /prix-projet-ia, /methode-projet-ia  (existants, conversion)
```

Pas de page hub séparée : la page pilier porte la plus forte requête et distribue vers les spokes (bloc « nos développements » en `<nav>`).

## 3. Positionnement (à valider par Mathias)

Masteria n'est pas une agence web généraliste. Angle commun du cluster : **des applications et des sites conçus pour le métier, prêts à accueillir l'IA**, construits par des développeurs qui savent aussi brancher un modèle, et livrés avec leur code et leur documentation. L'IA y entre seulement quand elle sert. Ce que l'on cite comme preuve : les outils que Masteria construit et exploite elle-même (site prérendu, plateforme de gestion des formations sous Next.js et Supabase), et les études de cas publiées. Aucun cas, logo ou chiffre client inventé.

Pas de site vitrine à bas prix : fourchettes larges à plafond ouvert, prix au forfait après cadrage, régie au taux journalier non publié.

## 4. Anti-cannibalisation

- /agence-developpement-web : « qui construit votre site ou votre application web, comment choisir, comment ça se passe ». Intention commerciale large.
- /agence-developpement-sur-mesure : « faire développer un logiciel qui épouse vos processus plutôt qu'adapter un progiciel ». Comparaison sur mesure / SaaS / no-code / progiciel paramétré.
- /agence-developpement-application-web : « application web, mobile, PWA, quel choix technique ». Comparatif web / PWA / natif / multiplateforme.
- /sous-traitance-developpement-web : lecteur = agence, ESN, éditeur qui cherche un renfort. Marque blanche, régie, forfait, propriété intellectuelle, confidentialité, cadre légal (loi de 1975, vigilance URSSAF).
- /agence-developpement-ia : l'IA comme composant ; on y renvoie depuis toutes les pages.

## 5. Technique commune

Hero sombre premium, En bref (dl), sommaire ancré, tableau à insight par page (différent sur chaque page), FAQ toujours dans le DOM, JSON-LD Service + Article + FAQPage (+ ItemList sur le pilier), byline Mathias Nizan, sources datées et cliquables, ≥ 90 % de texte propre, zéro tic d'écriture IA.

## 6. Suivi

- Positions à suivre dans Semrush sur les 16 requêtes ci-dessus.
- Si « agence de développement web » + ville monte en volume : pages géo sur le modèle /agence-ia-{ville}, seulement avec des données propres à la ville.
