/*
 * Études de cas des missions de formation récentes, et retours écrits des participants.
 * Partagé entre /etudes-de-cas-ia (section « Missions de formation ») et le composant
 * MissionsRecentes (pages formation).
 *
 * INTÉGRITÉ : chaque fait vient des dossiers de mission (devis, convention, support,
 * plateforme) ; les retours sont copiés tels quels depuis les questionnaires de fin de
 * formation ou les messages des clients, sans note ni score (demande de Mathias). Seuls
 * les noms de personnes et d'entreprises sont retirés, remplacés entre crochets si besoin.
 * Anonymisation : ni nom, ni marque, ni commune ; un secteur assez large pour ne pas
 * identifier le client. Ne pas qualifier ces cas de « réels ».
 *
 * Mission : { id, outils[], metiers[], secteur, qui, format, date, titre, contexte,
 *             programme[], livrables[], suite, pages[] }
 * Retour  : { id, mission?, outils[], metiers[], pages[], verbatim, attribution, question }
 *   `pages` : UNE page formation principale par retour (pas de doublon d'une page à l'autre).
 *   id = référence interne de l'extraction du 05/10/2026 (plateforme Masteria,
 *   questionnaire_responses / stakeholder_feedback) ; « [2] » = ajout entre crochets
 *   d'un mot manquant dans l'original, signalé comme tel sous les citations.
 * Écartés volontairement : les verbatims des participants qui ont aussi un avis Google
 *   affiché sur le site (pas de double comptage d'une même personne), les réponses
 *   sans appréciation, et la phrase rapportée à l'oral par WALLIX (aucune trace écrite).
 */

