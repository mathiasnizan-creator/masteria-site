// Contenu propre à /ia-services-conseil. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Insee Première n° 2120 (21 juillet 2026, usage de l'IA par secteur en 2025), Légifrance (code de commerce art. L. 151-1), CNIL (RGPD, chapitre IV, art. 28), OpenAI (page « Confidentialité des entreprises » mise à jour le 8 janvier 2026), guides.ia.numerique.gouv.fr (guide d'usage de l'IA des agents de l'État), EUR-Lex (omnibus (UE) 2026/1744, article 4) ; retour de mission : étude de cas « conseil-financier ».
export default {
  slug: 'ia-services-conseil',
  dateModified: '2026-10-03',
  intro: "Un cabinet de conseil vend du temps d'expert et une matière : mémoires techniques, propositions, méthodologies, livrables. L'IA rapporte quand elle réutilise cette matière, et elle expose le cabinet quand elle la mélange d'un client à l'autre. Les deux se règlent au même moment, avant le premier assistant, dans le tri des documents et dans les droits d'accès. Masteria, cabinet IA basé à Lyon, capitalise votre matière par famille de besoin, la cloisonne par client et construit les assistants qui la remettent au travail.",

  offresIntro: [
    "Pour un cabinet de conseil, d'ingénierie ou de communication, notre conseil commence par l'inventaire de la matière déjà produite et des engagements de confidentialité qui pèsent sur chaque dossier.",
    "Le développement suit cet inventaire : un assistant par famille de besoin, nourri des documents que le cabinet a le droit de réutiliser, avec des espaces fermés par client pour le reste. Nous livrons le code, les consignes et un guide qui dit qui met à jour quoi, pour que la capitalisation continue après notre départ.",
  ],

  offres: [
    {
      desc: "Nous inventorions vos mémoires, propositions, méthodologies et livrables, puis nous les classons selon ce que vos contrats permettent de réutiliser. Le cadrage fixe les familles de besoin, les règles de cloisonnement par client, l'autorisation à demander aux clients pour leurs données personnelles et la charte d'usage des consultants, avec un porteur pour chaque règle.",
      points: ["Inventaire de la matière réutilisable", "Règles de cloisonnement par client", "Charte d'usage des consultants"],
    },
    {
      desc: "Nous construisons des assistants par famille de besoin : réponse aux appels d'offres, trame de livrable, préparation d'un comité de pilotage. Chaque assistant interroge le consultant avant de rédiger, s'appuie sur les mémoires les mieux notés et cite ses sources. Il s'intègre à votre stockage documentaire et à votre CRM (le logiciel de gestion de la relation client) quand le cas le demande.",
      points: ["Un assistant par famille de besoin", "Questions au consultant avant rédaction", "Intégration au stockage et au CRM"],
    },
    {
      desc: "Nous automatisons les tâches qui entourent la mission : qualification des avis d'appel public à la concurrence, extraction des pièces d'un dossier de consultation, mise au format des comptes rendus, préparation des fiches de référence à partir des missions terminées. Le consultant valide tout ce qui part vers un client ou vers un acheteur.",
      points: ["Qualification des avis de marché", "Fiches de référence à jour", "Comptes rendus mis au format du cabinet"],
    },
  ],

  regie: [
    "Pour un programme interne qui doit avancer vite, un développeur détaché rejoint l'équipe qui porte la connaissance du cabinet, par exemple la direction de l'offre ou celle des systèmes d'information. Il travaille sur vos espaces documentaires, avec les droits d'accès d'un collaborateur, et ne voit que les dossiers que la charte autorise. À la fin de la mission, les consignes, les corpus et les scripts restent chez vous, documentés.",
  ],

  formation: [
    "L'omnibus numérique de juillet 2026 a modifié l'article 4 du règlement européen sur l'IA : toute organisation qui déploie l'IA prend des mesures pour que ses équipes la maîtrisent. Pour un cabinet, la forme la plus utile consiste à former les consultants sur leurs livrables : rédiger une consigne précise, vérifier une source, reconnaître une information qui ne doit pas entrer dans l'outil, faire évoluer l'assistant de leur pôle.",
    "Les associés suivent une séquence à part sur la charte, la relation client et la mesure de la qualité des réponses. Pour les équipes, une journée en intra revient à 1 980 € HT par groupe de consultants ; comme Masteria détient la certification Qualiopi pour la formation, le dossier peut partir vers l'OPCO du cabinet.",
  ],

  guide: {
    kicker: "Guide cabinets de conseil",
    h2: "Un cabinet de conseil rentabilise l'IA en capitalisant sa matière par famille de besoin et en la cloisonnant client par client",
    lead: "Le conseil, l'ingénierie et la publicité appartiennent aux activités spécialisées, scientifiques et techniques, où un tiers des entreprises de dix salariés ou plus (33 %) utilisaient l'IA en 2025, contre 18 % de l'ensemble des entreprises françaises, selon l'Insee. Leurs homologues européennes atteignent 40 %. Les outils du marché se diffusent donc vite et deviennent communs à tous les cabinets. L'écart se creuse ailleurs : dans la matière propre qui nourrit l'outil, et dans la discipline avec laquelle on la protège.",
    sections: [
      {
        h3: "La matière du cabinet dort dans des dossiers classés par client",
        paras: [
          "Un cabinet a déjà produit l'essentiel de ce qu'un assistant devrait savoir : mémoires techniques notés, propositions gagnées et perdues, méthodologies, références détaillées, livrables. Cette matière est rangée par client et par année, plus rarement par famille de besoin. Un consultant qui prépare une réponse retrouve donc ce qu'il a lui-même écrit, et passe à côté de ce que ses collègues ont réussi ailleurs.",
          "La capitaliser demande un tri que la technique ne fait pas seule. Il faut décider quels documents servent de référence, retirer ce qui appartient au client, regrouper par famille de besoin et désigner qui tient chaque corpus à jour. Ce travail de conseil précède le développement, et il pèse davantage sur la qualité des réponses que le choix du modèle.",
        ],
      },
      {
        h3: "La confidentialité se règle client par client, et le RGPD exige parfois une autorisation écrite",
        paras: [
          "Vos clients vous confient des informations qu'ils protègent au titre du secret des affaires. L'article L. 151-1 du code de commerce ne protège une information que si son détenteur prend des mesures de protection raisonnables ; vos clients vous font signer des clauses de confidentialité notamment pour cette raison. Un consultant qui colle une note client dans un compte personnel d'assistant fragilise ces mesures, et le cabinet en répond au titre du contrat.",
          "Quand le cabinet traite des données personnelles pour le compte d'un client, par exemple une enquête auprès de ses salariés ou une analyse de son fichier clients, il agit en sous-traitant au sens du RGPD. L'article 28 lui interdit alors de recruter un autre sous-traitant sans l'autorisation écrite préalable, spécifique ou générale, de son client, et le fournisseur du modèle en est un. Cette autorisation se prévoit dans la lettre de mission ou dans l'accord de traitement des données.",
        ],
      },
      {
        h3: "Un espace d'équipe se paramètre comme l'accès aux dossiers clients",
        paras: [
          "Les offres professionnelles des éditeurs règlent une partie de la question. OpenAI indique, dans sa page sur la confidentialité des entreprises mise à jour le 8 janvier 2026, qu'il n'entraîne pas ses modèles par défaut sur les données de ChatGPT Business, de ChatGPT Enterprise et de sa plateforme API. La même page précise que les administrateurs d'un espace Business peuvent consulter, exporter et supprimer les conversations des utilisateurs.",
          "Pour un cabinet qui conseille deux concurrents, ce second point compte autant que le premier. Le rôle d'administrateur revient à une personne déjà habilitée à voir tous les dossiers, les projets partagés se créent par client avec une liste fermée de membres, et la charte dit ce qui se dépose où. Nous paramétrons ces règles avec vous, quel que soit l'éditeur retenu, et nous les vérifions avec des comptes de test avant l'ouverture aux équipes.",
        ],
      },
      {
        h3: "Le premier projet sur mesure réutilise les réponses qui ont gagné",
        paras: [
          "Une fois l'assistant d'équipe en place, nous recommandons la réponse aux appels d'offres comme premier projet sur mesure. Le volume revient chaque semaine, la matière existe déjà, et le cabinet suit le résultat dans son tableau des réponses gagnées et perdues. Les mémoires les mieux notés, les grilles d'analyse des consultations passées et les références détaillées forment la base. L'assistant ne rédige rien avant d'avoir interrogé le consultant sur le client, ses priorités et l'équipe proposée.",
          "Le découpage compte autant que les données. Un assistant unique pour toutes les familles de marchés mélange les registres, car la logique d'un dossier d'infrastructures diffère de celle d'une délégation de service public. Un assistant par famille, nourri de ses seuls mémoires, garde le vocabulaire et les preuves propres à chaque marché, et chaque pôle sait qui le met à jour.",
        ],
      },
      {
        h3: "Un cabinet qui travaille pour l'État hérite de la doctrine de son client",
        paras: [
          "Pour les agents de l'État, la DINUM a fixé la règle en juin 2026 dans son guide d'usage de l'IA : un outil commercial ne traite que des informations qui pourraient être publiées sur Internet, et seulement avec l'autorisation explicite de l'administration. Le guide étend la vigilance aux informations professionnelles non publiques : notes en cours d'arbitrage, projets confidentiels, données stratégiques. Un cabinet qui reçoit ces documents d'un ministère a tout intérêt à appliquer la même règle à ses propres outils.",
          "La règle s'écrit dans la charte du cabinet, client par client : quels documents de ce client peuvent entrer dans quel outil, et lesquels restent hors de toute IA. Elle protège le contrat en cours et sert les réponses suivantes, puisqu'elle montre à l'acheteur comment ses documents seront traités. Nous la rédigeons avec l'associé responsable de la relation et nous la rattachons aux espaces paramétrés.",
        ],
      },
    ],
    table: {
      caption: "Ce que chaque type de matière demande avant d'entrer dans un outil d'IA",
      headers: ["Matière du cabinet", "Règle qui s'applique", "Traitement avant usage"],
      rows: [
        ["Mémoires techniques et propositions gagnées", "Propriété du cabinet, sous réserve des informations sur les clients cités", "Tri par famille de besoin et retrait des éléments propres au client"],
        ["Notes d'analyse de dossiers de consultation publics", "Pièces publiées par l'acheteur", "Classement par acheteur et par type de marché"],
        ["Livrables de mission", "Clause de confidentialité du contrat et secret des affaires (code de commerce, art. L. 151-1)", "Anonymisation ou cloisonnement par client avant toute réutilisation"],
        ["Données personnelles traitées pour un client", "RGPD, art. 28 : le cabinet est sous-traitant", "Autorisation écrite du client avant de recourir à un fournisseur de modèle"],
        ["Documents non publics reçus d'une administration", "Guide d'usage de l'IA de l'État (DINUM, juin 2026)", "Aucun outil commercial sans l'accord explicite du client"],
        ["Conversations dans l'espace d'équipe", "Paramètres de l'éditeur, dont les droits des administrateurs", "Administrateur habilité à tous les dossiers et projets fermés par client"],
      ],
    },
    cas: {
      h3: "Retour de mission : un assistant par pôle pour capitaliser les mémoires qui gagnent",
      contexte: "Un cabinet indépendant de conseil financier d'une vingtaine de consultants, installé à Paris et à Lyon, produit un volume important de mémoires techniques pour des jurys publics exigeants. Ses offres se valent souvent sur le fond : la qualité rédactionnelle et la personnalisation décident. Le cabinet voulait produire plus vite, capitaliser les formulations qui gagnent et tenir la qualité malgré les délais, en protégeant les données des marchés.",
      etapes: [
        "Équiper d'abord chaque équipe, des consultants à l'administration, au marketing et à la comptabilité, d'un assistant encadré par des règles strictes de confidentialité.",
        "Établir un cahier de cadrage des pratiques rédactionnelles et une typologie des appels d'offres par pôle d'expertise.",
        "Constituer une base de connaissance priorisée : fiche du cabinet, modèles de mémoires, méthodologies d'assistance à maîtrise d'ouvrage, mémoires les mieux notés, références détaillées.",
        "Écrire et tester avec les consultants, en quatre ateliers de deux heures, les consignes des quatre assistants, chacun consacré à une famille de marchés.",
        "Former les équipes pendant une journée sur les deux sites, puis remettre un guide d'utilisation qui fixe qui met à jour quoi et les règles de sécurité.",
      ],
      resultat: "Chaque pôle dispose d'assistants qui parlent la langue de ses marchés, nourris de ses mémoires les mieux notés, dans un environnement d'entreprise qui n'entraîne aucun modèle avec les données du cabinet. Les formulations qui ont gagné sont capitalisées par pôle, l'écriture s'homogénéise entre consultants et entre sites, et la compétence reste dans le cabinet : le dispositif évolue sans Masteria.",
      lien: { href: "/etudes-de-cas-ia#conseil-financier", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      { titre: "Verser tous les livrables dans une base unique", texte: "Une base unique mélange les clients et rend intenable la promesse de confidentialité faite à chacun. La capitalisation se fait par famille de besoin, sur des documents triés, après retrait des éléments propres au client." },
      { titre: "Oublier l'autorisation du client pour ses données personnelles", texte: "Un cabinet sous-traitant qui confie ces données à un fournisseur de modèle sans autorisation écrite enfreint l'article 28 du RGPD. La clause se prévoit dans la lettre de mission, avant le premier traitement." },
      { titre: "Confier l'administration de l'espace d'équipe sans règle", texte: "Sur ChatGPT Business, l'administrateur peut consulter et exporter les conversations des utilisateurs. Ce rôle revient à une personne déjà habilitée à voir tous les dossiers clients." },
      { titre: "Laisser l'assistant rédiger avant de questionner", texte: "Un assistant qui écrit sans connaître le client produit un mémoire générique. Les assistants que nous construisons posent d'abord leurs questions au consultant : travaux déjà menés pour ce client, priorités du maître d'ouvrage, références à citer, équipe proposée." },
      { titre: "Mesurer le nombre de requêtes", texte: "Le volume d'utilisation ne dit rien de la valeur produite. Les indicateurs utiles sont ceux que le cabinet suit déjà : temps passé par réponse, taux de succès par famille de marchés, notes techniques obtenues quand l'acheteur les communique." },
    ],
  },

  faq: [
    {
      q: "Par quel projet un cabinet de conseil doit-il commencer ?",
      a: "Par un assistant d'équipe bien paramétré, puis par la réponse aux appels d'offres : la matière existe, le volume revient chaque semaine et le résultat se mesure. Un assistant par famille de besoin, nourri des mémoires les mieux notés, interroge le consultant avant de rédiger. La capitalisation des livrables de mission vient ensuite, quand les règles de cloisonnement par client sont posées.",
    },
    {
      q: "Nos clients doivent-ils autoriser l'usage de l'IA sur leurs dossiers ?",
      a: "Pour leurs données personnelles que vous traitez en sous-traitant, oui : l'article 28 du RGPD exige leur autorisation écrite préalable avant de recourir à un autre sous-traitant, comme un fournisseur de modèle. Pour le reste, la réponse se trouve dans vos contrats. Relisez les clauses de confidentialité avant de déployer, et prévoyez une mention type dans vos lettres de mission.",
    },
    {
      q: "Les éditeurs utilisent-ils nos données pour entraîner leurs modèles ?",
      a: "Chez OpenAI, la réponse est non par défaut pour ChatGPT Business, ChatGPT Enterprise et la plateforme API, selon sa page mise à jour le 8 janvier 2026. Vérifiez la même clause chez chaque éditeur retenu, ainsi que la durée de conservation et les droits des administrateurs, qui peuvent consulter les conversations sur certaines offres. Nous faisons cette vérification par écrit pendant le cadrage.",
    },
    {
      q: "Faut-il cloisonner les données par client ?",
      a: "Oui, dès que l'outil réutilise des livrables. Un consultant qui interroge la base sur un sujet ne doit recevoir aucune information propre à un autre client. Le cloisonnement se règle dans la structure de la base et dans les droits d'accès, après un tri des documents, et nous le testons avec des questions pièges avant l'ouverture aux équipes.",
    },
    {
      q: "Combien de temps faut-il pour construire un assistant de réponse aux appels d'offres ?",
      a: "Dans la mission menée pour un cabinet de conseil financier, les consignes de quatre assistants ont été écrites et testées en quatre ateliers de deux heures, après le cadrage et la constitution de la base de connaissance. Le calendrier de votre projet dépend surtout du tri des documents et du nombre de familles de marchés, qui se fixent pendant le cadrage.",
    },
    {
      q: "Un cabinet peut-il répondre aux marchés publics avec l'IA ?",
      a: "Oui. Les pièces du dossier de consultation sont publiées par l'acheteur, et vos mémoires vous appartiennent. La vigilance porte sur les références clients citées, à vérifier une à une, et sur les engagements chiffrés, qui doivent rester exacts. Un assistant ne doit jamais inventer une référence, un chiffre ou une certification : nous l'écrivons dans ses consignes et nous le testons.",
    },
    {
      q: "Combien coûte un projet pour un cabinet de conseil ?",
      a: "Le budget dépend du nombre de familles de besoin, du volume de documents à trier et de l'intégration à vos outils (stockage documentaire, CRM, suite bureautique). Nous travaillons au forfait, avec périmètre, livrables, calendrier et prix écrits avant signature. La formation des consultants se chiffre à part, à 1 980 € HT la journée intra, et peut être financée par votre OPCO.",
    },
    {
      q: "Quelle est la première étape avec Masteria ?",
      a: "Un échange de 30 minutes, offert, avec un associé et la personne qui pilote les réponses aux appels d'offres. Si le périmètre le justifie, un Diagnostic IA payant inventorie ensuite votre matière et vos flux, calibré pendant cet échange, en durée comme en forfait, selon le volume de documents. La proposition qui suit précise les familles d'assistants, la base, les règles de confidentialité et la formation.",
    },
  ],

  sources: [
    { name: "Insee Première n° 2120 : les technologies de l'information et de la communication dans les entreprises en 2025 (21 juillet 2026)", url: "https://www.insee.fr/fr/statistiques/9025878" },
    { name: "Légifrance : code de commerce, article L. 151-1 (secret des affaires)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037266553" },
    { name: "CNIL : règlement général sur la protection des données, chapitre IV (article 28, sous-traitant)", url: "https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4" },
    { name: "OpenAI : confidentialité des entreprises (mise à jour du 8 janvier 2026)", url: "https://openai.com/fr-FR/enterprise-privacy/" },
    { name: "DINUM : guide d'usage de l'IA pour les agents publics de l'État, partie 3 « les 5 principes fondamentaux »", url: "https://guides.ia.numerique.gouv.fr/guides/guide-dusage-de-lia-pour-les-agents-publics-de-letat/partie-3-les-5-principes-fondamentaux" },
    { name: "EUR-Lex : règlement (UE) 2026/1744, train de mesures omnibus numérique sur l'IA (article 4, maîtrise de l'IA)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/fra" },
  ],
}
