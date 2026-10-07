// Contenu propre à /formation-multi-outils-marketing (guide terrain, mode page propre). Rendu par SpokePage.
// Revu le 7 octobre 2026. Faits outils : FAITS-OUTILS-2026-10-07 (relevé du 7 octobre 2026) et
// src/data/claude-facts.js (5 octobre 2026). Mission citée : data/missions-formation.js
// (interprofession-agricole). Aucun chiffre de gain : seuls des faits datés et sourcés.
export default {
  slug: 'formation-multi-outils-marketing',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Panorama IA marketing : la formation multi-outils qui confie chaque étape de campagne au bon assistant",
  metaTitle: "Panorama IA marketing · formation multi-outils | Masteria",
  metaDesc: "Formation IA multi-outils pour le marketing : veille, brief d'agence, visuels, déclinaisons et bilan de campagne testés dans cinq assistants. Qualiopi.",
  resume: "La formation Panorama IA marketing fait passer vos briefs, vos déclinaisons et vos bilans de campagne dans ChatGPT, Microsoft Copilot, Gemini, Claude et Vibe, pour décider quel assistant tient chaque étape chez vous. Elle se déroule en deux temps de sept heures, dans vos bureaux ou par visioconférence, pour une équipe marketing de douze membres au plus, ou pour une responsable accompagnée individuellement ; chaque journée vaut 1 980 € HT. Titulaire de la certification Qualiopi pour les actions de formation, Masteria vous ouvre l'accès à votre OPCO, libre d'accorder ou non une prise en charge selon ses critères et son enveloppe.",
  enBref: [
    { label: 'Formation', value: "Cinq assistants comparés sur la chaîne marketing : veille, brief, visuels, déclinaisons, bilan mensuel" },
    { label: 'Durée', value: "Deux journées de 7 heures, idéalement calées quelques semaines avant un lancement" },
    { label: 'Formats', value: "Intra pour une équipe marketing jusqu'à douze membres, ou parcours individuel, en présentiel ou à distance" },
    { label: 'Tarif', value: "1 980 € HT la journée de campagne, montant identique de deux à douze inscrits" },
    { label: 'Financement', value: "Certification Qualiopi de Masteria ; l'OPCO de la branche examine le dossier marketing selon ses propres règles" },
    { label: 'Prérequis', value: "Avoir déjà rédigé un brief ou un plan de campagne ; apporter la liste des licences IA de l'équipe" },
  ],
  prerequis: "Avoir déjà rédigé un brief ou un plan de campagne ; apporter la liste des licences IA de l'équipe",
  intro: "Une équipe marketing ouvre souvent trois assistants dans la même journée, et personne n'a fixé de règle pour savoir lequel sert à quoi. Cette formation part de vos livrables (brief d'agence, plan de campagne, déclinaisons, bilan mensuel) et confie chaque étape à l'outil qui la fait le mieux dans votre environnement. Elle intègre ce que l'automne a bousculé pour un service marketing : les GPTs personnalisés s'arrêtent le 11 décembre 2026, Google troque ses Gems contre des compétences, et l'AI Act encadre les visuels générés depuis le 2 août. Vous repartez avec une matrice de décision, une voix de marque écrite une seule fois pour tous les outils et des chaînes d'outils éprouvées sur vos propres dossiers.",
  guide: {
    kicker: "Guide terrain",
    h2: "Choisir l'assistant étape par étape, du brief au bilan de campagne",
    lead: "Aucun assistant ne gagne sur toute la chaîne marketing. La recherche sourcée, la rédaction longue, l'image et le tableur n'appellent pas le même outil, et votre suite bureautique a déjà tranché une partie du choix. La bonne question porte sur l'étape : pour chaque livrable, quel outil, avec quelles données, et qui relit avant publication.",
    sections: [
      {
        h3: "Votre suite bureautique fait déjà la moitié du choix",
        paras: [
          "Une équipe sous Microsoft 365 dotée de Microsoft Copilot (anciennement Microsoft 365 Copilot) voit l'assistant fouiller ses échanges Outlook, ses réunions Teams et les documents rangés dans SharePoint. Dans PowerPoint, il bâtit un deck de campagne à partir d'un fichier Word ou PDF et reprend la mise en forme de l'ensemble ; depuis le 6 octobre 2026, PowerPoint sous Windows accueille aussi des compétences personnalisées. Faute de licence, Copilot Chat travaille sur le web et sur les pièces qu'on dépose dans la conversation.",
          "Sous Google Workspace, Gemini fait partie de l'abonnement. Dès Business Standard, on le retrouve dans Gmail, Docs, Sheets, Slides et Meet, quand Business Starter le cantonne à la messagerie et à l'application Gemini. Deep Research, sa recherche approfondie, croise le web avec Gmail, Drive et Chat, à raison de vingt rapports quotidiens en Business Standard. Gemini Notebook n'utilise que les sources versées dans le carnet, trois cents au plus dans cette édition, et renvoie au passage cité.",
          "ChatGPT, Claude et Vibe (l'assistant de la société française Mistral AI) se raccordent aux deux environnements. Chez OpenAI, les plugins ont remplacé le répertoire d'applications le 9 juillet 2026 : ils ouvrent Google Drive, SharePoint ou Slack dès que l'administrateur les active. Deux angles morts comptent pour le marketing : l'application Gemini n'atteint ni Outlook ni SharePoint, et le Copilot d'entreprise ignore Gmail.",
        ],
      },
      {
        h3: "Les données décident du compte à utiliser",
        paras: [
          "Un export CRM, un fichier d'avis clients avec des noms ou un bilan de campagne non publié ne passent jamais par un compte personnel. Sur ChatGPT Free, Go, Plus ou Pro, OpenAI entraîne ses modèles avec les échanges tant que l'abonné n'a pas décoché « Améliorer le modèle pour tous », rubrique Contrôles des données. Sur Claude Free, Pro ou Max, chaque titulaire a dû trancher à l'automne 2025 ; s'il a accepté, Anthropic garde ses conversations cinq ans.",
          "Vibe bouscule une idée reçue. Mistral stocke ce qu'on lui confie sur le sol européen, à moins d'un autre choix, mais ses comptes Free et Pro nourrissent l'entraînement sauf refus de l'utilisateur, et la formule Team également, sauf si son administrateur s'y oppose pour l'ensemble de la structure ; Vibe Enterprise l'écarte d'emblée. Côté offres d'entreprise, ni Gemini dans Workspace, ni Copilot sous compte professionnel, ni Claude Team et Enterprise, ni ChatGPT Business ne réutilisent vos briefs pour entraîner un modèle.",
        ],
      },
      {
        h3: "Le visuel et le texte publiés ont désormais des règles écrites",
        paras: [
          "Les règles de transparence de l'AI Act (article 50) valent pour toute campagne depuis le 2 août 2026. Un visuel, une vidéo ou un son fabriqué par IA qui reproduit de façon crédible une personne, un endroit ou un fait réel doit être présenté comme artificiel ; le règlement parle d'hypertrucage (deepfake). Un faux témoignage client en photo réaliste entre dans cette case. Les éditeurs dont l'outil circulait avant cette date ont jusqu'au 2 décembre 2026 pour marquer ses productions de façon lisible par une machine.",
          "En France, le texte de juin 2023 qui encadre l'influence commerciale ajoute une règle propre aux partenariats. Un visage ou une silhouette fabriqué par IA dans une publication d'influenceur porte la mention « Images virtuelles ». La marque qui fournit ce visuel à un créateur doit donc le lui signaler.",
          "Côté production, ChatGPT dessine avec ChatGPT Images 2.5, lancé début septembre 2026, et inscrit dans le fichier des métadonnées C2PA, un standard qui retrace l'origine d'une image. Gemini appose un filigrane invisible, SynthID ; l'édition Business Standard donne droit à trente images Nano Banana Pro chaque mois, puis bascule sur un modèle de génération antérieur. Copilot Chat génère des visuels lorsque l'administrateur a donné son accord. Claude ne fournit ni photo ni illustration. Les métadonnées sautent parfois à l'export ou à la retouche, et aucune ne dispense de la mention visible.",
        ],
      },
      {
        h3: "La voix de la marque, rédigée une seule fois, passe d'un assistant à l'autre",
        paras: [
          "Les assistants configurés des deux dernières années changent de forme. OpenAI éteindra ses GPTs au 11 décembre 2026. Google installe depuis début octobre des compétences destinées à succéder aux Gems. Mistral a substitué des Skills aux agents de Vibe en septembre. Partout, une procédure tient désormais dans un dossier dont le fichier SKILL.md porte les consignes, selon le standard ouvert qu'Anthropic a publié fin 2025 et que ses concurrents ont repris.",
          "Pour un service marketing, la conséquence est pratique : plateforme de marque, mots bannis, dix publications validées et règles de ton tiennent dans une seule compétence, éprouvée dans deux assistants. Trois chaînes d'outils fonctionnent ensuite en équipe, avec une relecture humaine à chaque relais.",
        ],
        list: [
          "Veille concurrentielle : recherche approfondie de ChatGPT ou Deep Research lancé depuis Gemini sur les pages publiques des concurrents, chaque lien rouvert à la main, puis synthèse dans Claude ou dans le même outil avec ces liens en note.",
          "Bilan mensuel : export des campagnes au format CSV, traité par Copilot dans Excel en mode Édition ou par Gemini côté Sheets ; le commentaire s'écrit seulement une fois les totaux refaits.",
          "Déclinaisons multicanal : la compétence « voix de marque » chargée dans l'assistant principal du service, socle commun pour LinkedIn, l'emailing et le stand du salon.",
        ],
      },
    ],
    table: {
      caption: "Tâche marketing, outil selon votre environnement, point de vigilance",
      headers: ["Tâche marketing", "Sous Microsoft 365", "Sous Google Workspace ou sans suite", "Vigilance"],
      rows: [
        ["Veille concurrentielle sourcée", "Agent Researcher, compris dans la licence Copilot", "Deep Research de Gemini, ou recherche approfondie de ChatGPT", "Rouvrir chaque lien ; une affirmation que sa page ne confirme pas quitte le document."],
        ["Analyse de 500 avis ou verbatims", "Bloc-notes Copilot, ou projet Claude", "Gemini Notebook et ses renvois au passage exact", "Retirer noms et adresses avant dépôt ; exiger le nombre d'occurrences par thème."],
        ["Brief d'agence", "Projet Claude ou ChatGPT, puis Word et sa fonction « Modifier avec Copilot » pour la mise en page", "Compétence Gemini qui porte la plateforme de marque, puis Docs", "Un brief sans budget ni calendrier revient avec des idées hors cadre."],
        ["Visuels de campagne", "Copilot Chat, une fois ouvert par l'administrateur, ou ChatGPT Images 2.5", "Gemini dans Slides ou dans l'application, trente images Nano Banana Pro chaque mois avec Business Standard", "Mention obligatoire dès qu'un visage réaliste peut tromper."],
        ["Bilan mensuel de campagnes", "Copilot dans Excel, en mode Édition ou Plan", "Gemini dans Sheets, ou ChatGPT et Claude qui calculent par du code", "Refaire un total à la main avant de commenter."],
      ],
    },
    cas: {
      h3: "Cas pratique : du relevé concurrentiel au brief d'agence en trois outils",
      contexte: "Imaginons la responsable marketing d'un fabricant français de sièges et de bureaux pour l'entreprise. Elle lance une gamme reconditionnée et doit briefer son agence avant vendredi. La société s'appuie sur Google Workspace Business Standard, et son équipe dispose d'un compte Claude Team pour la rédaction longue. Ce scénario est pédagogique.",
      etapes: [
        "Dans l'application Gemini, ouvrez le menu Outils, choisissez Deep Research et gardez la source Web. Demandez un relevé des promesses publiques de cinq concurrents sur le mobilier reconditionné : prix affichés, garanties, arguments environnementaux, avec le lien de chaque affirmation.",
        "Ouvrez les liens cités. Supprimez toute affirmation que la page ne confirme pas, puis exportez le rapport dans Google Docs.",
        "Dans Claude, créez un projet « Lancement gamme reconditionnée ». Déposez dans ses connaissances la plateforme de marque, le rapport vérifié et la fiche produit, puis collez le prompt ci-dessous.",
        "Relisez le brief avec le chef de produit. Les garanties et les délais doivent correspondre à ce que l'atelier sait tenir.",
        "Pour l'ambiance visuelle, demandez trois images d'objets et de décors à Gemini dans Slides. Des visages générés dans une publication d'influence imposeraient la mention « Images virtuelles ».",
      ],
      prompt: "Vous êtes directeur de création dans une agence qui travaille pour des marques B2B.\n\nContexte : notre entreprise fabrique du mobilier de bureau en France depuis 1987. Nous lançons en novembre une gamme de fauteuils et de bureaux reconditionnés dans notre atelier de Vendée, garantis cinq ans. La cible est l'office manager et le responsable des moyens généraux des sociétés qui emploient entre 50 et 500 personnes. Le budget de la campagne est de 40 000 euros HT, production comprise, réparti entre LinkedIn, l'emailing et un salon professionnel en janvier.\n\nDocuments du projet : la plateforme de marque, le relevé concurrentiel vérifié, la fiche produit.\n\nRédigez le brief que nous enverrons à l'agence, dans cet ordre :\n1. Le problème que la campagne doit résoudre, en trois phrases.\n2. La cible, et ce qu'elle pense aujourd'hui du mobilier reconditionné d'après le relevé concurrentiel.\n3. Le message principal en une phrase, puis trois preuves tirées uniquement de la fiche produit.\n4. Ce que disent les concurrents, et l'espace qu'ils laissent libre.\n5. Les contraintes : charte, mentions obligatoires, calendrier, budget.\n6. Les livrables attendus de l'agence et la date de chaque rendu.\n\nRègles : n'inventez ni chiffre ni référence. Là où une donnée fait défaut, écrivez « à compléter » et nommez le service de l'entreprise qui la détient. Après chaque affirmation factuelle, citez entre parenthèses le document d'où elle vient. Ton direct, phrases courtes, deux pages au maximum.",
      resultat: "Vous obtenez un brief de deux pages dont chaque affirmation renvoie à un document du projet. Avant l'envoi, vérifiez que les garanties et délais ne dépassent pas la fiche produit, que les concurrents cités existent sous ce nom et que le budget écrit est celui validé par la direction. Chaque « à compléter » signale un arbitrage que l'équipe doit encore rendre.",
    },
    pieges: [
      { titre: "Le même prompt change de forme d'un outil à l'autre", texte: "Un prompt réglé sur ChatGPT perd souvent sa structure dans Copilot ou Gemini, car chaque outil applique ses propres consignes de mise en forme. Écrivez la structure attendue dans le prompt et testez-le sur l'outil cible avant de le partager." },
      { titre: "La recherche approfondie cite des pages qu'elle a mal lues", texte: "Deep Research, Researcher et la recherche approfondie de ChatGPT livrent des rapports longs, avec des liens. Un lien présent ne prouve pas que la page dit ce qu'on lui prête, surtout pour les prix et les tailles de marché. Ouvrez la source de chaque chiffre que vous comptez publier." },
      { titre: "L'assistant de marque repose sur un objet en fin de vie", texte: "Un GPT « ton de marque » se taira le 11 décembre 2026, et un Gem perdra son usage sur les comptes Workspace en mars 2027 au plus tôt. Réécrivez-le dès maintenant en compétence : consignes et exemples se transportent, les actions personnalisées d'un GPT restent en route." },
      { titre: "Les comptes personnels reviennent au moment du rush", texte: "Quand la licence d'équipe manque, quelqu'un colle l'export d'emailing dans son compte gratuit. Fixez une règle courte : les données clients vont seulement dans l'assistant acheté par la société, et une personne nommée débloque les accès quand l'outil coince." },
    ],
  },
  audience: [
    { title: "Responsables et directeurs marketing", desc: "Vous décidez quels outils l'équipe utilise, avec quelles données et sous quelle offre. Vous repartez avec la matrice de décision, le coût des sièges sur douze mois et les règles à écrire pour l'équipe." },
    { title: "Chargés de marketing et de contenus", desc: "Vous produisez briefs, déclinaisons et bilans chaque semaine. Vous apprenez quel assistant ouvrir à chaque étape, et comment changer d'outil en cours de route sans perdre vos sources." },
    { title: "Responsables communication et marque", desc: "Vous tenez le ton de marque et validez les visuels publiés. Vous apprenez à consigner la voix de la marque dans une compétence et à apposer les mentions qu'exigent les images générées." },
  ],
  useCases: [
    { icon: '🔍', title: "Veille concurrentielle sourcée", desc: "Relevé des promesses publiques de vos concurrents avec Deep Research de Gemini, la recherche approfondie de ChatGPT ou l'agent Researcher de Copilot. Chaque affirmation garde le lien de sa page." },
    { icon: '📋', title: "Brief d'agence", desc: "Brief rédigé dans un projet Claude ou ChatGPT qui contient votre plateforme de marque, une source citée après chaque fait." },
    { icon: '✍️', title: "Voix de marque en compétence", desc: "Plateforme, mots bannis et publications validées rangés dans un fichier SKILL.md, chargé dans l'assistant de l'équipe puis essayé dans un second." },
    { icon: '🎨', title: "Visuels de campagne", desc: "Images générées dans ChatGPT, Copilot Chat ou Gemini dans Slides, avec les mentions qu'appellent les visages réalistes." },
    { icon: '🎯', title: "Analyse de vos avis clients", desc: "Des centaines d'avis passés dans Gemini Notebook, un bloc-notes Copilot ou un projet Claude, avec le passage exact cité pour chaque thème." },
    { icon: '📊', title: "Bilan mensuel de campagnes", desc: "Export CSV analysé dans Excel avec Copilot ou dans Sheets avec Gemini, puis commentaire rédigé à partir du tableau recompté." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Cartographier vos outils, vos licences et vos réglages", duration: '1h30',
      description: "Partir de l'environnement de l'équipe pour savoir quel assistant a accès à quoi, sous quelle offre et avec quels réglages.",
      items: [
        "Licence Copilot ou Copilot Chat seul, Gemini selon l'édition Workspace, offres d'équipe de ChatGPT, Claude et Vibe",
        "Connecteurs vers Drive, SharePoint, Outlook ou Gmail, et qui les ouvre",
        "Réglages de chaque compte marketing : instructions personnalisées, mémoire, modèle, option d'entraînement",
        "Fichiers de campagne répartis en quatre niveaux : public, interne, personnel, confidentiel",
      ],
      exercise: "Vous remplissez la carte de votre équipe (outils, licences, dossiers accessibles, réglages vérifiés) et indiquez pour chaque type de fichier l'outil qui peut le recevoir.",
    },
    {
      day: 1, title: "Module 2 · Écrire une demande qui marche partout, puis mener la veille", duration: '2h',
      description: "Poser une façon de demander valable dans les cinq outils et l'éprouver sur une veille concurrentielle dont chaque source se vérifie.",
      items: [
        "Rôle, situation de la marque, pièce jointe, tâche, forme du rendu et interdits écrits noir sur blanc",
        "La même demande envoyée à deux outils, puis les écarts notés dans une grille",
        "Deep Research de Gemini (Web, Drive, Gmail, Chat), recherche approfondie de ChatGPT, agent Researcher de Copilot",
        "Chaque lien ouvert avant de garder un prix ou une taille de marché",
      ],
      exercise: "Vous lancez la même question sur vos cinq principaux concurrents dans deux outils, puis ne conservez que les affirmations confirmées par une page ouverte.",
    },
    {
      day: 1, title: "Module 3 · Rédiger un brief d'agence ancré sur vos documents", duration: '2h',
      description: "Construire le brief dans un espace qui contient la plateforme de marque et la veille vérifiée.",
      items: [
        "Projet Claude ou ChatGPT (quarante fichiers sur Business), ou compétence Gemini, avec la plateforme de marque et la fiche produit",
        "Structure du brief : problème, cible, message, preuves, contraintes, livrables",
        "Citation du document source exigée, « à compléter » quand une information manque",
        "Relecture des engagements produit par la personne qui devra les tenir",
      ],
      exercise: "Vous écrivez le brief du lancement qui vous attend, nourri de la plateforme de marque et de la veille du module 2, et le confrontez au dernier brief parti chez l'agence.",
    },
    {
      day: 1, title: "Module 4 · Analyser vos avis clients sans exposer vos clients", duration: '1h30',
      description: "Faire émerger les thèmes d'un corpus d'avis avec un outil qui cite ses passages, une fois retiré ce que le RGPD interdit d'y laisser.",
      items: [
        "Gemini Notebook, bloc-notes Copilot ou projet Claude : des réponses tirées des seules sources déposées",
        "Noms, adresses et références de commande effacés avant le dépôt, identifiant gardé pour recoller",
        "Thèmes, nombre d'occurrences et citations exactes demandés",
        "Thèmes transformés en preuves pour vos messages",
      ],
      exercise: "Vous analysez un export de vos avis ou de votre dernière enquête de satisfaction, nettoyé de ses données personnelles, et en tirez trois arguments appuyés sur des citations.",
    },
    {
      day: 2, title: "Module 5 · Produire et encadrer les visuels générés", duration: '1h30',
      description: "Choisir l'outil qui génère l'image, puis appliquer les règles de mention en vigueur depuis août 2026.",
      items: [
        "ChatGPT Images 2.5, Copilot Chat sur feu vert de l'administrateur, Gemini dans Slides ; aucune photo ni illustration chez Claude",
        "Hypertrucages : signaler le caractère artificiel d'une image crédible, exigé depuis le 2 août 2026",
        "Partenariats d'influence : « Images virtuelles » sur tout visage généré",
        "C2PA et SynthID : ce que les outils marquent, et ce que l'export efface",
      ],
      exercise: "Vous produisez trois visuels d'ambiance pour votre prochaine campagne et décidez, pour chacun, de la mention à apposer.",
    },
    {
      day: 2, title: "Module 6 · Écrire la voix de marque en compétence et décliner", duration: '2h',
      description: "Donner à chaque outil le même socle pour garder le ton de marque, dans un format qui survit aux changements d'éditeur.",
      items: [
        "Anatomie d'une compétence de marque : dossier, fichier SKILL.md, description qui la déclenche",
        "Conversion d'un GPT ou d'un Gem existant avant leur retrait",
        "Déclinaison d'un message pour LinkedIn, l'emailing et un salon professionnel",
        "Premières publications relues par la même personne",
      ],
      exercise: "Vous écrivez la compétence « voix de marque » de votre équipe avec dix publications validées, la testez dans deux assistants, puis déclinez un message sur trois canaux.",
    },
    {
      day: 2, title: "Module 7 · Construire le bilan mensuel de vos campagnes", duration: '2h',
      description: "Passer de l'export brut au bilan présenté en comité, avec un contrôle des chiffres à chaque étape.",
      items: [
        "Copilot dans Excel en mode Édition, Plan ou Conversation : tableaux croisés et graphiques des campagnes",
        "Gemini dans Sheets, ou l'exécution de code de ChatGPT et de Claude, pour les gros exports",
        "Totaux recomptés avant tout commentaire",
        "Diapositives assemblées par Copilot dans PowerPoint ou par Gemini dans Slides, sur le gabarit maison",
      ],
      exercise: "Vous analysez l'export de vos campagnes du dernier mois et présentez le bilan en cinq diapositives au gabarit de votre entreprise.",
    },
    {
      day: 2, title: "Module 8 · Arrêter la charte marketing et le plan des 30 jours", duration: '1h30',
      description: "Fixer par écrit qui utilise quel outil, avec quelles données, qui relit avant publication, et ce qui change dès le mois prochain.",
      items: [
        "Matrice de décision finale : outil principal, outil d'appoint, coût par siège sur un an",
        "Données clients, visuels, chiffres de marché : règle de relecture et mentions",
        "Article 4 de l'AI Act : soutenir la montée en compétence du service et noter chaque session dans un registre interne",
        "Plan à 30 jours : comptes à ouvrir ou fermer, compétence à diffuser, un référent, un point de mesure",
      ],
      exercise: "Vous rédigez la page de règles de l'équipe marketing et le plan des 30 prochains jours à partir de la carte du module 1 et des essais des deux journées.",
    },
  ],
  objectives: [
    "Choisir, pour chaque livrable marketing, l'outil adapté à votre suite bureautique et à la sensibilité des données",
    "Rédiger une demande structurée qui donne des résultats comparables dans deux assistants",
    "Vérifier les sources d'un rapport de recherche approfondie avant de réutiliser un chiffre",
    "Rédiger un brief d'agence dont chaque affirmation renvoie à un document",
    "Consigner la voix de la marque dans une compétence et la faire fonctionner dans deux outils",
    "Apposer sur les visuels générés les mentions que la loi exige",
    "Produire un bilan de campagne à partir d'un export dont les totaux ont été recomptés",
  ],
  faq: [
    { q: "Faut-il payer cinq abonnements pour suivre la formation ?", a: "Non. Avant la session, nous relevons les outils et les licences dont dispose votre équipe. Les ateliers tournent sur ces outils, avec vos documents. Un assistant que vous n'avez pas encore se découvre sur des pièces publiques ou dépersonnalisées, jamais avec un fichier de campagne confidentiel versé dans un compte privé, et les fonctions réservées aux offres payantes sont signalées comme telles. La grille du deuxième jour tient compte du coût de chaque licence rapporté à l'effectif de votre service." },
    { q: "Quel outil choisir si l'équipe n'a ni Microsoft Copilot ni Gemini ?", a: "ChatGPT Business, Claude Team et Vibe Team sont les trois options courantes. Regardez d'abord où sont rangés vos fichiers, car les connecteurs diffèrent d'un outil à l'autre. Si l'équipe produit beaucoup de visuels, ChatGPT et ses images prennent l'avantage, Claude n'en générant pas. Si l'hébergement européen pèse dans la décision, Vibe le garantit par défaut, à condition que l'administrateur coupe l'entraînement pour l'organisation. Au 7 octobre 2026, le siège Claude Team vaut 25 $ au mois, celui de Vibe Team 24,99 $ HT." },
    { q: "Peut-on déposer un export CRM dans un assistant ?", a: "Oui, dans l'offre entreprise de l'outil et avec le minimum de colonnes. Le RGPD limite le traitement à ce que la tâche exige : pour segmenter une base, le nom et l'adresse électronique ne servent à rien. Supprimez-les avant le dépôt et gardez l'identifiant client pour recoller les résultats. Pour un fichier de plusieurs milliers de lignes, préférez un outil qui calcule par du code ou dans le tableur, puis contrôlez un total." },
    { q: "Un post LinkedIn écrit avec l'aide d'un assistant doit-il le mentionner ?", a: "L'article 50 de l'AI Act cible deux cas : les hypertrucages, et les textes publiés afin d'informer les lecteurs sur une question qui concerne tout le monde. Pour ces textes, la mention n'est plus due quand une personne a relu le contenu et en endosse la publication. Un post de marque relu par l'équipe n'appelle donc pas de mention en règle générale. Une image réaliste d'une personne qui n'existe pas en appelle une, et un visage généré dans un contenu d'influence porte « Images virtuelles »." },
    { q: "Nos GPTs et nos Gems de marque vont-ils disparaître ?", a: "Oui, selon des calendriers différents. OpenAI met fin aux GPTs sur toutes ses offres à la date du 11 décembre 2026 ; transformé en plugin, un GPT conserve ses consignes, rangées dans une compétence, ainsi que ses fichiers, mais abandonne ses actions personnalisées. Google déplacera les Gems le 17 novembre 2026, puis en retirera l'usage aux comptes Workspace, au mieux à compter de mars 2027. Le module 6 réécrit votre assistant de marque au format SKILL.md, que les cinq éditeurs savent lire." },
    { q: "Quel assistant pour les visuels de campagne ?", a: "ChatGPT reste le plus complet sur l'image : ChatGPT Images 2.5 corrige un détail sans refaire tout le visuel. Gemini génère dans Slides et dans l'application, avec un quota mensuel de trente images Nano Banana Pro dans l'édition Business Standard. Copilot Chat crée des images si votre administrateur l'autorise. Claude compose schémas et maquettes, sans photo ni illustration. Quel que soit l'outil, le visuel final passe par la personne qui tient la marque." },
    { q: "Comment savoir si un chiffre de marché trouvé par l'IA est fiable ?", a: "Demandez la source exacte et sa date, puis ouvrez-la. Préférez les chiffres publiés par l'INSEE, une fédération professionnelle ou un rapport annuel, dont la méthode est décrite. Un chiffre sans source vérifiable ne va pas dans un support client, et un rapport issu d'une recherche approfondie se relit lien par lien avant d'entrer dans une recommandation. En atelier, chaque participant reprend trois chiffres de sa dernière présentation et remonte jusqu'à leur publication d'origine." },
    { q: "Quel budget prévoir pour former une équipe marketing ?", a: "Le groupe marketing règle 1 980 € HT par journée de travail, avec douze inscrits en intra comme avec un seul en parcours individuel, soit 3 960 € HT pour les deux. Masteria étant titulaire de Qualiopi, votre OPCO a la possibilité de financer la session, selon ses règles et ce qu'il lui reste de budget ; programme et convention accompagnent la demande. Une équipe marketing installée en Suisse romande ou en Belgique reçoit un devis en euros HT, faute d'OPCO dans ces deux pays." },
  ],
  tarifs: {
    titre: "Le prix d'une session marketing et son contenu",
    paras: [
      "Avant la première journée, nous étudions avec vous trois pièces : votre dernier brief d'agence, l'export d'une campagne passée débarrassé des données clients et la plateforme de marque ; les ateliers s'en nourrissent. Sont inclus ensuite les supports, des demandes réglées sur vos canaux, la compétence « voix de marque » écrite pendant le module 6 et la matrice de décision complétée en fin de session.",
      "Supposons un service marketing de cinq personnes : la responsable, deux chargés de contenus, une chargée d'acquisition et le gardien de la marque. Le parcours en intra leur est facturé 3 960 € HT au total, 792 € HT par tête. En parcours individuel, la responsable seule paie 1 980 € HT la journée. Notre certification Qualiopi autorise ensuite votre OPCO à instruire un financement d'après les usages de votre secteur ; nous montons le dossier avec vous.",
    ],
  },
  apres: {
    titre: "Une fois l'assistant choisi, le faire servir chaque semaine",
    texte: "Quand la grille a désigné l'outil principal, Masteria peut construire avec l'équipe ce qui l'installera dans la routine : la compétence de marque diffusée à toute l'organisation, un agent de veille qui relève chaque lundi les nouveautés de vos concurrents avec leurs liens, ou un tableau de bord qui assemble le bilan mensuel à partir de vos exports. Comme il s'agit de conseil et de développement sur mesure, ce chantier n'est pas finançable par votre OPCO ; son forfait est arrêté à l'issue du cadrage.",
  },
  cta: {
    milieu: "Envoyez-nous la liste de vos licences et votre prochain lancement : les deux journées seront bâties sur cette campagne.",
    fin: {
      titre: "Préparons la session autour de votre prochaine campagne",
      texte: "Dites-nous quels assistants circulent déjà dans l'équipe, sous quelle offre, et quels livrables reviennent chaque mois. En retour, vous recevez un programme calé sur votre suite bureautique et des dates possibles.",
    },
  },
  terrain: {
    titre: "Sur le terrain : six assistants comparés, puis un assistant commun pour le service promotion",
    texte: "En septembre 2026, une interprofession agricole a confié à Masteria la formation de seize salariés, sur trois jours. La plénière a mis six assistants face aux mêmes documents publics de leur filière, puis le groupe a rempli ensemble sa grille de choix. Le lendemain, l'atelier marketing et communication a fixé la voix de la marque dans un assistant partagé par le service et l'a fait produire : contenus en anglais, calendrier éditorial, visuels, veille et bilan de campagne. Un premier assistant, monté dans deux outils, a été interrogé sur une information absente de ses documents, pour s'assurer qu'il n'inventait rien.",
    lien: '/etudes-de-cas-ia#mission-interprofession-agricole',
  },
  liensAssocies: [
    { label: "Toutes les formations multi-outils, du programme général aux métiers", href: '/formation-multi-outils' },
    { label: "Formation IA pour le marketing, sans comparatif d'outils", href: '/formation-ia-marketing' },
    { label: "ChatGPT pour le marketing : images, plugins et agents d'équipe", href: '/formation-chatgpt-marketing' },
    { label: "Gemini pour le marketing dans Google Workspace", href: '/formation-gemini-marketing' },
    { label: "Comparateur : quel assistant pour votre métier, en deux minutes", href: '/quel-outil-ia' },
  ],
  sources: [
    { name: "Microsoft Learn : ce que font Microsoft Copilot et Copilot Chat (page du 1er octobre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
    { name: "Microsoft Learn, journal des versions de Copilot : PowerPoint accepte les compétences", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes" },
    { name: "Microsoft Support : Copilot dans Excel, modes Édition, Plan et Conversation", url: "https://support.microsoft.com/en-us/office/agent-mode-in-excel-a2fd6fe4-97ac-416b-b89a-22f4d1357c7a" },
    { name: "Google : plafonds de Gemini par édition, dont les images Nano Banana Pro (revu le 7 octobre 2026)", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
    { name: "Google Workspace Updates : arrivée des compétences dans Gemini", url: "https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html" },
    { name: "Google Workspace : passage des Gems aux compétences, dates clés", url: "https://knowledge.workspace.google.com/p/gems-migration" },
    { name: "OpenAI Help Center : métadonnées C2PA ajoutées aux images de ChatGPT", url: "https://help.openai.com/en/articles/8912793-c2pa-in-chatgpt-images" },
    { name: "OpenAI Help Center : fin des GPTs personnalisés et bascule vers les plugins", url: "https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq" },
    { name: "Anthropic : conditions grand public révisées en 2025, choix d'entraînement et conservation", url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
    { name: "Mistral, centre d'aide : entraînement des modèles selon l'offre Vibe souscrite", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
    { name: "EUR-Lex : règlement 2024/1689, obligations de transparence sur les contenus générés", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689" },
    { name: "Légifrance : loi n° 2023-451, article 5, visages générés dans l'influence", url: "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000047663211" },
  ],
}
