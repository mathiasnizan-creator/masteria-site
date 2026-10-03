// Contenu propre à /ia-retail-ecommerce. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Fevad (bilan 2025), INSEE Première n° 2120, EUR-Lex (règlement (UE) 2023/988 art. 19, directive (UE) 2024/825), Assemblée nationale et Sénat (projet de loi DDADUE, art. 20), DGCCRF, Google Merchant Center, Légifrance (L.221-18, L.221-21).
export default {
  slug: 'ia-retail-ecommerce',
  dateModified: '2026-10-03',
  intro: "En retail et en e-commerce, l'IA rapporte d'abord sur le catalogue : des milliers de descriptions à écrire et à maintenir dans chaque langue de vente, et des demandes de clients qui portent sur une commande précise. Une fiche publiée engage pourtant le vendeur, et le droit européen en encadre désormais le contenu, des avertissements de sécurité aux allégations environnementales. Masteria construit des générateurs qui écrivent à partir de votre référentiel produit et de vos règles, avec une validation avant publication, et des agents de service client qui lisent la commande avant de répondre.",

  offresIntro: [
    "Pour une enseigne, un site marchand ou un distributeur, nos trois métiers partent du même endroit : le référentiel produit, c'est-à-dire le PIM (logiciel qui centralise les fiches et leurs attributs) ou la base articles de l'ERP, le logiciel de gestion qui suit stocks et commandes.",
    "Le conseil mesure ce que ce référentiel contient et ce qui lui manque. Le développement branche les outils dessus, et l'automatisation fait circuler les données entre les fournisseurs, le catalogue, le site, les places de marché et le service client.",
  ],
  offres: [
    {
      desc: "Nous auditons un échantillon de votre catalogue : attributs renseignés, coordonnées du fabricant et avertissements présents, allégations environnementales, textes alternatifs des images. Nous chiffrons ensuite ce qu'une génération assistée peut produire et ce qui doit d'abord être collecté auprès des fournisseurs. La feuille de route sépare les chantiers de données des chantiers d'IA.",
      points: ["Audit de complétude du catalogue", "Revue des mentions obligatoires", "Feuille de route données puis IA"],
    },
    {
      desc: "Nous développons le générateur de fiches branché sur votre PIM, avec ses règles par catégorie, son glossaire de marque et sa liste de formulations bloquées, puis l'agent de service client qui consulte la commande, le suivi du transporteur et vos conditions de retour avant de répondre. Toutes les sorties passent par une file de validation dans vos outils.",
      points: ["Générateur de fiches sous règles", "Agent relié aux commandes", "File de validation avant publication"],
    },
    {
      desc: "Nous automatisons l'entrée des données fournisseurs : lecture des fichiers reçus, extraction des attributs, rapprochement avec le référentiel, signalement des manques à l'acheteur. Les mêmes chaînes préparent les flux vers les places de marché et les comparateurs de prix, avec un contrôle de cohérence avant chaque envoi.",
      points: ["Intégration des fichiers fournisseurs", "Flux vers les places de marché", "Contrôle de cohérence avant envoi"],
    },
  ],
  regie: [
    "Dans le commerce, un développeur détaché rejoint l'équipe e-commerce ou l'équipe données produit, au moment d'une migration de PIM, d'une refonte du site ou d'une ouverture de marché à l'étranger. Il code sur vos dépôts avec vos développeurs, cale ses mises en production sur votre calendrier commercial (soldes, fêtes de fin d'année) et laisse une documentation que l'équipe reprend à son départ.",
  ],
  formation: [
    "Les outils changent le travail des chefs de produit web, des équipes catalogue, des conseillers du service client et des acheteurs qui échangent avec les fournisseurs. Nous les formons à maintenir les règles du générateur, à repérer un attribut ou une allégation inventés, et à reprendre la main sur une réponse sensible.",
    "La journée intra coûte 1 980 € HT pour le groupe et se déroule sur vos fiches et vos demandes clients réelles. En France, la certification Qualiopi de Masteria ouvre le financement de cette journée par votre OPCO. L'audit du catalogue et le développement du générateur relèvent du conseil et du développement, que l'OPCO ne finance pas.",
  ],

  guide: {
    kicker: "Guide retail et e-commerce",
    h2: "Une fiche générée par IA engage le vendeur : le projet commence dans le référentiel produit",
    lead: "Le commerce en ligne, produits et services, a atteint 196,4 milliards d'euros en France en 2025 selon la Fevad, qui estime sa part à 12 % des ventes de produits du commerce de détail. Dans le commerce, 13 % des entreprises de 10 salariés ou plus utilisaient l'IA cette année-là d'après l'INSEE, six points sous la moyenne européenne du secteur. Le catalogue est le terrain le plus visible : chaque référence demande un titre, une description et des traductions exactes. Une fiche publiée engage pourtant le vendeur, qu'un rédacteur ou un modèle l'ait écrite, et le droit européen en encadre désormais le contenu. Le chantier commence donc dans le référentiel produit.",
    sections: [
      {
        h3: "Le générateur lit les attributs et n'en invente aucun",
        paras: [
          "Un générateur de fiches vaut ce que vaut le référentiel qu'il lit. L'audit d'un échantillon de fiches montre vite les manques : matière, dimensions, compatibilité, pays d'origine. Un modèle de langage sans consigne comble ces vides avec des valeurs plausibles, et une compatibilité plausible mais fausse sur une pièce détachée se termine en retour de colis. La première règle s'écrit donc avant le premier prompt (la consigne donnée au modèle) : un attribut absent bloque la fiche, qui part chez l'acheteur pour qu'il le réclame au fournisseur.",
          "Chaque canal ajoute ses contraintes. Google Merchant Center limite le titre à 150 caractères et demande que tout titre créé avec l'IA générative soit transmis par l'attribut structured_title, déclaré avec la valeur trained_algorithmic_media ; la même règle vaut pour les descriptions. Le générateur produit donc une version par canal et garde la trace de l'origine de chaque texte. Cette trace sert aussi en interne, le jour où une fiche est contestée par un client ou par un contrôleur.",
        ],
      },
      {
        h3: "Le règlement sur la sécurité des produits fixe le contenu minimal de l'offre en ligne",
        paras: [
          "Depuis le 13 décembre 2024, l'article 19 du règlement (UE) 2023/988 fixe ce que toute offre en ligne doit indiquer de manière claire et visible. La liste comprend le nom et les adresses postale et électronique du fabricant, la personne responsable dans l'Union quand le fabricant est établi ailleurs, et les informations qui identifient le produit, dont une image et son type. S'y ajoutent les avertissements de sécurité, dans une langue que les consommateurs du pays de vente comprennent aisément.",
          "Ces champs viennent du fabricant ou de l'importateur et se recopient tels quels. Le générateur les reçoit en lecture seule : il les place dans la fiche et ne les reformule jamais, même pour gagner de la place. Si l'un manque, la publication s'arrête sur le marché concerné jusqu'à réception de l'information. Cette règle se teste comme les autres, sur un jeu de fiches incomplètes construit au cadrage, avant que le générateur ne touche au catalogue réel.",
        ],
      },
      {
        h3: "Les allégations environnementales génériques sont visées, et la France transpose en retard",
        paras: [
          "La directive (UE) 2024/825 interdit les allégations environnementales génériques que le professionnel ne peut pas appuyer sur une performance environnementale excellente reconnue. Elle cite « vert », « écologique », « biodégradable », « respectueux de l'environnement » ou « économe en énergie ». Les États membres devaient appliquer ces règles à partir du 27 septembre 2026. En France, le projet de loi qui les transpose, adopté par le Sénat le 18 février 2026, n'avait pas encore été examiné en séance à l'Assemblée nationale au 3 octobre 2026.",
          "La DGCCRF a reconnu ce retard lors d'un webinaire en juin, et elle a précisé qu'aucune exception ne vaudrait pour les allégations publiées sur un site. Un catalogue se nettoie donc dès maintenant. Le générateur reçoit une liste de formulations bloquées, tenue par votre service juridique, et une règle simple : une allégation n'apparaît que si la fiche porte le label ou la preuve qui la justifie. Les fiches existantes repassent par le même filtre avant la refonte.",
        ],
      },
      {
        h3: "L'accessibilité demande un texte alternatif pour chaque image du catalogue",
        paras: [
          "Un site marchand relève depuis le 28 juin 2025 des exigences d'accessibilité issues de la directive (UE) 2019/882, que la loi du 9 mars 2023 a transposée. La DGCCRF demande notamment de proposer des équivalents textuels à tout contenu non textuel. Elle rappelle aussi qu'un site de vente en ligne ne bénéficie pas du régime transitoire qui court jusqu'en 2030 pour certains produits et services.",
          "Un catalogue compte souvent plusieurs photos par produit, et chacune appelle un texte alternatif, la description qu'un lecteur d'écran lit à voix haute. Un modèle capable de lire une image en propose un premier jet à partir de la photo et des attributs du produit. Une personne le relit, au moins sur un échantillon par catégorie, et corrige ce que le modèle a vu de travers : une couleur, une matière, un nombre de pièces.",
        ],
      },
      {
        h3: "Le service client répond depuis la commande, et la rétractation passe par une fonctionnalité en ligne",
        paras: [
          "Une question de client porte souvent sur une commande précise : un colis en retard, un retour, un remboursement. L'agent lit donc la commande, le suivi du transporteur et vos conditions générales avant de répondre. Le délai de rétractation de quatorze jours prévu par l'article L.221-18 du code de la consommation court, pour un bien, à partir de sa réception : l'agent le calcule sur la date de livraison enregistrée, que le transporteur a confirmée.",
          "Depuis le 19 juin 2026, l'article L.221-21 impose aux contrats conclus au moyen d'une interface en ligne une fonctionnalité qui permet au consommateur d'exercer sa rétractation, sans frais. L'agent y guide le client et n'en invente pas d'autre. Les demandes sensibles (litige, produit abîmé, remboursement contesté) passent à un conseiller selon des règles écrites, et chaque réponse cite la commande concernée.",
        ],
      },
    ],
    table: {
      caption: "Une fiche produit : ce que le générateur écrit, ce que le référentiel fournit",
      headers: ["Élément", "D'où vient l'information", "Rôle du générateur"],
      rows: [
        ["Titre", "Attributs du PIM", "Rédiger une version par canal, 150 caractères au plus pour Google, déclarer l'origine IA dans le flux"],
        ["Description", "Attributs, glossaire de marque, guide de ton par langue", "Rédiger et traduire, sous relecture par échantillon"],
        ["Fabricant, personne responsable, avertissements", "Fabricant ou importateur (article 19 du règlement (UE) 2023/988)", "Recopier tels quels, bloquer la fiche si un champ manque"],
        ["Allégation environnementale", "Label ou preuve rattachés au produit", "Bloquer toute formulation générique de la liste tenue par le juridique"],
        ["Texte alternatif des images", "Photo et attributs du produit", "Proposer un premier jet qu'une personne relit"],
        ["Réponse sur une commande", "Commande, suivi du transporteur, conditions générales", "Répondre en citant la commande, passer la main sur un litige"],
      ],
    },
    cas: {
      h3: "Retour de mission : chez un distributeur B2B, la base articles devient la source des assistants commerciaux",
      contexte: "Le cas vient de la distribution professionnelle : un distributeur informatique qui vend à des entreprises, rattaché à un groupe européen, avec 58 commerciaux. Les cotations, les relances et les réponses aux cahiers des charges se recomposaient souvent de mémoire, alors que l'ERP, la base articles et le CRM contenaient l'information. Pour un site marchand, la leçon est directe : un assistant utile lit le référentiel avant d'écrire.",
      etapes: [
        "Partir des tâches qui puisent dans la base articles : chiffrer une demande arrivée par mail, répondre à un cahier des charges, suggérer une marque propre à la place d'une référence.",
        "Confier la conception aux vendeurs eux-mêmes : dix volontaires, formés pendant deux jours, bâtissent chacun une compétence Claude (des consignes et des fichiers réunis pour une tâche précise) sur leurs propres données.",
        "Faire arbitrer par la direction, assistant par assistant, ce que l'outil lit dans l'ERP et le CRM, ce qu'il doit citer et ce qui reste au commercial.",
        "Étendre le dispositif aux 48 autres vendeurs pendant cinq sessions de deux jours, avec les référents comme relais dans chaque groupe.",
        "Démarrer par la relance de devis, puis brancher les autres assistants au fil des semaines, sous la garde des référents.",
      ],
      resultat: "Les onze assistants lisent la base articles, l'ERP et le CRM, et l'un d'eux propose de remplacer une référence par une marque propre du distributeur, un geste de merchandising qu'un catalogue structuré rend possible. Les premiers tournent en production. La direction vise une cible fixée au départ : que 58 commerciaux produisent comme une équipe de 70, sans embauche.",
      lien: { href: "/etudes-de-cas-ia#distribution", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      { titre: "Laisser le générateur compléter un attribut manquant", texte: "Un modèle de langage comble un vide avec une valeur plausible : une dimension, une compatibilité, une composition. La règle s'écrit dès la conception et se teste sur un échantillon : un attribut absent du référentiel bloque la fiche, et l'acheteur le réclame au fournisseur." },
      { titre: "Attendre la loi française pour nettoyer les allégations", texte: "La date européenne du 27 septembre 2026 est passée, et la DGCCRF a indiqué qu'aucune exception ne vaudrait pour les allégations publiées sur un site. Le filtre se pose dès maintenant sur les fiches existantes, pour que le catalogue soit prêt le jour où la loi française s'appliquera." },
      { titre: "Retraduire les avertissements de sécurité", texte: "Le règlement (UE) 2023/988 exige les avertissements dans une langue que les consommateurs du pays de vente comprennent aisément. Ces textes viennent du fabricant, langue par langue. Le générateur les recopie, et une langue manquante bloque la mise en ligne sur ce marché jusqu'à réception du texte du fabricant." },
      { titre: "Mesurer le projet au nombre de fiches produites", texte: "Le volume se mesure facilement et renseigne peu. Les indicateurs utiles se suivent sur vos données : fiches bloquées faute d'attribut, corrections apportées en relecture, questions reçues au service client sur un produit déjà en ligne. Nous les fixons avec vous avant la mise en service." },
      { titre: "Brancher l'agent sur la seule foire aux questions", texte: "Un agent qui ne voit que la foire aux questions répond à côté dès que le client parle de son colis. L'accès en lecture aux commandes et au suivi du transporteur se cadre dès le départ, avec des droits limités, et chaque réponse cite la commande concernée." },
    ],
  },
  faq: [
    { q: "Combien de fiches un générateur peut-il produire, et avec quelle relecture ?", a: "Le volume dépend d'abord de la qualité de votre référentiel. Nous commençons par une catégorie pilote : le générateur produit les fiches, vos équipes relisent un échantillon, et chaque erreur trouvée devient une règle. La relecture passe ensuite à l'échantillonnage par lot, sauf pour les champs réglementés, que le générateur recopie sans jamais les rédiger. Le rythme se mesure sur vos fiches réelles, avec vous." },
    { q: "Faut-il déclarer qu'un titre ou une description ont été rédigés par une IA ?", a: "Pour Google Shopping, oui : Google Merchant Center demande que les titres et les descriptions créés avec l'IA générative passent par des attributs dédiés, structured_title et structured_description, avec la valeur trained_algorithmic_media. Le générateur remplit ces attributs dans le flux. Sur votre site, il garde la même trace, fiche par fiche, ce qui permet de répondre à une plateforme comme à un contrôle." },
    { q: "Comment retirer les allégations environnementales visées d'un catalogue de milliers de références ?", a: "Par un filtre posé avant la publication et repassé sur l'existant. Votre service juridique tient la liste des formulations bloquées, en partant des exemples de la directive (UE) 2024/825, comme « ami de la nature », « bon pour le climat » ou « biosourcé ». Une allégation ne reste que si la fiche porte le label ou la preuve qui la justifie. La relecture regarde aussi les visuels : selon la directive, des couleurs ou des images combinées à un texte peuvent constituer une allégation générique." },
    { q: "Nos fournisseurs envoient des fiches incomplètes : l'IA peut-elle aider ?", a: "Oui, sur la partie la plus ingrate : lire les fichiers reçus (tableurs, PDF, catalogues), en extraire les attributs, les rapprocher de votre référentiel et dresser la liste de ce qui manque, dont les mentions exigées par l'article 19 du règlement (UE) 2023/988. L'outil prépare la relance au fournisseur, et l'acheteur l'envoie. Aucun champ manquant n'est complété par le modèle." },
    { q: "Un agent peut-il traiter les retours et les rétractations ?", a: "Il peut informer et préparer : vérifier que la demande tient dans le délai légal, qui court à partir de la réception du bien, rappeler les exceptions légales reprises dans vos conditions générales, guider vers la fonctionnalité de rétractation que l'article L.221-21 du code de la consommation impose depuis le 19 juin 2026. Le remboursement contesté, le produit abîmé ou le litige passent à un conseiller. L'agent se présente comme une IA dès son premier message." },
    { q: "Comment garder le ton de la marque dans plusieurs langues ?", a: "Le générateur lit à chaque fiche un guide de ton par langue, un glossaire qui fixe les termes de la marque et ceux à proscrire, et des fiches modèles validées par un locuteur de chaque marché. Les mentions réglementées restent celles du fabricant. Un locuteur relit un échantillon par catégorie et par langue au lancement, puis à chaque changement de règle." },
    { q: "Faut-il changer de PIM ou de plateforme e-commerce pour utiliser l'IA ?", a: "En général non. Les PIM et les plateformes du marché exposent des interfaces de programmation (API) qui permettent de lire et d'écrire les fiches, et nous branchons les outils sur ce que vous avez. Masteria ne revend aucune licence : si une fonction intégrée à votre plateforme suffit pour votre volume, nous le disons au cadrage, et le projet s'arrête là." },
    { q: "Combien coûte un projet d'IA pour une enseigne ou un site marchand ?", a: "Le prix dépend du nombre de catégories et de langues, des canaux à alimenter (site, places de marché, comparateurs) et des systèmes à relier. Nous offrons 30 minutes de cadrage pour comprendre votre catalogue et vos canaux. Un Diagnostic IA, payant, peut ensuite chiffrer le chantier ; sa durée et son forfait dépendent du périmètre retenu. Chaque projet fait l'objet d'une proposition forfaitaire écrite avant signature, et vous recevez le code avec sa documentation." },
  ],
  sources: [
    { name: "Fevad : bilan du e-commerce en France en 2025 (communiqué du 11 février 2026)", url: "https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/" },
    { name: "INSEE Première n° 2120 : les technologies de l'information et de la communication dans les entreprises en 2025 (juillet 2026)", url: "https://www.insee.fr/fr/statistiques/9025878" },
    { name: "EUR-Lex : règlement (UE) 2023/988 relatif à la sécurité générale des produits", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32023R0988" },
    { name: "EUR-Lex : directive (UE) 2024/825 sur la transition verte et l'information des consommateurs", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024L0825" },
    { name: "Assemblée nationale : projet de loi d'adaptation au droit de l'Union européenne (DDADUE), dossier législatif", url: "https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N53140" },
    { name: "DGCCRF : greenwashing, un webinaire pour tout savoir sur les nouvelles règles", url: "https://www.economie.gouv.fr/dgccrf/actualites-dgccrf/greenwashing-un-webinaire-pour-tout-savoir-sur-les-nouvelles-regles" },
    { name: "DGCCRF : vos produits et services doivent être conformes à la directive accessibilité", url: "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/professionnels-vos-produits-et-services-doivent-etre-conformes-la-directive-accessibilite" },
    { name: "Google Merchant Center : spécification du titre et attribut structured_title", url: "https://support.google.com/merchants/answer/6324415?hl=fr" },
    { name: "Légifrance : code de la consommation, article L.221-18 (délai de rétractation)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226842/" },
    { name: "Légifrance : code de la consommation, article L.221-21 (fonctionnalité de rétractation, version du 19 juin 2026)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053310520/2026-06-19" },
  ],
}
