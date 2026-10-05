// Contenu propre à /integration-llm-rag. Lu par SolutionIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : spécification MCP (révision 2026-07-28, changelog, sécurité), annonces Anthropic (MCP, Agentic AI Foundation), docs Anthropic (retraits de modèles, cache, résidence), OpenAI (contrôle des données), guide ANSSI IA générative, étude de cas distribution.
export default {
  slug: 'integration-llm-rag',
  dateModified: '2026-10-03',
  intro: "Votre DSI veut qu'un modèle de langage travaille dans les applications que vos équipes ouvrent déjà : le CRM et l'ERP (vos logiciels de relation client et de gestion), l'intranet ou votre propre produit. Le livrable est une brique technique exploitée par vos équipes : appels d'API (l'interface par laquelle un logiciel appelle le modèle), serveur MCP (le protocole qui ouvre vos systèmes aux assistants IA), service de recherche sur vos données. Masteria cadre les droits, la région d'exécution et le cycle de vie du modèle avec votre responsable de la sécurité, puis livre le code et les tests.",

  etapes: [
    {
      title: "Cartographier les points d'intégration et les flux",
      desc: "Nous listons avec votre DSI les applications concernées, les données lues et écrites, les droits de chaque profil et les flux réseau. Votre responsable de la sécurité valide cette cartographie avant la première ligne de code.",
    },
    {
      title: "Choisir le fournisseur, la région et la couche d'abstraction",
      desc: "Le modèle se choisit sur un jeu de tests métier, puis la région d'exécution selon vos contraintes contractuelles. Une couche d'abstraction isole l'identifiant du modèle, pour qu'une migration se fasse sans réécriture.",
    },
    {
      title: "Prototyper un point d'intégration, journaux compris",
      desc: "Le premier cas tourne sur vos données de recette, avec une journalisation complète dès le premier jour. La qualité des réponses, la latence (le temps de réponse) et le coût par appel servent la décision suivante.",
    },
    {
      title: "Industrialiser : identité, quotas, erreurs, mode dégradé",
      desc: "Nous branchons votre fournisseur d'identité, posons des quotas par application, traitons les erreurs et écrivons la procédure de contournement. Les tests de non-régression entrent dans votre intégration continue, la chaîne qui teste et déploie le code.",
    },
    {
      title: "Transmettre la procédure de migration",
      desc: "Vos équipes reçoivent le code, la documentation d'architecture et une procédure écrite pour changer de modèle : rejouer les tests, comparer, basculer. Un propriétaire interne suit les annonces de retrait des fournisseurs.",
    },
  ],

  cout: {
    lead: "Une intégration démarre autour de 10 000 € pour un premier point de branchement. Étendue à plusieurs systèmes, elle dépasse 100 000 € et peut atteindre plusieurs centaines de milliers d'euros, selon le nombre d'applications et le niveau de sécurité exigé.",
    paras: [
      "Le forfait se fixe sur devis après le cadrage, et la proposition écrite décrit le périmètre, les livrables et le calendrier. Le coût d'usage s'y ajoute : nombre d'appels, taille des contextes, part des requêtes servies par le cache. La région d'exécution le modifie aussi, puisque l'inférence limitée aux États-Unis coûte 1,1 fois le tarif standard chez Anthropic. Nous fournissons une estimation mensuelle à partir de vos volumes, puis le tableau de bord qui la vérifie en production.",
    ],
    facteurs: [
      {
        title: "Les systèmes à brancher",
        desc: "Chaque application ajoute son authentification, ses droits et ses cas d'erreur. Une API documentée se branche plus vite qu'une base de données dépourvue d'interface.",
      },
      {
        title: "Le sens des flux",
        desc: "Lire une donnée demande moins de travail qu'en écrire une. Toute écriture dans un ERP ou un CRM ajoute une validation humaine, un journal et des tests de reprise sur erreur.",
      },
      {
        title: "Les exigences de sécurité",
        desc: "Revue par votre responsable de la sécurité, région d'exécution imposée, journalisation détaillée et tests d'intrusion pèsent sur la conception et sur le calendrier.",
      },
      {
        title: "Le cycle de vie du modèle",
        desc: "Le jeu de tests de non-régression et la procédure de migration se construisent une fois, puis servent à chaque retrait annoncé par le fournisseur.",
      },
    ],
  },

  regie: [
    "Dans une DSI, le code d'une intégration passe par vos dépôts, vos revues de code, votre intégration continue et votre gestion des secrets. Un développeur IA détaché en régie travaille dans ces outils et selon vos règles, depuis vos locaux ou à distance. Il apprend vos conventions, et vos développeurs apprennent les siennes : choix des modèles, jeux de tests, lecture des journaux.",
    "Ce mode convient aussi aux éditeurs de logiciels qui ajoutent des fonctions d'IA à leur produit. Le développeur rejoint l'équipe produit le temps des premières versions, puis la passation transfère la maintenance à cette équipe. Le code reste dans votre périmètre du premier au dernier jour.",
  ],

  comparatif: {
    intro: "ChatGPT, Claude ou Copilot sous licence entreprise restent des applications d'IA séparées : elles se déploient en quelques jours et suffisent pour rédiger, résumer ou explorer un sujet. L'intégration se justifie quand la tâche se répète dans une application métier, sur des données que l'application séparée ne voit pas, ou quand votre DSI doit choisir le modèle et la région d'exécution.",
    rows: [
      { aspect: "Mise en route", off: "Quelques jours : licences, authentification unique, règles d'usage", custom: "Quelques semaines pour un premier point d'intégration, davantage selon les systèmes" },
      { aspect: "Accès aux données métier", off: "Connecteurs standard (messagerie, fichiers) ou copier-coller", custom: "Lecture directe dans l'ERP, le CRM ou la GED, avec les droits de l'utilisateur" },
      { aspect: "Place dans le travail", off: "Un onglet de plus, ouvert à côté des outils métier", custom: "Une fonction dans l'écran que l'équipe utilise déjà" },
      { aspect: "Choix du modèle et de la région", off: "Ceux de l'éditeur, selon l'offre souscrite", custom: "Les vôtres, fixés par la DSI et consignés au dossier d'architecture" },
      { aspect: "Mises à jour du modèle", off: "Assurées par l'éditeur, aucun travail de votre côté", custom: "À votre charge : tests de non-régression et procédure de migration" },
      { aspect: "Le bon choix quand", off: "L'usage est ponctuel, varié, centré sur l'écrit", custom: "La tâche se répète dans un logiciel métier, sur ses données" },
    ],
  },

  guide: {
    kicker: "Repères pour la DSI",
    h2: "Un modèle de langage s'intègre comme un composant qui a une date de fin de vie",
    lead: "Une API de modèle ressemble à n'importe quelle API, jusqu'au jour où le modèle appelé disparaît. Le 30 septembre 2026, Anthropic a prévenu ses développeurs que Claude Sonnet 4.5 quitterait son API le 30 novembre 2026, avec un remplaçant recommandé. Le préavis minimal annoncé pour un modèle public est de 60 jours. Une intégration sérieuse prévoit donc dès le départ la migration, les tests qui la valident et la personne qui la conduit. Ce guide traite ces sujets avec ceux que votre responsable de la sécurité posera : les droits, la région d'exécution, la journalisation et la facture.",
    sections: [
      {
        h3: "Trois architectures branchent un modèle sur votre système d'information",
        paras: [
          "La première appelle l'API du modèle depuis l'application elle-même : un bouton « résumer le compte » dans le CRM envoie la fiche et reçoit un texte. La deuxième passe par un serveur MCP, qui ouvre une partie de votre ERP ou de votre GED aux assistants IA de l'entreprise : ils consultent un stock ou une commande selon les droits définis dans le serveur. La troisième crée un service interne partagé, avec recherche sur vos données, quotas et journaux, que plusieurs applications consomment.",
          "Le choix dépend du nombre de consommateurs. Un seul écran justifie rarement plus qu'un appel direct, et plusieurs assistants qui lisent les mêmes systèmes justifient un serveur MCP. Les pages voisines couvrent des produits finis : l'assistant documentaire répond dans un corpus, le copilote interne travaille dans les outils d'une équipe, l'automatisation documentaire transforme des pièces entrantes en données. L'intégration fournit la plomberie qu'ils consomment, et votre DSI en garde la maîtrise.",
        ],
      },
      {
        h3: "MCP est devenu un standard ouvert que votre DSI peut adopter",
        paras: [
          "Anthropic a publié le protocole MCP (Model Context Protocol) en code ouvert le 25 novembre 2024, pour relier les assistants IA aux systèmes où vivent les données. Le 9 décembre 2025, l'éditeur l'a confié à l'Agentic AI Foundation, un fonds de la Linux Foundation cofondé par Anthropic, Block et OpenAI, avec le soutien de Google, Microsoft et AWS. Anthropic comptait alors plus de 10 000 serveurs MCP publics actifs. Pour une DSI, ce changement de gouvernance réduit la dépendance à un seul éditeur.",
          "La spécification décrit trois rôles. L'hôte désigne l'application d'IA. Le client assure la connexion depuis l'hôte. Le serveur fournit des outils (des fonctions que le modèle peut appeler), des ressources (des données) et des modèles de messages. Le texte prévient que les outils équivalent à une exécution de code arbitraire et exige le consentement explicite de l'utilisateur avant leur appel. Sa révision du 28 juillet 2026 rend le protocole sans état et déprécie trois fonctions (Roots, Sampling et Logging), avec un préavis d'au moins douze mois avant leur retrait.",
        ],
      },
      {
        h3: "Les droits de l'utilisateur voyagent dans un jeton d'accès émis pour un seul destinataire",
        paras: [
          "Quand un assistant interroge votre ERP pour le compte d'un commercial, tout se joue dans l'identité utilisée. Cette identité circule sous forme de jeton d'accès, l'autorisation numérique que l'application présente au système. La spécification MCP interdit le relais de jeton : tout jeton présenté à un serveur MCP doit avoir été émis pour ce serveur précis, faute de quoi il est refusé. Sans ce contrôle, un jeton dérobé ailleurs ouvre vos systèmes, et vos journaux attribuent les requêtes à une autre identité. La même spécification recommande des droits progressifs, en lecture d'abord.",
          "L'ANSSI pose les mêmes garde-fous dans son guide de 2024 sur les systèmes d'IA générative. Les flux entre le système d'IA et vos applications sont documentés, filtrés, chiffrés et authentifiés, avec un contrôle des autorisations en plus de l'authentification (recommandation R26). Aucune action critique sur le système d'information ne part sans contrôle humain (R9). Nous en tirons trois règles d'architecture : l'action s'exécute avec les droits de l'utilisateur qui l'a demandée, le système métier décide de l'autorisation, une personne valide les opérations à fort impact.",
        ],
      },
      {
        h3: "La région d'exécution se règle fournisseur par fournisseur, et contrat par contrat",
        paras: [
          "Les fournisseurs offrent des garanties géographiques différentes. Sur l'API d'OpenAI, les données envoyées ne servent pas à l'entraînement sauf accord explicite du client, et les journaux de surveillance des abus sont conservés jusqu'à 30 jours. Un projet peut stocker ses données en Europe, au sens de l'Espace économique européen et de la Suisse, avec un traitement régional pris en charge en Europe. Sur l'API d'Anthropic, le paramètre de géographie d'inférence n'accepte que deux valeurs : « global » ou « us ».",
          "L'inférence limitée aux États-Unis y coûte 1,1 fois le tarif standard sur les modèles récents. Pour faire tourner Claude dans une autre région, la voie passe par Amazon Bedrock ou Google Cloud, où la région dépend du point d'accès retenu. Ces choix relèvent du contrat autant que du code. Au cadrage, votre responsable de la sécurité et votre DPO (la personne chargée du respect du RGPD) les valident, puis nous les consignons dans le dossier d'architecture remis avec le code.",
        ],
      },
      {
        h3: "La facture se pilote dans le code, appel par appel",
        paras: [
          "Un modèle se facture au jeton (token), une unité de la taille d'un fragment de mot, en entrée comme en sortie. Les instructions et les documents de référence répétés à chaque appel pèsent lourd. La mise en cache du début de requête réduit ce poste : chez Anthropic, une lecture en cache coûte en règle générale 0,1 fois le prix normal d'un jeton d'entrée, et l'écriture initiale 1,25 fois pour un cache de cinq minutes. La révision 2026 de MCP recommande aux serveurs de lister leurs outils dans un ordre stable, pour améliorer ce taux de cache.",
          "Le reste tient à la discipline d'exploitation. Chaque application reçoit un quota et une limite de débit, chaque appel est journalisé avec son coût, et un tableau de bord rapproche la dépense du volume traité. L'ANSSI recommande de journaliser les requêtes, les traitements appliqués avant l'envoi au modèle, les appels d'outils et de données, puis les réponses (R29). Elle demande aussi un mode dégradé : une procédure qui laisse les métiers travailler quand le modèle ne répond plus (R15).",
        ],
      },
    ],
    table: {
      caption: "Six décisions que la DSI prend avant la mise en production",
      headers: ["Sujet", "Question à trancher", "Repère vérifié"],
      rows: [
        ["Fin de vie du modèle", "Qui teste le modèle suivant, et avec quel jeu de tests ?", "Anthropic annonce un retrait au moins 60 jours à l'avance"],
        ["Région d'exécution", "Où l'inférence tourne-t-elle, et où les données sont-elles stockées ?", "API Anthropic : « global » ou « us » ; OpenAI : stockage en Europe par projet"],
        ["Jetons d'accès", "Le serveur vérifie-t-il que chaque jeton lui est destiné ?", "La spécification MCP interdit le relais de jeton"],
        ["Actions dans le SI", "Quelles opérations exigent une validation humaine ?", "ANSSI, R9 : aucune action critique automatisée"],
        ["Journalisation", "Peut-on reconstituer un échange de bout en bout ?", "ANSSI, R29 : requête, prétraitement, appels, réponse"],
        ["Panne du fournisseur", "Comment les métiers travaillent-ils sans le modèle ?", "ANSSI, R15 : un mode dégradé prévu d'avance"],
      ],
    },
    cas: {
      h3: "Retour de mission : onze compétences Claude conçues pour le CRM, l'ERP et la base articles",
      contexte: "Chez un distributeur informatique B2B, filiale française d'un groupe européen, 58 salariés perdaient leur temps commercial utile en cotations, en relances de devis, en réponses aux cahiers des charges et en analyses de stock. La direction voulait augmenter leur capacité sans recruter, avec les logiciels déjà en place, de la base articles au CRM en passant par l'ERP. Le projet excluait tout nouveau logiciel.",
      etapes: [
        "La direction choisit avec nous les tâches qui rendent le plus de temps, puis le circuit de validation et les règles de déploiement.",
        "Dix volontaires deviennent référents après deux jours de formation, en juin 2026 ; chacun en ressort avec une compétence Claude livrée avec des données de démonstration, qu'il remplace par celles de l'entreprise avant la production.",
        "Avant toute diffusion, la direction relit chaque compétence et arrête trois points : les données qu'elle peut lire, les sources qu'elle cite, les décisions qui restent au commercial.",
        "La relance des devis passe en tête, validée sur de vrais devis avant la formation ; les référents ajustent les compétences au fil des retours.",
        "Le déploiement de ces mêmes compétences aux quelque cinquante autres collaborateurs est prévu d'octobre à décembre 2026 ; l'équipe de référents prendra ensuite le relais.",
      ],
      resultat: "Les onze compétences couvrent la cotation depuis le mail d'un client, les réponses aux cahiers des charges appuyées sur l'ERP, les relances, et la surveillance de la marge, du stock et des livraisons. Chacune passe en production une fois ses données de démonstration remplacées par celles de l'entreprise. Le but reste une cible, écrite comme telle : que 58 personnes pèsent autant qu'une équipe de 70. Pour une DSI, la pièce la plus utile tient en une liste validée par la direction : pour chaque compétence, les données qu'elle a le droit de lire.",
      lien: { href: "/etudes-de-cas-ia#distribution", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      {
        titre: "Écrire l'identifiant du modèle en dur dans le code",
        texte: "Le jour du retrait, les appels échouent. L'identifiant se range dans la configuration, un jeu de tests de non-régression valide le remplaçant, et un responsable nommé suit les annonces de retrait du fournisseur.",
      },
      {
        titre: "Relayer le jeton de l'utilisateur vers l'API métier",
        texte: "La spécification MCP l'interdit. Le serveur obtient ses propres jetons, vérifie l'audience de chaque jeton reçu (le destinataire inscrit dans le jeton) et journalise l'identité de la personne derrière chaque requête.",
      },
      {
        titre: "Donner au connecteur les droits d'un administrateur",
        texte: "Avec un compte technique omnipotent, une injection de prompt (une consigne cachée dans un texte que le modèle lit) devient une fuite de données. Les droits se limitent aux opérations utiles, en lecture d'abord.",
      },
      {
        titre: "Laisser le modèle décider d'une autorisation",
        texte: "Un modèle se laisse convaincre par une formulation habile. Le contrôle des droits reste dans le système métier, qui refuse l'opération quelle que soit la demande reçue.",
      },
      {
        titre: "Migrer sans relire les notes de version",
        texte: "Sur les modèles Claude récents, une température (le réglage de variabilité des réponses) différente de la valeur par défaut renvoie une erreur 400. Les paramètres dépréciés se repèrent dans la documentation du fournisseur avant chaque migration.",
      },
    ],
  },

  faq: [
    {
      q: "Faut-il passer par MCP ou appeler directement l'API du modèle ?",
      a: "Un appel direct convient à une fonction placée dans une seule application, comme le résumé d'une fiche dans le CRM. Un serveur MCP se justifie quand plusieurs assistants doivent consulter le même système : il centralise les droits, les journaux et la description des outils. Depuis décembre 2025, le protocole relève d'une fondation de la Linux Foundation, ce qui limite la dépendance à un seul éditeur. Nous tranchons au cadrage selon le nombre de consommateurs prévus.",
    },
    {
      q: "Comment éviter qu'un changement de modèle casse l'intégration ?",
      a: "L'identifiant du modèle se range dans la configuration. Un jeu de tests de non-régression, construit avec vos cas métier, compare l'ancien et le nouveau modèle avant la bascule. Un responsable interne suit les annonces des fournisseurs : Anthropic prévient au moins 60 jours avant un retrait, et a annoncé le 30 septembre 2026 celui de Claude Sonnet 4.5 pour le 30 novembre 2026. La procédure de migration fait partie des livrables.",
    },
    {
      q: "Nos données peuvent-elles être traitées en Europe ?",
      a: "La réponse dépend du fournisseur et de la plateforme. OpenAI propose de stocker les données d'un projet en Europe, avec un traitement régional. L'API d'Anthropic ne connaît que deux zones d'inférence, le monde entier ou les seuls États-Unis ; Claude tourne dans une autre région via Amazon Bedrock ou Google Cloud, où le point d'accès fixe la région. Nous consignons le choix retenu et ses justificatifs dans le dossier d'architecture, validé par votre DPO.",
    },
    {
      q: "Le modèle peut-il écrire dans notre ERP ou notre CRM ?",
      a: "Oui, par une fonction que nous codons et que le système métier contrôle. Le modèle propose l'opération, l'application vérifie les droits de l'utilisateur, et une personne valide les actions à fort impact avant l'écriture. L'ANSSI recommande de ne pas laisser un système d'IA exécuter seul une action critique (R9) et de restreindre les actions qu'il déclenche de lui-même sur la base de contenus externes, comme les mails (R27). Chaque écriture est journalisée.",
    },
    {
      q: "Comment l'intégration respecte-t-elle les droits de chaque utilisateur ?",
      a: "L'action s'exécute avec l'identité de l'utilisateur qui l'a demandée, via votre fournisseur d'identité et un jeton émis pour ce service précis. Le serveur vérifie que chaque jeton lui est destiné, comme l'exige la spécification MCP, et le système métier applique ses propres règles d'autorisation. Le modèle ne reçoit que les données accessibles à cet utilisateur, et les journaux gardent la trace de qui a demandé quoi.",
    },
    {
      q: "Comment maîtriser la facture de jetons ?",
      a: "La conception fait le gros du travail : instructions courtes, documents de référence mis en cache, passages filtrés avant l'envoi au modèle. Chez Anthropic, une lecture en cache coûte en règle générale un dixième du prix normal d'un jeton d'entrée. L'exploitation fait le reste : quota par application, limite de débit, alerte sur les dépassements et tableau de bord du coût par appel. Nous livrons ce tableau de bord avec l'intégration.",
    },
    {
      q: "Que se passe-t-il si le fournisseur du modèle ne répond plus ?",
      a: "L'application doit continuer à servir les métiers, et l'ANSSI recommande une procédure de contournement du système d'IA (R15). Selon la criticité, nous prévoyons un message clair avec reprise manuelle, une file d'attente qui rejoue les demandes, ou un second fournisseur derrière la couche d'abstraction. Le mode retenu est testé avant la mise en production, puis à chaque changement de fournisseur.",
    },
    {
      q: "Nos développeurs pourront-ils maintenir l'intégration seuls ?",
      a: "La passation vise ce résultat. Vous recevez le code, la documentation d'architecture, les jeux de tests et la procédure de migration de modèle. Vos développeurs participent aux revues de code pendant le projet, ce qui leur donne la main avant la fin de la mission. Si vous préférez garder un appui, un contrat de maintenance nous confie le suivi en production, les correctifs et les migrations de modèle.",
    },
  ],

  sources: [
    { name: "Model Context Protocol : Specification, révision 2026-07-28", url: "https://modelcontextprotocol.io/specification/2026-07-28" },
    { name: "Model Context Protocol : Key Changes (révision 2026-07-28)", url: "https://modelcontextprotocol.io/specification/2026-07-28/changelog" },
    { name: "Model Context Protocol : Security Best Practices", url: "https://modelcontextprotocol.io/specification/2026-07-28/basic/security_best_practices" },
    { name: "Anthropic : Introducing the Model Context Protocol (25 novembre 2024)", url: "https://www.anthropic.com/news/model-context-protocol" },
    { name: "Anthropic : Donating the Model Context Protocol and establishing the Agentic AI Foundation (9 décembre 2025)", url: "https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation" },
    { name: "Claude Platform : Model deprecations", url: "https://platform.claude.com/docs/en/about-claude/model-deprecations" },
    { name: "Claude Platform : Prompt caching", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-caching" },
    { name: "Claude Platform : Data residency", url: "https://platform.claude.com/docs/en/manage-claude/data-residency" },
    { name: "OpenAI API : Data controls in the OpenAI platform", url: "https://developers.openai.com/api/docs/guides/your-data" },
    { name: "ANSSI : Recommandations de sécurité pour un système d'IA générative (29 avril 2024)", url: "https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-un-systeme-dia-generative" },
  ],
}
