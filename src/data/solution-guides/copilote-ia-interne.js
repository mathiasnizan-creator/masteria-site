// Contenu propre à /copilote-ia-interne. Lu par SolutionIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Microsoft Learn (confidentialité de Microsoft Copilot, Restricted Content Discovery, socle de gouvernance), centre d'aide Claude (connecteur Microsoft 365), Légifrance (L2312-8, L2312-38, L1222-4), CNIL, guide ANSSI IA générative, étude de cas industrie.
export default {
  slug: 'copilote-ia-interne',
  dateModified: '2026-10-03',
  intro: "Une équipe commerciale, RH ou juridique veut un assistant dans ses outils de tous les jours : Outlook, Teams, le navigateur ou son CRM. Le copilote répond, rédige et prépare des actions, avec les droits de chaque utilisateur. Souvent, un produit du marché bien configuré suffit, et nous vous le disons ; le développement commence quand vos données vivent dans un logiciel métier ou quand le copilote doit y agir. Pour une réponse sourcée dans un corpus, voyez l'assistant documentaire ; pour brancher un modèle dans un logiciel que vous avez déjà, voyez l'intégration LLM et RAG.",

  etapes: [
    {
      title: "Choisir l'équipe pilote et ses tâches",
      desc: "Nous retenons avec vous une équipe et quelques tâches récurrentes, décrites dans ses mots : relance, synthèse de dossier, préparation de rendez-vous. Le temps passé aujourd'hui sur chacune est relevé.",
    },
    {
      title: "Faire le ménage des droits",
      desc: "Les sources que le copilote lira sont passées en revue : sites ouverts à toute l'entreprise, liens de partage larges, dossiers sans propriétaire. Les sites sensibles sont restreints le temps de la correction.",
    },
    {
      title: "Configurer, puis développer ce qui manque",
      desc: "Les assistants de l'équipe sont configurés sur ses cas, avec leurs instructions et leurs sources. L'accès à un logiciel métier que les connecteurs standard ne couvrent pas se développe, en lecture d'abord.",
    },
    {
      title: "Informer le CSE et former l'équipe",
      desc: "La note d'information, la charte d'usage et la durée de conservation des historiques sont prêtes avant l'ouverture. L'équipe pilote se forme sur ses propres fichiers, avec ses cas.",
    },
    {
      title: "Mesurer, puis étendre",
      desc: "Après quelques semaines, l'usage par équipe et les tâches couvertes sont comparés au point de départ. L'équipe suivante reprend les assistants qui ont servi, et les autres sont retirés.",
    },
  ],

  cout: {
    lead: "Deux budgets coexistent. Quand un produit du marché suffit, la dépense porte sur la configuration, la gouvernance des droits et la formation. Un copilote sur mesure démarre autour de 15 000 € pour une équipe et un premier logiciel branché ; un déploiement sur plusieurs métiers, avec des intégrations multiples, dépasse 100 000 € et peut atteindre plusieurs centaines de milliers d'euros.",
    paras: [
      "Le devis suit le cadrage et décrit un périmètre écrit : équipes, logiciels branchés, actions autorisées, livrables de gouvernance. S'il faut des licences, vous les achetez auprès de l'éditeur ou de votre revendeur habituel : Masteria n'en revend aucune. La formation se chiffre à part, au tarif intra de 1 980 € HT par journée, et votre OPCO peut la financer, ce qui n'est pas le cas du conseil ni du développement.",
    ],
    facteurs: [
      {
        title: "Acheter, configurer ou développer",
        desc: "Configurer un produit du marché demande des jours de conseil. Développer un copilote ou un connecteur demande des semaines de développement. Le cadrage tranche, cas par cas.",
      },
      {
        title: "Les logiciels à brancher",
        desc: "Chaque logiciel métier ajoute un connecteur, une correspondance des droits et des tests. Un logiciel doté d'une API documentée se branche plus vite.",
      },
      {
        title: "Le niveau d'action",
        desc: "La lecture coûte le moins, les brouillons un peu plus. L'écriture dans un logiciel métier ajoute une validation, un journal et une reprise sur erreur.",
      },
      {
        title: "L'état des partages",
        desc: "Un environnement aux partages propres se déploie vite. Des centaines de sites ouverts à toute l'entreprise demandent un chantier de revue, chiffré au cadrage.",
      },
    ],
  },

  regie: [
    "Un copilote vit dans l'environnement de l'entreprise : la console Microsoft 365, le fournisseur d'identité, les logiciels métier et leurs administrateurs. Le développeur IA que nous détachons en régie s'installe à côté de vos administrateurs, dans vos locaux ou en visio. Il construit les connecteurs et les assistants, et votre équipe garde la main sur les paramètres du tenant, l'espace Microsoft 365 de l'entreprise, ainsi que sur les droits.",
    "Ce mode sert surtout les extensions par vagues, une équipe après l'autre, chacune avec ses sources et ses cas. Le développeur documente chaque connecteur et chaque assistant au fil de l'eau, et la passation remet le tout à votre équipe interne, code compris.",
  ],

  comparatif: {
    intro: "L'assistant générique a changé : ses versions entreprise, comme Microsoft Copilot ou Claude avec son connecteur Microsoft 365, lisent les fichiers de l'entreprise en reprenant les droits de chaque salarié. Pour rédiger, résumer et chercher dans les fichiers bureautiques, il suffit souvent. Le développement prend le relais quand le copilote doit lire ou agir dans un logiciel métier, appliquer des règles testées ou tourner sur un modèle et une région que vous choisissez.",
    rows: [
      { aspect: "Fichiers bureautiques", off: "Lus dans les versions entreprise, avec les droits de chaque salarié", custom: "Lus de la même façon, sur un périmètre restreint si nécessaire" },
      { aspect: "Données d'un logiciel métier", off: "Accessibles si un connecteur existe et que l'administrateur l'autorise", custom: "Branchées sur l'API du logiciel, avec les droits de l'utilisateur" },
      { aspect: "Actions", off: "Mail, fichiers, messages Teams, une fois les outils d'écriture activés", custom: "Actions métier codées, validées par l'utilisateur, journalisées" },
      { aspect: "Règles de l'entreprise", off: "Consignes et documents modèles, sans jeu de tests", custom: "Règles codées et couvertes par un jeu de tests" },
      { aspect: "Version grand public", off: "Hors du cadre contractuel de l'entreprise : à proscrire pour les données sensibles", custom: "Comptes et accès gérés par l'entreprise dès le départ" },
      { aspect: "Coût et délai", off: "Un abonnement par siège, une mise en route en quelques jours", custom: "Un forfait de développement, plus le coût d'usage du modèle" },
    ],
  },

  guide: {
    kicker: "Avant d'ouvrir un copilote",
    h2: "Un copilote lit tout ce que ses utilisateurs peuvent ouvrir : le projet commence par les droits",
    lead: "Microsoft l'écrit dans sa documentation : Copilot ne montre à chaque utilisateur que les contenus qu'il peut déjà ouvrir, au minimum en lecture. La phrase rassure, et elle contient le risque principal. Un dossier de paie ouvert par mégarde à toute l'entreprise devient trouvable en une question. Le connecteur Microsoft 365 de Claude suit la même règle et reprend les droits existants de chaque salarié. Ce guide part de ce constat pour traiter le choix entre produit du marché et développement, le ménage des partages, le rôle du comité social et économique et l'installation équipe par équipe.",
    sections: [
      {
        h3: "Les copilotes du marché lisent déjà vos fichiers Microsoft 365",
        paras: [
          "Microsoft appelle désormais Microsoft Copilot l'outil longtemps nommé Microsoft 365 Copilot. Il interroge Microsoft Graph, l'ensemble des contenus Microsoft 365 de l'entreprise : mails, conversations Teams, documents SharePoint et OneDrive, réunions. Selon la documentation de l'éditeur, ni les requêtes, ni les réponses, ni les données consultées n'entrent dans l'entraînement des modèles de fondation. Le trafic des utilisateurs de l'Union européenne reste dans la frontière de données de l'UE, l'engagement de Microsoft à traiter ces données dans l'Union. Une exception compte : les modèles d'Anthropic, que l'administrateur peut activer dans Copilot, restent pour l'instant hors de cette frontière.",
          "Claude suit le même chemin avec son connecteur Microsoft 365, ouvert à toutes ses offres, de Free à Enterprise. Le centre d'aide d'Anthropic précise que Claude reprend les permissions Microsoft 365 de chaque utilisateur : personne n'obtient par Claude ce qu'il ne voyait pas déjà. Le connecteur fonctionne en lecture par défaut, et des outils d'écriture peuvent être activés pour envoyer un mail, créer un fichier ou poster dans Teams. Sur les offres Team et Enterprise, son activation demande l'accord du propriétaire de l'organisation Claude, puis le consentement d'un administrateur général de Microsoft Entra, l'annuaire d'identités de Microsoft.",
        ],
      },
      {
        h3: "Le copilote met au jour les partages trop larges",
        paras: [
          "Un site SharePoint ouvert à « tout le monde sauf les utilisateurs externes » passait inaperçu tant que personne ne le cherchait. Le copilote le cherche pour vous. Microsoft recommande donc d'identifier, avant le déploiement, les sites surexposés, sans propriétaire ou inactifs, puis de corriger les droits et l'héritage des permissions. Les licences Copilot incluent les outils d'administration avancée de SharePoint (SharePoint Advanced Management), qui fournissent les rapports de gouvernance des accès utiles à ce tri.",
          "En attendant la correction, la fonction Restricted Content Discovery retire des sites choisis de la recherche à l'échelle de l'entreprise et des réponses de Copilot, sans toucher aux droits d'accès. Microsoft la présente comme une mesure temporaire et prévient qu'au-delà de 500 000 éléments par site, sa prise en compte peut demander plus d'une semaine. L'ANSSI demande pour sa part de vérifier les droits accordés aux outils d'IA générative le jour de leur activation, puis à intervalles réguliers, chaque mois par exemple (recommandation R35).",
        ],
      },
      {
        h3: "Le développement commence là où s'arrêtent les connecteurs standard",
        paras: [
          "Un copilote du marché lit la messagerie, les fichiers et les réunions. Vos données de gestion vivent ailleurs : les commandes dans l'ERP, les tarifs dans une base articles, les dossiers dans un logiciel métier. Microsoft prévoit des connecteurs et des agents pour les atteindre, que l'administrateur autorise un par un, et leurs données ne remontent que si l'utilisateur y a droit. Quand aucun connecteur n'existe pour votre logiciel, ou quand ses règles d'accès sont fines, un connecteur développé pour vous devient le chemin.",
          "L'action marque la seconde frontière. Préparer un brouillon de commande se corrige d'un clic, l'enregistrer dans l'ERP engage l'entreprise. Un copilote sur mesure code chaque action, la soumet à la validation de l'utilisateur et l'inscrit dans un journal. Le modèle et la région d'exécution entrent aussi dans la décision quand vos contraintes l'exigent. Masteria ne revend aucune licence : la recommandation entre achat et développement suit votre situation, et elle s'écrit au cadrage avec ses raisons.",
        ],
      },
      {
        h3: "Le CSE et les salariés sont informés avant le déploiement",
        paras: [
          "À partir de cinquante salariés, l'article L2312-8 du Code du travail fait de l'arrivée d'une nouvelle technologie un sujet d'information et de consultation du comité social et économique (CSE). L'article L2312-38 vise en plus, avant toute décision, les moyens et techniques capables de contrôler l'activité des salariés. Or Microsoft Copilot conserve les requêtes et les réponses de chaque utilisateur dans un historique que l'administrateur peut rechercher. La question se pose donc à chaque déploiement, et votre service juridique la tranche.",
          "L'article L1222-4 ajoute une règle valable dans toutes les entreprises : un salarié doit connaître à l'avance tout dispositif qui recueille des informations sur lui. La CNIL recommande en outre d'encadrer l'usage par une charte qui distingue les usages autorisés des usages interdits, et de former les utilisateurs aux limites de l'outil. Nous préparons avec vous la note d'information du CSE, la charte et le réglage de conservation des historiques.",
        ],
      },
      {
        h3: "Un copilote s'installe équipe par équipe, sur les fichiers de chacune",
        paras: [
          "Ouvrir un copilote à toute l'entreprise le même jour laisse chacun chercher seul ses usages. Nous le déployons par équipe pilote, sur ses tâches récurrentes et ses propres fichiers. Chaque équipe reçoit des assistants configurés pour ses cas, une bibliothèque de prompts testés (les consignes types que l'équipe réutilise) et un référent qui recueille les retours. Les actions en écriture restent coupées tant que l'équipe n'a pas validé la qualité en lecture.",
          "La mesure se fait sur le périmètre de l'équipe, avec vous. Avant le pilote, nous relevons le temps passé sur les tâches retenues ; après quelques semaines, l'usage hebdomadaire et les tâches couvertes. Un gain se constate sur ces relevés, et nous n'en promettons aucun d'avance. La formation des équipes fait partie du déploiement. À la différence du conseil et du développement, elle est finançable par votre OPCO, l'opérateur de compétences de votre branche, puisque les actions de formation de Masteria sont certifiées Qualiopi.",
        ],
      },
    ],
    table: {
      caption: "Produit du marché ou développement : la réponse dépend de la situation de l'équipe",
      headers: ["Situation", "Le produit du marché suffit si", "Le développement se justifie si"],
      rows: [
        ["Résumer, rédiger, chercher dans Office", "Les fichiers vivent dans SharePoint ou OneDrive", "Rarement : un produit bien configuré couvre ce besoin"],
        ["Lire des données de gestion", "Un connecteur existe pour votre logiciel et l'administrateur l'autorise", "Le logiciel n'a pas de connecteur, ou ses droits sont fins"],
        ["Agir dans un logiciel", "L'action se limite au mail, aux fichiers ou aux messages Teams", "L'action touche une commande, un dossier ou un statut métier"],
        ["Appliquer les règles de l'entreprise", "Quelques consignes écrites et des documents modèles suffisent", "Une erreur coûte cher et la règle doit être testée"],
        ["Hébergement et modèle", "Les engagements contractuels de l'éditeur conviennent", "Vous devez choisir le modèle ou la région d'exécution"],
        ["Fréquence d'usage", "Usage varié, centré sur l'écrit", "Une même tâche répétée chaque jour par toute l'équipe"],
      ],
    },
    cas: {
      h3: "Retour de mission : Microsoft 365 Copilot cadré sur OneDrive et SharePoint dans un groupe industriel",
      contexte: "Un groupe international du packaging a préféré Microsoft 365 Copilot à l'assistant conversationnel qu'il avait bâti en interne. Ses plusieurs milliers de salariés se répartissent entre l'Europe, l'Inde et les États-Unis, et le déploiement a lieu en pleine migration vers S/4HANA, l'ERP de SAP dans sa version actuelle. Avant de généraliser, le groupe voulait que des managers pilotes repartent avec des usages applicables dès leur retour au bureau.",
      etapes: [
        "Au cadrage, les référents métiers et le Data manager écrivent ce que Copilot pourra lire : OneDrive et SharePoint, et rien sur les serveurs partagés.",
        "Les usages se construisent dans treize ateliers, à partir des fichiers du groupe : de gros tableaux Excel, des documents Word, la messagerie Outlook, des présentations PowerPoint à la charte.",
        "Deux ateliers portent sur des assistants ; l'un d'eux lit le mail d'un fournisseur et en tire les contacts, le RIB et l'extrait Kbis qui alimentent sa fiche dans SAP.",
        "Entre les deux sessions de managers, le bilan à chaud entraîne trois corrections : licences Copilot vérifiées, tables organisées par métier, plage protégée pour les assistants à la fin du second jour.",
        "Le Data manager devient le gardien de la politique d'usage et des prompts partagés entre les 24 managers pilotes ; trois sessions suivent en septembre 2026, dont deux en anglais, avant les sites des États-Unis et du Mexique, prévus en octobre 2026, puis de l'Inde, en décembre 2026.",
      ],
      resultat: "Quatre participants sur onze de la session pilote réclament déjà la suite : les données SAP, Power Platform (les outils d'automatisation de Microsoft), des assistants plus poussés ; un module avancé est cadré pour y répondre. Cette demande montre où s'arrête le copilote du marché : il couvre les fichiers bureautiques, et l'accès aux données de gestion demande un travail de connexion.",
      lien: { href: "/etudes-de-cas-ia#industrie", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      {
        titre: "Activer les licences avant d'avoir regardé les partages",
        texte: "Le copilote rend trouvable tout ce qu'un salarié peut ouvrir, y compris un dossier partagé par erreur avec toute l'entreprise. La revue des sites les plus exposés précède l'activation, avec une restriction temporaire sur les sites sensibles.",
      },
      {
        titre: "Laisser les comptes personnels en circulation",
        texte: "Un salarié qui colle un document interne dans un assistant ouvert avec son compte personnel sort du cadre contractuel de l'entreprise. L'ANSSI proscrit l'envoi de données sensibles aux services d'IA générative grand public (R34). Le copilote retenu passe par les comptes de l'entreprise.",
      },
      {
        titre: "Ouvrir les outils d'écriture dès le premier jour",
        texte: "Envoyer un mail ou modifier un fichier depuis le copilote engage l'entreprise. Ces outils restent coupés pendant le pilote, puis s'ouvrent cas par cas, avec une validation par l'utilisateur à chaque action.",
      },
      {
        titre: "Former avant d'avoir vérifié les licences",
        texte: "Un participant sans licence active passe la session à regarder l'écran du voisin. Les licences et les droits de création d'assistants se vérifient avant chaque session, auprès du référent informatique.",
      },
      {
        titre: "Oublier la conservation des historiques",
        texte: "Les requêtes des salariés sont stockées, et l'administrateur peut les rechercher. Leur durée de conservation se fixe avec le DPO de l'entreprise, son référent RGPD, puis entre dans l'information des salariés et du CSE.",
      },
    ],
  },

  faq: [
    {
      q: "Faut-il développer un copilote si nous avons déjà Microsoft 365 Copilot ?",
      a: "Pour rédiger, résumer ou chercher dans vos fichiers Office, le produit suffit, et le travail porte sur la configuration, les droits et la formation. Le développement se justifie pour atteindre un logiciel que Copilot ne lit pas, comme un ERP sans connecteur, ou pour une action métier à valider et à journaliser. Dans le groupe industriel de notre étude de cas, cette frontière est apparue quand des managers pilotes ont demandé l'accès aux données SAP.",
    },
    {
      q: "Le copilote peut-il montrer un document qu'un salarié n'a pas le droit d'ouvrir ?",
      a: "Non : Microsoft Copilot et le connecteur Microsoft 365 de Claude reprennent les droits existants de chaque utilisateur. Le danger tient aux partages trop larges, quand un dossier sensible est ouvert à toute l'entreprise : le copilote le rend alors trouvable en une question. La revue des partages et la restriction temporaire des sites sensibles précèdent donc l'ouverture.",
    },
    {
      q: "Le CSE doit-il être consulté avant l'arrivée d'un copilote ?",
      a: "À partir de cinquante salariés, l'article L2312-8 du Code du travail soumet l'arrivée d'une nouvelle technologie à l'information et à la consultation du CSE. L'article L2312-38 y ajoute, avant la décision, les outils capables de contrôler l'activité des salariés. Dans toutes les entreprises, l'article L1222-4 impose que les salariés connaissent à l'avance un dispositif qui recueille des informations sur eux. Votre service juridique tranche, et nous préparons les éléments techniques.",
    },
    {
      q: "Les requêtes des salariés sont-elles conservées, et qui peut les lire ?",
      a: "Dans Microsoft Copilot, les requêtes et les réponses forment un historique d'activité, stocké avec les autres contenus Microsoft 365 de l'entreprise. Les administrateurs peuvent le rechercher avec Microsoft Purview et lui appliquer une politique de conservation, et chaque utilisateur peut supprimer son propre historique. Ces règles se fixent avant l'ouverture et figurent dans l'information donnée aux salariés.",
    },
    {
      q: "Le copilote peut-il envoyer un mail ou modifier un fichier à notre place ?",
      a: "Les produits du marché le permettent quand l'administrateur l'active : le connecteur Microsoft 365 de Claude travaille en lecture par défaut, et ses outils d'écriture peuvent envoyer un mail, créer un fichier ou poster dans Teams. Nous les gardons coupés pendant le pilote. Dans un copilote sur mesure, chaque action passe par une validation de l'utilisateur et laisse une trace dans un journal.",
    },
    {
      q: "Nos données restent-elles dans l'Union européenne ?",
      a: "Pour Microsoft Copilot, le trafic des utilisateurs de l'Union reste dans la frontière de données de l'UE, avec une exception à connaître : les modèles d'Anthropic, activables dans Copilot par votre administrateur, restent pour l'instant en dehors. Pour un copilote sur mesure, le modèle et la région d'exécution se choisissent au cadrage avec votre DSI, et le choix est consigné dans le dossier remis avec le code.",
    },
    {
      q: "Comment savoir si le copilote sert à quelque chose ?",
      a: "La réponse vient de relevés faits sur vos tâches. Avant le pilote, nous mesurons avec l'équipe le temps passé sur les tâches retenues ; après quelques semaines, l'usage hebdomadaire et les tâches couvertes. Le gain se constate sur ce périmètre, et l'extension suit ce qui a servi. Nous n'annonçons aucun pourcentage avant cette mesure.",
    },
    {
      q: "La formation des équipes au copilote est-elle finançable ?",
      a: "Oui : la formation relève de l'OPCO de votre branche, parce que Masteria détient la certification Qualiopi pour ce type d'action, et le financement dépend de vos fonds disponibles. Le prix d'une journée en intra est fixé à 1 980 € HT. Pour le copilote lui-même, conseil et développement relèvent d'un autre budget : ils se chiffrent au forfait, sur devis, et l'OPCO ne les finance pas.",
    },
  ],

  sources: [
    { name: "Microsoft Learn : Data, Privacy, and Security for Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy" },
    { name: "Microsoft Learn : Restrict discovery of SharePoint sites and content", url: "https://learn.microsoft.com/en-us/sharepoint/restricted-content-discovery" },
    { name: "Microsoft Learn : Configure a secure and governed foundation for Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot" },
    { name: "Claude Help Center : Set up the Microsoft 365 connector", url: "https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector" },
    { name: "Légifrance : Code du travail, article L2312-8", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196" },
    { name: "Légifrance : Code du travail, article L2312-38", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035610275/" },
    { name: "Légifrance : Code du travail, article L1222-4", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900861" },
    { name: "CNIL : Les questions-réponses de la CNIL sur l'utilisation d'un système d'IA générative (18 juillet 2024)", url: "https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative" },
    { name: "ANSSI : Recommandations de sécurité pour un système d'IA générative (29 avril 2024)", url: "https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-un-systeme-dia-generative" },
  ],
}
