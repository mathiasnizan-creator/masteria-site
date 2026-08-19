# Brief : programme approfondi d'une page « Formation IA <métier> » (master-ia.fr)

> Brief utilisé le 2026-08-19 pour rédiger les programmes des 19 pages métier (`src/data/metiers/<slug>.js`, clé `programme`). À réutiliser pour un nouveau métier ou une refonte ; **revérifier la fiche de faits produit avant réemploi** (elle date d'août 2026, l'écosystème bouge vite).

Tu rédiges, en français, le **programme détaillé** d'une formation IA générative pour un métier donné, destiné à une page web commerciale de Masteria (organisme de formation IA, certifié Qualiopi, fondateur Mathias Nizan, Lyon). Le programme actuel (fichier `ctx_<metier>.json`, clé `programme`) est trop court : 4 puces d'une ligne par demi-journée. Mathias demande de **l'approfondir, le détailler davantage, et d'aller jusqu'aux fonctionnalités avancées des outils** (Projets, compétences/Skills, GPTs et agents, tâches planifiées, recherche approfondie, analyse de données, etc.), toujours appliquées au métier.

## Ce que tu dois produire

Un fichier JSON **valide** `prog_<metier>.json` (chemin donné dans ta mission) avec exactement cette forme :

```json
{
  "programmeHead": {
    "h2": "Programme de la formation IA <métier> sur 2 jours",
    "answer": "Résumé citable du programme en 3-4 phrases (Jour 1 : … Jour 2 : …), 70-110 mots, qui nomme les ateliers métier ET les fonctionnalités avancées couvertes.",
    "foot": "1-3 phrases : comment le programme s'ajuste au cadrage (quel profil approfondit quoi ; la version 1 jour garde quoi) + la clause de réalité ci-dessous."
  },
  "programme": [
    {
      "jour": "Jour 1",
      "titre": "Titre du jour (5-9 mots)",
      "matin": [ { "t": "Titre court (3-8 mots)", "d": "Détail concret en 1-2 phrases, 28-50 mots." }, … ],
      "apresmidi": [ { "t": "…", "d": "…" }, … ]
    },
    { "jour": "Jour 2", "titre": "…", "matin": [ … ], "apresmidi": [ … ] }
  ]
}
```

- **Formations sur 2 jours** (cas général) : **5 items par demi-journée** (5 matin + 5 après-midi, ×2 jours = 20 items).
- **Formations sur 1 jour** (qse, sante, transverse : voir la durée dans `enBref` du contexte) : **un seul objet jour**, `"jour": "Journée"` ou `"Jour 1"` comme dans le contexte actuel, **6 items par demi-journée**, les fonctionnalités avancées condensées dans l'après-midi.
- Garde le nombre de jours actuel du contexte. Ne change pas la durée.
- `t` = titre court sans point final ; `d` = 1 à 2 phrases complètes, terminées par un point.

## Trame de référence (adapte-la au métier, ne la recopie pas mot pour mot)

**Jour 1 matin** : (1) ce que les modèles font et ne font pas dans CE métier (capacités réelles, limites, ce qui engage) ; (2) panorama des outils et de leurs versions entreprise, lequel pour quoi dans ce métier, où vont les données ; (3) la méthode de la demande efficace appliquée à un livrable du métier (contexte, rôle, format, exemples, itération, relecture) ; (4) personnaliser son compte : instructions personnalisées, mémoire, ton et gabarits du métier encodés ; (5) un premier atelier sur un document réel.
**Jour 1 après-midi** : 3 ateliers métier sur les vrais documents/processus (voir `missions` du contexte) ; (4) **Projets et espaces de travail** appliqués à un dossier du métier ; (5) le cadre et la relecture (données, confidentialité, ce qu'on ne délègue jamais, voir `cadre` du contexte).
**Jour 2 matin** : ateliers avancés du métier : analyse de données / tableaux, documents longs, **recherche approfondie** (Deep Research), co-édition (Canvas, Artifacts, Copilot Pages), Copilot dans Excel/Outlook/Teams ou Gemini dans Sheets/Gmail selon le métier, etc.
**Jour 2 après-midi** : (1) **Compétences (Skills)** : transformer une procédure du métier en compétence réutilisable ; (2) **Assistants et agents** : GPTs existants, agents d'espace de travail, Agent Builder vs Copilot Studio, Gems et Workspace Studio, Workflows Vibe : quand un assistant configuré suffit, quand il faut un agent, ce qui reste un projet d'intégration ; (3) **tâches planifiées et automatisations légères** (veille, rapports récurrents, rappels) ; (4) **gouvernance et mesure** (propriétaire nommé, partage, revue trimestrielle, registre des assistants et compétences, droits admin, indicateurs suivis) ; (5) plan d'action (les trois usages à installer dans le mois, qui les porte, comment on mesure), évaluation des acquis, remise des livrables (bibliothèque de prompts, gabarits, compétences, cadre d'usage).

