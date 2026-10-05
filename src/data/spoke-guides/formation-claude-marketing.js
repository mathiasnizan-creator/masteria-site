// Contenu propre à /formation-claude-marketing (guide terrain, page propre). Rendu par SpokePage.
// Faits Claude vérifiés le 5 octobre 2026 : claude-facts.js, faits-claude.md, sources-metiers.json,
// centre d'aide et documentation d'Anthropic (liens dans `sources`). Le bloc `terrain` résume
// la mission anonymisée `immobilier-etudes` (missions-formation.js).
export default {
  slug: 'formation-claude-marketing',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  metaDesc: "Formation Claude pour le marketing : corpus d'entretiens analysés en entier, ton de marque dans un projet, recherche sourcée, slides PowerPoint.",
  resume: "La formation Claude pour le marketing apprend à confier à Claude l'analyse d'un corpus d'entretiens entier, à fixer le ton de la marque, à mener une recherche documentée et à livrer la présentation en PowerPoint. Deux jours (14 heures), sur site ou en ligne, réunissent jusqu'à douze personnes, ou une seule, au prix journalier de 1 980 € HT, et Masteria, certifié Qualiopi, prépare la demande que votre OPCO examinera selon sa branche.",
  enBref: [
    { label: 'Formation', value: "Claude pour le marketing, les études et la production de contenus" },
    { label: 'Durée', value: "Deux jours de sept heures, à caler de préférence avant une restitution d'étude ou un lancement" },
    { label: 'Formats', value: "Jusqu'à douze collègues réunis en intra, ou une séance individuelle ; dans vos bureaux comme en ligne" },
    { label: 'Tarif', value: "1 980 € HT pour chaque jour de formation, à partager entre douze participants au maximum" },
    { label: 'Financement', value: "Dossier de prise en charge préparé avec vous pour votre OPCO ; Masteria est certifié Qualiopi" },
    { label: 'Prérequis', value: "Un abonnement payant à Claude, de préférence Team ou Enterprise afin de partager le projet de marque et les compétences" },
  ],
  intro: "Une équipe marketing accumule plus de matière qu'elle n'en lit : vingt entretiens clients transcrits, des centaines de réponses ouvertes d'enquête, un guide éditorial que chacun interprète à sa façon. Claude peut lire tout un corpus dans une seule conversation, conserver dans un projet partagé la voix de la marque, conduire une recherche documentée sur le web et livrer la présentation au format PowerPoint. Ce guide montre comment enchaîner ces fonctions sans perdre la trace des sources, de l'entretien cité jusqu'à la slide présentée au comité.",
  guide: {
    kicker: "Guide terrain",
    h2: "Le corpus d'entretiens se lit en entier, et chaque slide remonte à un verbatim",
    lead: "Une étude qualitative s'appauvrit à chaque résumé intermédiaire, jusqu'au jour où la slide finale ne garde plus rien de la voix des clients. Claude peut lire les vingt transcriptions d'une étude dans la même conversation et rattacher chaque enseignement aux passages qui le fondent. La méthode de ce guide tient ce fil jusqu'au bout, avec le ton de la marque fixé une fois pour toutes et la présentation montée dans le gabarit maison.",
    sections: [
      {
        h3: "Toutes les transcriptions d'une étude tiennent dans le même échange",
        paras: [
          "Un abonné payant dispose, avec les modèles actuels, d'une capacité de lecture fixée à un million de tokens, ces petites portions de mots avec lesquelles le modèle découpe et compte le texte. À titre de repère, Anthropic associe 200 000 tokens à 500 pages environ. Les transcriptions d'une étude de vingt entretiens d'une heure restent bien en deçà. Lu d'un seul tenant, le corpus autorise ce qu'un échantillon interdit : compter combien d'entretiens évoquent un frein, citer chaque verbatim avec l'identifiant de l'entretien, repérer le participant qui contredit tous les autres.",
          "Un projet suit une autre logique. Quand ses fichiers approchent la capacité du contexte, Claude n'y lit plus tout et se contente d'y rechercher des passages (le mode RAG), ce qu'un témoin affiche dans le projet. Gardez donc le corpus dans la conversation d'analyse, et le projet pour ce qui doit servir à chaque fois : guide éditorial, plateforme de marque, études antérieures.",
          "Si les transcriptions sont rangées sur votre poste, Cowork, qui permet à Claude de conduire seul une tâche en plusieurs étapes, peut les ouvrir sur place depuis l'application de bureau, sans téléversement manuel, dans la limite des dossiers que vous lui avez confiés.",
        ],
      },
      {
        h3: "Le ton de la marque se règle dans un projet, puis voyage dans une compétence",
        paras: [
          "Avec Team ou Enterprise, un projet partagé conserve les instructions et les fichiers que Claude consulte à chaque conversation : guide éditorial, plateforme de marque, lexique des mots admis et proscrits, dix contenus validés qui servent d'exemples. Les instructions fixent le registre, la longueur des phrases et le traitement des chiffres ; chaque membre de l'équipe reçoit un droit de lecture ou de modification.",
          "Une compétence de ton (Skill : un ensemble de consignes rangé dans un dossier, que Claude charge quand la demande s'y rapporte) va plus loin que le projet. Elle s'applique dans la conversation, dans Cowork et dans les compléments Word, PowerPoint et Excel, partout où la rédaction se poursuit. Anthropic cite lui-même, parmi les usages types d'une compétence, l'application d'une charte de marque aux documents et aux présentations.",
          "Selon Anthropic, qui l'a lancé le 22 septembre 2026, Claude Opus 5.5 ouvre ses textes par l'essentiel, recourt moins souvent au jargon et se conforme aux règles de style qu'on lui transmet. Un guide éditorial rédigé sous forme de règles vérifiables tire parti de cette capacité. Une compétence de ton contient en général :",
        ],
        list: [
          "Les mots de la marque, et ceux qu'elle n'emploie jamais",
          "La structure type d'un article, d'une page produit, d'un courriel",
          "Trois paragraphes validés, chacun accompagné de ce qui le rend conforme",
          "Les vérifications avant livraison : chiffres sourcés, promesses autorisées, mentions légales",
        ],
      },
      {
        h3: "La recherche approfondie rapporte des sources que l'équipe ouvre une à une",
        paras: [
          "Disponible sur les seuls abonnements payants, la fonction Research de Claude, sa recherche approfondie, mène des recherches en chaîne sur le web et dans vos outils connectés, chacune orientée par le résultat de la précédente. Au bout de quelques minutes, elle remet un rapport dont chaque affirmation porte sa citation. Il faut avoir activé la recherche sur le web, puis choisir Research dans le menu du bouton +.",
          "Pour une étude de marché, cadrez la demande comme un brief d'institut : périmètre géographique, période, sources admises, décision que la réponse doit éclairer. Exigez pour chaque chiffre l'auteur, la date de publication et la méthode, puis ouvrez les liens des chiffres qui entreront dans un document de direction.",
          "La recherche se combine avec le corpus. Une fois les enseignements de l'étude établis, Claude peut chercher ce que publient les concurrents sur les mêmes irritants, en séparant dans son rapport ce qui vient de vos clients et ce qui vient du marché.",
        ],
      },
      {
        h3: "La présentation sort au format PowerPoint, dans le gabarit de l'entreprise",
        paras: [
          "Trois chemins mènent à un fichier PowerPoint. Dans une conversation, l'exécution de code fabrique un .pptx à télécharger, quelle que soit l'offre. Claude pour PowerPoint, complément des abonnements payants, travaille dans votre fichier : il s'appuie sur le masque du gabarit, ses polices et sa palette, retouche la diapositive sélectionnée sans toucher aux autres et convertit une liste à puces en diagramme ou en graphique PowerPoint modifiable. Claude Slides, lancé le 16 septembre 2026 et proposé en bêta aux abonnements payants, construit la présentation dans Claude ; vous la projetez depuis Claude ou la téléchargez en PowerPoint ou en PDF.",
          "Depuis le 17 juin 2026, Claude Design bâtit visuels, maquettes et présentations avec les composants de la charte graphique importée, contrôle chaque production au regard de cette charte avant de l'afficher, et un administrateur peut verrouiller la charte validée pour toute l'équipe. Les fichiers s'exportent au format PDF, PowerPoint ou HTML. L'outil est en bêta : actif par défaut sur Pro, Max et Team, il attend sur Enterprise qu'un administrateur l'ouvre.",
          "Photos et illustrations ne font pas partie de ce que Claude génère, contrairement aux outils spécialisés dans l'image. Il trace en revanche diagrammes, graphiques et visuels interactifs en HTML ou en SVG, un format d'image vectorielle ; les visuels de campagne restent l'affaire de vos outils de création.",
        ],
      },
    ],
    table: {
      caption: "De l'étude au comité : quelle fonction de Claude, quelle vérification",
      headers: ["Livrable marketing", "Fonction de Claude", "Vérification avant diffusion"],
      rows: [
        ["Synthèse d'une étude qualitative", "Conversation qui contient toutes les transcriptions", "Chaque verbatim retrouvé mot pour mot dans sa transcription"],
        ["Décompte des thèmes", "Exécution de code sur le tableau de codage exporté", "Total des entretiens égal au nombre de transcriptions"],
        ["Article ou page dans le ton maison", "Projet partagé et compétence de ton", "Relecture par la personne qui tient le guide éditorial"],
        ["Étude de marché documentée", "Recherche approfondie, web et outils connectés", "Auteur, date et méthode de chaque chiffre repris"],
        ["Présentation au comité", "Complément PowerPoint, sur le masque des diapositives maison", "Chaque chiffre de slide présent dans la synthèse validée"],
        ["Maquette ou support visuel", "Claude Design avec la charte importée", "Logo, couleurs et mentions validés par la marque"],
      ],
    },
    cas: {
      h3: "Cas pratique : de dix-huit entretiens de clients partis au comité marketing de mardi",
      contexte: "Prenons la responsable des études d'une société qui édite un logiciel de paie pour PME. Un institut a mené dix-huit entretiens d'une heure avec des clients qui ont résilié leur abonnement dans l'année ; les transcriptions sont arrivées vendredi au format Word, et le comité marketing de mardi attend une synthèse et six slides pour choisir la prochaine campagne de fidélisation.",
      etapes: [
        "Remplacez dans chaque transcription le nom du participant et celui de son entreprise par un identifiant (E01 à E18), et retirez les coordonnées.",
        "Dans le projet de la marque, démarrez une conversation, déposez les dix-huit transcriptions et la grille d'entretien de l'institut, puis saisissez le prompt de cette page.",
        "Ouvrez trois verbatims au hasard dans les transcriptions pour vérifier qu'ils sont cités mot pour mot.",
        "Montez les six slides avec Claude pour PowerPoint, gabarit maison ouvert et synthèse validée sous les yeux.",
        "Faites relire la synthèse par l'institut, qui a mené les entretiens, avant le comité.",
      ],
      prompt: "Je présente mardi au comité marketing les enseignements d'une étude qualitative sur les clients qui ont résilié leur abonnement dans l'année. Les pièces jointes contiennent dix-huit transcriptions d'entretiens anonymisées (E01 à E18) et la grille d'entretien de l'institut.\n\nAvant toute réponse, lis chaque transcription jusqu'au bout.\n\n1. Raisons de départ : liste chaque raison évoquée, avec le nombre d'entretiens concernés et leurs identifiants. Ne compte un entretien qu'une fois par raison.\n\n2. Verbatims : pour chaque raison, deux citations exactes au plus, entre guillemets, avec l'identifiant de l'entretien. Ne reformule jamais une citation.\n\n3. Parcours : situe chaque raison dans le parcours client (souscription, paramétrage, première paie, support, renouvellement).\n\n4. Voix discordantes : signale les entretiens qui contredisent la tendance générale.\n\n5. Limites : indique ce que l'étude ne permet pas de conclure, vu la taille de l'échantillon.\n\nRédige ensuite une synthèse de deux pages dans le ton défini par les instructions du projet. Chaque affirmation renvoie aux identifiants des entretiens qui la fondent. N'ajoute aucune donnée extérieure à l'étude.",
      resultat: "Vous disposez d'un tableau des raisons de départ avec leurs décomptes, des verbatims exacts rattachés à leur entretien, de la place de chaque raison dans le parcours, des voix discordantes et des limites de l'étude, puis d'une synthèse rédigée selon les règles éditoriales du projet. Avant le comité, vérifiez que les identifiants couvrent bien les dix-huit entretiens, retrouvez quelques citations dans les transcriptions et faites valider la section des limites par l'institut. Une raison citée par deux clients sur dix-huit reste une piste à explorer, et la synthèse doit l'écrire.",
    },
    pieges: [
      {
        titre: "Une citation lissée passe pour la parole du client",
        texte: "Pour illustrer un thème, Claude peut rendre lisible une phrase orale en effaçant hésitations et répétitions. Placée entre guillemets, cette version retouchée passe pour un verbatim. Exigez des citations exactes avec l'identifiant de l'entretien, et retrouvez chacune par une recherche dans la transcription avant de la poser sur une slide.",
      },
      {
        titre: "Un verbatim d'étude retouché devient un avis client trompeur",
        texte: "Le code de la consommation répute trompeur le fait de diffuser de fausses recommandations de consommateurs ou de retoucher des avis dans un but promotionnel (article L121-4, 28°). Un extrait d'entretien reformulé puis repris dans une publicité expose la marque à ce grief. Une campagne qui cite des clients s'appuie sur des avis publiés tels quels, dont la provenance a été vérifiée.",
      },
      {
        titre: "Le guide de marque reste dans le projet pendant que le deck se monte dans PowerPoint",
        texte: "Les instructions d'un projet ne valent que pour les conversations de ce projet, et Claude pour PowerPoint possède son propre champ de consignes. Une présentation construite dans le complément ignore donc le guide éditorial du projet. Rangez le ton dans une compétence, que Claude applique aussi dans les compléments Office, ou recopiez l'essentiel dans les consignes du complément.",
      },
      {
        titre: "Un chiffre de marché sans date se glisse dans la présentation",
        texte: "La recherche approfondie remonte volontiers le chiffre le plus repris en ligne, qui peut dater de plusieurs années ou provenir d'un communiqué commercial. Faites indiquer pour chaque chiffre l'auteur, la date de publication, la période mesurée et la méthode, et écartez ceux qui n'en ont pas.",
      },
    ],
  },
  audience: [
    {
      title: "Directions marketing et chefs de produit",
      desc: "Vous transformez études, retours clients et données de marché en décisions et en présentations. Vous apprenez à confier un corpus entier à Claude en gardant chaque enseignement relié à sa source.",
    },
    {
      title: "Chargés d'études et responsables de l'expérience client",
      desc: "Vous menez ou commandez des entretiens, des questionnaires ouverts et des analyses d'avis. Vous apprenez à faire coder un corpus, à compter par entretien et à citer à la lettre.",
    },
    {
      title: "Responsables de contenu et de marque",
      desc: "Le guide éditorial et la cohérence du ton relèvent de vous. Vous apprenez à inscrire ce ton dans un projet puis dans une compétence partagée par tous, PowerPoint compris.",
    },
  ],
  useCases: [
    {
      icon: '🎙️',
      title: "Corpus d'entretiens lu en entier",
      desc: "Toutes les transcriptions d'une étude dans une conversation, chaque thème compté par entretien.",
    },
    {
      icon: '💬',
      title: "Verbatims cités à la lettre",
      desc: "Des citations exactes rattachées à l'identifiant de l'entretien, prêtes à être vérifiées.",
    },
    {
      icon: '🧭',
      title: "Ton de marque commun",
      desc: "Guide éditorial rangé dans un projet, compétence de ton disponible jusque dans Word et PowerPoint.",
    },
    {
      icon: '🔎',
      title: "Études de marché sourcées",
      desc: "Recherche approfondie sur le web et dans vos outils connectés, chaque chiffre accompagné de sa source.",
    },
    {
      icon: '📊',
      title: "Présentations PowerPoint",
      desc: "Diapositives bâties sur le masque maison, avec des graphiques natifs que l'équipe retouche.",
    },
    {
      icon: '🎨',
      title: "Supports fidèles à la charte",
      desc: "Maquettes et visuels dans Claude Design, charte importée puis verrouillée par l'administrateur.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Situer Claude dans le travail marketing",
      duration: "1h30",
      description: "Savoir où chaque tâche marketing se traite dans Claude.",
      items: [
        "Capacité de lecture d'un million de tokens : la place d'un corpus d'étude",
        "Conversation, projet, compétence : où ranger quoi",
        "Ce que Claude produit, textes, fichiers et schémas, et ce qu'il laisse aux outils de création",
        "Données des participants et paramètres de l'organisation",
      ],
      exercise: "Vous classez dix tâches de votre équipe selon l'endroit où elles se traitent dans Claude : conversation, projet, compétence ou complément Office.",
    },
    {
      day: 1,
      title: "Module 2 · Analyser un corpus d'entretiens",
      duration: "2h",
      description: "Tirer d'une étude qualitative des enseignements rattachés à leurs verbatims.",
      items: [
        "Anonymiser les transcriptions avant le dépôt",
        "Coder les thèmes et compter par entretien",
        "Citer mot pour mot, identifiant de l'entretien à l'appui",
        "Repérer les voix discordantes et les limites de l'échantillon",
      ],
      exercise: "Vous analysez un lot de vos entretiens ou de vos réponses ouvertes, puis retrouvez trois verbatims dans les sources.",
    },
    {
      day: 1,
      title: "Module 3 · Passer des verbatims aux chiffres",
      duration: "2h",
      description: "Compter juste avant de montrer un graphique au comité.",
      items: [
        "Tableau de codage exporté vers Excel",
        "Décomptes et croisements confiés à l'exécution de code",
        "Avis en ligne et réponses ouvertes : volumes, doublons, dates",
        "Graphiques et tableaux dont le calcul se relit",
      ],
      exercise: "Vous faites compter par le code les thèmes d'un export de réponses ouvertes, puis contrôlez le total.",
    },
    {
      day: 1,
      title: "Module 4 · Fixer le ton de la marque",
      duration: "1h30",
      description: "Écrire une fois les règles éditoriales que toute l'équipe appliquera.",
      items: [
        "Projet partagé : guide éditorial, plateforme de marque, contenus de référence",
        "Instructions du projet : registre, phrases, chiffres, mots proscrits",
        "Compétence de ton, utilisable dans les compléments Office",
        "Essai sur trois formats : article, page produit, courriel",
      ],
      exercise: "Vous créez le projet de votre marque et sa compétence de ton, puis les essayez sur un contenu à réécrire.",
    },
    {
      day: 2,
      title: "Module 5 · Mener une recherche approfondie",
      duration: "1h30",
      description: "Obtenir un rapport de marché dont chaque chiffre se vérifie.",
      items: [
        "Cadrer la question : périmètre, période, sources admises",
        "Lancer la recherche et lire le rapport",
        "Auteur, date et méthode derrière chaque chiffre",
        "Croiser le marché avec votre propre étude",
      ],
      exercise: "Vous lancez une recherche approfondie sur un marché que vous connaissez bien et contrôlez ses cinq chiffres principaux.",
    },
    {
      day: 2,
      title: "Module 6 · Construire la présentation dans PowerPoint",
      duration: "2h",
      description: "Passer de la synthèse validée aux slides du comité sans recopier un chiffre à la main.",
      items: [
        "Fichier .pptx créé dans la conversation",
        "Claude pour PowerPoint : masque, mises en page, graphiques natifs",
        "Claude Slides en bêta : création dans Claude, export PowerPoint ou PDF",
        "Une idée par slide, un titre qui affirme",
      ],
      exercise: "Vous construisez, dans le gabarit PowerPoint de votre société, les six slides de restitution de votre étude.",
    },
    {
      day: 2,
      title: "Module 7 · Produire des supports conformes à la charte",
      duration: "2h",
      description: "Confier à Claude Design la mise en forme, et laisser la validation à la marque.",
      items: [
        "Claude Design : import de la charte, contrôle avant affichage",
        "Verrouillage de la charte par un administrateur",
        "Exports PDF, PowerPoint et HTML",
        "Photos et illustrations : ce qui reste aux outils de création",
      ],
      exercise: "Vous produisez dans Claude Design un support d'une page conforme à votre charte, puis le soumettez à la personne qui tient la marque.",
    },
    {
      day: 2,
      title: "Module 8 · Organiser l'usage dans l'équipe marketing",
      duration: "1h30",
      description: "Décider qui tient le projet, qui écrit les compétences et qui valide ce qui sort.",
      items: [
        "Rôles : gardien du projet, auteurs des compétences, relecteurs",
        "Verbatims d'étude et communication : accord, anonymat, avis clients",
        "Données personnelles des participants et durée de conservation",
        "Mention du recours à Claude, quand la marque en a décidé ainsi",
      ],
      exercise: "Vous écrivez la charte d'équipe marketing pour Claude, du dépôt des transcriptions à la diffusion des slides.",
    },
  ],
  objectives: [
    "Le participant sait déposer un corpus d'entretiens anonymisé et obtenir un décompte des thèmes par entretien.",
    "Le participant sait faire citer des verbatims mot pour mot et les retrouver dans les transcriptions.",
    "Le participant sait traduire la charte éditoriale en instructions de projet et en compétence de ton.",
    "Le participant sait lancer une recherche approfondie et vérifier l'auteur, la date et la méthode d'un chiffre.",
    "Le participant sait faire produire par Claude une présentation conforme au gabarit PowerPoint de la société.",
    "Le participant sait expliquer pourquoi un verbatim d'étude retouché ne peut pas servir d'avis client dans une campagne.",
  ],
  faq: [
    {
      q: "Claude peut-il analyser toutes nos transcriptions d'entretiens en une fois ?",
      a: "Oui, avec un abonnement payant, si l'ensemble reste sous la barre du million de tokens et qu'aucun fichier ne dépasse 30 Mo. Gardez les transcriptions dans la conversation d'analyse, car un projet trop garni consulte ses fichiers par extraits et ne relit plus chaque entretien.",
    },
    {
      q: "Claude crée-t-il les visuels de nos campagnes ?",
      a: "Pas pour la photo ni l'illustration : Anthropic précise que Claude n'en génère pas à la manière des outils d'images. Il trace en revanche diagrammes et graphiques, et Claude Design compose maquettes et présentations aux couleurs de votre charte. Les images de campagne se font dans vos outils de création.",
    },
    {
      q: "Comment faire respecter notre ton de marque par toute l'équipe ?",
      a: "Par un projet partagé, dont les instructions et les fichiers servent à chaque conversation, et par une compétence de ton, qui s'applique aussi dans Word et PowerPoint. Avec Team ou Enterprise, son auteur la partage à des collègues nommés ou la publie pour l'organisation entière.",
    },
    {
      q: "La recherche approfondie remplace-t-elle un institut d'études ?",
      a: "Elle remplace une partie de la recherche documentaire : elle compile en quelques minutes des sources publiques et vos documents connectés, avec leurs liens. Elle ne mène ni entretien ni enquête, et la qualité du rapport dépend des sources disponibles en ligne.",
    },
    {
      q: "Les propos de nos clients interviewés peuvent-ils servir à entraîner Claude ?",
      a: "Chez Team et Enterprise, l'entraînement ne porte pas, par défaut, sur vos conversations, sauf celles qu'un collègue signale par l'icône du pouce. Les comptes individuels relèvent du choix de leur titulaire. Anonymisez dans tous les cas les transcriptions avant le dépôt.",
    },
    {
      q: "Que faire des réponses ouvertes d'un questionnaire de satisfaction ?",
      a: "Exportez-les en CSV ou en Excel, sans les colonnes de nom et d'adresse. Claude propose une grille de thèmes, que vous corrigez, puis l'exécution de code compte les réponses par thème et par période ; chaque thème est illustré par des réponses citées à la lettre, que vous retrouvez dans le fichier.",
    },
    {
      q: "Les exercices portent-ils sur nos propres études ?",
      a: "Oui : vos transcriptions, vos exports d'avis ou de questionnaires, votre guide éditorial et votre modèle PowerPoint servent de matière aux ateliers, anonymisés si votre règle interne l'exige.",
    },
    {
      q: "Comment une équipe marketing finance-t-elle ces deux jours ?",
      a: "L'OPCO dont dépend l'entreprise peut prendre ces deux jours en charge : il instruit la demande d'après les règles de la branche, et Masteria remplit la condition de certification Qualiopi. Le prix ne dépend pas de l'effectif : le même forfait de 1 980 € HT s'applique chaque jour à six, dix ou douze collègues, comme à une personne seule. Masteria rédige avec vous la convention et le programme détaillé.",
    },
  ],
  tarifs: {
    titre: "Ce que couvre le tarif pour une équipe marketing",
    paras: [
      "Le tarif comprend la préparation sur vos supports : le formateur reçoit à l'avance votre guide éditorial, votre modèle PowerPoint et un lot d'entretiens ou de réponses ouvertes anonymisés, et il bâtit les exercices sur cette matière. Le projet de marque et la compétence de ton construits en séance demeurent dans votre espace Claude.",
      "Exemple chiffré : un service marketing inscrit sa directrice, deux chefs de produit, une chargée d'études, une responsable de contenu et un graphiste. Pour ces six personnes, deux journées en intra coûtent au total 3 960 € HT, ce qui ramène la dépense à 660 € HT par personne. Une personne accompagnée seule règle chaque journée 1 980 € HT. Puisque Masteria détient la certification Qualiopi, un financement de votre OPCO reste possible, accordé selon les barèmes et les critères propres à sa branche, sur un dossier que nous constituons avec vous.",
    ],
  },
  apres: {
    titre: "Après la formation, un outil d'analyse ou de rédaction à votre main",
    texte: "Masteria peut ensuite construire pour votre équipe marketing un outil sur mesure : un assistant d'analyse d'études qui code vos verbatims selon votre propre grille et tient le décompte par entretien, une compétence de ton validée par la marque et distribuée à toute l'équipe, ou un agent de veille qui rédige à chaque fin de mois la note concurrentielle, sources à l'appui, à partir des sites et des publications que vous lui désignez. Chaque outil suit vos règles : données anonymisées, citations vérifiables, validation par la marque avant publication.",
  },
  cta: {
    milieu: "Envoyez-nous votre guide éditorial et un extrait d'étude : nous bâtissons les deux jours sur votre matière.",
    fin: {
      titre: "Partons de votre prochaine étude ou de votre prochain lancement",
      texte: "Décrivez-nous les études, les contenus et les présentations que votre équipe produit, ainsi que l'abonnement Claude utilisé. Nous vous envoyons un programme construit sur vos supports et des dates de session.",
    },
  },
  terrain: {
    titre: "Sur le terrain : de l'analyse des ventes au deck de direction",
    texte: "En septembre 2026, un groupe immobilier a fait former par Masteria, en individuel, le temps d'une journée en visioconférence, la personne qui conduit les analyses de sa direction marketing et études. Elle utilisait jusque-là le compte Claude Team de l'entreprise de façon ponctuelle et voulait en faire une méthode, de l'analyse jusqu'au support de présentation. La journée était organisée pour aboutir à des graphiques commentés, puis à un deck de résultats généré pour PowerPoint. Au programme aussi : le réglage du compte, un projet « Études et données » doté de consignes permanentes et le kit de marque importé dans Claude Design.",
    lien: '/etudes-de-cas-ia#mission-immobilier-etudes',
  },
  liensAssocies: [
    { label: "Formation IA marketing, avec tous les assistants du marché", href: '/formation-ia-marketing' },
    { label: "Ce que les équipes marketing changent après une formation IA", href: '/blog/formation-ia-marketing-equipes' },
    { label: "Organiser sa veille concurrentielle avec l'IA", href: '/formation-ia-veille' },
    { label: "Agence IA pour les directions marketing", href: '/agence-ia-marketing' },
  ],
  avisPriorite: ['Claude', 'marketing', 'contenu|éditorial|marque'],
  sources: [
    { name: "Anthropic : Claude Design applique la charte de la marque (17 juin 2026)", url: "https://claude.com/blog/claude-design-stays-on-brand-for-daily-work" },
    { name: "Aide Claude : ce que Claude produit en matière d'images", url: "https://support.claude.com/en/articles/9002504-can-claude-produce-images" },
    { name: "Aide Claude : la recherche approfondie (Research)", url: "https://support.claude.com/en/articles/11088861-use-research-on-claude" },
    { name: "Documentation Anthropic : Claude pour PowerPoint", url: "https://claude.com/docs/office-agents/powerpoint" },
    { name: "Aide Claude : à quoi servent les compétences", url: "https://support.claude.com/en/articles/12512176-what-are-skills" },
    { name: "Aide Claude : projets partagés et mode RAG", url: "https://support.claude.com/en/articles/9517075-what-are-projects" },
    { name: "Anthropic : page de lancement d'Opus 5.5, écriture et consignes", url: "https://www.anthropic.com/claude-opus-5-5" },
    { name: "Code de la consommation, article L121-4 (Légifrance)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107" },
  ],
}
