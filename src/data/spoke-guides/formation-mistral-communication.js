// Contenu propre à /formation-mistral-communication (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-mistral-communication',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Mistral pour la communication : veille avec les dépêches AFP, communiqués, éléments de langage et kit de crise avec Vibe, AI Act compris.",
  intro: "Une direction de la communication vit au rythme de la veille du matin, des communiqués et des éléments de langage, avec la crise en toile de fond. Vibe, l'assistant de Mistral (anciennement Le Chat), programme une revue d'actualité qui s'appuie sur les dépêches de l'AFP, garde votre ligne éditoriale dans une Bibliothèque et décline un message pour chaque public. Ce guide suit une cellule de crise pendant ses quatre-vingt-dix premières minutes.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe fait la veille à heure fixe et décline un message pour chaque public",
    lead: "En communication, un assistant IA rend deux services : il lit vite ce qui se dit dehors, et il réécrit un message validé pour chaque public. Vibe a pour cela deux atouts propres : un accord avec l'AFP et l'Associated Press qui fait entrer des dépêches dans ses résultats de recherche, et des tâches planifiées qui lancent la veille avant votre arrivée. Le danger du métier ne change pas. Une citation inventée ou un fait non confirmé qui sort dans un communiqué engage l'entreprise.",
    sections: [
      {
        h3: "La veille du matin tourne seule à 7 h 30",
        paras: [
          "Activez la recherche web parmi les outils de la conversation. Quand des dépêches de l'AFP ou d'AP entrent dans la réponse, une icône d'actualité apparaît à côté du globe, et le bouton Sources liste chaque référence. La fonction d'ouverture d'URL lit en plus un article précis que vous collez, une seule page par adresse.",
          "Une tâche planifiée exécute la même consigne chaque jour à l'heure fixée ; créez-la depuis la rubrique Tâches planifiées. La revue arrive dans le menu latéral avec un point non lu. Les limites sont écrites dans la documentation : les articles payants et les pages qui demandent une connexion restent fermés, et un résultat peut être ancien.",
        ],
        list: [
          "Les mentions de l'entreprise et de ses dirigeants depuis la veille, avec la date et le média.",
          "Les sujets du secteur qui montent, classés par risque pour l'entreprise.",
          "Les prises de parole des concurrents et des fédérations professionnelles.",
        ],
      },
      {
        h3: "Une Bibliothèque éditoriale fait parler l'entreprise d'une seule voix",
        paras: [
          "Dans une Bibliothèque, Vibe indexe vos documents et renvoie à chacun par une note numérotée. Pour une direction de la communication, elle contient la charte éditoriale, les communiqués des deux dernières années, les biographies validées des porte-parole, les questions-réponses déjà approuvées et les éléments de langage en vigueur. Partagée en lecture seule à toute l'équipe, elle devient la référence commune.",
          "Le ton se règle ailleurs, dans Contexte puis Instructions : vous y choisissez un ton et vous décrivez vos règles, comme le vouvoiement, la longueur d'un chapeau ou les mots que la marque n'emploie pas. Ces instructions s'appliquent à toutes vos nouvelles conversations.",
        ],
      },
      {
        h3: "Deux compétences intégrées déclinent un message validé",
        paras: [
          "Deux compétences fournies par Mistral servent ce travail, appelées par / suivi de leur nom. /stakeholder-translator réécrit un contenu pour un autre public, par exemple la direction, les équipes ou les partenaires. /internal-comms produit des points d'étape, des messages à la direction, des FAQ et des comptes rendus d'incident. Partez toujours du message validé par la direction et demandez des déclinaisons : l'outil adapte la forme, vous gardez le fond.",
          "Votre propre gabarit de communiqué mérite une compétence maison. Quand un communiqué vous convient, demandez à Vibe d'en tirer une compétence. Il rédige un fichier d'instructions avec votre structure (titre, chapeau, corps, citation, paragraphe « à propos », contact presse), que vous relisez et partagez à l'équipe.",
        ],
      },
      {
        h3: "L'AI Act impose une mention dans un cas précis",
        paras: [
          "L'article 50 du règlement européen sur l'IA s'applique depuis le 2 août 2026. Il impose de signaler un texte généré par IA et publié pour informer le public sur des questions d'intérêt public. L'obligation tombe si le texte a été relu ou contrôlé par un humain et qu'une personne en porte la responsabilité éditoriale. Un communiqué relu, corrigé et signé par la direction de la communication entre dans cette exception ; un texte publié tel que l'outil l'a produit n'y entre pas.",
          "Le même article vise les hypertrucages, ces images ou vidéos générées qui ressemblent à des personnes, des lieux ou des événements réels et qu'on pourrait prendre pour authentiques. Vibe génère des images avec des modèles de Black Forest Labs. Une illustration abstraite ne pose pas de question ; une image qu'on pourrait prendre pour une vraie photo de votre usine ou de votre dirigeant doit porter une mention.",
        ],
      },
    ],
    table: {
      caption: "Les tâches d'une direction de la communication et la fonction de Vibe qui les sert",
      headers: ["Tâche", "Fonction de Vibe", "Point de vigilance"],
      rows: [
        ["Revue de presse du matin", "Tâche planifiée quotidienne, recherche web avec dépêches AFP et AP", "Presse payante et réseaux fermés hors de portée"],
        ["Lire un article cité par un journaliste", "Ouverture d'URL", "Une seule page par adresse, aucun article payant"],
        ["Rédiger un communiqué", "Bibliothèque éditoriale, compétence maison", "Aucune citation de dirigeant qui n'ait été dite ou validée"],
        ["Décliner un message par public", "Compétence /stakeholder-translator", "Comparez chaque version au message source"],
        ["Informer les salariés en cas d'incident", "Compétence /internal-comms, connecteur Slack", "Publication sur Slack soumise à votre accord"],
        ["Illustrer une publication", "Génération d'images", "Mention obligatoire pour une image qu'on pourrait prendre pour une vraie photo"],
      ],
    },
    cas: {
      h3: "Cas pratique : les quatre-vingt-dix premières minutes d'un rappel de produit",
      contexte: "Prenons la responsable de la communication d'une PME qui fabrique des jouets en bois. La direction qualité vient de décider le rappel d'un modèle dont une petite pièce peut se détacher. Depuis le 1er avril 2021, tout rappel de produit doit être déclaré sur le site public RappelConso. La cellule de crise se réunit dans une heure et demie et attend un premier kit de communication.",
      etapes: [
        "Ouvrez le projet « Crise » préparé à froid, qui contient la procédure de crise, la charte et les communiqués passés dans une Bibliothèque attachée.",
        "Collez les faits confirmés par la direction qualité, et eux seuls, puis le prompt ci-dessous.",
        "Relisez la déclaration d'attente dans le Canvas et corrigez-la à la main ; faites-la valider par le dirigeant avant toute diffusion.",
        "Appelez /stakeholder-translator pour décliner le message validé vers les distributeurs, puis /internal-comms pour la note aux salariés.",
        "Si la note part sur Slack, laissez Vibe préparer le message et validez vous-même la publication quand il vous demande votre accord.",
      ],
      prompt: "Nous sommes une PME qui fabrique des jouets en bois. Notre direction qualité vient de décider le rappel du modèle « Train des animaux » vendu depuis mars : sur certains exemplaires, la roue avant peut se détacher et présente un risque d'étouffement pour les enfants de moins de trois ans. Aucun accident ne nous a été signalé à ce jour. Le rappel sera déclaré sur RappelConso aujourd'hui. Les clients peuvent rapporter le jouet en magasin pour un remboursement.\n\nCe sont les seuls faits confirmés. N'en ajoute aucun.\n\nPrépare un premier kit pour la cellule de crise.\n\n1. Une déclaration d'attente de cinq phrases maximum, publiable sur notre site, qui dit ce qui se passe, ce que les parents doivent faire et où trouver l'information. Ton sobre, ni minimisation ni dramatisation.\n2. Dix questions que les parents et les journalistes vont poser, avec une réponse courte pour chacune. Quand la réponse n'est pas dans les faits confirmés, écris « à confirmer par la direction qualité ».\n3. Cinq éléments de langage pour le porte-parole, qui reprennent le vocabulaire de nos communiqués passés dans la Bibliothèque.\n4. La liste de ce que nous ne devons pas dire tant que l'enquête qualité n'est pas terminée.\n\nN'écris aucune citation au nom du dirigeant. Laisse un emplacement signalé « citation à recueillir ».",
      resultat: "Vous obtenez une déclaration d'attente courte, dix questions-réponses dont plusieurs marquées « à confirmer », des éléments de langage dans le vocabulaire de la maison et une liste de phrases à éviter. Les réponses « à confirmer » forment la liste des questions à poser à la direction qualité pendant la cellule. Contrôlez la cohérence entre la déclaration, la fiche RappelConso et les consignes données en magasin : trois textes qui se contredisent font plus de dégâts que le rappel lui-même.",
    },
    pieges: [
      {
        titre: "Une citation de dirigeant sort de nulle part",
        texte: "Un assistant qui rédige un communiqué ajoute volontiers une citation du président, plausible et fausse. Interdisez-le dans le prompt et dans votre compétence maison. Une citation se recueille auprès de la personne et se fait valider par écrit.",
      },
      {
        titre: "Un fait non confirmé entre dans la déclaration",
        texte: "En crise, l'outil complète les trous avec des hypothèses raisonnables. Donnez-lui les seuls faits confirmés, dites-lui de n'en ajouter aucun, et demandez-lui de marquer ce qui manque. La mention « à confirmer » vaut mieux qu'une phrase fausse reprise par une dépêche.",
      },
      {
        titre: "La veille rate ce qui se passe derrière un paywall",
        texte: "La documentation de Mistral précise que les contenus payants et les pages protégées par un mot de passe restent inaccessibles. Un article de la presse quotidienne réservé aux abonnés ne figurera pas dans la revue. Gardez votre outil de veille média pour la couverture complète.",
      },
    ],
  },
  audience: [
    {
      "title": "Directions et responsables de la communication",
      "desc": "Vous tenez la ligne éditoriale, les validations et la préparation de crise. Vous apprenez à cadrer l'usage de Vibe dans l'équipe et à savoir quand l'AI Act impose une mention."
    },
    {
      "title": "Chargés de relations presse et de communication externe",
      "desc": "Vous rédigez les communiqués, suivez la presse et répondez aux journalistes. Vibe programme la veille et écrit dans la ligne de vos communiqués passés."
    },
    {
      "title": "Chargés de communication interne",
      "desc": "Vous informez les salariés et outillez les managers. Vous apprenez à décliner un message validé par public et à préparer les FAQ internes."
    }
  ],
  useCases: [
    {
      "icon": "📰",
      "title": "Revue de presse programmée",
      "desc": "Une tâche planifiée lance chaque matin une veille qui s'appuie sur la recherche web et les dépêches de l'AFP et d'AP, sources à l'appui."
    },
    {
      "icon": "📋",
      "title": "Communiqué de presse",
      "desc": "Un communiqué rédigé dans la structure et le vocabulaire de vos communiqués passés, sans citation que la personne n'ait validée."
    },
    {
      "icon": "🎤",
      "title": "Éléments de langage",
      "desc": "Le message validé par la direction, décliné pour chaque public avec la compétence /stakeholder-translator."
    },
    {
      "icon": "🚨",
      "title": "Kit de crise",
      "desc": "Déclaration d'attente, questions-réponses et liste des phrases à éviter, construites à partir des seuls faits confirmés."
    },
    {
      "icon": "🏛",
      "title": "Communication interne",
      "desc": "Points d'étape, FAQ et comptes rendus d'incident avec /internal-comms, publiés sur Slack après votre accord."
    },
    {
      "icon": "📊",
      "title": "Mention IA des publications",
      "desc": "Savoir quand un texte ou une image générés doivent porter une mention au titre de l'article 50 de l'AI Act."
    }
  ],
  modules: [
    {
      "day": 1,
      "title": "Module 1 · Régler Vibe pour une direction de la communication",
      "duration": "1h30",
      "description": "Poser le ton, la confidentialité et les accords avant de produire.",
      "items": [
        "Offres Free, Pro, Team et Enterprise : réglage de l'entraînement des modèles",
        "Ton et règles d'écriture dans Contexte, puis Instructions",
        "Un projet par dossier : lancement, événement, scénario de crise",
        "Accord manuel avant toute publication par un connecteur"
      ],
      "exercise": "Vous rédigez les instructions de ton de votre direction à partir de votre charte éditoriale."
    },
    {
      "day": 1,
      "title": "Module 2 · Programmer la veille",
      "duration": "2h",
      "description": "Recevoir chaque matin une revue qui se vérifie source par source.",
      "items": [
        "Recherche web, dépêches de l'AFP et d'AP, icône d'actualité et bouton Sources",
        "Ouverture d'URL : un article précis, une page par adresse",
        "Tâche planifiée quotidienne et questions de suivi sur la revue",
        "Limites : presse payante, pages protégées, résultats anciens"
      ],
      "exercise": "Vous programmez la revue du matin sur vos propres sujets de veille et vous la comparez à votre outil actuel."
    },
    {
      "day": 1,
      "title": "Module 3 · Écrire un communiqué dans la ligne de la maison",
      "duration": "2h",
      "description": "Produire un communiqué qui ressemble aux vôtres et ne contient que des faits vérifiés.",
      "items": [
        "Bibliothèque éditoriale : charte, communiqués passés, biographies des porte-parole",
        "Structure : titre, chapeau, corps, citation, paragraphe « à propos », contact presse",
        "Aucune citation inventée : emplacement signalé à recueillir",
        "Compétence maison de communiqué partagée à l'équipe"
      ],
      "exercise": "Vous rédigez un communiqué sur une actualité de votre entreprise à partir de vos communiqués passés."
    },
    {
      "day": 1,
      "title": "Module 4 · Décliner un message par public",
      "duration": "1h30",
      "description": "Adapter la forme d'un message validé en gardant son fond.",
      "items": [
        "La compétence /stakeholder-translator pour la direction, les équipes et les partenaires",
        "La compétence /internal-comms pour les points d'étape et les FAQ internes",
        "Comparer chaque version au message source",
        "Préparer le relais des managers"
      ],
      "exercise": "Vous déclinez un message validé de votre entreprise pour trois publics et vous contrôlez chaque version."
    },
    {
      "day": 2,
      "title": "Module 5 · Préparer la crise à froid",
      "duration": "1h30",
      "description": "Tout ce qui peut s'écrire avant la crise s'écrit avant.",
      "items": [
        "Projet « Crise » avec procédure, annuaire de la cellule et précédents",
        "Scénarios propres à votre secteur",
        "Modèle de déclaration d'attente et circuit de validation",
        "Questions-réponses déjà approuvées dans la Bibliothèque"
      ],
      "exercise": "Vous montez le projet de crise de votre entreprise avec vos procédures et deux scénarios plausibles pour votre secteur."
    },
    {
      "day": 2,
      "title": "Module 6 · Tenir les premières heures d'une crise",
      "duration": "2h",
      "description": "Produire un kit utile à partir des seuls faits confirmés.",
      "items": [
        "Consigne « n'ajoute aucun fait » et mention « à confirmer »",
        "Déclaration d'attente, questions-réponses et éléments de langage du porte-parole",
        "Liste de ce qui ne se dit pas avant la fin de l'enquête",
        "Cohérence avec les déclarations officielles, comme une fiche RappelConso"
      ],
      "exercise": "Vous jouez un scénario de crise tiré de votre secteur et vous produisez le kit en temps limité."
    },
    {
      "day": 2,
      "title": "Module 7 · Visuels et transparence",
      "duration": "2h",
      "description": "Illustrer vos publications et savoir quand une mention s'impose.",
      "items": [
        "Génération d'images avec les modèles de Black Forest Labs et ses limites sur les petits textes",
        "Article 50 de l'AI Act : texte publié sur une question d'intérêt public",
        "Exception : relecture humaine et responsabilité éditoriale",
        "Hypertrucages : images qu'on pourrait prendre pour de vraies photos"
      ],
      "exercise": "Vous classez vos dernières publications selon l'obligation de mention et vous illustrez l'une d'elles."
    },
    {
      "day": 2,
      "title": "Module 8 · Fixer les règles éditoriales de l'équipe",
      "duration": "1h30",
      "description": "Écrire qui valide, qui publie et ce que l'outil ne produit jamais.",
      "items": [
        "Circuit de validation par type de contenu",
        "Citations de dirigeants : toujours recueillies, jamais générées",
        "Publication par connecteur : accord manuel conservé",
        "Tenue de la Bibliothèque éditoriale et retrait des versions périmées"
      ],
      "exercise": "Vous rédigez la charte d'usage de Vibe pour votre direction de la communication."
    }
  ],
  objectives: [
    "Programmer une revue de presse quotidienne et vérifier la date et la source de chaque information",
    "Rédiger un communiqué conforme à la ligne éditoriale à partir d'une Bibliothèque",
    "Décliner un message validé pour plusieurs publics en gardant son fond",
    "Produire un premier kit de crise à partir des seuls faits confirmés",
    "Déterminer quand un texte ou une image publiés doivent porter une mention au titre de l'article 50 de l'AI Act"
  ],
  faq: [
    { q: "Vibe a-t-il accès aux dépêches de l'AFP ?", a: "Oui, dans ses résultats de recherche web. Mistral indique travailler avec l'Agence France-Presse et l'Associated Press, et une icône d'actualité signale les réponses qui s'appuient sur leurs dépêches. Vous n'accédez pas au fil complet de l'agence : Vibe cite les dépêches qui répondent à votre question." },
    { q: "Peut-on programmer une revue de presse quotidienne ?", a: "Oui, avec une tâche planifiée quotidienne qui lance la même consigne de veille à l'heure choisie. Le résultat arrive dans le menu latéral comme une conversation, et vous pouvez poser des questions de suivi. L'offre gratuite limite le nombre de tâches planifiées à cinq, l'offre Pro ne le limite pas." },
    { q: "Faut-il signaler qu'un communiqué a été rédigé avec l'IA ?", a: "L'article 50 du règlement européen sur l'IA, applicable depuis le 2 août 2026, impose une mention pour les textes publiés afin d'informer le public sur des questions d'intérêt public. L'obligation ne s'applique pas si le texte a été relu ou contrôlé par un humain et qu'une personne en porte la responsabilité éditoriale. Un communiqué relu et signé par la direction de la communication remplit ces deux conditions." },
    { q: "Vibe génère-t-il des visuels pour la communication ?", a: "Oui. Vibe produit des images avec les modèles de Black Forest Labs, à activer parmi les outils. La documentation prévient que les petits textes peuvent être altérés lors d'une retouche. Une image qu'on pourrait prendre pour une vraie photo d'une personne ou d'un lieu réel doit porter une mention au titre de l'AI Act." },
    { q: "Vibe peut-il publier un message interne sur Slack ?", a: "Oui, le connecteur Slack permet de chercher des messages, de lire des canaux et d'en envoyer. Vibe demande votre accord avant chaque publication, sauf si vous l'avez autorisée à l'avance pour la session. En communication de crise, gardez l'accord manuel." },
    { q: "Vibe lit-il un article de presse réservé aux abonnés ?", a: "Non. La fonction d'ouverture d'URL lit les pages publiques, une par une, et ne franchit ni paywall ni page de connexion. Si un journaliste vous envoie un article payant, copiez le texte dans la conversation depuis votre abonnement." },
    { q: "Quel financement pour former une direction de la communication ?", a: "Masteria est un organisme certifié Qualiopi : la formation peut être financée par votre OPCO selon ses règles. En intra, elle réunit jusqu'à 12 participants, au tarif de 1 980 € HT par jour. Nous vous accompagnons dans la demande de prise en charge." },
  ],
  sources: [
    { name: "Mistral Docs : Web search and Open URL (partenariat AFP et AP)", url: "https://docs.mistral.ai/vibe/work/web-search-open-url" },
    { name: "Mistral Docs : Scheduled tasks", url: "https://docs.mistral.ai/vibe/work/scheduled-tasks" },
    { name: "Mistral Docs : Skills (compétences intégrées)", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Mistral Docs : Custom instructions", url: "https://docs.mistral.ai/vibe/work/custom-instructions" },
    { name: "Mistral Docs : Image generation", url: "https://docs.mistral.ai/vibe/work/image-generation" },
    { name: "Commission européenne, AI Act Service Desk : article 50", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
    { name: "economie.gouv.fr : déclarer les rappels de produits sur RappelConso", url: "https://www.economie.gouv.fr/entreprises/rappels-produits-rappel-conso" },
    { name: "Arrêté du 20 janvier 2021 relatif à la déclaration des rappels de produits (Légifrance)", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043038659" },
  ],
}
