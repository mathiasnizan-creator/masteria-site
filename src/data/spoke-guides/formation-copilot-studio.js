// Contenu propre à /formation-copilot-studio (guide terrain, page propre). Rendu par SpokePage.
// Créé le 22 octobre 2026. Chaque fonction, limite et tarif vérifié le même jour sur Microsoft Learn
// (pages Copilot Studio, Microsoft 365 Copilot extensibility, Power Platform admin, Agent 365),
// sur le blog Microsoft Copilot du 2 septembre 2026 et sur la page de prix française de Copilot Studio.
// Cas : etudes-de-cas.js, « industrie » (règle Agent Builder / Copilot Studio des ateliers managers).
// Les clés `icon` sont des emojis écrits en échappement Unicode (clé Pictogram → icône lucide).
export default {
  slug: 'formation-copilot-studio',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-22',
  updatedLabel: 'Programme à jour · octobre 2026',
  h1: "Formation Copilot Studio : concevoir, publier et gouverner vos agents Microsoft",
  metaTitle: "Formation Copilot Studio et agents Copilot | Masteria",
  metaDesc: "Formation Copilot Studio en deux jours : sources, connecteurs Power Platform, déclencheurs autonomes, publication Teams, stratégies DLP et crédits Copilot.",
  keywords: "formation Copilot Studio, formation agent Copilot Studio, Copilot Studio formation, formation agent Copilot, Agent Builder, Power Platform agents",
  resume: "La formation Copilot Studio de Masteria apprend en deux jours, soit quatorze heures, à concevoir dans l'outil de Microsoft des agents reliés aux documents et aux logiciels de l'entreprise, à les publier dans Teams ou sur un site, puis à tenir leur gouvernance et leur budget. Elle réunit makers des services, équipes Power Platform, DSI et référents IA, en groupe intra de douze au plus ou seuls, dans vos locaux comme à distance. La journée de groupe démarre à 1 980 € HT ; le temps de préparation sur votre environnement est chiffré à part dans le devis. Masteria étant certifié Qualiopi, votre OPCO peut être sollicité et tranche seul sur la prise en charge.",
  enBref: [
    { label: 'Formation', value: "Copilot Studio de bout en bout : sources de connaissances, outils et connecteurs, flux, déclencheurs, publication, gouvernance et crédits" },
    { label: 'Durée', value: "Deux journées de sept heures ; chaque participant construit, évalue et publie un agent tiré d'une demande de son service" },
    { label: 'Formats', value: "Un groupe intra de douze au plus, ou un parcours individuel ; sur site ou en classe à distance, dans un environnement de développement de votre locataire Microsoft" },
    { label: 'Tarif', value: "Journée de groupe à partir de 1 980 € HT, quel que soit l'effectif ; préparation sur votre environnement Power Platform chiffrée en plus" },
    { label: 'Financement', value: "Certification Qualiopi de Masteria : l'OPCO dont relève votre entreprise examine le dossier et arrête sa participation" },
    { label: 'Prérequis', value: "Microsoft 365 au quotidien et un accès à Copilot Studio dans un environnement de test ; aucune ligne de code à écrire" },
  ],
  prerequis: "Usage courant de Microsoft 365 et de SharePoint ; une première pratique de Power Automate ou de Power Apps est un plus ; un accès à Copilot Studio dans un environnement de développement, par la licence Microsoft Copilot, une licence utilisateur Copilot Studio ou un essai",
  intro: "Dans l'interface française de Microsoft Copilot, le bouton « Nouvel agent » ouvre une fenêtre titrée « Nouvel assistant » : les deux mots désignent le même objet, et les pages de prix françaises de Microsoft parlent elles aussi d'assistants. Cet assistant d'Agent Builder répond à partir de documents. Copilot Studio, l'atelier de conception d'agents de Microsoft, en construit qui écrivent dans vos logiciels, se lancent seuls sur un événement et se publient dans Teams comme sur un site. Ce guide suit l'outil de la conception à la facture, avec des fonctions, des limites et des tarifs relevés sur Microsoft Learn et microsoft.com le 22 octobre 2026.",
  guide: {
    kicker: 'Guide terrain',
    h2: "Un agent Copilot Studio agit dans vos systèmes : son moteur, son identité et son budget se décident avant ses instructions",
    lead: "Depuis août 2026, date à laquelle Microsoft a ouvert à tous le moteur GitHub Copilot, Copilot Studio n'exécute plus ses agents d'une seule façon. Sa documentation distingue quatre harness, ces moteurs d'exécution logés entre l'agent que vous concevez et le modèle qui raisonne : ils décident quand appeler le modèle, quels outils lancer et comment la consommation se facture. Le moteur standard suit les sujets et les règles que vous écrivez. Le moteur GitHub Copilot découpe un objectif en étapes, se rattrape quand une étape échoue et produit des documents Word, Excel, PowerPoint ou PDF. Un troisième branche vos contenus sur Copilot Chat ; un quatrième, encore en préversion, sert les clients par écrit ou au téléphone. Trois décisions précèdent donc la première consigne : le moteur, le compte sous lequel l'agent agira, et l'enveloppe de crédits qui paiera son travail.",
    sections: [
      {
        h3: "Agent Builder répond à partir de documents, Copilot Studio agit dans vos logiciels",
        paras: [
          "Agent Builder se trouve dans l'application Microsoft Copilot et dans Teams. Un salarié y décrit en langage courant l'agent voulu, lui donne des consignes et des sources (sites SharePoint, fichiers, connecteurs Copilot qui indexent d'autres logiciels), l'essaie puis le partage avec quelques collègues. Microsoft le destine aux agents de questions-réponses d'une personne ou d'une petite équipe, et sa documentation l'écrit : Agent Builder ne crée aucune action vers un service extérieur. Sans licence Microsoft Copilot, il reste ouvert gratuitement aux agents qui ne puisent que sur le web.",
          "Copilot Studio est un portail web distinct, pensé pour les makers (les salariés qui fabriquent leurs propres outils avec la Power Platform) et pour les développeurs. Il apporte ce qu'Agent Builder n'a pas : connecteurs vers des logiciels extérieurs à Microsoft 365, enchaînements à plusieurs étapes avec approbations et embranchements, déclencheurs autonomes, publication auprès de clients, environnements séparés de développement, de test et de production. Un agent né dans Agent Builder se copie dans Copilot Studio avec ses instructions. La console change alors : Agent Builder se pilote depuis le centre d'administration Microsoft 365, Copilot Studio depuis celui de la Power Platform.",
          "Une question trace la frontière : l'agent doit-il seulement répondre, ou aussi écrire quelque part ? Une foire aux questions sur les procédures d'un service se monte dans Agent Builder. Un agent qui ouvre un ticket, met à jour une fiche client ou lance une validation appartient à Copilot Studio, avec une équipe désignée pour l'administrer.",
        ],
      },
      {
        h3: "Le moteur retenu fixe les capacités de l'agent et la façon dont il se facture",
        paras: [
          "Le moteur standard convient aux échanges prévisibles : vous écrivez des sujets (des parcours de conversation lancés par des phrases types), des règles et des chemins, et l'agent s'y tient. Ce second moteur vise les processus longs, comme rapprocher des factures de leurs bons de commande puis router les écarts vers une approbation. Il accepte des compétences, ces consignes réutilisables écrites en Markdown et partagées d'un agent à l'autre, et une mémoire propre à chaque utilisateur, toujours en préversion, que chacun peut consulter et vider.",
          "Son nom prête à confusion. Le moteur partage des composants avec l'assistant de code GitHub Copilot, mais Microsoft affirme que les données des agents qui tournent dans Copilot Studio ne passent pas par le service GitHub Copilot et restent sous les engagements de Copilot Studio. Sa facture suit une autre logique : chaque tâche consomme des crédits Copilot pour les jetons du modèle (les fragments de texte qu'il lit et écrit), pour les outils appelés et pour le moteur lui-même, et le compteur tourne dès la conception, pendant l'aperçu et les évaluations. Le moteur standard commence à facturer à la publication.",
          "Le moteur Copilot Chat a une seule mission : relier les contenus de l'entreprise à Copilot Chat pour que les salariés obtiennent des réponses sourcées dans l'outil qu'ils ouvrent déjà chaque jour. Le moteur de conversation client, en préversion au 22 octobre 2026, associe un agent principal à des sous-agents spécialisés qui répondent sur un site ou au téléphone et transfèrent à un conseiller humain ce qu'ils ne savent pas résoudre.",
        ],
      },
      {
        h3: "Une source de connaissances répond avec les droits de la personne qui interroge",
        paras: [
          "Un agent Copilot Studio puise dans des sites publics, jusqu'à 25 en orchestration générative (le mode où le modèle choisit lui-même ses sources et ses outils), dans des fichiers téléversés, des sites SharePoint, des tables Dataverse (la base de données de la Power Platform) et des contenus indexés par les connecteurs. Pour SharePoint, Dataverse et les connecteurs, l'agent se présente avec l'identité Microsoft Entra de l'utilisateur et ne lui montre que ce que ses propres droits lui ouvrent. Un site partagé trop largement transmet donc ce défaut à chaque personne qui interroge l'agent.",
          "Deux réglages décident de la fiabilité. Le premier autorise les réponses non ancrées, tirées des connaissances générales du modèle quand aucune source n'a servi. Le couper bloque ces réponses, au prix de refus ponctuels quand le modèle oublie de citer le document qu'il a pourtant trouvé ; Microsoft précise que la coupure n'interdit pas tout recours aux connaissances générales. Le second ouvre la recherche Bing sur l'ensemble du web, dont les résultats se mêlent à ceux de vos sites déclarés. Pour un agent de procédures internes, nous coupons l'un et l'autre et inscrivons dans les instructions l'obligation de citer chaque document.",
          "L'ancrage sur le graphe du locataire, une recherche sémantique dans les contenus Microsoft 365 de l'entreprise, améliore les réponses tirées de SharePoint. Les titulaires de la licence Microsoft Copilot en profitent d'office ; pour les autres, chaque réponse qui s'en sert coûte 10 crédits, en plus des 2 crédits de la réponse générée.",
        ],
      },
      {
        h3: "Les outils et les flux font agir l'agent, sous l'identité que vous lui attribuez",
        paras: [
          "Un outil est une capacité que l'agent peut appeler : un connecteur Power Platform (une passerelle prête vers un logiciel, choisie parmi des milliers, ou un connecteur personnalisé vers le vôtre), un flux d'agent, une invite confiée à un modèle, une API REST, un serveur MCP (Model Context Protocol, la norme ouverte qui branche un agent sur des outils externes) ou l'utilisation de l'ordinateur, qui clique dans une application dépourvue d'API. En orchestration générative, l'agent retient un outil d'après son nom et sa description, et une description floue l'envoie vers le mauvais. Microsoft accepte 128 outils par agent et en recommande 25 à 30.",
          "Chaque outil s'exécute sous une identité. Par défaut, celle de l'utilisateur, qui ne peut rien faire au-delà de ses droits. Les identifiants fournis par le créateur exécutent l'outil avec le compte du concepteur de l'agent : commode pour une ressource commune, dangereux dès que l'agent s'ouvre à des personnes qui n'ont pas ces droits. Une dernière option fait confirmer chaque exécution par l'utilisateur ; elle est désactivée par défaut, et nous la faisons activer pour toute écriture dans un logiciel métier.",
          "Les flux portent la part déterministe du travail, celle où la même entrée produit toujours le même résultat. Le moteur standard emploie des flux d'agent ; le moteur GitHub Copilot, des workflows bâtis sur un nouveau canevas, avec des étapes qui extraient les valeurs d'une facture ou d'un contrat, appellent un agent ou Copilot, ou demandent une information à un humain. Lancé par l'agent pour un utilisateur sous licence Microsoft Copilot, un flux d'agent ne coûte rien ; lancé par un autre déclencheur, il consomme 13 crédits par tranche de 100 actions. Les flux cloud de Power Automate restent régis par la licence Power Automate.",
        ],
      },
      {
        h3: "Un déclencheur autonome agit avec les droits de la personne qui l'a créé",
        paras: [
          "Un déclencheur d'événement fait travailler l'agent sans qu'on lui écrive : un élément créé dans une liste SharePoint, un fichier déposé dans OneDrive, une tâche terminée dans Planner, une ligne ajoutée dans Dataverse, ou une simple récurrence. L'événement adresse à l'agent une charge utile, un message qui décrit ce qui vient de se produire et peut porter des consignes propres à ce déclencheur. La fonction suppose l'orchestration générative, et l'agent ne réagit qu'une fois publié.",
          "Microsoft écrit la limite en toutes lettres : un déclencheur ne s'authentifie qu'avec les identifiants du créateur de l'agent, et chaque action authentifiée d'un agent autonome doit employer ces mêmes identifiants. Les utilisateurs d'un tel agent peuvent alors atteindre des données et des systèmes ouverts à ce seul créateur. Copilot Studio affiche un avertissement avant la publication. La parade que nous enseignons tient dans un compte de service limité au strict nécessaire, des paramètres de déclenchement étroits et des essais sur des données sans enjeu.",
          "Chaque charge utile reçue entre dans la consommation : une récurrence réglée toutes les dix minutes réveille l'agent 144 fois par jour, week-end compris. Un administrateur peut fermer la porte aux déclencheurs dans un environnement en bloquant, dans une stratégie de données, le connecteur nommé Microsoft Copilot Studio.",
        ],
      },
      {
        h3: "La publication fixe le canal et la manière dont l'utilisateur prouve son identité",
        paras: [
          "Un agent se publie vers Teams et Microsoft Copilot, SharePoint, WhatsApp, Facebook, une application mobile, un site web personnalisé ou les canaux d'Azure Bot Service. Par défaut, il exige une connexion Microsoft Entra ID (l'annuaire des comptes de l'entreprise), active sans configuration dans Teams, Power Apps et Microsoft Copilot. L'option sans authentification ouvre l'agent à toute personne qui détient le lien et lui retire les outils qui exigent les identifiants de l'utilisateur. Le site de démonstration fourni par Copilot Studio sert à recueillir des avis en interne ; Microsoft déconseille d'en communiquer l'adresse aux clients.",
          "Microsoft conseille de publier d'abord pour soi, d'installer l'agent dans son propre Teams, puis de l'ouvrir à un groupe. Une mise à jour n'atteint une conversation Teams déjà ouverte qu'à la session suivante, parfois une heure plus tard ; la commande start over relance la session sur la dernière version. La diffusion à toute l'organisation, par le catalogue d'applications, attend l'approbation d'un administrateur.",
        ],
      },
      {
        h3: "La gouvernance se règle environnement par environnement, dans le centre d'administration Power Platform",
        paras: [
          "Un environnement est un espace cloisonné de la Power Platform qui contient agents, flux, données et règles. Faute de consigne, chaque maker atterrit dans l'environnement par défaut, partagé par toute l'entreprise. Le routage d'environnement, une fonction premium, envoie au contraire chacun dans son propre environnement de développement, géré, où le partage est limité d'office à cinq personnes. L'agent rejoint ensuite le test puis la production sous forme de solution, ou depuis un dépôt GitHub qui garde l'historique de chaque déploiement.",
          "Les stratégies de données, dites DLP (prévention des pertes de données), rangent chaque connecteur dans l'un de trois groupes : données professionnelles, données non professionnelles, bloqué. Deux connecteurs de groupes différents ne peuvent pas échanger de données. Copilot Studio y ajoute ses connecteurs propres : bloquer Chat without Microsoft Entra ID authentication in Copilot Studio impose l'authentification à tous les agents, d'autres verrouillent les sites publics comme sources, les requêtes HTTP, chaque canal de publication ou les déclencheurs. Depuis le début de 2025, ces stratégies s'appliquent à tous les locataires, sans exemption possible.",
          "Depuis juillet 2026, Copilot Studio crée une identité Microsoft Entra Agent ID pour chaque nouvel agent, ce qui permet d'appliquer l'accès conditionnel et les droits des connecteurs agent par agent. Agent 365, ouvert à tous depuis le 1er mai 2026 et licencié par utilisateur, tient le registre de tous les agents de l'organisation, Copilot Studio compris. Les journaux d'activité des makers remontent dans Microsoft Purview.",
        ],
      },
      {
        h3: "Les crédits Copilot se suivent agent par agent, et la mesure se prépare avant l'ouverture",
        paras: [
          "Les crédits Copilot ont remplacé les messages comme unité de compte le 1er septembre 2025. Le 22 octobre 2026, la page française de Microsoft vend 25 000 crédits pour 173,30 € HT par mois, en un pack mis en commun sur tout le locataire ; s'y ajoutent un paiement à l'usage réglé en fin de mois par un abonnement Azure, et un plan prépayé d'un an. Sur le moteur standard, une réponse écrite à l'avance coûte 1 crédit, une réponse générée 2, une action de l'agent 5. Un salarié sous licence Microsoft Copilot qui interroge un agent interne avec sa propre identité ne consomme rien sur ces postes.",
          "Trois règles encadrent ce budget. Les crédits non consommés ne passent pas au mois suivant. À 125 % de la capacité prépayée, les agents personnalisés s'arrêtent et annoncent qu'ils ont atteint leur limite. Le centre d'administration Power Platform permet de plafonner la consommation mensuelle de chaque agent avant d'en arriver là, et l'estimateur d'usage publié par Microsoft chiffre un agent avant son lancement.",
          "Pour la mesure, la page de suivi de chaque agent affiche ses crédits et calcule le temps ou l'argent économisé, par exécution ou par outil, à partir d'une durée de référence que vous saisissez : le résultat vaut ce que vaut cette durée, d'où l'intérêt de la chronométrer avant le projet. Les évaluations, disponibles pour tous depuis mars 2026, rejouent des jeux de questions de test, conversations en plusieurs tours comprises, et comparent deux versions d'un même agent.",
        ],
      },
    ],
    table: {
      caption: "Où construire chaque agent et qui paie son usage, au 22 octobre 2026",
      headers: ['Besoin', 'Où le construire', "Qui paie l'usage", 'Point de vigilance'],
      rows: [
        ["Répondre à une équipe à partir de ses documents", "Agent Builder, dans Microsoft Copilot ou Teams", "La licence Microsoft Copilot ; gratuit pour un agent limité au web", "Aucune action possible vers un logiciel extérieur"],
        ["Répondre à tout un service depuis SharePoint et l'intranet", "Copilot Studio, moteur standard ou moteur Copilot Chat", "Rien pour les salariés sous licence, des crédits pour les autres", "Les réponses suivent les droits SharePoint de chaque utilisateur"],
        ["Ouvrir un ticket ou écrire dans un logiciel métier", "Copilot Studio, avec un connecteur, une API REST ou un serveur MCP", "5 crédits par action, hors salariés sous licence", "Identité de l'utilisateur ou du créateur, à choisir outil par outil"],
        ["Réagir seul à un événement", "Copilot Studio, déclencheur d'événement", "Chaque charge utile reçue entre dans la consommation", "Le compte du créateur sert pour tous les utilisateurs"],
        ["Traiter un dossier en plusieurs étapes avec des fichiers", "Copilot Studio, moteur GitHub Copilot", "Des crédits dès la conception et pendant les essais", "Estimer la consommation avant la mise en production"],
        ["Répondre aux clients sur un site ou au téléphone", "Copilot Studio, moteur de conversation client (préversion)", "Des crédits selon la complexité et le canal", "Le site de démonstration reste hors production"],
      ],
    },
    cas: {
      h3: "Cas pratique : un agent du centre de services publié dans Teams, qui répond sur les procédures et ouvre un ticket",
      contexte: "Le centre de services informatiques d'une entreprise de taille intermédiaire reçoit chaque lundi les mêmes demandes : mot de passe expiré, accès à un dossier partagé, poste à préparer pour un arrivant. Les procédures existent sur un site SharePoint, les tickets vivent dans ServiceNow. Le responsable veut, pour un pilote limité à un seul site de l'entreprise, un agent dans Teams qui réponde à partir des procédures et ouvre le ticket quand la procédure ne suffit pas.",
      etapes: [
        "Créez l'agent dans votre environnement de développement, jamais dans l'environnement par défaut, sur le moteur standard : le parcours reste prévisible et l'usage des salariés sous licence ne consomme pas de crédits.",
        "Déclarez le site SharePoint des procédures comme unique source, coupez les réponses non ancrées et la recherche web, puis collez les instructions ci-dessous.",
        "Ajoutez l'action Create Record du connecteur ServiceNow, un connecteur premium, réglée sur la table des incidents et exécutée sous l'identité de l'utilisateur, avec une confirmation demandée avant chaque création. Microsoft signale que cette action ignore le champ de description complète : la description courte doit donc porter l'essentiel, et un essai sur votre instance le confirme.",
        "Bâtissez un jeu de test de vingt questions déjà reçues par le centre de services, dont cinq sans réponse dans les procédures, et lancez l'évaluation avant toute publication.",
        "Publiez pour vous seul dans Teams, puis pour le groupe pilote ; fixez un plafond mensuel de crédits pour l'agent dans le centre d'administration Power Platform.",
      ],
      prompt: "Tu es l'agent du centre de services informatiques de l'entreprise. Tu réponds aux salariés dans Teams, en français, à partir du seul site SharePoint Procédures IT.\n\nPour chaque question :\n1. Cherche la procédure qui correspond. Si tu la trouves, donne les étapes dans l'ordre, en phrases courtes, et cite le document utilisé avec son lien.\n2. Si la procédure exige un droit d'administrateur, dis-le et propose d'ouvrir un ticket plutôt que de décrire la manipulation.\n3. Si aucune procédure ne répond, dis-le en une phrase. N'invente aucune étape et ne t'appuie sur aucune connaissance générale.\n\nPour ouvrir un ticket :\n- Reformule la demande en une description courte de vingt mots au plus, qui dit ce qui bloque et ce que la personne a déjà essayé.\n- Demande la catégorie : compte et mot de passe, accès à un dossier, matériel ou logiciel.\n- Affiche le ticket complet et attends l'accord de la personne avant de le créer.\n- Une fois le ticket créé, donne son numéro.\n\nTu ne demandes jamais de mot de passe, de code reçu par SMS ni de coordonnées bancaires. Si quelqu'un t'en transmet, invite-le à changer ce secret et à prévenir le centre de services.",
      resultat: "Vous disposez d'un agent qui répond avec les droits de chaque salarié, cite ses procédures et ne crée un ticket qu'après accord, avec un score d'évaluation relevé avant l'ouverture. Relancez le jeu de test à chaque changement des instructions ou des procédures, car une réponse juste en septembre devient fausse quand le document change. Avant d'étendre le pilote, rapprochez le nombre de tickets ouverts par l'agent des demandes reçues par téléphone sur la même période.",
    },
    pieges: [
      {
        titre: "Un agent autonome prête vos droits à ses utilisateurs",
        texte: "Les déclencheurs d'événement s'authentifient avec le compte du créateur, et Microsoft prévient que les utilisateurs d'un agent publié peuvent s'en servir pour atteindre ce que ce compte atteint. Construisez les agents autonomes avec un compte de service réduit au nécessaire, et relisez ce que transporte la charge utile avant la publication.",
      },
      {
        titre: "L'agent sans authentification répond à quiconque détient le lien",
        texte: "L'option sans authentification convient aux agents publics, comme une aide sur votre site. Retenue par facilité pour un agent interne, elle expose ses sources à l'extérieur. Bloquez le connecteur Chat without Microsoft Entra ID authentication in Copilot Studio dans les environnements où aucun agent public n'a sa place.",
      },
      {
        titre: "Le moteur GitHub Copilot facture aussi vos essais",
        texte: "Sur ce moteur, la conception en langage courant, l'aperçu, les tests et la génération d'évaluations consomment des crédits. Un atelier où douze personnes reprennent leur agent toute une journée laisse donc une trace sur la facture. Réservez une enveloppe à l'environnement de formation et suivez-la dans le centre d'administration.",
      },
      {
        titre: "Le dépassement de capacité éteint l'agent en pleine semaine",
        texte: "Au-delà de 125 % de la capacité prépayée, Copilot Studio désactive les agents personnalisés à la fin de la conversation en cours ; les flux d'agent, eux, cessent de démarrer dès que la capacité est épuisée. Un plafond par agent, une alerte sur la consommation et le paiement à l'usage en relais protègent un agent dont un service dépend.",
      },
    ],
  },
  audience: [
    {
      title: "Makers et référents métier",
      desc: "Vous bâtissez déjà des flux Power Automate ou des applications Power Apps pour votre service, ou vous avez créé un premier assistant dans Agent Builder. Vous apprenez à passer à un agent relié à vos logiciels, évalué sur un jeu de questions et publié dans Teams.",
    },
    {
      title: "Équipes Power Platform et centre d'excellence",
      desc: "Vous administrez environnements, connecteurs et solutions. Vous apprenez ce que Copilot Studio ajoute à votre périmètre : moteurs d'exécution, stratégies de données propres aux agents, crédits à répartir, identités Entra des agents.",
    },
    {
      title: "DSI, sécurité et architecture",
      desc: "Vous décidez de ce qui se publie et où. Vous apprenez à lire les risques d'un agent avant son ouverture : identité de ses outils, déclencheurs autonomes, canaux exposés au public, journaux Purview et registre Agent 365.",
    },
    {
      title: "Référents IA et chefs de projet",
      desc: "Vous recevez les demandes d'agents des services. Vous repartez avec une grille pour trancher entre Agent Builder et Copilot Studio, chiffrer un agent en crédits et suivre ce qu'il fait gagner.",
    },
  ],
  useCases: [
    { icon: '\uD83E\uDD16', title: "Agent de procédures internes", desc: "Réponses tirées d'un site SharePoint, chacune citée, limitées aux droits du salarié qui pose la question." },
    { icon: '\uD83D\uDD17', title: "Ticket ou fiche créés par l'agent", desc: "Connecteur Power Platform, identité de l'utilisateur, confirmation demandée avant chaque écriture." },
    { icon: '\u26A1', title: "Agent qui se lance seul", desc: "Élément SharePoint créé, fichier déposé, récurrence : charge utile lue et compte de service borné." },
    { icon: '\uD83D\uDD04', title: "Workflow d'extraction de documents", desc: "Valeurs tirées d'une facture ou d'un contrat, étapes fixes, validation humaine avant la suite." },
    { icon: '\uD83D\uDCE3', title: "Publication dans Teams ou sur un site", desc: "Canal, authentification, approbation de l'administrateur, ouverture par cercles successifs." },
    { icon: '\uD83D\uDEE1', title: "Garde-fous et budget", desc: "Environnements, stratégies de données, plafonds de crédits, évaluation avant toute ouverture." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Choisir entre Agent Builder et Copilot Studio, puis choisir le moteur",
      duration: '1h30',
      description: "Placer chaque demande d'agent au bon endroit, avec la licence qui convient.",
      items: [
        "Agent Builder et Copilot Studio : public visé, capacités, console d'administration",
        "Agent et assistant : un seul objet dans l'interface française",
        "Les quatre moteurs : standard, GitHub Copilot, Copilot Chat, conversation client",
        "Accès : licence Microsoft Copilot, licence utilisateur Copilot Studio, essai sans publication",
      ],
      exercise: "Vous classez dix demandes d'agents de votre organisation entre Agent Builder et Copilot Studio, moteur compris.",
    },
    {
      day: 1,
      title: "Module 2 · Ancrer l'agent dans vos sources",
      duration: '2h',
      description: "Donner à l'agent ses documents et l'empêcher de répondre en dehors d'eux.",
      items: [
        "SharePoint, fichiers téléversés, Dataverse, sites publics et connecteurs Copilot",
        "Authentification de l'utilisateur et conséquences du surpartage",
        "Réponses non ancrées, recherche web, citation obligatoire des documents",
        "Instructions : rôle, périmètre, refus, format des réponses",
      ],
      exercise: "Vous construisez un agent sur un site SharePoint de votre service, puis le mettez en défaut avec une question hors de ses sources.",
    },
    {
      day: 1,
      title: "Module 3 · Équiper l'agent d'outils qui écrivent dans vos logiciels",
      duration: '2h',
      description: "Faire agir l'agent dans un logiciel métier, sous une identité choisie en connaissance de cause.",
      items: [
        "Connecteurs Power Platform standard, premium et personnalisés",
        "API REST, serveurs MCP et utilisation de l'ordinateur",
        "Identifiants de l'utilisateur ou du créateur, confirmation avant exécution",
        "Nom et description d'un outil : ce que l'orchestration générative en retient",
      ],
      exercise: "Vous ajoutez à votre agent une action qui crée un élément dans une liste SharePoint ou un ticket, avec l'accord de l'utilisateur.",
    },
    {
      day: 1,
      title: "Module 4 · Évaluer l'agent avant de l'ouvrir",
      duration: '1h30',
      description: "Prouver que l'agent répond juste avant qu'un collègue ne s'en serve.",
      items: [
        "Volet de test, carte d'activité et lecture des choix de l'agent",
        "Jeux de test importés ou générés, conversations en plusieurs tours",
        "Méthodes de notation et contrôle des contenus préjudiciables",
        "Comparaison de deux versions d'un même agent",
      ],
      exercise: "Vous écrivez un jeu de vingt questions réelles et comparez deux versions de vos instructions.",
    },
    {
      day: 2,
      title: "Module 5 · Confier la part répétitive à un flux",
      duration: '2h',
      description: "Séparer ce que l'agent décide de ce qui doit toujours se dérouler à l'identique.",
      items: [
        "Flux d'agent et workflows : déclencheurs, actions, étapes d'IA",
        "Extraction de valeurs dans une facture ou un contrat",
        "Demande d'information à un humain et circuits d'approbation",
        "Coût des actions de flux et périmètre de la licence Power Automate",
      ],
      exercise: "Vous construisez un workflow appelé par votre agent, qui extrait les champs d'un document et attend une validation.",
    },
    {
      day: 2,
      title: "Module 6 · Déclencher l'agent sur un événement et borner ses droits",
      duration: '1h30',
      description: "Faire travailler l'agent seul en sachant sous quel compte il agit.",
      items: [
        "Bibliothèque de déclencheurs, charge utile et consignes par événement",
        "Identifiants du créateur : risque et recours au compte de service",
        "Coût d'une récurrence et quotas de service",
        "Blocage des déclencheurs par stratégie de données",
      ],
      exercise: "Vous branchez un déclencheur sur une liste SharePoint de test et relisez ce que la charge utile transmet à l'agent.",
    },
    {
      day: 2,
      title: "Module 7 · Publier dans Teams, dans Microsoft Copilot et sur un site",
      duration: '1h30',
      description: "Mettre l'agent entre les bonnes mains, dans le bon ordre.",
      items: [
        "Canaux disponibles et canaux fermés par l'organisation",
        "Authentification Microsoft, manuelle ou absente",
        "Publication pour soi, pour un groupe, puis approbation de l'administrateur",
        "Site personnalisé et site de démonstration",
      ],
      exercise: "Vous publiez votre agent pour vous seul dans Teams, puis rédigez la demande d'ouverture au groupe pilote.",
    },
    {
      day: 2,
      title: "Module 8 · Gouverner, chiffrer et mesurer les agents",
      duration: '2h',
      description: "Écrire les règles qui serviront à chaque nouvel agent de l'organisation.",
      items: [
        "Environnements, routage des makers, solutions et passage en production",
        "Stratégies de données propres à Copilot Studio, Entra Agent ID, Agent 365",
        "Crédits : packs, paiement à l'usage, barème, plafond par agent",
        "Économies calculées par exécution ou par outil, revue périodique des agents",
      ],
      exercise: "Vous rédigez le circuit de validation des agents de votre organisation et le budget en crédits de votre premier agent.",
    },
  ],
  objectives: [
    "Le participant choisit entre Agent Builder et Copilot Studio, puis entre les moteurs d'exécution, à partir de ce que l'agent doit accomplir.",
    "Il construit un agent ancré dans des sources SharePoint, qui cite ses documents et décline les questions hors de son périmètre.",
    "Il ajoute un outil qui écrit dans un logiciel métier en fixant l'identité d'exécution et la confirmation de l'utilisateur.",
    "Il évalue un agent sur un jeu de questions réelles avant sa publication et compare deux versions de ses instructions.",
    "Il configure un déclencheur d'événement en connaissant les droits qu'il engage et ce qu'il coûte.",
    "Il estime la consommation de crédits d'un agent et rédige le circuit de validation qui précède sa publication.",
  ],
  tarifs: {
    titre: "Le prix de base, la préparation sur votre environnement et les crédits consommés en atelier",
    paras: [
      "Avant les deux jours, le formateur prépare avec votre équipe Power Platform un environnement de développement pour le groupe, vérifie l'accès de chacun à Copilot Studio et retient avec vous les cas d'atelier : un site SharePoint de procédures, une liste ou un logiciel où l'agent pourra écrire, des données sans enjeu pour les déclencheurs. Ce travail dépend de votre locataire et se chiffre au devis. Les crédits consommés pendant les ateliers, en particulier sur le moteur GitHub Copilot, sont décomptés sur votre contrat Microsoft.",
      "Le prix d'une journée part de 1 980 € HT pour l'ensemble du groupe, quel que soit son effectif dans la limite de douze personnes ; deux journées représentent donc au moins 3 960 € HT. Exemple : quatre makers, trois membres de l'équipe Power Platform, deux personnes de la sécurité et un référent IA, soit dix participants, reviennent chacun à 396 € HT au minimum. Une personne seule, un responsable sécurité par exemple, peut suivre ce programme en tête-à-tête pour le même prix de journée. Grâce à la certification Qualiopi, le dossier peut partir vers votre OPCO, seul juge du montant couvert ; un employeur public règle la session sur son propre plan de formation.",
    ],
  },
  apres: {
    titre: "Après la formation, un premier agent mis en production avec vos équipes",
    texte: "Une fois les règles écrites, Masteria peut construire avec vous l'agent qui a servi d'exercice ou un projet plus ambitieux : un agent de support branché sur votre outil de tickets, un workflow qui extrait et contrôle les factures entrantes, un agent publié sur votre site pour vos clients. Chaque agent naît dans votre environnement de développement, passe le jeu de test convenu, puis rejoint la production par vos solutions, accompagné de la documentation de ses outils, de ses identités et de son budget en crédits. Ce développement fait l'objet d'un prix forfaitaire, fixé après un cadrage ; il n'entre pas dans un financement OPCO.",
  },
  cta: {
    milieu: "Apportez une demande d'agent que votre service attend : les deux jours la transforment en agent évalué, prêt pour un pilote.",
    fin: {
      titre: "Construisons votre premier agent Copilot Studio",
      texte: "Dites-nous combien de makers et d'administrateurs participeront, quelles licences Microsoft vous détenez et quel agent votre service attend en premier. Masteria vous répond avec un déroulé bâti sur votre environnement, des dates et un chiffrage.",
    },
  },
  terrain: {
    titre: "Dans un groupe industriel, la frontière entre Agent Builder et Copilot Studio a été tracée dès les ateliers des managers",
    texte: "Pendant le déploiement de Copilot dans un groupe industriel de l'emballage présent sur plusieurs continents, les managers pilotes ont construit leurs premiers assistants dans Agent Builder, dont un qui tire d'un mail fournisseur les éléments de sa fiche. La règle donnée en atelier tient en une phrase : une foire aux questions sur les documents d'une équipe se monte dans Agent Builder, un assistant qui écrit dans SAP, crée un ticket ou répond à un client relève de Copilot Studio. Après les sessions, une partie des participants a réclamé ce niveau supérieur (les données SAP, la Power Platform, des assistants plus poussés), et un module avancé a été cadré pour y répondre.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  liensAssocies: [
    { label: "Microsoft Copilot pour toutes les équipes, Agent Builder compris", href: '/formation-microsoft-copilot' },
    { label: "Copilot côté DSI : préparer le locataire et poser les garde-fous", href: '/formation-copilot-informatique' },
    { label: "Construire des agents sans code sur plusieurs outils d'IA", href: '/formation-agents-ia' },
    { label: "Superviser les agents IA : traçage, identités, droits", href: '/blog/superviser-agents-ia-production' },
    { label: "Agents IA en entreprise : usages par service et garde-fous", href: '/agents-ia-entreprise' },
    { label: "Gouvernance de l'IA : charte, registre des usages et comité", href: '/formation-gouvernance-ia' },
  ],
  avisPriorite: ['Copilot', 'assistant', 'agent'],
  faq: [
    {
      q: "Copilot Studio, c'est quoi ?",
      a: "Copilot Studio est l'outil de Microsoft pour concevoir des agents : on y écrit leurs instructions, on branche des sources de connaissances (SharePoint, sites, fichiers), on ajoute des actions par les connecteurs Power Platform et des déclencheurs, puis on publie l'agent dans Teams, dans Microsoft Copilot ou sur un site. Il s'adresse aux makers et à la DSI ; pour un agent de questions-réponses sur quelques documents, Agent Builder suffit.",
    },
    {
      q: "Quelle différence entre Copilot Studio et Agent Builder ?",
      a: "Agent Builder, intégré à Microsoft Copilot et à Teams, construit en langage courant un agent de questions-réponses sur des documents, pour soi ou une petite équipe ; il ne crée aucune action vers un logiciel extérieur. Copilot Studio est un portail séparé, destiné aux makers et aux développeurs, qui ajoute connecteurs, flux, déclencheurs autonomes, publication externe et environnements de test. Un agent d'Agent Builder se copie dans Copilot Studio quand il doit aller plus loin. L'interface française appelle « assistant » ce que la documentation nomme agent.",
    },
    {
      q: "De quel accès à Copilot Studio chaque participant a-t-il besoin ?",
      a: "Trois accès conviennent. La licence Microsoft Copilot (anciennement Microsoft 365 Copilot) ouvre Copilot Studio pour étendre Copilot avec des agents. La licence utilisateur Copilot Studio, gratuite, s'attribue une fois que le locataire a souscrit un pack de crédits. L'essai individuel permet de construire et de tester ; la publication lui reste fermée, ce qui suffit aux ateliers et demande un autre accès pour le module de publication. Ces accès se vérifient avec votre administrateur pendant la préparation.",
    },
    {
      q: "Combien coûte un agent Copilot Studio une fois en service ?",
      a: "Copilot Studio se paie en crédits Copilot. Au 22 octobre 2026, un pack de 25 000 crédits coûte 173,30 € HT par mois sur la page française de Microsoft, et tout le locataire y puise, à côté d'un paiement à l'usage par abonnement Azure. Sur le moteur standard, une réponse générée coûte 2 crédits et une action 5 ; un salarié sous licence Microsoft Copilot qui utilise un agent interne sous sa propre identité ne consomme rien sur ces postes. Le moteur GitHub Copilot se facture à l'usage dès la conception. L'estimateur de Microsoft donne un ordre de grandeur avant le lancement.",
    },
    {
      q: "Le moteur GitHub Copilot envoie-t-il nos données à GitHub ?",
      a: "Microsoft indique que ce moteur partage des composants techniques avec GitHub Copilot, et que les données des agents exécutés dans Copilot Studio ne sont ni envoyées au service GitHub Copilot ni traitées par lui ; les engagements de Copilot Studio sur la confidentialité, la sécurité et la résidence des données continuent de s'appliquer. Le choix du modèle principal demande plus d'attention : Microsoft prévient que certains modèles, parmi lesquels ceux d'Anthropic, peuvent traiter et stocker des données hors de la zone géographique de votre organisation.",
    },
    {
      q: "Un agent peut-il agir sans qu'on lui écrive ?",
      a: "Oui, grâce à un déclencheur d'événement : un élément créé dans SharePoint, un fichier déposé dans OneDrive, une ligne ajoutée dans Dataverse ou une récurrence. L'orchestration générative doit être active, et l'agent ne réagit qu'après publication. Le déclencheur s'authentifie toujours avec le compte du concepteur de l'agent, d'où l'intérêt d'un compte de service dédié, aux droits réduits. Chaque événement reçu entre dans la consommation de crédits, et un administrateur peut interdire les déclencheurs par une stratégie de données.",
    },
    {
      q: "Peut-on publier un agent Copilot Studio sur notre site pour nos clients ?",
      a: "Oui, par le canal du site web personnalisé, qui insère l'agent dans vos pages. Vos clients n'ont pas de compte dans votre annuaire : soit l'agent fonctionne sans authentification et ne puise que dans des contenus publiables, soit vous configurez une authentification manuelle. Le site de démonstration de Copilot Studio sert aux essais internes et ne se montre pas aux clients. Pour un service client par écrit et par téléphone, avec transfert vers un conseiller, Microsoft propose un moteur dédié, encore en préversion au 22 octobre 2026.",
    },
    {
      q: "Comment la DSI garde-t-elle la main sur les agents créés par les services ?",
      a: "Par les environnements d'abord : le routage dirige chaque maker vers un environnement de développement géré, et le passage en production se fait par des solutions que l'équipe d'administration déploie. Par les stratégies de données ensuite, qui ferment canal par canal et source par source les connecteurs à risque et les déclencheurs. Depuis juillet 2026, chaque nouvel agent reçoit une identité Microsoft Entra, à laquelle s'applique l'accès conditionnel. Agent 365, licencié par utilisateur, centralise le registre des agents, et les journaux des makers remontent dans Microsoft Purview.",
    },
    {
      q: "Faut-il savoir programmer pour concevoir un agent dans Copilot Studio ?",
      a: "Pas pour l'essentiel : instructions, sources, connecteurs prêts à l'emploi, flux et publication se règlent à la souris et en langage courant. Quelques gestes réclament un profil plus technique : écrire une formule Power Fx (le langage de formules de la Power Platform, proche de celui d'Excel), décrire une API REST, brancher un serveur MCP ou créer un connecteur personnalisé. Dans un groupe mixte, ces ateliers se mènent en binôme, un maker avec un membre de l'équipe Power Platform.",
    },
    {
      q: "Notre OPCO peut-il financer cette formation Copilot Studio ?",
      a: "Une entreprise privée peut présenter le dossier à son OPCO, puisque Masteria est certifié Qualiopi ; l'OPCO applique le barème de sa branche et fixe sa participation. En 2026, une exception touche les petites structures : AKTO a suspendu, pour les entreprises de moins de 50 salariés de dix de ses branches, commerce de gros compris, la prise en charge des actions du plan de développement des compétences. Côté public, une collectivité règle la session sur son plan de formation par bon de commande, le CNFPT assurant l'offre de base de ses agents ; un hôpital public s'adresse à l'ANFH. Le CPF est hors sujet : un parcours sur mesure comme celui-ci ne mène à aucune certification.",
    },
    {
      q: "Cette formation remplace-t-elle la formation Microsoft Copilot ou la formation agents IA ?",
      a: "Elle vient après elles. La formation Microsoft Copilot apprend à chaque salarié à se servir de Copilot dans ses applications de bureau et dans Teams, puis à monter un assistant simple dans Agent Builder. La formation agents IA compare plusieurs outils sans code, de Claude à ChatGPT. Ce parcours-ci se concentre sur Copilot Studio, pour celles et ceux qui conçoivent, publient et administrent des agents d'entreprise sur la Power Platform.",
    },
  ],
  sources: [
    { name: "Microsoft Learn : les quatre harness de Copilot Studio (page mise à jour le 21 octobre 2026)", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview' },
    { name: "Microsoft Learn : choisir entre Agent Builder et Copilot Studio", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copilot-studio-experience' },
    { name: "Microsoft Learn : vue d'ensemble d'Agent Builder", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder' },
    { name: "Microsoft Learn : sources de connaissances d'un agent Copilot Studio", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio' },
    { name: "Microsoft Learn : ajouter des outils à un agent personnalisé", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-tools-custom-agent' },
    { name: "Microsoft Learn : workflows du moteur GitHub Copilot", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/flows-overview' },
    { name: "Microsoft Learn : déclencheurs d'événement des agents autonomes", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about' },
    { name: "Microsoft Learn : publier un agent et configurer ses canaux", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels' },
    { name: "Microsoft Learn : stratégies de données pour les agents", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention' },
    { name: "Microsoft Learn : routage d'environnement de la Power Platform", url: 'https://learn.microsoft.com/en-us/power-platform/admin/default-environment-routing' },
    { name: "Microsoft Learn : contrôles de sécurité et de gouvernance de Copilot Studio", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance' },
    { name: "Microsoft Learn : licences et crédits Copilot du moteur standard", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing' },
    { name: "Microsoft Learn : barème des crédits Copilot et règles de dépassement", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management' },
    { name: "Microsoft Learn : facturation à l'usage du moteur GitHub Copilot", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview' },
    { name: "Microsoft Learn : temps et coûts économisés, calcul par agent", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-cost-savings' },
    { name: "Microsoft Learn : nouveautés de Copilot Studio mois par mois", url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new' },
    { name: "Blog Microsoft Copilot : le harness GitHub Copilot en disponibilité générale (2 septembre 2026)", url: 'https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/new-and-improved-github-copilot-harness-agent-skills-and-richer-context/' },
    { name: "Tarifs français de Copilot Studio sur microsoft.com, relevés le 22 octobre 2026", url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio' },
    { name: "Microsoft Learn : Agent 365, registre et contrôle des agents", url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/overview' },
  ],
}
