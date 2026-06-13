// Données du cluster « solutions IA sur mesure » — pages par TYPE DE LIVRABLE.
// Intention bas de funnel, solution-aware : l'entreprise sait quel type de
// solution elle cherche (copilote, RAG documentaire, agent support, etc.).
//
// 7 solutions, chacune un objet UNIQUE (250-400 mots de contenu propre) lu par
// le template SolutionIAPage.jsx via getSolution(slug). Le hub /solutions-ia
// présente les 7 cartes.
//
// POSITIONNEMENT : conseil + développement sur mesure high-ticket, orienté
// CAPACITÉ. Aucun cas client nommé, aucun chiffre de résultat fabriqué, aucun
// logo inventé. Les exemples sectoriels sont GÉNÉRIQUES (« une PME industrielle »,
// « un cabinet juridique »). Le code développé appartient au client.
// PAS d'OPCO/Qualiopi mis en avant (le développement sur mesure n'est pas
// finançable OPCO ; seule la formation l'est).
//
// Modèle d'engagement réel à mettre en avant : Masteria peut détacher un ou
// plusieurs développeurs IA en régie, sur site ou à distance, pour les
// environnements sensibles ou une montée en charge (onsiteDevNote).
//
// Palette/typo : gérées par le template. Ici : du texte, des slugs, des secteurs.

