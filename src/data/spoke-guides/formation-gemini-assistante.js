// Contenu propre à /formation-gemini-assistante (page propre, guide terrain). Rendu par SpokePage.
// Réécrit le 07/10/2026 : faits Google relevés le 07/10/2026 (fiche FAITS-OUTILS, section Google :
// Workspace Studio plafonné dès le 01/11/2026, compétences à la place des Gems, actions entre
// applications du 09/09, Gemini Notebook), faits d'aide Google sourcés le 28/09 (liens dans `sources`).
// Aucune mission Gemini en assistanat dans data/missions-formation.js : pas de bloc terrain.
export default {
  slug: 'formation-gemini-assistante',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Gemini pour assistantes de direction : Gmail, Agenda, Meet et Workspace Studio",
  metaTitle: "Formation Gemini assistante de direction | Masteria",
  metaDesc: "Formation Gemini pour assistantes de direction : réponses Gmail, agenda partagé, notes Meet, Forms et flux Workspace Studio, sans la boîte déléguée.",
  keywords: "formation gemini assistante de direction, gemini gmail délégation, prendre des notes pour moi meet, workspace studio assistante, gemini agenda partagé",
  prerequis: "Une licence Workspace Business Standard ou supérieure, un accès délégué ou partagé à l'agenda du dirigeant, et un dossier du poste à traiter pendant la session",
  resume: "La formation Gemini pour assistantes de direction organise le poste autour de ce que Gemini sait faire dans Google Workspace, en français, depuis le compte de l'assistante : réponses préparées dans Gmail, agenda du dirigeant tenu depuis l'application, notes de comité réglées dans l'invitation, formulaires et flux Workspace Studio pour les tâches qui reviennent. Le programme se répartit sur deux journées de sept heures, chez vous ou en ligne, à douze personnes du service au maximum ou en formule individuelle. Chaque journée se règle 1 980 € HT ; la certification Qualiopi de Masteria autorise l'entreprise à solliciter son OPCO, qui fixe sa part selon ses propres règles.",
  enBref: [
    { label: 'Formation', value: "Gemini dans Gmail, Agenda, Meet, Docs, Forms, Sheets et Workspace Studio, réglé pour le binôme formé avec un dirigeant" },
    { label: 'Durée', value: "Deux jours de sept heures, enchaînés ou séparés d'une semaine d'essais au poste" },
    { label: 'Formats', value: "Sur votre site ou en visioconférence ; jusqu'à douze personnes du même service, ou une assistante suivie seule" },
    { label: 'Tarif', value: "Forfait journalier de 1 980 € HT, le même montant pour une participante ou pour douze" },
    { label: 'Financement', value: "Masteria est certifié Qualiopi ; l'OPCO de votre branche étudie la demande selon ses critères" },
    { label: 'Prérequis', value: "Business Standard ou au-dessus, et l'agenda du dirigeant partagé avec droit de modification" },
  ],
  intro: "Une assistante de direction sous Google Workspace travaille dans deux boîtes : la sienne et celle du dirigeant, ouverte par délégation. Gemini n'agit que dans la première, et l'aide de Google le dit en toutes lettres. Ce détail réorganise le poste. Les réponses se préparent dans la boîte de l'assistante avant d'être recopiées chez le dirigeant, l'agenda partagé se manipule depuis l'application Gemini, et les tâches répétitives passent par des invitations, des formulaires et des flux que l'assistante crée elle-même. Les pages qui suivent, mises à jour le 7 octobre 2026, détaillent ce déplacement fonction par fonction, avec les limites de langue, de délégation et de quotas que Google publie.",
  guide: {
    kicker: "Guide terrain",
    h2: "Gemini agit depuis le compte de l'assistante, et tout le poste se réorganise autour de cette frontière",
    lead: "Dans Workspace, Gemini voit ce que voit la personne connectée, et rien d'autre. Pour une assistante, cette règle produit une conséquence immédiate : la boîte du dirigeant, ouverte par délégation, échappe à Gemini, et le panneau latéral de Gmail ne consulte que l'agenda principal. Les assistantes qui tirent le plus de Gemini rapatrient donc une partie du travail dans leurs propres outils : invitations qu'elles émettent, formulaires qu'elles diffusent, feuilles de suivi qu'elles tiennent, flux qu'elles programment. La formation organise ce rapatriement, outil par outil.",
    sections: [
      {
        h3: "La boîte déléguée du dirigeant reste hors de portée de Gemini",
        paras: [
          "L'aide de Gmail dresse la liste des fonctions qu'une personne déléguée perd dans la boîte qu'on lui confie : Gemini dans Gmail y figure, à côté de la Rédaction intelligente et des Réponses suggérées. Aucun réglage ne lève cette limite.",
          "Trois parades tiennent dans la durée. Le dirigeant place l'assistante en copie des échanges qu'elle doit traiter, et Gemini les lit dans sa boîte à elle. Les pièces d'un dossier passent par un dossier Drive partagé, que Gemini consulte comme source. Pour l'agenda, l'application Gemini (gemini.google.com) crée, déplace et annule des rendez-vous dans les agendas secondaires et partagés, dès lors que le dirigeant a accordé le droit de modification.",
          "Cette application a ses angles morts, décrits par Google. Elle n'ajoute pas d'invités à un rendez-vous et ne touche ni au lieu ni à la description d'un événement existant ; elle exige aussi que l'option Conserver l'activité soit active. Depuis le 9 septembre 2026, Gemini peut aussi, sans quitter l'onglet ouvert, rédiger un nouveau document ou caler une réunion, grâce aux actions entre applications : un gain réel pour la préparation d'un comité, à vérifier en français sur votre domaine.",
        ],
      },
      {
        h3: "Une partie des fonctions de Gmail et d'Agenda reste en anglais",
        paras: [
          "Google publie la liste des fonctions de Gemini traduites en français, et elle réserve des surprises. Aide-moi à écrire, le résumé affiché en tête d'un long fil et le panneau Demander à Gemini fonctionnent en français. La Relecture, les Réponses suggérées et l'aperçu IA de la recherche Gmail restent anglophones, tout comme la boîte de réception triée par l'IA (AI Inbox). Aide-moi à planifier, qui insère des propositions de créneaux dans un e-mail, est limitée à l'anglais et aux États-Unis.",
          "Les créneaux suggérés lors de la création d'un événement dans Agenda n'apparaissent pas dans la liste traduite, et Google précise que les fonctions absentes de cette liste marchent en anglais seulement. Le premier atelier consiste donc à relever les fonctions visibles sur votre propre compte, car Google les ouvre par vagues et votre administrateur peut en masquer certaines.",
        ],
      },
      {
        h3: "Les notes du comité se règlent dans l'invitation, avant la réunion",
        paras: [
          "Dans Meet, Prendre des notes pour moi livre un document Google Docs en trois parties : résumé, prochaines étapes et détails. Elle rédige en français à condition que toute la réunion se tienne dans cette langue, et range le document dans le dossier Meet du Drive de l'organisateur.",
          "Le réglage se fait dans Google Agenda : modifier l'événement, ouvrir les options d'appel vidéo, puis la rubrique des enregistrements, où se coche l'option de notes automatiques. Le même écran fixe la langue et les destinataires, et le menu d'envoi des notes n'apparaît qu'aux organisateurs et coorganisateurs. Pour un comité de direction, choisissez l'envoi aux seuls organisateurs : vous relisez avant toute diffusion.",
          "Si le dirigeant crée lui-même ses réunions, les notes atterrissent dans son Drive. Demandez à devenir coorganisatrice des réunions récurrentes, ou créez-les depuis votre agenda. La rubrique Décisions, qui classe chaque point en accord, désaccord ou sujet reporté, n'est ouverte en français qu'aux comptes inscrits à Gemini Beta : sur un domaine standard, le relevé de décisions s'écrit à partir du résumé.",
        ],
      },
      {
        h3: "Workspace Studio reprend les tâches de chaque semaine, avec un quota à partir de novembre",
        paras: [
          "Workspace Studio (studio.workspace.google.com) construit des flux : un déclencheur, puis une suite d'étapes. Vous décrivez la tâche en français dans la zone prévue, Gemini propose les étapes, vous les corrigez, puis vous lancez un test avant toute mise en service.",
          "Quatre déclencheurs couvrent l'essentiel du poste : un délai avant ou après une réunion, la mise à disposition des notes d'une réunion, l'arrivée d'une réponse à un formulaire et un horaire fixe. Les étapes d'extraction, de résumé des e-mails non lus, d'ajout d'une ligne dans une feuille et de notification dans Chat suffisent à la plupart des besoins. Un flux agit depuis votre compte ; certaines étapes, comme l'envoi d'une réponse ou la copie d'un fichier, demandent votre accord quand l'exécution concerne une personne extérieure.",
          "Au 7 octobre 2026, Workspace Studio fonctionne encore sous un régime promotionnel ; Google applique ses plafonds d'usage à compter du 1er novembre 2026. Un flux déclenché à chaque e-mail entrant se compte donc avant d'être activé. L'étape qui interrogeait un Gem ne peut plus être ajoutée à un nouveau flux : la compétence prend désormais ce rôle.",
        ],
      },
    ],
    table: {
      caption: "Ce que l'assistante de direction confie à Gemini, par quelle entrée et avec quelle réserve",
      headers: ["Tâche du poste", "Entrée dans Workspace", "Réserve"],
      rows: [
        ["Répondre à un long fil arrivé dans sa propre boîte", "Résumé en tête du fil, puis Aide-moi à écrire", "Disponible en français, absent de la boîte déléguée"],
        ["Traiter un message reçu par le dirigeant", "Copie ou transfert vers sa boîte, puis Demander à Gemini", "Gemini dans Gmail n'existe pas pour une personne déléguée"],
        ["Déplacer un rendez-vous du dirigeant", "Application Gemini, agenda partagé avec droit de modification", "Lieu, description et invités se corrigent à la main"],
        ["Proposer des créneaux à un visiteur", "Pages de réservation de Google Agenda", "Aide-moi à planifier reste réservé à l'anglais et aux États-Unis"],
        ["Obtenir les notes du comité de direction", "Meet, prise de notes réglée dans l'invitation", "Une langue par réunion ; notes rangées chez l'organisateur"],
        ["Suivre les inscriptions d'un événement", "Forms, puis flux Workspace Studio vers une feuille", "Studio soumis à des quotas à partir de novembre 2026"],
      ],
    },
    cas: {
      h3: "Cas pratique : un formulaire et un flux suivent les inscriptions aux journées stratégiques",
      contexte: "Imaginons un groupe de distribution de 400 salariés et l'assistante de son directeur général. Elle organise les journées stratégiques du comité de direction élargi : 35 cadres, deux jours dans un hôtel de province, un dîner le premier soir. Elle doit recueillir présences, besoins de chambre et contraintes de repas, puis transmettre à l'hôtel une liste toujours à jour. Ce cas est un exercice de la formation.",
      etapes: [
        "Dans Google Forms, elle ouvre un formulaire vierge et décrit à Gemini les questions voulues : présence chaque jour, arrivée la veille, besoin de chambre, participation au dîner, contraintes de repas. Forms génère une seule section, qu'elle relit puis complète à la main.",
        "Elle crée la feuille Suivi journées stratégiques, onglet Inscriptions, puis ouvre Workspace Studio et y décrit la tâche en reprenant mot pour mot le prompt proposé plus bas.",
        "Elle vérifie chaque étape proposée : le déclencheur vise le bon formulaire, l'extraction liste les bons champs, l'ajout de ligne pointe vers le bon onglet. Elle lance un test avec une réponse fictive, puis active le flux.",
        "Chaque vendredi, elle ouvre la feuille, interroge Demander à Gemini sur le nombre de chambres par nuit et la liste des cadres sans réponse, puis rédige la relance dans Gmail avec Aide-moi à écrire.",
      ],
      prompt: "Construis un flux déclenché par chaque réponse envoyée au formulaire Inscription aux journées stratégiques.\n\nÉtape 1 : relève dans la réponse le prénom et le nom, la direction de rattachement, la présence le premier jour, la présence le second jour, l'arrivée la veille au soir (oui ou non), la demande de chambre avec les nuits voulues, la participation au dîner et le texte libre sur les contraintes de repas.\n\nÉtape 2 : ajoute une ligne à la feuille Google Sheets Suivi journées stratégiques, onglet Inscriptions, avec une colonne par information relevée et la date de la réponse.\n\nÉtape 3 : si la personne demande une chambre pour la veille, envoie-moi dans Google Chat son nom et ses dates, car l'hôtel confirme ces nuits séparément.\n\nÉtape 4 : si le champ des contraintes de repas n'est pas vide, envoie-moi dans Chat le nom de la personne et sa réponse recopiée telle quelle.\n\nN'envoie aucun e-mail aux participants : toutes les communications partent de moi, après relecture.",
      resultat: "Workspace Studio présente un déclencheur suivi des quatre étapes, les réponses du formulaire reliées sous forme de variables. Avant l'activation, contrôlez que chaque colonne reçoit le bon champ et qu'aucune étape d'envoi d'e-mail ne s'est glissée dans la chaîne. Les contraintes de repas méritent un soin particulier : une allergie relève de la santé, et un régime alimentaire peut révéler une conviction religieuse. L'article 9 du RGPD range ces informations parmi les données sensibles : réservez la feuille aux organisateurs et effacez ces colonnes une fois l'événement passé.",
    },
    pieges: [
      { titre: "La réponse part de l'adresse de l'assistante", texte: "Le texte se prépare dans la boîte de l'assistante, la seule où Gemini fonctionne. Envoyé de là au lieu de la boîte du dirigeant, il casse le fil chez le destinataire et brouille l'identité de l'émetteur. Copiez le texte validé dans la boîte déléguée et envoyez-le depuis celle-ci, en contrôlant le champ De." },
      { titre: "Un absent reçoit le compte rendu du comité", texte: "Pour Meet, les invités sont ceux de l'invitation Agenda, présents ou non. Si les notes partent vers tous les invités, la personne excusée reçoit le résumé d'une discussion à laquelle elle n'a pas pris part, parfois sur un sujet qui la concerne. Réglez l'envoi sur les seuls organisateurs." },
      { titre: "Des diapositives confidentielles finissent dans les notes", texte: "Lorsqu'une présentation reste affichée une dizaine de secondes, Gemini peut insérer des captures d'écran dans les notes, et un message en avertit les participants. Pour une réunion où défilent des chiffres sensibles, décochez cette option dans les réglages des notes avant de commencer." },
      { titre: "Le flux de suivi tourne plus que prévu", texte: "Un flux déclenché à chaque e-mail entrant s'exécute des centaines de fois par semaine sans que personne ne le remarque. Avec les plafonds que Google applique à Workspace Studio dès le 1er novembre 2026, il peut s'arrêter au pire moment. Préférez un déclencheur horaire ou un filtre précis sur l'expéditeur." },
    ],
  },
  audience: [
    { title: "Assistantes et assistants d'un dirigeant", desc: "Vous gérez sa boîte par délégation et son agenda partagé. La formation organise votre travail autour de ce que Gemini voit depuis votre propre compte, et de ce qui lui restera fermé." },
    { title: "Assistantes de comité ou de service", desc: "Vous préparez les réunions, suivez les décisions et relancez les participants. Vous apprenez à régler les notes de Meet dès l'invitation et à en tirer un relevé de décisions fiable." },
    { title: "Office managers et assistantes chargées des événements", desc: "Vous organisez conventions internes, formations et déplacements. Forms, Sheets et Workspace Studio prennent en charge les inscriptions, les relances et le suivi des chambres." },
  ],
  useCases: [
    { icon: '✉️', title: "Réponses préparées dans votre boîte", desc: "Le résumé en tête d'un long fil, puis Aide-moi à écrire pour la réponse ; le texte validé est recopié dans la boîte du dirigeant pour l'envoi." },
    { icon: '🗓️', title: "Agenda du dirigeant tenu depuis l'application", desc: "L'application Gemini crée, déplace et annule des rendez-vous dans l'agenda partagé ; lieu, description et invités se corrigent à la main." },
    { icon: '🎤', title: "Notes du comité réglées dans l'invitation", desc: "Les notes automatiques se cochent dans Agenda, avec la langue et les destinataires, pour que le compte rendu vous parvienne en premier." },
    { icon: '📋', title: "Inscriptions d'un événement suivies seules", desc: "Forms génère le questionnaire, et un flux Workspace Studio range chaque réponse dans la feuille de suivi en vous signalant les cas particuliers." },
    { icon: '📊', title: "Feuilles de suivi interrogées en français", desc: "Dans Sheets, Demander à Gemini compte les chambres par nuit ou liste les personnes qui n'ont pas encore répondu." },
    { icon: '📚', title: "Briefings tirés de vos dossiers", desc: "Dans Docs, Gemini rédige la note de préparation d'un rendez-vous à partir des e-mails et des fichiers Drive que vous désignez comme sources." },
  ],
  modules: [
    { day: 1, title: "Module 1 · Établir ce que Gemini voit depuis votre compte", duration: '1h30', description: "Le point de départ du poste : Gemini agit avec votre identité, et la boîte déléguée lui reste fermée.", items: ["Fonctions perdues par une personne déléguée, Gemini dans Gmail compris", "Copies, transferts, dossier Drive partagé : trois manières de donner le contexte à Gemini", "Fonctions disponibles en français et fonctions restées en anglais sur votre domaine", "Engagements de Google sur les données d'un compte professionnel, et ce que le RGPD vous demande pour les messages du dirigeant"], exercise: "Vous relevez les fonctions Gemini actives sur votre compte et tracez le chemin des messages du dirigeant que vous traitez chaque semaine." },
    { day: 1, title: "Module 2 · Passer d'un long fil Gmail à une réponse validée", duration: '2h', description: "Les fils de discussion se traitent avec les fonctions qui marchent en français, puis la réponse part de la bonne adresse.", items: ["Résumé en tête de fil et panneau Demander à Gemini", "Une demande de réponse complète : destinataire, objectif, ton du dirigeant, éléments à reprendre, longueur", "Compétence « courrier du dirigeant » : formules, signature, degrés de formalité", "Champ De contrôlé avant tout envoi depuis la boîte déléguée"], exercise: "Sur trois fils de votre boîte, vous préparez les réponses avec Gemini, puis vous les recopiez dans la boîte du dirigeant pour l'envoi." },
    { day: 1, title: "Module 3 · Tenir l'agenda du dirigeant et recevoir les visiteurs", duration: '2h', description: "L'agenda partagé se manipule depuis l'application Gemini, et les visiteurs choisissent eux-mêmes leur créneau.", items: ["Créer, déplacer et annuler un rendez-vous dans un agenda partagé", "Ce que l'application ne touche pas : invités, lieu, description d'un événement existant", "Actions entre applications lancées depuis l'onglet ouvert", "Pages de réservation d'Agenda pour les visiteurs externes"], exercise: "Vous remaniez une semaine d'agenda du dirigeant que vous assistez, puis vérifiez le lieu et les invités de chaque rendez-vous modifié." },
    { day: 1, title: "Module 4 · Régler les notes de réunion dès l'invitation", duration: '1h30', description: "La prise de notes se paramètre avant la séance, puis les notes deviennent un relevé de décisions.", items: ["Options d'appel vidéo, rubrique des enregistrements, case des notes automatiques", "Choix de la langue parlée, notes adressées aux seuls organisateurs et coorganisateurs", "Captures d'écran insérées dans les notes et réunions où l'on projette des chiffres sensibles", "Du résumé de Gemini au relevé de décisions au format de l'entreprise"], exercise: "Vous paramétrez la prochaine réunion récurrente de votre comité, puis réécrivez les notes d'une réunion passée au format de votre relevé de décisions." },
    { day: 2, title: "Module 5 · Préparer la note de briefing sur des sources choisies", duration: '1h30', description: "Un rendez-vous du dirigeant se prépare dans Docs, avec des sources désignées et votre modèle de note.", items: ["Demander à Gemini dans Docs, ajout de sources et signe @ pour désigner un fichier", "Paramètres de recherche : Drive, Gmail, Chat et Web, à ouvrir ou fermer selon le dossier", "Votre modèle de note retrouvé grâce à Adapter le format du document", "Carnet Gemini Notebook des dossiers récurrents du dirigeant, réponses rattachées à leurs passages"], exercise: "Vous rédigez la note de briefing du prochain rendez-vous externe de votre dirigeant, puis ouvrez chaque source citée sous la réponse." },
    { day: 2, title: "Module 6 · Organiser un événement avec Forms et Sheets", duration: '2h', description: "Le formulaire d'inscription et la feuille de suivi se montent en protégeant les données sensibles.", items: ["Formulaire généré par Gemini : une seule section, aucune modification d'un formulaire existant", "Demander à Gemini dans Sheets pour les décomptes et la liste des personnes sans réponse", "Fonction =IA() pour ranger les réponses libres", "Allergies et régimes alimentaires : accès restreint, effacement après l'événement"], exercise: "Vous construisez le formulaire et la feuille de suivi d'un événement de l'année, avec la relance des retardataires rédigée dans Gmail." },
    { day: 2, title: "Module 7 · Confier les tâches hebdomadaires à Workspace Studio", duration: '2h', description: "Une tâche qui revient chaque semaine devient un flux, testé avant d'être activé.", items: ["Description de la tâche en français, relecture des étapes, exécution d'essai", "Déclencheurs : avant ou après une réunion, notes disponibles, réponse à un formulaire, horaire", "Étapes : extraction, résumé des non-lus, ligne ajoutée, notification dans Chat", "Quotas effectifs le 1er novembre 2026, accord demandé pour un destinataire externe"], exercise: "Vous construisez et testez un flux sur une tâche répétitive de votre semaine, par exemple le point du matin sur vos messages non lus." },
    { day: 2, title: "Module 8 · Écrire avec le dirigeant les règles du binôme", duration: '1h30', description: "Le binôme fixe ce que Gemini prépare, ce qui se relit, où se rangent les dossiers et ce qui change dans le mois.", items: ["Messages relus par l'assistante seule, messages qui attendent le dirigeant", "Drive partagé, droits de chacun, remplacement en cas d'absence", "Adresses Gmail privées et outils des Google Labs écartés ; attestation de formation gardée, en écho à l'obligation de maîtrise de l'IA (AI Act, article 4)", "Plan à 30 jours : deux flux en service, la compétence de courrier diffusée, un point avec le dirigeant"], exercise: "Vous rédigez la fiche de fonctionnement du binôme : délégations, circuits de relecture, dossiers partagés, diffusion des notes, et votre plan du mois." },
  ],
  objectives: [
    "Le participant prépare dans Gmail une réponse avec Aide-moi à écrire et l'envoie depuis la boîte qui convient.",
    "Le participant modifie l'agenda partagé du dirigeant avec l'application Gemini et corrige les champs que l'application laisse intacts.",
    "Le participant paramètre la prise de notes de Meet depuis une invitation et transforme les notes en relevé de décisions.",
    "Le participant rédige une note de briefing dans Docs à partir de sources désignées et contrôle chaque source citée.",
    "Le participant monte le formulaire et la feuille de suivi d'un événement en restreignant l'accès aux données sensibles.",
    "Le participant crée et teste un flux Workspace Studio, et vérifie qu'il reste sous les quotas de l'outil.",
  ],
  faq: [
    { q: "Ma délégation sur la messagerie du dirigeant donne-t-elle accès à Gemini dans sa boîte ?", a: "Non. Gmail le précise dans son aide : Gemini fait partie des fonctions qu'une personne déléguée ne retrouve pas dans la boîte qu'on lui confie. Gemini lit votre propre messagerie et les fichiers Drive auxquels vous avez accès. La formation montre comment organiser copies, transferts et dossiers partagés pour travailler malgré cette frontière, et comment recopier ensuite le texte validé dans la boîte du dirigeant pour l'envoyer depuis la bonne adresse." },
    { q: "Quelle édition de Google Workspace la formation suppose-t-elle ?", a: "Les fonctions décrites sur cette page sont documentées pour Business Standard et les éditions supérieures. Business Starter ne donne Gemini que dans Gmail et dans l'application, sans Docs, Sheets ni Meet. Workspace Studio et Gemini Beta dépendent en outre des réglages de votre administrateur. Le cadrage de la session commence par ce relevé, compte par compte, pour qu'aucun atelier ne tombe sur une fonction invisible." },
    { q: "Les notes de Meet peuvent-elles tenir lieu de procès-verbal ?", a: "Elles servent de brouillon. Le procès-verbal d'un conseil d'administration ou d'une assemblée générale engage la société, et sa rédaction reste celle de l'assistante ou du secrétaire de séance. Les notes de Gemini aident à ne rien oublier, mais elles peuvent attribuer une prise de parole à la mauvaise personne ou arrondir un montant. Relisez les noms, les chiffres et les dates avant de vous en servir, et gardez la décision finale sur le texte." },
    { q: "Google apprend-il quelque chose des messages du dirigeant ?", a: "Google indique que les contenus d'un compte Workspace professionnel ne sont ni lus par ses équipes ni utilisés pour entraîner un modèle hors de votre domaine, sauf autorisation. Gemini n'ouvre que ce que la personne connectée peut déjà ouvrir. Cette garantie ne vaut pas pour une adresse Gmail privée ni pour les outils des Google Labs, qui suivent leurs propres conditions : ils sont à tenir loin des dossiers d'un dirigeant." },
    { q: "Comment proposer des créneaux en français à un visiteur externe ?", a: "La fonction Gmail Aide-moi à planifier n'existe qu'en anglais et aux États-Unis. Les pages de réservation de Google Agenda, comprises dans Business Standard, rendent le même service en français : le visiteur choisit un créneau libre, et le rendez-vous se crée dans l'agenda que vous avez désigné. Vous fixez à l'avance les plages ouvertes, la durée des rendez-vous et les questions posées à la réservation." },
    { q: "Workspace Studio peut-il envoyer des e-mails à ma place ?", a: "Oui, des étapes d'envoi de message et de réponse existent, et certaines demandent votre accord quand le destinataire est externe. Sur un poste d'assistante, mieux vaut commencer par des notifications dans Chat et des feuilles de suivi, puis automatiser l'envoi quand le flux a tourné quelques semaines sans erreur. Tenez aussi compte des quotas que Google impose à Workspace Studio dès novembre 2026." },
    { q: "Que devient le Gem qui rédigeait les courriers du dirigeant ?", a: "Il continue de servir pour l'instant, mais Google le remplace par une compétence, un ensemble de consignes au format SKILL.md. Elle arrive sur les comptes Workspace par vagues, la première le 5 octobre 2026. Rangés dans les réglages le 17 novembre, les Gems resteront utilisables par les comptes d'entreprise au moins jusqu'en mars 2027, avant de devenir des brouillons inactifs. En formation, vous réécrivez ce Gem en compétence, partageable avec une collègue qui vous remplace." },
    { q: "Combien coûtent les deux jours, et qui peut les financer ?", a: "Le prix d'une journée s'élève à 1 980 € HT, aussi bien pour une assistante seule que pour douze, ce qui porte les deux jours à 3 960 € HT. Grâce à la certification Qualiopi de Masteria, l'entreprise peut présenter la session à l'OPCO de sa branche ; celui-ci décide du montant financé d'après ses critères et les fonds encore disponibles. Masteria vous remet, prêts à joindre au dossier, le déroulé des deux jours et la convention. Hors de France, à Genève comme à Bruxelles, aucun OPCO n'existe : le devis s'exprime alors en euros hors taxes." },
  ],
  tarifs: {
    titre: "Ce que comprend le prix pour un service d'assistanat",
    paras: [
      "Le prix couvre la préparation du formateur avec vous : relevé des fonctions actives sur les comptes des participantes, examen d'une semaine type d'agenda, choix d'un événement réel de l'année pour le module 6. S'y ajoutent les supports, les prompts réglés sur les courriers de vos dirigeants et la fiche de fonctionnement du binôme rédigée au module 8.",
      "Un service qui inscrit cinq assistantes de direction forme un groupe de cinq : l'intra de deux jours coûte 3 960 € HT au total, c'est-à-dire 792 € HT par participante. Une assistante formée seule, au rythme de son dirigeant, paie la journée 1 980 € HT. L'OPCO de la branche peut ensuite être sollicité, Masteria étant certifié Qualiopi ; il arrête sa part de financement, et nous préparons le dossier ensemble.",
    ],
  },
  apres: {
    titre: "Après la formation, des automatismes taillés pour le binôme",
    texte: "Une fois les flux simples en service, d'autres besoins apparaissent : un agent qui prépare chaque soir le dossier des rendez-vous du lendemain à partir de l'agenda et des pièces Drive, un circuit qui suit les notes de frais du dirigeant jusqu'à la comptabilité, un assistant qui répond aux questions logistiques des participants à un événement. Masteria peut cadrer ces outils, les construire sur vos comptes, puis accompagner celles et ceux qui les utiliseront. Ce travail relève du conseil et du développement : chiffré au forfait après cadrage, il n'est pas finançable par votre OPCO, qui ne prend en charge que la formation.",
  },
  cta: {
    milieu: "Dites-nous combien de dirigeants vos assistantes accompagnent : le programme s'ajuste à leurs agendas.",
    fin: {
      titre: "Organisons la session autour de la semaine type de vos assistantes",
      texte: "Précisez l'édition Workspace utilisée, la façon dont les boîtes et agendas des dirigeants sont partagés, et un événement que le service prépare cette année. Nous vous adressons un programme bâti sur ces éléments et des dates de session.",
    },
  },
  liensAssocies: [
    { label: "Toute la formation Google Gemini, métier par métier", href: '/formation-gemini-entreprise' },
    { label: "Formation IA pour l'assistanat de direction, tous outils", href: '/formation-ia-assistante' },
    { label: "La même fonction outillée avec Copilot sous Microsoft 365", href: '/formation-copilot-assistante' },
    { label: "Comparer plusieurs assistants sur le poste d'assistante", href: '/formation-multi-outils-assistante' },
  ],
  sources: [
    { name: "Aide Gmail, fonctions indisponibles pour une personne déléguée", url: "https://support.google.com/mail/answer/138350?hl=fr" },
    { name: "Aide Gmail, fonctions Gemini et langues prises en charge dans la messagerie", url: "https://support.google.com/mail/answer/16831098?hl=fr" },
    { name: "Liste Google des fonctions Gemini traduites dans chaque langue", url: "https://support.google.com/mail/answer/14925782?hl=fr" },
    { name: "Aide Gmail, Gemini limité à l'agenda principal dans le panneau latéral", url: "https://support.google.com/mail/answer/14355636?hl=fr" },
    { name: "Aide Applications Gemini, événements créés et gérés dans Agenda", url: "https://support.google.com/gemini/answer/15305236?hl=fr" },
    { name: "Google Meet : notes rédigées automatiquement par Gemini", url: "https://support.google.com/meet/answer/14754931?hl=fr" },
    { name: "Aide Google Meet, réglages des notes dans Agenda et dans Meet", url: "https://support.google.com/meet/answer/16909639?hl=fr" },
    { name: "Aide Workspace Studio, déclencheurs et étapes disponibles", url: "https://support.google.com/workspace-studio/table/17176961?hl=fr" },
    { name: "Aide Workspace Studio, flux décrit en langage courant", url: "https://support.google.com/workspace-studio/answer/16448469?hl=fr" },
    { name: "Plafonds d'IA de Google Workspace, dont Workspace Studio au 1er novembre 2026", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
    { name: "Google : ce que deviennent les Gems des comptes professionnels", url: "https://knowledge.workspace.google.com/p/gems-migration" },
    { name: "Aide Google Forms, questionnaire créé avec Gemini", url: "https://support.google.com/docs/answer/16346789?hl=fr" },
    { name: "Aide Google, données protégées dans Gemini pour Workspace", url: "https://support.google.com/mail/answer/14615114?hl=fr" },
    { name: "RGPD (règlement 2016/679), article 9 sur les données sensibles", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
  ],
}
