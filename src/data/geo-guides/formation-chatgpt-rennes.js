// Contenu propre à /formation-chatgpt-rennes (guide terrain). Rendu par GeoPage.
// Fonctions ChatGPT vérifiées sur help.openai.com (offre Business, stockage des données, projets, fichiers, conservation) le 03/10/2026.
// Données locales : Agreste DRAAF Bretagne (Mémento 2025), DRAAF Bretagne (bilan EGalim 2025), Ville et Métropole de Rennes ; textes : Légifrance, EUR-Lex, guide DINUM, consultés le 03/10/2026.
export default {
  slug: 'formation-chatgpt-rennes',
  dateModified: '2026-10-03',
  metaDesc: "Formation ChatGPT Rennes : qualité agroalimentaire, marchés publics, courriers aux habitants, et ce qu'un agent public peut y confier. Intra, Qualiopi.",
  intro: "À Rennes, ChatGPT arrive par deux services : la qualité d'un industriel agroalimentaire du bassin, qui répond aux cahiers des charges des enseignes, et l'administration d'une collectivité, qui prépare un marché ou répond à un habitant. Les deux commencent par la même affaire, le tri : quels documents entrent dans l'outil, lesquels restent dehors. Depuis Lyon, Masteria vient former vos agents et vos équipes qualité sur place ou en classe virtuelle, avec leurs propres documents et une règle de tri écrite dès le cadrage.",
  guide: {
    kicker: "Guide terrain Rennes",
    h2: "ChatGPT à Rennes : le tri des documents se décide avant le premier prompt",
    lead: "L'Ille-et-Vilaine compte 16 898 salariés dans les industries agroalimentaires fin 2023, le premier effectif des quatre départements bretons selon l'Agreste, et la Ville, la Métropole et le CCAS de Rennes emploient plus de 5 700 agents. Ces deux mondes produisent des écrits qui engagent : une fiche technique engage l'industriel sur les allergènes, un courrier engage l'administration devant l'habitant. ChatGPT accélère leur rédaction. Ce qui peut y entrer dépend de textes précis : le règlement européen sur l'information des consommateurs, le code général de la fonction publique, la charte de chaque employeur.",
    sections: [
      {
        h3: "Le service qualité met ChatGPT sur les cahiers des charges des enseignes",
        paras: [
          "Un cahier des charges d'enseigne de la grande distribution aligne des dizaines d'exigences : composition, allergènes, durée de vie, analyses, certifications, traçabilité. Le responsable qualité y répond ligne à ligne, fiche technique en main. ChatGPT Business lit les deux documents, en PDF comme en Excel, et dresse le tableau des écarts : exigence, valeur demandée, valeur de la fiche, statut. La taille ne gêne pas ces dossiers : OpenAI accepte 512 Mo par fichier, et environ 50 Mo pour un tableur.",
          "La traçabilité obéit à l'article 18 du règlement européen 178/2002 : chaque exploitant identifie qui lui a fourni une denrée et à quelles entreprises il a livré ses produits. ChatGPT aide à rédiger la procédure, à expliquer un export de lots ou à repérer une date incohérente dans un tableau. Il ne remplace pas le système de traçabilité de l'usine : quand un maillon manque, l'outil n'a pas à le reconstituer, et vos consignes doivent le lui interdire.",
          "Les allergènes demandent la même discipline. Le règlement INCO (n° 1169/2011) impose de faire ressortir dans la liste des ingrédients, par la typographie, toute substance de son annexe II présente dans la denrée : quatorze familles, des céréales contenant du gluten aux mollusques. ChatGPT vérifie qu'une ébauche d'étiquette respecte cette mise en forme et signale un ingrédient composé à détailler. La décision revient au service qualité, qui confronte l'étiquette à la recette et aux fiches des fournisseurs.",
        ],
      },
      {
        h3: "Dans les collectivités, ChatGPT prépare les marchés et les réponses aux habitants",
        paras: [
          "Les acheteurs publics rennais rédigent des dossiers de consultation : règlement, cahier des clauses techniques particulières (CCTP, la description détaillée du besoin), critères d'attribution. ChatGPT vérifie la cohérence entre ces pièces, propose un découpage en lots et reformule une clause confuse. Le sujet est concret dans la restauration scolaire : selon le bilan EGalim publié par la DRAAF Bretagne, les cantines bretonnes atteignaient en 2024 30,1 % de produits durables et de qualité, dont 12,9 % de bio, quand la loi fixe 50 % et 20 %.",
          "Deux limites tiennent l'outil à sa place. L'égalité de traitement des candidats, principe posé par l'article L3 du code de la commande publique, interdit de favoriser un fournisseur pour sa localisation : un critère « fournisseur breton » n'a pas sa place dans un règlement de consultation, et la documentation officielle de ma-cantine précise que le local ne fait pas partie des catégories EGalim. Les offres des candidats, elles, contiennent prix et secrets d'affaires : elles ne passent jamais dans ChatGPT.",
          "Le courrier aux habitants suit une autre règle. Une personne qui écrit à la mairie donne son nom, son adresse, parfois sa situation familiale ou financière. L'agent peut demander à ChatGPT un plan de réponse et une formulation claire à partir d'un courrier pseudonymisé, où les noms sont remplacés par des étiquettes. La stratégie de la donnée de la Ville et de la Métropole cite l'adoption en 2024 d'une charte interne sur le recours à l'IA générative : pour un agent rennais, c'est le premier texte à relire avant la session.",
        ],
      },
      {
        h3: "Ce qu'un agent public peut confier à ChatGPT, et ce qu'il garde pour lui",
        paras: [
          "Le code général de la fonction publique suit l'agent jusque dans l'outil. L'article L121-6 le tient au secret professionnel ; l'article L121-7 lui impose la discrétion professionnelle « pour tous les faits, informations ou documents dont il a connaissance » dans ses fonctions. Coller une note interne ou le dossier d'un habitant dans un service en ligne l'expose à manquer à ces obligations. L'outil change, l'obligation demeure.",
          "Pour les agents de l'État en poste à Rennes, en préfecture ou dans une direction régionale, le guide d'usage de l'IA publié par la DINUM avec la DITP et la DGAFP pose une règle stricte : le recours à un outil commercial comme ChatGPT « doit rester exceptionnel », avec l'autorisation explicite de l'administration et pour des informations qui « pourraient être publiées librement sur Internet ». L'État leur ouvre L'Assistant, son outil interministériel. Les collectivités territoriales n'y sont pas éligibles : un agent de la Région ou de la Métropole suit les règles de son employeur.",
        ],
        list: [
          "Peut entrer : les textes déjà publics, comme une délibération publiée, un dossier de consultation mis en ligne, un rapport d'activité ou une fiche réglementaire.",
          "Peut entrer après pseudonymisation, si la charte de l'employeur l'autorise : un courrier d'habitant dont les noms, adresses et numéros ont été remplacés, une réclamation sans identité.",
          "Reste dehors : les notes en cours d'arbitrage, les offres des candidats, les données de santé ou sociales d'un habitant, et tout document « Diffusion Restreinte », réservé aux outils homologués.",
        ],
      },
      {
        h3: "Business ou Enterprise : la collectivité tranche avec son délégué à la protection des données",
        paras: [
          "ChatGPT Business, l'ancien ChatGPT Team renommé le 29 août 2025, se souscrit à partir de deux sièges, et jusqu'à 200 depuis le 24 août 2026. OpenAI n'entraîne pas ses modèles sur les données de l'espace de travail. Le choix d'une région de stockage y arrive progressivement : elle couvre les conversations enregistrées, sans fixer le lieu où les requêtes sont traitées, et une copie de chaque échange reste un temps aux États-Unis pour la surveillance des abus.",
          "ChatGPT Enterprise ajoute, pour les nouveaux clients éligibles, le stockage et le traitement des requêtes en Europe, la plateforme de conformité et des contrôles d'accès par rôle. Pour une collectivité qui envisage de traiter des courriers d'habitants, le choix relève du délégué à la protection des données (DPO), avant la formation. Une équipe qualité, elle, peut travailler sur Business dans un projet partagé : chaque membre reçoit un accès en conversation ou en modification, et le projet garde sa propre mémoire.",
        ],
      },
    ],
    table: {
      caption: "Documents rennais : ce que ChatGPT en fait, ce qui reste hors de l'outil",
      headers: ["Document", "Ce que ChatGPT en fait", "Ce qui reste hors de l'outil"],
      rows: [
        ["Cahier des charges d'une enseigne", "Tableau des exigences et des écarts avec la fiche technique", "Prix et conditions commerciales négociées"],
        ["Fiche technique et projet d'étiquette", "Contrôle de la mise en évidence des allergènes de l'annexe II du règlement INCO", "La validation finale par le service qualité"],
        ["Export de traçabilité (lots, dates, clients)", "Lecture du tableau, repérage des dates incohérentes", "Le système de traçabilité de référence ; les noms des éleveurs et des clients, à pseudonymiser"],
        ["Dossier de consultation d'un marché public", "Cohérence entre règlement et CCTP, découpage en lots", "Les offres reçues, les prix et les mémoires des candidats"],
        ["Courrier d'un habitant de la métropole", "Plan de réponse et formulation en langage clair", "Nom, adresse et situation de la personne, sauf pseudonymisation autorisée par la charte"],
        ["Note interne en cours d'arbitrage", "Rien : le guide de la DINUM l'exclut des outils commerciaux pour les agents de l'État", "La note entière, tant qu'elle n'est pas publique"],
      ],
    },
    cas: {
      h3: "Cas pratique : préparer l'allotissement d'un marché de denrées pour la restauration scolaire",
      contexte: "Prenons une acheteuse d'une commune de Rennes Métropole qui renouvelle le marché de denrées de sa cuisine centrale. La commune veut se rapprocher des objectifs de la loi EGalim : 50 % de produits durables et de qualité, dont 20 % de bio. L'acheteuse dispose de l'ancien dossier de consultation, publié, d'un bilan d'achats par famille de produits sans nom de fournisseur, et de la note de cadrage de la direction de l'éducation, validée et diffusable.",
      etapes: [
        "Vérifier avec le service juridique que chaque pièce peut entrer dans l'outil : l'ancien dossier est public, le bilan d'achats est agrégé, la note de cadrage est validée.",
        "Créer un projet ChatGPT « Marché denrées » et y déposer les trois pièces.",
        "Coller le prompt ci-dessous dans le projet : il produit la lecture du bilan au regard d'EGalim, un projet d'allotissement et des critères d'attribution.",
        "Faire relire les critères par le service juridique, en cherchant tout critère qui favoriserait un fournisseur pour sa localisation.",
        "Rédiger le règlement de consultation définitif dans les outils de la commune, et ne jamais déposer les offres reçues dans ChatGPT.",
      ],
      prompt: "Tu assistes l'acheteuse publique d'une commune française qui renouvelle le marché de fourniture de denrées pour sa restauration scolaire. Le projet contient l'ancien dossier de consultation, publié, un bilan des achats par famille de produits et la note de cadrage de la direction de l'éducation.\n\nPremière tâche : pour chaque famille de produits du bilan, indique la part actuelle de produits durables et de qualité au sens de la loi EGalim, quand le bilan la donne, et l'écart avec les objectifs de 50 % de produits durables et de qualité, dont 20 % de bio. Signale les familles pour lesquelles le bilan ne permet pas de conclure.\n\nDeuxième tâche : propose un découpage en lots cohérent avec ces familles et avec la note de cadrage. Pour chaque lot, indique les signes de qualité EGalim que l'on peut exiger ou valoriser : agriculture biologique, Label Rouge, AOP, IGP, HVE.\n\nTroisième tâche : propose des critères d'attribution et leur pondération. N'utilise jamais l'origine géographique des produits ni la localisation du fournisseur comme critère, et signale tout critère qui pourrait les réintroduire indirectement.\n\nQuatrième tâche : liste les questions à trancher avec le service juridique avant la publication.\n\nCite toujours la pièce et la page d'où vient chaque information. N'invente aucun chiffre.",
      resultat: "Vous obtenez une lecture du bilan au regard d'EGalim, un projet de lots et des critères à soumettre au service juridique. Les pourcentages sortent de votre bilan : vérifiez chacun contre le tableau source. Le jour où les offres arrivent, leur analyse se fait dans vos outils internes ; ChatGPT n'y a pas accès.",
    },
    pieges: [
      { titre: "Écrire « fournisseur breton » dans un critère", texte: "L'égalité de traitement des candidats interdit de favoriser un fournisseur pour sa localisation, et le local ne figure pas parmi les catégories EGalim. Une demande du type « favoriser les producteurs locaux » peut conduire l'assistant à suggérer ce critère : le prompt l'exclut, le service juridique vérifie." },
      { titre: "Laisser l'outil trancher sur un allergène", texte: "Une liste d'ingrédients reformulée peut perdre un ingrédient composé ou une mise en évidence exigée par le règlement INCO. Le service qualité confronte chaque étiquette à la recette et aux fiches des fournisseurs avant impression." },
      { titre: "Déposer un export de traçabilité complet", texte: "Un export de lots contient les noms des éleveurs, des transporteurs et des clients. Réduisez l'extrait aux colonnes utiles et pseudonymisez les noms avant de le confier à l'outil." },
      { titre: "Coller le courrier d'un habitant tel quel", texte: "Nom, adresse, situation familiale : ces informations relèvent du secret et de la discrétion professionnels de l'agent. Pseudonymisez, et seulement si la charte de votre collectivité le permet." },
      { titre: "Prendre la conversation temporaire pour un effacement", texte: "Une conversation temporaire n'apparaît pas dans l'historique, mais OpenAI peut en garder une copie jusqu'à 30 jours pour des raisons de sécurité. Elle ne rend pas acceptable un document qui ne devait pas entrer dans l'outil." },
    ],
  },
  faq: [
    { q: "Comment ChatGPT aide-t-il le service qualité d'un industriel agroalimentaire breton ?", a: "Il met en tableau les exigences d'un cahier des charges d'enseigne et les compare à la fiche technique, rédige ou relit une procédure de traçabilité, contrôle la mise en évidence des allergènes sur une ébauche d'étiquette et prépare la synthèse d'un audit. Il lit les PDF et les tableurs Excel déposés dans la conversation. La validation reste au responsable qualité, qui engage l'entreprise sur chaque étiquette et chaque réponse à une enseigne." },
    { q: "Un agent de la Région Bretagne ou de Rennes Métropole peut-il utiliser ChatGPT avec des données d'habitants ?", a: "Seulement dans le cadre fixé par son employeur. L'agent reste tenu au secret et à la discrétion professionnels (articles L121-6 et L121-7 du code général de la fonction publique), y compris dans un outil en ligne. Les données d'un habitant n'entrent qu'après pseudonymisation, si la charte de la collectivité l'autorise, et les données de santé ou sociales restent dehors. Pour la Ville et la Métropole, la stratégie de la donnée cite l'adoption en 2024 d'une charte interne sur l'IA générative." },
    { q: "ChatGPT Business ou ChatGPT Enterprise : quelle offre pour une collectivité ou un industriel rennais ?", a: "ChatGPT Business convient à une équipe qualité ou à un service qui travaille sur des documents publics ou pseudonymisés : de 2 à 200 sièges, aucun entraînement sur les données de l'espace de travail, connexion unique (SSO). Le stockage en région y arrive progressivement et ne fixe pas le lieu de traitement des requêtes. ChatGPT Enterprise ajoute le stockage et le traitement en Europe pour les clients éligibles, la plateforme de conformité et les contrôles par rôle : c'est l'offre à examiner avec votre DPO pour des courriers d'habitants." },
    { q: "Où se déroule une formation ChatGPT à Rennes, et pour combien de participants ?", a: "Sur place, à Rennes, dans la métropole ou sur un site d'Ille-et-Vilaine, avec douze participants au plus par groupe ; les équipes partagées entre un siège et des usines suivent la session en classe virtuelle. Masteria est basé à Lyon ; Mathias Nizan ou un formateur de son réseau fait le trajet jusqu'à Rennes, aux conditions inscrites dans le devis. Les exercices portent sur vos propres documents, triés avant la session." },
    { q: "Combien coûte une formation ChatGPT à Rennes, et comment la financer ?", a: "Le tarif est de 1 980 € HT par journée intra, pour un groupe de douze personnes au plus. Pour un industriel agroalimentaire ou une coopérative agricole, la demande de prise en charge se dépose auprès d'OCAPIAT avant la session, et l'accord dépend de votre branche et de vos fonds ; Masteria, certifié Qualiopi, fournit le programme et la convention. Une collectivité règle la formation sur son propre budget, en plus de sa cotisation obligatoire au CNFPT." },
    { q: "ChatGPT peut-il rédiger le cahier des clauses techniques d'un marché public ?", a: "Il peut en préparer une première version à partir d'un ancien dossier publié, d'une note de cadrage validée et des exigences du service, puis vérifier sa cohérence avec le règlement de consultation. L'acheteur reste l'auteur : il relit chaque clause, retire tout critère lié à la localisation des candidats, contraire à l'égalité de traitement, et ne dépose jamais les offres reçues dans l'outil. Les montants et les quantités viennent de vos données." },
    { q: "Les agents de l'État en poste à Rennes ont-ils le droit d'utiliser ChatGPT ?", a: "Le guide d'usage de l'IA de la DINUM, sans portée réglementaire, fixe le cadre : le recours à un outil commercial comme ChatGPT reste exceptionnel, avec l'autorisation explicite de l'administration et pour des informations publiables librement sur Internet. Les documents « Diffusion Restreinte » ne vont que dans des outils homologués. Les services de l'État disposent de L'Assistant, l'outil interministériel, auquel les collectivités territoriales n'ont pas accès." },
  ],
  sources: [
    { name: "Agreste, DRAAF Bretagne : Mémento 2025, l'industrie agroalimentaire (Flores 2023)", url: "https://draaf.bretagne.agriculture.gouv.fr/IMG/pdf/iaa_amb_2025_memento_2025_complet.pdf" },
    { name: "DRAAF Bretagne : bilan statistique EGalim de la restauration collective, rapport au Parlement 2025", url: "https://draaf.bretagne.agriculture.gouv.fr/bilan-statistique-egalim-de-la-restauration-collective-rapport-au-parlement-a3833.html" },
    { name: "ma cantine : catégories EGalim et origine des produits", url: "https://documentation.ma-cantine.agriculture.gouv.fr/fr/article/comprendre-mes-obligations-categories-egalim-et-origine-des-produits-w3xg0f/" },
    { name: "Ville et Métropole de Rennes : travailler pour la Ville, la Métropole et le CCAS", url: "https://economie.metropole.rennes.fr/travailler-pour-la-ville-la-metropole-et-le-ccas-de-rennes/" },
    { name: "Rennes : stratégie de la donnée et de ses usages (Ville, Métropole, CCAS)", url: "https://rennes.osuny.org/media/download/eyJfcmFpbHMiOnsiZGF0YSI6Ijg3ZjdhMzMxLTYwZDQtNGIyMC1iYWZjLWFiOTVjYjFhNzZmNyIsInB1ciI6ImJsb2JfaWQifX0=--af77c6792487b5569cfb5e88964626e172ba4602" },
    { name: "Légifrance : article L121-7 du code général de la fonction publique", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044427901" },
    { name: "DINUM : guide d'usage de l'IA pour les agents publics de l'État, les 5 principes", url: "https://guides.ia.numerique.gouv.fr/guides/guide-dusage-de-lia-pour-les-agents-publics-de-letat/partie-3-les-5-principes-fondamentaux" },
    { name: "DINUM : accéder à L'Assistant (éligibilité)", url: "https://guides.ia.numerique.gouv.fr/assistant-ia/depannage/acceder-a-lassistant" },
    { name: "OpenAI Help Center : ChatGPT Business General FAQ", url: "https://help.openai.com/en/articles/8542115-chatgpt-business-general-faq" },
    { name: "OpenAI Help Center : Where your ChatGPT Business content is stored", url: "https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored" },
  ],
}
