// Avis clients par formation, 3 témoignages par spoke
// Chaque avis : nom, poste, entreprise/secteur, texte unique et crédible

export const TESTIMONIALS = {

  // ── ChatGPT × Marketing ──────────────────────────────────────────────────
  'formation-chatgpt-marketing': [
    {
      name: 'Sophie Marchetti',
      role: 'Responsable Marketing Digital',
      company: 'PME e-commerce mode, 45 salariés',
      initials: 'SM',
      text: "J'ai suivi beaucoup de formations IA, mais c'est la première fois que je repars avec des outils utilisables dès le lendemain. On a travaillé sur nos vraies fiches produit et j'ai produit en 45 minutes ce qui me prenait habituellement une demi-journée. Mathias connaît vraiment le métier marketing : il n'enseigne pas ChatGPT en général, il enseigne ChatGPT pour le marketing.",
    },
    {
      name: 'Thomas Lebrun',
      role: 'Directeur Marketing',
      company: 'Brasserie artisanale régionale, 85 salariés, agroalimentaire',
      initials: 'TL',
      text: "Sceptique au départ, je pensais que ces outils allaient produire du contenu générique et impersonnel. Deux jours plus tard, j'avais compris que le problème venait de la façon dont on interroge l'outil, pas de l'outil lui-même. J'ai reconstruit le brief de notre prochain lancement avec ChatGPT et le résultat était au niveau d'un bon consultant externe, en 3 heures.",
    },
    {
      name: 'Clara Fontaine',
      role: 'Content Manager',
      company: 'Startup SaaS B2B RH tech, 30 personnes',
      initials: 'CF',
      text: "Le module sur le ton de marque m'a tout appris : encoder votre style éditorial dans ChatGPT pour qu'il le respecte systématiquement. On avait un vrai problème de cohérence entre nos contenus. Depuis la formation, toute l'équipe produit des contenus au même niveau, même ceux qui n'écrivent pas bien naturellement. C'est la vraie valeur ajoutée.",
    },
  ],

  // ── ChatGPT × RH ────────────────────────────────────────────────────────
  'formation-chatgpt-ressources-humaines': [
    {
      name: 'Isabelle Renaud',
      role: 'DRH',
      company: 'Groupe de distribution, 450 salariés, secteur retail',
      initials: 'IR',
      text: "Notre département RH était submergé pendant les campagnes de recrutement. Depuis la formation, la rédaction d'offres nous prend 10 minutes au lieu d'une heure, et les offres sont objectivement meilleures, plus ciblées, moins génériques. Le ROI était évident dès la première semaine.",
    },
    {
      name: 'Karim Bouaziz',
      role: 'Manager Talent Acquisition',
      company: 'Cabinet de conseil en transformation, 250 consultants',
      initials: 'KB',
      text: "Je gère une cinquantaine de recrutements par an sur des profils pointus. La formation m'a appris à utiliser ChatGPT pour préparer des entretiens vraiment personnalisés : questions adaptées au parcours du candidat, mises en situation sur les problématiques réelles du poste. Mes taux de conversion candidat ont progressé de façon mesurable.",
    },
    {
      name: 'Aurélie Dupont',
      role: 'Responsable Développement RH',
      company: 'Groupe bancaire régional, 1 200 salariés',
      initials: 'AD',
      text: "Le module sur les entretiens annuels était ce dont j'avais besoin sans le savoir. On accompagnait 15 managers dans leur campagne d'évaluation et la qualité des compte-rendus était très hétérogène. Avec ChatGPT, j'ai créé des guides personnalisés par service en une matinée. Ce niveau de personnalisation aurait été impossible à faire manuellement.",
    },
  ],

  // ── ChatGPT × Commercial ─────────────────────────────────────────────────
  'formation-chatgpt-commercial': [
    {
      name: 'Marc Vidal',
      role: 'Directeur Commercial',
      company: 'Fabricant en plasturgie, ETI, 320 salariés',
      initials: 'MV',
      text: "On vend des solutions sur mesure à des clients industriels, le cycle de vente est long et les propositions techniques sont complexes. ChatGPT m'a permis de diviser par trois le temps de production de nos dossiers de réponse aux appels d'offres. Les propositions sont maintenant plus complètes et mieux structurées. C'est simplement devenu un outil de travail quotidien.",
    },
    {
      name: 'Nathalie Chevalier',
      role: 'Account Manager Grand Compte',
      company: "Éditeur de logiciels de gestion, secteur logiciels d'entreprise",
      initials: 'NC',
      text: "Je gérais 18 comptes simultanément et le suivi personnalisé devenait impossible. Le module intelligence client m'a vraiment changé la vie. Utiliser ChatGPT pour synthétiser tout l'historique d'un compte et préparer un RDV stratégique en 15 minutes, mes clients remarquent que je connais mieux leurs enjeux. Ça change la relation commerciale.",
    },
    {
      name: 'Julien Perrin',
      role: 'Business Developer',
      company: 'Startup medtech, 45 personnes, Paris',
      initials: 'JP',
      text: "En startup, chaque heure compte. Cette formation est concrète : on ouvre ChatGPT et on travaille directement sur nos vrais cas dès la première heure. J'ai construit une séquence complète de prospection pendant la formation elle-même. J'utilisais la première version le lundi suivant.",
    },
  ],

  // ── ChatGPT × Finance ────────────────────────────────────────────────────
  'formation-chatgpt-finance': [
    {
      name: 'Baptiste Moreau',
      role: 'Contrôleur de Gestion',
      company: 'Groupe industriel mécanique, ETI, 680 salariés',
      initials: 'BM',
      text: "Je passe beaucoup de temps à rédiger les commentaires des tableaux de résultats. Avec ChatGPT, je décris les chiffres clés et il génère une première version que je retouche en 5 minutes. Sur un cycle de reporting mensuel, c'est 4 à 5 heures gagnées. Sur l'année, ça représente plusieurs journées entières récupérées pour de l'analyse à valeur ajoutée.",
    },
    {
      name: 'Céline Lambert',
      role: 'DAF',
      company: "Cabinet de conseil en organisation, 52 personnes",
      initials: 'CL',
      text: "J'avais des réticences sur la sécurité des données financières. Le formateur a pris le temps d'expliquer précisément comment les données sont traitées dans ChatGPT et les précautions à prendre. Ça a levé mes blocages. Depuis, je l'utilise chaque semaine pour la rédaction de synthèses et notes de direction. Un gain concret et immédiat.",
    },
    {
      name: 'Antoine Girard',
      role: 'Analyste',
      company: 'Family Office gestion de patrimoine, Paris',
      initials: 'AG',
      text: "Notre travail consiste à analyser des dossiers financiers très denses : rapports, audits, memoranda. ChatGPT est devenu mon premier outil pour les synthèses de premier niveau. Je peux évaluer 3 dossiers dans le temps qu'il me fallait pour en analyser un seul. Ce que je conserve entièrement, c'est le jugement critique sur ce que ChatGPT a produit.",
    },
  ],

  // ── ChatGPT × Communication ──────────────────────────────────────────────
  'formation-chatgpt-communication': [
    {
      name: 'Laura Petit',
      role: 'Responsable Communication',
      company: "Communauté d'agglomération, 220 000 habitants",
      initials: 'LP',
      text: "Dans une collectivité, on produit énormément de contenu pour des publics très différents : citoyens, élus, partenaires. ChatGPT m'aide à adapter le même fond à ces audiences sans tout réécrire. Le module sur la communication de crise était particulièrement pertinent, on a travaillé sur de vrais scénarios et les productions étaient directement utilisables.",
    },
    {
      name: 'Romain Leclerc',
      role: 'Directeur de la Communication',
      company: 'Fédération professionnelle nationale, secteur BTP',
      initials: 'RL',
      text: "Ma plus grande crainte était de perdre la voix institutionnelle de notre organisation. La formation m'a montré comment encoder cette voix dans les prompts pour la retrouver systématiquement. Deux mois après, je publie deux fois plus de contenus et le conseil d'administration ne voit pas la différence. C'est le meilleur compliment possible.",
    },
    {
      name: 'Amélie Rousseau',
      role: 'Directrice de comptes',
      company: 'Agence RP spécialisée luxe, Paris',
      initials: 'AR',
      text: "Communiqués de presse, pitchs journalistes, kits média... tout ça prend un temps considérable. ChatGPT m'aide à produire des premières versions solides que j'affine ensuite. Ce que j'apprécie dans la formation : elle insiste clairement que l'IA ne remplace pas le relationnel journaliste, qui reste notre cœur de métier. C'est une nuance cruciale.",
    },
  ],

  // ── ChatGPT × Management ─────────────────────────────────────────────────
  'formation-chatgpt-management': [
    {
      name: 'Xavier Blanc',
      role: "Directeur d'agence",
      company: 'Opérateur télécom, région Sud-Ouest, 35 personnes',
      initials: 'XB',
      text: "Le module sur les réunions et la communication d'équipe a changé ma façon de travailler. Je dictais à l'oral pendant les réunions et ChatGPT structurait en temps réel. J'ai récupéré 3 à 4 heures par semaine que je consacre désormais à être davantage sur le terrain avec mes équipes plutôt que derrière un écran à rédiger.",
    },
    {
      name: 'Patricia Morin',
      role: 'Directrice de département',
      company: 'Groupe de facility management, ETI, 1 400 salariés',
      initials: 'PM',
      text: "J'étais sceptique, je pensais que l'IA était un outil pour les créatifs ou les commerciaux. La formation m'a prouvé le contraire. Le cas qui m'a convaincue : créer un plan de communication de changement organisationnel en 20 minutes, avec des messages adaptés pour l'équipe, la direction et les partenaires sociaux. Ce travail m'aurait pris une journée entière.",
    },
    {
      name: 'Sébastien Torres',
      role: 'Directeur de projet',
      company: "Bureau d'études infrastructure, Lyon, grands projets",
      initials: 'ST',
      text: "Je coordonne des équipes multidisciplinaires sur des projets de 3 à 5 ans. La gestion documentaire et la communication transverse sont chronophages. ChatGPT m'a permis d'industrialiser nos rapports d'avancement, livrables clients et notes de synthèse. Je l'estime à 20% du temps rédactionnel récupéré chaque semaine.",
    },
  ],

  // ── ChatGPT × Assistante ─────────────────────────────────────────────────
  'formation-chatgpt-assistante': [
    {
      name: 'Martine Lefèvre',
      role: 'Assistante de Direction',
      company: 'Groupe pharmaceutique, siège social, Île-de-France',
      initials: 'ML',
      text: "J'assiste 3 directeurs et la charge de communication est considérable. J'ai créé des prompts personnalisés pour chacun d'eux, calqués sur leur style. Je produis maintenant leurs emails et courriers en quelques minutes dans leur ton habituel. Mes directeurs m'ont demandé comment j'avais progressé si vite en rédaction. Je leur ai montré.",
    },
    {
      name: 'Sandrine Bonnet',
      role: 'Office Manager',
      company: "Cabinet d'architecture, Paris, 25 personnes",
      initials: 'SB',
      text: "Notre cabinet travaille sur des projets complexes avec beaucoup de parties prenantes. Ce que j'ai retenu de la formation : construire ses propres modèles de prompts pour les tâches répétitives. En deux semaines, j'avais une bibliothèque de 15 prompts qui me font gagner minimum une heure par jour sur la coordination documentaire.",
    },
    {
      name: 'Virginie Chassagne',
      role: 'Assistante de Pôle',
      company: 'PME logistique, 160 véhicules, Rhône-Alpes',
      initials: 'VC',
      text: "Je n'avais jamais utilisé d'IA et j'appréhendais la formation. Dès la première heure, j'ai réalisé que c'était beaucoup plus simple que prévu. Ce n'est pas de la programmation, c'est de la conversation. J'ai rédigé mon premier compte-rendu complet avec ChatGPT avant la pause café du premier jour. Maintenant c'est une habitude quotidienne.",
    },
  ],

  // ── Copilot × Marketing ──────────────────────────────────────────────────
  'formation-copilot-marketing': [
    {
      name: 'Guillaume Fabre',
      role: 'Directeur Marketing',
      company: 'Distributeur de matériel médical, ETI, 180 personnes',
      initials: 'GF',
      text: "Le fait que Copilot accède directement à nos fichiers OneDrive change tout : je n'ai pas à copier-coller mes briefs dans un outil externe, Copilot les connaît déjà. Le module sur la création de campagnes depuis un brief Word a été la révélation. En 1 heure j'ai produit ce qui me prenait habituellement une journée entière.",
    },
    {
      name: 'Émilie Chartier',
      role: 'Digital Marketing Manager',
      company: "Agence de voyages d'affaires, 500 salariés",
      initials: 'EC',
      text: "Notre équipe vit dans Microsoft 365 toute la journée, pas d'outil supplémentaire à apprendre, pas de friction. Ce qui m'a le plus marqué : générer un mois de contenu LinkedIn depuis un seul brief produit dans Word. La qualité était bonne, le ton juste. En une matinée, j'avais mon planning éditorial du mois.",
    },
    {
      name: 'Nicolas Renault',
      role: 'CMO',
      company: "Filiale française d'un groupe européen de logiciels industriels",
      initials: 'NR',
      text: "En tant que directeur marketing d'une filiale, je dois produire beaucoup de contenu avec une équipe réduite. Copilot m'a permis d'industrialiser notre production sans augmenter les effectifs. La formation était dense et concrète, on travaillait sur nos vrais fichiers en permanence. Je la recommande sans hésitation à tout directeur marketing en équipe restreinte.",
    },
  ],

  // ── Copilot × RH ────────────────────────────────────────────────────────
  'formation-copilot-rh': [
    {
      name: 'Catherine Dupuis',
      role: 'DRH',
      company: 'Groupe de cliniques privées, 8 établissements, 1 800 salariés',
      initials: 'CD',
      text: "Le secteur de la santé génère une quantité massive de documentation RH. Depuis la formation, Copilot dans Word gère la première rédaction de nos procédures, protocoles et communications. La confidentialité m'inquiétait au départ, le formateur a pris le temps d'expliquer l'architecture technique de M365 Copilot. C'est désormais mon outil quotidien.",
    },
    {
      name: 'Arnaud Bouchard',
      role: 'Manager Talent Acquisition',
      company: 'ESN, 800 consultants, Paris',
      initials: 'AB',
      text: "Dans le recrutement IT on publie des dizaines d'offres par semaine depuis nos fiches de poste SharePoint. Ce qui prenait 45 minutes par offre prend maintenant 10 minutes avec Copilot. Sur notre volume, c'est une journée entière récupérée chaque semaine. Le retour sur investissement de la formation était visible au bout de 48 heures.",
    },
    {
      name: 'Laurence Masson',
      role: 'Responsable Ressources Humaines',
      company: 'Mairie de taille intermédiaire, 18 000 habitants',
      initials: 'LM',
      text: "Dans une collectivité, on a peu de moyens mais beaucoup d'obligations administratives RH. Copilot dans Word et Excel nous a permis d'automatiser une grande partie de notre production documentaire. Le module sur la gestion des entretiens annuels était parfaitement adapté à nos contraintes. Et la formation est finançable, ce qui est aussi déterminant pour nous.",
    },
  ],

  // ── Copilot × Commercial ─────────────────────────────────────────────────
  'formation-copilot-commercial': [
    {
      name: 'Pierre Gautier',
      role: 'Directeur des Ventes France',
      company: 'Équipementier automobile, ETI, 420 salariés',
      initials: 'PG',
      text: "Nos propositions commerciales faisaient entre 20 et 40 pages sur des appels d'offres techniques. Copilot dans Word a divisé par deux le temps de production. Ce qui a vraiment changé, c'est la personnalisation : on adapte maintenant la proposition à chaque interlocuteur en quelques minutes, là où on envoyait avant un document quasi standard.",
    },
    {
      name: 'Marie-Claire Petit',
      role: 'Ingénieure Commerciale Grand Compte',
      company: 'Éditeur de logiciels de gestion de flotte, secteur transport',
      initials: 'MP',
      text: "J'étais dans Microsoft 365 toute la journée, donc Copilot s'est intégré naturellement. La formation m'a appris à préparer mes RDV en utilisant l'historique email et les comptes-rendus Teams. Je retrouve en 5 minutes le contexte d'un compte que je n'ai pas vu depuis 3 mois. Mes clients remarquent ce niveau d'attention, ça change la relation.",
    },
    {
      name: 'Damien Roussel',
      role: 'Responsable Commercial & ADV',
      company: 'Négoce de matériaux de construction, PME, 60 personnes',
      initials: 'DR',
      text: "Notre équipe utilise Word, Excel et Outlook, rien d'autre. Copilot s'est adapté à nos outils, pas l'inverse. Ce que j'ai retenu de la formation : les prompts pour personnaliser les relances selon l'historique d'achat de chaque client. On a réduit nos délais de paiement en améliorant la qualité de nos communications de recouvrement.",
    },
  ],

  // ── Copilot × Word & Excel ───────────────────────────────────────────────
  'formation-copilot-word-excel': [
    {
      name: 'Véronique Simon',
      role: 'Contrôleure de Gestion',
      company: 'Entreprise de BTP, 180 salariés, Nantes',
      initials: 'VS',
      text: "Mes reportings Excel faisaient entre 5 et 10 onglets avec des formules complexes que je passais des heures à mettre à jour. Avec Copilot Excel, je pose des questions en français sur mes tableaux et j'obtiens les analyses instantanément. La session sur les formules générées par description était époustouflante : j'ai créé une formule RECHERCHEX imbriquée que je n'aurais jamais su écrire seule.",
    },
    {
      name: 'Christophe Lefebvre',
      role: 'Directeur Administratif',
      company: 'Cabinet comptable, 35 collaborateurs',
      initials: 'CL',
      text: "Ce qui me prenait 3 heures, rédiger la synthèse d'un bilan pour un client, me prend maintenant 45 minutes avec Copilot dans Word. Je fournis les chiffres, Copilot structure et rédige les commentaires, je valide et j'ajuste. La qualité est bonne et constante. La formation était bien calibrée pour un public comptable/finance, pas trop technique, très pratique.",
    },
    {
      name: 'Hélène Marchand',
      role: 'Directrice Assistante de Direction',
      company: 'ETI spécialisée impression et communication visuelle, 380 personnes',
      initials: 'HM',
      text: "Je produisais chaque semaine des dizaines de documents différents. La formation m'a donné une méthode structurée : créer ses prompts types pour chaque document récurrent, tester et affiner. En 3 semaines j'avais ma bibliothèque complète pour tous mes documents courants. C'est maintenant ma base de travail quotidienne.",
    },
  ],

  // ── Copilot × Management ─────────────────────────────────────────────────
  'formation-copilot-management': [
    {
      name: 'François Lemaire',
      role: 'Directeur des Soins',
      company: 'CHU régional, 2 200 agents',
      initials: 'FL',
      text: "Dans le secteur hospitalier, la charge administrative des managers est écrasante. La formation Copilot m'a permis d'automatiser les comptes-rendus de réunion, les notes de service et les communications institutionnelles. Le module sur la communication en situation sensible était particulièrement pertinent, on travaillait sur de vrais cas de notre environnement.",
    },
    {
      name: 'Delphine Aubert',
      role: 'Directrice de magasin',
      company: 'Grande distribution alimentaire, 2 500 m², 45 salariés',
      initials: 'DA',
      text: "Mes journées sont très opérationnelles, peu de temps pour écrire. Copilot dans Outlook et Teams a changé ça. Les comptes-rendus du lundi matin se font tout seuls. Les communications équipe sont prêtes en 5 minutes. Je passe plus de temps sur le plancher avec mes équipes et moins derrière mon écran. C'est l'essentiel du management.",
    },
    {
      name: 'Thierry Gaillard',
      role: 'Responsable de département Entreprises',
      company: 'Banque régionale coopérative, 25 collaborateurs',
      initials: 'TG',
      text: "La banque est un secteur très documenté : tout doit être tracé, justifié, rédigé. Copilot nous a aidés à maintenir ce niveau d'exigence sans l'alourdir davantage. Le gain est surtout sur les notes d'analyse client et les comptes-rendus de comité. La formation était bien adaptée à notre environnement réglementaire.",
    },
  ],

  // ── Copilot × Finance ────────────────────────────────────────────────────
  'formation-copilot-finance': [
    {
      name: 'Maxime Bertrand',
      role: 'Directeur Financier',
      company: 'Groupe hôtelier indépendant, 12 établissements, Provence',
      initials: 'MB',
      text: "Je clôture les comptes consolidés de 12 sociétés chaque mois. Le cycle de clôture était épuisant. Copilot Excel a transformé mon analyse des données : je pose des questions sur mes tableaux consolidés et j'obtiens instantanément les tendances et anomalies. Le temps de rédaction des commentaires de résultats a été divisé par trois.",
    },
    {
      name: 'Caroline Tissot',
      role: 'Directrice Administrative et Financière',
      company: 'PME de services numériques, 75 salariés',
      initials: 'CT',
      text: "En tant que DAF d'une PME, je fais tout : comptabilité, contrôle de gestion, juridique financier. Copilot est devenu mon assistant financier virtuel. La formation m'a appris à l'utiliser avec des prompts structurés pour chaque type de document. Le ROI est immédiat sur la préparation des CODIR et la rédaction des synthèses pour les actionnaires.",
    },
    {
      name: "Stéphane Perrot",
      role: "Analyste en gestion d'actifs",
      company: 'Family Office multi-familles, Paris',
      initials: 'SP',
      text: "On analyse des dizaines de dossiers d'investissement chaque trimestre. Copilot dans Word m'aide à produire des fiches de synthèse de qualité professionnelle en une fraction du temps habituel. Ce qui est crucial dans notre métier : la formation insiste sur le fait que Copilot ne prend pas de décision, il structure et synthétise. C'est la distinction fondamentale.",
    },
  ],

  // ── Copilot × Assistante ─────────────────────────────────────────────────
  'formation-copilot-assistante': [
    {
      name: 'Françoise Giraud',
      role: 'Assistante du Directeur Général',
      company: 'Groupe coopératif agroalimentaire, 1 600 salariés',
      initials: 'FG',
      text: "J'assiste un directeur général dont la boîte reçoit 200 emails par jour. Copilot dans Outlook a changé mon quotidien : en 10 minutes le matin j'ai une synthèse des priorités et des actions urgentes. Le DG me dit que je suis encore plus organisée qu'avant. Je prends le compliment, même si c'est Copilot qui m'y aide.",
    },
    {
      name: 'Nathalie Lambert',
      role: 'Executive Assistant',
      company: 'Cabinet de conseil en stratégie, Paris',
      initials: 'NL',
      text: "Notre cabinet travaille sur des projets confidentiels sensibles. La question de la sécurité des données avec Copilot était centrale. La formation a répondu à toutes mes questions sur l'architecture M365 et les précautions à prendre. Une fois la confiance établie, j'ai intégré Copilot dans tous mes processus : comptes-rendus, présentations, gestion des emails du managing partner.",
    },
    {
      name: 'Sylvie Mercier',
      role: 'Assistante de Direction & Office Manager',
      company: 'Agence immobilière de prestige, Lyon, 15 personnes',
      initials: 'SM',
      text: "Dans une agence de prestige, la communication écrite doit être irréprochable : ton parfait, zéro faute, registre adapté. Copilot dans Word m'aide à produire des courriers et emails à la hauteur de notre positionnement. La formation m'a appris à paramétrer précisément le ton souhaité, formel, élégant, précis. C'est exactement ce dont j'avais besoin.",
    },
  ],

  // ── Gemini × Marketing ───────────────────────────────────────────────────
  'formation-gemini-marketing': [
    {
      name: 'Paul Lefebvre',
      role: 'Responsable Marketing',
      company: 'Pure player e-commerce mode, startup, 40 personnes',
      initials: 'PL',
      text: "Notre stack est 100% Google : Gmail, Docs, Sheets, Meet. Gemini s'intègre sans aucune friction. Le module sur les descriptions produit m'a marqué, générer les fiches de 200 références depuis un seul brief dans Google Docs. Ce qui aurait pris une semaine m'a pris une après-midi. C'est le gain de temps le plus spectaculaire que j'aie jamais connu.",
    },
    {
      name: 'Julie Dupont',
      role: 'Responsable Communication Digitale',
      company: 'Fédération sportive nationale, secteur sport',
      initials: 'JD',
      text: "On gère 4 réseaux sociaux avec une équipe de 2 personnes. Gemini dans Google Workspace a multiplié notre capacité de production par 3 sans augmenter la charge. Le module sur la déclinaison multicanal depuis un seul contenu source était exactement ce qu'on cherchait. On produit maintenant du contenu cohérent sur tous nos canaux sans effort supplémentaire.",
    },
    {
      name: 'Olivier Garnier',
      role: 'Head of Growth',
      company: 'Startup SaaS B2B, outils de productivité, 25 personnes',
      initials: 'OG',
      text: "En startup, chaque heure non investie est un coût. Gemini dans Google Workspace s'est intégré dans nos workflows sans friction, on est full Google depuis le début. J'utilise Gemini dans Sheets pour analyser nos données de croissance et dans Docs pour rédiger nos case studies clients. En 2 mois, c'est devenu indispensable.",
    },
  ],

  // ── Gemini × RH ─────────────────────────────────────────────────────────
  'formation-gemini-rh': [
    {
      name: 'Brigitte Morel',
      role: 'DRH',
      company: 'PME cybersécurité, 90 salariés, Sophia-Antipolis',
      initials: 'BM',
      text: "Notre entreprise est 100% Google Workspace depuis la création. Adopter Gemini était la suite logique. La formation m'a montré comment l'utiliser sur des cas RH concrets : offres d'emploi, onboarding, procédures. Ce qui m'a le plus surpris, c'est la qualité des synthèses de compte-rendu d'entretien. Je gagne 2 heures par semaine sur l'administratif RH.",
    },
    {
      name: 'David Leconte',
      role: 'Directeur Associé',
      company: 'Cabinet de recrutement spécialisé ingénieurs, Paris',
      initials: 'DL',
      text: "On fait tout dans Google Workspace. Le module sur l'analyse de candidatures dans Google Sheets était révélateur : j'ai analysé et scoré 80 CV en moins d'une heure. La formation insiste bien sur la dimension humaine, Gemini aide à prioriser, pas à décider. C'est la bonne philosophie et c'est ce que j'attendais.",
    },
    {
      name: 'Isabelle Faure',
      role: 'DRH Adjointe',
      company: 'ETI distribution alimentaire, 320 points de vente',
      initials: 'IF',
      text: "La formation Gemini RH nous a donné les méthodes pour exploiter pleinement les capacités IA de notre environnement Google existant. Le module sur les entretiens annuels m'a permis de créer des supports personnalisés pour chacun de nos 180 managers. Ce niveau de personnalisation à grande échelle était inimaginable avant.",
    },
  ],

  // ── Gemini × Finance ─────────────────────────────────────────────────────
  'formation-gemini-finance': [
    {
      name: 'Jean-Baptiste Collin',
      role: 'Contrôleur de Gestion',
      company: 'Promoteur immobilier, 45 opérations par an',
      initials: 'JC',
      text: "On travaille essentiellement dans Google Sheets et Docs. Gemini s'intègre dans nos outils existants sans couche supplémentaire. Je pose des questions en français sur mes tableaux de bord de promotion immobilière et j'obtiens des analyses que je mettais une heure à produire manuellement. C'est une transformation de la partie analytique de mon travail.",
    },
    {
      name: 'Lucie Renard',
      role: 'Responsable Comptable',
      company: 'Cabinet de services aux entreprises, 60 clients PME',
      initials: 'LR',
      text: "Le gain sur les synthèses de bilan est spectaculaire. J'utilise Gemini dans Docs pour rédiger les commentaires d'analyse financière destinés à nos clients, en partant des chiffres dans Sheets. Ce qui prenait 45 minutes par client prend maintenant 15 minutes. Sur nos 60 clients, ça représente des journées entières récupérées chaque mois.",
    },
    {
      name: 'Édouard Moreau',
      role: 'Trésorier',
      company: 'Syndicat professionnel national, secteur agroalimentaire',
      initials: 'EM',
      text: "Notre organisation est sur Google Workspace depuis 2018. Le module sur la synthèse de documents financiers complexes : rapports, contrats bancaires, conventions, était particulièrement utile dans mon métier. Je gère des dizaines d'engagements financiers et Gemini me permet de maintenir une vision consolidée sans passer mes journées dans les documents.",
    },
  ],

  // ── Gemini × Commercial ──────────────────────────────────────────────────
  'formation-gemini-commercial': [
    {
      name: 'Alexandre Bertrand',
      role: 'Directeur Commercial',
      company: 'PME services IT, cloud & infra, 80 salariés',
      initials: 'AB',
      text: "Notre CRM et toute notre communication passent par Google Workspace. Gemini s'intègre dans ce contexte sans rupture. Le module sur les propositions commerciales m'a le plus apporté : générer une proposition de 15 pages depuis un thread Gmail de découverte client. C'est une base solide qu'on affine en 20 minutes. Très efficace.",
    },
    {
      name: 'Valérie Dupuis',
      role: 'Ingénieure Commerciale',
      company: 'Fabricant de matériel de cuisine professionnelle, ETI',
      initials: 'VD',
      text: "On a adopté Google Workspace dans toute l'entreprise il y a 3 ans. Ce qui m'a le plus frappé dans la formation : préparer un RDV client en 10 minutes en partant de l'historique Gmail. Je retrouve en quelques instants le contexte d'un client que je vois 2 fois par an. Ce niveau d'attention fait une vraie différence dans la relation commerciale.",
    },
    {
      name: 'Hugo Martineau',
      role: 'Commercial',
      company: 'Startup agritech, precision farming, Bordeaux',
      initials: 'HM',
      text: "On vend à des agriculteurs et coopératives qui apprécient qu'on connaisse leurs enjeux spécifiques. Gemini m'aide à personnaliser mes propositions selon le type de culture, la taille de l'exploitation, la région. Ce niveau de personnalisation aurait été impossible à mon volume de prospects avant la formation. Mathias comprend vraiment les enjeux commerciaux terrain.",
    },
  ],

  // ── Gemini × Communication ───────────────────────────────────────────────
  'formation-gemini-communication': [
    {
      name: 'Margot Chevalier',
      role: 'Responsable Communication',
      company: "ONG droits de l'enfant, France, 80 salariés",
      initials: 'MC',
      text: "Notre communication doit être rigoureuse sur le fond et accessible sur la forme : on parle à des donateurs, des institutionnels et du grand public. Gemini dans Google Workspace nous a permis de produire plus de contenus sans sacrifier la qualité. Le module sur l'adaptation des messages selon les audiences était essentiel pour notre métier.",
    },
    {
      name: 'Frédéric Vidal',
      role: 'Directeur de la Communication',
      company: 'ETI travaux publics, 450 salariés',
      initials: 'FV',
      text: "Dans le BTP, la communication est souvent le parent pauvre. Avec Gemini, un département de 2 personnes produit aujourd'hui le volume d'une équipe de 5. Les cas d'usage qu'on a travaillés pendant la formation étaient calqués sur notre activité réelle, pas des exemples génériques. On est repartis avec des outils directement opérationnels.",
    },
    {
      name: 'Anaïs Simon',
      role: 'Chargée de Communication',
      company: 'Région administrative, collectivité territoriale',
      initials: 'AS',
      text: "Dans une collectivité régionale sur Google Workspace depuis 2 ans, la formation Gemini Communication était parfaitement alignée sur notre réalité. Le module sur la communication institutionnelle, adapter les messages aux différentes audiences, m'a donné des méthodes que j'utilise chaque semaine. La formation vaut vraiment l'investissement.",
    },
  ],
}
