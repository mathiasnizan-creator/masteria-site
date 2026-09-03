import { Bot, Factory, Landmark, Sun } from 'lucide-react'

/*
 * Études de cas Masteria — données partagées entre /etudes-de-cas-ia (page
 * complète) et le composant CaseStudyCards (cartes sur les pages money).
 *
 * INTÉGRITÉ ABSOLUE : chaque chiffre vient des dossiers de mission (propositions,
 * livrables, fiches de satisfaction, comptes rendus). Cas anonymisés à la demande
 * des clients : secteur, taille, chiffres, jamais de nom d'entreprise ni de
 * personne. Aucun gain non mesuré n'est écrit comme un résultat : les cibles
 * sont écrites comme des cibles. Ne pas qualifier ces cas de « réels ».
 *
 * Structure d'un cas : le défi, la réponse, la méthode en six temps (colonne
 * vertébrale de l'accompagnement Masteria), ce qui a été déployé, les résultats
 * pour les équipes et pour l'organisation, les trois piliers.
 */

export const CASES = [
  {
    id: 'distribution',
    icon: Bot,
    kicker: 'Cas 01 · Distribution B2B',
    sector: 'Distribution IT B2B',
    who: "Distributeur IT B2B, filiale française d'un groupe européen · force commerciale de 58 personnes",
    title: 'Des assistants Claude au service des équipes commerciales',
    teaser: "58 commerciaux formés en six sessions, 10 référents qui font vivre 11 assistants métier branchés sur l'ERP, la base articles et le CRM.",
    stats: [
      ['58', 'commerciaux formés : toute la force de vente'],
      ['10', 'référents « équipe élite »'],
      ['11', 'assistants Claude métier'],
      ['6', 'sessions de 2 jours'],
    ],
    defi: "Gagner en force de frappe sans grossir les effectifs. Le temps commercial utile est absorbé par des tâches répétitives : cotations, relances, réponses aux cahiers des charges, prospection, analyse de stock. L'objectif : donner aux 58 commerciaux la productivité d'une équipe bien plus large, sur les outils existants (ERP, base articles, CRM).",
    reponse: "Cadrage des cas d'usage avec la direction. Une session de deux jours pour former les 10 référents de l'équipe élite, puis cinq sessions de deux jours pour le reste des équipes. Chaque référent conçoit une compétence Claude branchée sur ses données ; la direction valide, l'organisation déploie.",
    methode: [
      { num: '01', title: 'Cadrage avec la direction', desc: "Choix des tâches à plus fort rendement (cotation, relances, cahiers des charges, prospection, stocks), circuit de validation et gouvernance du déploiement, sur les outils déjà en place." },
      { num: '02', title: "Une équipe élite de 10 référents", desc: "Deux jours de formation pour dix commerciaux volontaires. Chacun repart avec une compétence Claude conçue sur ses propres données et son propre flux de travail." },
      { num: '03', title: 'Validation par la direction', desc: "Chaque assistant est relu et validé avant diffusion : données autorisées, sources citées, ce qui reste à la main du commercial." },
      { num: '04', title: 'Déploiement à toute la force de vente', desc: "Cinq sessions de deux jours pour les 48 autres commerciaux, animées avec les référents, sur les mêmes cas et les mêmes assistants." },
      { num: '05', title: 'Mise en production', desc: "Les assistants entrent en service au fil des semaines, à commencer par les relances de devis ; les référents corrigent et enrichissent." },
      { num: '06', title: 'Autonomie interne', desc: "Les dix référents font vivre le dispositif : nouveaux cas, mises à jour des compétences, accueil des nouveaux commerciaux." },
    ],
    livrables: ["Cotation à partir d'un mail client", 'Relances de devis (en production)', 'Substitution vers les marques propres', "Réponses aux cahiers des charges depuis l'ERP", 'Prospection et réactivation clients', 'Pilotage stocks, livraisons et marge'],
    resultat: "Les 58 commerciaux sont formés, en six sessions de deux jours : les 10 référents de l'équipe élite d'abord, puis toutes les équipes de vente. Les premiers assistants sont en production, et 58 personnes assistées par Claude visent la force de frappe d'une équipe de 70, sans recrutement.",
    resultats: {
      equipes: [
        "Une cotation se prépare depuis le mail du client, les relances de devis partent sans être rédigées à la main.",
        "Les réponses aux cahiers des charges s'appuient sur l'ERP et la base articles au lieu d'être recomposées de mémoire.",
        "Chaque commercial dispose des mêmes onze assistants, avec un référent dans son équipe pour les faire évoluer.",
      ],
      organisation: [
        "Toute la force de vente formée en six sessions, avec une équipe de dix référents capable de continuer sans Masteria.",
        "Les tâches à plus fort rendement sont outillées en premier, sur les outils existants, sans nouveau logiciel.",
        "Une force de frappe d'une équipe de 70 visée avec 58 personnes, sans recrutement.",
      ],
    },
    pillars: [
      { t: 'Conseil', d: "Cadrage des cas d'usage avec la direction : choix des tâches à plus fort rendement, circuit de validation, gouvernance de déploiement." },
      { t: 'Construction', d: "11 assistants Claude conçus avec les référents et branchés sur les données de l'entreprise (ERP, base articles, CRM)." },
      { t: 'Formation', d: "58 commerciaux formés en six sessions de deux jours, dont une équipe élite de 10 référents capable de faire vivre les assistants en interne." },
    ],
  },
  {
    id: 'industrie',
    icon: Factory,
    kicker: 'Cas 02 · Industrie · Comité de direction et déploiement international',
    sector: 'Industrie · Groupe international',
    who: "Groupe industriel international du packaging · sites en Europe, aux États-Unis et en Inde · plusieurs milliers de salariés",
    title: "Du comité de direction aux managers pilotes, puis à l'international : un déploiement Copilot par paliers",
    teaser: "24 managers pilotes formés sur 13 ateliers construits avec les fichiers du groupe, une matinée stratégique pour le comité de direction, puis des sessions en anglais aux États-Unis, en Inde et au Mexique.",
    stats: [
      ['24', 'managers pilotes formés en deux sessions de deux jours'],
      ['13', 'ateliers construits sur les fichiers du groupe'],
      ['11 / 11', 'recommandent la formation, session pilote'],
      ['3', 'pays pour la phase internationale : États-Unis, Inde, Mexique'],
    ],
    defi: "Les équipes IT du groupe ont retenu Microsoft 365 Copilot, en remplacement de l'assistant conversationnel maison, avec un déploiement prévu à l'échelle du groupe, à l'international, pendant une migration vers S/4HANA. L'enjeu : réussir le premier palier avant la généralisation, sur deux niveaux. Décider et cadrer côté comité de direction ; mettre en pratique côté managers pilotes, avec un critère strict : repartir avec des usages applicables à leur poste dès le retour au bureau, pas une démonstration de fonctionnalités.",
    reponse: "Un dispositif par paliers, mesuré à chaque étape. Cadrage avec le Data manager et les référents métiers, deux sessions de deux jours pour deux groupes de managers pilotes en ateliers sur les fichiers du groupe, bilan à chaud entre les deux sessions, puis une matinée stratégique pour le comité de direction, en anglais, avant la phase internationale.",
    methode: [
      { num: '01', title: 'Cadrage avec le Data manager et les référents', desc: "Entretiens à distance, puis une journée pilote sur site : cas d'usage par fonction, supports, périmètre de sécurité de Copilot (OneDrive et SharePoint, pas les serveurs partagés), validation des modules." },
      { num: '02', title: 'Treize ateliers sur les fichiers du groupe', desc: "Quatre ateliers Excel sur des jeux de données jusqu'à 56 000 lignes (analyse de prix, activité sur cinq ans, allocation des coûts, base RH), deux Word, un Outlook, quatre PowerPoint à la charte du groupe, deux assistants dont un qui extrait Kbis, RIB et contacts d'un mail fournisseur pour la fiche SAP." },
      { num: '03', title: 'Session pilote mesurée, ajustée avant la deuxième', desc: "Bilan à chaud sur les fiches de satisfaction, rédigé sous cinq jours : licences Copilot vérifiées avant la session 2, tables composées par métier, créneau « assistants » protégé en fin de journée 2." },
      { num: '04', title: 'Deuxième groupe de managers', desc: "Même parcours de deux jours pour douze autres managers, avec les corrections de la session pilote. Supports en ligne accessibles à chaque stagiaire après la formation." },
      { num: '05', title: 'Matinée stratégique du comité de direction', desc: "Six à huit dirigeants et le Data manager, en anglais : le vocabulaire du modèle à l'agent, ce qui fait un travailleur augmenté plutôt que réduit, le cadre AI Act et RGPD, le coût des agents. Le comité repart avec cinq questions qui structurent sa feuille de route, construite l'après-midi en interne." },
      { num: '06', title: 'Phase internationale « key leaders »', desc: "Le dispositif validé en France sert de socle aux sessions en anglais sur les sites des États-Unis, de l'Inde et du Mexique, animées par un formateur du réseau Masteria." },
    ],
    livrables: ['Ateliers Excel sur les données du groupe', 'Traitement du flux Outlook', 'Production PowerPoint et Word assistée', "Création d'assistants personnalisés", 'Veille concurrentielle outillée', 'Vision stratégique posée au comité de direction'],
    resultat: "Session pilote mesurée à chaud : 11 participants sur 11 recommandent la formation, 4,9 sur 5 pour l'utilité au poste et pour l'animation, dix personnes sur onze donnant la note maximale à ces deux questions. Le dispositif validé en France sert de socle au déploiement international du groupe.",
    verbatim: { text: "Beaucoup de nouvelles choses à mettre en pratique pour analyser des fichiers ou mettre en place un assistant basé sur les best practices existantes.", role: 'Une manager, fiche de satisfaction de la session pilote' },
    resultats: {
      equipes: [
        "Des managers autonomes sur quatre à cinq cas de leur poste : analyse d'un reporting dans Excel, flux Outlook, supports PowerPoint, comptes rendus, premier assistant.",
        "L'utilité au poste notée 4,9 sur 5, parce que chaque atelier part d'un fichier du groupe et non d'un exemple générique.",
        "Quatre participants sur onze demandent déjà le niveau suivant : données SAP, Power Platform, assistants avancés. Un module avancé est cadré en conséquence.",
      ],
      organisation: [
        "Une gouvernance incarnée : le Data manager porte la politique d'usage et la bibliothèque de prompts des 24 pilotes.",
        "Un comité de direction aligné sur le vocabulaire et sur les décisions à prendre : données exclues, audit des accès, premier cas d'agent, financement de l'adoption.",
        "Un dispositif reproductible pays par pays, mesuré à chaud, qui sert de socle à la phase internationale.",
      ],
    },
    pillars: [
      { t: 'Conseil', d: "Une matinée stratégique avec le comité de direction : vision, cadre d'usage, coût des agents, feuille de route à construire avant la généralisation à l'international." },
      { t: 'Construction', d: "Treize ateliers et des assistants personnalisés construits à partir des fichiers des managers, dans l'environnement Microsoft 365 du groupe." },
      { t: 'Formation', d: "Deux sessions de deux jours pour 24 managers pilotes, mesurées à chaud et corrigées entre les deux, puis les sessions internationales en anglais." },
    ],
  },
  {
    id: 'conseil-financier',
    icon: Landmark,
    kicker: "Cas 03 · Conseil financier · Réponse aux appels d'offres",
    sector: 'Conseil financier · Secteur public',
    who: "Cabinet indépendant de conseil financier auprès du secteur public depuis plus de quarante ans · une vingtaine de consultants · Paris et Lyon",
    title: "Un assistant par pôle d'expertise pour répondre aux appels d'offres, et une méthode qui interroge le consultant",
    teaser: "Quatre assistants spécialisés par famille d'appels d'offres, construits en quatre ateliers de deux heures avec les consultants, sur les mémoires techniques et les références du cabinet.",
    stats: [
      ['4', "équipes outillées au premier palier : consultants, administration, marketing, comptabilité"],
      ['4', "assistants d'appels d'offres, un par famille de marchés"],
      ['4', 'ateliers collaboratifs de deux heures avec les équipes'],
      ['5', "livrables : architecture, base de connaissance, corpus, prompt complet, guide d'utilisation"],
    ],
    defi: "Le cabinet conseille collectivités, syndicats mixtes et sociétés d'économie mixte sur des sujets exigeants : montages financiers, délégations de service public, infrastructures, énergies renouvelables. Il produit un volume important de mémoires techniques aux contenus variés, pour des jurys qui attendent une compréhension fine du besoin, une méthodologie claire et un ton adapté au territoire. Les offres se valant souvent sur le fond, la qualité rédactionnelle et la personnalisation décident. L'enjeu : produire plus vite, capitaliser les formulations qui gagnent, tenir la qualité malgré les délais, sans exposer les données des marchés.",
    reponse: "Deux paliers. D'abord un assistant par équipe, des consultants à la comptabilité, dans un cadre de confidentialité strict. Puis une mission de conseil dédiée aux appels d'offres : une architecture d'assistants par pôle d'expertise, co-construite avec les consultants en quatre ateliers, nourrie des trames, des mémoires les mieux notés et des références du cabinet, et une journée de formation collective sur des appels d'offres récents.",
    methode: [
      { num: '01', title: 'Cadrage des pratiques rédactionnelles', desc: "Diagnostic de la façon dont les mémoires se rédigent, typologie des appels d'offres par pôle, objectifs et fonctions attendues des assistants. Livrable : un cahier de cadrage." },
      { num: '02', title: 'Une architecture par pôle', desc: "Deux pôles, quatre assistants : mobilité et infrastructures, aménagement et immobilier public, délégations de service public eau et déchets, énergies renouvelables et financement. Chaque assistant porte la logique de sa famille de marchés : technique, projet, service public, financière." },
      { num: '03', title: 'La base de connaissance', desc: "Une fiche cabinet (histoire, expertises, secteurs, clients), puis une liste priorisée des fichiers à intégrer : modèles de mémoires, notes d'analyse de DCE, méthodologies d'assistance à maîtrise d'ouvrage, mémoires les mieux notés par les jurys, références détaillées, présentation institutionnelle." },
      { num: '04', title: 'Co-construction en quatre ateliers de deux heures', desc: "Prompts écrits et testés avec les consultants sur des dossiers de consultation récents. Règle inscrite dans chaque assistant : avant de rédiger, il interroge le consultant. Le cabinet a-t-il déjà travaillé pour ce client, quelles priorités, quelle plus-value, quelles références, quelle équipe. Puis il demande un avis sur chaque méthodologie proposée." },
      { num: '05', title: 'Une journée de formation collective', desc: "Démonstration des quatre assistants, méthode de rédaction des prompts, cas pratiques sur des appels d'offres récents, règles de confidentialité et RGPD. Sur les deux sites, Paris et Lyon." },
      { num: '06', title: "Guide d'utilisation et règles de mise à jour", desc: "Un guide qui fixe qui met à jour quoi, les règles internes d'utilisation et de sécurité, et les évolutions recommandées du dispositif." },
    ],
    livrables: ["Analyse du dossier de consultation : exigences, critères de notation, attendus implicites, check-list", "Plan de mémoire technique adapté au type de projet", "Rédaction et reformulation des sections au ton du cabinet", "Personnalisation par maître d'ouvrage, territoire et nature du projet", "Contrôle de cohérence avec le dossier de consultation", "Assistants du premier palier : administration, marketing, comptabilité"],
    resultat: "Les consultants concentrent leur temps sur l'analyse et la personnalisation plutôt que sur la mise en forme des réponses. Chaque pôle dispose d'assistants qui parlent la langue de ses marchés, nourris des mémoires les mieux notés du cabinet, dans un environnement d'entreprise où les données ne servent pas à entraîner les modèles.",
    resultats: {
      equipes: [
        "Le consultant choisit l'assistant de son pôle, obtient en quelques minutes la synthèse du dossier de consultation, les critères de notation et les attendus implicites du jury.",
        "Le plan du mémoire, les sections récurrentes et les reformulations sortent au ton du cabinet ; le consultant garde l'analyse, la stratégie de réponse et la relation avec le maître d'ouvrage.",
        "L'assistant pose ses questions avant d'écrire : le mémoire part du contexte du client, pas d'une trame vide.",
      ],
      organisation: [
        "Les formulations et méthodologies qui ont gagné des marchés sont capitalisées par pôle, sans mélange entre familles de marchés.",
        "Une homogénéité éditoriale entre consultants et entre sites, avec une personnalisation rapide par appel d'offres.",
        "Un cadre écrit : confidentialité des dossiers, règles d'utilisation, responsable des mises à jour. La compétence est transférée aux équipes, le dispositif évolue sans Masteria.",
      ],
    },
    pillars: [
      { t: 'Conseil', d: "Cadrage des pratiques rédactionnelles, architecture des assistants par pôle, règles de confidentialité et de mise à jour." },
      { t: 'Construction', d: "Quatre assistants d'appels d'offres co-construits en atelier, sur les mémoires, trames et références du cabinet, plus un assistant par équipe support." },
      { t: 'Formation', d: "Une journée collective sur des appels d'offres récents, à Paris et à Lyon, pour que chaque consultant maîtrise et fasse évoluer son assistant." },
    ],
  },
  {
    id: 'photovoltaique',
    icon: Sun,
    kicker: 'Cas 04 · Distribution photovoltaïque · Mission de conseil',
    sector: 'Distribution photovoltaïque · PME',
    who: "Distributeur de solutions photovoltaïques · trois entrepôts en France, clients dans dix-sept pays · équipe de cinq personnes · gestion sur Odoo",
    title: "Un diagnostic par flux de travail, trois chantiers et un plan à 90 jours pour vendre plus sans recruter",
    teaser: "Trois entretiens, quatre flux cartographiés, douze gisements de temps chiffrés, trois chantiers prioritaires, une charte en huit règles et cinq indicateurs mesurés à J+30.",
    stats: [
      ['3', 'entretiens : direction, commercial, opérations'],
      ['4', 'flux cartographiés : vendre, livrer et encaisser, développer, piloter'],
      ['12', 'gisements de temps identifiés, dont 3 chantiers prioritaires'],
      ['90 j', 'de la décision au premier bilan de gains mesurés'],
    ],
    defi: "Vendre plus sans recruter. Tout passe par Odoo, l'ERP, et par deux personnes : un directeur commercial et un directeur des opérations qui se remplacent l'un l'autre. Le temps part autour du logiciel : ressaisie des mails en lignes de devis, consultation des transporteurs à la main quinze jours avant chaque livraison, numéros de série recopiés depuis des fichiers d'entrepôt que la scannette ne lit pas, relances manuelles, plaquettes refaites. L'IA est déjà entrée par des comptes personnels, et la direction pose sa condition : pas de vérité absolue, donc des contrôles.",
    reponse: "Une mission de conseil en deux temps, puis deux jours de formation sur site. Un diagnostic lu par flux de travail plutôt que par personne, une matrice impact et faisabilité à trois mois, un socle outillé unique, trois chantiers avec un porteur chacun, une charte d'usage, et une feuille de route de 90 jours qui se termine par une mesure.",
    methode: [
      { num: '01', title: 'Cadrage et entretiens', desc: "Trois entretiens en visioconférence avec la direction, le commercial et les opérations, sur une grille par flux : qui fait quoi, avec quel outil, à quel rythme, où ça frotte. Pièces analysées : suivi des marges, fichiers d'entrepôt, mail transporteur type, dossier de consultation." },
      { num: '02', title: 'Cartographie par flux et maturité', desc: "Quatre flux décrits étape par étape (vendre, livrer et encaisser, développer, piloter) et une lecture de maturité sur six dimensions : usages, compétences, données, gouvernance, culture, sécurité. Lecture d'ensemble 2 sur 5, gouvernance et sécurité à 1, culture et données à 3." },
      { num: '03', title: 'Trois constats, douze gisements, une matrice', desc: "Une mémoire par personne, le temps qui part dans les allers-retours autour d'Odoo, l'IA entrée avant le cadre. Douze gisements décrits avec leur volume déclaré, leur difficulté et leur dépendance à l'ERP, positionnés dans une matrice impact et faisabilité à trois mois. Aucun pourcentage générique : le gain se relève en temps, la direction le convertit en euros." },
      { num: '04', title: 'Un socle, trois chantiers, un porteur chacun', desc: "Un abonnement d'équipe administré par l'entreprise à la place des comptes personnels. Trois assistants construits en une journée sur les fichiers de l'entreprise : consultation des transporteurs à J-15 avec choix proposé, fichiers d'entrepôt convertis en fichier d'import Odoo avec contrôle des totaux, demandes entrantes transformées en lignes de devis et relances généralisées. Un tableau de bord hebdomadaire pour la direction. Chacun prépare, l'humain valide." },
      { num: '05', title: 'Le cadre : huit règles, un référent, un rituel', desc: "Une charte d'une page signée avant la formation, un référent IA qui administre les comptes et reçoit les signalements d'erreur, un rituel mensuel de trente minutes. Positionnement au regard du règlement européen sur l'IA : risque minimal, littératie couverte par la formation, transparence des contenus publiés. Ligne RGPD ajoutée au registre." },
      { num: '06', title: 'Feuille de route de 90 jours et mesure', desc: "Décision en semaine 2, conception des assistants en semaine 3, deux jours de formation sur site en semaines 4 et 5 avec relevé des points de départ, bilan à J+30 sur cinq indicateurs : délai entre la demande et le devis, temps de consultation des transporteurs, relances automatiques, réceptions sans ressaisie, usage hebdomadaire des assistants." },
    ],
    livrables: ["Cartographie des quatre flux, étape par étape", "Douze gisements chiffrés et matrice impact et faisabilité", "Socle outillé unique et comparatif des trois options", "Trois assistants avec porteur, conditions et bénéfice attendu", "Charte d'usage en huit règles et fiche du référent IA", "Feuille de route de 90 jours et cinq indicateurs avec cibles"],
    resultat: "Le diagnostic est livré et la direction dispose de trois décisions à prendre, écrites en une page : le socle, les chantiers, la charte. Les cibles à trois mois sont fixées avant la formation : un devis envoyé sous douze heures, un temps de consultation des transporteurs divisé par deux, des relances automatiques pour tous les clients, huit réceptions sur dix sans ressaisie, trois collaborateurs sur trois qui utilisent les assistants chaque semaine.",
    resultats: {
      equipes: [
        "Chaque collaborateur repart avec un assistant sur son flux : transporteurs et entrepôts pour les opérations, demandes entrantes et relances pour le commercial, tableau de bord pour la direction.",
        "Un cadre qui autorise au lieu de retenir : l'équipe demandait des garde-fous, elle reçoit huit règles et un référent, et le droit d'utiliser l'IA sans se limiter.",
        "Des cibles écrites par tâche, relevées en formation, revues à J+30. Un gain qui n'est pas mesuré s'évapore.",
      ],
      organisation: [
        "Une mémoire d'équipe (catalogue, références, trames, transporteurs) à la place d'une mémoire par personne : l'absence ou le départ d'un collaborateur ne fait plus perdre le fil.",
        "La fin des comptes personnels : des comptes d'équipe administrés, sans réutilisation des données pour l'entraînement, une ligne au registre RGPD.",
        "Un document de quatorze pages que la direction lit seule, avec la conversion en euros à sa main, et une deuxième vague déjà cadrée : import direct dans Odoo, trésorerie, appels d'offres.",
      ],
    },
    pillars: [
      { t: 'Conseil', d: "Diagnostic par flux, matrice de priorisation, recommandations avec porteur et conditions, charte et positionnement réglementaire, feuille de route de 90 jours." },
      { t: 'Construction', d: "Trois assistants construits en une journée sur les fichiers de l'entreprise, branchés sur Odoo par paliers, plus un tableau de bord de direction." },
      { t: 'Formation', d: "Deux jours sur site pour les trois collaborateurs : socle et cadre le premier jour, cas par flux et prise en main des assistants le second, indicateurs relevés en séance." },
    ],
  },
]

