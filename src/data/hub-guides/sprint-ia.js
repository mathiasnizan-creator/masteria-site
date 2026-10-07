// Texte propre du hub /formation-sprint-ia (voir index.js), réécrit le 07/10/2026.
// Décision du 07/10/2026 : les Sprints Sensibilisation, Prompts et Managers sont fusionnés dans ce hub
// (redirection 308) ; le hub les présente dans `choisir` et ne renvoie que vers les trois Sprints qui gardent
// leur page (AI Act, Excel, Veille). Faits AI Act : fiche de faits du 07/10/2026, section 7. Faits Masteria :
// brief commun du 07/10/2026 (3 h, 1 980 € HT la séance, 12 participants au plus ou une personne).
// Programme sur une seule séance : le gabarit affiche « Jour {day} », d'où day: 'J' (« Jour J »).
export default {
  pagePropre: true,
  dateModified: '2026-10-07',
  author: true,
  metaTitle: 'Sprint IA : formation IA courte de 3 heures | Masteria',
  metaDesc: "Sprint IA, la formation IA de 3 heures : découverte, méthode de demande, managers, AI Act, Excel, veille. 1 980 € HT, Qualiopi.",
  h1: "Sprint IA : trois heures de formation sur vos propres tâches",
  outilCourt: 'Sprint IA',
  definition: "Le Sprint IA est l'atelier intelligence artificielle de trois heures conçu par Masteria : chaque participant y mène une tâche de son poste avec l'assistant que son entreprise lui fournit, sous le regard d'un formateur qui corrige les demandes en direct. Son prix, 1 980 € HT, ne varie pas entre un groupe de douze et une personne seule ; elle se déroule dans vos murs ou à distance. La certification Qualiopi de Masteria, délivrée pour ses actions de formation, ouvre à votre OPCO l'examen d'une demande de financement, qu'il tranche sur ses propres critères et selon les fonds réservés à votre branche.",
  intro: "Trois heures, c'est la durée d'une matinée de travail : assez pour qu'un groupe passe du premier essai à une tâche menée jusqu'au bout, assez court pour ne bloquer aucun agenda. Le Sprint IA tient dans ce cadre et se décline en six formats. Trois formats de fond sont décrits sur cette page : la découverte de l'IA générative, la méthode pour écrire une demande qui aboutit, et la séance réservée aux managers. Trois Sprints thématiques ont leur propre programme, sur le règlement européen (AI Act), sur Excel et sur la veille. Chaque séance part de l'abonnement déjà souscrit par l'entreprise, qu'il soit chez Microsoft (Copilot), OpenAI (ChatGPT), Google (Gemini), Anthropic (Claude) ou Mistral AI (Vibe). Quand toute une population doit y passer, les séances s'enchaînent par service ou par site, sur le même tronc commun.",
  pitch: "Une matinée, une tâche de votre poste menée jusqu'au bout, et la liste écrite de ce qui n'entre jamais dans l'outil.",
  casIds: [],
  // Avis Google : extraits par défaut. Tous les avis figurent en entier sur la home ;
  // en mettre d'autres en tête ici ferait baisser le texte propre de la home (mesure du 07/10/2026).
  avisPriorite: [],
  avisTitre: 'Les sessions Masteria notées par leurs participants sur Google',
  titres: {
    why: 'Quatre raisons de commencer par une séance de trois heures',
    spokes: 'Trois Sprints thématiques gardent leur programme détaillé',
    programme: "Le déroulé d'une séance Sprint IA, revu le 7 octobre 2026",
    faq: 'Avant de réserver un Sprint IA, les questions qui reviennent',
  },
  carteTitres: {
    'formation-sprint-ia-ai-act': 'Sprint IA AI Act : le règlement européen en une matinée',
    'formation-sprint-ia-excel': 'Sprint IA Excel : formules et tableaux croisés contrôlés',
    'formation-sprint-ia-veille': 'Sprint IA Veille : une recherche programmée chaque semaine',
  },
  spokesIntro: "Ces trois Sprints traitent un sujet précis devant un public qui le partage : la conformité au règlement européen, le tableur du quotidien, la surveillance d'un marché. Leur page détaille les séquences minute par minute, les prérequis, la mise en situation qui sert de fil rouge et les pièges que la séance apprend à éviter.",
  spokeDescs: {
    'formation-sprint-ia-ai-act': "Rôle de fournisseur ou de déployeur, article 4 réécrit en juillet 2026, transparence exigée depuis le 2 août, haut risque repoussé à décembre 2027, et un registre des usages ouvert pendant la séance.",
    'formation-sprint-ia-excel': "Formules suggérées dès le signe égal, synthèse par catégorie demandée en français, graphique du point mensuel, puis trois contrôles avant d'envoyer le moindre chiffre.",
    'formation-sprint-ia-veille': "Votre marché résumé en une phrase, dix sources choisies, une recherche que l'assistant relance seul chaque lundi, puis un premier compte rendu dont on ouvre chaque lien.",
  },
  encart: {
    titre: 'Quand trois heures ne suffisent plus',
    avant: "Un Sprint ouvre le sujet en une matinée. Une équipe qui se servira de l'IA chaque jour, sur ses propres dossiers, a besoin de davantage de temps : le ",
    ancre: 'catalogue des formations IA par métier',
    href: '/formation-intelligence-artificielle',
    apres: " compte plus de 100 programmes d'une ou deux journées, bâtis sur les pièces d'une fonction (clôtures, recrutements, appels d'offres, comptes rendus de direction). Beaucoup d'entreprises font passer tout le monde par un Sprint, puis envoient deux ou trois personnes par service vers la formation longue de leur métier.",
  },
  choisir: {
    titre: 'Trois formats de fond servent de première séance',
    paras: [
      "Le Sprint Sensibilisation s'adresse à toute personne de l'entreprise, y compris celle qui n'a encore jamais posé une question à ChatGPT ou à Copilot. La première demi-heure explique le ressort d'un modèle de langage : il calcule, mot après mot, la suite la plus vraisemblable d'un texte, ce qui le rend habile à reformuler et capable d'affirmer une erreur avec aplomb. Le formateur traite ensuite devant le groupe un document de l'entreprise, puis chacun fait trois essais sur une tâche de son poste. La séance se termine sur le compte à utiliser, la liste des informations qui restent hors de l'outil et trois usages à refaire dans la semaine.",
      "Le Sprint Prompts vise les salariés qui se servent déjà de ChatGPT ou de Copilot et obtiennent des réponses moyennes, faute de méthode. Ils apprennent à construire une demande en quatre éléments (le contexte du dossier, le rôle confié à l'assistant, la tâche, la forme attendue du résultat), puis à corriger la réponse par une relance précise plutôt que de repartir de zéro. La deuxième partie range les meilleures demandes dans les consignes permanentes de l'outil ou dans une compétence, un fichier d'instructions au format SKILL.md, repris en 2026 par la plupart des grands assistants, de Claude à Gemini en passant par Copilot. Chacun repart avec sa fiche de demandes, testée sur ses propres documents.",
      "Le Sprint Managers réunit des chefs d'équipe et des responsables de service. Ils commencent par pratiquer eux-mêmes, sur un compte rendu de réunion ou la préparation d'un point d'équipe, parce qu'une équipe suit plus volontiers un manager qui pratique. Ils passent ensuite en revue les tâches de leur service : celles que l'assistant accélère, celles qui doivent rester humaines, comme l'évaluation des personnes, que le règlement européen classe à haut risque avec des obligations attendues au 2 décembre 2027. La séance se clôt sur trois règles d'équipe et un point fixé à trente jours.",
      "Pour une population qui découvre, commencez par la Sensibilisation. Pour des équipes déjà équipées d'une licence, le Sprint Prompts rend l'investissement utile plus vite. Quand l'entreprise déploie un outil à grande échelle, faites passer les managers en premier : ils porteront la démarche auprès de leurs équipes et sauront répondre aux questions de la semaine suivante. Les trois Sprints thématiques s'ajoutent ensuite selon les besoins, l'AI Act pour les fonctions qui portent la conformité, Excel pour celles qui vivent dans un tableur, la veille pour celles qui suivent un marché.",
      "Chaque séance accueille douze personnes au plus, pour que le formateur ait le temps de reprendre la demande de chacun. Une population de 150 salariés représente ainsi treize séances, que nous répartissons par service, par site ou par niveau d'usage, en présentiel ou à distance. Le tronc commun ne bouge pas ; les exemples changent selon le public, car un atelier de production ne manipule pas les mêmes pièces qu'un service juridique.",
      "Un Sprint se suit aussi seul, face au formateur. Ce format individuel convient au dirigeant d'une petite entreprise, à une assistante de direction ou à un expert qui préfère avancer sur ses propres dossiers sans attendre qu'un groupe se constitue. Le prix reste celui d'une séance, 1 980 € HT, et le contenu suit le format choisi en s'appuyant sur l'agenda réel de la personne : la note qu'elle doit rendre jeudi, le courrier qu'elle reporte depuis une semaine, le tableau qu'elle présente au prochain comité.",
      "Les trois Sprints thématiques se combinent avec les formats de fond. Une direction des ressources humaines peut ainsi organiser une Sensibilisation pour l'ensemble des salariés, un Sprint Managers pour l'encadrement, puis un Sprint IA AI Act pour les quatre ou cinq personnes qui tiendront le registre des usages. Une direction financière enchaîne plutôt un Sprint Prompts et un Sprint IA Excel. Le cadrage fixe cet ordre avec vous, en partant de la question que l'entreprise se pose aujourd'hui.",
    ],
  },
  apres: {
    titre: 'Après les Sprints : des outils bâtis sur les demandes qui reviennent',
    texte: "Quelques semaines après une série de Sprints, les mêmes demandes reviennent d'un service à l'autre : préparer une réponse type, résumer un dossier client, contrôler un tableau avant envoi. C'est le signal qu'un outil commun ferait gagner du temps à tous. Masteria peut le construire avec vous, sous la forme d'une compétence partagée, d'un assistant relié à vos documents ou d'un agent connecté à vos logiciels de gestion, puis former les deux ou trois personnes chargées de l'entretenir. Le questionnaire envoyé trente jours après les séances aide à repérer ces demandes récurrentes, service par service. Construire un tel outil relève du conseil et du développement, pas finançable par votre OPCO : Masteria vous remet un prix au forfait dès que le besoin est cerné.",
  },
  autresOutilsIntro: "Le Sprint travaille avec l'outil que l'entreprise fournit déjà et laisse le choix du fournisseur à une autre décision. Quand une équipe doit aller plus loin sur un assistant précis, chaque outil a sa formation de deux jours : Microsoft Copilot au cœur des messageries et des réunions Teams, ChatGPT et ses projets d'équipe, Gemini dans Google Workspace, Claude pour les dossiers volumineux, Vibe pour les entreprises qui veulent leurs données hébergées en Europe.",
  why: [
    {
      title: 'Une matinée mène du premier essai à une tâche aboutie',
      body: "Chaque participant arrive avec une tâche de son poste et le document qui va avec, choisis lors du cadrage : un courrier à reprendre, une note de quinze pages à condenser, un tableau de suivi à commenter. Les apports du formateur tiennent en séquences courtes, et le reste du temps chacun travaille sur son propre écran. Le formateur circule de poste en poste, relit les demandes qui échouent et projette la correction quand l'erreur peut servir au groupe entier. Au bout des trois heures, la tâche est faite, et la personne sait comment la refaire seule le lendemain, ce qui compte davantage que tout ce qu'elle a vu. Les participants qui avancent vite reçoivent une seconde tâche plus exigeante, pour que personne n'attende.",
    },
    {
      title: 'Le compte de chacun se vérifie avant la première demande',
      body: "Dans beaucoup d'entreprises, l'IA est arrivée par des comptes personnels ouverts sans prévenir personne. Or les offres gratuites et individuelles de ChatGPT, comme Vibe dans ses versions Free et Pro, peuvent nourrir l'entraînement des modèles de l'éditeur tant que la personne n'a pas désactivé l'option, alors que les offres d'entreprise l'écartent d'emblée ou confient ce choix à l'administrateur. Le Sprint commence donc par une vérification simple : sur quel compte chacun travaille, avec quel réglage. Le groupe écrit ensuite la liste des informations bannies de l'outil, comme les salaires, les données de santé ou les contrats clients. Cette liste devient la première page de votre charte si vous n'en avez pas encore.",
    },
    {
      title: "Une séance datée répond à l'article 4 du règlement IA",
      body: "Le règlement (UE) 2026/1744, dit Omnibus, a réécrit cet article à compter du 27 juillet 2026 : une entreprise utilisatrice doit désormais agir pour que ses salariés comprennent et maîtrisent les outils d'IA mis entre leurs mains. L'obligation porte sur les moyens : aucun niveau individuel à atteindre, aucun certificat à présenter. Un Sprint laisse trois traces utiles à ce titre : un programme daté, une feuille d'émargement et une attestation de fin de formation par participant. Rangées dans un registre interne, elles montrent ce que l'entreprise a mis en place, pour qui et à quelle date. Le texte ne réclame pas davantage, mais la Commission européenne publie des exemples pratiques, que le Sprint IA AI Act passe en revue.",
    },
    {
      title: 'Les séances se répètent de site en site sans perdre le fil',
      body: "Former trois cents personnes en deux jours chacune immobilise des centaines de journées de travail ; trois heures par personne rendent l'objectif atteignable en quelques semaines. Chaque salarié reçoit le même socle, donc les mêmes règles, quel que soit son site ou sa date de passage. Les exemples, eux, sont choisis pour chaque public lors du cadrage, et le calendrier évite de vider un service le jour d'une clôture ou d'un inventaire. Masteria mobilise selon les besoins une vingtaine de formateurs indépendants, en France, dans d'autres pays européens, aux États-Unis ou en Inde, et Mathias Nizan veille à ce que chacun anime le même contenu.",
    },
  ],
  programme: [
    {
      day: 'J',
      title: 'Une séance de trois heures, du cadre au plan de la semaine',
      items: [
        "Premier quart d'heure : ce qu'est un modèle de langage, pourquoi il rédige bien et pourquoi il lui arrive d'inventer sans hésiter",
        "Vérification du compte de chacun (offre professionnelle ou personnelle, réglage d'entraînement) et liste des informations qui restent hors de l'outil",
        "Démonstration sur un document de l'entreprise remis au cadrage, avec l'assistant que les participants ont sous la main",
        "Première heure d'atelier : chacun mène la tâche qu'il a apportée, et le formateur corrige à voix haute les demandes qui échouent",
        "Relecture d'un résultat : vérifier un chiffre, ouvrir une source citée, repérer une information que l'outil a inventée",
        "Deuxième essai, plus exigeant : la même tâche sur un autre document, cette fois sans l'aide du formateur, pour vérifier que la méthode tient",
        "Partie propre au format retenu : prise en main pour la Sensibilisation, demandes réutilisables pour le Sprint Prompts, règles d'équipe pour les managers",
        "Cadre d'usage : la charte de l'entreprise ou, à défaut, trois règles rédigées ensemble, et les mesures de formation dont l'employeur doit garder la trace",
        "Questions ouvertes du groupe : licences, confidentialité, droits d'auteur sur un texte généré, ce que les collègues font déjà de leur côté",
        "Dernier quart d'heure : trois usages que chacun refera dans la semaine, et la personne à qui poser ses questions",
        "Après la séance : émargement, attestation de fin de formation, supports remis à chaque participant et questionnaire sur les usages trente jours plus tard",
      ],
    },
  ],
  faq: [
    {
      q: 'Un atelier intelligence artificielle Sprint IA, en quoi consiste-t-il ?',
      a: "C'est une séance de formation de trois heures pendant laquelle chaque participant utilise un assistant d'IA générative sur une tâche de son propre poste, avec un formateur qui corrige les demandes en direct. Masteria propose six formats : la Sensibilisation, le Sprint Prompts et le Sprint Managers, présentés sur cette page, ainsi que trois Sprints thématiques sur l'AI Act, Excel et la veille. La séance se tient sur votre site ou à distance, avec douze personnes au plus, ou une seule en individuel. Elle sert les entreprises qui veulent mettre une équipe en route vite, ou former plusieurs centaines de salariés en quelques semaines.",
    },
    {
      q: 'Quel format de Sprint choisir pour une première séance ?',
      a: "Tout dépend de ce que vos salariés savent déjà faire. Pour un public qui découvre l'IA générative, la Sensibilisation pose les bases et le cadre. Pour des équipes qui ont déjà une licence mais s'en servent peu ou mal, le Sprint Prompts apporte une méthode de demande et des modèles réutilisables. Pour un déploiement d'outil, faites passer les managers en premier, puis leurs équipes. Le cadrage de trente minutes sert à trancher : nous examinons avec vous les personnes à former, l'assistant déjà déployé et le résultat attendu, puis nous proposons le format et l'ordre des séances.",
    },
    {
      q: 'Combien de personnes par séance, et comment former toute une entreprise ?',
      a: "Une séance réunit douze participants au plus, pour que chacun ait le temps de faire relire sa demande. Une personne seule peut aussi suivre un Sprint en individuel, au même prix. Pour une population plus large, les séances s'enchaînent : 150 salariés représentent treize séances, réparties par service, par site ou par niveau d'usage. Le contenu de base est identique pour tous, tandis que les exemples s'adaptent au service présent dans la salle. Le calendrier se construit avec vous pour ne pas vider un service le même jour.",
    },
    {
      q: 'Quel budget prévoir pour un Sprint IA, et qui le finance ?',
      a: "Chaque séance de trois heures est facturée 1 980 € HT, auxquels s'ajoute la TVA à 20 %, que le groupe compte douze personnes ou une seule. Dans un groupe de douze, la séance revient à 165 € HT par personne. La certification Qualiopi de Masteria, condition pour qu'en France votre opérateur de compétences (OPCO) étudie une prise en charge, est acquise ; l'OPCO décide ensuite seul, au vu de ses règles et de ses moyens. Votre dossier reçoit de notre part programme, convention et attestations. Un client établi à Genève ou à Bruxelles, hors du système des OPCO, reçoit un devis en euros HT.",
    },
    {
      q: "Avec quel outil d'IA se déroule la séance ?",
      a: "Avec celui que votre entreprise fournit à ses salariés : Microsoft Copilot, ChatGPT, Gemini, Claude ou Vibe. Le formateur prépare les exercices sur cet outil et sur l'offre souscrite, car les fonctions disponibles ne sont pas les mêmes sur une offre gratuite et sur une offre d'entreprise. Si vos équipes n'ont encore aucun accès professionnel, le cadrage permet d'en parler avant la séance : faire travailler des salariés sur des comptes gratuits pose une question de confidentialité, puisque leurs échanges peuvent alors servir à entraîner les modèles. Le Sprint se fait aussi sur deux outils quand l'entreprise en a déployé deux.",
    },
    {
      q: "Trois heures suffisent-elles pour l'obligation de formation de l'AI Act ?",
      a: "Depuis sa réécriture de juillet 2026, l'article 4 oblige l'entreprise à agir pour que les personnes qui emploient l'IA en son nom sachent la manier. Aucune durée minimale ni aucun certificat n'y figurent. Un Sprint daté, avec émargement et attestation, est une mesure que vous pouvez inscrire dans votre registre interne. Pour les salariés qui se servent de l'IA chaque jour, ou pour des usages sensibles comme le recrutement, une formation plus longue complète utilement la séance. Le Sprint IA AI Act aide les fonctions qui pilotent la conformité à bâtir ce registre.",
    },
    {
      q: 'Peut-on suivre un Sprint IA en classe virtuelle ?',
      a: "Oui, au même prix et avec le même déroulé qu'en salle. Chaque participant garde son assistant ouvert sur son écran et le partage quand le formateur reprend sa demande devant le groupe. Un second écran, ou un ordinateur portable à côté de la visioconférence, rend l'exercice plus confortable. Les entreprises réparties sur plusieurs sites combinent souvent les deux formes : une séance en salle au siège, des séances à distance pour les agences. Le formateur peut aussi se déplacer dans vos bureaux, en France ou hors de nos frontières.",
    },
    {
      q: 'Que faut-il préparer avant la séance ?',
      a: "Trois choses. Un échange de cadrage avec la personne qui organise, pour fixer le format, le public et l'outil. Une vérification des accès une semaine avant, par votre service informatique : chaque participant doit pouvoir ouvrir l'assistant avec son compte professionnel. Enfin, une tâche et un document par participant, tirés de son travail de la semaine, anonymisés si besoin. Plus la tâche est concrète (répondre à une réclamation, résumer un rapport de vingt pages, préparer un point d'équipe), plus la séance rapporte.",
    },
    {
      q: 'Une fois la séance terminée, que reste-t-il aux participants ?',
      a: "Chaque participant reçoit les supports, sa fiche de demandes et son attestation de fin de formation. Trente jours plus tard, un court questionnaire demande ce qui est devenu une habitude et ce qui bloque encore. Les réponses servent à décider de la suite : une formation métier d'une ou deux journées pour les services qui en ont l'usage quotidien, un parcours pour les référents, ou la construction d'un outil commun quand les mêmes demandes reviennent partout. Vous gardez la main sur ce choix, avec les réponses sous les yeux.",
    },
  ],
}
