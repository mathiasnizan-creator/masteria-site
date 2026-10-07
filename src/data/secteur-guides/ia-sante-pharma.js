// Contenu propre à /ia-sante-pharma. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Légifrance (L.1111-8 CSP, décret n° 2026-209), CNIL (IA et santé, 05/03/2026), Microsoft Learn (périmètre HDS), JOUE (règlement (UE) 2026/1744, règlement (UE) 2017/745), MDCG 2025-6, EMA (GVP module VI rév. 2), Commission (projet d'annexe 22 BPF), HAS (guide du 23/10/2025, lu sur copie archivée : le site impose un CAPTCHA).
export default {
  slug: 'ia-sante-pharma',
  dateModified: '2026-10-07',
  pagePropre: true,
  hero: {
    chips: ["Hébergement HDS", "Dispositif médical ou non", "Pharmacovigilance et dossiers réglementaires"],
    lien: "Voir les deux questions de départ",
  },
  offresTitre: {
    kicker: "Trois interventions",
    h2: "Cartographier les flux, outiller la recherche, automatiser la préparation",
  },
  enjeux: {
    kicker: "Santé et pharma",
    h2: "L'IA prépare, l'expert décide : la règle de chaque projet de santé",
    difficultes: "Ce qui ralentit laboratoires et établissements",
    prestations: "Ce que nous développons pour la santé",
  },
  regieBloc: {
    kicker: "Régie dans un périmètre certifié",
    h2: "Développer dans votre environnement conforme, sans exporter de données",
    accroche: "Quand les données de santé ne doivent pas quitter un périmètre certifié, le développeur IA rejoint vos équipes, au contact de vos contraintes HDS et de votre système qualité, et code dans votre environnement.",
    lien: "Les modèles d'engagement",
  },
  formationBloc: {
    kicker: "Former pharmaciens et équipes qualité",
    h2: "Des exercices sur vos procédures et vos notices",
    lien: "Explorer les formations IA",
  },
  faqBloc: {
    h2: "Santé et pharma : les questions posées",
    texte: "Votre système qualité impose une contrainte que nous n'avons pas citée ?",
    lien: "Expliquez-la-nous",
  },
  maillage: {
    h2: "Secteurs proches de la santé",
  },
  cta: {
    titre: "Quel flux de santé préparer avec l'IA ?",
    texte: "Précisez le flux (pharmacovigilance, dossier réglementaire, procédures) et l'hébergement actuel de vos données. Nous vous répondons sous 24 heures et fixons avec vous les 30 minutes de cadrage offertes, avec votre responsable qualité si vous le souhaitez.",
  },
  equipe: {
    titre: "Des spécialistes réunis autour de votre système qualité",
    texte: "Masteria est l'entreprise de Mathias Nizan, lancée à Lyon en 2022, et Mathias pilote chaque mission. En santé, il réunit des consultants qui cartographient les flux de données et de documents, des développeurs qui travaillent dans un environnement conforme et des formateurs qui partent de vos procédures. Tous sont indépendants, et le choix de l'hébergeur ou du modèle se fait sans attache commerciale.",
  },
  intro: "En santé et en pharma, un projet d'IA se cadre sur deux questions avant le choix du modèle : où les données seront hébergées, et si l'outil devient un dispositif médical. Les réponses fixent l'architecture, le niveau de validation et le calendrier. Masteria les examine avec votre responsable qualité et votre DPO (le délégué à la protection des données), puis développe des assistants documentaires, des outils de pré-tri pour la pharmacovigilance et des automatisations de dossiers réglementaires, sur l'hébergement que vous avez retenu.",

  offresIntro: [
    "En santé, nos trois métiers servent des équipes précises : la pharmacovigilance, les affaires réglementaires, l'assurance qualité, l'information médicale, et la direction des systèmes d'information (DSI) des établissements comme des fabricants de dispositifs médicaux.",
    "Le conseil qualifie chaque usage au regard du droit de la santé. Le développement se fait dans l'environnement que votre DSI a validé et livre un dossier de validation avec le code. L'automatisation prend en charge la préparation qui entoure l'expertise : extraire des champs, contrôler un dossier, comparer deux versions.",
  ],
  offres: [
    {
      title: "Cartographie des flux de santé",
      cta: "Le conseil IA de Masteria",
      desc: "Nous cartographions vos flux de documents et de données (cas de pharmacovigilance, dossiers d'autorisation de mise sur le marché, procédures qualité), puis nous qualifions chaque usage au regard de trois textes : la certification HDS (exigée des hébergeurs de données de santé), le droit des dispositifs médicaux et les bonnes pratiques de fabrication (BPF). La feuille de route classe les cas par valeur et par niveau de preuve à fournir.",
      points: ["Qualification HDS et dispositif médical", "Cartographie des flux documentaires", "Feuille de route défendable en audit"],
    },
    {
      title: "Assistants sur vos référentiels qualité",
      cta: "Développer avec nous",
      secondaryCta: "Outils IA par fonction",
      desc: "Nous développons des assistants qui cherchent dans vos référentiels (procédures, notices, dossiers réglementaires) et citent la version en vigueur du document, ainsi que des outils de pré-tri pour la pharmacovigilance. Le code tourne sur l'hébergement certifié que vous avez retenu, et le dossier de validation est livré avec lui.",
      points: ["Recherche sourcée dans vos référentiels", "Pré-tri avec double lecture humaine", "Code et dossier de validation livrés"],
    },
    {
      title: "Préparation automatisée des dossiers",
      cta: "L'automatisation de vos processus",
      desc: "Nous automatisons les gestes de préparation qui entourent l'expertise : extraire les champs d'un formulaire de déclaration, contrôler la complétude d'un dossier, comparer deux versions d'une procédure et en lister les écarts. Chaque étape laisse une trace qu'un auditeur peut suivre, et la décision reste au pharmacien ou au responsable qualité.",
      points: ["Contrôle de complétude des dossiers", "Comparaison de versions documentaires", "Piste d'audit à chaque étape"],
    },
  ],
  regie: [
    "En santé, un développeur détaché travaille dans le système qualité du client : il suit vos procédures de maîtrise des changements, rédige ses tests dans vos modèles de validation et code sur l'environnement certifié, là où restent les données. Avant son arrivée, nous fixons avec votre assurance qualité les documents qu'il produit et les revues auxquelles il participe.",
  ],
  formation: [
    "Quatre métiers héritent des outils : les chargés de pharmacovigilance, les équipes d'affaires réglementaires, l'assurance qualité et l'information médicale. Nous les formons à relire une sortie de modèle comme un document entrant : vérifier la source citée, repérer l'omission, tracer la correction dans le système qualité.",
    "Une journée intra sur vos propres documents se facture 1 980 € HT. En France, un laboratoire ou un établissement privé peut la faire financer par son OPCO, puisque nos actions de formation sont certifiées Qualiopi. La qualification HDS d'un projet ou la validation d'un outil relèvent du conseil, que ce financement ne couvre pas.",
  ],

  guide: {
    kicker: "Guide santé et pharma",
    h2: "En santé, l'hébergement des données et la destination de l'outil décident de l'architecture avant le choix du modèle",
    lead: "Trois dates fixent le cadre d'un projet d'IA en santé à l'automne 2026. Le 16 mai 2026, les hébergeurs de données de santé devaient être certifiés selon la version 2 du référentiel HDS. Depuis le 26 septembre 2026, un décret impose de stocker ces données dans l'Union européenne ou l'Espace économique européen. Le 2 août 2028, les dispositifs médicaux à base d'IA évalués par un organisme notifié entreront dans le régime haut risque du règlement européen sur l'IA (AI Act). Ces échéances dessinent l'architecture avant même le choix du modèle.",
    sections: [
      {
        h3: "L'obligation HDS se vérifie flux par flux",
        paras: [
          "L'article L.1111-8 du code de la santé publique vise « toute personne qui héberge des données de santé à caractère personnel recueillies à l'occasion d'activités de prévention, de diagnostic, de soins ou de suivi social et médico-social », pour le compte de ceux qui les ont produites ou recueillies, ou du patient lui-même. Un service d'IA qui stocke chez un prestataire des comptes rendus de consultation entre dans ce champ. D'autres flux d'un laboratoire n'y entrent pas forcément, et votre DPO tranche leur statut, flux par flux, dès le cadrage.",
          "La CNIL ajoute une règle propre à l'IA. Dans sa publication du 5 mars 2026, elle assimile le développement d'un système d'IA destiné à la santé à une recherche, étude ou évaluation dans le domaine de la santé. Un laboratoire qui entraîne ou évalue un modèle sur des données de patients passe donc par une méthodologie de référence, le référentiel des entrepôts de données de santé ou une autorisation. Ce chantier juridique précède le chantier technique, et il se planifie avant la constitution du premier jeu de données.",
        ],
      },
      {
        h3: "Depuis le 26 septembre 2026, les données de santé hébergées restent sur le sol européen",
        paras: [
          "L'arrêté du 26 avril 2024 a approuvé la version 2 du référentiel de certification HDS, qui exige de localiser les données dans l'Espace économique européen, et les hébergeurs déjà certifiés avaient jusqu'au 16 mai 2026 pour s'y conformer. Le décret n° 2026-209 du 24 mars 2026 a inscrit la règle dans le code de la santé publique : depuis le 26 septembre 2026, le stockage se fait exclusivement dans un État de l'Union ou de l'Espace économique européen, et un accès à distance depuis un pays tiers est traité comme un transfert.",
          "Un certificat couvre un périmètre précis, à lire avant de choisir un service. Celui de Microsoft s'applique aux services Azure listés comme conformes à ISO/IEC 27001, dans quatorze régions européennes, et exclut les services en préversion. Une fonction d'IA annoncée en préversion reste donc hors du périmètre certifié, même chez un hébergeur certifié. Le décret vise aussi les sous-traitants de l'hébergeur : un accès à distance par l'un d'eux depuis un pays tiers suit les mêmes règles de transfert.",
        ],
      },
      {
        h3: "La destination décide si un logiciel devient un dispositif médical",
        paras: [
          "Selon la règle 11 de l'annexe VIII du règlement (UE) 2017/745, les logiciels destinés à fournir des informations utilisées pour prendre des décisions à des fins thérapeutiques ou diagnostiques relèvent au moins de la classe IIa, et des classes IIb ou III selon la gravité des conséquences possibles. Un assistant qui retrouve une procédure ou résume une notice n'a pas cette destination ; un outil qui propose une conduite à tenir pour un patient l'a. La destination s'écrit au cadrage, parce qu'elle commande le marquage CE et l'intervention d'un organisme notifié.",
          "Le règlement européen sur l'IA s'ajoute alors au droit des dispositifs. Le document MDCG 2025-6, publié en juin 2025 par le groupe de coordination des dispositifs médicaux avec le Comité européen de l'IA, classe à haut risque le dispositif à base d'IA soumis à l'évaluation d'un organisme notifié, ce qui vise notamment les classes IIa, IIb et III. L'Omnibus numérique de juillet 2026 a repoussé ces obligations au 2 août 2028, alors que le document MDCG cite encore l'ancienne date. Les fabricants préparent un dossier technique qui réponde aux deux textes.",
        ],
      },
      {
        h3: "En pharmacovigilance, l'outil trie la littérature et le pharmacien qualifie le cas",
        paras: [
          "Le module VI des bonnes pratiques de pharmacovigilance de l'EMA, en vigueur dans sa révision 2 depuis novembre 2017, demande au titulaire d'une autorisation de mise sur le marché de passer en revue la littérature au moins une fois par semaine. L'EMA surveille elle-même la littérature pour une liste de substances actives ; pour les autres, le laboratoire fait cette veille. Un cas grave se déclare au plus tard 15 jours calendaires après sa connaissance, un cas non grave dans les 90 jours.",
          "Le même module fixe le jour zéro (le point de départ du délai de déclaration) d'un résumé repéré par la veille hebdomadaire : c'est la date de la recherche. Un outil de pré-tri ne décale donc aucune échéance, et il tourne dans la foulée de la recherche. Il classe les résumés selon les quatre critères d'un cas valide (un notificateur, un patient, un médicament suspecté, un effet indésirable) et laisse la décision au pharmacien. Chaque désaccord entre l'outil et l'équipe est enregistré, puis analysé.",
        ],
      },
      {
        h3: "Les bonnes pratiques de fabrication tiennent les modèles génératifs hors des usages critiques",
        paras: [
          "La Commission européenne a mis en consultation en juillet 2025 un projet d'annexe 22 des bonnes pratiques de fabrication sur l'IA, accompagné d'une révision de l'annexe 11, qui traite des systèmes informatisés. Le projet ne vise que les modèles statiques, qui rendent toujours le même résultat pour la même entrée. Il écarte de son champ les modèles génératifs, grands modèles de langage compris, et demande de ne pas les employer dans une application critique, c'est-à-dire qui pèse directement sur la sécurité des patients, la qualité des lots ou la fiabilité des enregistrements. Au 3 octobre 2026, sa version définitive n'était pas publiée.",
          "Hors de ces applications critiques, le projet tolère ces modèles si une personne qualifiée, formée à leur usage, répond de chaque résultat. Sur un site de production, l'IA générative prépare donc le brouillon d'une procédure, résume une déviation pour la revue qualité ou retrouve une instruction dans la documentation. Chaque usage passe par l'analyse de risque de votre système qualité avant sa mise en service, et la signature reste humaine.",
        ],
      },
    ],
    table: {
      caption: "Qualifier l'usage avant de choisir l'outil",
      headers: ["Usage", "Qualification à vérifier", "Ce que l'outil doit prévoir"],
      rows: [
        ["Recherche dans les procédures qualité", "Outil documentaire, sans donnée de patient", "Citation de la version en vigueur, gestion des versions"],
        ["Pré-tri de la littérature en pharmacovigilance", "Activité encadrée par le module VI des bonnes pratiques de pharmacovigilance", "Double lecture, trace des désaccords, revalidation à chaque version du modèle"],
        ["Synthèse de comptes rendus de patients", "Données de santé ; hébergeur certifié HDS si un prestataire les héberge", "Stockage dans l'Union ou l'EEE, services hors préversion, journalisation"],
        ["Entraînement ou évaluation d'un modèle sur des données de patients", "Recherche dans le domaine de la santé au sens de la CNIL", "Méthodologie de référence, référentiel des entrepôts ou autorisation"],
        ["Aide à l'interprétation d'un examen", "Logiciel dispositif médical, classe IIa au moins (règle 11)", "Marquage CE, organisme notifié, exigences haut risque de l'AI Act au 2 août 2028"],
        ["Rédaction de documents BPF", "Système informatisé soumis aux BPF ; projet d'annexe 22", "Usage hors applications critiques, personne qualifiée responsable du résultat"],
      ],
    },
    cas: {
      h3: "Mise en situation : le tri hebdomadaire de la littérature en pharmacovigilance",
      contexte: "Prenons le service de pharmacovigilance d'un laboratoire qui commercialise des médicaments en France. Pour les substances que l'EMA ne surveille pas elle-même, l'équipe lit chaque semaine les résumés remontés par sa veille et cherche les cas à déclarer. Cet exemple n'est tiré d'aucune mission : il montre la démarche pas à pas.",
      etapes: [
        "Écrire avec le responsable de la pharmacovigilance la règle de tri, à partir des quatre critères d'un cas valide : un notificateur identifiable, un patient identifiable, un médicament suspecté, un effet indésirable suspecté.",
        "Constituer un jeu de test avec des résumés que l'équipe a déjà triés, et la décision qu'elle a prise pour chacun.",
        "Faire trier ce jeu par l'outil, puis examiner un par un les résumés qu'il a écartés à tort, jusqu'à ce que le responsable accepte la règle et ses seuils.",
        "Mettre en service en double lecture : l'outil propose, le pharmacien décide, et chaque désaccord est enregistré.",
        "Documenter la validation dans le système qualité, puis rejouer le jeu de test à chaque nouvelle version du modèle.",
      ],
      resultat: "Vous obtenez un tri dont les performances sont mesurées sur vos propres décisions passées, une trace que l'inspecteur peut suivre et un protocole de revalidation. Les délais de déclaration ne bougent pas : 15 jours calendaires pour un cas grave, 90 pour un cas non grave. Le gain de temps se chiffre ensuite sur vos propres volumes hebdomadaires, avec vous.",
    },
    pieges: [
      { titre: "Bâtir sur un service en préversion", texte: "Chez Microsoft, le certificat HDS couvre les services Azure listés comme conformes à ISO/IEC 27001, dans des régions désignées, et exclut les services en préversion. Une fonction d'IA encore en préversion attend sa disponibilité générale, ou reste à l'écart des données de santé." },
      { titre: "Laisser glisser la destination d'un assistant documentaire", texte: "Un assistant conçu pour retrouver des procédures change de nature si un service l'interroge sur la conduite à tenir pour un patient. La destination écrite au cadrage protège la qualification ; les journaux d'usage montrent si elle tient, et un écart déclenche une nouvelle analyse." },
      { titre: "Valider l'outil une fois pour toutes", texte: "Les fournisseurs font évoluer leurs modèles. Un outil validé sur une version se revalide sur la suivante, avec le même jeu de test et la même grille, avant toute mise en service. Le dossier de validation prévoit ce cas dès la première version." },
      { titre: "Croire que le pré-tri repousse l'horloge", texte: "Pour un résumé repéré par la veille hebdomadaire, le jour zéro est la date de la recherche. Une file qui attend trois jours dans un outil consomme trois des 15 jours accordés pour déclarer un cas grave." },
      { titre: "Glisser un modèle génératif dans une étape BPF critique", texte: "Le projet d'annexe 22 tient l'IA générative à l'écart des étapes qui engagent la sécurité des patients, la conformité d'un lot ou la fiabilité d'un enregistrement. Libérer un lot, classer un défaut ou trancher une déviation reste hors du champ de l'IA générative ; rédiger un brouillon qu'une personne relit et signe y entre." },
    ],
  },
  faq: [
    { q: "Un laboratoire doit-il passer par un hébergeur HDS pour ses outils d'IA ?", a: "Tout dépend du flux. Le code de la santé publique (article L.1111-8) vise les données nées d'un soin, d'un diagnostic, d'une action de prévention ou d'un suivi médico-social, quand un tiers les héberge pour le compte de ceux qui les ont produites ou du patient. Un outil qui ne traite que des procédures, des notices ou de la littérature publiée n'y entre pas. Dès qu'un prestataire héberge des données de patients, il faut un hébergeur certifié et, depuis le 26 septembre 2026, un stockage dans l'Union ou l'EEE." },
    { q: "Un outil d'aide à la décision clinique est-il un dispositif médical ?", a: "Oui, dès que sa destination le place sous la règle 11 du règlement (UE) 2017/745 : un logiciel qui fournit des informations utilisées pour des décisions diagnostiques ou thérapeutiques relève au moins de la classe IIa, avec organisme notifié et marquage CE. Ce chantier dépasse le développement d'un assistant. Nous le cadrons avec votre équipe d'affaires réglementaires, et un spécialiste du dispositif médical complète l'analyse quand il le faut." },
    { q: "Quand l'AI Act s'applique-t-il aux dispositifs médicaux à base d'IA ?", a: "Le 2 août 2028 pour les obligations haut risque, après le report fixé par l'Omnibus numérique du 8 juillet 2026. Sont visés les dispositifs à base d'IA soumis à l'évaluation d'un organisme notifié, notamment les classes IIa, IIb et III selon le document MDCG 2025-6. Un fabricant qui lance un produit en 2027 a donc intérêt à préparer dès maintenant un dossier technique qui réponde aux deux textes." },
    { q: "Peut-on utiliser un grand modèle de langage dans un processus BPF ?", a: "Le projet d'annexe 22, mis en consultation en juillet 2025, l'exclut des applications critiques et y réserve les modèles statiques au résultat déterministe. Pour une tâche non critique (brouillon de procédure, synthèse de déviation, recherche documentaire), il demande qu'une personne qualifiée reste responsable du résultat. Nous classons chaque usage avec votre assurance qualité avant tout développement." },
    { q: "L'IA peut-elle trier la littérature de pharmacovigilance ?", a: "Elle peut préparer le tri, et la décision reste au pharmacien. L'outil classe les résumés de la veille hebdomadaire selon les quatre critères d'un cas valide et signale les cas probables. Le jour zéro restant la date de la recherche, l'outil tourne aussitôt après elle. Sa validation repose sur vos décisions passées et se rejoue à chaque nouvelle version du modèle." },
    { q: "Que recommande la HAS aux professionnels qui utilisent l'IA générative ?", a: "Son guide « Premières clefs d'usage de l'IA générative en santé », adopté le 23 octobre 2025, tient en quatre verbes : Apprendre, Vérifier, Estimer, Communiquer. Il demande notamment, sur un outil accessible sur internet ou sans garantie de confidentialité, de vérifier qu'aucune requête ne contient d'information qui identifie un patient ou relève du secret médical. Les outils que nous développons tournent sur un hébergement qui garantit cette confidentialité, et nos formations travaillent la règle en atelier." },
    { q: "Intervenez-vous en Suisse et en Belgique sur des projets de santé ?", a: "Oui. Nos bureaux sont à Lyon, à environ 1 h 30 d'Annecy, et Genève est proche d'Annecy. La certification HDS relève du droit français : en Suisse, le cadre se fixe au regard de la loi fédérale sur la protection des données, en Belgique au regard du RGPD et du droit belge, avec votre DPO. Pour un client suisse ou belge, nous facturons hors taxes et précisons au devis le traitement de la TVA ; aucun OPCO n'intervient hors de France." },
    { q: "Comment se chiffre un projet d'IA en santé ?", a: "Le prix dépend du niveau de validation exigé par votre système qualité, de l'hébergement certifié retenu et du nombre de sources à brancher. Nous offrons une demi-heure de cadrage pour situer le projet. Quand il touche des données de patients, un Diagnostic IA payant précise le cadre avant tout devis, avec une durée et un forfait arrêtés pendant ce premier échange. La proposition de développement est ensuite forfaitaire et écrite, et le dossier de validation fait partie des livrables, comme le code et la documentation." },
  ],
  sources: [
    { name: "Légifrance : code de la santé publique, article L.1111-8 (hébergement de données de santé)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049577902" },
    { name: "Légifrance : décret n° 2026-209 du 24 mars 2026 relatif à l'hébergement de données de santé à caractère personnel", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053717250" },
    { name: "CNIL : IA et santé, développer et évaluer des systèmes d'IA conformes (5 mars 2026)", url: "https://www.cnil.fr/fr/ia-et-sante-developper-et-evaluer-des-systemes-ia-conformes" },
    { name: "Microsoft Learn : hébergement de données de santé (HDS) France, périmètre de la certification", url: "https://learn.microsoft.com/fr-fr/compliance/regulatory/offering-hds-france" },
    { name: "EUR-Lex : règlement (UE) 2017/745 relatif aux dispositifs médicaux, annexe VIII", url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj" },
    { name: "Commission européenne : MDCG 2025-6, articulation entre MDR/IVDR et AI Act (juin 2025)", url: "https://health.ec.europa.eu/document/download/b78a17d7-e3cd-4943-851d-e02a2f22bbb4_en?filename=mdcg_2025-6_en.pdf" },
    { name: "EUR-Lex, omnibus (UE) 2026/1744 du 8 juillet 2026 : dispositifs médicaux à base d'IA au 2 août 2028", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    { name: "EMA : bonnes pratiques de pharmacovigilance, module VI révision 2", url: "https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-good-pharmacovigilance-practices-gvp-module-vi-collection-management-submission-reports-suspected-adverse-reactions-medicinal-products-rev-2_en.pdf" },
    { name: "Commission européenne : projet d'annexe 22 des BPF, intelligence artificielle (consultation)", url: "https://health.ec.europa.eu/document/download/5f38a92d-bb8e-4264-8898-ea076e926db6_en?filename=mp_vol4_chap4_annex22_consultation_guideline_en.pdf" },
    { name: "HAS : Premières clefs d'usage de l'IA générative en santé (23 octobre 2025)", url: "https://www.has-sante.fr/upload/docs/application/pdf/2025-10/dir2/premieres_clefs_dusage_de_lia_generative_en_sante_-_guide.pdf" },
  ],
}
