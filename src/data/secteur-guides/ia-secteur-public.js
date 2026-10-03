// Contenu propre à /ia-secteur-public. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Légifrance (décret n° 2025-1386, CCP art. R. 2121-1, R. 2122-8 et R. 2122-9-1, CRPA art. L. 311-3-1 et L. 312-1-3, loi n° 2024-449 art. 31, CCAG-TIC du 30 mars 2021), collectivites-locales.gouv.fr (seuils 2026-2027), guides.ia.numerique.gouv.fr (guide d'usage DINUM mis à jour le 04/06/2026, Albert API), EUR-Lex (règlement (UE) 2024/1689, omnibus (UE) 2026/1744) ; retour de mission : étude de cas « conseil-financier ».
export default {
  slug: 'ia-secteur-public',
  dateModified: '2026-10-03',
  intro: "Un projet d'IA dans une administration se décide avant la première ligne de code, dans trois textes. Le code de la commande publique fixe la façon de l'acheter. Le guide d'usage de l'État, publié par la DINUM en juin 2026, dit quels outils les agents peuvent utiliser et avec quelles données. Le code des relations entre le public et l'administration s'applique dès qu'une décision individuelle s'appuie sur un algorithme. Basé à Lyon, Masteria cadre ces trois points avec vos services juridique, achats et numérique, puis développe l'outil dans l'environnement que vos données autorisent.",

  offresIntro: [
    "Pour une administration, une collectivité ou un établissement public, nos trois métiers suivent l'ordre d'un projet public. Le conseil prépare la décision et l'achat ; le développement livre ensuite un outil hébergé là où vos données ont le droit d'aller, et chaque automatisation laisse à l'agent la validation de ce qui part vers un usager.",
    "Chaque proposition est écrite pour entrer dans votre procédure, avec un périmètre, des livrables, un calendrier et un prix forfaitaire ; le tout se découpe en tranches quand le projet avance par étapes. Le code source et la documentation vous sont remis à la passation : vos équipes, ou un autre prestataire, peuvent ensuite maintenir et faire évoluer l'outil.",
  ],

  offres: [
    {
      desc: "Nous cadrons le besoin avant toute consultation : cas d'usage, données concernées, textes applicables (guide d'usage de l'État, RGPD, règlement européen sur l'IA, transparence des algorithmes publics) et estimation de la valeur du besoin avec votre service achats. Vous obtenez une note d'aide à la décision que votre direction peut arbitrer et que votre acheteur peut traduire en procédure.",
      points: ["Cadrage du besoin et des données", "Analyse des textes applicables par usage", "Note d'aide à la décision"],
    },
    {
      desc: "Nous développons des outils branchés sur vos référentiels : relecture d'un dossier de consultation avant publication, recherche dans vos délibérations et vos règlements, préparation de réponses aux usagers. Pour un ministère ou un opérateur de l'État, l'outil peut appeler Albert API avec la clé de l'administration ; pour une collectivité, nous choisissons avec la DSI un hébergement et un modèle adaptés à ses données.",
      points: ["Outils sur vos référentiels", "Branchement possible sur Albert API", "Journal des échanges dans l'application"],
    },
    {
      desc: "Nous automatisons les étapes répétitives d'un circuit administratif : contrôle de complétude des pièces d'un dossier, extraction des données d'un formulaire, préparation d'un tableau d'analyse, relance d'un service instructeur. Un agent valide chaque sortie qui part vers un usager ou qui prépare une décision, et chaque automatisation est documentée pour votre contrôle interne.",
      points: ["Contrôle de complétude des dossiers", "Validation par un agent", "Documentation pour le contrôle interne"],
    },
  ],

  regie: [
    "En régie, le développeur IA travaille dans vos locaux et sur vos environnements, avec les droits d'accès que votre service de sécurité informatique lui ouvre, et aucune donnée ne quitte votre système d'information. La régie s'achète comme toute prestation, par un marché ou par un bon de commande sur un accord-cadre existant : notre offre précise le profil, la durée, le lieu d'exécution et les livrables, pour que votre service achats puisse la comparer et en contrôler l'exécution.",
  ],

  formation: [
    "Le guide d'usage de l'État fait de la formation son cinquième principe et oriente les agents vers le Campus du numérique public et la plateforme Mentor. Nos ateliers prolongent ces ressources sur vos propres documents : les acheteurs apprennent à relire un dossier de consultation avec un assistant, les instructeurs à vérifier une réponse sourcée, les agents d'accueil à préparer un courrier clair.",
    "Masteria est certifié Qualiopi au titre des actions de formation ; la journée intra est facturée 1 980 € HT pour le groupe. L'OPCO finance la formation des salariés de droit privé : une administration règle la session sur son propre budget de formation, et un établissement public qui emploie des salariés de droit privé vérifie son cas avec nous au cadrage.",
  ],

  guide: {
    kicker: "Guide secteur public",
    h2: "Un outil d'IA public se joue avant le code : dans l'achat, dans le choix des données et dans la motivation des décisions",
    lead: "Depuis le 1er avril 2026, un acheteur public peut commander pour moins de 60 000 € HT de services sans publicité ni mise en concurrence préalables, contre 40 000 € auparavant (décret n° 2025-1386 du 29 décembre 2025). Ce seuil couvre un cadrage ou un premier outil de périmètre étroit. Deux mois plus tard, la DINUM a mis en ligne un guide d'usage de l'IA pour les agents de l'État, qui réserve les outils commerciaux aux informations publiables. Entre ces deux textes, chaque projet se joue sur trois questions : comment l'acheter, où vont les données, qui répond de la décision.",
    sections: [
      {
        h3: "La procédure se choisit sur la valeur totale du besoin",
        paras: [
          "L'article R. 2122-8 du code de la commande publique autorise, depuis le 1er avril 2026, un marché sans publicité ni mise en concurrence préalables sous 60 000 € HT pour les fournitures et les services. L'acheteur doit y choisir une offre pertinente, faire bon usage des deniers publics et éviter de contracter systématiquement avec le même opérateur. La valeur se calcule sur le montant total des marchés envisagés, options et reconductions comprises (article R. 2121-1) : un déploiement prévu dès le départ entre dans le calcul.",
          "Une solution innovante ouvre une seconde voie. L'article R. 2122-9-1 permet de commander sans publicité ni mise en concurrence des services innovants sous 100 000 € HT. Au-delà viennent la procédure adaptée puis, en 2026 et 2027, les procédures formalisées à partir de 140 000 € HT pour les pouvoirs adjudicateurs centraux, comme les services de l'État, et de 216 000 € HT pour les autres pouvoirs adjudicateurs, dont les collectivités. Notre offre reste lisible dans chacun de ces cadres, avec un prix par tranche quand le projet se découpe.",
        ],
      },
      {
        h3: "Le guide de l'État fixe les outils autorisés et la mention à porter",
        paras: [
          "Le guide d'usage de l'IA pour les agents publics de l'État, rédigé par la DINUM avec la DITP et la DGAFP, pose cinq principes. Le deuxième règle le choix de l'outil : un outil commercial comme ChatGPT, Claude ou Gemini doit rester exceptionnel, et n'est possible que si l'administration l'autorise explicitement et si les informations traitées pourraient être publiées librement sur Internet. Quand une charte ministérielle existe, elle s'applique en priorité.",
          "Le troisième principe impose la transparence. Un contenu produit par l'IA, même retouché ensuite, porte une mention ; pour un document externe, le guide recommande « Contenu partiellement généré par une IA et vérifié par un agent ». Le même texte range parmi les pratiques à proscrire la configuration d'un outil qui envoie seul des courriels aux usagers. Ce guide vise les agents de l'État ; une collectivité qui rédige sa propre charte y trouve une base solide, que nous adaptons à ses services.",
        ],
      },
      {
        h3: "Les données décident de l'hébergement, et l'État dispose de sa propre infrastructure",
        paras: [
          "L'article 31 de la loi du 21 mai 2024 visant à sécuriser et réguler l'espace numérique, dite SREN, s'impose aux administrations de l'État, à leurs opérateurs et à certains groupements d'intérêt public qui recourent au cloud d'un prestataire privé. Pour les données d'une sensibilité particulière, celles qui relèvent d'un secret protégé par la loi ou des missions essentielles de l'État, l'offre doit les protéger contre tout accès d'autorités d'États tiers que n'autorise pas le droit de l'Union ou d'un État membre.",
          "Pour ces administrations, Albert API fournit l'inférence (l'exécution du modèle) sur des infrastructures de l'État et un cloud qualifié SecNumCloud, sans conserver le contenu des requêtes. Une entreprise peut y brancher l'outil qu'elle développe pour une administration cliente, avec la clé de cette administration. Conséquence pratique : la DINUM ne garde aucune trace du contenu des échanges, et la journalisation exigée par vos règles de traçabilité se construit donc dans l'application. Le service est réservé à la fonction publique d'État ; une collectivité n'y accède pas en principe.",
        ],
      },
      {
        h3: "Une décision individuelle appelle une mention, des règles publiées et bientôt une analyse d'impact",
        paras: [
          "L'article L. 311-3-1 du code des relations entre le public et l'administration impose qu'une décision individuelle prise sur le fondement d'un traitement algorithmique comporte une mention explicite, et que les règles du traitement soient communiquées à l'intéressé qui les demande. L'article L. 312-1-3 ajoute la publication en ligne des règles des principaux traitements qui fondent des décisions individuelles. Le guide de la DINUM conseille en plus de garder trace de l'outil utilisé, de sa proposition, de la décision prise et de ses motifs.",
          "Le règlement européen sur l'IA classe à haut risque les systèmes qui évaluent l'éligibilité aux prestations d'aide sociale essentielles, ou qui octroient, réduisent ou récupèrent ces prestations (annexe III, point 5 a). Depuis l'omnibus numérique (règlement 2026/1744), ces obligations s'appliquent à partir du 2 décembre 2027, et l'article 27 y ajoute pour les organismes publics une analyse d'impact sur les droits fondamentaux avant tout déploiement. L'article 6 laisse une issue à l'outil cantonné à une tâche préparatoire : il échappe au haut risque s'il ne profile pas le demandeur et si son fournisseur consigne cette appréciation avant la mise en service.",
        ],
      },
      {
        h3: "Le premier projet rentable relit le dossier de consultation avant sa publication",
        paras: [
          "Un dossier de consultation réunit le règlement de la consultation, le cahier des clauses administratives particulières (CCAP), le cahier des clauses techniques particulières (CCTP) et, selon le marché, un bordereau des prix unitaires (la liste des prix à remplir). Une incohérence entre ces pièces coûte des questions de candidats, un avis rectificatif, parfois un report de la date limite. Un assistant de relecture vérifie avant publication que chaque critère de jugement renvoie à une exigence du CCTP, que les lignes du bordereau couvrent les prestations décrites et que les dates concordent.",
          "Ce premier projet satisfait les règles vues plus haut : les pièces sont destinées à être publiées, ne contiennent en principe aucune donnée personnelle et ne fondent aucune décision individuelle. Le gain se mesure sur vos propres procédures : questions reçues par consultation, avis rectificatifs, heures de relecture. Certains candidats lisent déjà vos critères avec des assistants, comme le montre le retour de mission plus bas : un critère vague leur fait produire des réponses génériques, un critère qui demande des engagements vérifiables départage mieux les offres.",
          "Le même outil s'étend ensuite à la préparation du rapport d'analyse des offres : il range les réponses de chaque candidat critère par critère, signale les pièces manquantes et repère les erreurs de calcul dans les tableaux de prix. La notation reste entre les mains de l'acheteur et, s'il y a lieu, de la commission d'appel d'offres, et le rapport indique quelle part du travail l'outil a préparée.",
        ],
      },
    ],
    table: {
      caption: "Six usages publics de l'IA et la règle qui les encadre",
      headers: ["Usage", "Texte applicable", "Ce que le projet doit prévoir"],
      rows: [
        ["Achat d'un cadrage ou d'un premier outil sous 60 000 € HT", "Code de la commande publique, art. R. 2122-8, depuis le 1er avril 2026", "Un besoin estimé en entier et une comparaison d'offres pour ne pas contracter toujours avec le même opérateur"],
        ["Service innovant sous 100 000 € HT", "Code de la commande publique, art. R. 2122-9-1", "La démonstration du caractère innovant de la solution"],
        ["Courrier à un usager rédigé en partie par l'IA", "Guide d'usage de l'IA de l'État, principe 3", "La mention « Contenu partiellement généré par une IA et vérifié par un agent » et un envoi fait par l'agent"],
        ["Décision individuelle appuyée sur un algorithme", "CRPA, art. L. 311-3-1 et L. 312-1-3", "Une mention explicite dans la décision et des règles publiées en ligne"],
        ["Instruction d'une prestation d'aide sociale", "Règlement (UE) 2024/1689, annexe III, point 5 a", "Un système à haut risque dès le 2 décembre 2027 et une analyse d'impact sur les droits fondamentaux"],
        ["Données sensibles de l'État confiées à un cloud privé", "Loi n° 2024-449, art. 31", "Une offre protégée contre l'accès d'autorités d'États tiers, ou Albert API pour l'inférence"],
      ],
    },
    cas: {
      h3: "Retour de mission : des assistants qui lisent un dossier de consultation comme un jury",
      contexte: "Un cabinet indépendant de conseil financier travaille depuis plus de quarante ans pour des collectivités, des syndicats mixtes et des sociétés d'économie mixte, sur des montages financiers, des délégations de service public ou des projets d'énergies renouvelables. Il répond chaque année à un volume important de consultations, où les offres se ressemblent souvent sur le fond et se départagent à la rédaction. Il voulait produire plus vite et garder les données des marchés hors de tout outil grand public. Pour un acheteur public, cette mission montre comment un candidat outillé lit désormais vos pièces.",
      etapes: [
        "Classer les consultations du cabinet par pôle d'expertise et décrire, dans un cahier de cadrage, la façon dont chaque mémoire technique se rédige.",
        "Construire quatre assistants, un par famille de marchés : mobilité et infrastructures, aménagement et immobilier public, délégations de service public eau et déchets, énergies renouvelables et financement.",
        "Nourrir chaque assistant des notes d'analyse de dossiers de consultation, des mémoires les mieux notés par les jurys et des références détaillées du cabinet.",
        "Inscrire une règle dans chaque assistant : avant de rédiger, il interroge le consultant sur le client, ses priorités, les références et l'équipe, puis demande son avis sur chaque méthodologie proposée.",
        "Écrire et tester les consignes en quatre ateliers de deux heures sur des dossiers récents, puis former les consultants pendant une journée, à Paris et à Lyon, règles de confidentialité comprises.",
      ],
      resultat: "Chaque assistant restitue l'analyse d'un dossier de consultation (exigences, critères de notation, attendus implicites, liste de contrôle) et vérifie la cohérence du mémoire avec ce dossier. Les consultants concentrent leur temps sur l'analyse et la personnalisation ; ils gardent la stratégie de réponse et la relation avec le maître d'ouvrage. Les données des marchés restent dans un environnement d'entreprise qui exclut leur réutilisation pour l'entraînement des modèles.",
      lien: { href: "/etudes-de-cas-ia#conseil-financier", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      { titre: "Découper un projet pour rester sous le seuil", texte: "Un pilote suivi d'un déploiement déjà prévu forme un seul besoin. L'article R. 2121-1 fait entrer options et reconductions dans la valeur estimée, et le seuil de 60 000 € HT s'apprécie sur ce total." },
      { titre: "Laisser l'outil écrire seul aux usagers", texte: "Le guide de la DINUM range l'envoi automatique de courriels à des usagers, sans supervision, parmi les pratiques à proscrire. L'agent relit, corrige, puis envoie lui-même." },
      { titre: "Oublier que l'inférence d'Albert API ne garde rien", texte: "Albert API ne conserve pas le contenu des requêtes et ne peut rien restituer après coup. Si votre service doit prouver ce que l'outil a proposé, l'application tient elle-même ce journal, dans votre environnement." },
      { titre: "Croire qu'un accord tacite autorise un assistant grand public", texte: "Un agent qui colle une note interne dans un compte personnel sort du cadre fixé par le guide de l'État, même si son service ferme les yeux. L'autorisation doit être explicite et les informations doivent pouvoir être publiées." },
      { titre: "Ajouter un score à un outil de préparation", texte: "Un outil qui range les pièces d'une demande d'aide reste une tâche préparatoire. Le jour où il attribue une note au demandeur, il le profile et bascule dans le haut risque du règlement européen sur l'IA." },
    ],
  },

  faq: [
    {
      q: "Peut-on acheter un projet d'IA sans publicité ni mise en concurrence ?",
      a: "Oui, sous 60 000 € HT pour des services depuis le 1er avril 2026 (article R. 2122-8 du code de la commande publique), et sous 100 000 € HT si la solution est innovante au sens de l'article L. 2172-3 (article R. 2122-9-1). L'acheteur doit choisir une offre pertinente et éviter de contracter toujours avec le même opérateur. Nous remettons une proposition forfaitaire détaillée que votre service achats peut comparer à d'autres.",
    },
    {
      q: "Nos agents peuvent-ils utiliser ChatGPT, Claude ou Gemini ?",
      a: "Pour les agents de l'État, le guide de la DINUM répond : à titre exceptionnel, si l'administration l'autorise explicitement et si les informations traitées pourraient être publiées sur Internet. Les outils mis à disposition par l'administration, comme l'Assistant IA interministériel, passent en premier. Une collectivité fixe sa propre règle dans une charte ; nous l'aidons à l'écrire à partir de ses usages et de ses données.",
    },
    {
      q: "Une collectivité peut-elle utiliser Albert API ?",
      a: "En principe non : Albert API est réservé à la fonction publique d'État, et une entreprise ne peut l'utiliser que pour le compte d'une administration cliente éligible. Pour une collectivité, nous comparons avec la DSI les hébergements et les modèles compatibles avec ses données, en France ou dans l'Union, et nous écrivons ce choix et ses motifs dans le dossier de conformité du projet.",
    },
    {
      q: "Faut-il indiquer qu'un courrier a été rédigé avec l'IA ?",
      a: "Le guide de l'État le demande dès que l'IA a produit une partie du contenu, même retouchée ; pour un document externe, la formule recommandée est « Contenu partiellement généré par une IA et vérifié par un agent ». Une simple reformulation d'un texte écrit par l'agent n'appelle pas de mention. Quand la décision elle-même repose sur un traitement algorithmique, l'article L. 311-3-1 du CRPA impose en plus une mention explicite dans la décision.",
    },
    {
      q: "Un assistant d'aide à l'instruction des aides sociales est-il à haut risque ?",
      a: "L'annexe III du règlement européen sur l'IA vise les systèmes qui évaluent l'éligibilité aux prestations d'aide sociale essentielles, ou qui les octroient, les réduisent ou les récupèrent. Les obligations correspondantes s'appliquent à partir du 2 décembre 2027. Un assistant qui rassemble et classe les pièces sans noter le demandeur peut rester hors de cette catégorie, à condition que l'appréciation soit documentée. Nous faisons cette analyse au cadrage, avant d'écrire le code.",
    },
    {
      q: "Où seront hébergées nos données ?",
      a: "Là où leur régime l'autorise. Une administration de l'État qui traite des données d'une sensibilité particulière doit, selon l'article 31 de la loi SREN, recourir à une offre protégée contre l'accès d'autorités d'États tiers ; Albert API répond à ce besoin pour l'inférence. Une collectivité choisit selon le RGPD et son analyse de risques. Le code vous étant livré, l'outil peut aussi tourner dans votre propre système d'information.",
    },
    {
      q: "Qui détient le code développé pour notre administration ?",
      a: "Vous. Masteria livre le code source et la documentation, et la passation fait partie de la mission. Si votre marché se réfère au CCAG-TIC de 2021, son article 46 vous donne déjà le droit de faire maintenir et évoluer les logiciels livrés par un tiers ; les briques préexistantes du prestataire suivent un régime distinct (articles 44 et 45), que notre offre liste noir sur blanc.",
    },
    {
      q: "Comment démarre un projet avec Masteria ?",
      a: "Par 30 minutes de cadrage offertes, en visio ou au téléphone, avec la personne qui porte le besoin et, si possible, l'acheteur. Si le sujet le justifie, un Diagnostic IA payant précise les usages, les données et la procédure ; sa durée et son forfait se fixent à ce moment, selon le périmètre. Vous recevez ensuite une proposition écrite avec périmètre, livrables, calendrier et prix, prête à entrer dans votre procédure.",
    },
  ],

  sources: [
    { name: "Légifrance : décret n° 2025-1386 du 29 décembre 2025 modifiant certains seuils relatifs aux marchés publics", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053202067" },
    { name: "collectivites-locales.gouv.fr : seuils et taux applicables aux contrats de la commande publique (2026-2027, achats innovants)", url: "https://www.collectivites-locales.gouv.fr/commande-publique/seuils-et-taux-applicables-aux-contrats-de-la-commande-publique" },
    { name: "DINUM : guide d'usage de l'IA pour les agents publics de l'État, partie 3 « les 5 principes fondamentaux »", url: "https://guides.ia.numerique.gouv.fr/guides/guide-dusage-de-lia-pour-les-agents-publics-de-letat/partie-3-les-5-principes-fondamentaux" },
    { name: "DINUM : les enjeux juridiques d'un assistant conversationnel (CRPA, art. L. 311-3-1 et L. 312-1-3)", url: "https://guides.ia.numerique.gouv.fr/guides/guide-de-construction-dun-assistant-conversationnel-base-sur-du-rag/les-enjeux-juridiques" },
    { name: "DINUM : entreprises, se connecter à Albert API", url: "https://guides.ia.numerique.gouv.fr/albert-api/guides/entreprises-se-connecter-a-albert-api" },
    { name: "DINUM : absence de rétention des données métier sur le chemin d'inférence d'Albert API (mise à jour du 2 septembre 2026)", url: "https://guides.ia.numerique.gouv.fr/albert-api/ressources/absence-de-retention-des-donnees-metier-sur-le-chemin-dinference" },
    { name: "Légifrance : loi n° 2024-449 du 21 mai 2024 visant à sécuriser et à réguler l'espace numérique (article 31)", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049563368" },
    { name: "EUR-Lex : règlement (UE) 2024/1689 sur l'intelligence artificielle (article 27, annexe III)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32024R1689" },
    { name: "EUR-Lex : règlement (UE) 2026/1744, train de mesures omnibus numérique sur l'IA", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra" },
    { name: "Légifrance : arrêté du 30 mars 2021 portant approbation du CCAG des marchés publics de techniques de l'information et de la communication", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043310689" },
  ],
}
