// Contenu propre à /formation-chatgpt-pedagogique (guide terrain). Rendu par SpokePage.
// Fonctions ChatGPT vérifiées sur help.openai.com / openai.com, textes Qualiopi sur Légifrance et France compétences, AI Act sur EUR-Lex, le 28/09/2026.
export default {
  slug: 'formation-chatgpt-pedagogique',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation ChatGPT pour formateurs et responsables pédagogiques : objectifs évaluables, QCM alignés, mode étude, Qualiopi et AI Act. Finançable OPCO.",
  intro: "Un responsable pédagogique écrit des objectifs, des programmes, des évaluations, puis les preuves que l'auditeur Qualiopi viendra lire. ChatGPT produit tout cela en quelques minutes, et le risque commence là : un objectif bien tourné peut rester impossible à mesurer. Cette formation apprend à vos formateurs et ingénieurs pédagogiques à se servir de ChatGPT sur leurs propres programmes, avec la rigueur que demande le référentiel.",
  guide: {
    kicker: "Guide terrain",
    h2: "Concevoir avec ChatGPT une formation qui tient devant l'auditeur et devant les stagiaires",
    lead: "Les équipes pédagogiques attendent souvent de ChatGPT des diapositives. Son meilleur usage se situe en amont, sur la chaîne qui relie un objectif, un contenu et une évaluation. Cette chaîne est celle que contrôle le référentiel Qualiopi, et un formateur fatigué y laisse passer des trous. Le règlement européen sur l'IA ajoute une limite nette : l'outil peut aider à évaluer, la décision sur les acquis reste humaine.",
    sections: [
      {
        h3: "Le référentiel Qualiopi fournit la grille de relecture",
        paras: [
          "Trois indicateurs structurent le travail de conception. L'indicateur 5 demande des objectifs opérationnels et évaluables, que le guide de lecture définit comme observables et mesurables. L'indicateur 8 porte sur les procédures de positionnement et d'évaluation des acquis à l'entrée. L'indicateur 11 exige d'évaluer l'atteinte des objectifs par les bénéficiaires. Le décret n° 2026-728 du 1er août 2026, applicable aux audits à partir du 1er novembre 2026, conserve la rédaction de ces trois indicateurs. Il en modifie d'autres et ajoute un indicateur 33, propre aux formations par apprentissage, sur l'évaluation des enseignements par les apprenants.",
          "ChatGPT devient utile dès qu'on lui donne cette grille. Il repère un objectif qui commence par « comprendre » ou « être sensibilisé », propose un verbe observable, puis écrit la question qui prouvera l'acquis. Le formateur tranche, et le dossier d'audit gagne un lien lisible entre chaque objectif et sa preuve.",
        ],
      },
      {
        h3: "Un objectif appelle au moins une question",
        paras: [
          "La règle que nous appliquons chez Masteria tient en une ligne : pas d'objectif sans question pour le vérifier. ChatGPT tient cette règle mieux qu'un humain en fin de journée, à condition de travailler dans un projet. Créez-le avec « Nouveau projet », importez le programme, le questionnaire de positionnement, le QCM de fin de formation et le déroulé. Un projet accepte 40 fichiers sur les offres Business, Enterprise et Edu, 25 sur Plus.",
          "Dans « Paramètres du projet », passez la mémoire en « Mémoire limitée au projet » : les conversations sur un programme ne se mélangent plus avec celles d'un autre client. Partagé avec les formateurs, le projet leur donne le même contexte. L'accès en discussion suffit à un formateur qui prépare sa session ; l'accès en modification revient au responsable qui tient les documents.",
        ],
      },
      {
        h3: "Le mode étude sert à tester une séquence avant les stagiaires",
        paras: [
          "Le mode étude guide par questions au lieu de livrer la réponse. On l'active en tapant @study dans la zone de saisie ou avec l'option « Étudier » du menu +. Il est disponible sur toutes les offres, avec un point qui surprend : il ne fonctionne pas dans les projets, les GPTs ni les discussions temporaires. Il s'utilise dans une conversation standard, où l'on importe le support.",
          "Pour un concepteur, c'est un banc d'essai. Vous importez votre support de séquence et vous jouez l'apprenant débutant. Là où ChatGPT peine à expliquer une notion à partir de votre support, un stagiaire bloquera aussi. Les fiches de révision interactives qu'il crée sont enregistrées dans la bibliothèque. Un formateur peut en conseiller l'usage à ses stagiaires, dans le respect des règles de son organisme.",
        ],
      },
      {
        h3: "Les tuteurs construits en GPT ont une date de fin",
        paras: [
          "Beaucoup d'organismes ont bâti un GPT « tuteur » ou « générateur de quiz ». OpenAI prévoit le retrait des GPTs personnalisés le 11 décembre 2026 et une migration vers les plugins. Les instructions deviennent une compétence, les fichiers de connaissance sont copiés, les actions personnalisées sont perdues. Une nouveauté se construit donc en compétence : Plugins, onglet Compétences, « Créer », puis « Créer avec le chat ». Les compétences sont ouvertes aux offres Business, Enterprise, Healthcare et Edu.",
          "Dans l'enseignement supérieur, ChatGPT Edu apporte un espace géré par l'établissement, avec SSO, SCIM et des contenus exclus de l'entraînement. Depuis le 4 août 2026, OpenAI y ajoute un plugin pour les enseignants du supérieur, disponible dans ChatGPT Work : planification de cours, supports, évaluations multimédias, contenus à préparer pour la plateforme d'apprentissage.",
        ],
      },
      {
        h3: "L'AI Act distingue l'aide à la correction et la décision sur les acquis",
        paras: [
          "L'annexe III du règlement (UE) 2024/1689 classe à haut risque les systèmes d'IA destinés à évaluer les acquis d'apprentissage dans les établissements d'enseignement et de formation professionnelle, y compris quand ces résultats orientent le parcours. Depuis le règlement (UE) 2026/1744, ces obligations s'appliquent à partir du 2 décembre 2027. Faire relire une copie par ChatGPT puis noter soi-même reste une aide ; bâtir une notation automatique qui conditionne la suite du parcours entre dans le champ visé. Pour un cas limite, un avis juridique s'impose.",
          "Une interdiction s'applique déjà depuis le 2 février 2025 : l'article 5 proscrit les systèmes qui déduisent les émotions d'une personne sur le lieu de travail et dans les établissements d'enseignement, sauf raison médicale ou de sécurité. Un outil de classe virtuelle qui prétend mesurer l'attention ou l'humeur des stagiaires par la caméra tombe sous ce texte.",
        ],
      },
    ],
    table: {
      caption: "Livrables d'un organisme de formation : ce que ChatGPT apporte et ce qu'il faut contrôler",
      headers: ["Livrable (indicateur Qualiopi)", "Fonction ChatGPT", "Vigilance"],
      rows: [
        ["Analyse du besoin (4)", "Projet qui contient le compte rendu d'entretien avec le commanditaire", "Pseudonymiser les personnes citées avant import"],
        ["Objectifs opérationnels et évaluables (5)", "Relecture du programme dans le projet, avec la définition du guide de lecture en instruction", "Refuser « comprendre », « appréhender », « être sensibilisé » : ils ne se mesurent pas"],
        ["Positionnement à l'entrée (8)", "Questionnaire généré à partir des objectifs, puis testé en mode étude", "Les prérequis restent ceux du programme publié"],
        ["Évaluation des acquis (11)", "QCM avec corrigé justifié et renvoi au support", "Vérifier chaque bonne réponse sur la source ; supprimer les distracteurs ambigus"],
        ["Support et déroulé", "ChatGPT Work pour produire un document ou une présentation", "Relecture pédagogique complète ; ChatGPT Work est absent des offres Free et Go"],
        ["Appréciations des stagiaires (30)", "Analyse de données sur l'export des questionnaires de satisfaction", "Retirer noms et entreprises des verbatims avant import"],
      ],
    },
    cas: {
      h3: "Cas pratique : réaligner un programme de deux jours avant l'audit",
      contexte: "Prenons une responsable pédagogique d'un organisme de formation certifié Qualiopi. L'audit de surveillance approche. Le programme « Gérer les conflits en équipe » affiche huit objectifs, et le QCM final compte douze questions écrites par un ancien formateur. Personne n'a vérifié que chaque objectif est évalué.",
      etapes: [
        "Créer un projet « Audit programme conflits ». Dans « Paramètres du projet », régler la mémoire sur « Mémoire limitée au projet ».",
        "Importer quatre fichiers : le programme publié, le questionnaire de positionnement, le QCM final et le déroulé d'animation.",
        "Coller le prompt ci-dessous en choisissant un modèle de raisonnement (Thinking).",
        "Relire la matrice ligne par ligne avec le formateur référent ; valider ou corriger chaque objectif réécrit et chaque question proposée.",
        "Demander à ChatGPT de transformer la méthode en compétence (Plugins, onglet Compétences) pour l'appliquer aux autres programmes du catalogue.",
      ],
      prompt: "Tu m'aides à préparer un audit Qualiopi sur un programme de formation de deux jours intitulé « Gérer les conflits en équipe ». Le projet contient le programme publié, le questionnaire de positionnement, le QCM de fin de formation et le déroulé d'animation.\n\nLe référentiel demande des objectifs opérationnels et évaluables, c'est-à-dire observables et mesurables. Il demande aussi un positionnement à l'entrée et une évaluation de l'atteinte des objectifs.\n\nFais le travail en quatre temps.\nPremièrement, liste les objectifs du programme tels qu'ils sont écrits. Pour chacun, dis s'il est observable et mesurable. S'il ne l'est pas, propose une réécriture qui commence par un verbe d'action observable et qui reste fidèle au contenu du déroulé.\nDeuxièmement, construis une matrice : une ligne par objectif, une colonne pour les questions du positionnement qui le concernent, une colonne pour les questions du QCM qui le vérifient, avec leur numéro.\nTroisièmement, signale les objectifs sans aucune question et les questions qui ne se rattachent à aucun objectif.\nQuatrièmement, pour chaque objectif sans question, rédige deux questions à choix multiple. Chaque question a une seule bonne réponse, trois distracteurs plausibles, et une justification qui cite le passage du déroulé où la notion est enseignée.\n\nN'ajoute aucun objectif qui ne figure pas dans le déroulé. Si le déroulé ne permet pas d'enseigner un objectif, dis-le au lieu d'inventer un contenu.",
      resultat: "Vous obtenez des objectifs réécrits, une matrice objectifs, positionnement et QCM, la liste des trous et des questions orphelines, et des questions nouvelles avec leur justification. Deux contrôles restent à faire. Le formateur vérifie chaque bonne réponse sur le support. Le programme corrigé doit ensuite être republié partout où l'ancien figure, car l'auditeur compare les documents entre eux.",
    },
    pieges: [
      { titre: "Les verbes préférés de ChatGPT ne se mesurent pas", texte: "Sans consigne, ChatGPT écrit volontiers « comprendre les enjeux » ou « appréhender les outils ». Mettez dans les instructions du projet la liste des verbes refusés et la définition du guide de lecture." },
      { titre: "Le mode étude absent du projet", texte: "L'option « Étudier » n'apparaît pas dans un projet. Testez vos séquences dans une conversation standard, en important le support concerné." },
      { titre: "Les résultats de positionnement dans un compte personnel", texte: "Sur les offres gratuites et Plus, les contenus peuvent servir à l'entraînement si le réglage « Améliorer le modèle pour tous » est actif. Sur Business, Enterprise et Edu, ils en sont exclus par défaut. Pseudonymisez les résultats nominatifs dans tous les cas." },
      { titre: "La caméra qui mesure l'attention", texte: "Un outil qui déduit les émotions des stagiaires relève d'une pratique interdite par l'article 5 de l'AI Act depuis février 2025. Refusez cette option dans vos outils de classe virtuelle." },
      { titre: "Le GPT tuteur livré à un client", texte: "Un GPT remis à un client cessera de fonctionner au retrait prévu le 11 décembre 2026. Prévenez-le, migrez vers un plugin et vérifiez qu'il y aura accès : la migration ne reprend pas les droits de partage." },
    ],
  },
  // Publics : 3 profils propres à ChatGPT × pédagogie
  audience: [
    { title: "Responsables pédagogiques d'organismes certifiés Qualiopi", desc: "Vous tenez les programmes, les évaluations et les preuves d'audit. Vous apprenez à faire relire vos objectifs et vos QCM par ChatGPT avec la grille du référentiel." },
    { title: "Ingénieurs pédagogiques et concepteurs", desc: "Vous construisez des parcours, des déroulés et des supports. Vous travaillez dans un projet partagé et testez vos séquences en mode étude avant de les livrer." },
    { title: "Formateurs et enseignants du supérieur", desc: "Vous préparez et animez vos sessions, en interne, en indépendant ou dans un établissement équipé de ChatGPT Edu. Vous apprenez à produire vos supports et à fixer les règles d'usage de l'IA avec vos apprenants." },
  ],
  // Cas d'usage : 6 cartes
  useCases: [
    { icon: '🎯', title: "Objectifs opérationnels et évaluables", desc: "Faites relire vos objectifs et remplacez « comprendre » ou « être sensibilisé » par un verbe d'action observable." },
    { icon: '✅', title: "Matrice objectifs et évaluations", desc: "Reliez chaque objectif à une question du positionnement et du QCM final, et repérez les objectifs que rien ne vérifie." },
    { icon: '📚', title: "Déroulés et supports de séquence", desc: "Produisez un déroulé ou une présentation avec ChatGPT Work, puis relisez chaque contenu contre vos sources." },
    { icon: '🎓', title: "Test d'une séquence en mode étude", desc: "Jouez l'apprenant débutant face à votre support et repérez les notions que l'explication ne fait pas passer." },
    { icon: '📊', title: "Exploitation des appréciations", desc: "Analysez l'export de vos questionnaires de satisfaction et tirez-en les actions d'amélioration à tracer pour l'audit." },
    { icon: '🤖', title: "Compétences à la place des GPTs", desc: "Reconstruisez vos GPTs tuteur ou générateur de quiz sous forme de compétences partagées, avant leur retrait prévu le 11 décembre 2026." },
  ],
  // Programme : 8 modules
  modules: [
    { day: 1, title: "Module 1 · Réécrire vos objectifs pour qu'ils se mesurent", duration: '1h30', description: "Relire les objectifs d'un programme avec la grille de l'indicateur 5 du référentiel Qualiopi.", items: ["Lire la définition des objectifs opérationnels et évaluables dans le guide de lecture", "Donner à ChatGPT la liste des verbes refusés et des verbes observables", "Faire réécrire chaque objectif en restant fidèle au contenu enseigné", "Arbitrer les propositions : le concepteur garde la décision"], exercise: "Réécrire les objectifs de l'un de vos programmes publiés et justifier chaque changement par le contenu du déroulé." },
    { day: 1, title: "Module 2 · Relier chaque objectif à une question d'évaluation", duration: '2h', description: "Construire la matrice objectifs, positionnement et QCM qui répond aux indicateurs 8 et 11.", items: ["Importer le programme, le questionnaire de positionnement et le QCM final dans un projet", "Faire construire la matrice et signaler objectifs sans question et questions orphelines", "Rédiger des questions à choix multiple avec une bonne réponse, trois distracteurs et une justification sourcée", "Vérifier chaque bonne réponse sur le support"], exercise: "Construire la matrice de l'un de vos programmes et compléter les évaluations manquantes." },
    { day: 1, title: "Module 3 · Produire le déroulé et le support d'une séquence", duration: '2h', description: "Passer d'un objectif validé à un déroulé minuté et à un support prêt à relire.", items: ["Décrire la séquence : public, durée, objectif, activité, modalité d'évaluation", "Produire un déroulé ou une présentation avec ChatGPT Work", "Reprendre un document existant avec ChatGPT pour Word sur ChatGPT Business", "Relire le contenu contre vos sources et corriger les affirmations non vérifiées"], exercise: "Produire le déroulé et le support d'une séquence de l'une de vos formations, à partir d'un objectif réécrit au module 1." },
    { day: 1, title: "Module 4 · Tester votre séquence en mode étude", duration: '1h30', description: "Se mettre à la place de l'apprenant avant la session.", items: ["Activer le mode étude avec @study ou l'option « Étudier » du menu +", "Travailler dans une conversation standard : le mode étude n'est pas disponible dans les projets", "Jouer l'apprenant débutant et noter les notions qui résistent", "Créer des fiches de révision interactives et décider de leur usage avec les stagiaires"], exercise: "Tester en mode étude le support produit au module 3 et corriger les deux passages où l'explication bloque." },
    { day: 2, title: "Module 5 · Partager un projet de conception avec vos formateurs", duration: '1h30', description: "Donner à l'équipe pédagogique le même contexte et les mêmes règles.", items: ["Créer le projet avec « Nouveau projet » et régler « Mémoire limitée au projet »", "Écrire dans « Paramètres du projet » les règles de conception de l'organisme", "Attribuer l'accès en discussion aux formateurs et l'accès en modification au responsable", "Connaître les limites : 40 fichiers par projet sur Business, Enterprise et Edu"], exercise: "Monter le projet de conception de l'une de vos formations et y inviter un formateur avec le bon niveau d'accès." },
    { day: 2, title: "Module 6 · Remplacer vos GPTs par des compétences", duration: '2h', description: "Préparer le retrait des GPTs personnalisés et construire les outils qui leur succèdent.", items: ["Lister vos GPTs, leurs créateurs et les personnes qui s'en servent", "Migrer un GPT vers un plugin et tester le résultat sur des demandes connues", "Créer une compétence avec « Créer avec le chat » dans Plugins, onglet Compétences", "Pour les établissements sous ChatGPT Edu, découvrir le plugin destiné aux enseignants du supérieur"], exercise: "Reconstruire sous forme de compétence votre générateur de quiz ou votre tuteur, puis le faire tester par un collègue." },
    { day: 2, title: "Module 7 · Exploiter appréciations et résultats pour l'amélioration continue", duration: '2h', description: "Transformer les retours des stagiaires en actions traçables pour les indicateurs 30 et 32.", items: ["Pseudonymiser l'export des questionnaires : noms et entreprises retirés des verbatims", "Analyser les réponses avec l'analyse de données de ChatGPT et regrouper les verbatims par thème", "Rapprocher les appréciations des résultats du QCM, objectif par objectif", "Rédiger les actions d'amélioration avec leur porteur et leur échéance"], exercise: "Analyser les appréciations et les résultats d'évaluation de l'une de vos dernières sessions et rédiger le plan d'amélioration à présenter en audit." },
    { day: 2, title: "Module 8 · Écrire les règles d'usage de l'IA de votre organisme", duration: '1h30', description: "Poser un cadre conforme à l'AI Act pour les formateurs et les apprenants.", items: ["Garder la décision humaine sur l'évaluation des acquis, visée par l'annexe III de l'AI Act", "Écarter tout outil qui déduit les émotions des stagiaires, interdit par l'article 5", "Tenir la trace des formations IA des salariés et des formateurs sous-traitants (article 4)", "Fixer les règles pour les apprenants : travaux évalués, données personnelles, espace Business ou Edu"], exercise: "Rédiger la charte d'usage de l'IA de votre organisme, pour vos formateurs et pour vos stagiaires." },
  ],
  // Objectifs : observables et évaluables
  objectives: [
    "Réécrire les objectifs d'un programme pour qu'ils soient observables et mesurables au sens du référentiel Qualiopi",
    "Construire la matrice qui relie chaque objectif au positionnement et au QCM final, et compléter les évaluations manquantes",
    "Produire le déroulé et le support d'une séquence avec ChatGPT, puis en vérifier chaque contenu sur les sources",
    "Tester une séquence en mode étude et corriger les passages où l'explication bloque",
    "Paramétrer un projet de conception partagé et créer une compétence qui remplace un GPT existant",
    "Rédiger les règles d'usage de l'IA de l'organisme conformes aux articles 4 et 5 et à l'annexe III de l'AI Act",
  ],
  faq: [
    { q: "ChatGPT peut-il rédiger nos objectifs pédagogiques pour Qualiopi ?", a: "Il rédige des propositions rapides et repère les objectifs qui ne se mesurent pas. La responsabilité de l'objectif reste au concepteur, qui connaît le public et le contenu enseigné. Nous faisons travailler les participants sur leurs propres programmes, avec la définition du guide de lecture comme critère de relecture." },
    { q: "Le décret du 1er août 2026 modifie-t-il nos évaluations ?", a: "Le décret n° 2026-728 s'applique aux audits à partir du 1er novembre 2026. Les indicateurs 5, 8 et 11, qui portent sur les objectifs, le positionnement et l'évaluation des acquis, gardent leur rédaction. D'autres indicateurs changent, et un indicateur 33 propre à l'apprentissage apparaît. Vérifiez avec votre certificateur les attendus de votre prochain audit." },
    { q: "Peut-on corriger les copies des apprenants avec ChatGPT ?", a: "ChatGPT peut proposer une correction et un commentaire que le formateur relit et valide. Un système destiné à évaluer les acquis et à orienter le parcours relève du haut risque dans l'AI Act, avec des obligations applicables à partir du 2 décembre 2027. La règle prudente : l'humain décide de la note et garde la trace de sa décision." },
    { q: "Qu'apporte ChatGPT Edu à un établissement d'enseignement supérieur ?", a: "ChatGPT Edu donne à l'établissement un espace de travail géré, avec SSO, SCIM, gestion des GPTs et des compétences, et des conversations exclues de l'entraînement des modèles. Depuis août 2026, un plugin destiné aux enseignants du supérieur aide à planifier un cours et à préparer supports et évaluations dans ChatGPT Work. L'administrateur de l'établissement décide des fonctions ouvertes." },
    { q: "Nos GPTs pédagogiques vont-ils disparaître ?", a: "OpenAI prévoit leur retrait le 11 décembre 2026, avec une migration vers les plugins depuis « Mes GPTs ». Les instructions et les fichiers suivent, les actions personnalisées et les droits de partage ne suivent pas. La formation montre comment reconstruire un tuteur ou un générateur de quiz sous forme de compétence." },
    { q: "Le mode étude peut-il servir de tuteur à nos stagiaires ?", a: "Il aide un apprenant à réviser par questions, fiches et quiz, à partir des supports qu'il importe. Il ne suit pas la progression d'un groupe et ne remplace pas l'accompagnement prévu par votre programme. Rappelez aux stagiaires les règles d'usage de l'IA de votre organisme, surtout pour les travaux évalués." },
    { q: "Nos formateurs indépendants sont-ils concernés par l'obligation de littératie IA ?", a: "L'article 4 de l'AI Act vise le personnel et les autres personnes qui utilisent des systèmes d'IA pour le compte de l'organisme. Un formateur sous-traitant qui prépare vos supports avec ChatGPT en fait partie. La Commission indique qu'aucun certificat n'est exigé ; une trace interne des formations suivies permet de le démontrer." },
    { q: "Cette formation est-elle finançable pour une équipe pédagogique ?", a: "Masteria est certifié Qualiopi, et la formation peut être prise en charge par l'OPCO de votre structure selon sa convention collective. En intra, la journée est facturée 1 980 € HT pour 12 participants au plus, dans vos locaux ou à distance. Nous fournissons le programme, avec ses objectifs évaluables et son QCM, et la convention à joindre à la demande de prise en charge." },
  ],
  sources: [
    { name: "Légifrance : décret n° 2026-728 du 1er août 2026 relatif au référentiel national sur la qualité", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054608509" },
    { name: "France compétences : guide de lecture du référentiel national qualité (V8)", url: "https://www.francecompetences.fr/app/uploads/2024/10/Guide-de-lecture-Qualiopi-V8-du-23-novembre-2023.pdf" },
    { name: "EUR-Lex : règlement (UE) 2024/1689 sur l'intelligence artificielle (article 5 et annexe III)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { name: "EUR-Lex : règlement (UE) 2026/1744 (Omnibus numérique sur l'IA)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    { name: "OpenAI Help Center : utiliser le mode étude dans ChatGPT", url: "https://help.openai.com/fr-fr/articles/11780217-using-study-mode-in-chatgpt" },
    { name: "OpenAI Help Center : projets dans ChatGPT", url: "https://help.openai.com/fr-fr/articles/10169521-projects-in-chatgpt" },
    { name: "OpenAI Help Center : les compétences dans ChatGPT", url: "https://help.openai.com/fr-fr/articles/20001066-skills-in-chatgpt" },
    { name: "OpenAI Help Center : retrait et migration des GPTs personnalisés", url: "https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq" },
    { name: "OpenAI : nouvelles façons d'apprendre et d'enseigner avec ChatGPT Work et Codex (4 août 2026)", url: "https://openai.com/fr-FR/index/learn-teach-chatgpt-work-codex/" },
    { name: "OpenAI : présentation de ChatGPT Edu", url: "https://openai.com/index/introducing-chatgpt-edu/" },
  ],
}
