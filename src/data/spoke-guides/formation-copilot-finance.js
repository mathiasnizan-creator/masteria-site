// Contenu propre à /formation-copilot-finance (guide terrain, page propre). Rendu par SpokePage.
// Faits Microsoft : fiche du 7 octobre 2026 (Learn, pages tarifs France, support Word et Excel,
// retrait de =COPILOT() le 14/09/2026). Prix HT relevés le 7 octobre 2026. Réécrit le 07/10/2026.
export default {
  slug: 'formation-copilot-finance',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation Microsoft Copilot en finance : clôture, budget et reporting',
  metaTitle: 'Formation Copilot Finance · Microsoft 365 | Masteria',
  metaDesc: "Formation Copilot finance : exports traités en mode Plan dans Excel, notes d'écarts dans Word, slides du comité, licences, données. 2 jours, Qualiopi.",
  keywords: "formation copilot finance, copilot excel finance, copilot contrôle de gestion, microsoft copilot direction financière, formation copilot daf, copilot clôture mensuelle, formation copilot qualiopi opco",
  prerequis: "Pratique courante d'Excel ; Copilot Chat suffit pour une partie des ateliers, la licence Microsoft Copilot ouvre les autres",
  resume: "Ce programme Copilot de deux jours montre à une direction financière comment confier à Microsoft Copilot (anciennement Microsoft 365 Copilot) ses exports, ses classeurs et ses notes de gestion, en gardant l'origine de chaque montant. Les 14 heures se suivent dans vos bureaux ou en classe virtuelle, jusqu'à douze stagiaires d'une même direction, ou un seul. Facturée 1 980 € HT par journée, la session ouvre droit à une demande auprès de votre OPCO, qui tranche d'après ses règles et ses fonds disponibles.",
  enBref: [
    { label: 'Formation', value: "Copilot dans Excel, Word, PowerPoint et Teams, appliqué à la clôture, au budget et au reporting" },
    { label: 'Durée', value: "14 heures sur deux journées, à placer hors des semaines de clôture" },
    { label: 'Formats', value: "Une équipe de votre entreprise jusqu'à douze stagiaires, ou un participant en parcours individuel ; chez vous ou en classe virtuelle" },
    { label: 'Tarif', value: "1 980 € HT la journée ; deux jours : 3 960 € HT, prix inchangé de deux à douze inscrits" },
    { label: 'Financement', value: "Organisme certifié Qualiopi : l'OPCO de votre branche examine la prise en charge d'après ses critères" },
    { label: 'Prérequis', value: "Manier Excel chaque semaine ; les licences de chacun sont relevées avec vous avant la session" },
  ],
  intro: "Dans une direction financière, Copilot travaille d'abord dans Excel. Au 7 octobre 2026, il y propose trois modes : Plan, qui décrit sa démarche et attend votre feu vert, Édition, qui transforme le classeur ouvert, et Conversation, qui explique sans toucher aux cellules. Word réécrit ensuite la note de gestion affichée, PowerPoint en tire les slides du comité. Reste la question que se pose chaque contrôleur : peut-on signer un chiffre sorti de Copilot ? Ce programme y répond par une discipline appliquée à vos propres exports, où la formule reste visible, la source est citée et la relecture précède toute diffusion.",
  guide: {
    kicker: 'Guide terrain finance',
    h2: "Chaque montant produit par Copilot doit vivre dans une cellule que vous pouvez ouvrir",
    lead: "Un assistant d'IA génère un montant avec le même mécanisme qu'un mot : il calcule ce qui viendra le plus probablement ensuite. Dans Excel, Copilot dispose d'une parade, puisqu'il peut poser des formules dans le classeur au lieu d'annoncer un résultat dans son volet. La méthode de ce guide découle de cette différence. On demande le calcul dans une cellule, on lit le plan avant l'exécution, puis on rapproche le total de la balance avant de laisser le chiffre entrer dans une note.",
    sections: [
      {
        h3: "Votre licence décide de ce que Copilot voit de la finance",
        paras: [
          "Dans bien des directions financières, une partie des postes n'a que Copilot Chat, compris dans les abonnements Microsoft 365. Il puise dans le web et dans les pièces qu'on lui confie, ce qui suffit pour faire commenter un export ou relire une note. La licence Microsoft Copilot lui donne accès, par Microsoft Graph (l'index qui relie mails, fichiers, réunions et agenda), à tout ce que le contrôleur a le droit d'ouvrir ; elle débloque aussi Researcher, Analyst et, dans Word, la réécriture du document affiché. Excel et Word affichent une étiquette Basic ou Premium qui situe chaque poste ; l'étiquette Copilot Chat (Basic) désigne un poste où ces deux applications n'intègrent pas Copilot.",
          "Les pages françaises de Microsoft, qui portent encore l'ancien nom au 7 octobre 2026, fixent le prix de Copilot Business : 18,20 € HT mensuels par siège réglés à l'année, ou 21,84 € HT si vous payez chaque mois, avec un engagement de douze mois dans les deux cas. Cette formule s'adresse aux structures qui comptent jusqu'à 300 utilisateurs ; au-delà, la licence des grandes entreprises revient à 26,00 € HT mensuels payés à l'année. Équiper huit personnes en Copilot Business engage donc 1 747,20 € HT par an, avant toute remise.",
        ],
      },
      {
        h3: "Dans Excel, le mode se choisit avant d'écrire la demande",
        paras: [
          "Le mode Plan convient à la transformation d'un export : Copilot annonce les étapes qu'il compte suivre (écarter les doublons, regrouper les comptes, construire le tableau croisé), vous corrigez celle qui cloche, puis il exécute. Le mode Conversation sert à comprendre le modèle laissé par un prédécesseur, car il commente les formules sans modifier une cellule. Le mode Édition agit tout de suite sur le fichier : réservez-le à une copie.",
          "D'après la documentation de Microsoft consultée fin septembre, trois réglages évitent la plupart des blocages : un fichier enregistré en .xlsx sur OneDrive ou SharePoint, un calcul laissé sur Automatique, et l'enregistrement automatique coupé le temps des essais, puisque chaque modification enregistrée s'affiche chez les coauteurs. Certains contrôleurs avaient glissé dans leurs tableaux la fonction =COPILOT(), proposée en test ; Microsoft l'a supprimée le 14 septembre 2026, et toute cellule recalculée qui l'appelle renvoie maintenant #NOM?.",
        ],
      },
      {
        h3: "La note de gestion s'écrit dans Word, à partir de chiffres déjà contrôlés",
        paras: [
          "Une fois le tableau d'écarts vérifié, Word prend le relais. On cite le classeur en tapant une barre oblique suivie de son nom, pour que Copilot s'appuie sur lui seul, on précise le lecteur (direction générale, comité, banquier), puis on fait reprendre la note ouverte avec Modifier avec Copilot. Microsoft en publie les limites : cette fonction ne traite ni les commentaires ni les modifications suivies, et un commentaire accroché à un paragraphe réécrit peut disparaître. Les remarques du relecteur se tranchent donc avant la réécriture.",
          "PowerPoint construit ensuite les slides du comité à partir de la note Word et peut aligner toute la présentation sur le gabarit de la société. Analyst, réservé à la licence, prend en charge les analyses de données longues ; Researcher mène une recherche documentée qui croise vos mails, vos classeurs et vos comptes rendus de réunion, utile avant un exercice budgétaire pour retracer l'évolution d'un poste de coûts.",
        ],
      },
      {
        h3: "Les fichiers sensibles se protègent par les droits d'accès, avant la session",
        paras: [
          "Copilot respecte les droits existants et montre à chacun ce qu'il pouvait déjà consulter, rien de plus. Un fichier de rémunérations ou un prévisionnel de cession partagé trop largement sur SharePoint remontera donc dans les réponses d'un collègue qui n'avait jamais pensé à l'ouvrir. Microsoft recommande une revue des droits SharePoint avant d'activer les licences. Vos demandes et ses réponses restent sous les garanties contractuelles qui couvrent déjà votre messagerie Exchange, et le trafic des salariés européens reste traité dans l'Union. Une exception : Claude et les autres modèles d'Anthropic, que Microsoft laisse éteints chez ses clients européens, sortent de cette frontière quand l'administrateur les allume. Quatre catégories de fichiers méritent une décision écrite avant la première session :",
        ],
        list: [
          "les résultats d'une société cotée tant qu'ils ne sont pas publiés ;",
          "les fichiers de paie nominatifs et les rémunérations individuelles ;",
          "les coordonnées bancaires des clients et des fournisseurs ;",
          "les projets d'acquisition, de cession ou de refinancement en cours.",
        ],
      },
      {
        h3: "Le modèle qui répond se règle, et deux modèles se comparent sur une même demande",
        paras: [
          "Copilot choisit lui-même son modèle tant que le sélecteur reste sur Auto. La position « réflexion approfondie » prend plus de temps et convient mieux à un raisonnement en plusieurs étapes, comme la décomposition d'un écart de marge entre effet prix et effet volume. Depuis le 30 septembre 2026, d'après une annonce de son centre de messages, Microsoft déploie GPT-6.1 Sol d'OpenAI et Claude Sonnet 5.5 d'Anthropic, d'abord dans Cowork et Copilot Studio, puis dans Word, Excel, PowerPoint et la conversation. Les notes de version du 6 octobre 2026 ajoutent, sur la version web, la possibilité de refaire une réponse avec un modèle différent.",
          "Pour une direction financière, l'exercice utile consiste à poser la même demande d'analyse à deux modèles et à confronter les résultats cellule par cellule. Un désaccord entre les deux réponses signale souvent une hypothèse implicite : un mois incomplet, une écriture d'extourne, une ligne de total comptée deux fois. Les modèles d'Anthropic restent coupés par défaut en Europe ; les activer revient à l'administrateur, qui le décide en connaissance de cause.",
        ],
      },
      {
        h3: "La revue mensuelle devient une routine que Copilot prépare",
        paras: [
          "Trois fonctions transforment une revue ponctuelle en rendez-vous mensuel. Les invites planifiées relancent la même demande à date fixe, dans la limite de dix par personne selon la documentation consultée fin septembre, et supposent la licence. Copilot Cowork assemble un dossier en plusieurs étapes, crée les fichiers Excel, Word ou PDF et peut démarrer à l'arrivée d'un mail, par exemple l'export que l'ERP envoie chaque mois ; il réclame votre accord avant tout envoi, et sa consommation s'ajoute au prix de la licence. Les compétences fixent par écrit une procédure de contrôle : Cowork en accepte jusqu'à cinquante personnalisées, et leur format SKILL.md se relit d'un assistant à l'autre.",
        ],
      },
    ],
    table: {
      caption: "Huit tâches de la direction financière confiées à Copilot, avec leur contrôle (octobre 2026)",
      headers: ['Travail', 'Où le faire', 'Contrôle avant usage'],
      rows: [
        ["Nettoyer l'export mensuel du grand livre", 'Excel, mode Plan, sur une copie du fichier', "Nombre de lignes et total des débits identiques à l'export"],
        ["Comprendre le budget légué par un prédécesseur", 'Excel, mode Conversation', 'Chaque formule commentée ouverte dans sa cellule'],
        ['Chiffrer les écarts entre budget et réalisé', 'Excel, mode Plan, avec un onglet de contrôle', 'Total du réalisé rapproché de la balance du mois'],
        ['Rédiger la note du comité', 'Word, classeur cité par la barre oblique, puis Modifier avec Copilot', 'Chaque montant de la note retrouvé dans le tableau'],
        ['Monter les slides de résultats', 'PowerPoint, en partant du fichier Word', "Échelle et source de chaque graphique vérifiées"],
        ["Situer un poste de coûts avant le budget", 'Researcher, avec la licence', 'Sources citées ouvertes une à une'],
        ['Préparer chaque mois le dossier du comité', 'Copilot Cowork, chaque envoi validé', 'Pièces jointes comparées au sommaire du dossier'],
        ["Confronter deux analyses d'un même écart", 'Régénération avec un autre modèle, version web', 'Hypothèses implicites repérées dans chaque réponse'],
      ],
    },
    cas: {
      h3: "Cas pratique : la revue des écarts du mois en une matinée",
      contexte: "Une contrôleuse de gestion travaille pour un fabricant de 150 salariés. Le 5 de chaque mois, elle reçoit l'export du réalisé par centre de coûts, à confronter au budget annuel découpé par mois, et elle doit remettre une note d'écarts au directeur financier avant le comité du 10. Le scénario est pédagogique ; pendant la session, les montants viennent de vos fichiers.",
      etapes: [
        "Placez l'export et le budget dans un même classeur, enregistré en .xlsx sur OneDrive, et vérifiez que le calcul est réglé sur Automatique.",
        "Ouvrez le volet Copilot, sélectionnez le mode Plan et collez la demande qui suit.",
        "Lisez le plan. Si un regroupement de comptes ne suit pas votre plan analytique, corrigez-le en une phrase avant de valider.",
        "Rapprochez le total de l'onglet de contrôle de la balance du mois, puis ouvrez trois formules d'écart prises au hasard.",
        "Copiez le tableau dans Word, citez le classeur avec la barre oblique et demandez une note d'une page au directeur financier, limitée aux écarts du tableau.",
      ],
      prompt: "Ce classeur contient deux onglets : « Réalisé » (export du mois, une ligne par écriture, avec le centre de coûts, le compte et le montant) et « Budget » (budget annuel mensualisé, une ligne par centre de coûts et par compte).\n\nCommence par me décrire ton plan ; attends mon accord avant de l'appliquer :\n1. Crée un onglet « Écarts » qui totalise le réalisé du mois par centre de coûts et par compte, en regard du budget du même mois.\n2. Ajoute l'écart en euros puis en pourcentage, chaque calcul posé par une formule visible.\n3. Colore en orange les écarts qui dépassent 10 % et, en valeur absolue, 5 000 €.\n4. Crée un onglet « Contrôle » qui compare le total de l'onglet « Écarts » avec celui de l'onglet « Réalisé ».\n5. Sous le tableau, liste les cinq écarts les plus élevés, sans chercher à les expliquer.\n\nNe modifie pas les onglets d'origine. N'invente aucun montant. Pour toute donnée absente, écris « à fournir ».",
      resultat: "Vous disposez d'un tableau d'écarts calculé par des formules ouvrables, d'un onglet qui prouve que rien ne s'est perdu entre l'export et le tableau, et des écarts qu'il reste à commenter. Copilot ignore leurs causes : une facture fournisseur arrivée en retard ou une provision passée en avance n'apparaissent nulle part dans l'export. L'explication appartient à la contrôleuse ; Copilot la met ensuite en forme dans Word.",
    },
    pieges: [
      {
        titre: 'Un pourcentage annoncé dans le volet, sans cellule derrière',
        texte: "Quand Copilot répond dans la conversation au lieu d'écrire une formule, le chiffre n'a aucune trace. Demandez-lui de poser le calcul dans une cellule nommée, puis ouvrez-la.",
      },
      {
        titre: 'Un classeur de clôture modifié sous les yeux des coauteurs',
        texte: "En mode Édition, chaque changement enregistré apparaît chez les collègues qui ont ouvert le fichier. Travaillez sur une copie, et restaurez une version antérieure du classeur si un essai tourne mal.",
      },
      {
        titre: 'Des cellules affichent #NOM? depuis la mi-septembre',
        texte: "Elles appelaient =COPILOT(), retirée par Microsoft le 14 septembre 2026. Copiez les valeurs encore en cache avant tout recalcul, puis refaites le traitement dans le volet Copilot.",
      },
      {
        titre: "Un export d'ERP aux colonnes sans titre",
        texte: "Copilot devine alors le sens des colonnes et peut inverser le signe des montants. Nommez chaque colonne et rappelez la convention de débit et de crédit dans la demande.",
      },
      {
        titre: 'Une note Researcher qui mélange deux exercices',
        texte: "Sur une question de coûts, Researcher peut citer côte à côte un budget et un réalisé, ou deux années voisines. Précisez la période et le type de document dans la demande, puis contrôlez la date de chaque source.",
      },
      {
        titre: "Un modèle d'Anthropic activé sans décision écrite",
        texte: "Ces modèles sortent du périmètre européen où Microsoft traite vos données. La charte dit qui les active, pour quels usages, et quels fichiers financiers leur restent fermés.",
      },
    ],
  },
  audience: [
    {
      title: 'Directeurs administratifs et financiers',
      desc: "Vous répartissez les licences, décidez des fichiers admis dans Copilot et validez les montants transmis hors de la direction. La formation vous donne des critères pour en juger, appuyés sur ce que votre équipe produit pendant les ateliers.",
    },
    {
      title: 'Contrôleurs de gestion',
      desc: "Budget, reprévision, revue des écarts et tableaux de bord passent par vos classeurs. Vous apprenez à faire transformer un export en mode Plan, à contrôler le résultat, puis à rédiger la note qui l'accompagne.",
    },
    {
      title: 'Comptables et trésoriers',
      desc: "Justification des comptes, rapprochements et prévisions de trésorerie : vous apprenez à faire commenter un classeur hérité et à vérifier chaque formule que Copilot y ajoute.",
    },
    {
      title: 'Responsables du reporting et de la consolidation',
      desc: "Vous rassemblez chaque mois les chiffres de plusieurs entités, livrés dans des formats qui varient. Vous apprenez à faire harmoniser ces exports en mode Plan et à documenter chaque retraitement dans un onglet que l'auditeur pourra relire.",
    },
  ],
  useCases: [
    { icon: '📊', title: 'Exports transformés en mode Plan', desc: "Le plan se lit et se corrige avant que Copilot touche au classeur ; un onglet de contrôle rapproche ensuite les totaux." },
    { icon: '🧮', title: 'Modèles hérités commentés', desc: "Le mode Conversation explique chaque formule d'un budget transmis par un prédécesseur, sans rien modifier." },
    { icon: '📝', title: "Notes d'écarts rédigées dans Word", desc: "Le tableau contrôlé est cité par la barre oblique, et la note ne reprend que ses chiffres." },
    { icon: '📈', title: 'Slides du comité de direction', desc: "PowerPoint bâtit la présentation en partant du texte validé dans Word, puis l'aligne sur le gabarit de la société." },
    { icon: '🔎', title: 'Recherches avant le budget', desc: "Researcher rassemble ce que vos mails, fichiers et comptes rendus disent d'un poste de coûts ; chaque source citée s'ouvre avant d'entrer dans une hypothèse." },
    { icon: '🔐', title: 'Partages SharePoint revus', desc: "Paie, rémunérations et projets de cession sont repérés et protégés avant que Copilot ne les retrouve." },
  ],
  modules: [
    {
      day: 1,
      title: 'Module 1 · Situer chaque poste de la direction financière',
      duration: '1h30',
      description: "Savoir ce que Copilot voit et produit selon la licence de chacun, avant de toucher au premier export.",
      items: [
        "Ce que chaque niveau ouvre en finance : Copilot Chat compris dans l'abonnement, licence Microsoft Copilot, Copilot Business",
        "Mention Basic ou Premium dans Excel et Word, sélecteur Auto, réponse rapide ou réflexion approfondie",
        "Où vont les données : garanties de l'offre professionnelle, traitement en Europe, cas des modèles d'Anthropic",
        "Fichiers tenus hors de Copilot : paie nominative, résultats non publiés, coordonnées bancaires",
      ],
      exercise: "Vous relevez la mention affichée dans votre Excel, puis vous listez trois fichiers de votre dernière clôture que Copilot peut retrouver avec vos droits actuels.",
    },
    {
      day: 1,
      title: 'Module 2 · Transformer un export en mode Plan',
      duration: '2h',
      description: "Confier à Copilot un traitement en plusieurs temps, dont vous avez approuvé chaque étape.",
      items: [
        "Préparer le fichier : format .xlsx, OneDrive ou SharePoint, calcul automatique, colonnes nommées",
        "Écrire une demande en étapes numérotées, avec la convention de signe et les seuils d'alerte",
        "Lire le plan, le corriger, puis lancer l'exécution",
        "Onglet de contrôle : nombre de lignes, total des débits, rapprochement avec la balance",
      ],
      exercise: "Vous faites transformer l'export du réalisé de votre dernier mois clos en tableau d'écarts, puis vous rapprochez son total de la balance.",
    },
    {
      day: 1,
      title: 'Module 3 · Faire parler un classeur hérité',
      duration: '1h30',
      description: "Comprendre un modèle budgétaire ou de trésorerie sans en changer une cellule.",
      items: [
        "Mode Conversation : expliquer une formule, une plage nommée, un lien entre onglets",
        "Repérer les valeurs saisies en dur au milieu des calculs",
        "Reprendre les cellules bâties sur =COPILOT(), que Microsoft a retirée en septembre 2026",
        "Documenter le modèle dans un onglet de notes que le successeur saura lire",
      ],
      exercise: "Vous faites commenter le prévisionnel de trésorerie le plus ancien de l'équipe et vérifiez trois explications de Copilot dans les cellules concernées.",
    },
    {
      day: 1,
      title: "Module 4 · Rédiger la note d'écarts dans Word",
      duration: '2h',
      description: "Passer du tableau contrôlé à une note que le directeur financier peut signer.",
      items: [
        "Citer le classeur par la barre oblique et cantonner Copilot à ses chiffres",
        "Régler le registre selon le lecteur : direction générale, comité, banquier",
        "Modifier avec Copilot sur la note ouverte, une fois commentaires et révisions tranchés",
        "Contrôle final : chaque montant de la note pointé dans le tableau",
      ],
      exercise: "À partir du tableau du module 2, vous écrivez le commentaire des écarts destiné à votre prochain comité, puis vous pointez chaque montant.",
    },
    {
      day: 2,
      title: 'Module 5 · Construire les slides du comité dans PowerPoint',
      duration: '1h30',
      description: "Tirer de la note une présentation fidèle aux chiffres et au gabarit de la société.",
      items: [
        "Générer la présentation depuis le fichier Word du commentaire",
        "Mettre tout le fichier au gabarit de la société en une demande",
        "Contrôler la source et l'échelle de chaque graphique",
        "Comparer slides et commentaire pour voir ce que Copilot a condensé ou laissé de côté",
      ],
      exercise: "Vous tirez de votre note d'écarts quatre slides pour le comité et vérifiez chaque graphique contre le tableau.",
    },
    {
      day: 2,
      title: 'Module 6 · Analyst et Researcher au service du budget',
      duration: '2h',
      description: "Confier une analyse longue ou une recherche documentée, puis en contrôler les sources.",
      items: [
        "Analyst : confier l'analyse d'un historique de ventes ou de coûts, puis vérifier ses calculs",
        "Researcher : préparer une note sourcée sur un poste de coûts, à partir de mails, de classeurs et de comptes rendus",
        "Blocs-notes Copilot : regrouper les documents du budget pour limiter Copilot à ce périmètre",
        "Séparer ce que dit la source de ce que Copilot en déduit",
      ],
      exercise: "Vous préparez avec Researcher une note sur l'évolution d'un de vos postes d'achat, puis vous ouvrez chacune des sources citées.",
    },
    {
      day: 2,
      title: 'Module 7 · Rendre la clôture répétable',
      duration: '2h',
      description: "Écrire une fois les demandes et les vérifications de chaque mois.",
      items: [
        "Une bibliothèque de demandes rangée par étape de la clôture",
        "Invites planifiées pour relancer chaque mois la même revue",
        "Copilot Cowork, dont la consommation s'ajoute au prix de la licence : assembler un dossier en plusieurs étapes, chaque envoi soumis à votre accord",
        "Compétence au format SKILL.md : une procédure de contrôle lisible aussi par d'autres assistants",
      ],
      exercise: "Vous écrivez la demande de votre revue d'écarts sous une forme réutilisable et l'éprouvez sur le mois précédent.",
    },
    {
      day: 2,
      title: 'Module 8 · Écrire la charte de la direction financière',
      duration: '1h30',
      description: "Décider des fichiers admis, des relecteurs et du plan des trente jours suivants.",
      items: [
        "Charte d'usage : fichiers admis, fichiers exclus, relecture obligatoire avant diffusion",
        "RGPD : données personnelles des salariés et des tiers présentes dans les exports",
        "AI Act : l'article 4, applicable depuis le 2 février 2025, impose de prendre des mesures pour que contrôleurs et comptables maîtrisent les assistants d'IA de leur poste",
        "Plan à 30 jours : trois travaux outillés par personne, un référent, une mesure du temps passé au bout d'un mois",
      ],
      exercise: "Vous rédigez la charte Copilot de votre direction financière et le plan des trente jours qui suivent la session.",
    },
  ],
  objectives: [
    "Choisir entre les modes Plan, Édition et Conversation d'Excel selon le travail à faire et le risque pour le classeur",
    "Faire transformer un export comptable en tableau d'écarts dont chaque montant repose sur une formule visible",
    "Rapprocher le résultat produit par Copilot de la balance grâce à un onglet de contrôle",
    "Rédiger dans Word une note d'écarts qui ne reprend que des chiffres vérifiés",
    "Monter, à partir de cette note, les slides d'un comité aux couleurs de la société",
    "Énoncer les fichiers financiers exclus de Copilot et les règles de relecture de l'équipe",
  ],
  faq: [
    {
      q: 'Copilot peut-il lire directement notre ERP ou notre logiciel comptable ?',
      a: "Pas dans le cadre de cette formation. Copilot travaille sur ce qui se trouve dans Microsoft 365 : fichiers OneDrive et SharePoint, mails, réunions et agenda. Les ateliers partent donc d'exports Excel de votre ERP, ce qui couvre l'essentiel d'une revue d'écarts ou d'une préparation budgétaire. Relier un agent à votre logiciel comptable passe par Copilot Studio, que Microsoft licencie à part ; c'est un projet de développement, chiffré après cadrage et distinct de la formation.",
    },
    {
      q: "Chaque membre de l'équipe doit-il avoir la licence Microsoft Copilot ?",
      a: "Pas forcément. Sans licence, beaucoup de postes voient déjà Copilot dans Excel et Word avec l'étiquette Basic, et Copilot Chat lit les fichiers qu'on lui dépose. La licence ajoute la recherche dans vos mails, fichiers et réunions, la réécriture des documents Word, Researcher et Analyst. Au 7 octobre 2026, Copilot Business se paie 18,20 € HT par mois avec un règlement annuel, 21,84 € HT avec un règlement mensuel ; un client existant de Microsoft 365 qui signe un nouvel engagement annuel d'ici au 31 décembre 2026 bénéficie la première année d'un prix de 15,60 € HT.",
    },
    {
      q: 'Peut-on confier à Copilot des chiffres qui ne sont pas encore publiés ?',
      a: "Avec un compte professionnel, vos demandes et leurs réponses relèvent de la protection que Microsoft applique aux données professionnelles, et elles n'alimentent pas l'entraînement de ses modèles. La question relève donc de vos règles : qui a le droit de voir ces chiffres, et dans quel espace SharePoint ils sont rangés. Dans une société cotée, un résultat avant sa publication peut constituer une information privilégiée ; la charte écrite au module 8 désigne alors les fichiers concernés et les personnes autorisées à les travailler dans Copilot.",
    },
    {
      q: 'Copilot calcule-t-il juste ?',
      a: "Quand il pose une formule dans une cellule, le calcul est celui d'Excel, exact si les données le sont. Le risque se loge ailleurs : une plage mal sélectionnée, un regroupement de comptes erroné, un signe inversé ou un chiffre donné dans la conversation sans formule derrière lui. La formation installe trois réflexes, exiger le calcul dans la cellule, lire le plan avant l'exécution, rapprocher le total de la balance. Ces trois contrôles faits, un contrôleur peut signer le résultat en connaissance de cause.",
    },
    {
      q: 'Que devient la fonction =COPILOT() utilisée dans nos tableaux ?',
      a: "Elle n'existe plus : sa période d'essai s'est achevée le 14 septembre 2026. Les résultats déjà calculés restent visibles tant que la cellule ne se recalcule pas ; ensuite, elle affiche #NOM?. Copiez les valeurs avant d'ouvrir le classeur sur un autre poste, puis refaites le traitement dans le volet Copilot, de préférence en mode Plan avec un onglet de contrôle. Le module 3 y consacre un exercice sur vos propres fichiers.",
    },
    {
      q: "La formation peut-elle se dérouler en anglais pour une équipe financière internationale ?",
      a: "Oui. En septembre 2026, Masteria a animé deux sessions Copilot de deux jours en anglais pour un groupe international du packaging, avec une responsable financière parmi les participants. Supports, demandes types et exercices se préparent dans la langue où l'équipe travaille. Un détail joue en faveur des groupes anglophones : d'après la documentation de Microsoft relevée fin septembre, les règles de classeur d'Excel ne fonctionnent complètement qu'en anglais, et ses compétences exigent un Office affiché dans cette langue.",
    },
    {
      q: 'Quels financements pour former une direction financière à Copilot ?',
      a: "Votre OPCO peut instruire une demande de prise en charge, Masteria étant certifié Qualiopi pour la formation ; il l'accepte ou non selon ses règles et les fonds qui lui restent. Pour le groupe entier, la facture des deux jours s'élève à 3 960 € HT, quel que soit le nombre d'inscrits jusqu'à douze, et les 1 980 € HT de la journée s'appliquent aussi en individuel. Nous vous remettons le déroulé complet et le projet de convention que l'opérateur réclame. À Genève et à Bruxelles, sans OPCO, le devis s'établit en euros hors taxes.",
    },
    {
      q: 'Faut-il préférer Claude à Copilot pour les travaux financiers ?',
      a: "Les deux se rejoignent : Copilot propose les modèles d'Anthropic à côté de ceux d'OpenAI dès que l'administrateur les active, et sa version web permet depuis le 6 octobre 2026 de relancer une réponse sur un second modèle. Le choix tient surtout à l'environnement. Une direction qui vit dans Excel, SharePoint et Teams gagne à rester dans Copilot, qui connaît ses fichiers et respecte ses droits. Une équipe qui lit des rapports de plusieurs centaines de pages, ou qui veut faire calculer par du code, peut compléter avec Claude, auquel nous consacrons un programme finance distinct.",
    },
  ],
  tarifs: {
    titre: 'Combien coûtent deux jours de Copilot pour une direction financière',
    paras: [
      "Les 1 980 € HT de chaque journée paient aussi le travail fait en amont : le formateur étudie un export anonymisé de votre ERP, un classeur budgétaire et le calendrier de vos clôtures, puis construit les exercices dessus. Vos stagiaires repartent avec les supports, les demandes types adaptées à votre plan analytique et la charte écrite au module 8.",
      "Imaginons dix inscrits, le DAF, cinq contrôleurs de gestion et quatre comptables : ils suivent la session de deux jours, facturée 3 960 € HT, ce qui revient à 396 € HT par tête. Les licences Copilot ne sont pas comprises ; elles s'achètent auprès de Microsoft ou de votre revendeur. Votre OPCO étudie ensuite la prise en charge selon ses critères, sur la base du dossier que nous montons avec vous.",
    ],
  },
  apres: {
    titre: "Une fois l'équipe formée, un agent pour la clôture",
    texte: "Quand la méthode est en place, Masteria peut construire pour votre direction financière un agent Copilot Studio qui lit l'export mensuel, applique vos contrôles et sort les soldes à expliquer, ou une compétence Cowork qui assemble chaque mois le dossier du comité. Chaque outil s'appuie sur vos droits Microsoft 365 et laisse la validation finale à la direction financière. Ce chantier de développement, chiffré au forfait une fois le besoin précisé, n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous un export anonymisé et votre calendrier de clôture : les deux jours se construisent autour de votre prochain comité.",
    fin: {
      titre: 'Préparons la session sur vos propres classeurs',
      texte: "Indiquez-nous la taille de l'équipe, les licences Copilot dont elle dispose et les fichiers qui reviennent chaque mois. Vous recevez en retour un programme et des dates qui évitent vos semaines de clôture.",
    },
  },
  terrain: {
    titre: "Sur le terrain : des ateliers Excel bâtis sur les fichiers d'un groupe industriel",
    texte: "Pour un groupe international du packaging qui déploie Copilot palier par palier, Masteria a monté ses exercices Excel sur les tarifs, les volumes d'activité et les coûts du groupe. Une responsable financière a suivi l'une des deux sessions animées en anglais en septembre 2026. Les équipes américaines et mexicaines reçoivent le même parcours en octobre 2026, les équipes indiennes en décembre.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  casIds: ['industrie'],
  liensAssocies: [
    { label: 'Les douze programmes Microsoft Copilot par métier', href: '/formation-microsoft-copilot' },
    { label: "Formation IA pour la finance, quel que soit l'assistant", href: '/formation-ia-finance' },
    { label: 'Copilot dans Word et Excel pour tous les services', href: '/formation-copilot-word-excel' },
    { label: 'Claude pour la finance : rapports longs et calculs par le code', href: '/formation-claude-finance' },
    { label: "Le financement OPCO d'une formation IA, étape par étape", href: '/blog/financer-formation-ia-opco-qualiopi' },
  ],
  sources: [
    { name: "Microsoft Learn : niveaux d'accès de Copilot et de Copilot Chat (page du 1er octobre 2026)", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview' },
    { name: "Microsoft France : tarifs de Copilot Business, relevés le 7 octobre 2026 sous l'ancien nom", url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/business' },
    { name: "Microsoft Support, en anglais : modes Plan, Édition et Conversation dans Excel", url: 'https://support.microsoft.com/en-us/office/agent-mode-in-excel-a2fd6fe4-97ac-416b-b89a-22f4d1357c7a' },
    { name: "Microsoft Support, en anglais : retrait de =COPILOT() à la mi-septembre 2026", url: 'https://support.microsoft.com/en-us/office/copilot-function-5849821b-755d-4030-a38b-9e20be0cbf62' },
    { name: "Support Microsoft : limites de Modifier avec Copilot dans Word", url: 'https://support.microsoft.com/fr-fr/word/edit-with-copilot-in-word' },
  ],
}
