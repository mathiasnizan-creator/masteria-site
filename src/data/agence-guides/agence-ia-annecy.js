// Contenu propre à /agence-ia-annecy. Lu par AgenceGeoPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Insee Analyses Auvergne-Rhône-Alpes n° 137 (vallée de l'Arve) et n° 145 (frontaliers), documentation Odoo (import), Microsoft Learn et Anthropic (usage des données pour l'entraînement), AI Act Service Desk (article 6, annexe I), EUR-Lex (règlement 2026/1744) ; retour de mission tiré de src/data/etudes-de-cas.js (photovoltaique).
export default {
  slug: 'agence-ia-annecy',
  dateModified: '2026-10-03',
  intro: "Dans le bassin annécien, un outil d'IA doit pouvoir vivre sans son concepteur : les petites entreprises de la sous-traitance n'ont pas toujours d'informaticien, et une partie des ingénieurs du Grand Annecy travaillent en Suisse. Masteria, basé à Lyon à environ 1 h 30, branche des assistants et des automatisations sur votre logiciel de gestion, les éprouve sur vos dossiers et vous laisse le code source avec sa documentation. Le cadrage, l'observation des postes et la passation se font chez vous.",
  offresIntro: [
    "Pour une entreprise du bassin annécien, nous concevons des outils que votre équipe fera vivre seule : peu de briques, des réglages lisibles et une documentation écrite pour la personne qui reprendra l'outil.",
    "Les trois cartes déclinent cette règle dans nos métiers. Nous chiffrons chaque mission au forfait avant de commencer, et nous la terminons dans vos locaux, code source et documentation compris.",
  ],
  offres: [
    {
      desc: "Le conseil part d'un flux précis : une demande de prix arrivée avec un plan, une commande de revendeur pour la prochaine collection, une réception d'entrepôt à saisir. Nous mesurons le temps qu'il prend, nous repérons ce que vos contrats clients interdisent d'envoyer à un outil externe, et nous classons les chantiers par gain attendu et par facilité.",
      points: ["Flux mesurés sur place", "Contraintes des contrats clients relevées", "Chantiers classés avant de construire"],
    },
    {
      desc: "Les assistants que nous développons se branchent sur votre logiciel de gestion, qu'il s'agisse d'Odoo, de SAP ou d'un autre, avec le moins de briques possible. Chaque réglage que votre équipe peut modifier figure dans la documentation, et vous recevez le code source : l'outil ne dépend ni de nous ni d'une seule personne chez vous.",
      points: ["Assistants reliés à votre logiciel de gestion", "Réglages décrits pour votre équipe", "Code source remis en fin de mission"],
    },
    {
      desc: "Nous automatisons les saisies et les contrôles qui reviennent chaque semaine : un fichier d'entrepôt converti en import pour le logiciel, une consultation de transporteurs, une demande de client transformée en lignes de devis. Un contrôle des totaux et une validation humaine précèdent tout ce qui modifie vos données.",
      points: ["Imports préparés et contrôlés", "Consultations et relances préparées", "Validation humaine avant écriture"],
    },
  ],
  etapes: [
    { title: "Trente minutes pour situer le besoin", desc: "Un appel ou une visio d'une demi-heure, offert, permet de repérer le flux concerné et les exigences de vos donneurs d'ordres. Vous recevez ensuite un forfait écrit, avec ce qui sera livré et à quelle date." },
    { title: "Observer les postes, d'Annecy à la vallée de l'Arve", desc: "Nous venons voir le travail là où il se fait : le chargé d'affaires qui chiffre une pièce, la personne qui saisit une commande, le magasinier qui réceptionne. Une heure trente environ sépare Annecy de nos bureaux lyonnais, et la proposition fixe les dates de ces visites." },
    { title: "Construire à distance sur un échantillon", desc: "Nos développeurs travaillent à distance, sur un échantillon de dossiers que vous avez choisi et nettoyé. Les données que vos contrats protègent restent hors de l'outil tant que leur traitement n'est pas validé." },
    { title: "Tester avant d'écrire dans le logiciel", desc: "L'outil traite d'abord des dossiers clos, puis des dossiers en cours sans rien modifier. Il n'écrit dans votre logiciel de gestion qu'après l'accord de la personne responsable du flux." },
    { title: "Remettre l'outil à son référent", desc: "La passation réunit dans vos locaux le référent désigné et son suppléant. Ils reçoivent le code, les accès et la marche à suivre pour chaque mise à jour, puis apprennent à corriger l'outil et à l'étendre sans nous." },
  ],
  formation: [
    "Le référent ne suffit pas : chaque utilisateur doit savoir quand l'outil se trompe et comment le signaler. Les journées de formation ont lieu dans vos locaux, à Annecy, à Rumilly ou dans la vallée de l'Arve, ou à distance pour une équipe répartie sur plusieurs sites.",
    "La certification Qualiopi de Masteria, qui porte sur les actions de formation, permet à votre OPCO de financer ces journées, à 1 980 € HT chacune en intra, dans la limite des fonds de votre branche. Le conseil et le développement, eux, se paient sur le budget de l'entreprise.",
  ],
  guide: {
    kicker: "Sous-traitance, logiciel de gestion et frontière",
    h2: "Autour d'Annecy, un outil d'IA doit tourner sans son concepteur",
    lead: "Dans la vallée de l'Arve, le décolletage occupe deux emplois industriels sur trois et un emploi sur cinq ; une quinzaine d'établissements de plus de 200 salariés y côtoient près de 400 petits établissements, selon l'Insee (janvier 2022). Au Grand Annecy, 3 900 actifs relevaient en 2018 d'un profil de frontaliers que l'Insee décrit comme des cadres français, majoritairement de moins de 40 ans, par exemple ingénieurs ou cadres d'études en informatique. Nous en tirons une règle de conception : l'outil livré doit pouvoir être maintenu par la personne qui l'utilise, avec une documentation qu'elle comprend.",
    sections: [
      {
        h3: "La sous-traitance de précision chiffre à partir des plans de ses clients",
        paras: [
          "L'Insee rappelle que le décolletage, principal employeur de la vallée de l'Arve, a subi au milieu des années 2000 les mutations technologiques de l'automobile, son principal débouché. Il a depuis diversifié ses clients vers l'aéronautique et le médical, et ouvert ses marchés à l'international. Chaque nouveau donneur d'ordres envoie ses demandes de prix avec ses plans, ses cotes, ses matières et ses exigences de qualité. Le chargé d'affaires les lit, les compare à des pièces déjà fabriquées, puis chiffre.",
          "Un assistant peut préparer ce travail : extraire du dossier la matière, les tolérances, les quantités et les traitements demandés, retrouver dans l'historique du logiciel de gestion les pièces proches, puis proposer une base de chiffrage que le chargé d'affaires valide ligne par ligne. La première question reste contractuelle. Un accord de confidentialité peut interdire de transmettre les plans à un tiers, et un outil hébergé chez un éditeur peut être ce tiers. Nous lisons ces clauses avec vous avant de choisir l'hébergement.",
        ],
      },
      {
        h3: "Un outil d'IA doit survivre au départ de celui qui l'a construit",
        paras: [
          "Un assistant bricolé par un collaborateur passionné rend service tant que son auteur est là. Le jour où celui-ci rejoint un employeur genevois, plus personne ne sait pourquoi l'outil répond de travers. Nous concevons donc chaque outil pour un successeur qui ne l'a pas vu naître : une architecture simple, des réglages regroupés au même endroit, une documentation écrite en français courant et une procédure de mise à jour testée avec votre référent.",
          "Le jour de la remise, le référent et son suppléant repartent avec le code source, les accès et la liste des incidents probables, chacun avec son remède. Le prestataire qui gère votre logiciel de gestion, si vous en avez un, reçoit le même dossier technique. L'outil change de mains sans dépendre de la mémoire d'une seule personne. Si le référent change de poste à son tour, ce dossier suffit pour former son remplaçant.",
        ],
      },
      {
        h3: "Une petite entreprise de négoce vit dans son logiciel de gestion",
        paras: [
          "Dans une petite entreprise de négoce, tout passe par l'ERP, le progiciel qui tient les articles, les clients, les stocks et les factures. Le temps se perd autour de lui : une demande de client recopiée en lignes de devis, un fichier d'entrepôt ressaisi, des transporteurs consultés un par un. Ces tâches se prêtent à l'automatisation, à condition de respecter les règles du logiciel.",
          "La documentation d'Odoo, par exemple, indique que l'import accepte des fichiers Excel ou CSV, qu'un bouton de test vérifie les données avant l'import, et qu'un import est définitif : il ne peut pas être annulé. Un assistant qui prépare ces fichiers doit donc contrôler les totaux, laisser la personne responsable lancer le test et garder la trace de chaque import. Nous appliquons la même prudence aux autres logiciels de gestion.",
        ],
      },
      {
        h3: "Une IA intégrée à une machine relève d'un autre régime que l'IA du bureau",
        paras: [
          "Les constructeurs de machines spéciales et les intégrateurs de mécatronique du bassin doivent traiter un cas que les sociétés de services ne rencontrent pas : l'IA logée dans la machine elle-même. L'AI Act, texte de l'Union qui classe les usages de l'IA par niveau de risque, range à haut risque un système d'IA qui joue le rôle de composant de sécurité dans un produit couvert par la législation de son annexe I, lorsque ce produit passe par une évaluation de conformité menée par un tiers. Le règlement (UE) 2023/1230 sur les machines figure dans cette annexe.",
          "Le règlement (UE) 2026/1744 a précisé en juillet 2026 qu'une IA réservée à l'assistance, à l'optimisation ou au confort ne constitue pas un composant de sécurité, et qu'une IA dont la défaillance met en danger la santé ou la sécurité en constitue un. Pour les produits de l'annexe I, les exigences du haut risque entrent en application le 2 août 2028. Nos missions portent sur les outils de chiffrage, de documentation et d'administration des ventes ; une fonction de sécurité reste l'affaire de vos ingénieurs et de votre organisme notifié.",
        ],
      },
    ],
    table: {
      caption: "Bassin annécien : l'outil à construire et ce qu'il faut vérifier d'abord",
      headers: ["Activité", "Flux qui prend du temps", "Outil à construire", "À vérifier avant"],
      rows: [
        ["Décolletage et mécanique de précision", "Demandes de prix reçues avec plans et cahiers des charges", "Extraction des exigences et base de chiffrage tirée de l'historique", "Clauses de confidentialité imposées par les donneurs d'ordres sur leurs plans"],
        ["Machines spéciales et mécatronique", "Offres techniques et documentation des machines livrées", "Assistant de rédaction appuyé sur les nomenclatures et les notices validées", "Aucune fonction de sécurité confiée à l'IA hors du régime de l'annexe I"],
        ["Marques de sport et d'outdoor", "Retours en garantie et questions des revendeurs", "Tri des retours et brouillon de réponse tiré des fiches techniques", "Référentiel produit unique et à jour"],
        ["Négoce et distribution", "Devis, transport et réceptions d'entrepôt", "Demandes converties en lignes de devis, imports contrôlés", "Fiches articles propres dans le logiciel de gestion"],
        ["Hôtellerie et loisirs du lac", "Demandes de groupes et de séminaires en plusieurs langues", "Préparation des propositions à partir des tarifs et des disponibilités", "Grille tarifaire et conditions de vente à jour"],
      ],
    },
    cas: {
      h3: "Retour de mission : trois assistants pour une équipe de cinq personnes qui travaille sur Odoo",
      contexte: "L'entreprise distribue du matériel photovoltaïque depuis trois entrepôts français vers des clients répartis dans dix-sept pays. Cinq personnes la font tourner, et toute l'activité passe par Odoo ; le directeur commercial et le directeur des opérations se relaient l'un l'autre. La direction cherchait à vendre davantage à effectif égal. Certains salariés passaient déjà par leurs comptes personnels d'IA ; la direction, elle, posait une condition : ne jamais croire l'outil sur parole.",
      etapes: [
        "Mener trois entretiens en visio, avec la direction puis avec chacun des deux directeurs, et étudier les fichiers d'entrepôt, le suivi des marges et un courriel type adressé aux transporteurs.",
        "Décrire pas à pas quatre flux (vendre, livrer et encaisser, prospecter, piloter), puis classer douze gisements de temps sur deux axes : le gain possible et la facilité de mise en œuvre à trois mois.",
        "Confier trois chantiers à trois porteurs : faire consulter les transporteurs quinze jours avant chaque livraison, convertir les fichiers d'entrepôt en fichier d'import Odoo après contrôle des totaux, transformer chaque demande entrante en lignes de devis.",
        "Fermer les comptes personnels au profit d'un abonnement d'équipe géré par l'entreprise, et adopter une charte d'une page, huit règles en tout, sous la responsabilité d'un référent IA.",
        "Suivre un plan sur trois mois : relever les points de départ pendant les deux journées de formation sur site, puis mesurer cinq indicateurs trente jours plus tard.",
      ],
      resultat: "La direction dispose du diagnostic et de trois décisions à prendre, résumées sur une seule page : l'outil commun, les chantiers et les règles d'usage. Pour le troisième mois, les cibles sont posées comme telles, à vérifier au bilan : un devis parti en moins de douze heures, la moitié du temps actuel pour interroger les transporteurs, des relances automatiques pour toute la clientèle, huit réceptions sur dix enregistrées sans ressaisie, et les trois utilisateurs concernés qui ouvrent les assistants chaque semaine.",
      lien: { href: "/etudes-de-cas-ia#photovoltaique", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      { titre: "Envoyer le plan d'un donneur d'ordres dans un assistant grand public", texte: "Un plan coté appartient souvent au client, et l'accord de confidentialité peut interdire sa transmission à un tiers. Microsoft pour Copilot, et Anthropic par défaut pour ses produits commerciaux, s'engagent à ne pas utiliser vos données pour entraîner leurs modèles ; le contrat signé avec le donneur d'ordres reste pourtant la règle qui tranche." },
      { titre: "Laisser l'outil reposer sur la personne qui l'a demandé", texte: "Si le seul à comprendre l'assistant s'en va, l'outil s'arrête avec lui. Désignez un référent et un suppléant, et exigez une documentation que tous les deux comprennent." },
      { titre: "Écrire dans le logiciel de gestion dès le premier jour", texte: "Odoo prévient qu'un import ne s'annule pas. L'outil commence en lecture seule, puis prépare des fichiers que la personne responsable teste et valide avant de les importer." },
      { titre: "Faire chiffrer une pièce sans relecture du chargé d'affaires", texte: "Une tolérance mal lue ou un traitement de surface oublié se paie à la livraison. L'assistant propose une base de chiffrage, et le chargé d'affaires la corrige puis la signe." },
      { titre: "Mettre l'outil en service pendant la prise de commandes d'une collection", texte: "Une marque de sport qui change d'outil au moment où ses revendeurs commandent prend un risque inutile. Calez la mise en service sur une période creuse, avec un retour possible à l'ancienne méthode pendant quelques semaines." },
    ],
  },
  faq: [
    { q: "Vous déplacez-vous jusque dans la vallée de l'Arve ?", a: "Oui, comme à Annecy : nous venons pour cadrer, voir les postes et remettre l'outil. Masteria n'a pas d'adresse en Haute-Savoie et part de Lyon, à environ 1 h 30 d'Annecy. Entre deux visites, nous développons et suivons le projet en visio, à des dates fixées dans la proposition." },
    { q: "Nous n'avons pas d'informaticien : pouvez-vous quand même nous livrer un outil ?", a: "Oui. Nous concevons l'outil pour la personne qui l'utilisera, avec peu de briques et des réglages décrits dans une documentation en français courant. Le code source, les accès et la marche à suivre pour les mises à jour vous sont remis à la fin. Votre prestataire informatique, si vous travaillez avec l'un d'eux, en reçoit une copie." },
    { q: "Peut-on utiliser l'IA sur les plans et les cahiers des charges de nos clients ?", a: "Cela dépend de vos contrats. Nous lisons avec vous les clauses de confidentialité de vos donneurs d'ordres avant de choisir l'hébergement. Selon ce qu'elles autorisent, l'outil travaille sur des données extraites sans le plan, dans un environnement professionnel qui n'utilise pas vos données pour entraîner ses modèles, ou attend l'accord écrit du client." },
    { q: "Sur quels logiciels de gestion avez-vous déjà branché des assistants ?", a: "Nos études de cas publiées en donnent deux exemples. Pour un distributeur qui travaille sur Odoo, la conversion des fichiers d'entrepôt en imports contrôlés fait partie des chantiers retenus. Pour un groupe industriel, un assistant extrait le Kbis (l'extrait d'immatriculation de l'entreprise), le RIB (ses coordonnées bancaires) et les contacts d'un courriel de fournisseur afin de préparer sa fiche dans SAP. Le branchement se décide au cadrage." },
    { q: "Une IA intégrée à nos machines relève-t-elle du même cadre ?", a: "Non. L'AI Act range dans le haut risque une IA chargée d'une fonction de sécurité sur une machine soumise à une évaluation par un tiers, et ces exigences s'imposeront le 2 août 2028. Nos missions concernent les outils de bureau : chiffrage, documentation, administration des ventes, logistique. Le développement d'une fonction de sécurité passe par vos équipes d'ingénierie et par l'organisme qui évalue la conformité de la machine." },
    { q: "Une PME de dix personnes peut-elle s'offrir un outil sur mesure ?", a: "Oui, si le périmètre reste serré : un flux, un logiciel, une équipe. Le prix se fixe au forfait après l'appel de cadrage, offert, dans une proposition écrite. Si vous hésitez encore sur le flux à traiter, le Diagnostic IA tranche d'abord ; c'est une prestation payante, dont nous arrêtons la durée et le prix lors du cadrage. Aucun OPCO ne finance le conseil ni le développement." },
    { q: "Pouvez-vous intervenir pour une entreprise installée côté suisse ?", a: "Oui. Pour une entreprise genevoise, notre page Genève décrit le cadre : loi suisse sur la protection des données, règles de la FINMA (l'autorité suisse des marchés financiers) sur l'externalisation, facture hors taxes et pas d'OPCO. Une entreprise implantée en France et en Suisse combine les deux approches dès le cadrage." },
    { q: "Formez-vous aussi les équipes qui utiliseront l'outil ?", a: "Oui. Nous entraînons vos équipes sur l'outil qu'elles viennent de recevoir, avec les dossiers de leur poste, dans vos murs ou en visio. Masteria étant certifié Qualiopi, l'OPCO de votre branche peut prendre ces journées en charge." },
  ],
  sources: [
    { name: "Insee Analyses Auvergne-Rhône-Alpes n° 137 : la vallée de l'Arve, une zone d'emploi industrielle de plus en plus ouverte sur l'extérieur (janvier 2022)", url: "https://www.insee.fr/fr/statistiques/6018368" },
    { name: "Insee Analyses Auvergne-Rhône-Alpes n° 145 : travailleurs frontaliers, six profils de navetteurs vers la Suisse (mai 2022)", url: "https://www.insee.fr/fr/statistiques/6444379" },
    { name: "Odoo : documentation, exporter et importer des données", url: "https://www.odoo.com/documentation/18.0/applications/essentials/export_import_data.html" },
    { name: "Microsoft Learn : données, confidentialité et sécurité de Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy" },
    { name: "Anthropic Privacy Center : usage des données pour l'entraînement des modèles", url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training" },
    { name: "Commission européenne, AI Act Service Desk : article 6 (classification à haut risque)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-6" },
    { name: "Commission européenne, AI Act Service Desk : annexe I (législation d'harmonisation, dont le règlement machines)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-1" },
    { name: "EUR-Lex : règlement (UE) 2026/1744 du 8 juillet 2026 (omnibus numérique sur l'IA)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1744" },
  ],
}
