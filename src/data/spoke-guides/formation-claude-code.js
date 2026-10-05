// Contenu propre à /formation-claude-code (guide terrain, page propre). Rendu par SpokePage.
// Chaque fonction et chaque nom de commande vérifiés le 5 octobre 2026 sur code.claude.com/docs ;
// fait métier : Anthropic Economic Index (28 avril 2025) ; sécurité : guide ANSSI et BSI (septembre 2024).
export default {
  slug: 'formation-claude-code',
  updatedAt: '2026-10-05',
  updatedLabel: 'Programme à jour · octobre 2026',
  pagePropre: true,
  metaDesc: "Formation Claude Code pour développeurs et tech leads : CLAUDE.md, modes de permission, plan, tests d'abord, hooks, MCP, GitHub Actions et coûts.",
  prerequis: "Pratique quotidienne du développement, du terminal et de Git ; un dépôt de travail, le vôtre ou un dépôt d'entraînement fourni ; un compte Claude Pro, Max, Team ou Enterprise, ou une clé d'API de la console Claude",
  resume: "La formation Claude Code de Masteria prépare en deux jours, soit 14 heures, développeurs, tech leads et CTO à déléguer des tâches à l'agent de code d'Anthropic sur leur propre dépôt. Elle accueille en intra une équipe de 12 développeurs au plus, ou une seule personne en individuel, sur site comme à distance. Comptez 1 980 € HT par journée ; la certification Qualiopi ouvre une demande de financement auprès de l'OPCO compétent pour votre secteur.",
  enBref: [
    { label: 'Formation', value: "Claude Code sur votre dépôt : conventions, permissions, plan, tests, automatisation et maîtrise des coûts" },
    { label: 'Durée', value: "Deux jours de sept heures qui alternent démonstration sur un dépôt et tâche réelle livrée par chaque participant" },
    { label: 'Formats', value: "Intra pour une équipe de 12 développeurs au plus, ou individuel ; en présentiel ou à distance, terminal et éditeur ouverts" },
    { label: 'Tarif', value: "Une journée : 1 980 € HT pour toute l'équipe, quel que soit l'effectif" },
    { label: 'Financement', value: "Masteria certifié Qualiopi ; prise en charge à solliciter auprès de l'OPCO dont dépend votre entreprise" },
    { label: 'Prérequis', value: "Terminal, Git et au moins un langage maîtrisés ; compte Claude Pro, Max, Team ou Enterprise, ou clé d'API" },
  ],
  intro: "Un développeur qui confie une tâche à Claude Code veut savoir deux choses : jusqu'où l'agent peut aller seul dans son dépôt, et comment vérifier ce qu'il y a fait. Claude Code lit le code, modifie plusieurs fichiers, lance des commandes et prépare les commits, depuis le terminal, VS Code, JetBrains, l'application de bureau ou un pipeline d'intégration continue, la chaîne qui compile et teste chaque modification. Ce guide décrit la configuration qui rend ce travail vérifiable, des conventions de CLAUDE.md jusqu'aux limites d'usage de chaque offre, avec des fonctions contrôlées dans la documentation d'Anthropic au 5 octobre 2026.",
  guide: {
    kicker: 'Guide terrain',
    h2: "Claude Code agit dans votre dépôt : sa configuration décide de ce qu'il fait seul et de ce qu'il doit prouver",
    lead: "Claude Code travaille en boucle : il lit, agit, observe le résultat et recommence jusqu'à ce que la tâche lui paraisse terminée. Anthropic a chiffré l'écart avec la conversation classique. Dans son Economic Index du 28 avril 2025, fondé sur des échanges collectés entre le 6 et le 13 avril 2025 sans précision du modèle, l'automatisation, où Claude exécute lui-même la tâche, concernait 79 % des sessions Claude Code et 49 % des échanges sur Claude.ai, et les allers-retours où le développeur renvoie les erreurs à l'agent étaient presque deux fois plus fréquents dans Claude Code (35,8 % contre 21,3 %). Le contrôle se déplace donc de l'écriture vers le cadrage : ce que l'agent sait, ce qu'il peut faire sans demander, et la preuve qu'il doit fournir.",
    sections: [
      {
        h3: "CLAUDE.md, les règles de chemin et les compétences portent ce que l'agent doit savoir",
        paras: [
          "CLAUDE.md est un fichier Markdown que Claude Code charge au début de chaque séance. Celui du projet, à la racine ou dans le dossier .claude, se versionne avec le code ; CLAUDE.local.md garde vos préférences personnelles hors de Git ; ~/.claude/CLAUDE.md vaut pour tous vos projets, et la DSI peut déployer un fichier géré sur tous les postes. La commande /init en rédige une première version d'après le dépôt. Un dépôt qui ne contient qu'un AGENTS.md, le fichier lu par d'autres agents de code, est pris en charge tel quel.",
          "Anthropic conseille de rester sous 200 lignes : un fichier plus long consomme du contexte et fait baisser le respect des consignes. Gardez les commandes que Claude ne peut pas deviner, les règles de style qui s'écartent des usages du langage, les conventions de branches et de pull requests (les demandes de fusion d'une branche), les pièges de l'environnement. Ajoutez une ligne quand Claude commet deux fois la même erreur. Les consignes propres à une partie du code vont dans .claude/rules/, avec un champ paths qui ne les charge qu'au contact des fichiers concernés.",
          "Une procédure en plusieurs étapes trouve mieux sa place dans une compétence : un sous-dossier de .claude/skills/ contenant un fichier SKILL.md, appelé par /nom ou chargé quand la demande correspond, et dont le corps n'entre dans le contexte qu'à l'usage. Pour une action à effets de bord, un déploiement par exemple, le champ disable-model-invocation réserve le déclenchement à un humain. Un plugin réunit en une unité installée par /plugin des compétences, des sous-agents et des hooks, décrits plus bas, ainsi que des serveurs MCP (le protocole ouvert qui relie l'agent à vos outils) ; ce qu'il exécute, il l'exécute avec vos droits.",
        ],
      },
      {
        h3: "Le mode de permission règle ce que Claude fait sans vous demander",
        paras: [
          "Six modes existent. En mode Manuel, de valeur technique default, Claude n'agit sans demander que pour lire. Le mode acceptEdits valide en plus les modifications de fichiers et les commandes de fichiers courantes dans le répertoire de travail. Le mode plan interdit toute modification tant que vous n'avez pas approuvé un plan. Le mode auto confie l'examen de chaque action à un second modèle, le classifieur, qui bloque ce qui paraît risqué. Le mode dontAsk n'exécute que les outils préapprouvés et refuse tout le reste, ce qui convient à l'intégration continue. Le mode bypassPermissions supprime les contrôles et ne se conçoit que dans un conteneur ou une machine virtuelle isolés. Pendant la séance, Maj+Tab fait passer d'un mode à l'autre.",
          "À partir de la version 2.1.283, le mode auto est le mode de départ des séances interactives dans le terminal et dans VS Code. Par défaut, son classifieur bloque notamment le téléchargement suivi de l'exécution de code, les déploiements et migrations de production, les push forcés, l'envoi de données sensibles vers l'extérieur et la fusion d'une pull request qu'aucun humain n'a approuvée. Anthropic l'écrit sans détour : ce mode réduit les demandes de permission sans garantir la sécurité. Un administrateur peut le retirer à toute l'équipe par le paramètre géré permissions.disableAutoMode.",
          "Les règles affinent ces modes. Une règle deny bloque un outil, une commande ou la lecture d'un fichier comme .env dans tous les modes, bypassPermissions compris ; une règle allow préapprouve une commande sûre, comme le lancement de la suite de tests. La commande /sandbox active un bac à sable qui restreint les fichiers et les hôtes réseau accessibles aux commandes Bash, sous macOS, Linux et WSL2.",
        ],
      },
      {
        h3: "Le plan approuvé précède la modification, le test qui échoue précède le correctif",
        paras: [
          "Anthropic recommande quatre temps : explorer, planifier, implémenter, puis valider par un commit. En mode plan, que l'on active par Maj+Tab ou par /plan, Claude lit les fichiers et rédige un plan sans toucher au code ; Ctrl+G ouvre ce plan dans votre éditeur pour le corriger avant de l'approuver. Le plan a un coût en temps : pour un changement qui se décrit en une phrase, la documentation conseille de s'en passer.",
          "Donnez à Claude une vérification qu'il peut lancer lui-même : une suite de tests, une compilation, un linter (l'outil qui signale les fautes de style et les erreurs simples). Pour un bogue, demandez d'abord un test qui reproduit l'échec, puis le correctif. Avant un refactoring, cette restructuration du code à comportement inchangé, faites écrire des tests de caractérisation, qui figent le comportement actuel du code sans le juger. Une séance peut écrire les tests et une autre, au contexte vierge, le code qui les fait passer : Anthropic décrit ce partage des rôles pour qu'un même agent ne se donne pas raison à lui-même.",
          "Un sous-agent est une instance de Claude dotée de son propre contexte, de ses outils et de ses instructions, déclarée dans .claude/agents/. Il explore ou relit sans encombrer la séance principale, à laquelle il ne renvoie qu'un résumé ; ses requêtes entament les mêmes limites d'usage. Un hook est une commande que Claude Code lance à un moment précis de son cycle : PreToolUse peut bloquer une action, PostToolUse lancer le formateur après chaque modification, Stop empêcher la fin du tour tant que les tests échouent. Les points de contrôle, rappelés par /rewind ou par deux appuis sur Échap, restaurent le code modifié par les outils d'édition, sans annuler les effets des commandes Bash : Git reste la sauvegarde de référence.",
        ],
      },
      {
        h3: "Hors du terminal, le mode non interactif, GitHub Actions et la revue prolongent l'agent",
        paras: [
          "La commande claude -p lance une tâche sans interface et rend le résultat en texte, en JSON ou en flux JSON. Combinée à --allowedTools et au mode dontAsk, elle n'emploie que les outils listés ; --max-turns borne le nombre de tours, et --bare ignore la configuration trouvée dans le dépôt pour obtenir le même comportement sur chaque machine. Cette dernière option compte : sans elle, une exécution -p lance les hooks déclarés dans .claude/settings.json et connecte les serveurs du fichier .mcp.json, sans le moindre dialogue de confiance.",
          "L'action GitHub claude-code-action s'installe par /install-github-app. Elle répond aux mentions @claude dans les tickets et les pull requests, ou exécute une consigne sur n'importe quel événement GitHub, y compris planifié. Par défaut, seul un utilisateur doté des droits d'écriture sur le dépôt peut la déclencher. La clé d'API ou le jeton d'abonnement se range dans les secrets GitHub, jamais dans le code ; pour une organisation, Anthropic préconise une clé d'API de la console plutôt qu'un jeton rattaché à l'abonnement d'une personne.",
          "La revue s'organise à deux niveaux. En local, /code-review relit le diff courant, c'est-à-dire les modifications en cours, et /security-review cherche les failles dans les changements de la branche. Sur Team et Enterprise, le service Code Review, en préversion de recherche, publie sur chaque pull request des remarques classées par gravité ; il n'approuve ni ne bloque rien, se règle par CLAUDE.md ou REVIEW.md et se facture à l'usage, en dehors de l'abonnement.",
          "Sur un abonnement, Claude Code puise dans la même enveloppe que la conversation : une fenêtre glissante de cinq heures, doublée de plafonds hebdomadaires. La commande /usage montre ce qui consomme, compétence par compétence et serveur par serveur. Le siège Premium de Team donne cinq fois l'usage du siège standard ; au-delà des limites, les crédits d'usage prennent le relais au tarif de l'API, tandis qu'une clé d'API se facture au token (le fragment de mot qui sert d'unité de compte), avec --max-budget-usd pour plafonner une exécution non interactive.",
        ],
      },
    ],
    table: {
      caption: "Les mécanismes de Claude Code : où ils se règlent, ce qu'ils garantissent, leur limite",
      headers: ['Mécanisme', 'Où il se règle', "Ce qu'il garantit", 'Limite'],
      rows: [
        ["CLAUDE.md", "Racine du dépôt, versionné avec le code", "Des conventions relues à chaque séance", "Un contexte sans pouvoir de blocage ; adhésion en baisse au-delà de 200 lignes"],
        ["Règle deny", "/permissions ou .claude/settings.json", "Un outil, une commande ou un fichier refusés dans tous les modes", "Une règle Bash porte sur le texte de la commande"],
        ["Mode plan", "Maj+Tab, /plan ou --permission-mode plan", "Aucune modification avant votre approbation", "L'exploration lance des commandes, examinées par le classifieur quand le mode auto est disponible"],
        ["Hook Stop", "Bloc hooks d'un fichier de réglages", "Un tour qui ne s'achève pas tant que la vérification échoue", "Le script s'exécute avec vos droits : il se relit comme du code"],
        ["Sous-agent", "Dossier .claude/agents/", "Un contexte séparé et des outils restreints", "Ses requêtes entament les mêmes limites d'usage"],
        ["Serveur MCP", "claude mcp add, fichier .mcp.json", "L'accès à un outil externe : tickets, base, documentation", "Un contenu externe peut porter une injection de prompt"],
        ["claude -p", "Scripts et intégration continue", "Une exécution sans interface, avec sortie JSON", "Applique la configuration du dépôt sans dialogue de confiance, sauf avec --bare"],
      ],
    },
    cas: {
      h3: "Cas pratique : retirer une bibliothèque HTTP en fin de support du module de facturation",
      contexte: "Le module de facturation d'un éditeur SaaS appelle son prestataire de paiement à travers une bibliothèque HTTP dont la maintenance s'arrête le 31 octobre. Le module compte une quarantaine de fichiers et une couverture de tests partielle. Le tech lead attend une pull request relisible en une séance, avec des tests qui prouvent que les requêtes envoyées au prestataire n'ont pas changé.",
      etapes: [
        "Lancez /init si le dépôt n'a pas de CLAUDE.md, puis ajoutez la commande de test du module et la règle « aucun appel réseau réel dans les tests ».",
        "Ajoutez une règle deny sur git push et un hook Stop qui lance la suite de tests du module avant chaque fin de tour.",
        "Passez en mode plan et soumettez la consigne ci-dessous ; corrigez le plan avec Ctrl+G, puis approuvez-le en choisissant de valider les modifications une à une.",
        "Faites passer le lot des tests de caractérisation sur l'ancien code avant d'autoriser la migration.",
        "Confiez la relecture du diff à un sous-agent qui le confronte au plan, lancez /security-review, puis ouvrez la pull request.",
      ],
      prompt: "Nous retirons la bibliothèque HTTP [ancienne bibliothèque] du module src/billing avant le 31 octobre, date de fin de sa maintenance. Elle sert aux appels vers notre prestataire de paiement. Remplace-la par le client HTTP déjà utilisé dans le dépôt, configuré dans src/core/http.\n\nCommence par explorer et dresser l'inventaire : chaque fichier qui importe l'ancienne bibliothèque, chaque appel avec sa méthode, son URL, ses en-têtes, son délai d'attente et sa politique de nouvelle tentative, et les tests qui couvrent ces appels aujourd'hui.\n\nPropose ensuite un plan en trois lots.\nLot 1 : des tests de caractérisation qui figent le comportement actuel face au prestataire (requête envoyée, erreurs 4xx et 5xx, délais dépassés), contre un serveur simulé, sans aucun appel réseau réel. Ces tests doivent passer sur le code actuel.\nLot 2 : la migration, fichier par fichier, sans changer la signature des fonctions publiques du module.\nLot 3 : la suppression de la dépendance et la mise à jour de la documentation du module.\n\nPour chaque lot, indique les fichiers touchés, la commande de test et le critère qui autorise le lot suivant. Signale tout comportement de l'ancienne bibliothèque sans équivalent direct (nouvelles tentatives automatiques, redirections, encodage des paramètres) au lieu de le reproduire par supposition. N'ajoute aucune dépendance sans me la proposer d'abord.",
      resultat: "Vous tenez l'inventaire des appels, un plan en trois lots corrigé avant approbation, des tests qui passent sur l'ancien code puis sur le nouveau, et une migration contrôlée lot après lot. Avant la fusion, relisez les tests de caractérisation eux-mêmes : un test réécrit pour passer avec le nouveau code ne prouve plus rien. Contrôlez aussi chaque dépendance ajoutée dans votre registre de paquets, comme le recommandent l'ANSSI et le BSI face aux paquets inventés par les assistants de code.",
    },
    pieges: [
      {
        titre: "CLAUDE.md n'interdit rien",
        texte: "La documentation d'Anthropic présente CLAUDE.md comme un contexte que Claude suit plus ou moins fidèlement selon sa longueur et sa clarté. Une interdiction écrite dans ce fichier peut donc être ignorée. Ce qui ne doit jamais se produire passe par une règle deny ou par un hook PreToolUse, que l'outil applique quoi que décide le modèle.",
      },
      {
        titre: "Une exécution -p applique la configuration d'un dépôt inconnu",
        texte: "En mode non interactif, Claude Code n'affiche aucun dialogue de confiance : il lance les hooks de .claude/settings.json et connecte les serveurs de .mcp.json, même dans un dossier jamais approuvé. Dans un pipeline qui traite les pull requests de contributeurs extérieurs, ajoutez --bare et fournissez la configuration par des options explicites.",
      },
      {
        titre: "Un paquet proposé par l'agent n'existe pas, ou appartient à un attaquant",
        texte: "Le guide de l'ANSSI et du BSI sur les assistants de code, mis à jour en septembre 2024, décrit les paquets « hallucinés » : des noms inventés qu'un attaquant peut ensuite enregistrer avec du code malveillant. Il recommande de vérifier la date de création, l'usage et l'activité d'une bibliothèque inconnue, et de s'en tenir à la liste des paquets autorisés quand l'entreprise en tient une.",
      },
      {
        titre: "Les transcriptions restent en clair sur le poste",
        texte: "Claude Code conserve les transcriptions des séances en texte brut dans ~/.claude/projects/, trente jours par défaut, une durée réglable par cleanupPeriodDays. Un secret collé dans une demande ou lu dans un fichier y demeure donc. Rangez les secrets dans un gestionnaire dédié, interdisez la lecture des fichiers sensibles par des règles deny, et réduisez la durée de conservation sur les postes partagés.",
      },
    ],
  },
  audience: [
    {
      title: "Développeurs",
      desc: "Vous livrez des fonctionnalités et des correctifs chaque semaine. Vous apprenez à déléguer à Claude Code une tâche entière, du test qui échoue jusqu'à la pull request, en gardant la main sur chaque étape sensible.",
    },
    {
      title: "Tech leads et responsables qualité",
      desc: "Vous fixez les conventions, relisez les pull requests et tenez la chaîne d'intégration. Vous apprenez à inscrire ces règles dans CLAUDE.md, les règles deny et les hooks, puis à brancher la revue et GitHub Actions.",
    },
    {
      title: "CTO et responsables d'équipes de développement",
      desc: "Vous choisissez l'offre et répondez des coûts comme de la sécurité du code. Vous apprenez à lire les limites d'usage, les paramètres gérés et les politiques de données, puis à mesurer l'effet de l'agent sur vos propres dépôts.",
    },
  ],
  useCases: [
    { icon: '🧭', title: "Exploration d'un dépôt inconnu", desc: "Questions d'architecture posées au code lui-même, réponses vérifiées dans les fichiers cités." },
    { icon: '🧪', title: "Correctif guidé par un test", desc: "Un test qui reproduit le bogue d'abord, le correctif ensuite, la preuve dans la sortie de la suite." },
    { icon: '🔁', title: "Migration par lots", desc: "Plan approuvé, tests de caractérisation, puis changements fichier par fichier." },
    { icon: '🔍', title: "Revue avant la revue humaine", desc: "/code-review et /security-review en local, Code Review sur Team et Enterprise." },
    { icon: '⚙️', title: "Automatisation dans GitHub Actions", desc: "Mentions @claude, tâches planifiées, droits d'écriture vérifiés avant chaque exécution." },
    { icon: '🔌', title: "Outils internes par MCP", desc: "Tickets et documentation consultés depuis la séance, serveurs approuvés par l'équipe." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Installer Claude Code et interroger un dépôt existant",
      duration: '1h30',
      description: "Prendre ses repères dans le terminal, l'éditeur et l'application de bureau.",
      items: [
        "Installation et connexion par abonnement ou par clé d'API",
        "Terminal, VS Code, JetBrains et application de bureau : un même moteur",
        "Questions d'architecture et vérification dans les fichiers cités",
        "Contexte de la séance : /context, /clear et /compact",
      ],
      exercise: "Vous faites expliquer l'architecture de votre dépôt, puis vérifiez trois affirmations dans le code.",
    },
    {
      day: 1,
      title: "Module 2 · Écrire le CLAUDE.md et les règles de l'équipe",
      duration: '2h',
      description: "Encoder les conventions pour obtenir des résultats constants d'un développeur à l'autre.",
      items: [
        "/init, puis le tri entre ce qu'il faut garder et ce qu'il faut retirer",
        "Moins de 200 lignes ; règles par chemin dans .claude/rules/",
        "CLAUDE.local.md, AGENTS.md et fichier géré par la DSI",
        "Une ligne de plus à la deuxième erreur identique",
      ],
      exercise: "Vous rédigez le CLAUDE.md de votre projet et l'éprouvez sur trois tâches types.",
    },
    {
      day: 1,
      title: "Module 3 · Régler les modes de permission et le bac à sable",
      duration: '1h30',
      description: "Choisir ce que Claude fait seul selon la tâche et l'environnement.",
      items: [
        "Manuel, acceptEdits, plan, auto, dontAsk et bypassPermissions",
        "Le classifieur du mode auto et ce qu'il bloque par défaut",
        "Règles allow et deny, commande /permissions",
        "Bac à sable des commandes Bash avec /sandbox",
      ],
      exercise: "Vous écrivez les règles allow et deny de votre dépôt, puis constatez qu'un push est refusé.",
    },
    {
      day: 1,
      title: "Module 4 · Planifier, puis tester avant de coder",
      duration: '2h',
      description: "Faire approuver la démarche et exiger la preuve.",
      items: [
        "Mode plan, édition du plan avec Ctrl+G, options d'approbation",
        "Le test qui échoue, écrit avant le correctif",
        "Tests de caractérisation avant un refactoring",
        "Points de contrôle, /rewind et leurs limites face aux commandes Bash",
      ],
      exercise: "Vous corrigez un bogue de votre backlog en partant d'un test qui le reproduit.",
    },
    {
      day: 2,
      title: "Module 5 · Répartir le travail entre sous-agents, compétences et hooks",
      duration: '2h',
      description: "Garder la séance principale lisible et automatiser les gestes obligatoires.",
      items: [
        "Sous-agents intégrés Explore et Plan, sous-agents personnalisés",
        "Compétences dans .claude/skills/ et champ disable-model-invocation",
        "Hooks PreToolUse, PostToolUse et Stop",
        "Relecture du diff par un sous-agent au contexte vierge",
      ],
      exercise: "Vous créez un sous-agent de relecture et un hook Stop qui lance vos tests.",
    },
    {
      day: 2,
      title: "Module 6 · Connecter vos outils par MCP et par les plugins",
      duration: '1h30',
      description: "Ouvrir à l'agent les outils de l'équipe sans perdre le contrôle.",
      items: [
        "claude mcp add et portées locale, projet et utilisateur",
        "Approbation des serveurs de .mcp.json et confiance accordée au dossier",
        "Plugins installés par /plugin et droits avec lesquels ils s'exécutent",
        "Liste des serveurs autorisés par la DSI",
      ],
      exercise: "Vous branchez un serveur MCP en lecture et résolvez une tâche qui part d'un ticket.",
    },
    {
      day: 2,
      title: "Module 7 · Automatiser dans l'intégration continue",
      duration: '2h',
      description: "Faire travailler Claude Code dans vos pipelines, avec des droits bornés.",
      items: [
        "claude -p, sortie JSON, --allowedTools, dontAsk et --max-turns",
        "--bare et configuration explicite pour les dépôts non fiables",
        "GitHub Actions : /install-github-app, secrets, droits d'écriture",
        "/code-review, /security-review et service Code Review des offres Team et Enterprise",
      ],
      exercise: "Vous mettez en place une revue automatique des pull requests sur un dépôt pilote.",
    },
    {
      day: 2,
      title: "Module 8 · Piloter coûts, données et règles d'équipe",
      duration: '1h30',
      description: "Choisir l'offre, suivre la consommation et écrire la charte de l'équipe.",
      items: [
        "/usage, fenêtre de cinq heures et plafonds hebdomadaires",
        "Siège Premium, crédits d'usage, facturation au token de l'API",
        "Entraînement, conservation des données et transcriptions locales",
        "Mesure sur vos dépôts et charte d'usage de l'équipe",
      ],
      exercise: "Vous fixez par écrit les règles d'emploi de Claude Code dans votre équipe et retenez les indicateurs à suivre.",
    },
  ],
  objectives: [
    "Le participant sait rédiger un CLAUDE.md de moins de 200 lignes qui traduit les conventions de son équipe.",
    "Le participant sait choisir le mode de permission adapté à une tâche et écrire les règles allow et deny de son dépôt.",
    "Le participant sait faire approuver un plan avant toute modification et partir d'un test qui échoue.",
    "Le participant sait configurer un sous-agent de relecture et un hook qui retient la fin d'un tour tant que les tests échouent.",
    "Le participant sait lancer Claude Code en mode non interactif ou dans GitHub Actions avec une liste fermée d'outils autorisés.",
    "Le participant sait lire sa consommation avec /usage et expliquer les limites d'usage de son offre.",
  ],
  tarifs: {
    titre: "Le prix comprend la préparation sur votre dépôt et votre chaîne d'intégration",
    paras: [
      "Le formateur construit les exercices à partir d'un dépôt que vous choisissez, ou d'un dépôt d'entraînement si votre politique l'exige, de tickets tirés de votre backlog et de votre configuration d'intégration continue. Un groupe type réunit huit développeurs, deux tech leads et le CTO, soit onze personnes.",
      "Le tarif journalier, 1 980 € HT, vaut pour l'équipe entière, quelle que soit sa taille. Les deux jours en intra coûtent ainsi 3 960 € HT, avec 12 participants au plus ; pour les onze personnes de l'exemple, la part de chacun ressort à 360 € HT. Un développeur seul peut suivre le parcours en individuel, au même prix de journée. L'organisme est certifié Qualiopi : votre demande part donc vers l'OPCO de la branche, qui arrête seul le montant couvert, et nous constituons le dossier à vos côtés.",
    ],
  },
  apres: {
    titre: "Après la formation, des compétences et des hooks propres à votre dépôt",
    texte: "Masteria peut ensuite écrire avec votre équipe un plugin interne qui rassemble vos compétences (création de migration, revue de sécurité, préparation de version), vos sous-agents de relecture et vos hooks de contrôle, publié sur une place de marché privée de plugins. Autre chantier possible : un serveur MCP en lecture vers votre outil de tickets ou votre documentation interne. Chaque élément est livré avec ses tests et l'inventaire des permissions qu'il utilise, puis remis à vos développeurs qui en assurent la maintenance.",
  },
  cta: {
    milieu: "Choisissez le dépôt et trois tickets de votre backlog : les deux jours se déroulent dessus.",
    fin: {
      titre: "Mettons Claude Code au travail sur votre dépôt",
      texte: "Indiquez votre langage, votre forge (GitHub ou GitLab), votre offre Claude et ce que vous voulez déléguer en premier : la réponse arrive avec un déroulé construit sur votre dépôt, des dates et un chiffrage.",
    },
  },
  liensAssocies: [
    { label: "Claude pour l'exploitation, l'architecture et l'administration de la DSI", href: '/formation-claude-informatique' },
    { label: "Vibe coding : construire une application sans être développeur", href: '/formation-vibe-coding' },
    { label: "Agents IA en entreprise : du sans-code aux agents dans le code", href: '/formation-agents-ia' },
    { label: "Rédiger des consignes précises pour les modèles", href: '/formation-prompt-engineering' },
  ],
  avisPriorite: ['Claude', '\\bIT\\b', 'exercices pratiques', "cas d.usage"],
  auteur: true,
  faq: [
    {
      q: "Quelle offre faut-il pour que chaque développeur utilise Claude Code ?",
      a: "Claude Code fait partie de toutes les offres payantes : Pro, Max, le siège standard de Team et Enterprise. Il fonctionne aussi avec une clé d'API de la console Claude, facturée au token, ou par Amazon Bedrock, Google Cloud et Microsoft Foundry. L'offre gratuite n'y donne pas accès. Pour un usage intensif sur Team, le siège Premium apporte cinq fois l'usage du siège standard.",
    },
    {
      q: "Comment se comptent les limites d'usage quand on code toute la journée ?",
      a: "Sur un abonnement, le terminal et les conversations puisent dans la même réserve, renouvelée sur une fenêtre glissante de cinq heures, avec des plafonds hebdomadaires en plus. Sous-agents, compétences et serveurs MCP consomment sur ce même compte, et /usage indique leur part. Une fois la limite atteinte, vous attendez le renouvellement ou vous activez les crédits d'usage, décomptés au tarif de l'API.",
    },
    {
      q: "Anthropic entraîne-t-il ses modèles sur notre code ?",
      a: "Sous les conditions commerciales, qui couvrent Team, Enterprise, l'API et les plateformes cloud, Anthropic n'utilise ni le code ni les demandes transmis à Claude Code pour entraîner ses modèles, sauf adhésion volontaire à un programme de partage. Sur Free, Pro et Max, chaque utilisateur tranche dans ses réglages de confidentialité. La conservation standard dure 30 jours pour les offres commerciales, et Enterprise peut obtenir la conservation zéro après examen par Anthropic.",
    },
    {
      q: "Claude Code s'intègre-t-il à VS Code ou à IntelliJ ?",
      a: "Oui. L'extension VS Code, installable aussi dans Cursor, affiche les modifications en ligne et la revue du plan ; le plugin JetBrains fonctionne dans IntelliJ, PyCharm ou WebStorm et s'appuie sur la CLI installée à part. Tous ces environnements utilisent le même moteur, si bien que CLAUDE.md, réglages et serveurs MCP du dépôt s'y appliquent sans adaptation.",
    },
    {
      q: "Le mode auto suffit-il pour laisser Claude travailler sans surveillance ?",
      a: "Il réduit les interruptions : un classifieur examine les actions et bloque par défaut celles qui sortent du cadre, comme un push forcé ou un déploiement en production. Anthropic précise qu'il ne garantit pas la sécurité. Pour une tâche longue sans surveillance, associez-le au bac à sable ou à un conteneur, à des règles deny et à une vérification automatique par les tests.",
    },
    {
      q: "Peut-on brancher Claude Code sur GitHub Actions sans exposer de clé personnelle ?",
      a: "Oui. Placez une clé d'API de la console Claude dans les secrets de l'organisation GitHub plutôt qu'un jeton d'abonnement, qui reste lié au compte de la personne qui l'a généré. L'action accepte aussi une fédération d'identité : elle échange le jeton OIDC du workflow, l'identité que GitHub délivre à chaque exécution, contre un accès à l'API, sans aucun secret de longue durée.",
    },
    {
      q: "Cette formation remplace-t-elle celle consacrée à Claude dans la DSI ?",
      a: "Elle la complète. Ici, chaque participant travaille dans un dépôt de code aux côtés de l'agent. Le parcours Claude destiné à l'informatique s'adresse à l'exploitation, au support, à l'architecture et aux administrateurs de l'outil : journaux, documentation, connecteurs et réglages de l'organisation.",
    },
    {
      q: "Notre OPCO prend-il en charge une formation aussi technique ?",
      a: "La certification Qualiopi de la formation est la condition pour solliciter l'OPCO dont relève votre entreprise ; la décision et le montant suivent les règles de votre branche, sans lien avec la technicité du sujet. En intra, jusqu'à 12 développeurs participent, réunis chez vous ou connectés à distance, et le prix de la journée, 1 980 € HT, ne dépend pas de leur nombre. Nous transmettons le programme, les objectifs et la convention nécessaires au dossier.",
    },
  ],
  sources: [
    { name: "Claude Code Docs : bonnes pratiques (vérification, plan, sous-agents, mode non interactif)", url: 'https://code.claude.com/docs/en/best-practices' },
    { name: "Claude Code Docs : CLAUDE.md, règles de chemin et mémoire du projet", url: 'https://code.claude.com/docs/en/memory' },
    { name: "Claude Code Docs : modes de permission et classifieur du mode auto", url: 'https://code.claude.com/docs/en/permission-modes' },
    { name: "Claude Code Docs : exécution programmatique et option --bare", url: 'https://code.claude.com/docs/en/headless' },
    { name: "Claude Code Docs : Claude Code dans GitHub Actions", url: 'https://code.claude.com/docs/en/github-actions' },
    { name: "Claude Code Docs : suivi des coûts et limites d'usage par offre", url: 'https://code.claude.com/docs/en/costs' },
    { name: "Anthropic Economic Index : Claude Code et Claude.ai face aux tâches de code (28 avril 2025)", url: 'https://www.anthropic.com/research/impact-software-development' },
    { name: "ANSSI et BSI : AI Coding Assistants, recommandations communes (septembre 2024)", url: 'https://cyber.gouv.fr/nous-connaitre/publications/publications-internationales/ai-coding-assistants/' },
  ],
}
