// Contenu propre à /formation-copilot-marketing (guide terrain, page propre). Rendu par SpokePage.
// Réécrit le 7 octobre 2026. Faits Microsoft : fiche FAITS-OUTILS du 07/10/2026 (Learn, notes de version
// du 06/10, pages tarifs France) et pages d'aide Microsoft relevées le 28/09 (liens dans `sources`).
// Retirés : la fonction de cellule COPILOT (supprimée d'Excel le 14/09/2026) et l'ancien « mode Agent ».
export default {
  slug: 'formation-copilot-marketing',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Copilot marketing : campagnes, présentations et bilans dans Microsoft 365",
  metaTitle: "Formation Copilot marketing | Masteria, Qualiopi",
  metaDesc: "Formation Copilot marketing : brief, deck au gabarit de la marque, bilan de campagne dans Excel, visuels et agent de relecture. Deux jours, Qualiopi.",
  resume: "La formation Copilot marketing apprend à une équipe marketing à conduire une campagne entière dans Microsoft 365 avec Copilot : le brief, le plan de lancement, le deck au gabarit de la marque, les visuels, puis le bilan chiffré dans Excel. Elle dure deux journées de sept heures, suivies en équipe (douze places) ou en tête-à-tête, et la journée est facturée 1 980 € HT. Masteria détient la certification Qualiopi : la demande de prise en charge part à votre OPCO, qui applique les règles de votre branche.",
  enBref: [
    { label: 'Formation', value: "Copilot au service d'une équipe marketing : brief, plan, présentation, visuels, veille et lecture des résultats" },
    { label: 'Durée', value: "Deux jours de sept heures, le premier centré sur la production, le second sur les chiffres et la marque" },
    { label: 'Formats', value: "Une équipe marketing réunie en intra (jusqu'à douze), ou un responsable seul en parcours individuel ; sur site ou à distance" },
    { label: 'Tarif', value: "1 980 € HT la journée, montant identique pour un participant et pour un groupe de douze" },
    { label: 'Financement', value: "Certification Qualiopi de Masteria ; l'OPCO de votre branche peut financer la session, selon les règles qu'il applique et l'argent qu'il lui reste" },
    { label: 'Prérequis', value: "Un compte Microsoft 365 professionnel ; un brief et un export de campagne récents à apporter pour les ateliers" },
  ],
  prerequis: "Un compte Microsoft 365 professionnel ; un brief de campagne et un export de résultats récents pour les ateliers",
  intro: "Une équipe marketing range ses briefs dans SharePoint, ses exports de campagne dans Excel et ses gabarits PowerPoint validés par la marque. Microsoft Copilot (anciennement Microsoft 365 Copilot) travaille sur ces fichiers avec les droits de chaque personne, ce qui lui donne un avantage net dès que la tâche dépend de vos documents. Cette formation suit le cycle d'une campagne, du brief au bilan, et indique pour chaque étape ce que Copilot produit, ce qu'il faut contrôler et les tâches où un autre assistant fera mieux.",
  guide: {
    kicker: "Guide terrain",
    h2: "En marketing, Copilot tire sa force de vos fichiers et réclame une vigilance particulière sur les chiffres",
    lead: "Pour trouver un angle de campagne ou écrire une accroche, ChatGPT et Claude font aussi bien que Copilot. Copilot reprend l'avantage quand le travail s'appuie sur vos propres documents : il lit le brief, la plateforme de marque et ce qui s'est dit avec l'agence, là où ces documents sont rangés. Sa limite découle de la même logique. Les chiffres du marketing vivent dans les régies publicitaires, le CRM et l'outil d'emailing, que Copilot ne voit qu'à travers un export.",
    sections: [
      {
        h3: "Copilot Chat et la licence ne lisent pas les mêmes fichiers de campagne",
        paras: [
          "Tout abonnement Microsoft 365 professionnel comprend Copilot Chat. Il cherche sur le web et lit le fichier que vous lui déposez, ou le document ouvert à l'écran. La licence Microsoft Copilot, vendue sous le nom de Copilot Business aux entreprises qui comptent au plus 300 utilisateurs, lui donne en plus accès aux messages, aux réunions Teams et à chaque fichier SharePoint ou OneDrive que vos droits vous laissent consulter.",
          "Sans licence, il faut joindre le brief à chaque demande. Avec elle, une phrase suffit : « reprends le brief de la gamme d'automne et ce que l'agence a proposé mardi ». Researcher, l'agent de recherche approfondie, et Analyst, l'agent d'analyse de données, demandent aussi la licence.",
        ],
      },
      {
        h3: "Le deck de lancement part toujours du gabarit de la marque",
        paras: [
          "Copilot dans PowerPoint reprend le thème et les dispositions du fichier ouvert : ouvrez donc le modèle de l'entreprise avant la première demande. Dans le volet Copilot, la commande qui bâtit une présentation depuis un fichier transforme un document Word ou un PDF en brouillon de deck. Microsoft indique que Copilot travaille mieux sur des fichiers Word de moins de 24 Mo.",
          "Relisez ensuite le deck avec un œil de chef de produit. Les chiffres des graphiques viennent du brief et Copilot ne les vérifie pas ; les photos d'illustration se remplacent par celles de la photothèque validée. Depuis le 6 octobre 2026, d'après les notes de version de Microsoft, PowerPoint pour Windows accepte des compétences personnalisées, c'est-à-dire des consignes écrites une fois et réutilisées : la règle « un message par diapositive, chiffres sourcés en note » peut en devenir une.",
        ],
      },
      {
        h3: "Un bilan de campagne se lit dans Excel, à condition d'exporter proprement",
        paras: [
          "Copilot ne se branche pas de lui-même sur LinkedIn Campaign Manager, Google Ads, Meta ou votre outil d'emailing. Sauf connecteur activé par un administrateur, le chemin passe par un export CSV. Mettez-le sous forme de tableau Excel, nommez les colonnes en clair (impressions, clics, coût, leads) et enregistrez le classeur dans OneDrive ou SharePoint.",
          "Copilot dans Excel propose trois modes. Conversation analyse sans toucher au classeur, Plan expose sa démarche avant d'agir, Édition modifie le fichier. Commencez par Conversation pour valider la lecture des colonnes, puis passez en Édition pour bâtir le tableau croisé et le graphique du reporting. Le même volet résume des verbatims clients et en dégage des thèmes et une tonalité.",
        ],
      },
      {
        h3: "Researcher prépare la veille concurrentielle si chaque source porte une date",
        paras: [
          "Avec la licence, Researcher croise le web et vos documents internes pour répondre à une question longue, comme le positionnement de trois concurrents sur une gamme. La réponse cite ses sources. En marketing, le danger tient à l'âge de ces sources : une grille tarifaire de 2024 reprise comme actuelle fausse toute la note.",
          "Demandez dans la consigne la date de chaque source et l'écart entre ce que dit le concurrent et ce que disent ses clients. Une note de veille utile sépare les faits datés, les affirmations du concurrent et vos hypothèses.",
        ],
      },
      {
        h3: "Les visuels passent par l'espace Créer, et l'AI Act impose parfois de le dire",
        paras: [
          "Dans l'application Microsoft Copilot, l'entrée Créer du menu de gauche produit des images, des affiches, des bannières et des infographies. Vous décrivez la scène, puis vous choisissez un style et un format carré, portrait ou paysage. Si votre organisation a configuré un kit de marque, Copilot applique ses couleurs ; Microsoft annonce pour octobre 2026 l'arrivée de ces kits dans PowerPoint.",
          "Depuis le 2 août 2026, l'article 50 de l'AI Act, consacré à la transparence, touche les visuels de campagne. Une image générée qui fait croire à une scène authentique (une personne connue, un lieu identifiable, un événement daté) doit être présentée au public comme artificielle. Une photo réaliste de votre magasin, avec votre dirigeant, dans une scène qui n'a jamais eu lieu entre dans ce cas. Un visuel d'ambiance sans personne identifiable n'y entre pas, et un usage purement interne non plus.",
        ],
      },
      {
        h3: "Un agent de relecture garde la voix de la marque d'une personne à l'autre",
        paras: [
          "Agent Builder, que l'interface française appelle aussi « assistant », crée un agent sans code. Pour le marketing, le plus utile relit les textes selon la plateforme de marque : la charte éditoriale va dans le champ Instructions, le lexique et trois textes de référence dans Connaissances, puis l'équipe le partage.",
          "Le mode d'ajout des fichiers décide de qui lit quoi. Un document chargé depuis votre ordinateur s'ouvre à quiconque interroge l'agent ; un document ajouté depuis SharePoint reste filtré par les droits de chaque collègue. Déposez la charte, jamais le plan média et ses budgets.",
        ],
      },
    ],
    table: {
      caption: "Tâches marketing courantes et bonne porte d'entrée dans Microsoft Copilot (octobre 2026)",
      headers: ["Tâche", "Fonction à utiliser", "Point de vigilance"],
      rows: [
        ["Transformer un brief en deck de lancement", "PowerPoint ouvert sur le modèle de l'entreprise, présentation bâtie depuis le fichier du brief", "Chiffres repris sans contrôle, photos hors photothèque"],
        ["Lire le bilan d'une campagne payante", "Excel en mode Conversation, puis Édition pour le tableau croisé", "Chaque régie a son propre modèle d'attribution"],
        ["Synthétiser des verbatims clients", "Volet Copilot d'Excel : résumé, thèmes, tonalité", "Relire un échantillon de commentaires classés"],
        ["Préparer une note de veille concurrentielle", "Researcher, avec la licence Microsoft Copilot", "Date de chaque source web à vérifier"],
        ["Décliner un visuel en trois formats", "Application Copilot, espace Créer, kit de marque", "Signalement si la scène paraît authentique (AI Act, art. 50)"],
        ["Relire un texte selon la charte", "Agent créé dans Agent Builder, charte dans les Instructions", "Un fichier déposé s'ouvre à quiconque interroge l'agent"],
      ],
    },
    cas: {
      h3: "Cas pratique : le bilan trimestriel des campagnes pour le comité de direction",
      contexte: "Prenons la responsable acquisition d'un éditeur de logiciels de gestion pour artisans, 120 salariés, équipée de la licence Microsoft Copilot. Elle doit présenter au comité de direction le bilan du trimestre : LinkedIn Ads, Google Ads et trois campagnes d'emailing. Chaque outil exporte ses propres colonnes, avec ses propres définitions de la conversion.",
      etapes: [
        "Elle exporte les trois sources en CSV, les colle dans un classeur OneDrive en trois onglets mis sous forme de tableau, et ajoute un onglet « Définitions » qui précise ce que chaque outil appelle lead et conversion.",
        "Dans Excel, elle ouvre Copilot en mode Plan et colle la demande ci-dessous.",
        "Elle corrige le plan à l'étape 2, où Copilot voulait additionner des conversions qui ne mesurent pas la même chose, puis valide l'exécution.",
        "Elle recalcule à la main deux coûts par lead et vérifie un total par canal dans l'export d'origine.",
        "Elle demande à Copilot une note Word de deux pages tirée de l'onglet « Synthèse », puis ouvre le modèle PowerPoint de la marque et fait bâtir le deck depuis cette note.",
      ],
      prompt: "Ce classeur réunit trois exports de campagnes du dernier trimestre : LinkedIn Ads, Google Ads et notre outil d'emailing, un onglet par source. L'onglet « Définitions » indique ce que chaque outil appelle lead et conversion.\n\nCommence par me soumettre ton plan ; tu ne l'exécutes qu'après mon accord.\n1. Ajoute un onglet « Consolidé » avec une ligne par campagne : canal, dépense, clics, leads, coût par lead calculé par formule.\n2. Ne fusionne pas les conversions de sources différentes : garde une colonne par définition.\n3. Ajoute un onglet « Synthèse » où un tableau croisé dynamique donne la dépense, les leads et le coût par lead, par canal et par mois.\n4. Trace un histogramme du coût par lead, canal par canal.\n5. Sous le tableau, écris trois observations brèves qui citent chacune la cellule sur laquelle elles reposent.\n\nLaisse intacts les trois onglets importés. Aucun chiffre ne doit venir d'ailleurs que du classeur : si une donnée manque, écris « à compléter » et préviens-moi.",
      resultat: "La responsable obtient un onglet consolidé, une synthèse par canal et un graphique prêt pour le deck. Le contrôle porte sur deux points. Les coûts par lead doivent correspondre aux exports, car une colonne de coût total se confond vite avec une colonne de coût unitaire. Les constats doivent citer une cellule existante, et toute phrase qui compare des conversions de deux régies se supprime. Le comité reçoit un bilan dont chaque chiffre se retrouve dans le classeur.",
    },
    pieges: [
      {
        titre: "Copilot ressort une grille tarifaire qu'il n'aurait jamais dû trouver",
        texte: "Copilot fait remonter chaque fichier que vos droits vous ouvrent, y compris une grille de prix provisoire partagée par un lien trop large. Avant de reprendre un prix ou une date de lancement cités par Copilot, ouvrez la source et vérifiez sa version. Signalez au service informatique tout document sensible apparu par erreur.",
      },
      {
        titre: "Deux régies, deux définitions de la conversion",
        texte: "Une conversion dans un export Meta ne mesure pas forcément la même chose qu'une conversion dans Google Ads. Copilot additionne ce qu'on lui donne. Écrivez la définition de chaque indicateur dans la demande ou dans un onglet dédié, et gardez une colonne par régie.",
      },
      {
        titre: "Le plan média glissé dans l'agent de marque",
        texte: "Un fichier déposé dans un agent devient lisible par tous ceux qui l'utilisent, quels que soient leurs droits sur l'original. Le budget média, les remises négociées avec l'agence et les prévisions de vente restent dans SharePoint, avec leurs droits d'accès.",
      },
      {
        titre: "Des tutoriels Excel écrits pour une fonction disparue",
        texte: "Beaucoup de guides publiés en 2025 classent des avis clients cellule par cellule avec une fonction de formule que Microsoft a supprimée à la mi-septembre 2026. Un classeur bâti sur elle tombe en erreur dès qu'Excel recalcule. Refaites ces classements dans le volet Copilot et collez les résultats en valeurs.",
      },
    ],
  },
  audience: [
    { title: "Responsables et chefs de projet marketing", desc: "Vous pilotez des lancements dont les briefs, les études et les bilans sont rangés dans SharePoint et Teams. Vous voulez que Copilot travaille sur ces documents et dans les gabarits de la marque, sans perdre la trace d'un chiffre." },
    { title: "Chargés d'acquisition et de marketing digital", desc: "Vous exportez chaque mois les résultats des régies et de l'outil d'emailing. Vous apprenez à faire lire ces exports par Copilot dans Excel et à contrôler les coûts et les conversions avant le comité." },
    { title: "Responsables de marque et de contenus", desc: "Vous faites respecter la plateforme de marque par l'équipe et par les services voisins. Vous repartez avec un agent de relecture partagé et une règle claire pour les visuels générés." },
  ],
  useCases: [
    { icon: '🎨', title: "Deck de lancement au gabarit", desc: "Le brief Word devient une présentation dans le modèle de l'entreprise ; chiffres et photos sont repris à la main." },
    { icon: '📊', title: "Bilan trimestriel des campagnes", desc: "Trois exports consolidés en mode Plan, un tableau croisé par canal et des constats qui citent leurs cellules." },
    { icon: '📄', title: "Plan de lancement sourcé", desc: "Un plan sur huit semaines qui s'appuie sur le brief, les résultats passés et la réunion d'agence, avec la source de chaque chiffre." },
    { icon: '🔎', title: "Note de veille datée", desc: "Researcher compare trois concurrents et date chacune de ses sources web avant que la note circule." },
    { icon: '📱', title: "Visuels déclinés en trois formats", desc: "Images et bannières produites dans l'espace Créer avec le kit de marque, signalées au public quand la scène l'exige." },
    { icon: '✍️', title: "Agent de relecture de la marque", desc: "La charte éditoriale placée dans un agent partagé relit les textes de l'équipe et des services voisins." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Délimiter ce que Copilot voit dans l'espace marketing", duration: '1h30',
      description: "Copilot Chat et la licence n'ouvrent pas les mêmes documents. Ce module fixe le périmètre de chacun et la façon de remonter à la source d'une réponse.",
      items: [
        "Ce que voit Copilot Chat (web, fichier déposé) et ce qu'ajoute la licence (messages, réunions, SharePoint)",
        "Désigner un brief, un classeur ou une réunion avec / dans l'application Copilot",
        "La règle des droits : un fichier partagé trop largement ressort dans les réponses",
        "Choix du modèle, et modèles d'Anthropic disponibles si l'administrateur les active",
      ],
      exercise: "Vous interrogez Copilot sur votre dernier brief de campagne et retrouvez dans le document chaque élément qu'il cite.",
    },
    {
      day: 1, title: "Module 2 · Passer du brief au plan de lancement", duration: '2h',
      description: "Un plan solide cite ses sources et signale ses manques. Vous construisez la demande qui l'obtient, puis vous le partagez avec le chef de produit.",
      items: [
        "Méthode de demande : cible, sources imposées, parties attendues, mention « à compléter » pour les manques",
        "Faire citer la colonne du classeur ou le passage du brief derrière chaque chiffre",
        "Réponse transformée en page Copilot avec « Modifier dans la page », puis partagée",
        "Calendrier proposé confronté à la transcription de la réunion d'agence",
      ],
      exercise: "Vous produisez le plan de votre prochain lancement à partir de votre brief, de vos résultats de l'an dernier et d'une réunion Teams transcrite.",
    },
    {
      day: 1, title: "Module 3 · Construire le deck de lancement au gabarit de la marque", duration: '2h',
      description: "Copilot reprend le thème et les dispositions du fichier ouvert. Vous produisez un deck conforme, puis vous le corrigez là où Copilot se trompe.",
      items: [
        "Ouvrir le modèle PowerPoint de la marque avant la première demande",
        "Un brouillon de deck bâti par Copilot depuis un document Word ou un PDF",
        "Une compétence PowerPoint qui applique vos règles de présentation (Windows, depuis le 6 octobre 2026)",
        "Reprise des chiffres des graphiques, des photos produit et de la hiérarchie des messages",
      ],
      exercise: "Vous montez le deck d'une campagne en préparation depuis son brief Word, dans votre modèle PowerPoint.",
    },
    {
      day: 1, title: "Module 4 · Garder la trace des décisions prises avec l'agence", duration: '1h30',
      description: "Les décisions de campagne se prennent souvent en réunion. Teams les conserve si la séance est transcrite, et Copilot aide à les retrouver.",
      items: [
        "Pas de récapitulatif sans séance transcrite ou enregistrée",
        "Notes IA et tâches de suivi : qui a décidé quoi, pour quand",
        "Interroger une réunion passée pour préparer la suivante",
        "Qui lit le récapitulatif : à vérifier avant une séance où l'agence est invitée",
      ],
      exercise: "Vous extrayez les décisions et les tâches de suivi d'une réunion récente avec votre agence ou avec l'équipe commerciale.",
    },
    {
      day: 2, title: "Module 5 · Préparer les exports de campagne pour Excel", duration: '1h30',
      description: "Copilot ne lit pas les régies de lui-même. La qualité du bilan dépend de l'export que vous lui confiez.",
      items: [
        "Exporter en CSV les résultats des régies et de l'outil d'emailing",
        "Mettre les données sous forme de tableau et nommer les colonnes en clair",
        "Écrire la définition de chaque indicateur (lead, conversion, coût) régie par régie",
        "Connecteurs : ce qu'un administrateur peut activer, et quand l'export reste la voie",
      ],
      exercise: "Vous mettez en forme l'export d'une campagne payante récente : tableau, noms de colonnes et onglet de définitions.",
    },
    {
      day: 2, title: "Module 6 · Lire un bilan de campagne avec Copilot dans Excel", duration: '2h',
      description: "Selon le mode choisi, Copilot analyse, propose une démarche ou modifie le classeur. Vous produisez un bilan présentable et vérifié.",
      items: [
        "Conversation pour analyser, Plan pour valider la démarche, Édition pour modifier",
        "Comparer les canaux par coût par lead et repérer les valeurs aberrantes",
        "Tableau croisé dynamique et graphique du reporting",
        "Deux chiffres clés recalculés à la main avant la présentation",
      ],
      exercise: "Vous produisez le bilan de votre dernière campagne à partir de votre export, avec un tableau croisé et trois constats vérifiés.",
    },
    {
      day: 2, title: "Module 7 · Veille, verbatims et visuels sous contrôle", duration: '2h',
      description: "Ces trois tâches sortent du tableau de chiffres. Chacune a sa fonction dans Copilot et sa règle de vérification.",
      items: [
        "Note de veille avec Researcher, date de chaque source exigée dans la consigne",
        "Verbatims d'enquête résumés dans le volet Copilot d'Excel : thèmes et tonalité",
        "Images, affiches et bannières dans l'espace Créer avec le kit de marque",
        "AI Act, article 50 : quand une image générée doit être signalée au public",
      ],
      exercise: "Vous synthétisez les commentaires de votre dernière enquête client, puis déclinez un de vos visuels de campagne en trois formats.",
    },
    {
      day: 2, title: "Module 8 · Installer l'agent de marque et les règles de l'équipe", duration: '1h30',
      description: "L'équipe écrit d'une seule voix quand la charte vit dans un agent partagé. Le module fixe aussi ce qui passe en validation avant publication.",
      items: [
        "Agent de relecture dans Agent Builder : charte dans les Instructions, lexique et textes de référence dans Connaissances",
        "RGPD : fichiers de prospects et données clients tenus hors des demandes et des agents",
        "Validations obligatoires : chiffres, visuels générés, mentions légales ; trace de la session conservée pour l'obligation de maîtrise de l'IA (AI Act, art. 4)",
        "Plan à trente jours : trois tâches de campagne outillées et un point d'étape",
      ],
      exercise: "Vous créez l'agent de relecture de votre marque à partir de votre charte éditoriale et le testez sur un texte récent de l'équipe.",
    },
  ],
  objectives: [
    "Le participant sait désigner dans Copilot les documents d'une campagne et retrouver chaque élément cité dans sa source.",
    "Le participant sait produire un deck de lancement dans le modèle PowerPoint de l'entreprise à partir d'un brief Word.",
    "Le participant sait analyser un export de campagne dans Excel avec les modes Conversation, Plan et Édition, puis contrôler les chiffres clés.",
    "Le participant sait obtenir de Researcher une note de veille dont chaque source est datée.",
    "Le participant sait dire quand un visuel généré doit être signalé au public au regard de la règle de transparence de l'AI Act.",
    "Le participant sait paramétrer un agent de relecture de marque dans Agent Builder en choisissant le bon mode d'ajout des fichiers.",
  ],
  faq: [
    {
      q: "Une licence Microsoft Copilot est-elle nécessaire pour la formation Copilot marketing ?",
      a: "Non. Le Copilot Chat livré avec un compte Microsoft 365 professionnel suffit pour rédiger, analyser un fichier déposé et créer des images. La licence devient nécessaire quand Copilot doit fouiller de lui-même la messagerie, l'historique des réunions et les sites SharePoint de l'équipe, ainsi que pour Researcher et Analyst. Nous relevons le niveau d'accès de chaque participant lors du cadrage et nous adaptons les exercices en conséquence. Une équipe qui hésite à acheter des licences peut en essayer quelques-unes pendant la session.",
    },
    {
      q: "Copilot peut-il lire directement nos régies publicitaires, notre CRM ou notre outil d'emailing ?",
      a: "Seulement si un administrateur a activé un connecteur vers l'outil concerné. Demandez à votre service informatique ce que la galerie de connecteurs Microsoft propose pour votre CRM. Pour un bilan de campagne, un export CSV propre, mis sous forme de tableau Excel avec des colonnes nommées en clair et un onglet de définitions, donne déjà des résultats fiables. C'est le chemin retenu en formation, parce qu'il fonctionne dans toutes les entreprises.",
    },
    {
      q: "Copilot respecte-t-il notre charte graphique dans PowerPoint ?",
      a: "Il réutilise le thème, les polices et les dispositions du fichier ouvert : partez donc toujours du modèle de présentation de l'entreprise. Une compétence PowerPoint, disponible sous Windows depuis le 6 octobre 2026, peut ajouter vos règles de mise en page. Pour les images, l'espace Créer applique le kit de marque si votre organisation l'a configuré. Les photos produit et les logos se reprennent depuis vos sources validées, car Copilot ne les connaît pas.",
    },
    {
      q: "Peut-on publier dans une campagne une image générée avec Copilot ?",
      a: "Oui, avec une précaution juridique. Depuis le 2 août 2026, toute image générée diffusée au public qui fait passer pour vraie une scène avec des gens, des endroits ou des faits identifiables doit être présentée comme artificielle : c'est l'obligation de transparence de l'AI Act. Un visuel d'ambiance sans personne reconnaissable ne pose pas cette question. Vérifiez aussi que l'image ne reprend ni un logo tiers ni un produit concurrent, et faites-la passer par votre circuit de validation habituel.",
    },
    {
      q: "Nos briefs et nos chiffres servent-ils à entraîner les modèles de Microsoft ?",
      a: "Non. Dès que l'on se connecte avec un compte de l'entreprise, les demandes et les réponses de Copilot bénéficient des engagements de Microsoft sur les données d'entreprise, qui excluent leur usage pour entraîner les modèles. Les requêtes des utilisateurs européens restent traitées dans l'Union. Une exception mérite d'être connue : quand l'administrateur ouvre Copilot aux modèles d'Anthropic, les demandes qui partent vers eux quittent ce périmètre européen. Le risque principal reste interne, avec les fichiers trop largement partagés que Copilot fait remonter.",
    },
    {
      q: "Copilot ou ChatGPT pour une équipe marketing ?",
      a: "Les deux se complètent. Copilot prend l'avantage quand la tâche dépend de vos documents internes, de vos gabarits et de vos réunions, puisqu'il les lit avec vos droits dans Microsoft 365. ChatGPT ou Claude restent de bons partenaires pour chercher un angle ou écrire une première accroche à partir d'un texte public. La formation montre où placer la frontière, en particulier pour les fichiers clients, qui ne quittent pas Microsoft 365.",
    },
    {
      q: "La formation convient-elle à des marketeurs peu à l'aise avec Excel ?",
      a: "Oui. Le mode Conversation d'Excel répond en langage courant, et le mode Édition construit lui-même le tableau croisé et le graphique. Le travail porte surtout sur la préparation de l'export et sur le contrôle de deux ou trois chiffres clés, qui rend le bilan présentable en comité. Les participants à l'aise avec les formules vont plus loin, avec la consolidation de plusieurs régies et les colonnes calculées.",
    },
    {
      q: "Qui peut prendre en charge la formation Copilot marketing ?",
      a: "L'opérateur de compétences dont dépend l'entreprise finance les organismes certifiés Qualiopi, ce qui est le cas de Masteria pour ses actions de formation, puis il tranche selon son propre barème et l'enveloppe qui lui reste. Une journée vaut 1 980 € HT, que l'on forme une personne ou douze, et 3 960 € HT les deux journées. Nous fournissons le programme détaillé, la convention et chaque pièce demandée par l'OPCO avant la session.",
    },
  ],
  tarifs: {
    titre: "Ce que couvre le prix pour une équipe marketing",
    paras: [
      "Une partie du travail se fait avant la première journée, sans supplément. Le formateur reçoit un brief récent, un export de campagne anonymisé si besoin et votre modèle PowerPoint, puis ajuste les demandes du guide à votre marque. L'équipe garde les supports, la bibliothèque de demandes et l'agent de relecture construit au dernier module.",
      "Prenons une direction marketing qui inscrit sa responsable, deux chefs de produit, deux chargés d'acquisition et une responsable de contenus, six inscrits au total. Ce groupe paie 3 960 € HT pour les deux journées, 660 € HT par participant. Un responsable marketing seul suit le même programme en tête-à-tête, au même tarif de 1 980 € HT par jour. Votre OPCO reçoit ensuite le dossier et l'étudie avec le barème de votre branche.",
    ],
  },
  apres: {
    titre: "Après la formation, des outils taillés pour vos campagnes",
    texte: "Quand la méthode est acquise, Masteria peut développer pour l'équipe un agent qui prépare chaque mois le bilan des campagnes à partir de vos exports, une compétence qui monte le deck du comité au gabarit de la marque, ou un assistant de relecture relié à votre base de contenus. Chaque outil se construit dans votre environnement Microsoft 365 et se teste sur vos campagnes passées. Le forfait se décide après un cadrage, et ce volet de développement n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous votre prochain brief : nous construisons les ateliers sur cette campagne.",
    fin: {
      titre: "Préparons la session sur votre prochaine campagne",
      texte: "Précisez le nombre de personnes à former, les régies et les outils de l'équipe, et qui dispose de la licence Microsoft Copilot. Nous proposons un programme calé sur votre calendrier de lancements et des dates de session.",
    },
  },
  liensAssocies: [
    { label: "Toutes les formations Microsoft Copilot", href: '/formation-microsoft-copilot' },
    { label: "Formation IA pour le marketing, plusieurs assistants comparés", href: '/formation-ia-marketing' },
    { label: "Claude au service d'une équipe marketing", href: '/formation-claude-marketing' },
    { label: "Copilot pour le référencement naturel", href: '/formation-copilot-seo' },
    { label: "Les premiers pas d'une équipe marketing avec l'IA", href: '/blog/formation-ia-marketing-equipes' },
  ],
  sources: [
    { name: "Aide Microsoft : ce que Copilot Chat voit avec ou sans licence", url: "https://support.microsoft.com/fr-fr/topic/how-copilot-chat-works-with-and-without-a-microsoft-365-copilot-license-5810b659-fbe0-48ee-9fe6-d731fe86cdeb" },
    { name: "Microsoft Learn, en anglais : licences Microsoft Copilot et Copilot Business", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing" },
    { name: "Aide Microsoft : une présentation à la marque tirée d'un fichier", url: "https://support.microsoft.com/fr-fr/powerpoint/copilot-tutorial-create-a-branded-presentation-from-a-file" },
    { name: "Aide Microsoft : nouvelle présentation créée avec Copilot dans PowerPoint", url: "https://support.microsoft.com/fr-fr/powerpoint/copilot/create-a-new-presentation-with-copilot-in-powerpoint" },
    { name: "Aide Microsoft : les trois modes de Copilot dans Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Aide Microsoft : analyser un tableau de résultats avec Copilot", url: "https://support.microsoft.com/fr-fr/excel/copilot/data-insights-with-copilot-in-excel" },
    { name: "Aide Microsoft : l'espace Créer de l'application Copilot", url: "https://support.microsoft.com/fr-FR/Microsoft-365-Copilot/get-started-with-create-in-the-microsoft-365-copilot-app" },
    { name: "Aide Microsoft : générer des images depuis l'application Copilot", url: "https://support.microsoft.com/fr-fr/microsoft-365-copilot/create-ai-generated-images-with-the-microsoft-365-copilot-app" },
    { name: "Microsoft Learn, en anglais : les sources de connaissances d'un agent", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-knowledge" },
    { name: "Microsoft Learn, en anglais : notes de version de Copilot (compétences PowerPoint, 6 octobre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes" },
    { name: "EUR-Lex : règlement (UE) 2024/1689, article 50 sur les contenus générés", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
}
