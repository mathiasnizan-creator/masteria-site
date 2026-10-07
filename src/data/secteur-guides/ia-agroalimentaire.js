// Contenu propre à /ia-agroalimentaire. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : règlements (CE) n° 178/2002, (UE) n° 931/2011, (UE) n° 1169/2011, (CE) n° 852/2004, (UE) 2021/382 et directive (UE) 2022/2555 sur EUR-Lex (via le Cellar), arrêté RappelConso du 20/01/2021 sur Légifrance, données ouvertes RappelConso V2 (extraction du 03/10/2026, catégorie « alimentation », fiches publiées en 2025), dossier législatif de l'Assemblée nationale. Aucune étude de cas publiée ne relève du secteur : le cas est une mise en situation.
export default {
  slug: 'ia-agroalimentaire',
  dateModified: '2026-10-07',
  pagePropre: true,
  hero: {
    chips: ["Spécifications, recettes, étiquettes", "Allergènes du règlement INCO", "Traçabilité lot par lot"],
    lien: "Voir les dossiers qualité concernés",
  },
  offresTitre: {
    kicker: "Trois interventions",
    h2: "De la carte des circuits qualité aux comparaisons automatiques",
  },
  enjeux: {
    kicker: "Agroalimentaire",
    h2: "L'IA protège la marge et le consommateur au même endroit : le document",
    difficultes: "Ce qui pèse sur la qualité et le réglementaire",
    prestations: "Les outils que nous bâtissons pour un industriel de l'alimentaire",
  },
  regieBloc: {
    kicker: "Développeur chez vous",
    h2: "Vos formulations restent dans l'usine",
    accroche: "Quand les recettes, les formulations ou les fiches techniques ne doivent pas sortir de l'entreprise, le développeur IA s'installe auprès de la qualité, de la R&D et du réglementaire, et travaille sur vos référentiels sans les exporter.",
    lien: "Les conditions d'une régie",
  },
  formationBloc: {
    kicker: "Former qualité et R&D",
    h2: "Des exercices sur vos fiches techniques et vos étiquettes",
    lien: "Découvrir le catalogue",
  },
  faqBloc: {
    h2: "Questions des industriels de l'alimentaire",
    texte: "Une question sur une étiquette, un rappel ou une recette ?",
    lien: "Écrivez-nous",
  },
  maillage: {
    h2: "Secteurs proches de l'agroalimentaire",
  },
  cta: {
    titre: "Quel dossier qualité comparer en premier ?",
    texte: "Envoyez-nous le circuit qui vous coûte le plus de relectures : référencement d'un fournisseur, épreuve d'étiquette, questionnaire d'un distributeur. Nous vous répondons sous 24 heures et fixons avec vous les 30 minutes de cadrage offertes.",
  },
  equipe: {
    titre: "Des intervenants choisis pour un industriel de l'alimentaire",
    texte: "Mathias Nizan, qui a fondé Masteria à Lyon en 2022, compose l'équipe de chaque mission et la suit jusqu'à la remise des outils. Dans l'agroalimentaire, il fait appel à des consultants qui cartographient les circuits qualité, à des développeurs qui travaillent sur vos référentiels et à des formateurs qui partent de vos fiches techniques. Tous sont indépendants des éditeurs de logiciels.",
  },
  intro: "Dans une entreprise agroalimentaire, l'IA générative trouve d'abord sa place dans les dossiers qui engagent la sécurité du consommateur : la spécification d'une matière première, la recette, l'épreuve d'étiquette, l'enregistrement d'un lot. Sur les 2 319 fiches de rappel de produits alimentaires publiées sur RappelConso en 2025, 226 citent un allergène non déclaré ou une anomalie d'étiquetage. Depuis Lyon, Masteria construit avec vos équipes qualité, R&D et réglementaires des contrôles de cohérence qui préparent chaque décision. La signature reste à vos responsables.",

  offresIntro: [
    "Pour un industriel de l'agroalimentaire, nous travaillons sur la chaîne de documents qui va de la spécification fournisseur à l'étiquette, avec les responsables qualité, R&D et réglementaires.",
    "Le point de départ est un changement réel : un nouveau fournisseur d'ingrédient, une reformulation, une référence créée pour une marque de distributeur. Nous suivons ce que ce changement doit modifier dans vos documents et dans votre plan HACCP (l'analyse des dangers et la maîtrise des points critiques), puis nous outillons les contrôles qui manquent. Notre proposition, forfaitaire, nomme ensuite chaque document et chaque contrôle couvert.",
  ],

  offres: [
    {
      title: "Diagnostic des circuits qualité et réglementaires",
      cta: "Le conseil IA pas à pas",
      desc: "Nous diagnostiquons vos circuits qualité et réglementaires : référencement d'un fournisseur, création d'une fiche technique, validation d'une étiquette, changement de recette, préparation d'un audit client. Nous mesurons les délais et repérons les ressaisies entre le logiciel de formulation, l'ERP (le logiciel de gestion intégré) et les tableurs. La feuille de route classe les cas selon leur effet sur le risque de rappel et sur la charge des équipes.",
      points: ["Revue des circuits de validation", "Carte des ressaisies entre logiciels", "Priorités classées par risque de rappel"],
    },
    {
      title: "Assistants qui comparent avant signature",
      cta: "Notre développement sur mesure",
      secondaryCta: "Outils IA construits par métier",
      desc: "Nous développons des assistants qui comparent avant que vous signiez : une nouvelle spécification fournisseur contre l'ancienne, une recette contre la liste des ingrédients imprimée, une matrice allergènes contre les fiches des matières. Chaque écart sort avec sa ligne et sa page, et l'outil ne modifie aucun document validé. Vous recevez le code et le registre des règles de contrôle, une règle par exigence du règlement INCO ou de vos cahiers des charges.",
      points: ["Comparaison des spécifications fournisseurs", "Contrôle de la recette contre l'étiquette", "Règles de contrôle écrites et remises"],
    },
    {
      title: "Réponses aux distributeurs sans ressaisie",
      cta: "Automatiser vos tâches répétitives",
      desc: "Nous automatisons les tâches qui reviennent à chaque lot ou à chaque client : réponse aux questionnaires et cahiers des charges des distributeurs, mise à jour des fiches techniques après validation, assemblage des données de traçabilité d'un lot, préremplissage d'une fiche RappelConso si un rappel survient. L'automatisation prépare ; la personne habilitée valide et diffuse.",
      points: ["Questionnaires des distributeurs", "Données de traçabilité par lot", "Fiche de rappel préparée d'avance"],
    },
  ],

  regie: [
    "Le développeur détaché travaille dans vos environnements : logiciel de formulation, ERP, base des enregistrements qualité. Il construit les connecteurs avec le responsable qualité, sur des recettes et des lots réels, et écrit chaque règle de contrôle de façon qu'un auditeur puisse la relire. Son planning se cale sur vos campagnes de production et sur le calendrier de vos audits clients, pour que l'équipe qualité reste disponible quand l'auditeur est sur place.",
  ],

  formation: [
    "Nous formons les métiers qui signent les documents sensibles : responsables qualité et techniciens, chefs de projet R&D, chargés des affaires réglementaires, acheteurs de matières premières, assistants commerciaux qui répondent aux cahiers des charges des distributeurs. Chaque atelier part d'un dossier de l'entreprise : une spécification fournisseur, une fiche technique, une épreuve d'étiquette, un questionnaire d'audit.",
    "Depuis le règlement (UE) 2021/382, l'engagement de la direction en matière de culture de la sécurité alimentaire comprend de veiller à ce que le personnel reçoive une formation adéquate. Une formation à l'IA bâtie sur vos procédures qualité peut entrer dans ce plan. Une journée pour vos équipes qualité et R&D est facturée 1 980 € HT en intra. Comme toute action de formation d'un organisme certifié Qualiopi, elle peut être prise en charge par votre OPCO ; la mission de conseil et le développement des contrôles sont facturés séparément, au forfait.",
  ],

  guide: {
    kicker: "Guide agroalimentaire",
    h2: "Dans l'agroalimentaire, l'IA rentable compare les documents avant qu'une erreur parte en rayon",
    lead: "En 2025, RappelConso a publié 2 319 fiches de rappel pour des produits alimentaires. Parmi elles, 158 citent des substances allergisantes non déclarées et 69 une anomalie d'étiquetage : 226 fiches au total, près d'une sur dix, concernent l'information portée sur l'emballage (données ouvertes RappelConso, extraction du 3 octobre 2026). Le règlement (UE) n° 1169/2011 place cette information sous la responsabilité de l'exploitant dont le nom figure sur le produit. Le premier usage rentable de l'IA se trouve là : comparer spécifications, recettes et étiquettes avant l'impression.",
    sections: [
      {
        h3: "La traçabilité se prouve le jour d'une alerte",
        paras: [
          "Le règlement (CE) n° 178/2002 impose à chaque exploitant de savoir qui lui a fourni une denrée et à quelles entreprises il l'a livrée, et de mettre ces informations à la disposition des autorités sur demande (article 18). Pour les denrées d'origine animale, le règlement d'exécution (UE) n° 931/2011 précise huit informations par expédition, dont la description exacte, le volume, le numéro de lot et la date d'expédition. Elles sont tenues à jour chaque jour et restent disponibles jusqu'à ce que l'on puisse raisonnablement penser que la denrée a été consommée.",
          "Quand ces données sont réparties entre l'ERP, les bons de livraison et des fichiers de production, répondre aux autorités peut prendre des heures. Un assistant interrogé sur un numéro de lot remonte aux matières premières et descend vers les clients livrés, en citant chaque document. Il prépare aussi les champs de la fiche RappelConso, obligatoire depuis le 1er avril 2021 : produits concernés avec leurs codes GTIN (le code-barres unique de l'article), lots et dates, motif, risques, conduites à tenir.",
        ],
      },
      {
        h3: "L'étiquette engage l'entreprise dont le nom figure sur l'emballage",
        paras: [
          "Selon l'article 8 du règlement (UE) n° 1169/2011, dit INCO, l'exploitant sous le nom duquel la denrée est commercialisée veille à la présence et à l'exactitude des informations. Les ingrédients figurent par ordre décroissant de poids. Les quatorze familles d'allergènes de l'annexe II doivent ressortir dans la liste par la typographie : police, style ou couleur de fond (article 21). Un ingrédient mis en avant par un mot ou une image impose d'indiquer sa quantité (article 22). Les mentions obligatoires ont une hauteur de x (celle d'une lettre minuscule) d'au moins 1,2 mm, ou 0,9 mm sur les emballages de moins de 80 cm².",
          "Pour une marque de distributeur, le fabricant ajoute à ces règles le cahier des charges du distributeur et ses questionnaires. Un assistant compare l'épreuve d'étiquette à la recette validée et aux fiches des matières premières : ordre des ingrédients, allergènes mis en évidence, pourcentages annoncés, mentions obligatoires. Il liste chaque écart avec sa source. Le responsable réglementaire tranche et signe le bon à tirer, le document qui autorise l'impression.",
        ],
      },
      {
        h3: "Un changement de fournisseur oblige à revoir le plan HACCP",
        paras: [
          "Le règlement (CE) n° 852/2004 demande aux exploitants de revoir leur procédure fondée sur les principes HACCP chaque fois que le produit, le procédé ou une étape change, et de tenir à jour à tout moment les documents qui la décrivent (article 5). Depuis le règlement (UE) 2021/382, la direction doit aussi maintenir l'intégrité du système d'hygiène quand des changements sont prévus et mis en œuvre, au titre de la culture de la sécurité alimentaire.",
          "Un nouveau fournisseur de farine ou d'arôme touche la fiche matière, la matrice allergènes, la recette, la fiche technique remise aux clients, l'étiquette, et parfois l'ordonnancement de la ligne. Depuis 2021, un équipement qui a traité un allergène doit être nettoyé et contrôlé avant de servir à une denrée qui n'en contient pas. Un assistant de changement compare l'ancienne et la nouvelle spécification, puis dresse la liste des documents à revoir, chacun avec son responsable.",
        ],
      },
      {
        h3: "Les questionnaires des distributeurs se remplissent depuis une base validée",
        paras: [
          "Chaque référence vendue sous marque de distributeur s'accompagne d'un cahier des charges, d'une fiche technique au format du client et de questionnaires d'audit. Les mêmes informations reviennent sous des formes différentes : composition, origine des matières, allergènes, valeurs nutritionnelles, certifications. Un assistant remplit ces documents à partir d'une base de réponses déjà validées par la qualité. Toute question nouvelle part en relecture avant l'envoi.",
          "Le gain se mesure en jours de délai de réponse et en nombre de relectures. Il dépend de la qualité de la base : une fiche technique fausse, recopiée dans chaque questionnaire, reste fausse partout. Le premier travail consiste donc à fixer une source unique par information, avec son propriétaire et sa date de validation, puis à brancher l'assistant sur cette source.",
        ],
      },
      {
        h3: "La production alimentaire entre dans le champ de la directive NIS 2",
        paras: [
          "La directive (UE) 2022/2555, dite NIS 2, range parmi les « autres secteurs critiques » les entreprises du secteur alimentaire qui exercent la distribution en gros, la production et la transformation industrielles (annexe II). Elle vise les entités qui atteignent au moins la taille d'une entreprise moyenne au sens européen. Le projet de loi qui la transpose en France, adopté par le Sénat le 12 mars 2025, est inscrit en séance publique à l'Assemblée nationale le 7 octobre 2026.",
          "Pour un projet d'IA, ce cadre se traduit par des questions précises au cadrage : où tournent les modèles, qui accède aux données de production, comment les accès sont journalisés, quel prestataire reçoit quelles données. Nous les traitons avec votre responsable informatique avant tout prototype. Une formulation ou un historique de lots collé dans un outil grand public, sur un compte personnel, sort de ce cadre.",
        ],
      },
    ],
    table: {
      caption: "Six documents agroalimentaires : la règle, le contrôle préparé par l'IA, la signature",
      headers: ["Document", "Règle de référence", "Contrôle préparé par l'assistant", "Signature"],
      rows: [
        ["Spécification d'une matière première", "Traçabilité amont, règlement (CE) n° 178/2002, article 18", "Comparaison avec la version précédente, allergènes et origine signalés", "Responsable qualité ou achats"],
        ["Recette et fiche technique", "Revue de la procédure HACCP à chaque modification, règlement (CE) n° 852/2004, article 5", "Liste des documents touchés par le changement", "Responsables R&D et qualité"],
        ["Épreuve d'étiquette", "Allergènes mis en évidence et quantité des ingrédients mis en avant, règlement (UE) n° 1169/2011, articles 21 et 22", "Écarts entre la liste des ingrédients, la recette et la matrice allergènes", "Responsable réglementaire, avant le bon à tirer"],
        ["Enregistrement d'expédition d'une denrée d'origine animale", "Huit informations tenues à jour chaque jour, règlement (UE) n° 931/2011", "Contrôle de complétude par lot et par client livré", "Responsable logistique"],
        ["Plan de nettoyage d'une ligne", "Nettoyage et contrôle après un allergène, règlement (UE) 2021/382", "Repérage des enchaînements de production à risque", "Responsable de production"],
        ["Fiche RappelConso", "Déclaration en ligne obligatoire depuis le 1er avril 2021, arrêté du 20 janvier 2021", "Préremplissage des produits, des codes GTIN, des lots et des dates", "Direction et responsable qualité"],
      ],
    },
    cas: {
      h3: "Mise en situation : une biscuiterie change de fournisseur de pépites de chocolat",
      contexte: "Prenons une PME qui fabrique des biscuits sous sa marque et pour des marques de distributeurs. L'acheteur remplace le fournisseur des pépites de chocolat. La nouvelle spécification diffère de l'ancienne sur un point : le chocolat contient désormais du lait en poudre, et le mail du fournisseur ne le signale pas. Ce scénario est inventé pour illustrer la méthode, à partir des textes cités plus haut.",
      etapes: [
        "L'acheteur dépose la nouvelle spécification dans le dossier du changement. L'assistant la compare à l'ancienne, ligne par ligne, et signale l'apparition du lait, l'une des familles d'allergènes de l'annexe II du règlement INCO.",
        "Il retrouve toutes les recettes qui utilisent ces pépites et liste, pour chacune, les documents à revoir : matrice allergènes, fiche technique, épreuves d'étiquette, fiches au format des distributeurs.",
        "Il lit le plan de production : quand une ligne enchaîne ces biscuits et une référence sans lait, un nettoyage contrôlé doit s'intercaler, comme le prévoit le règlement (UE) 2021/382.",
        "Il prépare les nouvelles listes d'ingrédients, avec le lait mis en évidence, et les modifications des fiches techniques en suivi des modifications.",
        "Le responsable qualité valide chaque document, met à jour l'analyse HACCP et fixe la date de bascule. L'assistant n'a écrit dans aucun document validé.",
      ],
      resultat: "Le jour où la spécification arrive, l'équipe dispose de la liste des recettes, des documents et des lignes concernés, avec la source de chaque écart. Le lait est repéré avant l'impression des emballages. Vos propres dossiers de changement serviront ensuite d'étalon : délai de traitement, documents oubliés, reprises d'étiquettes.",
    },
    pieges: [
      {
        titre: "Valider une spécification sur la foi d'un résumé",
        texte: "Un résumé peut omettre une mention de traces ou un changement d'origine. L'assistant compare des versions et cite la ligne exacte ; la personne qui valide lit la spécification elle-même.",
      },
      {
        titre: "Laisser l'outil modifier une fiche technique validée",
        texte: "Une fiche validée porte une signature. L'assistant prépare une nouvelle version en suivi des modifications, que le responsable accepte ou refuse. Faute de cette règle, plus personne ne sait quelle version est partie chez le client.",
      },
      {
        titre: "Ajouter « peut contenir » partout par précaution",
        texte: "Les mentions de présence éventuelle d'allergènes sont des informations facultatives. L'article 36 du règlement INCO exige qu'elles n'induisent pas en erreur et ne soient ni ambiguës ni déroutantes. Un assistant qui les généralise pour se couvrir appauvrit l'information du consommateur allergique.",
      },
      {
        titre: "Confier une recette à un compte personnel",
        texte: "Une recette et ses pourcentages relèvent du secret de fabrication. Sur un compte personnel, ils sortent du périmètre que votre informatique contrôle. Les assistants travaillent sur des comptes d'entreprise ou sur des serveurs choisis avec votre responsable informatique.",
      },
      {
        titre: "Oublier l'atelier dans un projet documentaire",
        texte: "Une étiquette juste ne suffit pas quand la ligne passe d'une recette avec allergène à une recette qui n'en contient pas : le règlement (UE) 2021/382 impose un nettoyage et un contrôle entre les deux. Le plan de production et le plan de nettoyage entrent dans le périmètre dès le cadrage.",
      },
    ],
  },

  faq: [
    {
      q: "Par quel cas commencer dans une PME agroalimentaire ?",
      a: "Par le contrôle de cohérence entre spécifications fournisseurs, recettes et étiquettes. Il touche au risque de rappel, se teste sur vos dossiers des derniers mois et se mesure sans difficulté : nombre d'écarts trouvés avant impression, délai de traitement d'un changement. Les réponses aux questionnaires des distributeurs peuvent suivre, sur la même base de données validées.",
    },
    {
      q: "L'IA peut-elle valider une étiquette à notre place ?",
      a: "Non. Le règlement INCO rend responsable l'exploitant dont le nom figure sur l'emballage, et la décision reste à votre responsable réglementaire. L'assistant prépare le contrôle : il compare l'épreuve à la recette et aux fiches des matières, vérifie la mise en évidence des allergènes et les pourcentages annoncés, puis liste les écarts avec leur source.",
    },
    {
      q: "Nos recettes et formulations restent-elles confidentielles ?",
      a: "Oui, à condition de traiter chaque famille de données à part. Les formulations et leurs pourcentages restent sur des serveurs que vous contrôlez ; les fiches techniques déjà remises aux clients peuvent passer par un service en ligne d'entreprise. Aucun compte personnel n'entre dans le dispositif, et chaque accès aux données de production est journalisé.",
    },
    {
      q: "L'assistant peut-il nous aider en cas de rappel ?",
      a: "Il prépare ce qui prend du temps ce jour-là : remonter d'un lot aux matières premières et aux clients livrés, rassembler les codes GTIN, les lots et les dates, préremplir les champs de la fiche RappelConso. La décision de retrait ou de rappel et l'information des autorités restent celles de l'exploitant, comme le prévoit l'article 19 du règlement (CE) n° 178/2002.",
    },
    {
      q: "Combien coûte un projet IA pour un industriel de l'agroalimentaire ?",
      a: "Le budget suit votre chaîne documentaire : nombre de références actives, logiciels de formulation et de qualité à raccorder, profondeur de traçabilité attendue. Nous l'arrêtons au forfait quand la liste des documents et des contrôles est écrite, à l'issue du cadrage. Comparer les spécifications d'une gamme reste un engagement contenu ; une chaîne complète, de la spécification fournisseur à la fiche de rappel et sur plusieurs usines, se chiffre au-delà de 100 000 €, parfois en centaines de milliers d'euros. Tout commence par 30 minutes de cadrage offertes.",
    },
    {
      q: "La directive NIS 2 concerne-t-elle notre usine ?",
      a: "Si vous produisez, transformez ou distribuez en gros des denrées alimentaires et que vous atteignez au moins la taille d'une entreprise moyenne au sens européen, l'annexe II de la directive vous vise. Le projet de loi de transposition est inscrit en séance publique à l'Assemblée nationale le 7 octobre 2026 ; les obligations précises dépendront du texte adopté. Un projet d'IA se cadre dès maintenant avec des accès journalisés et des prestataires identifiés.",
    },
    {
      q: "Le conseil et le développement sont-ils finançables par l'OPCO ?",
      a: "Seule la formation peut l'être. Un atelier construit sur vos spécifications et vos épreuves d'étiquettes est une action de formation, que votre OPCO peut prendre en charge selon vos fonds. La comparaison des spécifications, le contrôle des étiquettes et leur raccordement à vos logiciels sont des prestations de service, chiffrées au forfait.",
    },
    {
      q: "Comment se déroule la mission, et où ?",
      a: "Les étapes où il faut voir les équipes travailler se tiennent dans vos locaux : le cadrage avec la direction, l'observation des circuits de validation qualité, la passation au référent interne. Nous développons ensuite depuis nos bureaux lyonnais, et le suivi se fait à distance. À la fin, les contrôles et leur documentation vous appartiennent.",
    },
  ],

  sources: [
    { name: "EUR-Lex : règlement (CE) n° 178/2002, principes généraux de la législation alimentaire (articles 18 et 19)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32002R0178" },
    { name: "EUR-Lex : règlement d'exécution (UE) n° 931/2011 sur la traçabilité des denrées d'origine animale", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011R0931" },
    { name: "EUR-Lex, règlement INCO (UE) n° 1169/2011 : mentions obligatoires et allergènes de l'annexe II", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011R1169" },
    { name: "EUR-Lex : règlement (CE) n° 852/2004 relatif à l'hygiène des denrées alimentaires (article 5)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32004R0852" },
    { name: "EUR-Lex : règlement (UE) 2021/382, gestion des allergènes et culture de la sécurité alimentaire", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32021R0382" },
    { name: "Légifrance : arrêté du 20 janvier 2021 relatif à la déclaration dématérialisée des rappels (RappelConso)", url: "https://www.legifrance.gouv.fr/jorf/id/JORFSCTA000043038708" },
    { name: "data.economie.gouv.fr : jeu de données RappelConso V2, rappels de produits", url: "https://data.economie.gouv.fr/explore/dataset/rappelconso-v2-gtin-espaces/" },
    { name: "EUR-Lex : directive (UE) 2022/2555, dite NIS 2 (article 2 et annexe II)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555" },
    { name: "Assemblée nationale : dossier législatif du projet de loi relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité", url: "https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N50731" },
  ],
}
