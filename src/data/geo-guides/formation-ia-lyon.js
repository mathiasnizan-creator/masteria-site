// Contenu propre à /formation-ia-lyon (guide terrain et blocs du mode page propre). Rendu par GeoIAGenericPage.
// Chiffres Insee (dossier complet Métropole de Lyon et France, août 2026 ; Insee Analyses n° 188 et n° 210), Mission Lyon Vallée de la chimie, Auvergne-Rhône-Alpes Entreprises, LIRIS, French Tech, OPCO 2i ; fonctions Copilot, Gemini et Mistral vérifiées sur learn.microsoft.com, knowledge.workspace.google.com et help.mistral.ai le 03/10/2026.
// Page propre du 07/10/2026 : faits d'outils repris de la fiche FAITS-OUTILS du 07/10 (GPTs retirés le 11/12/2026, compétences SKILL.md, Gemini Notebook, Vibe) ; étude de cas conseil-financier (src/data/etudes-de-cas.js).
export default {
  slug: 'formation-ia-lyon',
  pagePropre: true,
  dateModified: '2026-10-07',
  metaDesc: "Formation IA Lyon : quel outil pour la pharmacie, la chimie, la banque ou les sièges de la Part-Dieu, financement OPCO 2i ou Atlas, sessions chez vous.",
  intro: "Dans la métropole de Lyon, les cadres tiennent presque un poste sur trois, et leurs règles changent d'une filière à l'autre. Un laboratoire de Gerland, une usine de la Vallée de la chimie et une direction régionale de la Part-Dieu ne peuvent pas confier les mêmes documents à un assistant d'IA. Masteria, cabinet fondé à Lyon en 2022, choisit avec vous l'outil qui convient à votre filière, puis forme vos équipes dans vos locaux, sur leurs propres dossiers.",
  resume: "Masteria, cabinet d'intelligence artificielle installé rue d'Algérie depuis 2022, forme les équipes lyonnaises à ChatGPT, Microsoft Copilot (anciennement Microsoft 365 Copilot), Gemini, Claude et Vibe, l'outil étant retenu selon votre filière et ce que votre DSI autorise. Le tarif d'une journée, 1 980 € HT, reste identique pour une salle de douze et pour une seule personne. Masteria étant certifié Qualiopi, l'opérateur de compétences de votre branche peut la financer, dans la limite de ses critères et de votre enveloppe, et le formateur rejoint sans frais de trajet tout site de la métropole.",
  programme: {
    titre: "Une journée lyonnaise suit un document du poste, de la règle de filière au livrable relu",
    intro: "Le cadrage fixe l'outil et choisit avec vous deux ou trois documents que le groupe produit chaque semaine : un compte rendu de comité à la Part-Dieu, une réponse client sur une substance dans la Vallée de la chimie, une synthèse de littérature à Gerland. Toute la journée tourne autour d'eux.",
    items: [
      "Classer les écrits du service en quatre niveaux, public, interne, confidentiel et personnel, et noter ce que votre filière interdit de coller dans un assistant, des données de procédé d'un site chimique au secret bancaire.",
      "Prendre en main l'outil retenu : Microsoft Copilot pour une direction équipée de Microsoft 365, ChatGPT Business ou Enterprise, Gemini dans Google Workspace, Claude, ou Vibe, l'assistant de Mistral AI.",
      "Formuler une demande complète sur l'un des documents retenus, avec le rôle, le contexte, la tâche et la forme attendue, puis exiger la référence du passage source pour chaque affirmation.",
      "Réunir les pièces d'un dossier dans un espace ancré sur ses sources, projet ChatGPT ou Claude, bloc-notes Copilot, carnet Gemini Notebook (300 sources par carnet à partir de Business Standard au 7 octobre 2026) ou Bibliothèque de Vibe.",
      "Écrire une procédure récurrente sous forme de compétence (un fichier SKILL.md, format né chez Anthropic et repris en 2026 par OpenAI, Google, Microsoft et Mistral), plutôt que de bâtir un GPT personnalisé, voué au retrait à la mi-décembre 2026.",
      "Relire avant tout envoi : chiffres recalculés à la main, citations retrouvées dans le document d'origine, noms propres contrôlés, puis une règle écrite sur ce qui peut quitter l'entreprise sans relecture humaine.",
      "Choisir trois tâches du poste à outiller dans le mois qui suit, avec la personne qui valide le résultat et la date du premier point d'étape.",
    ],
  },
  formats: {
    titre: "Votre site, nos bureaux des Terreaux ou une classe virtuelle",
    paras: [
      "Pour un groupe, le formateur se déplace sur votre site, de Vaise à Saint-Priest, sans frais de trajet dans la métropole. Une journée de sept heures réunit douze personnes au plus, idéalement d'une même fonction, chacune sur son poste. Deux journées (3 960 € HT) laissent le temps de construire des compétences sur les procédures du service. Quand tout un site doit partir du même socle, un Sprint IA de trois heures, chiffré sur devis, précède les journées par métier.",
      "L'accompagnement individuel vise un dirigeant, un pharmacien responsable, un directeur juridique ou un expert qui veut travailler sur ses propres dossiers. Il se tient dans nos bureaux du 1er arrondissement ou en visioconférence, à la journée ou par demi-journées, au même tarif. Un collaborateur basé à Saint-Étienne ou à Clermont-Ferrand peut aussi rejoindre le groupe à distance, en classe virtuelle, sur les mêmes cas.",
    ],
  },
  proof: {
    kicker: 'Organisme vérifiable',
    h2: "Quatre éléments à contrôler avant de confier une session à un organisme lyonnais",
    intro: "Un organisme de formation se juge sur pièces. Chacune des cartes ci-dessous renvoie vers une source que vous pouvez consulter sans passer par ce site.",
    items: [
      {
        icon: 'MapPin',
        label: 'Bureaux',
        value: "17 rue d'Algérie, 69001 Lyon, dans le quartier des Terreaux, près de la station de métro Hôtel de Ville. Nous y recevons les cadrages et les séances individuelles ; les groupes sont formés chez eux.",
        links: [{ label: 'Voir la fiche Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Masteria&query_place_id=ChIJQy4tZWu-LkMR2Z9YXKI7SZE' }],
      },
      {
        icon: 'BadgeCheck',
        label: 'Certification Qualiopi',
        value: "Certificat 725311-1, émis par Certifopac pour la catégorie « actions de formation », en vigueur de fin janvier 2026 à fin janvier 2029. C'est la pièce que votre OPCO contrôle avant d'accorder sa prise en charge.",
        links: [{ label: 'Télécharger le certificat (PDF)', href: '/assets/qualiopi-certificat-masteria.pdf' }],
      },
      {
        icon: 'FileCheck',
        label: "Déclaration d'activité",
        value: "La préfecture d'Auvergne-Rhône-Alpes a enregistré notre déclaration d'activité sous le n° 84 69 23218 69 ; la base nationale publiée sur data.gouv.fr permet de la retrouver. Cet enregistrement ne vaut pas agrément de l'État.",
        links: [{ label: 'Liste publique des organismes de formation', href: 'https://www.data.gouv.fr/datasets/liste-publique-des-organismes-de-formation-l-6351-7-1-du-code-du-travail' }],
      },
      {
        icon: 'Newspaper',
        label: 'Fondateur et presse',
        value: "Mathias Nizan a créé Masteria à Lyon en 2022 et anime une partie des sessions de la métropole. Les Échos l'ont interrogé sur la façon de choisir l'IA qui convient à un métier ; adresse, itinéraire et avis figurent sur la fiche Google de l'entreprise.",
        links: [
          { label: "Lire l'article des Échos", href: 'https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741' },
          { label: 'Profil LinkedIn', href: 'https://www.linkedin.com/in/mathias-nizan/' },
        ],
      },
    ],
  },
  references: {
    titre: "Une mission menée en partie à Lyon : un cabinet qui répond aux appels d'offres publics",
    paras: [
      "Depuis plus de quarante ans, ce cabinet indépendant accompagne des acheteurs publics sur des sujets financiers, avec une vingtaine de consultants installés pour partie à Lyon, pour partie à Paris. Son enjeu : écrire plus vite des mémoires techniques qui restent gagnants. Au fil de quatre séances de travail de deux heures avec l'équipe, nous avons conçu quatre assistants, un pour chaque famille de marchés publics que traite le cabinet, alimentés par ses trames et par ses mémoires les plus appréciés des acheteurs.",
      "Avant de rédiger, l'assistant pose ses questions au consultant : ce client a-t-il déjà travaillé avec le cabinet, quelles références mettre en avant, quelle équipe présenter. Les consultants des deux villes ont ensuite suivi une journée commune sur des dossiers de consultation récents, et un guide écrit répartit entre eux l'entretien des assistants.",
    ],
    liens: [{ label: "Lire l'étude de cas du cabinet de conseil financier", href: '/etudes-de-cas-ia#conseil-financier' }],
  },
  acces: {
    titre: "Rue d'Algérie pour les rendez-vous, votre site pour les groupes",
    paras: [
      "Le bureau occupe un immeuble du 1er arrondissement, côté Terreaux ; la station Hôtel de Ville, sur les lignes de métro A et C, le dessert. Depuis la gare Part-Dieu, on les rejoint par le métro B, avec un changement à Charpennes pour la ligne A.",
      "Pour les sessions de groupe, nous allons chez vous, à Confluence, Gerland, Villeurbanne, Bron, Vénissieux ou Écully, sans frais de trajet dans la métropole. Grenoble et Annecy sont couverts aux mêmes conditions. Pour Saint-Étienne, Clermont-Ferrand, Chambéry ou Valence, le devis précise les conditions du déplacement.",
    ],
  },
  financement: {
    titre: "Votre convention collective désigne l'OPCO qui financera la session",
    paras: [
      "Un site de chimie, de pharmacie, de plasturgie ou de métallurgie de l'agglomération dépend en général d'OPCO 2i, l'opérateur interindustriel. Un cabinet de conseil, une entreprise de services numériques, une banque ou un assureur de la Part-Dieu dépend d'Atlas. Votre service RH vérifie la convention appliquée avant la demande, car c'est elle qui tranche. L'accord dépend ensuite des règles de l'opérateur et des fonds qu'il vous reste.",
      "Nous vous remettons le programme pas à pas et la convention à signer, puis votre service RH saisit l'opérateur, toujours avant la date de la session. Entre la signature du devis et le jour J, gardez trois à quatre semaines pour que l'accord arrive. Un dirigeant non salarié s'adresse au fonds d'assurance formation (FAF) de son activité. Le CPF ne s'applique pas : nos programmes ne sont pas des certifications enregistrées.",
    ],
    liens: [{ label: 'Comprendre les leviers de financement', href: '/financement-formation-ia' }],
  },
  cta: {
    fin: {
      titre: "Un service lyonnais à former d'ici la fin de l'année ?",
      texte: "Décrivez-nous l'équipe et les trois documents qu'elle produit le plus souvent : vous recevez sous 24 h le programme, l'outil que nous recommandons et le devis.",
    },
  },
  guide: {
    kicker: "Guide terrain Lyon",
    h2: "À Lyon, chaque filière fixe son outil d'IA et la liste de ce qui n'y entre pas",
    lead: "La métropole de Lyon compte 780 776 emplois en 2023, dont 31,7 % occupés par des cadres et professions intellectuelles supérieures, contre 20,9 % en France, selon le dossier complet de l'Insee publié en août 2026. La part était de 24,3 % en 2012. Ces postes produisent surtout de l'écrit : notes, dossiers, analyses, courriers, la matière première d'un assistant d'IA générative. Ils obéissent pourtant à des règles propres à chaque filière, des bonnes pratiques de fabrication (BPF) du médicament au secret bancaire. Une formation utile à Lyon commence par cette règle de filière ; le choix de l'outil en découle.",
    sections: [
      {
        h3: "La métropole vit de métiers qui produisent des dossiers",
        paras: [
          "L'industrie représente 10,5 % des emplois de la métropole, soit 81 617 postes en 2023, un point de moins que la moyenne française. Le poids lyonnais se lit dans les services : sur 177 352 établissements actifs en 2024, 47 335 se rangent dans les activités spécialisées, scientifiques, techniques et de soutien aux entreprises, soit 26,7 % contre 21,2 % en France. L'Insee range dans cette catégorie le conseil, le droit, la comptabilité, l'ingénierie, la recherche et les services aux entreprises. Les établissements du numérique et des médias sont 10 488, soit 5,9 % du total contre 4,1 % en France.",
          "Les grands employeurs disent la même diversité. Selon l'Insee, l'établissement de Sanofi Pasteur est le deuxième du secteur privé par ses effectifs dans la métropole, derrière Keolis et devant Renault Trucks. Un exploitant de transports, un producteur de vaccins et un constructeur de camions n'ont pas les mêmes contraintes, alors que leurs équipes de support, de qualité, de vente ou de maintenance écrivent toutes chaque jour. Un assistant d'IA déployé de la même façon dans les trois ne conviendrait à aucune d'entre elles.",
          "Le cadrage d'une formation lyonnaise part donc du poste. Un ingénieur d'études qui synthétise une norme publiée et un conseiller bancaire qui prépare un courrier client ne prennent pas le même risque en collant un document dans un assistant. Nous classons avec vous les documents de chaque service en quatre niveaux. Les exercices de la journée portent sur les niveaux public et interne ; le confidentiel et le personnel reçoivent des règles écrites, validées par votre direction des systèmes d'information (DSI) et par la personne qui tient le rôle de délégué à la protection des données.",
        ],
      },
      {
        h3: "La Part-Dieu et la Vallée de la chimie n'appellent pas la même organisation",
        paras: [
          "Le quartier de la Part-Dieu réunit 43 900 salariés dans un rayon de 700 mètres autour du centre commercial, selon une étude de l'Insee parue en mai 2026. Un sur cinq travaille dans l'administration publique, du fait de la Cité administrative d'État, et 11 % dans la finance et l'assurance ; 40 % sont cadres. Un tiers de ces salariés habitent hors de la métropole. Pour une direction installée dans le quartier, la session se cale sur un jour de présence au bureau, et la classe virtuelle accueille ceux qui viennent du reste du Rhône.",
          "Au sud, la Vallée de la chimie couvre 400 hectares et rassemble 500 entreprises pour 14 200 emplois, selon le rapport d'activité 2024 de sa mission, rattachée à la Métropole de Lyon. Les écrits y sont réglementaires et techniques : fiches de données de sécurité, réponses aux clients sur les substances, comptes rendus d'essais, veille. La formation se tient dans une salle de l'entreprise, avec des documents que le service réglementaire a validés pour l'exercice. Les formulations et les données de procédé restent en dehors de tout assistant grand public.",
        ],
      },
      {
        h3: "L'écosystème lyonnais de l'IA se vérifie sur des sources publiques",
        paras: [
          "Le LIRIS (laboratoire d'informatique en image et systèmes d'information) porte une part de la recherche lyonnaise en informatique. Cette unité mixte de recherche, numérotée 5205, est placée sous la tutelle du CNRS, de l'INSA Lyon, de l'université Claude Bernard Lyon 1, de l'université Lumière Lyon 2 et de l'École centrale de Lyon. Selon Auvergne-Rhône-Alpes Entreprises, Lyon 1 est la troisième université française pour les brevets déposés au classement INPI 2024, et le Rhône concentre plus d'un tiers des brevets de la région.",
          "Côté entreprises, la French Tech Saint-Étienne Lyon, Capitale French Tech labellisée jusqu'en 2028, compte plus de 660 adhérents, dont 583 startups. Le pôle de compétitivité Lyonbiopôle fédère l'innovation en santé de la région, et la Mission Lyon Vallée de la chimie accompagne la transformation des industriels du sud de l'agglomération. Ces réseaux prennent le relais quand un projet lyonnais réclame davantage qu'un assistant bien utilisé : un partenaire technique, un laboratoire ou un financement d'innovation.",
        ],
      },
    ],
    table: {
      caption: "Six filières lyonnaises, l'assistant qui leur convient et la précaution à prendre",
      headers: ["Filière", "Assistant conseillé", "Ce qu'on lui confie", "Précaution"],
      rows: [
        ["Pharmacie et vaccins (Gerland, Marcy-l'Étoile)", "ChatGPT Enterprise ou Claude Enterprise, déployé par la DSI", "Modules de formation pour la production, dossiers d'inspection, revues de littérature", "Projet d'annexe 22 des BPF : aucune IA générative dans une application critique"],
        ["Chimie (Vallée de la chimie)", "ChatGPT Business", "Réponses aux clients sur les substances, veille réglementaire", "Formulations hors de l'outil ; FDS (fiche de données de sécurité) rédigée par le service réglementaire"],
        ["Directions régionales et administrations (Part-Dieu)", "Microsoft Copilot, pour un parc déjà sous Microsoft 365", "Comptes rendus, notes de synthèse, courriels", "Copilot fait remonter tout ce que l'utilisateur a le droit de lire : les droits SharePoint se nettoient avant"],
        ["Banque et assurance", "Microsoft Copilot ou ChatGPT Enterprise", "Courriers aux clients, synthèses de dossiers, procédures internes", "Données clients et secret bancaire uniquement dans l'espace de l'entreprise"],
        ["Numérique et startups (French Tech)", "Gemini pour une équipe qui vit dans Google Workspace, Claude pour la documentation longue", "Documentation produit, support client, spécifications", "Gemini lit ce que l'utilisateur peut ouvrir : un dossier partagé trop largement l'est aussi pour l'IA"],
        ["PME industrielles attachées à un hébergement européen", "Vibe, l'assistant de Mistral AI", "Courriers, offres, comptes rendus de réunion", "Données conservées dans l'Union sauf choix contraire ; certaines fonctions passent par des sous-traitants hors UE"],
      ],
    },
    cas: {
      h3: "Mise en situation : dresser la carte des usages d'une entreprise lyonnaise avant la formation",
      contexte: "Prenons la responsable formation d'une entreprise de taille intermédiaire (ETI) de services installée à la Part-Dieu, avec un site de production dans l'est lyonnais. Elle doit choisir entre plusieurs journées intra et un Sprint IA pour 140 salariés, et ne sait pas encore quels services ont le plus à gagner. Elle dispose des fiches de poste et de l'organigramme, sans aucune donnée nominative.",
      etapes: [
        "Rassembler les fiches de poste des six services concernés et retirer les noms, les salaires et tout élément personnel.",
        "Faire lister par chaque manager les trois documents que son service produit le plus souvent.",
        "Ouvrir l'assistant que l'entreprise a déjà autorisé, joindre les fiches de poste et y coller la consigne ci-dessous.",
        "Faire relire la colonne « sensibilité des données » par la DSI et par le référent chargé de la protection des données.",
        "Transmettre la carte à Masteria au cadrage : elle sert à composer les groupes et à choisir les exercices de chaque journée.",
      ],
      prompt: "Tu aides la responsable formation d'une entreprise de services de la métropole de Lyon à préparer un plan de formation à l'IA générative. Les pièces jointes contiennent les fiches de poste anonymisées de six services et, pour chacun, la liste des trois documents qu'il produit le plus souvent.\n\nPremière tâche : construis un tableau avec une ligne par service. Colonnes : service, documents produits, tâches répétitives qu'un assistant d'IA peut préparer, relecture humaine indispensable, sensibilité des données manipulées (public, interne, confidentiel, personnel).\n\nDeuxième tâche : pour chaque service, indique si l'usage est possible dans l'outil déjà déployé, s'il demande un réglage de l'administrateur ou s'il doit rester hors de l'outil. Justifie en une phrase à partir du niveau de sensibilité.\n\nTroisième tâche : propose une répartition des 140 salariés en groupes de douze personnes au plus, précédée d'une sensibilisation commune de trois heures.\n\nN'invente aucune tâche absente des fiches de poste. Si une fiche est trop vague pour conclure, écris la question à poser au manager du service.",
      resultat: "Une carte des usages par service, un classement des données et une proposition de groupes. Les lignes classées « confidentiel » et « personnel » attendent la validation de la DSI et du référent données, qui ont le dernier mot. Au cadrage, cette carte nous permet de bâtir des exercices sur les vrais documents de chaque groupe, et de traiter les cas sensibles par une règle écrite.",
    },
    pieges: [
      { titre: "Choisir l'outil avant de regarder la filière", texte: "Un laboratoire pharmaceutique et une agence de communication n'acceptent pas les mêmes données dans un assistant. Vérifiez d'abord ce que votre filière autorise, puis retenez l'outil qui s'y plie et que vos équipes utiliseront." },
      { titre: "Ouvrir Copilot sur un SharePoint mal rangé", texte: "Microsoft Copilot affiche tout contenu que l'utilisateur a au moins le droit de lire. Un dossier RH partagé par erreur avec tout un site devient trouvable en une question. Le nettoyage des droits précède le déploiement." },
      { titre: "Prendre l'hébergement européen pour une garantie totale", texte: "Les échanges avec Vibe restent stockés en Europe tant que vous ne choisissez pas le point d'accès américain, et quelques fonctions les font passer un temps par des prestataires extérieurs à l'Union, listés par Mistral AI. Votre DSI lit la liste de ces sous-traitants avant de trancher." },
      { titre: "Former un site pharmaceutique hors du regard de l'assurance qualité", texte: "Autour de la production de médicaments, chaque usage de l'IA générative relève d'une décision qualité. Tant que l'assurance qualité n'a pas validé la liste des documents utilisables, les exercices portent sur des textes publics." },
      { titre: "Bâtir l'exercice principal sur un GPT personnalisé", texte: "Les GPTs personnalisés disparaissent de toutes les offres ChatGPT le 11 décembre 2026 ; chacun migre vers un plugin, où ses instructions deviennent une compétence. Une procédure de service s'écrit désormais directement en compétence, un format que les autres assistants savent lire." },
    ],
  },
  faq: [
    { q: "Pharmacie, chimie, banque ou numérique : quel assistant d'IA pour une entreprise lyonnaise ?", a: "Le choix dépend de vos données et de votre environnement de travail. Une direction de la Part-Dieu équipée de Microsoft 365 commence volontiers par Microsoft Copilot. Un site de la Vallée de la chimie qui répond à des questionnaires clients tire parti de ChatGPT Business. Une PME attachée à un hébergement européen regarde Vibe, l'assistant de Mistral AI. Nous formons à ChatGPT, Claude, Copilot, Gemini et Vibe, et le cadrage tranche sur vos documents." },
    { q: "Quelles équipes lyonnaises forme-t-on en premier ?", a: "Celles qui écrivent le plus : qualité et affaires réglementaires dans la pharmacie et la chimie, conseillers et gestionnaires dans la banque et l'assurance, chargés d'études, juristes, RH, commerciaux, support des éditeurs de logiciels. L'Insee compte 31,7 % de cadres parmi les emplois de la métropole en 2023, et ce sont eux qui en tirent parti le plus vite. Le catalogue compte plus d'une centaine de programmes, rangés par métier." },
    { q: "Quel budget prévoir pour une session intra à Lyon, et qui la paie ?", a: "Comptez 1 980 € HT par jour, que la salle réunisse douze collègues ou que la journée soit individuelle. Le financement vient de l'OPCO de votre branche, selon ses critères et vos fonds : OPCO 2i côté chimie, pharmacie ou métallurgie, Atlas pour le conseil, le numérique, la banque et l'assurance. Les pièces du dossier viennent de nous ; la demande part de chez vous, en amont de la formation." },
    { q: "Le CPF peut-il financer une formation IA de Masteria à Lyon ?", a: "Non. Le CPF finance des certifications enregistrées auprès de France compétences, et nos programmes n'en sont pas. Ils s'adressent aux équipes en poste et se financent par l'OPCO de l'entreprise ou par son budget formation. Un salarié lyonnais qui vise un diplôme ou un titre en IA se tournera vers les universités et les écoles de la métropole." },
    { q: "Sous quelles formes se déroule une formation IA à Lyon ?", a: "Quatre formes existent : la journée intra sur votre site, pour douze participants au plus ; la journée individuelle, pensée pour un dirigeant ou un spécialiste ; le Sprint IA de trois heures, qui donne un socle commun à un grand groupe avant les journées métier ; la classe virtuelle pour les équipes partagées entre Lyon et d'autres sites. Cadrages et séances individuelles peuvent avoir lieu rue d'Algérie, dans le 1er arrondissement." },
    { q: "Nos équipes lyonnaises partent de zéro avec l'IA : est-ce un problème ?", a: "Non, la formation n'exige aucun prérequis technique. Le cadrage mesure le niveau du groupe, et la journée s'appuie sur des écrits que l'équipe manipule déjà : une note de service, un courrier client, un rapport mensuel. Sur un même site lyonnais, nous pouvons séparer les débutants des utilisateurs réguliers, pour que chacun avance à son rythme." },
    { q: "Quel délai entre la demande et la session à Lyon ?", a: "Après un premier appel, le programme et le devis vous arrivent en une journée ouvrée. Une prise en charge par l'OPCO ajoute environ un mois : le dossier doit être déposé puis accepté avant la date retenue. Sans financement, la date dépend surtout de l'agenda de vos équipes, et nous pouvons tenir le cadrage dans vos locaux." },
    { q: "Masteria est-il un organisme lyonnais, et qui anime les sessions ?", a: "Oui. Mathias Nizan l'a fondé à Lyon en 2022, et l'équipe reçoit ses clients rue d'Algérie, dans la presqu'île. Pour la catégorie « actions de formation », la certification Qualiopi est attestée par le certificat 725311-1 de Certifopac, valide jusqu'au 28 janvier 2029. Mathias Nizan anime lui-même la session, ou la confie à un formateur indépendant expérimenté qu'il a choisi pour votre sujet, et le trajet dans la métropole ne vous est pas facturé." },
    { q: "Peut-on former à l'IA les équipes d'un site de la Vallée de la chimie ou de Gerland ?", a: "Oui, sur place, dans une salle de réunion de l'entreprise. Pour un site industriel ou pharmaceutique, nous préparons avec l'assurance qualité ou le service réglementaire la liste des documents utilisables en exercice : textes publics, procédures génériques, données anonymisées. Les équipes de production qui ne peuvent pas quitter leur poste une journée entière suivent un Sprint IA de trois heures ou une classe virtuelle." },
  ],
  sources: [
    { name: "Insee : dossier complet, Métropole de Lyon (août 2026)", url: "https://www.insee.fr/fr/statistiques/2011101?geo=EPCI-200046977" },
    { name: "Insee : dossier complet, France entière (août 2026)", url: "https://www.insee.fr/fr/statistiques/2011101?geo=FE-1" },
    { name: "Insee Analyses Auvergne-Rhône-Alpes n° 210 : quartier de la Part-Dieu à Lyon (mai 2026)", url: "https://www.insee.fr/fr/statistiques/8987281" },
    { name: "Pharmacie en Auvergne-Rhône-Alpes : étude Insee Analyses n° 188, parue en décembre 2024", url: "https://www.insee.fr/fr/statistiques/8314066" },
    { name: "Rapport d'activité 2024 de la Mission Lyon Vallée de la chimie (PDF)", url: "https://lyonvalleedelachimie.fr/app/uploads/2025/06/valleedelachimie-ra-2024-210x297-v2.pdf" },
    { name: "Chiffres clés 2026 du Rhône et de la métropole lyonnaise, publiés par Auvergne-Rhône-Alpes Entreprises", url: "https://plateforme-iet.auvergnerhonealpes-entreprises.fr/informations-economiques/publications/chiffres-cles-du-rhone-et-de-la-metropole-de-lyon-edition-2026" },
    { name: "LIRIS, UMR 5205 : présentation du laboratoire", url: "https://liris.cnrs.fr/" },
    { name: "French Tech Saint-Étienne Lyon : l'association", url: "https://www.lafrenchtech-stl.com/lassociation-french-tech/" },
    { name: "Confidentialité, sécurité et données dans Microsoft Copilot (documentation Microsoft Learn)", url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy" },
    { name: "Lieu de conservation des données d'une organisation chez Mistral AI (centre d'aide)", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
    { name: "Centre d'aide OpenAI : retrait des GPTs personnalisés et migration vers les plugins", url: "https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq" },
  ],
}
