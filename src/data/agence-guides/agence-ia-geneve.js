// Contenu propre à /agence-ia-geneve. Lu par AgenceGeoPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : FINMA (circulaire 2018/3 dans sa version du 4 novembre 2020, communication 08/2024, liste des projets réglementaires au 1er septembre 2026 sans révision de la 2018/3), Fedlex (LPD, RS 235.1), PFPDT (mise à jour du 8 mai 2025), Conseil fédéral (12 février 2025), OCSTAT (communication n° 77, mai 2026), Microsoft Learn (types de déploiement), LEFin art. 69, AI Act Service Desk (article 2).
// Aucune étude de cas publiée ne correspond à Genève : le cas est une mise en situation construite. Pas d'OPCO ; facture hors taxes, TVA précisée au devis.
export default {
  slug: 'agence-ia-geneve',
  dateModified: '2026-10-07',
  pagePropre: true,
  hero: {
    chips: ["Bassin lémanique", "LPD suisse et RGPD", "Devis en euros hors taxes", "Lyon à moins de 2 h en train"],
    lien: "Voir l'offre pour Genève",
  },
  ville: {
    heroSubtitle: "À Genève, la première question d'un projet d'IA porte sur l'endroit où les données seront traitées. Nous l'écrivons noir sur blanc dans la proposition, avec la durée de conservation et la liste des accès, avant de développer pour une banque privée, une société de négoce ou une organisation internationale.",
    keyFacts: [
      {
        label: "Ce que nous faisons",
        value: "Conseil, agents et automatisations conçus pour des données confidentielles, formation des équipes",
      },
      {
        label: "Venir à Genève",
        value: "Équipe à Lyon, à moins de deux heures de train direct : ateliers sur le bassin lémanique, développement à distance",
      },
      {
        label: "Pour qui",
        value: "Banque privée et gestion de fortune, négoce de matières premières, organisations internationales, arômes et parfums",
      },
      {
        label: "Cadre suisse",
        value: "Devis en euros hors taxes, TVA traitée au devis, pas d'OPCO, LPD prise en compte dès le cadrage",
      },
    ],
    presence: "L'équipe Masteria part de Lyon, à moins de deux heures de Genève en train direct. Les ateliers de cadrage et les points d'avancement se tiennent sur le bassin lémanique ; le développement et le suivi se font à distance. Nous n'avons pas de bureau à Genève, et nos devis sont établis en euros hors taxes, le traitement de la TVA y étant précisé.",
  },
  offresTitre: {
    kicker: "Notre offre genevoise",
    h2: "Ce que nous construisons pour les entreprises genevoises",
  },
  offresNote: {
    titre: "La confidentialité se décide avant le code.",
    texte: "Le lieu de traitement, la durée de conservation et les accès s'écrivent dans la proposition, puis la même équipe construit l'outil dans ce cadre et le remet à vos équipes avec son code.",
  },
  ancrage: {
    kicker: "Genève et le bassin lémanique",
    h2: "Pourquoi une agence IA pour les entreprises genevoises ?",
    economie: "Le paysage économique genevois",
    presence: "Comment nous travaillons à Genève",
    prestations: "Trois chantiers typiques sur la place genevoise",
  },
  formationBloc: {
    kicker: "Former les équipes",
    h2: "Des sessions en français sur le bassin lémanique",
    lien: "Le catalogue des formations",
  },
  etapesBloc: {
    kicker: "Le déroulé",
    h2: "Cinq étapes pour un projet genevois",
  },
  faqBloc: {
    h2: "Les questions des entreprises genevoises",
    texte: "Vous consultez plusieurs prestataires ? Nos critères de choix sont réunis dans",
    lien: {
      href: "/meilleure-agence-ia",
      label: "le guide de la meilleure agence IA",
    },
  },
  maillage: {
    villes: "Nos pages en France",
    expertises: "Pour préparer un projet confidentiel",
  },
  cta: {
    titre: "Un projet d'IA confidentiel à Genève ?",
    texte: "Indiquez-nous le flux visé et vos exigences sur le lieu de traitement des données. Un créneau pour un premier échange de 30 minutes, offert, vous est proposé dans les 24 heures.",
  },
  equipe: {
    titre: "Une équipe indépendante, attentive au cadre suisse",
    texte: "Mathias Nizan dirige Masteria, fondé à Lyon en 2022, et suit chaque mission genevoise. Il réunit des consultants qui tiennent compte de la LPD et du RGPD, des développeurs qui choisissent le lieu de traitement avec vous et des formateurs qui interviennent en français. Masteria ne revend aucune licence et n'a d'accord commercial avec aucun fournisseur de modèle.",
  },
  intro: "À Genève, un outil d'IA sur mesure se dessine à partir des règles de secret et d'externalisation propres à votre activité : loi fédérale sur la protection des données (LPD), circulaire de la FINMA (l'autorité fédérale de surveillance des marchés financiers), secret professionnel des établissements financiers. Masteria, cabinet basé à Lyon, cadre ces règles avec votre conformité, développe l'outil dans leurs limites et vous remet son code et sa documentation. En Suisse, aucun OPCO (l'organisme français qui finance la formation) n'intervient : la mission est facturée hors taxes, avec un devis qui précise le traitement de la TVA.",
  offresIntro: [
    "Pour une banque, une société de négoce, une organisation internationale ou une PME du canton, nos trois métiers partagent une contrainte : chaque traitement de données doit pouvoir être justifié devant votre conformité, votre société d'audit ou votre autorité de surveillance.",
    "Les cartes ci-dessous traduisent cette contrainte en livrables. Nous intervenons depuis Lyon, sans adresse en Suisse, et nous travaillons en français ; le devis forfaitaire de chaque mission arrête le périmètre, les livrables, le calendrier et le prix avant toute signature.",
  ],
  offres: [
    {
      title: "Cadrage sous contrainte de confidentialité",
      cta: "Notre conseil en IA",
      desc: "Le conseil qualifie d'abord votre situation : établissement assujetti à la FINMA ou non, fonction essentielle ou non, données couvertes par un secret légal ou contractuel. Il produit l'inventaire de vos applications d'IA avec leur classement par risque, tel que la FINMA l'examine chez les assujettis, et une feuille de route qui tient compte du calendrier de vos comités.",
      points: ["Qualification réglementaire de chaque usage", "Inventaire et classement des risques", "Feuille de route calée sur vos comités"],
    },
    {
      title: "Agents et outils qui restent sous contrôle",
      cta: "Le développement sur mesure",
      secondaryCta: "Des outils IA par métier",
      desc: "Les assistants et les agents que nous développons ont un lieu de traitement, une durée de conservation et des accès décidés avec votre conformité, puis consignés dans la documentation. Chaque version passe des tests fixés à l'avance, avec leurs indicateurs, et le code source vous est livré, pour que vos équipes ou un autre prestataire puissent reprendre l'outil.",
      points: ["Lieu de traitement choisi et écrit", "Tests et indicateurs fixés à l'avance", "Code remis pour la reprise"],
    },
    {
      title: "Automatisation des rapprochements et des rapports",
      cta: "Automatiser avec Masteria",
      desc: "Nous automatisons les contrôles et les saisies qui pèsent sur les équipes d'exploitation : rapprochement de confirmations de transaction, préparation de dossiers d'ouverture de compte, extraction de données de relevés. L'outil signale, la personne décide, et chaque correction manuelle est conservée pour améliorer l'outil.",
      points: ["Rapprochements et contrôles préparés", "Décision laissée au collaborateur", "Corrections conservées et revues"],
    },
  ],
  etapes: [
    { title: "Situer l'activité au regard de la FINMA", desc: "Lors d'un premier entretien de 30 minutes, offert et mené à distance, nous situons votre activité face aux règles de la FINMA, à la loi sur la protection des données et à vos contrats. Le devis forfaitaire vous parvient ensuite." },
    { title: "Un atelier avec la conformité, dans vos bureaux", desc: "Le cadrage réunit le métier, la conformité, la sécurité informatique et, si vous en avez nommé un, votre conseiller à la protection des données. Ensemble, nous qualifions chaque usage et nous écrivons ce qui peut sortir de vos systèmes, et vers quel lieu de traitement." },
    { title: "Développer sur des données de test", desc: "Le développement avance depuis Lyon, sur des données fictives ou anonymisées que votre conformité a validées. Les données de clients n'entrent dans l'outil qu'après l'approbation de l'environnement de production." },
    { title: "Remettre le dossier avant la mise en service", desc: "Nous livrons la documentation que la FINMA décrit pour les applications importantes : but de l'outil, sélection et préparation des données, choix du modèle, mesures de performance, hypothèses, limites, tests, contrôles et solutions de repli." },
    { title: "Passer la main et suivre les corrections", desc: "Dans vos locaux genevois, nous transmettons le code, les procédures d'exploitation et les accès à l'équipe désignée. Les réponses que les utilisateurs ont ignorées ou modifiées sont ensuite suivies, parce qu'elles signalent les points faibles de l'outil." },
  ],
  formation: [
    "Les collaborateurs qui utilisent l'outil doivent savoir repérer une réponse douteuse et la corriger, car ces corrections alimentent la surveillance de l'outil. Nous les formons en français, sur place à Genève ou en visio, sur l'outil livré et sur des documents validés par la conformité.",
    "Aucun OPCO ne prend en charge la formation d'une entreprise suisse : la journée intra, à 1 980 € HT, se règle sur votre budget de formation, et le devis indique comment la TVA est traitée.",
  ],
  guide: {
    kicker: "Secret, externalisation et lieu de traitement",
    h2: "À Genève, les règles de secret et d'externalisation dessinent l'outil d'IA avant ses fonctions",
    lead: "Les organisations internationales, les missions permanentes et les consulats forment la première branche d'emploi du canton de Genève : 30 983 postes en équivalents plein temps, chiffre de 2023 publié en mai 2026 par l'OCSTAT, l'office cantonal de la statistique. Les services financiers comptent 25 726 emplois, soit 7,1 % du total, et pèsent 12,0 % de la valeur ajoutée cantonale. Ces employeurs manipulent des données couvertes par un secret, une immunité ou un contrat. Un outil d'IA s'y conçoit à partir de trois questions : qui peut lire quoi, où les données sont traitées, comment l'établissement reprend l'outil si le prestataire s'en va.",
    sections: [
      {
        h3: "La circulaire FINMA 2018/3 exige qu'une banque puisse reprendre ce qu'elle externalise",
        paras: [
          "Pour une banque, une maison de titres, une assurance ou un gestionnaire de fortune collective, la circulaire FINMA 2018/3, dans sa version en vigueur depuis le 1er janvier 2021, encadre l'externalisation des fonctions essentielles. Elle demande une analyse de risque avant le contrat. Elle exige que la réintégration ordonnée de la fonction, ou son transfert à un autre prestataire, soit garantie, et que le choix du prestataire tienne compte des conséquences d'un changement.",
          "Un outil d'IA développé sur mesure répond à cette exigence dès sa conception. Nous remettons le code source, la documentation et les procédures d'exploitation, qui permettent à la banque de reprendre l'outil en interne ou d'en transférer la maintenance. Quand le prestataire n'est pas assujetti à la FINMA, la circulaire prévoit qu'il s'engage par contrat à fournir à la FINMA les renseignements et documents dont elle a besoin ; cet engagement entre alors au contrat de mission.",
        ],
      },
      {
        h3: "La FINMA examine l'inventaire, les tests et la vérification indépendante des outils d'IA",
        paras: [
          "Dans sa communication 08/2024 du 18 décembre 2024, la FINMA constatait qu'il n'existe pas de législation propre à l'IA en Suisse, et que les exigences de gouvernance du droit des marchés financiers en couvrent les risques. Elle a passé en revue sept domaines : gouvernance, inventaire et classification des risques, qualité des données, tests et surveillance constante, documentation, explicabilité, vérification indépendante. Pour elle, le risque d'une application dépend de sa complexité, de son autonomie, de son champ d'application et de son intégration dans les processus.",
          "Pour les applications importantes, la FINMA regarde si la documentation décrit leur but, leurs données, leurs limites et leurs solutions de repli. Elle vérifie aussi que l'établissement analyse les cas où l'utilisateur a ignoré ou modifié le résultat, parce que ces corrections révèlent des faiblesses. En cas d'externalisation, elle cherche des tests, des contrôles et des clauses contractuelles supplémentaires sur les compétences et les responsabilités. Nous livrons ce dossier avec l'outil, et la trace des corrections dès la mise en service.",
        ],
      },
      {
        h3: "La loi sur la protection des données s'applique déjà à chaque outil d'IA",
        paras: [
          "Le 12 février 2025, le Conseil fédéral a décidé de ratifier la Convention du Conseil de l'Europe sur l'IA et d'apporter au droit suisse les modifications nécessaires, en poursuivant les travaux par secteur, comme la santé et les transports. Dans l'intervalle, le Préposé fédéral à la protection des données et à la transparence (PFPDT) l'a rappelé en mai 2025 : la loi en vigueur depuis le 1er septembre 2023 s'applique directement aux traitements fondés sur l'IA, et leurs fabricants, fournisseurs et utilisateurs doivent en rendre transparents le but, le fonctionnement et les sources de données.",
          "Deux articles de la loi pèsent sur la conception d'un outil. L'article 7 impose de protéger les données dès la conception et par défaut, avec des préréglages qui limitent le traitement au minimum requis par sa finalité. L'article 21 oblige à informer la personne de toute décision prise exclusivement par un traitement automatisé qui l'affecte de manière significative, et lui permet d'exiger qu'une personne physique la revoie. Nous concevons donc nos outils pour qu'un collaborateur valide chaque décision qui engage un client.",
        ],
      },
      {
        h3: "Le lieu de traitement se choisit déploiement par déploiement",
        paras: [
          "La documentation de Microsoft Foundry, mise à jour en août 2026, distingue trois familles de déploiement pour ses modèles. Un déploiement global peut traiter les requêtes dans n'importe quelle région Azure. Un déploiement en zone de données reste dans la zone désignée, et la zone européenne suit la frontière de données de l'Union définie par Microsoft, qui peut inclure des pays de l'AELE (Association européenne de libre-échange) comme la Suisse. Un déploiement standard traite les requêtes dans la géographie Azure que vous choisissez.",
          "Microsoft précise que les nouveaux modèles arrivent d'abord en déploiement global, et en dernier dans les déploiements par géographie, sans date garantie. Le choix devient un arbitrage entre le modèle le plus récent et le lieu de traitement le plus restreint. Il se fait avec votre conformité au cadrage, s'écrit dans le dossier de l'outil et se revoit à chaque changement de modèle. Les autres éditeurs publient leurs propres options, que nous comparons selon la même grille.",
        ],
      },
      {
        h3: "Le négoce et la gestion de fortune ne protègent pas les mêmes secrets",
        paras: [
          "Selon l'OCSTAT, le commerce de gros, qui comprend le négoce de transit, a gagné 6,0 points de part de la valeur ajoutée cantonale entre 1995 et 2023, alors que sa part de l'emploi reculait de 0,4 point. Dans ce commerce, les marchandises sont achetées à l'étranger et revendues sans passer par la Suisse. Le secret y est commercial : prix, contreparties, volumes, conditions de livraison. Un outil de négoce se conçoit d'abord à partir des clauses de confidentialité de vos contrats.",
          "Un gestionnaire de fortune relève de la loi fédérale sur les établissements financiers (LEFin). Son article 69 prévoit jusqu'à trois ans de peine privative de liberté, ou une peine pécuniaire, contre l'organe, l'employé ou le mandataire d'un établissement financier qui révèle un secret reçu ou appris dans l'exercice de ses fonctions. Enfin, une entreprise genevoise dont les systèmes d'IA produisent des résultats utilisés dans l'Union peut aussi relever de l'AI Act, le règlement de l'UE sur l'intelligence artificielle, selon son article 2 : le classement des usages se fait alors pour les deux droits.",
        ],
      },
    ],
    table: {
      caption: "Ce qu'un outil d'IA sur mesure doit prévoir à Genève, texte par texte",
      headers: ["Texte", "Ce qu'il demande", "Ce que nous livrons"],
      rows: [
        ["Circulaire FINMA 2018/3 (banques, assurances, gestionnaires de fortune collective)", "Analyse de risque, inventaire, contrat écrit, réintégration ou transfert garantis", "Description du service pour l'inventaire, code source et documentation pour la reprise"],
        ["Communication FINMA 08/2024", "Inventaire des applications, tests, documentation, vérification indépendante", "Dossier de l'outil et trace des réponses corrigées par les utilisateurs"],
        ["LPD, article 7", "Protection des données dès la conception et par défaut", "Préréglages qui limitent les données traitées au minimum utile"],
        ["LPD, article 21", "Information et revue humaine des décisions individuelles automatisées", "Validation par un collaborateur avant toute décision qui engage un client"],
        ["LEFin, article 69", "Secret professionnel des établissements financiers", "Développement sur données fictives ou anonymisées jusqu'à l'approbation de la production"],
        ["AI Act, article 2", "Application aux systèmes dont les résultats sont utilisés dans l'Union", "Classement des usages au regard du règlement européen quand vos clients y sont"],
      ],
    },
    cas: {
      h3: "Mise en situation : une société de négoce rapproche ses confirmations de transaction",
      contexte: "Cet exemple est construit pour illustrer la démarche. Prenons une société de négoce de métaux de trente personnes, installée à Genève. Son équipe des opérations reçoit chaque jour, en anglais, les confirmations envoyées par ses contreparties, et les compare à la main aux transactions saisies dans son logiciel. Un écart sur une tolérance de quantité ou sur une période de chargement se découvre parfois au moment de la facture.",
      etapes: [
        "Réunir avec l'équipe des opérations un échantillon de confirmations passées et les écarts déjà relevés à la main, puis faire valider par la direction ce qui peut servir aux tests.",
        "Écrire la liste des champs à comparer : produit, quantité et tolérance, prix ou formule de prix, période de chargement, Incoterm (la règle de la Chambre de commerce internationale qui répartit frais et risques du transport).",
        "Choisir le lieu de traitement avec la direction et l'écrire dans la proposition : type de déploiement, région, durée de conservation, accès.",
        "Construire l'outil qui extrait ces champs, les compare à la transaction saisie et liste chaque écart avec la phrase qui le justifie, puis le tester sur l'échantillon.",
        "Mettre en service avec une règle simple : l'outil signale, l'opérateur décide, et chaque écart corrigé à la main est conservé pour la mise à jour suivante.",
      ],
      resultat: "L'équipe reçoit, pour chaque confirmation, la liste des écarts à vérifier et la phrase source de chacun. Le temps gagné se mesure sur votre volume de transactions, avec vous, après quelques semaines d'usage ; nous ne promettons aucun chiffre avant cette mesure.",
    },
    pieges: [
      { titre: "Choisir un déploiement global par défaut", texte: "Il donne accès aux modèles les plus récents et peut traiter vos requêtes dans n'importe quelle région. Pour des données de clients, le lieu de traitement se choisit avec la conformité avant le premier test." },
      { titre: "Oublier l'outil d'IA dans l'inventaire des externalisations", texte: "Si la banque qualifie l'outil d'externalisation d'une fonction essentielle, il entre dans l'inventaire avec son prestataire et ses sous-traitants, comme le demande la circulaire 2018/3." },
      { titre: "Tester le prototype sur des données de clients", texte: "Le secret professionnel ne connaît pas de phase pilote. Les essais se font sur des données fictives ou anonymisées tant que l'environnement de production n'est pas approuvé." },
      { titre: "Effacer les réponses corrigées par les utilisateurs", texte: "Une réponse ignorée ou modifiée signale une faiblesse de l'outil. La FINMA regarde si ces cas sont analysés ; conservez-les et revoyez-les à chaque mise à jour." },
      { titre: "Supposer que l'AI Act s'arrête à la frontière", texte: "Une société genevoise dont les résultats d'IA servent des clients à Annecy ou à Lyon peut entrer dans le champ du règlement européen. Vérifiez où vos clients utilisent ces résultats avant de conclure qu'un usage y échappe." },
    ],
  },
  faq: [
    { q: "Masteria est-il assujetti à la FINMA ?", a: "Non : Masteria est un cabinet français, basé à Lyon, qui intervient comme prestataire. Si votre établissement qualifie l'outil d'externalisation d'une fonction essentielle, le contrat de mission inclut l'engagement de transmettre à la FINMA les informations qu'elle demande, comme le prévoit la circulaire 2018/3." },
    { q: "Où seront traitées les données de nos clients ?", a: "Là où vous le décidez avec votre conformité, avant le premier test. Chaque éditeur propose ses options de localisation ; chez Microsoft, les déploiements standard et provisionnés par région traitent les requêtes dans la géographie Azure que vous désignez. Le lieu retenu figure dans la documentation de l'outil." },
    { q: "Comment est facturée une mission pour une entreprise genevoise ?", a: "Au forfait, sur un devis écrit et accepté avant le démarrage. Nous facturons hors taxes, selon le traitement de la TVA décrit au devis. Aucun OPCO ne finance une mission conduite pour une entreprise suisse." },
    { q: "Faut-il une analyse d'impact pour notre outil ?", a: "La loi fédérale l'exige lorsque le traitement prévu présente un risque élevé pour la personnalité ou les droits fondamentaux des personnes, par exemple quand des données sensibles sont traitées à grande échelle (article 22). Le responsable du traitement décide ; nous lui fournissons la description du traitement et les mesures de protection prévues, qui en forment une partie." },
    { q: "Notre outil peut-il prendre seul une décision concernant un client ?", a: "La loi permet ces décisions sous conditions d'information et de revue humaine. En pratique, nous concevons des outils qui préparent la décision, et un collaborateur la prend. Ce choix facilite aussi l'explicabilité, que la FINMA examine de près quand une décision doit être motivée auprès d'un client, d'un collaborateur ou de la société d'audit." },
    { q: "Le règlement européen sur l'IA s'applique-t-il à une entreprise genevoise ?", a: "Dans certains cas, oui : son article 2 vise aussi les fournisseurs et les déployeurs établis hors de l'Union lorsque les résultats de leurs systèmes d'IA sont utilisés dans l'Union. Côté suisse, le Conseil fédéral a choisi en février 2025 de ratifier la Convention du Conseil de l'Europe sur l'IA. Le cadrage traite les deux droits, usage par usage." },
    { q: "Faut-il prévoir des réunions sur place à Genève ?", a: "Oui, à trois moments : l'atelier avec votre conformité, une séance d'observation au poste, puis la remise de l'outil. Le reste du travail se conduit depuis Lyon. Masteria n'a pas d'adresse en Suisse ; Genève est proche d'Annecy, que nous servons aussi depuis nos bureaux lyonnais." },
    { q: "Que remettez-vous à notre conformité et à notre société d'audit ?", a: "L'outil en service, son code source, sa documentation et ses procédures d'exploitation. Le dossier décrit le but de l'outil, ses données, son modèle, ses tests et ses solutions de repli. Il permet aussi de reprendre l'outil en interne ou d'en confier la maintenance ailleurs, ce que la circulaire FINMA demande de garantir pour une externalisation." },
  ],
  sources: [
    { name: "FINMA : circulaire 2018/3 « Outsourcing » (dernière modification du 4 novembre 2020)", url: "https://www.finma.ch/fr/~/media/finma/dokumente/dokumentencenter/myfinma/rundschreiben/finma-rs-2018-03-01012021_de.pdf?la=fr" },
    { name: "FINMA : communication sur la surveillance 08/2024, gouvernance et gestion des risques liés à l'IA (18 décembre 2024)", url: "https://www.finma.ch/fr/~/media/finma/dokumente/dokumentencenter/myfinma/4dokumentation/finma-aufsichtsmitteilungen/20241218-finma-aufsichtsmitteilung-08-2024.pdf?sc_lang=fr&hash=13E1E8A0EBF3AE250A1EB6E26BD3428D" },
    { name: "Fedlex, LPD (RS 235.1) : protection dès la conception, décisions automatisées et analyse d'impact (articles 7, 21 et 22)", url: "https://www.fedlex.admin.ch/eli/cc/2022/491/fr" },
    { name: "PFPDT : la loi sur la protection des données est directement applicable à l'IA (mise à jour du 8 mai 2025)", url: "https://www.edoeb.admin.ch/en/update-current-legislation-directly-applicable-ai" },
    { name: "Conseil fédéral : réglementation de l'IA, ratification de la Convention du Conseil de l'Europe (12 février 2025)", url: "https://www.admin.ch/fr/nsb?id=104110" },
    { name: "OCSTAT : communication statistique n° 77, emploi dans le canton de Genève et ses communes de 1995 à 2023 (mai 2026)", url: "https://statistique.ge.ch/tel/publications/2026/analyses/communications/an-cs-2026-77.pdf" },
    { name: "Microsoft Learn : types de déploiement des modèles Microsoft Foundry", url: "https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/deployment-types" },
    { name: "Loi fédérale sur les établissements financiers (LEFin, RS 954.1), article 69, texte reproduit par droit-bilingue.ch", url: "https://www.droit-bilingue.ch/fr-en/9/95/954.1-69-72.html" },
    { name: "Commission européenne, AI Act Service Desk : article 2 (champ d'application)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2" },
  ],
}
