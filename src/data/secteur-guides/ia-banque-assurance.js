// Contenu propre à /ia-banque-assurance. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : EUR-Lex (règlement DORA (UE) 2022/2554 art. 28, 30 et 64 ; règlement (UE) 2024/1689 art. 6, 27, 50, 113 et annexe III ; omnibus (UE) 2026/1744), ACPR (recommandation 2024-R-02 du 2 juillet 2024, qui remplace la 2022-R-01), Légifrance (CMF art. L. 511-33 et L. 561-18, code des assurances art. L. 354-3, arrêté du 3 novembre 2014 art. 232), Banque de France (discours de Denis Beau du 9 septembre 2026), AMF (communiqué du 2 février 2026). Aucune étude de cas publiée ne relève du secteur : le cas est une mise en situation.
export default {
  slug: 'ia-banque-assurance',
  dateModified: '2026-10-07',
  pagePropre: true,
  secteur: {
    metaTitle: "IA banque & assurance : cabinet conseil IA | Masteria",
    metaDesc: "IA pour la banque et l'assurance : synthèse de dossiers, conformité LCB-FT, souscription. Conseil et dev sur mesure. 30 min de cadrage offertes.",
  },
  hero: {
    chips: ["DORA et contrats de prestataires", "Réclamations sous la recommandation 2024-R-02", "Secret bancaire préservé"],
    lien: "Voir les règles qui cadrent le projet",
  },
  offresTitre: {
    kicker: "Trois entrées pour un établissement",
    h2: "Classer vos cas par texte, outiller les dossiers, automatiser les dépouillements",
  },
  enjeux: {
    kicker: "Banque, assurance, gestion d'actifs",
    h2: "L'IA rend du temps entre la pièce reçue et la décision",
    difficultes: "Les points de friction d'un établissement financier",
    prestations: "Les outils que nous développons pour la finance",
  },
  regieBloc: {
    kicker: "Développeur détaché",
    h2: "Coder derrière votre pare-feu, à côté de vos équipes conformité",
    accroche: "Quand les dossiers de crédit, les sinistres ou les échanges avec les clients ne doivent pas sortir de votre système d'information, le développeur IA rejoint vos équipes dans votre environnement contrôlé et documente chaque accès pour votre contrôle interne.",
    lien: "Les modèles d'engagement possibles",
  },
  formationBloc: {
    kicker: "Former conseillers et gestionnaires",
    h2: "Des ateliers sur vos réclamations et sur des dossiers anonymisés",
    lien: "Voir l'offre de formation",
  },
  faqBloc: {
    h2: "Banque et assurance : vos questions",
    texte: "Un point de conformité vous retient avant de lancer le projet ?",
    lien: "Posez-le à notre équipe",
  },
  maillage: {
    h2: "D'autres secteurs régulés",
  },
  cta: {
    titre: "Quel dossier de votre établissement outiller en premier ?",
    texte: "Dites-nous quel flux vous occupe (réclamations, souscription, contrôle interne) et quel texte s'y applique. Nous revenons vers vous sous 24 heures pour caler les 30 minutes de cadrage offertes, avec votre conformité si vous le souhaitez.",
  },
  equipe: {
    titre: "Une équipe réunie autour de votre conformité",
    texte: "Masteria est l'entreprise de Mathias Nizan, créée à Lyon en 2022. Pour une banque ou un assureur, Mathias constitue l'équipe selon le dossier : un consultant qui traduit DORA et le règlement sur l'IA en exigences de projet, un développeur qui travaille dans votre environnement, un formateur pour les conseillers. Ces intervenants sont indépendants, et aucun ne vend de licence ni de plateforme.",
  },
  intro: "Dans une banque ou une compagnie d'assurance, un outil d'IA générative entre dans un cadre déjà écrit. Le règlement DORA gouverne le contrat du fournisseur de modèle, les règles d'externalisation fixent ce que le superviseur doit savoir, et le règlement européen sur l'IA encadre tout outil qui note un client. Masteria, cabinet spécialisé en IA fondé à Lyon en 2022, instruit ces points avec votre conformité et votre sécurité informatique avant de développer l'outil chez vous. Nous conseillons de commencer par le traitement des réclamations, un processus déjà daté et mesuré.",

  offresIntro: [
    "En banque et en assurance, notre conseil part des textes que votre conformité applique déjà, et le développement entre dans vos circuits de validation, de la revue de sécurité au registre des prestataires.",
    "Chaque proposition décrit l'outil, les données lues, l'hébergement, le fournisseur du modèle et le lieu où il traite les données, pour que votre direction des risques puisse classer le service dans son registre et décider s'il soutient une fonction critique ou importante. Comme le code et sa documentation vous reviennent, un changement de prestataire reste possible le jour où votre politique l'exige.",
  ],

  offres: [
    {
      title: "Cartographie réglementaire des cas d'usage",
      cta: "Notre conseil en stratégie IA",
      desc: "Nous classons vos cas d'usage selon le texte qui les gouverne : réclamations sous la recommandation ACPR 2024-R-02, scoring sous l'annexe III du règlement européen sur l'IA, prestataires sous DORA, dossiers de vigilance sous les règles de lutte contre le blanchiment. Chaque cas reçoit un niveau de risque, un porteur métier et une condition de validation, dans une feuille de route que votre comité des risques peut arbitrer.",
      points: ["Classement des cas par texte applicable", "Éléments pour le registre DORA", "Feuille de route arbitrable"],
    },
    {
      title: "Assistants qui lisent contrats et procédures",
      cta: "Notre atelier de développement",
      secondaryCta: "Outils sur mesure par métier",
      desc: "Nous développons des assistants qui lisent vos contrats et vos procédures : qualification et projet de réponse à une réclamation, fiche de synthèse d'un dossier professionnel, comparaison de garanties entre deux contrats. Chaque proposition de l'outil cite la clause ou la pièce source, et l'historique des échanges est journalisé dans votre environnement pour le contrôle permanent.",
      points: ["Projets de réponse sourcés", "Journalisation pour le contrôle permanent", "Déploiement dans votre environnement"],
    },
    {
      title: "Dépouillements automatisés avant décision",
      cta: "Automatiser un processus avec nous",
      desc: "Nous automatisons les dépouillements qui précèdent une décision humaine : tri des courriers entrants, extraction des pièces d'un dossier, calcul des échéances réglementaires, préparation des tableaux de suivi du contrôle interne. Aucune réponse ne part vers un client sans la validation d'un gestionnaire, et les automatisations tournées vers le client n'ont jamais accès aux dossiers de vigilance.",
      points: ["Tri et routage des courriers", "Échéances réglementaires calculées", "Périmètres de données cloisonnés"],
    },
  ],

  regie: [
    "Un développeur détaché s'intègre à votre chaîne de mise en production : poste fourni par la banque ou l'assureur, accès ouverts au cas par cas, revue de code et recette menées par vos équipes. Dès que la prestation devient un service continu, comme la maintenance d'un outil en production, elle relève en principe des services informatiques visés par DORA et entre dans votre registre d'informations : nous fournissons les éléments nécessaires à son enregistrement dès la signature.",
  ],

  formation: [
    "Nous formons les gestionnaires de réclamations à relire un projet de réponse contre le contrat, les conseillers à préparer un entretien avec un assistant autorisé, les équipes de conformité à contrôler la traçabilité d'un outil. Depuis l'omnibus numérique, l'article 4 du règlement européen sur l'IA demande à chaque déployeur de prendre des mesures pour la maîtrise de l'IA de son personnel : une session documentée, avec son programme et sa liste de présence, fait partie des preuves que votre conformité peut produire.",
    "Chaque session réunit un service autour de ses propres pièces : courriers types, conditions générales, procédures, avec des exemples dépouillés de toute donnée client. La journée intra coûte 1 980 € HT par groupe, et l'OPCO de la banque ou de l'assurance peut la financer, la certification Qualiopi de Masteria couvrant ses actions de formation.",
  ],

  guide: {
    kicker: "Guide banque et assurance",
    h2: "En banque et en assurance, le premier projet rentable est celui dont la règle est déjà écrite",
    lead: "La quasi-totalité des banques et des assureurs dispose désormais de cas d'usage d'IA en production, selon une enquête de l'ACPR menée en 2025 et citée le 9 septembre 2026 par Denis Beau, premier sous-gouverneur de la Banque de France. Côté marchés, l'AMF relève en février 2026 que 90 % des 100 acteurs qu'elle a interrogés utilisent l'IA ou prévoient de le faire dans les douze mois. Reste à choisir les cas que votre conformité peut défendre devant le superviseur, en commençant par celui dont le gain se mesure le plus tôt.",
    sections: [
      {
        h3: "DORA fait entrer le fournisseur du modèle dans votre registre",
        paras: [
          "Le règlement (UE) 2022/2554, dit DORA, s'applique depuis le 17 janvier 2025. Son article 28 impose de tenir un registre de tous les accords portant sur des services TIC (technologies de l'information et de la communication) fournis par des tiers, en distinguant ceux qui soutiennent des fonctions critiques ou importantes. L'autorité compétente doit être informée en temps utile de tout projet d'accord de ce type. L'API d'un modèle de langage, son hébergeur et le prestataire qui maintient l'outil y figurent.",
          "L'article 30 fixe le contenu minimal du contrat : description des services, régions ou pays où les données sont traitées et stockées avec l'obligation de prévenir avant tout changement, restitution des données en cas de défaillance ou de résiliation, assistance en cas d'incident, coopération avec les autorités compétentes. Pour un service qui soutient une fonction critique, s'ajoutent des droits illimités d'accès, d'inspection et d'audit. Le choix du fournisseur se fait donc avec votre direction juridique, contrat en main, avant la première ligne de code.",
        ],
      },
      {
        h3: "Le secret bancaire et les règles d'externalisation organisent le recours au prestataire",
        paras: [
          "Pour une banque, l'article L. 511-33 du code monétaire et financier soumet au secret professionnel les dirigeants et les salariés des établissements de crédit et des sociétés de financement. Le même article autorise la communication d'informations couvertes à un prestataire auquel l'établissement confie des fonctions opérationnelles importantes, à charge pour lui de les garder confidentielles. L'arrêté du 3 novembre 2014 sur le contrôle interne demande en outre d'informer l'ACPR des externalisations de prestations essentielles, par une extraction annuelle du registre.",
          "Un assureur relève d'autres textes. L'article L. 354-3 du code des assurances lui laisse l'entière responsabilité de ses obligations quand il externalise, et lui impose d'informer l'ACPR, préalablement et en temps utile, de son intention d'externaliser une fonction ou une activité importante ou critique. Le secret de l'article L. 511-33 ne le vise pas : sa confidentialité se construit à partir du RGPD et de ses engagements contractuels. Nous écrivons la note d'externalisation dans le format que votre établissement utilise déjà.",
        ],
      },
      {
        h3: "Le score de crédit et la tarification santé deviennent des systèmes à haut risque",
        paras: [
          "L'annexe III du règlement (UE) 2024/1689 vise les systèmes qui évaluent la solvabilité des personnes physiques ou établissent leur note de crédit, hors détection de fraude, et ceux qui évaluent les risques et fixent les prix en assurance vie et en assurance maladie. L'omnibus numérique de juillet 2026 (règlement 2026/1744) a repoussé ces obligations au 2 décembre 2027. L'ACPR sera chargée de surveiller ces systèmes à compter de cette date, a précisé Denis Beau en septembre 2026.",
          "Le déployeur d'un tel système évalue d'abord son incidence sur les droits fondamentaux, avant la première utilisation (article 27). Un outil qui prépare une fiche de synthèse peut rester hors du haut risque comme tâche préparatoire (article 6), s'il ne profile pas le client et si son fournisseur documente l'appréciation. La solvabilité d'une société n'entre pas dans le point 5 b, qui vise les personnes physiques ; celle d'un entrepreneur individuel ou d'un dirigeant caution y entre.",
        ],
      },
      {
        h3: "Les réclamations offrent un premier projet dont le cahier des charges existe",
        paras: [
          "La recommandation ACPR 2024-R-02 du 2 juillet 2024 décrit le processus attendu. Le professionnel accuse réception d'une réclamation écrite sous dix jours ouvrables, répond de façon claire et argumentée sous deux mois au plus, mentionne dans chaque réponse le médiateur compétent et la façon de le saisir, enregistre réclamations et réponses. Au moins une fois par an, une synthèse des dysfonctionnements identifiés remonte aux instances de gouvernance.",
          "Chaque étape se prête à un assistant : distinguer une réclamation d'une simple demande d'information selon les exemples de l'annexe, retrouver le contrat et la clause en cause, préparer un projet de réponse qui cite cette clause et mentionne le médiateur, calculer les échéances. Le gestionnaire valide et signe. Les indicateurs existent déjà dans votre registre (délai moyen, réponses hors délai, réclamations requalifiées), ce qui permet de mesurer le gain sur vos propres chiffres.",
        ],
      },
      {
        h3: "La lutte contre le blanchiment impose un cloisonnement strict des données",
        paras: [
          "L'article L. 561-18 du code monétaire et financier rend confidentielle la déclaration de soupçon adressée à Tracfin et interdit d'en révéler l'existence, le contenu ou les suites au client comme à un tiers. Un assistant qui lit le dossier d'un client pour répondre à sa réclamation ne doit donc jamais avoir accès aux dossiers de vigilance. La séparation se règle dans les droits d'accès et dans la composition des corpus, avant toute question de prompt (la consigne donnée au modèle).",
          "Côté analystes, l'outil aide à préparer un examen renforcé : il rassemble les pièces, résume les flux et rédige un projet de note que l'analyste complète et signe. La décision de déclarer reste humaine, et la trace de chaque étape alimente le contrôle permanent. Ces deux outils, celui du client et celui de la conformité, n'ont ni le même corpus ni les mêmes utilisateurs, et nous les livrons comme deux applications distinctes.",
        ],
      },
    ],
    table: {
      caption: "Quel texte s'applique à quel outil en banque et en assurance",
      headers: ["Outil", "Texte", "Ce que le projet doit prévoir"],
      rows: [
        ["Projet de réponse à une réclamation", "Recommandation ACPR 2024-R-02", "Accusé de réception sous dix jours ouvrables, réponse sous deux mois, mention du médiateur"],
        ["Appel à l'API d'un modèle de langage", "DORA, articles 28 et 30", "Inscription au registre, lieux de traitement au contrat, restitution des données"],
        ["Score de crédit d'un particulier", "Règlement (UE) 2024/1689, annexe III, point 5 b", "Haut risque à compter du 2 décembre 2027, avec analyse d'impact (article 27)"],
        ["Tarification en assurance vie ou maladie", "Règlement (UE) 2024/1689, annexe III, point 5 c", "Mêmes obligations, à la même date"],
        ["Fiche de synthèse d'un dossier de société", "Annexe III, point 5 b, limité aux personnes physiques", "Hors champ tant qu'aucun dirigeant ni aucune caution n'est évalué"],
        ["Préparation d'un examen de vigilance", "Code monétaire et financier, article L. 561-18", "Corpus et droits d'accès séparés des outils tournés vers le client"],
      ],
    },
    cas: {
      h3: "Mise en situation : un assureur de dommages outille ses réclamations écrites",
      contexte: "Prenons un assureur de dommages de taille régionale. Son service réclamations reçoit chaque jour des courriers et des courriels qui mêlent vraies réclamations, demandes de pièces et relances de sinistres. Les gestionnaires répondent à la main, en cherchant les conditions générales et particulières du contrat dans deux outils différents. La direction veut tenir le délai de deux mois de la recommandation de l'ACPR et nourrir sa synthèse annuelle sans ressaisie.",
      etapes: [
        "Extraire douze mois de réclamations écrites, avec leurs réponses et leur qualification dans le registre, comme jeu de référence.",
        "Traduire l'annexe de la recommandation en règles de qualification : expression d'un mécontentement, demande de geste commercial, simple demande d'information.",
        "Construire l'assistant : il qualifie le message, retrouve le contrat, propose un projet de réponse qui cite la clause et mentionne le médiateur, puis calcule les deux échéances.",
        "Rejouer les réclamations de l'année et comparer, avec les gestionnaires, les qualifications et les projets de l'assistant aux réponses envoyées à l'époque.",
        "Mettre en service avec la validation de chaque réponse par un gestionnaire, puis brancher les qualifications sur la synthèse annuelle des dysfonctionnements.",
      ],
      resultat: "Le gestionnaire part d'un projet sourcé au lieu d'une page blanche, et la conformité dispose d'une qualification homogène des réclamations. Le gain se mesure sur les indicateurs du registre, relevés avant et après la mise en service : délai de réponse, part des réponses sous deux mois, réclamations requalifiées. Aucun chiffre n'est annoncé avant cette mesure.",
    },
    pieges: [
      { titre: "Brancher une API avant de lire le contrat", texte: "Le contrat d'un fournisseur de modèle doit contenir les clauses de l'article 30 de DORA, dont les lieux de traitement des données. Un pilote lancé avec une clé souscrite en ligne oblige à refaire le choix du fournisseur si ces clauses manquent au moment de l'inscription au registre." },
      { titre: "Laisser le corpus des réclamations voir les dossiers de vigilance", texte: "Une déclaration de soupçon ne doit jamais transparaître dans une réponse au client. La séparation se règle dans les droits d'accès de l'assistant ; une consigne de prudence dans le prompt ne suffit pas." },
      { titre: "Ajouter une note de solvabilité à un outil de synthèse", texte: "Le jour où la fiche d'un particulier comporte un score, l'outil devient un système à haut risque, avec analyse d'impact pour le déployeur et obligations lourdes pour le fournisseur." },
      { titre: "Appliquer à l'assureur les règles de la banque", texte: "Le secret de l'article L. 511-33 et l'extraction annuelle du registre d'externalisation concernent la banque. L'assureur informe l'ACPR avant d'externaliser une fonction importante ou critique, selon l'article L. 354-3 du code des assurances." },
      { titre: "Ouvrir un assistant aux clients sans l'annoncer", texte: "Un client qui écrit à l'assistant doit savoir qu'il échange avec une machine : l'article 50 du règlement européen sur l'IA l'impose depuis le 2 août 2026, sauf si c'est évident pour une personne normalement attentive. Le message d'accueil le dit, et un conseiller reprend la main sur demande." },
    ],
  },

  faq: [
    {
      q: "DORA s'applique-t-il à un outil d'IA générative ?",
      a: "Oui, dès qu'un tiers fournit le service de façon continue : l'API du modèle, l'hébergement, la maintenance. L'article 28 impose de l'inscrire au registre d'informations et d'indiquer s'il soutient une fonction critique ou importante ; l'article 30 fixe les clauses minimales du contrat, dont les lieux de traitement des données. Nous fournissons ces éléments pour chaque composant de la solution.",
    },
    {
      q: "Faut-il prévenir l'ACPR avant de lancer un projet ?",
      a: "Pour un service informatique qui soutiendra une fonction critique ou importante, DORA demande d'informer l'autorité compétente en temps utile du projet d'accord. Une banque informe aussi l'ACPR de ses externalisations de prestations essentielles par l'extraction annuelle de son registre (arrêté du 3 novembre 2014, article 232). Un assureur l'informe préalablement de son intention d'externaliser une fonction importante ou critique (code des assurances, article L. 354-3).",
    },
    {
      q: "Une fiche de synthèse de dossier de crédit est-elle à haut risque ?",
      a: "Elle échappe au haut risque si elle reste une tâche préparatoire, sans profilage, et que son fournisseur documente cette appréciation (article 6 du règlement européen sur l'IA). Elle y entre dès qu'elle évalue la solvabilité d'une personne physique ou lui attribue une note. Pour une société, le point 5 b de l'annexe III ne s'applique pas, sauf si l'outil évalue aussi un dirigeant ou une caution.",
    },
    {
      q: "Quand les obligations sur le scoring de crédit s'appliquent-elles ?",
      a: "À partir du 2 décembre 2027 pour les systèmes de l'annexe III, depuis l'omnibus numérique publié au Journal officiel de l'Union le 24 juillet 2026. L'ACPR sera chargée de leur surveillance à compter de décembre 2027. D'ici là, les déployeurs préparent l'analyse d'impact de l'article 27, qui décrit le processus, la durée et la fréquence d'utilisation, les personnes concernées, les risques et les mesures de contrôle humain.",
    },
    {
      q: "Le secret bancaire empêche-t-il de travailler avec un prestataire d'IA ?",
      a: "L'article L. 511-33 du code monétaire et financier prévoit ce cas : un établissement de crédit peut communiquer des informations couvertes par le secret à un prestataire auquel il confie des fonctions opérationnelles importantes, et ce prestataire doit les garder confidentielles. Le contrat, le registre DORA et les droits d'accès de l'outil encadrent ensuite ce qui peut être lu, et par qui.",
    },
    {
      q: "Par quel cas d'usage commencer ?",
      a: "Par un processus déjà encadré et mesuré : le traitement des réclamations sous la recommandation ACPR 2024-R-02 en est l'exemple type. Les délais (dix jours ouvrables, deux mois), le contenu attendu des réponses et le registre existent déjà, ce qui permet de mesurer le gain sur vos propres indicateurs. Le score de crédit, lui, demande une analyse de conformité bien plus lourde avant le moindre prototype.",
    },
    {
      q: "Et pour une société de gestion ou un prestataire de services d'investissement ?",
      a: "L'AMF a publié le 2 février 2026 une étude menée auprès de 100 acteurs : 54 % des répondants ont déjà des cas d'usage en production, 83 % des 106 cas détaillés servent des usages internes, et 72 % des entités ont adopté une politique de gouvernance de l'IA. L'AMF relève aussi une forte dépendance à un petit nombre de prestataires non européens. Le registre DORA et le choix du fournisseur y prennent donc la même place qu'en banque.",
    },
    {
      q: "Comment se déroule un projet avec Masteria ?",
      a: "Tout part de 30 minutes de cadrage offertes, avec votre métier et votre conformité autour de la table. Un Diagnostic IA payant suit si le périmètre le demande ; son contenu, sa durée et son forfait s'arrêtent avec votre conformité lors de ce cadrage. La proposition forfaitaire décrit ensuite l'outil, les données, le fournisseur du modèle et sa localisation, le calendrier et le budget, et le code comme la documentation vous sont livrés à la passation.",
    },
  ],

  sources: [
    { name: "EUR-Lex, DORA (règlement (UE) 2022/2554) : contrats avec les prestataires TIC, articles 28, 30 et 64", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32022R2554" },
    { name: "EUR-Lex, règlement (UE) 2024/1689 : notation de crédit et tarification d'assurance (annexe III), transparence (article 50)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32024R1689" },
    { name: "EUR-Lex, omnibus (UE) 2026/1744 : le haut risque bancaire reporté au 2 décembre 2027", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra" },
    { name: "ACPR : recommandation 2024-R-02 du 2 juillet 2024 sur le traitement des réclamations", url: "https://acpr.banque-france.fr/system/files/2024-12/20240702_Recommandation_2024-R-02.pdf" },
    { name: "Banque de France : Denis Beau sur les nouvelles frontières du risque lié à l'IA (discours du 9 septembre 2026)", url: "https://www.banque-france.fr/system/files/2026-09/Discours-D-Beau_2026-09-09_ADB-Conference-IA.pdf" },
    { name: "AMF : l'intelligence artificielle déjà largement adoptée par les acteurs des marchés financiers (communiqué du 2 février 2026)", url: "https://www.amf-france.org/fr/actualites-publications/communiques/communiques-de-lamf/lintelligence-artificielle-deja-largement-adoptee-par-les-acteurs-des-marches-financiers-selon-une" },
    { name: "Légifrance : code monétaire et financier, article L. 511-33 (secret professionnel bancaire)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049391715" },
    { name: "Légifrance : code monétaire et financier, article L. 561-18 (confidentialité de la déclaration de soupçon)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037825428" },
    { name: "Légifrance : code des assurances, article L. 354-3 (externalisation)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030434520" },
    { name: "Légifrance : arrêté du 3 novembre 2014 relatif au contrôle interne des entreprises du secteur de la banque (article 232)", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000029700770" },
  ],
}
