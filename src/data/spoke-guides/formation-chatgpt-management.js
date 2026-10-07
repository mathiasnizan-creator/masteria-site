// Contenu propre a /formation-chatgpt-management (page propre), ecrit le 7 octobre 2026. Rendu par SpokePage.
// Faits ChatGPT : fiche de faits du 07/10/2026 (section OpenAI), comparatifs du 03/10/2026 (comparisons.js) :
// projets, ChatGPT Work, agents lances depuis Slack, GPT-Live-1, fenetre de 256 000 tokens, retrait des GPTs.
// AI Act : annexe III point 4 (evaluation des salaries), haut risque au 2 decembre 2027 (omnibus 2026/1744),
// article 4 depuis le 2 fevrier 2025 (fiche de faits, section 7). Aucun cas client ChatGPT pour ce metier.
export default {
  slug: 'formation-chatgpt-management',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation ChatGPT management : réunions, entretiens et messages qui comptent",
  metaTitle: "Formation ChatGPT management · managers d'équipe | Masteria",
  metaDesc: "Formation ChatGPT pour managers : réunions et entretiens préparés, comité résumé, message délicat, appréciation des personnes laissée au manager. 2 jours.",
  resume: "La formation ChatGPT management apprend aux managers à préparer avec ChatGPT leurs réunions, leurs entretiens et leurs messages les plus délicats, puis à fixer pour leur équipe les règles d'usage de l'outil. Elle s'étend sur deux journées pleines, chez vous ou en ligne, avec douze managers au plus ou un seul, et chaque journée se règle 1 980 € HT. Masteria, dont la certification Qualiopi couvre les actions de formation, prépare avec vous la demande de financement adressée à votre OPCO.",
  enBref: [
    { label: 'Formation', value: "ChatGPT au quotidien du manager : réunions, comptes rendus, entretiens, messages délicats, règles d'usage pour l'équipe" },
    { label: 'Durée', value: "Deux journées pleines, que beaucoup de managers espacent de deux semaines pour essayer entre-temps" },
    { label: 'Formats', value: "Jusqu'à douze managers en intra, sur site ou en visioconférence ; formule individuelle pour un directeur ou un manager de managers" },
    { label: 'Tarif', value: "La journée s'élève à 1 980 € HT pour tout le groupe ; 3 960 € HT les deux réunies" },
    { label: 'Financement', value: "Prise en charge possible par votre OPCO, l'organisme étant certifié Qualiopi ; la branche fixe les règles" },
    { label: 'Prérequis', value: "Encadrer une équipe ; un compte ChatGPT d'entreprise, ou un compte individuel réglé avec nous avant la session" },
  ],
  prerequis: "Encadrer une équipe ; un compte ChatGPT d'entreprise ou un compte individuel réglé avant la session",
  intro: "Le manager tient deux rôles face à ChatGPT. Il s'en sert pour lui-même : préparer une réunion, reprendre les notes d'un comité, trouver les mots d'une annonce difficile. Il en répond aussi pour son équipe, qui attend de savoir ce qui est permis. Au 7 octobre 2026, un projet ChatGPT garde le contexte d'une équipe de semaine en semaine, ChatGPT Work assemble une présentation complète, un agent déclenché dans Slack peut compiler les avancées de la semaine, et GPT-Live-1 permet de répéter à voix haute une conversation que l'on redoute. Ces deux jours s'appuient sur vos rituels et vos dossiers d'équipe. Ils tracent une limite nette : le jugement porté sur une personne reste l'affaire du manager.",
  audience: [
    {
      title: "Managers de proximité",
      desc: "Réunions d'équipe, points individuels, plannings, remontées d'information : vous apprenez à préparer ces moments avec ChatGPT sur la base de vos notes, puis à trouver les mots justes pour ce que vous devez annoncer.",
    },
    {
      title: "Managers de managers et directeurs de service",
      desc: "Vous animez des comités et pilotez plusieurs équipes. Vous apprenez à transformer un comité en décisions et en actions, à monter une revue mensuelle avec ChatGPT Work et à donner un cadre d'usage à vos équipes.",
    },
    {
      title: "Chefs de projet et responsables transverses",
      desc: "Vous coordonnez sans lien hiérarchique. La formation vous apprend à ouvrir un projet ChatGPT par dossier, à préparer des arbitrages et à écrire des messages qui obtiennent une réponse.",
    },
  ],
  useCases: [
    {
      icon: '📅',
      title: "Réunion préparée sur les notes précédentes",
      desc: "Le projet de l'équipe conserve les comptes rendus ; ChatGPT propose l'ordre du jour et rappelle les points restés ouverts.",
    },
    {
      icon: '📋',
      title: "Comité résumé en décisions et actions",
      desc: "Des notes brutes deviennent un relevé avec porteur et échéance, relu avant envoi.",
    },
    {
      icon: '🎯',
      title: "Entretien annuel préparé, appréciation gardée",
      desc: "Questions, objectifs et plan de développement se préparent avec l'outil ; le jugement sur la personne reste au manager.",
    },
    {
      icon: '💬',
      title: "Message délicat écrit avec soin",
      desc: "Annonce d'une réorganisation, refus d'une demande, recadrage : plusieurs versions, puis le choix du ton juste.",
    },
    {
      icon: '🗣️',
      title: "Conversation difficile répétée à voix haute",
      desc: "GPT-Live-1 joue le collaborateur, et le manager s'exerce à formuler avant l'entretien.",
    },
    {
      icon: '👥',
      title: "Règles d'usage données à l'équipe",
      desc: "Le manager repart avec la charte, le référent et le plan qui disent à son équipe ce qui est permis.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Séparer ce que le manager confie à ChatGPT de ce qu'il garde",
      duration: "1h30",
      description: "Distinguer les dossiers d'équipe, que l'outil peut traiter, des informations sur les personnes, qui restent au manager.",
      items: [
        "Business et Enterprise : échanges exclus de l'entraînement ; comptes personnels à régler un par un",
        "Santé, situation familiale, conflits, appréciations : informations qui ne quittent pas le manager",
        "Confier à l'IA la surveillance ou la notation d'un collaborateur : haut risque selon l'AI Act (annexe III), encadré à partir de décembre 2027",
        "Mémoire et instructions personnalisées : ce que ChatGPT retient d'une conversation à la suivante",
      ],
      exercise: "Vous recensez les documents qui passent entre vos mains en une semaine et décidez pour chacun : à ChatGPT, anonymisé, ou à vous seul.",
    },
    {
      day: 1,
      title: "Module 2 · Préparer et conduire les réunions d'équipe",
      duration: "2h",
      description: "Arriver en réunion avec un ordre du jour clair et en sortir avec des décisions écrites.",
      items: [
        "Projet de l'équipe : comptes rendus précédents, objectifs, planning",
        "Ordre du jour tiré des points laissés en suspens",
        "Relevé de décisions avec porteur et échéance, à partir de notes brutes",
        "Message de suivi à l'équipe, relu avant envoi",
      ],
      exercise: "Vous préparez dans un projet ChatGPT votre prochaine réunion d'équipe, puis rédigez le relevé de la précédente.",
    },
    {
      day: 1,
      title: "Module 3 · Résumer un comité et préparer un arbitrage",
      duration: "2h",
      description: "Faire du comité une source de décisions suivies d'effet.",
      items: [
        "Dossier de comité lu en mode réflexion : 256 000 tokens de fenêtre, de quoi absorber un volumineux rapport",
        "Note d'arbitrage : options, critères, risques, recommandation",
        "Présentation de synthèse produite dans ChatGPT pour PowerPoint",
        "Recherche approfondie pour documenter une option, chaque source ouverte avant usage",
      ],
      exercise: "Vous rédigez la note d'arbitrage d'une décision en attente dans votre périmètre, avec deux options dont vous fournissez vous-même les chiffres.",
    },
    {
      day: 1,
      title: "Module 4 · Préparer les entretiens individuels",
      duration: "1h30",
      description: "Mieux préparer l'entretien annuel ou le point mensuel sans confier l'appréciation à l'outil.",
      items: [
        "Questions ouvertes adaptées au poste et au moment de l'année",
        "Objectifs mesurables, plan de développement, besoins de formation",
        "Faits observés notés par le manager, dépersonnalisés quand l'outil les reformule",
        "Ce que le collaborateur lira : ton, précision, aucun jugement sur la personne",
      ],
      exercise: "Vous préparez la trame de votre prochain entretien annuel, objectifs et questions compris, sur un poste de votre équipe et sans nommer la personne.",
    },
    {
      day: 2,
      title: "Module 5 · Écrire les messages délicats",
      duration: "1h30",
      description: "Trouver les mots d'une annonce difficile et les faire relire.",
      items: [
        "Annonce d'une réorganisation, d'un départ, d'un changement de priorités",
        "Refus d'une demande, recadrage, réponse à une tension dans l'équipe",
        "Plusieurs versions, de la plus directe à la plus explicative, puis un choix argumenté",
        "Relecture par un pair ou par les RH pour tout message qui engage l'employeur",
      ],
      exercise: "Vous rédigez un message que vous repoussez depuis des jours et comparez trois versions avec votre binôme.",
    },
    {
      day: 2,
      title: "Module 6 · Répéter une conversation difficile avant de la mener",
      duration: "2h",
      description: "S'entraîner à voix haute avant un entretien sensible.",
      items: [
        "GPT-Live-1 : décrire le rôle du collaborateur, sa position, ses réactions probables",
        "Conversation orale, puis retour écrit sur les formulations, les silences, l'écoute",
        "Réponses aux objections et conclusion de l'entretien préparées à l'avance",
        "Limites : souffrance au travail ou conflit grave se traitent avec les RH",
      ],
      exercise: "Par binômes, vous répétez un entretien de recadrage face à ChatGPT, puis échangez sur ce qui a porté.",
    },
    {
      day: 2,
      title: "Module 7 · Déléguer les synthèses qui reviennent",
      duration: "2h",
      description: "Confier à ChatGPT les livrables hebdomadaires ou mensuels de l'équipe.",
      items: [
        "Compétence de compte rendu au format de l'équipe, partagée à tous",
        "ChatGPT Work pour la revue mensuelle : tableau de suivi et présentation",
        "Agent déclenché depuis Slack pour rassembler les avancées de la semaine, budget de crédits suivi",
        "GPTs d'équipe : à convertir en plugins, le retrait de ces assistants étant prévu le 11 décembre 2026",
      ],
      exercise: "Vous fixez dans une compétence le format de compte rendu de votre équipe et l'essayez sur deux réunions passées.",
    },
    {
      day: 2,
      title: "Module 8 · Donner un cadre d'usage à l'équipe et un plan à trente jours",
      duration: "1h30",
      description: "Offrir à l'équipe des règles lisibles et un premier rythme d'usage.",
      items: [
        "Charte d'équipe : données admises, relecture, ce qui reste au manager",
        "Maîtrise de l'IA : l'AI Act la demande à l'employeur (article 4) depuis février 2025, sessions consignées dans un registre",
        "Un référent ChatGPT dans l'équipe et un temps de partage des bonnes pratiques",
        "Un usage par collaborateur, un point d'étape un mois plus tard",
      ],
      exercise: "Vous mettez par écrit ce que l'équipe peut faire avec ChatGPT, puis le plan que vous présenterez à la prochaine réunion.",
    },
  ],
  objectives: [
    "Le participant sait classer les informations de son équipe entre celles que ChatGPT peut traiter et celles qu'il garde.",
    "Le participant sait préparer une réunion dans un projet ChatGPT et en tirer un relevé qui nomme, pour chaque décision, un porteur et une date.",
    "Le participant sait tirer d'un dossier de comité une note d'arbitrage argumentée.",
    "Le participant sait préparer un entretien annuel avec ChatGPT sans lui confier l'appréciation du collaborateur.",
    "Le participant sait répéter une conversation difficile en mode vocal et en tirer des formulations.",
    "Le participant sait écrire pour son équipe ce qui est permis avec ChatGPT, et le présenter.",
  ],
  tarifs: {
    titre: "Le budget pour former des managers",
    paras: [
      "Pour deux managers comme pour douze, chaque journée revient au même prix : 1 980 € HT. Onze managers formés deux jours en intra représentent 3 960 € HT, ramenés à 360 € HT par manager. La formule individuelle, retenue par un directeur ou un manager de managers qui préfère avancer sur ses dossiers en tête-à-tête, est facturée au même tarif journalier.",
      "Le formateur prépare la session à partir de vos rituels : un ordre du jour type, un compte rendu de comité et la trame de vos entretiens annuels, sans données personnelles. Masteria étant titulaire de Qualiopi, votre OPCO a la possibilité de financer ces deux journées, en appliquant les règles propres à la branche et selon ses moyens. Le formateur vient sur votre site, en France, ailleurs en Europe, aux États-Unis comme en Inde, à moins que vous ne préfériez la classe virtuelle.",
    ],
  },
  cta: {
    milieu: "Dites-nous quels rituels d'équipe vous voulez outiller : réunion hebdomadaire, comité, entretiens annuels.",
    fin: {
      titre: "Préparons la session avec vos managers",
      texte: "Indiquez le nombre de managers, leur pratique actuelle de ChatGPT et l'offre dont dispose l'entreprise. Un programme ajusté à vos rituels et des dates vous sont proposés en retour.",
    },
  },
  apres: {
    titre: "Après la formation, des outils d'équipe construits avec vous",
    texte: "Masteria peut ensuite outiller vos équipes de management : une compétence partagée qui produit les comptes rendus au format de l'entreprise, ou un agent qui réunit chaque vendredi les avancées postées dans Slack et prépare la revue de la semaine. Données admises, droits et validation se règlent avec vous en amont, et l'outil subit une série d'essais avant d'être ouvert. Ce travail, rattaché au conseil et au développement, n'ouvre droit à aucune prise en charge : pas finançable par votre OPCO, l'outil se paie au forfait quand le besoin est cadré.",
  },
  liensAssocies: [
    { label: "Formation IA pour les managers, tous outils", href: '/formation-ia-management' },
    { label: "Formation Claude pour les managers", href: '/formation-claude-management' },
    { label: "Formation Copilot pour le management", href: '/formation-copilot-management' },
    { label: "Formation IA pour les dirigeants", href: '/formation-ia-dirigeants' },
    { label: "Écrire la charte IA commune à tous les services", href: '/charte-ia-entreprise' },
  ],
  faq: [
    {
      q: "Un manager peut-il utiliser ChatGPT pour préparer un entretien annuel ?",
      a: "Oui pour la préparation, non pour l'appréciation. ChatGPT aide à formuler les questions, à écrire des objectifs mesurables et à structurer le plan de développement. L'évaluation de la personne reste au manager : un outil d'IA qui note le travail ou la conduite d'un salarié est classé à haut risque par l'AI Act (annexe III), avec des règles applicables au 2 décembre 2027, et le RGPD (article 22) encadre déjà toute décision qui produit des effets sur une personne et repose sur la seule machine. En atelier, la trame se prépare sur un poste, sans nommer le collaborateur.",
    },
    {
      q: "Quelles informations sur l'équipe ne doivent jamais entrer dans ChatGPT ?",
      a: "Celles qui touchent à la personne : santé, arrêts, situation familiale, conflits, appréciations, rémunération individuelle. Même sur ChatGPT Business, dont les conversations ne nourrissent aucun modèle par défaut, ces informations ne regardent pas l'outil. Sur un compte Plus ou gratuit, la prudence redouble : par défaut, OpenAI peut s'en servir pour ses modèles, sauf réglage contraire de l'abonné. La formation aide chaque manager à écrire sa liste, puis les règles communes de l'équipe.",
    },
    {
      q: "ChatGPT peut-il résumer une réunion ?",
      a: "Il résume des notes ou une transcription, à condition de recevoir le format attendu : décisions, actions, porteurs, échéances, points ouverts. Le relevé se relit avant envoi, car un résumé peut attribuer une décision à la mauvaise personne ou durcir une nuance. Dans un projet propre à l'équipe, ChatGPT retrouve les comptes rendus précédents et signale les actions restées sans suite. Une compétence de compte rendu impose ensuite ce format à toute l'équipe.",
    },
    {
      q: "Comment répéter une conversation difficile avec ChatGPT ?",
      a: "Avec GPT-Live-1, qui tient une conversation orale. Le manager décrit le rôle : un collaborateur dont la demande sera refusée, ses arguments, son humeur probable. Il mène l'échange à voix haute et réclame ensuite un retour écrit sur ses formulations, ses relances et sa conclusion. L'exercice prépare un recadrage, un refus ou une annonce. Une situation de souffrance au travail ou un conflit grave se traite avec les RH, en dehors de cet entraînement.",
    },
    {
      q: "Le manager doit-il fixer des règles d'usage pour son équipe ?",
      a: "Oui, sauf si l'entreprise l'a déjà fait. L'AI Act pose, depuis le 2 février 2025, une obligation de moyens : l'employeur fait monter en compétence sur l'IA ceux qui l'utilisent (article 4). Aucun diplôme n'est requis, et un registre des sessions suivies documente l'effort. Au quotidien, c'est vers le manager que l'équipe se tourne : quel compte, quelles données, qui relit. Le module 8 produit la charte de l'équipe, en cohérence avec les règles générales de la société si elles sont écrites.",
    },
    {
      q: "Que faire des GPTs créés par l'équipe ?",
      a: "Préparer leur fin : OpenAI cessera de les faire fonctionner le 11 décembre 2026 sur l'ensemble des abonnements, ou le 11 février 2027 dans les rares espaces Enterprise bénéficiant d'un sursis. Chaque GPT peut devenir un plugin, où les instructions prennent la forme d'une compétence et où les pièces jointes restent consultables comme références. Actions personnalisées et réglages de partage se perdent en route ; le plugin démarre en privé. La formation aide le manager à recenser ceux de l'équipe et à repartager ceux qui servent.",
    },
    {
      q: "Qui finance la formation ChatGPT des managers ?",
      a: "En France, l'OPCO rattaché à votre secteur décide au vu de ses critères et de ses ressources ; il ne finance qu'un organisme certifié Qualiopi, et Masteria l'est. Une journée vaut 1 980 € HT, que l'on forme douze managers ou un seul. Le dossier est déposé avant la session, avec les pièces que rédige Masteria : programme détaillé, convention. Un groupe qui forme ses managers dans plusieurs pays reçoit un devis par session, en euros HT.",
    },
  ],
}
