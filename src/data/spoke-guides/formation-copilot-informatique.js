// Contenu propre à /formation-copilot-informatique (guide terrain, page propre). Rendu par SpokePage.
// Réécrit le 7 octobre 2026. Faits Microsoft : fiche FAITS-OUTILS du 07/10/2026 (Learn licences, présentation,
// sous-traitants IA du 18/09, Cowork du 29/09, notes de version du 06/10, pages tarifs France) et pages Learn
// et GitHub Docs relevées le 28/09 (liens dans `sources`). Cas : etudes-de-cas.js, « industrie ».
export default {
  slug: 'formation-copilot-informatique',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Copilot informatique : déployer, sécuriser et outiller la DSI",
  metaTitle: "Formation Copilot informatique et DSI | Masteria",
  metaDesc: "Formation Copilot pour la DSI : surpartage SharePoint, Purview, modèles d'Anthropic, agents, Cowork, GitHub Copilot et support. Deux jours, Qualiopi.",
  resume: "La formation Copilot informatique prépare une DSI à ouvrir Copilot sans exposer ses données, puis à s'en servir pour le support, l'administration et le développement. Elle couvre le surpartage SharePoint, les stratégies Purview, l'activation des modèles d'Anthropic, la gouvernance des agents et GitHub Copilot. Le parcours compte quatorze heures sur deux jours, pour une DSI (jusqu'à douze places) ou pour un responsable seul, au tarif journalier de 1 980 € HT. Parce que Masteria est certifié Qualiopi, la demande de financement peut partir vers l'OPCO, qui l'étudie avec le barème de la branche.",
  enBref: [
    { label: 'Formation', value: "Copilot côté DSI : préparation du tenant, garde-fous Purview, modèles, agents, support et développement" },
    { label: 'Durée', value: "Quatorze heures en deux journées : le déploiement sûr d'abord, les usages de l'équipe informatique ensuite" },
    { label: 'Formats', value: "Intra pour la DSI, douze personnes au plus, souvent en deux groupes (administrateurs, développeurs), ou individuel ; sur site ou à distance" },
    { label: 'Tarif', value: "1 980 € HT par jour, montant inchangé de un à douze participants" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; la participation de l'OPCO dépend des règles de votre branche et de son budget" },
    { label: 'Prérequis', value: "Pratique de l'administration Microsoft 365 ou du développement ; un tenant de test ou un pilote Copilot est un plus" },
  ],
  prerequis: "Pratique de l'administration Microsoft 365 ou du développement logiciel ; un tenant de test ou un pilote Copilot facilite les ateliers",
  intro: "Une DSI rencontre Copilot deux fois. D'abord comme un service à déployer : licences, partages SharePoint, étiquettes Purview, modèles autorisés, agents à recenser. Ensuite comme un outil de travail pour le support, les administrateurs Microsoft 365 et les développeurs. Cette formation traite les deux, dans cet ordre, parce qu'un pilote lancé sur un tenant mal rangé montre à chacun des documents qu'il n'aurait jamais dû voir. Microsoft Copilot (anciennement Microsoft 365 Copilot) n'invente aucun droit d'accès ; il rend visibles en une question ceux que vos permissions laissaient ouverts.",
  guide: {
    kicker: "Guide terrain DSI",
    h2: "Copilot lit tout ce que vos utilisateurs peuvent ouvrir : la DSI prépare le terrain avant les licences",
    lead: "Le premier chantier d'une DSI se mène dans le Centre d'administration SharePoint et dans le portail Purview, bien avant la première démonstration. Il continue dans les paramètres de Copilot, où se décide l'usage des modèles d'Anthropic, et dans la gouvernance des agents. Le support et les développeurs viennent ensuite, avec d'autres outils et d'autres règles. Au 7 octobre 2026, Microsoft distingue quatre produits sous le même nom : Microsoft Copilot, Copilot Chat, GitHub Copilot et Security Copilot, sans compter Copilot Studio, licencié à part.",
    sections: [
      {
        h3: "Le surpartage SharePoint devient visible dès la première semaine de pilote",
        paras: [
          "La licence Microsoft Copilot s'appuie sur Microsoft Graph et sur Work IQ, le moteur qui relie Copilot aux mails, réunions et fichiers de l'utilisateur, dans la limite de ses permissions ; Work IQ peut être désactivé. Un site partagé avec « Tout le monde sauf les utilisateurs externes » ou un dossier dont l'héritage des droits est rompu deviennent donc des réponses de Copilot.",
          "Microsoft décrit la préparation en trois temps sur Microsoft Learn (page mise à jour le 20 août 2026) : corriger le surpartage, poser des garde-fous, respecter la réglementation. La Gestion avancée de SharePoint (SAM) et Purview font partie de la licence Copilot : vérifiez-le avant d'acheter un outil tiers pour le même inventaire.",
        ],
        list: [
          "Les rapports de gouvernance de l'accès aux données repèrent les sites à audience trop large, l'héritage rompu et les sites sans propriétaire.",
          "La découverte de contenu restreinte retire un site de la découverte de Copilot le temps de le corriger, sans toucher aux accès directs.",
          "Les révisions d'accès confient au propriétaire de chaque site le nettoyage de ses partages, jusqu'au fichier.",
          "Microsoft 365 Archive et les étiquettes de rétention sortent le contenu dormant du champ de Copilot.",
        ],
      },
      {
        h3: "Les étiquettes Purview protègent, à condition de connaître leurs angles morts",
        paras: [
          "Purview propose deux stratégies de prévention des pertes de données (DLP) propres à Copilot. L'une écarte du traitement les fichiers marqués d'une étiquette de confidentialité choisie. L'autre bloque les demandes qui contiennent une donnée sensible, un IBAN par exemple. Un document créé à partir de fichiers étiquetés hérite de l'étiquette la plus prioritaire.",
          "Copilot ne reconnaît pas les étiquettes posées sur les réunions et conversations Teams, et l'étiquette d'une équipe ou d'un site ne descend pas sur les éléments qu'il contient. Pour un fichier chiffré, tout dépend du droit d'usage EXTRACT : sans lui, Copilot ne peut pas afficher le texte.",
          "La recherche web appelle une décision écrite, prise avec le DPO (délégué à la protection des données). Copilot envoie à Bing une requête courte, sans identifiant d'utilisateur ni de tenant, mais ni l'avenant de Microsoft sur la protection des données ni la frontière européenne des données ne couvrent ces requêtes. La stratégie « Allow web search in Copilot » du Cloud Policy service coupe le web pour un groupe, ou seulement en mode Travail.",
        ],
      },
      {
        h3: "Claude reste éteint dans les tenants européens tant qu'un administrateur ne l'allume pas",
        paras: [
          "Copilot repose d'abord sur des modèles d'OpenAI ; Claude, d'Anthropic, s'y ajoute pour la conversation, Researcher, Copilot Studio et les applications Office. Pour les tenants de l'Union européenne, de l'AELE et du Royaume-Uni, Claude reste éteint tant que personne ne l'allume, et ses traitements échappent à l'EU Data Boundary. Seuls un administrateur global ou le titulaire du rôle d'administrateur IA peuvent l'allumer, depuis les réglages de Copilot, rubrique des fournisseurs d'IA qui opèrent comme sous-traitants de Microsoft.",
          "Depuis le 3 avril 2026, un réglage permet aussi de faire d'Anthropic le modèle par défaut dans les applications pour ces régions. Le rôle d'administrateur IA, créé par Microsoft, évite de donner des droits d'administrateur global à la personne qui pilote Copilot. La décision d'activer Claude se documente : quels groupes, pour quels usages, avec l'accord écrit du DPO.",
        ],
      },
      {
        h3: "Agents et Cowork demandent une règle de publication avant l'ouverture",
        paras: [
          "Agent Builder permet à chaque utilisateur sous licence de créer un agent ancré dans ses documents. Copilot Studio construit des agents métier reliés à vos logiciels. Au 7 octobre 2026, Microsoft le facture par pack mensuel de 25 000 crédits à 173,30 € HT, ou en paiement à la consommation ; un agent publié depuis Studio dans Copilot ne coûte rien de plus aux salariés qui ont déjà la licence. Agent 365, disponible depuis le 1er mai 2026, tient le registre des agents dans la console d'administration de Microsoft 365.",
          "Copilot Cowork, que Microsoft documente comme généralement disponible pour les comptes d'entreprise depuis fin septembre 2026, expédie des messages, cale des rendez-vous, produit des documents et poste dans Teams ; l'utilisateur valide chaque action sensible. On peut lui ajouter jusqu'à 50 compétences maison et des plugins de l'App Store Microsoft 365, et chaque usage se paie au-delà de l'abonnement. Depuis le 6 octobre 2026, ses statistiques remontent dans Copilot Analytics, de quoi mesurer la dépense pendant le pilote.",
        ],
      },
      {
        h3: "Le support gagne d'abord sur l'écrit, les développeurs travaillent avec GitHub Copilot",
        paras: [
          "Au support, le temps part dans les textes : fiche de résolution, article de base de connaissances, message de maintenance, compte rendu d'incident. Copilot résume un long fil Outlook ou Teams, et Modifier avec Copilot réécrit un article dans Word en respectant le suivi des modifications. Côté support, Microsoft livre avec Employee Self-Service, un agent conçu dans Copilot Studio, un modèle de départ pour l'informatique ; son connecteur ServiceNow Knowledge reste en préversion.",
          "GitHub Copilot s'achète et s'administre à part, en offres Business ou Enterprise, et la licence Microsoft Copilot n'y donne aucun accès. L'exclusion de contenu masque les fichiers sensibles, avec des limites écrites par GitHub : elle ne s'applique ni aux modes Edit et Agent de la conversation dans l'éditeur, ni aux liens symboliques. Copilot cloud agent, l'agent qui code en arrière-plan, travaille dans un environnement GitHub Actions et prépare une branche puis une pull request.",
        ],
      },
    ],
    table: {
      caption: "Ce que la DSI règle, avec quel outil et à quoi veiller (octobre 2026)",
      headers: ["Tâche", "Fonction ou outil", "Vigilance"],
      rows: [
        ["Repérer les sites surpartagés", "Rapports de gouvernance de l'accès aux données (SAM)", "Les rapports listent, la correction reste manuelle"],
        ["Isoler un site pendant sa correction", "Découverte de contenu restreinte", "Mesure temporaire : les accès directs demeurent"],
        ["Exclure les documents « Secret »", "Stratégie DLP Purview ciblée sur l'étiquette", "Sans effet sur les réunions et conversations Teams"],
        ["Autoriser Claude pour un groupe", "Paramètres de Copilot, sous-traitants d'IA", "Demandes traitées hors de l'EU Data Boundary"],
        ["Couper la recherche web pour un groupe", "« Allow web search in Copilot » (Cloud Policy service)", "Requêtes web hors avenant et hors frontière européenne"],
        ["Suivre la consommation de Cowork", "Copilot Analytics, depuis le 6 octobre 2026", "Usage facturé en plus de la licence"],
        ["Exclure les secrets d'un dépôt", "Exclusion de contenu de GitHub Copilot", "Sans effet en modes Edit et Agent"],
      ],
    },
    cas: {
      h3: "Cas pratique : tester le surpartage avec un compte pilote avant d'ouvrir les licences",
      contexte: "Prenons une ETI de services de 400 postes dont la DSI prépare ses premières licences Copilot Business. L'administrateur Microsoft 365 veut savoir ce qu'un salarié sans droits particuliers verra en posant des questions ordinaires. Le scénario est pédagogique.",
      etapes: [
        "Dans le Centre d'administration SharePoint, il lance les rapports de gouvernance de l'accès aux données et note les dix sites à l'audience la plus large.",
        "Il active la découverte de contenu restreinte sur les sites RH, Direction et Juridique pour la durée de l'audit.",
        "Il prépare un compte de test sans rôle d'administration, membre des seuls groupes d'un acheteur, doté d'une licence Copilot.",
        "Il se connecte avec ce compte à l'application Microsoft Copilot, onglet Travail, et soumet la demande ci-dessous.",
        "Il classe chaque document remonté : accès légitime, lien trop large ou héritage rompu. Le propriétaire corrige au moyen d'une révision d'accès, puis il relance la demande.",
      ],
      prompt: "Je mène un audit interne des droits d'accès avant le déploiement de Copilot. Je travaille au service achats et je n'ai aucun rôle d'administrateur.\n\nCherche dans les fichiers, sites SharePoint, conversations Teams et mails auxquels j'ai accès les documents qui contiennent :\n1. des salaires, primes ou grilles de rémunération nominatives ;\n2. des entretiens annuels, évaluations individuelles ou dossiers disciplinaires ;\n3. des projets de réorganisation, de cession ou d'acquisition ;\n4. des mots de passe, clés d'API ou identifiants ;\n5. des données de santé ou des arrêts de travail.\n\nRends un tableau : nom du fichier, emplacement, catégorie parmi les cinq, et une phrase qui explique pourquoi tu l'as retenu.\n\nNe recopie aucune donnée personnelle : cite seulement le nom du fichier et le type d'information. Si une catégorie ne donne rien, écris « rien trouvé ». N'invente aucun document.",
      resultat: "L'administrateur obtient une liste de fuites potentielles, vue depuis un poste ordinaire, et chaque ligne désigne une permission à corriger. Une liste vide ne prouve rien, car Copilot ne parcourt pas tout le tenant à chaque question. Il recoupe avec les rapports SAM, répète le test avec un profil commercial et un stagiaire, puis supprime le compte de test. Le même exercice se refait après chaque grande réorganisation des sites.",
    },
    pieges: [
      {
        titre: "Acheter le mauvais Copilot",
        texte: "Microsoft Copilot, Copilot Chat, GitHub Copilot et Security Copilot sont quatre produits distincts, et Copilot Studio se licencie à part. Listez les profils avant de parler de licences : bureautique, support, développement, sécurité. Les pages tarifs françaises affichent encore l'ancien nom de la licence, ce qui n'aide pas les acheteurs.",
      },
      {
        titre: "Compter sur l'étiquette d'une équipe Teams",
        texte: "Une équipe étiquetée « Confidentiel » ne transmet pas son étiquette à ses messages. Protégez les échanges sensibles par les permissions de l'équipe et par une stratégie DLP sur les demandes adressées à Copilot.",
      },
      {
        titre: "Activer Claude pour tout le monde en un clic",
        texte: "L'activation des modèles d'Anthropic peut se limiter à certains groupes. Ouvrir l'accès à toute l'organisation envoie hors du périmètre européen des demandes que personne n'a triées. Commencez par un groupe pilote et une note du DPO.",
      },
      {
        titre: "Oublier le CSE dans le calendrier",
        texte: "Dès 50 salariés, l'arrivée d'une technologie nouvelle passe par l'information-consultation du CSE (Code du travail, art. L2312-8). Inscrivez cette étape au calendrier dès le cadrage, avec le service juridique et la DRH.",
      },
    ],
  },
  audience: [
    { title: "Administrateurs Microsoft 365 et responsables sécurité", desc: "Vous préparez l'ouverture des licences Copilot. Vous devez savoir ce que Copilot verra sur vos sites SharePoint, quelles stratégies Purview poser et qui pourra allumer Claude dans le tenant." },
    { title: "Équipes support et centre de services", desc: "Vous rédigez fiches de résolution, articles de base de connaissances et messages d'incident. Vous voulez aussi savoir ce qu'un agent en libre-service peut prendre en charge, et où s'arrête son rôle." },
    { title: "Développeurs et responsables des outils de développement", desc: "Vous utilisez ou administrez GitHub Copilot. Vous devez régler les politiques de l'organisation, l'exclusion de contenu et l'usage de l'agent qui code en arrière-plan." },
  ],
  useCases: [
    { icon: '🔒', title: "Audit du surpartage avant le pilote", desc: "Rapports de gouvernance de l'accès aux données, découverte restreinte et test avec un compte sans droits particuliers." },
    { icon: '🛡️', title: "Garde-fous Purview pour Copilot", desc: "DLP sur les étiquettes et sur les demandes, avec les angles morts documentés : Teams et chiffrement sans droit EXTRACT." },
    { icon: '🧭', title: "Activation encadrée des modèles", desc: "Claude ouvert à un groupe pilote, rôle d'administrateur IA, décision consignée avec le DPO." },
    { icon: '🤖', title: "Agents et Cowork gouvernés", desc: "Règle de publication, registre Agent 365, suivi de la consommation de Cowork dans Copilot Analytics." },
    { icon: '📚', title: "Base de connaissances du support", desc: "Articles de dépannage réécrits dans Word avec Modifier avec Copilot, suivi des modifications activé." },
    { icon: '💻', title: "GitHub Copilot en organisation", desc: "Politiques et modèles autorisés, exclusion de contenu et ses limites, agent cloud qui prépare une pull request." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Cartographier ce que Copilot voit dans le tenant", duration: '1h30',
      description: "L'équipe comprend l'ancrage de Copilot sur les permissions et situe chaque produit Copilot de Microsoft.",
      items: [
        "Copilot Chat et licence Microsoft Copilot : web, contenu fourni, Microsoft Graph et Work IQ",
        "Mentions Basic et Premium dans Word, Excel, PowerPoint et OneNote",
        "Copilot ne crée aucun droit : il rend visibles ceux qui existent",
        "GitHub Copilot, Security Copilot et Copilot Studio : consoles et licences distinctes",
      ],
      exercise: "Vous cartographiez les profils de votre DSI (bureautique, support, développement, sécurité) et l'offre Copilot qui convient à chacun.",
    },
    {
      day: 1, title: "Module 2 · Repérer et contenir le surpartage SharePoint", duration: '2h',
      description: "La Gestion avancée de SharePoint, comprise dans la licence Copilot, sert à trouver et traiter les sites trop ouverts.",
      items: [
        "Rapports de gouvernance de l'accès aux données et évaluation de la gestion de contenu",
        "Sites ouverts à toute l'entreprise, héritage rompu, sites orphelins",
        "Découverte de contenu restreinte ou contrôle d'accès restreint : quand choisir l'une ou l'autre",
        "Révisions d'accès confiées aux propriétaires de sites",
      ],
      exercise: "Vous classez les dix sites les plus exposés de votre tenant et choisissez pour chacun une mesure : correction, découverte restreinte ou archivage.",
    },
    {
      day: 1, title: "Module 3 · Poser les garde-fous Purview et décider des modèles", duration: '2h',
      description: "Les stratégies Purview décident de ce que Copilot peut traiter ; les paramètres de Copilot décident des modèles. Le module couvre les deux.",
      items: [
        "Stratégie DLP qui écarte les fichiers d'une étiquette, stratégie DLP sur les demandes",
        "Héritage d'étiquette, droit d'usage EXTRACT, angles morts Teams",
        "Claude dans un tenant européen : éteint au départ, activable par groupe, traité hors EU Data Boundary",
        "Rôle d'administrateur IA et sélecteur de modèle côté utilisateur",
      ],
      exercise: "Vous rédigez la stratégie DLP Copilot adaptée à votre plan d'étiquetage et la note de décision sur l'activation des modèles d'Anthropic.",
    },
    {
      day: 1, title: "Module 4 · Tester le pilote avec un compte ordinaire", duration: '1h30',
      description: "Avant d'ouvrir les licences, on vérifie depuis un poste sans droits particuliers ce que Copilot fait remonter.",
      items: [
        "Compte de test sans rôle d'administration, onglet Travail de l'application Microsoft Copilot",
        "Demande de détection par catégorie sensible",
        "Explorateur d'activités de DSPM : demandes, réponses et requêtes web",
        "Recoupement avec les rapports SAM et nouveau test après correction",
      ],
      exercise: "Vous exécutez la demande de test sur votre pilote, ou sur un scénario fourni si le pilote n'existe pas encore, et classez chaque document remonté.",
    },
    {
      day: 2, title: "Module 5 · Trancher la recherche web, la traçabilité et le coût des agents", duration: '1h30',
      description: "La DSI écrit ses décisions sur la recherche web, la conservation des échanges et la consommation des agents.",
      items: [
        "Requêtes envoyées à Bing : ce qu'elles contiennent, ce que l'avenant ne couvre pas",
        "Stratégie « Allow web search in Copilot » et ses trois options",
        "Journal d'audit, eDiscovery et durée de conservation",
        "Budget des agents : packs de crédits Copilot Studio, consommation de Cowork lue dans Copilot Analytics",
      ],
      exercise: "Vous rédigez la note de décision sur la recherche web à soumettre à votre DPO.",
    },
    {
      day: 2, title: "Module 6 · Mettre Copilot au service du support", duration: '2h',
      description: "Le support gagne du temps sur ses écrits et cadre un agent en libre-service avant de l'ouvrir aux salariés.",
      items: [
        "Résumé d'un fil Outlook ou Teams avant de reprendre un ticket",
        "Article de base de connaissances réécrit avec Modifier avec Copilot",
        "Message de maintenance et compte rendu d'incident",
        "Employee Self-Service et agent Copilot Studio : droits de l'utilisateur, escalade vers un technicien",
      ],
      exercise: "Vous réécrivez trois articles de votre base de connaissances et définissez les sources autorisées d'un agent de support sur votre site de procédures.",
    },
    {
      day: 2, title: "Module 7 · Administrer GitHub Copilot pour les développeurs", duration: '2h',
      description: "Les réglages de GitHub Copilot se font au niveau de l'organisation, et le travail des agents de code s'encadre.",
      items: [
        "Offres Business et Enterprise, pages Policies et Models de l'organisation",
        "Exclusion de contenu : chemins, motifs, limites en modes Edit et Agent",
        "Copilot cloud agent : branche, environnement GitHub Actions, pull request",
        "Agents tiers Claude et Codex : activation et périmètre",
      ],
      exercise: "Vous rédigez la configuration d'exclusion de contenu d'un de vos dépôts et confiez une tâche de documentation à l'agent cloud sur un dépôt de test.",
    },
    {
      day: 2, title: "Module 8 · Écrire les règles de déploiement de la DSI", duration: '1h30',
      description: "La DSI repart avec les règles qui encadrent Copilot et les agents, et un calendrier pour les trente premiers jours.",
      items: [
        "Règle de publication des agents : création, validation des sources, suppression des orphelins",
        "Registre Agent 365 et rôle d'administrateur IA",
        "Information-consultation du CSE (L2312-8), charte IA de l'entreprise et RGPD",
        "AI Act, article 4 : registre des formations ; plan à trente jours du pilote à l'ouverture",
      ],
      exercise: "Vous rédigez la charte d'usage et la règle de publication des agents de votre organisation, prêtes à passer en comité.",
    },
  ],
  objectives: [
    "Le participant sait repérer les sites SharePoint surpartagés avec les rapports de la Gestion avancée de SharePoint et choisir la mesure adaptée à chacun.",
    "Le participant sait paramétrer une stratégie DLP Purview qui écarte de Copilot les fichiers d'une étiquette donnée.",
    "Le participant sait expliquer les conséquences de l'activation des modèles d'Anthropic pour un tenant européen.",
    "Le participant sait vérifier avec un compte pilote et l'Explorateur d'activités ce que Copilot montre à un salarié ordinaire.",
    "Le participant sait configurer les politiques et l'exclusion de contenu de GitHub Copilot pour une organisation.",
    "Le participant sait rédiger la règle de publication des agents et la charte d'usage de l'entreprise.",
  ],
  faq: [
    {
      q: "Microsoft Copilot, Copilot Chat, GitHub Copilot : de quoi parle-t-on en octobre 2026 ?",
      a: "Dans la documentation actuelle de Microsoft, la licence payante porte le nom de Microsoft Copilot, et la version comprise dans les abonnements celui de Copilot Chat ; l'application répond à l'adresse copilot.cloud.microsoft. Copilot Chat s'appuie sur le web et sur le contenu fourni par l'utilisateur ; la licence ajoute l'ancrage dans les mails, réunions, fichiers et sites. GitHub Copilot et Security Copilot sont des produits distincts, et Copilot Studio se licencie à part. Les pages tarifs françaises affichent encore l'ancien nom.",
    },
    {
      q: "Combien coûtent les licences Microsoft Copilot pour une organisation française ?",
      a: "Au 7 octobre 2026, une grande entreprise paie 26,00 € HT mensuels par siège si elle règle l'année d'avance, ou 27,30 € HT en règlement mois par mois, l'engagement restant annuel. En dessous de 301 sièges, l'offre s'appelle Copilot Business et se greffe sur un abonnement Business Basic, Standard ou Premium. Elle coûte 18,20 € HT mensuels réglés à l'année, 21,84 € HT réglés au mois ; un client déjà sous Microsoft 365 qui s'engage avant la fin de 2026 obtient 15,60 € HT pour sa première année. Microsoft 365 E7 inclut la licence. Cowork et Copilot Studio se paient en plus.",
    },
    {
      q: "Faut-il un abonnement E5 pour gouverner Copilot ?",
      a: "Non. Microsoft indique que les fonctions de base de Purview décrites dans son plan de préparation sont comprises dans Microsoft 365 E3 ou Office 365 E3. E5 ajoute des fonctions plus poussées, comme la gestion des risques internes. La Gestion avancée de SharePoint fait partie de la licence Copilot. Agent 365 recommande E5 comme prérequis, ce qui pèse dans la décision si la DSI veut un registre centralisé des agents.",
    },
    {
      q: "Peut-on utiliser Claude dans Copilot sans sortir des données de l'Europe ?",
      a: "Non, pas complètement. Dans un tenant européen, Claude est éteint au départ ; une fois allumé, ce qui lui est confié échappe à l'EU Data Boundary, l'engagement de Microsoft de traiter dans l'Union les données de ses clients européens. L'activation se fait dans les paramètres de Copilot, par un profil d'administration habilité, et peut viser quelques groupes seulement. La formation aide à rédiger la note qui justifie ce choix devant le DPO.",
    },
    {
      q: "Peut-on empêcher Copilot de lire certains documents sans toucher aux droits d'accès ?",
      a: "Oui, par trois moyens. La découverte de contenu restreinte retire un site entier de la découverte de Copilot. Une stratégie DLP Purview écarte les fichiers qui portent une étiquette donnée. Microsoft 365 Archive et les étiquettes de rétention sortent le contenu ancien du champ de Copilot. Dans les trois cas, les utilisateurs gardent l'accès direct aux fichiers, ce qui laisse le temps de corriger les permissions sans bloquer le travail.",
    },
    {
      q: "Les administrateurs peuvent-ils consulter les demandes des utilisateurs ?",
      a: "Oui. Les interactions avec Copilot figurent dans le journal d'audit et dans eDiscovery. L'Explorateur d'activités de DSPM, dans Purview, affiche la demande, la réponse et les requêtes web envoyées à Bing. Ce contrôle doit être annoncé aux salariés dans la charte d'usage de l'IA avant l'ouverture des licences, et la durée de conservation des journaux se fixe à l'avance avec le DPO.",
    },
    {
      q: "GitHub Copilot peut-il travailler sur nos dépôts sans lire nos secrets ?",
      a: "L'exclusion de contenu, disponible en Business et Enterprise, empêche GitHub Copilot de lire les chemins que vous listez. Elle ne s'applique pas aux modes Edit et Agent de la conversation dans l'éditeur, ni aux liens symboliques. Gardez donc les secrets hors du code, dans un coffre dédié, et utilisez l'exclusion en complément. L'agent cloud, qui travaille dans GitHub Actions, se cantonne à une branche et passe par une pull request que vous relisez.",
    },
    {
      q: "Qui peut payer la formation Copilot de la DSI ?",
      a: "Votre OPCO peut étudier le dossier : la certification Qualiopi de Masteria couvre la catégorie des actions de formation ; il décide d'après son barème et l'argent dont il dispose. Le tarif reste de 1 980 € HT par jour, pour une équipe de douze comme pour un responsable seul. Un parcours DSI se scinde souvent en deux groupes, administrateurs d'un côté et développeurs de l'autre, avec un tronc commun d'une demi-journée sur les données et la gouvernance.",
    },
  ],
  tarifs: {
    titre: "Ce que la DSI obtient pour ce prix",
    paras: [
      "Le formateur prépare la session avec un administrateur de votre tenant : licences en place, état des rapports SAM, plan d'étiquetage Purview, décision ou non sur les modèles d'Anthropic, et, côté développement, l'organisation GitHub concernée. Les ateliers se déroulent sur un tenant de test, sur votre pilote ou sur des scénarios fournis, selon ce que votre politique de sécurité autorise.",
      "Exemple : une DSI forme six administrateurs et techniciens support le premier jour, puis six développeurs le second, avec un tronc commun le matin. Le parcours de deux jours se facture 3 960 € HT au total, soit 330 € HT par participant. Un responsable sécurité seul peut suivre le parcours en tête-à-tête, au même prix journalier. Le dossier part ensuite à l'OPCO, qui l'examine avec le barème de la branche.",
    ],
  },
  apres: {
    titre: "Après la formation, des agents construits dans votre tenant",
    texte: "Une fois les garde-fous posés, Masteria peut construire avec votre DSI un agent de support relié à votre base de connaissances, un agent Copilot Studio branché sur votre outil de tickets, ou une compétence Cowork qui prépare le rapport hebdomadaire des incidents. Chaque agent est testé sur vos cas, documenté pour l'équipe qui le fera vivre et inscrit dans votre règle de publication. Le prix, forfaitaire, se fixe après un cadrage du besoin ; ce développement d'agents n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Dites-nous où en est votre pilote Copilot : nous partons de l'état de votre tenant.",
    fin: {
      titre: "Construisons la session à partir de votre tenant",
      texte: "Indiquez-nous le nombre d'administrateurs, de techniciens et de développeurs à former, les licences en place et la date prévue d'ouverture de Copilot. Masteria vous répond avec un programme calé sur votre calendrier de déploiement.",
    },
  },
  terrain: {
    titre: "Dans un groupe industriel, le périmètre de Copilot a été fixé avec le Data manager avant toute session",
    texte: "Les équipes informatiques d'un groupe international du packaging ont retenu Copilot à la place de leur assistant conversationnel maison, avec un déploiement à l'échelle du groupe pendant une migration vers S/4HANA. Avant les sessions des managers pilotes, Masteria a fixé avec le Data manager une règle simple : Copilot n'irait chercher que dans OneDrive et SharePoint, jamais dans les serveurs de fichiers partagés ; les licences de chaque participant ont été vérifiées avant le premier jour. Le Data manager porte depuis la politique d'usage, et le dispositif part vers les États-Unis et le Mexique en octobre 2026, puis l'Inde en décembre.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  liensAssocies: [
    { label: "Toutes les formations Microsoft Copilot", href: '/formation-microsoft-copilot' },
    { label: "Formation IA pour les équipes informatiques, tous outils", href: '/formation-ia-informatique' },
    { label: "Construire des agents IA en deux jours", href: '/formation-agents-ia' },
    { label: "Gouvernance de l'IA : les règles à poser dans l'entreprise", href: '/formation-gouvernance-ia' },
    { label: "Claude pour les équipes techniques", href: '/formation-claude-informatique' },
  ],
  sources: [
    { name: "Microsoft Learn : préparer des données sécurisées et gouvernées pour Copilot (mise à jour du 20 août 2026)", url: "https://learn.microsoft.com/fr-fr/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot" },
    { name: "Microsoft Learn, en anglais : licences Microsoft Copilot, Copilot Business et E7", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing" },
    { name: "Microsoft Learn, en anglais : présentation de Copilot, quatre produits et Work IQ", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
    { name: "Microsoft Learn, en anglais : activer Anthropic comme sous-traitant (18 septembre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
    { name: "Microsoft Learn, en anglais : réglages de la recherche web pour les administrateurs", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access" },
    { name: "Microsoft Learn, en anglais : Purview face à Copilot (étiquettes, EXTRACT, héritage)", url: "https://learn.microsoft.com/en-us/purview/ai-m365-copilot-considerations" },
    { name: "Microsoft Learn, en anglais : Copilot Cowork (29 septembre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
    { name: "Microsoft : Copilot Studio, prix en France (relevé du 7 octobre 2026)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio" },
    { name: "Microsoft Learn, en anglais : présentation d'Agent 365", url: "https://learn.microsoft.com/en-us/microsoft-agent-365/overview" },
    { name: "Microsoft Learn : Employee Self-Service pour le support informatique", url: "https://learn.microsoft.com/fr-fr/microsoft-365/copilot/employee-self-service/overview" },
    { name: "GitHub Docs, en anglais : les offres GitHub Copilot", url: "https://docs.github.com/en/copilot/get-started/plans" },
    { name: "GitHub Docs, en anglais : exclusion de contenu et ses limites", url: "https://docs.github.com/en/copilot/concepts/context/content-exclusion" },
    { name: "GitHub Docs, en anglais : l'agent cloud de GitHub Copilot", url: "https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent" },
    { name: "Légifrance : le CSE consulté sur les technologies nouvelles (L2312-8)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196" },
  ],
}
