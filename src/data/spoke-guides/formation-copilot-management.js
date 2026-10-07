// Contenu propre à /formation-copilot-management (guide terrain, page propre). Rendu par SpokePage.
// Faits Microsoft : fiche du 7 octobre 2026 (Learn, Cowork documenté le 29/09/2026, pages tarifs France).
// AI Act : annexe III et report au 02/12/2027 par le règlement (UE) 2026/1744. Réécrit le 07/10/2026.
export default {
  slug: 'formation-copilot-management',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Copilot pour managers : réunions, comités et suivi d'équipe",
  metaTitle: 'Formation Copilot Managers · Microsoft 365 | Masteria',
  metaDesc: "Formation Copilot pour managers : relevés de réunions Teams, comités préparés avec Researcher, suivi de projets, routines Cowork, règles RH. 2 jours.",
  keywords: "formation copilot management, formation copilot managers, microsoft copilot manager, copilot teams compte rendu réunion, copilot researcher comité de direction, copilot cowork routine équipe, formation copilot qualiopi opco",
  prerequis: "Animer une équipe et travailler dans Teams et Outlook ; sans licence, Copilot Chat suffit pour une bonne part des ateliers",
  resume: "Cette formation Copilot s'adresse aux managers de proximité, aux chefs de service et aux membres de comités de direction qui veulent passer moins de temps sur les comptes rendus et les préparations, et davantage avec leur équipe. Elle montre comment Microsoft Copilot (anciennement Microsoft 365 Copilot) exploite les réunions Teams, les fils Outlook et les fichiers du service, et jusqu'où on peut lui confier le travail. Deux journées de sept heures, pour une promotion de douze managers au maximum ou un seul, chacune facturée 1 980 € HT ; votre OPCO peut les prendre en charge, d'après ses règles et les fonds qu'il lui reste.",
  enBref: [
    { label: 'Formation', value: "Copilot au service du manager : réunions, comités, suivi des actions, messages d'équipe, règles autour des personnes" },
    { label: 'Durée', value: "14 heures en deux journées, consécutives ou espacées de deux semaines" },
    { label: 'Formats', value: "Promotion interne jusqu'à douze managers, ou accompagnement d'un dirigeant seul ; présentiel ou distanciel" },
    { label: 'Tarif', value: "1 980 € HT par journée animée, donc 3 960 € HT le parcours" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; l'OPCO statue d'après ses propres critères de prise en charge" },
    { label: 'Prérequis', value: "Encadrer au moins une personne et utiliser Teams au quotidien ; licences relevées avec vous au cadrage" },
  ],
  intro: "Le temps d'un manager se perd souvent entre deux réunions : retrouver ce qui a été décidé, relancer une action, préparer le comité de jeudi à partir de vingt fils de discussion. Copilot sait désormais résumer une réunion Teams et en extraire les actions, condenser un fil Outlook, bâtir une synthèse avec les documents du service et, avec Cowork, enchaîner plusieurs tâches après votre accord. Ce programme montre comment en tirer du temps pour l'équipe, et où poser la limite : Copilot n'évalue pas un collaborateur et ne remplace pas une conversation difficile. Les ateliers partent de votre agenda et de vos dossiers en cours.",
  guide: {
    kicker: 'Guide terrain management',
    h2: "Copilot tient la trace des réunions ; le manager garde le jugement sur les personnes",
    lead: "Un manager produit beaucoup d'écrit qui ne se voit pas : l'ordre du jour, le relevé des décisions, le point d'avancement, le message à l'équipe, la préparation du comité. C'est sur ce terrain que Copilot rend du temps, parce qu'il travaille sur des matériaux que l'équipe a déjà produits. Le reste du métier, l'entretien, l'arbitrage, le retour sur un travail, demande un jugement que l'outil n'a pas et que le droit encadre. Ce guide trace la frontière entre les deux, avec une méthode pour chaque côté.",
    sections: [
      {
        h3: "Les réunions Teams deviennent des relevés de décisions",
        paras: [
          "Quand une réunion Teams est enregistrée et transcrite, Copilot en produit un résumé, liste les actions à suivre avec leur responsable lorsqu'il a été nommé, et répond à une question comme « qu'a-t-on décidé sur le planning de novembre ? ». Le manager relit, corrige les noms et les échéances, puis diffuse. Le récapitulatif repose sur la transcription : la décision de transcrire se prend donc en amont, réunion par réunion, et s'annonce aux participants.",
          "Avec la licence, Copilot interroge aussi les réunions, en plus des mails et des fichiers. Un manager prépare ainsi son point hebdomadaire en demandant ce qui a avancé, ce qui bloque et ce qui attend une décision, d'après les réunions et les fils de la semaine. Sans licence, Copilot Chat se limite à la réunion ouverte dans Teams ou aux pièces qu'on lui dépose.",
        ],
      },
      {
        h3: "Le comité se prépare avec Researcher et les blocs-notes",
        paras: [
          "Researcher, réservé à la licence, parcourt par étapes successives tout ce que le manager peut consulter, canaux Teams compris, avant de livrer une synthèse appuyée sur des sources nommées. Pour un comité de direction, il rassemble l'état d'un projet, les points de friction relevés dans les échanges et les décisions déjà prises. Chaque appui se rouvre avant que la synthèse ne serve de base à une prise de parole.",
          "Un bloc-notes Copilot rassemble ce qui compte pour un projet qui dure : son cahier des charges, ses comptes rendus successifs, ses mails décisifs. Copilot travaille alors sur ce seul périmètre, et un document voisin ne vient plus brouiller la réponse. Pour un manager qui pilote trois projets, trois blocs-notes valent mieux qu'une recherche dans toute la messagerie.",
        ],
      },
      {
        h3: "Les usages qui touchent aux personnes obéissent à d'autres règles",
        paras: [
          "Préparer un entretien annuel avec Copilot est tentant : reprendre les objectifs de l'an passé, relire les mails d'un collaborateur, rédiger l'évaluation. La formation fixe une ligne nette. Copilot peut mettre en forme une trame d'entretien, reformuler un retour que le manager a écrit, ou préparer les questions d'un point de suivi. Il ne rédige pas l'appréciation portée sur une personne et ne fouille pas ses échanges pour en bâtir une.",
          "Deux textes l'imposent. Le RGPD veut que les données personnelles des salariés soient traitées pour une finalité déterminée, dont ils sont informés. Le texte européen sur l'IA (AI Act) compte parmi ses usages sensibles l'évaluation du travail et du comportement des salariés par un système conçu pour cela ; depuis le règlement (UE) 2026/1744, qui a modifié le calendrier, ces obligations s'appliqueront le 2 décembre 2027. Un assistant généraliste détourné vers ce rôle place l'entreprise sur un terrain que le texte encadre. Son article 4, en vigueur depuis février 2025, demande déjà aux employeurs d'aider leur personnel, managers compris, à bien se servir de l'IA.",
        ],
      },
      {
        h3: "Cowork et les invites planifiées installent des routines d'équipe",
        paras: [
          "Disponible pour les comptes de travail depuis la fin septembre 2026, Copilot Cowork déroule une tâche de bout en bout : rassembler les points d'avancement, rédiger le message de la semaine, planifier la réunion suivante, publier dans le canal Teams de l'équipe. Il demande l'accord du manager avant chaque action sensible et indique le niveau de risque de chacune. Une tâche peut revenir chaque vendredi, ou partir quand un message arrive dans un canal. Microsoft facture sa consommation en sus de l'abonnement.",
          "Pour une routine plus légère, une invite planifiée suffit : chaque lundi à 8 heures, la liste des actions en retard relevées dans les réunions de la semaine précédente. La documentation consultée fin septembre en accorde dix par personne, licence requise. Avant de programmer quoi que ce soit, une question tranche : qui lira le résultat, et qu'en fera-t-il ?",
        ],
      },
      {
        h3: "Le manager décide aussi qui reçoit une licence",
        paras: [
          "Dans beaucoup d'entreprises, le manager arbitre la répartition des licences de son service. Relevé le 7 octobre 2026, le site de Microsoft pour la France propose Copilot Business, destiné aux organisations de 300 utilisateurs au plus, à 18,20 € HT par personne et par mois quand on règle l'année d'avance, et à 21,84 € HT en paiement mensuel, engagement d'un an maintenu. La remise de lancement ramène la première année à 15,60 € HT pour les entreprises déjà clientes de Microsoft 365 qui s'engagent pour un an d'ici la fin de 2026. Au-delà de 300 utilisateurs, la licence des grandes entreprises coûte 26,00 € HT mensuels en annuel, 27,30 € HT en mensuel.",
          "La règle que nous conseillons tient en une phrase : la licence va d'abord à ceux dont le travail repose sur de longs historiques de mails, de réunions et de documents. Les autres apprennent la méthode avec Copilot Chat, sans supplément, et reçoivent une licence quand leur usage le justifie. Le groupe industriel présenté plus bas a suivi cette logique, palier par palier.",
        ],
      },
      {
        h3: "Au bout d'un mois, l'équipe mesure ce qui a changé dans sa semaine",
        paras: [
          "Le plan des trente jours fixe trois usages par manager et une mesure simple. Avant la formation, chacun note le temps qu'il consacre à trois tâches récurrentes : le relevé de la réunion hebdomadaire, le point d'avancement, la préparation du comité mensuel. Un mois plus tard, il refait la même estimation et note ce qu'il a cessé de faire. Côté administrateur, Copilot Analytics rend compte de l'usage, et Microsoft y a ajouté le 6 octobre 2026 des statistiques propres à Cowork. Ces chiffres internes, datés et propres à votre équipe, valent mieux que les pourcentages de gain qui circulent sans source.",
        ],
      },
    ],
    table: {
      caption: "Le travail du manager avec Copilot : ce qu'on délègue, ce qu'on garde (octobre 2026)",
      headers: ['Tâche', 'Ce que fait Copilot', 'Ce que garde le manager'],
      rows: [
        ["Relevé de décisions d'une réunion", 'Résumé et actions tirés de la transcription Teams', 'Noms, échéances et formulation des décisions'],
        ["Point hebdomadaire d'équipe", 'Synthèse des réunions et des fils de la semaine', "Les priorités annoncées à l'équipe"],
        ["Préparation d'un comité", 'Synthèse sourcée par Researcher, avec la licence', 'Le message et les arbitrages présentés'],
        ["Message d'équipe délicat", 'Brouillon et conseils de ton dans Outlook', "Le fond, et le choix entre l'écrit et l'oral"],
        ["Suivi d'un projet sur plusieurs semaines", 'Bloc-notes Copilot qui réunit les pièces du projet', "La décision de relancer ou d'alerter"],
        ['Entretien annuel', "Mise en forme d'une trame, reformulation d'un retour écrit par le manager", "L'appréciation portée sur la personne"],
        ['Tableau de suivi des actions', "Excel, mode Plan sur l'export des tâches", 'Les retards signalés aux intéressés'],
      ],
    },
    cas: {
      h3: "Cas pratique : préparer le comité mensuel à partir d'un mois de réunions",
      contexte: "Prenons une responsable de production qui encadre quatre chefs d'équipe dans une usine de 200 personnes. Chaque mois, elle présente au comité de direction l'avancement de trois chantiers : la mise en route d'une ligne, un plan de réduction des rebuts et le recrutement de deux techniciens. L'information est dispersée dans une vingtaine de réunions Teams, des fils Outlook et un fichier de suivi. Cette situation sert d'exemple ; en session, chacun part de son propre comité.",
      etapes: [
        "Vérifiez que les réunions du mois ont été transcrites : Copilot ne tirera rien d'une réunion sans transcription.",
        "Lancez Researcher, copiez-y la demande qui suit et désignez le fichier de suivi en tapant la barre oblique.",
        "Ouvrez les appuis de chaque décision citée ; corrigez une échéance ou un responsable mal attribués.",
        "Retirez de la synthèse toute appréciation sur une personne, et ne gardez pour le recrutement que son état d'avancement.",
        "Demandez ensuite à PowerPoint trois slides tirées de la synthèse corrigée, une par chantier.",
      ],
      prompt: "Le comité de direction de fin de mois examine trois chantiers dont je suis responsable : la mise en route de la ligne 4, le plan de réduction des rebuts et le recrutement de deux techniciens de maintenance. Le fichier de suivi est cité ici : /suivi des chantiers production.\n\nCherche dans mes réunions Teams, mes mails et les fichiers partagés du mois écoulé, puis rédige pour chaque chantier :\n1. Ce qui a avancé, avec les dates.\n2. Les décisions prises, avec la réunion ou le mail où elles apparaissent.\n3. Les points bloqués et ce qu'ils attendent (décision, budget, fournisseur).\n4. Les actions en retard par rapport au fichier de suivi.\n\nN'émets aucun jugement sur les personnes. Cite chaque source avec sa date. Si une information manque, signale-la sans la deviner.",
      resultat: "Vous obtenez une synthèse par chantier, chaque décision rattachée à sa réunion ou à son mail, et la liste des retards par rapport au fichier de suivi. Deux limites demeurent. Une décision prise dans un couloir n'existe pas pour Copilot, et une action discutée sans être attribuée peut apparaître sous le nom de la dernière personne qui en a parlé. La responsable complète, corrige, puis présente au comité un état qu'elle assume.",
    },
    pieges: [
      {
        titre: 'Une réunion jamais transcrite',
        texte: "Copilot ne résume pas ce qu'il n'a pas reçu. Décidez à l'avance des réunions qui méritent une transcription, et annoncez-la aux participants.",
      },
      {
        titre: 'Un retour rédigé par Copilot à la place du manager',
        texte: "Un collaborateur reconnaît vite une appréciation générique. Écrivez le fond vous-même, puis demandez à Copilot une version plus claire ou plus courte.",
      },
      {
        titre: 'Une action attribuée à la mauvaise personne',
        texte: "Dans un relevé automatique, la dernière personne qui évoque un sujet en hérite parfois. Relisez les noms avant toute diffusion.",
      },
      {
        titre: 'Des documents RH cités dans une synthèse de projet',
        texte: "Si un dossier d'entretiens est partagé trop largement, Copilot peut le citer. Faites vérifier les droits SharePoint du service avant l'arrivée des licences.",
      },
      {
        titre: 'Une routine Cowork que personne ne lit',
        texte: "Un message généré chaque vendredi finit vite ignoré. Gardez les routines qui servent un lecteur précis, et coupez les autres au bout d'un mois.",
      },
    ],
  },
  audience: [
    {
      title: "Chefs d'équipe et managers de terrain",
      desc: "Vous animez des réunions, suivez des actions et répondez à une équipe qui attend des réponses rapides. Vous apprenez à confier à Copilot le relevé des décisions et le suivi des actions, pour garder vos échanges directs avec l'équipe.",
    },
    {
      title: 'Chefs de service et responsables de projet',
      desc: "Vos projets s'étalent sur des semaines et l'information se disperse. Vous apprenez à réunir chaque dossier dans un bloc-notes Copilot et à préparer un point d'avancement sourcé.",
    },
    {
      title: 'Membres de comités de direction',
      desc: "Vous lisez plus de synthèses que vous n'en écrivez. Vous apprenez à commander à Researcher une note sourcée, à en vérifier les appuis et à arrêter les règles d'usage de vos équipes.",
    },
    {
      title: 'Référents IA et responsables de la transformation',
      desc: "Vous portez le déploiement de Copilot auprès des managers. La formation vous donne une méthode d'adoption par paliers, une charte et des repères simples pour mesurer l'usage au bout d'un mois.",
    },
  ],
  useCases: [
    { icon: '🗒️', title: 'Relevés de décisions tirés de Teams', desc: "Résumé, actions et échéances issus de la transcription, relus avant diffusion." },
    { icon: '📋', title: 'Point hebdomadaire préparé', desc: "Ce qui a avancé, ce qui bloque, ce qui attend une décision, d'après les réunions et les fils de la semaine." },
    { icon: '🧭', title: 'Comités préparés avec Researcher', desc: "Une synthèse sourcée sur l'état d'un projet, chaque appui rouvert avant la prise de parole." },
    { icon: '📂', title: 'Projets suivis en bloc-notes', desc: "Les pièces d'un projet réunies dans un espace où Copilot ne regarde rien d'autre." },
    { icon: '✉️', title: "Messages d'équipe au ton juste", desc: "Brouillon et conseils de ton dans Outlook pour une annonce ou un changement d'organisation ; le fond reste au manager." },
    { icon: '🔁', title: 'Routines confiées à Cowork', desc: "Le message du vendredi ou la liste des actions en retard préparés chaque semaine, après votre accord." },
  ],
  modules: [
    {
      day: 1,
      title: 'Module 1 · Ce que Copilot voit de votre service',
      duration: '1h30',
      description: "Comprendre l'accès de Copilot aux réunions, aux fils et aux fichiers de l'équipe, selon la licence.",
      items: [
        "Copilot Chat sans supplément et licence Microsoft Copilot : ce que chacun lit de la vie du service",
        "Droits SharePoint et canaux Teams : ce qui remonte dans les réponses de chacun",
        "Choix du modèle, sources web ou travail, étiquette Basic ou Premium dans les applications",
        "Ce qui reste hors de Copilot : dossiers individuels, entretiens, informations médicales",
      ],
      exercise: "Vous demandez à Copilot un état de votre semaine, puis vous identifiez la source de chaque élément.",
    },
    {
      day: 1,
      title: 'Module 2 · Tirer des réunions Teams un relevé de décisions',
      duration: '2h',
      description: "Passer de la transcription au relevé diffusé, sans erreur de nom ni d'échéance.",
      items: [
        "Enregistrement et transcription : quand les lancer, comment les annoncer",
        "Résumé, actions à suivre, questions posées à Copilot pendant ou après la réunion",
        "Relecture des responsables et des échéances avant diffusion",
        "Modèle de relevé de décisions propre au service",
      ],
      exercise: "Vous produisez le relevé d'une réunion récente de votre équipe et corrigez chaque action mal attribuée.",
    },
    {
      day: 1,
      title: "Module 3 · Écrire à l'équipe depuis Outlook et Teams",
      duration: '1h30',
      description: "Rédiger plus vite les messages qui comptent, en gardant votre voix.",
      items: [
        "Condenser un fil avant d'y répondre",
        "Annonce, changement d'organisation, remerciements : brouillon, puis réglage du ton",
        "Conseils de clarté de Copilot dans Outlook avant l'envoi",
        "Les messages qui doivent rester un échange de vive voix",
      ],
      exercise: "Vous rédigez le message qui annonce un changement récent dans votre service, puis vous le faites relire par un pair.",
    },
    {
      day: 1,
      title: 'Module 4 · Suivre un projet dans un bloc-notes Copilot',
      duration: '2h',
      description: "Réunir les pièces d'un projet pour que Copilot y travaille de semaine en semaine.",
      items: [
        "Créer le bloc-notes : cahier des charges, comptes rendus, mails clés",
        "Point d'avancement hebdomadaire tiré du bloc-notes",
        "Excel en mode Plan : transformer l'export des tâches en tableau de suivi",
        "Signaler un retard sans désigner de coupable",
      ],
      exercise: "Vous ouvrez le bloc-notes de votre projet principal et en tirez le point d'avancement de la semaine.",
    },
    {
      day: 2,
      title: 'Module 5 · Préparer un comité avec Researcher',
      duration: '2h',
      description: "Arriver au comité avec une synthèse dont chaque phrase a un appui vérifié.",
      items: [
        "Formuler la demande : périmètre, période, format de la synthèse",
        "Vérifier chaque appui et écarter les informations sur les personnes",
        "Passer de la synthèse aux slides dans PowerPoint, au modèle graphique de l'entreprise",
        "Relancer la même demande sur un second modèle, version web, pour comparer deux lectures",
      ],
      exercise: "Vous préparez votre prochain comité avec Researcher, puis présentez trois slides à un autre participant qui contrôle vos appuis.",
    },
    {
      day: 2,
      title: 'Module 6 · Entretiens, retours et décisions sur les personnes',
      duration: '1h30',
      description: "Tracer ce que Copilot peut faire autour des entretiens, et ce qui reste au manager.",
      items: [
        "Trame d'entretien et questions de suivi préparées avec Copilot",
        "Reformuler un retour écrit par le manager sans en changer le fond",
        "RGPD : finalité du traitement et information des salariés",
        "AI Act : évaluer des salariés avec un système dédié relève des cas sensibles du règlement, régime applicable fin 2027",
      ],
      exercise: "Vous préparez la trame d'un entretien de suivi et faites reformuler par Copilot un retour que vous avez écrit, en vérifiant que le fond n'a pas bougé.",
    },
    {
      day: 2,
      title: 'Module 7 · Installer des routines avec Cowork et les invites planifiées',
      duration: '2h',
      description: "Automatiser les rendez-vous écrits de l'équipe, en sachant qui les lit.",
      items: [
        "Choisir une routine utile : point du vendredi, actions en retard, préparation du lundi",
        "Cowork : lire le plan, valider chaque action sensible, suivre la consommation",
        "Tâche déclenchée par un message dans un canal Teams",
        "Compétence d'équipe au format SKILL.md : écrire une fois le modèle de relevé de décisions",
      ],
      exercise: "Vous programmez une routine hebdomadaire pour votre équipe et désignez qui la lit et ce qu'il en fait.",
    },
    {
      day: 2,
      title: "Module 8 · Conduire l'adoption de Copilot dans son équipe",
      duration: '1h30',
      description: "Répartir les licences, écrire les règles et planifier le premier mois.",
      items: [
        "Répartir les licences selon les usages, et faire apprendre la méthode avec Copilot Chat",
        "Charte d'équipe : données admises, relecture, réunions transcrites ou non",
        "AI Act, article 4 : garder trace des formations suivies par chacun",
        "Plan à 30 jours : trois usages par manager, un référent, une mesure au bout d'un mois",
      ],
      exercise: "Vous écrivez le plan d'adoption de votre équipe pour les trente prochains jours, licences et règles comprises.",
    },
  ],
  objectives: [
    "Tirer d'une réunion Teams transcrite un relevé de décisions juste, responsables et échéances vérifiés",
    "Préparer un point d'avancement et un comité à partir d'une synthèse sourcée",
    "Suivre un projet dans un bloc-notes Copilot de semaine en semaine",
    "Rédiger des messages d'équipe dans Outlook en gardant le fond et la voix du manager",
    "Distinguer les usages permis autour des entretiens de ceux que le RGPD et l'AI Act encadrent",
    "Programmer une routine d'équipe avec Cowork ou une invite planifiée, et en désigner le lecteur",
  ],
  faq: [
    {
      q: 'Copilot peut-il remplacer nos outils de gestion de projet ?',
      a: "Non. Planner, un logiciel de gestion de projet ou un tableau Excel restent la référence pour les tâches, les responsables et les dates. Copilot travaille à côté : il lit les réunions, les mails et les fichiers de l'équipe et en tire des synthèses, des relevés et des messages. Il peut créer un fichier Excel de suivi ou nourrir un point d'avancement, mais la liste des tâches qui fait foi reste dans votre outil. La formation montre comment faire passer l'information de l'un à l'autre sans ressaisie hasardeuse.",
    },
    {
      q: 'Copilot aide-t-il à réduire le nombre de réunions ?',
      a: "Il aide d'abord à rendre utiles celles qui restent. Un collaborateur absent lit le résumé et les actions au lieu d'assister à une heure d'échange ; un point d'information peut devenir un message écrit, préparé par Copilot à partir des fils de la semaine. La décision de supprimer une réunion reste celle du manager. Nous l'abordons au module 7 avec les routines : un point du vendredi remplacé par une synthèse écrite fonctionne quand quelqu'un la lit et y répond.",
    },
    {
      q: 'Peut-on utiliser Copilot pour préparer les entretiens annuels ?',
      a: "Pour la forme, oui : une trame, des questions de suivi, la reformulation d'un retour que vous avez écrit. Pour le fond, non. Faire rédiger une appréciation par Copilot, ou lui demander d'analyser les mails d'un collaborateur pour juger son travail, pose deux problèmes. Le RGPD exige une finalité définie et connue du salarié. Le règlement européen sur l'IA soumet les outils conçus pour noter des travailleurs à un régime renforcé, que le texte de 2026 sur le calendrier fait démarrer en décembre 2027. La formation trace cette ligne sur des exemples.",
    },
    {
      q: 'Tous nos managers doivent-ils avoir la licence Microsoft Copilot ?',
      a: "Non. Avec Copilot Chat, sans coût supplémentaire, un manager apprend déjà à formuler ses demandes, résume la réunion affichée dans Teams ou répond au fil ouvert dans Outlook. Une licence lui donne en plus Researcher et l'accès à l'ensemble de ses réunions, mails et fichiers. Au 7 octobre 2026, la licence des grandes entreprises coûte 26,00 € HT par mois en paiement annuel, et Copilot Business, jusqu'à 300 utilisateurs, 18,20 € HT. Nous conseillons d'équiper d'abord les managers qui pilotent plusieurs projets en parallèle.",
    },
    {
      q: "Les échanges de l'équipe restent-ils confidentiels ?",
      a: "Microsoft traite les demandes des salariés connectés à leur compte professionnel sous ses engagements d'entreprise, sans en nourrir l'entraînement de ses modèles, et garde dans l'Union le trafic de ses utilisateurs européens, hors modèles d'Anthropic. Le point sensible porte sur les droits : Copilot montre à un manager tout ce qu'il peut ouvrir, y compris un fichier d'entretiens mal rangé. Revoyez les partages de votre service avant la session ; l'audit des permissions est la première recommandation de Microsoft avant un déploiement.",
    },
    {
      q: 'Des managers peu technophiles peuvent-ils suivre ces deux jours ?',
      a: "Oui. La plupart des managers que nous formons n'ont jamais écrit de demande structurée à un assistant d'IA. Le premier jour part de leur agenda : une réunion de la semaine, un message à envoyer, un projet en retard. Le second introduit Researcher et Cowork pour ceux qui ont la licence. Pour un dirigeant ou un manager seul, l'accompagnement individuel se cale sur ses créneaux et ses dossiers, en présentiel ou à distance.",
    },
    {
      q: 'Comment former à Copilot des dizaines de managers ?',
      a: "Par paliers. Dans un groupe d'emballage implanté sur trois continents, Masteria a commencé par 24 managers pilotes répartis en deux sessions de deux jours, évaluées à chaud et ajustées entre elles. Cinq sessions ont eu lieu de juillet à fin septembre 2026, deux en anglais. Le comité de direction a suivi une matinée stratégique. Viennent ensuite les équipes américaines et mexicaines, programmées en octobre 2026, puis indiennes en décembre. La même logique vaut pour une entreprise française de taille moyenne, à son échelle.",
    },
    {
      q: 'Comment financer la formation de nos managers ?',
      a: "Organisme certifié Qualiopi, Masteria ouvre à votre entreprise la possibilité d'un financement par son OPCO, qui applique ses propres règles et dépend des fonds disponibles. Une promotion de douze managers au plus suit le parcours complet pour 3 960 € HT, et un dirigeant seul paie la journée au même prix, 1 980 € HT. Programme et convention se rédigent avec vous avant la demande. Une filiale genevoise ou bruxelloise, faute d'OPCO, reçoit un devis libellé en euros hors taxes.",
    },
  ],
  tarifs: {
    titre: 'Le prix de deux jours Copilot pour vos managers',
    paras: [
      "Le prix d'une journée, 1 980 € HT, comprend la préparation. Avant la session, le formateur échange avec vous sur les réunions récurrentes du service, les projets en cours et les règles déjà en vigueur, et construit les ateliers sur ces situations. Chaque manager repart avec ses demandes types, un modèle de relevé de décisions et le plan d'adoption de son équipe.",
      "Douze managers inscrits ensemble s'acquittent de 3 960 € HT pour le parcours, 330 € HT chacun. Le parcours individuel d'un directeur général suit le même prix à la journée. L'achat des licences Copilot reste à votre charge, hors de ce prix. L'OPCO tranche ensuite la question du financement, à partir du dossier monté avec nous.",
    ],
  },
  apres: {
    titre: "Après la formation, des agents pour le travail d'équipe",
    texte: "Quand les managers maîtrisent la méthode, des besoins communs apparaissent : un agent qui répond aux nouveaux arrivants à partir du livret d'accueil, une compétence Cowork qui prépare chaque vendredi le point d'avancement de tous les projets du service, un agent Copilot Studio relié à l'outil de gestion des tâches. Masteria cadre chaque besoin, construit l'outil dans votre Microsoft 365 et forme ceux qui le maintiendront. Facturée au forfait après cadrage, cette prestation n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Dites-nous quelles réunions rythment la semaine de vos managers : les ateliers partiront de leur agenda.",
    fin: {
      titre: 'Formons vos managers sur leurs propres réunions',
      texte: "Indiquez le nombre de managers, leurs licences Copilot et les rendez-vous qui structurent leur semaine. Nous vous proposons un programme, un déroulé par paliers si vos équipes sont nombreuses, et des dates.",
    },
  },
  terrain: {
    titre: 'Sur le terrain : 24 managers pilotes avant un déploiement international',
    texte: "Un fabricant mondial d'emballages a retenu Copilot pour l'ensemble de ses sites. Masteria a d'abord formé deux groupes de managers pilotes sur des ateliers construits avec leurs fichiers, puis corrigé le parcours entre les deux sessions. Deux mois plus tard, un participant citait la présentation préparée pour un directeur d'usine parmi ses usages. Les membres du comité de direction ont consacré une matinée à la stratégie ; la phase internationale démarre en octobre 2026 en Amérique du Nord, avant l'Inde en décembre.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  casIds: ['industrie'],
  liensAssocies: [
    { label: 'Les programmes Microsoft Copilot pour chaque fonction', href: '/formation-microsoft-copilot' },
    { label: 'Formation IA pour les managers, tous outils confondus', href: '/formation-ia-management' },
    { label: "Former les dirigeants à l'IA", href: '/formation-ia-dirigeants' },
    { label: 'Copilot dans les ressources humaines', href: '/formation-copilot-rh' },
    { label: "Gouvernance de l'IA : registre, charte et comité", href: '/formation-gouvernance-ia' },
  ],
  sources: [
    { name: "Microsoft Learn : Copilot dans Teams et Outlook, Researcher, protection des données (1er octobre 2026)", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview' },
    { name: "Microsoft Learn : Copilot Cowork, tâches planifiées et validations", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/' },
    { name: "Microsoft France : offre Copilot des grandes entreprises et ses prix", url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise' },
    { name: "EUR-Lex : texte de l'AI Act et liste des usages sensibles liés à l'emploi", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { name: "EUR-Lex : le règlement de 2026 qui décale au 2 décembre 2027 ces obligations", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  ],
}
