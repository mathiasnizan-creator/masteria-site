// Contenu propre à /formation-chatgpt-seo (guide terrain). Rendu par SpokePage.
// Fonctions ChatGPT vérifiées sur help.openai.com et règles Google vérifiées sur developers.google.com / support.google.com le 28/09/2026.
export default {
  slug: 'formation-chatgpt-seo',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation ChatGPT SEO : analyse de vos exports Search Console, recherche approfondie ciblée, compétences partagées, trafic venu de ChatGPT. Qualiopi, OPCO.",
  intro: "Un référenceur passe ses semaines entre des exports, des briefs et des pages à reprendre. ChatGPT accélère ce travail à une condition : lui donner vos données et des règles écrites. Cette formation part de vos exports Search Console et de vos pages existantes. Vos équipes apprennent à produire des pages utiles au lecteur, celles que Google garde dans son index.",
  guide: {
    kicker: "Guide terrain",
    h2: "ChatGPT fait gagner du temps au SEO quand il travaille sur vos données",
    lead: "La tentation est connue : demander à ChatGPT cinquante articles et les publier. Google a écrit noir sur blanc qu'il traite ce schéma comme du spam, quel que soit l'outil. Pour une équipe SEO, ChatGPT rapporte surtout quand il travaille sur vos données : croiser des exports que personne n'a le temps de lire, tenir une règle éditoriale sur des dizaines de pages, étudier des concurrents avec des sources que vous choisissez. Et ChatGPT est devenu lui-même un canal d'acquisition, qui se règle dans le fichier robots.txt et se mesure dans Google Analytics.",
    sections: [
      {
        h3: "Google vise les pages en série qui n'apportent rien",
        paras: [
          "La politique anti-spam de Google, mise à jour le 28 août 2026, définit l'abus de contenu à grande échelle comme la génération de nombreuses pages dans le but principal de manipuler le classement. Le premier exemple cité est l'usage de l'IA générative pour produire des pages sans valeur pour l'utilisateur. Son guide sur les contenus générés par IA, révisé en décembre 2025, demande de soigner les titres, meta descriptions et données structurées produits par automatisation.",
          "Le symptôme se lit dans Search Console. Des pages construites sur le même gabarit, qui ne diffèrent que par un nom de ville ou de métier, finissent souvent dans l'état « Explorée, actuellement non indexée ». Google les a lues et a jugé qu'elles doublaient une page qu'il connaît déjà. La règle qu'on applique en formation : chaque page doit contenir au moins un élément introuvable ailleurs sur le site, qu'il s'agisse d'une donnée propre, d'un cas travaillé ou d'un avis d'expert signé.",
        ],
      },
      {
        h3: "Vos exports valent plus que n'importe quel prompt",
        paras: [
          "L'analyse de données de ChatGPT lit un CSV ou un classeur jusqu'à environ 50 Mo, calcule, regroupe et trace des graphiques. Elle sert à croiser ce que vos outils séparent : le rapport Performances, les pages non indexées, un crawl. Deux limites de Google changent la méthode. L'export du rapport Performances depuis l'interface s'arrête à 1 000 lignes ; au-delà, l'API Search Console donne jusqu'à 50 000 lignes par jour et par type de recherche. Et depuis le 31 août 2026, Search Console propose à tous les sites un « Rapport sur les performances dans l'IA générative » qui compte les impressions dans les Aperçus IA et le Mode IA, par page, pays, date et appareil.",
        ],
      },
      {
        h3: "Un projet par site, une compétence par livrable, et plus de nouveau GPT",
        paras: [
          "Un projet ChatGPT se crée avec « Nouveau projet » dans la barre latérale. Il reçoit jusqu'à 40 fichiers sur les offres Business, Enterprise et Edu, et ses instructions se règlent dans « Paramètres du projet ». Réglez la mémoire sur « Mémoire limitée au projet » : les conversations du projet ne lisent plus le reste de votre historique. Pour une agence, la charte d'un client ne déteint plus sur celle d'un autre. Un projet partagé passe automatiquement en mémoire limitée.",
          "Les tâches répétées deviennent des compétences : Plugins, onglet Compétences, « Créer », puis « Créer avec le chat ». ChatGPT pose ses questions et produit la compétence, que vous partagez ensuite avec l'espace de travail. Les compétences sont ouvertes aux offres Business, Enterprise, Healthcare et Edu. OpenAI retirera les GPTs personnalisés le 11 décembre 2026. Lors de la migration, leurs instructions deviennent une compétence dans un plugin, et les actions personnalisées ne suivent pas.",
        ],
      },
      {
        h3: "La recherche approfondie étudie les concurrents que vous désignez",
        paras: [
          "La recherche approfondie se lance depuis le menu des outils (+) ou avec /Deepresearch. Dans « Sites > Gérer les sites », vous limitez la recherche à une liste de domaines, ou vous choisissez « Donner la priorité à ces sites » tout en gardant le reste du web. Vous corrigez le plan de recherche avant le lancement, puis vous téléchargez le rapport sourcé en Word, PDF ou Markdown.",
          "Gardez en tête ce qu'elle ne fait pas. Elle lit des pages web publiques et ne restitue aucune page de résultats Google. Les positions, les volumes de recherche et les backlinks restent l'affaire de votre outil SEO. Donnez-lui ces chiffres en fichier, elle les commentera.",
        ],
      },
      {
        h3: "ChatGPT Search se règle dans le robots.txt et se mesure dans Analytics",
        paras: [
          "OpenAI distingue deux robots. OAI-SearchBot alimente les réponses et les citations de ChatGPT Search : s'il est bloqué, vos pages ne peuvent pas y être résumées ni citées. GPTBot collecte des contenus pour l'entraînement ; le bloquer n'a pas d'effet sur votre présence dans la recherche. Beaucoup de sites bloquent tous les robots sauf Googlebot et se ferment ce canal par accident.",
          "ChatGPT ajoute le paramètre utm_source=chatgpt.com aux liens qu'il envoie vers votre site. Un segment Google Analytics sur ce paramètre mesure les visites venues de ChatGPT, page par page.",
        ],
      },
    ],
    table: {
      caption: "Tâches SEO courantes : la fonction ChatGPT qui convient et le point à surveiller",
      headers: ["Tâche", "Fonction ChatGPT", "Vigilance"],
      rows: [
        ["Repérer les pages qui perdent des clics", "Analyse de données sur l'export Performances par page", "Export limité à 1 000 lignes ; passer par l'API pour un gros site"],
        ["Suivre la présence dans les Aperçus IA", "Import du rapport « Performances dans l'IA générative » et comparaison avec le rapport classique", "Le rapport compte des impressions ; il ne mesure pas un trafic"],
        ["Rédiger un brief pour un rédacteur", "Compétence « brief » partagée dans l'espace de travail", "Chiffres et citations à vérifier ; l'entretien avec l'expert reste à faire"],
        ["Étudier trois concurrents", "Recherche approfondie limitée à leurs domaines", "Ni volumes ni positions : ils viennent de votre outil SEO"],
        ["Réécrire des titles et meta descriptions en lot", "ChatGPT pour Excel (Business) ou classeur importé", "Longueurs et doublons à recontrôler dans votre crawler"],
        ["Illustrer un article", "Génération d'images dans ChatGPT", "En e-commerce, Google demande de marquer les images générées (métadonnées IPTC)"],
        ["Mesurer le trafic venu de ChatGPT", "Aucune : Google Analytics filtré sur utm_source=chatgpt.com", "OAI-SearchBot autorisé dans le robots.txt"],
      ],
    },
    cas: {
      h3: "Cas pratique : comprendre pourquoi Google explore une rubrique sans l'indexer",
      contexte: "Prenons une responsable SEO d'une entreprise de services B2B. Son site compte une rubrique de pages « service + ville » construites sur le même modèle, et Search Console en classe une bonne partie en « Explorée, actuellement non indexée ». Elle veut savoir quelles pages se ressemblent trop, et quoi écrire pour les distinguer.",
      etapes: [
        "Dans Search Console, rapport Pages, exporter la liste des URL « Explorée, actuellement non indexée ». Exporter aussi le rapport Performances par page sur trois mois.",
        "Avec le crawler de l'équipe, extraire le texte principal de chaque page de la rubrique dans un tableau à deux colonnes : URL et contenu.",
        "Créer un projet « Audit rubrique villes », régler la mémoire sur « Mémoire limitée au projet », importer les trois fichiers.",
        "Lancer le prompt ci-dessous avec un modèle de raisonnement (Thinking), puis ouvrir côte à côte les trois paires de pages les plus proches pour vérifier le calcul.",
        "Demander à ChatGPT de transformer la méthode en compétence (Plugins, onglet Compétences) pour relancer le même audit chaque trimestre.",
      ],
      prompt: "Tu m'aides à auditer une rubrique de notre site que Google explore mais n'indexe pas.\n\nLe projet contient trois fichiers. Le premier liste les URL que Search Console classe en « Explorée, actuellement non indexée ». Le deuxième est l'export du rapport Performances par page sur trois mois, avec clics et impressions. Le troisième contient le texte principal de chaque page de la rubrique, une ligne par URL.\n\nFais le travail dans cet ordre.\nD'abord, calcule avec l'analyse de données la similarité entre chaque page et sa voisine la plus proche, en découpant les textes en séquences de cinq mots. Donne pour chaque URL le pourcentage de séquences partagées et l'URL voisine.\nEnsuite, repère les paragraphes qui reviennent mot pour mot sur plus de cinq pages et cite-les une fois chacun.\nPuis, pour chaque page, liste ce qu'elle contient de propre : noms, chiffres, exemples, informations locales. Si elle n'a rien de propre, écris « rien ».\nEnfin, classe les pages en trois groupes : à fusionner avec une autre, à réécrire, à laisser en l'état. Justifie chaque choix en une phrase qui cite les clics et impressions du deuxième fichier.\n\nRends un tableau par groupe, puis un paragraphe sur les trois éléments qu'il faudrait ajouter en priorité aux pages à réécrire.\nN'invente aucun volume de recherche et aucune donnée absente des fichiers. Si un calcul te paraît fragile, dis-le.",
      resultat: "Vous obtenez un tableau de similarité par page, la liste des paragraphes dupliqués et un classement fusion, réécriture ou statu quo, adossé aux clics mesurés. Vérifiez le calcul sur trois paires en lisant les pages : la mesure par séquences de mots est une approximation, et Google ne publie aucun seuil. La décision de fusionner reste la vôtre, avec ses redirections et son maillage à reprendre.",
    },
    pieges: [
      { titre: "Des volumes de recherche sortis de nulle part", texte: "Demandez à ChatGPT le volume d'un mot-clé et il peut répondre un chiffre plausible. Ce chiffre ne vient pas des données de Google. Les volumes entrent dans la conversation par un export de votre outil, et le prompt interdit d'en produire d'autres." },
      { titre: "Le brief qui recopie les dix premiers résultats", texte: "Une synthèse du top 10 donne la moyenne du top 10, que Google possède déjà. Demandez ce qui manque aux pages classées et ajoutez ce que seule votre entreprise sait : chiffres internes, questions des clients." },
      { titre: "Le GPT SEO construit en 2024", texte: "Les GPTs personnalisés seront retirés le 11 décembre 2026. Migrez-les vers un plugin depuis « Mes GPTs », testez le résultat sur des demandes connues et reconstruisez à part les actions personnalisées." },
      { titre: "Un robots.txt qui ferme ChatGPT Search", texte: "Une règle « Disallow » générale suivie d'une exception pour Googlebot bloque aussi OAI-SearchBot. Relisez le fichier avant de conclure que ChatGPT ignore votre site." },
      { titre: "Les exports d'un client dans un compte personnel", texte: "Sur les offres Business, Enterprise et Edu, OpenAI n'utilise pas les contenus pour entraîner ses modèles par défaut. Sur un compte gratuit ou Plus, c'est le réglage « Améliorer le modèle pour tous » qui décide. Une agence travaille les données de ses clients dans un espace Business." },
    ],
  },
  // Publics : 3 profils propres à ChatGPT × SEO
  audience: [
    { title: "Responsables SEO et acquisition", desc: "Vous pilotez un site, ses exports Search Console et ses priorités de réécriture. Vous apprenez à faire parler vos données dans ChatGPT et à tenir une règle éditoriale sur des dizaines de pages." },
    { title: "Rédacteurs et chargés de contenu", desc: "Vous écrivez et reprenez des pages à partir de briefs. Vous travaillez dans un projet qui contient la charte, les pages de référence et les données propres à l'entreprise." },
    { title: "Consultants SEO et agences", desc: "Vous gérez plusieurs sites clients. Vous apprenez à cloisonner chaque client dans un projet en mémoire limitée au projet et à partager vos méthodes sous forme de compétences." },
  ],
  // Cas d'usage : 6 cartes
  useCases: [
    { icon: '📊', title: "Analyse des exports Search Console", desc: "Croisez le rapport Performances, la liste des pages non indexées et le rapport sur l'IA générative pour repérer les pages qui perdent des clics." },
    { icon: '🔍', title: "Pages explorées mais non indexées", desc: "Mesurez la part de texte que vos pages partagent avec leurs voisines et décidez lesquelles fusionner, réécrire ou garder." },
    { icon: '📋', title: "Briefs appuyés sur vos concurrents", desc: "Limitez la recherche approfondie aux domaines concurrents, relevez ce qui leur manque et ajoutez vos données internes au brief." },
    { icon: '🏷️', title: "Titles et meta descriptions en lot", desc: "Réécrivez les balises d'une rubrique dans un classeur, puis recontrôlez longueurs et doublons dans votre crawler." },
    { icon: '✍️', title: "Réécriture de pages existantes", desc: "Reprenez une page faible avec les règles du projet, des éléments que seule votre entreprise possède et une explication honnête sur la façon dont le contenu a été produit." },
    { icon: '🔗', title: "Visibilité dans ChatGPT Search", desc: "Vérifiez que OAI-SearchBot peut lire vos pages et suivez dans Google Analytics les visites marquées utm_source=chatgpt.com." },
  ],
  // Programme : 8 modules
  modules: [
    { day: 1, title: "Module 1 · Faire parler vos exports Search Console", duration: '1h30', description: "Importer vos données dans l'analyse de données de ChatGPT et obtenir des chiffres vérifiables.", items: ["Exporter le rapport Performances par page et par requête, et connaître la limite de 1 000 lignes de l'interface", "Passer par l'API Search Console quand le site dépasse cette limite", "Croiser clics, impressions et positions avec des graphiques interactifs", "Demander le détail du calcul et le recontrôler sur trois lignes"], exercise: "Sur l'export Performances de votre site pour les trois derniers mois, isoler les vingt pages qui perdent le plus de clics et formuler une hypothèse pour chacune." },
    { day: 1, title: "Module 2 · Repérer les pages que Google laisse de côté", duration: '2h', description: "Comprendre l'abus de contenu à grande échelle et diagnostiquer une rubrique trop uniforme.", items: ["Lire la politique anti-spam de Google et son guide sur les contenus générés par IA", "Exporter les URL « Explorée, actuellement non indexée » depuis le rapport Pages", "Mesurer la similarité entre pages voisines à partir de leur texte extrait par le crawler", "Classer les pages en trois groupes : fusionner, réécrire, garder"], exercise: "Diagnostiquer une rubrique de votre site construite sur un même modèle et produire le tableau fusion, réécriture ou statu quo, justifié par les clics." },
    { day: 1, title: "Module 3 · Construire un brief sur ce qui manque aux concurrents", duration: '2h', description: "Utiliser la recherche approfondie avec des sources choisies, puis enrichir le brief avec les données de l'entreprise.", items: ["Lancer une recherche approfondie et limiter les sources dans « Sites > Gérer les sites »", "Corriger le plan de recherche avant le lancement", "Relever les questions que les pages concurrentes laissent sans réponse", "Télécharger le rapport en Word et le transformer en brief pour un rédacteur"], exercise: "Produire le brief d'une page de votre site face à trois concurrents que vous désignez, avec au moins deux éléments internes introuvables chez eux." },
    { day: 1, title: "Module 4 · Installer le projet SEO de votre site", duration: '1h30', description: "Poser dans un projet ChatGPT la charte, les pages de référence et les règles de l'équipe.", items: ["Créer le projet avec « Nouveau projet » et régler « Mémoire limitée au projet »", "Rédiger les instructions dans « Paramètres du projet » : ton, structure, mots interdits", "Ajouter des sources : fichiers de référence et liens Google Drive", "Partager le projet avec l'accès en discussion ou en modification selon le rôle"], exercise: "Monter le projet de votre site avec votre charte éditoriale, cinq pages qui font référence et la liste des affirmations que l'équipe s'interdit." },
    { day: 2, title: "Module 5 · Réécrire titles, meta descriptions et données structurées", duration: '1h30', description: "Traiter une rubrique entière dans un classeur, en gardant la main sur la qualité.", items: ["Travailler dans ChatGPT pour Excel sur ChatGPT Business, ou sur un classeur importé", "Donner les règles de longueur, de marque et de mot-clé principal page par page", "Faire signaler les doublons et les balises trop proches entre pages", "Valider le balisage produit avec le test des résultats enrichis de Google"], exercise: "Réécrire les titles et meta descriptions d'une rubrique de votre site, puis vérifier le résultat dans votre crawler." },
    { day: 2, title: "Module 6 · Réécrire une page qui mérite son index", duration: '2h', description: "Reprendre une page faible avec les règles du projet et des éléments propres à l'entreprise.", items: ["Partir du diagnostic du module 2 et des questions sans réponse du module 3", "Faire proposer un plan, puis écrire section par section avec vos données", "Illustrer avec la génération d'images de ChatGPT et rédiger des textes alternatifs utiles", "Marquer les images générées dans les fiches produits, comme Google le demande en e-commerce"], exercise: "Réécrire une page de votre site classée « Explorée, actuellement non indexée » et la comparer à sa voisine la plus proche." },
    { day: 2, title: "Module 7 · Transformer vos méthodes en compétences partagées", duration: '2h', description: "Rendre les audits et les briefs reproductibles pour toute l'équipe.", items: ["Créer une compétence avec « Créer avec le chat » dans Plugins, onglet Compétences", "La partager avec l'espace de travail et la tester sur une demande connue", "Migrer un GPT existant vers un plugin avant le retrait prévu le 11 décembre 2026", "Programmer un audit récurrent avec les tâches planifiées de ChatGPT Work"], exercise: "Transformer votre méthode de brief ou d'audit en compétence, la partager et la faire tester par un collègue sur une autre page de votre site." },
    { day: 2, title: "Module 8 · Ouvrir le canal ChatGPT Search et fixer les règles de l'équipe", duration: '1h30', description: "Régler l'accès des robots d'OpenAI, mesurer le trafic et écrire la charte d'usage.", items: ["Distinguer OAI-SearchBot, qui sert la recherche, et GPTBot, qui collecte pour l'entraînement", "Relire le robots.txt et utiliser noindex pour les pages à tenir à l'écart", "Créer dans Google Analytics un segment sur utm_source=chatgpt.com", "Écrire les règles : aucun volume de recherche inventé, relecture avant publication, données clients dans l'espace Business"], exercise: "Auditer le robots.txt de votre site, créer le segment de trafic ChatGPT et rédiger la charte d'usage de l'IA de votre équipe SEO." },
  ],
  // Objectifs : observables et évaluables
  objectives: [
    "Analyser un export Search Console dans ChatGPT et justifier chaque conclusion par une ligne du fichier",
    "Diagnostiquer une rubrique de pages trop semblables et classer chaque page entre fusion, réécriture et statu quo",
    "Rédiger un brief à partir d'une recherche approfondie limitée à des domaines concurrents choisis",
    "Paramétrer un projet ChatGPT de site avec instructions, sources et mémoire limitée au projet",
    "Créer et partager une compétence qui reproduit une méthode d'audit ou de brief de l'équipe",
    "Vérifier l'accès d'OAI-SearchBot au site et mesurer le trafic venu de ChatGPT dans Google Analytics",
  ],
  faq: [
    { q: "Google pénalise-t-il un contenu rédigé avec ChatGPT ?", a: "Google juge la valeur de la page pour le lecteur, quel que soit l'outil qui l'a produite. Sa politique anti-spam vise la génération de nombreuses pages dans le but principal de manipuler le classement. Une page relue, enrichie de données propres et utile à son lecteur n'entre pas dans cette catégorie. Google recommande même d'expliquer comment un contenu a été fabriqué quand l'information aide le lecteur." },
    { q: "ChatGPT peut-il lire directement nos données Search Console ?", a: "Nous travaillons à partir des exports : le rapport Performances, la liste des pages indexées ou non, le nouveau rapport sur l'IA générative. Un fichier Google Sheets rangé dans Google Drive peut aussi devenir une source du projet, par un lien collé dans « Ajouter une source ». Pour un gros site, l'API Search Console alimente un tableur qui passe ensuite dans ChatGPT." },
    { q: "Comment apparaître dans les réponses de ChatGPT Search ?", a: "Toute page publique peut y apparaître si OAI-SearchBot a le droit de la lire. Vérifiez votre robots.txt, puis suivez les visites grâce au paramètre utm_source=chatgpt.com que ChatGPT ajoute à ses liens. Pour qu'une page n'y figure pas du tout, OpenAI recommande la balise noindex, que son robot doit pouvoir lire." },
    { q: "Faut-il bloquer GPTBot ?", a: "C'est une décision indépendante de votre visibilité. GPTBot collecte des contenus pour l'entraînement des modèles, OAI-SearchBot sert la recherche. Vous pouvez interdire le premier et autoriser le second. La formation aborde ce choix avec les critères juridiques et commerciaux de votre entreprise." },
    { q: "Que deviennent les GPTs SEO que nous avons créés ?", a: "OpenAI prévoit leur retrait le 11 décembre 2026 et une migration vers les plugins. Les instructions du GPT deviennent une compétence, ses fichiers de connaissance sont copiés, ses apps connectées suivent. Les actions personnalisées ne sont pas transférées. La migration part de la dernière version publiée du GPT." },
    { q: "ChatGPT remplace-t-il Semrush, Ahrefs ou notre crawler ?", a: "Non. ChatGPT ne dispose ni des volumes de recherche, ni des positions, ni de l'index de liens de ces outils. Il analyse leurs exports, croise des sources et rédige. La formation montre comment faire entrer ces données dans un projet et comment empêcher ChatGPT de combler les trous par des chiffres inventés." },
    { q: "Quelle offre ChatGPT choisir pour une équipe SEO ?", a: "ChatGPT Business couvre l'essentiel : projets partagés jusqu'à 100 collaborateurs et 40 fichiers, compétences partageables, recherche approfondie, contenus exclus de l'entraînement par défaut. Les équipes qui gèrent plusieurs clients ouvrent un projet par client en mémoire limitée au projet. Nous vérifions avec votre administrateur, avant la session, que les compétences et le partage de projets sont activés." },
    { q: "Comment financer cette formation pour notre équipe SEO ?", a: "Masteria est certifié Qualiopi : la formation peut être prise en charge par l'OPCO de votre entreprise, selon sa convention collective et ses fonds disponibles. En intra, la journée est facturée 1 980 € HT pour un groupe de 12 participants au plus. Nous fournissons le programme et la convention à joindre à la demande, déposée avant le début de la session." },
  ],
  sources: [
    { name: "Google Search Central : règles anti-spam, abus de contenu à grande échelle (mise à jour du 28 août 2026)", url: "https://developers.google.com/search/docs/essentials/spam-policies?hl=fr" },
    { name: "Google Search Central : utiliser des contenus générés par IA (décembre 2025)", url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content?hl=fr" },
    { name: "Aide Search Console : exporter les données d'un rapport (limite de 1 000 lignes)", url: "https://support.google.com/webmasters/answer/12919797?hl=fr" },
    { name: "Aide Search Console : rapport sur les performances dans l'IA générative", url: "https://support.google.com/webmasters/answer/16984139?hl=fr" },
    { name: "OpenAI Help Center : projets dans ChatGPT", url: "https://help.openai.com/fr-fr/articles/10169521-projects-in-chatgpt" },
    { name: "OpenAI Help Center : les compétences dans ChatGPT", url: "https://help.openai.com/fr-fr/articles/20001066-skills-in-chatgpt" },
    { name: "OpenAI Help Center : recherche approfondie dans ChatGPT", url: "https://help.openai.com/fr-fr/articles/10500283-deep-research-in-chatgpt" },
    { name: "OpenAI Help Center : retrait et migration des GPTs personnalisés", url: "https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq" },
    { name: "OpenAI Help Center : FAQ éditeurs et développeurs (OAI-SearchBot, utm_source)", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
    { name: "OpenAI : présentation des robots d'exploration", url: "https://developers.openai.com/api/docs/bots" },
    { name: "OpenAI Help Center : analyse de données avec ChatGPT", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
    { name: "OpenAI Help Center : notes de version ChatGPT Business (ChatGPT pour Word, Excel et PowerPoint)", url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes" },
  ],
}
