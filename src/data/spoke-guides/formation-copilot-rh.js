// Contenu propre à /formation-copilot-rh (guide terrain, page propre). Rendu par SpokePage.
// Réécrit le 7 octobre 2026. Faits Microsoft : fiche FAITS-OUTILS du 07/10/2026 et pages Microsoft relevées
// le 28/09. Droit : Code du travail (code.travail.gouv.fr), AI Act et règlement Omnibus (UE) 2026/1744
// (en vigueur le 27/07/2026, annexe III reportée au 02/12/2027). Cas : etudes-de-cas.js, « industrie ».
export default {
  slug: 'formation-copilot-rh',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Copilot RH : recruter, informer les salariés et protéger les dossiers du personnel",
  metaTitle: "Formation Copilot RH | Masteria, certifié Qualiopi",
  metaDesc: "Formation Copilot RH : offres et notes dans Word, entretiens Teams bien réglés, agent pour les salariés, droit du travail et AI Act. Deux jours, Qualiopi.",
  resume: "La formation Copilot RH apprend à une équipe ressources humaines à confier à Microsoft Copilot les tâches sans enjeu juridique (offres d'emploi, notes, supports, réponses aux salariés) et à reconnaître les usages que le Code du travail et l'AI Act encadrent déjà. Le parcours tient en deux jours de sept heures, pour un service RH (douze places) ou pour une DRH en tête-à-tête, au tarif de 1 980 € HT par jour. Avec un organisme certifié Qualiopi comme Masteria, l'entreprise peut demander à son OPCO de financer la session ; celui-ci tranche selon les critères de la branche.",
  enBref: [
    { label: 'Formation', value: "Copilot appliqué aux ressources humaines : recrutement, questions des salariés, enquêtes internes, consultation du CSE et protection des dossiers" },
    { label: 'Durée', value: "Deux journées de sept heures ; la première pose le cadre juridique avant tout atelier sur des données du personnel" },
    { label: 'Formats', value: "Intra pour le service RH, jusqu'à douze participants, ou parcours individuel pour une DRH ; dans vos locaux ou en visioconférence" },
    { label: 'Tarif', value: "Tarif journalier de 1 980 € HT, identique de une à douze personnes" },
    { label: 'Financement', value: "Masteria est certifié Qualiopi ; votre OPCO décide de sa participation d'après les règles et le budget de la branche" },
    { label: 'Prérequis', value: "Un compte Microsoft 365 professionnel ; des documents RH anonymisés (fiche de poste, accord d'entreprise, résultats d'enquête) pour les ateliers" },
  ],
  prerequis: "Un compte Microsoft 365 professionnel ; quelques documents RH anonymisés à apporter (fiche de poste, accord d'entreprise, résultats d'enquête)",
  intro: "Les dossiers RH sont les plus sensibles de l'entreprise, et Microsoft Copilot (anciennement Microsoft 365 Copilot) affiche à chacun tout document que ses droits lui ouvrent. Le programme part de là. Il répartit les usages RH en quatre familles, du courant à l'interdit, et apprend à confier à Copilot les premiers sans approcher les derniers. Il prépare aussi le service à présenter le déploiement de Copilot au CSE, avec une note claire sur les données, les réglages et les usages exclus.",
  guide: {
    kicker: "Guide terrain",
    h2: "En RH, l'usage décide du niveau de risque et les droits d'accès décident de ce que Copilot voit",
    lead: "Le même Copilot rédige une offre d'emploi, ce qui ne pose aucune difficulté juridique, et peut classer des candidatures, ce que l'AI Act place dans sa catégorie haut risque. L'usage fixe la catégorie. Une seconde question tient au rangement des fichiers : Copilot montre toutes les données qu'une personne peut consulter, et un dossier RH mal partagé devient une réponse à la portée d'un collègue curieux. Ces deux sujets se règlent avant la première demande.",
    sections: [
      {
        h3: "Le Code du travail encadre déjà l'IA dans le recrutement et la gestion du personnel",
        paras: [
          "Trois articles s'appliquent dès aujourd'hui à tout outil d'IA utilisé en RH. L'article L1221-8 impose d'informer le candidat des méthodes d'aide au recrutement employées à son égard, avant leur mise en œuvre, et exige qu'elles restent pertinentes au regard de la finalité poursuivie. L'article L1221-9 interdit de recueillir une information personnelle sur un candidat par un moyen qu'on ne lui a pas fait connaître. L'article L1222-4 pose la même règle pour les salariés.",
          "À partir de 50 salariés, l'article L2312-8 oblige l'employeur à informer puis à consulter le CSE lorsqu'il fait entrer une technologie nouvelle dans l'entreprise. L'arrivée de Copilot relève le plus souvent de cette règle. Préparez la consultation avant d'attribuer les licences, avec votre juriste en droit social.",
        ],
      },
      {
        h3: "L'AI Act classe les usages RH, et l'Omnibus a déplacé son calendrier",
        paras: [
          "L'article 5 interdit depuis le 2 février 2025 de reconnaître les émotions des personnes sur leur lieu de travail. Selon l'annexe III, relèvent du haut risque les outils qui aident à recruter (cibler la diffusion d'une offre, filtrer ou évaluer des candidats), ceux qui pèsent sur une promotion, une rupture ou la répartition des tâches, et ceux qui jugent la performance des salariés.",
          "Le règlement dit Omnibus ((UE) 2026/1744), applicable depuis le 27 juillet 2026, repousse ces règles au 2 décembre 2027. Deux articles méritent pourtant votre attention dès maintenant. L'article 25 fait du déployeur un fournisseur quand il détourne un outil généraliste vers un usage à haut risque : demander à Copilot de classer des candidatures peut suffire à vous faire endosser ce rôle. L'article 26 imposera d'en avertir les représentants élus et chaque salarié visé avant toute mise en service.",
          "Le règlement contient aussi, depuis février 2025, un article 4 qui demande à l'employeur d'aider les salariés utilisateurs d'IA à en acquérir la maîtrise. Aucun certificat n'est requis ; le service RH documente l'effort en gardant la liste des sessions suivies.",
        ],
      },
      {
        h3: "Les sites SharePoint des RH se rangent avant l'arrivée de Copilot",
        paras: [
          "Copilot n'affiche que les données que l'utilisateur peut consulter, ce qui protège tant que les droits sont justes. Un fichier des rémunérations partagé il y a trois ans par un lien ouvert à toute l'entreprise devient la réponse à « quel est le salaire moyen au service achats ». Avant le déploiement, demandez à l'informatique de passer en revue les partages des sites RH.",
          "Dans Microsoft Purview, la console de conformité de Microsoft 365, une stratégie de protection contre la perte de données peut tenir à l'écart de Copilot tout document marqué d'un niveau de confidentialité donné, par exemple celui des dossiers individuels.",
          "Vos demandes et les réponses de Copilot sont conservées avec les autres contenus de l'entreprise, et les administrateurs peuvent les retrouver par la recherche de contenu de Purview. Une demande ne contient donc jamais ce que vous n'écririez pas dans un mail : un diagnostic médical, le motif précis d'un arrêt, un soupçon non établi.",
        ],
      },
      {
        h3: "Pour les entretiens, la transcription se décide avant la réunion",
        paras: [
          "Une transcription Teams est une donnée personnelle conservée. Copilot peut l'interroger ensuite, et chaque invité de l'organisation retrouve son contenu dans l'onglet Récapitulatif.",
          "Pour un recrutement, prévenez le candidat dans l'invitation si vous transcrivez, comme le veut l'article L1221-8. Pour un entretien disciplinaire ou une réunion où l'on évoque la santé d'un salarié, réglez la réunion sur « Uniquement pendant la réunion », dans la rubrique « Copilot et d'autres IA » : Copilot aide en séance et rien n'est transcrit. Pour une séance du CSE, le réglage se décide avec le secrétaire, qui rédige le procès-verbal.",
        ],
      },
      {
        h3: "Un agent RH répond aux salariés en respectant les droits de chacun",
        paras: [
          "Agent Builder crée sans code un agent qui répond aux questions courantes : jours de congés, mutuelle, télétravail, notes de frais. Ajoutez comme connaissances le règlement intérieur, les accords d'entreprise et les pages de l'intranet RH, en passant par SharePoint : l'agent applique alors les droits de chaque salarié, et un document qui lui est fermé n'entre pas dans sa réponse.",
          "Le réglage qui limite l'agent aux sources indiquées réduit les réponses inventées, mais Microsoft reconnaît qu'Agent Builder ne bloque pas complètement les connaissances générales du modèle. Demandez à l'agent de citer l'article de l'accord qu'il applique et de terminer par l'adresse de contact RH. Pour aller plus loin, Microsoft fournit un agent prêt à adapter, Employee Self-Service, bâti sur Copilot Studio, qui se place devant des outils comme Workday ou ServiceNow.",
        ],
      },
    ],
    table: {
      caption: "Les usages RH de Copilot, du plus courant au plus encadré, au 7 octobre 2026",
      headers: ["Usage RH", "Fonction Copilot", "Cadre et vigilance"],
      rows: [
        ["Rédiger une offre d'emploi depuis la fiche de poste", "Word, « Créer un brouillon avec Copilot », fiche désignée avec /", "Usage courant ; critères relus pour écarter toute mention discriminatoire"],
        ["Répondre aux salariés sur les accords d'entreprise", "Agent Agent Builder, connaissances rangées dans SharePoint", "Un fichier téléversé s'affiche pour quiconque questionne l'agent"],
        ["Lire les commentaires d'une enquête d'engagement", "Excel, volet Copilot : thèmes et tonalité", "Données anonymisées, résultats par service, aucune conclusion individuelle"],
        ["Résumer un entretien de recrutement transcrit", "Teams, onglet Récapitulatif", "Candidat prévenu (L1221-8) ; aucun classement entre candidats"],
        ["Trier ou noter des candidatures", "À écarter avec un outil généraliste", "Haut risque au sens de l'annexe III, obligations au 2 décembre 2027"],
        ["Déduire l'humeur ou la motivation d'un salarié de ses messages", "Aucune", "Reconnaissance des émotions au travail interdite depuis le 2 février 2025"],
      ],
    },
    cas: {
      h3: "Cas pratique : la note d'information du CSE sur l'arrivée de Copilot",
      contexte: "Imaginons la DRH d'un transporteur de 180 salariés, titulaire de la licence Microsoft Copilot. La direction veut équiper quarante personnes au premier trimestre. La DRH prépare l'information-consultation du CSE prévue par l'article L2312-8.",
      etapes: [
        "Elle ouvre un bloc-notes Copilot et y range comme références le mémo de cadrage signé par la direction, la charte informatique et les notes de la séance où l'informatique a présenté ses réglages.",
        "Dans ce bloc-notes, elle colle la demande ci-dessous, puis fait créer un document Word à partir de la réponse.",
        "Elle relit la note avec le responsable informatique et avec le DPO.",
        "Elle part du gabarit PowerPoint de la société pour obtenir de Copilot dix diapositives tirées de la note Word.",
        "Avant d'envoyer la convocation, elle convient avec le secrétaire du CSE du réglage de transcription de la séance.",
      ],
      prompt: "Je dirige les ressources humaines d'un transporteur de 180 salariés. La direction prévoit d'équiper quarante salariés de Microsoft Copilot au premier trimestre. Je rédige la note que les élus du CSE recevront avant de rendre leur avis sur l'arrivée de Copilot.\n\nUtilise seulement les références de ce bloc-notes. Écris une note de quatre pages au plus, dans une langue claire pour des élus qui ne sont pas spécialistes, en six parties :\n1. Le projet : services concernés, nombre de licences, calendrier.\n2. Les usages prévus, tâche par tâche, puis les usages exclus. Indique explicitement que Copilot ne servira pas à trier des candidatures, à évaluer des salariés ni à analyser leurs messages.\n3. Les données que Copilot peut consulter et les règles d'accès qui s'appliquent.\n4. Les réglages retenus pour les réunions Teams et la conservation des échanges avec Copilot.\n5. Les effets possibles sur la charge et l'organisation du travail, et la formation prévue pour les salariés équipés.\n6. Les questions que le CSE posera sans doute, avec les réponses que les références permettent d'apporter.\n\nQuand une information manque, écris « à préciser par la direction » au lieu de la supposer. Ne cite aucun article de loi que je ne t'ai pas fourni.",
      resultat: "Copilot produit une note en six parties, avec la mention « à préciser par la direction » partout où le dossier est incomplet. La DRH vérifie trois points. La description des droits d'accès doit correspondre à ce que l'informatique a configuré. Les réglages Teams décrits doivent être ceux qui s'appliqueront le jour de la séance. Aucune phrase ne doit promettre davantage que ce que la direction a décidé. Sur la procédure de consultation elle-même, l'avis d'un juriste en droit social reste nécessaire.",
    },
    pieges: [
      {
        titre: "La grille des salaires téléversée dans l'agent RH",
        texte: "Un fichier téléversé depuis l'ordinateur dans un agent s'affiche pour toute personne qui pose une question à l'agent, même sans droit sur le document d'origine. Réservez ce mode aux documents ouverts à tous, comme le règlement intérieur, et passez par SharePoint pour le reste.",
      },
      {
        titre: "Un article du Code du travail mal recopié",
        texte: "Copilot cite volontiers un numéro d'article, et il lui arrive de se tromper de numéro ou de reprendre une version abrogée. Ouvrez chaque article cité sur Légifrance avant de le reprendre dans une note ou une réponse à un salarié.",
      },
      {
        titre: "Une synthèse d'entretiens qui glisse vers l'évaluation",
        texte: "Résumer les comptes rendus d'entretiens annuels d'un service pour bâtir le plan de formation rend service. Demander ensuite quels salariés semblent les moins engagés revient à évaluer des personnes, ce que l'annexe III range dans le haut risque. Travaillez sur des résultats agrégés par métier ou par service.",
      },
      {
        titre: "Claude activé sans mesurer où partent les données",
        texte: "L'administrateur peut ouvrir Copilot aux modèles d'Anthropic, qui restent désactivés par défaut en Europe. Les demandes confiées à ces modèles quittent alors le périmètre européen où Microsoft garde d'ordinaire les données. Pour un service RH, la question se tranche avant l'activation avec le DPO, le délégué à la protection des données de l'entreprise.",
      },
    ],
  },
  audience: [
    { title: "DRH et responsables RH de PME et d'ETI", desc: "Vous décidez de l'usage de Copilot dans la fonction RH et vous préparez la consultation du CSE. Vous voulez connaître ce que le droit social et le règlement européen permettent dès aujourd'hui, et ce qu'ils interdisent." },
    { title: "Chargés de recrutement", desc: "Vous rédigez des offres, menez des entretiens en visio et échangez avec les candidats. Vous voulez écrire plus vite tout en restant en dehors des usages classés à haut risque." },
    { title: "Gestionnaires RH, paie et formation", desc: "Vous répondez chaque jour aux questions des salariés et produisez les documents du service. Vous voulez un agent RH fiable et des synthèses d'enquête qui restent collectives." },
  ],
  useCases: [
    { icon: '📝', title: "Offre d'emploi tirée de la fiche de poste", desc: "Word rédige l'offre à partir de la fiche désignée avec /, puis le recruteur relit chaque critère." },
    { icon: '🤝', title: "Agent pour les questions des salariés", desc: "Un agent répond sur les congés, la mutuelle ou le télétravail à partir des accords rangés dans SharePoint, en citant l'article appliqué." },
    { icon: '📊', title: "Enquête d'engagement lue par service", desc: "Le volet Copilot d'Excel dégage les thèmes et la tonalité des commentaires anonymisés, sans descendre au niveau de la personne." },
    { icon: '🎙️', title: "Entretiens Teams réglés à l'avance", desc: "Transcription annoncée pour un recrutement, « Uniquement pendant la réunion » pour un entretien disciplinaire." },
    { icon: '📋', title: "Dossier d'information du CSE", desc: "Un bloc-notes Copilot réunit les pièces et produit la note remise aux élus avant la consultation." },
    { icon: '📧', title: "Réponses aux candidats", desc: "Outlook prépare les brouillons de réponse aux candidatures, que le recruteur personnalise avant l'envoi." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Poser le cadre juridique de l'IA dans la fonction RH", duration: '1h30',
      description: "L'usage fixe le niveau de risque. Ce module rassemble les règles de droit social et de droit européen qui pèsent sur la fonction RH au 7 octobre 2026.",
      items: [
        "Code du travail : information du candidat (L1221-8), collecte d'informations sur candidats et salariés (L1221-9, L1222-4)",
        "CSE informé puis consulté sur toute technologie nouvelle (L2312-8)",
        "AI Act : émotions au travail interdites depuis février 2025, usages RH à haut risque de l'annexe III",
        "Omnibus 2026/1744 : annexe III au 2 décembre 2027, articles 25 et 26, article 4 et registre des formations",
      ],
      exercise: "Vous classez les usages de l'IA que votre service pratique ou envisage, du plus courant au plus encadré.",
    },
    {
      day: 1, title: "Module 2 · Rédiger les documents du recrutement", duration: '2h',
      description: "La rédaction est l'usage RH de Copilot qui soulève le moins de questions juridiques. Vous produisez offre, grille et réponses à partir de vos propres documents.",
      items: [
        "Méthode de demande appliquée au recrutement : poste, public visé, critères, ton de l'entreprise",
        "Offre relue pour écarter toute mention discriminatoire",
        "Grille d'entretien par compétences tirée de la fiche de poste",
        "Réponses aux candidats préparées en brouillon dans Outlook",
      ],
      exercise: "Vous rédigez l'offre et la grille d'entretien d'un poste ouvert à partir de votre fiche de poste.",
    },
    {
      day: 1, title: "Module 3 · Fixer la limite de Copilot dans la sélection", duration: '2h',
      description: "Classer des candidatures avec un outil généraliste change la nature de l'usage. Vous redessinez le processus pour que la sélection reste aux recruteurs.",
      items: [
        "Pourquoi le tri ou la notation de candidatures relève de l'annexe III",
        "Article 25 : l'employeur qui détourne un outil devient fournisseur d'un système à haut risque",
        "Information du candidat sur les méthodes utilisées, avant l'entretien",
        "Résumé d'un entretien transcrit, sans note comparative entre candidats",
      ],
      exercise: "Vous réécrivez votre processus de recrutement en indiquant, étape par étape, ce que Copilot fait et ce qui reste aux recruteurs.",
    },
    {
      day: 1, title: "Module 4 · Régler Teams pour chaque type d'entretien", duration: '1h30',
      description: "Une transcription est une donnée personnelle conservée et lisible par les invités. Le réglage se décide avant chaque type d'entretien.",
      items: [
        "Transcription, onglet Récapitulatif et accès des invités de l'organisation",
        "« Uniquement pendant la réunion » pour un entretien disciplinaire ou une réunion qui touche à la santé",
        "Phrase d'information du candidat ou du salarié avant de transcrire",
        "Séance du CSE : réglage décidé avec le secrétaire du comité",
      ],
      exercise: "Vous définissez le réglage Copilot de chacun de vos types d'entretiens et de réunions RH, avec la phrase d'information correspondante.",
    },
    {
      day: 2, title: "Module 5 · Protéger les données du personnel dans Microsoft 365", duration: '1h30',
      description: "Copilot montre chaque fichier que son interlocuteur a le droit d'ouvrir. Des dossiers RH mal partagés deviennent des réponses, sauf si les droits et les protections sont en place.",
      items: [
        "La règle des droits appliquée aux sites SharePoint des RH",
        "Repérage des fichiers sensibles partagés trop largement",
        "Niveaux de confidentialité et stratégie Purview qui tient les dossiers individuels hors de Copilot",
        "RGPD : demandes conservées et consultables par les administrateurs, donc jamais de donnée de santé ni de motif d'arrêt",
      ],
      exercise: "Vous dressez la liste des emplacements de vos documents RH sensibles et des questions à poser à votre informatique.",
    },
    {
      day: 2, title: "Module 6 · Construire un agent RH pour les questions des salariés", duration: '2h',
      description: "Bien construit, un agent répond sur les accords avec les droits de chaque salarié. Mal construit, il diffuse un fichier à toute l'entreprise.",
      items: [
        "Agent Builder : instructions et connaissances issues de SharePoint (accords, règlement intérieur, intranet)",
        "Fichier téléversé ou fichier SharePoint : qui peut lire quoi",
        "Agent limité aux sources indiquées, qui cite l'article appliqué",
        "Questions pièges posées avant le partage, et place de l'agent Employee Self-Service",
      ],
      exercise: "Vous créez un agent de questions RH sur vos accords d'entreprise et le testez sur les questions que vos salariés posent le plus souvent.",
    },
    {
      day: 2, title: "Module 7 · Lire une enquête et monter le dossier du CSE", duration: '2h',
      description: "Copilot aide à lire une enquête et à préparer une consultation, à condition de rester au niveau du collectif.",
      items: [
        "Commentaires d'enquête anonymisés résumés dans Excel : thèmes et tonalité par service",
        "Aucune conclusion sur un salarié identifiable",
        "Dossier d'information du CSE monté dans un bloc-notes Copilot",
        "Diapositives pour le CSE construites depuis la note, au gabarit de la société",
      ],
      exercise: "Vous préparez la note d'information de votre CSE sur un projet d'outil numérique, à partir de vos documents de cadrage.",
    },
    {
      day: 2, title: "Module 8 · Écrire la charte Copilot de la fonction RH", duration: '1h30',
      description: "Le service RH fixe ses propres règles avant de les proposer au reste de l'entreprise. Vous repartez avec une charte prête à présenter et un plan pour le mois qui suit.",
      items: [
        "Usages autorisés, encadrés et exclus",
        "Relectures obligatoires : références juridiques, courriers individuels, données chiffrées",
        "Modèles activés par l'informatique, dont ceux d'Anthropic, traités hors du périmètre européen",
        "Plan à trente jours : trois usages courants installés, l'agent RH ouvert à un premier service",
      ],
      exercise: "Vous écrivez les règles d'emploi de Copilot propres au service RH, prêtes à passer devant la direction puis devant le CSE.",
    },
  ],
  objectives: [
    "Le participant sait classer un usage RH de Copilot selon le Code du travail et l'AI Act : courant, encadré, à haut risque ou interdit.",
    "Le participant sait rédiger une offre d'emploi et une grille d'entretien avec Copilot depuis une fiche de poste.",
    "Le participant sait régler une réunion Teams d'après la sensibilité de l'entretien.",
    "Le participant sait créer et tester un agent de questions RH appuyé sur des sources SharePoint.",
    "Le participant sait vérifier les droits d'accès et les protections des documents RH avant l'usage de Copilot.",
    "Le participant sait préparer la note d'information du CSE sur le déploiement d'un outil d'IA.",
  ],
  faq: [
    {
      q: "Copilot peut-il trier les CV à notre place ?",
      a: "Techniquement, il sait lire et comparer des CV. Juridiquement, le tri de candidatures figure dans l'annexe III, la liste des usages que le règlement européen juge les plus sensibles, et ses obligations démarrent le 2 décembre 2027 ; l'article L1221-8 oblige déjà à prévenir les candidats des méthodes employées. Un employeur qui détourne un outil généraliste vers cet usage peut en outre devenir fournisseur au sens de l'article 25. Réservez Copilot à la fiche de poste, à l'offre et à la grille d'entretien.",
    },
    {
      q: "Faut-il consulter le CSE avant de déployer Copilot ?",
      a: "Oui à partir de 50 salariés : l'article L2312-8 fait du CSE un passage obligé quand une technologie nouvelle arrive dans l'entreprise, et Copilot en fait le plus souvent partie. Quelle que soit la taille de l'entreprise, l'article L1222-4 interdit de collecter une information personnelle sur un salarié par un dispositif qu'il ne connaît pas. La formation vous aide à préparer la note d'information ; faites valider la procédure par un juriste en droit social.",
    },
    {
      q: "Copilot peut-il ouvrir les dossiers du personnel ?",
      a: "Il n'affiche que ce que la personne qui l'interroge a le droit de consulter. Le risque vient des droits trop larges posés depuis des années sur les sites SharePoint des RH. Les étiquettes de confidentialité de Microsoft Purview, associées à une stratégie de protection contre la perte de données, permettent d'exclure les dossiers individuels du traitement par Copilot. Le service RH dresse la liste de ces emplacements et la transmet à l'informatique avant l'ouverture des licences.",
    },
    {
      q: "Peut-on transcrire un entretien annuel ou disciplinaire dans Teams ?",
      a: "C'est possible, et la transcription devient alors une donnée conservée, accessible aux invités de l'organisation. Pour un entretien disciplinaire ou une réunion qui touche à la santé d'un salarié, choisissez « Uniquement pendant la réunion » dans la rubrique « Copilot et d'autres IA » des options : Copilot aide pendant la séance et rien n'est conservé. Dans tous les cas, informez la personne avant l'entretien, et gardez une règle écrite par type d'entretien.",
    },
    {
      q: "Qu'est-ce qui s'applique déjà de l'AI Act pour les RH ?",
      a: "Deux règles depuis le 2 février 2025 : l'interdiction de détecter les émotions des salariés (article 5) et l'article 4, qui charge l'employeur d'aider ses équipes à maîtriser les outils d'IA qu'elles emploient. L'article 50 impose en outre, depuis le 2 août 2026, la transparence sur les contenus générés montrés au public. Le volet haut risque, qui couvre le recrutement et l'évaluation, attendra le 2 décembre 2027, à la suite du report inscrit dans l'Omnibus.",
    },
    {
      q: "Les données RH traitées par Copilot restent-elles en Europe ?",
      a: "Pour les salariés basés en Europe, Microsoft traite les demandes dans l'Union, et aucune n'alimente l'entraînement de ses modèles. Les modèles d'Anthropic font exception : coupés par défaut dans l'Union, ils peuvent être ouverts par l'administrateur, et les demandes qui leur parviennent quittent alors ce périmètre. Pour un service RH, cette ouverture se décide avec le DPO, en connaissant ce compromis.",
    },
    {
      q: "La formation convient-elle à une petite équipe RH sans juriste interne ?",
      a: "Oui. Nous présentons le cadre (droit social, droit européen de l'IA, réglages Microsoft) pour que vous sachiez quelles questions poser, et nous travaillons les usages sûrs sur vos propres documents anonymisés. Masteria ne donne pas de consultation juridique : pour un usage classé à haut risque ou une procédure devant le CSE, nous vous orientons vers un avocat en droit social. La charte rédigée au dernier module vous sert de base de discussion avec lui.",
    },
    {
      q: "Comment faire financer la formation Copilot RH ?",
      a: "Votre OPCO peut participer, car Masteria est certifié Qualiopi, dans la catégorie « actions de formation » ; il décide selon son barème et l'argent encore disponible. Le tarif journalier, 1 980 € HT, s'applique aussi bien à une DRH seule qu'à un service de douze. Chaque participant reçoit une attestation, qui alimente la liste interne des sessions d'IA que l'obligation de maîtrise de l'IA invite à tenir.",
    },
  ],
  tarifs: {
    titre: "Ce que recouvre le prix pour un service RH",
    paras: [
      "La préparation se fait sur vos propres documents, anonymisés quand il le faut : une fiche de poste ouverte, un accord d'entreprise, les résultats d'une enquête interne et votre charte informatique. Le formateur les relit avant la session et adapte les exercices à votre convention collective et à votre organisation.",
      "Exemple : un service RH de cinq personnes (la DRH, deux chargés de recrutement, une gestionnaire paie et un responsable formation). Le parcours complet, pour tout le service, coûte 3 960 € HT, soit 792 € HT par personne. Une DRH seule suit le parcours en individuel au même prix journalier. L'OPCO de l'entreprise examine ensuite le dossier selon les règles de sa branche.",
    ],
  },
  apres: {
    titre: "Après la formation, un agent RH construit sur vos accords",
    texte: "Une fois la charte adoptée, Masteria peut construire pour votre service un agent alimenté par vos accords et votre intranet, qui renseigne les salariés, une compétence qui prépare chaque trimestre la synthèse anonymisée de vos enquêtes, ou un assistant qui aide les managers à préparer leurs entretiens sans rien évaluer à leur place. L'outil prend place dans votre tenant Microsoft 365 et respecte vos règles d'accès. Il fait l'objet d'un devis au forfait après cadrage ; cet outil n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Dites-nous où en est votre projet Copilot : nous partons de votre calendrier de déploiement et de la date du prochain CSE.",
    fin: {
      titre: "Construisons la session autour de vos documents RH",
      texte: "Indiquez-nous la taille du service RH, l'effectif de l'entreprise et l'état de votre déploiement Copilot. Nous revenons avec un programme qui tient compte de votre calendrier social et des dates possibles.",
    },
  },
  terrain: {
    titre: "Dans un groupe industriel, des managers appliquent Copilot à leurs dossiers RH",
    texte: "Entre juillet et septembre 2026, Masteria a formé à Copilot les managers pilotes d'un groupe international du packaging, sur des ateliers construits avec les fichiers du groupe, dont une base RH travaillée dans Excel. Le périmètre de sécurité avait été fixé au cadrage avec le Data manager : OneDrive et SharePoint, jamais les serveurs partagés. Deux mois plus tard, une manager raconte qu'elle s'en sert pour analyser des fichiers et chiffrer ce que rapportera le déploiement de nouveaux outils RH.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  liensAssocies: [
    { label: "Toutes les formations Microsoft Copilot", href: '/formation-microsoft-copilot' },
    { label: "Formation IA pour les ressources humaines, tous outils", href: '/formation-ia-ressources-humaines' },
    { label: "L'AI Act appliqué au recrutement et à l'évaluation", href: '/blog/ai-act-rh-conformite-recrutement-evaluation' },
    { label: "Former la DRH à piloter les compétences à l'ère de l'IA", href: '/formation-ia-drh-plan-competences' },
    { label: "Claude pour les équipes RH", href: '/formation-claude-ressources-humaines' },
  ],
  sources: [
    { name: "Code du travail numérique : article L1221-8, information du candidat", url: "https://code.travail.gouv.fr/code-du-travail/l1221-8" },
    { name: "Code du travail numérique : article L1221-9, collecte sur les candidats", url: "https://code.travail.gouv.fr/code-du-travail/l1221-9" },
    { name: "Code du travail numérique : article L1222-4, collecte sur les salariés", url: "https://code.travail.gouv.fr/code-du-travail/l1222-4" },
    { name: "Code du travail numérique : article L2312-8, consultation du CSE", url: "https://code.travail.gouv.fr/code-du-travail/l2312-8" },
    { name: "EUR-Lex : AI Act, articles 4, 5, 25, 26 et annexe III", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { name: "EUR-Lex : règlement Omnibus (UE) 2026/1744, report de l'annexe III", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    { name: "Microsoft Learn, en anglais : Anthropic sous-traitant de Copilot, désactivé par défaut en Europe", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
    { name: "Microsoft Learn : Purview et la protection des fichiers sensibles face à Copilot", url: "https://learn.microsoft.com/fr-fr/purview/dspm-for-ai-considerations" },
    { name: "Microsoft Learn, en anglais : connaissances d'un agent et droits des utilisateurs", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-knowledge" },
    { name: "Microsoft Learn : l'agent Employee Self-Service", url: "https://learn.microsoft.com/fr-fr/microsoft-365/copilot/employee-self-service/overview" },
    { name: "Aide Microsoft : réunion Teams avec Copilot mais sans transcription", url: "https://support.microsoft.com/fr-fr/office/utiliser-copilot-sans-enregistrer-de-r%C3%A9union-teams-a59cb88c-0f6b-4a20-a47a-3a1c9a818bd9" },
  ],
}
