// Article réécrit le 07/10/2026 : stratégie IA d'entreprise, du diagnostic à la feuille de route.
// Même plan et mêmes chiffres sourcés que la version du 03/09/2026 ; passages repris par d'autres
// pages du site (ROI, audit, études de cas, gabarits des villes) reformulés. Faits mis à jour :
// nom de Microsoft Copilot, article 4 de l'AI Act dans sa rédaction du 27/07/2026 (fiche de faits du
// 07/10/2026), cas d'études relus dans src/data/etudes-de-cas.js (photovoltaïque, industrie).
// Remplace les champs correspondants de blog-articles.js.

export default {
  slug: 'strategie-ia-entreprise-guide',
  dateModified: '2026-10-07',
  blocks: [
    { type: 'p', text: "La situation de départ se ressemble d'une entreprise à l'autre. Les équipes se servent déjà d'outils d'IA, souvent avec leur compte privé. La direction veut savoir où elle va avant de dépenser plus. Et aucun texte ne dit ce que l'entreprise attend de l'IA. La stratégie consiste à écrire ce texte, et surtout à prendre les décisions qu'il contient." },
    { type: 'p', text: "Pour construire cette stratégie avec votre comité de direction, la page <a href='/conseil-strategie-ia'>conseil stratégie IA</a> décrit la mission, étape par étape, et ce que vous recevez à la fin. Ce guide s'adresse à ceux qui veulent comprendre la démarche ou la conduire sans aide extérieure." },
    {
      type: 'ul',
      items: [
        "<strong>Six composantes suffisent à décrire une stratégie IA d'entreprise</strong> : ambition et périmètre, cas d'usage priorisés, données et socle outillé, organisation et compétences, cadre d'usage, budget et indicateurs.",
        "<strong>Cinq étapes permettent de l'écrire</strong> : diagnostic, priorisation, socle, cadre, feuille de route mesurée.",
        "<strong>Le temps gagné se perd en route</strong> : les salariés en gagnent, l'entreprise ne le retrouve pas dans ses comptes tant que personne n'a décidé à quoi employer les heures libérées.",
        "<strong>La méthode vaut pour toutes les tailles</strong> : une PME de trois salariés et un groupe de plusieurs milliers de personnes ne déploient pas les mêmes moyens, mais suivent les mêmes étapes.",
        "<strong>Deux obligations européennes courent déjà</strong> : former les utilisateurs de l'IA, depuis le 2 février 2025, et signaler les contenus générés, depuis le 2 août 2026. Les autres obligations du règlement attendent fin 2027 et 2028.",
      ],
    },

    { type: 'h2', text: "Stratégie IA : de quoi parle-t-on, et de quoi on ne parle pas" },
    { type: 'p', text: "Le mot « stratégie IA » désigne trois choses différentes selon qui le prononce. Le tableau les sépare, parce que la confusion coûte du temps à ceux qui cherchent le troisième sens et trouvent les deux premiers." },
    {
      type: 'table',
      headers: ['Expression', 'Qui la porte', "Ce qu'elle recouvre"],
      rows: [
        ["Stratégie nationale pour l'IA", "L'État français, depuis 2018", "Financement de la recherche, des entreprises et de la formation, infrastructures de calcul, positionnement européen. Un plan public, sans portée directe sur votre organisation."],
        ["Stratégie IA d'un éditeur", "Microsoft, Google, OpenAI, Anthropic, Mistral", "Le choix d'un fournisseur de placer l'IA au cœur de ses produits. Elle décide de ce que vos outils sauront faire demain ; l'usage que vous en ferez reste à votre main."],
        ["Stratégie IA d'entreprise", "Votre direction", "Les usages retenus et écartés, les données et outils, les règles, les compétences, le budget, les porteurs, le calendrier et la mesure. Le sujet de ce guide."],
      ],
    },

    { type: 'h2', text: "Ce qu'une stratégie IA d'entreprise contient : six composantes" },
    { type: 'p', text: "Une stratégie qui tient sur dix pages vaut mieux qu'un schéma directeur de quatre-vingts. Elle répond à six questions, et chacune produit un livrable court." },
    {
      type: 'table',
      headers: ['Composante', 'La question à trancher', 'Le livrable'],
      rows: [
        ['Ambition et périmètre', "Que voulons-nous obtenir de l'IA d'ici douze mois : absorber plus de volume, éviter un recrutement, réduire une dépense externe, remonter la qualité ? Sur quelles entités et quels métiers ?", "Une page : l'ambition en une phrase, le périmètre retenu, ce qui en est exclu"],
        ["Cas d'usage priorisés", "Quelles tâches, avec quel volume, quel gain attendu, quelle difficulté ? Lesquelles écartons-nous, et pourquoi ?", "Les cas rangés par impact attendu et par faisabilité à trois mois, avec la liste des cas écartés et la raison de chaque refus"],
        ['Données et socle outillé', "De quelles données chaque cas a-t-il besoin, sont-elles disponibles et de qualité ? Quel outil d'équipe, quel hébergement, quels connecteurs vers les logiciels en place ?", "Un socle nommé, administré par l'entreprise, avec son coût par poste"],
        ['Organisation et compétences', "Qui porte chaque chantier, qui est référent, qui forme qui, dans quel ordre ? Comment un nouvel arrivant est-il formé ?", "Les porteurs désignés et un programme de formation construit métier par métier"],
        ["Cadre d'usage", "Quelles informations restent hors des outils d'IA, qui valide ce qui engage l'entreprise, comment un incident remonte, où en sommes-nous vis-à-vis du RGPD et de l'AI Act ?", "Une charte d'une page et un positionnement réglementaire"],
        ['Budget, indicateurs, calendrier', "Combien, pour quoi, et comment saurons-nous que ça marche ?", "Le plan des 90 premiers jours, la trajectoire sur l'année, cinq indicateurs avec point de départ et cible"],
      ],
    },

    { type: 'h2', text: "Les chiffres à lire avant de rédiger la vôtre" },
    { type: 'p', text: "Les études sérieuses sur l'IA en entreprise disent deux choses en même temps : les salariés gagnent du temps, et les entreprises ne le voient pas encore dans leurs comptes. Une stratégie IA sert à combler cet écart. Chaque chiffre est donné avec sa période de mesure, parce que l'écart entre la collecte et la publication fausse souvent la lecture." },
    {
      type: 'table',
      headers: ["Ce que dit l'étude", 'Périmètre et mesure', 'Source'],
      rows: [
        ["70 % des entreprises utilisent l'IA d'une façon ou d'une autre ; 7 % seulement la jugent importante pour leur activité", "6 000 entreprises de la zone euro, enquête SAFE de juin et de décembre 2025", "BCE, Occasional Paper n° 395 (février 2026)"],
        ["Neuf dirigeants sur dix n'ont vu l'IA modifier ni la productivité ni les effectifs de leur entreprise au cours des trois dernières années", "6 000 dirigeants aux États-Unis, au Royaume-Uni, en Allemagne et en Australie, panels interrogés de novembre 2025 à janvier 2026, réponses déclaratives", "Banque d'Angleterre, université Stanford et NBER (février 2026)"],
        ["Environ 3 % du temps de travail gagné par ceux qui utilisent un assistant IA, sans effet mesurable sur les salaires ni sur la durée travaillée deux ans après l'arrivée de ChatGPT", "25 000 salariés danois de 11 métiers exposés à l'IA, interrogés fin 2023 puis fin 2024, réponses croisées avec les registres administratifs", "Humlum et Vestergaard (NBER), version révisée de mars 2026"],
        ["95 % des organisations ne voient aucun retour de l'IA dans leur compte de résultat ; le même rapport note que 80 % des pilotes d'outils généralistes vont à leur terme, contre un quart des outils sur mesure", "Enquête et entretiens, rapport préliminaire de juillet 2025, non relu par les pairs", "MIT, projet NANDA, « The GenAI Divide » (2025)"],
        ["10 % de l'effort aux algorithmes, 20 % à la technologie et aux données, 70 % aux personnes et aux processus", "Règle d'allocation d'effort observée sur les programmes d'IA à l'échelle", 'BCG, travaux « AI at scale »'],
      ],
    },
    { type: 'p', text: "Notre lecture tient en une phrase : le chiffre d'échec le plus cité mesure la conversion du temps gagné, bien plus que l'IA elle-même. Le temps gagné existe ; il disparaît quand personne n'a décidé à quoi il sert. La page sur le <a href='/roi-ia-entreprise'>ROI de l'IA en entreprise</a> déroule cette chaîne en cinq étages, de l'adoption effective à l'effet sur le résultat, et le <a href='/calculateur-roi-ia'>calculateur de ROI</a> l'applique à vos propres chiffres." },
    {
      type: 'callout',
      title: "Les chiffres à ne plus citer dans une stratégie IA",
      text: "« 95 % des projets IA échouent » (le rapport cité dit autre chose) ; « 37 % du temps gagné repart en corrections » (on ne trouve pas ce chiffre dans l'article auquel on l'attribue) ; « +34 % de productivité chez les novices » (chiffre d'un document de travail, ramené à +15 % dans la version publiée) ; « +44 % de découvertes grâce à l'IA » (article retiré d'arXiv en mai 2025). Un chiffre faux suffit à faire perdre son crédit à une stratégie dès le premier comité.",
    },

    { type: 'h2', text: "La méthode en cinq étapes" },
    { type: 'p', text: "Nous appliquons cette méthode en mission. La voici décrite pour qu'une direction puisse la suivre seule, ou juger ce qu'elle achète. Chaque étape produit une des six composantes." },
    { type: 'h3', text: "1. Diagnostiquer : où en sommes-nous vraiment ?" },
    { type: 'p', text: "Avant de décider, regarder. Les usages qui existent déjà dans les équipes, y compris ceux qui ont démarré sur des comptes privés ; les flux de travail où le temps se perd ; les outils en place et ce qu'ils savent déjà faire ; le niveau de maturité, lu sur six axes : sécurité, données, usages, compétences, gouvernance et culture. Le format dépend de la taille et de la question posée : le <a href='/test-maturite-ia'>test de maturité IA</a> donne une première photographie en trois minutes, le <a href='/diagnostic-ia'>diagnostic IA</a>, une intervention courte, répond à la question « par où commencer », et l'<a href='/audit-ia'>audit IA</a> couvre tout le périmètre quand la direction veut l'image d'ensemble avant de débloquer des budgets." },
    { type: 'h3', text: "2. Prioriser : impact, faisabilité, et ce qu'on écarte" },
    { type: 'p', text: "Chaque gisement repéré se décrit par le volume annoncé par l'équipe, le niveau de difficulté et ce dont il dépend, puis se place selon son impact et sa faisabilité à trois mois. On commence là où le gain est fort et la mise en œuvre accessible, en général par trois chantiers, rarement plus. Chaque cas mis de côté reçoit une raison écrite : données trop pauvres, gain trop mince, risque hors de proportion, calendrier inadapté. Une stratégie qui retient tout n'a rien priorisé." },
    { type: 'h3', text: "3. Choisir le socle : un outil d'équipe, des données prêtes" },
    { type: 'p', text: "L'essentiel des usages de l'IA générative part de documents, de mails et de fichiers, bien plus que de science des données. Le socle est donc un outil d'équipe administré par l'entreprise, dont le contrat interdit de se servir de vos données pour entraîner les modèles, choisi selon l'environnement en place : Microsoft Copilot (anciennement Microsoft 365 Copilot) quand le travail se fait dans Word, Outlook et Teams, Claude ou ChatGPT en offre entreprise pour les assistants sur documents, des connecteurs vers l'ERP ou le CRM quand un cas l'exige. Pour chaque cas retenu, la donnée nécessaire doit exister, être fiable et utilisable : notre <a href='/conseil-data-ia'>conseil data et IA</a> le vérifie avant tout investissement." },
    { type: 'h3', text: "4. Poser le cadre et construire les compétences" },
    { type: 'p', text: "Une charte d'une page, signée avant la formation, fixe l'essentiel : les informations qui ne vont jamais dans un outil d'IA, la relecture humaine avant tout envoi à un tiers, la validation humaine de ce qui engage l'entreprise, un responsable pour chaque assistant partagé, un référent IA qui reçoit les signalements. La formation se construit métier par métier et prévoit les arrivées comme les départs. Deux obligations du règlement européen visent déjà toute organisation qui utilise l'IA. L'article 4, en vigueur depuis le 2 février 2025, oblige à agir pour que chaque utilisateur sache se servir de l'IA ; sa rédaction du 27 juillet 2026 en fait une obligation de moyens. L'article 50 oblige, depuis le 2 août 2026, à signaler les contenus générés. Le régime du haut risque, lui, attend le 2 décembre 2027 pour l'annexe III et le 2 août 2028 pour l'annexe I. Les pages consacrées à la <a href='/gouvernance-ia'>gouvernance de l'IA</a> et à la <a href='/charte-ia-entreprise'>charte IA d'entreprise</a> détaillent ce cadre." },
    { type: 'h3', text: "5. Écrire la feuille de route et mesurer" },
    { type: 'p', text: "Les 90 premiers jours comptent quatre jalons : la décision, la conception, la formation avec la mise en service, puis le bilan un mois plus tard. Une trajectoire sur douze mois, organisée par vagues, prend le relais. Chaque action reçoit un porteur nommé, un budget estimé, une date et une condition de réussite. Cinq indicateurs ont un point de départ relevé en séance et une cible : délai de traitement d'une demande, temps passé par tâche, part d'un flux traité sans ressaisie, usage hebdomadaire des assistants, heures libérées et ce qu'on en fait. Sans mesure, le gain se dilue dans la semaine ; mesuré mais sans emploi décidé, il se perd tout autant." },

    { type: 'h2', text: "Un exemple de stratégie IA : une PME de distribution, en 90 jours" },
    { type: 'p', text: "Un distributeur de solutions photovoltaïques, trois personnes, trois entrepôts, une gestion sur Odoo. La direction veut vendre davantage sans embaucher. Trois entretiens ont permis de décrire quatre flux (la vente, la logistique et la facturation, le développement, le pilotage) et d'y repérer douze gisements de temps. La première vague en retient trois : les demandes de prix aux transporteurs, envoyées deux semaines avant chaque livraison ; les fichiers des entrepôts convertis en fichier d'import, sans ressaisie ; les demandes entrantes transformées en lignes de devis, avec des relances pour tous les clients. Le plan remplace les comptes privés par un abonnement d'équipe, prévoit une charte signée avant la formation et la désignation d'un référent IA, et fixe des objectifs à trois mois dont le point de départ sera relevé pendant la formation d'octobre 2026. La direction a reçu ce diagnostic en septembre 2026. Le cas complet figure dans nos <a href='/etudes-de-cas-ia#photovoltaique'>études de cas</a>, avec trois autres missions, dont le déploiement par paliers d'un groupe industriel international, de son comité de direction à ses managers pilotes." },

    { type: 'h2', text: "Stratégie IA et données : ce qui doit être prêt" },
    { type: 'p', text: "La question « nos données sont-elles prêtes » a une réponse différente selon le cas d'usage, et c'est la seule bonne façon de la poser. Un assistant qui rédige des courriers à partir de trames n'a besoin que de documents à jour. Un assistant qui répond depuis le catalogue a besoin d'un catalogue tenu, avec un responsable. Un tableau de bord a besoin d'exports fiables de l'ERP, et d'un calcul de marge juste dans l'ERP : l'IA ne corrige pas une donnée fausse, elle la propage plus vite. Une stratégie IA sérieuse liste, cas par cas, la donnée nécessaire, son état et le chantier qui la rend utilisable, avant de chiffrer le gain." },

    { type: 'h2', text: "Stratégie de déploiement d'agents IA : trois stades, et une règle" },
    { type: 'p', text: "Beaucoup de stratégies IA de 2026 s'écrivent autour du mot « agent ». Trois stades se succèdent, et chacun demande quelque chose de différent. La conversation : vous posez une question, vous jugez la réponse. L'assistant : on lui ajoute des instructions, des documents et le ton de la maison, ses réponses deviennent celles de votre organisation, et vous validez toujours. L'agent : on lui donne des outils et une boucle, il agit dans vos systèmes, vérifie, corrige et recommence jusqu'au résultat ; il choisit l'étape suivante dans les limites que vous avez fixées. Un agent se justifie pour une tâche enchaînée, récurrente et volumineuse ; il se facture au compteur quand il tourne seul ; et toute décision qui engage l'entreprise, un prix, une commande, un mouvement de stock, passe par une validation humaine avant de partir. Le guide des <a href='/agents-ia-entreprise'>agents IA en entreprise</a> présente les usages possibles et leurs garde-fous." },

    { type: 'h2', text: "Les sept erreurs qui coûtent" },
    {
      type: 'ul',
      items: [
        "<strong>Partir de l'outil.</strong> « On a pris des licences, que fait-on avec ? » Une stratégie part des flux de travail, l'outil vient en troisième étape.",
        "<strong>Recommander tout.</strong> Dix chantiers en parallèle, aucun porteur : rien n'aboutit. Trois chantiers avec un nom chacun aboutissent.",
        "<strong>Compter les licences comme des usages.</strong> Une licence distribuée ne dit rien de l'usage hebdomadaire sur une tâche précise. Mesurez l'adoption effective.",
        "<strong>Oublier la destination des heures.</strong> Le temps libéré sans décision de management se dissout dans la journée. Écrivez à quoi il servira avant de le libérer.",
        "<strong>Laisser le cadre pour plus tard.</strong> Les usages nés sur des comptes privés continuent quand on les ignore. La charte se signe avant la formation.",
        "<strong>Former une fois.</strong> Les équipes tournent, les outils changent de version sans préavis. Le plan de formation prévoit les arrivées et un rituel de partage.",
        "<strong>Citer des chiffres faux.</strong> Un comité qui découvre qu'un chiffre de la stratégie est inventé ne croit plus le reste.",
      ],
    },

    { type: 'h2', text: "Qui porte la stratégie IA dans l'entreprise" },
    { type: 'p', text: "Un sponsor au comité de direction tranche l'ambition, le budget et les cas écartés. Un référent IA opérationnel, souvent un manager qui pratique déjà les outils, administre le socle, reçoit les signalements et anime un point mensuel. La direction informatique s'occupe du socle, de l'hébergement et des connecteurs, le DPO du cadre, les ressources humaines du plan de formation. Dans une PME, deux personnes suffisent à tenir trois de ces rôles, à condition de l'écrire." },

    { type: 'h2', text: "Les trente premiers jours" },
    {
      type: 'ol',
      items: [
        "<strong>Première semaine, l'état des lieux.</strong> Test de maturité, entretiens avec ceux qui font le travail au quotidien, inventaire des outils et des usages nés hors cadre, lecture par flux.",
        "<strong>Deuxième semaine, les choix.</strong> Gisements décrits et placés à trois mois, trois chantiers retenus avec un porteur, une raison écrite pour chaque cas mis de côté.",
        "<strong>Troisième semaine, l'outil et les règles.</strong> Outil d'équipe choisi et administré, charte d'une page signée, référent nommé, position arrêtée vis-à-vis du RGPD et de l'AI Act.",
        "<strong>Quatrième semaine, le plan.</strong> Quatre jalons à 90 jours, trajectoire à douze mois, budget par action, cinq indicateurs avec point de départ. Présentation au comité de direction, décisions actées.",
      ],
    },
    { type: 'p', text: "Une direction peut mener ces quatre semaines seule avec ce guide. Si elle préfère un regard extérieur, un cadrage avec son comité de direction ou une feuille de route qui engage un prestataire, c'est l'objet de notre <a href='/conseil-strategie-ia'>conseil stratégie IA</a> ; la <a href='/formation-ia-dirigeants'>formation IA pour dirigeants</a> donne le vocabulaire et les repères pour décider. Masteria, le cabinet lyonnais de Mathias Nizan, suit cette méthode dans ses missions et l'enseigne en formation." },

    { type: 'h2', text: "Sources et références" },
    {
      type: 'ul',
      items: [
        "<a href='https://eur-lex.europa.eu/eli/reg/2024/1689/oj' rel='noopener'>AI Act, règlement (UE) 2024/1689</a> : texte consolidé et dates d'application, sur EUR-Lex.",
        "<a href='https://www.nber.org/papers/w33777' rel='noopener'>Humlum et Vestergaard, « Still Waters, Rapid Currents », NBER Working Paper 33777</a>, version de mars 2026.",
        "<a href='https://mitsloan.mit.edu/' rel='noopener'>MIT, projet NANDA, « The GenAI Divide »</a>, rapport préliminaire de juillet 2025.",
        "<a href='https://www.banque-france.fr/fr/actualites/entreprises-francaises-existe-t-il-un-ecart-dadoption-de-lia' rel='noopener'>Banque de France, note sur le retard d'adoption de l'IA des entreprises françaises</a>.",
        "<a href='https://www.insee.fr/fr/statistiques/9025878' rel='noopener'>Insee, enquête 2025 sur l'usage du numérique dans les entreprises</a>.",
        "<a href='https://www.cnil.fr/fr/intelligence-artificielle' rel='noopener'>CNIL, dossier IA : recommandations aux organismes</a>.",
      ],
    },
  ],
  faq: [
    {
      q: "Quelle différence entre la stratégie IA d'une entreprise et la stratégie nationale pour l'IA ?",
      a: "La stratégie nationale pour l'intelligence artificielle est le plan public lancé par l'État français en 2018 : financement de la recherche, des entreprises et de la formation, infrastructures de calcul, positionnement européen. La stratégie IA d'une entreprise est un document interne qui fixe ses usages, ses outils, ses règles, ses compétences, son budget et sa mesure. La première n'engage pas votre organisation ; la seconde est la vôtre.",
    },
    {
      q: "Une stratégie IA doit-elle être écrite ?",
      a: "Oui, et courte. Dix pages suffisent : l'ambition et le périmètre sur une page, les cas d'usage classés avec ceux qu'on écarte, le socle nommé, le programme de formation, une charte d'une page, une feuille de route avec cinq indicateurs. Ce qui n'est pas écrit n'est pas décidé, et un comité ne peut pas arbitrer sur un exposé oral.",
    },
    {
      q: "Combien de cas d'usage retenir dans une première vague ?",
      a: "Trois, avec un porteur chacun, pris parmi les cas à fort impact et à forte faisabilité. Les autres attendent le bilan du premier mois, avec la raison de leur report écrite noir sur blanc. Dix chantiers lancés en même temps sans porteur nommé n'aboutissent pas.",
    },
    {
      q: "Faut-il une charte IA avant la stratégie, ou l'inverse ?",
      a: "La charte fait partie de la stratégie, à l'étape du cadre, et elle se signe avant la formation des équipes. Quand des usages existent déjà sur des comptes privés, situation la plus courante, la charte peut passer en premier : elle protège les données de l'entreprise pendant que la stratégie s'écrit.",
    },
    {
      q: "Quel budget prévoir pour une stratégie IA ?",
      a: "Quatre postes : les licences du socle, par poste et par mois ; la conception des assistants ou des automatisations retenus ; la formation par métier, finançable par votre OPCO selon les règles de votre branche ; le temps interne des porteurs, rarement compté et pourtant décisif. Les missions de conseil, elles, ne sont pas finançables par votre OPCO. Les ordres de grandeur de chaque poste figurent sur la page consacrée au prix d'un projet IA.",
    },
    {
      q: "Une stratégie IA doit-elle prévoir des agents ?",
      a: "Seulement pour une tâche enchaînée, récurrente et volumineuse, une fois les assistants en usage. Un agent agit dans vos systèmes et se facture au compteur quand il tourne seul ; toute décision qui engage l'entreprise reste soumise à l'accord d'une personne. La plupart des premières vagues se font avec des assistants sur documents, et c'est déjà là que le temps se gagne.",
    },
    {
      q: "Comment savoir si la stratégie IA fonctionne ?",
      a: "Par cinq indicateurs relevés avant la formation, revus un mois plus tard puis chaque mois : usage hebdomadaire sur une tâche identifiée, temps par tâche, part d'un flux traité sans reprise, heures libérées et leur emploi, effet sur un poste du compte de résultat choisi avant le déploiement. Si personne ne sait dire à quoi servent les heures libérées, le compte de résultat ne bougera pas non plus.",
    },
  ],
  cta: {
    title: "Construire votre stratégie IA avec votre comité de direction",
    desc: "Notre mission de conseil stratégie IA suit les cinq étapes de ce guide avec votre direction : état des lieux, choix des chantiers, cadre d'usage, plan des 90 premiers jours et trajectoire sur l'année, construits sur vos flux de travail.",
    buttons: [
      { label: "Découvrir le conseil stratégie IA", href: '/conseil-strategie-ia', primary: true },
      { label: "Faire le test de maturité IA", href: '/test-maturite-ia' },
    ],
  },
  apres: {
    titre: "Passer de la feuille de route aux premiers outils",
    texte: "Une stratégie se juge au premier chantier livré. Une fois les trois cas retenus, Masteria peut construire les assistants ou les agents qu'ils demandent, les relier à vos logiciels, puis former chaque équipe sur son propre flux. Trente minutes d'échange suffisent pour vérifier par lequel commencer.",
  },
  extraJsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': 'https://www.master-ia.fr/blog/strategie-ia-entreprise-guide#methode',
      name: "Construire une stratégie IA d'entreprise en cinq étapes",
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Diagnostiquer', description: "Usages existants, flux de travail, outils en place, maturité lue sur six axes." },
        { '@type': 'ListItem', position: 2, name: 'Prioriser', description: "Cas rangés par impact attendu et par faisabilité à trois mois, trois chantiers avec porteur, raison écrite pour chaque cas écarté." },
        { '@type': 'ListItem', position: 3, name: 'Choisir le socle', description: "Outil d'équipe administré par l'entreprise, données nécessaires vérifiées cas par cas." },
        { '@type': 'ListItem', position: 4, name: 'Poser le cadre et construire les compétences', description: "Charte d'une page, référent IA, formation métier par métier, position vis-à-vis du RGPD et de l'AI Act." },
        { '@type': 'ListItem', position: 5, name: 'Écrire la feuille de route et mesurer', description: "Quatre jalons à 90 jours, trajectoire à douze mois, cinq indicateurs avec point de départ et cible." },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': 'https://www.master-ia.fr/blog/strategie-ia-entreprise-guide#lexique',
      name: "Lexique de la stratégie IA d'entreprise",
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: "Stratégie IA d'entreprise", description: "Document interne qui fixe où, comment et dans quel ordre une organisation déploie l'intelligence artificielle : usages retenus et écartés, données et outils, règles, compétences, budget, porteurs, indicateurs, calendrier." },
        { '@type': 'DefinedTerm', name: "Stratégie nationale pour l'intelligence artificielle", description: "Plan public de l'État français lancé en 2018 : recherche, financement des entreprises, formation, infrastructures de calcul. Sans portée directe sur une organisation privée." },
        { '@type': 'DefinedTerm', name: 'Feuille de route IA', description: "Suite datée des chantiers retenus, avec un porteur, un budget, une échéance et une condition de réussite par action ; quatre jalons à 90 jours, trajectoire à douze mois." },
        { '@type': 'DefinedTerm', name: "Matrice impact et faisabilité", description: "Positionnement de chaque cas d'usage selon son impact métier et sa faisabilité à trois mois ; on commence par les cas à fort impact et forte faisabilité." },
        { '@type': 'DefinedTerm', name: 'Chaîne de conversion', description: "Les cinq étages entre un outil déployé et un effet sur le résultat : adoption effective, gain unitaire net, capacité libérée, capacité convertie, effet sur le compte de résultat. Le point de fuite est le quatrième." },
        { '@type': 'DefinedTerm', name: 'Littératie IA', description: "Maîtrise de l'IA que l'article 4 de l'AI Act, règlement (UE) 2024/1689, impose aux fournisseurs et aux déployeurs de développer chez leur personnel. Applicable depuis le 2 février 2025 ; depuis le 27 juillet 2026, la rédaction issue du règlement (UE) 2026/1744 en fait une obligation de moyens, sans niveau individuel à garantir." },
        { '@type': 'DefinedTerm', name: 'Agent IA', description: "Système qui reçoit un objectif, agit dans des outils, vérifie et recommence jusqu'au résultat, dans des limites fixées ; se justifie pour une tâche enchaînée, récurrente et volumineuse." },
      ],
    },
  ],
}
