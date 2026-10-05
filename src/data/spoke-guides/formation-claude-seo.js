// Contenu propre à /formation-claude-seo (guide terrain, mode page propre). Rendu par SpokePage.
// Fonctions de Claude vérifiées sur support.claude.com, privacy.claude.com et claude.com le 5 octobre 2026.
// Règles de Google vérifiées sur developers.google.com le 5 octobre 2026 : contenus générés par IA et contenus utiles
// (mis à jour le 1er octobre 2026), règles anti-spam (28 août 2026), fonctionnalités d'IA (10 décembre 2025).
export default {
  slug: 'formation-claude-seo',
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  pagePropre: true,
  auteur: true,
  metaDesc: "La formation Claude pour le SEO : audit éditorial d'un site exporté en entier, briefs sourcés, règles de Google et robots d'Anthropic. Qualiopi.",
  resume: "La formation Claude pour le SEO de Masteria dure deux jours (14 heures) et réunit responsables SEO, rédacteurs web et agences autour de l'export de leur site. En intra, le groupe compte douze personnes au plus ; un consultant peut la suivre seul. Elle se tient dans vos bureaux ou à distance ; chaque jour est facturé 1 980 € HT. Organisme certifié Qualiopi, Masteria vous aide à solliciter l'OPCO de votre branche.",
  intro: "Une équipe SEO se demande ce qu'un assistant apporte à côté de son crawler et de son outil de mots-clés. Claude lit le texte de tout un site dans une seule conversation, repère les pages qui répondent à la même question et prépare des briefs à partir de sources citées. Ce guide détaille un audit éditorial complet avant une refonte, l'usage des règles publiées par Google comme grille de lecture et le réglage des robots d'Anthropic, sans promettre aucun classement.",
  enBref: [
    { label: 'Formation', value: "Claude au service du référencement : audit éditorial, briefs, contenus longs, robots d'Anthropic" },
    { label: 'Durée', value: "14 heures sur deux jours, avec l'export texte de votre site pour fil rouge" },
    { label: 'Formats', value: "Session intra pour six à douze personnes, ou parcours d'un consultant seul ; sur place ou en ligne" },
    { label: 'Tarif', value: "1 980 € HT par journée de session, pour six comme pour douze participants" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; le financement se demande à l'OPCO dont dépend votre entreprise" },
    { label: 'Prérequis', value: "Un accès à la Search Console du site, un export de votre crawler et un compte Claude payant" },
  ],
  guide: {
    kicker: "Guide terrain",
    h2: "Claude relit le site d'un bout à l'autre ; volumes, positions et liens restent ceux de vos outils",
    lead: "Un crawler compte les balises, un outil de mots-clés estime des volumes. Aucun des deux ne signale que la page « Tarifs » et la page « Devis » répondent à la même question avec d'autres mots, ni qu'un article de 2023 contredit la fiche produit actuelle. Claude le repère s'il lit tout le texte du site, et la méthode entière repose sur cette condition. Les volumes, les positions et les liens entrants viennent de vos outils, que Claude reçoit en fichier ou par un connecteur. Le classement reste la décision de Google : aucune méthode de ce guide ne le garantit.",
    sections: [
      {
        h3: "Trois façons de confier un site à Claude, qui ne lisent pas de la même manière",
        paras: [
          "La première passe par la conversation. Vous exportez avec votre crawler le texte principal de chaque URL indexable dans un seul fichier, une ligne par page, et vous le déposez. Le fichier entre alors dans la mémoire de travail de Claude, sa fenêtre de contexte, qui se compte en tokens (le découpage du texte que le modèle manipule, souvent des bouts de mots) : les modèles les plus récents en acceptent un million sur une offre payante. Claude compare ensuite chaque page à toutes les autres. Faites-lui d'abord annoncer combien d'URL il a lues : le chiffre doit égaler celui de l'export.",
          "La deuxième passe par un projet. Sa base de connaissances convient aux documents de référence : charte éditoriale, liste des offres, briefs validés, pages modèles. Quand cette base approche la limite de la fenêtre, Claude change de mode de lecture : il l'interroge comme un index et n'en charge que les extraits pertinents, ce que la documentation d'Anthropic appelle le mode RAG, et la capacité grimpe jusqu'à dix fois. Pour un audit, ce fonctionnement convient moins, car une page que la recherche ne remonte pas sort de la comparaison sans prévenir.",
          "La troisième confie un dossier à Cowork, la fonction de Claude qui enchaîne seule les étapes d'une tâche longue. Sur l'application de bureau, Claude ouvre un à un les fichiers du dossier que vous lui confiez et peut y enregistrer ses résultats. Il écrit aussi du code pour mesurer ce qu'une lecture ne compte pas : longueur des titles, H1 en double, pages de moins de 300 mots. Les chiffres sortent de ce code, que vous pouvez relire, et le texte nourrit le jugement éditorial.",
        ],
      },
      {
        h3: "Google juge une page sur ce qu'elle apporte, et ses propres questions font une grille d'audit",
        paras: [
          "La documentation de Google consacrée à l'IA générative, mise à jour le 1er octobre 2026, reconnaît l'utilité de l'IA pour explorer un sujet et structurer un contenu original. Elle rappelle qu'une production massive de pages qui n'apportent rien au lecteur peut relever de sa règle sur l'abus de contenu à grande échelle. Elle demande aussi de vérifier les faits de tout contenu généré avant sa mise en ligne, jusqu'aux balises title, aux meta descriptions, aux données structurées et aux textes alternatifs des images.",
          "Le guide de Google sur les contenus utiles, révisé le même jour, invite à se demander qui a écrit une page, comment et pourquoi. Pour le comment, il conseille d'indiquer que l'automatisation a servi quand un lecteur peut raisonnablement s'y attendre. Pour le pourquoi, un contenu écrit d'abord pour attirer des visites depuis les moteurs s'écarte de ce que ses systèmes de classement cherchent à récompenser.",
          "Deux de ses questions d'autoévaluation font une grille d'audit prête à l'emploi : la page apporte-t-elle une information, une analyse ou une recherche originale, et offre-t-elle une valeur substantielle face aux autres pages sur le même sujet. Claude applique cette grille page par page et cite la phrase de la page qui justifie chaque jugement. Son avis ouvre la discussion éditoriale ; la Search Console dira ensuite ce que Google en a retenu.",
        ],
      },
      {
        h3: "La recherche approfondie dresse l'inventaire de l'existant, et votre page apporte ce qui manque",
        paras: [
          "La recherche approfondie (Research), réservée aux offres payantes, lance une série de recherches où chacune oriente la suivante, puis rend sa synthèse en quelques minutes, citations comprises. Elle ne fonctionne qu'avec la recherche web activée et sait consulter aussi vos outils Google connectés, comme Gmail ou Docs. Pour un brief, demandez l'inventaire de ce que couvrent les pages concurrentes, des questions qu'elles laissent sans réponse et des sources qu'elles citent.",
          "Dans sa version du 28 août 2026, la politique de Google contre le spam range parmi les abus l'assemblage de contenus tirés de plusieurs pages sans valeur ajoutée. Un rapport de recherche publié tel quel en prend la forme. Le brief sert donc à fixer ce que seule votre entreprise peut écrire : un chiffre de vos ventes, une question que vos clients posent au téléphone, la photo d'un chantier, l'avis signé d'un expert de la maison.",
          "Les volumes de recherche, les positions et les liens entrants relèvent de vos outils. Semrush publie dans l'annuaire de Claude un connecteur, une liaison fondée sur MCP (un protocole ouvert qui sert de prise entre Claude et un logiciel), qui interroge depuis la conversation ses données de mots-clés, de domaines, de liens et de trafic. Sans connecteur, déposez l'export de votre outil et écrivez dans la consigne qu'aucun chiffre ne doit venir d'ailleurs.",
        ],
      },
      {
        h3: "Trois robots d'Anthropic parcourent le web, et votre robots.txt les règle un par un",
        paras: [
          "Le centre de confidentialité d'Anthropic, dans sa version du 7 avril 2026, décrit trois robots. ClaudeBot collecte des pages qui peuvent servir à l'entraînement des modèles. Claude-User ouvre une page quand un utilisateur pose une question à Claude. Claude-SearchBot parcourt le web pour améliorer la pertinence et l'exactitude des résultats de recherche de Claude. Bloquer Claude-User ou Claude-SearchBot peut faire reculer la présence du site dans les réponses de Claude ; bloquer ClaudeBot indique que les contenus futurs du site doivent rester hors des données d'entraînement.",
          "Le réglage se fait dans le fichier robots.txt de chaque sous-domaine. Anthropic prévient qu'un blocage de ses adresses IP ne garantit pas l'exclusion, puisque ses robots ne peuvent alors plus lire le fichier, et précise qu'il respecte l'extension Crawl-delay, qui espace les visites.",
          "Côté Google, la documentation sur les fonctionnalités d'IA écrit qu'aucune exigence supplémentaire ni optimisation particulière n'est nécessaire pour apparaître dans les Aperçus IA (AI Overviews) et le Mode IA. La page doit être indexée et pouvoir s'afficher avec un extrait. Le trafic correspondant figure dans le rapport Performances de la Search Console, sous le type de recherche Web, mêlé au reste.",
        ],
        list: [
          "Pour sortir de l'entraînement sans perdre la visibilité dans Claude, bloquez ClaudeBot seul.",
          "Si vous voulez rester hors des réponses de Claude, bloquez en plus Claude-SearchBot et Claude-User, en acceptant une visibilité réduite.",
          "Un serveur qui peine sous les visites se protège par la directive Crawl-delay, sous-domaine par sous-domaine.",
        ],
      },
    ],
    table: {
      caption: "Les chantiers d'une équipe SEO et la façon de les mener avec Claude",
      headers: ["Chantier", "Ce que Claude reçoit", "Fonction de Claude", "Ce que vous vérifiez"],
      rows: [
        ["Audit éditorial avant refonte", "Le texte principal de chaque URL, dans un seul fichier", "Conversation, lecture complète", "Le nombre d'URL lues égale celui de l'export"],
        ["Pages qui se disputent une requête", "Le même fichier et les performances de chaque page", "Conversation, puis exécution de code pour les clics", "La requête partagée, dans la Search Console"],
        ["Réécriture d'une rubrique", "Les pages, la charte et les briefs validés", "Projet et compétence « réécriture »", "Les faits et la valeur propre de chaque page"],
        ["Brief d'un nouvel article", "Le sujet et les concurrents à étudier", "Recherche approfondie avec citations", "Les sources ouvertes une à une"],
        ["Titles, meta et textes alternatifs en lot", "La liste des URL et leur contenu", "Exécution de code et classeur Excel produit par Claude", "Chaque balise relue, comme Google le demande"],
        ["Présence dans les réponses de Claude", "Votre robots.txt, à faire relire", "Conversation", "Les règles qui visent Claude-SearchBot et Claude-User"],
      ],
    },
    cas: {
      h3: "Cas pratique : l'audit éditorial d'un site de 240 pages avant sa refonte",
      contexte: "Imaginons la responsable SEO d'une société qui édite des logiciels de gestion pour les PME. La refonte du site est prévue en janvier, et l'agence attend dans trois semaines la liste des pages à garder, fusionner, réécrire ou supprimer. Le site compte 240 URL indexables, dont une centaine d'articles de blog publiés depuis 2019. Ce scénario a été construit pour la formation.",
      etapes: [
        "Avec votre crawler, exportez le texte principal de chaque URL indexable dans un fichier CSV : URL, title, H1, date de mise à jour et texte.",
        "Dans la Search Console, exportez les performances de chaque page sur les douze derniers mois.",
        "Dans le projet « Refonte », qui contient la charte et la liste des offres, lancez une conversation, déposez les deux fichiers et collez la consigne ci-dessous.",
        "Vérifiez que Claude annonce 240 URL lues, puis ouvrez cinq groupes de pages qu'il juge concurrentes et lisez-les côte à côte.",
        "Demandez à Claude de transformer la grille d'audit en compétence, pour la rejouer six mois après la mise en ligne du nouveau site.",
      ],
      prompt: "Nous préparons ensemble la refonte du site d'une société qui édite des logiciels de gestion pour les PME.\n\nLe premier fichier contient le texte principal des 240 URL indexables, une ligne par URL, avec le title, le H1 et la date de mise à jour. Le second reprend, page par page, les clics et les impressions de la Search Console sur douze mois.\n\nRègles :\n- Tout chiffre (clics, impressions, nombre de mots) sort du code que tu exécutes sur les fichiers. Montre ce code.\n- Pas de volume de recherche ni de position : ces données ne figurent pas dans les fichiers. Si une donnée manque, écris « absent des fichiers ».\n- Quand tu portes un jugement sur une page, cite la phrase de la page qui le justifie.\n\nTravail demandé :\n1. Indique le nombre d'URL lues et la liste de celles dont le texte est vide ou illisible.\n2. Pour chaque URL, écris en une phrase la question à laquelle la page répond et le lecteur visé.\n3. Regroupe les pages qui répondent à la même question. Pour chaque groupe, donne les clics et les impressions de chaque page et propose la page de référence, avec ta raison.\n4. Évalue chaque page sur trois questions inspirées du guide de Google sur les contenus utiles. A : apporte-t-elle une information ou une analyse originale ? B : apporte-t-elle quelque chose que les autres pages du site sur le même sujet n'ont pas ? C : semble-t-elle écrite d'abord pour attirer des visites depuis les moteurs ? Réponds par oui, non ou incertain, avec la citation.\n5. Propose pour chaque URL une décision : garder, réécrire, fusionner (avec laquelle) ou supprimer avec redirection (vers quelle page).\n\nRends un fichier Excel avec une ligne par URL et une colonne par résultat, puis une note d'une page sur les cinq chantiers prioritaires.",
      resultat: "Vous disposez alors d'un classeur avec une ligne par URL, la question traitée, les groupes de pages concurrentes, une évaluation argumentée et une décision proposée, ainsi que la note des chantiers prioritaires. Le classeur ouvre la discussion avec l'agence. Avant de le transmettre, ouvrez chaque groupe de fusion, confirmez dans la Search Console que les pages partagent leurs requêtes et faites relire les suppressions par le responsable produit. Chaque fusion appelle une redirection 301 et la reprise des liens internes. Personne ne peut promettre l'effet de la refonte sur le classement : mesurez-le sur plusieurs mois, page par page.",
    },
    pieges: [
      {
        titre: "Le projet qui ne lit plus tout le site",
        texte: "Déposé dans la base d'un projet, un export volumineux fait basculer Claude en recherche dans cette base : il lit les passages qu'il juge utiles et peut laisser une page de côté dans une comparaison. Pour un audit, déposez l'export dans la conversation et faites annoncer le nombre d'URL lues avant toute analyse.",
      },
      {
        titre: "Le rapport de recherche publié tel quel",
        texte: "Une recherche approfondie assemble ce que disent les pages déjà classées. Or Google cite ce cas précis, l'assemblage de contenus venus de plusieurs pages sans valeur ajoutée, parmi les pratiques qu'il sanctionne. Servez-vous du rapport pour bâtir le brief, et faites écrire la page avec ce que votre entreprise est seule à savoir.",
      },
      {
        titre: "Des balises générées en lot et jamais relues",
        texte: "Claude réécrit en une passe les titles, les meta descriptions et les textes alternatifs de toute une rubrique. Google demande de vérifier ces éléments comme le reste du texte. Un texte alternatif qui décrit une image absente de la page, ou une meta description qui promet une offre arrêtée, se rattrape avant publication.",
      },
      {
        titre: "Tous les robots d'Anthropic bloqués d'un seul geste",
        texte: "Un site qui veut sortir de l'entraînement peut être tenté de bloquer d'un coup tous les robots d'Anthropic. Il réduit alors sa visibilité dans les réponses de Claude, qui passent par Claude-SearchBot et Claude-User. Si l'entraînement est votre seule raison, bloquez ClaudeBot seul, et notez la décision avec sa date dans la documentation du site.",
      },
    ],
  },
  audience: [
    { title: "Responsables SEO et acquisition", desc: "Le trafic organique du site et ses chantiers de réécriture sont à votre charge. Vous verrez comment faire lire tout le texte du site à Claude, confronter son jugement à la Search Console et décider des fusions de pages." },
    { title: "Rédacteurs web et responsables de contenu", desc: "Vous écrivez des briefs, des articles et des pages de service. Votre charte vit dans un projet Claude, et une compétence applique vos règles de rédaction à chaque page." },
    { title: "Consultants SEO et agences", desc: "Vous auditez des sites clients avant leur refonte. Vous repartez avec une méthode d'audit éditorial reproductible et la liste des réglages de données à contrôler avant d'y verser les fichiers d'un client." },
  ],
  useCases: [
    { icon: '🗂️', title: "Audit éditorial complet", desc: "Le texte de toutes les pages indexables lu dans une même conversation, avec la question à laquelle répond chaque page." },
    { icon: '🔁', title: "Pages concurrentes", desc: "Les pages qui répondent à la même question regroupées, clics et impressions calculés par un programme que vous relisez." },
    { icon: '📋', title: "Grille de Google appliquée", desc: "Chaque page évaluée avec les questions du guide de Google sur les contenus utiles, citation de la page à l'appui." },
    { icon: '🔎', title: "Briefs sourcés", desc: "La recherche approfondie inventorie ce que couvrent les concurrents ; le brief fixe ce que vous êtes seul à pouvoir écrire." },
    { icon: '✍️', title: "Réécriture d'une rubrique", desc: "Une compétence applique votre charte et vos règles de rédaction à chaque page reprise, dans le projet du site." },
    { icon: '🤖', title: "Robots d'Anthropic", desc: "ClaudeBot, Claude-User et Claude-SearchBot réglés séparément dans le robots.txt, selon ce que vous acceptez." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Exporter le site pour une lecture complète", duration: '1h30',
      description: "Sortir le texte du site et choisir où le déposer.",
      items: [
        "Export du texte principal de chaque URL depuis le crawler",
        "Fenêtre de contexte, tokens et condensation des échanges anciens",
        "Conversation, projet ou dossier Cowork : trois manières de lire",
        "Nombre d'URL lues contrôlé avant toute analyse",
      ],
      exercise: "Vous exportez le texte de votre site et vous faites annoncer par Claude le nombre de pages lues et celles qui sont vides.",
    },
    {
      day: 1, title: "Module 2 · Repérer les pages qui se disputent la même question", duration: '2h',
      description: "Construire la carte éditoriale du site à partir de son texte.",
      items: [
        "Une phrase par page : la question traitée et le lecteur visé",
        "Groupes de pages concurrentes et page de référence",
        "Clics et impressions de la Search Console, calculés par le code",
        "Requêtes partagées confirmées dans la Search Console",
      ],
      exercise: "Vous produisez la carte éditoriale de votre site et vous vérifiez trois groupes de pages dans la Search Console.",
    },
    {
      day: 1, title: "Module 3 · Appliquer la grille de Google page par page", duration: '2h',
      description: "Évaluer chaque page avec les questions que Google publie.",
      items: [
        "IA générative : ce que Google demande de vérifier avant publication",
        "Qui, comment, pourquoi : la grille du guide sur les contenus utiles",
        "Un jugement par page, appuyé sur une citation",
        "Décision par URL : garder, réécrire, fusionner, supprimer avec redirection",
      ],
      exercise: "Vous évaluez une rubrique de votre site avec la grille et vous défendez trois décisions devant le groupe.",
    },
    {
      day: 1, title: "Module 4 · Installer le projet et la compétence de l'équipe", duration: '1h30',
      description: "Fixer les références et les règles qui servent à chaque page.",
      items: [
        "Base du projet : charte, offres, briefs validés, pages modèles",
        "Lecture par recherche au-delà de la fenêtre : la conséquence pour un audit",
        "Compétence de réécriture : fichier SKILL.md, description, exemples",
        "Diffusion en lecture seule auprès des rédacteurs, ou publication dans la bibliothèque de l'organisation",
      ],
      exercise: "Vous ouvrez le projet de référence de votre site et vous écrivez la compétence qui applique votre charte à une page.",
    },
    {
      day: 2, title: "Module 5 · Construire un brief avec la recherche approfondie", duration: '1h30',
      description: "Inventorier l'existant et décider de ce que la page apportera.",
      items: [
        "Recherche approfondie : recherche web active, citations à ouvrir",
        "Questions laissées sans réponse par les pages concurrentes",
        "Ce que votre entreprise est seule à pouvoir écrire",
        "Volumes et positions : export de votre outil ou connecteur Semrush",
      ],
      exercise: "Vous produisez le brief d'un contenu prévu dans votre calendrier, avec au moins deux éléments propres à votre entreprise.",
    },
    {
      day: 2, title: "Module 6 · Écrire et réécrire des contenus longs", duration: '2h',
      description: "Produire une page qui tient sa promesse et se vérifie.",
      items: [
        "Plan validé, puis rédaction section par section dans la voix de la compétence",
        "Faits, chiffres et citations vérifiés avant la mise en ligne",
        "Titles, meta descriptions et textes alternatifs relus un par un",
        "L'usage de l'automatisation indiqué quand le lecteur peut s'y attendre",
      ],
      exercise: "Vous réécrivez une page que l'audit a classée « à réécrire » et vous la comparez à sa version précédente.",
    },
    {
      day: 2, title: "Module 7 · Régler sa présence dans les moteurs génératifs", duration: '2h',
      description: "Décider qui lit vos pages et mesurer ce qui peut l'être.",
      items: [
        "ClaudeBot, Claude-User, Claude-SearchBot : trois robots, trois décisions",
        "robots.txt par sous-domaine, Crawl-delay, limites d'un blocage par adresse IP",
        "Aperçus IA et Mode IA de Google : indexation, extrait, rapport Performances",
        "Lecture d'une réponse de Claude : sources citées et pages du site absentes",
      ],
      exercise: "Vous relisez les règles de votre robots.txt qui concernent Anthropic et vous rédigez la décision à faire valider.",
    },
    {
      day: 2, title: "Module 8 · Organiser la production de l'équipe", duration: '1h30',
      description: "Fixer les étapes, les contrôles et les données autorisées.",
      items: [
        "Fichiers d'un client d'agence : Team ou Enterprise, sans entraînement par défaut",
        "Relecture de fond avant publication, avec un responsable nommé",
        "Grille d'audit rejouée après chaque mise en ligne importante",
        "Calendrier de suivi dans la Search Console, page par page",
      ],
      exercise: "Vous fixez le circuit de validation d'un article, du brief à la mise en ligne, et qui signe chaque étape.",
    },
  ],
  objectives: [
    "Le participant sait exporter le texte de son site et vérifier que Claude a lu toutes les URL.",
    "Le participant sait identifier les pages qui répondent à la même question et confirmer le diagnostic dans la Search Console.",
    "Le participant sait évaluer une page avec les questions de Google et justifier son jugement par une citation.",
    "Le participant sait tirer d'une recherche approfondie un brief enrichi d'éléments propres à son entreprise.",
    "Le participant sait créer une compétence de réécriture conforme à la charte du site et la diffuser à l'équipe.",
    "Le participant sait régler ClaudeBot, Claude-User et Claude-SearchBot dans le robots.txt selon l'objectif fixé.",
  ],
  faq: [
    { q: "Claude peut-il analyser notre site en entier, et pas seulement page par page ?", a: "Oui, si vous lui donnez le texte. Claude peut ouvrir une page dont vous fournissez l'adresse, mais l'export de votre crawler reste le moyen sûr de lui confier tout le site. Anthropic évalue à quelque 500 pages le texte que contiennent 200 000 tokens : le million de tokens des offres payantes laisse de la marge pour un site de plusieurs centaines de pages courtes. Faites annoncer le nombre d'URL lues avant toute analyse." },
    { q: "Une page rédigée avec Claude peut-elle se classer dans Google ?", a: "Google évalue ce que la page apporte au lecteur plutôt que la manière dont elle a été produite. Sa documentation du 1er octobre 2026 voit dans l'IA une aide pour explorer un sujet et structurer un contenu original, et range parmi les abus les pages produites en masse qui n'apportent rien. Aucun classement ne se garantit : la formation apprend à écrire des pages qui contiennent ce que les concurrents ne disent pas, puis à suivre leur effet." },
    { q: "Faut-il laisser passer les robots d'Anthropic ?", a: "Ils se règlent séparément. ClaudeBot sert l'entraînement, Claude-SearchBot la recherche de Claude, Claude-User les pages qu'un utilisateur demande. D'après Anthropic, bloquer les deux derniers peut réduire vos chances d'apparaître dans les réponses de Claude. Vous pouvez donc bloquer ClaudeBot seul et garder les deux autres." },
    { q: "Claude peut-il travailler avec nos données Semrush ou Search Console ?", a: "Semrush publie dans l'annuaire de Claude un connecteur qui interroge, depuis la conversation, ses données de mots-clés, de domaines et de liens avec votre compte. Pour la Search Console, nous partons des exports, que Claude analyse par du code. Dans les deux cas, la consigne interdit tout chiffre qui ne vient pas de ces sources." },
    { q: "Quelle offre de Claude choisir pour une équipe SEO ou une agence ?", a: "L'offre Team suffit en général : projets partagés, compétences diffusées dans l'organisation, et vos contenus restent hors de l'entraînement par défaut. La recherche approfondie et Cowork demandent de toute façon une offre payante. Une agence vérifie aussi ce que son contrat avec chaque client l'autorise à faire de ses exports." },
    { q: "Doit-on dire à nos lecteurs qu'un article est passé par Claude ?", a: "Google recommande de dire comment le contenu a été fabriqué quand un lecteur peut raisonnablement se poser la question, en particulier si l'automatisation a fourni l'essentiel du texte. La forme reste libre, pourvu qu'elle ait du sens pour votre public : une note sur la méthode de rédaction et de vérification, par exemple. La formation vous aide à l'écrire pour vos propres formats." },
    { q: "Les exercices partent-ils de notre site ?", a: "Oui. Ils s'appuient sur l'export de votre site, vos fichiers de la Search Console et votre calendrier éditorial. Une agence travaille sur un site dont son contrat lui permet de confier les données. Prévoyez un compte Claude payant par personne ; les deux journées se déroulent en présentiel ou en ligne." },
    { q: "Quel budget prévoir, et quelle aide de l'OPCO attendre ?", a: "Le prix se calcule à la journée : 1 980 € HT, pour une équipe intra de douze au maximum comme pour un consultant seul. Masteria détenant la certification Qualiopi, votre OPCO peut prendre la session en charge, dans les limites que fixe votre branche. Nous vous remettons le programme et la convention avant le dépôt de la demande." },
  ],
  tarifs: {
    titre: "Le prix d'une session SEO de deux jours, et ce qu'il comprend",
    paras: [
      "Avant la session, nous récupérons l'export texte de votre site et un extrait de la Search Console, nous les lisons et nous préparons la grille d'audit ainsi que deux briefs d'exemple sur vos sujets. La session elle-même, les supports, la compétence de réécriture que vous emportez et l'évaluation finale entrent dans le même prix.",
      "Pour six personnes (une responsable SEO, trois rédactrices et deux consultants), la session intra de deux jours revient à 3 960 € HT, ce qui fait 660 € HT par participant. Un consultant seul suit le même programme à titre individuel, pour 1 980 € HT par jour. L'OPCO de votre entreprise examine la demande selon les critères de sa branche ; elle se dépose avant le premier jour, et nous fournissons les pièces nécessaires.",
    ],
  },
  apres: {
    titre: "Ensuite : un agent d'audit éditorial branché sur vos exports",
    texte: "Masteria peut alors développer un agent qui reprend chaque mois l'export de votre crawler et celui de la Search Console, rejoue la grille d'audit construite pendant la formation et signale les nouvelles pages qui doublonnent avec l'existant. Il produit un classeur et une note que votre équipe relit avant toute décision. Le développement part de votre compétence d'audit et de vos règles éditoriales ; le cadrage fixe les sources, la fréquence et la personne qui arbitre les fusions.",
  },
  cta: {
    milieu: "Envoyez-nous l'adresse de votre site : nous vous dirons quel export préparer pour la session.",
    fin: {
      titre: "Construisons l'audit de votre site pendant la formation",
      texte: "Indiquez la taille du site, vos outils SEO et l'échéance de votre prochaine refonte. Nous vous répondons avec un programme et la liste des fichiers à réunir.",
    },
  },
  liensAssocies: [
    { label: "Audit GEO : savoir si les moteurs génératifs citent votre marque", href: '/audit-geo-ia' },
    { label: "Audit SEO assisté par l'IA, avec ses correctifs priorisés", href: '/audit-seo-ia' },
    { label: "Claude ou ChatGPT : le comparatif détaillé pour l'entreprise", href: '/chatgpt-vs-claude' },
    { label: "Formation Claude pour le marketing et les contenus", href: '/formation-claude-marketing' },
  ],
  avisPriorite: ['Claude', 'SEO', 'r[ée]f[ée]rencement', 'site'],
  sources: [
    { name: "Anthropic Privacy Center : les trois robots d'Anthropic et leur blocage (7 avril 2026)", url: "https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" },
    { name: "Anthropic Help Center : mode RAG des projets, réservé aux offres payantes", url: "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects" },
    { name: "Anthropic Help Center : la recherche approfondie (Research)", url: "https://support.claude.com/en/articles/11088861-using-research-on-claude" },
    { name: "Google, documentation Search Central : les contenus produits avec l'IA générative (1er octobre 2026)", url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" },
    { name: "Google, documentation Search Central : contenus utiles et fiables, questions d'autoévaluation", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    { name: "Google, documentation Search Central : politique contre le spam (version du 28 août 2026)", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { name: "Google, documentation Search Central : Aperçus IA, Mode IA et votre site", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { name: "Claude : le connecteur Semrush dans l'annuaire des connecteurs", url: "https://claude.com/connectors/semrush" },
  ],
}
