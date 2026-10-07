// Contenu propre à /formation-multi-outils-commercial (guide terrain, mode page propre). Rendu par SpokePage.
// Revu le 7 octobre 2026. Faits outils : FAITS-OUTILS-2026-10-07 et src/data/claude-facts.js (5 octobre 2026).
// Cas cité dans `terrain` : `photovoltaique` (data/etudes-de-cas.js), formation sur site prévue en octobre 2026.
// Décision de la cour d'appel de Paris du 21 mai 2026 revérifiée le 7 octobre 2026 (Village de la Justice).
export default {
  slug: 'formation-multi-outils-commercial',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Panorama IA commercial et vente : formation multi-outils, du rendez-vous découverte à la proposition signée",
  metaTitle: "Panorama IA commercial · formation multi-outils | Masteria",
  metaDesc: "Formation IA multi-outils pour la vente : préparer un rendez-vous, rédiger la proposition, répondre aux appels d'offres, tenir le CRM. Qualiopi.",
  resume: "La formation Panorama IA commercial confronte Copilot, Gemini, ChatGPT, Claude et Vibe aux pièces d'un cycle de vente : fiche de rendez-vous, compte rendu de découverte, proposition, dossier d'appel d'offres et revue de pipeline. Deux jours de 7 heures, chez vous ou en ligne, accueillent une force de vente jusqu'à douze personnes ou un commercial seul ; chaque journée est facturée 1 980 € HT. Titulaire de Qualiopi pour ses actions de formation, Masteria vous aide à solliciter votre OPCO, qui applique ensuite les critères de votre branche.",
  enBref: [
    { label: 'Formation', value: "Chaque étape de la vente confiée à son assistant : rendez-vous, découverte, proposition, appel d'offres, CRM" },
    { label: 'Durée', value: "Deux jours de 7 heures, souvent calés entre deux revues de pipeline" },
    { label: 'Formats', value: "Force de vente jusqu'à douze personnes en intra, ou accompagnement d'un seul commercial, en salle ou en visioconférence" },
    { label: 'Tarif', value: "1 980 € HT chaque journée, que vous formiez deux vendeurs ou douze" },
    { label: 'Financement', value: "Certification Qualiopi ; l'OPCO de votre secteur tranche sur le financement d'après ses critères" },
    { label: 'Prérequis', value: "Mener des rendez-vous clients ; apporter une trame de proposition et un export récent du CRM" },
  ],
  prerequis: "Mener des rendez-vous clients ; apporter une trame de proposition et un export récent du CRM",
  intro: "Un commercial passe d'Outlook ou de Gmail au CRM, puis à Word ou à Docs, plusieurs fois par jour. Cette formation vous apprend à placer le bon assistant à chaque moment de la vente, en tenant compte de vos outils et de la confidentialité de vos conditions tarifaires. Vous travaillez sur vos dossiers clients, vos trames de proposition et vos comptes rendus, avec les nouveautés qui touchent la vente à l'automne 2026 : connecteurs de Gemini vers HubSpot et Salesforce, Copilot Cowork capable d'envoyer une relance après votre accord, consentement obligatoire pour appeler un particulier.",
  guide: {
    kicker: "Guide terrain",
    h2: "Un assistant par étape du cycle de vente, et vos prix restent chez vous",
    lead: "La vente mélange trois matières : l'information publique sur le prospect, l'historique privé du compte et vos conditions commerciales. Chacune appelle un outil et un niveau de protection différents. Un commercial efficace choisit l'assistant selon l'endroit où vit l'information, puis reste maître de ce qui engage la société : prix, remises, délais.",
    sections: [
      {
        h3: "L'assistant doit aller chercher l'information là où elle vit",
        paras: [
          "Le compte rendu du dernier rendez-vous, les échanges avec l'acheteur et les affaires en cours forment le contexte qui manque à un assistant généraliste. Une force de vente sous Microsoft 365 équipée de Microsoft Copilot (anciennement Microsoft 365 Copilot) y accède déjà : Copilot résume un fil Outlook, critique le ton d'un brouillon avant l'envoi et récapitule une réunion Teams, à condition que la transcription ait tourné.",
          "Côté Google, Gemini résume un échange Gmail, et Meet, avec sa fonction « Prendre des notes pour moi », range dans Drive un compte rendu en français assorti des prochaines étapes. Elle ne suit qu'une langue par réunion : un rendez-vous qui alterne français et anglais donnera des notes trouées. Gemini sait aussi, depuis le 15 septembre 2026, se brancher sur HubSpot et Salesforce par des connecteurs MCP (MCP étant un protocole ouvert qui branche un assistant sur une application).",
          "ChatGPT et Claude disposent chacun d'un connecteur HubSpot officiel : l'assistant lit contacts, entreprises et affaires avec les droits que le commercial a dans HubSpot, sans plus. Vibe n'offre aucun connecteur CRM natif, mais son administrateur sait en déclarer un sur mesure. Pour un autre CRM, consultez le catalogue de plugins ou de connecteurs avant de promettre une intégration aux vendeurs.",
        ],
      },
      {
        h3: "Vos conditions commerciales sont la donnée la plus sensible",
        paras: [
          "Une grille de remises, une marge par client ou le prix consenti au concurrent du prospect pèsent plus lourd qu'un fichier de contacts. Ces chiffres ne sortent pas de l'offre d'entreprise de l'outil : ChatGPT Business, Claude Team ou Enterprise, Copilot sous compte professionnel, Gemini dans Workspace, Vibe Enterprise. Un compte ChatGPT personnel, comme les formules Free ou Pro de Vibe, verse les échanges à l'entraînement tant que l'option reste cochée ; sur Vibe Team, c'est à l'administrateur de la désactiver. Sur Claude Free ou Pro, tout dépend du choix fait par l'utilisateur.",
          "En équipe, une règle simple fonctionne. L'assistant rédige la proposition avec des cases de prix vides, et le commercial y reporte les montants issus de l'outil de devis de l'entreprise.",
        ],
      },
      {
        h3: "La prospection suit deux régimes juridiques",
        paras: [
          "Un assistant rédige une séquence de prospection personnalisée en quelques minutes. Le droit distingue pourtant les destinataires. Pour un professionnel, la CNIL admet l'e-mail sans consentement préalable si le message concerne son métier, s'il a été informé et s'il peut s'y opposer simplement. Une adresse générique du type contact@ sort de ce cadre.",
          "Pour un particulier, le démarchage téléphonique exige son accord préalable depuis le 11 août 2026, en application d'une loi du 30 juin 2025. Un script d'appel rédigé par l'IA ne change rien à cette règle : la liste d'appel doit contenir la preuve de cet accord.",
        ],
      },
      {
        h3: "L'appel d'offres se lit d'un bloc ou par morceaux selon l'offre",
        paras: [
          "Un dossier de consultation complet, règlement, cahier des clauses techniques et annexes, dépasse vite les quatre cents pages. Au 7 octobre 2026, un abonnement Claude payant, comme Gemini dès l'édition Business Standard, ouvre un contexte d'un million de tokens (un token correspond à peu près à un fragment de mot), soit quelque 2 500 pages à l'aune de l'équivalence donnée par Anthropic. ChatGPT Business s'arrête à 256 000 quand il raisonne. Microsoft ne publie aucun plafond pour Copilot, qui va chercher dans vos fichiers l'extrait qui répond. Un même dossier de marché passe donc entier dans deux outils et doit être découpé pour les autres.",
          "Trois chaînes d'outils reviennent ensuite dans les équipes commerciales, avec une vérification humaine entre deux passages.",
        ],
        list: [
          "Préparer un rendez-vous : Researcher de Copilot, Deep Research côté Gemini ou recherche approfondie dans ChatGPT, lancés sur l'actualité publique du prospect (rapport annuel, nominations, offres d'emploi), puis fiche d'une page croisée avec l'historique du CRM.",
          "Bâtir une réponse de marché : le dossier versé dans un bloc-notes de Copilot, un projet de Claude ou un carnet de Gemini Notebook, qui extrait chaque exigence avec sa page ; le mémoire technique s'écrit ensuite à partir de vos anciens mémoires déposés au même endroit.",
          "Suivre le pipeline : export des affaires en cours, ouvert dans Excel où Copilot en mode Plan détaille ses étapes, ou confié à Gemini côté Sheets, puis commentaire écrit par le responsable des ventes.",
        ],
      },
    ],
    table: {
      caption: "Étape de vente, outil conseillé et point de vigilance",
      headers: ["Étape de vente", "Outil conseillé", "Pourquoi celui-là", "Vigilance"],
      rows: [
        ["Préparer un rendez-vous", "Researcher dans Copilot, Deep Research dans Gemini, recherche approfondie dans ChatGPT", "Il croise le web public et, selon l'outil, vos mails et vos fichiers", "Dater chaque information et ouvrir les liens des chiffres."],
        ["Compte rendu de rendez-vous", "Récapitulatif Copilot d'une réunion Teams, ou prise de notes automatique de Meet", "La transcription évite de reconstituer l'échange de mémoire", "Annoncer la transcription au client ; une seule langue par réunion dans Meet."],
        ["Mise à jour du CRM", "Connecteur HubSpot de ChatGPT ou de Claude ; connecteurs MCP de Gemini vers HubSpot ou Salesforce", "L'assistant lit les fiches avec les droits du commercial", "Toute écriture automatique dans le CRM passe par l'administrateur."],
        ["Séquence de prospection", "Projet ChatGPT ou Claude, ou compétence Gemini, avec vos offres et trois e-mails qui ont obtenu une réponse", "Le ton et les arguments restent ceux de l'équipe", "Règles CNIL en B2B ; accord préalable pour appeler un particulier."],
        ["Proposition commerciale", "« Modifier avec Copilot » dans Word sur la trame maison, ou projet Claude avec vos propositions gagnées", "L'outil réutilise vos formulations déjà validées", "Prix et remises saisis à la main depuis l'outil de devis."],
        ["Appel d'offres", "Bloc-notes de Copilot, projet de Claude ou carnet de Gemini Notebook chargé du dossier", "Chaque exigence extraite renvoie à sa page", "Contrôler la matrice de conformité ligne à ligne."],
        ["Relance des devis en attente", "Copilot Cowork, ou agent partagé dans l'espace ChatGPT Business, envoi soumis à accord", "La tâche part d'un événement ou d'un horaire fixé", "Facturation à la consommation, au-delà de la licence ; relire le premier lot."],
      ],
    },
    cas: {
      h3: "Cas pratique : du rendez-vous découverte à la proposition en 48 heures",
      contexte: "Prenons un ingénieur commercial d'une société de maintenance industrielle, équipée de Microsoft 365 avec des licences Microsoft Copilot. Il sort d'un rendez-vous découverte d'une heure sur Teams avec le directeur technique d'une laiterie. Il doit envoyer une proposition sous 48 heures. Ce scénario est pédagogique.",
      etapes: [
        "Au début de la réunion Teams, lancez la transcription et annoncez-la aux participants. Sans elle, Copilot ne pourra plus répondre sur la réunion une fois celle-ci terminée.",
        "Après la réunion, ouvrez le récapitulatif dans Teams et demandez à Copilot les besoins exprimés, chacun suivi du nom de la personne qui l'a formulé.",
        "Ouvrez l'application Microsoft Copilot. Tapez « / » pour citer la réunion, puis la trame de proposition rangée dans SharePoint, et ajoutez la demande ci-dessous.",
        "Ouvrez le brouillon dans Word. Reportez les prix depuis votre outil de devis dans les cases laissées vides.",
        "Avant l'envoi, soumettez le mail d'accompagnement à Copilot dans Outlook, qui relève les tournures confuses et le ton trop sec.",
      ],
      prompt: "Vous êtes ingénieur commercial dans une société de maintenance industrielle.\n\nSources : le verbatim transcrit de la réunion d'hier avec le directeur technique de la laiterie, et notre trame de proposition « Contrat de maintenance préventive ».\n\nÉtape 1. Dressez le compte rendu de découverte : situation actuelle du site, problèmes cités avec la phrase exacte du client, conséquences chiffrées si le client en a donné, décideurs mentionnés, calendrier, budget évoqué. Pour chaque point, indiquez qui l'a dit. Si un point n'a pas été abordé, écrivez « non abordé ».\n\nÉtape 2. Listez les questions restées sans réponse que je dois poser avant d'envoyer la proposition.\n\nÉtape 3. Remplissez la trame de proposition : le contexte du client avec ses propres mots, notre compréhension de son besoin, la solution découpée en trois lots, le planning d'intervention. Laissez vides toutes les cases de prix et de remise.\n\nRègles : n'ajoutez aucun engagement absent de la transcription, en particulier sur les délais d'intervention et les garanties. Rédigez en français, au vouvoiement, en phrases courtes.",
      resultat: "Vous obtenez un compte rendu où chaque besoin porte le nom de son auteur, les questions à poser au client avant l'envoi et une proposition aux prix vides. Vérifiez les délais promis et les citations du client, car une transcription se trompe sur les noms propres et les références techniques. Collez ensuite le compte rendu validé dans la fiche du compte, dans le CRM.",
    },
    pieges: [
      { titre: "L'assistant promet ce que l'atelier ne sait pas tenir", texte: "Sur une proposition, l'IA complète volontiers un délai ou une garantie plausible. Ajoutez la règle « aucun engagement absent des sources » dans chaque prompt, et faites relire les engagements par la personne qui les exécutera." },
      { titre: "La recherche sur le prospect mélange les homonymes", texte: "Deux sociétés au même nom, un dirigeant parti l'an dernier : la recherche approfondie assemble parfois des faits qui ne vont pas ensemble. Donnez le numéro SIREN ou le site du prospect dans le prompt, et vérifiez les nominations sur une source datée." },
      { titre: "Une séquence personnalisée reste de la prospection", texte: "Personnaliser cent e-mails avec l'IA ne dispense d'aucune règle : identité de l'expéditeur, moyen simple de s'opposer, objet lié au métier du destinataire. Faites valider la séquence et la liste par la personne qui suit les données personnelles dans l'entreprise." },
      { titre: "La relance automatique part sans relecture", texte: "Copilot Cowork, comme les agents partagés de ChatGPT Business, sait envoyer un mail déclenché par une date ou un message entrant. Cowork réclame votre feu vert avant chaque action sensible : laissez cette étape active pour tout envoi à un client, et relisez le premier lot de relances avant d'en programmer d'autres." },
      { titre: "Trois assistants dispersent l'historique client", texte: "Quand chaque commercial utilise l'outil de son choix, les échanges s'éparpillent et plus personne ne retrouve ce qui est parti chez le client. Fixez un outil principal pour l'équipe et un seul endroit où ranger le compte rendu validé : le CRM." },
    ],
  },
  audience: [
    { title: "Directeurs commerciaux", desc: "Vous décidez des outils de l'équipe et de ce qui peut y entrer. Vous repartez avec un outil désigné pour chaque étape de vente, le coût des licences et des règles écrites sur les prix et les données prospects." },
    { title: "Commerciaux terrain et ingénieurs commerciaux", desc: "Rendez-vous à préparer et propositions à envoyer remplissent vos semaines. Vous apprenez à passer du compte rendu à la proposition avec l'outil de votre suite." },
    { title: "Chargés d'appels d'offres et assistants commerciaux", desc: "Vous montez les dossiers de réponse et tenez le CRM à jour. Vous apprenez à extraire les exigences d'un dossier de consultation avec leur page, quel que soit son volume." },
  ],
  useCases: [
    { icon: '🔍', title: "Préparation de rendez-vous", desc: "Actualité publique du prospect relevée par Deep Research, Researcher ou la recherche approfondie d'OpenAI, puis croisée avec l'historique du CRM." },
    { icon: '🤝', title: "Compte rendu de rendez-vous", desc: "Récapitulatif Copilot d'une réunion Teams ou notes automatiques de Meet, chaque besoin rattaché à la personne qui l'a exprimé." },
    { icon: '📝', title: "Proposition commerciale", desc: "Votre trame remplie dans Word avec Copilot ou par Claude dans un projet, cases de prix vides jusqu'au report depuis l'outil de devis." },
    { icon: '💼', title: "Appels d'offres", desc: "Exigences extraites du dossier de consultation dans un bloc-notes de Copilot, un projet de Claude ou un carnet de Gemini Notebook, chacune avec sa page." },
    { icon: '🎯', title: "Séquence de prospection", desc: "E-mails personnalisés à partir de vos offres et de vos messages qui ont obtenu des réponses, relus avec la grille CNIL." },
    { icon: '📊', title: "Revue de pipeline et relances", desc: "Export du CRM analysé dans Excel ou dans Sheets, puis relances préparées par Cowork ou un agent, envoyées après votre accord." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Ranger chaque information commerciale dans le bon outil", duration: '1h30',
      description: "Distinguer information publique, historique du compte et conditions tarifaires, puis régler les comptes qui y accèdent.",
      items: [
        "Copilot avec licence (Outlook, Teams, SharePoint) ou Copilot Chat seul (web et fichiers fournis) ; Gemini selon l'édition Workspace",
        "Connecteurs HubSpot de ChatGPT et de Claude, connecteurs MCP de Gemini, connecteur sur mesure pour Vibe",
        "Réglages à vérifier : entraînement selon l'offre, mémoire, instructions personnalisées",
        "Trois niveaux de pièces commerciales : public, historique, tarifaire",
      ],
      exercise: "Vous classez les documents de votre dernier dossier client en trois niveaux et notez l'outil autorisé pour chacun, réglages du compte vérifiés.",
    },
    {
      day: 1, title: "Module 2 · Demander juste, puis préparer un rendez-vous en une page", duration: '2h',
      description: "Poser une structure de demande valable dans chacun des cinq assistants et l'appliquer à une fiche de rendez-vous datée et sourcée.",
      items: [
        "Rôle, compte visé, pièces jointes, livrable attendu, interdits : la demande qui tient dans tous les assistants",
        "Recherche approfondie sur l'actualité publique : rapport annuel, nominations, offres d'emploi",
        "Homonymes écartés grâce au numéro SIREN ou au site du prospect ; chaque information datée",
        "Croisement avec l'historique du CRM et les derniers échanges",
      ],
      exercise: "Vous montez dans deux assistants la fiche du prochain prospect que vous rencontrez, puis la soumettez au collègue qui suit déjà ce compte.",
    },
    {
      day: 1, title: "Module 3 · Tirer un compte rendu exploitable du rendez-vous découverte", duration: '2h',
      description: "Transformer une réunion transcrite en compte rendu structuré, prêt pour le CRM.",
      items: [
        "Transcription Teams et récapitulatif Copilot ; notes automatiques de Meet, une langue par réunion",
        "Transcription annoncée au client, durée de conservation fixée",
        "Besoins, décideurs, calendrier et budget extraits, avec l'auteur de chaque propos",
        "Questions restées sans réponse listées pour la relance",
      ],
      exercise: "Vous transformez la transcription ou vos notes de votre dernier rendez-vous en compte rendu structuré, puis le rangez dans la fiche du compte.",
    },
    {
      day: 1, title: "Module 4 · Écrire des séquences de prospection conformes", duration: '1h30',
      description: "Personnaliser la prospection avec l'IA en respectant les règles propres à chaque destinataire.",
      items: [
        "Espace partagé avec vos offres et vos e-mails qui ont obtenu des réponses",
        "B2B : message lié au métier du destinataire, information et opposition simple (CNIL)",
        "Particuliers : consentement en principe pour l'e-mail, accord préalable pour le téléphone depuis le 11 août 2026",
        "Relecture du ton par Copilot dans Outlook ou par Gemini dans Gmail avant l'envoi",
      ],
      exercise: "Vous rédigez une séquence de trois e-mails pour un de vos segments, puis contrôlez chaque message avec la grille CNIL.",
    },
    {
      day: 2, title: "Module 5 · Rédiger la proposition à partir de vos trames", duration: '1h30',
      description: "Produire une proposition qui reprend vos formulations validées et n'invente aucun engagement.",
      items: [
        "« Modifier avec Copilot » dans Word sur votre trame, ou projet Claude avec vos propositions gagnées",
        "Le contexte du client repris avec ses propres mots",
        "Prix et remises laissés vides, reportés depuis l'outil de devis",
        "Tout délai ou garantie absent des sources interdit dans la demande",
      ],
      exercise: "Vous rédigez la proposition d'un dossier en négociation en partant du compte rendu du module 3 et de votre trame maison.",
    },
    {
      day: 2, title: "Module 6 · Analyser un dossier de consultation d'appel d'offres", duration: '2h',
      description: "Extraire les exigences d'un dossier de consultation avec leur page, puis bâtir la matrice de conformité.",
      items: [
        "Volume du dossier face au contexte de chaque offre : un million de tokens chez Claude et Gemini Standard, 256 000 chez ChatGPT Business",
        "Chaque exigence extraite avec sa page dans l'outil retenu, Copilot, Claude ou Gemini Notebook",
        "Matrice de conformité contrôlée ligne à ligne",
        "Mémoire technique rédigé à partir de vos anciens mémoires déposés au même endroit",
      ],
      exercise: "Vous tirez la matrice de conformité d'une consultation à laquelle l'équipe a répondu cette année, puis la confrontez à celle que l'équipe avait montée.",
    },
    {
      day: 2, title: "Module 7 · Suivre le pipeline, nourrir le CRM et relancer", duration: '2h',
      description: "Analyser l'export des affaires en cours, garder le CRM comme source unique et préparer les relances sous contrôle.",
      items: [
        "Excel, avec Copilot réglé sur Plan pour voir les étapes avant d'agir, ou Gemini dans Sheets sur l'export",
        "Totaux recomptés avant la réunion commerciale",
        "Connecteurs CRM : lecture des fiches, écriture validée par l'administrateur",
        "Relances confiées à Copilot Cowork ou à un agent ChatGPT, envoi soumis à votre accord, coût à la consommation",
      ],
      exercise: "Vous analysez l'export de votre pipeline, rédigez le commentaire de la prochaine revue et préparez trois relances que vous validez une à une.",
    },
    {
      day: 2, title: "Module 8 · Fixer les règles commerciales et le plan du premier mois", duration: '1h30',
      description: "Écrire ce que l'équipe fait avec quel outil, ce qui passe par la direction et les RH, et ce qui change dans les trente jours.",
      items: [
        "Un outil principal, et le CRM comme seul lieu de rangement des comptes rendus",
        "Données tarifaires et prospects : quel outil, sous quelle offre ; relecture des engagements par la personne qui les exécute",
        "AI Act, article 4 : la formation des vendeurs consignée dans un registre interne ; consultation du CSE dès cinquante salariés",
        "Trente jours : comptes personnels fermés, trame partagée, un référent, une mesure du délai de proposition",
      ],
      exercise: "Vous fixez par écrit les règles de la force de vente, la liste des usages à faire valider par la direction et le programme de vos quatre premières semaines.",
    },
  ],
  objectives: [
    "Choisir l'outil adapté à chaque étape de vente selon votre suite et la sensibilité des données",
    "Construire une demande qui tient dans les cinq assistants et l'appliquer à une fiche de rendez-vous datée et sourcée",
    "Rédiger un compte rendu de découverte où chaque besoin est attribué à son auteur",
    "Produire une proposition à partir de vos trames, prix reportés à la main depuis l'outil de devis",
    "Extraire la matrice de conformité d'un appel d'offres avec la page de chaque exigence",
    "Vérifier la conformité d'une séquence de prospection aux règles CNIL",
    "Préparer des relances automatiques qui attendent votre accord avant de partir",
  ],
  faq: [
    { q: "Copilot ou ChatGPT pour une équipe commerciale sous Microsoft 365 ?", a: "Avec la licence, Copilot lit déjà Outlook, Teams et SharePoint et travaille dans Word et PowerPoint. ChatGPT Business atteint SharePoint et d'autres sources par ses plugins, que l'administrateur active, et dispose d'un connecteur HubSpot. Côté coût, au 7 octobre 2026, Copilot Business revient à 18,20 € HT mensuels par siège, à condition de s'engager pour un an, jusqu'à 300 utilisateurs ; ChatGPT Business était affiché début octobre à 21 € mensuels par utilisateur pour la France, en paiement annuel. Le choix dépend de l'endroit où vit votre information commerciale et de votre CRM." },
    { q: "L'IA peut-elle remplir notre CRM automatiquement ?", a: "HubSpot propose des connecteurs officiels pour ChatGPT et pour Claude, qui respectent les droits de chaque utilisateur, et Gemini se connecte depuis septembre 2026 à HubSpot et à Salesforce par des connecteurs MCP. Pour un autre CRM, vérifiez le catalogue de l'assistant. Une écriture automatique au-delà de ces connecteurs relève d'un projet d'intégration. Dans tous les cas, un humain relit les champs avant validation." },
    { q: "Peut-on transcrire un rendez-vous client pour que l'IA en fasse le compte rendu ?", a: "Teams et Meet affichent un avertissement quand la transcription démarre. Annoncez-la aussi de vive voix et dites à quoi elle sert. La transcription contient des données personnelles du client : conservez-la le temps prévu par votre politique interne, puis supprimez-la. Dans Meet, choisissez la langue de la réunion avant de lancer la prise de notes, car l'outil n'en suit qu'une." },
    { q: "Quelles règles pour la prospection par e-mail rédigée avec l'IA ?", a: "En B2B, la CNIL admet l'e-mail sans consentement préalable si le message concerne le métier du destinataire, qui doit être informé et pouvoir s'opposer simplement. Envers un particulier, l'e-mail de prospection demande en principe son consentement. Pour le téléphone, l'accord préalable du particulier s'impose depuis le 11 août 2026. L'assistant rédige le message ; la conformité de la liste reste l'affaire de l'entreprise." },
    { q: "Quel outil pour un appel d'offres de plusieurs centaines de pages ?", a: "Un outil ancré sur les documents du dossier et capable de les lire en entier. Au 7 octobre 2026, Claude sur abonnement payant et Gemini à partir de Business Standard prennent un million de tokens, ChatGPT Business 256 000 en raisonnement ; Copilot repère l'extrait utile sans publier de plafond. Leur intérêt tient à l'extraction des exigences avec leur page. Les bordereaux de prix se remplissent à la main, depuis vos outils de chiffrage." },
    { q: "Nos commerciaux utilisent déjà ChatGPT sur leur téléphone. Que faire ?", a: "Recensez les usages, puis basculez-les vers une offre d'entreprise. Si la société compte au moins cinquante salariés, associez les RH avant toute charte : un arrêt d'appel rendu à Paris le 21 mai 2026 assimile à l'introduction d'une technologie le fait d'autoriser ChatGPT par une charte, ce qui impose de consulter le CSE. Fermez ensuite les comptes personnels utilisés pour des dossiers clients." },
    { q: "Peut-on confier les relances de devis à un agent ?", a: "Oui, avec un garde-fou. Copilot Cowork, documenté par Microsoft en disponibilité générale pour les comptes professionnels depuis fin septembre 2026, envoie des mails et lance des tâches à heure fixe ou à l'arrivée d'un message, en demandant votre accord avant chaque action sensible ; il se facture à la consommation, au-delà de la licence. Les agents partagés de ChatGPT Business fonctionnent en crédits. Gardez la validation humaine pour tout envoi à un client et relisez le premier lot." },
    { q: "Quel budget pour former une équipe commerciale ?", a: "La journée vaut 1 980 € HT pour le groupe, de deux à douze vendeurs en intra, et le même montant pour un commercial accompagné seul ; les deux jours font 3 960 € HT. Masteria détenant la certification Qualiopi, vous pouvez solliciter l'OPCO de votre secteur, qui finance selon ses critères et ce qu'il lui reste d'enveloppe. Nous fournissons programme et convention ; une équipe basée à Genève ou à Bruxelles reçoit un devis en euros HT, sans passer par un OPCO." },
  ],
  tarifs: {
    titre: "Le prix d'une session pour une force de vente",
    paras: [
      "En amont de la session, le formateur étudie avec le directeur commercial une trame de proposition, un export anonymisé du pipeline et, si l'équipe répond à des marchés, un dossier de consultation récent. Les ateliers tournent ainsi sur vos pièces. Le montant comprend les supports, les prompts réglés sur vos offres, la grille CNIL de prospection et la répartition des outils par étape remise en fin de session.",
      "Imaginons un directeur commercial qui inscrit huit commerciaux terrain, deux chargés d'appels d'offres et deux assistantes commerciales : douze personnes, le plafond d'un groupe. Les deux jours en intra coûtent 3 960 € HT, 330 € HT par inscrit. Un vendeur suivi seul paie 1 980 € HT pour chaque journée. Votre OPCO examine ensuite la prise en charge sur la base de la certification Qualiopi ; programme, convention et devis vous sont fournis pour constituer la demande.",
    ],
  },
  apres: {
    titre: "Après la formation, un assistant qui connaît vos offres",
    texte: "Une fois l'outil principal retenu, Masteria peut bâtir pour la force de vente ce qui le fera travailler sur vos dossiers : une compétence qui prépare la cotation à partir du mail du client, un agent de relance des devis restés sans réponse, toujours soumis à validation, ou un assistant de réponse aux marchés alimenté par vos mémoires gagnants. Projet de conseil et de développement, il n'est pas finançable par votre OPCO et se chiffre au forfait, cadrage terminé.",
  },
  cta: {
    milieu: "Confiez-nous une trame de proposition et le nom de vos outils : chaque atelier repartira d'un dossier client que vous suivez.",
    fin: {
      titre: "Construisons la session sur votre cycle de vente",
      texte: "Décrivez-nous votre CRM, votre suite bureautique, la part des appels d'offres dans votre activité et les assistants que vos commerciaux utilisent déjà. Nous revenons avec un déroulé calé sur vos étapes de vente et des dates possibles.",
    },
  },
  terrain: {
    titre: "Sur le terrain : un outil commun choisi avant d'outiller devis et relances",
    texte: "Chez un distributeur de solutions photovoltaïques de trois personnes, qui gère tout dans son ERP Odoo, le diagnostic mené par Masteria a suivi chaque flux de travail, de la demande entrante à l'encaissement. La direction a reçu ce diagnostic en septembre 2026 et doit arbitrer trois points : un outil commun à l'équipe à la place des comptes personnels, les chantiers prioritaires, dont les devis et les relances, et la charte d'usage. Deux jours de formation dans ses locaux sont programmés en octobre 2026, avec des objectifs fixés en amont et relevés un mois plus tard.",
    lien: '/etudes-de-cas-ia#photovoltaique',
  },
  liensAssocies: [
    { label: "Formation IA pour les équipes commerciales, sans comparatif d'outils", href: '/formation-ia-commercial' },
    { label: "Claude pour la vente : propositions, compétences et appels d'offres", href: '/formation-claude-commercial' },
    { label: "Copilot pour les commerciaux : Outlook, Teams et propositions dans Word", href: '/formation-copilot-commercial' },
    { label: "Agent commercial IA construit sur mesure", href: '/agent-commercial-ia' },
    { label: "Copilot ou ChatGPT : le comparatif détaillé", href: '/copilot-vs-chatgpt' },
  ],
  sources: [
    { name: "Microsoft Learn : fonctions de Copilot dans Outlook et Teams, page du 1er octobre 2026", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
    { name: "Microsoft Learn : Copilot Cowork, accord avant action et tâches déclenchées", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
    { name: "Microsoft France : tarifs de Copilot Business, offre annuelle et mensuelle", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
    { name: "Aide Google Meet : prise de notes automatique et langue de la réunion", url: "https://support.google.com/meet/answer/14754931?hl=fr" },
    { name: "Google Workspace Updates : billets Gemini de septembre 2026, connecteurs MCP", url: "https://workspaceupdates.googleblog.com/search/label/Gemini" },
    { name: "HubSpot : connecter Claude au CRM", url: "https://www.hubspot.com/claude/connector" },
    { name: "Anthropic : taille du contexte sur les offres payantes de Claude", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
    { name: "Mistral, aide en ligne : réglage de l'entraînement pour une équipe Vibe", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
    { name: "CNIL : prospection par courrier électronique, règles B2B et B2C", url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel" },
    { name: "Ministère de l'Économie : démarchage téléphonique et consentement depuis août 2026", url: "https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/professionnels-comment-respecter-la-reglementation-sur-le-demarchage" },
    { name: "Village de la Justice : la charte qui autorise ChatGPT jugée en appel à Paris", url: "https://www.village-justice.com/articles/consultation-cse-outils-intelligence-artificielle-que-les-juges-ont-decide-2025,59066.html" },
  ],
}
