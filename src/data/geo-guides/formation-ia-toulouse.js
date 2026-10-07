// Contenu propre à /formation-ia-toulouse (guide terrain). Rendu par GeoIAGenericPage.
// Économie : Insee, dossier complet Toulouse Métropole (RP 2023, paru le 27/08/2026), Insee Analyses Occitanie n° 145 et Insee Flash Occitanie n° 157 (septembre 2026). Consultés le 03/10/2026.
// Outils : learn.microsoft.com (Copilot), aide Google Workspace (confidentialité de l'IA générative), help.mistral.ai, vérifiés le 03/10/2026. PPST et ZRR : cyber.gouv.fr. Recherche : aniti.univ-toulouse.fr, irit.fr, irt-saintexupery.com.
// Page propre du 07/10/2026 : faits d'outils de la fiche FAITS-OUTILS du 07/10 (Microsoft Copilot, Codex et Claude Code, Vibe, GPTs retirés le 11/12/2026).
export default {
  slug: 'formation-ia-toulouse',
  pagePropre: true,
  dateModified: '2026-10-07',
  metaDesc: "Formation IA Toulouse : quel outil pour l'aéronautique, le spatial, la santé ou le numérique, sessions sur sites protégés, OPCO 2i, Atlas ou ANFH.",
  intro: "Toulouse Métropole a gagné plus de 70 000 habitants en six ans, et un emploi sur trois y est occupé par un cadre. Ingénieurs, chercheurs, techniciens et fonctions support n'utilisent pas l'IA de la même façon, et une partie d'entre eux travaille dans des zones dont l'accès se décide au ministère. Le cabinet lyonnais Masteria bâtit chaque session à partir de ces contraintes : l'outil retenu par votre DSI, des documents autorisés, une salle accessible au formateur, à Toulouse même ou en classe virtuelle.",
  resume: "Masteria forme les ingénieurs, les chercheurs et les fonctions support de Toulouse Métropole, et choisit l'outil avec la sécurité informatique : Microsoft Copilot (anciennement Microsoft 365 Copilot) quand les fichiers Microsoft 365 sont bien étiquetés, des modèles Mistral AI installés en interne pour le spatial et la défense, Claude, ChatGPT ou Gemini ailleurs. Chaque journée coûte 1 980 € HT, que la salle compte douze ingénieurs ou qu'un seul dirigeant soit formé ; OPCO 2i, Atlas ou l'ANFH en assure le financement selon l'employeur, et le devis précise le voyage depuis Lyon.",
  programme: {
    titre: "À Toulouse, la journée apprend d'abord à vérifier ce que l'outil produit",
    intro: "Dans une métropole où un emploi sur trois revient à un cadre, les participants maîtrisent la technique ; ce qui change, c'est la vérification. Le cadrage fixe avec le RSSI ou le délégué à la protection des données les documents autorisés, puis la journée travaille ceux de l'équipe : exigence à retrouver, revue de projet, revue de code, état de l'art, devis.",
    items: [
      "Faire le point avec le RSSI sur l'étiquetage Microsoft Purview : Copilot respecte les droits d'usage d'un fichier chiffré, et ce qui échappe à l'utilisateur échappe aussi à l'assistant.",
      "Retrouver une exigence dans la documentation interne et préparer une revue de projet, en citant pour chaque point le document et la section d'origine.",
      "Relire et tester du code avec Codex, compris dans les sièges ChatGPT Business, ou avec Claude Code, sans jamais laisser une clé d'API dans le dépôt partagé.",
      "Construire l'état de l'art d'un dossier de financement à partir d'articles publiés, chaque résultat rattaché à sa page, puis ouvrir trois articles pour contrôler les citations.",
      "Pour un acteur du spatial ou de la défense, mesurer ce qu'implique un modèle Mistral AI installé sur l'infrastructure de l'entreprise, et ce qui reste soumis à l'homologation du système.",
      "Dans une PME de la chaîne d'approvisionnement, rédiger un devis ou une réponse à réclamation avec Vibe, plans et spécifications du donneur d'ordres tenus à l'écart sans son accord.",
      "Écrire une procédure de revue ou de documentation sous forme de compétence (fichier SKILL.md), format partagé par les grands assistants, au lieu d'un GPT personnalisé dont OpenAI a programmé le retrait au 11 décembre 2026.",
    ],
  },
  formats: {
    titre: "Une salle hors zone protégée, des groupes mêlés, ou la classe virtuelle",
    paras: [
      "Les établissements qui appliquent la protection du potentiel scientifique et technique de la nation (PPST) délimitent des zones à régime restrictif, ou ZRR. L'ANSSI rappelle que tout accès à une ZRR dépend d'une autorisation du ministre de tutelle, demandée par l'établissement, et que l'accès informatique aux informations protégées suit la même règle. Pour une session à Blagnac, Colomiers ou Montaudran, le plus simple reste une salle hors zone, des comptes de démonstration et des documents préparés et autorisés à l'avance.",
      "Chaque groupe, plafonné à douze, suit une journée de sept heures ou deux jours (3 960 € HT) et gagne à mêler ingénieurs, qualité et achats pour que chacun découvre les usages des autres. Tout un plateau d'ingénierie peut d'abord suivre un Sprint IA de trois heures, sur devis. Les dirigeants de PME optent souvent pour une journée seuls avec le formateur, au prix d'une journée de groupe. La classe virtuelle relie Toulouse, Tarbes, Pamiers ou des sites à l'étranger.",
    ],
  },
  acces: {
    titre: "Depuis Lyon jusqu'à Blagnac, Labège et Montauban",
    paras: [
      "L'animation revient à Mathias Nizan ou à un formateur indépendant expérimenté qu'il mobilise. Venu de Lyon, il se rend à Blagnac, Colomiers, Labège, Balma, Ramonville et partout dans la métropole, et pousse jusqu'à Montauban ou Albi. Toulouse ne figure pas parmi les villes desservies sans frais : le devis chiffre le déplacement.",
    ],
  },
  financement: {
    titre: "OPCO 2i pour l'aéronautique, Atlas pour l'ingénierie, l'ANFH pour le CHU",
    paras: [
      "La métallurgie et la construction aéronautique relèvent d'OPCO 2i ; l'ingénierie, le conseil et le numérique, d'Atlas. Le CHU de Toulouse, établissement public de santé, s'adresse à l'ANFH, qui gère les fonds de formation des hôpitaux publics et compte une délégation Midi-Pyrénées ; les cliniques et laboratoires privés relèvent d'OPCO Santé ou de l'OPCO de leur branche. Un groupe qui réunit des agents du CHU et des salariés d'une clinique partenaire dépend donc de deux financeurs, et deux conventions simplifient la prise en charge.",
      "Notre certification Qualiopi rend la session finançable ; nous rédigeons programme et convention, l'entreprise les transmet à son opérateur en amont de la formation, et ses fonds disponibles fixent le montant. Comptez un mois environ, auquel s'ajoute pour un site protégé la réservation d'une salle hors zone. Le CPF ne finance pas ces journées.",
    ],
    liens: [{ label: 'Comprendre le financement de la formation IA', href: '/financement-formation-ia' }],
  },
  cta: {
    fin: {
      titre: "Une équipe toulousaine à former, sur site protégé ou non ?",
      texte: "Dites-nous l'outil autorisé par votre RSSI et la salle disponible : un programme adapté et un devis qui inclut le déplacement vous parviennent sous 24 h.",
    },
  },
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
          "Un bureau d'études qui classe ses documents avec des étiquettes de confidentialité Microsoft Purview part avec un atout. Microsoft documente que Copilot respecte les droits d'usage attachés à un fichier chiffré : un document hors de portée de l'utilisateur reste hors de portée de l'assistant. La formation commence donc par un point sur l'état de l'étiquetage avec le RSSI, responsable de la sécurité informatique. Dans une organisation sous Google Workspace, Google s'engage à ne pas faire examiner vos contenus par des réviseurs humains et à ne pas les utiliser pour entraîner des modèles hors de votre domaine sans autorisation.",
          "Chez Mistral AI, éditeur français, les données de Vibe et de l'API restent par défaut en Europe ; quelques fonctions les font transiter un temps chez des prestataires extérieurs à l'Union, et l'offre Enterprise permet d'en couper une partie pour toute l'organisation. Pour une biotech de l'Oncopole, ces nuances se lisent avec la personne chargée de la protection des données : aucune donnée de patient identifiante n'entre dans un assistant en l'absence d'hébergeur certifié pour les données de santé (HDS).",
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
      caption: "De Blagnac à l'Oncopole : l'outil que chaque activité toulousaine peut ouvrir, et à quelle condition",
      headers: ["Activité toulousaine", "Outil envisageable", "Travail confié", "Condition préalable"],
      rows: [
        ["Constructeurs et bureaux d'études aéronautiques", "Microsoft Copilot, sur le tenant Microsoft 365 de l'entreprise", "Retrouver une exigence dans la documentation interne, préparer une revue de projet", "Étiquetage Purview et droits de partage revus avant le déploiement"],
        ["Spatial et défense", "Modèles Mistral AI déployés sur l'infrastructure de l'entreprise", "Assistance sur des documents internes non classifiés", "Décision du RSSI et homologation du système avant tout usage"],
        ["Santé et oncologie (Oncopole, CHU)", "Claude ou ChatGPT sur des publications et documents non nominatifs", "Synthèse de littérature, rédaction de protocoles et de supports", "Données de patients identifiantes réservées à un hébergeur certifié HDS, avis du délégué à la protection des données"],
        ["ESN et éditeurs de logiciels de Labège", "Codex avec ChatGPT Business, ou Claude Code avec Claude Team", "Revue de code, tests, documentation technique", "Secrets et clés d'API hors des dépôts partagés"],
        ["Enseignement supérieur et recherche", "Gemini ou Copilot, selon la suite de l'établissement", "Supports de cours, synthèses bibliographiques, courriers administratifs", "Notes et dossiers des étudiants hors des conversations"],
        ["PME de la chaîne d'approvisionnement", "Vibe, de Mistral AI, stocké en Europe par défaut", "Devis, réponses aux réclamations, procédures internes", "Plans et spécifications du donneur d'ordres soumis à son accord"],
      ],
    },
    cas: {
      h3: "Mise en situation : bâtir l'état de l'art d'un dossier de financement en oncologie",
      contexte: "Prenons une cheffe de projet d'une biotech installée sur le campus de l'Oncopole. Elle prépare un dossier de financement et doit résumer l'état de l'art sur une cible thérapeutique à partir de quinze articles publiés, téléchargés en PDF. Aucun de ces documents ne contient de donnée de patient.",
      etapes: [
        "Vérifier avec le délégué à la protection des données que les documents sont publics et ne contiennent aucune donnée personnelle de santé.",
        "Déposer les quinze articles et la trame du dossier dans un projet de l'outil retenu par l'entreprise, Claude ou ChatGPT.",
        "Soumettre la consigne ci-dessous, puis relire le tableau des études, chaque article cité ouvert à côté.",
        "Demander une seconde passe ciblée sur les résultats contradictoires entre études.",
        "Rédiger soi-même la conclusion scientifique, puis faire relire la synthèse par un chercheur de l'équipe.",
      ],
      prompt: "Je prépare la partie « état de l'art » d'un dossier de financement. Le projet contient quinze articles scientifiques publiés et la trame du dossier.\n\nTâche 1 : construis un tableau des études, une ligne par article : auteurs, année, revue, type d'étude, modèle utilisé, effectif, résultat principal, limite signalée par les auteurs. Cite la page de chaque information.\n\nTâche 2 : rédige une synthèse de 800 mots qui regroupe les résultats par question scientifique, en distinguant ce que plusieurs études établissent et ce qui repose sur une seule.\n\nTâche 3 : liste les contradictions entre articles et les questions que la littérature fournie laisse ouvertes.\n\nRègles : n'utilise que les articles fournis. N'invente aucune référence, aucun chiffre, aucun nom d'auteur. Si une information est absente, écris « non précisé dans l'article ». Écris en français et garde le terme anglais entre parenthèses à la première apparition de chaque notion technique.",
      resultat: "Un tableau sourcé des quinze études, une synthèse organisée par question et la liste des zones d'incertitude, à reprendre dans le dossier. La conclusion scientifique reste celle de l'équipe. Ouvrez au moins trois articles pour vérifier les pages citées : une référence inventée dans un dossier de financement coûte plus cher que le temps gagné.",
    },
    pieges: [
      { titre: "Programmer la session dans une zone à accès réglementé", texte: "L'accès à une ZRR dépend d'une autorisation du ministre de tutelle. Une salle hors zone et des documents préparés à l'avance évitent d'annuler la journée." },
      { titre: "Déployer Copilot sur un SharePoint mal étiqueté", texte: "Copilot retrouve tout ce que l'utilisateur peut ouvrir. Si des dossiers de programme sont partagés trop largement, l'assistant les fait remonter ; l'étiquetage et les droits se revoient avant la formation." },
      { titre: "Proposer le même outil à l'Oncopole et au bureau d'études", texte: "Les données de santé et les données techniques obéissent à des règles différentes. La formation se construit filière par filière, avec le référent données personnelles d'un côté et le RSSI de l'autre." },
      { titre: "Confier la veille scientifique à l'assistant sans relire les sources", texte: "Un modèle de langage peut attribuer un résultat au mauvais article. Chaque citation d'une synthèse destinée à un financeur se vérifie dans le PDF d'origine." },
      { titre: "Ignorer l'étiquetage avant de lancer Copilot", texte: "Un fichier non étiqueté n'est protégé que par ses droits de partage. Faites le tour des bibliothèques sensibles avec le RSSI avant d'ouvrir les licences, sinon l'assistant fait remonter ce que personne n'aurait dû lire." },
    ],
  },
  faq: [
    { q: "Aéronautique, spatial, santé : quel assistant d'IA pour une équipe toulousaine ?", a: "Le système d'information et le niveau de protection décident. Un bureau d'études aéronautique sous Microsoft 365 commence par Copilot, une fois l'étiquetage Purview vérifié. Un acteur du spatial ou de la défense étudie avec son RSSI des modèles Mistral AI installés sur ses serveurs. Les biotechs de l'Oncopole utilisent Claude ou ChatGPT sur des documents dépourvus de données de patients. Nos programmes couvrent ces outils, Gemini et Vibe compris." },
    { q: "Quels métiers toulousains forme-t-on à l'IA ?", a: "La qualité, les achats, la gestion de projet, l'informatique, les ressources humaines ou le juridique, parmi plus d'une centaine de programmes. À Toulouse, ils servent les ingénieurs documentation et qualité de Blagnac et de Colomiers, les développeurs des ESN de Labège, les chefs de projet des biotechs de l'Oncopole et les équipes administratives des laboratoires universitaires." },
    { q: "Combien coûte la formation d'un plateau d'ingénieurs toulousains ?", a: "1 980 € HT la journée pour douze ingénieurs, soit 165 € HT chacun. Le patron d'une PME sous-traitante, formé en tête-à-tête, règle le même montant. Le devis y ajoute le voyage jusqu'à Toulouse." },
    { q: "OPCO 2i, Atlas ou ANFH : qui paie la formation à Toulouse ?", a: "OPCO 2i quand l'entreprise relève de la métallurgie, aéronautique comprise, Atlas pour les sociétés d'ingénierie, de conseil et de numérique ; le CHU, hôpital public, passe par l'ANFH et sa délégation Midi-Pyrénées. Notre certification Qualiopi rend la demande recevable, et la somme accordée dépend des fonds de l'entreprise ; le dossier part avant la session." },
    { q: "Sur site, seul ou à distance : comment se former à Toulouse ?", a: "Sur votre site, en groupe de douze au plus ; seul, pour un dirigeant ; en Sprint IA, pour sensibiliser tout un plateau d'ingénierie en trois heures ; à distance, pour des équipes partagées entre Toulouse, l'Occitanie et l'étranger." },
    { q: "Un technicien ou une assistante toulousaine sans expérience de l'IA peut-il suivre la journée ?", a: "Oui, sans prérequis. La journée part des documents du poste : une procédure, un compte rendu de revue, un devis, un courrier. Dans une métropole où les cadres tiennent un tiers des postes, les groupes mêlent souvent experts et débutants ; le formateur adapte les exercices au niveau de chacun, et un débutant repart avec des usages applicables dans la semaine." },
    { q: "Quel délai pour organiser une session à Toulouse ?", a: "Un mois environ si l'OPCO intervient ; programme et devis, eux, arrivent en une journée ouvrée. Une session sur un site protégé ajoute une contrainte propre à l'établissement : choisir une salle hors zone à régime restrictif évite d'attendre une autorisation d'accès." },
    { q: "Qui vient animer la session à Toulouse ?", a: "Le fondateur de Masteria ou un formateur indépendant de son réseau ; pour Toulouse et le reste de l'Occitanie, le devis le nomme et précise son voyage depuis Lyon." },
    { q: "Peut-on organiser une formation IA dans un site protégé de l'aéronautique toulousaine ?", a: "Oui, en respectant ses règles d'accès. Dans un établissement qui applique la PPST, l'entrée en zone à régime restrictif dépend d'une autorisation du ministre de tutelle. Nous privilégions une salle hors zone, des comptes de démonstration et des exercices validés par l'entreprise, pour que la session ne dépende d'aucune autorisation individuelle." },
  ],
  sources: [
    { name: "Recensement 2023 de Toulouse Métropole : dossier complet de l'Insee", url: "https://www.insee.fr/fr/statistiques/2011101?geo=EPCI-243100518" },
    { name: "Insee Analyses Occitanie n° 145 : filière aérospatiale du Grand Sud-Ouest (décembre 2023)", url: "https://www.insee.fr/fr/statistiques/7733506" },
    { name: "L'aéronautique et le spatial d'Occitanie en 2025, Insee Flash n° 157 (septembre 2026)", url: "https://www.insee.fr/fr/statistiques/9031891" },
    { name: "ANSSI : protection du potentiel scientifique et technique de la Nation (PPST)", url: "https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/protection-information-sensible-diffusion-restreinte/protection-du-potentiel-scientifique-et-technique-de-la-nation-ppst/" },
    { name: "Copilot et la protection des fichiers étiquetés, documentation Microsoft", url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy" },
    { name: "Google Workspace : guide sur la confidentialité de l'IA générative", url: "https://knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub?hl=fr" },
    { name: "Mistral AI : emplacement des données d'une organisation", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
    { name: "ANITI : les chaires du cluster IA", url: "https://aniti.univ-toulouse.fr/en/les-chaires-ia-cluster-aniti/" },
    { name: "IRIT : Institut de recherche en informatique de Toulouse", url: "https://www.irit.fr/" },
    { name: "L'ANFH et la formation des agents hospitaliers publics", url: "https://www.anfh.fr/" },
  ],
}
