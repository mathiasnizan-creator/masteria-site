// Contenu propre à /formation-claude-ia-geneve (guide terrain). Rendu par GeoPage.
// Fonctions Claude vérifiées sur support.claude.com et privacy.claude.com le 03/10/2026 ; circulaire FINMA 2018/3 et enquête FINMA sur l'IA sur finma.ch, nLPD sur fedlex.admin.ch le 03/10/2026.
// Données genevoises : OCSTAT, Mémento statistique du canton de Genève 2026 (activité conférencière des organisations internationales en 2024).
export default {
  slug: 'formation-claude-ia-geneve',
  dateModified: '2026-10-03',
  metaDesc: "Formation Claude IA Genève : lire contrats, prospectus et rapports longs en anglais, limites des PDF, projets, nLPD et circulaire FINMA Outsourcing.",
  intro: "À Genève, les documents qui engagent une entreprise arrivent longs et souvent en anglais : le contrat-cadre d'un financement de négoce, le prospectus d'un fonds, le rapport annuel d'une agence des Nations unies. Claude lit ces documents d'un seul tenant et en tire un tableau, une comparaison ou une note en français. Encore faut-il savoir ce qu'il a lu, page par page, et ce que la banque a le droit de lui confier. Masteria, dont les bureaux sont à Lyon, entraîne vos équipes genevoises sur les documents de leur métier, chez vous ou à distance.",
  guide: {
    kicker: "Guide terrain Genève",
    h2: "Claude à Genève : lire mille pages en anglais, et savoir lesquelles l'outil a lues",
    lead: "En 2024, les organisations internationales installées à Genève ont tenu 4 256 réunions internationales et accueilli 261 096 délégués et experts, selon le Mémento statistique 2026 de l'Office cantonal de la statistique. Chaque réunion laisse des rapports, des projets de texte et des comptes rendus. Côté finance, la FINMA a interrogé environ 400 établissements suisses entre novembre 2024 et janvier 2025 : 91 % de ceux qui recourent à l'IA utilisent aussi l'IA générative. Claude répond à ce besoin de lecture longue, avec des limites précises qu'une équipe doit connaître avant de lui confier un dossier.",
    sections: [
      {
        h3: "Un million de tokens : ce que Claude garde sous les yeux",
        paras: [
          "Sur les formules payantes (Pro, Max, Team, Enterprise), Claude Opus 5.5, Claude Sonnet 5.5 et Claude Fable 5.1 travaillent en conversation avec une fenêtre de contexte d'un million de tokens. Cette fenêtre mesure le volume de texte que Claude prend en compte en même temps ; un token correspond à un fragment de mot. Selon Anthropic, 200 000 tokens représentent à peu près 500 pages. La fenêtre actuelle en accepte cinq fois plus, de quoi poser côte à côte un prospectus, son supplément et la feuille d'information de base d'un fonds.",
          "La conversation a pourtant une limite. Quand l'exécution de code est activée sur une offre payante, Claude résume les messages anciens à l'approche de la limite pour poursuivre l'échange ; Anthropic précise que l'historique complet reste consultable, et que ces longues conversations consomment davantage de la limite d'usage. Pour une revue de contrat où chaque mot compte, nous enseignons une règle simple : une conversation par dossier, ouverte avec les documents complets, plutôt qu'un long échange qui enchaîne plusieurs analyses.",
        ],
      },
      {
        h3: "Les graphiques d'un PDF ne sont lus que jusqu'à 100 pages",
        paras: [
          "Claude analyse le texte et les éléments visuels (images, graphiques, schémas) des PDF de 100 pages au plus. Entre 101 et 1 000 pages, seul le texte est traité. Au-delà de 1 000 pages, le fichier est refusé. Un prospectus de fonds de 300 pages, dont les performances passées et la répartition des actifs figurent en graphiques, sera donc lu sans ses figures. La parade tient en un geste : extraire les pages de graphiques dans un PDF séparé de moins de 100 pages, et le joindre à la conversation.",
          "Les autres formats posent une limite voisine. Pour un fichier Word ou un texte brut, Claude extrait le texte seul et ne lit pas les images incorporées : l'annexe scannée d'une directive de conformité sort de l'analyse. En conversation, un fichier peut peser jusqu'à 500 Mo et une conversation accepter 20 fichiers ; dans un projet, la limite tombe à 30 Mo par fichier. Pour désigner une page, Anthropic recommande enfin le numéro affiché par le lecteur PDF, qui diffère du numéro imprimé dès qu'un rapport annuel pagine son introduction à part.",
        ],
      },
      {
        h3: "Un projet cherche les passages utiles, une conversation lit tout",
        paras: [
          "Un projet Claude rassemble des documents de référence et des instructions communes. Quand ses connaissances approchent de la limite de la fenêtre de contexte, Claude active la génération augmentée par recherche (RAG, une recherche des passages pertinents avant de répondre), qui permet au projet de contenir jusqu'à dix fois plus de documents. Il interroge alors un outil de recherche dans les documents au lieu de tout charger, et un indicateur visuel signale ce mode. Pour une société de négoce, c'est la bonne place pour le corpus de contrats d'une contrepartie ou les conditions générales de vente.",
          "Un relevé exhaustif demande l'autre mode. Pour lister toutes les clauses de sanctions, de force majeure et de loi applicable d'un contrat-cadre, le document va dans une conversation, où Claude le lit en entier. Dans un projet, nommez le document visé dans la question, comme le conseille Anthropic, pour orienter la recherche. Le bilinguisme s'organise de la même manière : demandez la citation de la clause dans sa langue d'origine, en anglais, puis sa reformulation en français. Le juriste vérifie la citation, la direction lit la reformulation.",
        ],
      },
      {
        h3: "Pour une banque, la circulaire FINMA Outsourcing fixe les questions à poser",
        paras: [
          "La circulaire FINMA 2018/3, modifiée pour la dernière fois le 4 novembre 2020, s'applique entre autres aux banques, aux maisons de titres, aux assurances et aux gestionnaires de fortune collective. Elle parle d'externalisation quand un prestataire remplit, de manière indépendante et durable, tout ou partie d'une fonction essentielle, c'est-à-dire une fonction dont dépend le respect du droit des marchés financiers. Une externalisation exige un inventaire, un contrat écrit et un droit de contrôle reconnu à la banque, à sa société d'audit et à la FINMA ; un transfert à l'étranger n'est permis que si ces droits peuvent toujours s'exercer.",
          "Rédiger une note interne avec Claude et confier à Claude le contrôle des dossiers de clients posent deux questions différentes. La qualification revient à la banque, à sa conformité et à ses risques. Dans son enquête d'avril 2025, la FINMA observe que la dépendance aux grands prestataires technologiques augmente et rappelle que l'externalisation de fonctions critiques reste une source centrale de risques opérationnels. La nLPD ajoute une limite : son article 9 interdit de confier un traitement à un sous-traitant quand une obligation de garder le secret s'y oppose.",
          "Côté Anthropic, la documentation consultée en octobre 2026 répond à une partie des questions. Les données des offres commerciales, dont Team et Enterprise, ne servent pas à l'entraînement par défaut. Par défaut, Anthropic peut acheminer le trafic vers les États-Unis ou vers certains pays d'Europe, d'Asie et d'Australie, et les données sont stockées aux États-Unis ; le choix d'une zone de routage existe pour la plateforme développeurs et pour Enterprise en facturation à l'usage. Ces éléments nourrissent l'analyse de la banque, qui garde la décision.",
        ],
      },
    ],
    table: {
      caption: "Documents genevois longs : comment les confier à Claude et quoi vérifier",
      headers: ["Document", "Comment le donner à Claude", "Point de contrôle"],
      rows: [
        ["Contrat-cadre de financement du négoce, 80 pages en anglais", "PDF joint à la conversation, lu en entier avec ses schémas", "Renvois entre la clause des définitions et les articles"],
        ["Prospectus de fonds de 300 pages", "Texte seul au-delà de 100 pages ; pages de graphiques extraites dans un PDF séparé", "Chiffres de performance repris des graphiques"],
        ["Rapport annuel d'une organisation internationale", "Projet partagé avec les éditions précédentes", "Numéro de page du lecteur PDF pour chaque citation"],
        ["Directive interne de conformité au format Word", "Texte extrait, annexes scannées ignorées", "Conversion en PDF si les annexes comptent"],
        ["Corpus de contrats d'une contrepartie, 40 fichiers", "Projet en mode de recherche (RAG)", "Nom du contrat visé dans chaque question"],
        ["Rapport hebdomadaire d'un courtier en matières premières, en anglais", "Une conversation par rapport, ouverte avec le PDF complet", "Chiffres repris avec leur page et leur date"],
      ],
    },
    cas: {
      h3: "Cas pratique : préparer la fiche de lecture d'un prospectus de fonds pour un comité",
      contexte: "Prenons un analyste d'une banque privée genevoise. Le comité de sélection des fonds se réunit jeudi et doit se prononcer sur un fonds obligataire étranger dont le prospectus, en anglais, compte 280 pages, accompagné d'une feuille d'information de base en français. L'analyste doit livrer une fiche de lecture de deux pages en français. Les documents sont publics, aucune donnée de client n'entre dans l'outil, et la banque a validé un espace Claude Enterprise.",
      etapes: [
        "Extraire du prospectus les pages qui contiennent des graphiques et des tableaux en image, et les enregistrer dans un PDF séparé de moins de 100 pages.",
        "Ouvrir une nouvelle conversation dans l'espace Enterprise et y joindre le prospectus complet, le PDF des graphiques et la feuille d'information de base.",
        "Envoyer le prompt ci-dessous, puis examiner d'abord le tableau des frais et des conditions de rachat, où une erreur coûte le plus cher.",
        "Contrôler chaque chiffre cité dans le prospectus, au numéro de page du lecteur PDF indiqué par Claude.",
        "Remettre la fiche au comité avec la liste des questions ouvertes à poser à la société de gestion.",
      ],
      prompt: "Tu assistes un analyste d'une banque privée suisse qui prépare un comité de sélection de fonds. Trois fichiers sont joints : le prospectus complet du fonds en anglais, un PDF séparé qui reprend ses pages de graphiques et de tableaux, et la feuille d'information de base en français.\n\nPremière tâche : dresse un tableau des caractéristiques du fonds : objectif d'investissement, univers et limites d'investissement, recours à l'effet de levier et aux produits dérivés, devise, frais (entrée, sortie, gestion, performance), conditions de rachat et cas de suspension. Pour chaque ligne, cite la phrase du prospectus en anglais et donne le numéro de page selon le lecteur PDF.\n\nDeuxième tâche : confronte ces caractéristiques à la feuille d'information de base et signale toute différence de chiffre ou de formulation.\n\nTroisième tâche : rédige en français une fiche de lecture de deux pages pour le comité : ce que fait le fonds, ses risques principaux tels que le prospectus les décrit, ses frais, et les questions à poser à la société de gestion.\n\nN'ajoute aucune information absente des fichiers et ne formule aucune recommandation d'investissement. Si une donnée manque ou se contredit d'un document à l'autre, écris-le.",
      resultat: "Vous obtenez un tableau des caractéristiques sourcé page par page, la liste des écarts entre le prospectus et la feuille d'information de base, et une fiche de deux pages prête à relire. L'analyste garde le jugement : il vérifie les frais et les conditions de rachat sur l'original et formule seul l'avis présenté au comité. Le prospectus est public et l'enjeu de confidentialité reste faible ; la règle change dès qu'une donnée de client entre dans la discussion.",
    },
    pieges: [
      { titre: "Croire qu'un projet relit tout le corpus à chaque question", texte: "Au-delà de la limite de contexte, un projet passe en mode de recherche et charge seulement les extraits qui semblent répondre à la question. Pour un relevé de toutes les clauses d'un contrat, joignez le document à une conversation, ou nommez le fichier visé dans votre demande." },
      { titre: "Perdre les graphiques d'un long prospectus", texte: "Au-delà de 100 pages, Claude lit le texte d'un PDF et laisse de côté ses éléments visuels. Les tableaux de performance insérés en image sortent de l'analyse : extrayez ces pages dans un PDF séparé avant de poser la question." },
      { titre: "Citer la page imprimée au lieu de la page du fichier", texte: "Anthropic conseille d'utiliser les numéros de page du lecteur PDF. Dans un rapport qui numérote son introduction à part, la page 45 imprimée et la page 45 du fichier désignent deux passages différents." },
      { titre: "Laisser le pouce levé actif dans une banque", texte: "Un avis donné avec le bouton pouce levé ou baissé envoie à Anthropic la conversation entière, conservée jusqu'à cinq ans et utilisable pour l'entraînement après dissociation de l'identité. Sur Team et Enterprise, un propriétaire peut désactiver ce bouton avec le réglage « Rate chats », dans Organization settings > Data and Privacy." },
      { titre: "Régler 30 jours de conservation et oublier les projets", texte: "Sur Enterprise, la durée de conservation d'un projet prime sur celle des conversations qu'il contient, et un projet est conservé sans limite par défaut. Une banque qui fixe 30 jours pour les conversations fixe aussi une durée pour les projets." },
    ],
  },
  faq: [
    { q: "Claude peut-il lire un prospectus de fonds de 300 pages pour une banque genevoise ?", a: "Oui pour le texte : Claude traite les PDF jusqu'à 1 000 pages, et ses modèles récents disposent d'un million de tokens de contexte sur les offres payantes. Les graphiques ne sont analysés que dans les PDF de 100 pages au plus. Pour les performances et la répartition des actifs présentées en image, extrayez ces pages dans un fichier séparé. Faites citer chaque chiffre avec sa page, puis vérifiez-le dans le document." },
    { q: "Où Anthropic traite-t-il les données d'une entreprise genevoise qui utilise Claude ?", a: "Pour ses offres commerciales, Anthropic indique pouvoir acheminer le trafic vers les États-Unis ou vers certains pays d'Europe, d'Asie et d'Australie, et stocker les données aux États-Unis. Le choix d'une zone de routage existe pour la plateforme développeurs et pour Enterprise en facturation à l'usage. Les conversations de Team et d'Enterprise restent hors de l'entraînement des modèles par défaut. Votre conformité confronte ces éléments à l'article 16 de la nLPD avant le déploiement." },
    { q: "L'usage de Claude par une banque genevoise tombe-t-il sous la circulaire FINMA sur l'outsourcing ?", a: "Cela dépend de la fonction confiée. La circulaire 2018/3 vise la délégation durable de tout ou partie d'une fonction essentielle au respect du droit des marchés financiers. Une aide à la rédaction de notes internes se distingue d'un outil intégré au contrôle des dossiers de clients. La banque tranche avec sa conformité ; si elle retient l'externalisation, viennent l'inventaire, le contrat écrit et les droits de contrôle de l'audit et de la FINMA." },
    { q: "Pour un bureau de négoce genevois, faut-il Claude Team ou Claude Enterprise ?", a: "Les deux relèvent des conditions commerciales d'Anthropic, sans entraînement sur vos données par défaut, et leurs propriétaires peuvent désactiver le bouton d'avis qui transmet une conversation à Anthropic. Enterprise ajoute des durées de conservation personnalisées, de 30 jours au minimum, pour les conversations et pour les projets, avec une trace dans les journaux d'audit. Une équipe juridique qui doit prouver l'effacement des contrats après chaque transaction a besoin de ce niveau." },
    { q: "Une organisation internationale de Genève peut-elle utiliser Claude sur ses rapports ?", a: "Sur les rapports publiés, les projets de texte rendus publics et les documents de réunion déjà diffusés, la question se pose peu. Pour les documents internes, la politique informatique de l'organisation décide, car c'est son règlement interne sur les données qui s'applique. Nous construisons les exercices sur les documents que son service autorise, en anglais et en français, et ce périmètre est écrit avant la session." },
    { q: "À quoi ressemble une formation Claude à Genève pour une équipe juridique ou de conformité ?", a: "La formation se déroule dans vos bureaux genevois ou à distance, avec 12 participants au plus. Chaque participant travaille sur un document long de son métier, anonymisé ou fictif : contrat, prospectus, directive. La journée couvre la conversation et le projet, les limites des PDF, la citation des pages et la vérification. Le devis précise les modalités du trajet depuis Lyon." },
    { q: "Combien faut-il budgéter pour former une équipe genevoise à Claude ?", a: "Comptez 1 980 € HT la journée pour un groupe jusqu'à 12 personnes, ou 1 980 € HT la journée en accompagnement individuel pour un directeur juridique ou un responsable conformité. Masteria facture en euros, hors taxes, et la TVA éventuelle dépend du statut de votre entreprise. Aucun OPCO n'existe en Suisse : le budget formation de l'entreprise porte la dépense, sur un programme envoyé avec le devis sous 24 heures ouvrées." },
  ],
  sources: [
    { name: "OCSTAT : Mémento statistique du canton de Genève 2026 (organisations internationales, activité conférencière)", url: "https://statistique.ge.ch/tel/publications/2026/donnees_generales/memento/dg-ms-2026.pdf" },
    { name: "FINMA : enquête sur l'utilisation de l'intelligence artificielle dans les établissements financiers (24 avril 2025)", url: "https://www.finma.ch/fr/news/2025/04/20250424-mm-umfrage-ki/" },
    { name: "FINMA : circulaires en vigueur, dont la circulaire 2018/3 Outsourcing", url: "https://www.finma.ch/fr/documentation/circulaires/" },
    { name: "Fedlex : loi fédérale sur la protection des données (LPD, RS 235.1)", url: "https://www.fedlex.admin.ch/eli/cc/2022/491/fr" },
    { name: "Claude Help Center : How large is the context window on paid Claude plans?", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
    { name: "Claude Help Center : Upload files to Claude (limites des PDF et des fichiers)", url: "https://support.claude.com/en/articles/8241126-upload-files-to-claude" },
    { name: "Claude Help Center : Retrieval augmented generation (RAG) for projects", url: "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects" },
    { name: "Anthropic Privacy Center : Is my data used for model training? (offres commerciales, bouton d'avis)", url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training" },
    { name: "Claude Help Center : Configure custom data retention controls for Enterprise plans", url: "https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans" },
    { name: "Anthropic Privacy Center : Where are your servers located?", url: "https://privacy.claude.com/en/articles/7996890-where-are-your-servers-located-do-you-host-your-models-on-eu-servers" },
  ],
}
