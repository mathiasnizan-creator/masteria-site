// Contenu propre à /formation-ia-dirigeants (page propre). Rendu par SpokePage.
// Journée de formation pour dirigeants, au tarif standard (1 980 € HT la journée, intra jusqu'à 12 ou individuel).
// La grille COMEX (1 980 € HT la demi-journée) ne concerne que /formation-ia-comex.
// Prix des licences : fiche de faits du 07/10/2026 (pages tarifs France de Microsoft et de Google, page tarifs de Mistral AI
// vérifiées le 07/10 ; ChatGPT Business d'après un relevé tiers, HT ou TTC non confirmé ; Claude Team d'après claude-facts.js du 05/10).
// AI Act : section 7 de la même fiche. Étude de cas : src/data/etudes-de-cas.js, cas « industrie ».
export default {
  slug: 'formation-ia-dirigeants',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation IA pour dirigeants : une journée pour décider où l'IA sert votre entreprise",
  metaTitle: 'Formation IA dirigeants : décider et piloter | Masteria',
  metaDesc: "Formation IA pour dirigeants en 1 jour : votre propre usage, prix des licences et des agents, données, AI Act, plan à 90 jours. 1 980 € HT, Qualiopi.",
  keywords: "formation ia dirigeants, formation intelligence artificielle dirigeant, formation ia codir, formation ia chef d'entreprise, ia pour dirigeants pme, stratégie ia dirigeant, formation ia direction générale",
  resume: "La formation IA pour dirigeants donne en une journée à un chef d'entreprise, ou à son comité de direction, ce qu'il lui faut pour décider : la pratique de l'IA sur ses propres dossiers, le coût réel des licences et des agents, les règles sur les données et l'AI Act, puis trois chantiers inscrits dans un plan à 90 jours. Le tarif, 1 980 € HT, s'applique en tête-à-tête comme pour un cercle de douze dirigeants au plus, dans vos bureaux ou en visioconférence ; un financement par l'OPCO reste possible, à l'appréciation de ses instances.",
  enBref: [
    { label: 'Formation', value: "L'intelligence artificielle vue depuis la direction : usage personnel, arbitrages, budget, cadre et plan d'action" },
    { label: 'Durée', value: "Sept heures réparties en quatre modules, chez vous, dans une salle louée ou par visioconférence" },
    { label: 'Public', value: "Dirigeants de PME et d'ETI, membres de comité de direction, gérants qui décident seuls" },
    { label: 'Tarif', value: "1 980 € HT la journée, en tête-à-tête ou pour un groupe de douze dirigeants au maximum" },
    { label: 'Financement', value: "OPCO pour un dirigeant salarié, fonds d'assurance formation pour un non-salarié, selon les règles de chacun ; Masteria est certifié Qualiopi" },
    { label: 'Prérequis', value: "Aucun ; apporter deux ou trois documents de direction récents, anonymisés si besoin" },
  ],
  intro: "Un dirigeant n'a pas besoin de devenir expert en intelligence artificielle. Il doit pouvoir répondre à quatre questions que ses équipes, ses clients et son conseil lui posent déjà : à quoi l'IA sert dans son entreprise, ce qu'elle coûte au total, où vont les données, et qui en répond. Cette journée y répond avec ses propres dossiers. Le matin, il se sert lui-même d'un assistant sur une note, un compte rendu ou un courrier qu'il doit traiter cette semaine, ce qui lui donne la mesure de l'outil et de ses erreurs. L'après-midi, il lit le prix des licences et des agents au 7 octobre 2026, fixe les règles qui protègent l'entreprise et choisit trois chantiers, chacun avec un responsable, une date et une mesure.",
  guide: {
    kicker: 'Guide terrain',
    h2: "Six repères pour qu'une direction tranche ses choix d'IA sur pièces",
    lead: "Les décisions sur l'IA arrivent souvent par morceaux : une demande de licences de la DSI, un service qui teste un outil gratuit, un fournisseur qui propose un agent, une question du comité social et économique. Prises une par une, elles dessinent une politique que personne n'a choisie. La journée remet ces décisions dans l'ordre, en commençant par la pratique du dirigeant lui-même.",
    sections: [
      {
        h3: "Le dirigeant commence par se servir de l'outil sur ses propres dossiers",
        paras: [
          "Un dirigeant qui n'a jamais confié une tâche à un assistant juge mal les projets qu'on lui soumet : il surestime ce que l'outil fait seul, ou il le sous-estime. La première heure corrige cela. Chacun traite un document qu'il a apporté, comme le rapport d'activité du trimestre à résumer pour le conseil, la préparation d'un comité ou un courrier délicat à un client, puis compare le résultat avec ce qu'il aurait écrit.",
          "L'exercice montre aussi les erreurs. Un modèle de langage enchaîne les mots les plus probables, et la vraisemblance ne garantit pas l'exactitude : un chiffre déplacé, une date inventée, une citation approximative passent facilement dans une note bien tournée. Le dirigeant qui a vu ces erreurs sur ses propres pièces sait quelles relectures exiger de ses équipes.",
        ],
      },
      {
        h3: "Le prix d'un siège se compare, ligne par ligne",
        paras: [
          "Les offres d'entreprise se paient par utilisateur et par mois, avec des différences qui comptent à l'échelle d'une équipe. Au 7 octobre 2026, la grille française de Microsoft fixe la licence Microsoft Copilot des grandes entreprises à 26 € HT mensuels, sur un engagement d'un an, et Microsoft Copilot Business, réservé aux structures de 300 postes ou moins, à 18,20 € HT. Pour quarante salariés, cette seconde formule représente 8 736 € HT par an. Copilot Chat, compris dans Microsoft 365, répond déjà sans supplément en s'appuyant sur internet et sur les documents qu'on lui transmet.",
          "Chez Google, Gemini est inclus dans les éditions de Workspace : Business Standard est affichée à 13,60 € par utilisateur et par mois en engagement annuel. Vibe Team chez Mistral AI, Claude Team chez Anthropic et ChatGPT Business chez OpenAI se paient à part, avec des prix publiés en euros ou en dollars selon l'éditeur. Le bon calcul part de l'outil déjà en place, car la suite bureautique de l'entreprise réduit ou élargit le choix.",
        ],
      },
      {
        h3: "Les agents se paient à l'usage, et leur budget se pilote",
        paras: [
          "Un agent (un assistant qui enchaîne plusieurs étapes, comme lire un mail, chercher un document et préparer une réponse) se facture souvent en plus de la licence. Chez Microsoft, Copilot Cowork est payé selon la consommation, et Copilot Studio se vend notamment par pack de 25 000 crédits à 173,30 € HT par mois. Chez OpenAI, chaque exécution d'un agent d'espace de travail consomme entre cinq et vingt-cinq crédits dans un cas courant, d'après l'éditeur.",
          "Ces montants restent modestes pour un essai et grimpent vite avec un agent mal réglé qui tourne toutes les heures. La direction fixe donc trois choses avant tout lancement : le périmètre de l'essai, un plafond de dépense mensuel, et la personne qui suit la consommation chaque semaine.",
        ],
      },
      {
        h3: "Les données de l'entreprise suivent les réglages du compte",
        paras: [
          "Un salarié qui colle un contrat dans un compte ChatGPT gratuit expose davantage l'entreprise qu'un salarié qui travaille dans un espace Business : sur les offres gratuites et individuelles, les conversations peuvent alimenter l'entraînement des modèles jusqu'à ce que l'utilisateur décoche le réglage, ce que les offres d'entreprise font d'office. La première décision de la direction est donc simple à formuler : un outil fourni par l'entreprise, et aucun document interne sur un compte personnel.",
          "Le déploiement lui-même a ses pièges. Microsoft rappelle que Copilot parcourt tous les fichiers auxquels un salarié a accès : un dossier SharePoint partagé trop largement devient lisible par l'assistant de chacun. Un audit des droits d'accès précède donc l'ouverture des licences. Dans l'Union européenne, les modèles Claude intégrés à Copilot restent éteints tant que l'administrateur ne les a pas allumés, et ils sortent alors du périmètre de données européen de Microsoft : leur activation relève donc d'une décision de la direction.",
        ],
      },
      {
        h3: "L'AI Act engage la direction sur deux points dès aujourd'hui",
        paras: [
          "Le premier est l'article 4. Dans sa version applicable depuis l'Omnibus du 27 juillet 2026, il attend de l'entreprise utilisatrice des actions concrètes pour faire monter ses équipes en compétence sur ces outils, sans niveau individuel imposé ni certificat. Un plan de formation daté et un registre des sessions suivies en sont la trace la plus simple. Le second est la transparence, exigée par l'article 50 depuis l'été 2026 : un assistant ouvert au public sur votre site doit se présenter comme tel, et un visuel réaliste généré par l'IA doit être signalé.",
          "Une troisième échéance se prépare. Les usages qui touchent à l'emploi, par exemple la présélection de CV ou la notation des collaborateurs, relèveront du régime à haut risque le 2 décembre 2027. Une direction qui laisse ses équipes tester ces usages aujourd'hui prend un risque au regard du RGPD dès maintenant, et d'une mise en conformité plus lourde demain.",
        ],
      },
      {
        h3: "Le gain se mesure en temps, sur des tâches nommées",
        paras: [
          "Les promesses de gain en pourcentage circulent beaucoup et se vérifient rarement. La journée propose une méthode plus sobre : choisir trois tâches précises, relever le temps qu'elles prennent aujourd'hui, refaire la mesure trente jours après la mise en place de l'outil. Le gain se constate en heures ; la direction le convertit en euros avec ses propres coûts, et décide ensuite d'étendre ou d'arrêter.",
          "Cette mesure sert aussi à arbitrer entre les chantiers. Une tâche fréquente, simple et peu risquée passe en premier ; une tâche rare, sensible ou dépendante d'un logiciel métier attend une deuxième vague, souvent après un diagnostic plus poussé.",
        ],
      },
    ],
    table: {
      caption: "Ce que coûte un siège d'assistant IA en entreprise, prix publics relevés le 7 octobre 2026",
      headers: ['Offre', 'Prix affiché', 'À savoir'],
      rows: [
        ['Copilot Chat, compris dans Microsoft 365', 'Sans supplément', "Cherche sur internet et dans les documents transmis"],
        ['Microsoft Copilot, grandes entreprises', "26 € HT par mois, payé à l'année ; 27,30 € HT en paiement mensuel, engagement d'un an", "Lit mails, fichiers et réunions ; affiché en France sous son nom d'avant le renommage"],
        ['Microsoft Copilot Business, 300 utilisateurs au plus', "18,20 € HT par mois, payé à l'année ; 21,84 € HT en paiement mensuel, engagement d'un an", "Remise à 15,60 € HT sur douze mois pour qui est déjà abonné à Microsoft 365, offre ouverte jusqu'au 31 décembre 2026"],
        ['Gemini dans Google Workspace Business Standard', '13,60 € par personne et par mois, engagement annuel', "Gemini inclus dans l'édition ; Business Starter à 6,80 € avec moins de fonctions"],
        ['ChatGPT Business, deux sièges au minimum', '21 € par mois en annuel, 26 € au mois, affichés pour la France', "Mention HT ou TTC à vérifier sur la page de l'éditeur"],
        ['Claude Team', '25 $ par siège et par mois, 20 $ en annuel', 'Prix publiés en dollars, hors taxes'],
        ['Vibe Team, de Mistral AI', '24,99 $ HT par utilisateur et par mois, 50 $ au minimum', "Serveurs situés dans l'UE, sauf choix contraire"],
      ],
    },
    cas: {
      h3: "Mise en situation : un dirigeant de PME prépare l'arbitrage de son prochain comité",
      contexte: "Prenons le dirigeant d'une entreprise de services techniques de 120 salariés, sous Microsoft 365. Plusieurs commerciaux utilisent ChatGPT sur des comptes personnels, la DSI propose des licences Microsoft Copilot pour tous, et un fournisseur vante un agent qui traiterait les demandes de devis. Le comité se réunit dans deux semaines. L'exemple est imaginaire ; il sert de fil à l'exercice de l'après-midi.",
      etapes: [
        "Il liste cinq tâches qui prennent du temps à ses équipes, avec le service concerné et le volume approximatif par semaine.",
        "Il colle dans l'assistant de l'entreprise les prix relevés dans le tableau de cette page, puis le prompt ci-dessous.",
        "Il vérifie chaque montant calculé avec sa calculatrice, et corrige les hypothèses qui ne correspondent pas à son entreprise.",
        "Il retient deux scénarios et ajoute, pour chacun, les conditions de données et de sécurité vues le matin.",
        "Il rédige la note de décision pour le comité, avec un essai de 90 jours et une mesure à trente jours.",
      ],
      prompt: "Je dirige une entreprise de services techniques de 120 salariés, équipée de Microsoft 365. Je prépare une décision de comité sur les outils d'IA.\n\nVoici les prix que j'ai relevés le 7 octobre 2026 :\n[coller le tableau des prix]\n\nVoici cinq tâches qui prennent du temps à nos équipes, avec le service et le volume par semaine :\n[liste des tâches]\n\n1. Calcule le coût annuel hors taxes de trois scénarios : Copilot Chat seul pour tous ; licence Microsoft Copilot Business pour 30 personnes ; licence pour tous les salariés. Montre chaque calcul.\n2. Pour chaque tâche, indique quel scénario permet de la traiter, et ce qu'il faudrait vérifier avant de l'affirmer.\n3. Liste les questions de données et de sécurité à régler avant le déploiement.\n4. Propose un essai de 90 jours sur deux tâches, avec la mesure à faire au départ et à trente jours.\n\nN'invente aucun prix ni aucune fonction. Quand une donnée te manque, signale-la par « à vérifier » et dis qui pourrait la fournir.",
      resultat: "Vous obtenez trois coûts annuels calculés sous vos yeux, une correspondance entre tâches et scénarios, la liste des questions de sécurité et un essai prêt à présenter. Le calcul se vérifie à la main : quarante licences Business à 18,20 € HT représentent 8 736 € HT par an, et une erreur de multiplication passe facilement dans un tableau soigné. La note reste la vôtre : l'assistant prépare, le dirigeant tranche.",
    },
    pieges: [
      {
        titre: "Des licences votées avant de savoir à quoi elles serviront",
        texte: "Acheter cent licences pour « que les gens s'y mettent » finance surtout des comptes inactifs. Commencez par un groupe pilote équipé, formé et mesuré, puis étendez aux services où la mesure montre un gain.",
      },
      {
        titre: "Un agent lancé sans plafond de dépense",
        texte: "Un agent facturé à l'usage peut tourner plus souvent que prévu, sur plus de documents que prévu. Fixez un plafond mensuel, nommez la personne qui suit la consommation, et prévoyez un point d'arrêt si le résultat ne vient pas.",
      },
      {
        titre: "Un SharePoint trop ouvert au moment où Copilot arrive",
        texte: "Copilot retrouve tout ce que chaque salarié peut consulter. Des dossiers de paie ou de direction partagés trop largement deviennent faciles à trouver. Faites auditer les droits d'accès avant d'ouvrir les licences.",
      },
      {
        titre: "Un gain annoncé en pourcentage et jamais mesuré",
        texte: "Un chiffre de productivité repris d'une étude ne dit rien de votre entreprise. Relevez le temps de trois tâches avant l'outil et trente jours après : c'est la seule mesure que votre comité pourra discuter.",
      },
      {
        titre: "Une charte écrite par un seul service",
        texte: "Une charte rédigée par la DSI seule interdit souvent trop, et les usages repartent sur des comptes personnels. Associez un responsable métier et le DPO, puis soumettez la version finale à la direction.",
      },
    ],
  },
  audience: [
    { title: "Dirigeants de PME et d'ETI", desc: "Vous décidez des outils, du budget et des règles, souvent sans avoir le temps de tout tester. La journée vous donne une pratique personnelle de l'IA, une grille de coûts et un plan que vous pouvez présenter à vos associés ou à votre conseil." },
    { title: 'Membres de comité de direction', desc: "Directeur financier, directrice des ressources humaines, directeur commercial ou des opérations : chacun repart avec les usages de sa fonction et les risques qui lui reviennent, et le comité partage enfin le même vocabulaire." },
    { title: 'Gérants qui décident seuls', desc: "En individuel, la journée suit votre agenda et vos dossiers en cours. Elle convient au gérant d'un cabinet ou d'une entreprise de quelques dizaines de personnes qui veut d'abord s'équiper lui-même avant d'équiper ses équipes." },
  ],
  useCases: [
    { icon: '📝', title: 'Vos dossiers traités en séance', desc: "Une note de synthèse, la préparation d'un comité ou un courrier délicat, avec l'assistant de l'entreprise." },
    { icon: '💳', title: 'Le coût réel des licences', desc: "Les prix publics relevés le 7 octobre 2026, ramenés à l'effectif de votre entreprise." },
    { icon: '🤖', title: 'Le budget des agents', desc: "Facturation à l'usage, plafond de dépense, personne chargée du suivi." },
    { icon: '🔐', title: 'Les données protégées', desc: "Comptes fournis par l'entreprise, réglages d'entraînement, droits d'accès avant déploiement." },
    { icon: '⚖', title: "L'AI Act côté direction", desc: "Article 4, transparence depuis août 2026, usages RH à haut risque en décembre 2027." },
    { icon: '🗺', title: 'Le plan à 90 jours', desc: "Trois chantiers, un responsable chacun, une mesure au départ et à trente jours." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Se servir soi-même de l'IA sur ses dossiers de direction", duration: '1h45',
      description: "Le dirigeant pratique avant de décider, pour juger les projets avec la mesure de l'outil.",
      items: [
        "Ce que fait un modèle de langage, et pourquoi il se trompe avec aplomb",
        "Une demande qui aboutit : le contexte, la tâche, la forme attendue, les pièces jointes",
        "Synthèse d'un rapport, préparation d'un comité, courrier délicat",
        "Relire comme un dirigeant : chiffres, dates, citations",
      ],
      exercise: "Vous traitez avec l'assistant un document de direction apporté le matin même, puis vous listez les corrections que vous avez dû faire.",
    },
    {
      day: 1, title: 'Module 2 · Choisir les outils et lire leur coût réel', duration: '1h45',
      description: "Le bon outil dépend de la suite bureautique en place, des données et du budget.",
      items: [
        "Microsoft Copilot, Copilot Chat, ChatGPT, Gemini, Claude, Vibe : ce que chacun apporte à une entreprise",
        "Prix par siège au 7 octobre 2026, ramenés à votre effectif",
        "Agents et facturation à l'usage : crédits, plafonds, suivi",
        "Essai pilote ou déploiement général : les critères de choix",
      ],
      exercise: "Vous calculez le coût annuel de deux scénarios pour votre entreprise et vous vérifiez chaque multiplication.",
    },
    {
      day: 1, title: "Module 3 · Cadrer les données, la charte et l'AI Act", duration: '1h45',
      description: "La direction répond des règles d'usage ; la séquence dit lesquelles fixer en premier.",
      items: [
        "Comptes personnels et comptes d'entreprise : les réglages d'entraînement",
        "Droits d'accès avant l'arrivée de Copilot, modèles activés ou non dans l'Union européenne",
        "Charte d'usage : autorisé, encadré, interdit, relecture humaine",
        "AI Act : article 4, article 50, usages RH à haut risque en décembre 2027",
      ],
      exercise: "Vous rédigez les cinq règles qui ouvriront la charte de votre entreprise et vous désignez qui les fera respecter.",
    },
    {
      day: 1, title: 'Module 4 · Retenir trois chantiers et bâtir le plan des 90 jours', duration: '1h45',
      description: "La journée se termine sur un plan que la direction peut lancer le lundi suivant.",
      items: [
        "Classer les tâches par fréquence, simplicité et risque",
        "Un responsable, une date et une mesure par chantier",
        "Formation des équipes : qui, quand, sous quel format",
        "Points d'étape à trente, soixante et quatre-vingt-dix jours",
      ],
      exercise: "Vous écrivez votre plan à 90 jours sur une page et vous le présentez au groupe en trois minutes.",
    },
  ],
  objectives: [
    "Confier à un assistant d'IA une tâche de direction et repérer les erreurs de son résultat",
    "Calculer le coût annuel d'un scénario de licences et d'agents pour son entreprise",
    "Énoncer les règles de données à fixer avant un déploiement, dont les réglages d'entraînement et les droits d'accès",
    "Situer les obligations de l'AI Act qui concernent la direction en 2026 et en 2027",
    "Rédiger un plan à 90 jours de trois chantiers, chacun avec un responsable, une date et une mesure",
  ],
  faq: [
    {
      q: "Qu'apprend un dirigeant pendant cette journée de formation IA ?",
      a: "Il apprend d'abord à se servir lui-même d'un assistant sur ses propres dossiers, pour juger l'outil et ses erreurs. Il apprend ensuite à lire le coût réel des licences et des agents, à fixer les règles qui protègent les données de l'entreprise et à situer les obligations de l'AI Act. La journée se termine par un plan à 90 jours : trois chantiers, un responsable chacun, une mesure au départ et à trente jours. Aucune notion technique n'est demandée, et chaque exercice s'appuie sur une pièce de direction de l'entreprise, anonymisée si besoin.",
    },
    {
      q: 'Journée dirigeants ou formation IA pour le COMEX : comment choisir ?',
      a: "La formation COMEX s'adresse au comité exécutif comme instance : elle a son propre format, plus court, et sa propre page. Cette journée s'adresse à un dirigeant seul ou à un petit groupe de dirigeants qui veulent pratiquer eux-mêmes et repartir avec un plan écrit. Elle dure sept heures, facturées au tarif journalier habituel de Masteria, 1 980 € HT, et laisse une large place aux exercices sur vos documents. Le cadrage permet de choisir entre les deux selon ce que vous attendez : un alignement du comité, ou une prise en main par chacun.",
    },
    {
      q: 'Qui anime la formation IA pour dirigeants ?',
      a: "Deux cas de figure : Mathias Nizan, qui a fondé Masteria, ou un formateur indépendant de son réseau, retenu pour sa connaissance de votre secteur et des enjeux de direction. Le nom de l'intervenant vous est communiqué au cadrage, avec son parcours. Masteria mobilise selon les projets une vingtaine de formateurs, une dizaine de consultants et environ cinq développeurs spécialisés en IA, tous indépendants, et Mathias Nizan pilote chaque mission, y compris celles qu'il n'anime pas.",
    },
    {
      q: 'Combien coûte la journée, et comment la financer ?',
      a: "Comptez 1 980 € HT pour la journée, TVA à ajouter, seul ou à douze dirigeants ; avec une seconde journée, la facture atteint 3 960 € HT. Les formations de Masteria sont couvertes par sa certification Qualiopi. Un dirigeant salarié, par exemple président rémunéré d'une SAS, relève de l'OPCO de son entreprise, qui décide selon ses règles et ses fonds. Un dirigeant non salarié, comme un gérant majoritaire de SARL, cotise en général à un fonds d'assurance formation des indépendants ; nous vérifions avec vous l'organisme compétent avant la demande.",
    },
    {
      q: "Un dirigeant qui n'a jamais utilisé l'IA peut-il suivre la journée ?",
      a: "Oui. La journée part de zéro pour les débutants complets et va plus loin avec ceux qui s'en servent déjà. Le cadrage sert à connaître le niveau de chacun et l'outil disponible dans l'entreprise. Un dirigeant débutant repart avec une pratique personnelle et les bonnes questions à poser à ses équipes ; un dirigeant déjà utilisateur repart avec une méthode de décision et un plan chiffré. Dans un groupe aux niveaux mêlés, les exercices du matin s'adaptent à chacun.",
    },
    {
      q: 'Copilot, ChatGPT, Gemini, Claude ou Vibe : quel outil choisir pour notre entreprise ?',
      a: "Le choix part de l'environnement en place. Une entreprise sous Microsoft 365 regarde d'abord Copilot Chat, déjà inclus, puis la licence Microsoft Copilot pour les postes qui en tireront parti. Une entreprise sous Google Workspace dispose déjà de Gemini. ChatGPT, Claude et Vibe se choisissent pour leurs fonctions propres, comme la lecture de dossiers longs ou l'hébergement européen des données. La journée donne la grille de décision ; la formation multi-outils compare les cinq assistants sur vos documents quand le choix reste ouvert.",
    },
    {
      q: 'La journée peut-elle se faire en individuel ou à distance ?',
      a: "Oui, dans les deux cas, au même prix. En individuel, la journée suit votre agenda : le dossier que vous devez rendre cette semaine, le comité que vous préparez, le courrier que vous repoussez. À distance, les exercices se font en partage d'écran, et la journée peut se couper en deux demi-journées si votre agenda l'exige. Le formateur peut aussi se rendre dans vos bureaux, en France ou à l'étranger, d'Europe jusqu'aux États-Unis et à l'Inde.",
    },
    {
      q: 'Une fois la journée passée, quelle suite donner au plan ?',
      a: "Vous repartez avec votre plan à 90 jours et les supports de la journée. La suite dépend de ce plan : former les équipes, en Sprint de trois heures pour une population large ou en formation métier pour les services les plus concernés ; installer la gouvernance avec la formation dédiée ; ou demander un diagnostic IA de vos flux de travail, dont la durée et le prix sont arrêtés avec vous au cadrage. Le diagnostic et le développement d'outils relèvent du conseil et ne sont pas finançables par votre OPCO.",
    },
  ],
  tarifs: {
    titre: 'Le prix de la journée, pour un dirigeant seul ou pour un comité',
    paras: [
      "Le montant de 1 980 € HT vaut pour un dirigeant seul comme pour douze. Il couvre la conversation préalable, où nous recueillons vos enjeux et deux ou trois documents de direction à travailler, l'adaptation des exercices à votre secteur, les supports, le tableau des prix de licences mis à jour à la date de la session et l'attestation individuelle remise le soir.",
      "Prenons un comité de direction de six personnes : la journée revient à 330 € HT par participant. Un dirigeant qui veut prolonger le travail sur ses propres dossiers peut réserver une seconde journée ; l'ensemble revient alors à 3 960 € HT. Les membres salariés du comité relèvent de l'OPCO de l'entreprise, qui examine la demande selon ses règles ; les dirigeants non salariés, d'un fonds d'assurance formation. Masteria fournit dans les deux cas le programme et la convention.",
    ],
  },
  cta: {
    milieu: "Apportez les trois décisions sur l'IA que votre comité doit prendre ce trimestre : la journée se construit autour d'elles.",
    fin: {
      titre: 'Préparons votre journée de direction',
      texte: "Dites-nous qui participera (vous seul, ou votre comité), l'environnement de l'entreprise (Microsoft 365, Google Workspace, autre) et les décisions en attente : licences, agent proposé par un fournisseur, charte, formation des équipes. Vous recevez une proposition de date et un déroulé bâti autour de ces décisions.",
    },
  },
  apres: {
    titre: 'Après la journée : un tableau de bord de direction alimenté par vos données',
    texte: "Une fois les chantiers choisis, une direction demande souvent un outil qui lui rende compte : un tableau de bord qui suit l'activité, les devis en attente ou la trésorerie à partir des logiciels de l'entreprise, ou un assistant qui prépare le dossier du comité à partir des comptes rendus et des indicateurs du mois. Masteria peut le concevoir, le brancher sur vos données et en confier la maintenance à un référent qu'elle aura formé. Ce chantier mêle conseil et développement, n'est pas finançable par votre OPCO et se règle au forfait ; tout commence par 30 minutes de cadrage offertes.",
  },
  terrain: {
    titre: "Sur le terrain : un comité de direction aligné avant un déploiement international",
    texte: "Chez un groupe international du packaging, après la formation à Copilot de managers pilotes, Masteria a réuni en 2026 le comité de direction et son responsable des données pour une matinée stratégique, conduite en anglais. Au programme : les mots de l'IA, des modèles jusqu'aux agents, les obligations européennes sur l'IA et sur les données personnelles, le prix des agents. Le comité en est sorti avec la liste des questions à trancher avant d'ouvrir les sites étrangers.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  liensAssocies: [
    { label: 'Formation IA pour le COMEX : le format du comité exécutif', href: '/formation-ia-comex' },
    { label: 'Formation gouvernance IA : registre, charte et comité', href: '/formation-gouvernance-ia' },
    { label: 'Formation multi-outils : comparer les assistants sur vos dossiers', href: '/formation-multi-outils' },
    { label: "Mesurer le retour sur investissement de l'IA", href: '/roi-ia-entreprise' },
    { label: 'Diagnostic IA de vos flux de travail', href: '/diagnostic-ia' },
  ],
  sources: [
    { name: 'Microsoft France : la licence Copilot des grands comptes', url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise' },
    { name: 'Microsoft France : tarifs de Microsoft Copilot Business', url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/business' },
    { name: 'Microsoft France : Copilot Studio et ses packs de crédits', url: 'https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio' },
    { name: "Microsoft Learn : présentation de Microsoft Copilot (données, droits d'accès, Cowork)", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview' },
    { name: "Microsoft Learn : modèles d'Anthropic, sous-traitant désactivé par défaut dans l'Union européenne", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor' },
    { name: 'Google Workspace : tarifs des éditions en France', url: 'https://workspace.google.com/intl/fr/pricing' },
    { name: 'Mistral AI : tarifs de Vibe', url: 'https://mistral.ai/pricing' },
    { name: "Hunton : l'Omnibus sur l'IA et le nouveau calendrier", url: 'https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force' },
  ],
}
