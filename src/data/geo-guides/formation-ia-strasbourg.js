// Contenu propre à /formation-ia-strasbourg (guide terrain). Rendu par GeoIAGenericPage.
// Chiffres : Insee (RP2023 et démographie des entreprises, dossiers complets Strasbourg et Eurométropole), Adira (chiffres clés 2025), Université de Strasbourg, ICube, consultés le 03/10/2026.
// Outils : support.microsoft.com, support.claude.com, help.openai.com et help.mistral.ai consultés le 03/10/2026 ; OPCO : Centre Inffo et anfh.fr ; Conseil de l'Europe : coe.int.
// Page propre du 07/10/2026 : faits d'outils de la fiche FAITS-OUTILS du 07/10 ; AI Act : article 4 applicable depuis le 2 février 2025.
export default {
  slug: 'formation-ia-strasbourg',
  pagePropre: true,
  dateModified: '2026-10-07',
  metaDesc: "Formation IA Strasbourg : banque, industrie, pharmacie, institutions européennes, un outil par filière, sessions en Alsace, OPCO par branche. Qualiopi.",
  intro: "L'Eurométropole de Strasbourg réunit des banques et des assureurs, des sites industriels et pharmaceutiques, deux grandes organisations européennes et un bassin d'emploi ouvert sur l'Allemagne. Chacun de ces mondes a ses outils, sa langue de travail et ses règles de confidentialité. Le cabinet lyonnais Masteria bâtit ses sessions alsaciennes sur l'assistant déjà en place chez vous et sur vos propres dossiers, en salle ou à distance.",
  resume: "Masteria forme les équipes de l'Eurométropole et de l'Alsace, des banques du centre aux laboratoires pharmaceutiques et aux prestataires des institutions européennes, sur l'assistant validé par leur informatique, qu'il s'agisse de Microsoft Copilot (anciennement Microsoft 365 Copilot), de Claude, de ChatGPT, de Gemini ou de Vibe. Une journée de formation vaut 1 980 € HT, pour une douzaine de collègues ou pour un seul expert. La prise en charge revient à Atlas, à OPCO 2i ou à l'OPCO de votre branche, et le trajet du formateur depuis Lyon est chiffré au devis.",
  programme: {
    titre: "À Strasbourg, la journée commence par la règle d'usage, puis travaille en français et en allemand",
    intro: "Le cadrage confirme l'outil validé et les données autorisées, souvent avec la conformité dans une banque ou l'assurance qualité dans un laboratoire. Les exercices portent ensuite sur les écrits de l'équipe : fil de courriels client, procédure à comparer, offre bilingue pour un client allemand, synthèse de documents publics d'une institution.",
    items: [
      "Rédiger avec la conformité la règle d'usage d'une page que chaque participant gardera sous les yeux : tâches permises, données exclues, vérifications avant envoi, interlocuteur en cas de doute.",
      "Résumer un fil de courriels client dans Outlook avec Copilot, dont les citations numérotées renvoient au message d'origine, puis préparer le rendez-vous qui en découle.",
      "Comparer deux versions d'une procédure de fabrication ou d'un rapport d'audit avec Claude, sur des documents purgés de tout secret de fabrication et de tout numéro de lot.",
      "Écrire une offre en français et en allemand pour un client de l'autre rive, glossaire maison à l'appui, puis faire relire par un humain les prix, les délais et le droit applicable.",
      "Synthétiser des documents publiés au Journal officiel ou sur le site d'une institution européenne, sans jamais y mêler un document de travail couvert par un contrat.",
      "Distinguer la Convention-cadre du Conseil de l'Europe, qui engage les États, du règlement européen sur l'IA, qui s'impose aux entreprises et et dont l'obligation de maîtrise de l'IA (article 4) court depuis février 2025.",
      "Garder la trame d'une réponse client validée dans une compétence, fichier SKILL.md portable d'un outil à l'autre ; les GPTs personnalisés, eux, prennent fin le 11 décembre 2026.",
    ],
  },
  formats: {
    titre: "Sur votre site alsacien, en classe virtuelle, ou les deux pour un groupe réparti",
    paras: [
      "Nous formons sur votre site, de l'Eurométropole au Haut-Rhin, par groupes de douze au maximum ; sept heures suffisent aux usages courants, et une seconde journée porte le total à 3 960 € HT. Une entreprise partagée entre un siège strasbourgeois et des usines plus au sud peut réunir tout le monde à distance sur un même cas, puis tenir un atelier sur site pour les documents propres à chaque usine. Pour sensibiliser tout le personnel d'un siège bancaire, un Sprint IA d'une demi-journée se chiffre au cas par cas.",
      "Un dirigeant, un associé de cabinet ou un expert qui manie des dossiers confidentiels opte pour une journée individuelle, au même tarif. Les équipes de Kehl ou d'Offenbourg peuvent rejoindre une session organisée pour une entité française, sur place ou à distance, dès lors qu'elles utilisent le même outil ; elles s'exercent alors sur leurs propres documents allemands.",
    ],
  },
  acces: {
    titre: "Depuis Lyon jusqu'à l'Eurométropole, Colmar et Mulhouse",
    paras: [
      "Mathias Nizan, ou une formatrice, un formateur qu'il a retenu, fait le voyage depuis Lyon. Il intervient à Strasbourg, Schiltigheim, Illkirch-Graffenstaden, Entzheim et dans toute l'Eurométropole, ainsi qu'à Colmar, Mulhouse ou Haguenau. Strasbourg ne figure pas parmi les villes où nous venons sans frais : le devis chiffre ce voyage, que la classe virtuelle rend inutile.",
    ],
  },
  financement: {
    titre: "Atlas pour la banque, OPCO 2i pour la pharmacie et la chimie, l'ANFH pour les hôpitaux",
    paras: [
      "Le financement passe par l'OPCO de la branche. Atlas suit les banquiers, les assureurs, les consultants et les ingénieurs ; OPCO 2i, l'industrie chimique, la pharmacie et la métallurgie ; OCAPIAT, l'agroalimentaire et la brasserie ; Akto, les hôtels, cafés et restaurants ; OPCO Santé, les cliniques privées et le médico-social. Les Hôpitaux universitaires de Strasbourg, établissement public, relèvent de l'ANFH.",
      "Organisme certifié Qualiopi, Masteria fournit programme et convention ; l'entreprise les adresse à son opérateur avant la session, et celui-ci statue selon ses règles et ses fonds. Comptez trois à quatre semaines, plus le temps de faire valider l'outil par la conformité dans une banque ou un laboratoire. Deux employeurs sortent de ce schéma : les organisations internationales, qui achètent leurs formations selon leurs propres règles, et les filiales de droit allemand, qui paient sur leur budget ; pour elles, le devis est établi hors taxes et précise la TVA.",
    ],
    liens: [{ label: 'Financer une formation IA en entreprise', href: '/financement-formation-ia' }],
  },
  cta: {
    fin: {
      titre: "Une banque, un laboratoire ou une PME alsacienne à former ?",
      texte: "Envoyez-nous la règle d'usage existante, ou dites-nous qu'elle reste à écrire : programme et devis, trajet compris, vous parviennent sous 24 h.",
    },
  },
  guide: {
    kicker: "Guide terrain Strasbourg",
    h2: "L'IA à Strasbourg : une économie de cadres et de services, des règles de confidentialité à poser filière par filière",
    lead: "Strasbourg offre 178 822 emplois pour 120 144 actifs occupés qui y résident, soit près de 149 emplois pour 100 actifs, selon le recensement 2023 de l'Insee. Dans l'Eurométropole, les cadres et professions intellectuelles supérieures occupent 25,8 % des emplois. Ces postes passent leurs journées sur des notes, des dossiers et des courriers, où un assistant d'IA fait gagner du temps. Ils relèvent aussi de secteurs aux règles strictes : banque, assurance, pharmacie, organisations internationales. Une formation utile à Strasbourg commence par une question simple : quel outil la direction informatique a-t-elle validé, et quelles données peuvent y entrer ?",
    sections: [
      {
        h3: "Une métropole tertiaire où près d'un emploi sur trois est occupé par un actif venu de l'extérieur",
        paras: [
          "L'Eurométropole compte 522 596 habitants et 272 783 emplois, selon le recensement de 2023 publié par l'Insee. Les services marchands en fournissent 54,7 %, le secteur public au sens large 31,8 %, et l'industrie 8,2 %, soit 22 393 postes. En 2022, 82 328 personnes qui habitent hors de l'Eurométropole venaient y travailler, selon l'Agence de développement d'Alsace (Adira), pour 269 345 emplois localisés sur le territoire, soit presque le tiers.",
          "Le secteur privé concurrentiel rassemble 17 406 établissements et 203 045 salariés à la fin de 2024, dont 171 885 dans le tertiaire, 19 671 dans l'industrie et 11 489 dans la construction, selon la même agence. L'Insee dénombre 54 215 établissements économiquement actifs en 2024, dont 2 950 dans la finance et l'assurance, soit 5,4 % du total, et 2 584 dans l'information et la communication.",
          "Les emplois qualifiés gagnent du terrain. Les cadres représentaient 21,5 % des emplois de l'Eurométropole en 2012 et 25,8 % en 2023, pendant que la part des employés reculait de 27,6 % à 25,0 %. Les postes qui progressent sont ceux qui rédigent, analysent et décident, et ce sont eux que l'on forme d'abord à l'IA générative. Les ouvriers, 15,2 % des emplois, restent concernés : dans l'industrie, l'IA touche d'abord aux consignes et aux procédures.",
        ],
      },
      {
        h3: "Banque, pharmacie, institutions : chaque filière arrive avec ses règles",
        paras: [
          "Les 2 950 établissements de la finance et de l'assurance travaillent sous des obligations de confidentialité strictes, secret bancaire en tête, avec des outils choisis par la direction informatique de leur groupe. Une formation y porte sur l'assistant validé, par exemple intégré à Microsoft 365 : dans Outlook, Copilot résume un fil de courriels, avec des citations numérotées qui renvoient au message d'origine. La règle d'usage se rédige avant la session, avec la conformité : quelles données de clients peuvent entrer dans l'outil, et lesquelles jamais.",
          "La pharmacie a son repère strasbourgeois : la Direction européenne de la qualité du médicament, organe du Conseil de l'Europe, dont le bâtiment du quartier européen a été inauguré en 2007. Dans les laboratoires et chez les fabricants de dispositifs médicaux de la région, procédures, rapports d'audit et dossiers réglementaires circulent souvent en anglais. L'IA aide à les lire, à les comparer et à en tirer une synthèse, sur des documents sans donnée de patient ni secret de fabrication.",
          "Les institutions forment un troisième monde. Le Conseil de l'Europe siège à Strasbourg depuis 1949, et le Palais des droits de l'homme, inauguré en 1995, abrite la Cour européenne des droits de l'homme. Leurs agents relèvent des règles de leur institution. Les prestataires qui gravitent autour, traducteurs, consultants, agences d'événements, organisations non gouvernementales, travaillent souvent sur des documents publics, qu'un assistant d'IA aide à résumer et à comparer ; tout document non public relève du contrat qui les lie à l'institution.",
        ],
      },
      {
        h3: "Un écosystème de recherche qui relie l'imagerie, la santé et le numérique",
        paras: [
          "L'Université de Strasbourg accueille 56 000 étudiants, dont 13 000 internationaux, et compte 77 laboratoires pour l'année 2024-2025. Son laboratoire ICube, créé en 2013, réunit près de 750 membres en 17 équipes de recherche, à la jonction de l'informatique, de l'imagerie, de la robotique et de l'ingénierie. Strasbourg a accueilli du 27 septembre au 1er octobre 2026 la conférence internationale MICCAI, consacrée au calcul en imagerie médicale et aux interventions assistées par ordinateur.",
          "BioValley France, pôle de compétitivité santé du Grand Est, travaille quatre thématiques : médicaments et thérapies innovantes, technologies médicales, diagnostic, e-santé. Il relie la filière régionale à ses voisins allemands et suisses dans un cluster trinational. Pour une entreprise, ce réseau ouvre des événements, des partenariats de recherche et des appels à projets ; pour ses équipes, la formation fait passer ces avancées dans le travail de tous les jours.",
          "Strasbourg tient aussi une place à part dans le droit de l'IA. Le Conseil de l'Europe, qui y siège, a élaboré la Convention-cadre sur l'intelligence artificielle et les droits de l'homme, la démocratie et l'État de droit, premier instrument international juridiquement contraignant dans ce domaine, ouvert à la signature le 5 septembre 2024. Ce traité engage les États qui le ratifient, chacun choisissant comment l'appliquer au secteur privé ; dans l'Union, les entreprises suivent le règlement européen sur l'IA, l'AI Act.",
        ],
      },
    ],
    table: {
      caption: "Des banques du centre aux prestataires des institutions : l'assistant strasbourgeois et sa limite",
      headers: ["Secteur strasbourgeois", "Assistant validé", "Exercice type", "Limite"],
      rows: [
        ["Banque et assurance (2 950 établissements)", "Copilot dans Outlook quand l'entreprise travaille sous Microsoft 365", "Résumé d'un fil de courriels client, préparation d'un rendez-vous", "Secret bancaire : aucune donnée de client hors de l'outil validé"],
        ["Industrie chimique, pharmacie et dispositifs médicaux", "Claude Team, pour lire et comparer des procédures longues", "Comparaison de deux versions d'une procédure, synthèse d'un rapport d'audit", "Secrets de fabrication et données de lot hors de l'outil"],
        ["PME qui exportent vers l'Allemagne", "ChatGPT Business, pour la correspondance bilingue", "Offres et courriers en français et en allemand, avec glossaire", "Prix, délais et droit applicable relus par un humain"],
        ["Prestataires des institutions européennes", "Vibe, de Mistral AI, aux données stockées en Europe sauf choix contraire", "Synthèse de documents publics, préparation de réunions", "Clauses de confidentialité du contrat avec l'institution"],
        ["Collectivités et services publics", "L'assistant choisi par la DSI de la collectivité", "Réponses aux usagers, comptes rendus de séances publiques", "Données des usagers soumises à la politique interne"],
        ["Agroalimentaire", "Gemini dans Gmail sous Google Workspace, ou Copilot sous Microsoft 365", "Fiches produits bilingues, réponses aux distributeurs", "Allégations et mentions d'étiquetage vérifiées par la qualité"],
      ],
    },
    cas: {
      h3: "Mise en situation : écrire la règle d'usage de l'IA d'un service client bancaire avant la formation",
      contexte: "Prenons la responsable du service client d'un établissement bancaire de l'Eurométropole. Sa direction a validé Copilot dans Microsoft 365, et quinze conseillers suivront la formation en deux groupes. Avant la session, la conformité demande une règle d'usage d'une page, que chaque conseiller gardera sous les yeux. Le prompt fonctionne dans tout assistant validé par l'entreprise.",
      etapes: [
        "Réunir la politique de sécurité de l'information, la charte informatique et la liste des tâches confiées aux conseillers, sans aucune donnée de client.",
        "Soumettre la consigne ci-dessous à l'assistant validé, documents joints.",
        "Faire relire le projet par la conformité et par la personne chargée du RGPD dans l'établissement.",
        "Tester la règle sur cinq situations réelles du service, décrites sans nom de client.",
        "Diffuser la version validée avant la formation, qui s'appuiera sur ses exemples autorisés.",
      ],
      prompt: "Tu aides la responsable du service client d'une banque à rédiger la règle d'usage d'un assistant d'IA pour ses conseillers. Les documents joints contiennent notre politique de sécurité de l'information, notre charte informatique et la liste des tâches du service.\n\nRédige une règle d'usage d'une page, en français clair, en quatre parties :\n1. Ce que l'assistant peut faire pour un conseiller, avec cinq exemples tirés de la liste des tâches.\n2. Les données qui n'entrent jamais dans l'assistant, en reprenant les catégories de notre politique de sécurité.\n3. Les vérifications obligatoires avant d'utiliser un texte produit par l'assistant dans un courrier à un client.\n4. La conduite à tenir en cas de doute ou d'erreur, avec l'interlocuteur à prévenir.\n\nCite pour chaque interdiction l'article de la politique ou de la charte qui la fonde. N'ajoute aucune règle absente des documents ; si un point important n'y figure pas, signale-le à part comme question pour la conformité.\n\nTermine par trois cas limites, décrits en deux phrases chacun, avec la bonne réponse attendue.",
      resultat: "Une règle d'usage d'une page, rattachée article par article aux documents internes, et la liste des points que la conformité doit trancher. La formation part ensuite de cette règle : les exercices utilisent les exemples autorisés, et les cas limites deviennent des mises en situation. Le texte diffusé reste celui que la conformité a validé, mot pour mot.",
    },
    pieges: [
      { titre: "S'exercer sur un assistant que la DSI n'a pas autorisé", texte: "Dans une banque ou un laboratoire, un exercice réalisé sur un assistant non autorisé ne se reproduit pas au poste de travail. Le cadrage confirme l'outil, l'espace et les droits des participants avant la première session." },
      { titre: "Faire financer des salariés de Kehl par un OPCO français", texte: "Un groupe qui inscrit des salariés de sa filiale allemande dans une session prise en charge par l'OPCO de sa société française s'expose à un refus. Chaque entité règle la part de ses propres salariés." },
      { titre: "Confondre la Convention-cadre du Conseil de l'Europe et l'AI Act", texte: "La première est un traité qui engage les États qui la ratifient ; le second est un règlement de l'Union européenne, directement applicable aux organisations. Une entreprise strasbourgeoise suit d'abord le règlement." },
      { titre: "Mettre une donnée de lot ou de patient dans un assistant", texte: "Numéro de lot, résultat d'essai, dossier de patient : ces données relèvent des systèmes qualité et des systèmes d'information de santé de l'entreprise. Les exercices de la filière se font sur des documents publics ou anonymisés." },
      { titre: "Traiter un document de travail d'une institution comme une source ouverte", texte: "Un projet de rapport transmis par une institution européenne à un prestataire reste couvert par le contrat. Seuls les documents publiés, au Journal officiel ou sur le site de l'institution, servent d'exercice sans autorisation." },
    ],
  },
  faq: [
    { q: "Banque, laboratoire, PME exportatrice : quel assistant d'IA à Strasbourg ?", a: "La banque et l'assurance partent de l'outil validé par le groupe, Copilot dans Microsoft 365 par exemple. Une PME qui écrit en allemand toute la journée tire profit de ChatGPT Business et de ses instructions personnalisées. Un laboratoire ou un industriel qui lit des procédures longues gagne du temps avec Claude. Un prestataire des institutions qui tient à garder ses données en Europe regarde Vibe, de Mistral AI." },
    { q: "Quels postes de l'Eurométropole former en premier à l'IA générative ?", a: "Les cadres, qui tiennent 25,8 % des emplois de l'Eurométropole : chargés d'affaires bancaires, juristes, responsables qualité, chefs de projet, consultants. Viennent ensuite les fonctions commerciales et d'administration des ventes qui travaillent avec l'Allemagne, puis les équipes de communication et d'accueil des collectivités. Dans l'industrie, l'IA sert d'abord à rédiger et à mettre à jour les procédures." },
    { q: "Quel budget pour former une équipe strasbourgeoise à l'IA ?", a: "1 980 € HT la journée, avec un groupe intra de douze au plus ou une personne seule. Un Sprint IA pour tout un siège bancaire se chiffre à la demande. Les frais de route s'ajoutent, puisque seuls Lyon, Grenoble et Annecy en sont exemptés ; en classe virtuelle, ils disparaissent." },
    { q: "Qui finance une formation IA pour une banque, un industriel ou un laboratoire alsacien ?", a: "Atlas pour les établissements financiers et les cabinets de conseil ; OPCO 2i pour la chimie, la pharmacie et la métallurgie ; OCAPIAT pour l'agroalimentaire ; OPCO Santé pour les cliniques privées ; l'ANFH pour les hôpitaux publics. Notre certification Qualiopi rend la demande recevable ; votre service RH y joint nos programme et convention, l'opérateur la reçoit avant le premier jour et fixe le montant selon ses règles." },
    { q: "Du Sprint IA à la journée individuelle : quelles formules à Strasbourg ?", a: "En intra, douze salariés au plus d'une même entreprise travaillent sur leurs dossiers, sur place ou à distance. L'accompagnement individuel convient à un dirigeant, un associé de cabinet ou un expert qui travaille sur des dossiers confidentiels. Le Sprint IA, trois heures pour un grand effectif, ouvre le terrain avant les ateliers par métier. La classe virtuelle relie un siège strasbourgeois à ses sites du Haut-Rhin ou à une filiale installée sur l'autre rive." },
    { q: "Des agents ou des salariés strasbourgeois qui n'ont jamais ouvert ChatGPT ni Copilot peuvent-ils suivre la journée ?", a: "Oui. Dans une collectivité, un hôpital ou une PME industrielle, une partie des participants découvre l'outil ; la journée commence par la connexion à l'espace de l'entreprise, les règles d'usage et une première demande sur un document du poste. Les exercices montent ensuite en difficulté selon le groupe, et les équipes déjà à l'aise passent directement aux ateliers par métier." },
    { q: "Quel délai pour une session strasbourgeoise prise en charge par l'OPCO ?", a: "Prévoyez un mois environ, de trois à quatre semaines, avant la journée ; programme et devis, eux, partent en un jour ouvré. Pour une banque ou un laboratoire, ajoutez le temps de faire valider l'outil et la règle d'usage par la conformité. Une session dans le Haut-Rhin demande aussi de caler le déplacement du formateur depuis Lyon." },
    { q: "Qui forme les équipes alsaciennes ?", a: "Mathias Nizan ou un formateur indépendant retenu pour l'outil et le métier concernés ; le cabinet travaille depuis Lyon, et le devis fixe les conditions du voyage en Alsace. Une équipe partagée entre Strasbourg et Mulhouse peut suivre une seule session à distance, ce qui évite deux trajets." },
    { q: "Une filiale allemande ou une équipe de Kehl peut-elle suivre la même formation IA qu'une équipe strasbourgeoise ?", a: "Oui, sur place ou en classe virtuelle, si elle utilise le même outil. Les participants de Kehl travaillent leurs propres documents allemands pendant les exercices. Le financement, lui, diffère : la société française s'adresse à son OPCO, la filiale allemande paie sa part sur son budget, avec une facture hors taxes." },
  ],
  sources: [
    { name: "Recensement 2023 de la ville de Strasbourg, dossier complet Insee", url: "https://www.insee.fr/fr/statistiques/2011101?geo=COM-67482" },
    { name: "Recensement 2023 et établissements 2024 de l'Eurométropole de Strasbourg (Insee)", url: "https://www.insee.fr/fr/statistiques/2011101?geo=EPCI-246700488" },
    { name: "Adira : chiffres clés des intercommunalités d'Alsace, Strasbourg Eurométropole, édition 2025", url: "https://www.adira.com/wp-content/uploads/cc-ems-25-v2.pdf" },
    { name: "Université de Strasbourg : chiffres clés 2024-2025", url: "https://www.unistra.fr/universite/chiffres-cles" },
    { name: "ICube, UMR 7357 : présentation du laboratoire", url: "https://icube.unistra.fr/" },
    { name: "BioValley France : pôle de compétitivité santé du Grand Est", url: "https://www.biovalley-france.com/" },
    { name: "Centre d'information sur les institutions européennes : la vocation européenne de Strasbourg", url: "https://www.strasbourg-europe.eu/l-europe-a-strasbourg/" },
    { name: "Conseil de l'Europe : la Convention-cadre sur l'intelligence artificielle", url: "https://www.coe.int/fr/web/artificial-intelligence/la-convention-cadre-sur-l-intelligence-artificielle" },
    { name: "Qui finance quoi : les onze OPCO décrits par Centre Inffo", url: "https://www.centre-inffo.fr/site-droit-formation/presentation-des-11-operateurs-de-competences-opco" },
    { name: "Copilot dans Outlook : fiche d'aide Microsoft sur le résumé d'un fil de messages", url: "https://support.microsoft.com/fr-fr/outlook/copilot-pages/summarize-an-email-thread-with-copilot-in-outlook" },
  ],
}
