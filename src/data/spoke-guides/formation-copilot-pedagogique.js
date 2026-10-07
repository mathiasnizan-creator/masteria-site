// Contenu propre à /formation-copilot-pedagogique (guide terrain, page propre). Rendu par SpokePage.
// Faits Microsoft : fiche du 7 octobre 2026 (Learn, notes de version du 06/10/2026, pages tarifs France).
// AI Act : annexe III (éducation et formation professionnelle), report au 02/12/2027 par le règlement (UE) 2026/1744.
// Réécrit le 07/10/2026.
export default {
  slug: 'formation-copilot-pedagogique',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation Copilot pédagogique : concevoir, évaluer et animer avec Microsoft Copilot',
  metaTitle: 'Formation Copilot Pédagogique · Microsoft 365 | Masteria',
  metaDesc: "Formation Copilot pour concepteurs et formateurs : modules tirés d'un document source, quiz dans Forms, supports PowerPoint, suivi Excel, tuteur. 2 jours.",
  keywords: "formation copilot pédagogique, copilot ingénierie pédagogique, microsoft copilot formateur, copilot forms quiz, copilot powerpoint support de formation, tuteur ia apprenants, formation copilot qualiopi opco",
  prerequis: "Concevoir ou animer des formations ; un module existant et son document source sont à apporter",
  resume: "Ce programme s'adresse aux responsables formation, ingénieurs pédagogiques, formateurs internes et équipes d'organismes de formation qui conçoivent dans Word, PowerPoint et Forms. On y apprend à se servir de Microsoft Copilot (anciennement Microsoft 365 Copilot) pour bâtir un module sur la base d'un texte de référence, à rédiger des questions d'évaluation alignées sur les objectifs, à produire des supports au modèle de l'organisme et à suivre les apprenants, l'équipe gardant la maîtrise du contenu enseigné. Le parcours compte 14 heures, pour un groupe de concepteurs limité à douze ou un formateur seul, chaque jour revenant à 1 980 € HT ; la participation de l'OPCO reste à sa décision.",
  enBref: [
    { label: 'Formation', value: "Copilot dans la chaîne de conception : du document source au module, aux questions d'évaluation et aux supports" },
    { label: 'Durée', value: "Deux journées de sept heures, avec un module de votre catalogue retravaillé de bout en bout" },
    { label: 'Formats', value: "Équipe pédagogique en intra jusqu'à douze personnes, ou parcours individuel pour un formateur ; dans vos locaux ou en visioconférence" },
    { label: 'Tarif', value: "1 980 € HT par jour de session ; les deux jours réunis à 3 960 € HT" },
    { label: 'Financement', value: "Masteria détient Qualiopi pour la formation : votre OPCO peut donc examiner un dossier, selon ses propres critères" },
    { label: 'Prérequis', value: "Concevoir ou animer des sessions ; licences Copilot de l'équipe relevées avec vous au cadrage" },
  ],
  intro: "Concevoir une formation consiste à transformer un savoir en parcours : objectifs, séquences, exercices, évaluation, supports. Copilot intervient à chaque étape, dans les outils où l'équipe pédagogique travaille déjà. Il tire un plan de module d'un mode opératoire ou d'un référentiel, propose des questions dans Forms, monte des slides depuis un texte Word et aide à suivre les résultats dans Excel. Il se trompe aussi : une question ambiguë, un contenu repris d'une source périmée, une progression qui saute une étape. La formation confie la production à Copilot et laisse à l'équipe la responsabilité de ce qui est enseigné et de la façon dont on l'évalue.",
  guide: {
    kicker: 'Guide terrain pédagogie',
    h2: "Copilot produit les supports et les questions ; l'équipe pédagogique répond de ce qui est enseigné",
    lead: "Un module de formation repose sur un document source : une procédure, une norme, un référentiel de compétences, un guide utilisateur. Copilot sait en tirer un plan, des exercices, des questions et des slides, pourvu qu'on lui indique la bonne version et qu'on lui fixe des objectifs évaluables. Ce guide décrit la chaîne de conception avec Copilot, les contrôles à chaque étape, et la frontière que l'AI Act trace autour de l'évaluation des apprenants.",
    sections: [
      {
        h3: "Le module part des objectifs, et chaque objectif appelle une question",
        paras: [
          "Dans Word, Copilot rédige un plan de module à partir des fichiers que vous désignez avec la barre oblique : la procédure à enseigner, le référentiel de compétences, la version précédente du module. La demande gagne à commencer par les objectifs, formulés avec un verbe observable (identifier, calculer, rédiger), la durée et le public. Copilot propose ensuite séquences, exemples et exercices ; les titulaires d'une licence peuvent lui faire réorganiser le document ouvert, raccourcir une séquence ou reformuler une consigne.",
          "Masteria s'impose la même discipline dans ses propres formations : chaque objectif annoncé a au moins une question qui le mesure. Demandez à Copilot une table qui relie chaque objectif à ses questions ; un objectif orphelin révèle une question manquante, ou un objectif à retirer.",
        ],
      },
      {
        h3: "Les questions d'évaluation naissent dans Forms, puis se relisent une à une",
        paras: [
          "Copilot dans Forms propose des questions à partir d'une consigne qui décrit le sujet et le public. Il produit vite un premier jeu de questions à choix multiples ; la qualité tient à la relecture. Une bonne question n'a qu'une réponse défendable, des distracteurs plausibles et un lien explicite avec un objectif. Les distracteurs sont souvent le point faible : trop faciles à écarter, ou défendables eux aussi.",
          "Les résultats se lisent ensuite dans Excel. En mode Conversation, Copilot repère les questions que la majorité des apprenants manque, signe d'une question mal posée ou d'une séquence à reprendre. En mode Plan, il prépare sur une copie un tableau de suivi par session : présence, résultats, objectifs atteints.",
        ],
      },
      {
        h3: "Le plan Word devient un support aux couleurs de l'organisme",
        paras: [
          "Copilot dans PowerPoint transforme le plan rédigé dans Word en support, puis habille tout le fichier aux couleurs de l'organisme. Microsoft y propose depuis le 6 octobre 2026, sur Windows, des compétences sur mesure qui fixent une fois pour toutes les règles de vos supports : une idée par slide, une consigne d'exercice encadrée, une slide de synthèse par séquence. Le support se relit contre le module, car Copilot condense et peut sauter une étape de la démonstration.",
          "Pour un catalogue de plusieurs dizaines de modules, une compétence au format SKILL.md sert de module en module, et d'autres assistants savent la lire ; Cowork peut en recevoir jusqu'à cinquante rédigées par l'équipe, en plus de celles qu'il fournit.",
        ],
      },
      {
        h3: "Les classes virtuelles et le suivi des apprenants passent par Teams",
        paras: [
          "Dans une classe virtuelle Teams enregistrée et transcrite, Copilot produit après la séance un résumé, la liste des questions posées par les apprenants et les points restés sans réponse. Le formateur s'en sert pour envoyer une synthèse et compléter le module. L'enregistrement s'annonce en début de séance, et un apprenant qui refuse d'être enregistré doit pouvoir suivre autrement.",
          "Pour chaque formation, un bloc-notes Copilot regroupe les ressources : document source, plan, supports, résultats des évaluations, retours des participants. Le responsable pédagogique y conduit la révision annuelle du module, sur ce seul périmètre, sans que d'autres dossiers viennent s'en mêler.",
        ],
      },
      {
        h3: "Un tuteur pour les apprenants se construit, puis se surveille",
        paras: [
          "Sans programmation, Agent Builder fabrique un tuteur que les apprenants interrogent sur les documents du cours. Deux points se décident avant de l'ouvrir. Les apprenants sans licence peuvent utiliser un agent appuyé sur vos contenus, facturé à l'usage, ou un agent limité à des instructions et à des sites publics, compris dans Copilot Chat. L'agent s'éprouve ensuite sur des questions hors programme : il doit avouer qu'il ne sait pas et renvoyer vers le formateur.",
          "Dans l'AI Act, la liste des systèmes sensibles (annexe III) comprend ceux qui notent les acquis, décident d'une admission ou orientent un parcours de formation ; la révision de 2026 a repoussé leurs obligations au 2 décembre 2027. Un tuteur qui explique un cours reste hors de ce champ, un agent qui note les apprenants y entre. La formation garde le tuteur du côté de l'explication.",
        ],
      },
      {
        h3: "La révision du catalogue devient une routine",
        paras: [
          "Un catalogue vieillit module par module : une procédure change, un logiciel évolue, une question d'évaluation se révèle ambiguë. Une invite planifiée, réservée à la licence, peut rappeler chaque mois les modules à revoir en croisant votre tableau de suivi du catalogue. Cowork va plus loin : à partir des résultats d'évaluation exportés, il prépare un tableau des questions les plus manquées et un brouillon de note de révision, puis attend votre accord avant de le diffuser à l'équipe. Ce que Cowork consomme se paie en plus de l'abonnement ; on le réserve aux routines qui ont un lecteur désigné.",
        ],
      },
      {
        h3: "Un module traduit se relit par un formateur du pays",
        paras: [
          "Copilot traduit un plan, un support ou un questionnaire dans les grandes langues européennes, et respecte un glossaire placé dans la demande. La traduction d'une formation touche aussi aux exemples, aux unités et aux références réglementaires, qui changent d'un pays à l'autre. Masteria anime elle-même des sessions en anglais pour des groupes internationaux, et la règle qu'elle s'applique vaut pour vos modules : un formateur du pays relit le support avant la première session.",
        ],
      },
    ],
    table: {
      caption: "La chaîne de conception d'une formation avec Copilot (octobre 2026)",
      headers: ['Étape', 'Outil', "Contrôle de l'équipe"],
      rows: [
        ['Plan du module', 'Word, à partir de la source et du référentiel cités', 'Objectifs formulés avec un verbe observable'],
        ['Exercices et études de cas', 'Word, à partir des situations du métier', "Réalisme vérifié par un expert du domaine"],
        ["Questions d'évaluation", 'Forms, à partir des objectifs', 'Une seule réponse défendable, des distracteurs plausibles'],
        ['Support projeté', "PowerPoint, plan Word converti puis habillé aux couleurs de l'organisme", 'Aucune étape de démonstration sautée'],
        ["Synthèse d'une classe virtuelle", 'Teams, résumé de la séance transcrite', 'Questions sans réponse reprises dans le module'],
        ['Analyse des résultats', "Excel en lecture seule sur les réponses exportées de Forms", 'Questions manquées par la majorité relues'],
        ['Tuteur des apprenants', 'Agent Builder sur les documents du cours', "Aveu d'ignorance hors programme"],
        ["Version anglaise d'un module", 'Word et PowerPoint, glossaire placé dans la demande', 'Relecture par un formateur du pays'],
        ['Révision mensuelle du catalogue', 'Invite planifiée ou tâche Cowork, avec la licence', 'Liste des modules à revoir validée par le responsable'],
      ],
    },
    cas: {
      h3: "Cas pratique : transformer une procédure de trente pages en module de trois heures",
      contexte: "Prenons la responsable formation d'un réseau de concessions de matériel agricole. Le constructeur vient de publier une nouvelle procédure de mise en service d'un tracteur, trente pages qui remplacent l'ancienne version ; il faut former quarante techniciens en trois heures, en présentiel, avec une évaluation à la fin. Cette situation sert d'illustration ; en session, chacun part d'un module de son catalogue.",
      etapes: [
        "Rangez l'ancienne et la nouvelle procédure, ainsi que votre référentiel de compétences, dans un dossier SharePoint, puis ouvrez un document Word vierge.",
        "Copiez la consigne suivante, puis désignez les deux procédures en tapant la barre oblique.",
        "Relisez le plan avec un technicien expérimenté : il repère l'étape que Copilot a fusionnée avec une autre.",
        "Dans Forms, demandez dix questions à partir des objectifs validés, puis réécrivez les distracteurs trop évidents.",
        "Dans PowerPoint, créez le support depuis le plan Word et appliquez le modèle du réseau.",
      ],
      prompt: "Tu travailles pour la responsable formation d'un réseau de concessions de matériel agricole. Les fichiers joints sont l'ancienne et la nouvelle procédure de mise en service d'un tracteur.\n\nConçois un module de trois heures en présentiel pour des techniciens qui appliquent l'ancienne procédure depuis des années :\n1. Quatre à six objectifs, chacun commençant par un verbe observable (identifier, régler, vérifier, consigner).\n2. Un déroulé en séquences de 20 à 40 minutes, avec pour chacune son objectif, l'apport, l'exercice et le matériel nécessaire.\n3. Un tableau des différences entre les deux procédures, avec le numéro de page de chaque changement dans la nouvelle.\n4. Pour chaque objectif, deux questions d'évaluation à choix multiples, avec la bonne réponse et une phrase d'explication.\n\nN'utilise que les deux procédures jointes. Si une étape te paraît ambiguë, signale-la au lieu de l'interpréter.",
      resultat: "Vous obtenez un déroulé minuté, un tableau des changements avec leurs pages, et une dizaine de questions reliées à leurs objectifs. Le tableau des différences est la partie la plus utile et la plus fragile : une valeur modifiée dans un tableau technique peut lui échapper. Le technicien référent le vérifie page à page avant la première session, et les questions passent par un essai sur deux collègues.",
    },
    pieges: [
      {
        titre: 'Une procédure périmée prise pour la bonne',
        texte: "Si plusieurs versions coexistent, Copilot peut s'appuyer sur l'ancienne. Citez nommément le fichier en vigueur, et sortez les autres de la bibliothèque.",
      },
      {
        titre: 'Des distracteurs qui trahissent la réponse',
        texte: "Copilot produit souvent un seul choix crédible parmi quatre. Réécrivez les distracteurs à partir des erreurs que commettent vos apprenants.",
      },
      {
        titre: 'Un objectif impossible à évaluer',
        texte: "« Comprendre » ou « connaître » ne se mesurent pas. Demandez à Copilot de reformuler chaque objectif avec un verbe observable.",
      },
      {
        titre: "Des résultats d'apprenants nominatifs dans une demande",
        texte: "Pour analyser une évaluation, retirez les noms ou remplacez-les par un code. Les résultats individuels sont des données personnelles.",
      },
      {
        titre: 'Un tuteur qui invente une réponse',
        texte: "Testez l'agent avec des questions hors programme avant de l'ouvrir. Ses instructions lui demandent de renvoyer vers le formateur quand le cours ne répond pas.",
      },
      {
        titre: 'Un schéma protégé glissé dans un support',
        texte: "Copilot reprend parfois une illustration d'un document joint. Un support remis à des clients reste soumis au droit d'auteur : vérifiez l'origine de chaque visuel avant diffusion.",
      },
    ],
  },
  audience: [
    {
      title: 'Responsables formation et responsables pédagogiques',
      desc: "Vous pilotez un catalogue, une équipe de concepteurs et la qualité des parcours. Vous apprenez à organiser la conception avec Copilot, de la révision d'un module à l'analyse des évaluations, et à poser les consignes communes des concepteurs.",
    },
    {
      title: 'Ingénieurs pédagogiques et concepteurs',
      desc: "Vous transformez des documents techniques en modules. Vous apprenez à faire tirer un plan d'une source, à relier objectifs et questions, et à produire les supports au modèle de l'organisme.",
    },
    {
      title: 'Formateurs internes et occasionnels',
      desc: "Vous animez en plus de votre métier et préparez vos sessions en peu de temps. Vous apprenez à construire un support depuis un document, à préparer des questions de vérification et à résumer une classe virtuelle.",
    },
    {
      title: 'Organismes de formation et académies clients',
      desc: "Vous formez des clients, des partenaires ou des apprenants externes. Vous apprenez à construire un tuteur sur vos contenus, à estimer ce qu'il coûte et à rester du bon côté de l'AI Act sur l'évaluation.",
    },
  ],
  useCases: [
    { icon: '🧩', title: "Modules tirés d'un document source", desc: "Plan, séquences et exercices construits sur la procédure ou le référentiel désigné." },
    { icon: '✅', title: 'Questions reliées aux objectifs', desc: "Forms propose les questions ; l'équipe relie chacune à un objectif et reprend les distracteurs." },
    { icon: '🖥️', title: "Supports au modèle de l'organisme", desc: "Le plan Word devient un support projetable, habillé d'un coup aux couleurs de la maison." },
    { icon: '🎥', title: 'Classes virtuelles résumées', desc: "Questions des apprenants et points sans réponse tirés de la transcription Teams." },
    { icon: '📈', title: 'Résultats analysés dans Excel', desc: "Les questions que la majorité manque repérées sans modifier l'export." },
    { icon: '🎓', title: 'Tuteur sur vos contenus', desc: "Un agent qui explique le cours et renvoie au formateur quand il ne sait pas." },
  ],
  modules: [
    {
      day: 1,
      title: 'Module 1 · Ce que Copilot apporte à la conception',
      duration: '1h30',
      description: "Situer Copilot à chaque étape d'un parcours, selon la licence de chaque concepteur.",
      items: [
        "Deux niveaux d'accès : Copilot Chat travaille sur les documents qu'on lui donne, la licence Microsoft Copilot fouille tout le fonds documentaire",
        "Word, PowerPoint, Forms, Excel, Teams : une fonction utile par étape de conception",
        "Droits d'auteur : les contenus de tiers que l'on dépose ou non dans une demande",
        "Données des apprenants : résultats, situations de handicap, informations personnelles exclues",
      ],
      exercise: "Vous cartographiez la conception d'un module de votre catalogue et marquez les étapes où Copilot intervient.",
    },
    {
      day: 1,
      title: 'Module 2 · Du texte de référence au déroulé de module',
      duration: '2h',
      description: "Passer d'un texte technique à un déroulé que l'on peut animer.",
      items: [
        "Désigner la source à jour et le référentiel avec la barre oblique",
        "Objectifs formulés avec un verbe observable, durée, public",
        "Séquences, apports, exercices : demander, puis relire avec un expert du métier",
        "Modifier avec Copilot pour réorganiser le module ouvert",
      ],
      exercise: "Vous tirez d'un document de votre organisation le plan d'un module de trois heures, puis le faites relire par un participant d'un autre service.",
    },
    {
      day: 1,
      title: "Module 3 · Concevoir l'évaluation dans Forms",
      duration: '2h',
      description: "Construire un questionnaire qui mesure les objectifs annoncés, et seulement eux.",
      items: [
        "Une table objectifs et questions : aucun objectif sans question",
        "Questions proposées par Forms, distracteurs réécrits à partir des erreurs fréquentes",
        "Questions ouvertes et mises en situation pour les objectifs pratiques",
        "Essai du questionnaire sur deux collègues avant diffusion",
      ],
      exercise: "Vous construisez l'évaluation du module conçu au module 2 et la faites passer à deux participants.",
    },
    {
      day: 1,
      title: 'Module 4 · Produire les supports dans PowerPoint',
      duration: '1h30',
      description: "Passer du plan au support projeté sans perdre une étape.",
      items: [
        "Convertir le plan Word en support projetable",
        "Habiller tout le fichier aux couleurs de l'organisme",
        "Compétence personnalisée sur Windows : les règles de vos supports écrites une fois",
        "Contrôle : aucune étape sautée, une consigne d'exercice par slide d'atelier",
      ],
      exercise: "Vous produisez le support du module et le comparez séquence par séquence au plan Word.",
    },
    {
      day: 2,
      title: 'Module 5 · Animer et résumer une classe virtuelle Teams',
      duration: '1h30',
      description: "Tirer d'une séance enregistrée une synthèse pour les apprenants et des corrections pour le module.",
      items: [
        "Enregistrement et transcription : annonce aux apprenants, solution de repli en cas de refus",
        "Résumé de séance, questions posées, points restés sans réponse",
        "Synthèse envoyée aux apprenants après relecture du formateur",
        "Retour des questions dans le module pour la session suivante",
      ],
      exercise: "Vous résumez une séance enregistrée de votre catalogue et en tirez trois corrections pour le module.",
    },
    {
      day: 2,
      title: 'Module 6 · Suivre les résultats et réviser le catalogue',
      duration: '2h',
      description: "Faire des évaluations un outil d'amélioration des modules.",
      items: [
        "Réponses de Forms ouvertes dans Excel : lecture seule pour repérer les questions manquées",
        "Mode Plan sur une copie : tableau de suivi par session, présence et objectifs atteints",
        "Bloc-notes Copilot pour la révision annuelle d'un module",
        "Anonymiser les résultats avant toute analyse",
      ],
      exercise: "Vous analysez les résultats anonymisés d'une évaluation récente et listez les questions à réécrire.",
    },
    {
      day: 2,
      title: 'Module 7 · Construire un tuteur pour les apprenants',
      duration: '2h',
      description: "Mettre le cours à portée de question, sans que l'agent invente ni évalue.",
      items: [
        "Agent Builder : instructions, documents du cours, ton",
        "Essais hors programme : l'agent renvoie au formateur",
        "Licences : agent facturé à l'usage pour les apprenants sans licence, agents simples compris dans Copilot Chat",
        "AI Act, annexe III : un tuteur qui explique, jamais un agent qui note",
      ],
      exercise: "Vous construisez un tuteur sur les documents de votre module et l'éprouvez avec dix questions, dont trois hors programme.",
    },
    {
      day: 2,
      title: "Module 8 · Arrêter la charte de conception de l'équipe",
      duration: '1h30',
      description: "Décider des sources admises, des relectures obligatoires et des tâches qui restent humaines.",
      items: [
        "Charte : sources admises, droits sur les contenus, relecture par un expert",
        "AI Act, article 4 : former aussi les formateurs à l'IA qu'ils utilisent",
        "Bibliothèque de demandes et compétences partagées par l'équipe",
        "Plan à 30 jours : un module révisé par concepteur, une évaluation essayée, un bilan au bout du mois",
      ],
      exercise: "Vous écrivez la charte de conception avec Copilot de votre équipe et choisissez le premier module à réviser selon cette méthode.",
    },
  ],
  objectives: [
    "Tirer d'un document source un plan de module aux objectifs formulés avec des verbes observables",
    "Relier chaque objectif à au moins une question d'évaluation construite dans Forms",
    "Produire un support PowerPoint au modèle de l'organisme à partir du plan Word, sans étape sautée",
    "Résumer une classe virtuelle Teams et en tirer des corrections pour le module",
    "Analyser les résultats d'une évaluation dans Excel pour repérer les questions à réécrire",
    "Construire un tuteur sur les documents du cours et le tenir hors du champ de l'évaluation des apprenants",
  ],
  faq: [
    {
      q: 'Copilot peut-il remplacer le concepteur pédagogique ?',
      a: "Il produit vite un premier plan, des exercices, des questions et des slides en s'appuyant sur vos documents. La conception reste votre métier : choisir les objectifs, vérifier l'exactitude du contenu, adapter la progression au public, décider de l'évaluation. Les meilleurs résultats viennent d'une équipe qui sait ce qu'elle veut obtenir et qui fait relire chaque production par un expert du domaine. La formation installe cette discipline sur un module de votre catalogue, du document source jusqu'au support.",
    },
    {
      q: "Copilot dans Forms génère-t-il de bonnes questions d'évaluation ?",
      a: "Il génère des questions utilisables, surtout pour vérifier des connaissances. Leur faiblesse habituelle tient aux distracteurs, souvent trop faciles à écarter, et aux questions qui admettent deux bonnes réponses. Nous apprenons à partir des objectifs, à réécrire les distracteurs avec les erreurs que font vos apprenants, et à tester le questionnaire sur deux collègues. Pour les compétences pratiques, une mise en situation observée par le formateur reste plus fiable qu'un questionnaire à choix multiples.",
    },
    {
      q: 'Peut-on construire un tuteur qui répond à nos apprenants ?',
      a: "Oui. Agent Builder permet de bâtir, sans développeur, un tuteur qui s'appuie sur les documents du cours. Pour des apprenants sans licence Microsoft Copilot, un tuteur nourri de vos contenus se paie à la consommation ; un agent limité à des instructions et à des sites publics reste compris dans Copilot Chat. Le tuteur s'éprouve sur des questions hors programme avant son ouverture. Pour un tuteur ouvert à des apprenants externes, Copilot Studio, vendu à part, devient souvent nécessaire : c'est alors un projet de développement.",
    },
    {
      q: "L'AI Act interdit-il d'utiliser l'IA pour évaluer les apprenants ?",
      a: "Il l'encadre. Les systèmes d'IA conçus pour noter les acquis, décider d'une admission ou orienter un parcours de formation figurent à l'annexe III du texte, qui recense les usages jugés sensibles, et leurs obligations ont été repoussées à décembre 2027 lors de la révision de juillet 2026. Faire proposer des questions par Copilot, puis les valider, ne relève pas de ce régime. Confier à un agent la note d'un apprenant, si. La formation trace cette frontière sur vos propres pratiques d'évaluation.",
    },
    {
      q: 'Nos supports et nos contenus clients sont-ils protégés ?',
      a: "Un formateur connecté à son compte de travail bénéficie des garanties contractuelles que Microsoft accorde aux comptes professionnels : ses demandes ne nourrissent aucun entraînement de modèle, et Microsoft garde en Europe le traitement des requêtes de ses clients européens, hors modèles d'Anthropic. Copilot respecte vos droits SharePoint, ce qui suppose des droits bien posés : un dossier de supports clients partagé avec toute l'entreprise sera visible de tous. Les contenus de tiers, manuels ou articles, ne se déposent qu'avec les droits d'usage correspondants.",
    },
    {
      q: 'Chaque concepteur doit-il disposer de la licence Microsoft Copilot ?',
      a: "Les concepteurs qui révisent beaucoup de modules gagnent à l'avoir : elle ouvre la recherche dans tout le fonds documentaire et la réécriture des documents Word ouverts. Les formateurs occasionnels se contentent de Copilot Chat, sans supplément sur l'abonnement, sur les documents qu'ils lui confient. Selon la page tarifaire consultée le 7 octobre 2026, le tarif de Copilot Business est de 18,20 € HT mensuels par concepteur facturés pour l'année, ou de 21,84 € HT en facturation mensuelle. Un client existant qui conclut avant fin 2026 une première souscription annuelle paie la première année 15,60 € HT.",
    },
    {
      q: 'Un organisme de formation déjà audité Qualiopi y trouve-t-il son compte ?',
      a: "Oui, et la formation s'appuie sur une exigence que vous connaissez : relier les objectifs annoncés à une évaluation des acquis. La table objectifs et questions construite au module 3 documente cette cohérence, et la méthode de révision des modules nourrit l'amélioration continue. Masteria s'applique ces règles, puisque sa certification Qualiopi couvre ses propres sessions. Pour un organisme qui forme ses propres formateurs, le format individuel ou un petit groupe conviennent.",
    },
    {
      q: 'Qui finance la formation Copilot des concepteurs et des formateurs ?',
      a: "L'opérateur de compétences dont vous relevez peut financer la session, puisque Masteria est certifiée Qualiopi et que ce programme en relève ; il le fait d'après ses critères et dans la limite de son enveloppe. Un groupe de concepteurs, jusqu'à douze, règle 3 960 € HT pour tout le parcours ; un formateur seul, 1 980 € HT par journée. Nous rédigeons avec vous programme et convention. Un organisme de formation peut aussi inscrire ses formateurs permanents, aux mêmes conditions. Pour Genève ou Bruxelles, le devis s'exprime en euros hors taxes.",
    },
  ],
  tarifs: {
    titre: 'Combien coûte la formation Copilot des concepteurs et formateurs',
    paras: [
      "Les 1 980 € HT facturés par jour couvrent aussi la préparation : le formateur reçoit en amont un module de votre catalogue, son document source et votre modèle de support, et bâtit les ateliers sur ces pièces. L'équipe repart avec un module révisé, son évaluation reliée aux objectifs, un support au modèle de l'organisme et un premier tuteur éprouvé.",
      "Pour une petite équipe de quatre concepteurs, les deux jours en intra coûtent 3 960 € HT, soit pour chacun 990 € HT ; à douze, la part de chacun tombe à 330 € HT. Licences Copilot et projet Copilot Studio éventuel restent hors de ce montant. La décision de financement revient ensuite à votre OPCO, sur le dossier préparé avec nous.",
    ],
  },
  apres: {
    titre: 'Après la formation, des outils pour votre catalogue',
    texte: "Une équipe formée repère vite ce qui mériterait un outil dédié : une compétence qui transforme chaque procédure révisée en module au format maison, un tuteur Copilot Studio ouvert à vos apprenants externes, un agent qui prépare la révision annuelle du catalogue à partir des résultats d'évaluation. Masteria cadre l'outil avec vous, le développe dans l'environnement de l'organisme, puis forme les personnes chargées de le tenir à jour. Établi au forfait après l'étude du besoin, ce développement sur mesure n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous un module de votre catalogue et son document source : les deux jours le transformeront sous vos yeux.",
    fin: {
      titre: 'Révisons un de vos modules pendant la session',
      texte: "Dites-nous combien de concepteurs et de formateurs vous voulez former, leurs licences Copilot et le module à réviser en priorité. Vous recevez un programme construit autour de ce module, avec des dates.",
    },
  },
  liensAssocies: [
    { label: 'Toutes nos formations Microsoft Copilot par métier', href: '/formation-microsoft-copilot' },
    { label: 'Formation IA pour les équipes pédagogiques, tous outils', href: '/formation-ia-pedagogique' },
    { label: 'Claude pour concevoir des formations', href: '/formation-claude-pedagogique' },
    { label: 'Construire et superviser des agents IA', href: '/formation-agents-ia' },
    { label: 'Un assistant documentaire construit sur vos contenus', href: '/assistant-documentaire-ia' },
  ],
  sources: [
    { name: "Microsoft Learn : Copilot dans Forms, Teams, Word et PowerPoint (présentation du 1er octobre 2026)", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview' },
    { name: "Microsoft Learn : journal des nouveautés de Copilot, dont les compétences PowerPoint", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes' },
    { name: "EUR-Lex : AI Act, annexe III, éducation et formation professionnelle", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { name: "EUR-Lex : règlement (UE) 2026/1744 et nouveau calendrier des systèmes sensibles", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
  ],
}
