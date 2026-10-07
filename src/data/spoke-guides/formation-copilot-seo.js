// Contenu propre à /formation-copilot-seo (guide terrain, page propre). Rendu par SpokePage.
// Réécrit le 7 octobre 2026. Faits Microsoft : fiche FAITS-OUTILS du 07/10/2026 et pages d'aide relevées
// le 28/09. Faits SEO : aide Search Console, Google Search Central, blogs Bing Webmaster (10/02 et 16/06/2026).
// Chiffre de clic : Pew Research Center, 22/07/2025 (reference_chiffres_geo_2026.md).
export default {
  slug: 'formation-copilot-seo',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Copilot SEO : analyser vos exports, écrire vos briefs et suivre vos citations",
  metaTitle: "Formation Copilot SEO | Masteria, Qualiopi",
  metaDesc: "Formation Copilot SEO : exports Search Console analysés dans Excel, citations suivies dans Bing Webmaster Tools, briefs et réécritures dans Word. Qualiopi.",
  resume: "La formation Copilot SEO apprend à une équipe de référencement à se servir de Copilot là où il est solide, sur les exports en tableur et les documents de brief, et à mesurer la présence de son site dans les réponses de Copilot. Le parcours s'étale sur deux jours de sept heures, en équipe (jusqu'à douze) ou pour un consultant seul, au prix journalier de 1 980 € HT. Comme Masteria est certifié Qualiopi, votre OPCO peut prendre en charge tout ou partie de la session, à ses conditions.",
  enBref: [
    { label: 'Formation', value: "Copilot pour le référencement naturel : analyse d'exports Search Console, briefs, réécritures, visibilité dans les réponses générées" },
    { label: 'Durée', value: "Deux jours de sept heures : les données le premier, la rédaction et la visibilité le second" },
    { label: 'Formats', value: "Une équipe SEO ou contenus réunie en intra (douze places), ou un consultant accompagné seul ; dans vos locaux ou à distance" },
    { label: 'Tarif', value: "Une journée coûte 1 980 € HT, pour un participant comme pour douze" },
    { label: 'Financement', value: "Masteria est certifié Qualiopi ; l'OPCO de l'entreprise décide de sa participation selon son barème" },
    { label: 'Prérequis', value: "Un accès à Search Console et à Bing Webmaster Tools pour le site travaillé ; un compte Microsoft 365 professionnel" },
  ],
  prerequis: "Un accès à Search Console et à Bing Webmaster Tools pour le site travaillé, et un compte Microsoft 365 professionnel",
  intro: "Copilot touche le référencement par deux côtés. Ses réponses web passent par Bing, et Bing publie depuis février 2026 les citations de votre site dans Copilot. Pour le travail SEO de tous les jours, Microsoft Copilot (anciennement Microsoft 365 Copilot) reste un outil de bureautique : il n'ouvre ni Search Console, ni votre base de mots-clés, ni vos journaux de serveur. Cette formation tire parti de ces deux réalités. Elle montre où Copilot fait gagner du temps, sur vos exports, vos briefs et vos contenus, et comment suivre ce qu'il dit de votre site.",
  guide: {
    kicker: "Guide terrain SEO",
    h2: "Copilot voit le web par Bing et vos données par Excel : le travail SEO passe par ces deux portes",
    lead: "Un référenceur qui travaille sous Microsoft 365 a deux raisons de s'intéresser à Copilot. La première tient à la visibilité : Copilot cite des pages web, et savoir lesquelles devient une question de trafic. La seconde est pratique : l'essentiel du métier passe par des exports en tableur et des documents de brief, deux terrains où Copilot agit dans le fichier. Volumes de recherche, positions et exploration du site se mesurent dans vos outils spécialisés.",
    sections: [
      {
        h3: "Copilot ne lit aucune donnée SEO sans passer par un export",
        paras: [
          "Copilot ne se connecte ni à Search Console, ni à Google Analytics, ni aux outils de mots-clés. La liste des connecteurs fédérés publiée pour Excel en septembre 2026 mentionne HubSpot, Notion ou FactSet, et aucun outil de référencement. Tout part donc d'un export.",
          "Search Console exporte au format Microsoft Excel, Google Sheets ou CSV. L'aide de Google précise que l'export s'arrête à 1 000 lignes représentatives, alors que les totaux affichés dans le rapport comptent toutes les données. Au-delà, l'API de Search Console ou l'export vers BigQuery prennent le relais, en dehors de Copilot.",
          "Copilot ne dispose d'aucune base de volumes de recherche. Si vous lui en demandez, il les estime à partir de pages web qui citent d'autres outils, souvent anciennes. Tenez ces valeurs pour fausses jusqu'à preuve du contraire.",
        ],
      },
      {
        h3: "Bing Webmaster Tools mesure les citations de vos pages dans Copilot",
        paras: [
          "Le rapport AI Performance de Bing Webmaster Tools est en préversion publique depuis le 10 février 2026. Il couvre Microsoft Copilot, les résumés générés de Bing et certains partenaires. Il affiche les citations page par page, leur évolution et un échantillon des requêtes d'ancrage, ces recherches courtes que l'IA lance pour trouver ses sources.",
          "Le 16 juin 2026, quatre fonctions s'y sont ajoutées en préversion. Intents classe ces requêtes par intention, Topics les regroupe par thème, Citation Share mesure votre part des citations sur une requête, Compare suit leur évolution. Citation Share ne nomme aucun concurrent et ne mesure pas le trafic. Pour qu'une page mise à jour soit citée, Bing doit la connaître : le protocole IndexNow la lui signale dès sa publication.",
          "Copilot Chat affiche aussi, sous ses réponses, les requêtes exactes envoyées à Bing, pendant 24 heures. Posez-lui la question d'un de vos clients et relevez les requêtes et les sites cités ; cet affichage n'existe pas dans le volet Copilot de Word.",
        ],
      },
      {
        h3: "Le clic se raréfie quand une réponse générée s'affiche",
        paras: [
          "Le Pew Research Center a observé, sur 68 879 recherches Google de 900 adultes américains en mars 2025, un clic vers un résultat dans 8 % des visites qui affichaient un résumé généré, contre 15 % sans résumé. Seule une visite sur cent aboutissait à un clic vers l'une des sources mentionnées dans ce résumé. Une page citée dans une réponse d'IA gagne donc une visibilité que le seul trafic ne montre pas.",
          "Pour une équipe SEO, la conséquence est double. Le rapport de positions ne suffit plus à juger une page, et il faut suivre ses citations dans les moteurs génératifs, en commençant par celui que Microsoft documente. La formation relie ces deux mesures dans un même classeur.",
        ],
      },
      {
        h3: "Excel devient l'atelier d'analyse de vos exports",
        paras: [
          "Le mode Plan de Copilot dans Excel convient aux analyses en plusieurs étapes : réunir deux périodes, calculer les écarts, classer les requêtes, repérer celles qui font remonter plusieurs URL. Demandez des formules dès qu'un résultat doit être exact, car elles restent visibles et se vérifient.",
        ],
        list: [
          "REGEXTEST et REGEXEXTRACT classent les URL par répertoire ou isolent les requêtes de marque.",
          "NBCAR donne le nombre exact de caractères d'une balise title ou d'une meta description.",
          "Python dans Excel, compris en calcul standard dans les abonnements professionnels, sert aux regroupements de requêtes plus fins.",
        ],
      },
      {
        h3: "Word sert au brief et à la réécriture, avec deux garde-fous",
        paras: [
          "Pour un brief de mise à jour, collez dans Word la ligne d'analyse, les requêtes et le texte de la page actuelle, puis demandez une structure. Modifier avec Copilot réorganise les intertitres avec les styles Titre 1 et Titre 2 de Word, ce qui facilite l'intégration dans le CMS.",
          "Microsoft prévient que Copilot peut produire un texte identique ou proche pour plusieurs personnes qui emploient la même consigne ; Word propose un contrôle dans Accueil, Éditeur, Similitude. Google range sous « utilisation abusive de contenu à grande échelle » la production de nombreuses pages sans valeur, quel que soit l'outil employé. Une page rédigée avec Copilot doit donc apporter ce que les pages concurrentes n'ont pas : vos données, vos cas, votre expertise.",
        ],
      },
    ],
    table: {
      caption: "Tâches SEO, apport de Copilot et limite à connaître, au 7 octobre 2026",
      headers: ["Tâche SEO", "Ce que fait Copilot", "Limite"],
      rows: [
        ["Analyser l'export Performances", "Excel, mode Plan : écarts entre périodes, pages en baisse", "Export plafonné à 1 000 lignes"],
        ["Classer les requêtes par intention", "Excel : colonne remplie par Copilot", "Un échantillon contrôlé à la main"],
        ["Repérer la cannibalisation", "Excel : tableau croisé requête par URL", "Le choix de la page à garder vous revient"],
        ["Estimer un volume de recherche", "Aucune fonction fiable", "Votre outil SEO fait foi"],
        ["Savoir si Copilot cite le site", "Bing Webmaster Tools, rapport AI Performance", "Requêtes d'ancrage échantillonnées"],
        ["Contrôler l'originalité d'un texte", "Word : Éditeur, puis Similitude", "Relecture humaine toujours nécessaire"],
      ],
    },
    cas: {
      h3: "Cas pratique : repérer les pages qui décrochent avec deux exports Search Console",
      contexte: "Prenons le responsable SEO d'un fabricant de matériel de laboratoire, dont le site B2B compte environ 300 pages. Le trafic organique a reculé sur le trimestre et la direction veut savoir quelles pages rafraîchir en priorité. Il dispose de la licence Microsoft Copilot. Le scénario est pédagogique et les seuils sont à adapter à votre site.",
      etapes: [
        "Dans Search Console, rapport Performances, il compare les trois derniers mois à la période précédente, puis exporte l'onglet Pages et l'onglet Requêtes au format Microsoft Excel.",
        "Il réunit les deux exports dans un classeur enregistré sur OneDrive, en onglets « Pages » et « Requêtes ».",
        "Il vérifie que le calcul est sur Automatique, ouvre Copilot, choisit le mode Plan et y copie la demande qui suit.",
        "Il valide le plan, puis contrôle dans Search Console les dix premières lignes de l'onglet « À rafraîchir ».",
        "Dans Bing Webmaster Tools, il ouvre AI Performance et note lesquelles de ces pages Copilot cite. Une page en baisse sur Google et absente des citations monte en tête de liste.",
      ],
      prompt: "Ce classeur réunit deux exports du rapport Performances de Google Search Console. L'onglet « Pages » liste les URL avec clics, impressions, CTR et position moyenne sur deux périodes de trois mois. L'onglet « Requêtes » donne les mêmes indicateurs par requête. Les exports sont limités à 1 000 lignes : ne compare aucun total avec Search Console.\n\nSoumets-moi ton plan avant de toucher au classeur, puis exécute-le une fois validé.\n1. Dans « Pages », ajoute l'écart de clics et l'écart de position entre les deux périodes, en valeur et en pourcentage, avec des formules.\n2. Ajoute une colonne « Rubrique » qui extrait par formule le premier répertoire de chaque URL.\n3. Crée un onglet « À rafraîchir » avec les pages qui ont perdu au moins 20 % de clics tout en gardant plus de 500 impressions, triées par clics perdus.\n4. Dans « Requêtes », ajoute une colonne « Intention » : informationnelle, commerciale, navigationnelle ou marque. Une requête de marque contient le nom de notre entreprise, visible dans le domaine des URL.\n5. Ajoute un tableau croisé dynamique du nombre de requêtes et des clics par intention, avec deux constats courts appuyés sur des valeurs du classeur.\n\nN'ajoute ni volume de recherche ni position absente du fichier. Si une colonne manque, dis-le avant de continuer.",
      resultat: "Le responsable SEO obtient une liste triée de pages à rafraîchir, avec des écarts calculés par des formules qu'il peut inspecter. Les pourcentages s'emballent sur les pages à faible trafic, d'où le seuil d'impressions qui les écarte. La colonne « Intention » reflète le jugement du modèle, surtout sur les requêtes de deux mots, et se vérifie par échantillon. Tout constat qui ne cite pas une valeur du classeur se supprime avant la réunion avec la direction.",
    },
    pieges: [
      {
        titre: "Demander des volumes de recherche à Copilot",
        texte: "Copilot n'a pas de base de mots-clés et répond avec des estimations tirées de pages web datées. Les volumes viennent de votre outil SEO ; Copilot en analyse l'export.",
      },
      {
        titre: "Comparer les totaux d'un export avec Search Console",
        texte: "Les totaux du rapport incluent les lignes absentes de l'export, plafonné à 1 000 lignes. Écrivez-le dans la demande pour que Copilot ne tire aucune conclusion d'une somme.",
      },
      {
        titre: "Produire des pages en série avec la même consigne",
        texte: "Deux sites qui emploient le même prompt obtiennent des textes voisins. Donnez à Copilot votre matière propre, vos données et vos cas clients, puis passez le résultat dans Similitude.",
      },
      {
        titre: "Juger la visibilité dans Copilot avec les positions Google",
        texte: "Copilot interroge Bing. Une page bien classée dans Google mais mal indexée par Bing a peu de chances d'être citée : vérifiez l'indexation dans Bing Webmaster Tools et activez IndexNow.",
      },
    ],
  },
  audience: [
    { title: "Responsables SEO et content managers sous Microsoft 365", desc: "Vous pilotez un site et travaillez dans Word, Excel et Teams. Vous voulez tirer de vos exports Search Console une liste de pages à rafraîchir et les briefs qui vont avec." },
    { title: "Rédacteurs web et chargés de contenu", desc: "Vous réécrivez des pages existantes à partir de briefs. Vous apprenez ce que Copilot produit dans Word, ce qu'il faut vérifier et comment garder un texte qui vous ressemble." },
    { title: "Consultants et agences sur le Microsoft 365 de leurs clients", desc: "Vous travaillez dans l'environnement de chaque client. Vous devez connaître les limites de Copilot face aux outils SEO et suivre la place des sites dans les réponses de Copilot." },
  ],
  useCases: [
    { icon: '📊', title: "Analyse des exports Search Console", desc: "Deux périodes comparées dans Excel en mode Plan, avec la limite de 1 000 lignes écrite dans la demande." },
    { icon: '🎯', title: "Requêtes classées par intention", desc: "Une colonne remplie par Copilot, les requêtes de marque isolées par REGEXTEST, un échantillon relu à la main." },
    { icon: '🔍', title: "Citations du site dans Copilot", desc: "Le rapport AI Performance de Bing Webmaster Tools : pages citées, requêtes d'ancrage, intentions et thèmes." },
    { icon: '🏷️', title: "Balises title et meta mesurées", desc: "Une formule NBCAR ajoutée par Copilot compte les caractères de chaque balise d'une liste de pages." },
    { icon: '📋', title: "Briefs de mise à jour", desc: "Un brief rédigé dans Word à partir de la ligne d'analyse, des requêtes et du texte actuel de la page." },
    { icon: '✍️', title: "Réécriture contrôlée", desc: "Modifier avec Copilot restructure la page, puis Éditeur, Similitude repère les passages trop proches de sources en ligne." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Situer Copilot face à vos outils de référencement", duration: '1h30',
      description: "Avant de confier une tâche à Copilot, l'équipe sait ce qu'il lit, ce qu'il ignore et d'où viennent ses réponses web.",
      items: [
        "Aucun accès natif à Search Console, à Google Analytics ni aux outils de mots-clés",
        "Recherche web par Bing : requêtes générées et sites cités, visibles dans Copilot Chat",
        "Pourquoi écarter les volumes de recherche avancés par Copilot",
        "Ce que la licence ajoute au Copilot Chat inclus pour un référenceur, choix du modèle compris",
      ],
      exercise: "Vous posez à Copilot Chat trois questions que vos clients posent, puis relevez les requêtes envoyées à Bing et les sites cités.",
    },
    {
      day: 1, title: "Module 2 · Préparer les exports Search Console pour Excel", duration: '2h',
      description: "Un classeur d'analyse fiable commence par des exports propres et une limite connue.",
      items: [
        "Onglets Pages et Requêtes exportés au format Microsoft Excel, avec comparaison de périodes",
        "Limite de 1 000 lignes et totaux du rapport",
        "API Search Console et export vers BigQuery pour aller au-delà",
        "Classeur dans OneDrive, calcul sur Automatique, onglets nommés",
      ],
      exercise: "Vous construisez le classeur d'analyse trimestrielle de votre site à partir de vos propres exports.",
    },
    {
      day: 1, title: "Module 3 · Trouver les pages qui décrochent avec le mode Plan", duration: '2h',
      description: "Copilot calcule les écarts entre deux périodes et dresse la liste des pages à rafraîchir ; vous validez la démarche puis le résultat.",
      items: [
        "Écarts de clics et de position calculés par formules",
        "Rubrique extraite de l'URL avec REGEXEXTRACT",
        "Seuil d'impressions pour écarter les pages à faible trafic",
        "Premières lignes contrôlées dans Search Console",
      ],
      exercise: "Vous produisez la liste des pages à rafraîchir de votre site et la vérifiez sur un échantillon.",
    },
    {
      day: 1, title: "Module 4 · Classer les requêtes et repérer la cannibalisation", duration: '1h30',
      description: "Organiser les requêtes de l'export aide à décider des pages à fusionner ou à différencier.",
      items: [
        "Colonne Intention : informationnelle, commerciale, navigationnelle, marque",
        "Requêtes de marque isolées par REGEXTEST",
        "Tableau croisé dynamique requête par URL",
        "Python dans Excel pour des regroupements plus fins",
      ],
      exercise: "Vous classez les requêtes de votre export et repérez celles qui font remonter plusieurs de vos URL.",
    },
    {
      day: 2, title: "Module 5 · Suivre les citations de votre site dans Copilot", duration: '1h30',
      description: "La présence d'un site dans les réponses de Copilot se mesure avec l'outil de Microsoft, à côté des positions Google.",
      items: [
        "Rapport AI Performance : citations, pages, requêtes d'ancrage",
        "Intents, Topics, Citation Share et Compare, en préversion depuis juin 2026",
        "Indexation dans Bing et protocole IndexNow",
        "Clics raréfiés sous un résumé généré : ce que mesure l'étude du Pew Research Center",
      ],
      exercise: "Vous relevez les pages de votre site citées par Copilot et les comparez à votre liste de pages à rafraîchir.",
    },
    {
      day: 2, title: "Module 6 · Rédiger des briefs de mise à jour dans Word", duration: '2h',
      description: "Une ligne d'analyse devient un brief qu'un rédacteur peut suivre sans revenir vers vous.",
      items: [
        "Ligne d'analyse, requêtes et texte actuel collés dans Word",
        "Brief structuré : intention, questions à couvrir, sections à revoir",
        "Hiérarchie des intertitres avec les styles Titre 1 et Titre 2",
        "Chaque chiffre repris du classeur relu avant envoi",
      ],
      exercise: "Vous rédigez le brief de mise à jour de deux pages de votre liste.",
    },
    {
      day: 2, title: "Module 7 · Réécrire une page et vérifier son originalité", duration: '2h',
      description: "Une page mise à jour avec Copilot doit apporter une matière propre au site, et cela se contrôle.",
      items: [
        "Modifier avec Copilot pour restructurer et compléter une page existante",
        "Matière propre au site : données, cas clients, exemples",
        "Éditeur, Similitude pour repérer les passages proches de sources en ligne",
        "Politique de Google sur l'utilisation abusive de contenu à grande échelle",
      ],
      exercise: "Vous réécrivez une de vos pages à partir de son brief et passez le résultat dans Similitude.",
    },
    {
      day: 2, title: "Module 8 · Écrire les règles éditoriales de l'équipe SEO", duration: '1h30',
      description: "L'équipe décide de ce qu'elle vérifie hors de Copilot, des données qu'elle lui refuse et de la personne qui valide un contenu avant publication.",
      items: [
        "Vérifications hors de Copilot : volumes, positions, exploration",
        "Données clients et exports CRM tenus hors des demandes ; feuille .Rules du classeur, rédigée en anglais",
        "Circuit de validation d'un contenu produit avec Copilot ; registre des formations exigé en pratique par l'article 4 de l'AI Act",
        "Plan à trente jours : dix pages rafraîchies, suivi mensuel dans Search Console et Bing Webmaster Tools",
      ],
      exercise: "Vous rédigez la charte éditoriale IA de votre équipe et le calendrier de suivi de votre site pour le mois qui vient.",
    },
  ],
  objectives: [
    "Le participant sait construire un classeur d'analyse à partir des exports Search Console en tenant compte de la limite de 1 000 lignes.",
    "Le participant sait repérer les pages qui décrochent avec Copilot en mode Plan et vérifier les écarts calculés.",
    "Le participant sait classer des requêtes par intention et repérer une cannibalisation.",
    "Le participant sait vérifier dans Bing Webmaster Tools quelles pages du site Copilot cite.",
    "Le participant sait rédiger un brief de mise à jour et réécrire une page dans Word.",
    "Le participant sait contrôler l'originalité d'un texte avec Éditeur, Similitude, avant publication.",
  ],
  faq: [
    {
      q: "Copilot peut-il se connecter à Google Search Console ?",
      a: "Non, pas au 7 octobre 2026. Vous exportez le rapport au format Excel depuis Search Console, puis vous l'analysez avec Copilot dans Excel. L'export s'arrête à 1 000 lignes ; pour aller au-delà, l'API de Search Console ou l'export vers BigQuery prennent le relais, hors de Copilot. La liste des connecteurs fédérés d'Excel publiée en septembre 2026 ne compte aucun outil de référencement, ce qui fait de l'export le passage obligé.",
    },
    {
      q: "Comment savoir si Copilot cite mon site ?",
      a: "Le rapport AI Performance de Bing Webmaster Tools, en préversion depuis le 10 février 2026, affiche les citations de vos pages dans Microsoft Copilot et dans les résumés générés de Bing. Il montre les pages citées, leur évolution et un échantillon des requêtes d'ancrage. Depuis le 16 juin 2026, il classe aussi ces requêtes par intention et par thème, et mesure votre part des citations sur une requête, sans nommer vos concurrents.",
    },
    {
      q: "Copilot peut-il remplacer un outil SEO comme Semrush ou Ahrefs ?",
      a: "Non. Copilot n'a ni base de mots-clés, ni index de liens, ni robot d'exploration de votre site. Il sert à analyser les exports de ces outils, à rédiger les briefs et à réécrire les contenus. Les deux se complètent : l'outil SEO fournit les données, Copilot accélère leur lecture et la production écrite, et le référenceur garde la décision sur les pages à travailler.",
    },
    {
      q: "Un texte écrit avec Copilot risque-t-il une sanction de Google ?",
      a: "Google juge un contenu sur sa valeur pour l'utilisateur, sans regarder l'outil qui a servi à l'écrire. Sa politique contre le spam vise l'utilisation abusive de contenu à grande échelle : de nombreuses pages produites sans apport. Un texte rédigé avec Copilot, nourri de vos données et de vos cas, relu par une personne qui connaît le sujet, ne pose pas de problème en soi. Le contrôle Similitude de Word aide à repérer les passages trop proches de sources publiées.",
    },
    {
      q: "Pourquoi suivre ses citations dans les réponses d'IA si le trafic vient de Google ?",
      a: "Parce que le clic se raréfie quand une réponse générée s'affiche. D'après le Pew Research Center, qui a suivi des internautes américains au printemps 2025, un résumé généré fait tomber le taux de clic vers un résultat de 15 % à 8 %, et une visite sur cent seulement mène à une source citée. Être cité nourrit la notoriété même sans visite. Bing Webmaster Tools donne aujourd'hui la mesure la plus directe pour Copilot.",
    },
    {
      q: "Copilot analyse-t-il la page de résultats de Google ?",
      a: "Non. Copilot interroge Bing. Copilot Chat affiche pendant 24 heures les requêtes envoyées à Bing et les sites cités, ce qui renseigne sur la façon dont une IA cherche ses sources. Pour étudier la page de résultats de Google, gardez votre outil de suivi de positions. Une page bien placée dans Google mais mal indexée par Bing a peu de chances de figurer parmi les sources de Copilot.",
    },
    {
      q: "Quelle licence faut-il pour ces usages ?",
      a: "Copilot dans Excel tourne au niveau standard avec tout abonnement professionnel ou Entreprise ouvrant droit à Copilot Chat. La licence Microsoft Copilot ajoute l'accès prioritaire, la source Travail dans Excel, Modifier avec Copilot dans Word et le choix du modèle. Bing Webmaster Tools est gratuit, tout comme Search Console. Le cadrage de la session relève l'accès de chaque participant pour que personne ne cherche une fonction absente.",
    },
    {
      q: "Comment financer une formation Copilot pour une équipe SEO ?",
      a: "Votre OPCO peut financer la session, car Masteria est certifié Qualiopi pour la catégorie des actions de formation ; il tranche selon les règles de votre branche et l'argent qu'il lui reste. Chaque journée vaut 1 980 € HT, pour un consultant isolé comme pour une équipe de douze, et 3 960 € HT les deux. Les exercices portent sur vos exports et vos pages, et Masteria rédige le programme et la convention à joindre.",
    },
  ],
  tarifs: {
    titre: "Le prix de la session, préparation sur votre site comprise",
    paras: [
      "Avant la session, le formateur reçoit deux exports Search Console récents, une capture du rapport AI Performance de Bing Webmaster Tools et trois pages que l'équipe veut rafraîchir. Il adapte les demandes de ce guide à votre site et à votre secteur. L'équipe garde les supports, le classeur d'analyse construit pendant les ateliers et la charte éditoriale rédigée au dernier module.",
      "Exemple : une équipe contenus de quatre personnes (un responsable SEO, deux rédacteurs, une chargée de contenus). Pour ce groupe, les deux journées en intra reviennent à 3 960 € HT, 990 € HT par tête. Un consultant indépendant ou un responsable seul suit le programme en individuel au même tarif journalier. Le dossier de prise en charge part ensuite à l'OPCO, qui applique le barème de sa branche.",
    ],
  },
  apres: {
    titre: "Après la formation, un tableau de bord SEO et GEO construit pour vous",
    texte: "Quand l'équipe a pris le pli, Masteria peut lui bâtir un classeur qui rapproche chaque mois les exports Search Console et les citations relevées dans Bing Webmaster Tools, une compétence qui rédige les briefs de mise à jour à votre format, ou un audit de la visibilité de votre site dans les moteurs génératifs. Le périmètre se fixe lors d'un cadrage, le prix au forfait ; ce type de mission n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous l'adresse du site à travailler : les ateliers partent de vos propres exports.",
    fin: {
      titre: "Votre site sert de matière à la session",
      texte: "Indiquez-nous le site concerné, la taille de l'équipe et les outils SEO que vous utilisez déjà. Nous proposons un programme bâti sur vos données et des dates de session.",
    },
  },
  liensAssocies: [
    { label: "Toutes les formations Microsoft Copilot", href: '/formation-microsoft-copilot' },
    { label: "Formation IA pour le SEO, plusieurs assistants comparés", href: '/formation-ia-seo' },
    { label: "Faire auditer la place de son site dans les réponses d'IA", href: '/audit-geo-ia' },
    { label: "Le référencement à l'heure des réponses générées", href: '/blog/geo-referencement-ia-generative-entreprise' },
    { label: "Claude pour les équipes de référencement", href: '/formation-claude-seo' },
  ],
  sources: [
    { name: "Aide Google : l'export d'un rapport Search Console et sa limite", url: "https://support.google.com/webmasters/answer/12919797?hl=fr" },
    { name: "Google Search Central, en anglais : filtrage et limites des données de performance", url: "https://developers.google.com/search/blog/2022/10/performance-data-deep-dive" },
    { name: "Google Search Central : politique contre l'utilisation abusive de contenu à grande échelle", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=fr" },
    { name: "Blog Bing Webmaster, en anglais : lancement du rapport AI Performance (10 février 2026)", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
    { name: "Blog Bing Search, en anglais : Intents, Topics, Citation Share et Compare (16 juin 2026)", url: "https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare" },
    { name: "Pew Research Center, en anglais : moins de clics quand un résumé généré s'affiche (22 juillet 2025)", url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/" },
    { name: "Microsoft Learn, en anglais : la recherche web de Copilot et les requêtes envoyées à Bing", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access" },
    { name: "Aide Microsoft : Copilot dans Excel, premiers pas pour un référenceur", url: "https://support.microsoft.com/fr-FR/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Aide Microsoft : connecteurs et sources de données d'Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/copilot-in-excel-data-sources" },
    { name: "Aide Microsoft : la fonction REGEXTEST", url: "https://support.microsoft.com/fr-fr/office/fonction-regextest-7d38200b-5e5c-4196-b4e6-9bff73afbd31" },
    { name: "Aide Microsoft : le contrôle Similitude de Word face aux textes générés", url: "https://support.microsoft.com/fr-fr/word/frequently-asked-questions-about-copilot-in-word" },
  ],
}
