// Contenu propre à /formation-ia-bruxelles (guide terrain). Rendu par GeoIAGenericPage.
// Vérifié le 03/10/2026 : IBSA (chiffres-clés, Mini-Bru 2025), rapport 2024 du Commissaire bruxellois à l'Europe, emploi.belgique.be (droit individuel, plans de formation), cevora.be (primes Cefora), ai.vub.ac.be, code.ulb.ac.be, fari.brussels, digital-strategy.ec.europa.eu ; outils : learn.microsoft.com, support.claude.com, help.openai.com.
// Page propre du 07/10/2026 : pas d'OPCO, devis en euros HT, TVA précisée au devis ; seuls restent le droit fédéral à la formation et le fonds sectoriel paritaire Cefora, déjà sourcés. Faits d'outils de la fiche FAITS-OUTILS du 07/10.
export default {
  slug: 'formation-ia-bruxelles',
  pagePropre: true,
  dateModified: '2026-10-07',
  metaDesc: "Formation IA Bruxelles : outils choisis selon votre secteur, sessions en français dans vos bureaux, financement belge (droit à la formation, Cefora).",
  intro: "Bruxelles compte 729 685 emplois, et la moitié sont occupés par des navetteurs venus de Flandre, de Wallonie ou de plus loin. Ce sont pour l'essentiel des emplois de bureau : administrations, institutions européennes, banques, cabinets de conseil, fédérations professionnelles. L'IA générative y entre par les notes, les courriers et les textes européens. Masteria, né à Lyon en 2022, organise ces formations en français, sur site ou à distance, à partir des documents de chaque équipe et avec un financement monté selon les règles belges.",
  resume: "Masteria, cabinet d'intelligence artificielle installé à Lyon depuis 2022, forme en français les équipes bruxelloises des administrations, des fédérations, des banques et des cabinets, sur l'assistant que permet leur environnement informatique, de Microsoft Copilot (anciennement Microsoft 365 Copilot) à Claude, en passant par ChatGPT, Gemini et Vibe. La journée coûte 1 980 € HT, pour une salle de douze dans vos bureaux ou pour un associé seul. Faute d'OPCO en Belgique, elle se règle sur le budget formation, complété selon le secteur par une prime du fonds paritaire ; le devis en euros hors taxes précise la TVA.",
  programme: {
    titre: "À Bruxelles, la journée s'exerce sur le texte européen, le courrier bilingue et la note de position",
    intro: "Le cadrage repère les documents publics ou internes que l'équipe peut travailler : règlement long, projet d'acte délégué, courrier à un usager en français et en néerlandais, note pour des membres ou pour un client. Les positions non publiques et les notes diplomatiques restent hors de l'outil, selon les règles propres à chaque institution.",
    items: [
      "Faire lire un règlement européen de plusieurs centaines de pages et exiger, pour chaque réponse, l'article et la page dont elle provient.",
      "Comparer deux versions d'un projet de texte et obtenir le tableau des modifications, à contrôler dans les documents officiels.",
      "Préparer une note pour des membres ou pour un client à partir de sources publiques, en distinguant les faits, les positions connues et ce qui reste à confirmer.",
      "Rédiger un courrier en français puis en néerlandais, et confier la relecture de la seconde version à un collègue néerlandophone avant l'envoi.",
      "Dans une administration ou une banque équipée de Microsoft 365, travailler une note dans Word et le compte rendu d'une réunion Teams avec Copilot, dans le respect de la politique informatique sur les outils externes.",
      "Retrouver les lignes directrices et les questions-réponses de la Commission sur le règlement sur l'IA, à lire avant toute note interne : l'article 50, sur la transparence, s'applique depuis le 2 août 2026.",
      "Fixer la méthode de l'équipe dans une compétence (fichier SKILL.md), que plusieurs assistants savent lire, plutôt que dans un GPT personnalisé, dont OpenAI a fixé le retrait au 11 décembre 2026.",
    ],
  },
  formats: {
    titre: "Dans vos bureaux bruxellois, en français, ou à distance entre les trois Régions",
    paras: [
      "Dans vos locaux, la session se tient en français, avec une douzaine de participants au plus, sur des documents qui peuvent être en néerlandais ou en anglais. Une journée de sept heures pose les usages ; avec deux journées (3 960 € HT), l'équipe construit ses propres méthodes. Avant le jour J, chacun reçoit son compte sur l'outil retenu : une matinée passée à attendre une licence est une matinée perdue. Un grand groupe peut d'abord se retrouver pour un Sprint IA.",
      "Dans une région où 96 % des entreprises emploient moins de dix travailleurs, l'associé d'un cabinet ou l'office manager d'une petite structure tire souvent davantage d'une journée individuelle, au même prix, puis diffuse la méthode dans l'équipe. Pour un groupe réparti entre Bruxelles, la Wallonie et la Flandre, la classe virtuelle évite de réunir tout le monde dans une salle.",
    ],
  },
  acces: {
    titre: "De Lyon à Bruxelles, en TGV via Paris ou en avion",
    paras: [
      "Le formateur, Mathias Nizan ou un indépendant qu'il mandate, gagne Bruxelles au départ de Lyon, en TGV via Paris (4 h 30 de porte à porte) ou en avion (1 h 30). Il intervient dans les dix-neuf communes de la Région, dans le Brabant wallon (Louvain-la-Neuve, Wavre, Nivelles), dans le Brabant flamand pour les équipes francophones (Vilvorde, Hal), ainsi qu'à Mons, Charleroi ou Namur. Le devis, libellé en euros hors taxes, arrête le coût et l'organisation de ce voyage.",
    ],
  },
  financement: {
    titre: "Le budget de l'employeur, le droit fédéral à la formation et, selon le secteur, un fonds paritaire",
    paras: [
      "La Belgique n'a pas d'OPCO, et la certification Qualiopi de Masteria n'y ouvre aucun financement : c'est l'entreprise qui règle la journée, sur ses crédits de formation. La loi fédérale accorde à chaque travailleur à temps plein d'une entreprise d'au moins 20 travailleurs un droit à 5 jours de formation par an, appréciés en moyenne sur cinq ans, et impose un plan de formation arrêté au plus tard le 31 mars, après avis du conseil d'entreprise rendu pour le 15 mars. Entre 10 et 19 travailleurs, le minimum est d'un jour. Une formation IA liée au travail entre dans ce décompte.",
      "Selon le secteur, un fonds paritaire peut compléter. Les employeurs de la commission paritaire 200 peuvent demander à Cefora une prime pour une formation externe payante : 15 € par heure et par employé de 45 ans ou plus, plafonnés à 90 € par jour, et 7,5 € par heure, plafonnés à 45 €, pour les plus jeunes, dans les trois mois qui suivent la formation, facture détaillée à l'appui. Cefora écarte les sujets propres à l'entreprise : l'intitulé doit désigner une compétence transférable. La TVA applicable figure sur le devis, établi en euros hors taxes.",
    ],
  },
  cta: {
    fin: {
      titre: "Une équipe bruxelloise à inscrire au plan de formation 2027 ?",
      texte: "Indiquez-nous le secteur, la commission paritaire et l'outil en place : vous recevez sous 24 h un programme aux intitulés compatibles et un devis en euros hors taxes.",
    },
  },
  guide: {
    kicker: "Guide terrain Bruxelles",
    h2: "À Bruxelles, l'IA générative s'apprend sur des métiers de bureau et se finance par l'employeur et les fonds sectoriels belges",
    lead: "La Région de Bruxelles-Capitale est le premier bassin d'emploi de Belgique : 729 685 emplois selon les chiffres-clés de l'IBSA, dont un sur deux occupé par un navetteur. En 2022, 93 % de ces emplois relevaient du tertiaire, et l'administration publique en comptait à elle seule 124 581. La Région produit 17,4 % du PIB belge avec 10,6 % de la population. Ce tissu de bureaux rédige des notes, des courriers bilingues et des analyses de textes européens, un terrain où l'IA générative s'installe vite. La formation s'y organise selon des règles belges : aucun OPCO, et des obligations de formation fixées à l'employeur par la loi fédérale.",
    sections: [
      {
        h3: "Le premier bassin d'emploi belge travaille dans les bureaux",
        paras: [
          "Le Mini-Bru 2025 de l'IBSA détaille les 729 641 emplois bruxellois de 2022. L'administration publique arrive en tête avec 124 581 emplois, devant la santé et l'action sociale (76 339) et l'enseignement (65 495). Les activités spécialisées, scientifiques et techniques, qui regroupent juristes, consultants, comptables et bureaux d'études, comptent 89 409 emplois, dont 51 472 indépendants. L'industrie manufacturière pèse 17 276 emplois. Pour une formation IA, ce profil compte : le public se compose de rédacteurs, d'analystes et de gestionnaires de dossiers, rarement d'opérateurs de production.",
          "La finance occupe une place à part. Avec 48 761 emplois, banques et assurances produisent 18,6 % de la valeur ajoutée régionale, la part la plus forte de toutes les branches. L'IBSA recense 122 725 entreprises, dont 96 % emploient moins de dix travailleurs. Une formation bruxelloise s'adresse donc à deux publics. Les grandes organisations forment par groupes de douze dans leurs locaux ; les petites structures de conseil ou d'expertise commencent souvent par leur associé ou leur office manager.",
        ],
      },
      {
        h3: "La présence internationale fournit près d'un emploi sur quatre",
        paras: [
          "Selon le rapport 2024 du Commissaire bruxellois à l'Europe et aux organisations internationales, la présence internationale génère jusqu'à 23,2 % de l'emploi régional. Les emplois directs atteignent environ 52 000, dont 40 514 agents des institutions de l'Union et 7 111 membres du personnel diplomatique. Autour d'eux, le rapport compte entre 10 000 et 14 000 emplois de lobbyistes, 3 887 bureaux de représentation d'intérêts enregistrés et 730 journalistes internationaux accrédités.",
          "Ces métiers partagent une matière première : le texte européen, publié en plusieurs langues, commenté, amendé. Une formation IA utile à Bruxelles part de ce matériau. Elle apprend à faire lire un règlement long en citant l'article et la page, à comparer deux versions d'un texte, à préparer une note pour des membres ou un client. Elle fixe aussi la frontière : une position de négociation non publique ou une note diplomatique reste hors d'un assistant grand public, et chaque institution applique ses propres règles sur les outils externes.",
        ],
      },
      {
        h3: "L'écosystème IA bruxellois repose sur deux universités et sur le régulateur européen",
        paras: [
          "La recherche en IA a une longue histoire à Bruxelles. Le laboratoire d'intelligence artificielle de la VUB, fondé en 1983 par Luc Steels, se présente comme le premier laboratoire d'IA d'Europe continentale. À l'ULB, le laboratoire IRIDIA travaille sur l'intelligence en essaim et les métaheuristiques (des méthodes d'optimisation approchée) ; c'est là qu'a été proposée l'optimisation par colonies de fourmis. Les deux universités portent ensemble FARI, institut consacré à l'IA d'intérêt général, qui réunit 300 chercheurs issus de dix groupes de recherche, avec le soutien de la Région via Innoviris.",
          "Le régulateur siège dans la même ville. Le Bureau européen de l'IA, créé au sein de la Commission et rattaché à la direction générale CONNECT, emploie plus de 125 personnes et veille à l'application du règlement sur l'IA, en particulier pour les modèles à usage général. Pour une entreprise bruxelloise, cette proximité a un effet pratique : les lignes directrices, les questions-réponses et les consultations de la Commission sont la première source à lire avant toute note interne sur l'IA, et une formation sérieuse apprend à les retrouver.",
        ],
      },
    ],
    table: {
      caption: "Administration, institutions, lobbying, banque, conseil : l'assistant de chaque bureau bruxellois et sa limite",
      headers: ["Bureau bruxellois", "Assistant de départ", "Document travaillé", "Limite à poser"],
      rows: [
        ["Administration publique (124 581 emplois)", "Microsoft Copilot quand l'administration travaille sous Microsoft 365", "Projet de courrier ou de note dans Word, compte rendu d'une réunion Teams", "Données personnelles des usagers ; règles de la direction informatique sur les outils externes"],
        ["Institutions et organisations internationales", "L'outil autorisé par l'institution", "Briefing préparé à partir de documents publics", "Règles internes de l'institution ; aucune note non publique dans un compte personnel"],
        ["Affaires publiques et fédérations", "Claude, pour la recherche web avec citations et la lecture de PDF longs", "Note d'analyse d'un projet d'acte délégué", "Positions des membres non arrêtées tenues hors de l'outil"],
        ["Banque et assurance (18,6 % de la valeur ajoutée)", "Microsoft Copilot, dans le périmètre Microsoft 365 de l'établissement", "Synthèse de procédures, préparation de comités", "Devoir de discrétion envers les clients ; politique d'externalisation de l'établissement"],
        ["Conseil, droit et expertise (89 409 emplois)", "ChatGPT Business, avec ses projets partagés et sa recherche approfondie", "Mémo client bilingue, revue d'un dossier de pièces", "Secret professionnel ; relecture par l'auteur avant tout envoi"],
        ["Associations et petites entreprises (96 % des entreprises comptent moins de 10 travailleurs)", "ChatGPT, ou Mistral AI et son assistant Vibe pour qui préfère un éditeur européen", "Courriers, demandes de subsides, comptes rendus d'assemblée", "Sur un compte ChatGPT individuel, l'option d'amélioration du modèle, dans les contrôles des données, décide de l'usage des échanges"],
      ],
    },
    cas: {
      h3: "Mise en situation : intégrer l'IA au plan de formation 2027 d'une entreprise d'Anderlecht",
      contexte: "Prenons la responsable des ressources humaines d'une entreprise de services de 60 salariés installée à Anderlecht, rattachée à la commission paritaire 200. Plusieurs équipes utilisent déjà un assistant d'IA, chacune à sa façon. La responsable doit soumettre le projet de plan de formation 2027 aux représentants du personnel avant le 15 mars, et veut y inscrire l'IA générative avec des intitulés qui restent compatibles avec la prime Cefora.",
      etapes: [
        "Dresser la liste des fonctions qui utilisent un assistant d'IA, avec l'outil et l'usage déclaré, sans aucun nom de personne.",
        "Rassembler les règles internes existantes : charte informatique, politique de confidentialité, règlement de travail.",
        "Saisir la consigne ci-dessous dans l'outil autorisé par l'entreprise, depuis un compte professionnel.",
        "Relire le projet de section avec la direction et vérifier que l'intitulé de chaque action désigne un outil ou une compétence transférable, condition posée par Cefora pour la prime.",
        "Après chaque session, classer la facture, le document de présence et le programme, puis introduire la demande de prime dans les trois mois.",
      ],
      prompt: "Tu aides la responsable RH d'une entreprise belge de services de 60 salariés, installée à Bruxelles et rattachée à la commission paritaire 200, à préparer la section « Intelligence artificielle » de son plan de formation 2027.\n\nLa liste ci-dessous donne les fonctions qui utilisent un assistant d'IA, avec l'outil et l'usage déclaré : [coller la liste, sans nom de personne].\n\nPremière tâche : regroupe ces fonctions en trois niveaux de besoin (découverte, usage quotidien, usage avancé) et justifie chaque classement en une phrase.\n\nDeuxième tâche : propose pour chaque niveau une action de formation avec un intitulé qui désigne un outil ou une compétence transférable, une durée en heures, le nombre de participants et le format (présentiel ou classe virtuelle).\n\nTroisième tâche : calcule le nombre de jours de formation par équivalent temps plein que représente cette section, pour le situer par rapport à l'objectif légal de 5 jours par an.\n\nQuatrième tâche : liste les règles d'usage à rappeler pendant chaque formation (données à ne jamais saisir, relecture humaine, vérification des sources).\n\nPrésente le résultat dans un tableau, puis signale les points que la direction doit trancher. N'invente aucun chiffre absent de la liste fournie.",
      resultat: "Une section de plan de formation organisée par niveaux, des intitulés compatibles avec les conditions de Cefora et la part de l'objectif légal de cinq jours couverte par l'IA. Les arbitrages restent à la direction et aux représentants du personnel. Vérifiez la commission paritaire de chaque salarié avant de compter sur la prime : elle ne concerne que les employés de la commission paritaire 200.",
    },
    pieges: [
      { titre: "Chercher un OPCO ou un financement adossé à Qualiopi", texte: "Ces mécanismes relèvent du droit français. En Belgique, l'employeur paie sur son budget, avec selon le secteur l'appui d'un fonds paritaire ; Qualiopi atteste la qualité des processus de Masteria sans ouvrir de droit belge." },
      { titre: "Laisser passer le délai de trois mois de Cefora", texte: "La prime pour une formation externe se demande dans les trois mois qui suivent la fin de la formation. La facture doit mentionner le prix, le nom de l'entreprise, l'intitulé et toutes les dates ; à défaut, un document de présence établi par l'organisme de formation complète le dossier." },
      { titre: "Donner à la formation un intitulé centré sur l'entreprise", texte: "Cefora écarte les formations sur les méthodes, les produits ou les sujets propres à l'entreprise. « Atelier IA sur nos dossiers clients » se lit comme un sujet interne. « Rédiger et vérifier des documents professionnels avec ChatGPT » décrit une compétence." },
      { titre: "Oublier le plan de formation annuel", texte: "À partir de 20 travailleurs, le plan de formation est arrêté au plus tard le 31 mars, après avis des représentants du personnel, et une copie est déposée auprès de l'administration dans le mois de son entrée en vigueur. Inscrire l'IA dès la préparation du plan évite de la justifier après coup." },
      { titre: "Compter sur le compte formation fédéral", texte: "Le Federal Learning Account a cessé de fonctionner le 1er janvier 2026. Ses données historiques restent consultables jusqu'à la fin de 2026, puis sont supprimées. Tenez votre propre registre des formations suivies, salarié par salarié." },
    ],
  },
  faq: [
    { q: "Administration, banque ou cabinet d'affaires publiques : quel assistant d'IA à Bruxelles ?", a: "L'environnement informatique et la nature des documents décident. Une administration ou une banque sous Microsoft 365 commence par Microsoft Copilot ; pour les utilisateurs de l'Union, Microsoft indique que le trafic reste dans sa frontière des données européennes. Un cabinet d'affaires publiques qui lit des textes européens longs tire davantage de Claude et de sa recherche web avec citations. Une équipe de conseil qui travaille en trois langues s'appuie sur ChatGPT Business. Gemini et Vibe, chez Mistral AI, complètent la liste des outils enseignés." },
    { q: "Quels métiers bruxellois former en premier à l'IA générative ?", a: "Ceux de l'écrit et de l'analyse : chargés d'affaires publiques, juristes, gestionnaires de conformité, attachés de presse, assistants de direction, agents d'administration, responsables des ressources humaines. Selon l'IBSA, ces familles dominent l'emploi régional, de l'administration publique (124 581 emplois) aux activités spécialisées comme le droit et le conseil (89 409 emplois)." },
    { q: "Que coûte une session de formation IA dans des bureaux bruxellois ?", a: "1 980 € HT la journée, de trois à douze participants, soit 165 € HT chacun quand la salle est complète ; le coaching d'une seule personne se facture au même prix. Un Sprint IA pour un grand groupe se chiffre au devis, avec le voyage du formateur. Il est libellé en euros hors taxes, TVA indiquée." },
    { q: "Qui paie une formation IA dans une entreprise belge ?", a: "L'employeur, sur son budget formation : il n'existe pas d'OPCO en Belgique, et Qualiopi n'y déclenche aucun financement. Les employeurs de la commission paritaire 200 peuvent ensuite demander à Cefora une prime pour une formation externe, jusqu'à 90 € par jour et par employé de 45 ans ou plus et 45 € pour les plus jeunes, dans les trois mois qui suivent la formation. D'autres secteurs ont leur propre fonds paritaire : la commission paritaire de vos salariés se vérifie au cadrage." },
    { q: "Une formation IA compte-t-elle dans le droit individuel à la formation des salariés belges ?", a: "Oui, dès lors qu'elle est liée à l'activité professionnelle : la loi fédérale compte les formations formelles et informelles. Dans une entreprise d'au moins 20 travailleurs, chaque salarié à temps plein a droit à 5 jours de formation par an, appréciés en moyenne sur une période de cinq ans ; entre 10 et 19 travailleurs, le minimum est d'un jour. Une formation suivie en dehors des heures de travail est rémunérée comme du temps de travail." },
    { q: "Salle, coaching ou session à distance : quelle formule pour une équipe bruxelloise ?", a: "La salle accueille une douzaine de collègues dans vos bureaux. Le coaching sert un dirigeant, un associé ou un expert, nombreux dans une région où 96 % des entreprises ont moins de dix travailleurs. Le Sprint IA prépare un grand groupe avant le déploiement d'un outil. Tout se tient aussi à distance quand l'équipe vit entre Bruxelles, la Wallonie et la Flandre." },
    { q: "Une équipe bruxelloise sans profil technique peut-elle suivre la formation ?", a: "Oui, elle s'adresse à des professionnels de l'écrit qui ne codent pas. La journée d'initiation part des documents du poste : un courrier à rédiger en français et en néerlandais, un texte européen à résumer, un compte rendu de réunion à structurer. Les participants apprennent à formuler une demande, à vérifier une réponse et à protéger les données. Une équipe qui pratique déjà l'IA rejoint d'emblée un programme par métier ou par outil." },
    { q: "Quel délai pour organiser une session à Bruxelles ?", a: "Programme et devis partent en un jour ouvré. Rien n'est à instruire auprès d'un financeur avant la session : le délai tient à votre agenda, à l'ouverture des comptes de l'outil et au voyage du formateur. La prime Cefora se demande après la formation et ne retarde pas la session. Pour une entreprise de 20 travailleurs ou plus, inscrire la formation au plan annuel, arrêté au plus tard le 31 mars, évite de la justifier après coup." },
    { q: "Qui anime la formation à Bruxelles, et en quelle langue ?", a: "Mathias Nizan, qui a fondé Masteria, ou un formateur indépendant expérimenté qu'il retient pour votre secteur ; il voyage depuis Lyon ou depuis la ville où il exerce. La session se déroule en français. Les exercices peuvent porter sur vos documents en néerlandais ou en anglais, et les consignes de relecture tiennent compte des deux langues officielles de la Région." },
  ],
  sources: [
    { name: "Chiffres-clés de la Région de Bruxelles-Capitale publiés par l'IBSA", url: "https://ibsa.brussels/chiffres/chiffres-cles-de-la-region" },
    { name: "IBSA : Mini-Bru 2025 (emploi et valeur ajoutée par branche, 2022)", url: "https://ibsa.brussels/sites/default/files/publication/documents/Mini-Bru_2025_FR.pdf" },
    { name: "Commissaire bruxellois à l'Europe et aux organisations internationales : rapport annuel 2024", url: "https://admin.be.brussels/sites/default/files/2025-05/CEIO%20-%20Annual%20Report%202024%20-%20EN_0.pdf" },
    { name: "SPF Emploi : droit individuel à la formation", url: "https://emploi.belgique.be/fr/themes/formation/droit-individuel-la-formation/droit-individuel-la-formation-information-pour-les-0" },
    { name: "SPF Emploi : plans de formation", url: "https://emploi.belgique.be/fr/themes/formation/plans-de-formation" },
    { name: "Cefora : primes à la formation pour les employeurs de la CP 200", url: "https://www.cevora.be/fr/services-complementaires/primes-a-la-formation/employeurs" },
    { name: "VUB : Artificial Intelligence Lab Brussels", url: "https://ai.vub.ac.be/" },
    { name: "ULB : laboratoire IRIDIA", url: "https://code.ulb.ac.be/lab/IRIDIA" },
    { name: "FARI : AI for the Common Good Institute (VUB et ULB)", url: "https://www.fari.brussels/" },
    { name: "Le Bureau européen de l'IA, sur le site de la Commission européenne", url: "https://digital-strategy.ec.europa.eu/en/policies/ai-office" },
  ],
}
