/*
 * Texte propre du hub /formation-multi-outils (voir index.js), réécrit le 07/10/2026.
 * Faits outils : scratchpad FAITS-OUTILS-2026-10-07 (relevé du 7 octobre 2026) et
 * src/data/claude-facts.js (vérifié le 5 octobre 2026). Missions : data/missions-formation.js,
 * cas : data/etudes-de-cas.js (sans modification de ces fichiers).
 * Prix ChatGPT Business en euros : HT ou TTC non confirmé au 07/10, d'où la formule « affichés pour la France ».
 */
export default {
  pagePropre: true,
  dateModified: '2026-10-07',
  author: true,

  metaTitle: "Formation multi-outils IA : choisir son assistant | Masteria",
  metaDesc: "Deux jours pour comparer Copilot, ChatGPT, Gemini, Claude et Vibe sur vos documents, puis trancher avec une grille argumentée. Qualiopi, 1 980 € HT/jour.",
  h1: "Formation multi-outils IA : tester cinq assistants sur vos dossiers avant de choisir",
  outilCourt: 'multi-outils IA',

  definition: "Une formation multi-outils IA fait travailler ChatGPT, Microsoft Copilot (anciennement Microsoft 365 Copilot), Google Gemini, Claude et Vibe (Mistral AI) sur les mêmes documents d'une équipe, pour relever leurs écarts et décider lequel retenir ou comment les combiner. Masteria la donne en deux journées de 7 heures, au prix unitaire de 1 980 € HT, à douze stagiaires au plus en intra ou à une seule personne ; la session relève de la certification Qualiopi que Masteria détient au titre des actions de formation.",

  intro: "Dans bien des équipes, l'assistant IA s'est choisi poste par poste, au gré des habitudes de chacun. La formation multi-outils remet ce choix à plat. Pendant deux jours, le groupe soumet les mêmes pièces de son activité aux cinq assistants, note ce que chacun en tire, puis confronte ces notes aux critères de l'entreprise : la suite bureautique déjà payée, la longueur des dossiers, l'endroit où partent les données, le prix par siège. Elle s'adresse aux équipes qui n'ont encore rien arbitré et à celles qui jonglent déjà avec plusieurs outils sans règle commune. À la sortie, le groupe tient une grille de choix argumentée, que la direction peut reprendre pour décider.",

  pitch: "Mettre les assistants à l'épreuve de vos dossiers avant d'engager le budget des licences.",

  casIds: ['photovoltaique'],
  // Avis Google : extraits par défaut, déjà communs au site. Tous les avis figurent en entier sur la home ;
  // mettre en tête d'autres avis ici ferait baisser le texte propre de la home (mesure du 07/10/2026).
  avisPriorite: [],
  avisTitre: "Ce que les participants écrivent sur notre fiche Google",
  missionsTitre: "Ce que des équipes ont comparé, et ce qu'elles en retiennent",

  titres: {
    why: "Quatre écarts entre les assistants qui décident du choix",
    spokes: "Le comparatif appliqué aux livrables de chaque métier",
    programme: "Deux jours pour comparer sur pièces, puis trancher",
    faq: "Ce que l'on nous demande avant de comparer les assistants",
  },

  carteOutil: 'Panorama IA',
  carteTitres: {
    'formation-vibe-coding': "Vibe coding : une application décrite en langage courant, codée par l'IA",
    'formation-prompt-engineering': "Prompt engineering : une méthode valable dans chaque assistant",
    'formation-multi-outils-marketing': "Marketing : quel assistant pour quelle étape de campagne",
    'formation-multi-outils-ressources-humaines': "Ressources humaines : comparer sans exposer les dossiers",
    'formation-multi-outils-commercial': "Commercial : un assistant par étape de la vente, sur vos dossiers",
    'formation-multi-outils-management': "Management : choisir l'outil selon la matière traitée",
    'formation-multi-outils-assistante': "Assistanat de direction : travailler dans la boîte d'un autre",
    'formation-multi-outils-seo': "SEO : répartir le référencement entre les assistants",
    'formation-multi-outils-service-client': "Service client : tickets et réclamations passés dans chaque outil",
  },

  spokesIntro: "Sept programmes reprennent la comparaison sur les livrables d'un métier, du fil de tickets du service client au dossier d'appel d'offres de l'équipe commerciale ; pour la finance, la communication, la DSI et la pédagogie, la page métier fait le même travail. Deux autres valent pour tous les profils : la méthode de demande, utile quel que soit l'assistant retenu, et le vibe coding, pour bâtir une petite application en la décrivant.",

  spokeDescs: {
    'formation-vibe-coding': "Décrire à Cursor, Replit, v0, Bolt.new ou Lovable l'outil interne ou le prototype dont l'équipe a besoin, puis relire ce qui sort, le tester, et repérer le moment où l'informatique doit reprendre le projet.",
    'formation-prompt-engineering': "Une journée sur une méthode de demande qui tient dans ChatGPT comme dans Copilot, Gemini, Claude ou Vibe : consigne structurée, sources exigées, réponses vérifiées, puis une bibliothèque que toute l'équipe réutilise.",
    'formation-multi-outils-marketing': "Répartir brief, plan de campagne, déclinaisons et bilan mensuel entre les assistants, avec la voix de la marque consignée dans une compétence et les visuels confiés à l'outil qui sait les produire.",
    'formation-multi-outils-ressources-humaines': "Tester les outils sur des dossiers chargés de données personnelles, décider lesquels peuvent recevoir un compte rendu d'entretien, et garder le tri des candidatures hors de portée de l'IA.",
    'formation-multi-outils-commercial': "Préparer un rendez-vous, bâtir la réponse à une consultation, relancer : chaque étape confiée à l'assistant qui accède à la bonne source (messagerie, CRM, traitement de texte) sans exposer vos conditions tarifaires.",
    'formation-multi-outils-management': "Réunions, reporting et notes à la direction d'un côté, informations nominatives sur les collaborateurs de l'autre : l'outil se choisit selon la matière, avec la limite que posent l'AI Act et le droit du travail.",
    'formation-multi-outils-assistante': "Messagerie et agenda délégués, comptes rendus, préparation des comités : vérifier ce que chaque assistant sait faire dans la boîte d'un autre avant de lui confier la semaine du dirigeant.",
    'formation-multi-outils-seo': "Search Console, export de crawl et pages du site soumis à plusieurs assistants : lequel classe les requêtes, lequel rédige le brief, lequel écrit le balisage, et ce qu'aucun ne sait sans vos données.",
    'formation-multi-outils-service-client': "Un export de tickets et vos réclamations les plus délicates traités dans chaque outil, pour retenir celui qui répond juste, garde le ton maison et respecte les données des clients.",
  },

  encart: {
    titre: "Avant la session : un premier tri en deux minutes",
    avant: "Notre ",
    ancre: "comparateur d'outils IA par métier",
    href: '/quel-outil-ia',
    apres: " classe les cinq assistants selon votre métier, votre suite bureautique et vos contraintes de données. Demandez à deux ou trois membres de l'équipe de le remplir avant la formation : l'écart entre leurs classements lance la discussion de la première matinée. Pour le détail outil par outil, le hub « Quelle est la meilleure IA ? » rassemble nos comparatifs.",
  },

  choisir: {
    titre: "Programme général, programme métier ou format individuel ?",
    paras: [
      "Le programme général de deux jours convient à un groupe venu de plusieurs services, ou à un comité qui doit trancher pour toute l'entreprise : les ateliers tournent sur des pièces venues de chaque service, et la grille finale pèse les besoins de tous. Une équipe soudée autour d'un même métier ira plus loin avec le programme qui lui est dédié, parce que chaque atelier y porte sur ses livrables : tickets pour le service client, clôture et tableaux de bord pour la finance, briefs et calendriers pour le marketing. Un dirigeant qui veut se forger une opinion avant de décider peut suivre la comparaison seul avec le formateur.",
      "Si l'outil est déjà choisi, la formation consacrée à cet outil vous servira mieux : ses deux jours vont à ses fonctions et à ses réglages. Quand la décision engage des centaines de licences, un intégrateur ou un appel d'offres, elle mérite un regard de conseil en amont. Dans une PME de distribution photovoltaïque, l'outil commun faisait partie des trois décisions soumises en septembre 2026 à sa direction, au terme d'un diagnostic mené flux de travail par flux de travail. Votre OPCO ne finance pas ce volet de conseil, alors qu'il peut financer la formation qui suit.",
    ],
  },

  apres: {
    titre: "Après la grille : installer l'outil retenu",
    texte: "La grille désigne l'assistant à retenir ; reste à l'installer pour qu'il serve chaque semaine. Masteria peut écrire avec vos référents les premières compétences de l'outil choisi, régler ses connecteurs vers vos logiciels avec les droits de chacun, remplacer les comptes personnels par une offre d'équipe administrée, puis former les services absents de la session. Ce volet, pas finançable par votre OPCO puisqu'il s'agit de conseil et de développement, donne lieu à un forfait établi après cadrage.",
  },

  autresOutilsIntro: "Quand la grille a désigné un outil, ou deux, chacun dispose d'un programme de deux jours qui lui est propre, centré sur ses fonctions, ses réglages d'administration et les métiers qui s'en servent le plus. Partez de celui qui correspond à votre choix.",

  why: [
    {
      title: "La suite bureautique en place oriente le premier choix",
      body: "Copilot et Gemini vivent dans une suite. Quand l'utilisateur a la licence Microsoft Copilot, l'assistant puise dans Microsoft Graph, c'est-à-dire vos réunions Teams, vos échanges Outlook et les documents rangés dans SharePoint ; sans elle, Copilot Chat, compris dans Microsoft 365, s'en tient au web et aux pièces qu'on lui confie. Chez Google, Gemini travaille dans Docs, Sheets, Slides, Gmail et Meet à partir de Business Standard, quand Business Starter n'offre que Gmail et l'application Gemini. ChatGPT et Claude entrent désormais dans PowerPoint, Excel et Word par leurs extensions : l'écart se joue alors sur l'accès au reste de vos données, que la formation teste fichier par fichier.",
    },
    {
      title: "La longueur des dossiers lisibles dépend de l'offre souscrite",
      body: "La fenêtre de contexte désigne la quantité de texte que l'assistant garde sous les yeux pendant un échange ; on la mesure en tokens, ces fragments de mots que traite le modèle. Au 7 octobre 2026, ChatGPT Business tient 256 000 tokens quand il raisonne, environ 320 pages selon OpenAI, et 54 000 quand il répond en mode instantané. Les abonnements payants de Claude montent à un million avec ses trois modèles récents, comme Gemini à partir de Business Standard, qui retombe à 32 000 en Business Starter. Microsoft ne communique aucune taille pour Copilot, qui repère dans vos fichiers l'extrait utile. Un appel d'offres de 400 pages entre donc d'un bloc dans certains outils et se découpe dans d'autres.",
    },
    {
      title: "Chaque éditeur fait suivre à vos données un chemin différent",
      body: "Mistral héberge par défaut en Union européenne ce que reçoit Vibe. Microsoft applique son EU Data Boundary aux trois niveaux de Copilot, à l'exception des modèles d'Anthropic, qu'il revient à l'administrateur d'activer pour ses utilisateurs européens. Les applications d'Anthropic n'offrent aucune région européenne : une entreprise qui veut ses données en Europe passe par les plateformes cloud d'Amazon (Bedrock) ou de Google (Vertex AI). L'entraînement des modèles varie tout autant. Exclu par défaut sur ChatGPT Business, Claude Team et les comptes Google Workspace, il reste actif sur Vibe Team tant que l'administrateur ne l'a pas coupé, et sur ChatGPT Plus jusqu'à ce que l'abonné décoche « Améliorer le modèle pour tous ». Chaque participant vérifie donc le compte qu'il emploie.",
    },
    {
      title: "Les assistants maison changent de format cet automne",
      body: "Trois éditeurs remplacent leurs assistants configurés. OpenAI a annoncé le retrait des GPTs pour le 11 décembre 2026. Google déploie depuis le 5 octobre des compétences qui prennent la place des Gems, dont les comptes professionnels perdront l'usage, pas avant le 1er mars 2027. Chez Mistral, les Skills ont remplacé les agents de Vibe le 22 septembre. Le format qui se généralise range chaque compétence dans un dossier, avec ses consignes dans un fichier SKILL.md ; Anthropic en a publié le standard, ouvert à tous, le 18 décembre 2025 ; Google, Microsoft et OpenAI l'ont adopté depuis. Une procédure écrite une fois dans ce format change d'outil sans repartir de zéro.",
    },
  ],

  programme: [
    {
      day: 1,
      title: "Mettre les cinq assistants à l'épreuve des mêmes documents",
      items: [
        "État des lieux à la date de la session : offres, modèles et fonctions de ChatGPT, Microsoft Copilot, Gemini, Claude et Vibe, et ce que l'automne 2026 a changé (fin annoncée des GPTs, compétences chez Google, Copilot Cowork, Skills de Vibe)",
        "Une méthode de demande commune aux cinq outils : rôle, contexte, pièce source, consigne, format de sortie, puis la même demande envoyée partout pour comparer à armes égales",
        "Réglages de chaque compte avant le premier essai : instructions personnalisées, mémoire, choix du modèle ou du mode de réflexion, option d'entraînement à vérifier selon l'offre",
        "Atelier sur un dossier long apporté par le groupe : ce que chaque fenêtre de contexte laisse passer d'un bloc, ce qu'il faut découper, et trois citations tirées au hasard pour vérifier",
        "Atelier bureautique : Copilot sur un classeur Excel, une boîte Outlook et un document Word, Gemini sur Docs, Sheets et Gmail, face aux extensions Office de ChatGPT et de Claude ouvertes sur le même fichier",
        "Atelier tableur : un fichier de chiffres de l'équipe analysé par chaque outil, avec contrôle des totaux à la main avant de croire un graphique",
        "Relevé des écarts dans une grille commune : fidélité au document, qualité du français, temps passé, nombre de reprises nécessaires",
      ],
    },
    {
      day: 2,
      title: "Trancher, encadrer et installer l'outil retenu",
      items: [
        "Où partent les données : hébergement, entraînement par défaut, réglages d'administrateur, de l'EU Data Boundary de Microsoft à l'hébergement européen de Vibe, et les comptes personnels à fermer",
        "Tri des documents de l'équipe en quatre catégories (public, interne, personnel, confidentiel) et, pour chacune, la règle RGPD et les outils autorisés",
        "Écrire une procédure du métier au format SKILL.md, l'essayer dans deux assistants, et convertir les GPTs ou les Gems existants avant leur retrait",
        "Agents et tâches longues comparés : Copilot Cowork, ChatGPT Work et les agents partagés d'OpenAI, Cowork dans Claude, Skills de Vibe, avec leur coût à l'usage quand il existe",
        "Prix par siège et budget sur un an pour la taille de votre équipe, calculés à partir des tarifs publics relevés le jour de la session",
        "La charte d'usage rédigée par le groupe, puis l'article 4 de l'AI Act et ce qu'il attend de l'employeur : quel outil pour qui, sur quel compte, pour quelles données, et la trace des formations que l'entreprise conserve",
        "Grille de choix finalisée et plan d'action des 30 premiers jours : outil principal ou combinaison, comptes à ouvrir ou à fermer, un référent par équipe, un point de mesure au bout d'un mois",
      ],
    },
  ],

  faq: [
    {
      q: "À quelles équipes s'adresse la formation multi-outils IA ?",
      a: "Elle sert d'abord le service qui hésite encore entre plusieurs assistants et veut décider sur pièces. Elle convient aussi à une entreprise où plusieurs outils circulent déjà, souvent sur des comptes personnels, et qu'il faut ramener à une règle commune. Elle aide enfin une direction ou une DSI qui s'apprête à signer des licences pour l'ensemble du personnel : la décision s'appuie alors sur des essais menés par les futurs utilisateurs. Nul besoin de bagage technique : la première matinée installe une méthode de demande commune, puis chacun travaille sur les documents de son poste.",
    },
    {
      q: "Comment la grille de choix départage-t-elle les assistants ?",
      a: "La grille croise vos critères et les essais du groupe. Les critères viennent de l'entreprise : suite bureautique en place, longueur des dossiers, sensibilité des données, connecteurs nécessaires, budget par siège. Chacun reçoit un poids, fixé avec vous le premier matin. Les notes viennent des ateliers : sur chaque document testé, le groupe relève la fidélité au texte, la qualité du français, le temps passé et le nombre de reprises. Le résultat désigne un outil principal, parfois une paire, avec les raisons écrites en face de chaque note. La direction peut reprendre la grille telle quelle pour arrêter sa décision.",
    },
    {
      q: "Peut-on faire cohabiter plusieurs assistants dans une même entreprise ?",
      a: "Oui, à condition d'écrire qui sert à quoi. Une répartition simple associe l'outil intégré à la messagerie et aux tableurs, pour les mails, les réunions et les chiffres, à un assistant généraliste pour les dossiers longs. Une assistante de direction de l'édition logicielle, formée en septembre 2026, est repartie avec une règle courte : les informations internes et nominatives passent par Copilot, les textes publics ou anonymisés par Claude, et le moindre doute renvoie vers Copilot. Les frontières bougent aussi : Microsoft propose des modèles d'Anthropic dans Copilot, coupés par défaut en Europe tant qu'aucun administrateur ne les a autorisés.",
    },
    {
      q: "Quelle quantité de texte chaque assistant lit-il d'un coup ?",
      a: "Cela dépend de l'offre plus que de la marque. Au 7 octobre 2026, ChatGPT Business accepte 256 000 tokens en raisonnement et 54 000 en réponse instantanée ; l'offre Pro monte à 400 000. Avec ses trois modèles sortis en septembre 2026, un abonnement Claude payant tient un million de tokens, de l'ordre de 2 500 pages d'après l'équivalence que donne Anthropic. L'application Gemini atteint le même million dès Google Workspace Business Standard, contre 32 000 tokens en Business Starter. Ni Microsoft pour Copilot ni Mistral pour Vibe ne publient de plafond par offre. En formation, chacun éprouve la limite sur un dossier de son service.",
    },
    {
      q: "Où vont nos données, et l'éditeur s'en sert-il pour entraîner ses modèles ?",
      a: "Côté offres d'entreprise, l'entraînement est exclu par défaut chez OpenAI (Business, Enterprise), chez Anthropic (Team, Enterprise), chez Microsoft avec un compte professionnel et chez Google pour Workspace. Vibe fait exception : sur l'offre Team, l'option d'entraînement demeure active tant que l'administrateur ne l'a pas désactivée pour tous les comptes de l'organisation, et seule l'offre Enterprise l'exclut d'office. Pour l'hébergement, Mistral conserve les données en Union européenne par défaut, Microsoft les garde dans son périmètre européen, modèles d'Anthropic exceptés, et Anthropic renvoie vers Vertex AI chez Google ou Bedrock chez Amazon pour un hébergement européen. Le deuxième jour, l'équipe classe ses documents et décide ce qui entre dans chaque outil.",
    },
    {
      q: "Combien coûtent les licences des cinq assistants ?",
      a: "Les tarifs publics du 7 octobre 2026 donnent ces repères. La licence Microsoft Copilot se monte à 26 € HT pour un utilisateur et un mois, payés à l'année, en sus de Microsoft 365. Copilot Business, réservé aux structures de 300 utilisateurs au plus, descend à 18,20 € HT, soit 4 368 € HT sur un an pour vingt personnes (la page tarifs française garde l'ancien nom). Gemini est compris dans Google Workspace, dont la formule Business Standard coûte 13,60 € mensuels par personne en engagement annuel. ChatGPT Business est affiché à 21 € par mois et par utilisateur pour la France, à l'année. Claude Team demande 25 $ par siège au mois, 20 $ à l'année, et Vibe Team 24,99 $ HT par siège et par mois.",
    },
    {
      q: "Que deviennent les GPTs et les Gems que l'équipe a déjà créés ?",
      a: "Ils arrivent en fin de vie. OpenAI annonce leur retrait pour le 11 décembre 2026 ; un GPT migré vers un plugin garde ses instructions, devenues une compétence, et ses fichiers de connaissance, mais perd ses actions personnalisées et ses conversations. Chez Google, les Gems seront déplacés le 17 novembre 2026 vers les réglages de l'application, puis convertis en brouillons de compétences, inactifs tant que leur créateur ne les réactive pas ; l'usage cessera pour les comptes professionnels, pas avant le 1er mars 2027. La formation ne fait donc plus bâtir sur ces objets : elle transforme vos assistants existants en compétences, transposables dans un autre assistant.",
    },
    {
      q: "Faut-il un compte sur chaque outil pour suivre la formation ?",
      a: "Non. Avant la session, nous recensons les comptes de chaque participant et l'offre qui s'y rattache, parce que réglages et limites changent avec l'offre. Les outils que l'entreprise possède se testent sur ses comptes professionnels. Pour un assistant qu'elle n'a pas encore, on l'essaie avec des pièces publiques ou anonymisées, jamais sur des documents confidentiels déposés dans un compte personnel. Une interprofession agricole a comparé six assistants de cette façon en septembre 2026, à partir de documents publics de sa filière, avant de remplir en groupe sa grille de choix des outils.",
    },
    {
      q: "La formation multi-outils ouvre-t-elle droit au financement de l'OPCO ?",
      a: "Oui, pour les entreprises établies en France. Masteria étant titulaire de la certification Qualiopi, votre OPCO de branche a la possibilité de régler la session, selon ses règles et à hauteur de ses fonds. La journée vaut 1 980 € HT, et ce prix reste identique avec douze participants en intra, le plafond du groupe, ou avec une seule personne ; le programme général de deux jours revient donc à 3 960 € HT, groupe complet ou non. Genève et Bruxelles n'ont pas d'OPCO : le devis y est libellé en euros HT. Les documents que réclame l'opérateur, du programme à la convention, sont joints à l'inscription.",
    },
  ],
}
