// Contenu propre à /formation-claude-ia-paris (guide terrain). Rendu par GeoPage.
// Fonctions Claude vérifiées sur support.claude.com, claude.com/docs et platform.claude.com le 28/09/2026.
// Données économiques : CCI Paris Île-de-France, Chiffres-clés 2025-2026 (sources INSEE). Doctrine cloud : numerique.gouv.fr.
export default {
  slug: 'formation-claude-ia-paris',
  metaDesc: "Formation Claude IA à Paris : Claude dans Excel et PowerPoint, projets partagés, hébergement des données, doctrine cloud de l'État. Intra, Qualiopi, OPCO.",
  intro: "À Paris, Claude entre dans les sièges, les cabinets et les administrations par leurs fichiers : le modèle Excel de l'analyste, la présentation au gabarit du cabinet, le corpus de contrats de la direction juridique. Avant la première session, une question se pose presque toujours : où partent les données. Masteria, basé à Lyon, forme vos équipes parisiennes dans vos locaux ou à distance, sur vos documents, et règle cette question avec votre DSI dès le cadrage.",
  guide: {
    kicker: "Guide terrain Paris",
    h2: "Claude à Paris : des métiers du document, et une question d'hébergement à régler d'abord",
    lead: "L'Île-de-France concentre 34 % des cadres français, et 87,8 % de ses emplois salariés relèvent du tertiaire, contre 80,0 % au niveau national, selon les chiffres-clés 2025-2026 de la CCI Paris Île-de-France. Ces emplois produisent des notes, des modèles et des présentations. Claude s'est installé en 2026 dans les outils où ce travail se fait, Excel et PowerPoint en tête. Dans un siège ou un ministère, la discussion commence pourtant par l'hébergement des données, et la réponse d'Anthropic en septembre 2026 mérite d'être connue avant de signer.",
    sections: [
      {
        h3: "Claude travaille dans les fichiers des analystes et des consultants",
        paras: [
          "Claude pour Excel et Claude pour PowerPoint sont des compléments Office disponibles sur les offres Pro, Max, Team et Enterprise. Dans Excel, Claude lit un classeur à plusieurs onglets, répond avec des références de cellules cliquables, change une hypothèse en gardant les formules qui en dépendent et remonte à la source d'une erreur #REF!. Il ne gère ni les macros VBA ni les tables de données. Dans PowerPoint, il lit le masque des diapositives, les dispositions, les polices et les couleurs du modèle chargé, puis construit ou corrige des diapositives qui respectent ce gabarit.",
          "Pour un cabinet de conseil ou une équipe d'analyse financière, ce second point compte plus que la qualité du texte. Une diapositive hors charte se refait à la main. Les deux compléments partagent le contexte d'une même conversation, et Claude pour Excel peut interroger des connecteurs de données financières comme S&P Global, LSEG ou Daloopa avec vos propres accès.",
        ],
      },
      {
        h3: "Dans un siège, le partage passe par les projets et les artefacts internes",
        paras: [
          "Un projet se crée avec « + Nouveau projet ». Sur Team et Enterprise, il reste privé ou s'ouvre à toute l'organisation, et chaque membre reçoit le droit « Peut afficher » ou « Peut modifier ». La base de connaissances du projet reçoit les documents de référence ; sur les offres payantes, quand elle approche de la limite de contexte, Claude passe en mode de recherche documentaire pour en absorber davantage. Une direction de la communication financière y range son document de référence, ses communiqués passés et sa charte, et toute l'équipe travaille sur la même base.",
          "Les artefacts suivent la même logique. Sur Team et Enterprise, un artefact se partage à l'intérieur de l'organisation, et le lecteur doit être connecté au compte de l'entreprise. La publication sur un lien public existe sur les offres Free, Pro et Max : un collaborateur qui travaille sur un compte personnel peut rendre public un tableau de bord interne en deux clics.",
        ],
      },
      {
        h3: "L'hébergement des données se règle avant la première session",
        paras: [
          "En septembre 2026, Anthropic ne propose pas de région d'hébergement européenne pour l'application Claude. Côté API, la documentation ne connaît que deux valeurs de géographie d'inférence : « global » et « us ». L'offre Enterprise ajoute l'inférence limitée aux États-Unis, les journaux d'audit, SCIM, des durées de conservation personnalisées et le chiffrement par clés gérées par le client.",
          "Deux détails échappent souvent aux DSI. Claude pour Excel n'hérite pas des durées de conservation personnalisées de l'organisation, et son activité n'apparaît pas dans les journaux d'audit Enterprise ; l'historique des conversations reste stocké dans le navigateur. Une entreprise qui exige un traitement en Europe peut en revanche déployer les compléments Office par Amazon Bedrock, Google Cloud Vertex AI ou Azure AI Foundry. C'est alors la plateforme cloud choisie par votre administrateur qui fixe la région de traitement.",
        ],
      },
      {
        h3: "Les administrations centrales suivent la doctrine « cloud au centre »",
        paras: [
          "Paris accueille les administrations centrales de l'État et une bonne part de ses opérateurs. Leur doctrine d'usage du cloud impose, pour les données d'une sensibilité particulière, une offre qualifiée SecNumCloud et protégée contre l'accès d'autorités d'États tiers. Les données personnelles doivent en outre rester conformes au RGPD, avec une attention aux transferts hors de l'Union.",
          "Claude.ai ne répond pas à ces critères. Une formation Claude dans un ministère porte donc sur des usages explicitement autorisés par la direction du numérique : documents publics, textes déjà diffusés, travaux sans donnée personnelle. Nous fixons ce périmètre par écrit avec le service avant la session, et les exercices s'y tiennent.",
        ],
      },
    ],
    table: {
      caption: "Métiers parisiens : où Claude s'insère et ce qu'il faut régler",
      headers: ["Métier", "Surface Claude", "Point de vigilance"],
      rows: [
        ["Consultant en stratégie", "Claude pour PowerPoint sur le gabarit du cabinet ou du client", "Relecture humaine avant tout envoi au client"],
        ["Analyste financier", "Claude pour Excel, références de cellules, connecteurs de données de marché", "Pas de macros VBA ; historique stocké dans le navigateur"],
        ["Juriste de siège", "Projet privé avec corpus de contrats et instructions", "Aucun hébergement européen côté Anthropic ; secret des affaires"],
        ["Communication financière", "Projet partagé et artefact interne (Team, Enterprise)", "La publication publique existe sur les comptes personnels"],
        ["Agent d'administration centrale", "Travail sur documents publics ou autorisés", "Doctrine « cloud au centre », SecNumCloud pour les données sensibles"],
        ["Chargé d'études dans un groupe de médias", "Connecteur Microsoft 365 ou Google Drive", "Les actions d'écriture (mails, fichiers) s'activent par l'administrateur"],
      ],
    },
    cas: {
      h3: "Cas pratique : répondre à un appel d'offres d'une administration centrale",
      contexte: "Prenons un manager d'un cabinet de conseil parisien qui répond à un marché public de conseil lancé par un ministère. Il dispose du règlement de consultation, du cahier des clauses techniques particulières et de la grille de notation, tous publiés par l'acheteur. Il doit rendre en dix jours un mémoire technique au format PowerPoint du cabinet.",
      etapes: [
        "Créer un projet privé « AO conseil ministère » et y importer les trois pièces du marché, plus deux mémoires gagnants anonymisés du cabinet.",
        "Dans « Définir les instructions du projet », écrire les règles du cabinet : ton, longueur, interdiction d'affirmer une référence absente des mémoires fournis.",
        "Lancer le prompt ci-dessous pour obtenir la matrice de conformité et le plan du mémoire.",
        "Ouvrir le gabarit PowerPoint du cabinet, activer Claude pour PowerPoint et lui demander de construire la partie « Compréhension du besoin » à partir du plan validé.",
        "Relire chaque diapositive contre la matrice : une exigence du cahier des charges sans réponse est un point perdu à la notation.",
      ],
      prompt: "Nous répondons à un marché public de conseil lancé par un ministère. Le projet contient le règlement de consultation, le cahier des clauses techniques particulières, la grille de notation et deux anciens mémoires techniques du cabinet, anonymisés.\n\nPremière tâche : construis une matrice de conformité. Une ligne par exigence du cahier des clauses techniques, avec le numéro d'article, une citation courte de l'exigence, le critère de la grille de notation auquel elle se rattache et son poids, puis une colonne « preuve à apporter » qui dit quel type d'élément le mémoire doit contenir.\n\nDeuxième tâche : propose le plan du mémoire technique. L'ordre des parties suit la grille de notation, du critère le plus lourd au plus léger. Pour chaque partie, indique les exigences de la matrice qu'elle couvre et la longueur conseillée en nombre de diapositives, dans la limite fixée par le règlement de consultation.\n\nTroisième tâche : liste les exigences pour lesquelles les anciens mémoires ne contiennent aucune matière réutilisable. Ce sont les zones où l'équipe doit écrire du neuf.\n\nCite toujours l'article et la page des pièces du marché. N'invente aucune référence client, aucun chiffre et aucune certification que les documents ne mentionnent pas. Si une exigence est ambiguë, formule la question à poser à l'acheteur avant la date limite.",
      resultat: "Vous obtenez une matrice de conformité référencée, un plan calé sur la grille de notation, la liste des zones à écrire et les questions à poser à l'acheteur. Les pièces du marché sont publiques, ce qui limite l'enjeu de confidentialité ; les prix et les CV restent hors du projet. Vérifiez chaque citation d'article dans le document source : un renvoi faux dans un mémoire se voit à la première lecture de l'évaluateur.",
    },
    pieges: [
      { titre: "Croire que l'offre Team garde les données en Europe", texte: "Aucune offre Claude ne propose d'hébergement européen en septembre 2026. Enterprise permet de limiter l'inférence aux États-Unis. Pour un traitement en Europe, la voie passe par une plateforme cloud tierce et relève de votre DSI." },
      { titre: "Oublier que le complément Excel échappe aux journaux d'audit", texte: "L'activité de Claude pour Excel n'entre pas dans les journaux d'audit Enterprise et ignore les durées de conservation personnalisées. Elle figure en revanche dans l'API de conformité, en bêta publique." },
      { titre: "Ouvrir avec Claude un classeur reçu d'un tiers", texte: "Anthropic prévient qu'un fichier externe peut contenir des instructions cachées qui poussent le complément à extraire ou modifier des données. Lisez chaque demande de confirmation avant de l'accepter, surtout sur un fichier de fournisseur." },
      { titre: "Publier un artefact au lieu de le partager", texte: "Sur Pro ou Max, « publier » rend l'artefact accessible à toute personne qui a le lien. Les équipes d'un siège travaillent sur un compte Team ou Enterprise, où le partage reste interne." },
      { titre: "Traiter des données sensibles de l'État dans un outil non qualifié", texte: "La doctrine « cloud au centre » réserve ces données aux offres qualifiées SecNumCloud. Un agent qui colle une note non publique dans Claude.ai sort de ce cadre, même avec de bonnes intentions." },
    ],
  },
  faq: [
    { q: "Claude héberge-t-il nos données en France ou en Europe ?", a: "Non, pas en septembre 2026. L'API d'Anthropic propose une inférence mondiale ou limitée aux États-Unis, et l'offre Enterprise ajoute l'option d'inférence américaine uniquement. Les entreprises qui exigent un traitement en Europe passent par Amazon Bedrock, Google Cloud Vertex AI ou Azure AI Foundry, où leur administrateur choisit la plateforme et sa région." },
    { q: "Un ministère ou un opérateur de l'État peut-il utiliser Claude ?", a: "Pour des documents publics ou des travaux sans donnée sensible, la direction du numérique peut l'autoriser. Pour les données d'une sensibilité particulière, la doctrine « cloud au centre » exige une offre qualifiée SecNumCloud, ce que Claude.ai n'est pas. Nous construisons la formation dans le périmètre que votre service a validé." },
    { q: "Team ou Enterprise : quelle offre pour un siège parisien ?", a: "Team convient de 2 à 150 sièges, avec SSO, connecteurs, Claude Code et Cowork inclus. Enterprise ajoute SCIM, journaux d'audit, conservation personnalisée, clés de chiffrement gérées par le client et inférence limitée aux États-Unis ; l'usage y est facturé au tarif de l'API en plus du siège. Le minimum est de 20 sièges en achat direct et de 50 avec l'équipe commerciale d'Anthropic." },
    { q: "Claude respecte-t-il le gabarit PowerPoint de notre cabinet ?", a: "Claude pour PowerPoint lit le masque des diapositives, les dispositions, les polices et les couleurs du fichier ouvert. Des consignes permanentes se règlent dans le champ Instructions des paramètres du complément. Anthropic déconseille de l'utiliser pour un livrable client final sans relecture humaine." },
    { q: "Le complément fonctionne-t-il sur toutes nos versions d'Office ?", a: "Claude pour Excel fonctionne sur Excel pour le web, sur Windows avec Microsoft 365 et sur Mac à partir de la version 16.46. Les compléments Excel et PowerPoint ne fonctionnent pas sur Office 2016 et 2019 en licence perpétuelle, ni sur iPad, ni sur Android. Votre administrateur peut le déployer pour toute l'organisation depuis le centre d'administration Microsoft 365." },
    { q: "Pouvez-vous former des équipes réparties entre Paris et des filiales en région ?", a: "Oui. Masteria, basé à Lyon, intervient en intra dans vos locaux parisiens ou à distance, par groupes de 12 participants au plus. Une filiale en région suit la même session à distance ou une session dédiée sur son site, avec les mêmes exercices construits sur vos documents." },
    { q: "Comment financer une formation Claude pour une équipe parisienne ?", a: "Masteria est certifié Qualiopi : votre OPCO peut prendre en charge la formation selon votre convention collective et vos fonds disponibles. La journée intra est facturée 1 980 € HT pour le groupe. Nous préparons le programme et la convention que votre service formation joint à la demande, déposée avant la session." },
  ],
  sources: [
    { name: "CCI Paris Île-de-France : Chiffres-clés de la région Île-de-France 2025-2026 (données INSEE)", url: "https://www.cci-paris-idf.fr/sites/default/files/2025-06/CC2025-BD.pdf" },
    { name: "Claude Help Center : Use Claude for Excel", url: "https://support.claude.com/en/articles/12650343-use-claude-for-excel" },
    { name: "Claude Help Center : Use Claude for PowerPoint", url: "https://support.claude.com/en/articles/13521390-use-claude-for-powerpoint" },
    { name: "Claude Help Center : créer et gérer des projets", url: "https://support.claude.com/fr/articles/9519177-how-can-i-create-and-manage-projects" },
    { name: "Claude Help Center : partager des artefacts", url: "https://support.claude.com/en/articles/9547008-publish-and-share-artifacts" },
    { name: "Claude Help Center : What is the Team plan?", url: "https://support.claude.com/en/articles/9266767-what-is-the-team-plan" },
    { name: "Claude Help Center : What is the Enterprise plan?", url: "https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan" },
    { name: "Claude Help Center : Set up the Microsoft 365 connector", url: "https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector" },
    { name: "Claude Platform : Data residency (inference geo)", url: "https://platform.claude.com/docs/en/manage-claude/data-residency" },
    { name: "numerique.gouv.fr : les règles de la doctrine « cloud au centre »", url: "https://www.numerique.gouv.fr/services/cloud/doctrine/" },
  ],
}
