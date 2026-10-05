# master-ia.fr : pages Claude (Anthropic) dans Semrush, base France

Date de collecte : **05/10/2026**. Base Semrush `fr` (desktop). Lecture seule.

## Avant de lire : d'où viennent les chiffres

Le solde d'unités API Semrush est **à zéro** (`ERROR 132 :: API UNITS BALANCE IS ZERO`, puis `no_api_units`). Le 05/10, seules **deux réponses** ont été reçues avant épuisement complet du solde :

| Source | Rapport | Ce qu'il donne |
|---|---|---|
| **S1** API Semrush, 05/10/2026 | `domain_rank` sur `master-ia.fr` | totaux du domaine (instantané du jour) |
| **S2** API Semrush, 05/10/2026 | `domain_rank` sur `https://www.master-ia.fr/formation-claude-ia` | totaux de la page hub |
| **S3** API Semrush, relevé du **02/10/2026** (archivé) | `resource_organic` (positions) + rapport Pages + historique + backlinks, base `fr` | fichiers bruts dans `~/masteria-site/audit-conseil-dev-2026-10-02/annexes/semrush-brut/` (`kw.csv` = mot-clé ; position ; volume ; URL ; trafic ; KD, `pages.csv` = URL ; mots-clés ; trafic) et synthèse dans `annexes/semrush-conseil-dev.md` |
| **S4** Export Semrush fourni par Mathias, **juin 2026** | volumes + CPC | `~/masteria-site/docs/seo-cluster-strategy.md`, section 2.6 |

S3 date de trois jours et sert de base aux sections 1 et 2. Les deux réponses du jour (S1, S2) recoupent S3 : 565 mots-clés le 05/10 contre 569 le 02/10 pour le domaine, et 27 mots-clés / 4 visites pour le hub dans les deux relevés. Aucun chiffre n'est extrapolé. Ce qui n'a pas pu être collecté est listé en section « Limites ».

---

## 1. Positions organiques actuelles

### 1a. Domaine master-ia.fr (S1, 05/10/2026)

| Indicateur | Valeur |
|---|---|
| Semrush Rank FR | 769 215 |
| Mots-clés organiques (top 100) | 565 |
| Trafic organique estimé | 161 visites/mois |
| Valeur du trafic (équivalent Ads) | 190 $ |
| Mots-clés dont la SERP affiche un AI Overview | 473 (84 % des 565) |

### 1b. Page hub /formation-claude-ia (S2, 05/10/2026)

| Indicateur | Valeur |
|---|---|
| Mots-clés organiques (top 100) | 27 |
| Trafic estimé | 4 visites/mois |
| Valeur du trafic | 1 $ |
| Top 3 / positions 4-10 / 11-20 | 0 / 8 / 5 |
| Mots-clés dont la SERP affiche un AI Overview | 19 sur 27 (70 %) |

### 1c. Les 22 URL auditées : mots-clés et trafic par page (S3, 02/10/2026)

Colonne « Mots-clés » = rapport Pages de Semrush (top 100). Une URL absente du rapport = 0 mot-clé dans le top 100.

| URL | Mots-clés | Trafic estimé | Meilleure position (requête, vol.) | Requête la plus volumineuse (pos., vol.) |
|---|---:|---:|---|---|
| /formation-claude-ia (hub) | 27 | 4 | 7 (formation claude rennes, 140) | formation claude (19, 880) |
| /formation-claude-code | 1 | 0 | 65 (claude code formation, 110) | idem |
| /chatgpt-vs-claude | 31 | 0 | 14 (claude ai ou chat gpt, 110) | claude vs chatgpt (35, 1 600) |
| /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 9 | 3 | 2 (chatgpt ou gemini ou copilot, 50) | mistral vs claude (32, 140) |
| /formation-claude-assistante | 0 | 0 | aucune | aucune |
| /formation-claude-commercial | 0 | 0 | aucune | aucune |
| /formation-claude-communication | 0 | 0 | aucune | aucune |
| /formation-claude-finance | 2 | 2 | 8 (claude finance, 210) | idem |
| /formation-claude-informatique | 0 | 0 | aucune | aucune |
| /formation-claude-management | 0 | 0 | aucune | aucune |
| /formation-claude-marketing | 0 | 0 | aucune | aucune |
| /formation-claude-pedagogique | 1 | 0 | 56 (claude education, 110) | idem |
| /formation-claude-ressources-humaines | 0 | 0 | aucune | aucune |
| /formation-claude-seo | 0 | 0 | aucune | aucune |
| /formation-claude-service-client | 1 | 0 | 29 (seniors-formation.fr garantie satisfaction, 320) | idem |
| /formation-claude-ia-paris | 0 | 0 | aucune | aucune |
| /formation-claude-ia-lyon | 0 | 0 | aucune | aucune |
| /formation-claude-ia-marseille | 0 | 0 | aucune | aucune |
| /formation-claude-ia-nantes | 0 | 0 | aucune | aucune |
| /formation-claude-ia-rennes | 0 | 0 | aucune | aucune |
| /formation-claude-ia-geneve | 0 | 0 | aucune | aucune |
| /formation-claude-ia-bruxelles | 0 | 0 | aucune | aucune |
| **Total 22 URL** | **72** | **9** | | |

