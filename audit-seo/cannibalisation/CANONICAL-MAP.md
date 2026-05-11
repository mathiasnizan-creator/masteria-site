# Cartographie des intentions de recherche — Masteria

**Mise à jour** : 2026-04-27
**Objectif** : pour chaque type de requête utilisateur, indiquer la page canonique. Sert de référence éditoriale et SEO.

---

## 1 — Requêtes génériques (haut de funnel)

| Requête utilisateur typique | Page canonique | Justification |
|---|---|---|
| « Masteria » (brand) | `/` | Page d'accueil, brand entry |
| « formation IA entreprise » | `/` | Brand + propositions large |
| « catalogue formations IA » | `/formation-intelligence-artificielle` | 89 formations, filtrable par outil/métier |
| « formation IA Qualiopi » | `/formation-ia-qualiopi` | Page dédiée certification |
| « financement formation IA OPCO » | `/financement-formation-ia` | Page dédiée OPCO |
| « formation IA débutant » | `/formation-ia-debutant` | Programme initiation |
| « conseil IA entreprise » | `/conseil-intelligence-artificielle` | Cabinet conseil |

---

## 2 — Requêtes par outil (intent : maîtriser un outil spécifique)

| Requête utilisateur typique | Page canonique |
|---|---|
| « formation ChatGPT entreprise » | `/formation-chatgpt` |
| « formation Microsoft Copilot » | `/formation-microsoft-copilot` |
| « formation Google Gemini entreprise » | `/formation-gemini-entreprise` |
| « formation Claude IA » | `/formation-claude-ia` |
| « formation Mistral AI » | `/formation-mistral-ai` |
| « Sprint IA » / « formation IA 3 heures » | `/formation-sprint-ia` |
| « formation Multi-outils IA » / « comparer ChatGPT Copilot » | `/formation-multi-outils` |

---

## 3 — Requêtes par métier (intent : adapter l'IA à mon métier)

**Règle** : `/formation-ia-{métier}` est la page de référence pour toute requête générique « formation IA {métier} ».

| Requête utilisateur typique | Page canonique |
|---|---|
| « formation IA marketing » | `/formation-ia-marketing` |
| « formation IA RH » | `/formation-ia-ressources-humaines` |
| « formation IA commercial » | `/formation-ia-commercial` |
| « formation IA finance » | `/formation-ia-finance` |
| « formation IA communication » | `/formation-ia-communication` |
| « formation IA management » | `/formation-ia-management` |
| « formation IA assistante de direction » | `/formation-ia-assistante` |
| « formation IA SEO » | `/formation-ia-seo` |
| « formation IA service client » | `/formation-ia-service-client` |
| « formation IA DSI » / « formation IA informatique » | `/formation-ia-informatique` |
| « formation IA pédagogique » / « formation IA formateurs » | `/formation-ia-pedagogique` |
| « formation IA achats » | `/formation-ia-achats` |
| « sensibilisation IA équipe » / « tous publics » | `/formation-ia-transverse` |

---

## 4 — Requêtes outil × métier (intent : un outil précis pour mon métier)

**Règle** : `/formation-{outil}-{métier}` capture la requête combinée.

Exemples (89 combinaisons disponibles) :

| Requête | Page canonique |
|---|---|
| « formation ChatGPT marketing » | `/formation-chatgpt-marketing` |
| « formation Copilot finance » | `/formation-copilot-finance` |
| « formation Gemini RH » | `/formation-gemini-ressources-humaines` |
| « formation Claude juridique » | redirect 308 → `/formation-intelligence-artificielle` (juridique supprimé) |
| « formation Mistral IT » | `/formation-mistral-informatique` |

---

## 5 — Requêtes panorama / comparatif (intent spécifique : comparer les 5 IA sur 2 jours)

**Règle** : les pages `/formation-multi-outils-{métier}` ciblent les requêtes explicites sur le format panorama 2 jours, distinctes des hubs métier.

| Requête utilisateur typique | Page canonique |
|---|---|
| « panorama IA marketing 2 jours » | `/formation-multi-outils-marketing` |
| « comparatif IA RH » | `/formation-multi-outils-ressources-humaines` |
| « formation panorama 5 outils IA » | `/formation-multi-outils` (hub) |

---

## 6 — Requêtes Sprint IA (format court 3 heures)

