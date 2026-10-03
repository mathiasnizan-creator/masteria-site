// Contenu propre à /formation-chatgpt-nantes (guide terrain). Rendu par GeoPage.
// Agents d'espace de travail, tâches planifiées, crédits, grille tarifaire et offre Business vérifiés sur help.openai.com le 03/10/2026 ; confidentialité ChatGPT Business sur openai.com/fr-FR/enterprise-privacy le 03/10/2026.
// Données locales : Nantes Saint-Nazaire Développement, page « Numérique responsable », consultée le 03/10/2026.
export default {
  slug: 'formation-chatgpt-nantes',
  dateModified: '2026-10-03',
  metaDesc: "Formation ChatGPT Nantes : agents d'espace de travail, tâches planifiées et crédits pour le support, le produit et le marketing des éditeurs SaaS. Qualiopi.",
  intro: "Chez un éditeur de logiciels nantais, les mêmes tâches reviennent chaque semaine : trier les tickets, résumer les retours clients, préparer les notes de version, surveiller les concurrents. ChatGPT Business permet d'en faire des agents partagés, lancés à la demande, sur un calendrier ou depuis Slack. Chaque exécution consomme de l'usage puis des crédits, et l'administrateur décide qui construit et qui publie. Masteria, cabinet lyonnais spécialisé en IA, forme vos équipes nantaises sur place ou en classe virtuelle, en bâtissant le premier agent sur vos propres processus.",
  guide: {
    kicker: "Guide terrain Nantes",
    h2: "ChatGPT à Nantes : un agent partagé se pilote comme une fonctionnalité produit, avec des droits et un budget",
    lead: "Selon Nantes Saint-Nazaire Développement, la retailtech nantaise réunit plus de 300 entreprises, qui emploient plus de 2 000 personnes, et l'écosystème numérique du territoire a levé 133 millions d'euros en 2024. Ces éditeurs vivent de processus qui se répètent : un ticket entre, un retour client arrive, une version sort. Les agents d'espace de travail de ChatGPT, réservés aux offres Business et Enterprise, transforment ces routines en outils partagés par toute une équipe. Leur mise en place soulève des questions qu'une équipe produit connaît bien : qui peut publier, avec quel compte l'agent agit, ce que coûte une exécution.",
    sections: [
      {
        h3: "Un agent d'espace de travail réunit des instructions, des apps, des fichiers et des canaux",
        paras: [
          "Un agent se crée depuis l'entrée « Agents » de la barre latérale, à partir d'un modèle ou d'une description en langage courant que le constructeur transforme en plan. On y choisit le modèle et l'effort de raisonnement, puis on ajoute des apps comme Google Drive, Slack, SharePoint ou Google Agenda, des compétences (skills, des procédures réutilisables), des serveurs MCP maison (un protocole qui branche un outil interne) et des fichiers, jusqu'à 512 Mo par fichier et 10 Go par agent. Le bouton « Preview » sert à le tester avant de le créer.",
          "L'agent vit ensuite dans des canaux : ChatGPT, où on l'appelle en tapant @ suivi de son nom, un canal Slack, ou l'API. Son propriétaire choisit qui y accède, lui seul, toute personne de l'organisation qui possède le lien, ou l'annuaire de l'organisation, et invite des collègues avec le droit « Can chat » ou « Can edit ». Un historique des versions permet de republier une version antérieure, et une page d'analytique compte les utilisateurs uniques et les exécutions.",
          "Pour une équipe support nantaise, l'agent type lit la base de connaissances produit déposée en fichiers, propose une catégorie et une priorité pour chaque ticket collé, puis rédige un brouillon de réponse au ton de la marque. Partagé avec le groupe Support, il remplace les consignes que chaque conseiller réécrivait dans ses conversations privées. Ses instructions deviennent un actif de l'équipe, versionné et modifiable par les seuls éditeurs désignés.",
        ],
      },
      {
        h3: "Le calendrier d'un agent et les tâches planifiées répondent à deux besoins différents",
        paras: [
          "Un agent publié peut tourner sur un calendrier : depuis la page de son canal ChatGPT, « Add schedule » fixe la fréquence et des consignes propres à ces exécutions. Une équipe produit s'en sert pour recevoir chaque lundi la synthèse des retours de la semaine, la même pour tous. Les tâches planifiées de ChatGPT, regroupées sur la page « Scheduled », restent individuelles : un rappel, une veille, un résumé quotidien pour une seule personne.",
          "Leurs limites se vérifient avant la formation. Un compte Business garde 10 tâches actives au plus, un compte Enterprise 15, et les offres payantes descendent jusqu'à une exécution par heure. Les tâches déclenchées par un événement, comme un courriel Gmail, un message Slack ou une activité de pull request GitHub, passent par ChatGPT Work, le produit agentique d'OpenAI inclus dans les sièges Business, et plafonnent à 30 exécutions par heure et 720 par jour. Sur Enterprise, l'administrateur doit d'abord activer « Allow event-triggered scheduled tasks ».",
          "Un détail compte pour les équipes marketing : une tâche créée dans un projet n'a accès ni aux fichiers téléversés ni aux fichiers stockés dans ce projet. Une veille concurrentielle qui s'appuie sur un dossier de référence se construit comme un agent, avec ses fichiers attachés et un calendrier hebdomadaire. La tâche planifiée garde son intérêt pour la veille personnelle d'un chargé de marketing sur des sources publiques.",
        ],
      },
      {
        h3: "Chaque exécution d'agent puise dans l'usage inclus, puis dans les crédits de l'espace",
        paras: [
          "Un siège Standard ou Premium de ChatGPT Business inclut un volume d'usage pour les fonctions avancées. Les agents d'espace de travail partagent cette enveloppe et le même pool de crédits avec ChatGPT Work, Codex et les compléments Excel, PowerPoint et Word. Quand l'usage inclus est épuisé, l'activité continue sur les crédits de l'espace si le propriétaire en a acheté ; sinon, la fonction se bloque et l'utilisateur voit un bandeau qui l'invite à solliciter le propriétaire.",
          "La grille tarifaire d'OpenAI facture les agents au volume de texte lu et produit, et une exécution complète consomme en général entre 5 et 25 crédits. Un agent planifié chaque matin ouvré, soit environ 22 exécutions par mois, représente donc de 110 à 550 crédits mensuels une fois l'usage inclus consommé. Le même agent installé dans un canal Slack où il répond à chaque message déclenche une exécution par message.",
          "Les crédits s'achètent dans la facturation de l'espace, par le seul propriétaire, et restent valables douze mois. Le rechargement automatique accepte un plafond mensuel, et propriétaires comme administrateurs fixent des limites mensuelles par type de siège, avec des exceptions par personne. Le propriétaire télécharge des rapports d'usage dans la même rubrique et configure des alertes de consommation. Posez ces limites avant d'ouvrir la création d'agents à toute l'équipe.",
        ],
      },
      {
        h3: "L'administrateur accorde quatre droits distincts, et le compte de connexion engage l'entreprise",
        paras: [
          "Le contrôle d'accès par rôles (RBAC, des droits attribués par rôle plutôt que par personne) de l'espace ChatGPT sépare quatre réglages : utiliser les agents, en construire, les publier dans l'annuaire de l'organisation, et publier des agents qui s'appuient sur des connexions détenues par l'agent. Le dernier est le plus sensible. Sur Enterprise, les agents sont désactivés par défaut au lancement, et l'administrateur les ouvre aux espaces et aux rôles éligibles.",
          "Pour chaque app, le constructeur choisit entre le compte de chaque utilisateur et un compte détenu par l'agent, partagé par tous ceux qui l'exécutent. OpenAI recommande un compte de service dans ce second cas et prévient qu'un compte personnel expose les données de son titulaire à tous les utilisateurs de l'agent. Dans Slack, toutes les apps de l'agent doivent passer par une connexion partagée, et l'app ChatGPT Agents doit être ajoutée au canal, parfois après validation de l'administrateur Slack.",
          "Les actions d'écriture (envoyer, modifier, publier, supprimer) sont réglées par défaut sur « Always ask ». Les contraintes d'action restreignent ce que l'agent peut demander à un connecteur, par exemple un envoi de courriel limité à un domaine ou la lecture d'un seul document Google. Elles se décrivent en langage courant dans le constructeur, qui génère une règle à relire avant de l'ajouter. Elles ne filtrent pas les données que le connecteur renvoie.",
        ],
      },
    ],
    table: {
      caption: "Équipes d'un éditeur SaaS nantais : quel agent, quel déclencheur, quel réglage",
      headers: ["Équipe", "Agent ou tâche", "Déclencheur", "Réglage à vérifier"],
      rows: [
        ["Support niveau 1", "Agent de tri et de brouillon de réponse, base de connaissances en fichiers", "Mention dans un canal Slack", "Réponse aux seules mentions, écritures sur « Always ask »"],
        ["Support niveau 2", "Agent qui prépare la fiche d'escalade d'un incident", "Appel API depuis l'outil de support", "Jeton à portée « Workspace Agents » ; la réponse de l'agent ne remonte pas par l'API"],
        ["Produit", "Agent de synthèse hebdomadaire des retours clients", "Calendrier, chaque lundi", "Connexion Slack partagée sur un compte de service, lecture seule"],
        ["Marketing produit", "Tâche planifiée de veille concurrentielle", "Tâche quotidienne individuelle", "10 tâches actives par compte Business, aucun accès aux fichiers d'un projet"],
        ["Développement", "Tâche déclenchée par une pull request GitHub", "Événement GitHub, via ChatGPT Work", "Activation par l'administrateur sur Enterprise, 720 exécutions par jour au plus"],
        ["Direction des opérations", "Suivi de la consommation des agents", "Revue mensuelle de la facturation", "Limites par type de siège et exceptions par personne"],
      ],
    },
    cas: {
      h3: "Cas pratique : un agent qui prépare la revue hebdomadaire des retours clients",
      contexte: "Prenons une product manager d'un éditeur nantais de logiciels pour le e-commerce. Chaque lundi, elle passe sa matinée à relire le canal Slack où les commerciaux et le support déposent les retours clients, puis à les classer par module avant le comité produit de l'après-midi. L'entreprise a souscrit ChatGPT Business, et l'administrateur a ouvert la construction d'agents au groupe Produit.",
      etapes: [
        "Ouvrir « Agents », choisir « Create », décrire la mission en une phrase, puis passer au constructeur.",
        "Ajouter l'app Slack sur une connexion partagée, avec un compte de service limité au canal des retours, et l'app Google Drive en lecture seule sur le dossier de la feuille de route.",
        "Coller les instructions ci-dessous, puis tester avec « Preview » sur les retours de la semaine précédente.",
        "Partager l'agent avec le groupe Produit en « Can chat », puis ajouter un calendrier le lundi à 9 heures sur le canal ChatGPT.",
        "Après un mois, lire l'analytique de l'agent et la consommation de crédits, puis ajuster la fréquence ou le périmètre.",
      ],
      prompt: "Tu prépares la revue hebdomadaire des retours clients pour le comité produit d'un éditeur de logiciels pour le e-commerce.\n\nSources : les messages des sept derniers jours du canal Slack des retours clients, et le document « Feuille de route » du dossier Drive connecté.\n\nPremière tâche : classe chaque retour dans une seule catégorie parmi bogue, demande d'évolution, question d'usage ou irritant commercial. Rattache-le au module du produit concerné.\n\nDeuxième tâche : regroupe les retours qui décrivent le même besoin. Pour chaque groupe, donne le nombre de mentions, une citation courte et anonymisée, le lien vers le message source et le sujet de la feuille de route qui y répond déjà, s'il existe.\n\nTroisième tâche : liste les cinq groupes les plus cités qui n'ont aucune réponse dans la feuille de route.\n\nRègles : ne mentionne aucun nom de client ni de contact, remplace-les par le secteur du client. N'invente aucun retour. Si un message est ambigu, place-le dans une rubrique « À clarifier » avec la question à poser à son auteur. Ne publie rien dans Slack : ta synthèse s'affiche seulement dans ChatGPT.",
      resultat: "Chaque lundi matin, l'équipe trouve dans ChatGPT une synthèse classée, chiffrée et reliée aux messages d'origine, et le comité consacre sa séance aux priorités. Vérifiez trois liens au hasard chaque semaine pendant le premier mois : un agent qui résume mal un type de retour se trompe de la même façon à chaque exécution. L'agent ne publie pas dans Slack, il n'a donc besoin d'aucun droit d'écriture : retirez-le.",
    },
    pieges: [
      { titre: "Publier un agent branché sur son compte personnel", texte: "Un agent publié avec une connexion détenue par l'agent agit avec les droits de ce compte pour toute personne qui l'exécute. Si c'est votre messagerie ou votre Drive, vos collègues y accèdent par l'agent. Utilisez un compte de service aux droits limités au besoin." },
      { titre: "Laisser l'agent répondre à chaque message d'un canal Slack", texte: "Le mode qui répond à chaque message déclenche une exécution par message, donc une consommation de crédits par message. Dans un canal animé, réservez l'agent aux mentions de son identifiant Slack." },
      { titre: "Croire qu'une contrainte d'action filtre les données", texte: "Une contrainte limite ce que l'agent demande au connecteur. Elle n'empêche pas le connecteur de renvoyer un document confidentiel obtenu par une action autorisée. Le périmètre des données se règle sur le compte connecté." },
      { titre: "Attendre une réponse de l'API", texte: "Un déclenchement par l'API met l'exécution en file d'attente et renvoie le code 202 sans identifiant d'exécution. La réponse de l'agent ne se récupère pas par l'API : votre outil de support doit renvoyer vers ChatGPT ou vers le canal Slack de l'agent." },
      { titre: "Passer les actions d'écriture en « Never ask » trop tôt", texte: "Un agent qui envoie des courriels ou publie dans Slack sans validation diffuse ses erreurs au rythme de son calendrier. Gardez « Always ask » tant que l'agent n'a pas tourné plusieurs semaines sans correction." },
    ],
  },
  faq: [
    { q: "Que peut automatiser une équipe support d'un éditeur SaaS nantais avec ChatGPT ?", a: "Le tri des tickets, les brouillons de réponse appuyés sur la base de connaissances produit, la fiche d'escalade d'un incident et la synthèse hebdomadaire des demandes. Ces usages deviennent des agents d'espace de travail partagés par l'équipe, appelés dans ChatGPT, dans un canal Slack ou par l'outil de support via l'API. La réponse envoyée au client reste validée par un conseiller." },
    { q: "Où vont les données des tickets traités par un agent ChatGPT Business ?", a: "Elles restent dans l'espace de travail de l'entreprise. OpenAI indique ne pas entraîner ses modèles sur les données de ChatGPT Business par défaut. Les administrateurs fixent la durée de conservation et peuvent consulter, exporter et supprimer les conversations ; une conversation supprimée quitte les systèmes d'OpenAI sous 30 jours, sauf exceptions prévues par l'éditeur. Retirez des tickets les mots de passe, les numéros de carte et les données de santé, et ne placez aucune clé d'API dans les instructions d'un agent." },
    { q: "ChatGPT Business ou Enterprise : quelle offre pour un éditeur SaaS nantais ?", a: "Business est une offre en libre-service à partir de deux sièges, Standard ou Premium, avec achat de crédits facultatif. Enterprise répond aux besoins de contrat sur mesure, de pool de crédits négocié et de réglages plus fins : les agents y sont désactivés par défaut au lancement, et les tâches déclenchées par un événement exigent une activation par l'administrateur. La facturation sur bon de commande ou par virement passe aussi par une offre contractuelle." },
    { q: "Combien de crédits consomme un agent ChatGPT planifié chaque jour ?", a: "OpenAI estime qu'une exécution complète d'agent consomme en général entre 5 et 25 crédits, selon le volume de texte lu et produit. Pour un agent lancé chaque matin ouvré, cela représente de 110 à 550 crédits par mois, une fois épuisé l'usage inclus dans les sièges. Les crédits achetés par le propriétaire de l'espace restent valables douze mois, et des limites mensuelles par type de siège évitent les surprises." },
    { q: "Qui autorise la création et la publication d'agents dans un espace ChatGPT ?", a: "Les propriétaires et administrateurs de l'espace, par quatre réglages par rôle : utiliser les agents, en construire, les publier dans l'annuaire, publier avec des connexions détenues par l'agent. L'app des agents pour Slack s'active dans le répertoire des apps de l'espace, et un administrateur Slack peut devoir valider l'accès. Prévoyez sa présence à la formation, au moins pour la première heure." },
    { q: "Comment se déroule une formation ChatGPT à Nantes pour une équipe produit et support ?", a: "Nous intervenons dans vos locaux nantais ou en classe virtuelle, avec 12 participants au plus. La matinée règle les droits, les comptes de connexion et le budget de crédits. L'après-midi, chaque binôme construit un agent sur un processus réel de l'équipe, le teste en aperçu et le partage au groupe. La session est animée par Mathias Nizan ou un formateur du réseau, et le devis précise le déplacement." },
    { q: "Quel budget et quel financement prévoir pour une formation ChatGPT à Nantes ?", a: "Comptez 1 980 € HT par journée de formation, pour l'ensemble du groupe. Les éditeurs de logiciels relèvent souvent de la convention Syntec, rattachée à l'OPCO Atlas, qui peut prendre en charge la formation selon vos fonds. Masteria, certifié Qualiopi, fournit le programme et la convention, et votre entreprise transmet sa demande à l'OPCO avant le premier jour. Le budget des crédits de l'espace ChatGPT est distinct et se règle avec OpenAI." },
  ],
  sources: [
    { name: "Nantes Saint-Nazaire Développement : filière numérique responsable, retailtech et chiffres-clés", url: "https://www.nantes-saintnazaire.fr/filieres/numerique-responsable/" },
    { name: "OpenAI Help Center : ChatGPT Workspace Agents for Enterprise and Business", url: "https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business" },
    { name: "OpenAI Help Center : Scheduled tasks in ChatGPT", url: "https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt" },
    { name: "OpenAI Help Center : ChatGPT Rate Card (Business, Enterprise/Edu credit-based pricing)", url: "https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing" },
    { name: "OpenAI Help Center : Managing credits and spend controls in ChatGPT Business", url: "https://help.openai.com/en/articles/20001155-managing-credits-and-spend-controls-in-chatgpt-business" },
    { name: "OpenAI Help Center : Flexible pricing for the Enterprise, Edu, and Business plans", url: "https://help.openai.com/en/articles/11487671-flexible-pricing-for-the-enterprise-edu-and-business-plans" },
    { name: "OpenAI Help Center : ChatGPT Business, overview", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
    { name: "OpenAI : confidentialité des entreprises (FAQ ChatGPT Business)", url: "https://openai.com/fr-FR/enterprise-privacy/" },
  ],
}
