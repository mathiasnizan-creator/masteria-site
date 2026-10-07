// Contenu propre à /assistant-documentaire-ia. Lu par SolutionIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Anthropic (contextual retrieval, citations, hallucinations), OpenAI (retrieval), Mistral (mistral-embed), Microsoft Learn (Azure AI Search), OWASP GenAI (LLM08), étude de cas conseil-financier.
export default {
  slug: 'assistant-documentaire-ia',
  dateModified: '2026-10-07',
  pagePropre: true,
  solution: {
    metaTitle: "Assistant documentaire IA et GED intelligente | Masteria",
    metaDesc: "Assistant documentaire IA (RAG) : réponses sourcées et recherche en langage naturel dans vos documents. Code livré. 30 min de cadrage offertes.",
    directAnswer: "Un assistant documentaire IA répond aux questions de vos équipes à partir de vos propres documents, et chaque réponse cite la page et la phrase qui la justifient. Masteria le bâtit sur votre corpus, le mesure sur les questions de vos experts et vous remet l'index comme le code.",
    howWeBuild: [
      {
        title: "Choisir le corpus et ses propriétaires",
        desc: "Nous recensons les documents à couvrir, leurs formats, leurs versions et la personne qui répond de chaque source. Les documents périmés sortent du corpus avant l'indexation.",
      },
      {
        title: "Mesurer sur les questions de vos experts",
        desc: "Vos experts écrivent les questions qu'ils posent vraiment, avec la bonne réponse. Le premier sous-corpus indexé est jugé sur cette liste, réponse par réponse, citation comprise.",
      },
      {
        title: "Indexer tout le fonds, droits compris",
        desc: "La chaîne de découpage, d'enrichissement et d'indexation s'étend au corpus complet. La recherche applique les droits de l'utilisateur, et l'assistant s'installe là où vos équipes travaillent.",
      },
      {
        title: "Organiser la mise à jour",
        desc: "Une règle fixe qui ajoute, remplace ou retire un document, et à quel rythme l'index se reconstruit. Votre équipe reçoit le code, l'index et la liste des questions de référence.",
      },
    ],
  },
  hero: {
    chips: [
      "Réponses qui citent la page",
      "Corpus découpé et indexé chez vous",
      "Droits d'accès appliqués à la recherche",
      "Index et code livrés",
    ],
    lien: "Du corpus à l'assistant, étape par étape",
    enBref: [
      {
        label: "Budget",
        value: "Un corpus délimité à partir de 12 000 € environ ; une couverture multi-directions au-delà de 100 000 €",
      },
      {
        label: "Démarrage",
        value: "Un sous-corpus et un jeu de questions écrites par vos experts",
      },
      {
        label: "Ce que vous recevez",
        value: "Chaîne d'indexation, assistant, jeu de questions de référence et documentation",
      },
      {
        label: "Propriété",
        value: "Index, code et réglages appartiennent à votre entreprise",
      },
    ],
  },
  presentation: {
    kicker: "Définition",
    h2: "Ce qu'un assistant documentaire fait de votre fonds",
  },
  etapesBloc: {
    kicker: "Mise en service",
    h2: "Cinq étapes pour ouvrir un assistant documentaire à une équipe",
  },
  etapesNote: {
    texte: "Si plusieurs fonds documentaires se disputent la priorité, un",
    lien: {
      href: "/audit-ia",
      label: "audit IA les classe avant la première indexation",
    },
  },
  methodeBloc: {
    kicker: "Construction",
    h2: "Quatre paliers, du corpus à l'assistant en service",
  },
  technique: {
    kicker: "Recherche et citations",
    texte: "Chaque passage reçoit une courte phrase de contexte avant l'indexation, puis la recherche combine le sens et les mots exacts, ce qui retrouve aussi bien une notion qu'un numéro d'article. Les passages retenus sont filtrés selon les droits de l'utilisateur avant d'atteindre le modèle. Celui-ci (Claude, GPT ou Mistral, choisi sur le corpus) rédige une réponse qui renvoie à chaque extrait utilisé, et l'hébergement peut rester dans l'Union européenne.",
    h2: "La mécanique d'un assistant documentaire",
    lead: "La recherche fait la qualité : vos documents sont découpés, enrichis d'un court contexte, indexés par le sens et par les mots, puis retrouvés avec les droits de l'utilisateur. Le modèle de langage (Claude, GPT ou Mistral selon le corpus) rédige ensuite une réponse qui cite chaque passage utilisé.",
    chips: [
      "Découpage et contexte par passage",
      "Recherche hybride sens et mots",
      "Filtrage par droits d'accès",
      "Citations vérifiables",
      "Hébergement dans l'UE possible",
    ],
    note: {
      texte: "Pour nos pratiques de développement et de recette, rendez-vous sur la page de notre",
      lien: {
        href: "/agence-developpement-ia",
        label: "agence spécialisée dans le développement IA",
      },
    },
  },
  secteursBloc: {
    kicker: "Par fonds documentaire",
    h2: "Quatre fonds documentaires, quatre assistants",
    intro: "Selon le métier, le corpus et les questions changent ; la règle de citation, elle, reste la même.",
  },
  regieBloc: {
    kicker: "En régie",
    h2: "Un développeur qui indexe vos documents sans les sortir de chez vous",
    lien: "Comment se déroule un projet",
  },
  faqBloc: {
    kicker: "Questions",
    h2: "Assistant documentaire : les questions fréquentes",
    texte: "Votre fonds documentaire a un format ou un volume particulier ?",
    lien: "Décrivez-le-nous",
  },
  maillage: {
    kicker: "Solutions voisines",
    h2: "Ce qui se construit à côté d'un assistant documentaire",
  },
  cta: {
    titre: "Quel fonds documentaire rendre interrogeable en premier ?",
    texte: "Indiquez-nous le corpus visé, son volume approximatif et les personnes qui le consultent. Vous recevez une réponse sous 24 heures pour caler les 30 minutes de cadrage offertes, et l'index comme le code resteront chez vous.",
  },
  equipe: {
    titre: "Des intervenants qui partent de vos documents",
    texte: "Masteria est l'entreprise de Mathias Nizan, créée à Lyon en 2022, et Mathias suit chaque projet. Pour un assistant documentaire, il réunit des consultants qui inventorient le corpus et ses propriétaires, des développeurs qui construisent l'indexation et la recherche, et un formateur pour les utilisateurs, tous indépendants. Masteria ne revend aucune GED ni aucun moteur de recherche.",
  },
  intro: "Le juriste qui cherche une clause dans des centaines de contrats, l'ingénieur qualité qui vérifie la dernière version d'une procédure : l'assistant documentaire répond à leurs questions et cite la phrase et la page qui justifient chaque réponse. Il travaille sur un corpus délimité et applique les droits de chaque lecteur. Pour un assistant qui rédige dans Outlook ou agit dans votre CRM, voyez le copilote interne ; pour des pièces entrantes à saisir, l'automatisation documentaire ; pour loger la même brique dans une application existante, l'intégration LLM et RAG.",

  etapes: [
    {
      title: "Inventorier le corpus et ses propriétaires",
      desc: "Nous listons les sources (GED, SharePoint, partages réseau, exports métier), la version qui fait foi pour chaque document, son propriétaire et ses droits d'accès. Les documents périmés et les scans sans texte sont repérés dès cette étape.",
    },
    {
      title: "Écrire le jeu de questions de référence",
      desc: "Vos experts rédigent leurs questions telles qu'ils les posent, avec la réponse attendue, le document et la page qui la portent. Le jeu contient aussi des questions sans réponse dans le corpus, pour vérifier que l'assistant sait dire qu'il ne sait pas.",
    },
    {
      title: "Indexer un premier sous-corpus",
      desc: "Nous réglons le découpage, le préfixe de contexte, la recherche hybride et le reclassement sur un périmètre représentatif. Les tableaux, les scans et les références exactes passent en premier, parce que le découpage et la recherche par le sens les traitent mal.",
    },
    {
      title: "Mesurer les réponses, puis tester les droits",
      desc: "Le jeu de questions est rejoué : bonne réponse, bonne source, et « je ne sais pas » quand le corpus ne contient rien. Un profil privé d'accès à un dossier vérifie ensuite qu'aucun passage de ce dossier ne remonte dans ses réponses.",
    },
    {
      title: "Ouvrir à l'équipe avec une règle de mise à jour",
      desc: "L'assistant entre en service avec un bouton de signalement relié au propriétaire de chaque source. Une nouvelle version de document déclenche sa réindexation, et le jeu de questions est rejoué à chaque changement de modèle.",
    },
  ],

  cout: {
    kicker: "Budget de l'assistant",
    h2: "Le budget d'un assistant documentaire",
    note: {
      texte: "Les fourchettes des autres types de projets sont rassemblées dans notre page",
      lien: {
        href: "/prix-projet-ia",
        label: "combien coûte un projet IA",
      },
    },
    lead: "Le corpus fait le prix plus que le modèle. Un premier assistant sur un corpus délimité démarre autour de 12 000 € ; une couverture large, sur plusieurs directions et de gros volumes, monte au-delà de 100 000 € et jusqu'à quelques centaines de milliers d'euros.",
    paras: [
      "Nous chiffrons au forfait, sur devis, une fois le cadrage fait : la proposition écrite liste les sources couvertes, les volumes, les droits à reproduire et la taille du jeu de questions. Le fonctionnement se paie ensuite à la question et au stockage de l'index. Chez OpenAI, le stockage des index de recherche de fichiers est inclus jusqu'à 1 Go, puis facturé 0,10 dollar par gigaoctet et par jour. Ces coûts d'usage figurent dans la proposition, avec l'hypothèse de volume qui les fonde.",
    ],
    facteurs: [
      {
        title: "L'état des documents",
        desc: "Scans sans couche texte, tableaux, versions multiples et formats exotiques demandent une préparation avant l'indexation. Un corpus déjà trié et à jour allège ce poste.",
      },
      {
        title: "Les droits à reproduire",
        desc: "Un corpus ouvert à tous se filtre peu. Des droits par dossier, par service ou par client imposent de porter les groupes autorisés dans chaque passage, puis de tester chaque profil.",
      },
      {
        title: "Les sources à synchroniser",
        desc: "Chaque source (GED, SharePoint, partage réseau, base métier) demande son connecteur et sa règle de mise à jour. Le rythme de révision des documents fixe la fréquence de réindexation.",
      },
      {
        title: "Le niveau de preuve exigé",
        desc: "Une citation à la page, un jeu de questions large et une réévaluation à chaque changement de modèle prennent du temps d'expert. Les métiers réglementés y tiennent, et le devis le prévoit.",
      },
    ],
  },

  regie: [
    "Un assistant documentaire grandit par vagues : la direction juridique d'abord, puis le support technique, chacun avec ses sources, ses droits et ses questions de référence. Quand le rythme s'accélère, nous détachons en régie un développeur IA dans votre équipe, dans vos locaux ou à distance. Ses interlocuteurs quotidiens sont l'administrateur de votre GED et les propriétaires des documents, et l'index reste dans votre environnement.",
    "Ce développeur documente chaque connecteur et chaque règle de découpage au fil de l'eau. Au départ du développeur, votre équipe sait ajouter une source, rejouer le jeu de questions et lire les journaux de recherche, puisque la passation est comprise dans la mission.",
  ],

  comparatif: {
    kicker: "Recherche classique ou assistant",
    caption: "Moteur de recherche interne et assistant documentaire, point par point.",
    intro: "Le moteur de recherche interne renvoie des documents, l'assistant renvoie une réponse avec ses preuves. Le moteur classique suffit quand vos utilisateurs savent quel document ils cherchent et le lisent ensuite. L'assistant se justifie quand la réponse est dispersée entre plusieurs documents, ou quand chercher prend plus de temps que décider.",
    rows: [
      { aspect: "Forme de la question", off: "Des mots-clés, avec les termes exacts du document", custom: "Une question en français courant, avec les mots de l'utilisateur" },
      { aspect: "Ce qui revient", off: "Des liens vers des documents, à ouvrir un par un", custom: "Une réponse rédigée, la phrase citée et le numéro de page" },
      { aspect: "Références exactes (article, code produit)", off: "Son point fort : la correspondance exacte, souvent suffisante", custom: "Conservées par la recherche hybride, qui garde les mots-clés" },
      { aspect: "Versions contradictoires", off: "Les deux versions s'affichent, le lecteur tranche", custom: "Corpus trié en amont, réponse qui signale l'écart entre deux sources" },
      { aspect: "Droits d'accès", off: "Ceux de la GED, appliqués d'office", custom: "Reproduits dans l'index, puis testés profil par profil" },
      { aspect: "Entretien", off: "Compris dans la GED ou l'intranet", custom: "Réindexation, jeu de questions rejoué, coûts d'usage du modèle" },
    ],
  },

  guide: {
    kicker: "Corpus, index, citations",
    h2: "Un assistant documentaire se juge sur les questions de vos experts et sur la page qu'il cite",
    lead: "La qualité d'un assistant documentaire se joue avant le modèle de langage, dans la façon dont vos documents sont découpés, indexés et retrouvés. Anthropic l'a mesuré en septembre 2024 : en ajoutant à chaque passage une courte phrase qui situe son contexte, puis en combinant la recherche par le sens, la recherche par mots-clés et un reclassement, le taux d'échec de récupération baisse de 67 % sur ses jeux de test. Ce taux compte les questions dont le bon passage manque parmi les vingt premiers résultats. Ce guide décrit ces étapes, leur coût et la façon de les vérifier avant d'ouvrir l'outil à une équipe.",
    sections: [
      {
        h3: "Le tri du corpus décide de la qualité des réponses",
        paras: [
          "Un partage réseau contient rarement une seule version d'une procédure. La version de 2021, sa révision de 2023 et le brouillon jamais validé y cohabitent, et un index les lit toutes avec le même crédit. L'assistant mélange alors deux règles et cite les deux avec assurance. Le premier chantier dresse donc l'inventaire : les sources, la version qui fait foi, son propriétaire, son rythme de révision. Les documents périmés sortent de l'index, ou y restent avec une étiquette d'archive que la réponse affiche.",
          "Ce tri révèle souvent un corpus plus petit que prévu. Anthropic rappelle qu'une base de moins de 200 000 jetons, soit environ 500 pages, peut être donnée en entier au modèle à chaque question, sans chaîne d'indexation. Un jeton (token) est le fragment de mot que le modèle compte et facture. Sous ce seuil, un projet partagé dans un assistant du marché suffit souvent, et le cadrage vous le dira. Au-delà, ou quand les droits diffèrent d'un lecteur à l'autre, l'index devient nécessaire.",
        ],
      },
      {
        h3: "L'indexation découpe vos documents en passages qui doivent rester compréhensibles seuls",
        paras: [
          "Le principe porte un nom, la génération augmentée par récupération (RAG) : le système retrouve les passages utiles, puis le modèle rédige sa réponse à partir d'eux. Chaque document est d'abord découpé en blocs ; l'outil de recherche de fichiers d'OpenAI coupe par défaut des blocs de 800 jetons qui se chevauchent sur 400. Chaque bloc reçoit un plongement vectoriel, une suite de nombres qui résume son sens. Le modèle mistral-embed de Mistral en produit 1 024 par passage, et deux textes de sens voisin obtiennent des vecteurs proches.",
          "Le découpage casse le contexte. Anthropic prend l'exemple d'un passage qui annonce une croissance de 3 % du chiffre d'affaires sur le trimestre précédent, sans dire de quelle entreprise ni de quel trimestre il s'agit. Isolé, ce bloc ne répond plus à aucune question précise. La parade consiste à préfixer chaque bloc d'une courte phrase de contexte, de 50 à 100 jetons, avant de l'indexer. Nos préfixes reprennent le titre du document, sa version, la section et la date, pour que la citation finale reste vérifiable.",
        ],
      },
      {
        h3: "La recherche par mots-clés retrouve les références que la recherche par le sens laisse passer",
        paras: [
          "La recherche par le sens rapproche « délai de préavis » et « durée de notification ». Elle peine sur l'exact : un numéro d'article, une référence produit, un code d'erreur, un nom propre. La documentation d'Azure AI Search, le moteur de recherche de Microsoft, le reconnaît : les codes produits, le jargon spécialisé, les dates et les noms de personnes répondent mieux à la recherche par mots-clés, qui trouve les correspondances exactes. Un assistant documentaire sérieux combine les deux.",
          "La recherche hybride lance les deux requêtes en parallèle, puis fusionne les deux listes par une méthode de classement (Reciprocal Rank Fusion) qui favorise les passages bien placés dans chacune. Un modèle de reclassement relit ensuite les meilleurs candidats et les ordonne selon leur pertinence pour la question posée. Sur ses jeux de test, Anthropic mesure une baisse des échecs de récupération de 35 % avec le seul préfixe de contexte, de 49 % en y ajoutant la recherche par mots-clés et de 67 % avec le reclassement.",
        ],
      },
      {
        h3: "Une réponse cite la phrase et la page, ou elle dit qu'elle ne sait pas",
        paras: [
          "La citation transforme une réponse plausible en réponse vérifiable. Avec la fonction de citations de l'API de Claude, l'interface qui permet à un logiciel d'appeler le modèle, chaque affirmation renvoie au passage exact du document fourni, et à son numéro de page pour un PDF. Anthropic précise que ces citations pointent toujours vers un passage valide, puisque l'API extrait elle-même le texte cité. Une limite en découle : un PDF scanné sans couche texte ne peut pas être cité. Vos archives scannées passent d'abord par une reconnaissance de caractères.",
          "Le second réglage paraît modeste : autoriser l'assistant à répondre qu'il ne sait pas. La documentation d'Anthropic place cette permission parmi les premières parades contre les hallucinations, ces réponses fausses formulées avec aplomb. Nous l'écrivons dans les instructions, avec une phrase type et le nom du propriétaire de la source à contacter. Sur les documents longs, au-delà de 20 000 jetons, l'assistant extrait d'abord les citations utiles mot pour mot, puis répond à partir d'elles seules.",
        ],
      },
      {
        h3: "Les droits d'accès se posent dans l'index, passage par passage",
        paras: [
          "Dans votre GED (gestion électronique des documents), des droits s'appliquent : un dossier RH reste fermé aux commerciaux. L'index d'un assistant n'en hérite pas de lui-même. Avec Azure AI Search, le modèle de filtre de sécurité décrit par Microsoft range dans chaque passage les identifiants des groupes autorisés, puis filtre chaque requête selon le groupe de l'utilisateur. La documentation précise que cet identifiant reste une simple chaîne de caractères, sans authentification. Si l'application oublie le filtre, tout devient visible.",
          "Ces failles figurent dans le classement 2025 de l'OWASP, fondation de référence en sécurité des applications, parmi les dix risques majeurs des applications à base de grands modèles de langage (LLM08). L'OWASP recommande des bases vectorielles qui respectent les permissions, la validation de chaque document avant son indexation et un journal non modifiable des recherches. Son scénario d'école parle à tout service RH : un CV porte, en texte blanc sur fond blanc, l'instruction de recommander son auteur. Une indexation qui ne détecte pas ce texte caché transmet la consigne au modèle.",
        ],
      },
    ],
    table: {
      caption: "Chaque famille de documents demande sa préparation avant l'indexation",
      headers: ["Document", "Ce qui gêne la recherche", "Préparation retenue"],
      rows: [
        ["Procédure qualité révisée plusieurs fois", "Les versions successives se contredisent", "Seule la version en vigueur est indexée, les autres partent en archive"],
        ["PDF scanné", "Aucune couche texte : ni recherche ni citation possible", "Reconnaissance de caractères, puis contrôle d'un échantillon de pages"],
        ["Contrat ou marché public", "Les renvois d'article et les annexes", "Découpage par article, avec titre et numéro répétés dans chaque passage"],
        ["Grille tarifaire sous Excel", "Un tableau découpé perd ses en-têtes", "Une ligne par passage, en-têtes de colonnes répétés"],
        ["Compte rendu de réunion", "Données personnelles et décisions provisoires", "Tri avec le propriétaire, pseudonymisation quand elle s'impose"],
        ["Fiche produit", "Les codes exacts échappent à la recherche par le sens", "Recherche par mots-clés activée sur les champs de référence"],
      ],
    },
    cas: {
      h3: "Retour de mission : une base de connaissance rangée par famille de marchés publics",
      contexte: "Depuis plus de quarante ans, un cabinet indépendant de conseil financier travaille pour des collectivités, des sociétés d'économie mixte et des syndicats mixtes. Une vingtaine de consultants, répartis entre Paris et Lyon, y rédigent des mémoires techniques notés par des jurys sur la compréhension du besoin, la méthode et le ton. Quand les offres se valent sur le fond, l'écriture départage les candidats. Le cabinet cherchait à réutiliser ses meilleures formulations et à gagner du temps, sans laisser sortir les données des marchés.",
      etapes: [
        "Le cadrage observe comment les mémoires s'écrivent aujourd'hui, puis range les appels d'offres du cabinet par pôle d'expertise dans un cahier de cadrage.",
        "Deux pôles se partagent quatre assistants, chacun dédié à une famille de marchés : les énergies renouvelables et leur financement, la mobilité et les infrastructures, l'eau et les déchets en délégation de service public, l'aménagement et l'immobilier public.",
        "La base de connaissance commence par une fiche qui présente le cabinet. Viennent ensuite, par ordre de priorité, les modèles de mémoires, les notes d'analyse des dossiers de consultation, les méthodes d'assistance à la maîtrise d'ouvrage, les mémoires que les jurys ont le mieux notés et les références détaillées.",
        "En quatre ateliers de deux heures, les consultants testent les instructions sur des dossiers récents. Chaque assistant leur pose ses questions avant d'écrire : le cabinet connaît-il déjà ce client, quelles priorités, quelles références, quelle équipe.",
        "Un guide d'utilisation désigne qui tient chaque document à jour et fixe les règles d'usage et de sécurité.",
      ],
      resultat: "Chaque pôle retrouve ses formulations gagnantes dans ses propres assistants, et les familles de marchés restent séparées. Le consultant garde la main sur l'analyse du dossier, le choix de la réponse et le lien avec le maître d'ouvrage. Le cabinet travaille dans un environnement d'entreprise qui exclut ses données de l'entraînement des modèles. Nous en tirons une règle pour tout assistant documentaire : un corpus par famille de questions, chacun avec son propriétaire.",
      lien: { href: "/etudes-de-cas-ia#conseil-financier", label: "La base de connaissance du cabinet de conseil financier" },
    },
    pieges: [
      {
        titre: "Indexer le partage réseau tel quel",
        texte: "Les doublons et les versions périmées entrent dans l'index avec le même poids que le document en vigueur, et l'assistant cite une règle abandonnée. L'inventaire des sources et de leur version de référence précède toute indexation.",
      },
      {
        titre: "Construire l'index avec un compte qui voit tout",
        texte: "Un compte technique qui lit tous les dossiers produit un index sans droits. Chaque passage porte les groupes autorisés de son document d'origine, et chaque recherche filtre selon l'utilisateur connecté.",
      },
      {
        titre: "Juger l'outil sur une démonstration",
        texte: "Des questions choisies par l'équipe projet rassurent à peu de frais. Le jeu de référence s'écrit avec les experts, sur leurs questions de tous les jours, avec la réponse attendue et sa source, puis se rejoue à chaque réglage.",
      },
      {
        titre: "Oublier les archives scannées",
        texte: "Un PDF scanné sans couche texte échappe à la recherche et ne peut pas être cité. La reconnaissance de caractères se planifie au cadrage, avec un contrôle sur un échantillon de pages.",
      },
      {
        titre: "Laisser une source sans propriétaire",
        texte: "Une procédure révisée en mars et réindexée en septembre produit six mois de réponses fausses, citées avec leur source. Chaque source a un propriétaire nommé, et chaque nouvelle version déclenche sa réindexation.",
      },
    ],
  },

  faq: [
    {
      q: "Faut-il un index si notre documentation tient en quelques centaines de pages ?",
      a: "Un index ne s'impose pas toujours. Anthropic indique qu'une base de moins de 200 000 jetons, environ 500 pages, peut être fournie en entier au modèle à chaque question. Un projet partagé dans un assistant du marché, avec vos documents et des instructions écrites, suffit alors. L'index devient utile au-delà de ce volume, quand les documents changent souvent ou quand chaque lecteur a des droits différents. Nous le vérifions avec vous pendant les 30 minutes de cadrage offertes.",
    },
    {
      q: "Comment vérifier la qualité des réponses avant d'ouvrir l'outil à l'équipe ?",
      a: "Vos experts écrivent un jeu de questions de tous les jours avec, pour chacune, la réponse attendue, le document et la page qui la portent. Nous y ajoutons des questions dont la réponse ne figure pas dans le corpus : l'assistant doit alors le dire. Le jeu est rejoué à chaque réglage, et le résultat se lit en trois mesures : la part de bonnes réponses, la part de bonnes sources, la part de « je ne sais pas » justifiés. La décision d'ouvrir l'outil se prend sur ces mesures.",
    },
    {
      q: "L'assistant peut-il citer la page exacte d'un PDF ?",
      a: "Oui, quand le PDF contient du texte. Avec la fonction de citations de l'API de Claude, la réponse renvoie au passage cité et au numéro de page du PDF fourni. Un PDF scanné sans couche texte ne peut pas être cité tant qu'il n'est pas passé par une reconnaissance de caractères. Pour une archive de scans, cette étape se chiffre au cadrage et se contrôle sur un échantillon de pages.",
    },
    {
      q: "Que répond l'assistant quand deux documents se contredisent ?",
      a: "Il cite les deux et signale l'écart, à condition que ses instructions le prévoient. La meilleure réponse se prépare en amont : seule la version en vigueur est indexée, les versions remplacées partent en archive, et chaque passage porte la date et la version de son document. Le signalement d'un utilisateur arrive chez le propriétaire de la source, qui tranche et corrige le document.",
    },
    {
      q: "Un utilisateur peut-il obtenir un passage d'un dossier auquel il n'a pas accès ?",
      a: "Non, si l'index porte les droits. Chaque passage garde la liste des groupes autorisés de son document, et chaque recherche filtre selon l'identité de l'utilisateur connecté. Microsoft rappelle que l'autorisation passe par ce filtre, que le code ajoute à chaque requête : un oubli suffit donc à tout ouvrir. Nous testons donc chaque profil avant la mise en service, et les recherches sont journalisées.",
    },
    {
      q: "Faut-il réindexer à chaque nouvelle version d'un document ?",
      a: "Oui, et cette règle s'écrit avant la mise en service. Un connecteur surveille les sources et réindexe un document dès qu'il change ; pour une source sans connecteur, le propriétaire dépose la nouvelle version dans un dossier suivi. Une procédure modifiée et absente de l'index produit des réponses fausses, citées avec leur source. Le coût de réindexation figure dans le budget de fonctionnement.",
    },
    {
      q: "Quel modèle choisir pour un assistant documentaire en français ?",
      a: "Deux modèles travaillent ensemble : le modèle de plongements, qui convertit les passages en vecteurs, et le modèle de langage, qui rédige la réponse. Mistral propose par exemple mistral-embed, qui produit des vecteurs de 1 024 dimensions. Nous comparons deux ou trois combinaisons sur votre jeu de questions, en français et sur vos documents, puis nous retenons la meilleure au regard du coût et de vos contraintes d'hébergement.",
    },
    {
      q: "Que coûte l'assistant une fois en service ?",
      a: "Trois postes s'ajoutent au forfait de construction : les jetons consommés par chaque question et chaque réponse, le stockage de l'index et la réindexation des documents qui changent. Le premier dépend du nombre de questions par jour et de la longueur des passages envoyés au modèle. Nous chiffrons ces postes dans la proposition à partir d'une hypothèse de volume écrite, puis nous les suivons avec vous le premier mois.",
    },
  ],

  sources: [
    { name: "Anthropic : Introducing Contextual Retrieval (19 septembre 2024)", url: "https://www.anthropic.com/news/contextual-retrieval" },
    { name: "Claude Platform : Citations", url: "https://platform.claude.com/docs/en/build-with-claude/citations" },
    { name: "Claude Platform : Reduce hallucinations", url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations" },
    { name: "OpenAI API : Retrieval (découpage par défaut, stockage des index)", url: "https://developers.openai.com/api/docs/guides/retrieval" },
    { name: "Mistral AI : Text embeddings (mistral-embed)", url: "https://docs.mistral.ai/studio/knowledge-rag/embeddings/text_embeddings" },
    { name: "Microsoft Learn : Hybrid search overview, Azure AI Search", url: "https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview" },
    { name: "Microsoft Learn : Security filter pattern, Azure AI Search", url: "https://learn.microsoft.com/en-us/azure/search/search-security-trimming-for-azure-search" },
    { name: "OWASP GenAI Security Project : LLM08:2025 Vector and Embedding Weaknesses", url: "https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/" },
  ],
}
