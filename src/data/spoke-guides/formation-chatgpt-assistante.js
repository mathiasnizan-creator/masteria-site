// Contenu propre à /formation-chatgpt-assistante (guide terrain, page propre). Rendu par SpokePage.
// Écrit le 7 octobre 2026. Faits ChatGPT : fiche de faits du 07/10/2026 (help.openai.com lu par extraits,
// vérification à la main de la FAQ sur le retrait des GPTs), comparatifs du 03/10/2026 (src/data/comparisons.js)
// et guides ChatGPT du 28/09/2026. Non écrits faute de vérification : prix ChatGPT en euros (HT ou TTC),
// nombre de tâches planifiées par offre, disponibilité de ChatGPT Space et Pages sur Business.
export default {
  slug: 'formation-chatgpt-assistante',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation ChatGPT pour assistantes et assistants de direction',
  metaTitle: 'Formation ChatGPT assistante de direction | Masteria',
  metaDesc: "Formation ChatGPT pour assistantes de direction : courriers au ton du dirigeant, comptes rendus, déplacements, Word et Excel, dossiers confidentiels.",
  keywords: "formation ChatGPT assistante de direction, ChatGPT assistanat, ChatGPT secrétariat de direction, formation IA assistante",
  resume: "Cette formation ChatGPT s'adresse aux assistantes et assistants de direction ; elle dure deux jours, quatorze heures passées sur les courriers, les comptes rendus et les déplacements que votre direction vous confie. Un siège peut y inscrire une douzaine de personnes au plus, ou confier une assistante seule au formateur, dans vos bureaux ou en visioconférence. Le jour de formation vaut 1 980 € HT, et l'OPCO de votre branche, que la certification Qualiopi de Masteria permet de solliciter, statue sur sa prise en charge.",
  enBref: [
    { label: 'Formation', value: "ChatGPT au poste d'assistanat : correspondance du dirigeant, notes de réunion mises au propre, voyages d'affaires, tableaux de suivi et supports de comité" },
    { label: 'Durée', value: "Deux journées de sept heures, placées de préférence avant un comité ou un déplacement inscrit à votre agenda" },
    { label: 'Formats', value: "Les assistantes d'une même direction en groupe intra (douze au maximum), ou une assistante seule ; sur place, en France comme en Europe, aux États-Unis ou en Inde, ou à distance" },
    { label: 'Tarif', value: "1 980 € HT par journée, y compris la préparation des exercices sur vos modèles de lettres et vos ordres du jour" },
    { label: 'Financement', value: "Organisme certifié Qualiopi : votre OPCO examine la demande d'après les critères et le budget de votre branche" },
    { label: 'Prérequis', value: "Un compte ChatGPT d'entreprise (Business ou Enterprise) de préférence ; un compte Plus convient pour la méthode, sans les fonctions d'équipe" },
  ],
  intro: "Une assistante de direction écrit au nom d'une autre personne. Chaque lettre, chaque relance et chaque relevé de décisions doit sonner comme le dirigeant, partir à la bonne date et ne rien révéler de ce qui doit rester au bureau. ChatGPT sait produire la première version de ces écrits, lire les notes griffonnées d'une réunion et préparer un programme de voyage, à condition de connaître le dirigeant et de travailler sur un compte qui protège ses dossiers. Ce guide montre comment lui donner ce contexte une fois pour toutes, comment l'utiliser depuis Word, Excel et PowerPoint, et quelles pièces ne doivent jamais lui être confiées.",
  prerequis: "Rédiger chaque semaine des courriers et des comptes rendus ; disposer d'un accès ChatGPT, de préférence sur une offre Business ou Enterprise, contrôlé avec vous avant la session",
  guide: {
    kicker: 'Guide terrain',
    h2: "ChatGPT écrit le premier jet, l'assistante garde la signature du dirigeant",
    lead: "Le poste d'assistanat repose sur une confiance : le dirigeant signe ce que vous préparez sans tout relire. ChatGPT peut alléger ce travail sans entamer cette confiance si trois conditions sont réunies. Il doit connaître les habitudes de chaque dirigeant, qu'un projet ChatGPT conserve d'une conversation à l'autre. Il doit travailler sur un compte d'entreprise, où OpenAI s'interdit par défaut d'apprendre de vos échanges. Et rien de ce qu'il produit ne part sans votre relecture : une date, un nom ou un montant faux dans un courrier engage la direction, quelle que soit la machine qui l'a écrit.",
    sections: [
      {
        h3: "Un projet par dirigeant retient ses formules, ses interlocuteurs et ses préférences",
        paras: [
          "Un projet ChatGPT garde ensemble des consignes, des fichiers et toutes les conversations consacrées à un sujet. Pour une assistante qui travaille avec deux ou trois dirigeants, le bon découpage est d'ouvrir un projet par personne. Les instructions y décrivent la façon d'écrire du dirigeant : vouvoiement ou tutoiement selon les interlocuteurs, formules d'appel et de politesse, longueur habituelle, mots qu'il n'emploie jamais. Les fichiers donnent des exemples : cinq courriers qu'il a signés sans retouche, l'organigramme, la liste des partenaires réguliers avec leur titre exact.",
          "Réglez la mémoire du projet sur « Mémoire limitée au projet » : ce qui concerne le président ne déteint plus sur les courriers du directeur financier. Un projet partagé passe dans ce mode tout seul. Un projet Business admet 40 fichiers au plus, et jusqu'à 100 collègues peuvent y accéder, ce qui permet de le confier à la collègue qui assure les remplacements pendant vos congés. Sur Plus, la limite tombe à 25 fichiers et le projet reste personnel.",
        ],
      },
      {
        h3: "ChatGPT travaille aussi dans Word, Excel et PowerPoint, sur le fichier ouvert",
        paras: [
          "Word, Excel et PowerPoint disposent chacun d'une extension ChatGPT éditée par OpenAI ; la dernière arrivée, celle de Word, date du 17 septembre 2026. Elles s'ouvrent dans un panneau latéral et agissent sur le document affiché : reprendre le ton d'un courrier, raccourcir une note à une page, harmoniser les titres d'un rapport, résumer un tableau de suivi. Les comptes gratuits y ont droit avec parcimonie ; les offres payantes desserrent la limite.",
          "Ces extensions lisent le document que vous leur montrez, ainsi que les informations que vous leur fournissez. Pour qu'elles retrouvent le dernier compte rendu ou la convention signée, il faut soit déposer ces pièces, soit brancher un connecteur vers le dossier partagé. En formation, chaque participante travaille sur un courrier ouvert dans Word et sur le tableau Excel qu'elle tient pour la direction, par exemple le suivi des engagements pris en comité.",
        ],
      },
      {
        h3: "La messagerie et les dossiers partagés se branchent par des connecteurs, sous l'autorité de l'administrateur",
        paras: [
          "Pour lire vos mails et vos dossiers, ChatGPT passe par des connecteurs, chacun relié par l'utilisateur à ses propres comptes : Outlook ou Gmail côté messagerie, SharePoint, Google Drive, Dropbox ou Box côté fichiers. Depuis le 9 juillet 2026, ces accès sont regroupés dans des plugins, et depuis le 1er octobre, la console d'un espace Business permet à son administrateur de choisir ceux que les salariés peuvent installer. Le résultat dépend donc de deux décisions : ce que l'entreprise autorise, et ce que vous connectez.",
          "Un connecteur sert surtout à retrouver : le dernier échange avec un partenaire avant un rendez-vous, la pièce jointe d'un mail de la semaine passée, la version validée d'une note. La règle du poste reste simple. ChatGPT cherche, résume et rédige un brouillon ; l'assistante relit, complète et envoie elle-même. Pour une boîte de réception déléguée par le dirigeant, la décision de la brancher revient à l'administrateur et au dirigeant, et ce point se règle au cadrage.",
          "ChatGPT sait aussi programmer une tâche. Si l'agenda et la messagerie sont connectés, il peut, chaque lundi à 8 heures, préparer la liste des rendez-vous de la semaine à confirmer ou relire les mails restés sans réponse depuis cinq jours. Une tâche planifiée se relit comme un brouillon, et on la retire dès qu'elle ne sert plus.",
        ],
      },
      {
        h3: "Les dossiers de la direction exigent un compte d'entreprise et une liste écrite de pièces exclues",
        paras: [
          "Dans un espace d'entreprise (Business, Enterprise, Edu), OpenAI exclut vos échanges de l'entraînement de ses modèles, sans que vous ayez rien à régler. Avec Free, Go, Plus ou Pro, l'utilisateur doit lui-même décocher l'option « Améliorer le modèle pour tous », rangée dans les contrôles des données ; faute de quoi ses conversations peuvent nourrir l'entraînement. Une assistante qui ouvre ChatGPT sur un compte personnel pour gagner du temps expose donc les dossiers de sa direction. La formation commence par vérifier ce compte.",
          "Le compte d'entreprise ne règle pas tout. Certaines pièces restent hors de ChatGPT quel que soit l'abonnement, et la direction doit les nommer par écrit. Nous partons de la liste suivante, que chaque direction ajuste :",
        ],
        list: [
          "les rémunérations individuelles, les dossiers disciplinaires et les éléments de santé d'un salarié ou du dirigeant ;",
          "les projets de cession, d'acquisition ou de restructuration tant qu'ils ne sont pas annoncés ;",
          "les procès-verbaux du conseil avant leur approbation, et les échanges avec les avocats de la société ;",
          "les codes d'accès, les références bancaires et les pièces d'identité transmises pour un voyage.",
        ],
      },
    ],
    table: {
      caption: "Huit tâches d'un poste d'assistanat, l'outil de ChatGPT qu'on y emploie et ce que vous contrôlez",
      headers: ['Tâche', 'Fonction de ChatGPT', 'Ce que vous contrôlez'],
      rows: [
        ["Répondre à un courrier délicat au nom du dirigeant", "Projet du dirigeant, puis extension Word sur la lettre ouverte", "Le ton, les noms propres, la date de l'engagement pris"],
        ["Mettre au propre des notes de réunion manuscrites", "Photo des notes déposée dans la conversation", "Chaque décision et chaque porteur cité dans le relevé"],
        ["Rédiger le relevé de décisions d'un comité", "Transcription exportée de l'outil de visioconférence, déposée dans le projet", "Les chiffres et les échéances, comparés aux supports du comité"],
        ["Préparer un déplacement de trois jours", "Recherche approfondie limitée à des sites choisis, puis programme dans Word", "Horaires et adresses confirmés sur les sites officiels"],
        ["Tenir le suivi des engagements du comité", "Extension Excel sur le tableau de suivi", "Les lignes ajoutées ou modifiées, une par une"],
        ["Monter le support d'une réunion à partir d'un compte rendu", "Extension PowerPoint, sur le modèle de présentation maison", "La charte graphique et les chiffres repris"],
        ["Retrouver le dernier échange avec un partenaire", "Connecteur Gmail ou Outlook, autorisé par l'administrateur", "Le fil retrouvé et l'interlocuteur exact"],
        ["Préparer chaque lundi la semaine du dirigeant", "Tâche planifiée", "Les rendez-vous à confirmer, avant tout envoi"],
      ],
    },
    cas: {
      h3: "Cas pratique : la tournée de trois jours du directeur général chez des clients en Italie",
      contexte: "Imaginons l'assistante du directeur général d'un fabricant de pompes de 400 salariés. Le dirigeant part trois jours à Milan et à Turin pour voir quatre clients. Elle dispose des mails d'invitation, d'un tableau des ventes par client exporté du système de gestion et des comptes rendus des visites de l'an dernier. Le carnet de voyage doit être prêt une semaine avant le départ, et les confirmations doivent partir en italien.",
      etapes: [
        "Dans le projet du directeur général, déposez le tableau des ventes, les comptes rendus des visites passées et les mails d'invitation ; vérifiez qu'aucune pièce de la liste d'exclusion n'en fait partie.",
        "Lancez le prompt ci-dessous. ChatGPT commence par dresser le tableau des rendez-vous sans rien inventer.",
        "Pour chaque client, lancez une recherche approfondie limitée au site de l'entreprise et à deux titres de presse économique que vous choisissez, afin de résumer son actualité publiée.",
        "Ouvrez le carnet de voyage dans Word avec l'extension ChatGPT, demandez une version d'une page par rendez-vous, puis confirmez chaque horaire et chaque adresse sur les sites officiels avant de réserver vous-même.",
        "Faites relire les mails de confirmation en italien par ChatGPT, puis envoyez-les depuis votre messagerie après une dernière lecture.",
      ],
      prompt: "Tu m'aides à préparer le déplacement du directeur général en Italie, du mardi au jeudi de la semaine prochaine. Le projet contient le tableau des ventes 2025 et 2026 par client, les comptes rendus de nos visites de l'an dernier et les mails d'invitation de quatre clients.\n\nÉtape 1. Dresse un tableau des quatre rendez-vous : client, ville, date et heure proposées, interlocuteur et fonction, objet de la visite. Prends ces informations dans les mails et nulle part ailleurs. Si une donnée manque, écris « à demander » au lieu de la deviner.\n\nÉtape 2. Signale les conflits de calendrier et les trajets qui te paraissent trop courts entre deux rendez-vous, sans proposer d'horaire de train ou de vol : je les vérifierai moi-même.\n\nÉtape 3. Pour chaque client, rédige une fiche d'une demi-page : évolution de nos ventes sur deux ans tirée du tableau, points ouverts relevés dans le compte rendu de l'an dernier, trois sujets que le directeur général peut aborder. Indique pour chaque information le fichier d'où elle vient.\n\nÉtape 4. Rédige en italien, puis en français pour ma relecture, un mail de confirmation par client, au ton des courriers du directeur général rangés dans le projet. Laisse l'heure entre crochets quand elle n'est pas confirmée.\n\nN'ajoute aucun chiffre qui ne figure pas dans les fichiers.",
      resultat: "Vous obtenez un tableau des rendez-vous avec les données manquantes signalées, la liste des tensions de calendrier, une fiche par client reliée à ses sources et quatre mails de confirmation dans les deux langues. Deux vérifications restent à votre charge : les horaires et les adresses, que vous confirmez sur les sites officiels avant toute réservation, et les chiffres de ventes, que vous recoupez avec l'export. Le carnet de voyage part ensuite au dirigeant dans le format qu'il connaît.",
    },
    pieges: [
      {
        titre: "Le courrier adopte une formule que le dirigeant n'emploie jamais",
        texte: "Sans exemples, ChatGPT écrit dans un français administratif sans visage. Les instructions du projet doivent lister les formules d'appel et de politesse du dirigeant, et les fichiers contenir des lettres qu'il a signées telles quelles.",
      },
      {
        titre: "Un horaire de train inventé se glisse dans le programme",
        texte: "Une réponse fluide peut contenir un horaire ou une adresse plausibles et faux. Demandez à ChatGPT d'écrire « à vérifier » plutôt que de compléter, et confirmez chaque élément pratique sur le site du transporteur ou de l'hôtel.",
      },
      {
        titre: "Le compte personnel ouvert sur le poste de la direction",
        texte: "Sur un compte gratuit ou Plus, vos échanges peuvent nourrir l'entraînement des modèles si le réglage n'est pas coupé. Les dossiers de la direction se traitent dans l'espace Business ou Enterprise de l'entreprise, et nulle part ailleurs.",
      },
      {
        titre: "Le GPT « courrier de la direction » monté il y a deux ans",
        texte: "Les GPTs personnalisés s'éteignent le 11 décembre 2026. Leurs consignes se transforment en compétence, logée dans un plugin d'abord réservé à son auteur ; les conversations passées restent consultables. Recensez vos GPTs et reconstruisez celui qui sert encore.",
      },
    ],
  },
  audience: [
    {
      title: "Assistantes et assistants de direction générale",
      desc: "Vous préparez ce que le président ou le directeur général signe et lit. Vous apprenez à faire écrire ChatGPT dans sa voix, à vérifier chaque fait avant signature et à tenir ses dossiers confidentiels hors de l'outil.",
    },
    {
      title: "Assistantes d'équipe et office managers",
      desc: "Vous servez plusieurs managers, avec des courriers, des réservations et des tableaux de suivi qui s'entrecroisent. Vous apprenez à séparer leurs demandes par projet et à automatiser la préparation de la semaine.",
    },
    {
      title: "Secrétariat général et assistantes de comité",
      desc: "Ordres du jour, convocations, relevés de décisions et suivi des engagements font votre calendrier. Vous apprenez à passer des notes de séance au relevé validé, puis à tenir le tableau des actions dans Excel avec ChatGPT.",
    },
  ],
  useCases: [
    { icon: '📧', title: "Courriers signés sans retouche", desc: "Réponses délicates, remerciements, refus courtois, rédigés dans la voix du dirigeant grâce aux lettres qu'il a déjà signées." },
    { icon: '📝', title: "Notes de réunion mises au propre", desc: "Photo de notes manuscrites ou transcription exportée, transformée en relevé de décisions : qui fait quoi, pour quand." },
    { icon: '🗓', title: "Déplacements préparés de bout en bout", desc: "Programme, fiche par rendez-vous et confirmations dans la langue de l'hôte, chaque horaire vérifié avant réservation." },
    { icon: '📊', title: "Suivi des engagements du comité", desc: "Le tableau Excel tenu avec l'extension ChatGPT, mis à jour après chaque séance et relu ligne par ligne." },
    { icon: '📁', title: "Un projet par dirigeant", desc: "Formules, interlocuteurs et préférences de chaque dirigeant rangés à part, avec une mémoire qui ne mélange pas leurs dossiers." },
    { icon: '🔒', title: "Dossiers de direction protégés", desc: "Compte d'entreprise vérifié, liste écrite des pièces exclues et charte du poste validée avec le dirigeant." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Vérifier son compte et nommer les pièces qui restent hors de ChatGPT",
      duration: '1h30',
      description: "Partir d'un compte sûr avant d'y déposer le moindre dossier de la direction.",
      items: [
        "Offres de ChatGPT au 7 octobre 2026 : ce que Plus, Business et Enterprise changent pour un poste d'assistanat",
        "Réglage d'entraînement, mémoire, historique : où ils se trouvent et qui les décide",
        "Liste des pièces exclues : paie, santé, opérations non annoncées, procès-verbaux non approuvés",
        "Pseudonymiser un courrier avant toute demande",
      ],
      exercise: "Vous vérifiez votre compte et vos réglages, puis vous rédigez la première version de la liste des pièces que votre direction exclut de ChatGPT.",
    },
    {
      day: 1,
      title: "Module 2 · Obtenir un courrier que le dirigeant signe sans le réécrire",
      duration: '2h',
      description: "Une méthode de demande qui fournit le destinataire, l'enjeu, le ton et les pièces dès le premier message.",
      items: [
        "Les cinq éléments d'une demande de courrier : l'auteur, le destinataire, le résultat attendu, les pièces jointes, la forme du texte",
        "Relancer sur un point précis plutôt que tout reformuler",
        "Lettres sensibles : refus, relance d'un partenaire important, condoléances, excuses",
        "Faire signaler les affirmations à vérifier avant signature",
      ],
      exercise: "Vous rédigez avec ChatGPT la réponse à un courrier délicat que votre dirigeant a reçu ce mois-ci, puis vous comparez la version obtenue à celle qu'il aurait écrite.",
    },
    {
      day: 1,
      title: "Module 3 · Monter le projet de chaque dirigeant",
      duration: '2h',
      description: "Donner à ChatGPT, une fois pour toutes, la voix et le contexte de la personne que vous assistez.",
      items: [
        "Instructions du projet : formules, registre, longueur, mots proscrits",
        "Fichiers de référence : lettres signées, organigramme, liste des partenaires et de leurs titres",
        "Mémoire limitée au projet et partage avec la collègue qui vous remplace",
        "Tester le projet sur trois demandes différentes avant de s'en servir au quotidien",
      ],
      exercise: "Vous ouvrez le projet de votre dirigeant, vous en écrivez les instructions et vous le testez sur un remerciement, une relance et une invitation.",
    },
    {
      day: 1,
      title: "Module 4 · Passer des notes brutes au relevé de décisions",
      duration: '1h30',
      description: "Transformer ce qui a été dit en réunion en un document que chacun peut suivre.",
      items: [
        "Photo de notes manuscrites, transcription exportée de l'outil de visioconférence ou notes dictées",
        "Séparer décisions, actions, porteurs et échéances",
        "Comparer les chiffres du relevé aux supports présentés en séance",
        "Rédiger les mails de suivi adressés à chaque porteur d'action",
      ],
      exercise: "Vous transformez les notes de votre dernière réunion de direction en relevé de décisions, puis en mails de suivi prêts à relire.",
    },
    {
      day: 2,
      title: "Module 5 · Travailler dans Word, Excel et PowerPoint avec l'extension ChatGPT",
      duration: '1h30',
      description: "Retoucher les documents de la direction là où ils sont ouverts.",
      items: [
        "Installer les extensions et repérer ce que votre offre permet",
        "Word : reprendre le ton d'une lettre, réduire une note à une page, harmoniser un rapport",
        "Excel : mettre à jour le suivi des engagements, repérer les actions en retard",
        "PowerPoint : bâtir le support d'une réunion dans le gabarit de la société",
      ],
      exercise: "Avec l'extension Excel, vous actualisez la liste des actions décidées par votre comité, puis vous en tirez deux diapositives pour sa prochaine séance.",
    },
    {
      day: 2,
      title: "Module 6 · Préparer un déplacement ou un rendez-vous important",
      duration: '2h',
      description: "Rassembler sur une seule feuille les informations utiles au dirigeant avant son départ.",
      items: [
        "Recherche approfondie limitée aux sites que vous désignez, plan de recherche corrigé avant lancement",
        "Fiche par rendez-vous : historique de la relation, points ouverts, sujets à aborder",
        "Programme de voyage et confirmations dans la langue de l'hôte",
        "Vérifier horaires et adresses sur les sites officiels, réserver soi-même",
      ],
      exercise: "Vous préparez le carnet d'un déplacement prévu dans votre agenda, avec une fiche par rendez-vous et les mails de confirmation.",
    },
    {
      day: 2,
      title: "Module 7 · Brancher la messagerie et confier des tâches récurrentes",
      duration: '2h',
      description: "Laisser ChatGPT retrouver et préparer, sans jamais envoyer à votre place.",
      items: [
        "Connecteurs Gmail, Outlook, Google Drive ou SharePoint autorisés par l'administrateur",
        "Tâche planifiée : la semaine du dirigeant préparée chaque lundi",
        "Compétence « courrier de la direction » sur Business, rédigée avec ChatGPT puis testée",
        "Recenser les GPTs du poste avant leur fin, fixée au 11 décembre 2026",
      ],
      exercise: "Vous programmez la préparation de la semaine de votre dirigeant, puis vous rédigez la compétence chargée d'appliquer sa manière d'écrire.",
    },
    {
      day: 2,
      title: "Module 8 · Écrire la charte du poste et le plan des trente prochains jours",
      duration: '1h30',
      description: "Convenir avec le dirigeant du partage des tâches entre l'outil et vous, et des dossiers qui n'y passent jamais.",
      items: [
        "Article 4 de l'AI Act : la maîtrise de l'IA que l'employeur doit soutenir, et la preuve de formation à garder",
        "Règles de relecture : ce que le dirigeant signe, ce que vous validez seule",
        "Liste des pièces exclues, mise au propre et datée",
        "Trois usages prioritaires et un point d'étape à un mois",
      ],
      exercise: "Vous écrivez noir sur blanc ce que ChatGPT prépare pour votre poste et ce qu'il ne touche pas, puis votre plan à trente jours, à présenter à votre dirigeant.",
    },
  ],
  objectives: [
    "Le participant sait vérifier son compte ChatGPT et ses réglages, puis établir par écrit les pièces de la direction exclues de l'outil.",
    "Le participant sait rédiger une demande de courrier complète et obtenir une lettre au ton du dirigeant.",
    "Le participant sait régler le projet d'un dirigeant : consignes d'écriture, lettres modèles, mémoire cantonnée à ce projet.",
    "Le participant sait transformer des notes de réunion en relevé de décisions et en mails de suivi.",
    "Le participant sait utiliser l'extension ChatGPT dans Word, Excel et PowerPoint sur un document de la direction.",
    "Le participant sait préparer un déplacement grâce à la recherche approfondie, puis contrôler chaque élément pratique avant réservation.",
  ],
  faq: [
    {
      q: "ChatGPT peut-il écrire comme mon dirigeant ?",
      a: "Oui, s'il dispose d'exemples. Dans le projet consacré à votre dirigeant, les instructions décrivent son registre, ses formules d'appel et de politesse et les mots qu'il évite, et les fichiers contiennent des lettres qu'il a signées sans retouche. La différence se voit dès le premier courrier. Il reste des écarts sur les sujets que ChatGPT ne connaît pas, comme l'histoire d'une relation avec un partenaire : c'est à vous de les compléter. Le module 3 consacre deux heures à ce réglage, testé sur trois courriers de votre semaine.",
    },
    {
      q: "Faut-il ChatGPT Business, ou un compte Plus suffit-il ?",
      a: "Pour apprendre la méthode et rédiger des courriers ordinaires, Plus fait l'affaire. Business apporte trois choses utiles à un poste d'assistanat : par défaut, OpenAI ne puise pas dans vos échanges pour entraîner ses modèles, un projet peut être partagé avec la collègue qui vous remplace, et l'administrateur contrôle les connecteurs vers la messagerie et les dossiers partagés. ChatGPT Business exige au moins deux sièges ; c'est le nouveau nom, depuis août 2025, de l'offre autrefois appelée Team. Nous vérifions votre offre avant la formation pour adapter les ateliers.",
    },
    {
      q: "Que devient ce que je confie à ChatGPT sur la direction ?",
      a: "Avec Business et Enterprise, ces informations n'alimentent aucun entraînement de modèle. Business propose aussi de les stocker en Europe, une option qui s'ouvre par étapes, tandis qu'OpenAI garde un temps une copie outre-Atlantique pour repérer les abus. Un compte personnel dépend de l'option « Améliorer le modèle pour tous », que son titulaire doit décocher lui-même. Quel que soit le compte, la mémoire de ChatGPT peut retenir un détail d'une conversation : vous apprenez à la consulter et à effacer ce qui touche à la direction. Les pièces les plus sensibles restent hors de l'outil, sur une liste écrite.",
    },
    {
      q: "ChatGPT a-t-il accès à la messagerie de mon dirigeant ?",
      a: "Le connecteur Gmail ou Outlook se branche sur la boîte de celui ou celle qui l'installe, si l'administrateur de votre espace l'autorise. Pour une boîte déléguée, la décision revient au dirigeant et à l'administrateur, au vu de la politique de sécurité de l'entreprise, et nous l'examinons avec eux avant la session. Dans tous les cas, ChatGPT retrouve et résume des messages, puis prépare un brouillon. L'envoi reste votre geste, et la charte du poste écrite au module 8 le précise noir sur blanc.",
    },
    {
      q: "Notre entreprise utilise Microsoft Copilot : cette formation a-t-elle un intérêt ?",
      a: "Elle en a si ChatGPT est aussi déployé chez vous, ou si vous hésitez entre les deux. Microsoft Copilot (anciennement Microsoft 365 Copilot) lit Outlook, Teams et SharePoint sans intermédiaire, avec les droits déjà en place ; ChatGPT s'installe dans Word, Excel et PowerPoint par ses extensions et rejoint la messagerie par connecteur. Si tout votre poste vit dans Microsoft 365 et que Copilot y est actif, la formation Copilot pour les assistantes vous servira davantage. Le cadrage tranche la question avec vous, sur vos outils.",
    },
    {
      q: "Travaille-t-on sur nos propres courriers et comptes rendus ?",
      a: "Oui. Avant la session, vous nous envoyez des modèles de lettres, un ordre du jour et un compte rendu récents, débarrassés de ce qui figure sur la liste des pièces exclues. Le formateur prépare les ateliers sur ces documents, et chaque participante travaille sur un courrier ou un déplacement de sa propre semaine. Si votre règle interne interdit toute pièce de la direction à l'écran, nous fabriquons avec vous des copies pseudonymisées qui gardent la structure de vos écrits.",
    },
    {
      q: "Peut-on suivre cette formation seule, à distance ?",
      a: "Oui. Le format individuel convient bien à une assistante de direction, qui avance alors sur ses propres dossiers au rythme de son agenda. Les deux journées peuvent être séparées d'une ou deux semaines, ce qui laisse le temps d'essayer le projet du dirigeant entre les deux. À distance, le formateur voit votre écran partagé et corrige avec vous, en direct, toute demande qui tourne mal. Le prix d'une journée reste 1 980 € HT, seule ou en groupe.",
    },
    {
      q: "Comment faire financer la formation d'une assistante de direction ?",
      a: "Parce que la certification Qualiopi de Masteria porte sur ses actions de formation, la session peut être présentée à l'OPCO de votre entreprise. Cet opérateur fixe sa participation selon sa branche et les fonds qui lui restent pour l'année. Vous recevez de nous le programme détaillé, où chaque objectif s'accompagne de sa question d'évaluation, et la convention à verser au dossier, qui part avant la session. Hors de France, à Genève ou à Bruxelles par exemple, le prix se fixe sur devis, en euros et hors taxes, sans passage par un OPCO.",
    },
  ],
  tarifs: {
    titre: "Le prix d'une formation ChatGPT pour les assistantes d'un siège",
    paras: [
      "Ce tarif inclut une préparation : vos modèles de lettres, un ordre du jour type et un compte rendu récent parviennent au formateur, qui bâtit les ateliers sur cette matière. Il comprend aussi les supports, les prompts du guide adaptés à votre direction et l'aide au réglage des projets de chaque dirigeant pendant le module 3.",
      "Prenons un siège qui inscrit ses quatre assistantes de direction et son office manager. En intra, ce groupe de cinq règle 3 960 € HT au total, soit 792 € HT par personne. Une assistante seule paie le même tarif journalier, 1 980 € HT, et repart avec un programme construit sur son seul poste. Votre OPCO étudie ensuite la prise en charge selon les règles de sa branche ; nous préparons avec vous les pièces du dossier.",
    ],
  },
  apres: {
    titre: "Après la formation, un assistant construit pour la direction",
    texte: "Quand la méthode est en place, certaines directions veulent aller plus loin : un agent qui prépare chaque vendredi le dossier de la semaine suivante à partir de l'agenda et des dossiers partagés, ou une compétence qui produit les relevés de décisions au format du comité. Masteria construit ces outils dans votre espace Business ou Enterprise, avec des droits d'accès restreints et une relecture humaine avant tout envoi. Ce chantier, pas finançable par votre OPCO puisqu'il s'agit de conseil et de développement, se règle au forfait, établi quand le besoin est cerné.",
  },
  cta: {
    milieu: "Envoyez-nous un ordre du jour et un courrier type : nous construisons les deux journées autour du prochain comité de votre direction.",
    fin: {
      titre: "Préparons la formation à partir de votre agenda de direction",
      texte: "Dites-nous combien d'assistantes et d'assistants sont concernés, combien de dirigeants chacun accompagne et quelle offre ChatGPT l'entreprise utilise. Nous vous répondons avec un programme bâti sur ces dossiers et deux ou trois dates de session.",
    },
  },
  liensAssocies: [
    { label: "Formation IA pour les assistantes, tous outils confondus", href: '/formation-ia-assistante' },
    { label: "Microsoft Copilot pour l'assistanat de direction", href: '/formation-copilot-assistante' },
    { label: "Formation ChatGPT rédaction (une journée)", href: '/formation-chatgpt-redaction' },
    { label: "Écrits professionnels assistés par l'IA", href: '/formation-ia-ecrits-pro' },
    { label: "Copilot ou ChatGPT : le comparatif fonction par fonction", href: '/copilot-vs-chatgpt' },
  ],
  sources: [
    { name: "Centre d'aide OpenAI, fonctionnement des projets ChatGPT (fichiers, partage, mémoire)", url: 'https://help.openai.com/en/articles/10169521-projects-in-chatgpt' },
    { name: "Notes de version de ChatGPT Business, dont l'extension Word et la console des plugins", url: 'https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes' },
    { name: "OpenAI, la recherche approfondie et le choix des sites consultés", url: 'https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt' },
    { name: "OpenAI, calendrier de retrait des GPTs et passage aux plugins (FAQ lue le 7 octobre 2026)", url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
    { name: "OpenAI, engagements de confidentialité des offres entreprise", url: 'https://openai.com/enterprise-privacy/' },
    { name: "AI Act, règlement (UE) 2024/1689, version officielle sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  ],
}
