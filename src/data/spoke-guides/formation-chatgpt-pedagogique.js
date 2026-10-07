// Contenu propre à /formation-chatgpt-pedagogique (guide terrain, page propre). Rendu par SpokePage.
// Réécrit le 7 octobre 2026 à partir du guide du 28/09/2026, dont les faits avaient été vérifiés ce jour-là
// (help.openai.com et openai.com pour ChatGPT ; Légifrance et France compétences pour Qualiopi ; EUR-Lex pour l'AI Act).
// Mises à jour du 07/10 : retrait des GPTs vérifié à la main sur la FAQ d'OpenAI, nouvelle rédaction de l'article 4
// de l'AI Act issue du règlement (UE) 2026/1744 (fiche de faits du 07/10), calendrier du haut risque au 2 décembre 2027.
// Règle Masteria appliquée : pas d'objectif sans question qui le vérifie.
export default {
  slug: 'formation-chatgpt-pedagogique',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation ChatGPT pour formateurs et équipes pédagogiques',
  metaTitle: 'Formation ChatGPT pédagogique · Qualiopi | Masteria',
  metaDesc: "Formation ChatGPT pour formateurs et responsables pédagogiques : objectifs mesurables, QCM reliés aux objectifs, mode étude, indicateurs Qualiopi, AI Act.",
  keywords: "formation ChatGPT formateurs, ChatGPT ingénierie pédagogique, ChatGPT Qualiopi, ChatGPT QCM, formation IA équipe pédagogique",
  resume: "Pensée pour les concepteurs de formations, cette formation ChatGPT se déroule sur deux journées, quatorze heures consacrées à vos programmes, vos évaluations et vos supports. Elle réunit formateurs, ingénieurs pédagogiques et responsables d'organisme, douze au plus en intra, ou une personne seule avec le formateur, en salle ou en classe virtuelle. Comptez 1 980 € HT pour chaque journée. Comme les organismes qu'il forme, Masteria détient la certification Qualiopi, et il prépare avec vous la demande que votre OPCO instruit selon sa branche.",
  enBref: [
    { label: 'Formation', value: "ChatGPT dans la conception pédagogique : objectifs mesurables, positionnement et QCM reliés aux objectifs, déroulés et supports, mode étude, appréciations des stagiaires" },
    { label: 'Durée', value: "Deux jours (14 heures), placés de préférence quelques semaines avant un audit Qualiopi ou la refonte d'un catalogue" },
    { label: 'Formats', value: "Équipe pédagogique en intra, douze au maximum, ou formateur indépendant seul ; dans vos salles ou en classe virtuelle" },
    { label: 'Tarif', value: "1 980 € HT la journée, ateliers construits sur un programme publié de votre catalogue" },
    { label: 'Financement', value: "Masteria est certifié Qualiopi ; l'OPCO de votre structure tranche selon les règles de sa branche" },
    { label: 'Prérequis', value: "Concevoir ou animer des formations ; un compte ChatGPT, Business ou Edu de préférence, vérifié avant la session" },
  ],
  intro: "Un responsable pédagogique écrit des objectifs, des programmes, des évaluations, puis les preuves que l'auditeur Qualiopi viendra lire. ChatGPT produit tout cela en quelques minutes, et le risque commence là : un objectif bien tourné peut rester impossible à mesurer, et un QCM peut vérifier autre chose que ce que le programme promet. Cette formation apprend à vos formateurs et à vos ingénieurs pédagogiques à se servir de ChatGPT sur leurs propres programmes, avec la rigueur du référentiel. Elle fixe aussi la frontière tracée par l'AI Act pour l'évaluation des apprenants.",
  prerequis: "Concevoir, animer ou piloter des actions de formation ; un compte ChatGPT, Business ou Edu de préférence, contrôlé avec vous en amont",
  guide: {
    kicker: 'Guide terrain',
    h2: "Concevoir avec ChatGPT une formation qui tient devant l'auditeur et devant les stagiaires",
    lead: "Les équipes pédagogiques attendent souvent de ChatGPT des diapositives. Son meilleur usage se situe en amont, sur la chaîne qui relie un objectif, un contenu et une évaluation. Cette chaîne est celle que contrôle le référentiel Qualiopi, et un concepteur pressé y laisse passer des trous. ChatGPT les repère sans se lasser, à condition de recevoir la grille du référentiel. L'AI Act ajoute une limite nette : l'outil peut aider à évaluer, la décision sur les acquis reste celle d'une personne.",
    sections: [
      {
        h3: "Trois indicateurs du référentiel donnent à ChatGPT sa grille de relecture",
        paras: [
          "Parmi les indicateurs du référentiel, trois encadrent la conception. Selon le n° 5, les objectifs doivent être opérationnels et évaluables, ce que le guide de lecture traduit par observables et mesurables. Le n° 8 réclame une façon de situer chaque stagiaire avant la formation, en positionnant son niveau et ses acquis de départ. Le n° 11 impose de vérifier, à la fin, que les bénéficiaires ont atteint les objectifs. Publié le 1er août 2026, le décret n° 2026-728 vaut pour les audits menés à partir du 1er novembre 2026 : il laisse ces trois indicateurs intacts, en modifie d'autres et en crée un trente-troisième, réservé à l'apprentissage, sur l'évaluation des enseignements par les apprenants.",
          "Donnée à ChatGPT, cette grille change son comportement. Il repère l'objectif qui commence par « comprendre » ou « être sensibilisé », propose un verbe que l'on peut observer, puis écrit la question qui prouvera l'acquis. Le concepteur tranche, et le dossier d'audit gagne un lien lisible entre chaque objectif et sa preuve.",
        ],
      },
      {
        h3: "Chaque objectif reçoit au moins une question, et le projet garde cette règle en mémoire",
        paras: [
          "Chez Masteria, une règle s'applique à chaque programme que nous écrivons : pas d'objectif sans question pour le vérifier. ChatGPT la tient mieux qu'un humain en fin de journée, s'il travaille dans un projet où se trouvent le programme publié, le questionnaire de positionnement, le QCM final et le déroulé. Sur Business, Enterprise et Edu, un projet reçoit 40 fichiers ; sur Plus, 25.",
          "Les instructions du projet rappellent la définition du guide de lecture et la liste des verbes refusés. Passez la mémoire en mode limité au projet : les échanges sur le programme d'un client ne se mêlent plus à ceux d'un autre. Partagé avec l'équipe, le projet donne à chaque formateur le même contexte ; l'accès en discussion suffit pour préparer une session, l'accès en modification revient au responsable des documents.",
        ],
      },
      {
        h3: "Le mode étude met une séquence à l'épreuve avant les stagiaires",
        paras: [
          "Le mode étude guide par des questions au lieu de livrer la réponse. Il s'active en tapant @study dans la zone de saisie ou par l'option « Étudier » du menu +, sur toutes les offres. Une particularité surprend : il ne fonctionne ni dans les projets, ni dans les GPTs, ni dans les discussions temporaires. On l'utilise donc dans une conversation ordinaire, où l'on dépose le support à tester.",
          "Pour un concepteur, c'est un banc d'essai. Vous déposez le support d'une séquence et vous jouez l'apprenant débutant. Là où ChatGPT peine à faire comprendre une notion à partir de votre support, un stagiaire bloquera aussi. Les fiches de révision interactives qu'il produit s'enregistrent dans la bibliothèque ; un formateur peut en conseiller l'usage à ses stagiaires, si son organisme l'autorise.",
        ],
      },
      {
        h3: "Les tuteurs bâtis en GPT prennent fin le 11 décembre 2026, place aux compétences",
        paras: [
          "Beaucoup d'organismes ont construit un GPT « tuteur » ou « générateur de quiz », parfois remis à leurs clients. OpenAI les retire tous le 11 décembre 2026 ; seuls les espaces Enterprise ayant obtenu un report les gardent jusqu'au 11 février 2027. Lors de la conversion en plugin, les consignes du GPT forment une compétence et les documents qu'il contenait rejoignent les fichiers de référence ; les actions personnalisées, elles, se perdent en route, et le plugin converti reste visible de son seul auteur tant qu'il ne l'a pas partagé. Un outil remis à un client doit donc être reconstruit, puis repartagé.",
          "Pour créer une compétence, il suffit de dialoguer avec ChatGPT : il interroge le concepteur sur la procédure, puis l'écrit. Les offres Business, Enterprise, Healthcare et Edu proposent cette fonction. Dans l'enseignement supérieur, ChatGPT Edu offre un espace géré par l'établissement, avec authentification unique, gestion automatique des comptes et contenus exclus de l'entraînement. Depuis le 4 août 2026, OpenAI y ajoute un plugin pour les enseignants du supérieur, disponible dans ChatGPT Work : préparation de cours, supports, évaluations multimédias, contenus à charger dans la plateforme d'apprentissage.",
        ],
      },
      {
        h3: "L'AI Act sépare l'aide à la correction de la décision sur les acquis",
        paras: [
          "L'annexe III de l'AI Act soumet au régime du haut risque toute IA conçue pour évaluer ce qu'un apprenant a acquis, à l'école comme en formation professionnelle, y compris quand ce résultat oriente son parcours. Depuis l'Omnibus numérique, règlement (UE) 2026/1744, les obligations qui s'y attachent attendent le 2 décembre 2027. Faire relire une copie par ChatGPT puis noter soi-même reste une aide ; une notation automatique qui conditionne la suite du parcours entre dans le champ visé. Pour un cas limite, demandez un avis juridique.",
          "Depuis le 2 février 2025 déjà, son article 5 interdit de déduire les émotions d'une personne au travail ou dans un établissement d'enseignement, sauf raison médicale ou de sécurité. Un outil de classe virtuelle qui prétend mesurer l'attention ou l'humeur des stagiaires par la caméra en relève. L'article 4, enfin, demande aux organisations qui déploient l'IA de soutenir la maîtrise de ces outils par leur personnel et par ceux qui agissent pour leur compte, formateurs sous-traitants compris ; aucun certificat n'est exigé, une trace interne des formations suivies suffit.",
        ],
      },
    ],
    table: {
      caption: "Ce que ChatGPT apporte à chaque livrable d'un organisme de formation, et le contrôle qui reste humain",
      headers: ['Livrable (indicateur Qualiopi)', 'Apport de ChatGPT', 'Contrôle humain'],
      rows: [
        ["Analyse du besoin (4)", "Synthèse du compte rendu d'entretien avec le commanditaire, dans le projet", "Personnes citées pseudonymisées avant tout dépôt"],
        ["Objectifs opérationnels et évaluables (5)", "Relecture du programme avec la définition du guide de lecture en consigne", "« Comprendre », « appréhender », « être sensibilisé » refusés"],
        ["Positionnement à l'entrée (8)", "Questionnaire tiré des objectifs, puis testé en mode étude", "Prérequis identiques à ceux du programme publié"],
        ["Évaluation des acquis (11)", "QCM avec corrigé justifié par un renvoi au support", "Chaque bonne réponse vérifiée sur la source, distracteurs ambigus supprimés"],
        ["Support et déroulé", "Document ou présentation produits avec ChatGPT Work", "Relecture pédagogique complète ; Work absent des offres Free et Go"],
        ["Appréciations des stagiaires (30)", "Code exécuté sur l'export des questionnaires de satisfaction", "Noms et entreprises retirés des verbatims avant dépôt"],
      ],
    },
    cas: {
      h3: "Cas pratique : réaligner un programme de deux jours avant l'audit de surveillance",
      contexte: "Prenons la responsable pédagogique d'un organisme certifié Qualiopi qui forme des managers. L'audit de surveillance approche. Le programme « Conduire l'entretien professionnel » affiche sept objectifs, et le QCM final compte quatorze questions écrites par un formateur qui a quitté l'organisme. Personne n'a vérifié que chaque objectif est évalué, ni que chaque question renvoie à un objectif.",
      etapes: [
        "Créez un projet « Audit entretien professionnel », avec une mémoire réglée pour rester dans ce projet.",
        "Déposez-y le programme publié, le questionnaire de positionnement, le QCM final et le déroulé d'animation.",
        "Collez le prompt suivant et choisissez le mode réflexion.",
        "Relisez la matrice ligne par ligne avec le formateur référent ; validez ou corrigez chaque objectif réécrit et chaque question proposée.",
        "Demandez à ChatGPT d'écrire une compétence qui reproduit la méthode, pour l'appliquer aux autres programmes du catalogue.",
      ],
      prompt: "Tu m'aides à préparer un audit Qualiopi sur un programme de deux jours intitulé « Conduire l'entretien professionnel ». Le projet contient le programme publié, le questionnaire de positionnement, le QCM de fin de formation et le déroulé d'animation.\n\nLe référentiel demande des objectifs opérationnels et évaluables, c'est-à-dire observables et mesurables, un positionnement à l'entrée et une évaluation de l'atteinte des objectifs.\n\nTravaille en quatre temps.\n1. Recopie les objectifs du programme tels qu'ils sont écrits. Pour chacun, dis s'il est observable et mesurable. S'il ne l'est pas, propose une réécriture qui commence par un verbe d'action observable et reste fidèle au déroulé.\n2. Construis une matrice : une ligne par objectif, une colonne pour les questions du positionnement qui le concernent, une colonne pour les questions du QCM qui le vérifient, avec leur numéro.\n3. Signale les objectifs qu'aucune question ne vérifie et les questions qui ne se rattachent à aucun objectif.\n4. Pour chaque objectif non vérifié, rédige deux questions à choix multiple : une seule bonne réponse, trois distracteurs plausibles, et une justification qui cite le passage du déroulé où la notion est enseignée.\n\nN'ajoute aucun objectif absent du déroulé. Si le déroulé ne permet pas d'enseigner un objectif, dis-le au lieu d'inventer un contenu.",
      resultat: "Vous obtenez des objectifs réécrits, une matrice qui relie objectifs, positionnement et QCM, la liste des trous et des questions orphelines, et de nouvelles questions accompagnées de leur justification. Deux contrôles restent à faire. Le formateur vérifie chaque bonne réponse sur le support. Le programme corrigé doit ensuite remplacer l'ancien partout où il figure, car l'auditeur compare les documents entre eux.",
    },
    pieges: [
      {
        titre: "Les verbes préférés de ChatGPT ne se mesurent pas",
        texte: "Sans consigne, ChatGPT écrit volontiers « comprendre les enjeux » ou « appréhender les outils ». Inscrivez dans les instructions du projet la liste des verbes refusés et la définition du guide de lecture.",
      },
      {
        titre: "Le mode étude introuvable dans le projet",
        texte: "L'option « Étudier » n'apparaît pas dans un projet. Testez vos séquences dans une conversation ordinaire, en y déposant le support concerné.",
      },
      {
        titre: "Des résultats nominatifs sur un compte personnel",
        texte: "Sur une offre gratuite ou Plus, les contenus peuvent nourrir l'entraînement si le réglage d'amélioration du modèle reste activé ; Business, Enterprise et Edu les en tiennent écartés par défaut. Pseudonymisez dans tous les cas les résultats de positionnement et de QCM.",
      },
      {
        titre: "La caméra qui prétend mesurer l'attention",
        texte: "Déduire les émotions des stagiaires relève d'une pratique que l'article 5 de l'AI Act interdit depuis le 2 février 2025. Désactivez ce type d'option dans vos outils de classe virtuelle.",
      },
      {
        titre: "Le GPT tuteur remis à un client",
        texte: "Il ne marchera plus après le 11 décembre 2026. Prévenez votre client, reconstruisez l'outil en compétence ou en plugin, et vérifiez qu'il y a de nouveau accès : la conversion ne reprend pas les droits de partage.",
      },
    ],
  },
  audience: [
    {
      title: "Responsables pédagogiques d'organismes certifiés Qualiopi",
      desc: "Vous tenez les programmes, les évaluations et les preuves d'audit. Vous apprenez à faire relire objectifs et QCM par ChatGPT avec la grille du référentiel, puis à garder la décision sur chaque correction.",
    },
    {
      title: "Ingénieurs pédagogiques et concepteurs",
      desc: "Vous construisez des parcours, des déroulés et des supports. Vous travaillez dans un projet partagé, testez vos séquences en mode étude et transformez vos méthodes en compétences.",
    },
    {
      title: "Formateurs et enseignants du supérieur",
      desc: "Vous préparez et animez vos sessions, en interne, en indépendant ou dans un établissement équipé de ChatGPT Edu. Vous apprenez à produire vos supports et à convenir avec vos apprenants de ce que l'IA peut faire dans leurs travaux.",
    },
  ],
  useCases: [
    { icon: '🎯', title: "Objectifs que l'on peut mesurer", desc: "Les objectifs d'un programme relus avec la grille de l'indicateur 5, et les verbes flous remplacés par des actions observables." },
    { icon: '✅', title: "Matrice objectifs et évaluations", desc: "Chaque objectif relié à une question du positionnement et du QCM final, les trous et les questions orphelines signalés." },
    { icon: '📚', title: "Déroulés et supports de séquence", desc: "Un déroulé minuté ou une présentation produits avec ChatGPT Work, relus contre vos sources avant usage." },
    { icon: '🎓', title: "Séquence testée en mode étude", desc: "Le concepteur joue l'apprenant débutant face à son support et repère les notions qui ne passent pas." },
    { icon: '📊', title: "Appréciations exploitées", desc: "L'export des questionnaires de satisfaction analysé, rapproché des résultats du QCM et traduit en actions d'amélioration." },
    { icon: '🧩', title: "Compétences à la place des GPTs", desc: "Tuteurs et générateurs de quiz reconstruits en compétences partagées, avant l'arrêt des GPTs en décembre." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Réécrire vos objectifs pour qu'ils se mesurent",
      duration: '1h30',
      description: "Relire les objectifs d'un programme avec la grille de l'indicateur 5, sur un compte dont on connaît les réglages.",
      items: [
        "Compte et données : offre utilisée, option d'entraînement, pièces nominatives à pseudonymiser",
        "Définition des objectifs opérationnels et évaluables dans le guide de lecture",
        "Verbes refusés et verbes observables donnés en consigne",
        "Réécriture fidèle au contenu enseigné, arbitrée par le concepteur",
      ],
      exercise: "Sur un programme déjà publié de votre catalogue, vous reformulez chaque objectif et justifiez la modification par le déroulé.",
    },
    {
      day: 1,
      title: "Module 2 · Relier chaque objectif à une question d'évaluation",
      duration: '2h',
      description: "Construire la matrice objectifs, positionnement et QCM qui répond aux indicateurs 8 et 11.",
      items: [
        "Programme, positionnement et QCM final réunis dans un projet",
        "Matrice construite, objectifs sans question et questions orphelines signalés",
        "QCM : une seule bonne réponse, trois distracteurs, une justification sourcée",
        "Vérification de chaque bonne réponse sur le support",
      ],
      exercise: "Vous construisez la matrice de l'un de vos programmes et complétez les évaluations manquantes.",
    },
    {
      day: 1,
      title: "Module 3 · Produire le déroulé et le support d'une séquence",
      duration: '2h',
      description: "Passer d'un objectif validé à un déroulé minuté et à un support prêt à relire.",
      items: [
        "Décrire la séquence : public, durée, objectif, activité, modalité d'évaluation",
        "Faire produire un déroulé ou une présentation par ChatGPT Work",
        "Reprendre un document existant avec l'extension ChatGPT pour Word",
        "Relire contre vos sources et corriger toute affirmation non vérifiée",
      ],
      exercise: "Vous produisez le déroulé et le support d'une séquence de l'une de vos formations, à partir d'un objectif réécrit au module 1.",
    },
    {
      day: 1,
      title: "Module 4 · Tester votre séquence en mode étude",
      duration: '1h30',
      description: "Se mettre à la place de l'apprenant avant la session.",
      items: [
        "Activer le mode étude avec @study ou l'option « Étudier » du menu +",
        "Travailler hors projet, dans une conversation ordinaire",
        "Jouer l'apprenant débutant et noter les notions qui résistent",
        "Fiches de révision interactives : décider de leur usage avec les stagiaires",
      ],
      exercise: "Vous testez en mode étude le support produit au module 3 et corrigez les deux passages où l'explication bloque.",
    },
    {
      day: 2,
      title: "Module 5 · Partager un projet de conception avec vos formateurs",
      duration: '1h30',
      description: "Donner à l'équipe pédagogique le même contexte et les mêmes règles.",
      items: [
        "Projet ouvert, mémoire limitée au projet",
        "Règles de conception de l'organisme écrites dans les instructions",
        "Accès en discussion pour les formateurs, en modification pour le responsable",
        "Limites à connaître : 40 fichiers sur Business, Enterprise et Edu, 25 sur Plus",
      ],
      exercise: "Vous montez le projet de conception de l'une de vos formations et y invitez un formateur avec le bon niveau d'accès.",
    },
    {
      day: 2,
      title: "Module 6 · Remplacer vos GPTs par des compétences",
      duration: '2h',
      description: "Préparer le retrait des GPTs personnalisés et construire les outils qui leur succèdent.",
      items: [
        "Recenser les GPTs, leurs auteurs et les personnes qui s'en servent, clients compris",
        "Convertir un GPT en plugin et le tester sur des demandes connues",
        "Faire écrire la compétence par ChatGPT au fil de ses questions, puis l'ouvrir à l'équipe",
        "Établissements sous ChatGPT Edu : le plugin destiné aux enseignants du supérieur",
      ],
      exercise: "Vous reconstruisez sous forme de compétence votre générateur de quiz ou votre tuteur, puis le faites tester par un collègue.",
    },
    {
      day: 2,
      title: "Module 7 · Exploiter appréciations et résultats pour l'amélioration continue",
      duration: '2h',
      description: "Transformer les retours des stagiaires en actions traçables pour les indicateurs 30 et 32.",
      items: [
        "Export des questionnaires pseudonymisé : noms et entreprises retirés des verbatims",
        "Analyse des réponses par du code, verbatims regroupés par thème",
        "Appréciations rapprochées des résultats du QCM, objectif par objectif",
        "Actions d'amélioration rédigées avec leur porteur et leur échéance",
      ],
      exercise: "Vous analysez les appréciations et les résultats d'évaluation de l'une de vos dernières sessions et rédigez le plan d'amélioration à présenter en audit.",
    },
    {
      day: 2,
      title: "Module 8 · Poser le cadre de l'IA dans votre organisme",
      duration: '1h30',
      description: "Fixer, avec l'AI Act en tête, ce que formateurs et apprenants peuvent faire avec ChatGPT.",
      items: [
        "Décision humaine sur l'évaluation des acquis, visée par l'annexe III",
        "Aucun outil qui déduit les émotions des stagiaires (article 5)",
        "Trace des formations à l'IA des salariés et des formateurs sous-traitants (article 4)",
        "Règles pour les apprenants : travaux évalués, données personnelles, espace Business ou Edu",
      ],
      exercise: "Vous écrivez ce que formateurs et stagiaires peuvent confier à ChatGPT dans votre organisme, en deux volets distincts.",
    },
  ],
  objectives: [
    "Le participant sait réécrire les objectifs d'un programme pour qu'ils soient observables et mesurables au sens du référentiel Qualiopi.",
    "Le participant sait construire la matrice qui relie chaque objectif au positionnement et au QCM final, et compléter les évaluations manquantes.",
    "Le participant sait obtenir de ChatGPT le déroulé et le support d'une séquence, puis vérifier chaque contenu sur ses sources.",
    "Le participant sait tester une séquence en mode étude et corriger les passages où l'explication bloque.",
    "Le participant sait configurer un projet de conception partagé et créer une compétence qui remplace un GPT existant.",
    "Le participant sait rédiger, pour son organisme, la règle qui encadre ChatGPT, en tenant compte des articles 4 et 5 et de l'annexe III de l'AI Act.",
  ],
  faq: [
    {
      q: "ChatGPT peut-il rédiger nos objectifs pédagogiques pour Qualiopi ?",
      a: "Il propose vite des formulations et signale les objectifs qu'aucune mesure ne pourrait vérifier. La responsabilité de l'objectif reste au concepteur, qui connaît le public et le contenu enseigné. Pendant la formation, chacun travaille sur ses propres programmes, avec la définition du guide de lecture comme critère de relecture et une règle simple : un objectif sans question pour le vérifier ne reste pas dans le programme.",
    },
    {
      q: "Le décret du 1er août 2026 change-t-il nos évaluations ?",
      a: "Pas sur l'essentiel. Applicable aux audits conduits dès le 1er novembre 2026, ce décret (n° 2026-728) ne touche pas aux indicateurs 5, 8 et 11, ceux des objectifs, du niveau d'entrée et de la mesure des acquis. Il fait évoluer d'autres indicateurs et en ajoute un, le 33, pour les formations par apprentissage. Vérifiez avec votre certificateur les attendus de votre prochain audit ; la formation s'appuie sur la version du référentiel qui vous sera opposée.",
    },
    {
      q: "Peut-on corriger les copies des apprenants avec ChatGPT ?",
      a: "ChatGPT peut proposer une correction et un commentaire que le formateur relit et valide. Un système conçu pour évaluer les acquis et orienter le parcours relève du haut risque dans l'AI Act, dont les obligations ne s'appliqueront qu'au 2 décembre 2027, date retenue par le règlement Omnibus. La règle prudente : une personne décide de la note et garde la trace de sa décision, même quand un outil l'a aidée.",
    },
    {
      q: "Qu'apporte ChatGPT Edu à un établissement d'enseignement supérieur ?",
      a: "ChatGPT Edu donne à l'établissement un espace géré, avec authentification unique, gestion automatique des comptes, compétences partagées et conversations exclues de l'entraînement des modèles. Depuis août 2026, un plugin destiné aux enseignants du supérieur aide à préparer un cours, ses supports et ses évaluations dans ChatGPT Work. L'administrateur de l'établissement choisit les fonctions ouvertes aux enseignants et aux étudiants. Un organisme de formation privé, hors enseignement supérieur, s'appuie plutôt sur l'offre Business.",
    },
    {
      q: "Nos GPTs pédagogiques vont-ils disparaître ?",
      a: "Oui, le 11 décembre 2026, sauf report obtenu par un espace Enterprise jusqu'au 11 février 2027. Chaque GPT se convertit en plugin : ses consignes et ses documents suivent, ses actions personnalisées et ses droits de partage restent en route. Un tuteur remis à un client doit donc être reconstruit et repartagé. Le module 6 reconstruit avec vous, sous forme de compétence, l'outil le plus utilisé de votre équipe.",
    },
    {
      q: "Le mode étude peut-il servir de tuteur à nos stagiaires ?",
      a: "Il aide un apprenant à réviser par questions, fiches et quiz, à partir des supports qu'il dépose. Il ne suit pas la progression d'un groupe et ne remplace pas l'accompagnement prévu par votre programme. Si vous le conseillez, rappelez aux stagiaires ce que votre organisme autorise, surtout pour les travaux évalués, et le compte sur lequel ils travaillent. Testez-le d'abord vous-même sur le support concerné, comme au module 4.",
    },
    {
      q: "Nos formateurs indépendants sont-ils concernés par la maîtrise de l'IA ?",
      a: "Oui. Réécrit en juillet 2026 par le règlement Omnibus, l'article 4 attend des organisations qui déploient l'IA qu'elles soutiennent la maîtrise de ces outils par leur personnel et par les personnes qui s'en servent pour leur compte. Un formateur sous-traitant qui prépare vos supports avec ChatGPT en fait partie. Aucun certificat n'est exigé : une trace interne des formations suivies permet de le démontrer.",
    },
    {
      q: "Cette formation est-elle finançable pour une équipe pédagogique ?",
      a: "La certification Qualiopi de Masteria ouvre l'accès à l'OPCO de votre structure, qui décide d'une prise en charge d'après sa convention collective et les fonds disponibles. Une journée intra revient à 1 980 € HT, avec au maximum douze inscrits, dans vos salles ou à distance. Nous remettons un programme dont chaque objectif est relié à sa question d'évaluation, ce que votre équipe saura reconnaître, ainsi que la convention qui accompagne le dossier.",
    },
  ],
  tarifs: {
    titre: "Combien coûte la formation d'une équipe pédagogique",
    paras: [
      "Ce tarif couvre un travail préalable sur votre catalogue : en amont, le formateur étudie un programme publié, son QCM et son déroulé, ainsi que l'export anonymisé d'une session récente. Les ateliers des deux jours portent sur ces documents, et l'équipe repart avec une matrice d'évaluation complète, une compétence de relecture et une règle d'usage de ChatGPT prête à adopter.",
      "Prenons un organisme qui inscrit sa responsable pédagogique, deux ingénieures pédagogiques et cinq formateurs, soit huit personnes. Les deux jours en intra lui coûtent 3 960 € HT, ou 495 € HT par participant. Un formateur indépendant qui veut préparer seul son prochain audit verse 1 980 € HT par journée, sur ses propres programmes. Reste à votre OPCO de fixer sa participation, selon ses propres règles.",
    ],
  },
  apres: {
    titre: "Après la formation, des outils de conception taillés pour votre organisme",
    texte: "La méthode en place, Masteria peut construire avec vous des outils durables : une compétence qui relit chaque nouveau programme avec la grille du référentiel et produit sa matrice d'évaluation, un agent qui analyse chaque mois les appréciations des stagiaires et prépare les actions d'amélioration, ou un assistant de révision fondé sur vos supports pour vos apprenants. Masteria facture ce travail au forfait, après un premier cadrage ; comme tout chantier de conseil ou de développement, il n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous un programme de votre catalogue et son QCM : les ateliers partent de vos documents d'audit.",
    fin: {
      titre: "Préparons la formation de votre équipe pédagogique",
      texte: "Dites-nous combien de formateurs et de concepteurs sont concernés, la date de votre prochain audit et l'offre ChatGPT que vous utilisez. En retour, vous recevez un programme fondé sur votre catalogue et des dates de session.",
    },
  },
  liensAssocies: [
    { label: "Formation IA pour les équipes pédagogiques, tous outils", href: '/formation-ia-pedagogique' },
    { label: "L'IA au service d'un organisme certifié Qualiopi", href: '/formation-ia-qualiopi' },
    { label: "Formation à l'AI Act", href: '/formation-ai-act' },
    { label: "Écrire la charte IA de votre structure", href: '/charte-ia-entreprise' },
    { label: "Le même métier avec Claude", href: '/formation-claude-pedagogique' },
  ],
  sources: [
    { name: "Légifrance, décret n° 2026-728 (référentiel qualité, audits dès le 1er novembre 2026)", url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054608509' },
    { name: "France compétences, guide de lecture du référentiel Qualiopi", url: 'https://www.francecompetences.fr/app/uploads/2024/10/Guide-de-lecture-Qualiopi-V8-du-23-novembre-2023.pdf' },
    { name: "AI Act sur EUR-Lex (articles 4 et 5, annexe III)", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { name: "Omnibus numérique (UE) 2026/1744 sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
    { name: "Aide OpenAI : mode étude", url: 'https://help.openai.com/fr-fr/articles/11780217-using-study-mode-in-chatgpt' },
    { name: "Aide OpenAI : projets partagés", url: 'https://help.openai.com/fr-fr/articles/10169521-projects-in-chatgpt' },
    { name: "Aide OpenAI : compétences", url: 'https://help.openai.com/fr-fr/articles/20001066-skills-in-chatgpt' },
    { name: "Aide OpenAI : fin des GPTs et conversion en plugins", url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
    { name: "OpenAI, apprendre et enseigner avec ChatGPT Work (4 août 2026)", url: 'https://openai.com/fr-FR/index/learn-teach-chatgpt-work-codex/' },
    { name: "OpenAI, présentation de ChatGPT Edu", url: 'https://openai.com/index/introducing-chatgpt-edu/' },
  ],
}
