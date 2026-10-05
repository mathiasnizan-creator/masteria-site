// Contenu propre à /formation-claude-communication (guide terrain, mode page propre). Rendu par SpokePage.
// Fonctions de Claude vérifiées sur support.claude.com, claude.com et anthropic.com le 5 octobre 2026.
// Article 50 de l'AI Act vérifié sur EUR-Lex et dans les lignes directrices de la Commission du 20 juillet 2026 ;
// filigrane des textes de Claude : annonce d'Anthropic du 14 août 2026 ; revue et panorama de presse : lexique du CFC.
export default {
  slug: 'formation-claude-communication',
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  pagePropre: true,
  auteur: true,
  metaDesc: "La formation Claude pour la communication : dossiers de presse lus en entier, voix de marque, kit de crise, filigrane et article 50 de l'AI Act.",
  resume: "La formation Claude pour la communication de Masteria tient en deux journées, 14 heures en tout, pour un groupe intra de douze personnes au plus ou pour un seul participant, chez vous ou en classe virtuelle. Directions de la communication, relations presse et communication interne y travaillent sur leurs propres dossiers. Comptez 1 980 € HT par journée. Certifié Qualiopi, Masteria vous ouvre l'accès au financement de l'OPCO qui couvre votre branche.",
  intro: "Une direction de la communication se demande d'abord si un texte préparé avec l'IA peut sortir sous sa signature. Claude change la préparation de ce texte, parce qu'il lit d'un seul tenant le rapport qui met l'entreprise en cause, la presse qui l'a repris et vos communiqués des dernières années. Ce guide suit une mise en cause publique depuis la lecture du dossier jusqu'à la validation, puis précise ce que le filigrane de Claude et l'article 50 de l'AI Act changent pour vos publications.",
  enBref: [
    { label: 'Formation', value: "Claude pour les directions de la communication, les relations presse et la communication interne" },
    { label: 'Durée', value: "Deux journées de 7 heures ; le second jour, une mise en cause jouée en temps limité" },
    { label: 'Formats', value: "Intra pour un groupe de douze au plus, ou une personne en individuel ; sur site ou en visioconférence" },
    { label: 'Tarif', value: "Une journée : 1 980 € HT, que la salle compte une ou douze personnes" },
    { label: 'Financement', value: "Qualiopi : votre OPCO instruit la demande selon les règles de sa branche, sur un dossier préparé avec nous" },
    { label: 'Prérequis', value: "Un compte Claude payant par participant, Team de préférence, votre charte et trois communiqués récents" },
  ],
  guide: {
    kicker: "Guide terrain",
    h2: "Claude prend connaissance de tout le dossier avant d'écrire, et votre relecture de fond décide de ce qui paraît",
    lead: "Une prise de parole se joue sur les faits : la page du rapport que personne n'a ouverte, la formule que le directeur général avait employée en 2024, le chiffre qu'un concurrent conteste depuis un an. Claude peut recevoir tout ce dossier dans une seule conversation. Le risque change alors de place. Un texte bien informé et bien tourné invite à une relecture rapide, alors que chaque fait doit y être pointé. Depuis le 2 août 2026, cette relecture a aussi une portée juridique : avec la responsabilité éditoriale, elle dispense de signaler au public un texte d'intérêt public rédigé avec l'IA.",
    sections: [
      {
        h3: "Le rapport, la presse et vos archives tiennent dans la même conversation",
        paras: [
          "Un modèle de langage ne voit que ce que contient sa fenêtre de contexte, la mémoire de travail de la conversation. Elle se compte en tokens, ces morceaux de mots que le modèle traite un à un, et grimpe à un million avec les derniers modèles de Claude, sur toute offre payante. Anthropic compte environ 500 pages de texte pour 200 000 tokens. Un rapport de 160 pages, quelques dizaines d'articles et trois années de communiqués entrent donc ensemble dans l'analyse.",
          "Cette lecture complète permet trois vérifications que l'équipe n'a d'ordinaire pas le temps de faire. Claude cite la page exacte du rapport à l'appui de chaque affirmation. Il compare ce que les journalistes ont retenu avec ce que le rapport écrit. Il retrouve dans vos archives la position que l'entreprise a déjà prise sur le même sujet, avec sa date, pour que la parole d'aujourd'hui ne contredise pas celle d'hier.",
          "L'endroit où vous déposez les documents compte. Dans la conversation, ils entrent dans la fenêtre de contexte, dans la limite de sa taille. Dans un projet, la base de connaissances passe en mode RAG dès qu'elle approche cette limite : Claude y interroge la base et ne charge que les extraits qui répondent à la demande, ce qui étend sa capacité jusqu'à dix fois. Rangez dans le projet ce qui sert à chaque prise de parole, et déposez dans la conversation le dossier du jour, qui doit être lu en entier.",
          "Quand une conversation approche malgré tout de la limite, Claude condense les échanges les plus anciens pour poursuivre, si l'exécution de code est active dans vos réglages, et l'historique complet reste consultable. Pour une comparaison ligne à ligne entre des articles et un rapport, préférez un dossier qui tient dans la fenêtre : une revue abondante se découpe par semaine ou par thème.",
        ],
      },
      {
        h3: "La voix de la maison se range dans un projet partagé et dans une compétence",
        paras: [
          "Un projet rassemble, pour toutes les conversations qu'on y ouvre, des consignes permanentes et une base de documents. La direction de la communication y range sa charte éditoriale, ses communiqués validés, les biographies des porte-parole et le lexique de la marque. Les consignes fixent le reste : vouvoiement, longueur d'un chapeau, écriture des dates et des chiffres, formules que la direction a bannies.",
          "Sur Team et Enterprise, le partage d'un projet distingue deux droits. La consultation permet de lire la base et les consignes et de discuter dans le projet, sans rien y modifier. La modification permet de changer les consignes et la base, et de gérer les membres. Donnez la consultation à l'équipe et réservez la modification à la personne qui tient les éléments de langage : la version validée ne change que sur sa décision.",
          "Le ton se décrit dans une compétence (Skill, en anglais), un dossier d'instructions que Claude ouvre de lui-même dès qu'une demande s'y rapporte. Le fichier SKILL.md commence par un nom et par une description limitée à 200 caractères, que Claude lit pour décider s'il s'en sert, par exemple « communiqués de presse, réponses aux journalistes et tribunes signées par la direction ». Le corps du fichier porte les règles de la charte et deux textes validés en exemple.",
          "Sur Team et Enterprise, vous partagez une compétence avec des collègues en lecture seule, et chacun reçoit vos mises à jour. Vous pouvez aussi la publier pour toute l'organisation, après relecture si l'administrateur l'exige. Elle s'applique jusque dans les compléments de Claude pour Word et pour Outlook. D'après l'annonce d'Anthropic du 22 septembre 2026, Opus 5.5 met l'essentiel en tête, recourt moins au jargon et respecte les consignes de rédaction fournies : une compétence écrite avec soin les lui donne une fois pour toutes.",
        ],
        list: [
          "Une description qui reprend les mots de vos demandes, pour que la compétence se déclenche au bon moment.",
          "Les règles de forme de la charte, recopiées sans les résumer.",
          "Le vocabulaire que la marque proscrit, chaque terme accompagné de son remplaçant.",
          "Deux textes signés par la direction, qui montrent le niveau attendu.",
        ],
      },
      {
        h3: "Le filigrane de Claude signale son passage ; la mention au public se décide chez vous",
        paras: [
          "Afin de respecter l'AI Act, Anthropic glisse un filigrane invisible dans tout texte écrit par ses modèles sortis après le 2 août 2026, dont Opus 5.5 et Fable 5.1. Le procédé agit sur le choix entre des mots équivalents, au moment où le modèle écrit. Il n'ajoute aucun caractère caché, ne change ni le sens ni la qualité du texte et ne contient aucune information sur l'utilisateur, son organisation ou sa conversation (Anthropic, 14 août 2026).",
          "Plusieurs conséquences touchent une équipe communication. Une API de détection (une interface qui teste un texte), en préversion privée, est ouverte aux régulateurs, aux médias, aux vérificateurs de faits et aux chercheurs, et la détection gagne en sûreté à mesure que la part écrite par Claude grandit. Une retouche légère laisse le filigrane en place, alors qu'une réécriture complète l'efface. Une traduction faite par Claude le porte aussi, puisque chaque mot y est choisi par le modèle. Les fichiers .png, .jpg ou .svg que Claude produit reçoivent de leur côté un certificat de contenu C2PA, une note signée glissée dans leurs métadonnées.",
          "Le filigrane répond à une obligation du fournisseur. La mention au public relève de l'organisation qui utilise l'outil, que le règlement appelle le déployeur, et l'article 50 la limite à un cas : un texte que l'IA a rédigé ou retouché et qui paraît dans le but d'éclairer le public sur une question d'intérêt public. Publiées le 20 juillet 2026, les lignes directrices de la Commission européenne détaillent chacun de ces termes. Un texte publié est accessible à un large public ; les communications internes, comme une publication sur l'intranet, en sont exclues. L'intérêt public couvre notamment la santé, la sécurité des consommateurs, l'environnement et les évolutions économiques ou financières. Une publicité ou une description de produit sort du champ, sauf si elle avance une allégation de santé, de sécurité ou de durabilité.",
          "La mention tombe si deux conditions sont réunies : un humain a relu le texte ou une rédaction l'a contrôlé, et une personne, physique ou morale, en assume la publication sur le plan éditorial. La Commission place la barre haut. La relecture examine le fond et revient à des personnes compétentes sur le sujet ; vérifier les faits en est le minimum. Une correction d'orthographe, une charte qui dort dans un dossier ou une validation de principe ne suffisent pas. Le nom ou la fonction du responsable éditorial devrait figurer dans un endroit facile à trouver, comme les mentions légales du site.",
        ],
      },
      {
        h3: "Le droit d'auteur joue dans les deux sens, sur ce que vous donnez à Claude et sur ce qu'il vous rend",
        paras: [
          "Le CFC (Centre français d'exploitation du droit de copie) distingue deux objets que le langage courant confond. La revue de presse, exception que le Code de la propriété intellectuelle prévoit à son article L122-5, est une rubrique journalistique : un organe de presse y commente et compare des articles de plusieurs journaux sur un même thème. Le panorama de presse, la sélection d'articles qu'une entreprise adresse à une liste de salariés, demande l'autorisation du CFC. Une revue interne qui joint les articles relève du panorama, que Claude l'ait préparée ou non.",
          "Dans l'autre sens, les conditions commerciales d'Anthropic, qui régissent Team, Enterprise et l'API, prévoient que le client possède les contenus produits et lui cèdent les droits qu'Anthropic pourrait y détenir. Anthropic s'engage aussi à défendre le client contre un tiers qui reprocherait à ces contenus de porter atteinte à sa propriété intellectuelle, pour un usage payant et conforme aux conditions.",
          "Cette garantie a des limites écrites. Elle ne couvre ni les modifications apportées par le client, ni les données qu'il a lui-même fournies, ni l'usage d'un contenu dont il sait qu'il enfreint les droits d'autrui. Un communiqué qui reprend de longs passages d'un article collé dans la conversation reste donc sous votre responsabilité. Anthropic précise enfin que son filigrane ne dit rien de la propriété ni de la paternité d'un texte, et ne modifie pas les droits de l'utilisateur.",
        ],
      },
    ],
    table: {
      caption: "Les écrits que produit un service de communication, leur préparation avec Claude et le point à surveiller",
      headers: ["Écrit", "Préparation avec Claude", "Point à surveiller"],
      rows: [
        ["Note de lecture d'un rapport qui vous met en cause", "Conversation qui reçoit le rapport entier, numéros de page exigés", "Ouvrir chaque page citée avant de diffuser la note"],
        ["Note de veille du lundi", "Tâche planifiée qui lit le dossier de coupures relié par un connecteur", "Joindre les articles en fait un panorama, soumis à l'autorisation du CFC"],
        ["Communiqué de presse", "Projet de la direction et compétence « communiqué »", "Sujet d'intérêt public : relecture de fond et responsable éditorial nommé"],
        ["Questions-réponses de crise", "Conversation limitée à la fiche de faits validée", "Une réponse absente de la fiche reste vide, avec le service qui détient l'information"],
        ["Lettre aux salariés sur l'intranet", "Compétence de communication interne", "Hors champ de l'article 50, mais chaque fait se vérifie comme ailleurs"],
        ["Version anglaise d'un communiqué", "Traduction faite par Claude", "Le filigrane suit la traduction ; la relecture d'un traducteur maintient l'exception"],
      ],
    },
    cas: {
      h3: "Cas pratique : le rapport d'une ONG qui met en cause trois de vos produits",
      contexte: "Prenons la directrice de la communication d'un groupe agroalimentaire de taille intermédiaire. Mardi à 6 h, une ONG publie un rapport de 160 pages sur les emballages plastiques du secteur, et trois produits du groupe y figurent. À 10 h, une quarantaine d'articles l'ont repris. La direction RSE valide à 11 h une fiche de faits de deux pages, et la cellule de crise est convoquée pour 14 h. Le scénario sert d'exemple de formation.",
      etapes: [
        "Dans le projet de crise monté en amont, qui réunit la charte, les communiqués validés et la compétence « communiqué », démarrez une nouvelle conversation.",
        "Déposez le rapport en PDF, les articles réunis en un ou deux fichiers et la fiche de faits, puis copiez la consigne qui suit.",
        "Ouvrez dans le rapport chaque page que Claude cite et cochez les écarts entre le rapport et la presse que vous confirmez.",
        "Faites relire la prise de position sur le fond par la direction RSE et par le juriste, et notez qui a validé quel passage.",
        "Archivez la version signée. Toute reformulation ultérieure par Claude, même pour un réseau social, repasse par la même relecture.",
      ],
      prompt: "Tu travailles avec la directrice de la communication d'un groupe agroalimentaire. Ce matin, une ONG a publié le rapport joint (PDF de 160 pages) sur les emballages plastiques du secteur. Il cite trois de nos produits. Le deuxième fichier réunit les articles parus depuis 6 h. Le troisième est la fiche de faits que notre direction RSE a validée à 11 h.\n\nRègles :\n- Pour tout fait qui concerne le groupe, n'utilise que la fiche de faits. N'ajoute aucun chiffre, aucune date et aucun engagement qui n'y figure pas.\n- Chaque fois que tu t'appuies sur le rapport, indique la page.\n- N'attribue aucune phrase à un dirigeant. Écris « citation à recueillir » à l'endroit prévu.\n\nTravail demandé :\n1. Résume en quinze lignes ce que le rapport dit de nos trois produits, avec les pages.\n2. Dresse la liste des affirmations de presse que le rapport ne contient pas ou qu'il nuance. Pour chacune : le média, la phrase de l'article, puis la page du rapport qui dit autre chose, ou la mention « absent du rapport ».\n3. Rédige une prise de position d'un paragraphe, publiable sur notre site, dans le ton de nos communiqués. Elle reconnaît la publication du rapport, rappelle les faits de la fiche et annonce ce que le groupe va vérifier.\n4. Prépare les douze questions les plus probables des journalistes, de la plus hostile à la plus technique. Réponds à partir de la fiche ; quand elle ne suffit pas, laisse la réponse vide et indique qui détient l'information (RSE, juridique, direction industrielle).\n5. Propose quatre messages clés pour le porte-parole, chacun relié à la ligne de la fiche qui le fonde.\n\nTermine par un tableau de contrôle qui reprend chaque chiffre et chaque date de la prise de position, avec la ligne de la fiche d'où il vient.",
      resultat: "Le travail rend une lecture du rapport où chaque point renvoie à sa page, l'inventaire des écarts entre le rapport et sa reprise, une prise de position, les questions probables et quatre messages clés rattachés à la fiche. Les écarts deviennent votre premier argument : un chiffre que la presse prête au rapport et qu'il ne contient pas se corrige auprès du journaliste, page à l'appui. Avant diffusion, ouvrez chaque page citée, contrôlez le tableau ligne par ligne et faites valider le texte par la personne qui en porte la responsabilité éditoriale. Le sujet touche à l'environnement et à la sécurité des consommateurs : sans relecture de fond, l'article 50 imposerait d'indiquer au public que l'IA a contribué au texte.",
    },
    pieges: [
      {
        titre: "Une relecture limitée à l'orthographe",
        texte: "La Commission, dans ses lignes directrices, refuse de compter comme relecture la correction d'orthographe ou de grammaire, l'existence d'une charte éditoriale et la validation de principe. Pour un texte d'intérêt public, la personne qui relit vérifie les faits et connaît le sujet. Gardez la trace de cette relecture en notant qui a relu et quel jour.",
      },
      {
        titre: "La version courte demandée après la signature",
        texte: "Le communiqué est validé, puis quelqu'un demande à Claude une version courte pour LinkedIn. Pour la Commission, une intervention substantielle de l'IA après la validation fait tomber l'exception. La nouvelle version repasse par la relecture, ou porte la mention si son sujet est d'intérêt public.",
      },
      {
        titre: "Le panorama de presse envoyé à tous les salariés",
        texte: "Une revue de la semaine qui joint les articles et part vers une liste de salariés constitue un panorama de presse, que le CFC soumet à son autorisation. L'exception légale de revue de presse appartient aux organes de presse. Vérifiez la licence de votre organisation avant d'automatiser l'envoi.",
      },
      {
        titre: "La tribune signée que la rédaction peut tester",
        texte: "Une tribune rédigée pour l'essentiel par Claude porte son filigrane, et les médias figurent parmi les organisations qui peuvent solliciter l'outil de détection d'Anthropic. Plus Claude a écrit, plus la détection est sûre. Décidez avant l'envoi, avec le signataire, ce que vous répondrez si la rédaction demande quelle part l'IA a prise dans le texte.",
      },
    ],
  },
  audience: [
    { title: "Directions de la communication", desc: "Vous signez les prises de parole et vous arbitrez en cellule de crise. Vous apprenez à faire lire un dossier entier à Claude, à protéger les éléments de langage dans un projet et à décider quand une publication doit porter une mention." },
    { title: "Attachés de presse et chargés de communication externe", desc: "Vous suivez la presse, répondez aux journalistes et rédigez les communiqués. Claude lit les rapports et les articles en entier, cite ses pages et écrit dans la voix que fixe votre compétence." },
    { title: "Chargés de communication interne", desc: "Vous écrivez pour les salariés et vous préparez les messages que les managers relaient. Vos textes d'intranet sortent du champ de l'article 50, et vous apprenez à les vérifier avec la même rigueur que les textes destinés au public." },
  ],
  useCases: [
    { icon: '📚', title: "Un rapport lu de bout en bout", desc: "Le rapport complet et la presse qui le reprend dans une même conversation, chaque affirmation suivie de sa page." },
    { icon: '🔎', title: "La presse confrontée à sa source", desc: "Les phrases d'articles que le rapport ne contient pas, repérées une à une pour les corriger auprès des rédactions." },
    { icon: '📰', title: "La note de veille du lundi", desc: "Une tâche planifiée lit le dossier de coupures relié par un connecteur et prépare la synthèse de la semaine." },
    { icon: '✒️', title: "La voix de la maison", desc: "Une compétence partagée applique la charte, les tournures proscrites et deux textes de référence, dans Claude, Word et Outlook." },
    { icon: '🚨', title: "Des questions-réponses tenues par les faits", desc: "Chaque réponse vient de la fiche validée ; les autres restent vides, avec le service qui détient l'information." },
    { icon: '⚖️', title: "La mention et les droits", desc: "Quand l'article 50 impose une mention, ce que révèle le filigrane et à quel moment une revue devient un panorama de presse." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Régler l'espace de travail de la direction", duration: '1h30',
      description: "Décider où vivent les références, qui les modifie et ce qui ne doit jamais entrer dans Claude.",
      items: [
        "Offres Team et Enterprise : aucun entraînement sur vos contenus par défaut, mémoire coupée par défaut",
        "Projet de la direction : consignes, base de documents, droits de consultation et de modification",
        "Ce qui va dans le projet et ce qui se dépose dans la conversation du jour",
        "Textes sous embargo : la règle qui les garde hors des espaces partagés",
      ],
      exercise: "Vous montez le projet de votre direction avec votre charte et trois communiqués validés, puis vous décidez qui peut le modifier.",
    },
    {
      day: 1, title: "Module 2 · Faire lire un dossier entier et citer ses pages", duration: '2h',
      description: "Obtenir une lecture complète, vérifiable page par page.",
      items: [
        "Fenêtre de contexte et tokens : ce qui entre dans une conversation",
        "Numéro de page exigé pour chaque affirmation, pages ouvertes au hasard pour contrôle",
        "Écarts entre un rapport et sa reprise dans la presse",
        "Dossier trop volumineux : découpage par semaine ou par thème",
      ],
      exercise: "Vous faites lire à Claude un rapport public qui concerne votre secteur, avec les articles qui l'ont repris, et vous vérifiez cinq pages citées.",
    },
    {
      day: 1, title: "Module 3 · Programmer la veille et la note du lundi", duration: '2h',
      description: "Recevoir chaque semaine une note de veille dont chaque point renvoie à sa source.",
      items: [
        "Dossier de coupures relié par un connecteur Google Drive ou Microsoft 365",
        "Tâche planifiée qui tourne dans le cloud, ordinateur éteint",
        "Recherche approfondie pour le web ouvert, citations à ouvrir une à une",
        "Revue de presse et panorama : ce que le CFC autorise",
      ],
      exercise: "Vous lancez la note hebdomadaire sur les thèmes que suit votre direction, puis vous la confrontez à la revue que l'équipe produit aujourd'hui.",
    },
    {
      day: 1, title: "Module 4 · Écrire dans la voix de la maison", duration: '1h30',
      description: "Transformer la charte éditoriale en compétence que toute l'équipe applique.",
      items: [
        "SKILL.md : nom, description limitée à 200 caractères, règles et exemples",
        "Deux communiqués validés placés en exemple dans la compétence",
        "Partage en lecture seule ou publication pour l'organisation",
        "La même compétence dans les compléments Word et Outlook",
      ],
      exercise: "Vous écrivez la compétence « communiqué » de votre direction et vous la testez sur trois sujets de votre actualité.",
    },
    {
      day: 2, title: "Module 5 · Préparer une mise en cause avant qu'elle arrive", duration: '1h30',
      description: "Écrire à froid tout ce qui peut l'être.",
      items: [
        "Les scénarios de mise en cause propres à votre secteur",
        "Le modèle de fiche de faits : établi, en cours de vérification, détenteur de l'information",
        "La banque de questions-réponses déjà validées, classées par scénario",
        "Le circuit de relecture de fond et la trace des validations",
      ],
      exercise: "Vous rédigez le modèle de fiche de faits et la banque de questions-réponses d'un scénario que votre direction juge probable.",
    },
    {
      day: 2, title: "Module 6 · Répondre dans les premières heures d'une mise en cause", duration: '2h',
      description: "Passer d'un dossier lu à une prise de position validée.",
      items: [
        "Rapport, presse et fiche de faits dans une même conversation",
        "Liste des affirmations de presse absentes du rapport",
        "Réponses appuyées sur la fiche, détenteur nommé pour les autres",
        "Tableau de contrôle des chiffres et des dates avant signature",
      ],
      exercise: "Vous jouez en temps limité le cas du rapport d'ONG, ou un cas de votre secteur, jusqu'à la prise de position et aux questions-réponses.",
    },
    {
      day: 2, title: "Module 7 · Appliquer l'article 50 et respecter le droit d'auteur", duration: '2h',
      description: "Reconnaître les textes qui doivent porter une mention, et savoir à qui appartiennent les textes produits.",
      items: [
        "Texte publié, information du public, intérêt public : les critères de la Commission",
        "Relecture de fond, responsabilité éditoriale et reformulation après validation",
        "Filigrane de Claude, API de détection et certificats C2PA",
        "Propriété des contenus, garantie d'Anthropic et panorama de presse",
      ],
      exercise: "Vous rédigez la mention type de votre organisation et l'encart des mentions légales qui nomme le responsable éditorial.",
    },
    {
      day: 2, title: "Module 8 · Écrire la règle éditoriale de l'équipe", duration: '1h30',
      description: "Fixer qui relit, qui signe et ce que l'équipe dit de son usage de l'IA.",
      items: [
        "Les relecteurs par type de texte et la compétence attendue sur le fond",
        "Ce que l'équipe dit de son usage de l'IA, tribunes et traductions comprises",
        "Les textes qui ne passent jamais par Claude",
        "La mise à jour de la compétence et de la base à chaque changement de charte",
      ],
      exercise: "Vous rédigez sur une page les règles de l'équipe, puis vous les intégrez aux consignes du projet de la direction.",
    },
  ],
  objectives: [
    "Le participant sait faire lire à Claude un rapport et sa reprise dans la presse, puis vérifier chaque page citée.",
    "Le participant sait paramétrer un projet partagé dont seule la direction modifie la base de documents.",
    "Le participant sait rédiger une compétence qui applique la charte éditoriale et la partager à son équipe.",
    "Le participant sait produire des questions-réponses de crise dont chaque réponse vient de la fiche de faits validée.",
    "Le participant sait dire si une publication relève de l'article 50 de l'AI Act et si la relecture prévue dispense de la mention.",
    "Le participant sait distinguer une revue de presse d'un panorama de presse soumis à l'autorisation du CFC.",
  ],
  faq: [
    { q: "Un rapport de deux cents pages et sa reprise dans la presse tiennent-ils dans une seule conversation ?", a: "Oui, sur une offre payante. Les derniers modèles gardent en mémoire de travail jusqu'à un million de tokens : un rapport de cette taille, des dizaines d'articles et vos archives y entrent ensemble. Exigez la page à l'appui de chaque affirmation et ouvrez celles qui comptent. Rangés dans un projet plutôt que dans la conversation, les mêmes documents seraient consultés par recherche une fois la fenêtre dépassée, et Claude n'en lirait que les passages jugés utiles." },
    { q: "Notre communiqué doit-il dire qu'il a été préparé avec Claude ?", a: "La mention s'impose dans un cas : le communiqué traite d'une question d'intérêt public, et personne ne l'a relu sur le fond ni ne le signe en responsable éditorial. L'article 50 de l'AI Act couvre, depuis le 2 août 2026, les textes publiés afin d'éclairer le public. La Commission en exclut, dans ses lignes directrices, les communications internes et les publicités sans allégation de santé, de sécurité ou de durabilité. Une reformulation par l'IA après validation impose une nouvelle relecture." },
    { q: "Que change le filigrane de Claude pour une équipe de relations presse ?", a: "Depuis le 2 août 2026, chaque nouveau modèle de Claude glisse dans ses textes un filigrane invisible, sans effet sur la qualité et sans information sur vous ou votre organisation. Les médias et les vérificateurs de faits peuvent demander à utiliser l'outil de détection d'Anthropic. Le filigrane remplit l'obligation du fournisseur ; la mention au public, quand elle est due, reste la vôtre." },
    { q: "À qui appartient une tribune écrite avec Claude ?", a: "Sur Team, Enterprise et l'API, les conditions commerciales d'Anthropic attribuent au client les contenus produits et prévoient sa défense contre un tiers qui invoquerait sa propriété intellectuelle. Cette garantie exclut vos propres modifications, les contenus que vous avez fournis et l'usage d'un texte dont vous savez qu'il enfreint des droits. Sur une offre individuelle, lisez les conditions grand public avant de publier." },
    { q: "Nos éléments de langage et nos textes sous embargo restent-ils confidentiels ?", a: "Sur Team et Enterprise, Anthropic ne se sert pas de vos échanges pour entraîner ses modèles, sauf si vous l'y autorisez ou si vous envoyez un retour par les boutons pouce ; la mémoire de Claude y est coupée par défaut. Dans un projet partagé, l'équipe reçoit le droit de consultation et la direction garde la modification. Un texte sous embargo reste hors des projets partagés jusqu'à sa levée." },
    { q: "Peut-on recevoir chaque lundi une note de veille préparée par Claude ?", a: "Oui. Une tâche planifiée relance la même consigne à l'heure choisie et s'exécute dans le cloud, sans ordinateur allumé, si les coupures arrivent dans un dossier relié par un connecteur comme Google Drive ou Microsoft 365. Un dossier stocké sur votre poste demande l'application de bureau ouverte. Joindre les articles à l'envoi en fait un panorama de presse, soumis à l'autorisation du CFC." },
    { q: "Les ateliers portent-ils sur nos communiqués et nos dossiers de presse ?", a: "Ils partent de vos documents. Chaque participant apporte sa charte, trois communiqués récents et un dossier de presse, anonymisé si besoin. Les exercices de recherche approfondie et de tâches planifiées demandent un compte Claude payant ; nous vérifions avant la session les réglages de votre organisation avec son administrateur. Les deux journées de 7 heures ont lieu chez vous ou en visioconférence." },
    { q: "Comment une direction de la communication finance-t-elle cette formation ?", a: "Masteria étant certifié Qualiopi, la session peut être financée par votre OPCO ; l'accord et le montant dépendent des règles de votre branche. Le prix d'une journée, 1 980 € HT, ne bouge pas avec l'effectif : douze personnes en intra ou une seule en individuel. Nous rassemblons avec vous les pièces de la demande, programme détaillé et convention compris." },
  ],
  tarifs: {
    titre: "Ce que comprennent les 3 960 € HT de deux journées pour un service de communication",
    paras: [
      "Le prix comprend la préparation sur vos documents : nous lisons en amont votre charte, trois communiqués récents et un dossier de presse, puis nous construisons le cas de crise à partir d'un sujet plausible pour votre secteur. Il couvre aussi l'animation des deux journées, les supports, les modèles de compétence et de fiche de faits, ainsi que l'évaluation des acquis en fin de session.",
      "Exemple : un groupe intra de huit personnes, soit la directrice de la communication, trois chargés de relations presse, deux chargés de communication interne et deux assistants, suit les deux jours pour 3 960 € HT, c'est-à-dire 495 € HT par participant. Une personne seule suit le même parcours en individuel, facturé 1 980 € HT la journée. Selon ses critères, l'OPCO de votre secteur peut couvrir tout ou partie de la dépense ; nous constituons avec vous le dossier de demande.",
    ],
  },
  apres: {
    titre: "Après la formation : un assistant de veille et de prise de parole à votre charte",
    texte: "Une fois la méthode installée, Masteria peut construire pour votre direction un outil sur mesure. Il lit chaque matin les coupures de votre prestataire de veille, signale les sujets qui touchent l'entreprise et prépare un premier jeu de questions-réponses à partir de vos fiches de faits validées. Il s'appuie sur vos compétences Claude et sur un circuit de validation que vous fixez. Le projet commence par un cadrage, qui décide du périmètre, des sources autorisées et de la personne qui valide chaque texte avant sa sortie.",
  },
  cta: {
    milieu: "Apportez votre dernier dossier de presse : nous en faisons le cas de la deuxième journée.",
    fin: {
      titre: "Organisons la formation de votre direction de la communication",
      texte: "Dites-nous combien de personnes composent l'équipe et quel type de prise de parole vous occupe le plus. Nous revenons vers vous avec un programme ajusté à vos documents.",
    },
  },
  liensAssocies: [
    { label: "Former vos équipes à l'AI Act et à ses obligations de transparence", href: '/formation-ai-act' },
    { label: "Automatiser une veille avec l'IA, de la source à la note", href: '/automatiser-sa-veille-ia' },
    { label: "La formation Claude des équipes marketing", href: '/formation-claude-marketing' },
    { label: "Confidentialité et sécurité de Claude en entreprise", href: '/securite-claude-entreprise' },
  ],
  avisPriorite: ['Claude', 'communication', 'presse', 'r[ée]daction'],
  sources: [
    { name: "Anthropic : « How Claude's text watermarking works » (14 août 2026)", url: "https://www.anthropic.com/news/claude-text-watermark" },
    { name: "Commission européenne : lignes directrices sur la transparence imposée par l'article 50 de l'AI Act (20 juillet 2026)", url: "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems" },
    { name: "EUR-Lex : texte du règlement (UE) 2024/1689, dit AI Act", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { name: "Anthropic Help Center : contexte maximal de chaque modèle sur les offres payantes", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
    { name: "Anthropic Help Center : les projets, leur base de connaissances et leur partage", url: "https://support.claude.com/en/articles/9517075-what-are-projects" },
    { name: "Anthropic Help Center : utiliser et partager des compétences (Skills)", url: "https://support.claude.com/en/articles/12512180-use-skills-in-claude" },
    { name: "Anthropic : conditions commerciales (propriété des contenus et garantie)", url: "https://www.anthropic.com/legal/commercial-terms" },
    { name: "CFC : lexique, revue de presse et panorama de presse", url: "https://v1.cfcopies.com/lexique/r" },
  ],
}
