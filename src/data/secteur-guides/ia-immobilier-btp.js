// Contenu propre à /ia-immobilier-btp. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Insee Première n° 2120 (juillet 2026) ; Service Public F16096 (DPE, vérifié le 01/01/2026, arrêtés du 11/06 et du 19/08/2026), F1169 (justificatifs du locataire), F14750 (discrimination) ; Service Public Entreprendre F32130, F32154, F23371 (seuils, vérifié le 21/08/2026), F32137 (sous-traitance), F2034 (garantie décennale). Aucune étude de cas publiée ne relève du secteur : le cas est une mise en situation.
export default {
  slug: 'ia-immobilier-btp',
  dateModified: '2026-10-03',
  intro: "Dans l'immobilier comme dans le BTP, l'IA générative rapporte d'abord sur des pièces que la loi encadre : l'annonce et ses mentions énergétiques, le dossier du candidat locataire, le DPE (diagnostic de performance énergétique) d'un logement loué, le dossier de consultation d'un marché de travaux, la déclaration de sous-traitance. Le calendrier se resserre : les logements classés F ne pourront plus être loués à partir de 2028, et le calcul du DPE change de nouveau le 1er janvier 2027. Masteria cadre ces flux avec vos équipes, puis construit des assistants qui contrôlent chaque pièce avant qu'elle engage l'entreprise.",

  offresIntro: [
    "Pour une agence, un administrateur de biens, un promoteur ou une entreprise de travaux, nous partons des pièces obligatoires que vos équipes produisent ou contrôlent chaque semaine.",
    "Chaque pièce a sa règle : mentions d'une annonce, liste fermée des justificatifs d'un locataire, validité d'un DPE, critères d'un règlement de consultation, attestation décennale jointe au devis. Nous relevons le temps que ces pièces consomment et les erreurs qui reviennent, puis nous outillons le contrôle. La proposition forfaitaire nomme ensuite les pièces contrôlées, les règles appliquées et le calendrier.",
  ],

  offres: [
    {
      desc: "Nous diagnostiquons vos métiers un par un : transaction, gestion locative, réponse aux marchés, conduite de travaux. Une annonce, un dossier de location, un appel d'offres et un chantier sont suivis de bout en bout, puis les cas sont classés par gain et par risque juridique. La feuille de route intègre les échéances qui vous concernent : classe F en 2028, nouveau calcul du DPE en 2027, seuil de 140 000 € HT pour les petits marchés de travaux.",
      points: ["Parcours suivis de bout en bout", "Risques juridiques classés par métier", "Échéances de 2027 et 2028 intégrées"],
    },
    {
      desc: "Les assistants que nous développons contrôlent chaque pièce avant son envoi : une annonce contre les mentions obligatoires, un dossier de candidat contre la liste des justificatifs autorisés, un parc de logements contre les classes et les dates de DPE, un DCE (le dossier de consultation des entreprises) contre votre projet de mémoire technique. Chaque écart cite l'article ou la pièce qui le fonde, et le code vous appartient à la fin du projet.",
      points: ["Contrôle des annonces et des dossiers", "Revue d'un parc au regard du DPE", "Exigences d'un appel d'offres rangées par critère"],
    },
    {
      desc: "Chaque bail et chaque chantier génèrent les mêmes relances : pièces manquantes, attestations des sous-traitants à renouveler, déclarations de sous-traitance à préparer, échéancier des réserves après la réception des travaux. Nous les automatisons, et un gestionnaire ou un conducteur de travaux valide chaque envoi.",
      points: ["Relance des pièces manquantes", "Attestations des sous-traitants suivies", "Échéancier après la réception des travaux"],
    },
  ],

  regie: [
    "Le développeur détaché construit les connecteurs avec vos gestionnaires et vos conducteurs de travaux, sur des dossiers réels. Il documente chaque règle de contrôle avec sa référence juridique, pour que votre équipe sache pourquoi un dossier est bloqué. Quand le projet s'étend aux travaux, il raccorde aussi l'outil de chiffrage et la GED de chantier (la base documentaire partagée avec la maîtrise d'œuvre). Les phases clés se tiennent chez vous ; le développement se fait à distance.",
  ],

  formation: [
    "Nous formons les métiers qui produisent ces pièces : négociateurs et assistants de transaction, gestionnaires locatifs, chargés d'études de prix, conducteurs de travaux, responsables des marchés. Les exercices utilisent vos propres pièces : une annonce publiée, un dossier de candidature anonymisé, un DCE récent, un compte rendu de chantier. Les participants y construisent leurs propres contrôles, avec la règle qui les fonde.",
    "Dans une entreprise de travaux, nous plaçons les sessions hors des périodes de remise d'offres. Une journée pour vos négociateurs, vos gestionnaires ou vos conducteurs de travaux coûte 1 980 € HT en intra ; votre OPCO peut la financer selon vos fonds, au titre de la certification Qualiopi de Masteria. La mission de conseil et le développement se facturent hors de ce dispositif.",
  ],

  guide: {
    kicker: "Guide immobilier et BTP",
    h2: "Dans l'immobilier et le BTP, l'IA gagne sa place en contrôlant les pièces réglementées avant leur envoi",
    lead: "En 2025, 10 % des entreprises de la construction de 10 salariés ou plus déclarent utiliser l'IA, contre 3 % un an plus tôt, et 26 % dans les activités immobilières, selon l'Insee. Les usages progressent vite, sur un terrain encadré de près. Une annonce de location affiche les classes énergie et climat ; un bailleur qui réclame un justificatif hors liste encourt jusqu'à 3 000 € d'amende ; une offre de travaux suit les critères et la pondération de son règlement de consultation. Les premiers gains se trouvent dans le contrôle de ces pièces.",
    sections: [
      {
        h3: "Une annonce porte des mentions que l'IA ne doit jamais inventer",
        paras: [
          "Une annonce de vente ou de location publiée sur internet affiche en couleur les classes énergie et climat du logement, la mention « logement à consommation énergétique excessive » s'il est classé F ou G, et le montant estimé des dépenses annuelles d'énergie pour un usage standard, avec l'année de référence des prix, rappelle Service Public. Une fausse information ouvre au locataire ou à l'acquéreur une action en dommages et intérêts, voire en annulation du bail ou de la vente.",
          "Un assistant de rédaction d'annonces travaille donc à partir du DPE et de la fiche du bien, jamais de mémoire. Il reprend la classe, la surface et l'estimation des dépenses telles qu'elles figurent sur les documents, bloque la publication si l'une manque et signale un diagnostic périmé. Depuis le 1er janvier 2025, les DPE réalisés entre le 1er janvier 2018 et le 30 juin 2021 ne sont plus valables : l'assistant les repère à leur date.",
        ],
      },
      {
        h3: "Le dossier du candidat locataire suit une liste fermée",
        paras: [
          "Le décret n° 2015-1437 du 5 novembre 2015 fixe la liste des justificatifs qu'un bailleur peut demander au futur locataire et à sa caution : une pièce d'identité, un justificatif de domicile, des justificatifs de situation professionnelle et de ressources, chacun pris dans une liste précise. Réclamer un autre document expose à une amende pouvant atteindre 3 000 €, ou 15 000 € pour une personne morale (loi du 6 juillet 1989, article 22-2).",
          "Un assistant qui trie les candidatures vérifie la complétude du dossier contre cette liste et ne demande rien d'autre. Il ne classe pas les candidats. Service Public énumère vingt-cinq critères interdits, dont le nom, le lieu de résidence et la situation de famille ; écarter un candidat sur l'un d'eux est puni de trois ans de prison et de 45 000 € d'amende. Le choix du locataire reste celui du gestionnaire, sur des critères objectifs comme la situation financière.",
        ],
      },
      {
        h3: "Un parc locatif se relit à chaque changement du DPE",
        paras: [
          "Depuis le 1er janvier 2025, un logement classé G ne peut plus être loué, y compris lors d'un renouvellement ou d'une reconduction tacite du bail ; la règle visera la classe F en 2028 et la classe E en 2034. Le calcul a changé le 1er janvier 2026, avec un facteur de conversion de l'électricité ramené de 2,3 à 1,9. Il changera encore le 1er janvier 2027 : un arrêté du 19 août 2026 abaisse ce facteur à 1,7, et un arrêté du 11 juin 2026 crée une nouvelle classe pour certains bâtiments.",
          "Pour un administrateur de biens, chaque changement oblige à relire le parc : date de chaque DPE, classe, mode de chauffage, échéance du bail. Selon Service Public, un DPE réalisé avant 2026 reste valable et peut être mis à jour sans frais, sans nouvelle visite du diagnostiqueur, quand le nouveau calcul améliore l'étiquette. Un logement chauffé à l'électricité, bloqué en G par un ancien calcul, peut alors revenir sur le marché locatif.",
        ],
      },
      {
        h3: "Un appel d'offres de travaux se lit contre sa grille de notation",
        paras: [
          "Le règlement de la consultation fixe la date limite, les critères d'attribution et leur pondération. Le CCAP (cahier des clauses administratives particulières) fixe les délais, les pénalités et le paiement ; le CCTP (cahier des clauses techniques particulières) décrit l'ouvrage ; la DPGF (décomposition du prix global et forfaitaire) ou le BPU (bordereau des prix unitaires) porte le prix. Le mémoire technique n'a pas de modèle imposé, sauf quand le règlement de la consultation en fixe un, parfois avec un nombre de pages maximal.",
          "Un assistant relit d'abord le CCTP exigence par exigence et range chacune sous le critère de notation qui la récompense : le mémoire répond alors dans l'ordre où l'acheteur note. Il relève ensuite dans le CCAP les clauses qui pèsent sur la marge (pénalités, délais, retenue de garantie) et les réunit dans une fiche que le dirigeant lit avant de fixer son prix. Le chargé d'études et le dirigeant gardent la stratégie de réponse.",
        ],
      },
      {
        h3: "Le seuil des petits marchés de travaux passe à 140 000 € HT en 2027",
        paras: [
          "Un acheteur public peut aujourd'hui passer un marché de travaux de moins de 100 000 € HT sans publicité ni mise en concurrence préalables (Code de la commande publique, article R2122-8). Selon Service Public, ce seuil passe à 140 000 € HT le 1er janvier 2027. Pour ces montants, l'acheteur peut se contenter d'un cahier des clauses particulières, voire d'une simple lettre de commande. Ces consultations allégées demandent des pièces complètes, prêtes à joindre.",
          "Ces réponses mobilisent toujours les mêmes pièces. L'attestation d'assurance décennale doit être jointe au devis et à la facture. Dans un marché public, chaque sous-traitant fait l'objet d'une déclaration DC4 distincte (le formulaire de déclaration de sous-traitance) ; quand elle intervient en cours de marché, le silence de l'acheteur pendant 21 jours vaut acceptation. Le sous-traitant accepté a droit au paiement direct dès 600 € TTC. Un assistant tient ces pièces à jour, contrôle leurs dates et prépare les DC4 à partir des contrats.",
        ],
      },
    ],
    table: {
      caption: "Six pièces que la loi encadre, et ce que l'assistant vérifie avant signature",
      headers: ["Pièce", "Règle", "Contrôle préparé par l'assistant", "Décision"],
      rows: [
        ["Annonce de location ou de vente", "Classes énergie et climat, dépenses annuelles estimées, mention pour F et G (Code de la construction et de l'habitation, articles L126-26 à L126-33)", "Mentions reprises du DPE, alerte si une donnée manque ou si le DPE est périmé", "Le négociateur publie"],
        ["Dossier du candidat locataire", "Liste fermée du décret n° 2015-1437", "Complétude du dossier, aucune pièce hors liste demandée", "Le gestionnaire choisit sur des critères objectifs"],
        ["Parc de logements loués", "Classe G interdite à la location depuis 2025, F en 2028, E en 2034", "Liste des lots bloqués, des DPE périmés et des mises à jour possibles", "Le propriétaire décide des travaux ou de la mise à jour"],
        ["Dossier de consultation d'un marché de travaux", "Critères et pondération fixés par le règlement de la consultation", "Exigences du CCTP rangées par critère, clauses sensibles du CCAP", "Le dirigeant fixe la stratégie et le prix"],
        ["Déclaration de sous-traitance (DC4)", "Une déclaration par sous-traitant ; paiement direct dès 600 € TTC", "DC4 préparée depuis le contrat, pièces du sous-traitant vérifiées", "Le titulaire signe et transmet"],
        ["Devis et facture de travaux", "Attestation d'assurance décennale jointe (Code des assurances, article L243-2)", "Présence et validité de l'attestation, activités couvertes", "Le conducteur de travaux ou le gérant"],
      ],
    },
    cas: {
      h3: "Mise en situation : un administrateur de biens relit son parc avant l'échéance de 2028",
      contexte: "Prenons un administrateur de biens qui gère plusieurs centaines de logements loués pour le compte de propriétaires particuliers. Les DPE sont rangés en PDF dans la GED, les baux dans le logiciel de gestion locative, et personne n'a croisé les deux depuis le changement de calcul de janvier 2026. Ce cas est fictif : il applique la méthode aux règles du DPE en vigueur en octobre 2026.",
      etapes: [
        "L'assistant lit chaque DPE et en extrait la date de réalisation, les classes énergie et climat et le mode de chauffage. Les diagnostics devenus caducs, ceux de 2018 à mi-2021, sont isolés.",
        "Il rapproche chaque logement de son bail : date d'effet, prochaine échéance, reconduction tacite.",
        "Il classe les lots en trois listes : les logements G, à ne plus relouer ni renouveler ; les logements F, à traiter avant 2028 ; les logements chauffés à l'électricité dont le DPE date d'avant 2026, pour lesquels une mise à jour peut améliorer l'étiquette.",
        "Il prépare pour chaque propriétaire concerné un courrier qui expose la situation du logement, les dates et les options, en citant le DPE.",
        "Le gestionnaire relit, ajuste et envoie. Les décisions de travaux restent celles des propriétaires.",
      ],
      resultat: "Le gestionnaire dispose d'une liste datée des lots bloqués, des DPE à refaire et des mises à jour qui peuvent rouvrir une location. Les propriétaires reçoivent une information sourcée avant l'échéance du bail. Le gain se mesure sur votre propre parc : lots remis en location, jours de vacance évités, courriers préparés sans ressaisie.",
    },
    pieges: [
      {
        titre: "Laisser l'IA compléter une annonce de mémoire",
        texte: "Une surface, une classe énergie ou une estimation de dépenses inventée expose l'agence et le bailleur. L'assistant reprend ces données du DPE et de la fiche du bien, et bloque la publication quand l'une manque.",
      },
      {
        titre: "Demander au candidat une pièce hors liste",
        texte: "Un assistant qui « complète » un dossier en réclamant un relevé bancaire sort de la liste du décret n° 2015-1437. La liste autorisée est inscrite dans ses règles, et il ne peut rien demander d'autre.",
      },
      {
        titre: "Trier les candidats sur un critère interdit",
        texte: "Un tri automatique peut reproduire un biais que personne n'a voulu : un nom, un lieu de résidence, une situation de famille. Le Code pénal punit la discrimination à la location de trois ans de prison et de 45 000 € d'amende. Le tri se limite à la complétude ; le choix reste humain et motivé.",
      },
      {
        titre: "Remettre une offre sans relire le CCAP",
        texte: "Le mémoire peut être excellent et le marché déficitaire si les pénalités, la retenue de garantie ou les délais n'ont pas été lus. L'assistant réunit ces clauses dans une fiche de risques que le dirigeant signe avant la remise de l'offre.",
      },
      {
        titre: "Coder les règles du DPE sans date",
        texte: "Le calcul change le 1er janvier 2027 et la classe F sort du marché locatif en 2028. Un outil construit sur les règles de 2025 classe mal un parc en 2027. Chaque règle de contrôle porte une date d'entrée en vigueur et se revoit à chaque arrêté.",
      },
    ],
  },

  faq: [
    {
      q: "Par quel cas commencer dans une agence ou chez un administrateur de biens ?",
      a: "Par le contrôle des pièces qui reviennent chaque semaine : annonces avant publication, dossiers de candidats, revue du parc au regard du DPE. Ces cas se testent sur vos dossiers récents, et l'erreur évitée se voit tout de suite : mention manquante, pièce hors liste, lot bloqué. La rédaction assistée des annonces vient ensuite, sur une base de données vérifiées.",
    },
    {
      q: "Par quel cas commencer dans une entreprise de travaux ?",
      a: "Par la réponse aux consultations : lecture du règlement de la consultation, exigences du CCTP rangées par critère, fiche des clauses sensibles du CCAP, plan du mémoire technique. Le gain se mesure en temps de préparation par offre et en exigences oubliées. Le suivi des attestations et des DC4 de vos sous-traitants fait un bon second cas, plus administratif.",
    },
    {
      q: "Un assistant peut-il présélectionner nos candidats locataires ?",
      a: "Il peut vérifier qu'un dossier est complet au regard du décret n° 2015-1437 et signaler une pièce manquante. Il ne doit ni demander d'autres documents, ni classer les candidats sur un critère que la loi interdit. Le choix du locataire reste une décision humaine, fondée sur des critères objectifs que le gestionnaire peut justifier.",
    },
    {
      q: "Que change le nouveau calcul du DPE pour un bailleur ?",
      a: "Depuis le 1er janvier 2026, le facteur de conversion de l'électricité est passé de 2,3 à 1,9, et un arrêté du 19 août 2026 le ramène à 1,7 à partir du 1er janvier 2027. L'étiquette d'un logement chauffé à l'électricité peut s'en trouver améliorée. Les DPE antérieurs restent valables et, dans ce cas, peuvent être mis à jour sans frais et sans nouvelle visite.",
    },
    {
      q: "Nos dossiers de locataires et nos offres de prix restent-ils confidentiels ?",
      a: "Oui, si l'architecture le prévoit. Un dossier de candidat contient des données personnelles, et un prix remis dans un appel d'offres relève du secret des affaires. Les dossiers non retenus sont supprimés au terme d'une durée fixée au cadrage, et les offres de prix restent dans l'environnement de l'entreprise, sous les droits de la direction.",
    },
    {
      q: "Combien coûte un projet IA dans l'immobilier ou le BTP ?",
      a: "Le montant dépend des métiers couverts et des logiciels à raccorder : transaction, gestion locative, chiffrage, GED de chantier. Le nombre de lots gérés ou d'offres remises par an pèse aussi. Après le cadrage, la proposition fixe un forfait et la liste des pièces contrôlées. Contrôler les annonces d'une agence reste un engagement contenu ; une chaîne qui couvre plusieurs agences ou plusieurs métiers dépasse 100 000 € et peut atteindre plusieurs centaines de milliers d'euros. Le premier pas tient en 30 minutes de cadrage offertes.",
    },
    {
      q: "L'OPCO peut-il financer la mission ?",
      a: "Votre OPCO peut financer la partie formation, c'est-à-dire les journées de vos négociateurs, gestionnaires ou conducteurs de travaux. La revue des pièces, la conception des contrôles et leur raccordement à vos logiciels métier sont des prestations de service, facturées en dehors de ce financement.",
    },
    {
      q: "Intervenez-vous dans nos agences et sur nos chantiers ?",
      a: "Oui pour les moments où il faut voir le métier : le cadrage au siège, l'observation en agence ou sur chantier, la passation aux équipes. Tout le développement se fait à distance, depuis Lyon. Le code et sa documentation restent chez vous, et un référent interne apprend à faire évoluer les règles de contrôle quand un texte change.",
    },
  ],

  sources: [
    { name: "Insee Première n° 2120 : les technologies de l'information et de la communication dans les entreprises en 2025", url: "https://www.insee.fr/fr/statistiques/9025878" },
    { name: "Service Public : diagnostic de performance énergétique (DPE), annonces et location", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16096" },
    { name: "Service Public : justificatifs que le bailleur peut demander au futur locataire", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
    { name: "Service Public : discrimination à la location d'un logement", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14750" },
    { name: "Service Public Entreprendre : examiner les documents de la consultation d'un marché public", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F32130" },
    { name: "Service Public Entreprendre : préparer le dossier offre et le mémoire technique", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F32154" },
    { name: "Service Public Entreprendre : seuils de publicité des marchés publics", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F23371" },
    { name: "Service Public Entreprendre : répondre en co-traitance ou en sous-traitance (DC4, paiement direct)", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F32137" },
    { name: "Service Public Entreprendre : garantie décennale des constructeurs", url: "https://entreprendre.service-public.gouv.fr/vosdroits/F2034" },
  ],
}
