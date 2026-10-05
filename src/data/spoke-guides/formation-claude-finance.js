// Contenu propre à /formation-claude-finance (guide terrain, page propre). Rendu par SpokePage.
// Faits Claude vérifiés le 5 octobre 2026 : claude-facts.js, faits-claude.md, sources-metiers.json,
// centre d'aide et documentation d'Anthropic (liens dans `sources`).
export default {
  slug: 'formation-claude-finance',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  metaDesc: "Formation Claude pour la finance : rapports annuels lus en entier, calculs par le code ou dans Excel, projets de clôture, règles des sociétés cotées.",
  resume: "La formation Claude pour la finance apprend à une direction financière à confier à Claude ses dossiers et ses calculs sans perdre la trace d'un montant. Elle dure deux journées (14 heures), sur votre site comme en visioconférence, à douze stagiaires au maximum ou en tête-à-tête, moyennant 1 980 € HT chaque jour. Masteria, certifié Qualiopi, accompagne la demande de financement auprès de votre OPCO, qui l'instruit selon les conditions propres à sa branche.",
  enBref: [
    { label: 'Formation', value: "Claude au service de la direction financière : clôture, contrôle de gestion, comptabilité et trésorerie" },
    { label: 'Durée', value: "Deux journées de sept heures, enchaînées ou séparées par une clôture mensuelle" },
    { label: 'Formats', value: "Dans vos bureaux ou en visioconférence ; jusqu'à douze stagiaires par groupe, ou un seul en accompagnement individuel" },
    { label: 'Tarif', value: "Forfait journalier de 1 980 € HT, inchangé de deux à douze stagiaires" },
    { label: 'Financement', value: "Masteria détient la certification Qualiopi ; l'OPCO de l'entreprise examine la prise en charge d'après les conditions de sa branche" },
    { label: 'Prérequis', value: "Manier Excel au quotidien et disposer d'un abonnement Claude Pro, Team ou Enterprise, vérifié avec vous avant la session" },
  ],
  intro: "Avant de confier une clôture à un assistant, une direction financière veut savoir deux choses : l'outil lit-il les dossiers jusqu'à la dernière annexe, et peut-on signer les montants qu'il produit ? Claude répond à la première par la taille de son contexte, qui atteint chez les abonnés payants un million de tokens (le token est l'unité de découpage du texte, souvent un morceau de mot) : un rapport annuel complet, notes comprises, entre dans un même échange. Il répond à la seconde avec deux outils, l'exécution de code et son complément Excel, qui laissent chacun une trace vérifiable du calcul. Ce guide décrit une organisation de travail fondée sur ces deux réponses, jusqu'aux précautions qu'impose une société cotée.",
  guide: {
    kicker: "Guide terrain",
    h2: "Le dossier se lit jusqu'à la dernière annexe, et chaque montant garde la trace de son calcul",
    lead: "Un modèle de langage produit un montant de la même façon qu'un adjectif : il prédit la suite la plus probable du texte. Dans un rapport de 300 pages, Claude repère sans difficulté le paragraphe qui commente le besoin en fonds de roulement ; pour le recalculer, il lui faut écrire un programme ou poser une formule dans un classeur. Toute la méthode qui suit tient dans cette distinction. Claude lit et rédige, le programme ou la cellule calcule, et la direction financière vérifie la trace avant de signer.",
    sections: [
      {
        h3: "Le document d'enregistrement universel se lit d'une traite, annexes comprises",
        paras: [
          "On appelle contexte la masse de texte que Claude garde consultable d'un seul coup pendant un échange. Avec les modèles actuels et un abonnement payant, sa limite s'élève à un million de tokens, et l'éditeur évalue à environ 500 pages le volume de 200 000 tokens. Le rapport de l'année, ses états financiers et le rapport de l'exercice précédent peuvent donc être déposés ensemble. Claude rapproche alors une phrase du rapport de gestion de la note annexe qui la chiffre, ou suit l'évolution d'une provision d'un exercice à l'autre.",
          "Un projet fonctionne autrement dès qu'il grossit. Lorsque sa base documentaire frôle la capacité du contexte, Claude bascule vers le mode RAG, qui substitue à la lecture intégrale une recherche d'extraits pertinents, et un indicateur visuel le signale dans le projet. Un pointage exhaustif, comme la revue de toutes les notes annexes, se fait donc dans une conversation qui contient les documents eux-mêmes. Le projet garde les références qui servent à chaque clôture.",
          "Un fichier ne doit pas dépasser 30 Mo. Un PDF plus lourd part dans l'environnement d'exécution, hors du contexte : découpez le rapport en plusieurs fichiers si vous attendez une lecture complète.",
        ],
      },
      {
        h3: "Un montant se vérifie dans un programme ou dans une cellule",
        paras: [
          "L'exécution de code met à la disposition de Claude une machine isolée où il rédige puis exécute des scripts Python. Il y ouvre vos exports CSV ou Excel, effectue les calculs et fabrique des classeurs .xlsx dotés de formules réelles, des rapports Word, des présentations ou des PDF. Toutes les formules d'abonnement y donnent accès, y compris la gratuite, et un propriétaire d'abonnement Team ou Enterprise peut la retirer à ses membres. Le script reste consultable : c'est là que se contrôlent les regroupements de comptes, les signes et les périodes.",
          "Claude pour Excel, complément réservé aux abonnements payants, agit à l'intérieur de votre classeur. Interrogé sur une cellule, il remonte la chaîne de calcul et désigne les cellules d'origine ; il modifie un taux ou un volume sans rompre les dépendances entre formules, localise la source d'un #REF! et demande confirmation avant de remplacer un contenu existant. Depuis le 7 mai 2026, ce complément est ouvert à tous les abonnés payants et partage sa conversation avec Claude pour PowerPoint et Claude pour Word : modifiez un taux de croissance dans le classeur, et le graphique de la présentation comme le montant cité dans le mémo, ouverts en parallèle, suivent le changement.",
          "Anthropic fixe lui-même des bornes à cet outil. Sa documentation écarte les calculs dont dépend un audit tant qu'ils n'ont pas été vérifiés, les documents transmis à un client sans relecture et les macros VBA. Le complément ne tourne pas sur les versions perpétuelles d'Excel 2016 et 2019, ni sur la tablette iPad.",
        ],
      },
      {
        h3: "La clôture vit dans un projet, les contrôles dans une compétence",
        paras: [
          "Avec Team ou Enterprise, la clôture dispose d'un projet commun : instructions, procédure, calendrier, plan de comptes analytique et notes des comités passés y restent à demeure. Le créateur du projet accorde à chacun un accès en lecture ou en écriture. Claude y retrouve votre vocabulaire et le plan de vos notes sans qu'un contrôleur ait à les rappeler.",
          "Les vérifications mensuelles prennent place dans une compétence (Skill), c'est-à-dire un dossier d'instructions accompagné au besoin de scripts, que Claude ouvre quand la demande le justifie. Une compétence écrite une fois s'utilise dans la conversation comme dans les compléments de la suite Office, et les deux offres d'équipe permettent de la remettre à tous les salariés d'un coup. Anthropic publie de son côté un plugin Finance, un lot de compétences et de commandes à installer : /reconciliation confronte un solde du grand livre à un relevé, /variance-analysis découpe un écart en facteurs explicatifs. Ses écritures types suivent une logique de débit et de crédit générique, et son volet d'audit vise les tests SOX américains ; un comptable doit le régler sur le plan comptable général avant toute diffusion.",
          "Si les pièces de clôture sont rangées dans un répertoire, Cowork, l'espace où Claude enchaîne seul plusieurs étapes d'une même tâche, peut ouvrir le dossier désigné sur votre poste, parcourir balances et tableaux de rapprochement, puis y enregistrer un classeur de contrôle. Son accès s'arrête aux dossiers que vous avez connectés, et une suppression définitive de fichier attend toujours votre accord. La compétence de contrôle peut poser ces quatre questions :",
        ],
        list: [
          "Les soldes d'ouverture de l'exercice égalent-ils les soldes de clôture de l'exercice précédent ?",
          "Les comptes d'attente (471 à 475) sont-ils soldés ou justifiés ligne par ligne ?",
          "Chaque compte bancaire (512) concorde-t-il avec le relevé de fin de mois ?",
          "Les écritures saisies après la date d'arrêté figurent-elles dans un onglet distinct ?",
        ],
      },
      {
        h3: "Les paramètres de l'organisation fixent le chemin des données",
        paras: [
          "Pour les abonnements Team et Enterprise, l'éditeur s'interdit par défaut d'entraîner ses modèles sur les échanges et documents de l'organisation, et la mémoire, qui permet à Claude de se souvenir d'éléments entre deux discussions, démarre désactivée. Sur les abonnements individuels, l'utilisateur tranche lui-même la question de l'entraînement dans ses paramètres ; un compte personnel ne convient donc à aucune pièce de clôture.",
          "La machine d'exécution du code fonctionne chez Anthropic. Pour une nouvelle organisation Enterprise, elle démarre sans accès à internet, et le propriétaire peut ensuite l'autoriser vers une liste de domaines choisis. Anthropic précise qu'un connecteur, une passerelle vers un logiciel tiers bâtie sur le protocole ouvert MCP, demeure une voie de sortie des données, quel que soit ce paramètre.",
          "Les compléments Office ont leur régime propre. L'historique des échanges est stocké dans le navigateur de l'utilisateur, les serveurs d'Anthropic effacent les données sous trente jours, et ni les durées de conservation sur mesure d'une organisation Enterprise ni ses journaux d'audit ne couvrent ces compléments. Une direction qui doit documenter ses travaux de clôture inscrit ces particularités dans sa procédure.",
        ],
      },
    ],
    table: {
      caption: "Sept travaux de la direction financière, et l'outil de Claude qui convient à chacun",
      headers: ["Travail", "Outil de Claude", "Point de contrôle"],
      rows: [
        ["Pointer les notes annexes d'un rapport annuel", "Conversation où le rapport est déposé en entier", "La page citée pour chaque affirmation, ouverte et relue"],
        ["Valider l'export de la balance", "Exécution de code sur le CSV ou le fichier Excel", "Lignes et totaux confrontés à la balance tirée de l'ERP"],
        ["Reprendre le modèle d'un prédécesseur", "Claude pour Excel et ses renvois aux cellules", "Les cellules désignées, vérifiées une par une"],
        ["Tester une hypothèse de prévision", "Claude pour Excel, dépendances entre formules préservées", "Les montants en aval, comparés avant et après"],
        ["Refaire les mêmes contrôles chaque mois", "Compétence diffusée à l'équipe, ou plugin Finance réglé sur le plan comptable général", "Un essai sur la clôture du mois précédent"],
        ["Écrire la note du comité", "Projet de clôture, puis Claude pour Word avec suivi des modifications", "Chaque montant cité retrouvé dans le classeur"],
        ["Monter les slides de présentation", "Claude pour PowerPoint, dans le gabarit de la société", "Les graphiques alimentés par les chiffres validés"],
      ],
    },
    cas: {
      h3: "Cas pratique : vérifier trois covenants bancaires avant d'envoyer l'attestation semestrielle",
      contexte: "Prenons la trésorière d'une ETI de distribution, liée à ses banques par trois contrats de crédit de 60 à 120 pages. Les comptes au 30 juin sont arrêtés, et l'attestation de respect des ratios part dans quinze jours. Chaque contrat donne sa propre définition de la dette nette et de l'EBITDA (résultat avant intérêts, impôts, dotations aux amortissements et provisions), et les exclusions se cachent entre les définitions, les annexes et les avenants.",
      etapes: [
        "Démarrez une conversation neuve et déposez-y les trois contrats, leurs avenants et trois balances générales : 30 juin de cette année, 31 décembre dernier et 30 juin de l'an passé, de quoi reconstituer douze mois glissants.",
        "Copiez dans la conversation le prompt qui suit : Claude commence par relever les définitions, sans rien calculer.",
        "Confrontez chaque clause citée au contrat signé, puis corrigez la table de correspondance des comptes avant de donner votre feu vert à l'étape 4.",
        "Ouvrez le script et le classeur produits pour contrôler le regroupement des comptes, les signes et la fenêtre de douze mois ; recalculez un ratio à la main.",
        "Soumettez le tableau et les projets d'attestation au directeur financier. Pour une société cotée dont un ratio frôle son seuil, alertez le déontologue avant de poursuivre.",
      ],
      prompt: "Je prépare l'attestation semestrielle de respect des ratios financiers pour trois contrats de crédit. Pièces jointes : les trois contrats et leurs avenants (PDF), et trois balances générales (Excel, une ligne par compte avec son solde) au 30 juin de cette année, au 31 décembre dernier et au 30 juin de l'an passé.\n\nLis tous les contrats et avenants en entier avant de répondre.\n\nÉtape 1. Pour chaque contrat, relève mot pour mot la définition de « Dette nette », d'« EBITDA » et de chaque ratio à respecter, avec le numéro de clause et la page. Si un avenant modifie une définition, cite la version modifiée et l'avenant concerné. N'interprète rien à cette étape.\n\nÉtape 2. Dresse un comparatif des contrats sous forme de tableau : éléments inclus, éléments exclus, période de calcul, seuil, date de test et date d'envoi de l'attestation.\n\nÉtape 3. Propose une table de correspondance entre les comptes des balances et chaque élément des définitions. Signale les comptes dont le classement prête à discussion, sans trancher. Arrête-toi là et attends ma validation.\n\nÉtape 4. Après validation, calcule chaque ratio avec l'exécution de code, sur douze mois glissants (exercice clos, plus premier semestre de cette année, moins premier semestre de l'an passé). Tous les montants sortent du script ; si une donnée manque, écris « à fournir ». Livre un classeur Excel avec un onglet par contrat, des formules apparentes et un onglet de contrôle qui rapproche les totaux des balances.\n\nÉtape 5. Rédige un projet d'attestation par banque, qui cite la clause de chaque ratio et laisse vides les zones de signature.",
      resultat: "Vous disposez des définitions citées avec leur clause, d'un comparatif des trois contrats, d'une table de correspondance à valider, puis d'un classeur de calcul et de trois projets d'attestation. Avant l'envoi, reprenez la table de correspondance compte par compte : un loyer de crédit-bail ou une créance cédée en affacturage rangé du mauvais côté suffit à déplacer un ratio. Le classeur se relit formule par formule, et l'attestation reste signée par la direction financière.",
    },
    pieges: [
      {
        titre: "Un ratio apparaît dans la réponse sans qu'aucun script l'ait calculé",
        texte: "Face à une question brève, Claude peut citer un pourcentage sans exécuter de code, et la phrase ne dit pas d'où il vient. Assurez-vous que la fonction d'exécution de code reste active pour l'organisation, et écrivez dans les instructions du projet de clôture que tout montant doit pointer vers un script ou une cellule.",
      },
      {
        titre: "Le comparatif rapproche des comptes IFRS et des comptes sociaux",
        texte: "Les comptes consolidés des sociétés dont les titres sont admis sur un marché réglementé appliquent les normes IFRS (règlement (CE) n° 1606/2002, article 4), tandis que vos comptes sociaux relèvent du plan comptable général. Les IFRS portent au bilan la plupart des contrats de location : l'EBITDA d'un groupe coté exclut donc des loyers que vos propres comptes enregistrent en charges. Demandez le référentiel de chaque chiffre mis en regard.",
      },
      {
        titre: "Le bouton de retour transmet toute la conversation de clôture",
        texte: "Chez un abonné Team ou Enterprise, les conversations ne servent à aucun entraînement tant que l'organisation ne l'a pas autorisé. L'avis donné par l'icône du pouce, vers le haut ou vers le bas, échappe à cette règle : Anthropic garde alors la conversation complète pendant cinq ans au plus et peut l'utiliser pour entraîner ses modèles. Le propriétaire de l'organisation a la possibilité de retirer cette icône dans les paramètres de confidentialité.",
      },
      {
        titre: "Des comptes semestriels encore confidentiels sont déposés sans accord écrit",
        texte: "Dans une société cotée, un résultat semestriel avant sa publication ou la menace d'un bris de covenant peut relever de l'information privilégiée telle que la définit le règlement (UE) n° 596/2014 en son article 7. L'émetteur consigne alors dans une liste d'initiés l'identité de chaque personne qui y accède, avec la date et l'heure de son accès (article 18). Le déontologue approuve l'espace Claude retenu et ses utilisateurs avant le moindre dépôt.",
      },
    ],
  },
  audience: [
    {
      title: "Directeurs administratifs et financiers",
      desc: "Vous signez les chiffres qui quittent la direction financière et vous tranchez sur les documents admis dans un assistant d'IA. Vous apprenez à formaliser ces arbitrages et à évaluer un livrable de Claude d'après la trace de ses calculs.",
    },
    {
      title: "Contrôleurs de gestion et responsables comptables",
      desc: "La clôture, les rapprochements et la note d'écarts passent par vous, et la formation vous apprend à obtenir de Claude des calculs exécutés par script ou posés dans Excel, puis à consigner vos vérifications dans une compétence commune.",
    },
    {
      title: "Trésoriers et analystes financiers",
      desc: "Contrats de financement, rapports annuels et modèles hérités font votre ordinaire. Vous apprenez à faire extraire les définitions contractuelles à la lettre, puis à faire recalculer chaque ratio depuis la balance.",
    },
  ],
  useCases: [
    {
      icon: '📑',
      title: "Rapports annuels lus jusqu'aux notes",
      desc: "Un document d'enregistrement universel et ses états financiers déposés ensemble, chaque affirmation de Claude reliée à sa page.",
    },
    {
      icon: '🧮',
      title: "Calculs dont le script se relit",
      desc: "Ratios, écarts et agrégats produits par l'exécution de code ; le script s'ouvre avant qu'un chiffre entre dans une note.",
    },
    {
      icon: '📊',
      title: "Modèles Excel hérités rendus lisibles",
      desc: "Dans le classeur, Claude pour Excel remonte la chaîne d'une cellule jusqu'à ses origines et ajuste une hypothèse sans casser une formule.",
    },
    {
      icon: '🗂️',
      title: "Projet de clôture commun",
      desc: "Procédure, calendrier et notes des comités réunis dans un espace que chaque membre lit ou enrichit selon ses droits.",
    },
    {
      icon: '🏦',
      title: "Covenants passés au crible",
      desc: "Définitions contractuelles citées à la lettre avec leur clause, puis ratios recalculés sur douze mois glissants.",
    },
    {
      icon: '🔐',
      title: "Discipline des sociétés cotées",
      desc: "Espace, utilisateurs et paramètres approuvés par le déontologue avant tout dépôt de comptes encore confidentiels.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Distinguer ce que Claude lit, calcule et conserve",
      duration: "1h30",
      description: "Savoir d'où sort chaque chiffre et où part chaque fichier avant de toucher à une clôture.",
      items: [
        "Fenêtre de lecture de Claude (un million de tokens) : les dossiers qui y entrent d'un bloc, ceux qui basculent en recherche dans un projet",
        "Phrase générée ou calcul exécuté : les repérer dans une réponse",
        "Paramètres de l'organisation : entraînement, mémoire, exécution de code, icône du pouce",
        "Formats acceptés, plafond de 30 Mo par fichier, PDF issus d'un scanner",
      ],
      exercise: "Vous chargez votre dernier rapport annuel et demandez à Claude trois montants tirés des notes annexes, que vous pointez ensuite page par page.",
    },
    {
      day: 1,
      title: "Module 2 · Exploiter un rapport annuel du sommaire aux notes annexes",
      duration: "2h",
      description: "Tirer d'un document volumineux des affirmations reliées à leur page.",
      items: [
        "Déposer le rapport, ses annexes et l'exercice précédent dans un seul échange",
        "Imposer la page ou la note annexe derrière chaque affirmation",
        "Mettre deux exercices en regard, section après section",
        "Séparer comptes consolidés en IFRS et comptes sociaux en règles françaises",
      ],
      exercise: "Vous confrontez le rapport annuel d'un concurrent coté à celui de l'année précédente et dressez la liste de ses changements de méthode comptable, page à l'appui.",
    },
    {
      day: 1,
      title: "Module 3 · Confier les calculs à l'exécution de code",
      duration: "2h",
      description: "Produire des chiffres dont chaque étape de calcul se relit.",
      items: [
        "Vérifier que la fonction d'exécution de code tourne et qu'elle porte bien le calcul",
        "Valider un export : nombre de lignes, totaux, soldes d'ouverture",
        "Lire le script : regroupements de comptes, signes, périodes retenues",
        "Obtenir un classeur .xlsx aux formules apparentes, doté d'un onglet de contrôle",
      ],
      exercise: "Vous obtenez sur votre dernière balance les ratios de votre tableau de bord, puis contrôlez dans le script la façon dont les comptes ont été regroupés.",
    },
    {
      day: 1,
      title: "Module 4 · Faire parler un classeur hérité grâce à Claude pour Excel",
      duration: "1h30",
      description: "Comprendre et faire évoluer un fichier existant sans abandonner le contrôle d'une seule formule.",
      items: [
        "Installation du complément, éditions d'Excel compatibles, consignes permanentes",
        "Remonter la chaîne d'une cellule dans un modèle transmis par un prédécesseur",
        "Changer une hypothèse en préservant les dépendances entre formules",
        "Usages écartés par Anthropic : calculs d'audit non vérifiés, macros VBA, envois sans relecture",
      ],
      exercise: "Vous demandez à Claude de commenter un prévisionnel de trésorerie dont vous avez hérité, et vous ouvrez chacune des cellules qu'il désigne.",
    },
    {
      day: 2,
      title: "Module 5 · Installer la clôture dans un projet d'équipe",
      duration: "1h30",
      description: "Offrir à chaque membre de la direction financière un cadre identique à chaque nouvelle clôture.",
      items: [
        "Instructions du projet : vocabulaire, plan des notes, traçabilité imposée des montants",
        "Documents de référence : procédure, calendrier, plan de comptes, notes des comités",
        "Accès en lecture ou en écriture, partage nominatif",
        "Projet passé en mode recherche : le repérer et changer de méthode",
      ],
      exercise: "Vous ouvrez le projet de votre prochaine clôture et rédigez ses instructions, y compris celle qui rattache tout montant à son origine.",
    },
    {
      day: 2,
      title: "Module 6 · Écrire la note du comité et monter ses slides",
      duration: "2h",
      description: "Livrer une note et une présentation qui restent alignées sur le classeur.",
      items: [
        "Note écrite avec Claude pour Word, suivi des modifications activé",
        "Graphiques natifs créés par Claude pour PowerPoint dans le gabarit de la société",
        "Conversation partagée entre Excel, Word et PowerPoint : une hypothèse changée se répercute",
        "Annexe de pointage qui relie chaque montant à sa cellule",
      ],
      exercise: "Vous écrivez la note de votre dernier comité avec deux slides de synthèse, puis modifiez une hypothèse et constatez si la note et les slides suivent.",
    },
    {
      day: 2,
      title: "Module 7 · Transformer les contrôles de clôture en compétence",
      duration: "2h",
      description: "Faire appliquer chaque mois les mêmes vérifications, quel que soit le contrôleur.",
      items: [
        "Anatomie d'une compétence : fichier SKILL.md, nom, description qui commande son déclenchement",
        "Vérifications de clôture : soldes d'ouverture, comptes d'attente, banques, écritures tardives",
        "Plugin Finance d'Anthropic : commandes retenues et réglage sur le plan comptable général",
        "Cowork face au dossier de clôture : répertoires connectés, accord avant suppression",
      ],
      exercise: "Vous écrivez la compétence qui contrôle votre clôture et l'éprouvez sur l'export du mois précédent.",
    },
    {
      day: 2,
      title: "Module 8 · Écrire la charte Claude des équipes financières",
      duration: "1h30",
      description: "Décider des documents admis dans Claude, de leurs lecteurs et des signataires.",
      items: [
        "Documents admis selon l'abonnement et selon leur degré de confidentialité",
        "Société cotée : information privilégiée, liste d'initiés, feu vert du déontologue",
        "Icône du pouce, mémoire, conversations incognito, traçabilité des compléments Office",
        "Relecture et signature de tout chiffre diffusé hors de la direction",
      ],
      exercise: "Vous écrivez la politique d'usage de Claude propre à votre direction financière, liste des documents proscrits avant publication comprise.",
    },
  ],
  objectives: [
    "Le participant sait déposer un rapport annuel complet dans un échange et obtenir que chaque affirmation de Claude cite sa page.",
    "Le participant sait faire calculer un ratio en exécutant du code, puis retrouver dans le script le regroupement de comptes retenu.",
    "Le participant sait faire commenter une cellule par Claude pour Excel et contrôler les cellules d'origine qu'il désigne.",
    "Le participant sait ouvrir un projet de clôture partagé et en écrire les instructions.",
    "Le participant sait bâtir une compétence de contrôle de clôture et l'éprouver sur un mois déjà clos.",
    "Le participant sait énumérer les paramètres et les règles à respecter avant de déposer des comptes qu'une société cotée n'a pas encore publiés.",
  ],
  faq: [
    {
      q: "Claude lit-il un rapport annuel de 300 pages sans en sauter une partie ?",
      a: "Oui, si le rapport est déposé dans la conversation et que l'abonnement est payant : le contexte des modèles actuels grimpe jusqu'au million de tokens, et l'éditeur estime qu'un volume de 200 000 tokens équivaut à près de 500 pages. Découpez tout fichier de plus de 30 Mo. Un projet surchargé bascule en recherche d'extraits, ce qui ne convient pas à un pointage exhaustif.",
    },
    {
      q: "Un contrôleur de gestion peut-il signer un chiffre calculé par Claude ?",
      a: "Oui, à condition d'avoir relu ce qui l'a produit : le script de l'exécution de code ou la formule du classeur. Un pourcentage glissé dans une phrase sans calcul apparent se vérifie avant tout usage. Pendant la formation, chaque montant est rattaché à un script ou à une cellule, et un total de contrôle est confronté à la balance.",
    },
    {
      q: "Pour nos tableaux de bord, vaut-il mieux Claude pour Excel ou l'exécution de code ?",
      a: "Les deux se complètent. Le script convient aux exports volumineux et aux calculs refaits chaque mois ; le complément travaille dans vos classeurs existants, avec vos onglets et vos formules. Ce dernier exige un abonnement payant et Excel Microsoft 365 sous Windows, ou une version 16.46 ou plus récente sur Mac.",
    },
    {
      q: "Claude peut-il lire les données de notre ERP sans passer par un export ?",
      a: "Pas sans connecteur. Claude dialogue avec un logiciel tiers grâce à MCP, un protocole ouvert de connexion des assistants, et le plugin Finance d'Anthropic prévoit ce branchement vers un ERP ou un entrepôt de données dès que l'éditeur ou votre service informatique fournit le connecteur. En attendant, un export CSV ou Excel couvre l'essentiel des travaux de clôture.",
    },
    {
      q: "Nos données comptables quittent-elles l'Europe ?",
      a: "Avec les applications d'Anthropic, oui : aucune région européenne n'y est proposée, et le traitement se fait aux États-Unis ou sur l'infrastructure mondiale de l'éditeur. Pour rester en Europe, une entreprise peut recourir aux points de terminaison européens d'AWS Bedrock ou de Google Cloud Vertex AI, que les compléments Office savent aussi utiliser. Pour l'Union européenne, c'est Anthropic Ireland Limited qui fournit les services.",
    },
    {
      q: "De quel abonnement Claude l'équipe a-t-elle besoin pour les deux jours ?",
      a: "D'un abonnement payant : l'offre gratuite ne donne accès ni aux compléments Excel, PowerPoint et Word, ni à la recherche approfondie, ni à Cowork. Le partage d'un projet entre collègues suppose Team ou Enterprise. Les accès et les paramètres de chacun sont vérifiés avec vous avant la première journée.",
    },
    {
      q: "Les exercices se font-ils sur nos balances et nos modèles ?",
      a: "Oui. Les ateliers s'appuient sur un document fourni par votre direction : la balance du dernier mois clos, un rapport annuel, un prévisionnel de trésorerie ou la procédure de clôture. Les pièces non publiées restent dans votre organisation Team ou Enterprise, ou sont remplacées par des copies anonymisées quand votre règle interne le demande.",
    },
    {
      q: "Comment une direction financière fait-elle financer ces deux jours ?",
      a: "C'est l'OPCO de votre société qui finance, en appliquant les conditions de sa branche ; la certification Qualiopi détenue par Masteria est le préalable à sa participation. Pour un groupe de deux à douze collaborateurs, le prix de la journée demeure 1 980 € HT, comme pour une personne suivie seule. Masteria fournit le programme détaillé et rédige la convention qui accompagne la demande.",
    },
  ],
  tarifs: {
    titre: "Ce que recouvre le prix pour une direction financière",
    paras: [
      "Le prix inclut la préparation sur vos documents : avant la session, le formateur passe en revue avec vous une balance anonymisée, un modèle Excel dont votre équipe a hérité et votre procédure de clôture, afin que chaque atelier travaille votre propre matière. Il couvre aussi les supports, les prompts du guide ajustés à votre plan de comptes et la compétence de contrôle que l'équipe écrit pendant le module 7.",
      "Prenons une direction financière qui inscrit son DAF, trois contrôleurs de gestion, trois comptables et sa trésorière, soit huit participants. Les deux jours en intra se chiffrent à 3 960 € HT pour tout le groupe, ce qui fait 495 € HT par participant. En formule individuelle, le participant seul règle 1 980 € HT par jour. Votre OPCO, saisi sur la foi de la certification Qualiopi, étudie ensuite une prise en charge d'après les conditions de votre branche ; le dossier se monte avec vous.",
    ],
  },
  apres: {
    titre: "Après la formation, un outil taillé pour votre clôture",
    texte: "La méthode en place, Masteria peut concevoir pour votre direction financière un outil sur mesure. Ce peut être une compétence partagée qui prépare chaque mois la note d'écarts au format de vos comités, un agent qui lit l'export de l'ERP, applique vos contrôles de clôture et dresse la liste des comptes à justifier, ou un assistant chargé de traiter les questions budgétaires des opérationnels à partir de vos tableaux validés. Chaque outil reste sous votre maîtrise : données admises, sources citées, validation par la direction financière avant toute diffusion.",
  },
  cta: {
    milieu: "Envoyez-nous votre calendrier de clôture : les deux journées se construisent autour de votre prochaine échéance.",
    fin: {
      titre: "Préparons la session à partir de votre prochaine clôture",
      texte: "Indiquez-nous les documents que votre équipe manipule (balance, rapport annuel, prévisionnel de trésorerie, contrats de crédit) et l'abonnement Claude dont elle dispose. En retour, nous proposons un programme calé sur vos dossiers et des dates possibles.",
    },
  },
  terrain: {
    titre: "Sur le terrain : des chiffres recoupés avant d'entrer dans une note",
    texte: "En septembre 2026, Masteria a formé en individuel, sur une journée à distance, la responsable analyses et données d'un groupe immobilier. Elle travaillait sur les ventes, la clientèle et les parts de marché du groupe, à partir de ses propres classeurs. La discipline de la journée rejoint celle de ce guide : les réponses de Claude recoupées avec les chiffres sources, les formules vérifiées avant d'être étendues, et le fichier clients anonymisé avant tout import. La journée était bâtie pour qu'elle reparte avec une note de lecture, des graphiques, un deck de résultats pour PowerPoint et une première compétence.",
    lien: '/etudes-de-cas-ia#mission-immobilier-etudes',
  },
  liensAssocies: [
    { label: "Formation IA pour la finance, tous assistants confondus", href: '/formation-ia-finance' },
    { label: "Analyser ses données avec Copilot, Claude et ChatGPT dans Excel", href: '/formation-ia-analyse-donnees' },
    { label: "Claude et ChatGPT comparés fonction par fonction", href: '/chatgpt-vs-claude' },
    { label: "Comment un OPCO prend en charge une session d'IA générative", href: '/blog/financer-formation-ia-opco-qualiopi' },
  ],
  avisPriorite: ['Claude', 'financ|compta', 'Excel|fichier|chiffre'],
  sources: [
    { name: "Anthropic : Claude pour Excel, PowerPoint et Word ouverts à tous les abonnés payants (blog, 7 mai 2026)", url: "https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook" },
    { name: "Documentation Anthropic sur le complément Claude pour Excel (usages déconseillés, conservation)", url: "https://claude.com/docs/office-agents/excel" },
    { name: "Aide Claude, en anglais : fichiers produits par l'exécution de code", url: "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude" },
    { name: "Centre d'aide Claude : les projets, leur partage et le mode RAG", url: "https://support.claude.com/en/articles/9517075-what-are-projects" },
    { name: "Anthropic : plugin Finance pour Claude", url: "https://claude.com/marketplace/plugins/finance" },
    { name: "Anthropic : utilisation des données des offres commerciales pour l'entraînement", url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training" },
    { name: "Règlement (UE) n° 596/2014, articles 7 et 18, abus de marché (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32014R0596" },
    { name: "Règlement (CE) n° 1606/2002 sur l'application des normes comptables internationales (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32002R1606" },
  ],
}
