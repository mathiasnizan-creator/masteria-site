// Contenu propre à /formation-copilot-word-excel (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-copilot-word-excel',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Copilot Word Excel : Modifier avec Copilot, modes Édition, Plan et Conversation, règles de classeur, licences et pièges 2026. Qualiopi, OPCO.",
  intro: "Dans Word et Excel, Copilot modifie maintenant le fichier ouvert. Il ajoute une section à votre note, construit un tableau croisé dynamique, reformate un onglet entier pendant que vous regardez. Cette formation bureautique apprend à choisir le bon mode, à préparer vos fichiers et à relire ce que Copilot a changé, sur vos propres documents.",
  guide: {
    kicker: "Guide terrain bureautique",
    h2: "Copilot écrit dans vos documents et vos classeurs : apprenez à garder la main sur ce qu'il change",
    lead: "La question utile en 2026 porte sur le contrôle. Copilot peut rédiger une note dans Word ou remodeler un classeur Excel en plusieurs étapes, et les changements apparaissent en direct. Le bon réflexe consiste à choisir le mode avant d'écrire la demande, à préparer les données, puis à relire comme on relit le travail d'un stagiaire doué. Les fonctions disponibles dépendent de votre licence : commencez par la vérifier.",
    sections: [
      {
        h3: "Votre licence décide des fonctions que vous voyez",
        paras: [
          "Microsoft 365 Copilot s'appelle désormais Microsoft Copilot. Word et Excel affichent une mention qui vous situe. « Microsoft 365 Copilot (Premium) » signale la licence complémentaire et un accès prioritaire. « Microsoft 365 Copilot (Basic) » signale un accès standard, sans licence complémentaire. « Copilot Chat (Basic) » signifie que Copilot n'est pas disponible dans Word et Excel.",
          "Trois fonctions demandent la licence complémentaire : Modifier avec Copilot dans Word, la source « Travail » d'Excel qui cherche dans vos documents professionnels, et le sélecteur de modèle, qui propose Claude d'Anthropic et GPT d'OpenAI si l'administrateur a autorisé Anthropic.",
        ],
      },
      {
        h3: "Dans Word, Modifier avec Copilot travaille dans le document ouvert",
        paras: [
          "Le bouton Action dynamique Copilot ouvre le volet en mode Modifier. Pour une simple question, choisissez Chat uniquement : Copilot répond sans toucher au texte. Pour citer une source, tapez / puis le nom d'un fichier, d'un e-mail ou d'une réunion. Dans un document partagé, Copilot montre un aperçu et attend votre accord. Microsoft documente des limites à connaître avant de confier un document en relecture.",
        ],
        list: [
          "Modifier avec Copilot ne génère ni n'insère d'image.",
          "Il ne gère pas les commentaires, et un commentaire ancré sur un paragraphe réécrit peut disparaître.",
          "Il n'accepte ni ne refuse les modifications suivies, mais ses propres changements sont suivis si le suivi est activé.",
          "Sur un long document, le milieu reçoit moins d'attention que le début et la fin : Microsoft conseille de résumer par parties.",
        ],
      },
      {
        h3: "Dans Excel, choisissez entre Édition, Plan et Conversation avant d'écrire",
        paras: [
          "L'icône Copilot se trouve en bas à droite. Le volet s'ouvre en mode Édition : Copilot modifie le classeur et vous voyez son raisonnement défiler. Le mode Plan propose d'abord une démarche, que vous corrigez avant qu'il agisse. Le mode Conversation analyse et répond sans rien modifier. Les trois modes existent sur Windows, Mac et le web.",
          "Trois conditions expliquent la plupart des échecs. L'édition exige un calcul en mode Automatique. Une bibliothèque SharePoint qui impose l'extraction bloque Copilot sur Windows et Mac ; Excel sur le web fonctionne. Le format Strict Open XML n'est pas pris en charge : enregistrez en .xlsx. Chaque modification enregistrée devient visible par les co-auteurs ; pour expérimenter, coupez l'enregistrement automatique.",
        ],
      },
      {
        h3: "Règles et compétences fixent vos conventions, en anglais pour l'instant",
        paras: [
          "Une feuille visible nommée .Rules, avec une règle par cellule en colonne A, dicte à Copilot les conventions du classeur : format des montants, palette des graphiques. On la crée depuis Ajouter du contenu de travail, puis Créer des règles de classeur, et elle voyage avec le fichier. La page anglaise de Microsoft précise que les règles ne sont pleinement prises en charge qu'en anglais ; la page française l'omet. Les compétences, un fichier SKILL.md par tâche répétitive, exigent Office affiché en anglais.",
          "La fonction =COPILOT(), testée en préversion, a disparu le 14 septembre 2026. Une cellule qui la recalcule affiche #NOM?. Python dans Excel reste inclus, en calcul standard, dans les abonnements Entreprise et professionnels.",
        ],
      },
    ],
    table: {
      caption: "Besoin courant, endroit où cliquer et point de vigilance (septembre 2026)",
      headers: ["Besoin", "Où cliquer", "Vigilance"],
      rows: [
        ["Premier jet d'une note depuis un compte rendu", "Word : volet Copilot, / pour citer le fichier", "Relire chiffres, noms et dates."],
        ["Reprendre un document en relecture", "Word : Outils, Modifier avec Copilot", "Traiter les commentaires d'abord."],
        ["Résumer un rapport de soixante pages", "Word : Chat uniquement, par section", "Le milieu reçoit moins d'attention."],
        ["Nettoyer et fusionner trois onglets", "Excel : mode Plan, puis validation", "Calcul sur Automatique."],
        ["Comprendre un classeur hérité", "Excel : mode Conversation", "Faire expliquer chaque formule."],
        ["Rouvrir un classeur qui utilisait =COPILOT()", "Aucun remplacement dans la cellule", "Copier les valeurs avant tout recalcul."],
      ],
    },
    cas: {
      h3: "Cas pratique : de l'export d'une enquête interne à la note de synthèse",
      contexte: "Prenons une chargée de mission qui a lancé un questionnaire Microsoft Forms sur le télétravail. Elle récupère 180 réponses dans Excel, dont une colonne de commentaires libres, et doit remettre une note de deux pages au comité de direction vendredi. Le scénario est pédagogique.",
      etapes: [
        "Ouvrez le classeur, enregistré sur OneDrive ou SharePoint en .xlsx. Dans l'onglet Formules, vérifiez que les Options de calcul sont sur Automatique.",
        "Cliquez sur l'icône Copilot, passez en mode Plan et collez le prompt ci-dessous.",
        "Lisez le plan, corrigez en une phrase l'étape qui ne vous convient pas, puis validez.",
        "Relisez une vingtaine de commentaires pris au hasard avec leur thème. S'ils sont mal classés, précisez les catégories et relancez l'étape 2.",
        "Copiez le tableau et le graphique dans Word, choisissez Outils puis Modifier avec Copilot, et demandez une note de deux pages fondée sur ces seuls éléments. Activez le suivi des modifications avant la relecture.",
      ],
      prompt: "Ce classeur contient les réponses à un questionnaire interne sur le télétravail. Chaque ligne correspond à un répondant. Les colonnes donnent le service, le nombre de jours de télétravail par semaine, une note de satisfaction de 1 à 5 et un commentaire libre.\n\nPropose-moi un plan, puis exécute-le après ma validation :\n1. Crée un onglet « Données propres » : supprime les doublons, uniformise les noms de services, surligne en orange les lignes sans note.\n2. Ajoute une colonne « Thème » qui range chaque commentaire dans une seule catégorie : matériel et connexion, réunions, isolement, relation avec le manager, trajets, autre. Pour un commentaire vide, écris « sans commentaire ».\n3. Crée un onglet « Synthèse » avec un tableau croisé dynamique : note moyenne et nombre de répondants par service, puis nombre de commentaires par thème.\n4. Ajoute un graphique en barres de la note moyenne par service, de la plus basse à la plus haute.\n5. Sous le tableau, écris trois constats courts, chacun appuyé sur un chiffre du tableau.\n\nNe modifie pas l'onglet d'origine. N'invente aucune valeur : si une information manque, dis-le.",
      resultat: "Vous obtenez deux onglets de plus et un graphique prêt à coller. Le classement des commentaires reste la partie fragile : un commentaire ambigu finit parfois dans « autre », parfois dans un thème voisin. Les moyennes sont calculées par Excel et sont justes si les données propres le sont. Vérifiez que chaque chiffre cité dans les constats existe dans le tableau.",
    },
    pieges: [
      {
        titre: "Lancer une modification sur le fichier partagé du service",
        texte: "Vos collègues voient le résultat dès l'enregistrement. Travaillez sur une copie ou coupez l'enregistrement automatique ; l'historique des versions permet de revenir en arrière.",
      },
      {
        titre: "Perdre les remarques du relecteur dans Word",
        texte: "Traitez les commentaires et tranchez les modifications suivies avant de demander une réécriture à Copilot.",
      },
      {
        titre: "Rédiger ses règles en français",
        texte: "Les règles ne sont pleinement prises en charge qu'en anglais. Écrivez-les courtes, une par cellule, avec un exemple du résultat attendu.",
      },
      {
        titre: "Chercher un bouton que votre licence n'affiche pas",
        texte: "Regardez la mention Basic ou Premium dans l'application. Les paramètres de l'organisation peuvent aussi masquer une fonction : votre service informatique peut le vérifier.",
      },
    ],
  },
  audience: [
    {
      "title": "Chargés de mission, assistants et office managers",
      "desc": "Vous produisez notes, comptes rendus et tableaux de suivi pour plusieurs services. Vous voulez que Copilot fasse le premier jet et le nettoyage, et garder la main sur le fichier."
    },
    {
      "title": "Managers et chefs de projet",
      "desc": "Vous relisez et consolidez les documents de l'équipe. Vous devez savoir ce que Modifier avec Copilot change dans un document partagé et comment revenir en arrière."
    },
    {
      "title": "Utilisateurs réguliers d'Excel",
      "desc": "Vous manipulez des exports, des tableaux croisés dynamiques et des classeurs hérités. Vous voulez faire travailler Copilot en mode Plan et fixer vos conventions dans une feuille de règles."
    }
  ],
  useCases: [
    {
      "icon": "📄",
      "title": "Premier jet d'une note",
      "desc": "Rédiger dans Word à partir d'un compte rendu cité avec /, puis relire chiffres, noms et dates."
    },
    {
      "icon": "📝",
      "title": "Réécriture d'un document partagé",
      "desc": "Modifier avec Copilot travaille sur place, avec un aperçu dans les documents partagés et le suivi des modifications."
    },
    {
      "icon": "📋",
      "title": "Résumé d'un long rapport",
      "desc": "Chat uniquement et résumé par sections, pour que le milieu du document ne passe pas au second plan."
    },
    {
      "icon": "📊",
      "title": "Nettoyage et fusion d'onglets",
      "desc": "Mode Plan puis exécution dans Excel, calcul sur Automatique, onglet d'origine conservé."
    },
    {
      "icon": "📊",
      "title": "Explication d'un classeur hérité",
      "desc": "Le mode Conversation fait expliquer chaque formule et ne modifie rien."
    },
    {
      "icon": "📈",
      "title": "Synthèse d'une enquête interne",
      "desc": "Classement des commentaires libres, tableau croisé dynamique et graphique dans Excel, puis note dans Word."
    }
  ],
  modules: [
    {
      "day": 1,
      "title": "Module 1 · Choisir le bon Copilot selon votre licence",
      "duration": "1h30",
      "description": "Savoir ce que votre licence ouvre dans Word et Excel avant de construire vos méthodes.",
      "items": [
        "Mentions Premium, Basic et Copilot Chat (Basic) dans Word et Excel",
        "Fonctions réservées à la licence : Modifier avec Copilot, source Travail, sélecteur de modèle",
        "Bouton Action dynamique Copilot, mode Modifier et Chat uniquement",
        "Protection des données d'entreprise et recherche web vers Bing"
      ],
      "exercise": "Relever la mention affichée dans votre Word et votre Excel, puis lister les fonctions auxquelles vous avez accès."
    },
    {
      "day": 1,
      "title": "Module 2 · Rédiger dans Word à partir de vos sources",
      "duration": "2h",
      "description": "Obtenir un premier jet exploitable en donnant à Copilot les bonnes sources et une demande précise.",
      "items": [
        "Citer un fichier, un e-mail ou une réunion avec /",
        "Partir d'un modèle ou d'un document existant pour garder la mise en forme",
        "Préciser public, ton, format et longueur dans la demande",
        "Relire les faits, les chiffres et les noms repris par Copilot"
      ],
      "exercise": "Rédiger une note de deux pages à partir d'un de vos comptes rendus récents."
    },
    {
      "day": 1,
      "title": "Module 3 · Réécrire un document en relecture avec Modifier avec Copilot",
      "duration": "2h",
      "description": "Faire modifier un document sur place et garder le contrôle sur les changements.",
      "items": [
        "Outils, puis Modifier avec Copilot : réorganiser, raccourcir, restructurer",
        "Aperçu des modifications dans un document partagé",
        "Commentaires et modifications suivies : ce que Copilot ne gère pas",
        "Annuler et revenir à une version antérieure"
      ],
      "exercise": "Traiter les commentaires d'un de vos documents en cours, puis faire réécrire une section par Copilot avec le suivi des modifications activé."
    },
    {
      "day": 1,
      "title": "Module 4 · Comprendre et résumer un long document",
      "duration": "1h30",
      "description": "Interroger et résumer un rapport long sans perdre ses passages importants.",
      "items": [
        "Poser des questions ciblées sur un document long",
        "Résumer par sections, puis assembler",
        "Pourquoi le milieu d'un long fichier reçoit moins d'attention",
        "Vérifier l'originalité avec Éditeur, Similitude"
      ],
      "exercise": "Résumer par parties un de vos rapports longs et vérifier trois passages que vous savez importants."
    },
    {
      "day": 2,
      "title": "Module 5 · Préparer un classeur pour Copilot dans Excel",
      "duration": "1h30",
      "description": "Mettre vos fichiers dans l'état qui permet à Copilot de les modifier sans erreur.",
      "items": [
        "Fichier .xlsx sur OneDrive ou SharePoint, calcul sur Automatique",
        "Bibliothèques SharePoint à extraction obligatoire : passer par Excel sur le web",
        "Enregistrement automatique, copie de travail et historique des versions",
        "Menu Sélectionner les sources : web, travail, connecteurs"
      ],
      "exercise": "Mettre en état un de vos classeurs de suivi et vérifier que Copilot peut y travailler."
    },
    {
      "day": 2,
      "title": "Module 6 · Transformer un classeur en mode Plan",
      "duration": "2h",
      "description": "Faire exécuter à Copilot une transformation en plusieurs étapes et contrôler le résultat.",
      "items": [
        "Rédiger une demande en étapes numérotées",
        "Lire et corriger le plan avant l'exécution",
        "Nettoyage, fusion d'onglets, tableaux croisés dynamiques et graphiques",
        "Contrôle des formules produites et des constats rédigés"
      ],
      "exercise": "Faire nettoyer et synthétiser un de vos exports par Copilot en mode Plan, puis contrôler chaque chiffre du résultat."
    },
    {
      "day": 2,
      "title": "Module 7 · Analyser du texte libre et passer d'Excel à Word",
      "duration": "2h",
      "description": "Classer des réponses libres dans Excel et en tirer une note dans Word.",
      "items": [
        "Classer des commentaires dans des catégories définies",
        "Contrôler un échantillon et affiner les définitions",
        "Remplacer les usages de =COPILOT(), retirée le 14 septembre 2026",
        "Coller tableau et graphique dans Word et rédiger la note avec Modifier avec Copilot"
      ],
      "exercise": "Classer les réponses libres d'une de vos enquêtes internes et en tirer une note d'une page."
    },
    {
      "day": 2,
      "title": "Module 8 · Fixer les conventions de l'équipe",
      "duration": "1h30",
      "description": "Rendre les résultats de Copilot homogènes d'une personne à l'autre et définir la relecture.",
      "items": [
        "Feuille .Rules : une règle par cellule, en anglais, visible",
        "Compétences SKILL.md dans OneDrive pour les tâches répétitives",
        "Règles de relecture avant diffusion d'un document produit avec Copilot",
        "Responsable des modèles Word et des classeurs de référence"
      ],
      "exercise": "Rédiger la feuille .Rules de votre classeur le plus partagé et les règles de relecture de votre équipe."
    }
  ],
  objectives: [
    "Rédiger dans Word une note à partir de sources citées avec / et vérifier chaque fait repris",
    "Réécrire un document partagé avec Modifier avec Copilot en conservant commentaires et suivi des modifications",
    "Choisir entre les modes Édition, Plan et Conversation d'Excel selon la tâche",
    "Paramétrer un classeur pour que Copilot puisse le modifier : format, emplacement, mode de calcul",
    "Contrôler les formules, tableaux croisés dynamiques et constats produits par Copilot",
    "Rédiger une feuille .Rules qui applique les conventions de l'équipe"
  ],
  faq: [
    {
      q: "Faut-il une licence Copilot pour utiliser Copilot dans Word et Excel ?",
      a: "Pas toujours. Les abonnements Microsoft 365 Business et Entreprise éligibles à Copilot Chat donnent un accès standard à Copilot dans Excel et Word, signalé par la mention Basic. La licence complémentaire apporte l'accès prioritaire, Modifier avec Copilot dans Word, la source Travail et le choix du modèle. Si l'application affiche « Copilot Chat (Basic) », Copilot n'est pas disponible dans Word et Excel pour vous.",
    },
    {
      q: "Quelle différence entre les modes Édition, Plan et Conversation dans Excel ?",
      a: "Le mode Édition modifie le classeur à partir de votre demande. Le mode Plan propose d'abord une démarche que vous validez ou corrigez. Le mode Conversation analyse et répond dans le volet sans toucher au fichier. Pour un classeur partagé ou important, commencez par Plan.",
    },
    {
      q: "Peut-on choisir entre Claude et GPT dans Word et Excel ?",
      a: "Oui, avec une licence Copilot commerciale et si l'administrateur a autorisé Anthropic comme sous-traitant dans le Centre d'administration Microsoft 365. Le sélecteur se trouve en haut à droite du volet Copilot et propose aussi Auto. Dans Excel, le choix vaut pour la session : à la fermeture, Copilot revient au modèle par défaut.",
    },
    {
      q: "Qu'est devenue la fonction =COPILOT() dans Excel ?",
      a: "Microsoft l'a retirée le 14 septembre 2026, après une préversion réservée aux programmes Frontier et Insider. Les valeurs déjà calculées restent en cache, mais une cellule recalculée affiche #NOM?. Microsoft renvoie vers le volet Copilot pour résumer, classer ou générer du texte à partir d'une plage.",
    },
    {
      q: "Copilot peut-il résumer un document de plus de cent pages ?",
      a: "Il peut répondre à une question précise sur un long document, car il cherche le passage utile. Un résumé complet est plus fragile : Microsoft signale que le milieu du fichier reçoit moins d'attention. Découpez par parties, résumez chaque partie, puis assemblez.",
    },
    {
      q: "Nos documents servent-ils à entraîner les modèles ?",
      a: "Avec un compte professionnel, la protection des données d'entreprise s'applique : prompts et réponses restent dans le périmètre du service Microsoft 365, sous l'avenant de protection des données de Microsoft. Copilot n'accède qu'aux fichiers que vous pouvez déjà ouvrir. La recherche web fait exception : une requête courte part vers Bing, sans votre nom ni celui de votre entreprise.",
    },
    {
      q: "Quel niveau d'Excel faut-il pour suivre la formation ?",
      a: "Savoir ce qu'est un tableau, un filtre et un tableau croisé dynamique suffit. Copilot construit les formules et les tableaux ; la formation apprend à les lire et à repérer une erreur. Les utilisateurs avancés travaillent sur les règles de classeur, les compétences et Python dans Excel.",
    },
    {
      q: "Comment financer une formation Copilot Word et Excel ?",
      a: "Masteria est certifié Qualiopi : la formation est finançable par votre OPCO, et Masteria monte le dossier avec vous. Le tarif est de 1 980 € HT par jour, en intra jusqu'à 12 participants ou en accompagnement individuel. Chaque participant travaille sur ses propres fichiers.",
    },
  ],
  sources: [
    { name: "Support Microsoft : Démarrage avec Copilot dans Excel", url: "https://support.microsoft.com/fr-FR/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Support Microsoft : Questions fréquemment posées sur Copilot dans Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/frequently-asked-questions-about-copilot-in-excel" },
    { name: "Support Microsoft : Copilot dans les sources de données Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/copilot-in-excel-data-sources" },
    { name: "Support Microsoft : Conseils sur Copilot pour Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/copilot-in-excel-tips" },
    { name: "Microsoft Support : Copilot in Excel rules (note sur l'anglais)", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-rules" },
    { name: "Support Microsoft : Utiliser les compétences avec Copilot pour Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/copilot-in-excel-skills" },
    { name: "Microsoft Support : COPILOT function (retrait au 14 septembre 2026)", url: "https://support.microsoft.com/en-us/excel/functions/copilot-function" },
    { name: "Support Microsoft : Disponibilité de Python dans Excel", url: "https://support.microsoft.com/fr-fr/excel/python/python-in-excel-availability" },
    { name: "Support Microsoft : Modifier avec Copilot dans Word", url: "https://support.microsoft.com/fr-fr/word/edit-with-copilot-in-word" },
    { name: "Support Microsoft : Bienvenue dans Copilot dans Word", url: "https://support.microsoft.com/fr-fr/office/bienvenue-dans-copilot-dans-word-2135e85f-a467-463b-b2f0-c51a46d625d1" },
    { name: "Support Microsoft : Rédigez et ajoutez du contenu avec Copilot dans Word", url: "https://support.microsoft.com/fr-fr/word/copilot/draft-and-add-content-with-copilot-in-word" },
    { name: "Microsoft Support : How reference and document lengths affect Copilot responses", url: "https://support.microsoft.com/en-us/topic/keep-it-short-and-sweet-a-guide-on-the-length-of-documents-that-you-provide-to-copilot-66de2ffd-deb2-4f0c-8984-098316104389" },
    { name: "Microsoft Learn : Overview of Microsoft Copilot Chat (mentions Basic et Premium)", url: "https://learn.microsoft.com/en-us/copilot/overview" },
  ],
}
