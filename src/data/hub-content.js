// Hub content, SEO-optimised sections for the 4 AI tool training hub pages
// Used by: formation-chatgpt-entreprise, formation-microsoft-copilot,
//           formation-gemini-entreprise, formation-claude-entreprise
// Masteria, organisme de formation certifié Qualiopi

export const HUB_CONTENT = {

  // ─────────────────────────────────────────────────────────────────────────
  // CHATGPT
  // ─────────────────────────────────────────────────────────────────────────
  chatgpt: {

    why: [
      {
        title: 'Réduire le temps passé sur les tâches répétitives à valeur ajoutée faible',
        body: "La rédaction de compte-rendus, la synthèse de documents, la mise en forme de rapports, ces tâches absorbent en moyenne 2 à 3 heures par collaborateur et par jour. Une équipe formée à ChatGPT exécute ces mêmes tâches en 20 à 40 minutes, sans sacrifier la qualité. Le gain se mesure dès la première semaine de retour en poste.",
      },
      {
        title: 'Produire des contenus professionnels de qualité constante',
        body: "ChatGPT ne remplace pas le jugement humain, mais il supprime la page blanche et accélère la mise en forme. Appels d'offres, emails commerciaux, fiches de poste, communications internes : vos équipes apprennent à obtenir des premiers jets exploitables en quelques minutes, puis à les affiner plutôt qu'à les écrire de zéro. La variabilité de qualité entre collaborateurs diminue mécaniquement.",
      },
      {
        title: 'Construire un avantage concurrentiel durable fondé sur les compétences IA',
        body: "Les entreprises dont les équipes maîtrisent les outils IA prennent des décisions plus vite, livrent plus de valeur à leurs clients et libèrent du temps pour des tâches stratégiques. Former vos collaborateurs à ChatGPT, c'est investir dans un actif de compétence qui reste dans l'organisation, pas dans un abonnement logiciel que vous pouvez perdre.",
      },
    ],

    programme: [
      {
        day: 1,
        title: 'Maîtrise de ChatGPT GPT-5 et fonctionnalités enterprise',
        items: [
          'Panorama 2026 : différences entre ChatGPT Free, Plus, Team et Enterprise (sécurité, fenêtre de contexte, fonctionnalités exclusives)',
          'GPT-5 et modèles raisonnement : quand utiliser le mode rapide vs le mode "Thinking" (Extended reasoning) selon la tâche',
          'Custom GPTs : créer un GPT spécialisé pour votre métier (system prompt, knowledge base, instructions, capacités)',
          'Projects ChatGPT : organiser vos conversations par dossier persistant avec base documentaire dédiée',
          'Canvas : édition collaborative de documents et de code avec ChatGPT en temps réel',
          'Voice Mode avancé : interaction vocale pour briefings rapides, brainstorming, transcription de réunions',
          'Memory persistante : configurer ChatGPT pour qu\'il se souvienne de vos préférences et de votre contexte d\'entreprise',
        ],
      },
      {
        day: 2,
        title: 'Génération multimédia, agents et automatisation',
        items: [
          'GPT Image 2 (génération native d\'images) : produire visuels marketing, infographies, mockups en respectant votre charte',
          'Sora 2 (génération vidéo) : créer des capsules vidéo courtes pour communication interne et marketing',
          'Code Interpreter (Advanced Data Analysis) : analyser fichiers Excel, CSV, PDF avec exécution Python en sandbox',
          'Connecteurs natifs : intégrer ChatGPT à Gmail, Slack, Drive, Notion, GitHub via App Connectors',
          'Operator : automatiser des actions web (recherche, formulaires, e-commerce) avec un agent autonome',
          'Deep Research : production de rapports de veille et études concurrentielles en 5-10 minutes',
          'API ChatGPT : intégrer GPT-5 dans vos outils internes (cas concrets sans compétence dev avancée)',
          'Plan d\'action 30 jours : industrialiser ChatGPT dans les rituels de votre équipe avec gouvernance et sécurité',
        ],
      },
    ],

    faq: [
      {
        q: 'Qu\'est-ce qu\'une formation ChatGPT en entreprise ?',
        a: "Une formation ChatGPT en entreprise apprend à vos collaborateurs à utiliser ChatGPT comme outil de productivité professionnelle, pas comme un moteur de recherche amélioré. Elle couvre la rédaction de prompts efficaces, la gestion du contexte, la production de documents professionnels et l'intégration dans les flux de travail existants. Chez Masteria, la formation dure 2 jours (14 heures) et s'appuie sur les cas d'usage réels de vos équipes, pas sur des exercices génériques. Plus de 1 500 collaborateurs ont suivi notre programme depuis 2023, avec un taux de satisfaction de 98%.",
      },
      {
        q: 'La formation ChatGPT est-elle finançable par mon OPCO ?',
        a: "Oui. La formation ChatGPT de Masteria est finançable via les OPCO (Opérateurs de Compétences) dans le cadre du Plan de Développement des Compétences de votre entreprise. Masteria est certifié Qualiopi, condition indispensable pour accéder aux financements OPCO. Le tarif en intra-entreprise est de 1 980 € par jour pour un groupe jusqu'à 12 personnes (soit 3 960 € pour les 2 jours). L'accompagnement individuel sur mesure est facturé 1 980 € par jour. Notre équipe vous accompagne dans la constitution du dossier de prise en charge.",
      },
      {
        q: 'Faut-il des compétences techniques pour se former à ChatGPT ?',
        a: "Aucune compétence technique n'est requise. La formation Masteria est conçue pour des professionnels non-techniciens : commerciaux, responsables RH, juristes, assistantes, managers. Savoir utiliser un navigateur web et rédiger des emails suffit. ChatGPT s'utilise en langage naturel : on lui écrit comme à un interlocuteur humain. La difficulté n'est pas technique, elle est méthodologique, c'est précisément ce que la formation adresse, en apprenant à structurer ses demandes pour obtenir des résultats exploitables.",
      },
      {
        q: 'Quelle est la différence entre ChatGPT et ChatGPT Enterprise ?',
        a: "ChatGPT (version gratuite ou Plus) est destiné au grand public. ChatGPT Enterprise est une offre payante à destination des entreprises : elle garantit que les données saisies ne sont pas utilisées pour entraîner les modèles d'OpenAI, offre des temps de réponse prioritaires et permet de déployer des configurations personnalisées à l'échelle d'une organisation. La formation Masteria couvre les deux versions. Si votre entreprise n'a pas encore souscrit à ChatGPT Enterprise, la formation intègre un module sur les enjeux de confidentialité des données et les bonnes pratiques à adopter selon la version utilisée.",
      },
      {
        q: 'En combien de temps voit-on des résultats concrets après une formation ChatGPT ?',
        a: "La majorité des participants de Masteria constatent des gains de productivité dès la première semaine suivant la formation. Les cas d'usage simples, rédaction d'emails, synthèses, préparation de réunions, sont opérationnels le jour même du retour en poste. Les gains les plus importants, liés à des workflows plus élaborés, se matérialisent en 2 à 4 semaines. En moyenne, les équipes formées gagnent entre 5 et 8 heures par collaborateur et par semaine sur des tâches de production documentaire et d'analyse.",
      },
      {
        q: 'La formation ChatGPT est-elle disponible en intra-entreprise ?',
        a: "Oui. La formation intra-entreprise se déroule dans vos locaux ou en visioconférence, pour un groupe de 4 à 12 participants. Elle est personnalisée en amont : le formateur travaille avec vous sur vos cas d'usage réels, vos documents types et vos processus métier avant la session. Le tarif est de 1 980 euros par jour pour l'ensemble du groupe, soit 3 960 euros pour les 2 jours, ce qui revient à 330 euros par personne pour 12 participants. L'accompagnement individuel sur mesure est facturé 1 980 € par jour.",
      },
    ],
  },


  // ─────────────────────────────────────────────────────────────────────────
  // COPILOT
  // ─────────────────────────────────────────────────────────────────────────
  copilot: {

    why: [
      {
        title: 'Exploiter l\'IA directement dans les outils que vos équipes utilisent déjà',
        body: "Microsoft 365 Copilot est intégré dans Word, Excel, Outlook, Teams et PowerPoint, les applications que la majorité de vos collaborateurs ouvrent chaque matin. Il n'y a pas de nouvel outil à apprendre, pas de changement de contexte, pas de résistance au changement. Former vos équipes à Copilot, c'est débloquer le potentiel d'une IA déjà présente dans leur environnement de travail quotidien.",
      },
      {
        title: 'Réduire le temps de traitement des emails, réunions et rapports de plus de 40%',
        body: "Copilot dans Outlook résume les fils de discussion longs et rédige des réponses contextuelles. Dans Teams, il génère les compte-rendus de réunion avec points d'action en quelques secondes. Dans Word, il produit des premiers jets structurés depuis un simple brief. Ces gains, mesurés par Microsoft sur plus de 70 000 utilisateurs en entreprise, représentent en moyenne 1h10 économisée par collaborateur et par jour.",
      },
      {
        title: 'Uniformiser les pratiques et garantir la sécurité des données d\'entreprise',
        body: "Contrairement aux outils IA grand public, Microsoft 365 Copilot s'exécute dans le tenant sécurisé de votre organisation : vos données ne quittent jamais votre environnement Microsoft et ne sont pas utilisées pour entraîner les modèles. Former vos équipes à Copilot, c'est aussi leur enseigner les bonnes pratiques d'utilisation qui protègent la confidentialité des données clients et des informations stratégiques.",
      },
    ],

    programme: [
      {
        day: 1,
        title: 'Copilot dans M365 : Word, Excel, PowerPoint, Outlook, Teams',
        items: [
          'Architecture M365 Copilot : Microsoft Graph, tenant Microsoft, sécurité et confidentialité dans votre périmètre',
          'Copilot dans Outlook : tri intelligent de la boîte mail, résumé de fils longs, rédaction contextuelle avec accès au calendrier et aux échanges précédents',
          'Copilot dans Teams : transcription automatique des réunions, génération de comptes-rendus avec points d\'action, recherche dans l\'historique',
          'Copilot dans Word : rédaction depuis un brief, application automatique de la charte du tenant, restructuration de documents existants',
          'Copilot dans PowerPoint : génération de présentations à partir d\'un Word, application de la charte, insertion de visuels via Designer',
          'Copilot dans Excel : analyse de données avec langage naturel, formules suggérées, Power Query assistée',
          'Researcher (raisonnement étendu) : synthèses cross-sources sur le tenant (mails, fichiers, Teams, agenda) en quelques minutes',
        ],
      },
      {
        day: 2,
        title: 'Pages, Agents Copilot Studio, Power Automate, intégrations',
        items: [
          'Copilot Pages : canvases collaboratifs IA pour brainstorming et co-création en équipe',
          'Designer (génération d\'images) : produire des visuels alignés sur votre charte directement dans le tenant',
          'Copilot Studio : construire des agents IA low-code pour automatiser tickets, processus métier, FAQ interne',
          'Power Automate + Copilot : déclencher des workflows IA automatisés (alertes, déploiements, reporting)',
          'Microsoft Forms + Copilot : générer des QCM et formulaires depuis un brief, analyser les réponses',
          'Dynamics 365 + Copilot : exploitation pour les équipes commerciales et service client',
          'GitHub Copilot (produit séparé) : panorama pour les équipes IT, intégration VS Code/JetBrains',
          'Plan d\'action 30 jours : politique d\'usage Copilot, gouvernance des données, audit de permissions SharePoint, plan de déploiement à l\'échelle',
        ],
      },
    ],

    faq: [
      {
        q: 'Qu\'est-ce que Microsoft 365 Copilot et comment fonctionne-t-il ?',
        a: "Microsoft 365 Copilot est un assistant IA intégré directement dans les applications de la suite Microsoft 365, Word, Excel, PowerPoint, Outlook et Teams. Il s'appuie sur les modèles de langage de grande taille (LLM) de Microsoft, combinés aux données de votre tenant Microsoft (emails, réunions, documents), pour générer des réponses contextualisées à votre organisation. Concrètement, Copilot peut rédiger un rapport Word depuis un brief, analyser un tableau Excel en langage naturel, résumer une réunion Teams ou trier votre boite mail selon vos priorités, sans quitter les applications que vous utilisez déjà.",
      },
      {
        q: 'Faut-il une licence Copilot payante pour se former ?',
        a: "La licence Microsoft 365 Copilot (30 dollars par utilisateur et par mois en 2025) est nécessaire pour utiliser Copilot en dehors de la formation. Pour suivre la formation Masteria, nous adaptons le programme selon les accès disponibles : les participants disposant d'une licence travaillent directement sur leurs outils réels. Pour les groupes sans licence, nous utilisons les fonctionnalités Copilot accessibles via les formules Microsoft 365 standard (Copilot dans Bing, Copilot gratuit) et simulons les cas d'usage avancés. Nous vous conseillons sur l'opportunité d'activer les licences avant ou après la formation.",
      },
      {
        q: 'Microsoft Copilot est-il sécurisé pour les données d\'entreprise ?',
        a: "Oui, à condition de l'utiliser dans le cadre Microsoft 365 Copilot for Work (et non le Copilot grand public). Dans ce périmètre, toutes les données restent dans le tenant sécurisé de votre organisation, soumises aux mêmes politiques de sécurité et de conformité que vos autres données Microsoft 365. Elles ne sont pas utilisées pour entraîner les modèles d'IA de Microsoft. La formation Masteria inclut un module dédié à la gouvernance des données, aux droits d'accès et aux cas où il est déconseillé d'utiliser Copilot (données RGPD sensibles, informations soumises à secret professionnel).",
      },
      {
        q: 'La formation Copilot est-elle différente selon les outils Microsoft utilisés ?',
        a: "Oui. Une équipe comptable qui travaille principalement dans Excel et Outlook n'a pas les mêmes besoins qu'une équipe RH qui rédige des documents Word et organise des réunions Teams. La formation Masteria en intra-entreprise est personnalisée en amont : nous identifions les 3 à 5 applications les plus utilisées par vos équipes et concentrons le programme sur ces outils. En accompagnement individuel sur mesure, le programme est calibré sur les usages spécifiques du participant (rythme, exigence, applications prioritaires).",
      },
      {
        q: 'Copilot peut-il vraiment remplacer une journée de travail ?',
        a: "Non, et cette promesse marketing crée souvent des attentes décalées. Ce que Copilot fait réellement : il réduit le temps passé sur les tâches de production documentaire, de traitement des emails et de synthèse de réunions. Microsoft estime ce gain à 1h10 par jour et par utilisateur en moyenne sur ses premiers 70 000 adoptants. C'est significatif, mais Copilot ne prend pas de décisions, ne gère pas les relations humaines et produit des erreurs qu'il faut détecter. La formation Masteria est précisément conçue pour calibrer les attentes et apprendre à vérifier, corriger et tirer le meilleur des sorties de Copilot.",
      },
      {
        q: 'La formation Microsoft Copilot est-elle finançable par l\'OPCO ?',
        a: "Oui. Masteria est certifié Qualiopi, ce qui permet la prise en charge de la formation Microsoft Copilot par votre OPCO via le Plan de Développement des Compétences. Le tarif en intra-entreprise est de 1 980 € par jour pour un groupe jusqu'à 12 personnes (3 960 € pour les 2 jours). L'accompagnement individuel sur mesure est facturé 1 980 € par jour. La formation est disponible en présentiel dans toute la France, la Belgique et la Suisse, ainsi qu'en distanciel. Nous vous accompagnons dans la demande de financement OPCO.",
      },
    ],
  },


  // ─────────────────────────────────────────────────────────────────────────
  // GEMINI
  // ─────────────────────────────────────────────────────────────────────────
  gemini: {

    why: [
      {
        title: 'Adopter l\'IA sans friction pour les équipes déjà équipées Google Workspace',
        body: "Si votre organisation utilise Gmail, Google Docs, Sheets, Slides ou Meet, Gemini s'intègre nativement dans ces outils sans aucune installation supplémentaire. Il n'y a pas de nouvelle interface à apprendre, pas de copier-coller entre applications. Les collaborateurs qui résistent aux changements d'outils adoptent Gemini beaucoup plus facilement parce qu'ils restent dans leur environnement habituel.",
      },
      {
        title: 'Accélérer la production de contenus et d\'analyses dans les outils Google',
        body: "Gemini dans Google Docs rédige, reformule et améliore les documents directement dans l'interface. Dans Sheets, il génère des formules complexes en langage naturel et analyse des jeux de données. Dans Gmail, il propose des réponses contextualisées et résume des fils d'échanges. Ces fonctionnalités, combinées, permettent aux équipes de réduire de 30 à 50% le temps passé sur les tâches documentaires récurrentes.",
      },
      {
        title: 'Bénéficier d\'une IA multimodale capable de traiter texte, images et données en un seul flux',
        body: "Gemini est conçu dès l'origine pour traiter plusieurs types de contenus simultanément : textes, tableaux, images, vidéos et données structurées. En entreprise, cela ouvre des cas d'usage concrets comme l'analyse de visuels de campagnes marketing, l'extraction de données depuis des captures d'écran ou la génération automatique de graphiques depuis des données textuelles. Ces capacités multimodales dépassent ce que proposent la plupart des autres assistants IA intégrés.",
      },
    ],

    programme: [
      {
        day: 1,
        title: 'Gemini 3 Pro dans Workspace : Gmail, Docs, Sheets, Slides, Meet',
        items: [
          'Panorama 2026 : Gemini 3 Pro vs Flash, fenêtre de contexte 2M tokens (la plus large du marché), différences Free/Workspace Enterprise',
          'Gemini dans Gmail : tri intelligent, résumé de fils longs, rédaction contextuelle avec accès au calendrier et au Drive',
          'Gemini dans Google Docs : rédaction depuis un brief, "Help me write", restructuration de documents, traduction native',
          'Gemini dans Google Sheets : analyse de données par langage naturel, formules suggérées, "Help me organize" pour structurer un dataset',
          'Gemini dans Google Slides : génération de présentations depuis un Doc, insertion de visuels Imagen 4 alignés sur votre charte',
          'Gemini dans Google Meet : transcription automatique des réunions, résumés multilingues, points d\'action post-meeting',
          'Live API : conversations vocales avancées avec Gemini pour briefings rapides et brainstorming',
        ],
      },
      {
        day: 2,
        title: 'NotebookLM, Imagen 4, Veo 3, Apps Script, Cloud',
        items: [
          'NotebookLM : charger 50+ sources (PDF, vidéo, sites web) et générer synthèses, FAQ, mind maps, podcasts pédagogiques',
          'Imagen 4 (génération d\'images) : produire visuels marketing, illustrations pédagogiques, infographies cohérentes',
          'Veo 3 (génération vidéo) : créer des capsules vidéo de 30-60 secondes pour communication interne et marketing',
          'Apps Script + Gemini : automatiser Workspace (Gmail, Sheets, Drive) sans quitter votre environnement Google',
          'Gemini Code Assist : code et complétion intelligente dans VS Code, JetBrains, Cloud Code (panorama pour équipes IT)',
          'Google Cloud + Gemini : Cloud Functions, BigQuery avec Gemini pour les analyses de données',
          'Fenêtre de contexte 2M tokens : avaler 100+ documents en une requête pour audits sémantiques et synthèses cross-sources',
          'Plan d\'action 30 jours : intégrer Gemini dans les rituels d\'équipe avec gouvernance, audit Workspace admin, optimisation Drive',
        ],
      },
    ],

    faq: [
      {
        q: 'Qu\'est-ce que Google Gemini dans Workspace ?',
        a: "Google Gemini dans Workspace est l'assistant IA de Google intégré directement dans les applications de la suite Google Workspace (anciennement G Suite) : Gmail, Google Docs, Sheets, Slides et Meet. Il permet de rédiger, analyser, résumer et générer du contenu sans quitter les outils Google. Gemini for Workspace est disponible via un abonnement complémentaire à Google Workspace (à partir de 22 dollars par utilisateur et par mois pour la version Business). Il s'appuie sur les modèles Gemini de Google DeepMind, les plus puissants accessibles dans un environnement d'entreprise sécurisé.",
      },
      {
        q: 'La formation Gemini est-elle différente d\'une formation ChatGPT ?',
        a: "Oui, sur plusieurs points fondamentaux. ChatGPT est un outil autonome accessible via une interface dédiée, qui nécessite de passer d'une application à l'autre. Gemini for Workspace s'utilise directement dans Gmail, Docs ou Sheets, il n'y a pas de changement de contexte. La formation Masteria sur Gemini est donc très orientée vers les workflows intégrés et les gains dans les outils Google, tandis que la formation ChatGPT insiste davantage sur les techniques de prompting autonome et les cas d'usage transversaux. Si votre organisation utilise Google Workspace, la formation Gemini sera plus directement applicable au quotidien.",
      },
      {
        q: 'Faut-il déjà utiliser Google Workspace pour suivre la formation Gemini ?',
        a: "Oui, c'est indispensable. La formation Masteria sur Google Gemini est conçue pour les organisations qui utilisent déjà Google Workspace (Gmail, Docs, Sheets, Drive). Les participants doivent disposer d'un compte Google Workspace actif et idéalement d'une licence Gemini for Workspace pour pratiquer sur leurs propres outils pendant la formation. Si votre organisation n'a pas encore activé les licences Gemini, nous pouvons organiser la formation en utilisant les fonctionnalités Gemini accessibles via les formules Workspace existantes, et vous conseiller sur le retour sur investissement d'une activation complète.",
      },
      {
        q: 'Gemini est-il sécurisé pour les données professionnelles ?',
        a: "Gemini for Google Workspace (version entreprise) est soumis aux mêmes engagements de sécurité et de confidentialité que l'ensemble de Google Workspace : les données ne sont pas utilisées pour entraîner les modèles d'IA, elles restent dans le périmètre de votre organisation et sont couvertes par les accords de traitement des données de Google (conformes au RGPD). En revanche, si vous utilisez Gemini via gemini.google.com avec un compte personnel, les garanties sont différentes. La formation Masteria inclut un module complet sur la distinction entre Gemini grand public et Gemini for Workspace, et les bonnes pratiques à adopter.",
      },
      {
        q: 'Quelle version de Gemini est utilisée en formation ?',
        a: "La formation Masteria s'appuie sur Gemini 3, dernière évolution après Gemini 1.5 Pro et Gemini 2.0, intégrée dans Google Workspace et accessible aux entreprises via les abonnements Gemini for Workspace. Cette version offre une fenêtre contextuelle large, la capacité à analyser des fichiers volumineux depuis Google Drive et des performances avancées sur le français professionnel. Nous mettons à jour le contenu de la formation à chaque nouvelle version significative publiée par Google pour refléter l'état de l'art.",
      },
      {
        q: 'La formation Gemini est-elle finançable par l\'OPCO ?',
        a: "Oui. Masteria est certifié Qualiopi, condition obligatoire pour la prise en charge des formations par les OPCO dans le cadre du Plan de Développement des Compétences. La formation Google Gemini est éligible à ce dispositif. Le tarif en intra-entreprise est de 1 980 € par jour pour un groupe jusqu'à 12 personnes. L'accompagnement individuel sur mesure est facturé 1 980 € par jour. La formation est accessible en présentiel dans toute la France, la Belgique et la Suisse, ainsi qu'en distanciel. Notre équipe vous accompagne dans le montage du dossier OPCO.",
      },
    ],
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CLAUDE
  // ─────────────────────────────────────────────────────────────────────────
  claude: {

    why: [
      {
        title: 'Traiter des documents longs et complexes avec une précision inégalée',
        body: "Claude est aujourd'hui le seul assistant IA grand public capable d'ingérer et d'analyser en un seul appel des documents allant jusqu'à 200 000 tokens, soit environ 150 000 mots, l'équivalent d'un contrat de 600 pages, d'un rapport annuel complet ou de 10 études sectorielles combinées. Pour les métiers qui traitent de gros volumes documentaires (juridique, finance, compliance, conseil), cette capacité représente un gain de productivité sans équivalent.",
      },
      {
        title: 'Obtenir des réponses plus nuancées, prudentes et calibrées pour un usage professionnel',
        body: "Claude est connu dans la communauté des professionnels IA pour ses réponses particulièrement soignées sur les sujets sensibles : il signale ses incertitudes, refuse de surconfirmer ce qu'il ne sait pas et formule des mises en garde appropriées. Pour les équipes juridiques, RH ou financières, cette prudence réduit le risque d'utiliser des sorties IA non vérifiées dans des contextes à enjeux. La formation Masteria montre comment tirer parti de cette fiabilité accrue tout en maximisant la productivité.",
      },
      {
        title: 'Maîtriser l\'outil IA le plus performant sur les tâches de rédaction et d\'analyse complexe',
        body: "Les benchmarks indépendants publiés en 2024 et 2025 placent systématiquement Claude Sonnet et Claude Opus en tête sur les tâches de rédaction professionnelle longue, d'analyse de documents et de raisonnement structuré. Pour les équipes dont la production principale est documentaire ou analytique, consultants, juristes, analystes financiers, communicants, choisir Claude plutôt qu'un autre outil signifie des sorties de meilleure qualité avec moins de corrections nécessaires.",
      },
    ],

    programme: [
      {
        day: 1,
        title: 'Claude Opus 4.8 et fonctionnalités enterprise (Projects, Skills, Artifacts)',
        items: [
          'Panorama 2026 : différences Claude Free, Pro, Team, Enterprise (sécurité, fenêtre de contexte 200k vs 1M tokens)',
          'Claude Opus 4.8 vs Sonnet 5 vs Haiku 4.5 : choisir le bon modèle selon la tâche (analyse profonde, équilibre, rapidité)',
          'Extended Thinking : activer le raisonnement étendu pour problèmes complexes (juridique, financier, code, stratégie)',
          'Projects : créer un espace persistant avec base documentaire dédiée (charte, brand voice, FAQ interne, références)',
          'Skills (lancées fin 2025) : compétences téléchargeables spécialisées (Excel, code, recherche, ingénierie financière)',
          'Artifacts : édition collaborative de code, visualisations HTML/SVG, schémas, dashboards en temps réel',
          'Constitutional AI : comprendre l\'alignement Claude pour des sorties prudentes et nuancées sur sujets sensibles',
        ],
      },
      {
        day: 2,
        title: 'Computer Use, MCP, Claude Code, agents autonomes',
        items: [
          'Computer Use : agent Claude qui prend le contrôle de votre ordinateur pour exécuter des tâches multi-étapes (navigation, formulaires)',
          'MCP (Model Context Protocol) : standard ouvert pour connecter Claude à vos outils internes (CRM, base de données, API)',
          'Claude Code en CLI : agent autonome pour développeurs (refactor, debug, génération de tests, code review)',
          'Sub-agents : déléguer des sous-tâches à plusieurs Claude spécialisés en parallèle (recherche, rédaction, analyse)',
          'Fenêtre 200k tokens : digérer rapports annuels (300+ pages), contrats longs, codebases entières en une requête',
          'API Anthropic : intégrer Claude dans vos outils internes (cas concrets sans compétence dev avancée)',
          'Comparatif Claude / GitHub Copilot / Cursor pour le code : quand utiliser chaque outil selon la tâche',
          'Plan d\'action 30 jours : industrialiser Claude dans les rituels d\'équipe, gouvernance des données, bibliothèque de Projects et Skills',
        ],
      },
    ],

    faq: [
      {
        q: 'Qu\'est-ce que Claude (Anthropic) et en quoi est-il différent de ChatGPT ?',
        a: "Claude est l'assistant IA développé par Anthropic, une entreprise fondée en 2021 par d'anciens chercheurs d'OpenAI (l'éditeur de ChatGPT). Claude et ChatGPT sont tous deux des assistants IA de grande qualité, mais avec des points forts distincts. Claude se distingue par sa fenêtre contextuelle très large (jusqu'à 200 000 tokens selon la version), ses performances supérieures sur les tâches de rédaction professionnelle longue et d'analyse de documents, et une approche de sécurité particulièrement rigoureuse développée sous le nom de \"Constitutional AI\". ChatGPT dispose d'un écosystème de plugins plus riche et d'une intégration DALL-E pour la génération d'images.",
      },
      {
        q: 'Pourquoi se former à Claude plutôt qu\'à ChatGPT ?',
        a: "Le choix dépend de votre métier. Claude est particulièrement adapté aux professionnels qui traitent de gros volumes documentaires (juristes, consultants, analystes, financiers, directeurs de projets) et aux équipes qui valorisent la prudence et la nuance dans les réponses IA. Si votre travail consiste principalement à produire et analyser des documents longs, Claude vous donnera des sorties de meilleure qualité avec moins de corrections. Si votre équipe a déjà investi dans l'écosystème OpenAI (GPTs, API, intégrations), continuer avec ChatGPT peut être plus pertinent. Masteria propose des formations pour les deux outils.",
      },
      {
        q: 'Claude est-il sécurisé pour les données confidentielles d\'entreprise ?',
        a: "Anthropic propose une offre Claude for Enterprise qui intègre des garanties de confidentialité renforcées : les données ne sont pas utilisées pour entraîner les modèles, un accord de traitement des données (DPA) est disponible, et des options de déploiement sur infrastructure dédiée existent pour les organisations avec des exigences de souveraineté strictes. Pour la version standard de Claude.ai, les données sont soumises à la politique de confidentialité d'Anthropic, qui exclut leur utilisation pour l'entraînement des modèles si l'option est désactivée. La formation Masteria inclut un module sur les niveaux de confidentialité selon la version utilisée.",
      },
      {
        q: 'La formation Claude est-elle finançable par l\'OPCO ?',
        a: "Oui. Masteria est certifié Qualiopi, ce qui rend la formation Claude finançable via votre OPCO dans le cadre du Plan de Développement des Compétences. Le tarif en intra-entreprise est de 1 980 € par jour pour un groupe jusqu'à 12 personnes (3 960 € pour les 2 jours de 14 h, soit ~330 € par personne pour 12 participants). L'accompagnement individuel sur mesure est facturé 1 980 € par jour. La formation est disponible en présentiel dans toute la France, la Belgique et la Suisse, ainsi qu'en distanciel.",
      },
      {
        q: 'Quels métiers bénéficient le plus de Claude ?',
        a: "Les métiers qui traitent de gros volumes documentaires tirent le plus grand bénéfice de Claude. En premier lieu : les juristes et avocats (analyse de contrats longs, recherche de clauses, comparaison de versions), les consultants (synthèse de due diligences, rapports d'analyse, notes de recommandation), les analystes financiers (lecture de rapports annuels, extraction de données financières), les profils compliance et audit, et les directeurs de projets complexes. Les équipes de communication et de RH bénéficient également de la qualité rédactionnelle supérieure de Claude sur les contenus longs.",
      },
      {
        q: 'Claude peut-il vraiment analyser des documents de 100 pages ?',
        a: "Oui. Claude Sonnet 5 et Claude Opus 4.8 disposent d'une fenêtre contextuelle de 200 000 tokens, ce qui correspond à environ 150 000 mots ou 500 à 600 pages de texte selon la mise en forme. En pratique, on peut soumettre un contrat de 100 pages et demander à Claude d'en extraire toutes les clauses de résiliation, d'identifier les obligations des parties ou de comparer deux versions du même document. Cette capacité est vérifiée et testée en formation Masteria sur des documents réels fournis par les participants. La précision diminue légèrement sur les documents les plus volumineux, la formation inclut les stratégies pour maintenir la qualité.",
      },
    ],
  },


  // ─────────────────────────────────────────────────────────────────────────
  // MISTRAL AI
  // ─────────────────────────────────────────────────────────────────────────
  mistral: {

    why: [
      {
        title: 'Exploiter une IA française, hébergée en Europe et conforme au RGPD par conception',
        body: "Mistral AI est la référence européenne de l'intelligence artificielle générative. Ses modèles sont conçus et entraînés en France, hébergés dans des datacenters européens, et soumis au cadre juridique européen. Pour les organisations soumises à des exigences de souveraineté numérique (secteur public, santé, finance, défense) ou à des politiques de gouvernance des données strictes, Mistral offre un niveau de garantie que les acteurs américains ne peuvent pas égaler sans arrangements contractuels complexes.",
      },
      {
        title: 'Obtenir des contenus en français d\'une qualité naturellement hexagonale',
        body: "Les modèles Mistral ont été entraînés avec un corpus particulièrement riche en contenus francophones. Les textes produits sonnent naturellement français, évitent les tournures calquées de l'anglais et maîtrisent les registres de langue du français soutenu au français courant. Pour les équipes qui produisent des contenus institutionnels, juridiques, RH ou marketing destinés à un public français, l'écart qualitatif est perceptible dès les premières productions.",
      },
      {
        title: 'Bénéficier d\'options de déploiement uniques : cloud public, cloud privé, on-premise',
        body: "Contrairement aux autres grands fournisseurs d'IA générative, Mistral propose une gamme complète d'options de déploiement : API publique (La Plateforme), cloud privé dédié, et déploiement on-premise sur vos propres serveurs via des licences commerciales. Les modèles ouverts (Mistral 7B, Mixtral) peuvent même être déployés gratuitement sur votre infrastructure. Cette flexibilité est essentielle pour les directions techniques soumises à des contraintes réglementaires fortes.",
      },
    ],

    programme: [
      {
        day: 1,
        title: 'Vibe Pro/Enterprise (anciennement Le Chat), Mistral Large 2, Codestral, fonctionnalités souveraines',
        items: [
          'Panorama 2026 : Vibe Free, Pro, Enterprise · Mistral Large 2 · Mistral Medium 3 · Codestral · Ministral (small)',
          'Architecture souveraine : hébergement Scaleway, OVHcloud, Microsoft Azure France, options on-premise via open-weight',
          'Vibe Pro : Projects (espaces persistants), web search natif, génération d\'images, Code Interpreter',
          'Vibe Enterprise : SSO, RBAC, audit trail, conformité RGPD article 28, contrat de traitement',
          'Maîtrise du français natif : pourquoi Mistral produit un français supérieur aux modèles US (corpus FR dense)',
          'Cas d\'usage juridiques et financiers : analyse de contrats, notes de conformité, rapports CSRD/Pilier 3',
          'Conformité RGPD article 9 : traiter les données de catégorie particulière (santé, vie syndicale) avec Mistral',
        ],
      },
      {
        day: 2,
        title: 'API Mistral, Codestral, on-premise, agents et intégrations',
        items: [
          'API Mistral (La Plateforme) : intégrer Mistral dans vos outils internes, function calling, structured output',
          'Codestral : modèle spécialisé code (production, debug, refactor) déployable on-premise pour codebases sensibles',
          'Mistral Embed : créer des bases de connaissances vectorielles internes (RAG) pour vos documents',
          'Modèles open-weight (Mistral 7B, Mixtral 8x22B, Mistral Small) : déploiement gratuit sur infrastructure GPU interne',
          'Ministral on-device : modèles légers déployables sur edge / mobile pour cas d\'usage offline',
          'Comparatif Mistral / ChatGPT / Claude / Gemini : quand choisir Mistral (souveraineté + français + on-premise)',
          'Architecture cible : choisir entre API publique, cloud privé, on-premise selon vos contraintes réglementaires',
          'Plan d\'action 30 jours : politique d\'usage, gouvernance données, conformité DORA / CSRD / Pilier 3',
        ],
      },
    ],

    faq: [
      {
        q: "Qu'est-ce que Mistral AI et pourquoi s'y former ?",
        a: "Mistral AI est une société française fondée en 2023 par d'anciens chercheurs de Google DeepMind et Meta. Elle développe des grands modèles de langage (Mistral Large, Mixtral, Codestral) et propose un assistant conversationnel appelé Vibe (anciennement Le Chat). Se former à Mistral présente trois intérêts majeurs : la qualité du français produit est supérieure aux modèles américains sur les registres soutenus et institutionnels, les garanties de souveraineté et de confidentialité sont natives (hébergement UE, conformité RGPD par conception), et les options de déploiement (dont on-premise) sont uniques sur le marché. Masteria forme vos équipes en 2 jours (14 heures) sur leurs cas d'usage réels.",
      },
      {
        q: "Mistral est-il aussi performant que ChatGPT ou Claude ?",
        a: "Sur de nombreux benchmarks publics, Mistral Large se classe au niveau de GPT-5 et de Claude Sonnet 5. Sur les tâches en français, notamment sur les productions soutenues et institutionnelles, Mistral prend souvent l'avantage. Sur certaines tâches de raisonnement très avancées ou d'analyse de documents très longs (plus de 100 pages), Claude reste en tête. La formation Masteria vous apprend à choisir le bon outil selon la tâche, avec des comparaisons pratiques sur vos propres cas d'usage.",
      },
      {
        q: "Mistral est-il vraiment conforme RGPD ?",
        a: "Mistral AI est une société européenne soumise directement au RGPD et opérant depuis l'Union européenne. Ses garanties de confidentialité sont natives plutôt qu'ajoutées a posteriori : hébergement en Europe, données clients non utilisées pour entraîner les modèles (sur les offres entreprise), DPA standard disponible, options de déploiement on-premise pour les données les plus sensibles. Pour un DPO, le dossier Mistral est structurellement plus simple à instruire que celui d'un acteur américain. La formation inclut un module sur la conformité et les bonnes pratiques.",
      },
      {
        q: "La formation Mistral AI est-elle finançable par l'OPCO ?",
        a: "Oui. Masteria est certifié Qualiopi, ce qui rend la formation Mistral finançable via votre OPCO dans le cadre du Plan de Développement des Compétences. Le tarif en intra-entreprise est de 1 980 € par jour pour un groupe jusqu'à 12 personnes (3 960 € pour les 2 jours de 14 h, soit ~330 € par personne pour 12 participants). L'accompagnement individuel sur mesure est facturé 1 980 € par jour. La formation est disponible en présentiel dans toute la France, la Belgique et la Suisse, ainsi qu'en distanciel.",
      },
      {
        q: "Peut-on vraiment déployer Mistral sur nos propres serveurs ?",
        a: "Oui, c'est un vrai différentiel de Mistral sur le marché. Les modèles ouverts (Mistral 7B, Mixtral 8x7B, Mixtral 8x22B) sont disponibles en open source et peuvent être déployés sur votre infrastructure avec des outils comme vLLM ou Ollama. Pour les modèles plus performants (Mistral Large, Codestral), des licences commerciales permettent un déploiement on-premise ou en cloud privé dédié. C'est particulièrement pertinent pour les secteurs réglementés : défense, santé, finance, secteur public. La formation couvre les modalités, les coûts et les cas d'usage adaptés à chaque option.",
      },
      {
        q: "Quels métiers bénéficient le plus de Mistral AI ?",
        a: "Mistral est particulièrement adapté aux équipes qui produisent du contenu en français et/ou qui manipulent des données sensibles. En premier lieu : les juristes et directions juridiques (droit français, contrats en français, confidentialité des dossiers), les équipes RH (documents RH en français, données personnelles), la communication institutionnelle (qualité du français soutenu), les équipes marketing B2B France (copywriting français natif), les directions financières (données confidentielles) et les DSI (souveraineté numérique, déploiement on-premise). Pour les équipes travaillant principalement en anglais ou avec des besoins d'intégration dans l'écosystème Microsoft ou Google, ChatGPT, Copilot ou Gemini peuvent rester plus adaptés.",
      },
    ],
  },


  // ─────────────────────────────────────────────────────────────────────────
  // SPRINT IA
  // ─────────────────────────────────────────────────────────────────────────
  'sprint-ia': {

    why: [
      {
        title: "Acculturer rapidement plusieurs centaines de collaborateurs sans bloquer leur agenda",
        body: "Les formations IA classiques de 1 ou 2 jours sont précieuses pour faire monter en compétence des équipes ciblées, mais elles deviennent un goulot d'étranglement dès qu'on doit toucher 200, 500 ou 2 000 personnes en quelques mois. Sprint IA répond à ce besoin par un atelier intelligence artificielle de 3 heures, ciblé, pratique, animable en présentiel ou en visioconférence avec 12 à 100 participants par session, déployable en cascade pour atteindre toute une organisation en 6 à 8 semaines.",
      },
      {
        title: "Couvrir l'obligation de littératie IA prévue par l'AI Act, dès 2026",
        body: "L'article 4 du règlement européen sur l'intelligence artificielle impose, depuis février 2025, que toute personne utilisant un système d'IA dans un cadre professionnel dispose d'un niveau de connaissances suffisant. Sprint IA Sensibilisation et Sprint IA AI Act, combinés, couvrent cette obligation à l'échelle d'une entreprise, avec une traçabilité Qualiopi et des feuilles d'émargement opposables.",
      },
      {
        title: "Un atelier construit sur les cas réels des participants, pas sur la démonstration",
        body: "La différence entre un atelier intelligence artificielle qui change les pratiques et une conférence qu'on oublie tient à une chose : qui a les mains sur le clavier. Dans un Sprint IA, chaque participant apporte un ou deux cas réels de son poste (un mail difficile, un tableau à analyser, un document à synthétiser) et repart avec le résultat produit pendant la session, la méthode pour le refaire, et une bibliothèque de prompts adaptée à son métier. Les apports théoriques ne dépassent jamais quinze minutes d'affilée : le reste du temps, on produit, le formateur passe, corrige, montre le geste. C'est ce qui rend le format efficace à 12 comme à 100 participants, en présentiel comme en visioconférence.",
      },
      {
        title: "Tester un format court avant d'engager un plan de formation à plus grande échelle",
        body: "Beaucoup de DRH et responsables formation hésitent à engager un budget IA conséquent sans avoir mesuré l'appétence réelle de leurs équipes. Un Sprint IA déployé sur un échantillon de 50 à 100 collaborateurs permet de mesurer le NPS, l'usage réel post-formation et la maturité des cas d'usage. C'est un investissement minimal (à partir de 1 980 € en intra) qui éclaire les décisions suivantes.",
      },
    ],

    programme: [
      {
        day: 1,
        title: "Structure type d'un atelier Sprint IA de 3 heures",
        items: [
          "1ère heure, fondamentaux : panorama IA générative (ChatGPT, Copilot, Gemini, Claude, Mistral), confidentialité, RGPD et AI Act",
          "2e heure, manipulation guidée : chaque participant prompte sur un cas réel apporté en amont, avec guide formateur en direct",
          "3e heure, mise en application : bibliothèque de prompts à emporter, plan d'action 30 jours, Q&A",
          "Restitution : feuille d'émargement Qualiopi, attestation de présence, kit pédagogique numérique",
          "Suivi à 30 jours : un mini-sondage NPS et 1 question ouverte sur l'usage réel post-formation",
        ],
      },
      {
        day: 1,
        title: "6 déclinaisons disponibles selon le besoin",
        items: [
          "Sprint IA Sensibilisation : socle commun pour conventions, séminaires, déploiements grande échelle",
          "Sprint IA Prompts : méthode CRTF (Contexte, Rôle, Tâche, Format) pour structurer ses prompts",
          "Sprint IA Excel : tableaux croisés, formules, détection d'anomalies, premier mini-dashboard",
          "Sprint IA Managers : exemplarité, cartographie d'équipe, objectifs IA dans les EAD",
          "Sprint IA Veille : combo Feedly + ChatGPT + Perplexity, première synthèse hebdomadaire pendant le Sprint",
          "Sprint IA AI Act : article 4, classifications de risque, calendrier 2026 et 2027, plan de conformité",
        ],
      },
      {
        day: 1,
        title: "Déployer une série d'ateliers dans l'entreprise",
        items: [
          "Préparation : un échange de cadrage par population (cas d'usage attendus, outils et licences en place, niveau réel), les participants apportent 1 à 2 cas concrets",
          "Cascade : les sessions s'enchaînent par équipes ou par sites, en présentiel ou en visioconférence, jusqu'à couvrir la population visée sans bloquer l'activité",
          "Packages dégressifs à partir de 5 sessions ; le contenu s'adapte à chaque population (métiers, managers, fonctions support) à partir du même socle",
          "Après chaque session : kit pédagogique numérique, bibliothèque de prompts, plan d'action 30 jours ; sondage NPS et question ouverte sur l'usage réel à 30 jours",
          "Suite naturelle : les équipes qui doivent aller plus loin enchaînent sur une formation métier de 1 ou 2 jours, les référents sur un parcours dédié",
        ],
      },
    ],

    faq: [
      {
        q: "Qu'est-ce qu'un atelier intelligence artificielle et pour qui est-il fait ?",
        a: "Un atelier intelligence artificielle est une session courte et pratique où chaque participant manipule l'IA générative sur un cas réel de son poste, avec un formateur qui guide en direct. Chez Masteria, ce format s'appelle Sprint IA : 3 heures, six déclinaisons (sensibilisation, prompts, Excel, managers, veille, AI Act), en présentiel dans vos locaux ou à distance. Il est fait pour les entreprises qui veulent acculturer vite une équipe ou toucher un grand nombre de collaborateurs, en complément des formations d'une ou deux journées qui font monter en compétence un métier.",
      },
      {
        q: "Sprint IA ou formation 2 jours, comment choisir ?",
        a: "Sprint IA cible les besoins d'acculturation à grande échelle, de sensibilisation transverse ou de mise en conformité (AI Act). La formation 2 jours est nécessaire pour faire monter en compétence opérationnelle des équipes ciblées (marketing, finance, RH…) sur des cas d'usage métier complexes. Beaucoup de clients combinent les deux : Sprint pour la base élargie (100 à 500 personnes), formation 2 jours pour les 20 à 30 référents IA internes.",
      },
      {
        q: "Combien de participants par session de Sprint IA ?",
        a: "12 à 15 participants en intra-entreprise pour conserver une vraie interaction et la manipulation guidée. Format webinar : jusqu'à 50 à 100 participants avec Q&A structuré et démonstrations guidées. Pour les déploiements grande échelle (200 à 2 000 personnes), nous enchaînons 8 à 20 sessions sur 6 à 10 semaines, avec un même formateur ou en duo, et un kit pédagogique unifié.",
      },
      {
        q: "Sprint IA est-il finançable par l'OPCO ?",
        a: "Oui. Sprint IA est éligible aux financements OPCO comme toutes les formations Masteria, organisme certifié Qualiopi. Tarif intra-entreprise : 1 980 € HT par session jusqu'à 12 personnes. Accompagnement individuel : 1 980 € HT par session. Packages dégressifs à partir de 5 sessions (utiles pour les déploiements managériaux ou de conformité AI Act). Notre équipe accompagne le montage du dossier OPCO et fournit toutes les pièces sous 24 h.",
      },
      {
        q: "Peut-on construire un Sprint IA sur mesure ?",
        a: "Oui, c'est même fréquent pour les grands comptes. À partir d'un Sprint type, nous adaptons les cas d'usage, les exemples, les supports visuels (charte graphique de l'entreprise) et la bibliothèque de prompts livrée. L'animation reste de 3 heures. Pour les besoins très spécifiques (secteur régulé, outil interne, contrainte de souveraineté), un Sprint IA sur mesure peut être conçu en 2 à 3 semaines à partir d'un cadrage gratuit.",
      },
      {
        q: "Comment se déroule concrètement une session ?",
        a: "Sprint IA est un format alternant théorie courte (15 minutes max) et ateliers pratiques. Les participants sont invités à apporter 1 à 2 cas d'usage réels en amont (les modalités sont précisées dans l'invitation). Pendant la session, ils manipulent ChatGPT et Copilot sur leurs vrais cas, repartent avec une bibliothèque de prompts pré-remplie et un plan d'action 30 jours. Les supports sont remis en numérique en fin de session.",
      },
      {
        q: "Sprint IA AI Act, à qui s'adresse ce format ?",
        a: "Sprint IA AI Act cible les DSI, DPO, juristes, RH, managers et dirigeants qui doivent piloter la mise en conformité IA Act dans leur périmètre. Aucun prérequis juridique n'est nécessaire : la formation explique les notions clés à partir d'exemples concrets et livre un mini plan d'action 90 jours, 6 mois et 12 mois. Combinable avec Sprint IA Sensibilisation pour couvrir l'obligation de littératie IA (article 4) à l'échelle d'une entreprise.",
      },
      {
        q: "Un atelier intelligence artificielle peut-il se tenir à distance ?",
        a: "Oui, le format est conçu pour les deux. En présentiel, l'atelier se tient dans vos locaux, jusqu'à 12 à 15 participants pour garder la manipulation guidée. En visioconférence, il monte à 50 voire 100 participants avec démonstrations guidées et questions structurées ; les cas réels sont collectés en amont pour que la pratique reste concrète. Les entreprises multi-sites combinent souvent les deux : présentiel sur le site principal, visio pour les équipes distantes.",
      },
      {
        q: "Que se passe-t-il après l'atelier ?",
        a: "Chaque participant repart avec le kit pédagogique, la bibliothèque de prompts de sa population et un plan d'action de 30 jours. Un mini-sondage à 30 jours mesure l'usage réel et fait remonter les besoins d'approfondissement. Pour les équipes qui doivent aller plus loin, la suite logique est une formation métier de 1 ou 2 jours sur leurs processus, ou un parcours de référents pour ancrer la dynamique en interne.",
      },
      {
        q: "L'atelier couvre-t-il l'obligation de littératie IA de l'article 4 ?",
        a: "Il y contribue directement : l'article 4 du règlement européen demande un niveau de maîtrise adapté au contexte pour toute personne qui utilise un système d'IA dans un cadre professionnel. Un Sprint IA Sensibilisation ou AI Act documente cette action (émargement Qualiopi, attestation, contenu daté), ce qui alimente le dossier de conformité. Pour les populations qui utilisent l'IA intensivement, une formation plus complète reste le bon niveau de réponse.",
      },
    ],
  },


  // ─────────────────────────────────────────────────────────────────────────
  // MULTI-OUTILS
  // ─────────────────────────────────────────────────────────────────────────
  'multi-outils': {

    why: [
      {
        title: "Comparer les 5 IA sur vos vrais cas d'usage avant d'arbitrer",
        body: "ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral ne se valent pas selon le contexte : intégration Microsoft 365, respect du RGPD, qualité du français, raisonnement long, écosystème Google. La formation Multi-outils place les 5 IA côte à côte sur les vrais cas d'usage de votre équipe pour vous donner une grille de décision factuelle, pas un comparatif marketing.",
      },
      {
        title: "Faire monter une équipe en compétence sans imposer un outil unique",
        body: "Toutes les organisations n'ont pas besoin du même outil, et toutes les équipes n'ont pas le même environnement (Microsoft 365, Google Workspace, contraintes de souveraineté). Le format Multi-outils outille chaque participant sur les 2 ou 3 IA les plus pertinentes pour son métier, plutôt que d'imposer un outil unique qui ne couvrirait que 60 % des besoins.",
      },
      {
        title: "Préparer un appel d'offres IA ou un choix de stack interne en connaissance de cause",
        body: "Avant d'engager 50 000 € à 500 000 € sur une stack IA d'entreprise (licences, intégration, formation), former les décideurs et les utilisateurs clés au comparatif des 5 IA évite des choix coûteux à reverser. La formation Multi-outils est régulièrement utilisée comme étape préalable à un appel d'offres ou à une négociation éditeur.",
      },
    ],

    programme: [
      {
        day: 1,
        title: "Panorama et fondamentaux multi-outils",
        items: [
          "Comprendre les différences concrètes entre ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral",
          "Maîtriser une méthode de prompt universelle (CRTF) qui fonctionne sur les 5 outils",
          "Tester chaque outil sur le même cas d'usage métier et comparer les résultats",
          "Construire une grille de décision : quel outil pour quel type de tâche dans votre équipe",
          "Comprendre les enjeux de confidentialité, RGPD et AI Act selon l'outil choisi",
        ],
      },
      {
        day: 2,
        title: "Cas d'usage métier et plan de déploiement",
        items: [
          "Décliner les cas d'usage métier des participants sur les 2 ou 3 outils les plus pertinents",
          "Industrialiser les prompts : bibliothèque partagée, system prompts, modèles réutilisables",
          "Identifier les complémentarités d'outils (ex : Claude pour les documents longs + Copilot pour Excel)",
          "Construire un plan de déploiement IA sur 30, 60 et 90 jours adapté à votre stack",
          "Définir un cadre d'usage interne : ce qui est OK, ce qui ne l'est pas, comment escalader un doute",
        ],
      },
    ],

    faq: [
      {
        q: "Pourquoi former mon équipe sur 5 outils plutôt que sur un seul ?",
        a: "Parce que les outils ont des forces complémentaires : Microsoft Copilot est imbattable pour les utilisateurs Microsoft 365, Claude excelle sur les documents longs, Mistral assure la souveraineté européenne, ChatGPT reste la référence générale. Former sur un seul outil limite mécaniquement le périmètre des cas d'usage couverts. La formation Multi-outils permet de choisir le bon outil pour chaque tâche, plutôt que de plier toutes les tâches à un outil unique.",
      },
      {
        q: "La formation Multi-outils est-elle finançable par l'OPCO ?",
        a: "Oui. La formation Multi-outils est éligible aux financements OPCO comme toutes les formations Masteria, organisme certifié Qualiopi. Le tarif en intra-entreprise est de 1 980 € HT par jour pour un groupe jusqu'à 12 personnes. L'accompagnement individuel sur mesure est de 1 980 € HT par jour. Notre équipe accompagne le montage du dossier OPCO et fournit les pièces nécessaires sous 24 h.",
      },
      {
        q: "Faut-il avoir déjà utilisé un outil IA avant de suivre la formation ?",
        a: "Non. La formation Multi-outils est conçue pour des participants qui découvrent l'IA générative ou qui ont une expérience inégale d'un outil à l'autre. La première demi-journée pose les fondamentaux communs (prompt, contexte, contraintes, formats) avant d'attaquer le comparatif. Pour les équipes déjà bien outillées sur un seul outil, la formation permet de tester rapidement les 4 autres et de mesurer l'écart.",
      },
      {
        q: "À quoi sert la grille de décision construite pendant la formation ?",
        a: "La grille de décision permet à chaque participant de savoir quel outil utiliser pour quelle tâche, sans avoir à se reposer la question à chaque fois. Elle articule plusieurs critères : type de tâche (rédaction, analyse, automatisation), volume de données, sensibilité (RGPD, secret professionnel), environnement de travail (Microsoft 365, Google Workspace), budget. Cette grille est partagée à la fin de la formation et peut servir de base à une charte IA d'équipe.",
      },
      {
        q: "Peut-on construire un parcours Multi-outils sur mesure ?",
        a: "Oui. Le format Multi-outils existe en 12 déclinaisons métier (marketing, RH, finance, commercial, communication, management, achats, assistantes, SEO, service client, informatique, pédagogique). Pour les organisations avec un besoin spécifique (secteur régulé, outil interne, contrainte de stack), nous construisons un parcours sur mesure en intra-entreprise : audit préalable, design pédagogique dédié, livrables adaptés. Cadrage gratuit, devis sous 24 h.",
      },
      {
        q: "Quels outils sont effectivement comparés ?",
        a: "Les 5 IA génératives leader du marché en 2026 : ChatGPT (OpenAI), Microsoft Copilot, Google Gemini, Claude (Anthropic) et Mistral AI. La formation couvre les versions grand public et les versions Entreprise lorsqu'elles existent (ChatGPT Enterprise, Copilot pour Microsoft 365, Gemini Workspace, Claude pour Entreprises, Vibe Pro (anciennement Le Chat) et Mistral on-premise). Les outils sont testés sur les vrais comptes des participants quand ils en disposent, ou sur des comptes de démonstration sinon.",
      },
    ],
  },

};
