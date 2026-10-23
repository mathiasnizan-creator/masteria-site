// Contenu propre à /formation-prompt-engineering (page propre, guide terrain). Rendu par SpokePage.
// Créé le 07/10/2026, refondu le 22/10/2026 sur la requête « formation prompt engineering » (Search
// Console : position 67) : programme 2026 en quatre écrits (prompt, consigne de projet, Skill, contexte
// d'agent), exercices types, FAQ ciblée, liens internes à ancre exacte ({/slug|libellé}, rendu par
// TerrainGuide). Faits outils : src/data/claude-facts.js (19/10/2026) ; Gems et compétences Google
// (aide admin Workspace), GPTs (FAQ OpenAI) et Copilot Cowork (Microsoft Learn) relus le 22/10/2026 ;
// Vibe (notes de version Mistral du 22/09/2026, relues le 19/10). Cas cités : distribution et
// conseil-financier (data/etudes-de-cas.js), interprofession-agricole (data/missions-formation.js).
// Aucun pourcentage de gain.
export default {
  slug: 'formation-prompt-engineering',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-22',
  updatedLabel: 'Revu le 22 octobre 2026',
  h1: "Formation prompt engineering : écrire des prompts, des Skills et des consignes d'agents",
  metaTitle: "Formation prompt engineering : prompts IA, Skills, agents | Masteria",
  metaDesc: "Formation prompt engineering en 1 jour : prompts IA structurés, consignes de projet, Skills SKILL.md et instructions d'agents, sur votre outil. Dès 1 980 € HT.",
  keywords: "formation prompt engineering, formation prompt ia, formation prompt engineer, formation prompting, apprendre le prompt engineering, consigne de projet, skill.md, instructions d'agent",
  prerequis: "Avoir déjà utilisé un assistant IA, même de loin en loin, et disposer d'un compte professionnel sur l'outil retenu par l'entreprise",
  resume: "La formation prompt engineering apprend à écrire les instructions qu'un assistant IA exécute : le prompt d'une demande ponctuelle, la consigne permanente d'un projet, la compétence (Skill) qui range une procédure et le cadre de travail d'un agent. Chez Masteria, elle se déroule en une journée de sept heures sur l'assistant que vous utilisez déjà (ChatGPT, Gemini, Claude, Microsoft Copilot ou Vibe), en intra jusqu'à douze participants comme en séance individuelle. La journée est facturée à partir de 1 980 € HT, la préparation sur mesure en sus, et Masteria, organisme certifié Qualiopi, prépare avec vous le dossier destiné à votre OPCO.",
  enBref: [
    { label: 'Formation', value: "Prompt engineering pour tous les assistants : prompts structurés, consignes de projet, Skills au format SKILL.md, instructions d'agents" },
    { label: 'Durée', value: "7 heures sur une journée : quatre modules de 1 h 45, chacun avec un exercice sur vos tâches" },
    { label: 'Formats', value: "Sur site ou à distance, en groupe de douze au maximum ou en individuel" },
    { label: 'Tarif', value: "À partir de 1 980 € HT la journée, quel que soit le nombre de participants ; préparation sur mesure chiffrée au devis" },
    { label: 'Financement', value: "Certification Qualiopi de Masteria : votre OPCO peut être saisi d'une demande, qu'il tranche d'après ses propres critères" },
    { label: 'Prérequis', value: "Un premier usage d'un assistant IA et un compte d'entreprise sur l'outil de l'équipe" },
  ],
  intro: "Le prompt engineering désigne l'écriture de ce qu'un modèle d'IA doit faire, à partir de quelles sources et sous quel contrôle. En 2026, cet écrit a changé de place. Les assistants d'entreprise gardent des consignes de projet, chargent des compétences écrites au format SKILL.md et confient des tâches entières à des agents : une phrase bien construite sert alors des dizaines de fois, chez plusieurs collègues, au lieu de se perdre dans une conversation. Cette formation prompt engineering suit ce déplacement, sur l'outil déjà déployé chez vous, avec les fonctions des assistants relevées en octobre 2026. Elle se suit seule ou après une formation à l'outil, présentée dans notre {/formation-intelligence-artificielle|catalogue des formations en intelligence artificielle}.",
  guide: {
    kicker: "Guide terrain",
    h2: "Le prompt engineering en 2026 : quatre écrits, du prompt ponctuel au contexte d'agent",
    lead: "Un assistant IA ne sait rien de votre entreprise : ni le lecteur de la note, ni la règle qui interdit une formule, ni le fichier qui contient le bon chiffre. Ce qu'il ne reçoit pas, il le comble par la suite la plus probable, et cette suite sonne juste même quand elle est fausse. Le prompt engineering consiste à lui fournir ce qui manque et à dire comment la réponse sera contrôlée. La journée applique cette règle à quatre échelles : une demande, un projet, une procédure, un agent.",
    sections: [
      {
        h3: "Le prompt ponctuel reste la base : six éléments et une question préalable",
        paras: [
          "Un modèle de langage écrit sa réponse mot après mot, en retenant à chaque pas la suite la plus plausible au vu de ce qu'il a lu. Une demande courte lui laisse donc beaucoup à deviner. La méthode de la journée fait réunir six éléments dans chaque prompt : l'objectif (à quoi servira la réponse, et pour qui), le contexte (l'entreprise, la situation, ce qui a déjà été essayé), les sources (les pièces jointes ou désignées, seules admises), la consigne (le travail attendu, en verbes précis), le format (longueur, structure, ton) et le contrôle (ce que le modèle signale quand il ne sait pas).",
          "Deux gestes complètent la structure. Le premier consiste à inviter l'assistant à interroger l'utilisateur avant de rédiger : il expose ses hypothèses, et l'utilisateur corrige un malentendu avant qu'il ne remplisse deux pages. Le second consiste à joindre un exemple de bonne réponse, parfois un contre-exemple, qui renseigne mieux sur le ton attendu qu'une liste d'adjectifs.",
          "Le mode choisi modifie aussi l'écriture. ChatGPT règle la durée de réflexion de son modèle, Microsoft Copilot propose Auto, Quick response et Think deeper, Gemini distingue un mode rapide, un mode Raisonnement et son modèle Pro, Vibe bascule entre Fast et Think. Claude laisse choisir le modèle : Opus 5.5, qu'Anthropic conseille pour l'essentiel des tâches, Fable 5.1, le plus puissant, ou les plus rapides, Sonnet 5.5 et Haiku 5.5. Avec un mode qui raisonne, on décrit le but, les contraintes et les critères de réussite, puis on laisse le modèle organiser son travail ; en mode rapide, on découpe soi-même la tâche en étapes courtes.",
          "Pour partir d'exemples, la {/bibliotheque-de-prompts|bibliothèque de prompts} du site classe plus de cent prompts par métier, chacun suivi d'une note qui explique ses choix, et le {/blog/prompt-engineering-guide-entreprise|guide du prompt engineering en entreprise} rappelle les techniques de base avant la session.",
        ],
      },
      {
        h3: "La consigne de projet : écrire une fois ce qui vaut pour tout un dossier",
        paras: [
          "Recopier le même contexte dans chaque prompt lasse vite, et chacun finit par l'abréger. Les assistants d'entreprise offrent un espace pour l'écrire une fois : les projets de ChatGPT et de Claude, qui réunissent consignes et fichiers communs, les blocs-notes de Microsoft Copilot, les carnets de Gemini Notebook, les projets et les bibliothèques de Vibe. Chaque conversation ouverte dans cet espace hérite alors du contexte.",
          "Une consigne de projet efficace tient sur une page. Elle dit à quoi sert l'espace et pour quels lecteurs, quelles sources font foi, quelles règles de style s'appliquent, ce qui est exclu (un engagement de prix, le nom d'un client), le format de sortie par défaut et la mention à écrire quand une information manque : « non trouvé dans les documents ». Les instructions personnalisées, réglées dans le profil de chaque utilisateur, gardent ce qui vaut pour la personne : son métier, son niveau de détail, sa langue de travail.",
          "La fiabilité s'écrit aussi dans cette consigne. Elle impose que tout chiffre sorte d'un calcul exécuté en code, possible dans ChatGPT et dans Claude, ou d'une formule posée dans le tableur, avec un total de contrôle confronté au fichier d'origine. Elle prévoit une seconde passe, demandée à part, qui relit la réponse contre les sources et relève chaque affirmation sans appui. En septembre 2026, pendant une formation multi-outils menée pour une interprofession agricole, les participants ont soumis leur premier assistant à ce test : on lui a demandé une information que ses documents ne contenaient pas, afin de voir s'il la signalait comme manquante ou s'il l'inventait.",
        ],
      },
      {
        h3: "La Skill : une procédure rangée dans un fichier SKILL.md",
        paras: [
          "Une compétence, ou Skill, range une procédure que l'équipe répète : répondre à une réclamation, préparer une cotation, relire un contrat type. Elle prend la forme d'un dossier ; son fichier SKILL.md réunit un nom, une description des cas où s'en servir, les instructions et des exemples, et des modèles ou fichiers de référence peuvent l'accompagner. L'assistant lit d'abord ces descriptions, puis ne charge que la compétence adaptée à la demande du moment. La description joue donc le rôle de déclencheur, et sa rédaction compte autant que celle des instructions.",
          "Anthropic en a fait un standard ouvert le 18 décembre 2025, et les autres éditeurs s'en sont rapprochés. Copilot Cowork importe un fichier SKILL.md dès lors que son en-tête porte un nom et une description, puis l'enregistre dans OneDrive ; chez Mistral AI, les Skills ont pris la place des agents de Vibe le 22 septembre 2026. Une procédure bien écrite passe ainsi d'un assistant à l'autre avec peu de retouches.",
          "Le calendrier des éditeurs pousse dans la même direction. OpenAI arrête les GPTs personnalisés le 11 décembre 2026 ; chaque GPT converti prend la forme d'un plugin, et ses instructions celle d'une compétence. Chez Google, les compétences arrivent dans Workspace à partir du 5 octobre 2026 et dans l'application Gemini à partir du 13 octobre, pour remplacer les Gems ; sur les comptes professionnels, leur création et leur usage prendront fin au plus tôt le 1er mars 2027. Une bibliothèque d'équipe bâtie aujourd'hui gagne à prendre d'emblée la forme de compétences.",
          "Un distributeur informatique B2B a confié à Masteria, en juin 2026, la formation de dix référents. Chacun a bâti une compétence Claude sur son propre flux, onze au total, de la cotation aux stocks en passant par les relances de devis et les réponses aux cahiers des charges. La direction relit chaque compétence avant sa diffusion, un propriétaire en répond, et une revue a lieu chaque trimestre ; l'entreprise prévoit de les étendre aux autres équipes entre octobre et décembre 2026. {/etudes-de-cas-ia#distribution|Voir l'étude de cas complète du distributeur informatique}.",
        ],
      },
      {
        h3: "Le contexte d'un agent : un but, des outils permis, des points d'arrêt",
        paras: [
          "Un agent enchaîne des actions sans attendre une relance à chaque étape : il lit une boîte de réception, cherche dans des fichiers, rédige, parfois envoie. Ses instructions ressemblent à une fiche de poste. Elles fixent le but et le critère qui marque la fin du travail, les sources et les outils autorisés, les actions exclues, les moments où l'agent s'arrête pour obtenir une validation humaine (avant tout envoi, tout paiement, toute suppression) et la forme du compte rendu qu'il laisse.",
          "Les assistants d'entreprise ouvrent cette écriture à qui ne programme pas : ChatGPT avec ses agents d'espace de travail, réservés aux offres Business et Enterprise, l'Agent Builder de Microsoft Copilot avec ses champs Instructions et Connaissances, Cowork, qui confie à Claude une tâche menée sur tout un dossier de fichiers, les flux de Workspace Studio chez Google, l'espace Work de Vibe avec ses Skills, ses connecteurs et ses tâches planifiées. La journée apprend à rédiger ce contexte et à l'éprouver sur un cas sans risque. Construire et superviser des agents en production demande davantage : la {/formation-agents-ia|formation agents IA} y consacre deux jours.",
        ],
      },
      {
        h3: "Exercices types de la journée",
        paras: [
          "Chaque exercice part d'une tâche que les participants nous transmettent avant la session. Voici ceux qui reviennent le plus souvent.",
        ],
        list: [
          "Réécrire un prompt vague tiré de sa semaine avec les six éléments, puis comparer les réponses en mode rapide et en mode de réflexion.",
          "Faire poser à l'assistant les questions qui lui manquent avant une rédaction, et relever les hypothèses qu'il avait prises.",
          "Rédiger la consigne d'un projet pour un dossier en cours, puis la tester sur trois demandes courtes.",
          "Poser à ce projet une question sans réponse dans les sources, et vérifier qu'il écrit « non trouvé dans les documents ».",
          "Faire produire un tableau chiffré par l'exécution de code ou par le tableur, puis refaire un total à la main.",
          "Convertir une procédure éprouvée en fichier SKILL.md et retoucher sa description jusqu'à ce que l'assistant la charge au bon moment.",
          "Rédiger les instructions d'un agent de veille ou de tri, avec un point de validation avant toute action visible hors de l'entreprise.",
          "Envoyer la même consigne à deux assistants autorisés et noter ce qui varie entre les deux.",
          "Classer ses documents de travail entre ceux que l'outil peut recevoir et ceux qui resteront dehors.",
        ],
      },
    ],
    table: {
      caption: "Où écrire chaque niveau, assistant par assistant (relevé en octobre 2026)",
      headers: ["Assistant", "Consigne de projet", "Compétence (Skill)", "Agent"],
      rows: [
        ["ChatGPT", "Projets : instructions et fichiers communs", "Compétences ; fin des GPTs le 11 décembre 2026", "Agents d'espace de travail (Business, Enterprise)"],
        ["Microsoft Copilot", "Blocs-notes et instructions personnalisées", "Fichiers SKILL.md importés dans Copilot Cowork", "Agent Builder : instructions et connaissances"],
        ["Gemini", "Carnets Gemini Notebook", "Compétences, qui succèdent aux Gems", "Flux de Workspace Studio"],
        ["Claude", "Projets : consignes et fichiers de référence", "Skills au format SKILL.md", "Cowork, sur un dossier de fichiers"],
        ["Vibe (Mistral AI)", "Projets, bibliothèques et instructions", "Skills, qui remplacent les agents (22 septembre 2026)", "Espace Work : Skills, connecteurs, tâches planifiées"],
      ],
    },
    cas: {
      h3: "Exercice type détaillé : d'un prompt de réclamation à une compétence d'équipe",
      contexte: "Cet exercice sert quand un participant traite des réclamations clients. On part de la demande telle qu'il l'écrit, souvent une ligne (« Rédige une réponse à cette réclamation »), et on la fait passer par cinq étapes jusqu'à une compétence partagée par l'équipe.",
      etapes: [
        "Soumettre la demande d'une ligne et une réclamation passée à deux assistants autorisés, puis relever les défauts communs : faits inventés, excuses en cascade, geste commercial promis sans en avoir le droit.",
        "Réécrire le prompt avec les six éléments, en joignant la réclamation, l'extrait du suivi de livraison et la politique commerciale.",
        "Ajouter la consigne de questions préalables, puis tester sur trois réclamations anciennes dont on connaît la bonne réponse.",
        "Demander une seconde passe qui confronte la réponse au suivi de livraison et signale toute affirmation sans appui.",
        "Ranger le prompt stabilisé dans un fichier SKILL.md dont la description précise quand s'en servir, puis le confier à un responsable chargé de le diffuser.",
      ],
      prompt: "---\nname: reponse-reclamation-client\ndescription: Rédige la réponse écrite à une réclamation client (retard, rupture, écart de facturation) à partir de la réclamation, du suivi de livraison et de la politique commerciale fournis. À utiliser pour préparer toute réponse à une réclamation avant relecture ; ne sert pas aux négociations commerciales.\n---\n\n# Réponse à une réclamation client\n\nObjectif : préparer une réponse que l'utilisateur relira avant envoi. Le lecteur est la personne qui a signé la réclamation ; elle attend des faits et une date.\n\nSources autorisées : la réclamation, l'extrait du suivi de livraison et la politique commerciale fournis. Aucune autre source.\n\nÉtapes :\n1. S'il manque une information, pose tes questions à l'utilisateur et attends ses réponses avant d'écrire.\n2. Rédige 150 mots au plus : le problème reconnu en une phrase, les faits tirés du suivi de livraison, l'action engagée avec sa date, l'interlocuteur à contacter.\n3. Ne propose aucun avoir ni geste commercial absent de la politique commerciale.\n\nFormat : vouvoiement, phrases courtes, une seule phrase d'excuse.\n\nContrôle : sous la réponse, liste chaque fait cité avec la source et la ligne d'où il vient. Si une information nécessaire ne figure dans aucune source, écris : non trouvé dans les documents.",
      resultatLabel: "Ce que l'exercice produit.",
      resultat: "Le prompt devient un outil d'équipe : chacun l'appelle sans le recopier, la liste des faits sourcés se contrôle en un regard, et les questions préalables font remonter les cas que la politique commerciale ne couvre pas. Le même fichier se réinstalle ailleurs le jour où l'entreprise change d'assistant. La réponse part toujours après relecture humaine, et la réclamation transmise ne contient aucune donnée personnelle superflue.",
    },
    pieges: [
      { titre: "Le prompt tout fait copié en ligne", texte: "Un prompt repris d'une liste de « meilleurs prompts » ignore votre lecteur, vos sources et vos interdits ; il produit un texte poli et creux. Gardez sa structure si elle vous sert, puis remplacez chaque élément générique par une information tirée de votre dossier." },
      { titre: "Une consigne de projet devenue fourre-tout", texte: "Au fil des semaines, chacun ajoute une règle, et les consignes finissent par se contredire ou par noyer la demande du jour. Tenez-vous à une page, datez chaque modification et confiez la consigne à une personne qui tranche." },
      { titre: "Une Skill que l'assistant ne déclenche pas", texte: "Une description vague, du type « aide pour les clients », conduit l'assistant à charger la compétence à tort, ou jamais. Décrivez la tâche, les pièces attendues et les cas exclus, puis testez avec des demandes formulées comme vos collègues les formulent." },
      { titre: "Un agent sans point d'arrêt", texte: "Un agent autorisé à envoyer, payer ou supprimer sans validation transforme une erreur de lecture en incident. Inscrivez dans ses instructions chaque action qui exige un accord humain, et commencez par des droits en lecture seule." },
      { titre: "Le bon prompt sur le mauvais compte", texte: "Un prompt parfait collé dans un compte personnel peut servir à entraîner un modèle : sur ChatGPT en offre individuelle, l'option reste active tant que l'utilisateur ne la coupe pas. Travaillez sur le compte d'entreprise, contrôlez ses réglages et laissez hors de l'outil ce que votre charte exclut." },
    ],
  },
  audience: [
    { title: "Équipes qui se servent déjà d'un assistant IA", desc: "Vos collaborateurs utilisent ChatGPT, Copilot, Gemini, Claude ou Vibe avec des résultats inégaux et beaucoup de reprises. La journée leur donne une manière commune d'écrire prompts et consignes, sur l'assistant que l'entreprise a choisi." },
    { title: "Référents IA et formateurs internes", desc: "Vous diffusez les usages dans l'entreprise. Vous emportez une grille de rédaction, un modèle de consigne de projet et des compétences testées, de quoi animer vos propres ateliers et tenir la bibliothèque de l'équipe." },
    { title: "Métiers où l'erreur coûte cher : juridique, finance, RH, qualité", desc: "Vos livrables engagent l'entreprise. Vous apprenez à ancrer chaque réponse dans vos pièces, à faire calculer les chiffres au lieu de les laisser rédiger, et à faire contrôler le résultat avant de le signer." },
  ],
  useCases: [
    { icon: '📝', title: "Prompts en six éléments", desc: "Objectif, contexte, sources, consigne, format et contrôle, dans le même ordre sur tous les assistants de l'entreprise." },
    { icon: '📁', title: "Consignes de projet écrites une fois", desc: "Le contexte d'un dossier, ses sources et ses exclusions rangés dans un projet, un bloc-notes ou un carnet, dont hérite chaque conversation." },
    { icon: '🎯', title: "Réponses vérifiables", desc: "Sources désignées, mention « non trouvé », chiffres calculés et seconde passe de contrôle avant tout usage." },
    { icon: '🧩', title: "Skills d'équipe", desc: "Les procédures qui reviennent converties en fichiers SKILL.md, nommées, testées et confiées à un responsable." },
    { icon: '🤖', title: "Instructions d'agents encadrées", desc: "Un but, des outils permis et une validation humaine avant toute action visible hors de l'entreprise." },
    { icon: '⚖️', title: "Une consigne, plusieurs assistants", desc: "La même consigne essayée dans deux outils autorisés, et les écarts relevés pour choisir où l'installer." },
  ],
  modules: [
    { day: 1, title: "Module 1 · Écrire un prompt complet et choisir le bon mode", duration: '1h45', description: "Chacun comprend ce que lit le modèle et adopte une structure commune à tous les assistants.", items: ["Prédiction mot après mot, fenêtre de contexte, part laissée à l'improvisation", "Les six éléments d'un prompt : objectif, contexte, sources, consigne, format, contrôle", "Questions préalables, exemples et contre-exemples", "Modes rapides et modes de réflexion relevés en octobre 2026, et la façon d'écrire pour chacun"], exercise: "Vous réécrivez un prompt vague tiré de votre semaine, puis comparez les réponses obtenues dans deux modes." },
    { day: 1, title: "Module 2 · Écrire la consigne d'un projet et fiabiliser les réponses", duration: '1h45', description: "Le contexte s'écrit une fois pour tout un dossier, et chaque réponse devient vérifiable.", items: ["Instructions personnalisées et consignes de projet : ce qui relève de la personne, ce qui relève du dossier", "Projets de ChatGPT et de Claude, blocs-notes de Copilot, carnets Gemini Notebook, projets et bibliothèques de Vibe", "Sources qui font foi, mention « non trouvé dans les documents », chiffres calculés en code ou au tableur", "Seconde passe qui relève chaque affirmation sans appui"], exercise: "Vous rédigez la consigne d'un projet pour un dossier en cours, puis l'éprouvez avec une question sans réponse dans ses sources." },
    { day: 1, title: "Module 3 · Transformer une procédure en Skill", duration: '1h45', description: "Un prompt qui a fait ses preuves devient une compétence appelée par toute l'équipe.", items: ["Fichier SKILL.md : nom, description de déclenchement, instructions, exemples, fichiers joints", "Description qui déclenche au bon moment, cas exclus, tests sur trois demandes", "Responsable nommé, version datée, revue périodique", "GPTs arrêtés le 11 décembre 2026, Gems remplacés par des compétences, agents de Vibe devenus des Skills"], exercise: "Vous convertissez votre meilleur prompt en compétence, testée dans deux assistants sur trois cas." },
    { day: 1, title: "Module 4 · Écrire le contexte d'un agent et poser les règles de l'équipe", duration: '1h45', description: "Les participants rédigent les instructions d'un agent simple et repartent avec un cadre d'usage.", items: ["But, critère de fin, outils permis, actions exclues, validations humaines", "ChatGPT et ses agents d'espace de travail, Agent Builder de Copilot, Cowork dans Claude, Workspace Studio, espace Work de Vibe", "Pièces admises dans l'outil, compte d'entreprise, réglage de l'entraînement, charte d'usage", "Plan à 30 jours : compétences publiées, responsable désigné, premier bilan fixé à une date"], exercise: "Vous rédigez les instructions d'un agent de veille ou de tri avec un point de validation, puis repartez avec vos prompts, votre consigne de projet, votre compétence et le plan des trente jours suivants." },
  ],
  objectives: [
    "Le participant écrit un prompt qui réunit objectif, contexte, sources, consigne, format et contrôle, sur l'assistant de son entreprise.",
    "Le participant rédige la consigne d'un projet qui limite les réponses aux sources désignées et fait signaler toute information introuvable.",
    "Le participant fait produire les chiffres par un calcul vérifiable et contrôle un total à la main.",
    "Le participant convertit une procédure en compétence au format SKILL.md et vérifie qu'elle se déclenche sur trois demandes.",
    "Le participant écrit les instructions d'un agent avec ses outils permis, ses limites et ses points de validation humaine.",
    "Le participant distingue les pièces qu'il peut confier à l'outil de celles que la charte interne exclut.",
  ],
  faq: [
    { q: "Qu'est-ce qu'une formation prompt engineering ?", a: "C'est une formation qui apprend à écrire ce qu'un assistant IA doit faire pour obtenir une réponse exploitable et vérifiable. En 2026, elle couvre quatre écrits : le prompt d'une demande ponctuelle, la consigne permanente d'un projet, la compétence (Skill) qui range une procédure répétée et les instructions d'un agent qui agit en plusieurs étapes. Chez Masteria, ces quatre écrits se pratiquent en sept heures sur une journée, sur l'assistant déjà en place, à partir des tâches des participants." },
    { q: "Formation prompt IA, prompting, prompt engineering : est-ce la même chose ?", a: "Les trois expressions désignent la même compétence. « Prompt engineering » est le terme d'origine anglaise ; « formation prompt IA », « formation au prompting » et « art du prompt » en sont les équivalents en français courant. Le contenu reste identique quelle que soit l'étiquette : structurer une demande, l'ancrer dans des sources, faire contrôler la réponse, puis capitaliser ce qui fonctionne dans des consignes de projet et des compétences partagées." },
    { q: "Combien de temps faut-il pour apprendre le prompt engineering ?", a: "Les bases se prennent en quelques heures de pratique guidée : la structure en six éléments améliore les réponses dès le premier exercice. Les consignes de projet, les compétences et les instructions d'agents demandent davantage, d'où une journée complète construite sur les tâches de chacun. Pour une première sensibilisation, le Sprint IA, format de trois heures, convient ; pour construire et superviser des agents, la formation agents IA y consacre deux jours." },
    { q: "Le prompt engineering sert-il encore avec les modèles qui raisonnent et les agents ?", a: "Oui, et son centre de gravité s'est déplacé. Un modèle qui raisonne comprend mieux une demande floue, mais il ignore toujours votre lecteur, vos sources et vos interdits. Avec un agent, l'enjeu grandit : une instruction imprécise produit une suite d'actions au lieu d'une phrase maladroite. On écrit donc moins de prompts isolés et davantage de consignes durables, relues, testées et confiées à un responsable." },
    { q: "Quelle différence entre un prompt, une consigne de projet, une Skill et un agent ?", a: "Le prompt sert une demande et disparaît avec la conversation. La consigne de projet s'applique à chaque conversation ouverte dans un même espace : sources, ton, exclusions. La Skill range une procédure dans un fichier SKILL.md, chargé par l'assistant dès qu'une demande s'y rapporte, quel que soit le projet ouvert. L'agent reçoit un but et des outils, puis enchaîne plusieurs actions ; ses instructions fixent aussi ce qu'il lui est interdit de faire sans validation humaine." },
    { q: "Faut-il savoir coder pour suivre la formation ?", a: "Non. Rédiger un prompt, une consigne ou une compétence relève de la méthode et de la précision d'écriture. Un fichier SKILL.md est un texte simple précédé d'un en-tête de quelques lignes, que l'assistant peut d'ailleurs rédiger avec vous. Les profils techniques y trouvent leur compte avec les instructions d'agents et la comparaison entre assistants ; pour les développeurs qui veulent écrire le contexte d'un agent de code, la formation Claude Code est plus indiquée." },
    { q: "La formation dépend-elle d'un outil en particulier ?", a: "Non. La méthode s'applique aux cinq grands assistants d'entreprise : ChatGPT, Gemini, Claude, Microsoft Copilot et Vibe de Mistral AI. Les ateliers se déroulent sur l'assistant que votre entreprise a retenu, et les différences utiles sont traitées en séance : modes de réflexion, espaces où ranger les consignes, prise en charge des compétences, création d'agents. Quand l'équipe utilise deux assistants, chaque consigne se teste dans les deux." },
    { q: "Que deviennent nos GPTs et nos Gems ?", a: "OpenAI arrête les GPTs personnalisés le 11 décembre 2026, hors espaces Enterprise bénéficiant d'un délai jusqu'au 11 février 2027 ; converti, un GPT devient un plugin dont les instructions forment une compétence. Google remplace les Gems par des compétences ; sur les comptes professionnels, les Gems resteront utilisables au moins jusqu'au 1er mars 2027, puis les derniers seront convertis en brouillons de compétences. La journée fait réécrire vos assistants les plus utiles en compétences." },
    { q: "Comment éviter qu'un prompt expose des données sensibles ?", a: "En réglant le compte avant d'écrire. Par défaut, les offres d'entreprise de ChatGPT, Claude, Copilot et Gemini laissent vos échanges hors de l'entraînement des modèles ; ChatGPT en offre individuelle s'en sert tant que l'utilisateur ne s'y oppose pas, et Vibe Team l'autorise tant que l'administrateur ne l'a pas désactivé pour l'ensemble de l'espace. Le quatrième module fait trier les documents de chacun entre ceux que l'assistant peut recevoir et ceux qui resteront dehors, puis inscrit ce tri dans la charte de l'équipe." },
    { q: "Combien coûte une formation prompt engineering, et peut-elle être financée ?", a: "La journée est proposée à partir de 1 980 € HT, que le groupe compte douze participants ou un seul ; la préparation sur vos tâches s'ajoute au devis. La certification Qualiopi de Masteria ouvre la voie à une prise en charge par votre OPCO, qui décide d'après ses propres règles et le budget qu'il lui reste ; nous lui fournissons le programme détaillé et la convention. Pour les entreprises établies en Suisse ou en Belgique, où les OPCO n'existent pas, nous chiffrons en euros HT." },
  ],
  tarifs: {
    titre: "Le prix d'une formation prompt engineering, et ce qu'il comprend",
    paras: [
      "Le montant de base comprend l'animation, le programme et les supports : la grille de rédaction, le modèle de consigne de projet, le gabarit de fichier SKILL.md et le modèle de charte travaillé au dernier module. Construire les exercices à partir des dossiers de vos équipes demande une préparation, chiffrée à part au devis : nous recueillons deux ou trois tâches par participant et vérifions l'outil, les comptes et les droits ouverts (projets, compétences, agents) avant la session.",
      "Un groupe de douze référents venus de plusieurs services paie 1 980 € HT de base pour la journée, soit 165 € HT par personne. Une directrice juridique qui préfère travailler seule sur ses dossiers paie le même montant de base. Votre OPCO de branche peut être sollicité au titre de la certification Qualiopi de Masteria ; il se prononce selon ses règles, sur un dossier que nous constituons ensemble.",
    ],
  },
  apres: {
    titre: "Après la journée, des assistants construits sur vos compétences",
    texte: "Des compétences entretenues dans la durée préparent l'étape suivante : un assistant ou un agent qui applique vos procédures à vos documents, relié à vos logiciels par des connecteurs, avec des droits par service. Masteria peut cadrer ce projet, le construire sur les compétences écrites pendant la formation et former les personnes qui le feront évoluer. Ce travail relève du conseil et du développement ; il n'entre donc pas dans une prise en charge par l'OPCO et se chiffre au forfait, une fois le cadrage fait.",
  },
  cta: {
    milieu: "Envoyez-nous trois tâches que vos équipes confient déjà à l'IA : nous bâtissons la journée sur elles.",
    fin: {
      titre: "Construisons la journée sur les tâches de vos équipes",
      texte: "Indiquez-nous l'assistant déployé chez vous, le nombre de participants et trois tâches qu'ils aimeraient mieux réussir avec l'IA. Nous vous proposons un programme bâti sur ces tâches et des dates de session.",
    },
  },
  terrain: {
    titre: "Sur le terrain : des prompts écrits avec les consultants, et des assistants qui questionnent avant de rédiger",
    texte: "Un cabinet de conseil financier indépendant, qui travaille pour le secteur public, a fait construire par Masteria quatre assistants pour ses appels d'offres, chacun dédié à une famille de marchés. Leurs prompts sont nés en atelier : quatre séances de deux heures où les consultants les ont écrits puis testés sur de récentes consultations. Avant de rédiger, chaque assistant pose ses questions au consultant : le cabinet connaît-il déjà ce client, qu'attend celui-ci en premier, quelles références et quelle équipe présenter. Une journée de formation a ensuite appris aux consultants, sur les deux sites du cabinet, à faire évoluer ces prompts eux-mêmes.",
    lien: '/etudes-de-cas-ia#conseil-financier',
  },
  liensAssocies: [
    { label: "Des prompts aux Skills : capitaliser les méthodes d'une équipe", href: '/blog/prompts-skills-ia-methodes-equipe' },
    { label: "Formation agents IA : concevoir, tester et superviser un agent", href: '/formation-agents-ia' },
    { label: "Bibliothèque de prompts IA : 118 prompts classés par métier", href: '/bibliotheque-de-prompts' },
    { label: "Prompt engineering en entreprise : le guide pratique", href: '/blog/prompt-engineering-guide-entreprise' },
    { label: "Catalogue des formations en intelligence artificielle", href: '/formation-intelligence-artificielle' },
    { label: "Formation multi-outils : cinq assistants comparés sur vos dossiers", href: '/formation-multi-outils' },
    { label: "Sprint IA : un format court de trois heures", href: '/formation-sprint-ia' },
  ],
  sources: [
    { name: "OpenAI, FAQ sur la fin des GPTs personnalisés", url: "https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq" },
    { name: "Aide administrateur Google Workspace, transition des Gems vers les compétences", url: "https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills" },
    { name: "Blog Workspace Updates, annonce des compétences Gemini", url: "https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html" },
    { name: "Aide Gemini, modes de l'application pour les comptes professionnels", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
    { name: "Microsoft Learn, vue d'ensemble de Copilot et sélection du modèle", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
    { name: "Microsoft Learn, compétences et instructions dans Copilot Cowork", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-customize" },
    { name: "Mistral AI, notes de version (Skills, modes Fast et Think, 22 septembre 2026)", url: "https://docs.mistral.ai/resources/release-notes" },
    { name: "Mistral AI, usage des données des utilisateurs pour l'entraînement", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
    { name: "Anthropic, liste des modèles Claude", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
    { name: "Anthropic, journal des nouveautés des applications Claude", url: "https://support.claude.com/en/articles/12138966-release-notes" },
  ],
}
