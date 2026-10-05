// Contenu propre à /automatisation-documentaire-ia. Lu par SolutionIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : DGFiP (fiche 1 de juin 2026, guide de démarrage, FAQ du 01/09/2026), service-public.gouv.fr (mentions obligatoires), Microsoft Learn (Document Intelligence), OpenAI (sorties structurées), Anthropic (traitement par lots), Insee (Sirene), Cybermalveillance.gouv.fr, guide ANSSI IA générative, étude de cas photovoltaïque.
export default {
  slug: 'automatisation-documentaire-ia',
  dateModified: '2026-10-03',
  intro: "Factures de fournisseurs étrangers, bons de livraison, fichiers d'entrepôt, demandes de devis : votre service reçoit des pièces qu'il ressaisit dans l'ERP, votre logiciel de gestion. Ici, personne ne converse avec un assistant : chaque pièce entrante est lue, contrôlée par vos règles, puis transformée en données, et une personne tranche les cas douteux. Pour interroger des documents, rédiger dans vos outils ou ajouter un modèle à une application, voyez l'assistant documentaire, le copilote interne ou l'intégration LLM. Depuis le 1er septembre 2026, une partie de vos factures arrive déjà structurée. Masteria redessine ce périmètre avec vous et livre la chaîne.",

  etapes: [
    {
      title: "Constituer un échantillon de pièces",
      desc: "Nous rassemblons avec le service quelques centaines de documents récents, mauvais scans et cas tordus compris, puis nous les classons par type, par canal et par volume. Les factures électroniques sont mises à part dès ce stade.",
    },
    {
      title: "Écrire le schéma et les contrôles avec le service",
      desc: "Chaque champ reçoit son format, sa règle de contrôle et l'action prévue en cas d'échec : totaux, rapprochement avec la commande, SIRET vérifié dans Sirene, IBAN comparé au référentiel.",
    },
    {
      title: "Mesurer la chaîne pilote champ par champ",
      desc: "La chaîne traite l'échantillon, et ses résultats sont comparés à une saisie de référence. Nous mesurons le taux d'erreur par champ et la part de documents qui passent tous les contrôles.",
    },
    {
      title: "Installer la file de validation",
      desc: "Les pièces en doute arrivent dans une file avec leur motif : écart de total, doublon possible, IBAN inconnu. La personne corrige ou confirme, et chaque décision est tracée.",
    },
    {
      title: "Brancher l'ERP par paliers",
      desc: "La chaîne produit d'abord un fichier d'import que le service relit, puis écrit dans l'ERP quand les mesures le permettent. Les indicateurs sont revus chaque semaine le premier mois, avec le responsable du service.",
    },
  ],

  cout: {
    lead: "Une chaîne sur un premier type de document démarre autour de 12 000 €. Un traitement à gros volume, multi-flux et relié à plusieurs logiciels de gestion, dépasse 100 000 € et peut atteindre plusieurs centaines de milliers d'euros. Le nombre de types de documents et les contrôles à coder expliquent l'essentiel de l'écart.",
    paras: [
      "Nous fixons le forfait sur devis après le cadrage, à partir de l'échantillon et d'un périmètre écrit. Le fonctionnement se calcule ensuite à la page traitée. Les flux qui supportent un délai passent en traitement par lots : chez Anthropic, l'API de traitement par lots coûte moitié moins cher que l'appel standard, et la plupart des lots se terminent en moins d'une heure, dans une limite de 24 heures. Un traitement de nuit des pièces de la journée en profite.",
    ],
    facteurs: [
      {
        title: "Les types de documents",
        desc: "Pour un modèle de langage, une nouvelle mise en page coûte peu. Un nouveau type de document demande son propre schéma, ses contrôles et son échantillon de test.",
      },
      {
        title: "Les contrôles et rapprochements",
        desc: "Vérifier un total coûte peu. Rapprocher une facture de la commande et du bon de livraison suppose un accès à l'ERP et des tolérances écrites avec le service.",
      },
      {
        title: "Le volume et le délai",
        desc: "Un traitement de nuit par lots coûte moins cher qu'un traitement immédiat. Le volume mensuel fixe le coût d'usage du modèle et la taille de la file de validation.",
      },
      {
        title: "Le raccordement à l'ERP",
        desc: "Un fichier d'import relu demande peu d'intégration. L'écriture directe exige l'API de l'ERP, des droits dédiés, la gestion des rejets et des tests de reprise.",
      },
    ],
  },

  regie: [
    "Un service comptable ou logistique connaît des pics : clôture, inventaire, arrivée d'un fournisseur au format inédit. Pendant ces périodes, un développeur IA mis à disposition en régie ajoute des types de documents et ajuste les contrôles au rythme du service, sur site ou à distance. Quand l'ERP est maintenu par un intégrateur, il travaille avec lui sur le format d'import et sur les droits d'écriture.",
    "Les règles de contrôle sont du code métier : elles restent dans votre dépôt, documentées et testées sur l'échantillon. En fin de mission, votre équipe sait ajouter un type de document, relancer les tests et lire le journal des décisions.",
  ],

  comparatif: {
    intro: "La reconnaissance optique de caractères (OCR) à gabarits reste la bonne réponse pour un formulaire stable reçu en grand volume : elle coûte peu et rend le même résultat à chaque passage. Les moteurs d'extraction récents y ajoutent des modèles préentraînés, pour les factures par exemple, avec un score de confiance par champ. La chaîne sur mesure se justifie quand les mises en page varient, quand un même envoi mêle mail, pièce jointe et tableur, et quand les contrôles de votre métier doivent décider.",
    rows: [
      { aspect: "Formulaire stable, gros volume", off: "Son point fort : rapide, peu coûteux, prévisible", custom: "Superflue si l'OCR à gabarit donne déjà satisfaction" },
      { aspect: "Mises en page variées", off: "Un gabarit à créer pour chaque nouvelle mise en page", custom: "Lecture sans gabarit, un schéma par type de document" },
      { aspect: "Envois mixtes", off: "Images et PDF ; le corps du mail reste à part", custom: "Corps du mail, pièces jointes et tableurs lus ensemble" },
      { aspect: "Contrôles métier", off: "Hors du périmètre de l'outil, faits dans l'ERP ou à la main", custom: "Codés dans la chaîne : totaux, Sirene, IBAN, doublons" },
      { aspect: "Signal de doute", off: "Score de confiance par champ dans les moteurs récents", custom: "Échec de contrôle motivé, envoyé en validation" },
      { aspect: "Coût à la page", off: "Faible et stable", custom: "Plus élevé, réduit de moitié par le traitement de nuit par lots" },
    ],
  },

  guide: {
    kicker: "Flux de documents entrants",
    h2: "Dans une chaîne documentaire, le modèle lit et vos règles de gestion décident",
    lead: "Un modèle de langage lit une facture, un bon de livraison ou un tableau d'entrepôt sans gabarit préalable, là où les anciens outils en exigeaient un par mise en page. Il ne sait pas pour autant si le total est juste ou si le RIB a changé. OpenAI le rappelle pour ses sorties structurées : le format est garanti, et le modèle peut toujours se tromper dans les valeurs. La fiabilité vient donc des contrôles écrits avec votre service et de la personne qui tranche les cas en doute. L'automne 2026 ajoute une donnée : la facturation électronique change la nature des factures que vous recevez.",
    sections: [
      {
        h3: "Depuis septembre 2026, une partie de vos factures arrive déjà structurée",
        paras: [
          "Le 1er septembre 2026, une obligation nouvelle est entrée en vigueur. Toute entreprise établie en France et assujettie à la TVA doit désormais pouvoir recevoir des factures électroniques, qui transitent par une plateforme que l'administration fiscale a agréée. Les ETI (entreprises de taille intermédiaire) et les grandes entreprises émettent les leurs depuis cette date ; les PME et les microentreprises suivront le 1er septembre 2027. La direction générale des Finances publiques (DGFiP) est explicite : une facture papier scannée ou un PDF ordinaire envoyé par mail ne sera plus conforme entre professionnels.",
          "Une facture électronique arrive avec ses données dans l'un des trois formats structurés du socle de la réforme. Ses montants, sa TVA et ses références se lisent dans le fichier, sans modèle de langage ni extraction, et payer une chaîne d'extraction pour ces factures n'a plus de sens. L'automatisation documentaire garde trois terrains, à cartographier au cadrage avec leurs volumes mesurés dans votre service.",
        ],
        list: [
          "Les PDF des fournisseurs français qui n'émettent pas encore de factures électroniques, jusqu'au 1er septembre 2027.",
          "Les factures des fournisseurs étrangers, hors du champ de la facture électronique : la réforme traite ces achats par une transmission de données à l'administration (e-reporting).",
          "Tous les autres documents, que la réforme ne touche pas : bons de livraison, fichiers d'entrepôt, relevés, attestations, formulaires, demandes de devis.",
        ],
      },
      {
        h3: "Le modèle extrait, les contrôles décident",
        paras: [
          "Les sorties structurées garantissent qu'une réponse respecte le schéma demandé : aucun champ obligatoire manquant, aucune valeur hors liste. Le montant lu peut rester faux. Les moteurs spécialisés d'extraction documentaire fournissent, eux, un score de confiance par champ : chez Microsoft, une confiance de 0,95 signifie que la valeur est juste environ 19 fois sur 20. La documentation précise que tous les champs ne renvoient pas de score. Un modèle de langage peut annoncer sa propre certitude, et cette estimation ne remplace pas un contrôle.",
          "La chaîne arbitre donc avec des contrôles écrits avec votre service. Ils sont déterministes : la même pièce reçoit toujours le même verdict. Le total hors taxes plus la TVA doit égaler le total TTC, et les lignes doivent correspondre au bon de commande et au bon de livraison. Le répertoire Sirene de l'Insee doit connaître le numéro SIRET (l'identifiant de l'établissement) : son API ouvre sans frais l'accès aux données, mises à jour chaque jour, de près de 25 millions d'entreprises. Un seul contrôle en échec envoie la pièce en validation, avec son motif.",
        ],
      },
      {
        h3: "Un RIB qui change sort toujours de la chaîne automatique",
        paras: [
          "La fraude au faux RIB passe par les documents. L'escroc usurpe l'identité d'un fournisseur et envoie une facture qui porte ses propres coordonnées bancaires. Cybermalveillance.gouv.fr, le dispositif national d'assistance aux victimes, recommande d'appeler le créancier sur son numéro habituel pour faire confirmer tout nouveau RIB reçu par message. Une chaîne documentaire applique cette règle sans exception : elle compare l'IBAN lu (le numéro de compte international) à celui du référentiel fournisseurs, et ne met jamais à jour ce référentiel elle-même.",
          "Les documents entrants posent un second risque, propre aux modèles de langage. Un PDF peut contenir une consigne que l'œil ne voit pas, écrite en blanc sur fond blanc par exemple, qui tente de détourner l'extraction. L'ANSSI demande de restreindre, et si possible d'interdire, les actions qu'un système d'IA lance seul à partir de contenus venus de l'extérieur, comme les mails (recommandation R27). Dans nos chaînes, le modèle ne déclenche aucune action : il produit des champs que les contrôles vérifient, et seule une personne habilitée modifie un référentiel.",
        ],
      },
      {
        h3: "Une facture reçue deux fois se rapproche avant de se payer",
        paras: [
          "Pendant la phase de démarrage de la réforme, la DGFiP demande de ne pas rejeter une facture arrivée par courriel, en PDF ou sous forme papier pour ce seul motif, dès lors qu'elle porte sur une opération qui a bien eu lieu. La même facture peut donc arriver par la plateforme agréée et par la boîte mail du service. Le guide pratique de démarrage fixe la conduite à tenir : comparer le numéro de facture, le fournisseur, le client, la date et les montants hors taxes, de TVA et TTC, puis désigner une facture de référence et marquer les autres exemplaires comme doublons.",
          "Ce rapprochement se code. Pour chaque pièce, la chaîne cherche une facture déjà reçue avec les mêmes clés, quel que soit le canal. Une concordance complète produit un doublon tracé, qui ne sera ni payé ni comptabilisé une seconde fois ; une concordance partielle part en validation. La trace du rapprochement reste conservée, comme le recommande l'administration, pour démontrer qu'une seule opération a été payée et que la TVA n'a été déduite qu'une fois.",
        ],
      },
      {
        h3: "Les nouvelles mentions obligatoires entrent dans le schéma d'extraction",
        paras: [
          "La réforme ajoute quatre mentions aux factures : le numéro SIREN du client (l'identifiant de l'entreprise) quand il s'agit d'une entreprise, l'adresse de livraison si elle diffère de celle du client, la nature des opérations (livraisons de biens, prestations de services ou les deux) et, le cas échéant, l'option pour le paiement de la taxe d'après les débits. Ces mentions s'appliquent depuis septembre 2026 aux factures des grandes entreprises et des ETI, et s'appliqueront en septembre 2027 à celles des PME et des microentreprises.",
          "Pour les PDF qui continuent d'arriver, ces champs rejoignent le schéma d'extraction et les contrôles : un SIREN client qui ne correspond pas au vôtre signale une facture mal adressée. Le schéma se gère comme une pièce du système, versionné et testé à chaque changement sur un échantillon de documents de votre service. Une chaîne écrite avant la réforme, sans ces champs, mérite une relecture avant la fin de l'année.",
        ],
      },
    ],
    table: {
      caption: "Quel traitement pour quel document entrant, en octobre 2026",
      headers: ["Document entrant", "Sous quelle forme il arrive", "Traitement retenu"],
      rows: [
        ["Facture d'une grande entreprise ou d'une ETI française", "Facture électronique structurée, transmise par la plateforme agréée", "Lecture directe des données, rapprochement avec la commande"],
        ["Facture d'une PME française", "PDF ordinaire, admis jusqu'à son obligation d'émission du 1er septembre 2027", "Extraction, contrôles, recherche d'un doublon reçu par le canal électronique"],
        ["Facture d'un fournisseur étranger", "PDF ou format propre au fournisseur, hors facture électronique", "Extraction, contrôle des montants et de la TVA, données pour l'e-reporting"],
        ["Bon de livraison", "Scan ou photo, mise en page propre à chaque expéditeur", "Extraction des lignes, rapprochement avec la commande"],
        ["Fichier d'entrepôt", "Tableur aux colonnes variables d'un entrepôt à l'autre", "Conversion en fichier d'import de l'ERP, contrôle des totaux"],
        ["Mail de demande de devis", "Texte libre, pièces jointes, références partielles", "Lignes de devis proposées, validées par le commercial"],
      ],
    },
    cas: {
      h3: "Retour de mission : fichiers d'entrepôt et demandes de devis chez un distributeur sur Odoo",
      contexte: "Ce distributeur de solutions photovoltaïques gère tout dans Odoo, son ERP, avec une équipe de trois personnes, des clients à l'export et trois entrepôts en France. Le temps se perd aux abords du logiciel : des demandes reçues par mail retapées en lignes de devis, des numéros de série recopiés à la main depuis des fichiers d'entrepôt illisibles pour la scannette. La direction a posé sa condition au départ : rien de ce que produit l'IA ne fait foi sans contrôle.",
      etapes: [
        "La direction, les opérations et le commercial passent chacun un entretien, conduit flux par flux, avec les pièces sur la table : fichiers d'entrepôt, mail type d'un transporteur, suivi des marges.",
        "La cartographie couvre quatre flux et fait apparaître douze gisements de temps, chacun avec le volume annoncé par l'équipe, sa difficulté et ce qu'il doit à l'ERP.",
        "Trois assistants sont à monter en une seule journée à partir des fichiers de l'entreprise, avant la formation. L'un transformera un fichier d'entrepôt en fichier d'import Odoo et vérifiera les totaux ; un autre tirera des demandes entrantes les lignes d'un devis.",
        "Partout, l'assistant prépare et une personne valide. Huit règles d'usage tiennent sur une page, et un référent IA reçoit les signalements d'erreur.",
        "La feuille de route court sur 90 jours : points de départ relevés pendant la formation prévue en octobre 2026, premier bilan un mois plus tard.",
      ],
      resultat: "Les cibles, posées avant la formation pour un horizon de trois mois, restent des cibles tant qu'aucune mesure ne les confirme : huit réceptions sur dix traitées sans ressaisie, un devis envoyé sous douze heures. L'import direct dans Odoo attend une deuxième vague, déjà cadrée. La chaîne commence donc par un fichier qu'une personne relit avant de l'importer, et l'écriture directe dans l'ERP viendra après les mesures.",
      lien: { href: "/etudes-de-cas-ia#photovoltaique", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      {
        titre: "Payer l'extraction de factures qui arrivent déjà structurées",
        texte: "Les factures électroniques des grandes entreprises et des ETI portent leurs données dans un format structuré. Les relire avec un modèle consomme des jetons, l'unité de facturation des modèles, et ajoute un risque d'erreur. Le tri des flux par canal précède tout développement.",
      },
      {
        titre: "Prendre un JSON valide pour une donnée juste",
        texte: "Un schéma respecté garantit la forme du JSON, le format de données que la chaîne produit. Le montant peut rester faux. Chaque champ qui engage l'entreprise passe par un contrôle : total, référentiel, rapprochement.",
      },
      {
        titre: "Confier à la chaîne la mise à jour des coordonnées bancaires",
        texte: "Un IBAN différent de celui du référentiel bloque la pièce et déclenche un appel au fournisseur, sur son numéro habituel. Le référentiel bancaire se modifie à la main, par une personne habilitée, et jamais par la chaîne.",
      },
      {
        titre: "Croire que la chaîne apprend seule de vos corrections",
        texte: "Un modèle en production ne se réentraîne pas sur vos validations, et l'ANSSI recommande de ne pas le faire (R21). Vos corrections alimentent le jeu de tests et les règles, que l'équipe met à jour et vérifie avant chaque nouvelle version.",
      },
      {
        titre: "Écrire dans l'ERP dès la première version",
        texte: "Une écriture directe fait entrer une erreur dans la comptabilité ou les stocks avant qu'une personne l'ait vue. La première version produit un fichier d'import relu ; l'écriture directe suit, une fois les taux d'erreur mesurés.",
      },
    ],
  },

  faq: [
    {
      q: "Faut-il encore automatiser la lecture des factures avec la facturation électronique ?",
      a: "Pour une partie des factures, oui. Les factures électroniques arrivent avec leurs données structurées, par la plateforme agréée, et se lisent sans extraction. Restent les PDF des PME françaises, admis jusqu'à leur obligation d'émission du 1er septembre 2027, les factures des fournisseurs étrangers, hors du champ de la réforme, et tous les autres documents de gestion. Le cadrage commence par ce tri, flux par flux, pour éviter de payer une extraction inutile.",
    },
    {
      q: "Quels documents se prêtent le mieux à l'automatisation ?",
      a: "Ceux qui arrivent en volume, dont les données partent vers un logiciel et dont les règles de contrôle s'écrivent : bons de livraison, fichiers d'entrepôt, relevés, factures étrangères, demandes de devis. Un document rare, ambigu par nature ou qui demande un jugement d'expert reste traité par une personne. L'échantillon de pièces, classé au premier atelier, montre où se trouve le volume.",
    },
    {
      q: "Comment la chaîne repère-t-elle ses propres erreurs ?",
      a: "Elle s'appuie sur des contrôles indépendants du modèle : totaux recalculés, rapprochement avec la commande, SIRET vérifié dans le répertoire Sirene, IBAN comparé au référentiel. Quand le moteur d'extraction fournit un score de confiance par champ, ce score s'ajoute aux contrôles. Une pièce qui échoue à un seul contrôle part en validation avec son motif, et chaque décision humaine est tracée.",
    },
    {
      q: "Un fournisseur annonce un nouveau RIB : que fait la chaîne ?",
      a: "La pièce est bloquée et part en validation, avec l'ancien et le nouvel IBAN côte à côte. Cybermalveillance.gouv.fr recommande d'appeler le fournisseur sur son numéro habituel pour confirmer tout nouveau RIB reçu par message. La mise à jour du référentiel se fait à la main, par une personne habilitée, après cet appel. La chaîne ne modifie jamais des coordonnées bancaires.",
    },
    {
      q: "Peut-on traiter les documents la nuit pour réduire le coût ?",
      a: "Oui, pour les flux qui supportent un délai. Les API de traitement par lots exécutent les demandes en différé : chez Anthropic, le coût baisse de moitié, la plupart des lots se terminent en moins d'une heure et tout lot expire au-delà de 24 heures. Les pièces du jour partent le soir, et la file de validation est prête le lendemain matin. Les pièces urgentes gardent un traitement immédiat.",
    },
    {
      q: "Comment vérifier un numéro SIRET lu sur un document ?",
      a: "La chaîne interroge le répertoire Sirene de l'Insee par son API, ouverte sans frais et alimentée de données mises à jour chaque jour. Elle vérifie que l'établissement existe, qu'il est actif et que sa dénomination correspond au document. Un écart envoie la pièce en validation. Le même contrôle porte sur le SIREN du client, devenu une mention obligatoire des factures.",
    },
    {
      q: "La chaîne écrit-elle directement dans notre ERP ?",
      a: "La première version produit un fichier d'import que votre service relit, puis charge dans l'ERP. L'écriture directe vient ensuite, quand les mesures montrent un taux d'erreur acceptable pour vous, avec des droits dédiés, la gestion des rejets et un journal. Notre étude de cas photovoltaïque suit cet ordre : un fichier d'import contrôlé d'abord, l'import direct dans Odoo en deuxième vague.",
    },
    {
      q: "Comment mesure-t-on le gain d'une automatisation documentaire ?",
      a: "La mesure se fait chez vous, sur vos pièces. Avant le projet, nous relevons le temps de saisie par pièce et le taux d'erreur de la saisie manuelle. En service, nous suivons la part de pièces qui passent tous les contrôles, le temps de traitement des cas en validation et les erreurs détectées en aval. Les cibles s'écrivent avant le démarrage et restent des cibles jusqu'à leur mesure.",
    },
  ],

  sources: [
    { name: "DGFiP : Fiche 1, que va-t-il se passer pour mon entreprise en matière de facturation ? (mise à jour juin 2026)", url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/fiche-1_que-va-t-il-se-passer-pour-mon-entreprise.pdf" },
    { name: "DGFiP : Facturation électronique, guide pratique de démarrage au 1er septembre 2026", url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/guide_pratique_facturation_electronique.pdf" },
    { name: "DGFiP : Foire aux questions, je découvre la facturation électronique (version du 01/09/2026)", url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/faq---fe_je-decouvre-la-facturation-electronique.pdf" },
    { name: "Service-public.gouv.fr : Mentions obligatoires sur une facture (vérifié le 11 août 2026)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F31808" },
    { name: "Microsoft Learn : Interpret and improve model accuracy and confidence scores, Document Intelligence", url: "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence" },
    { name: "OpenAI API : Structured model outputs", url: "https://developers.openai.com/api/docs/guides/structured-outputs" },
    { name: "Claude Platform : Batch processing", url: "https://platform.claude.com/docs/en/build-with-claude/batch-processing" },
    { name: "Insee : Consulter et télécharger la base Sirene", url: "https://www.insee.fr/fr/information/3591226" },
    { name: "Cybermalveillance.gouv.fr : Que faire en cas de fraude au virement ou au « faux RIB » ? (mise à jour du 7 mai 2026)", url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/que-faire-en-cas-de-fraude-au-virement-ou-au-faux-rib" },
    { name: "ANSSI : Recommandations de sécurité pour un système d'IA générative (29 avril 2024)", url: "https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-un-systeme-dia-generative" },
  ],
}
