// Contenu propre à /formation-copilot-seo (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-copilot-seo',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Copilot SEO : exports Search Console dans Excel, citations dans Bing AI Performance, briefs Word, limites de l'outil. Qualiopi, finançable OPCO.",
  intro: "Copilot touche le référencement par deux côtés. Ses réponses web passent par Bing, et Bing publie depuis février 2026 les citations de votre site dans Copilot. Pour le travail SEO quotidien, il reste un outil bureautique : il n'ouvre ni Search Console, ni votre outil de mots-clés, ni vos logs. Cette formation part de ce constat et montre où il fait gagner du temps, sur vos exports, vos briefs et vos contenus.",
  guide: {
    kicker: "Guide terrain SEO",
    h2: "Copilot voit le web à travers Bing et vos données à travers Excel : le travail SEO passe par ces deux portes",
    lead: "Un référenceur qui travaille sous Microsoft 365 a deux raisons de s'intéresser à Copilot. La première concerne la visibilité : Copilot cite des pages web, et savoir lesquelles devient une question de trafic. La seconde est pratique : l'essentiel du métier passe par des exports en tableur et des documents de brief, deux terrains où Copilot agit dans le fichier. Le reste se vérifie dans vos outils SEO : volumes de recherche, positions, exploration du site.",
    sections: [
      {
        h3: "Copilot n'a aucun accès natif à vos données SEO",
        paras: [
          "Copilot ne se connecte ni à Search Console, ni à Google Analytics, ni aux outils de mots-clés. La liste des connecteurs fédérés publiée pour Excel en septembre 2026 cite HubSpot, Notion ou FactSet, et aucun outil SEO. Tout commence donc par un export.",
          "Search Console exporte au format Microsoft Excel, Google Sheets ou CSV. L'aide de Google précise que l'export est tronqué à 1 000 lignes représentatives, alors que les totaux du rapport comptent toutes les données. Au-delà, il faut passer par l'API ou l'export vers BigQuery, hors de Copilot.",
          "Copilot ne connaît pas les volumes de recherche. Si vous lui en demandez, il les estime à partir de pages web qui citent d'autres outils, souvent anciens. Traitez ces valeurs comme fausses jusqu'à preuve du contraire.",
        ],
      },
      {
        h3: "Bing Webmaster Tools montre quand Copilot cite vos pages",
        paras: [
          "Le rapport AI Performance de Bing Webmaster Tools est en préversion publique depuis le 10 février 2026. Il couvre Microsoft Copilot, les résumés de Bing et certains partenaires. Il affiche les citations par page, leur évolution et un échantillon des requêtes d'ancrage, ces courtes recherches que l'IA lance pour trouver ses sources.",
          "Depuis le 16 juin 2026, quatre fonctions s'y ajoutent en préversion : Intents classe ces requêtes par intention, Topics les regroupe par thème, Citation Share mesure votre part des citations sur une requête, Compare suit leur évolution. Citation Share ne révèle aucun concurrent et ne mesure pas le trafic. Pour qu'une mise à jour soit citée, Bing doit la connaître : IndexNow la lui signale.",
          "Copilot Chat affiche sous ses réponses les requêtes exactes envoyées à Bing, pendant 24 heures. Posez-lui la question d'un client et observez les requêtes et les sites cités. Cet affichage n'existe pas dans le volet Copilot de Word.",
        ],
      },
      {
        h3: "Excel devient l'atelier d'analyse de vos exports",
        paras: [
          "Le mode Plan de Copilot dans Excel convient aux analyses en plusieurs étapes : réunir deux périodes, calculer les écarts, classer les requêtes, repérer celles qui font remonter plusieurs URL. Demandez des formules dès qu'un résultat doit être exact, car elles restent visibles et vérifiables.",
        ],
        list: [
          "REGEXTEST et REGEXEXTRACT classent les URL par répertoire ou isolent les requêtes de marque.",
          "NBCAR donne le nombre exact de caractères d'une balise title ou d'une meta description.",
          "Python dans Excel, inclus en calcul standard dans les abonnements professionnels, sert aux regroupements de requêtes plus fins.",
        ],
      },
      {
        h3: "Word sert au brief et à la réécriture, avec deux garde-fous",
        paras: [
          "Pour un brief de mise à jour, collez dans Word la ligne d'analyse, les requêtes et la page actuelle, puis demandez une structure. Modifier avec Copilot réorganise les titres avec les styles Titre 1 et Titre 2 de Word.",
          "Microsoft prévient que Copilot peut produire un texte identique ou proche pour plusieurs personnes qui utilisent la même consigne ; Word propose un contrôle dans Accueil, Éditeur, Similitude. Google classe comme « utilisation abusive de contenu à grande échelle » la production de nombreuses pages sans valeur, quel que soit l'outil. Une page rédigée avec Copilot doit apporter ce que les pages concurrentes n'ont pas.",
        ],
      },
    ],
    table: {
      caption: "Tâches SEO, apport de Copilot et limite à connaître (septembre 2026)",
      headers: ["Tâche SEO", "Ce que Copilot fait", "Limite"],
      rows: [
        ["Analyser l'export Performances", "Excel, mode Plan : écarts, pages en baisse", "Export tronqué à 1 000 lignes."],
        ["Classer les requêtes par intention", "Excel : colonne remplie par Copilot", "Contrôler un échantillon."],
        ["Repérer la cannibalisation", "Excel : tableau croisé requête par URL", "La page à garder reste votre choix."],
        ["Estimer un volume de recherche", "Aucune fonction fiable", "Utilisez votre outil SEO."],
        ["Savoir si Copilot cite le site", "Bing Webmaster Tools, AI Performance", "Requêtes d'ancrage échantillonnées."],
        ["Contrôler l'originalité", "Word : Éditeur, Similitude", "La relecture humaine reste nécessaire."],
      ],
    },
    cas: {
      h3: "Cas pratique : trouver les pages qui décrochent à partir de deux exports Search Console",
      contexte: "Prenons la responsable SEO d'un site B2B d'environ 300 pages. Le trafic organique a baissé sur le trimestre et la direction veut savoir quelles pages rafraîchir en premier. Elle dispose d'une licence Copilot. Le scénario est pédagogique et les seuils sont à adapter.",
      etapes: [
        "Dans Search Console, rapport Performances, comparez les trois derniers mois à la période précédente. Exportez l'onglet Pages puis l'onglet Requêtes au format Microsoft Excel.",
        "Réunissez les deux exports dans un classeur enregistré sur OneDrive, en onglets « Pages » et « Requêtes ».",
        "Vérifiez que le calcul est sur Automatique, ouvrez Copilot, passez en mode Plan et collez le prompt ci-dessous.",
        "Validez le plan, puis contrôlez les dix premières lignes de l'onglet « À rafraîchir » dans Search Console.",
        "Dans Bing Webmaster Tools, ouvrez AI Performance et notez lesquelles de ces pages Copilot cite. Une page en baisse sur Google et absente des citations passe en tête de liste.",
      ],
      prompt: "Ce classeur contient deux exports du rapport Performances de Google Search Console. L'onglet « Pages » liste les URL avec clics, impressions, CTR et position moyenne sur deux périodes de trois mois. L'onglet « Requêtes » donne les mêmes indicateurs par requête. Les exports sont limités à 1 000 lignes : ne compare aucun total avec Search Console.\n\nPropose un plan, puis exécute-le après ma validation :\n1. Dans « Pages », ajoute l'écart de clics et l'écart de position entre les deux périodes, en valeur et en pourcentage, avec des formules.\n2. Ajoute une colonne « Rubrique » qui extrait par formule le premier répertoire de chaque URL.\n3. Crée un onglet « À rafraîchir » avec les pages qui ont perdu au moins 20 % de clics et gardé plus de 500 impressions, triées par clics perdus.\n4. Dans « Requêtes », ajoute une colonne « Intention » : informationnelle, commerciale, navigationnelle ou marque. Une requête de marque contient le nom de notre entreprise, visible dans le domaine des URL.\n5. Ajoute un tableau croisé dynamique du nombre de requêtes et des clics par intention, avec deux constats courts appuyés sur des valeurs du classeur.\n\nN'invente aucune donnée, ni volume de recherche ni position absente du fichier. Si une colonne manque, dis-le avant de continuer.",
      resultat: "Vous obtenez une liste triée de pages à rafraîchir, avec des écarts calculés par des formules que vous pouvez inspecter. Les pourcentages s'emballent sur les pages à faible trafic : le seuil d'impressions sert à les écarter. La colonne « Intention » reflète le jugement du modèle, surtout sur les requêtes de deux mots, et se vérifie par échantillon. Supprimez tout constat qui ne cite pas une valeur du classeur.",
    },
    pieges: [
      {
        titre: "Demander des volumes de recherche à Copilot",
        texte: "Copilot n'a pas de base de mots-clés et répond avec des estimations tirées de pages web datées. Les volumes viennent de votre outil SEO ; Copilot analyse son export.",
      },
      {
        titre: "Comparer les totaux d'un export avec Search Console",
        texte: "Les totaux du rapport incluent les lignes absentes de l'export. Écrivez-le dans le prompt pour que Copilot ne conclue rien d'une somme.",
      },
      {
        titre: "Produire des pages en série avec la même consigne",
        texte: "Deux sites qui utilisent le même prompt obtiennent des textes proches. Donnez à Copilot votre matière propre, vos données et vos cas, puis passez le résultat dans Similitude.",
      },
      {
        titre: "Juger la visibilité dans Copilot à partir de Google",
        texte: "Copilot interroge Bing. Une page bien classée dans Google mais mal indexée par Bing a peu de chances d'être citée : vérifiez l'indexation dans Bing Webmaster Tools et activez IndexNow.",
      },
    ],
  },
  audience: [
    {
      "title": "Responsables SEO et content managers sous Microsoft 365",
      "desc": "Vous pilotez un site et travaillez dans Word, Excel et Teams. Vous voulez tirer de vos exports Search Console une liste de pages à rafraîchir et des briefs."
    },
    {
      "title": "Rédacteurs web et chargés de contenu",
      "desc": "Vous réécrivez des pages existantes à partir de briefs. Vous devez savoir ce que Copilot produit dans Word et ce qu'il faut vérifier."
    },
    {
      "title": "Consultants et agences sur le Microsoft 365 de leurs clients",
      "desc": "Vous travaillez dans le tenant de chaque client. Vous devez connaître les limites de Copilot face aux outils SEO et suivre la visibilité des sites dans Copilot."
    }
  ],
  useCases: [
    {
      "icon": "📊",
      "title": "Analyse des exports Search Console",
      "desc": "Comparer deux périodes dans Excel en mode Plan, avec la limite de 1 000 lignes écrite dans la demande."
    },
    {
      "icon": "🎯",
      "title": "Classement des requêtes par intention",
      "desc": "Colonne remplie par Copilot, requêtes de marque isolées par REGEXTEST, contrôle par échantillon."
    },
    {
      "icon": "🔍",
      "title": "Visibilité dans Copilot",
      "desc": "Rapport AI Performance de Bing Webmaster Tools : pages citées, requêtes d'ancrage, intentions et thèmes."
    },
    {
      "icon": "🏷️",
      "title": "Contrôle des balises title et meta",
      "desc": "Formule NBCAR ajoutée par Copilot pour mesurer chaque balise d'une liste de pages."
    },
    {
      "icon": "📋",
      "title": "Briefs de mise à jour",
      "desc": "Brief rédigé dans Word à partir de la ligne d'analyse, des requêtes et de la page actuelle."
    },
    {
      "icon": "✍️",
      "title": "Réécriture et contrôle d'originalité",
      "desc": "Modifier avec Copilot pour restructurer une page, puis vérification dans Éditeur, Similitude."
    }
  ],
  modules: [
    {
      "day": 1,
      "title": "Module 1 · Ce que Copilot sait et ignore du référencement",
      "duration": "1h30",
      "description": "Situer Copilot face à vos outils SEO avant de lui confier une tâche.",
      "items": [
        "Aucun accès natif à Search Console, à Google Analytics ni aux outils de mots-clés",
        "Recherche web par Bing : requêtes générées et sites cités dans Copilot Chat",
        "Pourquoi écarter les volumes de recherche donnés par Copilot",
        "Licence Microsoft Copilot et accès standard : ce qui change pour le SEO"
      ],
      "exercise": "Poser à Copilot Chat trois questions que vos clients posent et relever les requêtes envoyées à Bing et les sites cités."
    },
    {
      "day": 1,
      "title": "Module 2 · Préparer les exports Search Console pour Excel",
      "duration": "2h",
      "description": "Construire un classeur d'analyse fiable à partir des exports de Search Console.",
      "items": [
        "Exporter les onglets Pages et Requêtes au format Microsoft Excel avec comparaison de périodes",
        "Limite de 1 000 lignes et totaux du rapport",
        "API Search Console et export vers BigQuery pour aller au-delà",
        "Classeur sur OneDrive, calcul sur Automatique, onglets nommés"
      ],
      "exercise": "Construire le classeur d'analyse trimestrielle de votre site à partir de vos propres exports."
    },
    {
      "day": 1,
      "title": "Module 3 · Trouver les pages qui décrochent avec le mode Plan",
      "duration": "2h",
      "description": "Faire calculer par Copilot les écarts entre deux périodes et produire une liste de pages à rafraîchir.",
      "items": [
        "Écarts de clics et de position calculés par formules",
        "Rubrique extraite de l'URL avec REGEXEXTRACT",
        "Seuil d'impressions pour écarter les pages à faible trafic",
        "Contrôle des premières lignes dans Search Console"
      ],
      "exercise": "Produire la liste des pages à rafraîchir de votre site et la vérifier sur un échantillon."
    },
    {
      "day": 1,
      "title": "Module 4 · Classer les requêtes et repérer la cannibalisation",
      "duration": "1h30",
      "description": "Organiser les requêtes de votre export pour décider des pages à fusionner ou à différencier.",
      "items": [
        "Colonne Intention : informationnelle, commerciale, navigationnelle, marque",
        "Requêtes de marque isolées par REGEXTEST",
        "Tableau croisé dynamique requête par URL",
        "Python dans Excel pour des regroupements plus fins"
      ],
      "exercise": "Classer les requêtes de votre export et identifier celles qui font remonter plusieurs de vos URL."
    },
    {
      "day": 2,
      "title": "Module 5 · Suivre les citations de votre site dans Copilot",
      "duration": "1h30",
      "description": "Mesurer la présence de votre site dans les réponses de Copilot avec l'outil de Microsoft.",
      "items": [
        "Rapport AI Performance de Bing Webmaster Tools : citations, pages, requêtes d'ancrage",
        "Intents, Topics, Citation Share et Compare, en préversion",
        "Indexation dans Bing et IndexNow",
        "Croiser les citations avec la liste des pages en baisse sur Google"
      ],
      "exercise": "Relever les pages de votre site citées par Copilot et les comparer à votre liste de pages à rafraîchir."
    },
    {
      "day": 2,
      "title": "Module 6 · Rédiger des briefs de mise à jour dans Word",
      "duration": "2h",
      "description": "Transformer une ligne d'analyse en brief exploitable par un rédacteur.",
      "items": [
        "Coller la ligne d'analyse, les requêtes et la page actuelle",
        "Structurer le brief : intention, questions à couvrir, sections à revoir",
        "Hiérarchie des titres avec les styles Titre 1 et Titre 2",
        "Relecture de chaque chiffre repris du classeur"
      ],
      "exercise": "Rédiger le brief de mise à jour de deux pages de votre liste."
    },
    {
      "day": 2,
      "title": "Module 7 · Réécrire une page et contrôler son originalité",
      "duration": "2h",
      "description": "Mettre à jour une page avec Copilot et vérifier qu'elle apporte une matière propre au site.",
      "items": [
        "Modifier avec Copilot pour restructurer et compléter une page existante",
        "Apporter la matière propre au site : données, cas, exemples",
        "Éditeur, Similitude pour repérer les passages proches de sources en ligne",
        "Politique de Google sur l'utilisation abusive de contenu à grande échelle"
      ],
      "exercise": "Réécrire une de vos pages à partir de son brief et passer le résultat dans Similitude."
    },
    {
      "day": 2,
      "title": "Module 8 · Fixer les règles éditoriales de l'équipe SEO",
      "duration": "1h30",
      "description": "Écrire ce que l'équipe vérifie hors de Copilot et qui valide un contenu avant publication.",
      "items": [
        "Ce qui se vérifie hors de Copilot : volumes, positions, exploration",
        "Feuille .Rules du classeur d'analyse, rédigée en anglais",
        "Circuit de validation d'un contenu produit avec Copilot",
        "Rythme de suivi dans Search Console et Bing Webmaster Tools"
      ],
      "exercise": "Rédiger la charte éditoriale IA de votre équipe et le calendrier de suivi de votre site."
    }
  ],
  objectives: [
    "Construire un classeur d'analyse à partir des exports Search Console en tenant compte de la limite de 1 000 lignes",
    "Identifier les pages qui décrochent avec Copilot en mode Plan et vérifier les écarts calculés",
    "Classer les requêtes par intention et repérer la cannibalisation",
    "Vérifier dans Bing Webmaster Tools quelles pages de votre site Copilot cite",
    "Rédiger un brief de mise à jour et réécrire une page dans Word",
    "Contrôler l'originalité d'un texte avec Éditeur, Similitude avant publication"
  ],
  faq: [
    {
      q: "Copilot peut-il se connecter à Google Search Console ?",
      a: "Non, pas en septembre 2026. Vous exportez le rapport au format Excel depuis Search Console, puis vous l'analysez avec Copilot dans Excel. L'export s'arrête à 1 000 lignes ; pour aller au-delà, l'API Search Console ou l'export vers BigQuery prennent le relais, hors de Copilot.",
    },
    {
      q: "Comment savoir si Copilot cite mon site ?",
      a: "Le rapport AI Performance de Bing Webmaster Tools, en préversion depuis février 2026, affiche les citations de vos pages dans Microsoft Copilot et dans les résumés de Bing. Il montre les pages citées, leur évolution et un échantillon des requêtes d'ancrage. Depuis juin 2026, il classe aussi ces requêtes par intention et par thème.",
    },
    {
      q: "Copilot peut-il remplacer un outil SEO comme Semrush ou Ahrefs ?",
      a: "Non. Copilot n'a ni base de mots-clés, ni index de liens, ni robot d'exploration de votre site. Il sert à analyser les exports de ces outils, à rédiger les briefs et à réécrire les contenus. Les deux se complètent.",
    },
    {
      q: "Google pénalise-t-il un contenu rédigé avec Copilot ?",
      a: "Google juge le contenu sur sa valeur pour l'utilisateur, quel que soit l'outil utilisé. Sa politique anti-spam vise l'utilisation abusive de contenu à grande échelle : de nombreuses pages générées sans valeur ajoutée. Un texte rédigé avec Copilot, enrichi de vos données et relu par un expert, ne pose pas de problème en soi.",
    },
    {
      q: "Copilot analyse-t-il la page de résultats de Google ?",
      a: "Non. Copilot interroge Bing, pas Google. Copilot Chat affiche les requêtes envoyées à Bing et les sites cités, ce qui renseigne sur la façon dont une IA cherche ses sources. Pour étudier la page de résultats de Google, gardez votre outil de suivi de positions.",
    },
    {
      q: "Quelle licence faut-il pour ces usages ?",
      a: "Copilot dans Excel fonctionne avec les abonnements Business et Entreprise éligibles à Copilot Chat, en accès standard. La licence Microsoft Copilot ajoute l'accès prioritaire, la source Travail dans Excel, Modifier avec Copilot dans Word et le choix du modèle. Bing Webmaster Tools est gratuit.",
    },
    {
      q: "Comment financer une formation Copilot pour une équipe SEO ?",
      a: "Masteria est certifié Qualiopi : la formation est finançable par votre OPCO, et Masteria monte le dossier avec vous. Le tarif est de 1 980 € HT par jour, en intra jusqu'à 12 participants ou en accompagnement individuel. Les exercices portent sur vos propres exports et vos pages.",
    },
  ],
  sources: [
    { name: "Aide Search Console : exporter des données depuis un rapport", url: "https://support.google.com/webmasters/answer/12919797?hl=fr" },
    { name: "Google Search Central : A deep dive into Search Console performance data filtering and limits", url: "https://developers.google.com/search/blog/2022/10/performance-data-deep-dive" },
    { name: "Google Search Central : règles relatives au spam (utilisation abusive de contenu à grande échelle)", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=fr" },
    { name: "Bing Webmaster Blog : Introducing AI Performance in Bing Webmaster Tools (10/02/2026)", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { name: "Bing Search Blog : Intents, Topics, Citation Share, Compare (16/06/2026)", url: "https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare" },
    { name: "Microsoft Learn : Data, privacy, and security for web search in Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access" },
    { name: "Support Microsoft : Démarrage avec Copilot dans Excel", url: "https://support.microsoft.com/fr-FR/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Support Microsoft : Copilot dans les sources de données Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/copilot-in-excel-data-sources" },
    { name: "Support Microsoft : fonction REGEXTEST", url: "https://support.microsoft.com/fr-fr/office/fonction-regextest-7d38200b-5e5c-4196-b4e6-9bff73afbd31" },
    { name: "Support Microsoft : Disponibilité de Python dans Excel", url: "https://support.microsoft.com/fr-fr/excel/python/python-in-excel-availability" },
    { name: "Support Microsoft : Questions fréquentes sur Copilot dans Word (Similitude)", url: "https://support.microsoft.com/fr-fr/word/frequently-asked-questions-about-copilot-in-word" },
    { name: "Support Microsoft : Modifier avec Copilot dans Word", url: "https://support.microsoft.com/fr-fr/word/edit-with-copilot-in-word" },
  ],
}
