// Contenu propre à /formation-ia-paris (guide terrain et blocs du mode page propre). Rendu par GeoIAGenericPage.
// Vérifié le 03/10/2026 : chiffres-clés CCI Paris IdF-Insee 2025-2026, ANR (IA-Clusters), elysee.fr, lafrenchtech.gouv.fr, France compétences, OPCO Atlas, Afdas, learn.microsoft.com (Copilot), help.mistral.ai (hébergement).
// Page propre du 07/10/2026 : faits d'outils repris de la fiche FAITS-OUTILS du 07/10 (Microsoft Copilot, modèles d'Anthropic hors frontière de données de l'UE, GPTs retirés le 11/12/2026, compétences SKILL.md) ; étude de cas conseil-financier (src/data/etudes-de-cas.js).
export default {
  slug: 'formation-ia-paris',
  pagePropre: true,
  dateModified: '2026-10-07',
  metaDesc: "Formation IA Paris : quel outil pour la banque, le conseil, les médias ou la recherche, financement Atlas ou Afdas, intra ou à distance. Qualiopi.",
  intro: "L'Île-de-France produit près d'un tiers de la richesse nationale, et Paris en concentre les sièges, les rédactions, les cabinets et les laboratoires. Une formation à l'intelligence artificielle y commence par un choix d'outil, qui dépend de votre messagerie et des règles de données de votre groupe. Masteria, cabinet fondé à Lyon et certifié Qualiopi, forme vos équipes parisiennes en intra dans vos locaux ou en classe virtuelle, sur ChatGPT, Claude, Microsoft Copilot, Gemini ou Vibe de Mistral AI, à partir de vos propres documents.",
  resume: "Masteria, cabinet d'IA fondé à Lyon en 2022 et certifié Qualiopi, forme les équipes parisiennes sur l'assistant que leur système d'information autorise : Microsoft Copilot (anciennement Microsoft 365 Copilot) dans un groupe sous Microsoft 365, ChatGPT, Claude, Gemini ou Vibe ailleurs. La journée, à 1 980 € HT, se déroule dans vos bureaux de Paris ou d'Île-de-France pour douze personnes au plus, ou en tête-à-tête pour un dirigeant. Atlas, l'Afdas ou l'opérateur de votre branche peut la financer, d'après ses critères et vos fonds ; le devis chiffre le trajet du formateur depuis Lyon.",
  programme: {
    titre: "La journée parisienne part de l'outil ouvert par votre DSI et des dossiers de votre direction",
    intro: "Avant la session, nous recevons par écrit la liste des fonctions activées sur vos comptes et les règles de données du groupe. Les exercices portent ensuite sur ce que votre direction produit chaque semaine : la note d'un comité de crédit, la proposition d'un cabinet Syntec, le dossier de fond d'une rédaction, la revue de littérature d'un laboratoire.",
    items: [
      "Mesurer ce que l'outil retenu voit : dans Microsoft Copilot, tout fichier SharePoint que le participant peut ouvrir ; dans ChatGPT Business, Claude ou Vibe, ce qu'il y dépose et ce que les connecteurs autorisés par la DSI laissent passer.",
      "Interroger une note de comité ou un rapport public en précisant le lecteur, le contexte et la forme du livrable, puis obliger l'assistant à indiquer la page d'où sort chaque chiffre.",
      "Confronter deux versions d'un même texte, un avenant de contrat d'assurance ou une proposition de mission, et recevoir le tableau des écarts que le service concerné relira.",
      "Ouvrir un espace par dossier, selon l'outil un projet, un bloc-notes Copilot, un carnet Gemini Notebook ou une Bibliothèque de Vibe, et n'y verser que les pièces que les règles du groupe autorisent.",
      "Rédiger un compte rendu en anglais pour une maison mère étrangère, puis comparer la version française pour repérer ce que la traduction a déplacé ou adouci.",
      "Transformer une procédure de l'équipe en compétence, ce fichier SKILL.md que Claude, ChatGPT, Gemini, Copilot et Vibe savent exploiter au 7 octobre 2026, au lieu d'un GPT personnalisé : ChatGPT supprime ces derniers le 11 décembre 2026.",
      "Trancher le cas des modèles d'Anthropic dans Copilot, désactivés par défaut dans l'Union européenne et extérieurs à sa frontière de données : la décision revient à la direction des risques, et la journée lui en donne les éléments.",
      "Clore la journée sur une règle d'équipe : tout texte qui part chez un client, un lecteur ou un régulateur passe d'abord par une relecture humaine nommée.",
    ],
  },
  formats: {
    titre: "Dans vos bureaux de Paris ou de La Défense, en tête-à-tête ou en classe virtuelle",
    paras: [
      "Le formateur rejoint vos locaux, intra-muros ou ailleurs en Île-de-France, pour une salle de douze personnes au plus, chacune sur son poste avec un compte ouvert sur l'outil retenu. La journée compte sept heures ; un second jour, soit 3 960 € HT pour les deux, laisse le temps d'écrire les compétences et les procédures du service. Un siège qui veut d'abord sensibiliser plusieurs centaines de salariés ouvre le déploiement par des Sprints IA de trois heures, sur devis.",
      "Pour un associé, une directrice juridique ou un membre du comité exécutif, l'accompagnement individuel coûte le même prix à la journée et se découpe en demi-journées calées entre deux comités. Filiales de province et collaborateurs en télétravail se connectent à la même session à distance. Une semaine avant, votre DSI confirme deux points : l'accès à l'outil depuis la salle et la liste des fonctions ouvertes aux participants.",
    ],
  },
  references: {
    titre: "Un cabinet installé à Paris et à Lyon, outillé pour ses appels d'offres publics",
    paras: [
      "Parmi nos études de cas publiées figure un cabinet de conseil financier indépendant, au service des acheteurs publics depuis plus de quarante ans, qui travaille depuis Paris et Lyon. Ses mémoires techniques décident de ses contrats : il voulait les produire plus vite en gardant les formulations qui convainquent les jurys.",
      "Avec ses consultants, nous avons bâti un assistant pour chacune de ses quatre grandes familles de marchés, puis réuni les deux bureaux pour une journée de formation sur des consultations récentes. Chaque assistant commence par questionner le consultant sur le client et les références à citer.",
    ],
    liens: [{ label: 'Lire le cas du cabinet au service des acheteurs publics', href: '/etudes-de-cas-ia#conseil-financier' }],
  },
  acces: {
    titre: "Le formateur vient de Lyon et se rend partout en Île-de-France",
    paras: [
      "Masteria a ses bureaux à Lyon. Le formateur intervient dans Paris intra-muros comme dans les pôles d'affaires franciliens : La Défense (RER A, ligne 1), Saint-Denis, Boulogne ou Issy-les-Moulineaux au plus près, Massy, Versailles, Cergy ou Marne-la-Vallée plus loin, et Roissy, à une demi-heure du centre par le RER B. Les frais et les conditions de ce trajet sont arrêtés dans le devis, avant toute signature.",
    ],
  },
  financement: {
    titre: "Atlas pour la finance et le conseil, l'Afdas pour les médias : la branche oriente le financement",
    paras: [
      "Votre convention collective désigne l'opérateur. Atlas accompagne quatorze branches des services financiers et du conseil, parmi lesquelles la banque, les sociétés d'assurances, les marchés financiers, les experts-comptables et les bureaux d'études de la convention Syntec. L'Afdas couvre la presse, l'édition, la publicité, l'audiovisuel et les télécommunications ; le BTP relève de Constructys et l'industrie d'OPCO 2i. Nous établissons programme et convention, votre service formation transmet la demande avant la session, et la réponse dépend des sommes encore disponibles.",
      "La taille de l'entreprise compte autant que sa branche. France compétences réserve les fonds mutualisés du plan de développement des compétences aux structures qui emploient moins de 50 personnes ; au-dessus, le reste à charge moyen atteignait 67 % du coût des formations soutenues en 2024, contre 38 % toutes tailles confondues. Un siège parisien de plusieurs centaines de salariés finance donc surtout sur son budget formation. Pour un dossier soumis à l'OPCO, gardez trois à quatre semaines de marge ; le CPF, lui, ne s'applique pas à nos programmes.",
    ],
    liens: [{ label: 'Tous les leviers de financement de la formation IA', href: '/financement-formation-ia' }],
  },
  cta: {
    fin: {
      titre: "Une équipe parisienne à former avant d'ouvrir sa licence ?",
      texte: "Indiquez-nous l'outil activé par votre DSI et le service concerné : le programme et le devis, trajet compris, vous parviennent le jour ouvré suivant.",
    },
  },
  guide: {
    kicker: "Guide terrain Paris",
    h2: "À Paris, l'outil d'IA se choisit d'après la branche et le système d'information, puis la formation part des dossiers de l'équipe",
    lead: "L'Île-de-France a produit 860 milliards d'euros de richesse en 2023, environ 31 % du PIB national, et Paris compte à lui seul 471 936 entreprises, d'après les chiffres-clés régionaux publiés par la CCI Paris Île-de-France avec l'Insee. Leurs logiciels et leurs règles de confidentialité diffèrent d'un secteur à l'autre. Une banque travaille dans Microsoft 365 sous étiquettes de sensibilité ; un laboratoire protège ses résultats jusqu'à leur publication. La formation utile part de ce constat : votre branche désigne l'OPCO qui peut financer, et votre système d'information oriente vers l'outil à déployer.",
    sections: [
      {
        h3: "Paris concentre les sièges, la recherche et les décisions des investisseurs étrangers",
        paras: [
          "Paris comptait 2 048 472 habitants au 1er janvier 2025, et 471 936 entreprises pour 523 443 établissements actifs en 2022, d'après les chiffres-clés régionaux. La région pèse plus lourd encore dans la recherche : 37,9 % de la dépense intérieure de recherche et développement française en 2022, et 42,1 % des chercheurs du pays en 2023, selon les enquêtes du ministère de l'Enseignement supérieur. Plus de quatre chercheurs français sur dix travaillent donc en Île-de-France. Leurs usages de l'IA portent sur des résultats que l'on ne publie pas encore, et cela pèse sur le choix de l'outil.",
          "Les investisseurs étrangers ajoutent une contrainte que l'on oublie. En 2024, la région a accueilli 370 implantations d'entreprises internationales, qui ont créé 8 170 emplois selon le bilan de Choose Paris Region repris par la CCI ; 149 d'entre elles étaient des centres de décision, et les États-Unis arrivent en tête des pays d'origine avec 83 implantations. Dans ces sièges, l'outil d'IA peut avoir été choisi par la maison mère, avec ses réglages et sa langue de travail. La formation s'ajuste alors à l'outil imposé et aux règles du groupe, que nous demandons par écrit avant la session.",
        ],
      },
      {
        h3: "Chaque filière parisienne a un outil de départ, fixé par son système d'information",
        paras: [
          "Un établissement bancaire, une mutuelle ou un cabinet d'audit qui travaille dans Microsoft 365 trouve son point de départ dans Microsoft Copilot. L'outil ne montre à chaque salarié que les contenus qu'il a au moins le droit de consulter, respecte les droits d'usage des documents chiffrés par une étiquette Purview (le système de classification de Microsoft) et relève de la frontière de données de l'Union européenne. Microsoft y apporte une réserve : les modèles d'Anthropic, que Copilot propose comme sous-traitant, n'entrent pas dans ce périmètre et restent coupés par défaut chez les clients européens. Une direction des risques doit le savoir avant de les activer.",
          "Les laboratoires et les services publics attachés à un hébergement européen regardent Vibe, l'assistant de la start-up parisienne Mistral AI, qui porte ce nom depuis le 28 mai 2026. Selon la documentation de l'éditeur, les données restent stockées dans l'Union européenne tant que l'on n'emploie pas le point d'accès américain de son API. Certaines fonctions peuvent toutefois les faire transiter un temps chez des prestataires que Mistral publie dans son centre de confiance, et l'offre Enterprise permet de couper ces fonctions. Le mot « européen » se vérifie donc fonction par fonction.",
          "ChatGPT et Claude couvrent les autres cas, des usages transverses d'un siège aux dossiers longs d'une direction juridique. Nos pages Formation ChatGPT Paris et Formation Claude IA Paris détaillent leurs réglages propres. Le principe de cette page tient en une phrase : la session se fait sur l'assistant que vos équipes retrouveront dès le lendemain à leur poste, avec les fonctions que votre DSI a activées pour elles.",
        ],
      },
      {
        h3: "L'écosystème IA francilien se mesure en clusters de recherche et en rendez-vous internationaux",
        paras: [
          "En mai 2024, l'État a retenu neuf « IA-Clusters », des pôles de recherche et de formation en intelligence artificielle financés par France 2030 à hauteur de 360 millions d'euros. Quatre sont franciliens : PR[AI]RIE-PSAI porté par l'université PSL (75 millions d'euros), Hi! PARIS Cluster 2030 porté par l'Institut Polytechnique de Paris (70 millions), PostGenAI@PARIS porté par Sorbonne Université (35 millions) et DATAIA-Cluster porté par l'université Paris-Saclay (20 millions). Ils réunissent 200 millions d'euros, plus de la moitié de l'enveloppe nationale.",
          "Paris a accueilli les 10 et 11 février 2025, au Grand Palais, le Sommet pour l'action sur l'intelligence artificielle, troisième sommet international consacré au sujet. La French Tech Grand Paris figure parmi les dix-neuf Capitales French Tech du réseau national. Pour une entreprise, cet écosystème se traduit surtout en profils à recruter et en stagiaires formés aux méthodes récentes. La formation des équipes en place relève d'un autre travail : faire pratiquer chaque métier, sur ses documents, avec l'outil autorisé par l'entreprise.",
        ],
      },
    ],
    table: {
      caption: "Six milieux professionnels parisiens et l'assistant d'IA par lequel commencer",
      headers: ["Milieu professionnel", "Assistant de départ", "Premier usage travaillé", "Point à régler avant"],
      rows: [
        ["Banque, assurance, marchés financiers (branches Atlas)", "Microsoft Copilot quand le groupe travaille sous Microsoft 365", "Synthèse de comités et de notes de marché à partir des documents SharePoint", "Les modèles d'Anthropic, s'ils sont activés dans Copilot, échappent au périmètre européen des données"],
        ["Conseil, audit, ingénierie (convention Syntec)", "ChatGPT Business ou Enterprise, Claude pour les dossiers longs", "Propositions commerciales, reprise des livrables de missions passées", "Documents des clients : accord écrit et périmètre défini avant tout usage"],
        ["Presse, édition, publicité (Afdas)", "ChatGPT ou Claude selon le volume de texte", "Préparation de dossiers, synthèse de rapports publics, déclinaison de formats", "Chaque chiffre et chaque citation contrôlés dans la source"],
        ["Recherche publique et laboratoires", "Vibe de Mistral AI, données stockées dans l'UE par défaut", "Revue de littérature, rédaction de dossiers de financement", "Résultats non publiés et transferts vers les sous-traitants listés"],
        ["Centres de décision de groupes étrangers", "L'outil retenu par la maison mère", "Notes de synthèse en anglais, préparation de comités", "Réglages imposés par le groupe, à obtenir par écrit avant la session"],
        ["Commerce, luxe et distribution", "ChatGPT pour les contenus, Copilot pour la bureautique", "Fiches produit multilingues, comptes rendus de visites de magasins", "Collections et lancements confidentiels gardés hors de l'outil"],
      ],
    },
    cas: {
      h3: "Mise en situation : préparer un dossier de fond dans une rédaction parisienne",
      contexte: "Prenons une cheffe d'édition d'un média économique parisien. Elle prépare un dossier sur l'emploi des jeunes en Île-de-France à partir de trois rapports publics : une publication de l'Insee, un rapport d'une collectivité et une note d'un organisme public d'études. Elle dispose de deux jours avant la conférence de rédaction, et chaque chiffre publié engage le titre.",
      etapes: [
        "Télécharger les trois rapports en PDF texte en s'assurant que le texte se sélectionne : un tableau scanné passe mal à la lecture automatique.",
        "Ouvrir un espace dédié dans l'outil de la rédaction (projet ChatGPT, projet Claude ou conversation Vibe) et y déposer les trois fichiers.",
        "Soumettre la consigne ci-dessous, puis contrôler chaque ligne du tableau obtenu, la page du rapport ouverte à côté.",
        "Envoyer les questions de vérification aux services de presse des organismes auteurs.",
        "Écrire soi-même l'article : l'outil a servi à préparer et à contrôler, la signature reste celle de la journaliste.",
      ],
      prompt: "Je prépare un dossier sur l'emploi des jeunes en Île-de-France. Trois rapports publics sont joints. Travaille uniquement à partir de ces documents.\n\nPremière étape : dresse la liste des chiffres clés sous forme de tableau. Une ligne par chiffre, avec la valeur, la définition exacte de l'indicateur, le périmètre géographique, l'année, le rapport source et la page.\n\nDeuxième étape : repère les indicateurs qui apparaissent dans plusieurs rapports avec des valeurs différentes. Pour chacun, cite les deux passages et indique la cause probable de l'écart : périmètre, année, définition ou méthode de calcul.\n\nTroisième étape : propose cinq questions à poser aux auteurs des rapports pour lever les points fragiles du dossier.\n\nRègles : si une information ne figure pas dans les documents, écris « absent des sources ». N'arrondis aucun chiffre et garde les unités du rapport. Ne rédige pas l'article et ne propose pas de titre.",
      resultat: "Un tableau des chiffres sourcés à la page près, la liste des écarts entre rapports avec leur cause probable et des questions prêtes à partir. Les rapports sont publics, et la confidentialité pose donc peu de difficultés ; les notes d'entretien et l'identité des sources restent hors de l'outil. Contrôlez chaque ligne contre le PDF : un chiffre mal recopié dans un dossier de fond se paie en rectificatif.",
    },
    pieges: [
      { titre: "Former sur un outil que la maison mère n'a pas ouvert", texte: "Dans un centre de décision d'un groupe étranger, la licence et ses réglages se décident parfois hors de France. Demandez avant la session la liste des fonctions activées pour vos comptes, faute de quoi une partie des exercices ne pourra pas se faire." },
      { titre: "Activer les modèles d'Anthropic dans Copilot avant d'avoir relu la frontière de données", texte: "Microsoft indique que ces modèles, proposés comme sous-traitant dans Copilot, sont exclus de la frontière de données de l'UE. Une banque ou un assureur tenu à des engagements de localisation tranche ce point avec sa direction des risques avant de les ouvrir aux équipes." },
      { titre: "Compter sur les fonds mutualisés pour un siège de 300 salariés", texte: "Ces fonds visent les employeurs de moins de 50 personnes. Au-delà, le reste à charge moyen mesuré par France compétences atteignait 67 % en 2024 : inscrivez la ligne au budget formation avant d'interroger l'OPCO." },
      { titre: "Croire qu'un laboratoire est couvert parce que l'outil est européen", texte: "Le stockage européen de Vibe n'empêche pas certains transferts temporaires vers les prestataires que Mistral AI publie. Un laboratoire qui manipule des résultats non publiés relit cette liste et, sur l'offre Enterprise, coupe les fonctions concernées." },
      { titre: "Publier un chiffre extrait par l'IA avant de l'avoir vérifié", texte: "Pour une rédaction, une erreur de chiffre coûte un rectificatif et une part de crédibilité. Exigez toujours la page source, et faites relire le tableau des chiffres par une deuxième personne avant la conférence de rédaction." },
    ],
  },
  faq: [
    { q: "Banque, conseil ou médias à Paris : par quel assistant d'IA commencer ?", a: "Votre système d'information donne la réponse. Une banque ou un assureur sous Microsoft 365 démarre avec Microsoft Copilot, qui suit les droits SharePoint et les étiquettes de sensibilité. Un cabinet de conseil ou un siège aux usages variés regarde ChatGPT Business ou Enterprise, et Claude pour les dossiers longs. Un laboratoire ou un service public qui tient à un stockage européen regarde Vibe, de Mistral AI. Nous formons à ces cinq assistants et bâtissons les exercices sur celui que vous avez retenu." },
    { q: "Quelles équipes parisiennes tirent le plus parti d'une formation à l'IA ?", a: "Celles qui écrivent et qui chiffrent. En Île-de-France, les établissements des activités scientifiques et techniques et des services administratifs emploient 1 105 724 salariés, ceux de l'information et de la communication 483 951, et ceux de la finance et de l'assurance 330 705, selon les données Insee de 2022. Nos programmes vont du juriste à l'assistante de direction, du contrôleur de gestion au chargé de communication, avec plus d'une centaine de parcours au catalogue." },
    { q: "Quel budget prévoir pour une journée de formation IA dans des bureaux parisiens ?", a: "Votre direction paie 1 980 € HT pour la journée, qu'elle réunisse cinq ou douze collègues, sur place ou à distance. Le suivi individuel d'un dirigeant ou d'un expert revient au même prix. Pour un grand effectif, trois heures de Sprint IA font l'objet d'un chiffrage à part. Le trajet du formateur jusqu'à Paris figure dans ce devis, que vous recevez dans la journée ouvrée." },
    { q: "Atlas ou Afdas : comment une entreprise parisienne fait-elle financer la session ?", a: "Notre certificat Qualiopi (catégorie « actions de formation », n° 725311-1, émis par Certifopac et valable jusqu'au 28 janvier 2029) rend la session éligible au financement de votre OPCO. Atlas suit la banque, l'assurance, la finance, le conseil et l'expertise comptable ; l'Afdas, la presse, l'édition, la publicité et l'audiovisuel. Une structure de moins de 50 salariés peut s'appuyer sur les fonds mutualisés ; une plus grande mobilise ses contributions conventionnelles ou volontaires." },
    { q: "Intra à La Défense, tête-à-tête ou classe virtuelle : quelle formule pour une équipe parisienne ?", a: "L'intra réunit un service, douze personnes au maximum, dans vos bureaux de Paris ou de La Défense. Le tête-à-tête convient aux dirigeants et aux experts qui veulent avancer sur leurs propres dossiers. Le Sprint IA de trois heures prépare un grand effectif, par exemple avant l'ouverture d'une licence à tout le groupe. Chacune se tient aussi à distance, ce qui sert quand une filiale travaille loin de la capitale." },
    { q: "Faut-il déjà se servir de l'IA pour suivre la journée à Paris ?", a: "Non, la pratique de votre métier suffit. La matinée explique comment fonctionne l'IA générative et comment formuler une demande, puis l'après-midi passe aux écrits de l'équipe : une note de synthèse pour un contrôleur de gestion, un communiqué pour une chargée de communication. Les règles de données de votre entreprise sont posées avant le premier exercice." },
    { q: "Combien de semaines entre la demande et la session pour un siège parisien ?", a: "Avec un financement par l'OPCO, prévoyez trois à quatre semaines : nous envoyons programme et devis dans la journée ouvrée, puis votre service formation dépose la demande, convention jointe, avant le premier jour. Sur budget interne, la date dépend surtout de l'agenda de l'équipe et de l'ouverture des comptes sur l'outil." },
    { q: "Qui vient former vos équipes à Paris, et depuis où ?", a: "Mathias Nizan en personne, ou l'un des formateurs indépendants expérimentés qu'il mobilise selon le métier de vos équipes. Le cabinet est établi à Lyon, dans le 1er arrondissement ; le formateur se rend dans vos locaux parisiens, et le devis règle les conditions de ce déplacement. Le contenu ne change pas selon l'animateur : il part des documents de votre équipe et de l'outil que vous avez choisi." },
    { q: "Comment se former à Paris quand la maison mère étrangère impose son outil d'IA ?", a: "En construisant la formation sur cet outil et sur les règles du groupe, que nous recevons par écrit avant la session. Les 149 centres de décision d'entreprises internationales implantés en Île-de-France en 2024 sont souvent dans ce cas. Les exercices se font en anglais si c'est la langue de travail de l'équipe, et les documents du groupe restent dans l'espace autorisé par la maison mère." },
  ],
  sources: [
    { name: "Chiffres-clés 2025-2026 de l'Île-de-France, édités par la CCI Paris Île-de-France avec l'Insee (PDF)", url: "https://www.insee.fr/fr/statistiques/fichier/2017579/if_CC_2025.pdf" },
    { name: "ANR : intelligence artificielle, 9 nouveaux IA-Clusters (France 2030)", url: "https://anr.fr/fr/actus/details/news/intelligence-artificielle-9-nouveaux-ia-clusters-et-2-nouveaux-laureats-competences-et-metie/" },
    { name: "Élysée : Sommet pour l'action sur l'IA, questions fréquentes", url: "https://www.elysee.fr/sommet-pour-l-action-sur-l-ia/faq" },
    { name: "Capitales et communautés French Tech, sur le site de la Mission French Tech", url: "https://lafrenchtech.gouv.fr/fr/le-reseau-de-proximite/" },
    { name: "Fonds mutualisés et plan de développement des compétences, fiche de France compétences", url: "https://www.francecompetences.fr/fiche-ruf/le-soutien-au-plan-de-developpement-des-competences-des-entreprises/" },
    { name: "OPCO Atlas : les branches professionnelles", url: "https://www.opco-atlas.fr/atlas/quelle-branche.html" },
    { name: "Afdas : secteurs et branches couverts (méthodologie)", url: "https://territoires.afdas.com/methodologie/" },
    { name: "Engagements de Microsoft sur les données traitées par Copilot (Microsoft Learn, en anglais)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy" },
    { name: "Où Mistral AI stocke les données des organisations (centre d'aide, en anglais)", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
  ],
}
