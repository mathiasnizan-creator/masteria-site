// Contenu propre à /formation-mistral-assistante (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-mistral-assistante',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Mistral pour assistantes de direction : tri du courrier, préparation des rendez-vous et semaine du dirigeant avec les connecteurs de Vibe.",
  intro: "Une assistante de direction jongle souvent entre deux messageries, un agenda partagé et des dossiers éparpillés. Vibe, l'assistant de Mistral (anciennement Le Chat), se connecte à Outlook, à Gmail et aux deux calendriers, et il peut exécuter une consigne à heure fixe. Ce guide montre comment organiser la semaine d'un dirigeant avec ces fonctions, et où placer les garde-fous.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe travaille à côté de la messagerie et prépare le terrain avant que vous l'ouvriez",
    lead: "Copilot vit dans Outlook et Gemini dans Gmail. Vibe fonctionne depuis sa propre fenêtre et va chercher l'information dans les outils que vous avez connectés. Pour une assistante, cette position a un avantage net : une même consigne peut croiser le calendrier Outlook du dirigeant, la boîte Gmail d'un conseil d'administration et un dossier SharePoint. Elle a aussi un coût. Chaque connexion ouvre un accès, et chaque envoi doit rester sous votre contrôle.",
    sections: [
      {
        h3: "Les connecteurs donnent à Vibe accès à la boîte et à l'agenda",
        paras: [
          "Les connecteurs se branchent depuis la page Connecteurs du menu latéral, avec votre identifiant chez l'éditeur. D'après la documentation de Mistral, le connecteur Outlook lit et envoie des e-mails. Le connecteur Outlook Calendar recherche des événements, planifie ou supprime des réunions et gère les invitations. Gmail et Google Calendar versent le courrier et l'agenda dans vos conversations.",
          "Mistral précise que les données lues par les connecteurs ne sont pas stockées sur ses serveurs et ne servent pas à entraîner ses modèles. En entreprise, l'administrateur peut désactiver un connecteur pour toute l'organisation. Renseignez-vous auprès de votre service informatique avant de connecter la boîte d'un dirigeant : c'est souvent lui qui décide.",
        ],
      },
      {
        h3: "Vibe s'arrête avant d'envoyer, sauf si vous l'avez autorisé",
        paras: [
          "Toute action qui modifie quelque chose passe par une demande d'accord : envoyer un e-mail, créer ou supprimer un événement, publier un message. Vibe affiche l'action et attend. Vous pouvez valider une fois, refuser, ou autoriser l'action pour toute la session. Chaque fonction d'un connecteur se règle aussi une par une dans l'onglet des fonctions de la page Connecteurs.",
          "Pour une assistante, la règle tient en une phrase : laissez la lecture en libre accès et gardez l'accord manuel sur tout ce qui sort ou efface. Une réunion supprimée par erreur dans l'agenda d'un président coûte plus cher que dix clics de validation.",
        ],
      },
      {
        h3: "Les tâches planifiées font le premier tri à votre place",
        paras: [
          "Une tâche planifiée exécute une consigne à une date ou selon une fréquence que vous fixez, du quotidien à l'annuel. Vous la créez depuis la rubrique Tâches planifiées, ou en l'écrivant dans la conversation : « programme cette demande tous les vendredis à 16 h ». Le résultat apparaît dans le menu latéral avec un point non lu et se prête aux questions de suivi.",
          "La documentation cite elle-même le tri quotidien de la boîte de réception et la préparation des réunions parmi les usages courants. L'offre gratuite autorise jusqu'à cinq tâches planifiées en même temps, l'offre Pro n'en limite pas le nombre.",
        ],
        list: [
          "Chaque matin à 8 h : les e-mails de la nuit classés en « à traiter aujourd'hui », « à transmettre » et « pour information », avec l'expéditeur et l'échéance.",
          "Chaque vendredi à 16 h : la semaine suivante du dirigeant, réunion par réunion, avec les derniers échanges et les documents à imprimer.",
          "Le 25 de chaque mois : la liste des notes de frais, des contrats et des échéances du mois suivant repérés dans le courrier.",
        ],
      },
      {
        h3: "La base de connaissances retient les habitudes du dirigeant",
        paras: [
          "Vibe tient une base de connaissances personnelle, qui remplace les anciennes Mémoires de Le Chat. Elle se remplit quand vous écrivez « retiens que » ou « enregistre que », et Vibe y ajoute aussi de lui-même des détails récurrents, comme vos formats préférés. Vous la consultez depuis Contexte, dans le menu latéral, et vous pouvez supprimer un sujet entier ou tout effacer.",
          "Notez-y que le dirigeant veut ses notes de rendez-vous sur une page ou qu'il refuse les réunions avant 9 h le lundi. Mistral indique que la base ne conserve pas de données sensibles comme la santé. Appliquez la même règle aux tiers : un jugement sur un interlocuteur n'a rien à y faire.",
        ],
      },
    ],
    table: {
      caption: "La journée d'une assistante de direction et la fonction de Vibe qui la sert",
      headers: ["Tâche", "Fonction de Vibe", "Point de vigilance"],
      rows: [
        ["Trier la boîte du matin", "Tâche planifiée quotidienne, connecteur Outlook ou Gmail", "Lecture seule : aucune réponse ne part sans vous"],
        ["Préparer un rendez-vous", "Compétence intégrée /meeting-prep, calendrier connecté", "Vérifiez les fonctions et les noms cités, ils viennent parfois d'un ancien fil"],
        ["Déplacer une réunion", "Connecteur Outlook Calendar", "Gardez l'accord manuel sur la suppression d'événements"],
        ["Retrouver une procédure interne", "Bibliothèque ou recherche SharePoint", "Ouvrez la note numérotée pour lire le passage source"],
        ["Rédiger un courrier sensible au nom du dirigeant", "Instructions personnalisées, base de connaissances", "La relecture du dirigeant reste obligatoire pour tout refus ou recadrage"],
        ["Mettre au propre un compte rendu", "Collage des notes ou de la transcription de Teams ou Meet", "Vibe ne transcrit pas un enregistrement audio : il part d'un texte"],
      ],
    },
    cas: {
      h3: "Cas pratique : la semaine du dirigeant prête chaque vendredi à 16 h",
      contexte: "Prenons l'assistante du directeur général d'une entreprise de taille intermédiaire. Le dirigeant travaille sur Outlook, le conseil d'administration échange sur une boîte Gmail dédiée, et chaque lundi commence par la même question : « qu'est-ce que j'ai cette semaine, et qu'est-ce que je dois avoir lu ? ».",
      etapes: [
        "Depuis la page Connecteurs, branchez Outlook, Outlook Calendar et Gmail avec l'accord de votre service informatique.",
        "Dans l'onglet des fonctions de chaque connecteur, laissez en accord manuel l'envoi d'e-mails et la suppression d'événements.",
        "Dans Contexte, puis Instructions, indiquez votre rôle et les préférences stables du dirigeant : format d'une page, horaires, formules de politesse.",
        "Ouvrez Tâches planifiées, créez une tâche hebdomadaire le vendredi à 16 h et collez le prompt ci-dessous.",
        "Le vendredi, ouvrez la conversation marquée d'un point non lu, vérifiez le tableau, puis validez un par un les brouillons de reprogrammation.",
      ],
      prompt: "Tu prépares la semaine prochaine du directeur général dont je suis l'assistante.\n\nCommence par lire son agenda Outlook du lundi au vendredi de la semaine prochaine. Pour chaque réunion, retrouve dans Outlook et dans la boîte Gmail du conseil d'administration les trois derniers échanges avec les participants, et les pièces jointes qui y circulent.\n\nPrésente le résultat dans un tableau, jour par jour, avec ces colonnes : horaire, objet de la réunion, participants et leur fonction, ce qui a été dit lors du dernier échange, document à lire avant la réunion.\n\nSous le tableau, signale trois choses : les réunions qui se chevauchent, les journées où le directeur n'a pas une heure libre avant 14 h, et les invitations restées sans réponse.\n\nPour chaque chevauchement, rédige un brouillon d'e-mail qui propose deux autres créneaux libres dans son agenda. N'envoie rien et ne modifie aucun événement : je valide moi-même.\n\nSi tu n'es pas sûr de la fonction d'un participant ou du lien entre un échange et une réunion, écris « à vérifier » au lieu de deviner.",
      resultat: "Le vendredi, vous trouvez un tableau de la semaine, la liste des conflits et des brouillons prêts à valider. Avant de transmettre, vérifiez les fonctions des participants, que Vibe peut tirer d'une ancienne signature, et le rattachement des échanges quand deux dossiers portent un nom proche. Les mentions « à vérifier » vous disent où regarder en premier.",
    },
    pieges: [
      {
        titre: "Une tâche planifiée n'envoie que ce que vous avez autorisé d'avance",
        texte: "Une tâche planifiée tourne en votre absence. Pour qu'elle envoie un e-mail, il faut avoir autorisé l'envoi à l'avance. N'accordez jamais cette autorisation sur la boîte d'un dirigeant : faites produire des brouillons et envoyez vous-même.",
      },
      {
        titre: "Vibe ne transcrit pas vos enregistrements de réunion",
        texte: "Le mode vocal de Vibe sert à dicter une consigne en direct, dans douze langues dont le français. La documentation ne prévoit pas l'import d'un fichier audio. Pour un compte rendu, partez de la transcription produite par Teams ou Meet, ou de vos notes, et collez-la dans la conversation.",
      },
      {
        titre: "Un compte gratuit n'est pas le bon endroit pour le courrier d'un dirigeant",
        texte: "Sur les offres Free et Pro, vos échanges alimentent par défaut l'entraînement des modèles. Le réglage se coupe dans les options de confidentialité du panneau d'administration ; il est coupé d'office sur Enterprise. Faites-le avant de brancher la boîte d'un dirigeant.",
      },
      {
        titre: "L'interface de Vibe a changé",
        texte: "D'après la documentation de Mistral, l'onglet Chat a fusionné dans Work pour les comptes Free, Pro et Team ; la profondeur de la réponse se règle désormais par un simple interrupteur entre réponse rapide et réflexion approfondie. Les organisations Enterprise peuvent encore voir l'ancien onglet pendant une période de transition de six mois. Si vos consignes internes parlent encore de Le Chat, mettez-les à jour.",
      },
    ],
  },
  audience: [
    {
      "title": "Assistantes de direction et de dirigeant",
      "desc": "Vous tenez l'agenda, le courrier et la préparation des rendez-vous. Vous apprenez à brancher Vibe sur la messagerie et l'agenda en gardant la main sur chaque envoi."
    },
    {
      "title": "Office managers et assistantes d'équipe",
      "desc": "Vous gérez plusieurs agendas et les demandes internes. Les tâches planifiées et une Bibliothèque de procédures prennent en charge les questions qui reviennent."
    },
    {
      "title": "Assistantes de conseil et secrétariats généraux",
      "desc": "Vous préparez les convocations et vous suivez les décisions d'une séance à l'autre. Vous apprenez à produire les comptes rendus à partir d'une transcription, sur un espace réglé pour la confidentialité."
    }
  ],
  useCases: [
    {
      "icon": "✉️",
      "title": "Tri du courrier du matin",
      "desc": "Une tâche planifiée quotidienne classe les e-mails de la nuit par urgence, avec l'expéditeur et l'échéance, sans rien envoyer."
    },
    {
      "icon": "📋",
      "title": "Semaine du dirigeant",
      "desc": "Chaque vendredi, un tableau de la semaine suivante réunion par réunion, avec les derniers échanges et les documents à lire."
    },
    {
      "icon": "🎯",
      "title": "Préparation de rendez-vous",
      "desc": "La compétence /meeting-prep prépare une réunion de l'agenda connecté : participants, échanges récents, points à aborder."
    },
    {
      "icon": "🎤",
      "title": "Comptes rendus",
      "desc": "À partir d'une transcription Teams ou Meet ou de vos notes, un compte rendu avec décisions, actions, porteurs et échéances."
    },
    {
      "icon": "📚",
      "title": "Procédures internes",
      "desc": "Une Bibliothèque des notes de service et des procédures répond aux questions courantes avec renvoi à la page citée."
    },
    {
      "icon": "🏛",
      "title": "Conseils et instances",
      "desc": "Ordres du jour, convocations et suivi des décisions tenus dans un projet dédié à chaque instance."
    }
  ],
  modules: [
    {
      "day": 1,
      "title": "Module 1 · Brancher Vibe sur la messagerie et l'agenda",
      "duration": "1h30",
      "description": "Choisir les connexions utiles et le niveau de contrôle de chacune.",
      "items": [
        "Connecteurs Outlook, Outlook Calendar, Gmail et Google Calendar : ce que chacun lit, envoie ou modifie",
        "Accord du service informatique et désactivation d'un connecteur par l'administrateur",
        "Réglage de l'entraînement des modèles selon l'offre Free, Pro, Team ou Enterprise",
        "Réglage des fonctions une par une dans la page Connecteurs"
      ],
      "exercise": "Vous dressez la liste des connexions utiles à votre poste et le niveau d'accord que vous gardez sur chaque fonction."
    },
    {
      "day": 1,
      "title": "Module 2 · Trier le courrier avec des tâches planifiées",
      "duration": "2h",
      "description": "Faire préparer le tri avant votre arrivée, sans aucun envoi automatique.",
      "items": [
        "Créer une tâche quotidienne, hebdomadaire ou mensuelle depuis Tâches planifiées",
        "Écrire une consigne de tri qui classe sans répondre",
        "Relire le résultat marqué d'un point non lu et poser des questions de suivi",
        "Refuser l'autorisation d'envoi à l'avance sur la boîte d'un dirigeant"
      ],
      "exercise": "Vous écrivez la tâche de tri du matin adaptée à votre boîte et à vos propres catégories."
    },
    {
      "day": 1,
      "title": "Module 3 · Préparer les rendez-vous et la semaine du dirigeant",
      "duration": "2h",
      "description": "Donner au dirigeant l'essentiel de chaque réunion avant qu'elle commence.",
      "items": [
        "La compétence /meeting-prep sur une réunion de l'agenda",
        "Croiser l'agenda Outlook et les échanges Gmail dans une même consigne",
        "Repérer les chevauchements et les invitations restées sans réponse",
        "Faire rédiger des brouillons de reprogrammation que vous validez un par un"
      ],
      "exercise": "Vous préparez la semaine à venir de votre dirigeant et vous contrôlez chaque fonction de participant citée."
    },
    {
      "day": 1,
      "title": "Module 4 · Garder les préférences du dirigeant",
      "duration": "1h30",
      "description": "Éviter de répéter les mêmes consignes à chaque conversation.",
      "items": [
        "Instructions personnalisées dans Contexte, puis Instructions",
        "Base de connaissances : « retiens que », consultation et suppression d'un sujet",
        "Ce qui n'a rien à faire dans la mémoire : jugements sur des tiers, informations de santé",
        "Mettre à jour les préférences quand les habitudes du dirigeant changent"
      ],
      "exercise": "Vous rédigez les instructions de votre poste et les préférences stables de votre dirigeant."
    },
    {
      "day": 2,
      "title": "Module 5 · Mettre au propre un compte rendu",
      "duration": "1h30",
      "description": "Passer d'une transcription brute à un compte rendu qui fait agir.",
      "items": [
        "Partir d'une transcription Teams ou Meet ou de vos notes, Vibe ne transcrivant pas un fichier audio",
        "Séparer décisions, actions, porteurs et échéances",
        "Marquer « à vérifier » ce que la transcription laisse ambigu",
        "Décliner le même contenu en compte rendu complet et en e-mail de suivi"
      ],
      "exercise": "Vous transformez la transcription anonymisée de l'une de vos réunions récentes en compte rendu et en e-mail de suivi."
    },
    {
      "day": 2,
      "title": "Module 6 · Rédiger au nom du dirigeant",
      "duration": "2h",
      "description": "Écrire dans le ton du dirigeant et garder la relecture là où elle compte.",
      "items": [
        "Courriers de refus, de relance et de remerciement dans le ton du dirigeant",
        "Corriger dans le Canvas et comparer les versions",
        "Envoyer par le connecteur Outlook avec un accord manuel",
        "Lister les courriers qui passent toujours par la relecture du dirigeant"
      ],
      "exercise": "Vous rédigez trois courriers sensibles tirés de votre boîte, anonymisés, puis vous les soumettez à validation."
    },
    {
      "day": 2,
      "title": "Module 7 · Retrouver l'information dans les procédures",
      "duration": "2h",
      "description": "Répondre aux questions internes à partir des documents qui font foi.",
      "items": [
        "Créer une Bibliothèque des procédures et des notes de service",
        "Lire les notes numérotées et le bouton Sources avant de répondre",
        "Partager la Bibliothèque à l'équipe en lecture seule",
        "Retirer les versions périmées pour éviter qu'elles soient citées"
      ],
      "exercise": "Vous créez la Bibliothèque de vos procédures et vous y posez les questions qu'on vous adresse le plus souvent."
    },
    {
      "day": 2,
      "title": "Module 8 · Fixer les règles d'usage au secrétariat de direction",
      "duration": "1h30",
      "description": "Écrire ce qui se lit, ce qui se valide et ce qui ne part jamais seul.",
      "items": [
        "Classer les actions : lecture libre, validation manuelle, envoi interdit en automatique",
        "Protéger les données des tiers et les dossiers confidentiels de la direction",
        "Mettre à jour vos consignes internes après la fusion de Chat dans Work",
        "Transmettre votre méthode à une remplaçante par une compétence partagée"
      ],
      "exercise": "Vous rédigez la charte d'usage de Vibe pour votre poste et vous la faites valider par votre dirigeant."
    }
  ],
  objectives: [
    "Paramétrer les connecteurs de messagerie et d'agenda avec un niveau d'accord adapté à chaque fonction",
    "Créer une tâche planifiée qui trie le courrier sans rien envoyer",
    "Préparer la semaine d'un dirigeant en croisant l'agenda et les échanges récents",
    "Rédiger un compte rendu avec décisions, actions, porteurs et échéances à partir d'une transcription",
    "Vérifier les fonctions, les noms et les dates cités par Vibe avant transmission au dirigeant"
  ],
  faq: [
    { q: "Vibe s'installe-t-il dans Outlook comme Copilot ?", a: "Non. Vibe fonctionne dans son application web ou mobile et lit Outlook par un connecteur. Copilot, lui, s'affiche dans Outlook. Vibe a l'avantage de croiser Outlook, Gmail, SharePoint ou Slack dans une même consigne ; Copilot a celui de rester dans la fenêtre où vous travaillez déjà." },
    { q: "Vibe peut-il envoyer un e-mail ou accepter une invitation à ma place ?", a: "Oui, par les connecteurs Outlook et Outlook Calendar, avec votre accord à chaque action sensible. Vous pouvez autoriser une action pour toute la session, ou fonction par fonction dans la page Connecteurs. Pour la boîte d'un dirigeant, gardez l'accord manuel sur l'envoi et la suppression." },
    { q: "Comment Vibe prépare-t-il un rendez-vous ?", a: "Mistral livre une compétence intégrée, /meeting-prep, qui prépare les réunions à venir à partir des éléments du calendrier. Connectée à l'agenda et à la messagerie, elle rassemble le contexte des participants et les échanges récents. Relisez toujours les fonctions citées, qui peuvent venir d'un ancien message." },
    { q: "Peut-on donner à Vibe un compte rendu audio à transcrire ?", a: "La documentation ne le prévoit pas. Le mode vocal transcrit ce que vous dictez en direct, puis vous relisez le texte avant de l'envoyer. Pour une réunion enregistrée, utilisez la transcription de votre outil de visioconférence et confiez le texte à Vibe." },
    { q: "Où sont stockées les données que je confie à Vibe ?", a: "Selon le centre d'aide de Mistral, les données sont hébergées par défaut dans l'Union européenne. Certains traitements peuvent passer temporairement hors de l'Union chez des sous-traitants listés dans le Trust Center de Mistral, sous clauses contractuelles types. Les clients Enterprise peuvent faire désactiver ces fonctions au niveau de l'organisation." },
    { q: "Combien de tâches planifiées peut-on créer ?", a: "La grille tarifaire de Mistral indique jusqu'à cinq tâches planifiées sur l'offre gratuite et un nombre illimité sur l'offre Pro. Au-delà de la limite, il faut mettre en pause ou supprimer une tâche. Chaque tâche peut utiliser les connecteurs, la recherche web et vos Bibliothèques." },
    { q: "Quels financements pour former une équipe d'assistantes ?", a: "La formation est dispensée par Masteria, organisme certifié Qualiopi : l'OPCO de votre entreprise peut la prendre en charge selon ses critères. En intra, le groupe compte jusqu'à 12 participants, au tarif de 1 980 € HT par jour." },
  ],
  sources: [
    { name: "Mistral Docs : Connectors (Vibe Work)", url: "https://docs.mistral.ai/vibe/work/connectors" },
    { name: "Mistral Docs : Safety and approvals", url: "https://docs.mistral.ai/vibe/work/safety-and-approvals" },
    { name: "Mistral Docs : Scheduled tasks", url: "https://docs.mistral.ai/vibe/work/scheduled-tasks" },
    { name: "Mistral Docs : Knowledge Base", url: "https://docs.mistral.ai/vibe/work/knowledge" },
    { name: "Mistral Docs : Skills (compétences intégrées)", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Mistral Docs : Voice mode", url: "https://docs.mistral.ai/vibe/work/voice-mode" },
    { name: "Mistral Docs : Choose Work or Code", url: "https://docs.mistral.ai/vibe/choose-chat-work-code" },
    { name: "Mistral Help Center : où sont stockées mes données", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
    { name: "Mistral : tarifs de Vibe", url: "https://mistral.ai/pricing" },
  ],
}
