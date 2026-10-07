// Contenu propre à /formation-ia-drh-plan-competences (page propre, guide terrain). Rendu par SpokePage.
// Formation de deux jours. Droit vérifié le 03/10/2026 sur Légifrance, service-public.fr,
// le Code du travail numérique, EUR-Lex et la FAQ de la Commission sur l'article 4 :
// aucun fait juridique modifié le 07/10 (aucune source plus récente), seulement reformulé.
// Revu le 07/10/2026 : outils, entraînement par défaut et fin des GPTs et des Gems selon la
// fiche FAITS-OUTILS du 07/10 ; calendrier AI Act conforme au règlement (UE) 2026/1744.
export default {
  slug: 'formation-ia-drh-plan-competences',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation DRH : le plan de compétences IA, de l'entretien de parcours au CSE",
  metaTitle: "Formation DRH plan de compétences IA (2 jours) | Masteria",
  metaDesc: "Formation DRH, 2 jours : le volet IA du plan de compétences, de l'entretien de parcours au CSE, avec l'article 4 de l'AI Act et le financement par l'OPCO.",
  resume: "Cette formation apprend aux DRH, en deux jours, à écrire le volet intelligence artificielle du plan de compétences de l'entreprise : recueil des besoins dans l'entretien de parcours professionnel, paliers par métier, budget selon l'effectif, présentation au CSE et registre des sessions. Les deux jours se tiennent sur votre site ou en visioconférence, avec jusqu'à douze membres de la fonction RH ou un DRH en tête-à-tête, pour 1 980 € HT par jour. Qualiopi couvre l'activité de formation de Masteria, ce qui ouvre à votre OPCO la possibilité de financer les deux jours, en appliquant ses propres règles dans la limite de ses moyens.",
  enBref: [
    { label: 'Formation', value: "Le volet IA du plan de compétences, bâti sur les obligations que posent déjà le Code du travail et l'AI Act européen" },
    { label: 'Durée', value: "Deux jours de sept heures : les obligations et les besoins le premier, la matrice, le budget, le CSE et le registre le second" },
    { label: 'Formats', value: "En présentiel dans l'entreprise ou en classe virtuelle ; un groupe RH de douze personnes maximum, ou un participant seul" },
    { label: 'Tarif', value: "Une journée : 1 980 € HT ; les deux jours : 3 960 € HT pour tout le groupe ; TVA de 20 % non incluse" },
    { label: 'Financement', value: "Masteria certifié Qualiopi pour la formation ; votre OPCO tranche d'après ses règles et ses moyens, le CPF reste hors jeu" },
    { label: 'Prérequis', value: "Votre plan de compétences en cours, votre trame d'entretien et les effectifs par famille de métiers" },
  ],
  prerequis: "Votre plan de compétences en cours, votre trame d'entretien et les effectifs par famille de métiers",
  intro: "Depuis la loi du 24 octobre 2025, l'entretien professionnel s'appelle entretien de parcours professionnel et porte sur l'évolution des compétences face aux transformations de l'entreprise. Le 27 juillet 2026, l'AI Act a vu son article 4 remanié : il demande désormais à l'employeur des mesures pour que ses salariés comprennent les outils d'IA mis entre leurs mains et leurs risques, sans niveau à atteindre ni certificat. Ces deux jours apprennent aux DRH à écrire le volet IA du plan de développement des compétences (PDC) en s'appuyant sur ces deux textes, à le financer selon l'effectif et à le défendre devant le CSE.",
  guide: {
    kicker: "Guide terrain RH",
    h2: "Le plan de compétences IA se construit avec les outils que le Code du travail donne déjà au DRH",
    lead: "Un plan de compétences IA prend appui sur des rendez-vous qui existent déjà. L'entretien de parcours professionnel fait remonter les besoins. Le PDC les traduit en actions, que le CSE examine lors de ses consultations. L'AI Act y ajoute une obligation de moyens, sans niveau imposé, qui suppose de garder la preuve de ce qui a été fait. Le métier du DRH consiste à relier ces pièces, famille de métiers par famille de métiers, avec un budget et un calendrier.",
    sections: [
      {
        h3: "Deux textes engagent déjà l'employeur sur les compétences en IA de ses salariés",
        paras: [
          "Le Code du travail, en son article L6321-1, charge l'employeur d'assurer l'adaptation de chaque salarié à son poste et de veiller à ce qu'il reste capable d'occuper un emploi, compte tenu notamment de « l'évolution des emplois, des technologies et des organisations ». Les assistants d'IA qui gagnent les métiers de bureau entrent dans ces technologies. Dans une entreprise qui compte moins de cinquante salariés, service-public.fr rappelle qu'un manquement peut se solder par des dommages et intérêts en cas de contentieux.",
          "Le second texte vient de Bruxelles. L'AI Act consacre son article 4 à la maîtrise de l'IA. Le règlement Omnibus, numéroté (UE) 2026/1744, l'a récrit avec effet au 27 juillet 2026, et l'article vise désormais aussi les déployeurs, autrement dit les organisations qui se servent d'un outil d'IA dans leur activité. Chacune prend des mesures pour aider son personnel, ainsi que les prestataires qui manient ces outils pour son compte, à développer leur maîtrise de l'IA. La rédaction nouvelle ne fixe plus de niveau à atteindre salarié par salarié. Selon la Commission européenne, nul besoin de certificat : il suffit de garder la trace des sessions et des actions de sensibilisation.",
          "Dans les questions et réponses qu'elle consacre à cet article, la Commission décrit le contenu minimal d'une démarche : des notions générales sur l'IA, le rôle de l'entreprise (fournisseur ou simple utilisatrice de systèmes d'IA), les risques des outils déployés, puis des actions ajustées aux connaissances de chacun et au contexte d'usage. Elle prend l'exemple de salariés qui écrivent leurs annonces publicitaires avec ChatGPT : ils doivent connaître les risques de l'outil, à commencer par les hallucinations, ces affirmations inexactes qu'il énonce sans la moindre hésitation. Le contrôle relève depuis août 2026 des autorités de surveillance de chaque État, avec des sanctions proportionnées, plus probables après un incident imputable à un défaut de formation.",
        ],
      },
      {
        h3: "L'entretien de parcours professionnel recueille les besoins, le plan les range en paliers",
        paras: [
          "La loi n° 2025-989 du 24 octobre 2025 a remplacé l'entretien professionnel par l'entretien de parcours professionnel. Il se tient dans l'année qui suit l'embauche, puis tous les quatre ans, et un état des lieux récapitulatif a lieu tous les huit ans. L'article L6315-1 lui assigne un contenu qui englobe l'IA sans la nommer : les compétences du salarié et leur évolution possible « au regard des transformations de l'entreprise », ainsi que ses besoins de formation liés à l'évolution de son emploi.",
          "Service-public.fr le dit en une phrase : l'employeur peut tenir compte des conclusions de ces entretiens pour élaborer le PDC. Ajoutez à votre trame quelques questions sur les tâches où le salarié se sert déjà de l'IA, celles où il aimerait s'en servir et ce qui l'en empêche, puis regroupez les réponses par famille de métiers. L'entretien ne juge pas le travail accompli, et il ne doit pas tourner au test d'aptitude à l'IA.",
          "Dès 50 salariés, l'employeur doit pouvoir justifier, pour chaque salarié et sur huit ans, des entretiens prévus et d'au moins une formation non obligatoire. S'il manque l'un des deux, il abonde de 3 000 € le compte personnel de formation de l'intéressé : dix salariés oubliés coûtent 30 000 €. Le ministère du Travail précise qu'une formation décidée par l'employeur, sans texte qui l'impose, compte comme formation non obligatoire. Il indique aussi que les délais en cours au 26 octobre 2025 s'allongent : un bilan à six ans attendu en 2026 se tient au plus tard en 2028.",
          "Les besoins se rangent ensuite en paliers : un socle commun pour quiconque utilise un outil d'IA, des parcours par métier, puis des référents qui animent les usages au sein de leur équipe. Dans la filiale française d'un distributeur IT B2B, forte de 58 salariés, Masteria a formé dix référents volontaires en juin 2026, sur deux jours ; ils épauleront le déploiement prévu entre octobre et décembre 2026 auprès des 48 autres collaborateurs.",
        ],
      },
      {
        h3: "Comptes personnels et assistants en fin de vie changent le contenu du plan",
        paras: [
          "Un plan de compétences IA doit partir des outils ouverts aujourd'hui dans l'entreprise. Au 7 octobre 2026, Copilot Chat est compris dans les offres professionnelles de Microsoft 365, Gemini dans les éditions de Google Workspace, et la licence Microsoft Copilot (anciennement Microsoft 365 Copilot) s'achète en plus. Les offres professionnelles d'OpenAI (ChatGPT), d'Anthropic (Claude) et de Mistral AI (Vibe) viennent s'y ajouter quand un service en a besoin.",
          "Le réglage d'entraînement des modèles sépare les comptes. Sauf réglage contraire, les échanges n'entraînent aucun modèle dans six cas : les offres Business et Enterprise d'OpenAI, Team et Enterprise chez Anthropic, les comptes professionnels Microsoft, les éditions Workspace de Google et Vibe Enterprise. À l'inverse, les abonnements personnels de ChatGPT, Vibe Free et Vibe Pro nourrissent l'entraînement par défaut, de même que Vibe Team aussi longtemps que son administrateur n'a pas désactivé l'option. Un salarié qui colle un dossier RH dans un compte personnel expose donc l'entreprise : le socle commun du plan traite ce point en premier.",
          "Certains objets que l'on enseignait hier disparaissent. OpenAI cessera de faire fonctionner les GPTs personnalisés le 11 décembre 2026. Google ne fermera pas les Gems des comptes professionnels avant le 1er mars 2027, date la plus proche qu'il annonce. Mistral AI a substitué des compétences aux agents de Vibe dans sa mise à jour du 22 septembre 2026. Un parcours métier bâti sur ces objets serait obsolète dès le premier trimestre : le plan 2027 s'appuie plutôt sur les compétences, que tous les éditeurs adoptent désormais.",
        ],
      },
      {
        h3: "Le CSE examine le plan à plusieurs moments de l'année",
        paras: [
          "Dès 50 salariés, tout projet d'introduction de technologies nouvelles, comme tout aménagement important des conditions de travail, est soumis au CSE, qui est informé puis consulté (article L2312-8). Équiper une équipe d'un assistant d'IA relève en général de cette procédure. Présentez le volet formation dans la même note : salariés concernés, durées, calendrier.",
          "Le PDC passe aussi par deux consultations récurrentes. Celle sur les orientations stratégiques couvre l'évolution des métiers et des compétences, la gestion prévisionnelle des emplois et des compétences et le plan lui-même (article L2312-24). Celle sur la politique sociale traite des actions de formation envisagées, et l'employeur y joint l'information sur la tenue des entretiens et des états des lieux (article L2312-26).",
          "À partir de 300 salariés, le CSE constitue une commission de la formation, sauf accord contraire, pour préparer ces délibérations (article L2315-49). Dans les entreprises et les groupes de cette taille, l'employeur négocie en outre tous les trois ans sur la gestion des emplois et des parcours professionnels, objectifs du plan et compétences à acquérir pendant la durée de l'accord compris (article L2242-20). Le volet IA du PDC trouve sa place dans cette négociation.",
          "Le tri de candidatures et les autres usages RH inscrits à l'annexe III de l'AI Act, celle du haut risque, créeront, le 2 décembre 2027, une obligation supplémentaire : avertir les élus du personnel et chaque salarié concerné avant la mise en marche du système (article 26).",
        ],
      },
      {
        h3: "Le financement dépend d'abord de l'effectif",
        paras: [
          "L'employeur paie les frais de formation de son PDC, rappelle service-public.fr. Sous le seuil de 50 salariés, le financement des actions du plan vient de l'OPCO de la branche, sur une section dédiée, selon les priorités arrêtées par son conseil d'administration (article L6332-17). Il offre aussi un service de proximité qui aide les TPE et les PME à analyser leurs besoins de formation.",
          "Au-delà de ce seuil, le plan repose sur les fonds de l'employeur, complété le cas échéant par des contributions conventionnelles prévues par un accord professionnel national ou par des versements volontaires que l'OPCO gère (article L6332-1-2). Dans tous les cas, seuls les organismes certifiés Qualiopi sont éligibles aux fonds des OPCO (article L6316-1). Pour ses sessions, Masteria établit programme et convention ; la démarche auprès de l'OPCO revient à l'entreprise, avant le premier jour.",
          "Les modalités de paiement évoluent elles aussi. Chez Atlas, qui finance la formation des métiers du conseil et des services financiers, les dossiers déposés depuis le 1er octobre 2026 se règlent en principe par remboursement : l'organisme facture l'entreprise, qui paie puis demande le versement de la part prise en charge. Le paiement direct de l'organisme reste ouvert pour le plan des structures situées sous ce seuil. Prévoyez la trésorerie, et la TVA de 20 % que Masteria facture.",
          "Deux autres dispositifs ne conviennent pas à ce plan. La période de reconversion, qui a succédé à Pro-A le 1er janvier 2026, vise l'acquisition d'une qualification ou de blocs de compétences (article L6324-1). Le compte personnel de formation se mobilise à l'initiative du salarié, avec son accord exprès, et Masteria n'y est pas éligible.",
        ],
      },
    ],
    table: {
      caption: "Six briques du plan de compétences IA, le texte qui encadre chacune et la pièce que le DRH produit",
      headers: ["Brique du plan", "Texte de référence", "Ce que le DRH produit"],
      rows: [
        ["Recenser ce que chaque métier fait déjà avec l'IA", "AI Act, article 4 ; Code du travail, article L2312-24 (évolution des métiers)", "Une carte des usages et des outils par famille de métiers, comptes personnels compris"],
        ["Recueillir les besoins individuels", "Article L6315-1 (entretien de parcours professionnel)", "Des questions IA dans la trame, puis une synthèse par métier sans aucun nom"],
        ["Fixer les actions et les publics", "Article L6321-1 (adaptation et maintien dans l'emploi)", "Des paliers, des objectifs évaluables, des durées et un calendrier"],
        ["Informer et consulter les élus", "Articles L2312-8 et L2312-24, dès 50 salariés", "Une note d'information et la date de consultation"],
        ["Financer", "Article L6332-17 sous 50 salariés ; article L6316-1 (Qualiopi)", "Un budget et des demandes déposées avant chaque session"],
        ["Tracer et mesurer", "FAQ de la Commission européenne (maîtrise de l'IA)", "Un registre des sessions et des indicateurs revus à trois mois"],
      ],
    },
    cas: {
      h3: "Mise en situation : une entreprise de 220 salariés inscrit l'IA dans son plan 2027",
      contexte: "Prenons la DRH d'un prestataire de services aux entreprises qui emploie 220 salariés. Copilot Chat est ouvert à tous, le service marketing utilise ChatGPT Business, et les managers signalent des usages sur des comptes personnels. Les entretiens de parcours professionnel de l'année ont fait remonter des demandes de formation à l'IA dans quatre familles de métiers. La DRH doit présenter le volet IA du plan au CSE en décembre. L'entreprise et ses chiffres sont imaginaires.",
      etapes: [
        "Elle rassemble des données agrégées, sans aucun nom : effectifs par famille de métiers, outils disponibles, usages recensés auprès des managers, demandes issues des entretiens regroupées par métier.",
        "Dans l'assistant d'IA professionnel de la société, elle saisit la consigne qui suit, puis ses données agrégées.",
        "Elle relit la matrice avec le responsable formation, ajuste les volumes au budget et vérifie que chaque objectif pourra être évalué par une question de QCM.",
        "Elle rédige la note destinée aux élus et convient avec le secrétaire du comité de la date de consultation.",
        "Elle ouvre le registre des formations à l'IA, où chaque session prendra place avec la feuille de présence et le document remis aux participants en fin de formation.",
      ],
      prompt: "Je dirige les RH d'un prestataire de services de 220 personnes et je prépare le volet intelligence artificielle de notre plan de compétences 2027. Les données que je t'envoie après ce message sont agrégées par famille de métiers ; elles ne contiennent aucun nom.\n\nConstruis une matrice, une ligne par famille de métiers, avec ces colonnes : effectif, outils disponibles, usages actuels, usages visés en 2027, palier de formation (socle commun, parcours métier ou référent), objectif évaluable formulé avec un verbe d'action, format et durée, période de réalisation, indicateur relevé trois mois après la formation.\n\nConsignes :\n- Le socle commun s'adresse à tous les salariés équipés d'un assistant d'IA. Il couvre le fonctionnement des assistants, leurs risques, dont les réponses inventées, l'usage des comptes personnels et les règles de l'entreprise.\n- Aucun objectif ne doit évaluer, noter ou classer des salariés.\n- Quand une information manque, écris « à préciser » plutôt que de la supposer.\n- Ne cite aucun texte de loi.\n\nSous la matrice, dresse la liste des cinq questions que le CSE posera le plus probablement, avec les éléments de réponse que ces données permettent d'apporter.",
      resultat: "La DRH obtient une matrice de quatre familles de métiers réparties sur trois paliers, avec objectifs et indicateurs, et la liste des questions probables du CSE. Trois contrôles lui reviennent. Les volumes doivent tenir dans le budget, TVA et part de l'OPCO comprises. Les dates doivent laisser le temps de déposer chaque demande avant la session. La procédure de consultation se valide avec un juriste en droit social, puisque l'assistant n'a reçu aucun texte de loi.",
    },
    pieges: [
      {
        titre: "L'entretien de parcours transformé en test d'aptitude",
        texte: "Une note ou un classement de l'aisance avec l'IA fait glisser l'entretien vers l'évaluation du travail, que l'article L6315-1 tient à l'écart de cet échange. Interrogez les compétences, les tâches et les besoins de formation ; l'appréciation du travail relève de l'entretien annuel.",
      },
      {
        titre: "Les licences attribuées avant que le CSE en ait entendu parler",
        texte: "Dès 50 salariés, équiper les équipes d'un assistant d'IA suppose en principe de consulter le CSE (article L2312-8). Un plan de formation présenté après coup expose l'entreprise à une contestation des élus. Calez le calendrier du plan sur celui de la consultation.",
      },
      {
        titre: "Le CPF des salariés compté dans le budget",
        texte: "Le compte personnel de formation se mobilise à l'initiative du salarié et avec son accord exprès : l'employeur ne peut pas l'imposer pour financer son plan, et Masteria n'y est pas éligible. Construisez le budget sur le PDC et, selon votre effectif, sur l'OPCO.",
      },
      {
        titre: "Des preuves de formation dispersées",
        texte: "Pour l'article 4, la Commission se contente d'un suivi interne qui montre qui a été formé, quand et sur quoi. Rangez au même endroit, dès la première session, feuilles de présence, documents remis en fin de formation et supports, par session et par salarié.",
      },
      {
        titre: "Un programme unique pour tous les métiers",
        texte: "La Commission admet des niveaux de formation différents selon les connaissances, l'expérience et le contexte d'usage. Une juriste qui relit des contrats avec un assistant et un commercial qui prépare ses relances ne courent pas les mêmes risques. Gardez un socle commun court, puis des parcours par métier.",
      },
      {
        titre: "Un parcours bâti sur des GPTs ou des Gems",
        texte: "Un parcours 2027 construit sur les GPTs de ChatGPT, qui disparaissent le 11 décembre 2026, ou sur les Gems, que Google remplace par des compétences, serait à refaire dans l'année : demandez à chaque formateur sur quelles fonctions repose son programme.",
      },
    ],
  },
  audience: [
    { title: "DRH et RRH de PME et d'ETI", desc: "Vous construisez le plan de compétences de l'entreprise et le présentez au CSE. Vous voulez y inscrire l'IA avec des objectifs, un budget et un calendrier que vous pouvez défendre." },
    { title: "Responsables formation et développement RH", desc: "Parcours, demandes à l'OPCO et suivi des sessions passent par vous. Vous voulez des paliers nets, des objectifs évaluables et un registre prêt à répondre à l'obligation européenne de maîtrise de l'IA." },
    { title: "Dirigeants de PME sans service RH structuré", desc: "Vous portez vous-même la formation de vos équipes. Vous voulez savoir ce que la loi exige selon votre effectif et ce que votre OPCO peut financer." },
  ],
  useCases: [
    { icon: '🗺️', title: "Carte des usages par métier", desc: "Outils ouverts, usages actuels, comptes personnels et usages visés, recensés famille de métiers par famille de métiers." },
    { icon: '🎓', title: "Paliers de compétences", desc: "Socle commun, parcours métier et référents, chacun avec ses objectifs évaluables." },
    { icon: '🗣️', title: "Questions IA dans l'entretien de parcours", desc: "Quelques questions sur les tâches et les besoins, synthétisées par métier, sans la moindre évaluation." },
    { icon: '🏛️', title: "Note aux élus du CSE", desc: "Le volet IA du plan présenté aux élus avec les publics, les durées et le calendrier." },
    { icon: '💳', title: "Budget et demandes à l'OPCO", desc: "Financement adapté à l'effectif, demandes déposées avant chaque session, trésorerie et TVA prévues." },
    { icon: '📋', title: "Registre des formations IA", desc: "Feuilles de présence, documents de fin de formation et supports classés par session." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Les obligations de l'employeur à l'automne 2026", duration: '1h30',
      description: "Les obligations de formation à l'IA varient avec l'effectif de l'entreprise et les usages. Ce module les pose texte par texte.",
      items: [
        "Adaptation au poste et maintien dans l'emploi (article L6321-1)",
        "L'AI Act, article 4, dans sa version Omnibus : mesures, registre, contrôle",
        "Pratiques interdites au travail depuis février 2025 ; recrutement et évaluation, classés à haut risque, soumis à leurs règles le 2 décembre 2027",
        "Seuils de 50 et de 300 salariés : CSE, commission de la formation, négociation triennale",
      ],
      exercise: "Vous dressez la liste des obligations qui s'appliquent à votre entreprise selon son effectif.",
    },
    {
      day: 1, title: "Module 2 · Les assistants d'IA et leurs usages, métier par métier", duration: '2h',
      description: "Pour bâtir le plan, le DRH doit connaître les assistants ouverts chaque jour par ses salariés, et le sort des données qu'ils y déposent.",
      items: [
        "Copilot Chat, Microsoft Copilot, ChatGPT, Claude, Gemini et Vibe : ce qui est inclus, ce qui s'achète",
        "Recenser les usages déjà installés, comptes personnels compris",
        "Entraînement par défaut selon l'offre, et ce qu'une charte d'usage doit en dire",
        "Prise en main guidée pour les DRH qui débutent, sur une demande RH sans donnée nominative",
      ],
      exercise: "Vous dressez la carte des usages de deux familles de métiers de votre entreprise.",
    },
    {
      day: 1, title: "Module 3 · Recueillir les besoins dans l'entretien de parcours professionnel", duration: '2h',
      description: "L'entretien porte sur les compétences au regard des transformations de l'entreprise. Vous y ajoutez les questions qui nourrissent le plan IA.",
      items: [
        "Le contenu de l'entretien depuis la loi du 24 octobre 2025",
        "Rédiger des questions sur les tâches, les usages et les besoins",
        "Rester à distance de l'évaluation du travail",
        "Synthétiser les réponses par métier, sans nom",
      ],
      exercise: "Vous rédigez les questions IA de votre trame d'entretien et la règle de synthèse par métier.",
    },
    {
      day: 1, title: "Module 4 · Fixer des paliers et des objectifs évaluables", duration: '1h30',
      description: "Un objectif utile se vérifie par une question de QCM. Vous écrivez ceux de chaque palier.",
      items: [
        "Un socle commun destiné à chaque salarié équipé d'un outil d'IA",
        "Parcours par métier et rôle des référents",
        "Écrire un objectif avec un verbe d'action",
        "Au moins une question de QCM pour chaque objectif",
      ],
      exercise: "Vous écrivez les objectifs évaluables de chaque palier pour un métier de votre entreprise.",
    },
    {
      day: 2, title: "Module 5 · Construire la matrice du plan avec un assistant d'IA", duration: '2h',
      description: "L'assistant structure la matrice à partir de données agrégées ; le DRH arbitre les volumes et le calendrier.",
      items: [
        "Préparer des données agrégées, sans aucun nom",
        "Rédiger la consigne : publics, objectifs, formats, durées, périodes, indicateurs",
        "Ajuster au budget et aux contraintes d'activité",
        "Relire chaque ligne avant toute diffusion",
      ],
      exercise: "Vous produisez la matrice IA de votre plan 2027 à partir de vos propres données agrégées.",
    },
    {
      day: 2, title: "Module 6 · Financer le plan selon l'effectif", duration: '1h30',
      description: "Le financement change de nature à 50 salariés. Vous chiffrez le volet IA et le calendrier des demandes.",
      items: [
        "Moins de 50 salariés : la section du plan à l'OPCO (article L6332-17)",
        "Budget propre, contributions conventionnelles et versements volontaires au-delà",
        "Qualiopi, convention et demande déposée avant la session",
        "Remboursement ou paiement direct, TVA et trésorerie",
      ],
      exercise: "Vous chiffrez le volet IA de votre plan et fixez le calendrier des demandes à votre OPCO.",
    },
    {
      day: 2, title: "Module 7 · Informer et consulter le CSE", duration: '2h',
      description: "Les élus examinent l'arrivée des outils et le plan qui l'accompagne. Vous préparez une note lisible par des non-spécialistes.",
      items: [
        "Arrivée de technologies nouvelles dans l'entreprise (article L2312-8)",
        "Orientations stratégiques et politique sociale (articles L2312-24 et L2312-26)",
        "Commission de la formation et négociation triennale à partir de 300 salariés",
        "Les questions des élus et les réponses à préparer, charte d'usage comprise",
      ],
      exercise: "Vous écrivez, pour vos élus, la note qui présente le volet IA du plan.",
    },
    {
      day: 2, title: "Module 8 · Tracer, mesurer, réviser, et lancer les trente premiers jours", duration: '1h30',
      description: "Un contrôle se prépare avec des preuves rangées dès la première session. Vous montez le registre, les indicateurs et le plan d'action du premier mois.",
      items: [
        "Tenir le registre interne des sessions et des actions de sensibilisation",
        "Indicateurs relevés en séance, puis trois mois après",
        "Bilan présenté au CSE lors de la consultation sur la politique sociale",
        "Plan à trente jours : trame d'entretien mise à jour, note au CSE programmée, première session du socle commun datée",
      ],
      exercise: "Vous créez le registre des formations IA de votre entreprise et fixez les trois actions de vos trente premiers jours.",
    },
  ],
  objectives: [
    "Identifier les obligations de formation à l'IA qui s'appliquent à l'entreprise selon son effectif",
    "Cartographier, famille de métiers par famille de métiers, ce que les salariés font avec l'IA, comptes personnels compris, et le rattacher à un palier",
    "Intégrer le recueil des besoins en IA à l'entretien de parcours professionnel sans évaluer le travail",
    "Construire la matrice du plan : publics, objectifs évaluables, formats, durées et calendrier",
    "Monter le financement selon l'effectif et déposer les demandes à l'OPCO avant les sessions",
    "Préparer la consultation du CSE et ouvrir le registre où s'inscrit chaque session consacrée à l'IA",
  ],
  faq: [
    {
      q: "Quelles obligations de formation à l'IA pèsent sur un employeur en 2026 ?",
      a: "Le Code du travail oblige l'employeur à garder ses salariés aptes à leur poste et employables malgré l'évolution des technologies (article L6321-1). L'AI Act, dans son article 4 remanié, attend de l'entreprise des actions de formation ou d'information pour les salariés et les prestataires qui utilisent ses outils d'IA. Dès 50 salariés, le CSE doit en principe être informé et consulté avant l'arrivée de ces outils. Faites valider votre situation par un spécialiste du droit social.",
    },
    {
      q: "Faut-il un certificat de formation à l'IA pour chaque salarié ?",
      a: "Non. Depuis l'Omnibus, l'article 4 ne fixe plus de niveau individuel, et la Commission européenne écarte toute idée de certificat. Un suivi interne des sessions et des autres actions de sensibilisation suffit. Le devoir d'agir demeure, et les autorités de surveillance de chaque État la contrôlent depuis août 2026 ; un registre tenu dès la première session vous évite de reconstituer les preuves après coup.",
    },
    {
      q: "Faut-il passer devant le CSE pour former les salariés à l'IA ?",
      a: "Oui dès 50 salariés, à deux titres. L'arrivée de technologies nouvelles passe par l'article L2312-8, et le PDC figure dans la consultation sur les orientations stratégiques (article L2312-24). Le plus simple consiste à présenter les outils et la formation qui les accompagne dans une même note, avec les publics, les durées et le calendrier, pour que les élus se prononcent sur l'ensemble.",
    },
    {
      q: "L'entretien de parcours professionnel peut-il servir à recenser les besoins de formation à l'IA ?",
      a: "Oui. Depuis la loi du 24 octobre 2025, cet entretien porte sur les compétences du salarié, sur leur évolution face aux transformations de l'entreprise et sur ses besoins de formation. Service-public.fr précise que l'employeur peut tenir compte de ses conclusions pour élaborer le plan. L'entretien n'évalue pas le travail : interrogez les tâches et les besoins, puis regroupez les réponses par métier, sans nom.",
    },
    {
      q: "Comment financer le volet IA du plan de compétences ?",
      a: "Le plan est payé par l'employeur. Sous 50 salariés, l'OPCO peut financer les actions du plan selon ses priorités ; au-delà, le budget de l'entreprise prend le relais, avec d'éventuelles contributions conventionnelles ou volontaires gérées par l'OPCO. Masteria, certifié Qualiopi, vous transmet les pièces du dossier, et c'est votre entreprise qui sollicite l'OPCO, en amont de la session. Le CPF n'entre pas dans ce financement : il relève de l'initiative du salarié, et Masteria n'y est pas éligible.",
    },
    {
      q: "Combien coûte la formation des DRH au plan de compétences IA ?",
      a: "Quand plusieurs membres de la fonction RH d'une même entreprise (DRH, RRH, responsables formation) suivent la session, jusqu'à douze, la facture des deux jours s'élève à 3 960 € HT, deux journées à 1 980 € HT. Un DRH formé seul paie 1 980 € HT par jour. TVA de 20 % en sus. Votre OPCO peut financer une part de la dépense, voire davantage, selon les priorités de sa branche et ce qu'il lui reste à engager.",
    },
    {
      q: "Un DRH novice en IA peut-il suivre ces deux jours ?",
      a: "Non. Le deuxième module comprend une prise en main guidée des assistants que vos salariés utilisent, de Copilot Chat à ChatGPT en passant par Gemini, sur une demande RH sans donnée nominative. La formation demande surtout de connaître votre entreprise : ses métiers, ses effectifs, son calendrier social. Apportez votre dernier plan de développement des compétences et votre trame d'entretien.",
    },
  ],
  tarifs: {
    titre: "Ce que couvre le prix pour une équipe RH",
    paras: [
      "Le formateur reçoit, avant la session, votre dernier PDC, votre trame d'entretien et les effectifs par famille de métiers, sans aucun nom. Les deux jours travaillent ces documents : chacun repart avec les questions IA de la trame, la matrice du volet IA, le projet de note au CSE et le modèle de registre. Cette préparation, les supports et les modèles sont compris dans le prix.",
      "Prenons une ETI qui inscrit sa DRH, deux RRH de site, la responsable formation et le juriste social, soit cinq personnes. Le groupe règle 3 960 € HT l'ensemble, 792 € HT par participant ; un DRH inscrit seul règle 1 980 € HT pour chacune des deux journées. TVA en sus, au taux de 20 %. Au-delà de 50 salariés, le financement repose surtout sur les ressources propres de l'entreprise ; en dessous, l'OPCO peut prendre l'action à sa charge s'il l'estime prioritaire et si ses fonds le permettent, au vu des pièces que Masteria vous transmet.",
    ],
  },
  apres: {
    titre: "Après la formation, les parcours du plan livrés métier par métier",
    texte: "Une fois le plan voté, Masteria peut en assurer les parcours, du socle commun aux journées par métier, avec les objectifs, les QCM et les feuilles de présence qui alimentent votre registre. Pour les besoins qui dépassent la formation, comme un assistant RH qui répond aux questions des salariés à partir de vos accords et de vos procédures, le travail relève du développement : devis au forfait après cadrage, pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous votre calendrier social : les deux jours se calent sur votre prochaine consultation du CSE.",
    fin: {
      titre: "Calons la formation sur votre plan actuel",
      texte: "Indiquez votre effectif, votre OPCO, la date de votre prochaine consultation du CSE et les outils d'IA déjà ouverts. Un programme adapté à votre situation vous parvient ensuite, avec des dates de session compatibles avec votre calendrier.",
    },
  },
  terrain: {
    titre: "Sur le terrain : un déploiement par étages, de la direction aux sites d'Amérique et d'Inde",
    texte: "Pour un groupe international du packaging, Masteria accompagne palier par palier le déploiement de Microsoft Copilot. Le dispositif comprend une matinée de stratégie pour le comité de direction et deux jours de formation pour 24 managers pilotes, répartis en cinq sessions entre juillet et septembre 2026 (deux en anglais), à partir d'exercices taillés dans les classeurs et documents du groupe. Les sites américains et mexicains suivront en octobre 2026, l'Inde en décembre. Chaque palier a son public, ses ateliers et son calendrier : la grille même qu'un plan de compétences IA doit remplir.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  liensAssocies: [
    { label: "Formation IA pour les équipes RH, tous outils confondus", href: '/formation-ia-ressources-humaines' },
    { label: "Formation AI Act : obligations, calendrier, conformité", href: '/formation-ai-act' },
    { label: "Financer une formation IA : OPCO, Qualiopi, effectif", href: '/financement-formation-ia' },
    { label: "Plan annuel de formation à l'IA : le modèle à remplir", href: '/blog/plan-formation-ia-annuel-template' },
    { label: "AI Act et RH : recrutement, évaluation, conformité", href: '/blog/ai-act-rh-conformite-recrutement-evaluation' },
  ],
  sources: [
    { name: "Légifrance, L6315-1 : contenu de l'entretien de parcours professionnel", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053279288" },
    { name: "Code du travail numérique, fiche du ministère sur l'entretien de parcours (transition, abondement de 3 000 €)", url: "https://code.travail.gouv.fr/fiche-ministere-travail/entretien-professionnel" },
    { name: "Service-public.fr, l'entretien de parcours professionnel (fiche vérifiée le 1er octobre 2026)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32040" },
    { name: "Service-public.fr, qui paie le plan de formation d'un salarié du privé", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11267" },
    { name: "Légifrance, L6321-1 : adaptation au poste et maintien dans l'emploi", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000052437104" },
    { name: "Légifrance : ce que le CSE examine, article L2312-8", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196" },
    { name: "Légifrance, L6332-17 : la section des moins de 50 salariés à l'OPCO", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037387500" },
    { name: "EUR-Lex, texte du règlement Omnibus (UE) 2026/1744, qui récrit la règle de maîtrise de l'IA", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    { name: "Foire aux questions de la Commission européenne consacrée à l'article 4, version du 27 juillet 2026", url: "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers" },
    { name: "Opco Atlas, remboursement des formations après la réforme de la TVA (1er octobre 2026)", url: "https://www.opco-atlas.fr/actualites/reforme-de-la-tva-ce-qui-change-pour-le-financement-de-vos-formations.html" },
    { name: "Aide OpenAI, calendrier de retrait des GPTs personnalisés", url: "https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq" },
    { name: "Google Workspace, calendrier de fin des Gems", url: "https://knowledge.workspace.google.com/p/gems-migration" },
    { name: "Mistral AI, qui décide de l'entraînement sur chaque offre Vibe", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
  ],
}
