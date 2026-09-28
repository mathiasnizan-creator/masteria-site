// Article réécrit le 28/09/2026 : AI Act, article 4 (maîtrise de l'IA) après l'Omnibus 2026/1744.
// Textes vérifiés sur EUR-Lex (règlements 2024/1689 et 2026/1744) et sur les questions-réponses
// de la Commission (mise à jour du 27/07/2026). Remplace les champs correspondants de blog-articles.js.
const EURLEX_AIACT = 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689'
const EURLEX_OMNIBUS = 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202601744'
const QR_COMMISSION = 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers'

export default {
  slug: 'ai-act-formation-ia-obligatoire-entreprise',
  title: "Formation IA obligatoire : ce que l'article 4 de l'AI Act exige des entreprises en septembre 2026",
  metaTitle: "Article 4 AI Act : la formation IA obligatoire | Masteria",
  metaDesc: "Article 4 de l'AI Act réécrit par l'Omnibus : ce qui est obligatoire, ce qui ne l'est pas, les sanctions prévues, le calendrier et le registre à tenir.",
  dateModified: '2026-09-28',
  readTime: '13 min',
  excerpt: "L'Omnibus du 8 juillet 2026 a réécrit l'article 4 de l'AI Act. L'obligation de former reste, sans niveau individuel à garantir ni certificat. Le texte exact, les sanctions prévues, le calendrier et le registre à tenir.",
  intro: "Oui, une entreprise qui utilise un outil d'IA doit prendre des mesures pour que les personnes qui s'en servent sachent l'utiliser, ChatGPT compris. L'obligation date du 2 février 2025. Le règlement Omnibus du 8 juillet 2026 a réécrit l'article 4 : l'entreprise doit prendre des mesures pour développer la maîtrise de l'IA de ses équipes, et le texte précise qu'elle n'a pas à garantir un niveau individuel. Aucun certificat n'est exigé. Le règlement ne fixe pas d'amende chiffrée pour ce manquement et laisse chaque État prévoir ses sanctions. Cet article reprend le texte exact, trie l'obligatoire du recommandé et décrit le dossier à tenir prêt.",
  blocks: [
    { type: 'h2', text: "L'article 4 a changé de texte le 27 juillet 2026" },
    { type: 'p', text: `L'article 4 du <a href="${EURLEX_AIACT}">règlement (UE) 2024/1689</a>, qu'on appelle AI Act, porte un titre court : « Maîtrise de l'IA ». L'article 3 définit le terme. Il s'agit des compétences, des connaissances et de la compréhension qui permettent de déployer un système d'IA en connaissance de cause, et de mesurer ses possibilités, ses risques et les préjudices qu'il peut causer. En anglais, on parle d'AI literacy.` },
    { type: 'p', text: `Le <a href="${EURLEX_OMNIBUS}">règlement (UE) 2026/1744</a>, appelé Omnibus numérique sur l'IA, a remplacé l'article en entier. Il a été signé le 8 juillet 2026, publié au Journal officiel de l'Union le 24 juillet et il s'applique depuis le 27 juillet. Le tableau met les deux versions côte à côte, avec les mots du Journal officiel.` },
    {
      type: 'table',
      headers: ["Point", "Version de 2024", "Version en vigueur depuis le 27 juillet 2026"],
      rows: [
        ["Ce que l'entreprise doit faire", "« prennent des mesures pour garantir, dans toute la mesure du possible, un niveau suffisant de maîtrise de l'IA »", "« prennent des mesures pour favoriser le développement de la maîtrise de l'IA »"],
        ["Qui est visé", "« leur personnel et les autres personnes s'occupant du fonctionnement et de l'utilisation des systèmes d'IA pour leur compte »", "Inchangé"],
        ["Comment calibrer", "Selon les connaissances techniques, l'expérience, l'éducation et la formation des personnes, le contexte d'usage et les personnes visées par le système", "Inchangé"],
        ["Niveau à atteindre", "« Un niveau suffisant », jamais défini", "« Cette obligation ne contraint pas les fournisseurs ou les déployeurs à garantir un niveau spécifique de maîtrise de l'IA par un individu »"],
        ["Rôle des pouvoirs publics", "Aucun paragraphe dédié", "La Commission et les États membres soutiennent les efforts des entreprises, en particulier des PME. La Commission publie des exemples pratiques."],
      ],
    },
    { type: 'p', text: "L'obligation reste en place pour tout fournisseur et tout déployeur, quel que soit le niveau de risque de l'outil. Elle devient une obligation de moyens : l'entreprise doit pouvoir montrer ce qu'elle a mis en place, et que ces mesures correspondent aux personnes et aux usages. Le considérant 8 de l'Omnibus donne la raison du changement. Une exigence stricte de niveau créait une charge jugée trop lourde, surtout pour les petites entreprises." },
    { type: 'callout', title: "Un contresens qui circule", text: "Plusieurs pages annoncent que l'Omnibus a supprimé l'obligation de former. Le texte publié au Journal officiel la maintient pour les entreprises. Il a retiré l'exigence d'un « niveau suffisant » et ajouté un devoir de soutien pour la Commission et les États membres." },

    { type: 'h2', text: "Qui est concerné dans votre entreprise" },
    { type: 'p', text: "L'article 4 vise les déployeurs. Le règlement appelle déployeur toute personne ou organisation qui utilise un système d'IA sous sa propre autorité, hors usage personnel non professionnel (article 3, point 4). Une PME dont les salariés rédigent avec ChatGPT, résument avec Copilot ou traduisent avec un outil automatique est un déployeur. La taille de l'entreprise ne change rien. Le prix de l'abonnement non plus." },
    { type: 'p', text: `Le périmètre dépasse les salariés. Le texte parle des « autres personnes » qui utilisent les outils pour le compte de l'entreprise. Dans ses <a href="${QR_COMMISSION}">questions-réponses sur la maîtrise de l'IA</a>, mises à jour le 27 juillet 2026, la Commission cite les prestataires et les sous-traitants. Un intérimaire qui répond aux clients avec l'assistant de l'entreprise entre dans le champ. Un consultant qui produit ses livrables avec votre licence aussi.` },
    { type: 'p', text: "La Commission prend un exemple que chacun reconnaîtra. Une entreprise dont les salariés rédigent des textes publicitaires avec ChatGPT doit les informer des risques propres à l'outil, comme les hallucinations (des réponses fausses présentées avec assurance). Elle ajoute que se contenter de la notice d'utilisation, ou demander au personnel de la lire, sera souvent inefficace." },
    { type: 'p', text: "Les usages cachés comptent aussi : un salarié qui colle un contrat client dans son compte personnel gratuit agit pour le compte de l'entreprise." },

    { type: 'h2', text: "Obligatoire, recommandé, facultatif : le tri ligne par ligne" },
    { type: 'p', text: "Le tableau sépare ce qu'un texte impose, ce que la Commission recommande et ce qui relève de la bonne pratique. La dernière colonne permet de vérifier chaque ligne à la source." },
    {
      type: 'table',
      headers: ["Mesure", "Statut en septembre 2026", "Source"],
      rows: [
        ["Prendre des mesures pour développer la maîtrise de l'IA des personnes qui utilisent les outils", "Obligatoire depuis le 2 février 2025", "AI Act, article 4, paragraphe 1"],
        ["Adapter ces mesures au niveau des personnes et au contexte d'usage", "Obligatoire", "AI Act, article 4, paragraphe 1"],
        ["Garantir un niveau individuel ou faire passer un test de niveau", "Non exigé", "AI Act, article 4, paragraphe 1, dernière phrase"],
        ["Obtenir un certificat ou suivre une formation certifiante", "Non exigé", "Questions-réponses de la Commission"],
        ["Tenir un registre interne des formations et des actions d'accompagnement", "Recommandé", "Questions-réponses de la Commission"],
        ["Confier le contrôle humain d'un système à haut risque à des personnes formées", "Obligatoire à partir du 2 décembre 2027 pour les systèmes de l'annexe III", "AI Act, article 26, paragraphe 2, et Omnibus"],
        ["Indiquer qu'une image, un son ou une vidéo hypertruqués ont été générés par IA", "Obligatoire depuis le 2 août 2026 pour qui les diffuse", "AI Act, article 50, paragraphe 4"],
        ["Informer et consulter le CSE sur l'introduction d'une nouvelle technologie", "Obligatoire dans les entreprises d'au moins 50 salariés", "Code du travail, article L2312-8"],
        ["Maintenir la capacité des salariés à occuper leur emploi face à l'évolution des technologies", "Obligation générale de l'employeur", "Code du travail, article L6321-1"],
        ["Rédiger une charte d'usage de l'IA", "Bonne pratique, aucun texte ne l'impose", "Usage des entreprises"],
      ],
    },
    { type: 'p', text: "La ligne sur le haut risque mérite une précision. Un système qui trie des candidatures, évalue les performances d'un salarié ou attribue des tâches d'après son comportement figure à l'annexe III, point 4. Pour ces outils, les obligations du déployeur de l'article 26 s'appliqueront le 2 décembre 2027. L'employeur devra alors informer les représentants du personnel et les salariés concernés avant la mise en service (article 26, paragraphe 7). Un assistant qui aide à rédiger un courriel ne relève pas de cette catégorie." },

    { type: 'h2', text: "Les sanctions : ce que prévoit l'article 99" },
    { type: 'p', text: "Beaucoup de pages affichent 15 millions d'euros ou 3 % du chiffre d'affaires pour un défaut de formation. Le montant existe dans le règlement. Il vise une liste fermée d'obligations, et l'article 4 n'y figure pas." },
    { type: 'p', text: `L'<a href="${EURLEX_AIACT}">article 99</a> fixe trois plafonds. Le premier, 35 millions d'euros ou 7 % du chiffre d'affaires mondial, sanctionne les pratiques interdites de l'article 5. Le deuxième, 15 millions ou 3 %, vise les obligations énumérées au paragraphe 4 : fournisseurs (article 16), mandataires, importateurs, distributeurs, déployeurs de systèmes à haut risque (article 26), organismes notifiés et transparence (article 50). Le troisième, 7,5 millions ou 1 %, punit les informations inexactes fournies aux autorités. Pour une PME, chaque amende est plafonnée au plus faible des deux montants (paragraphe 6).` },
    { type: 'p', text: "Le paragraphe 1 du même article confie aux États membres le régime des autres manquements. Ce régime peut comprendre des avertissements et des mesures non monétaires. Il doit rester proportionné et tenir compte des intérêts des PME. La Commission confirme que les autorités nationales pourront sanctionner un manquement à l'article 4, au cas par cas." },
    { type: 'p', text: `Reste à savoir qui contrôle. La Commission indique que l'article 4 relève des autorités nationales de surveillance du marché, qui exercent cette surveillance depuis le 2 août 2026. En France, le gouvernement a publié en septembre 2025 un <a href="https://www.entreprises.gouv.fr/priorites-et-actions/transition-numerique/soutenir-le-developpement-de-lia-au-service-de-0">schéma de répartition</a> : la DGCCRF coordonne, la CNIL et d'autres autorités interviennent selon les secteurs. Ce schéma passe par un projet de loi d'adaptation au droit de l'Union, adopté par le Sénat en février 2026 et transmis à l'Assemblée nationale le 20 février. Fin septembre 2026, le <a href="https://www.senat.fr/dossier-legislatif/pjl25-118.html">dossier législatif</a> n'affiche aucune étape suivante. Aucune autorité française n'a donc reçu par la loi la mission de contrôler l'article 4.` },
    { type: 'p', text: "Le risque le plus proche passe par d'autres textes. Une fuite de données personnelles dans un outil d'IA relève du RGPD, applicable depuis mai 2018, et des sanctions de la CNIL. Un litige avec un salarié ou avec un client portera sur ce que l'entreprise avait fait pour encadrer l'outil. Dans les deux cas, un registre de formation daté vaut mieux qu'une intention." },

    { type: 'h2', text: "Le calendrier à jour après l'Omnibus" },
    { type: 'p', text: "Les frises publiées avant juillet 2026 annoncent le haut risque pour le 2 août 2026. Cette date ne tient plus : l'Omnibus a modifié l'article 113 du règlement." },
    {
      type: 'table',
      headers: ["Date", "Ce qui s'applique", "Ce que ça change pour une PME utilisatrice"],
      rows: [
        ["1er août 2024", "Entrée en vigueur du règlement 2024/1689", "Rien d'opérationnel"],
        ["2 février 2025", "Maîtrise de l'IA (article 4) et pratiques interdites (article 5)", "Former les utilisateurs ; vérifier qu'aucun outil n'infère les émotions des salariés, pratique interdite au travail sauf raison médicale ou de sécurité"],
        ["2 août 2025", "Règles des modèles d'IA à usage général ; cadre des sanctions (chapitre XII)", "Obligations portées par les éditeurs des modèles"],
        ["27 juillet 2026", "Entrée en vigueur de l'Omnibus 2026/1744 et nouvelle rédaction de l'article 4", "Obligation de moyens, sans niveau individuel à garantir"],
        ["2 août 2026", "Transparence (article 50) ; début de la surveillance nationale de l'article 4", "Signaler les hypertrucages diffusés ; avoir le registre prêt"],
        ["2 décembre 2026", "Fin du délai de marquage des contenus pour les systèmes génératifs mis sur le marché avant août 2026 ; nouvelles pratiques interdites ajoutées à l'article 5", "Obligations portées surtout par les éditeurs"],
        ["2 décembre 2027", "Systèmes à haut risque de l'annexe III, dont recrutement et gestion des salariés", "Contrôle humain par des personnes formées ; information des représentants du personnel"],
        ["2 août 2028", "Systèmes à haut risque intégrés à des produits réglementés (annexe I)", "Concerne surtout les industriels"],
      ],
    },

    { type: 'h2', text: "Un dispositif proportionné tient en quatre pièces" },
    { type: 'p', text: "La Commission décrit un socle minimal en quatre points. L'entreprise donne une compréhension générale de l'IA. Elle situe son propre rôle, fournisseur ou déployeur. Elle explique les risques des outils qu'elle utilise. Elle adapte le tout au niveau et au contexte de chaque public. Les quatre pièces suivantes traduisent ce socle en travail concret." },
    { type: 'h3', text: "1. L'inventaire des outils et des usages" },
    { type: 'p', text: "Pour chaque outil, notez le nom, le type de compte (entreprise ou personnel), les équipes qui s'en servent, les tâches, les données saisies et les décisions qu'il influence. Un questionnaire anonyme de cinq minutes fait remonter les comptes personnels, que l'informatique ne voit pas. Cet inventaire sert deux fois : il définit les publics à former et il repère les usages qui basculeront dans le haut risque en décembre 2027." },
    { type: 'h3', text: "2. Des groupes formés selon leur exposition" },
    {
      type: 'table',
      headers: ["Public", "Ce que les personnes doivent savoir faire", "Format adapté"],
      rows: [
        ["Toute personne qui ouvre un assistant d'IA", "Repérer une hallucination, savoir quelles données ne jamais saisir, connaître les outils autorisés et la personne à prévenir", "Session courte en groupe, rappel dans l'intranet ou l'outil"],
        ["Utilisateurs quotidiens, par métier", "Écrire des consignes précises pour leurs tâches, vérifier une sortie avant usage, garder la trace des sources", "Atelier pratique sur leurs propres documents"],
        ["Managers et direction", "Décider des usages permis, lire les limites d'un outil, répondre aux questions d'un salarié ou du CSE", "Séance dédiée, construite sur des cas de décision"],
        ["Référents informatique, données, RH", "Classer un usage selon les niveaux de risque, paramétrer les comptes, préparer les échéances de 2027", "Formation approfondie et veille suivie"],
      ],
    },
    { type: 'h3', text: "3. Le registre" },
    { type: 'p', text: "La Commission écrit qu'un certificat n'est pas nécessaire et qu'un registre interne des formations et des actions d'accompagnement suffit. Un tableur partagé fait l'affaire. Prévoyez une ligne par action avec ces colonnes :" },
    { type: 'ul', items: [
      "date, intitulé et programme (objectifs, contenu, outils couverts) ;",
      "public visé, noms des participants et preuve de présence (émargement ou connexion) ;",
      "durée, format et intervenant, interne ou organisme extérieur ;",
      "évaluation des acquis quand il y en a une, même un court questionnaire ;",
      "date de la prochaine mise à jour prévue et événement qui la déclencherait.",
    ] },
    { type: 'p', text: "Une formation suivie auprès d'un organisme certifié Qualiopi produit déjà le programme, les feuilles d'émargement et le certificat de réalisation. Ces pièces entrent telles quelles dans le registre." },
    { type: 'h3', text: "4. Des mises à jour déclenchées par les usages" },
    { type: 'p', text: "Aucun texte ne fixe de périodicité. Une mise à jour se justifie à chaque changement qui modifie les risques : un nouvel outil, une nouvelle fonction qui agit à la place de l'utilisateur (un agent qui envoie des courriels, par exemple), un incident, l'arrivée d'une nouvelle équipe. Intégrez aussi un module court au parcours d'accueil des nouveaux salariés." },
    { type: 'p', text: `La Commission tient un <a href="https://digital-strategy.ec.europa.eu/en/library/living-repository-foster-learning-and-exchange-ai-literacy">répertoire de pratiques</a> alimenté par des organisations de toutes tailles. Il montre des formats variés, du module en ligne au référent par service, et permet de comparer votre dispositif à ce que font d'autres.` },

    { type: 'h2', text: "Cas pratique : une PME industrielle de 60 salariés" },
    { type: 'p', text: "Prenons un scénario pédagogique. Une PME de mécanique de précision compte 60 salariés et un CSE. La direction découvre que plusieurs personnes utilisent ChatGPT, dont certaines sur un compte personnel. Le service RH teste un logiciel qui présélectionne les candidatures. Le déroulé suivant tient en trois mois." },
    { type: 'ol', items: [
      "Semaine 1 et 2 : questionnaire anonyme et entretien avec chaque responsable d'équipe. L'inventaire fait apparaître trois familles d'usage : rédaction et synthèse au bureau d'études et aux achats, réponses commerciales, présélection de CV aux RH.",
      "Semaine 3 : la direction tranche. Les données de l'entreprise ne vont plus dans des comptes personnels, des licences professionnelles sont ouvertes pour les équipes qui en ont l'usage, une charte d'une page fixe les règles.",
      "Semaine 4 : le CSE est informé et consulté sur le déploiement, au titre de l'introduction d'une nouvelle technologie (article L2312-8). La charte et le plan de formation lui sont présentés.",
      "Mois 2 : sensibilisation courte pour tous, atelier par métier pour les utilisateurs quotidiens, séance de décision pour l'encadrement. Chaque action entre au registre.",
      "Mois 3 : le logiciel de présélection est isolé comme futur système à haut risque. L'entreprise demande à l'éditeur sa feuille de route pour décembre 2027 et désigne les personnes qui valideront chaque tri.",
    ] },
    { type: 'p', text: "Au bout de trois mois, la PME peut montrer à un contrôleur, à un juge ou à un client ce qu'elle a fait, pour qui et quand. Une obligation de moyens ne demande rien d'autre." },

    { type: 'h2', text: "Le Code du travail demandait déjà de former" },
    { type: 'p', text: `L'AI Act s'ajoute à une obligation française plus ancienne. L'<a href="https://code.travail.gouv.fr/code-du-travail/l6321-1">article L6321-1 du Code du travail</a> impose à l'employeur d'adapter les salariés à leur poste et de maintenir leur capacité à occuper un emploi, au regard de l'évolution des technologies. Quand un outil d'IA change la façon de faire un métier, former les personnes qui l'occupent entre dans ce devoir.` },
    { type: 'p', text: "La formation décidée par l'employeur passe par le plan de développement des compétences. Elle se déroule en principe sur le temps de travail, avec maintien du salaire. Les entreprises de moins de 50 salariés peuvent en faire financer tout ou partie par leur opérateur de compétences (OPCO), si l'organisme de formation est certifié Qualiopi. Le détail des démarches figure dans notre guide pour <a href=\"/blog/financer-formation-ia-opco-qualiopi\">financer une formation IA avec son OPCO</a>." },
    { type: 'p', text: "Le texte européen fixe l'objectif et laisse le format libre. Cette liberté a un prix : c'est à l'entreprise de montrer que ses choix tiennent debout. Un inventaire, des groupes, un registre et une date de mise à jour suffisent à le faire." },
    { type: 'callout', title: "Former vos équipes au cadre et aux outils", text: "Masteria, organisme certifié Qualiopi, anime des formations qui couvrent l'article 4, les niveaux de risque et les usages de chaque métier, avec programme, émargement et certificat de réalisation prêts pour votre registre. Détail du programme sur la page <a href=\"/formation-ai-act\">formation AI Act</a>." },
  ],
  faq: [
    { q: "Une formation IA est-elle obligatoire pour utiliser ChatGPT au travail ?", a: "Oui, au sens de l'article 4 de l'AI Act : l'entreprise doit prendre des mesures pour que les personnes qui utilisent ChatGPT comprennent l'outil et ses risques. Le texte n'impose aucun format. Une session en groupe, un atelier par métier ou un module en ligne suivi d'un échange peuvent convenir s'ils sont adaptés aux usages et documentés. La Commission juge qu'une simple lecture de la notice sera souvent insuffisante." },
    { q: "L'Omnibus de juillet 2026 a-t-il supprimé l'obligation de former ?", a: "Non. Le règlement (UE) 2026/1744 a réécrit l'article 4 : les fournisseurs et les déployeurs doivent toujours prendre des mesures pour développer la maîtrise de l'IA de leur personnel. Le texte précise désormais qu'ils n'ont pas à garantir un niveau individuel. Il ajoute un devoir de soutien pour la Commission et les États membres, en particulier envers les PME." },
    { q: "Faut-il un certificat ou une formation certifiante ?", a: "Non. La Commission écrit qu'aucun certificat n'est nécessaire et qu'un registre interne des formations et des actions d'accompagnement suffit. Le registre gagne à contenir le programme, la liste des participants avec une preuve de présence et la date de la prochaine mise à jour." },
    { q: "Quelle amende risque une entreprise qui n'a formé personne ?", a: "Le règlement ne fixe pas d'amende chiffrée pour l'article 4 : les plafonds de 35 millions, 15 millions et 7,5 millions d'euros visent d'autres obligations, listées à l'article 99. Chaque État membre fixe les sanctions des autres manquements, qui peuvent aller de l'avertissement à l'amende. En septembre 2026, la France n'a pas encore adopté la loi qui désigne ses autorités de contrôle." },
    { q: "Qui contrôle l'article 4 en France ?", a: "La Commission confie ce contrôle aux autorités nationales de surveillance du marché, à partir du 2 août 2026. Le schéma du gouvernement prévoit une coordination par la DGCCRF avec la CNIL et des autorités sectorielles. Ce schéma dépend d'un projet de loi adopté par le Sénat en février 2026, qui attendait encore son examen à l'Assemblée nationale fin septembre 2026." },
    { q: "Nos intérimaires et nos prestataires sont-ils concernés ?", a: "Oui, quand ils utilisent des outils d'IA pour le compte de votre entreprise. L'article 4 vise le personnel et « les autres personnes » qui utilisent les systèmes pour le compte du déployeur, et la Commission cite les prestataires. Pour un prestataire, une clause du contrat peut prévoir qu'il forme lui-même ses intervenants et vous en donne la preuve." },
    { q: "Faut-il refaire la formation chaque année ?", a: "Aucun texte ne fixe de périodicité. Une mise à jour se justifie quand les risques changent : nouvel outil, fonction qui agit à la place de l'utilisateur, incident, arrivée d'une nouvelle équipe. Notez dans le registre l'événement qui déclenchera la prochaine session." },
  ],
  // Remplacent le CTA et les liens de l'ancienne version (promesse d'attestation
  // « adaptée à l'article 4 » retirée : le texte réécrit n'exige aucun certificat).
  cta: {
    title: "Documenter la maîtrise de l'IA de vos équipes",
    desc: "Nos formations sont construites par métier, sur les outils que vos équipes utilisent. Chaque session produit ce qui alimente votre registre interne : programme, émargements, évaluation des acquis. Certifié Qualiopi, finançable OPCO.",
    buttons: [
      { label: "Voir la formation AI Act", href: '/formation-ai-act', primary: true },
      { label: "Parler de votre projet", href: '/contact' },
    ],
  },
  internalLinks: [
    { label: "Formation AI Act (IA Act) pour les entreprises", href: '/formation-ai-act' },
    { label: "Formations IA par métier", href: '/formation-intelligence-artificielle' },
    { label: "Financer sa formation IA avec son OPCO", href: '/blog/financer-formation-ia-opco-qualiopi' },
    { label: "Sécurité IA & RGPD : guide DSI/DPO", href: '/blog/securite-ia-entreprise-rgpd' },
    { label: "Plan de formation IA annuel : la méthode", href: '/blog/plan-formation-ia-annuel-template' },
  ],
  sources: [
    { name: "Règlement (UE) 2024/1689 sur l'intelligence artificielle, articles 3, 4, 5, 26, 50, 99 et 113 (EUR-Lex)", url: EURLEX_AIACT },
    { name: "Règlement (UE) 2026/1744, Omnibus numérique sur l'IA, JO du 24 juillet 2026 (EUR-Lex)", url: EURLEX_OMNIBUS },
    { name: "Commission européenne, AI Literacy : questions and answers, mise à jour du 27 juillet 2026", url: QR_COMMISSION },
    { name: "Commission européenne, répertoire des pratiques de maîtrise de l'IA", url: "https://digital-strategy.ec.europa.eu/en/library/living-repository-foster-learning-and-exchange-ai-literacy" },
    { name: "Direction générale des Entreprises, autorités compétentes pour le règlement IA (septembre 2025)", url: "https://www.entreprises.gouv.fr/priorites-et-actions/transition-numerique/soutenir-le-developpement-de-lia-au-service-de-0" },
    { name: "Sénat, dossier législatif du projet de loi n° 118 (2025-2026), adaptation au droit de l'Union", url: "https://www.senat.fr/dossier-legislatif/pjl25-118.html" },
    { name: "CNIL, questions-réponses sur le règlement européen sur l'IA, mise à jour du 17 août 2026", url: "https://www.cnil.fr/fr/entree-en-vigueur-du-reglement-europeen-sur-lia-les-premieres-questions-reponses-de-la-cnil" },
    { name: "Code du travail, article L6321-1", url: "https://code.travail.gouv.fr/code-du-travail/l6321-1" },
    { name: "Code du travail, article L2312-8", url: "https://code.travail.gouv.fr/code-du-travail/l2312-8" },
    { name: "Ministère du Travail, le plan de développement des compétences", url: "https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences" },
  ],
}
