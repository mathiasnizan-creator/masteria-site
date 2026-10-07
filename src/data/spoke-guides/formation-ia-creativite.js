// Contenu propre à /formation-ia-creativite (page propre, guide terrain). Rendu par SpokePage.
// Formation d'un jour. Études (Science Advances, Wharton, MIT), conditions d'OpenAI et
// d'Anthropic, INPI, TMview et Copyright Office repris du guide du 03/10 avec leurs sources.
// Revu le 07/10/2026 : outils d'images et compétences selon la fiche FAITS-OUTILS du 07/10 ;
// article 50 de l'AI Act (applicable depuis le 02/08/2026, marquage des éditeurs au 02/12/2026).
export default {
  slug: 'formation-ia-creativite',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation créativité avec l'IA : des idées plus variées, vérifiées avant d'être adoptées",
  metaTitle: "Formation créativité avec l'IA (1 jour) | Masteria",
  metaDesc: "Formation créativité avec l'IA en 1 jour : brainstorming en étapes, naming vérifié à l'INPI, concepts de campagne, images et article 50. Qualiopi, OPCO.",
  resume: "La formation créativité avec l'IA donne en une journée à une équipe marketing, produit ou direction des méthodes pour tirer d'un assistant d'IA des pistes moins convenues, puis pour trier, vérifier et décider entre personnes. Elle se déroule chez vous ou en visioconférence, avec douze participants au plus ou en tête-à-tête, et se facture 1 980 € HT. Titulaire de Qualiopi dans la catégorie « actions de formation », Masteria vous ouvre l'accès à l'OPCO de votre branche, qui peut participer à la dépense suivant ses critères et l'enveloppe qui lui reste.",
  enBref: [
    { label: 'Formation', value: "Idéation, noms de marque, concepts de campagne et critique de projet avec Gemini, Claude, Copilot, ChatGPT ou Vibe" },
    { label: 'Durée', value: "Une journée de sept heures, découpée en six modules qui alternent méthode et production sur vos sujets" },
    { label: 'Formats', value: "Sur place, dans une de vos salles, ou en visioconférence ; douze participants de l'entreprise au maximum, ou une seule personne" },
    { label: 'Tarif', value: "1 980 € HT pour la journée, groupe entier ou personne seule, TVA de 20 % non comprise" },
    { label: 'Financement', value: "Certification Qualiopi de Masteria, catégorie « actions de formation » ; l'OPCO de votre branche statue d'après ses critères et ses fonds" },
    { label: 'Prérequis', value: "Un compte professionnel sur un assistant d'IA et un sujet créatif en cours dans l'équipe : un nom, une campagne, une offre" },
  ],
  prerequis: "Un compte professionnel sur un assistant d'IA et un sujet créatif en cours dans l'équipe : un nom, une campagne, une offre",
  intro: "Un assistant d'IA commence par proposer les idées les plus probables, et rien n'empêche un concurrent de recevoir les mêmes. Cette journée apprend à votre équipe à l'emmener plus loin : demandes découpées en étapes, contraintes fortes, concepts qui s'opposent, critique confiée à des profils précis. Elle couvre aussi la suite de l'idée, depuis la recherche d'antériorité d'un nom jusqu'à la mention qui accompagne certaines images générées. Le choix final appartient à l'équipe, et la journée lui donne une méthode pour le faire.",
  guide: {
    kicker: "Guide terrain créativité",
    h2: "L'IA rend chaque idée meilleure et toutes les idées plus semblables",
    lead: "Deux effets se superposent dès qu'une équipe cherche des idées avec un assistant d'IA. Chaque proposition gagne en qualité, surtout chez les personnes dont la créativité de départ est la plus faible. L'éventail des propositions se resserre, parce que tout le monde puise dans les suggestions du même modèle. Le premier effet profite à chaque personne ; le second prive la marque de ce qui la distingue. Les méthodes de la journée conservent le premier et corrigent le second.",
    sections: [
      {
        h3: "Deux études mesurent ce que l'IA fait aux idées d'un groupe",
        paras: [
          "En 2024, Anil Doshi (UCL School of Management) et Oliver Hauser (université d'Exeter) ont demandé à 293 personnes d'écrire une histoire de huit phrases. Une partie des auteurs pouvait obtenir de GPT-4 une amorce de trois phrases : une seule pour un groupe, jusqu'à cinq pour un autre. Six cents lecteurs ont noté les textes sans savoir lesquels avaient reçu l'aide de l'IA. Avec jusqu'à cinq amorces, la nouveauté des histoires progresse de 8,1 % et leur potentiel de publication (adaptation au public, chances de séduire un éditeur) de 9 %. Les gains culminent chez les auteurs dont la créativité, mesurée par un test avant l'écriture, était la plus faible : 10,7 % et 11,5 %.",
          "Ces histoires se ressemblent aussi davantage entre elles que celles des auteurs livrés à eux-mêmes. Les chercheurs y voient un dilemme social : chaque auteur y gagne, et le groupe produit un éventail d'idées plus étroit. Un service dont tous les membres interrogent le même assistant avec la même demande reproduit ce dilemme à son échelle.",
          "À la Wharton School, Lennart Meincke, Ethan Mollick et Christian Terwiesch ont comparé 35 manières de demander à GPT-4 des idées de produits pour étudiants, vendus moins de 50 dollars. Les listes de l'IA varient moins que celles d'étudiants de MBA. La consigne qui s'approche le plus de la variété humaine découpe le travail : une centaine d'idées courtes, puis des idées rendues audacieuses et différentes, puis leur description. Ce découpage porte le nombre estimé d'idées uniques sur le sujet d'environ 3 700 à 4 700. Demander à l'IA de penser comme Steve Jobs produit un effet plus modeste.",
        ],
      },
      {
        h3: "Six méthodes écartent l'assistant des réponses attendues",
        paras: [
          "Chaque méthode répond à un besoin précis et se combine avec les autres. La journée les pratique sur un sujet de votre entreprise, dans l'assistant que vous utilisez déjà.",
        ],
        list: [
          "Les contraintes : trois à cinq exigences fortes (un public, un prix, une longueur, des mots interdits) obligent l'assistant à quitter les formulations les plus fréquentes.",
          "Les angles opposés : trois concepts qui ne partagent ni la promesse ni le ton, pour une même campagne.",
          "SCAMPER, appliqué à une offre existante : substituer, combiner, adapter, modifier, proposer un autre usage, éliminer, réorganiser, une question après l'autre.",
          "Les analogies : chercher comment un autre secteur a résolu le même problème, puis transposer sa solution.",
          "Le découpage en étapes : une liste longue, une sélection rendue plus audacieuse, puis la description des pistes retenues.",
          "Les itérations : faire critiquer une proposition, la réécrire, recommencer trois ou quatre fois avant de retenir quoi que ce soit.",
        ],
      },
      {
        h3: "L'équipe produit ses idées avant d'ouvrir l'assistant",
        paras: [
          "Une méta-analyse du MIT (une synthèse statistique de nombreuses études), publiée en 2024 dans Nature Human Behaviour, a réuni 106 expériences qui comparent des personnes seules, une IA seule et leur association. En moyenne, le duo fait moins bien que la meilleure des deux parties prise isolément. Il recule sur les tâches où il faut décider et progresse sur celles où il faut créer, avec un écart statistiquement significatif entre les deux. Il progresse aussi lorsque les personnes, seules, faisaient mieux que l'IA.",
          "Une séance de créativité tire parti de ces résultats en fixant l'ordre des étapes. Chaque participant note d'abord ses idées seul, pendant dix minutes. Chacun reçoit ensuite une méthode différente pour interroger l'assistant, ce qui évite que tout le groupe obtienne la même liste. Les critères de choix sont arrêtés avant la mise en commun, et le vote a lieu entre personnes.",
          "L'assistant garde un rôle de contradicteur : il cherche les objections qu'un client ou un concurrent opposerait à une piste retenue. La décision revient à l'équipe, puisque c'est sur ce type de tâche que l'association entre humains et IA perd en moyenne.",
        ],
      },
      {
        h3: "Les images de l'atelier ont leurs outils, leurs quotas et leurs règles",
        paras: [
          "Les assistants ne sont pas égaux devant l'image. ChatGPT dessine avec son modèle Images 2.5, lancé le 8 septembre 2026. Dans Google Workspace, un compte Business Standard ou Plus a droit chaque mois à 30 images Nano Banana Pro, après quoi Google bascule sur un modèle plus ancien, et à un peu plus de huit minutes de vidéo générée dans Vids (500 secondes), selon la page d'aide de Google actualisée le 7 octobre 2026. Vibe confie ses images à des modèles conçus par Black Forest Labs. Pour un atelier, ces quotas comptent : une séance de déclinaison visuelle peut épuiser en une matinée l'enveloppe mensuelle d'un compte.",
          "Les éditeurs, de leur côté, doivent marquer les contenus générés de manière lisible par une machine. Pour un outil commercialisé avant le 2 août 2026, ce marquage doit fonctionner au 2 décembre 2026. Les lignes directrices définitives de Bruxelles sur ces obligations de transparence datent du 20 juillet 2026.",
        ],
      },
      {
        h3: "Ce qui sort de l'atelier se vérifie avant d'être adopté",
        paras: [
          "Les conditions d'OpenAI applicables en Europe, dans leur version du 16 janvier 2026, vous attribuent la propriété des réponses de ChatGPT. Elles précisent aussi qu'une réponse peut ne pas être unique et qu'un autre utilisateur peut recevoir un résultat proche. Un nom de produit proposé par l'assistant peut donc l'être aussi à une autre entreprise.",
          "Avant tout dépôt, l'INPI recommande de vérifier la disponibilité de la marque dans la base DATA INPI et dans les bases internationales, pour repérer toute similitude source de confusion. TMview, l'outil de recherche de l'Office de l'Union européenne pour la propriété intellectuelle, couvre plus de 143 millions de marques ; ses résultats n'ont pas valeur de registre officiel. Pour les cas délicats, comme la proximité avec une marque renommée, l'INPI conseille de consulter un conseil en propriété industrielle ou un avocat.",
          "La protection par le droit d'auteur pose une autre question, celle de l'apport humain. Le Copyright Office américain a conclu en janvier 2025 que des prompts seuls ne donnent pas une maîtrise suffisante du résultat, et que la sélection, l'agencement et les retouches créatives d'une personne restent protégeables. Gardez la trace de ce que l'équipe a choisi et réécrit.",
          "Pour les visuels diffusés, l'obligation européenne date du 2 août 2026. Inscrite à l'article 50 du texte européen, elle vise l'entreprise qui produit ou retouche avec l'IA un hypertrucage, autrement dit un visuel, un enregistrement audio ou une séquence filmée qui imite des personnes, des objets, des lieux ou des événements existants au point de tromper le public. Cette entreprise doit en signaler l'origine artificielle. Pour une œuvre manifestement créative ou fictive, il suffit de signaler l'existence de ces contenus, d'une manière qui ne gêne pas sa présentation.",
        ],
      },
    ],
    table: {
      caption: "Six livrables créatifs, la méthode à privilégier et la vérification qui précède la présentation",
      headers: ["Livrable", "Méthode à privilégier", "À vérifier avant de le présenter"],
      rows: [
        ["Nom de produit ou de gamme", "Contraintes, puis liste longue découpée en étapes", "Disponibilité dans DATA INPI et TMview, nom de domaine, sens dans les langues de vos marchés"],
        ["Slogan ou accroche", "Angles opposés, puis itérations de critique et de réécriture", "Promesse que l'entreprise peut tenir, proximité avec un slogan existant"],
        ["Concept de campagne", "Trois concepts qui diffèrent par la promesse et le ton", "Cohérence avec la plateforme de marque, droits sur les visuels, mention si un visuel peut passer pour vrai"],
        ["Évolution d'un produit existant", "SCAMPER, une question après l'autre", "Faisabilité validée par la production ou la R&D"],
        ["Pitch ou présentation", "Déclinaison par public, puis critique par des profils précis", "Chiffres et références exacts, ton adapté à l'auditoire"],
        ["Atelier d'innovation interne", "Idées individuelles d'abord, analogies avec d'autres secteurs ensuite", "Critères de choix fixés avant le vote"],
      ],
    },
    cas: {
      h3: "Mise en situation : trouver le nom d'une nouvelle gamme en une matinée",
      contexte: "Imaginons un fabricant français de sacs de randonnée qui prépare une gamme de bagages de voyage pour 2027. La responsable marketing réunit quatre collègues (commerce, design, export, service client) pour trouver un nom avant le dépôt de marque. L'équipe travaille avec l'outil d'IA fourni par l'employeur, sur des comptes professionnels.",
      etapes: [
        "Chaque participant écrit seul cinq noms en dix minutes, avant que l'assistant soit ouvert.",
        "La responsable soumet à l'assistant le texte ci-après, qui fixe le public, les contraintes et un travail en trois temps.",
        "L'équipe demande ensuite à l'assistant de critiquer les quinze propositions retenues, du point de vue d'un client en magasin puis d'un acheteur allemand.",
        "Le groupe garde dix noms, ceux de l'IA et les siens confondus, et élimine ceux qui sonnent mal à l'oral ou dans une langue d'export.",
        "Les trois finalistes passent par DATA INPI et TMview dans les classes de produits visées, puis par un conseil en propriété industrielle avant le dépôt.",
      ],
      prompt: "Tu es concepteur-rédacteur, spécialiste des noms de marque. Nous lançons en 2027 une gamme de bagages de voyage fabriqués en France, vendus de 120 à 250 euros, destinée à des actifs de 30 à 50 ans qui partent souvent pour de courts séjours.\n\nContraintes :\n- deux à quatre syllabes ;\n- prononçable en français, en anglais et en allemand ;\n- aucun mot qui évoque la randonnée, la montagne ou l'aventure ;\n- aucun de ces mots : nomade, trek, voyage, travel.\n\nProcède en trois temps.\n1. Écris 60 pistes courtes, une par ligne.\n2. Retiens-en 15 et rends-les plus audacieuses et plus éloignées les unes des autres.\n3. Pour chacune des 15, dis en une ligne ce qu'elle évoque et le risque que tu y vois (sens dans une autre langue, ressemblance avec une marque connue).\n\nNe prétends jamais qu'un nom est libre : la recherche d'antériorité, nous la ferons nous-mêmes.",
      resultat: "L'assistant rend 60 pistes, puis 15 propositions commentées avec leurs risques. L'équipe les confronte à ses propres noms et garde la main sur le choix. Pour la disponibilité, seuls DATA INPI, TMview et un professionnel de la propriété industrielle donnent une réponse fiable : un risque signalé par l'assistant reste une piste de vérification.",
    },
    pieges: [
      {
        titre: "La première liste retenue telle quelle",
        texte: "Les premières propositions d'un assistant sont les plus probables, donc les plus proches de ce que d'autres utilisateurs obtiennent. Demandez une liste longue, découpez le travail en étapes et ne retenez rien avant la troisième itération.",
      },
      {
        titre: "Toute l'équipe devant la même consigne",
        texte: "Quand chacun interroge le même outil avec la même demande, les idées convergent, comme dans l'expérience de Doshi et Hauser. Faites produire chaque personne seule, puis confiez une méthode différente à chaque participant.",
      },
      {
        titre: "Le nom déjà déposé",
        texte: "La réponse d'un assistant ne vaut pas recherche d'antériorité, et il peut proposer un nom qui existe déjà. Passez chaque finaliste par DATA INPI et TMview, pour les classes de produits visées, avant de le montrer à la direction.",
      },
      {
        titre: "Le lancement confidentiel préparé sur un compte personnel",
        texte: "Sur les abonnements Free, Pro et Max de Claude, l'utilisateur décide si ses conversations nourrissent l'entraînement des modèles ; s'il accepte, elles sont conservées cinq ans. ChatGPT permet aussi de refuser cet usage dans les paramètres du compte. Chez OpenAI, les offres Business et Enterprise tiennent d'office les échanges hors de l'entraînement : un nouveau produit se prépare sur le compte professionnel.",
      },
      {
        titre: "L'assistant désigné comme juge",
        texte: "Demander à l'IA quelle piste est la meilleure revient à lui confier une décision, le type de tâche où le duo humain-IA perd en moyenne selon la méta-analyse du MIT. Arrêtez vos critères avant la séance et votez entre personnes.",
      },
      {
        titre: "Le quota d'images épuisé avant la présentation",
        texte: "Un compte Google Business Standard dispose de 30 images Nano Banana Pro par mois ; au-delà, la qualité baisse d'un cran. Planifiez les déclinaisons visuelles après le choix du concept, et gardez les essais de style pour le dernier temps de l'atelier.",
      },
    ],
  },
  audience: [
    { title: "Équipes marketing et communication", desc: "Vous cherchez des noms, des accroches et des concepts de campagne sous délai. Vous voulez des pistes plus variées et une méthode pour les trier avant de les présenter." },
    { title: "Chefs de produit, R&D et responsables innovation", desc: "Vous animez des séances d'idéation ou faites évoluer une gamme. Vous voulez des méthodes reproductibles, comme SCAMPER, que l'assistant accélère sans les dénaturer." },
    { title: "Dirigeants et créateurs d'entreprise", desc: "Vous préparez un pitch, une nouvelle offre ou le nom d'une activité. Vous voulez élargir l'éventail avant de trancher, et savoir quoi vérifier avant un dépôt de marque." },
    { title: "Animateurs d'ateliers et responsables RH", desc: "Vous préparez des journées d'équipe, baptisez des programmes ou des événements internes. Vous voulez glisser l'IA dans vos ateliers sans que les idées des participants finissent par toutes se ressembler." },
  ],
  useCases: [
    { icon: '💡', title: "Brainstorming découpé en étapes", desc: "Une liste longue, une sélection rendue plus audacieuse, puis la description des pistes : la consigne qui diversifie le plus les idées de l'IA dans l'étude de Wharton." },
    { icon: '🏷️', title: "Naming vérifié", desc: "Des noms produits sous contraintes, critiqués, puis contrôlés dans DATA INPI et TMview avant d'être montrés." },
    { icon: '🎬', title: "Concepts de campagne", desc: "Trois concepts qui diffèrent par la promesse et le ton, puis le développement de celui que l'équipe retient." },
    { icon: '🎙️', title: "Pitch décliné par public", desc: "Le même projet raconté à un investisseur et à une équipe interne, puis comparé pour garder les meilleurs arguments." },
    { icon: '🧑‍🎨', title: "Accroches et visuels", desc: "Des accroches réécrites sur plusieurs itérations, des visuels générés dans les quotas de l'outil et accompagnés de la mention qu'ils exigent." },
    { icon: '🪞', title: "Critique par des profils précis", desc: "Un client ou un concurrent joués par l'assistant font ressortir les objections avant la réunion de décision." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Comprendre pourquoi l'IA propose des idées convenues", duration: '1h',
      description: "Un modèle de langage prédit, mot après mot, une suite probable. Ce module montre ce que ce fonctionnement fait à un brainstorming, études à l'appui.",
      items: [
        "Ce que mesurent l'expérience de Doshi et Hauser et l'étude de Wharton sur la variété des idées",
        "Pourquoi les premières réponses se ressemblent d'un utilisateur à l'autre",
        "Créer ou décider : ce que montre la méta-analyse du MIT sur les duos humain-IA",
        "Compte personnel ou compte professionnel : ce que deviennent les idées confiées à l'assistant",
      ],
      exercise: "Vous comparez la première liste d'idées de l'assistant avec celle que le groupe a produite sur le même sujet.",
    },
    {
      day: 1, title: "Module 2 · Écarter l'IA de la moyenne avec six méthodes", duration: '2h',
      description: "Chaque méthode a son usage. Vous les essayez une à une sur un sujet maison, avec l'assistant que vous utilisez, que ce soit Gemini, Claude, Copilot, ChatGPT ou Vibe.",
      items: [
        "Contraintes fortes et mots interdits",
        "Angles opposés : des concepts qui diffèrent par la promesse et le ton",
        "SCAMPER sur une offre que vous vendez déjà",
        "Analogies : emprunter la solution d'un autre secteur",
        "Découpage en étapes : liste longue, sélection, description",
        "Itérations de critique et de réécriture",
      ],
      exercise: "Vous appliquez trois méthodes au même sujet et comparez la variété des pistes obtenues.",
    },
    {
      day: 1, title: "Module 3 · Animer une séance d'idéation avec l'IA", duration: '30 min',
      description: "L'ordre des étapes décide de la variété des idées. Vous construisez le déroulé d'une séance où chacun produit avant de consulter l'assistant.",
      items: [
        "Un temps individuel avant toute consultation de l'IA",
        "Une méthode différente confiée à chaque participant",
        "Des critères de choix arrêtés avant le vote",
      ],
      exercise: "Vous écrivez le déroulé d'une séance de 45 minutes pour un sujet en cours dans votre équipe.",
    },
    {
      day: 1, title: "Module 4 · Trouver un nom et le vérifier", duration: '1h15',
      description: "Le naming (la création d'un nom de marque) combine une production abondante et un contrôle rigoureux. Vous menez le processus jusqu'à la recherche de disponibilité.",
      items: [
        "Rédiger le brief de naming : public, positionnement, contraintes, langues",
        "Produire une liste longue, puis une sélection commentée",
        "Chercher les antériorités dans DATA INPI et TMview, classe de produits par classe de produits",
        "Savoir à quel moment confier le dossier à un conseil en propriété industrielle",
      ],
      exercise: "Vous produisez trois noms finalistes pour un projet de l'entreprise et documentez leur vérification.",
    },
    {
      day: 1, title: "Module 5 · Construire et décliner un concept de campagne", duration: '1h15',
      description: "Un concept tient en une promesse et un ton. Vous en produisez trois qui s'opposent, puis vous développez celui que l'équipe retient, visuels compris.",
      items: [
        "Trois concepts aux promesses opposées pour un même produit",
        "Déclinaison par canal : accroche, visuel, texte court",
        "Images générées : quotas de chaque outil, et cas où la règle européenne de transparence exige une mention",
        "Garder la trace des choix humains : sélection, réécriture, assemblage",
      ],
      exercise: "Vous développez le concept retenu en trois déclinaisons adaptées à vos canaux.",
    },
    {
      day: 1, title: "Module 6 · Faire critiquer un projet, décider, puis tenir le rythme", duration: '1h',
      description: "L'IA tient le rôle de contradicteur et l'équipe garde la décision. Vous terminez avec une méthode de choix, des règles d'usage et un plan pour le mois qui suit.",
      items: [
        "Critique par des profils précis : client, acheteur, concurrent, direction",
        "Grille de critères et vote entre personnes",
        "La consigne d'idéation de l'équipe écrite comme une compétence, format que reprennent désormais Claude, ChatGPT, Gemini, Copilot et Vibe",
        "Règles d'usage, registre des formations pour répondre au devoir de formation posé par l'AI Act, trois sujets à traiter dans les trente jours",
      ],
      exercise: "Vous soumettez un projet en cours à quatre profils critiques, puis tranchez avec la grille de l'équipe.",
    },
  ],
  objectives: [
    "Expliquer pourquoi les idées produites par un assistant d'IA tendent à se ressembler, en citant le résultat d'une étude",
    "Rédiger une consigne d'idéation qui fixe un public, au moins trois contraintes et un découpage en étapes",
    "Appliquer la méthode SCAMPER avec l'IA à une offre existante",
    "Vérifier la disponibilité d'un nom dans DATA INPI et TMview avant de le proposer",
    "Organiser une séance d'idéation où chaque participant produit ses idées avant de consulter l'IA",
    "Reconnaître un hypertrucage et la mention que la règle européenne de transparence lui attache",
  ],
  faq: [
    {
      q: "Quel assistant choisir pour travailler la créativité avec l'IA ?",
      a: "Celui que votre entreprise fournit déjà. Les méthodes de la journée (contraintes, angles opposés, découpage en étapes, SCAMPER) fonctionnent dans Gemini, Claude, Copilot, ChatGPT et Vibe. L'étude de Wharton montre que la façon de formuler la demande pèse plus sur la variété des idées que le rôle attribué à l'assistant : la formation porte donc sur la méthode. Pour les images, les outils diffèrent davantage, chacun avec son modèle et ses quotas. Si vos équipes ont deux outils, comparez leurs listes sur un même sujet.",
    },
    {
      q: "L'IA rend-elle les idées d'une équipe plus créatives ou plus uniformes ?",
      a: "Les deux, d'après l'expérience publiée en 2024 dans Science Advances par Anil Doshi et Oliver Hauser. Avec des amorces de GPT-4, 293 auteurs ont écrit des histoires jugées plus nouvelles (8,1 % de plus) et plus publiables (9 % de plus), surtout chez les moins créatifs. Ces histoires se ressemblaient aussi davantage entre elles. La journée apprend à garder le gain individuel et à préserver la diversité du groupe : idées personnelles d'abord, méthodes différentes ensuite, choix collectif à la fin.",
    },
    {
      q: "Peut-on déposer comme marque un nom trouvé avec ChatGPT ou un autre assistant ?",
      a: "Oui, si le nom est disponible et distinctif pour les produits visés. Les conditions européennes d'OpenAI vous attribuent la propriété des réponses, tout en rappelant qu'un autre utilisateur peut obtenir un résultat voisin. L'INPI recommande de vérifier la disponibilité avant le dépôt, dans DATA INPI et dans les bases internationales comme TMview, puis de consulter un conseil en propriété industrielle pour les cas délicats.",
    },
    {
      q: "Qui est propriétaire d'un slogan ou d'un texte créatif produit avec l'IA ?",
      a: "Entre vous et l'éditeur de l'outil, le contrat répond : les conditions européennes d'OpenAI vous cèdent les droits qu'il pourrait détenir sur les réponses. La protection par le droit d'auteur dépend d'une autre question, l'apport humain. Le Copyright Office américain a conclu en janvier 2025 qu'un prompt seul ne suffit pas, et que la sélection, l'agencement et les retouches créatives d'une personne restent protégeables. Pour un actif important de la marque, documentez le travail de l'équipe et faites relire le dossier par un juriste spécialisé en propriété intellectuelle.",
    },
    {
      q: "Faut-il signaler qu'une image de campagne a été générée par l'IA ?",
      a: "Oui, dès que l'image est un hypertrucage : un visuel généré qui pourrait passer pour la photo authentique d'une personne, d'un endroit ou d'une scène existants. Depuis le 2 août 2026, la règle de transparence de l'AI Act (son article 50) oblige les entreprises qui diffusent ces contenus à en indiquer l'origine artificielle. Une campagne manifestement fictive ou artistique s'en acquitte par une mention discrète, placée de façon à ne pas gêner la présentation de l'œuvre. Une image utilisée en interne, sans diffusion au public, échappe à cette obligation.",
    },
    {
      q: "Quel budget prévoir pour cette journée, et qui peut la financer ?",
      a: "La session est facturée 1 980 € HT, sur site ou en visioconférence, que le groupe compte douze personnes ou que vous la suiviez seul ; la TVA de 20 % s'ajoute à ce montant. Parce que Masteria a obtenu Qualiopi pour son activité de formation, votre OPCO a la faculté de payer tout ou partie de la journée ; il en décide au vu de ses règles et de ses réserves. Les documents à joindre, programme détaillé et convention, vous sont envoyés par Masteria ; c'est à votre entreprise de saisir l'OPCO avant l'atelier.",
    },
    {
      q: "Faut-il un profil créatif pour suivre cette journée ?",
      a: "Non. Dans l'expérience de Doshi et Hauser, les auteurs les moins créatifs au départ sont ceux qui progressent le plus avec des idées de l'IA : 10,7 % de nouveauté et 11,5 % de potentiel de publication en plus. La journée s'adresse à toute personne qui doit produire des idées dans son travail, du marketing à la direction en passant par le produit et les RH. Les créatifs de métier y trouvent surtout des méthodes pour diversifier les pistes et pour vérifier un nom avant de le défendre.",
    },
  ],
  tarifs: {
    titre: "Ce que comprend le prix de la journée de créativité",
    paras: [
      "Avant la session, le formateur recueille le sujet créatif que l'équipe veut faire avancer (un nom de gamme, une campagne, une offre), la plateforme de marque si elle existe et l'outil d'IA dont disposent les participants. La journée travaille ce sujet du premier au dernier module. Le prix englobe ce travail préalable, les supports de la journée, des consignes d'idéation adaptées à votre marque et la grille de choix que l'équipe emporte.",
      "Prenons une équipe de huit personnes : la directrice marketing, deux chefs de produit, un designer, deux chargées de communication, un commercial export et le dirigeant. Le groupe règle 1 980 € HT pour la journée, ce qui ramène la place à 247,50 € HT. En individuel, une personne seule paie la même somme. S'y ajoutent 20 % de TVA. Votre OPCO examine ensuite le dossier monté avec Masteria et fixe sa participation selon ses propres règles et ce que permettent ses fonds.",
    ],
  },
  apres: {
    titre: "Après la journée, une compétence d'idéation au service de toute l'équipe",
    texte: "Quand l'équipe a fait sienne la méthode, Masteria peut bâtir pour vous une compétence d'idéation qui applique vos contraintes de marque et vos mots interdits, ou un assistant de naming qui produit des listes longues, signale les risques linguistiques et prépare le dossier de recherche d'antériorité pour votre conseil en propriété industrielle. L'équipe garde la décision à chaque étape. Ce développement, chiffré au forfait après cadrage, ne relève pas de la formation : pas finançable par votre OPCO, il se règle sur vos fonds propres.",
  },
  cta: {
    milieu: "Dites-nous quel nom, quelle campagne ou quelle offre votre équipe doit trouver : la journée s'organise autour.",
    fin: {
      titre: "Préparons la journée à partir de votre sujet créatif",
      texte: "Décrivez le projet en cours, l'équipe concernée et l'assistant d'IA qu'elle utilise. Vous recevez un programme qui fait travailler ce projet du matin au soir et des dates de session.",
    },
  },
  liensAssocies: [
    { label: "Formation IA marketing : les cinq assistants au service d'une équipe", href: '/formation-ia-marketing' },
    { label: "Former un service communication à l'IA générative", href: '/formation-ia-communication' },
    { label: "Écrire des demandes efficaces : la formation prompt engineering", href: '/formation-prompt-engineering' },
    { label: "Rédiger mails, notes et propositions avec l'IA", href: '/formation-ia-ecrits-pro' },
    { label: "Rédiger une charte d'usage de l'IA", href: '/charte-ia-entreprise' },
  ],
  sources: [
    { name: "Science Advances, 2024 : l'expérience d'Anil Doshi et Oliver Hauser sur des histoires écrites avec des amorces d'IA", url: "https://www.science.org/doi/10.1126/sciadv.adn5290" },
    { name: "Meincke, Mollick et Terwiesch (Wharton School), « Prompting Diverse Ideas: Increasing AI Idea Variance », 2024", url: "https://arxiv.org/abs/2402.01727" },
    { name: "Méta-analyse de Vaccaro, Almaatouq et Malone (MIT) sur les duos humain-IA, revue Nature Human Behaviour, 2024", url: "https://www.nature.com/articles/s41562-024-02024-1" },
    { name: "OpenAI, conditions européennes de ChatGPT : propriété des réponses (texte du 16 janvier 2026)", url: "https://openai.com/fr-FR/policies/eu-terms-of-use/" },
    { name: "OpenAI, engagements sur les données des offres professionnelles", url: "https://openai.com/fr-FR/business-data/" },
    { name: "Anthropic, nouvelles conditions des abonnements Free, Pro et Max (28 août 2025)", url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
    { name: "Google Workspace, quotas d'images Nano Banana Pro et de vidéo Vids (page du 7 octobre 2026)", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
    { name: "INPI, vérifier qu'une marque est valable et disponible avant de la déposer", url: "https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposer-sa-marque" },
    { name: "EUIPO, moteur TMview de recherche de marques", url: "https://www.tmdn.org/tmview/" },
    { name: "U.S. Copyright Office, rapport sur la protégeabilité des contenus produits avec l'IA (janvier 2025)", url: "https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf" },
    { name: "EUR-Lex, AI Act : obligations de transparence sur les contenus générés (article 50)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { name: "Faegre Drinker, analyse des lignes directrices européennes sur la transparence, juillet 2026", url: "https://www.faegredrinker.com/en/insights/publications/2026/7/eu-ai-act-commission-confirms-transparency-code-of-practice-as-adequate-and-publishes-final-version-of-its-guidelines-on-transparency-obligations" },
  ],
}
