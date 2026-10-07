// Texte propre du hub /formation-microsoft-copilot (voir index.js). Réécrit le 07/10/2026.
// Faits Microsoft : fiche du 07/10/2026 (Learn, pages tarifs France, support Word et Excel,
// documentation Cowork du 29/09, notes de version du 06/10). Prix HT relevés le 07/10/2026.
export default {
  pagePropre: true,
  dateModified: '2026-10-07',
  author: true,
  metaTitle: 'Formation Copilot Microsoft 365 · Qualiopi · OPCO | Masteria',
  metaDesc: "Formation Microsoft Copilot en 2 jours : Outlook, Teams, Word, Excel, Cowork, agents, licences et données. 12 programmes métier, Qualiopi, finançable OPCO.",
  h1: 'Formation Microsoft Copilot en entreprise',
  outilCourt: 'Microsoft Copilot',
  casIds: ['industrie'],

  definition: "Une formation Microsoft Copilot (anciennement Microsoft 365 Copilot) apprend à une équipe à faire travailler l'assistant de Microsoft dans Outlook, Teams, Word, Excel et PowerPoint, sur ses propres fichiers et avec les droits d'accès de chacun. Masteria l'anime sur deux journées de 7 heures, facturées 1 980 € HT chacune, pour 12 personnes au maximum ou pour une personne seule ; sa certification Qualiopi porte sur la catégorie « actions de formation ».",

  intro: "Une société qui travaille sous Microsoft 365 dispose de Copilot à deux niveaux. Copilot Chat, compris dans l'abonnement, cherche ses réponses sur le web et dans les fichiers qu'on lui confie ; la licence Microsoft Copilot va chercher dans les mails, les fichiers, les réunions et l'agenda de chaque salarié. Copilot réécrit désormais le document Word ouvert et remanie un classeur Excel étape par étape ; avec Cowork, payé selon la consommation en plus de la licence, il mène une tâche jusqu'à l'envoi d'un mail, après votre accord. Nos formations de deux jours apprennent à vos équipes à choisir le bon niveau, à formuler une demande précise, à contrôler ce que Copilot a modifié et à décider ce qui n'entre pas dans l'outil. Douze programmes couvrent les métiers, de la finance au service client en passant par l'assistanat de direction et la DSI ; ils se suivent en groupe ou en individuel, dans vos locaux ou en visioconférence. Pour une entreprise française, l'opérateur de compétences (OPCO) dont elle relève peut financer la session, selon ses critères et son budget disponible.",

  pitch: "Copilot voit tout ce qu'un salarié a le droit d'ouvrir dans Microsoft 365, et il agit désormais dans ses fichiers : autant apprendre à le diriger.",

  titres: {
    why: 'Copilot agit dans vos fichiers : quatre raisons de former vos équipes',
    spokes: "Un programme Microsoft Copilot pour chaque métier de l'entreprise",
    programme: "Deux jours sur vos fichiers, de Copilot Chat jusqu'à Cowork",
    faq: 'Ce que nos clients demandent avant une formation Microsoft Copilot',
  },

  why: [
    {
      title: 'Le Copilot de chaque salarié dépend de sa licence',
      body: "Copilot Chat fait partie des abonnements Microsoft 365 sans supplément : il répond en puisant sur le web, et ne lit un document de l'entreprise que si on le lui dépose, s'il est ouvert dans Outlook ou Teams, ou par un agent facturé à l'usage. La licence Microsoft Copilot va chercher seule dans les mails, les fichiers, les réunions et l'agenda, grâce à Microsoft Graph, et donne accès à Researcher, à Analyst et à Modifier avec Copilot dans Word. Pour une organisation de 300 utilisateurs au plus, elle s'appelle Copilot Business. Une mention Basic ou Premium, affichée dans Word et Excel, situe chaque utilisateur. La formation part de là, pour que chacun sache ce que son compte lui ouvre.",
    },
    {
      title: 'Word et Excel modifient maintenant le fichier ouvert',
      body: "Dans Word, Modifier avec Copilot réécrit, réorganise et complète le document affiché. Microsoft en documente les limites : il ne génère pas d'image, ne gère pas les commentaires, qui peuvent disparaître quand le passage auquel ils sont ancrés change, et ne tranche pas les modifications suivies. Dans Excel, trois modes coexistent : Édition, qui modifie le classeur, Plan, qui propose une démarche à valider, et Conversation, qui analyse sans toucher au fichier. En atelier, vos équipes fixent le mode avant de rédiger leur consigne, travaillent sur une copie, puis contrôlent chaque formule et chaque montant que Copilot a produits.",
    },
    {
      title: 'Copilot révèle les partages SharePoint trop larges',
      body: "Copilot n'ouvre aucun accès nouveau : il retrouve tout ce que la personne pouvait déjà ouvrir. Un dossier SharePoint partagé par mégarde avec toute l'entreprise remonte donc dans les réponses de chacun. Microsoft conseille d'auditer les permissions avant le déploiement et de restreindre la découverte de certains contenus ; un rôle d'administrateur IA permet de piloter Copilot sans droits d'administrateur global. Les demandes et les réponses relèvent des mêmes engagements que vos mails Exchange, et les requêtes d'un salarié basé en Europe sont traitées dans l'Union, sauf quand elles partent vers un modèle d'Anthropic. La formation apprend à remonter à la source de chaque réponse et dresse l'inventaire des données qui restent hors de Copilot.",
    },
    {
      title: "Cowork et les agents passent de la réponse à l'action",
      body: "Documenté en disponibilité générale le 29 septembre 2026 pour les comptes professionnels, Copilot Cowork mène une tâche en plusieurs étapes : il envoie des mails, planifie des réunions, crée des fichiers Word, Excel, PowerPoint ou PDF et publie dans Teams. Avant chaque action sensible, il demande votre accord et en affiche le niveau de risque. Sa consommation se paie au-delà du prix de la licence. Pour un besoin plus simple, Agent Builder construit sans code un assistant ancré dans vos documents ; Copilot Studio prend la suite quand l'agent doit intervenir dans vos logiciels. La formation vous aide à placer chaque besoin au bon étage, avant d'engager un budget.",
    },
  ],

  spokesIntro: "Douze programmes de deux jours, chacun construit autour des applications qu'un métier ouvre le plus : Excel pour la finance, Outlook et Teams pour l'assistanat, PowerPoint pour le marketing. Pour une équipe qui réunit plusieurs fonctions, nous assemblons les modules utiles à chacune autour d'un tronc commun sur la méthode de demande et les règles de données.",

  carteTitres: {
    'formation-copilot-finance': 'Copilot chez les financiers et les contrôleurs de gestion',
    'formation-copilot-assistante': "Copilot au service de l'assistanat de direction",
    'formation-copilot-marketing': 'Copilot pour le marketing et la marque',
    'formation-copilot-rh': 'Copilot dans les ressources humaines',
    'formation-copilot-commercial': 'Copilot pour la force de vente',
    'formation-copilot-word-excel': 'Copilot dans Word et Excel, tous métiers',
    'formation-copilot-management': 'Copilot pour les managers et leurs comités',
    'formation-copilot-communication': 'Copilot pour la communication interne et externe',
    'formation-copilot-seo': 'Copilot pour le référencement naturel',
    'formation-copilot-service-client': 'Copilot pour la relation client',
    'formation-copilot-informatique': 'Copilot côté DSI : déployer et administrer',
    'formation-copilot-pedagogique': 'Copilot pour concevoir des formations',
  },

  spokeDescs: {
    'formation-copilot-finance': "Transformer un export comptable en mode Plan dans Excel, faire expliquer un classeur hérité, puis rédiger la note de clôture et le support du comité.",
    'formation-copilot-assistante': "Travailler dans la boîte mail déléguée du dirigeant, préparer ordres du jour et brief du matin, tirer le relevé de décisions du récapitulatif Teams.",
    'formation-copilot-marketing': "Monter le deck de lancement sur le gabarit PowerPoint de la marque, lire un bilan de campagne dans Excel, produire ses visuels dans l'espace Créer.",
    'formation-copilot-rh': "Rédiger offres et notes dans Word, régler la transcription des entretiens Teams, ouvrir un agent aux questions des salariés, situer les usages que l'AI Act encadre.",
    'formation-copilot-commercial': "Préparer un rendez-vous avec l'historique des mails et des réunions, bâtir la proposition dans Word, relancer depuis Outlook, suivre les affaires dans Excel.",
    'formation-copilot-word-excel': "Modifier avec Copilot dans Word, les trois modes d'Excel (Édition, Plan, Conversation), règles de classeur : savoir ce que Copilot change avant de l'accepter.",
    'formation-copilot-management': "Préparer un comité à partir des fils et des réunions de l'équipe, suivre les actions décidées dans Teams, confier une recherche longue à Researcher.",
    'formation-copilot-communication': "Communiqués et éléments de langage dans Word, revue de presse sourcée avec Researcher, présentations à la charte, messages internes relus dans Outlook.",
    'formation-copilot-seo': "Analyser vos exports Search Console dans Excel, écrire briefs et réécritures dans Word, suivre dans Bing Webmaster Tools les citations de vos pages par Copilot.",
    'formation-copilot-service-client': "Répondre aux réclamations délicates dans Outlook, tenir une base de réponses dans SharePoint, lire un export de tickets dans Excel, tester un agent de premier niveau.",
    'formation-copilot-informatique': "Licences, surpartage SharePoint, étiquettes Purview, rôle d'administrateur IA, activation des modèles d'Anthropic, et GitHub Copilot pour les développeurs.",
    'formation-copilot-pedagogique': "Tirer un module d'un document source, générer les questions d'évaluation dans Forms, monter les supports PowerPoint et les faire relire à la charte.",
  },

  encart: {
    titre: 'Pour bâtir vos agents Copilot, passez à la formation agents IA',
    avant: "Agent Builder suffit pour un assistant qui s'appuie sur quelques documents SharePoint. Un agent qui doit agir en plusieurs étapes dans vos logiciels se construit plutôt dans Copilot Studio, vendu à part : au 7 octobre 2026, 173,30 € HT par mois pour un pack de 25 000 crédits, ou un paiement à l'usage. Notre ",
    ancre: 'formation agents IA',
    href: '/formation-agents-ia',
    apres: " consacre deux jours à ce travail : chacun bâtit un agent pour une tâche de son poste, le met à l'épreuve sur des cas difficiles et apprend à le superviser dans la durée.",
  },

  choisir: {
    titre: 'Quel programme Copilot pour votre équipe ?',
    paras: [
      "Regardez d'abord les licences. Une équipe qui n'a que Copilot Chat travaille sur des fichiers déposés, sur le web et sur des agents simples : le programme met alors l'accent sur la méthode de demande, la vérification et les règles de données. Une équipe dotée de la licence Microsoft Copilot peut aller jusqu'à Researcher, Analyst et Cowork. Choisissez ensuite le programme du métier le plus représenté ; si le groupe mélange plusieurs fonctions, nous gardons un tronc commun le matin et séparons les ateliers l'après-midi.",
      "Une assistante de direction ou un dirigeant gagne souvent au format individuel, calé sur son agenda et ses dossiers. En septembre 2026, une assistante de direction d'un éditeur de logiciels a construit en une journée un assistant de mails pour son dirigeant dans Agent Builder, avec une règle simple : ce qui est interne ou nominatif reste dans Copilot, ce qui est public ou anonymisé peut passer par Claude. À l'autre bout, un groupe international du packaging déploie Copilot palier par palier : 24 managers pilotes ont ouvert la marche, cinq sessions se sont tenues de juillet à fin septembre 2026, deux d'entre elles en anglais, et le parcours rejoindra ses sites américains et mexicains en octobre 2026, puis indiens en décembre.",
    ],
  },

  programme: [
    {
      day: 1,
      title: 'Copilot dans Outlook, Teams, Word, Excel et PowerPoint, sur vos dossiers',
      items: [
        "Situer chaque compte : Copilot Chat inclus, licence Microsoft Copilot ou Copilot Business, mention Basic ou Premium dans les applications, et ce que Copilot voit de vos données dans chaque cas",
        "Réglages de départ : sélecteur de modèle (Auto, réponse rapide, réflexion plus poussée), sources web ou travail, modèles d'Anthropic lorsque l'administrateur les a activés",
        "Méthode de demande sur un cas de votre semaine : objectif, contexte, fichier cité avec la barre oblique, format attendu, puis relecture des noms, des dates et des montants",
        "Outlook et Teams : résumer un long fil, préparer une réponse au ton juste, tirer d'une réunion enregistrée son récapitulatif et la liste des actions",
        "Word : un premier jet construit sur vos sources, puis Modifier avec Copilot sur un document en relecture, une fois les commentaires et les modifications suivies traités",
        "Excel : choisir entre Édition, Plan et Conversation, transformer sur une copie un export de votre activité, contrôler chaque formule et chaque total",
        "PowerPoint : tirer d'un document Word un support de présentation, le mettre au gabarit de l'entreprise, repérer ce que Copilot a résumé ou laissé de côté",
      ],
    },
    {
      day: 2,
      title: "Recherche, agents, Cowork et règles d'usage de l'entreprise",
      items: [
        "Researcher et Analyst sur une question de votre activité : synthèse qui croise mails, fichiers et réunions, analyse des chiffres, contrôle des sources citées",
        "Blocs-notes Copilot : réunir les pièces d'un dossier pour que Copilot travaille sur ce seul périmètre, et reprendre le dossier de semaine en semaine",
        "Agent Builder en atelier : un assistant bâti sur vos documents SharePoint, mis à l'épreuve avec une question dont ses sources ne contiennent pas la réponse",
        "Copilot Cowork : confier une tâche en plusieurs étapes, lire son plan, valider ou refuser chaque action sensible, et savoir ce que coûte son usage",
        "Compétences : écrire une procédure réutilisable pour Cowork ou PowerPoint, au format SKILL.md que d'autres assistants savent lire",
        "Données et conformité : protection des données d'entreprise, partages SharePoint trop ouverts, RGPD, ce qui reste hors de Copilot, charte d'usage, et l'AI Act, dont l'article 4 demande d'aider le personnel à maîtriser l'IA",
        "Plan d'action à 30 jours : trois tâches outillées par participant, une bibliothèque de demandes partagée, un référent nommé et un point de mesure à un mois",
      ],
    },
  ],

  missionsTitre: "Des managers d'un groupe industriel racontent leur formation Copilot",
  avisTitre: 'Ce que les participants de nos formations écrivent sur Google',
  // Avis Google : extraits par défaut, déjà communs au site. Tous les avis figurent en entier sur la home ;
  // mettre en tête d'autres avis ici ferait baisser le texte propre de la home (mesure du 07/10/2026).
  avisPriorite: [],

  apres: {
    titre: 'Après la formation, Masteria construit vos agents Copilot',
    texte: "Une fois l'équipe à l'aise, les demandes changent de nature : un agent qui répond aux salariés à partir de l'intranet RH, une compétence Cowork qui prépare le reporting du lundi, un agent Copilot Studio relié à votre logiciel métier. Masteria précise le besoin avec vous, construit l'agent dans votre environnement Microsoft 365, le teste sur vos cas et forme enfin ceux qui le feront vivre. Ce travail relève du développement : il est chiffré au forfait à l'issue du cadrage et n'est pas finançable par votre OPCO.",
  },

  autresOutilsIntro: "Copilot donne sa pleine mesure quand l'entreprise vit dans Microsoft 365. Une équipe sous Google Workspace sera mieux servie par Gemini ; une équipe qui lit des dossiers de plusieurs centaines de pages peut préférer Claude, que Copilot propose aussi comme modèle quand l'administrateur l'active. Notre formation multi-outils place ces assistants côte à côte sur vos propres documents.",

  faq: [
    {
      q: "Microsoft Copilot remplace-t-il l'ancien Copilot de Microsoft 365 ?",
      a: "C'est le même produit sous un nouveau nom. La documentation de Microsoft appelle désormais Microsoft Copilot la licence complémentaire, et Microsoft Copilot Chat le niveau inclus dans les abonnements ; l'application a suivi, et son adresse est devenue copilot.cloud.microsoft. Microsoft précise que rien ne change pour la sécurité, la conformité et la confidentialité. Au 7 octobre 2026, les pages de prix françaises affichent encore l'ancien nom, ce qui entretient la confusion. D'autres outils portent le nom sans être le même produit : GitHub Copilot pour les développeurs, Security Copilot pour les équipes de sécurité, et Copilot Studio, licencié à part pour construire des agents.",
    },
    {
      q: 'Nos équipes doivent-elles avoir une licence Copilot avant la session ?',
      a: "Non. Copilot Chat, le niveau compris dans Microsoft 365, permet d'apprendre la méthode de demande, de travailler sur des fichiers déposés dans la conversation et créer des agents simples à partir d'instructions et de sites publics. La licence ajoute la recherche dans votre messagerie, vos documents et vos réunions, Modifier avec Copilot dans Word, Researcher et Analyst. Au cadrage, nous relevons qui dispose de quoi, et les ateliers suivent ces accès. Si vous hésitez à acheter des licences, la session est un bon moment pour en essayer quelques-unes avant de les étendre à toute l'équipe.",
    },
    {
      q: 'Combien coûte une licence Microsoft Copilot en France ?',
      a: "Au 7 octobre 2026, les pages françaises de Microsoft indiquent 26,00 € HT mensuels par utilisateur, réglés à l'année, pour les grandes entreprises, et 27,30 € HT en règlement mensuel avec un engagement d'un an. Les organisations de 300 utilisateurs au plus prennent Copilot Business, sur Microsoft 365 Business Basic, Standard ou Premium : 18,20 € HT par mois en annuel, 21,84 € HT en mensuel, toujours avec un engagement d'un an. Une remise à 15,60 € HT vaut la première année pour un client Microsoft 365 existant qui souscrit un nouvel abonnement annuel avant le 31 décembre 2026. L'offre Microsoft 365 E7 inclut déjà la licence, et Copilot Chat ne coûte rien de plus.",
    },
    {
      q: 'Nos données restent-elles protégées quand un salarié utilise Copilot ?',
      a: "Microsoft applique sa protection des données d'entreprise à Copilot Chat comme à la licence, dès que le salarié travaille avec son compte Entra (son identifiant professionnel) : vos demandes et les réponses relèvent des mêmes engagements que vos mails Exchange et vos fichiers SharePoint, et Microsoft ne s'en sert pas pour entraîner ses modèles. Les requêtes des salariés basés en Europe restent traitées dans l'Union, hormis celles confiées aux modèles d'Anthropic. Le risque principal vient de vos partages, puisque Copilot retrouve chaque document accessible à la personne qui l'interroge. En formation, l'équipe dresse la liste des informations qui ne doivent jamais entrer dans l'outil et apprend à vérifier d'où vient chaque réponse.",
    },
    {
      q: 'Peut-on utiliser Claude ou un autre modèle dans Copilot ?',
      a: "Oui. Copilot s'appuie par défaut sur les modèles d'OpenAI et propose aussi ceux d'Anthropic, dans la conversation, dans Researcher, dans Copilot Studio et dans Modifier avec Copilot. Dans l'Union européenne, Claude est désactivé par défaut et échappe à l'EU Data Boundary, la frontière européenne des données de Microsoft : un administrateur IA ou un administrateur global doit l'activer dans les paramètres de Copilot. Depuis le 6 octobre 2026, la version web permet de régénérer une réponse avec un autre modèle. En atelier, comparer deux modèles sur la même demande aide chacun à choisir le sien.",
    },
    {
      q: 'Que change Copilot Cowork pour une équipe ?',
      a: "Cowork mène une tâche jusqu'au bout : il envoie des mails, planifie des réunions, crée des fichiers Word, Excel, PowerPoint ou PDF, publie dans Teams et cherche dans l'organisation. Il demande l'accord de l'utilisateur avant toute action sensible, avec un niveau de risque affiché, et peut lancer une tâche à heure fixe ou à la réception d'un mail ou d'un message Teams. Il accepte jusqu'à 50 compétences personnalisées, en plus des siennes. Microsoft le documente en disponibilité générale depuis le 29 septembre 2026 ; sa consommation est facturée au-delà de la licence. La formation le met à l'essai sur une tâche de votre semaine, validations comprises.",
    },
    {
      q: 'Agent Builder ou Copilot Studio : où construire nos agents ?',
      a: "Copilot Chat permet déjà des agents simples, faits d'instructions et de sites publics. Avec la licence, Agent Builder (l'interface française parle aussi d'« assistant ») construit sans code un agent qui puise dans vos documents de travail : c'est l'atelier du deuxième jour. Copilot Studio sert aux agents métier branchés sur vos logiciels et vos processus. Il se licencie à part, 173,30 € HT par mois pour 25 000 crédits au 7 octobre 2026, ou à l'usage, et les titulaires de la licence utilisent sans surcoût les agents qu'il publie dans Copilot. Un projet Copilot Studio relève du développement, chiffré après cadrage.",
    },
    {
      q: 'Un OPCO peut-il financer la formation Microsoft Copilot ?',
      a: "Oui pour une entreprise française : comme Masteria détient la certification Qualiopi, l'opérateur de compétences dont elle relève peut financer la session, dans le respect de ses propres règles et des fonds qu'il lui reste. Une journée revient à 1 980 € HT, et les deux journées à 3 960 € HT pour douze participants au plus ; le tarif journalier reste identique pour un participant seul. Nous préparons avec vous les pièces que l'opérateur demande avant la session. À Genève et à Bruxelles, où l'OPCO n'existe pas, nous chiffrons en euros hors taxes. Le développement d'un agent par Masteria se chiffre à part, hors financement OPCO.",
    },
    {
      q: 'Comment former à Copilot un groupe présent dans plusieurs pays ?',
      a: "Par paliers, en mesurant chaque étape. Dans un groupe international du packaging, 24 managers pilotes sont passés en premier, et leurs retours ont corrigé les sessions suivantes : cinq sessions de deux jours au total, de juillet à fin septembre 2026, deux d'entre elles animées en anglais, avec des ateliers montés sur les fichiers du groupe. Le parcours doit partir sur les sites américains et mexicains en octobre 2026, puis sur les sites indiens en décembre, avec un formateur du réseau Masteria. Nous intervenons en France, dans le reste de l'Europe, en Inde et aux États-Unis.",
    },
  ],
}
