// Contenu propre à /formation-copilot-powerpoint (page propre, format Sprint de 3 heures). Rendu par SpokePage.
// Créé le 23/10/2026. Intitulé catalogue : « 3 h chrono pour apprendre à utiliser Copilot dans PowerPoint ».
// Faits vérifiés le 23 octobre 2026 (liens dans `sources`) :
// - Microsoft Learn, vue d'ensemble de Copilot Chat (mise à jour le 21/10/2026) : trois mentions affichées dans
//   PowerPoint, Microsoft 365 Copilot (Premium ou Pro) = licence, (Basic) = accès standard sans licence,
//   Copilot Chat (Basic) = pas de Copilot dans Word, Excel, PowerPoint et OneNote ; expérience variable selon la
//   licence et la configuration du locataire.
// - Microsoft Learn, module « Build effective presentations with AI » (20/08/2026) : modes Allow editing et
//   Chat only, plan validé avant le deck, jusqu'à cinq fichiers cités avec « / » ou le trombone (Word, PDF, TXT,
//   Excel en préversion, Loop), droits d'accès requis, options de réécriture, Explain, images créées, bibliothèque
//   de ressources de l'organisation (SharePoint OAL ou Templafy), résumé avec renvois aux diapositives, notes de
//   l'orateur, Speaker Coach en anglais seulement, traduction dans une nouvelle copie (notes comprises, texte des
//   images non traduit, enregistrement manuel sous Windows et Mac), agent Idea Coach inclus dans Copilot Chat.
// - Support Microsoft (oct. 2026) : « Modifier avec Copilot dans PowerPoint » (Windows, Mac, web ; ajout et
//   réorganisation de diapositives, images, résumé ; choix de modèles Claude ou ChatGPT ; compétences Revoir cette
//   présentation, Visualiser cette diapositive, Préparation aux questions ; kit de marque réservé à la licence ;
//   droits et consentement pour les images importées) ; création d'une présentation (sélection d'un kit de marque,
//   questions de Copilot, Word de moins de 24 Mo avec styles) ; kits de marque (licence Premium, création
//   restreignable, modèles créés dans PowerPoint pour Windows ou Mac) ; résumé (environ 40 000 mots) ; notes de
//   l'orateur (onglet Affichage, moins de 50 diapositives) ; FAQ (.ppt/.pptx, connexion Internet, PDF réservé à la
//   licence, images sous licence Microsoft ou générées, qualité la plus haute en anglais) ; Concepteur PowerPoint
//   devenu « Suggestions de conception ».
// Retiré le 23/10 : licence exigée pour réécriture, traduction et notes, et seuils de traduction (MC1243550),
//   seule source une copie tierce du centre de messages.
// Non écrit faute de source Microsoft publique : le retrait de Copilot dans PowerPoint pour les comptes sans
// licence des organisations de plus de 2 000 postes (avril 2026, messages MC1253858 et MC1253863).
// Aucun prix de licence, aucun pourcentage de gain. Cas terrain : mission `assistanat-direction`.
export default {
  slug: 'formation-copilot-powerpoint',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-23',
  updatedLabel: 'Faits vérifiés le 23 octobre 2026',
  h1: "Formation Copilot PowerPoint : 3 heures pour construire vos présentations avec l'IA",
  metaTitle: "Formation Copilot PowerPoint en 3 heures | Masteria",
  metaDesc: "Formation Copilot PowerPoint en 3 h : créer un deck depuis un document, sur le modèle de l'entreprise, le traduire et le vérifier. Dès 1 980 € HT.",
  keywords: "formation copilot powerpoint, copilot powerpoint, créer une présentation avec copilot, copilot powerpoint modèle d'entreprise, copilot powerpoint template, copilot powerpoint traduire, copilot powerpoint designer, formation powerpoint ia",
  resume: "Cette formation Copilot PowerPoint dure trois heures. Chaque participant y construit une présentation de son poste à partir d'un document qu'il possède déjà, dans le modèle de son entreprise, puis la retouche, prépare ses notes d'orateur et contrôle chaque chiffre avant de la montrer. Elle se déroule dans PowerPoint pour Windows, pour Mac ou sur le web, avec le niveau d'accès que l'entreprise a ouvert : la licence Microsoft Copilot (anciennement Microsoft 365 Copilot) ou l'accès standard. Elle se tient en salle chez vous ou en visioconférence, et son prix démarre à 1 980 € HT, identique pour un participant seul ou pour une équipe qui ne dépasse pas douze personnes.",
  enBref: [
    { label: 'Formation', value: "3 h chrono pour apprendre à utiliser Copilot dans PowerPoint, du document source au deck prêt à présenter" },
    { label: 'Durée', value: "Trois heures, matin ou après-midi, en cinq séquences menées sur un vrai sujet de présentation" },
    { label: 'Outil', value: "Copilot dans PowerPoint, avec la licence Microsoft Copilot ou la mention Basic, selon ce que votre organisation a ouvert" },
    { label: 'Tarif', value: "Dès 1 980 € HT la séance ; la préparation sur vos documents se chiffre à part, au devis" },
    { label: 'Financement', value: "Masteria est certifié Qualiopi ; votre OPCO statue sur la prise en charge d'après les critères de sa branche" },
    { label: 'Prérequis', value: "Savoir ouvrir, modifier et enregistrer une présentation ; venir avec un document Word ou PDF à transformer en deck" },
  ],
  intro: "Une présentation commence rarement par une page blanche. Elle part d'un rapport Word, d'une note PDF ou d'un tableau Excel, et elle doit finir dans le modèle de l'entreprise, avec des chiffres justes. Copilot dans PowerPoint sait faire ce trajet : il bâtit un plan, le soumet, puis remplit les diapositives à partir des fichiers que vous lui citez. Cette formation Copilot PowerPoint apprend ce trajet en trois heures, sur le document de chaque participant. Elle tient compte de l'état de l'outil au 23 octobre 2026 : deux modes dans le volet, des kits de marque gérés par l'organisation, la traduction qui crée une copie et les trois mentions qui indiquent à chacun ce que son compte autorise.",
  guide: {
    kicker: "Guide terrain Copilot PowerPoint",
    h2: "Créer une présentation avec Copilot : le plan d'abord, les diapositives ensuite, le contrôle à la fin",
    lead: "La séance vise les personnes qui présentent souvent et n'ont jamais appris la mise en page : chefs de projet, commerciaux, responsables de service, assistantes de direction, formateurs internes. Elle suit l'ordre de travail d'une vraie présentation. On vérifie son accès, on ouvre le modèle, on fait bâtir un premier jet depuis un document, on retouche, on prépare la prise de parole, et on relit chaque chiffre avant de projeter.",
    sections: [
      {
        h3: "Lisez la mention affichée dans PowerPoint avant la séance",
        paras: [
          "Microsoft affiche dans PowerPoint une mention qui dit ce que votre compte permet. « Microsoft 365 Copilot (Premium) » ou « (Pro) » signale la licence Microsoft Copilot (anciennement Microsoft 365 Copilot), avec l'expérience complète et un accès prioritaire. « Microsoft 365 Copilot (Basic) » signale un compte sans licence qui garde Copilot dans PowerPoint en accès standard, soumis à la capacité du service. « Copilot Chat (Basic) » signale un compte qui n'a pas Copilot dans PowerPoint du tout : il garde la conversation sur le web et dans l'application Copilot.",
          "Microsoft précise que l'expérience dans PowerPoint dépend de la licence et de la configuration de chaque organisation. Certaines fonctions demandent la licence dans tous les cas, à commencer par le kit de marque. Au cadrage, nous relevons la mention de chaque participant et nous adaptons les exercices à ce qu'il pourra refaire seul le lendemain.",
          "Copilot ne travaille que sur les fichiers .ppt et .pptx, avec une connexion Internet. Le volet s'ouvre par l'icône Copilot en bas à droite de la diapositive, dans PowerPoint pour Windows, pour Mac et sur le web.",
        ],
      },
      {
        h3: "Le volet propose deux modes : modifier le deck ou seulement en parler",
        paras: [
          "Microsoft documente deux modes dans le volet Copilot de PowerPoint. En mode Allow editing, Copilot crée et modifie lui-même les diapositives ; en mode Chat only, il répond sans toucher au fichier. Pour bâtir un deck, on choisit le premier. Pour interroger une présentation reçue, le second suffit et protège l'original. Microsoft appelle « Modifier avec Copilot » cette capacité d'agir sur le fichier.",
          "Copilot pose souvent des questions avant d'écrire : le public, le ton, le nombre de diapositives, le style des images. Il présente ensuite un plan, que vous corrigez dans la conversation, puis il génère le deck complet une fois le plan validé. Un sélecteur de modèle, réglé sur Auto par défaut, permet aussi de choisir un modèle d'Anthropic ou d'OpenAI quand l'organisation l'autorise.",
        ],
      },
      {
        h3: "Ouvrez le modèle de l'entreprise, puis citez vos fichiers sources",
        paras: [
          "Le point de départ fixe l'apparence du résultat. Microsoft recommande d'ouvrir d'abord le modèle standard de l'organisation : Copilot garde son thème et reprend ses dispositions. Si votre entreprise a créé un kit de marque, vous le choisissez dans le volet par le bouton +, puis « Select brand ». Un kit réunit modèles, couleurs, polices, logos, images, icônes et ton de marque. Il exige la licence Microsoft Copilot, et l'organisation peut réserver sa création à quelques personnes.",
          "Dans une même demande, vous citez jusqu'à cinq fichiers, en tapant / ou par l'icône du trombone : documents Word, PDF, fichiers texte, classeurs Excel (en préversion) et composants Loop. Dites à Copilot ce qu'il doit tirer de chaque fichier. Il n'utilise que les fichiers que vous avez le droit d'ouvrir. Un rapport Word se convertit mieux s'il pèse moins de 24 Mo et si ses titres utilisent les styles de Word, que Copilot lit comme la structure du futur deck.",
          "Les images approuvées par l'entreprise passent par une bibliothèque configurée par l'administrateur : la bibliothèque de ressources de l'organisation dans SharePoint, ou un raccordement à Templafy. Copilot y cherche alors une photo sur demande. Sans elle, il propose des images sous licence Microsoft ou en génère de nouvelles.",
        ],
      },
      {
        h3: "Retoucher sans tout refaire : ajouter, réorganiser, réécrire, mettre en page",
        paras: [
          "Une fois le premier jet posé, vous travaillez par petites demandes. « Ajoute une diapositive sur le calendrier de déploiement. » « Fusionne les diapositives 5 et 6. » « Ramène l'ensemble à dix diapositives. » Copilot ajoute des diapositives, réorganise les sections et remplace une liste à puces par une frise SmartArt.",
          "Sur une zone de texte sélectionnée, un bouton propose plusieurs réécritures : améliorer, condenser, rendre plus professionnel, transformer un paragraphe en liste ou suivre votre propre consigne. Vous gardez la proposition avec « Keep it » ou vous la régénérez. Un clic droit sur un objet donne accès à Explain, qui explique en langage simple un tableau ou une diapositive tirée d'un document technique.",
          "Pour la mise en page, l'ancien Concepteur PowerPoint (Designer, en anglais) s'appelle désormais Suggestions de conception. Les utilisateurs de Copilot le trouvent dans l'onglet Accueil ; les autres l'ouvrent depuis l'onglet Création après avoir sélectionné une image. Les menus Compétences du volet ajoutent trois commandes en un clic : Revoir cette présentation, Visualiser cette diapositive et Préparation aux questions.",
        ],
      },
      {
        h3: "Résumer un deck reçu, préparer ses notes, traduire",
        paras: [
          "Pour une présentation reçue la veille d'une réunion, demandez un résumé : Copilot traite des decks d'environ 40 000 mots et indique de quelles diapositives vient chaque point. Les demandes « Show key slides » et « Show action items » isolent les diapositives à lire en priorité et les actions qu'il a repérées.",
          "Les notes de l'orateur se génèrent depuis l'onglet Affichage, pour la diapositive en cours ou pour tout le deck, et Microsoft conseille de rester sous cinquante diapositives. Le premier jet décrit la diapositive. Une seconde demande le transforme en aide à la parole : une transition vers la diapositive suivante, le chiffre à appuyer, la question à poser au public. Le Coach de l'orateur de PowerPoint, qui commente le débit et les mots de remplissage pendant une répétition, ne fonctionne qu'en anglais.",
          "La traduction se demande en une phrase, par exemple « Traduis cette présentation en anglais ». Copilot crée une nouvelle copie et laisse l'original intact ; les notes de l'orateur sont traduites, le texte placé dans une image ne l'est pas. Sur le web, la copie s'enregistre seule ; sous Windows et Mac, vous l'enregistrez vous-même. Microsoft indique que la qualité reste la meilleure en anglais pour l'ensemble des fonctions de Copilot.",
        ],
      },
    ],
    table: {
      caption: "Ce que la séance fait faire, et ce que chacun vérifie avant de projeter",
      headers: ["Besoin", "La demande à Copilot dans PowerPoint", "Le contrôle avant diffusion"],
      rows: [
        ["Partir d'un rapport existant", "Modèle de l'entreprise ouvert, rapport Word cité avec /, plan validé avant le deck", "Chaque titre de diapositive retrouvé dans le rapport"],
        ["Assembler plusieurs sources", "Jusqu'à cinq fichiers cités, avec le rôle de chacun dans la demande", "Les chiffres comparés un par un au fichier d'origine"],
        ["Respecter la charte", "Kit de marque choisi dans le volet, ou modèle .potx ouvert d'abord", "Logo, polices et couleurs comparés au modèle officiel"],
        ["Alléger une diapositive chargée", "Condenser, ou transformer le paragraphe en liste", "Aucune nuance ni condition supprimée en route"],
        ["Illustrer un message", "Image créée sur description, ou photo cherchée dans la bibliothèque de l'entreprise", "Droits de l'image, personnes reconnaissables, mention d'une image générée si besoin"],
        ["Préparer la prise de parole", "Notes générées puis réécrites en transitions et chiffres clés", "Les notes relues à voix haute une fois"],
        ["Présenter à un public étranger", "Traduction du deck dans une nouvelle copie", "Le texte des images et les titres de section, qui peuvent rester dans la langue d'origine"],
      ],
    },
    cas: {
      h3: "Mise en situation : la revue trimestrielle d'un responsable qualité",
      contexte: "Prenons un responsable qualité dans une entreprise de logistique de 150 salariés. Chaque trimestre, il présente au comité de direction ses indicateurs : réclamations clients, taux de livraisons conformes, actions correctives. Il rédige d'abord un rapport Word de quinze pages et tient ses chiffres dans un classeur Excel. Son poste affiche la mention Microsoft 365 Copilot (Premium) et l'entreprise a publié un kit de marque. L'exemple est fictif et sert l'exercice.",
      etapes: [
        "Il ouvre une nouvelle présentation, choisit le kit de marque de l'entreprise dans le volet Copilot et passe en mode Allow editing.",
        "Il colle la consigne ci-dessous, cite son rapport et son classeur avec la touche /, et répond aux questions de Copilot sur le public et la durée.",
        "Il corrige le plan proposé avant de lancer la génération : il fusionne deux parties et demande une diapositive de décisions à prendre en fin de deck.",
        "Il compare chaque chiffre des diapositives au classeur Excel et note en commentaire ceux qu'il a dû corriger.",
        "Il fait générer les notes de l'orateur, les réécrit en transitions, puis enregistre la consigne dans sa fiche pour le trimestre suivant.",
      ],
      prompt: "Crée une présentation de 10 diapositives pour le comité de direction : la revue qualité du troisième trimestre. Durée de présentation : 15 minutes. Public : la direction générale, qui veut des faits et des décisions à prendre.\n\nSources :\n- /Rapport qualité T3.docx : utilise-le pour le récit, les causes des réclamations et les actions correctives.\n- /Indicateurs qualité 2026.xlsx : reprends uniquement les chiffres de l'onglet T3, sans les arrondir.\n\nStructure attendue :\n1. Un titre et une diapositive de synthèse en trois messages.\n2. Une diapositive par indicateur : réclamations, livraisons conformes, délais de traitement.\n3. Les trois causes principales des réclamations, une diapositive chacune.\n4. Une diapositive d'actions correctives avec responsable et échéance.\n5. Une dernière diapositive : les décisions demandées au comité.\n\nUn message par diapositive, six lignes au plus. N'invente aucun chiffre : si une donnée manque dans les sources, écris « à compléter ». Indique en note de l'orateur, pour chaque chiffre, le fichier et la page ou l'onglet d'où il vient.",
      resultat: "Le responsable obtient un deck de dix diapositives dans la charte, avec un plan qu'il a validé et des notes qui pointent vers les sources. La consigne « à compléter » fait apparaître les trous au lieu de les combler. Le contrôle de l'étape 4 reste obligatoire : Copilot peut reprendre un chiffre du rapport alors que le classeur en contient une version plus récente, ou mélanger deux trimestres si les onglets se ressemblent. La diapositive de décisions demande une relecture du responsable lui-même, car c'est sa position qu'elle engage.",
    },
    pieges: [
      {
        titre: "Le deck généré hors charte",
        texte: "Une présentation lancée depuis un fichier vierge prend le thème par défaut de PowerPoint. Ouvrez le modèle officiel ou choisissez le kit de marque avant la première demande, puis comparez le logo, les polices et les couleurs au modèle. Copilot ne connaît pas les règles de votre charte qui ne figurent ni dans le modèle ni dans le kit.",
      },
      {
        titre: "Le chiffre inventé ou mal recopié",
        texte: "Copilot peut produire un chiffre absent des sources, arrondir une valeur ou confondre deux périodes. Exigez dans la consigne une mention « à compléter » pour toute donnée manquante, faites citer la source de chaque chiffre en note, puis relisez chaque nombre contre le fichier d'origine.",
      },
      {
        titre: "L'image sans droits ou trop réaliste",
        texte: "Microsoft rappelle qu'une image importée suppose les droits nécessaires et le consentement des personnes représentées. Une image générée qui montre une scène crédible, diffusée hors de l'entreprise, peut relever de l'obligation de transparence de l'AI Act. Préférez la bibliothèque d'images de l'entreprise pour les decks clients.",
      },
      {
        titre: "Le document confidentiel mis en source",
        texte: "Copilot respecte les droits d'accès de Microsoft 365 et ne montre rien que vous ne pourriez ouvrir. Le risque vient du deck produit : un chiffre tiré d'un document restreint peut finir sur une diapositive envoyée à un public plus large. Vérifiez l'étiquette de confidentialité des sources avant de diffuser.",
      },
      {
        titre: "La traduction prise pour un deck fini",
        texte: "La copie traduite garde en langue d'origine le texte placé dans les images et parfois les titres de section. Faites relire la version traduite par une personne qui parle la langue, surtout pour un client ou un partenaire.",
      },
      {
        titre: "L'original modifié par erreur",
        texte: "En mode Allow editing, Copilot change le fichier ouvert. Travaillez sur une copie pour une présentation déjà validée, ou interrogez-la en mode Chat only. L'historique des versions de OneDrive et de SharePoint permet de revenir en arrière.",
      },
    ],
  },
  audienceIntro: "La séance réunit des profils qui montent régulièrement des présentations pour leur poste, quel que soit leur service.",
  audience: [
    { title: "Chefs de projet et responsables de service", desc: "Vous présentez un avancement, un bilan ou un budget à votre direction. Vous voulez partir de votre rapport et obtenir un deck clair dans la charte." },
    { title: "Commerciaux et chargés d'affaires", desc: "Vous adaptez une présentation à chaque client. Vous voulez réorganiser, alléger et traduire un deck sans le reconstruire." },
    { title: "Assistantes et assistants de direction", desc: "Vous préparez les supports des comités et des réunions de direction. Vous voulez des diapositives fidèles aux notes et des résumés de decks reçus." },
    { title: "Formateurs internes et managers", desc: "Vous transformez une procédure ou un guide en support de session. Vous voulez des notes d'orateur prêtes et des questions de public anticipées." },
  ],
  casUsageIntro: "Six usages travaillés pendant la séance, chacun sur un document apporté par le participant.",
  useCases: [
    { icon: '📄', title: "Deck tiré d'un rapport Word ou PDF", desc: "Plan proposé, corrigé, puis diapositives remplies à partir du document cité." },
    { icon: '🎨', title: "Présentation dans la charte", desc: "Modèle de l'entreprise ouvert d'abord, ou kit de marque choisi dans le volet." },
    { icon: '🧩', title: "Diapositives ajoutées et réorganisées", desc: "Une demande pour ajouter, fusionner, raccourcir ou remettre dans l'ordre." },
    { icon: '🗒', title: "Notes de l'orateur réécrites", desc: "Premier jet généré, puis transitions et chiffres clés ajoutés à la demande." },
    { icon: '🌍', title: "Version traduite pour un public étranger", desc: "Copie traduite créée par Copilot, relue avant envoi." },
    { icon: '✅', title: "Relecture avant projection", desc: "Chiffres comparés aux sources, images vérifiées, charte contrôlée." },
  ],
  modules: [
    {
      day: 1, title: "Séquence 1 · Repérer son accès et ouvrir le bon modèle", duration: '20 min',
      description: "Vingt minutes pour connaître les droits de son compte et partir de la charte de l'entreprise.",
      items: [
        "Lire la mention affichée : Premium, Basic ou Copilot Chat",
        "Ouvrir le volet, choisir entre Allow editing et Chat only",
        "Ouvrir le modèle officiel ou sélectionner le kit de marque",
        "Préparer le document source : styles de titres, copie de travail",
      ],
    },
    {
      day: 1, title: "Séquence 2 · Construire un premier deck depuis ses documents", duration: '45 min',
      description: "Le cœur de la séance : une consigne complète, un plan corrigé, puis le deck généré.",
      items: [
        "Écrire la consigne : public, durée, nombre de diapositives, message",
        "Citer un à cinq fichiers avec / et dire ce qu'on attend de chacun",
        "Corriger le plan avant de lancer la génération",
        "Placer des « à compléter » à la place des données absentes",
      ],
      exercise: "Transformer en deck de huit à douze diapositives un rapport ou une note que vous avez apporté.",
    },
    {
      day: 1, title: "Séquence 3 · Retoucher le deck : structure, texte, images, mise en page", duration: '45 min',
      description: "Les retouches se font par petites demandes, diapositive par diapositive.",
      items: [
        "Ajouter, fusionner, réordonner des diapositives",
        "Réécrire une zone de texte : condenser, liste, ton professionnel",
        "Créer une image ou chercher une photo dans la bibliothèque de l'entreprise",
        "Suggestions de conception et compétence Revoir cette présentation",
      ],
      exercise: "Ramener votre deck à dix diapositives au plus, avec un message par diapositive et une illustration vérifiée.",
    },
    {
      day: 1, title: "Séquence 4 · Préparer la prise de parole et les autres publics", duration: '40 min',
      description: "Le deck sert une intervention : notes, questions du public, résumé et traduction.",
      items: [
        "Générer les notes de l'orateur, puis les réécrire en transitions",
        "Préparation aux questions : anticiper les objections",
        "Résumer un deck reçu avec renvoi aux diapositives",
        "Créer une copie traduite et repérer ce qu'elle ne traduit pas",
      ],
      exercise: "Produire les notes de votre deck et la liste des trois questions les plus probables du public.",
    },
    {
      day: 1, title: "Séquence 5 · Contrôler avant de projeter et garder ses consignes", duration: '30 min',
      description: "Le dernier temps fixe les vérifications et la fiche de consignes réutilisables.",
      items: [
        "Chaque chiffre comparé à sa source, chaque image vérifiée",
        "Étiquettes de confidentialité des documents sources",
        "Copie de travail, historique des versions",
        "Fiche de consignes pour les prochaines présentations",
      ],
      exercise: "Relire votre deck avec la grille de contrôle et ranger votre meilleure consigne dans votre fiche.",
    },
  ],
  objectives: [
    "Créer une présentation avec Copilot à partir d'un ou plusieurs documents de l'entreprise, plan validé avant génération",
    "Obtenir un deck conforme à la charte en partant du modèle officiel ou du kit de marque",
    "Ajouter, réorganiser et réécrire des diapositives par des demandes courtes et précises",
    "Préparer une intervention : notes de l'orateur, questions du public, résumé, version traduite",
    "Contrôler chaque chiffre, chaque image et la confidentialité des sources avant de diffuser un deck",
  ],
  avisPriorite: ['PowerPoint'],
  faq: [
    {
      q: "Combien coûte la formation Copilot PowerPoint ?",
      a: "La séance de trois heures démarre à 1 980 € HT, TVA à 20 % en sus. Ce prix vaut pour un groupe intra-entreprise de douze participants au plus ou pour une personne seule : un groupe complet ramène la dépense à 165 € HT par tête. Le travail préalable sur vos documents et votre modèle de présentation n'entre pas dans ce prix ; il apparaît sur une ligne séparée du devis, après l'échange de cadrage.",
    },
    {
      q: "Faut-il la licence Microsoft Copilot pour suivre la séance ?",
      a: "Elle donne l'expérience la plus complète, avec le kit de marque. Un compte qui affiche la mention Microsoft 365 Copilot (Basic) dispose de Copilot dans PowerPoint en accès standard, et la séance se construit alors autour de ce qu'il permet. Un compte marqué Copilot Chat (Basic) n'a pas Copilot dans PowerPoint : nous le signalons au cadrage pour que l'entreprise décide avant la date, licence d'essai ou autre format.",
    },
    {
      q: "Copilot peut-il utiliser le modèle PowerPoint de notre entreprise ?",
      a: "Oui. Il garde le thème et les dispositions du modèle ouvert au moment de la demande. Avec la licence, un kit de marque publié par l'entreprise apporte en plus les logos, polices, couleurs, images et le ton de la marque, sélectionnés dans le volet Copilot. Les modèles d'un kit se créent dans PowerPoint pour Windows ou pour Mac. Si votre organisation n'a pas encore de kit, la séance part du fichier .potx officiel.",
    },
    {
      q: "Copilot traduit-il une présentation PowerPoint ?",
      a: "Oui : vous demandez la langue voulue et Copilot crée une copie traduite, notes de l'orateur comprises, sans toucher à l'original. Le texte intégré aux images reste dans sa langue d'origine. Si la commande n'apparaît pas sur votre compte, le cadrage le révèle avant la séance.",
    },
    {
      q: "Où est passé Designer dans PowerPoint ?",
      a: "Le Concepteur PowerPoint, appelé Designer en anglais, s'appelle désormais Suggestions de conception. Les utilisateurs de Copilot le trouvent dans l'onglet Accueil ; les autres l'ouvrent depuis l'onglet Création, une fois une image sélectionnée. Il propose des mises en page à partir des images, des listes ou des dates de la diapositive.",
    },
    {
      q: "Quelle différence avec la formation Copilot Word et Excel de deux jours ?",
      a: "Les trois heures portent sur PowerPoint seul et sur une présentation par participant. Le parcours de deux jours couvre Word, Excel et PowerPoint ensemble, avec la rédaction des documents sources et l'analyse des chiffres qui alimentent ensuite les présentations. Une équipe qui présente beaucoup mais rédige peu trouve dans la séance courte l'essentiel de ce qu'il lui faut.",
    },
    {
      q: "Cette séance de trois heures peut-elle être prise en charge par un OPCO ?",
      a: "C'est possible. Masteria détient la certification Qualiopi, condition posée par les OPCO, délivrée par Certifopac sous le n° 725311-1 et valable jusqu'au 28 janvier 2029. Votre OPCO applique ensuite ses propres critères de branche : la demande lui parvient avant la séance, accompagnée du programme et de la convention que nous établissons. AKTO a gelé en 2026 le plan de développement des compétences des entreprises de moins de 50 salariés dans dix de ses branches. La formation n'ouvre pas droit au CPF.",
    },
  ],
  tarifs: {
    titre: "Le prix de la formation Copilot PowerPoint",
    paras: [
      "Le tarif part de 1 980 € HT pour trois heures, que la salle compte douze personnes ou une seule. Il couvre l'échange de cadrage, le relevé des niveaux d'accès avec votre service informatique, l'animation, la grille de contrôle et la fiche de consignes remises à chaque participant, puis l'attestation de fin de formation.",
      "L'adaptation des exercices à vos propres documents, à votre modèle de présentation ou à votre kit de marque se chiffre séparément sur le devis. Pour un service entier, plusieurs séances se succèdent dans la même journée, chacune bâtie sur les présentations du groupe concerné.",
    ],
  },
  cta: {
    milieu: "Quelle présentation vos équipes refont-elles chaque mois ? Envoyez-nous son sujet, nous construisons la séance autour.",
    fin: {
      titre: "Organisons votre séance Copilot PowerPoint",
      texte: "Précisez le nombre de participants, la mention que PowerPoint affiche sur leurs postes et deux présentations qu'ils préparent souvent. Nous revenons vers vous avec une date, le déroulé ajusté et les points à vérifier par votre service informatique avant la séance.",
    },
  },
  apres: {
    titre: "Après la séance : des consignes partagées par toute l'équipe",
    texte: "Quand plusieurs personnes produisent le même type de deck, revue mensuelle, proposition commerciale ou support de comité, l'étape suivante consiste à écrire une fois la consigne de référence et à la rendre disponible pour tous. Masteria peut aider votre équipe à rédiger ces consignes, à préparer le kit de marque avec la personne qui gère la charte, ou à construire un agent Copilot qui connaît vos règles de présentation. Le format se cale après un échange sur vos usages.",
  },
  terrain: {
    titre: "Sur le terrain : le support d'un comité de direction préparé avec Copilot",
    texte: "En septembre 2026, l'assistante du dirigeant d'une société de logiciels pour entreprises s'est formée seule avec Masteria, une journée en visioconférence. Son poste disposait déjà de Copilot. L'un des ateliers suivait toute la préparation d'une réunion de direction, de l'ordre du jour aux diapositives projetées, sur des documents d'exercice choisis à sa demande. La séance de trois heures reprend ce principe : chaque participant travaille sur une présentation qu'il prépare réellement.",
    lien: '/etudes-de-cas-ia#mission-assistanat-direction',
  },
  liensAssocies: [
    { label: "Copilot dans Word et Excel, le parcours complet de deux jours", href: '/formation-copilot-word-excel' },
    { label: "Toutes les formations Microsoft Copilot", href: '/formation-microsoft-copilot' },
    { label: "Copilot pour les équipes marketing, du brief au bilan", href: '/formation-copilot-marketing' },
    { label: "Le Sprint IA Excel, trois heures sur vos classeurs", href: '/formation-sprint-ia-excel' },
    { label: "Les formats courts du Sprint IA", href: '/formation-sprint-ia' },
    { label: "Sept formations IA courtes, de trois heures à deux jours", href: '/formation-ia-courte' },
  ],
  sources: [
    { name: "Microsoft Learn : vue d'ensemble de Copilot Chat et mentions affichées dans PowerPoint (mise à jour du 21 octobre 2026)", url: "https://learn.microsoft.com/en-us/copilot/overview" },
    { name: "Microsoft Learn : construire des présentations avec Copilot dans PowerPoint, plan, modes et fichiers sources", url: "https://learn.microsoft.com/en-us/training/modules/present-copilot-microsoft-powerpoint/2-craft-engaging-slides" },
    { name: "Microsoft Learn : réécriture, Explain, images et bibliothèque de ressources de l'organisation", url: "https://learn.microsoft.com/en-us/training/modules/present-copilot-microsoft-powerpoint/3-refine-enhance-presentation" },
    { name: "Microsoft Learn : notes de l'orateur, Coach de l'orateur et traduction d'une présentation", url: "https://learn.microsoft.com/en-us/training/modules/present-copilot-microsoft-powerpoint/3-create-speaker-notes" },
    { name: "Aide Microsoft : Modifier avec Copilot dans PowerPoint (plateformes, compétences, kit de marque)", url: "https://support.microsoft.com/fr-fr/powerpoint/edit-with-copilot-in-powerpoint" },
    { name: "Aide Microsoft : créer une présentation avec Copilot dans PowerPoint", url: "https://support.microsoft.com/en-us/powerpoint/copilot/create-a-new-presentation-with-copilot-in-powerpoint" },
    { name: "Aide Microsoft : créer et gérer les kits de marque officiels", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/create-and-manage-official-brand-kits-in-the-microsoft-365-copilot-app" },
    { name: "Aide Microsoft : utiliser la marque de l'organisation avec Copilot dans PowerPoint", url: "https://support.microsoft.com/office/use-your-organization-s-branding-with-copilot-in-powerpoint-c8bc6df5-37ed-4398-8b90-f78a8fdcf9bb" },
    { name: "Aide Microsoft : résumer une présentation avec Copilot dans PowerPoint", url: "https://support.microsoft.com/fr-fr/powerpoint/copilot/summarize-your-presentation-with-copilot-in-powerpoint" },
    { name: "Aide Microsoft : ajouter des notes de l'orateur avec Copilot", url: "https://support.microsoft.com/en-us/powerpoint/copilot/add-speaker-notes-to-your-presentations-using-copilot" },
    { name: "Aide Microsoft : questions fréquentes sur Copilot dans PowerPoint (formats, langues, images)", url: "https://support.microsoft.com/en-gb/office/frequently-asked-questions-about-copilot-in-powerpoint-3e229188-9086-4f4c-9f9f-824cd25ae84f" },
    { name: "Aide Microsoft : Suggestions de conception, l'ancien Concepteur PowerPoint", url: "https://support.microsoft.com/fr-fr/topic/02f83d65-ec10-4365-b88f-17c19e0dc5cb" },
  ],
}