| Requête | Page canonique |
|---|---|
| « Sprint IA sensibilisation » | `/formation-sprint-ia-sensibilisation` |
| « Sprint IA prompts » | `/formation-sprint-ia-prompts` |
| « Sprint IA Excel » / « formation IA Excel rapide » | `/formation-sprint-ia-excel` |
| « Sprint IA managers » | `/formation-sprint-ia-managers` |
| « Sprint IA veille » | `/formation-sprint-ia-veille` |
| « formation AI Act » / « conformité IA Act » | `/formation-sprint-ia-ai-act` |

---

## 7 — Requêtes géographiques (5 villes prioritaires)

**Règle** : `/formation-ia-{ville}` pour la requête générique géo, `/formation-{outil}-{ville}` pour les outils ciblés (ChatGPT et Claude uniquement).

| Requête | Page canonique |
|---|---|
| « formation IA Paris » | `/formation-ia-paris` |
| « formation IA Lyon » | `/formation-ia-lyon` |
| « formation IA Marseille » | `/formation-ia-marseille` |
| « formation IA Genève » | `/formation-ia-geneve` |
| « formation IA Bruxelles » | `/formation-ia-bruxelles` |
| « formation ChatGPT Paris » | `/formation-chatgpt-paris` |
| « formation Claude IA Lyon » | `/formation-claude-ia-lyon` |
| « formation IA Suisse » | redirect 308 → `/formation-ia-geneve` |
| « formation IA Belgique » | redirect 308 → `/formation-ia-bruxelles` |
| « formation Copilot/Gemini/Mistral + ville » | redirect 308 → hub outil |

---

## 8 — Requêtes éditoriales (blog / informationnel)

**Règle** : `/blog/{slug}` pour les requêtes informatives, distinct des pages de service.

| Requête (intent informatif) | Page canonique |
|---|---|
| « guide formation IA Paris 2026 » | `/blog/formation-ia-paris` |
| « guide formation IA Lyon 2026 » | `/blog/formation-ia-lyon` |
| « comment former à l'IA » | `/blog/formation-ia-...` |
| « comprendre l'AI Act » | `/blog/ai-act-formation-ia-obligatoire-entreprise` |

---

## Différenciation Hub vs Spoke vs Métier (anti-cannibalisation)

Pour éviter que deux pages se battent sur la même requête, chaque type de page a un signal sémantique distinct :

| Type | Pattern URL | Pattern Title | Pattern H1 |
|---|---|---|---|
| **Hub outil** | `/formation-{tool}` | `Formation {Tool} pour les entreprises – Certifié Qualiopi` | `Formation {Tool} pour les entreprises` |
| **Spoke outil×métier** | `/formation-{tool}-{métier}` | `Formation {Tool} {Métier} \| Qualiopi \| Masteria` | `Formation {Tool} pour les équipes {Métier}` |
| **Métier hub** | `/formation-ia-{métier}` | `Formation IA {Métier} pour entreprises \| Qualiopi \| Masteria` | `Formation IA pour les équipes {Métier}` |
| **Multi-outils spoke** | `/formation-multi-outils-{métier}` | `Panorama IA {Métier} 2 jours · 5 outils comparés \| Masteria` | `Panorama IA {Métier} 2 jours : 5 outils comparés` |
| **Sprint IA** | `/formation-sprint-ia-{slug}` | `Sprint IA {Topic} (3 h) \| Masteria` | `Sprint IA {Topic}, 3 heures pour {bénéfice}` |
| **Geo IA** | `/formation-ia-{ville}` | `Formation IA {Ville} \| ChatGPT, Claude, 12 métiers \| Masteria` | `Formation IA {nameLoc} – ChatGPT, Claude et 89 programmes par métier` |
| **Geo outil×ville** | `/formation-{tool}-{ville}` | `Formation {Tool} {Ville} \| {format} \| Masteria` | `Formation {Tool} {nameLoc} – {format}` |
| **Blog** | `/blog/{slug}` | `{Title} : guide … 2026 \| Masteria` | `{Title} : le guide complet pour …` |

---

## Vérifications appliquées

- ✅ Aucun titre dupliqué entre 2 URLs
- ✅ Aucun H1 dupliqué entre 2 URLs
- ✅ Tous les canonicals pointent vers eux-mêmes (self-canonical)
- ✅ Multi-outils spoke titles différenciés du métier hub avec « Panorama X jours · 5 outils »
- ✅ Home et Catalog différenciés (brand vs catalogue)
- ✅ Blog geo et Geo page différenciés (« guide » vs sales)

---

*Dernière mise à jour : 27 avril 2026 — Suite à l'audit anti-cannibalisation.*
