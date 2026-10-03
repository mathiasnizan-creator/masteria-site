// Contenu propre à /chatbot-ia-sur-mesure. Lu par SolutionIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : règlement (UE) 2024/1689 (art. 3, 50, 99) dans son texte officiel via l'Office des publications, lignes directrices C(2026) 5054 et FAQ de la Commission sur l'article 50 (juillet 2026), fiche CNIL sur les chatbots (19/02/2021), guide ANSSI IA générative (29/04/2024, R25 et R33), OpenAI Safety best practices, Légifrance (L. 121-2, L. 132-2, décret 2023-931, loi 2023-171 art. 16).
export default {
  slug: 'chatbot-ia-sur-mesure',
  dateModified: '2026-10-03',
  intro: "Un chatbot sur mesure répond aux visiteurs de votre site avec ce que vous publiez déjà : fiches produits, notices, conditions de vente, pages d'aide. Il oriente, recueille une demande et passe la main au bon service pour tout ce qui touche à un dossier personnel. En le faisant développer puis en le mettant en ligne sous votre nom, votre entreprise devient « fournisseur » au sens du règlement européen sur l'IA : à elle d'annoncer l'IA dès le premier message. Nous intégrons cette obligation, les traceurs et l'accessibilité dès la maquette.",
  guide: {
    kicker: "Guide projet · chatbot de site",
    h2: "Un chatbot de site parle à des inconnus au nom de votre entreprise : ses limites s'écrivent avant son ton",
    lead: "Le règlement (UE) 2024/1689 nomme fournisseur l'organisation qui développe un système d'IA, ou le fait développer par un prestataire, puis le met en service sous son nom ou sa marque (article 3). Les lignes directrices de la Commission du 20 juillet 2026 prennent l'exemple d'une organisation qui met en service un chatbot pour son propre usage : l'obligation d'informer les visiteurs lui revient. Ce chatbot répondra à des inconnus, parmi lesquels des enfants, des personnes âgées et des curieux qui chercheront à le faire déraper. Nous écrivons donc ce qu'il refuse avant de travailler sa voix.",
    sections: [
      {
        h3: "Le chatbot accueille des visiteurs que personne n'a identifiés",
        paras: [
          "Le chatbot de site tient la porte d'entrée. Il répond à quelqu'un qui n'a pas forcément de compte, qui n'a encore rien acheté et dont vous ne savez rien. Sa matière est publique : ce que vos pages, vos fiches techniques et vos conditions de vente disent déjà. L'agent de support lit le dossier d'un client identifié, l'agent commercial prépare des devis en interne ; le chatbot ne lit aucune commande, aucune facture, aucun contrat. Il transmet toute question personnelle au service concerné, ce qui évite d'exposer les données d'un client à un inconnu.",
          "Son travail tient en quatre gestes : répondre sur ce que vous publiez (dimensions, compatibilités, délais standard, conditions de retour), orienter vers la page utile ou vers le service qui traitera la demande, recueillir une demande structurée qu'il dépose dans votre CRM (votre fichier de clients et de prospects) ou votre boîte commerciale, et refuser poliment le reste, qu'il s'agisse d'une remise, d'un avis sur un concurrent ou d'un conseil médical. Le dernier geste demande autant de travail que les trois premiers. Certains visiteurs chercheront à faire sortir le chatbot de son rôle, et chaque refus se prépare comme une réponse.",
        ],
      },
      {
        h3: "Votre entreprise devient fournisseur au sens du règlement européen sur l'IA",
        paras: [
          "L'article 50, applicable depuis le 2 août 2026, demande au fournisseur de concevoir le chatbot pour que chaque personne sache qu'elle échange avec une IA, de manière claire et reconnaissable, au plus tard à la première interaction. Une exception existe quand l'IA est évidente pour une personne normalement informée, attentive et avisée. La Commission la veut restrictive et demande de tenir compte de toute l'audience prévisible : sur un site ouvert au public, celle-ci comprend des enfants, des personnes âgées ou peu familières de l'IA. Comptez donc sur l'obligation dès que votre chatbot répond à des visiteurs.",
          "Les lignes directrices disent aussi ce qui ne suffit pas : une mention perdue dans les conditions d'utilisation, une étiquette vague du type « assistant », une phrase technique comme « ce service utilise un LLM » (un grand modèle de langage), ou une représentation humaine qui peut tromper. Elles recommandent une phrase d'accueil au premier échange, une étiquette visible pendant toute la conversation et placée près du champ de saisie, et une réponse honnête quand le visiteur demande s'il parle à une machine. Ces éléments se dessinent dans la maquette du widget, la fenêtre de conversation intégrée à vos pages.",
        ],
      },
      {
        h3: "Ce que le chatbot affirme sur vos produits relève du droit des pratiques commerciales",
        paras: [
          "Le Code de la consommation qualifie de trompeuse une pratique qui repose sur des allégations fausses ou de nature à induire en erreur, notamment sur la disponibilité d'un bien, ses caractéristiques essentielles ou son prix (article L. 121-2). Commise au moyen d'un service de communication au public en ligne, elle expose à des peines portées à cinq ans d'emprisonnement et 750 000 euros d'amende (article L. 132-2). La Commission rappelle que ces règles s'appliquent en plus de l'article 50. Un chatbot qui invente une compatibilité, un délai ou une promotion expose votre entreprise autant qu'une fiche produit erronée.",
          "La parade se règle à la conception. Le chatbot répond à partir des seuls contenus validés, et chaque réponse sur un produit renvoie à la page d'où elle vient. Les prix, les promotions et les délais se lisent dans une source tenue à jour, ou ne se donnent pas. Quand l'information manque, le chatbot le dit et propose le formulaire ou un rappel au lieu d'improviser. Chaque question restée sans réponse rejoint une liste que le responsable des contenus traite chaque semaine, et le chatbot montre ainsi ce que votre site explique mal.",
        ],
      },
      {
        h3: "Le widget est une page de votre site, avec ses traceurs et son accessibilité",
        paras: [
          "La CNIL a publié en février 2021 une fiche consacrée aux chatbots. Le traceur nécessaire au chatbot échappe au consentement s'il n'est déposé qu'au moment où le visiteur ouvre la conversation et s'il sert uniquement à ce service. Un script qui se charge avec la page, ou qui mesure l'audience pour le compte d'un éditeur, relève du bandeau cookies. La même fiche demande d'avertir les visiteurs de ne pas confier de données sensibles, comme leur santé ou leurs opinions politiques et religieuses, et de prévoir une purge, immédiate ou périodique, de celles qui arrivent malgré tout.",
          "L'accessibilité suit la même logique. Depuis le 28 juin 2025, les services de commerce électronique destinés aux consommateurs doivent respecter des exigences d'accessibilité (décret n° 2023-931 qui, avec la loi n° 2023-171, transpose la directive (UE) 2019/882) ; les microentreprises de services, moins de dix personnes et au plus deux millions d'euros de chiffre d'affaires ou de bilan, en sont dispensées. L'article 50 exige de son côté que l'annonce de l'IA respecte les exigences d'accessibilité applicables. Un widget qui piège la navigation au clavier, ou que le lecteur d'écran ne lit pas, se corrige avant la mise en ligne.",
        ],
      },
      {
        h3: "Certains visiteurs chercheront à faire déraper le chatbot",
        paras: [
          "L'ANSSI consacre une recommandation aux services d'IA générative ouverts au grand public (R33 de son guide du 29 avril 2024) : analyser les requêtes, contrôler les réponses avant leur envoi, protéger l'historique des conversations, se prémunir contre les dénis de service, ces afflux de requêtes qui rendent un service indisponible. Elle conseille aussi de filtrer les entrées et les sorties et de limiter la taille des réponses (R25). OpenAI recommande de son côté de borner la longueur des messages qu'un utilisateur peut saisir, pour réduire les injections de consigne, ces instructions glissées dans un message pour détourner l'IA de son rôle.",
          "L'ANSSI va jusqu'à recommander d'authentifier les utilisateurs d'un service grand public. Un chatbot d'accueil reste anonyme, et d'autres protections doivent compenser. Chaque message déclenche un appel payant au modèle, et un script qui interroge le widget en boucle fait grimper la facture du mois. Nous plafonnons donc les messages par session et par adresse, limitons la longueur des questions et des réponses, et plaçons un bouton de signalement sous chaque réponse. Avant la mise en ligne, un jeu de questions pièges se rejoue à chaque modification : demande de remise, insulte, consigne cachée, question sur un concurrent.",
        ],
      },
    ],
    table: {
      caption: "Les réglages à décider avant la mise en ligne d'un chatbot public",
      headers: ["Réglage", "Ce que nous mettons en place", "Texte de référence"],
      rows: [
        ["Annonce de l'IA", "Phrase d'accueil au premier message et étiquette « IA » visible près du champ de saisie", "Règlement (UE) 2024/1689, article 50, paragraphes 1 et 5"],
        ["Nom et avatar", "Nom de service et pictogramme, aucune photo ni prénom qui imite un conseiller", "Lignes directrices de la Commission du 20 juillet 2026"],
        ["Traceur du widget", "Déposé à l'ouverture de la conversation, réservé au chatbot", "CNIL, fiche sur les chatbots de février 2021"],
        ["Données sensibles", "Avertissement avant la saisie et purge des conversations", "CNIL, fiche sur les chatbots de février 2021"],
        ["Réponses sur les produits", "Contenus validés, page source citée, prix lus dans une source à jour", "Code de la consommation, articles L. 121-2 et L. 132-2"],
        ["Exposition au public", "Plafond de messages par session, longueur limitée, bouton de signalement", "ANSSI, recommandations R25 et R33"],
      ],
    },
    cas: {
      h3: "Mise en situation : un fabricant de mobilier de bureau ouvre un chatbot sur son catalogue",
      contexte: "Exemple fictif, construit pour montrer la démarche. Imaginons un fabricant de mobilier de bureau qui vend à des entreprises et à des particuliers. Son site publie un catalogue, des notices de montage, une page sur la garantie et un formulaire de devis. Le standard reçoit les mêmes questions toute la journée : dimensions, délais, coloris, compatibilité d'un plateau avec un piètement. La direction veut un chatbot qui réponde sur ces points, transmette les demandes de devis aux commerciaux et oriente les problèmes de commande vers le service client.",
      etapes: [
        "Relever les questions des visiteurs dans le formulaire de contact, la recherche interne du site et les notes du standard, puis les classer entre information, orientation et demande personnelle.",
        "Trier le contenu : sortir de l'index, la base que le chatbot consulte pour répondre, les anciens catalogues et les promotions closes, désigner une source unique pour les prix et les délais, nommer un responsable par gamme.",
        "Écrire le périmètre avec la direction : ce que le chatbot dit, ce qu'il refuse (remises, avis sur les concurrents), ce qu'il transmet et à qui.",
        "Construire sur les contenus validés, tester avec des questions courantes et des questions pièges, puis intégrer le widget à la charte avec l'annonce de l'IA, le traceur déposé à l'ouverture et un test au clavier et au lecteur d'écran.",
        "Ouvrir sur la section du site la plus consultée, lire chaque semaine les questions sans réponse, compléter les fiches produits, puis étendre au reste du catalogue.",
      ],
      resultat: "Dans cet exemple, le fabricant dispose d'un chatbot qui répond sur ce que son site publie, cite la fiche d'où vient chaque réponse et dépose dans le CRM des demandes de devis complètes, avec le résumé de la conversation. Les indicateurs choisis au cadrage se lisent dans ses propres journaux : part des conversations closes sans transfert, questions restées sans réponse, demandes de devis exploitables sans rappel du visiteur.",
    },
    pieges: [
      { titre: "Ouvrir le chatbot sur tout le site d'un coup", texte: "Un lancement global mélange les questions de toutes les sections et noie les erreurs dans le volume. Une ouverture par section, en commençant par la plus consultée, permet de lire les conversations, de corriger les contenus, puis d'étendre." },
      { titre: "Indexer les archives avec le reste", texte: "Les pages de promotions closes, les anciens catalogues et les notices remplacées produisent des réponses fausses, avec une source à l'appui. Le tri se fait avant la construction : chaque document indexé a un responsable et une date de validité." },
      { titre: "Laisser le widget se charger avec la page", texte: "Un script de chatbot déposé dès l'affichage de la page perd l'exemption de consentement que la CNIL réserve au traceur déposé à l'ouverture de la conversation. Votre bandeau cookies doit alors le couvrir, et le visiteur peut le refuser." },
      { titre: "Ne nommer aucun responsable des contenus", texte: "Les questions sans réponse s'accumulent dans un tableau que personne n'ouvre, et le chatbot répète les mêmes lacunes. Un responsable par famille de contenus, avec une revue hebdomadaire de la liste, fait progresser le chatbot et le site ensemble." },
      { titre: "Traiter une question de commande dans le chatbot de site", texte: "Parler d'une commande suppose d'identifier la personne et de lire son dossier. Un chatbot anonyme qui s'y essaie risque de livrer des informations à un inconnu. Il transmet ces demandes au service client, ou à un agent de support qui identifie le client avant de répondre." },
    ],
  },
  etapes: [
    { title: "Recenser les questions des visiteurs", desc: "Formulaire de contact, recherche interne du site, appels au standard, messages reçus sur les réseaux : ce relevé montre ce que les visiteurs cherchent et que votre site explique mal. Il fixe les premières sections à couvrir." },
    { title: "Trier et valider les contenus", desc: "Liste des pages et documents que le chatbot pourra citer, retrait des contenus périmés, source unique pour les prix et les délais, responsable nommé pour chaque famille de contenus." },
    { title: "Écrire le périmètre et les refus", desc: "Sujets traités, sujets refusés, demandes transmises et destinataires, ton de la marque, texte d'accueil qui annonce l'IA. Ce document devient la référence des tests et des mises à jour." },
    { title: "Construire, attaquer, corriger", desc: "Le chatbot est construit sur les contenus validés, puis soumis à deux jeux de questions : celles des visiteurs et des questions pièges. Les deux jeux se rejouent à chaque changement de contenu ou de modèle." },
    { title: "Intégrer au site et ouvrir par section", desc: "Widget à votre charte, traceur déposé à l'ouverture, test d'accessibilité, plafonds de messages. Mise en ligne section par section, revue hebdomadaire des questions sans réponse, puis remise du code et de la documentation." },
  ],
  cout: {
    lead: "Un chatbot sur mesure fait l'objet d'un forfait, chiffré après cadrage sur un périmètre écrit. Un premier chatbot, sur un contenu restreint et sans action dans vos logiciels, démarre autour de 8 000 € ; un assistant multilingue, relié à plusieurs systèmes et exposé à un fort trafic, dépasse 100 000 € et peut atteindre plusieurs centaines de milliers d'euros.",
    paras: [
      "L'écart tient d'abord au contenu. Un site de quelques dizaines de pages tenues à jour s'indexe vite ; un catalogue de fiches techniques en PDF, en plusieurs langues, avec des versions qui se contredisent, demande un tri avant toute construction. Le fonctionnement s'ajoute ensuite chaque mois : appels au modèle, hébergement, lecture des conversations. Sur un site public, chaque visiteur déclenche des appels payants ; les plafonds par session et le budget mensuel visé figurent donc dans le devis.",
      "Le forfait couvre le tri des contenus, la construction, le widget à votre charte, l'annonce de l'IA, les jeux de tests et la documentation, dont le code vous revient. Les 30 minutes de cadrage offertes (visio ou téléphone) servent à regarder l'état de vos contenus avant tout chiffrage : c'est le premier facteur de prix, et il se lit en quelques pages.",
    ],
    facteurs: [
      { title: "Le volume et l'état des contenus", desc: "Nombre de pages et de documents, formats (pages web, PDF, tableaux), langues, contradictions entre versions. Un contenu à trier ou à réécrire se chiffre comme un chantier distinct, avant la construction." },
      { title: "Les actions confiées au chatbot", desc: "Répondre seulement, ou aussi créer une demande dans le CRM, proposer un créneau de rendez-vous, lire un stock ou un configurateur. Chaque action ajoute une connexion, des contrôles et des tests." },
      { title: "L'intégration au site", desc: "Widget à la charte graphique, comportement sur mobile, accessibilité au clavier et au lecteur d'écran, traceur déposé à l'ouverture, plusieurs langues : ces points se conçoivent avec votre équipe web." },
      { title: "Le trafic et les protections", desc: "Volume de visiteurs attendu, plafonds par session, filtrage des messages, bouton de signalement, conservation et lecture des journaux. Un site à fort trafic justifie plus de protections et un suivi des coûts." },
    ],
  },
  regie: [
    "Sur un chatbot de site, le détachement peut prendre la forme d'un développeur IA rattaché à votre équipe web ou marketing, à temps partiel. Il lit les questions restées sans réponse, met à jour l'index quand une gamme change ou qu'une page disparaît, et vérifie après chaque refonte du site que le widget reste accessible et que le traceur se dépose toujours à l'ouverture de la conversation.",
    "Ce modèle convient aux entreprises qui publient beaucoup : nouvelles collections, catalogues saisonniers, conditions commerciales révisées. Le développeur travaille sur vos dépôts de code, avec vos outils, et documente chaque modification ; vos équipes reprennent la maintenance quand le rythme des publications ralentit.",
  ],
  comparatif: {
    intro: "Un chatbot SaaS, un logiciel loué en ligne et prêt à configurer, se branche vite sur les pages d'un site et convient à une FAQ stable. Comme nous ne vendons aucune licence, le premier échange sert aussi à vous dire si un outil loué suffit. Le sur mesure se justifie quand le contenu est volumineux ou technique, quand les réponses doivent suivre des règles écrites et testées, quand les conversations et les traceurs doivent rester sous votre contrôle, ou quand le volume rend l'abonnement plus cher qu'un code qui vous appartient.",
    rows: [
      { aspect: "Mise en ligne", off: "Rapide : une adresse de site ou quelques PDF suffisent à démarrer", custom: "Quelques semaines : tri des contenus, périmètre écrit, tests adverses" },
      { aspect: "Ce que le chatbot a le droit de dire", off: "Réglages proposés par l'éditeur (ton, sujets, longueur)", custom: "Périmètre et refus écrits avec vous, rejoués en tests à chaque mise à jour" },
      { aspect: "Annonce de l'IA et identité", off: "Selon les options du widget", custom: "Phrase d'accueil et étiquette persistante dessinées dès la maquette" },
      { aspect: "Traceurs et conversations", off: "Script et hébergement de l'éditeur, durées fixées par lui", custom: "Traceur déposé à l'ouverture, hébergement et durée de conservation choisis par vous" },
      { aspect: "Coût à volume", off: "Abonnement par palier de conversations", custom: "Appels au modèle et hébergement, plafonnés par session ; aucune licence" },
      { aspect: "Réversibilité", off: "Export des conversations selon l'éditeur", custom: "Code, consignes et journaux livrés ; modèle de langage remplaçable" },
    ],
  },
  faq: [
    { q: "Qui porte les obligations du règlement IA, Masteria ou notre entreprise ?", a: "Votre entreprise, dès que le chatbot est mis en ligne sous votre nom. Confier le développement à un prestataire ne change rien à cette qualification, que l'article 3 du règlement attache à la mise en service sous votre nom ou votre marque. Nous concevons le chatbot pour qu'il respecte l'article 50, nous documentons chaque choix (texte d'accueil, étiquette, tests, journaux) et nous vous remettons ce dossier, utile en cas de contrôle. La responsabilité vis-à-vis des autorités reste la vôtre." },
    { q: "Peut-on donner un prénom et un visage au chatbot ?", a: "Un nom de service, oui, si l'annonce de l'IA reste visible. Un visage humain, nous le déconseillons. Les lignes directrices de la Commission notent qu'une photo de profil humaine rend la nature artificielle moins évidente, et elles jugent insuffisante une représentation humaine susceptible de tromper. Un pictogramme et un nom comme « L'aide en ligne » ou « L'assistant de l'atelier » gardent une identité de marque et évitent le doute." },
    { q: "Un chatbot réservé à nos salariés suit-il les mêmes règles ?", a: "Pas tout à fait. Les lignes directrices de la Commission citent l'assistant interne utilisé par un personnel formé, qui sait se servir d'un outil d'IA, parmi les cas où l'IA est évidente : l'annonce n'est alors pas exigée. Ce cas suppose que les salariés concernés aient été formés. Un chatbot interne branché sur les documents de l'entreprise relève plutôt de notre page sur le copilote IA interne, qui traite des droits d'accès." },
    { q: "Combien de temps garder les conversations ?", a: "Le temps nécessaire à leur finalité, selon la fiche de la CNIL sur les chatbots. Une conversation d'aide à l'achat peut s'effacer à la fin de l'échange ; une conversation qui débouche sur une demande de devis ou une réclamation se conserve avec ce dossier, pour la durée prévue pour lui. Pour améliorer le chatbot, nous travaillons sur des extraits débarrassés des noms et des coordonnées. Les durées retenues s'écrivent au cadrage, avec votre délégué à la protection des données." },
    { q: "Le chatbot peut-il répondre en plusieurs langues ?", a: "Oui. Un modèle de langage répond dans la langue du visiteur, même quand vos contenus sont rédigés en français. La qualité se vérifie langue par langue sur votre jeu de questions, et l'annonce de l'IA se traduit avec le reste. Pour un vocabulaire technique, une table de termes validée par vos équipes évite les traductions approximatives. Un texte juridique, comme vos conditions de vente, se cite dans sa version officielle." },
    { q: "Le chatbot peut-il prendre un rendez-vous ou créer une demande de devis ?", a: "Oui, par des connecteurs vers votre agenda en ligne ou votre CRM, avec des actions bornées : proposer des créneaux, créer une demande, envoyer un récapitulatif au visiteur. Un devis chiffré, une modification de commande ou un remboursement restent hors de sa portée, parce qu'ils engagent l'entreprise sur un dossier qu'il ne connaît pas. Les demandes qu'il crée arrivent complètes chez vos commerciaux, avec le résumé de la conversation." },
    { q: "Comment le chatbot suit-il les changements du site ?", a: "Par une mise à jour planifiée de son index : chaque nuit ou chaque semaine, les pages modifiées sont relues, les pages retirées sortent de l'index, et le jeu de tests se rejoue. Une refonte du site déclenche une vérification complète, widget compris. Chaque famille de contenus a un responsable chez vous, qui valide ce que le chatbot peut citer avant la mise à jour." },
    { q: "Faut-il un chatbot si notre site a déjà une bonne FAQ ?", a: "Pas toujours. Une FAQ claire et un moteur de recherche interne suffisent quand les questions sont peu nombreuses et appellent une réponse unique. Le chatbot apporte quelque chose quand une question croise plusieurs critères (une dimension, un usage, une compatibilité), quand le catalogue est trop vaste pour une FAQ, ou quand le visiteur doit être orienté selon son cas. Les requêtes tapées dans la recherche de votre site montrent de quel côté vous êtes." },
  ],
  sources: [
    { name: "EUR-Lex : règlement (UE) 2024/1689 sur l'intelligence artificielle (articles 3 et 50)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=fr" },
    { name: "Commission européenne : lignes directrices sur les obligations de transparence de l'article 50 (20 juillet 2026)", url: "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems" },
    { name: "Commission européenne : FAQ sur les obligations de transparence de l'article 50 (24 juillet 2026)", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
    { name: "CNIL : Chatbots, les conseils de la CNIL pour respecter les droits des personnes (19 février 2021)", url: "https://www.cnil.fr/fr/chatbots-les-conseils-de-la-cnil-pour-respecter-les-droits-des-personnes" },
    { name: "ANSSI : Recommandations de sécurité pour un système d'IA générative (29 avril 2024)", url: "https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-un-systeme-dia-generative" },
    { name: "OpenAI API : Safety best practices", url: "https://developers.openai.com/api/docs/guides/safety-best-practices" },
    { name: "Légifrance : article L. 121-2 du Code de la consommation (pratiques commerciales trompeuses)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563114" },
    { name: "Légifrance : article L. 132-2 du Code de la consommation (sanctions, version du 12 mai 2024)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049532070" },
    { name: "Légifrance : décret n° 2023-931 du 9 octobre 2023 relatif à l'accessibilité des produits et services", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048178349" },
    { name: "Légifrance : loi n° 2023-171 du 9 mars 2023, article 16 (accessibilité, dispense des microentreprises)", url: "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000047281814" },
  ],
}
