// Contenu propre à /formation-ia-veille (page propre, guide terrain). Rendu par SpokePage.
// Formation d'un jour : le dispositif de veille d'une équipe. Le Sprint IA Veille de 3 h
// (formation-sprint-ia-veille) traite la veille personnelle sur un seul sujet.
// Revu le 07/10/2026 : faits d'outils selon la fiche FAITS-OUTILS du 07/10 (Gemini, Copilot,
// Vibe) ; étude UER-BBC, droit d'auteur et CFC repris du guide du 03/10 avec leurs sources.
export default {
  slug: 'formation-ia-veille',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation veille avec l'IA : organiser la veille de votre équipe",
  metaTitle: "Formation veille avec l'IA : 1 journée | Masteria",
  metaDesc: "Formation veille avec l'IA en un jour : questions liées aux décisions, collecte programmée, recherche approfondie, notes vérifiées, diffusion légale.",
  resume: "La formation veille avec l'IA apprend à une équipe, en une journée, à faire tourner sa veille dans l'assistant que l'entreprise lui fournit, depuis la question que pose la direction jusqu'à la note vérifiée qui lui revient. Elle réunit jusqu'à douze collègues sur place ou en visioconférence, ou bien un seul veilleur en individuel ; la journée est facturée 1 980 € HT. La certification Qualiopi que détient Masteria couvre ses actions de formation, si bien que l'OPCO de votre secteur peut instruire une demande, puis trancher d'après ses règles et les fonds qui lui restent.",
  enBref: [
    { label: 'Formation', value: "La veille d'une équipe montée dans Claude, Gemini, ChatGPT, Vibe ou Copilot, sur l'outil que vos salariés ouvrent déjà" },
    { label: 'Durée', value: "Sept heures sur une journée, en six modules qui suivent le trajet d'une information, de la question à la diffusion" },
    { label: 'Formats', value: "Dans vos murs ou en visioconférence ; jusqu'à douze collègues réunis, ou une personne seule" },
    { label: 'Tarif', value: "1 980 € HT la journée, montant identique de un à douze participants, TVA de 20 % en plus" },
    { label: 'Financement', value: "L'OPCO de votre branche étudie le dossier d'après ses règles et ses fonds disponibles ; programme et convention fournis par Masteria" },
    { label: 'Prérequis', value: "Un compte professionnel sur l'assistant d'IA déployé chez vous, et trois sujets que l'équipe surveille déjà" },
  ],
  prerequis: "Un compte professionnel sur l'assistant d'IA déployé chez vous, et trois sujets que l'équipe surveille déjà",
  intro: "Une veille sert à éclairer une décision ; sans décision en vue, elle s'empile dans les boîtes mail. La journée part donc des choix que votre direction prépare cette année, puis monte le circuit qui les nourrit : des questions précises, des sources qualifiées, une collecte programmée dans l'assistant maison, des notes où chaque information renvoie à sa page d'origine. Elle traite aussi ce que l'on a le droit de diffuser en interne. Le soir, l'équipe tient sa première note de veille vérifiée et le mode d'emploi qui permettra de la refaire chaque mois.",
  guide: {
    kicker: "Guide terrain veille",
    h2: "Une veille avec l'IA vaut ce que valent ses sources et ses vérifications",
    lead: "Programmer une recherche hebdomadaire ne demande plus que quelques réglages dans les grands assistants, et une recherche approfondie rend en quelques minutes un rapport qui cite ses sources. La collecte ne pose plus de difficulté. La fiabilité, elle, reste un travail humain : au printemps 2025, des journalistes de 22 médias publics européens ont relevé un problème important dans 45 % des réponses que quatre assistants grand public donnaient sur l'actualité. Le dispositif monté pendant la journée met donc la vérification et le droit de diffusion dans le circuit, au même rang que l'automatisation.",
    sections: [
      {
        h3: "Le plan de veille part des décisions à éclairer",
        paras: [
          "Une veille d'équipe s'ouvre sur une liste courte : les décisions que la direction arrêtera dans l'année et les questions qui les préparent. Un lancement de produit réclame de suivre les concurrents, un projet de décret réclame de suivre le texte et ses commentateurs. Chaque question reçoit ensuite un destinataire nommé, un rythme et un format de restitution.",
          "La question elle-même se rédige comme une commande passée à un documentaliste, avec un objet, une période et un périmètre géographique : « quels concurrents ont modifié leurs prix d'entrée de gamme depuis janvier, en France et en Belgique ». Formulée ainsi, elle donne une recherche ciblée, puis une note que son destinataire prend le temps de lire.",
          "Masteria publie chaque jour ouvré sa propre veille sur l'intelligence artificielle, et sa règle de fabrication tient en une phrase : la sélection des actualités précède toujours l'analyse, pour que le commentaire parte des faits retenus. La journée transpose cette règle à votre secteur.",
        ],
      },
      {
        h3: "Chaque assistant sait chercher à heure fixe et creuser une question",
        paras: [
          "Pour la collecte courante, ChatGPT exécute des tâches planifiées, uniques ou récurrentes, et des tâches de surveillance qui signalent ce qui a bougé depuis le passage précédent. Claude réserve ses tâches planifiées aux offres payantes, et son centre d'aide range le suivi de concurrents et de l'actualité d'un secteur parmi les usages courants. Dans Vibe, l'outil conversationnel de Mistral AI, une tâche s'exécute une fois, ou bien chaque jour, chaque semaine, chaque mois ou chaque année. Dans Microsoft Copilot (anciennement Microsoft 365 Copilot), l'agent Cowork, que Microsoft documente depuis le 29 septembre 2026 comme ouvert à tous les comptes professionnels, lance des tâches planifiées ou déclenchées par l'arrivée d'un mail, facturées à l'usage au-delà de la licence. Chez Google, Workspace Studio décrit en langage courant un flux qui relie Gmail, Drive et Chat ; ses plafonds d'usage s'appliqueront dès le 1er novembre 2026.",
          "Une question de fond appelle la recherche approfondie. ChatGPT et Gemini commencent par montrer leur plan de recherche, à corriger avant le lancement ; ChatGPT accepte une liste de sites où chercher, et Gemini peut renoncer à la recherche Google pour s'en tenir à vos documents. Claude enchaîne plusieurs recherches, chacune orientée par ce que la précédente a trouvé. L'agent Researcher de Copilot croise le web avec les mails, fichiers et réunions auxquels vous avez accès. Dans Vibe, la recherche approfondie est devenue une compétence que l'on appelle en tapant /deep-research. Au 7 octobre 2026, un compte Google Workspace Business Standard dispose de 20 recherches approfondies par jour, et un compte Business Starter de 5 rapports par mois.",
          "Le rapport d'une recherche approfondie se lit comme un premier jet bien documenté. Sa qualité dépend de deux relectures humaines : celle du plan, avant le lancement, et celle des sources citées, une fois le rapport rendu.",
        ],
      },
      {
        h3: "Une note de veille se vérifie phrase par phrase",
        paras: [
          "Entre le 24 mai et le 10 juin 2025, 271 journalistes de 22 médias de service public, Radio France comprise, ont examiné plus de 2 700 réponses des versions gratuites de ChatGPT, Copilot, Gemini et Perplexity à des questions d'actualité. Le rapport, publié par l'Union européenne de radio-télévision et la BBC en octobre 2025, compte au moins un problème important dans 45 % des réponses. L'attribution des sources pèche dans 31 % des cas : l'information manque sur la page citée, la source fait défaut ou ne se vérifie pas. Les faits périmés reviennent souvent : en mai 2025, plusieurs assistants présentaient encore le pape François comme chef de l'Église catholique, un mois après sa mort.",
          "Quatre gestes suffisent à tenir une note. Chaque information porte un lien et la date de sa publication. Une citation se recopie depuis la page d'origine, et jamais depuis la réponse de l'assistant. Une information qui pèse sur une décision se confirme par une seconde source indépendante. Un chiffre se suit jusqu'au document qui l'a publié en premier, communiqué de presse ou texte officiel.",
          "La date demande une vigilance à part. Une page vieille de deux ans peut ressortir dans une recherche du jour, et l'assistant la présente alors comme une nouvelle. Écrivez la période couverte dans chaque consigne, puis écartez tout ce qui en sort.",
        ],
      },
      {
        h3: "Les sources du mois se rangent dans un espace que l'équipe interroge",
        paras: [
          "Les rapports vérifiés gagnent à vivre au même endroit que la question qu'ils servent. Gemini Notebook, l'outil de carnets de Google, accepte au relevé du 7 octobre 2026 jusqu'à 300 sources dans un même carnet avec Business Standard, et 100 avec Business Starter, et répond en citant le passage d'où vient chaque affirmation. Un projet ChatGPT, un projet Claude, une bibliothèque Vibe ou un bloc-notes Copilot rendent le même service : on y dépose les rapports de la semaine, et la note mensuelle se rédige à partir de ce seul contenu.",
          "Cette organisation simplifie la relecture. Quand le projet de note ne puise que dans des rapports déjà contrôlés, une information qui n'y figure pas trahit un ajout de l'assistant, et elle se repère à la première lecture.",
        ],
      },
      {
        h3: "La diffusion interne obéit au droit d'auteur",
        paras: [
          "Le CFC, fondé en 1983 par les auteurs et les éditeurs, délivre les autorisations de rediffuser des articles de presse et des extraits de livres. Il le rappelle aux entreprises : faire circuler des articles sans autorisation est illégal, et la responsabilité pèse sur l'entreprise qui les fait circuler, qu'elle paie un abonnement au journal concerné ou qu'elle reçoive les articles d'une société de veille. Dans ce second cas, la licence du prestataire couvre la livraison, et l'entreprise qui rediffuse a besoin de sa propre licence.",
          "Quatre licences s'offrent aux entreprises : la licence standard pour les échanges ponctuels entre salariés, la licence panorama de presse pour une revue interne ou un extranet, une licence pour les envois à des destinataires extérieurs (clients, prospects, adhérents) et une licence web pour les sites et les réseaux sociaux.",
          "L'article L122-5 du Code de la propriété intellectuelle permet les analyses et les courtes citations, à condition de nommer l'auteur et la source. Une note qui résume avec ses mots, cite une phrase et renvoie à l'article par un lien s'appuie sur cette exception ; une note qui recopie des articles ou de longs passages relève d'une licence. Demandez à l'assistant de reformuler et de borner chaque citation à une phrase, puis soumettez votre format à votre juriste ou au CFC.",
        ],
      },
    ],
    table: {
      caption: "Le trajet d'une information de veille, et la part qui revient à l'équipe",
      headers: ["Étape", "Ce que fait l'assistant", "Ce que garde l'équipe"],
      rows: [
        ["Orienter", "Reformule les questions de veille, suggère des mots-clés et des sources à examiner", "Choisit les décisions à éclairer, les destinataires et le rythme"],
        ["Collecter", "Relance chaque semaine la recherche programmée de chaque sujet", "Arrête la liste des sources et la période couverte par chaque tâche"],
        ["Trier", "Range les éléments par question de veille et signale les doublons", "Écarte les sources douteuses et ce qui sort de la période"],
        ["Synthétiser", "Rédige une note où chaque information porte un lien et une date", "Écrit l'analyse : ce que l'information change pour l'entreprise"],
        ["Vérifier", "Lance une seconde recherche de recoupement quand on la lui demande", "Ouvre chaque lien, contrôle les citations, remonte les chiffres à leur origine"],
        ["Diffuser", "Met la note en forme pour le mail, Teams ou l'intranet", "Respecte le droit d'auteur et décide qui reçoit quoi"],
      ],
    },
    cas: {
      h3: "Mise en situation : la note mensuelle d'un comité de direction industriel",
      contexte: "Prenons le service marketing d'une ETI de 400 salariés qui fabrique des équipements de cuisine professionnelle. Chaque mois, le comité de direction attend deux pages sur les concurrents, la réglementation du secteur, les salons et les appels d'offres. Le service travaille sur Claude Team, où les tâches planifiées sont ouvertes à ses membres.",
      etapes: [
        "Le directeur marketing et la chargée de veille écrivent huit questions de veille, que le comité valide en séance.",
        "La chargée de veille programme dans Claude une tâche hebdomadaire par thème, bornée à sept jours et assortie d'une liste de sources à privilégier.",
        "Chaque lundi, elle ouvre les liens des informations retenues, puis range les rapports contrôlés dans un projet Claude réservé à la veille.",
        "Le dernier jour du mois, elle ouvre ce projet et y lance la consigne reproduite plus bas pour obtenir le projet de note.",
        "Le directeur marketing réécrit les lignes d'analyse, et la note part au comité avec les liens vers les articles et des citations d'une phrase.",
      ],
      prompt: "Tu rédiges la note de veille de septembre destinée au comité d'un fabricant d'équipements de cuisine professionnelle de 400 personnes. Ta matière se limite aux rapports hebdomadaires rangés dans ce projet et publiés du 1er au 30 septembre 2026.\n\nOrganise la note en quatre rubriques : concurrents, réglementation, salons, appels d'offres. Dans chaque rubrique :\n1. Garde trois informations au plus, classées selon leur importance pour notre entreprise.\n2. Consacre deux phrases à chacune : le fait, puis ce qu'il peut changer pour nous.\n3. Donne la source : titre, média, date de publication et lien.\n4. Classe l'information : fait établi, annonce ou rumeur.\n\nConsignes :\n- Écris avec tes propres mots ; une citation tient en une phrase et nomme son auteur.\n- Quand deux rapports disent des choses contraires, montre l'écart et cite les deux sources.\n- Aucune information extérieure aux rapports du projet.\n- Deux pages au plus.",
      resultat: "Claude rend une note où chaque information porte sa source, sa date et son statut, avec une ligne d'analyse que le directeur marketing reprend à la lumière de ce qu'il sait du marché. Deux contrôles restent humains : ouvrir les liens des informations qui montent au comité, et s'assurer que la note ne recopie aucun article. Le format reste le même chaque mois, et le comité retrouve ses repères à chaque lecture.",
    },
    pieges: [
      {
        titre: "La source qui ne dit pas ce qu'on lui prête",
        texte: "Dans le rapport publié par l'UER avec la BBC, 31 % des réponses attribuaient mal leurs sources, dont des informations introuvables sur la page citée. Ouvrez le lien avant de reprendre une information dans la note, à plus forte raison quand elle vous étonne.",
      },
      {
        titre: "L'actualité de l'an passé présentée comme neuve",
        texte: "Une recherche du jour peut faire ressortir une page ancienne, que l'assistant présente comme récente. Exigez la date de publication de chaque source et écrivez la période couverte dans chaque tâche planifiée.",
      },
      {
        titre: "Le panorama de presse diffusé sans licence",
        texte: "Coller des articles dans une lettre interne ou un canal Teams revient à les rediffuser, ce que le CFC soumet à licence quelle que soit leur provenance. Résumez avec vos mots et renvoyez à l'article par un lien.",
      },
      {
        titre: "Le rapport hebdomadaire qui tourne en rond",
        texte: "Une consigne sans période ni sources ramène chaque semaine des articles déjà lus. Bornez la période, par exemple « depuis lundi dernier », nommez les sources à privilégier, et relisez les trois premiers rapports avant d'accorder votre confiance à la tâche.",
      },
      {
        titre: "La note de dix pages que personne ne lit",
        texte: "Un long document adressé à toute l'entreprise finit archivé sans lecture. Reliez chaque question de veille à un destinataire nommé, tenez la note en deux pages et demandez au comité, au bout d'un trimestre, ce qui lui a servi.",
      },
    ],
  },
  audience: [
    { title: "Chargés de veille, documentalistes et knowledge managers", desc: "Vous produisez déjà de la veille pour d'autres services. Vous voulez confier la collecte aux assistants d'IA et garder pour vous le choix des sources comme les droits de diffusion." },
    { title: "Responsables marketing, communication et stratégie", desc: "Vous suivez concurrents et marchés avant les arbitrages de la direction. Vous voulez une note mensuelle produite avec l'IA, contrôlée avant de monter au comité." },
    { title: "Équipes R&D, qualité et affaires réglementaires", desc: "Publications, normes et projets de textes passent sous vos yeux. Vous voulez des recherches approfondies sourcées et une méthode pour remonter jusqu'au texte d'origine." },
    { title: "Assistants de direction", desc: "Vous préparez la revue d'actualité du comité de direction. Vous voulez un circuit régulier, une mise en page stable et des règles nettes sur ce qui peut circuler." },
  ],
  useCases: [
    { icon: '📡', title: "Plan de veille", desc: "Huit à dix questions, chacune reliée à une décision, à un destinataire et à un rythme." },
    { icon: '🎯', title: "Collecte programmée", desc: "Une tâche récurrente par sujet dans l'assistant de l'entreprise, avec sa période et ses sources." },
    { icon: '✍️', title: "Note de synthèse sourcée", desc: "Deux pages où chaque information porte son lien, sa date et une ligne d'analyse." },
    { icon: '📤', title: "Diffusion dans les règles", desc: "Résumés, citations d'une phrase et liens ; licence du CFC dès que la note recopie des articles." },
    { icon: '🔬', title: "Recherche approfondie cadrée", desc: "Un rapport sourcé sur une question de fond, lancé après relecture de son plan." },
    { icon: '🛡️', title: "Protocole de vérification", desc: "Lien ouvert, citation recopiée depuis la page, second recoupement, chiffre suivi jusqu'à son document." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Écrire le plan de veille de l'équipe", duration: '1h',
      description: "La veille sert des décisions. Vous partez des choix que prépare votre direction pour écrire des questions de veille précises.",
      items: [
        "Veille concurrentielle, réglementaire, technologique ou de marché : à quoi sert chacune",
        "Une question de veille en trois parties : objet, période, périmètre",
        "Un destinataire, un rythme et un format par question",
        "Faire reformuler les questions et proposer des mots-clés par l'assistant",
      ],
      exercise: "Vous rédigez huit questions de veille pour votre équipe et les rattachez aux décisions de l'année.",
    },
    {
      day: 1, title: "Module 2 · Qualifier ses sources avant de les confier à l'assistant", duration: '1h15',
      description: "Une source se juge sur son auteur, sa date et son origine. Vous dressez la liste des sources de chaque question.",
      items: [
        "Sources primaires et secondaires : textes officiels, communiqués, presse, études",
        "Grille de fiabilité : auteur, date, origine, possibilité de recoupement",
        "Alertes Google et flux RSS pour les sites qui publient souvent",
        "Les défauts d'attribution relevés par l'UER et la BBC dans les réponses des assistants",
      ],
      exercise: "Vous passez quinze sources de votre secteur à la grille et retenez les plus solides pour chaque question.",
    },
    {
      day: 1, title: "Module 3 · Programmer la collecte dans l'assistant déjà en place", duration: '1h15',
      description: "Chaque grand assistant sait relancer une recherche à heure fixe. Vous réglez les tâches de votre équipe et lisez leur premier résultat.",
      items: [
        "Tâches planifiées et de surveillance dans ChatGPT, tâches planifiées de Claude et de Vibe",
        "Copilot Cowork et ses déclencheurs, Workspace Studio chez Google",
        "La consigne d'une tâche : période, sources à privilégier, format du rapport",
        "Compte d'entreprise et réglages de confidentialité : ce que deviennent les sujets surveillés",
      ],
      exercise: "Vous programmez une tâche hebdomadaire pour chaque question prioritaire et analysez son premier rapport.",
    },
    {
      day: 1, title: "Module 4 · Conduire une recherche approfondie", duration: '1h',
      description: "Une question de fond mérite un rapport documenté. Vous apprenez à cadrer la recherche avant de la lancer.",
      items: [
        "Recherche approfondie de ChatGPT, de Gemini et de Claude, Researcher dans Copilot, compétence /deep-research dans Vibe",
        "Relire et corriger le plan de recherche",
        "Limiter la recherche à des sites choisis ou à vos propres documents",
        "Ranger les rapports dans un carnet Gemini Notebook ou un projet partagé",
      ],
      exercise: "Vous menez une recherche approfondie sur l'une de vos questions, puis contrôlez cinq de ses sources.",
    },
    {
      day: 1, title: "Module 5 · Rédiger la note et la contrôler", duration: '1h30',
      description: "La synthèse se rédige vite, et sa valeur tient à la vérification. Vous produisez la note de votre équipe et la reprenez phrase par phrase.",
      items: [
        "Consigne de synthèse : fait, analyse, source et date pour chaque information",
        "Fait établi, annonce ou rumeur : les classer",
        "Lien, citation, recoupement, document d'origine : les quatre gestes",
        "Débusquer les informations périmées",
      ],
      exercise: "Vous produisez la note de veille du mois de votre équipe et en vérifiez chaque information.",
    },
    {
      day: 1, title: "Module 6 · Diffuser dans les règles et tenir la veille dans la durée", duration: '1h',
      description: "La diffusion obéit au droit d'auteur, et une veille doit durer au-delà du premier mois. Vous fixez le circuit, les droits et le rituel de révision.",
      items: [
        "Analyses et courtes citations (article L122-5) ou licence du CFC : où passe la frontière",
        "Mail, Teams, intranet ou réunion : choisir le canal",
        "Règle d'usage de l'équipe et registre des sessions suivies, la preuve que réclame l'AI Act (article 4)",
        "Plan à trente jours : quatre notes hebdomadaires, une note mensuelle, une revue des questions",
      ],
      exercise: "Vous écrivez le mode d'emploi de la veille de votre équipe : circuit, droits de diffusion, responsable, échéances du premier mois.",
    },
  ],
  objectives: [
    "Rédiger des questions de veille rattachées à des décisions, chacune avec un destinataire, un rythme et un format",
    "Juger la fiabilité d'une source d'après son auteur, sa date, son origine et la possibilité de la recouper",
    "Programmer dans un assistant d'IA une recherche récurrente dont la période et les sources sont fixées",
    "Écrire une consigne de synthèse qui impose, pour chaque information, sa source et sa date de publication",
    "Contrôler une note produite par l'IA en ouvrant les liens et en remontant aux documents d'origine",
    "Faire la part entre ce qu'une diffusion interne peut reprendre d'un article et ce qui exige une licence du CFC",
  ],
  faq: [
    {
      q: "Quels outils d'IA utiliser pour organiser la veille d'une entreprise ?",
      a: "Partez de l'assistant que l'entreprise a déjà déployé. Copilot, Gemini, Claude, Vibe et ChatGPT cherchent tous sur le web, et chacun propose selon l'offre une recherche approfondie ou un agent de recherche, ainsi qu'un moyen de relancer une recherche à heure fixe. Les alertes Google et les flux RSS complètent la collecte sur les sites qui publient beaucoup. La journée se déroule sur votre outil et vos sources, sans logiciel de veille à acheter.",
    },
    {
      q: "Recherche approfondie ou tâche planifiée : laquelle sert la veille ?",
      a: "Les deux, pour des usages différents. La tâche planifiée rejoue la même recherche à intervalle régulier et fait remonter ce qui est nouveau : elle nourrit la veille courante. La recherche approfondie traite une question ponctuelle en lisant de nombreuses sources et rend un rapport structuré en quelques minutes : elle sert les dossiers de fond, comme l'arrivée d'un concurrent ou un projet de réglementation. Une veille d'équipe combine les deux, avec la même exigence de vérification avant diffusion.",
    },
    {
      q: "Comment éviter les erreurs et les sources inventées dans une veille faite avec l'IA ?",
      a: "En contrôlant chaque information avant qu'elle circule. Le rapport que l'UER et la BBC ont publié en octobre 2025 relève un défaut d'attribution des sources dans 31 % des réponses d'assistants interrogés sur l'actualité, sur des versions gratuites testées au printemps 2025. Exigez un lien et une date pour chaque information, recopiez les citations depuis la page d'origine, confirmez par une seconde source ce qui engage une décision, et suivez chaque chiffre jusqu'au document qui l'a publié.",
    },
    {
      q: "Peut-on diffuser en interne des articles de presse résumés par l'IA ?",
      a: "Un résumé écrit avec vos mots, des citations courtes qui nomment l'auteur et la source, et un lien vers l'article relèvent en principe de l'exception d'analyse et de courte citation de l'article L122-5 du Code de la propriété intellectuelle. Recopier des articles ou de longs passages dans une lettre interne, un canal Teams ou un intranet demande une licence du CFC, y compris pour un journal auquel l'entreprise est abonnée ou des articles livrés par une société de veille. Pour un format qui vous fait hésiter, consultez votre juriste ou le CFC.",
    },
    {
      q: "Quelle différence entre cette journée et le Sprint IA Veille de trois heures ?",
      a: "La journée monte le dispositif d'une équipe : plan de veille rattaché aux décisions, qualification des sources, collecte programmée sur plusieurs sujets, recherche approfondie, vérification et droits de diffusion. Elle s'adresse aux personnes qui produisent la veille pour d'autres. Le Sprint installe en trois heures la veille personnelle d'un participant sur un seul sujet, avec une tâche programmée et un premier relevé qui tient sur un écran. Une équipe peut commencer par le Sprint et passer à la journée lorsque sa veille devient collective.",
    },
    {
      q: "Combien coûte la formation veille avec l'IA, et l'OPCO peut-il la financer ?",
      a: "Le prix de la journée s'établit à 1 980 € HT, TVA de 20 % non comprise, que vos veilleurs soient douze dans la salle ou qu'un seul suive la session, sur place comme en visioconférence. La certification Qualiopi obtenue par Masteria pour ses actions de formation autorise l'OPCO de votre branche à étudier le dossier, puis à décider d'après ses règles et ses fonds. Le programme détaillé et la convention viennent de Masteria ; la demande part de chez vous, avant le jour de la formation.",
    },
    {
      q: "Comment protéger la confidentialité des sujets surveillés ?",
      a: "Les consignes de veille trahissent vos priorités : les concurrents suivis, les produits en préparation. Écrivez-les depuis le compte de l'entreprise, jamais depuis un compte personnel. Une tâche planifiée de ChatGPT partagée par lien laisse lire toute sa consigne à quiconque ouvre ce lien, et OpenAI recommande de n'y mettre aucune donnée personnelle sensible. Pour un sujet stratégique, formulez la recherche en termes généraux et gardez l'analyse dans vos documents internes.",
    },
  ],
  tarifs: {
    titre: "Ce qu'inclut le tarif de la journée de veille",
    paras: [
      "Le prix comprend la préparation : avant la session, le formateur reçoit trois sujets que votre équipe suit déjà, l'outil d'IA dont elle dispose et un exemple de note actuelle, si elle existe. Les exercices partent de ces sujets, et chacun repart avec ses tâches programmées, sa grille de sources et la consigne de synthèse de son équipe.",
      "Prenons un service marketing qui inscrit sa directrice, deux chargés de communication, une documentaliste et deux assistantes de direction, soit six personnes. Les six inscrits partagent une facture de 1 980 € HT, soit 330 € HT par personne ; un veilleur seul suivi en individuel paie lui aussi 1 980 € HT pour sa journée. La TVA de 20 % vient en sus. L'OPCO de votre branche peut prendre à sa charge une part de cette dépense, si ses règles le permettent et que ses fonds suffisent, et Masteria vous transmet de quoi constituer le dossier.",
    ],
  },
  apres: {
    titre: "Après la journée, une veille qui tourne sans relance manuelle",
    texte: "Quand le circuit est rodé, Masteria peut construire pour votre équipe un agent de veille sur mesure : il interroge vos sources aux heures fixées, range chaque information sous la bonne question, rédige le projet de note dans votre format et le dépose pour validation avant tout envoi. L'agent s'installe dans votre environnement, avec vos droits d'accès et vos règles de diffusion. Ce travail de développement, pas finançable par votre OPCO, fait l'objet d'un forfait fixé après un cadrage.",
  },
  cta: {
    milieu: "Envoyez-nous trois sujets que votre équipe surveille : la journée se bâtit sur eux.",
    fin: {
      titre: "Construisons la journée autour de vos sujets de veille",
      texte: "Dites-nous qui produit la veille chez vous, pour quels destinataires, et quel assistant d'IA l'entreprise fournit. Vous recevez en retour un programme bâti sur vos questions et plusieurs dates possibles.",
    },
  },
  terrain: {
    titre: "Sur le terrain : la veille concurrentielle entre dans le quotidien des managers",
    texte: "Dans le groupe international du packaging que Masteria accompagne en 2026, les managers pilotes ont suivi deux jours de formation à Microsoft Copilot, au fil de cinq sessions tenues de juillet à septembre. Parmi les usages livrés figure une veille concurrentielle outillée, à côté des ateliers Excel et du traitement des mails. Les équipes américaines et mexicaines prendront le relais en octobre 2026, puis celles de l'Inde en décembre.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  liensAssocies: [
    { label: "Sprint IA Veille : une veille personnelle installée en trois heures", href: '/formation-sprint-ia-veille' },
    { label: "Veille concurrentielle par l'IA : méthode et cadre", href: '/veille-concurrentielle-ia' },
    { label: "Outils de veille IA : le comparatif pour choisir", href: '/outils-veille-ia' },
    { label: "Comment Masteria sélectionne et rédige sa Veille IA quotidienne", href: '/veille-ia/a-propos' },
    { label: "Écrire des notes et des comptes rendus avec l'IA", href: '/formation-ia-ecrits-pro' },
  ],
  sources: [
    { name: "Rapport « News Integrity in AI Assistants », Union européenne de radio-télévision et BBC, octobre 2025", url: "https://www.ebu.ch/research/open/report/news-integrity-in-ai-assistants" },
    { name: "Centre d'aide OpenAI, tâches planifiées et de surveillance dans ChatGPT", url: "https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt" },
    { name: "Centre d'aide OpenAI, fonctionnement de la recherche approfondie de ChatGPT", url: "https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt" },
    { name: "Aide Claude, programmation de tâches récurrentes", url: "https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork" },
    { name: "Aide Claude, la fonction Research et ses recherches successives", url: "https://support.claude.com/en/articles/11088861-use-research-on-claude" },
    { name: "Aide Google, Deep Research dans les applications Gemini", url: "https://support.google.com/gemini/answer/15719111?hl=fr" },
    { name: "Aide Google, quotas de l'application Gemini par édition de Workspace, relevés le 7 octobre 2026", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
    { name: "Centre d'administration Google, plafonds d'usage de Gemini et de Workspace Studio, page actualisée le 7 octobre 2026", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
    { name: "Microsoft Support, premiers pas avec l'agent Researcher", url: "https://support.microsoft.com/fr-fr/microsoft-365-copilot/get-started-with-researcher-in-microsoft-365-copilot" },
    { name: "Microsoft Learn, présentation de Copilot Cowork (29 septembre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
    { name: "Documentation Mistral AI, programmation des tâches dans Vibe", url: "https://docs.mistral.ai/vibe/work/scheduled-tasks" },
    { name: "Mistral AI, mise à jour de Vibe du 22 septembre 2026 : compétences, recherche approfondie", url: "https://docs.mistral.ai/resources/release-notes" },
    { name: "CFC, licences de rediffusion proposées aux entreprises", url: "https://www.cfcopies.com/secteurs/entreprises-plateformes/entreprises-privees-et-publiques" },
    { name: "Légifrance, exception d'analyse et de courte citation (article L122-5 du Code de la propriété intellectuelle)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048603495" },
  ],
}
