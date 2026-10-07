// Contenu propre à /agence-ia-marseille. Lu par AgenceGeoPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : port de Marseille Fos (chiffres 2025 de la page d'accueil, dossier de presse du 20/01/2026, page filière numérique), douane.gouv.fr (RTC), règlement (UE) 2024/1689 lu sur le Publications Office de l'UE (articles 3, 50 et 113), cyber.gouv.fr (II 901), airbus.com (Airbus en France), docs.mistral.ai (licences des modèles), ouigo.com (durée Lyon-Marseille).
export default {
  slug: 'agence-ia-marseille',
  dateModified: '2026-10-07',
  pagePropre: true,
  hero: {
    chips: [
      "Port, logistique, tourisme, santé",
      "Lyon à 1 h 40 en TGV",
      "Ateliers sur site, code à distance",
      "Clients étrangers servis dans leur langue",
    ],
    lien: "Voir l'offre pour Marseille",
  },
  ville: {
    heroSubtitle: "Sur le port, à l'hôtel ou au laboratoire, le temps part dans les mêmes gestes : recopier un document, répondre au même message, relancer un partenaire. Nous repérons ces gestes avec vos équipes à Marseille, puis nous écrivons depuis Lyon les outils qui les prennent en charge.",
    keyFacts: [
      {
        label: "Ce que nous faisons",
        value: "Repérage des gestes répétitifs, agents reliés à vos logiciels, automatisation des documents de transport et des messages de clients",
      },
      {
        label: "Venir à Marseille",
        value: "Environ 1 h 40 de TGV direct depuis Lyon, pour chaque atelier et chaque comité de pilotage",
      },
      {
        label: "Pour qui",
        value: "Maritime et logistique portuaire, tourisme et hôtellerie, santé et biotech, industrie et aéronautique",
      },
      {
        label: "Pour commencer",
        value: "Un échange de 30 minutes offert, puis une proposition écrite au forfait",
      },
    ],
    presence: "L'équipe Masteria travaille depuis Lyon, à environ 1 h 40 de Marseille en TGV direct. Nous descendons dans la métropole, de la Joliette à Aix et jusqu'à Fos, chaque fois qu'un atelier, un comité ou la remise d'un outil le demande. Le reste du temps, les développeurs avancent à distance et vous montrent chaque version en visio. Nous n'avons pas de bureau à Marseille.",
  },
  offresTitre: {
    kicker: "Notre offre à Marseille",
    h2: "Conseil, développement et automatisation pour la métropole marseillaise",
  },
  offresNote: {
    titre: "Du conseil à l'outil, sans changer d'équipe.",
    texte: "Les personnes qui cadrent votre premier chantier suivent sa construction, et vos équipes reçoivent l'outil avec son code et sa documentation.",
  },
  ancrage: {
    kicker: "Aix-Marseille-Provence",
    h2: "Pourquoi une agence IA pour les entreprises de la métropole marseillaise ?",
    economie: "Le tissu économique d'Aix-Marseille",
    presence: "Comment nous intervenons à Marseille",
    prestations: "Trois chantiers typiques dans la métropole",
  },
  formationBloc: {
    kicker: "Former sur place",
    h2: "Des sessions à Marseille, sur vos dossiers",
    lien: "Toutes les formations IA",
  },
  etapesBloc: {
    kicker: "Le déroulé",
    h2: "Cinq étapes pour un projet mené à Marseille",
  },
  faqBloc: {
    h2: "Les questions des entreprises marseillaises",
    texte: "Vous comparez des agences ? Nos critères figurent dans",
    lien: {
      href: "/meilleure-agence-ia",
      label: "le guide de choix d'une agence IA",
    },
  },
  maillage: {
    villes: "Masteria dans d'autres villes",
    expertises: "Pages utiles avant le cadrage",
  },
  cta: {
    titre: "Un premier flux à outiller à Marseille ?",
    texte: "Dites-nous quel flux vous coûte du temps (cotations, documents de transport, messages de clients) et les logiciels qui le portent. Notre réponse part dans les 24 heures, et un premier échange de 30 minutes, offert, se cale dans la foulée.",
  },
  equipe: {
    titre: "Une équipe réunie pour votre projet marseillais",
    texte: "Mathias Nizan, qui a lancé Masteria à Lyon en 2022, dirige les missions marseillaises lui-même. Il s'entoure, selon le dossier, d'un consultant qui cartographie les flux documentaires, de développeurs et d'un formateur, tous indépendants. Aucun d'eux n'a de logiciel portuaire, hôtelier ou médical à placer chez vous.",
  },
  intro: "À Marseille, une entreprise de transport, de négoce ou de tourisme passe ses journées sur des documents qu'elle n'a pas écrits : l'avis d'arrivée d'un armateur, la demande de cotation d'un chargeur, la question d'un passager qui part pour Bastia ou pour Alger. Un projet d'IA y rend du temps à l'endroit où ces documents entrent dans vos systèmes. Masteria, cabinet d'IA installé à Lyon, à moins de deux heures de train, mène le cadrage chez vous, développe les outils à distance et vous en remet le code.",
  offresIntro: [
    "À Marseille, nos trois métiers s'appliquent aux échanges avec des tiers : armateurs, agents maritimes, transitaires, transporteurs, douane, passagers, donneurs d'ordres de l'aéronautique.",
    "Le conseil cartographie ces échanges et désigne ceux qu'il faut outiller en premier. Le développement produit des agents qui lisent ce qui arrive et préparent la saisie, et, pour les documents sensibles de la défense, des outils installés sur vos propres serveurs. L'automatisation relie le tout à votre logiciel de gestion par les canaux officiels, EDI (l'échange de données informatisé entre entreprises) ou interfaces documentées. Nos propositions sont forfaitaires et écrites avant signature.",
  ],
  offres: [
    {
      title: "Cadrage des flux prioritaires",
      cta: "Le conseil IA chez Masteria",
      desc: "Pour un transitaire, un armement, un logisticien de Fos ou une agence de voyages, le conseil commence par la carte des documents reçus : qui les envoie, par quel canal (mail, EDI, portail, Ci5), à quel volume. La feuille de route classe ces flux par temps passé et par risque, et sépare ce qu'un outil prépare de ce qu'un déclarant ou un exploitant signe.",
      points: ["Carte des documents reçus des tiers", "Partage des rôles avec le déclarant", "Feuille de route calée sur la saison"],
    },
    {
      title: "Agents et outils sur mesure",
      cta: "Notre agence de développement IA",
      secondaryCta: "Outils IA par fonction",
      desc: "Nous développons des agents, c'est-à-dire des programmes qui lisent un document, le rapprochent d'un dossier et préparent une saisie, pour les demandes de cotation et les avis d'arrivée. Nous construisons aussi des assistants de réponse aux passagers qui annoncent qu'ils sont une IA, et des outils installés chez vous pour les pièces qui ne peuvent pas sortir. Chacun est testé sur les documents de votre dernière saison.",
      points: ["Lecture des cotations et des avis d'arrivée", "Assistant passagers conforme à l'article 50", "Installation sur vos serveurs si nécessaire"],
    },
    {
      title: "Automatisation des documents et des messages",
      cta: "Notre approche de l'automatisation",
      desc: "Reprise des fichiers d'entrepôt dans votre logiciel de gestion avec contrôle des totaux, consultation des transporteurs, relances, préparation des données avant une déclaration en douane : chaque automatisation garde un point de contrôle humain et passe par les échanges que vos partenaires autorisent.",
      points: ["Imports contrôlés par les totaux", "Consultation des transporteurs", "Échanges EDI ou interfaces documentées"],
    },
  ],
  etapes: [
    {
      title: "Cadrer en visio, puis dans vos locaux",
      desc: "Le cadrage commence par trente minutes offertes, en visioconférence ou par téléphone. Le premier atelier se tient ensuite à Marseille, à Fos ou à Marignane, avec la direction des opérations, le responsable douane et la personne qui administre vos logiciels. La proposition écrite qui en sort liste les flux retenus, les livrables, les dates et le prix forfaitaire.",
    },
    {
      title: "Relever une semaine de documents entrants",
      desc: "Avec vos équipes, nous rassemblons les documents reçus pendant une semaine ordinaire, anonymisés : demandes de cotation, avis d'arrivée, fichiers d'entrepôt, questions de clients. Nous comptons les volumes par émetteur et notons le système dans lequel chaque information est ressaisie.",
    },
    {
      title: "Classer les documents par sensibilité",
      desc: "Les documents commerciaux courants peuvent passer par un service d'IA en ligne choisi pour les garanties de son contrat. Les pièces marquées Diffusion Restreinte restent dans votre système homologué, et l'outil s'installe alors sur vos serveurs. Ce classement fixe l'architecture dès le début du projet.",
    },
    {
      title: "Développer à distance, rejouer la saison passée",
      desc: "Nos développeurs travaillent depuis Lyon, avec une revue hebdomadaire à distance en présence de l'exploitation. Les tests rejouent les documents de la saison précédente, pointe comprise, et comparent la saisie préparée par l'outil à celle faite à la main.",
    },
    {
      title: "Mettre en service avant la pointe",
      desc: "La mise en service intervient avant le pic de votre activité. Sur place, nous transmettons le code source, la documentation, le jeu de documents de test et les règles de validation ; votre exploitant et votre déclarant savent ce que l'outil prépare et ce qu'ils signent eux-mêmes.",
    },
  ],
  formation: [
    "Les agents d'exploitation, les chargés de clientèle et le déclarant en douane apprennent à travailler avec l'outil livré : relire une saisie préparée, traiter un écart signalé, reprendre la conversation quand l'assistant passagers la transmet à un humain. Nous plaçons ces sessions hors des semaines de pointe, dans vos locaux marseillais ou à distance.",
    "Seule cette partie ouvre droit à un financement par un OPCO, puisque notre certificat Qualiopi porte sur la formation ; une journée d'intra-entreprise représente 1 980 € HT. Conseil et développement font l'objet d'un forfait distinct.",
  ],
  guide: {
    kicker: "Projets IA à Marseille",
    h2: "À Marseille, l'IA rend du temps là où les documents des autres entrent dans vos systèmes",
    lead: "En 2025, Marseille Fos a compté 9 400 escales, selon les chiffres annuels du port. Une escale de porte-conteneurs met en relation un armateur, un agent maritime, un manutentionnaire, des transitaires, des transporteurs et la douane, qui échangent par Ci5, le guichet unique de la communauté portuaire, par EDI ou par mail. Un projet d'IA utile à une entreprise marseillaise se place à ces points d'entrée : il lit ce qui arrive, prépare la saisie et signale l'écart. La décision reste à la personne qui engage l'entreprise, déclarant, exploitant ou chargé de clientèle.",
    sections: [
      {
        h3: "Les documents qui coûtent du temps arrivent de l'extérieur",
        paras: [
          "Ci5, développé par MGI, une société dont le port est actionnaire, rassemble les informations sur les flux de marchandises, automatise des démarches et sécurise les échanges entre les acteurs du port. Une partie du travail se fait pourtant hors de ce guichet : la demande de cotation arrive par mail, l'avis d'arrivée en PDF, le fichier du logisticien dans un tableur. Vos équipes ressaisissent ces documents, et un agent d'IA peut préparer cette saisie.",
          "L'agent lit le document reçu, en extrait les champs utiles, les rapproche du dossier existant et prépare l'écriture dans votre logiciel de gestion ou votre TMS (l'outil qui planifie et suit vos transports). Il ne remplace ni Ci5 ni vos échanges EDI : quand une donnée doit y entrer, il passe par les canaux que l'opérateur autorise, ou il prépare la saisie pour la personne habilitée. Un robot qui recopie des écrans casse à chaque mise à jour d'un portail.",
        ],
      },
      {
        h3: "La classification douanière reste une décision du déclarant",
        paras: [
          "Un modèle de langage propose volontiers un code de nomenclature pour une marchandise décrite dans une facture commerciale. Ce code engage pourtant l'entreprise devant la douane. Pour une marchandise importée ou exportée de façon régulière, la sécurité juridique vient du renseignement tarifaire contraignant (RTC) : délivré sans frais par la douane, valable trois ans, il lie les services douaniers de toute l'Union, en application des articles 33 et 34 du code des douanes de l'Union.",
          "La douane dispose de 30 jours pour juger la demande recevable, puis de 120 jours au plus pour l'instruire. Un agent bien conçu aide à deux moments : il propose un code avec sa justification et les pièces qui la soutiennent, que le déclarant valide ou corrige, et il prépare le dossier de demande de RTC pour les produits récurrents, description technique comprise. Le code déclaré reste celui que signe le déclarant.",
        ],
      },
      {
        h3: "Un assistant qui renseigne les passagers se présente comme une IA",
        paras: [
          "Le port a accueilli 4,1 millions de passagers en 2025, croisiéristes compris. Sur les lignes du Maghreb, l'Algérie reste la première destination et l'offre vers le Maroc progresse ; la desserte de la Corse garde son niveau. Un assistant conversationnel peut répondre aux questions répétitives de ces voyageurs : heures d'enregistrement, documents de voyage, conditions pour les véhicules. Depuis le 2 août 2026, l'AI Act (règlement (UE) 2024/1689) oblige, par son article 50, à informer la personne qu'elle converse avec une IA, sauf quand le contexte le rend évident.",
          "L'obligation pèse sur le fournisseur, et le règlement désigne par ce mot l'entreprise qui fait développer un système et en assure la mise en service sous son propre nom (article 3). Une compagnie ou une agence marseillaise qui nous commande son assistant devient donc fournisseur. Nous écrivons la mention dans le premier message, nous prévoyons le passage à un agent humain pour les réservations et les documents d'identité, et l'outil ne conserve que les données utiles à la réponse.",
        ],
      },
      {
        h3: "Les sous-traitants de l'aéronautique et de la défense gardent certains documents chez eux",
        paras: [
          "Airbus présente son site de Marignane comme le troisième site industriel de France, et la région compte d'autres industriels de la défense. Quand l'un de leurs sous-traitants reçoit un document portant la mention Diffusion Restreinte, il doit le traiter dans un système d'information soumis à l'instruction interministérielle n° 901/SGDSN/ANSSI du 28 janvier 2015. Ce texte vise toute personne morale qui met en œuvre un tel système, et il repose sur l'homologation du système par l'organisation qui l'exploite.",
          "Un tel document n'entre dans aucun assistant en ligne ouvert au public. Pour ces entreprises, nous développons des outils qui tournent sur leurs propres serveurs, dans le périmètre qu'elles homologuent, avec un modèle à poids ouverts (ses fichiers se téléchargent et tournent sur les machines de l'entreprise). Mistral publie par exemple Mistral Small 4 et les modèles Ministral 3 sous licence Apache 2.0. Le choix du modèle, du matériel et des droits d'accès se fait avec la personne chargée de la sécurité informatique de l'entreprise.",
        ],
      },
    ],
    table: {
      caption: "Documents reçus d'un tiers à Marseille : ce que l'outil prépare et ce qui reste à votre équipe",
      headers: ["Document reçu", "Émetteur", "Ce que l'outil prépare", "Ce qui reste à votre équipe"],
      rows: [
        ["Demande de cotation par mail", "Chargeur ou commissionnaire", "Origine, destination, poids et incoterm extraits, lignes de prix proposées", "Le prix envoyé et les conditions"],
        ["Avis d'arrivée d'un conteneur", "Armateur ou agent maritime", "Rapprochement avec le dossier, alerte sur la date de mise à disposition", "La programmation de l'enlèvement"],
        ["Facture commerciale et liste de colisage", "Fournisseur étranger", "Code de nomenclature suggéré avec sa justification, écarts entre les pièces", "Le code déclaré ou la demande de RTC"],
        ["Fichier de réception d'entrepôt", "Logisticien", "Fichier d'import vers le logiciel de gestion, totaux comparés au bon de livraison", "La validation des écarts"],
        ["Question d'un passager sur sa traversée", "Client particulier", "Réponse signalée comme produite par une IA, relais vers un agent si besoin", "Les modifications de réservation"],
        ["Cahier des charges marqué Diffusion Restreinte", "Donneur d'ordres de la défense", "Traitement par un outil installé sur vos serveurs, dans le système homologué", "L'homologation et les droits d'accès"],
      ],
    },
    cas: {
      h3: "Retour de mission : transporteurs, fichiers d'entrepôt et demandes de clients, trois points d'entrée à outiller",
      contexte: "Trois personnes, trois entrepôts en France, des clients à l'export et un seul logiciel de gestion, Odoo. Chez ce distributeur photovoltaïque, le temps partait à recopier ce que d'autres envoyaient. Les devis naissaient de mails ressaisis ligne à ligne. Quinze jours avant chaque livraison, la consultation des transporteurs se faisait à la main. Les numéros de série étaient retapés, la scannette ne sachant pas lire les fichiers venus des entrepôts. Un commissionnaire marseillais retrouvera là ses propres points d'entrée.",
      etapes: [
        "Les trois responsables de l'entreprise (direction, ventes, opérations) ont été interrogés, chacun sur ses flux ; parmi les pièces étudiées figuraient le mail type d'un transporteur et les fichiers des entrepôts.",
        "La vente, la livraison avec l'encaissement, le développement commercial et le pilotage ont été décrits étape par étape ; douze gisements de temps en sont sortis, rangés par impact et par faisabilité sur trois mois.",
        "Trois assistants sont à construire sur les fichiers de l'entreprise avant la formation : l'un consultera les transporteurs à J-15 et proposera un choix, un autre convertira les fichiers d'entrepôt au format d'import d'Odoo en contrôlant les totaux, le troisième transformera les demandes reçues des clients en lignes de devis.",
        "Le diagnostic propose de remplacer les comptes individuels par un abonnement collectif administré par l'entreprise, avec une charte d'usage signée avant la formation, et un référent IA chargé des signalements d'erreur.",
        "Le plan d'action tient en 90 jours et se termine, un mois après la formation, par une mesure de quelques indicateurs simples, dont l'usage des assistants par l'équipe.",
      ],
      resultat: "La direction dispose depuis septembre 2026 d'un diagnostic et de trois décisions : l'outillage commun, les trois chantiers et la charte d'usage. La formation de deux jours sur site est prévue en octobre 2026. Les objectifs à trois mois, posés avant la formation, restent des cibles tant que la mesure d'un mois n'a pas eu lieu : des devis plus rapides, moins de temps passé à consulter les transporteurs, la fin des ressaisies. Un transitaire marseillais peut en retenir le principe : l'assistant prépare, une personne valide.",
      lien: { href: "/etudes-de-cas-ia#photovoltaique", label: "Les trois points d'entrée du distributeur photovoltaïque" },
    },
    pieges: [
      { titre: "Faire recopier l'écran d'un portail par un robot", texte: "Un script qui lit et remplit les champs d'un portail d'armateur ou de transporteur casse à la première mise à jour de l'interface. Les échanges EDI et les interfaces documentées par l'opérateur tiennent dans la durée ; nous vérifions leur existence au cadrage." },
      { titre: "Laisser l'outil choisir le code douanier", texte: "Un code de nomenclature proposé par un modèle reste une suggestion. Le déclarant le valide ou le corrige, et pour un produit récurrent, l'entreprise demande un RTC, valable trois ans dans toute l'Union." },
      { titre: "Mettre en ligne un assistant passagers qui ne se présente pas", texte: "Depuis le 2 août 2026, l'AI Act l'exige dans son article 50 : le passager doit savoir qu'il échange avec une IA. L'entreprise qui commande l'assistant et le déploie sous sa marque porte cette obligation." },
      { titre: "Coller un document Diffusion Restreinte dans un service en ligne", texte: "Ces documents relèvent de l'instruction interministérielle n° 901 et d'un système homologué. Un assistant ouvert au public sort de ce cadre ; un outil installé sur vos serveurs, avec un modèle à poids ouverts, peut y entrer." },
      { titre: "Mettre en service au plus fort de la saison", texte: "Un outil lancé quand les volumes culminent n'a pas le temps d'être corrigé, et l'équipe n'a pas le temps de l'apprendre. Les tests se font sur les documents de la saison passée, la mise en service avant la pointe suivante." },
    ],
  },
  faq: [
    {
      q: "Intervenez-vous sur site à Marseille, à Fos ou à Marignane ?",
      a: "Oui, pour le premier atelier, la semaine de relevé des documents et la mise en service. Nos consultants partent de Lyon, à 1 h 30 ou 1 h 45 de Marseille en train selon la gare de départ, et Masteria ne dispose d'aucun bureau dans la métropole. Entre ces étapes, le projet avance à distance, et la proposition forfaitaire inclut les déplacements.",
    },
    {
      q: "Un agent d'IA peut-il classer nos marchandises dans la nomenclature douanière ?",
      a: "Il peut proposer un code, avec la justification et les pièces qui le soutiennent ; le déclarant valide ou corrige. Pour les marchandises récurrentes, le renseignement tarifaire contraignant reste la voie sûre : délivré sans frais par la douane, il vaut trois ans et lie les services douaniers de toute l'Union. L'agent peut préparer la demande, que votre déclarant dépose.",
    },
    {
      q: "Notre assistant de réponse aux passagers doit-il signaler qu'il est une IA ?",
      a: "Oui, depuis le 2 août 2026, sauf quand la nature de l'échange est évidente pour une personne attentive (article 50 du règlement (UE) 2024/1689). L'obligation pèse sur le fournisseur, et une compagnie qui fait développer son assistant pour l'ouvrir au public sous sa marque en est un. Nous plaçons la mention dans le premier message et prévoyons le relais vers un agent humain.",
    },
    {
      q: "Peut-on brancher un agent d'IA sur Ci5 ou sur les portails des armateurs ?",
      a: "L'agent prépare les données ; leur transmission passe par les canaux que l'opérateur de la plateforme autorise, échanges EDI ou interfaces documentées, ou par la personne habilitée qui valide la saisie. Nous vérifions ces canaux avec chaque opérateur au cadrage. Nous écartons la saisie par recopie d'écran, trop fragile pour un flux d'exploitation.",
    },
    {
      q: "Nos documents marqués Diffusion Restreinte peuvent-ils être traités par une IA ?",
      a: "Oui, à condition de rester dans un système homologué selon l'instruction interministérielle n° 901. Nous pouvons y installer un outil qui tourne sur vos serveurs avec un modèle à poids ouverts, comme ceux que Mistral publie sous licence Apache 2.0. L'homologation reste une démarche de votre entreprise, conduite avec la personne chargée de la sécurité de vos systèmes.",
    },
    {
      q: "Combien coûte un projet d'IA pour une entreprise logistique ou portuaire ?",
      a: "Le prix suit trois variables : combien de sortes de documents l'outil doit lire, combien d'émetteurs les envoient et combien de systèmes il faut relier. La proposition forfaitaire arrive après une demi-heure d'échange offerte ; quand la liste des flux reste ouverte, un Diagnostic IA payant la fixe d'abord, selon une durée et un tarif convenus lors de cet échange. Pour un déploiement qui relie plusieurs sites et plusieurs systèmes, le budget passe la barre des 100 000 € et se compte parfois en centaines de milliers d'euros. Les OPCO ne financent ni le conseil ni le développement.",
    },
    {
      q: "Travaillez-vous avec des PME marseillaises de quelques personnes ?",
      a: "Oui. Le distributeur photovoltaïque de notre retour de mission compte trois personnes : trois assistants y seront construits en une journée sur les fichiers de l'entreprise, avant la formation, dans un plan de 90 jours. Pour une petite structure, nous limitons le périmètre à deux ou trois flux, et la direction convertit elle-même le temps relevé en euros.",
    },
    {
      q: "Que reste-t-il chez nous à la fin du projet ?",
      a: "Le code source, la documentation, les règles de validation et le jeu de documents de test tiré de votre dernière saison, pour rejouer les contrôles à chaque évolution, le tout remis dans vos locaux marseillais. L'outil peut être repris par vos équipes informatiques ou par un prestataire de votre choix, et les accès aux interfaces de vos partenaires restent ouverts à votre nom.",
    },
  ],
  sources: [
    { name: "Port de Marseille Fos : chiffres 2025 (marchandises, passagers, escales)", url: "https://www.marseille-port.fr/" },
    { name: "Port de Marseille Fos : dossier de presse, résultats 2025 (20 janvier 2026)", url: "https://www.marseille-port.fr/sites/default/files/2026-01/DP_RESULTATS_2025_200126_FR.pdf" },
    { name: "Port de Marseille Fos : filière numérique, Ci5 et MGI", url: "https://www.marseille-port.fr/en/filieres/digital" },
    { name: "douane.gouv.fr : obtenir un renseignement tarifaire contraignant (RTC)", url: "https://www.douane.gouv.fr/demarche/obtenir-un-renseignement-tarifaire-contraignant-rtc-pour-securiser-votre-nomenclature" },
    { name: "EUR-Lex, règlement (UE) 2024/1689 : déployeur (article 3), information du client (article 50), calendrier (article 113)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { name: "Cyber.gouv.fr (ANSSI) : instruction interministérielle n° 901/SGDSN/ANSSI", url: "https://cyber.gouv.fr/instruction-interministerielle-n901" },
    { name: "Airbus : Airbus en France", url: "https://www.airbus.com/en/about-us/our-worldwide-presence/airbus-in-europe/airbus-in-france" },
    { name: "Mistral AI Docs : vue d'ensemble des modèles et de leurs licences", url: "https://docs.mistral.ai/getting-started/models/models_overview/" },
    { name: "OUIGO : train Lyon-Marseille, durée du trajet", url: "https://www.ouigo.com/train-lyon-marseille" },
  ],
}
