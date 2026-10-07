// Contenu propre à /agent-commercial-ia. Lu par SolutionIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : CNIL (prospection électronique et téléphonique, fiches du 10/06/2026 ; sanction du 05/12/2024 ; référentiel gestion des activités commerciales), Légifrance (L. 223-1 en vigueur au 11/08/2026, Code civil art. 1114, Code du travail L. 1222-4), lignes directrices C(2026) 5054 de la Commission sur l'article 50 (§ 30, 31, 36), Microsoft Learn (Sales Qualification Agent, mis à jour le 20/07/2026), étude de cas distribution et cas conseil financier.
export default {
  slug: 'agent-commercial-ia',
  dateModified: '2026-10-07',
  pagePropre: true,
  solution: {
    metaDesc: "Agent IA commercial : cotation depuis l'e-mail du client, relance des devis, CRM à jour, sur vos prix et stocks. Code livré. 30 min de cadrage offertes.",
    directAnswer: "Un agent IA commercial prépare ce qui occupe vos vendeurs entre deux rendez-vous : la cotation d'une demande reçue par e-mail, la relance d'un devis, la réponse à un cahier des charges, le compte rendu à verser au CRM. Il lit vos prix et vos stocks, le vendeur valide l'envoi, et Masteria vous remet le code.",
    howWeBuild: [
      {
        title: "Suivre des devis réels",
        desc: "Nous suivons une dizaine de devis du premier e-mail à la signature pour repérer les étapes qui prennent du temps et les informations que le vendeur va chercher à chaque fois.",
      },
      {
        title: "Écrire les règles avec la direction",
        desc: "Tarifs par client, remises autorisées, seuil de marge qui déclenche une validation : la direction fixe les règles que l'agent applique, et ce qu'il ne doit jamais proposer.",
      },
      {
        title: "Brancher l'ERP et le CRM en lecture",
        desc: "L'agent lit la base articles, les stocks, l'historique des devis et les fiches clients. Il prépare des brouillons, et toute écriture dans le CRM reste un geste du vendeur.",
      },
      {
        title: "Confier l'agent aux vendeurs référents",
        desc: "Quelques commerciaux volontaires l'utilisent d'abord sur leurs propres comptes, puis forment leurs collègues. La direction reçoit le code, les règles et leur documentation.",
      },
    ],
  },
  hero: {
    chips: [
      "Cotation depuis l'e-mail du client",
      "Relance des devis en attente",
      "Tarifs et remises de l'ERP",
      "Le vendeur valide l'envoi",
    ],
    lien: "Voir comment l'agent se construit",
    enBref: [
      {
        label: "Budget",
        value: "La cotation ou la relance à partir de 15 000 € environ ; plusieurs ERP, CRM ou filiales au-delà de 100 000 €",
      },
      {
        label: "Démarrage",
        value: "Dix devis suivis de bout en bout et des commerciaux référents",
      },
      {
        label: "Ce que vous recevez",
        value: "Agent, règles commerciales codées, connecteurs ERP et CRM, documentation",
      },
      {
        label: "Propriété",
        value: "La direction commerciale garde l'agent et ses règles",
      },
    ],
  },
  presentation: {
    kicker: "Définition",
    h2: "Ce que prépare un agent commercial, et ce qu'il laisse au vendeur",
  },
  etapesBloc: {
    kicker: "Mise en service",
    h2: "Cinq étapes, des dix premiers devis à toute l'équipe",
  },
  etapesNote: {
    texte: "Si la vente n'est qu'un des services candidats, un",
    lien: {
      href: "/audit-ia",
      label: "audit IA compare les gisements avant le premier pilote",
    },
  },
  methodeBloc: {
    kicker: "Construction",
    h2: "Quatre paliers pour mettre l'agent entre les mains des vendeurs",
  },
  technique: {
    kicker: "Sous le capot",
    texte: "L'agent travaille sur vos sources en lecture seule : base articles, tarifs et stocks de l'ERP, historique des devis, fiches du CRM. Les règles commerciales écrites avec la direction s'appliquent avant toute rédaction, et le modèle (choisi selon la tâche et son coût) rédige le brouillon en citant les lignes de prix utilisées. Les connexions passent par les API de vos logiciels ou par MCP, et l'envoi au client reste une décision du vendeur.",
    h2: "Les briques d'un agent commercial",
    lead: "L'agent lit vos sources en lecture seule (base articles, tarifs et stocks de l'ERP, historique des devis, CRM), applique les règles commerciales écrites avec la direction et prépare des brouillons ; l'envoi au client et toute écriture dans le CRM restent un geste du vendeur.",
    chips: [
      "ERP et CRM en lecture",
      "Règles de remise et de marge",
      "Brouillons à valider",
      "Journal par compte client",
      "Modèle choisi selon la tâche",
    ],
    note: {
      texte: "Nos façons de développer, de tester et de documenter sont décrites sur la page",
      lien: {
        href: "/agence-developpement-ia",
        label: "développement IA sur mesure",
      },
    },
  },
  secteursBloc: {
    kicker: "Par façon de vendre",
    h2: "Un agent commercial selon votre façon de vendre",
    intro: "Distribution, industrie, services ou négoce : la tâche qui rapporte le plus change, la règle de validation par le vendeur demeure.",
  },
  regieBloc: {
    kicker: "Développeur chez vous",
    h2: "Un développeur auprès de votre direction commerciale et de votre ERP",
    lien: "Les modèles d'engagement",
  },
  faqBloc: {
    kicker: "Questions",
    h2: "Agent commercial : les questions des directions commerciales",
    texte: "Votre cycle de vente a une étape que nous n'avons pas citée ?",
    lien: "Racontez-la-nous",
  },
  maillage: {
    kicker: "Autour de la vente",
    h2: "D'autres outils pour vos équipes commerciales",
  },
  cta: {
    titre: "Quelle étape de vos ventes confier à un agent ?",
    texte: "Dites-nous où vos vendeurs perdent du temps (cotation, relance, cahiers des charges) et quels logiciels portent vos prix. Nous vous répondons sous 24 heures et calons avec vous les 30 minutes de cadrage offertes.",
  },
  equipe: {
    titre: "Des intervenants qui travaillent avec vos vendeurs",
    texte: "Masteria, l'entreprise fondée par Mathias Nizan à Lyon en 2022, réunit pour chaque projet des intervenants indépendants que Mathias dirige. Pour un agent commercial, ce sont un consultant qui suit vos devis avec la direction, des développeurs qui branchent l'agent sur l'ERP et le CRM, et un formateur pour les commerciaux référents. Masteria ne revend aucun CRM ni aucune licence.",
  },
  intro: "Un agent IA commercial prépare ce que vos vendeurs font entre deux rendez-vous : les lignes de devis tirées de l'e-mail d'un client, les relances des devis en attente, les réponses aux cahiers des charges, les comptes rendus versés au CRM, le fichier de vos clients et de vos affaires. Il lit vos prix, vos stocks et votre base articles dans l'ERP, le logiciel de gestion où vivent vos tarifs ; le commercial valide le prix et l'envoi. Nous commençons par la cotation et la relance de devis, l'étape où vos prix et vos stocks pèsent le plus dans la réponse.",
  guide: {
    kicker: "Guide projet · agent commercial",
    h2: "Un agent commercial rapporte d'abord sur la cotation et la relance, là où il lit vos prix et vos devis",
    lead: "Les outils du marché savent déjà chercher un prospect et lui écrire. En mode « Research and engage », l'agent de qualification de Dynamics 365 Sales envoie lui-même ses e-mails d'approche et ses relances, selon la documentation de Microsoft mise à jour en juillet 2026. Le temps commercial qui reste à reprendre se trouve dans ce qu'un outil de prospection ne lit pas : vos tarifs, vos stocks, vos devis ouverts, vos cahiers des charges. Chez un distributeur IT B2B de 58 salariés dont nous avons formé les dix référents, la relance des devis a été la première compétence validée sur de vrais devis, avant même la formation.",
    sections: [
      {
        h3: "L'agent commercial travaille en interne, pour le vendeur",
        paras: [
          "Le chatbot de votre site parle à des visiteurs, l'agent de support répond à des clients ; l'agent commercial ne s'adresse à personne à l'extérieur tant que vous ne l'avez pas décidé. Son utilisateur est le commercial. Il lit le CRM, l'ERP, la base articles, la messagerie et les devis passés. Il prépare ensuite une cotation, une relance, une réponse à un cahier des charges ou une fiche avant rendez-vous. Le vendeur relit, ajuste le prix et envoie sous son nom.",
          "Cette position interne change la nature des erreurs à craindre. Un chatbot public se trompe devant un inconnu ; un agent commercial se trompe dans un devis, un document qui peut engager l'entreprise. Les risques portent sur un prix, une remise, une référence remplacée par une autre, un délai de livraison promis sur un stock absent. La conception suit ces risques : l'agent affiche la ligne de tarif et le niveau de stock qu'il a lus, il signale toute marge inférieure au seuil fixé par la direction, et il ne touche jamais à un prix déjà validé.",
        ],
      },
      {
        h3: "Un devis envoyé peut engager l'entreprise, le prix reste donc une décision humaine",
        paras: [
          "Le Code civil définit l'offre comme une proposition qui comprend les éléments essentiels du contrat envisagé et exprime la volonté de son auteur d'être lié en cas d'acceptation (article 1114). Un devis ferme qui précise l'objet, la quantité et le prix répond à cette définition. Une ligne mal tarifée par l'agent, envoyée puis acceptée, peut donc lier votre entreprise. Nous plaçons la validation humaine à cet endroit précis : l'agent prépare la cotation à partir de l'e-mail du client, et le commercial confirme les prix, les remises et le délai avant l'envoi.",
          "Cette validation tient en une relecture. Sur une demande courante, la cotation préparée se vérifie d'un coup d'œil : références reconnues, prix du tarif client, stock disponible, articles de substitution proposés quand une référence manque. Le commercial garde son temps pour ce qui demande un jugement : la remise à consentir, le délai à négocier, l'alternative à proposer quand le stock ne suit pas. L'administration des ventes contrôle de son côté les règles de prix que l'agent applique, et chaque écart qu'elle relève devient un cas de test.",
        ],
      },
      {
        h3: "La prospection automatisée suit une règle différente selon le canal et le destinataire",
        paras: [
          "Par e-mail, par SMS ou par automate d'appel, prospecter un particulier exige son consentement préalable, sauf s'il est déjà client et que l'offre porte sur des produits analogues. Prospecter un professionnel repose sur l'intérêt légitime, à condition que le message concerne sa profession, qu'il ait été informé de l'usage de son adresse et qu'il dispose d'un moyen simple de s'y opposer. Chaque message indique l'identité de l'émetteur et la façon de refuser la suite. Ces règles viennent de l'article L. 34-5 du Code des postes et des communications électroniques, que la CNIL détaille dans sa fiche datée du 10 juin 2026.",
          "Le téléphone a changé le 11 août 2026. Démarcher par téléphone un consommateur qui n'a pas donné son consentement préalable est interdit, sauf dans le cadre d'un contrat en cours et pour des produits qui s'y rattachent (article L. 223-1 du Code de la consommation, dans sa rédaction issue de la loi n° 2025-594). Entre professionnels, l'appel reste possible sur la base de l'intérêt légitime, avec un droit d'opposition. Un agent vocal qui compose seul ses appels se conçoit avec les règles des automates d'appel, qui sont celles de l'e-mail. Notre recommandation : laisser l'appel au commercial, et confier à l'agent sa préparation et son compte rendu.",
        ],
      },
      {
        h3: "Un agent qui écrit seul aux prospects doit dire qu'il est une IA, et pour qui il agit",
        paras: [
          "Les lignes directrices de la Commission sur l'article 50 du règlement IA, publiées le 20 juillet 2026, traitent des agents qui gèrent une correspondance ou négocient pour le compte de quelqu'un. Un tel agent doit révéler sa nature artificielle et la personne pour laquelle il agit. Parmi leurs exemples figure l'e-mail qu'un agent rédige et envoie lui-même, avec une mention IA visible dès ses premières lignes. Un e-mail relu puis envoyé par le commercial, qui reste l'interlocuteur principal du client, sort de ce cadre.",
          "Nous configurons donc deux régimes. Par défaut, l'agent dépose un brouillon dans la messagerie du commercial, qui le relit, le modifie et l'envoie sous son nom. Sur décision de la direction, certains messages partent seuls, comme l'accusé de réception d'une demande de prix ou une relance standard : ils portent alors la mention de l'IA et le nom de l'entreprise pour laquelle l'agent écrit. Vos commerciaux savent qu'ils travaillent avec une IA, et pour un personnel formé, l'échange avec un assistant interne ne demande pas d'annonce particulière selon les mêmes lignes directrices.",
        ],
      },
      {
        h3: "Le CRM se tient propre avec des règles de la CNIL que l'agent sait appliquer",
        paras: [
          "Le référentiel de la CNIL sur la gestion des activités commerciales fixe un repère : les données d'un prospect qui n'est pas client se conservent trois ans à compter de leur collecte ou du dernier contact venu de lui. Une demande de documentation ou un clic sur un lien compte comme contact ; la simple ouverture d'un e-mail ne compte pas. Un agent branché sur le CRM repère les fiches qui atteignent ce délai, prépare le message qui demande à la personne si elle souhaite rester en contact, puis propose la suppression ou l'archivage en l'absence de réponse positive.",
          "L'enrichissement des fiches demande la même prudence. Le 5 décembre 2024, la CNIL a sanctionné de 240 000 euros l'éditeur d'une extension de navigateur qui récupérait les coordonnées de membres de LinkedIn, y compris celles qu'ils avaient choisi de masquer, et qui conservait ces données cinq ans après chaque mise à jour. Un agent qui complète vos fiches avec des données trouvées en ligne soulève les mêmes questions : l'origine de la donnée, ce que la personne pouvait attendre, l'information qu'elle a reçue. Nous branchons l'agent sur vos propres sources (clients, demandes entrantes, salons), et chaque contact importé garde la trace de son origine.",
        ],
      },
    ],
    table: {
      caption: "Le cycle de vente découpé : ce que l'agent prépare, ce que le commercial décide",
      headers: ["Étape", "Ce que l'agent prépare, et à partir de quelles données", "Ce que le commercial décide"],
      rows: [
        ["Demande de prix reçue par e-mail", "Lignes de devis : références de la base articles, prix du tarif client dans l'ERP, stock disponible", "Prix final, remise, délai annoncé"],
        ["Devis en attente de réponse", "Relance adaptée à l'historique du compte et à l'ancienneté du devis", "Envoi de la relance, ou abandon de l'affaire"],
        ["Cahier des charges reçu", "Réponse point par point à partir des fiches produits et de l'ERP, écarts signalés", "Engagements contractuels, pénalités acceptées"],
        ["Référence en rupture ou hors catalogue", "Articles de substitution, dont ceux des marques propres", "Choix de l'article présenté au client"],
        ["Rendez-vous client", "Fiche compte : achats récents, devis ouverts, incidents, interlocuteurs", "Objectif et conduite du rendez-vous"],
        ["Après le rendez-vous", "Compte rendu, prochaines étapes, mise à jour des champs du CRM", "Validation de l'affaire, de son montant et de sa date"],
      ],
    },
    cas: {
      h3: "Retour de mission : la relance de devis, première compétence validée sur de vrais devis chez un distributeur de 58 salariés",
      contexte: "Ce distributeur de matériel informatique pour les entreprises, filiale d'un groupe européen, emploie 58 salariés en France. Une large part de leur journée partait dans des tâches qui entourent la vente : chiffrer une demande reçue par e-mail, relancer un devis resté sans réponse, répondre à un cahier des charges, vérifier un stock, réactiver un client qui n'achète plus. La direction a posé une contrainte : vendre davantage à effectif constant, avec le CRM, l'ERP et la base articles déjà en place.",
      etapes: [
        "Avec la direction, classer les tâches commerciales selon le temps qu'elles prennent et ce qu'elles rapportent, puis décider qui valide un assistant avant sa diffusion.",
        "Confier la conception à dix référents volontaires, formés pendant deux jours en juin 2026 : chacun construit une compétence Claude sur sa façon de travailler, avec des données de démonstration.",
        "Faire écrire par la direction, compétence par compétence, ce qu'elle a le droit de consulter, les sources qu'elle cite et ce que le vendeur garde pour lui.",
        "Valider la relance de devis en premier, sur de vrais devis, avant la formation ; pour les autres compétences, chaque référent remplace les données de démonstration par celles de l'entreprise avant la production.",
        "Prévoir d'octobre à décembre 2026 le déploiement aux quelque cinquante autres collaborateurs, avec les référents, qui accueilleront ensuite les nouveaux arrivants et feront évoluer les compétences.",
      ],
      resultat: "Les dix référents sont formés et onze compétences Claude sont construites. Pour un commercial, elles couvrent la cotation à partir d'un e-mail client, la relance des devis, la substitution vers les marques propres, les réponses aux cahiers des charges tirées de l'ERP, la prospection et la réactivation de clients, le suivi de la marge, des stocks et des livraisons. Pour chaque compétence, la part qui reste au vendeur est écrite. Le déploiement aux autres collaborateurs est prévu d'octobre à décembre 2026. La direction vise, avec ses 58 salariés, l'équivalent commercial d'une équipe de 70 personnes : c'est une cible, et la mesure dira si elle est atteinte.",
      lien: { href: "/etudes-de-cas-ia#distribution", label: "Les compétences commerciales du distributeur de 58 salariés" },
    },
    pieges: [
      { titre: "Commencer par la prospection à froid", texte: "C'est l'étape la mieux couverte par les outils du marché et la plus encadrée par le droit : consentement des particuliers, opposition des professionnels, annonce de l'IA si l'agent écrit seul. La cotation et la relance travaillent sur des clients qui vous ont déjà écrit, et leur effet se mesure dès le pilote." },
      { titre: "Laisser l'agent écrire dans tous les champs du CRM", texte: "Un agent qui remplit librement les champs crée des doublons et des montants d'affaires faux, que la direction retrouve ensuite dans ses prévisions. Fixez avec elle la liste des champs qu'il peut modifier, et journalisez chaque écriture." },
      { titre: "Faire lire à l'agent un export de tarifs figé", texte: "Un fichier de prix exporté une fois devient faux à la première révision de tarif. L'agent lit les prix et les stocks dans l'ERP au moment de la cotation ; si sa source est ancienne, il le signale et ne chiffre pas." },
      { titre: "Tenir l'administration des ventes à l'écart", texte: "Elle connaît les tarifs particuliers, les remises tolérées et les erreurs qui reviennent dans les commandes. Sans elle, les règles de prix de l'agent reprennent les approximations qui circulent dans les équipes." },
      { titre: "Envoyer sous le nom d'un commercial un e-mail qu'il n'a pas relu", texte: "Un message autonome présenté comme écrit par un vendeur cache l'IA au destinataire. Un agent qui écrit seul révèle sa nature et l'entreprise pour laquelle il agit ; dans tous les autres cas, le commercial relit et envoie lui-même." },
    ],
  },
  etapes: [
    { title: "Suivre dix devis de bout en bout", desc: "Du premier e-mail du client à la signature : qui lit quoi, dans quel logiciel, combien de temps chaque étape attend. Ce relevé désigne l'étape par laquelle l'agent commencera et l'indicateur qui servira à le juger." },
    { title: "Brancher les sources en lecture", desc: "Base articles, tarifs et stocks de l'ERP, historique des devis, CRM, dossiers de messagerie choisis. Chaque connexion passe par un compte dédié aux droits limités, et les commerciaux sont informés de ce que l'agent lit." },
    { title: "Écrire les règles commerciales", desc: "Tarifs par client, remises autorisées, seuil de marge qui déclenche une alerte, règles de substitution, gabarit du devis. Chaque règle reçoit un cas de test tiré de vos devis passés, validé par l'administration des ventes." },
    { title: "Piloter avec des commerciaux référents", desc: "Quelques vendeurs volontaires utilisent l'agent sur la cotation et la relance pendant plusieurs semaines. Ils corrigent, l'administration des ventes contrôle les prix, et l'indicateur choisi au départ se relève avant d'élargir." },
    { title: "Étendre aux autres étapes", desc: "Cahiers des charges, préparation des rendez-vous, comptes rendus, puis écriture contrôlée dans le CRM sur les champs autorisés. Le code, les règles et la documentation vous sont remis, et vos référents reprennent la main." },
  ],
  cout: {
    kicker: "Budget de l'agent commercial",
    h2: "Le budget d'un agent commercial",
    note: {
      texte: "Les ordres de grandeur des autres types de projets sont rassemblés sur la page",
      lien: {
        href: "/prix-projet-ia",
        label: "tarifs des projets IA",
      },
    },
    lead: "Un agent commercial se chiffre au forfait, une fois le cadrage fait et le périmètre écrit. Un premier périmètre, la cotation ou la relance de devis, commence vers 15 000 € ; un agent branché sur plusieurs ERP et CRM, pour plusieurs filiales ou plusieurs pays, passe la barre des 100 000 € et se compte parfois en centaines de milliers d'euros.",
    paras: [
      "Le prix dépend moins du modèle de langage que de vos règles commerciales. Un tarif unique et une base articles propre se lisent vite. Des tarifs par client, des remises par famille de produits et des substitutions entre marques demandent d'écrire chaque règle avec l'administration des ventes, puis de la tester sur vos devis passés. Le coût de fonctionnement suit le nombre de devis et de messages traités ; il se mesure pendant le pilote, sur votre propre volume d'affaires.",
      "La proposition écrite détaille les étapes du cycle couvertes, les logiciels connectés, le niveau d'autonomie retenu, le calendrier du pilote et le budget, palier par palier. Le premier pas consiste en 30 minutes de cadrage offertes, par téléphone ou en visio, pour situer l'étape du cycle de vente où l'agent commencera et le logiciel qu'il devra lire en premier.",
    ],
    facteurs: [
      { title: "Les logiciels à lire et à écrire", desc: "CRM, ERP, base articles, messagerie, outil de signature : chaque logiciel ajoute une connexion, un compte dédié et des tests. L'écriture dans le CRM coûte plus que la lecture, parce qu'elle demande des contrôles et un journal." },
      { title: "La complexité des règles de prix", desc: "Tarifs par client, remises par quantité ou par famille, prix nets négociés, substitution vers d'autres marques, seuil de marge : chaque règle s'écrit avec l'administration des ventes et reçoit ses cas de test." },
      { title: "Le niveau d'autonomie", desc: "Un brouillon déposé dans la messagerie du commercial reste le cas le plus simple. L'envoi automatique de certains messages demande en plus la mention de l'IA, des garde-fous sur le contenu et une revue des messages partis." },
      { title: "L'état du CRM", desc: "Doublons, champs vides, contacts sans origine connue, affaires jamais clôturées : un CRM mal tenu se nettoie avant ou pendant le projet. Ce chantier se chiffre au cadrage, après la lecture d'un échantillon de fiches." },
    ],
  },
  regie: [
    "Un développeur IA détaché auprès de l'administration des ventes suit ce qui fait dérailler un agent commercial : nouvelle grille tarifaire, nouveau gabarit de devis, nouveaux champs dans le CRM, nouvelle gamme. Il travaille avec les commerciaux référents, ceux qui utilisent l'agent chaque jour, et transforme leurs remarques en règles testées sur vos devis passés.",
    "Ce modèle convient aux entreprises dont l'ERP est hébergé en interne ou dont les conditions tarifaires ne doivent pas sortir du système d'information : le code et les règles restent dans votre périmètre. Le développeur alterne les ateliers sur site avec l'administration des ventes et le travail à distance, et il documente chaque règle pour que votre équipe la maintienne après son départ.",
  ],
  comparatif: {
    kicker: "Prospection automatique ou agent sur vos prix",
    caption: "Agent de prospection du marché et agent commercial développé, point par point.",
    intro: "Les outils de prospection du marché trouvent des contacts, enchaînent des séquences d'e-mails et, pour certains, écrivent seuls aux prospects. Si vos pistes commerciales entrantes sont gérées dans Dynamics 365 Sales, l'agent de qualification de Microsoft couvre déjà la recherche et la première approche, et ce choix est raisonnable. Indépendants des éditeurs, nous n'avons aucun intérêt à vous détourner d'un outil qui suffit. Le sur mesure prend le relais quand le temps se perd dans vos devis, vos tarifs, vos stocks et vos cahiers des charges.",
    rows: [
      { aspect: "Point de départ", off: "Une base de contacts et des séquences d'e-mails", custom: "Vos demandes de prix, vos devis en cours et votre historique client" },
      { aspect: "Prix, stocks et délais", off: "Absents de l'outil, ou saisis à la main", custom: "Lus dans l'ERP et la base articles au moment de la cotation, avec vos règles de remise" },
      { aspect: "Envoi des messages", off: "Séquences programmées, envoyées au rythme choisi", custom: "Brouillon validé par le commercial ; envoi autonome sur décision, avec mention de l'IA" },
      { aspect: "Origine des contacts", off: "Bases fournies par l'éditeur ou enrichies en ligne", custom: "Vos clients et vos demandes entrantes ; toute source tierce vérifiée" },
      { aspect: "Écriture dans le CRM", off: "Champs et activités prévus par l'éditeur", custom: "Champs choisis avec la direction commerciale, chaque écriture journalisée" },
      { aspect: "Quand le choisir", off: "Volume de pistes entrantes à qualifier, CRM compatible", custom: "Cotation, relance de devis, réponse aux cahiers des charges sur vos données" },
    ],
  },
  faq: [
    { q: "Faut-il changer de CRM ou d'ERP pour installer l'agent ?", a: "Non. L'agent se branche sur les logiciels en place par leurs API, les interfaces qui permettent à deux logiciels d'échanger des données, avec un compte dédié et des droits limités. Nous vérifions au cadrage ce que chaque logiciel expose en lecture et en écriture. Un CRM mal tenu, avec des doublons ou des champs vides, se nettoie souvent en premier, parce que l'agent reproduit ce qu'il lit." },
    { q: "L'agent lit-il les e-mails de nos commerciaux ?", a: "Il lit les dossiers de messagerie que vous lui ouvrez, ceux des demandes de prix et des devis. Un tel accès voit passer des informations sur le vendeur lui-même, et l'article L. 1222-4 du Code du travail interdit de les collecter par un dispositif dont il n'a pas été informé avant. Présentez donc l'agent aux commerciaux avant la mise en service, avec la liste de ce qu'il lit et journalise, et associez votre CSE s'il existe. Ses journaux servent à corriger l'agent, et nous déconseillons de s'en servir pour évaluer les vendeurs." },
    { q: "Peut-on laisser l'agent appliquer des remises ?", a: "Il applique celles que votre ERP calcule déjà, comme une remise par quantité ou un tarif négocié par client. Toute remise au-delà de la grille reste une décision du commercial, et l'agent signale les lignes dont la marge passe sous le seuil fixé par la direction. Cette règle protège l'entreprise : un devis envoyé avec une remise excessive peut être accepté tel quel par le client." },
    { q: "L'agent peut-il aider à répondre aux appels d'offres ?", a: "Oui, à condition de l'organiser par famille de marchés. Pour un cabinet de conseil financier qui travaille avec le secteur public, nous avons co-construit avec ses consultants quatre assistants, un par famille d'appels d'offres, nourris des mémoires que les jurys avaient le mieux notés. Chacun commence par questionner le consultant sur le client et ses priorités. Un agent commercial généraliste ferait moins bien ce travail : chaque famille de marchés a sa logique, et la personnalisation départage souvent des offres proches." },
    { q: "Comment les commerciaux apprennent-ils à travailler avec l'agent ?", a: "Par des référents d'abord : quelques vendeurs volontaires testent l'agent, le corrigent et épaulent leurs collègues. Pour former les équipes, nos sessions intra coûtent 1 980 € HT la journée, et notre certification Qualiopi, obtenue au titre des actions de formation, permet de solliciter votre OPCO. Le développement de l'agent ne peut pas être financé par votre OPCO, contrairement à la formation." },
    { q: "Que se passe-t-il quand un client répond à un e-mail préparé par l'agent ?", a: "La réponse arrive dans la messagerie du commercial, comme n'importe quel e-mail. L'agent peut la résumer, mettre à jour l'affaire dans le CRM et proposer une suite, mais la négociation reste au vendeur. Un agent qui négocierait seul un prix ou un délai échangerait directement avec le client : il devrait s'annoncer comme une IA, et il engagerait l'entreprise sur des conditions que personne n'a validées." },
    { q: "Quels indicateurs suivre pour juger l'agent commercial ?", a: "Sur votre propre flux, avant puis après le pilote : délai entre la demande de prix et l'envoi du devis, part des devis relancés dans les délais fixés, temps passé sur une réponse à cahier des charges, part des cotations envoyées sans correction de prix. La conversion en euros revient à votre direction, qui connaît ses marges. Nous n'annonçons aucun pourcentage de gain avant d'avoir relevé votre point de départ." },
    { q: "Que devient l'agent si nous changeons d'ERP ou de CRM ?", a: "Le code isole chaque connecteur : un changement de logiciel remplace un connecteur, et les règles commerciales, les gabarits de devis et les tests restent valables. Vous recevez le code et sa documentation, et la passation se fait avec vos référents. Prévenez-nous dès que la migration se planifie, pour que le nouveau connecteur soit prêt avant la bascule." },
  ],
  sources: [
    { name: "CNIL : la prospection commerciale par courrier électronique, SMS/MMS et automate d'appel (10 juin 2026)", url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel" },
    { name: "CNIL : prospection commerciale par téléphone, quelles sont les règles (10 juin 2026)", url: "https://www.cnil.fr/fr/prospection-commerciale-par-telephone-hors-automate-dappel-quelles-sont-les-regles" },
    { name: "Légifrance : article L. 223-1 du Code de la consommation (version du 11 août 2026)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051830285/2026-08-11" },
    { name: "CNIL : aspiration de données, sanction de 240 000 euros (délibération du 5 décembre 2024)", url: "https://www.cnil.fr/fr/aspiration-de-donnees-sanction-de-240-000-euros-lencontre-de-la-societe-kaspr" },
    { name: "CNIL : référentiel relatif aux traitements mis en œuvre aux fins de gestion des activités commerciales", url: "https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf" },
    { name: "Légifrance : article 1114 du Code civil (l'offre)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040891" },
    { name: "Légifrance : article L. 1222-4 du Code du travail", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900861" },
    { name: "Commission européenne, lignes directrices du 20 juillet 2026 : informer le prospect qu'une IA lui écrit", url: "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems" },
    { name: "EUR-Lex, règlement (UE) 2024/1689, article 50 : la transparence d'un échange commercial avec une IA", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=fr" },
    { name: "Microsoft Learn : Sales Qualification Agent overview, Dynamics 365 Sales", url: "https://learn.microsoft.com/en-us/dynamics365/sales/sales-qualification-agent" },
  ],
}
