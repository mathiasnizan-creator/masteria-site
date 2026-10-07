// Contenu propre à /formation-claude-management (guide terrain). Rendu par SpokePage.
// Faits Claude : claude-facts.js et faits-claude.md (vérifiés le 5 octobre 2026).
// Fait métier : AI Act, article 4 réécrit par le règlement (UE) 2026/1744 (sources-metiers.json),
// complété par l'Insee Première n° 2120 (faits-claude.md, section 4).
export default {
  slug: 'formation-claude-management',
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  pagePropre: true,
  auteur: true,
  metaDesc: "Formation Claude pour managers et dirigeants : instruire une décision sur dossier complet, régler l'effort, préparer comités et plans, garder le jugement.",
  resume: "Managers et dirigeants suivent ici une formation Claude de deux jours, 14 heures en tout, consacrée à la préparation des décisions, des comités et des plans de transformation. Elle se tient en intra, pour une équipe de direction de douze membres au plus, ou en individuel, dans vos murs comme en visioconférence. Comptez 1 980 € HT par jour. La certification Qualiopi de Masteria permet à l'OPCO de votre branche de financer ces deux journées.",
  enBref: [
    { label: 'Formation', value: "Préparer et éprouver avec Claude les décisions de direction : dossiers complets, notes de décision, comités, plans de transformation, lecture de son propre 360" },
    { label: 'Durée', value: "Deux jours de sept heures, accolés ou espacés pour traiter entre les deux un dossier réel de la direction" },
    { label: 'Formats', value: "Comité ou équipe de direction en intra, jusqu'à douze personnes, ou accompagnement d'un dirigeant seul ; présentiel chez vous ou classe virtuelle" },
    { label: 'Tarif', value: "Préparation sur un dossier de décision choisi par vous, comprise dans les 1 980 € HT de chaque journée" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; OPCO de la branche pour les salariés et les mandataires assimilés salariés qui se rémunèrent, fonds d'assurance formation pour un dirigeant non salarié" },
    { label: 'Prérequis', value: "Disposer d'un abonnement Claude payant et apporter un dossier de décision, ouvert ou déjà tranché, à instruire pendant les ateliers" },
  ],
  intro: "Avant un comité de direction, le dossier compte souvent plus de pages que le temps de lecture disponible : un audit, un contrat et ses annexes, des offres concurrentes, des comptes rendus. Claude lit l'ensemble dans une seule conversation, raisonne avant de répondre et va chercher sur le web les faits qui manquent, sources à l'appui. Ce guide montre comment en tirer une note de décision vérifiable, préparer comités et plans de transformation, et garder pour le manager ce qui lui revient : le jugement sur les personnes et la décision elle-même.",
  guide: {
    kicker: "Guide terrain",
    h2: "Claude instruit le dossier de décision ; l'arbitrage reste au dirigeant",
    lead: "Préparer une décision passe par trois gestes : réunir toutes les pièces, en tirer les faits sans en oublier, puis éprouver la recommandation avant de la présenter. Claude prend en charge une bonne part des deux premiers. Sur une offre payante, sa fenêtre de contexte, autrement dit ce qu'il garde en vue au cours d'un échange, atteint un million de tokens, ces morceaux de mots qu'il traite un à un ; selon Anthropic, 200 000 tokens valent à peu près 500 pages, ce qui met le plafond vers 2 500. Ses modèles actuels raisonnent avant chaque réponse. Le troisième geste vous appartient, avec une obligation nouvelle : depuis l'été 2026, le texte européen sur l'IA demande à l'entreprise d'aider ceux qui se servent de ces outils à les maîtriser.",
    sections: [
      {
        h3: "Le dossier complet entre dans la conversation, les références durables dans le projet",
        paras: [
          "Un dossier de décision mêle des pièces de nature différente : un audit de quatre-vingt-dix pages, un contrat avec ses annexes de niveaux de service, deux offres concurrentes, un export de tickets d'incident, des comptes rendus de comité. Déposées dans le même échange, vingt au plus, elles se lisent ensemble : Claude rapproche une clause de pénalité d'un constat de l'audit et d'une série de chiffres de l'export, en nommant chaque pièce qu'il cite.",
          "Le projet sert à autre chose : il garde les références stables de la direction, le plan stratégique, le budget, les relevés des derniers comités, et ses instructions s'appliquent à chaque nouvelle conversation, par exemple le format de vos notes de décision. Lorsque ces documents dépassent la fenêtre de contexte, Claude n'en lit plus que des extraits choisis par une recherche interne. Les pièces dont dépend la décision vont donc dans l'échange lui-même, où elles sont lues en entier.",
          "Les chiffres passent par l'exécution de code : Claude écrit un petit programme qui calcule sur le classeur, au lieu d'estimer un total de tête. Exigez que chaque montant de la note renvoie à la pièce ou au calcul dont il sort, et recalculez vous-même un indicateur avant le comité. Claude fabrique aussi les fichiers Word, Excel ou PowerPoint qui accompagnent la décision.",
        ],
      },
      {
        h3: "La réflexion reste active sur les modèles actuels, et l'effort se règle selon l'enjeu",
        paras: [
          "Les trois modèles actuels, Sonnet 5.5, Opus 5.5 et Fable 5.1, gardent la réflexion allumée en permanence : Claude décompose la question et explore plusieurs pistes avant d'écrire. Son raisonnement apparaît dans une section repliée au-dessus de la réponse. Sur un dossier important, dépliez-la : vous y voyez quelles pièces ont pesé et quelles hypothèses Claude a posées en chemin.",
          "Le levier se trouve dans le menu du modèle, à côté du bouton d'envoi : l'effort, de Faible à Max. Anthropic présente Élevé comme le meilleur équilibre entre qualité et rapidité, et Max comme l'option la plus poussée, destinée aux tâches qui demandent le raisonnement le plus approfondi. Plus l'effort monte, plus la réponse prend de temps et puise dans votre quota d'usage : gardez Max pour la note de décision.",
          "Opus 5.5 est le modèle qu'Anthropic recommande pour la plupart des usages, et l'éditeur souligne qu'il place l'essentiel en tête et applique les consignes de style que vous lui fixez. Fable 5.1, le plus capable, vise les travaux longs ; sur l'offre Team, seuls les sièges Premium y ont accès.",
        ],
      },
      {
        h3: "Une recommandation s'éprouve avant d'arriver au comité",
        paras: [
          "Une fois les faits établis, faites contredire la recommandation. Le pré-mortem part de l'échec : « nous sommes dans dix-huit mois, la décision a échoué, quelles en sont les trois causes les plus probables d'après les pièces ? » Un second exercice isole les hypothèses : quelles affirmations, si elles se révèlent fausses, renversent la conclusion, et quelle pièce soutient chacune.",
          "Pour un fait extérieur au dossier, comme l'état d'un marché ou la solidité d'un prestataire, la Recherche (la recherche approfondie de Claude) enchaîne des requêtes dont chacune tient compte des précédentes et livre son résultat après quelques minutes, chaque affirmation accompagnée de sa citation. Réservée aux offres payantes, elle explore aussi, une fois connectés, vos messages Gmail, votre Google Agenda et vos Google Docs. Ouvrez chaque lien avant de reprendre un chiffre devant le conseil.",
          "Gardez la trace de ce qui a été contrôlé. Une note de décision bien tenue liste ses pièces, ses calculs et les sources web ouvertes, de sorte qu'un membre du comité puisse remonter à chacune et qu'un successeur comprenne, dans deux ans, sur quoi l'arbitrage s'est fondé.",
        ],
      },
      {
        h3: "Le jugement sur les personnes et la décision finale ne se délèguent pas",
        paras: [
          "Un rapport de retours à 360 degrés vous concerne d'abord vous-même. Claude vous aide à le lire : regrouper les commentaires par thème, séparer ce qui revient chez plusieurs répondants de ce qu'une seule personne a écrit, préparer les questions à poser à votre propre responsable. Il n'a pas à juger vos collaborateurs : l'AI Act, dans son annexe III, fait de l'évaluation des performances et du comportement des salariés un usage à haut risque, dont les obligations ont été repoussées au 2 décembre 2027.",
          "Une obligation pèse déjà sur la direction. Depuis le 27 juillet 2026, l'article 4, tel que l'a réécrit le règlement (UE) 2026/1744, oblige toute entreprise qui se sert de systèmes d'IA, Claude compris, à agir pour que son personnel acquière la maîtrise de ces outils ; le texte n'exige plus de garantir un niveau donné pour chaque salarié. L'Insee mesure l'écart à combler : en 2025, 53 % des entreprises utilisatrices de l'IA se disaient freinées par un manque d'expertise, et dans celles de 250 salariés ou plus qui n'y recouraient pas, ce manque arrivait en tête des motifs (73 %), selon l'Insee Première n° 2120 de juillet 2026, dont le champ couvre les entreprises d'au moins dix salariés.",
          "Écrivez enfin ce que l'équipe de direction garde pour elle : la décision, son annonce aux personnes concernées et toute appréciation d'un collaborateur. Claude prépare les pièces et la note ; la signature reste la vôtre.",
        ],
      },
    ],
    table: {
      caption: "Les travaux de direction, la fonction de Claude et ce que le dirigeant garde en main",
      headers: ["Travail de direction", "Fonction de Claude", "Ce qui reste au dirigeant"],
      rows: [
        ["Note de décision sur dossier complet", "Pièces décisives déposées dans l'échange, effort réglé sur Max", "Le choix entre les options et la signature"],
        ["Contrôle d'un indicateur clé", "Exécution de code sur l'export ou le classeur source", "Un recalcul fait à la main avant le comité"],
        ["Fait extérieur au dossier", "Recherche approfondie avec citations, outils connectés si besoin", "L'ouverture de chaque lien cité"],
        ["Support du comité", "Extension PowerPoint de Claude, dans le gabarit maison", "Le message principal et l'ordre des diapositives"],
        ["Plan de transformation", "Projet de direction partagé : chantiers, jalons, risques", "Les arbitrages de calendrier et de moyens"],
        ["Lecture de votre rapport 360", "Commentaires regroupés par thème et par nombre de répondants", "Toute appréciation portée sur un collaborateur"],
      ],
    },
    cas: {
      h3: "Cas pratique : renouveler ou non le contrat d'infogérance avant la date limite de dénonciation",
      contexte: "Prenons le directeur général d'une ETI industrielle de 420 salariés. Le contrat d'infogérance informatique se renouvelle par tacite reconduction le 1er avril 2027, sauf dénonciation avant le 31 décembre 2026. Le comité de direction du 24 novembre doit choisir entre renouveler, renégocier ou changer de prestataire. Le dossier réunit le contrat et ses annexes de niveaux de service, un audit de 90 pages, deux offres concurrentes, l'export des tickets d'incident sur 24 mois et les comptes rendus des trois derniers comités de suivi. Le comité dispose d'abonnements Team ; le cas, inventé, sert de support à l'exercice.",
      etapes: [
        "Dans le projet « Direction générale », vérifiez que les instructions décrivent le rôle du comité et le format attendu des notes de décision ; le plan stratégique 2026-2028 y figure déjà.",
        "Ouvrez une conversation dans ce projet, déposez les sept pièces, réglez l'effort sur Max dans le menu du modèle, puis collez la demande reproduite plus bas.",
        "Dépliez la section de réflexion pour voir quelles pièces ont compté, contrôlez trois citations dans les documents et recalculez à la main le taux de respect des délais d'un trimestre.",
        "Lancez ensuite le pré-mortem : « Nous sommes en avril 2028 et l'option retenue a échoué ; donne les trois causes les plus probables d'après les pièces. »",
        "Choisissez l'option, rédigez vous-même la recommandation, puis confiez le support du comité à l'extension PowerPoint de Claude, dans le gabarit maison.",
      ],
      prompt: "Directeur général d'une ETI industrielle de 420 salariés, je dois faire trancher par le comité de direction du 24 novembre le sort du contrat d'infogérance informatique, renouvelé par tacite reconduction le 1er avril 2027 sauf dénonciation avant le 31 décembre 2026.\n\nPièces jointes : le contrat et ses annexes de niveaux de service, l'audit de l'infrastructure, les offres des prestataires B et C, l'export des tickets d'incident sur 24 mois (Excel), les comptes rendus des trois derniers comités de suivi. Le plan stratégique 2026-2028 se trouve dans le projet.\n\nTravail demandé :\n1. Relève dans le contrat les clauses qui conditionnent la décision : durée, préavis, pénalités, réversibilité, révision des prix. Cite chaque clause avec son numéro.\n2. À partir de l'export, calcule par trimestre le nombre d'incidents critiques et le taux de respect des délais de résolution fixés en annexe. Fais ces calculs par exécution de code et montre le tableau obtenu.\n3. Compare les trois options (renouveler, renégocier, changer de prestataire) selon le coût sur trois ans, les risques de transition, l'écart aux niveaux de service et la cohérence avec le plan stratégique. Chaque affirmation renvoie à une pièce.\n4. Liste les hypothèses dont dépend la comparaison et, pour chacune, la pièce qui la soutient ou la mention « non documentée ».\n5. Rédige une note de décision de deux pages qui présente les options sans en recommander aucune. J'écrirai la recommandation.\n\nRègles : limite-toi aux pièces jointes et au projet. N'invente aucun montant. En cas de désaccord entre deux pièces, montre l'écart sans choisir.",
      resultat: "Vous disposez du relevé des clauses, d'un tableau trimestriel des incidents calculé par code, d'une comparaison sourcée des trois options, de la liste des hypothèses et d'une note de deux pages qui laisse la recommandation en blanc. Avant le comité, contrôlez trois points : la date limite de dénonciation dans le contrat original, un indicateur recalculé à la main, et les hypothèses « non documentées », qui deviennent les questions à poser aux prestataires. La recommandation porte votre nom, et la note dit sur quelles pièces elle repose.",
    },
    pieges: [
      {
        titre: "La question qui contient déjà sa réponse",
        texte: "Une demande qui affiche votre préférence (« montre-moi pourquoi il faut changer de prestataire ») risque de produire une note qui la conforte. Présentez les options à égalité, demandez une note sans recommandation, puis soumettez au pré-mortem l'option qui a votre faveur.",
      },
      {
        titre: "Le projet qui répond à partir d'extraits",
        texte: "Au-delà de la fenêtre de contexte, un projet change de régime : Claude interroge sa base documentaire et ne lit que les passages qu'il estime utiles. Une clause de réversibilité enfouie en annexe peut lui échapper. Déposez les pièces décisives dans la conversation, et vérifiez le relevé des clauses dans le contrat original.",
      },
      {
        titre: "Le 360 d'un collaborateur soumis pour avoir un avis",
        texte: "Demander à Claude ce qu'il pense d'un membre de l'équipe d'après ses retours revient à lui confier l'évaluation d'une personne, un usage que l'AI Act soumet au régime du haut risque. Servez-vous de Claude pour lire votre propre rapport et préparer vos entretiens, et gardez l'appréciation pour vous.",
      },
      {
        titre: "La note stratégique travaillée sur un compte personnel",
        texte: "Un projet de cession repris le soir sur un abonnement individuel sort du cadre de l'entreprise : sur ces offres, l'usage des conversations pour améliorer les modèles dépend du réglage de chaque utilisateur. Les dossiers de direction passent par le compte Team ou Enterprise, dont les échanges n'alimentent pas l'entraînement, sauf choix contraire.",
      },
    ],
  },
  audience: [
    {
      title: "Dirigeants et membres de comité de direction",
      desc: "Vous tranchez sur des dossiers épais, souvent dans des délais fixés par un contrat ou un conseil. Vous apprenez à faire instruire le dossier complet et à vérifier ce que la note affirme.",
    },
    {
      title: "Managers d'équipe et directeurs de service",
      desc: "Vous préparez des comités, des plans d'action et des entretiens. Vous apprenez à laisser à Claude la préparation et à garder pour vous le jugement sur les personnes.",
    },
    {
      title: "Chargés de mission et directeurs de la transformation",
      desc: "Vous portez des plans sur plusieurs trimestres. Vous apprenez à tenir un projet de direction partagé et à relier chaque chantier au plan stratégique.",
    },
  ],
  useCases: [
    { icon: '⚖️', title: "Note de décision", desc: "Les pièces d'un dossier lues ensemble, les options comparées avec leurs sources et la recommandation laissée à votre main." },
    { icon: '🔍', title: "Pré-mortem d'une recommandation", desc: "Les causes d'échec probables et les hypothèses qui renverseraient la conclusion, chacune rattachée à une pièce." },
    { icon: '🗓️', title: "Suivi des comités", desc: "Les décisions et les points ouverts de plusieurs comités rapprochés, pour repérer les engagements tenus et ceux qui prennent du retard." },
    { icon: '🧩', title: "Plan de transformation", desc: "Chantiers, jalons, risques et dépendances tenus dans un projet de direction partagé avec l'équipe." },
    { icon: '📊', title: "Support du comité", desc: "L'extension PowerPoint construit les diapositives dans le gabarit maison, en partant de la note que vous avez arrêtée." },
    { icon: '🪞', title: "Lecture de votre 360", desc: "Vos retours regroupés par thème pour préparer votre plan de développement, sans appréciation portée sur un tiers." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Voir comment Claude lit un dossier et raisonne",
      duration: "1h30",
      description: "Savoir ce que Claude a lu et comment il a réfléchi avant d'utiliser sa réponse.",
      items: [
        "Pièces déposées dans l'échange contre références gardées dans un projet",
        "Lecture par extraits quand un projet dépasse la fenêtre de contexte",
        "Réflexion permanente sur les modèles actuels, section dépliable au-dessus de la réponse",
        "Niveaux d'effort, de Faible à Max, et effet sur le temps et le quota d'usage",
      ],
      exercise: "Vous posez la même question sur un dossier réel avec l'effort Élevé puis Max, et vous comparez les réponses et leurs citations.",
    },
    {
      day: 1,
      title: "Module 2 · Instruire un dossier de décision",
      duration: "2h",
      description: "Tirer des faits sourcés d'un dossier complet.",
      items: [
        "Relevé des clauses et des engagements contenus dans les contrats",
        "Calculs par exécution de code sur les exports et les classeurs",
        "Contradictions entre pièces signalées sans arbitrage",
        "Hypothèses listées avec leur pièce ou la mention « non documentée »",
      ],
      exercise: "Vous instruisez un dossier de votre périmètre et vous vérifiez trois citations dans les pièces.",
    },
    {
      day: 1,
      title: "Module 3 · Rédiger la note de décision",
      duration: "2h",
      description: "Présenter des options à égalité et garder la recommandation.",
      items: [
        "Structure : contexte, options, critères, risques, hypothèses",
        "Options exposées sans préférence, recommandation écrite par vous ensuite",
        "Chaque montant rattaché à sa pièce ou à son calcul",
        "Format et longueur fixés une fois pour toutes dans le projet de direction",
      ],
      exercise: "Vous écrivez la note qui accompagne votre dossier, puis un pair du groupe la relit avec un œil de membre du comité.",
    },
    {
      day: 1,
      title: "Module 4 · Éprouver une recommandation",
      duration: "1h30",
      description: "Chercher la faille avant le comité.",
      items: [
        "Le pré-mortem : partir de l'échec et remonter aux causes",
        "Les hypothèses qui renversent la conclusion",
        "La Recherche pour les faits extérieurs au dossier, citations comprises",
        "Ouverture de chaque lien avant de reprendre un chiffre",
      ],
      exercise: "Vous soumettez votre recommandation au pré-mortem et vous ajoutez à la note les deux risques retenus.",
    },
    {
      day: 2,
      title: "Module 5 · Préparer et suivre les comités",
      duration: "2h",
      description: "Faire de comités successifs un suivi continu.",
      items: [
        "Rapprochement des décisions et des points ouverts de plusieurs comptes rendus",
        "Repérage des actions décidées restées sans trace de réalisation",
        "Support du comité construit avec l'extension PowerPoint, dans le gabarit maison",
        "Version courte destinée au conseil d'administration",
      ],
      exercise: "Vous rapprochez les comptes rendus de vos trois derniers comités et vous préparez le support du suivant.",
    },
    {
      day: 2,
      title: "Module 6 · Construire un plan de transformation",
      duration: "2h",
      description: "Relier chaque chantier au plan stratégique et aux moyens disponibles.",
      items: [
        "Projet de direction partagé : instructions, plan stratégique, budget",
        "Chantiers, jalons, dépendances et risques",
        "Présentation du plan adaptée à chaque public, des managers aux équipes",
        "Revue trimestrielle des chantiers : engagements tenus, retards, arrêts décidés",
      ],
      exercise: "Vous construisez la trame du plan de transformation d'un sujet réel de votre direction.",
    },
    {
      day: 2,
      title: "Module 7 · Lire son 360 et préparer ses entretiens",
      duration: "1h30",
      description: "Se servir de Claude pour soi et garder le jugement sur les autres.",
      items: [
        "Retours regroupés par thème et par nombre de répondants",
        "Questions à poser à votre responsable et plan de développement",
        "Préparation d'un entretien à partir de vos propres notes",
        "Évaluation des salariés : régime du haut risque, obligations applicables au 2 décembre 2027",
      ],
      exercise: "Vous bâtissez votre plan de développement en partant d'un rapport 360 fictif, ou du vôtre si vous l'apportez.",
    },
    {
      day: 2,
      title: "Module 8 · Écrire la charte d'usage du comité de direction",
      duration: "1h30",
      description: "Décider ce que Claude prépare et ce que la direction garde.",
      items: [
        "Article 4 réécrit : agir pour que le personnel maîtrise les outils d'IA",
        "Dossiers de direction réservés au compte de l'entreprise",
        "Mémoire, conversations incognito et partage des projets de direction",
        "Ce qui reste entre les mains de la direction : la décision, son annonce, l'appréciation d'une personne",
      ],
      exercise: "Vous fixez par écrit, avec les autres membres présents, les usages de Claude que votre comité autorise et ceux qu'il écarte.",
    },
  ],
  objectives: [
    "Le participant sait instruire un dossier de décision complet avec Claude et contrôler dans les pièces les citations de la réponse.",
    "Le participant sait choisir le niveau d'effort selon l'enjeu et lire la section de réflexion d'une réponse.",
    "Le participant sait écrire une note de décision qui expose les options à égalité et rattache chaque montant à sa source.",
    "Le participant sait soumettre une recommandation à un pré-mortem et dresser la liste des hypothèses qui la renverseraient.",
    "Le participant sait faire construire un support de comité avec l'extension PowerPoint à partir d'une note validée.",
    "Le participant sait distinguer la lecture de son propre 360 de l'évaluation d'un collaborateur, que l'AI Act range parmi les usages à haut risque.",
  ],
  faq: [
    {
      q: "Claude lit-il l'intégralité d'un dossier de comité, annexes comprises ?",
      a: "Oui, sur abonnement payant : les modèles actuels retiennent jusqu'au million de tokens au cours d'une même conversation, de quoi loger vingt pièces et quelque 2 500 pages. Les PDF de plus de cent pages perdent à la lecture leurs graphiques et leurs images. Déposez les pièces décisives dans l'échange plutôt que dans un projet, qui se met à lire par extraits quand il déborde.",
    },
    {
      q: "Dois-je activer un mode de réflexion pour les décisions importantes ?",
      a: "Inutile avec les modèles actuels : la réflexion y fonctionne en permanence et ne se coupe pas. Le réglage qui compte est l'effort, dans le menu placé à côté du bouton d'envoi, de Faible à Max. Max convient à la note de décision ; il allonge le temps de réponse et consomme davantage de votre quota.",
    },
    {
      q: "Quelle offre retenir pour équiper un comité de direction ?",
      a: "Team suffit à la plupart des comités : projets partagés, connecteurs contrôlés par l'administrateur, conversations exclues d'office de l'apprentissage des modèles. Fable 5.1 n'y est ouvert qu'aux sièges Premium. Enterprise ajoute les journaux d'audit, la rétention des données réglée par l'entreprise et les droits par rôle, utiles à un groupe ou à un secteur réglementé.",
    },
    {
      q: "Claude peut-il monter les diapositives du comité dans notre charte ?",
      a: "Oui, par l'extension Claude pour PowerPoint, disponible sur les offres payantes. Elle reprend les dispositions, les typographies et les teintes définies dans le masque, crée des graphiques natifs modifiables et retouche une diapositive sélectionnée sans toucher au reste. Pour que Claude passe d'Excel à Word ou à PowerPoint sans perdre le fil, un réglage doit être activé ; Team et Enterprise le laissent éteint au départ.",
    },
    {
      q: "Nos projets de cession ou de restructuration restent-ils à l'abri ?",
      a: "Sur Team et Enterprise, vos échanges restent par défaut hors de l'entraînement des modèles d'Anthropic, et une conversation effacée quitte ses serveurs dans les trente jours. Les calculs du modèle ont lieu sur des serveurs américains ou sur le réseau mondial d'Anthropic ; qui veut un traitement en Europe doit passer par l'offre de Claude chez Amazon (Bedrock) ou chez Google (Vertex AI). Pour une opération sensible, faites valider par votre conseil la liste des outils autorisés et des personnes habilitées.",
    },
    {
      q: "Qu'impose l'AI Act à une direction qui équipe ses équipes de Claude ?",
      a: "L'article 4, dans sa version applicable depuis le 27 juillet 2026, attend de vous des actions qui rendent vos équipes capables de se servir de l'IA en connaissance de cause, sans imposer de niveau individuel. Former les personnes qui utilisent Claude en fait partie. Les usages rangés dans le haut risque, comme l'évaluation des salariés, verront leurs obligations devenir applicables le 2 décembre 2027.",
    },
    {
      q: "Un dirigeant peut-il suivre la formation seul et à distance ?",
      a: "Oui. Le parcours individuel se déroule en visioconférence ou dans vos bureaux, sur deux journées de sept heures que nous pouvons espacer. Il s'appuie sur vos propres dossiers, et le formateur adapte le second jour à ce que le premier a fait ressortir.",
    },
    {
      q: "Comment financer la formation d'un dirigeant qui n'est pas salarié ?",
      a: "Le statut social commande la réponse. Un gérant majoritaire de SARL ou un entrepreneur individuel relève d'un fonds d'assurance formation (FAF), l'AGEFICE ou le FIF-PL par exemple. Le président d'une SAS rémunéré de son mandat dépend, lui, de l'OPCO de sa société, au même titre que ses salariés. Le dossier part avant que la formation commence, accompagné des deux pièces que Masteria, organisme certifié Qualiopi, établit : le programme et la convention.",
    },
  ],
  terrain: {
    titre: "Un gérant de cabinet a confié à Claude ses textes de gérance et sa messagerie",
    texte: "En août 2026, un cabinet de géomètres-experts d'environ vingt personnes a envoyé son gérant en formation individuelle : deux jours, à distance. Celui-ci voulait questionner ses propres textes de gérance plutôt que le web, et faire préparer une partie de sa messagerie Outlook sans que rien ne parte sans lui. Le parcours prévoyait qu'il reparte avec des projets classés par domaine, une charte d'usage personnelle et deux compétences : l'une confronte un procès-verbal de bornage au plan et à l'acte, l'autre répond aux demandes de devis à partir de ses modèles. Une seconde étape est à l'étude ; si elle se confirme, une journée de cadrage ouvrira le travail sur le pilotage interne et sur le développement international.",
    lien: '/etudes-de-cas-ia#mission-gerance-cabinet',
  },
  tarifs: {
    titre: "Les deux journées se préparent sur un dossier que votre direction a tranché ou doit trancher",
    paras: [
      "Avant les deux jours, le formateur échange avec vous sur un ou deux dossiers que la direction a tranchés récemment ou doit trancher bientôt : un contrat à renouveler, un investissement, une réorganisation de service. Les ateliers sont construits sur ces pièces, anonymisées si besoin, ou sur un dossier fictif de même structure. Le groupe type rassemble le dirigeant, quatre ou cinq membres du comité de direction et parfois l'assistante de direction, qui prépare les comités.",
      "Pour un comité de six personnes, les deux journées en intra coûtent 3 960 € HT, soit 660 € HT par membre, hors TVA de 20 %. Un parcours individuel se facture 1 980 € HT par journée. Selon le statut de chacun, l'OPCO de la branche ou le fonds d'assurance formation du dirigeant non salarié peut financer l'action, à condition de recevoir la demande avant la session.",
    ],
  },
  apres: {
    titre: "Un projet de direction outillé peut prolonger la formation",
    texte: "Masteria peut ensuite installer avec votre comité de direction un outil taillé pour ses décisions : un projet partagé qui contient le plan stratégique, les comptes rendus des comités et vos règles de rédaction, et une compétence d'équipe qui produit la note de décision dans votre format, avec ses pièces citées et ses hypothèses listées. Nous définissons avec vous ce que l'outil lit, qui peut le modifier et quelles décisions restent hors de son champ. Il se teste sur un dossier déjà tranché, dont vous connaissez l'issue, avant de servir sur un dossier ouvert.",
  },
  cta: {
    milieu: "Choisissez un dossier que votre direction doit trancher dans les trois mois : les ateliers se construiront autour de lui.",
    fin: {
      titre: "Faisons de votre prochaine décision le fil rouge de la formation",
      texte: "Décrivez-nous le comité, ses échéances et le type de dossiers qu'il tranche. Nous proposons un programme, des dates et le montage du financement adapté au statut de chacun.",
    },
  },
  liensAssocies: [
    { label: "Le programme IA des dirigeants, pour décider et piloter l'entreprise", href: '/formation-ia-dirigeants' },
    { label: "Sprint de trois heures pour les managers qui débutent avec l'IA", href: '/formation-sprint-ia' },
    { label: "Former ses managers à l'IA : le déroulé d'un parcours de deux jours", href: '/blog/formation-manager-avec-ia' },
    { label: "AI Act : obligations, calendrier et mise en conformité, en formation", href: '/formation-ai-act' },
  ],
  avisPriorite: ['Claude', 'dirigeant', 'équipe', 'projets?'],
  sources: [
    { name: "EUR-Lex : omnibus numérique 2026/1744, article 4 de l'AI Act dans sa version de juillet 2026", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    { name: "Insee Première n° 2120 : les TIC dans les entreprises en 2025 (Clément Lefebvre, juillet 2026)", url: "https://www.insee.fr/fr/statistiques/9025878" },
    { name: "Centre d'aide Claude : choisir le modèle, le niveau d'effort et la réflexion", url: "https://support.claude.com/en/articles/8664678-change-the-model-effort-and-extended-thinking-settings" },
    { name: "Centre d'aide Claude : jusqu'où va la fenêtre de contexte, modèle par modèle", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
    { name: "Centre d'aide Claude : fonctionnement des projets, droits de partage, bascule vers la recherche dans la base", url: "https://support.claude.com/en/articles/9517075-what-are-projects" },
    { name: "Centre d'aide Claude : la Recherche, ses citations et les outils connectés", url: "https://support.claude.com/en/articles/11088861-using-research-on-claude" },
    { name: "Documentation Claude : l'extension PowerPoint et le respect du masque", url: "https://claude.com/docs/office-agents/powerpoint" },
    { name: "EUR-Lex : AI Act (règlement 2024/1689), annexe III sur l'évaluation des salariés", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
}
