// Contenu propre à /formation-chatgpt-service-client (guide terrain, page propre). Rendu par SpokePage.
// Écrit le 7 octobre 2026. Faits ChatGPT : fiche de faits du 07/10/2026 (help.openai.com lu par extraits,
// FAQ sur le retrait des GPTs vérifiée à la main), comparatifs du 03/10/2026 (src/data/comparisons.js),
// guides ChatGPT du 28/09/2026. AI Act : règlement (UE) 2024/1689, article 50, applicable depuis le 2 août 2026.
// Médiation de la consommation : fiche pratique de la DGCCRF. Les chiffres de gain de l'ancienne
// intro (« 80 % des cas ») ont été retirés faute de source.
export default {
  slug: 'formation-chatgpt-service-client',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation ChatGPT pour le service client',
  metaTitle: 'Formation ChatGPT service client | Masteria',
  metaDesc: "Formation ChatGPT service client : réclamations traitées selon vos règles, procédures communes au plateau, tickets comptés, données clients protégées.",
  keywords: "formation ChatGPT service client, ChatGPT relation client, ChatGPT réclamations, formation IA conseillers clientèle",
  resume: "La formation ChatGPT pour le service client occupe deux journées de sept heures, consacrées aux réclamations, aux procédures et aux exports de tickets de votre plateau. En intra, elle accueille douze conseillers, superviseurs ou responsables au plus ; un responsable de la relation client peut aussi la suivre seul. Elle se tient sur votre site ou à distance, et le plateau paie 1 980 € HT par journée. Le dossier de financement part ensuite vers l'OPCO de votre branche, seul juge de la prise en charge, puisque Masteria détient la certification Qualiopi.",
  enBref: [
    { label: 'Formation', value: "ChatGPT sur un plateau de relation client : réclamations, procédures partagées, motifs de contact comptés dans un export, cas difficiles et escalade" },
    { label: 'Durée', value: "Deux jours (14 heures), séparables pour laisser le plateau tester la base de réponses entre les deux" },
    { label: 'Formats', value: "Groupe intra de douze personnes au maximum, ou parcours individuel pour un responsable ; sur votre plateau ou en classe virtuelle" },
    { label: 'Tarif', value: "1 980 € HT la journée, préparation des ateliers sur vos tickets anonymisés comprise" },
    { label: 'Financement', value: "Certification Qualiopi de Masteria ; l'OPCO de l'entreprise tranche d'après les règles et les fonds de sa branche" },
    { label: 'Prérequis', value: "Un espace d'équipe Business ou Enterprise, ou à défaut des comptes Plus, et un export de tickets préparé avec nous" },
  ],
  intro: "Un conseiller clientèle répond chaque jour aux mêmes questions sous des formes toujours différentes, et une réponse maladroite à une réclamation coûte un client. ChatGPT peut proposer en quelques secondes une réponse qui parle comme votre marque, appuyée sur vos conditions générales et sur la grille des gestes commerciaux, puis compter dans un export les motifs de contact qui reviennent. Il ne connaît ni vos clients ni vos engagements tant que vous ne les lui avez pas donnés, et il ne doit rien envoyer seul. Ce guide décrit la base de réponses à monter, les réglages qui gardent les informations de vos clients à l'abri et la limite qui sépare l'aide au conseiller d'un agent qui parle au public.",
  prerequis: "Pratiquer la réponse écrite aux clients (mail, formulaire, messagerie) ; de préférence un espace d'équipe Business ou Enterprise, dont nous contrôlons les réglages en amont",
  guide: {
    kicker: 'Guide terrain',
    h2: "ChatGPT prépare la réponse avec vos règles, le conseiller l'envoie sous son nom",
    lead: "Dans un service client, la qualité d'une réponse tient à trois éléments : la règle juste (ce que les conditions générales permettent), le geste juste (ce que la grille autorise au conseiller) et le ton juste (celui de la marque). ChatGPT n'en connaît aucun au départ. Placés dans un projet partagé, ces trois éléments deviennent le socle commun du plateau, et chaque conseiller obtient une proposition qui les respecte. Un humain décide, un humain envoie : un geste commercial promis à tort ou une date de remboursement inventée engagent l'entreprise, qui en répond seule.",
    sections: [
      {
        h3: "Toutes les règles du plateau tiennent dans un projet partagé",
        paras: [
          "Un projet ChatGPT rassemble au même endroit des consignes, des documents qui font foi et toutes les conversations d'un sujet. Pour un service client, il accueille les conditions générales de vente, la procédure de retour, la grille des gestes commerciaux avec leurs plafonds, et une vingtaine de réponses validées par la qualité. Les instructions fixent le ton (vouvoiement, longueur maximale, formules à proscrire) et une règle : citer le document d'où vient chaque engagement pris dans la réponse.",
          "Sur ChatGPT Business, ce projet reçoit 40 fichiers et s'ouvre à 100 collègues. Le superviseur garde l'accès en modification, les conseillers reçoivent l'accès en discussion : ils interrogent la base sans pouvoir la modifier. Quand une procédure change, une seule personne met le fichier à jour, et tout le plateau répond avec la nouvelle version le jour même.",
        ],
      },
      {
        h3: "Une compétence donne sa forme à chaque réponse de réclamation",
        paras: [
          "Une compétence (skill) est une procédure écrite que ChatGPT déclenche seul dès qu'une demande lui correspond. Elle se crée depuis le menu des plugins, onglet Compétences, en la décrivant à ChatGPT, qui pose ses questions puis la rédige. Les espaces Business, Enterprise, Healthcare et Edu y ont accès. Pour une réclamation, la compétence impose un ordre : reconnaître le problème, expliquer ce qui s'est passé sans se défausser, proposer une solution dans les limites de la grille, puis indiquer la suite et son délai.",
          "Pour une clientèle de particuliers, ajoutez une étape. Quand une réclamation écrite n'a pas réglé le litige, le Code de la consommation oblige le professionnel à communiquer au client les coordonnées du médiateur de la consommation dont il relève. La compétence le rappelle dans toute réponse de refus définitif. Anthropic a créé ce format de compétence, qu'OpenAI, Google, Microsoft et Mistral ont adopté depuis : une procédure écrite pour ChatGPT se transpose vers un autre assistant sans repartir de zéro.",
        ],
      },
      {
        h3: "Les motifs de contact se comptent dans l'export, les verbatims se citent mot pour mot",
        paras: [
          "Un export de tickets au format CSV ou Excel passe dans l'analyse de données, l'outil de ChatGPT qui écrit puis exécute du code pour compter : nombre de demandes par motif, par semaine, par canal ou par version de produit. Ces décomptes se vérifient, puisque le code reste lisible et que le total doit égaler le nombre de lignes de l'export. Les fichiers jusqu'à 50 Mo environ passent sans découpage.",
          "Le chiffre ne dit pas pourquoi les clients écrivent. Pour cela, demandez à ChatGPT de citer, pour chaque motif, trois messages de clients reproduits à l'identique, avec leur numéro de ligne. La note qui part vers l'équipe produit s'appuie alors sur des phrases de clients que chacun peut retrouver dans l'export.",
        ],
      },
      {
        h3: "Les données des clients se protègent avant l'import, puis par le choix du compte",
        paras: [
          "Un ticket contient un nom, une adresse, parfois un numéro de contrat ou une information de santé. Avant tout import, retirez les colonnes qui identifient le client et remplacez les noms dans le texte libre par un code : l'analyse des motifs n'en a pas besoin. Le RGPD demande de ne traiter que ce qui sert la finalité poursuivie, et le plus simple reste de ne pas faire entrer ce qui ne sert pas.",
          "Le choix du compte pèse autant que la préparation de l'export. Les contenus versés dans un espace Business ou Enterprise ne servent pas à entraîner les modèles d'OpenAI. Ceux des comptes Free, Go, Plus et Pro le peuvent, à moins que leur titulaire ne décoche « Améliorer le modèle pour tous ». Business peut stocker les données au repos en Europe, au fil d'un déploiement progressif, et OpenAI conserve un temps une copie aux États-Unis pour lutter contre les abus. Enterprise et Edu vont plus loin : les clients qui y ont droit peuvent aussi faire tourner les modèles sur le sol européen.",
        ],
      },
      {
        h3: "Un agent qui parle lui-même aux clients relève d'un autre chantier",
        paras: [
          "Depuis le 21 mai 2026, les espaces Business, Enterprise et Edu disposent des agents d'espace de travail, que l'on rédige comme une consigne donnée à un collègue, puis que l'on partage, que l'on planifie ou que l'on déclenche par un message Slack. Pour un plateau, un agent interne peut trier une boîte partagée, proposer un motif pour chaque message et préparer les réponses que les conseillers relisent. Depuis le 6 juillet 2026, chaque passage d'un agent se règle en crédits, et OpenAI estime qu'une exécution ordinaire en consomme entre 5 et 25 : un tri lancé toutes les heures se chiffre avant d'être activé.",
          "Un assistant qui répond lui-même aux clients sur votre site ou votre messagerie se construit avec l'interface de programmation d'OpenAI, des tests et une supervision. L'AI Act s'en mêle : son article 50, en application depuis août 2026, oblige à prévenir le client qu'il converse avec une machine, à moins que le contexte le rende évident. La formation trace cette frontière ; la construction d'un tel assistant fait l'objet d'un projet distinct.",
        ],
      },
    ],
    table: {
      caption: "Sept situations du service client, l'outil de ChatGPT qui convient et la limite à tenir",
      headers: ['Situation', 'Outil de ChatGPT', 'Limite à tenir'],
      rows: [
        ["Répondre à une réclamation sur une livraison abîmée", "Projet de la base de réponses, puis compétence « réclamation »", "Aucun geste au-delà du plafond fixé par la grille"],
        ["Expliquer une clause des conditions générales", "Projet, avec citation de l'article concerné", "Le texte cité, vérifié dans la version en vigueur"],
        ["Répondre à un client en allemand", "Conversation dans le projet, réponse rédigée en allemand", "Une relecture par un germanophone pour toute réclamation sensible"],
        ["Compter les motifs de contact du mois", "Analyse de données, sur un export pseudonymisé", "Le total des motifs égal au nombre de lignes"],
        ["Rédiger un article d'aide à partir de tickets récurrents", "Projet, puis extension Word sur le brouillon", "La validation de la qualité avant publication"],
        ["Trier la boîte partagée chaque matin", "Agent d'espace de travail, testé sur des messages pièges", "Les crédits consommés suivis chaque semaine"],
        ["Opposer un refus définitif de remboursement à un particulier", "Compétence « réclamation », étape médiation comprise", "Les coordonnées du médiateur présentes dans la réponse"],
      ],
    },
    cas: {
      h3: "Cas pratique : six cents tickets après la mise à jour d'un logiciel de caisse",
      contexte: "Prenons le responsable du support d'un éditeur de logiciels de caisse pour commerçants. La mise à jour de septembre a déplacé l'écran de clôture de journée, et le plateau a reçu près de six cents tickets en trois semaines. Le responsable veut savoir ce qui bloque les commerçants, donner aux conseillers une réponse commune et transmettre à l'équipe produit une note appuyée sur des faits.",
      etapes: [
        "Exportez les tickets des trois semaines au format CSV, avec le motif saisi, la date, le canal, la version installée et le texte du message ; retirez les colonnes de nom, de mail et de téléphone.",
        "Dans le projet de la base de réponses, ouvrez une conversation, déposez l'export et lancez le prompt ci-dessous avec le mode réflexion.",
        "Ouvrez le code produit par l'analyse de données et vérifiez que le total des motifs égale le nombre de lignes de l'export.",
        "Relisez avec deux conseillers la réponse type proposée, corrigez-la, puis rangez la version validée dans les fichiers du projet.",
        "Envoyez à l'équipe produit la note et les citations de clients, puis demandez à ChatGPT de transformer la réponse validée en compétence pour le plateau.",
      ],
      prompt: "Tu analyses pour moi un export de tickets de notre support, déposé dans cette conversation. Chaque ligne est un ticket : date, canal, version du logiciel installée chez le commerçant, motif saisi par le conseiller et texte du message. Les noms des clients ont été retirés.\n\n1. Avec l'analyse de données, compte les tickets par motif et par semaine, puis par version installée. Donne le code utilisé et vérifie que le total égale le nombre de lignes du fichier.\n\n2. Lis les textes des messages et propose un regroupement plus fin que le motif saisi, en cinq à huit familles. Pour chaque famille, donne le nombre de tickets et cite mot pour mot trois messages, avec leur numéro de ligne.\n\n3. Pour les deux familles les plus nombreuses, rédige une réponse type au ton des réponses validées rangées dans ce projet : vouvoiement, douze lignes au plus, une étape par phrase pour guider le commerçant. N'invente aucune manipulation qui ne figure pas dans la procédure du projet ; si la procédure ne couvre pas le cas, écris « à confirmer avec l'équipe produit ».\n\n4. Écris pour l'équipe produit une note tenant sur une page : ce qui bloque, combien de commerçants sont touchés, les citations les plus parlantes. Ne fais aucune hypothèse sur la cause technique.",
      resultat: "Vous obtenez un décompte vérifiable par motif, par semaine et par version, un regroupement plus fin illustré par des phrases de commerçants, deux réponses types prêtes à relire et une note pour l'équipe produit. Avant diffusion, contrôlez le total des motifs et relisez chaque citation dans l'export. Les réponses types ne rejoignent la base qu'après validation par la qualité.",
    },
    pieges: [
      {
        titre: "Un geste commercial que la grille ne permet pas",
        texte: "Pour apaiser un client, ChatGPT peut proposer un avoir ou une remise trop généreux. Rangez la grille des gestes dans le projet et écrivez dans les instructions qu'aucune compensation ne dépasse ses plafonds.",
      },
      {
        titre: "L'adresse et le numéro de contrat collés dans la conversation",
        texte: "Copier un ticket entier fait entrer des données personnelles inutiles à la réponse. Remplacez nom, adresse et numéro de contrat par un code avant de demander une proposition, et travaillez dans l'espace de l'entreprise.",
      },
      {
        titre: "Une traduction que personne ne relit",
        texte: "La réponse peut être écrite dans la langue du client, mais une nuance de ton peut transformer une excuse en reproche. Pour une réclamation sensible, faites relire la version étrangère par un conseiller qui parle la langue.",
      },
      {
        titre: "Un assistant sur le site présenté comme un conseiller",
        texte: "Un client a le droit de savoir qu'une machine lui répond : l'AI Act l'impose aux agents conversationnels depuis le début d'août 2026. Un assistant qui signe « Julie, du service client » sans rien préciser expose l'entreprise.",
      },
    ],
  },
  audience: [
    {
      title: "Conseillers clientèle et chargés de réclamations",
      desc: "Vous répondez par mail, formulaire ou messagerie, souvent sous la pression du volume. Vous apprenez à obtenir une proposition fidèle aux règles de la maison, à la corriger vite et à décider vous-même de ce qui part.",
    },
    {
      title: "Superviseurs et responsables qualité",
      desc: "Vous tenez les réponses validées, la grille des gestes et le suivi des motifs de contact. Vous apprenez à faire de ces documents la base commune du plateau et à tirer de l'export mensuel une note chiffrée et citée.",
    },
    {
      title: "Responsables de la relation client",
      desc: "Vous arbitrez l'outillage, les données admises et la place de l'IA face aux clients. Vous apprenez à distinguer l'aide au conseiller de l'agent qui répond seul, à en mesurer le coût et à écrire les règles du service.",
    },
  ],
  useCases: [
    { icon: '💬', title: "Réponses aux réclamations", desc: "Une proposition qui reconnaît le problème, explique, reste dans la grille des gestes et annonce la suite, relue avant envoi." },
    { icon: '📚', title: "Base de réponses commune", desc: "Conditions générales, procédures et réponses validées rangées dans un projet que tout le plateau interroge." },
    { icon: '📊', title: "Motifs de contact comptés", desc: "L'export de tickets pseudonymisé, compté par motif et par semaine, avec le code qui permet de vérifier le total." },
    { icon: '🌐', title: "Clients étrangers", desc: "Des réponses rédigées dans la langue du client, relues par un conseiller qui la parle quand l'enjeu le justifie." },
    { icon: '📄', title: "Articles d'aide tirés des tickets", desc: "Les questions récurrentes transformées en pages d'aide, validées par la qualité avant publication." },
    { icon: '🛡', title: "Données clients protégées", desc: "Colonnes identifiantes retirées, compte d'entreprise vérifié et règles du service écrites avant le premier import." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Ouvrir l'espace du plateau et décider des données admises",
      duration: '1h30',
      description: "Mettre en place le cadre avant de verser le moindre ticket dans ChatGPT.",
      items: [
        "Ce que chaque offre de ChatGPT fait des échanges, au 7 octobre 2026",
        "Données d'un ticket : ce qui sert la réponse, ce qui reste dehors",
        "Pseudonymiser un message ou un export en deux minutes",
        "Mémoire, historique et réglages vérifiés poste par poste",
      ],
      exercise: "Vous classez les champs de vos tickets en deux colonnes, admis et exclus, puis vous pseudonymisez trois messages de la semaine.",
    },
    {
      day: 1,
      title: "Module 2 · Demander une réponse de réclamation au ton de la maison",
      duration: '2h',
      description: "Formuler une demande qui donne à ChatGPT la situation, l'historique et la marge de manœuvre.",
      items: [
        "Les éléments d'une bonne demande : faits, historique du dossier, geste possible, ton, longueur",
        "Faire citer la règle sur laquelle repose chaque engagement",
        "Corriger une proposition par une consigne ciblée",
        "Repérer les phrases qui promettent plus que la grille",
      ],
      exercise: "Vous traitez trois réclamations récentes de votre plateau, d'une demande banale à un dossier tendu, et comparez les propositions obtenues à la réponse envoyée à l'époque.",
    },
    {
      day: 1,
      title: "Module 3 · Construire la base de réponses dans un projet partagé",
      duration: '2h',
      description: "Donner à tout le plateau les mêmes règles, la même grille et le même ton.",
      items: [
        "Choisir les fichiers : conditions générales, procédures, grille des gestes, réponses validées",
        "Écrire les instructions du projet : ton, longueur, citation obligatoire des sources",
        "Accès en modification pour le superviseur, en discussion pour les conseillers",
        "Mettre à jour une procédure et vérifier que les réponses suivent",
      ],
      exercise: "Vous construisez la base de réponses dans un projet et la testez sur dix questions de clients tirées de vos tickets.",
    },
    {
      day: 1,
      title: "Module 4 · Compter les motifs de contact dans un export de tickets",
      duration: '1h30',
      description: "Passer d'un export brut à une lecture chiffrée et citée de ce que vivent les clients.",
      items: [
        "Préparer l'export : colonnes utiles, colonnes retirées, format CSV",
        "Analyse de données : décompte par motif, par semaine, par canal",
        "Vérifier le code et le total avant de citer un chiffre",
        "Extraire des verbatims exacts avec leur numéro de ligne",
      ],
      exercise: "Sur l'export pseudonymisé de votre dernier mois, vous produisez le décompte des motifs et trois citations par motif principal.",
    },
    {
      day: 2,
      title: "Module 5 · Transformer la réponse type en compétence",
      duration: '1h30',
      description: "Faire appliquer la même structure de réponse à chaque conseiller, sans dépendre de sa mémoire.",
      items: [
        "Créer une compétence en la décrivant à ChatGPT, depuis l'onglet Compétences",
        "Structure imposée : reconnaissance, explication, solution, suite et délai",
        "Étape médiation pour les refus définitifs adressés à des particuliers",
        "Tester la compétence sur trois cas de nature différente avant de la partager",
      ],
      exercise: "Vous écrivez la compétence « réclamation » de votre plateau et la confiez à un collègue, qui l'essaie sur une réclamation qu'il n'a pas vue.",
    },
    {
      day: 2,
      title: "Module 6 · Traiter les cas difficiles et savoir passer la main",
      duration: '2h',
      description: "Garder le contrôle quand le client est en colère, écrit dans une autre langue ou menace d'un litige.",
      items: [
        "Apaiser un client en colère : reformuler sa demande, reconnaître le problème, proposer une issue",
        "Répondre en langue étrangère et organiser la relecture",
        "Signaux qui imposent l'escalade vers un responsable ou le service juridique",
        "Ce que le conseiller ne délègue jamais : excuses engageantes, promesse de délai, geste hors grille",
      ],
      exercise: "Vous jouez à deux une réclamation tendue tirée de vos dossiers : l'un écrit en client, l'autre répond avec ChatGPT, puis vous inversez les rôles.",
    },
    {
      day: 2,
      title: "Module 7 · Préparer un agent interne et chiffrer sa consommation",
      duration: '2h',
      description: "Décider de ce qu'un agent peut faire pour le plateau, puis le tester avant de l'ouvrir.",
      items: [
        "Décrire l'agent : sa mission, ce qui le lance, ses étapes, ses droits",
        "Tri d'une boîte partagée et proposition de motif, testés sur des messages pièges",
        "Crédits par exécution et budget mensuel à suivre",
        "Anciens GPTs du plateau : les passer en plugins avant décembre",
      ],
      exercise: "Vous décrivez l'agent de tri de votre boîte partagée, le testez sur vingt messages anonymisés et estimez son coût mensuel en crédits.",
    },
    {
      day: 2,
      title: "Module 8 · Fixer les règles du service et le programme du premier mois",
      duration: '1h30',
      description: "Mettre noir sur blanc le partage des rôles entre l'outil et le conseiller, et les données qui restent toujours dehors.",
      items: [
        "Article 4 de l'AI Act : soutenir la maîtrise de l'IA des conseillers et garder trace des formations",
        "Article 50 : la transparence due aux clients face à un agent conversationnel",
        "Règles de relecture, d'escalade et de pseudonymisation",
        "Un référent par équipe, deux réponses types à suivre et un point d'étape après quatre semaines",
      ],
      exercise: "Vous rédigez ce que votre service client autorise et interdit avec ChatGPT, puis le plan d'action des trente prochains jours.",
    },
  ],
  objectives: [
    "Le participant sait trier les champs d'un ticket entre ce qui peut entrer dans ChatGPT et ce qui reste dehors, et pseudonymiser un message.",
    "Le participant sait obtenir une réponse de réclamation qui cite la règle appliquée et reste dans la grille des gestes commerciaux.",
    "Le participant sait paramétrer un projet de base de réponses partagé, avec des droits différents pour superviseurs et conseillers.",
    "Le participant sait faire compter par l'analyse de données les motifs d'un export de tickets, puis vérifier que le total tombe juste.",
    "Le participant sait créer et tester une compétence qui impose la structure d'une réponse de réclamation.",
    "Le participant sait rédiger la fiche d'un agent interne de tri, l'éprouver sur des cas pièges et estimer sa consommation en crédits.",
  ],
  faq: [
    {
      q: "ChatGPT peut-il répondre seul à nos clients ?",
      a: "Dans l'application ChatGPT, non : il prépare une proposition que le conseiller relit, corrige et envoie depuis votre outil habituel. Un assistant qui répond seul aux clients sur votre site ou votre messagerie se construit avec l'interface de programmation d'OpenAI, des tests et une supervision humaine. Depuis le 2 août 2026, il doit aussi annoncer aux clients qu'ils parlent à une IA, comme l'exige l'AI Act. La formation porte sur l'aide au conseiller ; l'assistant public fait l'objet d'un projet séparé.",
    },
    {
      q: "Quelle offre ChatGPT retenir pour une équipe de conseillers ?",
      a: "ChatGPT Business couvre les besoins d'un plateau : projet partagé jusqu'à 100 personnes avec des droits différents, compétences communes, agents d'espace de travail, et des échanges exclus par défaut de l'entraînement des modèles. L'offre démarre à deux sièges. Enterprise ajoute notamment la création automatique des comptes, les journaux d'audit et, si votre entreprise y est éligible, un traitement des requêtes en Europe. Des comptes Plus individuels suffisent pour apprendre la méthode, sans base commune. Votre administrateur nous confirme avant la session ce qui est activé.",
    },
    {
      q: "Peut-on confier des données de clients à ChatGPT ?",
      a: "Le moins possible, et jamais sur un compte personnel. Pour rédiger une réponse ou compter des motifs, le nom, l'adresse et le numéro de contrat ne servent à rien : un code les remplace. Dans un espace Business ou Enterprise, vos contenus échappent à l'entraînement des modèles, et Business offre un stockage au repos en Europe. Votre DPO valide la liste des champs admis ; le module 1 la prépare avec lui ou avec la personne qui tient votre registre des traitements.",
    },
    {
      q: "ChatGPT se branche-t-il sur notre outil de tickets ?",
      a: "Cela dépend de l'outil et de ce que votre administrateur autorise. Les liaisons de ChatGPT avec des logiciels tiers prennent aujourd'hui la forme de plugins, et c'est la console de votre espace qui dit lesquels vos conseillers ont le droit d'ajouter. Quand aucun plugin ne convient, un export CSV couvre l'essentiel du travail d'analyse, et la réponse rédigée se colle dans votre outil. Nous vérifions avant la formation ce qui est disponible pour le vôtre.",
    },
    {
      q: "ChatGPT sait-il répondre dans d'autres langues ?",
      a: "Il rédige dans la plupart des langues européennes avec un niveau suffisant pour une réponse courante, en reprenant les règles et le ton rangés dans le projet. Le risque tient aux nuances : une excuse trop appuyée, un terme juridique mal rendu, une formule de politesse déplacée. Pour une réclamation sensible ou un client important, faites relire la version étrangère par un conseiller qui parle la langue, ou demandez à ChatGPT une retraduction en français pour contrôler le sens.",
    },
    {
      q: "Faut-il dire au client que sa réponse a été préparée avec ChatGPT ?",
      a: "Une réponse relue, corrigée et envoyée par un conseiller reste la réponse de l'entreprise. L'AI Act réserve son devoir d'information, à l'article 50, aux systèmes qui conversent eux-mêmes avec une personne, comme un agent conversationnel sur votre site. Votre entreprise peut choisir d'aller plus loin dans sa charte, par exemple en le mentionnant dans ses conditions de service. Le module 8 pose la question et vous aide à trancher avec votre direction.",
    },
    {
      q: "La formation s'appuie-t-elle sur nos propres tickets ?",
      a: "Oui. Quelques jours avant la session, vous nous transmettez un export anonymisé de quelques centaines de tickets, sans colonne d'identité, ainsi que vos conditions générales, vos procédures et une sélection de réponses validées. Les ateliers du premier jour portent sur ces documents, et la base de réponses construite au module 3 reste dans votre espace à l'issue de la formation. Si votre politique interdit tout ticket à l'écran, nous reconstituons des cas types à partir de vos motifs de contact.",
    },
    {
      q: "Comment financer la formation d'un plateau de conseillers ?",
      a: "Qualiopi, la certification que Masteria détient pour ses actions de formation, ouvre la porte de l'OPCO dont relève votre plateau ; cet organisme tranche d'après sa branche et le budget encore disponible cette année. Programme détaillé, objectifs avec leur évaluation et convention de formation vous parviennent avant le dépôt de la demande. Pour un plateau situé à Genève ou à Bruxelles, où il n'existe pas d'OPCO, le prix découle d'un devis libellé en euros, hors taxes.",
    },
  ],
  tarifs: {
    titre: "Ce que coûte la formation d'un plateau de service client",
    paras: [
      "Avant la session, le formateur travaille sur votre matière : l'export anonymisé, les conditions générales, la grille des gestes et une sélection de réponses validées, d'où il tire les ateliers. Le prix inclut ce travail, ainsi que les supports, les prompts adaptés à vos motifs de contact et l'accompagnement pendant la construction de la base de réponses.",
      "Prenons un plateau qui inscrit huit conseillers et leur superviseure. En intra, les deux jours reviennent à 3 960 € HT pour ces neuf personnes, soit 440 € HT chacune. Le responsable de la relation client qui préfère un parcours individuel paie la même journée, 1 980 € HT, construite sur ses propres arbitrages. L'OPCO de votre branche étudie ensuite la demande, à laquelle se joignent le programme et la convention que Masteria rédige.",
    ],
  },
  apres: {
    titre: "Après la formation, un assistant pour le plateau ou pour vos clients",
    texte: "Une fois la base de réponses en place, deux suites se présentent. La première reste interne : un agent qui trie la boîte partagée, propose un motif et prépare les réponses que les conseillers relisent. La seconde touche les clients : un assistant sur votre site, nourri de votre base, qui signale qu'il est une IA et passe la main à un conseiller dès que la demande l'exige. Masteria conçoit et teste ces outils avec votre équipe. Chaque mission de ce type donne lieu à un forfait, fixé après cadrage ; elle sort du champ de la formation et n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous la liste de vos motifs de contact : nous bâtissons les ateliers sur les réclamations que votre plateau traite chaque semaine.",
    fin: {
      titre: "Préparons la formation de votre service client",
      texte: "Indiquez-nous la taille du plateau, les canaux traités (mail, formulaire, messagerie, téléphone) et l'abonnement ChatGPT en place. Vous recevez ensuite un programme construit sur vos tickets, avec des dates de session.",
    },
  },
  liensAssocies: [
    { label: "Formation IA pour le service client, tous assistants comparés", href: '/formation-ia-service-client' },
    { label: "Construire un agent de support client sur mesure", href: '/agent-support-client-ia' },
    { label: "Formation aux agents IA en entreprise", href: '/formation-agents-ia' },
    { label: "IA et RGPD : les règles qui s'appliquent aux données clients", href: '/ia-et-rgpd' },
    { label: "Formation ChatGPT rédaction, sur une journée", href: '/formation-chatgpt-redaction' },
  ],
  sources: [
    { name: "Aide d'OpenAI sur les projets partagés et leurs niveaux d'accès", url: 'https://help.openai.com/en/articles/10169521-projects-in-chatgpt' },
    { name: "Aide d'OpenAI sur la création et le partage des compétences", url: 'https://help.openai.com/en/articles/20001066-skills-in-chatgpt' },
    { name: "Aide d'OpenAI sur l'analyse de fichiers de données", url: 'https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt' },
    { name: "Aide d'OpenAI sur la résidence des données et du calcul en Europe", url: 'https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt' },
    { name: "Retrait des GPTs personnalisés : dates et migration, FAQ d'OpenAI", url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
    { name: "DGCCRF : la médiation de la consommation, obligations du professionnel", url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques-et-les-faq/la-mediation-de-la-consommation-ce-que-vous-devez-savoir' },
    { name: "EUR-Lex : l'AI Act et son article 50 sur la transparence", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  ],
}
