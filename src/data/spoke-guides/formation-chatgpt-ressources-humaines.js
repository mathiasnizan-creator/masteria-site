// Contenu propre a /formation-chatgpt-ressources-humaines (page propre), ecrit le 7 octobre 2026. Rendu par SpokePage.
// Faits ChatGPT : fiche de faits du 07/10/2026 (section OpenAI), comparatifs du 03/10/2026 (comparisons.js).
// Faits juridiques repris des sources du guide Claude RH verifie le 05/10/2026 : AI Act annexe III point 4 et
// article 26, omnibus 2026/1744 (haut risque au 2 decembre 2027), RGPD articles 9 et 22, CNIL controles 2026.
export default {
  slug: 'formation-chatgpt-ressources-humaines',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation ChatGPT RH : recrutement, intégration et écrits du service",
  metaTitle: "Formation ChatGPT RH · ressources humaines | Masteria",
  metaDesc: "Formation ChatGPT RH : annonces, livret d'accueil, réponses aux managers sur vos accords, tri de candidatures tenu hors de l'outil. 2 jours, Qualiopi.",
  resume: "La formation ChatGPT RH apprend à une équipe ressources humaines à confier à ChatGPT les écrits du service (annonces de recrutement, livret d'accueil, notes, réponses aux managers) tout en gardant hors de l'outil les données sensibles et les décisions qui touchent une personne. Deux journées de sept heures, sur site ou en visioconférence, réunissent jusqu'à douze membres du service, ou une personne en individuel, moyennant 1 980 € HT chaque jour. Masteria, dont la certification Qualiopi vise ses actions de formation, monte avec vous le dossier destiné à votre OPCO.",
  enBref: [
    { label: 'Formation', value: "ChatGPT pour les ressources humaines : recrutement, intégration, politiques internes, campagne d'entretiens et communication RH" },
    { label: 'Durée', value: "Deux journées de sept heures, faciles à caler avant une vague de recrutements ou la campagne d'entretiens annuels" },
    { label: 'Formats', value: "Chez vous ou en classe à distance, de deux à douze participants ; un responsable RH peut aussi la suivre seul" },
    { label: 'Tarif', value: "Chaque journée : 1 980 € HT, avec un groupe interne ou avec une seule personne" },
    { label: 'Financement', value: "Qualiopi obtenu pour les actions de formation ; l'OPCO de l'entreprise étudie la demande avec les règles de sa branche" },
    { label: 'Prérequis', value: "Aucune compétence technique ; un compte ChatGPT d'entreprise de préférence, vérifié avec vous avant la session" },
  ],
  prerequis: "Aucune compétence technique ; un compte ChatGPT d'entreprise de préférence",
  intro: "Un service RH manie deux familles de documents : ceux qu'il diffuse (offres, livret d'accueil, notes de service) et ceux qu'il protège (paie, arrêts maladie, dossiers disciplinaires, candidatures). ChatGPT rend de grands services sur les premiers et n'a aucune raison de voir les seconds. Au 7 octobre 2026, il rédige dans Word grâce à son extension, garde dans un projet les accords d'entreprise et le règlement intérieur pour répondre aux managers, et range une procédure du service dans une compétence partagée. La formation applique ces fonctions à vos dossiers en cours. Elle trace aussi la limite que le droit pose déjà : le tri des candidatures, que l'AI Act classe parmi les usages à haut risque, et toute décision automatisée visant un salarié.",
  audience: [
    {
      title: "Directeurs et responsables des ressources humaines",
      desc: "Vous décidez des usages admis dans le service et vous en répondez devant les élus du personnel comme devant les salariés. Vous apprenez à écrire ces règles, à choisir l'offre ChatGPT qui les respecte et à contrôler ce que l'équipe produit.",
    },
    {
      title: "Chargés de recrutement et d'intégration",
      desc: "Offres, messages aux candidats, guides d'entretien, livret d'accueil : vous apprenez à les obtenir au format de la maison, en laissant la lecture et le choix des candidatures à une personne.",
    },
    {
      title: "Gestionnaires RH, paie et formation",
      desc: "Managers et salariés vous sollicitent du matin au soir. Vous apprenez à interroger un projet qui contient vos accords et vos procédures, en exigeant l'article cité, sans y verser de données de paie nominatives.",
    },
  ],
  useCases: [
    {
      icon: '📝',
      title: "Annonces au format de la maison",
      desc: "Une compétence applique votre structure d'annonce, vos mentions et votre ton à chaque poste ouvert.",
    },
    {
      icon: '📚',
      title: "Livret d'accueil et première semaine",
      desc: "Le livret se rédige à partir de vos procédures, puis se décline en messages pour les premiers jours du nouvel arrivant.",
    },
    {
      icon: '⚖️',
      title: "Réponses aux managers, article à l'appui",
      desc: "Un projet qui réunit accords, règlement intérieur et convention collective répond en citant le texte appliqué.",
    },
    {
      icon: '💬',
      title: "Entretiens de départ lus sans nom",
      desc: "Des comptes rendus anonymisés font ressortir les motifs de départ qui reviennent trimestre après trimestre.",
    },
    {
      icon: '📄',
      title: "Notes de service écrites dans Word",
      desc: "ChatGPT pour Word écrit la note dans votre modèle et soigne sa mise en page ; son signataire la relit.",
    },
    {
      icon: '🛡️',
      title: "Candidatures lues par le recruteur",
      desc: "La formation montre où s'arrête l'outil : il prépare le poste et l'entretien, le recruteur lit les dossiers et choisit.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Tracer la frontière entre les pièces que ChatGPT lira et celles qui lui resteront fermées",
      duration: "1h30",
      description: "Classer les documents du service avant d'en déposer un seul.",
      items: [
        "Compte personnel ou espace Business : entraînement des modèles, mémoire, durée de conservation des conversations",
        "Données de santé (catégorie particulière, article 9 du RGPD), sanctions disciplinaires, éléments de paie : la règle de minimisation",
        "Anonymiser un compte rendu d'entretien sans lui faire perdre son sens",
        "Hébergement selon l'offre : stockage au repos en Europe sur Business, calcul des réponses en Europe possible sur Enterprise",
      ],
      exercise: "Vous répartissez vingt documents types du service entre trois colonnes : admis dans ChatGPT, admis après anonymisation, refusés.",
    },
    {
      day: 1,
      title: "Module 2 · Rédiger les offres et les messages aux candidats",
      duration: "2h",
      description: "Obtenir dès le premier jet une annonce juste, lisible et conforme.",
      items: [
        "Fiche de poste, compétences attendues, fourchette de salaire : ce qu'on fournit à ChatGPT",
        "Vocabulaire neutre, intitulé ouvert aux femmes comme aux hommes, aucune exigence étrangère au poste",
        "Accusé de réception, invitation à l'entretien, refus formulé avec égards",
        "Guide d'entretien structuré à partir des compétences du poste",
      ],
      exercise: "Vous écrivez l'annonce d'un poste à pourvoir ce trimestre et le guide d'entretien qui l'accompagne.",
    },
    {
      day: 1,
      title: "Module 3 · Construire le projet des politiques RH",
      duration: "2h",
      description: "Répondre aux managers à partir de vos textes, en citant l'article.",
      items: [
        "Accords d'entreprise, règlement intérieur, convention collective et procédures réunis dans un projet (jusqu'à 40 fichiers sur Business)",
        "Instructions : citer l'article, dire quand aucun texte ne répond, orienter vers un gestionnaire pour un cas individuel",
        "En mode réflexion, ChatGPT garde 256 000 tokens en vue (un token vaut un fragment de mot), soit quelque 320 pages selon l'éditeur ; un accord plus volumineux se découpe",
        "Questions pièges pour vérifier que le projet n'invente rien",
      ],
      exercise: "Vous posez au projet dix questions fréquentes des managers et retrouvez chaque article cité dans le texte signé.",
    },
    {
      day: 1,
      title: "Module 4 · Préparer l'arrivée d'un nouveau salarié",
      duration: "1h30",
      description: "Produire un livret d'accueil et un programme de première semaine qui parlent au salarié.",
      items: [
        "Livret rédigé à partir de vos procédures, de votre organigramme et de vos usages",
        "Messages échelonnés du premier jour au terme de la période d'essai, à programmer dans vos outils",
        "Questionnaire de compréhension des consignes de sécurité et des outils internes",
        "Mise en forme dans le modèle du service avec ChatGPT pour Word",
      ],
      exercise: "Vous produisez le livret d'accueil d'un poste type et le déroulé de sa première semaine.",
    },
    {
      day: 2,
      title: "Module 5 · Outiller la campagne d'entretiens sans juger à la place du manager",
      duration: "1h30",
      description: "Préparer la campagne sans confier à l'outil une appréciation sur une personne.",
      items: [
        "Trame d'entretien et de compte rendu par famille de métiers",
        "Kit des managers : questions ouvertes, reformulation, objectifs mesurables",
        "Synthèse de campagne sur des comptes rendus anonymisés : besoins de formation, souhaits de mobilité",
        "Noter la performance d'un salarié par l'IA : un usage que l'annexe III range à haut risque, avec des obligations attendues le 2 décembre 2027",
      ],
      exercise: "Vous écrivez la trame d'entretien annuel d'une famille de métiers et le message qui l'accompagne pour les managers.",
    },
    {
      day: 2,
      title: "Module 6 · Écrire les notes, les campagnes RH et les réponses sensibles",
      duration: "2h",
      description: "Gagner en clarté sur les messages qui engagent l'employeur.",
      items: [
        "Note de service et annonce d'une campagne : mutuelle, élections professionnelles, télétravail",
        "Réponse écrite à la réclamation d'un salarié, validée par son signataire",
        "Version simplifiée d'un accord pour les équipes, confrontée au texte signé",
        "Les écrits qui exigent toujours l'avis du juriste",
      ],
      exercise: "Vous rédigez avec ChatGPT pour Word la note qui annonce une évolution de l'accord télétravail, puis la confrontez à l'accord.",
    },
    {
      day: 2,
      title: "Module 7 · Ranger les procédures du service dans des compétences",
      duration: "2h",
      description: "Donner à chaque membre de l'équipe RH la même méthode de travail.",
      items: [
        "Compétence créée en conversation avec ChatGPT, depuis l'onglet Compétences du menu Plugins",
        "Annonce, convocation, attestation : les formats qui reviennent chaque semaine",
        "GPTs du service RH : bascule vers un plugin à prévoir avant leur arrêt, fixé au 11 décembre 2026",
        "Plugins et connecteurs que l'administrateur autorise depuis la console, une gestion ouverte le 1er octobre 2026",
      ],
      exercise: "Vous transformez votre modèle d'annonce en compétence et l'éprouvez sur trois postes différents.",
    },
    {
      day: 2,
      title: "Module 8 · Écrire la charte IA du service et son plan à un mois",
      duration: "1h30",
      description: "Mettre par écrit les usages admis, les usages proscrits et les personnes qui valident.",
      items: [
        "Tri ou notation des candidatures, décisions individuelles : proscrits, article 22 du RGPD à l'appui",
        "Former les salariés à l'IA, comme l'AI Act le demande depuis février 2025, et tenir le registre des sessions",
        "Présentation de la charte au CSE, que l'entreprise de cinquante salariés et plus consulte avant d'introduire une technologie nouvelle",
        "Un écrit RH par personne, un référent, un point à trente jours",
      ],
      exercise: "Vous fixez par écrit ce que le service RH autorise et interdit dans ChatGPT, liste des documents refusés comprise.",
    },
  ],
  objectives: [
    "Le participant sait classer un document RH entre admis, admis après anonymisation et refusé, et justifier son choix.",
    "Le participant sait rédiger avec ChatGPT une annonce au vocabulaire neutre et le guide d'entretien correspondant.",
    "Le participant sait interroger un projet de politiques RH et retrouver dans le texte source l'article cité.",
    "Le participant sait produire un livret d'accueil et le déroulé de la première semaine d'un nouvel arrivant.",
    "Le participant sait convertir un modèle du service en compétence ChatGPT et l'éprouver sur trois cas.",
    "Le participant sait expliquer pourquoi la sélection des candidats et l'appréciation d'un salarié restent hors de ChatGPT.",
  ],
  tarifs: {
    titre: "Le budget d'un service RH pour ces deux jours",
    paras: [
      "Le service paie chaque journée 1 980 € HT, que deux, cinq ou douze collègues y assistent, et le même montant pour un participant formé seul. Un service RH de cinq personnes (la DRH, deux chargées de recrutement, une gestionnaire paie et un responsable formation) règle 3 960 € HT pour l'ensemble du parcours, soit 792 € HT par tête.",
      "En amont, le formateur étudie avec vous une annonce récente, votre livret d'accueil et la liste des accords en vigueur : les ateliers se construisent sur ces pièces. Votre responsable formation connaît la suite : Masteria fournit programme, convention puis attestations, pièces que demande l'OPCO, lequel tranche selon les critères de la branche et les fonds disponibles.",
    ],
  },
  cta: {
    milieu: "Dites-nous quel recrutement ou quelle campagne vous attend ce trimestre : les ateliers partiront de là.",
    fin: {
      titre: "Construisons la session autour des dossiers du service RH",
      texte: "Indiquez le nombre de personnes, l'abonnement ChatGPT souscrit par l'entreprise et les écrits qui occupent le plus l'équipe : annonces, livret d'accueil, notes, réponses aux managers. Nous répondons avec un programme taillé pour le service et des dates.",
    },
  },
  apres: {
    titre: "Après la formation, un assistant RH bâti sur vos accords",
    texte: "Masteria peut ensuite construire pour le service un outil durable : un plugin ChatGPT nourri des accords et du règlement intérieur, qui renseigne les managers en citant l'article et transmet tout cas individuel à un gestionnaire ; ou une compétence partagée qui met annonces et convocations au format maison. Sources, droits et questions interdites se décident au cadrage, puis l'outil affronte une série de questions pièges avant son ouverture. Ce chantier de conseil et de développement donne lieu à un devis distinct, pas finançable par votre OPCO, établi au forfait une fois le besoin cadré avec vous.",
  },
  liensAssocies: [
    { label: "Formation IA pour les ressources humaines, tous outils", href: '/formation-ia-ressources-humaines' },
    { label: "Formation Claude pour les équipes RH", href: '/formation-claude-ressources-humaines' },
    { label: "Formation Copilot pour les RH", href: '/formation-copilot-rh' },
    { label: "La DRH face à l'IA : bâtir le plan de compétences", href: '/formation-ia-drh-plan-competences' },
    { label: "AI Act en RH : recrutement et évaluation des salariés", href: '/blog/ai-act-rh-conformite-recrutement-evaluation' },
  ],
  faq: [
    {
      q: "Peut-on utiliser ChatGPT pour trier des candidatures ?",
      a: "Nous le déconseillons, et la formation ne l'enseigne pas. Un outil qui filtre ou note des candidats relève, pour l'AI Act, du haut risque (annexe III, point 4), avec des obligations repoussées au 2 décembre 2027 par l'omnibus numérique. Le RGPD protège déjà, par son article 22, contre une décision fondée sur un traitement automatisé seul, et le recrutement figure parmi les thèmes que la CNIL contrôle en priorité cette année. ChatGPT sert avant la sélection (annonce, guide d'entretien) et après (messages aux candidats) ; les dossiers, le recruteur les lit lui-même.",
    },
    {
      q: "Quelles données RH peut-on confier à ChatGPT ?",
      a: "Celles qui ne désignent personne, et seulement sur une offre d'entreprise. Les offres d'équipe (Business, Enterprise, Edu) tiennent d'office vos conversations hors de l'entraînement des modèles ; les offres individuelles (Free, Go, Plus, Pro) les y exposent, sauf désactivation du réglage par l'abonné. Les données de santé, la paie nominative, les procédures disciplinaires et les candidatures restent dehors. Un compte rendu d'entretien n'entre qu'une fois anonymisé. La formation traduit ces principes en une liste de documents que chaque membre du service peut consulter.",
    },
    {
      q: "ChatGPT peut-il répondre aux questions des managers sur nos accords ?",
      a: "Oui, si les textes sont dans un projet et que les instructions l'obligent à citer l'article appliqué. Sur Business, chaque projet reçoit jusqu'à 40 fichiers et se partage avec cent collègues au plus. En mode réflexion, ChatGPT lit environ 320 pages d'un tenant selon OpenAI ; un accord plus long se découpe. La réponse reste une aide : pour un cas individuel (rupture, sanction, inaptitude), l'instruction renvoie vers un gestionnaire. En atelier, chaque réponse est confrontée au texte signé.",
    },
    {
      q: "Le CSE doit-il être associé au déploiement de ChatGPT chez les RH ?",
      a: "Le Code du travail prévoit, à partir de cinquante salariés, une consultation du CSE quand l'employeur introduit une nouvelle technologie ; installer un assistant d'IA dans le travail quotidien peut entrer dans ce cas. Pour un système classé à haut risque et employé au travail, l'AI Act exigera en plus, dès le 2 décembre 2027, que l'employeur prévienne les élus du personnel et les salariés concernés avant de le mettre en service (article 26). La charte d'usage écrite au module 8 sert de support à cette présentation.",
    },
    {
      q: "Que deviennent les GPTs créés par le service RH ?",
      a: "Leur service s'interrompt le 11 décembre 2026, date de retrait choisie par OpenAI pour l'ensemble des offres ; seuls certains espaces Enterprise bénéficient d'un report au 11 février 2027. Chacun se convertit en plugin : les consignes deviennent une compétence, les documents joints rejoignent les fichiers de référence. Dans l'opération, les actions personnalisées disparaissent, et le plugin naît privé : il faudra le partager de nouveau. Un GPT de rédaction d'annonces ou de réponses aux salariés se reconstruit en atelier, puis se teste avant d'être rouvert à l'équipe.",
    },
    {
      q: "ChatGPT peut-il rédiger une annonce non discriminante ?",
      a: "Il y aide, à condition de recevoir la consigne et d'être relu. On lui fournit la fiche de poste, les compétences attendues et la rémunération, puis on exige un vocabulaire neutre, un intitulé ouvert aux deux sexes et aucune exigence sans lien avec le poste, comme l'âge ou la situation familiale. Le code du travail proscrit ces mentions dans une offre d'emploi. ChatGPT peut reproduire des biais présents dans les textes qui l'ont nourri : une personne du service relit toujours l'annonce avant publication.",
    },
    {
      q: "Comment financer une formation ChatGPT RH ?",
      a: "Le service RH connaît la démarche : l'OPCO de la branche examine la demande d'après ses critères et les fonds encore disponibles, à condition que l'organisme soit certifié Qualiopi, catégorie actions de formation, comme Masteria l'est. Le tarif ne varie pas : chaque journée vaut 1 980 € HT, qu'elle réunisse un groupe interne de douze au plus ou un participant seul. Nous vous remettons programme, convention puis attestations. Pour une filiale genevoise ou bruxelloise, faute d'OPCO, le devis s'établit en euros HT.",
    },
  ],
}
