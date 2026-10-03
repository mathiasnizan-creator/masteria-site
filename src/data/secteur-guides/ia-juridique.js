// Contenu propre à /ia-juridique. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Légifrance (loi n° 71-1130 art. 66-5, loi n° 2026-122 créant l'art. 58-1, code pénal art. 226-13 et 226-18, décret n° 2023-1297 art. 8, COJ art. L. 111-13), cnb.avocat.fr (guide IAG de septembre 2024, actualité du 18 juin 2025), EUR-Lex (règlement (UE) 2024/1689 annexe III, omnibus (UE) 2026/1744). Aucune étude de cas publiée ne relève du droit : le cas est une mise en situation.
export default {
  slug: 'ia-juridique',
  dateModified: '2026-10-03',
  intro: "Un cabinet d'avocats, une étude notariale et une direction juridique lisent les mêmes contrats et la même jurisprudence, et chacun relève pourtant d'un régime de confidentialité différent : le secret de l'avocat couvre toutes les pièces du dossier, celui du notaire est général et absolu, et les consultations du juriste d'entreprise deviennent confidentielles, sous conditions, en vertu d'une loi de février 2026. Masteria, cabinet IA basé à Lyon, part de ce régime pour décider où tournent les modèles, puis développe l'outil de revue, de recherche ou de rédaction dans ce périmètre.",

  offresIntro: [
    "Pour les professions du droit, notre conseil commence par une question : quelles pièces un outil a-t-il le droit de lire, et dans quel périmètre ? Le choix du modèle et des fonctions vient après la réponse.",
    "Le développement épouse la pratique du cabinet ou de la direction : votre grille de négociation, vos modèles d'actes, vos règles de nommage et de classement. Nous livrons le code et la documentation, et nous écrivons avec vous les règles de mise à jour, parce qu'une base de modèles juridiques vieillit au rythme des réformes et de la jurisprudence.",
  ],

  offres: [
    {
      desc: "Nous classons vos flux documentaires par niveau de confidentialité : pièces couvertes par le secret, documents publics, modèles internes, consultations du juriste d'entreprise. Pour chaque flux, nous fixons l'outil autorisé, le traitement préalable (pseudonymisation, extraction) et la règle de relecture, dans une charte écrite pour l'associé référent ou la direction juridique, puis nous comparons les outils du marché à un développement sur mesure.",
      points: ["Classement des flux par niveau de secret", "Charte d'usage et règles de relecture", "Comparaison des outils du marché"],
    },
    {
      desc: "Nous développons des outils qui travaillent sur vos propres références : revue de contrats contre votre grille de positions, recherche dans vos consultations et vos notes internes, préparation d'actes à partir de vos modèles. Chaque réponse cite le passage source, et l'outil tourne dans l'hébergement que le régime de vos données autorise, jusqu'à un modèle installé sur vos serveurs.",
      points: ["Revue contre votre grille de positions", "Réponses qui citent la pièce source", "Hébergement choisi selon le secret"],
    },
    {
      desc: "Nous automatisons les étapes qui n'engagent aucune appréciation juridique : pseudonymisation des pièces avant traitement, classement d'une data room (l'espace où un vendeur dépose ses documents), extraction des dates et des montants, préparation des tableaux d'échéances. Le juriste reçoit un dossier prêt à analyser et garde la main sur tout ce qui engage le client.",
      points: ["Pseudonymisation avant traitement", "Classement et extraction en série", "Tableaux d'échéances et de montants"],
    },
  ],

  regie: [
    "Un développeur détaché travaille dans vos locaux, sous votre politique de sécurité, et signe les engagements de confidentialité que votre cabinet ou votre entreprise exige de ses prestataires. Il n'emporte aucune pièce et travaille sur des jeux de test que vous validez ou sur des dossiers pseudonymisés, ce qui permet de construire et d'éprouver l'outil avant de l'ouvrir aux dossiers en cours.",
  ],

  formation: [
    "Le guide du Conseil national des barreaux demande que tous les membres d'un cabinet soient formés à l'IA générative, collaborateurs et assistants compris. Nous formons les avocats à pseudonymiser une pièce et à vérifier une jurisprudence citée, les juristes d'entreprise à revoir un contrat contre leur grille, les collaborateurs d'une étude à contrôler un projet d'acte préparé par l'outil.",
    "Une journée au cabinet ou à la direction juridique est facturée 1 980 € HT pour l'ensemble des participants, et la certification Qualiopi de Masteria permet de la présenter à l'OPCO de votre branche. Les exercices portent sur vos modèles et sur des dossiers pseudonymisés : aucune pièce couverte par le secret n'entre dans un outil pendant la formation.",
  ],

  guide: {
    kicker: "Guide professions du droit",
    h2: "Dans le droit, le régime du secret décide de l'architecture avant le choix du modèle",
    lead: "Le guide pratique du Conseil national des barreaux, publié en septembre 2024, pose une règle sans détour : l'avocat ne doit jamais communiquer des données couvertes par le secret professionnel à une IA générative. La loi du 23 février 2026 crée de son côté une confidentialité des consultations du juriste d'entreprise, à des conditions précises de forme et de classement. Le notaire reste tenu à un secret que son code de déontologie dit général et absolu. Ces trois régimes conduisent à trois architectures différentes pour un même outil de revue de contrats.",
    sections: [
      {
        h3: "Le secret de l'avocat couvre toutes les pièces du dossier",
        paras: [
          "L'article 66-5 de la loi du 31 décembre 1971 place sous le secret professionnel les consultations, les correspondances avec le client et entre confrères, les notes d'entretien et, plus généralement, toutes les pièces du dossier. Sa violation relève de l'article 226-13 du code pénal : un an d'emprisonnement et 15 000 € d'amende. Le guide du CNB en tire la conséquence pratique : ni le nom du client, ni la stratégie du dossier, ni un fichier qui les contient ne doivent figurer dans une requête adressée à une IA générative.",
          "Le même guide décrit la voie praticable : la pseudonymisation, qui remplace les données identifiantes par des substituts. Il prévient qu'un montant, un nom de projet interne ou une façon de rédiger un contrat peuvent suffire à réidentifier un client, et que la technique ne s'applique pas au compte rendu d'un rendez-vous pris en direct. Un outil construit pour un cabinet commence donc par une étape de pseudonymisation contrôlée, avant tout appel à un modèle.",
        ],
      },
      {
        h3: "Le juriste d'entreprise gagne une confidentialité qui dépend de la forme",
        paras: [
          "La loi n° 2026-122 du 23 février 2026 insère un article 58-1 dans la loi de 1971. Deviennent confidentielles les consultations rédigées par un juriste d'entreprise titulaire d'un master en droit et formé aux règles éthiques, quand elles sont adressées aux organes de direction de l'entreprise ou de son groupe. Elles portent la mention « confidentiel - consultation juridique - juriste d'entreprise », identifient leur rédacteur et font l'objet d'un classement particulier dans les dossiers de l'entreprise. La loi entre en vigueur à une date fixée par décret, au plus tard le 1er février 2027.",
          "La confidentialité ne joue pas dans une procédure pénale ou fiscale, et l'entreprise peut la lever. Pour un outil d'IA, la conséquence est pratique : la loi couvre aussi les versions successives d'une consultation rédigées dans ces conditions. Un assistant qui aide à rédiger ces consultations doit apposer la mention, conserver le nom du rédacteur et ranger chaque version dans l'espace prévu, hors de la base commune où d'autres équipes viennent chercher des modèles.",
        ],
      },
      {
        h3: "Le notaire et ses collaborateurs restent tenus à un secret général et absolu",
        paras: [
          "L'article 8 du code de déontologie des notaires, issu du décret du 28 décembre 2023, soumet au secret professionnel le notaire et toute personne placée sous son autorité, et le qualifie de général et absolu. Le texte y ajoute une obligation de discrétion liée à la mission de service public du notaire. Un outil qui prépare un projet d'acte manipule donc des données couvertes de bout en bout : identité des parties, situation familiale, prix, financement, servitudes.",
          "Pour une étude, le premier outil rentable lit les pièces reçues pour une vente (titre de propriété, diagnostics techniques, documents d'urbanisme, offre de prêt) et prépare la trame de l'acte dans le logiciel de rédaction existant, avec un renvoi à chaque pièce source. Le collaborateur vérifie chaque mention et le notaire signe. La revue humaine reste entière ; le gain attendu porte sur la saisie et la recherche dans les pièces, et il se mesure sur les dossiers de l'étude avant tout déploiement.",
        ],
      },
      {
        h3: "La jurisprudence ouverte s'exploite, le profilage des magistrats reste interdit",
        paras: [
          "L'article L. 111-13 du code de l'organisation judiciaire met les décisions des juridictions judiciaires à la disposition du public, sans frais et sous forme électronique, après occultation des noms des personnes physiques. Ce fonds nourrit les outils de recherche et de veille. Le même article interdit toute réutilisation des données d'identité des magistrats et des membres du greffe qui aurait pour objet ou pour effet d'évaluer, d'analyser, de comparer ou de prédire leurs pratiques professionnelles.",
          "La violation est punie des peines de l'article 226-18 du code pénal, jusqu'à cinq ans d'emprisonnement et 300 000 € d'amende. Un outil de stratégie contentieuse peut donc analyser des décisions par juridiction, par période ou par type de litige, à condition de ne jamais produire de statistique par magistrat. Nous inscrivons cette règle dans la conception elle-même : les noms des magistrats et des greffiers sortent du corpus avant son indexation.",
        ],
      },
      {
        h3: "L'aide au juge et à l'arbitre entre dans le haut risque du règlement européen sur l'IA",
        paras: [
          "L'annexe III du règlement (UE) 2024/1689 classe à haut risque les systèmes destinés à aider une autorité judiciaire à rechercher et interpréter les faits et le droit, ou utilisés de la même manière pour régler un litige hors des tribunaux. Depuis l'omnibus numérique de juillet 2026, ces obligations entrent en application le 2 décembre 2027. Un outil de revue de contrats pour une direction juridique ou un cabinet ne relève pas de cette catégorie ; un outil mis à la disposition d'un arbitre pour l'aider à appliquer le droit aux faits peut en relever.",
          "Le CNB a présenté en juin 2025 un second guide, issu d'auditions d'acteurs du marché, qui propose une grille de choix des outils d'IA juridiques sur quatre critères : souveraineté et sécurité des données, fonctionnalités, conformité éthique, coût. Nous comparons un outil du marché et un développement sur mesure avec la même grille. Quand une offre spécialisée couvre votre besoin et respecte votre régime de secret, nous vous le disons, et le projet se limite alors au cadrage et à l'intégration.",
        ],
      },
    ],
    table: {
      caption: "Six situations juridiques et ce qu'elles imposent à l'outil",
      headers: ["Situation", "Texte", "Conséquence pour l'outil"],
      rows: [
        ["Pièces d'un dossier d'avocat", "Loi de 1971, art. 66-5 ; guide du CNB de septembre 2024", "Aucune pièce identifiante vers un service tiers ; pseudonymisation contrôlée, ou modèle sur vos serveurs après validation déontologique"],
        ["Consultation d'un juriste d'entreprise", "Loi de 1971, art. 58-1, issu de la loi n° 2026-122", "Mention, rédacteur identifié et classement séparé, versions successives comprises"],
        ["Projet d'acte notarié", "Code de déontologie des notaires (décret n° 2023-1297), art. 8", "Secret étendu aux collaborateurs : traitement dans le système d'information de l'étude"],
        ["Base de jurisprudence ouverte", "Code de l'organisation judiciaire, art. L. 111-13", "Analyse par juridiction autorisée, aucune statistique par magistrat"],
        ["Outil d'aide à un arbitre ou à un juge", "Règlement (UE) 2024/1689, annexe III, point 8 a", "Système à haut risque à partir du 2 décembre 2027"],
        ["Jurisprudence citée dans des conclusions", "Guide du CNB, partie sur l'évaluation des résultats", "Vérification de chaque référence dans la source officielle avant dépôt"],
      ],
    },
    cas: {
      h3: "Mise en situation : une direction juridique outille la revue des contrats fournisseurs",
      contexte: "Prenons la direction juridique d'une ETI industrielle : quatre juristes, plusieurs centaines de contrats fournisseurs par an, et une grille de négociation tenue dans un tableur que seule la responsable connaît par cœur. Les acheteurs attendent un retour en fin de semaine, et les clauses de responsabilité, de pénalités et de propriété intellectuelle concentrent l'essentiel des allers-retours. Les contrats appartiennent à l'entreprise, qui fixe elle-même la règle d'hébergement ; les consultations des juristes suivront le régime de la loi de 2026.",
      etapes: [
        "Réécrire la grille de négociation en règles que l'outil peut appliquer : position de départ, position de repli et clause refusée, pour chaque type de clause.",
        "Rassembler une centaine de contrats déjà négociés, avec leur version finale signée, pour servir de jeu de test.",
        "Construire l'assistant dans Word ou dans l'outil de gestion des contrats : il compare chaque clause à la grille, propose une modification et cite la ligne de la grille appliquée.",
        "Rejouer le jeu de test et comparer, clause par clause et avec les juristes, les propositions de l'assistant aux versions signées.",
        "Ouvrir l'outil aux juristes, puis aux acheteurs pour les contrats standards, avec une règle écrite : toute clause hors grille remonte au juriste.",
      ],
      resultat: "Le juriste reçoit un contrat annoté contre sa propre grille et consacre son temps aux clauses qui sortent du cadre. Le gain se mesure sur le délai de retour aux acheteurs et sur la part des contrats traités sans aller-retour, relevés avant et après sur le périmètre de l'entreprise. Aucun pourcentage n'est promis avant cette mesure.",
    },
    pieges: [
      { titre: "Coller une pièce de dossier dans un assistant grand public", texte: "Le guide du CNB l'exclut pour toute donnée couverte par le secret. Un collaborateur pressé le fait pourtant en deux clics : la charte du cabinet doit le dire, et l'outil interne doit être plus simple à utiliser que le compte personnel." },
      { titre: "Croire que remplacer les noms suffit", texte: "Le CNB rappelle qu'un montant, un nom de projet ou un style de rédaction peuvent réidentifier un client. La pseudonymisation se teste sur des dossiers types, avec une personne chargée de retrouver le client." },
      { titre: "Verser les consultations confidentielles dans la base de modèles", texte: "L'article 58-1 exige un classement particulier des consultations. Une consultation versée dans la base commune de l'assistant ne respecte plus cette condition posée par la loi." },
      { titre: "Construire une statistique par magistrat", texte: "Un tableau des taux de réformation par juge paraît utile à la stratégie contentieuse. L'article L. 111-13 du code de l'organisation judiciaire l'interdit et le sanctionne pénalement." },
      { titre: "Citer une décision sans l'avoir ouverte", texte: "Le guide du CNB rappelle le cas d'un avocat new-yorkais qui avait cité 17 décisions inexistantes. Chaque référence produite par un outil se vérifie dans la source officielle avant de partir dans des conclusions." },
    ],
  },

  faq: [
    {
      q: "Un avocat peut-il utiliser l'IA générative sur ses dossiers ?",
      a: "Le guide du Conseil national des barreaux interdit de communiquer à une IA générative des données couvertes par le secret professionnel, qui s'étend à toutes les pièces du dossier. Il recommande la pseudonymisation avant toute requête et la vérification de chaque résultat. Un outil construit pour un cabinet intègre ces deux étapes ; pour un traitement sans pseudonymisation sur un modèle installé chez vous, la question se tranche avec votre référent déontologique avant le développement.",
    },
    {
      q: "Que change la loi de février 2026 pour une direction juridique ?",
      a: "Elle rend confidentielles, à une date fixée par décret et au plus tard le 1er février 2027, les consultations des juristes d'entreprise qui remplissent ses conditions : master en droit, formation aux règles éthiques, consultation adressée aux organes de direction, mention et classement particulier. Cette confidentialité ne joue pas en matière pénale ou fiscale. Vos outils de rédaction devront produire la mention et respecter le classement, brouillons compris.",
    },
    {
      q: "L'IA peut-elle préparer un acte notarié ?",
      a: "Elle peut préparer la trame d'un acte à partir des pièces reçues et signaler les informations manquantes. Le secret général et absolu de l'article 8 du code de déontologie des notaires s'applique aux collaborateurs comme au notaire, et donc aux données que l'outil manipule. Le projet se construit dans le système d'information de l'étude, et le notaire garde la vérification et la signature.",
    },
    {
      q: "Peut-on analyser la jurisprudence d'un tribunal avec l'IA ?",
      a: "Oui, sur les décisions mises à disposition en données ouvertes, par type de litige, par juridiction ou par période. L'article L. 111-13 du code de l'organisation judiciaire interdit en revanche d'utiliser l'identité des magistrats et des greffiers pour évaluer, comparer ou prédire leurs pratiques ; la violation est punie de cinq ans d'emprisonnement et de 300 000 € d'amende. Nous retirons ces noms du corpus avant toute indexation.",
    },
    {
      q: "Un outil juridique d'IA est-il à haut risque au sens du règlement européen ?",
      a: "Il l'est s'il aide une autorité judiciaire, ou la personne qui règle un litige hors des tribunaux, à rechercher et interpréter les faits et le droit (annexe III, point 8 a), avec des obligations applicables à partir du 2 décembre 2027. Une revue de contrats, une recherche documentaire ou une aide à la rédaction pour un cabinet ou une direction juridique n'entre pas dans cette catégorie. Le cabinet ou l'entreprise qui l'utilise reste tenu, comme tout déployeur, de prendre des mesures pour que ses équipes maîtrisent l'outil.",
    },
    {
      q: "Faut-il choisir un outil du marché ou un développement sur mesure ?",
      a: "Le CNB propose depuis juin 2025 une grille de choix sur quatre critères : souveraineté et sécurité des données, fonctionnalités, conformité éthique, coût. Un outil du marché suffit souvent quand le besoin porte sur les sources publiques du droit. Le sur-mesure se justifie quand l'outil doit appliquer votre grille de négociation, vos modèles ou votre classement interne. Masteria est indépendant des éditeurs et ne revend aucune licence.",
    },
    {
      q: "Combien coûte un outil d'IA pour un cabinet ou une direction juridique ?",
      a: "Le prix dépend du nombre de flux, du régime de confidentialité et de l'hébergement retenu, du service européen appelé à distance jusqu'au modèle installé sur vos serveurs. Nous travaillons au forfait, avec une proposition écrite qui fixe périmètre, livrables, calendrier et budget avant signature. Vous recevez le code et sa documentation en fin de projet, et vos équipes apprennent à les reprendre pendant la passation.",
    },
    {
      q: "Comment se passe le premier contact ?",
      a: "Un premier échange de 30 minutes, offert, situe votre régime de confidentialité et vos flux prioritaires. Quand le périmètre le demande, un Diagnostic IA payant classe ensuite vos documents et vos usages ; sa durée et son prix dépendent du nombre de flux à examiner et se fixent pendant ce premier échange. La proposition qui suit décrit l'outil, l'hébergement, la charte et la formation des équipes.",
    },
  ],

  sources: [
    { name: "Légifrance : loi n° 71-1130 du 31 décembre 1971, article 66-5 (secret professionnel de l'avocat)", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000508793" },
    { name: "Légifrance : loi n° 2026-122 du 23 février 2026 relative à la confidentialité des consultations des juristes d'entreprise", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053568123" },
    { name: "Légifrance : code pénal, article 226-13", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417945" },
    { name: "Légifrance : code pénal, article 226-18", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417968" },
    { name: "Légifrance : décret n° 2023-1297 du 28 décembre 2023 relatif au code de déontologie des notaires", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000048706693" },
    { name: "Légifrance : code de l'organisation judiciaire, article L. 111-13", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038311162" },
    { name: "Conseil national des barreaux : guide pratique, utilisation des systèmes d'intelligence artificielle générative (septembre 2024)", url: "https://cnb.avocat.fr/medias/cnb-guidepratique-utilisation-systemes-iag-2024-68f7b1d86e4570.98487114.pdf" },
    { name: "Conseil national des barreaux : le CNB accompagne la profession dans l'utilisation de l'IA générative (18 juin 2025)", url: "https://cnb.avocat.fr/actualite/le-cnb-accompagne-toujours-plus-la-profession-dans-l-utilisation-de-l-ia-generative" },
    { name: "EUR-Lex : règlement (UE) 2024/1689 sur l'intelligence artificielle (annexe III, point 8)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32024R1689" },
    { name: "EUR-Lex : règlement (UE) 2026/1744, train de mesures omnibus numérique sur l'IA", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra" },
  ],
}
