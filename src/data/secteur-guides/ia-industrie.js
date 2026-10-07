// Contenu propre à /ia-industrie. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : règlements (UE) 2023/1230, 2026/1744, 2024/1689 et 2023/2854 sur EUR-Lex (via le Cellar de l'Office des publications), Microsoft Learn (Copilot, page mise à jour le 01/10/2026), Insee Première n° 2120 (juillet 2026), Cybermalveillance.gouv.fr, Service Public F31422 ; retour de mission : étude de cas « industrie ».
export default {
  slug: 'ia-industrie',
  dateModified: '2026-10-07',
  pagePropre: true,
  secteur: {
    metaTitle: "IA industrie & énergie : performance industrielle | Masteria",
  },
  hero: {
    chips: ["Achats, qualité, méthodes, maintenance", "Règlement Machines au 14 janvier 2027", "Code remis à votre équipe"],
    lien: "Voir les flux d'usine traités",
  },
  offresTitre: {
    kicker: "Trois chantiers pour un site",
    h2: "Nous lisons vos flux, construisons les assistants et automatisons les circuits",
  },
  enjeux: {
    kicker: "Terrain industriel",
    h2: "Dans une usine, l'IA rapporte d'abord autour de la ligne",
    difficultes: "Ce qui ralentit les services d'un site",
    prestations: "Ce que nous construisons pour un industriel",
  },
  regieBloc: {
    kicker: "Régie sur site",
    h2: "Un développeur IA détaché auprès de votre informatique industrielle",
    accroche: "Quand les plans, les gammes ou les relevés de production ne doivent pas quitter l'usine, le développeur travaille chez vous, en atelier ou au bureau d'études, sur vos serveurs et au besoin sur un réseau coupé d'internet.",
    lien: "Comment se cadre une régie chez un industriel",
  },
  formationBloc: {
    kicker: "Former les services",
    h2: "Chaque service s'exerce sur ses propres documents",
    lien: "Parcourir le catalogue des formations",
  },
  faqBloc: {
    h2: "Les questions que posent les industriels",
    texte: "Votre usine a une contrainte que ces réponses ne couvrent pas ?",
    lien: "Décrivez-la-nous",
  },
  maillage: {
    h2: "Secteurs voisins de l'industrie",
  },
  cta: {
    titre: "Quel circuit de votre usine outiller en premier ?",
    texte: "Indiquez-nous le service qui ressaisit le plus et les logiciels qu'il utilise : ERP, GED, MES. Nous vous répondons sous 24 heures pour fixer les 30 minutes de cadrage offertes, et nous choisissons ensemble le premier circuit.",
  },
  equipe: {
    titre: "Un fondateur qui pilote, des spécialistes réunis pour votre site",
    texte: "Mathias Nizan a fondé Masteria à Lyon en 2022 et pilote chaque mission. Pour un industriel, il réunit selon le projet des consultants qui lisent les flux d'un site, des développeurs qui branchent les assistants sur l'ERP et des formateurs qui animent les ateliers des services, tous indépendants. Masteria ne revend aucune licence : entre Copilot, un modèle hébergé chez vous et un développement, le choix suit vos contraintes.",
  },
  intro: "Dans une usine, l'IA générative rapporte d'abord dans les bureaux qui entourent la ligne : les achats, la qualité, les méthodes, la maintenance. Elle lit un mail fournisseur, prépare une fiche d'écart ou retrouve la bonne version d'une gamme. Sur la machine, le droit change le 14 janvier 2027, date d'application du règlement (UE) 2023/1230 sur les machines, qui encadre les fonctions de sécurité capables d'apprendre. Masteria est un cabinet IA fondé à Lyon : nous traitons ces deux terrains séparément, développons les outils sur vos fichiers et vos droits d'accès, puis formons les équipes qui les reprennent.",

  offresIntro: [
    "Pour un industriel, nous séparons d'emblée deux terrains : les documents qui circulent entre les services, où l'IA générative entre vite, et la machine, où toute fonction de sécurité relève d'une évaluation de conformité.",
    "Le premier terrain se prête à des projets courts, sur vos fichiers et dans vos outils : l'ERP (le logiciel de gestion intégré), la GED (la gestion électronique des documents), Microsoft 365. Le second se prépare avec le bureau d'études et, pour une fonction de sécurité, avec l'organisme notifié (le tiers habilité à certifier la machine), sur un calendrier que fixent les règlements européens. Pour chaque terrain, une proposition forfaitaire fixe par écrit, avant signature, ce que nous livrons, quand et pour quel budget.",
  ],

  offres: [
    {
      title: "Diagnostic des flux d'un site",
      cta: "Notre démarche de conseil",
      desc: "Nous diagnostiquons un site ou une fonction flux par flux : achats, qualité, méthodes, maintenance, administration des ventes. Pour chaque service, nous relevons ce qui est ressaisi, cherché ou recopié, puis nous classons les cas par gain et par risque. La feuille de route sépare les usages de bureau des projets qui touchent un équipement, et nomme pour chacun le texte applicable : règlement Machines, Data Act ou règlement sur l'IA.",
      points: ["Lecture des flux entre services", "Revue des droits d'accès avant Copilot", "Calendrier réglementaire 2027-2028"],
    },
    {
      title: "Des assistants dans vos logiciels de production",
      cta: "Ce que fait notre équipe de développement",
      secondaryCta: "Exemples d'outils construits par métier",
      desc: "Nos assistants travaillent dans vos outils : extraction d'un mail fournisseur vers la fiche de l'ERP, recherche dans les gammes et les rapports d'intervention, brouillon d'un rapport 8D (la méthode de traitement d'une réclamation en huit étapes) à partir des relevés. Chaque assistant cite le document source et s'arrête avant toute écriture qui engage : coordonnées bancaires, statut d'un lot, validation d'une gamme. Son code reste chez vous, avec la liste des champs qu'il a le droit de remplir.",
      points: ["Assistants branchés sur l'ERP et la GED", "Arrêt avant chaque écriture sensible", "Code source et documentation remis"],
    },
    {
      title: "Circuits automatisés entre services",
      cta: "Comment nous automatisons un processus",
      desc: "Nous automatisons les circuits répétitifs entre services : demande d'achat, création d'article, réclamation client, demande de dérogation qualité. La collecte des pièces, le contrôle de complétude et la relance deviennent automatiques, avec une validation humaine à chaque étape qui l'exige. Le temps rendu se mesure sur vos propres compteurs, relevés avant le démarrage.",
      points: ["Création d'articles et de fournisseurs", "Dérogations et réclamations qualité", "Compteurs relevés avant et après"],
    },
  ],

  regie: [
    "En régie, le développeur détaché travaille avec vos comptes et dans vos environnements de test, sur les systèmes propres à l'usine : le MES (le logiciel qui pilote et trace la production), l'historique de maintenance, le PLM (la base des données produit et des plans). Il documente chaque connecteur pour que votre équipe d'informatique industrielle le maintienne. Une migration d'ERP en cours, par exemple vers S/4HANA (la dernière génération de l'ERP de SAP), se prête bien à ce format : les assistants suivent le nouveau modèle de données dès sa mise en place.",
  ],

  formation: [
    "Les usages tiennent quand chaque service a travaillé sur ses propres pièces : l'acheteur sur un vrai mail fournisseur, le qualiticien sur une fiche de non-conformité, le technicien sur un rapport d'intervention, le contrôleur de gestion sur un export de l'ERP. Nous construisons les ateliers sur ces documents, dans l'outil que l'entreprise a retenu, avec un temps réservé à la construction d'un premier assistant par participant.",
    "L'article 4 du règlement sur l'IA, dans sa rédaction issue de l'omnibus de l'été 2026, demande aux entreprises qui déploient ces outils de prendre des mesures pour que leur personnel maîtrise l'IA. Une formation construite sur vos usages, avec une trace écrite, est l'une de ces mesures. Pour vos acheteurs, qualiticiens et techniciens, une journée en intra coûte 1 980 € HT. Comme Masteria est certifié Qualiopi au titre des actions de formation, l'OPCO de votre branche peut la financer selon ses règles et ses fonds ; le conseil et le développement restent hors de ce financement.",
  ],

  guide: {
    kicker: "Guide industrie et énergie",
    h2: "L'IA d'une usine avance sur deux terrains : les documents des services dès maintenant, la machine au rythme du règlement Machines",
    lead: "En 2025, 17 % des entreprises de l'industrie manufacturière de 10 salariés ou plus déclarent utiliser au moins une technologie d'IA, contre 7 % en 2024, selon l'Insee : le taux a plus que doublé en un an. Sur la machine, le droit avance à son propre rythme. Le règlement (UE) 2023/1230 sur les machines s'applique le 14 janvier 2027, et l'omnibus numérique, le règlement (UE) 2026/1744 entré en vigueur le 27 juillet 2026, lui confie les exigences visant l'IA qui assure une fonction de sécurité. Un dirigeant industriel gagne à traiter ces deux sujets séparément.",
    sections: [
      {
        h3: "Le premier gain se trouve dans les échanges entre services",
        paras: [
          "Un site industriel produit chaque jour des documents que personne ne compte : la fiche d'un nouveau fournisseur, la demande de dérogation qualité, le rapport d'intervention, la réponse au questionnaire d'un client, la mise à jour d'une gamme après un changement d'outillage. Chacun passe par plusieurs services, et une partie du temps part en ressaisie entre un mail, un tableur et l'ERP. Ces tâches sont fréquentes et faciles à vérifier. Elles font de bons premiers cas, parce qu'une erreur se voit au contrôle suivant.",
          "La fiche fournisseur montre le mécanisme. Avant le premier paiement, l'acheteur réunit un extrait Kbis (la carte d'identité de l'entreprise au registre du commerce), un RIB, des contacts et, pour tout contrat d'au moins 5 000 € HT, une attestation de vigilance de l'Urssaf. Cette attestation vaut six mois et se renouvelle pendant toute la durée de la prestation, rappelle Service Public. Un assistant lit le mail et ses pièces jointes, remplit les champs et signale une attestation périmée. La création du fournisseur dans l'ERP reste une validation humaine.",
        ],
      },
      {
        h3: "Copilot hérite des droits d'accès de chaque salarié",
        paras: [
          "Dans une entreprise équipée de Microsoft 365, Microsoft Copilot (anciennement Microsoft 365 Copilot) repose sur une règle écrite dans sa documentation : il n'affiche que les données pour lesquelles l'utilisateur dispose au minimum d'un droit de lecture. Il y accède par Microsoft Graph, la couche qui relie les mails, fichiers, agendas et conversations du compte. Microsoft précise que les requêtes, les réponses et les données lues par ce chemin restent hors de l'entraînement de ses modèles de fondation.",
          "Pour une usine, cette règle a deux conséquences. Un site SharePoint partagé trop largement, avec des grilles de salaires ou des prix d'achat, devient interrogeable par tous ceux qui y ont accès. Les plans et procédures rangés sur un serveur de fichiers local restent hors de portée, sauf connecteur. La revue des droits précède donc le déploiement. Autre détail de la documentation : les modèles d'Anthropic, que Copilot propose en option, sortent de la frontière européenne des données, et votre administrateur choisit de les activer ou non.",
        ],
      },
      {
        h3: "La machine change de régime le 14 janvier 2027",
        paras: [
          "Le règlement (UE) 2023/1230 remplace la directive 2006/42/CE à cette date. Son annexe I soumet à une évaluation de conformité par un tiers deux catégories nouvelles : les composants de sécurité au comportement totalement ou partiellement auto-évolutif, qui utilisent l'apprentissage automatique, et les machines qui intègrent de tels systèmes. Le texte vise la fonction de sécurité. Un système de vision qui continue d'apprendre en service et commande l'arrêt d'un robot en relève ; un assistant qui rédige un rapport d'intervention n'en relève pas.",
          "Le règlement omnibus (UE) 2026/1744 a ensuite simplifié l'articulation avec le règlement sur l'IA. Le règlement Machines passe de la section A à la section B de l'annexe I de ce texte, et la Commission doit ajouter à l'annexe III du règlement Machines les exigences propres aux systèmes d'IA à haut risque, par des actes délégués applicables au plus tard le 2 août 2028. Pour un fabricant de machines, la feuille de route IA et le dossier de marquage CE se préparent donc ensemble, sur le même calendrier.",
          "Le règlement Machines autorise aussi la notice d'instructions au format numérique (article 10). Elle doit alors se télécharger, s'imprimer et rester en ligne pendant la durée de vie prévue de la machine, et au moins dix ans. L'acheteur qui la demande sur papier au moment de l'achat la reçoit sans frais sous un mois. Un assistant de rédaction de notices doit donc produire un document stable, versionné et rattaché à un modèle précis, que le bureau d'études relit avant toute mise en ligne.",
        ],
      },
      {
        h3: "Les données de vos machines deviennent accessibles par défaut",
        paras: [
          "Le règlement (UE) 2023/2854 sur les données, dit Data Act, s'applique depuis le 12 septembre 2025. Son article 3 impose que les produits connectés mis sur le marché après le 12 septembre 2026 rendent les données produites par leur usage accessibles par défaut à l'utilisateur, sans frais, dans un format structuré et lisible par machine. Avant la vente, le vendeur doit indiquer le type, le format et le volume estimé des données que l'équipement peut générer.",
          "Pour un projet d'assistant de maintenance, ce texte change la négociation avec les constructeurs d'équipements. Les historiques d'alarmes et de compteurs, quand ils sont stockés chez le constructeur, deviennent une donnée que l'exploitant peut obtenir par une simple demande électronique (article 4). Nous ajoutons cette question au cahier des charges d'achat des machines neuves, avec le format attendu. Un assistant qui croise ces historiques avec vos rapports d'intervention part alors de faits mesurés.",
        ],
      },
      {
        h3: "Dans l'énergie, l'IA qui sert de composant de sécurité du réseau est classée à haut risque",
        paras: [
          "Dans le secteur de l'énergie, de l'eau et des déchets, 19 % des entreprises déclarent utiliser l'IA en 2025, et elles emploient 80 % des salariés du secteur, selon l'Insee. L'IA y est d'abord l'affaire des grands opérateurs. Le règlement (UE) 2024/1689 classe à haut risque, dans son annexe III, les systèmes d'IA utilisés comme composants de sécurité dans la gestion et l'exploitation de la fourniture d'eau, de gaz, de chauffage ou d'électricité. Pour un gestionnaire de réseau, ces obligations deviennent applicables le 2 décembre 2027.",
          "Les cas documentaires de cette page s'y appliquent tels quels : procédures d'exploitation, comptes rendus d'intervention, réponses aux appels d'offres, veille réglementaire. Ils restent hors de l'annexe III tant qu'ils ne commandent rien sur le réseau : un assistant qui aide un exploitant à retrouver une consigne n'a pas le statut d'un modèle qui pilote une vanne ou un poste électrique. Nous fixons cette limite par écrit au cadrage, avec le responsable de la sécurité des systèmes d'information, et nous choisissons l'hébergement en conséquence.",
        ],
      },
    ],
    table: {
      caption: "Six documents d'usine : ce que l'IA prépare, ce qui reste à valider",
      headers: ["Document", "Service", "Ce que l'IA prépare", "Ce qui reste humain"],
      rows: [
        ["Fiche fournisseur (Kbis, RIB, attestation de vigilance)", "Achats et comptabilité", "Extraction des pièces du mail, contrôle des dates de validité", "Création dans l'ERP ; tout changement de RIB suit une validation non dérogeable"],
        ["Rapport 8D sur une réclamation client", "Qualité", "Chronologie, relevés et première analyse des causes à partir des données", "Choix des actions correctives et signature"],
        ["Gamme opératoire après une modification", "Méthodes", "Repérage des opérations touchées et proposition de mise à jour", "Validation de la gamme et diffusion à l'atelier"],
        ["Rapport d'intervention de maintenance", "Maintenance", "Rédaction depuis les notes du technicien, rattachement à l'équipement", "Diagnostic et décision de remise en service"],
        ["Notice d'instructions d'une machine", "Bureau d'études", "Brouillon versionné par modèle, cohérence avec le dossier technique", "Analyse de risques, marquage CE, mise en ligne"],
        ["Questionnaire qualité ou RSE d'un client", "Administration des ventes et qualité", "Préremplissage depuis les certificats et les réponses déjà validées", "Relecture de chaque engagement chiffré"],
      ],
    },
    cas: {
      h3: "Retour de mission : un groupe du packaging prépare Copilot sur ses propres fichiers",
      contexte: "Le groupe est un industriel international du packaging, avec des sites en Europe, aux États-Unis et en Inde. Le choix de Copilot vient de l'informatique du groupe, qui abandonne son assistant conversationnel interne au moment où l'ERP migre vers S/4HANA, la dernière génération de SAP. Le premier palier vise 24 managers pilotes, qui doivent rentrer au bureau avec des usages tirés de leur propre poste.",
      etapes: [
        "Avant tout atelier, le périmètre de Copilot est fixé avec le Data manager et les référents métiers, à distance puis lors d'une journée sur site : OneDrive et SharePoint entrent, les serveurs partagés restent dehors.",
        "Les exercices partent des fichiers du groupe : treize ateliers, dont plusieurs sur de gros classeurs Excel (prix, activité, coûts, base RH).",
        "Un atelier traite le référencement fournisseur : à partir d'un vrai mail de fournisseur, l'assistant isole le Kbis, le RIB et les contacts qui serviront à créer la fiche dans SAP.",
        "Entre les deux sessions, le bilan à chaud de la première apporte trois corrections à la seconde : licences vérifiées, tables composées par métier, temps réservé à la construction des assistants.",
        "Le comité de direction consacre ensuite une matinée, en anglais, aux décisions qui lui reviennent : les données à exclure, l'audit des accès, le premier cas d'agent, le financement de l'adoption.",
      ],
      resultatLabel: "Deux mois plus tard.",
      resultat: "Les managers citent des usages tirés de leur poste : un fichier d'activité passé au crible, une présentation préparée pour un directeur d'usine, un appel d'offres décortiqué avant la réponse. Une partie des participants réclame déjà le niveau suivant, avec les données SAP et la Power Platform. Le Data manager garde la main sur la politique d'usage et sur les prompts partagés. Trois sessions ont suivi en septembre 2026, dont deux en anglais ; les sites américains et mexicains sont programmés pour octobre 2026, le site indien pour décembre. Pour un autre industriel, l'enseignement tient en une règle : fixer le périmètre des droits d'accès avant le premier atelier.",
      lien: { href: "/etudes-de-cas-ia#industrie", label: "Le déploiement Copilot du groupe du packaging, palier par palier" },
    },
    pieges: [
      {
        titre: "Laisser un assistant écrire un RIB dans l'ERP",
        texte: "Cybermalveillance.gouv.fr décrit l'escroquerie qui usurpe l'identité d'un fournisseur pour communiquer de nouvelles coordonnées bancaires, parfois depuis sa messagerie piratée. Un assistant qui lit ce mail le traite comme un autre. Le changement de RIB suit une procédure de vérification et de validation hiérarchique non dérogeable, et ce champ reste fermé à l'écriture automatique.",
      },
      {
        titre: "Déployer Copilot sur des droits jamais revus",
        texte: "Copilot respecte les droits existants, y compris les partages trop larges. Un dossier de rémunérations ouvert à tout un site devient une réponse possible à une question anodine. La revue des sites et des groupes SharePoint se fait avant l'ouverture des licences.",
      },
      {
        titre: "Confondre aide au diagnostic et fonction de sécurité",
        texte: "Un assistant qui conseille le technicien reste un outil d'aide. Dès qu'un système qui apprend en service commande un arrêt ou une protection, le règlement Machines exige une évaluation de conformité par un tiers. Le cahier des charges doit le dire avant le premier prototype.",
      },
      {
        titre: "Commander une machine sans clause sur ses données",
        texte: "Le Data Act impose l'accès par défaut aux données des produits connectés mis sur le marché après le 12 septembre 2026. Si la commande ne précise ni le format ni le mode d'accès, l'exploitant découvre l'export après la livraison, et le projet de maintenance prend du retard.",
      },
      {
        titre: "Annoncer un gain sans compteur de départ",
        texte: "Le temps rendu se mesure sur vos chiffres : fiches fournisseurs créées par semaine, délai de traitement d'une réclamation, reprises de gamme. Relevez-les avant le démarrage. Faute de ce point de départ, personne ne pourra dire ce que l'outil a changé.",
      },
    ],
  },

  faq: [
    {
      q: "Par quel cas commencer dans une PME industrielle ?",
      a: "Par un circuit entre deux services, fréquent et facile à vérifier : création de fournisseurs ou d'articles, rapports d'intervention, réponses aux questionnaires des clients. Ces cas se testent sur l'historique de l'entreprise, à l'écart de la production, et une erreur se repère au contrôle suivant. Les projets sur la machine viennent ensuite, avec le bureau d'études et, pour une fonction de sécurité, l'organisme notifié.",
    },
    {
      q: "Le règlement sur l'IA s'applique-t-il à nos assistants de bureau ?",
      a: "Pour un assistant qui rédige, résume ou classe des documents internes, l'obligation qui s'applique déjà est l'article 4 : prendre des mesures pour favoriser la maîtrise de l'IA par le personnel. Les obligations du haut risque visent d'autres usages, listés à l'annexe III comme le recrutement ou l'évaluation des salariés, ou liés aux produits de l'annexe I. Elles s'appliquent à partir du 2 décembre 2027 pour les premiers et du 2 août 2028 pour les seconds.",
    },
    {
      q: "Nos plans et nos procédés peuvent-ils rester chez nous ?",
      a: "Oui. Les plans de fabrication peuvent rester sur vos serveurs, traités par un modèle à poids ouverts (un modèle que l'on télécharge et fait tourner soi-même), pendant que les procédures affichées à l'atelier passent par votre environnement Microsoft 365. Nous classons vos documents par niveau de sensibilité au cadrage, avec votre responsable informatique, et l'architecture suit ce classement.",
    },
    {
      q: "Combien coûte un projet IA dans l'industrie ?",
      a: "Trois éléments font le prix : le nombre de systèmes à raccorder (ERP, GED, MES), l'état des documents et le niveau de contrôle exigé avant chaque écriture. Le forfait se fixe après le cadrage, dans une proposition qui liste les circuits couverts et les compteurs de mesure. Un premier assistant pour la création des fournisseurs reste un engagement mesuré ; un déploiement sur plusieurs usines, raccordé à l'ERP et au MES, passe la barre des 100 000 € et peut monter à quelques centaines de milliers d'euros. Le premier circuit se choisit pendant les 30 minutes de cadrage offertes.",
    },
    {
      q: "L'OPCO peut-il financer le conseil ou le développement ?",
      a: "Non, seule la formation peut l'être. Votre OPCO peut financer les ateliers de vos acheteurs, qualiticiens et techniciens de maintenance, car la certification Qualiopi de Masteria porte sur les actions de formation. Le diagnostic des flux, la conception des assistants et leur raccordement à l'ERP se facturent comme des prestations de service. Selon votre taille et votre région, des aides publiques au conseil peuvent exister ; le cadrage sert aussi à les identifier.",
    },
    {
      q: "Que change le Data Act pour un projet de maintenance ?",
      a: "Pour une machine connectée mise sur le marché après le 12 septembre 2026, le constructeur doit rendre les données d'usage accessibles par défaut, sans frais et dans un format lisible par machine. Depuis le 12 septembre 2025, l'utilisateur qui ne peut pas y accéder directement peut aussi les demander au détenteur (article 4). Ces historiques alimentent l'assistant de maintenance ; leur format se précise dès la commande de l'équipement.",
    },
    {
      q: "Intervenez-vous sur plusieurs sites, en France et à l'étranger ?",
      a: "Oui. Depuis nos bureaux de Lyon, nous venons dans l'usine pour le cadrage, l'observation des flux et la passation ; le reste du projet se mène à distance. Le groupe du packaging décrit plus haut a validé son dispositif en France, l'a repris en anglais en septembre 2026, et l'emmène sur ses sites américains et mexicains en octobre 2026, puis en Inde en décembre.",
    },
    {
      q: "Qui garde la main sur l'outil après la mission ?",
      a: "Votre équipe. À la fin de la mission, vous recevez le code source et sa documentation, et un référent interne a appris à corriger une consigne, à ajouter un type de document et à lire les journaux. Chez l'industriel du packaging, c'est le Data manager qui tient ce rôle : il fait vivre la politique d'usage et les prompts des managers pilotes.",
    },
  ],

  sources: [
    { name: "EUR-Lex : règlement (UE) 2023/1230 sur les machines (articles 10 et 54, annexe I)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32023R1230" },
    { name: "EUR-Lex, omnibus (UE) 2026/1744 : le règlement Machines passe en section B de l'annexe I", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1744" },
    { name: "EUR-Lex, règlement (UE) 2024/1689 : les réseaux d'énergie et d'eau dans l'annexe III", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689" },
    { name: "EUR-Lex : règlement (UE) 2023/2854 sur les données, dit Data Act (articles 3, 4 et 50)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32023R2854" },
    { name: "Microsoft Learn : ce que Copilot lit dans Microsoft Graph, et avec quels droits", url: "https://learn.microsoft.com/fr-fr/microsoft-365/copilot/microsoft-365-copilot-privacy" },
    { name: "Insee Première n° 2120 (juillet 2026) : l'IA dans l'industrie manufacturière et l'énergie", url: "https://www.insee.fr/fr/statistiques/9025878" },
    { name: "Cybermalveillance.gouv.fr : l'escroquerie aux faux ordres de virement (FOVI)", url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/escroquerie-faux-ordres-virement-fovi" },
    { name: "Service Public Entreprendre : comment obtenir une attestation de vigilance", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F31422" },
  ],
}
