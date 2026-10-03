// Contenu propre à /formation-chatgpt-paris (guide terrain). Rendu par GeoPage.
// Fonctions ChatGPT vérifiées sur help.openai.com le 03/10/2026 (Company Knowledge, SharePoint, apps, rôles Business, analytique, résidence des données). Chiffres : Paris La Défense (guide 2026), Insee Analyses Île-de-France n° 199.
export default {
  slug: 'formation-chatgpt-paris',
  dateModified: '2026-10-03',
  metaDesc: "Formation ChatGPT Paris : connaissances d'entreprise sur SharePoint et Google Drive, rôles et console d'administration, Business ou Enterprise. Qualiopi.",
  intro: "À Paris, ChatGPT entre dans les sièges par une question de DSI avant d'être une question de prompt : quelles bibliothèques SharePoint ou quels dossiers Google Drive l'outil pourra lire, et qui en décide. La réponse change entre ChatGPT Business et ChatGPT Enterprise. Masteria, organisme certifié Qualiopi fondé à Lyon, intervient dans vos bureaux parisiens ou en classe virtuelle, et prépare la session avec l'administrateur de votre espace de travail pour que chaque exercice tourne sur des sources autorisées.",
  guide: {
    kicker: "Guide terrain Paris",
    h2: "ChatGPT dans un siège parisien : brancher les bonnes sources et régler les droits avant de former",
    lead: "Paris La Défense réunit 200 000 salariés et 2 800 entreprises, dont 75 % de sièges sociaux, selon le guide des entreprises 2026 de l'établissement public qui gère le quartier. Ces sièges décident pour bien plus loin que leurs tours : d'après l'Insee, 21 % des emplois salariés de province dépendaient en 2022 d'un centre de décision francilien. Quand un siège ouvre ChatGPT, il choisit donc les sources et les droits que suivront aussi ses filiales en région. Ce guide décrit ces choix tels que la documentation d'OpenAI les présente en octobre 2026.",
    sections: [
      {
        h3: "Company Knowledge interroge vos sources de travail en respectant leurs droits",
        paras: [
          "Les connaissances d'entreprise prennent la forme d'une extension (plugin) nommée Company Knowledge, disponible sur ChatGPT Business, Enterprise et Edu. Elle répond aux questions propres à votre organisation à partir des sources connectées : SharePoint, Google Drive ou Microsoft Teams quand ces apps sont activées, ou une application interne branchée par MCP (un protocole standard qui relie un outil d'IA à un logiciel). On l'appelle en tapant « @Company Knowledge » dans la conversation, ou depuis le menu +. Chaque salarié n'obtient que ce qu'il peut déjà ouvrir dans la source, et la réponse donne les liens des documents utilisés quand ils existent.",
          "Dans un cabinet de conseil parisien, une consultante peut demander quelles recommandations l'équipe a faites sur la tarification dans les missions de distribution de 2025, et recevoir les présentations concernées avec leurs liens. Deux réflexes restent nécessaires : ouvrir le document cité pour vérifier sa date et sa version, et se rappeler qu'installer l'extension ne connecte aucun compte. Chaque source doit être autorisée, par le salarié ou par l'administrateur selon le mode de connexion.",
          "Sur ChatGPT Business, les apps sont activées par défaut et l'administrateur peut en changer la disponibilité pour tout l'espace de travail. Le réglage par rôle, qui réserve une app à la direction financière ou la ferme aux stagiaires, n'existe que sur Enterprise et Edu, avec des rôles personnalisés. Pour un siège qui veut ouvrir SharePoint à la finance avant le reste de l'entreprise, cette différence peut suffire à choisir l'offre.",
        ],
      },
      {
        h3: "SharePoint se branche de deux façons, réglées à deux endroits différents",
        paras: [
          "La connexion directe passe par le compte Microsoft professionnel de chaque salarié. ChatGPT lit alors le contenu SharePoint et OneDrive professionnel que ce compte peut ouvrir ; le OneDrive personnel n'est pas pris en charge. Un administrateur Microsoft Entra (l'annuaire d'identités de Microsoft) doit approuver les autorisations, Sites.Read.All et Files.Read.All pour la lecture. Les actions d'écriture, comme créer un dossier, déposer un fichier ou gérer des liens de partage, ne fonctionnent que si l'administrateur ChatGPT les active à part. Une liste d'autorisation ou d'exclusion de sites limite les collections concernées.",
          "La synchronisation gérée par l'administrateur, appelée recherche indexée, est réservée à Enterprise et Edu. L'administrateur choisit les sites et dossiers à indexer et peut filtrer selon les étiquettes de sensibilité Purview ; les fichiers dont l'étiquette impose un chiffrement ne sont pas indexés. La limite est de 100 Mo par fichier et d'une seule connexion de ce type par espace de travail, et l'indexation initiale peut prendre plusieurs heures. Elle demande l'autorisation Microsoft Sites.FullControl.All, large, que votre administrateur Entra doit examiner avant d'accepter.",
          "Les groupes sous Google Workspace suivent une logique proche. Sur Business, les actions Google Docs, Sheets et Slides passent par l'app Google Drive et sont activées par défaut ; sur Enterprise, elles restent coupées jusqu'à ce qu'un administrateur les ouvre. La synchronisation gérée de Google Drive peut être limitée à certains drives partagés ou dossiers et exclure des types de fichiers. Une vigilance vaut pour les deux mondes : les exclusions réglées sur l'index ne limitent pas la connexion directe, qui se configure séparément.",
        ],
      },
      {
        h3: "La console d'administration décide qui invite, qui lit les statistiques et ce que l'outil peut écrire",
        paras: [
          "Un espace ChatGPT Business compte quatre rôles. Le propriétaire gère la facturation, l'identité et la configuration ; l'administrateur gère les utilisateurs et les tâches courantes ; le lecteur des statistiques (Analytics Viewer) consulte l'activité de l'espace ; le membre utilise ChatGPT. Deux réglages par défaut surprennent les sièges. Un membre peut inviter d'autres membres, et Business ne permet pas de l'en empêcher. La découverte de l'espace est active : un salarié qui s'inscrit avec son adresse professionnelle vérifiée voit l'espace et peut demander à le rejoindre. Sur Enterprise, cette découverte est désactivée par défaut.",
          "Les autorisations des apps se règlent pour tout l'espace, puis app par app. « Always ask » fait confirmer chaque lecture et chaque modification, « Allow read actions » laisse lire et fait confirmer les changements, « Allow low-risk actions » valide seul les actions jugées à faible risque. Une seconde règle vise les actions que l'éditeur ajoutera plus tard : les activer toutes, n'activer que les lectures, ou n'en activer aucune. Pour un premier déploiement dans un siège, la lecture seule couvre l'essentiel des usages travaillés en formation.",
          "Les statistiques d'Enterprise et Edu vont plus loin que celles de Business. Le tableau de bord suit les utilisateurs actifs, les messages, l'usage des projets, des apps et des compétences, ventilés par groupes SCIM (les groupes synchronisés depuis l'annuaire de l'entreprise). Un onglet compare votre taux d'activation à la médiane de votre secteur, un autre classe les conversations par grands types de tâches et n'affiche jamais un prompt. Les exports CSV couvrent jusqu'à 12 mois, et les données se mettent à jour en 1 à 24 heures.",
        ],
      },
      {
        h3: "Business ou Enterprise : le siège tranche sur l'effectif, l'achat et la localisation des données",
        paras: [
          "ChatGPT Business s'achète en ligne, à partir de 2 sièges et jusqu'à 200 sièges payants pour les espaces créés depuis le 24 août 2026. Le siège Standard est affiché à 25 dollars par utilisateur et par mois en facturation mensuelle, 20 dollars en annuel ; le siège Premium, avec cinq fois plus d'usage, à 125 ou 100 dollars, ces prix pouvant varier selon le pays et la devise. La facture sur bon de commande, le virement, les délais de paiement ou la non-conservation des données relèvent d'une offre contractuelle, donc d'Enterprise. OpenAI ne s'entraîne pas sur les données d'un espace Business.",
          "Enterprise ajoute SCIM (la création et la suppression automatiques des comptes depuis l'annuaire), la plateforme de conformité, qui exporte conversations et événements pour un audit, et les rôles personnalisés. Les nouveaux clients Enterprise et Edu peuvent stocker leurs contenus en Europe, Espace économique européen et Suisse, sans surcoût, et, s'ils sont éligibles, faire exécuter les calculs du modèle dans la même région. Sur Business, le choix de la région de stockage se déploie progressivement au moment de l'achat ; il ne couvre que le stockage, et une copie des échanges reste conservée aux États-Unis pour un temps limité, à des fins de surveillance des abus.",
        ],
        list: [
          "Plus de 200 utilisateurs, ou des filiales à rattacher au même espace : Enterprise.",
          "Achat par bon de commande ou paiement par virement : Enterprise.",
          "Index SharePoint géré par l'administrateur et rôles par direction : Enterprise.",
          "Contenus stockés et traités en Europe : Enterprise ; Business ne couvre que le stockage, en déploiement progressif.",
          "Équipe de quelques personnes, achat par carte, sources connectées par chacun : Business suffit.",
        ],
      },
    ],
    table: {
      caption: "Sièges, conseil et finance à Paris : quelle source brancher, avec quelle offre et quel réglage",
      headers: ["Équipe", "Source à brancher", "Offre minimale", "Réglage à prévoir"],
      rows: [
        ["Contrôle de gestion d'un siège à La Défense", "Bibliothèque SharePoint des reportings des filiales", "Enterprise pour l'index géré, Business pour la connexion directe", "Fichiers sous étiquette chiffrée absents de l'index"],
        ["Cabinet de conseil", "Drives partagés des livrables de mission", "Business", "Drives des missions sous accord de confidentialité exclus"],
        ["Direction juridique d'un groupe", "Site SharePoint des modèles de contrats", "Enterprise", "Sites des dossiers contentieux placés en liste d'exclusion"],
        ["Communication financière", "OneDrive professionnel et SharePoint", "Business", "Actions d'écriture coupées jusqu'à la publication des résultats"],
        ["Direction des achats", "Fichiers fournisseurs rangés dans SharePoint", "Enterprise si l'achat se fait par bon de commande", "Autorisation « Always ask » sur l'app"],
        ["Ressources humaines d'un groupe à filiales", "Google Drive des procédures RH", "Business ou Enterprise", "Découverte de l'espace désactivée, invitations suivies par l'administrateur"],
      ],
    },
    cas: {
      h3: "Cas pratique : préparer le comité de direction mensuel à partir des reportings des filiales",
      contexte: "Prenons une contrôleuse de gestion du siège d'un groupe installé à La Défense. Douze filiales, dont huit en région, déposent chaque mois leur reporting dans une bibliothèque SharePoint. Elle doit remettre le jeudi une note de deux pages au comité de direction. Le groupe travaille sur ChatGPT Enterprise, avec un index SharePoint géré par l'administrateur.",
      etapes: [
        "Vérifier avec l'administrateur que la bibliothèque « Reporting filiales » fait partie du périmètre indexé, et que l'étiquette de sensibilité de ces fichiers n'impose pas de chiffrement : dans ce cas, ils n'apparaîtraient pas.",
        "Ouvrir une conversation, taper « @Company Knowledge » et lancer le prompt ci-dessous.",
        "Ouvrir les liens des fichiers cités et comparer trois chiffres au reporting d'origine.",
        "Demander une version anglaise de la note pour les administrateurs étrangers du groupe, si le comité en compte.",
        "Garder hors de la conversation les données nominatives que contiennent parfois les reportings RH, comme les rémunérations individuelles.",
      ],
      prompt: "Tu prépares la note mensuelle du comité de direction d'un groupe de douze filiales. Utilise uniquement les reportings de septembre 2026 rangés dans la bibliothèque SharePoint « Reporting filiales ».\n\nPremière tâche : pour chaque filiale, relève le chiffre d'affaires du mois, l'écart au budget en valeur et en pourcentage, et le commentaire de sa direction. Présente le tout dans un tableau, avec le lien vers le fichier source sur chaque ligne.\n\nDeuxième tâche : signale les filiales dont le reporting manque, porte sur un autre mois ou affiche un total qui ne correspond pas à la somme de ses lignes.\n\nTroisième tâche : rédige une note de deux pages au plus, en trois parties : les écarts au budget supérieurs à 5 %, les explications données par les filiales, les questions à poser en comité.\n\nN'invente aucun chiffre. Si une information est absente des sources, écris « non renseigné ». Ne reprends aucune donnée individuelle de salarié.",
      resultat: "Vous obtenez un tableau des filiales avec un lien par ligne, la liste des reportings manquants ou incohérents et un projet de note. Si un fichier attendu n'apparaît pas, le premier suspect est le périmètre de l'index ou son délai de mise à jour, à voir avec l'administrateur. La note reste un brouillon : la contrôleuse vérifie les écarts dans les fichiers d'origine avant l'envoi au comité.",
    },
    pieges: [
      { titre: "Croire qu'installer l'extension donne accès aux données", texte: "Company Knowledge s'installe pour un rôle ou pour tout l'espace, et cette installation ne connecte aucun compte. Tant qu'une source n'est pas autorisée, par le salarié ou par un index géré, la réponse reste vide ou s'appuie sur d'autres documents." },
      { titre: "Régler l'index et oublier la connexion directe", texte: "Les exclusions de sites et les filtres d'étiquettes posés sur l'index ne limitent pas la connexion directe. Un salarié connecté avec son propre compte Microsoft peut atteindre d'autres contenus qu'il a le droit d'ouvrir. Les deux réglages se revoient séparément." },
      { titre: "Laisser l'espace ouvert à tout le domaine", texte: "Sur Business, la découverte de l'espace est active par défaut et les membres peuvent inviter d'autres membres. Dans un siège qui paie pour ses filiales, le propriétaire décide qui peut rejoindre l'espace et suit les invitations en attente." },
      { titre: "Confondre stockage en Europe et traitement en Europe", texte: "La région choisie sur Business couvre le stockage des contenus, avec une copie temporaire aux États-Unis pour la surveillance des abus. Le traitement en Europe relève de la résidence d'inférence, réservée aux clients Enterprise et Edu qui ont activé la résidence des données." },
      { titre: "Accepter Sites.FullControl.All sans revue de sécurité", texte: "L'index SharePoint géré demande cette autorisation Microsoft étendue. Elle laisse inchangés les droits des salariés ; votre administrateur Entra et votre RSSI l'examinent tout de même, avec le périmètre des sites à indexer, avant l'approbation." },
    ],
  },
  faq: [
    { q: "Que peut faire ChatGPT pour les équipes finance et conseil d'un siège parisien ?", a: "ChatGPT retrouve et résume ce que l'entreprise a déjà produit. Avec Company Knowledge, un contrôleur de gestion interroge les reportings rangés dans SharePoint et obtient un tableau avec le lien de chaque fichier ; une consultante retrouve les livrables de missions comparables dans les drives partagés. L'outil respecte les droits de la source. La formation porte sur la formulation de ces demandes, la vérification des liens cités et les données à garder hors de l'outil." },
    { q: "ChatGPT peut-il lire nos fichiers SharePoint en respectant ce que chaque salarié a le droit de voir ?", a: "Oui. ChatGPT ne récupère que les contenus que le compte Microsoft du salarié peut déjà ouvrir, et les droits SharePoint, OneDrive et Microsoft 365 continuent de s'appliquer. Sur Enterprise, l'index géré par l'administrateur peut filtrer les fichiers selon leurs étiquettes de sensibilité, et ignore ceux dont l'étiquette impose un chiffrement. Le réglage se fait avec votre administrateur Microsoft Entra, qui approuve les autorisations demandées." },
    { q: "Où sont stockées les conversations ChatGPT d'une entreprise parisienne, et que ne faut-il pas y mettre ?", a: "Sur Enterprise et Edu, les nouveaux clients peuvent stocker leurs contenus dans la région Europe (Espace économique européen et Suisse) et y faire exécuter les calculs. Sur Business, la région de stockage se choisit à l'achat, en déploiement progressif, avec une copie temporaire aux États-Unis pour la surveillance des abus. OpenAI ne s'entraîne pas sur les données de ces offres. Restent hors de l'outil, sauf règle interne écrite : données de santé, informations privilégiées au sens des marchés financiers, dossiers individuels de salariés." },
    { q: "ChatGPT Business ou ChatGPT Enterprise : quelle offre pour un siège à La Défense ?", a: "Business convient à une équipe de 2 à 200 sièges qui achète en ligne, avec des apps activées par défaut et un réglage global. Enterprise devient nécessaire dès qu'il faut des rôles par direction, un index SharePoint géré par l'administrateur, SCIM, la plateforme de conformité, un achat sur bon de commande ou un traitement des données en Europe. Pour un siège qui rattache des filiales en région, Enterprise offre le cadre le plus simple à gouverner." },
    { q: "Qui doit administrer ChatGPT dans un groupe parisien qui a des filiales en région ?", a: "Désignez un propriétaire de l'espace, qui garde la facturation, l'identité et les rôles. Il travaille avec l'administrateur Microsoft Entra ou Google Workspace, qui approuve les autorisations des apps ; OpenAI précise que ces deux rôles peuvent être tenus par des personnes différentes. Un lecteur des statistiques, à la direction de la transformation par exemple, suit l'adoption. Nous pouvons consacrer une séance distincte aux administrateurs avant la formation des utilisateurs." },
    { q: "Comment s'organise une formation ChatGPT dans des bureaux parisiens ou à distance ?", a: "En intra, le formateur vient dans vos locaux, à Paris ou à La Défense, pour un groupe de 12 personnes maximum, chaque participant utilisant son propre accès ChatGPT de l'entreprise. Une semaine avant, nous vérifions avec l'administrateur les apps activées et les sources accessibles. Les équipes réparties entre Paris et la région suivent la même session en classe virtuelle ; un Sprint IA de 3 heures sert à sensibiliser de grands effectifs avant un déploiement." },
    { q: "Combien coûte une formation ChatGPT à Paris et comment la financer ?", a: "Pour un siège parisien, une journée intra revient à 1 980 € HT pour un groupe de 12 personnes au plus, et l'accompagnement individuel d'un administrateur ou d'un dirigeant 1 980 € HT la journée. Le Sprint IA et le déplacement du formateur sont chiffrés au devis. Une banque, un assureur ou un cabinet de conseil relève d'Atlas, qui peut financer la session selon vos fonds puisque Masteria est certifié Qualiopi ; au-delà de 50 salariés, prévoyez aussi une part sur le budget formation interne." },
  ],
  sources: [
    { name: "Paris La Défense : Guide des entreprises 2026", url: "https://www.parisladefense.com/sites/default/files/04.PDF/GUIDES/Entreprise/2026-guide_entreprises_pld_fr.pdf" },
    { name: "Insee Analyses Île-de-France n° 199 : un emploi salarié de province sur cinq dépend d'un centre de décision francilien", url: "https://www.insee.fr/fr/statistiques/8377949" },
    { name: "OpenAI Help Center : Company knowledge in ChatGPT", url: "https://help.openai.com/en/articles/12628342-company-knowledge-in-chatgpt" },
    { name: "OpenAI Help Center : SharePoint app and setup in ChatGPT", url: "https://help.openai.com/en/articles/12143177-sharepoint-app-and-setup-in-chatgpt" },
    { name: "OpenAI Help Center : Admin controls, security, and compliance for plugins and apps", url: "https://help.openai.com/en/articles/11509118-admin-controls-security-and-compliance-for-plugins-and-apps" },
    { name: "OpenAI Help Center : Managing members, seat types, and roles in ChatGPT Business", url: "https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business" },
    { name: "OpenAI Help Center : Workspace analytics for ChatGPT Enterprise and Edu", url: "https://help.openai.com/en/articles/10875114-workspace-analytics-for-chatgpt-enterprise-and-edu" },
    { name: "OpenAI Help Center : ChatGPT Business, Overview", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
    { name: "OpenAI Help Center : Data residency and inference residency for ChatGPT", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
    { name: "OpenAI Help Center : Where your ChatGPT Business content is stored", url: "https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored" },
  ],
}
