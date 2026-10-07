// Contenu propre à /formation-gouvernance-ia (page propre). Rendu par SpokePage.
// Journée de formation sur le dispositif de gouvernance de l'IA : registre, charte, comité, réglages des consoles.
// Faits outils : fiche de faits du 07/10/2026 (sections 1 à 4 et 6 : réglages d'entraînement par défaut, consoles
// d'administration, fin des GPTs, des Gems et des agents de Vibe). AI Act : section 7. Étude de cas : « photovoltaique ».
// Faits Masteria : brief commun du 07/10/2026 (1 980 € HT la journée, intra jusqu'à 12 ou individuel).
export default {
  slug: 'formation-gouvernance-ia',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation gouvernance IA : registre, charte et comité pour encadrer vos usages dans la durée",
  metaTitle: 'Formation gouvernance IA : registre et charte | Masteria',
  metaDesc: "Formation gouvernance IA en 1 jour : registre des usages, charte, comité, réglages des consoles, fin des GPTs et des Gems. 1 980 € HT, Qualiopi, OPCO.",
  keywords: "formation gouvernance ia, gouvernance de l'ia, registre ia, charte ia, comité ia, politique d'usage de l'ia, formation conformité ia, gouvernance des données ia",
  resume: "La formation gouvernance IA apprend en une journée à l'équipe qui pilote l'intelligence artificielle dans l'entreprise à bâtir son dispositif : un registre des usages vivant, une charte que les salariés lisent, un comité qui instruit les demandes, et des consoles d'administration réglées pour que la charte soit respectée. Masteria l'anime chez vous ou en visioconférence ; la journée coûte 1 980 € HT, que vous veniez seul ou à douze ; les pièces nécessaires à une demande auprès de l'OPCO vous sont remises, l'organisme étant certifié Qualiopi.",
  enBref: [
    { label: 'Formation', value: "Le dispositif qui encadre l'IA au quotidien : registre, charte, comité, réglages des outils, indicateurs" },
    { label: 'Durée', value: "Sept heures en quatre modules, avec des gabarits remplis sur les usages de votre organisation" },
    { label: 'Public', value: "DPO, juristes, DSI, RSSI, responsables data, référents IA et membres de la direction" },
    { label: 'Tarif', value: "1 980 € HT pour la journée, prix fixe jusqu'à douze personnes" },
    { label: 'Financement', value: "Prise en charge possible par l'OPCO, sur dossier, Masteria étant certifié Qualiopi" },
    { label: 'Prérequis', value: "Venir à deux ou trois de la même organisation si possible, avec la liste des outils d'IA connus à ce jour" },
  ],
  intro: "Dans la plupart des entreprises, l'IA est déjà là avant toute règle : des comptes ouverts par les salariés, un assistant inclus dans la suite bureautique, un fournisseur qui ajoute une fonction d'IA à son logiciel. La gouvernance consiste à reprendre la main sans tout interdire. Cette journée s'adresse à l'équipe qui en portera la charge : le DPO, le DSI ou le responsable de la sécurité, un représentant de la direction, le référent IA quand il existe. Elle s'appuie sur l'état des outils au 7 octobre 2026, avec des échéances qui pèsent sur le registre : la disparition des GPTs personnalisés, fixée au 11 décembre, la fin programmée des Gems de Google, le remplacement des agents de Vibe par des compétences. Vous repartez avec un registre amorcé, une trame de charte et le mode de fonctionnement de votre comité.",
  guide: {
    kicker: 'Guide terrain',
    h2: "Un dispositif de gouvernance tient en quatre pièces, et chacune se règle dans les outils",
    lead: "Une gouvernance de l'IA qui reste sur le papier ne change rien aux pratiques. Elle devient réelle quand le registre décrit les usages tels qu'ils existent, quand la charte se traduit en réglages dans les consoles d'administration, et quand un comité répond aux demandes assez vite pour que personne ne contourne la règle. La journée construit ces quatre pièces dans cet ordre, sur les outils de votre organisation.",
    sections: [
      {
        h3: "Le registre commence par les comptes, avant les usages",
        paras: [
          "La première question est arithmétique : combien de personnes utilisent quel assistant, avec quel compte. Les journaux de connexion de l'annuaire, les notes de frais qui mentionnent un abonnement et une enquête courte auprès des services donnent une image fiable en quelques jours. Cette photographie précède toute règle, car on ne gouverne pas un usage qu'on ignore.",
          "Chaque ligne du registre décrit ensuite un usage précis, rattaché à son outil. Elle précise le service, la finalité, l'outil et l'offre souscrite, les données qui y entrent, le niveau de risque au sens de l'AI Act, la personne qui en répond, le statut (autorisé, encadré ou interdit) et la date de la prochaine revue. Un usage qui manipule des données personnelles appelle aussi une ligne dans le registre des traitements tenu au titre du RGPD : la journée montre comment relier les deux documents sans tout saisir deux fois.",
        ],
      },
      {
        h3: "Chaque offre a son propre réglage d'entraînement par défaut",
        paras: [
          "La question la plus fréquente des salariés porte sur la confidentialité : ce que je tape sert-il à entraîner le modèle ? La réponse dépend de l'offre, et le registre doit la porter. Chez OpenAI, Anthropic, Microsoft et Google, les formules destinées aux entreprises n'utilisent pas vos échanges pour l'entraînement, sans réglage à faire. Les formules gratuites ou personnelles de ChatGPT et de Vibe les y versent jusqu'à ce que l'utilisateur refuse. Vibe Team, l'offre d'équipe de Mistral AI, part aussi d'un réglage actif, que l'administrateur peut couper pour toute l'organisation.",
          "Le tableau de cette page récapitule ces réglages au 7 octobre 2026. Pendant la journée, chaque participant vérifie l'offre en service dans son organisation et inscrit le réglage observé dans le registre, plutôt que le réglage supposé.",
        ],
      },
      {
        h3: "La console d'administration applique ce que la charte promet",
        paras: [
          "Une règle qui n'est pas réglée dans l'outil dépend de la bonne volonté de chacun. Chez Microsoft, un rôle d'administrateur dédié à l'IA permet de gérer Copilot sans les droits d'un administrateur général ; les modèles Claude y sont éteints d'office pour un client de l'Union, et les allumer, ce qui fait passer certains traitements hors de la frontière de données européenne (EU Data Boundary) garantie par Microsoft, mérite une décision du comité. Copilot retrouve aussi tout document auquel un salarié a accès : l'audit des partages SharePoint fait partie du dispositif.",
          "Chez OpenAI, l'administrateur de ChatGPT Business gère depuis le 1er octobre 2026 les plugins et leurs catalogues dans la console. Chez Mistral AI, un panneau d'administration centralisé existe depuis le 10 septembre 2026, avec le réglage d'entraînement de Vibe Team. Chez Google, l'accès des utilisateurs à Gemini et à Gemini Notebook se règle dans la console d'administration de Workspace. La journée relie chaque article de la charte au réglage qui le rend effectif.",
        ],
      },
      {
        h3: "Les assistants configurés changent de forme cet automne",
        paras: [
          "Trois familles d'assistants personnalisés arrivent en fin de vie. OpenAI supprime les GPTs personnalisés de toutes ses formules le 11 décembre 2026, avec un sursis jusqu'au 11 février 2027 pour les espaces Enterprise qui l'ont obtenu ; ils migrent vers des plugins, où leurs instructions deviennent une compétence. Google remplace les Gems par des compétences : pour les comptes professionnels, plus aucun Gem ne pourra être créé ni utilisé à partir du 1er mars 2027 au plus tôt. Vibe a remplacé ses agents par des Skills le 22 septembre 2026.",
          "Pour la gouvernance, l'enjeu est double. Il faut d'abord inscrire au registre chaque assistant configuré, avec son propriétaire, pour qu'aucun ne disparaisse sans que personne s'en aperçoive. Il faut ensuite gérer les compétences qui les remplacent comme un patrimoine : un fichier d'instructions au format SKILL.md, désormais lu par les principaux assistants, avec un propriétaire, une version, un test et une date de revue.",
        ],
      },
      {
        h3: "Le comité instruit vite, avec des critères écrits",
        paras: [
          "Un comité qui met deux mois à répondre pousse les équipes vers les comptes personnels. Le modèle travaillé pendant la journée réunit un représentant de la direction, le DPO, le DSI ou le RSSI, un responsable métier et le référent IA. Il fonctionne sur un circuit court : une demande écrite sur un formulaire d'une page, une instruction par le référent, une décision en séance, puis une inscription au registre avec une date de revue.",
          "Les critères de décision sont fixés à l'avance : la finalité, les données concernées, l'offre et ses réglages, le niveau de risque que lui attribuerait l'AI Act, le coût. Trois indicateurs suffisent pour piloter : la part des usages connus inscrits au registre, le nombre de demandes en attente, les incidents signalés. Le comité les relit à chaque réunion.",
        ],
      },
      {
        h3: "La charte se lit en cinq minutes et se signe",
        paras: [
          "Une charte utile tient sur deux pages et se range en trois colonnes : ce qui est autorisé sans demande, ce qui est encadré, ce qui est interdit. Elle nomme les outils fournis par l'entreprise, dit quelles données ne doivent jamais entrer dans un assistant, impose une relecture humaine de tout document qui engage l'entreprise et indique à qui signaler une erreur de l'IA.",
          "Elle reprend aussi deux règles européennes : un contenu réaliste produit par l'IA et montré au public doit être signalé depuis le mois d'août 2026, et les outils employés pour recruter ou évaluer le personnel entreront dans le régime du haut risque le 2 décembre 2027. La journée se conclut sur la trame de votre charte, à faire valider par la direction puis signer par les salariés avant leur formation.",
        ],
      },
    ],
    table: {
      caption: "Le réglage d'entraînement par défaut, offre par offre, au 7 octobre 2026",
      headers: ['Offre', 'Vos échanges entraînent-ils les modèles ?', 'Qui peut changer le réglage'],
      rows: [
        ['ChatGPT Free, Go, Plus et Pro', 'Oui, tant que le réglage reste actif', "L'utilisateur, dans les contrôles des données"],
        ['ChatGPT Business et Enterprise', 'Non, par défaut', 'Sans objet'],
        ['Microsoft Copilot et Copilot Chat, compte professionnel', 'Non', 'Sans objet'],
        ['Gemini dans Google Workspace, compte professionnel', 'Non, sauf autorisation du client', 'Sans objet'],
        ['Claude Team et Enterprise', 'Non, par défaut', 'Sans objet'],
        ['Claude Free, Pro et Max', "Selon le choix de l'utilisateur", "L'utilisateur"],
        ['Vibe Free et Pro', 'Oui, par défaut', "L'utilisateur peut s'y opposer"],
        ['Vibe Team', 'Oui, par défaut', "L'administrateur, pour toute l'organisation"],
        ['Vibe Enterprise', 'Non, par défaut', "L'administrateur peut l'activer"],
      ],
    },
    cas: {
      h3: "Mise en situation : le premier comité IA d'une ETI examine trois demandes",
      contexte: "Prenons une ETI industrielle de 300 salariés, équipée de Microsoft 365 avec quelques licences Microsoft Copilot. Pour sa première réunion, le comité IA reçoit trois demandes : le marketing veut générer des visuels de produits pour une campagne, les ressources humaines veulent faire synthétiser les comptes rendus des entretiens de fin d'année, la comptabilité veut un agent qui lit les factures fournisseurs reçues par mail. L'entreprise est fictive ; elle sert de terrain à l'exercice.",
      etapes: [
        "Le référent IA rassemble pour chaque demande le formulaire du service, l'outil visé et l'offre souscrite.",
        "Il copie la charte en vigueur dans l'assistant fourni par l'entreprise, puis le prompt ci-dessous, qui prépare les fiches d'instruction.",
        "Il vérifie chaque fiche : réglage d'entraînement de l'offre, données concernées vérifiées auprès du service, coût de l'agent.",
        "Le comité décide en séance : visuels autorisés avec mention, entretiens annuels refusés en l'état, agent des factures accordé pour un essai plafonné.",
        "Le référent porte les trois décisions au registre, chacune avec son responsable et sa prochaine échéance de revue.",
      ],
      prompt: "Tu prépares les fiches d'instruction du comité IA de notre entreprise. Tu ne prends aucune décision.\n\nVoici notre charte d'usage de l'IA :\n[coller la charte]\n\nVoici les demandes reçues, avec le service, l'outil, l'offre souscrite et les données concernées :\n[coller les demandes]\n\nPour chaque demande, rédige une fiche d'une page avec :\n1. la finalité, en une phrase ;\n2. les données qui entreraient dans l'outil, en distinguant les données personnelles ;\n3. le réglage d'entraînement par défaut de l'offre citée, ou « à vérifier » si tu n'en es pas sûr ;\n4. le niveau de risque probable au regard de l'AI Act (risque minimal, transparence, haut risque), avec l'article sur lequel tu t'appuies ;\n5. les articles de notre charte concernés ;\n6. les conditions que le comité pourrait poser s'il accepte ;\n7. les questions encore ouvertes.\n\nN'invente ni réglage ni article : signale ce que tu ignores.",
      resultat: "Vous obtenez trois fiches comparables, qui permettent au comité de décider en quelques minutes par demande. L'assistant peut se tromper sur un réglage ou un numéro d'article : la vérification de l'étape 3 reste indispensable. Dans cet exemple, la demande des ressources humaines touche à l'évaluation des personnes, un domaine que l'AI Act classera à haut risque fin 2027 et que le RGPD encadre déjà, d'où un refus en l'état et une piste d'usage plus étroite à instruire.",
    },
    pieges: [
      {
        titre: 'Une charte de vingt pages que personne ne lit',
        texte: "Plus la charte est longue, moins elle est appliquée. Gardez deux pages, trois colonnes et des exemples tirés de vos métiers ; renvoyez le détail vers les procédures internes.",
      },
      {
        titre: 'Un registre rempli une fois puis oublié',
        texte: "Un registre sans date de revue décrit l'entreprise d'il y a six mois. Chaque ligne porte un responsable et une échéance, et le comité contrôle à chaque séance les revues dépassées.",
      },
      {
        titre: 'Un comité qui refuse par principe',
        texte: "Chaque refus sans solution de rechange renvoie un usage vers un compte personnel. Quand une demande est refusée, le comité propose une version encadrée ou un autre outil.",
      },
      {
        titre: "Des GPTs oubliés jusqu'au 11 décembre 2026",
        texte: "Un GPT personnalisé dont personne n'a la charge disparaîtra avec le retrait annoncé par OpenAI, et le service qui s'en servait le découvrira le jour même. Recensez-les dès maintenant et confiez chaque migration à un propriétaire.",
      },
      {
        titre: 'Des modèles Claude activés dans Copilot sans décision',
        texte: "Dans l'Union européenne, leur activation par un administrateur fait sortir certains traitements de l'espace de données que Microsoft garde en Europe. Ce choix revient au comité, qui l'inscrit au registre avec ses motifs.",
      },
    ],
  },
  audience: [
    { title: 'DPO, juristes et responsables conformité', desc: "Registre des traitements, analyses d'impact : votre métier les connaît déjà, et l'IA vient s'y ajouter. La journée vous donne un registre des usages relié au registre RGPD, une méthode d'instruction des demandes et les traces à conserver pour l'AI Act." },
    { title: 'DSI, RSSI et responsables data', desc: "Vous administrez les consoles où se joue la gouvernance réelle : rôles, modèles activés, plugins, réglages d'entraînement, droits de partage. Vous apprenez à traduire chaque article de la charte en réglage, et à recenser les comptes ouverts hors de votre contrôle." },
    { title: 'Direction, référents IA et responsables métier', desc: "Vous arbitrez entre les demandes des services et les risques. La journée installe le comité, son circuit de décision et ses indicateurs, pour que les équipes obtiennent une réponse rapide plutôt qu'un silence qui les renvoie vers leurs comptes personnels." },
  ],
  useCases: [
    { icon: '🗂', title: 'Un registre des usages', desc: "Usage, service, outil, offre, données, risque, responsable, statut et date de revue, relié au registre RGPD." },
    { icon: '📋', title: 'Une charte en trois colonnes', desc: "Autorisé, encadré, interdit : deux pages, des exemples tirés de vos métiers, une signature des salariés." },
    { icon: '👥', title: 'Un comité qui répond vite', desc: "Composition, formulaire de demande, critères écrits, décision en séance et suivi au registre." },
    { icon: '⚙', title: 'Des consoles réglées', desc: "Rôles d'administration, modèles activés, plugins et réglages d'entraînement alignés sur la charte." },
    { icon: '🔁', title: 'Des assistants recensés', desc: "GPTs, Gems et agents en fin de vie inventoriés, compétences gérées avec propriétaire et version." },
    { icon: '📈', title: 'Trois indicateurs suivis', desc: "Couverture du registre, demandes en attente, incidents signalés, relus à chaque séance du comité." },
  ],
  modules: [
    {
      day: 1, title: 'Module 1 · Recenser les comptes et ouvrir le registre', duration: '1h45',
      description: "On part de ce qui existe : les comptes, les outils, les usages déjà installés.",
      items: [
        "Méthodes de recensement : journaux de connexion, notes de frais, enquête auprès des services",
        "Les champs d'une ligne du registre et le lien avec le registre RGPD",
        "Assistants configurés à inventorier : GPTs, Gems, agents, compétences",
        "Classer les usages : autorisé, encadré, interdit",
      ],
      exercise: "Vous remplissez les dix premières lignes du registre de votre organisation avec la trame fournie.",
    },
    {
      day: 1, title: 'Module 2 · Régler les consoles selon les règles voulues', duration: '1h45',
      description: "Chaque règle de la charte doit avoir un réglage qui la rend effective.",
      items: [
        "Réglages d'entraînement par offre au 7 octobre 2026",
        "Microsoft : rôle d'administrateur IA, modèles Claude dans l'Union européenne, audit des partages",
        "ChatGPT Business, Vibe Team, Google Workspace : plugins, entraînement, activation des fonctions",
        "Compétences au format SKILL.md : propriétaire, version, test, revue",
      ],
      exercise: "Vous dressez la liste des réglages à vérifier dans les consoles de votre organisation, avec la personne qui s'en charge.",
    },
    {
      day: 1, title: 'Module 3 · Écrire une charte lisible et la faire signer', duration: '1h45',
      description: "La charte dit en deux pages ce que chacun peut faire, et à qui s'adresser.",
      items: [
        "Trois colonnes : autorisé, encadré, interdit, avec des exemples de vos métiers",
        "Données qui n'entrent jamais dans un assistant, relecture humaine, signalement des erreurs",
        "AI Act dans la charte : article 4, transparence des contenus publiés, usages RH à venir en haut risque",
        "Diffusion : signature, rappel dans les outils, formation des équipes",
      ],
      exercise: "Vous rédigez la trame de votre charte en traitant trois cas limites apportés par le groupe.",
    },
    {
      day: 1, title: 'Module 4 · Installer le comité et piloter sur 90 jours', duration: '1h45',
      description: "Le comité fait vivre le dispositif ; il lui faut un circuit court et des indicateurs simples.",
      items: [
        "Composition, mandat, fréquence et lien avec les instances existantes",
        "Circuit d'une demande : formulaire, instruction, décision, inscription au registre",
        "Trois indicateurs : couverture du registre, demandes en attente, incidents",
        "Plan de lancement à 90 jours, avec les échéances du 11 décembre 2026 et de 2027",
      ],
      exercise: "Vous simulez la première séance du comité sur trois demandes réelles de votre organisation, puis vous fixez votre plan à 90 jours.",
    },
  ],
  objectives: [
    "Amorcer un registre des usages de l'IA, ligne par ligne, en le reliant au registre RGPD",
    "Indiquer, pour une offre donnée, le réglage d'entraînement par défaut et la personne qui peut le modifier",
    "Rédiger une charte d'usage en trois colonnes, avec les données exclues et la règle de relecture humaine",
    "Décrire le circuit d'une demande d'usage jusqu'à la décision du comité et à son inscription au registre",
    "Établir un plan à 90 jours qui tient compte du retrait des GPTs et des autres échéances connues",
  ],
  faq: [
    {
      q: 'Quelle différence entre la formation gouvernance IA et la formation AI Act ?',
      a: "La formation AI Act part du règlement européen : rôles, niveaux de risque, calendrier, obligations. Cette journée part du dispositif qui fait vivre ces règles dans l'entreprise : le registre, la charte, le comité et les réglages des consoles d'administration. Le règlement y est rappelé là où il s'applique, sans y passer la journée. Une organisation qui commence suit souvent la formation AI Act avec son noyau conformité, puis cette journée avec l'équipe qui pilotera les usages au quotidien.",
    },
    {
      q: "Faut-il déjà avoir des usages d'IA en place ?",
      a: "La plupart des organisations en ont déjà, et c'est le terrain le plus utile : le registre et la charte se construisent sur vos usages, y compris ceux apparus sur des comptes privés. Une organisation qui démarre en tire aussi profit, car elle installe le cadre avant que les usages se multiplient. Dans les deux cas, apportez la liste des outils connus à ce jour, même incomplète ; le premier module sert justement à la compléter.",
    },
    {
      q: 'Qui doit participer à la formation gouvernance IA ?',
      a: "Les personnes qui porteront le dispositif : le DPO ou le responsable conformité, le DSI ou le RSSI, un membre de la direction ou le référent IA, et si possible un responsable métier qui fera remonter les demandes du terrain. Venir à deux ou trois d'une même organisation permet de repartir avec un registre et une charte déjà discutés à plusieurs voix. Douze inscrits au maximum composent un groupe ; la formation se suit aussi seul, quand une personne porte toute la gouvernance.",
    },
    {
      q: "Quel budget prévoir pour la journée gouvernance, et qui peut la financer ?",
      a: "Un prix unique de 1 980 € HT, auquel s'ajoute la TVA à 20 %, couvre la journée pour tout le groupe, d'une personne à douze ; à quatre, chacun revient à 495 € HT. Les OPCO financent les organismes certifiés Qualiopi, ce qui est le cas de Masteria : le vôtre étudie le dossier et tranche selon ses barèmes et l'enveloppe de l'année. Le dossier part avec le programme et la convention que nous rédigeons. Pour une organisation genevoise ou bruxelloise, faute d'OPCO, un devis en euros HT remplace cette démarche.",
    },
    {
      q: 'Registre des usages IA et registre RGPD : faut-il deux documents ?',
      a: "Ils ont deux objets différents et se complètent. Le registre des traitements, exigé par l'article 30 du RGPD, décrit les traitements de données personnelles ; le registre des usages de l'IA décrit ce que les équipes font avec les assistants, y compris sans donnée personnelle. Un usage qui en manipule figure donc dans les deux. La journée propose une trame où chaque ligne du registre IA renvoie au traitement correspondant, pour éviter les doubles saisies et les écarts entre les deux documents.",
    },
    {
      q: 'Que faire de nos GPTs et de nos Gems existants ?',
      a: "Les recenser d'abord, avec leur propriétaire. Les GPTs personnalisés cessent d'exister le 11 décembre 2026 ; les espaces Enterprise ayant obtenu un délai les gardent jusqu'au 11 février 2027. Migrer vers un plugin convertit leurs instructions en compétence, sans emporter leurs actions personnalisées ni leurs droits de partage. Google remplace les Gems par des compétences et ne les laissera plus utiliser par les comptes professionnels au plus tôt à partir du 1er mars 2027. La journée fixe qui migre quoi, et avant quelle date.",
    },
    {
      q: 'Combien de temps faut-il pour installer le dispositif ?',
      a: "La journée fournit les gabarits et un premier registre ; la suite dépend de votre taille. Une PME peut tenir sa première séance de comité dans le mois et publier sa charte dans le trimestre. Une organisation plus grande commence par un périmètre, un site ou une direction, puis étend le dispositif. Le plan à 90 jours écrit en fin de journée fixe ces étapes, avec les échéances qui ne bougeront pas, comme la date de fin des GPTs.",
    },
    {
      q: 'Quel lien avec votre offre de conseil en gouvernance IA ?',
      a: "La formation rend votre équipe capable de construire et de faire vivre le dispositif elle-même. Le conseil en gouvernance IA va plus loin : Masteria réalise le recensement, rédige la charte et le registre avec vous, règle les consoles et anime les premières séances du comité. Les deux se combinent souvent, le conseil pour poser le socle et la formation pour transmettre la maîtrise. Seule la journée de formation se prête à un financement par l'OPCO : le conseil n'est pas finançable par votre OPCO, et son forfait se calcule une fois le cadrage fait.",
    },
  ],
  tarifs: {
    titre: "Le prix de la journée gouvernance, et ce qu'il inclut",
    paras: [
      "Pour le groupe entier, de un à douze inscrits, le prix est de 1 980 € HT. Il comprend un échange préalable sur vos outils, vos instances et vos documents existants (charte, politique de sécurité, registre RGPD), l'adaptation des cas pratiques à votre secteur, les gabarits de registre, de charte et de formulaire de demande, et l'attestation remise à chaque participant.",
      "Prenons une ETI qui inscrit son DPO, son DSI, son RSSI et sa directrice juridique : la journée revient à 495 € HT par personne, et les quatre repartent avec les mêmes documents de travail. Côté financement, votre OPCO peut couvrir tout ou partie de la journée, Masteria étant certifié Qualiopi, et il décide d'après ses propres barèmes ; le dossier se dépose avant la session, convention et programme joints.",
    ],
  },
  cta: {
    milieu: "Faites-nous parvenir l'inventaire, même partiel, des assistants utilisés chez vous : la journée démarre sur votre registre.",
    fin: {
      titre: 'Préparons la journée avec votre équipe de gouvernance',
      texte: "Dites-nous qui portera le dispositif (DPO, DSI, RSSI, direction, référent IA), quels assistants sont déployés et ce qui existe déjà : charte, politique de sécurité, comité. Nous proposons une date et un programme ajusté à votre point de départ.",
    },
  },
  apres: {
    titre: 'Après la journée : un comité outillé et une bibliothèque de compétences tenue à jour',
    texte: "Un dispositif de gouvernance gagne à s'appuyer sur quelques outils simples : un tableau de bord du comité qui suit les demandes, les décisions, les revues à venir et les incidents, ou une bibliothèque de compétences partagée où chaque fichier porte son propriétaire, sa version et sa date de test. Masteria peut construire ces outils sur votre environnement, Microsoft 365 ou Google Workspace, et former la personne qui les administrera. Ce travail de développement n'est pas finançable par votre OPCO ; Masteria en fixe le prix forfaitaire dès que le besoin est cadré.",
  },
  terrain: {
    titre: "Sur le terrain : une charte, un référent et un point mensuel dans une PME",
    texte: "Chez un distributeur de solutions photovoltaïques qui compte trois personnes, le diagnostic présenté par Masteria à la direction en septembre 2026 a classé les règles d'usage au plus bas de l'échelle de maturité : l'IA était arrivée par des comptes personnels. Les recommandations reprennent les pièces que cette journée apprend à poser : une charte à signer avant la formation, un référent IA chargé des comptes et des erreurs signalées, un point mensuel, et des comptes d'équipe administrés à la place des comptes personnels, inscrits au registre RGPD. Une formation dans les locaux de l'entreprise doit suivre en octobre 2026.",
    lien: '/etudes-de-cas-ia#photovoltaique',
  },
  liensAssocies: [
    { label: 'Formation AI Act : le règlement appliqué à votre entreprise', href: '/formation-ai-act' },
    { label: 'Sprint IA AI Act, trois heures pour les équipes', href: '/formation-sprint-ia-ai-act' },
    { label: "Conseil en gouvernance de l'IA et conformité", href: '/gouvernance-ia' },
    { label: "Charte IA d'entreprise : méthode et exemples", href: '/charte-ia-entreprise' },
    { label: 'Formation IA pour dirigeants', href: '/formation-ia-dirigeants' },
  ],
  sources: [
    { name: "Microsoft Learn : Anthropic comme sous-traitant de Copilot, et le réglage pour l'Europe", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor' },
    { name: "Microsoft Learn : présentation de Microsoft Copilot (protection des données, rôle d'administrateur IA, partages)", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview' },
    { name: 'OpenAI : retrait et migration des GPTs personnalisés', url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
    { name: "OpenAI : nouveautés de l'offre ChatGPT Business, dont la gestion des plugins", url: 'https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes' },
    { name: 'Google : du Gem à la compétence, calendrier pour les comptes professionnels', url: 'https://knowledge.workspace.google.com/p/gems-migration' },
    { name: 'Google Workspace : confidentialité de Gemini pour les entreprises', url: 'https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub' },
    { name: "Mistral AI : vos données servent-elles à entraîner les modèles ? (aide en anglais)", url: 'https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models' },
    { name: "Mistral AI : notes de version (Skills, panneau d'administration)", url: 'https://docs.mistral.ai/resources/release-notes' },
  ],
}