export const SOLUTIONS = [
  {
    slug: 'copilote-ia-interne',
    name: 'Copilote IA interne',
    icon: 'Bot',
    cardSummary:
      "Un assistant métier connecté à vos données et à vos outils, qui répond, rédige et déclenche des actions dans le périmètre que vous définissez.",
    h1: "Copilote IA interne : un assistant métier connecté à vos données",
    metaTitle: 'Copilote IA interne sur mesure | Masteria',
    metaDesc:
      "Copilote IA interne connecté à vos données et outils : réponses sourcées, rédaction, actions encadrées. Sur mesure, code livré. Cadrage gratuit.",
    directAnswer:
      "Un copilote IA interne est un assistant conçu pour un métier précis, branché sur vos données et vos applications. Il répond avec des sources, rédige vos documents et déclenche des actions encadrées. Masteria le développe sur mesure, l'intègre à votre système d'information et vous en transfère le code.",
    whatItIs:
      "Un copilote IA interne est un assistant conversationnel privé, pensé pour un métier et un périmètre donnés : direction commerciale, RH, juridique, support, opérations. À la différence d'un chatbot grand public, il connaît votre contexte parce qu'il est connecté à vos documents, vos bases et vos outils. Concrètement, il sert à retrouver une information dans un fonds documentaire volumineux, à rédiger à partir de vos modèles et de votre terminologie, à préparer une réponse ou un dossier, et à déclencher des actions simples dans vos applications (créer une fiche, mettre à jour un statut, envoyer un récapitulatif). L'objectif est l'usage quotidien par vos équipes, pas la démonstration : un collaborateur pose sa question en langage naturel et obtient une réponse fondée sur la réalité de l'entreprise, avec les sources citées et un périmètre d'action maîtrisé.",
    howWeBuild: [
      {
        title: 'Cadrage du périmètre et des usages',
        desc: "Nous identifions le métier cible, les questions récurrentes, les documents et systèmes à connecter, et le critère de réussite. Ce cadrage fixe ce que le copilote doit savoir faire, et surtout ce qu'il ne doit pas faire.",
      },
      {
        title: 'Prototype sur un cas réel',
        desc: "Nous construisons une première version sur un périmètre prioritaire, avec vos vrais documents. Vos équipes la testent en conditions réelles et jugent la pertinence des réponses avant tout développement complet.",
      },
      {
        title: 'Développement et intégration',
        desc: "Nous développons le copilote, le branchons sur vos données (RAG) et vos outils via API ou MCP, posons les garde-fous, la gestion des accès et la journalisation, puis l'intégrons à votre environnement de travail.",
      },
      {
        title: 'Déploiement et transfert',
        desc: "Nous accompagnons la mise en production, formons vos équipes à l'utiliser et à le superviser, et vous transmettons le code et la documentation. Vous restez propriétaire et autonome.",
      },
    ],
    techApproach:
      "Le copilote s'appuie sur une approche multi-LLM (Claude, GPT, Mistral et autres) : nous choisissons le modèle selon le cas d'usage, le coût et vos contraintes de confidentialité, sans dépendance à un fournisseur unique. Les réponses sont ancrées dans vos contenus par du RAG (retrieval-augmented generation), ce qui limite les approximations et permet de citer les sources. La connexion à vos applications passe par des API documentées et des connecteurs MCP, avec des actions encadrées et une validation humaine sur les opérations sensibles. La gestion des accès respecte vos droits internes : un collaborateur ne voit que ce qu'il a le droit de voir. Selon vos exigences de conformité, l'hébergement peut se faire dans l'Union européenne et les données sensibles rester cloisonnées.",
    useCasesBySector: [
      { sector: 'Services et conseil', usage: "Un copilote qui retrouve une clause, un précédent ou une méthodologie dans la base de connaissances du cabinet, et prépare un premier livrable à partir des modèles maison." },
      { sector: 'Industrie', usage: "Un copilote branché sur la documentation technique et qualité, qui répond aux questions des équipes terrain et prépare des fiches à partir des données produit." },
      { sector: 'Banque, finance et assurance', usage: "Un copilote interne qui aide les conseillers à formuler une réponse conforme à partir des procédures, avec traçabilité et validation humaine sur les points réglementaires." },
      { sector: 'Fonctions support (RH, achats)', usage: "Un copilote qui répond aux questions récurrentes des collaborateurs (congés, notes de frais, procédures) à partir des documents internes, et délaisse les sujets sensibles à un humain." },
    ],
    sectorLinks: [
      { label: 'IA pour le juridique', href: '/ia-juridique' },
      { label: 'IA pour les RH', href: '/ia-services-conseil' },
      { label: 'IA pour la finance', href: '/ia-banque-assurance' },
    ],
    onsiteDevNote:
      "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Pour un copilote interne branché sur des données sensibles ou un système d'information cloisonné, ce modèle permet au code et aux données de rester dans votre périmètre, avec une montée en compétence de vos équipes au fil de l'eau. Nous le présentons comme une possibilité d'engagement, à arbitrer au cadrage selon vos contraintes de sécurité.",
    faq: [
      {
        q: 'Combien coûte un copilote IA interne sur mesure ?',
        a: "Le développement se chiffre au forfait, après cadrage. Sur le marché, un copilote interne connecté à vos données représente généralement un budget de l'ordre de 15 000 à 60 000 € selon le périmètre, le nombre de sources à connecter et le niveau d'intégration. Un prototype ciblé démarre plus bas. Chez Masteria, le premier échange de cadrage est gratuit et le devis est établi une fois le périmètre défini.",
      },
      {
        q: 'À qui appartient le code du copilote ?',
        a: "À vous. Le code développé pour votre copilote vous appartient, tout comme vos données, qui restent les vôtres à chaque étape. Nous documentons la solution et transférons la compétence à vos équipes pour qu'elles l'exploitent et la fassent évoluer en autonomie, sans dépendance imposée.",
      },
      {
        q: 'Nos données restent-elles confidentielles ?',
        a: "Oui. La confidentialité est un critère de conception. Les accès sont cloisonnés selon vos droits internes, les données sensibles peuvent rester dans un périmètre maîtrisé et, selon vos exigences, l'hébergement se fait dans l'Union européenne. Nous ne réutilisons jamais vos données pour entraîner des modèles.",
      },
      {
        q: 'En quoi diffère-t-il de ChatGPT ou d\'un assistant générique ?',
        a: "Un assistant grand public ignore votre contexte et ne se connecte pas à vos systèmes. Un copilote interne est branché sur vos documents, vos bases et vos outils : il répond avec vos sources, applique vos droits d'accès et déclenche des actions encadrées dans vos applications. Vous en êtes propriétaire, au lieu de dépendre d'un abonnement à une plateforme fermée.",
      },
    ],
    relatedSolutions: ['assistant-documentaire-ia', 'integration-llm-rag', 'agent-commercial-ia'],
  },
  {
    slug: 'assistant-documentaire-ia',
    name: 'Assistant documentaire IA',
    icon: 'Database',
    cardSummary:
      "Un moteur de réponse sur votre base documentaire : vos documents deviennent interrogeables en langage naturel, avec des réponses sourcées.",
    h1: "Assistant documentaire IA : interroger votre base documentaire en langage naturel",
    metaTitle: 'Assistant documentaire IA (RAG) sur mesure | Masteria',
    metaDesc:
      "Assistant documentaire IA (RAG) sur votre base : réponses sourcées, recherche en langage naturel dans vos documents. Code livré. Cadrage gratuit.",
    directAnswer:
      "Un assistant documentaire IA rend votre base documentaire interrogeable en langage naturel. Au lieu de chercher dans des dossiers, vos équipes posent une question et obtiennent une réponse synthétique avec les sources citées. Masteria le construit en RAG sur vos documents, l'intègre à vos outils et vous en livre le code.",
    whatItIs:
      "Un assistant documentaire IA est un moteur de réponse branché sur votre fonds documentaire : procédures, contrats, fiches techniques, comptes rendus, base de connaissances, archives. Plutôt que de parcourir des dossiers ou des intranets, un collaborateur pose une question en langage naturel et reçoit une réponse synthétique, accompagnée des extraits et des documents sources qui la justifient. Il sert à répondre vite à une question métier précise, à retrouver une information noyée dans des centaines de pages, à comparer des versions de documents ou à préparer une note à partir de plusieurs sources. La valeur tient autant à la rapidité d'accès qu'à la fiabilité : chaque réponse est traçable jusqu'au document d'origine, ce qui permet à l'utilisateur de vérifier et d'éviter les approximations. C'est la brique de référence quand la connaissance de l'entreprise est dispersée et que sa recherche fait perdre un temps significatif aux équipes.",
    howWeBuild: [
      {
        title: 'Cadrage du corpus et des questions',
        desc: "Nous délimitons les documents à couvrir, les types de questions à traiter et les exigences de confidentialité. Nous évaluons l'état des sources (formats, volume, qualité) et le critère de réussite attendu.",
      },
      {
        title: 'Prototype sur un sous-ensemble',
        desc: "Nous indexons un sous-ensemble représentatif et construisons un premier assistant. Vous testez la qualité des réponses et le sourçage sur vos vraies questions avant de couvrir l'ensemble du corpus.",
      },
      {
        title: 'Développement et indexation complète',
        desc: "Nous mettons en place la chaîne RAG complète : ingestion, découpage, indexation, récupération et génération de réponses sourcées. Nous intégrons l'assistant à vos outils (intranet, espace de travail, applications métier).",
      },
      {
        title: 'Déploiement et transfert',
        desc: "Nous accompagnons la mise en production, prévoyons la mise à jour du corpus dans le temps, formons vos équipes et vous transmettons le code et la documentation.",
      },
    ],
    techApproach:
      "Le cœur technique est le RAG (retrieval-augmented generation) : vos documents sont découpés, indexés dans une base vectorielle, puis les passages les plus pertinents sont récupérés et fournis au modèle pour générer une réponse ancrée dans vos contenus, avec citations. Nous travaillons en multi-LLM (Claude, GPT, Mistral) et sélectionnons le modèle selon le cas, le coût et la confidentialité. L'ingestion gère les formats réels (PDF, bureautique, exports d'outils métier) et une logique de mise à jour pour que l'index suive l'évolution de votre documentation. Les droits d'accès sont respectés au niveau de la récupération : un utilisateur ne reçoit que des réponses issues de documents auxquels il a droit. Selon vos contraintes, l'hébergement et l'indexation peuvent rester dans l'Union européenne, et les contenus sensibles cloisonnés. Aucune réutilisation de vos données pour entraîner des modèles.",
    useCasesBySector: [
      { sector: 'Cabinets juridiques', usage: "Interroger une base de contrats, de jurisprudence interne et de modèles pour retrouver une clause ou un précédent, avec le document source en appui." },
      { sector: 'Industrie et qualité', usage: "Rendre la documentation technique, les normes et les procédures qualité interrogeables par les équipes terrain et bureau d'études." },
      { sector: 'Santé et médico-social', usage: "Un assistant sur les protocoles et procédures internes, avec sourçage systématique et validation humaine, dans le respect de la confidentialité des données." },
      { sector: 'Collectivités et secteur public', usage: "Rendre interrogeables les délibérations, marchés et procédures administratives pour gagner du temps sur la recherche documentaire." },
    ],
    sectorLinks: [
      { label: 'IA pour le juridique', href: '/ia-juridique' },
      { label: 'IA pour la santé', href: '/ia-sante-pharma' },
      { label: "IA pour l'industrie", href: '/ia-industrie' },
    ],
    onsiteDevNote:
      "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Pour un assistant documentaire indexant des fonds confidentiels (contrats, dossiers, protocoles), ce modèle garde l'indexation et le code dans votre périmètre et accélère la couverture de vos corpus. Nous le proposons comme une possibilité d'engagement, à arbitrer au cadrage selon vos exigences de confidentialité.",
    faq: [
      {
        q: 'Combien coûte un assistant documentaire IA ?',
        a: "Le budget se chiffre au forfait après cadrage. Sur le marché, un assistant documentaire en RAG se situe couramment entre 12 000 et 50 000 € selon le volume de documents, la diversité des formats, les droits d'accès à gérer et le niveau d'intégration. Un prototype sur un corpus restreint démarre plus bas. Chez Masteria, le cadrage initial est gratuit et le devis suit la définition du périmètre.",
      },
      {
        q: 'À qui appartient la solution et l\'index ?',
        a: "À vous. Le code, la configuration et l'index construit sur vos documents vous appartiennent, comme les documents eux-mêmes. Nous documentons la chaîne RAG et transférons la compétence à vos équipes pour qu'elles ajoutent des sources et fassent évoluer l'assistant sans dépendre de nous.",
      },
      {
        q: 'L\'assistant peut-il inventer des réponses ?',
        a: "Le RAG est précisément conçu pour limiter ce risque : les réponses sont générées à partir de passages réels de vos documents et accompagnées des sources, ce qui rend chaque affirmation vérifiable. Sur les sujets sensibles, nous ajoutons des garde-fous et une invitation à vérifier la source. La traçabilité reste le meilleur rempart contre les approximations.",
      },
      {
        q: 'En quoi diffère-t-il d\'un moteur de recherche interne ?',
        a: "Une recherche classique renvoie une liste de documents à ouvrir et à lire. Un assistant documentaire en RAG comprend la question en langage naturel et renvoie une réponse synthétique directement, avec les extraits sources en appui. Vous gagnez le temps de lecture et de recoupement, tout en gardant la possibilité de vérifier chaque affirmation à la source.",
      },
    ],
    relatedSolutions: ['integration-llm-rag', 'copilote-ia-interne', 'agent-support-client-ia'],
  },
  {
    slug: 'agent-support-client-ia',
    name: 'Agent IA de support client',
    icon: 'MessagesSquare',
    cardSummary:
      "Un agent qui traite les demandes de support de bout en bout : qualification, réponse sourcée, escalade vers un humain sur les cas sensibles.",
    h1: "Agent IA de support client : traiter les demandes de bout en bout",
    metaTitle: 'Agent IA de support client sur mesure | Masteria',
    metaDesc:
      "Agent IA de support client : qualification, réponses sourcées, escalade humaine sur les cas sensibles. Sur mesure, code livré. Cadrage gratuit.",
    directAnswer:
      "Un agent IA de support client qualifie les demandes, répond à partir de votre base de connaissances et escalade les cas sensibles vers un humain. Branché sur votre outil de ticketing et vos données, il absorbe les demandes répétitives et fait gagner du temps à vos équipes. Masteria le développe sur mesure et vous en livre le code.",
    whatItIs:
      "Un agent IA de support client est un assistant qui prend en charge les demandes entrantes (chat, e-mail, formulaire, espace client) et les traite de bout en bout dans un périmètre défini. Il comprend la demande, la qualifie, cherche la réponse dans votre base de connaissances et vos procédures, formule une réponse sourcée, puis exécute une action simple si nécessaire (créer ou mettre à jour un ticket, envoyer un récapitulatif, router vers le bon service). Sur les demandes complexes, sensibles ou hors périmètre, il passe la main à un conseiller humain avec un résumé du contexte, plutôt que d'improviser. L'objectif n'est pas de remplacer le support mais de le décharger des demandes répétitives à faible valeur (suivi, questions fréquentes, premiers niveaux) pour que les équipes se concentrent sur les cas qui exigent un jugement humain. Chaque interaction est tracée, ce qui permet de mesurer ce qui est réellement absorbé et d'améliorer la base au fil du temps.",
    howWeBuild: [
      {
        title: 'Cadrage du périmètre de support',
        desc: "Nous analysons vos demandes entrantes, identifions celles qui se prêtent à l'automatisation et celles qui doivent rester humaines, et définissons les règles d'escalade et le critère de réussite.",
      },
      {
        title: 'Prototype sur les demandes fréquentes',
        desc: "Nous construisons un agent sur un périmètre prioritaire (les demandes les plus répétitives), branché sur votre base. Vous évaluez la qualité des réponses et le bon déclenchement des escalades en conditions réelles.",
      },
      {
        title: 'Développement et intégration',
        desc: "Nous développons l'agent, le connectons à votre outil de ticketing, votre base de connaissances et vos canaux (chat, e-mail), posons les garde-fous et la journalisation, et calibrons l'escalade vers les conseillers.",
      },
      {
        title: 'Déploiement et transfert',
        desc: "Nous accompagnons la mise en production progressive, formons vos équipes à superviser l'agent et à enrichir la base, et vous transmettons le code et la documentation.",
      },
    ],
    techApproach:
      "L'agent combine un modèle de langage (approche multi-LLM : Claude, GPT, Mistral, selon le cas et le coût) et du RAG sur votre base de connaissances pour répondre à partir de vos contenus réels, avec sources. Les actions (créer un ticket, router, envoyer un récapitulatif) passent par des connecteurs API ou MCP vers votre outil de support, avec un périmètre d'action strict et une validation humaine sur les cas définis comme sensibles. Les règles d'escalade sont explicites : l'agent sait reconnaître ce qu'il ne doit pas traiter et passe la main avec le contexte. Tout est journalisé pour le suivi qualité et l'amélioration continue de la base. La confidentialité des échanges client est traitée comme un critère de conception, avec cloisonnement des données et, selon vos exigences, un hébergement dans l'Union européenne.",
    useCasesBySector: [
      { sector: 'E-commerce et retail', usage: "Un agent qui traite le suivi de commande, les questions sur les retours et les demandes fréquentes, et escalade les litiges vers un conseiller." },
      { sector: 'Éditeurs de logiciels (SaaS)', usage: "Un agent de support de premier niveau branché sur la documentation produit, qui résout les questions courantes et ouvre un ticket qualifié pour les cas techniques." },
      { sector: 'Services et abonnements', usage: "Un agent qui répond aux questions sur les contrats, la facturation et les démarches, avec escalade humaine sur les réclamations." },
      { sector: 'Assurance et mutuelles', usage: "Un agent qui oriente l'assuré, répond aux questions générales sur les garanties et route vers un gestionnaire pour les dossiers sensibles, avec traçabilité." },
    ],
    sectorLinks: [
      { label: 'IA pour le e-commerce', href: '/ia-retail-ecommerce' },
      { label: "IA pour l'assurance", href: '/ia-banque-assurance' },
      { label: 'IA pour les RH', href: '/ia-services-conseil' },
    ],
    onsiteDevNote:
      "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Pour un agent de support relié à des données clients sensibles ou à un outil de ticketing interne, ce modèle maintient le code dans votre périmètre et facilite le calibrage continu avec vos conseillers. Nous le présentons comme une possibilité d'engagement, à arbitrer au cadrage.",
    faq: [
      {
        q: 'Combien coûte un agent IA de support client ?',
        a: "Le développement se chiffre au forfait après cadrage. Sur le marché, un agent de support connecté à votre base et à votre outil de ticketing se situe couramment entre 15 000 et 70 000 € selon le nombre de canaux, la complexité des demandes et le niveau d'intégration. Un prototype sur les demandes les plus fréquentes démarre plus bas. Chez Masteria, le cadrage est gratuit et le devis suit le périmètre.",
      },
      {
        q: 'L\'agent remplace-t-il mes conseillers ?',
        a: "Non. Il absorbe les demandes répétitives et de premier niveau, et escalade systématiquement vers un humain les cas complexes, sensibles ou hors périmètre, avec un résumé du contexte. L'objectif est de libérer du temps pour les demandes à forte valeur, pas de supprimer la relation humaine sur les sujets qui l'exigent.",
      },
      {
        q: 'À qui appartient le code de l\'agent ?',
        a: "À vous. Le code et la configuration de l'agent vous appartiennent, comme vos données et l'historique des échanges. Nous documentons la solution et transférons la compétence à vos équipes pour qu'elles supervisent l'agent, enrichissent la base et le fassent évoluer en autonomie.",
      },
      {
        q: 'En quoi diffère-t-il d\'un chatbot de support classique ?',
        a: "Un chatbot à scénarios suit des arbres de décision rigides et bute dès qu'une demande sort du script. Un agent IA comprend la demande en langage naturel, répond à partir de votre base avec sources, exécute des actions dans votre outil de ticketing et escalade proprement vers un humain. Il traite des cas réels de bout en bout, pas seulement des questions prévues d'avance.",
      },
    ],
    relatedSolutions: ['chatbot-ia-sur-mesure', 'assistant-documentaire-ia', 'automatisation-documentaire-ia'],
  },
  {
    slug: 'automatisation-documentaire-ia',
    name: 'Automatisation du traitement documentaire',
    icon: 'Files',
    cardSummary:
      "Une chaîne qui lit, extrait, classe et route vos documents entrants (factures, contrats, formulaires) sans ressaisie, avec contrôle humain.",
    h1: "Automatisation du traitement documentaire : de la pièce reçue à la donnée exploitable",
    metaTitle: 'Automatisation documentaire IA sur mesure | Masteria',
    metaDesc:
      "Automatisation documentaire IA : lecture, extraction, classification et routage de vos documents sans ressaisie. Sur mesure, code livré. Cadrage gratuit.",
    directAnswer:
      "L'automatisation du traitement documentaire fait passer un document reçu (facture, contrat, formulaire, courrier) à une donnée exploitable, sans ressaisie. L'IA lit, extrait les informations clés, classe et route vers le bon système, avec un contrôle humain sur les cas incertains. Masteria développe cette chaîne sur mesure et vous en livre le code.",
    whatItIs:
      "L'automatisation du traitement documentaire couvre tout ce qui sépare la réception d'un document de son intégration dans vos systèmes. Une facture, un contrat, un bon de commande, un formulaire ou un courrier arrive : la chaîne le lit (y compris les documents scannés), identifie sa nature, extrait les informations utiles (montants, dates, références, parties, clauses), les contrôle, puis les route vers le bon outil (comptabilité, ERP, GED, CRM) ou déclenche l'étape suivante du processus. Là où l'IA générative apporte un saut par rapport à l'OCR classique, c'est dans la compréhension de documents variés et peu structurés : elle gère des mises en page hétérogènes, comprend le contexte et sait extraire l'information même quand le format change. Le gain est double : du temps de ressaisie économisé et une réduction des erreurs de recopie. Le principe directeur reste le contrôle : les cas clairs sont traités automatiquement, les cas incertains ou à enjeu sont présentés à un humain pour validation, avec une traçabilité complète de chaque décision.",
    howWeBuild: [
      {
        title: 'Cadrage des flux documentaires',
        desc: "Nous identifions les types de documents, les volumes, les informations à extraire et les systèmes de destination. Nous définissons les règles de contrôle, les seuils de confiance et le critère de réussite.",
      },
      {
        title: 'Prototype sur un type de document',
        desc: "Nous construisons la chaîne sur un flux prioritaire (par exemple les factures fournisseurs) avec vos vrais documents. Vous mesurez la qualité de l'extraction et le taux de cas traités automatiquement.",
      },
      {
        title: 'Développement et intégration',
        desc: "Nous développons la chaîne complète (lecture, extraction, classification, contrôle, routage), l'intégrons à vos systèmes via API ou MCP, et mettons en place l'interface de validation humaine pour les cas incertains.",
      },
      {
        title: 'Déploiement et transfert',
        desc: "Nous accompagnons la mise en production, calibrons les seuils, formons vos équipes à superviser et à corriger, et vous transmettons le code et la documentation.",
      },
    ],
    techApproach:
      "La chaîne combine la lecture de documents (extraction de texte sur PDF natifs et scannés) et un modèle de langage pour comprendre et structurer l'information, en approche multi-LLM selon le type de document, le coût et la confidentialité. L'extraction renvoie des champs structurés et un score de confiance, ce qui pilote l'arbitrage entre traitement automatique et validation humaine. Le routage vers vos systèmes (comptabilité, ERP, GED, CRM) passe par des connecteurs API ou MCP, sans ressaisie. Chaque pièce traitée est journalisée avec sa décision et la personne qui l'a validée, pour l'auditabilité. Les documents sensibles peuvent rester cloisonnés et, selon vos exigences de conformité, l'ensemble du traitement peut s'opérer dans l'Union européenne. Aucune réutilisation de vos documents pour entraîner des modèles.",
    useCasesBySector: [
      { sector: 'Comptabilité et finance', usage: "Lecture et extraction des factures fournisseurs, contrôle de cohérence et intégration en comptabilité, avec validation humaine sur les écarts." },
      { sector: 'Cabinets et services juridiques', usage: "Extraction des informations clés de contrats entrants (parties, dates, clauses, échéances) et alimentation d'un suivi, avec relecture humaine." },
      { sector: 'Industrie et achats', usage: "Traitement des bons de commande, accusés de réception et documents fournisseurs, et alimentation de l'ERP sans ressaisie." },
      { sector: 'Assurance et mutuelles', usage: "Lecture des pièces de dossiers (justificatifs, formulaires), extraction et classement, avec routage vers le gestionnaire et traçabilité." },
    ],
    sectorLinks: [
      { label: 'IA pour la comptabilité', href: '/ia-services-conseil' },
      { label: "IA pour l'assurance", href: '/ia-banque-assurance' },
      { label: 'IA pour le juridique', href: '/ia-juridique' },
    ],
    onsiteDevNote:
      "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Pour une chaîne de traitement documentaire branchée sur des pièces sensibles et vos systèmes internes (comptabilité, ERP), ce modèle garde le code dans votre périmètre et accélère l'ajout de nouveaux flux. Nous le proposons comme une possibilité d'engagement, à arbitrer au cadrage.",
    faq: [
      {
        q: 'Combien coûte une automatisation du traitement documentaire ?',
        a: "Le budget se chiffre au forfait après cadrage. Sur le marché, une chaîne de traitement documentaire se situe couramment entre 12 000 et 60 000 € selon le nombre de types de documents, les volumes, les systèmes à connecter et le niveau de contrôle requis. Un prototype sur un seul flux démarre plus bas. Chez Masteria, le cadrage est gratuit et le devis suit le périmètre défini.",
      },
      {
        q: 'À qui appartient le code de la chaîne ?',
        a: "À vous. Le code, les règles de traitement et la configuration vous appartiennent, comme vos documents et les données extraites. Nous documentons la chaîne et transférons la compétence à vos équipes pour qu'elles ajustent les seuils, ajoutent des types de documents et fassent évoluer la solution en autonomie.",
      },
      {
        q: 'En quoi diffère-t-elle d\'un OCR classique ?',
        a: "Un OCR transcrit du texte mais ne comprend ni la nature du document ni le sens des champs, et bute sur les mises en page variées. Une chaîne pilotée par IA générative comprend le contexte, extrait l'information utile même quand le format change, la contrôle et la route vers le bon système. Vous passez d'une simple reconnaissance de texte à un traitement de bout en bout.",
      },
      {
        q: 'Que se passe-t-il quand un document est ambigu ?',
        a: "Il est présenté à un humain. La chaîne calcule un score de confiance : les cas clairs sont traités automatiquement, les cas incertains ou à enjeu sont routés vers une interface de validation. Chaque décision est tracée. Vous gardez la main sur ce qui doit rester contrôlé, et le système apprend des corrections.",
      },
    ],
    relatedSolutions: ['agent-support-client-ia', 'assistant-documentaire-ia', 'integration-llm-rag'],
  },
  {
    slug: 'agent-commercial-ia',
    name: 'Agent IA commercial',
    icon: 'Briefcase',
    cardSummary:
      "Un agent qui appuie le cycle de vente : recherche et qualification de prospects, préparation de propositions, mise à jour du CRM.",
    h1: "Agent IA commercial : prospection, propositions et CRM augmentés",
    metaTitle: 'Agent IA commercial sur mesure | Masteria',
    metaDesc:
      "Agent IA commercial : qualification de prospects, propositions, mise à jour du CRM, connecté à vos outils. Sur mesure, code livré. Cadrage gratuit.",
    directAnswer:
      "Un agent IA commercial appuie le cycle de vente : il recherche et qualifie des prospects, prépare des propositions à partir de vos modèles et tient le CRM à jour. Branché sur vos données et vos outils, il décharge les commerciaux des tâches répétitives pour qu'ils se concentrent sur la relation. Masteria le développe sur mesure et vous en livre le code.",
    whatItIs:
      "Un agent IA commercial est un assistant qui prend en charge les tâches chronophages du cycle de vente, autour de vos commerciaux et de votre CRM. Côté prospection, il recherche des informations sur un prospect ou un compte, structure une fiche de qualification et prépare un premier message contextualisé. Côté avant-vente, il rédige des éléments de proposition à partir de vos modèles, de votre catalogue et de votre terminologie, prépare un compte rendu de rendez-vous ou une relance. Côté CRM, il met à jour les fiches, consigne les échanges et signale les opportunités à suivre, ce qui réduit la saisie manuelle que les commerciaux rechignent à faire. L'agent ne décide pas à la place du commercial : il prépare, propose et exécute des actions encadrées, l'humain valide et garde la relation. L'objectif est de rendre du temps de vente aux équipes commerciales et de fiabiliser les données du CRM, sans transformer la prospection en envoi de masse impersonnel.",
    howWeBuild: [
      {
        title: 'Cadrage du processus commercial',
        desc: "Nous cartographions votre cycle de vente, identifions les tâches répétitives à fort coût de temps (qualification, propositions, saisie CRM) et définissons le périmètre d'action de l'agent et le critère de réussite.",
      },
      {
        title: 'Prototype sur une étape du cycle',
        desc: "Nous construisons l'agent sur une étape prioritaire (par exemple la préparation de propositions ou la mise à jour du CRM) avec vos vrais modèles et données. Vos commerciaux jugent l'utilité réelle.",
      },
      {
        title: 'Développement et intégration',
        desc: "Nous développons l'agent, le connectons à votre CRM et à vos outils via API ou MCP, posons les garde-fous (actions encadrées, validation humaine sur l'envoi) et l'intégrons au quotidien des équipes.",
      },
      {
        title: 'Déploiement et transfert',
        desc: "Nous accompagnons la mise en production, formons vos commerciaux à travailler avec l'agent, et vous transmettons le code et la documentation. Vous restez propriétaire et autonome.",
      },
    ],
    techApproach:
      "L'agent s'appuie sur une approche multi-LLM (Claude, GPT, Mistral) choisie selon le cas et le coût, et sur du RAG pour ancrer les propositions et les réponses dans votre catalogue, vos modèles et votre terminologie. La connexion au CRM (et aux outils d'e-mail ou de calendrier) passe par des API documentées et des connecteurs MCP, avec un périmètre d'action strict : l'agent prépare et propose, et toute action sortante sensible (envoi d'un message, modification d'une opportunité) reste sous validation humaine. Les données de prospection sont traitées dans le respect du RGPD, et le démarchage encadré pour éviter l'envoi de masse non sollicité. La journalisation assure la traçabilité des actions. Selon vos exigences, l'hébergement peut se faire dans l'Union européenne et les données commerciales sensibles rester cloisonnées.",
    useCasesBySector: [
      { sector: 'PME et ETI B2B', usage: "Un agent qui qualifie les comptes, prépare les propositions à partir des modèles maison et tient le CRM à jour, pour rendre du temps de vente aux commerciaux." },
      { sector: 'Conseil et services professionnels', usage: "Un agent qui prépare les premières trames de proposition et les comptes rendus de rendez-vous à partir des notes, avec relecture humaine." },
      { sector: 'Industrie et négoce', usage: "Un agent qui prépare les devis récurrents à partir du catalogue et des règles de prix, et alimente le CRM, avec validation humaine sur l'envoi." },
      { sector: 'Immobilier', usage: "Un agent qui qualifie les demandes entrantes, prépare les dossiers et tient à jour le suivi des contacts, l'agent restant sous le contrôle du négociateur." },
    ],
    sectorLinks: [
      { label: 'IA pour la vente', href: '/ia-retail-ecommerce' },
      { label: "IA pour l'immobilier", href: '/ia-immobilier-btp' },
      { label: 'IA pour le marketing', href: '/agence-ia-marketing' },
    ],
    onsiteDevNote:
      "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Pour un agent commercial connecté à un CRM contenant des données sensibles, ce modèle garde le code dans votre périmètre et facilite l'ajustement continu avec vos commerciaux. Nous le présentons comme une possibilité d'engagement, à arbitrer au cadrage.",
    faq: [
      {
        q: 'Combien coûte un agent IA commercial sur mesure ?',
        a: "Le développement se chiffre au forfait après cadrage. Sur le marché, un agent commercial connecté à votre CRM et à vos modèles se situe couramment entre 15 000 et 70 000 € selon le périmètre (prospection, propositions, CRM), le nombre d'outils à connecter et le niveau d'intégration. Un prototype sur une seule étape démarre plus bas. Chez Masteria, le cadrage est gratuit et le devis suit le périmètre.",
      },
      {
        q: 'À qui appartient le code et les données ?',
        a: "À vous. Le code de l'agent, sa configuration et vos données commerciales vous appartiennent. Nous documentons la solution et transférons la compétence à vos équipes pour qu'elles fassent évoluer l'agent, ajustent les modèles de propositions et restent autonomes, sans dépendance imposée.",
      },
      {
        q: 'L\'agent envoie-t-il des e-mails tout seul ?',
        a: "Seulement si vous le décidez, et dans un cadre strict. Par défaut, l'agent prépare et propose : les envois sortants sensibles restent sous validation humaine. La prospection est encadrée pour respecter le RGPD et éviter le démarchage de masse. Vous gardez la main sur ce qui part au nom de l'entreprise.",
      },
      {
        q: 'En quoi diffère-t-il d\'un outil de prospection sur étagère ?',
        a: "Un outil générique impose son fonctionnement et ne connaît ni votre catalogue, ni vos modèles, ni vos règles de prix. Un agent sur mesure est branché sur votre CRM et vos contenus réels, prépare des propositions à votre terminologie et s'intègre à votre process de vente. Vous en êtes propriétaire et gardez la validation humaine sur chaque action sortante.",
      },
    ],
    relatedSolutions: ['copilote-ia-interne', 'chatbot-ia-sur-mesure', 'automatisation-documentaire-ia'],
  },
  {
    slug: 'chatbot-ia-sur-mesure',
    name: 'Chatbot IA sur mesure',
    icon: 'MessageCircle',
    cardSummary:
      "Un chatbot conversationnel développé pour votre usage : connecté à vos données, intégré à votre site ou vos canaux, avec votre ton.",
    h1: "Chatbot IA sur mesure : un assistant conversationnel à votre image",
    metaTitle: 'Chatbot IA sur mesure | Masteria',
    metaDesc:
      "Chatbot IA sur mesure connecté à vos données, intégré à votre site et vos canaux, avec votre ton. Code livré au client. Cadrage gratuit.",
    directAnswer:
      "Un chatbot IA sur mesure est un assistant conversationnel développé pour votre usage : connecté à vos données, intégré à votre site ou à vos canaux, avec votre ton et vos garde-fous. Il répond, oriente et accompagne vos visiteurs ou vos équipes. Masteria le conçoit, l'intègre et vous en transmet le code, sans abonnement à une plateforme fermée.",
    whatItIs:
      "Un chatbot IA sur mesure est un assistant conversationnel conçu pour un usage et un public précis : visiteurs de votre site, clients de votre espace, ou collaborateurs en interne. À la différence d'un chatbot générique acheté sur étagère, il est branché sur vos contenus réels (catalogue, base de connaissances, FAQ, procédures), il adopte le ton de votre marque, et il respecte des garde-fous explicites sur ce qu'il peut dire et faire. Il sert à répondre aux questions fréquentes, orienter un visiteur vers la bonne page ou le bon interlocuteur, qualifier une demande entrante, ou accompagner un parcours (avant-vente, prise de rendez-vous, premier niveau de support). Quand une demande dépasse son périmètre, il passe la main à un humain plutôt que d'improviser. L'intérêt du sur-mesure tient à la maîtrise : vous contrôlez les sources sur lesquelles il s'appuie, son comportement, son intégration à votre site ou à vos canaux (messagerie, espace client), et vous restez propriétaire de la solution au lieu de dépendre d'un abonnement à une plateforme fermée.",
    howWeBuild: [
      {
        title: 'Cadrage de l\'usage et du ton',
        desc: "Nous définissons le public, les cas que le chatbot doit traiter, les sources sur lesquelles il s'appuie, le ton de marque et les garde-fous. Nous fixons le critère de réussite et les règles d'escalade vers un humain.",
      },
      {
        title: 'Prototype sur les cas prioritaires',
        desc: "Nous construisons une première version branchée sur vos contenus et la testons sur vos vraies questions. Vous validez la qualité des réponses, le ton et le bon déclenchement des escalades.",
      },
      {
        title: 'Développement et intégration',
        desc: "Nous développons le chatbot, le connectons à vos données (RAG) et à vos outils, l'intégrons à votre site ou à vos canaux, et posons la journalisation et les garde-fous.",
      },
      {
        title: 'Déploiement et transfert',
        desc: "Nous accompagnons la mise en ligne, formons vos équipes à le superviser et à enrichir ses sources, et vous transmettons le code et la documentation.",
      },
    ],
    techApproach:
      "Le chatbot repose sur une approche multi-LLM (Claude, GPT, Mistral) choisie selon le cas, le coût et la confidentialité, et sur du RAG pour répondre à partir de vos contenus réels avec sources, plutôt que sur une connaissance générale. Le comportement est cadré par des instructions et des garde-fous explicites : périmètre des sujets, ton de marque, sujets interdits, règles d'escalade. L'intégration au site ou aux canaux (widget web, espace client, messagerie) se fait via des composants et des API maintenables. Les actions éventuelles (prise de rendez-vous, création d'une demande) passent par des connecteurs encadrés. Tout est journalisé pour suivre la qualité et améliorer les réponses. Selon vos exigences de conformité, l'hébergement peut se faire dans l'Union européenne et les données sensibles rester cloisonnées. Vous n'êtes pas enfermé dans une plateforme propriétaire : le code vous revient.",
    useCasesBySector: [
      { sector: 'Sites vitrines et e-commerce', usage: "Un chatbot d'accueil qui répond aux questions produits et logistique, oriente vers la bonne page et qualifie les demandes commerciales." },
      { sector: 'Services et professions réglementées', usage: "Un chatbot qui informe sur les prestations et les démarches à partir de contenus validés, avec escalade humaine sur les questions personnelles." },
      { sector: 'Collectivités et institutions', usage: "Un chatbot d'information sur les démarches et services, fondé sur des sources officielles internes, avec un ton clair et accessible." },
      { sector: 'Éducation et formation', usage: "Un chatbot qui renseigne les candidats et apprenants sur les programmes et les modalités, à partir de la documentation de l'organisme." },
    ],
    sectorLinks: [
      { label: 'IA pour le e-commerce', href: '/ia-retail-ecommerce' },
      { label: 'IA pour le marketing', href: '/agence-ia-marketing' },
      { label: 'IA pour le juridique', href: '/ia-juridique' },
    ],
    onsiteDevNote:
      "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Pour un chatbot intégré à un espace client ou à des contenus sensibles, ce modèle garde le code dans votre périmètre et facilite les itérations rapprochées. Nous le proposons comme une possibilité d'engagement, à arbitrer au cadrage.",
    faq: [
      {
        q: 'Combien coûte un chatbot IA sur mesure ?',
        a: "Le développement se chiffre au forfait après cadrage. Sur le marché, un chatbot IA sur mesure connecté à vos données se situe couramment entre 8 000 et 40 000 € selon le périmètre, le nombre de sources, les intégrations et les garde-fous. Un chatbot d'accueil simple démarre plus bas qu'un assistant relié à plusieurs outils. Chez Masteria, le cadrage est gratuit et le devis suit le périmètre.",
      },
      {
        q: 'À qui appartient le chatbot et son code ?',
        a: "À vous. Le code, la configuration et les sources connectées vous appartiennent. Vous n'êtes pas enfermé dans un abonnement à une plateforme fermée : nous documentons la solution et transférons la compétence à vos équipes pour qu'elles la fassent évoluer en autonomie.",
      },
      {
        q: 'En quoi diffère-t-il d\'un chatbot acheté sur étagère ?',
        a: "Un chatbot sur étagère est générique et limité aux possibilités de sa plateforme. Un chatbot sur mesure est branché sur vos contenus réels, adopte votre ton, respecte vos garde-fous et s'intègre à vos outils. Surtout, vous en êtes propriétaire et maîtrisez son comportement, au lieu de dépendre d'un éditeur tiers.",
      },
      {
        q: 'Comment s\'intègre-t-il à notre site ou nos canaux ?',
        a: "Par un widget web sur votre site, un branchement à votre espace client ou à vos canaux de messagerie, via des composants et des API maintenables. Nous nous adaptons à votre stack et à votre charte, sans vous enfermer dans une plateforme propriétaire. Le code de l'intégration vous revient et vos équipes peuvent le maintenir.",
      },
    ],
    relatedSolutions: ['agent-support-client-ia', 'copilote-ia-interne', 'integration-llm-rag'],
  },
  {
    slug: 'integration-llm-rag',
    name: 'Intégration LLM & RAG',
    icon: 'Plug',
    cardSummary:
      "Brancher un modèle de langage et du RAG directement dans vos outils existants, via API et connecteurs, sans refonte de votre SI.",
    h1: "Intégration LLM & RAG : brancher l'IA dans vos outils existants",
    metaTitle: 'Intégration LLM & RAG dans vos outils | Masteria',
    metaDesc:
      "Intégration LLM & RAG dans vos outils existants : API, connecteurs MCP, réponses sourcées, sans refonte du SI. Sur mesure, code livré. Cadrage gratuit.",
    directAnswer:
      "Intégrer un LLM et du RAG, c'est brancher un modèle de langage et la recherche sur vos données directement dans vos outils existants (CRM, ERP, intranet, applications métier), via API et connecteurs, sans refonte de votre SI. Vos applications gagnent des capacités IA ancrées dans vos contenus. Masteria développe et intègre ces briques, et vous en livre le code.",
    whatItIs:
      "L'intégration LLM et RAG consiste à ajouter des capacités d'intelligence artificielle à des outils que vous utilisez déjà, plutôt qu'à construire une nouvelle application autonome. Concrètement, on relie un modèle de langage (LLM) et une couche de RAG (recherche sur vos données) à votre CRM, votre ERP, votre intranet, votre GED ou vos applications métier, via des API et des connecteurs. Vos outils gagnent alors des fonctions nouvelles : générer un résumé ou un brouillon depuis une fiche, répondre à une question à partir de vos documents, classer ou enrichir une donnée, déclencher une action à partir d'un texte. C'est la voie pertinente quand vous ne voulez pas remplacer votre système d'information mais l'augmenter, en gardant vos outils et vos habitudes. Le travail porte autant sur la qualité des réponses (ancrage RAG, choix du modèle) que sur la robustesse de l'intégration (API maintenables, gestion des erreurs, sécurité des échanges). L'enjeu est d'ajouter de la valeur là où vos équipes travaillent déjà, sans créer un énième outil à ouvrir en parallèle.",
    howWeBuild: [
      {
        title: 'Cadrage des points d\'intégration',
        desc: "Nous analysons vos outils existants, identifions où l'IA apporte le plus de valeur, et définissons les points d'intégration, les données à mobiliser, les contraintes de sécurité et le critère de réussite.",
      },
      {
        title: 'Prototype sur un cas d\'intégration',
        desc: "Nous construisons une première intégration sur un cas prioritaire (par exemple un résumé ou une réponse sourcée dans votre CRM) en conditions réelles, pour valider la valeur et les choix techniques.",
      },
      {
        title: 'Développement et intégration',
        desc: "Nous développons les connecteurs et la couche RAG, les branchons à vos outils via API ou MCP, gérons l'authentification, les droits et les erreurs, et industrialisons l'intégration.",
      },
      {
        title: 'Déploiement et transfert',
        desc: "Nous accompagnons la mise en production sans perturber vos opérations, formons vos équipes techniques, et vous transmettons le code et la documentation pour que vous mainteniez l'intégration.",
      },
    ],
    techApproach:
      "Nous travaillons en multi-LLM (Claude, GPT, Mistral) et choisissons le modèle selon le cas, le coût et la confidentialité, sans dépendance à un fournisseur unique. La couche RAG ancre les réponses dans vos données avec sources. L'intégration repose sur des API documentées et des connecteurs MCP, le protocole qui standardise le branchement des modèles sur des outils et des sources : CRM, ERP, GED, bases internes. Nous gérons l'authentification, le respect des droits d'accès, la gestion des erreurs et la limitation des coûts d'appel, pour une intégration robuste en production, pas un branchement de démonstration. La sécurité et la confidentialité sont des critères de conception : cloisonnement des données sensibles, journalisation, et, selon vos exigences, hébergement dans l'Union européenne. L'objectif est une intégration maintenable que vos équipes techniques peuvent reprendre.",
    useCasesBySector: [
      { sector: 'Éditeurs de logiciels (SaaS)', usage: "Ajouter des fonctions IA (résumé, génération, recherche sémantique) à un produit existant via API, sans refondre l'application." },
      { sector: 'Services et conseil', usage: "Brancher un assistant de rédaction sourcé dans les outils internes (CRM, espace documentaire) pour gagner du temps sans changer d'environnement." },
      { sector: 'Industrie', usage: "Connecter un modèle à l'ERP et à la GED technique pour générer des fiches, des résumés et des réponses à partir des données existantes." },
      { sector: 'Banque, finance et assurance', usage: "Intégrer une recherche sourcée et une aide à la rédaction conforme dans les outils métier, avec traçabilité et contrôle des accès." },
    ],
    sectorLinks: [
      { label: "IA pour l'industrie", href: '/ia-industrie' },
      { label: 'IA pour la finance', href: '/ia-banque-assurance' },
      { label: 'IA pour les RH', href: '/ia-services-conseil' },
    ],
    onsiteDevNote:
      "Au-delà du forfait au projet, nous pouvons détacher un ou plusieurs développeurs IA dans vos équipes, sur site ou à distance, en régie ou en équipe dédiée. Pour intégrer un LLM et du RAG dans un système d'information sensible ou réglementé, ce modèle garde le code dans votre périmètre, travaille au plus près de vos équipes techniques et facilite la reprise en interne. Nous le présentons comme une possibilité d'engagement, à arbitrer au cadrage.",
    faq: [
      {
        q: 'Combien coûte une intégration LLM et RAG ?',
        a: "Le budget se chiffre au forfait après cadrage. Sur le marché, une intégration LLM/RAG dans des outils existants se situe couramment entre 10 000 et 60 000 € selon le nombre de points d'intégration, la complexité des connecteurs, les volumes de données et les exigences de sécurité. Un premier cas d'intégration démarre plus bas. Chez Masteria, le cadrage est gratuit et le devis suit le périmètre.",
      },
      {
        q: 'Faut-il refondre notre système d\'information ?',
        a: "Non. L'intégration part de votre existant et s'y greffe via des API et des connecteurs (dont MCP), sans refonte. L'objectif est d'ajouter de la valeur à vos outils actuels, pas de les remplacer. Nous travaillons avec votre stack et vos contraintes de sécurité.",
      },
      {
        q: 'À qui appartient le code de l\'intégration ?',
        a: "À vous. Le code des connecteurs et de la couche RAG, ainsi que vos données, vous appartiennent. Nous documentons l'intégration et transférons la compétence à vos équipes techniques pour qu'elles la maintiennent et la fassent évoluer en autonomie, sans dépendance imposée.",
      },
      {
        q: 'Quelle différence avec le développement d\'une application IA séparée ?',
        a: "Une application séparée crée un nouvel outil à ouvrir en parallèle de vos systèmes. L'intégration LLM et RAG ajoute des capacités IA là où vos équipes travaillent déjà (CRM, ERP, intranet), via API et connecteurs MCP. Vous gardez vos outils et vos habitudes, et l'IA gagne en adoption parce qu'elle vit dans votre environnement existant.",
      },
    ],
    relatedSolutions: ['copilote-ia-interne', 'assistant-documentaire-ia', 'automatisation-documentaire-ia'],
  },
]

// Recherche d'une solution par slug (sans slash initial). Renvoie undefined si inconnu.
export function getSolution(slug) {
  if (!slug) return undefined
  const clean = String(slug).replace(/^\//, '')
  return SOLUTIONS.find(s => s.slug === clean)
}
