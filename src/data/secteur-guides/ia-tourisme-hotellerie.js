// Contenu propre à /ia-tourisme-hotellerie. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : INSEE (fréquentation 2025, Insee Focus n° 387 sur l'été 2026), France Travail (BMO 2026), Commission (AI Act art. 50 consolidé, factsheet DMA Booking du 28/09/2026), HOTREC (étude distribution du 15/09/2026), Légifrance (L.311-5-1 du code du tourisme, L.121-4 du code de la consommation), Google (règles sur les avis), GHR (alerte du 22/09/2026).
export default {
  slug: 'ia-tourisme-hotellerie',
  dateModified: '2026-10-07',
  pagePropre: true,
  hero: {
    chips: ["Messages en plusieurs langues", "PMS et moteur de réservation", "Avis et demandes de groupes"],
    lien: "Voir où les messages arrivent",
  },
  offresTitre: {
    kicker: "Trois interventions",
    h2: "Lire vos messages, construire l'assistant, automatiser le séjour",
  },
  enjeux: {
    kicker: "Tourisme et hôtellerie",
    h2: "Une demande sans réponse la nuit est une réservation perdue",
    difficultes: "Ce qui déborde la réception et la réservation",
    prestations: "Ce que nous construisons pour un hôtel ou un voyagiste",
  },
  regieBloc: {
    kicker: "Régie auprès de vos équipes",
    h2: "Un développeur relié à votre PMS et à vos canaux de vente",
    accroche: "Pour un groupe hôtelier ou un acteur du voyage qui veut relier l'IA à son PMS (le logiciel de gestion de l'hôtel), à son moteur de réservation et à son CRM, le développeur IA rejoint vos équipes et construit au contact de vos systèmes.",
    lien: "Comment se monte une régie",
  },
  formationBloc: {
    kicker: "Former la réception et le commercial",
    h2: "Des ateliers sur vos messages de voyageurs et vos demandes de groupes",
    lien: "Voir le catalogue des formations",
  },
  faqBloc: {
    h2: "Hôtellerie et tourisme : questions fréquentes",
    texte: "Votre établissement a une particularité que ces réponses ignorent ?",
    lien: "Racontez-la-nous",
  },
  maillage: {
    h2: "Secteurs voisins du tourisme",
  },
  cta: {
    titre: "Quels messages de voyageurs traiter en premier ?",
    texte: "Indiquez-nous vos langues de clientèle, votre PMS et votre moteur de réservation. Nous revenons vers vous sous 24 heures pour fixer les 30 minutes de cadrage offertes, de préférence avant le début de votre saison.",
  },
  equipe: {
    titre: "Une équipe réunie pour votre établissement",
    texte: "Masteria a été créé à Lyon en 2022 par Mathias Nizan, qui pilote chaque mission avec des intervenants indépendants choisis pour le projet. Pour un hôtel ou un voyagiste, ce sont des consultants qui lisent vos messages et vos avis, des développeurs qui relient l'assistant à votre PMS et à votre moteur de réservation, et des formateurs qui préparent l'équipe de la saison. Aucun ne revend de logiciel hôtelier.",
  },
  intro: "Dans le tourisme et l'hôtellerie, l'IA se rentabilise d'abord sur les messages : une question avant de réserver, une demande pendant le séjour, un avis après le départ, souvent dans une autre langue et hors des heures de réception. Masteria construit des assistants qui répondent à partir de vos données de réservation et d'informations datées, qui disent au voyageur qu'il échange avec une IA, et qui passent la main à la réception selon des règles écrites avec vous.",

  offresIntro: [
    "Pour un hôtel, un groupe hôtelier, un camping, une résidence de tourisme ou un voyagiste, nos trois métiers suivent le parcours du voyageur : la question avant de réserver, les messages pendant le séjour, l'avis après le départ.",
    "Les outils se branchent sur le PMS (logiciel de gestion hôtelière qui porte les réservations), le moteur de réservation et la messagerie déjà en place. Les ateliers de cadrage se tiennent dans l'établissement, en dehors des semaines de pointe.",
  ],
  offres: [
    {
      title: "Lecture des messages et des avis",
      cta: "Notre démarche de conseil",
      desc: "Nous lisons plusieurs mois de messages, d'avis et de demandes de groupes pour mesurer ce qui arrive, dans quelles langues et à quelles heures. Nous en tirons trois listes : les questions qu'un assistant traite seul, celles qu'il prépare pour la réception, celles qui restent humaines. La feuille de route suit votre calendrier de saison.",
      points: ["Analyse des messages et des avis", "Partage des rôles avec la réception", "Calendrier calé sur la saison"],
    },
    {
      title: "Assistant multilingue et copilote commercial",
      cta: "Le développement sur mesure",
      secondaryCta: "Outils IA par métier",
      desc: "Nous développons l'assistant multilingue du canal direct (votre site et votre messagerie), relié au moteur de réservation pour les disponibilités et au PMS pour les informations du séjour, et le copilote qui aide le service commercial à chiffrer une demande de groupe ou d'événement d'entreprise. L'assistant annonce au voyageur qu'il échange avec une IA et passe la main selon des règles écrites.",
      points: ["Assistant multilingue du canal direct", "Copilote pour les demandes de groupes", "Passage à la réception selon des règles"],
    },
    {
      title: "Messages du séjour automatisés",
      cta: "Notre approche de l'automatisation",
      desc: "Nous automatisons les messages qui jalonnent le séjour (confirmation, informations d'arrivée, enquête de départ) dans la langue de la réservation, le tri des avis par service pour les équipes d'exploitation et la préparation des réponses à valider. Chaque scénario est documenté pour l'équipe de la saison suivante.",
      points: ["Messages du séjour dans la langue du client", "Tri des avis par service", "Scénarios documentés d'une saison à l'autre"],
    },
  ],
  regie: [
    "Un développeur détaché dans un groupe hôtelier ou chez un voyagiste rejoint l'équipe distribution ou l'équipe digitale, de préférence avant l'ouverture de la saison, quand les liaisons entre le PMS, le moteur de réservation et la messagerie doivent être prêtes. Il travaille avec vos éditeurs de logiciels sur les interfaces existantes et laisse des procédures que votre équipe applique ensuite en pleine saison.",
  ],
  formation: [
    "Les outils changent le travail de la réception, de la réservation, du service commercial qui traite les groupes et les événements d'entreprise, et de la direction qui suit la réputation. Nous les formons à corriger une réponse de l'assistant, à tenir sa base d'informations à jour (horaires, travaux, offres de saison) et à répondre aux avis délicats.",
    "Les sessions se placent entre deux saisons, dans l'établissement ou à distance, et une journée intra coûte 1 980 € HT. La certification Qualiopi de Masteria permet d'en demander la prise en charge à votre OPCO en France ; la conception et le développement de l'assistant restent des prestations de service, hors de ce financement.",
  ],

  guide: {
    kicker: "Guide tourisme et hôtellerie",
    h2: "Dans l'hôtellerie, l'IA rapporte d'abord là où la demande arrive dans une autre langue et en dehors des heures de réception",
    lead: "En 2025, les hôtels français ont enregistré 220,2 millions de nuitées, dont 83,5 millions de clients étrangers, soit près de 38 %, selon l'INSEE. Dans l'ensemble des hébergements collectifs, l'été 2026 a dépassé celui de 2025, déjà le plus fréquenté depuis quinze ans. Ces voyageurs écrivent dans leur langue et à toute heure, alors que la réception change d'équipe à chaque saison : France Travail classe 74 % des projets d'embauche d'employés de l'hôtellerie comme saisonniers en 2026. L'IA sert d'abord ces messages, à condition de répondre depuis les données de réservation et de passer la main à temps.",
    sections: [
      {
        h3: "Plus d'une nuitée hôtelière sur trois vient d'un client étranger",
        paras: [
          "L'INSEE compte 83,5 millions de nuitées étrangères sur les 220,2 millions enregistrées par les hôtels en 2025, pour un taux d'occupation de 62,3 %. Ces clients réservent et écrivent dans leur langue : anglais, allemand, néerlandais, italien ou espagnol selon la destination. Peu de réceptions couvrent toutes ces langues à toute heure, et un message reçu à 23 heures attend souvent le lendemain matin. L'assistant multilingue sert d'abord ce créneau, sur le canal direct où l'hôtel garde la relation.",
          "Un voyageur qui écrit à un système d'IA doit le savoir : l'article 50 du règlement européen sur l'IA, en application depuis le 2 août 2026, demande une information claire, donnée au plus tard lors de la première interaction. Pour un assistant de réception, cette information tient en une phrase d'accueil. Elle s'affiche dans la langue de la conversation, dès le premier message, et suit le voyageur s'il change de langue en cours d'échange.",
        ],
      },
      {
        h3: "Le canal direct se gagne sur la réponse, et le droit laisse l'hôtelier fixer ses prix",
        paras: [
          "L'article L.311-5-1 du code du tourisme, en vigueur depuis août 2015, fait de la plateforme de réservation le mandataire de l'hôtelier, et garde à l'hôtelier la liberté de consentir au client tout rabais ou avantage tarifaire. Désigné contrôleur d'accès au titre du règlement européen sur les marchés numériques, Booking.com a retiré de ses conditions, en juillet 2024, les clauses de parité qui interdisaient d'afficher ailleurs un prix plus bas. La Commission a confirmé le 28 septembre 2026 que les prix pratiqués ailleurs ne pèsent plus sur son classement par défaut.",
          "Selon l'étude publiée en septembre 2026 par HOTREC, la fédération européenne de l'hôtellerie et de la restauration, les 2 713 hôtels interrogés dans 28 pays ont réalisé 51,3 % de leurs réservations de 2025 par leurs propres canaux, et 29,9 % par les agences de voyage en ligne. Le voyageur qui hésite entre deux canaux attend une réponse précise. L'assistant du site cite le tarif renvoyé par le moteur de réservation et l'offre directe que l'hôtel y a saisie, et il n'en calcule aucun lui-même.",
        ],
      },
      {
        h3: "Les avis obéissent à des règles que l'automatisation doit respecter",
        paras: [
          "Le code de la consommation qualifie de pratique commerciale trompeuse le fait de diffuser de faux avis, comme celui de modifier des avis de consommateurs pour promouvoir un produit (article L.121-4, 28°). Il vise aussi l'établissement qui affirme que des avis viennent de clients qui ont séjourné, sans avoir pris les mesures nécessaires pour le vérifier (27°). Un outil qui résume les avis pour la page d'accueil de l'hôtel cite donc des extraits exacts et datés, et n'en réécrit aucun.",
          "Google ajoute ses propres règles : aucune contrepartie en échange d'un avis, et aucune sollicitation sélective des clients satisfaits. Une enquête de départ qui envoie les clients contents vers la fiche Google et les autres vers un formulaire interne tombe sous cette interdiction. L'automatisation envoie la même demande à tous. L'IA intervient ensuite : elle trie les avis par service (chambre, petit-déjeuner, bruit, accueil) et prépare des réponses qu'une personne valide avant publication.",
        ],
      },
      {
        h3: "La saison se prépare avec des équipes qui changent chaque année",
        paras: [
          "Dans l'enquête Besoins en main-d'œuvre 2026 de France Travail, 74,3 % des projets d'embauche d'employés de l'hôtellerie sont saisonniers, et les employeurs en jugent 45,6 % difficiles. Pour les serveurs de cafés et de restaurants, ces deux taux atteignent 67,4 % et 42,2 %. Chaque printemps, une partie de l'équipe découvre donc la maison : les procédures d'arrivée et de départ, les réponses aux questions courantes, les consignes de sécurité, les habitudes des clients fidèles.",
          "Un copilote interne met cette connaissance à portée de main. Il répond à partir des procédures de l'établissement, dans la langue du saisonnier, et renvoie vers la fiche source pour que chacun vérifie. Il sert aussi au veilleur de nuit, seul à son poste. La base s'écrit une fois avec la direction, puis se tient à jour à un rythme fixé d'avance, avec un responsable nommé, faute de quoi elle vieillit en une saison.",
        ],
      },
      {
        h3: "Depuis le 28 septembre 2026, Booking.com ne transmet plus le téléphone des voyageurs aux outils de connectivité",
        paras: [
          "Le 22 septembre 2026, le Groupement des hôtelleries et restaurations de France (GHR) a alerté ses adhérents : face à une hausse des tentatives d'hameçonnage par SMS et WhatsApp, Booking.com cesse de transmettre automatiquement le numéro de téléphone des voyageurs aux outils de connectivité et aux gestionnaires de canaux. Les coordonnées restent accessibles dans l'extranet, dans l'application Pulse, par la messagerie de Booking.com et par l'adresse électronique anonymisée du client.",
          "Un scénario de messages construit sur le téléphone importé du gestionnaire de canaux doit donc être revu pour les réservations venues de Booking.com. L'assistant passe par la messagerie de la plateforme ou par l'adresse anonymisée, et le numéro se demande au client lui-même, à l'arrivée, quand il est utile. La même prudence vaut pour vos propres envois : un voyageur averti se méfie d'un lien de paiement reçu par SMS d'un expéditeur inconnu.",
        ],
      },
    ],
    table: {
      caption: "Les messages d'un séjour : ce que l'assistant fait, et sur quelle donnée",
      headers: ["Moment", "Ce que l'assistant peut faire", "Donnée ou règle à respecter"],
      rows: [
        ["Avant la réservation", "Répondre sur les disponibilités et proposer le lien de réservation", "Tarif lu dans le moteur de réservation, jamais calculé par le modèle"],
        ["Demande de groupe ou d'événement d'entreprise", "Préparer un devis à partir des contraintes de l'événement", "Grille tarifaire des groupes, validation par le service commercial"],
        ["Avant l'arrivée", "Envoyer les informations pratiques dans la langue de la réservation", "Base d'informations datée ; canal choisi selon la provenance de la réservation"],
        ["Pendant le séjour", "Traiter les demandes simples et transmettre les autres", "Mention d'IA dès le premier message (article 50), escalade vers la réception ou le veilleur"],
        ["Après le départ", "Solliciter un avis et préparer les réponses", "Même demande à tous, aucune contrepartie, aucun avis modifié"],
        ["Réclamation", "Résumer l'échange et le transmettre", "Traitement par une personne, réponse signée par l'établissement"],
      ],
    },
    cas: {
      h3: "Mise en situation : un hôtel de bord de lac qui reçoit ses demandes en cinq langues",
      contexte: "Prenons un hôtel indépendant de 60 chambres, ouvert d'avril à octobre, dont la réception compte quatre personnes en haute saison. Les messages arrivent par courriel, par le formulaire du site et par les messageries des plateformes, en français, en anglais, en allemand, en néerlandais et en italien. Le cas est imaginé pour montrer la méthode, et il ne rapporte pas une mission de Masteria.",
      etapes: [
        "Exporter plusieurs mois de messages et les classer par thème, par langue et par heure d'arrivée, pour savoir ce que l'assistant doit couvrir.",
        "Écrire la base d'informations de l'hôtel : accès, horaires, parking, animaux, conditions d'annulation, chaque fiche avec sa source et sa date de mise à jour.",
        "Relier l'assistant au moteur de réservation en lecture seule, pour les disponibilités et les tarifs du jour.",
        "Rejouer l'historique : l'assistant répond aux messages passés, la réception note chaque réponse, et les règles de passage à l'humain s'ajustent.",
        "Ouvrir canal par canal, en commençant par le formulaire du site, avec la mention d'IA et une file de nuit que l'équipe du matin traite en premier.",
      ],
      resultat: "Vous obtenez une typologie chiffrée de vos messages, un assistant qui répond dans la langue du voyageur à partir de données datées, et des règles écrites de passage à la réception. Le temps rendu à l'équipe se mesure sur vos propres messages, avant et après la mise en service, avec vous.",
    },
    pieges: [
      { titre: "Laisser l'assistant calculer un prix", texte: "Un tarif se lit dans le moteur de réservation, pour la date et la chambre demandées. Un modèle qui applique de lui-même une remise ou reformule une grille engage l'établissement sur un prix faux. L'assistant cite le tarif renvoyé par le moteur et renvoie vers la page de réservation." },
      { titre: "Traduire à la volée les conditions d'annulation", texte: "Les conditions qui engagent l'établissement (annulation, acompte, non-présentation) se traduisent une fois, se relisent par un locuteur, puis se citent telles quelles. L'assistant renvoie vers le texte validé dans la langue du voyageur et ne le paraphrase pas." },
      { titre: "Couper le lien avec la réception la nuit", texte: "Une demande urgente à 2 heures du matin (clé perdue, malaise, bruit) doit joindre une personne. Les règles de passage prévoient le veilleur de nuit ou l'astreinte, avec un numéro que l'assistant donne aussitôt, et l'équipe du matin retrouve l'échange en tête de file." },
      { titre: "Laisser l'assistant gérer une réclamation", texte: "Un client mécontent attend une personne, et une réponse automatique à une plainte finit vite citée dans un avis. L'assistant reconnaît la réclamation, résume l'échange et le transmet au responsable, qui répond sous sa signature dans le délai que l'établissement s'est fixé." },
      { titre: "Ouvrir tous les canaux le même jour", texte: "Le formulaire du site, le courriel, la messagerie des plateformes et WhatsApp n'ont ni les mêmes clients ni les mêmes contraintes. L'ouverture se fait canal par canal, avec une période de relecture des réponses par la réception avant de passer au suivant." },
    ],
  },
  faq: [
    { q: "Un assistant peut-il répondre aux voyageurs dans leur langue, la nuit comme le jour ?", a: "Oui, à partir de deux sources : le moteur de réservation pour les disponibilités et les tarifs, et une base d'informations de l'établissement tenue à jour et datée. Il répond dans la langue du message et transmet à la réception ce qui sort de son périmètre : réclamation, demande médicale, litige sur une facture. La nuit, les demandes urgentes vont au veilleur ou à l'astreinte, et les autres attendent l'équipe du matin dans une file triée." },
    { q: "Doit-on dire au voyageur qu'il échange avec une IA ?", a: "Oui. Le règlement européen sur l'IA l'exige depuis le 2 août 2026 (article 50) pour un système conçu pour dialoguer avec des personnes, sauf quand c'est évident pour elles. L'information doit être claire et donnée au plus tard lors de la première interaction. Nous plaçons un message d'accueil du type « Je suis l'assistant virtuel de l'hôtel » avant la première réponse, dans la langue du voyageur." },
    { q: "L'assistant peut-il annoncer un tarif ou confirmer une réservation ?", a: "Il annonce le tarif que renvoie le moteur de réservation pour la date et la chambre demandées, et propose le lien qui mène au paiement. Il ne calcule aucun prix et ne confirme rien en dehors du moteur. Le code du tourisme vous laisse libre de fixer votre offre directe ; elle passe par le même chemin, et l'assistant la présente telle qu'elle figure dans le moteur." },
    { q: "Peut-on automatiser les demandes d'avis après le séjour ?", a: "Oui, si la même demande part vers tous les clients et sans contrepartie, comme l'exigent les règles de Google. L'IA sert ensuite à classer les avis par service et à préparer des réponses qu'une personne relit. Elle ne rédige aucun avis et n'en modifie aucun : le code de la consommation sanctionne ces deux gestes comme des pratiques trompeuses." },
    { q: "Quels logiciels faut-il relier : PMS, moteur de réservation, gestionnaire de canaux ?", a: "Le PMS porte la réservation et le séjour, le moteur de réservation porte les disponibilités et les tarifs du site, et le gestionnaire de canaux (channel manager) les synchronise avec les plateformes. L'assistant lit le moteur et le PMS, en lecture seule au départ. Nous vérifions au cadrage les interfaces que vos éditeurs ouvrent ; quand une connexion manque, un export planifié peut la remplacer." },
    { q: "Comment faire travailler l'IA avec des équipes qui changent chaque saison ?", a: "Le copilote interne sert de mémoire à l'établissement : un saisonnier y trouve dès son premier jour les procédures, les réponses types et les consignes, dans sa langue. La formation des équipes permanentes se place avant l'ouverture, et une courte prise en main du copilote s'ajoute à l'accueil de chaque saisonnier. Nous écrivons avec vous qui met la base à jour, et à quel rythme." },
    { q: "Intervenez-vous dans les stations et les sites touristiques éloignés de Lyon ?", a: "Oui. Nos bureaux sont à Lyon, et il faut compter environ 1 h 30 pour rejoindre Annecy. Nous venons sur place pour le cadrage, pour observer la réception et pour la passation ; le développement et le suivi avancent à distance. Pour un établissement genevois, la facture sort hors taxes, le devis indique comment la TVA s'applique, et la formation n'y relève d'aucun OPCO." },
    { q: "Combien coûte un projet d'IA pour un hôtel ou un voyagiste ?", a: "Le prix dépend du nombre de canaux et de langues, et des logiciels à relier (PMS, moteur de réservation, messagerie). Après 30 minutes de cadrage offertes, un Diagnostic IA payant peut préciser le périmètre, pour une durée et un forfait décidés ensemble lors de cet échange. Vient ensuite une proposition forfaitaire écrite (périmètre, livrables, calendrier, budget) à signer avant tout démarrage. À la fin du projet, vous recevez le code et sa documentation." },
  ],
  sources: [
    { name: "INSEE : fréquentation des hébergements collectifs touristiques en 2025 (paru le 23 juillet 2026)", url: "https://www.insee.fr/fr/statistiques/2015395" },
    { name: "INSEE Focus n° 387 : la fréquentation touristique de l'été 2026 (29 septembre 2026)", url: "https://www.insee.fr/fr/statistiques/9056644" },
    { name: "France Travail : enquête Besoins en main-d'œuvre 2026", url: "https://statistiques.francetravail.org/bmo" },
    { name: "Commission européenne, AI Act Service Desk : article 50, obligations de transparence (version consolidée après le règlement (UE) 2026/1744)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
    { name: "Légifrance : code du tourisme, article L.311-5-1", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030992958" },
    { name: "Commission européenne : factsheet DMA, Booking.com et la liberté tarifaire des hébergeurs (28 septembre 2026)", url: "https://digital-markets-act.ec.europa.eu/factsheet-how-dma-ensures-businesses-using-bookingcom-are-free-set-their-prices-and-bookingcom-2026-09-28_en" },
    { name: "HOTREC : étude européenne sur la distribution hôtelière, données 2025 (15 septembre 2026)", url: "https://www.hotrec.eu/en/news_booking-holdings-and-expedia-group-account-for-85-of-europe_E2_80_99s-ota-market-hotrec-study-finds.html" },
    { name: "Légifrance : code de la consommation, article L.121-4 (pratiques commerciales trompeuses, faux avis)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107" },
    { name: "Google : règles relatives aux avis sur Google Maps (contenus interdits et restreints)", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=fr" },
    { name: "GHR : alerte aux adhérents, Booking.com renforce la protection des coordonnées (22 septembre 2026)", url: "https://www.ghr.fr/europe-numerique/actualites/alerte-adherents-phishing-booking-com-renforce-la-protection-des-coordonnees" },
  ],
}
