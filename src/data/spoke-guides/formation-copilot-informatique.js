// Contenu propre à /formation-copilot-informatique (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-copilot-informatique',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Copilot pour la DSI : surpartage SharePoint, étiquettes Purview, agents, GitHub Copilot et support informatique. Qualiopi, finançable OPCO.",
  intro: "Une DSI rencontre Copilot deux fois. D'abord comme un service à déployer : licences, surpartage SharePoint, étiquettes Purview, agents à recenser. Ensuite comme un outil de travail pour le support, les administrateurs Microsoft 365 et les développeurs. Cette formation traite les deux, dans cet ordre, parce qu'un pilote lancé sur un tenant mal rangé montre à chacun des documents qu'il n'aurait jamais dû voir.",
  guide: {
    kicker: "Guide terrain DSI",
    h2: "Copilot lit tout ce que vos utilisateurs peuvent ouvrir : la DSI prépare le terrain avant les licences",
    lead: "Copilot ne crée aucun droit d'accès. Il rend visible, en une question, ce que les permissions SharePoint laissaient ouvert depuis des années. Le premier chantier d'une DSI se mène donc dans le Centre d'administration SharePoint et dans le portail Purview, bien avant la première démonstration. Le support et les développeurs viennent ensuite, avec d'autres outils et d'autres règles.",
    sections: [
      {
        h3: "Le surpartage devient visible dès la première semaine de pilote",
        paras: [
          "Microsoft a renommé son offre sous licence « Microsoft Copilot » (l'ancien Microsoft 365 Copilot) et sa version incluse « Microsoft Copilot Chat ». La version sous licence s'appuie sur Work IQ, le moteur qui relie Copilot aux mails, réunions et fichiers de l'utilisateur, dans la limite de ses permissions. Un site partagé avec « Tout le monde sauf les utilisateurs externes » ou un dossier à l'héritage rompu deviennent donc des réponses de Copilot.",
          "Microsoft décrit la préparation en trois étapes sur Microsoft Learn (mise à jour du 20 août 2026) : corriger le surpartage, installer des garde-fous, respecter la réglementation. La Gestion avancée de SharePoint (SAM) est incluse avec les licences Copilot : vérifiez-le avant d'acheter un outil tiers pour le même inventaire.",
        ],
        list: [
          "Les rapports de gouvernance de l'accès aux données repèrent les sites à audience trop large, l'héritage rompu et les sites sans propriétaire.",
          "La découverte de contenu restreinte (RCD) retire un site de la découverte de Copilot le temps de le corriger. Les accès directs ne changent pas.",
          "Les révisions d'accès au site confient au propriétaire le nettoyage de ses accès, jusqu'au fichier.",
          "Microsoft 365 Archive et les étiquettes de rétention sortent le contenu dormant du champ de Copilot.",
        ],
      },
      {
        h3: "Les étiquettes Purview protègent à condition de connaître leurs angles morts",
        paras: [
          "Purview propose deux stratégies DLP (prévention des pertes de données) propres à Copilot. L'une exclut du traitement les fichiers qui portent une étiquette de confidentialité donnée. L'autre bloque les prompts qui contiennent une donnée sensible, un IBAN par exemple. Un document créé à partir de fichiers étiquetés hérite de l'étiquette la plus prioritaire.",
          "Copilot ne reconnaît pas les étiquettes des réunions et conversations Teams. L'étiquette d'une équipe ou d'un site ne descend pas sur les éléments qu'il contient. Pour un fichier chiffré, tout dépend du droit d'usage EXTRACT : sans lui, Copilot ne peut pas afficher le texte.",
          "La recherche web demande une décision écrite avec votre délégué à la protection des données. Copilot envoie à Bing une requête courte, sans identifiant d'utilisateur ni de tenant, mais ni le DPA de Microsoft ni la frontière des données de l'UE ne couvrent ces requêtes. La stratégie « Allow web search in Copilot » du Cloud Policy service coupe le web pour un groupe, ou seulement en mode Travail.",
        ],
      },
      {
        h3: "Le support informatique gagne d'abord sur l'écrit et sur la base de connaissances",
        paras: [
          "Au support, le temps part dans les textes : fiche de résolution, article de base de connaissances, message de maintenance, compte rendu d'incident. Copilot résume un long fil Outlook ou Teams, et Modifier avec Copilot réécrit un article dans Word en respectant le suivi des modifications.",
          "L'agent Employee Self-Service, construit sur Copilot Studio, propose un modèle de départ pour l'informatique ; son connecteur ServiceNow Knowledge reste en préversion. Un agent Copilot Studio qui lit SharePoint répond avec les droits de la personne qui l'interroge : un site de procédures trop ouvert se retrouve cité. Agent 365, disponible depuis le 1er mai 2026, tient le registre des agents dans le Centre d'administration Microsoft 365.",
        ],
      },
      {
        h3: "Les développeurs travaillent avec GitHub Copilot, un produit distinct",
        paras: [
          "GitHub Copilot s'achète et s'administre à part, en offres Business ou Enterprise pour les organisations. Une licence Microsoft Copilot n'y donne aucun accès. Les réglages se trouvent dans GitHub : Settings de l'organisation, rubrique Copilot, pages Policies et Models.",
          "L'exclusion de contenu (Content exclusion) masque les fichiers sensibles, avec des limites écrites par GitHub : elle ne s'applique ni aux modes Edit et Agent de Copilot Chat dans l'éditeur, ni aux liens symboliques. Copilot cloud agent, l'agent qui code en arrière-plan, travaille dans un environnement GitHub Actions et prépare une branche puis une pull request.",
        ],
      },
    ],
    table: {
      caption: "Tâches de DSI, fonction à utiliser et point de vigilance (septembre 2026)",
      headers: ["Tâche", "Fonction ou outil", "Vigilance"],
      rows: [
        ["Repérer les sites surpartagés", "Rapports de gouvernance de l'accès aux données (SAM)", "Les rapports listent ; la correction reste manuelle."],
        ["Isoler un site pendant sa correction", "Découverte de contenu restreinte", "Mesure temporaire : les accès directs demeurent."],
        ["Exclure les documents « Secret »", "Stratégie DLP Purview ciblée sur l'étiquette", "Sans effet sur Teams."],
        ["Couper la recherche web pour un groupe", "« Allow web search in Copilot » (Cloud Policy service)", "Requêtes hors frontière des données de l'UE."],
        ["Conserver les échanges pour un audit", "Audit, eDiscovery, Explorateur d'activités DSPM", "Fixer d'abord la durée de conservation."],
        ["Exclure les secrets d'un dépôt", "Content exclusion de GitHub Copilot", "Non appliquée en modes Edit et Agent."],
      ],
    },
    cas: {
      h3: "Cas pratique : tester le surpartage avec un compte pilote avant d'ouvrir les licences",
      contexte: "Prenons une ETI de 400 postes dont la DSI prépare ses premières licences Copilot. L'administrateur Microsoft 365 veut savoir ce qu'un salarié sans droits particuliers verra en posant des questions ordinaires. Le scénario est pédagogique.",
      etapes: [
        "Dans le Centre d'administration SharePoint, lancez les rapports de gouvernance de l'accès aux données et notez les dix sites à l'audience la plus large.",
        "Activez la découverte de contenu restreinte sur les sites RH, Direction et Juridique pour la durée de l'audit.",
        "Préparez un compte de test sans rôle d'administration, membre des seuls groupes d'un acheteur, avec une licence Copilot.",
        "Connectez-vous avec ce compte à l'application Microsoft Copilot, onglet Travail, et collez le prompt ci-dessous.",
        "Classez chaque document remonté : accès légitime, lien trop large ou héritage rompu. Faites corriger par le propriétaire avec une révision d'accès, puis relancez le prompt.",
      ],
      prompt: "Je prépare un audit interne des droits d'accès avant le déploiement de Copilot. Je travaille au service achats et je n'ai aucun rôle d'administrateur.\n\nCherche dans les fichiers, sites SharePoint, conversations Teams et e-mails auxquels j'ai accès les documents qui contiennent :\n1. des salaires, primes ou grilles de rémunération nominatives ;\n2. des entretiens annuels, évaluations individuelles ou dossiers disciplinaires ;\n3. des projets de réorganisation, de cession ou d'acquisition ;\n4. des mots de passe, clés d'API ou identifiants ;\n5. des données de santé ou des arrêts de travail.\n\nPrésente le résultat dans un tableau : nom du fichier, emplacement, catégorie parmi les cinq, et une phrase qui explique pourquoi tu l'as retenu.\n\nNe recopie aucune donnée personnelle : cite seulement le nom du fichier et le type d'information. Si une catégorie ne donne rien, écris « rien trouvé ». N'invente aucun document.",
      resultat: "Vous obtenez une liste de fuites potentielles, vue depuis un poste ordinaire. Chaque ligne signale une permission à corriger. Une liste vide ne prouve rien : Copilot ne parcourt pas tout le tenant à chaque question. Recoupez avec les rapports SAM, répétez le test avec un profil commercial et un stagiaire, puis supprimez le compte de test.",
    },
    pieges: [
      {
        titre: "Acheter le mauvais Copilot",
        texte: "Microsoft Copilot, Copilot Chat, GitHub Copilot et Security Copilot sont quatre produits distincts. Listez les profils avant de parler de licences : bureautique, support, développement, sécurité.",
      },
      {
        titre: "Compter sur l'étiquette d'une équipe Teams",
        texte: "Une équipe étiquetée « Confidentiel » ne transmet pas son étiquette à ses messages. Protégez les échanges sensibles par les permissions de l'équipe et par la DLP sur les invites.",
      },
      {
        titre: "Ouvrir Copilot Studio sans règle de publication",
        texte: "Chaque agent répète ce que ses sources SharePoint laissent voir. Décidez avant l'ouverture qui crée, qui valide les sources de connaissances et qui supprime les agents orphelins.",
      },
      {
        titre: "Oublier le CSE dans le calendrier",
        texte: "Dans une entreprise d'au moins 50 salariés, l'introduction d'une nouvelle technologie relève de l'information-consultation du CSE (article L2312-8 du Code du travail). Inscrivez cette étape au calendrier dès le cadrage, avec votre service juridique.",
      },
    ],
  },
  audience: [
    {
      "title": "Administrateurs Microsoft 365 et responsables sécurité",
      "desc": "Vous préparez l'ouverture des licences Copilot. Vous devez savoir ce que Copilot verra sur vos sites SharePoint et quelles stratégies Purview poser avant le pilote."
    },
    {
      "title": "Équipes support et service desk",
      "desc": "Vous rédigez fiches de résolution, articles de base de connaissances et messages d'incident. Vous voulez aussi savoir ce qu'un agent en libre-service peut prendre en charge."
    },
    {
      "title": "Développeurs et responsables des outils de développement",
      "desc": "Vous utilisez ou administrez GitHub Copilot. Vous devez régler les politiques de l'organisation, l'exclusion de contenu et l'usage du cloud agent."
    }
  ],
  useCases: [
    {
      "icon": "🔒",
      "title": "Audit du surpartage avant le pilote",
      "desc": "Rapports de gouvernance de l'accès aux données, découverte de contenu restreinte et test avec un compte sans droits particuliers."
    },
    {
      "icon": "🛡️",
      "title": "Stratégies Purview pour Copilot",
      "desc": "DLP sur les étiquettes de confidentialité et sur les prompts, avec les angles morts documentés par Microsoft : Teams et chiffrement sans droit EXTRACT."
    },
    {
      "icon": "📚",
      "title": "Base de connaissances du support",
      "desc": "Réécrire un article de dépannage dans Word avec Modifier avec Copilot, suivi des modifications activé."
    },
    {
      "icon": "🤖",
      "title": "Agent de support en libre-service",
      "desc": "Cadrer un agent Copilot Studio ou l'agent Employee Self-Service : sources SharePoint, droits de l'utilisateur, escalade vers un technicien."
    },
    {
      "icon": "💻",
      "title": "GitHub Copilot en organisation",
      "desc": "Réglages Policies et Models, exclusion de contenu et ses limites, cloud agent qui prépare une pull request."
    },
    {
      "icon": "📋",
      "title": "Registre et gouvernance des agents",
      "desc": "Recenser les agents dans Agent 365 et décider qui les crée, qui valide leurs sources et qui les supprime."
    }
  ],
  modules: [
    {
      "day": 1,
      "title": "Module 1 · Ce que Copilot voit dans votre tenant",
      "duration": "1h30",
      "description": "Comprendre l'ancrage de Microsoft Copilot sur Work IQ et sur les permissions, et situer chaque offre Copilot de Microsoft.",
      "items": [
        "Copilot Chat et licence Microsoft Copilot : web, contenu fourni, Work IQ",
        "Mentions Basic et Premium dans Word, Excel, PowerPoint et OneNote",
        "Copilot ne crée aucun droit : il rend visibles ceux qui existent",
        "GitHub Copilot et Security Copilot : produits, consoles et licences distincts"
      ],
      "exercise": "Cartographier les profils de votre DSI (bureautique, support, développement, sécurité) et l'offre Copilot qui correspond à chacun."
    },
    {
      "day": 1,
      "title": "Module 2 · Repérer et contenir le surpartage SharePoint",
      "duration": "2h",
      "description": "Utiliser la Gestion avancée de SharePoint, incluse avec les licences Copilot, pour trouver et traiter les sites trop ouverts.",
      "items": [
        "Rapports de gouvernance de l'accès aux données et évaluation de la gestion de contenu",
        "Sites ouverts à « Tout le monde sauf les utilisateurs externes », héritage rompu, sites sans propriétaire",
        "Découverte de contenu restreinte et contrôle d'accès restreint : quand choisir l'une ou l'autre",
        "Révisions d'accès au site confiées aux propriétaires"
      ],
      "exercise": "Classer les dix sites les plus exposés de votre tenant et choisir pour chacun une mesure : correction, découverte restreinte ou archivage."
    },
    {
      "day": 1,
      "title": "Module 3 · Poser les garde-fous Purview pour Copilot",
      "duration": "2h",
      "description": "Configurer les stratégies qui décident de ce que Copilot peut traiter, et connaître les cas qu'elles ne couvrent pas.",
      "items": [
        "Stratégie DLP qui exclut les fichiers d'une étiquette de confidentialité",
        "Stratégie DLP sur les invites qui contiennent des données sensibles",
        "Héritage d'étiquette et droit d'usage EXTRACT",
        "Angles morts : réunions et conversations Teams, étiquettes de conteneur"
      ],
      "exercise": "Rédiger la stratégie DLP Copilot adaptée à votre plan d'étiquetage et lister les cas qu'elle ne couvre pas."
    },
    {
      "day": 1,
      "title": "Module 4 · Tester le pilote avec un compte ordinaire",
      "duration": "1h30",
      "description": "Vérifier depuis un poste sans droits particuliers ce que Copilot remonte, avant d'ouvrir les licences.",
      "items": [
        "Compte de test sans rôle d'administration, onglet Travail de l'application Microsoft Copilot",
        "Prompt de détection par catégorie sensible",
        "Explorateur d'activités DSPM : prompts, réponses et requêtes web",
        "Recoupement avec les rapports SAM et nouveau test après correction"
      ],
      "exercise": "Exécuter le prompt de test sur votre pilote, ou sur un scénario fourni si votre pilote n'existe pas encore, et classer chaque document remonté."
    },
    {
      "day": 2,
      "title": "Module 5 · Décider de la recherche web et de la traçabilité",
      "duration": "1h30",
      "description": "Prendre une décision écrite sur la recherche web de Copilot et sur la conservation des échanges.",
      "items": [
        "Requêtes générées vers Bing : ce qu'elles contiennent et ce qu'elles excluent",
        "Stratégie « Allow web search in Copilot » et ses trois options",
        "DPA et frontière des données de l'UE : ce qui ne s'applique pas aux requêtes web",
        "Audit, eDiscovery et durée de conservation des journaux"
      ],
      "exercise": "Rédiger la note de décision sur la recherche web destinée à votre délégué à la protection des données."
    },
    {
      "day": 2,
      "title": "Module 6 · Mettre Copilot au service du support",
      "duration": "2h",
      "description": "Gagner du temps sur les écrits du support et cadrer un agent en libre-service.",
      "items": [
        "Résumer un fil Outlook ou Teams avant de reprendre un ticket",
        "Réécrire un article de base de connaissances avec Modifier avec Copilot",
        "Rédiger un message de maintenance et un compte rendu d'incident",
        "Agent Employee Self-Service et agent Copilot Studio sur SharePoint : droits de l'utilisateur et escalade"
      ],
      "exercise": "Réécrire trois articles de votre base de connaissances et définir les sources autorisées d'un agent de support sur votre site de procédures."
    },
    {
      "day": 2,
      "title": "Module 7 · Administrer GitHub Copilot pour vos développeurs",
      "duration": "2h",
      "description": "Régler GitHub Copilot au niveau de l'organisation et encadrer le travail des agents de code.",
      "items": [
        "Offres Business et Enterprise, pages Policies et Models de l'organisation",
        "Exclusion de contenu : chemins, motifs, limites en modes Edit et Agent",
        "Copilot cloud agent : branche, environnement GitHub Actions, pull request",
        "Agents tiers Anthropic Claude et OpenAI Codex : activation et périmètre"
      ],
      "exercise": "Rédiger la configuration d'exclusion de contenu d'un de vos dépôts et confier une tâche de documentation au cloud agent sur un dépôt de test."
    },
    {
      "day": 2,
      "title": "Module 8 · Fixer les règles de déploiement de la DSI",
      "duration": "1h30",
      "description": "Écrire les règles qui encadrent l'usage de Copilot et des agents dans l'entreprise.",
      "items": [
        "Règle de publication des agents : création, validation des sources, suppression des orphelins",
        "Registre Agent 365 dans le Centre d'administration Microsoft 365",
        "Information-consultation du CSE (article L2312-8) et charte d'usage",
        "Maîtrise de l'IA (article 4 de l'AI Act) : garder la trace des formations"
      ],
      "exercise": "Rédiger la charte d'usage et la règle de publication des agents de votre organisation, prêtes à passer en comité."
    }
  ],
  objectives: [
    "Identifier les sites SharePoint surpartagés avec les rapports de la Gestion avancée de SharePoint et choisir la mesure adaptée à chacun",
    "Paramétrer une stratégie DLP Purview qui exclut de Copilot les fichiers d'une étiquette donnée",
    "Vérifier avec un compte pilote et l'Explorateur d'activités DSPM ce que Copilot montre à un salarié ordinaire",
    "Rédiger une décision argumentée sur la recherche web de Copilot",
    "Configurer les politiques et l'exclusion de contenu de GitHub Copilot pour une organisation",
    "Rédiger la règle de publication des agents et la charte d'usage de l'entreprise"
  ],
  faq: [
    {
      q: "Microsoft 365 Copilot, Microsoft Copilot, Copilot Chat : de quoi parle-t-on en septembre 2026 ?",
      a: "Microsoft a renommé Microsoft 365 Copilot en Microsoft Copilot, et Microsoft 365 Copilot Chat en Microsoft Copilot Chat. Copilot Chat est inclus dans les abonnements Microsoft 365 éligibles et s'appuie sur le web et sur le contenu que l'utilisateur fournit. La licence ajoute l'ancrage sur les mails, réunions, fichiers et sites via Work IQ, et un accès prioritaire. Dans Word et Excel, une mention « Basic » ou « Premium » indique à chacun l'expérience dont il dispose.",
    },
    {
      q: "Faut-il un abonnement E5 pour gouverner Copilot ?",
      a: "Non. Microsoft indique que les fonctions de base de Purview décrites dans son plan de préparation sont incluses dans Microsoft 365 E3 ou Office 365 E3. E5 ajoute des fonctions plus poussées, comme la gestion des risques internes. La Gestion avancée de SharePoint est incluse avec les licences Copilot. Agent 365 recommande E5 comme prérequis.",
    },
    {
      q: "Peut-on empêcher Copilot de lire certains documents sans toucher aux droits d'accès ?",
      a: "Oui, par trois moyens. La découverte de contenu restreinte retire un site entier de la découverte de Copilot. Une stratégie DLP Purview exclut les fichiers qui portent une étiquette donnée. Microsoft 365 Archive et les étiquettes de rétention sortent le contenu ancien du champ de Copilot. Dans les trois cas, les utilisateurs gardent l'accès direct aux fichiers.",
    },
    {
      q: "Les administrateurs peuvent-ils consulter les prompts des utilisateurs ?",
      a: "Oui. Les interactions Copilot figurent dans le journal d'audit et dans eDiscovery. L'Explorateur d'activités de DSPM, dans Purview, affiche le prompt, la réponse et les requêtes web envoyées à Bing. Prévenez les salariés de ce contrôle dans la charte d'usage de l'IA avant d'ouvrir les licences.",
    },
    {
      q: "GitHub Copilot peut-il travailler sur nos dépôts sans lire nos secrets ?",
      a: "L'exclusion de contenu, disponible en Business et Enterprise, empêche Copilot de lire les chemins que vous listez. Elle ne s'applique pas aux modes Edit et Agent de Copilot Chat dans l'éditeur, ni aux liens symboliques. Gardez donc les secrets hors du code, dans un coffre dédié, et utilisez l'exclusion en complément.",
    },
    {
      q: "Un agent Copilot peut-il remplacer notre outil de ticketing ?",
      a: "Non. L'agent Employee Self-Service se place devant vos outils, dont ServiceNow et Workday, pour répondre aux questions courantes et ouvrir des tickets. Le connecteur ServiceNow Knowledge est encore en préversion. Le ticketing reste l'outil de référence pour le suivi, les engagements de service et les statistiques.",
    },
    {
      q: "La formation aide-t-elle à répondre à l'AI Act ?",
      a: "Oui, sur l'obligation de maîtrise de l'IA de l'article 4, en vigueur depuis le 2 février 2025. Le règlement n'exige aucune certification : garder la trace des formations suivies par les salariés et les prestataires documente l'effort. L'usage bureautique de Copilot relève du risque minimal ; les usages RH comme le tri de candidatures demandent un examen à part.",
    },
    {
      q: "Comment financer cette formation pour l'équipe informatique ?",
      a: "Masteria est certifié Qualiopi : la formation est finançable par votre OPCO, et Masteria prépare le dossier avec vous. Le tarif est de 1 980 € HT par jour, en intra jusqu'à 12 participants ou en accompagnement individuel. Un parcours DSI sépare souvent deux groupes, administrateurs d'un côté et développeurs de l'autre.",
    },
  ],
  sources: [
    { name: "Microsoft Learn : configurer une base sécurisée et gouvernée pour Microsoft Copilot (mise à jour 20/08/2026)", url: "https://learn.microsoft.com/fr-fr/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot" },
    { name: "Microsoft Learn : Overview of Microsoft Copilot Chat", url: "https://learn.microsoft.com/en-us/copilot/overview" },
    { name: "Microsoft Learn : Data, privacy, and security for web search in Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access" },
    { name: "Microsoft Learn : Purview, considérations pour Microsoft 365 Copilot (étiquettes, EXTRACT, héritage)", url: "https://learn.microsoft.com/en-us/purview/ai-m365-copilot-considerations" },
    { name: "Microsoft Learn : Employee Self-Service", url: "https://learn.microsoft.com/fr-fr/microsoft-365/copilot/employee-self-service/overview" },
    { name: "Microsoft Learn : sources de connaissances Copilot Studio", url: "https://learn.microsoft.com/fr-fr/microsoft-copilot-studio/knowledge-copilot-studio" },
    { name: "Microsoft Learn : Overview of Microsoft Agent 365", url: "https://learn.microsoft.com/en-us/microsoft-agent-365/overview" },
    { name: "GitHub Docs : Plans for GitHub Copilot", url: "https://docs.github.com/en/copilot/get-started/plans" },
    { name: "GitHub Docs : Content exclusion for GitHub Copilot", url: "https://docs.github.com/en/copilot/concepts/context/content-exclusion" },
    { name: "GitHub Docs : About GitHub Copilot cloud agent", url: "https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent" },
    { name: "GitHub Docs : Managing policies and features for GitHub Copilot in your organization", url: "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies" },
    { name: "Légifrance : article L2312-8 du Code du travail", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196" },
    { name: "EUR-Lex : règlement (UE) 2024/1689 sur l'intelligence artificielle", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
}
