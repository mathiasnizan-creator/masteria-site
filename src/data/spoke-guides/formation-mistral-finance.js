// Texte propre de /formation-mistral-finance (mode page propre, rendu par SpokePage). Réécrit le 07/10/2026.
// Faits Mistral : FAITS-OUTILS-2026-10-07, documentation Vibe relue le 07/10/2026 (interpréteur de code,
// tableurs, douze compétences, bibliothèques, projets), notes de version du 22/09/2026, page tarifs (dollars HT).
export default {
  slug: 'formation-mistral-finance',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Mistral AI finance : Vibe pour la clôture et le contrôle de gestion",
  metaTitle: 'Formation Mistral AI finance : Vibe et la clôture | Masteria',
  metaDesc: "Deux jours sur Vibe pour une direction financière : exports contrôlés, écarts calculés par code, classeurs .xlsx, note au comité. Qualiopi, OPCO.",
  keywords: "formation Mistral finance, formation Vibe contrôle de gestion, Mistral AI clôture mensuelle, interpréteur de code Vibe, IA européenne direction financière",
  resume: "La formation Mistral AI pour la finance apprend à un contrôleur de gestion, à un comptable ou à un DAF à faire calculer Vibe par son interpréteur de code, à relire le programme qui a produit chaque montant et à rédiger la note d'écarts sans qu'un chiffre perde son origine. Elle tient en deux journées de sept heures, sur votre site ou en classe virtuelle, à 1 980 € HT la journée, que le groupe compte douze contrôleurs ou un seul. Masteria est certifié Qualiopi, catégorie actions de formation, et l'OPCO de votre branche statue sur le financement en fonction de ses règles et de ses fonds.",
  enBref: [
    { label: 'Formation', value: "L'assistant Vibe de Mistral AI appliqué à la clôture, au contrôle de gestion et à la trésorerie" },
    { label: 'Durée', value: "Quatorze heures sur deux jours, que l'on peut placer de part et d'autre d'une clôture mensuelle" },
    { label: 'Formats', value: "Sur site ou en visioconférence ; jusqu'à douze participants par groupe, ou un contrôleur seul face au formateur" },
    { label: 'Tarif', value: "1 980 € HT par journée, quel que soit l'effectif ; les abonnements Vibe se règlent à part, auprès de Mistral" },
    { label: 'Financement', value: "Certification Qualiopi (actions de formation) ; financement instruit par votre OPCO, d'après ses règles et ses fonds" },
    { label: 'Prérequis', value: "Savoir lire une balance et manier Excel ; disposer d'un compte Vibe Pro, Team ou Enterprise, car l'interpréteur de code et les tableurs sont réservés aux offres payantes" },
  ],
  prerequis: "Savoir lire une balance et manier Excel ; disposer d'un compte Vibe Pro, Team ou Enterprise, car l'interpréteur de code et les tableurs sont réservés aux offres payantes",
  intro: "Une direction financière juge un assistant sur une question simple : peut-on signer les chiffres qu'il écrit ? Vibe, que Mistral AI appelait Le Chat jusqu'au 28 mai 2026, y répond depuis le 22 septembre avec un interpréteur de code ouvert aux offres payantes : il calcule en Python, et le programme reste lisible dans la conversation. La même mise à jour lui a appris à lire un export Excel ou CSV et à restituer un fichier .xlsx dont les formules restent actives. Ce guide, revu le 7 octobre 2026, suit une clôture mensuelle depuis l'export comptable jusqu'à la note du comité de direction, avec les réglages de confidentialité à poser avant d'y déposer une balance.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe rédige la note, et chaque montant sort d'un programme que vous relisez",
    lead: "Un modèle de langage prédit le mot suivant. Pour lui, « l'écart atteint 12 % » n'est qu'une suite de caractères vraisemblable, même quand le calcul donne 9 %. Ce guide repose donc sur une règle : tout chiffre calculé passe par l'interpréteur de code, le contrôleur lit le programme, et la note se contente de citer les résultats. Tenue avec constance, cette règle permet de confier à Vibe toute la clôture, du contrôle de l'export aux questions que posera le comité.",
    sections: [
      {
        h3: "L'interpréteur de code calcule en Python sur les offres payantes",
        paras: [
          "Depuis la mise à jour du 22 septembre 2026, Vibe dispose d'un interpréteur de code réservé aux abonnements payants. Il exécute du Python, ou du TypeScript, dans un environnement isolé où pandas, numpy et matplotlib sont déjà installés. Il ouvre un export CSV, un classeur Excel, un fichier ODS ou un PDF, filtre, agrège, trace un graphique et rend un fichier à télécharger. Mistral conseille, dans sa documentation, d'ajouter « explique les étapes et montre le code » à la demande : cette phrase transforme une réponse en calcul que l'on peut auditer.",
          "Trois limites pèsent sur une clôture. L'environnement n'a aucun accès à internet : un cours de change ou un indice des prix se fournit dans un fichier. Les fichiers déposés ne valent que pour la conversation en cours, et la clôture suivante repart d'un export neuf. L'usage est enfin plafonné selon l'offre, ce qui compte le jour où toute l'équipe lance ses analyses à la même heure.",
        ],
      },
      {
        h3: "Vibe lit vos exports Excel et rend un classeur avec ses formules",
        paras: [
          "Les notes de version du 22 septembre décrivent la fonction tableurs : Vibe analyse un fichier Excel ou CSV, répare une formule cassée, convertit en nombres des montants enregistrés comme du texte, puis rend le résultat au format .xlsx. Il construit aussi un classeur de plusieurs onglets d'après une description en français, formules et mise en forme comprises, et chaque cellule se corrige à la main dans le Canvas, l'éditeur intégré à Vibe. Mistral réserve cette fonction aux offres payantes « jusqu'à nouvel ordre ».",
          "Deux réflexes évitent les surprises. Un classeur ouvert dans Google Sheets vit ensuite sa propre vie, car ce que l'on modifie dans Sheets ne revient pas dans Vibe. Un classeur partagé par lien public devient lisible par quiconque reçoit l'adresse : la conversation reste privée, les montants ne le sont plus. Pour un tableau de suivi des écarts, ouvrez chaque formule qui relie deux onglets avant d'y verser les données du mois.",
        ],
      },
      {
        h3: "Les contrôles de clôture se rangent dans une compétence partagée",
        paras: [
          "Le 22 septembre, les Skills (compétences) ont pris la place des anciens agents. Une compétence est un fichier SKILL.md, accompagné au besoin de pièces jointes, que l'on lance en tapant « / » puis son nom. Mistral en livre douze avec Vibe, et trois servent directement la clôture : /data-analysis inspecte, nettoie et agrège un jeu de données ; /structured-extraction tire un tableau d'une série de PDF ou de mails ; /document-review relit un document sur sa complétude et sa cohérence.",
          "La routine de contrôle de votre direction mérite sa propre compétence. Après une clôture réussie dans une conversation, demandez à Vibe de la convertir en Skill : il rédige les instructions, vous les relisez, puis vous l'ouvrez à tout l'espace. Quand une compétence est active, ses consignes passent avant les instructions personnelles de chacun. Les quatre questions suivantes seront alors posées de la même manière par chaque contrôleur, chaque mois.",
        ],
        list: [
          "Le total de l'export égale-t-il celui de la balance générale, au centime près ?",
          "Chaque montant de la note se retrouve-t-il dans l'annexe, avec le même arrondi ?",
          "Chaque écart au-dessus du seuil porte-t-il une explication validée par le responsable du centre de coût ?",
          "Un compte qui bougeait le mois dernier est-il resté sans mouvement ce mois-ci ?",
        ],
      },
      {
        h3: "Un projet par clôture, une bibliothèque pour la mémoire de la direction",
        paras: [
          "Un projet Vibe regroupe les conversations d'une même clôture avec leurs instructions, leur ton et leurs fichiers ; chaque échange du projet consulte ces fichiers sans nouveau dépôt. Les références durables vont dans une bibliothèque : notes des comités passés, plan de comptes analytique, procédure de clôture. Une bibliothèque reçoit jusqu'à cent fichiers par envoi et 100 Mo par fichier, s'ouvre aux collègues en lecture ou en écriture, et ses réponses portent des renvois numérotés vers l'extrait d'origine.",
          "Avant la réunion, /challenge-my-thinking joue le membre du comité qui pose la question gênante, et /stakeholder-translator réécrit la même analyse pour un autre lecteur, le comité d'audit par exemple. Les causes des écarts restent l'affaire des opérationnels : Vibe leur donne une forme, il ne les découvre pas.",
        ],
      },
    ],
    table: {
      caption: "Six moments d'une clôture mensuelle et l'outil de Vibe qui convient à chacun",
      headers: ["Moment de la clôture", "Outil de Vibe", "Ce que le contrôleur vérifie"],
      rows: [
        ["Recevoir l'export de la comptabilité", "Interpréteur de code et compétence /data-analysis", "Nombre de lignes et total, confrontés à la balance"],
        ["Calculer les écarts au budget et à l'an passé", "Interpréteur de code", "Les regroupements de comptes écrits dans le programme"],
        ["Relever les échéances d'emprunts et de baux", "Compétence /structured-extraction sur les PDF", "Un échantillon pointé sur les contrats signés"],
        ["Livrer le tableau de suivi", "Fonction tableurs, export .xlsx", "Chaque formule qui relie deux onglets"],
        ["Écrire la note d'écarts", "Projet de clôture et bibliothèque des notes passées", "Aucun chiffre absent de l'annexe de pointage"],
        ["Préparer les questions du comité", "Compétences /challenge-my-thinking et /stakeholder-translator", "Des causes confirmées par les opérationnels"],
      ],
    },
    cas: {
      h3: "Cas pratique : la note d'écarts de septembre, prête pour le comité de mardi",
      contexte: "Prenons la contrôleuse de gestion d'un fabricant de robinetterie industrielle qui emploie 140 personnes. La clôture de septembre est passée, le codir se tient mardi, et elle dispose d'un export CSV qui donne, par centre de coût et par compte, le réalisé du mois, le budget et le réalisé de septembre de l'an passé. Le directeur général attend deux pages, et chaque chiffre doit pouvoir se retrouver.",
      etapes: [
        "Ouvrez un projet « Clôture de septembre » puis, dans la conversation, attachez par le bouton + la bibliothèque qui réunit les notes des mois précédents.",
        "Si l'export contient des salaires nominatifs, agrégez-les par centre de coût dans votre outil de gestion avant tout dépôt.",
        "Déposez le fichier, collez le prompt ci-dessous et suivez les étapes que l'interpréteur exécute.",
        "Ouvrez le programme : contrôlez le total, la ligne qui applique la double condition de seuil, et recalculez deux écarts dans votre outil de gestion.",
        "Complétez à la main les causes marquées « à documenter », puis lancez /challenge-my-thinking sur la note terminée.",
      ],
      prompt: "Je prépare la note d'écarts de la clôture de septembre pour le comité de direction de mardi.\n\nLe fichier CSV joint compte une ligne par centre de coût et par compte, et cinq colonnes : centre de coût, compte, réalisé de septembre, budget de septembre, réalisé de septembre de l'an passé. Montants en euros.\n\nFais tous les calculs avec l'interpréteur de code et montre le code. Aucun chiffre ne doit apparaître s'il ne sort pas du programme.\n\n1. Dis-moi combien de lignes tu as lues, donne le total de chaque colonne de montants et la liste des lignes vides ou mal formées. Attends ma confirmation : je compare le total du réalisé à ma balance.\n2. Calcule pour chaque centre de coût l'écart au budget et l'écart à l'an passé, en euros et en pourcentage.\n3. Retiens les écarts au budget qui remplissent les deux conditions, plus de 5 % et plus de 20 000 euros, et classe-les du plus fort au plus faible.\n4. Rédige une note qui tienne en deux pages, en reprenant le plan et les mots des notes de la bibliothèque. Pour chaque écart retenu, donne le montant et le pourcentage. N'écris une cause que si une note précédente la mentionne, et cite alors cette note ; sinon, écris « à documenter ».\n5. Termine par une annexe qui reprend tous les chiffres cités, dans leur ordre d'apparition, pour que je les pointe un à un.",
      resultat: "Vous recevez un contrôle d'intégrité de l'export, le tableau des écarts, la liste de ceux qui franchissent les deux seuils, puis une note et son annexe. Tout montant sort d'un programme que vous pouvez relire. Lisez d'abord la ligne qui applique les seuils : si le code a traduit « les deux conditions » par « l'une ou l'autre », la liste entière change. Avant diffusion, vérifiez qu'aucune cause n'a été inventée pour combler un vide.",
    },
    pieges: [
      {
        titre: "Un pourcentage figure dans la phrase sans avoir été calculé",
        texte: "Sans consigne explicite, Vibe peut répondre à une question d'écart directement dans le texte, avec un chiffre plausible et faux. Inscrivez la règle « aucun chiffre hors du programme » dans les consignes du projet de clôture, et repérez dans chaque réponse le bloc de code qui a produit les montants.",
      },
      {
        titre: "L'explication d'un écart est inventée pour faire propre",
        texte: "Effet saisonnier, hausse des matières premières : face à une case vide, l'assistant propose volontiers une cause vraisemblable. Exigez la mention « à documenter » pour toute cause absente des sources, et faites signer chaque explication par le responsable du centre de coût concerné.",
      },
      {
        titre: "Les résultats d'une société cotée sont déposés avant leur publication",
        texte: "Un résultat semestriel encore confidentiel peut constituer une information privilégiée au sens de l'article 7 du règlement européen n° 596/2014 sur les abus de marché, et son article 18 oblige l'émetteur à tenir la liste des personnes qui y accèdent. Le déontologue valide l'espace Vibe et ses utilisateurs avant le premier dépôt.",
      },
      {
        titre: "Un espace Team nourrit l'entraînement des modèles tant que personne n'a décoché l'option",
        texte: "Selon l'aide en ligne de Mistral, lue le 7 octobre 2026, les conversations des offres Free, Pro et Team nourrissent par défaut l'entraînement de ses modèles. Un abonné Free ou Pro refuse lui-même dans ses paramètres. Sur Team, c'est l'administrateur qui désactive l'option pour tous les comptes, depuis la rubrique Confidentialité de son espace d'administration. Enterprise en est exclu d'office, et l'API garde ses propres réglages.",
      },
    ],
  },
  audience: [
    {
      title: "Contrôleurs de gestion",
      desc: "Vous portez la clôture, l'analyse des écarts et le reporting mensuel. La formation vous apprend à confier les calculs à l'interpréteur de code de Vibe, à lire le programme qu'il écrit et à bâtir une compétence de contrôle commune à l'équipe.",
    },
    {
      title: "DAF et responsables comptables de PME et d'ETI",
      desc: "Vous signez la note au comité et répondez de la confidentialité des comptes. Vous apprenez à choisir l'offre Vibe, à faire couper l'entraînement et à écrire la règle qui dit quelles pièces entrent dans l'outil.",
    },
    {
      title: "Trésoriers et analystes financiers",
      desc: "Contrats de prêt, échéanciers et classeurs de suivi forment votre matière. Vous apprenez à faire extraire montants et échéances d'une pile de PDF, puis à pointer un échantillon sur les originaux.",
    },
  ],
  useCases: [
    {
      icon: '📊',
      title: "Écarts calculés, programme à l'appui",
      desc: "L'interpréteur de code calcule les écarts au budget et à l'an passé, puis isole ceux qui franchissent vos deux seuils.",
    },
    {
      icon: '🔎',
      title: "Export contrôlé avant analyse",
      desc: "Lignes lues, totaux par colonne et lignes mal formées s'affichent d'abord, pour un rapprochement immédiat avec la balance.",
    },
    {
      icon: '📈',
      title: "Classeurs .xlsx avec leurs formules",
      desc: "Un tableau de suivi de plusieurs onglets décrit en français, corrigé cellule par cellule dans le Canvas, puis téléchargé.",
    },
    {
      icon: '🏦',
      title: "Échéances tirées des contrats",
      desc: "La compétence /structured-extraction relève montants et dates d'une série d'emprunts, de baux ou de contrats fournisseurs.",
    },
    {
      icon: '📋',
      title: "Note au comité que l'on peut pointer",
      desc: "Une note écrite dans la structure des notes passées, avec une annexe qui reprend chaque chiffre cité.",
    },
    {
      icon: '🔐',
      title: "Confidentialité des comptes",
      desc: "Entraînement coupé selon l'offre, pièces admises dans Vibe, précautions propres aux résultats non publiés d'une société cotée.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Régler l'espace Vibe de la direction financière",
      duration: "1h30",
      description: "Savoir où partent les pièces comptables et d'où sortent les chiffres avant le premier dépôt.",
      items: [
        "Les quatre formules (Free, Pro, Team, Enterprise) face à l'entraînement des modèles, coupure par l'administrateur, réglages propres à l'API",
        "Serveurs de l'Union par défaut, transferts ponctuels vers des sous-traitants, fonctions que l'offre Enterprise fait désactiver",
        "Pièces de clôture admises, admises après agrégation, exclues : un tri qui tient compte du RGPD comme du secret des affaires",
        "Bascule Fast ou Think, projets et bibliothèques : l'interface refondue le 22 septembre 2026",
      ],
      exercise: "Vous classez les fichiers de votre dernière clôture en trois colonnes : admis dans Vibe, admis après agrégation, exclus.",
    },
    {
      day: 1,
      title: "Module 2 · Faire calculer Vibe et lire son programme",
      duration: "2h",
      description: "Distinguer un montant écrit d'un montant calculé, et savoir le prouver.",
      items: [
        "Pourquoi l'assistant aligne parfois un pourcentage faux avec aplomb",
        "Interpréteur de code : Python, pandas, environnement sans accès à internet, fichiers valables pour une seule conversation",
        "La consigne « montre le code » et la lecture d'un regroupement de comptes",
        "Contrôle d'intégrité d'un export : lignes lues, totaux, lignes mal formées",
      ],
      exercise: "Vous posez la même question d'écart sur votre export, une fois sans interpréteur et une fois avec, puis vous expliquez la différence au groupe.",
    },
    {
      day: 1,
      title: "Module 3 · Calculer, classer et commenter les écarts",
      duration: "2h",
      description: "Produire le tableau des écarts significatifs du dernier mois clos.",
      items: [
        "Écarts au budget et à l'année précédente, en euros et en pourcentage",
        "Seuil double, en euros et en pourcentage, avec la ligne de code qui l'applique",
        "Regroupements conformes à votre plan analytique",
        "Graphique d'évolution tracé par matplotlib plutôt que par la génération d'images",
      ],
      exercise: "Vous produisez le tableau des écarts significatifs de votre dernier mois clos et vous recalculez deux lignes à la main.",
    },
    {
      day: 1,
      title: "Module 4 · Construire et réparer des classeurs Excel",
      duration: "1h30",
      description: "Confier la structure du classeur à Vibe et garder pour soi la vérification des formules.",
      items: [
        "Classeur de plusieurs onglets décrit en français, formules et mise en forme générées",
        "Formules cassées réparées, nombres enregistrés comme du texte convertis",
        "Corrections dans le Canvas, export .xlsx, ouverture dans Google Sheets sans retour des modifications",
        "Partage par lien public : ce qu'il expose, et quand s'en passer",
      ],
      exercise: "Vous faites construire le classeur de suivi de vos écarts, puis vous vérifiez chaque formule entre onglets.",
    },
    {
      day: 2,
      title: "Module 5 · Extraire les échéances d'une pile de contrats",
      duration: "1h30",
      description: "Passer d'une série de PDF à un tableau prêt pour le rapprochement.",
      items: [
        "La compétence /structured-extraction sur des contrats d'emprunt, des baux et des contrats fournisseurs",
        "Bibliothèque des contrats : notes numérotées et bouton Sources",
        "Pointage d'un échantillon sur les contrats signés",
        "Tableau des échéances versé dans le classeur de trésorerie",
      ],
      exercise: "Vous extrayez les échéances de cinq de vos contrats et vous en pointez deux sur l'original.",
    },
    {
      day: 2,
      title: "Module 6 · Rédiger la note d'écarts du comité",
      duration: "2h",
      description: "Écrire une note dont chaque chiffre se retrouve dans une annexe.",
      items: [
        "Projet de clôture : instructions, ton et fichiers communs à toutes ses conversations",
        "Bibliothèque des notes passées, pour reprendre votre structure et votre vocabulaire",
        "Causes marquées « à documenter » tant qu'un opérationnel ne les a pas confirmées",
        "Relecture de cohérence avec /document-review, puis annexe de pointage",
      ],
      exercise: "Vous rédigez la note d'écarts de votre dernier mois clos, annexe comprise.",
    },
    {
      day: 2,
      title: "Module 7 · Écrire la compétence de contrôle de la clôture",
      duration: "2h",
      description: "Faire poser chaque mois les mêmes contrôles, quel que soit le contrôleur.",
      items: [
        "Ce que contient une Skill : le fichier SKILL.md, sa description, les pièces qui l'accompagnent",
        "Transformer une clôture réussie en compétence, puis la mettre à disposition de toute l'équipe",
        "Priorité des consignes d'une compétence sur les instructions personnelles",
        "Préparer le comité avec /challenge-my-thinking et /stakeholder-translator",
      ],
      exercise: "Vous écrivez la compétence de contrôle de votre clôture et vous la mettez à l'épreuve sur la clôture d'août.",
    },
    {
      day: 2,
      title: "Module 8 · Fixer la règle d'usage de la direction financière",
      duration: "1h30",
      description: "Écrire qui dépose quoi, qui relit et qui signe.",
      items: [
        "Charte d'usage de Vibe : pièces admises selon l'offre, agrégation des données nominatives, relecture de tout chiffre diffusé",
        "Société cotée : information privilégiée et liste d'initiés selon le règlement sur les abus de marché",
        "AI Act, article 4 : registre des formations suivies et référent désigné, sans certificat exigé",
        "Plan à 30 jours : trois usages, une compétence par porteur, un bilan fixé après la prochaine clôture",
      ],
      exercise: "Vous mettez par écrit ce que votre direction financière autorise dans Vibe, puis le plan de vos trente prochains jours.",
    },
  ],
  objectives: [
    "Le participant fait calculer un écart par l'interpréteur de code de Vibe et retrouve, dans le programme, le regroupement de comptes utilisé.",
    "Le participant contrôle l'intégrité d'un export comptable (lignes, totaux, lignes mal formées) avant toute analyse.",
    "Le participant obtient un classeur .xlsx de plusieurs onglets et vérifie chaque formule qui relie deux onglets.",
    "Le participant extrait les échéances d'une série de contrats et pointe un échantillon sur les originaux.",
    "Le participant rédige une note d'écarts dont chaque chiffre figure dans une annexe de pointage.",
    "Le participant écrit la Skill qui contrôle sa clôture, puis la liste des pièces que sa direction admet dans Vibe.",
  ],
  faq: [
    {
      q: "Les calculs de Vibe sont-ils assez fiables pour une note au comité ?",
      a: "Ils le sont quand ils passent par l'interpréteur de code, ouvert aux offres payantes depuis le 22 septembre 2026 : Vibe écrit un programme Python, l'exécute, et vous pouvez le relire. Un chiffre écrit directement dans la phrase, sans programme, se vérifie avant tout usage. La formation installe trois habitudes : exiger le code dans chaque consigne, comparer un total de contrôle à la balance, recalculer à la main deux lignes prises au hasard. Avec elles, une note préparée dans Vibe se défend devant un comité.",
    },
    {
      q: "Vibe peut-il ouvrir un classeur Excel de plusieurs onglets et en produire un ?",
      a: "Oui, sur les offres payantes. Vibe lit les fichiers Excel, CSV, ODS et Numbers ; l'interpréteur de code les explore avec pandas, et la fonction tableurs répare une formule cassée ou convertit des montants saisis comme du texte. Il construit aussi un classeur de plusieurs onglets avec formules et mise en forme, que vous corrigez dans le Canvas avant de le télécharger en .xlsx. Précisez l'onglet et la plage à lire, et demandez le décompte des lignes chargées pour vous assurer qu'aucune ne manque.",
    },
    {
      q: "Vibe se branche-t-il sur notre ERP ou notre outil de consolidation ?",
      a: "Pas directement. La liste des connecteurs proposés par Mistral couvre la messagerie, les agendas, SharePoint, Slack, Notion, Box ou Stripe, sans aucun ERP. Si l'éditeur de votre ERP publie un serveur MCP (un protocole ouvert qui permet à un assistant de dialoguer avec une application), un administrateur peut l'ajouter comme connecteur personnalisé. D'ici là, l'export CSV ou Excel suffit pour la plupart des travaux de clôture, et Masteria peut construire la passerelle après la formation, dans un projet de développement distinct.",
    },
    {
      q: "Où partent les pièces comptables déposées dans Vibe ?",
      a: "L'aide en ligne de Mistral, consultée le 7 octobre 2026, situe par défaut les données de Vibe sur des serveurs de l'Union européenne. Quelques fonctions passent ponctuellement par des prestataires établis hors de l'Union, listés publiquement par l'éditeur, et l'offre Enterprise permet de les couper ; elle prévoit aussi des déploiements sur mesure. L'hébergement européen ne dispense pas de trier les pièces : les salaires nominatifs s'agrègent par centre de coût avant le dépôt.",
    },
    {
      q: "Nos fichiers restent-ils disponibles d'une clôture à l'autre ?",
      a: "Pas dans l'interpréteur de code : selon Mistral, un fichier déposé n'y vaut que pour la conversation en cours, et chaque clôture repart donc d'un export neuf. Les documents durables se rangent ailleurs. Les fichiers d'un projet restent accessibles à toutes ses conversations, et une bibliothèque garde les notes des comités, le plan de comptes ou la procédure, avec des renvois numérotés vers le passage cité. Mistral annonce jusqu'à 15 Go de stockage sur l'offre Pro et 30 Go par utilisateur sur Team.",
    },
    {
      q: "Quel abonnement Vibe faut-il à l'équipe pendant la formation ?",
      a: "Un abonnement payant, car l'interpréteur de code et les tableurs sont absents de l'offre gratuite. Le 7 octobre 2026, Mistral affichait Pro à 14,99 $ HT mensuels et Team à 24,99 $ HT par siège chaque mois, avec une facture d'au moins 50 $ ; Enterprise passe par un devis. Team ajoute la vérification du domaine, l'export des données et surtout un administrateur capable de désactiver l'entraînement pour tous les comptes. Mistral facture ces licences directement, en dehors du prix de la formation.",
    },
    {
      q: "Qui peut financer les deux journées d'une direction financière ?",
      a: "L'OPCO de votre branche, qui examine chaque demande à l'aune de ses critères et de son budget ; Masteria remplit la condition préalable avec sa certification Qualiopi au titre des actions de formation. Le prix ne bouge pas avec l'effectif : 1 980 € HT la journée, 3 960 € HT pour l'ensemble des deux journées, de deux à douze participants, et le même forfait journalier pour un contrôleur suivi seul. Le programme détaillé et la convention destinés à l'OPCO vous sont transmis par Masteria. Une filiale à Genève ou à Bruxelles reçoit un devis en euros HT, sans OPCO.",
    },
  ],
  tarifs: {
    titre: "Le prix d'une session pour une direction financière",
    paras: [
      "Le forfait inclut un temps de préparation : avant la première journée, le formateur parcourt avec vous un export anonymisé, le classeur de suivi des écarts et la procédure de clôture, afin que les ateliers portent sur vos fichiers. Les supports, les consignes du guide adaptées à votre plan analytique et la Skill de contrôle rédigée au module 7 sont compris dans le prix.",
      "Un exemple : une direction financière inscrit son DAF, sa responsable comptable, deux contrôleurs de gestion, un trésorier et une assistante comptable, soit six personnes. L'intra de deux jours revient à 3 960 € HT, partagés en six, soit 660 € HT par tête. Un contrôleur suivi seul règle le même forfait journalier, 1 980 € HT. Votre OPCO étudie ensuite le dossier, monté avec Masteria, à la lumière de ses propres règles et de ses fonds. Les licences Vibe restent à régler à Mistral.",
    ],
  },
  apres: {
    titre: "Après la formation, un outil qui prépare la clôture avec vous",
    texte: "Certaines directions repartent avec un besoin plus précis : une passerelle qui récupère chaque mois la balance de l'ERP sans export manuel, un modèle Mistral à poids ouverts (téléchargé puis installé dans votre infrastructure) réservé aux comptes les plus sensibles, ou un assistant chargé des questions budgétaires des chefs de service, nourri de vos tableaux validés. Masteria définit le besoin avec votre DSI, fixe un forfait après cadrage et confie la réalisation à ses développeurs. Ce chantier relève du développement ; il n'est donc pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Donnez-nous la date de votre prochaine clôture : les deux journées se calent de part et d'autre.",
    fin: {
      titre: "Partons de votre prochaine clôture",
      texte: "Dites-nous quels fichiers votre équipe manipule (export comptable, budget, classeur de suivi, contrats de financement) et l'offre Vibe dont elle dispose. Vous recevez en retour un programme construit sur ces pièces, avec deux ou trois dates possibles.",
    },
  },
  terrain: {
    titre: "Sur le terrain : un rapprochement vérifié à la main, en septembre 2026",
    texte: "Au mois de septembre 2026, seize salariés d'une interprofession agricole et de son syndicat de producteurs ont suivi trois jours de formation avec Masteria. La première journée a mis six assistants en concurrence, Vibe compris, sur des textes publics de leur filière, et le groupe en a tiré sa propre grille pour choisir ses outils. Le troisième jour, l'atelier consacré à la gestion a suivi la discipline de ce guide : un relevé rapproché ligne par ligne, avec contrôle manuel, puis un classeur Excel de suivi construit sur les documents de la structure.",
    lien: '/etudes-de-cas-ia#mission-interprofession-agricole',
  },
  liensAssocies: [
    { label: "Formation IA finance, avec plusieurs assistants au choix", href: '/formation-ia-finance' },
    { label: "Formation IA comptabilité : saisie, rapprochements et révision", href: '/formation-ia-comptabilite' },
    { label: "Vibe ou ChatGPT : hébergement, entraînement et prix comparés", href: '/mistral-vs-chatgpt' },
    { label: "Le programme Mistral AI de deux jours, toutes fonctions confondues", href: '/formation-mistral-ai' },
    { label: "Monter un dossier de prise en charge auprès de l'OPCO", href: '/blog/financer-formation-ia-opco-qualiopi' },
  ],
  sources: [
    { name: "Documentation Mistral, interpréteur de code de Vibe (offres payantes, environnement sans internet)", url: "https://docs.mistral.ai/vibe/work/code-interpreter" },
    { name: "Documentation Mistral, tableurs dans Vibe Work et export .xlsx", url: "https://docs.mistral.ai/vibe/work/spreadsheets" },
    { name: "Notes de version Mistral du 22 septembre 2026 : fusion de Chat et Work, Skills, tableurs", url: "https://docs.mistral.ai/resources/release-notes" },
    { name: "Documentation Mistral, les douze compétences livrées avec Vibe", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Documentation Mistral, bibliothèques de documents et notes numérotées", url: "https://docs.mistral.ai/vibe/work/libraries" },
    { name: "Aide Mistral, en anglais : où se trouvent les données d'une organisation cliente", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
    { name: "Aide Mistral, en anglais : entraînement des modèles sur les conversations, offre par offre", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
    { name: "Grille tarifaire de Vibe, en dollars hors taxes", url: "https://mistral.ai/pricing" },
    { name: "Règlement (UE) n° 596/2014 sur les abus de marché, articles 7 et 18 (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32014R0596" },
  ],
}