Chaque item doit dire **ce qu'on fait concrètement, sur quoi (document, processus, donnée du métier), avec quel outil ou quelle fonction**. Exemple de bon item (finance) :
`{ "t": "Atelier écarts budget/réel", "d": "À partir d'un export propre de votre outil, formuler les causes d'un écart, proposer les actions et rédiger le commentaire dans votre gabarit ; Copilot dans Excel ou l'analyse de données de ChatGPT et Claude lisent le fichier, vous gardez la lecture et les chiffres." }`

## Fiche de faits produit (vérifiés août 2026) : n'affirme RIEN au-delà

**Général.** Multi-outils : ChatGPT (Business, ex-Team), Microsoft 365 Copilot, Claude (Team/Enterprise), Gemini (dans Workspace + app), Mistral **Vibe** (écrire « Vibe (anciennement Le Chat) » à la première occurrence, jamais « Le Chat » seul). Les offres entreprise n'entraînent pas les modèles sur les données ; versions gratuites à proscrire pour toute donnée sensible.

**ChatGPT Business.** Instructions personnalisées, mémoire. **Projets partagés** (instructions communes, fichiers de référence, mémoire propre au projet, droits lecture/écriture) = le socle d'équipe. **GPTs personnalisés** : existent, utiles pour l'existant, mais OpenAI fait converger vers les agents d'espace de travail → on traite les GPTs existants et on construit le neuf en projet partagé, compétence ou agent ; ne jamais les présenter comme brique pérenne. **Compétences (Skills)** sur Business : se créent en langage naturel dans la conversation, se déclenchent automatiquement quand elles sont pertinentes ; le partage à l'échelle de l'espace est à vérifier au cadrage. **Agents d'espace de travail** : créables par des non-techniciens en langage naturel (rôle, déclencheur, étapes, règles), testés avant publication, partagés, planifiables ; leurs exécutions sont décomptées en crédits d'espace de travail (à budgéter) ; droits parcourir/exécuter/construire/publier définis par l'admin. **Tâches planifiées** : créées en une phrase, au plus une exécution par heure, nombre de tâches actives plafonné. **Deep Research**, Canvas (co-édition), mode agent, analyse de données (Python), « apps » et « connaissances d'entreprise » (dire « apps », pas « connecteurs » pour ChatGPT). À ne JAMAIS citer : Operator (mort), Agent Builder/AgentKit (plateforme développeur, hors siège), « Skills, nouveauté OpenAI » (le format Agent Skills a été créé par Anthropic en octobre 2025, publié en standard ouvert, repris par une quarantaine d'outils dont ChatGPT).

**Claude (Anthropic).** Instructions personnalisées, mémoire, styles, **Projets** (instructions + fichiers de connaissance), **Artifacts** (co-édition de documents, pages, visuels), recherche approfondie, connecteurs (MCP) vers les outils de l'entreprise, analyse de fichiers et création de fichiers (Excel, Word, PowerPoint), **compétences (Skills)** : un dossier avec un fichier SKILL.md (nom + description = déclencheur, s'active automatiquement quand la demande correspond) ; un membre crée et teste, l'owner de l'organisation provisionne et partage ; pas d'édition en ligne d'une compétence (on supprime et on ré-importe). **Cowork** (agent de bureau qui travaille dans vos fichiers) et **Claude Code** (développeurs) existent ; ne les citer que pour les métiers informatique/données.

