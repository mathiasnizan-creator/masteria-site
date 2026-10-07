// Texte propre de /formation-mistral-commercial (mode page propre, rendu par SpokePage). Réécrit le 07/10/2026.
// Faits Mistral : FAITS-OUTILS-2026-10-07, documentation Vibe relue le 07/10/2026 (recherche web et ouverture
// d'URL, compétences, bibliothèques, connecteurs, accords avant action, Canvas, mode vocal), page tarifs (dollars HT).
// Règle de prospection : page CNIL sur la prospection par courrier électronique, relue le 07/10/2026.
export default {
  slug: 'formation-mistral-commercial',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Mistral AI commerciale : Vibe, du rendez-vous à la proposition",
  metaTitle: 'Formation Mistral AI commerciale : Vibe en B2B | Masteria',
  metaDesc: "Vibe pour commerciaux B2B : rendez-vous préparé sur sources datées, proposition co-rédigée, fiche CRM extraite, prospection selon la CNIL. Qualiopi.",
  keywords: "formation Mistral commercial, formation Vibe commerciaux, Mistral AI vente B2B, préparation rendez-vous IA, proposition commerciale Vibe",
  resume: "La formation Mistral AI commerciale apprend à une équipe de vente B2B à préparer chaque rendez-vous avec Vibe sur des faits datés et sourcés, à co-rédiger la proposition à partir des mots du client, puis à transformer le compte rendu en fiche d'opportunité pour le CRM. Deux journées de sept heures, en présentiel ou en visioconférence, au prix de 1 980 € HT par jour de session, de deux à douze vendeurs, ou pour un seul. Qualiopi certifie les actions de formation de Masteria, et votre OPCO finance la session suivant les règles fixées pour sa branche et les fonds qui lui restent.",
  enBref: [
    { label: 'Formation', value: "Vibe, l'assistant de travail de Mistral AI, au service du cycle de vente B2B" },
    { label: 'Durée', value: "Deux jours, soit quatorze heures, idéalement avant une campagne ou un salon" },
    { label: 'Formats', value: "Chez vous ou en visioconférence ; jusqu'à douze vendeurs par session, ou un commercial accompagné seul" },
    { label: 'Tarif', value: "Forfait de 1 980 € HT par jour, quel que soit l'effectif jusqu'à douze ; licences Vibe facturées par Mistral" },
    { label: 'Financement', value: "Qualiopi obtenu pour les actions de formation ; décision de financement prise par votre OPCO au vu de ses critères et de l'enveloppe disponible" },
    { label: 'Prérequis', value: "Vendre en B2B et tenir un CRM ; idéalement un abonnement Vibe Pro, Team ou Enterprise, pour garder des réglages de confidentialité maîtrisés" },
  ],
  prerequis: "Vendre en B2B et tenir un CRM ; idéalement un abonnement Vibe Pro, Team ou Enterprise, pour garder des réglages de confidentialité maîtrisés",
  intro: "Le temps d'un commercial B2B part rarement dans l'e-mail de prospection. Il part dans la lecture du site d'un prospect la veille au soir, dans la recherche de la bonne référence client, dans la proposition recopiée sur celle du mois dernier et dans la saisie du compte rendu que personne ne fait de bon cœur. Vibe (Mistral a rebaptisé ainsi Le Chat le 28 mai 2026) couvre chacun de ces gestes avec sa recherche web nourrie par deux agences de presse, ses bibliothèques, son Canvas et ses compétences. Il lui manque une chose que ce guide, à jour au 7 octobre 2026, regarde en face : aucun CRM du marché ne se branche nativement sur Vibe.",
  guide: {
    kicker: "Guide terrain",
    h2: "Vibe prépare le rendez-vous, rédige la proposition et remplit la fiche d'opportunité",
    lead: "Un cycle de vente se joue en quatre temps : comprendre le prospect, le rencontrer, lui écrire une proposition, puis consigner ce qui a été dit pour que l'affaire avance. Vibe sert chacun de ces temps avec un outil différent, et chacun demande sa vérification. La recherche web peut remonter un article de trois ans ; une bibliothèque mal tenue cite la grille tarifaire de l'an passé ; le connecteur Outlook peut envoyer un mail au client si on l'y autorise. La formation apprend à placer le contrôle au bon endroit.",
    sections: [
      {
        h3: "La veille d'un rendez-vous se prépare avec des sources datées",
        paras: [
          "La recherche web s'active depuis le bouton + ou la touche /, dans les outils de la conversation. Mistral a passé des accords avec l'AFP et l'américaine Associated Press : quand leurs dépêches nourrissent une réponse, un pictogramme d'actualité apparaît près du globe, et le bouton Sources énumère chaque référence. Pour un prospect, c'est le chemin le plus sûr vers une nomination, un rachat ou un plan d'investissement récent.",
          "L'ouverture d'URL lit la page que vous collez, et elle seule : elle ne parcourt pas le reste du site et ne franchit ni identifiant ni paywall, ce qui laisse LinkedIn et les bases payantes hors de portée. On peut en revanche coller deux pages produits concurrentes dans la même conversation et demander la comparaison. Mistral fournit enfin /meeting-prep, une compétence qui prépare un rendez-vous inscrit dans votre agenda connecté.",
        ],
      },
      {
        h3: "Une bibliothèque commerciale garde l'offre, les références et une seule grille",
        paras: [
          "Une bibliothèque rassemble des documents que Vibe indexe et cite par des notes numérotées. Celle d'une équipe commerciale contient la plaquette d'offre, les fiches de références que vos clients ont accepté de voir citées, les conditions générales de vente et les trois propositions les plus réussies de l'année. Chaque membre y accède comme lecteur ou comme collaborateur, et l'accès peut s'étendre à l'organisation entière, ce qui met fin aux versions qui circulent par mail.",
          "Une règle protège les marges : une seule grille tarifaire, la grille en vigueur, avec sa date dans le nom du fichier. Vibe citerait l'ancienne avec la même assurance que la nouvelle.",
        ],
      },
      {
        h3: "La proposition s'écrit dans le Canvas, la fiche CRM sort d'une compétence",
        paras: [
          "La compétence /doc-coauthoring co-rédige une proposition : Vibe écrit dans le Canvas, vous corrigez à la main, et des flèches font défiler les versions avec l'affichage des modifications. Si le client attend une soutenance, le Canvas compose les diapositives en Marp, une syntaxe texte de présentation, puis un clic sur l'export produit un fichier PowerPoint que vous habillez ensuite aux couleurs de la maison.",
          "Pour le CRM, /structured-extraction convertit un texte libre en tableau ou en JSON, un format de données que la plupart des logiciels importent. Collez vos notes de rendez-vous, et Vibe en tire les champs de la fiche d'opportunité. Les connecteurs proposés par Mistral comprennent Outlook, Gmail, Slack, Notion ou Stripe pour les paiements, mais aucun CRM. Un administrateur peut ajouter un connecteur MCP personnalisé (un standard ouvert de connexion entre assistants et logiciels) si l'éditeur de votre CRM en publie un ; sinon, le tableau se colle ou s'importe.",
        ],
        list: [
          "Montant estimé, date de décision annoncée et étape du cycle selon votre nomenclature.",
          "Interlocuteurs rencontrés, avec le poids de chacun dans la décision : prescripteur, décideur, acheteur, utilisateur.",
          "Objections entendues, si possible mot pour mot.",
          "Prochaine action, avec un porteur et une échéance.",
        ],
      },
      {
        h3: "La CNIL encadre la prospection, même quand Vibe trouve l'adresse",
        paras: [
          "La CNIL admet qu'une entreprise prospecte des professionnels par courrier électronique en s'appuyant sur son intérêt légitime, à une condition : le message doit se rapporter à la fonction de la personne démarchée. Quand l'adresse vient d'un tiers ou d'une source extérieure, l'entreprise vérifie que la personne a été prévenue de cet usage et garde le moyen de le refuser. Une adresse repérée par la recherche de Vibe sur un site ne remplit pas cette condition d'elle-même : la recherche sert à comprendre l'entreprise, le fichier se construit autrement.",
          "Par le connecteur Outlook, Vibe peut aussi expédier un mail. Avant tout envoi, Vibe demande votre accord avec trois choix : continuer pour cette fois, toujours autoriser pendant la session, ou refuser. Pour une relance client, la bonne réponse reste « continuer », action par action.",
        ],
      },
    ],
    table: {
      caption: "Le cycle de vente B2B, étape par étape, avec l'outil de Vibe correspondant",
      headers: ["Étape", "Outil de Vibe", "Le contrôle du commercial"],
      rows: [
        ["Comprendre le prospect avant l'appel", "Recherche web, dépêches AFP et AP, ouverture d'URL", "La date de chaque fait, vérifiée source ouverte"],
        ["Préparer un rendez-vous de l'agenda", "Compétence /meeting-prep, calendrier connecté", "Les fonctions des interlocuteurs, souvent tirées d'un ancien fil"],
        ["Retrouver une référence citable", "Bibliothèque commerciale et ses notes numérotées", "L'accord écrit du client cité"],
        ["Rédiger la proposition", "Compétence /doc-coauthoring dans le Canvas", "Des prix recopiés depuis votre logiciel de devis"],
        ["Anticiper les objections", "Compétence /challenge-my-thinking", "Elle éprouve votre raisonnement, elle ne connaît pas l'acheteur"],
        ["Alimenter le CRM", "Compétence /structured-extraction", "Le collage ou l'import, faute de connecteur CRM natif"],
      ],
    },
    cas: {
      h3: "Cas pratique : un renouvellement de contrat de location de chariots élévateurs",
      contexte: "Prenons une chargée d'affaires d'un loueur de matériel de manutention. Elle rencontre jeudi le directeur logistique d'un entrepôt de 30 000 m² dont le contrat de location de chariots élévateurs arrive à échéance en mars, chez un concurrent. Elle dispose d'une heure pour se préparer et devra rendre une proposition sous dix jours.",
      etapes: [
        "Ouvrez un projet au nom du compte, puis rattachez à la conversation, via le bouton +, la bibliothèque commerciale de l'équipe.",
        "Activez la recherche web dans les outils, collez l'adresse de la page actualités de l'entrepôt, puis le prompt ci-dessous.",
        "Après le rendez-vous, dictez vos notes avec le mode vocal, relisez la transcription et lancez /structured-extraction pour obtenir la fiche d'opportunité.",
        "Lancez /doc-coauthoring pour bâtir la proposition dans le Canvas, à partir de la fiche et de la bibliothèque ; laissez les montants en blanc.",
        "Passez la proposition terminée à /challenge-my-thinking pour dresser la liste des objections probables de l'acheteur.",
      ],
      prompt: "Je rencontre jeudi le directeur logistique d'un entrepôt de 30 000 m². Je loue du matériel de manutention, et son contrat de location de chariots élévateurs, signé chez un concurrent, se termine en mars.\n\nPrépare une fiche d'une page pour ce rendez-vous, en trois blocs.\n\nBloc 1 : ce que l'entrepôt dit de lui-même sur la page d'actualités que je t'ai donnée, puis ce que le web et l'actualité récente y ajoutent (agrandissement, nouveau client, changement de direction, rachat). Pour chaque fait, donne sa date et l'endroit où tu l'as trouvé.\n\nBloc 2 : dans la bibliothèque, les deux références clients les plus proches (entrepôts de plus de 20 000 m², activité en deux ou trois équipes), avec ce que nous y avons fourni.\n\nBloc 3 : six questions de découverte pour comprendre qui décide, ce qui ne va pas avec le loueur actuel, et les contraintes du site (horaires, allées étroites, charge des batteries).\n\nN'invente aucun chiffre sur l'entrepôt. Quand tu ne trouves pas une information, écris « non trouvé ».",
      resultat: "Vous obtenez une fiche avec des faits datés et sourcés, deux références tirées de votre bibliothèque avec leur renvoi, et six questions de découverte. Ouvrez chaque source avant le rendez-vous : un article ancien peut remonter en tête. Après la rencontre, la compétence d'extraction produit le tableau à verser dans le CRM, et la proposition démarre sur les mots du client. Les prix, vous les reportez vous-même depuis la grille en vigueur.",
    },
    pieges: [
      {
        titre: "Une information sans date passe pour une actualité",
        texte: "Mistral prévient que la recherche peut rendre un contenu ancien ou incomplet. Exigez dans le prompt une date et une provenance pour chaque fait, et écartez ce qui n'en porte pas. Féliciter un prospect pour un projet abandonné depuis deux ans gâche un premier rendez-vous.",
      },
      {
        titre: "Le prix vient de la conversation au lieu de la grille",
        texte: "En rédigeant, l'assistant peut recalculer une remise ou reprendre un tarif d'une ancienne proposition de la bibliothèque. Laissez les montants vides dans le brouillon et reportez-les depuis votre outil de devis, qui reste la seule référence.",
      },
      {
        titre: "Une référence client sort sans accord",
        texte: "Vibe cite ce que la bibliothèque contient. Une fiche qui décrit un client n'ayant pas accepté d'être nommé finira tôt ou tard dans une proposition. Ne déposez que des références validées, ou anonymisées dès l'origine.",
      },
      {
        titre: "« Toujours autoriser » laisse partir les relances sans vous",
        texte: "Accorder « toujours autoriser » à l'envoi Outlook pendant une session supprime la demande d'accord suivante. Sur une relance client, un mail parti avec une erreur de nom ou de prix ne se rattrape pas. Gardez l'accord action par action, et réservez l'autorisation permanente aux fonctions de lecture.",
      },
    ],
  },
  audience: [
    {
      title: "Chargés d'affaires et ingénieurs commerciaux B2B",
      desc: "Rendez-vous, propositions et saisie dans le CRM se succèdent dans votre semaine. Vous apprenez à préparer chaque étape avec Vibe tout en décidant seul des prix et des engagements.",
    },
    {
      title: "Responsables grands comptes",
      desc: "Vos comptes réunissent plusieurs interlocuteurs et appellent des revues régulières. Un projet Vibe par compte rassemble l'actualité du client, vos références et l'historique des échanges.",
    },
    {
      title: "Directions commerciales, avant-vente et ADV",
      desc: "L'offre, la grille tarifaire et la base de références de l'équipe dépendent de vous. Vous apprenez à les tenir à jour dans une bibliothèque partagée et à fixer par écrit ce que l'outil peut produire seul.",
    },
  ],
  useCases: [
    {
      icon: '💼',
      title: "Fiche de premier rendez-vous",
      desc: "Une page de faits datés et sourcés sur le prospect, les références voisines et des questions de découverte.",
    },
    {
      icon: '📄',
      title: "Proposition co-rédigée",
      desc: "La compétence /doc-coauthoring bâtit la proposition dans le Canvas à partir des mots du client et de la bibliothèque.",
    },
    {
      icon: '📊',
      title: "Fiche d'opportunité pour le CRM",
      desc: "La compétence /structured-extraction range vos notes dans les champs de votre CRM, prêtes à coller ou à importer.",
    },
    {
      icon: '🎤',
      title: "Diapositives de soutenance",
      desc: "Des slides écrites en Marp dans le Canvas, exportées en PowerPoint et reprises dans votre gabarit de marque.",
    },
    {
      icon: '📚',
      title: "Références et offre partagées",
      desc: "Une bibliothèque qui réunit l'offre, les références citables, les conditions générales et la seule grille en vigueur.",
    },
    {
      icon: '📧',
      title: "Relance après rendez-vous",
      desc: "Un brouillon qui reprend les engagements pris, envoyé par le connecteur Outlook après votre accord explicite.",
    },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Poser le cadre d'une équipe commerciale dans Vibe",
      duration: "1h30",
      description: "Décider quelles informations clients entrent dans l'outil, et avec quelle offre.",
      items: [
        "Free, Pro, Team, Enterprise : qui coupe l'entraînement des modèles, et où",
        "Conditions tarifaires, marges, coordonnées : ce que l'on garde hors de Vibe au nom du RGPD comme du secret commercial",
        "Prospection B2B par mail : la règle de la CNIL sur l'intérêt légitime et le droit d'opposition",
        "Un projet par compte : instructions, fichiers et conversations rangés ensemble",
      ],
      exercise: "Vous classez les informations de vos comptes selon ce qui peut entrer dans Vibe, et dans quelle offre.",
    },
    {
      day: 1,
      title: "Module 2 · Arriver au rendez-vous avec des faits vérifiés",
      duration: "2h",
      description: "Arriver chez le prospect avec des faits datés et les bonnes questions.",
      items: [
        "Recherche web et fils d'agence : une date et une provenance pour chaque fait",
        "Ouverture d'URL : une seule page publique par adresse, sans identifiant ni paywall",
        "La compétence /meeting-prep sur un rendez-vous de l'agenda connecté",
        "Questions de découverte : décideur, fournisseur en place, contraintes du site",
      ],
      exercise: "Vous préparez la fiche d'un rendez-vous de la semaine prochaine et vous contrôlez la date de chaque source.",
    },
    {
      day: 1,
      title: "Module 3 · Monter la bibliothèque commerciale",
      duration: "2h",
      description: "Mettre les mêmes documents de référence entre toutes les mains.",
      items: [
        "Ce qu'on y dépose : offre, références citables, conditions générales, meilleures propositions",
        "Une grille tarifaire unique, datée dans le nom du fichier",
        "Références clients : accord écrit ou anonymisation dès l'origine",
        "Droits de lecteur ou de collaborateur, renvois numérotés et bouton Sources",
      ],
      exercise: "Vous montez la bibliothèque de votre offre avec vos propres documents, puis vous l'interrogez avec trois questions d'acheteur.",
    },
    {
      day: 1,
      title: "Module 4 · Transformer le compte rendu en fiche CRM",
      duration: "1h30",
      description: "Supprimer la double saisie après chaque rendez-vous.",
      items: [
        "Dicter ses notes en français avec le mode vocal, puis relire la transcription",
        "La compétence /structured-extraction en tableau ou en JSON",
        "Correspondance entre les champs extraits et ceux de votre CRM",
        "Import manuel, ou connecteur MCP ajouté par l'administrateur si l'éditeur en publie un",
      ],
      exercise: "Vous convertissez vos notes du dernier rendez-vous en fiche d'opportunité prête pour votre CRM.",
    },
    {
      day: 2,
      title: "Module 5 · Rédiger la proposition dans les mots du client",
      duration: "1h30",
      description: "Écrire une proposition qui reprend le besoin tel que le client l'a exprimé.",
      items: [
        "La compétence /doc-coauthoring dans le Canvas",
        "Les mots du client relevés en rendez-vous, repris tels quels",
        "Montants laissés en blanc, tirés ensuite de l'outil de chiffrage",
        "Navigation entre versions et affichage des modifications avant envoi",
      ],
      exercise: "Vous rédigez la proposition d'une affaire en cours en partant de la fiche de rendez-vous.",
    },
    {
      day: 2,
      title: "Module 6 · Préparer la soutenance devant le comité d'achat",
      duration: "2h",
      description: "Transformer la proposition écrite en présentation pour ceux qui décident.",
      items: [
        "Diapositives écrites en Marp dans le Canvas, exportées en PowerPoint",
        "Un discours pour le décideur, un autre pour l'acheteur, avec /stakeholder-translator",
        "Visuels produits par la génération d'images, petits textes repris à la main",
        "Reprise dans votre gabarit de marque",
      ],
      exercise: "Vous produisez la présentation de soutenance de l'une de vos propositions.",
    },
    {
      day: 2,
      title: "Module 7 · Anticiper les objections et organiser les relances",
      duration: "2h",
      description: "Préparer les réponses avant que l'acheteur pose la question, et ne laisser filer aucune relance.",
      items: [
        "/challenge-my-thinking appliqué à une proposition terminée",
        "Réponses appuyées sur les références de la bibliothèque, concessions acceptées et refusées",
        "Tâche planifiée hebdomadaire : l'actualité de vos grands comptes chaque lundi matin",
        "Relances rédigées en brouillon, envoyées par Outlook après accord action par action",
      ],
      exercise: "Vous préparez la négociation d'une affaire en cours, avec les objections probables et vos réponses.",
    },
    {
      day: 2,
      title: "Module 8 · Écrire les règles de l'équipe commerciale",
      duration: "1h30",
      description: "Décider de ce qui ne quitte jamais Vibe sans relecture.",
      items: [
        "Charte d'usage : prix, engagements et références relus avant tout envoi",
        "Une compétence de proposition maison, partagée à l'espace de travail",
        "AI Act, article 4 : formations tracées dans un registre, un référent nommé dans l'équipe",
        "Plan à 30 jours : trois affaires suivies avec Vibe, un bilan à la prochaine revue de pipeline",
      ],
      exercise: "Vous rédigez les règles d'usage de votre équipe et la compétence de proposition qu'elle partagera.",
    },
  ],
  objectives: [
    "Le participant prépare un rendez-vous B2B avec une fiche de faits datés et sourcés et six questions de découverte.",
    "Le participant constitue une bibliothèque commerciale partagée qui ne contient que des documents en vigueur.",
    "Le participant transforme des notes de rendez-vous en fiche d'opportunité prête à importer dans le CRM.",
    "Le participant rédige une proposition et ses diapositives dans le Canvas, en reportant les prix à la main depuis le devis.",
    "Le participant vérifie qu'une démarche de prospection par mail respecte la règle de la CNIL sur les professionnels.",
  ],
  faq: [
    {
      q: "Peut-on relier Vibe à Salesforce, à HubSpot ou à notre CRM ?",
      a: "Pas de façon native. La documentation des connecteurs, relue le 7 octobre 2026, cite Outlook, Gmail, les deux agendas, SharePoint, Slack, Notion, Atlassian, Box, GitHub, Linear et Stripe, sans aucun CRM. Un administrateur peut brancher un connecteur MCP personnalisé si l'éditeur de votre CRM publie un serveur compatible. À défaut, la compétence /structured-extraction produit un tableau ou un fichier JSON que vous collez ou importez, ce qui supprime déjà la ressaisie du compte rendu.",
    },
    {
      q: "Vibe peut-il lire le profil LinkedIn d'un prospect ?",
      a: "Non. L'ouverture d'URL ne lit pas les pages qui exigent une connexion, et LinkedIn en fait partie ; elle lit une page publique, une seule, sans explorer le reste du site. Pour connaître un prospect, le site de l'entreprise, ses communiqués et les articles d'agence que fait remonter la recherche restent les meilleures sources. La formation apprend à exiger une date et une référence pour chaque fait retenu.",
    },
    {
      q: "Peut-on dicter ses notes juste en sortant de chez le client ?",
      a: "Oui. Le mode vocal de Vibe transcrit votre voix au fil de la parole, grâce aux modèles Voxtral de Mistral ; le français figure parmi ses douze langues. Selon le réglage, le texte part aussitôt ou attend votre relecture : gardez la relecture, car un nom de société mal entendu se propage ensuite dans la fiche CRM. Aucun import de fichier audio n'est prévu par la documentation : un enregistrement de réunion passe donc par la transcription que fournit Teams ou Meet.",
    },
    {
      q: "Vibe envoie-t-il les relances clients à notre place ?",
      a: "Il le peut, par le connecteur Outlook, et il demande votre accord avant chaque envoi. Trois réponses s'offrent à vous : continuer pour cette fois, toujours autoriser pendant la session, refuser. Une tâche planifiée peut préparer chaque semaine la liste des relances dues, mais un envoi sans vous suppose d'avoir autorisé l'action à l'avance. Sur des mails clients, nous recommandons des brouillons préparés par Vibe et envoyés par le commercial, un par un.",
    },
    {
      q: "Comment garder la même méthode de proposition dans toute l'équipe ?",
      a: "Avec une Skill, la compétence maison de Vibe. Réussissez une proposition dans une conversation, puis faites-la convertir par Vibe en compétence : il écrit un fichier SKILL.md que vous relisez avant de l'ouvrir à l'espace de travail. Chaque commercial l'appelle en tapant « / » et son nom. Quand elle est active, ses consignes passent devant les préférences de chaque vendeur, ce qui garantit la même structure, le même ton et les mêmes mentions obligatoires d'une proposition à l'autre.",
    },
    {
      q: "Mistral entraîne-t-il ses modèles avec les informations de nos clients ?",
      a: "Celles que lisent les connecteurs, jamais : Mistral écrit qu'elles ne sont ni stockées sur ses serveurs ni utilisées pour entraîner ou affiner ses modèles, quelle que soit l'offre. Les conversations suivent une autre règle. Sur Free, Pro et Team, elles alimentent par défaut l'entraînement ; chacun refuse sur Free et Pro, l'administrateur coupe pour tous sur Team, et Enterprise l'exclut d'office. La formation commence par ce réglage, avant le premier nom de client saisi.",
    },
    {
      q: "Quel budget prévoir pour former dix commerciaux ?",
      a: "Le prix se calcule par jour de formation, jamais par tête : 1 980 € HT, que la salle compte deux vendeurs ou douze. Pour dix commerciaux sur deux jours, la facture totale atteint 3 960 € HT ; ramenée à chacun, elle fait 396 € HT. Le financement se demande à l'OPCO dont relève votre entreprise, qui l'accorde suivant ses propres règles et dans la limite de ses fonds ; Masteria détient Qualiopi pour la catégorie des actions de formation et rassemble le dossier avec vous. Les licences Vibe, elles, se règlent auprès de Mistral.",
    },
  ],
  tarifs: {
    titre: "Ce que paie une direction commerciale, et ce qu'elle obtient",
    paras: [
      "Le prix comprend un échange préparatoire sur votre matière : la plaquette d'offre, deux propositions récentes, la liste des champs de votre fiche d'opportunité et un exemple anonymisé de compte rendu. Le formateur s'en sert pour écrire des exercices sur vos affaires, et l'équipe repart avec sa bibliothèque commerciale montée, sa compétence de proposition et ses prompts de préparation.",
      "Prenons dix commerciaux formés ensemble pendant deux jours : le total de 3 960 € HT, divisé entre eux, donne 396 € HT par vendeur. Un responsable grands comptes accompagné seul paie le même forfait de 1 980 € HT par jour. La demande de financement part vers votre opérateur de compétences (OPCO), qui tranche d'après ses règles et ses fonds ; Masteria vous en fournit les pièces. Les abonnements Vibe restent à souscrire auprès de Mistral.",
    ],
  },
  apres: {
    titre: "Après la formation, brancher Vibe sur votre CRM",
    texte: "Une équipe formée bute souvent sur la même limite : l'absence de connecteur CRM. Masteria peut écrire le connecteur MCP qui relie Vibe à votre CRM, construire un agent qui prépare chaque matin les fiches des rendez-vous du jour à partir de l'agenda et de l'historique client, ou un assistant de chiffrage branché sur votre grille tarifaire. Le projet se définit avec votre direction commerciale et votre DSI, s'évalue au forfait une fois le cadrage fait et se réalise avec nos développeurs. Il relève du développement, sort du cadre de la formation et n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Envoyez-nous la fiche d'opportunité de votre CRM : les exercices partiront de vos propres champs.",
    fin: {
      titre: "Préparons la session sur vos affaires en cours",
      texte: "Dites-nous combien de vendeurs vous comptez former, quel CRM ils utilisent, l'offre Vibe dont vous disposez et deux affaires à travailler en atelier. Vous recevez un programme ajusté et des dates possibles dans la foulée.",
    },
  },
  liensAssocies: [
    { label: "Formation IA commerciale avec ChatGPT, Copilot, Claude ou Vibe", href: '/formation-ia-commercial' },
    { label: "Un agent commercial IA construit sur votre CRM et votre offre", href: '/agent-commercial-ia' },
    { label: "La même fonction commerciale outillée avec Claude", href: '/formation-claude-commercial' },
    { label: "Mistral AI face à ChatGPT : le comparatif vérifié en octobre 2026", href: '/mistral-vs-chatgpt' },
    { label: "Le hub Mistral AI : socle de deux jours et programmes par métier", href: '/formation-mistral-ai' },
  ],
  sources: [
    { name: "Documentation Mistral, recherche web, dépêches AFP et AP, ouverture d'URL", url: "https://docs.mistral.ai/vibe/work/web-search-open-url" },
    { name: "Documentation Mistral, compétences de Vibe : /meeting-prep, /doc-coauthoring, /structured-extraction", url: "https://docs.mistral.ai/vibe/work/skills" },
    { name: "Documentation Mistral, bibliothèques partagées et droits d'accès", url: "https://docs.mistral.ai/vibe/work/libraries" },
    { name: "Documentation Mistral, catalogue des connecteurs de Vibe", url: "https://docs.mistral.ai/vibe/work/connectors" },
    { name: "Documentation Mistral, connecteurs MCP réservés à l'administrateur", url: "https://docs.mistral.ai/vibe/work/connectors/mcp-connectors" },
    { name: "Documentation Mistral, accords demandés avant un envoi ou une modification", url: "https://docs.mistral.ai/vibe/work/safety-and-approvals" },
    { name: "Documentation Mistral, Canvas, versions et export PowerPoint", url: "https://docs.mistral.ai/vibe/work/files-and-canvas" },
    { name: "Documentation Mistral, mode vocal et ses douze langues", url: "https://docs.mistral.ai/vibe/work/voice-mode" },
    { name: "CNIL : prospection commerciale par courrier électronique", url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique" },
  ],
}
