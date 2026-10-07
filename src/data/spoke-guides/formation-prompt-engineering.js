// Contenu propre à /formation-prompt-engineering (page propre, guide terrain). Rendu par SpokePage.
// Créé le 07/10/2026. Faits outils : fiche FAITS-OUTILS du 07/10/2026, toutes sections (modes de
// réflexion, fenêtres de contexte, compétences au format SKILL.md, fin des GPTs et des Gems, Skills de
// Vibe, entraînement par défaut selon l'offre) et src/data/claude-facts.js (vérifié le 05/10/2026).
// Cas cité : conseil-financier (data/etudes-de-cas.js). Aucun pourcentage de gain.
export default {
  slug: 'formation-prompt-engineering',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation prompt engineering : une méthode de demande valable pour tous les assistants IA",
  metaTitle: "Formation prompt engineering (prompt IA) | Masteria",
  metaDesc: "Formation prompt engineering d'une journée : méthode de demande valable dans tous les assistants, réponses vérifiables, bibliothèque rangée en compétences.",
  keywords: "formation prompt engineering, formation prompt ia, écrire un prompt, méthode de prompt en entreprise, bibliothèque de prompts, compétences skill.md",
  prerequis: "Avoir déjà utilisé un assistant IA, même de loin en loin, et disposer d'un compte professionnel sur l'outil retenu par l'entreprise",
  resume: "La formation prompt engineering donne à vos équipes une méthode pour rédiger leurs demandes à une IA et obtenir des réponses qu'elles peuvent vérifier, quel que soit l'assistant déployé : ChatGPT, Microsoft Copilot, Gemini, Claude ou Vibe de Mistral AI. En une journée de sept heures, menée chez vous ou en classe virtuelle, les participants (douze au plus, ou une personne seule) apprennent à structurer une demande, à exiger des sources, à faire contrôler une réponse et à ranger leurs meilleures demandes dans une bibliothèque d'équipe au format des compétences. La journée se facture 1 980 € HT ; Masteria étant certifié Qualiopi au titre de ses actions de formation, une demande de financement peut être transmise à votre OPCO, qui l'apprécie selon ses règles.",
  enBref: [
    { label: 'Formation', value: "Méthode de demande commune à tous les assistants, fiabilisation des réponses et bibliothèque d'équipe en compétences" },
    { label: 'Durée', value: "Une journée de sept heures, en quatre ateliers d'une heure quarante-cinq" },
    { label: 'Formats', value: "Sur votre site ou à distance ; jusqu'à douze stagiaires, ou un seul suivi individuellement" },
    { label: 'Tarif', value: "1 980 € HT la journée, montant identique quel que soit l'effectif du groupe" },
    { label: 'Financement', value: "Masteria détient la certification Qualiopi : votre OPCO peut être saisi et décide selon ses règles" },
    { label: 'Prérequis', value: "Un premier usage d'un assistant IA et un compte d'entreprise sur l'outil de l'équipe" },
  ],
  intro: "Dans la plupart des équipes, l'assistant IA donne des résultats inégaux : excellents un jour, génériques le lendemain, faux sur un chiffre la semaine suivante. L'écart tient rarement à l'outil. Il tient à la demande, qui oublie de dire à quoi servira la réponse, sur quelles pièces s'appuyer et comment on la vérifiera. Le prompt engineering désigne cette compétence : rédiger une demande qui se suffit à elle-même, puis la transformer en procédure que tout le service réutilise. Cette journée l'enseigne sur les outils de votre entreprise, avec les modes de réflexion, les fenêtres de lecture et les formats de compétences relevés le 7 octobre 2026.",
  guide: {
    kicker: "Guide terrain",
    h2: "Une bonne demande se reconnaît à ce qu'on peut vérifier sa réponse, quel que soit l'assistant",
    lead: "Un assistant IA ne devine rien de votre entreprise : ni le lecteur de la note, ni la règle interne qui interdit une formule, ni le fichier où se trouve le bon chiffre. Tout ce qu'il ne reçoit pas, il le comble avec la suite la plus probable, et cette suite sonne juste même quand elle est fausse. La méthode enseignée tient en une idée : chaque demande fournit ce que le modèle ne peut pas savoir et précise comment la réponse sera contrôlée. Elle s'applique à tous les grands assistants du marché, et seules quelques habitudes changent de l'un à l'autre.",
    sections: [
      {
        h3: "Un modèle prolonge le texte qu'il reçoit, donc la demande doit tout lui apporter",
        paras: [
          "Un modèle de langage produit sa réponse mot après mot, en choisissant à chaque pas la suite la plus plausible au vu de ce qu'il a lu. Une demande courte laisse donc une grande place à l'improvisation. La méthode de la formation impose six éléments : l'objectif (à quoi servira la réponse, pour qui), le contexte (l'entreprise, la situation, ce qui a déjà été tenté), les sources (les pièces jointes ou désignées, seules autorisées), la consigne (le travail attendu, en verbes précis), le format (longueur, structure, ton) et le contrôle (ce que le modèle doit signaler quand il ne sait pas, comment le résultat sera vérifié).",
          "Un septième geste fait souvent la plus grande différence de qualité : inviter l'assistant à interroger son utilisateur avant de rédiger. Il expose alors ses hypothèses, et l'utilisateur corrige un malentendu avant qu'il ne se retrouve dans deux pages de texte. Les exemples complètent l'ensemble : une bonne réponse passée, et parfois un contre-exemple, en disent plus long sur le ton attendu qu'un paragraphe d'adjectifs.",
        ],
      },
      {
        h3: "Le mode de réflexion choisi change la manière d'écrire la demande",
        paras: [
          "Les assistants proposent désormais deux régimes. Au 7 octobre 2026, les offres payantes de ChatGPT règlent un curseur de réflexion sur le modèle GPT-5.6 Sol ; Microsoft Copilot propose Auto, Quick response et Think deeper (intitulés de sa documentation) ; Gemini offre trois modes, Pro, Raisonnement et Rapide ; Vibe, l'assistant de Mistral AI, bascule entre Fast et Think depuis le 22 septembre ; Claude laisse choisir entre Opus 5.5, son modèle par défaut, et Sonnet 5.5, plus rapide.",
          "La méthode en tire une règle pratique. En mode de réflexion, on décrit le but, les contraintes et les critères de réussite, puis on laisse le modèle organiser son travail. En mode rapide, mieux vaut découper soi-même la tâche en étapes courtes et enchaîner les demandes. Copilot permet depuis le 6 octobre 2026, dans sa version web, de relancer une réponse en changeant de modèle : un moyen simple de comparer deux sorties sur la même demande.",
          "La quantité de texte lisible d'un coup varie aussi. ChatGPT Business lit 256 000 tokens d'un coup quand il raisonne, 54 000 quand il répond tout de suite (un token correspond à un morceau de mot) ; les offres payantes de Claude, et Gemini dès l'édition Business Standard, montent à un million ; Gemini en Business Starter s'arrête à 32 000. Microsoft et Mistral ne publient pas de plafond. Un dossier trop long se découpe, et chaque affirmation tirée d'un long document doit citer sa page.",
        ],
      },
      {
        h3: "Une réponse se fiabilise par ses sources, par le calcul et par une seconde lecture",
        paras: [
          "La première protection consiste à ancrer la réponse dans vos pièces. Chaque assistant offre un espace pour cela : carnet Gemini Notebook, blocs-notes de Copilot, projets de ChatGPT et de Claude, bibliothèques et Knowledge Base de Vibe. La demande précise alors que seules ces sources comptent et qu'une information introuvable s'écrit « non trouvé dans les documents », au lieu d'être complétée.",
          "La deuxième concerne les chiffres. Un modèle qui calcule dans une phrase peut se tromper sans hésiter. Demandez que tout calcul passe par l'exécution de code, disponible dans ChatGPT et Claude, ou par une formule posée dans le tableur, avec un total de contrôle à comparer au fichier d'origine.",
          "La troisième est une seconde passe : une demande distincte qui relit la réponse contre les sources et liste chaque affirmation sans appui. Ce contrôle automatique repère beaucoup d'erreurs, et la relecture humaine reste la dernière étape avant toute diffusion. Reste la question des données : sur ChatGPT Free, Go, Plus et Pro, l'entraînement sur les échanges fonctionne jusqu'à ce que l'utilisateur le désactive ; Vibe Team l'active d'office, et seul l'administrateur peut l'éteindre pour toute l'organisation. Une demande bien écrite sur un compte mal réglé expose quand même vos documents.",
        ],
      },
      {
        h3: "La bibliothèque de prompts de l'équipe se range désormais en compétences",
        paras: [
          "Pendant deux ans, les équipes ont rangé leurs meilleures demandes dans des documents partagés ou dans des assistants configurés : GPTs chez OpenAI, Gems chez Google, agents chez Mistral. Ces objets arrivent en fin de vie. Chez OpenAI, la date de retrait des GPTs est fixée au 11 décembre 2026 pour toutes les offres, et repoussée au 11 février 2027 dans les espaces Enterprise ayant obtenu un délai ; un GPT migré devient un plugin, et ses instructions deviennent une compétence. Google fait de même avec les Gems, remplacés par des compétences à partir du 5 octobre 2026 ; Mistral, lui, a remplacé les agents de Vibe par ses Skills le 22 septembre.",
          "Le format qui s'impose range chaque procédure dans un dossier dont le fichier SKILL.md réunit un intitulé, une phrase indiquant dans quels cas l'utiliser, les instructions et des exemples. Anthropic l'a publié comme standard ouvert le 18 décembre 2025 ; OpenAI, Google, Microsoft (jusqu'à 50 compétences personnalisées dans Copilot Cowork) et Mistral l'ont repris. Une demande qui a fait ses preuves s'écrit donc une fois et voyage d'un assistant à l'autre. La journée se termine sur cette conversion : vos trois meilleures demandes deviennent des compétences testées, nommées et confiées à un responsable.",
        ],
      },
    ],
    table: {
      caption: "Six demandes telles qu'on les écrit, ce que l'assistant en fait et la correction enseignée",
      headers: ["Demande spontanée", "Ce que l'assistant produit", "Correction de la méthode"],
      rows: [
        ["« Résume ce document »", "Un résumé générique, de longueur aléatoire", "Lecteur, usage du résumé, longueur, points à conserver"],
        ["« Écris un mail au client »", "Des faits inventés pour combler les trous", "Faits fournis, ton, engagements à ne pas prendre"],
        ["« Analyse ces chiffres »", "Des calculs faits dans la phrase, parfois faux", "Calcul par l'exécution de code ou dans le tableur, total de contrôle"],
        ["« Trouve-moi des sources »", "Des références plausibles, parfois inexistantes", "Sources fournies ou recherche web active, liens ouverts un par un"],
        ["« Améliore ce texte »", "Une réécriture complète qui efface votre style", "Ce qui doit rester, ce qui change, modifications signalées"],
        ["« Réponds comme un expert »", "Un ton assuré, sans gain de justesse", "Critères de qualité écrits et exemple de bonne réponse"],
      ],
    },
    cas: {
      h3: "Cas pratique : une réponse aux réclamations transformée en compétence d'équipe",
      contexte: "Prenons une chargée de relation clients dans une PME agroalimentaire qui livre la grande distribution. Chaque semaine, elle répond à une dizaine de réclamations de centrales d'achat : retards, ruptures, écarts de facturation. Elle utilisait jusqu'ici une demande d'une ligne, « Rédige une réponse à cette réclamation », et passait ensuite vingt minutes à corriger chaque texte. La situation, inventée pour l'exercice, ressemble à celles que vivent beaucoup de PME.",
      etapes: [
        "Elle soumet sa demande d'une ligne et une réclamation récente à deux assistants autorisés dans l'entreprise, puis note les défauts communs : faits inventés, excuses excessives, promesse de geste commercial.",
        "Elle réécrit la demande avec les six éléments de la méthode, en joignant la réclamation, l'extrait du suivi de livraison et la politique commerciale de l'entreprise.",
        "Elle ajoute la consigne de poser les questions manquantes avant d'écrire, puis teste la demande sur trois réclamations passées dont elle connaît la bonne réponse.",
        "Elle demande une seconde passe qui compare la réponse au suivi de livraison et signale toute affirmation sans appui.",
        "Elle transforme la demande stabilisée en compétence au format SKILL.md, la nomme, décrit quand l'utiliser et la confie à la responsable du service, qui la partage à l'équipe.",
      ],
      prompt: "Objectif : rédiger la réponse écrite à une réclamation d'une centrale d'achat de la grande distribution, que je relirai avant envoi.\n\nContexte : nous sommes une PME agroalimentaire qui livre des plateformes logistiques. Le lecteur est l'acheteur qui a signé la réclamation ; il attend des faits et une date.\n\nSources autorisées : la réclamation jointe, l'extrait du suivi de livraison joint et notre politique commerciale jointe. Rien d'autre ne doit servir.\n\nConsigne :\n1. Si des informations te manquent, interroge-moi d'abord ; n'écris rien avant mes réponses.\n2. Écris une réponse de 150 mots maximum : reconnaissance du problème en une phrase, faits tirés du suivi de livraison, action engagée avec une date, interlocuteur à contacter.\n3. Ne propose aucun avoir ni geste commercial absent de la politique commerciale.\n\nFormat : vouvoiement, phrases courtes, aucune formule d'excuse au-delà d'une seule phrase.\n\nContrôle : après la réponse, liste chaque fait cité avec la source et la ligne d'où il vient. Si une information nécessaire ne figure dans aucune source, écris : non trouvé dans les documents.",
      resultat: "La réponse obtenue tient en un paragraphe factuel, et la liste qui la suit permet de vérifier chaque date et chaque quantité en quelques secondes. Les questions préalables font apparaître les cas que la politique commerciale ne couvre pas, qui remontent alors à la responsable. Convertie en compétence, la demande sert à toute l'équipe et se recopie dans un autre assistant si l'entreprise change d'outil. Restent deux règles : la réponse part après relecture humaine, et la réclamation ne contient aucune donnée personnelle superflue.",
    },
    pieges: [
      { titre: "Le prompt tout fait trouvé en ligne", texte: "Une demande copiée d'un site de « meilleurs prompts » ignore votre lecteur, vos sources et vos interdits ; elle produit un texte poli et creux. Gardez la structure si elle vous plaît, puis remplacez chaque élément générique par une information propre à votre situation et à vos documents." },
      { titre: "Un chiffre affirmé sans avoir été calculé", texte: "Face à une question brève, l'assistant cite un pourcentage ou un total sans exécuter le moindre calcul, sans indiquer sa provenance. Exigez que tout chiffre renvoie à une formule, à un script ou à une ligne de la source, puis recalculez un total vous-même avant tout usage." },
      { titre: "Le bon prompt sur le mauvais compte", texte: "Une demande parfaite collée dans un compte personnel peut nourrir l'entraînement d'un modèle : sur ChatGPT Free, Go, Plus ou Pro, l'option reste active tant que l'utilisateur ne la coupe pas. Travaillez sur le compte d'entreprise, vérifiez ses réglages, et laissez hors de l'outil ce que votre charte interdit." },
      { titre: "Une bibliothèque bâtie sur des GPTs ou des Gems", texte: "Une équipe qui a tout rangé dans des GPTs les perdra à la mi-décembre 2026, et les Gems s'éteindront sur les comptes d'entreprise, pas avant mars 2027. Réécrivez dès maintenant les plus utiles en compétences au format SKILL.md, que les principaux assistants savent lire." },
    ],
  },
  audience: [
    { title: "Équipes qui utilisent déjà un assistant IA", desc: "Vos collaborateurs se servent de ChatGPT, Copilot ou Gemini, avec des résultats inégaux et beaucoup de reprises. La journée transforme ces usages intuitifs en méthode commune, applicable sur l'outil de l'entreprise." },
    { title: "Référents IA et formateurs internes", desc: "Vous diffusez les bons usages dans l'entreprise. Vous repartez avec une grille de rédaction, des demandes modèles converties en compétences et de quoi animer vos propres ateliers." },
    { title: "Métiers où l'erreur coûte cher : juridique, finance, RH, qualité", desc: "Vos livrables engagent l'entreprise. Vous apprenez à ancrer chaque réponse dans vos pièces, à faire calculer les chiffres plutôt qu'à les laisser rédiger, et à faire contrôler le résultat avant de le signer." },
  ],
  useCases: [
    { icon: '🧱', title: "Demandes structurées en six éléments", desc: "Objectif, contexte, sources, consigne, format et contrôle : une structure qui s'applique à tous les assistants de l'entreprise." },
    { icon: '❓', title: "Questions posées avant la réponse", desc: "L'assistant expose ses hypothèses et demande ce qui manque, avant d'écrire deux pages sur un malentendu." },
    { icon: '🎯', title: "Réponses ancrées dans vos pièces", desc: "Carnets, projets et bibliothèques limitent l'assistant à vos documents, avec la mention « non trouvé » quand l'information manque." },
    { icon: '🧮', title: "Chiffres calculés, jamais rédigés", desc: "Exécution de code ou formule de tableur pour chaque montant, avec un total de contrôle confronté au fichier d'origine." },
    { icon: '📚', title: "Bibliothèque d'équipe en compétences", desc: "Les demandes qui ont fait leurs preuves sont converties en compétences SKILL.md, nommées, testées et transposables d'un assistant à l'autre." },
    { icon: '⚖️', title: "Même demande, plusieurs assistants", desc: "La demande envoyée à deux outils autorisés, les sorties comparées, les réglages propres à chacun repérés." },
  ],
  modules: [
    { day: 1, title: "Module 1 · Comprendre ce que lit l'assistant et structurer sa demande", duration: '1h45', description: "Chacun comprend pourquoi une demande réussit ou échoue, puis adopte la structure commune.", items: ["Prédiction mot après mot, fenêtre de lecture, place laissée à l'improvisation", "Les six éléments d'une demande : objectif, contexte, sources, consigne, format, contrôle", "Questions demandées avant la réponse, exemples et contre-exemples", "Modes de réflexion au 7 octobre 2026 et manière d'écrire pour chacun"], exercise: "Vous réécrivez une demande vague de votre semaine avec les six éléments, puis comparez les deux réponses obtenues." },
    { day: 1, title: "Module 2 · Fiabiliser la réponse par les sources, le calcul et la relecture", duration: '1h45', description: "La réponse devient vérifiable avant d'être utilisable.", items: ["Carnets, projets et bibliothèques : limiter l'assistant à vos pièces", "Mention « non trouvé dans les documents » à la place d'une information inventée", "Chiffres produits par l'exécution de code ou le tableur, total de contrôle", "Seconde passe qui liste les affirmations sans appui"], exercise: "Vous construisez une demande d'analyse ancrée sur un document de votre service, avec format imposé et seconde passe de contrôle." },
    { day: 1, title: "Module 3 · Faire d'une demande réussie une compétence partagée", duration: '1h45', description: "La performance d'une personne devient une procédure que toute l'équipe réutilise.", items: ["Instructions personnalisées et consignes de projet : ce qui vaut pour chaque demande", "Fichier SKILL.md : nom, description de déclenchement, consignes, exemples", "Fin des GPTs le 11 décembre 2026, Gems inutilisables en entreprise au plus tôt en mars 2027, agents de Vibe déjà remplacés le 22 septembre", "Une même compétence essayée dans deux assistants, écarts notés"], exercise: "Vous convertissez vos trois meilleures demandes en compétences, testées chacune sur trois cas différents." },
    { day: 1, title: "Module 4 · Travailler sur ses propres tâches et poser les règles", duration: '1h45', description: "La méthode s'applique aux dossiers de chacun, dans un cadre que l'équipe se donne.", items: ["Deux tâches de son poste traitées avec la méthode complète", "Données : ce qui entre dans l'outil, ce qui reste dehors, compte d'entreprise et réglage de l'entraînement", "Charte d'usage, relecture humaine, formation tracée comme l'attend l'AI Act", "Plan à 30 jours : compétences publiées, responsable nommé, point d'étape daté"], exercise: "Chaque participant repart avec ses demandes et ses compétences testées, et un plan personnel pour les trente jours suivants." },
  ],
  objectives: [
    "Le participant rédige une demande qui réunit objectif, contexte, sources, consigne, format et contrôle, sur l'assistant de son entreprise.",
    "Le participant obtient de l'assistant les questions manquantes avant la rédaction et corrige ses hypothèses.",
    "Le participant limite une réponse à des sources désignées et fait signaler toute information introuvable.",
    "Le participant fait produire les chiffres par un calcul vérifiable et contrôle un total à la main.",
    "Le participant convertit une demande éprouvée en compétence au format SKILL.md et la teste sur trois cas.",
    "Le participant distingue les données admises dans l'outil de celles que la charte de l'entreprise exclut.",
  ],
  faq: [
    { q: "La formation dépend-elle d'un outil en particulier ?", a: "Non. La méthode vaut pour les cinq grands assistants : ChatGPT, Gemini, Claude, Microsoft Copilot et Vibe de Mistral AI. Les ateliers se déroulent sur l'outil que votre entreprise a déployé, et les différences utiles sont traitées en séance : modes de réflexion, taille des documents lisibles, espaces où ranger ses sources, format des compétences. Si l'équipe utilise deux assistants, chaque demande se teste dans les deux pour repérer ce qui change." },
    { q: "Quel niveau faut-il pour suivre la journée ?", a: "Avoir déjà utilisé un assistant IA, même de temps en temps, suffit. La journée ne demande aucune compétence technique : rédiger une bonne demande relève de la méthode et de la précision. Les participants très avancés y trouvent aussi leur compte avec la seconde passe de contrôle, les compétences au format SKILL.md et la comparaison entre assistants, qui sont rarement pratiquées de façon systématique." },
    { q: "Quelle différence avec une formation ChatGPT, Copilot ou Gemini ?", a: "Une formation consacrée à un outil couvre ses fonctions, ses réglages et ses intégrations, appliqués à un métier. Celle-ci approfondit la compétence qui conditionne la qualité des résultats dans tous les outils : la façon de demander, de faire vérifier et de capitaliser. Les deux se complètent. Beaucoup d'entreprises forment d'abord leurs équipes à l'outil retenu, puis leurs référents à la méthode, pour qu'ils l'enseignent à leur tour." },
    { q: "La méthode sert-elle encore avec les modèles qui raisonnent ?", a: "Oui, et elle change de forme. Un modèle en mode de réflexion comprend mieux une demande floue, mais il ignore toujours votre lecteur, vos sources et vos interdits. Avec ces modes, on décrit le but, les contraintes et les critères de réussite plutôt que chaque étape ; en mode rapide, on découpe soi-même la tâche. Dans les deux cas, exiger des sources et une seconde passe de contrôle reste la meilleure protection contre une réponse assurée et fausse." },
    { q: "Formation prompt IA et formation prompt engineering : est-ce la même chose ?", a: "Oui. « Prompt engineering » est le terme d'origine anglaise, « formation prompt IA » l'expression courante en français ; certains parlent aussi d'art du prompt ou de rédaction de requêtes. Dans tous les cas, il s'agit d'apprendre à formuler une demande à un assistant pour obtenir une réponse exploitable et vérifiable. Le programme va de la structure d'une demande jusqu'à la bibliothèque partagée de l'équipe, rangée en compétences." },
    { q: "Que deviennent nos GPTs et nos Gems déjà construits ?", a: "Ils arrivent en fin de vie. Les GPTs disparaîtront de toutes les offres d'OpenAI le 11 décembre 2026 ; seuls les espaces Enterprise bénéficiant d'un report les gardent jusqu'au 11 février 2027. Un GPT migré devient un plugin dont les instructions forment une compétence. Chez Google, les compétences succèdent aux Gems ; leur déploiement a commencé le 5 octobre. La journée vous fait réécrire vos assistants les plus utiles au format SKILL.md, lisible par plusieurs outils." },
    { q: "Comment éviter qu'une demande expose des données sensibles ?", a: "En réglant le compte avant d'écrire la demande. Les offres d'entreprise de ChatGPT, Claude, Copilot et Gemini excluent l'entraînement par défaut ; ChatGPT Free, Go, Plus et Pro le laissent actif tant que l'utilisateur ne le désactive pas, et Vibe Team le garde allumé jusqu'à ce que l'administrateur l'éteigne. Le quatrième atelier fait trier les documents de chacun entre les pièces admises dans l'assistant et celles qui n'y entreront jamais, puis inscrit ce tri dans la charte de l'équipe." },
    { q: "Combien coûte la journée, et peut-elle être financée ?", a: "Comptez 1 980 € HT pour la journée, avec douze stagiaires comme avec un seul. Votre OPCO de branche peut être saisi, la certification Qualiopi de Masteria le permettant ; il chiffre sa participation à partir de ses propres critères et des fonds qu'il a encore, au vu du programme détaillé et de la convention rédigés par nos soins. Pour les entreprises de Suisse ou de Belgique, hors du système des OPCO, le chiffrage se fait en euros HT. Pour une première sensibilisation plus courte, le Sprint IA de trois heures existe aussi." },
  ],
  tarifs: {
    titre: "Ce que couvre le prix de la journée de prompt engineering",
    paras: [
      "Le prix comprend un échange de préparation : nous recueillons auprès des participants deux ou trois tâches qu'ils confient déjà à l'IA, ou voudraient lui confier, et nous vérifions l'outil et les comptes utilisés. Les ateliers partent de ces tâches. Les supports, la grille de rédaction, le modèle de compétence au format SKILL.md et le gabarit de charte travaillé au quatrième atelier sont compris dans ce prix.",
      "Prenons une entreprise qui réunit douze référents IA venus de six services. Leur journée intra revient à 1 980 € HT en tout, soit 165 € HT pour chacun d'eux. Une directrice juridique qui préfère travailler seule sur ses propres dossiers paie le même montant pour sa journée. Votre OPCO de branche peut enfin recevoir une demande, Masteria étant certifié Qualiopi ; il l'examine selon ses règles, avec un dossier que nous montons ensemble.",
    ],
  },
  apres: {
    titre: "Après la journée, des assistants construits sur vos procédures",
    texte: "Une bibliothèque de compétences bien tenue mène souvent à l'étape suivante : un assistant qui applique vos procédures à vos documents, relié à vos logiciels par des connecteurs, avec des droits par service. Masteria peut cadrer ce projet avec vous, construire l'assistant sur les compétences écrites pendant la formation et former les personnes qui le feront évoluer. Contrairement à la journée de formation, ce chantier n'est pas finançable par votre OPCO ; Masteria l'établit au forfait, au terme d'un cadrage.",
  },
  cta: {
    milieu: "Envoyez-nous trois tâches que vos équipes confient déjà à l'IA : la journée se construit sur elles.",
    fin: {
      titre: "Construisons la journée sur les demandes de vos équipes",
      texte: "Indiquez-nous l'assistant déployé chez vous, le nombre de participants et trois tâches qu'ils aimeraient mieux réussir avec l'IA. Nous vous proposons un programme bâti sur ces tâches et des dates de session.",
    },
  },
  terrain: {
    titre: "Sur le terrain : des demandes écrites avec les consultants, et un assistant qui questionne avant d'écrire",
    texte: "Un cabinet indépendant qui conseille le secteur public sur ses montages financiers a fait construire par Masteria quatre assistants, répartis selon les grandes familles de marchés publics qu'il traite. Leurs consignes sont nées en atelier : quatre séances de deux heures où les consultants ont rédigé et éprouvé les prompts sur des consultations récentes. Chaque assistant commence par questionner le consultant (ce client a-t-il déjà travaillé avec le cabinet, qu'attend-il en priorité, quelles références et quelle équipe mettre en avant) avant d'écrire une ligne. Une journée de formation a ensuite appris aux consultants, à Paris et à Lyon, à rédiger et faire évoluer ces prompts eux-mêmes.",
    lien: '/etudes-de-cas-ia#conseil-financier',
  },
  liensAssocies: [
    { label: "Comparer cinq assistants sur vos dossiers : la formation multi-outils", href: '/formation-multi-outils' },
    { label: "La bibliothèque de prompts de Masteria, classée par métier", href: '/bibliotheque-de-prompts' },
    { label: "Guide du prompt engineering en entreprise", href: '/blog/prompt-engineering-guide-entreprise' },
    { label: "Le Sprint IA, un format court de trois heures", href: '/formation-sprint-ia' },
    { label: "Vibe coding : décrire une application à l'IA", href: '/formation-vibe-coding' },
  ],
  sources: [
    { name: "OpenAI, retrait des GPTs personnalisés et migration vers les plugins (FAQ)", url: "https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq" },
    { name: "Aide OpenAI sur les modèles de ChatGPT et la taille de leur contexte", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
    { name: "Microsoft Learn, présentation de Microsoft Copilot et choix du modèle", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
    { name: "Microsoft Learn, notes de version de Copilot (6 octobre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes" },
    { name: "Microsoft Learn, compétences personnalisées dans Copilot Cowork", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
    { name: "Aide Gemini, modes de l'application pour les comptes professionnels", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
    { name: "Workspace Updates, compétences Gemini et fin des Gems", url: "https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html" },
    { name: "Mistral AI, notes de version du 22 septembre 2026 (Skills, Fast et Think)", url: "https://docs.mistral.ai/resources/release-notes" },
    { name: "Mistral AI, réglage de l'entraînement sur les données des utilisateurs", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
    { name: "Anthropic, taille du contexte sur les offres payantes de Claude", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
    { name: "EUR-Lex : l'AI Act, règlement européen sur l'intelligence artificielle", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
}
