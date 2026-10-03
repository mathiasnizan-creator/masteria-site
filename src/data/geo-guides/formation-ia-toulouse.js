// Contenu propre à /formation-ia-toulouse (guide terrain). Rendu par GeoIAGenericPage.
// Économie : Insee, dossier complet Toulouse Métropole (RP 2023, paru le 27/08/2026), Insee Analyses Occitanie n° 145 et Insee Flash Occitanie n° 157 (septembre 2026). Consultés le 03/10/2026.
// Outils : learn.microsoft.com (Copilot), aide Google Workspace (confidentialité de l'IA générative), help.mistral.ai, vérifiés le 03/10/2026. PPST et ZRR : cyber.gouv.fr. Recherche : aniti.univ-toulouse.fr, irit.fr, irt-saintexupery.com.
export default {
  slug: 'formation-ia-toulouse',
  dateModified: '2026-10-03',
  metaDesc: "Formation IA Toulouse : quel outil pour l'aéronautique, le spatial, la santé ou le numérique, sessions sur sites protégés, OPCO 2i, Atlas ou ANFH. Qualiopi.",
  intro: "Toulouse Métropole a gagné plus de 70 000 habitants en six ans, et un emploi sur trois y est occupé par un cadre. Ingénieurs, chercheurs, techniciens et fonctions support n'utilisent pas l'IA de la même façon, et une partie d'entre eux travaille dans des zones dont l'accès se décide au ministère. Masteria, installé à Lyon, part de ces contraintes pour bâtir chaque session : l'outil retenu par votre DSI, des documents autorisés, une salle accessible au formateur, à Toulouse même ou en classe virtuelle.",
  guide: {
    kicker: "Guide terrain Toulouse",
    h2: "L'IA à Toulouse : une métropole d'ingénieurs où l'outil se choisit avec la sécurité",
    lead: "Selon l'Insee, Toulouse Métropole comptait 841 524 habitants en 2023, contre 771 132 en 2017, et 518 864 emplois. Les cadres et professions intellectuelles supérieures en occupent 33,7 %, contre 27,6 % à Bordeaux Métropole. Dans la zone d'emploi de Toulouse, 70 495 salariés travaillaient pour la filière aérospatiale fin 2022, soit 16,3 % de l'emploi salarié marchand. Ces chiffres dessinent le terrain de la formation : des publics à l'aise avec la technique, et des entreprises où la question des données se règle avant celle du prompt.",
    sections: [
      {
        h3: "Une économie d'ingénierie où l'industrie pèse moins que sa réputation",
        paras: [
          "L'industrie au sens de l'Insee représente 50 494 emplois dans la métropole en 2023, soit 9,7 %, contre 12,7 % en 2012. Le chiffre surprend dans la ville d'Airbus. Une partie du travail aéronautique se fait dans des bureaux d'études, des sociétés d'ingénierie et des entreprises informatiques que l'Insee compte dans les services et rattache au segment tertiaire de la filière aérospatiale. Les 297 644 emplois classés dans le tertiaire marchand recouvrent donc aussi des métiers de calcul, de certification, de documentation et de logiciel, au contact direct de l'avion et du satellite.",
          "L'Insee a relevé un signal qui concerne l'IA de près. Dans son bilan de septembre 2026 sur la filière aérospatiale d'Occitanie, il note que les activités informatiques de la filière ont perdu 500 emplois en 2025, parallèlement à des gains de productivité significatifs liés à l'intelligence artificielle générative, tandis que les activités d'ingénierie créaient 300 postes. Pour une entreprise toulousaine, l'enjeu de formation se lit dans ces deux lignes : les équipes qui produisent du code et de la documentation voient leur métier changer en premier, et elles doivent apprendre à vérifier ce que l'outil produit.",
        ],
      },
      {
        h3: "Le bon outil dépend du système d'information et du niveau de protection",
        paras: [
          "Un bureau d'études qui classe ses documents avec des étiquettes de confidentialité Microsoft Purview part avec un atout. Microsoft documente que Copilot respecte les droits d'usage attachés à un fichier chiffré : un document hors de portée de l'utilisateur reste hors de portée de l'assistant. La formation commence donc par un point avec le responsable de la sécurité des systèmes d'information (RSSI) sur l'état de l'étiquetage. Dans une organisation sous Google Workspace, Google s'engage à ne pas faire examiner vos contenus par des réviseurs humains et à ne pas les utiliser pour entraîner des modèles hors de votre domaine sans autorisation.",
          "Mistral AI, l'éditeur français, héberge par défaut dans l'Union européenne les données de Vibe, son assistant, et de son API. Sa documentation précise que certaines fonctions entraînent des transferts temporaires vers des sous-traitants situés hors de l'Union, et que l'offre Enterprise permet d'en désactiver une partie à l'échelle de l'organisation. Pour une biotech de l'Oncopole, ces nuances se lisent avec le délégué à la protection des données : aucune donnée de patient identifiante n'entre dans un assistant en l'absence d'hébergeur certifié pour les données de santé (HDS).",
        ],
      },
      {
        h3: "Former dans une zone à régime restrictif se prépare avec l'établissement",
        paras: [
          "Les établissements qui appliquent le dispositif de protection du potentiel scientifique et technique de la nation (PPST) délimitent des zones à régime restrictif, ou ZRR. L'ANSSI rappelle que tout accès à une ZRR dépend d'une autorisation du ministre de tutelle, demandée par l'établissement, et que l'accès informatique aux informations protégées suit la même règle. Un formateur extérieur ne s'improvise donc pas dans ces zones. Pour une session à Blagnac, Colomiers ou Montaudran, la solution la plus simple consiste à réserver une salle hors zone et à travailler sur des documents préparés et autorisés.",
          "Le reste de l'organisation suit le rythme des équipes toulousaines. Les groupes comptent 12 participants au plus, et nous conseillons de mêler ingénieurs, qualité et achats pour que chacun découvre les usages des autres. La classe virtuelle convient aux organisations réparties entre Toulouse, Tarbes et Pamiers, ou entre plusieurs pays. L'animation revient à Mathias Nizan ou à un formateur indépendant expérimenté du réseau ; le déplacement jusqu'à Toulouse est chiffré dans le devis, transmis sous 24 h ouvrées.",
          "Côté financement, la métallurgie et la construction aéronautique relèvent d'OPCO 2i, l'ingénierie, le conseil et le numérique d'Atlas. Le CHU de Toulouse, établissement public de santé, s'adresse à l'ANFH, qui gère les fonds de formation des hôpitaux publics et compte une délégation Midi-Pyrénées. Les cliniques et laboratoires privés relèvent de l'OPCO de leur branche. Organisme certifié Qualiopi, Masteria rédige le programme et la convention ; l'entreprise dépose sa demande avant la session, et la prise en charge dépend de ses fonds disponibles.",
        ],
      },
      {
        h3: "ANITI, l'IRIT et l'IRT Saint Exupéry ancrent la recherche en IA dans l'industrie",
        paras: [
          "ANITI, l'institut d'intelligence artificielle de l'université de Toulouse créé en 2019, a été désigné cluster IA en 2024 et porte 19 chaires, plus de 300 chercheurs et plus de 60 partenaires. L'une de ses chaires, CertifEmbAI, travaille sur l'embarquabilité et la sûreté des systèmes d'apprentissage automatique soumis à certification. Cette question conditionne l'entrée de l'IA dans les systèmes embarqués : un algorithme qui apprend doit démontrer qu'il se comporte comme prévu avant de voler.",
          "L'IRIT, l'Institut de recherche en informatique de Toulouse, réunit environ 600 membres permanents et non permanents et compte l'aéronautique, l'espace et les transports parmi ses domaines d'application. À Toulouse comme à Bordeaux et à Sophia Antipolis, l'IRT Saint Exupéry réunit ingénieurs, chercheurs et doctorants issus de l'industrie et de l'université autour de solutions fiables, robustes et certifiables pour l'aéronautique et le spatial. Aerospace Valley relie ces laboratoires aux entreprises. Un projet trop ambitieux pour un simple assistant y trouve ses interlocuteurs.",
        ],
      },
    ],
    table: {
      caption: "Toulouse, filière par filière : quel outil, pour quel usage, avec quelle vigilance",
      headers: ["Filière toulousaine", "Outil le plus adapté", "Usage type", "Vigilance"],
      rows: [
        ["Constructeurs et bureaux d'études aéronautiques", "Microsoft Copilot, sur le tenant Microsoft 365 de l'entreprise", "Retrouver une exigence dans la documentation interne, préparer une revue de projet", "Étiquetage Purview et droits de partage revus avant le déploiement"],
        ["Spatial et défense", "Modèles Mistral AI déployés sur l'infrastructure de l'entreprise", "Assistance sur des documents internes non classifiés", "Décision du RSSI et homologation du système avant tout usage"],
        ["Santé et oncologie (Oncopole, CHU)", "Claude ou ChatGPT sur des publications et documents non nominatifs", "Synthèse de littérature, rédaction de protocoles et de supports", "Données de patients identifiantes réservées à un hébergeur certifié HDS, avis du délégué à la protection des données"],
        ["ESN et éditeurs de logiciels de Labège", "Codex, inclus dans les sièges ChatGPT Business, ou Claude Code, inclus dans Claude Team", "Revue de code, tests, documentation technique", "Secrets et clés d'API hors des dépôts partagés"],
        ["Enseignement supérieur et recherche", "Gemini ou Copilot, selon la suite de l'établissement", "Supports de cours, synthèses bibliographiques, courriers administratifs", "Notes et dossiers des étudiants hors des conversations"],
        ["PME de la chaîne d'approvisionnement", "Vibe (Mistral AI), hébergé par défaut dans l'Union européenne", "Devis, réponses aux réclamations, procédures internes", "Plans et spécifications du donneur d'ordres soumis à son accord"],
      ],
    },
    cas: {
      h3: "Cas pratique : bâtir l'état de l'art d'un dossier de financement en oncologie",
      contexte: "Prenons une cheffe de projet d'une biotech installée sur le campus de l'Oncopole. Elle prépare un dossier de financement et doit résumer l'état de l'art sur une cible thérapeutique à partir de quinze articles publiés, téléchargés en PDF. Aucun de ces documents ne contient de donnée de patient.",
      etapes: [
        "Vérifier avec le délégué à la protection des données que les documents sont publics et ne contiennent aucune donnée personnelle de santé.",
        "Déposer les quinze articles et la trame du dossier dans un projet de l'outil retenu par l'entreprise, Claude ou ChatGPT.",
        "Lancer le prompt ci-dessous et relire le tableau des études en ouvrant chaque article cité.",
        "Demander une seconde passe ciblée sur les résultats contradictoires entre études.",
        "Rédiger soi-même la conclusion scientifique, puis faire relire la synthèse par un chercheur de l'équipe.",
      ],
      prompt: "Je prépare la partie « état de l'art » d'un dossier de financement. Le projet contient quinze articles scientifiques publiés et la trame du dossier.\n\nTâche 1 : construis un tableau des études, une ligne par article : auteurs, année, revue, type d'étude, modèle utilisé, effectif, résultat principal, limite signalée par les auteurs. Cite la page de chaque information.\n\nTâche 2 : rédige une synthèse de 800 mots qui regroupe les résultats par question scientifique, en distinguant ce que plusieurs études établissent et ce qui repose sur une seule.\n\nTâche 3 : liste les contradictions entre articles et les questions que la littérature fournie laisse ouvertes.\n\nRègles : n'utilise que les articles fournis. N'invente aucune référence, aucun chiffre, aucun nom d'auteur. Si une information est absente, écris « non précisé dans l'article ». Écris en français et garde le terme anglais entre parenthèses à la première apparition de chaque notion technique.",
      resultat: "Vous obtenez un tableau sourcé des quinze études, une synthèse organisée par question et la liste des zones d'incertitude, à reprendre dans le dossier. La conclusion scientifique reste celle de l'équipe. Ouvrez au moins trois articles pour vérifier les pages citées : une référence inventée dans un dossier de financement coûte plus cher que le temps gagné.",
    },
    pieges: [
      { titre: "Programmer la session dans une zone à accès réglementé", texte: "L'accès à une ZRR dépend d'une autorisation du ministre de tutelle. Une salle hors zone et des documents préparés à l'avance évitent d'annuler la journée." },
      { titre: "Déployer Copilot sur un SharePoint mal étiqueté", texte: "Copilot retrouve tout ce que l'utilisateur peut ouvrir. Si des dossiers de programme sont partagés trop largement, l'assistant les fait remonter ; l'étiquetage et les droits se revoient avant la formation." },
      { titre: "Proposer le même outil à l'Oncopole et au bureau d'études", texte: "Les données de santé et les données techniques obéissent à des règles différentes. La formation se construit filière par filière, avec le délégué à la protection des données d'un côté et le RSSI de l'autre." },
      { titre: "Confier la veille scientifique à l'assistant sans relire les sources", texte: "Un modèle de langage peut attribuer un résultat au mauvais article. Chaque citation d'une synthèse destinée à un financeur se vérifie dans le PDF d'origine." },
      { titre: "Mélanger financements OPCO et ANFH dans un même groupe", texte: "Un groupe qui réunit des agents du CHU et des salariés d'une clinique partenaire relève de deux financeurs. Deux conventions, ou deux sessions, simplifient la prise en charge." },
    ],
  },
  faq: [
    { q: "Quels outils d'IA conviennent aux filières toulousaines, de l'aéronautique à la santé ?", a: "Tout dépend du système d'information et du niveau de protection. Un bureau d'études aéronautique sous Microsoft 365 commence par Copilot, une fois l'étiquetage Purview vérifié. Un acteur du spatial ou de la défense étudie avec son RSSI des modèles Mistral AI installés sur ses serveurs. Les biotechs de l'Oncopole utilisent Claude ou ChatGPT sur des documents dépourvus de données de patients. Les formations de Masteria couvrent Mistral AI et son assistant Vibe, ChatGPT, Claude, Gemini et Microsoft Copilot." },
    { q: "Quels métiers peuvent être formés à l'IA par Masteria à Toulouse ?", a: "Le catalogue de Masteria compte plus de 100 programmes répartis sur 24 métiers, de la qualité aux achats en passant par la gestion de projet, l'informatique, les ressources humaines et le juridique. À Toulouse, ils servent les ingénieurs documentation et qualité de Blagnac et de Colomiers, les développeurs des ESN de Labège, les chefs de projet des biotechs de l'Oncopole et les équipes administratives des laboratoires universitaires." },
    { q: "Quel est le prix d'une formation IA en intra-entreprise à Toulouse ?", a: "Pour un groupe de douze ingénieurs, la journée intra revient à 1 980 € HT, soit 165 € HT par participant. Un dirigeant de PME de la chaîne d'approvisionnement peut préférer l'accompagnement individuel, au même tarif journalier de 1 980 € HT. Le devis ajoute, le cas échéant, les conditions de déplacement jusqu'à Toulouse." },
    { q: "Quel financement pour une formation IA à Toulouse : OPCO 2i, Atlas ou ANFH ?", a: "OPCO 2i finance les entreprises de la métallurgie, dont la construction aéronautique, et Atlas celles de l'ingénierie, du conseil et du numérique ; le CHU de Toulouse, établissement public, passe par l'ANFH et sa délégation Midi-Pyrénées. Masteria est certifié Qualiopi et fournit programme et convention. Le montant pris en charge dépend des fonds dont dispose l'entreprise auprès de son OPCO, et la demande part avant la session." },
    { q: "Sous quels formats suivre une formation IA de Masteria à Toulouse ?", a: "Quatre formats sont possibles : une journée intra sur votre site, avec douze participants au plus ; un accompagnement individuel ; le Sprint IA, trois heures de sensibilisation pour un grand groupe, par exemple tout un plateau d'ingénierie, sur devis ; la classe virtuelle pour des équipes réparties entre Toulouse, d'autres sites d'Occitanie et l'étranger." },
    { q: "Faut-il des compétences techniques pour suivre une formation IA à Toulouse ?", a: "Non, aucun prérequis technique n'est demandé. La journée part des documents du poste : une procédure, un compte rendu de revue, un devis, un courrier. Dans une métropole où un emploi sur trois est occupé par un cadre, les groupes mêlent souvent experts et débutants ; le formateur adapte les exercices au niveau de chacun, et un débutant repart avec des usages applicables dans la semaine." },
    { q: "Combien de temps faut-il pour organiser une formation IA à Toulouse ?", a: "Avec un financement OPCO, prévoyez trois à quatre semaines entre le premier contact et la formation ; Masteria répond par un devis et un programme en 24 h ouvrées. Une session sur un site protégé ajoute une contrainte propre à l'établissement : choisir une salle hors zone à régime restrictif évite d'attendre une autorisation d'accès." },
    { q: "Qui sont les formateurs IA de Masteria qui interviennent à Toulouse ?", a: "La session est animée par Mathias Nizan, qui a créé Masteria en 2022, ou par l'un des formateurs indépendants expérimentés avec lesquels il travaille. Les bureaux de Masteria sont à Lyon, 17 rue d'Algérie ; pour Toulouse et le reste de l'Occitanie, le devis nomme le formateur et précise son déplacement." },
    { q: "Peut-on organiser une formation IA dans un site protégé de l'aéronautique toulousaine ?", a: "Oui, en respectant ses règles d'accès. Dans un établissement qui applique la PPST, l'entrée en zone à régime restrictif dépend d'une autorisation du ministre de tutelle. Nous privilégions une salle hors zone, des comptes de démonstration et des exercices validés par l'entreprise, pour que la session ne dépende d'aucune autorisation individuelle." },
  ],
  sources: [
    { name: "Insee : dossier complet Toulouse Métropole (recensement 2023, paru le 27/08/2026)", url: "https://www.insee.fr/fr/statistiques/2011101?geo=EPCI-243100518" },
    { name: "Insee Analyses Occitanie n° 145 : filière aérospatiale du Grand Sud-Ouest (décembre 2023)", url: "https://www.insee.fr/fr/statistiques/7733506" },
    { name: "Insee Flash Occitanie n° 157 : filière aéronautique et spatiale en 2025 (septembre 2026)", url: "https://www.insee.fr/fr/statistiques/9031891" },
    { name: "ANSSI : protection du potentiel scientifique et technique de la Nation (PPST)", url: "https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/protection-information-sensible-diffusion-restreinte/protection-du-potentiel-scientifique-et-technique-de-la-nation-ppst/" },
    { name: "Microsoft Learn : Data, Privacy, and Security for Microsoft Copilot", url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy" },
    { name: "Google Workspace : guide sur la confidentialité de l'IA générative", url: "https://knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub?hl=fr" },
    { name: "Mistral Help Center : Where do you store my data or my Organization's data?", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
    { name: "ANITI : les chaires du cluster IA", url: "https://aniti.univ-toulouse.fr/en/les-chaires-ia-cluster-aniti/" },
    { name: "IRIT : Institut de recherche en informatique de Toulouse", url: "https://www.irit.fr/" },
    { name: "ANFH : organisme collecteur de la fonction publique hospitalière", url: "https://www.anfh.fr/" },
  ],
}
