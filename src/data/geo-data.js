// Données géographiques pour les pages formation IA par ville
// Stratégie SEO/GEO ciblée : 5 villes prioritaires × 2 outils + 5 pages génériques = 15 pages géo
// Couverture : Lyon (siège, inter + intra), Paris, Marseille, Genève, Bruxelles
// Outils ciblés : ChatGPT (volume max), Claude IA (différentiation premium)
//
// Chaque ville porte un contenu rédactionnel dense (industries, cas d'usage, accès, OPCO, écosystème)
// + des coordonnées et faits locaux pour les schémas Place et l'optimisation GEO/AEO.

export const GEO_CITIES = [
  {
    slug: 'paris',
    name: 'Paris',
    nameLoc: 'à Paris',
    region: 'Île-de-France',
    country: 'France',
    countryCode: 'FR',
    locale: 'fr-FR',
    coordinates: { latitude: 48.8566, longitude: 2.3522 },
    population: '2,1 millions d\'habitants intra-muros',
    metroArea: 'Métropole du Grand Paris : 7,2 millions d\'habitants, première agglomération économique d\'Europe continentale',
    intraOnly: true,
    sectors: "finance, conseil stratégique, tech, médias, retail et grands groupes du CAC 40",
    desc: "Capitale économique française, Paris concentre 25 sièges sociaux du CAC 40, l'écosystème conseil le plus dense d'Europe et le plus grand bassin tech français. La demande en formation IA y est particulièrement forte dans les secteurs finance, conseil, tech et médias. Masteria intervient directement dans vos locaux parisiens, sans frais de déplacement supplémentaires.",
    introPitch: "Nous nous déplaçons dans vos bureaux parisiens, en intra-muros ou en proche couronne, pour former vos équipes dans leur environnement de travail habituel. Programme construit sur vos cas d'usage réels, vos outils internes, vos processus métier.",
    opco: "OPCO principaux en Île-de-France : ATLAS (conseil, services financiers, banque, assurance), AKTO (hôtellerie, propreté, services à la personne, sécurité), CONSTRUCTYS (BTP), AFDAS (médias, culture, tourisme), OPCO 2i (industrie). Prise en charge jusqu'à 100 % selon votre convention collective. Délai de traitement OPCO en Île-de-France : 5 à 10 jours ouvrés en moyenne.",
    zones: "Paris intra-muros (75) et l'ensemble de l'Île-de-France : La Défense, Massy, Saint-Denis, Issy-les-Moulineaux, Boulogne, Versailles, Cergy, Marne-la-Vallée, Roissy",
    industriesDeep: [
      { sector: 'Finance & banque', companies: 'BNP Paribas, Société Générale, Crédit Agricole, AXA, BPCE, La Banque Postale', focus: 'Reporting réglementaire, analyse de portefeuille, KYC/AML, automatisation back-office, rédaction de notes de marché.' },
      { sector: 'Conseil & cabinet', companies: 'BCG, McKinsey, Bain, EY, KPMG, Deloitte, Wavestone, Sia Partners', focus: 'Rédaction de propositions commerciales, synthèses de mission, slides de CODIR, capitalisation sur les missions passées.' },
      { sector: 'Tech & numérique', companies: 'Capgemini, Atos, OVHcloud, Doctolib, Mirakl, Aircall, Datadog Paris, Criteo', focus: 'Documentation technique, code review assistée, communication produit, support client multilingue.' },
      { sector: 'Médias & retail', companies: 'Vivendi, Publicis, Havas, JC Decaux, LVMH, Kering, Carrefour, Decathlon', focus: 'Production éditoriale multi-canaux, segmentation client, brief créatif, rédaction de fiches produit, communication interne.' },
    ],
    localCases: [
      { profile: 'Direction RH — ETI conseil 600 collaborateurs (8e arr.)', usage: 'Tri de candidatures, rédaction de fiches de poste, communication interne post-réorganisation, refonte du parcours d\'onboarding.' },
      { profile: 'Pôle marketing — agence média indépendante (10e arr.)', usage: 'Production de contenus pour 12 marques clientes, brief créatif, déclinaison multi-canaux LinkedIn / newsletter / blog.' },
      { profile: 'Direction financière — groupe industriel CAC 40 (La Défense)', usage: 'Synthèse de rapports trimestriels, analyse comparative de filiales, préparation de board international en anglais.' },
    ],
    localFacts: [
      '25 sièges sociaux du CAC 40 sont situés à Paris ou à La Défense.',
      'Le bassin d\'emploi parisien regroupe 6,2 millions de cadres, soit 38 % des cadres français.',
      '92 % des grandes entreprises franciliennes ont lancé un programme IA générative en 2025 (étude PwC France).',
      'L\'OPCO ATLAS — principal financeur en Île-de-France pour le conseil, l\'audit et la banque — traite environ 70 % des dossiers IA Masteria sur Paris.',
    ],
    transportAccess: "Notre formateur se déplace partout en Île-de-France. Accès rapide à La Défense (RER A, métro 1), à la Gare de Lyon (RER A et D), à Saint-Lazare et à Roissy CDG (RER B, 30 min). Pour les sessions en proche couronne, nous facturons aucun frais de déplacement supplémentaire.",
    localExperts: [
      { name: 'Pôle de compétitivité Cap Digital', type: 'Innovation numérique Île-de-France' },
      { name: 'Institut Polytechnique de Paris', type: 'Recherche IA (Polytechnique, Télécom Paris, ENSAE)' },
      { name: 'Station F', type: 'Plus grand campus de startups au monde, partenaire formation IA' },
    ],
    additionalFAQ: [
      { q: 'Intervenez-vous aussi en proche couronne (92, 93, 94) ?', a: "Oui. Nous nous déplaçons sans frais supplémentaires partout en Île-de-France : Hauts-de-Seine (La Défense, Boulogne, Issy-les-Moulineaux), Seine-Saint-Denis (Saint-Denis, Aubervilliers, Plaine Commune), Val-de-Marne (Créteil, Charenton, Villejuif). Préciser l'adresse exacte au moment du cadrage permet d'optimiser la logistique." },
      { q: 'Quels sont les délais d\'instruction OPCO ATLAS en Île-de-France ?', a: "Compter 5 à 10 jours ouvrés en moyenne pour une réponse OPCO ATLAS, premier financeur du conseil et des services financiers en Île-de-France. Masteria fournit le dossier complet (devis, programme, convention, attestation Qualiopi) sous 24 h ouvrées après acceptation du devis, ce qui permet une mise en formation en 3 à 4 semaines." },
      { q: 'Où se déroulent les formations IA à Paris ?', a: "En intra-entreprise : le formateur vient dans vos bureaux, partout dans Paris intra-muros et en Île-de-France (La Défense, les quartiers d'affaires de l'ouest parisien, Boulogne, Issy-les-Moulineaux, Saint-Denis, Marne-la-Vallée). Former l'équipe sur son poste de travail, avec ses vrais outils et ses vrais documents, est le format le plus efficace. Le distanciel reste disponible pour les équipes réparties sur plusieurs sites." },
      { q: 'Pourquoi choisir Masteria pour une formation IA à Paris ?', a: "Le programme se construit sur vos cas d'usage réels et Masteria connaît les secteurs qui dominent le marché parisien : finance, conseil, tech, médias et retail. La certification Qualiopi ouvre le financement OPCO (ATLAS en tête pour le conseil et la finance francilienne), le formateur se déplace sans frais dans toute l'Île-de-France, et le dossier de prise en charge est géré pour vous." },
    ],
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    nameLoc: 'à Lyon',
    region: 'Auvergne-Rhône-Alpes',
    country: 'France',
    countryCode: 'FR',
    locale: 'fr-FR',
    // Lyon est le siège de Masteria : la page vise la requête complète
    // « formation intelligence artificielle lyon » en plus de « formation ia lyon ».
    metaTitleOverride: 'Formation intelligence artificielle Lyon | Masteria',
    h1Override: 'Formation intelligence artificielle à Lyon : ChatGPT, Claude et 89 programmes par métier',
    coordinates: { latitude: 45.7640, longitude: 4.8357 },
    population: '522 000 habitants intra-muros',
    metroArea: 'Métropole de Lyon : 1,4 million d\'habitants, deuxième pôle économique français',
    intraOnly: false,
    sectors: "pharma, biotech, finance, industrie, numérique et services B2B",
    desc: "Deuxième pôle économique de France, Lyon est le siège historique de Masteria. Lyon abrite notre siège et concentre une part importante de nos interventions intra-entreprise dans la région, en complément des accompagnements individuels sur mesure réalisés en présentiel ou en distanciel. Lyon est aussi un hub IA reconnu (LabIA, ENS Lyon, Inria Lyon) avec un tissu d'entreprises pharma, industrie et services en pleine accélération sur le sujet.",
    introPitch: "Lyon est notre base : formations intra-entreprise dans vos locaux (jusqu'à 12 participants) ou accompagnement individuel sur mesure en présentiel à Lyon ou en distanciel. Grenoble, Saint-Étienne, Clermont-Ferrand et Annecy sont également couverts en intra.",
    opco: "OPCO principaux en Auvergne-Rhône-Alpes : ATLAS (conseil, banque, assurance, services financiers), OPCO 2i (industrie, métallurgie, chimie, plasturgie, pharma), AKTO (services), AFDAS (médias et culture). Masteria est référencé auprès des OPCO de la région depuis 2022. Délai de traitement moyen : 5 à 10 jours ouvrés.",
    zones: "Lyon (1er au 9e arrondissement), Villeurbanne, Caluire-et-Cuire, Saint-Priest, Bron, Vénissieux, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy, Chambéry, Valence",
    industriesDeep: [
      { sector: 'Pharma & biotech', companies: 'Sanofi Pasteur, BioMérieux, Boiron, Mérieux NutriSciences, BD Medical, Aguettant', focus: 'Veille réglementaire (ANSM, EMA), rédaction de dossiers AMM, synthèse d\'essais cliniques, communication scientifique.' },
      { sector: 'Banque & assurance', companies: 'Crédit Agricole Centre-Est, La Banque Postale, BNP Paribas Lyon, AÉSIO Mutuelle, Apicil, April', focus: 'Analyse de risque, rédaction de contrats, gestion des sinistres, conformité LCB-FT, communication conseiller.' },
      { sector: 'Industrie & énergie', companies: 'Renault Trucks, Iveco Group, Volvo Group, EDF Hydroélectrique, Framatome, SEB Group', focus: 'Documentation technique, maintenance prédictive, rédaction de cahiers des charges, support qualité, formation interne.' },
      { sector: 'Tech & numérique', companies: 'OL Groupe / OL Cloud, Eatech, BlaBlaCar (R&D Lyon), Algoan, Datacore, Lifen', focus: 'Documentation produit, code review, rédaction de spécifications fonctionnelles, support client niveau 1.' },
    ],
    localCases: [
      { profile: 'Direction qualité — laboratoire pharma 350 collaborateurs (Lyon 8e)', usage: 'Synthèse d\'audits internes, rédaction de procédures qualité, mise à jour des fiches sécurité produit (FSP) sur 40 références.' },
      { profile: 'Service client — courtier en assurance (Lyon Part-Dieu)', usage: 'Réponses standardisées aux 200 demandes hebdomadaires, rédaction de notes d\'expertise, scripts d\'appels sortants pour la prospection.' },
      { profile: 'Direction R&D — équipementier automobile ETI (Bron)', usage: 'Rédaction de cahiers des charges techniques, traduction multilingue (FR / EN / DE), synthèse de brevets concurrents.' },
    ],
    localFacts: [
      'Lyon abrite le pôle de compétitivité Lyonbiopôle, leader européen en santé et bio-industries.',
      'L\'écosystème IA lyonnais s\'appuie sur l\'ENS Lyon, Inria Grenoble Rhône-Alpes et le LabIA, hub de recherche IA appliquée.',
      'OPCO 2i (industrie) et ATLAS (services financiers) couvrent 80 % des financements formation IA Masteria à Lyon.',
      'Masteria a son siège social et sa salle de formation au 17 Rue Richan, dans le 4ème arrondissement de Lyon (Croix-Rousse).',
    ],
    transportAccess: "Notre siège est à la Croix-Rousse (Lyon 4e) et les formations intra se déroulent dans vos locaux, partout dans la métropole : Part-Dieu, Confluence, Gerland, Vaise, Villeurbanne. Depuis la gare TGV Lyon Part-Dieu (métro B, tram T1 / T3 / T4), l'ensemble de l'agglomération est accessible en quelques minutes. En région, nous intervenons à Grenoble (1 h 15 en TER), Saint-Étienne (45 min), Clermont-Ferrand (1 h 30 en TER ou autoroute) et Annecy (1 h 45). Aucun frais de déplacement supplémentaire dans la métropole de Lyon.",
    localExperts: [
      { name: 'Lyonbiopôle', type: 'Pôle de compétitivité santé et bio-industries' },
      { name: 'ENS Lyon — LabIA', type: 'Recherche IA appliquée' },
      { name: 'Inria Grenoble Rhône-Alpes', type: 'Centre de recherche IA' },
    ],
    additionalFAQ: [
      { q: 'Quelle différence entre une session inter et une intra à Lyon ?', a: "L'intra-entreprise se déroule dans vos locaux ou en distanciel : tout le programme est construit sur vos cas d'usage, vos outils, vos documents (anonymisés si besoin), pour un groupe jusqu'à 12 participants. L'accompagnement individuel sur mesure (1-to-1) cible les profils dirigeants, experts métier ou stratégiques avec un programme co-construit et un suivi entre les sessions." },
      { q: 'Couvrez-vous Grenoble, Saint-Étienne et Annecy en intra ?', a: "Oui, sans frais de déplacement supplémentaires. Nous intervenons régulièrement à Grenoble (ETI, recherche, deeptech), à Saint-Étienne (industrie, design), à Annecy (banque privée, sport et outdoor) et à Chambéry / Valence. Les modalités sont identiques à celles de Lyon." },
      { q: 'Où se déroulent les formations IA à Lyon ?', a: "En intra-entreprise : le formateur vient chez vous, partout dans la métropole de Lyon (Part-Dieu, Confluence, Gerland, Vaise, Villeurbanne et l'ensemble des communes de l'agglomération). Le siège de Masteria est à la Croix-Rousse (Lyon 4e). Former l'équipe sur son poste de travail, avec ses vrais outils et ses vrais documents, est le format le plus efficace : c'est celui que nous recommandons. Le distanciel reste disponible pour les équipes dispersées." },
      { q: 'Pourquoi choisir un organisme de formation IA lyonnais ?', a: "La proximité change le déroulé : cadrage en présentiel dans vos locaux, connaissance du tissu économique régional (pharma, industrie, banque, numérique) et des OPCO qui financent en Auvergne-Rhône-Alpes, interventions de suivi faciles à planifier. Masteria est fondé et basé à Lyon depuis 2022 ; une partie de nos références vient de la métropole, ce qui donne des cas d'usage directement comparables aux vôtres." },
    ],
  },
  {
    slug: 'marseille',
    name: 'Marseille',
    nameLoc: 'à Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    country: 'France',
    countryCode: 'FR',
    locale: 'fr-FR',
    coordinates: { latitude: 43.2965, longitude: 5.3698 },
    population: '870 000 habitants intra-muros',
    metroArea: 'Métropole Aix-Marseille-Provence : 1,9 million d\'habitants, plus grande métropole du Sud',
    intraOnly: true,
    sectors: "logistique portuaire, tourisme, services, santé, biotech, défense et industrie maritime",
    desc: "Premier port de France et deuxième ville française par sa population, Marseille est un hub méditerranéen avec un tissu d'ETI et de PME en forte transformation numérique. Le Grand Port Maritime de Marseille (GPMM), Eurocopter, CMA CGM, Onet et l'AP-HM y dessinent une économie tournée vers la mer, la santé et les services. Masteria intervient en intra-entreprise dans vos locaux marseillais pour former vos équipes à l'IA, avec un programme adapté aux réalités du marché provençal.",
    introPitch: "Formation dans vos bureaux marseillais, construite sur vos enjeux métier. Masteria connaît les spécificités du tissu économique provençal — logistique portuaire, tourisme, santé, défense — et adapte le programme en conséquence. Nos formateurs se déplacent depuis Lyon en TGV (3 h 15) sans frais supplémentaires.",
    opco: "OPCO principaux en Provence-Alpes-Côte d'Azur : ATLAS (services financiers, conseil), AKTO (services, hôtellerie, propreté), AFDAS (tourisme, médias, sport, loisirs), OPCO 2i (industrie, défense), OPCO Santé (établissements sanitaires et sociaux). Délai d'instruction OPCO en région PACA : 7 à 12 jours ouvrés.",
    zones: "Marseille (1er au 16e arrondissement), Aix-en-Provence, Aubagne, Vitrolles, Salon-de-Provence, La Ciotat, Cassis, Martigues, Plan-de-Campagne",
    industriesDeep: [
      { sector: 'Logistique & maritime', companies: 'CMA CGM, GPMM, Eurogate, Eurofos, Hapag-Lloyd, Bolloré Logistics', focus: 'Suivi de conteneurs, communication client multilingue, douane et conformité, automatisation des EDI, rédaction de bordereaux.' },
      { sector: 'Tourisme & hôtellerie', companies: 'Pierre & Vacances, Club Med, Accor région Sud, Sofitel Vieux-Port, Mama Shelter, Marseille Tourisme', focus: 'Réponses aux avis clients, contenus éditoriaux multilingues, gestion des réservations, support client 24/7.' },
      { sector: 'Santé & biotech', companies: 'AP-HM (CHU public, 4e plus grand de France), Eurobio, Innate Pharma, Gemini, Inserm Marseille', focus: 'Synthèse de protocoles cliniques, codification ICD-10, communication patient, rédaction de comptes rendus médicaux.' },
      { sector: 'Défense & aérospatial', companies: 'Naval Group, Airbus Helicopters (Eurocopter), Thales Alenia Space, MBDA, Stellantis Vitrolles', focus: 'Documentation technique, veille concurrentielle, rédaction d\'appels d\'offres défense, traitement multilingue de spécifications.' },
    ],
    localCases: [
      { profile: 'Direction commerciale — armateur maritime ETI (Joliette)', usage: 'Réponses aux 150 demandes de cotation hebdomadaires, traduction FR/EN/AR, suivi des emails client par compte stratégique.' },
      { profile: 'Service support — chaîne hôtelière 28 établissements (Vieux-Port)', usage: 'Réponses aux avis Booking et TripAdvisor, scripts d\'accueil multilingues, formation continue du personnel saisonnier.' },
      { profile: 'Direction qualité — laboratoire d\'analyses médicales régional (Aix-en-Provence)', usage: 'Synthèse de protocoles, mise à jour des procédures HAS, rédaction de comptes rendus structurés pour les médecins prescripteurs.' },
    ],
    localFacts: [
      'Marseille est le 1er port maritime de France et 5e d\'Europe en tonnage.',
      'L\'AP-HM (Assistance publique des Hôpitaux de Marseille) est le 4e CHU de France et emploie plus de 15 000 personnes.',
      'CMA CGM, leader mondial du transport maritime, a son siège social à Marseille (La Joliette).',
      'Le pôle Aix-Marseille Université forme 80 000 étudiants, dont la première école d\'ingénieurs de la région (Centrale Marseille).',
    ],
    transportAccess: "Notre formateur arrive depuis Lyon en TGV direct (3 h 15) et se déplace librement dans Marseille intra-muros et la métropole. Aucun frais de déplacement supplémentaire pour Marseille, Aix-en-Provence, Aubagne ou Vitrolles. Pour La Ciotat et Cassis, prévoir 30 min de trajet en plus.",
    localExperts: [
      { name: 'Pôle Mer Méditerranée', type: 'Cluster filière maritime et navale' },
      { name: 'Aix-Marseille Université — Institut Archimède', type: 'Recherche IA et mathématiques appliquées' },
      { name: 'The Camp', type: 'Campus innovation Sud, partenaire formation tech' },
    ],
    additionalFAQ: [
      { q: 'Quels formats proposez-vous à Marseille ?', a: "Nous privilégions l'intra-entreprise à Marseille : programme construit sur vos cas réels, exemples tirés de votre activité, équipe formée ensemble. Pour les profils dirigeants ou experts souhaitant une approche personnalisée, l'accompagnement individuel sur mesure (1-to-1) est disponible en présentiel à Marseille ou en distanciel." },
      { q: 'Vous formez aussi à Aix-en-Provence et sur la côte ?', a: "Oui. Nous intervenons régulièrement à Aix-en-Provence (banque privée, conseil, étudiants des écoles AMU), à Aubagne (industrie, agroalimentaire), à La Ciotat (chantier naval, tech) et à Cassis. Aucun frais de déplacement supplémentaire dans toute la métropole Aix-Marseille-Provence." },
      { q: 'Où se déroulent les formations IA à Marseille ?', a: "En intra-entreprise : le formateur vient chez vous, du Vieux-Port à La Joliette et dans les seize arrondissements, ainsi que dans toute la métropole (Aix-en-Provence, Aubagne, Vitrolles, Martigues). Former l'équipe sur son poste de travail, avec ses vrais outils et ses vrais documents, est le format le plus efficace. Le distanciel reste disponible pour les équipes réparties entre plusieurs sites." },
      { q: 'Pourquoi choisir Masteria pour une formation IA à Marseille ?', a: "Le programme se construit sur vos cas d'usage réels et Masteria connaît les filières qui structurent l'économie provençale : logistique portuaire, tourisme, santé, défense et industrie maritime. La certification Qualiopi ouvre le financement OPCO (ATLAS, AKTO, AFDAS, OPCO 2i et OPCO Santé en PACA), le formateur arrive de Lyon en TGV direct sans frais supplémentaires, et le dossier de prise en charge est géré pour vous." },
    ],
  },
  {
    slug: 'geneve',
    name: 'Genève',
    nameLoc: 'à Genève',
    region: 'Suisse romande',
    country: 'Suisse',
    countryCode: 'CH',
    locale: 'fr-CH',
    coordinates: { latitude: 46.2044, longitude: 6.1432 },
    population: '203 000 habitants en ville',
    metroArea: 'Grand Genève : 1 million d\'habitants (Genève, Vaud, Ain, Haute-Savoie)',
    intraOnly: true,
    sectors: "finance internationale, organisations internationales (ONU, OMS, CICR), pharma, négoce de matières premières, private equity",
    desc: "Capitale mondiale de la finance internationale et siège de plus de 40 organisations internationales (ONU, OMS, OMC, CICR, HCR), Genève concentre un tissu d'entreprises à très haute valeur ajoutée. Avec plus de 1 200 banques privées et trading houses, c'est aussi le premier centre mondial de négoce de matières premières. Masteria intervient en intra-entreprise dans vos locaux genevois pour former vos équipes à l'IA, avec une attention particulière aux exigences de confidentialité du secteur financier suisse et à la conformité FINMA.",
    introPitch: "Formation sur mesure dans vos bureaux genevois. Masteria adapte le programme aux contraintes spécifiques de votre secteur : conformité FINMA, confidentialité bancaire, exigences des organisations internationales, environnement multilingue. Tout le contenu est construit sur vos cas d'usage réels, dans le respect du secret professionnel.",
    opco: "En Suisse, la formation continue est financée via le plan de formation de l'entreprise, les contributions sectorielles cantonales (Fonds genevois pour la formation et le perfectionnement professionnels — FFPP), les conventions collectives de travail (CCT), ou les budgets de développement RH des organisations internationales. Masteria vous accompagne dans l'identification des dispositifs disponibles dans le canton de Genève et propose des factures conformes pour le remboursement.",
    zones: "Canton de Genève intra (Genève, Carouge, Vernier, Lancy, Meyrin, Onex), canton de Vaud frontalier (Nyon, Morges), région du Grand Genève (Annemasse, Saint-Julien, pays de Gex côté français)",
    industriesDeep: [
      { sector: 'Banque privée & wealth management', companies: 'Pictet, Lombard Odier, Mirabaud, UBP, Edmond de Rothschild, Bordier, Banque Heritage, Reyl', focus: 'Reporting client confidentiel, analyse de portefeuille, conformité FINMA et LBA, due diligence M&A, communication multilingue.' },
      { sector: 'Organisations internationales', companies: 'ONU (Palais des Nations), OMS, OMC, CICR, HCR, OIT, CERN (proche), Aga Khan Foundation', focus: 'Rédaction multilingue (FR/EN/ES/AR/RU), synthèse de rapports volumineux, traduction structurée, communication institutionnelle.' },
      { sector: 'Négoce de matières premières', companies: 'Trafigura, Cargill International, Mercuria, Vitol, Glencore, Louis Dreyfus, Gunvor, Kolmar Group', focus: 'Rapports de marché commodities, communication broker / trader, gestion KYC, traduction technique, suivi opérationnel logistique.' },
      { sector: 'Pharma & santé', companies: 'Firmenich (DSM-Firmenich), Givaudan, Merck Serono, Roche Diagnostics Genève, HUG (Hôpitaux universitaires)', focus: 'Veille réglementaire Swissmedic / EMA, recherche clinique, communication scientifique, formation continue technique.' },
    ],
    localCases: [
      { profile: 'Compliance — banque privée 200 collaborateurs (Rue du Rhône)', usage: 'Synthèse de dossiers KYC complexes, rédaction de mémos compliance, veille réglementaire FINMA, traduction structurée FR/EN/DE.' },
      { profile: 'Communications — organisation internationale (Palais des Nations)', usage: 'Rédaction de rapports multilingues, synthèse de réunions, brief presse en 4 langues, mise en forme de documents diplomatiques.' },
      { profile: 'Recherche & développement — pharma (Plan-les-Ouates)', usage: 'Synthèse de littérature scientifique, mise à jour de fiches produit en 8 langues, support documentation réglementaire EMA.' },
    ],
    localFacts: [
      'Genève abrite plus de 40 organisations internationales et 750 ONG, plus grande concentration mondiale.',
      'La place financière genevoise gère plus de 2 000 milliards de CHF d\'actifs sous gestion.',
      'Le canton de Genève emploie 100 000 frontaliers français (Haute-Savoie, Ain), couverts par les CCT suisses.',
      'Masteria facture en CHF ou en EUR selon votre préférence, avec TVA suisse (8,1 %) si applicable.',
    ],
    transportAccess: "Notre formateur arrive depuis Lyon en train direct (1 h 50 via TGV Lyria) ou en avion (50 min jusqu'à l'aéroport de Genève). Aucun frais de déplacement supplémentaire pour Genève canton et le Grand Genève. Pour Lausanne, Nyon ou les régions vaudoises proches, le déplacement est inclus. Devis en CHF ou EUR au choix.",
    localExperts: [
      { name: 'Geneva Finance Research Institute', type: 'Recherche académique finance et IA' },
      { name: 'EPFL Lausanne (campus Innovation Park)', type: 'Recherche IA, à 40 min de Genève' },
      { name: 'Fondation pour Genève', type: 'Acteur du rayonnement international' },
    ],
    additionalFAQ: [
      { q: 'La formation est-elle facturée en EUR ou en CHF ?', a: "Au choix. Masteria propose une facturation en EUR ou en CHF selon votre préférence comptable. Le tarif intra de référence est 1 980 € HT par jour ou environ 1 600 CHF HT (taux indicatif, cours du jour appliqué à la facturation). La TVA suisse (8,1 %) est ajoutée si vous êtes assujetti en Suisse." },
      { q: 'Comment finance-t-on une formation IA en Suisse ?', a: "Plusieurs voies : 1) le plan de formation de votre entreprise (déductible fiscalement), 2) le Fonds genevois pour la formation et le perfectionnement professionnels (FFPP) pour les entreprises soumises à une CCT genevoise, 3) les budgets formation de votre convention collective sectorielle (banque, finance, IT), 4) pour les organisations internationales, les budgets internes RH et développement professionnel. Nous fournissons toutes les factures et certifications nécessaires." },
      { q: 'Comment respectez-vous la confidentialité bancaire suisse ?', a: "Nos formateurs signent un accord de confidentialité avant chaque mission. Les exemples utilisés en formation sont systématiquement anonymisés (vous fournissez les versions caviardées). Pour les sessions sur cas réels en environnement bancaire, nous travaillons à partir de documents fictifs structurellement équivalents aux vôtres. Aucun document n'est conservé après la formation." },
      { q: 'Où se déroulent les formations IA à Genève ?', a: "En intra-entreprise : le formateur vient dans vos bureaux, dans tout le canton (Genève, Carouge, Vernier, Lancy, Meyrin, Onex) et le Grand Genève, Nyon et Morges comprises. Former l'équipe sur son poste de travail, avec ses vrais outils et ses documents anonymisés, est le format le plus efficace, en particulier dans les environnements soumis au secret professionnel. Le distanciel reste disponible pour les équipes réparties entre plusieurs sites." },
    ],
  },
  {
    slug: 'bruxelles',
    name: 'Bruxelles',
    nameLoc: 'à Bruxelles',
    region: 'Belgique francophone',
    country: 'Belgique',
    countryCode: 'BE',
    locale: 'fr-BE',
    coordinates: { latitude: 50.8503, longitude: 4.3517 },
    population: '185 000 habitants en ville',
    metroArea: 'Région de Bruxelles-Capitale : 1,2 million d\'habitants, plus zone d\'attraction de 5 millions',
    intraOnly: true,
    sectors: "institutions européennes, services financiers, conseil et lobbying, pharmaceutique, tech et startups",
    desc: "Capitale de l'Union européenne et hub économique de la Belgique, Bruxelles accueille les principales institutions européennes (Commission, Parlement, Conseil, Service Européen pour l'Action Extérieure), des multinationales, un tissu dense de cabinets de conseil et de lobbying, ainsi que les sièges belges de la pharma et des services financiers. La transformation IA y est tirée par les exigences de l'AI Act et la modernisation des administrations européennes. Masteria intervient en intra-entreprise dans vos locaux bruxellois, entièrement en français.",
    introPitch: "Formation dans vos bureaux bruxellois, entièrement en français. Masteria adapte le programme aux spécificités du marché belge : réglementations européennes, AI Act, secteur financier, environnement multilingue. Nos formateurs se déplacent chez vous (depuis Lyon en TGV via Paris, 4 h 30), sans contrainte logistique pour vos équipes.",
    opco: "En Belgique francophone, la formation professionnelle est cofinancée par les fonds sectoriels paritaires : CEFORA (commission paritaire 200 — secteur tertiaire), FOPAS (services financiers), Constructiv (BTP), IFAPME pour les indépendants, et le Forem (service public de l'emploi et de la formation wallonne) pour la Wallonie. Masteria vous accompagne dans l'identification du fonds applicable et fournit les justificatifs au format belge (TVA BE, attestations).",
    zones: "Bruxelles-Capitale (19 communes), Brabant wallon (Louvain-la-Neuve, Wavre, Nivelles), Brabant flamand francophone (Vilvorde, Halle), région de Mons-Charleroi, Namur",
    industriesDeep: [
      { sector: 'Institutions européennes', companies: 'Commission européenne (DG CONNECT, DG TAXUD, DG SANTE), Parlement européen, SEAE, Banque centrale européenne (BCE Bruxelles), AESA, EuroParl', focus: 'Rédaction multilingue (24 langues UE), synthèse de directives et règlements, AI Act et conformité, traduction structurée, communication institutionnelle.' },
      { sector: 'Conseil & lobbying', companies: 'McKinsey EU, BCG Brussels, FleishmanHillard, Edelman, Hill+Knowlton Strategies, Burson Cohn & Wolfe, Brunswick', focus: 'Notes de position, communication publique, analyse politique européenne, briefings clients, surveillance réglementaire.' },
      { sector: 'Services financiers', companies: 'BNP Paribas Fortis, KBC, ING Belgium, Belfius, Euroclear, Bourse de Bruxelles, Mastercard Brussels HQ', focus: 'Conformité MiFID II et AML, reporting trimestriel, communication client multilingue, gestion KYC, automatisation back-office.' },
      { sector: 'Pharma & tech', companies: 'UCB, GSK Belgium, Pfizer Belgium, Janssen Belgium, Materialise, Showpad, Odoo, Collibra', focus: 'Documentation produit, communication scientifique, support client SaaS, rédaction technique, marketing produit.' },
    ],
    localCases: [
      { profile: 'Affaires européennes — cabinet de lobbying 50 collaborateurs (Schuman)', usage: 'Notes de position sur les directives en discussion, suivi des amendements PE/Conseil, briefings clients hebdomadaires, traduction multilingue.' },
      { profile: 'Service compliance — banque belge (Marolles)', usage: 'Veille réglementaire BCE / FSMA, rédaction de procédures internes, traitement des cas KYC complexes, communication interne sur l\'AI Act.' },
      { profile: 'Communications — institution européenne (Berlaymont)', usage: 'Rédaction de communiqués en 4 langues, synthèse de réunions multilingues, mise en forme de documents officiels en cohérence avec le manuel d\'identité visuelle européen.' },
    ],
    localFacts: [
      'Bruxelles abrite 32 000 lobbyistes accrédités, plus grande concentration mondiale après Washington.',
      'L\'AI Act européen, adopté en 2024, impose une obligation de littératie IA à toute organisation utilisant un système d\'IA depuis février 2025.',
      'Les 24 langues officielles de l\'UE rendent les outils IA multilingues particulièrement stratégiques pour les institutions européennes.',
      'Le canton de Bruxelles-Capitale rassemble 19 communes, soit la plus grande densité urbaine francophone d\'Europe occidentale.',
    ],
    transportAccess: "Notre formateur arrive depuis Lyon en TGV via Paris (4 h 30 porte-à-porte) ou en avion (1 h 30). Sur place, nous nous déplaçons librement dans Bruxelles-Capitale et le Brabant wallon. Aucun frais de déplacement supplémentaire pour Bruxelles, Louvain-la-Neuve, Namur ou Wavre. Devis en EUR avec TVA belge (21 %) si applicable.",
    localExperts: [
      { name: 'Cluster.brussels — Hub.brussels', type: 'Agence régionale de promotion économique' },
      { name: 'KU Leuven — KIRO (AI for media)', type: 'Recherche IA appliquée' },
      { name: 'Université libre de Bruxelles (ULB) — Machine Learning Group', type: 'Laboratoire de recherche IA' },
    ],
    additionalFAQ: [
      { q: 'Comment fonctionne le financement par CEFORA pour une formation IA ?', a: "CEFORA finance les formations professionnelles des employés de la commission paritaire 200 (secteur tertiaire belge), soit la plus grande commission paritaire du pays. Les formations doivent être suivies par un employé en CDI déclaré sur la commission paritaire 200, et le dossier est instruit en 2 à 4 semaines. Masteria fournit les attestations au format CEFORA (devis, programme, convention, présence) sous 24 h ouvrées. Le remboursement peut atteindre 100 % selon le profil de l'employé et le budget annuel restant." },
      { q: 'Vous formez aussi à Anvers, Gand ou Liège ?', a: "Pour les sessions en français, nous couvrons toute la Belgique francophone (Bruxelles, Wallonie). Pour les missions à Anvers ou Gand, nous pouvons intervenir en français si vos équipes sont francophones, mais la majorité des entreprises flamandes préfèrent le néerlandais ou l'anglais — que nous ne dispensons pas en formation. Pour Liège, oui : nous nous déplaçons sans frais supplémentaires." },
      { q: 'Quelles sont les obligations de l\'AI Act pour mon entreprise belge ?', a: "L'AI Act s'applique uniformément dans toute l'UE depuis 2025. Les obligations principales : 1) inventorier vos systèmes d'IA et leur niveau de risque, 2) garantir la littératie IA des collaborateurs (article 4, en vigueur depuis février 2025), 3) tenir un registre interne pour les systèmes à haut risque, 4) anticiper les obligations de transparence (chatbots, contenus générés). Notre Sprint IA AI Act (3 h, finançable CEFORA) couvre cette mise en conformité." },
      { q: 'Où se déroulent les formations IA à Bruxelles ?', a: "En intra-entreprise : le formateur vient dans vos bureaux, dans les dix-neuf communes de Bruxelles-Capitale (du quartier européen de Schuman au centre) et dans le Brabant wallon (Louvain-la-Neuve, Wavre, Nivelles). Former l'équipe sur son poste de travail, avec ses vrais outils et ses vrais documents, est le format le plus efficace. Le distanciel reste disponible pour les équipes réparties entre plusieurs implantations." },
    ],
  },
]

