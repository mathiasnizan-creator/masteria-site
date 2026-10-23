// Contenu propre à /formation-ia-productivite (guide terrain, page propre). Rendu par SpokePage.
// Créé le 23/10/2026. Intitulé catalogue : « Utiliser l'IA pour développer son efficacité et sa
// productivité au travail », 1 jour (7 h), tous métiers, sur l'outil que l'entreprise possède.
// Faits vérifiés le 23 octobre 2026 :
// - Copilot dans Outlook, avec et sans licence (support.microsoft.com « Chat with Copilot in Outlook »).
//   Le bouton Résumer de Copilot Chat épinglé n'est pas cité : seule source trouvée, un site tiers.
// - Copilot dans les réunions Teams : options « pendant et après » (transcription) et « uniquement
//   pendant », onglet Récapitulatif lié à la transcription, réunions organisées hors de l'organisation,
//   récapitulatif intelligent avec Teams Premium ou la licence Microsoft Copilot (support.microsoft.com).
// - Mémoire Copilot : personnalisation améliorée active par défaut, coupable par l'administrateur (Learn).
// - Agents dans Copilot Chat : « Créer un agent », agents qui lisent des données partagées facturés à
//   l'usage, coupés par défaut (learn.microsoft.com/copilot/agents).
// - ChatGPT : mémoire (souvenirs enregistrés, historique des conversations, chat temporaire), projets
//   (instructions de projet prioritaires sur les instructions globales), tâches planifiées (3 à 15 actives
//   selon l'offre, une tâche créée dans un projet ne lit pas ses fichiers), lus sur help.openai.com.
// - Claude : mémoire par défaut sur Free, Pro, Max, activée par les propriétaires sur Team et Enterprise,
//   mémoire propre à chaque projet, chat incognito, mémoire coupée pour un seul chat (support.claude.com).
// - Gemini : synthèse des longs fils dans Gmail (support.google.com/mail) ; « Prendre des notes pour moi »
//   dans Meet, une langue par réunion, français pris en charge, document dans le Drive de l'organisateur
//   (support.google.com/meet) ; transition des Gems vers les compétences (knowledge.workspace.google.com,
//   page du 30/09/2026).
// - Vibe (Mistral) : compétences au format SKILL.md, connecteur Gmail qui crée des brouillons jamais
//   envoyés d'office (docs.mistral.ai).
// Cas terrain : mission `assistanat-direction` (data/missions-formation.js). Aucun prix d'outil,
// aucun pourcentage de gain, aucun chiffre non sourcé.
export default {
  slug: 'formation-ia-productivite',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-23',
  updatedLabel: 'Faits vérifiés le 23 octobre 2026',
  h1: "Formation IA productivité : utiliser l'IA pour gagner en efficacité au travail",
  metaTitle: "Formation IA productivité au travail (1 jour) | Masteria",
  metaDesc: "Formation IA productivité en 1 jour : mails, réunions, synthèses, priorités et routines avec Copilot, ChatGPT, Claude, Gemini ou Vibe. Dès 1 980 € HT.",
  keywords: "formation ia productivité, ia formation productivité entreprise, utiliser l'ia au travail, formation intelligence artificielle au travail, gagner du temps avec l'ia, efficacité professionnelle ia, formation utilisation ia en entreprise",
  prerequis: "Un compte professionnel sur l'assistant que fournit l'entreprise (Copilot, ChatGPT, Claude, Gemini ou Vibe), l'accès à sa messagerie et à son agenda, et la liste de trois tâches qui reviennent chaque semaine",
  resume: "Cette formation IA productivité occupe une journée de sept heures. Elle apprend à confier à l'assistant de l'entreprise le travail qui encombre une semaine : la boîte de réception, les réunions, les documents trop longs à lire, l'ordre des priorités et les tâches que l'on refait à l'identique. Elle s'adresse à tous les métiers et se déroule sur l'outil que vos équipes ont déjà, qu'il s'agisse de Microsoft Copilot, ChatGPT, Claude, Gemini ou Vibe. Le groupe compte douze personnes au plus, ou une seule, en salle ou en classe virtuelle. Masteria est certifié Qualiopi ; l'OPCO de votre entreprise examine la demande et fixe seul sa prise en charge.",
  enBref: [
    { label: 'Formation', value: "Organiser son travail quotidien avec l'assistant IA de l'entreprise : courriels, réunions, lectures, semaine, routines" },
    { label: 'Durée', value: "Une journée, sept heures, six ateliers qui se terminent chacun sur une tâche de votre propre semaine" },
    { label: 'Formats', value: "Intra jusqu'à douze collègues ou accompagnement individuel, dans vos murs ou à distance" },
    { label: 'Tarif', value: "Dès 1 980 € HT la journée pour le groupe ; l'adaptation à vos outils et à vos dossiers figure en plus sur le devis" },
    { label: 'Financement', value: "Organisme certifié Qualiopi ; votre OPCO, ou le fonds d'un travailleur indépendant, rend sa décision" },
    { label: 'Prérequis', value: "Un compte professionnel sur l'assistant fourni, la messagerie et l'agenda, trois tâches hebdomadaires notées à l'avance" },
  ],
  audienceIntro: "La journée accueille toutes les fonctions qui passent leurs semaines entre la messagerie, les réunions et les documents. Chacun apporte trois tâches qui reviennent et repart avec ces tâches outillées dans son propre compte.",
  casUsageIntro: "Six gestes que les participants installent pendant la journée, sur leur boîte, leur agenda et leurs dossiers, ou sur des pièces d'exercice de même nature.",
  intro: "Un assistant d'IA fait gagner du temps sur les tâches qu'on sait décrire. La messagerie, les réunions et les lectures longues en font partie, à condition de savoir ce que l'outil voit de vos données et ce qu'il garde d'une conversation à l'autre. Pendant la journée, chacun règle son assistant une fois, apprend les gestes utiles sur sa boîte, ses réunions et ses dossiers, puis transforme une tâche répétitive en consigne qu'il relance d'un clic. Les fonctions citées sur cette page ont été relevées le 23 octobre 2026 dans les centres d'aide de Microsoft, OpenAI, Anthropic, Google et Mistral.",
  guide: {
    kicker: 'Guide terrain',
    h2: "L'IA libère du temps sur les tâches que vous savez décrire en une consigne",
    lead: "La plupart des participants arrivent avec la même attente : récupérer des heures. Elles se trouvent dans les tâches qui reviennent chaque semaine sous la même forme. Trier les courriels du lundi, résumer un fil de quarante messages, préparer une réunion, tirer trois décisions d'un rapport de soixante pages. Chacune peut s'écrire une fois, puis se relancer. La journée suit cet ordre : régler l'outil, apprendre le geste juste sur chaque terrain, puis ranger la consigne pour la reprendre la semaine suivante. Le gain dépend de votre licence, car l'outil gratuit et l'outil payant d'un même éditeur ne voient pas les mêmes données.",
    sections: [
      {
        h3: "Le compte que vous ouvrez détermine ce que l'assistant voit",
        paras: [
          "Chez Microsoft, deux niveaux coexistent. Copilot Chat est inclus dans les abonnements Microsoft 365. Dans Outlook, il répond sur la boîte de réception, l'agenda et les réunions à partir de données limitées. La licence Microsoft Copilot (anciennement Microsoft 365 Copilot) y ajoute les conversations Teams et les documents de l'entreprise : elle peut indiquer quels courriels non lus comptent le plus et proposer un ordre de réponse, ou préparer l'ordre du jour d'une réunion à partir des projets en cours.",
          "Les autres assistants passent par des connecteurs, que l'administrateur ouvre ou ferme. ChatGPT peut puiser dans une application reliée, comme Gmail, pour personnaliser ses réponses. Chez Mistral, Vibe (anciennement Le Chat) lit et cherche dans Gmail et prépare des brouillons ; Mistral précise qu'aucun brouillon ne part seul et que l'envoi se fait depuis Gmail. Gemini travaille dans Gmail, Docs et Meet quand l'édition Workspace de l'entreprise l'inclut.",
          "Le type de compte pèse aussi. OpenAI n'entraîne pas ses modèles sur le contenu des espaces Business, Enterprise et Edu ; sur un compte personnel, le réglage « Améliorer le modèle pour tout le monde » décide. Nous commençons donc la journée par une règle simple, écrite par chaque participant : quelles données vont dans quel compte, et lesquelles restent hors de tout assistant.",
        ],
      },
      {
        h3: "Instructions et mémoire évitent de se présenter à chaque conversation",
        paras: [
          "Chaque assistant garde des consignes permanentes : votre fonction, vos interlocuteurs habituels, la forme de réponse que vous préférez. ChatGPT y ajoute une mémoire faite de souvenirs enregistrés et de l'historique des conversations, que l'on consulte et corrige depuis Paramètres, Personnalisation, Mémoire. Un chat temporaire ne crée ni ne met à jour aucun souvenir.",
          "Claude active la mémoire par défaut sur les offres Free, Pro et Max ; sur Team et Enterprise, les propriétaires l'autorisent, puis chaque membre l'allume. Chaque projet Claude possède sa propre mémoire et n'emprunte rien aux autres projets. Pour un dossier sensible, on coupe la mémoire avant le premier message de la conversation, car le réglage se fige ensuite.",
          "Chez Microsoft, instructions personnalisées et souvenirs enregistrés relèvent de la personnalisation améliorée, active par défaut. Un administrateur peut la couper pour toute l'organisation, et les réglages apparaissent alors grisés pour l'utilisateur. Si le vôtre est dans ce cas, la consigne permanente passe par un agent ou par un texte de départ que vous collez en début de conversation.",
        ],
      },
      {
        h3: "Dans la messagerie, l'assistant résume et prépare, vous décidez de l'envoi",
        paras: [
          "Dans Outlook, Copilot résume le fil ouvert et prépare un brouillon de réponse, que vous relisez avant de l'envoyer. Dans Gmail, Gemini condense les longs échanges en quelques puces et retravaille un brouillon pour le ton et la clarté. Ces deux gestes servent dès le retour de congés.",
          "La relance se prépare de la même façon. Vous demandez à l'assistant la liste des fils où vous attendez une réponse depuis plus d'une semaine, avec pour chacun la dernière demande formulée, puis un brouillon de relance par fil. Le brouillon reste un brouillon : Copilot, Gemini, ChatGPT, Claude et Vibe proposent, et vous seul cliquez sur Envoyer.",
          "ChatGPT peut aussi surveiller la boîte pour vous. Dans Work, les offres Plus, Pro, Business, Enterprise et Edu proposent des tâches déclenchées par un événement : l'une d'elles réagit à un nouveau message Gmail, filtré par expéditeur ou par objet. Une action qui demande votre accord met la tâche en pause jusqu'à votre réponse.",
        ],
      },
      {
        h3: "Une réunion se résume à partir de ce que l'outil a entendu",
        paras: [
          "Dans Teams, l'organisateur choisit le mode de Copilot. En mode « pendant et après la réunion », Copilot démarre avec la transcription et s'arrête avec elle ; on l'interroge ensuite depuis la conversation de la réunion ou l'onglet Récapitulatif. En mode « uniquement pendant la réunion », Copilot travaille sur une reconnaissance vocale en direct qui disparaît à la fin de l'échange. Copilot ne fonctionne pas dans une réunion organisée par une autre entreprise.",
          "Pour obtenir le récapitulatif intelligent de Teams, il faut une licence Teams Premium ou Microsoft Copilot. Côté Google, la fonction « Prendre des notes pour moi » de Meet dépose dans le Drive de l'organisateur un document à deux onglets, l'un bref et l'autre détaillé, avec décisions et prochaines étapes. Elle reconnaît le français, une seule langue par réunion.",
          "Pour une réunion sans ces fonctions, une visioconférence externe ou un rendez-vous en salle, on dépose la transcription ou ses propres notes dans l'assistant. Dans tous les cas, le relevé se relit avant de partir : un participant contrôle les décisions, le nom de chaque porteur d'action et chaque échéance.",
        ],
      },
      {
        h3: "Une tâche réussie devient une consigne que l'on relance",
        paras: [
          "Le gain durable vient de la deuxième fois. Une demande qui a donné un bon résultat se range dans un projet, avec ses fichiers de référence et ses instructions. Dans ChatGPT, les instructions d'un projet s'appliquent à ses seules conversations et prennent le pas sur les instructions globales.",
          "Les compétences vont plus loin : une procédure écrite au format SKILL.md que l'assistant ouvre quand la demande s'y rapporte. Claude, ChatGPT et Vibe les acceptent. Google remplace les Gems par des compétences, déployées dans Workspace depuis le 5 octobre 2026 et dans l'appli Gemini depuis le 13 octobre ; sur les comptes professionnels, les Gems restent utilisables jusqu'au 1er mars 2027 au plus tôt. Dans Copilot Chat, le menu Agents propose « Créer un agent » à partir d'instructions ; un agent qui lit des contenus partagés de l'entreprise se facture à l'usage et reste désactivé tant que l'administrateur ne l'a pas ouvert.",
          "Une routine peut aussi revenir seule. Les tâches planifiées de ChatGPT tournent à l'heure fixée, dans une limite de trois tâches actives en Free et Go, cinq en Plus, dix en Business et quinze en Pro et Enterprise. Une tâche créée à l'intérieur d'un projet n'a pas accès aux fichiers de ce projet : mettez les informations utiles dans la consigne elle-même.",
        ],
      },
    ],
    table: {
      caption: "Ce que chaque assistant apporte au travail quotidien, relevé le 23 octobre 2026",
      headers: ['Assistant', 'Messagerie', 'Réunions', 'Consigne réutilisable', 'À vérifier avant la formation'],
      rows: [
        ["Copilot Chat (inclus dans Microsoft 365)", "Brouillons dans Outlook ; questions sur la boîte et l'agenda à partir de données limitées", "Récapitulatif intelligent non compris", "Agent créé à partir d'instructions", "Copilot épinglé ; agents sur données partagées ouverts par l'administrateur"],
        ["Microsoft Copilot (licence)", "Priorisation des non-lus avec le contexte des conversations et des documents", "Copilot pendant et après la réunion, récapitulatif intelligent", "Instructions personnalisées, souvenirs, agents", "Transcription autorisée par la stratégie de réunion ; personnalisation ouverte"],
        ["Gemini dans Google Workspace", "Synthèse des longs fils Gmail, retouche d'un brouillon", "« Prendre des notes pour moi » dans Meet, une langue par réunion", "Compétences, qui remplacent les Gems", "Édition Workspace éligible ; fonctions activées par l'administrateur"],
        ["ChatGPT", "Contenu de Gmail via une application reliée ; tâche déclenchée par un message", "Transcription ou notes déposées dans la conversation", "Projets, instructions, compétences, tâches planifiées", "Offre de l'espace ; applications autorisées par l'administrateur"],
        ["Claude", "Messagerie reliée par un connecteur", "Transcription ou notes déposées dans la conversation", "Projets à mémoire séparée, compétences", "Mémoire activée par les propriétaires sur Team et Enterprise"],
        ["Vibe (Mistral)", "Lecture et recherche dans Gmail, brouillons jamais envoyés d'office", "Transcription ou notes déposées dans la conversation", "Compétences au format SKILL.md", "Connecteurs ouverts sur l'espace de l'entreprise"],
      ],
    },
    cas: {
      h3: "Cas pratique : préparer le lundi matin d'une responsable des achats",
      contexte: "Une responsable des achats d'une PME industrielle commence chaque semaine par le même travail. Elle parcourt la soixantaine de courriels reçus depuis le vendredi, repère les fournisseurs qui attendent une réponse, vérifie les réunions de la semaine et décide de ses trois priorités. Elle dispose d'un assistant d'entreprise relié à sa messagerie et à son agenda. L'exercice consiste à écrire cette préparation une fois, à la contrôler, puis à la ranger pour le lundi suivant.",
      etapes: [
        "Vérifiez que vous êtes sur le compte professionnel et que l'assistant a bien accès à la messagerie et à l'agenda ; sinon, exportez les courriels concernés dans un fichier.",
        "Copiez la consigne qui suit en remplaçant les noms de projets et de fournisseurs par les vôtres.",
        "Contrôlez la liste des réponses attendues en rouvrant trois fils choisis au hasard.",
        "Corrigez la consigne là où le résultat vous a déçu, puis relancez-la.",
        "Rangez la version finale dans un projet ou une compétence nommée « Lundi achats », ou programmez-la chaque lundi à 8 h si votre outil propose les tâches planifiées.",
      ],
      prompt: "Je suis responsable des achats. Prépare mon lundi à partir de mes courriels reçus depuis vendredi 17 h et de mon agenda de la semaine.\n\n1. Liste les courriels qui attendent une réponse de ma part : expéditeur, objet, ce qui m'est demandé, échéance si elle est écrite. Classe-les en trois groupes : à traiter aujourd'hui, cette semaine, pour information.\n2. Signale les fournisseurs qui n'ont pas répondu à l'une de mes demandes depuis plus de cinq jours ouvrés, avec la date de ma dernière relance.\n3. Pour chaque réunion de la semaine, indique en une ligne ce que je dois préparer et le document à relire.\n4. Propose mes trois priorités de la semaine et explique en une phrase le choix de chacune.\n5. Rédige un brouillon de relance pour chaque fournisseur du point 2. N'envoie rien.\n\nRègles : ne déduis aucune échéance qui n'est pas écrite, note « échéance non précisée ». Pour chaque point, cite l'objet du courriel ou le titre de la réunion d'où il vient. Présente le tout sur un seul écran.",
      resultat: "Un tableau de bord d'une page et quelques brouillons de relance à relire. Le contrôle porte sur trois points : une réponse attendue qui manquerait à la liste, une échéance inventée, un brouillon au ton trop sec pour un fournisseur avec qui la relation est sensible. Les priorités proposées restent une suggestion : la responsable les confronte à ce que sa direction attend d'elle cette semaine.",
    },
    pieges: [
      {
        titre: "Le résumé d'une réunion n'existe que si l'outil l'a entendue",
        texte: "En mode « uniquement pendant la réunion », Teams efface la reconnaissance vocale à la fin de la réunion, et l'onglet Récapitulatif suppose une transcription. Une réunion organisée par un client ou un partenaire échappe à votre Copilot. Prévoyez dans ce cas vos propres notes, ou la transcription fournie par l'organisateur.",
      },
      {
        titre: "Une mémoire active peut ressortir une information au mauvais moment",
        texte: "Un détail confié lors d'un échange ancien peut réapparaître dans une réponse destinée à un autre dossier. Relisez la mémoire de votre assistant une fois par mois, supprimez ce qui ne doit plus servir, et utilisez le chat temporaire de ChatGPT ou le mode incognito de Claude pour les sujets ponctuels.",
      },
      {
        titre: "Le compte personnel n'offre pas les garanties du compte professionnel",
        texte: "Une boîte professionnelle résumée dans un compte gratuit personnel sort du périmètre que l'entreprise a négocié avec l'éditeur. Les conditions de conservation et d'usage des données y relèvent de vos réglages individuels. La règle posée le matin s'applique toute la journée : données internes sur le compte fourni, rien d'autre.",
      },
      {
        titre: "Une routine planifiée continue même quand elle ne sert plus",
        texte: "Une tâche programmée chaque lundi tourne jusqu'à ce qu'on la mette en pause. Notez la date de sa création, relisez ses résultats les premières semaines, et supprimez-la dès qu'elle ne vous fait plus gagner de temps ; les tâches actives sont limitées en nombre selon l'offre.",
      },
    ],
  },
  audience: [
    {
      title: "Managers et responsables d'équipe",
      desc: "Votre semaine se partage entre réunions, arbitrages et courriels. Vous apprenez à préparer une réunion à partir des échanges passés, à obtenir un relevé de décisions fiable et à garder la trace des actions confiées à l'équipe.",
    },
    {
      title: "Fonctions support : achats, RH, finance, juridique",
      desc: "Vous traitez des demandes internes et des documents longs. Vous apprenez à faire résumer un dossier en citant ses pages, à préparer les relances et à ranger vos réponses types dans une consigne réutilisable.",
    },
    {
      title: "Assistants et chargés de coordination",
      desc: "Vous tenez des agendas, des comptes rendus et des tableaux de suivi pour d'autres. Vous apprenez à confier à l'assistant le premier jet de ces travaux et à vérifier ce qui revient avant de le transmettre.",
    },
    {
      title: "Commerciaux, chefs de projet et consultants",
      desc: "Vous jonglez entre plusieurs clients ou chantiers. Vous apprenez à séparer vos dossiers en projets, à préparer un rendez-vous à partir des échanges passés et à planifier votre semaine sur vos vraies échéances.",
    },
  ],
  useCases: [
    { icon: '📧', title: "Vider la boîte du lundi", desc: "Les courriels classés entre à traiter, à suivre et pour information, chacun avec ce qui vous est demandé." },
    { icon: '🔁', title: "Relancer au bon moment", desc: "Les fils restés sans réponse repérés, puis un brouillon de relance par interlocuteur, envoyé par vous." },
    { icon: '📅', title: "Préparer une réunion", desc: "L'ordre du jour, les documents à relire et les questions ouvertes, tirés des échanges précédents." },
    { icon: '📝', title: "Obtenir un relevé de décisions", desc: "Décisions, actions, porteurs et dates extraits de la transcription, contrôlés par un participant." },
    { icon: '📚', title: "Lire un rapport de soixante pages", desc: "Les points qui vous concernent, chacun renvoyé à sa page pour une vérification rapide." },
    { icon: '⚙', title: "Ranger une routine", desc: "Une tâche réussie enregistrée en projet, en compétence ou en tâche planifiée, relancée chaque semaine." },
  ],
  modules: [
    {
      day: 1,
      title: "Module 1 · Régler son assistant et poser ses règles de données",
      duration: '1h',
      description: "Savoir ce que son compte voit et lui donner une fois pour toutes le contexte de son poste.",
      items: [
        "Compte gratuit, compte professionnel, licence : ce que chacun lit de vos données",
        "Instructions personnalisées : fonction, interlocuteurs, forme des réponses",
        "Mémoire : consulter, corriger, couper ; chat temporaire et mode incognito",
        "La règle personnelle de tri des données, écrite par chaque participant",
      ],
      exercise: "Vous rédigez vos instructions permanentes et les testez sur une question de votre semaine.",
    },
    {
      day: 1,
      title: "Module 2 · Traiter sa messagerie avec l'assistant",
      duration: '1h30',
      description: "Résumer, trier et préparer les réponses, en gardant la main sur chaque envoi.",
      items: [
        "Résumé d'un fil dans Outlook ou dans Gmail, selon votre licence",
        "Tri des courriels reçus selon une règle que vous fixez",
        "Brouillons de réponse et de relance à partir de l'historique",
        "Tâche déclenchée par l'arrivée d'un message, quand l'outil la propose",
      ],
      exercise: "Vous triez votre boîte des trois derniers jours et préparez deux relances à relire.",
    },
    {
      day: 1,
      title: "Module 3 · Préparer et exploiter ses réunions",
      duration: '1h15',
      description: "Arriver préparé, puis repartir avec un relevé de décisions vérifié.",
      items: [
        "Ordre du jour et documents à relire tirés des échanges précédents",
        "Copilot dans Teams : modes, transcription, récapitulatif selon la licence",
        "Prise de notes de Meet et réunions organisées à l'extérieur",
        "Relevé décisions, actions, porteurs, échéances, et sa relecture",
      ],
      exercise: "Vous produisez le relevé d'une réunion à partir d'une transcription et contrôlez chaque action.",
    },
    {
      day: 1,
      title: "Module 4 · Lire vite un document long et chercher une information sourcée",
      duration: '1h15',
      description: "Extraire d'un rapport ou d'une recherche ce qui sert à votre décision, avec ses références.",
      items: [
        "Questions ciblées posées au document, liées à votre décision",
        "Chaque affirmation renvoyée à sa page ou à son lien",
        "Recherche web : sources récentes, contrôle des liens, date des chiffres",
        "Ce que l'assistant ignore : faits absents du document, décisions internes",
      ],
      exercise: "Vous tirez d'un document de votre métier une note d'une page dont vous vérifiez trois références.",
    },
    {
      day: 1,
      title: "Module 5 · Organiser sa semaine et ses priorités",
      duration: '45 min',
      description: "Confronter son agenda à ses échéances et décider de ce qui passe en premier.",
      items: [
        "Lecture de l'agenda : réunions à préparer, créneaux libres, conflits",
        "Liste des engagements pris par écrit et de leurs échéances",
        "Proposition de priorités argumentée, que vous arbitrez",
      ],
      exercise: "Vous obtenez le plan de votre semaine prochaine et le corrigez selon vos vraies contraintes.",
    },
    {
      day: 1,
      title: "Module 6 · Transformer une tâche répétitive en consigne réutilisable",
      duration: '1h15',
      description: "Écrire une fois ce que l'on refait chaque semaine et le relancer d'un geste.",
      items: [
        "Projets : fichiers de référence, instructions propres, mémoire séparée",
        "Compétences au format SKILL.md ; passage des Gems aux compétences chez Google",
        "Agents de Copilot Chat et conditions fixées par l'administrateur",
        "Tâches planifiées : fréquence, limites, mise en pause",
      ],
      exercise: "Vous rangez l'une de vos trois tâches hebdomadaires en consigne réutilisable et la testez une seconde fois.",
    },
  ],
  objectives: [
    "Le participant sait régler les instructions et la mémoire de son assistant, et choisir le compte adapté à chaque type de données.",
    "Le participant sait faire résumer et trier sa messagerie, puis préparer des réponses et des relances qu'il relit avant envoi.",
    "Le participant sait préparer une réunion et produire un relevé de décisions contrôlé, selon les fonctions de sa licence.",
    "Le participant sait extraire d'un document long ou d'une recherche une synthèse dont chaque point renvoie à sa source.",
    "Le participant sait planifier sa semaine avec l'assistant et arbitrer lui-même ses priorités.",
    "Le participant sait transformer une tâche répétitive en projet, en compétence, en agent ou en tâche planifiée.",
  ],
  tarifs: {
    titre: "Le prix de la journée, et l'adaptation à vos outils chiffrée à côté",
    paras: [
      "Le formateur commence par un échange avec votre référent informatique : quel assistant, quelle licence, quelles fonctions ouvertes ou fermées par l'administrateur. Il recueille ensuite auprès des participants leurs trois tâches hebdomadaires et quelques pièces de travail, qu'il transforme en exercices. Si ces pièces ne peuvent pas être projetées, il construit des courriels, des transcriptions et des rapports fictifs sur leur modèle. Ce travail d'adaptation fait l'objet d'une ligne distincte du devis.",
      "La journée démarre à 1 980 € HT, que votre groupe intra compte deux inscrits ou douze, le maximum ; à huit participants, cela représente moins de 250 € HT chacun. Le même tarif de départ vaut pour une personne seule. Les salariés relèvent de l'OPCO de leur branche, à saisir avant la session avec le programme et la convention fournis par Masteria. Un indépendant s'adresse à l'AGEFICE ou au FIF-PL, selon le fonds auquel il cotise.",
    ],
  },
  apres: {
    titre: "Après la journée, des routines partagées à l'échelle de l'équipe",
    texte: "Les consignes rangées pendant la formation restent personnelles. Une équipe qui veut les partager a besoin de règles communes : quels projets ou compétences diffuser à tous, quelles données y entrent, qui les tient à jour. Masteria peut construire avec vous les premiers agents ou compétences d'équipe, et rédiger la charte d'usage de l'assistant que l'entreprise a choisi.",
  },
  cta: {
    milieu: "Notez dès maintenant les trois tâches qui vous prennent le plus de temps chaque semaine : la journée les traite en atelier.",
    fin: {
      titre: "Construisons une journée sur la semaine de vos équipes",
      texte: "Dites-nous quel assistant votre entreprise utilise, avec quelle licence, combien de personnes participeraient et quels métiers elles exercent. Nous revenons vers vous avec un programme taillé sur leurs tâches, des dates possibles et un devis.",
    },
  },
  terrain: {
    titre: "Une assistante de direction a outillé ses routines en une journée",
    texte: "En septembre 2026, l'assistante du dirigeant d'une société qui édite des logiciels pour entreprises s'est formée seule, une journée, en visioconférence. Elle voulait que ses tâches de chaque semaine reviennent moins lourdes. La journée s'est faite sur Copilot, déjà en place sur son poste, et sur Claude : elle a appris à monter un comité de direction avec eux, à tirer d'une réunion Teams enregistrée la liste des décisions et des actions, et à décider quelles données vont dans quel outil. Elle a travaillé sur des pièces fictives, comme elle l'avait souhaité, et elle est partie avec ses prompts, ses modèles de documents et un plan pour le mois suivant.",
    lien: '/etudes-de-cas-ia#mission-assistanat-direction',
  },
  liensAssocies: [
    { label: "Sept formations IA courtes, de trois heures à deux jours", href: '/formation-ia-courte' },
    { label: "Écrire mails, comptes rendus et propositions avec l'IA", href: '/formation-ia-ecrits-pro' },
    { label: "Analyser ses données avec l'IA, en deux jours", href: '/formation-ia-analyse-donnees' },
    { label: "Méthode de prompt pour des réponses exploitables", href: '/formation-prompt-engineering' },
    { label: "Formation Microsoft Copilot dans Outlook, Teams et Office", href: '/formation-microsoft-copilot' },
    { label: "Formation IA transverse pour tous les métiers", href: '/formation-ia-transverse' },
  ],
  avisPriorite: ['productivité', 'routines', 'Copilot', 'Multi-outils'],
  faq: [
    {
      q: "Sur quel outil se déroule la formation IA productivité ?",
      a: "Sur celui que votre entreprise a déjà : Microsoft Copilot ou Copilot Chat, ChatGPT, Claude, Gemini dans Google Workspace, ou Vibe de Mistral. Le formateur vérifie avant la session ce que vos licences ouvrent, puis bâtit les exercices sur ces fonctions. Un groupe qui utilise deux assistants travaille sur les deux, avec une règle claire sur les données confiées à chacun.",
    },
    {
      q: "Faut-il une licence Microsoft Copilot payante pour suivre la journée ?",
      a: "Non. Copilot Chat fait partie de Microsoft 365 : dans Outlook, il rédige et répond sur la boîte, l'agenda et les réunions à partir de données limitées. La licence Microsoft Copilot ajoute les conversations Teams et les documents de l'entreprise, ainsi que le récapitulatif intelligent des réunions. La journée montre ce que permet chaque niveau et ce que la licence changerait pour vos équipes.",
    },
    {
      q: "Combien de temps fait-on gagner avec l'IA au travail ?",
      a: "Nous ne promettons pas de chiffre. Le gain dépend des tâches choisies, de la licence et de l'habitude prise après la formation. Chaque participant mesure lui-même, sur ses trois tâches hebdomadaires, le temps passé avant et après. Ce relevé, fait sur ses propres tâches, vaut mieux qu'une moyenne affichée par un éditeur.",
    },
    {
      q: "En quoi cette journée diffère-t-elle de la formation aux écrits professionnels ?",
      a: "Les écrits professionnels travaillent la qualité d'un texte signé : ton, style, relecture. La journée productivité porte sur l'organisation du travail : messagerie, réunions, lectures, priorités et routines. Les deux se complètent, et un groupe peut enchaîner les deux journées.",
    },
    {
      q: "L'assistant peut-il envoyer des courriels à ma place ?",
      a: "Certains outils savent agir dans la messagerie, sous conditions de licence et de réglages. La formation pose une règle constante : l'assistant prépare, vous envoyez. Vibe, par exemple, crée des brouillons dans Gmail que Mistral ne laisse jamais partir d'office, et ChatGPT met en pause une tâche dont l'action demande votre accord.",
    },
    {
      q: "Que deviennent les données que je confie à l'assistant ?",
      a: "Elles suivent les conditions du compte utilisé. Sur les espaces professionnels de ChatGPT et sur Claude Team ou Enterprise, l'éditeur ne s'en sert pas par défaut pour entraîner ses modèles. Sur un compte personnel, vos réglages en décident. La mémoire de l'assistant se consulte et se vide depuis ses paramètres, et la journée apprend à le faire.",
    },
    {
      q: "Comment faire financer la journée ?",
      a: "Masteria détient la certification Qualiopi. Pour des salariés, l'entreprise dépose la demande auprès de son OPCO avant la session, et l'OPCO arrête le montant pris en charge. Dans dix branches gérées par AKTO, dont les commerces de gros et les organismes de formation, l'aide au plan de développement des compétences des structures de moins de 50 salariés est suspendue en 2026. Un indépendant sollicite l'AGEFICE ou le FIF-PL ; un président de SAS sans rémunération n'a accès à aucun de ces fonds. La formation n'étant pas certifiante, le CPF ne s'applique pas.",
    },
  ],
  sources: [
    { name: "Assistance Microsoft : discuter avec Copilot dans Outlook, avec et sans licence", url: 'https://support.microsoft.com/en-us/copilot-outlook' },
    { name: "Assistance Microsoft : utiliser Copilot dans les réunions Microsoft Teams", url: 'https://support.microsoft.com/en-us/office/use-copilot-in-microsoft-teams-meetings-0bf9dd3c-96f7-44e2-8bb8-790bedf066b1' },
    { name: "Microsoft Learn : personnalisation et mémoire de Copilot", url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-personalization-memory' },
    { name: "Microsoft Learn : agents dans Copilot Chat", url: 'https://learn.microsoft.com/en-us/copilot/agents' },
    { name: "Centre d'aide OpenAI : la mémoire dans ChatGPT", url: 'https://help.openai.com/en/articles/8590148-memory-in-chatgpt' },
    { name: "Centre d'aide OpenAI : les projets dans ChatGPT", url: 'https://help.openai.com/en/articles/10169521-projects-in-chatgpt' },
    { name: "Centre d'aide OpenAI : les tâches planifiées dans ChatGPT", url: 'https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt' },
    { name: "Centre d'aide Anthropic : recherche dans les conversations et mémoire de Claude", url: 'https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context' },
    { name: "Aide Gmail : Gemini dans Gmail", url: 'https://support.google.com/mail/answer/14199860?hl=en' },
    { name: "Aide Google Meet : prendre des notes avec Gemini", url: 'https://support.google.com/meet/answer/14754931?hl=en' },
    { name: "Google Workspace : la transition des Gems vers les compétences", url: 'https://knowledge.workspace.google.com/p/gems-migration' },
    { name: "Documentation Mistral : créer une première compétence dans Vibe Work", url: 'https://docs.mistral.ai/getting-started/quickstarts/vibe-work/create-first-skill' },
    { name: "Documentation Mistral : connecteur Google pour Vibe", url: 'https://docs.mistral.ai/studio/connectors/providers/google' },
  ],
}
