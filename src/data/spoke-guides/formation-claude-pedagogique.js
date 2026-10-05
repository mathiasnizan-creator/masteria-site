// Contenu propre à /formation-claude-pedagogique (guide terrain, page propre). Rendu par SpokePage.
// Faits vérifiés le 5 octobre 2026 : centre d'aide d'Anthropic (support.claude.com), Education Report d'Anthropic,
// conditions commerciales d'Anthropic, Légifrance. Terrain : mission editeur-pole-formation (missions-formation.js).
export default {
  slug: 'formation-claude-pedagogique',
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  pagePropre: true,
  metaDesc: "Formation Claude pour les équipes pédagogiques : objectifs, supports et quiz tirés de votre documentation produit, exercices interactifs en artefact.",
  resume: "Cette formation Claude pour les équipes pédagogiques s'étend sur deux journées (14 heures) et vise concepteurs, responsables de contenus et équipes d'académie client. Elle se suit dans vos locaux comme en classe virtuelle, en groupe intra de 12 personnes au maximum ou seul avec le formateur. Chaque journée coûte 1 980 € HT ; Masteria étant certifié Qualiopi, l'OPCO dont dépend votre structure décide de la prise en charge selon sa branche.",
  enBref: [
    { label: 'Formation', value: "Claude appliqué à la conception : objectifs, supports, quiz et exercices bâtis sur votre documentation produit" },
    { label: 'Durée', value: "Deux jours, 14 heures au total, chaque module se concluant sur la révision d'un de vos contenus" },
    { label: 'Formats', value: "Jusqu'à 12 concepteurs et formateurs en intra, ou un parcours individuel ; dans vos murs ou en classe virtuelle" },
    { label: 'Tarif', value: "1 980 € HT pour chaque journée, quel que soit l'effectif du groupe" },
    { label: 'Financement', value: "Certification Qualiopi de Masteria ; demande à adresser à l'OPCO de votre branche, montée ensemble" },
    { label: 'Prérequis', value: "Pratique de la conception de formations ; un compte Claude payant, Team de préférence pour partager compétences et projets" },
  ],
  intro: "Une équipe qui forme aux produits de son entreprise part toujours du même matériau : une documentation de plusieurs centaines de pages, réécrite à chaque version du logiciel. Claude lit cette documentation sans en sauter une page, rattache chaque objectif à l'épreuve qui le vérifie, applique la charte de l'équipe enregistrée en compétence et fabrique des exercices interactifs que les formateurs testent avant la session. Ce guide suit la révision d'un module, des notes de version jusqu'au quiz, et signale les droits à vérifier sur chaque contenu réutilisé.",
  guide: {
    kicker: 'Guide terrain',
    h2: "Claude repart de toute la documentation produit et relie chaque question du quiz à sa page",
    lead: "Un module de formation produit vieillit au rythme du logiciel qu'il enseigne : un menu renommé, une étape ajoutée, et la moitié des questions du quiz deviennent fausses sans que l'équipe le remarque. Claude peut tenir dans une même conversation les notes de version, le guide utilisateur et l'ancien module, puis désigner ce qui a changé pour l'apprenant. La méthode tient en deux exigences. Chaque objectif annoncé reçoit son épreuve. Chaque bonne réponse renvoie à la page qui la justifie.",
    sections: [
      {
        h3: "La documentation complète entre dans la conversation, sous deux réserves",
        paras: [
          "La fenêtre de contexte, c'est le volume de texte que Claude embrasse d'un seul regard au cours d'un échange. Sur une offre payante, elle atteint un million de tokens, ces morceaux de mots qui servent d'unité de lecture, avec Fable 5.1, Sonnet 5.5 ou Opus 5.5. D'après Anthropic, 500 pages de texte font environ 200 000 tokens : un guide utilisateur de 400 pages, ses notes de version et l'ancien module y logent ensemble, et vous pouvez joindre jusqu'à vingt fichiers à une même conversation.",
          "Première réserve : un PDF long de plus de 100 pages ne livre que son texte. Les captures d'écran, qui portent souvent l'essentiel d'une formation logicielle, sortent alors de l'analyse ; découpez le guide en parties de 100 pages au plus dès que le module s'appuie sur l'interface. Seconde réserve : dans un projet, Claude bascule vers une recherche d'extraits quand les documents de connaissance approchent la limite du contexte. Cette méthode, appelée RAG, va chercher les seuls extraits qui répondent à la question, sans parcourir chaque fichier. Un contrôle exhaustif, comme le recensement de toutes les nouveautés d'une version, exige donc de joindre les fichiers à la conversation elle-même plutôt qu'aux connaissances du projet.",
          "Une conversation qui s'allonge finit enfin par condenser ses premiers échanges pour libérer de la place. Ouvrez une conversation par module plutôt qu'une seule pour toute la version, et reprenez à chaque fois les fichiers dont le module a besoin.",
        ],
      },
      {
        h3: "Un objectif s'écrit avec l'épreuve qui le vérifiera",
        paras: [
          "Le rapport d'Anthropic sur les usages des enseignants, publié le 27 août 2025 et signé Drew Bent et Kunal Handa, a passé au crible environ 74 000 conversations de personnels de l'enseignement supérieur sur Claude.ai, entre le 22 mai et le 2 juin 2025 (utilisateurs des offres Free et Pro ; le rapport ne précise pas le modèle). La conception de cours et de supports y occupait 57 % des échanges, loin devant la recherche (13 %) et l'évaluation des étudiants (7 %). Les auteurs observent aussi des enseignants qui bâtissent leurs propres exercices interactifs dans les artefacts.",
          "Pour un module produit, un objectif décrit un geste dans le logiciel, sa condition et son critère : « planifier une intervention récurrente dans le module Planning de la version 5, sans aide, en moins de trois minutes ». Demandez à Claude d'écrire chaque objectif suivi de l'épreuve qui le vérifie, question de quiz ou tâche à réaliser dans l'environnement de démonstration. Un verbe comme « découvrir » ou « connaître » ne résiste pas à cette discipline : il ne désigne aucun geste qu'un formateur puisse observer.",
          "Le même rapport signale un point d'attention. Lorsque les enseignants confiaient une évaluation à Claude, 48,9 % de ces échanges relevaient de l'automatisation, l'IA accomplissant elle-même la tâche. Pour un module produit, la correction d'un quiz fermé par une machine ne pose pas de difficulté ; le jugement sur les acquis d'un apprenant, lui, revient au formateur.",
        ],
      },
      {
        h3: "La charte de l'académie devient une compétence que chaque concepteur applique",
        paras: [
          "Une compétence, ou skill, prend la forme d'un dossier organisé autour d'un fichier SKILL.md. Ce fichier commence par un nom, limité à 64 caractères, et par une description qui n'en dépasse pas 200 ; viennent ensuite les instructions, avec au besoin des fichiers d'appui tels qu'un modèle de déroulé ou un glossaire. Claude lit la description pour décider d'appliquer la compétence ; elle doit donc nommer les demandes qui la déclenchent, par exemple « conception ou révision d'un module de l'académie client ». Les compétences ne fonctionnent qu'avec l'exécution de code activée.",
          "Un projet remplit une autre fonction : il conserve les fichiers et les consignes d'un module donné, rechargés à chaque conversation de ce projet. La compétence porte la méthode et vaut pour tous les modules ; le projet porte la matière d'un seul.",
          "Vous créez une compétence en déposant un fichier ZIP dans la liste de vos compétences, ou en demandant à Claude de la rédiger d'après une conversation réussie. Sur Team et Enterprise, vous la partagez à des collègues, qui s'en servent sans pouvoir la modifier, ou vous la versez au catalogue commun de l'organisation, après relecture par un Owner, l'un des administrateurs de l'organisation, si votre politique le demande. Une charte pédagogique enregistrée de cette façon contient au moins quatre éléments.",
        ],
        list: [
          "la structure d'un module : accroche, démonstration, mise en pratique, vérification ;",
          "les règles de quiz : une seule bonne réponse, des distracteurs tirés d'erreurs constatées chez les apprenants, aucune tournure négative ;",
          "le glossaire des noms officiels des écrans et des menus, tenu version par version ;",
          "les formats de sortie : déroulé Word, présentation PowerPoint, banque de questions au format attendu par votre plateforme.",
        ],
      },
      {
        h3: "Un artefact transforme une procédure en exercice, testé avant la session",
        paras: [
          "Un artefact est un contenu autonome que Claude construit à côté de la conversation : document, schéma, petite application. Pour une formation logicielle, il donne une simulation de l'écran de paramétrage qui réagit à chaque clic, un quiz commenté réponse par réponse, ou un scénario dans lequel l'apprenant choisit l'étape suivante. Un artefact peut aussi appeler Claude : l'apprenant pose ses questions et reçoit une réponse adaptée, chaque utilisateur se connectant avec son propre compte Claude, sur lequel son usage est décompté.",
          "Les artefacts gardent leurs données entre deux utilisations, en stockage personnel ou partagé, dans la limite de 20 Mo de texte par artefact. En stockage partagé, chaque utilisateur voit les données des autres : un tableau des scores visible de tous convient à un jeu, alors que les résultats nominatifs d'une évaluation n'ont rien à y faire.",
          "Claude Design, en bêta sur les offres payantes, produit fiches mémo, maquettes d'écran et pages de présentation avec votre système de design importé : couleurs, polices, composants. Il fonctionne d'emblée sur Team et attend l'activation d'un Owner sur Enterprise. Une maquette s'exporte en PDF, en PowerPoint ou en HTML autonome ; l'outil n'a pas encore d'historique des versions, d'où l'intérêt d'exporter avant toute refonte. Pour vos clients, l'exercice se prototype dans Claude, puis il rejoint votre plateforme de formation.",
        ],
      },
    ],
    table: {
      caption: "De la documentation produit au module livré : la fonction de Claude à chaque étape",
      headers: ['Étape', 'Fonction de Claude', 'Contrôle avant diffusion'],
      rows: [
        ["Repérer les nouveautés utiles à l'apprenant", "Conversation avec les notes de version et le guide joints en entier", "Chaque nouveauté citée renvoie à une page des notes de version"],
        ["Écrire objectifs et épreuves", "Projet du module, avec vos règles d'objectifs dans ses consignes", "Aucun objectif sans question ni tâche notée"],
        ["Appliquer la charte de l'académie", "Compétence partagée ou publiée dans l'organisation", "La description de la compétence nomme les demandes qui la déclenchent"],
        ["Rédiger déroulé et support", "Création de fichiers Word et PowerPoint ; Claude Slides en bêta", "Les libellés d'écran correspondent à la version livrée"],
        ["Construire l'exercice interactif", "Artefact, relié ou non à Claude", "Test par trois profils d'apprenants ; rien de nominatif en stockage partagé"],
        ["Produire la fiche mémo", "Claude Design avec votre système de design", "Export relu ; aucun historique des versions dans l'outil"],
      ],
    },
    cas: {
      h3: "Cas pratique : réviser le module « Prise en main » avant la sortie de la version 5",
      contexte: "L'académie client d'un éditeur de logiciel de gestion des interventions prépare la sortie de la version 5, attendue dans trois semaines. Le module « Prise en main », 45 minutes et un quiz de 12 questions, décrit encore la version 4. La responsable des contenus dispose des notes de version (80 pages), du guide utilisateur (410 pages) et du module en vigueur ; elle doit remettre la version révisée aux formateurs vendredi.",
      etapes: [
        "Créez un projet « Prise en main v5 » ; notez dans ses consignes le public, techniciens et planificateurs chez les clients, ainsi que la durée du module, et activez la compétence de charte de l'académie.",
        "Découpez le guide utilisateur en cinq fichiers de 100 pages au plus, pour que Claude analyse aussi les captures d'écran.",
        "Joignez à une conversation du projet les notes de version, les cinq parties du guide, le déroulé actuel et le quiz, puis soumettez la demande qui suit.",
        "Rejouez chaque question du nouveau quiz dans l'environnement de démonstration de la version 5.",
        "Faites construire l'exercice de planification sous forme d'artefact, confiez-le à deux formateurs pour un essai, puis ajoutez à la compétence ce que cet essai vous a appris.",
      ],
      prompt: "Je dois réviser le module « Prise en main » de notre académie client pour la version 5 de notre logiciel de gestion des interventions. Durée : 45 minutes. Public : techniciens et planificateurs chez nos clients, qui utilisent la version 4 au quotidien.\n\nFichiers joints : les notes de version 5, le guide utilisateur v5 en cinq parties, le déroulé actuel du module et son quiz de 12 questions.\n\nProcède en quatre temps.\n1. Liste les nouveautés de la version 5 qui changent le travail quotidien d'un technicien ou d'un planificateur. Pour chacune, cite la page des notes de version et la page du guide qui la décrit. Laisse de côté ce qui ne concerne que l'administrateur.\n2. Relève dans le déroulé et dans le quiz tout ce que la version 5 rend faux : nom de menu, ordre des étapes, écran décrit. Donne l'ancien passage, la correction et la page qui la justifie.\n3. Propose quatre objectifs au plus. Chacun décrit un geste observable dans le logiciel, avec sa condition et son critère de réussite, suivi de la question ou de la tâche pratique qui le vérifiera.\n4. Écris le nouveau quiz de 12 questions : quatre propositions, une seule bonne réponse, des distracteurs tirés des habitudes de la version 4, et sous chaque question la page du guide qui justifie la bonne réponse.\n\nQuand la documentation se contredit ou ne permet pas de trancher, écris « à vérifier dans le logiciel » au lieu de choisir.",
      resultat: "Vous disposez de la liste des nouveautés utiles avec leurs pages, des corrections à reporter dans le support, de quatre objectifs reliés à leur épreuve et d'un quiz dont chaque bonne réponse renvoie au guide. Avant de remettre le module, ouvrez la version 5 et contrôlez chaque libellé à l'écran : la documentation décrit parfois un intitulé que l'équipe de développement a modifié ensuite. Les mentions « à vérifier dans le logiciel » restent dans le module jusqu'à la réponse de l'équipe produit.",
    },
    pieges: [
      {
        titre: "Le manuel d'un autre éditeur est adapté sans autorisation",
        texte: "L'article L122-4 du Code de la propriété intellectuelle rend illicite la reproduction d'une œuvre sans le consentement de son auteur, et il étend la règle à la traduction, à l'adaptation et à la transformation. Faire réécrire par Claude le cours d'un partenaire ou le manuel d'un autre éditeur tombe sous cette règle. Vérifiez la licence de chaque source avant de la joindre à une conversation.",
      },
      {
        titre: "La garantie d'Anthropic s'arrête à vos propres sources",
        texte: "Les conditions commerciales d'Anthropic, en vigueur depuis le 17 juin 2025, attribuent au client la propriété des contenus produits et prévoient qu'Anthropic le défende face aux réclamations de propriété intellectuelle visant son usage payant. Cette défense ne joue pas quand la réclamation naît d'un contenu que le client a lui-même fourni. Un support qui reprend un document tiers engage donc votre seule responsabilité.",
      },
      {
        titre: "Les captures d'un long guide en PDF ne sont pas lues",
        texte: "Passé 100 pages, Claude ne retient d'un PDF que le texte. Un quiz sur l'interface construit à partir d'un guide de 400 pages peut ainsi décrire des écrans que Claude n'a jamais vus, d'après leur seule légende. Découpez le guide en parties plus courtes, ou faites contrôler chaque question à l'écran.",
      },
      {
        titre: "L'exercice partagé ne s'ouvre pas chez le client",
        texte: "Un artefact qui appelle Claude s'utilise avec un compte Claude, celui de chaque utilisateur. Beaucoup de vos clients n'en possèdent pas, et sur Team comme sur Enterprise un artefact reste par défaut à l'intérieur de l'organisation. Prévoyez la diffusion dans votre plateforme de formation dès la conception, et réservez l'artefact au prototype et aux essais internes.",
      },
    ],
  },
  audience: [
    {
      title: "Concepteurs et ingénieurs pédagogiques",
      desc: "Vous transformez une documentation en parcours, en objectifs et en évaluations. Vous apprenez à confier à Claude la documentation complète et à garder chaque contenu relié à sa source.",
    },
    {
      title: "Responsables d'académie client et de formation produit",
      desc: "Vous formez clients et partenaires à chaque version du logiciel. Vous apprenez à réviser un module sans repartir de zéro et à concevoir des exercices que vos clients pourront suivre dans votre plateforme.",
    },
    {
      title: "Responsables de contenus et formateurs internes",
      desc: "Vous tenez la charte, les gabarits et la banque de questions. Vous apprenez à enregistrer cette charte dans une compétence et à trancher la question des droits sur chaque contenu.",
    },
  ],
  useCases: [
    { icon: '🆕', title: "Nouveautés de version repérées", desc: "Les changements utiles à l'apprenant, chacun relié à sa page des notes de version." },
    { icon: '🎯', title: "Objectifs et épreuves appariés", desc: "Un geste observable, sa condition, son critère, puis la question ou la tâche qui le vérifie." },
    { icon: '❓', title: "Quiz justifiés page par page", desc: "Quatre propositions, une bonne réponse et la page du guide qui la prouve." },
    { icon: '🖱️', title: "Simulations d'écran", desc: "Exercices interactifs en artefact, essayés par vos formateurs avant la session." },
    { icon: '🗂️', title: "Fiches mémo à votre charte", desc: "Claude Design et votre système de design, avec un export en PDF ou en PowerPoint." },
    { icon: '⚖️', title: "Droits sur les contenus", desc: "Licence de chaque source contrôlée, propriété des contenus produits clarifiée." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Donner à Claude une documentation produit complète",
      duration: '1h30',
      description: "Distinguer ce que Claude analyse de ce qui lui échappe.",
      items: [
        "Fenêtre de contexte des offres payantes et vingt fichiers par conversation",
        "PDF au-delà de 100 pages : texte seul, captures ignorées",
        "Projets, recherche d'extraits et condensation des échanges anciens",
        "Une conversation par module plutôt qu'une pour toute la version",
      ],
      exercise: "Vous joignez la documentation d'un de vos produits, posez trois questions précises et retrouvez chaque réponse à sa page.",
    },
    {
      day: 1,
      title: "Module 2 · Écrire des objectifs appariés à leur épreuve",
      duration: '2h',
      description: "Donner à chaque objectif annoncé la question ou la tâche qui le prouve.",
      items: [
        "Geste observable, condition et critère de réussite",
        "Vocabulaire officiel du produit, version par version",
        "Question de quiz ou tâche dans l'environnement de démonstration",
        "Ce que dit le rapport d'Anthropic sur la conception et l'évaluation",
      ],
      exercise: "Vous réécrivez les objectifs d'un de vos modules, chacun accompagné de son épreuve.",
    },
    {
      day: 1,
      title: "Module 3 · Construire un quiz justifié par la documentation",
      duration: '2h',
      description: "Produire des questions dont chaque bonne réponse se vérifie.",
      items: [
        "Distracteurs tirés des habitudes de la version précédente et des tickets de support",
        "Page justificative sous chaque question",
        "Mention « à vérifier dans le logiciel » quand les sources divergent",
        "Essai de chaque question à l'écran avant diffusion",
      ],
      exercise: "Vous révisez le quiz d'un module existant pour la prochaine version de votre produit.",
    },
    {
      day: 1,
      title: "Module 4 · Tirer le déroulé et le support de la documentation",
      duration: '1h30',
      description: "Obtenir des fichiers prêts à reprendre dans vos gabarits.",
      items: [
        "Déroulé Word et présentation PowerPoint créés par Claude",
        "Claude Slides en bêta : diapositives modifiables, export PowerPoint ou PDF",
        "Claude dans PowerPoint, sur la présentation ouverte",
        "Contrôle des libellés d'écran et des captures",
      ],
      exercise: "Vous produisez dans votre gabarit les diapositives d'une séquence de 20 minutes.",
    },
    {
      day: 2,
      title: "Module 5 · Enregistrer la charte pédagogique dans une compétence",
      duration: '1h30',
      description: "Faire appliquer la même méthode par toute l'équipe.",
      items: [
        "Fichier SKILL.md : nom, description, instructions, fichiers d'appui",
        "Rédaction de la compétence par Claude d'après une conversation réussie",
        "Partage à des collègues ou publication dans l'organisation",
        "Test du déclenchement sur des demandes réelles",
      ],
      exercise: "Vous créez la compétence qui porte votre charte, puis vous la mettez à l'épreuve sur deux demandes réelles.",
    },
    {
      day: 2,
      title: "Module 6 · Créer des exercices interactifs en artefact",
      duration: '2h',
      description: "Passer d'une procédure écrite à un exercice qui réagit.",
      items: [
        "Simulation d'écran, quiz commenté, scénario à embranchements",
        "Artefacts qui appellent Claude : le compte de chaque utilisateur",
        "Stockage personnel ou partagé, 20 Mo de texte au plus",
        "Essai par trois profils d'apprenants",
      ],
      exercise: "Vous construisez l'exercice interactif d'une procédure de votre produit et le soumettez à un collègue.",
    },
    {
      day: 2,
      title: "Module 7 · Mettre en forme avec Claude Design",
      duration: '2h',
      description: "Produire fiches mémo et maquettes conformes à la charte graphique.",
      items: [
        "Import du système de design : couleurs, polices, composants",
        "Fiche mémo, maquette d'écran, page de présentation",
        "Commentaires sur le canevas et modifications directes",
        "Exports PDF, PowerPoint et HTML ; pas encore d'historique des versions",
      ],
      exercise: "Vous réalisez la fiche mémo de votre module dans votre charte graphique.",
    },
    {
      day: 2,
      title: "Module 8 · Sécuriser les droits et la diffusion",
      duration: '1h30',
      description: "Décider de ce qui peut être repris, produit et partagé.",
      items: [
        "Article L122-4 du Code de la propriété intellectuelle et licences des sources",
        "Propriété des contenus produits selon les conditions d'Anthropic",
        "Partage des artefacts et diffusion dans votre plateforme",
        "Données des apprenants : pseudonymisation, espace Team ou Enterprise",
      ],
      exercise: "Vous rédigez la règle de l'équipe sur les sources, les droits et la diffusion des contenus.",
    },
  ],
  objectives: [
    "Le participant sait faire repérer par Claude les nouveautés d'une version utiles à l'apprenant, avec la page de chaque source.",
    "Le participant sait formuler un objectif observable suivi de l'épreuve qui le vérifie.",
    "Le participant sait produire un quiz dont chaque bonne réponse renvoie à une page de la documentation.",
    "Le participant sait enregistrer la charte de l'équipe dans une compétence et contrôler qu'elle se déclenche.",
    "Le participant sait construire un exercice interactif en artefact et choisir son mode de stockage.",
    "Le participant sait vérifier les droits attachés à une source avant de l'adapter dans un support.",
  ],
  tarifs: {
    titre: "Deux journées bâties sur vos modules et votre documentation",
    paras: [
      "Avant la session, nous recevons un module à réviser, la documentation produit qui l'accompagne, votre charte pédagogique et vos gabarits : chaque exercice porte ainsi sur vos propres contenus. Un groupe type compte la responsable de l'académie, trois concepteurs et deux formateurs.",
      "Le groupe paie 1 980 € HT par journée. En intra, l'addition des deux journées atteint ainsi 3 960 € HT, pour un groupe qui peut compter jusqu'à 12 personnes ; avec les six personnes de l'exemple, la dépense s'établit à 660 € HT par participant. En individuel, une conceptrice suit le même programme au même prix de journée. Grâce à la certification Qualiopi de Masteria, vous pouvez solliciter l'OPCO de votre branche, qui fixe le montant pris en charge ; la demande se prépare avec nous.",
    ],
  },
  apres: {
    titre: "Ensuite, un outil de révision des modules à chaque version",
    texte: "Masteria peut développer avec votre équipe une compétence de révision qui confronte la nouvelle documentation au module en place, signale les passages devenus faux et propose les corrections avec leurs pages. Elle se complète d'un gabarit d'exercice interactif, réutilisable pour chacune de vos procédures. L'ensemble est documenté, éprouvé sur une version passée de votre produit, puis remis à l'équipe pédagogique, qui le fait évoluer au fil des versions sans dépendre d'un prestataire. Aucun gain n'est promis d'avance : la révision suivante montre ce que l'outil a changé.",
  },
  cta: {
    milieu: "Confiez-nous un module à réviser et sa documentation : le programme se construit sur eux.",
    fin: {
      titre: "Préparons la prochaine version de vos modules",
      texte: "Indiquez les produits que vous enseignez, vos publics et votre plateforme de formation : une proposition calée sur vos modules, avec ses dates, son prix et le dossier OPCO, vous attend en retour.",
    },
  },
  terrain: {
    titre: "Sur le terrain : une responsable formation et ses deux ingénieures pédagogiques",
    texte: "En septembre 2026, trois personnes ont suivi deux journées à distance : la responsable de la formation d'une société qui édite des logiciels pour les entreprises, et ses deux ingénieures pédagogiques. Leur équipe forme clients et partenaires aux produits maison et utilisait Claude Team depuis quelques semaines. Le programme les faisait repartir avec deux compétences ouvertes à toute l'organisation : la première produit les supports de cours, la seconde prend en charge la logistique administrative des sessions. S'y ajoutent l'ossature d'un parcours certifiant pour les partenaires et un module existant repris dans leurs gabarits PowerPoint. Un bilan à froid portera, un mois plus tard, sur les usages installés.",
    lien: '/etudes-de-cas-ia#mission-editeur-pole-formation',
  },
  liensAssocies: [
    { label: "Formation IA pour l'ingénierie pédagogique, tous outils confondus", href: '/formation-ia-pedagogique' },
    { label: "Récits de missions de formation, dont celle du pôle d'un éditeur", href: '/etudes-de-cas-ia' },
    { label: "Formation à l'art du prompt pour vos concepteurs", href: '/formation-prompt-engineering' },
    { label: "Panorama des formations Claude par métier", href: '/formation-claude-ia' },
  ],
  avisPriorite: ['Claude', 'pédagogi', 'contenu', 'ateliers pratiques'],
  auteur: true,
  faq: [
    {
      q: "Claude lit-il un guide utilisateur de 400 pages en entier ?",
      a: "Pour le texte, oui : un tel guide tient dans le million de tokens que permettent les offres payantes. Les images, elles, ne sont analysées que dans un PDF qui ne dépasse pas 100 pages ; découpez donc un guide dont les captures d'écran comptent. Dans un projet, au-delà d'un certain volume, Claude recherche les extraits utiles au lieu de tout relire : joignez les documents à la conversation pour un contrôle exhaustif.",
    },
    {
      q: "Comment faire respecter notre charte pédagogique par toute l'équipe ?",
      a: "Enregistrez-la dans une compétence : un fichier SKILL.md qui porte vos règles, accompagné de vos gabarits et de votre glossaire produit. Sur Team et Enterprise, vous la partagez à des collègues ou la versez au catalogue commun, et un Owner peut l'installer d'office pour tous. Éprouvez-la sur des demandes réelles : si elle ne se déclenche pas, sa description manque de précision.",
    },
    {
      q: "Nos clients pourront-ils suivre un exercice construit dans Claude ?",
      a: "Un artefact s'ouvre avec un compte Claude, et celui qui appelle Claude décompte l'usage sur le compte de chaque utilisateur. Pour des clients sans compte, l'exercice se prototype et s'éprouve dans Claude, puis il est repris dans votre plateforme de formation ; une maquette conçue avec Claude Design s'exporte en HTML autonome, en PDF ou en PowerPoint.",
    },
    {
      q: "À qui appartiennent les supports produits avec Claude ?",
      a: "Pour Team et Enterprise, ce sont les conditions commerciales d'Anthropic qui s'appliquent : elles attribuent au client la propriété des contenus produits. Les conditions grand public cèdent à l'utilisateur les droits qu'Anthropic pourrait détenir sur ces contenus. Dans tous les cas, les droits sur vos sources restent inchangés : un manuel tiers appartient toujours à son auteur, même reformulé par Claude.",
    },
    {
      q: "Claude Design est-il ouvert sur notre offre ?",
      a: "Claude Design est en bêta pour les abonnés Pro et Max comme pour les organisations Team et Enterprise. Il fonctionne d'emblée sur Pro, Max et Team ; sur Enterprise, un Owner l'active dans les réglages de l'organisation. Son usage puise dans les mêmes limites que le reste de Claude, sans enveloppe séparée.",
    },
    {
      q: "Peut-on confier à Claude les résultats nominatifs de nos apprenants ?",
      a: "Mieux vaut les pseudonymiser avant tout import, puis travailler sur une offre Team ou Enterprise, où Anthropic n'utilise pas vos contenus pour entraîner ses modèles, sauf choix contraire. Dans un artefact, regardez le mode de stockage : en stockage partagé, chaque utilisateur voit les données saisies par les autres. Le jugement sur les acquis de chaque apprenant reste au formateur.",
    },
    {
      q: "Faut-il savoir programmer pour créer un exercice interactif ?",
      a: "Non. Vous décrivez l'exercice, Claude écrit le code de l'artefact et l'affiche à côté de la conversation. Quand une erreur apparaît, un bouton la transmet à Claude, qui propose une correction sans garantie de succès. L'essentiel du travail reste pédagogique : le scénario, le retour donné à chaque réponse, l'essai par de vrais profils d'apprenants.",
    },
    {
      q: "Notre OPCO peut-il financer la formation de l'équipe pédagogique ?",
      a: "Masteria étant certifié Qualiopi, votre dossier part vers l'opérateur de compétences dont relève votre structure, qui statue selon les règles de sa branche. Un groupe intra réunit au plus 12 personnes pour les deux journées, sur place ou en ligne, chaque journée étant facturée 1 980 € HT à l'ensemble du groupe. Le programme, ses objectifs évaluables et la convention sont joints au dossier de prise en charge.",
    },
  ],
  sources: [
    { name: "Anthropic, Education Report : comment les enseignants utilisent Claude (27 août 2025)", url: 'https://www.anthropic.com/news/anthropic-education-report-how-educators-use-claude' },
    { name: "Anthropic, centre d'aide : taille du contexte, projets et condensation automatique", url: 'https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans' },
    { name: "Anthropic, centre d'aide : formats et plafonds des fichiers joints", url: 'https://support.claude.com/en/articles/8241126-upload-files-to-claude' },
    { name: "Anthropic, centre d'aide : écrire une compétence personnalisée", url: 'https://support.claude.com/en/articles/12512198-how-to-create-custom-skills' },
    { name: "Anthropic, centre d'aide : les artefacts, leur stockage et leurs usages", url: 'https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them' },
    { name: "Anthropic, centre d'aide : débuter avec Claude Design", url: 'https://support.claude.com/en/articles/14604416-get-started-with-claude-design' },
    { name: "Anthropic : conditions commerciales du service, version du 17 juin 2025", url: 'https://www.anthropic.com/legal/commercial-terms' },
    { name: "Légifrance : Code de la propriété intellectuelle, article L122-4", url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278911' },
  ],
}