export const MISSIONS = [
  {
    id: "editeur-pole-formation",
    outils: ["Claude", "Claude Code"],
    metiers: ["pedagogique"],
    secteur: "Édition de logiciels B2B",
    qui: "Le pôle formation d'un éditeur de logiciels B2B, qui forme partenaires et clients aux produits : sa responsable et deux ingénieures pédagogiques",
    format: "Intra · distanciel · 2 jours (14 h) · formatrice du réseau Masteria",
    date: "septembre 2026",
    titre: "Une équipe pédagogique passe des Projects aux compétences, à Cowork et à Claude Code",
    contexte: "Le pôle conçoit les parcours qui forment partenaires et clients aux produits de l'éditeur, avec un outil auteur e-learning. L'équipe travaillait sur Claude Team depuis quelques semaines et avait testé les Projects. Elle voulait produire ses supports plus vite, alléger l'administratif des sessions et outiller son reporting, à partir de ses propres contenus.",
    programme: ["Deux compétences partagées à toute l'organisation, l'une pour les supports, l'autre pour l'administratif des sessions", "Le squelette d'un parcours certifiant pour les partenaires, du référentiel de compétences jusqu'à l'évaluation", "Un support produit dans les gabarits PowerPoint du pôle à partir d'un module existant", "Des projets partagés pour le pôle, avec le ton de marque dans leurs consignes", "La préparation d'une session confiée à Cowork, un reporting tiré du tableau de suivi, et une première prise en main de Claude Code"],
    livrables: ["deux compétences conservées par le pôle dans Claude Team", "une trame de support dans les gabarits du pôle", "une préparation de session déléguée à Cowork", "le squelette d'un parcours certifiant"],
    suite: "Un bilan à froid est prévu un mois après la formation, sur les usages installés ; il sera transmis à la responsable du pôle avec le bilan pédagogique.",
    pages: ["formation-claude-ia", "formation-claude-pedagogique", "formation-ia-pedagogique", "formation-claude-code", "formation-intelligence-artificielle-distanciel"],
  },
  {
    id: "immobilier-etudes",
    outils: ["Claude"],
    metiers: ["data", "marketing", "finance"],
    secteur: "Immobilier",
    qui: "La direction du marketing stratégique et des études d'un groupe immobilier : formation individuelle de sa responsable analyses et données",
    format: "Individuel · distanciel · 1 jour",
    date: "septembre 2026",
    titre: "Une responsable études passe de ses fichiers de ventes au deck de direction avec Claude",
    contexte: "La responsable analyses et données travaille sur les fichiers de ventes, de clients et de parts de marché, rédige la note des parts de marché et la synthèse d'activité, puis présente la conjoncture à la direction. Elle disposait d'un compte Claude Team d'entreprise, utilisé de façon occasionnelle, et voulait en faire une méthode de travail, de l'analyse jusqu'au support.",
    programme: ["Ses fichiers de ventes et de parts de marché interrogés en français, le fichier clients anonymisé avant tout import", "Des graphiques et une note de lecture, puis le deck de résultats rédigé et généré pour PowerPoint", "Des formules et le nettoyage d'un classeur, vérifiés avant d'être étendus", "Le compte Team réglé, un projet « Études et données » et le kit de marque dans Claude Design", "Une première compétence pour une note récurrente, testée sur un autre fichier"],
    livrables: ["une note de lecture et ses graphiques", "un deck de résultats pour PowerPoint", "un projet « Études et données » et une première compétence"],
    pages: ["formation-claude-ia", "formation-ia-analyse-donnees", "formation-data-ia", "formation-ia-immobilier", "formation-claude-marketing", "formation-intelligence-artificielle-distanciel"],
  },
  {
    id: "gerance-cabinet",
    outils: ["Claude", "NotebookLM"],
    metiers: ["direction", "management"],
    secteur: "Cabinet de géomètres-experts",
    qui: "Le gérant d'un cabinet de géomètres-experts d'une vingtaine de collaborateurs, formé seul",
    format: "Individuel · distanciel · 2 jours (14 h) · formateur du réseau Masteria",
    date: "août 2026",
    titre: "Un gérant de cabinet de géomètres-experts confie à Claude ses devis, ses procès-verbaux et sa messagerie",
    contexte: "Le gérant voulait une mémoire documentaire de la gérance, interrogeable sur ses propres textes plutôt que sur le web, et des automatisations sur sa messagerie Outlook, sous sa validation. Il utilisait déjà ChatGPT et la formation partait des bases. Ce premier parcours outille sa fonction de gérance, sans ses équipes pour l'instant.",
    programme: ["Deux compétences sur ses dossiers : la vérification d'un procès-verbal de bornage contre le plan et l'acte, la réponse aux demandes de devis sur ses modèles existants", "Outlook, l'agenda et OneDrive connectés à Claude : brief du matin, demandes de devis pré-analysées, relances, brouillons relus avant tout envoi", "Des projets par domaine, dont un juridique et un technique en plusieurs langues, et un carnet NotebookLM pour les textes où la citation exacte compte", "Une charte d'usage personnelle, posée dès le premier matin", "Une méthode de prompt, des prompts de référence et la voix du cabinet réglée"],
    livrables: ["des projets par domaine", "deux compétences, l'une qui vérifie les procès-verbaux, l'autre qui répond aux demandes de devis", "les connecteurs Outlook actifs et une routine de gérance testée", "une charte d'usage personnelle"],
    suite: "Une seconde étape est envisagée, après une journée de cadrage : le pilotage interne (qualité, personnel, bilans) et le développement à l'international.",
    pages: ["formation-claude-ia", "formation-ia-dirigeants", "formation-ia-debutant", "formation-intelligence-artificielle-distanciel"],
  },
  {
    id: "assistanat-direction",
    outils: ["Copilot", "Claude", "Multi-outils"],
    metiers: ["assistante"],
    secteur: "Édition de logiciels B2B",
    qui: "La direction générale d'un éditeur de logiciels B2B : formation individuelle d'une assistante de direction",
    format: "Individuel · distanciel · 1 jour",
    date: "septembre 2026",
    titre: "Une assistante de direction outille ses routines avec Copilot et Claude, chaque outil sur son périmètre de données",
    contexte: "L'assistante prépare l'agenda et les déplacements du dirigeant, les comités de direction, les comptes rendus, les notes de frais et la recherche de prestataires, dans Microsoft 365. Copilot était déjà actif sur son poste, elle n'avait pas de compte Claude, et sa priorité déclarée était d'automatiser ses routines répétitives. À sa demande, les ateliers ont tourné sur des documents d'exercice, sans rien de confidentiel à l'écran.",
    programme: ["La préparation d'un comité de direction de bout en bout : ordre du jour, note de synthèse, support PowerPoint et mémo du dirigeant", "Copilot dans Outlook, Teams et Excel : compte rendu décisions-actions tiré d'une réunion enregistrée, contrôle et récapitulatif des notes de frais", "Une règle de tri des données : l'interne et le nominatif dans Copilot, le texte public ou anonymisé dans Claude, et Copilot en cas de doute", "Copilot et Claude réglés dès l'ouverture, puis une méthode de prompt appliquée à des cas de sa semaine", "Un assistant « mail dirigeant » construit dans l'Agent Builder de Copilot, et les blocs-notes Copilot pour suivre un comité"],
    livrables: ["une bibliothèque de prompts d'assistanat", "un gabarit de mail dirigeant et un gabarit de compte rendu décisions-actions", "un suivi des notes de frais outillé dans Excel", "un kit de préparation du comité de direction et un plan d'action à 30 jours"],
    suite: "Un plan d'action à 30 jours fixe les premières tâches à outiller et une mesure du gain à un mois.",
    pages: ["formation-multi-outils", "formation-multi-outils-assistante", "formation-copilot-assistante", "formation-claude-assistante", "formation-ia-assistante", "formation-microsoft-copilot", "formation-intelligence-artificielle-distanciel"],
  },
  {
    id: "interprofession-agricole",
    outils: ["ChatGPT", "Claude", "Gemini", "Copilot", "Perplexity", "Vibe", "Multi-outils"],
    metiers: ["marketing", "communication", "finance", "assistante", "direction"],
    secteur: "Interprofession agricole",
    qui: "Une interprofession agricole du sud de la France et son syndicat de producteurs : seize salariés de la promotion, de la communication, de la gestion, de la direction et du suivi du cahier des charges",
    format: "Intra · présentiel · 3 jours (une plénière, deux ateliers métier)",
    date: "septembre 2026",
    titre: "Une interprofession compare six assistants en plénière, puis les met au travail en atelier marketing et en atelier gestion",
    contexte: "Les deux structures réunissent la promotion et la communication en France et à l'export, la comptabilité, la logistique, la direction et le suivi du cahier des charges. Le niveau de départ était débutant, et la demande tenait en une phrase : que chaque collaborateur sache se servir d'un assistant IA dans son poste dès la semaine suivante.",
    programme: ["Jour 1 en plénière : une méthode de prompt, puis la comparaison de six assistants (ChatGPT, Claude, Gemini, Perplexity, Copilot, Vibe) sur des documents publics de la filière, jusqu'à une grille de choix des outils", "Jour 2, atelier marketing et communication : la voix de marque écrite une fois et placée dans un assistant unique pour le service, puis des contenus déclinés en anglais, un calendrier éditorial, une page optimisée pour le référencement, des visuels, une veille et un bilan de campagne", "Jour 3, atelier gestion : relevés de décisions, fiches tirées d'un texte réglementaire, un assistant pour les instances, un rapprochement de relevé vérifié à la main et un fichier Excel de suivi", "Un premier assistant construit sur deux outils, un Gem et un projet, puis testé avec une information absente de ses documents pour vérifier qu'il ne l'invente pas", "Pour tous, l'usage responsable : le bon compte, le RGPD, l'AI Act et le tri des situations autorisées, à vérifier ou interdites"],
    livrables: ["une grille de choix des outils, remplie par le groupe", "un assistant marketing unique pour le service, dans la voix de la marque", "une page optimisée pour le référencement et un calendrier éditorial", "un assistant de gestion et un fichier Excel de suivi"],
    pages: ["formation-multi-outils", "formation-multi-outils-marketing", "formation-ia-debutant", "formation-mistral-ai", "formation-chatgpt"],
  },
  {
    id: "franchise-gemini",
    outils: ["Gemini", "NotebookLM"],
    metiers: ["direction", "commercial", "marketing", "informatique"],
    secteur: "Réseau de franchise B2B",
    qui: "Le siège d'un réseau de franchise B2B : huit membres de l'équipe de direction, dont deux administrateurs Google Workspace",
    format: "Intra · 2 jours en présentiel, puis 1 jour en classe virtuelle pour les administrateurs",
    date: "septembre 2026",
    titre: "Une équipe de direction de franchise passe à Gemini dans Workspace, et ses administrateurs cadrent la console et la charte",
    contexte: "Le siège travaille sous Google Workspace Business Standard, qui inclut Gemini, et voulait passer de l'essai à l'usage quotidien : animation du réseau, support aux franchisés, flux commerciaux. Deux membres de la direction administrent Workspace ; ils devaient en plus piloter l'activation de Gemini, la sécurité et la conformité.",
    programme: ["Un Gem par personne sur un sujet de son poste, construit sur des documents internes, présenté à l'équipe et confié à un porteur", "Workspace Studio : un flux qui prépare chaque semaine la relance des devis restés sans réponse", "Gemini dans Gmail, Docs, Slides, Meet et Sheets sur les dossiers du siège : support aux franchisés, ton de marque, présentation de la franchise, suivi des commandes", "Un carnet du savoir-faire du réseau dans NotebookLM, nourri des procédures et des fiches techniques, testé sur des questions de terrain", "Jour 3 pour les administrateurs : activation de Gemini, sécurité et journaux de la console, puis l'AI Act, le RGPD et une charte d'usage"],
    livrables: ["un Gem par personne, sur des documents internes", "un carnet de savoir-faire du réseau", "un flux de relance des devis, prêt à activer", "une charte d'usage de l'IA et un plan d'action à 30, 60 et 90 jours pour les administrateurs"],
    suite: "Le plan à 30, 60 et 90 jours prévoit d'activer Gemini par profil et de publier la charte, puis d'outiller la base documentaire, puis d'ouvrir le cadre aux franchisés.",
    pages: ["formation-gemini-entreprise", "formation-gemini-informatique", "formation-ia-dirigeants", "formation-ia-paris"],
  },
]

