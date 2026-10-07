// Contenu propre à /formation-copilot-word-excel (guide terrain, page propre). Rendu par SpokePage.
// Réécrit le 7 octobre 2026. Faits Microsoft : fiche FAITS-OUTILS du 07/10/2026 (support Word et Excel,
// Learn, notes de version du 06/10) et pages d'aide Excel et Word relevées le 28/09 (liens dans `sources`).
// La fonction de cellule COPILOT, retirée d'Excel le 14/09/2026, n'est plus enseignée ; seul un piège la cite.
export default {
  slug: 'formation-copilot-word-excel',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Copilot Word et Excel : rédiger, transformer un classeur et garder la main",
  metaTitle: "Formation Copilot Word et Excel | Masteria, Qualiopi",
  metaDesc: "Formation Copilot Word et Excel : Modifier avec Copilot, modes Édition, Plan et Conversation, règles de classeur, relecture des changements. Qualiopi.",
  resume: "La formation Copilot Word et Excel apprend à faire écrire et calculer Copilot directement dans vos documents et vos classeurs, puis à vérifier chaque changement avant de le garder. Elle concerne chaque métier dont les journées se passent dans la bureautique, et dure quatorze heures sur deux jours, pour un groupe (jusqu'à douze) ou une personne seule. Comptez 1 980 € HT par jour. Masteria possède la certification Qualiopi, condition pour que l'OPCO de votre branche examine un financement, à ses propres conditions.",
  enBref: [
    { label: 'Formation', value: "Copilot au travail dans Word et Excel, quel que soit le métier : premier jet, réécriture d'un document, transformation et lecture d'un classeur" },
    { label: 'Durée', value: "Deux jours de sept heures : Word le premier jour, Excel le second, puis le passage de l'un à l'autre" },
    { label: 'Formats', value: "Groupe en intra jusqu'à douze personnes, ou parcours individuel ; dans vos locaux ou en visioconférence" },
    { label: 'Tarif', value: "1 980 € HT la journée, du premier au douzième participant" },
    { label: 'Financement', value: "Organisme certifié Qualiopi : votre OPCO peut participer, d'après les règles de la branche et les fonds disponibles" },
    { label: 'Prérequis', value: "Savoir ce que sont un tableau, un filtre et un tableau croisé dynamique ; un compte Microsoft 365 professionnel" },
  ],
  prerequis: "Connaître les bases d'Excel (tableau, filtre, tableau croisé dynamique) et disposer d'un compte Microsoft 365 professionnel",
  intro: "Dans Word et Excel, Copilot modifie désormais le fichier ouvert. Il ajoute une section à votre note, réorganise un rapport, construit un tableau croisé dynamique ou reformate un onglet entier sous vos yeux. Microsoft Copilot (anciennement Microsoft 365 Copilot) passe ainsi du statut de conseiller à celui de coauteur, et la compétence utile devient le contrôle : choisir le bon mode, préparer le fichier, puis relire ce qui a changé. Cette formation bureautique s'appuie sur vos propres documents, quel que soit votre métier.",
  guide: {
    kicker: "Guide terrain bureautique",
    h2: "Copilot écrit dans vos documents et vos classeurs : choisissez le mode avant d'écrire la demande",
    lead: "Copilot peut rédiger une note dans Word ou remanier un classeur Excel en plusieurs étapes, et les changements apparaissent en direct. Le bon réflexe se résume en trois gestes : choisir le mode qui convient à la tâche, mettre le fichier en état, puis relire comme on relit le travail d'un stagiaire doué. Les fonctions affichées dépendent de votre licence, d'où le premier point à vérifier.",
    sections: [
      {
        h3: "Votre licence décide des fonctions que vous voyez dans Word et Excel",
        paras: [
          "Word, Excel, PowerPoint et OneNote affichent une mention qui vous situe. « Copilot Chat (Basic) » signifie que Copilot ne travaille pas dans ces applications pour vous. Une mention Basic accolée au nom de Copilot signale l'accès standard que donnent les abonnements professionnels, sans licence complémentaire. La mention Premium signale la licence Microsoft Copilot, avec un accès prioritaire. Ces mentions portent encore l'ancien nom du produit.",
          "Trois fonctions exigent la licence : Modifier avec Copilot dans Word, la source « Travail » d'Excel, qui va chercher dans vos documents professionnels, et le choix du modèle. Quand l'administrateur a autorisé Anthropic, le sélecteur propose Claude à côté des modèles d'OpenAI ; dans Excel, ce choix ne vaut que pour la session en cours.",
        ],
      },
      {
        h3: "Dans Word, Modifier avec Copilot travaille dans le document ouvert",
        paras: [
          "Le bouton Action dynamique Copilot ouvre le volet en mode Modifier. Pour une simple question, choisissez Chat uniquement : Copilot répond sans toucher au texte. Pour citer une source, tapez / puis le nom d'un fichier, d'un mail ou d'une réunion. Dans un document partagé, Copilot montre d'abord un aperçu et attend votre accord. Cette fonction remplace ce que Microsoft appelait auparavant le mode Agent, et la documentation française en liste les limites.",
        ],
        list: [
          "Modifier avec Copilot ne crée ni n'insère d'image.",
          "Il ne gère pas les commentaires, et un commentaire ancré sur un passage réécrit peut disparaître.",
          "Il n'accepte ni ne refuse les modifications suivies ; ses propres changements sont suivis si le suivi est activé.",
          "Il ne travaille que sur le document ouvert, et sur un long fichier le milieu reçoit moins d'attention que le début et la fin.",
        ],
      },
      {
        h3: "Dans Excel, Édition, Plan et Conversation ne promettent pas la même chose",
        paras: [
          "L'icône Copilot se trouve dans l'angle inférieur droit. Le volet s'ouvre en mode Édition : Copilot modifie le classeur et son raisonnement défile pendant qu'il agit. Le mode Plan propose d'abord une démarche, que vous corrigez avant qu'il passe à l'action. Le mode Conversation analyse et répond sans rien changer. L'édition fonctionne sous Windows, sur Mac et dans le navigateur, et Microsoft la déploie sur iPad et iPhone.",
          "Trois conditions expliquent la plupart des échecs. L'édition exige un calcul réglé sur Automatique. Une bibliothèque SharePoint qui impose l'extraction des fichiers bloque Copilot sous Windows et Mac, alors qu'Excel dans le navigateur passe. Le format Strict Open XML n'est pas pris en charge : enregistrez en .xlsx. Chaque modification enregistrée devient visible des coauteurs ; pour expérimenter, coupez l'enregistrement automatique ou travaillez sur une copie.",
        ],
      },
      {
        h3: "Règles de classeur et compétences fixent les conventions de l'équipe",
        paras: [
          "Une feuille visible nommée .Rules, avec une règle par cellule dans la colonne A, dicte à Copilot les conventions du classeur : format des montants, palette des graphiques, ordre des colonnes. Elle se crée depuis Ajouter du contenu de travail, puis Créer des règles de classeur, et elle voyage avec le fichier. La page anglaise de Microsoft précise que ces règles ne sont pleinement prises en charge qu'en anglais, ce que la page française omet.",
          "Les compétences vont plus loin : un fichier SKILL.md décrit une tâche répétitive, comme le nettoyage d'un export mensuel, et Copilot l'applique à la demande. Elles exigent pour l'instant un Office affiché en anglais. Python dans Excel fait partie des abonnements professionnels et Entreprise, avec une puissance de calcul standard.",
        ],
      },
      {
        h3: "Le choix du modèle et Cowork élargissent le terrain de jeu",
        paras: [
          "Depuis le 6 octobre 2026, Copilot sur le web propose de relancer une réponse en changeant de modèle. Microsoft annonce aussi l'arrivée, dans la semaine qui a suivi le 30 septembre, de nouveaux modèles d'OpenAI et d'Anthropic dans Word, Excel et PowerPoint. En atelier, soumettre la même réécriture à deux modèles aide chacun à choisir le sien.",
          "Copilot Cowork, généralisé aux comptes d'entreprise fin septembre 2026, produit lui-même des documents Word, des classeurs, des présentations ou des PDF au fil d'une tâche en plusieurs étapes, et s'arrête pour obtenir votre feu vert dès qu'une action est sensible. Son usage est facturé en plus de la licence. Les réflexes appris sur un document ouvert valent pour lui : relire ce qui a été produit avant de le diffuser.",
        ],
      },
    ],
    table: {
      caption: "Besoin courant, endroit où cliquer et point de vigilance, au 7 octobre 2026",
      headers: ["Besoin", "Où cliquer", "Vigilance"],
      rows: [
        ["Premier jet d'une note depuis un compte rendu", "Word : volet Copilot, / pour citer le fichier", "Chiffres, noms et dates relus un par un"],
        ["Reprendre un document en relecture", "Word : Outils, puis Modifier avec Copilot", "Commentaires traités avant la réécriture"],
        ["Résumer un rapport de soixante pages", "Word : Chat uniquement, partie par partie", "Le milieu du fichier reçoit moins d'attention"],
        ["Nettoyer et fusionner trois onglets", "Excel : mode Plan, puis validation", "Calcul réglé sur Automatique"],
        ["Comprendre un classeur hérité", "Excel : mode Conversation", "Chaque formule expliquée avant toute retouche"],
        ["Imposer les conventions d'un classeur", "Excel : feuille .Rules", "Règles rédigées en anglais, une par cellule"],
      ],
    },
    cas: {
      h3: "Cas pratique : de l'enquête interne sur le télétravail à la note du comité",
      contexte: "Imaginons une chargée de mission dans une collectivité de 400 agents. Elle a diffusé un questionnaire Microsoft Forms sur le télétravail, récupère 180 réponses dans Excel, dont une colonne de commentaires libres, et la direction générale attend vendredi une synthèse de deux pages. Le scénario est pédagogique.",
      etapes: [
        "Elle enregistre le classeur en .xlsx dans OneDrive, puis vérifie dans l'onglet Formules que les options de calcul sont sur Automatique.",
        "Elle ouvre le volet Copilot, sélectionne Plan et y colle la demande suivante.",
        "Elle lit le plan, corrige en une phrase l'étape qui ne lui convient pas, puis valide.",
        "Elle relit une vingtaine de commentaires tirés au hasard avec le thème attribué ; si le classement cloche, elle précise les catégories et relance l'étape 2.",
        "Elle reporte tableau et graphique dans un document Word, active le suivi des modifications, puis demande avec Modifier avec Copilot une note de deux pages fondée sur ces seuls éléments.",
      ],
      prompt: "Ce classeur rassemble les réponses à un questionnaire interne sur le télétravail, une ligne par répondant. Les colonnes donnent le service, le nombre de jours de télétravail par semaine, une note de satisfaction de 1 à 5 et un commentaire libre.\n\nPrésente-moi d'abord ton plan ; ne l'exécute qu'une fois que je l'aurai approuvé.\n1. Ajoute un onglet « Données nettoyées » : retire les doublons, harmonise les noms de services, surligne en orange les lignes sans note.\n2. Ajoute une colonne « Thème » qui range chaque commentaire dans une seule catégorie : équipement et connexion, réunions, isolement, lien avec le responsable, trajets, autre. Pour un commentaire vide, écris « sans commentaire ».\n3. Ajoute un onglet « Résultats » avec un tableau croisé dynamique : note moyenne et nombre de répondants par service, puis nombre de commentaires par thème.\n4. Ajoute un graphique en barres de la note moyenne par service, de la plus basse à la plus haute.\n5. Sous le tableau, écris trois constats courts, chacun appuyé sur un chiffre du tableau.\n\nNe touche pas à l'onglet des réponses brutes. Ne crée aucune valeur absente du fichier, et signale toute information manquante.",
      resultat: "La chargée de mission obtient deux onglets supplémentaires et un graphique prêt à coller. Le classement des commentaires reste la partie fragile : un commentaire ambigu tombe tantôt dans « autre », tantôt dans un thème voisin, d'où l'échantillon relu à l'étape 4. Les moyennes sont calculées par Excel et sont justes si l'onglet nettoyé l'est. Dans la note Word, chaque chiffre cité doit se retrouver dans le tableau, et le suivi des modifications garde la trace de ce que Copilot a écrit.",
    },
    pieges: [
      {
        titre: "Lancer une modification sur le fichier partagé du service",
        texte: "Vos collègues voient le résultat dès l'enregistrement. Travaillez sur une copie ou coupez l'enregistrement automatique ; l'historique des versions permet de revenir en arrière si Copilot a trop changé.",
      },
      {
        titre: "Perdre les remarques du relecteur dans Word",
        texte: "La réécriture sur place laisse de côté les commentaires et les modifications suivies laissées par vos collègues. Traitez les commentaires et tranchez les modifications en attente avant de demander une réécriture.",
      },
      {
        titre: "Écrire ses règles de classeur en français",
        texte: "Les règles ne sont pleinement prises en charge qu'en anglais. Écrivez-les courtes, une par cellule, avec un exemple du résultat attendu, et testez-les sur une copie du classeur.",
      },
      {
        titre: "Rouvrir un vieux classeur bâti sur la fonction COPILOT",
        texte: "Microsoft a retiré cette fonction de cellule le 14 septembre 2026. Les valeurs déjà calculées restent en cache, mais un recalcul affiche #NOM?. Copiez les résultats en valeurs avant toute manipulation, puis refaites le travail dans le volet Copilot.",
      },
    ],
  },
  audience: [
    { title: "Chargés de mission, assistants et office managers", desc: "Vous produisez notes, comptes rendus et tableaux de suivi pour plusieurs services. Vous voulez que Copilot fasse le premier jet et le nettoyage des données, sans perdre la maîtrise du fichier final." },
    { title: "Managers et chefs de projet", desc: "Vous relisez et consolidez les documents de l'équipe. Vous apprenez ce que Modifier avec Copilot change dans un document partagé et comment revenir en arrière." },
    { title: "Utilisateurs réguliers d'Excel", desc: "Exports, tableaux croisés dynamiques et classeurs hérités sont votre quotidien. Vous faites travailler Copilot en mode Plan et fixez les conventions de l'équipe dans une feuille de règles." },
  ],
  useCases: [
    { icon: '📄', title: "Premier jet d'une note", desc: "Word rédige à partir d'un compte rendu cité avec /, puis vous relisez les chiffres, les noms et les dates." },
    { icon: '📝', title: "Réécriture d'un document partagé", desc: "Modifier avec Copilot travaille sur place, avec un aperçu dans les documents partagés et le suivi des modifications." },
    { icon: '📋', title: "Résumé d'un long rapport", desc: "Chat uniquement et résumé partie par partie, pour que le milieu du document garde sa place." },
    { icon: '🧹', title: "Nettoyage et fusion d'onglets", desc: "Mode Plan puis exécution dans Excel, calcul sur Automatique, onglet d'origine conservé intact." },
    { icon: '🔎', title: "Explication d'un classeur hérité", desc: "Le mode Conversation fait expliquer chaque formule sans modifier une seule cellule." },
    { icon: '📈', title: "Synthèse d'une enquête interne", desc: "Commentaires libres classés, tableau croisé dynamique et graphique dans Excel, puis note rédigée dans Word." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Situer son accès à Copilot dans Word et Excel", duration: '1h30',
      description: "Avant de bâtir des méthodes, chacun sait ce que sa licence lui ouvre et ce que voit Copilot de ses données.",
      items: [
        "Mentions Premium, Basic et « Copilot Chat (Basic) » dans les applications",
        "Fonctions réservées à la licence : Modifier avec Copilot, source Travail, choix du modèle",
        "Bouton Action dynamique Copilot, mode Modifier et Chat uniquement",
        "Données : protection des données d'entreprise, requêtes web envoyées à Bing sans nom ni entreprise",
      ],
      exercise: "Chacun note la mention que portent son Word et son Excel, puis dresse la liste des fonctions qui lui sont ouvertes.",
    },
    {
      day: 1, title: "Module 2 · Obtenir un premier jet Word appuyé sur vos sources", duration: '2h',
      description: "Un premier jet exploitable vient d'une demande précise et de sources désignées. Vous construisez la méthode sur vos propres comptes rendus.",
      items: [
        "Citer un fichier, un mail ou une réunion avec /",
        "Partir d'un document existant pour garder la mise en forme de la maison",
        "Préciser public, ton, format et longueur dans la demande",
        "Relire les faits, les chiffres et les noms repris par Copilot",
      ],
      exercise: "Vous rédigez une note de deux pages à partir d'un compte rendu récent de votre service.",
    },
    {
      day: 1, title: "Module 3 · Réécrire un document en relecture sans perdre les remarques", duration: '2h',
      description: "Copilot modifie le document sur place. Vous gardez la trace de chaque changement et la possibilité de revenir en arrière.",
      items: [
        "Outils, puis Modifier avec Copilot : réorganiser, raccourcir, restructurer",
        "Aperçu des modifications dans un document partagé",
        "Commentaires et modifications suivies : ce que Copilot ne gère pas",
        "Annuler une réécriture ou revenir à une version antérieure",
      ],
      exercise: "Vous traitez les commentaires d'un document en cours, puis faites réécrire une section avec le suivi des modifications activé.",
    },
    {
      day: 1, title: "Module 4 · Interroger et résumer un long document", duration: '1h30',
      description: "Un rapport long se questionne bien et se résume mal d'un seul bloc. Vous apprenez la méthode qui garde ses passages importants.",
      items: [
        "Questions ciblées sur un document de plusieurs dizaines de pages",
        "Résumé partie par partie, puis assemblage",
        "Pourquoi le milieu d'un long fichier reçoit moins d'attention",
        "Régénérer une réponse avec un autre modèle et comparer",
      ],
      exercise: "Vous résumez par parties un de vos rapports longs et vérifiez trois passages que vous savez importants.",
    },
    {
      day: 2, title: "Module 5 · Mettre un classeur en état de travailler avec Copilot", duration: '1h30',
      description: "La plupart des échecs dans Excel viennent du fichier. Vous apprenez à le préparer pour que Copilot puisse le modifier sans erreur.",
      items: [
        "Fichier .xlsx dans OneDrive ou SharePoint, calcul sur Automatique",
        "Bibliothèques SharePoint à extraction obligatoire : passer par Excel dans le navigateur",
        "Enregistrement automatique, copie de travail et historique des versions",
        "Sélection des sources : web, travail, connecteurs",
      ],
      exercise: "Vous mettez en état un de vos classeurs de suivi et vérifiez que Copilot peut y travailler.",
    },
    {
      day: 2, title: "Module 6 · Transformer un classeur en mode Plan", duration: '2h',
      description: "Copilot exécute une transformation en plusieurs étapes. Vous validez la démarche avant qu'il agisse, puis vous contrôlez le résultat.",
      items: [
        "Demande rédigée en étapes numérotées",
        "Lecture et correction du plan avant l'exécution",
        "Nettoyage, fusion d'onglets, tableaux croisés dynamiques et graphiques",
        "Contrôle des formules produites et des constats rédigés",
      ],
      exercise: "Vous faites nettoyer et synthétiser un de vos exports en mode Plan, puis contrôlez chaque chiffre du résultat.",
    },
    {
      day: 2, title: "Module 7 · Classer du texte libre et passer d'Excel à Word", duration: '2h',
      description: "Des réponses libres se rangent dans Excel, puis deviennent une note dans Word. Le module relie les deux applications.",
      items: [
        "Classement des commentaires dans des catégories définies à l'avance",
        "Échantillon contrôlé et définitions affinées",
        "Remplacement des classements faits jadis avec la fonction de cellule retirée",
        "Tableau et graphique collés dans Word, note rédigée avec Modifier avec Copilot",
      ],
      exercise: "Vous classez les réponses libres d'une de vos enquêtes internes et en tirez une note d'une page.",
    },
    {
      day: 2, title: "Module 8 · Écrire les conventions de l'équipe et sa consigne de relecture", duration: '1h30',
      description: "Des résultats homogènes d'une personne à l'autre demandent des conventions écrites et une relecture définie.",
      items: [
        "Feuille .Rules : une règle par cellule, en anglais, visible",
        "Compétences SKILL.md pour les tâches répétitives",
        "Ce qui n'entre pas dans Copilot (données de santé, salaires nominatifs) et relecture avant diffusion ; session inscrite au registre interne prévu par l'article 4 de l'AI Act",
        "Plan à trente jours : un classeur et un modèle Word de référence confiés à un responsable",
      ],
      exercise: "Vous rédigez la feuille .Rules de votre classeur le plus partagé, puis la consigne de relecture que l'équipe appliquera.",
    },
  ],
  objectives: [
    "Le participant sait rédiger dans Word une note fondée sur des sources citées avec / et vérifier chaque fait repris.",
    "Le participant sait réécrire un document partagé avec Modifier avec Copilot en préservant commentaires et suivi des modifications.",
    "Le participant sait choisir entre les modes Édition, Plan et Conversation d'Excel selon la tâche.",
    "Le participant sait préparer un classeur pour que Copilot puisse le modifier : format, emplacement, mode de calcul.",
    "Le participant sait contrôler les formules, tableaux croisés dynamiques et constats produits par Copilot.",
    "Le participant sait rédiger une feuille .Rules qui applique les conventions de l'équipe.",
  ],
  faq: [
    {
      q: "Faut-il une licence pour utiliser Copilot dans Word et Excel ?",
      a: "Pas toujours. Les abonnements Microsoft 365 professionnels et Entreprise qui donnent droit à Copilot Chat ouvrent déjà Copilot dans les deux applications, au niveau standard, signalé par une mention Basic. La licence Microsoft Copilot apporte l'accès prioritaire, Modifier avec Copilot dans Word, la source Travail dans Excel et le choix du modèle. Si l'application affiche « Copilot Chat (Basic) », Copilot ne fonctionne pas dans Word et Excel pour ce compte : la formation commence par ce relevé.",
    },
    {
      q: "Quelle différence entre les modes Édition, Plan et Conversation dans Excel ?",
      a: "Le mode Édition modifie le classeur à partir de votre demande, et vous voyez son raisonnement défiler. Le mode Plan propose d'abord une démarche, que vous validez ou corrigez avant toute modification. Le mode Conversation analyse et répond dans le volet sans toucher au fichier. Pour un classeur partagé ou important, commencez par Plan ; pour comprendre un fichier hérité, Conversation suffit et ne fait courir aucun risque.",
    },
    {
      q: "Peut-on choisir entre Claude et les modèles d'OpenAI dans Word et Excel ?",
      a: "Oui, avec la licence Microsoft Copilot et si l'administrateur a autorisé Anthropic comme sous-traitant ; en Europe, cette option est coupée par défaut, et ce qui part vers Claude échappe au périmètre européen de traitement des données. Le sélecteur propose aussi Auto, qui choisit le modèle à votre place. Dans Excel, le choix vaut pour la session. Sur le web, un bouton ajouté le 6 octobre 2026 relance aussi une réponse en changeant de modèle.",
    },
    {
      q: "Qu'est devenue la fonction COPILOT dans les cellules Excel ?",
      a: "Microsoft l'a retirée le 14 septembre 2026, après une préversion réservée à certains programmes de test. Les valeurs déjà calculées restent visibles en cache, mais une cellule recalculée affiche #NOM?. Microsoft renvoie vers le volet Copilot pour résumer, classer ou générer du texte à partir d'une plage. La formation montre comment refaire ces classements dans le volet et figer les résultats en valeurs.",
    },
    {
      q: "Copilot peut-il résumer un document de plus de cent pages ?",
      a: "Il répond bien à une question précise sur un long document, car il va chercher le passage utile. Un résumé complet est plus fragile : Microsoft signale que le milieu d'un long fichier reçoit moins d'attention que le début et la fin. La méthode enseignée consiste à découper le document par parties, à résumer chacune, puis à assembler, en vérifiant au passage trois passages que vous savez importants.",
    },
    {
      q: "Nos documents servent-ils à entraîner les modèles ?",
      a: "Non. Avec un compte professionnel, la protection des données d'entreprise s'applique : vos demandes et les réponses relèvent des mêmes garanties contractuelles que vos fichiers SharePoint, et Microsoft s'interdit de les utiliser pour l'entraînement. Copilot n'ouvre que les fichiers auxquels vous avez déjà accès. La recherche web fait exception : une requête courte part vers Bing, sans votre nom ni celui de votre entreprise.",
    },
    {
      q: "Faut-il être expert d'Excel pour suivre cette formation ?",
      a: "Savoir ce que sont un tableau, un filtre et un tableau croisé dynamique suffit. Copilot construit les formules et les tableaux ; la formation apprend à les lire et à repérer une erreur. Les débutants commencent par le mode Conversation, qui ne modifie rien. Les utilisateurs avancés vont plus loin, avec les règles de classeur, les compétences et Python dans Excel, que les abonnements professionnels comprennent en calcul standard.",
    },
    {
      q: "Comment financer une formation Copilot Word et Excel ?",
      a: "Masteria est certifié Qualiopi pour ses actions de formation : votre OPCO peut donc étudier le dossier, puis décider d'après son barème et ses fonds. Le jour de formation est facturé 1 980 € HT, pour un participant comme pour une douzaine, et le parcours entier 3 960 € HT. Nous rédigeons le programme et la convention que réclame l'OPCO ; pendant les ateliers, chacun manipule ses propres documents.",
    },
  ],
  tarifs: {
    titre: "Ce que comprend le prix d'une formation bureautique",
    paras: [
      "Avant la session, le formateur demande deux ou trois fichiers types à l'équipe : un compte rendu à transformer en note, un document en cours de relecture, un export ou un classeur hérité. Il vérifie avec votre informatique la mention affichée dans Word et Excel pour chaque participant, afin que personne ne cherche un bouton absent. Les supports, les demandes du guide et la feuille de règles rédigée au module 8 restent à l'équipe.",
      "Exemple : un service administratif inscrit dix personnes de métiers différents. Les deux jours en intra font 3 960 € HT pour le groupe, soit 396 € HT par participant. Pour un manager qui préfère un accompagnement individuel, le prix par jour ne change pas. Le dossier de financement part ensuite à votre OPCO, qui applique le barème de votre branche.",
    ],
  },
  apres: {
    titre: "Après la formation, des modèles et des compétences bâtis pour vos fichiers",
    texte: "Quand l'équipe maîtrise les modes de Copilot, les besoins deviennent précis : une compétence qui nettoie l'export mensuel de votre logiciel, un modèle Word qui produit le rapport d'activité à partir du classeur de suivi, un agent qui répond sur vos procédures bureautiques. Masteria peut les construire dans votre environnement Microsoft 365, les tester sur vos fichiers du dernier trimestre et former un référent pour les tenir à jour. Le forfait se fixe après un cadrage, et ce développement n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous un document et un classeur typiques de votre équipe : les ateliers seront bâtis dessus.",
    fin: {
      titre: "Préparons la session avec vos documents et vos classeurs",
      texte: "Précisez le nombre de participants, leurs métiers et la mention Copilot affichée dans leur Word. Nous revenons avec un programme ajusté à vos fichiers et des dates possibles.",
    },
  },
  terrain: {
    titre: "Dans un groupe industriel, Excel et Word ont porté l'essentiel des ateliers Copilot",
    texte: "Entre l'été et la fin septembre 2026, Masteria a mené cinq sessions Copilot de deux jours pour un groupe international de l'emballage, en commençant par des managers pilotes. Excel y tenait la première place, avec des ateliers sur les prix, l'activité, les coûts et une base RH ; venaient ensuite Word, Outlook et des présentations PowerPoint conformes à l'identité visuelle du groupe. Les retours écrits des participants citent d'abord le fait d'avoir travaillé sur leurs propres fichiers.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  liensAssocies: [
    { label: "Toutes les formations Microsoft Copilot", href: '/formation-microsoft-copilot' },
    { label: "Sprint de trois heures sur l'IA dans Excel", href: '/formation-sprint-ia-excel' },
    { label: "Analyser ses données avec plusieurs assistants d'IA", href: '/formation-ia-analyse-donnees' },
    { label: "Copilot au service des directions financières", href: '/formation-copilot-finance' },
    { label: "Gemini ou Copilot dans la suite bureautique", href: '/gemini-vs-copilot' },
  ],
  sources: [
    { name: "Aide Microsoft : démarrer avec Copilot dans Excel (Édition, Plan, Conversation)", url: "https://support.microsoft.com/fr-FR/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Aide Microsoft, en anglais : le mode d'édition d'Excel et sa disponibilité par appareil", url: "https://support.microsoft.com/en-us/office/agent-mode-in-excel-a2fd6fe4-97ac-416b-b89a-22f4d1357c7a" },
    { name: "Aide Microsoft : la foire aux questions d'Excel avec Copilot", url: "https://support.microsoft.com/fr-fr/excel/copilot/frequently-asked-questions-about-copilot-in-excel" },
    { name: "Aide Microsoft : les sources de données de Copilot dans Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/copilot-in-excel-data-sources" },
    { name: "Aide Microsoft, en anglais : les règles de classeur et la réserve sur l'anglais", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-rules" },
    { name: "Aide Microsoft : les compétences de Copilot pour Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/copilot-in-excel-skills" },
    { name: "Aide Microsoft, en anglais : retrait de la fonction de cellule COPILOT", url: "https://support.microsoft.com/en-us/office/copilot-function-5849821b-755d-4030-a38b-9e20be0cbf62" },
    { name: "Aide Microsoft : Python dans Excel, offres concernées", url: "https://support.microsoft.com/fr-fr/excel/python/python-in-excel-availability" },
    { name: "Aide Microsoft : les limites de la réécriture sur place dans Word", url: "https://support.microsoft.com/fr-fr/word/edit-with-copilot-in-word" },
    { name: "Aide Microsoft : premiers pas avec Copilot dans Word", url: "https://support.microsoft.com/fr-fr/office/bienvenue-dans-copilot-dans-word-2135e85f-a467-463b-b2f0-c51a46d625d1" },
    { name: "Aide Microsoft, en anglais : longueur des documents et qualité des réponses", url: "https://support.microsoft.com/en-us/topic/keep-it-short-and-sweet-a-guide-on-the-length-of-documents-that-you-provide-to-copilot-66de2ffd-deb2-4f0c-8984-098316104389" },
    { name: "Microsoft Learn, en anglais : présentation de Copilot, mentions Basic et Premium", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
    { name: "Microsoft Learn, en anglais : notes de version (changement de modèle, 6 octobre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes" },
  ],
}
