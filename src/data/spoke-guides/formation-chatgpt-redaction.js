// Contenu propre à /formation-chatgpt-redaction (guide terrain, page propre, formation d'une journée). Rendu par SpokePage.
// Écrit le 7 octobre 2026. Faits ChatGPT : fiche de faits du 07/10/2026 (help.openai.com lu par extraits ;
// retrait de Canvas le 28/05/2026 relevé par la presse spécialisée), comparatifs du 03/10/2026.
// AI Act : règlement (UE) 2024/1689, article 50, paragraphe 4, applicable depuis le 2 août 2026.
// Google : règles anti-spam (28/08/2026) et guide sur les contenus générés par IA (décembre 2025), lus le 28/09/2026.
// Mission citée : missions-formation.js, id « interprofession-agricole ».
export default {
  slug: 'formation-chatgpt-redaction',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation ChatGPT rédaction : écrire au ton de votre maison, en une journée',
  metaTitle: 'Formation ChatGPT rédaction web et pro | Masteria',
  metaDesc: "Formation ChatGPT rédaction (1 jour) : voix de la maison dans un projet, plan avant le texte, déclinaisons fidèles, faits vérifiés avant publication.",
  keywords: "formation ChatGPT rédaction, rédiger avec ChatGPT, formation rédaction web IA, ChatGPT newsletter, écrire avec l'IA",
  resume: "La formation ChatGPT rédaction tient en une journée de sept heures, consacrée aux textes que vos équipes publient ou diffusent : articles, pages de site, lettres aux clients, réponses écrites. Un groupe intra réunit jusqu'à douze rédacteurs, et un parcours individuel reste possible, sur place ou à distance. Son prix, 1 980 € HT, vaut pour le groupe comme pour une personne seule. Parce que Masteria détient la certification Qualiopi, votre OPCO peut être sollicité ; il statue selon les règles de sa branche.",
  enBref: [
    { label: 'Formation', value: "Écrire avec ChatGPT des textes destinés à être lus hors de l'entreprise : ton maison, plan, premier jet, réécriture, déclinaisons, relecture des faits" },
    { label: 'Durée', value: "Une journée (sept heures), en quatre ateliers d'une heure trois quarts" },
    { label: 'Formats', value: "Équipe contenu en intra, jusqu'à douze rédacteurs, ou rédacteur seul ; sur site ou par écran partagé" },
    { label: 'Tarif', value: "1 980 € HT la journée, exercices bâtis sur vos textes publiés et vos sujets du moment" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; décision de l'OPCO d'après les critères de votre branche" },
    { label: 'Prérequis', value: "Écrire chaque mois pour un public ; un compte ChatGPT, de préférence dans un espace Business, vérifié avant la journée" },
  ],
  intro: "Un texte écrit avec ChatGPT se reconnaît souvent à la troisième ligne : des phrases lisses, des oppositions forcées, une conclusion qui pourrait clore n'importe quel article. Le lecteur décroche, et la marque perd sa voix. La cause se trouve le plus souvent dans la façon de lui demander : sans ton décrit, sans plan discuté, sans relecture des faits, ChatGPT écrit la moyenne de tout ce qu'il a lu. Cette journée apprend à vos rédacteurs à faire l'inverse, sur leurs propres sujets : donner à ChatGPT la voix de la maison, le mener du brief au premier jet, décliner sans déformer et vérifier chaque fait avant de publier.",
  prerequis: "Écrire chaque mois des textes destinés à un public (articles, pages, lettres d'information, réponses) ; un compte ChatGPT, Business de préférence",
  guide: {
    kicker: 'Guide terrain',
    h2: "Le rédacteur fixe la voix et le plan, ChatGPT écrit le premier jet, la relecture décide de ce qui part",
    lead: "ChatGPT écrit vite et sans faute de langue. Ce qui manque à ses textes, c'est ce que seul l'auteur possède : une voix reconnaissable, un angle, des faits que l'entreprise connaît et que le web ignore. La méthode de cette journée remet ces trois éléments au début du travail. La voix s'écrit noir sur blanc dans un projet, l'angle se tranche au moment du plan, les faits se vérifient avant la publication. Entre les deux, ChatGPT fait ce qu'il fait bien : mettre en phrases, raccourcir, adapter un texte à un autre canal.",
    sections: [
      {
        h3: "La voix de la maison se décrit une fois, avec des exemples, dans un projet",
        paras: [
          "Un projet ChatGPT conserve des consignes et des fichiers pour toutes les conversations qu'il contient. Pour une équipe éditoriale, ses instructions décrivent la voix : registre, longueur moyenne des phrases, vocabulaire préféré, mots bannis, façon de s'adresser au lecteur. Ses fichiers rassemblent quatre ou cinq textes que l'équipe juge exemplaires, et la charte éditoriale si elle existe. Une description sans exemple produit un pastiche ; des exemples sans description produisent une imitation de surface. Il faut les deux.",
          "Pour savoir si la voix est bien réglée, la journée utilise un test simple. On mélange trois paragraphes écrits par l'équipe et trois produits dans le projet, et chacun tente de les attribuer. Tant que le groupe repère les seconds à coup sûr, les instructions manquent de précision ; on les reprend sur ce qui a trahi l'outil.",
        ],
      },
      {
        h3: "Le plan se discute avant la première phrase",
        paras: [
          "Un brief utile tient en cinq lignes : à qui s'adresse le texte, ce que le lecteur doit penser ou faire après l'avoir lu, l'angle retenu, les preuves disponibles, la longueur. Avec ce brief, demandez à ChatGPT trois plans différents plutôt qu'un texte. Choisir entre trois plans prend deux minutes ; corriger un article entier bâti sur un mauvais angle prend une heure.",
          "Le texte s'écrit ensuite section par section. Chaque section reçoit sa consigne, et l'auteur intervient entre deux : ajouter un exemple de l'entreprise, couper une généralité, réorienter un paragraphe. Le mode réflexion de ChatGPT, qui prend le temps de raisonner avant de répondre, convient au plan et aux textes argumentés ; le mode instantané suffit pour reformuler un paragraphe.",
        ],
      },
      {
        h3: "Les tics d'une écriture générée se repèrent et se corrigent",
        paras: [
          "Les lecteurs ont appris à reconnaître une prose de machine, et ils la sanctionnent par l'indifférence. En français, les signes les plus fréquents sont connus. La journée en tire une liste, que l'équipe range parmi les consignes du projet et dont elle fait sa grille de relecture :",
        ],
        list: [
          "les incises entre tirets longs, là où une virgule ou des parenthèses suffiraient ;",
          "la fausse opposition qui nie une idée pour en affirmer une autre (« plus qu'un outil, une méthode ») ;",
          "les énumérations par trois, plaquées sur des idées qui n'en comptent que deux ;",
          "les adverbes et les intensifs qui ne portent aucun sens, et les débuts de paragraphe creux (« Ainsi », « De plus ») ;",
          "la conclusion qui résume au lieu d'ouvrir, et les questions rhétoriques en cascade.",
        ],
      },
      {
        h3: "La réécriture se fait dans le document, et les déclinaisons gardent les faits",
        paras: [
          "Depuis le 17 septembre 2026, ChatGPT s'ouvre aussi dans Word, dans un panneau latéral qui retravaille le texte ouvert : changer le registre d'un passage, réduire un texte de moitié, harmoniser les intertitres. Dans la conversation, OpenAI a remplacé Canvas le 28 mai 2026 par des blocs d'écriture modifiables ; les tutoriels qui en parlent encore datent d'avant.",
          "Une déclinaison transforme la forme et jamais le fond. Un article devient une lettre d'information, un message pour un réseau professionnel et un objet de mail ; chacun garde les mêmes chiffres, les mêmes noms et les mêmes engagements. La consigne le dit, et la relecture le vérifie en comparant les faits de chaque version à ceux du texte source. Même règle pour une traduction : ChatGPT rédige dans la langue visée, une personne qui la maîtrise relit avant publication.",
        ],
      },
      {
        h3: "Les faits se vérifient avant publication, et l'AI Act fixe une règle pour les textes d'information",
        paras: [
          "ChatGPT peut écrire une date, un chiffre ou une citation plausibles et faux. La passe de véracité consiste à lui faire lister toutes les affirmations vérifiables d'un texte (chiffres, dates, noms, citations), puis à les confronter une par une à leur source. Une citation dont personne ne peut produire l'origine sort du texte.",
          "Depuis août 2026, l'AI Act (article 50) exige d'indiquer qu'un texte vient d'une IA, ou a été retouché par elle, lorsqu'il est diffusé pour informer le public sur des questions d'intérêt public. La mention n'est plus due si un humain a relu le texte ou l'a soumis à un contrôle éditorial, et si quelqu'un, une personne ou l'entreprise, en porte la responsabilité. Une équipe qui écrit sa règle de relecture et nomme son responsable de publication couvre donc ce point. Côté moteurs de recherche, Google juge une page sur sa qualité, quel que soit l'outil employé ; le sujet est approfondi dans la formation ChatGPT SEO.",
        ],
      },
    ],
    table: {
      caption: "Du brief à la publication : ce que ChatGPT fait à chaque étape, ce que le rédacteur décide",
      headers: ['Étape', 'Ce que fait ChatGPT', 'Ce que décide le rédacteur'],
      rows: [
        ["Brief", "Pose les questions manquantes sur le lecteur, l'angle et les preuves", "L'angle et le message à retenir"],
        ["Plan", "Propose trois plans différents", "Le plan retenu, et ce qui en sort"],
        ["Premier jet", "Écrit section par section dans le projet de la voix maison", "Les exemples maison ajoutés, les généralités coupées"],
        ["Réécriture", "Raccourcit, change de registre, harmonise dans Word", "La version qui sonne juste"],
        ["Déclinaisons", "Adapte à la lettre d'information, au réseau social, à l'objet du mail", "Que chaque version garde les faits du texte source"],
        ["Vérification", "Liste toutes les affirmations vérifiables du texte", "La source de chacune, ou son retrait"],
        ["Publication", "Rien", "La relecture finale et la signature éditoriale"],
      ],
    },
    cas: {
      h3: "Cas pratique : la lettre d'information mensuelle d'un cabinet d'expertise comptable",
      contexte: "Imaginons la responsable de la communication d'un cabinet d'expertise comptable de quarante personnes. Chaque mois, elle envoie aux clients une lettre de trois sujets : une échéance fiscale ou sociale, une nouveauté réglementaire et un conseil de gestion. Les associés relisent, mais trouvent le ton trop administratif et redoutent l'erreur de date. Elle veut une méthode qui produise un premier jet dans la voix du cabinet et sécurise chaque date citée.",
      etapes: [
        "Créez un projet « Lettre clients », déposez-y les trois dernières lettres que les associés ont aimées et la charte du cabinet, puis écrivez les instructions de la voix.",
        "Pour chaque sujet, notez la source officielle que vous utiliserez (texte publié, page de l'administration) et déposez-la dans la conversation.",
        "Envoyez le prompt qui suit : trois plans arrivent avant toute rédaction, puis le sujet retenu est rédigé.",
        "Demandez la liste des affirmations vérifiables, contrôlez chaque date sur la source déposée, puis corrigez le texte dans Word grâce au panneau ChatGPT.",
        "Faites décliner la lettre en un message pour le réseau professionnel du cabinet et en un objet de mail, puis transmettez l'ensemble à l'associé qui signe.",
      ],
      prompt: "Tu rédiges avec moi la lettre d'information de novembre de notre cabinet d'expertise comptable, destinée à des dirigeants de TPE et de PME. La voix du cabinet est décrite dans les instructions du projet, et trois lettres passées servent d'exemples.\n\nSujet : l'échéance fiscale principale du mois, décrite dans le document officiel joint à cette conversation.\n\n1. Propose trois plans différents pour un texte de 250 mots, chacun avec un angle distinct (ce que le dirigeant risque, ce qu'il doit préparer, une erreur fréquente). Ne rédige rien d'autre et attends mon choix.\n\n2. Une fois le plan choisi, rédige le texte dans la voix du cabinet : phrases courtes, vouvoiement, aucun jargon sans explication, aucune formule d'introduction générale.\n\n3. Prends toutes les dates, tous les montants et tous les seuils dans le document joint, et nulle part ailleurs. Quand il te manque une donnée, laisse [à vérifier] à sa place.\n\n4. Termine par la liste numérotée de toutes les affirmations vérifiables du texte, avec pour chacune le passage du document qui la justifie.",
      resultat: "Vous obtenez trois angles possibles, un premier jet dans la voix du cabinet, des trous signalés plutôt que comblés, et une liste d'affirmations reliée à la source. La date et les montants se vérifient en deux minutes avant l'envoi aux associés. Le même projet sert chaque mois, et la lettre garde une voix stable, même quand la personne qui la prépare change.",
    },
    pieges: [
      {
        titre: "La citation d'expert que personne n'a prononcée",
        texte: "Demandez un avis d'expert pour illustrer un article, et ChatGPT peut le fabriquer, avec un nom et une fonction crédibles. Aucune citation ne part sans source identifiée, et les instructions du projet l'interdisent.",
      },
      {
        titre: "La déclinaison qui arrondit un chiffre",
        texte: "En raccourcissant un article pour un réseau social, ChatGPT transforme parfois « 38 % » en « près de 40 % » ou « en 2025 » en « l'an dernier ». Comparez les faits de chaque version à ceux du texte source.",
      },
      {
        titre: "Le guide qui vous envoie encore vers Canvas",
        texte: "Canvas a été retiré des modèles courants le 28 mai 2026. Les blocs d'écriture de la conversation et l'extension Word l'ont remplacé ; un support de formation qui en parle encore n'a pas été mis à jour.",
      },
      {
        titre: "Un texte d'information publié sans relecteur nommé",
        texte: "L'AI Act exige de signaler un texte d'intérêt public produit avec une IA, sauf relecture humaine sous une responsabilité éditoriale. Écrivez qui relit et qui signe, et conservez une preuve de chaque relecture.",
      },
    ],
  },
  audience: [
    {
      title: "Rédacteurs, chargés de contenu et de communication",
      desc: "Vous écrivez des articles, des pages, des lettres d'information et des communiqués. Vous apprenez à confier le premier jet à ChatGPT sans que la maison perde sa voix, puis à vérifier chaque fait avant de publier.",
    },
    {
      title: "Équipes marketing qui déclinent un même message",
      desc: "Un contenu source doit devenir une page, un mail, un message pour les réseaux. Vous apprenez à produire ces versions en gardant les mêmes faits, les mêmes engagements et le même ton.",
    },
    {
      title: "Experts et dirigeants qui signent des textes",
      desc: "Associés, responsables techniques ou dirigeants, vous publiez sous votre nom des tribunes, des notes ou des lettres. Vous apprenez à confier vos idées et vos exemples à ChatGPT pour obtenir un premier jet, puis à relire en auteur.",
    },
  ],
  useCases: [
    { icon: '🎯', title: "La voix de la maison réglée", desc: "Registre, vocabulaire, mots bannis et textes modèles réunis dans un projet, testés jusqu'à ce que le groupe ne distingue plus l'origine des textes." },
    { icon: '🗺', title: "Trois plans avant le texte", desc: "Un brief en cinq lignes, trois angles proposés, un choix tranché par l'auteur avant la première phrase." },
    { icon: '📝', title: "Premier jet section par section", desc: "Chaque partie écrite sur consigne, enrichie d'exemples de l'entreprise, débarrassée des généralités." },
    { icon: '🔁', title: "Déclinaisons fidèles", desc: "Un article transformé en lettre d'information, message de réseau et objet de mail, avec des faits identiques." },
    { icon: '🔍', title: "Passe de véracité", desc: "Toutes les affirmations vérifiables listées, reliées à leur source ou retirées avant publication." },
    { icon: '🧹', title: "Tics d'écriture traqués", desc: "Une grille de relecture qui repère les tournures typiques d'un texte généré et les remplace." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Régler la voix de la maison dans un projet ChatGPT",
      duration: '1h45',
      description: "Décrire une bonne fois la façon d'écrire de votre équipe, pour que ChatGPT la reprenne.",
      items: [
        "Compte et réglages : où vont les textes encore confidentiels, ce qu'un compte d'entreprise change",
        "Décrire une voix : registre, rythme, vocabulaire, mots bannis, adresse au lecteur",
        "Choisir quatre ou cinq textes modèles et les déposer dans le projet",
        "Le test d'attribution : textes de l'équipe et textes du projet mélangés",
      ],
      exercise: "Vous montez le projet de la voix de votre équipe et vous le soumettez au test d'attribution du groupe, puis vous corrigez les instructions sur ce qui l'a trahi.",
    },
    {
      day: 1,
      title: "Module 2 · Mener un texte du brief au premier jet",
      duration: '1h45',
      description: "Garder l'angle et la structure entre les mains de l'auteur.",
      items: [
        "Le brief en cinq lignes : lecteur, effet attendu, angle, preuves, longueur",
        "Trois plans demandés, un choisi, la raison notée",
        "Rédaction section par section, avec intervention de l'auteur entre deux",
        "Mode réflexion pour le plan et l'argumentation, mode instantané pour reformuler",
      ],
      exercise: "Vous menez du brief au premier jet un texte que vous devez publier dans le mois, sur un sujet apporté de votre service.",
    },
    {
      day: 1,
      title: "Module 3 · Réécrire, raccourcir et décliner sans déformer",
      duration: '1h45',
      description: "Transformer un texte pour un autre format, un autre public ou une autre langue en gardant le fond.",
      items: [
        "L'extension ChatGPT dans Word : reprendre un passage, réduire de moitié, harmoniser les intertitres",
        "Passer d'un registre expert à un registre grand public, ou de l'interne à l'externe",
        "Déclinaisons par canal : lettre d'information, réseau professionnel, objet de mail",
        "Traduction relue par une personne qui maîtrise la langue",
      ],
      exercise: "Vous déclinez le texte du module 2 en trois formats publiables, puis vous comparez leurs faits à ceux de la version source.",
    },
    {
      day: 1,
      title: "Module 4 · Vérifier, publier et fixer la règle de l'équipe",
      duration: '1h45',
      description: "Faire d'un premier jet un texte que l'entreprise peut signer, et organiser la relecture.",
      items: [
        "Passe de véracité : chiffres, dates, noms, citations, chacun relié à sa source",
        "Grille des tics d'écriture générée, appliquée à votre texte",
        "Transparence des textes d'information (AI Act, art. 50), responsable de publication, formation de l'équipe (art. 4)",
        "Règle de l'équipe : relecteur, signataire, textes relus à deux, plan des trente jours",
      ],
      exercise: "Vous faites passer votre texte en version publiable avec la grille complète, puis vous rédigez la règle de relecture de votre équipe.",
    },
  ],
  objectives: [
    "Le participant sait décrire la voix de son équipe dans un projet ChatGPT et la valider par un test d'attribution.",
    "Le participant sait écrire un brief de cinq lignes et choisir entre trois plans proposés avant toute rédaction.",
    "Le participant sait faire rédiger un texte section par section en y intégrant des exemples propres à l'entreprise.",
    "Le participant sait décliner un texte source en trois formats dont les faits restent identiques.",
    "Le participant sait faire lister les affirmations vérifiables d'un texte et relier chacune à sa source.",
    "Le participant sait repérer dans un texte les tournures typiques d'une écriture générée et les réécrire.",
  ],
  faq: [
    {
      q: "Quelle différence avec la formation ChatGPT SEO ?",
      a: "Cette journée porte sur l'écriture : la voix, le plan, le premier jet, la réécriture et la vérification des faits. La formation ChatGPT SEO, sur deux jours, traite du référencement : exports de la Search Console, pages que Google n'indexe pas, briefs construits sur les concurrents, visibilité dans ChatGPT Search. Une équipe contenu qui écrit pour le web suit souvent les deux, dans l'ordre qui correspond à sa priorité du moment. Le cadrage vous aide à choisir.",
    },
    {
      q: "Quelle différence avec la formation aux écrits professionnels ?",
      a: "La formation aux écrits professionnels couvre les écrits internes du quotidien (mails, comptes rendus, notes) avec plusieurs assistants. Cette journée vise les textes qui sortent de l'entreprise et engagent sa marque : articles, pages, lettres d'information, réponses publiques. Elle insiste sur la voix de la maison, les déclinaisons et la vérification avant publication, avec ChatGPT comme outil unique. Une équipe qui écrit beaucoup, en interne comme pour ses clients, gagne à suivre les deux.",
    },
    {
      q: "Google pénalise-t-il les textes écrits avec ChatGPT ?",
      a: "Google évalue l'utilité d'une page pour son lecteur, quel que soit l'outil qui a servi à l'écrire. Ses règles anti-spam visent en revanche la production en série de pages sans valeur dans le but de manipuler le classement, quelle que soit la technique utilisée. Un texte relu, enrichi de faits que l'entreprise est seule à connaître et écrit pour un lecteur précis ne tombe pas dans cette catégorie. La formation ChatGPT SEO approfondit ces règles.",
    },
    {
      q: "Faut-il signaler qu'un texte a été écrit avec ChatGPT ?",
      a: "Pour la plupart des textes d'entreprise, aucune règle ne l'impose. Le seul cas visé par l'AI Act, à son article 50 en vigueur depuis août 2026, est celui d'un texte rédigé ou modifié par une IA puis diffusé pour informer les citoyens sur une affaire d'intérêt public. Même alors, la mention devient inutile quand un humain a relu le texte et que quelqu'un en répond comme éditeur. Votre charte peut aller plus loin par choix. Le module 4 vous aide à écrire cette règle.",
    },
    {
      q: "Comment éviter que nos textes sonnent comme une machine ?",
      a: "Quatre gestes, travaillés pendant la journée, y suffisent : décrire et illustrer la voix de la maison dans un projet, choisir le plan avant toute rédaction, ajouter entre deux sections des exemples et des faits que seule l'entreprise possède, puis relire en traquant les tournures typiques d'un texte généré (incises entre tirets longs, fausses oppositions, énumérations par trois, conclusions passe-partout). Le test d'attribution du module 1 sert de mesure : quand le groupe ne distingue plus les textes de l'équipe de ceux du projet, la voix est réglée.",
    },
    {
      q: "La méthode fonctionne-t-elle avec un autre assistant que ChatGPT ?",
      a: "Oui. Le brief, le choix du plan, l'écriture section par section, les déclinaisons et la passe de véracité valent avec Gemini, Claude, Vibe (Mistral AI) ou Microsoft Copilot (anciennement Microsoft 365 Copilot). Seuls les réglages changent : l'équivalent du projet, l'intégration au traitement de texte. La journée se tient sur ChatGPT parce que vos rédacteurs l'utilisent déjà le plus souvent, mais le cadrage peut l'adapter à votre outil.",
    },
    {
      q: "Quelle offre ChatGPT faut-il pour suivre la journée ?",
      a: "Un compte Plus suffit pour toute la méthode. Un espace Business ajoute deux avantages pour une équipe : le projet de la voix maison se partage avec les collègues, et les textes encore confidentiels (annonces, résultats) ne servent par défaut à entraîner aucun modèle. Avec un compte personnel, décochez dans les contrôles des données la case qui autorise OpenAI à apprendre de vos échanges, avant d'y déposer un texte non publié. Nous vérifions vos comptes avant la journée.",
    },
    {
      q: "Combien coûte la journée, et peut-elle être financée ?",
      a: "Que vous soyez douze en intra ou seul avec le formateur, la journée coûte 1 980 € HT. La certification Qualiopi, que Masteria détient pour la catégorie actions de formation, autorise une demande auprès de l'OPCO de votre entreprise, examinée selon les règles de sa branche et les fonds qui lui restent. Le programme, objectifs et évaluation de chacun compris, et la convention vous sont remis pour le dossier.",
    },
  ],
  tarifs: {
    titre: "Le prix d'une journée de rédaction avec ChatGPT",
    paras: [
      "Pour 1 980 € HT, la journée inclut sa préparation. Quelques jours avant, vous nous transmettez trois ou quatre textes publiés que l'équipe juge réussis, votre charte éditoriale si elle existe et la liste des sujets à traiter dans le mois. Le formateur construit les ateliers sur ce matériau, et chacun quitte la salle avec le projet de la voix maison réglé et un texte prêt à publier.",
      "Prenons une équipe contenu de neuf personnes : rédacteurs web, chargée de la lettre d'information et responsable éditorial. La journée en intra leur revient à 220 € HT par personne. Un expert qui écrit sous son nom peut suivre la journée seul, au même prix, sur ses propres textes. Votre OPCO statue ensuite sur sa participation, à partir d'une demande envoyée avant la date de la journée.",
    ],
  },
  apres: {
    titre: "Après la journée, une chaîne de rédaction outillée pour votre équipe",
    texte: "Certaines équipes veulent aller au-delà de la méthode : une compétence partagée qui applique la voix maison et la grille des tics à chaque texte, ou un agent qui prépare chaque mois le premier jet de la lettre d'information à partir de vos sources validées. Masteria les construit avec votre équipe dans votre espace ChatGPT, en maintenant une relecture humaine avant toute publication. Cette mission est facturée au forfait une fois le cadrage fait ; comme tout travail de conseil et de développement, elle n'est pas finançable par votre OPCO.",
  },
  terrain: {
    titre: "Sur le terrain : une voix de marque écrite une fois pour tout un service",
    texte: "En septembre 2026, une interprofession agricole méridionale a réuni seize salariés pour trois jours avec Masteria : une plénière, puis des ateliers par métier. Lors de l'atelier marketing et communication du deuxième jour, le groupe a fixé une seule fois la voix de la marque, l'a placée dans un assistant commun au service, puis en a tiré des contenus déclinés en anglais et un calendrier éditorial. ChatGPT faisait partie des six assistants comparés en ouverture.",
    lien: '/etudes-de-cas-ia#mission-interprofession-agricole',
  },
  cta: {
    milieu: "Envoyez-nous trois textes dont votre équipe est fière : la journée part de votre voix et de vos sujets.",
    fin: {
      titre: "Préparons la journée de rédaction de votre équipe",
      texte: "Dites-nous qui écrit chez vous, pour quels supports et avec quelle offre ChatGPT. Vous recevez en retour un programme bâti sur vos textes et des dates possibles, en présentiel ou à distance.",
    },
  },
  liensAssocies: [
    { label: "Formation ChatGPT SEO, sur deux jours", href: '/formation-chatgpt-seo' },
    { label: "Écrits professionnels avec plusieurs assistants", href: '/formation-ia-ecrits-pro' },
    { label: "Formation au prompt engineering", href: '/formation-prompt-engineering' },
    { label: "ChatGPT pour la communication et les relations presse", href: '/formation-chatgpt-communication' },
    { label: "Formation IA pour les équipes communication", href: '/formation-ia-communication' },
  ],
  sources: [
    { name: "EUR-Lex : article 50 de l'AI Act, textes publiés pour informer le public", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { name: "Google Search Central, conseils sur l'usage de contenus générés par IA", url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content?hl=fr' },
    { name: "Règles anti-spam de Google, dont la production de pages en série", url: 'https://developers.google.com/search/docs/essentials/spam-policies?hl=fr' },
    { name: "Centre d'aide d'OpenAI, projets et instructions de projet", url: 'https://help.openai.com/en/articles/10169521-projects-in-chatgpt' },
    { name: "Notes de version de ChatGPT, dont la disparition de Canvas", url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes' },
    { name: "Notes de version Business d'OpenAI, extension ChatGPT pour Word", url: 'https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes' },
  ],
}
