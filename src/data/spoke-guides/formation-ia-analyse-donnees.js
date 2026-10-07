// Contenu propre à /formation-ia-analyse-donnees (page propre, guide terrain). Rendu par SpokePage.
// Formation de deux jours (la fiche de seo-pages.js n'a pas de champ duration : 2 jours).
// Revu le 07/10/2026 : faits Microsoft, Google et Mistral selon la fiche FAITS-OUTILS du 07/10
// (modes de Copilot dans Excel, fin de =COPILOT(), modèles Anthropic hors frontière de données
// de l'UE, plafonds de Sheets, tableurs de Vibe) ; aides OpenAI et Anthropic reprises du 03/10.
export default {
  slug: 'formation-ia-analyse-donnees',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation analyse de données avec l'IA : Excel, Copilot, ChatGPT et Claude",
  metaTitle: "Formation analyse de données avec l'IA (2 jours) | Masteria",
  metaDesc: "Formation analyse de données avec l'IA, 2 jours : Copilot et Claude dans Excel, ChatGPT en Python, Gemini dans Sheets, chiffres vérifiés avant diffusion.",
  resume: "Cette formation à l'analyse de données avec l'IA apprend en deux jours à tirer d'un export de ventes, de stocks ou de paie des tableaux et une note que l'on peut signer, en faisant travailler Copilot ou Claude dans Excel et ChatGPT sur une copie du fichier. Une journée revient à 1 980 € HT, qu'elle réunisse douze collègues ou un analyste seul, en présentiel comme à distance. Le dossier de financement se prépare avec Masteria, dont la certification Qualiopi porte sur ses actions de formation, puis votre OPCO l'examine en fonction de ses règles et de son budget.",
  enBref: [
    { label: 'Formation', value: "Analyser ses fichiers avec l'IA dans Excel ou Google Sheets, et vérifier chaque chiffre avant qu'il quitte le service" },
    { label: 'Durée', value: "Deux jours de sept heures : le classeur et ses contrôles le premier jour, l'analyse statistique et la note de direction le second" },
    { label: 'Formats', value: "Dans vos bureaux comme en classe virtuelle ; un groupe interne de douze personnes maximum, ou un participant en individuel" },
    { label: 'Tarif', value: "1 980 € HT la journée ; 3 960 € HT les deux, quelle que soit la taille du groupe jusqu'à douze ; TVA de 20 % en sus" },
    { label: 'Financement', value: "Dossier OPCO préparé avec Masteria, organisme certifié Qualiopi ; l'opérateur décide selon ses règles et ses fonds" },
    { label: 'Prérequis', value: "Filtrer, trier et écrire une formule simple dans Excel ; apporter un export que vous traitez chaque mois" },
  ],
  prerequis: "Filtrer, trier et écrire une formule simple dans Excel ; apporter un export que vous traitez chaque mois",
  intro: "Dans Excel, Copilot monte un tableau croisé à partir d'une phrase et Claude remonte le calcul d'une cellule dans un classeur dont personne ne se souvient plus de l'auteur. Dans ChatGPT, un export de ventes devient une analyse statistique dont le code se relit ligne à ligne. Ces outils vont vite et se trompent parfois sans prévenir. Pendant deux jours, vous apprenez à préparer un fichier pour qu'ils le lisent juste, à confier chaque tâche à l'outil qui lui convient, puis à contrôler chaque résultat avant la réunion où il sera présenté. Les exercices portent sur les exports que vous manipulez déjà chaque semaine.",
  guide: {
    kicker: "Guide terrain données",
    h2: "L'IA calcule en quelques secondes, et la fiabilité du chiffre se décide avant et après ce calcul",
    lead: "Copilot, Claude, ChatGPT, Gemini et Vibe savent tous lire un tableur, le résumer et en tirer des graphiques. Ils se distinguent par l'endroit où le calcul se fait. Copilot et Claude agissent dans votre classeur même, avec les fonctions d'Excel ; ChatGPT travaille sur une copie, avec du code qu'il écrit lui-même quand le calcul l'exige. Ce lieu du calcul fixe ce qu'il faut contrôler, ce que voient les collègues qui partagent le fichier et les données qui sortent de l'entreprise. Un tableau mal bâti donne, dans tous les outils, des résultats faux présentés avec l'aplomb des bons.",
    sections: [
      {
        h3: "Le lieu du calcul change ce que vous devez vérifier",
        paras: [
          "Copilot dans Excel modifie le classeur ouvert avec les outils du tableur : tableaux croisés dynamiques (des tableaux qui regroupent et totalisent les lignes par catégorie), formules, graphiques, mises en forme conditionnelles. Microsoft Copilot (anciennement Microsoft 365 Copilot) y propose trois modes. En édition, il agit dans le fichier et son raisonnement défile dans le volet. En plan, il expose sa démarche et attend votre accord. En conversation, il analyse sans toucher à rien, ce qui en fait le mode à retenir pour explorer un fichier partagé. La fonction =COPILOT(), qui écrivait une réponse dans une cellule, a été retirée le 14 septembre 2026 : les valeurs déjà calculées restent visibles, mais un recalcul affiche #NOM?, et Microsoft renvoie vers le volet.",
          "Claude pour Excel est un complément, un module qui s'installe dans Excel, réservé aux abonnements payants de Claude. Ses réponses citent les cellules d'où elles viennent ; il modifie une hypothèse en préservant les liens entre formules et prévient avant d'écraser un contenu. Anthropic le déconseille pour des calculs d'audit qui n'auraient pas été vérifiés, et il ne gère ni les tables de données (l'outil d'Excel qui fait varier une hypothèse) ni les macros.",
          "ChatGPT procède autrement. Il charge une copie du fichier dans un environnement Python (le langage dans lequel il écrit ses calculs), exécute ce code, puis affiche un tableau ou un graphique. Le classeur d'origine reste intact, et le code se relit : OpenAI conseille de relire le code, les résultats et les hypothèses avant de s'y fier. Cet environnement reste coupé d'internet, si bien que toute donnée utile doit figurer dans le fichier ou dans une source connectée, comme OneDrive ou SharePoint.",
          "Deux autres outils complètent le paysage. Dans Google Sheets, la fonction =IA() traite une colonne de texte ligne par ligne, et un compte Business Standard dispose au 7 octobre 2026 de 5 000 appels à cette fonction et de 100 créations ou modifications de feuille par mois. Vibe, l'application de Mistral AI, sait analyser les fichiers Excel et CSV depuis ses notes de version du 22 septembre 2026, et produit des classeurs .xlsx qui contiennent leurs formules.",
        ],
      },
      {
        h3: "La structure du fichier décide de la justesse des réponses",
        paras: [
          "OpenAI décrit le tableur que ChatGPT lit le mieux : des en-têtes explicites sur la première ligne, une ligne par enregistrement, des noms de colonnes en français courant. Il déconseille de juxtaposer sur une même feuille des tableaux sans rapport, de couper les données par des lignes ou des colonnes vides, ou de laisser des valeurs prisonnières d'une image. Microsoft donne le même conseil pour Copilot : une demande qui nomme les colonnes à analyser obtient une réponse plus juste.",
          "Les exports d'ERP (le progiciel qui gère commandes, stocks et factures) et de CRM (le fichier clients) cachent des défauts qui reviennent chaque mois : sous-totaux glissés au milieu des données, dates stockées comme du texte, montants suivis du symbole de la devise, codes produits amputés de leurs zéros initiaux. Le premier exercice consiste à débusquer ces défauts dans vos propres exports et à les faire corriger par l'IA sur un onglet à part, l'original restant intact.",
          "Pour un groupe international de l'emballage, Masteria a construit treize ateliers destinés à ses managers pilotes, parmi lesquels des ateliers Excel menés sur les données mêmes du groupe : prix, activité, coûts et base RH. Un exercice qui part d'un fichier fictif ne rencontre aucun de ces défauts, et c'est pourtant sur eux que l'analyse trébuche.",
        ],
      },
      {
        h3: "Un résultat de l'IA se contrôle avant de partir en réunion",
        paras: [
          "La FAQ de Microsoft l'écrit noir sur blanc : Copilot dans Excel peut se tromper ou mal interpréter une information, et l'éditeur déconseille de s'y fier pour des décisions sensibles en finance, en droit ou en santé. La formation installe un contrôle en quatre gestes : recompter les lignes traitées, refaire un total avec SOMME ou un tableau croisé monté à la main, inspecter les filtres actifs, puis demander à l'outil la méthode qu'il a suivie.",
          "Chaque outil laisse une trace à relire. ChatGPT affiche le code exécuté. Quand Copilot range des commentaires par thème, un petit numéro renvoie aux données lues. Claude pour Excel nomme les cellules d'où vient sa réponse. Dans un classeur partagé, Copilot résume aussi l'historique des modifications, qu'Excel garde jusqu'à 365 jours : on sait qui a changé une valeur, et quand. Dans Copilot sur le web, les notes de version du 6 octobre 2026 ajoutent un bouton qui relance la même demande sur un autre modèle : un second avis rapide quand une interprétation paraît douteuse.",
          "Une mission de conseil conduite par Masteria chez un distributeur de solutions photovoltaïques suit la même règle sur un flux quotidien. Parmi les trois assistants prévus figure celui qui prépare l'import, dans Odoo, l'ERP de l'entreprise, des réceptions déclarées par les entrepôts : l'outil prépare le fichier, et un membre de l'équipe le valide avant l'import. La règle vaut pour toute analyse qui part vers un décideur.",
        ],
      },
      {
        h3: "L'offre utilisée fixe ce que deviennent vos fichiers",
        paras: [
          "Sur les offres individuelles de ChatGPT, OpenAI peut réutiliser les conversations pour perfectionner ses modèles, à moins que l'utilisateur ne coupe ce partage dans ses contrôles de données. Un avis donné par le pouce levé ou baissé peut faire entrer toute la conversation dans l'entraînement, même après cette désactivation. Les formules Business, Enterprise et Edu excluent par défaut les échanges de l'entraînement.",
          "Avec un compte professionnel Microsoft, les demandes, les réponses et les documents consultés par Copilot n'entraînent pas les grands modèles sur lesquels il repose, et les échanges des utilisateurs européens restent dans la frontière de données que Microsoft réserve à l'Union européenne. Claude, que Copilot propose aussi mais laisse éteint chez ses clients européens, sort de cette frontière dès qu'un administrateur l'allume : demandez à votre service informatique ce qu'il a décidé. Google ne réutilise pas, sans votre accord, les contenus d'un compte Workspace pour des modèles qui serviraient en dehors de votre domaine. Chez Mistral AI, l'offre Team entraîne par défaut ses modèles avec les échanges, et seul l'administrateur peut couper ce réglage pour toute l'organisation.",
          "Claude pour Excel efface ses entrées et ses sorties de ses serveurs sous trente jours, hors cas prévus par Anthropic, et garde l'historique dans votre navigateur ; il n'applique pas les durées de conservation propres à votre organisation. Anthropic signale aussi un risque propre aux fichiers reçus de l'extérieur : un classeur peut dissimuler des consignes, ce qu'on appelle une injection de prompt, qui poussent l'assistant à extraire ou à altérer des données. Pour des données de clients ou de salariés, l'outil se choisit avant la formation avec le responsable RGPD de l'entreprise, votre DPO.",
        ],
      },
    ],
    table: {
      caption: "Sept tâches d'analyse, l'outil le plus direct et le contrôle qui l'accompagne",
      headers: ["Tâche", "Outil le plus direct", "Contrôle avant diffusion"],
      rows: [
        ["Nettoyer un export d'ERP : doublons, dates en texte, sous-totaux", "Copilot dans Excel en mode plan, sur un onglet séparé", "Nombre de lignes comparé avant et après"],
        ["Croiser le chiffre d'affaires par mois et par région", "Copilot dans Excel : tableau croisé dynamique", "Un total refait à la main avec SOMME.SI.ENS"],
        ["Comprendre un classeur hérité aux formules imbriquées", "Claude pour Excel, qui cite ses cellules sources", "Chaque cellule citée ouverte et relue"],
        ["Tester une tendance ou une corrélation", "ChatGPT, analyse en Python sur une copie", "Le code et la méthode lus avant toute conclusion"],
        ["Classer 600 commentaires clients par thème", "Copilot dans Excel, ou =IA() dans Google Sheets", "Une trentaine de lignes relues au hasard"],
        ["Interroger un rapport Power BI", "Copilot dans Excel, si l'administrateur a ouvert les données Fabric (la plateforme de données de Microsoft qui inclut Power BI)", "Date de l'import notée, puisqu'il ne s'actualise pas"],
        ["Rédiger la note de synthèse", "ChatGPT, Claude ou Vibe, nourris des seuls tableaux validés", "Chaque chiffre de la note retrouvé dans un tableau"],
      ],
    },
    cas: {
      h3: "Mise en situation : expliquer pourquoi la marge a reculé d'un trimestre à l'autre",
      contexte: "Prenons une contrôleuse de gestion dans une entreprise de négoce de 140 salariés. Elle dispose d'un export de l'ERP de 18 000 lignes sur les deux derniers trimestres : date, client, région, famille de produits, quantité, chiffre d'affaires hors taxes, coût d'achat. La direction veut savoir pourquoi le taux de marge brute a perdu deux points, et le comité se réunit jeudi. L'entreprise équipe ses équipes de ChatGPT Business et de Copilot dans Excel. Le cas est construit pour la formation.",
      etapes: [
        "Elle enregistre une copie de l'export en .xlsx, retire les lignes de sous-total, convertit les dates restées en texte et vérifie que chaque colonne porte un en-tête clair.",
        "Elle dépose la copie dans ChatGPT avec la consigne reproduite ci-dessous, qui impose de lister les anomalies avant le moindre calcul.",
        "Elle lit le code et la liste des anomalies, puis corrige dans Excel les lignes signalées, par exemple des coûts manquants ou des factures saisies deux fois.",
        "Dans le classeur, elle demande à Copilot un tableau croisé du taux de marge par famille et par région, puis compare ses totaux à ceux de ChatGPT : un écart trahit une erreur d'un côté ou de l'autre.",
        "Elle écrit une note d'une page qui ne garde que les chiffres retrouvés par les deux calculs, avec pour chacun le tableau qui le porte.",
      ],
      prompt: "Tu es analyste financier. Le fichier joint contient les ventes des deux derniers trimestres, une ligne par ligne de facture : date, client, région, famille de produits, quantité, chiffre d'affaires hors taxes, coût d'achat.\n\nAvant de calculer quoi que ce soit :\n1. Indique combien de lignes tu as lues et la période couverte.\n2. Recense les anomalies : doublons, coûts absents ou nuls, marges négatives, dates hors période. Indique combien de lignes sont touchées par chacune, sans rien corriger.\n\nEnsuite, sur les seules lignes saines :\n3. Calcule le taux de marge brute de chaque trimestre.\n4. Décompose la variation du taux de marge par famille de produits et par région, dans un tableau trié du recul le plus fort au plus faible.\n5. Isole l'effet des volumes, celui des prix de vente, celui des coûts d'achat et celui du mélange entre familles, et décris ta méthode en quelques phrases.\n6. Trace un histogramme de la variation par famille.\n\nAffiche le code utilisé. N'invente aucune valeur et ne propose aucune explication absente des données.",
      resultat: "Vous obtenez la liste chiffrée des anomalies, les deux taux de marge, le tableau de la variation par famille et par région, et un graphique. La décomposition entre volumes, prix, coûts et mélange reste la partie fragile : selon la méthode, un même écart peut changer de case. Faites valider la méthode par la direction financière avant de la reprendre chaque trimestre. La comparaison avec le tableau de Copilot attrape les erreurs de filtre et de périmètre, et votre connaissance du métier reste le dernier contrôle.",
    },
    pieges: [
      {
        titre: "Un total juste, calculé sur un fichier lu en partie",
        texte: "Un fichier peut se charger dans ChatGPT et rester trop lourd ou trop complexe pour être analysé en entier. OpenAI conseille alors de viser des feuilles, des lignes ou des colonnes précises, ou de découper le fichier. Demandez toujours combien de lignes ont été lues, et confrontez ce nombre à celui de l'export.",
      },
      {
        titre: "Un tableau scanné pris pour une source",
        texte: "OpenAI prévient que les valeurs d'un PDF scanné ou d'une image peuvent être mal extraites. Quand le chiffre exact compte, repartez du fichier Excel ou CSV d'origine, quitte à le redemander au service qui l'a produit.",
      },
      {
        titre: "Deux courbes qui montent ensemble présentées comme une cause",
        texte: "Un assistant repère vite une corrélation et rédige sans hésiter une explication. Le lien de cause à effet réclame une preuve tirée du métier. Écrivez dans la note ce que les données montrent, et présentez le reste comme une hypothèse à vérifier.",
      },
      {
        titre: "Le classeur d'un fournisseur qui donne des ordres",
        texte: "Un fichier reçu de l'extérieur peut cacher des consignes destinées à l'assistant. Lors de ses tests, Anthropic a constaté que Claude pour Excel pouvait alors être poussé à extraire ou à modifier des données. Recopiez les seules données utiles dans un classeur propre, et relisez chaque confirmation que l'outil réclame avant de cliquer.",
      },
      {
        titre: "Le fichier clients déposé dans un compte personnel",
        texte: "Un export de ventes envoyé dans un ChatGPT gratuit ou Plus suit les règles des offres individuelles, entraînement des modèles compris si l'option reste active. Pour des données de clients ou de salariés, passez par l'offre professionnelle retenue par l'entreprise et retirez les colonnes dont l'analyse n'a pas besoin.",
      },
      {
        titre: "Une ancienne formule =COPILOT() qui affiche #NOM?",
        texte: "Les classeurs qui utilisaient la fonction =COPILOT() gardent leurs dernières valeurs, mais un recalcul les remplace par une erreur depuis le 14 septembre 2026. Repérez ces cellules avant la clôture et remplacez-les par une formule classique ou par une colonne produite depuis le volet Copilot.",
      },
    ],
  },
  audience: [
    { title: "Contrôleurs de gestion et équipes financières", desc: "Vous produisez des reportings mensuels et des analyses d'écarts à partir d'exports d'ERP. Vous voulez abréger le nettoyage et garder une méthode de contrôle que vous pouvez défendre devant la direction." },
    { title: "Marketing, CRM et chargés d'études", desc: "Vous croisez des données de campagnes, de ventes et d'enquêtes. Vous voulez tester une tendance, classer des verbatims et transformer un tableau en recommandation écrite." },
    { title: "Commerciaux et responsables d'agence qui pilotent un portefeuille", desc: "Vous suivez un chiffre d'affaires par client, par produit ou par zone. Vous voulez des tableaux croisés et des graphiques lisibles en quelques minutes, et repérer les clients dont les commandes ralentissent." },
    { title: "Chefs de projet et fonctions support", desc: "Tableaux de suivi, de budget ou d'indicateurs : vous en tenez sans être analyste. Vous voulez interroger vos fichiers en français et savoir quelles données peuvent sortir de l'entreprise." },
  ],
  useCases: [
    { icon: '🧹', title: "Exports nettoyés avant l'analyse", desc: "Sous-totaux retirés, dates converties et doublons signalés sur un onglet à part, l'original laissé intact." },
    { icon: '📊', title: "Tableaux croisés décrits en une phrase", desc: "Copilot monte dans votre classeur le tableau croisé demandé, puis vous recalculez un total vous-même." },
    { icon: '🔬', title: "Statistiques en Python écrites par ChatGPT", desc: "Tendances, écarts et corrélations calculés sur une copie du fichier, code affiché pour relecture." },
    { icon: '🔎', title: "Classeurs hérités expliqués", desc: "Claude pour Excel remonte le calcul d'une cellule et cite chacune des cellules sources." },
    { icon: '💬', title: "Commentaires classés par thème", desc: "Une colonne de thèmes et de sentiment produite par Copilot ou par =IA() dans Sheets, puis relue sur échantillon." },
    { icon: '📝', title: "Note d'analyse d'une page", desc: "Chaque chiffre renvoie au tableau qui le porte, et chaque hypothèse est écrite comme telle." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Rendre un export lisible par l'IA", duration: '1h30',
      description: "La justesse des réponses dépend d'abord de la forme du fichier. Vous apprenez à rendre un export lisible par tous les outils de la formation.",
      items: [
        "Une ligne par enregistrement, des en-têtes explicites sur la première ligne",
        "Débusquer sous-totaux, dates en texte et codes tronqués",
        "Convertir la plage en tableau Excel et nommer chaque colonne en clair",
        "Travailler sur une copie, l'original rangé à part",
      ],
      exercise: "Vous diagnostiquez et corrigez l'un de vos exports, puis notez les défauts qui reviennent à chaque extraction.",
    },
    {
      day: 1, title: "Module 2 · Interroger son classeur avec Copilot dans Excel", duration: '2h',
      description: "Copilot agit dans le classeur avec les fonctions d'Excel. Vous choisissez le mode selon le risque de la demande.",
      items: [
        "Édition, plan ou conversation : quel mode pour quelle demande",
        "Tableaux croisés, tris, filtres et mises en évidence décrits en français",
        "Colonnes calculées, RECHERCHEX entre onglets, formules expliquées",
        "Fin de =COPILOT() : repérer les cellules concernées et les remplacer",
      ],
      exercise: "Vous faites monter par Copilot la synthèse mensuelle de votre fichier, puis refaites deux totaux à la main.",
    },
    {
      day: 1, title: "Module 3 · Comprendre et réparer un classeur complexe", duration: '2h',
      description: "Un classeur hérité devient lisible quand l'IA remonte ses calculs. Vous travaillez avec Claude pour Excel et avec Copilot.",
      items: [
        "Remonter le calcul d'une cellule, cellules sources à l'appui",
        "Changer une hypothèse sans casser les liens entre formules",
        "Remonter à la cause d'une erreur #REF! ou #DIV/0!",
        "Accès au complément Claude pour Excel : abonnements et versions d'Excel prises en charge",
      ],
      exercise: "Vous faites expliquer par l'IA le classeur le plus complexe de votre service et documentez ses formules principales.",
    },
    {
      day: 1, title: "Module 4 · Graphiques et tableau de bord", duration: '1h30',
      description: "Un tableau de bord utile tient sur un écran et répond à une question. L'assistant construit les graphiques, vous décidez de ce qu'ils montrent.",
      items: [
        "Choisir le graphique selon la question : évolution, comparaison ou répartition",
        "Exiger un titre, des étiquettes et des axes explicites",
        "Assembler un tableau de bord mensuel sur un seul onglet",
        "Interroger un rapport Power BI depuis Excel, import figé à dater",
      ],
      exercise: "Vous construisez le tableau de bord mensuel de votre activité à partir des tableaux du module 2.",
    },
    {
      day: 2, title: "Module 5 · Analyser un fichier dans ChatGPT, Gemini ou Vibe", duration: '2h',
      description: "ChatGPT rédige puis lance du code Python sur une copie de votre fichier. Vous apprenez à lui imposer une méthode et à relire ce qu'il a fait, puis vous comparez avec l'outil de votre entreprise.",
      items: [
        "Formats et limites : un tableur plafonné à 50 Mo environ, une lecture parfois partielle",
        "Consigne en deux temps : les anomalies d'abord, les calculs ensuite",
        "Tendances, écarts, corrélations : imposer la méthode et le type de graphique",
        "Équivalents : =IA() et Gemini dans Google Sheets, tableurs analysés par Vibe",
      ],
      exercise: "Vous analysez l'un de vos exports avec une consigne en deux temps et lisez le code produit.",
    },
    {
      day: 2, title: "Module 6 · Contrôler un résultat avant de le diffuser", duration: '1h30',
      description: "Un chiffre faux se repère avec quelques contrôles simples, appliqués à chaque analyse.",
      items: [
        "Recompter les lignes, refaire un total, inspecter les filtres",
        "Confronter deux calculs indépendants, l'un dans Excel, l'autre dans ChatGPT",
        "Lire le code Python et la méthode retenue",
        "Historique des modifications et versions précédentes d'un classeur partagé",
      ],
      exercise: "Vous passez l'analyse du module 5 à la grille de contrôle et corrigez les écarts trouvés.",
    },
    {
      day: 2, title: "Module 7 · Écrire la note que la direction lira", duration: '2h',
      description: "Une analyse sert quand elle mène à une décision. Vous passez des tableaux à une note d'une page.",
      items: [
        "Séparer le constat chiffré de l'hypothèse à vérifier",
        "Faire rédiger la note à partir des seuls tableaux validés",
        "Écrire les limites : périmètre, données manquantes, méthode",
        "Adapter la note à son lecteur, direction ou équipe",
      ],
      exercise: "Vous rédigez la note d'une page de votre analyse, avec un renvoi vers le tableau source pour chaque chiffre.",
    },
    {
      day: 2, title: "Module 8 · Fixer les règles du service et le plan des trente jours", duration: '1h30',
      description: "L'offre utilisée décide de ce que deviennent vos fichiers. Vous repartez avec les règles écrites de votre service et un plan pour le premier mois.",
      items: [
        "Offres individuelles et professionnelles : entraînement des modèles et conservation",
        "Frontière européenne des données chez Microsoft et place à part des modèles d'Anthropic",
        "Fichiers venus de l'extérieur et injection de prompt",
        "Charte du service, registre interne des formations, suffisant au regard de l'AI Act, trois analyses à outiller dans le mois",
      ],
      exercise: "Vous écrivez la charte d'analyse de votre service, à faire valider par votre responsable et par le DPO, puis votre plan des trente jours.",
    },
  ],
  objectives: [
    "Structurer un export pour l'analyse : une ligne par enregistrement, des en-têtes explicites, aucun sous-total",
    "Produire avec Copilot dans Excel un tableau croisé dynamique, une colonne calculée et un graphique",
    "Expliquer le calcul d'une cellule et corriger une erreur de formule en s'appuyant sur l'IA",
    "Conduire l'analyse d'un fichier dans ChatGPT en imposant la méthode et en relisant le code",
    "Vérifier un résultat par le recomptage des lignes et un second calcul indépendant",
    "Choisir l'outil et l'offre adaptés à la sensibilité des données analysées",
  ],
  faq: [
    {
      q: "Doit-on savoir programmer pour faire analyser ses fichiers par l'IA ?",
      a: "Non. Vous formulez vos demandes en français, et ChatGPT écrit puis exécute lui-même le code Python. Les deux jours vous apprennent à lire ce code assez pour repérer une hypothèse discutable, comme un filtre oublié ou une période tronquée. Le prérequis tient à un usage courant d'Excel : filtrer, trier, écrire une formule simple. Copilot, Claude pour Excel et la fonction =IA() de Google Sheets s'utilisent eux aussi sans programmer.",
    },
    {
      q: "Copilot dans Excel exige-t-il la licence payante ?",
      a: "Pas toujours. Un abonnement professionnel Microsoft 365 donne accès à Copilot dans Excel en accès standard, dont la disponibilité varie avec la charge des serveurs aux heures de pointe. La licence Microsoft Copilot apporte l'accès prioritaire et le choix entre les modèles d'OpenAI et ceux d'Anthropic, à condition que l'administrateur ait activé ces derniers, éteints d'origine pour les clients européens. Vérifiez avant la session ce que voient vos participants, licence par licence.",
    },
    {
      q: "Peut-on analyser des données de clients ou de salariés avec ChatGPT, Copilot ou Claude ?",
      a: "Oui, sur l'offre professionnelle de l'entreprise et après accord du DPO. ChatGPT Business et Enterprise laissent par défaut vos échanges hors de l'entraînement, et Microsoft garantit que les demandes et réponses des comptes professionnels n'entraînent pas ses modèles. Chez Mistral AI, vérifiez que l'administrateur de l'offre Team a coupé l'entraînement. Bannissez les comptes personnels, et retirez des fichiers les colonnes inutiles à l'analyse, comme les noms ou les adresses.",
    },
    {
      q: "Quelle différence avec le Sprint IA Excel de trois heures ?",
      a: "Le Sprint IA Excel installe en trois heures quatre gestes avec un seul outil : la formule, le tableau croisé, la mise en évidence et le graphique. Ces deux jours visent les personnes qui produisent des analyses et en répondent. Ils ajoutent la préparation des exports, le calcul statistique dans ChatGPT, la lecture des classeurs complexes avec Claude pour Excel, un protocole de contrôle et la note écrite pour la direction. Le Sprint convient à une équipe entière ; ce parcours, à ceux qui signent les chiffres.",
    },
    {
      q: "En quoi ce parcours se distingue-t-il de Power BI ?",
      a: "Power BI publie des tableaux de bord reliés à vos bases et actualisés en continu. Ce parcours reste dans Excel, dans Sheets et dans les assistants d'IA, au plus près des exports que vous manipulez chaque semaine. Copilot dans Excel peut interroger un rapport Power BI si l'administrateur a ouvert l'accès aux données Fabric ; il en importe alors une photo figée, à dater dans votre note.",
    },
    {
      q: "Combien coûtent ces deux jours d'analyse de données, et qui peut les financer ?",
      a: "Chaque jour de formation est facturé 1 980 € HT, soit 3 960 € HT pour les deux jours lorsqu'une équipe interne de douze personnes au plus les suit ensemble. Un analyste inscrit seul paie le même prix journalier. S'ajoutent les 20 % de TVA. Votre OPCO, l'organisme qui gère les fonds de formation de votre branche, peut instruire une prise en charge parce que Masteria est certifié Qualiopi ; il décide d'après ses propres règles. Vous joignez à la demande les deux pièces établies par Masteria, programme détaillé et convention.",
    },
    {
      q: "Peut-on suivre ces deux jours en classe virtuelle ?",
      a: "Oui, les deux jours se donnent aussi bien dans vos locaux qu'en classe virtuelle. À distance, chacun manipule ses fichiers et partage son écran quand le formateur contrôle un résultat. Un second écran aide beaucoup : Excel d'un côté, l'assistant de l'autre, et les exercices s'enchaînent sans jongler entre les fenêtres. Avant le premier jour, le formateur vérifie avec vous les comptes de chacun sur l'outil de l'entreprise et, si vous l'utilisez, le droit d'installer le complément Claude pour Excel.",
    },
  ],
  tarifs: {
    titre: "Le prix des deux jours, préparation sur vos fichiers comprise",
    paras: [
      "Le formateur se fait remettre, avant les deux jours, un export anonymisé, le classeur le plus redouté du service et la liste des reportings à produire chaque mois ; les ateliers des deux jours s'appuient sur ces pièces. Le prix inclut cette préparation, les supports, les consignes d'analyse adaptées à vos colonnes et la grille de contrôle que chaque participant emporte.",
      "Prenons un service qui inscrit son responsable du contrôle de gestion, trois contrôleurs, deux chargées d'études marketing et un responsable d'agence, soit sept personnes. Les deux jours en intra coûtent 3 960 € HT au total, environ 566 € HT par participant ; suivis en individuel, ils coûtent 1 980 € HT par jour pour la personne formée. Il faut y ajouter la TVA, au taux de 20 %. L'OPCO de votre branche tranche sur le financement d'après ses critères et le budget qui lui reste, au vu des documents que Masteria vous fournit.",
    ],
  },
  apres: {
    titre: "Après la formation, des contrôles qui tournent tout seuls",
    texte: "Une fois la méthode adoptée, Masteria peut construire pour votre service un outil sur mesure : un assistant qui reçoit l'export mensuel, applique vos contrôles (lignes, totaux, périmètre), signale les anomalies et rédige le commentaire des écarts dans la forme qu'attend votre comité, ou un agent qui répond aux questions des opérationnels à partir de vos seuls tableaux validés. Une personne de votre équipe valide chaque résultat avant diffusion. Ce chantier n'est pas une action de formation, donc pas finançable par votre OPCO ; son prix se fixe au forfait après cadrage.",
  },
  cta: {
    milieu: "Envoyez-nous un export anonymisé et la question que votre direction se pose : les deux jours se construisent dessus.",
    fin: {
      titre: "Préparons la session à partir de vos exports",
      texte: "Indiquez les fichiers que votre équipe traite chaque mois, l'assistant qu'elle utilise (Claude, Copilot, Vibe, ChatGPT ou Gemini) et combien de personnes suivront la session. Un programme ajusté à vos données vous parvient en retour, avec des dates de session.",
    },
  },
  terrain: {
    titre: "Sur le terrain : des fichiers de ventes au deck de la direction",
    texte: "En septembre 2026, la responsable des études et des données d'un groupe du secteur immobilier a suivi avec Masteria une journée individuelle en visioconférence. Le point de départ : ses ventes, sa clientèle et ses parts de marché, telles qu'elle les suit dans ses classeurs ; le point d'arrivée : la synthèse qu'elle présente à sa direction. Le fichier clients a été anonymisé avant tout import, et chaque formule a été contrôlée avant d'être étendue au reste du classeur. La méthode de ces deux jours reprend ces deux réflexes et les applique à vos exports.",
    lien: '/etudes-de-cas-ia#mission-immobilier-etudes',
  },
  liensAssocies: [
    { label: "Sprint IA Excel : quatre gestes dans Excel en trois heures", href: '/formation-sprint-ia-excel' },
    { label: "Formation data IA : interroger ses données sans coder", href: '/formation-data-ia' },
    { label: "Formation Copilot dans Word et Excel", href: '/formation-copilot-word-excel' },
    { label: "L'IA au service de la direction financière", href: '/formation-ia-finance' },
    { label: "Copilot ou ChatGPT : le comparatif pour l'entreprise", href: '/copilot-vs-chatgpt' },
  ],
  sources: [
    { name: "Centre d'aide OpenAI, analyser un fichier avec ChatGPT : formats, préparation du tableur, limites", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
    { name: "Centre d'aide OpenAI, taille maximale des fichiers envoyés", url: "https://help.openai.com/en/articles/8555545-file-uploads-faq" },
    { name: "Centre d'aide OpenAI, conversations et amélioration des modèles", url: "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance" },
    { name: "Microsoft Support, guide de démarrage de Copilot dans le tableur", url: "https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Microsoft Support, modes d'édition, de plan et de conversation dans Excel", url: "https://support.microsoft.com/en-us/office/agent-mode-in-excel-a2fd6fe4-97ac-416b-b89a-22f4d1357c7a" },
    { name: "Microsoft Support, retrait de la fonction COPILOT au 14 septembre 2026", url: "https://support.microsoft.com/en-us/office/copilot-function-5849821b-755d-4030-a38b-9e20be0cbf62" },
    { name: "Microsoft Support, FAQ de Copilot pour Excel : licences, modèles, limites", url: "https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel" },
    { name: "Microsoft Support, historique des modifications résumé par Copilot", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-change-history" },
    { name: "Microsoft Support, rapport Power BI interrogé depuis Excel", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-power-bi" },
    { name: "Microsoft Learn, modèles d'Anthropic comme sous-traitants de Microsoft Copilot (18 septembre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
    { name: "Microsoft Learn, confidentialité des données dans Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy" },
    { name: "Anthropic, documentation du complément Claude pour Excel : fonctions, conservation, injection de prompt", url: "https://claude.com/docs/office-agents/excel" },
    { name: "Google Workspace, quotas mensuels de Sheets, Slides et Vids selon l'édition (page du 7 octobre 2026)", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
    { name: "Mistral AI, journal des versions : tableurs Excel et CSV (22 septembre 2026)", url: "https://docs.mistral.ai/resources/release-notes" },
    { name: "Mistral AI, réglages d'entraînement selon l'offre", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
  ],
}
