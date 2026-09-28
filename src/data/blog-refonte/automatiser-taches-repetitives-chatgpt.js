// Article réécrit le 28/09/2026 : automatiser ses tâches répétitives avec ChatGPT.
// Chaque fonction vérifiée sur help.openai.com (versions françaises) le 28/09/2026 :
// projets, compétences, plugins, GPTs (retrait annoncé), tâches planifiées, Work,
// agents d'espace de travail, applications connectées, facturation API.
const HELP = 'https://help.openai.com/fr-fr/articles'

export default {
  slug: 'automatiser-taches-repetitives-chatgpt',
  title: "Automatiser ses tâches répétitives avec ChatGPT : la méthode et les six outils de 2026",
  metaTitle: "Automatiser ses tâches répétitives avec ChatGPT | Masteria",
  metaDesc: "Repérer les tâches à automatiser, puis choisir entre projet, compétence, tâche planifiée, Work et agent ChatGPT, ou Make et n8n. Méthode et limites à jour.",
  dateModified: '2026-09-28',
  readTime: '14 min',
  excerpt: "Six niveaux d'automatisation existent dans ChatGPT en septembre 2026, du prompt enregistré à l'agent d'espace de travail. La méthode pour repérer les bonnes tâches, l'offre requise pour chaque niveau, un cas monté de bout en bout et le moment où passer à Make, n8n ou Zapier.",
  intro: "Pour automatiser une tâche répétitive avec ChatGPT, prenez l'outil le plus léger qui fait le travail. En septembre 2026, ChatGPT en propose six, du prompt enregistré à l'agent d'espace de travail qui tourne seul dans le cloud. Le paysage a bougé cette année. OpenAI prévoit de retirer les GPTs personnalisés au profit des plugins. Les compétences sont disponibles sur les offres Business. Depuis août, une tâche peut se lancer à l'arrivée d'un nouveau message Gmail. Ce guide donne la méthode pour repérer les bonnes tâches, l'échelle des six niveaux avec l'offre requise pour chacun, un cas monté de bout en bout et le moment où il vaut mieux passer à Make, n8n ou Zapier.",
  blocks: [
    { type: 'h2', text: "Repérez d'abord les tâches qui méritent l'automatisation" },
    { type: 'p', text: "Tenez un journal pendant une semaine. Chaque fois que vous refaites une tâche déjà faite, notez-la en une ligne : ce qui arrive (un mail, un export, un formulaire), ce que vous en faites et le temps passé. Le vendredi, vous tenez votre liste de candidates. Passez chacune au crible des cinq questions du tableau." },
    {
      type: 'table',
      headers: ["Critère", "Question à se poser", "Bon signe"],
      rows: [
        ["Fréquence", "La tâche revient-elle au moins chaque semaine ?", "Elle revient chaque jour ou chaque semaine, à date fixe"],
        ["Entrée stable", "L'information arrive-t-elle toujours sous la même forme ?", "Même expéditeur, même objet, même modèle de fichier"],
        ["Sortie vérifiable", "Pouvez-vous contrôler le résultat en moins d'une minute ?", "Une synthèse, un classement, un brouillon à relire"],
        ["Coût d'une erreur", "Une erreur serait-elle rattrapée avant d'atteindre un client ?", "Le résultat passe par vous avant de sortir"],
        ["Données autorisées", "Ces données peuvent-elles entrer dans l'outil selon la politique de l'entreprise ?", "Compte professionnel, données sans caractère sensible"],
      ],
    },
    { type: 'p', text: "Une tâche qui coche les cinq cases part en premier. Le tri des demandes de devis, la synthèse hebdomadaire d'une boîte partagée, la veille sur des concurrents ou la mise au propre de comptes rendus cochent souvent tout. Le calcul d'une paie ou la réponse à une réclamation tendue échouent au quatrième critère : l'erreur coûte trop cher pour être déléguée à une machine qui ne doute pas." },

    { type: 'h2', text: "Six niveaux d'automatisation dans ChatGPT" },
    { type: 'p', text: "Chaque niveau ajoute de l'autonomie et des conditions. Montez d'un cran quand le niveau inférieur montre sa limite." },
    {
      type: 'table',
      headers: ["Niveau", "Outil", "Ce qui le déclenche", "Offre requise", "Usage type"],
      rows: [
        ["1", "Prompt réutilisable", "Vous, en le collant", "Toutes", "Une consigne précise que vous relancez à la demande"],
        ["2", "Projet", "Vous, dans le projet", "Toutes les offres avec compte connecté", "Un dossier suivi avec ses fichiers et ses règles"],
        ["3", "Compétence", "ChatGPT, quand elle est utile", "Business, Enterprise, Healthcare, Edu", "Une méthode qui s'applique partout"],
        ["4", "Tâche planifiée", "Une heure fixe", "De Free à Enterprise, avec des limites par offre", "Un point chaque lundi, une veille quotidienne"],
        ["5", "Tâche déclenchée par un événement, dans Work", "Un nouveau message Gmail, un message Slack, une activité GitHub", "Plus, Pro, Business, Enterprise, Edu", "Traiter chaque demande dès son arrivée"],
        ["6", "Agent d'espace de travail", "Un utilisateur, un planning, Slack ou une API", "Business, Enterprise", "Une routine partagée par une équipe"],
      ],
    },

    { type: 'h2', text: "Niveaux 1 et 2 : le prompt réutilisable, puis le projet" },
    { type: 'p', text: "Un prompt réutilisable tient en cinq blocs. Le rôle et le contexte disent qui vous êtes et pour qui vous travaillez. L'entrée décrit ce que vous allez coller. Les étapes fixent l'ordre du traitement. Le format de sortie précise le tableau ou le plan attendu. La règle de doute dit quoi faire quand l'information manque, et c'est le bloc que tout le monde oublie. Sans elle, le modèle comble les trous avec des réponses plausibles et fausses." },
    { type: 'p', text: `Quand le même prompt sert dix fois par semaine sur le même sujet, passez au <a href="${HELP}/10169521-projects-in-chatgpt">projet</a>. Sélectionnez Nouveau projet dans la barre latérale, puis ouvrez le menu (•••) et Paramètres du projet pour y coller vos instructions. Elles s'appliquent à toutes les conversations du projet et remplacent vos instructions personnalisées globales. Ajoutez vos documents de référence, ou collez le lien d'un dossier Google Drive ou d'un canal Slack comme source. Une réponse réussie peut être enregistrée dans les sources du projet pour servir de modèle aux suivantes.` },
    { type: 'p', text: "Le projet se partage avec deux niveaux d'accès. L'accès Chat permet de consulter et d'utiliser le projet. L'accès Modification permet aussi de changer les instructions et les fichiers. Une équipe commerciale peut travailler dans un même projet avec les mêmes règles de ton et la même grille de prix. Une limite à connaître : une conversation créée avec un GPT ne peut pas être déplacée dans un projet." },

    { type: 'h2', text: "Niveau 3 : faire d'une routine une compétence" },
    { type: 'p', text: `Une <a href="${HELP}/20001066-skills-in-chatgpt">compétence</a> est un workflow réutilisable : des instructions, des exemples, parfois du code. Une fois installée, ChatGPT l'utilise de lui-même dans n'importe quelle conversation où elle sert. Elle est réservée aux offres Business, Enterprise, Healthcare et Edu. Pour en créer une, ouvrez Plugins dans la barre latérale, puis l'onglet Compétences, Créer et Créer avec le chat. Vous pouvez aussi demander dans une conversation : « crée une compétence qui… ». ChatGPT pose des questions de précision, puis propose d'installer la compétence.` },
    { type: 'p', text: "La différence avec le projet se résume en une phrase. Le projet garde le contexte d'un sujet, la compétence garde une façon de faire. Un projet « Client Durand » contient l'historique de ce client. Une compétence « Classer une demande de devis » s'applique à tous les clients, dans tous les projets. Les deux se combinent. Une compétence se partage avec des collègues ou avec tout l'espace de travail, selon les droits que l'administrateur a ouverts." },
    { type: 'callout', title: "Les GPTs personnalisés sont en fin de vie", text: `L'aide d'OpenAI annonce le <a href="${HELP}/8554397-creating-and-editing-gpts">retrait des GPTs personnalisés</a> et recommande de migrer vers les plugins, qui regroupent instructions et applications connectées. Pour les espaces Enterprise concernés, le retrait est planifié au 11 décembre 2026, avec un parcours de migration déployé à partir du 17 septembre. Les autres offres doivent suivre le même calendrier. Les comptes personnels (Free, Go, Plus, Pro) ne peuvent déjà plus créer de nouveaux GPTs. Ne construisez plus rien de neuf sur un GPT : recensez ceux qui existent, puis préparez leur passage en compétence ou en plugin.` },

    { type: 'h2', text: "Niveaux 4 et 5 : les tâches qui tournent sans vous" },
    { type: 'p', text: `Une <a href="${HELP}/10291617-scheduled-tasks-in-chatgpt">tâche planifiée</a> s'écrit en une phrase : « chaque lundi à 8 h, résume les annonces de la semaine sur tel sujet ». Elle apparaît ensuite dans Planifiées, où vous pouvez la modifier, la mettre en pause ou la supprimer. Les notifications se règlent dans Paramètres, puis Notifications : push, e-mail ou les deux.` },
    { type: 'p', text: "Le nombre de tâches actives dépend de l'offre : 3 en Free et Go, 5 en Plus, 10 en Business et Edu, 15 en Pro et Enterprise. En Free, une tâche récurrente tourne au plus une fois par jour, sur des créneaux flexibles (matin, après-midi, nuit). Les offres payantes autorisent un rythme horaire et une heure exacte. Les tâches planifiées ne prennent en charge ni la voix ni les GPTs." },
    { type: 'p', text: "Un piège coûte cher aux débutants. Une tâche créée dans un projet n'a pas accès aux fichiers de ce projet. Si votre synthèse du lundi dépend d'une grille ou d'un modèle rangé dans le projet, recopiez les règles utiles dans les instructions de la tâche, ou faites-lui lire la source par une application connectée." },
    { type: 'p', text: `Le niveau 5 passe par Work. OpenAI décrit <a href="${HELP}/20001275-chatgpt-work-and-codex">Work</a> comme un agent conçu pour les tâches longues en plusieurs étapes, disponible sur les offres payantes éligibles. Depuis le 25 août 2026 sur l'offre Business, il accepte des tâches déclenchées par un événement. Connectez d'abord Gmail, Slack ou GitHub dans Paramètres, rubrique Plugins (Applications sur certaines versions). Ouvrez ensuite Work et décrivez l'événement et l'action. ChatGPT vous montre le Déclencheur, la Condition et le Prompt à valider.` },
    { type: 'ul', items: [
      "Gmail : un nouveau message, filtrable par expéditeur ou par objet.",
      "Slack : un nouveau message dans un canal, à condition d'y ajouter @ChatGPT.",
      "GitHub : l'activité des pull requests d'un dépôt autorisé.",
      "Plafond commun à toutes vos tâches de ce type : 30 exécutions par heure et 720 par jour.",
      "Une action qui envoie un message ou modifie des données peut demander votre approbation : la tâche se met alors en pause jusqu'à votre réponse.",
    ] },
    { type: 'p', text: "Une tâche se partage avec les membres de l'espace de travail. Chaque destinataire en crée une copie, avec ses propres applications et ses propres droits. Le lien de partage montre l'intégralité des instructions : n'y mettez jamais de donnée sensible. Work suit les mêmes règles d'usage que Codex, avec un quota inclus dans l'offre et des crédits en supplément au-delà." },

    { type: 'h2', text: "Niveau 6 : l'agent d'espace de travail, pour une routine d'équipe" },
    { type: 'p', text: `Les <a href="${HELP}/20001143-chatgpt-workspace-agents-for-enterprise-and-business">agents d'espace de travail</a> visent les offres Business et Enterprise. Sur Enterprise, ils sont désactivés par défaut et l'administrateur les active. Ouvrez Agents dans la barre latérale, puis Parcourir les modèles ou Créer. Vous décrivez ce que l'agent doit faire, vous relisez le plan proposé, puis vous ajustez dans le générateur. Le bouton Prévisualiser permet de tester l'agent sur un exemple avant de le publier.` },
    { type: 'p', text: "Dans le générateur, vous ajoutez des applications (Google Calendar, Google Drive, Slack, SharePoint), des compétences, des fichiers et, pour les équipes techniques, des serveurs MCP personnalisés (un standard qui relie un assistant à un logiciel). L'accès se règle sur trois niveaux : privé, toute personne de l'organisation qui a le lien, publication dans l'annuaire de l'organisation. L'agent peut tourner selon un planning, répondre dans un canal Slack ou partir d'un appel API envoyé par un autre logiciel." },
    { type: 'p', text: "Un réglage demande de la prudence. Pour chaque application, l'agent s'authentifie soit avec le compte de la personne qui le lance, soit avec un compte qui lui appartient. Dans le second cas, tous les utilisateurs de l'agent agissent avec les droits de ce compte partagé. Réservez ce mode aux accès en lecture sur des données peu sensibles." },

    { type: 'h2', text: "Cas pratique : le point hebdomadaire des demandes de devis" },
    { type: 'p', text: "Prenons un scénario pédagogique. Une assistante commerciale travaille dans une PME de négoce de fournitures industrielles équipée de ChatGPT Business. Les demandes de devis arrivent dans une boîte Gmail partagée, une trentaine par semaine. Elle veut que chaque demande soit classée dès son arrivée, avec un brouillon de réponse, et recevoir le lundi matin un point sur la semaine écoulée." },
    { type: 'ol', items: [
      "Elle crée un projet « Demandes de devis » et y dépose le catalogue produits en PDF et la liste des délais de livraison par famille. Les instructions du projet fixent le ton des réponses et la règle de ne jamais citer un prix absent du catalogue. Ce projet lui sert pour les réponses qu'elle rédige elle-même.",
      "Elle ouvre une conversation et colle le prompt ci-dessous pour créer la compétence de classement. ChatGPT pose ses questions, puis elle installe la compétence.",
      "Dans Work, elle connecte la boîte Gmail et crée une tâche : à chaque nouveau message dont l'objet contient « devis », appliquer la compétence et préparer un brouillon. Elle précise que rien n'est envoyé sans son accord.",
      "Elle crée la tâche du lundi 8 h hors du projet, puisqu'une tâche de projet ne lit pas les fichiers du projet. Les règles utiles sont recopiées dans ses instructions.",
      "Pendant deux semaines, elle contrôle chaque classement. Ensuite, elle en vérifie cinq au hasard chaque vendredi et corrige la compétence quand une erreur revient.",
    ] },
    { type: 'callout', title: "Prompt pour créer la compétence", text: "Crée une compétence nommée « Classer une demande de devis ». Elle s'applique quand je te donne un mail de client ou de prospect qui demande un prix, une disponibilité ou un délai. Nous sommes une PME de négoce de fournitures industrielles et nous vendons à des ateliers de maintenance et à des bureaux d'études. Pour chaque mail, commence par extraire le nom de l'entreprise, le nom du contact, les références ou descriptions de produits demandés, les quantités et la date de livraison souhaitée. Classe ensuite la demande dans l'une de ces quatre catégories : devis standard sur catalogue, demande hors catalogue à transmettre au responsable des achats, relance d'un devis déjà envoyé, question technique sans demande de prix. Indique enfin le niveau d'urgence, élevé si le client évoque un arrêt de production ou une date à moins de cinq jours ouvrés. Présente le résultat en tableau, puis propose un brouillon de réponse de cinq phrases au plus, au vouvoiement, qui confirme la réception et annonce le délai de réponse. N'invente jamais de prix, de référence ou de délai : si une information manque, écris « à vérifier » dans la case et formule la question à poser au client dans le brouillon." },
    { type: 'p', text: "Le résultat attendu est un tableau par demande et un brouillon prêt à relire. Trois vérifications restent humaines. La référence produit doit exister dans le catalogue, parce qu'un modèle peut inventer un code plausible. Le classement « hors catalogue » doit arriver chez le bon acheteur. L'urgence doit s'appuyer sur une phrase du client que l'on retrouve dans le mail. Chaque correction apportée à la compétence profite ensuite à toutes les demandes suivantes." },

    { type: 'h2', text: "Quand passer à Make, n8n ou Zapier" },
    { type: 'p', text: "ChatGPT sait lire vos applications connectées et y mener les actions prises en charge, avec votre approbation quand elles changent quelque chose. Au-delà, un orchestrateur prend le relais. Make, n8n et Zapier enchaînent des étapes entre logiciels et appellent les modèles d'OpenAI par l'API. L'usage de l'API se facture à part de l'abonnement ChatGPT, selon les modèles et le volume de texte traité." },
    {
      type: 'table',
      headers: ["Votre besoin", "Restez dans ChatGPT si", "Passez à un orchestrateur si"],
      rows: [
        ["Écrire dans un logiciel métier", "L'application existe dans ChatGPT et l'action est prise en charge", "Il faut créer une fiche dans un ERP, un CRM ou un outil sans application ChatGPT"],
        ["Enchaîner des étapes", "L'enchaînement reste souple et un humain valide à la fin", "Les étapes doivent suivre des conditions fixes, dans le même ordre à chaque fois"],
        ["Volume", "Quelques dizaines d'exécutions par jour", "Des centaines d'éléments par jour, au-delà des plafonds de ChatGPT"],
        ["Traçabilité", "Le résultat se relit dans la conversation", "Il faut un journal d'exécution, des reprises sur erreur et des alertes"],
        ["Hébergement des données", "Le cloud d'OpenAI convient à votre politique", "Les données doivent rester sur vos serveurs : n8n peut s'installer chez vous"],
      ],
    },
    { type: 'p', text: "Une règle de bon sens aide à trancher. Tant qu'une personne relit chaque résultat, ChatGPT suffit. Quand plus personne ne regarde le détail, il faut un outil qui garde la trace de chaque exécution." },

    { type: 'h2', text: "Les limites à connaître avant d'automatiser" },
    { type: 'ul', items: [
      "Les chiffres et les références : un modèle peut produire un prix, un numéro d'article ou une date plausibles et faux. Donnez-lui la source et exigez « à vérifier » quand elle manque.",
      `La confidentialité : sur les offres Business et Enterprise, OpenAI indique ne pas utiliser par défaut les données de l'entreprise pour entraîner ses modèles (<a href="https://openai.com/fr-FR/enterprise-privacy/">confidentialité des entreprises</a>). Sur un compte personnel, vérifiez les réglages de contrôle des données avant d'y mettre un document de travail.`,
      "Les arrêts silencieux : une tâche se met en pause si elle reste inactive, si une action attend votre approbation ou si sa conversation est supprimée. Ouvrez Planifiées chaque semaine.",
      "Les réglages de l'administrateur : dans un espace géré, les applications, les compétences, Work et les agents dépendent des droits ouverts par l'administrateur. Vérifiez-les avant de promettre une automatisation à une équipe.",
      "Le coût : Work et les agents consomment un quota, puis des crédits. Surveillez la consommation le premier mois.",
      "La validation : tout ce qui sort de l'entreprise, un mail client ou un devis, passe par une personne.",
    ] },
    { type: 'p', text: "L'automatisation la plus rentable reste souvent la plus modeste : une compétence bien écrite et une tâche du lundi. Le reste se construit sur ce socle, une routine après l'autre." },
    { type: 'callout', title: "Construire vos premières automatisations", text: "La formation ChatGPT de Masteria fait travailler chaque participant sur ses propres tâches, avec les fonctions de l'offre ChatGPT de votre entreprise : projet, compétence, tâche planifiée et règles de contrôle. Programme sur la page <a href=\"/formation-chatgpt\">formation ChatGPT</a>." },
  ],
  faq: [
    { q: "Faut-il un abonnement payant pour automatiser avec ChatGPT ?", a: "Les projets et les tâches planifiées existent en Free, avec 3 tâches actives au plus et un rythme d'une fois par jour au maximum. Les tâches déclenchées par un événement demandent une offre Plus, Pro, Business, Enterprise ou Edu. Les compétences et les agents d'espace de travail sont réservés aux offres professionnelles." },
    { q: "Combien de tâches planifiées peut-on créer ?", a: "Le nombre de tâches actives dépend de l'offre : 3 en Free et Go, 5 en Plus, 10 en Business et Edu, 15 en Pro et Enterprise. Au-delà, il faut mettre en pause ou supprimer une tâche. Les tâches déclenchées par un événement sont limitées à 30 exécutions par heure et 720 par jour, toutes tâches confondues." },
    { q: "Les GPTs personnalisés vont-ils disparaître ?", a: "OpenAI prévoit de les retirer et recommande de migrer vers les plugins. Pour les espaces Enterprise concernés, le retrait est planifié au 11 décembre 2026 et les autres offres doivent suivre le même calendrier. Les comptes personnels ne peuvent déjà plus créer de nouveaux GPTs." },
    { q: "ChatGPT peut-il envoyer des mails à ma place ?", a: "Une application connectée peut mener des actions prises en charge, comme préparer ou envoyer un message, selon les droits accordés. Une action qui envoie un message ou modifie des données peut demander votre approbation, et la tâche attend alors votre réponse. Pour un mail client, gardez cette validation." },
    { q: "Quelle différence entre un projet et une compétence ?", a: "Le projet garde le contexte d'un sujet : ses conversations, ses fichiers, ses instructions. La compétence garde une méthode, que ChatGPT applique dans n'importe quelle conversation où elle sert. Un projet par client et une compétence par type de traitement se combinent bien." },
    { q: "Quand faut-il passer à Make, n8n ou Zapier ?", a: "Quand il faut écrire dans un logiciel sans application ChatGPT, enchaîner des étapes fixes, traiter de gros volumes ou garder un journal d'exécution. Ces outils appellent l'API d'OpenAI, facturée à part de l'abonnement ChatGPT. n8n peut s'installer sur vos serveurs si les données doivent y rester." },
  ],
  sources: [
    { name: "OpenAI, Projets dans ChatGPT", url: `${HELP}/10169521-projects-in-chatgpt` },
    { name: "OpenAI, Les compétences dans ChatGPT", url: `${HELP}/20001066-skills-in-chatgpt` },
    { name: "OpenAI, Plugins dans ChatGPT et Codex", url: `${HELP}/20001256-plugins-dans-chatgpt-et-codex` },
    { name: "OpenAI, Créer et modifier des GPT (retrait annoncé)", url: `${HELP}/8554397-creating-and-editing-gpts` },
    { name: "OpenAI, Tâches planifiées dans ChatGPT", url: `${HELP}/10291617-scheduled-tasks-in-chatgpt` },
    { name: "OpenAI, ChatGPT Work et Codex", url: `${HELP}/20001275-chatgpt-work-and-codex` },
    { name: "OpenAI, agents d'espace de travail pour Enterprise et Business", url: `${HELP}/20001143-chatgpt-workspace-agents-for-enterprise-and-business` },
    { name: "OpenAI, Applications connectées dans ChatGPT", url: `${HELP}/11487775-connected-apps-in-chatgpt` },
    { name: "OpenAI, notes de version ChatGPT Business", url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes" },
    { name: "OpenAI, facturation de ChatGPT et de la plateforme API", url: `${HELP}/9039756-managing-billing-for-chatgpt-and-the-api-platform` },
    { name: "OpenAI, confidentialité des entreprises", url: "https://openai.com/fr-FR/enterprise-privacy/" },
  ],
}
