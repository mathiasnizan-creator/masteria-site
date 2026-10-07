// Contenu propre à /formation-copilot-communication (guide terrain, page propre). Rendu par SpokePage.
// Faits Microsoft : fiche du 7 octobre 2026 (Learn, notes de version du 06/10/2026, support Word, pages tarifs
// France). AI Act : article 50 applicable depuis le 02/08/2026, lignes directrices du 20/07/2026. Réécrit le 07/10/2026.
export default {
  slug: 'formation-copilot-communication',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: 'Formation Copilot communication : communiqués, messages internes et voix de marque',
  metaTitle: 'Formation Copilot Communication · Microsoft 365 | Masteria',
  metaDesc: "Formation Copilot pour la communication : communiqués dans Word, voix de marque, PowerPoint à la charte, messages internes, veille et article 50. 2 jours.",
  keywords: "formation copilot communication, microsoft copilot communication interne, copilot communiqué de presse, copilot powerpoint charte graphique, copilot voix de marque, ai act article 50 communication, formation copilot qualiopi opco",
  prerequis: "Écrire au quotidien dans Word et PowerPoint ; la charte éditoriale et graphique de la marque est à fournir au cadrage si elle existe",
  resume: "Destinée aux directions de la communication et à leurs chargés de communication interne, externe et éditoriale, cette formation apprend à produire avec Microsoft Copilot (anciennement Microsoft 365 Copilot) les écrits qui engagent l'image de l'entreprise : communiqués, éléments de langage, messages aux salariés, présentations. La voix de la marque et la maîtrise de ce qui est publié restent à l'équipe. Le parcours dure 14 heures pour une équipe de douze au maximum ou une seule personne ; chaque journée coûte 1 980 € HT, et l'OPCO peut la financer si ses règles et ses fonds le permettent.",
  enBref: [
    { label: 'Formation', value: "Copilot pour les écrits de la communication : communiqués, éléments de langage, messages internes, présentations, veille" },
    { label: 'Durée', value: "Deux jours de 7 heures ; le second peut s'appuyer sur un dossier en cours dans votre service" },
    { label: 'Formats', value: "Équipe communication en intra, douze personnes au plus, ou accompagnement individuel d'une direction de la communication ; sur site ou à distance" },
    { label: 'Tarif', value: "Journée à 1 980 € HT, parcours de deux journées à 3 960 € HT" },
    { label: 'Financement', value: "Prise en charge par l'OPCO envisageable, Masteria étant certifié Qualiopi ; décision selon les critères de l'opérateur" },
    { label: 'Prérequis', value: "Rédiger régulièrement pour l'entreprise ; licences Copilot de l'équipe relevées avant la session" },
  ],
  intro: "Une équipe de communication écrit pour des publics qui ne pardonnent rien : des journalistes, des salariés inquiets, des élus, des clients. Copilot rédige vite un communiqué, une note interne ou une présentation, dans les applications où l'équipe travaille déjà et à partir des documents qu'elle lui désigne. Les dérapages viennent d'ailleurs : une voix de marque qui s'efface, un chiffre repris d'une version périmée, un visuel généré qui imite une personne existante. Ce programme apprend à confier à Copilot le premier jet et la déclinaison, en gardant la main sur le ton, les faits et l'information du public que l'AI Act impose désormais dans certains cas.",
  guide: {
    kicker: 'Guide terrain communication',
    h2: "Copilot écrit le premier jet ; la voix de la marque et la vérification des faits restent à l'équipe",
    lead: "Un communiqué se rédige à partir d'un dossier : une note de la direction, des chiffres validés, une citation approuvée, l'historique des prises de parole. Copilot sait assembler ces pièces, à condition qu'on lui désigne les bonnes. Ce guide montre comment lui fournir la matière et la voix de la marque, comment décliner un message d'un public à l'autre, et ce que l'AI Act, par son article 50, change depuis le 2 août 2026 pour les contenus publiés.",
    sections: [
      {
        h3: "Le communiqué se construit sur les pièces validées, désignées une à une",
        paras: [
          "Le premier jet naît dans Word, à partir des fichiers désignés par la barre oblique : la note de la direction, la fiche de chiffres validée, le dernier communiqué sur le même sujet. Plus la demande précise le public, l'angle, la longueur et ce qui ne doit pas figurer, plus le texte se rapproche de ce que vous auriez écrit. Les titulaires de la licence disposent ensuite de Modifier avec Copilot, qui reprend le document ouvert : raccourcir le chapeau, resserrer un titre, passer une phrase à la voix active.",
          "Une précaution vaut pour les documents en relecture partagée. D'après le support de Microsoft, cette réécriture laisse de côté les annotations et le suivi des révisions, et une remarque rattachée à un passage remanié risque de s'effacer. Dans une équipe où le juriste et la direction annotent les projets de communiqué, ces remarques se règlent avant de lancer Copilot.",
        ],
      },
      {
        h3: "La voix de la marque s'écrit une fois, puis se réutilise",
        paras: [
          "Une charte éditoriale tient souvent en quelques pages : vocabulaire à employer et à proscrire, longueur des phrases, manière de citer les dirigeants, place des chiffres. La formation la transforme en instructions que Copilot peut suivre. Pour une demande ponctuelle, ces instructions se collent en tête de la conversation ; pour un usage d'équipe, elles deviennent une compétence. Microsoft a ouvert le 6 octobre 2026 les compétences personnalisées dans Copilot pour PowerPoint sur Windows, et Cowork admet cinquante compétences maison en plus des siennes.",
          "Un agent construit avec Agent Builder peut aussi porter la charte : chaque chargé de communication l'interroge pour remettre un texte dans la voix maison. Le format SKILL.md des compétences, ouvert, permet de reprendre la même procédure dans un autre assistant si l'entreprise en adopte un.",
        ],
      },
      {
        h3: "Les messages internes passent par les conseils de ton d'Outlook",
        paras: [
          "Un message aux salariés se juge à sa première phrase et à ce qu'il tait. Avant l'envoi, Copilot dans Outlook propose des conseils de clarté et de ton : une formulation qui peut inquiéter, une phrase trop longue, une information attendue qui manque. Pour un message signé par un dirigeant, la formation recommande de partir de ses notes, même télégraphiques. Copilot met en forme la pensée du dirigeant ; le fond doit venir de lui.",
          "Dans Teams, Cowork peut publier l'annonce dans un canal à l'heure prévue, après votre accord, et préparer dans la foulée la réponse aux questions qui arrivent. Sur les sujets qui touchent l'emploi ou l'organisation, la relecture des ressources humaines précède la publication, et le calendrier d'information du CSE passe avant celui de la communication.",
        ],
      },
      {
        h3: "Les présentations se mettent à la charte en une demande",
        paras: [
          "Copilot dans PowerPoint transforme un document Word en support projetable et sait appliquer à tout le fichier la mise en forme de l'entreprise ; il suggère aussi des images. Deux nouveautés sont annoncées pour octobre 2026 selon la presse spécialisée, un kit de marque intégré et des tâches longues qui continuent après la fermeture de l'application ; votre modèle maison fait foi jusqu'à leur arrivée sur vos postes.",
          "Un visuel généré soulève d'abord une question juridique. Le droit européen de l'IA oblige depuis le 2 août 2026 celui qui diffuse un hypertrucage, c'est-à-dire une image fabriquée au point de passer pour une photographie authentique (un visage, un site, une scène qui existent), à en indiquer l'origine artificielle. Nous proposons une règle plus stricte et plus simple à retenir : aucun visage existant généré, et une mention dès qu'une image produite par IA quitte l'entreprise.",
        ],
      },
      {
        h3: "Les textes diffusés au public ont aussi leur règle de transparence",
        paras: [
          "La même disposition du règlement, son article 50, s'applique à l'écrit. Un article produit ou retouché par IA et mis en ligne pour éclairer le public sur un sujet d'intérêt général doit porter une indication de son origine. L'exception tient en deux conditions : un humain l'a relu, et une personne ou une entreprise en répond comme éditeur. Un communiqué validé et signé par la direction remplit les deux ; une page d'actualité publiée automatiquement, sans relecture, n'en remplit aucune. La Commission européenne a précisé l'application de ces règles dans un texte d'orientation daté du 20 juillet 2026.",
          "Les éditeurs d'outils doivent de leur côté marquer les contenus générés d'une signature que les machines savent lire ; pour les systèmes mis sur le marché avant le 2 août 2026, ce marquage doit être en place le 2 décembre 2026. Une note interne qui ne sort pas de l'entreprise reste hors de ce cadre. La charte écrite pendant la formation tranche ces cas pour votre équipe.",
        ],
      },
      {
        h3: "La veille et la revue de presse se sourcent avant de circuler",
        paras: [
          "Copilot Chat cherche sur le web et peut résumer une série d'articles sur votre secteur. Avec la licence, Researcher fouille méthodiquement les documents de l'entreprise, utile pour retrouver ce qu'elle a déjà dit sur un sujet avant une nouvelle prise de parole. Dans les deux cas, chaque affirmation se rattache à une source ouverte et datée avant d'entrer dans une note de veille : un article ancien remonté par la recherche peut présenter comme actuelle une situation dépassée.",
          "Les pièces d'une crise, un projet de réorganisation ou des résultats non publiés restent protégés par les droits d'accès et, si l'entreprise les utilise, par les étiquettes de confidentialité de Purview. Copilot montre un document aux seules personnes qui pouvaient déjà l'ouvrir. Avant une période sensible, la vérification des partages SharePoint de la direction de la communication fait partie de la préparation.",
        ],
      },
    ],
    table: {
      caption: "Les écrits de la communication avec Copilot, et le contrôle qui va avec (octobre 2026)",
      headers: ['Écrit', 'Où travailler', 'Contrôle avant diffusion'],
      rows: [
        ['Communiqué de presse', 'Word, à partir des pièces validées que vous désignez', 'Chiffres et citations comparés aux originaux'],
        ['Éléments de langage', "Researcher sur l'historique des prises de parole, avec la licence", 'Cohérence avec les déclarations passées'],
        ['Message aux salariés', 'Outlook ou Teams, conseils de ton', "Relecture par les RH si le sujet touche l'emploi"],
        ['Présentation institutionnelle', 'PowerPoint, depuis le document Word, au modèle de la marque', 'Logos, couleurs et mentions légales'],
        ["Visuel d'illustration", 'Images proposées dans PowerPoint', 'Aucune personne existante représentée, mention en cas de diffusion externe'],
        ['Baromètre interne', 'Forms pour les questions, Excel en mode Conversation pour les réponses', 'Anonymat des répondants préservé'],
        ['Revue de presse', 'Copilot Chat ancré sur le web', 'Date et source de chaque article ouvertes'],
      ],
    },
    cas: {
      h3: "Cas pratique : annoncer un déménagement de siège à trois publics",
      contexte: "Une ETI de 600 salariés quitte son siège pour un nouveau bâtiment en mars, et sa responsable de la communication prépare l'annonce. La direction a validé une note de deux pages, un calendrier et une foire aux questions provisoire. Il faut un message aux salariés, un communiqué pour la presse locale et un article pour l'intranet, publiés le même jour. Le scénario sert d'exemple ; en session, l'équipe part d'une annonce de son entreprise.",
      etapes: [
        "Rassemblez dans un dossier SharePoint la note validée, le calendrier, la FAQ provisoire et votre charte éditoriale.",
        "Ouvrez un document Word vierge, collez-y le texte de la demande, puis désignez les quatre fichiers avec la barre oblique.",
        "Comparez chaque date et chaque chiffre des trois textes avec le calendrier validé.",
        "Vérifiez avec les ressources humaines que le CSE a été informé avant toute diffusion.",
        "Publiez après validation de la direction ; le communiqué, relu et assumé par l'entreprise, n'appelle pas de mention liée à l'IA.",
      ],
      prompt: "Tu assistes la directrice de la communication d'une entreprise de 600 salariés. Pièces jointes : la note validée par la direction sur le déménagement du siège, le calendrier, la FAQ provisoire et notre charte éditoriale.\n\nRédige trois textes qui respectent la charte (vouvoiement, phrases courtes, aucun superlatif) :\n1. Un message aux salariés de 250 mots au plus, qui commence par ce qui change pour eux au quotidien : adresse, accès, date.\n2. Un communiqué pour la presse locale de 300 mots au plus, avec un titre, un chapeau et une citation du directeur général reprise mot pour mot de la note.\n3. Un article intranet de 400 mots au plus, qui reprend les questions de la FAQ.\n\nN'utilise que les informations des pièces jointes. N'invente ni date, ni chiffre, ni citation. Termine par la liste des questions de la FAQ auxquelles la note ne répond pas.",
      resultat: "Vous obtenez trois textes cohérents entre eux, chacun adressé à son public, et la liste des questions que la note laisse ouvertes, souvent la plus utile à remonter à la direction. Le ton suit la charte quand elle est précise ; une charte vague produit des textes interchangeables. Dates, adresse et citation se vérifient une à une, car une erreur dans le message aux salariés se corrige mal une fois envoyé.",
    },
    pieges: [
      {
        titre: "Un chiffre repris d'une ancienne version",
        texte: "Si deux versions d'une note coexistent dans SharePoint, Copilot peut citer la mauvaise. Désignez le fichier validé avec la barre oblique et archivez les brouillons.",
      },
      {
        titre: "Une citation de dirigeant reformulée",
        texte: "Copilot améliore volontiers une phrase, y compris entre guillemets. Exigez la reprise mot pour mot, puis comparez avec l'original.",
      },
      {
        titre: 'Les annotations du juriste perdues',
        texte: "La réécriture dans Word ignore les annotations, et un passage remanié peut perdre les siennes. Réglez les remarques avant de lancer Copilot.",
      },
      {
        titre: 'Un visuel qui imite une personne existante',
        texte: "Une image générée qui ressemble à un salarié ou à un élu doit être signalée si elle est diffusée. La règle la plus simple consiste à ne pas en produire.",
      },
      {
        titre: 'Une crise préparée dans un dossier trop ouvert',
        texte: "Copilot montre un document à tous ceux qui peuvent l'ouvrir. Rangez les éléments d'une crise dans un espace aux droits restreints dès la première heure.",
      },
      {
        titre: 'Un message de dirigeant que personne ne reconnaît',
        texte: "Un texte trop lisse trahit vite l'outil. Partez des notes du dirigeant, gardez ses expressions, et faites-lui relire la version finale avant l'envoi.",
      },
    ],
  },
  audience: [
    {
      title: 'Directeurs et directrices de la communication',
      desc: "Vous validez ce qui sort au nom de l'entreprise et arbitrez la place de l'IA dans l'équipe. Vous apprenez à juger un texte produit avec Copilot et à fixer les règles de relecture, de voix de marque et de transparence.",
    },
    {
      title: 'Chargés de communication interne',
      desc: "Notes de service, articles intranet, messages des dirigeants, accompagnement des changements : vous apprenez à décliner un message selon les publics et à préparer des textes que les RH et la direction valident sans aller-retour inutile.",
    },
    {
      title: 'Chargés de communication externe et relations presse',
      desc: "Communiqués, dossiers de presse, éléments de langage, veille : vous apprenez à construire un texte sur des pièces validées et à sourcer une revue de presse avant qu'elle circule.",
    },
    {
      title: 'Responsables éditoriaux et contenus',
      desc: "Vous tenez la ligne du site, des réseaux et des publications. Vous apprenez à écrire la charte sous une forme que Copilot applique, et à repérer les contenus dont l'origine artificielle doit être indiquée.",
    },
  ],
  useCases: [
    { icon: '📰', title: 'Communiqués sur pièces validées', desc: "Word rédige à partir de la note, des chiffres et de la citation désignés ; rien d'autre n'entre dans le texte." },
    { icon: '🗣️', title: 'Éléments de langage cohérents', desc: "Researcher retrouve ce que l'entreprise a déjà dit sur un sujet avant une nouvelle prise de parole." },
    { icon: '📣', title: 'Un message, trois publics', desc: "Salariés, presse et intranet reçoivent chacun leur version, tirées des mêmes faits." },
    { icon: '🎨', title: 'Présentations à la charte', desc: "PowerPoint crée le support depuis Word et applique le modèle de la marque à tout le fichier." },
    { icon: '📊', title: 'Baromètres internes', desc: "Forms propose les questions, Excel analyse les réponses sans toucher au fichier d'origine." },
    { icon: '🔎', title: 'Revue de presse sourcée', desc: "Chaque article cité s'ouvre, se date et se vérifie avant de rejoindre la note de veille." },
  ],
  modules: [
    {
      day: 1,
      title: 'Module 1 · Situer Copilot dans le travail de la communication',
      duration: '1h30',
      description: "Savoir ce que Copilot lit, produit et publie selon la licence, avant d'écrire la première ligne.",
      items: [
        "Copilot Chat sans supplément, ancré sur le web, et licence Microsoft Copilot, ouverte aux documents de l'entreprise",
        "Étiquette Basic ou Premium dans Word et PowerPoint, modèle utilisé, recherche sur le web ou dans les documents de travail",
        "Documents sensibles : crise, résultats non publiés, projets d'organisation",
        "Ce que l'AI Act demande aux communicants : article 4 et article 50",
      ],
      exercise: "Vous classez dix documents récents de votre service entre ceux que Copilot peut travailler et ceux qui restent hors de l'outil.",
    },
    {
      day: 1,
      title: 'Module 2 · Écrire un communiqué à partir des pièces validées',
      duration: '2h',
      description: "Obtenir un premier jet fidèle aux faits, puis le retravailler dans le document.",
      items: [
        "Désigner les sources avec la barre oblique : note, chiffres, citation, communiqué précédent",
        "Préciser public, angle, longueur et éléments à exclure",
        "Modifier avec Copilot : chapeau, titre, voix active, une fois les commentaires traités",
        "Contrôle des chiffres, des dates et des citations reprises mot pour mot",
      ],
      exercise: "Vous rédigez le communiqué d'une annonce récente de votre entreprise à partir des pièces validées, puis vous le comparez à la version publiée.",
    },
    {
      day: 1,
      title: 'Module 3 · Écrire la voix de la marque pour Copilot',
      duration: '1h30',
      description: "Transformer la charte éditoriale en instructions que Copilot applique.",
      items: [
        "Vocabulaire employé et proscrit, longueur des phrases, manière de citer",
        "Instructions collées en tête de conversation, puis compétence partagée par l'équipe (fichier SKILL.md)",
        "Agent Builder : un assistant de reformulation dans la voix maison",
        "Tester la voix sur trois textes de nature différente",
      ],
      exercise: "Vous écrivez la charte de votre marque sous forme d'instructions et la testez sur un texte que vous connaissez bien.",
    },
    {
      day: 1,
      title: 'Module 4 · Décliner un message pour chaque public',
      duration: '2h',
      description: "Partir des mêmes faits pour écrire aux salariés, à la presse et aux partenaires.",
      items: [
        "Une note source, trois textes : message interne, communiqué, article intranet",
        "Conseils de ton dans Outlook avant l'envoi d'un message sensible",
        "Publication dans un canal Teams, relecture par les RH quand l'emploi est en jeu",
        "Traductions : relecture par un collègue dont c'est la langue avant diffusion",
      ],
      exercise: "Vous déclinez pour trois publics une annonce récente de votre entreprise, puis listez les questions que la note source laisse ouvertes.",
    },
    {
      day: 2,
      title: 'Module 5 · Construire les présentations à la charte',
      duration: '1h30',
      description: "Passer du document au support projeté sans trahir l'identité visuelle.",
      items: [
        "Créer la présentation depuis un document Word et la mettre au modèle de la marque",
        "Images proposées par PowerPoint : usages admis, visages existants exclus",
        "Compétences sur mesure dans PowerPoint (version Windows, octobre 2026)",
        "Kit de marque annoncé pour octobre 2026 : ce qu'il changera, ce qu'on fait en attendant",
      ],
      exercise: "Vous transformez un document institutionnel en présentation de dix slides au modèle de votre marque.",
    },
    {
      day: 2,
      title: 'Module 6 · Veille, revue de presse et éléments de langage',
      duration: '2h',
      description: "Préparer une prise de parole dont chaque réponse a une source.",
      items: [
        "Copilot Chat sur le web : résumer une série d'articles, vérifier la date de chacun",
        "Researcher sur l'historique interne des prises de parole, avec la licence",
        "Bloc-notes Copilot pour suivre un sujet sensible sur plusieurs semaines",
        "Éléments de langage : questions difficiles et réponses validées",
      ],
      exercise: "Vous préparez les éléments de langage d'une prise de parole à venir, chaque réponse reliée à une source interne ou publique.",
    },
    {
      day: 2,
      title: "Module 7 · Mesurer l'opinion interne avec Forms et Excel",
      duration: '1h30',
      description: "Construire un baromètre, puis lire ses résultats sans exposer personne.",
      items: [
        "Faire proposer les questions d'un baromètre dans Forms, puis les reprendre",
        "Analyser les réponses dans Excel en mode Conversation, sans modifier l'export",
        "Classer les commentaires libres par thème et contrôler un échantillon",
        "Préserver l'anonymat des répondants dans les restitutions",
      ],
      exercise: "Vous analysez les réponses d'une enquête interne récente et rédigez trois constats appuyés chacun sur un chiffre du tableau.",
    },
    {
      day: 2,
      title: "Module 8 · Fixer les règles de publication de l'équipe",
      duration: '2h',
      description: "Décider qui relit, ce qui se signale et ce qui ne passe jamais par Copilot.",
      items: [
        "Article 50 : les cas où l'origine artificielle d'un texte ou d'une image diffusés doit être indiquée",
        "Circuit de relecture : qui valide quoi avant publication",
        "Charte d'usage : sources admises, documents exclus, rangement des dossiers de crise",
        "Plan à 30 jours : trois écrits outillés par personne, un référent, un bilan après quatre semaines",
      ],
      exercise: "Vous écrivez la charte de publication de votre service, mention de l'IA comprise, et le plan des trente prochains jours.",
    },
  ],
  objectives: [
    "Rédiger un communiqué dans Word à partir de pièces validées, chiffres et citations contrôlés",
    "Écrire la voix de la marque sous forme d'instructions ou de compétence que Copilot applique",
    "Décliner un même message pour les salariés, la presse et l'intranet",
    "Créer une présentation au modèle de la marque à partir d'un document Word",
    "Préparer une revue de presse et des éléments de langage dont chaque affirmation est sourcée",
    "Reconnaître les contenus diffusés dont l'origine artificielle doit être mentionnée selon le règlement européen",
  ],
  faq: [
    {
      q: 'Pourquoi Copilot plutôt que ChatGPT ou Claude pour une équipe de communication ?',
      a: "Parce qu'il travaille là où sont vos documents, avec vos droits. Si votre entreprise vit dans Microsoft 365, Copilot trouve la note de la direction, le dernier communiqué et la charte sans copier-coller, et respecte les accès de chacun. ChatGPT et Claude restent d'excellents rédacteurs, et Claude est même accessible depuis Copilot une fois que l'administrateur l'a autorisé. Le choix porte donc sur l'accès aux sources et sur les règles de l'entreprise. Notre formation multi-outils compare ces assistants sur vos propres textes.",
    },
    {
      q: 'Un communiqué rédigé avec Copilot doit-il le mentionner ?',
      a: "Non, dès lors qu'il a été relu et qu'une personne ou l'entreprise en répond comme éditeur, ce qui est la situation normale d'un communiqué signé. Le droit européen exige depuis août 2026 une indication sur les textes générés mis en ligne pour éclairer le public sur un sujet d'intérêt général, sauf relecture humaine et responsabilité éditoriale assumée. Les images et vidéos qui imitent des personnes ou des événements existants doivent, elles, être signalées, avec des aménagements pour les œuvres manifestement artistiques ou satiriques.",
    },
    {
      q: 'Copilot sait-il écrire dans la voix de notre marque ?',
      a: "Il la suit si vous la lui décrivez avec précision. Une charte qui demande un « ton chaleureux et moderne » produit des textes interchangeables ; une charte qui liste les mots à employer, ceux à proscrire, la longueur des phrases et trois textes exemplaires donne des résultats reconnaissables. La formation transforme votre charte en instructions, puis en compétence partagée par l'équipe. Pour une voix de marque exigeante, la relecture humaine reste la dernière étape avant publication.",
    },
    {
      q: 'Nos documents de crise sont-ils protégés si nous utilisons Copilot ?',
      a: "Les demandes et les réponses d'un salarié connecté à son compte professionnel restent couvertes par les engagements contractuels de Microsoft et n'alimentent l'entraînement d'aucun modèle. Le point faible se trouve dans vos partages : Copilot retrouve tout document que la personne peut ouvrir. Un dossier de crise rangé dans un espace partagé avec toute l'entreprise devient visible dans les réponses de chacun. Créez dès la première heure un espace aux droits restreints, et vérifiez vos partages avant le déploiement des licences.",
    },
    {
      q: "Une équipe sans licence Copilot peut-elle suivre ces deux jours ?",
      a: "Oui. Copilot Chat, inclus dans Microsoft 365, cherche sur le web, lit les fichiers déposés et rédige dans la conversation ; les ateliers de rédaction et de déclinaison se font avec lui. La licence ouvre en plus les documents de l'entreprise, Researcher et la réécriture d'un document Word ouvert. Pour les grandes entreprises, Microsoft la facture 26,00 € HT chaque mois pour un siège payé à l'année, 27,30 € HT au mois (prix relevés le 7 octobre 2026) ; quant à Copilot Business, destiné aux entreprises qui ne dépassent pas 300 postes, il est affiché à 18,20 € HT en annuel, sous l'ancien nom.",
    },
    {
      q: 'Copilot peut-il produire les visuels de nos campagnes ?',
      a: "PowerPoint propose des images pour illustrer une présentation, et Microsoft a annoncé un kit de marque pour octobre 2026. Pour une campagne, la décision dépend de votre charte graphique et de vos droits sur les visuels : une image générée ne remplace ni un photographe ni un graphiste sur un support de marque. Deux règles valent pour toute l'équipe : aucune personne existante représentée, et une mention dès qu'une image générée qui pourrait passer pour authentique sort de l'entreprise.",
    },
    {
      q: 'La formation peut-elle porter sur une actualité de notre entreprise ?',
      a: "Oui, et c'est souvent le meilleur support. Les ateliers du deuxième jour partent d'un dossier de votre service : un lancement, un changement d'organisation, une prise de parole à préparer. Les pièces confidentielles restent dans votre environnement Microsoft 365, sous vos droits ; à défaut, le formateur travaille sur des copies dont les noms et les chiffres sensibles ont été retirés. Le programme s'ajuste au calendrier de publication, pour que l'atelier serve une annonce prévue dans les semaines suivantes.",
    },
    {
      q: "Comment financer la formation d'une équipe de communication ?",
      a: "La session entre dans le périmètre de la certification Qualiopi de Masteria, celui des actions de formation ; votre OPCO a donc la faculté de la financer, d'après ses règles et dans la limite de ses fonds. Le parcours de deux jours coûte 3 960 € HT à une équipe de douze au maximum, et une directrice de la communication accompagnée seule règle 1 980 € HT chaque journée. Le programme et la convention se préparent avec nous. Une équipe installée en Suisse ou en Belgique, où ce financement n'existe pas, est facturée sur devis, en euros et hors taxes.",
    },
  ],
  tarifs: {
    titre: 'Le prix d’une session Copilot pour la communication',
    paras: [
      "Chaque journée, facturée 1 980 € HT, comprend une préparation sur vos documents : votre charte éditoriale, deux ou trois communiqués récents, un modèle de présentation et, si vous le souhaitez, un dossier en cours. Les ateliers se construisent sur cette matière, et l'équipe repart avec ses instructions de voix de marque, ses demandes types et la charte de publication écrite au module 8.",
      "Six chargés de communication formés ensemble représentent une facture de 3 960 € HT, 660 € HT chacun, montant qui ne bouge pas jusqu'à douze inscrits. Les licences Copilot s'achètent à part. L'OPCO décide ensuite de son financement d'après ses propres règles, sur le dossier préparé avec vous.",
    ],
  },
  apres: {
    titre: 'Après la formation, un assistant de rédaction à votre voix',
    texte: "La méthode acquise, votre direction de la communication peut confier à Masteria la création d'un agent qui réécrit tout texte selon la voix maison, d'une routine Cowork qui assemble chaque semaine la revue de presse sourcée de votre secteur, ou d'un agent capable de renseigner les salariés à partir des notes et de la FAQ d'un projet de transformation. Chaque outil reste dans votre environnement Microsoft 365, sous vos droits. Ce développement se chiffre au forfait après cadrage ; il n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous votre charte éditoriale et deux communiqués récents : les ateliers partiront de votre propre voix.",
    fin: {
      titre: 'Préparons la session sur vos prochaines prises de parole',
      texte: "Précisez-nous l'effectif du service, les licences Copilot qu'il utilise et les sujets qui vous attendent ce trimestre. Vous recevez une proposition de programme et de dates qui respecte votre calendrier de publication.",
    },
  },
  liensAssocies: [
    { label: 'Microsoft Copilot : les douze formations métier', href: '/formation-microsoft-copilot' },
    { label: 'Formation IA pour la communication, tous outils', href: '/formation-ia-communication' },
    { label: "L'AI Act expliqué aux équipes", href: '/formation-ai-act' },
    { label: "Mieux écrire avec l'IA : les écrits professionnels", href: '/formation-ia-ecrits-pro' },
    { label: 'Créativité et IA générative en équipe', href: '/formation-ia-creativite' },
  ],
  sources: [
    { name: "Support Microsoft : réécrire un document avec Copilot dans Word, et ses limites", url: 'https://support.microsoft.com/fr-fr/word/edit-with-copilot-in-word' },
    { name: "Microsoft Learn : notes de version, compétences dans PowerPoint (6 octobre 2026)", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes' },
    { name: "EUR-Lex : AI Act, article 50 sur la transparence des contenus générés", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { name: "Faegre Drinker : le texte d'orientation de la Commission européenne sur la transparence, juillet 2026", url: 'https://www.faegredrinker.com/en/insights/publications/2026/7/eu-ai-act-commission-confirms-transparency-code-of-practice-as-adequate-and-publishes-final-version-of-its-guidelines-on-transparency-obligations' },
    { name: "Microsoft France : prix de Microsoft Copilot pour les grandes entreprises", url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise' },
  ],
}
