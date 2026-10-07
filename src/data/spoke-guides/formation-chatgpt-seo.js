// Contenu propre à /formation-chatgpt-seo (guide terrain, page propre). Rendu par SpokePage.
// Réécrit le 7 octobre 2026 à partir du guide du 28/09/2026, dont les faits Google (developers.google.com,
// support.google.com) et OpenAI (help.openai.com) avaient été vérifiés ce jour-là. Mises à jour du 07/10 :
// fiche de faits OpenAI (extension Excel ouverte à toutes les offres, retrait des GPTs vérifié à la main,
// fenêtre de contexte du mode réflexion), Baromètre du numérique 2026 (Crédoc pour l'Arcep).
export default {
  slug: 'formation-chatgpt-seo',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation ChatGPT SEO pour les équipes de référencement',
  metaTitle: 'Formation ChatGPT SEO : données, briefs, GEO | Masteria',
  metaDesc: "Formation ChatGPT SEO : exports Search Console analysés, pages non indexées diagnostiquées, briefs sur sources choisies, visibilité dans ChatGPT Search.",
  keywords: "formation ChatGPT SEO, ChatGPT référencement naturel, formation SEO IA, ChatGPT Search Console, GEO ChatGPT",
  resume: "La formation ChatGPT SEO s'étend sur deux jours, quatorze heures en tout, passées sur les exports, les pages et les concurrents de votre propre site. Responsables SEO, rédacteurs web et consultants d'agence la suivent en intra, à douze au plus, ou en tête-à-tête avec le formateur, chez vous ou en visioconférence. La journée vaut 1 980 € HT, et la certification Qualiopi de l'organisme permet d'adresser une demande à votre OPCO, qui tranche avec les critères de sa branche.",
  enBref: [
    { label: 'Formation', value: "ChatGPT au service du référencement : exports Search Console, pages explorées mais non indexées, briefs construits sur des concurrents choisis, robots d'OpenAI et trafic venu de ChatGPT" },
    { label: 'Durée', value: "Deux journées de sept heures, avec un intervalle possible pour lancer le premier audit sur votre site" },
    { label: 'Formats', value: "Équipe SEO ou agence en intra (douze participants au maximum), ou consultant seul ; dans vos bureaux ou par visioconférence" },
    { label: 'Tarif', value: "1 980 € HT par journée, ateliers préparés sur vos exports et vos pages" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; l'OPCO de votre entreprise se prononce selon les règles de sa branche" },
    { label: 'Prérequis', value: "Pratiquer la Search Console et un crawler ; un compte ChatGPT payant, Business de préférence pour partager projets et compétences" },
  ],
  intro: "Un référenceur passe ses semaines entre des exports, des briefs et des pages à reprendre. ChatGPT accélère ce travail à une condition : travailler sur vos données et sous des règles écrites, plutôt que sur sa mémoire du web. Cette formation part de vos exports Search Console, du texte de vos pages et des concurrents que vous désignez. Elle apprend à vos équipes à produire des pages que Google juge utiles, à éviter les volumes de recherche inventés, puis à régler et mesurer un canal devenu sérieux : les réponses de ChatGPT elles-mêmes.",
  prerequis: "Pratiquer la Search Console, un crawler et un outil de mots-clés ; un compte ChatGPT payant, Business de préférence",
  guide: {
    kicker: 'Guide terrain',
    h2: "ChatGPT fait avancer le SEO quand il travaille sur vos données, et devient lui-même un canal à mesurer",
    lead: "La tentation est connue : demander cinquante articles à ChatGPT et les publier. Google traite ce schéma comme du spam, quel que soit l'outil. Le gain se trouve ailleurs : croiser des exports que l'équipe n'ouvre jamais en entier, tenir une règle éditoriale sur des dizaines de pages, étudier des concurrents à partir de sources que vous choisissez. Il faut aussi garder la mesure du canal. En France, le Baromètre du numérique 2026 compte 59 % de personnes qui s'informent par un moteur de recherche, contre 28 % par une IA générative : les moteurs de recherche restent deux fois plus utilisés pour s'informer, et ChatGPT s'ajoute à eux sans les remplacer.",
    sections: [
      {
        h3: "Google sanctionne les pages fabriquées en série, avec ou sans IA",
        paras: [
          "Google a mis à jour le 28 août 2026 ses règles contre le spam, qui condamnent la fabrication de nombreuses pages dont le but premier est de manipuler le classement. Le premier exemple cité est l'IA générative utilisée pour produire des pages sans valeur pour l'internaute. Son guide sur les contenus générés par IA, révisé en décembre 2025, demande aussi de soigner les titres, les meta descriptions et les données structurées produits par automatisation.",
          "Le symptôme se lit dans la Search Console. Des pages bâties sur un même gabarit, qui ne diffèrent que par un nom de ville ou de métier, finissent souvent en « Explorée, actuellement non indexée » : Google les a lues et les a jugées redondantes. La règle suivie pendant les ateliers est simple. Chaque page doit porter au moins un élément introuvable ailleurs sur le site : une donnée propre, un cas traité, un avis d'expert signé.",
        ],
      },
      {
        h3: "Les exports de votre site comptent plus que la formulation du prompt",
        paras: [
          "L'analyse de données de ChatGPT ouvre un CSV ou un classeur d'environ 50 Mo au plus, écrit du code pour calculer, regrouper et tracer des graphiques, et laisse ce code lisible. Elle sert à rapprocher ce que vos outils séparent : le rapport Performances, la liste des pages non indexées, l'export du crawler. En mode réflexion, la fenêtre de contexte de Plus et de Business atteint 256 000 tokens, ces fragments de mots que le modèle lit, de quoi examiner d'un tenant le texte d'une rubrique entière.",
          "Deux limites de Google changent la méthode. L'export du rapport Performances depuis l'interface s'arrête à 1 000 lignes ; au-delà, l'API Search Console fournit jusqu'à 50 000 lignes par jour et par type de recherche. La Search Console a aussi ouvert à tous les sites, le 31 août 2026, un rapport dédié à l'IA générative : il dénombre les impressions de vos pages dans les Aperçus IA de Google comme dans son Mode IA, avec un détail par page, pays, date et appareil.",
        ],
      },
      {
        h3: "Un projet par site cloisonne les clients, une compétence par livrable fixe la méthode",
        paras: [
          "Un projet ChatGPT rassemble la charte éditoriale, les pages de référence et les règles de l'équipe pour toutes les conversations d'un même site. Sur Business, Enterprise et Edu, il accueille 40 fichiers. Réglez sa mémoire sur « Mémoire limitée au projet » : ses conversations n'iront plus puiser dans le reste de votre historique, et la charte d'un client d'agence ne déteint plus sur celle d'un autre. Un projet partagé bascule dans ce mode de lui-même.",
          "Les tâches qui reviennent (brief, audit de rubrique, réécriture de balises) deviennent des compétences, ces procédures écrites que ChatGPT applique quand la demande les appelle. On les crée en dialoguant avec ChatGPT, puis on les publie pour l'espace de travail. Les GPTs SEO bâtis ces dernières années ferment le 11 décembre 2026. Leur migration en plugin reprend les consignes et les fichiers ; les actions personnalisées, elles, sont à refaire.",
        ],
      },
      {
        h3: "La recherche approfondie étudie les concurrents que vous désignez",
        paras: [
          "La recherche approfondie se lance depuis le menu des outils. Dans la gestion des sites, vous restreignez la recherche à une liste de domaines, ou vous leur donnez la priorité tout en gardant le reste du web. Le plan de recherche se corrige avant le lancement, et le rapport sourcé s'enregistre au format Word, PDF ou Markdown.",
          "Elle lit des pages publiques et ne restitue aucune page de résultats Google. Positions, volumes de recherche et liens entrants restent l'affaire de votre outil SEO : confiez-lui ces chiffres sous forme d'export, elle les commentera sans en inventer d'autres.",
        ],
      },
      {
        h3: "Le robots.txt ouvre ou ferme ChatGPT Search, Google Analytics en mesure l'apport",
        paras: [
          "OpenAI fait tourner deux robots distincts. OAI-SearchBot alimente les réponses et les citations de ChatGPT Search : bloqué, il empêche vos pages d'y être résumées ou citées. GPTBot collecte des contenus pour l'entraînement des modèles, et le bloquer reste sans effet sur votre présence dans la recherche. Beaucoup de sites refusent tous les robots sauf Googlebot et se ferment ce canal sans le savoir.",
          "ChatGPT ajoute le paramètre utm_source=chatgpt.com aux liens qu'il envoie vers votre site. Un segment Google Analytics construit sur ce paramètre isole les visites venues de ChatGPT, page par page, et permet de suivre ce canal mois après mois.",
        ],
      },
    ],
    table: {
      caption: "Sept tâches SEO, l'outil de ChatGPT adapté et le point de contrôle",
      headers: ['Tâche', 'Fonction de ChatGPT', 'Point de contrôle'],
      rows: [
        ["Repérer les pages qui perdent des clics", "Export Performances par page, passé dans l'analyse de données", "Interface limitée à 1 000 lignes ; API Search Console pour un gros site"],
        ["Suivre la présence dans les Aperçus IA", "Export du rapport sur l'IA générative, rapproché du rapport classique", "Le rapport compte des impressions ; les visites se mesurent ailleurs"],
        ["Rédiger le brief d'un rédacteur", "Compétence « brief » publiée pour l'espace de travail", "Chiffres et citations vérifiés ; l'entretien avec l'expert reste à mener"],
        ["Étudier trois concurrents", "Recherche approfondie restreinte à leurs domaines", "Volumes et positions issus de votre outil SEO"],
        ["Réécrire titles et meta descriptions d'une rubrique", "Extension ChatGPT pour Excel ou classeur importé", "Longueurs et doublons recontrôlés dans le crawler"],
        ["Illustrer une page", "ChatGPT Images 2.5", "En e-commerce, images générées marquées comme le demande Google (métadonnées IPTC)"],
        ["Mesurer le trafic venu de ChatGPT", "Aucune : segment Google Analytics sur utm_source=chatgpt.com", "OAI-SearchBot autorisé dans le robots.txt"],
      ],
    },
    cas: {
      h3: "Cas pratique : comprendre pourquoi Google explore une rubrique sans l'indexer",
      contexte: "Prenons une responsable SEO d'une entreprise de services aux entreprises. Son site compte une rubrique de pages « service + ville » construites sur le même modèle, et la Search Console en range une bonne partie en « Explorée, actuellement non indexée ». Elle veut savoir quelles pages se ressemblent trop, et quoi écrire pour les distinguer.",
      etapes: [
        "Dans la Search Console, rapport Pages, exportez les URL « Explorée, actuellement non indexée », puis le rapport Performances par page sur trois mois.",
        "Avec le crawler de l'équipe, extrayez le texte principal de chaque page de la rubrique dans un tableau à deux colonnes : URL et contenu.",
        "Ouvrez un projet « Audit rubrique villes », réglez sa mémoire pour qu'elle reste cantonnée au projet et déposez-y les trois fichiers.",
        "Envoyez le prompt qui suit, mode réflexion activé, puis ouvrez côte à côte les trois paires de pages les plus proches pour contrôler le calcul.",
        "Faites rédiger par ChatGPT une compétence qui reprend la méthode, pour relancer le même audit chaque trimestre.",
      ],
      prompt: "Tu m'aides à auditer une rubrique de notre site que Google explore mais n'indexe pas.\n\nLe projet contient trois fichiers. Le premier liste les URL que la Search Console classe en « Explorée, actuellement non indexée ». Le deuxième est l'export du rapport Performances par page sur trois mois, avec clics et impressions. Le troisième contient le texte principal de chaque page de la rubrique, une ligne par URL.\n\nProcède dans cet ordre.\nD'abord, calcule avec l'analyse de données la similarité entre chaque page et sa voisine la plus proche, en découpant les textes en séquences de cinq mots. Donne pour chaque URL le pourcentage de séquences partagées et l'URL voisine.\nEnsuite, repère les paragraphes qui reviennent mot pour mot sur plus de cinq pages et cite chacun une fois.\nPuis, pour chaque page, liste ce qu'elle contient de propre : noms, chiffres, exemples, informations locales. Si elle n'a rien de propre, écris « rien ».\nEnfin, range les pages en trois groupes : à fusionner avec une autre, à réécrire, à laisser en l'état. Justifie chaque choix en une phrase qui cite les clics et les impressions du deuxième fichier.\n\nRends un tableau par groupe, puis un paragraphe sur les trois éléments à ajouter en priorité aux pages à réécrire.\nN'invente aucun volume de recherche ni aucune donnée absente des fichiers. Si un calcul te paraît fragile, dis-le.",
      resultat: "Vous obtenez un tableau de similarité par page, la liste des paragraphes dupliqués et un classement entre fusion, réécriture et statu quo, appuyé sur les clics mesurés. Vérifiez le calcul sur trois paires en lisant les pages : la mesure par séquences de mots reste une approximation, et Google ne publie aucun seuil. La décision de fusionner vous revient, avec les redirections et le maillage interne à reprendre.",
    },
    pieges: [
      {
        titre: "Des volumes de recherche sortis de nulle part",
        texte: "Interrogé sur le volume d'un mot-clé, ChatGPT peut répondre un chiffre plausible qui ne vient d'aucune donnée de Google. Les volumes entrent dans la conversation par un export de votre outil, et le prompt interdit d'en produire d'autres.",
      },
      {
        titre: "Le brief qui recopie les dix premiers résultats",
        texte: "Une synthèse du top 10 donne la moyenne de ce que Google possède déjà. Demandez ce qui manque aux pages classées, puis ajoutez ce que seule votre entreprise sait : chiffres internes, questions posées par vos clients.",
      },
      {
        titre: "Le GPT SEO qui s'arrête le 11 décembre",
        texte: "Un GPT de brief ou d'audit cesse de fonctionner à cette date. Migrez-le vers un plugin, testez-le sur des demandes connues, repartagez-le avec l'équipe et reconstruisez à part ses actions personnalisées.",
      },
      {
        titre: "Un robots.txt qui ferme ChatGPT Search",
        texte: "Une règle « Disallow » générale suivie d'une exception pour Googlebot bloque aussi OAI-SearchBot. Relisez le fichier avant de conclure que ChatGPT ignore votre site.",
      },
      {
        titre: "Les exports d'un client d'agence dans un compte personnel",
        texte: "Les échanges d'un compte gratuit ou Plus peuvent servir à entraîner les prochains modèles tant que l'option reste cochée. Une agence traite les données de ses clients dans un espace Business, exclu par défaut de cet usage.",
      },
    ],
  },
  audience: [
    {
      title: "Responsables SEO et acquisition",
      desc: "Vous pilotez un site, ses exports et ses priorités de réécriture. Vous apprenez à faire parler vos données dans ChatGPT, à justifier chaque décision par une ligne d'export et à tenir une règle éditoriale sur des dizaines de pages.",
    },
    {
      title: "Rédacteurs web et chargés de contenu",
      desc: "Vous écrivez et reprenez des pages à partir de briefs. Vous travaillez dans un projet qui réunit la charte, les pages de référence et les données que seule l'entreprise possède.",
    },
    {
      title: "Consultants SEO et agences",
      desc: "Vous gérez plusieurs sites clients. Vous apprenez à cloisonner chaque client dans son projet, à partager vos méthodes en compétences et à rendre des audits dont chaque chiffre se retrouve dans un fichier.",
    },
  ],
  useCases: [
    { icon: '📊', title: "Exports Search Console croisés", desc: "Rapport Performances, pages non indexées et rapport sur l'IA générative rapprochés pour repérer les pages qui perdent des clics." },
    { icon: '🔍', title: "Rubriques trop uniformes diagnostiquées", desc: "La part de texte que chaque page partage avec ses voisines, puis un tri entre fusion, réécriture et statu quo." },
    { icon: '📋', title: "Briefs nourris par les concurrents", desc: "Recherche approfondie limitée aux domaines choisis, questions laissées sans réponse, données internes ajoutées au brief." },
    { icon: '🏷', title: "Balises réécrites par rubrique", desc: "Titles et meta descriptions repris dans un classeur, puis longueurs et doublons recontrôlés dans le crawler." },
    { icon: '✍', title: "Pages faibles réécrites", desc: "Une page reprise avec les règles du projet, des éléments propres à l'entreprise et des images marquées quand il le faut." },
    { icon: '🔗', title: "Canal ChatGPT Search ouvert et mesuré", desc: "OAI-SearchBot autorisé dans le robots.txt, visites marquées utm_source=chatgpt.com suivies dans Google Analytics." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Faire parler vos exports Search Console",
      duration: '1h30',
      description: "Déposer vos exports dans ChatGPT, les faire traiter par du code et obtenir des chiffres que l'on peut recontrôler.",
      items: [
        "Exporter le rapport Performances par page et par requête, en connaissant la limite de 1 000 lignes de l'interface",
        "Recourir à l'API Search Console quand le site dépasse cette limite",
        "Croiser clics, impressions et positions, graphiques à l'appui",
        "Lire le code produit et recalculer trois lignes à la main",
      ],
      exercise: "Sur l'export Performances de votre site pour les trois derniers mois, vous isolez les vingt pages qui perdent le plus de clics et formulez une hypothèse pour chacune.",
    },
    {
      day: 1,
      title: "Module 2 · Repérer les pages que Google laisse de côté",
      duration: '2h',
      description: "Comprendre ce que Google sanctionne dans les pages produites en série, puis diagnostiquer une rubrique trop uniforme.",
      items: [
        "Règles anti-spam de Google (28 août 2026) et guide sur les contenus générés par IA",
        "Export des URL « Explorée, actuellement non indexée » depuis le rapport Pages",
        "Similarité entre pages voisines, calculée sur le texte extrait par le crawler",
        "Trois groupes de pages : fusionner, réécrire, garder",
      ],
      exercise: "Vous diagnostiquez une rubrique de votre site construite sur un même modèle et produisez le tableau fusion, réécriture ou statu quo, justifié par les clics.",
    },
    {
      day: 1,
      title: "Module 3 · Construire un brief sur ce qui manque aux concurrents",
      duration: '2h',
      description: "Utiliser la recherche approfondie sur des sources choisies, puis enrichir le brief de vos données.",
      items: [
        "Restreindre la recherche approfondie à des domaines désignés, ou leur donner la priorité",
        "Corriger le plan de recherche avant le lancement",
        "Relever les questions que les pages concurrentes laissent sans réponse",
        "Télécharger le rapport et le transformer en brief pour un rédacteur",
      ],
      exercise: "Vous produisez le brief d'une page de votre site face à trois concurrents que vous désignez, avec au moins deux éléments internes introuvables chez eux.",
    },
    {
      day: 1,
      title: "Module 4 · Installer le projet SEO de votre site",
      duration: '1h30',
      description: "Poser dans un projet ChatGPT la charte, les pages de référence et les règles de l'équipe, et sécuriser les données.",
      items: [
        "Compte d'entreprise, réglage d'entraînement et données de clients d'agence",
        "Mémoire limitée au projet, instructions : ton, structure, affirmations interdites",
        "Fichiers de référence et liens vers des documents Google Drive",
        "Partage en lecture ou en modification selon le rôle",
      ],
      exercise: "Vous montez le projet de votre site avec la charte éditoriale, cinq pages qui font référence et la liste des affirmations que l'équipe s'interdit.",
    },
    {
      day: 2,
      title: "Module 5 · Réécrire titles, meta descriptions et données structurées",
      duration: '1h30',
      description: "Traiter une rubrique entière dans un classeur, sans lâcher la qualité.",
      items: [
        "L'extension ChatGPT pour Excel, ouverte à toutes les offres, ou un classeur importé",
        "Règles de longueur, de marque et de mot-clé principal, page par page",
        "Signalement des doublons et des balises trop proches",
        "Validation du balisage avec le test des résultats enrichis de Google",
      ],
      exercise: "Vous réécrivez les titles et les meta descriptions d'une rubrique de votre site, puis vérifiez le résultat dans votre crawler.",
    },
    {
      day: 2,
      title: "Module 6 · Réécrire une page qui mérite son index",
      duration: '2h',
      description: "Reprendre une page faible avec les règles du projet et des éléments propres à l'entreprise.",
      items: [
        "Partir du diagnostic du module 2 et des questions sans réponse du module 3",
        "Plan proposé, puis écriture section par section avec vos données",
        "Images produites avec ChatGPT Images 2.5 et textes alternatifs utiles",
        "Marquage des images générées sur les fiches produits, comme Google le demande en e-commerce",
      ],
      exercise: "Vous réécrivez une page de votre site classée « Explorée, actuellement non indexée » et la comparez à sa voisine la plus proche.",
    },
    {
      day: 2,
      title: "Module 7 · Faire de vos méthodes des compétences partagées",
      duration: '2h',
      description: "Rendre les audits et les briefs reproductibles par toute l'équipe.",
      items: [
        "Demander à ChatGPT d'écrire la compétence en répondant à ses questions, puis la publier pour l'espace de travail",
        "La tester sur une demande dont on connaît la bonne réponse",
        "Migrer un GPT SEO existant en plugin avant le 11 décembre 2026",
        "Programmer un audit récurrent avec une tâche planifiée",
      ],
      exercise: "Vous transformez votre méthode de brief ou d'audit en compétence, la partagez et la faites tester par un collègue sur une autre page de votre site.",
    },
    {
      day: 2,
      title: "Module 8 · Ouvrir le canal ChatGPT Search et fixer les règles de l'équipe",
      duration: '1h30',
      description: "Régler l'accès des robots d'OpenAI, mesurer le trafic et écrire la charte d'usage.",
      items: [
        "OAI-SearchBot, qui sert la recherche, et GPTBot, qui collecte pour l'entraînement",
        "Relecture du robots.txt, et noindex pour les pages à tenir à l'écart",
        "Segment Google Analytics sur utm_source=chatgpt.com",
        "Règles de l'équipe : aucun volume inventé, relecture avant publication, formation tracée comme le veut l'AI Act (art. 4)",
      ],
      exercise: "Vous auditez le robots.txt de votre site, créez le segment de trafic ChatGPT, puis fixez par écrit ce que votre équipe SEO s'autorise et s'interdit avec ChatGPT.",
    },
  ],
  objectives: [
    "Le participant sait analyser un export Search Console dans ChatGPT et justifier chaque conclusion par une ligne du fichier.",
    "Le participant sait diagnostiquer une rubrique de pages trop semblables et classer chaque page entre fusion, réécriture et statu quo.",
    "Le participant sait rédiger un brief à partir d'une recherche approfondie limitée à des domaines concurrents choisis.",
    "Le participant sait configurer le projet ChatGPT d'un site : instructions, fichiers, mémoire limitée au projet.",
    "Le participant sait créer et partager une compétence qui reproduit une méthode d'audit ou de brief de l'équipe.",
    "Le participant sait vérifier l'accès d'OAI-SearchBot au site et mesurer dans Google Analytics le trafic venu de ChatGPT.",
  ],
  faq: [
    {
      q: "Un texte écrit avec ChatGPT peut-il bien se classer dans Google ?",
      a: "Google regarde ce que la page apporte à son lecteur, et non la manière dont elle a été écrite. Sa politique anti-spam vise la génération de nombreuses pages dans le but principal de manipuler le classement. Une page relue, enrichie de données propres et utile à celui qui la lit n'entre pas dans cette catégorie. Google recommande même d'expliquer comment un contenu a été produit quand cette information aide le lecteur à le juger.",
    },
    {
      q: "ChatGPT peut-il lire nos données Search Console sans export ?",
      a: "Nous travaillons à partir des exports : rapport Performances, liste des pages indexées ou non, rapport sur l'IA générative. Un fichier Google Sheets rangé dans Google Drive peut aussi devenir une source du projet grâce à un lien. Pour un site qui dépasse les 1 000 lignes de l'interface, l'API Search Console alimente un tableur que l'on dépose ensuite dans ChatGPT.",
    },
    {
      q: "Comment apparaître dans les réponses de ChatGPT Search ?",
      a: "Toute page publique peut y figurer si OAI-SearchBot a le droit de la lire. Vérifiez votre robots.txt, puis suivez les visites grâce au paramètre utm_source=chatgpt.com que ChatGPT ajoute à ses liens. Pour qu'une page n'y apparaisse pas du tout, OpenAI conseille la balise noindex, que son robot doit pouvoir lire. Le reste tient aux mêmes qualités que pour Google : une page claire, sourcée, qui répond à une question précise.",
    },
    {
      q: "Faut-il bloquer GPTBot ?",
      a: "C'est une décision indépendante de votre visibilité dans ChatGPT Search, qui se règle en quelques lignes du robots.txt. GPTBot collecte des contenus pour l'entraînement des modèles, OAI-SearchBot sert la recherche : vous pouvez refuser le premier et accepter le second. La formation aborde ce choix avec les critères juridiques et commerciaux de votre entreprise, par exemple pour un éditeur dont les contenus constituent le produit vendu.",
    },
    {
      q: "Que deviennent les GPTs SEO que nous avons créés ?",
      a: "Leur fin est fixée au 11 décembre 2026, ou au 11 février 2027 si OpenAI a accordé un report à votre espace Enterprise. La migration part de la dernière version publiée du GPT : ses consignes forment une compétence, ses documents passent en fichiers de référence. Rien n'est prévu pour les actions personnalisées, et le plugin obtenu reste privé jusqu'à ce que quelqu'un le partage. Le module 7 migre avec vous le GPT le plus utilisé de l'équipe.",
    },
    {
      q: "ChatGPT remplace-t-il Semrush, Ahrefs ou notre crawler ?",
      a: "Non. ChatGPT ne dispose ni des volumes de recherche, ni des positions, ni de l'index de liens de ces outils. Il analyse leurs exports, croise des sources et rédige. La formation montre comment faire entrer ces données dans un projet et comment empêcher ChatGPT de combler les trous par des chiffres inventés, grâce à une consigne écrite dans les instructions et vérifiée à chaque livrable.",
    },
    {
      q: "Quelle offre ChatGPT choisir pour une équipe SEO ?",
      a: "ChatGPT Business couvre l'essentiel : projets partagés de 40 fichiers, compétences publiables pour l'équipe, recherche approfondie, contenus tenus par défaut hors de l'entraînement. Une agence attribue à chaque client son propre projet, dont la mémoire reste cloisonnée. Pour apprendre la méthode, Plus convient, avec un projet de 25 fichiers et sans partage. Nous vérifions avec votre administrateur, avant la session, que compétences et partage sont activés.",
    },
    {
      q: "Qui peut financer ces deux jours pour une équipe SEO ?",
      a: "La certification Qualiopi de Masteria couvre ses actions de formation : l'OPCO de votre entreprise peut donc examiner une prise en charge, selon sa convention collective et ses fonds disponibles. Une journée intra se facture 1 980 € HT, pour trois personnes comme pour douze. Nous fournissons le programme détaillé, dont les objectifs sont reliés à leur évaluation, et la convention à joindre au dossier, déposé avant le premier jour.",
    },
  ],
  tarifs: {
    titre: "Ce que coûtent deux jours de formation ChatGPT pour une équipe SEO",
    paras: [
      "Ce tarif inclut un travail préalable sur votre site. Votre équipe transmet en amont ses exports Search Console récents, un crawl de la rubrique à diagnostiquer et la liste de trois concurrents ; les ateliers s'appuient ensuite sur ces fichiers. Chacun repart avec le projet de son site, une compétence testée et le segment de trafic ChatGPT en place.",
      "Prenons une agence qui inscrit son responsable SEO, trois consultants et deux rédacteurs, soit six personnes. L'intra de deux jours lui coûte 3 960 € HT, soit 660 € HT par tête. Un consultant indépendant formé seul règle lui aussi 1 980 € HT par jour, en travaillant sur ses propres clients. L'OPCO de votre branche se prononce ensuite sur sa participation.",
    ],
  },
  apres: {
    titre: "Après la formation, des outils SEO construits sur vos données",
    texte: "Une fois la méthode installée, certaines équipes veulent automatiser : un agent qui relit chaque mois les exports de la Search Console et signale les pages en recul, une compétence qui produit les briefs au format de vos rédacteurs, un tableau de bord qui suit les visites venues de ChatGPT et des autres moteurs génératifs. Masteria bâtit ces outils à vos côtés, sur vos propres exports et selon vos règles. Le prix de ce chantier se fixe au forfait après cadrage. Conseil et développement n'étant pas des actions de formation, ce travail n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Donnez-nous l'adresse du site et le nom de trois concurrents : les ateliers se préparent sur vos exports.",
    fin: {
      titre: "Préparons la formation ChatGPT SEO de votre équipe",
      texte: "Indiquez-nous le site concerné, la taille de l'équipe (référenceurs, rédacteurs, consultants) et l'offre ChatGPT souscrite. Un programme bâti sur vos données vous parvient ensuite, avec des dates de session.",
    },
  },
  liensAssocies: [
    { label: "Formation IA pour le SEO, tous assistants confondus", href: '/formation-ia-seo' },
    { label: "Mesurer sa visibilité dans les IA (audit GEO)", href: '/audit-geo-ia' },
    { label: "Écrire avec ChatGPT : la journée de rédaction", href: '/formation-chatgpt-redaction' },
    { label: "Audit SEO mené avec l'IA", href: '/audit-seo-ia' },
    { label: "Agence SEO spécialisée en IA", href: '/agence-seo-ia' },
  ],
  sources: [
    { name: "Google Search Central (règles anti-spam, mise à jour du 28 août 2026)", url: 'https://developers.google.com/search/docs/essentials/spam-policies?hl=fr' },
    { name: "Google Search Central (contenus générés par IA, décembre 2025)", url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content?hl=fr' },
    { name: "Search Console : limite de 1 000 lignes à l'export", url: 'https://support.google.com/webmasters/answer/12919797?hl=fr' },
    { name: "Search Console : impressions dans l'IA générative", url: 'https://support.google.com/webmasters/answer/16984139?hl=fr' },
    { name: "Arcep et Crédoc, Baromètre du numérique 2026", url: 'https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/barometre-du-numerique/le-barometre-du-numerique-edition-2026.html' },
    { name: "OpenAI, robots d'exploration OAI-SearchBot et GPTBot", url: 'https://developers.openai.com/api/docs/bots' },
    { name: "OpenAI, questions des éditeurs de sites (utm_source, noindex)", url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq' },
    { name: "OpenAI, recherche approfondie et sites prioritaires", url: 'https://help.openai.com/fr-fr/articles/10500283-deep-research-in-chatgpt' },
    { name: "OpenAI, fichiers de données analysés par du code", url: 'https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt' },
    { name: "OpenAI, compétences créées et publiées dans un espace", url: 'https://help.openai.com/fr-fr/articles/20001066-skills-in-chatgpt' },
    { name: "OpenAI, fin des GPTs personnalisés et passage aux plugins", url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
  ],
}