export const RETOURS = [
  { id: "V27", mission: "editeur-pole-formation", outils: ["Claude"], metiers: ["pedagogique"], pages: ["formation-claude-ia"], verbatim: "La mise en pratique tout au long de la formation nous permettant de rester actif et d'expérimenter nous même. La création d'artefacts par la formatrice adaptée à nos besoins. La réadaptation du contenu du jour 2 sur la partie pratique.", attribution: "Ingénieure pédagogique, éditeur de logiciels B2B · formation Claude, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V26", mission: "editeur-pole-formation", outils: ["Claude"], metiers: ["pedagogique"], pages: ["formation-claude-pedagogique"], verbatim: "Les exercices pratiques et la qualité de l'adaptation des contenus entre le jour 1 et le jour [2]. Bravo et merci.", attribution: "Responsable formation, éditeur de logiciels B2B · formation Claude, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V24", mission: "gerance-cabinet", outils: ["Claude"], metiers: ["management", "direction"], pages: ["formation-claude-ia"], verbatim: "La flexibilité du formateur à mes demandes souvent en digression du contenu d’origine.", attribution: "Gérant, cabinet de géomètres-experts · formation Claude individuelle, août 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V29", mission: "immobilier-etudes", outils: ["Claude"], metiers: ["marketing", "data", "finance"], pages: ["formation-claude-marketing"], verbatim: "Exercices avec mes propres fichiers", attribution: "Responsable études et données, groupe immobilier · formation Claude individuelle, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V28", mission: "editeur-pole-formation", outils: ["Claude"], metiers: ["pedagogique"], pages: ["formation-claude-pedagogique"], verbatim: "De meilleurs pratiques et le bon mindset", attribution: "Responsable formation et commanditaire, éditeur de logiciels B2B · formation Claude, septembre 2026", question: "Réponse du commanditaire à « Qu'observez-vous déjà dans le travail quotidien de vos équipes ? », deux semaines après" },
  { id: "V51", mission: "assistanat-direction", outils: ["Claude", "Copilot", "Multi-outils"], metiers: ["assistante"], pages: ["formation-claude-assistante", "formation-copilot-assistante", "formation-multi-outils-assistante"], verbatim: "Exercices très personnalisés", attribution: "Assistante de direction, éditeur de logiciels B2B · formation IA multi-outils individuelle, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V10", outils: ["Copilot"], metiers: ["ressources-humaines", "management"], pages: ["formation-microsoft-copilot", "formation-copilot-rh"], verbatim: "La formation m'est particulièrement utile dans l'analyse de fichier et préparation de ROI dans le cadre de déploiement d'outils RH.", attribution: "Manager, groupe industriel international · formation Microsoft 365 Copilot, juillet 2026 · retour deux mois après", question: "Réponse à « Décrivez un cas concret où la formation vous a servi », évaluation à froid deux mois après" },
  { id: "V03", outils: ["Copilot"], metiers: ["management", "data"], pages: ["formation-microsoft-copilot", "formation-copilot-management"], verbatim: "Beaucoup de nouvelles choses à mettre en pratique pour analyser des fichiers ou mettre en place un assistant basé sur les best practices existantes.", attribution: "Manager, groupe industriel international · formation Microsoft 365 Copilot, juillet 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V06", outils: ["Copilot"], metiers: ["management"], pages: ["formation-microsoft-copilot", "formation-copilot-management"], verbatim: "Animation claire et sympathique. Les supports étaient personnalisés.\nLes questions ont trouvé des réponses.", attribution: "Manager, groupe industriel international · formation Microsoft 365 Copilot, juillet 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V08", outils: ["Copilot"], metiers: ["management"], pages: ["formation-copilot-management"], verbatim: "Cette formation m‘a fourni une multitude de pistes à explorer pour une utilisation efficace de copilot.", attribution: "Manager, groupe industriel international · formation Microsoft 365 Copilot, juillet 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V11", outils: ["Copilot"], metiers: ["management"], pages: ["formation-copilot-management"], verbatim: "préparer une presentation pour un directeur d'usine sur un process de qualification de process", attribution: "Manager, groupe industriel international · formation Microsoft 365 Copilot, juillet 2026 · retour deux mois après", question: "Réponse à « Décrivez un cas concret où la formation vous a servi », évaluation à froid deux mois après" },
  { id: "V21", outils: ["Copilot"], metiers: ["finance"], pages: ["formation-copilot-finance"], verbatim: "Practical, all examples linked to potentially real business examples.\nClear instructions and assistance from trainer.", attribution: "Responsable finance, groupe industriel international · formation Microsoft 365 Copilot en anglais, septembre 2026", question: "Réponse à « What was most useful to you? », fiche de satisfaction de fin de formation (session en anglais)" },
  { id: "V13", outils: ["Copilot"], metiers: ["management"], pages: [], verbatim: "Exemples concrets. Pratique immédiate.", attribution: "Manager, groupe industriel international · formation Microsoft 365 Copilot, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V46", mission: "interprofession-agricole", outils: ["Multi-outils", "ChatGPT"], metiers: ["assistante"], pages: ["formation-multi-outils", "formation-multi-outils-assistante"], verbatim: "Parcourir les différents modèles d'IA et découvrir la force de chacun. Savoir créer un prompt précis et efficace. Apprendre comment sécuriser ses requêtes (données sensibles…).\nLe fait que le formation soit entièrement personnalisée par rapport à l'entreprise est un très gros plus.", attribution: "Assistante administrative, organisation professionnelle (agroalimentaire) · formation IA multi-outils, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V50", mission: "interprofession-agricole", outils: ["Multi-outils"], metiers: ["assistante", "finance", "direction"], pages: ["formation-multi-outils-assistante"], verbatim: "Découvrir le champs des possibles de l'IA? J'étais loin de penser que l'on pouvait faire tout ça et plus encore", attribution: "Assistante logistique, organisation professionnelle (agroalimentaire) · formation IA multi-outils, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V41", mission: "interprofession-agricole", outils: ["Multi-outils", "ChatGPT"], metiers: ["communication", "marketing"], pages: ["formation-chatgpt", "formation-chatgpt-communication"], verbatim: "La présentation de la fonctionnalité planification sur ChatGPT, elle sera très utile pour la veille quotidienne.", attribution: "Responsable digital, organisation professionnelle (agroalimentaire) · formation IA multi-outils, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V42", mission: "interprofession-agricole", outils: ["Multi-outils"], metiers: ["marketing", "communication"], pages: ["formation-multi-outils-marketing"], verbatim: "Apprendre à créer des assistants \nRevoir la rédaction de prompt notamment pour que l'IA vérifie ses infos sans en inventer", attribution: "Chargée de promotion et d'événementiel, organisation professionnelle (agroalimentaire) · formation IA multi-outils, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V44", mission: "interprofession-agricole", outils: ["Multi-outils"], metiers: [], pages: ["formation-multi-outils"], verbatim: "Rédiger un prompt spécifique à nos besoins et en rapport avec mon activité", attribution: "Collaboratrice, organisation professionnelle (agroalimentaire) · formation IA multi-outils, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
  { id: "V47", mission: "interprofession-agricole", outils: ["Multi-outils"], metiers: ["marketing", "data"], pages: ["formation-multi-outils-marketing"], verbatim: "L'ensemble, la diversité des taches réalisables avecl'IA.", attribution: "Chargée d'études économiques, organisation professionnelle (agroalimentaire) · formation IA multi-outils, septembre 2026", question: "Réponse à « Qu'est-ce qui vous a été le plus utile ? », fiche de satisfaction de fin de formation" },
]

const norm = s => String(s || '').toLowerCase()

// Pertinence : page exacte > outil + métier > outil seul. Plus récent d'abord à pertinence égale.
function classer(items, { page, outil, metier }) {
  const o = norm(outil)
  const score = it => {
    if (page && it.pages?.includes(page)) return 3
    const okOutil = o && it.outils?.some(x => norm(x) === o)
    if (okOutil && metier && it.metiers?.includes(metier)) return 2
    if (okOutil) return 1
    return 0
  }
  return items
    .map((it, i) => ({ it, i, s: score(it) }))
    .filter(x => x.s > 0)
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .map(x => x.it)
}

export const missionsPour = ctx => classer(MISSIONS, ctx)
export const retoursPour = ctx => classer(RETOURS, ctx)
