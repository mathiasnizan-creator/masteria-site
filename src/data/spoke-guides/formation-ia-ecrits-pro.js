// Contenu propre à /formation-ia-ecrits-pro (guide terrain). Rendu par SpokePage.
// Reprend, réécrit et vérifié, ce qui était juste dans l'article de blog
// formation-ecrits-pro-ia-redaction (redirigé vers cette page). Les gains de temps
// chiffrés de l'article (70 %, 80 %…) n'étaient pas sourcés : ils ne sont pas repris.
export default {
  slug: 'formation-ia-ecrits-pro',
  updatedAt: '2026-10-03',
  updatedLabel: 'Programme à jour · octobre 2026',
  metaDesc: "Formation écrits professionnels avec l'IA : mails délicats, comptes rendus, notes et propositions à votre ton, vérifiés avant envoi. 1 jour, Qualiopi, OPCO.",
  intro: "Un assistant d'IA comble chaque information absente de la demande par la formulation la plus courante. Le ton générique des textes écrits avec l'IA vient de là. En une journée, la formation vous apprend à briefer l'assistant comme un rédacteur : qui écrit, à qui, pour obtenir quoi, avec quels faits. Vous installez votre style dans l'outil à partir de vos propres textes, vous traitez vos mails délicats, comptes rendus, notes et propositions, puis vous apprenez à relire ce qui part sous votre nom.",
  guide: {
    kicker: "Guide terrain",
    h2: "L'IA écrit à votre manière quand votre demande nomme le lecteur et fournit les faits",
    lead: "Un mail de relance, un compte rendu ou une proposition commerciale engagent la personne qui les signe. L'assistant d'IA met un texte en forme en quelques secondes, mais il ignore l'historique du dossier et ce que votre entreprise a décidé. La journée apprend à lui fournir ces éléments et à lui faire adopter votre style à partir de vos propres textes. Elle se termine sur la relecture, parce que le texte part sous votre nom.",
    sections: [
      {
        h3: "Le ton générique vient d'une demande qui ne nomme pas son lecteur",
        paras: [
          "Demandez « un mail de relance pour une facture impayée » : l'assistant produit le mail de relance moyen, poli et interchangeable. Ajoutez le client, l'historique, le montant, l'échéance et ce que vous attendez de lui, et le texte change de nature. Un brief de rédaction tient en cinq éléments : qui écrit, à qui, dans quel but, avec quels faits, sous quelle forme (longueur, ton, structure).",
          "La norme ISO 24495-1, publiée en juin 2023, fixe les principes du langage clair. La Fédération internationale du langage clair le définit ainsi : un texte est en langage clair quand sa formulation, sa structure et sa présentation permettent au lecteur visé de trouver facilement ce dont il a besoin, de le comprendre et de l'utiliser. Demandez à l'assistant de réécrire selon ce critère, en nommant le lecteur visé.",
          "Dans un cabinet de conseil qui accompagne collectivités et syndicats mixtes sur leurs montages financiers, Masteria a inscrit une règle dans chacun des quatre assistants de réponse aux appels d'offres : avant de rédiger, l'assistant questionne le consultant sur l'historique du cabinet avec ce client, les priorités du client, la plus-value à mettre en avant, les références à citer et l'équipe à proposer. Le mémoire technique part ainsi du contexte du client. La même règle s'applique à un mail délicat : demandez à l'assistant de vous poser ses questions avant d'écrire.",
        ],
      },
      {
        h3: "Votre style s'apprend à partir de vos propres textes",
        paras: [
          "Chaque assistant garde des consignes permanentes. ChatGPT applique à toutes vos conversations des instructions personnalisées, jusqu'à 1 500 caractères en Free et en Go, et 5 000 sur les offres payantes. Claude distingue les instructions du compte, celles d'un projet et les compétences (skills), qui peuvent reprendre des façons d'écrire tirées de vos propres textes.",
          "Le guide de style se construit en atelier. Vous soumettez à l'assistant trois textes que vous avez signés et dont vous êtes satisfait, avec la demande d'en tirer les règles : longueur des phrases, formules d'ouverture et de clôture, vocabulaire de métier, mots à éviter. Vous relisez ces règles, vous les corrigez, puis vous les placez dans les instructions permanentes de votre outil.",
          "Dans Outlook, le brouillon de Copilot se règle en longueur et en ton, et le coaching par Copilot relit un mail que vous avez écrit pour proposer des corrections de ton, de clarté et de ressenti du lecteur. Le coaching sert de second regard sur un message sensible ; la décision d'appliquer chaque suggestion vous revient.",
        ],
      },
      {
        h3: "Chaque type d'écrit a son point de vigilance",
        paras: [
          "Pour un compte rendu, le récapitulatif de Teams produit des notes et des tâches de suivi à partir de la transcription d'une réunion d'au moins cinq minutes, avec une licence Teams Premium ou Microsoft Copilot. Microsoft prévient que ce contenu peut être inexact ou incomplet. Le compte rendu final distingue les décisions, les actions avec leur responsable et leur échéance, et les points restés ouverts ; il se relit avec une personne présente à la réunion.",
          "Pour un rapport ou une note de synthèse, le plan se valide avant la rédaction. L'assistant propose une structure à partir de vos documents ; vous la corrigez, puis il rédige section par section. L'auteur garde ainsi la maîtrise de l'argumentation, et ses corrections portent sur un plan d'une page avant de porter sur un texte entier.",
          "Pour une proposition commerciale, l'assistant travaille à partir de vos trames et de vos meilleures réponses passées, mais il ne connaît ni vos prix ni vos marges de négociation. Chaque chiffre et chaque délai se vérifient contre ce que l'entreprise a décidé avant l'envoi.",
        ],
      },
      {
        h3: "La relecture engage la personne qui signe",
        paras: [
          "Les conditions d'utilisation européennes de ChatGPT demandent d'évaluer l'exactitude d'une réponse avant de l'utiliser ou de la partager, avec une relecture humaine quand il le faut. Pour un écrit professionnel, la relecture porte sur quatre points : les faits et les chiffres, les noms et les dates, les engagements pris au nom de l'entreprise, et le ton à l'égard du destinataire.",
          "Les données du texte comptent autant que sa forme. Les échanges menés sur ChatGPT Business ou Enterprise restent, par défaut, hors du corpus d'entraînement d'OpenAI ; sur un compte personnel, c'est le réglage choisi par l'utilisateur qui décide. Un contrat ou un litige client se traite sur le compte de l'entreprise, et un brouillon de Copilot dans Outlook peut hériter d'un niveau de confidentialité plus élevé que celui du message d'origine.",
          "Pour les textes publiés, la règle européenne est applicable depuis le 2 août 2026 : tout texte généré ou modifié par l'IA et destiné à informer le public sur un sujet d'intérêt public doit le signaler, selon l'article 50 du règlement sur l'IA. Cette mention cesse d'être exigée si un humain a revu ou contrôlé le texte et qu'une personne, physique ou morale, en porte la responsabilité éditoriale. Un mail ou un compte rendu interne reste en dehors de ce cas.",
        ],
      },
    ],
    table: {
      caption: "Six écrits professionnels, ce que vous fournissez et ce que vous vérifiez",
      headers: ["Écrit", "Ce que vous donnez à l'assistant", "Ce que vous vérifiez avant l'envoi"],
      rows: [
        ["Relance d'une facture", "Client, montant, échéance, relances déjà faites, ton voulu", "Montant et dates exacts, aucune menace que l'entreprise n'appliquera pas"],
        ["Réponse à une réclamation", "Faits établis, clause du contrat ou des conditions générales, geste décidé", "Aucun aveu de responsabilité ni engagement que la direction n'a pas validé"],
        ["Compte rendu de réunion", "Transcription ou notes, liste des participants", "Décisions et responsables confirmés par un participant"],
        ["Note de synthèse", "Documents sources, lecteur visé, question à traiter", "Chaque chiffre retrouvé dans un document source"],
        ["Rapport", "Plan validé, documents, longueur de chaque section", "Cohérence d'ensemble, sources citées, conclusions que l'auteur assume"],
        ["Proposition commerciale", "Brief client, trames, références, prix décidés", "Prix, délais, références et nom du client exacts"],
      ],
    },
    cas: {
      h3: "Mise en situation : répondre à une réclamation client au ton de la maison",
      contexte: "Prenons la responsable du service client d'une PME qui livre du mobilier de bureau aux entreprises. Un client se plaint d'une livraison arrivée avec neuf jours de retard et d'un bureau au plateau rayé. L'entreprise a décidé de remplacer le bureau et de rembourser les frais de livraison, et elle ne reconnaît pas d'autre préjudice. La responsable utilise Microsoft 365 Copilot dans Outlook.",
      etapes: [
        "Elle rassemble les faits : le bon de commande, la livraison promise et la livraison réelle, les photos du client, l'article des conditions générales sur les délais.",
        "Dans le mail du client, elle clique sur « Aidez-moi à répondre » et colle le prompt ci-dessous dans la conversation qui s'ouvre ; il demande à l'assistant de poser ses questions avant de rédiger.",
        "Elle répond aux questions, puis demande une version plus courte du brouillon.",
        "Elle lance le coaching par Copilot sur la version finale et n'applique que les suggestions qui portent sur le ton.",
        "Elle vérifie les dates, le geste commercial et l'absence de promesse non décidée, puis envoie le mail sous son nom.",
      ],
      prompt: "Tu m'aides à répondre à une réclamation client. Je suis responsable du service client d'une PME qui vend et livre du mobilier de bureau aux entreprises.\n\nFaits établis :\n- commande n° [numéro] du [date], livraison promise le [date], livrée le [date], soit neuf jours de retard ;\n- un bureau livré avec un plateau rayé (photos du client en pièce jointe) ;\n- l'article [numéro] de nos conditions générales de vente prévoit : [texte de l'article].\n\nDécision de l'entreprise : remplacement du bureau sous dix jours ouvrés et remboursement des frais de livraison. Aucun autre geste.\n\nAvant d'écrire, pose-moi les questions dont tu as besoin, cinq au maximum. Ensuite, rédige une réponse de 150 mots au plus, qui :\n1. reconnaît le retard et le dommage avec des faits précis ;\n2. annonce la solution décidée et son délai ;\n3. n'admet aucune responsabilité au-delà de ces faits et ne promet rien d'autre ;\n4. garde un ton courtois et direct, avec le vouvoiement.\n\nStyle : phrases courtes, aucune formule toute faite comme « nous sommes désolés pour la gêne occasionnée ».",
      resultat: "Copilot pose quelques questions, puis rédige une réponse courte qui s'en tient aux faits et à la décision. La responsable garde la main sur deux points que l'assistant ne peut pas juger : le geste commercial, fixé par l'entreprise, et la relation avec ce client. Une fois les faits remplacés, le prompt sert de modèle pour les réclamations suivantes.",
    },
    pieges: [
      {
        titre: "Le texte lisse et interchangeable",
        texte: "Une demande qui ne nomme ni le lecteur ni les faits produit le texte moyen de sa catégorie. Donnez le destinataire, l'objectif et les faits, et joignez un texte que vous avez écrit et que vous jugez réussi.",
      },
      {
        titre: "Le chiffre inventé",
        texte: "Un assistant qui manque d'information peut combler le vide avec une valeur plausible, une date ou un montant. Fournissez les chiffres dans la demande et vérifiez chacun dans le document d'origine avant l'envoi.",
      },
      {
        titre: "L'engagement que la direction n'a pas pris",
        texte: "Dans une réponse à un client, l'assistant peut proposer de lui-même un geste commercial ou un délai. Écrivez dans la demande ce qui est décidé et ce qui ne l'est pas, puis relisez chaque engagement.",
      },
      {
        titre: "Le compte rendu diffusé sans relecture",
        texte: "Le récapitulatif de Teams repose sur la transcription, et Microsoft prévient qu'il peut être inexact ou incomplet. Faites confirmer les décisions et les responsables par un participant avant la diffusion.",
      },
      {
        titre: "Le dossier sensible dans un compte personnel",
        texte: "Contrats, litiges et dossiers de salariés relèvent du compte de l'entreprise, dont l'administrateur maîtrise les réglages. Un compte personnel dépend des seuls choix de son titulaire, y compris pour l'usage de vos textes dans l'entraînement des modèles.",
      },
    ],
  },
  audience: [
    { title: "Cadres et managers", desc: "Vous écrivez chaque jour des mails, des notes et des comptes rendus. Vous voulez des textes plus rapides à produire, qui gardent votre ton et vos formulations." },
    { title: "Commerciaux et chargés d'affaires", desc: "Vous rédigez relances, réponses aux réclamations et propositions. Vous voulez des textes précis, fidèles à ce que l'entreprise a décidé." },
    { title: "Assistants de direction et fonctions support", desc: "Vous produisez comptes rendus, courriers et notes pour la direction, les RH, le juridique ou la qualité. Vous voulez une méthode de relecture fiable avant chaque envoi." },
    { title: "Consultants et métiers du conseil", desc: "Vous produisez rapports, mémoires et propositions sous délai. Vous voulez un style homogène dans l'équipe et des assistants qui partent du contexte du client." },
  ],
  useCases: [
    { icon: '✉️', title: "Mails délicats", desc: "Relances, refus et réponses aux réclamations, rédigés à partir des faits et de la décision de l'entreprise." },
    { icon: '📝', title: "Comptes rendus", desc: "Décisions, actions et points ouverts tirés d'une transcription ou de vos notes, puis relus par un participant." },
    { icon: '📊', title: "Notes et rapports", desc: "Un plan validé avant la rédaction, des sections rédigées une à une, chaque chiffre retrouvé dans sa source." },
    { icon: '💼', title: "Propositions commerciales", desc: "Vos trames et vos meilleures réponses passées réutilisées, des prix et des délais contrôlés avant l'envoi." },
    { icon: '🎙️', title: "Newsletters et articles", desc: "Des textes publiés après relecture humaine, sous la responsabilité éditoriale d'une personne nommée." },
    { icon: '🛡️', title: "Guide de style personnel", desc: "Vos règles d'écriture tirées de vos meilleurs textes et placées dans les instructions permanentes de l'outil." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Briefer l'assistant comme un rédacteur", duration: '1h15',
      description: "La qualité du texte dépend des informations fournies. Vous apprenez à écrire une demande qui donne le lecteur, le but et les faits.",
      items: [
        "Les cinq éléments d'un brief : auteur, lecteur, but, faits, forme",
        "Faire poser ses questions à l'assistant avant la rédaction",
        "Fixer la longueur et la structure attendues",
        "Donner un exemple de texte réussi",
      ],
      exercise: "Réécrire trois demandes que vous avez faites à l'IA cette semaine, puis comparer les textes obtenus.",
    },
    {
      day: 1, title: "Module 2 · Installer votre style dans l'outil", duration: '1h15',
      description: "L'assistant reprend votre ton si vous le lui décrivez. Vous construisez votre guide de style à partir de textes que vous avez signés.",
      items: [
        "Tirer des règles d'écriture de trois de vos textes",
        "Instructions personnalisées de ChatGPT, instructions et compétences de Claude",
        "Brouillon et coaching par Copilot dans Outlook",
        "Corriger le guide de style après une semaine d'usage",
      ],
      exercise: "Rédiger votre guide de style et le placer dans les instructions permanentes de votre assistant.",
    },
    {
      day: 1, title: "Module 3 · Réécrire en langage clair", duration: '1h',
      description: "Un texte existant se réécrit pour un lecteur précis. Vous appliquez les principes du langage clair avec l'aide de l'assistant.",
      items: [
        "Le langage clair selon la norme ISO 24495-1 : trouver, comprendre, utiliser",
        "Raccourcir, restructurer, changer de registre",
        "Adapter un même contenu à deux lecteurs différents",
      ],
      exercise: "Réécrire une procédure ou un courrier type de votre service pour son lecteur réel.",
    },
    {
      day: 1, title: "Module 4 · Traiter les mails délicats", duration: '1h',
      description: "Une relance, un refus ou une réponse à une réclamation engagent l'entreprise. Vous rédigez à partir des faits et de la décision prise.",
      items: [
        "Relance de paiement graduée",
        "Refus motivé d'une demande de client ou de fournisseur",
        "Réponse à une réclamation : faits, solution décidée, limites",
        "Contrôle des engagements avant l'envoi",
      ],
      exercise: "Traiter un mail délicat réel de votre boîte, de la demande à la relecture finale.",
    },
    {
      day: 1, title: "Module 5 · Produire comptes rendus et notes de synthèse", duration: '1h15',
      description: "Une réunion ou un dossier se résume en décisions et en actions. Vous partez d'une transcription ou de documents, puis vous vérifiez chaque point.",
      items: [
        "Récapitulatif de Teams et transcription : conditions et limites",
        "Structure en décisions, actions et points ouverts",
        "Note de synthèse à partir de plusieurs documents",
        "Relecture par un participant ou par l'auteur des documents",
      ],
      exercise: "Produire le compte rendu d'une réunion récente et le faire valider par un participant.",
    },
    {
      day: 1, title: "Module 6 · Rédiger rapports et propositions", duration: '1h15',
      description: "Un écrit long se construit à partir du plan. Vous rédigez section par section et vous contrôlez les chiffres comme les engagements.",
      items: [
        "Valider le plan avant la rédaction",
        "Rédiger section par section à partir de vos documents",
        "Proposition commerciale à partir des trames et des réponses passées",
        "Relecture finale : faits, noms, prix, délais, ton",
      ],
      exercise: "Rédiger la partie centrale d'un rapport ou d'une proposition en cours et la relire avec la grille de la journée.",
    },
  ],
  objectives: [
    "Rédiger un brief de rédaction qui précise l'auteur, le lecteur, le but, les faits et la forme attendue",
    "Construire un guide de style à partir de ses propres textes et le placer dans les instructions permanentes d'un assistant",
    "Réécrire un texte existant en langage clair pour un lecteur précis",
    "Produire un compte rendu qui distingue décisions, actions avec responsable et échéance, et points ouverts",
    "Vérifier un texte produit par l'IA sur les faits, les chiffres, les noms et les engagements avant l'envoi",
    "Déterminer si un texte publié doit mentionner l'usage de l'IA selon l'article 50 de l'AI Act",
  ],
  faq: [
    {
      q: "Comment éviter qu'un mail écrit avec l'IA paraisse générique ?",
      a: "Donnez à l'assistant ce qu'il ne peut pas deviner : le destinataire, l'historique, le but du message et les faits. Joignez un mail que vous avez écrit et que vous jugez réussi, puis demandez une longueur précise. Placez vos règles d'écriture dans les instructions permanentes de l'outil, comme les instructions personnalisées de ChatGPT ou les instructions de Claude, pour ne plus avoir à les répéter. Relisez enfin à voix haute : une formule que vous n'auriez pas écrite se repère tout de suite.",
    },
    {
      q: "Faut-il Microsoft Copilot pour suivre la formation écrits professionnels avec l'IA ?",
      a: "Non. La méthode de la journée fonctionne avec Claude, ChatGPT, Gemini, Mistral Vibe ou Copilot. Copilot apporte l'intégration à Outlook et à Teams : brouillon réglable en longueur et en ton, coaching d'un mail que vous avez écrit, récapitulatif de réunion avec la licence adaptée. Les exercices se font sur l'outil que votre entreprise utilise.",
    },
    {
      q: "Peut-on confier des documents confidentiels à un assistant d'IA pour rédiger un rapport ?",
      a: "Oui, sur une offre d'entreprise et avec des règles. Pour ChatGPT, les offres Business et Enterprise sont exclues de l'entraînement par défaut, une garantie qui n'existe pas sur un compte personnel, où l'utilisateur fixe lui-même ce réglage. Réservez les documents confidentiels au compte de l'entreprise et respectez l'étiquette de confidentialité de vos fichiers, que Copilot reporte sur le brouillon quand elle est plus stricte.",
    },
    {
      q: "Doit-on signaler qu'un texte professionnel a été rédigé avec l'IA ?",
      a: "Pour l'entreprise qui utilise l'IA, l'AI Act ne prévoit de mention pour un texte que dans un cas : la publication qui vise à renseigner le public sur des sujets d'intérêt public. Depuis le 2 août 2026, un tel texte doit indiquer l'intervention de l'IA, à moins qu'un humain l'ait revu et qu'une personne physique ou morale en endosse la responsabilité éditoriale. Un mail, une note interne ou une proposition commerciale ne sont pas concernés. Vérifiez aussi les règles de votre entreprise, de vos clients et de votre profession.",
    },
    {
      q: "Peut-on utiliser l'IA pour des écrits juridiques, médicaux ou réglementaires ?",
      a: "Pour la forme, oui : structurer, reformuler, adapter au lecteur. Le fond relève de l'expert qui signe. Les conditions européennes de ChatGPT demandent de ne pas utiliser une réponse comme seule source de vérité ni à la place d'un conseil professionnel. Fournissez les textes de référence dans la demande, interdisez à l'assistant de citer un texte que vous ne lui avez pas donné, et vérifiez chaque référence à sa source officielle.",
    },
    {
      q: "Combien coûte la formation écrits professionnels avec l'IA et comment la faire financer ?",
      a: "Une journée coûte 1 980 € HT, que la session réunisse jusqu'à 12 collaborateurs en intra-entreprise ou une seule personne, sur site ou en distanciel ; la TVA de 20 % s'y ajoute. La certification Qualiopi de Masteria, obtenue pour les actions de formation, ouvre à votre OPCO la possibilité de financer la journée, dans les limites que fixe votre branche. Masteria vous envoie le programme et la convention, puis votre entreprise saisit son OPCO avant la formation.",
    },
    {
      q: "En quoi la formation écrits professionnels avec l'IA diffère-t-elle d'une formation classique à l'écrit ?",
      a: "Une formation classique enseigne les règles de l'écrit, de la structure au registre. Celle-ci suppose que vous savez ce que vous voulez dire, et vous apprend à le faire écrire par l'IA avec votre ton, puis à vérifier le résultat. Les deux se complètent : les principes du langage clair servent de grille de relecture tout au long de la journée.",
    },
  ],
  sources: [
    { name: "ISO 24495-1:2023, Langage clair et simple, partie 1 : principes directeurs et lignes directrices", url: "https://www.iso.org/fr/standard/78907.html" },
    { name: "International Plain Language Federation : définition du langage clair", url: "https://www.iplfederation.org/plain-language/" },
    { name: "OpenAI Help Center : ChatGPT Custom Instructions", url: "https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions" },
    { name: "Claude Help Center : les fonctions de personnalisation de Claude", url: "https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features" },
    { name: "Microsoft Support : rédiger un message e-mail avec Copilot dans Outlook", url: "https://support.microsoft.com/fr-fr/outlook/copilot-pages/draft-an-email-message-with-copilot-in-outlook" },
    { name: "Microsoft Support : coaching par e-mail avec Copilot dans Outlook", url: "https://support.microsoft.com/fr-fr/outlook/copilot-pages/get-email-coaching-with-copilot-in-outlook" },
    { name: "Microsoft Support : récapitulatif dans Microsoft Teams", url: "https://support.microsoft.com/fr-fr/teams/meetings/recap-in-microsoft-teams" },
    { name: "OpenAI : conditions d'utilisation pour l'Europe (version du 16 janvier 2026)", url: "https://openai.com/fr-FR/policies/eu-terms-of-use/" },
    { name: "OpenAI : sécurité, confidentialité et conformité des données des entreprises", url: "https://openai.com/fr-FR/business-data/" },
    { name: "Règlement (UE) 2024/1689 sur l'intelligence artificielle, article 50", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
}
