// Texte propre de /formation-mistral-assistante (mode page propre, rendu par SpokePage). Réécrit le 07/10/2026.
// Faits Mistral : FAITS-OUTILS-2026-10-07, documentation Vibe relue le 07/10/2026 (connecteurs, accords avant action,
// tâches planifiées, base de connaissances, instructions, compétences, mode vocal), notes de version du 22/09/2026,
// page tarifs (nombre de tâches planifiées par offre).
export default {
  slug: 'formation-mistral-assistante',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Mistral AI assistante de direction : agenda, courrier et comptes rendus avec Vibe",
  metaTitle: 'Formation Mistral AI assistante de direction | Masteria',
  metaDesc: "Vibe pour assistantes de direction : tri du courrier programmé, semaine du dirigeant préparée, comptes rendus, connecteurs Outlook et Gmail sous contrôle.",
  keywords: "formation Mistral assistante de direction, formation Vibe assistanat, Mistral AI secrétariat de direction, tâches planifiées Vibe, connecteur Outlook Vibe",
  resume: "La formation Mistral AI pour assistantes et assistants de direction apprend à relier Vibe à la messagerie et à l'agenda du dirigeant sans perdre le contrôle d'un seul envoi, à programmer le tri du courrier et la préparation de la semaine, puis à produire des comptes rendus qui font agir. Deux jours de sept heures, au bureau ou à distance, pour un pool d'assistantes ou une seule personne ; chaque journée revient à 1 980 € HT, avec une participante comme avec douze. La certification Qualiopi de Masteria couvre ses actions de formation, et votre OPCO décide de financer ou non la session, à l'aune des règles de branche et de ses réserves.",
  enBref: [
    { label: 'Formation', value: "Vibe au secrétariat de direction : courrier, agenda, rendez-vous, comptes rendus et instances" },
    { label: 'Durée', value: "Quatorze heures en deux journées, espacées d'une semaine si vous voulez éprouver les tâches programmées" },
    { label: 'Formats', value: "Au bureau ou en visioconférence ; le pool d'assistantes jusqu'à douze personnes, ou une assistante de dirigeant seule" },
    { label: 'Tarif', value: "1 980 € HT par jour, tarif unique jusqu'à douze personnes ; abonnement Vibe souscrit séparément" },
    { label: 'Financement', value: "Organisme Qualiopi (catégorie : actions de formation) ; l'OPCO de la branche juge du financement à ses conditions" },
    { label: 'Prérequis', value: "Gérer un agenda et une messagerie pour un dirigeant ; l'accord du service informatique pour brancher Outlook ou Gmail sur Vibe" },
  ],
  prerequis: "Gérer un agenda et une messagerie pour un dirigeant ; l'accord du service informatique pour brancher Outlook ou Gmail sur Vibe",
  intro: "Une assistante de direction jongle souvent entre deux messageries, un agenda partagé et des dossiers dispersés entre SharePoint et le serveur de fichiers. Vibe, le successeur de Le Chat chez Mistral AI depuis le 28 mai 2026, se branche sur Outlook, sur Gmail et sur leurs deux calendriers, et il sait exécuter une consigne à heure fixe. Ce guide, actualisé le 7 octobre 2026, montre comment organiser avec lui la semaine d'un dirigeant, et où placer les garde-fous pour qu'aucun mail ne parte et qu'aucune réunion ne disparaisse sans votre accord.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe prépare la semaine du dirigeant, et vous gardez la main sur chaque envoi",
    lead: "Microsoft Copilot s'affiche dans Outlook, Gemini dans Gmail. Vibe travaille depuis sa propre fenêtre et va chercher l'information dans les outils que vous lui ouvrez. Pour une assistante, cette position offre un avantage concret : une seule consigne peut croiser le calendrier Outlook du dirigeant, la boîte Gmail d'un conseil d'administration et un dossier SharePoint. Elle a un prix. Chaque connexion ouvre un accès, et chaque action qui modifie ou envoie doit rester sous votre contrôle.",
    sections: [
      {
        h3: "Les connecteurs donnent à Vibe accès au courrier, au calendrier et à SharePoint",
        paras: [
          "D'après les pages d'aide de Vibe relues le 7 octobre 2026, le connecteur Outlook lit et envoie des mails ; Outlook Calendar recherche des événements, planifie ou supprime des réunions et gère les invitations ; Gmail verse vos mails dans la conversation ; Google Calendar affiche et modifie les événements. D'autres connecteurs ouvrent SharePoint, Slack, Notion ou Box.",
          "Ce qu'un connecteur lit ne reste pas stocké chez Mistral et n'alimente l'entraînement d'aucun modèle, d'après l'éditeur, et cela vaut pour toutes les formules. L'administrateur peut désactiver un connecteur pour toute l'organisation. Avant de brancher la boîte d'un dirigeant, passez par votre service informatique : c'est lui qui tranche, et il voudra connaître la liste des fonctions activées.",
        ],
      },
      {
        h3: "Rien ne part sans votre accord, sauf si vous l'avez donné d'avance",
        paras: [
          "Toute action qui crée, modifie, envoie, publie ou supprime dans un autre logiciel déclenche une demande d'accord. Vibe affiche l'action et attend l'un de trois boutons : Refuser, Continuer (une seule fois) ou Toujours autoriser (pour le reste de la session). Dans Mes connecteurs, l'onglet Fonctions de chaque connecteur sépare les outils de lecture, sans risque, des outils interactifs qui écrivent quelque part, et règle chacun séparément.",
          "Pour le secrétariat de direction, la règle tient en une phrase : la lecture peut être autorisée en permanence, tout ce qui sort ou efface garde l'accord manuel. Une réunion supprimée par erreur dans l'agenda d'un président coûte bien plus cher que dix clics de validation.",
        ],
      },
      {
        h3: "Les tâches planifiées font le premier tri avant votre arrivée",
        paras: [
          "Une tâche planifiée rejoue une consigne à la date et à l'heure fixées, sur un rythme au choix : une fois, quotidien, hebdomadaire, mensuel ou annuel. On la crée dans Tâches, sous Planifiées, ou en écrivant directement à Vibe « programme cette demande tous les jeudis à 17 h ». Elle dispose des connecteurs, de la recherche web, des bibliothèques, des projets et des compétences, et son résultat apparaît dans la colonne de gauche, marqué comme non lu, prêt pour une question de suivi.",
          "Une limite compte pour la boîte d'un dirigeant : si la consigne déclenche un envoi, Vibe demande normalement confirmation, et une tâche qui tourne en votre absence n'enverra rien sans autorisation donnée d'avance. La grille de Mistral plafonne l'offre gratuite à cinq tâches actives ; les formules payantes n'ont pas de plafond. Trois tâches suffisent à changer une semaine :",
        ],
        list: [
          "Chaque matin à 8 h : les mails de la nuit rangés en « à traiter aujourd'hui », « à transmettre » et « pour information », avec l'expéditeur et l'échéance.",
          "Chaque jeudi à 17 h : la semaine suivante du dirigeant, réunion par réunion, avec les derniers échanges et les documents à imprimer.",
          "Le 25 de chaque mois : les échéances du mois suivant repérées dans le courrier (contrats, renouvellements, déclarations).",
        ],
      },
      {
        h3: "La base de connaissances retient les habitudes du dirigeant",
        paras: [
          "Le 22 septembre 2026, les anciennes mémoires ont cédé la place à une base de connaissances, la Knowledge Base. Elle se remplit quand vous écrivez « retiens que » ou « enregistre que », et Vibe y range aussi de lui-même des détails qui reviennent, comme vos formats préférés. Vous la consultez par Contexte puis Knowledge, dans le menu latéral, et vous pouvez effacer une entrée, un sujet entier ou la totalité.",
          "Notez-y que le dirigeant veut ses notes de rendez-vous sur une page, ou qu'il refuse les réunions avant 9 h le lundi. Mistral indique que la base n'enregistre pas de données sensibles comme les opinions politiques, les convictions religieuses ou la santé. Appliquez la même retenue aux tiers : aucun jugement sur un interlocuteur n'y figure. Les consignes stables de votre poste, elles, s'écrivent dans Contexte puis Instructions.",
        ],
      },
    ],
    table: {
      caption: "Une journée au secrétariat de direction, et la fonction de Vibe à mobiliser pour chaque tâche",
      headers: ["Tâche", "Outil de Vibe", "Point de vigilance"],
      rows: [
        ["Trier la boîte du matin", "Tâche planifiée quotidienne, connecteur Outlook ou Gmail", "Lecture seule : aucune réponse ne part sans vous"],
        ["Préparer un rendez-vous", "Compétence /meeting-prep, agenda connecté", "Les fonctions citées viennent parfois d'un ancien fil"],
        ["Déplacer une réunion", "Connecteur Outlook Calendar", "La suppression d'événement reste en accord manuel"],
        ["Retrouver une procédure interne", "Bibliothèque ou recherche SharePoint", "Le passage source ouvert par la note numérotée"],
        ["Écrire un courrier délicat au nom du dirigeant", "Instructions, base de connaissances, Canvas", "Relecture du dirigeant pour tout refus ou recadrage"],
        ["Mettre au propre un compte rendu", "Transcription Teams ou Meet collée, ou notes dictées", "Aucun fichier audio importé : Vibe part d'un texte"],
      ],
    },
    cas: {
      h3: "Cas pratique : la semaine du directeur général, prête chaque jeudi à 17 h",
      contexte: "Imaginons l'assistante du directeur général d'un distributeur alimentaire de 900 salariés. Le dirigeant travaille dans Outlook, le conseil d'administration échange sur une boîte Gmail dédiée, et chaque lundi commence par la même question : « qu'est-ce que j'ai cette semaine, et que dois-je avoir lu ? ». L'assistante veut une réponse prête dès le jeudi soir, pour avoir le vendredi pour corriger.",
      etapes: [
        "Depuis Mes connecteurs, branchez Outlook, Outlook Calendar et Gmail avec l'accord écrit du service informatique.",
        "Dans l'onglet Fonctions de chaque connecteur, laissez en accord manuel l'envoi de mails et la suppression d'événements.",
        "Dans Contexte puis Instructions, décrivez votre rôle et les préférences stables du dirigeant : format d'une page, horaires, formules de politesse.",
        "Ouvrez Tâches, rubrique Planifiées, créez une tâche hebdomadaire le jeudi à 17 h et collez-y le prompt ci-dessous.",
        "Le jeudi, ouvrez la conversation marquée d'un point non lu, vérifiez le tableau, puis validez un par un les brouillons de reprogrammation.",
      ],
      prompt: "Tu prépares la semaine prochaine du directeur général dont je suis l'assistante.\n\nLis d'abord son agenda Outlook du lundi au vendredi de la semaine prochaine. Pour chaque réunion, retrouve dans Outlook et dans la boîte Gmail du conseil d'administration les trois derniers échanges avec les participants, ainsi que les pièces jointes qui y circulent.\n\nPrésente le tout dans un tableau, jour par jour, avec ces colonnes : horaire, objet, participants et leur fonction, ce qui s'est dit au dernier échange, document à lire avant la réunion.\n\nSous le tableau, signale trois choses : les réunions qui se chevauchent, les journées sans une heure libre avant 14 h, et les invitations restées sans réponse.\n\nPour chaque chevauchement, rédige un brouillon de mail qui propose deux autres créneaux libres dans son agenda. N'envoie rien et ne modifie aucun événement : je valide moi-même.\n\nQuand tu doutes de la fonction d'un participant ou du lien entre un échange et une réunion, écris « à vérifier » au lieu de deviner.",
      resultat: "Le jeudi soir, vous trouvez un tableau de la semaine, la liste des conflits et des brouillons prêts à valider. Avant de transmettre, contrôlez les fonctions des participants, que Vibe peut tirer d'une ancienne signature, et le rattachement des échanges quand deux dossiers portent des noms voisins. Les mentions « à vérifier » vous disent où regarder d'abord, et le vendredi reste libre pour les ajustements.",
    },
    pieges: [
      {
        titre: "Une tâche planifiée qui envoie seule, sur la boîte d'un dirigeant",
        texte: "Une tâche tourne pendant votre absence. Pour qu'elle envoie un mail, il faut avoir accordé « Toujours autoriser » à l'avance. Sur la boîte d'un dirigeant, refusez cette autorisation : faites produire des brouillons et envoyez vous-même.",
      },
      {
        titre: "Un enregistrement de réunion confié à Vibe",
        texte: "Le mode vocal transcrit une voix en direct, dans douze langues dont le français ; la documentation ne prévoit aucun import de fichier audio. Pour un compte rendu, partez de la transcription produite par Teams ou Meet, ou de vos notes, et collez-la dans la conversation.",
      },
      {
        titre: "La boîte du dirigeant branchée sur un espace qui entraîne les modèles",
        texte: "Sur Free, Pro et Team, les conversations nourrissent par défaut l'entraînement des modèles de Mistral. Un abonné Free ou Pro s'y oppose dans ses paramètres ; sur Team, l'administrateur le refuse pour toute l'organisation ; Enterprise l'exclut d'office. Réglez ce point avant de brancher la messagerie d'un dirigeant.",
      },
      {
        titre: "Des consignes internes restées à l'ancienne interface",
        texte: "La mise à jour publiée par Mistral le 22 septembre 2026 a fondu l'onglet Chat dans Work, avec une bascule Fast ou Think, et remplacé les agents par des Skills. Une procédure qui parle encore de l'ancien nom, de l'onglet Chat ou d'un agent égare la remplaçante qui la suit : mettez-la à jour.",
      },
    ],
  },
  audience: [
    {
      title: "Assistantes et assistants de direction ou de dirigeant",
      desc: "Vous tenez l'agenda, le courrier et la préparation des rendez-vous du dirigeant. Au fil des deux jours, vous apprenez à brancher Vibe sur sa messagerie et son agenda en validant vous-même chaque envoi.",
    },
    {
      title: "Office managers et assistants de service",
      desc: "Plusieurs agendas et les demandes internes du service vous reviennent. Les tâches planifiées et une bibliothèque de procédures répondent aux questions qui reviennent chaque semaine.",
    },
    {
      title: "Secrétariats généraux et assistantes d'instances",
      desc: "Convocations, ordres du jour et suivi des décisions d'une séance à l'autre font votre quotidien. Vous apprenez à produire les comptes rendus à partir d'une transcription, dans un espace réglé pour la confidentialité.",
    },
  ],
  useCases: [
    {
      icon: '✉',
      title: "Courrier trié avant 8 h",
      desc: "Une tâche planifiée quotidienne range les mails de la nuit par urgence, avec l'expéditeur et l'échéance, sans rien envoyer.",
    },
    {
      icon: '📅',
      title: "Semaine du dirigeant",
      desc: "Chaque jeudi, un tableau de la semaine suivante réunion par réunion, avec les derniers échanges et les documents à lire.",
    },
    {
      icon: '🎯',
      title: "Rendez-vous préparés",
      desc: "La compétence /meeting-prep prépare une réunion de l'agenda connecté : participants, échanges récents, points à aborder.",
    },
    {
      icon: '📝',
      title: "Comptes rendus qui font agir",
      desc: "Depuis une transcription Teams ou Meet, un compte rendu avec décisions, actions, porteurs et échéances.",
    },
    {
      icon: '📚',
      title: "Procédures retrouvées",
      desc: "Une bibliothèque des notes de service répond aux questions courantes avec un renvoi vers le passage cité.",
    },
    {
      icon: '🏛',
      title: "Conseils et instances",
      desc: "Ordres du jour, convocations et suivi des décisions tenus dans un projet par instance.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Relier Vibe à la messagerie et à l'agenda",
      duration: "1h30",
      description: "Choisir les connexions utiles et le niveau de contrôle de chacune.",
      items: [
        "Outlook, Outlook Calendar, Gmail, Google Calendar : ce que chaque connecteur lit, envoie ou modifie",
        "Accord du service informatique, désactivation d'un connecteur par l'administrateur",
        "Entraînement des modèles : réglage individuel sur Free et Pro, coupure par l'administrateur sur Team, exclusion sur Enterprise",
        "Coordonnées et échanges des correspondants du dirigeant : ce que le RGPD autorise à confier",
      ],
      exercise: "Vous dressez la liste des connexions utiles à votre poste et le niveau d'accord que vous gardez sur chaque fonction.",
    },
    {
      day: 1,
      title: "Module 2 · Trier le courrier avec des tâches planifiées",
      duration: "2h",
      description: "Faire préparer le tri avant votre arrivée, sans le moindre envoi automatique.",
      items: [
        "Créer une tâche quotidienne, hebdomadaire ou mensuelle, ou la programmer depuis la conversation",
        "Écrire une consigne qui classe sans répondre",
        "Relire le résultat marqué d'un point non lu et poser des questions de suivi",
        "Refuser l'autorisation d'envoi donnée d'avance sur la boîte d'un dirigeant",
      ],
      exercise: "Vous écrivez la tâche de tri du matin adaptée à votre boîte et à vos propres catégories.",
    },
    {
      day: 1,
      title: "Module 3 · Préparer les rendez-vous et la semaine du dirigeant",
      duration: "2h",
      description: "Donner au dirigeant l'essentiel de chaque réunion avant qu'elle commence.",
      items: [
        "La compétence /meeting-prep sur une réunion de l'agenda",
        "Croiser l'agenda Outlook et les échanges Gmail dans une même consigne",
        "Repérer les chevauchements et les invitations sans réponse",
        "Brouillons de reprogrammation validés un par un",
      ],
      exercise: "Vous préparez la semaine à venir de votre dirigeant et vous contrôlez chaque fonction de participant citée.",
    },
    {
      day: 1,
      title: "Module 4 · Conserver les préférences du dirigeant",
      duration: "1h30",
      description: "Ne plus répéter les mêmes consignes à chaque conversation.",
      items: [
        "Instructions du poste dans Contexte, puis Instructions",
        "Base de connaissances : « retiens que », consultation, suppression d'un sujet",
        "Ce que l'on n'y écrit pas : avis sur des tiers, santé, opinions",
        "Mise à jour quand les habitudes du dirigeant changent",
      ],
      exercise: "Vous rédigez les instructions de votre poste et les préférences stables de votre dirigeant.",
    },
    {
      day: 2,
      title: "Module 5 · Mettre au propre un compte rendu",
      duration: "1h30",
      description: "Passer d'une transcription brute à un document qui fait agir.",
      items: [
        "Transcription Teams ou Meet, notes dictées avec le mode vocal : jamais de fichier audio",
        "Décisions, actions, porteurs et échéances séparés",
        "« À vérifier » pour ce que la transcription laisse ambigu",
        "Même contenu décliné en compte rendu complet et en mail de suivi",
      ],
      exercise: "Vous transformez la transcription anonymisée d'une réunion récente en compte rendu et en mail de suivi.",
    },
    {
      day: 2,
      title: "Module 6 · Écrire au nom du dirigeant",
      duration: "2h",
      description: "Tenir le ton du dirigeant et garder la relecture là où elle compte.",
      items: [
        "Refus, relances et remerciements dans le ton du dirigeant",
        "Corrections dans le Canvas et comparaison des versions",
        "Envoi par le connecteur Outlook, accord donné action par action",
        "Liste des courriers qui passent toujours sous les yeux du dirigeant",
      ],
      exercise: "Vous rédigez trois courriers délicats tirés de votre boîte, anonymisés, puis vous les soumettez à validation.",
    },
    {
      day: 2,
      title: "Module 7 · Répondre aux questions internes depuis les procédures",
      duration: "2h",
      description: "S'appuyer sur les documents qui font foi plutôt que sur la mémoire.",
      items: [
        "Bibliothèque des procédures et des notes de service",
        "Notes numérotées et bouton Sources lus avant de répondre",
        "Partage à l'équipe en lecteur seulement",
        "Retrait des versions périmées pour qu'elles ne soient plus citées",
      ],
      exercise: "Vous créez la bibliothèque de vos procédures et vous y posez les questions qu'on vous adresse le plus souvent.",
    },
    {
      day: 2,
      title: "Module 8 · Poser les règles du secrétariat de direction",
      duration: "1h30",
      description: "Écrire ce qui se lit, ce qui se valide et ce qui ne part jamais seul.",
      items: [
        "Charte d'usage : lecture libre, validation manuelle, envoi automatique interdit",
        "Dossiers confidentiels de la direction et données des tiers protégés",
        "AI Act, article 4 : la formation consignée dans le registre de l'entreprise, sans certificat requis",
        "Plan à 30 jours : deux tâches planifiées en service, une compétence transmise à la remplaçante, un point avec le dirigeant",
      ],
      exercise: "Vous fixez par écrit ce que Vibe peut faire à votre poste, puis vous soumettez ce texte à votre dirigeant.",
    },
  ],
  objectives: [
    "Le participant règle les connecteurs Outlook, Gmail et calendrier avec un niveau d'accord adapté à chaque fonction.",
    "Le participant crée une tâche planifiée qui trie le courrier sans rien envoyer.",
    "Le participant prépare la semaine d'un dirigeant en croisant son agenda et ses échanges récents.",
    "Le participant rédige un compte rendu (décisions, actions, porteurs, échéances) à partir d'une transcription.",
    "Le participant vérifie les fonctions, les noms et les dates cités par Vibe avant de transmettre au dirigeant.",
  ],
  faq: [
    {
      q: "Vibe s'installe-t-il dans Outlook comme Microsoft Copilot ?",
      a: "Non. Vibe fonctionne dans son application web ou mobile et lit Outlook par un connecteur, alors que Microsoft Copilot s'affiche dans Outlook lui-même. Chaque position a son intérêt. Vibe peut croiser Outlook, Gmail, SharePoint ou Slack dans une seule consigne, ce qui sert l'assistante qui gère plusieurs boîtes. Copilot reste dans la fenêtre où vous travaillez déjà. Si votre entreprise hésite entre les deux, notre formation multi-outils les compare sur vos propres dossiers.",
    },
    {
      q: "Vibe peut-il accepter une invitation ou déplacer une réunion à ma place ?",
      a: "Oui, par le connecteur Outlook Calendar, qui recherche, planifie et supprime des réunions et gère les invitations. Chaque action qui modifie l'agenda attend votre accord, avec trois réponses possibles : Refuser, Continuer une seule fois, ou Toujours autoriser jusqu'à la fermeture de la session. Dans l'onglet Fonctions du connecteur, vous pouvez aussi régler chaque action une par une. Sur l'agenda d'un dirigeant, gardez l'accord manuel pour la suppression d'événements et l'envoi de réponses.",
    },
    {
      q: "Comment Vibe prépare-t-il un rendez-vous du dirigeant ?",
      a: "Mistral livre avec Vibe une compétence, /meeting-prep, qui prépare les réunions à venir à partir des éléments du calendrier. Reliée à l'agenda et à la messagerie, elle rassemble le contexte des participants et les échanges récents ; vous pouvez y ajouter une bibliothèque qui contient les dossiers du sujet. Relisez toujours les fonctions des participants : Vibe les tire parfois d'une signature ancienne, et un titre erroné dans une note au dirigeant se remarque.",
    },
    {
      q: "Peut-on confier à Vibe l'enregistrement audio d'une réunion ?",
      a: "La documentation de Mistral ne le prévoit pas. Le mode vocal, fondé sur les modèles Voxtral, transcrit ce que vous dictez en direct, dans douze langues dont le français, et vous relisez le texte avant de l'envoyer. Pour une réunion enregistrée, servez-vous de la transcription que produit votre outil de visioconférence, Teams ou Meet, puis confiez ce texte à Vibe avec la consigne de séparer décisions, actions, porteurs et échéances.",
    },
    {
      q: "Que garde Vibe en mémoire entre deux conversations ?",
      a: "Ce que contient sa base de connaissances, qui a remplacé les mémoires le 22 septembre 2026. Vous y ajoutez une préférence en écrivant « retiens que », et Vibe y range aussi seul des détails qui reviennent. Tout se consulte dans Contexte, puis Knowledge, et s'efface entrée par entrée, sujet par sujet ou en bloc. Mistral indique que la base n'enregistre pas de données sensibles, comme la santé. Les consignes permanentes de votre poste trouvent mieux leur place dans les instructions.",
    },
    {
      q: "Combien de tâches planifiées une assistante peut-elle programmer ?",
      a: "Le 7 octobre 2026, la grille de Mistral fixait le plafond à cinq tâches actives pour un compte gratuit, sans plafond pour Pro, Team ou Enterprise. Une tâche peut s'exécuter une seule fois ou revenir à un rythme quotidien, hebdomadaire, mensuel ou annuel, et mobiliser les connecteurs, la recherche web et les bibliothèques. Pour le secrétariat d'un dirigeant, trois ou quatre tâches bien écrites couvrent l'essentiel : tri du matin, semaine suivante, échéances du mois.",
    },
    {
      q: "Quel budget prévoir pour former quatre assistantes, et qui finance ?",
      a: "Le tarif se fixe à la journée : 1 980 € HT, pour une assistante comme pour douze. Former quatre assistantes pendant deux jours coûte 3 960 € HT, 990 € HT par participante. Le financement relève de votre OPCO, qui l'examine à l'aune de ses propres critères ; Masteria y est éligible grâce à sa certification Qualiopi, obtenue pour les actions de formation, et vous fournit les pièces que la demande exige. L'abonnement Vibe se règle à part, auprès de Mistral.",
    },
  ],
  tarifs: {
    titre: "Le prix pour un secrétariat de direction",
    paras: [
      "Le forfait inclut un entretien préparatoire avec le formateur : il passe en revue avec vous l'organisation des boîtes, les agendas à gérer, deux comptes rendus récents anonymisés et vos procédures internes. Les ateliers portent ensuite sur votre quotidien, et chaque participante repart avec ses tâches planifiées écrites, ses instructions de poste et sa bibliothèque de procédures.",
      "Exemple : les quatre assistantes d'un comité de direction suivent ensemble les deux jours en intra : sur 3 960 € HT facturés, la part de chacune s'élève à 990 € HT. Une assistante de dirigeant accompagnée seule règle 1 980 € HT pour chaque journée. Votre OPCO tranche sur le financement à partir de ses propres critères, avec le dossier que Masteria prépare pour vous. L'abonnement Vibe reste en dehors du prix.",
    ],
  },
  apres: {
    titre: "Après la formation, un secrétariat outillé sur mesure",
    texte: "Certaines directions veulent aller plus loin : un assistant de tri relié à la messagerie avec vos propres règles de classement, un assistant de procédures branché sur SharePoint, à qui les équipes posent leurs questions courantes, ou un outil qui prépare convocations et ordres du jour de vos instances à partir de l'agenda. Masteria cadre le besoin avec la direction et le service informatique, propose un forfait une fois le cadrage achevé, puis réalise l'outil avec ses développeurs. Ce développement sort du champ de la formation, et il n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Dites-nous quelles boîtes et quels agendas vous gérez : les ateliers partent de votre organisation.",
    fin: {
      titre: "Préparons la session à partir de l'organisation de votre secrétariat",
      texte: "Indiquez le nombre d'assistantes à former, vos messageries (Outlook, Gmail ou les deux) et l'offre Vibe de l'entreprise. En retour, nous vous adressons un programme sur mesure et plusieurs dates.",
    },
  },
  terrain: {
    titre: "Sur le terrain : des relevés de décisions et un assistant pour les instances",
    texte: "Seize personnes, salariées d'une interprofession agricole ou de son syndicat de producteurs, dont des assistantes chargées de l'administration et de la logistique, ont été formées par Masteria en septembre 2026. La plénière du premier jour a mis Vibe en balance avec cinq autres assistants sur des documents de la filière. L'atelier gestion du troisième jour a produit des relevés de décisions et un assistant destiné aux instances, puis chacun a appris à vérifier qu'un assistant n'invente pas une donnée qui ne figure pas dans ses sources.",
    lien: '/etudes-de-cas-ia#mission-interprofession-agricole',
  },
  liensAssocies: [
    { label: "Formation IA assistante de direction, quel que soit l'assistant", href: '/formation-ia-assistante' },
    { label: "Assistanat de direction : Vibe, Copilot, Gemini et ChatGPT comparés en formation", href: '/formation-multi-outils-assistante' },
    { label: "Le même métier avec Microsoft Copilot, dans Outlook et Teams", href: '/formation-copilot-assistante' },
    { label: "Écrits professionnels avec l'IA : courriers, comptes rendus, notes", href: '/formation-ia-ecrits-pro' },
    { label: "Formation Mistral AI : deux jours de socle sur Vibe", href: '/formation-mistral-ai' },
  ],
  sources: [
    { name: "Documentation Mistral, connecteurs Outlook, Outlook Calendar, Gmail et Google Calendar", url: "https://docs.mistral.ai/vibe/work/connectors" },
    { name: "Documentation Mistral, accords avant création, envoi ou suppression", url: "https://docs.mistral.ai/vibe/work/safety-and-approvals" },
    { name: "Documentation Mistral, tâches planifiées et leurs fréquences", url: "https://docs.mistral.ai/vibe/work/scheduled-tasks" },
    { name: "Documentation Mistral, base de connaissances qui remplace les mémoires", url: "https://docs.mistral.ai/vibe/work/knowledge" },
    { name: "Documentation Mistral, instructions personnalisées du poste", url: "https://docs.mistral.ai/vibe/work/custom-instructions" },
    { name: "Documentation Mistral, compétence /meeting-prep et autres Skills livrées", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Documentation Mistral, mode vocal (Voxtral, douze langues)", url: "https://docs.mistral.ai/vibe/work/voice-mode" },
    { name: "Notes de version Mistral : refonte de Vibe du 22 septembre 2026", url: "https://docs.mistral.ai/resources/release-notes" },
    { name: "Tarifs de Vibe et nombre de tâches planifiées par offre", url: "https://mistral.ai/pricing" },
  ],
}
