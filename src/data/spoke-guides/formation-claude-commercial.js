// Contenu propre à /formation-claude-commercial (guide terrain, page propre). Rendu par SpokePage.
// Faits Claude vérifiés le 5 octobre 2026 : claude-facts.js, faits-claude.md, sources-metiers.json,
// centre d'aide et documentation d'Anthropic (liens dans `sources`). Le corps du guide ne cite
// aucun client ; le bloc `terrain` résume le cas anonymisé `distribution` (etudes-de-cas.js).
export default {
  slug: 'formation-claude-commercial',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  metaDesc: "Formation Claude pour les commerciaux : appels d'offres lus en entier, propositions, comptes rendus et relances, compétences partagées par vos référents.",
  resume: "La formation Claude pour les équipes commerciales apprend à faire lire un dossier d'appel d'offres en entier, à bâtir réponse et proposition, puis à préparer comptes rendus et relances avec des compétences écrites par vos référents. Comptez deux jours (14 heures), sur place ou en visioconférence, pour douze vendeurs au plus ou un seul, chaque journée valant 1 980 € HT. L'organisme, certifié Qualiopi, vous aide à solliciter votre OPCO selon sa branche.",
  enBref: [
    { label: 'Formation', value: "Claude pour la vente B2B, l'avant-vente et l'administration des ventes" },
    { label: 'Durée', value: "14 heures sur deux jours, à placer de préférence avant une date de remise d'offre" },
    { label: 'Formats', value: "Session intra pour une équipe de douze commerciaux au plus, ou coaching individuel, sur place ou en visioconférence" },
    { label: 'Tarif', value: "1 980 € HT facturés par journée de session, de deux à douze vendeurs" },
    { label: 'Financement', value: "Prise en charge possible par votre OPCO, l'organisme étant certifié Qualiopi ; nous montons la demande avec vous" },
    { label: 'Prérequis', value: "Une première expérience de réponse à consultation ou de proposition écrite ; un abonnement Claude payant, et Team ou Enterprise pour mettre les compétences en commun" },
  ],
  intro: "Un commercial B2B lit presque autant qu'il écrit : un dossier de consultation de deux cents pages, les notes d'un rendez-vous, l'historique d'un compte avant une relance. Claude absorbe un dossier de consultation complet dans une seule conversation et rédige en s'appuyant sur les pièces de l'entreprise, pour une réponse, un compte rendu ou un courriel de suivi. Ce guide décrit comment une équipe commerciale s'organise autour de ces capacités, avec des compétences écrites et testées par quelques référents, puis utilisées par tous.",
  guide: {
    kicker: "Guide terrain",
    h2: "Claude parcourt tout le DCE, et vos référents écrivent la méthode de l'équipe",
    lead: "Beaucoup d'offres perdues butent sur une exigence noyée dans un cahier des clauses techniques, lue trop vite la veille de la remise. Claude peut garder sous la main le règlement, les cahiers et leurs annexes dans une même conversation, et relever chaque exigence avec l'article qui la porte. Le reste du travail commercial obéit à la même logique : Claude part de vos documents, et l'équipe inscrit dans des compétences sa manière de répondre, de résumer un rendez-vous ou de relancer.",
    sections: [
      {
        h3: "Un dossier de consultation entier reste lisible dans une même conversation",
        paras: [
          "Le DCE, ou dossier de consultation des entreprises, réunit un règlement qui fixe les règles de la mise en concurrence, un CCAP pour les clauses administratives, un CCTP pour les clauses techniques, un bordereau des prix et diverses annexes. Avec un abonnement payant, les modèles actuels de Claude acceptent jusqu'à 1 million de tokens au sein d'une conversation, le token étant le fragment de mot que traite le modèle : la plupart des dossiers y tiennent. Jointes ensemble, ces pièces sont lues en intégralité. Claude peut alors relever chaque exigence avec sa pièce et son article, repérer qu'un délai du CCTP contredit celui du CCAP, et énumérer les documents à fournir.",
          "Cette lecture complète suppose que les pièces soient jointes à la conversation. Un projet garni de nombreux fichiers procède autrement : à l'approche de la taille du contexte, Claude se met à fouiller le projet par extraits (c'est le mode RAG, pour génération augmentée par recherche) au lieu d'en lire chaque page, et l'interface le signale. Gardez donc le DCE dans la conversation pour la matrice de conformité, et réservez le projet aux mémoires techniques gagnés, aux références et aux fiches produits.",
          "Un dossier arrivé par courriel se télécharge avant d'être déposé : le connecteur Gmail de Claude ne lit que les métadonnées des pièces jointes, sans en ouvrir le contenu. Chaque pièce déposée doit rester sous la barre des 30 Mo.",
        ],
      },
      {
        h3: "Quelques référents écrivent les compétences, toute l'équipe s'en sert",
        paras: [
          "Une compétence (Skill) se présente comme un dossier d'instructions, avec au besoin des modèles de documents et des scripts, que Claude charge lorsqu'une demande s'y rapporte. Son fichier SKILL.md s'ouvre sur deux champs obligatoires, un intitulé limité à 64 caractères et un résumé limité à 200 ; c'est ce résumé que Claude consulte pour savoir quand s'en servir. Une équipe commerciale y range sa trame de mémoire technique, sa grille pour décider de répondre ou non, ou le format de ses comptes rendus.",
          "Sur Team et Enterprise, deux ou trois référents écrivent et testent ces compétences, puis les partagent à des collègues nommés. Les destinataires les activent et s'en servent sans pouvoir en modifier le contenu, et chaque nouvelle version leur parvient à l'utilisation suivante. Pour l'entreprise entière, le référent verse la compétence au répertoire de compétences de l'entreprise ; quand une revue est exigée, un propriétaire la valide avant publication et choisit si elle sera proposée, installée par défaut ou obligatoire.",
          "Un référent équipé d'un Mac peut aussi filmer son écran pendant qu'il prépare une réponse type, en commentant à voix haute : Cowork en tire une proposition de compétence, à relire avant de l'enregistrer. Cette fonction concerne les offres Pro, Max et Team. Les compétences activées suivent ensuite le commercial dans Claude pour Word, PowerPoint, Excel et Outlook, où la touche / affiche celles qui conviennent à l'application ouverte. Pour les consultations, une compétence d'équipe réunit en général ces éléments :",
        ],
        list: [
          "La grille de décision : critères de l'acheteur, références exigées, capacité de l'équipe à tenir les délais",
          "La trame du mémoire technique, chapitre par chapitre, avec les formulations validées par la direction",
          "La règle de citation : chaque engagement renvoie à l'article du dossier qu'il satisfait",
          "La liste des pièces administratives à joindre, avec leur date de validité",
        ],
      },
      {
        h3: "Après le rendez-vous, Claude prépare compte rendu et relance, le commercial les envoie",
        paras: [
          "Une transcription de visioconférence ou des notes prises sur le moment suffisent. Claude en tire les décisions, les objections, les prochaines étapes avec leur responsable, et un projet de courriel de suivi. Le plugin Sales d'Anthropic, un ensemble de compétences et de commandes installable sur les offres payantes, en fait une commande, /call-summary, qui rend le résumé structuré, les actions et le brouillon de relance.",
          "L'envoi passe par vos outils de messagerie. Le connecteur Gmail rédige, et il peut envoyer, répondre ou transférer après votre accord, sollicité d'office ; dans les offres d'équipe, c'est le propriétaire de l'organisation qui décide si ces actions peuvent se passer de validation. Claude pour Outlook, en bêta, laisse chaque réponse à l'état de brouillon dans la messagerie et n'expédie jamais rien de lui-même.",
          "Depuis le 15 septembre 2026, le plugin Salesforce in Claude, en bêta pour les abonnés payants dont Salesforce a validé l'inscription, ouvre à Claude les comptes, les opportunités et le pipeline de chaque vendeur, dans les limites de ses droits Salesforce. Il apporte 37 compétences prêtes à l'emploi, de la préparation d'un appel jusqu'à l'actualisation des fiches du CRM, et Claude soumet par défaut chaque modification au commercial avant de l'écrire. L'administrateur connecte Salesforce une fois pour l'organisation et choisit les groupes qui reçoivent le plugin. HubSpot publie de son côté un connecteur pour Claude, qui consulte et met à jour contacts, entreprises et affaires selon les droits de l'utilisateur.",
        ],
      },
      {
        h3: "La proposition prend forme dans le modèle Word de l'entreprise",
        paras: [
          "Claude pour Word remplit votre modèle de proposition en respectant ses styles de titres, sa numérotation et ses tableaux. En mode suivi des modifications, chaque ajout apparaît en marque de révision, que le rédacteur valide ou supprime au cas par cas. Le complément traite aussi les fils de commentaires : il corrige le passage visé, puis répond au commentaire en expliquant ce qu'il a changé. Quand un client renvoie le contrat annoté, il résume les modifications de l'autre partie et signale celles qui méritent une discussion.",
          "Claude pour PowerPoint construit la présentation de soutenance à partir du masque des diapositives de l'entreprise, et transforme une liste à puces en schéma ou en graphique natif que vous retouchez ensuite. Anthropic déconseille ces compléments pour un livrable remis au client sans relecture humaine. Sa documentation alerte aussi sur les fichiers venus de l'extérieur, comme un dossier téléchargé ou un document d'une autre partie, qui peuvent cacher des instructions destinées à l'assistant.",
          "Le chiffrage reste dans votre outil de devis. Claude peut vérifier que chaque ligne du bordereau des prix porte une quantité et une unité cohérentes avec le CCTP, sans jamais avancer de prix.",
        ],
      },
    ],
    table: {
      caption: "Du dossier de consultation à la relance : à chaque étape son outil Claude et son contrôle",
      headers: ["Étape commerciale", "Fonction de Claude", "Ce que vous contrôlez"],
      rows: [
        ["Décider de répondre ou non", "Conversation contenant le DCE complet, plus la compétence de décision", "Les critères de l'acheteur, relus dans le règlement de la consultation"],
        ["Dresser la matrice de conformité", "Exigences citées avec leur pièce et leur article", "Un échantillon d'exigences retrouvé dans les documents"],
        ["Rédiger le mémoire technique", "Projet d'équipe avec les mémoires gagnés et la compétence de trame", "Chaque engagement tenable par l'exploitation"],
        ["Mettre en page la proposition", "Claude pour Word dans le modèle maison, suivi des modifications actif", "Les révisions acceptées une par une"],
        ["Préparer la soutenance", "Claude pour PowerPoint sur le masque de l'entreprise", "Des chiffres identiques dans l'offre, le mémoire et les slides"],
        ["Résumer un rendez-vous", "Transcription ou notes, commande /call-summary du plugin Sales", "Décisions et échéances confirmées par les participants"],
        ["Relancer le client", "Brouillon dans Gmail ou dans Claude pour Outlook", "Destinataires et pièces jointes, avant l'envoi"],
      ],
    },
    cas: {
      h3: "Cas pratique : un marché public de 230 pages à qualifier avant le comité de jeudi",
      contexte: "Prenons la responsable des offres d'une société de propreté de 300 salariés. Une communauté d'agglomération publie un marché d'entretien de 42 bâtiments, et le dossier de consultation compte 230 pages : règlement, CCAP, CCTP avec une fiche par bâtiment, bordereau des prix et cadre de mémoire technique. Le comité qui décide de répondre se réunit jeudi, et les offres sont dues dans quinze jours.",
      etapes: [
        "Ouvrez une conversation hors du projet commercial et déposez toutes les pièces du DCE, téléchargées sur le profil d'acheteur dans leur dernière version.",
        "Citez la compétence de décision de l'équipe dans votre message, puis ajoutez le prompt suivant.",
        "Pointez dix exigences prises au hasard dans le CCTP et vérifiez la pièce et l'article indiqués.",
        "Confiez la colonne « réponse prévue » aux responsables d'exploitation, qui savent ce que les équipes peuvent tenir sur chaque site.",
        "Présentez au comité la synthèse et les points bloquants, puis passez au mémoire dans le projet commercial, qui contient vos mémoires gagnés.",
      ],
      prompt: "Notre comité décide jeudi s'il répond à un marché public d'entretien de 42 bâtiments. Les pièces jointes forment le dossier de consultation complet : règlement de la consultation, CCAP, CCTP et ses fiches par bâtiment, bordereau des prix unitaires, cadre de mémoire technique.\n\nLis toutes les pièces en entier avant de répondre.\n\n1. Matrice de conformité : un tableau à raison d'une ligne par exigence, dans l'ordre des documents. Colonnes : numéro, exigence résumée en une phrase, citation exacte, pièce, article ou page, caractère obligatoire ou facultatif, colonne « réponse prévue » laissée vide.\n\n2. Pièces à remettre : chaque document réclamé au candidat, avec la page du règlement qui le réclame.\n\n3. Critères de jugement : les critères et leur pondération, tels qu'écrits dans le règlement.\n\n4. Contradictions : les points où deux pièces se contredisent (délai, fréquence de passage, pénalité), avec les deux citations.\n\n5. Synthèse pour le comité de jeudi : une page qui liste les exigences que nous risquons de ne pas tenir, sans décider à notre place.\n\nSi une information manque dans le dossier, écris « absent du DCE » au lieu de la supposer. Livre la matrice dans un fichier Excel et la synthèse dans un document Word.",
      resultat: "Le résultat comprend une matrice de conformité citée, la liste des pièces à remettre, les critères pondérés, les contradictions entre pièces et une synthèse tenant sur une page pour les membres du comité. Avant de la présenter, comptez à la main les exigences d'un chapitre du CCTP pour vérifier qu'aucune n'a été sautée, et relisez la liste des pièces : un document manquant peut rendre l'offre irrégulière. Une fois validée, la matrice devient le plan du mémoire technique.",
    },
    pieges: [
      {
        titre: "Une exigence échappe à la matrice parce que Claude a cherché au lieu de lire",
        texte: "Dans un projet volumineux, Claude interroge ses fichiers par recherche d'extraits et peut manquer une exigence isolée dans une annexe. Construisez la matrice dans une conversation où le DCE est déposé en entier, et comptez les exigences d'un chapitre pour contrôler l'exhaustivité.",
      },
      {
        titre: "Le nom d'un ancien acheteur reste dans le mémoire",
        texte: "Un mémoire construit à partir de réponses gagnées hérite parfois d'un nom de site, d'un effectif ou d'un délai propres à un autre marché. Demandez à Claude la liste des noms propres, des chiffres et des dates du mémoire, puis comparez-les un à un au dossier en cours.",
      },
      {
        titre: "Une retouche de compétence modifie le travail de toute l'équipe",
        texte: "Les collègues qui utilisent une compétence partagée reçoivent la nouvelle version dès leur utilisation suivante. Une correction faite un soir de remise change donc les réponses de tous le lendemain. Fixez un circuit : un référent modifie, un second teste sur un ancien dossier, puis la version est diffusée.",
      },
      {
        titre: "Une pièce oubliée suffit à faire écarter l'offre",
        texte: "Une offre incomplète, ou qui méconnaît les exigences des pièces du marché, est irrégulière, et l'acheteur doit l'écarter (code de la commande publique, articles L2152-1 et L2152-2) ; une régularisation n'intervient que s'il choisit de l'ouvrir. Claude établit la liste des pièces exigées ; au moment du dépôt sur le profil d'acheteur, une seconde personne la coche pièce par pièce.",
      },
    ],
  },
  audience: [
    {
      title: "Commerciaux et ingénieurs d'affaires",
      desc: "Rendez-vous, propositions et relances rythment votre semaine. Claude vous livre un premier jet du compte rendu, du courriel de suivi et de la proposition, en partant de vos notes et des modèles maison ; vous apprenez à le cadrer puis à le corriger.",
    },
    {
      title: "Avant-vente et réponse aux appels d'offres",
      desc: "Vous lisez des dossiers de consultation de plusieurs centaines de pages sous la contrainte d'une date de remise. Vous apprenez à faire dresser une matrice de conformité citée, puis à bâtir le mémoire à partir de vos réponses gagnées.",
    },
    {
      title: "Administration des ventes et référents d'équipe",
      desc: "Vous tenez les modèles, les conditions générales et les pièces administratives. Vous apprenez à écrire et à partager les compétences de l'équipe, et à faire comparer une commande reçue au devis signé.",
    },
  ],
  useCases: [
    {
      icon: '📋',
      title: "DCE lus pièce après pièce, sans en sauter une",
      desc: "Règlement, CCAP, CCTP et annexes déposés ensemble ; chaque exigence relevée avec sa pièce et son article.",
    },
    {
      icon: '✅',
      title: "Matrice de conformité citée",
      desc: "Un tableau Excel des exigences, complété des contradictions entre pièces et de la liste des documents à remettre.",
    },
    {
      icon: '📝',
      title: "Mémoires et propositions dans le modèle maison",
      desc: "Claude pour Word remplit le modèle de l'entreprise, et chaque ajout reste visible en suivi des modifications.",
    },
    {
      icon: '🎤',
      title: "Comptes rendus de rendez-vous",
      desc: "Décisions, objections et prochaines étapes extraites d'un enregistrement transcrit ou de notes prises en rendez-vous, chacune avec son responsable.",
    },
    {
      icon: '✉️',
      title: "Relances prêtes à relire",
      desc: "Des brouillons de courriels dans Gmail ou Outlook, que le commercial relit puis envoie lui-même.",
    },
    {
      icon: '🧩',
      title: "Compétences de l'équipe",
      desc: "Trame de mémoire, grille de décision et format de compte rendu écrits par les référents, partagés à tous les vendeurs.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Repérer ce que Claude lit, conserve et transmet",
      duration: "1h30",
      description: "Poser les repères avant d'ouvrir le premier dossier de consultation.",
      items: [
        "1 million de tokens par conversation : la place qu'occupe un DCE dans la fenêtre de Claude",
        "Conversation ou projet : lecture intégrale ou recherche d'extraits",
        "Abonnements et paramètres : entraînement, mémoire, partage des projets et des compétences",
        "Ce que voient les connecteurs Gmail, Outlook et CRM",
      ],
      exercise: "Vous déposez un dossier de consultation récent et demandez les dix exigences les plus contraignantes, chacune avec son article.",
    },
    {
      day: 1,
      title: "Module 2 · Décortiquer un dossier de consultation",
      duration: "2h",
      description: "Passer de deux cents pages à une matrice exploitable avant la réunion de décision.",
      items: [
        "Pièces du DCE et ordre de lecture",
        "Matrice de conformité citée, exigences obligatoires et facultatives",
        "Contradictions entre pièces et questions écrites à adresser à l'acheteur",
        "Critères de jugement, pondération et pièces à remettre",
      ],
      exercise: "Vous dressez la matrice d'un appel d'offres auquel votre entreprise a déjà répondu, puis la comparez à la réponse envoyée.",
    },
    {
      day: 1,
      title: "Module 3 · Écrire le mémoire technique et la proposition",
      duration: "2h",
      description: "Rédiger vite sans recopier les erreurs des dossiers précédents.",
      items: [
        "Projet d'équipe : mémoires gagnés, références, fiches produits",
        "Trame chapitre par chapitre, reliée aux critères de jugement",
        "Claude pour Word : modèle maison, styles, suivi des modifications",
        "Contrôle des noms propres, chiffres et dates hérités d'anciens dossiers",
      ],
      exercise: "Vous rédigez deux chapitres d'un mémoire à partir de vos réponses gagnées et en vérifiez les noms propres et les chiffres.",
    },
    {
      day: 1,
      title: "Module 4 · Préparer la soutenance devant l'acheteur",
      duration: "1h30",
      description: "Arriver à l'oral avec des slides cohérentes et les réponses aux questions probables.",
      items: [
        "Claude pour PowerPoint sur le masque de diapositives de l'entreprise",
        "Schémas et graphiques modifiables tirés d'une liste à puces",
        "Questions probables de l'acheteur, déduites des critères de jugement",
        "Mêmes chiffres dans l'offre, le mémoire et les slides",
      ],
      exercise: "Vous construisez les cinq slides de soutenance d'une offre récente et la liste des dix questions que l'acheteur posera sans doute.",
    },
    {
      day: 2,
      title: "Module 5 · Préparer et résumer un rendez-vous",
      duration: "1h30",
      description: "Entrer en réunion avec l'historique du compte, en sortir avec un compte rendu daté.",
      items: [
        "Préparation nourrie par l'historique du compte et les derniers échanges",
        "Compte rendu tiré d'une transcription ou de notes : décisions, objections, échéances",
        "Commande /call-summary du plugin Sales",
        "CRM : connecteur HubSpot, plugin Salesforce in Claude, validation avant écriture",
      ],
      exercise: "Vous reprenez les notes de votre dernière rencontre client, en tirez un compte rendu et une liste d'actions, puis comparez avec ce que vous aviez rédigé à l'époque.",
    },
    {
      day: 2,
      title: "Module 6 · Relancer au bon moment et avec les bons éléments",
      duration: "2h",
      description: "Faire préparer chaque relance par Claude, garder l'envoi entre les mains du commercial.",
      items: [
        "Relance rédigée à partir du compte rendu et de la proposition envoyée",
        "Brouillons dans Gmail et dans Claude pour Outlook",
        "Validation avant envoi et paramètres de l'organisation",
        "Prospection par courriel : information du destinataire et droit d'opposition",
      ],
      exercise: "Vous préparez la séquence de relance d'une proposition restée sans réponse, du premier rappel au point d'étape.",
    },
    {
      day: 2,
      title: "Module 7 · Écrire les compétences de l'équipe",
      duration: "2h",
      description: "Transformer la meilleure façon de faire d'un référent en outil commun.",
      items: [
        "Anatomie d'une compétence : SKILL.md, nom, description, modèles joints",
        "Trois compétences commerciales : décision de répondre, trame de mémoire, compte rendu",
        "Enregistrer une compétence en filmant son écran (Cowork sur Mac, offres Pro, Max et Team)",
        "Usage dans Word, PowerPoint et Outlook avec la touche /",
      ],
      exercise: "En binôme, vous écrivez la compétence de compte rendu de l'équipe commerciale, puis la testez sur trois rendez-vous passés.",
    },
    {
      day: 2,
      title: "Module 8 · Organiser le réseau de référents",
      duration: "1h30",
      description: "Décider qui écrit, qui teste et qui publie les compétences commerciales.",
      items: [
        "Partage en lecture seule, groupes, publication au catalogue de l'organisation",
        "Circuit de modification : un référent retouche, un second teste",
        "Données clients et prix : ce qui entre dans Claude, ce qui reste dans le CRM et l'outil de devis",
        "Suivi de l'usage et revue trimestrielle des compétences",
      ],
      exercise: "Vous rédigez la charte des référents : qui écrit, qui teste, qui publie, et à quel rythme les compétences sont revues.",
    },
  ],
  objectives: [
    "Le participant sait faire relever par Claude chaque exigence d'un DCE, avec la pièce et l'article qui la portent.",
    "Le participant sait expliquer pourquoi une matrice de conformité se construit dans une conversation qui contient tout le dossier.",
    "Le participant sait rédiger un chapitre de mémoire technique dans le modèle Word de l'entreprise et repérer les éléments hérités d'anciens dossiers.",
    "Le participant sait transformer la transcription d'un rendez-vous en compte rendu daté et en brouillon de relance.",
    "Le participant sait concevoir une compétence commerciale puis l'éprouver sur un dossier passé.",
    "Le participant sait partager une compétence en lecture seule et décrire comment ses mises à jour atteignent l'équipe.",
  ],
  faq: [
    {
      q: "Claude peut-il lire un DCE de plusieurs centaines de pages ?",
      a: "Oui, avec un abonnement payant : les modèles actuels lisent jusqu'à 1 million de tokens dans une même conversation, et Anthropic estime à quelque 500 pages ce que représentent 200 000 tokens, de quoi couvrir la plupart des dossiers de consultation. Chaque pièce doit peser moins de 30 Mo. Déposez le dossier dans la conversation, car un projet surchargé de fichiers passe en recherche d'extraits.",
    },
    {
      q: "Claude peut-il mettre à jour notre CRM après un rendez-vous ?",
      a: "Avec Salesforce, oui : le plugin Salesforce in Claude, en bêta depuis le 15 septembre 2026, propose des mises à jour d'opportunités qu'il n'écrit, par défaut, qu'après validation du vendeur, et l'accès à cette bêta passe par une inscription acceptée par Salesforce. HubSpot publie un connecteur pour Claude. Pour un autre CRM, il faut un connecteur MCP, du nom du protocole ouvert qui relie les assistants aux logiciels, fourni par l'éditeur ou développé pour vous.",
    },
    {
      q: "Claude envoie-t-il nos relances à notre place ?",
      a: "Il peut le faire par le connecteur Gmail, qui demande votre accord par défaut avant chaque envoi. Claude pour Outlook, en bêta, s'en tient aux brouillons. Gardez la validation manuelle pour tout courriel adressé à un client ou à un acheteur ; la formation en fait une règle d'équipe.",
    },
    {
      q: "Comment diffuser à tous nos vendeurs la méthode maison pour répondre aux consultations ?",
      a: "Par des compétences. Sur Team et Enterprise, l'auteur partage une compétence, sans droit de modification, à des collègues désignés, ou la verse au catalogue de l'organisation, avec une revue par un propriétaire si l'organisation l'exige. Un projet partagé complète le dispositif pour les documents de référence : mémoires gagnés, références, fiches produits.",
    },
    {
      q: "Nos fichiers clients et nos grilles de prix servent-ils à entraîner Claude ?",
      a: "Pas par défaut dans les offres Team et Enterprise. Exception notable : la conversation pour laquelle un utilisateur clique sur l'icône du pouce, que l'éditeur conserve et peut exploiter. Un abonné individuel décide de son côté dans ses paramètres de confidentialité. Vos grilles de prix et de remises, elles, restent dans l'outil de devis.",
    },
    {
      q: "Claude peut-il chiffrer notre offre ?",
      a: "Le chiffrage reste dans votre outil de devis, où vivent vos coûts et vos marges. Claude contrôle la cohérence des quantités et des unités du bordereau avec le CCTP, et signale les lignes à compléter. Une compétence de cotation reliée à votre base articles relève d'un projet sur mesure, construit après la formation.",
    },
    {
      q: "Peut-on s'entraîner sur nos derniers appels d'offres ?",
      a: "Oui. Les ateliers partent d'un dossier de consultation récent, de votre modèle de proposition et de notes de rendez-vous, déposés dans votre espace Claude ou remplacés par des versions anonymisées si votre règle interne l'impose.",
    },
    {
      q: "Une force de vente peut-elle faire financer ces deux jours par son OPCO ?",
      a: "Les OPCO financent ce type de session suivant les règles propres à chaque branche, et Masteria possède la certification Qualiopi qui rend votre dossier recevable. Une équipe de deux à douze vendeurs et un commercial seul paient le même prix journalier, 1 980 € HT. Nous vous remettons le programme détaillé ainsi que la convention, pièces que l'OPCO réclame.",
    },
  ],
  tarifs: {
    titre: "Ce que comprend le prix pour une équipe commerciale",
    paras: [
      "Le prix couvre la préparation sur vos pièces : en amont, le formateur étudie un dossier de consultation récent, votre modèle de proposition et quelques comptes rendus anonymisés, puis construit les ateliers à partir de cette matière. Les supports, les prompts adaptés à vos offres et les trois compétences écrites pendant le module 7 restent acquis à l'équipe.",
      "Exemple : une direction commerciale réunit quatre commerciaux, trois personnes de l'avant-vente, deux de l'administration des ventes et son directeur, soit dix participants. Pour ces dix personnes, la facture des deux journées en intra s'établit à 3 960 € HT, soit 396 € HT par tête. Formé seul, un vendeur règle 1 980 € HT la journée. La certification Qualiopi obtenue par Masteria permet de saisir votre OPCO d'une demande de financement, qu'il tranche d'après les règles de votre branche.",
    ],
  },
  apres: {
    titre: "Après la formation, des outils commerciaux à votre mesure",
    texte: "Masteria peut ensuite développer pour votre équipe commerciale un outil sur mesure : une compétence de cotation qui interroge votre base articles, un agent qui prépare la matrice de conformité dès qu'un dossier de consultation est téléchargé, ou un assistant de relance relié à votre CRM qui propose chaque matin les devis à relancer, avec le dernier échange et le montant en attente. Chaque outil fonctionne sous vos règles : données autorisées, sources citées et validation par le commercial avant tout envoi au client.",
  },
  cta: {
    milieu: "Envoyez-nous un dossier de consultation récent : les ateliers des deux jours partiront de ce dossier.",
    fin: {
      titre: "Partons de votre prochain appel d'offres",
      texte: "Dites-nous quels marchés votre équipe vise, quels modèles elle utilise et de quel abonnement Claude elle dispose. Nous revenons avec un programme bâti autour de vos marchés et un calendrier compatible avec vos prochaines remises.",
    },
  },
  terrain: {
    titre: "Sur le terrain : dix référents commerciaux et onze compétences Claude",
    texte: "Le cas se passe chez un distributeur B2B de matériel informatique, rattaché à un groupe européen. En juin 2026, Masteria y a formé dix référents sur deux jours. Chacun est reparti avec une compétence Claude bâtie sur son propre flux de travail, et onze ont été construites avec eux : cotation à partir du courriel d'un client, cahiers des charges traités avec l'appui de l'ERP, relance des devis, prospection, suivi des stocks. La relance des devis avait été éprouvée sur de vrais devis avant la session, et la direction relit chaque compétence avant diffusion. Une fois les données de démonstration remplacées par celles de l'entreprise, les autres collaborateurs recevront ces compétences entre octobre et décembre 2026.",
    lien: '/etudes-de-cas-ia#distribution',
  },
  liensAssocies: [
    { label: "Répondre aux appels d'offres avec l'IA : méthode et limites", href: '/blog/ia-pour-repondre-appels-doffres' },
    { label: "Formation IA des équipes commerciales, tous assistants", href: '/formation-ia-commercial' },
    { label: "Un agent commercial IA construit sur vos outils", href: '/agent-commercial-ia' },
    { label: "Missions documentées : formations, conseil et outils construits", href: '/etudes-de-cas-ia' },
  ],
  avisPriorite: ['Claude', "appel d.offre", 'commerci|vente|devis'],
  sources: [
    { name: "Anthropic : le plugin Salesforce in Claude (15 septembre 2026)", url: "https://claude.com/blog/salesforce-in-claude" },
    { name: "Aide Claude : utiliser, partager et publier une compétence", url: "https://support.claude.com/en/articles/12512180-use-skills-in-claude" },
    { name: "Aide Claude : écrire ou enregistrer une compétence personnalisée", url: "https://support.claude.com/en/articles/12512198-how-to-create-custom-skills" },
    { name: "Aide Claude : le mode RAG des projets volumineux", url: "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects" },
    { name: "Documentation Anthropic : Claude pour Word", url: "https://claude.com/docs/office-agents/word" },
    { name: "Aide Claude : connecteurs Gmail, Agenda et Drive", url: "https://support.claude.com/en/articles/10166901-use-google-workspace-connectors" },
    { name: "Anthropic : plugin Sales pour Claude", url: "https://claude.com/marketplace/plugins/sales" },
    { name: "Code de la commande publique, examen des offres, articles L2152-1 et L2152-2 (Légifrance)", url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000037701019/LEGISCTA000037703643/" },
  ],
}