/* Les six temps communs à toute mission Masteria (page études de cas, section « Notre méthode »). */
export const METHODE_COMMUNE = [
  { num: '01', title: 'Cadrer avec la direction', desc: "Ce qui motive la demande, le périmètre, ce qui est hors sujet, la décision attendue à la fin. Le cadrage fixe la mission, jamais l'inverse." },
  { num: '02', title: 'Cartographier les flux', desc: "Entretiens avec les personnes qui font le travail, lecture par flux et par tâche, inventaire des outils et des usages déjà nés hors de tout cadre." },
  { num: '03', title: 'Prioriser par impact et faisabilité', desc: "Chaque gisement avec son volume déclaré, sa difficulté et ses dépendances, positionné à trois mois. Les cas écartés sont écrits avec leur motif." },
  { num: '04', title: 'Concevoir sur les fichiers de l\'entreprise', desc: "Des assistants et des ateliers construits sur les documents, données et outils en place, avec un porteur, des conditions et une validation humaine sur ce qui engage." },
  { num: '05', title: 'Former par métier et poser le cadre', desc: "Des sessions sur les cas de chacun, une charte d'usage, un référent interne, des supports accessibles après la formation. La compétence reste dans l'entreprise." },
  { num: '06', title: 'Mesurer et relancer', desc: "Points de départ relevés en séance, indicateurs revus à J+30, bilan à chaud et à froid, deuxième vague cadrée sur ce qui a marché." },
]
