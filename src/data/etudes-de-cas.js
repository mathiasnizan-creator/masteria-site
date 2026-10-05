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
    who: "Distributeur IT B2B, filiale française d'un groupe européen · 58 salariés",
    title: 'Onze compétences Claude pour les équipes commerciales, portées par dix référents',
    teaser: "Dix référents formés en deux jours, onze compétences Claude construites avec eux sur la cotation, les relances, les cahiers des charges et les stocks, puis un déploiement à toute l'entreprise prévu d'octobre à décembre 2026.",
    stats: [
      ['10', 'référents formés en deux jours'],
      ['11', 'compétences Claude, une par projet'],
      ['58', 'salariés visés par le déploiement'],
      ['70', 'la force de frappe visée, sans recrutement'],
    ],
    defi: "Gagner en force de frappe sans grossir les effectifs. Le temps commercial utile est absorbé par des tâches répétitives\u00a0: cotations, relances, réponses aux cahiers des charges, prospection, analyse de stock. L'objectif\u00a0: donner aux 58 salariés la force de frappe d'une équipe bien plus large, sur les outils existants (ERP, base articles, CRM).",
    reponse: "Cadrage des cas d'usage avec la direction. Une session de deux jours pour former les dix référents de l'équipe élite, chacun sur un projet ; chaque référent conçoit une compétence Claude sur son flux de travail, la direction valide, et le déploiement aux autres équipes est prévu d'octobre à décembre 2026.",
    methode: [
      { num: '01', title: 'Cadrage avec la direction', desc: "Choix des tâches à plus fort rendement (cotation, relances, cahiers des charges, prospection, stocks), circuit de validation et gouvernance du déploiement, sur les outils déjà en place." },
      { num: '02', title: "Une équipe élite de 10 référents", desc: "Deux jours de formation pour dix référents, un par projet, en juin 2026. Chacun repart avec une compétence Claude conçue sur son propre flux de travail." },
      { num: '03', title: 'Validation par la direction', desc: "Chaque compétence est relue et validée avant diffusion\u00a0: données autorisées, sources citées, ce qui reste à la main du commercial." },
      { num: '04', title: 'Déploiement aux autres équipes, à venir', desc: "Le déploiement aux quelque cinquante autres collaborateurs est prévu d'octobre à décembre 2026, avec les référents, sur les mêmes cas et les mêmes compétences." },
      { num: '05', title: 'Passage en production', desc: "Les compétences sont livrées avec des données de démonstration\u00a0; chaque référent les remplace par les données de l'entreprise avant la production. La relance des devis a été validée sur de vrais devis avant la formation." },
      { num: '06', title: 'Autonomie interne', desc: "Les dix référents font vivre les compétences sans Masteria\u00a0: validation par la direction, propriétaire nommé, revue trimestrielle, dépôt versionné." },
    ],
    livrables: ["Cotation à partir d'un mail client", 'Relances de devis (validées avant la formation)', 'Substitution vers les marques propres', "Réponses aux cahiers des charges depuis l'ERP", 'Prospection et réactivation clients', 'Pilotage stocks, livraisons et marge'],
    resultat: "Les dix référents de l'équipe élite sont formés depuis juin 2026\u00a0; chacun repart avec une compétence Claude installée sur son projet, et la relance des devis a été validée avant la formation. Le déploiement aux autres collaborateurs est prévu d'octobre à décembre 2026. La cible reste une équipe de 58 personnes assistées par Claude avec la force de frappe d'une équipe de 70, sans recrutement.",
    resultats: {
      equipes: [
        "Une compétence prépare la cotation depuis le mail du client, une autre rédige les relances de devis, validées sur de vrais devis avant la formation.",
        "La compétence cahiers des charges est conçue pour s'appuyer sur l'ERP et la base articles, au lieu d'une réponse recomposée de mémoire.",
        "Chaque référent porte une compétence et la fait évoluer\u00a0; les autres collaborateurs y accéderont au déploiement.",
      ],
      organisation: [
        "Dix référents capables de faire vivre les compétences sans Masteria\u00a0: validation par la direction, propriétaire nommé, revue trimestrielle, dépôt versionné.",
        "Les tâches à plus fort rendement sont outillées en premier, sur les outils existants, sans nouveau logiciel.",
        "Une force de frappe d'une équipe de 70 visée avec 58 personnes, sans recrutement.",
      ],
    },
    pillars: [
      { t: 'Conseil', d: "Cadrage des cas d'usage avec la direction\u00a0: choix des tâches à plus fort rendement, circuit de validation, gouvernance de déploiement." },
      { t: 'Construction', d: "Onze compétences Claude conçues avec les référents, avec des données de démonstration que chacun remplace par celles de l'entreprise (ERP, base articles, CRM) avant la production." },
      { t: 'Formation', d: "Deux jours pour dix référents en juin 2026, puis le déploiement aux autres équipes d'octobre à décembre 2026." },
    ],
  },
  {
    id: 'industrie',
    icon: Factory,
    kicker: 'Cas 02 · Industrie · Comité de direction et déploiement international',
    sector: 'Industrie · Groupe international',
    who: "Groupe industriel international du packaging · sites en Europe, aux États-Unis et en Inde · plusieurs milliers de salariés",
    title: "Du comité de direction aux managers pilotes, puis à l'international\u00a0: un déploiement Copilot par paliers",
    teaser: "Cinq sessions de deux jours pour les managers entre juillet et septembre 2026, dont deux en anglais, sur 13 ateliers construits avec les fichiers du groupe ; une matinée stratégique pour le comité de direction ; puis les sites des États-Unis et du Mexique en octobre 2026 et de l'Inde en décembre.",
    stats: [
      ['24', 'managers pilotes formés en deux sessions de deux jours'],
      ['13', 'ateliers construits sur les fichiers du groupe'],
      ['5', 'sessions de deux jours de juillet à septembre 2026, dont deux en anglais'],
      ['3', 'pays pour la phase internationale\u00a0: États-Unis, Inde, Mexique'],
    ],
    defi: "Les équipes IT du groupe ont retenu Microsoft 365 Copilot, en remplacement de l'assistant conversationnel maison, avec un déploiement prévu à l'échelle du groupe, à l'international, pendant une migration vers S/4HANA. L'enjeu\u00a0: réussir le premier palier avant la généralisation, sur deux niveaux. Décider et cadrer côté comité de direction\u00a0; mettre en pratique côté managers pilotes, avec un critère strict\u00a0: repartir avec des usages applicables à leur poste dès le retour au bureau, pas une démonstration de fonctionnalités.",
    reponse: "Un dispositif par paliers, mesuré à chaque étape. Cadrage avec le Data manager et les référents métiers, deux sessions de deux jours pour deux groupes de managers pilotes en ateliers sur les fichiers du groupe, bilan à chaud entre les deux sessions, puis une matinée stratégique pour le comité de direction, en anglais, avant la phase internationale.",
    methode: [
      { num: '01', title: 'Cadrage avec le Data manager et les référents', desc: "Entretiens à distance, puis une journée pilote sur site\u00a0: cas d'usage par fonction, supports, périmètre de sécurité de Copilot (OneDrive et SharePoint, pas les serveurs partagés), validation des modules." },
      { num: '02', title: 'Treize ateliers sur les fichiers du groupe', desc: "Des ateliers Excel sur les données du groupe (prix, activité, coûts, base RH), Word, Outlook et PowerPoint à la charte du groupe, et des assistants, dont un qui prépare la fiche fournisseur à partir d'un mail." },
      { num: '03', title: 'Session pilote mesurée, ajustée avant la deuxième', desc: "Bilan à chaud après la session pilote et trois ajustements avant la suivante\u00a0: licences vérifiées, tables composées par métier, temps protégé pour les assistants." },
      { num: '04', title: 'Deuxième groupe de managers', desc: "Même parcours de deux jours pour douze autres managers, avec les corrections de la session pilote. Supports en ligne accessibles à chaque stagiaire après la formation." },
      { num: '05', title: 'Matinée stratégique du comité de direction', desc: "Le comité de direction et le Data manager, en anglais\u00a0: le vocabulaire du modèle à l'agent, ce qui fait un travailleur augmenté plutôt que réduit, le cadre AI Act et RGPD, le coût des agents. Le comité repart avec les questions qui structurent sa feuille de route." },
      { num: '06', title: 'Phase internationale « key leaders »', desc: "Après deux sessions en anglais en septembre 2026, le dispositif part sur les sites des États-Unis et du Mexique en octobre, puis de l'Inde en décembre, animé par un formateur du réseau Masteria." },
    ],
    livrables: ['Ateliers Excel sur les données du groupe', 'Traitement du flux Outlook', 'Production PowerPoint et Word assistée', "Création d'assistants personnalisés", 'Veille concurrentielle outillée', 'Vision stratégique posée au comité de direction'],
    resultat: "Les deux sessions pilotes ont été mesurées à chaud et corrigées de l'une à l'autre ; trois autres ont suivi en septembre 2026, dont deux en anglais. Deux mois après, des managers décrivent ce qu'ils en font\u00a0: l'analyse de fichiers et la préparation d'un retour sur investissement pour le déploiement d'outils RH, une présentation pour un directeur d'usine, l'analyse d'un appel d'offres. Le dispositif sert de socle aux sessions des États-Unis et du Mexique en octobre 2026, puis de l'Inde en décembre.",
    verbatim: { text: "Beaucoup de nouvelles choses à mettre en pratique pour analyser des fichiers ou mettre en place un assistant basé sur les best practices existantes.", role: 'Une manager, fiche de satisfaction de la session pilote' },
    resultats: {
      equipes: [
        "Des managers autonomes sur quatre à cinq cas de leur poste\u00a0: analyse d'un reporting dans Excel, flux Outlook, supports PowerPoint, comptes rendus, premier assistant.",
        "Chaque atelier part d'un fichier du groupe et non d'un exemple générique : c'est ce que les participants retiennent d'abord dans leurs retours écrits.",
        "Une partie des participants demande déjà le niveau suivant\u00a0: données SAP, Power Platform, assistants avancés. Un module avancé est cadré en conséquence.",
      ],
      organisation: [
        "Une gouvernance incarnée\u00a0: le Data manager porte la politique d'usage et la bibliothèque de prompts des 24 pilotes.",
        "Un comité de direction aligné sur le vocabulaire et sur les décisions à prendre\u00a0: données exclues, audit des accès, premier cas d'agent, financement de l'adoption.",
        "Un dispositif reproductible pays par pays, mesuré à chaud, qui sert de socle à la phase internationale.",
      ],
    },
    pillars: [
      { t: 'Conseil', d: "Une matinée stratégique avec le comité de direction\u00a0: vision, cadre d'usage, coût des agents, feuille de route à construire avant la généralisation à l'international." },
      { t: 'Construction', d: "Treize ateliers et des assistants personnalisés construits à partir des fichiers des managers, dans l'environnement Microsoft 365 du groupe." },
      { t: 'Formation', d: "Deux sessions pilotes de deux jours pour 24 managers, mesurées à chaud et corrigées de l'une à l'autre, puis trois sessions en septembre 2026, dont deux en anglais, avant les sites internationaux." },
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
      ['4', "équipes outillées au premier palier\u00a0: consultants, administration, marketing, comptabilité"],
      ['4', "assistants d'appels d'offres, un par famille de marchés"],
      ['4', 'ateliers collaboratifs de deux heures avec les équipes'],
      ['5', "livrables\u00a0: architecture, base de connaissance, corpus, prompt complet, guide d'utilisation"],
    ],
    defi: "Le cabinet conseille collectivités, syndicats mixtes et sociétés d'économie mixte sur des sujets exigeants\u00a0: montages financiers, délégations de service public, infrastructures, énergies renouvelables. Il produit un volume important de mémoires techniques aux contenus variés, pour des jurys qui attendent une compréhension fine du besoin, une méthodologie claire et un ton adapté au territoire. Les offres se valant souvent sur le fond, la qualité rédactionnelle et la personnalisation décident. L'enjeu\u00a0: produire plus vite, capitaliser les formulations qui gagnent, tenir la qualité malgré les délais, sans exposer les données des marchés.",
    reponse: "Deux paliers. D'abord un assistant par équipe, des consultants à la comptabilité, dans un cadre de confidentialité strict. Puis une mission de conseil dédiée aux appels d'offres\u00a0: une architecture d'assistants par pôle d'expertise, co-construite avec les consultants en quatre ateliers, nourrie des trames, des mémoires les mieux notés et des références du cabinet, et une journée de formation collective sur des appels d'offres récents.",
    methode: [
      { num: '01', title: 'Cadrage des pratiques rédactionnelles', desc: "Diagnostic de la façon dont les mémoires se rédigent, typologie des appels d'offres par pôle, objectifs et fonctions attendues des assistants. Livrable\u00a0: un cahier de cadrage." },
      { num: '02', title: 'Une architecture par pôle', desc: "Deux pôles, quatre assistants\u00a0: mobilité et infrastructures, aménagement et immobilier public, délégations de service public eau et déchets, énergies renouvelables et financement. Chaque assistant porte la logique de sa famille de marchés\u00a0: technique, projet, service public, financière." },
      { num: '03', title: 'La base de connaissance', desc: "Une fiche cabinet (histoire, expertises, secteurs, clients), puis une liste priorisée des fichiers à intégrer\u00a0: modèles de mémoires, notes d'analyse de DCE, méthodologies d'assistance à maîtrise d'ouvrage, mémoires les mieux notés par les jurys, références détaillées, présentation institutionnelle." },
      { num: '04', title: 'Co-construction en quatre ateliers de deux heures', desc: "Prompts écrits et testés avec les consultants sur des dossiers de consultation récents. Règle inscrite dans chaque assistant\u00a0: avant de rédiger, il interroge le consultant. Le cabinet a-t-il déjà travaillé pour ce client, quelles priorités, quelle plus-value, quelles références, quelle équipe. Puis il demande un avis sur chaque méthodologie proposée." },
      { num: '05', title: 'Une journée de formation collective', desc: "Démonstration des quatre assistants, méthode de rédaction des prompts, cas pratiques sur des appels d'offres récents, règles de confidentialité et RGPD. Sur les deux sites, Paris et Lyon." },
      { num: '06', title: "Guide d'utilisation et règles de mise à jour", desc: "Un guide qui fixe qui met à jour quoi, les règles internes d'utilisation et de sécurité, et les évolutions recommandées du dispositif." },
    ],
    livrables: ["Analyse du dossier de consultation\u00a0: exigences, critères de notation, attendus implicites, check-list", "Plan de mémoire technique adapté au type de projet", "Rédaction et reformulation des sections au ton du cabinet", "Personnalisation par maître d'ouvrage, territoire et nature du projet", "Contrôle de cohérence avec le dossier de consultation", "Assistants du premier palier\u00a0: administration, marketing, comptabilité"],
    resultat: "Les consultants concentrent leur temps sur l'analyse et la personnalisation plutôt que sur la mise en forme des réponses. Chaque pôle dispose d'assistants qui parlent la langue de ses marchés, nourris des mémoires les mieux notés du cabinet, dans un environnement d'entreprise où les données ne servent pas à entraîner les modèles.",
    resultats: {
      equipes: [
        "Le consultant choisit l'assistant de son pôle, obtient en quelques minutes la synthèse du dossier de consultation, les critères de notation et les attendus implicites du jury.",
        "Le plan du mémoire, les sections récurrentes et les reformulations sortent au ton du cabinet\u00a0; le consultant garde l'analyse, la stratégie de réponse et la relation avec le maître d'ouvrage.",
        "L'assistant pose ses questions avant d'écrire\u00a0: le mémoire part du contexte du client, pas d'une trame vide.",
      ],
      organisation: [
        "Les formulations et méthodologies qui ont gagné des marchés sont capitalisées par pôle, sans mélange entre familles de marchés.",
        "Une homogénéité éditoriale entre consultants et entre sites, avec une personnalisation rapide par appel d'offres.",
        "Un cadre écrit\u00a0: confidentialité des dossiers, règles d'utilisation, responsable des mises à jour. La compétence est transférée aux équipes, le dispositif évolue sans Masteria.",
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
    who: "Distributeur de solutions photovoltaïques · trois entrepôts en France, clients à l'export · équipe de trois personnes · gestion sur Odoo",
    title: "Un diagnostic par flux de travail, trois chantiers et un plan à 90 jours pour vendre plus sans recruter",
    teaser: "Un diagnostic par flux de travail, trois chantiers prioritaires et une charte d'usage, présentés à la direction en septembre 2026, avant une formation sur site en octobre et une première mesure des gains.",
    stats: [
      ['3', 'entretiens\u00a0: direction, commercial, opérations'],
      ['4', 'flux cartographiés\u00a0: vendre, livrer et encaisser, développer, piloter'],
      ['12', 'gisements de temps identifiés, dont 3 chantiers prioritaires'],
      ['90 j', 'de la décision au premier bilan de gains mesurés'],
    ],
    defi: "Vendre plus sans recruter. Tout passe par Odoo, l'ERP, et par deux personnes\u00a0: un directeur commercial et un directeur des opérations qui se remplacent l'un l'autre. Le temps part autour du logiciel\u00a0: ressaisie des mails en lignes de devis, consultation des transporteurs à la main quinze jours avant chaque livraison, numéros de série recopiés depuis des fichiers d'entrepôt que la scannette ne lit pas, relances manuelles, plaquettes refaites. L'IA est déjà entrée par des comptes personnels, et la direction pose sa condition\u00a0: pas de vérité absolue, donc des contrôles.",
    reponse: "Une mission de conseil en deux temps, puis deux jours de formation sur site. Un diagnostic lu par flux de travail plutôt que par personne, une matrice impact et faisabilité à trois mois, un socle outillé unique, trois chantiers avec un porteur chacun, une charte d'usage, et une feuille de route de 90 jours qui se termine par une mesure.",
    methode: [
      { num: '01', title: 'Cadrage et entretiens', desc: "Des entretiens avec la direction, le commercial et les opérations, sur une grille par flux\u00a0: qui fait quoi, avec quel outil, où ça frotte. Les fichiers de travail (marges, entrepôts, transport) sont analysés en parallèle." },
      { num: '02', title: 'Cartographie par flux et maturité', desc: "Quatre flux décrits étape par étape (vendre, livrer et encaisser, développer, piloter) et une lecture de maturité sur six dimensions\u00a0: usages, compétences, données, gouvernance, culture, sécurité. Les règles d'usage sont la dimension la plus faible ; les données, la culture et la sécurité les plus avancées." },
      { num: '03', title: 'Trois constats, douze gisements, une matrice', desc: "Une mémoire par personne, le temps qui part dans les allers-retours autour d'Odoo, l'IA entrée avant le cadre. Des gisements de temps classés selon leur impact et leur faisabilité à trois mois. Aucun pourcentage générique\u00a0: le gain se relève en temps, la direction le convertit en euros." },
      { num: '04', title: 'Un socle, trois chantiers, un porteur chacun', desc: "Un abonnement d'équipe administré par l'entreprise à la place des comptes personnels. Trois assistants à construire sur les fichiers de l'entreprise avant la formation\u00a0: consultation des transporteurs, import des réceptions d'entrepôt dans Odoo, devis et relances. Un tableau de bord pour la direction. Chacun prépare, l'humain valide." },
      { num: '05', title: 'Le cadre\u00a0: une charte, un référent, un rituel', desc: "Une charte d'usage signée avant la formation, un référent IA qui administre les comptes et recueille les erreurs signalées, un point mensuel. Le positionnement au regard de l'AI Act et du RGPD est posé." },
      { num: '06', title: 'Feuille de route de 90 jours et mesure', desc: "Décision, conception des assistants, deux jours de formation sur site avec relevé des points de départ, puis un bilan à un mois sur quelques indicateurs simples\u00a0: délai de devis, temps passé avec les transporteurs, relances, ressaisies, usage des assistants." },
    ],
    livrables: ["Cartographie des flux de travail", "Gisements de temps classés par impact et faisabilité", "Choix d'un outil commun pour l'équipe", "Trois assistants, un porteur chacun", "Charte d'usage et référent IA", "Feuille de route de 90 jours et objectifs chiffrés"],
    resultat: "Le diagnostic a été présenté à la direction en septembre 2026 avec trois décisions à prendre\u00a0: l'outil commun, les chantiers, la charte. Une première liste d'entreprises cibles prépare la prospection à l'export. La formation sur site est prévue en octobre 2026, et les objectifs à trois mois sont fixés avant\u00a0: des devis plus rapides, moins de temps passé avec les transporteurs, des relances automatiques pour tous les clients et la fin des ressaisies.",
    resultats: {
      equipes: [
        "Chaque collaborateur aura un assistant sur son flux\u00a0: transporteurs et entrepôts pour les opérations, demandes entrantes et relances pour le commercial, tableau de bord pour la direction.",
        "Un cadre qui autorise au lieu de retenir\u00a0: l'équipe demandait des garde-fous, elle reçoit une charte, un référent et le droit d'utiliser l'IA sans se limiter.",
        "Des objectifs écrits par tâche, revus un mois après la formation. Un gain qui n'est pas mesuré s'évapore.",
      ],
      organisation: [
        "Une mémoire d'équipe (catalogue, références, trames, transporteurs) à la place d'une mémoire par personne\u00a0: l'absence ou le départ d'un collaborateur ne fait plus perdre le fil.",
        "La fin des comptes personnels\u00a0: des comptes d'équipe administrés, sans réutilisation des données pour l'entraînement, une ligne au registre RGPD.",
        "Un diagnostic que la direction lit seule, avec la conversion en euros à sa main, et une deuxième vague déjà cadrée\u00a0: import direct dans Odoo, trésorerie, appels d'offres.",
      ],
    },
    pillars: [
      { t: 'Conseil', d: "Diagnostic par flux, matrice de priorisation, recommandations avec porteur et conditions, charte et positionnement réglementaire, feuille de route de 90 jours." },
      { t: 'Construction', d: "Trois assistants à construire sur les fichiers de l'entreprise, à brancher sur Odoo par paliers, plus un tableau de bord de direction." },
      { t: 'Formation', d: "Deux jours sur site pour toute l'équipe en octobre 2026\u00a0: le cadre et l'outil commun le premier jour, les cas par flux et la prise en main des assistants le second." },
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
