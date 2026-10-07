// Contenu propre à /formation-sprint-ia-ai-act (page propre). Rendu par SpokePage.
// Sprint de 3 h sur le règlement européen sur l'IA, dans sa version issue de l'Omnibus (règlement (UE) 2026/1744).
// Faits AI Act : fiche de faits du 07/10/2026, section 7 (Hunton, lawandtechnology.eu, Faegre Drinker, Cooley ;
// EUR-Lex non affiché au robot le 07/10). Non écrit faute de source officielle : l'autorité française de surveillance.
// Faits Masteria : brief commun du 07/10/2026 (1 980 € HT la séance de 3 h, 12 participants au plus ou une personne).
export default {
  slug: 'formation-sprint-ia-ai-act',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Sprint IA AI Act : trois heures pour savoir ce que le règlement européen exige de vous",
  metaTitle: 'Sprint IA AI Act : le règlement IA en 3 heures | Masteria',
  metaDesc: "Sprint IA AI Act (3 h) : rôle de l'entreprise, article 4, transparence depuis août 2026, haut risque en décembre 2027, registre des usages. 1 980 € HT.",
  keywords: "sprint ia ai act, formation ai act 3 heures, ai act omnibus 2026, article 4 ai act, maîtrise de l'ia en entreprise, registre des usages ia, formation conformité ia courte",
  resume: "Le Sprint IA AI Act explique en trois heures ce que le règlement européen sur l'intelligence artificielle demande à votre entreprise au 7 octobre 2026, après l'Omnibus entré en vigueur le 27 juillet, puis ouvre pendant la séance le registre de vos propres usages. Masteria l'anime sur place ou à distance pour 1 980 € HT la séance, devant douze stagiaires au maximum, ou en tête-à-tête ; sa certification Qualiopi autorise votre OPCO à étudier un financement, qu'il accorde suivant ses règles et ses fonds.",
  enBref: [
    { label: 'Formation', value: "Le règlement européen sur l'IA dans sa version de juillet 2026, appliqué aux usages de votre entreprise" },
    { label: 'Durée', value: "Une séance de trois heures, en cinq séquences, dont près d'une heure d'atelier sur vos usages" },
    { label: 'Public', value: "DPO, juristes, responsables conformité, DRH, DSI, dirigeants et managers qui valident des outils" },
    { label: 'Tarif', value: "1 980 € HT la séance, prix identique pour un participant seul et pour un groupe complet de douze" },
    { label: 'Financement', value: "Séance éligible à une demande auprès de votre OPCO, Masteria étant certifié Qualiopi ; la réponse dépend des critères de la branche" },
    { label: 'Prérequis', value: "Aucune formation juridique ; envoyer avant la séance la liste des outils d'IA utilisés dans l'entreprise, même incomplète" },
  ],
  intro: "Beaucoup de pages consacrées à l'AI Act datent d'avant l'été 2026 et annoncent encore des obligations à haut risque pour août 2026. Le calendrier a changé : l'Omnibus, le règlement (UE) 2026/1744 qui produit ses effets depuis le 27 juillet, décale ces obligations à décembre 2027 pour la plupart des systèmes et récrit l'article 4, celui qui traite de la culture de l'IA des salariés. Les règles de transparence de l'article 50 jouent, elles, depuis le 2 août 2026, et une interdiction supplémentaire prendra effet le 2 décembre 2026. Le Sprint IA AI Act remet ces dates en ordre, aide chaque participant à situer son entreprise dans le texte et se termine par un registre des usages déjà rempli pour les cas apportés en séance.",
  guide: {
    kicker: 'Guide terrain',
    h2: "Le règlement a changé de calendrier en juillet 2026, et une partie s'applique déjà à votre entreprise",
    lead: "L'AI Act, adopté en 2024 sous la référence 2024/1689, range les systèmes d'IA selon le danger que leur usage fait courir aux personnes et attache à chaque niveau ses propres devoirs. Une entreprise qui rédige ses courriers avec Copilot ou ChatGPT n'a pas les mêmes devoirs qu'un éditeur qui vend un logiciel de tri de candidatures. Le Sprint part donc de vos usages, n'ouvre le texte qu'à l'article utile, et répond à trois questions : quel rôle tient votre entreprise, ce qu'elle doit déjà faire, ce qui l'attend d'ici 2028.",
    sections: [
      {
        h3: "L'Omnibus de juillet 2026 a déplacé les échéances du haut risque",
        paras: [
          "Signé le 8 juillet 2026, paru au Journal officiel le 24, l'Omnibus produit ses effets depuis le 27 juillet. Il retouche le calendrier du texte de 2024 sans en changer la logique. Pour les usages listés à l'annexe III, comme le recrutement, la gestion des carrières ou l'éducation, les devoirs propres au haut risque attendront le 2 décembre 2027. Ceux qui visent l'IA logée dans des produits déjà encadrés par le droit européen (annexe I : machines, dispositifs médicaux, jouets) prennent effet le 2 août 2028.",
          "Plusieurs dates restent en place. Les pratiques interdites et la première version de l'article 4 jouent depuis début février 2025, les devoirs des éditeurs de modèles d'IA à usage général (OpenAI, Google, Anthropic, Mistral AI) depuis début août 2025. L'Omnibus ajoute en revanche une interdiction : les systèmes conçus pour fabriquer des images intimes de personnes sans leur consentement, ou des contenus pédocriminels, seront prohibés à partir du 2 décembre 2026.",
          "Le premier réflexe enseigné pendant le Sprint consiste à dater toute source avant de la croire. Une note interne, une présentation de fournisseur ou un article qui situe le haut risque à l'été 2026 a été rédigé avant l'Omnibus et doit être relu avec le nouveau calendrier sous les yeux.",
        ],
      },
      {
        h3: "Votre entreprise est presque toujours déployeur, parfois fournisseur",
        paras: [
          "Le règlement distingue plusieurs rôles. Le fournisseur conçoit un système d'IA, seul ou par un sous-traitant, puis le commercialise sous son nom. Le déployeur utilise un système sous sa propre autorité, dans le cadre d'une activité professionnelle. Une PME qui équipe ses salariés de Microsoft Copilot ou de ChatGPT Business est déployeur de ces outils ; Microsoft et OpenAI en sont les fournisseurs.",
          "La frontière bouge quand l'entreprise construit elle-même. Un assistant de réponse aux clients bâti sur l'interface de programmation (API) d'un modèle, puis ouvert au public sur votre site, fait de vous le fournisseur de ce système, avec les obligations qui vont avec. Pendant le Sprint, chaque participant classe ses outils dans l'une ou l'autre colonne, et les cas douteux sont notés pour un examen juridique.",
        ],
      },
      {
        h3: "Le niveau de risque dépend de l'usage, rarement de l'outil",
        paras: [
          "Le même assistant peut servir un usage sans enjeu et un usage sensible. Rédiger un compte rendu, reformuler une lettre ou condenser une étude relève du risque minimal, sans devoir particulier en dehors de l'article 4. Faire trier des candidatures, noter la performance d'un salarié ou décider de l'accès à une formation touche en revanche aux domaines de l'annexe III, que le régime du haut risque encadrera fin 2027.",
          "En attendant, le RGPD, le texte européen de 2016 sur les données personnelles, encadre déjà ces usages, puisqu'ils portent sur des personnes. Le Sprint mène donc les deux lectures de front : pour chaque usage, son niveau dans l'échelle de risque de l'AI Act, puis les données personnelles qui y transitent. La plupart des entreprises découvrent pendant l'exercice qu'un usage sensible a déjà été testé par un service, souvent sur un compte personnel.",
        ],
      },
      {
        h3: "L'article 4 demande des mesures, sans niveau individuel ni certificat",
        paras: [
          "Récrit par l'Omnibus, l'article 4 demande désormais aux fournisseurs comme aux déployeurs d'agir, par des mesures concrètes, pour que leurs salariés et les personnes qui emploient les systèmes en leur nom progressent dans la maîtrise de l'IA. La version initiale, applicable dès février 2025, parlait d'un niveau suffisant de maîtrise ; la nouvelle décrit une obligation de moyens, valable pour toute entreprise utilisatrice, que ses outils présentent un risque élevé ou minime.",
          "Le texte ne prévoit ni examen ni certificat. D'après les questions-réponses diffusées par la Commission européenne, il suffit de consigner les actions menées dans un registre interne. La Commission et les États membres doivent soutenir ces efforts, en particulier ceux des PME, et la Commission publie des exemples pratiques. Le Sprint montre comment tenir ce registre : qui a été formé, à quoi, quand, avec quel support.",
        ],
      },
      {
        h3: "L'article 50 concerne ce que vous montrez au public",
        paras: [
          "L'article 50, en application depuis août 2026, organise la transparence. Quiconque converse avec un système d'IA conçu pour le public doit pouvoir l'apprendre, et un contenu qui reproduit avec réalisme un visage, un lieu ou une scène qui existent (un hypertrucage, ou deepfake) doit porter la mention de son origine. Les éditeurs d'outils qui fabriquent images, sons ou textes doivent aussi y apposer une marque que les logiciels savent lire ; pour un outil commercialisé avant août, ce marquage est exigé au 2 décembre 2026.",
          "La Commission a publié le 20 juillet 2026 ses lignes directrices définitives sur cet article, et le code de bonnes pratiques sur la transparence des contenus générés, finalisé le 10 juin 2026, a été jugé adéquat. Un usage interne, dont le résultat ne quitte pas l'entreprise, échappe à ces règles de transparence. Le Sprint repère donc les points de contact avec le public : l'assistant du site, les visuels des campagnes, les vidéos de présentation.",
        ],
      },
    ],
    table: {
      caption: "Les échéances du règlement européen sur l'IA, telles qu'elles s'appliquent au 7 octobre 2026",
      headers: ['Date', "Ce qui s'applique", 'Qui est concerné'],
      rows: [
        ['2 février 2025', "Pratiques interdites et première rédaction de l'article 4", 'Tous les fournisseurs et déployeurs'],
        ['2 août 2025', "Obligations des modèles d'IA à usage général", 'Les éditeurs de ces modèles'],
        ['27 juillet 2026', "Entrée en vigueur de l'Omnibus et nouvelle rédaction de l'article 4", 'Tous les fournisseurs et déployeurs'],
        ['2 août 2026', "Article 50 : transparence envers le public", "Les entreprises qui exposent une IA au public ou diffusent des contenus générés"],
        ['2 décembre 2026', "Interdiction des systèmes de nudification et de contenus pédocriminels ; marquage des contenus pour les systèmes déjà commercialisés", 'Fournisseurs et utilisateurs de ces systèmes'],
        ['2 décembre 2027', "Annexe III : recrutement, carrières, éducation et autres usages classés à haut risque", 'Fournisseurs et déployeurs de ces systèmes'],
        ['2 août 2028', "Haut risque des systèmes intégrés à des produits réglementés (annexe I)", 'Fabricants et fournisseurs concernés'],
      ],
    },
    cas: {
      h3: "Mise en situation : une PME de services ouvre son registre des usages",
      contexte: "Prenons une entreprise de services de 80 salariés, équipée de ChatGPT Business depuis le printemps. Lors du cadrage, la DRH a recensé cinq usages : la rédaction des offres d'emploi, un essai de tri de candidatures fait par un manager, des visuels générés pour les réseaux sociaux, un assistant de réponse aux questions des clients sur le site, et la synthèse des comptes rendus de comité. Personne ne sait lesquels posent problème. Cette entreprise est imaginaire ; elle sert de support à l'atelier.",
      etapes: [
        "La DRH colle dans la conversation la liste des cinq usages, avec pour chacun l'outil, le service et les données employées.",
        "Elle copie le prompt ci-dessous, en précisant que l'entreprise utilise ces outils sans les avoir développés.",
        "Le groupe relit chaque classement proposé et le confronte aux exemples vus pendant la séance, en notant les désaccords.",
        "Les cas signalés comme douteux, ici le tri de candidatures et l'assistant du site, partent vers le DPO et le juriste avec la question précise à trancher.",
        "La DRH reporte le résultat dans la trame de registre remise pendant le Sprint, avec un responsable et une date de revue par ligne.",
      ],
      prompt: "Aide-moi à dresser le registre des usages de l'intelligence artificielle de notre entreprise. Nous sommes une entreprise de services de 80 salariés. Nous utilisons des outils du marché sans les avoir développés, sauf mention contraire.\n\nVoici nos usages, avec l'outil, le service et les données concernées :\n[liste des usages]\n\nPour chaque usage, indique dans un tableau :\n1. notre rôle probable selon l'AI Act, dans sa version révisée en juillet 2026 (règlements 2024/1689 et 2026/1744) : déployeur ou fournisseur ;\n2. la catégorie de risque probable : pratique interdite, haut risque (annexe III), obligation de transparence (article 50) ou risque minimal ;\n3. la date à laquelle les obligations correspondantes s'appliquent ;\n4. la présence de données personnelles, et donc la question RGPD à poser ;\n5. la question précise à soumettre à notre DPO ou à notre juriste.\n\nNe tranche aucun cas douteux : écris « à examiner » et explique en une phrase ce qui fait hésiter. Cite l'article du règlement sur lequel tu t'appuies pour chaque classement, sans inventer de numéro.",
      resultat: "Vous obtenez un premier tableau qui sert de brouillon au registre, avec les questions à poser à vos experts. Le classement proposé par l'assistant reste une hypothèse : un modèle de langage peut se tromper de numéro d'article ou ignorer une modification récente du texte, d'où la vérification par le groupe à l'étape 3. Dans cet exemple, le tri de candidatures ressort comme un usage de l'annexe III, à suspendre jusqu'à un examen, et l'assistant du site comme un sujet de transparence relevant de l'article 50.",
    },
    pieges: [
      {
        titre: "Un calendrier recopié d'une source antérieure à l'été 2026",
        texte: "Une présentation qui fixe le haut risque au mois d'août 2026 a été préparée avant l'Omnibus. Avant de bâtir un plan de conformité, vérifiez la date de chaque document et rapprochez-le du calendrier publié après le 27 juillet 2026.",
      },
      {
        titre: "Le tri de candidatures essayé pour voir",
        texte: "Un manager qui confie une pile de CV à un assistant fait entrer l'entreprise dans un domaine de l'annexe III, et il traite des données personnelles sans base claire. Les obligations du haut risque arrivent en décembre 2027, mais le RGPD s'applique dès aujourd'hui.",
      },
      {
        titre: 'Une attestation présentée comme un certificat AI Act',
        texte: "Aucun certificat de maîtrise de l'IA n'existe dans le texte. Une attestation de fin de formation documente une mesure prise au titre de l'article 4 ; elle ne garantit rien de plus, et un prestataire qui promet une certification officielle sur ce point se trompe.",
      },
      {
        titre: "L'assistant du site qui cache sa nature d'IA",
        texte: "Depuis l'été 2026, une personne qui dialogue avec un système d'IA doit pouvoir le savoir. Si l'assistant vient d'un prestataire, vérifiez avec lui que l'information s'affiche ; si votre équipe l'a construit, l'obligation vous revient.",
      },
      {
        titre: 'Des visuels réalistes publiés sans mention',
        texte: "Une image générée qui montre une personne réelle ou un événement plausible relève de l'obligation de signalement des hypertrucages. Une illustration manifestement fictive pose moins de difficulté ; dans le doute, mentionnez l'origine du visuel dans la légende.",
      },
    ],
  },
  audience: [
    { title: 'DPO, juristes et responsables conformité', desc: "Le RGPD fait déjà partie de votre quotidien, et l'AI Act s'y ajoute. Vous repartez avec le calendrier daté après l'Omnibus, la distinction entre fournisseur et déployeur appliquée à vos outils, et un registre où chaque usage porte sa question juridique." },
    { title: 'DRH, managers et responsables de la formation', desc: "L'article 4 vous concerne au premier chef, et les usages RH comptent parmi les plus exposés. Vous apprenez à reconnaître un usage à haut risque, à garder la trace des formations suivies et à dire non à un essai de tri de candidatures." },
    { title: 'Dirigeants, DSI et responsables des achats', desc: "Vous validez des outils, des abonnements et des prestataires. Vous repartez avec les questions à poser à un éditeur sur la transparence et le marquage des contenus, et avec un plan à 90 jours que vous pouvez confier à une personne nommée." },
  ],
  useCases: [
    { icon: '📅', title: 'Un calendrier daté', desc: "Les échéances de 2025 à 2028, relues après l'Omnibus du 27 juillet 2026, sans la confusion des pages écrites avant l'été." },
    { icon: '⚖', title: 'Le rôle de votre entreprise', desc: "Déployeur pour les outils achetés, fournisseur pour ceux que vous construisez et ouvrez au public." },
    { icon: '🚦', title: 'Vos usages classés', desc: "Risque minimal, transparence ou haut risque, usage par usage, avec les cas douteux mis de côté pour un expert." },
    { icon: '🎓', title: "L'article 4 documenté", desc: "Ce qu'il faut garder comme trace des formations suivies, et pourquoi aucun certificat n'est exigé." },
    { icon: '📢', title: 'La transparence en pratique', desc: "Assistant du site, visuels réalistes, vidéos : ce qui doit être signalé au public depuis le 2 août 2026." },
    { icon: '🗂', title: 'Un registre ouvert', desc: "La trame remplie pendant la séance pour vos premiers usages, avec un responsable et une date de revue." },
  ],
  modules: [
    {
      day: 1, title: 'Séquence 1 · Dater le règlement et ses échéances', duration: '25 min',
      description: "Le groupe commence par remettre en ordre les dates, car la plupart des confusions viennent de sources écrites avant l'Omnibus.",
      items: [
        "Les deux textes : le règlement de 2024 et l'Omnibus de juillet 2026",
        "Les échéances déjà passées, celles de décembre 2026, celles de 2027 et 2028",
        "La nouvelle interdiction applicable le 2 décembre 2026",
        "Repérer une source périmée en trente secondes",
      ],
      exercise: "Chacun date le dernier document sur l'AI Act qu'il a lu ou reçu, et corrige ce qui a changé depuis.",
    },
    {
      day: 1, title: "Séquence 2 · Situer l'entreprise : fournisseur ou déployeur", duration: '25 min',
      description: "Le rôle de l'entreprise fixe ses obligations ; il se détermine outil par outil.",
      items: [
        "Définitions du fournisseur et du déployeur, illustrées par des outils courants",
        "Le cas de l'assistant construit en interne puis ouvert au public",
        "Les modèles d'IA à usage général et ce qui reste à la charge de leurs éditeurs",
        "Les questions à poser à un prestataire avant de signer",
      ],
      exercise: "Classer chaque outil utilisé par votre service dans la colonne du déployeur ou du fournisseur.",
    },
    {
      day: 1, title: 'Séquence 3 · Classer vos usages par niveau de risque', duration: '55 min',
      description: "Le cœur de la séance : chacun classe les usages de son périmètre, puis le groupe confronte les résultats.",
      items: [
        "Pratiques interdites, haut risque, transparence, risque minimal",
        "Les domaines de l'annexe III qui touchent l'entreprise : emploi, gestion du personnel, formation",
        "Le RGPD sur chaque usage qui manipule des données personnelles",
        "Les cas douteux et la question précise à poser à un expert",
      ],
      exercise: "Classer avec l'assistant de l'entreprise, puis à la main, les usages que vous avez apportés, et comparer les deux résultats.",
    },
    {
      day: 1, title: "Séquence 4 · Article 4 et article 50 au quotidien", duration: '45 min',
      description: "Deux articles concernent déjà presque toutes les entreprises ; la séquence montre comment les respecter sans lourdeur.",
      items: [
        "La rédaction de l'article 4 depuis juillet 2026 et l'obligation de moyens",
        "Ce que contient un registre des formations : public, contenu, date, support",
        "Transparence : assistant du site, hypertrucages, marquage des contenus",
        "Usage interne et diffusion publique : où passe la frontière",
      ],
      exercise: "Repérer les trois points de contact de votre entreprise avec le public où une IA intervient, et noter ce qui doit être signalé.",
    },
    {
      day: 1, title: 'Séquence 5 · Ouvrir le registre et écrire le plan à 90 jours', duration: '30 min',
      description: "La séance se termine sur un document que l'entreprise garde et fait vivre.",
      items: [
        "La trame de registre : usage, outil, rôle, risque, données, responsable, date de revue",
        "Les trois actions des 90 prochains jours, avec un nom en face de chacune",
        "Où ranger le registre, à côté de la charte et du plan de formation",
      ],
      exercise: "Remplir la trame pour vos cinq premiers usages et fixer la date de la première revue.",
    },
  ],
  objectives: [
    "Citer les échéances de l'AI Act applicables en 2025, 2026, 2027 et 2028, dans le calendrier révisé par l'Omnibus",
    "Déterminer, pour un outil utilisé dans l'entreprise, si celle-ci en est fournisseur ou déployeur",
    "Classer un usage de l'IA dans une catégorie de risque et identifier la question à soumettre à un expert",
    "Décrire les traces à conserver au titre de l'article 4 et les situations visées par l'article 50",
    "Remplir les premières lignes d'un registre des usages avec un responsable et une date de revue",
  ],
  faq: [
    {
      q: "À qui s'adresse le Sprint IA AI Act ?",
      a: "Aux personnes qui doivent répondre de l'usage de l'IA dans leur périmètre : DPO, juristes, responsables conformité, DRH, DSI, dirigeants, et managers qui valident l'arrivée d'un nouvel outil. Aucune formation juridique n'est demandée ; les notions sont expliquées à partir des outils que vos équipes utilisent. Le format convient aussi à un comité qui veut partager le même vocabulaire avant de décider d'un plan. Pour une population plus large de salariés, la Sensibilisation présentée sur la page du Sprint IA traite le sujet en quelques minutes, le temps de poser les règles de base.",
    },
    {
      q: "Les obligations du haut risque s'appliquent-elles depuis août 2026 ?",
      a: "Non. Depuis fin juillet 2026, l'Omnibus renvoie au 2 décembre 2027 les devoirs liés aux usages de l'annexe III, parmi lesquels l'embauche et le suivi des carrières, et au 2 août 2028 ceux de l'IA logée dans des produits déjà réglementés. Le mois d'août 2026 a seulement vu entrer en application l'article 50, consacré à la transparence envers le public. Une source qui affirme le contraire date d'avant l'été : le Sprint apprend à repérer ces documents périmés.",
    },
    {
      q: "L'AI Act oblige-t-il à former les salariés avec un certificat ?",
      a: "Il oblige à agir, sans exiger de certificat. Depuis juillet 2026, l'article 4 attend de chaque entreprise qu'elle aide ses équipes, et ceux qui travaillent pour elle avec ces outils, à mieux maîtriser l'IA. Le texte fixe une obligation de moyens, sans seuil individuel ni examen. La Commission précise dans ses questions-réponses qu'une liste interne des sessions suivies, tenue à jour, permet d'en justifier. Une attestation de fin de formation y trouve sa place, sans valoir certificat officiel.",
    },
    {
      q: 'Une PME qui utilise seulement Copilot ou ChatGPT est-elle concernée ?',
      a: "Oui, comme déployeur. L'article 4 la vise depuis février 2025, et sa version révisée depuis l'été 2026. Ses usages de bureautique, comme rédiger, résumer ou traduire, relèvent du risque minimal et n'entraînent pas d'obligation supplémentaire. Deux situations demandent plus d'attention : un usage qui touche aux personnes, comme le tri de candidatures ou l'évaluation des salariés, et tout contenu généré diffusé au public, qui peut relever de l'article 50. Le Sprint aide à repérer ces deux cas dans votre propre activité.",
    },
    {
      q: "Quelle différence entre ce Sprint et la formation AI Act d'une journée ?",
      a: "Le Sprint donne en trois heures les repères et le premier registre. Il convient à un groupe qui doit comprendre le texte et classer ses usages, ou à une entreprise qui commence. La formation AI Act d'une journée va plus loin pour les personnes qui piloteront la conformité : cartographie complète des systèmes, plan de formation au titre de l'article 4, articulation détaillée avec le RGPD, gabarits de documents. Beaucoup d'entreprises réservent la journée à leur noyau conformité et font suivre le Sprint aux managers.",
    },
    {
      q: "Combien coûte le Sprint IA AI Act, et l'OPCO peut-il le financer ?",
      a: "Les trois heures sont facturées 1 980 € HT, plus 20 % de TVA, pour un groupe limité à douze ou pour un seul participant. À six, chacun revient à 330 € HT. Parce que Masteria est certifié Qualiopi, votre OPCO peut étudier le dossier ; il l'accepte ou le refuse au regard de ses critères et de ce qui reste dans ses caisses. Programme et convention viennent de nous. Une entreprise genevoise ou bruxelloise reçoit un devis en euros HT.",
    },
    {
      q: 'Le Sprint remplace-t-il un avis juridique sur nos systèmes ?',
      a: "Non. Le Sprint forme vos équipes à lire le texte, à classer leurs usages et à poser les bonnes questions ; il ne délivre pas d'avis sur un système particulier. Les cas douteux qui ressortent de la séance partent vers votre DPO, votre juriste ou votre avocat. Si l'entreprise développe ses propres systèmes, ou si un usage relève sans ambiguïté du haut risque, un audit de conformité AI Act peut prendre le relais : cette mission de conseil, pas finançable par votre OPCO, se règle au forfait, chiffré lors du cadrage.",
    },
  ],
  tarifs: {
    titre: "Une séance AI Act au prix d'un Sprint, cadrage compris",
    paras: [
      "Le montant, 1 980 € HT, reste le même pour deux inscrits ou pour douze. Il comprend l'échange de cadrage, au cours duquel nous recueillons la liste de vos outils et de vos usages, la préparation des exemples sur votre secteur, les supports remis à chaque participant, la trame de registre et l'attestation de fin de formation. Le calendrier présenté est celui en vigueur à la date de la séance : si une nouvelle échéance ou une nouvelle ligne directrice paraît entre-temps, elle est intégrée.",
      "Prenons un groupe de six personnes : la DRH, le DPO, le DSI, la juriste et deux managers. Chacun revient à 330 € HT. Masteria détenant la certification Qualiopi, votre OPCO a la faculté d'instruire le financement, puis trancher d'après les usages de sa branche et l'état de son budget ; le dossier part avant la séance, accompagné du programme et de la convention transmis par nos soins.",
    ],
  },
  cta: {
    milieu: "Envoyez-nous la liste des outils d'IA que vos équipes utilisent : la séance classera vos propres usages, ceux que vos équipes pratiquent déjà.",
    fin: {
      titre: "Préparons une séance sur vos usages de l'IA",
      texte: "Dites-nous qui participera (DPO, RH, DSI, direction, managers), quels outils sont en place et ce qui vous inquiète le plus : un usage RH, l'assistant de votre site, les visuels publiés. Nous revenons vers vous avec une date et un déroulé adapté.",
    },
  },
  apres: {
    titre: 'Après le Sprint : un registre qui se remplit sans relance',
    texte: "Un registre des usages vit tant que les salariés déclarent leurs nouveaux outils. Masteria sait bâtir pour vous un formulaire de déclaration relié au registre, qui pose les questions vues pendant le Sprint et alerte le DPO quand un usage touche aux personnes, ou un assistant interne qui répond aux questions des équipes à partir de votre charte et de vos règles. Comme tout développement, ce chantier n'est pas finançable par votre OPCO ; son prix forfaitaire se fixe une fois le besoin cerné. Pour un examen approfondi de vos systèmes, l'audit de conformité AI Act prend le relais.",
  },
  liensAssocies: [
    { label: "Formation AI Act d'une journée, pour ceux qui pilotent la conformité", href: '/formation-ai-act' },
    { label: 'Formation gouvernance IA : registre, charte et comité', href: '/formation-gouvernance-ia' },
    { label: 'Audit de conformité AI Act de vos systèmes', href: '/audit-conformite-ai-act' },
    { label: "L'AI Act rend-il la formation obligatoire ? Notre analyse", href: '/blog/ai-act-formation-ia-obligatoire-entreprise' },
    { label: 'Les six formats du Sprint IA, de la découverte aux managers', href: '/formation-sprint-ia' },
  ],
  sources: [
    { name: "EUR-Lex : texte de l'AI Act, référence 2024/1689", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { name: "EUR-Lex : l'Omnibus de juillet 2026, référence 2026/1744", url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
    { name: "Hunton : entrée en vigueur de l'Omnibus et nouveau calendrier", url: 'https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force' },
    { name: "Law & Technology : l'article 4 après l'Omnibus", url: 'https://lawandtechnology.eu/en/ai-literacy-digital-omnibus-article-4-ai-act/' },
    { name: "Faegre Drinker : transparence, le code de bonnes pratiques jugé adéquat et les lignes directrices finales", url: 'https://www.faegredrinker.com/en/insights/publications/2026/7/eu-ai-act-commission-confirms-transparency-code-of-practice-as-adequate-and-publishes-final-version-of-its-guidelines-on-transparency-obligations' },
    { name: "Cooley : les échéances repoussées par l'Omnibus", url: 'https://cdp.cooley.com/digital-ai-omnibus-delays-key-deadlines-introduces-new-rules/' },
  ],
}
