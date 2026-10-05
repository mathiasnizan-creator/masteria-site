// Contenu propre à /formation-claude-ressources-humaines (guide terrain). Rendu par SpokePage.
// Faits Claude : claude-facts.js et faits-claude.md (vérifiés le 5 octobre 2026).
// Fait métier : AI Act, annexe III point 4, obligations reportées au 2 décembre 2027 (sources-metiers.json).
export default {
  slug: 'formation-claude-ressources-humaines',
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  pagePropre: true,
  auteur: true,
  metaDesc: "Formation Claude pour les RH : relire un accord et ses avenants en entier, synthétiser des entretiens sans nom, cadrer RGPD et AI Act avant tout tri de CV.",
  resume: "Notre formation Claude destinée aux ressources humaines tient en deux jours, soit 14 heures d'ateliers, en présentiel ou en ligne, pour un groupe qui ne dépasse pas douze personnes ou pour une seule personne accompagnée. On y travaille vos accords collectifs, vos trames d'entretien et vos procédures. Chaque journée coûte 1 980 € HT. L'organisme détient la certification Qualiopi, ce qui ouvre un financement par votre OPCO selon les critères de votre branche professionnelle.",
  enBref: [
    { label: 'Formation', value: "Une fonction RH outillée par Claude : accords collectifs relus en entier, campagnes d'entretiens synthétisées sans nom, communications sensibles, recrutement encadré par le RGPD et l'AI Act" },
    { label: 'Durée', value: "Deux fois sept heures, en journées consécutives ou séparées selon votre calendrier social" },
    { label: 'Formats', value: "Service RH réuni en intra jusqu'à douze participants, ou parcours individuel ; dans vos locaux en France ou sur vos sites européens, américains et indiens, ou par visioconférence sur Teams ou Google Meet" },
    { label: 'Tarif', value: "1 980 € HT par journée, ateliers bâtis sur vos accords, vos trames et vos modèles de courrier" },
    { label: 'Financement', value: "Masteria est certifié Qualiopi ; votre OPCO peut couvrir l'action si la demande lui parvient avant le premier jour" },
    { label: 'Prérequis', value: "Un compte Claude sur une offre payante, Team de préférence, et des textes RH débarrassés de toute donnée nominative pour les exercices" },
  ],
  intro: "Un service RH passe ses semaines dans des textes longs qui parlent de personnes : un accord d'entreprise et ses avenants, cent comptes rendus d'entretien, une note de réorganisation à annoncer. Claude lit ces ensembles d'un seul tenant, quelque 2 500 pages dans une même conversation lorsque l'abonnement est payant, et sait citer l'article ou le passage d'où vient chacune de ses réponses. Ce guide décrit la méthode pour profiter de cette lecture sans exposer les données du personnel, et marque l'endroit où l'outil s'arrête : le tri des candidatures et toute appréciation portée sur un salarié.",
  guide: {
    kicker: "Guide terrain",
    h2: "Claude lit vos accords et vos campagnes d'entretiens en entier ; les décisions sur les personnes restent les vôtres",
    lead: "Sur abonnement payant, Opus 5.5, Fable 5.1 et Sonnet 5.5 disposent d'une fenêtre de contexte (le volume de texte que le modèle considère à la fois) d'un million de tokens. Un token désigne un fragment de mot ; Anthropic évalue à quelque 500 pages le contenu de 200 000 tokens, ce qui place le plafond d'une conversation autour de 2 500 pages. Pour une équipe RH, l'accord de 2019, ses trois avenants et la convention de branche entrent ensemble dans le même échange, et chaque réponse peut renvoyer à son article. La contrepartie demande de la discipline, car Claude lit tout ce que vous déposez, arrêts maladie et mandats syndicaux compris.",
    sections: [
      {
        h3: "Un accord se relit avec ses avenants et la convention de branche, dans la même conversation",
        paras: [
          "Un accord d'entreprise vit rarement seul. Un avenant de 2021 a réécrit l'article sur les astreintes, un autre a supprimé une annexe, et la convention collective de branche fixe des règles que l'accord ne peut pas toujours écarter. Déposez ces textes ensemble, jusqu'à vingt fichiers par conversation, et demandez une version consolidée : pour chaque article, son état (en vigueur, modifié ou supprimé), le texte qui l'a touché en dernier et la règle applicable aujourd'hui. Le résultat se pointe ligne à ligne contre les originaux.",
          "Le Code du travail organise la confrontation avec la branche. Dans treize matières que liste l'article L2253-1, parmi lesquelles les salaires minima hiérarchiques, les classifications et l'égalité professionnelle entre les femmes et les hommes, la convention de branche prévaut sur l'accord d'entreprise, sauf si celui-ci assure des garanties au moins équivalentes. Claude repère les stipulations qui touchent ces matières et les met en regard de l'article de branche correspondant. Juger l'équivalence des garanties relève de votre juriste.",
          "Deux limites techniques appellent un réflexe. Au-delà de cent pages, un PDF n'est lu que pour son texte, sans ses éléments visuels : une grille de classification enregistrée comme image passe inaperçue. Un accord ancien de plus de cent pages, numérisé sans reconnaissance de caractères, n'offre alors aucun texte à lire. Faites passer ces fichiers à l'OCR (la conversion d'une image de page en texte) avant de les déposer, ou découpez les documents trop longs en tranches.",
        ],
      },
      {
        h3: "Une campagne d'entretiens se synthétise par métier, sur des comptes rendus pseudonymisés",
        paras: [
          "Cent vingt comptes rendus d'entretiens annuels tiennent dans une conversation. Claude en tire les besoins de formation qui reviennent, les compétences citées métier par métier et les verbatims qui les illustrent. Avant le dépôt, remplacez le nom et le matricule par un code : cette pseudonymisation laisse la table de correspondance entre codes et personnes dans un fichier qui ne quitte pas le service RH. Les comptes rendus ainsi traités relèvent toujours du RGPD, avec un risque réduit.",
          "Le RGPD range la santé et l'appartenance syndicale parmi les catégories particulières de données (article 9), dont le traitement est interdit hors des exceptions prévues par le texte. Un compte rendu qui mentionne un arrêt maladie, un aménagement de poste ou un mandat de délégué en contient. Le principe de minimisation (article 5) donne la règle de travail : Claude reçoit ce qui sert à la question posée, et rien d'autre.",
          "Demandez des résultats agrégés, avec pour chaque thème le nombre de comptes rendus qui le soutiennent, et fixez un seuil : aucun résultat pour un groupe de moins de cinq personnes. Une équipe de trois techniciens se reconnaît dans une phrase, même sans nom. La synthèse nourrit le plan de formation ; elle ne range aucun salarié dans une case.",
        ],
        list: [
          "Nom, prénom, matricule et adresse mail remplacés par un code",
          "Passages sur la santé, la vie privée ou un mandat syndical retirés",
          "Service et métier conservés, effectif de chaque groupe vérifié",
          "Table de correspondance rangée hors de Claude, accès limité au service RH",
        ],
      },
      {
        h3: "Le tri des candidatures reste hors du périmètre, et la CNIL contrôle le recrutement en 2026",
        paras: [
          "Pour l'AI Act, un système d'IA qui sert à recruter relève du haut risque, qu'il cible la diffusion des offres, filtre les dossiers de candidature ou note les postulants (annexe III, point 4). L'omnibus numérique, le règlement (UE) 2026/1744 adopté le 8 juillet 2026, a repoussé au 2 décembre 2027 l'entrée en application des obligations qui s'y attachent. Pour un tel système employé au travail, l'employeur devra ensuite prévenir à l'avance les élus du personnel et les salariés visés (article 26).",
          "Ce délai ne laisse pas le champ libre d'ici là. L'article 22 du RGPD protège déjà toute personne contre une décision prise sur le seul fondement d'un traitement automatisé, dès lors que cette décision produit sur elle des effets juridiques ou des effets d'une portée comparable. Le 3 avril 2026, la CNIL a placé le recrutement parmi ses thèmes de contrôle prioritaires de l'année, avec trois angles : les décisions confiées à des systèmes automatisés, ce que l'on dit aux candidats et la durée pendant laquelle on garde leurs données ; les cabinets de recrutement et les entreprises de grande taille sont visés en premier.",
          "La limite s'écrit dans l'outil lui-même. Les instructions de projet valent pour chaque conversation du projet : celles du projet « Recrutement » peuvent préciser que Claude ne hiérarchise aucun candidat, ne formule pas d'avis sur une personne et renvoie toute sélection au recruteur. Le même projet garde les fiches de poste, le référentiel de compétences et vos modèles d'annonce, sur lesquels Claude travaille sans difficulté juridique.",
        ],
      },
      {
        h3: "Les procédures et les communications sensibles se partagent dans des projets et des compétences",
        paras: [
          "Un projet Claude réunit des instructions et une base de connaissances. Sur Team et Enterprise, vous le partagez avec des collègues autorisés à l'afficher ou à le modifier. Un projet « Relations sociales » peut contenir les accords en vigueur, le calendrier des négociations et la charte de communication interne. Dès que ses documents débordent de ce que le modèle peut lire d'un trait, Claude bascule en mode RAG et consulte les extraits qui lui semblent utiles, sans relire l'ensemble. Pour un relevé exhaustif, déposez les textes dans la conversation elle-même.",
          "Une compétence (Skill) fixe une procédure qui revient : un dossier d'instructions dont le fichier SKILL.md décrit la tâche, et que Claude applique sans qu'on l'appelle dès que la demande s'y rapporte. La convocation type à un entretien préalable, la trame d'un compte rendu de réunion du CSE ou la relecture d'une note de service s'y prêtent. Les propriétaires du compte de l'organisation peuvent la diffuser à l'ensemble des membres, et chaque membre peut transmettre la sienne à un collègue.",
          "Pour annoncer une réorganisation, Claude rédige les versions destinées aux salariés concernés, aux managers et aux élus, puis la foire aux questions. Demandez-lui en plus la liste des engagements que contient le texte : dates, effectifs, garanties, mesures d'accompagnement. Chacun passe par la direction avant diffusion, et l'ordre d'information des élus et des salariés suit la procédure de l'entreprise.",
        ],
      },
    ],
    table: {
      caption: "Les dossiers RH, la fonction de Claude qui les sert et le point à verrouiller",
      headers: ["Dossier RH", "Fonction de Claude", "Point à verrouiller"],
      rows: [
        ["Accord d'entreprise et ses avenants", "Textes déposés ensemble dans l'échange, capacité d'un million de tokens", "Chaque règle renvoie à un article ; les PDF numérisés passent à l'OCR avant dépôt"],
        ["Confrontation avec la convention de branche", "Même conversation, tableau consolidé par matière", "Matières de l'article L2253-1 signalées ; l'équivalence des garanties se juge avec le juriste"],
        ["Projet d'avenant revenu des organisations syndicales", "Claude pour Word : résumé des révisions proposées, recherche par thème dans le texte", "Chaque révision acceptée ou refusée par vous, une à une, dans Word"],
        ["Campagne d'entretiens annuels", "Comptes rendus pseudonymisés, synthèse par métier", "Seuil de cinq personnes par groupe ; santé et mandats retirés avant dépôt"],
        ["Annonce d'une réorganisation", "Projet « Relations sociales », versions par public et foire aux questions", "Liste des engagements du texte validée par la direction"],
        ["Tri ou notation de candidatures", "Aucune", "Usage à haut risque (annexe III) dont les obligations commencent le 2 décembre 2027 ; article 22 du RGPD déjà opposable"],
      ],
    },
    cas: {
      h3: "Cas pratique : l'accord sur le temps de travail relu avant la négociation d'un avenant",
      contexte: "Prenons la responsable des relations sociales d'une société de services de 350 salariés. L'accord sur l'aménagement du temps de travail date de 2019, et trois avenants l'ont modifié depuis. La direction ouvre le 12 novembre la négociation d'un quatrième avenant sur le forfait jours et le droit à la déconnexion, et les délégués syndicaux attendent une note de présentation une semaine avant. L'entreprise utilise Claude sur l'offre Team. Ce scénario est pédagogique.",
      etapes: [
        "Rassemblez les textes en PDF lisibles : l'accord de 2019, les trois avenants, la convention collective de branche à jour et les questions écrites reçues des salariés depuis un an, sans nom ni service. Faites convertir en texte les pièces numérisées.",
        "Ouvrez une conversation dans le projet « Relations sociales », choisissez Opus 5.5, le modèle par lequel Anthropic invite à commencer pour l'essentiel des travaux, déposez les fichiers puis collez la consigne qui suit.",
        "Pointez le tableau consolidé : ouvrez dix articles pris au hasard dans les originaux et vérifiez que la règle et le numéro concordent.",
        "Transmettez à votre juriste la liste des stipulations qui touchent une matière de l'article L2253-1, avec les articles de branche en regard ; il juge l'équivalence des garanties.",
        "Rédigez la note aux délégués syndicaux dans Word à partir du tableau vérifié. Claude pour Word, réglé sur le suivi des modifications, laisse chaque reformulation sous forme de révision que vous acceptez ou refusez.",
      ],
      prompt: "Responsable des relations sociales d'une société de services de 350 salariés, je prépare la négociation d'un quatrième avenant à l'accord sur l'aménagement du temps de travail, consacré au forfait jours et au droit à la déconnexion.\n\nDocuments joints :\n- l'accord de 2019 sur l'aménagement du temps de travail ;\n- les avenants n° 1 (2021), n° 2 (2023) et n° 3 (2025) ;\n- la convention collective de branche, version à jour ;\n- les questions écrites des salariés sur le temps de travail depuis un an, sans nom.\n\nTravail demandé :\n1. Établis la version consolidée de l'accord. Pour chaque article de l'accord de 2019, indique s'il est en vigueur, modifié ou supprimé, et par quel avenant. Cite chaque fois le numéro d'article et le document.\n2. Pour le forfait jours et la déconnexion, présente dans un tableau la règle en vigueur, le texte qui la fixe et l'article exact.\n3. Signale les stipulations de l'accord ou des avenants qui portent sur une matière où la convention de branche peut prévaloir, avec l'article correspondant de la convention. Ne conclus pas sur l'équivalence des garanties : je la ferai juger.\n4. Regroupe les questions des salariés par thème, indique combien de questions relèvent de chaque thème et l'article qui y répond, ou la mention « sans réponse dans les textes ».\n5. Liste les contradictions et les ambiguïtés entre les textes, citations à l'appui.\n\nRègles : appuie-toi sur les pièces jointes et sur elles seules, Code du travail compris. Si un article cité dans un avenant est introuvable dans l'accord, écris « article non retrouvé ». Présente les parties 1, 2 et 4 en tableaux.",
      resultat: "Vous obtenez la carte de l'accord tel qu'il s'applique aujourd'hui, un tableau du forfait jours et de la déconnexion, les points de contact avec la branche, les questions des salariés rattachées à leurs articles et la liste des contradictions. Trois vérifications précèdent toute diffusion : dix articles pointés dans les originaux, les points de contact avec la branche relus par le juriste, les questions « sans réponse dans les textes » versées au dossier de négociation. La note aux délégués syndicaux part de ce tableau vérifié, jamais de la réponse brute.",
    },
    pieges: [
      {
        titre: "Le classement des CV demandé pour gagner du temps",
        texte: "Trente candidatures collées avec la consigne de retenir les cinq meilleures : la demande confie à un outil généraliste une sélection que le règlement européen sur l'IA traite comme un usage à haut risque, et que l'article 22 du RGPD encadre dès aujourd'hui quand la décision repose sur le seul traitement automatisé. Inscrivez l'interdiction dans les consignes du projet de recrutement, et laissez la lecture des candidatures au recruteur.",
      },
      {
        titre: "L'arrêt maladie oublié dans un lot de comptes rendus",
        texte: "Un passage sur un congé maladie ou sur un mandat de délégué, resté dans un compte rendu, entre dans la conversation avec le reste. La santé et l'appartenance syndicale figurent parmi les catégories particulières que protège l'article 9 du RGPD. La mémoire de Claude écarte par défaut les sujets sensibles ; la conversation, elle, contient tout ce que vous y déposez.",
      },
      {
        titre: "Une réponse notée qui part avec l'entretien entier",
        texte: "Évaluer une réponse avec l'icône de pouce transmet à Anthropic l'échange complet, compte rendu inclus. Sur une offre Team ou Enterprise, cet envoi fait exception à la règle qui tient vos conversations à l'écart de l'entraînement : le contenu peut y servir et peut rester stocké cinq ans. Demandez au propriétaire du compte de désactiver ce bouton pour l'organisation, ou proscrivez son usage sur les dossiers du personnel.",
      },
      {
        titre: "La conversation incognito prise pour une conversation invisible",
        texte: "Le mode incognito, signalé par une icône de fantôme, retire l'échange de votre historique et de la mémoire de Claude. Dans une organisation Team ou Enterprise, l'échange est pourtant gardé trente jours par défaut et figure dans les exports de données que les propriétaires du compte peuvent lancer. Pour un dossier disciplinaire, la règle ne change pas : rien d'identifiant n'entre dans Claude.",
      },
    ],
  },
  audience: [
    {
      title: "Responsables et chargés RH dans une PME ou une ETI",
      desc: "Vous tenez les accords, les entretiens et les procédures avec une petite équipe. Vous apprenez à soumettre à Claude vos textes complets et à contrôler chaque article qu'il cite.",
    },
    {
      title: "Juristes en droit social et responsables des relations sociales",
      desc: "Vous préparez les négociations et les réunions du CSE. Vous apprenez à consolider un accord et ses avenants, puis à relire en suivi des modifications le projet qui revient des organisations syndicales.",
    },
    {
      title: "Chargés de recrutement et de développement RH",
      desc: "Vous rédigez les annonces, les grilles d'entretien et le plan de formation. Vous apprenez ce que Claude peut faire autour de la sélection, et pourquoi le tri des candidatures lui reste fermé.",
    },
  ],
  useCases: [
    { icon: '📑', title: "Version consolidée d'un accord", desc: "L'accord, ses avenants et la convention de branche lus ensemble, avec un tableau des règles en vigueur et de leurs articles." },
    { icon: '✍️', title: "Avenant relu en suivi des modifications", desc: "Claude pour Word résume les révisions des organisations syndicales et retrouve toutes les stipulations d'un même thème." },
    { icon: '🧭', title: "Synthèse d'une campagne d'entretiens", desc: "Des comptes rendus pseudonymisés lus en entier, des besoins de formation classés par métier, un seuil de cinq personnes par groupe." },
    { icon: '📣', title: "Annonce d'une réorganisation", desc: "Les versions pour les salariés concernés, les managers et les élus, avec la liste des engagements à faire valider." },
    { icon: '🗂️', title: "Procédures RH en compétences", desc: "Convocation type, compte rendu de réunion du CSE, relecture de note de service : chaque procédure devient une compétence partagée." },
    { icon: '🛡️', title: "Règles RGPD et AI Act de l'équipe", desc: "Données retirées avant dépôt, mémoire et retours réglés, tri des candidatures exclu par les consignes du projet." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Savoir où vont les textes confiés à Claude",
      duration: "1h30",
      description: "Connaître le trajet d'un document avant d'y mettre un dossier du personnel.",
      items: [
        "Un million de tokens par échange et vingt fichiers au plus : la taille d'un dossier qui entre en une fois",
        "Lecture des PDF longs : le texte seul après cent pages, les pièces numérisées à convertir",
        "Projets partagés, instructions de projet et mode RAG au-delà de la fenêtre",
        "Mémoire éteinte d'office pour les membres d'une organisation Team, mode incognito, retours par le pouce",
      ],
      exercise: "Vous déposez un accord de votre entreprise, vous demandez la liste de ses articles et vous vérifiez qu'aucun ne manque.",
    },
    {
      day: 1,
      title: "Module 2 · Consolider un accord et ses avenants",
      duration: "2h",
      description: "Obtenir la règle qui s'applique aujourd'hui, article par article.",
      items: [
        "État de chaque article : en vigueur, modifié ou supprimé, et par quel avenant",
        "Tableau thématique avec le texte source et l'article de chaque règle",
        "Questions des salariés rattachées aux articles qui y répondent",
        "Pointage d'un échantillon d'articles dans les originaux",
      ],
      exercise: "Vous produisez la version consolidée d'un accord de votre entreprise et vous pointez dix articles.",
    },
    {
      day: 1,
      title: "Module 3 · Confronter l'accord à la convention de branche",
      duration: "2h",
      description: "Repérer les points de contact sans trancher à la place du juriste.",
      items: [
        "Les treize matières de l'article L2253-1 et la condition des garanties au moins équivalentes",
        "Stipulations concernées mises en regard de l'article de branche",
        "Contradictions et ambiguïtés entre les textes, citations à l'appui",
        "Ce qui part chez le juriste et ce qui reste au service RH",
      ],
      exercise: "Vous faites ressortir les points de contact entre un accord de votre entreprise et votre convention collective.",
    },
    {
      day: 1,
      title: "Module 4 · Préparer une négociation avec Claude pour Word",
      duration: "1h30",
      description: "Relire un projet d'avenant sans perdre la trace d'une révision.",
      items: [
        "Installation de l'extension Word et passage en suivi des modifications",
        "Résumé des révisions proposées par les organisations syndicales",
        "Recherche par thème : toutes les stipulations sur la déconnexion ou le forfait jours",
        "Commentaires traités un par un, avec la réponse de Claude dans le fil",
      ],
      exercise: "Vous relisez en suivi des modifications un projet d'accord ou d'avenant et vous classez les révisions par enjeu.",
    },
    {
      day: 2,
      title: "Module 5 · Synthétiser une campagne d'entretiens sans exposer personne",
      duration: "2h",
      description: "Tirer des besoins collectifs de comptes rendus individuels.",
      items: [
        "Pseudonymisation : un code par salarié, la table de correspondance hors de Claude",
        "Santé, vie privée et mandat syndical retirés avant tout dépôt",
        "Thèmes par métier, avec le nombre de comptes rendus qui les soutiennent",
        "Seuil de cinq personnes par groupe et verbatims sans détail identifiant",
      ],
      exercise: "Vous préparez un lot de comptes rendus fictifs ou pseudonymisés et vous en tirez les besoins de formation par métier.",
    },
    {
      day: 2,
      title: "Module 6 · Rédiger les communications sensibles",
      duration: "1h30",
      description: "Écrire une annonce juste pour chaque public et vérifier ce qu'elle engage.",
      items: [
        "Versions pour les salariés concernés, les managers et les élus",
        "Foire aux questions bâtie sur les questions déjà reçues",
        "Liste des engagements du texte : dates, effectifs, garanties",
        "Validation par la direction et ordre d'information fixé par la procédure",
      ],
      exercise: "Vous rédigez le kit d'annonce d'un projet réel ou fictif et la liste des engagements à faire valider.",
    },
    {
      day: 2,
      title: "Module 7 · Recruter avec Claude dans les limites posées par le RGPD et l'AI Act",
      duration: "2h",
      description: "Tracer la frontière entre l'aide à la rédaction et la sélection.",
      items: [
        "Annexe III : le recrutement classé à haut risque, des obligations applicables fin 2027",
        "Article 22 du RGPD et contrôles prioritaires de la CNIL en 2026",
        "Fiche de poste, annonce et grille d'entretien construites sur le référentiel",
        "Consignes du projet de recrutement qui écartent tout classement de candidats",
      ],
      exercise: "Vous rédigez les consignes du projet de recrutement de l'équipe, puis vous les éprouvez sur des demandes pièges.",
    },
    {
      day: 2,
      title: "Module 8 · Partager les procédures et écrire la charte du service RH",
      duration: "1h30",
      description: "Rendre les bonnes pratiques communes et durables.",
      items: [
        "Compétences : dossier, fichier SKILL.md, description qui déclenche la procédure",
        "Partage à un collègue et mise à disposition par les propriétaires du compte",
        "Données interdites de dépôt ; réglages de la mémoire, des retours et de l'incognito",
        "Relectures obligatoires avant toute diffusion",
      ],
      exercise: "Vous écrivez la compétence d'une procédure RH de votre équipe et la règle d'usage qui l'accompagne.",
    },
  ],
  objectives: [
    "Le participant sait établir la version consolidée d'un accord d'entreprise et de ses avenants, puis en vérifier les références sur un échantillon.",
    "Le participant sait repérer les stipulations d'un accord qui touchent une matière où la convention de branche prévaut selon l'article L2253-1 du Code du travail.",
    "Le participant sait préparer un lot de comptes rendus pour Claude : pseudonymisation, retrait des données sensibles visées par l'article 9, seuil par groupe.",
    "Le participant sait relire un projet d'avenant dans Word avec l'extension Claude, chaque modification restant une révision à accepter ou à refuser.",
    "Le participant sait dire si un usage de Claude en recrutement tombe sous le point 4 de l'annexe III ou sous l'article 22 du RGPD.",
    "Le participant sait régler la mémoire, le mode incognito et les retours selon la sensibilité du dossier traité.",
  ],
  faq: [
    {
      q: "Claude peut-il absorber notre accord d'entreprise, ses avenants et la convention collective dans le même échange ?",
      a: "Sur une offre payante, oui. Les trois modèles actuels de Claude admettent jusqu'au million de tokens pour une seule conversation, l'équivalent de 2 500 pages environ selon le ratio d'Anthropic, et vingt fichiers au plus. Passé cent pages, la lecture d'un PDF se limite à son texte, et une copie numérisée sans reconnaissance de caractères n'en contient pas. Exigez l'article d'où vient chaque règle, puis contrôlez-en un échantillon.",
    },
    {
      q: "Où sont traitées les données du personnel que nous confierions à Claude ?",
      a: "Anthropic ne met à disposition aucune région de traitement européenne, ni pour l'application ni pour l'API ; un hébergement européen suppose un déploiement par AWS Bedrock ou Google Cloud, que votre DSI met en place. Sur Team et Enterprise, aucune conversation n'alimente l'entraînement par défaut, et un échange supprimé disparaît des serveurs d'Anthropic en trente jours au plus. Arrêtez avec le délégué à la protection des données (DPO) ce que l'équipe RH peut y déposer.",
    },
    {
      q: "Avons-nous le droit de demander à Claude une présélection des CV ?",
      a: "Nous le déconseillons. Le filtrage des candidatures figure parmi les usages que le règlement européen sur l'IA traite comme à haut risque, et ses obligations entreront en application le 2 décembre 2027, date retenue par l'omnibus numérique. Une décision reposant sur le seul traitement automatisé tombe déjà sous l'article 22 du RGPD, et la CNIL a fait du recrutement l'un de ses thèmes de contrôle prioritaires de 2026. Les ateliers montrent ce que Claude apporte avant et après la sélection.",
    },
    {
      q: "La mémoire de Claude risque-t-elle de retenir une information sur un salarié ?",
      a: "Dans une organisation Team ou Enterprise, chaque membre doit allumer lui-même la mémoire, qui reste éteinte sans son geste. Si quelqu'un l'active, la santé et les autres sujets sensibles en restent exclus tant que la case « Inclure les sujets sensibles en mémoire » n'est pas cochée, et chaque projet tient une mémoire distincte. Chaque souvenir se relit et s'efface dans Paramètres, puis Mémoire, et un propriétaire de l'organisation peut couper la fonction pour tous.",
    },
    {
      q: "Faut-il équiper l'équipe de Claude pour Word avant la formation ?",
      a: "Ce n'est pas obligatoire, et l'extension sert surtout au quatrième module. Claude pour Word fonctionne sur les offres payantes avec Word sur le web, sous Windows ou sur Mac dans une version Microsoft 365 récente, et le service informatique peut l'installer pour toute l'équipe en une opération. Sans elle, la relecture se fait dans la conversation à partir du document exporté.",
    },
    {
      q: "Pouvons-nous travailler sur nos propres accords et nos trames pendant les ateliers ?",
      a: "Oui, avec l'accord de votre DSI et de votre DPO. Les accords collectifs, sans donnée personnelle, se prêtent bien aux exercices. Pour les entretiens et les candidatures, nous fournissons des dossiers fictifs, ou vous apportez des comptes rendus pseudonymisés selon la méthode du module 5.",
    },
    {
      q: "Une équipe RH répartie sur plusieurs sites peut-elle suivre la session ensemble ?",
      a: "Oui. Les deux journées se tiennent par visioconférence sur Teams ou Google Meet, ou en présentiel sur l'un de vos sites, y compris hors de France : Europe, États-Unis, Inde. Le contenu des ateliers ne change pas d'un format à l'autre, et chacun manipule Claude depuis son propre compte.",
    },
    {
      q: "Comment présenter la formation Claude du service RH à notre OPCO ?",
      a: "Comme une action du plan de développement des compétences, dispensée par un organisme certifié Qualiopi, ce qui la rend éligible à une prise en charge. Votre entreprise dépose le dossier avant la première journée, accompagné du programme et de la convention que nous rédigeons. L'OPCO applique ensuite les plafonds de votre branche, le tarif journalier de 1 980 € HT servant de base, que le groupe compte trois ou douze personnes.",
    },
  ],
  tarifs: {
    titre: "Le prix couvre la préparation des ateliers sur vos accords et vos trames",
    paras: [
      "Avant la session, le formateur prépare les ateliers à partir de vos propres pièces : un accord d'entreprise et ses avenants, votre trame d'entretien, une note de réorganisation passée, vos modèles de courrier. Les documents nominatifs restent chez vous ; nous travaillons sur des versions pseudonymisées ou sur des dossiers fictifs construits à l'image des vôtres. Un groupe type réunit une responsable RH, un juriste social, deux chargés de recrutement et des gestionnaires du personnel.",
      "Pour une équipe de huit personnes en intra, les deux journées reviennent à 3 960 € HT, soit 495 € HT par participant, auxquels s'ajoute la TVA de 20 %. Une personne formée seule paie 1 980 € HT par journée. L'entreprise sollicite son OPCO, qui finance selon les règles propres à la branche, et nous joignons au dossier le programme détaillé et la convention signée.",
    ],
  },
  apres: {
    titre: "Vos accords peuvent ensuite nourrir un assistant propre au service RH",
    texte: "Une fois la formation passée, Masteria peut bâtir avec le service RH un outil propre à la fonction : un projet Claude partagé qui répond aux questions des managers à partir des accords en vigueur, en citant l'article appliqué, ou une compétence d'équipe qui met en forme les convocations et les comptes rendus de réunion du CSE selon vos modèles. L'outil se cadre d'abord avec vous : quelles sources, quels droits d'accès, quelles questions renvoient vers un interlocuteur humain. Avant son ouverture, nous le confrontons à des questions conçues pour le piéger, puis l'équipe RH en assure elle-même l'entretien.",
  },
  cta: {
    milieu: "Envoyez-nous la liste de vos accords en vigueur et des procédures qui vous occupent : le programme se construit sur vos textes.",
    fin: {
      titre: "Préparons la formation de votre équipe RH sur ses propres dossiers",
      texte: "Dites-nous qui compose le service et quelles négociations ou campagnes arrivent ce trimestre. Nous revenons avec un programme, des dates et de quoi monter la demande à l'OPCO.",
    },
  },
  liensAssocies: [
    { label: "Plan de compétences IA : la méthode du DRH, de l'entretien de parcours au CSE", href: '/formation-ia-drh-plan-competences' },
    { label: "AI Act et RH : les règles du recrutement et de l'évaluation", href: '/blog/ai-act-rh-conformite-recrutement-evaluation' },
    { label: "IA et RGPD : contrôler un usage avant de le déployer", href: '/ia-et-rgpd' },
    { label: "Formation IA des ressources humaines, tous outils confondus", href: '/formation-ia-ressources-humaines' },
  ],
  avisPriorite: ['Claude', 'RH|ressources humaines', 'recrut', 'données'],
  sources: [
    { name: "Journal officiel de l'UE (EUR-Lex) : omnibus numérique sur l'IA, règlement 2026/1744, nouvelles dates du haut risque", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    { name: "EUR-Lex : le règlement 2024/1689 sur l'IA, article 26 et point 4 de l'annexe III sur l'emploi", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { name: "CNIL : thèmes de contrôle prioritaires 2026, dont le recrutement (3 avril 2026)", url: "https://www.cnil.fr/fr/controles-prioritaires-2026" },
    { name: "EUR-Lex : RGPD, articles 5 (minimisation), 9 (catégories particulières) et 22 (décision automatisée)", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    { name: "Code du travail numérique : article L2253-1, matières où la branche prévaut", url: "https://code.travail.gouv.fr/code-du-travail/l2253-1" },
    { name: "Centre d'aide Claude : capacité de contexte selon le modèle sur les abonnements payants", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
    { name: "Centre d'aide Claude : téléverser des fichiers, plafonds de pages et lecture des PDF", url: "https://support.claude.com/en/articles/8241126-upload-files-to-claude" },
    { name: "Centre de confidentialité d'Anthropic : usage des données des offres commerciales et sort des retours notés", url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training" },
  ],
}
