// Contenu propre à /formation-copilot-assistante (guide terrain). Rendu par SpokePage.
export default {
  slug: 'formation-copilot-assistante',
  updatedAt: '2026-09-28',
  updatedLabel: 'Programme à jour · septembre 2026',
  metaDesc: "Formation Copilot pour assistante de direction : boîte mail déléguée du dirigeant, brief du matin planifié, récapitulatif Teams, ordres du jour Outlook.",
  intro: "Une assistante de direction travaille dans la boîte mail et l'agenda d'un autre. Microsoft 365 Copilot a longtemps ignoré cette réalité : il ne voyait que la boîte principale de l'utilisateur. Depuis 2026, il sait résumer et rédiger dans une boîte déléguée, avec des limites précises que cette formation vous apprend à contourner. Vous repartez avec votre brief du matin automatisé, vos ordres du jour et vos relevés de décisions.",
  guide: {
    kicker: "Guide terrain",
    h2: "Copilot pour l'assistanat de direction : ce qu'il fait dans la boîte du dirigeant, et ce qu'il vous laisse",
    lead: "Le métier d'assistante se joue dans la boîte du dirigeant, dans son calendrier et dans les réunions qu'il préside. Copilot y lit et y rédige désormais, avec la licence Microsoft Copilot et un accès délégué complet. Il ne crée ni ne déplace encore de réunion dans l'agenda du dirigeant et n'envoie rien en son nom. Confiez-lui la lecture et le premier jet, et gardez la main sur l'agenda.",
    sections: [
      {
        h3: "La boîte déléguée s'ouvre à Copilot sous deux conditions",
        paras: [
          "Microsoft a ouvert Copilot aux boîtes partagées et aux boîtes déléguées. Il vous faut la licence Microsoft Copilot et un accès délégué complet à la boîte du dirigeant ; une autorisation sur quelques dossiers partagés ne suffit pas, d'après l'aide Microsoft. Copilot suit les droits déjà en place et n'élargit jamais votre accès.",
          "Dans cette boîte, Copilot résume les mails et prépare des brouillons de réponse. Il résume aussi les éléments du calendrier délégué. Il ne sait pas encore trier la boîte (marquer, classer, supprimer), envoyer au nom du dirigeant ni planifier ou modifier une réunion dans son agenda. Microsoft annonce ces actions pour plus tard. Votre historique de conversation reste séparé de celui du dirigeant.",
          "Dans l'application Copilot, nommez la boîte dans la demande : « résume les mails reçus depuis hier soir dans la boîte de Claire Martin ». La touche / propose les personnes par leur nom.",
        ],
      },
      {
        h3: "Le brief du matin se prépare avant votre arrivée",
        paras: [
          "Copilot Chat permet de planifier une invite. Vous survolez une demande que vous avez déjà écrite, vous choisissez « Planifier cette requête », puis l'heure et la fréquence. La réponse arrive dans la liste des conversations, à gauche, avec une notification par mail si vous la demandez. Microsoft limite l'usage à dix invites planifiées par personne, et la fonction demande la licence Microsoft Copilot.",
          "Dix créneaux couvrent la semaine d'une direction : le brief de la boîte déléguée chaque matin à 7 h 30, la liste des mails restés sans réponse le vendredi, les documents envoyés par les participants la veille du comité.",
        ],
      },
      {
        h3: "Outlook prépare les réunions que vous organisez vous-même",
        paras: [
          "Dans le nouvel Outlook, les fonctions de réunion s'appliquent à votre propre calendrier. « Planifier avec Copilot », dans la barre d'outils d'une conversation, crée une invitation avec un titre, un ordre du jour et le fil de mails en pièce jointe. À la création d'une réunion, le bouton Copilot de la description propose « Rédiger automatiquement un ordre du jour », à garder avec « Conserver » ou à retravailler avec « Raccourcir ». Ces deux fonctions demandent la licence.",
          "Pour un comité que le dirigeant préside, organisez la réunion depuis votre calendrier et invitez-le : vous gardez les fonctions Copilot et le contrôle des options. La replanification automatique, qui déplace une réunion en cas de conflit, ne traite ni les calendriers partagés ni les réunions de plus de cinq heures.",
        ],
      },
      {
        h3: "Le récapitulatif Teams sert le relevé de décisions, s'il existe",
        paras: [
          "Après une réunion Teams enregistrée ou transcrite, l'onglet Récapitulatif rassemble les notes IA, les tâches de suivi, les mentions de noms et les chapitres. Tous les invités de l'organisation y ont accès, y compris à ce qui s'est dit sur un sujet sensible.",
          "Pour un comité où l'on parle de rémunérations, de cession ou de contentieux, Teams propose une autre voie. Dans les options de la réunion, rubrique « Copilot et d'autres IA », le choix « Uniquement pendant la réunion » laisse Copilot répondre en séance, sans enregistrement ni transcription. Après la réunion, il n'y a plus rien à interroger : demandez à Copilot de dresser la liste des décisions avant la fin de la séance et copiez-la dans votre relevé.",
        ],
      },
      {
        h3: "Les courriers de la direction gardent leur ton grâce aux références",
        paras: [
          "Dans Word, « Créer un brouillon avec Copilot » accepte des références : tapez / pour désigner un ancien courrier, un fil de mails ou une réunion. Désignez deux lettres que le dirigeant a déjà signées sur un sujet proche, et Copilot en reprend le registre. Dans Outlook, « Coaching par Copilot » relit un mail avant envoi et commente le ton et la clarté.",
          "Pour un dossier long (conseil d'administration, séminaire, déménagement de siège), un bloc-notes Copilot rassemble les mails, les fichiers et les notes de réunion comme références. Une réponse utile devient une page Copilot partageable avec « Modifier dans la page ».",
        ],
      },
    ],
    table: {
      caption: "Les tâches d'assistanat et leur traitement dans Microsoft 365 Copilot en septembre 2026",
      headers: ["Tâche", "Où la faire", "Condition ou limite"],
      rows: [
        ["Trier la boîte du dirigeant chaque matin", "Application Copilot, invite planifiée qui nomme la boîte", "Licence et accès délégué complet ; résumé et brouillon uniquement"],
        ["Répondre au nom du dirigeant", "Brouillon Copilot dans la boîte déléguée", "L'envoi reste manuel, relisez les dates et les montants"],
        ["Organiser un comité de direction", "Votre calendrier, « Rédiger automatiquement un ordre du jour »", "Copilot ne crée pas de réunion dans l'agenda délégué"],
        ["Rédiger le relevé de décisions", "Teams, onglet Récapitulatif, tâches de suivi", "Transcription ou enregistrement nécessaire ; récap visible des invités"],
        ["Tenir une réunion confidentielle", "Options de réunion, « Uniquement pendant la réunion »", "Aucun récapitulatif après la séance"],
        ["Préparer un courrier officiel", "Word, « Créer un brouillon avec Copilot » et références par /", "Vérifier noms, titres et civilités"],
      ],
    },
    cas: {
      h3: "Cas pratique : le dossier du comité de direction du lundi",
      contexte: "Prenons l'assistante du directeur général d'une ETI, avec la licence Microsoft Copilot et un accès délégué complet à la boîte de son directeur. Le comité de direction se réunit chaque lundi à 9 h, et elle envoie l'ordre du jour le vendredi.",
      etapes: [
        "Le vendredi à 14 h, dans l'application Microsoft 365 Copilot, elle ouvre une conversation, tape / pour désigner la boîte du directeur puis la réunion du comité précédent, et colle le prompt ci-dessous.",
        "Elle relit la réponse, supprime un point qu'elle sait déjà traité, et crée dans son propre calendrier la réunion du lundi en invitant le directeur et les membres du comité.",
        "Dans la description de l'invitation, elle clique sur le bouton Copilot, choisit « Rédiger automatiquement un ordre du jour », puis remplace la proposition par l'ordre du jour validé.",
        "Elle laisse la transcription active pour ce comité ordinaire. Pour la séance mensuelle consacrée aux ressources humaines, elle choisira « Uniquement pendant la réunion ».",
        "Elle survole son prompt dans Copilot Chat, clique sur « Planifier cette requête » et le programme chaque vendredi à 14 h.",
      ],
      prompt: "Je suis l'assistante du directeur général. Je prépare le comité de direction de lundi 9 h.\n\nÀ partir des mails reçus depuis lundi dernier dans la boîte du directeur et du récapitulatif du comité de la semaine dernière, prépare trois éléments.\n\n1. Les points à inscrire à l'ordre du jour. Pour chacun, donne l'expéditeur, la date du mail et une phrase qui résume ce qui est attendu du comité : une information, un avis ou une décision.\n2. Les tâches de suivi décidées la semaine dernière, avec leur responsable, en séparant celles pour lesquelles un mail confirme qu'elles sont faites et celles pour lesquelles je ne trouve aucune trace.\n3. Les pièces jointes reçues cette semaine qui devront être projetées, avec le nom exact de chaque fichier.\n\nNe propose aucun point qui ne s'appuie pas sur un mail ou sur le récapitulatif. Si deux mails se contredisent sur une date ou un chiffre, signale-le sans trancher. Réponds en tableaux, un par partie.",
      resultat: "Copilot rend trois tableaux : les points proposés, le suivi des décisions et les pièces à projeter. L'assistante contrôle trois choses. Les dates relatives (« demain », « la semaine prochaine ») sont calculées depuis la date du mail et Copilot peut se tromper de référence. Les tâches marquées sans trace sont les relances à faire avant lundi. Les pièces jointes citées doivent exister dans la boîte, car Copilot peut mal recopier un nom de fichier. Le gain principal porte sur la deuxième partie, qui demande d'ordinaire de relire une semaine de mails.",
    },
    pieges: [
      {
        titre: "Deux pages d'aide Microsoft qui se contredisent",
        texte: "La foire aux questions de Copilot dans Outlook indique encore que Copilot ne fonctionne que sur la boîte principale. Une page plus récente décrit l'ouverture aux boîtes déléguées. Le comportement dépend de la version d'Outlook et du déploiement dans votre entreprise. Testez dans l'application Copilot avant d'organiser votre routine autour de cette fonction.",
      },
      {
        titre: "Les souvenirs de Copilot sur la direction",
        texte: "Copilot conserve des instructions personnalisées et des souvenirs, stockés dans votre boîte Exchange. Une information confidentielle sur le dirigeant peut s'y retrouver. Ouvrez Paramètres, puis Personnalisation, et relisez ce que Copilot a retenu. Votre historique d'activité se supprime depuis le portail Mon compte.",
      },
      {
        titre: "Les mails chiffrés restent fermés",
        texte: "Copilot ne lit pas les mails chiffrés avec S/MIME (un procédé de signature et de chiffrement des messages). Un brief du matin peut donc omettre le mail le plus important de la journée. Gardez un coup d'œil sur la boîte, même avec un résumé automatique.",
      },
    ],
  },
  audience: [
    { title: "Assistantes et assistants de direction", desc: "Vous gérez la boîte mail et l'agenda d'un dirigeant grâce à un accès délégué. Vous voulez savoir ce que Copilot fait dans cette boîte et ce qu'il vous laisse." },
    { title: "Assistantes de comité de direction et de conseil", desc: "Vous préparez les ordres du jour, les dossiers et les relevés de décisions d'instances régulières. Vous voulez automatiser la collecte et garder la maîtrise des séances confidentielles." },
    { title: "Office managers et assistantes d'équipe", desc: "Vous organisez les réunions de plusieurs personnes et rédigez les courriers du service. Vous voulez des invitations, des ordres du jour et des courriers plus rapides dans Outlook et Word." },
  ],
  useCases: [
    { icon: '📧', title: "Brief du matin de la boîte déléguée", desc: "Une invite planifiée résume chaque matin les mails reçus dans la boîte du dirigeant et liste les demandes à traiter." },
    { icon: '📅', title: "Réunion créée depuis un fil de mails", desc: "« Planifier avec Copilot » prépare l'invitation, le titre et l'ordre du jour à partir de la conversation." },
    { icon: '📋', title: "Relevé de décisions du comité", desc: "L'onglet Récapitulatif de Teams fournit les notes IA et les tâches de suivi à reprendre dans le relevé." },
    { icon: '📄', title: "Courriers dans le ton de la direction", desc: "Word reprend le registre de courriers déjà signés que vous désignez avec la touche /." },
    { icon: '🔍', title: "Suivi des décisions en attente", desc: "Copilot rapproche les tâches décidées et les mails qui confirment leur réalisation, puis liste les relances à faire." },
    { icon: '🎨', title: "Support de comité dans PowerPoint", desc: "Une présentation construite à partir de la note Word, dans le modèle de l'entreprise." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Copilot dans la boîte et l'agenda du dirigeant", duration: '1h30',
      description: "Copilot s'ouvre aux boîtes déléguées en 2026, sous conditions. Ce module fixe ce qu'il y fait et ce qu'il ne fait pas encore.",
      items: [
        "Les conditions : licence Microsoft Copilot et accès délégué complet ; une autorisation sur quelques dossiers ne suffit pas",
        "Ce qui fonctionne : résumés et brouillons dans la boîte déléguée, résumé des éléments du calendrier",
        "Ce qui ne fonctionne pas encore : envoi au nom du dirigeant, tri de la boîte, création ou déplacement de réunions",
        "Nommer la boîte dans la demande et désigner les personnes avec la touche /",
      ],
      exercise: "Vérifier ce que Copilot sait résumer dans la boîte et le calendrier que vous gérez, sur un compte de démonstration ou sur votre accès délégué si votre informatique l'autorise.",
    },
    {
      day: 1, title: "Module 2 · Le brief du matin et les invites planifiées", duration: '2h',
      description: "Un brief utile dit ce que le dirigeant doit traiter, décider ou relancer. Vous l'écrivez une fois, puis Copilot le produit à l'heure choisie.",
      items: [
        "Écrire le prompt du brief : demandes à traiter, décisions attendues, échéances, mails restés sans réponse",
        "« Planifier cette requête » : heure, fréquence et notification par mail",
        "Répartir les dix invites planifiées autorisées sur la semaine de la direction",
        "Repérer ce qu'un brief peut omettre : mails chiffrés avec S/MIME, dates relatives mal calculées",
      ],
      exercise: "Rédiger et planifier le brief du matin adapté à la boîte que vous gérez, puis le comparer avec votre propre lecture.",
    },
    {
      day: 1, title: "Module 3 · Préparer une réunion dans Outlook", duration: '2h',
      description: "Les fonctions de réunion de Copilot s'appliquent à votre propre calendrier. Vous organisez les réunions de la direction de façon à en profiter.",
      items: [
        "« Planifier avec Copilot » dans le nouvel Outlook : invitation, titre, ordre du jour et fil de mails joint",
        "« Rédiger automatiquement un ordre du jour », puis « Conserver » ou « Raccourcir »",
        "Organiser depuis votre calendrier une réunion présidée par le dirigeant",
        "La replanification automatique et ses exclusions : calendriers partagés, réunions de plus de cinq heures",
      ],
      exercise: "Transformer un de vos fils de mails en invitation avec ordre du jour, pour une réunion que vous organisez ce mois-ci.",
    },
    {
      day: 1, title: "Module 4 · Réunions Teams : récapitulatif et confidentialité", duration: '1h30',
      description: "Le récapitulatif fournit la matière du relevé de décisions, et tous les invités peuvent le lire. Chaque instance demande donc son réglage.",
      items: [
        "Transcription ou enregistrement : la condition de l'onglet Récapitulatif",
        "Notes IA, tâches de suivi, mentions et chapitres",
        "Qui voit le récapitulatif : tous les invités de l'organisation",
        "L'option « Uniquement pendant la réunion », rubrique « Copilot et d'autres IA », pour les séances sensibles",
      ],
      exercise: "Choisir le réglage Copilot de chacune des instances que vous organisez (comité, réunion d'équipe, séance sensible) et le justifier.",
    },
    {
      day: 2, title: "Module 5 · Répondre au nom de la direction", duration: '1h30',
      description: "Copilot prépare les réponses dans la boîte déléguée, et l'envoi reste votre geste. Vous apprenez à relire vite ce qui compte.",
      items: [
        "Préparer un brouillon de réponse dans la boîte déléguée",
        "« Coaching par Copilot » pour relire le ton et la clarté d'un mail délicat",
        "Contrôler noms, titres, civilités, dates et montants",
        "Convenir avec le dirigeant des réponses qui exigent sa relecture",
      ],
      exercise: "Préparer trois réponses à des mails que vous traitez souvent, puis les faire relire par « Coaching par Copilot ».",
    },
    {
      day: 2, title: "Module 6 · Courriers, comptes rendus et supports dans Word et PowerPoint", duration: '2h',
      description: "La direction a un registre. Copilot le reprend quand vous lui donnez les bons modèles.",
      items: [
        "« Créer un brouillon avec Copilot » et références désignées avec /",
        "Reprendre le registre de courriers déjà signés par le dirigeant",
        "Transformer des notes de réunion en compte rendu structuré",
        "Construire un support de comité dans PowerPoint à partir de la note Word, dans le modèle de l'entreprise",
      ],
      exercise: "Rédiger un courrier officiel de votre direction en désignant comme références deux courriers qu'elle a déjà signés.",
    },
    {
      day: 2, title: "Module 7 · Le dossier de comité de bout en bout", duration: '2h',
      description: "Le cas complet de la semaine : ordre du jour, suivi des décisions, pièces à projeter. Copilot rassemble, vous arbitrez.",
      items: [
        "Rassembler les points à inscrire depuis les mails de la semaine et le récapitulatif précédent",
        "Suivre les tâches décidées et lister celles qui n'ont aucune trace de réalisation",
        "Lister les pièces à projeter avec le nom exact des fichiers",
        "Suivre un dossier long dans un bloc-notes Copilot et partager une page avec « Modifier dans la page »",
      ],
      exercise: "Préparer l'ordre du jour et le suivi des décisions de la prochaine instance que vous organisez.",
    },
    {
      day: 2, title: "Module 8 · Les règles de confidentialité avec la direction", duration: '1h30',
      description: "Copilot garde des souvenirs et un historique. Vous fixez avec le dirigeant ce qui est transcrit, retenu et supprimé.",
      items: [
        "Relire les souvenirs et les instructions dans Paramètres, puis Personnalisation",
        "Supprimer l'historique d'activité depuis le portail Mon compte",
        "Décider des réunions transcrites et de celles en « Uniquement pendant la réunion »",
        "Séparer les invites et les blocs-notes quand vous assistez plusieurs dirigeants",
      ],
      exercise: "Rédiger la charte d'usage de Copilot que vous proposerez à votre dirigeant : boîtes concernées, réunions transcrites, relectures obligatoires.",
    },
  ],
  objectives: [
    "Vérifier les conditions d'accès de Copilot à une boîte déléguée et distinguer ce qu'il peut y faire de ce qu'il ne fait pas encore",
    "Paramétrer une invite planifiée qui produit le brief du matin de la boîte gérée",
    "Préparer une réunion dans Outlook avec « Planifier avec Copilot » et « Rédiger automatiquement un ordre du jour »",
    "Choisir le réglage Copilot d'une réunion Teams selon sa confidentialité",
    "Rédiger un courrier dans le registre de la direction à partir de courriers de référence désignés dans Word",
    "Contrôler un brief ou un relevé de décisions produit par Copilot : dates, pièces jointes, mails chiffrés",
  ],
  faq: [
    {
      q: "Copilot peut-il travailler dans la boîte mail de mon dirigeant ?",
      a: "Oui, si vous avez la licence Microsoft Copilot et un accès délégué complet à sa boîte. Copilot y résume les mails et prépare des brouillons, et il résume les éléments de son calendrier. Il ne peut pas encore envoyer en son nom, trier la boîte ou planifier une réunion dans son agenda.",
    },
    {
      q: "Copilot Chat, inclus dans Microsoft 365, suffit-il à une assistante ?",
      a: "Il aide à rédiger un courrier, à résumer un document déposé ou le mail ouvert à l'écran. Les fonctions qui font gagner le plus de temps à une assistante demandent la licence : boîte déléguée, invites planifiées, « Planifier avec Copilot », ordre du jour automatique et interrogation des réunions Teams. La formation montre ce que chaque niveau permet.",
    },
    {
      q: "Peut-on programmer un résumé automatique des mails chaque matin ?",
      a: "Oui. Dans Copilot Chat, survolez une demande déjà écrite et choisissez « Planifier cette requête ». Vous réglez l'heure, la fréquence et la notification par mail. Chaque personne peut créer jusqu'à dix invites planifiées.",
    },
    {
      q: "Comment éviter que Copilot garde la trace d'une réunion confidentielle ?",
      a: "Dans les options de la réunion Teams, rubrique « Copilot et d'autres IA », choisissez « Uniquement pendant la réunion ». Copilot répond pendant la séance, sans transcription. Une fois la réunion terminée, rien n'est disponible dans l'onglet Récapitulatif.",
    },
    {
      q: "Qui voit le récapitulatif d'une réunion Teams ?",
      a: "Les personnes de votre organisation invitées à la réunion. Pour un comité restreint, vérifiez la liste des invités avant d'activer la transcription.",
    },
    {
      q: "Copilot peut-il écrire dans le style de mon dirigeant ?",
      a: "Il s'en approche si vous lui donnez des modèles. Dans Word, désignez avec / deux courriers déjà signés par le dirigeant sur un sujet proche. Relisez toujours les formules de politesse, les titres et les civilités, sur lesquels Copilot applique des usages génériques.",
    },
    {
      q: "La formation couvre-t-elle l'assistanat de plusieurs dirigeants ?",
      a: "Oui. Nous organisons les invites planifiées et les blocs-notes par dirigeant, et nous travaillons la séparation des dossiers pour qu'une information d'un périmètre ne se retrouve pas dans le brief d'un autre. Les exercices se font sur des boîtes de démonstration ou sur vos propres fichiers, selon ce que votre service informatique autorise.",
    },
    {
      q: "Comment la formation Copilot pour assistantes est-elle financée ?",
      a: "Masteria est certifié Qualiopi, ce qui ouvre la prise en charge par l'OPCO de votre entreprise au titre du plan de développement des compétences. Le tarif est de 1 980 € HT par jour. En intra, la session accueille jusqu'à 12 participants, par exemple toutes les assistantes d'un siège. Nous préparons les pièces du dossier de financement.",
    },
  ],
  sources: [
    { name: "Microsoft Support : utiliser Copilot dans les boîtes partagées et déléguées", url: "https://support.microsoft.com/en-us/microsoft-365-copilot/use-copilot-in-shared-mailboxes-and-delegate-mailboxes" },
    { name: "Microsoft Support : boîtes partagées et déléguées avec Copilot Chat dans Outlook", url: "https://support.microsoft.com/en-us/outlook/sharing/shared-delegated-mailboxes-copilot-chat-outlook" },
    { name: "Microsoft Support : questions fréquentes sur Copilot dans Outlook", url: "https://support.microsoft.com/fr-fr/office/questions-fr%C3%A9quentes-sur-copilot-dans-outlook-07420c70-099e-4552-8522-7d426712917b" },
    { name: "Microsoft Support : planifiez vos requêtes Copilot les plus utilisées", url: "https://support.microsoft.com/fr-fr/microsoft-365-copilot/schedule-your-most-used-copilot-prompts" },
    { name: "Microsoft Support : créer un ordre du jour de réunion avec Copilot dans Outlook", url: "https://support.microsoft.com/fr-fr/office/create-a-meeting-with-copilot-31a44dfa-62bb-4751-82c4-14327a26759f" },
    { name: "Microsoft Support : replanifier automatiquement des événements avec Copilot", url: "https://support.microsoft.com/fr-fr/office/automatically-reschedule-events-with-copilot-in-microsoft-outlook-and-microsoft-teams" },
    { name: "Microsoft Support : récapitulatif dans Microsoft Teams", url: "https://support.microsoft.com/fr-fr/office/r%C3%A9capitulatif-dans-microsoft-teams-c2e3a0fe-504f-4b2c-bf85-504938f110ef" },
    { name: "Microsoft Support : utiliser Copilot sans transcrire ni enregistrer une réunion Teams", url: "https://support.microsoft.com/fr-fr/office/utiliser-copilot-sans-enregistrer-de-r%C3%A9union-teams-a59cb88c-0f6b-4a20-a47a-3a1c9a818bd9" },
    { name: "Microsoft Support : rédigez et ajoutez du contenu avec Copilot dans Word", url: "https://support.microsoft.com/fr-fr/office/r%C3%A9digez-et-ajoutez-du-contenu-avec-copilot-dans-word-069c91f0-9e42-4c9a-bbce-fddf5d581541" },
    { name: "Microsoft Support : prise en main de Pages Copilot", url: "https://support.microsoft.com/fr-fr/microsoft-365-copilot/get-started-with-microsoft-365-copilot-pages" },
    { name: "Microsoft Learn : données, confidentialité et sécurité pour Microsoft Copilot", url: "https://learn.microsoft.com/fr-fr/copilot/microsoft-365/microsoft-365-copilot-privacy" },
  ],
}