export const GEO_TOOLS = [
  {
    slug: 'chatgpt',
    hubSlug: 'formation-chatgpt',
    name: 'ChatGPT',
    shortName: 'ChatGPT',
    color: '#10a37f',
    colorLight: '#d1fae5',
    pitch: "outil IA le plus utilisé en entreprise, polyvalent, intégrations nombreuses, CPF éligible",
    differentiator: "ChatGPT est l'outil IA le plus adopté en entreprise. Avec plus de 200 millions d'utilisateurs actifs hebdomadaires en 2025 et une intégration native avec les principaux outils de productivité (Slack, Notion, Office, Google Workspace), c'est le point d'entrée naturel pour la transformation IA de vos équipes. La formation ChatGPT de Masteria est 100 % pratique : vos équipes repartent avec des prompts, des automatisations et un plan d'action applicables dès le lendemain.",
    useCases: [
      "Rédaction professionnelle accélérée (emails, rapports, contenus, fiches de poste)",
      "Analyse et synthèse de documents (contrats, études, rapports trimestriels)",
      "Automatisation des tâches répétitives par métier (devis, comptes-rendus, FAQ)",
      "Génération de scripts, présentations, slides de CODIR et supports de formation",
      "Intégration dans les workflows existants (Microsoft 365, Google Workspace, Notion, Zapier)",
      "Prompt engineering avancé : méthode CRTF, system prompts, GPTs personnalisés",
    ],
    deepValue: "ChatGPT s'impose comme la lingua franca de l'IA en entreprise : un collaborateur formé peut transférer 80 % de ses compétences à n'importe quel autre LLM. Pour la majorité des cas d'usage transverses (rédaction, synthèse, brainstorming, analyse de tableaux), c'est l'outil au meilleur rapport puissance / facilité d'adoption.",
    faqLocal: (city) => [
      {
        q: `Combien de participants peut accueillir une formation ChatGPT en intra ${city.nameLoc} ?`,
        a: `Nos formations intra-entreprise accueillent jusqu'à 12 participants par session, ce qui permet de garder une vraie interaction et de la pratique guidée pour chacun. Au-delà, nous organisons des sessions successives ou un format Sprint IA (3 h, jusqu'à 100 participants) plus adapté à la sensibilisation à grande échelle. Le tarif intra est consultable sur la page financement.`,
      },
      {
        q: city.intraOnly
          ? `Pourquoi une formation intra plutôt qu'un accompagnement individuel pour mes équipes ${city.nameLoc} ?`
          : `Quels formats sont disponibles ${city.nameLoc} ?`,
        a: city.intraOnly
          ? `La formation intra est plus efficace quand vos équipes partagent les mêmes outils et les mêmes défis. Le formateur construit le programme à partir de vos vrais cas d'usage, utilise vos documents réels (anonymisés si nécessaire) et adapte le rythme à votre niveau. À partir de 3 participants, le format intra est très avantageux (1 980 €/jour pour le groupe). Pour 1 personne ou 2 personnes en profil dirigeant/expert, nous proposons l'accompagnement individuel sur mesure (1 980 €/jour) en présentiel ou en distanciel.`
          : `À Lyon : formation intra-entreprise dans vos locaux (jusqu'à 12 participants) ou accompagnement individuel sur mesure (1-to-1) en présentiel ou en distanciel. Les deux formats incluent les supports, la bibliothèque de prompts et le suivi post-formation pendant 1 mois.`,
      },
      {
        q: `Quels métiers bénéficient le plus d'une formation ChatGPT ${city.nameLoc} ?`,
        a: `Tous les métiers à forte intensité documentaire et rédactionnelle. Dans notre expérience ${city.nameLoc}, les gains les plus rapides apparaissent en : marketing (production de contenus ×3), RH (tri de candidatures, fiches de poste), service client (réponses standardisées), commercial (rédaction de propositions), management (synthèses, comptes-rendus). Pour le juridique et la santé, nous recommandons plutôt Claude (analyse documentaire longue) ou Mistral (souveraineté).`,
      },
    ],
  },
  {
    slug: 'claude-ia',
    hubSlug: 'formation-claude-ia',
    name: 'Claude (Anthropic)',
    shortName: 'Claude IA',
    color: '#d97706',
    colorLight: '#fef3c7',
    pitch: "fenêtre de contexte 200 000 tokens, raisonnement structuré, rédaction longue de qualité professionnelle",
    differentiator: "Claude excelle dans les tâches complexes : analyse de longs documents, rédaction rigoureuse, raisonnement juridique ou financier, traitement structuré de données. Sa fenêtre de contexte étendue (200 000 tokens, soit environ 500 pages) en fait l'outil de référence pour les équipes qui manipulent de la documentation volumineuse. Son avantage face à ChatGPT est particulièrement visible sur les cas d'usage à fort volume de texte ou nécessitant un raisonnement étape par étape.",
    useCases: [
      "Analyse et synthèse de contrats longs (200 à 500 pages en une session)",
      "Rédaction de rapports structurés et mémos exécutifs (10-30 pages)",
      "Revue comparative de documents (v1 vs v2, audit de conformité)",
      "Veille réglementaire et résumés de jurisprudence",
      "Support de recherche et documentation interne (knowledge base, RAG)",
      "Rédaction de réponses à appels d'offres complexes (RFP) et mémoires techniques",
    ],
    deepValue: "Claude est l'outil de référence pour les métiers à forte exigence rédactionnelle : juridique, finance d'entreprise, conseil, recherche, communication institutionnelle. Là où ChatGPT optimise pour la vitesse, Claude optimise pour la rigueur, la traçabilité et la fidélité au document source.",
    faqLocal: (city) => [
      {
        q: `La formation Claude IA ${city.nameLoc} est-elle finançable OPCO ?`,
        a: `Oui. Masteria est certifié Qualiopi, condition indispensable pour le financement par votre OPCO en ${city.region}. Nous vous accompagnons dans la constitution complète du dossier de prise en charge : devis, programme, convention de formation, attestation Qualiopi, fiches émargements, attestation de présence finale. Le délai de mise en formation après acceptation OPCO est généralement de 3 à 4 semaines.`,
      },
      {
        q: city.intraOnly
          ? `Pourquoi proposez-vous uniquement des formations intra ${city.nameLoc} ?`
          : `Quels formats sont disponibles ${city.nameLoc} ?`,
        a: city.intraOnly
          ? `Nous privilégions l'intra-entreprise à ${city.name} : programme construit sur vos cas réels, exemples tirés de vos vrais documents (anonymisés), équipe formée ensemble pour aligner les pratiques. Pour les profils dirigeants ou experts métier, l'accompagnement individuel sur mesure (1-to-1) est disponible en présentiel à ${city.name} ou en distanciel.`
          : `À Lyon, nous proposons des formations intra-entreprise dans vos locaux (jusqu'à 12 participants) et de l'accompagnement individuel sur mesure (1-to-1) en présentiel ou en distanciel. Les deux formats sont éligibles au financement OPCO et incluent un suivi post-formation pendant 1 mois.`,
      },
      {
        q: `Pourquoi choisir Claude plutôt que ChatGPT ${city.nameLoc} ?`,
        a: `Claude est préféré pour les cas d'usage à forte intensité documentaire : analyse de contrats, due diligence, rapports d'audit, mémoires techniques, recherche jurisprudentielle. Sa fenêtre de contexte de 200 000 tokens permet de traiter en une fois ce qui demanderait 5 à 10 sessions ChatGPT. Pour les usages courants (emails, brainstorming, productivité quotidienne), ChatGPT reste plus polyvalent. Une formation multi-outils ${city.nameLoc} permet de comparer concrètement les deux sur vos vrais cas.`,
      },
    ],
  },
]

// GEO_REGIONS supprimé : /formation-ia-belgique → /formation-ia-bruxelles, /formation-ia-suisse → /formation-ia-geneve (redirects 308)
export const GEO_REGIONS = []

// Toutes les "destinations" pour les pages IA génériques : 5 villes prioritaires
export const GEO_DESTINATIONS = [...GEO_CITIES, ...GEO_REGIONS]

// Génère le slug complet d'une page géo
export function geoSlug(toolSlug, citySlug) {
  return `formation-${toolSlug}-${citySlug}`
}

// Slug pour une page IA générique (multi-outils par ville)
export function geoIaSlug(citySlug) {
  return `formation-ia-${citySlug}`
}

// Retourne toutes les combinaisons outil × ville
export function getAllGeoCombinations() {
  const combos = []
  for (const tool of GEO_TOOLS) {
    for (const city of GEO_CITIES) {
      combos.push({ tool, city, slug: geoSlug(tool.slug, city.slug) })
    }
  }
  return combos
}
