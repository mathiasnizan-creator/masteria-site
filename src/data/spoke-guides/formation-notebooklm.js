// Contenu propre à /formation-notebooklm (guide terrain, page propre). Rendu par SpokePage.
// Noms, fonctions, plafonds et réglages vérifiés le 22 octobre 2026 sur l'aide Google
// (support.google.com/gemininotebook, aide administrateur Workspace mise à jour le 20/10/2026),
// blog Google du 16/07/2026 (changement de nom, chiffres d'usage) ; AKTO : brève du 22/09/2026.
export default {
  slug: 'formation-notebooklm',
  updatedAt: '2026-10-22',
  updatedLabel: 'Vérifié le 22 octobre 2026',
  pagePropre: true,
  auteur: true,
  metaDesc: "Formation NotebookLM, devenu Gemini Notebook : carnets par dossier, réponses citées, guides d'étude, quiz, résumés audio et vidéo, partage Workspace. 1 jour.",
  keywords: "formation notebooklm, formation google notebooklm, formation gratuite notebooklm, formation gemini notebook, notebooklm entreprise, gemini notebook workspace, résumé audio notebooklm",
  prerequis: "Un compte Google, personnel ou Workspace, sur lequel Gemini Notebook est ouvert, et une dizaine de documents de travail que vous avez le droit d'exploiter : procédures, contrats types, supports de cours, comptes rendus",
  resume: "La formation Gemini Notebook de Masteria, l'outil que la plupart des gens cherchent encore sous le nom de NotebookLM, apprend en une journée de sept heures à interroger un dossier de documents, à contrôler chaque réponse par sa citation et à en tirer guides d'étude, quiz, cartes mentales, résumés audio et vidéo. Elle réunit en intra un groupe de douze personnes au plus, ou se suit seul en individuel, dans vos locaux ou en visioconférence, sur des pièces apportées par les participants. Masteria est certifié Qualiopi : l'opérateur de compétences de votre branche instruit la demande de prise en charge et arrête seul sa réponse.",
  enBref: [
    { label: 'Formation', value: "Gemini Notebook (anciennement NotebookLM) : carnets par dossier, réponses citées, supports d'apprentissage, partage et confidentialité" },
    { label: 'Durée', value: "Une journée de sept heures en quatre modules, chaque exercice mené sur un carnet que le participant conserve" },
    { label: 'Formats', value: "Intra pour douze personnes au maximum ou parcours individuel ; sur site ou en visioconférence, navigateur ouvert sur notebook.google.com" },
    { label: 'Tarif', value: "Journée facturée dès 1 980 € HT pour le groupe entier ; le temps de préparation des exercices sur vos documents s'ajoute au devis" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; la demande part vers l'OPCO de la branche, ou vers le FAF d'un indépendant, qui décide du montant" },
    { label: 'Prérequis', value: "Un compte Google où Gemini Notebook est activé et une dizaine de documents de travail utilisables" },
  ],
  intro: "Gemini Notebook s'appelait NotebookLM jusqu'au 16 juillet 2026, et la plupart des gens le cherchent encore sous ce nom. L'outil de Google répond à partir des seuls documents que vous lui confiez, renvoie au passage exact d'où vient chaque phrase et transforme un dossier en guide d'étude, en quiz ou en résumé audio. Ses usages se jouent sur quatre terrains : ce qu'un carnet accepte selon votre compte, la vérification d'une réponse, les supports du panneau Studio, puis le partage et la confidentialité. Chaque fonction et chaque limite citées plus bas ont été relevées dans l'aide de Google le 22 octobre 2026.",
  guide: {
    kicker: 'Guide terrain',
    h2: "Gemini Notebook répond depuis vos documents : la qualité du carnet fixe la qualité des réponses",
    lead: "Google a annoncé le changement de nom le 16 juillet 2026 : NotebookLM, présenté en 2023 sous le nom de Project Tailwind, devient Gemini Notebook et reste une application autonome, que l'on ouvre aussi depuis l'application Gemini. Selon Google, plus de 30 millions de personnes et plus de 600 000 organisations s'en servaient à cette date, soit l'équivalent de plus de 40 % de la population française. Son principe tient en une règle : dans le chat du carnet, la réponse s'appuie sur les sources déposées, et chaque affirmation porte un renvoi cliquable vers le passage cité. Le travail de l'utilisateur se concentre donc sur deux gestes, choisir les pièces qui font foi et contrôler les citations.",
    sections: [
      {
        h3: "Un carnet regroupe les pièces d'un seul dossier, dans les limites de votre compte",
        paras: [
          "Un carnet, appelé notebook dans l'interface française de Google, rassemble les sources d'un projet : le dossier d'un client, un référentiel qualité, les supports d'un cours. Chaque carnet fonctionne en vase clos : Google précise que Gemini Notebook ne puise jamais dans deux carnets en même temps. Découpez donc par question à traiter : un carnet pour la procédure d'achat, un autre pour les accords d'entreprise, plutôt qu'un carnet fourre-tout où deux versions d'une même règle se contredisent. Dès cinq sources, l'outil sait les ranger sous des étiquettes par thème, que vous renommez ou déplacez.",
          "Un carnet accepte les PDF, les fichiers Word, PowerPoint, texte, Markdown, CSV et ePub, les documents, présentations et feuilles Google, les images, les fichiers audio qu'il transcrit, les pages web dont il garde le seul texte, et les vidéos YouTube publiques sous-titrées, dont il retient la transcription. Une source peut compter 500 000 mots ou peser 200 Mo. Les fichiers importés depuis Drive se resynchronisent toutes les quelques minutes ; les notes de bas de page et les commentaires d'un document Google restent dehors, ce qui fait disparaître les remarques d'un relecteur.",
          "Le plafond dépend du compte. Un compte Google personnel gratuit ouvre 50 sources par carnet et 100 carnets par personne ; Business Starter se situe au palier d'entrée des éditions Workspace, à relever dans la console d'administration ; Business Standard, Business Plus, Enterprise Standard et Enterprise Plus en ouvrent 300 et 500 ; le module payant AI Expanded Access monte à 400 sources par carnet. Google tient ces chiffres pour révisables, et sa page d'aide aux administrateurs a encore changé le 20 octobre 2026 : relisez-la le jour où vous dimensionnez un carnet.",
        ],
      },
      {
        h3: "La citation sert de preuve, et le réglage du chat adapte la réponse à son lecteur",
        paras: [
          "Dans le panneau Discussion, chaque réponse porte des numéros de citation : le survol affiche le passage, le clic ouvre la source à l'endroit cité. Une question peut viser quelques sources cochées dans la liste, et nommer le document dans la demande resserre encore la recherche. Les réponses du chat ne s'appuient que sur le contenu du carnet ; une demande qui en sort, comme réécrire la fin d'une nouvelle, peut recevoir le message « Gemini Notebook ne peut pas répondre à cette question ».",
          "Le bouton Configurer le chat propose trois styles : Par défaut pour la recherche, Guide d'apprentissage pour assimiler une notion pas à pas, Personnalisé pour imposer un rôle ou un registre, par exemple un juriste qui répond en trois lignes et cite l'article. La longueur des réponses se règle au même endroit. Une réponse utile s'épingle par Enregistrer dans une note, tableaux et citations compris, et l'historique des discussions reste visible de vous seul.",
          "Les carnets s'ouvrent aussi depuis l'application Gemini, et un ajout de source ou de consigne se reporte d'une application à l'autre. La nuance compte pour la vérification : dans Gemini, la réponse peut puiser sur le web et dans d'autres outils, alors que Gemini Notebook s'en tient aux sources. Les résumés audio et vidéo, les présentations et les infographies ne se génèrent que dans Gemini Notebook, et un carnet partagé n'apparaît pas dans Gemini.",
        ],
      },
      {
        h3: "Le panneau Studio fait d'un dossier des supports qu'on lit, qu'on écoute ou qu'on révise",
        paras: [
          "Le panneau Studio rédige des rapports : questions fréquentes, guide d'étude, document de synthèse, ou un format que vous décrivez. Exporter vers Docs envoie le rapport dans Google Docs, et un tableau de données part vers Sheets ; le fichier exporté vit ensuite sa vie, sans retour vers le carnet ni reprise des droits de partage. La carte mentale se lance depuis le chat, et chaque nœud cliqué devient une question posée au carnet, ce qui fait apparaître les thèmes que vos sources traitent mal.",
          "Les flashcards et les quiz se règlent en difficulté (facile, moyen, difficile) et en nombre (Moins, Standard, Plus), avec une consigne qui précise le public ou les notions à couvrir. Le bouton Expliquer détaille une réponse, l'Indice aide pendant le quiz, et la révision peut se limiter aux cartes manquées. Les flashcards se téléchargent en CSV, un format que reprennent la plupart des outils de révision.",
          "Le résumé audio existe en quatre formats : Analyse approfondie, une conversation à deux voix ; Briefing, une seule voix et moins de deux minutes ; Critique, qui évalue un texte ; Débat, qui confronte deux positions. Il se génère dans plus de 80 langues, français compris, et accepte une consigne de niveau ou de thème. Le mode interactif, où l'on interrompt les voix pour poser une question, fonctionne en anglais seulement.",
          "Le résumé vidéo propose un format Explicatif, disponible en français, un format Court d'une soixantaine de secondes et un format Cinématique, en anglais seulement et réservé aux plus de 18 ans. Le style visuel se choisit, du tableau blanc à l'aquarelle, et la génération dépasse parfois trente minutes. Google le rappelle à chaque fonction : voix, images et textes produits par l'IA peuvent contenir des inexactitudes.",
        ],
      },
      {
        h3: "Le partage et le traitement des données suivent le type de compte",
        paras: [
          "Le bouton Partager attribue un rôle Lecteur, qui consulte sources et notes, ou Éditeur, qui ajoute, retire et partage à son tour. La case Autoriser les copies laisse ou non dupliquer le carnet, et l'écran d'analyse compte utilisateurs et questions par jour une fois le carnet partagé avec quatre personnes au moins. Un compte Gmail personnel partage avec 50 personnes au plus, et jamais avec un groupe Google.",
          "Dans Workspace, l'administrateur active Gemini Notebook par unité organisationnelle ou par groupe, depuis le menu IA générative de la console, et décide si un carnet peut quitter le domaine : jamais, vers une liste de domaines autorisés, ou vers n'importe quelle adresse. Les droits de Drive continuent de s'appliquer, si bien qu'un collègue privé de lecture sur un fichier ne peut pas l'ajouter comme source.",
          "Sur un compte personnel, fichiers et discussions ne servent pas à entraîner directement les modèles de Google ; un avis donné par le pouce levé ou baissé part en revanche, avec son contenu, vers des équipes de relecture qui le conservent jusqu'à trois ans. Sur un compte Workspace, les conditions de Google Cloud s'appliquent : ni relecture humaine, même après un avis, ni entraînement. Google affiche pour le service les certifications SOC 1, 2 et 3 et ISO 27001, 27017, 27018 et 27701, avec une réserve : les fichiers de Drive mis en cache par Gemini Notebook échappent aux réglages de région de données de l'organisation.",
        ],
      },
    ],
    table: {
      caption: "Gemini Notebook selon le compte, d'après l'aide Google relevée le 22 octobre 2026",
      headers: ['Compte', 'Sources par carnet', 'Carnets par personne', 'Conditions', 'Vos contenus'],
      rows: [
        ["Compte Google personnel gratuit", "50", "100", "Conditions d'utilisation de Google", "Pas d'entraînement direct ; un avis envoyé est relu par des équipes de Google et gardé jusqu'à trois ans"],
        ["Abonnement personnel Google AI Pro", "300", "500", "Conditions d'utilisation de Google", "Même traitement que le compte gratuit"],
        ["Workspace Business Starter", "Palier d'entrée, à relever", "Selon la console", "Conditions de Google Cloud", "Aucune relecture humaine, aucun entraînement, même après un avis"],
        ["Business Standard, Business Plus, Enterprise Standard et Plus", "300", "500", "Conditions de Google Cloud", "Aucune relecture humaine, aucun entraînement"],
        ["Module AI Expanded Access", "400", "500", "Conditions de Google Cloud", "Aucune relecture humaine, aucun entraînement"],
      ],
    },
    cas: {
      h3: "Cas pratique : bâtir le parcours d'accueil de nouveaux techniciens à partir du manuel qualité",
      contexte: "Une PME de maintenance industrielle accueille dix techniciens en janvier. Son responsable qualité dispose du manuel qualité en PDF, de quatorze procédures rédigées dans Google Docs, du rapport du dernier audit de certification et de deux vidéos de démonstration du fabricant des machines, publiques et sous-titrées sur YouTube. Il lui faut un parcours de deux semaines que les tuteurs suivront, un quiz en fin de première semaine et un endroit unique où les nouveaux trouveront des réponses sourcées. L'entreprise travaille en Business Standard.",
      etapes: [
        "Créez un carnet « Accueil techniciens » et importez depuis Drive le manuel, les procédures et le rapport d'audit, puis les deux liens YouTube ; contrôlez que chaque procédure est la version en vigueur.",
        "Dans Configurer le chat, choisissez Guide d'apprentissage, puis générez une carte mentale pour voir les thèmes que les sources couvrent mal.",
        "Soumettez la demande ci-dessous, ouvrez trois citations prises au hasard dans la réponse, puis enregistrez-la dans une note.",
        "Dans Studio, générez un guide d'étude par semaine et un quiz de difficulté moyenne sur les procédures de sécurité ; exportez les guides vers Docs pour validation.",
        "Ajoutez un résumé audio au format Briefing, en français, pour chaque procédure critique, puis partagez le carnet en Lecteur avec les tuteurs, copies non autorisées.",
      ],
      prompt: "Tu prépares le parcours d'accueil de dix techniciens de maintenance qui arrivent en janvier. Appuie-toi uniquement sur les sources de ce carnet : manuel qualité, procédures et rapport d'audit.\n\nPropose un parcours de deux semaines, jour par jour. Pour chaque journée, indique la procédure étudiée, le geste que le technicien doit savoir faire le soir, le rôle du tuteur qui l'accompagne et la vérification qui prouve que le geste est acquis.\n\nPlace en première semaine tout ce que le rapport d'audit signale comme écart ou point de vigilance.\n\nTermine par la liste des questions que les sources ne permettent pas de trancher, avec pour chacune le document qu'il faudrait ajouter au carnet. N'invente aucune règle absente des sources et cite le passage exact pour chaque consigne de sécurité.",
      resultat: "Vous disposez d'un parcours daté dont chaque consigne renvoie à sa procédure, d'un guide d'étude par semaine, d'un quiz prêt à l'emploi et de la liste des trous documentaires à combler avant l'arrivée des techniciens. Faites relire les consignes de sécurité par la personne qui signe les procédures : la citation prouve que la phrase figure dans la source, et seul ce responsable peut confirmer que la source est à jour.",
    },
    pieges: [
      {
        titre: "Un fichier Drive supprimé reste compté dans le plafond",
        texte: "Quand un collègue supprime le fichier d'origine, ou vous retire le droit de le lire, la source devient inaccessible : le carnet ne la cite plus, ni dans le chat ni dans Studio, mais elle occupe toujours une place dans la limite de sources. Passez la liste en revue avant chaque usage important et retirez les entrées grisées.",
      },
      {
        titre: "Le lien vers la discussion laisse les sources accessibles",
        texte: "Partager un carnet par le lien qui ouvre la seule discussion donne une interface épurée, et Google précise que le lecteur garde l'accès aux sources et aux productions du Studio. Un document qu'un destinataire ne doit pas lire n'a donc pas sa place dans un carnet partagé avec lui.",
      },
      {
        titre: "Les régions de données ne couvrent pas le cache",
        texte: "L'aide aux administrateurs indique que Gemini Notebook garde en cache les fichiers de Drive pour répondre plus vite, et que les réglages de région de données de l'organisation ne s'appliquent pas à ce cache. Une entreprise tenue de conserver certains documents en Europe tranche la question avant d'autoriser leur dépôt dans un carnet.",
      },
      {
        titre: "Un avis donné depuis un compte personnel emporte le contenu",
        texte: "Sur un compte Google personnel, le pouce levé ou baissé transmet la question, les sources et la réponse à des équipes de relecture, détachées de votre identité et conservées jusqu'à trois ans. Pour un dossier client ou des données de salariés, travaillez dans le compte Workspace de l'entreprise, où un avis ne déclenche aucune relecture humaine.",
      },
    ],
  },
  audienceIntro: "La journée sert les professionnels qui passent une partie de leur semaine à chercher une réponse dans des documents déjà écrits.",
  audience: [
    {
      title: "Ressources humaines",
      desc: "Vous répondez souvent aux mêmes questions sur les congés, la mutuelle ou le télétravail. Vous apprenez à tenir un carnet des accords et du règlement intérieur dont chaque réponse cite l'article, puis à l'ouvrir en lecture aux managers.",
    },
    {
      title: "Formateurs et concepteurs pédagogiques",
      desc: "Vous transformez une documentation en séquences de cours. Vous apprenez à en tirer guide d'étude, flashcards, quiz réglé en difficulté et résumé audio, puis à corriger chaque production avant de la remettre aux stagiaires.",
    },
    {
      title: "Juristes",
      desc: "Vous travaillez sur des contrats, des décisions et des notes internes. Vous apprenez à faire relever une clause avec son passage cité, à cantonner une question à quelques pièces et à garder les dossiers sensibles dans un compte professionnel.",
    },
    {
      title: "Chefs de projet",
      desc: "Votre projet accumule cahier des charges, comptes rendus et avenants. Vous apprenez à en faire un carnet qui retrouve une décision avec sa date et sa source, puis à rédiger la note de passation d'un collègue qui reprend le dossier.",
    },
    {
      title: "Équipes qualité",
      desc: "Vous tenez manuel, procédures et rapports d'audit. Vous apprenez à interroger l'ensemble pour préparer un audit, débusquer deux versions contradictoires d'une même règle et former les nouveaux arrivants sur les bons documents.",
    },
    {
      title: "Consultants",
      desc: "Chaque mission ouvre un dossier de pièces confiées par le client. Vous apprenez à monter un carnet par mission, à extraire les constats sourcés de votre restitution et à choisir le compte qui respecte vos engagements de confidentialité.",
    },
  ],
  casUsageIntro: "Six usages reviennent dans les métiers qui vivent de documents de référence.",
  useCases: [
    { icon: '📁', title: "Un carnet par dossier", desc: "Pièces importées depuis Drive, versions contrôlées, sources rangées par étiquette de thème." },
    { icon: '💬', title: "Réponse citée", desc: "Chaque affirmation renvoie à son passage d'origine, ouvert d'un clic avant toute diffusion." },
    { icon: '🗺', title: "Carte mentale du dossier", desc: "Les thèmes couverts d'un coup d'œil, et les trous à combler avant de rédiger." },
    { icon: '✅', title: "Quiz et flashcards", desc: "Difficulté réglée, explication à la demande, révision des seules cartes manquées." },
    { icon: '🎙', title: "Résumé audio en français", desc: "Briefing d'une voix en moins de deux minutes, ou échange à deux voix sur une procédure." },
    { icon: '🔗', title: "Partage dans Workspace", desc: "Rôles Lecteur et Éditeur, copies permises ou non, sortie du domaine fixée par l'administrateur." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Monter un carnet sur un dossier réel",
      duration: '1h30',
      description: "Chaque participant arrive avec ses documents et repart avec un carnet en ordre.",
      items: [
        "Formats acceptés, 500 000 mots par source, transcription des vidéos YouTube",
        "Import depuis Drive, resynchronisation et droit de lecture exigé",
        "Plafonds de sources et de carnets selon le compte personnel ou Workspace",
        "Un carnet par question à traiter, étiquettes de thème dès cinq sources",
      ],
      exercise: "Vous constituez le carnet de votre dossier, puis retirez doublons et versions périmées.",
    },
    {
      day: 1,
      title: "Module 2 · Interroger le carnet et contrôler chaque citation",
      duration: '2h',
      description: "Obtenir une réponse exploitable, puis en apporter la preuve.",
      items: [
        "Questions ciblées sur quelques sources cochées",
        "Survol et ouverture des citations, réponse épinglée dans une note",
        "Styles Par défaut, Guide d'apprentissage et Personnalisé, longueur des réponses",
        "Le même carnet ouvert dans l'application Gemini : ce qui change dans la réponse",
      ],
      exercise: "Vous posez cinq questions de votre métier au carnet et vérifiez chaque citation dans le document source.",
    },
    {
      day: 1,
      title: "Module 3 · Produire guides, quiz et résumés depuis Studio",
      duration: '2h',
      description: "Faire du dossier des supports qu'un collègue lit, écoute ou révise.",
      items: [
        "Guide d'étude, questions fréquentes, document de synthèse et export vers Docs",
        "Carte mentale et nœuds transformés en questions",
        "Flashcards et quiz : difficulté, nombre, téléchargement en CSV",
        "Résumés audio en quatre formats, résumé vidéo explicatif en français",
      ],
      exercise: "Vous produisez le guide d'étude et le quiz d'une procédure, puis corrigez tout écart avec la source.",
    },
    {
      day: 1,
      title: "Module 4 · Partager, protéger et faire vivre les carnets",
      duration: '1h30',
      description: "Fixer les règles avant d'ouvrir un carnet à l'équipe.",
      items: [
        "Rôles Lecteur et Éditeur, lien de discussion, copies autorisées ou non",
        "Compte personnel ou Workspace : avis relus, entraînement, conditions applicables",
        "Partage hors du domaine et région de données : la part de l'administrateur",
        "Ajout automatique de sources par un flux Workspace Studio",
      ],
      exercise: "Vous écrivez la règle de tenue de votre carnet : qui ajoute, qui retire, à quel rythme on relit.",
    },
  ],
  objectives: [
    "Le participant sait constituer un carnet Gemini Notebook à partir de ses propres documents en respectant les plafonds de son compte.",
    "Le participant sait poser une question limitée à certaines sources et vérifier la citation qui appuie chaque affirmation.",
    "Le participant sait choisir le style de chat qui convient au lecteur, du guide d'apprentissage au rôle personnalisé.",
    "Le participant sait générer puis corriger un guide d'étude, un quiz et un résumé audio tirés du carnet.",
    "Le participant sait partager un carnet avec le bon rôle et expliquer comment Google traite les contenus d'un compte personnel et d'un compte Workspace.",
  ],
  tarifs: {
    titre: "Le prix de la journée, et la préparation sur vos documents en sus",
    paras: [
      "La journée en intra se facture dès 1 980 € HT pour le groupe entier, douze personnes au maximum ; à dix participants, la part de chacun ressort dès 198 € HT. Le même tarif de base s'applique à une personne seule en individuel. Si vous voulez que les exercices partent de vos propres dossiers, le formateur les lit, choisit les pièces et prépare les questions de contrôle : ce temps de préparation s'ajoute et figure au devis.",
      "Masteria est certifié Qualiopi. Pour des salariés, la demande va à l'OPCO de la branche, qui fixe seul sa prise en charge. Un consultant indépendant s'adresse au fonds d'assurance formation dont il relève, le FIF-PL pour une profession libérale ou l'AGEFICE pour un commerçant, dossier déposé avant le premier jour ; un président de SAS ne relève d'aucun de ces fonds, et l'OPCO de sa société n'intervient que s'il se verse une rémunération. Un organisme de formation de moins de 50 salariés rattaché à AKTO doit savoir que cet OPCO a suspendu pour 2026 le financement du plan de développement des compétences dans dix branches, dont celle des organismes de formation (brève du 22 septembre 2026). Le CPF ne s'applique pas, cette journée sur mesure ne menant à aucune certification.",
    ],
  },
  apres: {
    titre: "Après la journée, des carnets que l'équipe tient elle-même",
    texte: "Masteria peut ensuite aider un service à organiser ses carnets : la liste des dossiers qui en méritent un, la règle de dépôt et de retrait des versions, le flux Workspace Studio qui verse chaque semaine les nouveaux comptes rendus dans le bon carnet, puis la formation d'un référent qui veille sur l'ensemble. Le travail se fait dans votre domaine, avec vos réglages de partage, et chaque carnet reste entre les mains de l'équipe qui l'utilise.",
  },
  cta: {
    milieu: "Apportez un dossier que vous ouvrez chaque semaine : la journée en fait un carnet qui répond en citant ses pièces.",
    fin: {
      titre: "Préparons votre journée Gemini Notebook",
      texte: "Indiquez votre édition Google Workspace ou le type de compte utilisé, les métiers du groupe et deux dossiers sur lesquels vous voulez travailler : la réponse arrive avec un déroulé, des dates possibles et un chiffrage.",
    },
  },
  liensAssocies: [
    { label: "Gemini dans Google Workspace : la formation en deux jours", href: '/formation-gemini-entreprise' },
    { label: "L'IA au service des équipes pédagogiques", href: '/formation-ia-pedagogique' },
    { label: "Créer une formation avec Gemini, de l'objectif au quiz", href: '/blog/creer-une-formation-avec-gemini' },
    { label: "Revue de presse et prises de parole avec Gemini", href: '/formation-gemini-communication' },
    { label: "Formations IA gratuites : ce qu'elles couvrent, ce qu'elles laissent de côté", href: '/blog/formation-ia-gratuite-comparatif-realite' },
    { label: "Données de l'entreprise et RGPD face aux outils d'IA", href: '/ia-et-rgpd' },
  ],
  avisPriorite: ['Gemini', 'NotebookLM', 'Google', 'source'],
  faq: [
    {
      q: "NotebookLM, c'est quoi ?",
      a: "NotebookLM, renommé Gemini Notebook le 16 juillet 2026, est l'outil de Google qui répond à partir des seuls documents déposés dans un carnet et cite le passage d'où vient chaque réponse. Il en tire aussi des guides d'étude, des quiz, des cartes mentales et des résumés audio ou vidéo. Il fonctionne avec un compte Google personnel ou un compte Workspace, dont les règles de confidentialité diffèrent.",
    },
    {
      q: "NotebookLM et Gemini Notebook, est-ce le même outil ?",
      a: "Oui. Google a renommé NotebookLM en Gemini Notebook le 16 juillet 2026 et l'outil reste une application autonome, à l'adresse notebook.google.com. Les carnets existants et leurs liens de partage continuent de fonctionner grâce à des redirections automatiques, sans action de l'administrateur. Les mêmes carnets s'ouvrent désormais aussi depuis l'application Gemini.",
    },
    {
      q: "Existe-t-il une formation gratuite à NotebookLM ?",
      a: "Gemini Notebook lui-même est gratuit avec un compte Google personnel, à raison de 50 sources par carnet, et Google publie en français un centre d'aide qui décrit chaque fonction. La journée Masteria est payante. Pour un salarié, le reste à charge dépend de la décision de l'OPCO de la branche, saisi grâce à la certification Qualiopi de Masteria. Un tutoriel en ligne montre les boutons ; la journée travaille sur vos dossiers et sur le compte dont votre équipe se sert.",
    },
    {
      q: "Combien de documents un carnet peut-il contenir ?",
      a: "Au 22 octobre 2026, 50 sources par carnet sur un compte personnel gratuit, 300 sur Business Standard, Business Plus, Enterprise Standard et Enterprise Plus, 400 avec le module AI Expanded Access ; Business Starter dispose d'un palier plus bas, que la console d'administration indique. Chaque source peut atteindre 500 000 mots ou 200 Mo. Google présente ces plafonds comme révisables : la journée commence par les relever sur votre compte.",
    },
    {
      q: "Google utilise-t-il nos documents pour entraîner ses modèles ?",
      a: "Sur un compte Workspace, non : les conditions de Google Cloud s'appliquent, et ni les fichiers, ni les questions, ni les réponses ne sont relus par des humains ou utilisés pour entraîner un modèle, même après un avis. Sur un compte personnel, le contenu ne sert pas à entraîner directement les modèles, mais un avis envoyé par le pouce transmet la discussion à des relecteurs qui la conservent jusqu'à trois ans.",
    },
    {
      q: "Peut-on partager un carnet avec un client ou un stagiaire extérieur ?",
      a: "Sur Workspace, cela dépend du réglage choisi par l'administrateur : aucun partage externe, partage vers une liste de domaines autorisés, ou partage vers toute adresse. Un compte Gmail personnel partage avec 50 personnes au plus. Dans tous les cas, un destinataire en Lecteur peut consulter les sources : n'y laissez que ce qu'il a le droit de lire.",
    },
    {
      q: "Les résumés audio et vidéo existent-ils en français ?",
      a: "Le résumé audio se génère dans plus de 80 langues, dont le français, en quatre formats : Analyse approfondie, Briefing, Critique et Débat. Le mode interactif, qui permet d'interrompre les voix, reste en anglais. Côté vidéo, le format Explicatif existe en français européen, le format Court dure une soixantaine de secondes, et le format Cinématique ne sort qu'en anglais.",
    },
    {
      q: "Un juriste peut-il se fier aux réponses de Gemini Notebook ?",
      a: "Il peut s'en servir pour retrouver vite une clause ou une décision dans ses pièces, en ouvrant la citation à chaque fois. Google écrit lui-même qu'il ne faut pas compter sur Gemini Notebook pour un conseil juridique, médical ou financier. La citation montre que la phrase figure dans le document ; la version en vigueur d'un texte se contrôle sur Légifrance ou dans votre base documentaire.",
    },
    {
      q: "Quelle différence avec la formation Gemini en deux jours ?",
      a: "La formation Gemini en deux jours couvre Gemini dans Gmail, Docs, Sheets, Meet et Workspace Studio, sur un compte Workspace. Cette journée se concentre sur Gemini Notebook et fonctionne aussi avec un compte personnel ; elle convient à une équipe qui doit d'abord apprendre à exploiter ses documents de référence avant d'aller plus loin.",
    },
  ],
  sources: [
    { name: "Google, blog officiel : NotebookLM devient Gemini Notebook (16 juillet 2026)", url: 'https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/' },
    { name: "Google Workspace Updates : nouveau nom, redirections et calendrier de déploiement (16 juillet 2026)", url: 'https://workspaceupdates.googleblog.com/2026/07/notebooklm-now-gemini-notebook.html' },
    { name: "Aide administrateur Workspace : éditions, plafonds par niveau d'accès, cache et certifications (mise à jour du 20 octobre 2026)", url: 'https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/turn-gemini-notebook-on-or-off-for-users' },
    { name: "Aide administrateur Workspace : partage des carnets hors de l'organisation", url: 'https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/manage-gemini-notebook-sharing-settings' },
    { name: "Aide Gemini Notebook : types de sources, taille maximale, synchronisation avec Drive", url: 'https://support.google.com/gemininotebook/answer/16215270?hl=fr' },
    { name: "Aide Gemini Notebook : rapports, rôles Lecteur et Éditeur, copies et analyses d'un carnet", url: 'https://support.google.com/gemininotebook/answer/16206563?hl=fr' },
    { name: "Aide Gemini Notebook : styles de conversation du chat et citations", url: 'https://support.google.com/gemininotebook/answer/16179559?hl=fr' },
    { name: "Aide Gemini Notebook : formats et langues des résumés audio", url: 'https://support.google.com/gemininotebook/answer/16212820?hl=fr' },
    { name: "Aide Gemini Notebook : formats, styles et langues des résumés vidéo", url: 'https://support.google.com/gemininotebook/answer/16454555?hl=fr' },
    { name: "Aide Gemini Notebook : réglages des flashcards et des quiz", url: 'https://support.google.com/gemininotebook/answer/16958963?hl=fr' },
    { name: "Aide Gemini Notebook : avis, relecture humaine et conditions selon le compte", url: 'https://support.google.com/gemininotebook/answer/17004255?hl=fr' },
    { name: "Aide Gemini Notebook : plafonds des comptes personnels et des offres Google AI", url: 'https://support.google.com/gemininotebook/answer/16213268?hl=fr' },
    { name: "Google Workspace Updates : étape Workspace Studio qui ajoute des sources à un carnet (7 août 2026)", url: 'https://workspaceupdates.googleblog.com/2026/08/automatically-add-sources-to-your-Gemini-Notebooks-in-Workspace-Studio.html' },
    { name: "AKTO : suspension du financement du plan de développement des compétences des moins de 50 salariés (22 septembre 2026)", url: 'https://www.akto.fr/breve/entreprises-moins-50-salaries-suspension-financement-formations-pdc/' },
  ],
}
