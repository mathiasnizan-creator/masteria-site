// Contenu propre à /formation-ia-analyse-donnees (guide terrain). Rendu par SpokePage.
// Formation de deux jours (la fiche de seo-pages.js n'a pas de champ duration : 2 jours).
// Fusionne ce qui était juste dans l'article de blog formation-analyse-donnees-ia-excel-chatgpt.
export default {
  slug: 'formation-ia-analyse-donnees',
  updatedAt: '2026-10-03',
  updatedLabel: 'Programme à jour · octobre 2026',
  metaDesc: "Formation analyse de données avec l'IA (2 jours) : Copilot dans Excel, ChatGPT et Claude pour Excel, vérification des chiffres, confidentialité. Qualiopi.",
  intro: "Dans Excel, Copilot construit un tableau croisé à partir d'une phrase et Claude retrace le calcul d'une cellule dans un classeur hérité. Dans ChatGPT, un export de ventes devient une analyse statistique dont vous pouvez relire le code. Ces outils vont vite et se trompent parfois sans le signaler. Pendant deux jours, vous apprenez à préparer vos fichiers et à vérifier chaque chiffre avant qu'il parte en réunion, en choisissant l'outil qui convient à chaque tâche. Chaque exercice se fait sur un export que vous traitez déjà au bureau.",
  guide: {
    kicker: "Guide terrain données",
    h2: "L'IA calcule en quelques secondes, et la fiabilité du chiffre se décide avant et après ce calcul",
    lead: "Copilot, Claude et ChatGPT lisent un tableur, le résument et en tirent des graphiques. Ils diffèrent par l'endroit où le calcul se fait. Copilot et Claude agissent dans votre classeur avec les fonctions d'Excel ; ChatGPT travaille sur une copie du fichier, avec du code qu'il écrit lui-même quand le calcul l'exige. Ce lieu du calcul décide de ce que vous devez vérifier. Il décide aussi de ce que voient vos collègues et des données qui quittent l'entreprise. Quel que soit l'outil, un tableau mal construit produit des résultats faux, présentés avec la même assurance que les bons.",
    sections: [
      {
        h3: "Le lieu du calcul change ce que vous devez vérifier",
        paras: [
          "Copilot dans Excel modifie le classeur ouvert avec les outils d'Excel : tableaux croisés dynamiques (des tableaux qui regroupent et totalisent les lignes par catégorie), formules, graphiques, mises en forme conditionnelles. Il travaille selon trois modes. En édition, il agit dans le fichier et son raisonnement défile dans le volet. En plan, il soumet sa démarche avant d'agir. En conversation, il analyse sans rien modifier, et c'est le mode à choisir pour explorer un fichier partagé.",
          "Claude pour Excel est un complément (un module qu'on installe dans Excel) disponible avec les offres Pro, Max, Team et Enterprise de Claude. Il répond avec des citations qui renvoient aux cellules, modifie une hypothèse en conservant les liens entre formules et prévient avant d'écraser des données. Anthropic le déconseille pour des calculs critiques d'audit qui n'ont pas été vérifiés, et il ne gère ni les tables de données (l'outil d'analyse de scénarios d'Excel) ni les macros.",
          "ChatGPT procède autrement. Il charge une copie du fichier dans un environnement Python (le langage de programmation dans lequel il rédige ses calculs), exécute ces calculs, puis affiche un tableau ou un graphique. Votre classeur d'origine ne change pas, et le code reste lisible : OpenAI recommande de relire le code, les résultats et les hypothèses avant de s'y fier. Cet environnement n'accède pas à internet. Toute donnée utile doit donc se trouver dans le fichier ou dans une source connectée, comme OneDrive ou SharePoint.",
        ],
      },
      {
        h3: "La structure du fichier décide de la justesse des réponses",
        paras: [
          "OpenAI décrit le fichier que ChatGPT lit le mieux : des en-têtes explicites sur la première ligne, une ligne par enregistrement, des noms de colonnes en langage courant. Le fichier ne doit mêler ni plusieurs tableaux sans rapport sur une même feuille, ni des lignes ou colonnes vides qui coupent les données, ni des valeurs enfermées dans une image. Microsoft donne le même conseil pour Copilot : nommer dans la demande les colonnes à analyser rend la réponse plus juste.",
          "Les exports d'ERP (le progiciel qui gère commandes, stocks et factures) et de CRM (le fichier clients) cachent des défauts qui reviennent d'un mois à l'autre : lignes de sous-total au milieu des données, dates enregistrées comme du texte, montants suivis du symbole de la devise, codes produits privés de leurs zéros initiaux. Le premier exercice de la formation consiste à repérer ces défauts dans vos propres exports et à les faire corriger par l'IA sur un onglet séparé, l'original restant intact.",
          "Les exercices partent des fichiers de l'entreprise. Pour un groupe international de l'emballage, Masteria a préparé treize ateliers à l'intention de ses managers pilotes ; quatre d'entre eux portaient sur des classeurs Excel du groupe, jusqu'à 56 000 lignes : l'analyse des prix, cinq années d'activité, l'allocation des coûts et une base RH.",
        ],
      },
      {
        h3: "Un chiffre produit par l'IA se vérifie avant de partir en réunion",
        paras: [
          "La FAQ de Microsoft le dit sans détour : Copilot dans Excel peut se tromper ou mal interpréter une information, et l'éditeur déconseille de s'y fier pour des décisions sensibles en finance, en droit ou en santé. La formation installe un contrôle en quatre gestes : recompter les lignes traitées, recalculer un total avec SOMME ou un tableau croisé fait à la main, contrôler les filtres actifs, puis demander à l'outil la méthode appliquée.",
          "Chaque outil laisse une trace à contrôler. ChatGPT montre le code exécuté. Quand Copilot classe des commentaires par thème, un numéro en exposant renvoie aux données qu'il a lues. Claude pour Excel cite les cellules d'où vient sa réponse. Dans un classeur partagé, Copilot résume aussi l'historique des modifications, qu'Excel conserve jusqu'à 365 jours, ce qui permet de savoir qui a changé une valeur, et quand.",
          "Une mission de conseil menée par Masteria pour un distributeur de solutions photovoltaïques applique la même règle à un flux quotidien. L'assistant conçu pour transformer les fichiers envoyés par les entrepôts en fichier prêt à importer dans Odoo, l'ERP de l'entreprise, contrôle les totaux au passage, et une personne valide avant l'import. L'IA prépare, un humain vérifie et signe : la règle vaut pour toute analyse destinée à un décideur.",
        ],
      },
      {
        h3: "L'offre utilisée fixe ce que deviennent vos fichiers",
        paras: [
          "Sur les offres individuelles de ChatGPT, OpenAI peut se servir de vos conversations pour améliorer ses modèles, sauf si vous désactivez ce partage dans les contrôles de données. Un avis donné avec le pouce levé ou baissé peut faire entrer toute la conversation dans l'entraînement, même après désactivation. Sur ChatGPT Business, Enterprise et Edu, le réglage par défaut exclut les échanges de l'entraînement.",
          "Avec un compte professionnel Microsoft, vos demandes, les réponses de Copilot et les documents qu'il consulte n'alimentent pas l'entraînement des modèles de fondation (les grands modèles sur lesquels Copilot s'appuie). Le trafic des utilisateurs européens reste à l'intérieur du périmètre de données que Microsoft réserve à l'Union européenne. Les modèles Claude d'Anthropic, que votre administrateur a la possibilité d'ajouter à Copilot, sortent de ce périmètre : demandez à votre service informatique ce qu'il a retenu.",
          "Claude pour Excel efface les entrées et les sorties de ses serveurs sous 30 jours, hors cas prévus par Anthropic, et garde l'historique des conversations dans votre navigateur ; il n'applique pas les durées de conservation personnalisées de votre organisation. Anthropic signale aussi un risque propre aux fichiers venus de l'extérieur : un classeur peut cacher des instructions, ce qu'on appelle une injection de prompt, qui poussent l'assistant à extraire ou modifier des données. Pour des données de clients ou de salariés, le choix de l'outil se fait avec votre délégué à la protection des données avant la formation.",
        ],
      },
    ],
    table: {
      caption: "Quel outil pour quelle tâche d'analyse, et le contrôle qui l'accompagne",
      headers: ["Tâche", "Outil le plus direct", "Contrôle avant diffusion"],
      rows: [
        ["Nettoyer un export d'ERP : doublons, dates en texte, sous-totaux", "Copilot dans Excel en mode plan, sur un onglet séparé", "Comparer le nombre de lignes avant et après"],
        ["Croiser le chiffre d'affaires par mois et par région", "Copilot dans Excel : tableau croisé dynamique", "Refaire un total avec SOMME.SI.ENS"],
        ["Comprendre un classeur hérité aux formules imbriquées", "Claude pour Excel, avec les citations des cellules", "Ouvrir chaque cellule citée"],
        ["Tester une tendance ou une corrélation", "ChatGPT, analyse en Python", "Lire le code et la méthode retenue"],
        ["Classer 600 commentaires clients par thème", "Copilot dans Excel : thèmes et sentiment dans une nouvelle colonne", "Relire un échantillon d'une trentaine de lignes"],
        ["Interroger un rapport Power BI", "Copilot dans Excel, si l'administrateur a ouvert l'accès aux données Fabric (la plateforme de données de Microsoft qui inclut Power BI)", "Dater l'import, qui ne s'actualise pas"],
        ["Rédiger la note de synthèse", "ChatGPT ou Claude, à partir des seuls tableaux validés", "Retrouver chaque chiffre de la note dans un tableau"],
      ],
    },
    cas: {
      h3: "Mise en situation : expliquer le recul de la marge d'un trimestre à l'autre",
      contexte: "Prenons une contrôleuse de gestion dans une entreprise de négoce de 140 salariés. Elle dispose d'un export de l'ERP de 18 000 lignes couvrant les deux derniers trimestres : date, client, région, famille de produits, quantité, chiffre d'affaires hors taxes, coût d'achat. La direction veut comprendre pourquoi le taux de marge brute a reculé de deux points, et le comité se réunit jeudi. L'entreprise utilise ChatGPT Business et Copilot dans Excel. Ce cas est construit pour la formation.",
      etapes: [
        "Elle enregistre une copie de l'export en .xlsx, supprime les lignes de sous-total, convertit les dates stockées en texte et vérifie que chaque colonne porte un en-tête explicite.",
        "Elle dépose la copie dans ChatGPT et colle le prompt ci-dessous, qui fait lister les anomalies avant tout calcul.",
        "Elle lit le code et la liste des anomalies, puis corrige dans Excel les lignes signalées, par exemple des coûts manquants ou des factures en double.",
        "Dans le classeur, elle demande à Copilot un tableau croisé du taux de marge par famille et par région, et compare ses totaux avec ceux de ChatGPT : un écart signale une erreur d'un côté ou de l'autre.",
        "Elle rédige une note d'une page qui ne garde que les chiffres retrouvés dans les deux calculs, et indique pour chacun le tableau qui le porte.",
      ],
      prompt: "Tu es analyste financier. Le fichier joint contient les ventes des deux derniers trimestres ; chaque ligne correspond à une ligne de facture : date, client, région, famille de produits, quantité, chiffre d'affaires hors taxes, coût d'achat.\n\nAvant tout calcul :\n1. Indique le nombre de lignes lues et la période couverte.\n2. Liste les anomalies : doublons, coûts manquants ou nuls, marges négatives, dates hors période. Donne le nombre de lignes concernées pour chacune et ne corrige rien.\n\nEnsuite, sur les lignes sans anomalie :\n3. Calcule le taux de marge brute de chaque trimestre.\n4. Décompose l'écart de taux de marge par famille de produits et par région, dans un tableau trié du plus fort recul au plus faible.\n5. Sépare l'effet des volumes, l'effet des prix de vente, l'effet des coûts d'achat et l'effet du mélange entre familles, puis explique ta méthode en quelques phrases.\n6. Trace un graphique en barres de l'écart par famille.\n\nMontre le code utilisé. N'invente aucune valeur et n'avance aucune cause qui ne se lit pas dans les données.",
      resultat: "Vous obtenez la liste chiffrée des anomalies, les deux taux de marge, le tableau de l'écart par famille et par région, et un graphique. La décomposition entre volumes, prix, coûts et mélange reste la partie fragile : selon la méthode retenue, un même écart peut changer de case. Faites valider la méthode par la direction financière avant de la reprendre chaque trimestre. Le contrôle croisé avec le tableau de Copilot attrape les erreurs de filtre et de périmètre ; votre connaissance du métier reste le dernier contrôle.",
    },
    pieges: [
      {
        titre: "Un total juste sur un fichier lu en partie",
        texte: "Un fichier peut se charger dans ChatGPT et rester trop volumineux ou trop complexe pour être analysé en entier. OpenAI conseille alors de viser des feuilles, des lignes ou des colonnes précises, ou de découper le fichier. Demandez toujours le nombre de lignes lues et comparez-le à celui de l'export.",
      },
      {
        titre: "Un tableau scanné pris pour une source",
        texte: "OpenAI prévient que les valeurs d'un PDF scanné ou d'une image peuvent être mal extraites. Quand le chiffre exact compte, repartez du fichier Excel ou CSV d'origine, quitte à le redemander au service qui l'a produit.",
      },
      {
        titre: "La corrélation présentée comme une cause",
        texte: "Un assistant d'IA repère vite deux courbes qui montent ensemble et rédige volontiers une explication. Le lien de cause à effet demande une preuve tirée du métier. Écrivez dans la note ce que les données montrent, et présentez le reste comme une hypothèse à vérifier.",
      },
      {
        titre: "Le classeur d'un fournisseur qui donne des ordres",
        texte: "Un fichier venu de l'extérieur peut dissimuler des consignes adressées à l'assistant. Les tests d'Anthropic ont montré que Claude pour Excel pouvait alors être poussé à extraire ou modifier des données. Copiez les seules données utiles dans un classeur propre et relisez chaque confirmation que l'outil vous soumet avant de valider.",
      },
      {
        titre: "Le fichier client déposé dans un compte personnel",
        texte: "Un export de ventes envoyé dans un ChatGPT gratuit ou Plus suit les règles des offres individuelles, dont l'entraînement des modèles si l'option reste active. Pour des données de clients ou de salariés, passez par l'offre professionnelle retenue par l'entreprise et retirez les colonnes inutiles à l'analyse.",
      },
    ],
  },
  audience: [
    { title: "Contrôleurs de gestion et équipes financières", desc: "Vous produisez des reportings mensuels et des analyses d'écarts à partir d'exports d'ERP. Vous voulez gagner du temps sur le nettoyage et garder une méthode de contrôle que vous pouvez défendre devant la direction." },
    { title: "Marketing, CRM et chargés d'études", desc: "Vous croisez des données de campagnes, de ventes et d'enquêtes. Vous voulez tester une tendance, classer des verbatims et transformer un tableau en recommandation écrite." },
    { title: "Commerciaux et responsables d'agence qui pilotent un portefeuille", desc: "Vous suivez un chiffre d'affaires par client, par produit ou par zone. Vous voulez des tableaux croisés et des graphiques lisibles en quelques minutes, et repérer les clients dont les commandes ralentissent." },
    { title: "Chefs de projet et fonctions support", desc: "Vous tenez des tableaux de suivi, de budget ou d'indicateurs agrégés sans être analyste. Vous voulez interroger vos fichiers en français et savoir quelles données peuvent quitter l'entreprise." },
  ],
  useCases: [
    { icon: '🧹', title: "Exports nettoyés avant l'analyse", desc: "Sous-totaux retirés, dates converties et doublons signalés sur un onglet séparé, avec l'original intact." },
    { icon: '📊', title: "Tableaux croisés décrits en une phrase", desc: "Copilot construit dans votre classeur le tableau croisé dynamique demandé, puis vous recalculez un total à la main." },
    { icon: '🔬', title: "Statistiques en Python écrites par ChatGPT", desc: "Tendances, écarts et corrélations calculés sur une copie du fichier, avec le code affiché pour relecture." },
    { icon: '🔎', title: "Classeurs hérités expliqués", desc: "Claude pour Excel retrace le calcul d'une cellule et cite chaque cellule source." },
    { icon: '💬', title: "Commentaires classés par thème", desc: "Copilot ajoute une colonne de thèmes et de sentiment, avec un renvoi vers les données lues." },
    { icon: '📝', title: "Note d'analyse d'une page", desc: "Chaque chiffre renvoie au tableau qui le porte, et chaque hypothèse est écrite comme telle." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Préparer un fichier lisible par l'IA", duration: '1h30',
      description: "La justesse des réponses dépend d'abord de la structure du fichier. Vous apprenez à rendre un export lisible par les trois outils.",
      items: [
        "Une ligne par enregistrement et des en-têtes explicites sur la première ligne",
        "Repérer les sous-totaux, les dates en texte et les codes tronqués d'un export",
        "Convertir la plage en tableau Excel et donner un nom clair à chaque colonne",
        "Garder l'original intact et travailler sur une copie",
      ],
      exercise: "Diagnostiquer et corriger l'un de vos exports, puis noter les défauts qui reviennent à chaque extraction.",
    },
    {
      day: 1, title: "Module 2 · Interroger son classeur avec Copilot dans Excel", duration: '2h',
      description: "Copilot agit dans le classeur avec les fonctions d'Excel. Vous choisissez le mode selon le risque de la demande.",
      items: [
        "Modes édition, plan et conversation : lequel pour quelle demande",
        "Tableaux croisés dynamiques, tris, filtres et mises en évidence décrits en français",
        "Colonnes calculées, recherches entre onglets avec RECHERCHEX, explication de formules",
        "Thèmes et sentiment d'une colonne de commentaires, avec renvoi aux données",
      ],
      exercise: "Construire avec Copilot la synthèse mensuelle de votre fichier, puis recalculer deux totaux à la main.",
    },
    {
      day: 1, title: "Module 3 · Comprendre et corriger un classeur complexe", duration: '2h',
      description: "Un classeur hérité devient lisible quand l'IA retrace ses calculs. Vous travaillez avec Claude pour Excel et avec Copilot.",
      items: [
        "Retracer le calcul d'une cellule, avec les citations des cellules sources",
        "Modifier une hypothèse en conservant les liens entre formules",
        "Trouver l'origine d'une erreur #REF! ou #DIV/0!",
        "Conditions d'accès : complément Claude pour Excel, offres concernées, versions d'Excel prises en charge",
      ],
      exercise: "Faire expliquer par l'IA le classeur le plus complexe de votre service et documenter ses formules principales.",
    },
    {
      day: 1, title: "Module 4 · Graphiques et tableau de bord dans Excel", duration: '1h30',
      description: "Un tableau de bord utile tient sur un écran et répond à une question. Copilot construit les graphiques, vous décidez de ce qu'ils montrent.",
      items: [
        "Choisir le graphique selon la question : évolution, comparaison ou répartition",
        "Demander un graphique avec titre, étiquettes et axes explicites",
        "Assembler un tableau de bord mensuel sur un seul onglet",
        "Interroger un rapport Power BI depuis Excel, en sachant que l'import ne s'actualise pas",
      ],
      exercise: "Construire le tableau de bord mensuel de votre activité à partir des tableaux du module 2.",
    },
    {
      day: 2, title: "Module 5 · Analyser un fichier dans ChatGPT", duration: '2h',
      description: "ChatGPT écrit et exécute du code Python sur une copie de votre fichier. Vous apprenez à lui imposer une méthode et à relire ce qu'il a fait.",
      items: [
        "Formats acceptés et limites : environ 50 Mo pour un tableur, analyse parfois partielle",
        "Faire lister les anomalies avant tout calcul",
        "Tendances, écarts, corrélations : imposer la méthode et le type de graphique",
        "Graphiques interactifs : barres, courbes, secteurs ou nuages de points",
      ],
      exercise: "Analyser l'un de vos exports dans ChatGPT avec un prompt en deux temps : les anomalies, puis les calculs.",
    },
    {
      day: 2, title: "Module 6 · Vérifier un résultat avant de le diffuser", duration: '1h30',
      description: "Un chiffre faux se repère avec quelques contrôles simples, appliqués à chaque analyse.",
      items: [
        "Recompter les lignes, recalculer un total, contrôler les filtres",
        "Comparer deux calculs indépendants, dans Excel et dans ChatGPT",
        "Lire le code Python et la méthode retenue",
        "Historique des modifications d'un classeur partagé et versions précédentes",
      ],
      exercise: "Appliquer la grille de contrôle à l'analyse du module 5 et corriger les écarts trouvés.",
    },
    {
      day: 2, title: "Module 7 · Écrire l'analyse que la direction lira", duration: '2h',
      description: "Une analyse sert quand elle mène à une décision. Vous passez des tableaux à une note d'une page.",
      items: [
        "Distinguer le constat chiffré de l'hypothèse à vérifier",
        "Faire rédiger la note à partir des seuls tableaux validés",
        "Écrire les limites : périmètre, données manquantes, méthode",
        "Adapter la note à son lecteur, direction ou équipe",
      ],
      exercise: "Rédiger la note d'une page de votre analyse, avec un renvoi vers le tableau source pour chaque chiffre.",
    },
    {
      day: 2, title: "Module 8 · Confidentialité et règles d'équipe", duration: '1h30',
      description: "L'offre utilisée décide de ce que deviennent vos fichiers. Vous repartez avec les règles de votre service.",
      items: [
        "Offres individuelles et professionnelles : entraînement des modèles et conservation",
        "Copilot, le périmètre européen des données et l'exception des modèles Claude",
        "Fichiers venus de l'extérieur et injection de prompt",
        "Rédiger la règle d'usage du service : outils autorisés, données exclues, relectures obligatoires",
      ],
      exercise: "Rédiger la règle d'usage de l'IA pour les analyses de votre service, à faire valider par votre responsable et votre délégué à la protection des données.",
    },
  ],
  objectives: [
    "Structurer un export pour l'analyse : une ligne par enregistrement, des en-têtes explicites, aucun sous-total",
    "Produire avec Copilot dans Excel un tableau croisé dynamique, une colonne calculée et un graphique",
    "Expliquer le calcul d'une cellule et corriger une erreur de formule avec l'aide de l'IA",
    "Conduire une analyse de fichier dans ChatGPT en imposant la méthode et en relisant le code",
    "Vérifier un résultat par le recomptage des lignes et un second calcul indépendant",
    "Choisir l'outil et l'offre adaptés à la sensibilité des données analysées",
  ],
  faq: [
    {
      q: "Faut-il savoir coder pour suivre la formation analyse de données avec l'IA ?",
      a: "Non. Vous écrivez vos demandes en français, et ChatGPT écrit et exécute lui-même le code Python. La formation vous apprend à lire ce code assez pour repérer une hypothèse discutable. Le prérequis est un usage courant d'Excel : filtrer, trier, écrire une formule simple.",
    },
    {
      q: "Faut-il une licence Microsoft Copilot pour utiliser Copilot dans Excel ?",
      a: "Pas toujours. Selon Microsoft, un abonnement professionnel Microsoft 365 qui donne droit à Copilot Chat suffit pour utiliser Copilot dans Excel en accès standard, lequel dépend de la capacité du service aux heures chargées. Avec la licence Microsoft Copilot, l'accès devient prioritaire et vous pouvez choisir entre les modèles d'OpenAI et ceux d'Anthropic, pour peu que l'administrateur ait autorisé ces derniers. Vérifiez avant la session ce que voient vos participants.",
    },
    {
      q: "Peut-on analyser des données de clients ou de salariés avec ChatGPT, Copilot ou Claude ?",
      a: "Oui, avec l'offre professionnelle de l'entreprise et l'accord de votre délégué à la protection des données. Les offres ChatGPT Business et Enterprise excluent par défaut vos échanges de l'entraînement des modèles d'OpenAI, et Microsoft s'engage à ne pas entraîner ses modèles de fondation sur les invites et les réponses des comptes professionnels. Évitez les comptes personnels, et retirez des fichiers les colonnes inutiles à l'analyse, comme les noms ou les adresses.",
    },
    {
      q: "Quelle différence entre la formation analyse de données avec l'IA et le Sprint IA Excel ?",
      a: "Le Sprint IA Excel dure trois heures et installe quatre gestes dans Excel avec un seul outil : la formule, le tableau croisé, la mise en évidence et le graphique. La formation de deux jours s'adresse aux personnes qui produisent des analyses. Elle ajoute la préparation des exports, le calcul statistique dans ChatGPT, la lecture des classeurs complexes avec Claude pour Excel, un protocole de vérification et la note écrite pour la direction. Le Sprint convient à une équipe entière ; la formation, à ceux qui signent les chiffres.",
    },
    {
      q: "Quelle différence entre la formation analyse de données avec l'IA et une formation Power BI ?",
      a: "Power BI sert à publier des tableaux de bord reliés aux données et actualisés. Cette formation reste dans Excel et dans les assistants d'IA, au plus près des exports que vous manipulez chaque semaine. Copilot dans Excel peut interroger un rapport Power BI si l'administrateur a ouvert l'accès aux données Fabric, et il en importe une photo qui ne s'actualise pas.",
    },
    {
      q: "Combien coûte la formation analyse de données avec l'IA ?",
      a: "Comptez 1 980 € HT la journée, donc 3 960 € HT pour les deux jours lorsqu'un groupe de votre entreprise suit la formation, jusqu'à 12 personnes. Un participant seul paie le même tarif journalier. Ajoutez 20 % de TVA. Le certificat Qualiopi de Masteria permet à votre OPCO (l'organisme paritaire qui gère les fonds de formation de votre branche) de la financer, selon les conditions qu'il applique : nous établissons le programme et la convention, et l'entreprise envoie sa demande avant le premier jour.",
    },
    {
      q: "Peut-on suivre la formation analyse de données avec l'IA à distance ?",
      a: "Oui. La formation a lieu dans vos locaux ou à distance. À distance, chaque participant travaille sur ses fichiers et partage son écran quand le formateur vérifie un résultat. Un second écran aide : Excel et l'assistant ouverts côte à côte rendent les exercices plus fluides.",
    },
  ],
  sources: [
    { name: "Centre d'aide OpenAI : Data analysis with ChatGPT (formats, préparation des tableurs, graphiques, limites)", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
    { name: "Centre d'aide OpenAI : FAQ sur l'envoi de fichiers (taille maximale des tableurs)", url: "https://help.openai.com/en/articles/8555545-file-uploads-faq" },
    { name: "Centre d'aide OpenAI : utilisation des données pour l'amélioration des modèles", url: "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance" },
    { name: "Microsoft Support : bien démarrer avec Copilot dans Excel", url: "https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Microsoft Support : FAQ de Copilot dans Excel (licences, modèles, limites)", url: "https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel" },
    { name: "Microsoft Support : obtenir des analyses de données avec Copilot dans Excel", url: "https://support.microsoft.com/en-us/excel/copilot/data-insights-with-copilot-in-excel" },
    { name: "Microsoft Support : historique des modifications d'un classeur avec Copilot dans Excel", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-change-history" },
    { name: "Microsoft Support : analyser un rapport Power BI avec Copilot dans Excel", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-power-bi" },
    { name: "Microsoft Learn : confidentialité des données dans Microsoft Copilot (entraînement, frontière de données de l'UE)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy" },
    { name: "Anthropic : utiliser Claude pour Excel (fonctions, données, limites, injection de prompt)", url: "https://claude.com/docs/office-agents/excel" },
  ],
}
