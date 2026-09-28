// Contenu propre à /formation-mistral-pedagogique (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-mistral-pedagogique',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Mistral pour concepteurs pédagogiques : objectifs évaluables, QCM alignés, positionnement et supports avec Vibe, selon le référentiel Qualiopi.",
  intro: "Un concepteur pédagogique passe l'essentiel de son temps à écrire des objectifs évaluables, à construire les évaluations qui les prouvent et à ajuster le parcours au niveau du groupe. Vibe, l'assistant de Mistral (anciennement Le Chat), tient cette chaîne si vous lui confiez votre référentiel dans une Bibliothèque et votre méthode dans une compétence. Ce guide le montre sur un cas complet : la refonte d'un QCM de fin de formation.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe tient le fil entre l'objectif et la question qui le prouve",
    lead: "Tous les assistants savent écrire un déroulé de formation. Vibe apporte à une équipe pédagogique trois fonctions de son espace Work : les Bibliothèques, qui renvoient à la page exacte d'un référentiel ; les compétences (skills), qui enregistrent votre méthode dans un fichier partagé ; le Canvas, où un support se corrige à la main. Le vrai risque reste l'alignement. Un QCM qui mesure autre chose que l'objectif annoncé ne prouve rien à l'auditeur.",
    sections: [
      {
        h3: "L'auditeur Qualiopi commence par lire vos objectifs",
        paras: [
          "Le décret n° 2026-728 du 1er août 2026 actualise le référentiel national qualité à partir du 1er novembre 2026. Son indicateur 5 demande que le prestataire définisse « les objectifs opérationnels et évaluables de la prestation ». L'indicateur 8 porte sur le positionnement et l'évaluation des acquis à l'entrée. L'indicateur 11 demande d'évaluer l'atteinte des objectifs par les bénéficiaires. Un objectif flou rend donc l'évaluation impossible.",
          "Donnez à Vibe un programme existant et demandez-lui de repérer les objectifs qui ne se mesurent pas. Les verbes « comprendre » ou « être sensibilisé à » sortent en premier, et Vibe propose une version observable avec une condition et un critère de réussite. Vous seul savez ce que le stagiaire doit savoir faire le lundi suivant : la décision vous revient.",
        ],
        list: [
          "« Comprendre les règles de la prospection par e-mail » devient « Rédiger un e-mail de prospection B2B qui respecte les règles de la CNIL, à partir d'un cas donné, en quinze minutes ».",
          "« Être sensibilisé à la gestion des réclamations » devient « Classer dix réclamations réelles selon la procédure interne et rédiger la réponse à deux d'entre elles ».",
        ],
      },
      {
        h3: "Une Bibliothèque garde le référentiel et cite la page exacte",
        paras: [
          "Une Bibliothèque est un ensemble de documents que Vibe indexe une fois pour toutes. Vous la créez depuis la rubrique Bibliothèques du menu latéral et vous y déposez PDF, Word, PowerPoint ou Excel, jusqu'à 100 Mo par fichier. Le bouton + l'attache à une conversation, et chaque réponse porte des notes numérotées qui ouvrent le passage source.",
          "Déposez-y la fiche RNCP ou RS de la certification visée, avec ses blocs de compétences et ses modalités d'évaluation, puis vos supports et votre grille d'évaluation. La question « quelles compétences du bloc 2 ne sont évaluées par aucune question du QCM ? » se traite alors en deux minutes. La Bibliothèque se partage à un collègue en lecture seule ou à toute l'organisation.",
        ],
      },
      {
        h3: "Une compétence (skill) enregistre votre méthode d'ingénierie",
        paras: [
          "Une compétence est un dossier qui contient un fichier d'instructions, le SKILL.md, et des fichiers d'appui comme un gabarit de programme ou une grille de QCM. Vous la créez dans Contexte, puis Skills, ou vous demandez à Vibe de convertir en compétence une tâche qu'il vient de réussir. Elle s'appelle en tapant / suivi de son nom et se partage à tout l'espace de travail. Une compétence de conception contient au minimum trois éléments.",
          "Mistral livre aussi des compétences intégrées : /document-review contrôle la complétude et la cohérence d'un programme, /challenge-my-thinking joue le contradicteur sur un scénario avant sa présentation au client.",
        ],
        list: [
          "Vos verbes d'action par niveau, et la règle « un objectif, au moins une question ».",
          "Vos règles de QCM : quatre propositions, une seule bonne, des distracteurs tirés d'erreurs observées en salle, ni négation ni « toutes les réponses ».",
          "Le format de sortie attendu, par exemple le format GIFT (un format texte que Moodle importe dans sa banque de questions).",
        ],
      },
      {
        h3: "Le positionnement se prototype en mini-application, la preuve se garde ailleurs",
        paras: [
          "Le Canvas de Vibe construit des mini-applications, de petits outils interactifs dont la documentation cite l'exemple d'un quiz. Décrivez un auto-positionnement de douze questions et vous obtenez un quiz jouable, partagé par un lien public, pour tester vos questions sur deux collègues. La documentation ne dit pas que ces mini-applications enregistrent les réponses : la preuve de l'indicateur 8 reste dans votre plateforme ou votre LMS.",
          "Le Canvas sert aussi aux supports. Vibe écrit les diapositives en Marp (une syntaxe texte pour les présentations) et le bouton d'export les enregistre en PowerPoint, à reprendre dans votre gabarit.",
        ],
      },
    ],
    table: {
      caption: "Les tâches du concepteur pédagogique et la fonction de Vibe qui les sert",
      headers: ["Tâche", "Fonction de Vibe", "Point de vigilance"],
      rows: [
        ["Réécrire des objectifs pour les rendre évaluables", "Projet avec instructions, compétence maison", "Le verbe retenu doit correspondre à ce que l'évaluation mesure"],
        ["Croiser un programme avec la fiche RNCP", "Bibliothèque et notes numérotées", "Ouvrez la note pour lire le passage cité avant de conclure"],
        ["Écrire le QCM de fin de formation", "Compétence QCM, sortie au format GIFT", "Un distracteur ambigu fausse le résultat de toute la session"],
        ["Tester un auto-positionnement", "Mini-application de quiz dans le Canvas", "Aucune collecte des réponses documentée : la preuve se garde dans un autre outil"],
        ["Relire la cohérence d'un programme complet", "Compétence intégrée /document-review", "Elle signale des écarts, vous tranchez"],
      ],
    },
    cas: {
      h3: "Cas pratique : aligner un QCM hérité sur quatre objectifs",
      contexte: "Prenons une responsable pédagogique qui refond un module d'une journée sur la gestion des réclamations clients. Elle dispose de quatre objectifs, d'un support de quarante diapositives et d'un QCM hérité de dix questions. Personne ne sait plus à quel objectif chaque question se rattache, et l'audit de surveillance approche.",
      etapes: [
        "Créez un projet « Module réclamations » et décrivez le public dans ses instructions.",
        "Créez une Bibliothèque avec le support, l'ancien QCM et la procédure interne.",
        "Dans une conversation du projet, attachez la Bibliothèque avec le bouton + et collez le prompt.",
        "Corrigez à la main les distracteurs faibles dans le Canvas ; le suivi des modifications garde chaque version.",
        "Demandez à Vibe d'en faire une compétence, relisez le SKILL.md et partagez-le à l'équipe.",
        "Importez le bloc GIFT dans la banque de questions de Moodle et vérifiez l'aperçu de chaque question.",
      ],
      prompt: "Tu m'aides à refondre l'évaluation d'un module d'une journée sur la gestion des réclamations clients, pour des conseillers clientèle.\n\nObjectif 1 : qualifier une réclamation selon les trois catégories de notre procédure interne.\nObjectif 2 : rédiger une réponse écrite qui respecte les délais et les mentions de la procédure.\nObjectif 3 : désamorcer un appel tendu avec la méthode en quatre temps vue en formation.\nObjectif 4 : savoir quand transmettre un dossier au service juridique.\n\nLe support, l'ancien QCM et la procédure sont dans la Bibliothèque jointe.\n\nTravaille en trois temps.\nD'abord, rattache chacune des dix questions de l'ancien QCM à un objectif, ou indique qu'elle n'en couvre aucun. Présente-le dans un tableau qui cite la diapositive ou la page de la procédure concernée.\nEnsuite, dis-moi quels objectifs sont mal couverts. Pour l'objectif 3, qui porte sur un geste oral, propose une mise en situation courte si une question ne suffit pas.\nEnfin, écris un nouveau QCM de douze questions, trois par objectif. Chaque question a quatre propositions et une seule bonne réponse. Les distracteurs reprennent des erreurs qu'un conseiller commet en situation. Pas de négation, pas de « toutes les réponses ». Ajoute une ligne de feedback sous chaque question.\n\nDonne-moi le QCM final en deux versions : un tableau lisible pour relecture, puis un bloc au format GIFT prêt à importer dans Moodle.",
      resultat: "Vous obtenez un tableau de rattachement sourcé, un diagnostic de couverture, douze questions avec feedback et un bloc GIFT. Avant de publier, vérifiez que chaque bonne réponse suit votre procédure et qu'aucun distracteur n'est défendable. Gardez le tableau de rattachement : l'auditeur vous demandera ce lien entre objectifs et évaluation.",
    },
    pieges: [
      {
        titre: "Le QCM mesure la mémoire alors que l'objectif demande un geste",
        texte: "Vibe produit des questions de connaissance avec facilité. Pour un objectif du type « rédiger » ou « désamorcer », demandez une mise en situation ou une production écrite notée sur grille, et gardez le QCM pour ce qu'il mesure bien.",
      },
      {
        titre: "La mini-application ne sert pas de preuve",
        texte: "Un quiz partagé par lien public est pratique pour tester vos questions. Il ne remplace pas l'outil qui trace qui a répondu quoi et quand. Pour les indicateurs 8 et 11, la preuve vient de votre plateforme ou de votre LMS.",
      },
      {
        titre: "Une Bibliothèque garde les anciennes versions du référentiel",
        texte: "Si votre Bibliothèque contient l'ancien guide de lecture et le texte du décret de 2026, Vibe peut citer l'un ou l'autre. Retirez les versions périmées, ou nommez les fichiers avec leur date et demandez à Vibe de ne citer que la version en vigueur.",
      },
    ],
  },
  audience: [
    {
      "title": "Responsables pédagogiques d'organismes certifiés Qualiopi",
      "desc": "Vous préparez les audits et vous tenez le lien entre objectifs, positionnement et évaluation. Vous apprenez à contrôler ce lien avec Vibe sur vos programmes existants."
    },
    {
      "title": "Concepteurs et ingénieurs pédagogiques",
      "desc": "Vous écrivez les programmes, les supports et les QCM. Vous apprenez à confier votre méthode de conception à une compétence que toute l'équipe appelle."
    },
    {
      "title": "Formateurs internes et référents formation en entreprise",
      "desc": "Vous animez des groupes de niveaux différents avec les mêmes supports. Vibe prépare les variantes de séquence et l'auto-positionnement à partir de vos documents."
    }
  ],
  useCases: [
    {
      "icon": "🎯",
      "title": "Objectifs évaluables",
      "desc": "Repérer dans vos programmes les objectifs formulés avec « comprendre » ou « découvrir », puis les réécrire avec une condition et un critère de réussite."
    },
    {
      "icon": "📚",
      "title": "Croisement avec la fiche RNCP",
      "desc": "Déposer la fiche RNCP ou RS dans une Bibliothèque et vérifier quels blocs de compétences votre évaluation couvre, avec renvoi au passage cité."
    },
    {
      "icon": "📊",
      "title": "QCM rattachés aux objectifs",
      "desc": "Écrire des questions reliées chacune à un objectif, avec des distracteurs tirés d'erreurs observées en salle et une sortie au format GIFT pour Moodle."
    },
    {
      "icon": "🔄",
      "title": "Variantes de niveau",
      "desc": "Décliner une séquence pour un groupe débutant et un groupe confirmé à partir du même support, en gardant les mêmes objectifs et la même évaluation."
    },
    {
      "icon": "📋",
      "title": "Auto-positionnement d'entrée",
      "desc": "Prototyper un quiz d'entrée en mini-application dans le Canvas, le tester sur des collègues, puis le reporter dans l'outil qui conserve les réponses."
    },
    {
      "icon": "🏛",
      "title": "Relecture avant audit",
      "desc": "Passer un programme complet dans la compétence /document-review pour repérer les objectifs sans évaluation et les modalités qui manquent."
    }
  ],
  modules: [
    {
      "day": 1,
      "title": "Module 1 · Régler Vibe pour un organisme de formation",
      "duration": "1h30",
      "description": "Poser l'espace de travail avant de produire le moindre contenu.",
      "items": [
        "Offres Free, Pro, Team et Enterprise : stockage des documents et réglage de l'entraînement des modèles",
        "Projets : instructions, ton et fichiers partagés par toutes les conversations d'un module",
        "Bibliothèques : formats acceptés, notes numérotées, partage en lecture seule ou en modification",
        "Base de connaissances : ce que Vibe retient de vous et comment l'effacer"
      ],
      "exercise": "Vous créez le projet de l'un de vos modules et vous y déposez votre programme et votre support actuels."
    },
    {
      "day": 1,
      "title": "Module 2 · Écrire des objectifs opérationnels et évaluables",
      "duration": "2h",
      "description": "Rendre chaque objectif mesurable avant de concevoir l'évaluation.",
      "items": [
        "Ce que demandent les indicateurs 5, 8 et 11 du référentiel actualisé par le décret n° 2026-728",
        "Repérer les verbes qui ne se mesurent pas et choisir un verbe observable",
        "Ajouter une condition de réalisation et un critère de réussite",
        "Rattacher chaque objectif à un bloc de la fiche RNCP ou RS, avec la note qui cite le passage"
      ],
      "exercise": "Vous réécrivez les objectifs de l'un de vos programmes et vous justifiez chaque verbe retenu devant le groupe."
    },
    {
      "day": 1,
      "title": "Module 3 · Concevoir un QCM qui mesure l'objectif",
      "duration": "2h",
      "description": "Construire une évaluation dont chaque question prouve un objectif précis.",
      "items": [
        "Le tableau de rattachement : un objectif, au moins une question",
        "Écrire des distracteurs à partir d'erreurs observées en salle",
        "Remplacer la question par une mise en situation quand l'objectif porte sur un geste",
        "Produire la sortie au format GIFT et contrôler l'aperçu à l'import dans Moodle"
      ],
      "exercise": "Vous auditez le QCM de fin de l'un de vos modules, puis vous le réécrivez avec son tableau de rattachement."
    },
    {
      "day": 1,
      "title": "Module 4 · Préparer le positionnement d'entrée",
      "duration": "1h30",
      "description": "Situer chaque stagiaire par rapport aux objectifs avant la session.",
      "items": [
        "Écrire un auto-positionnement relié aux objectifs du module",
        "Prototyper le quiz en mini-application dans le Canvas et le tester par lien public",
        "Garder les résultats dans votre plateforme ou votre LMS, qui trace les réponses",
        "Traduire les résultats en groupes de niveau et en points d'attention pour le formateur"
      ],
      "exercise": "Vous construisez l'auto-positionnement de votre prochain module et vous le testez sur un binôme."
    },
    {
      "day": 2,
      "title": "Module 5 · Adapter un module à des niveaux différents",
      "duration": "1h30",
      "description": "Faire varier la forme d'une séquence en gardant ses objectifs.",
      "items": [
        "Décliner une séquence pour un public débutant et un public confirmé",
        "Réécrire consignes et exemples dans le vocabulaire du métier des stagiaires",
        "Proposer des activités de remédiation pour les écarts repérés au positionnement",
        "Vérifier que chaque variante évalue toujours les mêmes objectifs"
      ],
      "exercise": "Vous produisez deux variantes de l'une de vos séquences et vous comparez leurs évaluations."
    },
    {
      "day": 2,
      "title": "Module 6 · Produire les supports dans le Canvas",
      "duration": "2h",
      "description": "Passer du déroulé validé aux diapositives et aux documents stagiaires.",
      "items": [
        "Générer des diapositives en Marp et les exporter en PowerPoint",
        "Corriger à la main et comparer les versions avec le suivi des modifications",
        "Illustrer avec la génération d'images et reprendre les petits textes altérés",
        "Confier les graphiques tirés de données à l'interpréteur de code, sur les offres payantes"
      ],
      "exercise": "Vous produisez les diapositives de l'une de vos séquences et vous les reprenez dans votre gabarit."
    },
    {
      "day": 2,
      "title": "Module 7 · Enregistrer votre méthode dans une compétence",
      "duration": "2h",
      "description": "Transformer les règles de conception de l'équipe en outil partagé.",
      "items": [
        "Structure d'un SKILL.md et fichiers d'appui : gabarit de programme, grille de QCM, exemple réussi",
        "Convertir en compétence une tâche réussie dans une conversation",
        "Appeler la compétence par / et la partager à l'espace de travail",
        "Contrôler un programme complet avec /document-review et /challenge-my-thinking"
      ],
      "exercise": "Vous créez la compétence de conception de votre équipe à partir de vos propres règles de QCM et de votre gabarit de programme."
    },
    {
      "day": 2,
      "title": "Module 8 · Fixer les règles d'usage de l'équipe pédagogique",
      "duration": "1h30",
      "description": "Décider qui valide quoi et comment garder les preuves.",
      "items": [
        "Anonymiser les résultats des stagiaires avant toute analyse",
        "Tenir la Bibliothèque à jour et dater chaque version du référentiel",
        "Définir qui valide un objectif, un QCM et un support avant diffusion",
        "Archiver le tableau de rattachement entre objectifs et évaluations pour l'audit"
      ],
      "exercise": "Vous rédigez la règle d'usage de Vibe pour votre équipe et la liste de ses validations obligatoires."
    }
  ],
  objectives: [
    "Réécrire les objectifs d'un programme sous une forme opérationnelle et évaluable, rattachée à la fiche RNCP ou RS visée",
    "Construire un QCM dont chaque question est reliée à un objectif, avec un tableau de rattachement vérifiable",
    "Paramétrer un projet et une Bibliothèque Vibe pour un module de formation",
    "Produire un auto-positionnement et deux variantes de niveau d'une même séquence",
    "Créer et partager une compétence qui contient la méthode de conception de l'équipe",
    "Vérifier la cohérence d'un programme complet avec /document-review avant un audit"
  ],
  faq: [
    { q: "Vibe peut-il produire un QCM importable dans Moodle ?", a: "Oui : demandez-lui une sortie au format GIFT, un format texte que Moodle importe dans sa banque de questions. Vibe écrit le bloc, vous le collez dans un fichier texte et vous l'importez. Contrôlez l'aperçu de chaque question : une accolade mal fermée suffit à bloquer l'import." },
    { q: "Les Agents de Le Chat existent-ils encore dans Vibe ?", a: "La documentation de Mistral indique que les compétences (skills) remplacent les Agents. Une compétence contient vos instructions et des fichiers d'appui, et s'appelle en tapant / suivi de son nom. Pour une équipe pédagogique, c'est l'endroit où ranger votre méthode de conception et vos gabarits." },
    { q: "Vibe fabrique-t-il les diapositives d'un support de formation ?", a: "Oui. Le Canvas génère des diapositives en Marp, une syntaxe texte pour les présentations, et un bouton d'export les enregistre en PowerPoint. Vous gardez la main sur la mise en forme finale dans votre gabarit. Pour des graphiques tirés de données, Mistral recommande l'interpréteur de code plutôt que la génération d'images." },
    { q: "Vibe génère-t-il des images pour illustrer un support ?", a: "Oui, la génération d'images s'appuie sur des modèles de Black Forest Labs et s'active depuis les outils de la conversation. La documentation prévient que les petits textes et les motifs fins peuvent être altérés lors d'une retouche. Pour un schéma avec du texte, reprenez les libellés à la main." },
    { q: "Quelle offre Mistral choisir pour une équipe pédagogique ?", a: "L'offre gratuite limite le volume des Bibliothèques et le nombre de tâches planifiées. L'offre Pro monte à 15 Go de documents, l'offre Team à 30 Go par utilisateur avec vérification du nom de domaine et coupure de l'entraînement pour toute l'organisation. L'offre Enterprise ajoute l'authentification unique SAML, les journaux d'audit et des déploiements sur site ou en cloud privé." },
    { q: "Vibe peut-il m'aider à préparer un audit Qualiopi ?", a: "Il aide à produire et à contrôler les documents : objectifs reformulés, tableau de rattachement entre objectifs et évaluations, relecture de cohérence d'un programme. La preuve attendue par l'auditeur reste la trace des évaluations passées par vos stagiaires. Vibe ne remplace pas la lecture du référentiel en vigueur, actualisé par le décret n° 2026-728 à partir du 1er novembre 2026." },
    { q: "Comment financer cette formation pour une équipe pédagogique ?", a: "Masteria est certifié Qualiopi : la formation peut être prise en charge par l'OPCO de votre entreprise, selon ses règles et ses plafonds. En intra, elle accueille jusqu'à 12 participants, au tarif de 1 980 € HT par jour. Nous vous aidons à monter la demande de prise en charge." },
  ],
  sources: [
    { name: "Décret n° 2026-728 du 1er août 2026 relatif au référentiel national qualité (Légifrance)", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054608509" },
    { name: "Référentiel national qualité : guide de lecture Qualiopi (ministère du Travail)", url: "https://travail-emploi.gouv.fr/referentiel-national-qualite-guide-de-lecture-qualiopi" },
    { name: "Mistral Docs : Libraries (Vibe Work)", url: "https://docs.mistral.ai/vibe/work/libraries" },
    { name: "Mistral Docs : Skills (Vibe Work)", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Mistral Docs : Files and Canvas", url: "https://docs.mistral.ai/vibe/work/files-and-canvas" },
    { name: "Mistral Docs : Mini apps", url: "https://docs.mistral.ai/vibe/work/mini-apps" },
    { name: "Mistral Docs : Image generation", url: "https://docs.mistral.ai/vibe/work/image-generation" },
    { name: "Mistral Help Center : désactiver l'usage des données pour l'entraînement", url: "https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training" },
    { name: "Moodle Docs : GIFT format", url: "https://docs.moodle.org/en/GIFT_format" },
  ],
}
