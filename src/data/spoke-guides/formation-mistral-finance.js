// Contenu propre à /formation-mistral-finance (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-mistral-finance',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Mistral pour la finance : clôture, analyse d'écarts, contrôles et notes au comité avec Vibe, dont l'interpréteur de code fiabilise les calculs.",
  intro: "En finance, un assistant IA se juge sur une seule question : les chiffres qu'il écrit sont-ils justes ? Vibe, l'assistant de Mistral (anciennement Le Chat), dispose d'un interpréteur de code qui calcule en Python au lieu de deviner. Ce guide montre comment l'utiliser pendant la clôture, du fichier exporté de la comptabilité jusqu'à la note d'écarts présentée au comité de direction.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe écrit la note de clôture, l'interpréteur de code fait les calculs",
    lead: "Un modèle de langage produit du texte mot après mot. Il peut écrire « l'écart atteint 12 % » avec aplomb alors que le calcul donne 9 %. La règle de travail en découle : tout chiffre calculé passe par l'interpréteur de code, dont vous relisez le programme, et le texte cite les résultats. Avec cette discipline, Vibe sert pendant toute la clôture, de l'analyse des écarts à la note au comité.",
    sections: [
      {
        h3: "Les calculs passent par l'interpréteur de code, que vous pouvez relire",
        paras: [
          "L'interpréteur de code de Vibe exécute du Python dans un environnement isolé, avec les bibliothèques pandas, numpy et matplotlib installées. Il lit des fichiers CSV, XLSX ou JSON, filtre, agrège, repère les valeurs aberrantes et produit des tableaux, des graphiques ou des fichiers à télécharger. Vous décrivez l'analyse en français, Vibe écrit le code. Chaque appel d'outil reste visible dans la conversation, avec ce qui est entré et ce qui est sorti.",
          "Trois limites comptent pour la finance. L'interpréteur est réservé aux offres payantes. Il n'a pas accès à internet et ne récupère pas un fichier depuis une adresse web. Les fichiers déposés ne servent que dans la conversation en cours : pour la clôture suivante, il faut les déposer à nouveau.",
        ],
      },
      {
        h3: "Vibe fabrique aussi des classeurs Excel avec leurs formules",
        paras: [
          "Vibe crée et modifie aussi des classeurs de plusieurs onglets, avec formules et mise en forme, que vous téléchargez au format .xlsx. Vous pouvez aussi ouvrir le classeur dans Google Sheets, mais les modifications faites dans Sheets ne reviennent pas dans la version de Vibe. Cette fonction est réservée aux offres payantes.",
          "Pour un tableau de suivi des écarts ou une grille de rapprochement, ouvrez chaque formule clé, surtout les références entre onglets, avant de brancher le classeur sur vos données réelles.",
        ],
      },
      {
        h3: "Les contrôles de cohérence se confient à des compétences",
        paras: [
          "Trois compétences fournies par Mistral, appelées par / suivi de leur nom, servent pendant la clôture. /data-analysis inspecte, nettoie et agrège des données et signale les anomalies. /structured-extraction transforme des PDF ou des e-mails en tableau, par exemple les montants et les échéances d'une série de contrats. /document-review relit un document sur sa complétude et sa cohérence.",
          "Votre routine de contrôle peut devenir une compétence maison : après une première clôture réussie, demandez à Vibe de la convertir. Elle devient un fichier d'instructions partagé avec l'équipe, qui s'applique à l'identique chaque mois.",
        ],
        list: [
          "Le total du fichier exporté égale-t-il le total de la balance ?",
          "Chaque montant cité dans la note figure-t-il dans le tableau annexe, au même arrondi ?",
          "Les écarts au-dessus du seuil ont-ils tous une explication, et une seule ?",
          "Les comptes sans mouvement ce mois-ci en avaient-ils le mois dernier ?",
        ],
      },
      {
        h3: "La note au comité se relit avec les questions du comité",
        paras: [
          "Un projet Vibe par clôture garde au même endroit les instructions, les fichiers et les conversations du mois. Une Bibliothèque partagée conserve les notes des mois précédents, le plan de comptes et la procédure de clôture : Vibe peut alors reprendre votre structure et votre vocabulaire, et renvoyer par une note numérotée au document cité.",
          "Avant la réunion, /challenge-my-thinking joue le rôle du membre du comité qui pose la question gênante. /stakeholder-translator réécrit la même analyse pour un autre lecteur, par exemple le comité d'audit plutôt que la direction générale. Les causes des écarts restent votre matière : elles viennent des opérationnels, et Vibe ne fait que les mettre en forme.",
        ],
      },
    ],
    table: {
      caption: "Le calendrier de clôture et la fonction de Vibe qui sert chaque étape",
      headers: ["Étape de clôture", "Fonction de Vibe", "Point de vigilance"],
      rows: [
        ["Contrôler l'export de la comptabilité", "Interpréteur de code, compétence /data-analysis", "Faites afficher le total et comparez-le à la balance"],
        ["Calculer les écarts au budget et à l'an dernier", "Interpréteur de code", "Relisez le code des agrégations, surtout les regroupements de comptes"],
        ["Relever les montants de contrats ou d'échéances", "Compétence /structured-extraction sur les PDF", "Pointez un échantillon avec les originaux"],
        ["Monter le tableau de suivi", "Création de classeurs, export .xlsx", "Ouvrez chaque formule entre onglets"],
        ["Rédiger la note d'écarts", "Projet de clôture, Bibliothèque des notes passées", "Le texte cite les résultats du calcul, il ne recalcule rien"],
        ["Préparer le comité", "Compétences /challenge-my-thinking et /stakeholder-translator", "Les causes d'écart viennent des opérationnels"],
      ],
    },
    cas: {
      h3: "Cas pratique : de l'export comptable à la note d'écarts du comité de direction",
      contexte: "Prenons le contrôleur de gestion d'une PME industrielle. La clôture de septembre est passée, le comité de direction se tient mardi, et il dispose d'un export CSV du réel, du budget et de l'an dernier par centre de coût et par compte. Il veut une note de deux pages dont chaque chiffre soit traçable.",
      etapes: [
        "Créez un projet « Clôture septembre » dans le menu latéral et attachez avec le bouton + la Bibliothèque qui contient les notes des mois précédents.",
        "Déposez le fichier CSV dans la conversation. Si vos données contiennent des salaires nominatifs, agrégez-les par centre de coût avant l'export.",
        "Collez le prompt ci-dessous et suivez dans la conversation les étapes que l'interpréteur de code exécute.",
        "Ouvrez le code des calculs. Vérifiez le total de contrôle et deux écarts pris au hasard dans votre outil de gestion.",
        "Complétez à la main les causes que Vibe a marquées « à documenter », puis appelez /challenge-my-thinking sur la note terminée.",
      ],
      prompt: "Je prépare la note d'écarts de la clôture de septembre pour le comité de direction de mardi.\n\nLe fichier CSV joint contient une ligne par centre de coût et par compte, avec cinq colonnes : centre de coût, compte, réel septembre, budget septembre, réel septembre de l'an dernier. Les montants sont en euros.\n\nUtilise l'interpréteur de code pour tous les calculs. N'écris aucun chiffre que le code n'a pas produit.\n\nÉtape 1 : affiche le nombre de lignes, le total de chaque colonne et les lignes vides ou mal formées. Je comparerai le total du réel avec ma balance avant de continuer.\nÉtape 2 : calcule pour chaque centre de coût l'écart au budget et l'écart à l'an dernier, en euros et en pourcentage.\nÉtape 3 : liste les écarts au budget qui dépassent 5 % et qui dépassent aussi 20 000 euros, du plus fort au plus faible.\nÉtape 4 : rédige une note de deux pages au plus, dans la structure et le vocabulaire des notes de la Bibliothèque. Pour chaque écart significatif, écris le montant, le pourcentage et laisse la cause sous la mention « à documenter », sauf si elle figure dans une note précédente ; dans ce cas, cite la note.\n\nTermine par un tableau annexe qui reprend chaque chiffre cité dans la note, pour que je puisse les pointer un par un.",
      resultat: "Vous obtenez un contrôle d'intégrité du fichier, le tableau des écarts, la liste des écarts significatifs et une note avec son annexe, dont chaque chiffre vient d'un calcul relisible. Avant diffusion, comparez le total du réel à votre balance et vérifiez qu'aucune cause n'a été inventée. Si le code traduit la double condition sur 5 % et 20 000 euros par « l'un ou l'autre », toute la liste change : lisez cette ligne du programme.",
    },
    pieges: [
      {
        titre: "Un pourcentage écrit dans la phrase n'a pas été calculé",
        texte: "Si vous demandez une analyse sans exiger l'interpréteur de code, Vibe peut produire un chiffre plausible et faux. Écrivez dans chaque prompt « n'écris aucun chiffre que le code n'a pas produit », et inscrivez cette règle dans les instructions de votre projet de clôture.",
      },
      {
        titre: "Une cause d'écart est inventée pour faire propre",
        texte: "Un modèle de langage comble volontiers un vide avec une explication vraisemblable : effet saisonnier, hausse des matières premières. Imposez la mention « à documenter » pour toute cause absente des sources, et faites valider chaque explication par le responsable du centre de coût.",
      },
      {
        titre: "Les comptes d'une société cotée circulent avant publication",
        texte: "Pour une société cotée, des résultats non publiés peuvent constituer une information privilégiée au sens de l'article 7 du règlement européen sur les abus de marché, et l'article 18 impose de tenir la liste des personnes qui y ont accès. Voyez avec votre déontologue quels outils sont autorisés avant d'y déposer une clôture.",
      },
      {
        titre: "Le compte personnel sert à l'entraînement par défaut",
        texte: "Sur les offres Free et Pro, les échanges servent par défaut à l'entraînement des modèles tant que l'option n'est pas coupée dans les réglages de confidentialité. Sur Team, l'administrateur la coupe pour toute l'organisation ; sur Enterprise, elle est coupée par défaut. Les données de clôture ne vont que dans un espace réglé.",
      },
    ],
  },
  audience: [
    {
      "title": "Contrôleurs de gestion",
      "desc": "Vous portez la clôture mensuelle, l'analyse des écarts et le reporting. Vous apprenez à faire calculer Vibe par son interpréteur de code et à vérifier le programme utilisé."
    },
    {
      "title": "DAF et responsables comptables de PME et d'ETI",
      "desc": "Vous signez les notes au comité et vous répondez de la confidentialité des chiffres. Vous apprenez à choisir l'offre et les règles qui conviennent à vos données de clôture."
    },
    {
      "title": "Analystes financiers et trésoriers",
      "desc": "Vous exploitez des contrats, des échéanciers et des classeurs de suivi. Vibe extrait les montants des PDF et construit les classeurs que vous vérifiez."
    }
  ],
  useCases: [
    {
      "icon": "📊",
      "title": "Analyse des écarts",
      "desc": "L'interpréteur de code calcule les écarts au budget et à l'an dernier, puis isole ceux qui dépassent vos seuils."
    },
    {
      "icon": "🔎",
      "title": "Contrôle de l'export comptable",
      "desc": "Nombre de lignes, totaux par colonne et lignes mal formées affichés avant toute analyse, pour comparaison avec la balance."
    },
    {
      "icon": "📋",
      "title": "Note au comité",
      "desc": "Une note rédigée dans la structure de vos notes passées, dont chaque chiffre figure dans une annexe de pointage."
    },
    {
      "icon": "📈",
      "title": "Classeurs de suivi",
      "desc": "Des classeurs de plusieurs onglets avec formules, téléchargés au format .xlsx et vérifiés formule par formule."
    },
    {
      "icon": "🏦",
      "title": "Extraction de contrats",
      "desc": "La compétence /structured-extraction relève montants et échéances d'emprunts, de baux ou de contrats fournisseurs en PDF."
    },
    {
      "icon": "🔐",
      "title": "Confidentialité de la clôture",
      "desc": "Réglage de l'entraînement selon l'offre et précautions pour les résultats non publiés d'une société cotée."
    }
  ],
  modules: [
    {
      "day": 1,
      "title": "Module 1 · Comprendre où Vibe calcule et où il écrit",
      "duration": "1h30",
      "description": "Savoir d'où vient chaque chiffre avant de s'en servir.",
      "items": [
        "Un modèle de langage produit du texte : pourquoi un pourcentage écrit peut être faux",
        "L'interpréteur de code : Python, pandas, code visible dans la conversation",
        "Limites : offres payantes, pas d'accès à internet, fichiers valables pour la conversation en cours",
        "La règle « aucun chiffre que le code n'a pas produit »"
      ],
      "exercise": "Vous posez la même question d'écart sur l'un de vos fichiers, avec et sans interpréteur, et vous comparez les résultats."
    },
    {
      "day": 1,
      "title": "Module 2 · Contrôler un export avant analyse",
      "duration": "2h",
      "description": "Vérifier l'intégrité des données avant d'en tirer une conclusion.",
      "items": [
        "La compétence /data-analysis sur un export CSV ou XLSX",
        "Nombre de lignes, totaux par colonne, lignes vides ou mal formées",
        "Comparaison du total avec la balance",
        "Comptes sans mouvement ce mois-ci et actifs le mois précédent"
      ],
      "exercise": "Vous passez l'export de votre dernière clôture au contrôle d'intégrité et vous rapprochez le total de votre balance."
    },
    {
      "day": 1,
      "title": "Module 3 · Calculer et classer les écarts",
      "duration": "2h",
      "description": "Produire un tableau d'écarts dont chaque calcul se relit.",
      "items": [
        "Écarts au budget et à l'an dernier, en euros et en pourcentage",
        "Double seuil en valeur et en pourcentage",
        "Lire la ligne de code qui applique le seuil",
        "Regroupements de comptes conformes à votre plan analytique"
      ],
      "exercise": "Vous produisez le tableau des écarts significatifs de votre dernier mois clos."
    },
    {
      "day": 1,
      "title": "Module 4 · Monter les classeurs de suivi",
      "duration": "1h30",
      "description": "Faire construire le classeur et garder la vérification.",
      "items": [
        "Création de classeurs de plusieurs onglets avec formules, sur les offres payantes",
        "Téléchargement au format .xlsx",
        "Ouverture dans Google Sheets, dont les modifications ne reviennent pas dans Vibe",
        "Contrôle des formules entre onglets avant de brancher les données"
      ],
      "exercise": "Vous faites construire le classeur de suivi de vos écarts et vous vérifiez chaque formule clé."
    },
    {
      "day": 2,
      "title": "Module 5 · Extraire les données des contrats",
      "duration": "1h30",
      "description": "Passer d'une pile de PDF à un tableau de rapprochement.",
      "items": [
        "La compétence /structured-extraction sur des PDF",
        "Échéanciers d'emprunts, baux et contrats fournisseurs",
        "Pointage d'un échantillon avec les originaux",
        "Tableau prêt pour le rapprochement comptable"
      ],
      "exercise": "Vous extrayez les échéances d'une série de vos contrats et vous pointez un échantillon avec les originaux."
    },
    {
      "day": 2,
      "title": "Module 6 · Rédiger la note au comité",
      "duration": "2h",
      "description": "Écrire une note dont chaque chiffre se retrouve en annexe.",
      "items": [
        "Projet de clôture et Bibliothèque des notes des mois précédents",
        "Causes d'écart marquées « à documenter » tant qu'elles ne sont pas confirmées",
        "Annexe de pointage qui reprend chaque chiffre cité",
        "Relecture de cohérence avec /document-review"
      ],
      "exercise": "Vous rédigez la note d'écarts de votre dernier mois clos avec son annexe de pointage."
    },
    {
      "day": 2,
      "title": "Module 7 · Préparer les questions du comité",
      "duration": "2h",
      "description": "Arriver en réunion avec les réponses aux questions gênantes.",
      "items": [
        "La compétence /challenge-my-thinking sur la note terminée",
        "Réécrire l'analyse pour le comité d'audit ou la direction générale avec /stakeholder-translator",
        "Validation des causes par les responsables de centres de coût",
        "Version courte pour la direction générale"
      ],
      "exercise": "Vous préparez les réponses aux questions probables de votre comité sur votre propre note."
    },
    {
      "day": 2,
      "title": "Module 8 · Fixer les règles d'usage de la direction financière",
      "duration": "1h30",
      "description": "Décider quelles données entrent dans l'outil et qui signe.",
      "items": [
        "Données autorisées selon l'offre et réglage de l'entraînement",
        "Société cotée : information privilégiée et liste d'initiés selon le règlement sur les abus de marché",
        "Routine de contrôle de clôture enregistrée en compétence partagée",
        "Signature et responsabilité de chaque note diffusée"
      ],
      "exercise": "Vous rédigez la règle d'usage de Vibe pour votre direction financière et la compétence de contrôle de clôture."
    }
  ],
  objectives: [
    "Faire calculer des écarts par l'interpréteur de code et vérifier le programme utilisé",
    "Contrôler l'intégrité d'un export comptable avant toute analyse",
    "Rédiger une note d'écarts dont chaque chiffre est traçable dans une annexe",
    "Extraire les montants et les échéances d'une série de contrats et en pointer un échantillon",
    "Paramétrer des règles de confidentialité adaptées aux données de clôture"
  ],
  faq: [
    { q: "Vibe fait-il des calculs fiables ?", a: "Les calculs sont fiables quand ils passent par l'interpréteur de code, qui exécute du Python et dont vous pouvez relire le programme. Un chiffre écrit directement dans le texte, sans calcul, peut être faux. Exigez l'interpréteur dans vos prompts et vérifiez toujours un total de contrôle." },
    { q: "Vibe lit-il un classeur Excel de plusieurs onglets ?", a: "Oui. Vibe accepte les fichiers Excel, CSV, ODS et Numbers, et l'interpréteur de code explore les fichiers XLSX avec pandas. Précisez l'onglet et la plage à analyser, et faites afficher le nombre de lignes lues pour vérifier que rien n'a été ignoré." },
    { q: "Vibe peut-il produire un fichier Excel ?", a: "Oui, sur les offres payantes. Vibe crée des classeurs de plusieurs onglets avec formules et mise en forme, téléchargeables au format .xlsx. Un classeur ouvert dans Google Sheets ne renvoie pas ses modifications vers Vibe." },
    { q: "Vibe se connecte-t-il à notre ERP ou à notre outil de consolidation ?", a: "Aucun ERP ne figure parmi les connecteurs présentés dans la documentation de Mistral. Si l'éditeur de votre ERP publie un serveur MCP (le protocole standard de connexion des assistants), votre administrateur peut le brancher comme connecteur personnalisé. Les développeurs peuvent aussi publier des Workflows, des automatisations codées dans Mistral Studio que les utilisateurs lancent depuis Vibe." },
    { q: "Où sont hébergées les données financières confiées à Vibe ?", a: "Le centre d'aide de Mistral annonce un hébergement par défaut dans l'Union européenne, avec des transferts temporaires possibles chez des sous-traitants listés dans son Trust Center. Pour les clients Enterprise, Mistral propose un déploiement sur site, en cloud privé ou sur son propre cloud avec résidence complète des données." },
    { q: "Les fichiers déposés restent-ils disponibles d'un mois sur l'autre ?", a: "Pas dans l'interpréteur de code : la documentation précise que les fichiers déposés ne servent que dans la conversation en cours. Pour garder des documents de référence d'une clôture à l'autre, comme les notes passées ou la procédure, utilisez une Bibliothèque ou les fichiers d'un projet." },
    { q: "Comment financer une formation Vibe pour une direction financière ?", a: "Masteria est certifié Qualiopi, ce qui permet une prise en charge par votre OPCO selon ses critères. En intra, la formation accueille jusqu'à 12 participants, au tarif de 1 980 € HT par jour. Nous préparons le dossier de financement avec vous." },
  ],
  sources: [
    { name: "Mistral Docs : Code interpreter", url: "https://docs.mistral.ai/vibe/work/code-interpreter" },
    { name: "Mistral Docs : Spreadsheets", url: "https://docs.mistral.ai/vibe/work/spreadsheets" },
    { name: "Mistral Docs : Skills (compétences intégrées)", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Mistral Docs : Projects", url: "https://docs.mistral.ai/vibe/work/projects" },
    { name: "Mistral Docs : Workflows", url: "https://docs.mistral.ai/vibe/work/workflows" },
    { name: "Mistral Help Center : où sont stockées mes données", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
    { name: "Mistral : Vibe, options de déploiement Enterprise", url: "https://mistral.ai/products/vibe/" },
    { name: "Règlement (UE) n° 596/2014 sur les abus de marché (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32014R0596" },
  ],
}
