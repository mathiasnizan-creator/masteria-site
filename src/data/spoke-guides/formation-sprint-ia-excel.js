// Contenu propre à /formation-sprint-ia-excel (page propre). Rendu par SpokePage.
// Format court de 3 heures, distinct de la formation de deux jours /formation-ia-analyse-donnees.
// Guide terrain du 03/10/2026 (sources Microsoft, OpenAI, Anthropic citées dans `sources`), revu le 07/10/2026 :
// nom Microsoft Copilot, trois modes du volet Copilot dans Excel et retrait de =COPILOT() le 14/09/2026
// (fiche de faits du 07/10/2026, support Microsoft), prix France des licences relevés le 07/10/2026.
export default {
  slug: 'formation-sprint-ia-excel',
  pagePropre: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Sprint IA Excel : trois heures pour confier vos formules et vos tableaux croisés à l'IA",
  metaTitle: "Sprint IA Excel : l'IA dans vos classeurs en 3 h | Masteria",
  metaDesc: "Sprint IA Excel (3 h) : formules, tableaux croisés, mises en évidence et graphiques avec Copilot dans Excel ou ChatGPT, sur vos fichiers. 1 980 € HT.",
  keywords: "sprint ia excel, formation ia excel 3 heures, copilot excel formation, chatgpt excel, tableau croisé dynamique ia, formules excel ia, formation excel intelligence artificielle",
  resume: "Le Sprint IA Excel apprend en trois heures à obtenir de l'IA des formules, des tableaux croisés, des lignes mises en évidence et des graphiques sur votre propre classeur, puis à contrôler chaque chiffre avant de l'envoyer. Il se déroule avec Copilot dans Excel, ou avec ChatGPT ouvert à côté du fichier si l'entreprise n'utilise pas Microsoft 365. Une séance coûte 1 980 € HT pour un groupe de douze au maximum ou pour un seul stagiaire, en salle chez vous comme en visioconférence, et votre OPCO peut la financer d'après les règles de sa branche.",
  enBref: [
    { label: 'Formation', value: "L'IA au service du tableur : formules, synthèses par catégorie, mises en forme conditionnelles et graphiques" },
    { label: 'Durée', value: "Trois heures en cinq séquences, chaque participant travaillant sur l'un de ses classeurs" },
    { label: 'Outils', value: "Copilot dans Excel, avec ou sans licence Microsoft Copilot, ou ChatGPT à côté du fichier" },
    { label: 'Tarif', value: "1 980 € HT la séance, qu'elle réunisse douze personnes ou une seule" },
    { label: 'Financement', value: "Dossier OPCO monté avec les pièces que remet Masteria, organisme certifié Qualiopi ; décision selon la branche" },
    { label: 'Prérequis', value: "Savoir saisir, trier et filtrer dans Excel ; apporter un classeur utilisé chaque semaine, sur une copie" },
  ],
  intro: "Le Sprint IA Excel tient en trois heures et part d'un classeur que vous ouvrez chaque semaine, avec l'outil que votre entreprise possède déjà : Copilot dans Excel, présent à un niveau standard dans les abonnements professionnels de Microsoft 365 et complet avec la licence payante, Microsoft Copilot (anciennement Microsoft 365 Copilot) ; à défaut, ChatGPT ouvert à côté du classeur. Il installe quatre gestes du quotidien, de la formule au graphique, et les contrôles qui évitent de diffuser un chiffre faux. Il tient compte des changements de la rentrée 2026 : le volet Copilot travaille désormais en trois modes, et la fonction =COPILOT() a disparu le 14 septembre. Vous repartez avec votre classeur amélioré et une fiche de demandes à réutiliser le mois suivant.",
  guide: {
    kicker: "Guide terrain Sprint",
    h2: "En trois heures, un utilisateur d'Excel apprend à demander un résultat qu'il sait vérifier",
    lead: "Le Sprint s'adresse aux personnes qui ouvrent Excel chaque jour sans en faire leur métier : assistantes, acheteurs, gestionnaires, commerciaux. Il laisse de côté les statistiques, le code et les classeurs à vingt onglets, traités dans la formation de deux jours sur l'analyse de données. Il garde ce qui sert dès le lendemain : une formule obtenue en tapant le signe égal, un tableau croisé décrit en une phrase, des lignes mises en évidence, un graphique lisible et un contrôle avant chaque envoi.",
    sections: [
      {
        h3: "Avant le Sprint, vérifiez que Copilot apparaît dans votre Excel",
        paras: [
          "Copilot dans Excel fonctionne aussi sans la licence Microsoft Copilot. Selon la FAQ de Microsoft, un abonnement professionnel Microsoft 365 éligible à Copilot Chat suffit pour un accès standard, et Excel affiche une mention qui indique votre niveau d'accès. La licence complémentaire donne un accès prioritaire et un sélecteur de modèle, où les modèles d'Anthropic n'apparaissent qu'avec l'accord de l'administrateur, puisqu'ils sont désactivés par défaut pour les clients européens.",
          "Certains réglages peuvent bloquer Copilot le jour de la session. Il ne modifie un classeur que si les options de calcul sont en automatique. Si votre bibliothèque SharePoint oblige à extraire les fichiers avant de les modifier, Copilot refuse de travailler dans Excel pour Windows et pour Mac ; Excel sur le web, lui, fonctionne. Un classeur au format Strict Open XML (une variante du format Excel, choisie dans Enregistrer sous) doit être réenregistré en .xlsx classique.",
          "Si le bouton Copilot manque, Microsoft renvoie à ses prérequis : version de l'application, licence, réseau et paramètres de confidentialité. L'administrateur ne peut pas couper Copilot dans Excel à part, puisque Microsoft le rattache à Copilot Chat. Demandez à votre service informatique de contrôler ces points sept jours avant le Sprint, et gardez ChatGPT en solution de repli.",
        ],
      },
      {
        h3: "Le volet Copilot travaille en trois modes, et =COPILOT() a disparu",
        paras: [
          "Microsoft documente trois modes pour le volet Copilot dans Excel : Allow editing, où Copilot modifie le classeur lui-même, Plan, pour préparer la démarche, et Chat only, où il répond sans toucher au fichier. Les guides en français les appellent Édition, Plan et Conversation. La modification directe est disponible dans les versions Windows, Mac et web du tableur ; iPad et iPhone la reçoivent par étapes. Pendant le Sprint, chacun commence en mode Conversation sur son fichier, puis passe en Édition sur une copie.",
          "Microsoft a supprimé le 14 septembre 2026 la fonction =COPILOT(), qui interrogeait l'IA depuis une cellule. Un classeur qui en contient garde ses résultats en mémoire jusqu'au prochain recalcul, puis affiche l'erreur #NOM? ; l'éditeur conseille désormais de passer par le volet. Si vos classeurs en contiennent, repérez-les avant la séance : remplacer ces cellules fait partie des exercices.",
        ],
      },
      {
        h3: "Quatre demandes couvrent l'essentiel du travail courant",
        paras: [
          "La première se fait dans la cellule. Dans Excel pour Windows et sur le web, quand vous tapez le signe égal, Copilot propose une formule complète déduite des en-têtes et des cellules voisines, avec un aperçu du résultat et une courte explication. Si vous saisissez quelques exemples qui suivent une logique, comme un prénom extrait d'un nom complet, il propose une formule qui remplit le reste de la colonne et se recalcule quand les données changent.",
          "Les trois autres passent par le volet Copilot. Vous décrivez un tableau croisé dynamique (un tableau qui regroupe et totalise les lignes par catégorie) en nommant ses lignes, ses colonnes et ses valeurs. Vous demandez de mettre en évidence, de trier ou de filtrer des lignes : en mode Conversation, Copilot décrit le changement et attend que vous l'appliquiez. Vous obtenez enfin un graphique dont vous fixez le type, les axes et les étiquettes.",
          "Microsoft donne un conseil qui vaut pour les quatre : nommez les colonnes à traiter. La demande « mets en évidence les retards » laisse Copilot deviner. La demande « colore en orange les lignes où la colonne Date de livraison dépasse la colonne Date promise » ne laisse aucune place au doute.",
        ],
      },
      {
        h3: "Un chiffre se contrôle en trois gestes avant l'envoi",
        paras: [
          "La FAQ de Copilot dans Excel demande de relire et de vérifier tout ce que l'outil produit, parce qu'il peut se tromper ou mal lire une donnée. Le Sprint fixe trois gestes de contrôle. Comptez les lignes prises en compte et comparez-les au fichier. Recalculez un total à la main avec SOMME ou SOMME.SI.ENS. Regardez les filtres actifs, qui retirent des lignes sans le signaler.",
          "Quand Copilot modifie un classeur partagé, les changements enregistrés deviennent visibles pour toutes les personnes qui ont accès au fichier. Faites vos essais sur une copie, ou désactivez l'enregistrement automatique : Copilot travaille avec ou sans lui. Après une erreur, l'annulation et l'historique des versions ramènent l'état précédent, et Copilot sait dire qui a modifié le classeur, et quand.",
        ],
      },
      {
        h3: "Sans Copilot, le Sprint se fait avec ChatGPT ouvert à côté du classeur",
        paras: [
          "Vous déposez dans ChatGPT une copie du fichier en .xlsx ou en .csv. Il écrit puis exécute du code Python (le langage de programmation qu'il emploie pour calculer) et propose ensuite des tableaux et des graphiques ; les graphiques en barres, en courbes, en secteurs et en nuages de points peuvent s'afficher en version interactive. Pour une formule, il donne la syntaxe à coller dans Excel, que vous testez sur trois lignes avant de la recopier. OpenAI propose aussi des extensions de ChatGPT pour Word, Excel et PowerPoint ; si votre service informatique autorise celle d'Excel, l'exercice se fait directement dans le classeur.",
          "L'offre gratuite limite l'envoi de fichiers à trois par jour, ce qui suffit à peine pour un atelier. ChatGPT Business et Enterprise tiennent d'office vos échanges à l'écart de l'entraînement des modèles : ce sont les offres à retenir pour un classeur de l'entreprise.",
          "Les équipes abonnées à Claude Pro, Max, Team ou Enterprise peuvent aussi installer le complément Claude pour Excel (un module ajouté à Excel), qui travaille dans le classeur et cite les cellules qu'il utilise. Anthropic ne le propose pas pour Excel sur iPad ou sur Android.",
        ],
      },
    ],
    table: {
      caption: "Les demandes du Sprint, de la plus simple à la plus délicate",
      headers: ["Besoin", "Ce que vous faites", "Ce que vous vérifiez"],
      rows: [
        ["Calculer un délai ou un écart", "Tapez = et lisez la formule proposée avec son aperçu", "Le résultat de trois lignes calculées à la main"],
        ["Extraire un code ou un prénom d'une cellule", "Saisissez deux exemples, puis acceptez la formule proposée", "Les lignes au format inhabituel"],
        ["Comprendre une formule héritée", "Sélectionnez la cellule et demandez à Copilot de l'expliquer", "Les plages citées dans l'explication"],
        ["Remplacer une cellule =COPILOT()", "Demandez dans le volet la formule ou la valeur équivalente", "L'absence d'erreur #NOM? après recalcul"],
        ["Totaliser par mois et par catégorie", "Demandez un tableau croisé en précisant lignes, colonnes et valeurs", "Un total recalculé avec SOMME.SI.ENS"],
        ["Faire ressortir les lignes en retard", "Décrivez la règle avec le nom des colonnes, puis appliquez", "Le nombre de lignes colorées"],
        ["Montrer une évolution", "Demandez un graphique en courbes avec titre et étiquettes", "L'échelle de l'axe et la période couverte"],
      ],
    },
    cas: {
      h3: "Mise en situation : le suivi des commandes fournisseurs d'un service achats",
      contexte: "Prenons une acheteuse dans une PME industrielle de 60 salariés. Son classeur de suivi compte 900 lignes de commandes fournisseurs sur six mois : fournisseur, catégorie, date de commande, date promise, date de livraison, montant. Chaque mois, elle prépare pour son directeur un point sur les retards. L'entreprise dispose de Copilot Chat dans Microsoft 365. L'exemple est fictif et sert l'exercice.",
      etapes: [
        "Elle duplique son classeur au format .xlsx et vérifie dans l'onglet Formules que le calcul est en mode automatique.",
        "Dans une colonne vide, elle tape = et accepte la formule proposée pour le retard en jours, après l'avoir contrôlée sur trois lignes.",
        "Elle ouvre le volet Copilot, choisit le mode Édition sur sa copie et colle le prompt ci-dessous.",
        "Elle recompte à la main les commandes en retard de son premier fournisseur et compare le résultat au tableau croisé.",
        "Elle copie le tableau et le graphique dans son point mensuel, avec une phrase par constat, et range la demande dans sa fiche pour le mois suivant.",
      ],
      prompt: "Ce classeur suit les commandes fournisseurs du semestre. Ses colonnes sont : Fournisseur, Catégorie, Date de commande, Date promise, Date de livraison, Montant HT, Retard (jours).\n\n1. Mets en orange les lignes où la Date de livraison est postérieure à la Date promise.\n2. Crée sur un nouvel onglet un tableau croisé dynamique : les fournisseurs en lignes, les mois de la Date promise en colonnes, le nombre de commandes en retard en valeurs.\n3. Ajoute sous ce tableau le retard moyen en jours par fournisseur, trié du plus élevé au plus faible.\n4. Crée un graphique en barres des cinq fournisseurs qui comptent le plus de commandes en retard, avec un titre et des étiquettes de données.\n\nLaisse l'onglet de départ tel quel. Indique le nombre de lignes que tu as prises en compte.",
      resultat: "Vous obtenez des lignes colorées, un onglet de synthèse et un graphique prêt à copier. Le tableau croisé est juste si les dates sont de vraies dates : une date importée comme du texte fausse la comparaison avec la date promise et le regroupement par mois. Le recomptage de l'étape 4 détecte ce cas. Le retard moyen mérite une phrase de prudence quand un fournisseur ne compte que deux ou trois commandes.",
    },
    pieges: [
      {
        titre: "La date importée comme du texte",
        texte: "Une date venue d'un autre logiciel reste parfois du texte. Excel la trie et la compare alors comme un mot, et un tableau croisé ne la regroupe pas par mois. Demandez à Copilot de repérer, avant tout calcul, les cellules de date qui ne sont pas au format date.",
      },
      {
        titre: "La formule recopiée trop vite",
        texte: "Une formule juste sur la deuxième ligne peut se tromper plus bas, sur une cellule vide ou un cas inhabituel. Testez-la sur trois lignes calculées à la main, dont une ligne atypique, avant de la recopier sur toute la colonne.",
      },
      {
        titre: "Les cellules =COPILOT() qui affichent #NOM?",
        texte: "Depuis le retrait de la fonction le 14 septembre 2026, un classeur qui en contenait garde ses anciennes valeurs jusqu'au premier recalcul, puis affiche une erreur. Cherchez =COPILOT( dans le classeur avant de le diffuser, et remplacez chaque cellule par une formule classique ou une valeur figée.",
      },
      {
        titre: "L'axe qui grossit les écarts",
        texte: "Un graphique dont l'axe vertical ne part pas de zéro fait paraître énorme un écart de quelques pour cent. Vérifiez l'échelle avant de coller le graphique dans un compte rendu, et précisez-la dans la demande si besoin.",
      },
      {
        titre: "L'accès standard à l'heure de pointe",
        texte: "Sans licence Microsoft Copilot, l'accès dépend de la capacité du service et peut être restreint aux heures de forte demande. Pour une session de groupe, gardez une solution de repli, comme une copie du fichier analysée dans ChatGPT.",
      },
      {
        titre: "Un classeur fournisseurs envoyé depuis un compte gratuit",
        texte: "Sur un compte ChatGPT gratuit ou Plus, vos échanges peuvent servir à améliorer les modèles d'OpenAI tant que l'option correspondante reste cochée. Faute d'offre professionnelle, retirez au moins les noms, les coordonnées et les références de contrats avant l'envoi.",
      },
    ],
  },
  audience: [
    { title: "Assistantes, assistants et gestionnaires administratifs", desc: "Vous tenez des tableaux de suivi, des plannings et des listes mis à jour chaque semaine. Vous voulez des formules justes et des mises en forme obtenues en une demande." },
    { title: "Acheteurs et approvisionneurs", desc: "Vous suivez commandes, délais et fournisseurs dans Excel. Vous voulez repérer les retards et préparer le point mensuel en quelques minutes." },
    { title: "Commerciaux et administration des ventes", desc: "Vous travaillez sur des extractions du CRM ou de l'ERP. Vous voulez totaliser par client et par mois, puis tracer le graphique qui accompagne votre compte rendu." },
    { title: "Managers qui veulent former une équipe entière", desc: "Vous cherchez un format court pour mettre toute une équipe au même niveau sur Excel et l'IA, avant d'orienter les profils les plus analytiques vers la formation de deux jours." },
  ],
  useCases: [
    { icon: '✍', title: "Formules proposées au signe égal", desc: "Copilot suggère la formule complète, avec un aperçu du résultat, dès que vous tapez = dans une cellule." },
    { icon: '🧩', title: "Formule déduite de deux exemples", desc: "Vous montrez le résultat attendu sur deux lignes, et Copilot écrit la formule pour toute la colonne." },
    { icon: '📊', title: "Tableau croisé en une phrase", desc: "Lignes, colonnes et valeurs décrites en français, puis tableau créé sur un nouvel onglet." },
    { icon: '🎨', title: "Lignes à surveiller mises en couleur", desc: "Retards, valeurs basses ou doublons mis en évidence après votre validation." },
    { icon: '📈', title: "Graphique prêt pour le compte rendu", desc: "Type, axes, titre et étiquettes précisés dans la demande, puis graphique copié dans Word ou PowerPoint." },
    { icon: '✅', title: "Contrôle avant envoi", desc: "Lignes recomptées, total recalculé et filtres vérifiés avant chaque diffusion." },
  ],
  modules: [
    {
      day: 1, title: "Séquence 1 · Vérifier son accès et préparer son fichier", duration: '20 min',
      description: "Chaque participant ouvre son propre classeur et s'assure que Copilot ou ChatGPT est prêt.",
      items: [
        "Repérer l'icône Copilot, le niveau d'accès affiché et les trois modes du volet",
        "Calcul en automatique, format .xlsx, copie de travail",
        "Rechercher les cellules =COPILOT() devenues inutilisables",
        "Solution de repli avec ChatGPT si Copilot manque",
      ],
    },
    {
      day: 1, title: "Séquence 2 · Obtenir et contrôler une formule", duration: '40 min',
      description: "Les formules apportent le premier gain du quotidien, et les erreurs les plus discrètes.",
      items: [
        "Formule complétée au signe égal, avec aperçu du résultat",
        "Formule déduite d'exemples saisis à la main",
        "Explication d'une formule héritée",
        "Test sur trois lignes avant de recopier",
      ],
      exercise: "Ajouter à votre fichier deux colonnes calculées par Copilot et les contrôler à la main.",
    },
    {
      day: 1, title: "Séquence 3 · Tableau croisé, tri, filtre et mise en évidence", duration: '50 min',
      description: "Une phrase bien construite remplace une série de clics, à condition de nommer les colonnes.",
      items: [
        "Décrire un tableau croisé : lignes, colonnes, valeurs",
        "Mettre en évidence, trier et filtrer, en mode Conversation puis en mode Édition",
        "Recalculer un total avec SOMME.SI.ENS",
        "Repérer les filtres actifs",
      ],
      exercise: "Construire le tableau croisé de votre point mensuel et recalculer l'un de ses totaux.",
    },
    {
      day: 1, title: "Séquence 4 · Un graphique et ses constats", duration: '40 min',
      description: "Le graphique sert une décision. Vous précisez ce qu'il doit montrer avant de le demander.",
      items: [
        "Choisir entre barres et courbes selon la question posée",
        "Préciser titre, axes et étiquettes dans la demande",
        "Écrire une phrase de constat par chiffre important",
        "Copier le résultat dans Word ou PowerPoint",
      ],
      exercise: "Produire le graphique et les constats de votre point mensuel.",
    },
    {
      day: 1, title: "Séquence 5 · Fiche de demandes et règles de prudence", duration: '30 min',
      description: "Vous gardez ce qui a marché pour le mois suivant et fixez vos règles de sécurité.",
      items: [
        "Ranger les demandes réussies dans une fiche réutilisable",
        "Travailler sur une copie, annuler, revenir à une version précédente",
        "Réserver les fichiers de l'entreprise à l'offre professionnelle",
        "Ce que la charte de l'entreprise dit des données chiffrées sensibles",
      ],
      exercise: "Compléter votre fiche de demandes et la partager avec votre équipe.",
    },
  ],
  objectives: [
    "Obtenir avec Copilot une formule adaptée à son fichier et la contrôler sur trois lignes",
    "Créer un tableau croisé dynamique par une demande qui nomme les lignes, les colonnes et les valeurs",
    "Mettre en évidence, trier et filtrer des lignes selon une règle formulée avec le nom des colonnes",
    "Produire un graphique titré et étiqueté adapté à la question posée",
    "Vérifier un résultat avant diffusion : lignes recomptées, total recalculé, filtres contrôlés",
  ],
  faq: [
    {
      q: "Combien coûte le Sprint IA Excel ?",
      a: "Le Sprint IA Excel est facturé 1 980 € HT la séance de trois heures, en intra-entreprise jusqu'à douze stagiaires ou en individuel ; la TVA, au taux de 20 %, s'y ajoute. Un groupe complet ramène la dépense à 165 € HT par stagiaire. Indiquez-nous le nombre de participants, l'outil dont ils disposent et le format souhaité, en présentiel ou à distance : le devis précise le nombre de séances quand un service entier doit y passer. Le financement par l'OPCO est détaillé dans la dernière question.",
    },
    {
      q: "Sprint IA Excel ou formation de deux jours sur l'analyse de données : lequel choisir ?",
      a: "Le Sprint dure trois heures, avec un seul outil et un seul fichier par participant : formule, tableau croisé, mise en évidence, graphique et contrôle. Le parcours de deux jours consacré à l'analyse de données vise ceux qui préparent les chiffres de la direction : ils y apprennent à nettoyer un export, à lancer des statistiques dans ChatGPT, à décortiquer un classeur avec Claude pour Excel et à rédiger la note qui accompagne l'analyse. Une entreprise peut former toute l'équipe au Sprint et envoyer deux ou trois analystes en formation de deux jours.",
    },
    {
      q: "Le Sprint IA Excel exige-t-il la licence Microsoft Copilot ?",
      a: "Non. Un abonnement Microsoft 365 professionnel qui donne droit à Copilot Chat permet déjà d'utiliser Copilot dans Excel, avec un accès standard. Le Sprint se fait aussi avec ChatGPT ouvert à côté du classeur. Si vous envisagez la licence, la page France de Microsoft, qui garde l'ancien nom de l'offre, affichait le 7 octobre 2026 un prix de 26 € HT par personne et par mois, sur engagement annuel payé d'avance, pour les grandes entreprises ; Microsoft Copilot Business, destiné aux structures qui ne dépassent pas 300 utilisateurs, y figurait à 18,20 € HT. Dites-nous quel outil vos participants ont sous la main : les exercices sont préparés pour celui-là.",
    },
    {
      q: "Quel niveau d'Excel le Sprint IA Excel suppose-t-il ?",
      a: "Un usage courant suffit : saisir des données, trier, filtrer, écrire une somme. Le Sprint part de ce niveau et vous apprend à confier à l'IA les formules et les tableaux qui vous prenaient du temps, puis à les contrôler. Les personnes qui construisent déjà des modèles complexes, avec des macros ou des liaisons entre classeurs, trouveront davantage dans la formation de deux jours sur l'analyse de données.",
    },
    {
      q: "Le Sprint IA Excel se fait-il en classe virtuelle ?",
      a: "Oui. À distance, chaque participant garde Excel et le volet Copilot ouverts sur son écran, et le formateur suit les exercices en partage d'écran. Un deuxième écran aide à suivre la démonstration tout en travaillant sur son fichier. Le prix et le déroulé restent ceux de la séance en présentiel.",
    },
    {
      q: "Peut-on travailler sur ses propres fichiers pendant le Sprint IA Excel ?",
      a: "Oui, c'est le principe : chaque participant apporte un classeur qu'il utilise chaque semaine. Avec Copilot, vous travaillez dans votre propre classeur, avec votre compte professionnel, de préférence sur une copie. Avec ChatGPT, déposez le fichier dans l'offre professionnelle ou retirez d'abord les colonnes de noms, d'adresses et de données personnelles.",
    },
    {
      q: "Le Sprint IA Excel est-il finançable par l'OPCO ?",
      a: "Oui, selon les règles que votre OPCO applique. Cet opérateur de compétences, rattaché à votre branche, ne paie que des organismes certifiés Qualiopi ; le certificat de Masteria, délivré par Certifopac sous le n° 725311-1, court jusqu'au 28 janvier 2029. Vous adressez la demande à votre OPCO avant le Sprint ; le programme et la convention viennent de nous. Le CPF reste hors jeu, Masteria n'étant pas éligible à ce dispositif. À Genève et à Bruxelles, la séance se règle sur devis, en euros HT.",
    },
  ],
  tarifs: {
    titre: "Le prix d'un Sprint IA Excel, et ce qu'il comprend",
    paras: [
      "Pour 1 980 € HT, le prix ne bouge pas entre un et douze stagiaires. Il couvre l'échange de cadrage, pendant lequel nous vérifions avec votre service informatique l'accès à Copilot ou à ChatGPT, la préparation des exercices sur l'outil dont vos équipes disposent, la fiche de demandes remise à chacun et l'attestation remise en fin de séance.",
      "Prenons un service comptable et achats de dix personnes : la séance revient à 198 € HT par participant. Pour un site entier, les séances s'enchaînent par équipe, avec le même déroulé et des exemples tirés des classeurs de chaque service. Votre OPCO peut prendre la séance en charge quand ses critères l'y autorisent ; la demande part avant la date, avec les pièces que nous fournissons.",
    ],
  },
  cta: {
    milieu: "Dites-nous quel classeur vos équipes ouvrent chaque lundi : le Sprint se construit autour de lui.",
    fin: {
      titre: "Préparons un Sprint IA Excel sur vos fichiers",
      texte: "Indiquez le nombre de participants, l'outil disponible (Copilot avec ou sans licence, ChatGPT) et deux ou trois tableaux qu'ils tiennent chaque semaine. Vous recevez en retour une proposition de date, le déroulé ajusté et la liste des vérifications à confier à votre service informatique.",
    },
  },
  apres: {
    titre: "Après le Sprint : le point mensuel préparé sans ressaisie",
    texte: "Quand le même classeur de suivi se reconstruit à la main chaque mois dans plusieurs services, à partir d'extractions copiées et collées, l'étape suivante consiste à l'alimenter automatiquement : un flux qui récupère l'extraction du logiciel de gestion, la nettoie, vérifie les totaux et remplit l'onglet de synthèse avant la réunion. Masteria peut bâtir ce flux sur vos fichiers et vos logiciels, puis montrer à un référent comment le faire évoluer. Comme tout développement, il n'est pas finançable par votre OPCO ; un forfait vous est proposé une fois le besoin cadré.",
  },
  terrain: {
    titre: "Sur le terrain : des ateliers Excel construits sur les fichiers d'un groupe industriel",
    texte: "De juillet à septembre 2026, des managers d'un groupe international du packaging ont suivi avec Masteria des sessions Copilot de deux jours. Plusieurs des treize ateliers se déroulaient dans Excel, sur les fichiers du groupe : tarifs, activité, coûts, effectifs. Deux mois plus tard, des managers citaient l'analyse de fichiers parmi les usages qu'ils avaient gardés. Le Sprint reprend cette règle en trois heures : chaque exercice part d'un classeur du participant.",
    lien: '/etudes-de-cas-ia#industrie',
  },
  liensAssocies: [
    { label: "Analyse de données avec l'IA : la formation de deux jours", href: '/formation-ia-analyse-donnees' },
    { label: 'Copilot dans Word et Excel, en formation complète', href: '/formation-copilot-word-excel' },
    { label: "Formation Microsoft Copilot pour toute l'entreprise", href: '/formation-microsoft-copilot' },
    { label: "L'IA pour les équipes finance, tous outils confondus", href: '/formation-ia-finance' },
    { label: 'Les autres formats du Sprint IA', href: '/formation-sprint-ia' },
  ],
  sources: [
    { name: "Microsoft Support : premiers pas avec Copilot dans Excel (modes, plateformes, icône)", url: "https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel" },
    { name: "Aide Microsoft : FAQ de Copilot dans Excel (licences, calcul automatique, formats de fichier)", url: "https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel" },
    { name: "Aide Microsoft : Allow editing, Plan et Chat only, les trois modes du volet Copilot", url: "https://support.microsoft.com/en-us/office/agent-mode-in-excel-a2fd6fe4-97ac-416b-b89a-22f4d1357c7a" },
    { name: "Microsoft Support : la fonction COPILOT et son retrait", url: "https://support.microsoft.com/en-us/office/copilot-function-5849821b-755d-4030-a38b-9e20be0cbf62" },
    { name: "Microsoft Support : accès standard et accès prioritaire à Copilot Chat", url: "https://support.microsoft.com/en-us/microsoft-365-copilot/standard-versus-priority-access-to-features-in-microsoft-365-copilot-chat" },
    { name: "Microsoft Support : suggestions de formules de Copilot dans Excel", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-formula-suggestions-turn-on-off" },
    { name: "Microsoft Support : visualiser ses données avec Copilot dans Excel", url: "https://support.microsoft.com/en-us/excel/copilot/visualize-your-data-with-copilot-in-excel" },
    { name: "Microsoft Support : conseils pour Copilot dans Excel (enregistrement automatique, versions)", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-tips" },
    { name: "Microsoft France : tarifs de la licence Copilot pour les entreprises et pour les PME", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
    { name: "Centre d'aide OpenAI : analyser des données avec ChatGPT (fichiers, graphiques interactifs)", url: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt" },
    { name: "Centre d'aide OpenAI : limites d'envoi de fichiers, dont trois fichiers par jour sur l'offre gratuite", url: "https://help.openai.com/en/articles/8555545-file-uploads-faq" },
    { name: "Centre d'aide OpenAI : entraînement des modèles, offres individuelles et offres Business", url: "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance" },
    { name: "Anthropic : utiliser Claude pour Excel (offres, versions prises en charge)", url: "https://claude.com/docs/office-agents/excel" },
  ],
}
