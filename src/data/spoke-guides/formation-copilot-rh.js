// Contenu propre à /formation-copilot-rh (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-copilot-rh',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Copilot RH : offres et notes dans Word, entretiens Teams bien réglés, agent RH pour les salariés, AI Act et consultation du CSE. Qualiopi, OPCO.",
  intro: "Les dossiers RH sont les plus sensibles de l'entreprise, et Microsoft 365 Copilot voit tout ce que vous avez le droit d'ouvrir. Cette formation part de ce constat. Elle vous apprend à confier à Copilot les tâches RH sans enjeu juridique (offres, notes, supports, réponses aux questions des salariés) et à reconnaître les usages que le Code du travail et l'AI Act encadrent déjà. Elle vous aide aussi à préparer le passage devant le CSE.",
  guide: {
    kicker: "Guide terrain",
    h2: "Copilot en RH : l'usage fixe le niveau de risque, les droits d'accès fixent ce que Copilot voit",
    lead: "Le même Copilot écrit une offre d'emploi, ce qui ne pose aucune difficulté juridique, et peut classer des candidatures, ce que l'AI Act classe à haut risque. L'usage décide de la catégorie. La seconde question tient au rangement : Copilot affiche toutes les données que la personne peut consulter, et un dossier RH mal partagé devient une réponse à la portée d'un collègue curieux. Réglez ces deux sujets avant le premier prompt.",
    sections: [
      {
        h3: "Le Code du travail encadre déjà l'IA en RH",
        paras: [
          "Trois articles s'appliquent aujourd'hui à tout outil d'IA utilisé en RH. L'article L1221-8 impose d'informer le candidat des méthodes d'aide au recrutement utilisées à son égard avant leur mise en œuvre, et exige qu'elles soient pertinentes. L'article L1221-9 interdit de collecter une information personnelle sur un candidat par un dispositif qu'il ne connaît pas. L'article L1222-4 pose la même règle pour les salariés.",
          "Dans les entreprises d'au moins 50 salariés, l'article L2312-8 prévoit l'information et la consultation du CSE sur l'introduction de nouvelles technologies. Un déploiement de Copilot entre le plus souvent dans ce cadre. Préparez la consultation avant d'attribuer les licences.",
        ],
      },
      {
        h3: "L'AI Act classe les usages RH, et son calendrier a bougé en 2026",
        paras: [
          "La reconnaissance des émotions sur le lieu de travail est interdite depuis le 2 février 2025 (article 5). L'annexe III range parmi les systèmes à haut risque ceux qui servent à recruter : diffuser des offres ciblées, filtrer des candidatures, évaluer des candidats. Elle y ajoute les systèmes qui décident d'une promotion, d'une rupture ou d'une attribution de tâches, et ceux qui évaluent la performance des salariés.",
          "Le règlement Omnibus (UE) 2026/1744, en vigueur depuis le 27 juillet 2026, a reporté les obligations de l'annexe III au 2 décembre 2027. L'article 25 fait du déployeur un fournisseur quand il détourne un outil généraliste vers un usage à haut risque : demander à Copilot de classer des candidatures peut suffire à vous faire endosser ce rôle. L'article 26 impose à l'employeur d'informer les représentants du personnel et les salariés concernés avant d'utiliser un système à haut risque au travail.",
          "Les filtres de Copilot limitent les réponses qui porteraient un jugement sur la performance, l'attitude, l'état émotionnel ou les caractéristiques personnelles d'un salarié à partir de ses communications professionnelles. Un refus de Copilot sur ce terrain signale un usage à revoir.",
        ],
      },
      {
        h3: "Les sites RH se rangent avant l'arrivée de Copilot",
        paras: [
          "Copilot n'affiche que les données que la personne peut consulter, ce qui protège tant que les droits sont justes. Un fichier de rémunérations partagé il y a trois ans par un lien ouvert à toute l'entreprise devient la réponse à « quel est le salaire moyen au service achats ». Avant le déploiement, demandez à l'informatique de passer en revue les partages des sites SharePoint des RH.",
          "Dans Microsoft Purview, la console de conformité de Microsoft 365, une stratégie de protection contre la perte de données peut interdire à Copilot de traiter les documents qui portent une étiquette de confidentialité donnée, par exemple celle des dossiers du personnel.",
          "Vos invites et les réponses de Copilot sont conservées avec les autres contenus de l'entreprise. Les administrateurs peuvent les retrouver par la recherche de contenu de Purview. N'écrivez donc jamais dans un prompt ce que vous n'écririez pas dans un mail : un diagnostic médical, le motif précis d'un arrêt, un soupçon non établi.",
        ],
      },
      {
        h3: "Pour les entretiens, la transcription se décide avant la réunion",
        paras: [
          "Une transcription Teams est une donnée personnelle conservée. Copilot peut l'interroger ensuite, et tous les invités de l'organisation retrouvent son contenu dans l'onglet Récapitulatif.",
          "Pour un recrutement, prévenez le candidat dans l'invitation si vous transcrivez, comme le veut l'article L1221-8. Pour un entretien disciplinaire ou une réunion où l'on parle de la santé d'un salarié, ouvrez les options de la réunion et choisissez « Uniquement pendant la réunion » dans la rubrique « Copilot et d'autres IA ». Copilot reste disponible en séance, sans transcription. Pour une réunion du CSE, décidez du réglage avec le secrétaire du comité, qui établit le procès-verbal.",
        ],
      },
      {
        h3: "Un agent RH répond aux salariés avec les droits de chacun",
        paras: [
          "Agent Builder crée un agent qui répond aux questions courantes : jours de congés, mutuelle, télétravail, note de frais. Ajoutez comme connaissances le règlement intérieur, les accords d'entreprise et les pages de l'intranet RH, en passant par SharePoint. L'agent respecte alors les droits de chaque salarié, et un document auquel la personne n'a pas accès n'entre pas dans sa réponse.",
          "Le réglage qui limite l'agent aux sources indiquées réduit les réponses inventées ; Microsoft reconnaît dans sa documentation qu'Agent Builder ne peut pas bloquer complètement les connaissances générales du modèle. Demandez à l'agent de citer l'article de l'accord qu'il applique et d'indiquer en fin de réponse l'adresse de contact RH.",
        ],
      },
    ],
    table: {
      caption: "Les usages RH de Copilot, du plus courant au plus encadré",
      headers: ["Usage RH", "Fonction Copilot", "Cadre et vigilance"],
      rows: [
        ["Rédiger une offre d'emploi à partir de la fiche de poste", "Word, « Créer un brouillon avec Copilot », fiche désignée par /", "Usage courant ; relire les critères pour écarter toute mention discriminatoire"],
        ["Répondre aux questions des salariés sur les accords", "Agent créé avec Agent Builder, sources SharePoint", "Les fichiers déposés sont lisibles par tous les utilisateurs de l'agent"],
        ["Synthétiser les commentaires d'une enquête d'engagement", "Excel, volet Copilot : thèmes et sentiment", "Données anonymisées, résultats par service, aucune conclusion individuelle"],
        ["Résumer un entretien de recrutement transcrit", "Teams, onglet Récapitulatif", "Candidat informé (L1221-8) ; pas de classement entre candidats"],
        ["Classer ou noter des candidatures", "À écarter avec un outil généraliste", "Haut risque au sens de l'annexe III, obligations au 2 décembre 2027"],
        ["Déduire l'humeur ou la motivation d'un salarié de ses messages", "Aucune", "Reconnaissance des émotions au travail interdite depuis le 2 février 2025"],
      ],
    },
    cas: {
      h3: "Cas pratique : la note d'information du CSE sur le déploiement de Copilot",
      contexte: "Prenons une responsable RH dans une entreprise de 180 salariés, qui dispose d'une licence Microsoft Copilot. La direction veut équiper quarante personnes au premier trimestre. La responsable RH prépare l'information-consultation du CSE prévue par l'article L2312-8.",
      etapes: [
        "Elle crée un bloc-notes Copilot avec comme références la note de cadrage de la direction, la charte informatique et le compte rendu de la réunion avec l'informatique sur les réglages retenus.",
        "Dans le bloc-notes, elle colle le prompt ci-dessous, puis demande au bloc-notes de créer un document Word à partir de la réponse.",
        "Elle relit la note avec le responsable informatique et avec le délégué à la protection des données.",
        "Elle ouvre le modèle PowerPoint de l'entreprise et demande à Copilot de « créer une présentation à partir d'un fichier » en désignant la note Word.",
        "Avant d'envoyer la convocation, elle convient avec le secrétaire du CSE du réglage de transcription de la réunion.",
      ],
      prompt: "Je suis responsable des ressources humaines d'une entreprise de 180 salariés. La direction prévoit d'équiper quarante salariés de Microsoft Copilot au premier trimestre. Je prépare la note d'information remise au CSE avant sa consultation sur l'introduction de cette nouvelle technologie.\n\nAppuie-toi uniquement sur les références de ce bloc-notes. Rédige une note de quatre pages au plus, en langage clair pour des élus qui ne sont pas spécialistes, en six parties :\n1. Le projet : services concernés, nombre de licences, calendrier.\n2. Les usages prévus, décrits tâche par tâche, puis les usages exclus. Écris noir sur blanc que Copilot ne servira pas à trier des candidatures, à évaluer des salariés ou à analyser leurs messages.\n3. Les données que Copilot peut consulter et les règles d'accès qui s'appliquent.\n4. Les réglages retenus pour les réunions Teams et la conservation des conversations avec Copilot.\n5. Les effets possibles sur les conditions et la charge de travail, et la formation prévue pour les salariés concernés.\n6. Les questions que le CSE posera probablement, avec les réponses que les références permettent de donner.\n\nSi une information manque dans les références, écris « à préciser par la direction » au lieu de la supposer. Ne cite aucun article de loi que je ne t'ai pas fourni.",
      resultat: "Copilot produit une note en six parties, avec des mentions « à préciser par la direction » partout où le dossier est incomplet. La responsable RH vérifie trois points. La description des droits d'accès doit correspondre à ce que l'informatique a configuré. Les réglages Teams décrits doivent être ceux qui s'appliqueront le jour venu. Aucune phrase ne doit promettre plus que ce que la direction a décidé. Pour la procédure de consultation elle-même, l'avis d'un juriste en droit social reste nécessaire.",
    },
    pieges: [
      {
        titre: "La grille des salaires déposée dans l'agent",
        texte: "Un fichier déposé depuis l'ordinateur dans un agent devient lisible par toute personne qui utilise l'agent, quels que soient ses droits sur l'original. Réservez le dépôt aux documents ouverts à tous, comme le règlement intérieur, et passez par SharePoint pour le reste.",
      },
      {
        titre: "Un article de loi mal cité",
        texte: "Copilot cite volontiers un numéro d'article du Code du travail, et il lui arrive de se tromper de numéro ou de reprendre une version abrogée. Vérifiez chaque référence sur Légifrance ou sur le Code du travail numérique avant de l'écrire dans une note ou dans une réponse à un salarié.",
      },
      {
        titre: "La synthèse qui glisse vers l'évaluation",
        texte: "Résumer les comptes rendus d'entretiens annuels d'un service pour bâtir le plan de formation est utile. Demander ensuite à Copilot quels salariés semblent les moins engagés revient à évaluer des personnes, un usage que l'annexe III de l'AI Act classe à haut risque. Travaillez sur des résultats agrégés par métier ou par service.",
      },
    ],
  },
  audience: [
    { title: "Responsables RH et DRH de PME et d'ETI", desc: "Vous décidez de l'usage de Copilot dans la fonction RH et vous préparez la consultation du CSE. Vous voulez savoir ce que le Code du travail et l'AI Act permettent déjà." },
    { title: "Chargés de recrutement", desc: "Vous rédigez des offres, organisez des entretiens en visio et échangez avec les candidats. Vous voulez accélérer la rédaction et rester en dehors des usages classés à haut risque." },
    { title: "Gestionnaires RH et de formation", desc: "Vous répondez chaque jour aux questions des salariés et préparez les documents du service. Vous voulez un agent RH fiable et des synthèses d'enquêtes qui restent collectives." },
  ],
  useCases: [
    { icon: '📝', title: "Offre d'emploi à partir de la fiche de poste", desc: "Word rédige l'offre à partir de la fiche désignée avec la touche /, puis vous relisez les critères." },
    { icon: '🤝', title: "Agent de questions RH", desc: "Un agent créé avec Agent Builder répond sur les congés, la mutuelle ou le télétravail à partir des accords rangés dans SharePoint." },
    { icon: '📊', title: "Synthèse d'enquête d'engagement", desc: "Le volet Copilot d'Excel dégage les thèmes et le sentiment des commentaires anonymisés, service par service." },
    { icon: '👥', title: "Entretiens Teams bien réglés", desc: "Transcription annoncée pour un recrutement, « Uniquement pendant la réunion » pour un entretien disciplinaire." },
    { icon: '📋', title: "Dossier d'information du CSE", desc: "Un bloc-notes Copilot rassemble les pièces et produit la note remise aux élus avant la consultation." },
    { icon: '📧', title: "Réponses aux candidats", desc: "Outlook prépare les brouillons de réponse aux candidatures, que vous personnalisez avant l'envoi." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Ce que le droit permet déjà avec l'IA en RH", duration: '1h30',
      description: "L'usage fixe le niveau de risque. Ce module pose les règles du Code du travail et de l'AI Act qui s'appliquent à la fonction RH en septembre 2026.",
      items: [
        "Code du travail : information du candidat (L1221-8), collecte d'informations sur les candidats et les salariés (L1221-9, L1222-4)",
        "Consultation du CSE sur l'introduction de nouvelles technologies (L2312-8)",
        "AI Act : reconnaissance des émotions au travail interdite depuis le 2 février 2025, usages RH à haut risque de l'annexe III",
        "Calendrier du règlement Omnibus 2026/1744 : annexe III au 2 décembre 2027, articles 25 et 26",
      ],
      exercise: "Classer vos usages RH actuels ou envisagés de l'IA, du plus courant au plus encadré.",
    },
    {
      day: 1, title: "Module 2 · Rédiger les documents du recrutement", duration: '2h',
      description: "La rédaction est l'usage RH de Copilot qui pose le moins de questions juridiques. Vous produisez offre, grille et réponses à partir de vos propres documents.",
      items: [
        "« Créer un brouillon avec Copilot » dans Word à partir de la fiche de poste désignée avec /",
        "Relire une offre pour écarter toute mention discriminatoire",
        "Construire une grille d'entretien par compétences à partir de la fiche de poste",
        "Préparer dans Outlook les réponses aux candidats avec « Brouillon avec Copilot »",
      ],
      exercise: "Rédiger l'offre et la grille d'entretien d'un poste que vous recrutez, à partir de votre fiche de poste.",
    },
    {
      day: 1, title: "Module 3 · Où s'arrête Copilot dans le recrutement", duration: '2h',
      description: "Classer des candidatures avec un outil généraliste change la nature de l'usage. Vous redessinez votre processus pour garder la sélection entre les mains des recruteurs.",
      items: [
        "Pourquoi le tri ou la notation de candidatures relève de l'annexe III",
        "Article 25 : quand l'employeur qui détourne un outil devient fournisseur d'un système à haut risque",
        "Informer le candidat des méthodes utilisées avant l'entretien",
        "Résumer un entretien transcrit et s'interdire la note comparative entre candidats",
      ],
      exercise: "Réécrire votre processus de recrutement en indiquant, étape par étape, ce que Copilot fait et ce qui reste à vos recruteurs.",
    },
    {
      day: 1, title: "Module 4 · Entretiens et réunions sensibles dans Teams", duration: '1h30',
      description: "Une transcription est une donnée personnelle conservée et lisible par les invités. Le réglage se décide avant chaque type d'entretien.",
      items: [
        "Transcription, onglet Récapitulatif et accès des invités de l'organisation",
        "L'option « Uniquement pendant la réunion » pour un entretien disciplinaire ou une réunion qui touche à la santé",
        "Prévenir le candidat ou le salarié avant de transcrire",
        "Réunion du CSE : décider du réglage avec le secrétaire du comité",
      ],
      exercise: "Définir le réglage Copilot de chacun de vos types d'entretiens et de réunions RH, avec la phrase d'information correspondante.",
    },
    {
      day: 2, title: "Module 5 · Protéger les données du personnel dans Microsoft 365", duration: '1h30',
      description: "Copilot affiche tout ce que la personne peut ouvrir. Les dossiers RH mal partagés deviennent des réponses, sauf si les droits et les protections sont en place.",
      items: [
        "La règle des droits appliquée aux sites SharePoint des RH",
        "Repérer les fichiers sensibles partagés trop largement",
        "Étiquettes de confidentialité et stratégie Purview qui empêche Copilot de traiter les dossiers du personnel",
        "Invites conservées et consultables par les administrateurs : ce qu'on n'écrit jamais dans un prompt",
      ],
      exercise: "Dresser la liste des emplacements où sont rangés vos documents RH sensibles et des questions à poser à votre informatique.",
    },
    {
      day: 2, title: "Module 6 · Un agent RH pour les questions des salariés", duration: '2h',
      description: "Un agent bien construit répond sur les accords avec les droits de chaque salarié. Mal construit, il diffuse un fichier à toute l'entreprise.",
      items: [
        "Agent Builder : instructions et connaissances issues de SharePoint (accords, règlement intérieur, intranet)",
        "Fichier déposé ou fichier SharePoint : qui peut lire quoi",
        "Limiter l'agent aux sources indiquées et lui faire citer l'article appliqué",
        "Tester l'agent sur des questions pièges avant de le partager",
      ],
      exercise: "Créer un agent de questions RH sur vos accords d'entreprise et le tester sur les questions que vos salariés posent le plus souvent.",
    },
    {
      day: 2, title: "Module 7 · Synthèses collectives et dossier du CSE", duration: '2h',
      description: "Copilot aide à lire une enquête et à préparer une consultation, à condition de rester au niveau du collectif.",
      items: [
        "Synthétiser des commentaires d'enquête anonymisés dans Excel : thèmes et sentiment par service",
        "Rester au niveau collectif : aucune conclusion sur un salarié identifiable",
        "Monter le dossier d'information du CSE dans un bloc-notes Copilot",
        "Créer la présentation du CSE dans PowerPoint à partir de la note Word",
      ],
      exercise: "Préparer la note d'information de votre CSE sur un projet d'outil numérique, à partir de vos documents de cadrage.",
    },
    {
      day: 2, title: "Module 8 · La charte d'usage de Copilot pour la fonction RH", duration: '1h30',
      description: "Le service RH fixe ses propres règles avant de les proposer au reste de l'entreprise. Vous repartez avec une charte prête à présenter.",
      items: [
        "Lister les usages autorisés, encadrés et exclus",
        "Fixer les relectures obligatoires : références juridiques, courriers individuels, données chiffrées",
        "Vérifier chaque article du Code du travail cité par Copilot sur Légifrance ou le Code du travail numérique",
        "Demander à l'informatique quels modèles sont activés, dont les modèles Anthropic exclus de la limite des données de l'UE",
      ],
      exercise: "Rédiger la charte d'usage de Copilot de votre service RH, prête à être présentée à la direction et au CSE.",
    },
  ],
  objectives: [
    "Classer un usage RH de Copilot selon le Code du travail et l'AI Act : courant, encadré, à haut risque ou interdit",
    "Rédiger une offre d'emploi et une grille d'entretien avec Copilot à partir d'une fiche de poste",
    "Paramétrer une réunion Teams selon la sensibilité de l'entretien",
    "Créer et tester un agent de questions RH qui s'appuie sur des sources SharePoint",
    "Vérifier les droits d'accès et les protections des documents RH avant l'usage de Copilot",
    "Préparer la note d'information du CSE sur le déploiement d'un outil d'IA",
  ],
  faq: [
    {
      q: "Copilot peut-il trier les CV à notre place ?",
      a: "Techniquement, il sait lire et comparer des CV. Juridiquement, le tri de candidatures relève des systèmes à haut risque de l'annexe III de l'AI Act, dont les obligations s'appliquent au 2 décembre 2027, et l'article L1221-8 du Code du travail impose déjà d'informer les candidats des méthodes utilisées. Réservez Copilot à la fiche de poste, à l'offre et à la grille d'entretien, et gardez la sélection entre les mains des recruteurs.",
    },
    {
      q: "Faut-il consulter le CSE avant de déployer Copilot ?",
      a: "Dans les entreprises d'au moins 50 salariés, l'article L2312-8 prévoit l'information et la consultation du CSE sur l'introduction de nouvelles technologies, et un déploiement de Copilot entre le plus souvent dans ce cadre. Quelle que soit la taille de l'entreprise, l'article L1222-4 interdit de collecter une information personnelle sur un salarié par un dispositif qu'il ne connaît pas. Faites valider la procédure par un juriste en droit social.",
    },
    {
      q: "Copilot peut-il ouvrir les dossiers du personnel ?",
      a: "Il n'affiche que ce que la personne qui l'utilise a le droit de consulter. Le risque vient des droits trop larges sur les sites SharePoint des RH. Les étiquettes de confidentialité de Microsoft Purview et une stratégie de protection contre la perte de données permettent d'exclure les dossiers du personnel du traitement par Copilot.",
    },
    {
      q: "Peut-on transcrire un entretien annuel ou un entretien disciplinaire dans Teams ?",
      a: "C'est possible, et la transcription devient alors une donnée conservée et accessible aux invités. Pour un entretien disciplinaire ou une réunion qui touche à la santé d'un salarié, choisissez « Uniquement pendant la réunion » dans la rubrique « Copilot et d'autres IA » des options de la réunion. Dans tous les cas, informez la personne avant l'entretien.",
    },
    {
      q: "Qu'est-ce qui s'applique déjà aujourd'hui dans l'AI Act pour les RH ?",
      a: "Depuis le 2 février 2025, l'interdiction de la reconnaissance des émotions au travail (article 5) et l'article 4 sur la maîtrise de l'IA par les personnes qui l'utilisent. Depuis le 2 août 2026, les obligations de transparence de l'article 50 pour les contenus diffusés au public. Les obligations des systèmes RH à haut risque arrivent le 2 décembre 2027, après le report voté dans le règlement Omnibus.",
    },
    {
      q: "Les données RH traitées par Copilot restent-elles en Europe ?",
      a: "Pour les utilisateurs européens, Microsoft s'engage à traiter les demandes dans la limite des données de l'UE, et les invites ne servent pas à entraîner les modèles de base. Les modèles Anthropic, que l'administrateur peut activer, font exception. Les fichiers déposés dans un agent sont stockés dans la région par défaut de votre environnement Microsoft 365.",
    },
    {
      q: "La formation convient-elle à une petite équipe RH sans juriste interne ?",
      a: "Oui. Nous présentons le cadre (Code du travail, AI Act, réglages Microsoft) pour que vous sachiez quelles questions poser, et nous travaillons les usages sûrs sur vos propres documents. Nous ne donnons pas de consultation juridique : pour un usage classé à haut risque ou une procédure devant le CSE, nous vous orientons vers un avocat en droit social.",
    },
    {
      q: "Comment faire financer la formation Copilot de l'équipe RH ?",
      a: "Masteria est certifié Qualiopi, condition pour une prise en charge par votre OPCO dans le cadre du plan de développement des compétences. Le tarif est de 1 980 € HT par jour, en intra jusqu'à 12 participants. Chaque participant reçoit une attestation, utile pour tenir le registre interne des formations à l'IA.",
    },
  ],
  sources: [
    { name: "Code du travail, article L1221-8 (information du candidat sur les méthodes de recrutement)", url: "https://code.travail.gouv.fr/code-du-travail/l1221-8" },
    { name: "Code du travail, article L1221-9 (collecte d'informations sur les candidats)", url: "https://code.travail.gouv.fr/code-du-travail/l1221-9" },
    { name: "Code du travail, article L1222-4 (collecte d'informations sur les salariés)", url: "https://code.travail.gouv.fr/code-du-travail/l1222-4" },
    { name: "Code du travail, article L2312-8 (consultation du CSE sur les nouvelles technologies)", url: "https://code.travail.gouv.fr/code-du-travail/l2312-8" },
    { name: "Règlement (UE) 2024/1689 sur l'intelligence artificielle : articles 5, 25, 26 et annexe III", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { name: "Règlement (UE) 2026/1744 (Omnibus numérique sur l'IA), JO du 24 juillet 2026", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ%3AL_202601744" },
    { name: "Microsoft Learn : données, confidentialité et sécurité pour Microsoft Copilot", url: "https://learn.microsoft.com/fr-fr/copilot/microsoft-365/microsoft-365-copilot-privacy" },
    { name: "Microsoft Learn : Purview et l'IA, stratégie « Protéger les données sensibles contre le traitement Copilot »", url: "https://learn.microsoft.com/fr-fr/purview/dspm-for-ai-considerations" },
    { name: "Microsoft Learn : sources de connaissances d'un agent Agent Builder", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-knowledge" },
    { name: "Microsoft Support : utiliser Copilot sans transcrire ni enregistrer une réunion Teams", url: "https://support.microsoft.com/fr-fr/office/utiliser-copilot-sans-enregistrer-de-r%C3%A9union-teams-a59cb88c-0f6b-4a20-a47a-3a1c9a818bd9" },
    { name: "Microsoft Support : récapitulatif dans Microsoft Teams", url: "https://support.microsoft.com/fr-fr/office/r%C3%A9capitulatif-dans-microsoft-teams-c2e3a0fe-504f-4b2c-bf85-504938f110ef" },
  ],
}
