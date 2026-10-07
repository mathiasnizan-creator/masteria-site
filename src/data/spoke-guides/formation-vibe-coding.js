// Contenu propre à /formation-vibe-coding (page propre, guide terrain). Rendu par SpokePage.
// Créé le 07/10/2026. Faits vérifiés le 07/10/2026 : origine du terme et mot de l'année Collins 2025
// (presse), rapport Veracode de juillet 2025, CVE-2025-48757 (NVD), guide RGPD du développeur (CNIL).
// Faits outils : fiche FAITS-OUTILS du 07/10/2026 (Mistral Vibe et Vibe Code, Codex, Claude Code,
// conditions de l'API Gemini, AI Act articles 4 et 50). Aucun prix de plateforme tierce n'est cité.
export default {
  slug: 'formation-vibe-coding',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation vibe coding : décrire une petite application en français et la faire construire par l'IA",
  metaTitle: "Formation vibe coding : créer une app sans coder | Masteria",
  metaDesc: "Formation vibe coding : faire construire par l'IA un prototype ou un outil décrit en français, le tester, le sécuriser, savoir quand passer la main.",
  keywords: "formation vibe coding, vibe coding entreprise, lovable bolt cursor formation, créer une application avec l'ia, no code ia, prototype ia",
  prerequis: "Aucune connaissance en programmation ; un besoin d'outil ou de prototype à construire, et des données d'exemple sans information personnelle",
  resume: "La formation vibe coding apprend à des profils non développeurs à décrire en français une petite application (un calculateur, un formulaire, un tableau de bord, un prototype cliquable) puis à la faire construire par une IA, à la tester, à vérifier sa sécurité et à savoir quand confier la suite à l'informatique. Le programme couvre deux jours de sept heures, dans vos locaux comme à distance, à douze participants d'une même entreprise au plus ou en individuel. Le jour de session est facturé 1 980 € HT ; comme Qualiopi certifie Masteria pour ses actions de formation, votre OPCO peut recevoir une demande de financement et la trancher selon ses critères.",
  enBref: [
    { label: 'Formation', value: "Faire bâtir par une IA un petit outil de service ou une maquette fonctionnelle, puis le tester, le sécuriser et le transmettre" },
    { label: 'Durée', value: "Deux jours de sept heures ; chaque participant repart avec son application et sa fiche de limites" },
    { label: 'Formats', value: "Sur site ou à distance ; douze personnes au maximum par groupe, ou un porteur de projet en individuel" },
    { label: 'Tarif', value: "1 980 € HT la journée ; abonnements aux plateformes de création non compris" },
    { label: 'Financement', value: "OPCO sollicitable grâce à la certification Qualiopi ; décision selon les règles de votre branche" },
    { label: 'Prérequis', value: "Aucun code à connaître ; un besoin concret et un jeu de données d'exemple anonymisé" },
  ],
  intro: "Une responsable des achats voudrait un comparateur de devis, un chef de produit un configurateur pour ses commerciaux, une équipe RH un formulaire d'accueil des nouveaux arrivants. L'informatique a d'autres priorités, et ces besoins attendent. Le vibe coding (décrire à une IA, en langage courant, l'application que l'on veut, puis la juger à l'usage) permet aujourd'hui à ces personnes de construire elles-mêmes un premier outil en quelques heures. Il apporte aussi des risques précis : une base de données laissée ouverte, une clé d'accès visible dans le navigateur, un outil devenu indispensable sans personne pour le maintenir. Cette formation enseigne la méthode et ces garde-fous, tels qu'ils se présentent le 7 octobre 2026.",
  guide: {
    kicker: "Guide terrain",
    h2: "Le vibe coding met une application à portée de main, et la sécurité reste à la charge de celui qui la publie",
    lead: "Décrire un outil en dix lignes et le voir fonctionner une minute plus tard change le rapport des équipes métier à l'informatique. Ce qui sort de l'IA fonctionne souvent du premier coup ; ce qui manque se voit moins : un contrôle d'accès, une donnée personnelle stockée hors d'Europe, une clé d'API recopiée dans le code de la page. La formation installe une boucle simple, décrire, essayer, corriger, puis ajoute à chaque tour la vérification qui évite de publier un outil fragile.",
    sections: [
      {
        h3: "Le vibe coding décrit l'application en français et la juge à l'usage",
        paras: [
          "Le mot vient d'Andrej Karpathy, ancien directeur de l'IA chez Tesla et membre fondateur d'OpenAI, qui a décrit en février 2025 une façon de programmer où l'on parle à l'IA, accepte ses propositions et regarde le résultat sans lire le code. Le dictionnaire Collins en a fait son mot de l'année 2025, en relevant la forte progression de son usage depuis sa première apparition.",
          "En pratique, la boucle tient en quatre gestes. On écrit l'intention : à quoi sert l'outil, pour qui, quels écrans, quelles données, quelles règles de calcul. L'IA génère l'application. On l'essaie sur des cas dont on connaît la réponse. On décrit l'écart constaté, ou on colle le message d'erreur, et l'IA corrige. La compétence enseignée tient dans la première et la troisième étape : un besoin décrit sans ambiguïté, des essais qui prouvent quelque chose.",
          "Le périmètre raisonnable se dessine vite. Un prototype cliquable pour convaincre un comité, un calculateur interne, un formulaire, un tableau de bord alimenté par un export : tout cela se construit en une journée. Une application branchée sur la paie, l'ERP ou des données de santé, ou ouverte au public avec un paiement, sort du cadre et revient à des développeurs.",
        ],
      },
      {
        h3: "Deux familles d'outils : les ateliers en ligne et les assistants que l'entreprise paie déjà",
        paras: [
          "Les ateliers en ligne construisent une application complète à partir d'une conversation, avec son interface, sa base de données et son hébergement : Lovable, Bolt.new, v0 de Vercel ou Replit en sont les plus connus. Ils conviennent aux débutants parce qu'ils ne demandent aucune installation, et la plupart savent copier le code produit dans un dépôt GitHub, ce qui permet à l'informatique de le reprendre. Cursor, un éditeur de code piloté par l'IA, sert ceux qui acceptent d'ouvrir les fichiers.",
          "Les assistants d'entreprise s'en approchent. ChatGPT dispose de Codex pour le code et de son mode Work pour les tâches longues qui aboutissent à un livrable, site compris ; Claude Code accompagne les abonnements Claude à partir de l'offre Pro ; Mistral AI propose Vibe Code en ligne de commande, dans VS Code et sur le web, et son assistant produit depuis le 22 septembre 2026 de petites applications interactives dans la conversation. Attention au vocabulaire : Vibe est le nom que Mistral a donné à son assistant le 28 mai 2026, sans rapport direct avec le vibe coding.",
          "Le choix dépend moins de la qualité du code que du contrat. Un outil gratuit peut se servir de vos échanges ; Google, par exemple, réserve à son offre payante d'API Gemini les applications utilisées depuis l'Espace économique européen. La formation fait travailler chacun sur un compte validé par l'entreprise, avec des données d'exemple.",
        ],
      },
      {
        h3: "Le code généré fonctionne souvent, sa sécurité beaucoup moins",
        paras: [
          "En juillet 2025, l'éditeur de sécurité Veracode a soumis 80 tâches de programmation à plus de 100 modèles de langage. Dans 45 % des cas, le code produit contenait une faille de sécurité, et l'étude ne constatait aucun progrès sur ce point chez les modèles les plus récents, alors que le code devenait plus juste sur le plan fonctionnel. Une application qui marche n'a donc rien prouvé sur sa sûreté.",
          "Les ateliers en ligne en ont donné un exemple public. En mai 2025, un chercheur a examiné 1 645 applications de la vitrine de Lovable et en a trouvé 170 dont les tables de base de données se lisaient ou s'écrivaient sans authentification, parce que la sécurité au niveau des lignes (le réglage qui limite chaque utilisateur à ses propres données) n'avait jamais été activée. La faille porte le numéro CVE-2025-48757 ; l'éditeur la conteste, au motif que chaque client reste responsable de la protection de ses données. Ce désaccord résume la situation : la plateforme fournit l'outil, la personne qui publie répond de ce qui fuit.",
          "La formation fournit donc une grille de relecture que chacun applique à sa propre application : qui peut se connecter, qui voit quelles données, où sont rangées les clés d'accès, comment réagit l'outil à une saisie absurde. On demande aussi à l'IA d'auditer son propre travail, en sachant que cet audit complète la grille sans la remplacer.",
        ],
      },
      {
        h3: "Dès qu'elle touche des personnes, l'application relève du RGPD et parfois de l'AI Act",
        paras: [
          "Un formulaire qui recueille des noms, un tableau de bord où figurent des salariés, un outil qui stocke des adresses de clients : chacun constitue un traitement de données personnelles, que le RGPD encadre. Il faut une finalité écrite, des champs limités au nécessaire, une durée de conservation, une inscription au registre de l'entreprise et un hébergeur dont on connaît le pays. La CNIL publie un guide RGPD du développeur qui sert de liste de contrôle, même pour un lecteur qui n'a jamais écrit une ligne de code.",
          "Si l'application fait dialoguer le public avec une IA, un assistant de site web par exemple, une règle européenne joue depuis le 2 août 2026 : les utilisateurs doivent savoir qu'ils conversent avec une machine (AI Act, article 50). L'article 4, de son côté, attend des organisations qui recourent à l'IA qu'elles aident leurs salariés à en maîtriser l'usage : une formation suivie et tracée en fait partie, sans certificat exigé.",
        ],
      },
    ],
    table: {
      caption: "Ce que le vibe coding peut prendre en charge, ce qu'il faut cadrer, ce qui revient à l'informatique",
      headers: ["Besoin", "Verdict", "Condition"],
      rows: [
        ["Prototype cliquable présenté à un comité", "À construire soi-même", "Données fictives, aucune connexion à un système réel"],
        ["Calculateur interne sans données personnelles", "À construire soi-même", "Cinq cas de test dont la réponse est connue d'avance"],
        ["Tableau de bord alimenté par un export", "À construire, avec relecture", "Export anonymisé, accès réservé aux comptes de l'entreprise"],
        ["Formulaire qui recueille des données de clients", "À cadrer avant de publier", "Finalité, registre RGPD, hébergeur connu, authentification"],
        ["Assistant conversationnel ouvert au public", "À cadrer avec le juriste", "Mention d'interaction avec une IA, exigée depuis le 2 août 2026"],
        ["Outil branché sur la paie, l'ERP ou le paiement en ligne", "À confier à l'informatique", "Le prototype sert de cahier des charges"],
      ],
    },
    cas: {
      h3: "Cas pratique : un configurateur de prix construit en une journée pour les commerciaux",
      contexte: "Prenons le chef de produit d'un fabricant de sièges et de bureaux professionnels. Les commerciaux calculent le prix d'un poste de travail (plateau, piètement, caisson, options) dans un tableur que personne ne comprend plus, avec des erreurs de remise à chaque salon. Il dispose de la grille tarifaire en CSV et de cinq devis récents dont il connaît le bon montant. Aucune donnée personnelle n'est en jeu. Cet exemple nourrit les ateliers de la session.",
      etapes: [
        "Il écrit en dix lignes ce que doit faire l'outil, puis colle dans l'atelier en ligne choisi par l'entreprise le prompt ci-dessous, avec la grille tarifaire en pièce jointe.",
        "Il essaie l'application sur ses cinq devis de référence et note chaque écart de prix, au centime près.",
        "Pour chaque écart, il décrit le cas fautif et le résultat attendu, sans proposer de solution technique, puis vérifie que les quatre autres devis restent justes après la correction.",
        "Il demande à l'IA la liste des personnes qui peuvent ouvrir l'application et la liste des clés d'accès présentes dans le code, puis applique la grille de contrôle vue en séance.",
        "Il pousse le code vers le dépôt GitHub de l'entreprise, rédige la fiche des limites de l'outil et la transmet au service informatique avant toute diffusion aux commerciaux.",
      ],
      prompt: "Construis une application web de configuration de prix pour les commerciaux d'un fabricant de bureaux et de sièges professionnels.\n\nUtilisateurs : une quinzaine de commerciaux de l'entreprise, sur ordinateur portable et sur tablette. Seuls les comptes de notre domaine d'entreprise peuvent se connecter.\n\nDonnées : la grille tarifaire jointe en CSV (une ligne par référence : famille, référence, libellé, prix unitaire hors taxes). Ne crée aucune autre donnée de prix.\n\nÉcran 1 : le commercial choisit un plateau, un piètement, un caisson facultatif et des options. Chaque liste reprend uniquement les références de la famille concernée.\n\nÉcran 2 : récapitulatif avec chaque ligne, le sous-total hors taxes, une remise saisie par le commercial, plafonnée à 15 %, et le total hors taxes. Une remise supérieure affiche un message et n'est pas appliquée.\n\nRègles : tous les montants sont arrondis au centime ; l'outil ne demande ni ne conserve rien sur les clients ; aucune clé d'accès ne doit figurer dans le code exécuté par le navigateur.\n\nAvant d'écrire le code, résume-moi ce que tu as compris en cinq points et pose-moi les questions qui manquent. Après chaque modification, liste ce que tu as changé.",
      resultat: "L'atelier en ligne livre une application à deux écrans, souvent juste dès la première version sur les cas simples. Les écarts apparaissent sur les combinaisons rares, les arrondis et le plafond de remise : c'est le rôle des cinq devis de référence. La demande de reformulation en cinq points fait gagner un tour, car l'IA expose ses hypothèses avant de les coder. Deux vérifications restent humaines : l'accès réservé aux comptes de l'entreprise, contrôlé depuis une session extérieure, et l'absence de toute clé dans le code de la page.",
    },
    pieges: [
      { titre: "La base de données reste lisible par n'importe qui", texte: "Une application peut fonctionner parfaitement tout en laissant sa base ouverte à quiconque connaît son adresse. C'est la faille relevée en 2025 sur 170 applications d'une vitrine publique. Avant tout partage, vérifiez que la sécurité au niveau des lignes est activée, puis tentez d'ouvrir les données depuis un navigateur non connecté." },
      { titre: "Une clé d'API recopiée dans le code de la page", texte: "Pour appeler un service payant, l'IA place parfois la clé d'accès directement dans le code exécuté par le navigateur, où n'importe quel visiteur peut la lire et la réutiliser à vos frais. Demandez explicitement que les clés restent côté serveur, dans les variables d'environnement prévues par la plateforme." },
      { titre: "Les corrections tournent en rond", texte: "Au dixième aller-retour, l'IA réintroduit une erreur corrigée trois tours plus tôt et chaque message consomme des crédits. Sauvegardez une version à chaque étape stable, et quand la boucle s'emballe, revenez à cette version avec une demande plus courte plutôt que d'empiler les corrections." },
      { titre: "Le prototype devient un outil critique sans propriétaire", texte: "Trois mois plus tard, quarante personnes se servent du configurateur et son auteur change de poste. Personne ne sait le modifier ni le remettre en route. Dès qu'un outil sert au-delà de son créateur, il entre dans le dépôt de l'entreprise, reçoit un responsable nommé et passe en revue avec l'informatique." },
    ],
  },
  audience: [
    { title: "Chefs de produit, marketeurs et responsables des opérations", desc: "Vous avez un besoin d'outil que l'informatique ne traitera pas ce trimestre. Vous apprenez à le décrire, à le faire construire, à le tester sur des cas connus et à le sécuriser avant de le partager." },
    { title: "Fondateurs et porteurs de projet", desc: "Vous voulez montrer une idée qui fonctionne plutôt qu'une maquette figée, pour convaincre un comité, un client ou un investisseur. Vous repartez avec un prototype et la liste honnête de ce qui manque pour en faire un produit." },
    { title: "Responsables innovation et équipes informatiques qui encadrent", desc: "Vous voulez laisser les métiers construire sans voir proliférer des outils fantômes. Vous repartez avec une charte, une grille de sécurité et un circuit de reprise des prototypes par l'informatique." },
  ],
  useCases: [
    { icon: '💻', title: "Prototype cliquable en une journée", desc: "Une idée décrite en français devient une application à plusieurs écrans, présentable à un comité sur des données fictives." },
    { icon: '🧮', title: "Calculateur ou configurateur interne", desc: "Une grille tarifaire ou un barème devient un outil simple pour l'équipe, vérifié sur des cas dont la réponse est connue." },
    { icon: '📋', title: "Formulaire et suivi des réponses", desc: "Un formulaire d'accueil ou de demande, avec son tableau de suivi, construit en respectant les règles du RGPD dès la première version." },
    { icon: '🔁', title: "Corrections pilotées par les essais", desc: "Chaque écart constaté se décrit à l'IA sans jargon, avec une version sauvegardée à chaque étape stable." },
    { icon: '🛡️', title: "Grille de sécurité avant tout partage", desc: "Accès, données visibles, clés d'API, saisies absurdes : quatre contrôles appliqués à chaque application produite." },
    { icon: '🤝', title: "Passage de relais à l'informatique", desc: "Code déposé dans GitHub, fiche des limites rédigée, responsable nommé : le prototype devient un cahier des charges exploitable." },
  ],
  modules: [
    { day: 1, title: "Module 1 · Situer le vibe coding et choisir sa famille d'outils", duration: '1h30', description: "Chacun comprend la boucle de travail et retient un outil adapté à son besoin et aux règles de l'entreprise.", items: ["Origine du terme et boucle de travail : décrire, générer, essayer, corriger", "Ateliers en ligne (Lovable, Bolt.new, v0, Replit) et éditeur Cursor : profil visé, sortie, limites", "Assistants déjà payés par l'entreprise : Codex, Claude Code, Vibe Code de Mistral", "Conditions d'utilisation : comptes d'entreprise, données d'exemple, offres gratuites à éviter"], exercise: "Vous décrivez votre besoin en cinq phrases et choisissez l'outil de la session à l'aide d'une grille de comparaison." },
    { day: 1, title: "Module 2 · Écrire un cahier des charges qu'une IA comprend", duration: '2h', description: "Le besoin devient une demande précise, puis une première version qui tourne.", items: ["Les rubriques d'une bonne demande : objectif, utilisateurs, écrans, données, règles, cas de test", "Faire reformuler le besoin par l'IA et répondre à ses questions avant toute génération", "Données d'exemple sans information personnelle", "Première génération et premier essai sur un cas connu"], exercise: "Vous rédigez le cahier des charges de votre outil et obtenez une première version qui fonctionne en séance." },
    { day: 1, title: "Module 3 · Corriger par l'essai et garder la main sur les versions", duration: '2h', description: "L'application évolue sans que personne ne lise le code ligne à ligne, et sans perdre le fil.", items: ["Cinq cas de test dont la réponse est connue, rejoués après chaque modification", "Décrire un écart ou coller un message d'erreur, sans dicter la solution technique", "Sauvegarder une version stable, revenir en arrière, repartir d'une demande courte", "Repérer la boucle qui tourne en rond et la facture de crédits qui l'accompagne"], exercise: "Vous ajoutez deux fonctions à votre outil et corrigez trois anomalies par des demandes successives, versions sauvegardées à l'appui." },
    { day: 1, title: "Module 4 · Brancher des données sans exposer personne", duration: '1h30', description: "L'outil reçoit des données réalistes tout en restant fermé aux personnes extérieures.", items: ["Export anonymisé ou données fictives selon le cas", "Base de données intégrée à la plateforme et sécurité au niveau des lignes", "Connexion réservée aux comptes de l'entreprise", "Clés d'accès rangées côté serveur, jamais dans le code de la page"], exercise: "Vous branchez votre outil sur un jeu de données d'exemple et vérifiez depuis une session extérieure que rien n'est lisible sans connexion." },
    { day: 2, title: "Module 5 · Passer son application à la grille de sécurité", duration: '2h', description: "Chacun audite son propre outil et corrige ce qui bloque avant tout partage.", items: ["Étude Veracode de juillet 2025 et faille CVE-2025-48757 : ce qu'elles enseignent", "Grille en quatre questions : qui se connecte, qui voit quoi, où sont les clés, que donne une saisie absurde", "Audit demandé à l'IA, puis contrôle à la main", "Ce qui doit être relu par un développeur avant toute diffusion"], exercise: "Vous passez votre application à la grille, corrigez les points bloquants et listez ce qu'un développeur devra relire." },
    { day: 2, title: "Module 6 · Rendre l'outil conforme : données personnelles et transparence", duration: '1h30', description: "L'équipe sait ce qu'un outil maison a le droit de recueillir, de conserver et d'afficher.", items: ["Finalité, minimisation, durée de conservation, registre des traitements", "Hébergeur et pays de stockage des données, contrat de sous-traitance", "Assistant conversationnel ouvert au public : le visiteur averti qu'il parle à une IA (AI Act, article 50, en vigueur depuis août 2026)", "Guide RGPD du développeur publié par la CNIL, utilisé comme liste de contrôle"], exercise: "Vous remplissez la fiche RGPD de votre outil : données recueillies, finalité, durée, hébergeur, personnes qui y accèdent." },
    { day: 2, title: "Module 7 · Publier, faire tester et chiffrer l'usage", duration: '2h', description: "Le prototype sort de l'atelier pour un premier test, avec un budget et des limites écrites.", items: ["Publication intégrée à la plateforme et lien de test réservé", "Retours de trois utilisateurs, notés et classés", "Crédits consommés par les itérations : estimer la facture avant de continuer", "Code poussé vers le dépôt GitHub de l'entreprise"], exercise: "Vous publiez votre application, la faites essayer à deux collègues en séance et rédigez la fiche de ses limites." },
    { day: 2, title: "Module 8 · Fixer la charte d'équipe et organiser la reprise par l'informatique", duration: '1h30', description: "La pratique individuelle devient une règle d'équipe, sans outils fantômes ni prototypes orphelins.", items: ["Charte : outils et comptes autorisés, données interdites, publication soumise à la grille", "Signaux qui imposent de passer la main : données sensibles, utilisateurs nombreux, branchement au SI", "AI Act, article 4 : chaque formation suivie consignée dans le registre de l'entreprise", "Plan à 30 jours : un outil en test, un responsable nommé, une revue avec l'informatique"], exercise: "Vous rédigez la charte vibe coding de votre équipe et fixez, pour les trente prochains jours, la date de revue de votre outil." },
  ],
  objectives: [
    "Le participant rédige un cahier des charges en langage courant qui suffit à faire générer une première version fonctionnelle.",
    "Le participant teste son application sur des cas de référence et la corrige par des demandes successives en conservant ses versions.",
    "Le participant choisit entre un atelier en ligne, un éditeur de code et l'assistant de l'entreprise selon le besoin et les règles internes.",
    "Le participant applique une grille de sécurité à son application et liste ce qu'un développeur doit relire.",
    "Le participant établit la fiche RGPD d'un outil qui manipule des données personnelles.",
    "Le participant décide, à l'aide de critères écrits, à quel moment un prototype doit être repris par l'informatique.",
  ],
  faq: [
    { q: "Qu'appelle-t-on vibe coding, exactement ?", a: "Le vibe coding consiste à décrire à une IA, en langage courant, l'application que l'on veut obtenir, puis à la juger sur son fonctionnement plutôt que sur son code. L'expression vient d'Andrej Karpathy, qui l'a employée en février 2025, et le dictionnaire Collins l'a choisie comme mot de l'année 2025. En entreprise, la pratique sert surtout aux prototypes et aux petits outils internes, à condition d'y ajouter des tests, une relecture de sécurité et des règles de données." },
    { q: "Faut-il savoir programmer pour suivre la formation ?", a: "Non. Le public visé n'a jamais écrit de code : chefs de produit, marketeurs, responsables des opérations, fondateurs, chargés RH ou financiers. La compétence travaillée tient à trois gestes : décrire un besoin sans ambiguïté, vérifier le résultat sur des cas connus, repérer ce qui doit être sécurisé. Un développeur qui veut confier des tâches d'ingénierie à un agent trouvera un programme plus adapté dans notre formation Claude Code." },
    { q: "Quels outils utilise-t-on : Lovable, Bolt, Cursor, Replit ou nos assistants ?", a: "Nous arrêtons l'outil avec vous avant la session. Les ateliers en ligne comme Lovable, Bolt.new, v0 ou Replit conviennent aux débutants, car ils fournissent interface, base de données et hébergement sans installation. Cursor sert les participants qui acceptent d'ouvrir le code. Si l'entreprise paie déjà ChatGPT, Claude ou Mistral, leurs outils de code (Codex, Claude Code, Vibe Code) peuvent remplacer une plateforme de plus. Chacun travaille sur un compte validé par l'entreprise." },
    { q: "Le vibe coding a-t-il un rapport avec Vibe, l'assistant de Mistral ?", a: "Aucun lien direct. Vibe est le nom que Mistral AI a donné à son assistant le 28 mai 2026, et Vibe Code désigne son mode destiné aux développeurs, en ligne de commande, dans VS Code et sur le web. Le vibe coding, lui, désigne une manière de construire une application en la décrivant à n'importe quelle IA. Les outils de Mistral peuvent servir à cette pratique, comme ceux d'autres éditeurs, et l'assistant Vibe crée depuis septembre de petites applications dans la conversation." },
    { q: "Une application construite de cette façon est-elle sûre ?", a: "Pas d'office. Le rapport publié par Veracode en juillet 2025 a relevé une faille de sécurité dans 45 % des cas sur 80 tâches confiées à plus de 100 modèles. En 2025 encore, 170 applications de la vitrine de Lovable laissaient lire leurs tables sans authentification (CVE-2025-48757). La formation apprend à fermer l'accès aux comptes de l'entreprise, à protéger les clés et à repérer ce qui demande l'œil d'un développeur." },
    { q: "Peut-on mettre en production ce qu'on a construit pendant la formation ?", a: "Un outil interne simple, sans données personnelles et réservé à quelques collègues, peut servir après la grille de sécurité et une revue par l'informatique. Une application ouverte au public, reliée à la paie, à l'ERP ou à un paiement, ou qui traite des données sensibles, demande des tests, une surveillance et une maintenance que le vibe coding ne fournit pas. Le prototype sert alors de cahier des charges, et le code déposé dans GitHub de point de départ." },
    { q: "Quelle différence avec la formation Claude Code ?", a: "La formation vibe coding s'adresse à des personnes qui ne programment pas et veulent construire un prototype ou un petit outil en le décrivant. La formation Claude Code s'adresse à des développeurs qui confient à un agent des tâches d'ingénierie sur leur propre base de code : refactorisation, tests, intégration continue, revue de chaque modification. Si vous écrivez déjà du code en production, choisissez la seconde ; si vous partez de zéro, la première." },
    { q: "Combien coûte la formation vibe coding, et comment la financer ?", a: "Une journée coûte 1 980 € HT, au même tarif pour une à douze personnes ; les deux jours font donc 3 960 € HT, abonnements aux plateformes de création non compris. Puisque Qualiopi certifie les formations de Masteria, vous pouvez adresser une demande à l'OPCO de votre branche ; il apprécie sa prise en charge au regard de ses critères et du budget qu'il lui reste, sur la foi du programme et de la convention fournis par nos soins. Une entreprise suisse ou belge ne relève d'aucun OPCO : nous lui adressons un devis en euros hors taxes." },
  ],
  tarifs: {
    titre: "Ce que comprend le prix d'une session de vibe coding",
    paras: [
      "Le prix inclut un échange de préparation avec chaque participant ou avec le commanditaire : le besoin de chacun est reformulé, ses données d'exemple sont vérifiées pour qu'aucune information personnelle n'entre dans les ateliers, et l'outil de la session est choisi en fonction des règles de votre informatique. Sont aussi compris les supports, la grille de sécurité, le modèle de fiche RGPD et le modèle de charte d'équipe. Les abonnements aux plateformes restent à votre charge : nous contrôlons avec vous, en amont, ce que leurs offres permettent.",
      "Prenons une entreprise qui inscrit neuf personnes venues du produit, du marketing, des achats et des ressources humaines. Les deux jours en intra coûtent 3 960 € HT, 440 € HT par personne. Un fondateur suivi seul règle chaque journée 1 980 € HT, avec un programme entièrement centré sur son projet. Reste la demande à l'OPCO de votre branche, recevable puisque Masteria est certifié Qualiopi : l'opérateur arrête sa participation conformément aux règles de la branche, et le dossier se constitue avec notre aide.",
    ],
  },
  apres: {
    titre: "Après la formation, des développeurs pour reprendre le prototype",
    texte: "Quand un prototype prouve son utilité, il faut souvent le reconstruire proprement : authentification, tests, sauvegardes, surveillance, branchement aux logiciels de l'entreprise. Masteria peut reprendre le code déposé dans votre dépôt, le sécuriser, le relier à votre système d'information et en assurer la maintenance, ou rédiger avec vous le cahier des charges d'un développement plus large. Ce chantier de développement se chiffre au forfait, une fois le cadrage fait ; il sort du champ de la formation et n'est donc pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Décrivez-nous l'outil que vos équipes attendent : la session se construit autour de vos besoins.",
    fin: {
      titre: "Partons des outils que vos équipes réclament",
      texte: "Listez trois besoins d'outils ou de prototypes en attente dans vos services et les assistants IA déjà autorisés chez vous. Nous revenons avec une proposition de programme, le choix des plateformes et des dates de session.",
    },
  },
  liensAssocies: [
    { label: "Comparer les assistants IA avant de choisir : la formation multi-outils", href: '/formation-multi-outils' },
    { label: "Développeurs : déléguer des tâches d'ingénierie à Claude Code", href: '/formation-claude-code' },
    { label: "Formation prompt engineering : la méthode de demande", href: '/formation-prompt-engineering' },
    { label: "Confier un prototype à nos développeurs IA", href: '/agence-developpement-ia' },
    { label: "Quel assistant IA pour coder en 2026", href: '/meilleure-ia-pour-coder' },
  ],
  sources: [
    { name: "CTV News, « vibe coding » désigné mot de l'année 2025 par le dictionnaire Collins", url: "https://www.ctvnews.ca/lifestyle/article/vibe-coding-named-word-of-the-year-by-collins-dictionary/" },
    { name: "Veracode, rapport 2025 sur la sécurité du code généré par l'IA (30 juillet 2025)", url: "https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/" },
    { name: "NIST, fiche de la vulnérabilité CVE-2025-48757", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-48757" },
    { name: "CNIL, guide RGPD du développeur", url: "https://www.cnil.fr/fr/guide-rgpd-du-developpeur" },
    { name: "Mistral AI, l'assistant devient Vibe", url: "https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe" },
    { name: "Mistral AI, notes de version (applications interactives, 22 septembre 2026)", url: "https://docs.mistral.ai/resources/release-notes" },
    { name: "Google, conditions de l'API Gemini (offre payante pour les utilisateurs européens)", url: "https://ai.google.dev/gemini-api/terms" },
    { name: "AI Act, articles 4 et 50, règlement (UE) 2024/1689 sur EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
}
