// Contenu propre à /formation-mistral-commercial (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-mistral-commercial',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Mistral pour commerciaux B2B : préparer un rendez-vous, bâtir une proposition et alimenter le CRM avec Vibe, dans le respect des règles CNIL.",
  intro: "Un cycle de vente B2B se joue en trois moments : la préparation du rendez-vous, la proposition qui suit, la saisie dans le CRM que personne n'aime faire. Vibe, l'assistant de Mistral (anciennement Le Chat), a une fonction pour chacun, avec une limite à connaître sur le CRM. Ce guide suit une chargée d'affaires du premier appel jusqu'à la fiche d'opportunité.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe prépare le rendez-vous, rédige la proposition et remplit la fiche CRM",
    lead: "Les pages sur l'IA commerciale parlent surtout d'e-mails de prospection. Le temps d'un commercial part ailleurs : lire le site d'un prospect la veille au soir, retrouver la bonne référence client, réécrire une proposition à partir de la précédente, puis ressaisir le compte rendu dans le CRM. Vibe couvre ces gestes avec la recherche web, les Bibliothèques, le Canvas et une compétence d'extraction. Il n'a pas de connecteur natif vers les CRM courants, et cette limite change la façon de travailler.",
    sections: [
      {
        h3: "La préparation d'un rendez-vous commence par la recherche web et la lecture d'une page précise",
        paras: [
          "La recherche web de Vibe s'active depuis le bouton + ou en tapant /, dans les outils de la conversation. Les réponses portent des liens et un bouton Sources. Mistral a des accords avec l'AFP et l'Associated Press : quand des dépêches entrent dans la réponse, une icône d'actualité l'indique. Pour un prospect, c'est le moyen le plus sûr de retrouver une nomination, un rachat ou un plan social récent.",
          "La fonction d'ouverture d'URL lit la page que vous collez, par exemple la page « Nos engagements » ou le dernier communiqué du prospect. Elle lit cette page seule et ne parcourt pas le site. Les pages derrière un mot de passe ou un paywall restent inaccessibles, ce qui exclut LinkedIn et la plupart des bases payantes d'informations légales. Mistral livre aussi une compétence intégrée, /meeting-prep, qui prépare un rendez-vous inscrit à votre calendrier connecté.",
        ],
      },
      {
        h3: "Une Bibliothèque commerciale évite de réécrire la même proposition",
        paras: [
          "Une Bibliothèque rassemble des documents que Vibe indexe et cite avec des notes numérotées. Pour une équipe commerciale, elle contient la plaquette d'offre, les fiches de références clients que vous avez le droit de citer, les conditions générales de vente et les trois meilleures propositions de l'année. Elle se partage à toute l'équipe en lecture seule, ce qui évite les versions qui circulent par e-mail.",
          "Gardez une seule grille tarifaire, celle en vigueur : Vibe citerait la grille de l'an dernier avec la même assurance. Datez chaque fichier dans son nom.",
        ],
      },
      {
        h3: "Le Canvas porte la proposition, la compétence d'extraction nourrit le CRM",
        paras: [
          "La compétence intégrée /doc-coauthoring sert à co-rédiger une proposition : Vibe écrit dans le Canvas, vous corrigez à la main, et les flèches de navigation vous montrent chaque version avec le suivi des modifications. Si le client attend une présentation, le Canvas écrit les diapositives et le bouton d'export les enregistre en PowerPoint.",
          "Pour le CRM, la compétence /structured-extraction transforme un texte libre en tableau ou en JSON (un format de données que la plupart des outils savent importer). Vous collez vos notes de rendez-vous et Vibe en sort les champs de votre fiche d'opportunité. Les connecteurs mis en avant par Mistral ne comprennent aucun CRM. Un administrateur peut ajouter un connecteur MCP personnalisé (un protocole standard qui relie un assistant à un logiciel) si l'éditeur de votre CRM en publie un. Sinon, le tableau se colle ou s'importe à la main.",
        ],
        list: [
          "Montant estimé, date de décision annoncée, étape du cycle selon votre nomenclature.",
          "Interlocuteurs rencontrés avec leur rôle dans la décision : prescripteur, décideur, acheteur, utilisateur.",
          "Objections entendues, mot pour mot quand c'est possible.",
          "Prochaine action, avec un porteur et une date.",
        ],
      },
      {
        h3: "Les règles de prospection s'appliquent aussi à ce que Vibe trouve",
        paras: [
          "La CNIL admet la prospection B2B par e-mail quand le message concerne la fonction du destinataire et qu'il peut s'y opposer. Elle interdit de prospecter à partir d'adresses collectées sur les sites ou les annuaires en ligne. Une adresse que Vibe retrouve sur le site d'un prospect n'entre donc pas dans votre fichier. La recherche sert à comprendre l'entreprise. Votre fichier se construit avec des contacts informés de leur droit d'opposition au moment où ils vous ont donné leur adresse, ou avec des adresses génériques du type contact@.",
        ],
      },
    ],
    table: {
      caption: "Le cycle de vente B2B et la fonction de Vibe qui sert chaque étape",
      headers: ["Étape", "Fonction de Vibe", "Point de vigilance"],
      rows: [
        ["Comprendre le prospect avant l'appel", "Recherche web, dépêches AFP et AP, ouverture d'URL", "Vérifiez la date de chaque information : un résultat peut être ancien"],
        ["Préparer un rendez-vous inscrit à l'agenda", "Compétence /meeting-prep, calendrier connecté", "Les fonctions des interlocuteurs sont à contrôler"],
        ["Retrouver une référence client citable", "Bibliothèque commerciale, notes numérotées", "Ne citez que les clients qui ont donné leur accord"],
        ["Rédiger la proposition", "Compétence /doc-coauthoring, Canvas", "Les prix viennent de la grille en vigueur, jamais du texte généré"],
        ["Anticiper les objections", "Compétence /challenge-my-thinking", "Elle critique votre raisonnement, elle ne connaît pas le client"],
        ["Mettre à jour le CRM", "Compétence /structured-extraction", "Pas de connecteur CRM natif : collage, import ou connecteur MCP ajouté par l'administrateur"],
      ],
    },
    cas: {
      h3: "Cas pratique : du premier rendez-vous à la fiche d'opportunité",
      contexte: "Prenons une chargée d'affaires d'une entreprise de maintenance en chauffage, ventilation et climatisation. Elle rencontre jeudi le responsable des services généraux d'une clinique privée de 180 lits, dont le contrat de maintenance arrive à échéance. Elle a une heure pour se préparer et devra rendre une proposition sous dix jours.",
      etapes: [
        "Ouvrez un projet « Clinique » dans le menu latéral et attachez la Bibliothèque commerciale de l'équipe avec le bouton +.",
        "Activez la recherche web dans les outils de la conversation, collez l'adresse de la page d'actualités de la clinique et le prompt ci-dessous.",
        "Après le rendez-vous, dictez vos notes avec le micro de Vibe, relisez la transcription et appelez /structured-extraction pour produire la fiche d'opportunité.",
        "Appelez /doc-coauthoring pour construire la proposition dans le Canvas à partir de la fiche et de la Bibliothèque.",
        "Appelez /challenge-my-thinking sur la proposition terminée pour lister les objections probables de l'acheteur.",
      ],
      prompt: "Je rencontre jeudi le responsable des services généraux d'une clinique privée de 180 lits. Je vends des contrats de maintenance en chauffage, ventilation et climatisation. Leur contrat actuel arrive à échéance en fin d'année.\n\nPrépare-moi une fiche d'une page pour ce rendez-vous.\n\nDans un premier bloc, résume ce que la clinique dit d'elle-même sur la page d'actualités que je t'ai donnée, puis ce que la recherche web et les dépêches récentes apprennent de plus : travaux, extension, changement de direction, rachat par un groupe. Donne la date et la source de chaque information.\n\nDans un deuxième bloc, cherche dans la Bibliothèque les deux références clients les plus proches (établissements de santé, sites qui fonctionnent jour et nuit) et résume ce que nous y avons fait.\n\nDans un troisième bloc, propose six questions à poser pendant le rendez-vous pour comprendre qui décide, ce qui ne va pas avec le prestataire actuel et les contraintes propres à un établissement de santé, comme l'intervention dans des zones occupées par des patients.\n\nN'invente aucun chiffre sur la clinique. Si une information n'est pas trouvée, écris « non trouvé ».",
      resultat: "Vous obtenez une fiche avec des faits datés et sourcés, deux références tirées de votre Bibliothèque avec renvoi au document, et six questions de découverte. Ouvrez chaque source avant le rendez-vous : un article de trois ans peut remonter en tête. Après le rendez-vous, la compétence d'extraction produit un tableau à coller dans le CRM, et la proposition part d'une base qui reprend les mots du client. Les prix restent à reporter vous-même depuis la grille en vigueur.",
    },
    pieges: [
      {
        titre: "Une information non datée passe pour une actualité",
        texte: "La documentation de Mistral prévient que les résultats de recherche peuvent être anciens. Exigez la date et la source de chaque fait dans le prompt, et écartez ce qui n'en a pas. Citer au client un projet abandonné depuis deux ans ruine un premier rendez-vous.",
      },
      {
        titre: "Le prix sort de la conversation au lieu de la grille",
        texte: "Un assistant qui rédige une proposition peut recalculer une remise ou reprendre un tarif d'une ancienne proposition de la Bibliothèque. Laissez les montants en blanc dans le brouillon et reportez-les depuis votre outil de devis.",
      },
      {
        titre: "Une référence client est citée sans accord",
        texte: "Vibe cite ce que la Bibliothèque contient. Si une fiche de référence décrit un client qui n'a pas accepté d'être nommé, elle finira dans une proposition. Ne déposez que des références validées, ou anonymisées dès le départ.",
      },
    ],
  },
  audience: [
    {
      "title": "Chargés d'affaires et ingénieurs commerciaux B2B",
      "desc": "Vous enchaînez rendez-vous, propositions et saisie dans le CRM. Vous apprenez à préparer chaque étape avec Vibe en gardant les prix et les engagements sous votre contrôle."
    },
    {
      "title": "Responsables grands comptes",
      "desc": "Vous suivez des comptes à plusieurs interlocuteurs et vous préparez des revues de compte. Vibe rassemble l'actualité du client et vos références dans un projet par compte."
    },
    {
      "title": "Directions commerciales et avant-vente",
      "desc": "Vous tenez l'offre, la grille tarifaire et la base de références de l'équipe. Vous apprenez à les partager dans une Bibliothèque à jour et à fixer les règles d'usage."
    }
  ],
  useCases: [
    {
      "icon": "💼",
      "title": "Premier rendez-vous",
      "desc": "Une fiche d'une page avec des faits datés et sourcés sur le prospect, les références les plus proches et des questions de découverte."
    },
    {
      "icon": "📄",
      "title": "Proposition commerciale",
      "desc": "La compétence /doc-coauthoring construit la proposition dans le Canvas à partir des mots du client et de votre Bibliothèque."
    },
    {
      "icon": "📊",
      "title": "Fiche d'opportunité CRM",
      "desc": "La compétence /structured-extraction transforme vos notes de rendez-vous en champs prêts à coller ou à importer dans votre CRM."
    },
    {
      "icon": "🎤",
      "title": "Présentation de soutenance",
      "desc": "Les diapositives se rédigent dans le Canvas et s'exportent en PowerPoint pour reprise dans votre gabarit."
    },
    {
      "icon": "📋",
      "title": "Base de références partagée",
      "desc": "Une Bibliothèque avec l'offre, les références citables, les conditions générales et la seule grille tarifaire en vigueur."
    },
    {
      "icon": "✉️",
      "title": "Suivi après rendez-vous",
      "desc": "Un brouillon d'e-mail qui reprend les engagements pris, envoyé depuis le connecteur Outlook après votre accord."
    }
  ],
  modules: [
    {
      "day": 1,
      "title": "Module 1 · Poser le cadre d'une équipe commerciale dans Vibe",
      "duration": "1h30",
      "description": "Savoir quelles données clients entrent dans l'outil, et dans quelle offre.",
      "items": [
        "Offres Free, Pro, Team et Enterprise : réglage de l'entraînement des modèles",
        "Conditions tarifaires et données clients : ce qui reste hors de l'outil",
        "Règles de la CNIL pour la prospection B2B par e-mail",
        "Un projet par compte : instructions, fichiers et conversations au même endroit"
      ],
      "exercise": "Vous classez les données de vos comptes selon ce qui peut entrer dans Vibe, et dans quelle offre."
    },
    {
      "day": 1,
      "title": "Module 2 · Préparer un rendez-vous",
      "duration": "2h",
      "description": "Arriver chez le prospect avec des faits vérifiés et les bonnes questions.",
      "items": [
        "Recherche web et dépêches de l'AFP et d'AP : dater et sourcer chaque fait",
        "Ouverture d'URL : une page publique par adresse, ni connexion ni paywall",
        "La compétence /meeting-prep sur un rendez-vous de l'agenda connecté",
        "Questions de découverte : décideur, prestataire actuel, contraintes du site"
      ],
      "exercise": "Vous préparez la fiche de l'un de vos prochains rendez-vous et vous vérifiez la date de chaque source."
    },
    {
      "day": 1,
      "title": "Module 3 · Construire la Bibliothèque commerciale",
      "duration": "2h",
      "description": "Donner à toute l'équipe les mêmes documents de référence.",
      "items": [
        "Ce qu'on y dépose : offre, références citables, conditions générales, meilleures propositions",
        "Une seule grille tarifaire, datée dans le nom du fichier",
        "Références clients : accord du client ou anonymisation dès le départ",
        "Partage en lecture seule et lecture des notes numérotées"
      ],
      "exercise": "Vous montez la Bibliothèque de votre offre avec vos propres documents et vous la testez sur des questions de client."
    },
    {
      "day": 1,
      "title": "Module 4 · Du compte rendu à la fiche CRM",
      "duration": "1h30",
      "description": "Supprimer la double saisie après chaque rendez-vous.",
      "items": [
        "Dicter ses notes avec le mode vocal et relire la transcription",
        "La compétence /structured-extraction en tableau ou en JSON",
        "Faire correspondre les champs extraits à ceux de votre CRM",
        "Import manuel ou connecteur MCP ajouté par l'administrateur si l'éditeur en publie un"
      ],
      "exercise": "Vous transformez les notes de l'un de vos rendez-vous récents en fiche d'opportunité prête pour votre CRM."
    },
    {
      "day": 2,
      "title": "Module 5 · Rédiger la proposition",
      "duration": "1h30",
      "description": "Écrire une proposition qui reprend le besoin exprimé par le client.",
      "items": [
        "La compétence /doc-coauthoring dans le Canvas",
        "Reprendre les mots du client relevés en rendez-vous",
        "Laisser les montants en blanc et les reporter depuis votre outil de devis",
        "Suivre les versions et les modifications avant envoi"
      ],
      "exercise": "Vous rédigez la proposition d'une affaire en cours à partir de votre fiche de rendez-vous."
    },
    {
      "day": 2,
      "title": "Module 6 · Présenter l'offre en soutenance",
      "duration": "2h",
      "description": "Transformer la proposition écrite en présentation pour le comité de décision.",
      "items": [
        "Diapositives rédigées dans le Canvas et exportées en PowerPoint",
        "Adapter le discours au décideur et à l'acheteur avec /stakeholder-translator",
        "Visuels produits par la génération d'images de Vibe",
        "Reprise dans votre gabarit de marque"
      ],
      "exercise": "Vous produisez la présentation de soutenance de l'une de vos propositions."
    },
    {
      "day": 2,
      "title": "Module 7 · Anticiper les objections et la négociation",
      "duration": "2h",
      "description": "Préparer les réponses avant que l'acheteur pose la question.",
      "items": [
        "La compétence /challenge-my-thinking sur une proposition terminée",
        "Les objections probables de chaque interlocuteur",
        "Des réponses appuyées sur les références de la Bibliothèque",
        "Les concessions possibles et celles que vous refusez"
      ],
      "exercise": "Vous préparez la négociation d'une affaire en cours avec la liste des objections probables et vos réponses."
    },
    {
      "day": 2,
      "title": "Module 8 · Fixer les règles de l'équipe commerciale",
      "duration": "1h30",
      "description": "Décider ce qui ne sort jamais de Vibe sans relecture.",
      "items": [
        "Qui met à jour la grille tarifaire et les références",
        "Une compétence de proposition maison partagée à l'espace de travail",
        "Prix, engagements et références : relecture obligatoire avant envoi",
        "Prospection : aucune adresse collectée sur les sites ou les annuaires"
      ],
      "exercise": "Vous rédigez les règles d'usage de votre équipe et la compétence de proposition qu'elle partagera."
    }
  ],
  objectives: [
    "Préparer un rendez-vous B2B avec des faits datés et sourcés et des questions de découverte",
    "Paramétrer une Bibliothèque commerciale partagée qui ne contient que des documents en vigueur",
    "Transformer des notes de rendez-vous en fiche d'opportunité prête pour le CRM",
    "Rédiger une proposition et sa présentation dans le Canvas, avec des prix reportés depuis l'outil de devis",
    "Vérifier qu'une démarche de prospection respecte les règles de la CNIL"
  ],
  faq: [
    { q: "Vibe se connecte-t-il à Salesforce ou HubSpot ?", a: "Les connecteurs mis en avant dans la documentation de Mistral ne comprennent pas de CRM, en dehors de Stripe pour les paiements. Un administrateur peut ajouter un connecteur MCP personnalisé si l'éditeur du CRM publie un serveur compatible. À défaut, la compétence /structured-extraction produit un tableau ou un JSON que vous collez ou importez." },
    { q: "Vibe peut-il lire le profil LinkedIn d'un prospect ?", a: "Non. La fonction d'ouverture d'URL ne lit pas les pages qui demandent une connexion, ce qui est le cas de LinkedIn. Elle lit les pages publiques, une par une, sans parcourir tout un site. Pour un prospect, le site de l'entreprise, ses communiqués et les dépêches restent les meilleures sources." },
    { q: "Vibe produit-il une présentation commerciale en PowerPoint ?", a: "Oui. Le Canvas écrit les diapositives et un bouton d'export les enregistre au format PowerPoint. La mise en forme reste à reprendre dans votre gabarit de marque. Les visuels peuvent venir de la génération d'images de Vibe, qui s'appuie sur des modèles de Black Forest Labs." },
    { q: "Comment partager une base de propositions avec toute l'équipe ?", a: "Créez une Bibliothèque et partagez-la à l'organisation entière ou à des collègues choisis, en lecture seule ou en modification. Chaque réponse de Vibe renvoie par une note numérotée au document cité. Mettez à jour la Bibliothèque quand une offre change, sinon l'ancienne version continuera d'être citée." },
    { q: "Peut-on transformer une méthode de proposition maison en outil réutilisable ?", a: "Oui, avec une compétence (skill). Réussissez une proposition dans une conversation, puis écrivez « transforme cette méthode en compétence ». Vibe rédige un fichier d'instructions que vous relisez, enregistrez et partagez à l'espace de travail ; chaque commercial l'appelle ensuite en tapant / suivi de son nom." },
    { q: "Les échanges avec les connecteurs servent-ils à entraîner les modèles ?", a: "Mistral indique que les données lues par les connecteurs ne sont pas stockées sur ses serveurs et ne servent jamais à entraîner ou affiner ses modèles. Les conversations elles-mêmes suivent le réglage de votre offre : entraînement actif par défaut sur Free et Pro, désactivable dans les réglages, coupé par défaut sur Enterprise." },
    { q: "Qui finance une formation Vibe pour une équipe commerciale ?", a: "Masteria est certifié Qualiopi : votre OPCO peut financer la formation selon ses critères et ses plafonds. En intra, la session réunit jusqu'à 12 commerciaux, au tarif de 1 980 € HT par jour. Nous préparons avec vous le dossier de prise en charge." },
  ],
  sources: [
    { name: "Mistral Docs : Web search and Open URL", url: "https://docs.mistral.ai/vibe/work/web-search-open-url" },
    { name: "Mistral Docs : Skills (compétences intégrées)", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Mistral Docs : Libraries", url: "https://docs.mistral.ai/vibe/work/libraries" },
    { name: "Mistral Docs : Connectors", url: "https://docs.mistral.ai/vibe/work/connectors" },
    { name: "Mistral Docs : MCP Connectors", url: "https://docs.mistral.ai/vibe/work/connectors/mcp-connectors" },
    { name: "Mistral Docs : Files and Canvas", url: "https://docs.mistral.ai/vibe/work/files-and-canvas" },
    { name: "CNIL : la prospection commerciale par courrier électronique", url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique" },
    { name: "Mistral Help Center : désactiver l'usage des données pour l'entraînement", url: "https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training" },
  ],
}
