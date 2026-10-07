// Contenu propre à /formation-sprint-ia-veille (page propre). Rendu par SpokePage.
// Sprint de 3 h : la veille personnelle d'un participant sur un seul sujet.
// La formation d'un jour (formation-ia-veille) traite le dispositif d'une équipe.
// Guide terrain du 03/10/2026 (aides OpenAI, Anthropic, Google, Microsoft, Mistral, étude UER-BBC), revu le 07/10/2026 :
// noms d'outils (Vibe, Microsoft Copilot), champs de la page propre, retour de mission de septembre 2026.
export default {
  slug: 'formation-sprint-ia-veille',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Sprint IA Veille : trois heures pour mettre en route une veille qui tourne seule",
  metaTitle: 'Sprint IA Veille : une veille programmée en 3 h | Masteria',
  metaDesc: "Sprint IA Veille : en 3 heures, une veille sur votre sujet, une recherche programmée chaque semaine dans votre assistant d'IA et une note vérifiée.",
  keywords: "sprint ia veille, formation veille ia 3 heures, automatiser sa veille avec l'ia, tâche planifiée chatgpt veille, veille concurrentielle ia, note de veille, formation veille courte",
  resume: "Le Sprint IA Veille met en marche, en trois heures, la veille personnelle de chaque participant : un sujet écrit en une phrase, une dizaine de sources retenues, une recherche que l'assistant de l'entreprise relance de lui-même chaque semaine, et une première note d'une page dont chaque lien a été ouvert. Masteria anime la séance chez vous ou à distance ; elle coûte 1 980 € HT, pour douze stagiaires comme pour un seul ; l'OPCO de votre branche peut la financer s'il juge la demande conforme à ses critères.",
  enBref: [
    { label: 'Formation', value: "Une veille personnelle automatisée : un sujet, des sources, une tâche planifiée, une note vérifiée" },
    { label: 'Durée', value: "Cinq séquences sur trois heures, dont plus d'une heure et demie consacrée à votre propre veille" },
    { label: 'Outils', value: "L'assistant fourni par l'entreprise (ChatGPT, Claude, Gemini, Microsoft Copilot ou Vibe) et une alerte Google" },
    { label: 'Tarif', value: "1 980 € HT la séance, montant identique de un à douze stagiaires" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; l'OPCO examine la demande d'après les règles de la branche, avant la séance" },
    { label: 'Prérequis', value: "Venir avec le sujet à suivre, la liste des sources déjà lues et un accès à l'assistant de l'entreprise" },
  ],
  intro: "Le Sprint IA Veille dure trois heures et vise un résultat précis : chaque participant repart avec sa veille personnelle déjà en marche. Elle tient en un sujet, une dizaine de sources, une recherche programmée chaque semaine dans l'assistant de l'entreprise et une première note d'une page, vérifiée pendant la séance. Au 7 octobre 2026, les cinq grands assistants savent exécuter une consigne à heure fixe, avec des limites qui varient selon l'offre souscrite : la séance part donc de celui que vous payez déjà. Le format convient aux commerciaux, chefs de produit et consultants qui suivent leur marché par eux-mêmes ; la formation veille d'un jour traite le dispositif d'une équipe.",
  guide: {
    kicker: "Guide terrain",
    h2: "Trois heures suffisent pour mettre une veille personnelle en marche",
    lead: "Le Sprint se concentre sur un seul sujet par participant, choisi avant la séance. Ce choix rend le format tenable : en trois heures, chacun écrit ses questions, rassemble ses sources, programme une recherche hebdomadaire et contrôle sa première note. La semaine suivante, la note arrive à l'heure prévue, et le travail restant se résume à la lire et à ouvrir les liens des informations que l'on utilise.",
    sections: [
      {
        h3: "Un seul sujet rend le Sprint tenable",
        paras: [
          "Un sujet de veille personnelle s'écrit en une phrase, par exemple « les annonces de mes douze plus gros clients » ou « les appels d'offres de rénovation énergétique en Auvergne-Rhône-Alpes ». Trois questions le précisent : ce que vous cherchez, sur quelle période, et pour quel usage dans votre travail.",
          "Le Sprint laisse à la formation d'un jour ce qui relève d'une équipe : le plan de veille rattaché aux choix de la direction, la diffusion à d'autres services, les licences de panorama de presse. Votre note reste à votre usage, ou à celui de votre manager, et renvoie aux articles par des liens.",
        ],
      },
      {
        h3: "La tâche planifiée fait la recherche à votre place",
        paras: [
          "Les cinq grands assistants exécutent une consigne à intervalle régulier, avec des limites propres à chaque offre. Dans ChatGPT, l'offre gratuite limite chaque tâche à une exécution quotidienne, dans une plage approximative (matin, après-midi ou nuit), et les offres payantes acceptent une heure précise. Le nombre de tâches actives va de 3 sur les offres Free et Go à 10 sur Business et 15 sur Pro et Enterprise. ChatGPT propose aussi des tâches de surveillance : elles repèrent un changement d'une exécution à l'autre, ne vous notifient qu'en cas de nouveauté pertinente et peuvent s'arrêter d'elles-mêmes quand une condition de fin est remplie.",
          "Claude propose les tâches planifiées sur ses offres payantes (Pro, Max, Team, Enterprise) et les exécute à distance, même quand votre ordinateur est en veille ou l'application fermée. Gemini accepte 10 actions programmées actives et prépare la réponse à l'avance, jusqu'à plusieurs heures avant l'envoi sans forfait Google AI. Microsoft Copilot planifie jusqu'à 10 invites, avec une licence Microsoft Copilot. Mistral Vibe programme des tâches quotidiennes, hebdomadaires, mensuelles ou annuelles, en préversion publique.",
          "Avant le Sprint, vérifiez quel assistant et quelle offre votre entreprise vous fournit. La séquence de programmation s'adapte à l'outil disponible.",
        ],
      },
      {
        h3: "La consigne fixe la période, les sources et le format",
        paras: [
          "Une tâche planifiée relit la même consigne à chaque exécution. Une consigne qui oublie la période risque de ramener les mêmes pages ; une consigne qui ne nomme aucune source risque de mêler presse spécialisée et contenus promotionnels. La consigne du Sprint précise trois éléments : les informations publiées depuis la dernière exécution, une liste de sources prioritaires, et une note courte où chaque ligne renvoie à sa source datée.",
          "Une alerte Google complète la tâche sur les noms qui comptent le plus pour vous. Elle envoie un e-mail quand la recherche Google trouve de nouveaux résultats, avec une fréquence, une langue, une région et des types de sites réglables.",
          "Pour les questions d'actualité, la recherche web de Mistral Vibe puise chez l'AFP et l'Associated Press, partenaires de l'éditeur. Quel que soit l'outil, demandez dans la consigne le lien et la date de chaque information : la note les reprend tels quels.",
        ],
      },
      {
        h3: "La note personnelle résume en deux lignes et renvoie à l'article",
        paras: [
          "Une note de veille utile résume et pointe vers la source. Recopier des articles entiers dans un document, puis le transmettre à plusieurs collègues, revient à constituer un panorama de presse, que la loi soumet en France à une licence gérée par le Centre français d'exploitation du droit de copie (CFC). Le Sprint fixe donc une règle simple : deux lignes par information, écrites avec vos mots, et le lien vers l'article d'origine.",
          "La consigne elle-même mérite la même prudence. Elle contient souvent les noms de vos clients, de vos concurrents ou de vos projets, c'est-à-dire une partie de votre stratégie commerciale. Elle se programme depuis le compte professionnel, sur une offre dont les échanges ne servent pas à entraîner les modèles, et chacun vérifie pendant la séance le réglage correspondant de son assistant.",
        ],
      },
      {
        h3: "Une note d'une page se lit, et chaque lien s'ouvre",
        paras: [
          "La note du Sprint tient sur un écran : cinq informations au plus, chacune en deux lignes, avec son lien et sa date de publication. La deuxième ligne dit ce que l'information change pour vous, comme un client à rappeler ou une question à poser en rendez-vous.",
          "Dans l'évaluation menée au printemps 2025 par 22 médias publics, sous l'égide de l'UER et de la BBC, près d'une réponse sur trois des versions gratuites de quatre assistants posait un problème de sources. Le réflexe du Sprint en découle : ouvrir le lien avant d'utiliser une information, et vérifier que la page dit bien ce que la note affirme.",
          "Rangez les notes vérifiées au même endroit, dans un dossier ou un projet de votre assistant. Au bout de quelques mois, cet historique sert à préparer un rendez-vous annuel avec un client ou un point avec votre manager.",
        ],
      },
    ],
    table: {
      caption: "Le Sprint IA Veille et la formation veille d'un jour répondent à deux besoins différents",
      headers: ["Critère", "Sprint IA Veille (3 heures)", "Formation veille avec l'IA (1 jour)"],
      rows: [
        ["Public", "Une personne qui suit son propre marché : commercial, chef de produit, consultant", "Une personne ou une équipe qui produit la veille pour d'autres"],
        ["Périmètre", "Un sujet, trois questions", "Un plan de veille complet, plusieurs sujets reliés aux décisions"],
        ["Outils", "L'assistant de l'entreprise, une tâche planifiée, une alerte Google", "Tâches planifiées par sujet, recherche approfondie, agents de recherche"],
        ["Vérification", "Ouvrir chaque lien et contrôler la date", "Protocole complet : citations, recoupement, documents d'origine"],
        ["Diffusion", "Note personnelle ou destinée à un manager, avec des liens", "Note de comité, droits de diffusion, licence du CFC"],
        ["Livrable", "Une tâche qui tourne et une première note d'une page", "Le plan de veille, les tâches de l'équipe et une note mensuelle vérifiée"],
      ],
    },
    cas: {
      h3: "Mise en situation : un chargé d'affaires prépare ses rendez-vous clients",
      contexte: "Prenons un chargé d'affaires qui suit douze clients industriels pour un distributeur de fournitures techniques. Avant chaque rendez-vous, il veut connaître les annonces de ses clients : nouveaux sites, investissements, résultats, changements de direction. Son entreprise lui fournit ChatGPT Business.",
      etapes: [
        "Il écrit son sujet en une phrase et trois questions, dont « quels clients ont annoncé un investissement ou un nouveau site cette semaine ».",
        "Il liste les douze clients, leurs sites officiels et deux médias économiques de sa région, puis crée une alerte Google sur les noms de ses trois plus gros clients.",
        "Il colle le prompt ci-dessous dans ChatGPT, qui crée la tâche planifiée.",
        "Au premier rapport, il ouvre chaque lien et retire de la consigne les sources qui n'apportent rien.",
        "Il garde les rapports vérifiés dans un même dossier, qu'il relit la veille de chaque rendez-vous.",
      ],
      prompt: "Chaque lundi à 7 h 30, recherche les informations publiées au cours des sept derniers jours sur les entreprises suivantes : [liste des douze clients].\n\nCherche en priorité sur leurs sites officiels, leurs communiqués de presse et ces médias : [deux médias économiques régionaux].\n\nRetiens uniquement :\n- les ouvertures, extensions ou fermetures de sites ;\n- les investissements et les résultats annoncés ;\n- les nominations de dirigeants et les recrutements importants.\n\nPour chaque information, écris deux lignes : le fait, puis la question que je pourrais poser à ce client en rendez-vous. Donne pour chacune le titre de la page, la date à laquelle elle a été publiée et son adresse.\n\nSi rien de nouveau n'a été publié sur un client, écris « rien cette semaine ». N'invente aucune information et ne reprends aucun article publié avant la période.",
      resultat: "Chaque lundi, le chargé d'affaires reçoit une note d'une page, client par client. Il ouvre le lien de chaque information avant de s'en servir en rendez-vous, et il corrige la consigne quand une source se révèle inutile. Une limite demeure : la tâche ne voit que ce qui est publié en ligne, et l'échange avec le client reste sa première source.",
    },
    pieges: [
      {
        titre: "Dix sujets dans un seul Sprint",
        texte: "Un sujet par participant remplit les trois heures. Les autres attendent que la première tâche ait fait ses preuves pendant un mois.",
      },
      {
        titre: "La tâche qui ressort les mêmes articles",
        texte: "Une consigne qui ne borne pas la période relance la même recherche et risque de retrouver les mêmes pages. Écrivez « publiées au cours des sept derniers jours » et demandez la date de chaque source.",
      },
      {
        titre: "Le résumé transmis avant d'avoir ouvert le lien",
        texte: "Un assistant peut citer une page qui ne contient pas l'information qu'il résume. Ouvrez le lien avant de transmettre la note à un collègue ou d'en parler à un client.",
      },
      {
        titre: "Les noms des clients dans un compte personnel",
        texte: "La consigne d'une tâche contient vos clients et vos priorités commerciales. Programmez-la depuis le compte de l'entreprise, et ne partagez jamais le lien d'une tâche qui contient ces informations, car ce lien donne à lire toutes les consignes à quiconque l'ouvre.",
      },
      {
        titre: "L'heure exacte sur une offre gratuite",
        texte: "Sur l'offre gratuite de ChatGPT, une tâche ne tourne qu'une fois par jour, dans une plage horaire approximative, et Gemini sans forfait prépare sa réponse jusqu'à plusieurs heures à l'avance. Pour une note attendue à heure fixe, vérifiez l'offre dont vous disposez.",
      },
    ],
  },
  audience: [
    { title: "Commerciaux et chargés d'affaires", desc: "Vous voulez connaître les dernières annonces de vos clients et de vos concurrents avant chaque rendez-vous, grâce à une recherche qui tourne chaque semaine." },
    { title: "Chefs de produit et chefs de projet", desc: "Vous suivez une technologie, une norme ou quelques concurrents directs. Vous voulez une note hebdomadaire courte et sourcée sur ce seul sujet." },
    { title: "Consultants, indépendants et managers", desc: "Vous voulez suivre votre marché par vous-même, avec l'outil que vous utilisez déjà. Le Sprint vous met en route, et la formation d'un jour prend le relais si la veille devient celle d'une équipe." },
  ],
  useCases: [
    { icon: '📡', title: "Un sujet, dix sources", desc: "Votre sujet en une phrase, trois questions et une dizaine de sources choisies pendant la séance." },
    { icon: '🎯', title: "Tâche planifiée", desc: "Une recherche hebdomadaire programmée dans ChatGPT, Claude, Gemini, Copilot ou Mistral Vibe." },
    { icon: '🔬', title: "Alerte ciblée", desc: "Une alerte Google sur les noms ou les mots-clés qui comptent le plus pour vous, en complément de la tâche." },
    { icon: '✍️', title: "Note d'une page", desc: "Cinq informations au plus, chacune avec son lien, sa date et ce qu'elle change pour vous." },
    { icon: '📤', title: "Historique consultable", desc: "Des notes rangées au même endroit et relues avant un rendez-vous ou un point d'équipe." },
    { icon: '🛡️', title: "Réflexe de vérification", desc: "Le lien ouvert et la date contrôlée avant toute utilisation d'une information." },
  ],
  modules: [
    {
      day: 1, title: "Séquence 1 · Choisir son sujet et ses questions", duration: '25 min',
      description: "Le Sprint commence par un choix : un sujet écrit en une phrase, et les questions qui le précisent.",
      items: [
        "Écrire son sujet en une phrase",
        "Formuler trois questions : quoi, sur quelle période, pour quel usage",
        "Reconnaître les sujets qui relèvent d'une veille d'équipe",
      ],
      exercise: "Rédiger le sujet et les trois questions de votre veille personnelle.",
    },
    {
      day: 1, title: "Séquence 2 · Réunir ses sources et créer une alerte", duration: '35 min',
      description: "Une dizaine de sources suffit pour une veille personnelle. Vous les choisissez, puis vous complétez la future tâche par une alerte.",
      items: [
        "Sites officiels, presse spécialisée, médias régionaux",
        "Repérer une source fragile : auteur absent, date absente, contenu promotionnel",
        "Créer une alerte Google : fréquence, langue, région, types de sites",
      ],
      exercise: "Lister dix sources et créer une alerte sur votre sujet.",
    },
    {
      day: 1, title: "Séquence 3 · Écrire la consigne et programmer la tâche", duration: '50 min',
      description: "La consigne fait la qualité de chaque rapport. Vous l'écrivez, vous la programmez et vous lancez une première exécution.",
      items: [
        "Période, sources à privilégier, format de la note",
        "Programmer la tâche dans votre assistant : ChatGPT, Claude, Gemini, Copilot ou Mistral Vibe",
        "Limites de votre offre : nombre de tâches, fréquence, heure d'exécution",
        "Lancer la tâche une première fois pour la tester",
      ],
      exercise: "Programmer votre tâche hebdomadaire et lancer une première exécution.",
    },
    {
      day: 1, title: "Séquence 4 · Vérifier et corriger sa première note", duration: '50 min',
      description: "La première note révèle les défauts de la consigne. Vous la vérifiez lien par lien, puis vous corrigez la tâche.",
      items: [
        "Ouvrir chaque lien et contrôler la date de publication",
        "Repérer l'information absente de la source citée",
        "Ajuster la consigne : sources à retirer, période, longueur",
      ],
      exercise: "Vérifier chaque information de votre première note et corriger la consigne en conséquence.",
    },
    {
      day: 1, title: "Séquence 5 · Installer sa routine", duration: '20 min',
      description: "Une veille dure quand elle trouve sa place dans la semaine. Vous fixez votre moment de lecture et le rangement des notes.",
      items: [
        "Choisir le jour et l'heure de lecture",
        "Ranger les notes dans un même dossier ou un même projet",
        "Les informations que votre charte interdit de glisser dans une consigne : noms de clients, priorités commerciales",
        "Rendez-vous à trente jours : garder la tâche, la corriger ou l'arrêter",
        "Savoir quand passer à la formation d'un jour",
      ],
      exercise: "Fixer votre créneau de lecture hebdomadaire et l'emplacement de vos notes.",
    },
  ],
  objectives: [
    "Formuler en une phrase le sujet de sa veille personnelle et trois questions qui le précisent",
    "Créer une alerte Google réglée sur la fréquence, la langue et la région utiles",
    "Programmer une recherche hebdomadaire dans un assistant d'IA en bornant la période et en nommant les sources prioritaires",
    "Vérifier une information de la note en ouvrant sa source et en contrôlant sa date de publication",
    "Produire une note de veille d'une page en datant et en sourçant chaque information",
  ],
  faq: [
    {
      q: "Que peut-on mettre en place en trois heures avec le Sprint IA Veille ?",
      a: "Une veille personnelle complète sur un sujet : trois questions, une dizaine de sources, une alerte Google, une recherche programmée chaque semaine dans votre assistant d'IA et une première note vérifiée. La semaine suivante, la note arrive à l'heure choisie, et votre travail se limite à la lire et à ouvrir les liens des informations que vous utilisez.",
    },
    {
      q: "Trois heures de Sprint IA Veille suffisent-elles, ou faut-il la formation veille d'une journée ?",
      a: "Tout dépend de qui produit la veille et pour qui. Le Sprint sert une personne et un sujet ; la journée sert une équipe et un plan de veille. En trois heures, vous installez votre propre routine. En une journée, une équipe construit un dispositif complet : questions reliées aux décisions de la direction, plusieurs sujets, recherche approfondie, protocole de vérification et règles de diffusion, dont la licence de panorama de presse du CFC.",
    },
    {
      q: "Quels assistants d'IA permettent de programmer une recherche de veille chaque semaine ?",
      a: "ChatGPT propose des tâches planifiées sur toutes ses offres, avec des limites sur l'offre gratuite. Claude les réserve à ses offres Pro, Max, Team et Enterprise. Gemini accepte 10 actions programmées actives, et Microsoft Copilot 10 invites planifiées avec une licence Microsoft Copilot. Mistral Vibe propose des tâches planifiées en préversion publique. Le Sprint se déroule sur l'outil que votre entreprise fournit.",
    },
    {
      q: "Le Sprint IA Veille demande-t-il un abonnement payant ?",
      a: "Pas forcément, mais l'offre change les possibilités. Sur ChatGPT Free, trois tâches peuvent être actives, chacune limitée à une exécution quotidienne sans heure précise. Claude ne propose la planification que sur ses offres payantes, et Copilot exige une licence Microsoft Copilot. Indiquez votre outil et votre offre avant la session : la séquence de programmation s'y adapte.",
    },
    {
      q: "Le Sprint IA Veille se déroule-t-il aussi en visioconférence ?",
      a: "Oui. Le Sprint se déroule en présentiel ou en distanciel. Chaque participant travaille sur son propre compte, programme sa tâche pendant la séance et repart avec une veille qui tourne déjà.",
    },
    {
      q: "Combien coûte le Sprint IA Veille et peut-il être pris en charge par un OPCO ?",
      a: "La séance de trois heures revient à 1 980 € HT hors TVA, sur place ou en visioconférence, et ce montant ne change pas entre un inscrit et douze. Comme toutes les formations de Masteria, organisme certifié Qualiopi, elle peut être financée par votre OPCO lorsque les critères de votre branche le permettent, ce qu'il faut vérifier avant toute demande. Masteria vous remet programme et convention ; l'entreprise envoie ensuite son dossier à l'OPCO, avant la date du Sprint.",
    },
    {
      q: "Le Sprint IA Veille convient-il à une veille réglementaire ?",
      a: "Oui, pour un périmètre étroit : les publications d'une autorité de votre secteur, les textes d'une famille de normes, les appels d'offres d'une région. La tâche planifiée signale ce qui vient de paraître et le résume. Pour toute décision, l'information se vérifie ensuite dans le texte officiel, sur Légifrance, EUR-Lex ou le site de l'autorité, car un résumé peut omettre une date d'application ou une exception. Une veille juridique complète, avec plusieurs dizaines de sources et une diffusion à toute une direction, relève de la formation d'un jour.",
    },
    {
      q: "Que faut-il préparer avant le Sprint IA Veille ?",
      a: "Apportez le sujet que vous voulez suivre et la liste des sources que vous lisez déjà. Vérifiez aussi votre accès à l'assistant d'IA de l'entreprise : si vous ignorez votre offre (gratuite, Business, licence Copilot), demandez-la à votre service informatique, car les possibilités de planification en dépendent.",
    },
  ],
  tarifs: {
    titre: "Le prix d'un Sprint IA Veille, pour un participant ou pour douze",
    paras: [
      "Le tarif de 1 980 € HT vaut pour toute la séance, de un à douze stagiaires. Il inclut l'échange préalable, pendant lequel nous relevons l'assistant et l'offre de chaque participant, puisque les possibilités de planification en dépendent, des exemples de sources choisis dans votre marché, la trame de consigne remise à chacun et l'attestation de fin de séance.",
      "Prenons une équipe commerciale de huit chargés d'affaires, chacun avec ses propres clients à suivre : la séance revient à 247,50 € HT par personne, et chacun repart avec une tâche déjà programmée. Votre OPCO peut financer la séance si ses critères le permettent ; Masteria, certifié Qualiopi, vous envoie programme et convention, que l'entreprise adresse à l'OPCO avant la date retenue.",
    ],
  },
  cta: {
    milieu: "Chaque participant repart avec une recherche qui tourne déjà : dites-nous quels sujets vos équipes suivent aujourd'hui à la main.",
    fin: {
      titre: "Préparons un Sprint IA Veille autour de vos sujets",
      texte: "Indiquez le nombre de participants, l'assistant que l'entreprise leur fournit et l'offre souscrite, et deux ou trois sujets qu'ils surveillent déjà : clients, concurrents, appels d'offres, réglementation. Nous proposons une date et un déroulé ajusté à ces sujets.",
    },
  },
  apres: {
    titre: "Après le Sprint : une veille d'équipe qui alimente un canal partagé",
    texte: "Quand plusieurs personnes suivent les mêmes concurrents chacune de leur côté, la veille gagne à devenir commune : un agent qui interroge chaque matin les sources retenues, écarte les doublons, classe les informations par sujet et publie une synthèse dans le canal Teams ou Slack de l'équipe, avec le lien de chaque article. Masteria peut construire ce dispositif sur vos outils et former la personne qui le fera évoluer. Pour ce dispositif, qui relève du développement, le principe est simple : il n'est pas finançable par votre OPCO, et son prix forfaitaire se fixe quand les sujets et les sources sont arrêtés.",
  },
  terrain: {
    titre: "Sur le terrain : la planification retenue pour la veille quotidienne",
    texte: "Une interprofession agricole du Sud a confié à Masteria, pendant trois jours de septembre 2026, la formation de seize personnes, de la promotion à la gestion. Leur atelier de promotion et de communication comportait un exercice de veille. Dans sa fiche de fin de formation, la responsable du numérique a cité la planification des tâches dans ChatGPT comme la fonction qui lui servirait pour sa veille de chaque jour. C'est le geste que le Sprint IA Veille installe en trois heures.",
    lien: '/etudes-de-cas-ia#mission-interprofession-agricole',
  },
  liensAssocies: [
    { label: "Formation veille avec l'IA : le dispositif d'une équipe en une journée", href: '/formation-ia-veille' },
    { label: "Automatiser sa veille avec l'IA : notre guide", href: '/automatiser-sa-veille-ia' },
    { label: "La veille IA que Masteria publie chaque jour ouvré", href: '/veille-ia' },
    { label: "L'IA pour les équipes communication", href: '/formation-ia-communication' },
    { label: 'Le Sprint IA et ses six formats', href: '/formation-sprint-ia' },
  ],
  sources: [
    { name: "OpenAI Help Center : Scheduled tasks in ChatGPT", url: "https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt" },
    { name: "Claude Help Center : planifier des tâches récurrentes", url: "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork" },
    { name: "Aide Gemini : programmer des actions dans les applications Gemini", url: "https://support.google.com/gemini/answer/16316416?hl=fr" },
    { name: "Microsoft Support : planifiez vos requêtes Copilot les plus utilisées", url: "https://support.microsoft.com/fr-fr/microsoft-365-copilot/schedule-your-most-used-copilot-prompts" },
    { name: "Documentation Mistral AI : tâches planifiées dans Vibe Work", url: "https://docs.mistral.ai/vibe/work/scheduled-tasks" },
    { name: "Documentation Mistral AI : recherche web et actualités (AFP, AP) dans Vibe Work", url: "https://docs.mistral.ai/vibe/work/web-search-open-url" },
    { name: "Aide Google : créer une alerte", url: "https://support.google.com/websearch/answer/4815696?hl=fr" },
    { name: "UER et BBC : News Integrity in AI Assistants (octobre 2025)", url: "https://www.ebu.ch/research/open/report/news-integrity-in-ai-assistants" },
  ],
}
