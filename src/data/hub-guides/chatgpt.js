// Texte propre du hub /formation-chatgpt (voir index.js), réécrit le 07/10/2026.
// Faits ChatGPT : fiche de faits du 07/10/2026 (help.openai.com lu par extraits, presse spécialisée),
// comparatif ChatGPT vs Claude du 03/10/2026 (src/data/comparisons.js), guides ChatGPT du 28/09/2026.
// Non écrits faute de vérification à la main : prix ChatGPT en euros (HT ou TTC), blocage de la
// création de GPTs avant le retrait, disponibilité de ChatGPT Space et Pages sur Business.
export default {
  pagePropre: true,
  dateModified: '2026-10-07',
  author: true,
  metaTitle: 'Formation ChatGPT en entreprise · Qualiopi, OPCO | Masteria',
  metaDesc: "Formation ChatGPT en entreprise : projets, compétences, agents, règles de données, sur vos dossiers. 2 jours, 12 programmes, Qualiopi, finançable OPCO.",
  h1: 'Formation ChatGPT en entreprise',
  outilCourt: 'ChatGPT',
  definition: "Une formation ChatGPT apprend à vos collaborateurs à confier des tâches de leur poste à ChatGPT, l'assistant d'OpenAI, puis à contrôler ce qu'il rend : rédaction, calculs sur fichiers, recherche sourcée, projets d'équipe, compétences et agents, le tout encadré par des règles de données mises par écrit. Chez Masteria, organisme certifié Qualiopi dans la catégorie actions de formation, elle compte quatorze heures sur deux jours et accueille douze stagiaires au maximum, ou une personne seule, au prix de 1 980 € HT chaque jour.",
  intro: "ChatGPT est souvent le premier assistant que vos salariés ont ouvert, parfois sur un compte personnel, et souvent sans mode d'emploi. Au 7 octobre 2026, l'outil s'est beaucoup étoffé : GPT-5.6 Sol répond dans la conversation des offres payantes, les projets partagés gardent le contexte d'un dossier, les compétences rangent une procédure, et des agents enchaînent des étapes pour toute une équipe. Notre formation ChatGPT en entreprise part de l'offre que vous avez souscrite, Plus, Business ou Enterprise, et des pièces que vos équipes traitent chaque semaine. Onze programmes métier de deux jours existent, du marketing à l'informatique, ainsi qu'une journée consacrée à la rédaction. En France, l'OPCO de votre secteur peut prendre cette session en charge, selon ses propres critères et les fonds dont il dispose.",
  pitch: "Le bon usage de ChatGPT tient en deux gestes : lui donner le contexte du dossier, puis relire ce qu'il en tire avant de signer.",
  casIds: [],
  // Avis Google : extraits par défaut, déjà communs au site. Tous les avis figurent en entier sur la home ;
  // mettre en tête d'autres avis ici ferait baisser le texte propre de la home (mesure du 07/10/2026).
  avisPriorite: [],
  avisTitre: 'Nos formations IA vues par les participants, sur Google',
  missionsTitre: 'La planification de ChatGPT, retenue en fin de session pour la veille',
  titres: {
    why: 'Ce que deux jours de formation changent dans votre usage de ChatGPT',
    spokes: 'Douze programmes ChatGPT, rangés par métier',
    programme: 'Le programme ChatGPT en deux jours, revu le 7 octobre 2026',
    faq: 'Les questions posées avant une formation ChatGPT',
  },
  carteTitres: {
    'formation-chatgpt-marketing': 'ChatGPT au service du marketing',
    'formation-chatgpt-ressources-humaines': 'ChatGPT pour les ressources humaines',
    'formation-chatgpt-commercial': 'ChatGPT dans la vente et la prospection',
    'formation-chatgpt-finance': 'ChatGPT pour la direction financière',
    'formation-chatgpt-communication': 'ChatGPT en communication et relations presse',
    'formation-chatgpt-management': 'ChatGPT au quotidien du manager',
    'formation-chatgpt-assistante': "ChatGPT pour l'assistanat de direction",
    'formation-chatgpt-seo': 'ChatGPT et le référencement naturel',
    'formation-chatgpt-service-client': 'ChatGPT au service client',
    'formation-chatgpt-informatique': 'ChatGPT pour la DSI et les équipes techniques',
    'formation-chatgpt-pedagogique': 'ChatGPT pour concevoir des formations',
    'formation-chatgpt-redaction': 'Formation ChatGPT rédaction, en une journée',
  },
  spokesIntro: "Onze programmes durent deux jours et s'appuient sur les pièces d'un métier : campagnes, dossiers de recrutement, comptes clients, clôtures, revues de presse. Le douzième, consacré à la rédaction, tient en une journée. Quand le groupe mêle plusieurs services, nous assemblons dans une même session les ateliers de deux ou trois programmes.",
  spokeDescs: {
    'formation-chatgpt-marketing': "Visuels de campagne avec ChatGPT Images 2.5, ton de marque rangé dans un projet partagé, déclinaisons par canal, puis lecture des résultats d'une campagne exportée.",
    'formation-chatgpt-ressources-humaines': "Offres d'emploi, livret d'accueil, synthèse d'entretiens anonymisés et notes internes, avec les usages à risque, comme le tri de candidatures, tenus hors de l'outil.",
    'formation-chatgpt-commercial': "Préparer un rendez-vous par la recherche approfondie, rédiger propositions et relances, analyser un export du CRM, puis confier le suivi à un agent lancé depuis Slack.",
    'formation-chatgpt-finance': "Faire exécuter les calculs d'un export comptable par l'outil d'analyse de ChatGPT, commenter un écart budgétaire, préparer la note au comité et pointer chaque chiffre avant diffusion.",
    'formation-chatgpt-communication': "Revue de presse sourcée, argumentaire de crise, déclinaisons par réseau social et visuels, avec la charte éditoriale de l'institution écrite dans une compétence.",
    'formation-chatgpt-management': "Préparer une réunion ou un entretien annuel, résumer un comité, rédiger un message délicat, et décider de ce qu'un manager garde pour lui.",
    'formation-chatgpt-assistante': "Courriers, comptes rendus tirés de notes brutes, préparation des déplacements et des comités, avec ChatGPT ouvert dans Word et un projet par dirigeant suivi.",
    'formation-chatgpt-seo': "Exports Search Console analysés, recherche approfondie limitée aux domaines concurrents, briefs rangés en compétence et trafic venu de ChatGPT mesuré dans Analytics.",
    'formation-chatgpt-service-client': "Réponses aux réclamations au ton de la maison, base de réponses tenue dans un projet partagé, lecture d'un export de tickets et passage de relais à un conseiller.",
    'formation-chatgpt-informatique': "Administration de ChatGPT Business, plugins et connecteurs gérés depuis la console, Codex pour les scripts, et règles de données fixées avec la sécurité informatique.",
    'formation-chatgpt-pedagogique': "Objectifs évaluables et questions qui les vérifient, supports tirés de vos contenus, mode étude pour les apprenants, puis relecture avec la grille Qualiopi.",
    'formation-chatgpt-redaction': "Écrire au ton de la maison : brief, plan discuté, premier jet dirigé, déclinaisons par canal, puis vérification des faits avant publication.",
  },
  encart: {
    titre: 'Une journée entière pour écrire avec ChatGPT',
    avant: "Si vos équipes produisent surtout des textes (articles, pages web, lettres d'information, réponses aux clients), la ",
    ancre: 'formation ChatGPT rédaction',
    href: '/formation-chatgpt-redaction',
    apres: " leur consacre une journée : le ton de la maison décrit une fois dans un projet, la méthode qui mène du brief au premier jet, les déclinaisons par canal et la relecture des faits avant publication.",
  },
  choisir: {
    titre: "Choisir sa formation ChatGPT selon l'offre et le métier",
    paras: [
      "L'offre ChatGPT que paie l'entreprise passe en premier, car elle fixe ce qu'on peut enseigner. Sur Plus, chaque abonné règle son propre compte, un projet reçoit 25 fichiers, et ses échanges nourrissent l'entraînement des modèles tant qu'il n'a pas coupé le réglage. Business et Enterprise ouvrent trois fonctions d'équipe (projets partagés, compétences, agents) et laissent vos échanges hors de l'entraînement par défaut. Pour une équipe encore sur des comptes personnels, la formation commence par cette décision.",
      "Partez ensuite du métier. Si l'équipe partage une fonction, prenez le programme de cette fonction : les ateliers y partent des dossiers qu'elle manipule d'une semaine à l'autre. Un dirigeant ou une assistante de direction avance souvent plus vite seul avec le formateur, en suivant son propre agenda et les affaires qu'il traite. Et si la vraie question reste de savoir quel assistant retenir, la formation multi-outils met Claude, Gemini, Vibe de Mistral AI et Microsoft Copilot (anciennement Microsoft 365 Copilot) face à ChatGPT, sur les mêmes documents, avant que vous ne signiez un abonnement.",
    ],
  },
  apres: {
    titre: 'Après la formation : des agents ChatGPT construits avec vous',
    texte: "Deux jours suffisent pour qu'une équipe sache écrire une compétence simple. Un agent qui lit une boîte de réception, consulte un fichier partagé et prépare une réponse demande davantage : un cadrage, des droits, un budget de crédits et une série de tests. Masteria conçoit ces agents et ces compétences avec vous sur ChatGPT Business ou Enterprise, puis forme les référents qui les feront évoluer. Ce travail sur mesure, pas finançable par votre OPCO car il relève du conseil et du développement, se chiffre au forfait une fois le besoin cadré.",
  },
  villesIntro: "Onze villes ont une page ChatGPT écrite pour leur économie : la documentation qualité de l'industrie pharmaceutique à Lyon, la logistique portuaire à Marseille, l'aéronautique à Toulouse, les réglages de données qu'exige la conformité genevoise, l'écriture en trois langues à Bruxelles. À Genève et à Bruxelles, hors du système des OPCO, la session se chiffre sur devis en euros HT. Partout ailleurs, en France comme à l'étranger (Europe, États-Unis, Inde), le formateur se déplace dans vos locaux ou anime la session en classe virtuelle.",
  autresOutilsIntro: "D'autres assistants conviennent mieux à certains environnements. Quand le travail vit dans Outlook, Teams et SharePoint, Microsoft Copilot lit directement vos fichiers et vos réunions. Gemini tient cette place dans Gmail et Google Docs, Vibe héberge par défaut ses données sur le sol européen, et Claude lit d'un seul tenant des dossiers bien plus longs. Nos comparatifs ChatGPT vs Claude et Copilot vs ChatGPT aident à trancher sur pièces.",
  why: [
    {
      title: "Sortir les données de l'entreprise des comptes personnels",
      body: "Sur les offres Free, Go, Plus et Pro, les conversations peuvent nourrir les futurs modèles d'OpenAI tant que l'utilisateur n'a pas décoché « Améliorer le modèle pour tous » (menu Contrôles des données des paramètres). Business, Enterprise et Edu excluent vos échanges de l'entraînement par défaut. Beaucoup de salariés ignorent sur quel compte ils travaillent. La formation commence donc par là : chacun vérifie son compte et ses réglages, puis l'équipe écrit la liste des informations admises dans ChatGPT et de celles qui restent dehors, comme les données clients, les salaires ou les dossiers médicaux. Cette liste ouvre votre charte d'usage.",
    },
    {
      title: "Donner à ChatGPT tout le contexte d'un dossier",
      body: "Une question posée sans contexte obtient une réponse moyenne. Un projet ChatGPT réunit les instructions, les fichiers de référence et les conversations d'un même dossier ; sa mémoire peut rester limitée au projet, pour que les consignes d'un client ne se mélangent pas à celles d'un autre. Sur Business, on y dépose 40 fichiers au plus et on l'ouvre à 100 collègues au maximum. En atelier, chaque participant monte le projet d'un dossier qu'il traite cette semaine, puis compare la réponse obtenue avec et sans ce contexte. L'écart convainc plus vite qu'un discours.",
    },
    {
      title: 'Préparer le retrait des GPTs, annoncé pour le 11 décembre 2026',
      body: "OpenAI a annoncé le retrait des GPTs personnalisés pour le 11 décembre 2026. Ceux que vos équipes ont construits passent dans des plugins, où leurs consignes forment une compétence (skill) et leurs fichiers de connaissance deviennent des fichiers de référence. Plusieurs éléments ne suivent pas, dont les actions personnalisées, les conversations et les droits de partage, et le plugin migré démarre en privé. Le format des compétences, apparu chez Anthropic, a été repris par Google, Microsoft et Mistral : une procédure rédigée pour ChatGPT se réutilise ailleurs sans tout réécrire. La formation recense vos GPTs et reconstruit le plus utile sous cette forme.",
    },
    {
      title: 'Confier une tâche entière à un agent, avec un budget suivi',
      body: "Depuis le 21 mai 2026, Business, Enterprise et Edu proposent les agents d'espace de travail : on les décrit en langage courant, on les partage, on les programme ou on les lance depuis Slack. Depuis le 6 juillet, chaque exécution se règle en crédits, de 5 à 25 pour une exécution typique selon OpenAI. ChatGPT Work, lancé le 9 juillet, conduit un travail de longue haleine jusqu'à un fichier fini : document, tableur ou présentation. En formation, on décide du degré d'automatisation qui convient, on teste l'agent sur des cas pièges et on suit sa consommation avant de l'ouvrir à toute l'équipe.",
    },
  ],
  programme: [
    {
      day: 1,
      title: 'Régler ChatGPT, poser le cadre et travailler sur vos dossiers',
      items: [
        "État des lieux le jour même : offres Free, Go, Plus, Pro, Business et Enterprise, modèles du moment (GPT-5.6 Sol pour converser, GPT-6 Pro réservé à Pro, Business et Enterprise) et ce que votre offre autorise",
        "Données et RGPD : vérifier le compte de chacun, le réglage d'entraînement et l'hébergement européen selon l'offre, puis dresser la liste des pièces interdites dans ChatGPT",
        "Écrire une demande qui aboutit du premier coup (qui parle, pour quoi faire, avec quelles pièces, sous quelle forme) sur un document que chacun apporte, puis relancer de façon ciblée plutôt que tout reformuler",
        "Mode instantané ou mode réflexion : régler le curseur selon la tâche, et mesurer ce que la fenêtre du mode réflexion, 256 000 tokens (unités de texte lues par le modèle, environ 320 pages selon OpenAI), laisse entrer d'un dossier",
        "Instructions personnalisées et mémoire : ce que ChatGPT garde entre deux conversations, et les réglages qui l'empêchent de retenir un sujet sensible",
        "Atelier projet : monter pour un dossier de l'équipe un projet partagé, avec ses instructions, ses fichiers de référence et une mémoire cantonnée au projet",
        "Analyse de données et recherche approfondie sur un fichier et une question de votre activité, puis contrôle des chiffres et des sources avant diffusion",
      ],
    },
    {
      day: 2,
      title: "Compétences, plugins et agents au service de l'équipe",
      items: [
        "Transformer une procédure du service en compétence, en la faisant rédiger par ChatGPT au fil d'un échange, la tester sur trois cas différents, puis la publier pour les collègues",
        "Inventaire de vos GPTs et migration vers les plugins avant le retrait annoncé pour le 11 décembre 2026",
        "Plugins et connecteurs vers Google Drive, SharePoint, Gmail ou Slack, avec les droits que l'administrateur accorde depuis la console",
        "Agent d'espace de travail : rôle, déclencheur, étapes, essai sur des cas pièges, puis suivi des crédits consommés",
        "ChatGPT dans le traitement de texte, le tableur et l'outil de présentation de Microsoft (Word, Excel, PowerPoint), et visuels produits avec ChatGPT Images 2.5, conformes à votre charte graphique",
        "Cadre d'usage : charte, relecture par une personne de tout texte qui engage la société, l'AI Act et ce que son article 4 attend de l'employeur, transparence des contenus publiés",
        "Plan d'action sur trente jours : un usage prioritaire par personne, un référent ChatGPT et un point d'étape pour relever le temps gagné",
      ],
    },
  ],
  faq: [
    {
      q: "Qu'apprend-on pendant une formation ChatGPT en entreprise ?",
      a: "Vos équipes apprennent à confier à ChatGPT des tâches de leur poste et à contrôler le résultat. Le premier jour pose le cadre (compte, réglages, données) et la méthode de demande, puis chacun monte un projet sur un dossier qu'il traite cette semaine. Le second jour passe aux compétences, aux plugins, aux agents et aux extensions de ChatGPT pour la bureautique de Microsoft. Chaque participant repart avec un projet, une compétence testée et un plan à 30 jours. Aucune connaissance technique n'est demandée : savoir rédiger un courriel suffit pour suivre.",
    },
    {
      q: 'Quel budget prévoir pour une formation ChatGPT, et qui peut la financer ?',
      a: "Chaque jour de formation coûte 1 980 € HT, avec douze stagiaires comme avec une seule personne. Pour deux jours, le total atteint 3 960 € HT, ce qui revient à 330 € HT par stagiaire dans un groupe complet. Masteria est certifié Qualiopi dans la catégorie actions de formation : en France, l'OPCO compétent pour votre secteur peut prendre ces deux jours en charge, selon ses critères et ses fonds disponibles. Programme, convention et attestations, les pièces de la demande se préparent avec nous en amont. À Genève et à Bruxelles, faute d'OPCO, nous établissons un devis en euros HT.",
    },
    {
      q: 'Faut-il un abonnement ChatGPT Business pour suivre la formation ?',
      a: "Non, mais l'offre souscrite change le contenu des ateliers. Les fonctions d'équipe (partage de projets, compétences, agents, console d'administration) demandent Business, Enterprise ou Edu. ChatGPT Business est, depuis août 2025, le nom de l'ancienne offre Team ; il faut au moins deux sièges pour l'ouvrir. Si vos équipes travaillent sur Plus ou sur des comptes gratuits, la session porte sur la méthode, les réglages de données et les projets individuels, et elle vous aide à décider de l'offre à retenir. Le cadrage précise ce que chaque atelier exige, pour que personne ne découvre en séance une fonction absente de son compte.",
    },
    {
      q: 'OpenAI entraîne-t-il ses modèles sur nos échanges avec ChatGPT ?',
      a: "Sur Business, Enterprise et Edu, vos conversations et vos fichiers ne nourrissent pas les modèles d'OpenAI, sans réglage à faire. Sur Free, Go, Plus et Pro, ils peuvent y servir tant que l'utilisateur n'a pas coupé le réglage. L'hébergement diffère aussi. Enterprise et Edu peuvent, pour les clients éligibles, garder en Europe le stockage et le calcul des réponses. Business stocke les données au repos en Europe, avec un déploiement progressif et une copie provisoire aux États-Unis afin de détecter les abus. La formation en tire une règle simple : rien de confidentiel sur un compte personnel, et une liste écrite des pièces qui ne passent jamais par ChatGPT.",
    },
    {
      q: 'Que deviennent nos GPTs personnalisés ?',
      a: "OpenAI a annoncé leur retrait pour le 11 décembre 2026, sur toutes les offres. Chaque GPT se migre vers un plugin : ses consignes se transforment en compétence, ses documents de connaissance en fichiers de référence, et les applications connectées migrent avec lui. Les actions personnalisées, l'historique des conversations, les brouillons, les réglages de partage et le choix du modèle ne sont pas repris, et le plugin migré démarre en privé. Pendant la formation, l'équipe recense ses GPTs, garde ceux qui servent encore, reconstruit le premier sous forme de compétence et le teste avant de le partager.",
    },
    {
      q: 'Quels modèles ChatGPT utilise-t-on au 7 octobre 2026 ?',
      a: "Dans la conversation, les offres payantes répondent avec GPT-5.6 Sol, Free et Go avec GPT-5.6 Luna, et un curseur règle la profondeur de réflexion. GPT-6 Pro arrive peu à peu chez les abonnés Pro, Business et Enterprise. ChatGPT Work et Codex, l'agent de programmation d'OpenAI, disposent des modèles GPT-6, dont GPT-6.1 Sol présenté le 29 septembre 2026. Les images viennent de ChatGPT Images 2.5, disponible depuis le 8 septembre ; la vidéo a disparu avec la fermeture de Sora. Ces noms changent vite : la formation apprend à choisir un mode selon la tâche, un réflexe qui survit au modèle suivant.",
    },
    {
      q: 'Comment reconnaître une bonne formation ChatGPT ?',
      a: "Commencez par la date du programme. Une formation qui fait encore construire un GPT personnalisé, ouvrir Canvas ou générer une vidéo avec Sora s'appuie sur des fonctions retirées ou en fin de vie. Vérifiez ensuite que les ateliers se font sur vos documents et sur l'offre que vous payez, que chaque objectif se vérifie par une question précise, et que l'organisme détient la certification Qualiopi, sans laquelle les fonds de l'OPCO restent fermés. Demandez enfin qui anime. Chez Masteria, Mathias Nizan, le fondateur, anime lui-même ou confie la session à un formateur indépendant qu'il a choisi, et le support se prépare sur l'état de l'outil à la date de la formation.",
    },
    {
      q: "La formation ChatGPT traite-t-elle de l'AI Act ?",
      a: "Oui, sous l'angle de ce qui concerne un utilisateur de ChatGPT. Dans l'AI Act, l'article 4, en vigueur depuis février 2025, attend des entreprises qu'elles aident leurs salariés à bien maîtriser les outils d'IA qu'ils emploient. Le texte n'impose aucune attestation officielle : un registre interne des sessions suivies suffit à en garder trace. Son article 50, entré en application le 2 août 2026, oblige à signaler certains contenus produits par IA et diffusés au public. La formation aide aussi à classer vos usages : rédiger un courriel présente un risque minimal, trier des candidatures peut relever de la catégorie à haut risque, dont l'entrée en application a glissé au 2 décembre 2027.",
    },
    {
      q: 'La formation peut-elle se faire à distance ou en individuel ?',
      a: "Oui. La session a lieu dans vos locaux, qu'ils soient en France, dans un autre pays d'Europe, en Inde ou aux États-Unis, ou bien en classe virtuelle avec les mêmes ateliers. Le format individuel convient à un dirigeant, à une assistante de direction ou à un spécialiste qui préfère travailler ses dossiers en cours ; la journée y coûte le même prix qu'en groupe. À distance, chacun partage son écran pendant les ateliers, et le formateur reprend en direct les demandes qui ne donnent pas le résultat attendu.",
    },
  ],
}
