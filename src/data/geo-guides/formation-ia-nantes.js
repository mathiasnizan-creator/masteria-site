// Contenu propre à /formation-ia-nantes (guide terrain). Rendu par GeoIAGenericPage.
// Données économiques : INSEE, dossiers complets Nantes Métropole et France (RP2023, paru le 27/08/2026), consultés le 03/10/2026.
// Numérique : Nantes Saint-Nazaire Développement (page « Numérique responsable ») et Nantes Métropole (page « Nantes, place forte du numérique »), consultées le 03/10/2026.
// Recherche : ls2n.fr, univ-nantes.fr (chiffres mis à jour le 30/09/2026), irt-jules-verne.fr ; financeurs : ocapiat.fr, anfh.fr, consultés le 03/10/2026.
// Page propre du 07/10/2026 : faits d'outils de la fiche FAITS-OUTILS du 07/10 et de claude-facts.js (Claude Code inclus dès Pro).
export default {
  slug: 'formation-ia-nantes',
  pagePropre: true,
  dateModified: '2026-10-07',
  metaDesc: "Formation IA Nantes : quel outil pour les éditeurs SaaS, l'industrie de Bouguenais, l'agroalimentaire et la santé. Intra ou distanciel, Qualiopi, OPCO.",
  intro: "Nantes Métropole comptait 405 050 emplois en 2023 selon l'INSEE, et l'agence Nantes Saint-Nazaire Développement en attribue 34 500 au numérique. Une équipe support d'éditeur de logiciels, un bureau des méthodes de la sous-traitance aéronautique et une direction régionale d'Euronantes ne travaillent pas avec les mêmes logiciels et ne protègent pas les mêmes informations. Le cabinet lyonnais Masteria forme vos équipes nantaises dans vos locaux ou en ligne, avec l'outil qui correspond à votre filière et à votre suite bureautique.",
  resume: "Masteria forme les équipes de la métropole nantaise, des éditeurs de l'île de Nantes aux sous-traitants aéronautiques de Bouguenais, sur l'assistant que leur suite bureautique et leurs données permettent : Microsoft Copilot (anciennement Microsoft 365 Copilot) ou Gemini au quotidien, ChatGPT et Claude pour les agents partagés et les documents longs, Vibe pour qui préfère un éditeur français. Le prix de la journée, 1 980 € HT, vaut pour une salle de douze comme pour une personne seule. Atlas, OPCO 2i ou OCAPIAT peut la financer selon votre branche, et le déplacement depuis Lyon figure au devis.",
  programme: {
    titre: "À Nantes, la journée se joue dans la suite bureautique que l'entreprise paie déjà",
    intro: "La plupart des stagiaires nantais passent leurs journées sur des courriels, des comptes rendus, des propositions et des tableaux. Le cadrage part donc de l'outil en place et des écrits de l'équipe : tickets et notes de version chez un éditeur, procédures et fiches de non-conformité dans l'industrie, notes de comité dans une banque d'Euronantes.",
    items: [
      "Régler l'assistant intégré à la suite de l'entreprise, Copilot dans Outlook, Word et Teams ou Gemini dans Gmail et Docs, et vérifier quels fichiers il peut lire avant le premier exercice.",
      "Trier une file de tickets de support et rédiger des notes de version à partir du journal des modifications, avec un agent que toute l'équipe partage dans ChatGPT Business.",
      "Pour les développeurs, découvrir Claude Code, compris dans les offres Claude dès l'abonnement Pro, et en fixer les règles : aucune clé d'API dans le code soumis, relecture humaine de chaque modification.",
      "Reformuler une procédure de non-conformité pour l'atelier, en reprenant tels quels les seuils, les tolérances et les références de la procédure d'origine.",
      "Lire l'export de ventes d'une coopérative agroalimentaire et en tirer trois constats chiffrés, chacun vérifié dans le fichier.",
      "Garder hors de l'outil tout plan ou toute spécification reçus d'un donneur d'ordres de l'aéronautique ou de la navale, sauf accord écrit du contrat et de la DSI.",
      "Écrire une procédure de l'équipe sous forme de compétence (SKILL.md), format désormais pris en charge par les cinq grands assistants d'après notre relevé d'octobre 2026, plutôt que dans un GPT personnalisé, que ChatGPT retire à la mi-décembre.",
    ],
  },
  formats: {
    titre: "Dans la métropole ou sur un site de l'estuaire, en salle ou à distance",
    paras: [
      "Nous formons dans vos locaux de la métropole, de Saint-Herblain à Carquefou et de Rezé à Orvault, ou sur un site industriel de l'estuaire, avec douze participants au plus. Sept heures couvrent les usages quotidiens ; deux journées (3 960 € HT) conviennent aux équipes qui veulent bâtir leurs agents ou leurs compétences. Avant l'ouverture de Copilot à tout un siège d'Euronantes, un Sprint IA de trois heures réunit les grands effectifs. Sur un site de Bouguenais ou de Saint-Nazaire, prévoyez les formalités d'accès.",
      "Une directrice ou un ingénieur qui préfère travailler seul sur ses dossiers réserve une journée individuelle, facturée comme l'intra. Une équipe partagée entre Nantes, Saint-Nazaire et un siège parisien suit à distance le programme et les exercices de la salle.",
    ],
  },
  acces: {
    titre: "De Lyon à Nantes, puis la métropole, Saint-Nazaire et Angers",
    paras: [
      "Parti de Lyon, le formateur intervient partout dans la métropole nantaise, à Bouguenais comme sur l'île de Nantes, et en région jusqu'à Saint-Nazaire, Angers ou La Roche-sur-Yon. Le devis chiffre ce déplacement avant tout engagement de votre part ; la classe virtuelle s'en passe pour les équipes dispersées.",
    ],
  },
  financement: {
    titre: "Atlas pour les éditeurs, OPCO 2i pour l'industrie, OCAPIAT pour les coopératives",
    paras: [
      "Le financement suit la convention collective. Éditeurs de logiciels, sociétés de conseil et d'ingénierie sous convention Syntec, banques et assurances relèvent d'Atlas ; l'industrie et la métallurgie, sous-traitance aéronautique et navale comprise, d'OPCO 2i ; les coopératives agricoles et l'industrie agroalimentaire, d'OCAPIAT ; les médias, la culture et les industries créatives du Quartier de la création, de l'Afdas. Le CHU et les hôpitaux publics se tournent vers l'ANFH, une clinique privée vers OPCO Santé.",
      "Notre certification Qualiopi, au titre des actions de formation, rend la session éligible ; nous préparons le programme et le projet de convention, votre service RH les joint à la demande. L'OPCO examine le dossier en amont et ne s'engage pas après coup. La prise en charge dépend ensuite de la branche et des fonds disponibles. Entre le premier échange et la formation, prévoyez trois à quatre semaines. Le CPF n'entre pas en jeu.",
    ],
    liens: [{ label: 'Le guide du financement de la formation IA', href: '/financement-formation-ia' }],
  },
  cta: {
    fin: {
      titre: "Une équipe nantaise à préparer avant d'ouvrir Copilot ou ChatGPT à tous ?",
      texte: "Dites-nous la suite bureautique, la filière et l'effectif : sous 24 h, vous avez le programme et le chiffrage complet, voyage du formateur compris.",
    },
  },
  guide: {
    kicker: "Guide terrain Nantes",
    h2: "À Nantes, le numérique emploie autant que toute l'industrie : l'assistant se choisit filière par filière",
    lead: "Entre 2012 et 2023, Nantes Métropole est passée de 325 635 à 405 050 emplois selon l'INSEE, près de 80 000 postes de plus en onze ans, une hausse d'un quart. L'agence Nantes Saint-Nazaire Développement compte 34 500 emplois dans le numérique nantais en 2023, quand l'INSEE recense 34 311 emplois dans toute l'industrie de la métropole la même année. Ces deux mondes ont leurs propres logiciels et leurs propres secrets à protéger. Une formation IA utile à Nantes part de cette réalité : la suite bureautique de l'entreprise, ses données sensibles et sa branche professionnelle décident de l'outil avant le programme.",
    sections: [
      {
        h3: "L'emploi nantais a grossi d'un quart en onze ans, porté par les services",
        paras: [
          "Le recensement de 2023 donne une photographie nette de la métropole. Sur ses 405 050 emplois, 58,2 % se rattachent aux services marchands, commerce et transport compris, 27,4 % au secteur public élargi et 8,5 % à l'industrie, contre respectivement 31,2 % et 11,5 % pour ces deux derniers à l'échelle nationale. Nantes Métropole compte 689 456 habitants et 23 779 établissements employeurs fin 2024.",
          "Pour une formation, ce profil a une conséquence directe. La majorité des stagiaires nantais passent leur journée sur des courriels, des comptes rendus, des propositions commerciales, des tableaux et des présentations. Leur premier gain vient d'un assistant bien réglé dans la suite que l'entreprise paie déjà : Microsoft Copilot dans un environnement Microsoft 365, Gemini dans Google Workspace. ChatGPT et Claude prennent le relais quand l'équipe veut construire des agents partagés ou travailler sur des documents longs.",
          "Le chômage au sens du recensement touche 10,8 % des 15-64 ans de la métropole en 2023, contre 12,5 % en 2012 et 11,4 % en France la même année. Ce recul de près de deux points en onze ans accompagne la croissance de l'emploi décrite plus haut. Les stagiaires sont donc des salariés en poste, avec des dossiers en cours, et les exercices partent de ces dossiers, anonymisés quand il le faut.",
        ],
      },
      {
        h3: "Le numérique nantais pèse 34 500 emplois et forme 2 000 diplômés par an",
        paras: [
          "Nantes Métropole se présente comme la troisième métropole française pour l'emploi numérique, après Paris et Lyon. Le label « Métropole French Tech » date de novembre 2014, celui de « Capitale French Tech » de 2019, renouvelé en 2023. Selon Nantes Saint-Nazaire Développement, l'écosystème compte 300 startups, 133 millions d'euros levés en 2024, 70 formations numériques et 2 000 diplômés par an. La retailtech (logiciels pour le commerce et le e-commerce) y rassemble plus de 300 entreprises et plus de 2 000 emplois.",
          "Ces équipes connaissent déjà les assistants. Ce qui leur manque se situe un cran plus loin : des méthodes pour industrialiser les usages, avec des agents partagés pour les équipes support et marketing, des assistants de code pour les développeurs et des règles écrites sur ce qui peut sortir de l'entreprise. Nous traitons ces deux angles dans des guides dédiés, ChatGPT à Nantes pour les agents d'espace de travail et Claude à Nantes pour Claude Code et Cowork.",
        ],
      },
      {
        h3: "La recherche nantaise en IA s'appuie sur le LS2N, Nantes Université et l'IRT Jules Verne",
        paras: [
          "Le Laboratoire des sciences du numérique de Nantes (LS2N) réunit 530 membres et 214 thèses en cours sur cinq sites de recherche. Ses tutelles sont Nantes Université, Centrale Nantes, IMT Atlantique, le CNRS et Inria. Nantes Université annonce 42 000 étudiants, dont 5 500 internationaux, 5 680 personnels et 42 laboratoires de recherche, selon ses chiffres mis à jour le 30 septembre 2026.",
          "À Bouguenais, l'IRT Jules Verne, institut de recherche technologique dédié au manufacturing, travaille pour l'aéronautique, la navale, l'énergie, la défense, le ferroviaire et le BTP. Sur l'île de Nantes, la Halle 6 regroupe un pôle universitaire consacré aux cultures numériques, un hôtel d'entreprises et la Cantine numérique. L'association ADN Ouest fédère, de son côté, plus de 550 décideurs du numérique.",
          "Ces acteurs servent les projets qui dépassent l'usage d'un assistant : une thèse CIFRE (un doctorant salarié de l'entreprise, encadré par un laboratoire), un projet collaboratif, un prototype industriel. Une formation Masteria prépare le terrain en amont : des équipes qui savent formuler une tâche et juger une réponse arrivent chez un laboratoire avec un besoin précis. La journée aide aussi à trier ce qui relève d'un outil du marché bien réglé et ce qui demande un développement ou une recherche.",
        ],
      },
    ],
    table: {
      caption: "De l'île de Nantes à l'estuaire : six milieux, leur assistant et la donnée à garder chez soi",
      headers: ["Milieu nantais", "Assistant pressenti", "Écrit visé", "Donnée à garder chez soi"],
      rows: [
        ["Édition de logiciels et retailtech", "ChatGPT Business pour les agents partagés, Claude Team pour Claude Code", "Tri des tickets, notes de version, relecture de code", "Crédits consommés par les agents, clés d'API hors des dépôts"],
        ["Aéronautique et navale (Bouguenais, Saint-Nazaire)", "Microsoft Copilot dans un environnement Microsoft 365, Vibe de Mistral AI pour un éditeur français", "Procédures, documentation technique, réponses aux consultations", "Clauses de confidentialité des donneurs d'ordres, plans hors de tout outil non validé"],
        ["Coopératives et agroalimentaire", "Copilot ou Gemini, selon la suite bureautique du siège", "Fiches produits, courriers aux adhérents, lecture d'exports de ventes", "Mentions réglementaires et allégations relues par le service qualité"],
        ["Banque, assurance et conseil d'Euronantes", "Microsoft Copilot, Claude pour les dossiers longs", "Notes de comité, synthèses de dossiers, réponses aux clients", "Données clients seulement dans une offre entreprise validée par la conformité"],
        ["Santé (CHU, cliniques, laboratoires)", "L'outil autorisé par la DSI de l'hôpital ou de la clinique", "Procédures qualité, supports de formation interne, synthèses de littérature", "Aucune donnée de patient identifiante ; hébergeur certifié HDS pour ces données"],
        ["Industries créatives du Quartier de la création", "ChatGPT ou Gemini", "Déclinaisons de contenus, scripts, traductions", "Droits sur les textes et images réutilisés, relecture avant diffusion"],
      ],
    },
    cas: {
      h3: "Mise en situation : une coopérative explique une nouvelle procédure de traçabilité à ses adhérents",
      contexte: "Prenons la chargée de communication d'une coopérative agricole de Loire-Atlantique. Le service qualité vient de publier une procédure de traçabilité de douze pages, écrite pour des techniciens. Elle doit en tirer en deux jours un courrier aux adhérents, une foire aux questions pour les techniciens de terrain et un message court envoyé par SMS. La coopérative travaille sous Microsoft 365 avec Copilot ; l'exercice fonctionne de la même façon avec ChatGPT, Claude, Gemini ou Vibe.",
      etapes: [
        "Vérifier avec le service qualité que la procédure peut être traitée dans l'outil de l'entreprise, puis retirer les noms d'adhérents et les numéros d'exploitation.",
        "Dans l'assistant de l'entreprise, démarrer un échange, joindre la procédure et y placer la consigne ci-dessous.",
        "Relire le tableau des obligations contre la procédure, ligne par ligne, avant de lire les textes produits.",
        "Faire valider le courrier et la foire aux questions par le responsable qualité, garant des formulations réglementaires.",
        "Enregistrer le prompt validé dans la bibliothèque de l'équipe pour la prochaine procédure.",
      ],
      prompt: "Tu aides le service communication d'une coopérative agricole. Le document joint est une procédure de traçabilité écrite par notre service qualité pour des techniciens.\n\nPremière tâche : dresse un tableau des obligations nouvelles pour les adhérents. Colonnes : obligation, date d'entrée en vigueur, adhérents concernés, document ou geste attendu, numéro de page de la procédure.\n\nDeuxième tâche : rédige un courrier aux adhérents d'une page au plus. Ton direct et respectueux, phrases courtes, vocabulaire d'exploitant agricole. Commence par ce qui change et à partir de quand, puis ce que l'adhérent doit faire, puis à qui poser ses questions.\n\nTroisième tâche : rédige une foire aux questions de huit questions pour les techniciens de terrain. Chaque réponse tient en trois phrases au plus et se termine par le numéro de page de la procédure.\n\nQuatrième tâche : propose un SMS de 300 caractères au plus qui annonce le changement et renvoie vers le courrier.\n\nRègles : n'ajoute aucune obligation absente de la procédure. Recopie les seuils, les délais et les dates tels qu'ils figurent dans le document. Si un passage est ambigu, liste-le à part avec la question à poser au service qualité.",
      resultat: "Un tableau des obligations référencé, trois textes adaptés à trois publics et la liste des passages à clarifier. Le temps gagné porte sur la reformulation ; la justesse reste l'affaire du service qualité. Les seuils et les dates recopiés tels quels se contrôlent en quelques minutes contre la procédure, et ce contrôle ne se saute jamais : une date fausse dans un courrier envoyé à tous les adhérents oblige à un rectificatif.",
    },
    pieges: [
      { titre: "Former à un assistant étranger à la suite bureautique", texte: "Une entreprise équipée de Microsoft 365 qui forme ses équipes à un autre assistant les condamne au copier-coller entre deux environnements. Partez de l'existant, puis ajoutez un second outil pour les usages qu'il couvre mal, comme les agents partagés ou les documents de plusieurs centaines de pages." },
      { titre: "Former sur des comptes personnels", texte: "Un compte gratuit ou personnel échappe à l'administration de l'entreprise : aucune règle commune de conservation, aucun contrôle des accès. Nous demandons un espace d'entreprise, même en période d'essai, pour tout exercice sur des documents internes." },
      { titre: "Adresser à un OPCO la demande du CHU", texte: "Un hôpital public forme ses agents avec l'ANFH ; une clinique privée de la métropole passe par OPCO Santé. Identifiez le bon financeur avant de bloquer une date avec vos équipes." },
      { titre: "Déposer la demande de prise en charge après la session", texte: "Les OPCO examinent la demande avant le début de la formation. Un dossier envoyé après coup laisse la facture à l'entreprise." },
      { titre: "Confier à un assistant les fichiers d'un donneur d'ordres", texte: "Les contrats de la sous-traitance aéronautique et navale encadrent la diffusion des données techniques. Un plan ou une spécification reçus d'un client n'entrent dans un outil d'IA qu'avec l'accord écrit du contrat et de la DSI." },
    ],
  },
  faq: [
    { q: "Éditeur SaaS, industriel ou PME tertiaire : quel assistant d'IA à Nantes ?", a: "Votre suite bureautique et vos données orientent le choix. Une PME tertiaire d'Euronantes sous Microsoft 365 gagne d'abord avec Copilot, une équipe sous Google Workspace avec Gemini. Les éditeurs de logiciels tirent parti des agents de ChatGPT Business et de Claude Code, compris dans les offres Claude payantes. Un industriel qui préfère un éditeur français regarde Vibe, chez Mistral AI. La journée se construit sur l'outil que vos équipes ont déjà." },
    { q: "Quels métiers nantais passent en premier ?", a: "Commerciaux, marketing, service client, ressources humaines, finance, qualité, achats, gestion de projet, informatique ou juridique : le catalogue en couvre bien d'autres. Pour la métropole, les exercices partent des documents de chaque filière : tickets et notes de version chez un éditeur, procédures et fiches de non-conformité dans l'industrie, notes de comité dans une banque d'Euronantes." },
    { q: "Combien une entreprise nantaise paie-t-elle pour une session sur site ?", a: "1 980 € HT par journée, pour une salle de douze au plus, ce qui revient à 165 € HT par stagiaire quand elle est pleine ; la journée individuelle se facture autant. Le Sprint IA destiné à tout un effectif figure sur une ligne distincte. Le devis, envoyé en un jour ouvré, ajoute le trajet depuis Lyon." },
    { q: "Atlas, OPCO 2i, OCAPIAT ou ANFH : qui finance la formation d'une équipe nantaise ?", a: "Notre certificat Qualiopi (725311-1, Certifopac, valable jusqu'en janvier 2029) permet à l'opérateur de votre branche d'étudier la demande, dans la limite de vos fonds. Les éditeurs et sociétés de conseil sous convention Syntec relèvent d'Atlas, la métallurgie d'OPCO 2i, les coopératives et l'agroalimentaire d'OCAPIAT ; le CHU, hôpital public, dépend de l'ANFH. Programme et convention viennent de nous ; votre service formation adresse la demande avant la session." },
    { q: "Salle, tête-à-tête, Sprint IA : quelles formules pour une entreprise nantaise ?", a: "En salle, une douzaine de collègues au plus travaillent ensemble sur leurs propres documents, dans vos locaux. Le tête-à-tête convient au dirigeant ou à l'expert pressé d'avancer sur ses propres affaires. Le Sprint IA de 3 heures s'adresse aux grands effectifs, typiquement avant l'ouverture de Copilot à tout un siège d'Euronantes. Chaque formule existe à distance pour les équipes partagées entre Nantes, Saint-Nazaire et d'autres sites." },
    { q: "Nos collaborateurs nantais n'ont jamais utilisé d'assistant : par où commencer ?", a: "Par une journée sans prérequis technique. Dans une métropole où 58 % des emplois relèvent des services marchands, la première journée porte sur les documents du quotidien : un courriel délicat, un compte rendu, la synthèse d'un tableau. Chacun y apprend à poser une demande précise, à contrôler la réponse et à repérer les données qui ne doivent pas entrer dans l'outil. Une équipe déjà à l'aise enchaîne sur un programme métier." },
    { q: "Quel délai entre le premier appel et la session à Nantes ?", a: "Le programme et le devis partent dans la journée ouvrée. Si l'OPCO intervient, il faut ensuite déposer la demande et attendre sa réponse, soit trois à quatre semaines en général. Sans financement, la date dépend de votre agenda et de celui du formateur. Pour une session sur un site industriel de Bouguenais ou de Saint-Nazaire, prévoyez aussi les formalités d'accès au site." },
    { q: "Qui anime une session à Nantes ?", a: "Mathias Nizan ou une formatrice, un formateur indépendant dont la proposition indique le nom. Le cabinet travaille depuis Lyon ; la session nantaise a lieu chez vous ou à distance, et le voyage du formateur est chiffré au devis." },
    { q: "Avec quels acteurs de la recherche en IA une entreprise nantaise peut-elle travailler après une formation ?", a: "Le LS2N, laboratoire des sciences du numérique, compte 530 membres sous la tutelle de Nantes Université, Centrale Nantes, IMT Atlantique, du CNRS et d'Inria. L'IRT Jules Verne, à Bouguenais, conduit des projets de recherche technologique pour l'industrie manufacturière. Une formation aide vos équipes à préciser leur besoin avant d'engager avec ces acteurs un projet plus ambitieux, comme une thèse CIFRE ou un prototype." },
  ],
  sources: [
    { name: "Recensement 2023 de Nantes Métropole : dossier complet INSEE paru fin août 2026", url: "https://www.insee.fr/fr/statistiques/2011101?geo=EPCI-244400404" },
    { name: "Recensement 2023, France entière : dossier complet INSEE", url: "https://www.insee.fr/fr/statistiques/2011101?geo=FE-1" },
    { name: "Nantes Saint-Nazaire Développement : filière numérique responsable, chiffres-clés", url: "https://www.nantes-saintnazaire.fr/filieres/numerique-responsable/" },
    { name: "Nantes Métropole : Nantes, place forte du numérique", url: "https://metropole.nantes.fr/numerique" },
    { name: "LS2N : Laboratoire des sciences du numérique de Nantes", url: "https://www.ls2n.fr/" },
    { name: "Nantes Université : Nantes Université en chiffres", url: "https://www.univ-nantes.fr/" },
    { name: "IRT Jules Verne : institut de recherche technologique dédié au manufacturing", url: "https://www.irt-jules-verne.fr/" },
    { name: "OCAPIAT : opérateur de compétences de la coopération agricole et de l'agroalimentaire", url: "https://www.ocapiat.fr/" },
    { name: "L'ANFH, financeur de la formation dans les hôpitaux publics", url: "https://www.anfh.fr/" },
  ],
}
