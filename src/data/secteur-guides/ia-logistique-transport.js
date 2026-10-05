// Contenu propre à /ia-logistique-transport. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Code de commerce L133-3 et L133-6 et Code des transports L3222-1 sur Légifrance, convention CMR (texte publié par UNIDROIT), Service Public F39785 (facturation électronique, vérifié le 07/08/2026), ministère de la Transition écologique (information GES), Insee Première n° 2120, règlements (UE) 2024/1689 et 2026/1744 sur EUR-Lex (via le Cellar) ; retour de mission : étude de cas « photovoltaïque ».
export default {
  slug: 'ia-logistique-transport',
  dateModified: '2026-10-03',
  intro: "En logistique, l'IA générative rapporte là où un délai ou un écart coûte de l'argent : la protestation à notifier dans les trois jours qui suivent une livraison abîmée, la facture d'un transporteur à rapprocher de la commande et de l'indexation énergie, la consultation des transporteurs avant une expédition. Depuis le 1er septembre 2026, chaque entreprise doit pouvoir recevoir ses factures au format électronique, ce qui change la façon de les contrôler. Masteria cadre ces flux avec l'exploitation, la comptabilité et le service client, puis construit les assistants dans vos outils.",

  offresIntro: [
    "Pour un transporteur, un commissionnaire ou un chargeur, nous partons des délais et des documents qui coûtent : réserves, litiges, factures, consultations, preuves de livraison.",
    "Nous observons d'abord une journée d'exploitation et une semaine de litiges réels, puis nous chiffrons ce que chaque flux consomme en temps et en montants perdus. Les assistants travaillent ensuite dans le TMS (le logiciel de gestion du transport), le WMS (celui de l'entrepôt) ou l'ERP que vous utilisez déjà. La proposition forfaitaire qui suit liste les flux couverts et les indicateurs de départ.",
  ],

  offres: [
    {
      desc: "Nous suivons une expédition de la commande à l'encaissement : prise de commande, consultation des transporteurs, préparation, livraison, réserves, facturation. Pour chaque étape, nous relevons le temps passé, les ressaisies et les délais légaux en jeu. Vous recevez une matrice des cas classés par gain et par faisabilité, avec les indicateurs à relever avant tout développement.",
      points: ["Lecture du flux jusqu'à l'encaissement", "Délais légaux cartographiés", "Indicateurs relevés avant le projet"],
    },
    {
      desc: "Nous développons des assistants pour l'exploitation et l'administration des ventes : consultation des transporteurs avec comparaison des offres, dossier de litige assemblé à partir de la lettre de voiture et des photos, contrôle d'une facture contre la commande et la clause d'indexation. Chaque assistant cite ses pièces et laisse la décision à l'exploitant ou au comptable.",
      points: ["Consultation et comparaison des transporteurs", "Dossiers de litige pièces à l'appui", "Contrôle des factures de transport"],
    },
    {
      desc: "Nous automatisons ce qui tourne chaque jour sur les quais et dans les bureaux : conversion d'un fichier d'entrepôt en import ERP avec contrôle des totaux, réponse aux demandes de statut, alerte avant l'échéance d'une réserve, calcul de l'information sur les gaz à effet de serre de chaque prestation. Les automatisations écrivent dans vos outils après contrôle, et chaque écart remonte à une personne nommée.",
      points: ["Imports d'entrepôt contrôlés", "Alerte avant chaque échéance de réserve", "Information GES calculée par prestation"],
    },
  ],

  regie: [
    "Sur place, le développeur détaché voit les exports réels du TMS, les fichiers des entrepôts et les mails des transporteurs, et il règle les extractions avec les exploitants, sur les cas du jour. Sur un site logistique, nous privilégions des passages réguliers aux heures creuses et un développement à distance, dans un environnement de test qui reproduit vos flux. Chaque connecteur est documenté pour votre service informatique, qui en reprend la maintenance.",
  ],

  formation: [
    "Nous formons les métiers qui vivent dans les flux : exploitants et affréteurs, assistants d'administration des ventes, chargés de litiges, comptables fournisseurs, chefs de quai. Les ateliers partent de leurs propres pièces : une lettre de voiture annotée, une facture avec surcharge énergie, un mail de transporteur, un export du WMS. Chaque participant repart avec un assistant sur sa tâche et une règle de contrôle écrite.",
    "Les sessions en intra se tiennent sur vos sites, aux horaires de l'exploitation. Une journée pour vos exploitants ou vos équipes d'administration des ventes est facturée 1 980 € HT, finançable par votre OPCO grâce à la certification Qualiopi de Masteria. Ce financement s'arrête à la formation : le diagnostic des flux et les assistants se facturent à part.",
  ],

  guide: {
    kicker: "Guide transport et logistique",
    h2: "En transport, l'IA se rembourse sur les délais et les écarts que personne n'a le temps de suivre",
    lead: "Selon l'Insee, 9 % des entreprises de transport et d'entreposage de 10 salariés ou plus utilisaient l'IA en 2025. Pondéré par l'emploi, le taux monte à 66 % : les grands groupes s'équipent, la plupart des entreprises du secteur n'ont pas encore commencé. Le métier se joue pourtant sur des délais courts. Après une livraison abîmée, le destinataire dispose de trois jours, jours fériés non compris, pour notifier au transporteur une protestation motivée (Code de commerce, article L133-3). Un assistant bien placé tient ce délai à la place d'un tableur.",
    sections: [
      {
        h3: "Une réserve tardive coûte le litige entier",
        paras: [
          "En transport national, la réception des marchandises éteint toute action contre le transporteur pour avarie ou perte partielle si le destinataire n'a pas notifié sa protestation motivée dans les trois jours, par acte extrajudiciaire ou lettre recommandée (article L133-3). L'action elle-même se prescrit par un an (article L133-6). Quand la prise en charge et la livraison ont lieu dans deux pays différents, la convention CMR, signée à Genève le 19 mai 1956, s'applique : une avarie non apparente appelle des réserves écrites dans les sept jours, dimanches et jours fériés non compris, et un retard n'ouvre droit à indemnité que sur réserve écrite dans les 21 jours (article 30).",
          "Ces délais tombent sur des quais qui reçoivent plusieurs livraisons par jour. Un assistant lit la lettre de voiture annotée, les photos et le bon de livraison, qualifie l'avarie, calcule l'échéance et prépare le courrier de protestation que le responsable signe. Pour une avarie apparente en international, les réserves se portent au plus tard à la livraison : l'assistant relit celles écrites sur la lettre de voiture et vérifie qu'elles indiquent la nature de la perte ou de l'avarie.",
        ],
      },
      {
        h3: "La facture d'un transporteur se rapproche de la commande et de l'indexation énergie",
        paras: [
          "Depuis le 1er janvier 2023, l'article L3222-1 du Code des transports prévoit que le prix d'un transport routier de marchandises se révise de plein droit pour suivre la variation du coût de l'énergie de propulsion, quand le contrat mentionne ces charges. La même règle vaut pour l'énergie des groupes frigorifiques autonomes. La facture doit faire apparaître ces charges. Pour un chargeur qui travaille avec plusieurs transporteurs, chaque facture appelle donc un calcul de contrôle.",
          "Depuis le 1er septembre 2026, toute entreprise doit pouvoir recevoir ses factures électroniques par une plateforme agréée, l'intermédiaire immatriculé par l'administration fiscale. L'émission électronique s'impose déjà aux grandes entreprises et aux ETI (entreprises de taille intermédiaire), et s'imposera aux PME et aux micro-entreprises le 1er septembre 2027, rappelle Service Public. L'IA prend alors en charge le rapprochement : commande, preuve de livraison, grille tarifaire, indexation. Elle prépare la contestation d'un écart, que le comptable envoie.",
        ],
      },
      {
        h3: "Pour un chargeur, la consultation des transporteurs fait un bon premier cas",
        paras: [
          "Sans service transport, chaque expédition hors contrat déclenche le même travail : rédiger la demande, l'envoyer à plusieurs transporteurs, relancer, comparer des offres écrites dans des formats différents, puis confirmer. Un assistant rédige la demande à partir de la commande, lit les réponses et propose un choix argumenté sur le prix, le délai et les conditions. L'exploitant valide et envoie la confirmation. Le gain se mesure sur un seul chiffre : le temps passé par consultation, avant et après.",
          "Selon l'Insee, la logistique reste une finalité rare de l'IA, sauf dans le commerce, où 21 % des entreprises qui utilisent l'IA la citent. Pour une PME qui expédie, l'avance se prend donc sur des tâches répétées : demander, comparer, confirmer, puis vérifier que la facture correspond à l'offre retenue. Les pièces de la consultation servent ensuite au contrôle des factures et au suivi des litiges.",
        ],
      },
      {
        h3: "L'information GES de chaque prestation est une obligation de document",
        paras: [
          "Toute personne qui commercialise ou organise une prestation de transport doit informer le bénéficiaire de la quantité de gaz à effet de serre (GES) émise (Code des transports, article L1431-3). Le ministère de la Transition écologique estime à environ 85 000 le nombre d'entreprises concernées : transporteurs, commissionnaires, déménageurs, agences de voyages. Depuis le 1er juin 2017, l'obligation couvre tous les gaz à effet de serre. Le calcul suit quatre niveaux de précision, des valeurs par défaut fixées par le ministre chargé des transports aux valeurs mesurées par l'entreprise.",
          "La formule est connue ; le travail tient dans la collecte : distances, consommations, taux de chargement, sous-traitants. Un assistant rassemble ces données depuis le TMS et les relevés de carburant, applique le niveau de calcul choisi et joint l'information au compte rendu de prestation. Quand un sous-traitant étranger ne transmet pas ses données, la foire aux questions du ministère admet une reconstitution avec les valeurs de niveau 1 ; l'assistant signale chaque valeur reconstituée.",
        ],
      },
      {
        h3: "Noter un chauffeur ou un préparateur avec l'IA relève du haut risque",
        paras: [
          "Le règlement (UE) 2024/1689 sur l'IA classe à haut risque, dans son annexe III, les systèmes destinés à attribuer des tâches sur la base du comportement individuel ou à suivre et évaluer les performances et le comportement des salariés. Un outil qui classe les chauffeurs selon leur conduite, ou les préparateurs selon leur cadence, entre dans cette catégorie. Pour un transporteur ou un logisticien qui en utilise un, les obligations du haut risque s'appliquent à partir du 2 décembre 2027, date fixée par le règlement omnibus (UE) 2026/1744.",
          "Les assistants documentaires décrits sur cette page traitent des lettres de voiture, des factures et des réserves ; ils restent en dehors de cette catégorie. Un projet de planification qui tient compte des performances individuelles se cadre à part, avec votre délégué à la protection des données et les représentants du personnel quand l'entreprise en a, bien avant l'échéance de 2027. Le cadrage écrit dit quelles données personnelles entrent dans l'outil, pour quelle finalité et pour combien de temps.",
        ],
      },
    ],
    table: {
      caption: "Délais et documents du transport : où l'assistant intervient",
      headers: ["Situation", "Règle et délai", "Ce que l'assistant prépare", "Qui décide"],
      rows: [
        ["Avarie constatée en transport national", "Protestation motivée sous trois jours (Code de commerce, article L133-3)", "Qualification de l'avarie, échéance calculée, courrier de protestation", "Le responsable de la réception signe et envoie"],
        ["Avarie non apparente en transport international", "Réserve écrite sous sept jours, hors dimanches et jours fériés (CMR, article 30)", "Rapprochement de la lettre de voiture et du constat, projet de réserve", "Le responsable de la réception"],
        ["Retard de livraison international", "Réserve écrite sous 21 jours après la mise à disposition (CMR, article 30)", "Calcul du retard à partir des dates de mise à disposition", "L'exploitant ou l'administration des ventes"],
        ["Action contre le transporteur", "Prescription d'un an (Code de commerce, article L133-6 ; CMR, article 32)", "Tableau des échéances et dossier de pièces", "La direction ou le service juridique"],
        ["Facture d'un transport routier", "Révision de plein droit selon le coût de l'énergie (Code des transports, article L3222-1)", "Rapprochement de la commande, de la preuve de livraison et de l'indexation", "Le comptable fournisseurs"],
        ["Prestation vendue à un client", "Information GES obligatoire (Code des transports, article L1431-3)", "Collecte des données, calcul au niveau choisi, mention jointe", "Le responsable de l'offre transport"],
      ],
    },
    cas: {
      h3: "Retour de mission : un distributeur photovoltaïque fait de ses consultations de transporteurs un chantier prioritaire",
      contexte: "Le point de départ est une PME de trois personnes qui distribue des solutions photovoltaïques depuis trois entrepôts français vers des clients à l'export, avec Odoo pour ERP. Côté transport, deux gestes coûtent cher. Chaque livraison donne lieu à une consultation manuelle des transporteurs, quinze jours avant le départ. Chaque réception oblige à recopier des numéros de série, parce que la scannette ne lit pas le fichier de l'entrepôt. La direction accepte l'IA à une condition : elle prépare, quelqu'un contrôle.",
      etapes: [
        "Le flux « livrer et encaisser » est décrit geste par geste, à partir de trois entretiens à distance (direction, commerce, opérations) et des pièces de l'entreprise, dont le mail que l'équipe envoie d'habitude aux transporteurs.",
        "Les tâches sont ensuite pesées une à une (volume déclaré, lien avec Odoo) et classées par impact et faisabilité à trois mois.",
        "Deux des trois assistants à construire avant la formation touchent la logistique : l'un rédigera la consultation des transporteurs quinze jours avant la livraison et proposera un choix ; l'autre transformera le fichier de l'entrepôt en import Odoo et vérifiera les totaux avant l'intégration.",
        "Un cadre accompagne les outils : une charte d'usage, un référent IA qui reçoit les erreurs signalées et un point mensuel.",
        "Le calendrier prévoit 90 jours. Les points de départ seront relevés pendant la formation d'octobre 2026, et le bilan, un mois plus tard, porte sur quelques indicateurs simples, dont la durée d'une consultation et les réceptions saisies sans reprise.",
      ],
      resultat: "À ce stade, le diagnostic a été présenté à la direction en septembre 2026 et trois décisions l'attendent. Les objectifs à trois mois restent des cibles jusqu'au bilan : diviser par deux le temps de consultation des transporteurs, réussir huit réceptions sur dix sans ressaisie. La leçon vaut pour tout chargeur : le temps de départ se relève avant de construire quoi que ce soit.",
      lien: { href: "/etudes-de-cas-ia#photovoltaique", label: "Lire l'étude de cas complète" },
    },
    pieges: [
      {
        titre: "Laisser passer le délai de trois jours",
        texte: "En transport national, une avarie qui n'a pas fait l'objet d'une protestation motivée dans les trois jours suivant la réception éteint l'action contre le transporteur. Un assistant qui classe les litiges sans calculer cette échéance manque l'essentiel.",
      },
      {
        titre: "Intégrer une extraction sans contrôle croisé",
        texte: "Une extraction se trompe parfois sur un poids, un nombre de colis ou une date. Chaque champ se rapproche d'une deuxième source : commande, bon de préparation ou facture. Un écart bloque l'intégration et remonte à une personne.",
      },
      {
        titre: "Payer une surcharge énergie sans la recalculer",
        texte: "La révision prévue par l'article L3222-1 suit les charges d'énergie mentionnées au contrat. Une surcharge mal calculée se paie quand même si personne ne la rapproche du contrat. Le contrôle automatique compare la surcharge facturée au calcul attendu et signale l'écart au comptable.",
      },
      {
        titre: "Confondre planification et notation des salariés",
        texte: "Un outil qui évalue la conduite ou la cadence de chaque salarié relève de l'annexe III du règlement sur l'IA, avec des obligations applicables à partir du 2 décembre 2027. Il se cadre à part, avec votre délégué à la protection des données.",
      },
      {
        titre: "Figer une fois pour toutes l'information GES",
        texte: "Des valeurs de calcul figées vieillissent avec la flotte et les sous-traitants. Pour les valeurs de niveau 3, la foire aux questions du ministère limite la période de référence à trois ans. Un assistant rappelle l'échéance et signale les valeurs reconstituées.",
      },
    ],
  },

  faq: [
    {
      q: "Par quel flux commencer dans une entreprise de transport ?",
      a: "Par un flux qui porte un délai ou un montant : les réserves et les litiges, le contrôle des factures de transporteurs, ou la consultation des transporteurs si vous êtes chargeur. Ces flux se testent sur l'historique des derniers mois, et le gain se compte en dossiers traités dans les délais et en écarts de facturation repérés. Les réponses automatiques aux demandes de statut viennent ensuite, quand les données de suivi sont fiables.",
    },
    {
      q: "La facture électronique rend-elle l'IA inutile sur les factures ?",
      a: "Elle change son rôle. Les factures émises par les grandes entreprises et les ETI établies en France arrivent déjà par une plateforme agréée, sous forme de données ; pour les factures des PME, la bascule a lieu le 1er septembre 2027. Lire ces factures devient simple. Il reste à les rapprocher de la commande, de la preuve de livraison et de l'indexation énergie. Les factures des transporteurs étrangers, hors de ce dispositif, restent à lire.",
    },
    {
      q: "Faut-il des données de télématique pour commencer ?",
      a: "Non. Les premiers assistants travaillent sur des documents : lettres de voiture, bons de livraison, factures, mails de transporteurs, exports du TMS. La télématique enrichit ensuite le suivi des expéditions et le calcul de l'information GES, une fois son format et ses droits d'accès connus.",
    },
    {
      q: "Un assistant peut-il envoyer seul une protestation au transporteur ?",
      a: "Nous ne le recommandons pas. L'article L133-3 du Code de commerce exige une protestation motivée, notifiée par acte extrajudiciaire ou par lettre recommandée : ce courrier engage l'entreprise. L'assistant calcule l'échéance, rassemble les pièces et rédige le projet ; le responsable relit, signe et envoie.",
    },
    {
      q: "Combien coûte un projet IA en logistique ?",
      a: "Le coût dépend des flux couverts (litiges, factures, consultations), des outils à raccorder (TMS, WMS, ERP, plateforme de facturation) et du volume mensuel de pièces. La proposition, forfaitaire, liste les flux, les contrôles et les indicateurs relevés avant le démarrage. Un assistant de consultation des transporteurs reste un engagement contenu ; un déploiement sur plusieurs entrepôts et plusieurs outils dépasse 100 000 € et peut atteindre plusieurs centaines de milliers d'euros. Le point de départ se décide pendant les 30 minutes de cadrage offertes.",
    },
    {
      q: "Nos données de clients et de chauffeurs sortent-elles de l'entreprise ?",
      a: "Elles restent dans le périmètre que vous fixez. Les coordonnées des chauffeurs et des destinataires sont des données personnelles : le cadrage fixe leur durée de conservation et les personnes qui y accèdent. Les grilles tarifaires négociées avec vos transporteurs relèvent du secret des affaires ; l'assistant qui les lit tourne dans votre environnement ou chez un hébergeur retenu avec votre service informatique.",
    },
    {
      q: "Travaillez-vous pour les transporteurs comme pour les chargeurs ?",
      a: "Oui. Côté transporteur ou commissionnaire, les cas portent sur l'exploitation, les litiges et l'information GES ; côté chargeur, sur la consultation, la réception et le contrôle des factures. Le retour de mission présenté plus haut concerne un chargeur : un distributeur qui expédie depuis trois entrepôts vers des clients à l'export.",
    },
    {
      q: "L'OPCO peut-il financer le projet ?",
      a: "Il peut financer la partie formation, c'est-à-dire les ateliers de vos exploitants, chargés de litiges et comptables fournisseurs, selon vos fonds disponibles. Observer vos flux, concevoir les assistants et les brancher sur le TMS restent des prestations de service, facturées à part.",
    },
  ],

  sources: [
    { name: "Insee Première n° 2120 : les technologies de l'information et de la communication dans les entreprises en 2025", url: "https://www.insee.fr/fr/statistiques/9025878" },
    { name: "Légifrance : Code de commerce, article L133-3 (protestation dans les trois jours)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000020899366" },
    { name: "Légifrance : Code de commerce, article L133-6 (prescription d'un an)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000017853204" },
    { name: "UNIDROIT : convention relative au contrat de transport international de marchandises par route (CMR), articles 30 et 32", url: "https://www.unidroit.org/french/conventions/1956cmr/cmr_f.pdf" },
    { name: "Légifrance : Code des transports, article L3222-1 (révision du prix selon l'énergie)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046194417" },
    { name: "Service Public Entreprendre : se mettre en conformité avec l'obligation de facturation électronique", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F39785" },
    { name: "Ministère de la Transition écologique : information GES des prestations de transport", url: "https://www.ecologie.gouv.fr/politiques-publiques/information-ges-prestations-transport" },
    { name: "EUR-Lex : règlement (UE) 2024/1689 sur l'intelligence artificielle (annexe III)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689" },
    { name: "EUR-Lex : règlement (UE) 2026/1744, train de mesures omnibus numérique sur l'IA", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1744" },
  ],
}
