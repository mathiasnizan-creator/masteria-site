// Contenu propre à /formation-copilot-marketing (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-copilot-marketing',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Copilot marketing : deck de lancement sur le gabarit de la marque, bilan de campagne dans Excel, visuels avec Créer. Qualiopi, finançable OPCO.",
  intro: "Votre équipe marketing range ses briefs dans SharePoint, ses exports de campagne dans Excel et ses gabarits PowerPoint validés par la marque. Microsoft 365 Copilot travaille sur ces fichiers, avec les droits de chaque personne. La formation vous apprend à tenir toute la chaîne d'une campagne dans l'espace Microsoft 365 de l'entreprise, du brief au bilan. Elle vous montre aussi les tâches où un autre outil fera mieux.",
  guide: {
    kicker: "Guide terrain",
    h2: "Copilot en marketing : la force vient de vos fichiers, la vigilance porte sur vos chiffres",
    lead: "Pour écrire un post ou chercher un angle de campagne, ChatGPT et Claude valent Copilot. Copilot prend l'avantage quand le travail dépend de vos documents : il lit le brief, la plateforme de marque et le compte rendu de la réunion d'agence là où ils sont rangés. Sa limite est l'envers de cette force. Les chiffres du marketing vivent dans les régies publicitaires, le CRM et l'outil d'emailing, que Copilot ne voit qu'à travers un export.",
    sections: [
      {
        h3: "Deux Copilot cohabitent dans l'entreprise et ne voient pas les mêmes fichiers",
        paras: [
          "Tout abonnement Microsoft 365 professionnel inclut Copilot Chat, qui cherche sur le web et lit les fichiers déposés ou le document ouvert à l'écran. La licence complémentaire, que Microsoft appelle désormais Microsoft Copilot (Microsoft Copilot Business pour les PME), ajoute vos mails, vos réunions Teams et les fichiers SharePoint ou OneDrive que vous pouvez ouvrir.",
          "Avec Copilot Chat seul, il faut joindre le brief à chaque demande. Avec la licence, une phrase suffit : « reprends le brief de la gamme d'automne et le compte rendu de la réunion avec l'agence ». Les agents Researcher et Analyst (le Chercheur et l'Analyste dans la documentation française) demandent eux aussi la licence.",
        ],
      },
      {
        h3: "Le deck de lancement part toujours du gabarit de la marque",
        paras: [
          "Copilot dans PowerPoint réutilise le thème et les mises en page du fichier ouvert : partez donc du modèle de l'entreprise. Dans le volet Copilot, la commande « créer une présentation à partir d'un fichier » transforme un document Word ou un PDF en brouillon de présentation. Microsoft précise que Copilot travaille mieux sur des documents Word de moins de 24 Mo.",
          "Le Mode Agent de PowerPoint procède en deux temps. Il pose des questions de cadrage et propose un plan que vous corrigez, puis il génère les diapositives. Faites valider ce plan par le chef de produit à ce stade. Reprenez ensuite à la main les chiffres des graphiques, que Copilot recopie depuis le brief sans les contrôler, et remplacez les photos d'illustration par celles de la photothèque validée.",
        ],
      },
      {
        h3: "Un bilan de campagne se lit dans Excel, à condition d'exporter proprement",
        paras: [
          "Copilot ne se connecte pas de lui-même à LinkedIn Campaign Manager, Google Ads, Meta ou à votre outil d'emailing. Sauf connecteur activé par un administrateur, le chemin passe par un export CSV. Mettez-le sous forme de tableau Excel, donnez aux colonnes des noms clairs (impressions, clics, coût, leads) et rangez le classeur dans OneDrive ou SharePoint.",
          "Copilot dans Excel propose trois modes. Le Mode Conversation analyse sans toucher au classeur, le Mode Plan expose sa démarche avant d'agir, le Mode Édition modifie le fichier. Commencez en Mode Conversation, validez la lecture, puis passez en Mode Édition pour construire le tableau croisé du reporting.",
          "Le volet Copilot résume aussi les verbatims clients et en dégage des thèmes et un sentiment.",
        ],
      },
      {
        h3: "Les visuels de campagne passent par l'espace Créer",
        paras: [
          "Dans l'application Microsoft 365 Copilot, l'entrée Créer du menu de gauche produit des images, des affiches, des bannières et des infographies. Pour une image, vous décrivez la scène, puis vous choisissez un style et un format carré, portrait ou paysage. Si l'entreprise a configuré des kits de marque, Copilot applique ses couleurs.",
          "L'article 50 de l'AI Act s'applique depuis le 2 août 2026. Une image générée qui montre de façon trompeuse des personnes, des lieux ou des événements existants doit être signalée au public comme artificielle. Une photo réaliste de votre vrai magasin, avec votre vrai dirigeant, dans une scène qui n'a jamais eu lieu entre dans ce cas.",
        ],
      },
      {
        h3: "Un agent garde la voix de la marque d'une personne à l'autre",
        paras: [
          "Agent Builder crée un agent, que l'interface française appelle aussi assistant. L'agent le plus utile au marketing relit les textes selon la plateforme de marque : la charte éditoriale va dans le champ Instructions, le lexique et trois textes de référence dans Connaissances, puis vous le partagez avec l'équipe.",
          "Un fichier déposé depuis votre ordinateur devient lisible par toute personne qui utilise l'agent, alors qu'un fichier SharePoint reste soumis aux droits de chacun. Déposez la charte, jamais le plan média avec ses budgets.",
        ],
      },
    ],
    table: {
      caption: "Les tâches marketing courantes et la bonne entrée dans Microsoft 365 Copilot",
      headers: ["Tâche", "Fonction à utiliser", "Point de vigilance"],
      rows: [
        ["Transformer un brief en deck de lancement", "PowerPoint sur le modèle de l'entreprise, « créer une présentation à partir d'un fichier »", "Chiffres recopiés sans contrôle, photos hors photothèque"],
        ["Lire le bilan d'une campagne payante", "Excel en Mode Conversation, puis Mode Édition pour le tableau croisé", "Copilot ignore le modèle d'attribution de chaque régie"],
        ["Synthétiser des verbatims clients", "Volet Copilot d'Excel : résumé, thèmes, sentiment", "La fonction =COPILOT() n'existe plus depuis le 14 septembre 2026"],
        ["Préparer une note de veille concurrentielle", "Agent Researcher (licence Microsoft Copilot)", "Contrôler la date de chaque source web citée"],
        ["Décliner un visuel en trois formats", "Application Copilot, Créer, kit de marque", "Signalement obligatoire si la scène paraît authentique (AI Act, art. 50)"],
        ["Relire un texte selon la charte", "Agent créé dans Agent Builder, charte dans les Instructions", "Les fichiers déposés sont lisibles par tous les utilisateurs de l'agent"],
      ],
    },
    cas: {
      h3: "Cas pratique : du brief produit au plan de lancement partagé",
      contexte: "Prenons une responsable marketing dans une PME de mobilier de bureau, qui lance une gamme en novembre et dispose de la licence Microsoft Copilot. Le brief est un document Word sur SharePoint, les résultats du lancement précédent tiennent dans un classeur Excel, et la réunion de cadrage avec l'agence a été transcrite dans Teams.",
      etapes: [
        "Dans l'application Microsoft 365 Copilot, elle tape / et désigne le brief, le classeur du lancement précédent et la réunion de cadrage.",
        "Elle colle le prompt ci-dessous, relit le plan, puis clique sur « Modifier dans la page » pour en faire une page Copilot qu'elle partage avec le chef de produit.",
        "Elle colle le plan validé dans le document Word du brief, ouvre le modèle PowerPoint de l'entreprise et demande à Copilot de « créer une présentation à partir d'un fichier » en désignant ce document.",
        "Dans Excel, en Mode Conversation, elle demande quels canaux ont produit les leads au coût le plus bas, puis recalcule deux de ces chiffres à la main.",
        "Elle génère deux visuels d'annonce dans Créer et les soumet au circuit de validation habituel.",
      ],
      prompt: "Tu es responsable marketing d'une PME qui fabrique du mobilier de bureau. Nous lançons la gamme Atelier en novembre auprès des services généraux et des office managers d'entreprises de 50 à 500 salariés.\n\nAppuie-toi uniquement sur les trois éléments que je t'ai désignés : le brief produit, le classeur de résultats du lancement de l'an dernier et la réunion de cadrage avec l'agence.\n\nRédige un plan de lancement sur huit semaines, en quatre parties :\n1. Les trois messages clés, chacun accompagné de la preuve tirée du brief.\n2. Les canaux retenus, classés selon le coût par lead observé l'an dernier. Cite les chiffres du classeur et indique la colonne d'où ils viennent.\n3. Le calendrier semaine par semaine, avec les livrables et leur responsable, en reprenant les décisions prises pendant la réunion avec l'agence.\n4. Les points que la réunion a laissés ouverts, formulés comme des questions à trancher.\n\nContraintes : n'invente aucun chiffre. Si une information manque dans les trois sources, écris « à compléter » à l'endroit concerné. Présente le calendrier sous forme de tableau. Termine par la liste des sources utilisées pour chaque partie.",
      resultat: "Copilot rend un plan en quatre parties avec ses sources. Deux contrôles restent indispensables. Les coûts par lead doivent correspondre au classeur, car une colonne de coût total se confond vite avec une colonne de coût unitaire. Les décisions attribuées à la réunion doivent figurer dans la transcription, que vous retrouvez dans l'onglet Récapitulatif de Teams. Les mentions « à compléter » montrent ce que le brief ne dit pas.",
    },
    pieges: [
      {
        titre: "Des tutoriels Excel déjà périmés",
        texte: "Beaucoup de guides en ligne montrent la fonction =COPILOT(), qui classait des avis clients cellule par cellule. Microsoft l'a retirée d'Excel le 14 septembre 2026. Les tableaux construits avec elle affichent #NAME? au prochain recalcul. Refaites ces classements dans le volet Copilot et collez les résultats en valeurs.",
      },
      {
        titre: "Le fichier que Copilot n'aurait pas dû trouver",
        texte: "Copilot montre tout ce que vous avez le droit d'ouvrir, y compris une grille tarifaire provisoire partagée trop largement par un lien. Avant de reprendre un prix ou une date de lancement cités par Copilot, ouvrez la source et vérifiez sa version. Signalez au service informatique tout document sensible que vous n'auriez pas dû voir.",
      },
      {
        titre: "Des indicateurs qui n'ont pas la même définition",
        texte: "Une conversion dans un export Meta ne mesure pas forcément la même chose qu'une conversion dans Google Ads. Copilot additionne ce qu'on lui donne. Écrivez la définition de chaque indicateur dans le prompt, ou gardez une colonne par régie.",
      },
    ],
  },
  audience: [
    { title: "Responsables et chefs de projet marketing", desc: "Vous pilotez des lancements dont les briefs, les études et les bilans sont rangés dans SharePoint et dans Teams. Vous voulez que Copilot travaille sur ces documents et dans les gabarits de la marque." },
    { title: "Chargés de marketing digital et d'acquisition", desc: "Vous exportez chaque mois les résultats des régies publicitaires et de l'outil d'emailing. Vous voulez lire ces exports dans Excel avec Copilot et en contrôler les chiffres." },
    { title: "Responsables de marque et de contenus", desc: "Vous faites respecter la plateforme de marque par l'équipe et par les services voisins. Vous voulez un agent de relecture partagé et des visuels qui suivent les kits de marque." },
  ],
  useCases: [
    { icon: '🎨', title: "Deck de lancement dans le gabarit", desc: "Transformer le brief Word en présentation PowerPoint à partir du modèle de l'entreprise, puis reprendre les chiffres et les photos à la main." },
    { icon: '📊', title: "Bilan de campagne dans Excel", desc: "Analyser un export de régie en Mode Conversation, puis construire le tableau croisé du reporting en Mode Édition." },
    { icon: '📄', title: "Plan de lancement sourcé", desc: "Rédiger un plan qui s'appuie sur le brief, les résultats passés et la réunion avec l'agence, avec la source de chaque chiffre." },
    { icon: '📱', title: "Visuels déclinés en trois formats", desc: "Créer images et bannières dans l'espace Créer avec le kit de marque, et signaler au public les scènes qui doivent l'être." },
    { icon: '👥', title: "Réunions d'agence suivies dans Teams", desc: "Retrouver les décisions et les tâches de suivi dans l'onglet Récapitulatif d'une réunion transcrite." },
    { icon: '📋', title: "Verbatims clients synthétisés", desc: "Dégager les thèmes et le sentiment des commentaires d'une enquête client dans le volet Copilot d'Excel." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Ce que Copilot voit dans votre espace marketing", duration: '1h30',
      description: "Copilot Chat et la licence Microsoft Copilot n'ont pas accès aux mêmes documents. Ce module fixe le périmètre de chacun et la manière de vérifier une réponse.",
      items: [
        "Copilot Chat inclus dans Microsoft 365 et licence Microsoft Copilot : web, fichier déposé, mails, réunions, SharePoint",
        "Désigner un brief, un classeur ou une réunion avec la touche / dans l'application Copilot",
        "La règle des droits : Copilot affiche tout ce que vous pouvez ouvrir, y compris un fichier trop largement partagé",
        "Vérifier une réponse en ouvrant la source que Copilot cite",
      ],
      exercise: "Interroger Copilot sur votre dernier brief de campagne et retrouver dans le document chaque élément qu'il cite.",
    },
    {
      day: 1, title: "Module 2 · Du brief au plan de lancement", duration: '2h',
      description: "Un plan de lancement solide cite ses sources et signale ce qui manque. Vous construisez le prompt qui l'obtient et vous partagez le résultat avec le chef de produit.",
      items: [
        "Structurer le prompt : cible, sources imposées, parties attendues, mention « à compléter » pour les manques",
        "Faire citer la colonne du classeur ou le passage du brief d'où vient chaque chiffre",
        "Transformer la réponse en page Copilot avec « Modifier dans la page » et la partager",
        "Confronter le calendrier proposé à la transcription de la réunion d'agence",
      ],
      exercise: "Produire le plan de votre prochain lancement à partir de votre brief, de vos résultats de l'an dernier et d'une de vos réunions Teams transcrites.",
    },
    {
      day: 1, title: "Module 3 · Le deck de lancement dans le gabarit de la marque", duration: '2h',
      description: "Copilot dans PowerPoint réutilise le thème et les mises en page du fichier ouvert. Vous apprenez à produire un deck conforme, puis à le corriger là où Copilot se trompe.",
      items: [
        "Partir du modèle PowerPoint de l'entreprise avant la première demande",
        "« Créer une présentation à partir d'un fichier » depuis un document Word ou un PDF",
        "Le Mode Agent : questions de cadrage, plan à corriger, puis génération des diapositives",
        "Reprendre les chiffres des graphiques, les photos produit et la hiérarchie des messages",
      ],
      exercise: "Construire le deck de votre prochaine campagne à partir de votre brief Word, dans votre modèle PowerPoint.",
    },
    {
      day: 1, title: "Module 4 · Réunions d'agence et comités marketing dans Teams", duration: '1h30',
      description: "Les décisions de campagne se prennent souvent en réunion. Teams les conserve si la réunion est transcrite, et Copilot aide à les retrouver.",
      items: [
        "Transcription ou enregistrement : la condition de l'onglet Récapitulatif",
        "Notes IA et tâches de suivi pour savoir qui a décidé quoi",
        "Interroger Copilot sur une réunion passée pour préparer la suivante",
        "Qui voit le récapitulatif : tous les invités de l'organisation",
      ],
      exercise: "Extraire les décisions et les tâches de suivi d'une de vos réunions récentes avec l'agence ou avec l'équipe commerciale.",
    },
    {
      day: 2, title: "Module 5 · Préparer les exports de campagne pour Excel", duration: '1h30',
      description: "Copilot ne lit pas les régies publicitaires de lui-même. La qualité du bilan dépend de l'export que vous lui donnez.",
      items: [
        "Exporter en CSV les résultats des régies et de l'outil d'emailing",
        "Mettre les données sous forme de tableau et nommer les colonnes en clair",
        "Écrire la définition de chaque indicateur (conversion, lead, coût) pour chaque régie",
        "Connecteurs Copilot : ce qu'un administrateur peut activer, et quand l'export reste la voie",
      ],
      exercise: "Préparer l'export de votre dernière campagne payante : tableau, noms de colonnes et définitions des indicateurs.",
    },
    {
      day: 2, title: "Module 6 · Lire un bilan de campagne avec Copilot dans Excel", duration: '2h',
      description: "Copilot dans Excel analyse, propose une démarche ou modifie le classeur selon le mode choisi. Vous produisez un bilan présentable et vérifié.",
      items: [
        "Mode Conversation pour analyser, Mode Plan pour valider la démarche, Mode Édition pour modifier le classeur",
        "Comparer les canaux par coût par lead et repérer les valeurs hors norme",
        "Construire le tableau croisé dynamique et le graphique du reporting",
        "Recalculer deux chiffres clés à la main avant la présentation",
      ],
      exercise: "Produire le bilan de votre dernière campagne à partir de votre export, avec un tableau croisé et trois constats vérifiés.",
    },
    {
      day: 2, title: "Module 7 · Verbatims, veille concurrentielle et visuels", duration: '2h',
      description: "Ces trois tâches sortent du tableau de chiffres. Chacune a sa fonction dans Copilot et sa règle de contrôle.",
      items: [
        "Résumer des verbatims et en dégager thèmes et sentiment dans le volet Copilot d'Excel ; la fonction =COPILOT() est retirée depuis le 14 septembre 2026",
        "Rédiger une note de veille avec l'agent Researcher et contrôler la date de chaque source web",
        "Créer images, affiches et bannières dans l'espace Créer avec le kit de marque",
        "Signaler une image qui montre de façon trompeuse des personnes ou des lieux existants (AI Act, article 50)",
      ],
      exercise: "Synthétiser les commentaires de votre dernière enquête client, puis décliner un de vos visuels de campagne en trois formats.",
    },
    {
      day: 2, title: "Module 8 · Un agent de marque et le circuit de validation", duration: '1h30',
      description: "L'équipe écrit avec la même voix quand la charte vit dans un agent partagé. Le module fixe aussi ce qui passe en validation avant publication.",
      items: [
        "Créer un agent de relecture dans Agent Builder : charte dans les Instructions, lexique et textes de référence dans Connaissances",
        "Fichier SharePoint ou fichier déposé : qui pourra lire le contenu",
        "Monter un bloc-notes Copilot par campagne avec le brief, les études et les comptes rendus en références",
        "Fixer les validations obligatoires : chiffres, visuels générés, mentions légales",
      ],
      exercise: "Créer l'agent de relecture de votre marque à partir de votre charte éditoriale et le tester sur un texte récent de l'équipe.",
    },
  ],
  objectives: [
    "Désigner dans Copilot les documents d'une campagne et vérifier chaque élément cité dans sa source",
    "Produire un deck de lancement dans le modèle PowerPoint de l'entreprise à partir d'un brief Word",
    "Analyser un export de campagne dans Excel avec les modes Conversation, Plan et Édition, puis contrôler les chiffres clés",
    "Créer des visuels dans l'espace Créer en appliquant le kit de marque et la règle de signalement de l'article 50",
    "Paramétrer un agent de relecture de marque dans Agent Builder en choisissant le bon mode d'ajout des fichiers",
  ],
  faq: [
    {
      q: "Faut-il la licence Microsoft Copilot pour suivre la formation Copilot marketing ?",
      a: "Non. Copilot Chat, inclus dans les abonnements Microsoft 365 professionnels, suffit pour rédiger, analyser un fichier déposé et créer des images. Les usages qui s'appuient sur vos mails, vos réunions Teams et vos fichiers SharePoint demandent la licence complémentaire, tout comme les agents Researcher et Analyst. Nous adaptons les exercices au niveau de licence de chaque participant dès l'analyse du besoin.",
    },
    {
      q: "Copilot peut-il lire directement nos données de CRM, d'emailing ou de régies publicitaires ?",
      a: "Seulement si un administrateur a activé un connecteur Copilot vers l'outil concerné. Vérifiez avec votre service informatique ce que propose la galerie de connecteurs Microsoft pour votre CRM. Pour un bilan de campagne, un export CSV propre, mis sous forme de tableau Excel, donne déjà de bons résultats.",
    },
    {
      q: "Copilot respecte-t-il notre charte graphique dans PowerPoint ?",
      a: "Il réutilise les dispositions, le thème et les polices du fichier ouvert. Partez donc toujours du modèle de présentation de l'entreprise. Pour les images, l'espace Créer applique les kits de marque si votre organisation les a configurés. Les photos produit et les logos restent à reprendre depuis vos sources validées.",
    },
    {
      q: "Peut-on publier dans une publicité une image générée avec Copilot ?",
      a: "Oui, avec deux précautions. Depuis le 2 août 2026, l'article 50 de l'AI Act impose de signaler une image générée qui montre de façon trompeuse des personnes, des lieux ou des événements existants. Microsoft défend ses clients professionnels poursuivis pour droit d'auteur sur un contenu Copilot, à condition qu'ils aient laissé actifs les filtres du produit.",
    },
    {
      q: "Nos briefs et nos chiffres servent-ils à entraîner les modèles de Microsoft ?",
      a: "Non. Microsoft indique que les invites, les réponses et les données lues dans Microsoft 365 ne servent pas à entraîner les modèles de base. Pour les utilisateurs européens, le traitement reste dans la limite des données de l'UE. Exception à connaître : les modèles Anthropic, que l'administrateur peut activer dans Copilot, sont exclus de cette limite.",
    },
    {
      q: "La formation convient-elle à des marketeurs qui fuient les formules Excel ?",
      a: "Oui. Le Mode Conversation d'Excel répond en langage courant et le Mode Édition construit les tableaux croisés et les graphiques à votre place. Nous apprenons surtout à préparer l'export et à contrôler deux ou trois chiffres clés. C'est ce contrôle qui rend le bilan présentable en comité.",
    },
    {
      q: "En quoi cette formation diffère-t-elle de la formation Copilot pour la communication ?",
      a: "Elle suit le cycle d'une campagne : brief, plan, deck de lancement, déclinaisons visuelles, lecture des performances. La formation communication traite des messages institutionnels, de la communication interne et des relations presse. Une équipe qui fait les deux peut combiner les modules en intra.",
    },
    {
      q: "Comment financer la formation Copilot de l'équipe marketing ?",
      a: "Masteria est certifié Qualiopi. La formation entre dans le plan de développement des compétences et peut être prise en charge par votre OPCO, selon ses critères et la taille de l'entreprise. Le tarif est de 1 980 € HT par jour, en intra jusqu'à 12 participants. Nous fournissons les documents que l'OPCO demande pour instruire le dossier.",
    },
  ],
  sources: [
    { name: "Microsoft Support : Copilot Chat avec et sans licence Microsoft Copilot", url: "https://support.microsoft.com/fr-fr/topic/how-copilot-chat-works-with-and-without-a-microsoft-365-copilot-license-5810b659-fbe0-48ee-9fe6-d731fe86cdeb" },
    { name: "Microsoft Learn : options de licence pour Microsoft Copilot (mise à jour du 17/09/2026)", url: "https://learn.microsoft.com/fr-fr/microsoft-365/copilot/microsoft-365-copilot-licensing" },
    { name: "Microsoft Support : créer une présentation avec Copilot dans PowerPoint", url: "https://support.microsoft.com/fr-fr/powerpoint/copilot/create-a-new-presentation-with-copilot-in-powerpoint" },
    { name: "Microsoft Support : créer une présentation personnalisée à partir d'un fichier", url: "https://support.microsoft.com/fr-fr/powerpoint/copilot-tutorial-create-a-branded-presentation-from-a-file" },
    { name: "Microsoft Support : démarrage avec Copilot dans Excel (modes Édition, Plan, Conversation)", url: "https://support.microsoft.com/fr-fr/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Microsoft Support : obtenir des informations sur les données avec Copilot dans Excel", url: "https://support.microsoft.com/fr-fr/excel/copilot/data-insights-with-copilot-in-excel" },
    { name: "Microsoft Support : fonction COPILOT (retrait au 14 septembre 2026)", url: "https://support.microsoft.com/fr-fr/excel/functions/copilot-function" },
    { name: "Microsoft Support : bien démarrer avec Créer dans l'application Microsoft 365 Copilot", url: "https://support.microsoft.com/fr-FR/Microsoft-365-Copilot/get-started-with-create-in-the-microsoft-365-copilot-app" },
    { name: "Microsoft Support : créer des images générées par l'IA avec l'application Copilot", url: "https://support.microsoft.com/fr-fr/microsoft-365-copilot/create-ai-generated-images-with-the-microsoft-365-copilot-app" },
    { name: "Microsoft Learn : sources de connaissances d'un agent Agent Builder", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-knowledge" },
    { name: "Microsoft Learn : données, confidentialité et sécurité pour Microsoft Copilot", url: "https://learn.microsoft.com/fr-fr/copilot/microsoft-365/microsoft-365-copilot-privacy" },
    { name: "Règlement (UE) 2024/1689 sur l'intelligence artificielle (AI Act), article 50", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
}
