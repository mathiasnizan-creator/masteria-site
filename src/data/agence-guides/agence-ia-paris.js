// Contenu propre à /agence-ia-paris. Lu par AgenceGeoPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : CCI Paris Île-de-France et Insee (chiffres-clés 2025-2026, filiales de groupes étrangers), EIOPA (DORA), EUR-Lex (règlement 2026/1744), AI Act Service Desk de la Commission (annexe III, articles 50 et 113), CNIL (AIPD) ; retour de mission tiré de src/data/etudes-de-cas.js (distribution).
export default {
  slug: 'agence-ia-paris',
  dateModified: '2026-10-07',
  pagePropre: true,
  hero: {
    chips: ["Sièges, directions, filiales", "Comités de pilotage à Paris", "Développement à distance", "Conformité RGPD et AI Act"],
    lien: "Voir l'offre pour Paris",
  },
  ville: {
    heroSubtitle: "Un comité de direction parisien attend une décision argumentée ; une équipe métier attend un outil qui marche lundi matin. Nous préparons la première, livrons le second, et montons à Paris pour chaque atelier et chaque comité, le code s'écrivant depuis Lyon.",
    keyFacts: [
      {
        label: "Ce que nous faisons",
        value: "Stratégie et gouvernance de l'IA, agents et outils sur mesure, automatisation, formation des équipes qui reprennent l'outil",
      },
      {
        label: "Venir à Paris",
        value: "Deux heures de TGV depuis Lyon : nous sommes chez vous pour les comités et les ateliers, à distance entre deux",
      },
      {
        label: "Pour qui",
        value: "Sièges sociaux et services financiers, cabinets de conseil et médias, commerce et luxe, éditeurs et scale-ups",
      },
      {
        label: "Gouvernance",
        value: "Analyse d'impact, registre des traitements et calendrier de l'AI Act préparés avec votre DPO",
      },
    ],
    presence: "Masteria n'a pas de bureau à Paris, et nos pages le disent. Nos consultants prennent le TGV de Lyon pour chaque comité de pilotage, chaque atelier de cadrage et la remise de l'outil, dans Paris intra-muros comme à La Défense ou en petite couronne. Entre ces rendez-vous, le développement avance à distance, avec un point hebdomadaire en visio. Chaque déplacement figure dans la proposition.",
  },
  offresTitre: {
    kicker: "Paris et sa région",
    h2: "Ce que notre agence IA apporte aux directions parisiennes",
  },
  offresNote: {
    titre: "Du comité de direction à l'outil en production.",
    texte: "La même équipe prépare la décision du comité, construit l'outil qu'il a validé et forme ceux qui l'utiliseront, sans changement d'interlocuteur entre le conseil et le développement.",
  },
  ancrage: {
    kicker: "Paris et Île-de-France",
    h2: "Pourquoi une agence IA pour les entreprises parisiennes ?",
    economie: "Le tissu économique francilien",
    presence: "Comment nous travaillons à Paris",
    prestations: "Trois types de projets en Île-de-France",
  },
  formationBloc: {
    kicker: "Après la livraison",
    h2: "Former les équipes parisiennes sur l'outil construit",
    lien: "Toutes nos formations IA",
  },
  etapesBloc: {
    kicker: "Le déroulé",
    h2: "Cinq étapes pour une mission menée à Paris",
  },
  faqBloc: {
    h2: "Les questions des entreprises parisiennes",
    texte: "Plusieurs agences sont sur votre liste ? Nos critères de comparaison sont détaillés dans",
    lien: {
      href: "/meilleure-agence-ia",
      label: "notre guide pour choisir une agence IA",
    },
  },
  maillage: {
    villes: "Masteria dans d'autres métropoles",
    expertises: "Ressources pour préparer le cadrage",
  },
  cta: {
    titre: "Une direction parisienne à outiller ?",
    texte: "Indiquez-nous la direction concernée, le flux visé et l'échéance de votre comité. Nous vous répondons dans les 24 heures, puis nous fixons un premier échange de 30 minutes, offert, en visio ou dans vos bureaux.",
  },
  equipe: {
    titre: "Une équipe réunie pour votre siège",
    texte: "Chaque mission parisienne est conduite par Mathias Nizan, qui a fondé Masteria à Lyon en 2022. Autour de lui se forme, projet par projet, un petit groupe d'indépendants : un consultant qui prépare les comités de direction, un ou deux développeurs, un formateur. Sans licence à placer ni plateforme à vendre, l'équipe recommande ce qui sert votre siège.",
  },
  intro: "À Paris, un outil d'IA sur mesure passe devant plusieurs services avant de servir une équipe : achats, sécurité informatique, protection des données, conformité, parfois le groupe. Masteria, cabinet basé à Lyon, prépare ces validations dès le cadrage, développe ensuite les assistants, agents et automatisations retenus, puis vous en remet le code. Nous venons à Paris pour cadrer, observer les processus et passer la main ; le développement se mène depuis Lyon. Pour une banque ou un assureur, le règlement européen DORA, consacré à la résilience numérique de la finance, ajoute ses propres clauses au contrat.",
  offresIntro: [
    "Pour une direction parisienne, nous menons le conseil, le développement et l'automatisation avec une exigence commune : chaque livrable doit passer la revue de la direction informatique (DSI), du délégué à la protection des données et des achats.",
    "Masteria ne revend aucune licence. Nous travaillons avec l'éditeur que votre groupe a retenu, Microsoft, Google, OpenAI, Anthropic ou Mistral, et chaque mission démarre sur une proposition forfaitaire signée.",
  ],
  offres: [
    {
      title: "Stratégie et gouvernance de l'IA",
      cta: "Le conseil IA pour les directions",
      desc: "Avant tout chiffrage, le conseil dresse la carte de ceux qui valident : métier, DSI, délégué à la protection des données, conformité, achats, parfois la maison mère. Il en sort une feuille de route triée par gain et faisabilité, le classement de chaque usage au regard de l'AI Act (le règlement qui encadre les systèmes d'IA dans l'Union) et le dossier dont votre comité a besoin pour décider.",
      points: ["Carte des validations internes", "Classement AI Act de chaque usage", "Dossier de décision pour le comité"],
    },
    {
      title: "Agents et outils sur mesure",
      cta: "Notre agence de développement",
      secondaryCta: "Des outils IA par métier",
      desc: "Nous développons des agents et des assistants dans l'environnement que votre groupe autorise, reliés à vos logiciels par leurs interfaces. La documentation décrit l'architecture, les données traitées et les tests réalisés. La sécurité informatique et la conformité réclament ces pièces avant toute mise en production.",
      points: ["Agents dans l'environnement autorisé", "Dossier technique pour la sécurité", "Code source livré avec l'outil"],
    },
    {
      title: "Automatisation des fonctions support",
      cta: "L'automatisation chez Masteria",
      desc: "Dans un siège, les tâches répétitives se logent entre deux équipes : questionnaires de sécurité envoyés par les grands clients, consolidation de données venues des filiales, notes préparatoires au comité exécutif. Nous automatisons ces enchaînements en plaçant un contrôle humain aux étapes qui engagent l'entreprise, puis nous mesurons le temps rendu sur votre périmètre.",
      points: ["Enchaînements entre équipes", "Validation humaine aux étapes clés", "Temps rendu mesuré sur votre périmètre"],
    },
  ],
  etapes: [
    { title: "Une demi-heure pour repérer le flux", desc: "La demi-heure offerte, en visio ou au téléphone, sert à repérer le flux visé et les services qui devront le valider. Elle débouche sur une proposition chiffrée au forfait." },
    { title: "Un atelier de cadrage dans vos locaux", desc: "Nous réunissons le métier et les fonctions de contrôle autour de la même table, à Paris, à La Défense ou en proche couronne. La DSI, le délégué à la protection des données, la conformité et les achats posent leurs conditions avant le premier prototype." },
    { title: "Observer, puis développer depuis Lyon", desc: "Une observation au poste, dans le service qui utilisera l'outil, précède le développement. Celui-ci se conduit à distance, par versions courtes présentées en visio à l'équipe projet." },
    { title: "Faire circuler le dossier technique", desc: "Avant la mise en production, le dossier passe d'un service à l'autre : architecture, données traitées, tests, règles de validation humaine. Pour une entité financière soumise à DORA, il sert aussi à décrire le service dans le registre d'informations que l'entité tient sur ses prestataires de services TIC (informatique et télécommunications)." },
    { title: "Passer la main sur place", desc: "Dans vos locaux parisiens, l'équipe qui reprend l'outil reçoit le code, la documentation d'exploitation et les droits d'administration, puis une formation à sa maintenance. Le suivi se poursuit à distance." },
  ],
  formation: [
    "Un agent livré dans un siège ne sert que si les équipes savent quand lui faire confiance et quand le reprendre. Les sessions ont lieu dans vos bureaux parisiens, ou en classe virtuelle pour les filiales en région, et les exercices portent sur l'agent lui-même et sur les dossiers de chaque métier.",
    "Côté financement, l'OPCO ne prend en charge que la formation, rendue éligible par la certification Qualiopi de Masteria ; la journée en intra revient à 1 980 € HT. Le conseil et le développement se règlent sur le budget de la direction qui les commande.",
  ],
  guide: {
    kicker: "Sièges, filiales et fonctions de contrôle",
    h2: "À Paris, un projet d'IA se gagne devant les fonctions de contrôle, bien avant le premier prototype",
    lead: "L'Île-de-France accueille 17 540 établissements filiales d'un groupe étranger, soit 26,7 % de ceux implantés en France, d'après la CCI Paris Île-de-France, qui publie avec l'Insee ses chiffres-clés régionaux 2025-2026 (données de 2022). Dans le commerce francilien, 28,5 % des emplois dépendent d'un groupe étranger. Pour ces entreprises, l'outil d'IA peut être imposé par la maison mère, et sa validation passe par plusieurs services. Les banques et les assureurs y ajoutent, depuis janvier 2025, les règles européennes de résilience numérique. Un projet parisien se prépare donc pour ses relecteurs autant que pour ses utilisateurs.",
    sections: [
      {
        h3: "Une filiale parisienne développe dans le cadre que son groupe lui fixe",
        paras: [
          "Une filiale française d'un groupe européen ou américain hérite d'une liste d'outils autorisés, d'une politique de données et parfois d'une langue de travail. Le cadrage commence par ces documents, demandés par écrit à la DSI du groupe. Un assistant construit hors de ce cadre sera refusé, quelle que soit sa qualité. N'ayant aucune licence à placer, nous construisons avec les logiciels que le groupe a déjà achetés.",
          "La validation se fait ensuite à deux niveaux. Le groupe vérifie la conformité à sa politique ; la filiale vérifie l'utilité pour ses équipes. Nous préparons pour le premier un dossier technique court, et pour la seconde des tests sur des dossiers clos dont l'équipe connaît la bonne réponse. Les deux se présentent au même comité, ce qui évite deux tours de validation.",
        ],
      },
      {
        h3: "Pour une banque ou un assureur, DORA encadre le contrat du prestataire d'IA",
        paras: [
          "DORA, le règlement européen (UE) 2022/2554 qui encadre la résilience numérique de la finance, est entré en application le 17 janvier 2025. Selon l'autorité européenne des assurances et des pensions professionnelles (EIOPA), il vise vingt types d'entités financières et encadre la gestion du risque lié aux prestataires tiers de services TIC, avec un registre d'informations sur les contrats et des dispositions contractuelles clés. Les sièges parisiens de banques, d'assureurs et de sociétés de gestion appliquent ce texte depuis plus d'un an et demi.",
          "Votre conformité décide si l'agent livré constitue un service TIC fourni par un tiers. Si c'est le cas, il entre au registre et le contrat reprend les clauses exigées. Nous fournissons la description du service, la localisation des traitements et la liste des sous-traitants mobilisés, puis nous livrons le code avec sa documentation : l'établissement peut reprendre l'outil en interne ou changer de prestataire.",
        ],
      },
      {
        h3: "Le report du haut risque laisse l'obligation de transparence en vigueur",
        paras: [
          "Paru au Journal officiel de l'UE le 24 juillet 2026, le règlement (UE) 2026/1744 repousse au 2 décembre 2027 les obligations des systèmes d'IA à haut risque de l'annexe III de l'AI Act. Cette annexe couvre l'embauche, du tri des CV à l'évaluation des candidats, la notation de la solvabilité des particuliers et la tarification de l'assurance vie et santé. Un siège qui prépare un outil de présélection des candidatures dispose donc d'un délai, qui sert à préparer la documentation, les tests et le contrôle humain.",
          "La transparence, elle, n'a pas bougé. L'article 50 demande qu'un système conçu pour échanger directement avec des personnes les informe qu'elles s'adressent à une IA, et il s'impose depuis le 2 août 2026, date d'application générale du règlement. Un agent qui répond aux clients d'une enseigne ou d'une banque parisienne l'annonce donc dès son premier message. Nous inscrivons cette mention au cahier des charges de l'agent, avec la possibilité de passer la main à un conseiller.",
        ],
      },
      {
        h3: "Les achats attendent un forfait, des livrables vérifiables et une porte de sortie",
        paras: [
          "Nos propositions donnent un prix forfaitaire pour un périmètre écrit, des livrables nommés et un calendrier daté. Votre service achats compare donc un prix ferme à un contenu précis. La porte de sortie tient au code source et à la documentation que nous remettons à chaque mission : l'outil reste utilisable sans nous. Les licences des éditeurs restent à votre nom et sur votre budget, puisque Masteria n'en revend aucune.",
          "Le délégué à la protection des données pose une autre question : le traitement est-il susceptible d'engendrer un risque élevé pour les droits et libertés des personnes ? La CNIL rappelle que l'analyse d'impact relative à la protection des données (AIPD) vise ces traitements, et publie la liste de ceux pour lesquels elle est requise. Un agent qui trie des candidatures s'en approche ; un assistant qui résume des procédures internes sans données personnelles s'en éloigne. Le délégué tranche sur la base de l'inventaire que nous dressons au cadrage.",
        ],
      },
    ],
    table: {
      caption: "Qui valide quoi dans un projet d'IA d'un siège parisien",
      headers: ["Service", "Sa question", "Ce que nous lui remettons"],
      rows: [
        ["Direction métier", "L'outil fait-il gagner du temps sur nos dossiers ?", "Tests sur des dossiers clos, puis comparaison des temps avant et après le lancement"],
        ["DSI et sécurité informatique", "Où tournent les traitements, et qui accède à quoi ?", "Schéma d'architecture, localisation des traitements, gestion des accès"],
        ["Délégué à la protection des données", "Faut-il une analyse d'impact ?", "Inventaire des données personnelles traitées et de leurs finalités"],
        ["Conformité et risques", "L'usage relève-t-il du haut risque de l'AI Act, ou de DORA ?", "Classement de chaque usage et description du service pour le registre"],
        ["Achats et juridique", "Le prix est-il ferme, et l'outil peut-il être repris ?", "Prix forfaitaire écrit, code source et documentation livrés"],
        ["Groupe", "L'outil respecte-t-il la politique de la maison mère ?", "Dossier technique dans la langue de travail du groupe, anglais compris"],
      ],
    },
    cas: {
      h3: "Retour de mission : onze compétences Claude validées par la direction avant d'équiper 58 salariés",
      contexte: "Le client est un distributeur informatique B2B (qui vend à d'autres entreprises), filiale française d'un groupe européen. Chez lui, 58 salariés voyaient leurs journées commerciales grignotées par les mêmes gestes : chiffrer une demande, relancer un devis, rédiger la réponse à un cahier des charges, prospecter, surveiller les stocks. La direction voulait que l'équipe abatte davantage de travail à effectif constant, avec ses logiciels habituels : l'ERP (le logiciel de gestion de l'entreprise), le catalogue d'articles et le CRM (où vit l'historique de chaque client).",
      etapes: [
        "Sélectionner avec la direction les tâches qui rapportent le plus, et décider qui valide quoi avant toute diffusion.",
        "Former pendant deux jours, en juin 2026, dix référents volontaires, qui construisent chacun une compétence Claude, c'est-à-dire un ensemble d'instructions et de fichiers que l'assistant mobilise pour une tâche, sur leur propre flux de travail.",
        "Soumettre chaque compétence à la direction, qui contrôle les données autorisées, la citation des sources et ce qui reste du ressort du commercial.",
        "Planifier d'octobre à décembre 2026 le déploiement des mêmes onze compétences aux quelque cinquante autres collaborateurs, avec les dix référents.",
        "Basculer chaque compétence sur les données de l'entreprise avant de l'utiliser pour de bon ; la relance des devis avait été éprouvée sur des devis du distributeur dès avant la formation. Les référents gardent ensuite les mises à jour et accueillent les nouvelles recrues.",
      ],
      resultat: "Depuis juin 2026, chacun des dix référents fait évoluer la compétence qu'il a construite. L'extension à l'ensemble des équipes est programmée d'octobre à décembre 2026. La cible de la direction reste une cible : que 58 personnes abattent le travail d'une équipe de 70, sans embauche. Les indicateurs commerciaux trancheront.",
      lien: { href: "/etudes-de-cas-ia#distribution", label: "Les onze compétences du distributeur informatique" },
    },
    pieges: [
      { titre: "Montrer un prototype avant d'avoir lu la politique du groupe", texte: "Une démonstration réussie peut être arrêtée par une règle du groupe sur les données ou sur les éditeurs autorisés. Demandez la politique par écrit au premier atelier et construisez dans ses limites." },
      { titre: "Traiter un outil de tri des candidatures comme un assistant de bureautique", texte: "Le recrutement figure dans la liste de l'annexe III. À partir du 2 décembre 2027, un tel outil devra satisfaire aux exigences du haut risque ; la documentation, les tests et le contrôle humain se préparent dès la conception." },
      { titre: "Signer sans prévoir la reprise de l'outil", texte: "Sans code source ni documentation, l'outil reste attaché à celui qui l'a écrit. Pour une entité soumise à DORA, la question revient au moment de décrire le service dans le registre des prestataires." },
      { titre: "Oublier d'annoncer l'IA dans un agent tourné vers les clients", texte: "Depuis le 2 août 2026, l'AI Act impose, dans son article 50, de prévenir le client qu'une IA lui répond. Le message d'accueil de l'agent le dit, et un conseiller peut reprendre la conversation à la demande du client." },
      { titre: "Mesurer l'adoption au lieu du temps rendu", texte: "Un tableau de connexions dit qui ouvre l'outil. Le comité attend le temps gagné sur un dossier type, mesuré sur votre périmètre avant puis après le lancement." },
    ],
  },
  faq: [
    { q: "Masteria a-t-il des bureaux à Paris ?", a: "Non. Nos seuls bureaux sont à Lyon, rue d'Algérie, en presqu'île. Nos consultants se déplacent dans vos locaux parisiens aux trois moments qui le demandent : l'atelier de cadrage, une observation dans le service concerné, puis la passation. Entre ces dates, le travail avance à distance, avec des points en visio inscrits au calendrier de la proposition." },
    { q: "Pouvez-vous développer sur l'outil que notre groupe a déjà choisi ?", a: "Oui : nous ne vendons pas de licences, et nous construisons dans l'environnement retenu par votre groupe, qu'il vienne de Microsoft, de Google, d'OpenAI, d'Anthropic ou de Mistral, en respectant sa politique de données. Si l'outil imposé ne permet pas le cas visé, la recommandation l'écrit, avec les options possibles et leurs conséquences." },
    { q: "Notre établissement est soumis à DORA : que change le recours à Masteria ?", a: "Votre conformité décide si l'outil constitue un service TIC fourni par un tiers. Si oui, il entre dans votre registre d'informations, et le contrat reprend les dispositions exigées par le règlement (UE) 2022/2554, en application depuis janvier 2025. Nous fournissons la description du service, la localisation des traitements et la liste des sous-traitants, et nous livrons le code source de l'outil." },
    { q: "Un outil de présélection des candidatures est-il autorisé ?", a: "Oui, mais il relève du haut risque, puisque l'annexe III de l'AI Act vise les systèmes destinés à l'embauche et à la sélection des candidats. Depuis le règlement (UE) 2026/1744, ces exigences prennent effet le 2 décembre 2027. Le RGPD s'applique déjà, et votre délégué à la protection des données juge s'il faut une analyse d'impact." },
    { q: "Quel budget prévoir pour un déploiement à l'échelle d'un groupe ?", a: "Le chiffrage se fait au forfait, à l'issue du cadrage, dans une proposition écrite qui précise périmètre, livrables et calendrier. Le montant dépend surtout du nombre de logiciels à brancher et des validations à obtenir. Pour un déploiement qui touche tout un groupe, comptez plus de 100 000 €, et jusqu'à plusieurs centaines de milliers d'euros. Ce budget ne relève pas de votre OPCO, qui ne finance que la formation." },
    { q: "Quel délai prévoir avant le démarrage dans un siège ?", a: "La demi-heure de cadrage offerte se cale à votre convenance, et la proposition forfaitaire suit avec un calendrier écrit. Dans un siège, le délai dépend surtout des validations internes : référencement du fournisseur, revue de sécurité, accord du groupe. Nous les préparons dès le cadrage pour qu'elles avancent en même temps que le travail." },
    { q: "Pouvez-vous travailler en anglais pour un groupe international ?", a: "Oui. Pour un groupe industriel international du packaging, nous avons animé en anglais la matinée stratégique de son comité de direction. La documentation d'un outil peut suivre la langue de travail du groupe, et les ateliers se tiennent en français ou en anglais selon l'équipe." },
    { q: "Que devient l'outil si nous changeons de prestataire ?", a: "Vous le gardez : à la passation, dans vos locaux, nous vous remettons le code de l'outil, ses accès et toute sa documentation. Votre équipe, ou le prestataire de votre choix, peut reprendre l'outil sans dépendre de nous ; cette remise figure comme livrable dès la proposition." },
  ],
  sources: [
    { name: "CCI Paris Île-de-France et Insee, chiffres-clés 2025-2026 : le poids des sièges et des services en Île-de-France", url: "https://www.cci-paris-idf.fr/sites/default/files/2025-06/CC2025-BD.pdf" },
    { name: "EIOPA : Digital Operational Resilience Act (DORA), règlement (UE) 2022/2554", url: "https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en" },
    { name: "EUR-Lex, omnibus (UE) 2026/1744 du 8 juillet 2026 : le report des obligations à haut risque", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1744" },
    { name: "Commission européenne, AI Act Service Desk : annexe III (systèmes d'IA à haut risque)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3" },
    { name: "Commission européenne, AI Act Service Desk : article 50 (transparence)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
    { name: "Commission européenne, AI Act Service Desk : article 113 (entrée en vigueur et application)", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113" },
    { name: "CNIL : l'analyse d'impact relative à la protection des données (AIPD)", url: "https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd" },
  ],
}
