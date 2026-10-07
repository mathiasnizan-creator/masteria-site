// Contenu propre à /formation-copilot-assistante (guide terrain, page propre). Rendu par SpokePage.
// Réécrit le 7 octobre 2026. Faits Microsoft : fiche FAITS-OUTILS du 07/10/2026 (Learn, pages tarifs
// France, documentation Cowork du 29/09) et pages d'aide Microsoft relevées le 28/09 (liens dans `sources`).
// Cas de terrain : missions-formation.js, mission « assistanat-direction ».
export default {
  slug: 'formation-copilot-assistante',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation Copilot assistante de direction : boîte déléguée, agenda et comités",
  metaTitle: "Formation Copilot assistante de direction | Masteria",
  metaDesc: "Formation Copilot pour assistante de direction : boîte déléguée du dirigeant, brief planifié, ordres du jour Outlook, relevés Teams. Deux jours, Qualiopi.",
  resume: "La formation Copilot pour assistante de direction apprend, en quatorze heures réparties sur deux jours, à faire travailler Copilot dans la boîte mail, l'agenda et les réunions d'un dirigeant, en respectant les limites que Microsoft fixe à l'accès délégué. Elle se suit sur votre site comme en visioconférence, seule ou avec les assistantes d'un même siège, douze au plus, et se facture 1 980 € HT par jour. Organisme certifié Qualiopi, Masteria vous aide à présenter le dossier à votre OPCO, qui statue selon le barème de la branche.",
  enBref: [
    { label: 'Formation', value: "Microsoft Copilot au poste d'assistante de direction : boîte déléguée, agenda, comités, courriers et relevés de décisions" },
    { label: 'Durée', value: "Deux jours de sept heures, idéalement placés la semaine d'un comité que vous préparez" },
    { label: 'Formats', value: "Intra pour les assistantes d'un siège, douze au plus, ou parcours individuel calé sur l'agenda du dirigeant ; sur site ou en visioconférence" },
    { label: 'Tarif', value: "1 980 € HT par journée, que le groupe compte deux assistantes ou douze" },
    { label: 'Financement', value: "Organisme certifié Qualiopi : l'OPCO de l'entreprise instruit la prise en charge selon ses critères et son budget" },
    { label: 'Prérequis', value: "Un compte Microsoft 365 professionnel ; pour les modules sur la boîte du dirigeant, la licence Microsoft Copilot et un accès délégué complet" },
  ],
  prerequis: "Un compte Microsoft 365 professionnel ; la licence Microsoft Copilot et un accès délégué complet pour travailler dans la boîte du dirigeant",
  intro: "Une assistante de direction passe ses journées dans la messagerie et le calendrier de quelqu'un d'autre. Microsoft Copilot (anciennement Microsoft 365 Copilot) sait désormais lire cette boîte et y préparer des réponses, à deux conditions : la licence sur votre compte et une délégation complète. Il n'y envoie rien et n'y déplace aucun rendez-vous. Ce guide répartit donc le travail entre l'outil et vous. Copilot rassemble, résume et rédige le premier jet ; vous tranchez, vous envoyez et vous tenez l'agenda. Vous repartez avec un brief du matin programmé, un dossier de comité monté à partir des messages de la semaine et des règles de confidentialité convenues avec le dirigeant.",
  guide: {
    kicker: "Guide terrain",
    h2: "Copilot lit et prépare dans la boîte du dirigeant, l'assistante garde l'envoi et l'agenda",
    lead: "Le métier d'assistante se joue en trois lieux : la messagerie du dirigeant, son calendrier et les réunions qu'il préside. Avec la licence Microsoft Copilot, l'outil entre dans les trois avec des droits différents. Il résume et rédige dans la boîte déléguée, il prépare les réunions que vous convoquez depuis votre propre calendrier, et il tire de Teams la matière du relevé de décisions quand la séance a été transcrite. Tout ce qui engage la signature ou l'emploi du temps du dirigeant reste votre geste.",
    sections: [
      {
        h3: "La boîte du dirigeant s'ouvre à Copilot sous deux conditions",
        paras: [
          "Microsoft a étendu Copilot aux boîtes partagées et déléguées. Son aide pose deux conditions : la licence Microsoft Copilot sur votre compte et un accès délégué complet à la boîte du dirigeant. Une délégation limitée à quelques dossiers ne suffit pas. Copilot reprend les droits que l'informatique vous a déjà donnés et n'en ajoute aucun.",
          "Dans cette boîte, il résume les messages, prépare des brouillons de réponse et résume les rendez-vous du calendrier délégué. Il ne classe pas, ne supprime pas, n'envoie rien au nom du dirigeant et ne crée aucune réunion dans son agenda ; Microsoft présente ces actions comme prévues pour plus tard. Vos conversations avec Copilot restent séparées de celles du dirigeant.",
          "Dans l'application Microsoft Copilot, accessible à l'adresse copilot.cloud.microsoft, écrivez le nom de la boîte dans la demande, par exemple « les messages arrivés depuis hier 18 h dans la boîte de Claire Martin ». La touche / fait apparaître une personne, un fichier ou une réunion à citer.",
        ],
      },
      {
        h3: "Une demande planifiée prépare le brief avant votre arrivée",
        paras: [
          "Copilot Chat sait relancer une demande à heure fixe. Survolez une demande déjà envoyée, choisissez « Planifier cette requête », réglez l'heure et la fréquence, puis cochez si besoin l'avis par mail. La réponse s'affiche dans la liste des conversations. La fonction exige la licence, et Microsoft la limite à dix invites planifiées par personne.",
          "Dix créneaux suffisent à rythmer la semaine d'une direction. Une répartition possible : le tri de la boîte déléguée chaque jour ouvré à 7 h 30, les messages restés sans réponse depuis trois jours le vendredi midi, les pièces envoyées par les membres du comité la veille de la séance. Gardez une ou deux places libres pour les dossiers ponctuels, comme le recrutement d'un cadre ou un déménagement de bureaux.",
        ],
      },
      {
        h3: "Outlook monte l'invitation et l'ordre du jour des réunions que vous convoquez",
        paras: [
          "Dans le nouvel Outlook, deux fonctions servent la préparation d'une réunion, et toutes deux exigent la licence. Depuis un fil de mails, « Planifier avec Copilot » crée une invitation avec un titre, un projet d'ordre du jour et la conversation en pièce jointe. Dans une invitation en cours de rédaction, le bouton Copilot de la description propose « Rédiger automatiquement un ordre du jour », que vous gardez avec « Conserver » ou resserrez avec « Raccourcir ».",
          "Ces fonctions travaillent dans votre calendrier. Pour un comité présidé par le dirigeant, convoquez donc la réunion vous-même et invitez-le : vous gardez la main sur les options de la séance et l'aide de Copilot. La replanification automatique, qui déplace un rendez-vous en cas de conflit, ignore les calendriers partagés et les réunions de plus de cinq heures.",
        ],
      },
      {
        h3: "Le récapitulatif Teams nourrit le relevé de décisions quand la séance est transcrite",
        paras: [
          "Après une réunion Teams enregistrée ou transcrite, l'onglet Récapitulatif regroupe les notes générées par l'IA, les tâches de suivi, les mentions de noms et les chapitres. Chaque invité de l'organisation y a accès, y compris à ce qui s'est dit en fin de séance sur un sujet délicat.",
          "Pour un comité où l'on parle de rémunérations, de cession ou de litige, ouvrez les options de la réunion. Sous « Copilot et d'autres IA », le choix « Uniquement pendant la réunion » laisse Copilot répondre en séance, sans enregistrement ni transcription ; une fois la réunion close, il ne reste rien à interroger. Demandez la liste des décisions avant de lever la séance et recopiez-la dans le relevé.",
        ],
      },
      {
        h3: "Les courriers de la direction reprennent le registre des lettres déjà signées",
        paras: [
          "Dans Word, « Créer un brouillon avec Copilot » accepte des références : avec la touche /, désignez un courrier antérieur, un fil de mails ou une réunion. Choisissez deux lettres que le dirigeant a signées sur un sujet voisin, et Copilot en reprend la longueur, le ton et les formules. Dans Outlook, le coaching de Copilot relit un message délicat avant l'envoi et commente sa clarté et son ton.",
          "Un dossier qui s'étend sur plusieurs mois, comme un conseil d'administration, un déménagement de siège ou le recrutement d'un directeur, trouve sa place dans un bloc-notes Copilot. Mails, fichiers et notes de réunion y sont rangés comme références, et Copilot répond sur ce seul périmètre. Une réponse utile devient une page Copilot que vous partagez et corrigez avec « Modifier dans la page ».",
        ],
      },
      {
        h3: "Cowork enchaîne les étapes et attend votre accord avant d'agir",
        paras: [
          "Copilot Cowork, que Microsoft déclare ouvert à tous les comptes professionnels depuis le 29 septembre 2026, va au-delà du brouillon. Il rédige et expédie des mails, cale des réunions, produit des documents et poste des messages dans Teams. Chaque action sensible passe par votre validation, avec un niveau de risque affiché. Une tâche peut démarrer seule, chaque vendredi par exemple, ou dès qu'un message précis arrive. Chaque tâche consomme des crédits payés en sus de l'abonnement.",
          "Pour une assistante, Cowork permet de chaîner la préparation d'un comité : relevé des points, invitation, envoi des pièces aux membres. Essayez-le d'abord sur vos propres réunions et votre propre boîte. Les limites de la boîte déléguée décrites plus haut restent la référence, et aucun message ne part au nom du dirigeant sans votre relecture.",
        ],
      },
    ],
    table: {
      caption: "Sept tâches d'assistanat et leur place dans Microsoft Copilot au 7 octobre 2026",
      headers: ["Tâche", "Où la faire", "Condition ou limite"],
      rows: [
        ["Lire la boîte du dirigeant chaque matin", "Invite planifiée dans l'application Microsoft Copilot, boîte nommée dans la demande", "Licence et délégation complète ; résumé et brouillon seulement"],
        ["Répondre pour le dirigeant", "Brouillon préparé dans la boîte déléguée", "Envoi à la main, après relecture des dates et des montants"],
        ["Convoquer un comité", "Votre calendrier, puis « Rédiger automatiquement un ordre du jour »", "Aucune réunion créée dans l'agenda délégué"],
        ["Tenir le relevé de décisions", "Onglet Récapitulatif de Teams et tâches de suivi", "Séance transcrite ou enregistrée ; contenu lisible par les invités"],
        ["Protéger une séance sensible", "Options de réunion, « Uniquement pendant la réunion »", "Plus rien à consulter une fois la séance terminée"],
        ["Écrire un courrier officiel", "Word, lettres de référence désignées avec /", "Titres, civilités et formules relus à la main"],
        ["Enchaîner relevé, invitation et envoi des pièces", "Copilot Cowork", "Accord demandé avant chaque action sensible ; usage facturé en plus"],
      ],
    },
    cas: {
      h3: "Cas pratique : monter le comité de direction du lundi depuis la boîte déléguée",
      contexte: "Imaginons l'assistante du président d'une société de services de 300 personnes. Elle dispose de la licence Microsoft Copilot et d'une délégation complète sur la boîte du président. Le comité se réunit chaque lundi à 9 h, et l'ordre du jour part le vendredi après-midi.",
      etapes: [
        "Vendredi à 14 h, elle ouvre l'application Microsoft Copilot, désigne avec / la boîte du président puis la réunion du lundi précédent, et y dépose la demande reproduite plus bas.",
        "Elle relit les trois tableaux, retire un point réglé dans la semaine par téléphone et en ajoute un que le président lui a confié de vive voix.",
        "Elle crée la réunion du lundi dans son propre calendrier, invite le président et les membres du comité, lance « Rédiger automatiquement un ordre du jour », puis remplace la proposition par sa version validée.",
        "Elle laisse la transcription active pour ce comité ordinaire et note que la séance mensuelle consacrée aux rémunérations passera en « Uniquement pendant la réunion ».",
        "Satisfaite du résultat, elle survole sa demande dans Copilot Chat et la programme chaque vendredi à 14 h.",
      ],
      prompt: "J'assiste le président et je prépare le comité de direction de lundi 9 h.\n\nSources : les messages reçus depuis lundi dernier dans la boîte du président, et le récapitulatif de la réunion du comité de lundi dernier.\n\nPrépare trois tableaux.\n\n1. Points proposés pour l'ordre du jour : expéditeur, date du message, ce que le comité doit faire (prendre connaissance, donner un avis ou décider) et une phrase de résumé.\n2. Suivi des décisions de la semaine dernière : décision, responsable, puis la preuve de sa réalisation (message daté) ou la mention « aucune trace trouvée ».\n3. Documents à projeter : nom exact du fichier, expéditeur, date de réception.\n\nN'ajoute aucun point qui ne repose pas sur un message ou sur le récapitulatif. Si deux messages se contredisent sur une date ou un montant, signale l'écart sans choisir.",
      resultat: "Copilot rend les trois tableaux, et trois vérifications restent à la charge de l'assistante. Les dates relatives (« demain », « fin de semaine ») se recalculent depuis la date du message, que Copilot confond parfois avec la date du jour. Les décisions marquées « aucune trace trouvée » forment la liste des relances à faire avant lundi. Chaque nom de fichier doit exister dans la boîte, car un nom mal recopié laisse une pièce manquante en séance. Le tableau de suivi est la partie qui demandait jusque-là de relire toute une semaine de messages.",
    },
    pieges: [
      {
        titre: "Deux pages d'aide Microsoft se contredisent sur les boîtes déléguées",
        texte: "La foire aux questions de Copilot dans Outlook affirme encore que Copilot ne travaille que sur la boîte principale, alors qu'une page plus récente décrit l'accès délégué. Le résultat dépend de la version d'Outlook et du rythme de déploiement dans votre entreprise. Vérifiez dans l'application Copilot ce qui fonctionne chez vous avant d'y bâtir une routine.",
      },
      {
        titre: "Copilot se souvient de ce que vous lui confiez sur le dirigeant",
        texte: "Copilot garde des instructions personnalisées et des souvenirs, rangés dans votre boîte Exchange. Une remarque sur la santé ou les projets personnels du dirigeant peut s'y retrouver. Relisez ce qu'il a retenu dans Paramètres, puis Personnalisation, et effacez l'historique d'activité depuis le portail Mon compte quand un dossier se referme.",
      },
      {
        titre: "Un message chiffré manque au brief du matin",
        texte: "Copilot ne lit pas les messages chiffrés avec S/MIME, un procédé qui signe et chiffre un mail d'un bout à l'autre. Le brief peut donc taire le message le plus sensible de la journée. Gardez l'habitude de parcourir la boîte, même quand le résumé arrive à l'heure.",
      },
    ],
  },
  audience: [
    { title: "Assistantes et assistants de direction générale", desc: "Vous tenez la boîte et l'agenda d'un dirigeant grâce à une délégation. La formation montre ce que Copilot fait dans cette boîte, ce qu'il vous laisse, et comment organiser vos routines autour de ces limites." },
    { title: "Assistantes de comité et de conseil d'administration", desc: "Ordres du jour, dossiers de séance, relevés de décisions : vous servez des instances régulières. Vous apprenez à automatiser la collecte des points et à régler la transcription selon la sensibilité de chaque séance." },
    { title: "Office managers et assistantes d'équipe", desc: "Vous organisez les réunions de plusieurs personnes et rédigez les courriers du service. Les ateliers portent sur les invitations, les ordres du jour et les courriers dans Outlook et Word, avec ou sans licence." },
  ],
  useCases: [
    { icon: '📧', title: "Brief du matin programmé", desc: "Une demande planifiée résume à 7 h 30 les messages arrivés dans la boîte du dirigeant et liste ce qu'il doit traiter." },
    { icon: '📅', title: "Invitation tirée d'un fil de mails", desc: "« Planifier avec Copilot » crée l'invitation, son titre et un projet d'ordre du jour à partir de la conversation." },
    { icon: '📋', title: "Relevé de décisions du comité", desc: "Les notes IA et les tâches de suivi du récapitulatif Teams donnent la base du relevé, que vous complétez et validez." },
    { icon: '📄', title: "Courrier au registre de la direction", desc: "Word s'appuie sur deux lettres déjà signées, désignées avec /, pour reprendre le ton du dirigeant." },
    { icon: '🔍', title: "Relances repérées avant le comité", desc: "Copilot rapproche les décisions de la semaine et les messages qui prouvent leur réalisation, puis signale les manques." },
    { icon: '🗂️', title: "Dossier long suivi dans un bloc-notes", desc: "Conseil d'administration ou déménagement : mails, fichiers et notes réunis comme références d'un même bloc-notes Copilot." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Situer ce que Copilot fait dans la boîte et l'agenda du dirigeant", duration: '1h30',
      description: "Avant toute routine, vous vérifiez votre niveau d'accès et ce que Microsoft autorise dans une boîte déléguée au 7 octobre 2026.",
      items: [
        "Copilot Chat inclus, licence Microsoft Copilot, délégation complète : ce que chaque niveau ouvre à une assistante",
        "Résumés, brouillons et calendrier délégué disponibles ; envoi, classement et création de réunion toujours manuels",
        "Nommer la boîte dans la demande, désigner une personne ou une réunion avec /",
        "Le sélecteur de modèles : laisser Auto, ou forcer une réponse rapide ou une réflexion approfondie ; sources web ou travail",
      ],
      exercise: "Vous testez sur votre délégation, ou sur un compte de démonstration si l'informatique le préfère, ce que Copilot sait résumer dans la boîte et le calendrier que vous gérez.",
    },
    {
      day: 1, title: "Module 2 · Écrire puis planifier le brief du matin", duration: '2h',
      description: "Un bon brief dit ce que le dirigeant doit lire, décider ou relancer. Vous l'écrivez une fois, et Copilot le livre chaque jour à l'heure dite.",
      items: [
        "Méthode de demande : rôle, sources, attendu, format en tableau, interdiction d'inventer",
        "« Planifier cette requête » : heure, fréquence, avis par mail",
        "Répartir les dix invites planifiées entre le quotidien et les dossiers ponctuels",
        "Ce qu'un brief peut taire : messages chiffrés, dates relatives mal calculées",
      ],
      exercise: "Vous rédigez et planifiez le brief adapté à la boîte que vous tenez, puis vous le comparez à votre propre lecture du matin.",
    },
    {
      day: 1, title: "Module 3 · Préparer réunions et ordres du jour dans Outlook", duration: '2h',
      description: "Les fonctions de réunion de Copilot travaillent dans votre calendrier. Vous organisez les réunions de la direction de façon à en tirer parti.",
      items: [
        "« Planifier avec Copilot » depuis un fil de mails dans le nouvel Outlook",
        "« Rédiger automatiquement un ordre du jour », puis « Conserver » ou « Raccourcir »",
        "Convoquer depuis votre agenda une réunion présidée par le dirigeant",
        "Replanification automatique : calendriers partagés et réunions de plus de cinq heures exclus",
      ],
      exercise: "Vous transformez un fil de mails en invitation complète pour une réunion que vous organisez ce mois-ci.",
    },
    {
      day: 1, title: "Module 4 · Régler Teams selon la sensibilité de chaque instance", duration: '1h30',
      description: "Le récapitulatif fournit la matière du relevé, et tous les invités peuvent le lire. Chaque instance reçoit donc un réglage décidé à l'avance.",
      items: [
        "Enregistrement ou transcription : la condition du récapitulatif",
        "Notes IA, tâches de suivi, mentions et chapitres",
        "Lecteurs du récapitulatif : les invités internes à l'organisation",
        "« Uniquement pendant la réunion », sous « Copilot et d'autres IA », pour les séances confidentielles",
      ],
      exercise: "Vous attribuez un réglage à chacune de vos instances (comité, réunion d'équipe, séance sur les rémunérations) et rédigez la phrase qui l'annonce dans l'invitation.",
    },
    {
      day: 2, title: "Module 5 · Répondre au nom de la direction sans rien envoyer à l'aveugle", duration: '1h30',
      description: "Copilot prépare, vous relisez et vous envoyez. Le module apprend à relire vite les éléments qui engagent le dirigeant.",
      items: [
        "Brouillon de réponse dans la boîte déléguée",
        "Coaching de Copilot dans Outlook : clarté et ton d'un message délicat",
        "Contrôle des noms, titres, civilités, dates et montants",
        "Liste, convenue avec le dirigeant, des réponses qu'il tient à relire",
      ],
      exercise: "Vous préparez trois réponses à des messages que vous traitez souvent et vous les soumettez au coaching de Copilot.",
    },
    {
      day: 2, title: "Module 6 · Rédiger courriers, comptes rendus et supports", duration: '2h',
      description: "La direction a son registre. Copilot le reprend dès qu'il dispose des bons modèles.",
      items: [
        "« Créer un brouillon avec Copilot » et références désignées avec /",
        "Reprise du registre de courriers déjà signés",
        "Notes de réunion transformées en compte rendu décisions-actions",
        "Support de comité tiré de la note Word, au gabarit PowerPoint de la maison",
      ],
      exercise: "Vous écrivez un courrier officiel de votre direction en vous appuyant sur deux lettres qu'elle a déjà signées.",
    },
    {
      day: 2, title: "Module 7 · Monter le dossier de comité, de la collecte au suivi", duration: '2h',
      description: "Le cas complet de la semaine : points à inscrire, décisions à suivre, pièces à projeter. Copilot rassemble, l'assistante arbitre.",
      items: [
        "Collecte des points à partir des messages et du récapitulatif précédent",
        "Décisions sans trace de réalisation transformées en relances",
        "Bloc-notes Copilot pour un dossier long, page partagée avec « Modifier dans la page »",
        "Copilot Cowork : relevé, invitation et envoi des pièces, avec accord à chaque étape sensible",
      ],
      exercise: "Vous préparez l'ordre du jour et le suivi des décisions de votre prochaine instance.",
    },
    {
      day: 2, title: "Module 8 · Convenir avec le dirigeant des règles de confidentialité", duration: '1h30',
      description: "Copilot garde des souvenirs et un historique, et certaines réunions laissent une trace. Vous fixez avec le dirigeant ce qui est transcrit, retenu ou effacé.",
      items: [
        "Souvenirs et instructions : Paramètres, puis Personnalisation",
        "Historique d'activité effacé depuis le portail Mon compte",
        "RGPD : santé, rémunérations et vie privée du dirigeant tenues hors des demandes",
        "AI Act, article 4 : la formation consignée au registre interne, puis les trois routines des trente premiers jours",
      ],
      exercise: "Vous écrivez les règles d'usage de Copilot que vous soumettrez au dirigeant (boîtes concernées, réunions transcrites, relectures obligatoires) et vous choisissez les trois routines à installer dans le mois.",
    },
  ],
  objectives: [
    "Le participant sait vérifier les conditions d'accès de Copilot à une boîte déléguée et dire ce que l'outil peut y faire au 7 octobre 2026.",
    "Le participant sait rédiger et planifier une demande qui produit chaque matin le brief de la boîte qu'il tient.",
    "Le participant sait préparer une réunion dans Outlook avec « Planifier avec Copilot » et l'ordre du jour automatique.",
    "Le participant sait choisir le réglage Copilot d'une réunion Teams d'après sa confidentialité.",
    "Le participant sait écrire un courrier au registre de la direction à partir de lettres de référence désignées dans Word.",
    "Le participant sait contrôler un brief ou un relevé produit par Copilot : dates, pièces jointes, messages chiffrés.",
  ],
  faq: [
    {
      q: "Copilot peut-il travailler dans la boîte mail de mon dirigeant ?",
      a: "Oui, si votre compte porte la licence Microsoft Copilot et que vous disposez d'un accès délégué complet à cette boîte ; une délégation sur quelques dossiers ne suffit pas. Copilot y résume les messages, prépare des brouillons de réponse et fait la synthèse des rendez-vous inscrits dans l'agenda du dirigeant. Au 7 octobre 2026, il n'envoie rien au nom du dirigeant, ne classe pas la boîte et ne crée pas de réunion dans son calendrier. La formation commence par tester ces points sur votre configuration, car le déploiement varie d'une entreprise à l'autre.",
    },
    {
      q: "Copilot Chat, compris dans Microsoft 365, suffit-il à une assistante ?",
      a: "Il rend déjà service pour rédiger un courrier, résumer un document que vous déposez ou reprendre le message ouvert dans Outlook. Les fonctions qui changent le quotidien d'une assistante exigent la licence : travail dans la boîte déléguée, demandes planifiées, « Planifier avec Copilot », ordre du jour automatique, recherche dans vos mails et vos réunions passées. Pendant la formation, chaque participante sait à tout moment quel niveau elle utilise, et les exercices suivent ses accès plutôt qu'un scénario de démonstration.",
    },
    {
      q: "Combien coûte la licence Copilot pour l'assistante d'une PME ?",
      a: "Dans une PME, l'offre s'appelle Copilot Business. Au 7 octobre 2026, Microsoft France l'affiche à 18,20 € HT par mois pour le siège de l'assistante, avec un engagement annuel payé d'un coup, et à 21,84 € HT quand ce même engagement se règle mensuellement. Une entreprise qui utilise déjà Microsoft 365 et signe un nouvel abonnement annuel avant le 31 décembre profite d'un tarif de 15,60 € HT la première année. Les structures de plus de 300 sièges paient 26,00 € HT par mois. Ces prix figurent encore sous l'ancien nom du produit.",
    },
    {
      q: "Peut-on recevoir chaque matin un résumé automatique de la boîte ?",
      a: "Oui, avec la licence. Écrivez une fois la demande dans Copilot Chat, survolez-la et choisissez « Planifier cette requête » : vous fixez l'heure, la fréquence et un éventuel avis par mail. Chaque personne dispose de dix invites planifiées. Un brief utile précise la boîte à lire, la période couverte, les catégories attendues (à traiter, à décider, à relancer) et l'interdiction d'inventer. Continuez à parcourir la boîte vous-même, car les messages chiffrés n'apparaissent pas dans le résumé.",
    },
    {
      q: "Comment éviter que Copilot garde la trace d'un comité confidentiel ?",
      a: "Avant la séance, ouvrez les options de la réunion Teams et choisissez, sous « Copilot et d'autres IA », le réglage « Uniquement pendant la réunion ». Copilot répond aux questions posées pendant la séance, sans enregistrement ni transcription, et l'onglet Récapitulatif reste vide une fois la réunion terminée. Demandez la liste des décisions avant la fin. Pour un comité ordinaire, la transcription reste utile ; rappelez-vous simplement que chaque invité de l'organisation peut lire le récapitulatif.",
    },
    {
      q: "Copilot peut-il écrire comme mon dirigeant ?",
      a: "Il s'en rapproche quand vous lui fournissez des modèles. Dans Word, désignez avec / deux lettres que le dirigeant a déjà signées sur un sujet proche : Copilot en reprend la longueur, le ton et la construction. Les titres, les civilités et les formules de politesse demandent toujours une relecture, car l'outil applique volontiers des usages génériques. Une page Copilot partagée peut garder la liste des tournures que le dirigeant refuse, à rappeler dans chaque demande.",
    },
    {
      q: "La formation couvre-t-elle l'assistance de plusieurs dirigeants ?",
      a: "Oui. Les invites planifiées et les blocs-notes s'organisent par dirigeant, et nous travaillons la séparation des dossiers pour qu'une information d'un périmètre n'apparaisse jamais dans le brief d'un autre. Les exercices se font sur des boîtes de démonstration ou sur vos propres fichiers, selon ce que votre service informatique autorise. En septembre 2026, une assistante suivie en individuel a voulu s'exercer sur des pièces fictives, pour que rien de sensible ne s'affiche, et la journée a été bâtie sur ce choix.",
    },
    {
      q: "Comment financer la formation Copilot d'une équipe d'assistantes ?",
      a: "La certification Qualiopi de Masteria, délivrée pour la catégorie des actions de formation, ouvre la porte à une prise en charge par l'opérateur de compétences dont relève votre entreprise. Sa décision suit le barème de la branche et les crédits encore ouverts. Une journée est facturée 1 980 € HT pour tout le groupe, de deux à douze assistantes, et le parcours complet 3 960 € HT. Une assistante seule paie le même prix journalier. Nous préparons le programme détaillé et la convention à joindre à la demande, avant la session.",
    },
  ],
  tarifs: {
    titre: "Le prix des deux journées pour un pôle d'assistantes",
    paras: [
      "La préparation fait partie du prix. Avant la session, le formateur relève avec vous les accès de chaque participante (licence, délégations, version d'Outlook), récupère quelques modèles de courriers et d'ordres du jour, et ajuste les demandes du guide à vos propres instances. Les supports et la charte d'usage rédigée pendant le module 8 restent à l'équipe.",
      "Prenons un siège qui inscrit ses six assistantes de direction. Le parcours de deux jours en intra revient à 3 960 € HT pour l'ensemble, soit 660 € HT par assistante. En individuel, calé sur l'agenda d'un seul dirigeant, chaque jour est facturé 1 980 € HT. L'OPCO dont relève l'entreprise étudie ensuite le dossier d'après ses critères. À Genève et à Bruxelles, faute d'OPCO, nous chiffrons la session en euros, hors taxes.",
    ],
  },
  apres: {
    titre: "Après la formation, un assistant taillé pour le secrétariat de direction",
    texte: "Quand les routines tiennent, une demande revient souvent : un agent qui prépare les réponses types de la direction, un dossier de comité monté chaque semaine par une compétence Cowork, ou un assistant qui traite les demandes répétitives arrivant au secrétariat. Masteria peut construire cet outil dans votre environnement Microsoft 365, l'éprouver sur vos messages et apprendre à l'équipe à l'entretenir. Il se chiffre au forfait après un cadrage ; ce chantier n'est pas finançable par votre OPCO.",
  },
  cta: {
    milieu: "Donnez-nous la date de votre prochain comité : nous bâtissons les deux journées sur sa préparation.",
    fin: {
      titre: "Partons de la messagerie et du calendrier que vous tenez",
      texte: "Dites-nous combien d'assistantes sont concernées, lesquelles ont déjà la licence et quelles instances vous servez. Nous revenons avec un programme calé sur vos réunions et des dates possibles.",
    },
  },
  terrain: {
    titre: "Chez un éditeur de logiciels, chaque outil reçoit son périmètre de données",
    texte: "En septembre 2026, chez un éditeur de logiciels qui vend aux entreprises, Masteria a accompagné une assistante de direction pendant une journée individuelle, en visioconférence. Copilot tournait déjà sur son poste. La journée a déroulé tout le cycle d'un comité, de l'ordre du jour au mémo du dirigeant, puis un relevé de décisions et d'actions extrait d'une séance enregistrée et le contrôle des notes de frais dans Excel. L'assistante a bâti dans Agent Builder un assistant qui prépare les mails du dirigeant, et retenu une règle de tri : les documents internes ou qui citent des personnes ne quittent pas Copilot, et le doute profite à Copilot.",
    lien: '/etudes-de-cas-ia#mission-assistanat-direction',
  },
  liensAssocies: [
    { label: "Toutes les formations Microsoft Copilot, métier par métier", href: '/formation-microsoft-copilot' },
    { label: "Le même poste outillé avec Claude", href: '/formation-claude-assistante' },
    { label: "Formation IA pour l'assistanat, tous assistants confondus", href: '/formation-ia-assistante' },
    { label: "Construire ses propres agents IA en deux jours", href: '/formation-agents-ia' },
    { label: "Copilot face à ChatGPT, fonction par fonction", href: '/copilot-vs-chatgpt' },
  ],
  sources: [
    { name: "Aide Microsoft, en anglais : Copilot dans une boîte partagée ou déléguée", url: "https://support.microsoft.com/en-us/microsoft-365-copilot/use-copilot-in-shared-mailboxes-and-delegate-mailboxes" },
    { name: "Aide Microsoft, en anglais : Copilot Chat dans Outlook face aux boîtes déléguées", url: "https://support.microsoft.com/en-us/outlook/sharing/shared-delegated-mailboxes-copilot-chat-outlook" },
    { name: "Aide Microsoft : la foire aux questions de Copilot dans Outlook", url: "https://support.microsoft.com/fr-fr/office/questions-fr%C3%A9quentes-sur-copilot-dans-outlook-07420c70-099e-4552-8522-7d426712917b" },
    { name: "Aide Microsoft : programmer les demandes que l'on répète", url: "https://support.microsoft.com/fr-fr/microsoft-365-copilot/schedule-your-most-used-copilot-prompts" },
    { name: "Aide Microsoft : l'ordre du jour proposé par Copilot dans Outlook", url: "https://support.microsoft.com/fr-fr/office/create-a-meeting-with-copilot-31a44dfa-62bb-4751-82c4-14327a26759f" },
    { name: "Aide Microsoft : la replanification automatique et ses exclusions", url: "https://support.microsoft.com/fr-fr/office/automatically-reschedule-events-with-copilot-in-microsoft-outlook-and-microsoft-teams" },
    { name: "Aide Microsoft : l'onglet Récapitulatif d'une réunion Teams", url: "https://support.microsoft.com/fr-fr/office/r%C3%A9capitulatif-dans-microsoft-teams-c2e3a0fe-504f-4b2c-bf85-504938f110ef" },
    { name: "Aide Microsoft : Copilot en séance, sans transcription ni enregistrement", url: "https://support.microsoft.com/fr-fr/office/utiliser-copilot-sans-enregistrer-de-r%C3%A9union-teams-a59cb88c-0f6b-4a20-a47a-3a1c9a818bd9" },
    { name: "Aide Microsoft : brouillons Word appuyés sur des références", url: "https://support.microsoft.com/fr-fr/office/r%C3%A9digez-et-ajoutez-du-contenu-avec-copilot-dans-word-069c91f0-9e42-4c9a-bbce-fddf5d581541" },
    { name: "Aide Microsoft : les pages Copilot et leur partage", url: "https://support.microsoft.com/fr-fr/microsoft-365-copilot/get-started-with-microsoft-365-copilot-pages" },
    { name: "Microsoft Learn, en anglais : Copilot Cowork (disponibilité générale, 29 septembre 2026)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
    { name: "Microsoft : prix de Copilot Business sur la page française (relevé du 7 octobre 2026)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
  ],
}