**Microsoft 365 Copilot.** Copilot dans Word, Excel, PowerPoint, Outlook, Teams (récapitulatif de réunion), Copilot Chat (périmètre données : OneDrive et SharePoint, jamais les lecteurs réseau ; aucun droit d'accès créé, attention à l'oversharing SharePoint), **Copilot Pages** (co-édition), **Notebooks** (dossier de sources), agents **Researcher** et **Analyst**, **Python dans Excel**, **Agent Builder** (assistant sans code sur des documents SharePoint, l'interface française dit « assistant ») vs **Copilot Studio** (agents avancés, connexions au SI, écriture dans un logiciel : un projet, pas un atelier). Power Automate pour les automatisations.

**Gemini (Google Workspace).** Gemini dans Gmail, Docs, Sheets, Slides, Meet (« Prendre des notes pour moi », une langue par réunion) + app Gemini ; **Gems** (assistants configurés : instructions + fichiers, partage) ; **NotebookLM** (corpus sourcé, 50 sources en gratuit, 100 sur le palier Plus inclus dans Business Standard) ; **Deep Research** ; **Workspace Studio** (agents et automatisations sans code à travers Gmail/Docs/Sheets/Drive ; ses « skills » sont des automatisations propriétaires, à distinguer du format ouvert) ; Google Vids. Limites Sheets : pas de mode agent, pas de Python natif, fenêtre de contexte bornée. Ne jamais présenter Agent Designer / Gemini Enterprise comme inclus dans Workspace. Les données sensibles ne passent jamais par Google AI Studio gratuit.

**Mistral Vibe.** Espaces Chat / Work / Code ; dans Work : **Projets**, **Bibliothèques** (documents), **Instructions**, **compétences (skills)**, **Connecteurs** (Google Workspace, Outlook, SharePoint, Slack), **Tâches planifiées**, **Workflows**, Canvas, mode Think ; hébergement européen, argument RGPD/souveraineté. Ne pas citer « Agents » ni « Deep Research » pour Vibe.

**Ce qu'on ne promet jamais.** Toute écriture automatique dans un logiciel métier (compta, paie, CRM, ERP, SIRH, ATS…) : les apps/connecteurs sont cadrés en lecture ; une écriture = projet d'intégration chiffré à part. Tout résultat chiffré produit par un agent reste relu par un humain. Aucune décision qui engage (sélection d'un candidat, évaluation, diagnostic, avis juridique, prix, sanction) n'est déléguée.

**Clause de réalité** à placer dans `programmeHead.foot` (reformulation libre mais sens identique) : « Fonctionnalités vérifiées en août 2026 ; si une fonction n'est pas activée sur vos licences le jour J, elle est montrée en démonstration puis transposée sur les projets partagés et les instructions personnalisées. »

## Règles d'écriture (non négociables)

- Voix Masteria : un expert qui explique, posé, concret, jamais vendeur ni hype. Phrases claires à la première lecture.
- **Aucun chiffre non sourcé** (pas de « 80 % de temps gagné », pas de « 3 fois plus vite »). Les seuls chiffres admis sont ceux de la fiche de faits et les durées (2 jours, 14 h, 1 jour, 7 h).
- **Interdits** : épanorthose (« non pas X mais Y », « ce n'est pas X, c'est Y ») ; tirets cadratins (—) au milieu des phrases ; « à la fois X et Y » ; antithèses « X sans Y » ; « qui fait toute la différence » ; hedging ; fillers (« en effet », « par ailleurs », « ainsi ») ; emojis ; « garanti » ; CPF ; Bpifrance ; « faible en calcul » (la limite de l'IA est la lecture des très gros tableaux et le contrôle de ce qui engage, pas le raisonnement) ; « Le Chat » seul ; « connecteurs » à propos de ChatGPT ; Operator ; Agent Builder d'OpenAI ; « Skills, nouveauté OpenAI ».
- Secteur public hospitalier : ANFH, jamais OPCO (métier sante si établissement public). Marchés publics : respecter le vocabulaire de la commande publique.
- Cohérence avec le contexte : les ateliers reprennent les `missions`, le `cadre`, les `profils` du fichier de contexte ; ne contredis pas l'`enBref` (durée, outils, méthode).
- Varie la structure des items (pas 20 titres construits à l'identique). Chaque `d` est différent, ancré dans un objet concret du métier (un document, un tableau, un processus, une situation).
- Pas de texte hors du JSON. Le JSON doit se charger avec `JSON.parse` sans erreur (échappe les guillemets doubles internes, pas de virgule finale).

## Contrôle avant de rendre

Relis chaque item : (1) concret ? (2) outil/fonction nommé correctement selon la fiche ? (3) aucune promesse hors fiche ? (4) aucun interdit de style ? (5) volume respecté (5+5 par jour sur 2 jours, ou 6+6 sur 1 jour) ? Puis valide le JSON.
