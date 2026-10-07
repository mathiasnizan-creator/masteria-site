// Contenu propre à /formation-chatgpt-informatique (guide terrain, page propre). Rendu par SpokePage.
// Écrit le 7 octobre 2026. Faits ChatGPT : fiche de faits du 07/10/2026 (help.openai.com lu par extraits,
// FAQ sur le retrait des GPTs vérifiée à la main le 07/10), comparatifs du 03/10/2026 (src/data/comparisons.js).
// Non écrits faute de vérification : prix ChatGPT en euros (HT ou TTC), disponibilité de ChatGPT Space et Pages
// sur Business. Les mentions « Custom GPTs, Code Interpreter » de l'ancienne intro sont retirées (noms périmés).
export default {
  slug: 'formation-chatgpt-informatique',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation ChatGPT pour les équipes informatiques et la DSI',
  metaTitle: 'Formation ChatGPT informatique et DSI | Masteria',
  metaDesc: "Formation ChatGPT pour la DSI : Business ou Enterprise, console, plugins et connecteurs, Codex, migration des GPTs avant le 11 décembre 2026. Qualiopi.",
  keywords: "formation ChatGPT DSI, formation ChatGPT informatique, administration ChatGPT Business, ChatGPT Enterprise sécurité, Codex formation",
  resume: "Cette formation ChatGPT pour l'informatique dure deux jours (14 heures) et s'adresse à la DSI qui administre l'outil comme aux équipes techniques qui s'en servent : sécurité, support, exploitation, développement. Une même direction informatique peut y inscrire douze personnes au plus, ou un responsable seul, sur site ou par visioconférence. Chacune des deux journées est facturée 1 980 € HT, et Masteria, titulaire de la certification Qualiopi, constitue avec vous la demande que l'OPCO de votre branche instruit selon ses règles.",
  enBref: [
    { label: 'Formation', value: "ChatGPT côté DSI : choix entre Business et Enterprise, console d'administration, plugins et connecteurs, Codex, migration des GPTs, budget de crédits" },
    { label: 'Durée', value: "Quatorze heures sur deux jours, le second pouvant suivre l'ouverture de votre espace d'entreprise" },
    { label: 'Formats', value: "Direction informatique en intra (douze participants au plus) ou parcours individuel pour un DSI, un RSSI ou un administrateur ; dans vos locaux ou à distance" },
    { label: 'Tarif', value: "1 980 € HT chaque jour, ateliers préparés sur votre parc, vos procédures et vos dépôts de code" },
    { label: 'Financement', value: "Masteria est certifié Qualiopi ; la décision de prise en charge revient à l'OPCO, selon les conditions de sa branche" },
    { label: 'Prérequis', value: "Connaître l'administration d'un service en ligne d'entreprise ; un espace Business ou Enterprise déjà ouvert, ou un projet d'ouverture à cadrer" },
  ],
  intro: "Dans la plupart des entreprises, ChatGPT est arrivé avant la DSI : des salariés l'utilisent sur leur compte personnel, avec des dossiers de travail, depuis des mois. La direction informatique hérite donc d'un outil à encadrer autant que d'un outil à exploiter. Au 7 octobre 2026, cet encadrement passe par des décisions précises : offre Business ou Enterprise, authentification, plugins autorisés dans la console, connecteurs vers SharePoint ou Google Drive, budget de crédits des agents. Il faut aussi migrer les GPTs avant leur retrait du 11 décembre 2026. Ce guide passe ces décisions en revue, puis montre ce que Codex et ChatGPT apportent aux équipes techniques elles-mêmes.",
  prerequis: "Pratiquer l'administration d'un service en ligne d'entreprise (comptes, droits, journaux) ; un espace ChatGPT Business ou Enterprise, ou son ouverture prévue",
  guide: {
    kicker: 'Guide terrain',
    h2: "La DSI choisit l'offre, règle la console et garde la main sur ce que ChatGPT peut atteindre",
    lead: "ChatGPT lit aujourd'hui des fichiers partagés par connecteur, exécute du code, lance des agents planifiés et se branche sur Slack, Gmail ou SharePoint par des plugins. Chaque fonction ouvre une voie par laquelle des données de l'entreprise entrent ou sortent. La direction informatique décide quelles voies s'ouvrent, pour qui, et avec quelle trace. Ce travail commence par l'offre, car Business et Enterprise ne donnent pas les mêmes leviers à l'administrateur.",
    sections: [
      {
        h3: "Business et Enterprise ne donnent pas les mêmes leviers à l'administrateur",
        paras: [
          "ChatGPT Business (l'ex-offre Team, renommée en août 2025) demande au moins deux sièges et se décline en sièges Standard ou Premium, ces derniers donnant cinq fois l'usage des premiers. Il inclut l'authentification unique par SAML. Enterprise ajoute ce qu'une DSI d'ETI ou de grand groupe demande en général : SCIM, le protocole qui crée et supprime les comptes depuis l'annuaire, la maîtrise par le client de ses clés de chiffrement (EKM), des journaux d'audit et des droits par rôle.",
          "Les deux offres excluent par défaut les contenus de l'entreprise de l'entraînement des modèles. OpenAI affiche pour elles les certifications SOC 2 Type II, ISO 27001, 27017, 27018 et 27701. Elles diffèrent sur la localisation. Business propose un stockage au repos en Europe, déployé par étapes ; OpenAI conserve toutefois un temps, outre-Atlantique, un double destiné à repérer les abus. Une entreprise éligible à Enterprise ou à Edu peut localiser en Europe ses données stockées comme l'inférence (le calcul des réponses par le modèle).",
        ],
      },
      {
        h3: "La console décide des plugins et des connecteurs que les salariés installent",
        paras: [
          "Depuis le 9 juillet 2026, les plugins ont remplacé le répertoire d'applications de ChatGPT. Un plugin regroupe des compétences et des accès à des outils tels que Google Drive, SharePoint, Box, Dropbox, Slack ou Gmail. Depuis le 1er octobre 2026, c'est dans la console d'administration de Business que se choisissent les plugins et les « marketplaces » (catalogues de plugins) proposés aux salariés. C'est le point de contrôle principal de la DSI : un plugin non autorisé ne s'installe pas.",
          "Un connecteur hérite des droits de l'utilisateur qui le branche. Si un commercial voit tout SharePoint parce que les droits n'ont jamais été nettoyés, ChatGPT le voit aussi à travers lui. Avant d'ouvrir les connecteurs de fichiers, revoyez donc les partages trop larges des sites les plus sensibles. Gardez en tête qu'un agent qui lit un mail ou une page web lit aussi les instructions qu'un tiers a pu y glisser : un agent ne reçoit que les droits dont sa tâche a besoin.",
        ],
      },
      {
        h3: "Codex prend en charge le code, l'équipe relit avant de fusionner",
        paras: [
          "Codex est l'agent d'OpenAI qui écrit et exécute du code. Il prend en charge une tâche de développement, soit en local sur la machine d'un développeur, soit à distance dans Codex Cloud, disponible depuis la fin septembre 2026, et reçoit par étapes GPT-6.1 Sol, annoncé au DevDay du 29 septembre. Même la formule gratuite y donne accès, avec un quota. Sur une offre payante, Codex et ChatGPT Work se partagent une même réserve d'usage, après quoi viennent les crédits.",
          "Pour une équipe d'exploitation, Codex et ChatGPT servent d'abord à des tâches bornées : un script PowerShell de désactivation des comptes d'un salarié qui part, un script Bash qui purge des journaux, la documentation d'une procédure de sauvegarde, l'explication d'un message d'erreur collé dans la conversation. La règle ne change pas d'un outil à l'autre : le code proposé passe par une revue humaine et des tests avant toute exécution en production, et aucun secret (mot de passe, clé d'API, jeton) ne figure dans une demande.",
        ],
      },
      {
        h3: "Les GPTs de l'entreprise migrent vers des plugins avant le 11 décembre 2026",
        paras: [
          "Le 11 décembre 2026, les GPTs personnalisés disparaissent de toutes les offres de ChatGPT. Un espace Enterprise auquel OpenAI a accordé un report les garde jusqu'au 11 février 2027, et la FAQ d'OpenAI annonce pour ces espaces qu'aucun nouveau GPT ne pourra plus y être créé à compter du 26 octobre 2026, date prévue. La migration fait de chaque GPT un plugin : ses consignes passent dans une compétence, les documents chargés dans le GPT deviennent des fichiers de référence, et les applications qui lui étaient reliées l'accompagnent.",
          "Trois éléments demandent une attention particulière de la DSI. Les actions personnalisées, ces appels à vos propres API configurés dans un GPT, ne passent pas la migration : il faut les reconstruire. Le plugin issu de la migration n'est d'abord visible que de son créateur, ce qui prive l'équipe qui s'en servait tant que personne ne le partage à nouveau. Les conversations passées restent consultables après le retrait. Un inventaire fait en octobre laisse le temps de traiter ces trois points sans interruption de service.",
        ],
      },
    ],
    table: {
      caption: "Huit décisions de la DSI sur ChatGPT, où elles se prennent et pour quelle offre",
      headers: ['Décision', 'Où elle se règle', 'Offre concernée'],
      rows: [
        ["Connexion des salariés par l'annuaire de l'entreprise", "Authentification unique SAML, dans la console", "Business et Enterprise"],
        ["Création et suppression automatiques des comptes", "SCIM relié à l'annuaire", "Enterprise"],
        ["Clés de chiffrement détenues par l'entreprise", "Gestion des clés par le client (EKM)", "Enterprise"],
        ["Traçabilité des actions et rôles différenciés", "Journaux d'audit et droits par rôle", "Enterprise"],
        ["Plugins et catalogues autorisés", "Console d'administration, depuis le 1er octobre 2026", "Business et Enterprise"],
        ["Hébergement des données en Europe", "Option de résidence des données", "Business pour le stockage ; Enterprise et Edu pour le stockage et l'inférence, clients éligibles"],
        ["Volume d'usage par personne", "Sièges Standard ou Premium", "Business"],
        ["Budget de ChatGPT Work, de Codex et des agents", "Enveloppe comprise dans les sièges, puis crédits", "Offres payantes"],
      ],
    },
    cas: {
      h3: "Cas pratique : planifier la migration de trente-quatre GPTs avant le 11 décembre",
      contexte: "Prenons la DSI d'un groupe de distribution de 900 salariés, passé sur ChatGPT Business au printemps. Un recensement mené auprès des directions a fait remonter trente-quatre GPTs : assistants de rédaction, outils de calcul de devis, aides à la saisie dans l'ERP. Certains appellent des API internes, d'autres servent chaque jour à une équipe entière, d'autres encore n'ont plus été ouverts depuis des mois. La DSI veut un plan de migration validé d'ici la fin octobre.",
      etapes: [
        "Rassemblez l'inventaire dans un tableur : nom du GPT, propriétaire, équipe utilisatrice, fréquence d'usage déclarée, présence d'actions personnalisées, fichiers de connaissance, type de données traitées.",
        "Créez un projet « Migration GPTs » réservé à la DSI et déposez-y l'inventaire et la note d'OpenAI sur la migration, telle que vous l'avez lue.",
        "Soumettez le prompt suivant, en mode réflexion, puis relisez le classement GPT par GPT avec le propriétaire de chacun.",
        "Pour chaque GPT doté d'actions personnalisées, ouvrez un ticket de reconstruction auprès de l'équipe de développement, avec l'API concernée et ses droits.",
        "Envoyez aux propriétaires le message préparé, avec la date de migration de leur GPT et la personne chargée de partager le plugin migré.",
      ],
      prompt: "Tu m'aides à planifier la migration des GPTs personnalisés de notre espace ChatGPT Business, qui cesseront de fonctionner le 11 décembre 2026. Le projet contient notre inventaire (un GPT par ligne) et la note de migration d'OpenAI. Retiens-en ceci : les consignes passent dans une compétence au sein d'un plugin, les documents chargés deviennent des fichiers de référence, les applications reliées sont reprises, mais les actions personnalisées ne passent pas, et le plugin issu de la migration n'est visible au départ que de son créateur.\n\n1. Range chaque GPT dans une des quatre catégories suivantes, en une phrase de justification tirée de l'inventaire : migrer tel quel, migrer puis reconstruire ses actions, fusionner avec un autre GPT, retirer sans remplacement.\n\n2. Pour les GPTs à reconstruire, liste les API appelées et ce qu'il faut demander aux développeurs : authentification, droits, données transmises.\n\n3. Propose un calendrier en trois vagues d'ici le 30 novembre, en commençant par les GPTs les plus utilisés et sans action personnalisée.\n\n4. Rédige un message court pour chaque propriétaire : ce qui change pour son équipe, la date de sa vague, ce qu'il doit vérifier après la migration.\n\nN'invente aucune fréquence d'usage ni aucune API absente de l'inventaire. Si une information manque pour classer un GPT, classe-le « à instruire » et dis ce qu'il faut demander.",
      resultat: "Vous obtenez un classement justifié des trente-quatre GPTs, la liste des API à reprendre avec leurs questions, un calendrier en trois vagues et un message par propriétaire. Relisez le classement avec chaque propriétaire avant de l'arrêter : l'inventaire déclaratif sous-estime souvent l'usage effectif des petits GPTs d'équipe. Le plan validé devient une procédure, que la DSI peut rejouer pour toute compétence ou tout plugin à venir.",
    },
    pieges: [
      {
        titre: "Des salariés restés sur leur compte personnel après l'ouverture de Business",
        texte: "Ouvrir un espace d'entreprise ne ferme pas les comptes gratuits ou Plus, et ceux-ci alimentent l'entraînement des modèles tant que leur titulaire n'a rien décoché. Annoncez l'espace officiel, écrivez la règle dans la charte et expliquez pourquoi le compte personnel ne convient pas aux dossiers de l'entreprise.",
      },
      {
        titre: "Une action personnalisée qui disparaît avec son GPT",
        texte: "La migration ne reprend pas les appels aux API configurés dans un GPT. Une équipe qui calculait ses devis par ce biais découvre la panne le jour du retrait. L'inventaire doit repérer ces actions dès octobre.",
      },
      {
        titre: "Un connecteur branché sur des partages trop larges",
        texte: "ChatGPT voit tout ce que son utilisateur a le droit d'ouvrir. Si un dossier de paie traîne dans un site SharePoint ouvert à tous, une question anodine peut le faire remonter. Le nettoyage des droits précède l'ouverture des connecteurs.",
      },
      {
        titre: "Une clé d'API collée dans une demande de dépannage",
        texte: "Pour faire corriger un script, un administrateur colle le fichier de configuration complet, secrets compris. Remplacez chaque secret par une valeur fictive avant toute demande, et changez sans délai une clé exposée par erreur.",
      },
      {
        titre: "Le budget de crédits découvert en fin de mois",
        texte: "Une fois l'enveloppe des sièges épuisée, chaque tâche de ChatGPT Work, chaque passage de Codex et chaque exécution d'agent se paie en crédits. Un agent planifié toutes les heures peut coûter plus que prévu. Fixez un budget et relevez la consommation chaque semaine pendant le premier mois.",
      },
    ],
  },
  audience: [
    {
      title: "DSI, RSSI et responsables de la conformité",
      desc: "Vous choisissez l'offre, validez les contrats et répondez du traitement des données. Vous apprenez à comparer Business et Enterprise sur vos critères de sécurité, à régler la console et à écrire la politique d'usage de l'entreprise.",
    },
    {
      title: "Administrateurs de l'espace ChatGPT et support aux utilisateurs",
      desc: "Vous créez les comptes, autorisez les plugins et répondez aux questions des salariés. Vous apprenez à gérer les connecteurs, à migrer les GPTs, à suivre les crédits et à former les référents des autres directions.",
    },
    {
      title: "Développeurs, administrateurs système et exploitation",
      desc: "Scripts, documentation, analyse d'erreurs et revues de code remplissent vos semaines. Vous apprenez à confier des tâches bornées à Codex et à ChatGPT, à vérifier ce qu'ils produisent et à tenir les secrets hors de leurs demandes.",
    },
  ],
  useCases: [
    { icon: '🔐', title: "Choix de l'offre sur critères de sécurité", desc: "Business ou Enterprise comparés sur l'authentification, la gestion des comptes, le chiffrement, les journaux et la localisation des données." },
    { icon: '⚙', title: "Console d'administration réglée", desc: "Plugins, catalogues et connecteurs autorisés profil par profil, avec la liste écrite de ce qui reste fermé." },
    { icon: '💻', title: "Scripts et corrections avec Codex", desc: "Tâches de développement et d'exploitation confiées à Codex, puis relues et testées avant toute mise en production." },
    { icon: '🔄', title: "Migration des GPTs", desc: "Inventaire, classement et calendrier de migration vers les plugins, actions personnalisées reconstruites avant le 11 décembre 2026." },
    { icon: '📄', title: "Documentation d'exploitation", desc: "Procédures, fiches de reprise et notes de changement rédigées à partir de vos sources, relues par la personne qui les applique." },
    { icon: '📊', title: "Budget de crédits suivi", desc: "Consommation de ChatGPT Work, de Codex et des agents relevée chaque semaine, avec un plafond fixé avant l'ouverture." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Cartographier les usages de ChatGPT déjà présents",
      duration: '1h30',
      description: "Partir de la situation de l'entreprise avant de choisir une offre ou de régler une console.",
      items: [
        "Comptes personnels, offres payées par les services, usages non déclarés : un état des lieux sans procès",
        "Ce que chaque offre fait des données, de Free à Enterprise",
        "Les directions les plus exposées : RH, finance, juridique, commercial",
        "Un questionnaire court à envoyer aux directions",
      ],
      exercise: "Vous rédigez le questionnaire de recensement des usages de ChatGPT dans votre entreprise et la liste des informations qu'il doit faire remonter.",
    },
    {
      day: 1,
      title: "Module 2 · Comparer Business et Enterprise sur les critères de la sécurité",
      duration: '2h',
      description: "Choisir l'offre d'après les exigences de la DSI, du RSSI et du DPO.",
      items: [
        "Authentification unique, SCIM, gestion des clés, journaux d'audit, droits par rôle",
        "Certifications affichées et localisation des données : stockage, inférence, copie temporaire",
        "Sièges Standard et Premium, enveloppe d'usage, crédits",
        "Contrat de sous-traitance exigé par l'article 28 du RGPD, et registre des traitements",
      ],
      exercise: "Vous remplissez la grille de choix de l'offre avec les exigences de votre entreprise et vous présentez votre recommandation au groupe.",
    },
    {
      day: 1,
      title: "Module 3 · Régler la console : plugins, connecteurs, compétences",
      duration: '2h',
      description: "Décider de ce que les salariés peuvent installer et brancher.",
      items: [
        "Plugins et catalogues autorisés depuis le 1er octobre 2026",
        "Connecteurs de fichiers : revue des partages trop larges avant ouverture",
        "Compétences partagées à l'échelle de l'espace : qui les publie, qui les valide",
        "Agents qui lisent des contenus extérieurs : limiter leurs droits à leur tâche",
      ],
      exercise: "Vous établissez la liste des plugins et des connecteurs ouverts dans votre espace, profil par profil, avec la raison de chaque refus.",
    },
    {
      day: 1,
      title: "Module 4 · Formuler une demande technique au résultat vérifiable",
      duration: '1h30',
      description: "Obtenir de ChatGPT une procédure, une explication ou un script que l'on peut contrôler.",
      items: [
        "Contexte à fournir : système, versions, contraintes, format de sortie attendu",
        "Faire expliquer un message d'erreur avant de demander une correction",
        "Rédiger une procédure d'exploitation depuis des notes et un historique de tickets",
        "Remplacer chaque secret par une valeur fictive avant d'envoyer",
      ],
      exercise: "Vous faites rédiger, d'après vos notes, la procédure d'une opération courante de votre équipe, puis vous la faites relire par la personne qui l'exécute.",
    },
    {
      day: 2,
      title: "Module 5 · Confier des scripts et des corrections à Codex",
      duration: '2h',
      description: "Confier à Codex des tâches bornées, sous revue humaine.",
      items: [
        "Codex sur le poste ou dans le cloud : ce que chacun peut lire et modifier",
        "Découper une tâche pour qu'elle se relise en une revue",
        "Tests, revue de code et validation avant fusion",
        "Consommation : enveloppe partagée avec ChatGPT Work, puis crédits",
      ],
      exercise: "Vous confiez à Codex un script d'administration dont votre équipe a besoin, vous le relisez, le testez sur un environnement de recette et notez les corrections apportées.",
    },
    {
      day: 2,
      title: "Module 6 · Migrer les GPTs de l'entreprise vers les plugins",
      duration: '1h30',
      description: "Préparer le retrait du 11 décembre 2026 sans interrompre les équipes.",
      items: [
        "Calendrier : 11 décembre 2026 pour tous, 11 février 2027 pour un espace Enterprise bénéficiant d'un report",
        "Correspondances : instructions, fichiers, applications connectées",
        "Actions personnalisées à reconstruire, plugin migré à repartager",
        "Plan en vagues et message aux propriétaires",
      ],
      exercise: "Vous classez les GPTs de votre inventaire et bâtissez le calendrier de migration en trois vagues.",
    },
    {
      day: 2,
      title: "Module 7 · Encadrer les agents d'espace de travail et leur budget",
      duration: '2h',
      description: "Autoriser des agents utiles en gardant la main sur leurs droits et leur coût.",
      items: [
        "Agents d'espace de travail : création en langage courant, partage, planification, lancement depuis Slack ou par API",
        "Crédits : 5 à 25 par exécution typique selon OpenAI, plafond à fixer",
        "ChatGPT Work et ses déclencheurs (Gmail, Slack, GitHub)",
        "Tests sur des cas pièges et revue mensuelle des agents actifs",
      ],
      exercise: "Vous décrivez un agent demandé par une direction, vous listez ses droits minimaux, ses cas de test et son coût mensuel estimé.",
    },
    {
      day: 2,
      title: "Module 8 · Écrire la politique d'usage de la DSI et ses suites immédiates",
      duration: '1h30',
      description: "Fixer par écrit les règles techniques et organisationnelles, puis les premières actions.",
      items: [
        "Article 4 de l'AI Act : aider chaque utilisateur à maîtriser l'outil, et garder la trace des formations",
        "Données admises et exclues, secrets, comptes personnels",
        "Circuit de validation des plugins, des compétences et des agents",
        "Trente jours : ouverture, communication, référents, premier relevé de crédits",
      ],
      exercise: "Vous écrivez la politique d'usage de ChatGPT que la DSI portera, puis le plan des trente jours suivants.",
    },
  ],
  objectives: [
    "Le participant sait établir l'état des usages de ChatGPT dans l'entreprise à l'aide d'un questionnaire aux directions.",
    "Le participant sait comparer Business et Enterprise sur l'authentification, la gestion des comptes, le chiffrement, les journaux et la localisation des données.",
    "Le participant sait arrêter la liste des plugins et connecteurs autorisés dans la console, en justifiant chaque refus.",
    "Le participant sait confier à Codex une tâche de développement bornée, puis la relire et la tester avant mise en production.",
    "Le participant sait classer un inventaire de GPTs et ordonner leur passage en plugins d'ici la date de retrait.",
    "Le participant sait spécifier un agent d'espace de travail : droits minimaux, jeu de tests, budget de crédits.",
  ],
  faq: [
    {
      q: "ChatGPT Business ou Enterprise : lequel choisir pour une ETI ?",
      a: "Business suffit souvent à une PME ou à une ETI qui veut une authentification unique, des projets partagés, des compétences et des données exclues de l'entraînement. Enterprise devient nécessaire quand la DSI exige la gestion automatique des comptes par SCIM, la maîtrise des clés de chiffrement, des journaux d'audit, des droits par rôle ou un calcul des réponses en Europe. Le module 2 remplit avec vous une grille de choix à partir de vos propres exigences de sécurité et de conformité, et ce choix se fait avant de signer.",
    },
    {
      q: "Où nos données sont-elles stockées et traitées ?",
      a: "Sur Business, les données peuvent être stockées en Europe (une option ouverte par étapes), mais le calcul des réponses se fait ailleurs, et un double des données transite un temps par les États-Unis, où OpenAI traque les abus. Enterprise et Edu vont jusqu'à localiser en Europe l'inférence elle-même, si l'entreprise remplit les conditions d'éligibilité. Les deux offres tiennent par défaut vos contenus à l'écart de l'entraînement. Votre DPO complète l'analyse avec le contrat de sous-traitance et le registre des traitements.",
    },
    {
      q: "Comment empêcher l'usage de comptes personnels pour des dossiers de l'entreprise ?",
      a: "Aucun réglage d'OpenAI ne le fait à votre place. La démarche qui fonctionne combine trois actions : ouvrir un espace d'entreprise qui couvre les besoins des équipes, écrire la règle dans la charte avec ses raisons, et former les salariés à reconnaître les données qui ne sortent pas. Un filtrage réseau reste possible ; c'est une décision de votre RSSI, à prendre en sachant qu'un blocage pousse souvent au contournement. La formation commence par le recensement des usages, sans chercher de coupables.",
    },
    {
      q: "Que deviennent nos GPTs et leurs actions personnalisées ?",
      a: "Leur arrêt intervient le 11 décembre 2026 pour toutes les offres ; un espace Enterprise ayant obtenu un délai peut les garder deux mois de plus, jusqu'au 11 février 2027. La conversion en plugin transforme leurs consignes en compétence et range leurs documents parmi les fichiers de référence. Les appels à vos API, configurés comme actions personnalisées, ne survivent pas à la migration : il faut les reconstruire. Le plugin obtenu reste privé tant qu'on ne le partage pas, et l'historique des conversations demeure lisible après la date de retrait.",
    },
    {
      q: "Codex peut-il travailler sur nos dépôts de code ?",
      a: "Oui, en local sur la machine d'un développeur ou à distance dans Codex Cloud, dans la limite des accès que vous lui accordez. La formation traite Codex comme un collègue qui propose des modifications : chaque changement passe par une revue et des tests avant fusion, et les dépôts sensibles restent hors de son périmètre tant que la politique de la DSI ne les a pas ouverts. Pour un travail de développement plus poussé avec un autre agent, voyez aussi notre formation Claude Code.",
    },
    {
      q: "Quel budget prévoir au-delà des sièges ?",
      a: "Les sièges incluent une enveloppe d'usage. Au-delà, tout ce qui travaille seul (ChatGPT Work, Codex, agents) puise dans un stock de crédits, et OpenAI chiffre le passage ordinaire d'un agent à une fourchette de 5 à 25 crédits. Le budget dépend donc du nombre d'agents planifiés et de la fréquence de leurs exécutions. La formation vous fait estimer la consommation d'un agent avant son ouverture et installer un relevé hebdomadaire pendant le premier mois, pour éviter la surprise de la facture.",
    },
    {
      q: "Faut-il savoir programmer pour suivre la formation ?",
      a: "Non pour les modules consacrés à l'administration, à la console, aux GPTs et à la politique d'usage, qui concernent aussi un RSSI ou un administrateur fonctionnel. Le module 5 sur Codex suppose de lire un script et de savoir le tester ; les participants qui ne codent pas y travaillent sur la documentation et la revue, en binôme avec un développeur. Le cadrage répartit les ateliers selon la composition de votre équipe.",
    },
    {
      q: "Une équipe informatique peut-elle faire financer cette formation ?",
      a: "Votre entreprise peut solliciter son OPCO, puisque Masteria détient Qualiopi dans la catégorie des actions de formation ; l'organisme tranche selon sa branche et tient compte des fonds qui lui restent. Le dossier comprend notre programme, où chaque objectif a sa question d'évaluation, ainsi que la convention de formation, à transmettre avant que la session commence. Pour des équipes installées à Genève ou à Bruxelles, territoires sans OPCO, la session fait l'objet d'un devis en euros hors taxes.",
    },
  ],
  tarifs: {
    titre: "Ce que coûte la formation ChatGPT d'une direction informatique",
    paras: [
      "Le tarif inclut un temps de préparation avec la DSI : avant la session, le formateur prend connaissance de votre offre ChatGPT, des réglages actuels de la console, de l'inventaire des GPTs s'il existe et de deux ou trois procédures d'exploitation. Les ateliers travaillent ensuite sur ces éléments, et la grille de choix de l'offre, la liste des plugins autorisés et le plan de migration restent à l'équipe.",
      "Prenons une direction informatique qui inscrit son RSSI, deux administrateurs, quatre développeurs et trois techniciens du support, soit dix personnes. Ce groupe de dix paie 3 960 € HT pour l'intra de deux jours, soit 396 € HT chacun. Un DSI formé seul paie 1 980 € HT la journée, avec un programme centré sur ses propres arbitrages. Votre OPCO étudie ensuite le dossier en appliquant les règles de sa branche.",
    ],
  },
  apres: {
    titre: "Après la formation, des plugins et des agents raccordés à votre système d'information",
    texte: "Une fois la console réglée et les GPTs migrés, les directions métier demandent souvent davantage : un plugin qui interroge l'ERP, un agent qui prépare les tickets de demande d'accès, un assistant documentaire branché sur vos procédures. Masteria conçoit ces outils avec la DSI, dans ChatGPT ou par l'API d'OpenAI, avec des droits minimaux, des tests et une documentation remise à vos équipes. Ce chantier se règle au forfait, arrêté au terme du cadrage. Il touche au conseil et au développement : à ce titre, il n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous l'état de votre espace ChatGPT : nous bâtissons les ateliers sur votre console, vos GPTs et vos procédures.",
    fin: {
      titre: "Préparons la formation de votre direction informatique",
      texte: "Indiquez-nous votre offre ChatGPT ou celle que vous envisagez, le nombre de GPTs recensés et la composition de l'équipe (sécurité, administration, support, développement). Nous revenons avec un programme et des dates.",
    },
  },
  liensAssocies: [
    { label: "Formation IA pour les équipes informatiques, tous outils comparés", href: '/formation-ia-informatique' },
    { label: "Former les décideurs à gouverner l'IA", href: '/formation-gouvernance-ia' },
    { label: "Rédiger la charte IA de l'entreprise", href: '/charte-ia-entreprise' },
    { label: "Intégrer un modèle de langage à vos outils internes", href: '/integration-llm-rag' },
    { label: "Formation Claude Code pour les développeurs", href: '/formation-claude-code' },
  ],
  sources: [
    { name: "OpenAI, notes de version des espaces Business (plugins gérés dans la console)", url: 'https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes' },
    { name: "OpenAI, gestion des sièges et de la facturation d'un espace Business", url: 'https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business' },
    { name: "OpenAI, grille des crédits consommés par Work, Codex et les agents", url: 'https://help.openai.com/en/articles/11481834' },
    { name: "OpenAI, fiche consacrée à ChatGPT Work et à Codex", url: 'https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex' },
    { name: "OpenAI, où résident les données et l'inférence de ChatGPT", url: 'https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt' },
    { name: "OpenAI, FAQ de migration des GPTs personnalisés (vérifiée à la main le 7 octobre 2026)", url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
    { name: "OpenAI, sécurité et confidentialité des offres pour les entreprises", url: 'https://openai.com/enterprise-privacy/' },
    { name: "RGPD, règlement (UE) 2016/679, article 28 sur les sous-traitants", url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
  ],
}
