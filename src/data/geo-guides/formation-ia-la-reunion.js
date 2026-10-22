// Contenu propre à /formation-ia-la-reunion (guide terrain). Rendu par GeoIAGenericPage.
// Données économiques : INSEE, dossiers complets Département de La Réunion (974) et France (RP2023 et établissements fin 2024, parus le 27/08/2026), consultés le 22/10/2026.
// CHU de La Réunion (chu-reunion.fr), Grand Port Maritime de La Réunion (reunion.port.fr, chiffres 2025), Technopole de La Réunion : sites officiels, consultés le 22/10/2026.
// Financement : fiche « Opco EP à La Réunion » (2025) et communiqué AKTO du 26/02/2026 (délégation Atlas et OPCO 2i renouvelée au 01/01/2026), lus le 22/10/2026.
// AKTO, suspension du PDC 2026 des moins de 50 salariés dans 10 branches : brève akto.fr du 22/09/2026 (relevé du 08/10/2026).
// Outils : projets Claude, cinq projets sur un compte gratuit (centre d'aide Claude, vérifié le 22/10/2026) ; noms d'outils selon la fiche du lot
// (Microsoft Copilot, anciennement Microsoft 365 Copilot ; Vibe, anciennement Le Chat ; Gemini Notebook, anciennement NotebookLM).
// Fuseau : Indian/Reunion = UTC+4 sans heure d'été (base IANA) ; écart de 2 h pendant l'heure d'été européenne, 3 h du dernier dimanche d'octobre au dernier dimanche de mars.
// TVA : taux DOM non cité, impots.gouv.fr en maintenance le 22/10/2026 (taux non revérifié) ; la page renvoie au devis.
// Masteria n'a pas d'adresse à La Réunion : aucune implantation locale n'est affirmée.
export default {
  slug: 'formation-ia-la-reunion',
  pagePropre: true,
  dateModified: '2026-10-22',
  metaDesc: "Formation IA à La Réunion : ChatGPT, Claude, Gemini ou Copilot en classe virtuelle à l'heure de l'île, ou dans vos locaux. Certifié Qualiopi, OPCO.",
  intro: "En 2023, La Réunion comptait 301 302 emplois, et l'INSEE en classait 43,0 % dans l'administration publique, l'enseignement, la santé et l'action sociale, contre 31,2 % pour la France entière. À côté de ce bloc public, plus de 20 000 établissements de un à neuf salariés font vivre le commerce, le bâtiment, le tourisme et les services, de Saint-Denis à Saint-Pierre. Masteria, organisme de formation lyonnais spécialisé dans l'intelligence artificielle, forme ces équipes en classe virtuelle, à des horaires calés sur l'heure de l'île, ou dans leurs locaux quand plusieurs journées justifient le voyage.",
  resume: "Masteria apprend aux salariés, aux agents publics et aux dirigeants réunionnais à se servir de l'IA générative, à Saint-Denis, Saint-Pierre, Le Port, Saint-Paul et dans les autres communes de l'île. La session porte sur l'outil validé par l'employeur : Microsoft Copilot (anciennement Microsoft 365 Copilot), Gemini, ChatGPT, Claude ou Vibe (anciennement Le Chat) de Mistral AI. En classe virtuelle, elle a lieu en direct en début d'après-midi réunionnais, qui tombe le matin en métropole ; sur site, le devis chiffre le voyage du formateur. Organisme certifié Qualiopi, Masteria prépare les pièces que demandent l'OPCO de la branche, l'ANFH ou la collectivité.",
  programme: {
    titre: "Le programme suit l'outil autorisé par l'employeur, puis les écrits que l'équipe produit chaque semaine",
    intro: "Dans un hôpital, une commune ou un service de la Région, la séance démarre sur la règle d'usage écrite par l'établissement. Côté entreprise, elle part de la suite bureautique en place, Microsoft 365 ou Google Workspace. Les exercices portent ensuite sur des documents de l'île : réponse à une consultation publique, lettre à un administré, fiche d'un séjour dans les Hauts, synthèse des ventes d'un grossiste du Port.",
    items: [
      "Dresser avec le groupe la liste des informations qui peuvent entrer dans l'assistant et de celles qui restent dehors : dossiers de patients, données d'usagers, fichiers clients, prix négociés avec les fournisseurs.",
      "Formuler une demande complète (qui l'assistant doit incarner, ce qu'il doit faire, avec quel contexte, sous quelle forme) sur un document réel du service, puis comparer deux versions de la réponse.",
      "Relever avec l'assistant chaque exigence d'un dossier de consultation publié par une commune, le Département ou la Région, page citée, avant de chiffrer la réponse.",
      "Décliner la fiche d'une randonnée ou d'un séjour en anglais et en allemand, en interdisant à l'outil de toucher aux horaires, aux prix et aux conditions d'accès de la fiche d'origine.",
      "Extraire d'un export des ventes ou d'un tableau de suivi de chantier une synthèse chiffrée, en exigeant que l'assistant désigne les lignes sur lesquelles repose chaque chiffre.",
      "Réunir dans un projet Claude (un espace qui garde fichiers et consignes) ou dans un carnet de Gemini Notebook (anciennement NotebookLM) les procédures de l'équipe, puis n'interroger que ces sources.",
      "Enregistrer la consigne qui donne le meilleur résultat dans un modèle partagé, pour que les collègues absents ce jour-là la reprennent telle quelle.",
    ],
  },
  formats: {
    titre: "Deux après-midi en classe virtuelle à l'heure de Saint-Denis, ou une semaine sur site pour plusieurs groupes",
    paras: [
      "La Réunion vit toute l'année à UTC+4 (quatre heures de plus que le temps universel) et ne change jamais d'heure. L'écart avec la métropole vaut deux heures pendant l'heure d'été européenne, puis trois heures du dernier dimanche d'octobre au dernier dimanche de mars. Une séance qui démarre à 12 h 30 à Saint-Denis commence à 9 h 30 à Lyon pendant l'hiver métropolitain, à 10 h 30 pendant l'été : l'horaire convient au formateur comme au groupe. La journée de sept heures se partage donc en deux après-midi consécutifs de trois heures et demie, et chacun garde ses matinées pour le travail courant.",
      "La classe virtuelle passe par l'outil de visioconférence que votre structure utilise déjà, Teams, Zoom ou Google Meet. Chaque stagiaire travaille dans son propre compte et sur ses propres fichiers ; le formateur suit les écrans partagés et reprend les demandes au fil de l'eau. Un groupe compte douze personnes au plus, et autour de six la parole circule mieux à distance.",
      "La venue d'un formateur sur l'île prend son sens quand plusieurs groupes d'un même employeur se succèdent dans la semaine, au nord puis au sud par exemple : le vol long-courrier, l'hébergement et les jours de trajet se répartissent alors entre ces journées. Ces frais apparaissent ligne par ligne sur le devis, avant toute réservation de date.",
      "Un dirigeant de TPE ou une secrétaire générale de mairie qui préfère un travail en tête-à-tête choisit l'accompagnement individuel, à distance, bâti sur ses propres dossiers.",
    ],
  },
  acces: {
    titre: "Masteria travaille depuis Lyon et n'a pas d'adresse à La Réunion",
    paras: [
      "Masteria n'a ni bureau ni salle de formation sur l'île. Mathias Nizan, fondateur et responsable pédagogique, ou l'un des formateurs indépendants expérimentés du réseau anime les séances en direct depuis la métropole. Pour une session sur place, il rejoint vos locaux à Saint-Denis, Sainte-Clotilde, Le Port, Saint-Paul, Saint-Pierre ou dans une autre commune, en arrivant par l'aéroport Roland-Garros.",
      "Une structure répartie entre le nord et le sud de l'île réunit ses équipes dans une même classe virtuelle : personne ne prend la route entre Saint-Denis et Saint-Pierre pour une journée de formation.",
    ],
    liens: [{ label: 'Se former en classe virtuelle', href: '/formation-intelligence-artificielle-distanciel' }],
  },
  financement: {
    titre: "OPCO EP a une équipe sur l'île, AKTO y relaie Atlas et OPCO 2i : la branche de l'employeur décide",
    paras: [
      "Pour un salarié du privé, le financeur est l'OPCO de la convention collective, comme en métropole. OPCO EP dispose d'une délégation régionale avec des équipes à La Réunion, au service de l'artisanat, des services de proximité et des professions libérales. Atlas (services financiers et conseil) et OPCO 2i (industrie) confient depuis 2021 leur service de proximité sur l'île à AKTO, délégation renouvelée pour trois ans au 1er janvier 2026 : une banque, un cabinet de conseil ou un industriel réunionnais traite donc avec des conseillers AKTO, dans le cadre des priorités de sa propre branche.",
      "Dans dix de ses branches, dont les commerces de gros et les organismes de formation, AKTO a suspendu pour 2026 les financements du plan de formation des employeurs de moins de cinquante salariés : une entreprise concernée paie la session sur ses fonds ou prépare un dossier pour 2027. Les hôpitaux publics, CHU compris, forment leurs agents avec l'ANFH et leur plan de formation. Une commune, le Département ou la Région inscrit la dépense à son plan de formation et l'achète par bon de commande ; le CNFPT reste l'offre de base des agents territoriaux.",
      "Un commerçant ou un artisan non salarié se tourne vers l'AGEFICE ou le FAFCEA, une profession libérale vers le FIF-PL. Masteria, certifié Qualiopi, fournit programme et convention ; la demande est déposée avant l'ouverture de la session, et le financeur fixe seul sa prise en charge. Ces formations sur mesure ne mènent à aucune certification : le CPF ne s'y applique pas.",
    ],
    liens: [
      { label: 'Quel OPCO pour votre entreprise', href: '/quel-opco' },
      { label: 'Qui paie une formation IA : les circuits', href: '/financement-formation-ia' },
    ],
  },
  cta: {
    fin: {
      titre: "Une équipe à former à Saint-Denis, Saint-Pierre ou Le Port ?",
      texte: "Indiquez l'employeur, l'outil qu'il autorise et les après-midi qui vous arrangent, heure de l'île : vous recevez sous un jour ouvré une proposition de programme, le nom du financeur probable et un devis détaillé.",
    },
  },
  guide: {
    kicker: "Guide terrain La Réunion",
    h2: "À La Réunion, l'administration, l'enseignement, la santé et l'action sociale portent 43 % des emplois, et sept établissements employeurs sur dix ont de un à neuf salariés",
    lead: "Le recensement de 2023 compte 301 302 emplois sur l'île, dont 129 604 dans l'administration publique, l'enseignement, la santé et l'action sociale : 43,0 %, contre 31,2 % pour l'ensemble du pays. L'industrie n'en réunit que 6,8 %, quand la moyenne nationale atteint 11,5 %. Fin 2024, l'INSEE dénombrait 29 063 établissements employeurs, dont 20 491 de un à neuf salariés et 800 de cinquante salariés ou plus. Une formation IA réunionnaise sert donc deux publics : des agents qui travaillent sous les règles de leur établissement, et de petites équipes où la même personne rédige, vend et administre.",
    sections: [
      {
        h3: "L'île a gagné plus de 56 000 emplois en onze ans, et ses services vivent au rythme du port",
        paras: [
          "La Réunion comptait 889 679 habitants en 2023. Le nombre d'emplois y est passé de 244 823 en 2012 à 301 302 en 2023, une hausse de 23 %, soit plus de 5 000 postes nets par an en moyenne. Commerce, transports et services divers en rassemblent 41,0 %, et ces activités regroupent 18 168 établissements employeurs, 62,5 % de ceux de l'île.",
          "Au Port, le Grand Port Maritime de La Réunion a traité en 2025 370 433 EVP (équivalents vingt pieds, l'unité qui compte les conteneurs selon un format standard), soit plus de mille par jour en moyenne, et reçu 568 navires en escale, selon ses chiffres. Derrière ces quais travaillent importateurs, grossistes, transitaires et transporteurs, dont les journées se remplissent de commandes, de bons de livraison, de relances et de réclamations.",
          "Dans ces entreprises, l'IA rend du temps sur des écrits qui reviennent chaque jour : la réponse à un client livré en retard, la relance d'une facture, la synthèse d'un export de ventes, la consigne remise à un chauffeur. Le temps gagné dépend d'un savoir-faire précis : décrire la demande, fournir le bon document, relire avant d'envoyer.",
        ],
      },
      {
        h3: "À l'hôpital, en collectivité ou dans l'enseignement, l'employeur public fixe ses propres règles d'usage",
        paras: [
          "Le CHU de La Réunion, implanté à Saint-Denis avec le site Félix-Guyon et dans le sud avec ses sites de Saint-Pierre, Saint-Joseph, Le Tampon, Saint-Louis et Cilaos, annonce plus de 8 000 professionnels et 150 métiers. La Région, le Département, les vingt-quatre communes et leurs intercommunalités complètent ce bloc, avec les établissements scolaires et l'université.",
          "Ici, la formation commence par une question d'autorisation : quel assistant la direction du numérique a validé, avec quel compte et pour quelles données. Rien qui permette de reconnaître un patient ou un administré n'entre dans un outil grand public. Tant qu'aucun outil n'est homologué, les exercices portent sur des procédures, des modèles vierges et des textes publics, comme une délibération du conseil municipal ou le règlement d'une aide régionale.",
          "Le financement suit le statut : ANFH et plan de formation pour l'hôpital public, plan de formation et bon de commande pour la collectivité, jamais d'OPCO. Associez le service formation au premier échange, car l'inscription d'une dépense au plan prend souvent plus de temps que le montage du programme.",
        ],
      },
      {
        h3: "La Technopole accompagne les projets innovants, la formation Masteria s'adresse à ceux qui utilisent les outils",
        paras: [
          "Créée en 2001 par des institutions publiques, des organismes de recherche et des entreprises, la Technopole de La Réunion gère deux parcs technologiques, Technor à Saint-Denis et Techsud à Saint-Pierre, et un incubateur de la recherche publique qui aide des chercheurs à créer leur entreprise. Une société qui veut bâtir un produit innovant, IA comprise, y trouve des interlocuteurs.",
          "La formation vise un autre public : l'assistante de direction d'un négociant du Port, le chargé de communication d'une commune de l'Ouest, la gérante d'un gîte à Cilaos, le conducteur de travaux d'une entreprise de Saint-Pierre. Chacun apprend à confier une tâche précise à un assistant d'IA, à vérifier le résultat et à trier ce que l'outil peut recevoir. Ce socle vient avant tout chantier plus lourd, comme un assistant relié aux documents internes de l'entreprise.",
        ],
      },
    ],
    table: {
      caption: "De Saint-Denis à Saint-Pierre : l'outil, l'écrit travaillé et la précaution propres à chaque employeur réunionnais",
      headers: ["Employeur réunionnais", "Outil le plus probable", "Écrit travaillé en session", "Point de vigilance"],
      rows: [
        ["CHU, cliniques et établissements médico-sociaux", "Celui que la direction du numérique a homologué", "Procédures, livret d'accueil, comptes rendus de réunion de service", "Aucun patient reconnaissable ; données de santé confiées à un hébergeur certifié pour ces données (HDS)"],
        ["Région, Département et communes", "Celui que la collectivité a choisi, ou Vibe, conçu par la société française Mistral AI", "Lettres aux administrés, notes de synthèse, préparation des commissions", "Aucun compte personnel pour un usage professionnel"],
        ["Import, négoce et logistique autour du Port", "Microsoft Copilot sur un parc Microsoft 365, ChatGPT ou Claude ailleurs", "Réclamations, relances clients, synthèses d'exports de ventes", "Prix fournisseurs et fichiers clients gardés dans un espace d'entreprise"],
        ["Bâtiment et artisans", "ChatGPT ou Gemini, utilisables depuis un téléphone", "Devis, réponses aux consultations publiques, comptes rendus de chantier", "Quantités et prix repris du document source, jamais estimés par l'outil"],
        ["Tourisme, hébergement et activités de pleine nature", "ChatGPT ou Gemini", "Fiches de séjour, réponses aux demandes, textes en anglais et en allemand", "Horaires, prix et conditions d'accès relus sur la fiche d'origine"],
        ["TPE de services et professions libérales", "ChatGPT, Claude ou Gemini selon l'abonnement en place", "Courriels clients, publications, mise en forme de propositions", "Noms et coordonnées des clients retirés avant tout collage"],
      ],
    },
    cas: {
      h3: "Mise en situation : relever les exigences d'une consultation publique avant d'y répondre",
      contexte: "Prenons une entreprise de second œuvre de Saint-Pierre, douze salariés. Une commune du sud lance une consultation pour rénover une école, avec un règlement de la consultation, un cahier des clauses techniques particulières (CCTP, le document qui décrit les travaux attendus) et un bordereau de prix. Le gérant a dix jours pour répondre et veut savoir, avant de chiffrer, ce que la commune exige pièce par pièce.",
      etapes: [
        "Télécharger les pièces sur le profil acheteur de la commune (la plateforme où l'acheteur public publie ses marchés) et les garder au format PDF.",
        "Ouvrir une conversation neuve dans l'outil de l'entreprise, joindre le CCTP et le règlement de la consultation, puis coller la consigne ci-dessous.",
        "Ouvrir chaque pièce à la page citée pour contrôler les exigences relevées, en premier les dates, les visites obligatoires et les qualifications demandées.",
        "Faire valider la liste par le conducteur de travaux, puis s'en servir comme plan du mémoire technique.",
        "Garder la consigne pour la consultation suivante, en ne remplaçant que les pièces jointes.",
      ],
      prompt: "Tu aides une entreprise du bâtiment à préparer sa réponse à un marché public. Deux documents sont joints : le CCTP (cahier des clauses techniques particulières) et le règlement de la consultation.\n\nPremière tâche : dresse la liste de toutes les pièces que le candidat doit fournir, avec pour chacune la page du règlement où elle est demandée.\n\nDeuxième tâche : relève les dates et les obligations dont le non-respect écarte une offre : date limite de remise, visite de site obligatoire, qualifications ou assurances exigées. Cite le passage exact.\n\nTroisième tâche : liste les critères de jugement des offres et leur pondération, comme le règlement les présente.\n\nRègles : n'invente aucune exigence absente des documents. Si une information fait défaut, ou si deux pièces se contredisent, écris « à vérifier » et cite les deux passages.",
      resultat: "Un tableau des pièces à fournir, des conditions éliminatoires et des critères de notation, chacun relié à sa page. Le gérant chiffre ensuite en sachant ce que l'acheteur va regarder. La lecture du dossier reste à faire ; l'assistant sert de filet contre l'oubli d'une attestation ou d'une visite obligatoire, qui écarte une offre avant même l'examen du prix.",
    },
    pieges: [
      { titre: "Programmer une classe virtuelle à 8 h, heure de Saint-Denis", texte: "Pendant l'hiver métropolitain, 8 h à Saint-Denis correspond à 5 h à Lyon. Le début d'après-midi réunionnais tombe en matinée en métropole et convient aux deux côtés : réservez ce créneau dès le cadrage." },
      { titre: "Oublier le changement d'heure de la métropole", texte: "La Réunion garde la même heure toute l'année, la métropole non. Une série de séances qui enjambe le dernier dimanche d'octobre ou de mars voit l'écart passer de deux à trois heures, ou l'inverse : relisez chaque invitation après la bascule." },
      { titre: "Demander un financement OPCO pour un agent public", texte: "Un agent du CHU se forme avec l'ANFH et le plan de l'établissement, un agent territorial avec le plan de sa collectivité. Une demande adressée au mauvais financeur est refusée et fait perdre plusieurs semaines." },
      { titre: "Laisser l'assistant deviner un prix ou une exigence", texte: "Face à une pièce manquante, un modèle de langage (le programme qui produit le texte de l'assistant) propose volontiers un montant ou une obligation plausible. Dans un devis ou une réponse à un marché, l'erreur engage l'entreprise : imposez « à vérifier » dès qu'une donnée fait défaut." },
      { titre: "Ne prévoir aucune date de repli pendant l'été austral", texte: "En alerte rouge cyclonique, toute circulation est interdite et chacun reste à l'abri ; électricité et connexion peuvent tomber. Pendant la saison des cyclones, fixez une date de repli dès la réservation de la session." },
    ],
  },
  faq: [
    { q: "Formation ChatGPT, Claude ou Gemini à La Réunion : quel outil choisir ?", a: "Le bon outil est celui que votre structure autorise et finance. Une société sous Microsoft 365 travaille avec Microsoft Copilot, une entreprise sous Google Workspace avec Gemini. ChatGPT et Claude conviennent aux petites équipes qui écrivent beaucoup, en français comme en anglais. Masteria forme aux cinq outils, Vibe de Mistral AI compris, et une journée peut en comparer deux sur vos propres documents." },
    { q: "Pour quels documents suivre une formation Claude à La Réunion ?", a: "Claude se montre à l'aise sur les longs dossiers : un appel d'offres complet, un rapport annuel, un ensemble de procédures. Un projet Claude rassemble ces fichiers et des consignes permanentes dans un même espace, y compris sur un compte gratuit, limité à cinq projets (centre d'aide Claude, vérifié le 22 octobre 2026). La formation apprend à y travailler et à contrôler chaque passage que l'outil cite." },
    { q: "Peut-on suivre la formation en direct depuis La Réunion malgré le décalage horaire ?", a: "Oui. La classe virtuelle se tient en direct, en début d'après-midi à l'heure de l'île : 12 h 30 à Saint-Denis correspond à 9 h 30 à Lyon de fin octobre à fin mars, et à 10 h 30 le reste de l'année. La journée de sept heures se répartit sur deux après-midi consécutifs de trois heures et demie." },
    { q: "Un formateur peut-il venir dans nos locaux à Saint-Denis, Saint-Pierre ou Le Port ?", a: "Oui, quand le volume le justifie. Le formateur part de la métropole : vol, hébergement et jours de trajet figurent sur le devis, ligne par ligne. Réunir plusieurs groupes du même employeur dans la même semaine partage ces frais. Pour un seul groupe, la classe virtuelle revient moins cher." },
    { q: "Combien coûte une formation IA pour une structure réunionnaise ?", a: "Comptez à partir de 1 980 € HT par journée pour le groupe, de un à douze stagiaires ; l'accompagnement individuel part du même montant. La préparation, faite à partir de vos documents, est chiffrée à part sur le devis, comme le voyage d'une session sur site. Le taux de TVA appliqué dépend de votre situation et figure sur le devis." },
    { q: "Qui finance une formation IA à La Réunion ?", a: "Pour les salariés du privé, l'OPCO de la branche : OPCO EP a des équipes sur l'île, et AKTO y représente Atlas et OPCO 2i. Les hôpitaux publics passent par l'ANFH, les collectivités par leur plan de formation. Un commerçant ou un artisan non salarié s'adresse à l'AGEFICE ou au FAFCEA, une profession libérale au FIF-PL. Un président de SAS ne relève d'aucun de ces fonds ; il ne peut solliciter que l'OPCO de sa société, et seulement s'il se verse un salaire. Chaque financeur décide du montant pris en charge, sur une demande déposée avant la session." },
    { q: "Mon entreprise dépend d'AKTO : la formation sera-t-elle prise en charge en 2026 ?", a: "Tout dépend de la branche et de l'effectif. En 2026, AKTO ne prend plus en charge les actions du plan (le plan de développement des compétences) des structures de moins de 50 salariés relevant de dix branches, parmi lesquelles les commerces de gros et les organismes de formation, hors formations collectives proposées par la branche. Une entreprise concernée a deux options : financer la session elle-même, ou déposer un dossier pour 2027 selon les règles qu'AKTO publiera." },
    { q: "Des équipes novices en IA générative peuvent-elles suivre la session ?", a: "Oui, aucun bagage technique n'est demandé. La première heure part d'un écrit du poste : un courriel à un client, une note, une fiche. Chacun apprend à formuler sa demande, à vérifier la réponse et à tenir les données sensibles hors de l'outil." },
    { q: "Masteria a-t-elle un bureau à La Réunion ?", a: "Non. Masteria est un organisme de formation lyonnais, certifié Qualiopi (certificat 725311-1). Les sessions réunionnaises se suivent en classe virtuelle, animées en direct par Mathias Nizan ou par un formateur indépendant du réseau, ou sur place lors d'un déplacement prévu au devis." },
    { q: "Combien de temps faut-il pour organiser une session à La Réunion ?", a: "Le programme et le devis arrivent sous un jour ouvré. Prévoyez ensuite un mois environ pour l'instruction d'un dossier par l'OPCO, davantage pour une dépense à inscrire au plan d'un hôpital ou d'une collectivité. Une session sur site impose aussi de réserver les vols tôt." },
  ],
  sources: [
    { name: "Département de La Réunion (974) : chiffres du recensement 2023 et des établissements fin 2024 (INSEE, paru le 27 août 2026)", url: "https://www.insee.fr/fr/statistiques/2011101?geo=DEP-974" },
    { name: "France entière : dossier complet INSEE, recensement 2023, pour la comparaison", url: "https://www.insee.fr/fr/statistiques/2011101?geo=FE-1" },
    { name: "CHU de La Réunion : plus de 8 000 professionnels et 150 métiers, sites du nord et du sud", url: "https://www.chu-reunion.fr/" },
    { name: "Grand Port Maritime de La Réunion : chiffres clés 2025", url: "https://reunion.port.fr/" },
    { name: "Technopole de La Réunion : parcs Technor et Techsud, incubateur de la recherche publique", url: "https://www.technopole-reunion.com/" },
    { name: "Opco EP à La Réunion : délégation régionale et commission paritaire (fiche 2025)", url: "https://opcoep.fr/ressources/centre-ressources/region/re/opcoep-a-la-reunion.pdf" },
    { name: "AKTO : délégation de service d'Atlas et d'OPCO 2i renouvelée au 1er janvier 2026 pour La Réunion, les Antilles et la Guyane (communiqué du 26 février 2026)", url: "https://www.akto.fr/content/uploads/2026/02/AKTO_CP-Conventions-OPCO_VF.pdf" },
    { name: "Centre d'aide Claude : les projets, cinq sur un compte gratuit (vérifié le 22 octobre 2026)", url: "https://support.claude.com/en/articles/9517075-what-are-projects" },
    { name: "ANFH, organisme de formation continue des agents des hôpitaux publics", url: "https://www.anfh.fr/" },
  ],
}
