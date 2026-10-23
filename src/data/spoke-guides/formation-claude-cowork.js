// Contenu propre à /formation-claude-cowork (guide terrain, page propre). Rendu par SpokePage.
// Créé le 22/10/2026. Chaque fonction, offre et réglage de Cowork vérifié le 22 octobre 2026 dans le
// centre d'aide d'Anthropic (support.claude.com), la documentation claude.com/docs, le billet du
// 16/09/2026 et la page tarifs ; cours gratuit vérifié sur anthropic.skilljar.com ; Copilot Cowork
// vérifié sur Microsoft Learn. Cas terrain : mission `editeur-pole-formation` (data/missions-formation.js).
// Aucun prix d'outil, aucun pourcentage de gain.
export default {
  slug: 'formation-claude-cowork',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-22',
  updatedLabel: 'Faits vérifiés le 22 octobre 2026',
  h1: "Formation Claude Cowork : confier à Claude une tâche complète sur vos fichiers",
  metaTitle: "Formation Claude Cowork pour non-développeurs | Masteria",
  metaDesc: "Formation Claude Cowork en une journée pour assistants, RH, finance, juristes et chefs de projet : confier une tâche sur vos fichiers, relire, planifier.",
  keywords: "formation claude cowork, claude cowork formation, formation claude cowork gratuite, claude cowork, cowork anthropic, tâches planifiées cowork, plugins claude cowork",
  prerequis: "Un compte Claude payant (Pro, Max, Team ou Enterprise), l'application de bureau à jour sur macOS ou Windows et un dossier de documents de travail ; aucune notion de code",
  resume: "La formation Claude Cowork de Masteria prépare en sept heures, sur une seule journée, assistants, RH, financiers, juristes, consultants et chefs de projet à confier à Claude une tâche entière sur leurs propres fichiers : la décrire, suivre le plan annoncé, relire le livrable et décider jusqu'où l'agent avance seul. Elle se suit à douze au maximum, ou seul face au formateur, chez vous ou par visioconférence, et aucune ligne de code n'y est demandée. Masteria est certifié Qualiopi : votre entreprise présente le dossier à son OPCO, qui arrête lui-même le financement.",
  enBref: [
    { label: 'Formation', value: "Claude Cowork sur vos dossiers : cadrer une tâche, relire ce qui revient, brancher vos outils, programmer une routine" },
    { label: 'Durée', value: "Sept heures sur une journée, découpées en cinq ateliers qui finissent chacun par une tâche réelle confiée à Claude" },
    { label: 'Formats', value: "Un groupe de douze collègues au maximum, ou une personne seule ; sur site ou en classe virtuelle" },
    { label: 'Tarif', value: "Dès 1 980 € HT la journée, montant fixe pour le groupe ; préparation sur vos documents chiffrée à part dans le devis" },
    { label: 'Financement', value: "Certification Qualiopi : le dossier part vers votre OPCO, ou vers le fonds d'un indépendant, qui décide" },
    { label: 'Prérequis', value: "Offre Claude payante, application de bureau à jour, un dossier de travail ; aucune notion de code" },
  ],
  audienceIntro: "La journée réunit des fonctions qui travaillent sur des dossiers entiers et n'écrivent pas de code. Chacun arrive avec un dossier réel et repart avec une tâche déléguée, relue, puis rangée pour la prochaine fois.",
  casUsageIntro: "Six tâches que les participants délèguent pendant la journée, sur leurs fichiers ou sur des pièces d'exercice de même forme.",
  intro: "Avec Cowork, Claude prend en charge une tâche jusqu'au fichier final : vous décrivez le résultat voulu, Claude annonce un plan, enchaîne les étapes en puisant dans vos fichiers et dans les logiciels reliés à votre compte, puis rend un classeur, une présentation ou un rapport à relire. Anthropic précise qu'il repose sur la même architecture d'agent que Claude Code, utilisable sans terminal. Le 16 septembre 2026, Anthropic a commencé à fondre Cowork dans la conversation des offres Pro et Max, et Claude juge seul si une demande appelle une réponse rapide ou une tâche. Chaque fonction, offre et réglage cité a été relevé le 22 octobre 2026 sur les pages d'aide d'Anthropic.",
  guide: {
    kicker: 'Guide terrain',
    h2: "Cowork rend un livrable à relire : sa qualité tient au dossier qu'on lui ouvre et aux gestes qu'on lui autorise",
    lead: "Une tâche Cowork suit toujours la même boucle. Claude analyse la demande, la découpe en sous-tâches, exécute du code et des commandes dans un espace cloisonné hébergé par Anthropic, confie parfois des morceaux à des sous-agents (d'autres instances de Claude qui avancent en parallèle), puis dépose les fichiers produits dans la session, où vous les prévisualisez et les téléchargez. Le centre d'aide cite des classeurs Excel aux formules actives, sur plusieurs onglets, avec mise en forme conditionnelle, des présentations PowerPoint, des documents mis en page et des graphiques tirés de fichiers de données. Pour la personne qui délègue, l'essentiel du travail se joue avant et après la tâche : préparer le dossier et écrire une demande qui dit à quoi servira le livrable, puis contrôler ce qui revient.",
    sections: [
      {
        h3: "Les tâches Cowork tournent chez Anthropic et ne touchent vos dossiers qu'à travers l'application de bureau",
        paras: [
          "Depuis le 6 octobre 2026, toute nouvelle tâche Cowork lancée sur Pro ou Max tourne sur les serveurs d'Anthropic, quel que soit l'appareil de départ, et aucun réglage ne permet de la garder sur le poste. Elle continue donc ordinateur fermé ; vous la suivez depuis le navigateur, le poste ou le smartphone, qui vous prévient quand Claude a terminé ou attend une réponse, et vous pouvez la réorienter en passant d'un écran à un autre. Les tâches locales commencées avant cette date restent sur la machine le temps de les achever.",
          "Vos dossiers ne quittent pas votre disque. Claude n'atteint que ceux que vous avez connectés dans l'application installée sur votre Mac ou votre PC Windows, et seulement pendant qu'elle est ouverte ; quand la tâche a besoin d'un fichier, elle en récupère une copie, et supprimer la session supprime aussi ces copies. Le pilotage du navigateur et l'utilisation de l'ordinateur passent eux aussi par l'application de bureau. Pour un travail qui doit rester sur le poste de bout en bout, Anthropic oriente vers Claude Code, installé dans la même application.",
          "Cowork demande une offre payante. Sur Pro et Max, la fusion avec la conversation se déploie depuis le 16 septembre 2026. Sur Team, Cowork garde un onglet distinct : il fonctionne dans l'application de bureau, et sa version web et mobile, exécutée dans le cloud, reste en bêta. Sur Enterprise, l'administrateur peut le réserver à certains groupes ; l'exécution dans le cloud y est coupée par défaut et ne s'ouvre qu'avec son accord, comme la fusion avec la conversation, proposée en bêta.",
        ],
      },
      {
        h3: "Un dossier de travail dédié et des consignes écrites cadrent chaque tâche",
        paras: [
          "Anthropic conseille de travailler dans un dossier réservé à la tâche, avec une sauvegarde, et de garder hors de portée les fichiers sensibles comme les documents financiers ou les identifiants. Nous faisons donc créer un dossier par chantier, y copier les seules pièces utiles, puis le connecter. Claude lit et écrit dans ce dossier et nulle part ailleurs sur le disque, et il demande toujours une autorisation explicite avant d'effacer un fichier pour de bon.",
          "Trois niveaux de consignes évitent de tout réexpliquer. Les instructions globales, saisies dans les réglages, valent pour toutes les tâches : votre fonction, le ton attendu, le format de sortie préféré. Les instructions de dossier ajoutent le contexte d'un chantier quand vous connectez un dossier local, et Claude peut les compléter en cours de route. Un projet réunit fichiers, consignes et mémoire pour un sujet qui revient ; Cowork le lit comme contexte et n'en modifie pas le contenu, si bien qu'un fichier à conserver dans le projet s'y ajoute à la main.",
          "La demande elle-même suit un ordre fixe : le résultat attendu et son lecteur, les pièces à utiliser, les règles de calcul ou de rédaction, les manques à signaler plutôt qu'à combler, le format et le nom du fichier final. Un chantier long gagne à être coupé en étapes contrôlables. Pour un dossier confidentiel, coupez la mémoire avant le premier message de la tâche : le choix ne se modifie plus ensuite.",
        ],
      },
      {
        h3: "Le mode d'approbation règle la part d'autonomie laissée à Claude",
        paras: [
          "Trois modes existent au 22 octobre 2026. Le mode Manuel (Manual), réglage par défaut, oblige Claude à vous consulter avant chaque action, que vous autorisez ou refusez. En mode Auto, les outils de lecture passent d'office ; pour une écriture ou une suppression, Claude examine l'action, bloque ce qui ressemble à une fuite de données ou à une injection de prompt (une instruction hostile cachée dans un fichier, un courriel ou un site) et revient aux questions si les blocages se répètent. Le troisième mode (Skip all approvals) saute toutes les approbations et ne contrôle plus rien ; Anthropic le réserve aux cas où l'on se fie à tout ce que la tâche touche.",
          "Les connecteurs branchent Claude sur un logiciel tiers (messagerie, drive, CRM) au moyen de MCP, le protocole ouvert lancé par Anthropic en novembre 2024. Chaque outil d'un connecteur se règle sur l'un de trois statuts : autorisé d'office, validé à chaque appel, ou interdit. Dans Cowork, les connecteurs passent par le cloud d'Anthropic, de sorte qu'un connecteur développé en interne doit être joignable depuis internet. Côté Team et Enterprise, c'est l'administrateur qui décide si le mode Auto est proposé, et l'option qui autorise d'office un outil de connecteur en écriture reste verrouillée jusqu'à ce qu'il la débloque.",
          "Le mode pèse aussi sur la consommation. Une tâche à plusieurs étapes coûte plus d'usage qu'une question rapide, puisque chaque étape mobilise des tokens, les unités de texte que le modèle décompte, et le mode Auto entame plus vite la limite que les deux autres. Regrouper le travail lié, ouvrir une conversation neuve pour un sujet sans rapport et suivre sa consommation dans les réglages évitent de buter sur la limite au milieu d'un livrable.",
        ],
      },
      {
        h3: "Compétences, plugins et tâches planifiées font d'une tâche réussie une routine",
        paras: [
          "Une compétence (Skill) tient dans un dossier dont le fichier SKILL.md enseigne à Claude une procédure de votre service, comme le relevé des décisions prises en comité, le contrôle d'une note de frais ou la grille de lecture d'un contrat de prestation. Claude la mobilise lorsqu'une demande touche à cette procédure. Cowork reprend les compétences, connecteurs et plugins activés sur votre compte, que l'on gère depuis le menu de personnalisation de la barre latérale.",
          "Un plugin réunit en un paquet des compétences, des connecteurs, des sous-agents et parfois des hooks, des scripts lancés à des moments précis de la session. La place de marché Knowledge Work d'Anthropic est ajoutée d'office ; elle couvre la vente, la finance, le juridique, le marketing, les RH, les opérations ou l'analyse de données. Installer un plugin n'ouvre l'accès à aucun service : chaque connecteur s'active ensuite à part. Dans une organisation Team ou Enterprise, les propriétaires diffusent les plugins maison et peuvent en rendre certains obligatoires ; Enterprise peut en outre passer chaque plugin au crible de son analyse des compétences, si elle est activée, à l'installation comme à la mise à jour.",
          "Une tâche planifiée enregistre la demande et la relance à la fréquence choisie : toutes les heures, chaque jour, chaque semaine, en semaine seulement, ou à la main. Chaque exécution ouvre une session distincte, avec les mêmes connecteurs, compétences et plugins, et tourne dans le cloud pendant que l'ordinateur dort ; une routine qui lit des fichiers locaux ne peut tourner que sur la machine. On la crée en tapant /schedule dans une tâche, depuis la rubrique des tâches planifiées de la barre latérale, ou, dans la conversation unifiée, en décrivant la routine et sa fréquence avant de valider. Toutes les offres payantes y ont droit, de Pro à Enterprise.",
        ],
      },
      {
        h3: "L'environnement isolé protège votre poste, la relecture humaine protège le reste",
        paras: [
          "Chaque session tourne dans un environnement temporaire, coupé de votre réseau domestique comme de celui de l'entreprise, et supprimé à la fin. Anthropic en marque la limite : l'isolement borne l'endroit où s'exécute le code de Claude, il ne borne ni ce que Claude lit ni ce qu'il fait. Un mail piégé lu par un connecteur, ou une page ouverte par le navigateur intégré, reste une porte d'entrée, et l'éditeur reconnaît que le risque d'attaque n'est pas nul.",
          "Une injection de prompt réussit quand deux conditions se rencontrent : Claude lit un texte venu d'au-delà de votre périmètre de confiance, et il dispose d'outils capables de nuire. En supprimer une seule rend l'attaque plus difficile. D'où les règles que nous faisons écrire pendant la journée : la navigation limitée à des sites de confiance, l'approbation manuelle pour les comptes, les sites et les actions difficiles à défaire, des tâches planifiées simples dont on relit chaque résultat et que l'on met en pause quand elles ne servent plus, et aucun dossier de paie ni d'identifiants à portée de Claude.",
          "Sur Pro et Max, l'usage des tâches pour améliorer les modèles suit le réglage de confidentialité du compte. Sur Team et Enterprise, les conditions commerciales excluent l'entraînement sur vos échanges, sauf retour volontaire d'un utilisateur (pouce levé ou baissé) ou accord explicite. Supprimer une tâche l'efface de l'historique sur-le-champ, et des serveurs d'Anthropic dans les 30 jours. Pour les organisations, l'API de conformité retrouve les sessions Cowork des 30 derniers jours, et les propriétaires peuvent transmettre les événements (appels d'outils, accès aux fichiers, décisions d'approbation) à leurs outils de supervision par OpenTelemetry, un flux qu'Anthropic distingue d'un journal d'audit réglementaire.",
        ],
      },
    ],
    table: {
      caption: "Les réglages de Cowork au 22 octobre 2026 : où ils se trouvent, ce qu'ils permettent, leur limite",
      headers: ['Réglage', 'Où il se règle', "Ce qu'il permet", 'Limite'],
      rows: [
        ["Dossier connecté", "Application de bureau, au lancement de la tâche", "Lecture et écriture dans ce seul dossier", "Hors d'atteinte quand l'application est fermée"],
        ["Instructions globales", "Réglages du compte", "Fonction, ton et formats repris dans chaque tâche", "Un contexte que Claude suit ; il n'interdit rien"],
        ["Mode Manuel", "Sélecteur de mode de la tâche", "Une validation humaine avant chaque action", "Des interruptions fréquentes sur une tâche longue"],
        ["Mode Auto", "Sélecteur de mode, ouvert ou fermé par l'administrateur sur Team et Enterprise", "Lectures libres, écritures examinées par Claude avant exécution", "Davantage d'usage consommé ; un risque d'injection qui demeure"],
        ["Statut d'un outil de connecteur", "Page du connecteur", "Autorisé d'office, validé à chaque appel, ou interdit", "Un connecteur interne doit être joignable depuis internet"],
        ["Plugin", "Menu de personnalisation, rubrique des plugins", "Compétences, connecteurs et sous-agents installés d'un geste", "Un serveur MCP local tourne avec les mêmes droits que tout programme de votre ordinateur"],
        ["Tâche planifiée", "/schedule ou rubrique des tâches planifiées", "Une routine relancée à heure fixe, ordinateur en veille", "Une routine qui lit des fichiers locaux ne tourne que sur la machine"],
      ],
    },
    cas: {
      h3: "Cas pratique : monter le dossier du comité de pilotage d'un projet la veille de la réunion",
      contexte: "Une cheffe de projet prépare chaque mois le comité de pilotage du déménagement d'un siège social. Ses pièces sont dispersées : les procès-verbaux Word des trois comités précédents, le planning et le registre des risques en Excel, le suivi budgétaire tenu par le contrôle de gestion. Il lui faut, la veille du comité, un diaporama court, une note d'une seule page pour la directrice générale et le relevé des données qui se contredisent entre fichiers.",
      etapes: [
        "Créez un dossier COPIL, copiez-y les pièces utiles, et laissez dehors les fichiers nominatifs comme les fiches de poste.",
        "Connectez ce dossier dans l'application de bureau, choisissez le mode Manuel, puis copiez la consigne qui suit.",
        "Relisez le plan que Claude annonce avant de le laisser avancer ; corrigez-le s'il oublie une pièce ou ajoute une étape inutile.",
        "Contrôlez trois lignes de la liste des écarts, tirées au hasard, en rouvrant les fichiers d'origine.",
        "Une fois le résultat validé, demandez à Claude de rédiger un SKILL.md qui reprend la demande et ses contrôles, puis installez cette nouvelle compétence depuis le menu de personnalisation pour le comité suivant.",
      ],
      prompt: "Dans le dossier COPIL connecté, prépare le comité de pilotage du jeudi 3 décembre pour le projet de déménagement du siège.\n\nUtilise ces pièces et elles seules : les procès-verbaux Word des comités de septembre, octobre et novembre, Planning.xlsx, Risques.xlsx et Budget.xlsx.\n\nLivrables attendus, enregistrés dans le dossier :\n1. Une présentation PowerPoint de six diapositives au plus : avancement par lot, jalons décalés depuis le dernier comité, les cinq risques principaux avec leur responsable, budget consommé face au budget voté, décisions à prendre.\n2. Une note d'une seule page destinée à la directrice générale, ouverte par les décisions attendues.\n3. Un classeur Ecarts.xlsx qui liste chaque information divergente entre deux fichiers (date, montant, responsable), avec pour chaque version le nom du fichier et l'onglet ou la page.\n\nRègles : ne modifie aucun fichier source. Ne comble aucun manque par supposition : écris « à confirmer » et reporte le point dans Ecarts.xlsx. Pour chaque chiffre de la présentation, indique dans les notes de l'orateur le fichier et l'onglet d'où il vient.\n\nAvant de commencer, présente-moi ton plan et la liste des pièces que tu as trouvées.",
      resultat: "Trois fichiers à relire et une liste d'écarts à cocher point par point avant le comité. La relecture commence par les chiffres de la présentation, rapprochés de leur source grâce aux notes de l'orateur ; les mentions « à confirmer » fournissent les questions à adresser aux responsables de lot avant la réunion. Si la date de modification d'un fichier source a changé pendant la tâche, rouvrez-le : la consigne interdisait d'y toucher.",
    },
    pieges: [
      {
        titre: "Une tâche partie du poste perd ses dossiers quand l'application se ferme",
        texte: "Depuis le 6 octobre 2026, une session tourne dans le cloud et poursuit son travail ordinateur fermé, mais elle ne lit plus les dossiers locaux pendant que l'application de bureau est fermée. Pour une tâche longue sur des fichiers du poste, laissez l'application ouverte et l'ordinateur éveillé, ou déposez les pièces dans un service relié par un connecteur.",
      },
      {
        titre: "Le mode qui saute les approbations ne vérifie plus aucune action",
        texte: "Claude y enchaîne les étapes d'une traite, et aucun examen automatique ne s'applique. Ce mode n'a sa place que sur un dossier d'essai, avec des connecteurs limités à la lecture. Le mode Auto examine chaque écriture avant de l'exécuter, au prix d'une consommation plus forte, et Anthropic ne le présente pas comme une protection complète contre l'injection.",
      },
      {
        titre: "L'utilisation de l'ordinateur ne passe par aucun bac à sable",
        texte: "Quand Claude clique et tape sur votre écran, fonction en bêta sur Pro et Max, il demande l'accès à chaque application, puis rien ne le sépare de ce qui s'affiche, et il prend des captures pour s'orienter. Bloquez les applications de banque, de santé ou de paie, et fermez les fenêtres étrangères à la tâche avant de la lancer.",
      },
      {
        titre: "Les compléments Excel et PowerPoint peuvent échanger des données entre eux",
        texte: "Avec Claude pour Excel et PowerPoint, Claude peut transférer des données entre les deux applications de sa propre initiative. Anthropic recommande de tenir les informations sensibles à l'écart de ces compléments tant qu'une tâche Cowork est en cours.",
      },
    ],
  },
  audience: [
    {
      title: "Assistants de direction et office managers",
      desc: "Vous montez comités, dossiers de déplacement et tableaux de suivi à partir de pièces éparpillées. Vous apprenez à confier l'assemblage à Cowork et à garder la main sur les envois vers l'extérieur.",
    },
    {
      title: "RH, juristes et conformité",
      desc: "Vous traitez des lots de contrats, de politiques internes ou de comptes rendus d'entretiens. Vous apprenez à obtenir des tableaux de clauses ou de synthèse dont chaque ligne cite sa pièce d'origine, en tenant les fichiers nominatifs hors du dossier connecté.",
    },
    {
      title: "Finance et contrôle de gestion",
      desc: "Vous consolidez des classeurs venus de plusieurs entités ou services. Vous apprenez à faire produire un classeur aux formules actives et un onglet des écarts, puis à contrôler les montants par sondage.",
    },
    {
      title: "Consultants et chefs de projet",
      desc: "Vous transformez notes, plannings et comptes rendus en livrables pour un comité ou un client. Vous apprenez à cadrer la demande, à programmer une routine et à transmettre une compétence à votre équipe.",
    },
  ],
  useCases: [
    { icon: '\uD83D\uDCC1', title: "Ranger un dossier en vrac", desc: "Renommer, trier et classer des centaines de pièces selon une règle écrite, avec la liste de ce qui a été déplacé." },
    { icon: '\uD83D\uDCCA', title: "Consolider des classeurs", desc: "Un classeur unique aux formules actives, tiré des fichiers de plusieurs entités, et un onglet qui isole les écarts." },
    { icon: '\u2696', title: "Comparer des contrats", desc: "Un tableau des clauses contrat par contrat, chaque clause accompagnée de son numéro de page." },
    { icon: '\uD83D\uDCF0', title: "Tenir une veille sourcée", desc: "Une note d'une page aux liens vérifiables, relancée chaque lundi par une tâche planifiée." },
    { icon: '\uD83D\uDCDD', title: "Préparer un comité", desc: "Présentation, note de décision et points à confirmer, tirés des comptes rendus et du planning." },
    { icon: '\uD83D\uDD17', title: "Brancher un outil de l'équipe", desc: "Un connecteur vers le drive ou la messagerie, ses outils réglés un par un entre lecture libre et approbation." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Situer Cowork et lui confier une première tâche",
      duration: '1h15',
      description: "Comprendre ce que fait l'agent, où il s'exécute et ce que permet votre abonnement.",
      items: [
        "La boucle d'une tâche : plan, sous-tâches, exécution isolée, livrable",
        "Conversation unifiée sur Pro et Max, onglet distinct sur Team, ouverture par l'administrateur chez Enterprise",
        "Tâches exécutées chez Anthropic depuis le 6 octobre 2026, et rôle de l'application de bureau",
        "Plan annoncé, suivi depuis le téléphone, réorientation en cours de tâche",
      ],
      exercise: "Vous confiez à Claude le tri d'un dossier d'exercice, puis relisez la liste des fichiers déplacés.",
    },
    {
      day: 1,
      title: "Module 2 · Préparer le dossier et rédiger la demande",
      duration: '1h30',
      description: "Donner à Claude les bonnes pièces et une demande complète, lisible sans explication orale.",
      items: [
        "Dossier dédié, copie des seules pièces utiles, sauvegarde",
        "Instructions globales, instructions de dossier et projets",
        "Une demande en cinq temps : résultat, pièces, règles, manques à signaler, format",
        "Classeurs aux formules actives, présentations et documents mis en page",
      ],
      exercise: "Vous rédigez la demande de votre propre tâche et obtenez un premier livrable sur votre dossier.",
    },
    {
      day: 1,
      title: "Module 3 · Relire le livrable et régler les approbations",
      duration: '1h15',
      description: "Contrôler ce qui revient et décider des actions que Claude enchaîne sans vous.",
      items: [
        "Chiffres rapprochés de leur source, lignes vérifiées par sondage",
        "Modes Manuel et Auto, et le mode qui saute les approbations",
        "Autorisation exigée avant tout effacement définitif",
        "Consommation d'usage selon le mode et la longueur de la tâche",
      ],
      exercise: "Vous vérifiez trois chiffres du livrable dans leurs fichiers d'origine et corrigez la demande en conséquence.",
    },
    {
      day: 1,
      title: "Module 4 · Connecter vos outils et installer une compétence",
      duration: '1h30',
      description: "Étendre Cowork aux logiciels de l'équipe et aux procédures qui reviennent.",
      items: [
        "Connecteurs MCP et statut de chaque outil : autorisé d'office, validé à chaque appel, interdit",
        "Compétences : un dossier, un fichier SKILL.md, un chargement quand la demande y correspond",
        "Plugins de la place de marché Knowledge Work et plugins de l'organisation",
        "Navigateur intégré et Claude dans Chrome, cantonnés aux sites de confiance",
      ],
      exercise: "Vous tirez une compétence de la tâche réussie du matin et la testez sur un second dossier.",
    },
    {
      day: 1,
      title: "Module 5 · Programmer une routine et fixer les règles d'usage du service",
      duration: '1h30',
      description: "Faire revenir une tâche à date fixe et arrêter ce que l'équipe s'autorise.",
      items: [
        "Tâches planifiées : fréquences, exécution dans le cloud, cas des fichiers locaux",
        "Injection de prompt : les deux conditions d'une attaque et la façon d'en retirer une",
        "Données : réglage de confidentialité individuel, conditions Team et Enterprise, API de conformité",
        "Charte d'usage : dossiers exclus, actions toujours soumises à approbation, relecture obligatoire",
      ],
      exercise: "Vous programmez une veille hebdomadaire et rédigez la charte Cowork de votre équipe.",
    },
  ],
  objectives: [
    "Le participant sait décrire une tâche à Cowork en précisant le résultat attendu, les pièces autorisées, les règles et le format de sortie.",
    "Le participant sait préparer un dossier de travail dédié et écrire des instructions globales et des instructions de dossier.",
    "Le participant sait contrôler un livrable de Cowork en rapprochant ses chiffres et ses citations des fichiers d'origine.",
    "Le participant sait régler le mode d'approbation et le statut de chaque outil de connecteur selon la sensibilité de la tâche.",
    "Le participant sait installer un plugin, tirer une compétence d'une tâche réussie et programmer une tâche récurrente.",
    "Le participant sait reconnaître une situation d'injection de prompt et appliquer la charte Cowork de son équipe.",
  ],
  tarifs: {
    titre: "La préparation sur les dossiers de vos participants s'ajoute au prix de la journée",
    paras: [
      "Avant la session, le formateur demande à chaque participant la tâche qu'il voudrait déléguer et quelques pièces types : classeurs de suivi, comptes rendus, contrats ou notes. Ces pièces deviennent les exercices ; quand elles sont trop confidentielles pour être affichées, le formateur prépare des dossiers fictifs bâtis sur le même modèle. Il vérifie aussi avec votre administrateur que Cowork et les connecteurs prévus sont ouverts sur votre offre. Le devis chiffre ce travail préparatoire à part, au-delà du tarif journalier.",
      "Pour un groupe intra de douze inscrits au plus, la journée est facturée dès 1 980 € HT ; soit, à dix participants, à partir de 198 € HT par personne. En individuel, le programme reste identique, et le prix de base aussi. Pour des salariés, la demande est adressée à l'OPCO dont relève l'entreprise, seul juge du montant couvert ; un consultant à son compte sollicite le fonds des non-salariés auquel il cotise, AGEFICE ou FIF-PL selon son activité. Masteria fournit le programme et la convention, et le dossier doit être déposé avant la session.",
    ],
  },
  apres: {
    titre: "Après la journée, des compétences et des plugins taillés sur vos procédures",
    texte: "Une équipe qui délègue chaque semaine à Cowork finit par réclamer des outils communs : une compétence qui monte le dossier du comité selon vos modèles, un plugin interne qui réunit vos procédures et vos connecteurs, diffusé à toute l'organisation par la place de marché privée de Team ou d'Enterprise. Masteria peut les construire avec vous, en arrêtant pour chacun les dossiers lus, les outils autorisés en écriture et les validations exigées avant tout envoi, puis former les référents chargés de les tenir à jour.",
  },
  cta: {
    milieu: "Apportez le dossier d'une tâche qui vous coûte une demi-journée chaque mois : l'atelier de l'après-midi la confie à Cowork.",
    fin: {
      titre: "Confions à Cowork la première tâche de votre équipe",
      texte: "Indiquez votre offre Claude, le nombre de participants, leurs fonctions et deux tâches qu'ils aimeraient déléguer. Vous recevez un déroulé construit sur ces tâches, des dates et un chiffrage.",
    },
  },
  terrain: {
    titre: "Une équipe pédagogique a délégué à Cowork la préparation d'une de ses sessions",
    texte: "En septembre 2026, la responsable du service formation d'un éditeur de logiciels destinés aux entreprises et deux ingénieures pédagogiques se sont formées deux jours à Claude, en visioconférence, guidées par une formatrice indépendante qui intervient pour Masteria. Elles disposaient de Claude Team depuis peu. Les ateliers comprenaient la préparation d'une de leurs sessions, déléguée à Cowork, un reporting construit à partir de leur suivi et une découverte de Claude Code. Un bilan à froid, programmé un mois plus tard, devait mesurer les usages restés en place.",
    lien: '/etudes-de-cas-ia#mission-editeur-pole-formation',
  },
  liensAssocies: [
    { label: "Copilot Cowork, Claude Cowork, ChatGPT Work : confier une tâche longue", href: '/blog/copilot-cowork-claude-cowork-chatgpt-work' },
    { label: "Formations Claude par métier, sur deux jours", href: '/formation-claude-ia' },
    { label: "Formation Claude Code, l'agent de code des développeurs", href: '/formation-claude-code' },
    { label: "Cowork ou Claude Code : quel outil pour quelle tâche", href: '/claude-cowork-vs-claude-code' },
    { label: "Prix des abonnements Claude, de Pro à Enterprise", href: '/claude-prix-abonnement' },
    { label: "Comparer les agents IA pour l'entreprise", href: '/meilleur-agent-ia' },
    { label: "Formation aux agents IA en entreprise", href: '/formation-agents-ia' },
  ],
  avisPriorite: ['Claude', 'Cowork', 'fichiers', 'dossiers'],
  faq: [
    {
      q: "Qu'est-ce que Claude Cowork ?",
      a: "Cowork est le mode de travail par tâches de Claude, l'assistant d'Anthropic. Vous fixez l'objectif ; Claude bâtit un plan, exécute les étapes dans un environnement isolé et rend des fichiers : classeur, présentation, document, dossier rangé. Il repose sur l'architecture d'agent de Claude Code, rendue accessible hors du terminal. Anthropic l'intègre peu à peu, depuis le 16 septembre 2026, à la conversation des offres Pro et Max.",
    },
    {
      q: "Une formation Claude Cowork gratuite existe-t-elle ?",
      a: "Anthropic publie sur sa plateforme Anthropic Academy un cours gratuit en anglais, Introduction to Claude Cowork, conclu par un quiz et un certificat : boucle d'une tâche, plugins et compétences, projets, sécurité. C'est un parcours en autonomie, identique pour tous les inscrits, et il fait une bonne préparation. La journée Masteria se déroule en français, sur les fichiers de vos collaborateurs, avec un formateur qui relit vos demandes et vos livrables ; elle est payante, et l'OPCO compétent peut en prendre en charge une partie ou la totalité, d'après ses propres critères.",
    },
    {
      q: "Quelle offre Claude faut-il pour suivre la formation ?",
      a: "Il faut un abonnement payant (Pro, Max, Team ou Enterprise), Cowork étant absent de l'offre gratuite. L'application de bureau, à jour, sur Mac ou sur PC, sert à connecter vos dossiers locaux. Sur Team, Cowork est actif par défaut et un propriétaire peut le couper ; sur Enterprise, l'administrateur peut le réserver à certains groupes et doit activer l'exécution dans le cloud. Notre page sur les abonnements Claude compare les formules et leurs prix.",
    },
    {
      q: "Faut-il apprendre Cowork ou Claude Code ?",
      a: "Partez du livrable. Un rapport, un classeur ou une présentation relève de Cowork ; un programme que l'on teste et que l'on conserve dans un dépôt de code relève de Claude Code, pour lequel nous proposons un parcours distinct de deux jours, réservé aux développeurs. Quand une tâche Cowork débouche sur du développement, on télécharge ses données et la commande /port-task-data les reprend dans Claude Code.",
    },
    {
      q: "Cowork peut-il travailler pendant que mon ordinateur est éteint ?",
      a: "Sur Pro et Max, oui depuis le 6 octobre 2026 : les tâches, planifiées ou non, tournent dans le cloud d'Anthropic et se suivent depuis le téléphone. Elles n'accèdent en revanche plus aux dossiers locaux si l'application de bureau n'est pas lancée. Team et Enterprise ont encore l'exécution distante en bêta.",
    },
    {
      q: "Anthropic se sert-il de nos fichiers pour entraîner ses modèles ?",
      a: "Sur Team et Enterprise, régis par les conditions commerciales, les conversations et les tâches ne nourrissent pas l'entraînement, sauf retour volontaire d'un utilisateur ou accord explicite. Sur Pro et Max, chaque titulaire règle ce point dans ses paramètres de confidentialité, et ce réglage vaut aussi pour les tâches Cowork. Dans tous les cas, gardez hors des dossiers connectés les fichiers que votre politique interne interdit de confier à un service en ligne.",
    },
    {
      q: "Claude Cowork et Copilot Cowork désignent-ils le même outil ?",
      a: "Les noms se ressemblent, les produits diffèrent. Copilot Cowork, chez Microsoft, agit dans Microsoft 365 : il rédige et expédie des courriels, cale des réunions dans l'agenda, produit des fichiers dans OneDrive ou SharePoint, et sollicite votre feu vert avant toute action sensible. Claude Cowork, chez Anthropic, travaille sur vos dossiers et vos connecteurs depuis Claude. Cette journée porte sur l'outil d'Anthropic.",
    },
    {
      q: "Qui finance la formation Claude Cowork ?",
      a: "Pour des salariés du privé, l'OPCO de votre branche, saisi avant la session : Masteria, certifié Qualiopi, fournit programme et convention, et l'OPCO fixe seul le montant. Un consultant à son compte se tourne vers le fonds de formation des non-salariés auquel il cotise, AGEFICE ou FIF-PL selon son affiliation ; un président de SAS ne relève d'aucun de ces fonds, et l'OPCO de sa société n'intervient que s'il se verse une rémunération. Dans dix branches gérées par AKTO, dont les commerces de gros et les organismes de formation, le financement du plan de développement des compétences est suspendu en 2026 pour les structures de moins de 50 salariés. La formation n'est pas certifiante et n'ouvre donc pas droit au CPF.",
    },
  ],
  sources: [
    { name: "Centre d'aide Anthropic : bien démarrer avec Claude Cowork (offres, appareils, modes d'approbation)", url: 'https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork' },
    { name: "Centre d'aide Anthropic : Cowork sur le web, l'ordinateur et le mobile, exécution dans le cloud depuis le 6 octobre 2026", url: 'https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile' },
    { name: "Centre d'aide Anthropic : Cowork sur les offres Team et Enterprise (administration, conformité)", url: 'https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans' },
    { name: "Centre d'aide Anthropic : utiliser Claude Cowork en sécurité", url: 'https://support.claude.com/en/articles/13364135-use-claude-cowork-safely' },
    { name: "Centre d'aide Anthropic : tâches planifiées dans Cowork", url: 'https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork' },
    { name: "Centre d'aide Anthropic : plugins dans Claude et place de marché Knowledge Work", url: 'https://support.claude.com/en/articles/13837440-use-plugins-in-claude' },
    { name: "Documentation Claude : installer des plugins dans Cowork", url: 'https://claude.com/docs/cowork/guide/plugins' },
    { name: "Anthropic, 16 septembre 2026 : Cowork rejoint la conversation de Claude", url: 'https://claude.com/blog/cowork-is-now-claude' },
    { name: "Anthropic Academy : cours gratuit Introduction to Claude Cowork", url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork' },
    { name: "Anthropic : données des offres commerciales et entraînement des modèles", url: 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training' },
    { name: "Microsoft Learn : présentation de Copilot Cowork", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/' },
  ],
}
