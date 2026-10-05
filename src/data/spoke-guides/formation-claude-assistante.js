// Contenu propre à /formation-claude-assistante (guide terrain). Rendu par SpokePage.
// Faits Claude : claude-facts.js et faits-claude.md (vérifiés le 5 octobre 2026).
// Fait métier : Claude pour Outlook en bêta publique depuis le 7 mai 2026 (sources-metiers.json).
export default {
  slug: 'formation-claude-assistante',
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  pagePropre: true,
  auteur: true,
  metaDesc: "Formation Claude pour assistantes de direction : Outlook, agenda, comptes rendus, dossier de comité, courriers du dirigeant, Excel et PowerPoint.",
  resume: "Pensée pour les assistantes et assistants de direction, cette formation Claude dure deux jours (14 heures) et se suit en présentiel dans l'entreprise ou à distance. Elle réunit jusqu'à douze personnes d'un même siège, ou une seule en parcours individuel. Le prix d'une journée est de 1 980 € HT. Organisme certifié Qualiopi, Masteria monte avec vous la demande à l'OPCO, dont l'aide varie selon la branche et suppose un dépôt avant la session.",
  enBref: [
    { label: 'Formation', value: "Claude dans le quotidien d'une assistante de direction : boîte Outlook, agenda, dossiers de comité, courriers, tableaux Excel et supports PowerPoint" },
    { label: 'Durée', value: "Quatorze heures réparties sur deux jours, calées de préférence avant un comité réel à préparer" },
    { label: 'Formats', value: "Assistantes d'un même siège en intra, douze au plus, ou parcours individuel ; en présentiel dans vos bureaux d'Europe, des États-Unis ou d'Inde, ou en visioconférence" },
    { label: 'Tarif', value: "Exercices préparés sur vos modèles de courrier, vos comptes rendus et vos ordres du jour, pour 1 980 € HT la journée" },
    { label: 'Financement', value: "Masteria, organisme certifié Qualiopi, ouvre l'accès au financement de votre OPCO, selon votre branche ; dossier à déposer avant la session" },
    { label: 'Prérequis', value: "Une offre Claude payante ; Microsoft 365 avec Exchange Online pour l'extension Outlook, ou Google Workspace pour les connecteurs Gmail et Agenda" },
  ],
  intro: "Une assistante de direction prépare ce que le dirigeant lira et signera : la boîte triée du matin, la note avant un rendez-vous, le dossier du comité, le courrier, le relevé de décisions. Claude s'installe désormais dans Outlook, Word, Excel et PowerPoint, et se branche sur votre messagerie et votre agenda depuis sa propre application. Ce guide explique comment lui laisser la lecture et la première version, comment lui apprendre le ton de la direction et comment protéger les dossiers confidentiels qui transitent par votre poste.",
  guide: {
    kicker: "Guide terrain",
    h2: "Claude prépare le dossier, l'assistante décide de ce qui part",
    lead: "Depuis le 7 mai 2026, Claude pour Outlook, une extension qui s'ouvre dans la messagerie, est en bêta publique sur toutes les offres payantes. Il trie la boîte de réception, dépose des réponses en brouillon avec destinataires et objet déjà remplis, et propose des invitations après avoir vérifié les disponibilités des participants. Aucun message ne part sans un clic sur Envoyer. Cette règle organise tout le poste : Claude lit et prépare, vous relisez et vous envoyez. Elle vaut aussi dans Word, Excel et PowerPoint, où Claude travaille dans les fichiers ouverts, en disponibilité générale depuis la même date.",
    sections: [
      {
        h3: "Claude pour Outlook trie, résume et rédige, sans jamais envoyer",
        paras: [
          "Demandez-lui ce qui réclame votre attention : il range les messages non lus en trois groupes, ce qui exige votre intervention, ce qu'il peut préparer pour votre relecture et le bruit à archiver d'une seule sélection ; chaque message qui vous attend porte une ligne qui justifie son classement. Sur un long fil, il dégage les décisions prises, les points ouverts et ce que chacun doit encore, chaque affirmation renvoyant au message d'où elle vient.",
          "Il lit sans les ouvrir les pièces jointes Word et Excel du message affiché ; un PDF joint s'enregistre d'abord, puis se dépose dans le volet de Claude. Pour fixer une réunion, il consulte les disponibilités de toutes les personnes dont vous voyez l'agenda et prépare l'invitation dans le formulaire de rendez-vous d'Outlook. Avant le prochain rendez-vous, il rassemble sur une page le dernier échange avec chaque participant et les documents joints.",
          "L'extension ne demande pas le droit d'envoyer des messages : chaque réponse attend votre clic dans la fenêtre de rédaction. Trois conditions s'appliquent. La boîte doit être hébergée sur Exchange Online, dans Microsoft 365. Un administrateur général du compte Microsoft 365 donne une fois son accord pour toute l'organisation. Outlook pour iPhone et pour Android n'accueille pas l'extension.",
        ],
      },
      {
        h3: "Le ton du dirigeant s'apprend à partir de ses propres courriers",
        paras: [
          "Claude pour Outlook déduit le ton du dossier des éléments envoyés : la longueur des phrases, le registre, la façon de conclure. Dans votre boîte, il écrit donc comme vous. Pour rédiger au nom du dirigeant, fournissez des courriers qu'il a lui-même signés, et relisez les titres et les formules de politesse, que la direction choisit au cas par cas.",
          "Trois endroits gardent ces repères. Les « Instructions pour Claude », dans Paramètres, valent pour toutes vos conversations. Un projet « Courrier de la direction » réunit des lettres signées, la liste des formules d'appel et de politesse par destinataire et la charte de rédaction ; ses consignes ne s'appliquent qu'à ses propres échanges. Dans Word, Excel et PowerPoint, chaque extension possède un champ d'instructions dans ses réglages, qui ne se transmet pas entre applications.",
          "Un courrier qui revient chaque mois, comme la lettre de remerciement après une intervention ou la réponse à une sollicitation déclinée, peut devenir une compétence (Skill) : un petit dossier où un fichier nommé SKILL.md décrit la procédure, que Claude suit dès qu'une demande correspond à sa description. Les compétences activées dans votre compte servent aussi dans les extensions Office. Opus 5.5, modèle de départ conseillé par Anthropic pour la majorité des travaux, met l'essentiel en tête : demandez-lui une première phrase qui dise l'objet du courrier.",
        ],
      },
      {
        h3: "Le dossier de comité se monte dans un dossier de travail confié à Cowork",
        paras: [
          "Cowork est le mode de Claude qui exécute une tâche sur des fichiers. Depuis l'application de bureau, il lit et écrit dans un dossier de votre ordinateur que vous lui ouvrez, sans téléversement. Sur un dossier de séance, il vérifie que chaque point de l'ordre du jour a sa pièce, propose un nommage dans l'ordre de passage, rédige le sommaire et une fiche par point, puis produit les documents Word, Excel ou PowerPoint du dossier. Avant de supprimer définitivement un fichier, il demande votre accord.",
          "Anthropic conseille de ne pas ouvrir à Cowork des fichiers sensibles. Créez donc un dossier de travail qui ne contient que les pièces destinées aux membres du comité, jamais le répertoire entier de la direction. Les sessions menées sur votre ordinateur y gardent leur historique, hors de la gestion centrale de l'administrateur : un poste partagé ne convient pas à un dossier de conseil d'administration.",
          "Le relevé de décisions se prépare avant la séance. À partir de l'ordre du jour et des fiches, Claude dresse une trame qui reprend chaque point avec la décision attendue et des cases pour la décision prise, le vote éventuel et les actions. En séance, vous la remplissez ; ensuite, Claude la met au propre à partir de vos notes ou de la transcription exportée de Teams ou de Meet, et marque « à confirmer » ce que les notes laissent ambigu.",
        ],
      },
      {
        h3: "Les connecteurs ouvrent la messagerie et l'agenda dans la conversation",
        paras: [
          "Un connecteur relie Claude à un outil de l'entreprise par MCP (Model Context Protocol), un protocole ouvert de connexion entre assistants d'IA et logiciels. Sur un abonnement Team ou Enterprise, le connecteur doit d'abord être activé par un propriétaire du compte, puis chacun s'identifie avec ses propres accès.",
          "Le connecteur Microsoft 365 cherche dans Outlook, OneDrive, SharePoint et Teams avec vos droits, et rien au-delà ; il couvre aussi les boîtes partagées et déléguées auxquelles vous avez accès, en délégation complète ou limitée à certains dossiers. Si l'administrateur a ouvert ses outils d'écriture, il rédige et envoie des messages, gère des événements et crée des fichiers, en vous demandant confirmation par défaut.",
          "Côté Google Workspace, le connecteur Gmail cherche, lit, rédige et envoie, avec votre accord avant chaque envoi par défaut, mais ne voit des pièces jointes que leurs métadonnées. Le connecteur Google Agenda consulte aussi les agendas partagés, cherche des créneaux communs et crée ou modifie des événements. La recherche approfondie, appelée Recherche dans l'interface et réservée aux offres payantes, croise le web et ces outils connectés pour bâtir une note de briefing sourcée.",
        ],
      },
    ],
    table: {
      caption: "Ce que Claude prend en charge dans la semaine d'une assistante, et ce que vous vérifiez",
      headers: ["Tâche", "Fonction de Claude", "Point de contrôle"],
      rows: [
        ["Trier la boîte du matin", "Claude pour Outlook, tri en trois groupes", "Vérifier que rien d'urgent n'a été rangé dans le bruit"],
        ["Rédiger une réponse que signera le dirigeant", "Brouillon dans Outlook, projet « Courrier de la direction »", "Ton tiré des courriers du dirigeant ; envoi par vous"],
        ["Fixer un rendez-vous à plusieurs", "Claude pour Outlook, disponibilités et invitation préparée", "Priorités entre agendas tranchées par vous"],
        ["Monter le dossier du comité", "Cowork sur un dossier de séance", "Dossier de travail limité aux pièces diffusables"],
        ["Préparer une note de briefing", "Recherche approfondie, connecteurs messagerie et agenda", "Chaque source ouverte avant transmission"],
        ["Tenir le suivi des actions et le support", "Extensions Excel et PowerPoint de Claude", "Formules vérifiées, masque de l'entreprise conservé"],
      ],
    },
    cas: {
      h3: "Cas pratique : le dossier du conseil d'administration prêt huit jours avant la séance",
      contexte: "Prenons l'assistante du président d'une ETI de 600 salariés. Le conseil d'administration se réunit le 9 décembre, et les administrateurs reçoivent le dossier huit jours plus tôt, le 1er décembre. Les pièces arrivent par mail de quatre directions : comptes du troisième trimestre, budget 2027, point juridique, projet de résolution. L'entreprise dispose de Claude sur l'offre Team et de l'application de bureau. Cette situation est imaginée pour l'exercice.",
      etapes: [
        "Créez sur votre ordinateur un dossier « CA 9 décembre » et n'y placez que les pièces destinées aux administrateurs, avec l'ordre du jour validé par le président.",
        "Dans l'application de bureau Claude, donnez à Cowork l'accès à ce dossier et collez la demande ci-dessous.",
        "Relisez le tableau de contrôle : chaque pièce manquante ou périmée devient une relance, que vous rédigez avec Claude pour Outlook et envoyez vous-même.",
        "Ouvrez la présentation du conseil dans PowerPoint ; l'extension Claude complète les diapositives à partir des fiches, dans le masque de l'entreprise.",
        "Faites valider le sommaire et les fiches par le président, puis transmettez le dossier par le canal habituel des administrateurs.",
      ],
      prompt: "Tu prépares avec moi le dossier du conseil d'administration du 9 décembre. Le dossier ouvert contient l'ordre du jour validé (ordre-du-jour.docx) et les pièces reçues des directions.\n\n1. Contrôle : pour chaque point de l'ordre du jour, indique la ou les pièces qui s'y rapportent, leur date et leur version. Dresse un tableau des pièces manquantes, des doublons et des versions plus anciennes qu'une autre pièce du dossier.\n2. Classement : propose un nouveau nom pour chaque fichier, sous la forme « 01-intitulé du point », dans l'ordre de l'ordre du jour. Attends mon accord avant de renommer quoi que ce soit, et ne supprime aucun fichier.\n3. Sommaire : rédige dans un document Word le sommaire du dossier, avec le numéro et le titre de chaque pièce.\n4. Fiches : pour chaque point, rédige une fiche tenant sur une page avec l'objet, ce qui est attendu du conseil (information, avis ou décision), les trois chiffres ou faits principaux et la pièce qui les contient.\n5. Trame du relevé : prépare un document qui reprend chaque point avec la décision attendue et des cases vides pour la décision prise, le vote et les actions.\n\nRègles : travaille uniquement à partir des fichiers de ce dossier. Quand deux pièces donnent un montant ou une date différents, mentionne-le sans rien corriger. N'écris aucun chiffre absent des pièces.",
      resultat: "Le dossier revient avec un tableau de contrôle, un plan de nommage en attente de votre accord, le sommaire, une fiche par point et la trame du relevé de décisions. Avant de valider, ouvrez chaque pièce signalée comme plus ancienne pour confirmer la version, et retrouvez dans les pièces les chiffres repris par deux fiches tirées au hasard. Le jour du conseil, vous remplissez la trame en séance ; après la réunion, Claude met le relevé au propre à partir de vos notes, et le président le relit avant diffusion.",
    },
    pieges: [
      {
        titre: "Le mail externe qui donne des ordres à Claude",
        texte: "Un message reçu d'un expéditeur inconnu peut cacher, dans son corps, sa signature ou une pièce jointe, du texte écrit pour Claude, par exemple l'ordre de transférer un fil. La documentation de Claude pour Outlook décrit ce risque, appelé injection de consignes. Relisez chaque brouillon et chaque action proposée, à commencer par la liste des destinataires.",
      },
      {
        titre: "Un souvenir de trop sur la direction",
        texte: "Sur Team et Enterprise, la mémoire ne démarre que si vous l'activez ; une fois active, relisez à intervalles réguliers ce qu'elle retient dans Paramètres, puis Mémoire. Un jugement sur un interlocuteur ou le détail d'un déplacement privé du dirigeant n'y a pas sa place. Chaque souvenir se modifie ou s'efface, et chaque projet garde une mémoire séparée.",
      },
      {
        titre: "L'historique des extensions laissé sur un poste partagé",
        texte: "L'historique des conversations menées dans Outlook, Word, Excel ou PowerPoint s'enregistre dans le navigateur de votre poste ; Anthropic ne le range pas sur ses serveurs et ne le synchronise pas d'un appareil à l'autre. Avant de prêter votre poste pendant une absence, effacez cet historique depuis les réglages de l'extension.",
      },
      {
        titre: "La pièce jointe Gmail que Claude ne lit pas",
        texte: "Par le connecteur Gmail, Claude sait qu'un message porte une pièce jointe et en connaît les métadonnées, comme le nom du fichier, sans en lire le contenu. Une note de briefing bâtie sur un fil Gmail peut donc omettre l'essentiel du document joint. Enregistrez la pièce et déposez-la dans la conversation.",
      },
    ],
  },
  audience: [
    {
      title: "Assistantes et assistants de direction",
      desc: "Vous tenez la boîte, l'agenda et les dossiers d'un ou de plusieurs dirigeants. Vous apprenez à déléguer à Claude le tri et la première version, en gardant l'envoi et l'arbitrage.",
    },
    {
      title: "Office managers et assistants d'équipe",
      desc: "Les tableaux de suivi, les supports et la logistique des réunions passent par vous. Vous apprenez à travailler avec Claude dans Excel et PowerPoint sans abîmer vos modèles.",
    },
    {
      title: "Secrétaires généraux et assistants de conseil",
      desc: "Vous préparez les comités et les conseils d'administration. Vous apprenez à monter un dossier de séance complet et à préparer le relevé de décisions avant la réunion.",
    },
  ],
  useCases: [
    { icon: '📥', title: "Tri de la boîte de réception", desc: "Claude pour Outlook répartit les non-lus en trois groupes et prépare les réponses simples en brouillon." },
    { icon: '🗒️', title: "Note de briefing", desc: "Une page avant chaque rendez-vous : derniers échanges avec les participants, documents joints, points restés ouverts." },
    { icon: '📁', title: "Dossier de comité", desc: "Cowork contrôle les pièces reçues, propose le nommage, rédige le sommaire et une fiche par point." },
    { icon: '✉️', title: "Courriers de la direction", desc: "Des brouillons écrits à partir de lettres signées par le dirigeant, avec ses formules et son registre." },
    { icon: '📊', title: "Tableaux et supports", desc: "L'extension Excel tient le suivi des actions, l'extension PowerPoint met à jour le support dans le masque de l'entreprise." },
    { icon: '🔒', title: "Confidentialité des dossiers", desc: "Dossier de travail restreint, mémoire relue, historique des extensions effacé avant de prêter un poste." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Installer Claude dans Outlook et dans l'agenda",
      duration: "1h30",
      description: "Repérer ce que Claude lit, ce qu'il prépare et ce qu'il n'envoie jamais.",
      items: [
        "Claude pour Outlook en bêta : Exchange Online, accord de l'administrateur, offres payantes",
        "Tri en trois groupes et résumé de fil avec renvoi aux messages",
        "Disponibilités consultées et invitation préparée dans le formulaire d'Outlook",
        "Connecteurs Microsoft 365, Gmail et Google Agenda : droits et confirmations",
      ],
      exercise: "Vous triez une boîte de démonstration ou la vôtre, puis vous comparez le classement de Claude au vôtre.",
    },
    {
      day: 1,
      title: "Module 2 · Faire écrire Claude avec la voix du dirigeant",
      duration: "2h",
      description: "Obtenir des brouillons que le dirigeant signe sans les réécrire.",
      items: [
        "Le ton appris dans les éléments envoyés, et ce que cela implique pour une assistante",
        "Projet « Courrier de la direction » : lettres signées, formules, charte",
        "Instructions du compte, du projet et de chaque extension Office",
        "Compétence pour les courriers qui reviennent chaque mois",
      ],
      exercise: "Vous constituez le projet de courrier de votre dirigeant et vous rédigez trois réponses délicates.",
    },
    {
      day: 1,
      title: "Module 3 · Bâtir la page de préparation de chaque rendez-vous",
      duration: "2h",
      description: "Remettre au dirigeant ce qu'il doit savoir avant d'entrer en réunion.",
      items: [
        "Note d'une page : participants, derniers échanges, documents, points ouverts",
        "Recherche approfondie avec sources pour un interlocuteur extérieur",
        "Informations professionnelles publiques, et elles seules, sur les personnes",
        "Contrôle des fonctions, des titres et des dates cités",
      ],
      exercise: "Vous préparez la note de briefing d'un rendez-vous réel ou fictif de votre dirigeant.",
    },
    {
      day: 1,
      title: "Module 4 · Mettre au propre les comptes rendus",
      duration: "1h30",
      description: "Transformer une prise de notes ou une transcription en compte rendu fidèle.",
      items: [
        "Transcription exportée ou notes manuscrites saisies, avec l'ordre du jour",
        "Décisions, actions, porteurs, échéances et points reportés",
        "Mention « à confirmer » plutôt que supposition",
        "Compte rendu complet et message de suivi tirés du même contenu",
      ],
      exercise: "À partir de notes fournies par le formateur, vous établissez le compte rendu et la liste des points à confirmer.",
    },
    {
      day: 2,
      title: "Module 5 · Monter un dossier de séance avec Cowork",
      duration: "2h",
      description: "Préparer un comité ou un conseil complet, pièce par pièce.",
      items: [
        "Cowork dans l'application de bureau : dossier de travail, lecture et écriture des fichiers",
        "Tableau de contrôle des pièces, des versions et des doublons",
        "Nommage soumis à votre accord, sommaire et fiche par point",
        "Trame du relevé de décisions dressée avant la séance",
      ],
      exercise: "Vous montez le dossier d'un comité à partir de pièces fournies et vous complétez la trame du relevé.",
    },
    {
      day: 2,
      title: "Module 6 · Travailler dans Excel et PowerPoint avec Claude",
      duration: "2h",
      description: "Tenir les suivis et les supports sans casser les modèles.",
      items: [
        "Extension Excel : réponses qui citent les cellules, tris, filtres, mises en forme conditionnelles",
        "Tableau de suivi des actions avec listes déroulantes de validation",
        "Extension PowerPoint : masque, mises en page et graphiques natifs modifiables",
        "Travail entre fichiers ouverts, désactivé au départ sur Team et Enterprise",
      ],
      exercise: "Vous mettez à jour le tableau de suivi des actions d'un comité et le support qui en découle.",
    },
    {
      day: 2,
      title: "Module 7 · Protéger les dossiers de la direction",
      duration: "1h30",
      description: "Savoir par où passent les informations confidentielles.",
      items: [
        "Ce que garantissent les offres Team et Enterprise, et pourquoi les comptes personnels restent exclus",
        "Mémoire : activation, sujets sensibles, relecture et suppression",
        "Historique des extensions conservé dans le navigateur",
        "Injection de consignes dans les mails venus de l'extérieur",
      ],
      exercise: "Vous passez en revue vos réglages, puis vous écrivez les consignes de discrétion qui s'appliquent à votre poste.",
    },
    {
      day: 2,
      title: "Module 8 · Organiser le poste avec le dirigeant",
      duration: "1h30",
      description: "Répartir le travail entre Claude, vous et le dirigeant.",
      items: [
        "Courriers que vous envoyez seule et courriers que le dirigeant relit",
        "Routine de la semaine : tri, briefings, comités",
        "Plusieurs dirigeants : un projet par périmètre",
        "Passage de relais à une remplaçante grâce aux projets et aux compétences partagés",
      ],
      exercise: "Vous écrivez avec le groupe la charte de travail qui lie l'assistante, le dirigeant et Claude.",
    },
  ],
  objectives: [
    "Le participant sait trier une boîte avec Claude pour Outlook et contrôler le classement proposé.",
    "Le participant sait constituer un projet qui permet à Claude d'écrire dans le ton du dirigeant.",
    "Le participant sait monter un dossier de séance avec Cowork : contrôle des pièces, sommaire, fiches et trame du relevé.",
    "Le participant sait bâtir une note de briefing à partir des connecteurs et de la recherche approfondie, sources vérifiées.",
    "Le participant sait mettre à jour un tableau de suivi dans Excel et un support dans PowerPoint avec Claude sans altérer les modèles.",
    "Le participant sait appliquer aux dossiers de la direction les réglages de confidentialité qui conviennent.",
  ],
  faq: [
    {
      q: "Claude a-t-il le droit d'expédier un mail au nom de mon dirigeant sans passer par moi ?",
      a: "Pas avec Claude pour Outlook : l'extension ne demande pas le droit d'envoyer et laisse chaque réponse en brouillon. Le connecteur Microsoft 365, lui, peut envoyer si l'administrateur a ouvert ses outils d'écriture, et Claude demande alors une confirmation par défaut. Sur la boîte du dirigeant, l'envoi reste votre geste.",
    },
    {
      q: "Claude travaille-t-il dans la boîte de mon dirigeant si j'ai une délégation ?",
      a: "Le connecteur Microsoft 365 cherche dans toute boîte partagée ou déléguée qui vous est ouverte, en délégation complète ou par dossier, avec vos droits Microsoft 365 et rien de plus. La documentation de Claude pour Outlook décrit le travail dans votre propre boîte et dans les agendas que vous pouvez consulter : testez la délégation dans votre configuration avant de bâtir vos habitudes sur elle.",
    },
    {
      q: "Que faut-il pour installer Claude dans Outlook, Word, Excel et PowerPoint ?",
      a: "Une offre Claude payante (Pro, Max, Team ou Enterprise) et Microsoft 365. Excel, Word et PowerPoint sont en disponibilité générale ; Outlook, en bêta, demande une boîte Exchange Online et l'accord d'un administrateur général pour l'organisation. Les extensions tournent sur le web, sous Windows et sur Mac ; les versions 2016 et 2019 vendues sous licence perpétuelle et les applications mobiles ne les acceptent pas.",
    },
    {
      q: "Notre entreprise est sous Google Workspace : que reste-t-il pour moi ?",
      a: "Les connecteurs Gmail, Google Agenda et Google Drive, utilisables dans l'application Claude une fois qu'un propriétaire de l'organisation les a activés sur Team ou Enterprise. Claude y recherche et rédige des messages, consulte les agendas partagés et crée des événements, avec votre accord avant chaque envoi par défaut. Le contenu des pièces jointes Gmail lui échappe : déposez le fichier dans la conversation.",
    },
    {
      q: "Claude garde-t-il en mémoire ce que je lui confie sur la direction ?",
      a: "Rien ne s'y inscrit tant que vous n'avez pas activé la mémoire, inactive au départ dans les organisations Team et Enterprise. Une fois allumée, elle n'enregistre ni la santé ni les convictions, à moins d'un réglage contraire, et elle ne garde jamais certains éléments, comme un numéro de pièce d'identité. Vous relisez et supprimez chaque souvenir dans Paramètres, puis Mémoire.",
    },
    {
      q: "Peut-on s'exercer sur nos vrais dossiers de comité ?",
      a: "Dans le cadre que fixe votre service informatique, oui : les ateliers peuvent se dérouler sur vos comptes Claude et vos fichiers, ou sur des boîtes et des dossiers de démonstration que nous fournissons. Les exercices de courrier partent de lettres déjà signées par votre dirigeant, que vous apportez.",
    },
    {
      q: "La formation peut-elle se dérouler dans nos locaux, sur nos postes et nos comptes ?",
      a: "Oui, c'est souvent le plus simple pour les extensions Office, déjà installées sur vos postes. Le formateur se rend dans vos bureaux, y compris à l'étranger lorsque votre siège se trouve aux États-Unis, en Inde ou dans un autre pays d'Europe ; les mêmes ateliers existent aussi en classe virtuelle sur Teams ou Google Meet.",
    },
    {
      q: "Qui monte le dossier de financement de la formation des assistantes ?",
      a: "La demande part de votre employeur vers son OPCO, avant la première journée. Masteria, certifié Qualiopi, vous remet de quoi constituer le dossier : le programme de la formation et la convention. L'OPCO fixe ensuite le montant pris en charge d'après les critères de votre branche, sur une base de 1 980 € HT pour chaque journée.",
    },
  ],
  terrain: {
    titre: "Une assistante de direction a réparti ses routines entre Copilot et Claude",
    texte: "Une assistante de direction, employée par un éditeur de logiciels pour les entreprises, a suivi seule en septembre 2026 une journée de formation à distance. Son poste disposait déjà de Copilot, sans aucun compte Claude, et elle cherchait d'abord à alléger les tâches qui reviennent chaque semaine. Au programme : un comité de direction préparé de l'ordre du jour jusqu'au mémo remis au dirigeant, puis une règle simple pour choisir l'outil, qui réserve à Copilot les informations internes et nominatives, confie à Claude les textes publics ou anonymisés et tranche pour Copilot dans le doute. Son plan à trente jours retient les premières tâches à outiller ; elle mesurera le gain un mois plus tard.",
    lien: '/etudes-de-cas-ia#mission-assistanat-direction',
  },
  tarifs: {
    titre: "Les ateliers se préparent sur vos ordres du jour, vos comptes rendus et vos courriers types",
    paras: [
      "En amont, nous recueillons quelques documents de votre poste : l'ordre du jour d'un comité récent, deux comptes rendus, trois courriers signés par la direction, le tableau de suivi des actions. Le formateur en tire les exercices, ou fabrique des dossiers d'exercice de même forme quand les originaux sont trop confidentiels pour être projetés. Une session type réunit les assistantes de direction d'un siège, parfois rejointes par l'office manager ou l'assistante du conseil d'administration.",
      "Former quatre assistantes ensemble pendant deux jours coûte 3 960 € HT, soit 990 € HT par personne, la TVA de 20 % venant en plus. Seule, une assistante paie la journée 1 980 € HT. Votre OPCO peut financer une partie ou la totalité de cette dépense, d'après les critères que fixe votre branche, pourvu que la demande lui arrive avant la formation.",
    ],
  },
  apres: {
    titre: "Une compétence courrier ou un assistant de comité peut suivre la formation",
    texte: "Masteria peut ensuite construire avec vous un outil à la mesure du poste : une compétence partagée qui rédige les courriers de la direction selon ses modèles et ses formules, ou un projet de comité qui prépare l'ordre du jour, vérifie les pièces reçues et dresse la trame du relevé de décisions. Le cadrage fixe les sources que l'outil consulte, ce qui reste hors de sa portée, comme les dossiers du personnel, et les validations qui précèdent tout envoi. Une fois installé, l'outil s'essaie sur un comité passé, puis l'équipe d'assistantes le fait vivre.",
  },
  cta: {
    milieu: "Venez avec l'ordre du jour du comité qui vous attend : la deuxième journée le prend comme fil conducteur.",
    fin: {
      titre: "Préparons la formation à partir de la semaine réelle de votre poste",
      texte: "Décrivez-nous votre messagerie, votre agenda et les comités que vous préparez. Vous recevez en retour une proposition de programme, un calendrier et les documents utiles à la demande de financement.",
    },
  },
  liensAssocies: [
    { label: "Formation IA des assistantes de direction : mails, agenda et comptes rendus, tous outils", href: '/formation-ia-assistante' },
    { label: "Écrits professionnels avec l'IA : courriers, notes et synthèses", href: '/formation-ia-ecrits-pro' },
    { label: "Sprint IA Excel : trois heures pour reprendre la main sur vos tableaux de suivi", href: '/formation-sprint-ia-excel' },
    { label: "Assistant documentaire sur mesure pour retrouver procédures et notes de service", href: '/assistant-documentaire-ia' },
  ],
  avisPriorite: ['Claude', 'administrati', 'mails?', 'dossiers?'],
  sources: [
    { name: "Blog Claude, 7 mai 2026 : Claude dans Excel, PowerPoint et Word, et Outlook en bêta publique", url: "https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook" },
    { name: "Documentation Claude : l'extension Outlook, du tri de la boîte au consentement de l'administrateur", url: "https://claude.com/docs/office-agents/outlook" },
    { name: "Documentation Claude : l'extension Excel, citations de cellules et opérations natives", url: "https://claude.com/docs/office-agents/excel" },
    { name: "Documentation Claude : enchaîner Outlook, Word, Excel et PowerPoint sans ressaisir le contexte", url: "https://claude.com/docs/office-agents/work-across-apps" },
    { name: "Centre d'aide Claude : brancher Microsoft 365, boîtes partagées et déléguées comprises", url: "https://support.claude.com/en/articles/15183774-connect-to-microsoft-365" },
    { name: "Centre d'aide Claude : connecteurs Gmail, Google Agenda et Google Drive", url: "https://support.claude.com/en/articles/10166901-using-the-google-workspace-connectors" },
    { name: "Centre d'aide Claude : Cowork au sein d'une organisation, réglages et historique", url: "https://support.claude.com/en/articles/13455879-use-cowork-on-team-and-enterprise-plans" },
    { name: "Centre d'aide Claude : mémoire, sujets sensibles et recherche dans l'historique", url: "https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context" },
  ],
}