Soit 72 mots-clés sur 569 pour le domaine (12,7 %) et 9 visites estimées sur 185 (4,9 %). **15 URL sur 22 n'ont aucun mot-clé dans le top 100** : 8 pages métier sur 11 et les 7 pages villes. Note de contexte (historique Git du site) : les pages Claude × Rennes et Claude × Nantes existent depuis le 30/08/2026 ; avant, ces slugs redirigeaient vers le hub.

### 1d. Tous les mots-clés « claude » / « anthropic » (mot-clé ou URL) (S3, 02/10/2026)

Colonnes de S3 : position, volume mensuel FR, KD (Keyword Difficulty /100), trafic estimé. L'intention et les fonctionnalités SERP **par mot-clé** n'ont pas été collectées (rapport bloqué le 05/10, colonnes absentes de l'archive) ; au niveau agrégé, 19 des 27 mots-clés du hub et 84 % des mots-clés du domaine ont un AI Overview dans la SERP (S1, S2).

71 lignes de positions, 65 mots-clés distincts. Aucun mot-clé « claude » ne se classe sur une URL hors des 22 auditées.

| # | Mot-clé | Pos. | URL classée | Volume | KD | Trafic estimé | Remarque |
|---|---|---:|---|---:|---:|---:|---|
| 1 | chatgpt ou gemini ou copilot | 2 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 50 | 9 | 3 | mot-clé hors Claude (URL Claude) |
| 2 | formation claude rennes | 7 | /formation-claude-ia | 140 | 1 | 3 |  |
| 3 | anthropic claude formation | 7 | /formation-claude-ia | 90 | 41 | 0 |  |
| 4 | claude formation anthropic | 7 | /formation-claude-ia | 50 | 37 | 0 |  |
| 5 | claude finance | 8 | /formation-claude-finance | 210 | 17 | 2 |  |
| 6 | formation claude anthropic | 8 | /formation-claude-ia | 140 | 22 | 0 |  |
| 7 | claude ai formation | 8 | /formation-claude-ia | 50 | 6 | 0 |  |
| 8 | anthropic formation claude | 8 | /formation-claude-ia | 50 | 37 | 0 |  |
| 9 | formation anthropic | 9 | /formation-claude-ia | 140 | 14 | 0 |  |
| 10 | formation anthropic claude | 9 | /formation-claude-ia | 70 | 46 | 0 |  |
| 11 | claude for finance | 9 | /formation-claude-finance | 70 | 8 | 0 |  |
| 12 | anthropic formation | 12 | /formation-claude-ia | 260 | 19 | 0 |  |
| 13 | formations claude ai | 12 | /formation-claude-ia | 50 | 0 | 0 |  |
| 14 | claude ou mistral | 13 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 50 | 19 | 0 |  |
| 15 | claude ai ou chat gpt | 14 | /chatgpt-vs-claude | 110 | 19 | 0 |  |
| 16 | mistral ou claude | 15 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 50 | 19 | 0 |  |
| 17 | claude code formation | 16 | /formation-claude-ia | 110 | 10 | 0 |  |
| 18 | mistral claude | 16 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 90 | 18 | 0 |  |
| 19 | formation claude ai | 17 | /formation-claude-ia | 390 | 9 | 0 |  |
| 20 | formation claude | 19 | /formation-claude-ia | 880 | 10 | 1 |  |
| 21 | mistral ai vs claude | 19 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 70 | 0 | 0 | 2 positions pour la même URL |
| 22 | formation claude code | 21 | /formation-claude-ia | 480 | 11 | 0 |  |
| 23 | formation ia claude | 21 | /formation-claude-ia | 70 | 16 | 0 |  |
| 24 | mistral ai vs claude | 22 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 70 | 0 | 0 | 2 positions pour la même URL |
| 25 | claude ai academy | 22 | /formation-claude-ia | 50 | 43 | 0 |  |
| 26 | claude vs mistral | 23 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 90 | 13 | 0 |  |
| 27 | anthropic academy claude | 24 | /formation-claude-ia | 140 | 29 | 0 |  |
| 28 | certification claude code | 25 | /formation-claude-ia | 110 | 31 | 0 |  |
| 29 | chatgpt vs claude | 26 | /chatgpt-vs-claude | 390 | 21 | 0 |  |
| 30 | claude formations | 26 | /formation-claude-ia | 70 | 6 | 0 |  |
| 31 | chatgpt claude | 28 | /chatgpt-vs-claude | 260 | 20 | 0 | 2 positions pour la même URL |
| 32 | claude 2 vs gpt 4 | 28 | /chatgpt-vs-claude | 110 | 15 | 0 | 2 positions pour la même URL |
| 33 | seniors-formation.fr garantie satisfaction | 29 | /formation-claude-service-client | 320 | 14 | 0 | mot-clé hors Claude (URL Claude) |
| 34 | claude vs chat gpt | 29 | /chatgpt-vs-claude | 140 | 18 | 0 |  |
| 35 | claude 2 vs gpt 4 | 29 | /chatgpt-vs-claude | 110 | 15 | 0 | 2 positions pour la même URL |
| 36 | chatgpt claude | 30 | /chatgpt-vs-claude | 260 | 20 | 0 | 2 positions pour la même URL |
| 37 | claude cours | 30 | /formation-claude-ia | 70 | 45 | 0 |  |
| 38 | chat gpt vs claude | 31 | /chatgpt-vs-claude | 170 | 21 | 0 |  |
| 39 | mistral vs claude | 32 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir | 140 | 18 | 0 |  |
| 40 | difference entre claude et chat gpt | 32 | /chatgpt-vs-claude | 70 | 19 | 0 |  |
| 41 | difference claude et chat gpt | 33 | /chatgpt-vs-claude | 90 | 19 | 0 |  |
| 42 | entreprise claude | 34 | /formation-claude-ia | 90 | 18 | 0 |  |
| 43 | claude ia vs chatgpt | 34 | /chatgpt-vs-claude | 50 | 20 | 0 |  |
| 44 | claude vs chatgpt | 35 | /chatgpt-vs-claude | 1600 | 24 | 0 |  |
| 45 | claude gpt | 35 | /chatgpt-vs-claude | 720 | 39 | 0 |  |
| 46 | claude versus chatgpt | 35 | /chatgpt-vs-claude | 90 | 27 | 0 |  |
| 47 | différence entre chatgpt et claude | 35 | /chatgpt-vs-claude | 50 | 0 | 0 |  |
| 48 | comparatif claude chatgpt | 36 | /chatgpt-vs-claude | 50 | 23 | 0 |  |
| 49 | claude ai course | 36 | /formation-claude-ia | 50 | 51 | 0 |  |
| 50 | comparaison claude et chatgpt | 37 | /chatgpt-vs-claude | 50 | 20 | 0 |  |
| 51 | claude meilleur que chatgpt | 37 | /chatgpt-vs-claude | 50 | 19 | 0 |  |
| 52 | claude ou gpt | 37 | /chatgpt-vs-claude | 50 | 19 | 0 |  |
| 53 | claude ou chatgpt | 38 | /chatgpt-vs-claude | 880 | 20 | 0 | 2 positions pour la même URL |
| 54 | claude ou chatgpt | 39 | /chatgpt-vs-claude | 880 | 20 | 0 | 2 positions pour la même URL |
| 55 | chatgpt ou claude | 39 | /chatgpt-vs-claude | 210 | 14 | 0 |  |
| 56 | formation claude ia | 41 | /formation-claude-ia | 210 | 18 | 0 |  |
| 57 | claude ai vs chatgpt | 44 | /chatgpt-vs-claude | 320 | 37 | 0 |  |
| 58 | chatgpt or claude | 44 | /chatgpt-vs-claude | 90 | 51 | 0 |  |
| 59 | claude formation | 47 | /formation-claude-ia | 320 | 12 | 0 |  |
| 60 | claude vs gpt | 48 | /chatgpt-vs-claude | 110 | 20 | 0 |  |
| 61 | claude openai | 49 | /chatgpt-vs-claude | 50 | 29 | 0 |  |
| 62 | claude chatgpt | 51 | /chatgpt-vs-claude | 320 | 18 | 0 |  |
| 63 | claude ou chat gpt | 53 | /chatgpt-vs-claude | 170 | 19 | 0 |  |
| 64 | formation claude nantes | 54 | /formation-claude-ia | 170 | 5 | 0 |  |
| 65 | claude or chatgpt | 56 | /chatgpt-vs-claude | 110 | 33 | 0 |  |
| 66 | claude education | 56 | /formation-claude-pedagogique | 110 | 29 | 0 |  |
| 67 | chat gpt claude | 57 | /chatgpt-vs-claude | 140 | 23 | 0 | 2 positions pour la même URL |
| 68 | claude code france | 57 | /formation-claude-ia | 70 | 39 | 0 |  |
| 69 | chat gpt claude | 61 | /chatgpt-vs-claude | 140 | 23 | 0 | 2 positions pour la même URL |
| 70 | claude code formation | 65 | /formation-claude-code | 110 | 10 | 0 |  |
| 71 | claude courses | 71 | /formation-claude-ia | 260 | 64 | 0 |  |

Répartition des 71 lignes : top 3 = 1 (et ce n'est pas une requête Claude : « chatgpt ou gemini ou copilot »), 4-10 = 10, 11-20 = 10, 21-30 = 16, 31-50 = 24, 51-100 = 10. **Aucune requête contenant « claude » ou « anthropic » n'est dans le top 3.**

Par famille (63 requêtes Claude distinctes, 11 910 recherches/mois cumulées, meilleure position retenue) :

| Famille | Requêtes | Volume cumulé | Requêtes en top 10 | Volume de ces requêtes |
|---|---:|---:|---:|---:|
| Formation (hub, Claude Code, métiers) | 30 | 4 970 | 10 | 1 010 |
| Comparatifs (ChatGPT vs Claude, Mistral vs Claude) | 33 | 6 940 | 0 | 0 |

---

## 2. Cannibalisation et URL mal attribuées (S3, 02/10/2026)

| Requête | Vol. | KD | URL classée (pos.) | URL attendue | Constat |
|---|---:|---:|---|---|---|
| claude code formation | 110 | 10 | /formation-claude-ia (16) **et** /formation-claude-code (65) | /formation-claude-code | Seule requête où deux URL du site se classent. La page dédiée est 49 places derrière le hub. |
| formation claude code | 480 | 11 | /formation-claude-ia (21) | /formation-claude-code | La page Claude Code ne se classe pas sur sa requête principale ; c'est le hub qui la porte. |
| certification claude code | 110 | 31 | /formation-claude-ia (25) | /formation-claude-code | Idem. |
| claude code france | 70 | 39 | /formation-claude-ia (57) | /formation-claude-code | Idem. /formation-claude-code n'a qu'un mot-clé en tout. |
| formation claude rennes | 140 | 1 | /formation-claude-ia (7) | /formation-claude-ia-rennes | Le hub capte la requête locale (3 visites estimées, le meilleur trafic Claude du site). La page Rennes, en ligne depuis le 30/08, n'a aucun mot-clé. |
| formation claude nantes | 170 | 5 | /formation-claude-ia (54) | /formation-claude-ia-nantes | Même schéma. |
| seniors-formation.fr garantie satisfaction | 320 | 14 | /formation-claude-service-client (29) | aucune | Seul mot-clé de la page : requête de marque d'un tiers, hors sujet. |
| claude ou chatgpt, chatgpt claude, chat gpt claude, claude 2 vs gpt 4 | 880 / 260 / 140 / 110 | 20 / 20 / 23 / 15 | /chatgpt-vs-claude, deux positions chacune (38-39, 28-30, 57-61, 28-29) | /chatgpt-vs-claude | Pas une cannibalisation entre URL : Semrush enregistre deux résultats de la même URL sur ces SERP. |

Ce qui ne pose pas problème : les requêtes « ChatGPT vs Claude » vont toutes sur /chatgpt-vs-claude, les requêtes « Mistral vs Claude » toutes sur l'article multi-outils, et aucune page ville ni la page ChatGPT ne se classe sur « formation claude ». Aucune page ville Claude ne se classe sur quoi que ce soit.

---

## 3. Univers de mots-clés « formation Claude » (FR)

### 3a. Liste demandée

Volumes et KD : rapport de positions S3 (02/10/2026), donc uniquement pour les requêtes où le site est déjà dans le top 100. CPC : uniquement S4 (export de juin 2026, en $). Intention : non collectée. « n.d. » = non disponible faute d'unités API.

| Mot-clé | Volume S3 (02/10) | KD S3 | Volume S4 (juin) | CPC S4 | Position master-ia.fr (S3) |
|---|---:|---:|---:|---:|---|
| formation claude | 880 | 10 | 210 | 1,49 | 19 (hub) |
| formation claude ai | 390 | 9 | 170 | 1,94 | 17 (hub) |
| formation claude ia | 210 | 18 | 70 | n.d. | 41 (hub) |
| formation anthropic | 140 | 14 | n.d. | n.d. | 9 (hub) |
| claude formation entreprise | n.d. | n.d. | n.d. | n.d. | absent (voisin : « entreprise claude », 90, KD 18, pos. 34 hub) |
| formation claude code | 480 | 11 | 170 | 1,49 | 21 (hub, pas la page Claude Code) |
| claude code formation | 110 | 10 | 50 | 1,45 | 16 (hub), 65 (/formation-claude-code) |
| chatgpt vs claude | 390 | 21 | n.d. | n.d. | 26 |
| claude vs chatgpt | 1 600 | 24 | n.d. | n.d. | 35 |
| claude ou chatgpt | 880 | 20 | n.d. | n.d. | 38 |
| claude ai | n.d. | n.d. | n.d. | n.d. | absent |
| claude ia | n.d. | n.d. | n.d. | n.d. | absent |
| claude entreprise | n.d. | n.d. | n.d. | n.d. | absent |
| claude team | n.d. | n.d. | n.d. | n.d. | absent |
| claude pro prix | n.d. | n.d. | n.d. | n.d. | absent |
| claude tarif | n.d. | n.d. | n.d. | n.d. | absent |
| claude code | n.d. | n.d. | n.d. | n.d. | absent |
| claude cowork | n.d. | n.d. | n.d. | n.d. | absent |
| claude projets | n.d. | n.d. | n.d. | n.d. | absent |
| formation claude paris | n.d. | n.d. | 90 | n.d. | absent |
| formation claude lyon | n.d. | n.d. | n.d. | n.d. | absent |
| cours claude ai | n.d. | n.d. | n.d. | n.d. | absent (voisins : « claude cours » 70, KD 45, pos. 30 ; « claude ai course » 50, KD 51, pos. 36 ; « claude courses » 260, KD 64, pos. 71) |
| apprendre claude | n.d. | n.d. | n.d. | n.d. | absent |
| tuto claude | n.d. | n.d. | n.d. | n.d. | absent |

« absent » = le site n'est pas dans le top 100 Semrush sur cette requête au 02/10 (ou la requête n'a pas de volume suivi) ; ce n'est pas une mesure du volume.

Écart S4 / S3 : les volumes du 02/10 sont 2 à 3 fois ceux de juin (formation claude 210 → 880, formation claude code 170 → 480, claude formation 140 → 320). Les deux chiffres viennent de Semrush mais de rapports différents (export mot-clé en juin, rapport de positions en octobre) ; un rapport mot-clé du jour aurait tranché.

### 3b. Mots-clés associés et questions (phrase_related, phrase_questions)

**Non collectés** (solde API à zéro). À défaut, les 30 requêtes Claude les plus volumineuses que Semrush associe déjà au site (S3, meilleure position par requête) :

| # | Mot-clé | Vol. | KD | Pos. | URL |
|---|---|---:|---:|---:|---|
| 1 | claude vs chatgpt | 1 600 | 24 | 35 | /chatgpt-vs-claude |
| 2 | formation claude | 880 | 10 | 19 | /formation-claude-ia |
| 3 | claude ou chatgpt | 880 | 20 | 38 | /chatgpt-vs-claude |
| 4 | claude gpt | 720 | 39 | 35 | /chatgpt-vs-claude |
| 5 | formation claude code | 480 | 11 | 21 | /formation-claude-ia |
| 6 | formation claude ai | 390 | 9 | 17 | /formation-claude-ia |
| 7 | chatgpt vs claude | 390 | 21 | 26 | /chatgpt-vs-claude |
| 8 | claude ai vs chatgpt | 320 | 37 | 44 | /chatgpt-vs-claude |
| 9 | claude formation | 320 | 12 | 47 | /formation-claude-ia |
| 10 | claude chatgpt | 320 | 18 | 51 | /chatgpt-vs-claude |
| 11 | anthropic formation | 260 | 19 | 12 | /formation-claude-ia |
| 12 | chatgpt claude | 260 | 20 | 28 | /chatgpt-vs-claude |
| 13 | claude courses | 260 | 64 | 71 | /formation-claude-ia |
| 14 | claude finance | 210 | 17 | 8 | /formation-claude-finance |
| 15 | chatgpt ou claude | 210 | 14 | 39 | /chatgpt-vs-claude |
| 16 | formation claude ia | 210 | 18 | 41 | /formation-claude-ia |
| 17 | chat gpt vs claude | 170 | 21 | 31 | /chatgpt-vs-claude |
| 18 | claude ou chat gpt | 170 | 19 | 53 | /chatgpt-vs-claude |
| 19 | formation claude nantes | 170 | 5 | 54 | /formation-claude-ia |
| 20 | formation claude rennes | 140 | 1 | 7 | /formation-claude-ia |
| 21 | formation claude anthropic | 140 | 22 | 8 | /formation-claude-ia |
| 22 | formation anthropic | 140 | 14 | 9 | /formation-claude-ia |
| 23 | anthropic academy claude | 140 | 29 | 24 | /formation-claude-ia |
| 24 | claude vs chat gpt | 140 | 18 | 29 | /chatgpt-vs-claude |
| 25 | mistral vs claude | 140 | 18 | 32 | /blog/chatgpt-copilot-gemini-claude-mistral-lequel-choisir |
| 26 | chat gpt claude | 140 | 23 | 57 | /chatgpt-vs-claude |
| 27 | claude ai ou chat gpt | 110 | 19 | 14 | /chatgpt-vs-claude |
| 28 | claude code formation | 110 | 10 | 16 | /formation-claude-ia |
| 29 | certification claude code | 110 | 31 | 25 | /formation-claude-ia |
| 30 | claude 2 vs gpt 4 | 110 | 15 | 28 | /chatgpt-vs-claude |

Hors top 30 mais utiles pour une offre B2B : claude for finance (70, KD 8, pos. 9, page finance), claude education (110, KD 29, pos. 56, page pédagogique), entreprise claude (90, KD 18, pos. 34, hub), claude code france (70, KD 39, pos. 57, hub), claude ai academy (50, KD 43, pos. 22, hub).

---

## 4. SERP des 6 requêtes cibles

**Non collecté.** Le rapport `phrase_organic` (top 10 d'une requête) a échoué dès le premier appel (« formation claude ») avec `API UNITS BALANCE IS ZERO`. L'archive S3 contient des SERP du 02/10, mais aucune sur une requête Claude. Pas de liste de concurrents récurrents possible sans inventer.

Positions connues de master-ia.fr sur ces 6 requêtes (S3, 02/10) :

| Requête | Position master-ia.fr | URL |
|---|---|---|
| formation claude | 19 | /formation-claude-ia |
| formation claude ai | 17 | /formation-claude-ia |
| formation claude code | 21 | /formation-claude-ia |
| chatgpt vs claude | 26 | /chatgpt-vs-claude |
| claude entreprise | absent du top 100 | |
| formation claude paris | absent du top 100 | |

---

## 5. Tendance et autorité du domaine

### 5a. Historique mensuel (S3, rapport historique relevé le 15 de chaque mois, archivé le 02/10)

| Mois | Mots-clés | Top 3 | Pos. 4-10 | Trafic estimé | Semrush Rank |
|---|---:|---:|---:|---:|---:|
| 2026-04 | 23 | 0 | 0 | 0 | 3 869 832 |
| 2026-05 | 24 | 0 | 1 | 3 | 2 729 957 |
| 2026-06 | 39 | 0 | 11 | 20 | 1 701 707 |
| 2026-07 | 163 | 5 | 34 | 254 | 579 989 |
| 2026-08 | 400 | 5 | 49 | 279 | 564 269 |
| 2026-09 | 570 | 7 | 60 | 228 | 639 726 |
| 02/10 (instantané) | 569 | 7 | 59 | 185 | 714 330 |
| **05/10 (instantané, S1)** | **565** | n.d. | n.d. | **161** | **769 215** |

Lecture : la couverture a été multipliée par 3,5 entre juillet et septembre, mais le trafic estimé baisse depuis août (279 → 228 → 185 → 161). L'historique propre aux pages Claude n'a pas pu être relevé.

### 5b. Autorité (S3, 02/10/2026)

| Indicateur | Valeur |
|---|---|
| Authority Score | 9 |
| Backlinks | 289 (follow 73, nofollow 216) |
| Domaines référents | 82 |

Le rapport `backlinks_overview` relancé le 05/10 a échoué (`no_api_units`).

---

## Limites

**Cause unique : solde d'unités API Semrush à zéro** le 05/10/2026. Message Semrush : *« The user has an active Semrush subscription, but does not have enough API units to complete this request. »* Page indiquée par Semrush pour ajouter des unités : https://www.semrush.com/mcp-access

Rapports en échec (une seule nouvelle tentative pour `resource_organic`, également en échec) :

| Rapport | Usage prévu | Erreur | trace_id |
|---|---|---|---|
| `resource_organic` (×2) | positions Claude du jour avec intention, SERP features, AI Overview par mot-clé | `ERROR 132 :: API UNITS BALANCE IS ZERO` | 7d292dfd39d471f63c19d3c7be462b0c, b858988a06744a348d7d2f3b38f0a73f |
| `phrase_these` | volumes, KD, CPC, intention des 24 mots-clés demandés | `ERROR 132` | d640fccf79b00059474bd43999ed05a2 |
| `resource_rank_history` | tendance 3 à 6 mois | `ERROR 132` | c4c233892875e7954871563e20cc4a7c |
| `phrase_organic` | SERP top 10 (6 requêtes) | `ERROR 132` | 37e5ab0a2c375c65f9cfeba9749fd730 |
| `backlinks_overview` | Authority Score, domaines référents | `no_api_units` | b81f70206f705f6ee79727f8f4aade20 |
| `domain_rank` sur 4 URL (/formation-claude-code, /chatgpt-vs-claude, article multi-outils, hub en relance) | totaux par page du jour | `no_api_units` | bd3c6db66c027edb552bc6e7accd159d, c32a0c1bded23929b06b52a95e88dcaf, 50fec9b7425a794c9dd292ce160e78db, 29d974d78878b627b90c41d8c3195bff |
| `get_report_schema` de `phrase_this` | | `no_api_units` | ba603a68e97092cb22f812ea728ae94c |

Non tentés faute d'unités : `phrase_related` et `phrase_questions` (section 3b), `phrase_organic` sur les 5 autres requêtes, `domain_rank` sur les 18 autres URL (remplacé par le rapport Pages du 02/10).

Autres réserves :
- Les sections 1c, 1d, 2, 3, 5 reposent sur le relevé Semrush du 02/10/2026 (S3), pas sur un relevé du jour. Les deux réponses du 05/10 le confirment pour le domaine et le hub.
- L'archive S3 n'a pas les colonnes intention ni SERP features par mot-clé ; l'AI Overview n'est connu qu'en agrégé (84 % du domaine, 19/27 pour le hub).
- Le rapport Pages compte 9 mots-clés pour l'article multi-outils, le rapport de positions n'en liste que 8 lignes (7 requêtes) : une ligne manque dans l'archive.
- Les volumes du rapport de positions peuvent différer de ceux du rapport mot-clé (écart déjà constaté le 02/10 sur d'autres requêtes).
- Trafic Semrush = estimation arrondie à l'unité par mot-clé ; la plupart des lignes valent 0.
