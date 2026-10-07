// Contenu propre à /formation-copilot-service-client (guide terrain, page propre). Rendu par SpokePage.
// Faits Microsoft : fiche du 7 octobre 2026 (Learn, Cowork documenté le 29/09/2026, page Copilot Studio France,
// pages tarifs France). AI Act : article 50 applicable depuis le 02/08/2026. Réécrit le 07/10/2026.
export default {
  slug: 'formation-copilot-service-client',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation Microsoft Copilot pour le service client et la relation client',
  metaTitle: 'Formation Copilot Service Client · Microsoft 365 | Masteria',
  metaDesc: "Formation Copilot pour le service client : réclamations dans Outlook, base de réponses, assistant des conseillers, motifs analysés dans Excel. 2 jours.",
  keywords: "formation copilot service client, microsoft copilot relation client, copilot outlook réclamation, copilot sharepoint base de connaissances, copilot studio agent service client, formation copilot qualiopi opco",
  prerequis: "Traiter des demandes clients par écrit ; un export anonymisé de tickets et quelques réclamations anonymisées sont demandés avant la session",
  resume: "Ce programme s'adresse aux conseillers, superviseurs et responsables de la relation client qui travaillent dans Outlook, Teams et SharePoint. Vous y verrez Microsoft Copilot (anciennement Microsoft 365 Copilot) vous aider à répondre à une réclamation délicate, à tenir une base de réponses à jour, à lire un export de tickets et à préparer un assistant pour les questions qui reviennent, sans exposer les données des clients. Comptez 14 heures sur deux jours, 1 980 € HT chacun, pour un groupe de douze conseillers au maximum, voire un seul ; votre OPCO examine sa prise en charge avec les règles qui sont les siennes.",
  enBref: [
    { label: 'Formation', value: "Copilot appliqué à la relation client : réponses écrites, base de connaissances, analyse des motifs de contact, agents" },
    { label: 'Durée', value: "Deux fois 7 heures, enchaînées ou séparées pour tenir compte des pics d'activité" },
    { label: 'Formats', value: "Plateau de conseillers formé en interne jusqu'à douze personnes, ou parcours individuel pour un responsable ; présentiel ou classe virtuelle" },
    { label: 'Tarif', value: "Deux jours pour 3 960 € HT, soit 1 980 € HT chacun" },
    { label: 'Financement', value: "Certification Qualiopi de l'organisme : l'OPCO peut couvrir la session d'après ses propres conditions" },
    { label: 'Prérequis', value: "Répondre chaque jour à des clients par écrit ; les accès Copilot des conseillers sont vérifiés au cadrage" },
  ],
  intro: "Un service client vit d'écrit : réponses aux réclamations, mails de suivi, fiches de procédure, synthèses pour la direction. Copilot y trouve sa place à deux conditions. La première tient au ton : une réponse juste sur le fond mais froide ou trop longue aggrave un mécontentement, et Copilot aide à régler ce ton avant l'envoi. La seconde tient aux données : un client confie son adresse, son contrat, parfois sa santé ou ses difficultés, et une partie de ces informations n'a pas sa place dans l'outil. La formation montre comment servir les clients avec Copilot dans Outlook, Teams, Excel et SharePoint en respectant ces deux conditions, à partir de vos propres réclamations anonymisées.",
  guide: {
    kicker: 'Guide terrain service client',
    h2: "Copilot rédige la réponse et ajuste le ton ; le conseiller garde l'engagement pris envers le client",
    lead: "Une réponse à une réclamation engage l'entreprise : un geste commercial, un délai, la reconnaissance d'une erreur. Copilot sait reprendre l'historique d'un échange, proposer une réponse claire et en ajuster le ton, dans Outlook, là où le conseiller travaille. Ce guide décrit comment s'en servir sans laisser partir une promesse que personne n'a décidée, comment construire une base de réponses que Copilot exploite, et ce qui sépare un assistant interne d'un agent qui parle à vos clients.",
    sections: [
      {
        h3: "Dans Outlook, la réponse part du fil et le ton se règle avant l'envoi",
        paras: [
          "Copilot résume un échange long avec un client, puis rédige une réponse à partir de ce fil. Avant l'envoi, ses suggestions sur la clarté et le registre signalent une phrase qui peut braquer, une formule trop administrative ou une réponse qui esquive la question posée. Ce travail se fait même sans licence, car Copilot Chat lit le message ouvert dans Outlook. Une licence élargit la recherche à l'ensemble des mails, des documents et des réunions, ce qui sert quand une réclamation renvoie à un échange de l'an passé.",
          "Une règle s'installe dès le premier atelier : Copilot propose, le conseiller décide de tout engagement. Un avoir, un remboursement, un délai d'intervention ou la reconnaissance d'une faute viennent de la procédure de l'entreprise, jamais d'une formulation que Copilot aurait jugée apaisante.",
        ],
      },
      {
        h3: "Les réponses validées se rangent dans SharePoint, où Copilot va les chercher",
        paras: [
          "Les conseillers expérimentés ont leurs réponses types, souvent dispersées dans des brouillons personnels. Réunies dans une bibliothèque SharePoint, classées par motif de contact et datées, elles deviennent une source que Copilot cite. Avec la licence, une question comme « comment répond-on à un retard de livraison de plus de dix jours ? » retrouve la procédure en vigueur et la réponse validée. Tout dépend de l'entretien : une procédure périmée restée dans la bibliothèque sera citée comme les autres.",
          "Agent Builder permet de construire, sans code, un assistant qui répond aux conseillers à partir de cette base. Pour les postes sans licence, l'agent qui consulte les contenus internes est facturé selon sa consommation ; les agents fondés sur des instructions et des sites publics restent compris dans Copilot Chat. Pour une équipe de vingt conseillers, le choix entre licences et agent payé à l'usage se fait donc après avoir observé l'usage effectif de l'agent pendant quelques semaines.",
        ],
      },
      {
        h3: "L'analyse des tickets se fait dans Excel, sur un export",
        paras: [
          "Motifs de contact, délais de réponse et commentaires des enquêtes de satisfaction se trouvent dans votre outil de ticketing ou votre CRM, que Copilot ne lit pas sans connecteur. La formation travaille donc sur un export. En mode Conversation, Copilot dans Excel analyse le fichier sans le modifier : motifs les plus fréquents, délais par canal, évolution sur trois mois. En mode Plan, il propose une démarche pour classer des commentaires libres par thème, que vous validez avant exécution, sur une copie.",
          "Le classement de verbatims reste fragile : un commentaire ironique ou ambigu tombe parfois dans la mauvaise catégorie. Relire une vingtaine de lignes prises au hasard permet de repérer une définition de catégorie trop floue, à corriger avant de relancer le traitement.",
        ],
      },
      {
        h3: "Un agent qui parle à vos clients relève d'un autre projet",
        paras: [
          "Un assistant interne aide les conseillers ; un agent qui répond directement aux clients, sur votre site ou dans votre messagerie, demande une autre construction. Il se bâtit en général dans Copilot Studio, produit distinct de la licence, dont la page française indique le 7 octobre 2026 un forfait mensuel de 173,30 € HT les 25 000 crédits, à côté d'une formule à la consommation. Il faut le relier à vos sources validées, prévoir le passage à un conseiller et l'éprouver sur des cas difficiles avant de l'ouvrir au public.",
          "La règle européenne de transparence, applicable depuis août 2026, veut qu'une personne sache qu'elle converse avec une machine, sauf quand cela saute aux yeux. Un agent client doit donc se présenter comme tel dès son premier message. Ce chantier relève du développement : la formation en pose les bases et les questions à trancher, la construction se chiffre à part.",
        ],
      },
      {
        h3: "Les données des clients se trient avant d'entrer dans Copilot",
        paras: [
          "Microsoft couvre les échanges de vos conseillers connectés à leur compte de travail par ses engagements de protection, sans entraîner ses modèles dessus. Les requêtes d'un conseiller basé en France restent traitées sur le sol européen, à une exception près : Claude, que l'administrateur doit allumer lui-même pour les clients européens. Le RGPD limite de son côté le traitement aux données utiles. La formation fixe une liste courte de ce qui n'entre jamais dans une demande :",
        ],
        list: [
          "les numéros de carte bancaire, RIB et IBAN complets ;",
          "les données de santé, même évoquées par le client dans sa réclamation ;",
          "les pièces d'identité et les numéros de sécurité sociale ;",
          "les éléments d'un litige transmis au service juridique.",
        ],
      },
      {
        h3: "Les escalades se préparent dans Teams, et les motifs répétitifs se pré-traitent avec Cowork",
        paras: [
          "Une réclamation qui remonte au superviseur arrive souvent avec un historique éclaté : mails, notes du conseiller, échange avec la logistique. Si la réunion d'escalade est transcrite, Copilot en tire dans Teams un résumé, les décisions et le responsable de chaque action. Le superviseur relit les engagements pris avant que le conseiller ne les transmette au client.",
          "Copilot Cowork peut démarrer une tâche dès qu'un mail entre dans la boîte : pour un motif fréquent, comme une demande de duplicata de facture, il prépare le brouillon, retrouve la pièce et attend l'accord du conseiller avant tout envoi, en indiquant le niveau de risque de l'action. Sa consommation s'ajoute au coût de la licence ; la formation aide à choisir les motifs qui justifient cette dépense, en commençant par les plus simples.",
        ],
      },
      {
        h3: "Au bout d'un mois, trois repères suffisent pour juger",
        paras: [
          "Le plan des trente jours se juge sur des repères que votre outil de ticketing fournit déjà : le délai de première réponse écrite, la part de réclamations rouvertes après une réponse, et l'avis des conseillers sur les fiches de la base. On les relève avant la formation, puis quatre semaines après, sur les mêmes motifs. Une baisse des réclamations rouvertes renseigne mieux sur la qualité des réponses qu'un volume de mails traités, qui peut grimper avec des réponses bâclées.",
        ],
      },
    ],
    table: {
      caption: "Le travail du service client avec Copilot : où le faire, quoi vérifier (octobre 2026)",
      headers: ['Situation', 'Où travailler', 'Vérification'],
      rows: [
        ["Réclamation écrite d'un client mécontent", 'Outlook, réponse rédigée depuis le fil', 'Aucun geste commercial hors procédure'],
        ['Client qui écrit en anglais ou en espagnol', 'Outlook ou Word, traduction et ton', 'Termes de garantie relus par un locuteur natif'],
        ["Question rare d'un conseiller", 'Agent Builder sur la base SharePoint', 'Date de la procédure citée'],
        ['Analyse mensuelle des motifs de contact', "Excel en lecture seule (mode Conversation)", "Totaux comparés à l'outil de ticketing"],
        ["Classement des verbatims d'enquête", 'Excel, démarche validée en mode Plan, fichier dupliqué', 'Vingt lignes relues au hasard'],
        ["Réunion d'escalade avec la qualité", 'Teams, récapitulatif et actions', 'Responsables et délais nommés'],
        ['Nouvelle réclamation arrivée dans la boîte', 'Tâche Cowork lancée par le mail, accord avant envoi', 'Brouillon relu par le conseiller'],
      ],
    },
    cas: {
      h3: "Cas pratique : répondre à une réclamation qui a déjà fait trois allers-retours",
      contexte: "Prenons un conseiller d'une société de location de véhicules utilitaires. Un client professionnel conteste une facture de dommages après la restitution d'un fourgon ; trois mails ont déjà été échangés, le ton monte, et le client menace de partir chez un concurrent. La procédure prévoit une contre-expertise sur photos et un geste commercial plafonné, décidé par le superviseur. L'histoire est inventée pour l'exemple ; en session, chacun traite une réclamation anonymisée de son service.",
      etapes: [
        "Ouvrez le dernier mail du client dans Outlook et demandez d'abord à Copilot un résumé de tout le fil.",
        "Collez la demande ci-dessous dans le volet Copilot, en citant la procédure de contestation avec la barre oblique si vous avez la licence.",
        "Vérifiez que la réponse ne promet rien que la procédure ne prévoit : ni remise, ni annulation, ni délai.",
        "Suivez les suggestions de registre proposées par Outlook, puis relisez à voix haute la première phrase.",
        "Soumettez la réponse au superviseur si un geste commercial est envisagé, puis envoyez.",
      ],
      prompt: "Ce fil compte trois mails échangés avec un client professionnel qui conteste une facture de dommages après la restitution d'un fourgon de location. Notre procédure de contestation est jointe : /procédure contestation dommages.\n\nRédige une réponse de 180 mots au plus qui :\n1. Reconnaît en une phrase l'agacement du client sans admettre de faute.\n2. Rappelle les faits datés présents dans le fil : date de restitution, constat, montant facturé.\n3. Propose la contre-expertise sur photos prévue par la procédure, avec le délai qu'elle indique.\n4. Indique qu'un superviseur étudiera sa demande de geste commercial, sans avancer de montant.\n5. Se termine par une ligne de signature à compléter par le conseiller.\n\nTon : direct, courtois, sans formule administrative. N'invente aucun délai ni aucune remise. Si un élément de la procédure manque, signale-le avant la réponse.",
      resultat: "Vous obtenez une réponse courte qui reprend les faits du fil, propose la seule issue prévue par la procédure et renvoie la question du geste commercial à la personne qui en décide. Copilot a tendance à adoucir en promettant : relisez chaque verbe au futur. La première phrase pèse plus que le reste, car c'est elle que le client lit en entier.",
    },
    pieges: [
      {
        titre: "Un geste commercial que personne n'a décidé",
        texte: "Pour apaiser, Copilot glisse parfois « nous vous offrons » ou « nous rembourserons ». Supprimez toute promesse absente de la procédure.",
      },
      {
        titre: 'Une procédure périmée citée comme valide',
        texte: "Copilot cite ce qu'il trouve dans la bibliothèque, ancienne version comprise. Datez chaque fiche et archivez les versions retirées.",
      },
      {
        titre: 'Des données de santé dans une demande',
        texte: "Un client explique parfois un retard de paiement par une maladie. Retirez ces éléments avant de demander une réponse à Copilot.",
      },
      {
        titre: "Un verbatim mal classé dans l'analyse mensuelle",
        texte: "Un commentaire ironique passe facilement pour un compliment. Relisez un échantillon avant de présenter les chiffres à la direction.",
      },
      {
        titre: 'Un agent client qui ne se présente pas',
        texte: "Le droit européen demande qu'un client sache qu'il dialogue avec un programme. Annoncez-le dans la toute première phrase d'accueil.",
      },
      {
        titre: 'Un brouillon Cowork validé sans lecture',
        texte: "L'accord demandé par Cowork devient vite un clic machinal. Lisez chaque brouillon jusqu'au bout, pièce jointe comprise, avant de l'autoriser.",
      },
    ],
  },
  audience: [
    {
      title: 'Conseillers et chargés de clientèle',
      desc: "Vous répondez chaque jour par écrit à des clients parfois mécontents. Vous apprenez à faire rédiger une réponse depuis le fil, à en régler le ton et à repérer toute promesse que la procédure ne prévoit pas.",
    },
    {
      title: "Superviseurs et responsables d'équipe",
      desc: "Vous traitez les escalades, validez les gestes commerciaux et suivez la qualité des réponses. Vous apprenez à préparer les réunions d'escalade, à analyser un export de tickets et à poser des consignes communes au plateau.",
    },
    {
      title: 'Responsables de la relation client et de la qualité',
      desc: "Vous pilotez les motifs de contact, la satisfaction et le référentiel de réponses. Vous apprenez à faire classer des verbatims dans Excel, à organiser une base de réponses exploitable par Copilot et à cadrer un projet d'agent.",
    },
    {
      title: 'Équipes de support interne',
      desc: "Vos demandeurs sont des collègues, pas des clients. Les mêmes méthodes s'appliquent : réponses depuis le fil, procédures rangées dans SharePoint, assistant construit pour les questions qui reviennent.",
    },
  ],
  useCases: [
    { icon: '💬', title: 'Réponses aux réclamations', desc: "Rédigées depuis le fil Outlook, ton réglé avant l'envoi, aucune promesse hors procédure." },
    { icon: '📚', title: 'Base de réponses validées', desc: "Procédures et réponses types classées par motif dans SharePoint, citées par Copilot avec leur date." },
    { icon: '🤖', title: 'Assistant des conseillers', desc: "Un agent bâti avec Agent Builder sur la base de réponses, pour les questions rares." },
    { icon: '📊', title: 'Motifs de contact analysés', desc: "L'export de tickets lu dans Excel en mode Conversation : fréquences, délais, évolution." },
    { icon: '🗂️', title: 'Verbatims classés par thème', desc: "Les commentaires des enquêtes rangés en mode Plan, puis contrôlés sur un échantillon." },
    { icon: '🌍', title: 'Clients étrangers servis dans leur langue', desc: "Réponses traduites et ajustées, termes contractuels relus par un locuteur natif." },
  ],
  modules: [
    {
      day: 1,
      title: 'Module 1 · Copilot au poste du conseiller',
      duration: '1h30',
      description: "Savoir ce que Copilot lit selon la licence de chacun, et ce qu'on ne lui transmet sous aucun prétexte.",
      items: [
        "Copilot Chat sur le mail ouvert, licence Microsoft Copilot sur toute la messagerie : deux niveaux d'aide",
        "Données clients bannies des demandes : santé, banque, identité",
        "Réglages utiles au poste : modèle automatique ou réflexion poussée, langue de réponse",
        "Ce que le RGPD impose pour les données qu'un client nous confie",
      ],
      exercise: "Vous anonymisez trois réclamations récentes de votre équipe, puis vérifiez avec le groupe qu'aucun élément identifiant ne subsiste.",
    },
    {
      day: 1,
      title: 'Module 2 · Répondre à une réclamation depuis Outlook',
      duration: '2h',
      description: "Passer du fil à une réponse claire, apaisante et fidèle à la procédure.",
      items: [
        "Résumer le fil avant d'écrire",
        "Rédiger la réponse : faits datés, issue prévue par la procédure, prochaine étape",
        "Conseils de ton : apaiser sans promettre",
        "Relecture des engagements : délais, remises, reconnaissance d'erreur",
      ],
      exercise: "Vous traitez trois réclamations anonymisées de votre service, de la lecture du fil à la réponse prête à envoyer.",
    },
    {
      day: 1,
      title: 'Module 3 · Écrire dans la langue du client',
      duration: '1h30',
      description: "Servir un client étranger sans perdre la précision des engagements.",
      items: [
        "Répondre en anglais, en espagnol ou en allemand à partir d'un fil en français",
        "Garder les formules et le registre attendus dans chaque langue",
        "Garantie, pénalités, résiliation : faire valider la traduction par un locuteur natif de l'équipe",
        "Glossaire de l'entreprise placé dans les instructions de la demande",
      ],
      exercise: "Vous répondez en anglais à une réclamation reçue en anglais, puis comparez avec la réponse qu'un collègue anglophone aurait écrite.",
    },
    {
      day: 1,
      title: 'Module 4 · Organiser la base de réponses dans SharePoint',
      duration: '2h',
      description: "Transformer les réponses dispersées des conseillers en une source fiable pour Copilot.",
      items: [
        "Recenser les réponses types et les procédures éparpillées dans les boîtes",
        "Classer par motif de contact, dater, nommer un responsable par fiche",
        "Interroger la base avec Copilot, puis vérifier que chaque fiche citée est la version en vigueur",
        "Retirer les versions périmées pour qu'elles ne soient plus citées",
      ],
      exercise: "Vous rédigez cinq fiches de réponse validées sur les motifs qui reviennent le plus dans votre service, puis vous les testez avec Copilot.",
    },
    {
      day: 2,
      title: "Module 5 · Construire l'assistant des conseillers",
      duration: '2h',
      description: "Mettre la base de réponses à portée de question, et vérifier que l'assistant n'invente rien.",
      items: [
        "Agent Builder : instructions, sources SharePoint, ton des réponses",
        "Éprouver l'agent avec une question dont la base ne contient pas la réponse",
        "Postes sans licence : consommation facturée pour l'agent documentaire, agents simples sans surcoût",
        "Responsable de l'agent : mises à jour, retours des conseillers",
      ],
      exercise: "Vous construisez un assistant sur vos cinq fiches et le mettez à l'épreuve avec dix questions, dont deux pièges.",
    },
    {
      day: 2,
      title: 'Module 6 · Lire les motifs de contact dans Excel',
      duration: '1h30',
      description: "Tirer d'un export de tickets des constats que la direction peut vérifier.",
      items: [
        "Préparer l'export du ticketing : colonnes nommées, dates au bon format",
        "Mode Conversation : motifs, délais par canal, évolution sur trois mois",
        "Classement des verbatims par thème, démarche validée en mode Plan sur un fichier dupliqué",
        "Contrôler un échantillon, puis rédiger trois constats chiffrés",
      ],
      exercise: "À partir de l'export du dernier trimestre, vous préparez pour la direction trois constats dont chacun cite son chiffre et sa colonne d'origine.",
    },
    {
      day: 2,
      title: 'Module 7 · Escalades et suivi avec Teams et Cowork',
      duration: '1h30',
      description: "Garder la trace des décisions d'escalade et préparer les réponses répétitives.",
      items: [
        "Récapitulatif d'une réunion d'escalade : décisions, responsables, délais",
        "Cowork lancé par l'arrivée d'une réclamation : brouillon préparé, envoi validé",
        "Coût de Cowork : une consommation facturée en sus de l'abonnement",
        "Agent client dans Copilot Studio : ce qu'un tel projet demande avant d'être chiffré",
      ],
      exercise: "Vous décrivez une tâche Cowork pour un type de réclamation fréquent et listez les étapes que le conseiller doit valider.",
    },
    {
      day: 2,
      title: 'Module 8 · Écrire la charte du service client',
      duration: '2h',
      description: "Arrêter les consignes communes et le calendrier du premier mois.",
      items: [
        "Données exclues, gestes commerciaux réservés, relecture des réponses sensibles",
        "AI Act : former les conseillers (article 4) et prévenir le client qu'il parle à un agent (article 50)",
        "Repères à suivre : délai de réponse, réclamations rouvertes, retours des conseillers",
        "Plan à 30 jours : base de réponses enrichie, assistant testé, point d'étape après quatre semaines",
      ],
      exercise: "Vous fixez par écrit l'usage de Copilot dans votre service client, puis le calendrier de ses quatre prochaines semaines.",
    },
  ],
  objectives: [
    "Rédiger depuis Outlook une réponse à une réclamation, au ton réglé et sans engagement hors procédure",
    "Répondre à un client dans sa langue en faisant valider les termes contractuels",
    "Organiser dans SharePoint une base de réponses que Copilot cite avec la date de chaque fiche",
    "Construire avec Agent Builder un assistant des conseillers et le tester sur des questions sans réponse",
    "Analyser dans Excel les tickets exportés et classer des verbatims en contrôlant un échantillon",
    "Énoncer les données clients exclues de Copilot et les obligations d'information liées à un agent",
  ],
  faq: [
    {
      q: 'Pourquoi Copilot plutôt que ChatGPT pour un service client ?',
      a: "Pour une équipe qui traite ses demandes dans Outlook et range ses procédures dans SharePoint, Copilot travaille sur place : il lit le fil ouvert, retrouve la procédure dans la bibliothèque et respecte les droits de chacun, sans copier-coller vers un autre outil. ChatGPT rédige aussi bien une réponse, mais suppose de lui transmettre l'échange, avec les questions de données que cela pose. Le choix dépend donc d'abord de votre environnement de travail ; notre comparatif détaille les deux assistants fonction par fonction.",
    },
    {
      q: 'Copilot peut-il tenir lieu de chatbot ou de ticketing ?',
      a: "Non. Votre outil de ticketing reste la référence pour les dossiers, les délais et les statuts, et Copilot ne le lit pas sans connecteur. Pour un agent chargé de répondre aux clients sur votre site, Copilot Studio est une option parmi d'autres ; Microsoft le vend hors licence, au forfait (173,30 € HT mensuels pour 25 000 crédits, prix relevé le 7 octobre 2026) ou à la consommation. Le choix entre cet outil et une solution spécialisée dépend de vos canaux, de vos volumes et de votre logiciel de relation client : c'est une question de cadrage, distincte de la formation.",
    },
    {
      q: 'Nous utilisons Dynamics 365 : la formation en tient-elle compte ?',
      a: "La formation porte sur Copilot dans Microsoft 365 : Outlook, Teams, Word, Excel et SharePoint. Si votre service travaille dans Dynamics 365 ou dans un autre logiciel de relation client, nous relevons au cadrage ce que vos licences y ouvrent et la façon dont les conseillers jonglent entre les deux environnements. Les exercices restent centrés sur l'écrit, la base de réponses et l'analyse des motifs, qui valent quel que soit le logiciel. Relier Copilot à votre CRM relève d'un développement, chiffré séparément.",
    },
    {
      q: 'Les conseillers ont-ils besoin de la licence Microsoft Copilot ?',
      a: "Pas tous. Copilot Chat, sans supplément, aide à répondre au mail affiché dans Outlook, ce qui couvre le cœur du métier. Avec une licence, superviseurs et référents interrogent en plus l'ensemble de leurs mails et documents. Le prix de Copilot Business, offre des sociétés de 300 postes au plus, s'établit le 7 octobre 2026 à 18,20 € HT par conseiller, chaque mois, avec un règlement à l'année. Un agent branché sur vos procédures peut aussi servir les postes sans licence, contre une facturation à la consommation.",
    },
    {
      q: 'Peut-on traiter des réclamations qui contiennent des données personnelles ?',
      a: "Oui, en ne transmettant que le nécessaire. Le nom du client, l'objet de la réclamation et les faits datés suffisent pour rédiger une réponse ; les coordonnées bancaires, les données de santé et les pièces d'identité n'ont rien à faire dans une demande. Les échanges de vos conseillers connectés à leur compte professionnel restent sous les engagements de Microsoft et n'entrent pas dans l'apprentissage de ses modèles. Le module 8 consacre une partie de la charte à la liste des données bannies pour votre service.",
    },
    {
      q: 'Le client doit-il savoir que Copilot a aidé à écrire sa réponse ?',
      a: "Pour un mail rédigé avec Copilot puis relu et envoyé par un conseiller, aucune mention n'est exigée : c'est un humain qui répond. L'obligation d'information prévue par l'AI Act depuis l'été 2026 vise les systèmes qui échangent directement avec le client, comme un agent sur votre site. Si vous ouvrez un tel agent, il doit se présenter comme une IA dès son message d'accueil ; nous recommandons en plus qu'il propose à tout moment de parler à un conseiller.",
    },
    {
      q: 'Travaillerons-nous sur nos propres réclamations ?',
      a: "Oui, sous forme anonymisée. Avant la session, vous nous transmettez une vingtaine de réclamations dont les noms, adresses et numéros de contrat ont été retirés, un export de tickets et vos procédures. Les ateliers partent de ce matériel, et chaque conseiller travaille sur des situations qu'il reconnaît. Si votre règle interne interdit toute sortie de données, l'atelier se déroule sur vos postes, dans votre environnement Microsoft 365.",
    },
    {
      q: 'Quel financement pour former un service client à Copilot ?',
      a: "La session peut être financée par votre OPCO, la certification Qualiopi de Masteria portant sur ses actions de formation ; la décision lui appartient, selon ses règles et ses fonds. Deux journées pour une équipe de douze conseillers au plus coûtent 3 960 € HT, et un responsable seul paie 1 980 € HT la journée. Un centre de relation client organisé en équipes successives peut prévoir deux groupes, chacun au même tarif. Un service client basé à Genève ou à Bruxelles, où l'OPCO n'a pas d'équivalent, reçoit un devis hors taxes, en euros.",
    },
  ],
  tarifs: {
    titre: "Le coût d'une formation Copilot pour un service client",
    paras: [
      "Chaque journée, au prix de 1 980 € HT, inclut la préparation : le formateur étudie vos réclamations anonymisées, votre export de tickets et vos procédures, puis construit les ateliers sur ces pièces. Les conseillers repartent avec leurs demandes types, cinq fiches de réponse validées et le premier assistant de l'équipe.",
      "Pour onze conseillers formés dans le même groupe, les deux jours reviennent à 3 960 € HT, 360 € HT chacun. Pour un centre organisé en équipes de jour et de soir, deux groupes se forment, chacun au même tarif. Les licences Copilot et un éventuel agent Copilot Studio se paient à part. L'OPCO de votre branche rend ensuite sa décision de financement.",
    ],
  },
  apres: {
    titre: 'Après la formation, un agent pour vos clients ou vos conseillers',
    texte: "Une base de réponses entretenue ouvre la voie à des outils plus ambitieux : un agent Copilot Studio qui répond aux questions simples de vos clients et passe la main à un conseiller, une tâche Cowork qui prépare un brouillon à chaque réclamation reçue, un tableau qui suit chaque mois les motifs de contact. Masteria précise avec vous le périmètre, réalise l'outil, l'éprouve sur vos réclamations les plus difficiles et forme l'équipe qui l'entretient. Vendu au forfait une fois le projet cadré, ce travail n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous vingt réclamations anonymisées et un export de tickets : les ateliers partiront de vos situations.",
    fin: {
      titre: 'Préparons la session sur vos motifs de contact',
      texte: "Dites-nous combien de conseillers vous voulez former, leurs horaires, leurs licences Copilot et l'outil de ticketing utilisé. Le programme et le calendrier que nous proposons tiennent compte de la continuité du service.",
    },
  },
  liensAssocies: [
    { label: 'Microsoft Copilot en formation, fonction par fonction', href: '/formation-microsoft-copilot' },
    { label: 'Formation IA pour le service client, tous assistants', href: '/formation-ia-service-client' },
    { label: 'Un agent de support client IA sur mesure', href: '/agent-support-client-ia' },
    { label: 'Copilot face à ChatGPT, point par point', href: '/copilot-vs-chatgpt' },
    { label: 'Concevoir et superviser ses agents IA', href: '/formation-agents-ia' },
  ],
  sources: [
    { name: "Microsoft Learn : Copilot Chat dans Outlook sans licence, et les agents payés à l'usage", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview' },
    { name: "Microsoft France : tarifs de Copilot Studio relevés le 7 octobre 2026", url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio' },
    { name: "Microsoft Learn : Cowork et les tâches lancées par l'arrivée d'un mail", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/' },
    { name: "EUR-Lex : règlement sur l'IA, obligation de prévenir qu'un agent n'est pas humain", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  ],
}
