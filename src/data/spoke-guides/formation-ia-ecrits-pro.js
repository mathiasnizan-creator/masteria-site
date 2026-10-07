// Contenu propre à /formation-ia-ecrits-pro (page propre, guide terrain). Rendu par SpokePage.
// Formation d'un jour. Norme ISO 24495-1, aides OpenAI, Anthropic et Microsoft, article 50
// de l'AI Act repris du guide du 03/10 avec leurs sources ; les gains de temps chiffrés de
// l'ancien article de blog (70 %, 80 %…) n'étaient pas sourcés et ne sont pas repris.
// Revu le 07/10/2026 : compétences (Gemini, Copilot, Vibe), fin des GPTs au 11/12/2026,
// « Modifier avec Copilot » dans Word, selon la fiche FAITS-OUTILS du 07/10.
export default {
  slug: 'formation-ia-ecrits-pro',
  pagePropre: true,
  auteur: true,
  updatedAt: '2026-10-07',
  updatedLabel: 'Revu le 7 octobre 2026',
  h1: "Formation écrits professionnels avec l'IA : mails, comptes rendus et propositions à votre ton",
  metaTitle: "Formation écrits professionnels avec l'IA | Masteria",
  metaDesc: "Formation écrits professionnels avec l'IA, 1 jour : mails délicats, comptes rendus, notes, propositions à votre style, relus avant envoi. Qualiopi.",
  resume: "La formation écrits professionnels avec l'IA apprend en une journée à faire rédiger par un assistant les mails, comptes rendus, notes et propositions qui partent sous votre nom, avec votre ton, puis à les relire avant l'envoi. Elle se tient chez vous ou en classe virtuelle, avec un groupe de douze collaborateurs au plus ou un participant seul, pour un tarif de 1 980 € HT. Masteria tient sa certification Qualiopi au titre de ses actions de formation ; l'OPCO de votre branche peut dès lors financer la session, s'il l'accepte une fois ses critères et son budget passés en revue.",
  enBref: [
    { label: 'Formation', value: "Écrire avec Copilot, ChatGPT, Claude, Gemini ou Vibe des textes qui engagent la personne qui les signe" },
    { label: 'Durée', value: "Une journée de sept heures : la demande et le style le matin, les écrits du quotidien et leur relecture l'après-midi" },
    { label: 'Formats', value: "Sur place, en salle, ou à distance ; jusqu'à douze collaborateurs réunis, ou une personne en individuel" },
    { label: 'Tarif', value: "1 980 € HT la journée entière, montant inchangé de un à douze inscrits, hors TVA de 20 %" },
    { label: 'Financement', value: "Qualiopi obtenu par Masteria pour la formation ; l'OPCO de votre branche statue sur la demande selon ses règles et ses fonds" },
    { label: 'Prérequis', value: "Un accès professionnel à l'assistant d'IA de l'entreprise et trois textes récents que vous avez signés et dont vous êtes satisfait" },
  ],
  prerequis: "Un accès professionnel à l'assistant d'IA de l'entreprise et trois textes récents que vous avez signés et dont vous êtes satisfait",
  intro: "Un assistant d'IA comble chaque information absente de la demande par la formulation la plus répandue : c'est de là que vient le ton passe-partout des textes écrits avec l'IA. En une journée, vous apprenez à briefer l'assistant comme un rédacteur, en lui disant qui écrit, à qui, pour obtenir quoi et avec quels faits. Vous installez votre style dans l'outil à partir de vos propres textes, vous traitez vos mails délicats, vos comptes rendus, vos notes et vos propositions, et vous repartez avec une grille pour relire tout ce qui part sous votre nom.",
  guide: {
    kicker: "Guide terrain rédaction",
    h2: "L'IA écrit à votre manière quand votre demande nomme le lecteur et fournit les faits",
    lead: "Un mail de relance, un compte rendu ou une proposition commerciale engagent la personne qui les signe. L'assistant met un texte en forme en quelques secondes, mais il ignore l'historique du dossier et ce que votre entreprise a décidé. La journée apprend à lui fournir ces éléments, puis à lui faire adopter votre style à partir de vos propres textes. Elle se termine sur la relecture, puisque c'est votre nom qui figure en bas du message.",
    sections: [
      {
        h3: "Le ton passe-partout vient d'une demande qui ne nomme pas son lecteur",
        paras: [
          "Demandez « un mail de relance pour une facture impayée » : l'assistant livre la relance moyenne, polie et interchangeable. Ajoutez le client, l'historique, le montant, l'échéance et ce que vous attendez de lui, et le texte change de nature. Un brief de rédaction tient en cinq éléments : qui écrit, à qui, dans quel but, avec quels faits, sous quelle forme (longueur, ton, structure).",
          "La norme ISO 24495-1, parue en juin 2023, fixe les principes du langage clair. La Fédération internationale du langage clair en donne une définition simple : un texte est clair quand sa formulation, sa structure et sa présentation permettent au lecteur visé de trouver facilement ce qu'il cherche, de le comprendre et de s'en servir. Demandez à l'assistant de réécrire selon ce critère, en nommant le lecteur visé.",
          "Chez un conseil financier du secteur public, qui épaule collectivités et syndicats mixtes, Masteria a construit quatre assistants, chacun spécialisé dans un type de consultation, et leur a donné une règle commune : avant de rédiger, l'assistant interroge le consultant sur l'historique du cabinet avec ce client, ses priorités, la plus-value à défendre, les références à citer et l'équipe à proposer. Le mémoire technique part donc de la situation du client. La même règle vaut pour un mail sensible : demandez à l'assistant ses questions avant son brouillon.",
        ],
      },
      {
        h3: "Votre style s'apprend à partir de vos propres textes",
        paras: [
          "Chaque assistant garde des consignes permanentes. ChatGPT applique à toutes vos conversations des instructions personnalisées, jusqu'à mille cinq cents caractères en Free et en Go, et cinq mille sur les offres payantes. Claude distingue les instructions du compte, celles d'un projet et les compétences (skills), des dossiers d'instructions qu'il ouvre quand la demande les concerne. Depuis le 2 septembre 2026, les instructions personnalisées de Gemini valent aussi dans Drive et dans Chat, et Vibe range vos préférences dans sa Knowledge Base.",
          "Le guide de style se construit en atelier. Vous soumettez à l'assistant trois textes signés de votre main et dont vous êtes content, avec la demande d'en tirer les règles : longueur des phrases, formules d'ouverture et de clôture, vocabulaire du métier, mots bannis. Vous relisez ces règles, vous les corrigez, puis vous les rangez dans les consignes permanentes de votre outil.",
          "Ce guide gagne à s'écrire sous forme de compétence, au format SKILL.md lancé par Anthropic et repris depuis par la plupart des éditeurs. Google les déploie dans Workspace à partir du 5 octobre 2026, à la place des Gems ; Copilot Cowork peut accueillir une cinquantaine de compétences écrites par l'entreprise (50 au plus) ; Vibe en fournit de prêtes à l'emploi, comme /internal-comms, pensée pour la communication interne. Chez OpenAI, les GPTs personnalisés disparaissent le 11 décembre 2026 et leurs instructions deviennent une compétence rangée dans un plugin. Une procédure écrite une fois suit donc l'équipe quand elle change d'assistant.",
        ],
      },
      {
        h3: "Chaque type d'écrit a son point de vigilance",
        paras: [
          "Dans Outlook, Copilot rédige un brouillon dont vous réglez la longueur et le ton, et son coaching passe en revue un mail que vous avez écrit pour suggérer des corrections de ton, de clarté et d'effet sur le destinataire. Ce coaching tient lieu de second regard sur un message délicat ; chaque suggestion reste à accepter ou à écarter.",
          "Pour un compte rendu, le récapitulatif de Teams tire des notes et des tâches de suivi de la transcription d'une réunion d'au moins cinq minutes, avec une licence Teams Premium ou Microsoft Copilot (anciennement Microsoft 365 Copilot). Microsoft prévient que ce contenu peut être inexact ou incomplet. Le compte rendu final sépare les décisions, les actions assorties d'un porteur et d'une date, et les questions restées ouvertes ; un participant le relit avant diffusion.",
          "Pour un rapport ou une note de synthèse, le plan se valide avant la rédaction. L'assistant propose une structure tirée de vos documents, vous la corrigez, puis il rédige section après section ; dans Word, « Modifier avec Copilot » intervient sur le document ouvert, et ChatGPT comme Claude disposent eux aussi d'un complément pour Word. Pour une proposition commerciale, l'assistant s'appuie sur vos modèles et sur vos meilleures réponses passées, mais il ignore vos prix et vos marges de négociation : chaque montant et chaque délai se contrôlent contre ce que l'entreprise a décidé.",
        ],
      },
      {
        h3: "La relecture engage la personne qui signe",
        paras: [
          "Les conditions qu'OpenAI applique en Europe demandent de juger l'exactitude d'une réponse avant de s'en servir ou de la transmettre, avec une relecture humaine quand le contexte l'exige. Pour un écrit professionnel, la relecture porte sur quatre points : les faits et les chiffres, les noms et les dates, les engagements pris au nom de l'entreprise, et le ton employé envers le destinataire.",
          "Les données du texte comptent autant que sa forme. Chez OpenAI, les conversations tenues sur Business et Enterprise échappent par défaut à l'entraînement ; sur un compte personnel, le réglage choisi par l'utilisateur décide. Un contrat ou un litige client se traite sur le compte professionnel, et un brouillon de Copilot dans Outlook peut hériter d'une étiquette de confidentialité plus stricte que celle du message d'origine.",
          "Pour les textes publiés, une règle européenne joue à compter du 2 août 2026 : un contenu écrit ou remanié par l'IA, rendu public pour éclairer les lecteurs sur un sujet d'intérêt public, doit le signaler en application de l'AI Act. La mention tombe lorsqu'un humain a revu ou contrôlé le texte et que quelqu'un, salarié ou entreprise, en porte la responsabilité éditoriale. Une relance client ou une note de service échappent à ce cas.",
        ],
      },
    ],
    table: {
      caption: "Six écrits du quotidien : ce que vous donnez à l'assistant, ce que vous contrôlez avant l'envoi",
      headers: ["Écrit", "Ce que vous donnez à l'assistant", "Ce que vous contrôlez avant l'envoi"],
      rows: [
        ["Relance d'une facture", "Client, montant, échéance, relances déjà faites, ton voulu", "Montant et dates exacts, aucune menace que l'entreprise n'appliquera pas"],
        ["Réponse à une réclamation", "Faits établis, clause du contrat ou des conditions générales, geste décidé", "Aucun aveu de responsabilité, aucun engagement que la direction n'a pas validé"],
        ["Compte rendu de réunion", "Transcription ou notes, liste des participants", "Décisions et porteurs confirmés par un participant"],
        ["Note de synthèse", "Documents sources, lecteur visé, question à traiter", "Chaque chiffre retrouvé dans un document source"],
        ["Rapport", "Plan validé, documents, longueur de chaque section", "Cohérence d'ensemble, sources citées, conclusions que l'auteur assume"],
        ["Proposition commerciale", "Brief client, modèles, références, prix arrêtés", "Prix, délais, références et nom du client exacts"],
      ],
    },
    cas: {
      h3: "Mise en situation : répondre à une réclamation client au ton de la maison",
      contexte: "Imaginons une PME qui vend et livre du mobilier de bureau à des entreprises. La personne qui dirige sa relation client reçoit la plainte d'un acheteur : une livraison arrivée avec neuf jours de retard et un bureau au plateau rayé. L'entreprise a décidé de remplacer le bureau et de rembourser les frais de livraison, sans reconnaître d'autre préjudice. La responsable travaille avec Copilot dans Outlook.",
      etapes: [
        "Elle réunit les faits : le bon de commande, la date promise et la date réelle de livraison, les photos du client, l'article des conditions générales sur les délais.",
        "Depuis le mail du client, elle ouvre « Aidez-moi à répondre » et saisit la demande citée ci-dessous, qui réclame à l'assistant ses questions avant tout brouillon.",
        "Elle répond aux questions, puis réclame une version plus courte.",
        "Elle lance le coaching de Copilot sur la version finale et n'en retient que les suggestions de ton.",
        "Elle vérifie les dates, le geste commercial et l'absence de toute promesse non décidée, puis envoie le mail sous son nom.",
      ],
      prompt: "Aide-moi à répondre à la réclamation d'un client. Je dirige la relation client d'une PME qui vend et livre du mobilier de bureau aux entreprises.\n\nFaits établis :\n- commande n° [numéro] du [date], livraison promise le [date], effectuée le [date], soit neuf jours de retard ;\n- un bureau livré avec un plateau rayé (photos du client jointes) ;\n- l'article [numéro] de nos conditions générales de vente prévoit : [texte de l'article].\n\nDécision de l'entreprise : remplacement du bureau sous dix jours ouvrés et remboursement des frais de livraison. Rien d'autre.\n\nAvant de rédiger, pose-moi tes questions, cinq au plus. Ensuite, écris une réponse de 150 mots maximum qui :\n1. reconnaît le retard et le dommage par des faits précis ;\n2. annonce la solution décidée et son délai ;\n3. n'admet aucune responsabilité au-delà de ces faits et ne promet rien de plus ;\n4. reste courtoise et directe, avec le vouvoiement.\n\nStyle : phrases courtes, aucune formule toute faite du type « nous sommes désolés pour la gêne occasionnée ».",
      resultat: "Copilot pose quelques questions, puis rédige une réponse courte qui s'en tient aux faits et à la décision. La responsable garde la main sur deux points que l'assistant ne peut pas juger : le geste commercial, arrêté par l'entreprise, et la relation avec ce client. Une fois les faits remplacés, la consigne sert de modèle pour les réclamations suivantes, et elle peut devenir une compétence partagée par tout le service.",
    },
    pieges: [
      {
        titre: "Le texte lisse et interchangeable",
        texte: "Une demande qui ne nomme ni le lecteur ni les faits produit le texte moyen de sa catégorie. Indiquez le destinataire, l'objectif et les faits, et joignez un texte de votre main que vous jugez réussi.",
      },
      {
        titre: "Le chiffre sorti de nulle part",
        texte: "Faute d'information, un assistant peut remplir le blanc avec une date ou un montant vraisemblable. Donnez les chiffres dans la demande et retrouvez chacun dans le document d'origine avant l'envoi.",
      },
      {
        titre: "L'engagement que la direction n'a pas pris",
        texte: "Dans une réponse à un client, l'assistant peut proposer de lui-même un geste commercial ou un délai. Écrivez dans la demande ce qui est décidé et ce qui reste à trancher, puis relisez chaque engagement.",
      },
      {
        titre: "Le compte rendu diffusé sans relecture",
        texte: "Le récapitulatif de Teams repose sur la transcription, et Microsoft avertit qu'il peut être inexact ou incomplet. Faites confirmer les décisions et les porteurs par un participant avant de diffuser.",
      },
      {
        titre: "Le dossier sensible rédigé sur un compte personnel",
        texte: "Contrats, litiges et dossiers de salariés relèvent du compte professionnel, dont l'administrateur maîtrise les réglages. Un compte personnel dépend des seuls choix de son titulaire, y compris pour l'usage de vos textes dans l'entraînement des modèles.",
      },
      {
        titre: "Le guide de style bâti sur un GPT en fin de vie",
        texte: "OpenAI retire ses GPTs personnalisés à la date du 11 décembre 2026, tandis que Google remplace ses Gems par des compétences. Écrivez votre guide de style comme une compétence ou dans les consignes d'un projet : il survivra au changement d'outil.",
      },
    ],
  },
  audience: [
    { title: "Cadres et managers", desc: "Mails, notes et comptes rendus remplissent vos journées. Vous voulez les produire plus vite sans perdre votre ton ni vos formulations." },
    { title: "Commerciaux et chargés d'affaires", desc: "Vous rédigez relances, réponses aux réclamations et propositions. Vous voulez des textes précis, fidèles à ce que l'entreprise a décidé." },
    { title: "Assistants de direction et fonctions support", desc: "Vous produisez comptes rendus, courriers et notes pour la direction, les RH, le juridique ou la qualité. Vous voulez une méthode de relecture sûre avant chaque envoi." },
    { title: "Consultants et métiers du conseil", desc: "Rapports, mémoires et propositions s'écrivent chez vous sous délai. Vous voulez un style homogène dans l'équipe et des assistants qui partent de la situation du client." },
  ],
  useCases: [
    { icon: '✉️', title: "Mails délicats", desc: "Relances, refus et réponses aux réclamations, rédigés à partir des faits et de la décision de l'entreprise." },
    { icon: '📝', title: "Comptes rendus", desc: "Décisions, actions et questions ouvertes tirées d'une transcription ou de vos notes, puis relues par un participant." },
    { icon: '📊', title: "Notes et rapports", desc: "Un plan validé avant la rédaction, des sections écrites une à une, chaque chiffre retrouvé dans sa source." },
    { icon: '💼', title: "Propositions commerciales", desc: "Vos modèles et vos meilleures réponses passées réutilisés, prix et délais contrôlés avant l'envoi." },
    { icon: '🎙️', title: "Lettres d'information et articles", desc: "Des textes publiés après relecture humaine, sous la responsabilité éditoriale d'une personne nommée." },
    { icon: '🛡️', title: "Guide de style en compétence", desc: "Vos règles d'écriture tirées de vos meilleurs textes et rangées là où l'assistant les relit à chaque demande." },
  ],
  modules: [
    {
      day: 1, title: "Module 1 · Briefer l'assistant comme un rédacteur", duration: '1h15',
      description: "La qualité du texte dépend des informations fournies. Vous apprenez à écrire une demande qui donne le lecteur, le but et les faits.",
      items: [
        "Les cinq éléments d'un brief : auteur, lecteur, but, faits, forme",
        "Obtenir les questions de l'assistant avant son brouillon",
        "Fixer la longueur et la structure attendues",
        "Joindre un exemple de texte réussi",
      ],
      exercise: "Vous réécrivez trois demandes faites à l'IA cette semaine, puis comparez les textes obtenus.",
    },
    {
      day: 1, title: "Module 2 · Installer votre style dans l'outil", duration: '1h15',
      description: "L'assistant reprend votre ton si vous le lui décrivez. Vous construisez votre guide de style à partir de textes que vous avez signés.",
      items: [
        "Tirer des règles d'écriture de trois de vos textes",
        "Consignes permanentes : ChatGPT, Gemini, Claude, et la Knowledge Base de Vibe",
        "Le guide écrit comme une compétence, réutilisable si l'entreprise change d'assistant",
        "Corriger le guide après une semaine d'usage",
      ],
      exercise: "Vous rédigez votre guide de style et le rangez dans les consignes permanentes de votre assistant.",
    },
    {
      day: 1, title: "Module 3 · Réécrire en langage clair", duration: '1h',
      description: "Un texte existant se réécrit pour un lecteur précis. Vous appliquez les principes du langage clair avec l'assistant.",
      items: [
        "Le langage clair selon la norme ISO 24495-1 : trouver, comprendre, utiliser",
        "Raccourcir, restructurer, changer de registre",
        "Adapter un même contenu à deux lecteurs différents",
      ],
      exercise: "Vous réécrivez une procédure ou un courrier type de votre service pour la personne qui le lit au quotidien.",
    },
    {
      day: 1, title: "Module 4 · Traiter les mails délicats", duration: '1h',
      description: "Une relance, un refus ou une réponse à une réclamation engagent l'entreprise. Vous rédigez à partir des faits et de la décision prise.",
      items: [
        "Relance de paiement graduée",
        "Refus motivé d'une demande de client ou de fournisseur",
        "Réponse à une réclamation : faits, solution décidée, limites",
        "Brouillon et coaching de Copilot dans Outlook, et contrôle des engagements",
      ],
      exercise: "Vous traitez un mail délicat tiré de votre boîte, de la demande à la relecture finale.",
    },
    {
      day: 1, title: "Module 5 · Produire comptes rendus et notes de synthèse", duration: '1h15',
      description: "Une réunion ou un dossier se résume en décisions et en actions. Vous partez d'une transcription ou de documents, puis vous vérifiez chaque point.",
      items: [
        "Récapitulatif de Teams et transcription : conditions et limites",
        "Structure en décisions, actions et questions ouvertes",
        "Note de synthèse tirée de plusieurs documents",
        "Relecture par un participant ou par l'auteur des documents",
      ],
      exercise: "Vous rédigez les notes d'une réunion de la semaine et les faites valider par un participant.",
    },
    {
      day: 1, title: "Module 6 · Rédiger rapports et propositions, puis fixer les règles", duration: '1h15',
      description: "Un écrit long se construit à partir du plan. Vous rédigez section par section, contrôlez chiffres et engagements, puis vous arrêtez les règles de votre équipe.",
      items: [
        "Valider le plan avant la rédaction, « Modifier avec Copilot » et les compléments Word de ChatGPT et Claude",
        "Proposition commerciale tirée des modèles et des réponses passées",
        "Données admises dans l'outil, charte d'usage, registre de formation attendu par l'AI Act",
        "Plan à trente jours : trois écrits récurrents à outiller, une relecture croisée par semaine",
      ],
      exercise: "Vous rédigez la partie centrale d'un rapport ou d'une proposition en cours, puis la relisez avec la grille de la journée.",
    },
  ],
  objectives: [
    "Rédiger un brief de rédaction qui précise l'auteur, le lecteur, le but, les faits et la forme attendue",
    "Construire un guide de style à partir de ses propres textes et le ranger dans les consignes permanentes d'un assistant",
    "Réécrire un texte existant en langage clair pour un lecteur précis",
    "Produire un compte rendu qui sépare décisions, actions avec porteur et date, et questions ouvertes",
    "Contrôler un texte produit par l'IA sur les faits, les chiffres, les noms et les engagements avant l'envoi",
    "Déterminer si un texte publié doit signaler l'intervention de l'IA, selon l'AI Act",
  ],
  faq: [
    {
      q: "Comment éviter qu'un mail écrit avec l'IA paraisse générique ?",
      a: "Donnez à l'assistant ce qu'il ne peut pas deviner : le destinataire, l'historique, le but du message et les faits. Joignez un mail de votre main que vous jugez réussi, puis demandez une longueur précise. Rangez vos règles d'écriture dans les consignes permanentes de l'outil, comme les instructions personnalisées de ChatGPT ou une compétence de Claude, pour ne plus avoir à les répéter. Relisez enfin à voix haute : une formule que vous n'auriez pas écrite saute aux oreilles.",
    },
    {
      q: "Copilot est-il indispensable pour suivre cette journée d'écriture ?",
      a: "Non. La méthode fonctionne avec Claude, ChatGPT, Gemini, Vibe ou Copilot. Copilot apporte son intégration à Outlook et à Teams : brouillon réglable en longueur et en ton, coaching d'un mail que vous avez écrit, récapitulatif de réunion avec la licence adaptée. Gemini fait de même dans Gmail et Docs à partir de l'édition Business Standard. Les exercices se déroulent dans l'assistant retenu par votre entreprise.",
    },
    {
      q: "Peut-on confier des documents confidentiels à un assistant d'IA pour rédiger un rapport ?",
      a: "Oui, sur une offre professionnelle et avec des règles écrites. Les formules Business et Enterprise d'OpenAI sont exclues de l'entraînement par défaut, garantie absente d'un compte personnel où l'utilisateur fixe lui-même ce réglage. Google prend le même engagement pour les comptes Workspace. Réservez les documents confidentiels au compte professionnel et respectez l'étiquette de confidentialité de vos fichiers, que Copilot reporte sur le brouillon quand elle est plus stricte.",
    },
    {
      q: "Faut-il mentionner l'IA au bas d'un texte professionnel ?",
      a: "Pour l'entreprise qui utilise l'IA, l'AI Act ne prévoit de mention que dans un cas : la publication destinée à renseigner ses lecteurs sur un enjeu d'intérêt public. Un tel texte doit, depuis le 2 août 2026, indiquer l'intervention de l'IA, sauf si un humain l'a revu et qu'une personne physique ou morale en endosse la responsabilité éditoriale. Une relance, une note interne ou une proposition commerciale ne sont pas visées. Vérifiez aussi les règles de votre entreprise, de vos clients et de votre profession.",
    },
    {
      q: "L'IA convient-elle aux écrits juridiques, médicaux ou réglementaires ?",
      a: "Pour la forme, oui : structurer, reformuler, adapter au lecteur. Le fond appartient à l'expert qui signe. Les conditions européennes d'OpenAI demandent de ne pas traiter une réponse comme seule source de vérité ni comme substitut à un conseil professionnel. Fournissez les textes de référence dans la demande, interdisez à l'assistant de citer un texte que vous ne lui avez pas donné, et vérifiez chaque référence à sa source officielle.",
    },
    {
      q: "Que coûte la journée d'écriture, et qui peut la prendre en charge ?",
      a: "Comptez 1 980 € HT, hors TVA, pour la session, que la session réunisse jusqu'à douze collaborateurs de l'entreprise ou une seule personne, sur site comme en distanciel, plus 20 % de TVA. La certification Qualiopi de Masteria autorise votre OPCO à prendre en charge la journée, s'il la juge conforme à ses règles et que ses fonds le permettent. Vous recevez de Masteria les pièces à joindre, puis votre entreprise sollicite son OPCO avant la session.",
    },
    {
      q: "En quoi cette journée diffère-t-elle d'une formation classique à l'écrit ?",
      a: "Une formation classique enseigne les règles de l'écrit, de la structure au registre. Celle-ci part du principe que vous savez ce que vous voulez dire, et vous apprend à le faire écrire par l'IA avec votre ton, puis à contrôler le résultat. Les deux se complètent : les principes du langage clair servent de grille de relecture tout au long de la journée, et votre guide de style reste utilisable avec ou sans assistant.",
    },
  ],
  tarifs: {
    titre: "Ce que paie l'entreprise pour la journée d'écriture",
    paras: [
      "Avant la session, chaque participant envoie au formateur trois textes qu'il a signés (un mail, un compte rendu, une note ou une proposition) et précise l'outil d'IA dont il dispose. Les ateliers partent de ces textes, et chacun repart avec son guide de style, ses consignes de rédaction et la grille de relecture de la journée. Cette préparation, les supports et le suivi des exercices sont compris dans le prix.",
      "Prenons un service commercial qui inscrit son directeur, six chargés d'affaires, un technico-commercial, une assistante commerciale et le responsable de l'administration des ventes, soit dix personnes. Le groupe paie 1 980 € HT pour la journée, 198 € HT par tête ; le même tarif de 1 980 € HT s'applique à une personne formée seule. Les 20 % de TVA viennent en plus. Votre OPCO statue ensuite sur le dossier, monté avec Masteria, selon ses propres règles et l'argent dont il dispose.",
    ],
  },
  apres: {
    titre: "Après la journée, des assistants d'écriture taillés pour vos documents",
    texte: "Quand la méthode est en place, Masteria peut développer pour votre équipe un assistant qui prépare vos mémoires techniques en interrogeant d'abord le rédacteur, une compétence qui produit vos comptes rendus dans votre gabarit, ou un assistant de réclamations qui ne propose que les gestes que la direction a validés. Vous gardez la main sur chacun de ces outils, sur ses sources et sur la relecture humaine. Son coût, pas finançable par votre OPCO, se discute au forfait une fois le besoin cadré.",
  },
  cta: {
    milieu: "Envoyez-nous trois textes que votre équipe écrit chaque semaine : la journée les prend pour matière.",
    fin: {
      titre: "Bâtissons la journée sur vos propres écrits",
      texte: "Dites-nous quels textes votre équipe rédige le plus souvent, à qui ils s'adressent et quel assistant d'IA est en place. En retour, un programme construit sur ces écrits vous est proposé, avec des dates possibles.",
    },
  },
  terrain: {
    titre: "Sur le terrain : un compte rendu décisions-actions et un mail type pour le dirigeant",
    texte: "Une assistante de direction, chez un éditeur de logiciels B2B, a suivi en septembre 2026 une journée individuelle à distance avec Masteria, sur Copilot et Claude. Elle en est sortie avec un gabarit de mail pour son dirigeant, un modèle de compte rendu qui sépare décisions et actions, construit à partir d'une réunion enregistrée dans Teams, et une règle simple de tri : les documents internes et nominatifs passent par Copilot, et Claude ne reçoit que des textes publics ou anonymisés. Un plan à trente jours fixe les premières tâches à outiller et une mesure du gain au bout d'un mois.",
    lien: '/etudes-de-cas-ia#mission-assistanat-direction',
  },
  liensAssocies: [
    { label: "Formation ChatGPT pour la rédaction web et professionnelle", href: '/formation-chatgpt-redaction' },
    { label: "L'IA au secrétariat de direction : la formation dédiée", href: '/formation-ia-assistante' },
    { label: "Former un service communication aux assistants d'IA", href: '/formation-ia-communication' },
    { label: "Trouver des idées et des noms avec l'IA", href: '/formation-ia-creativite' },
    { label: "Bibliothèque de prompts classés par métier", href: '/bibliotheque-de-prompts' },
  ],
  sources: [
    { name: "ISO 24495-1:2023, langage clair et simple, principes directeurs", url: "https://www.iso.org/fr/standard/78907.html" },
    { name: "Fédération internationale du langage clair, définition", url: "https://www.iplfederation.org/plain-language/" },
    { name: "Centre d'aide OpenAI, longueur et usage des instructions personnalisées", url: "https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions" },
    { name: "Centre d'aide OpenAI, retrait des GPTs personnalisés et migration vers les plugins", url: "https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq" },
    { name: "Aide Claude, instructions, projets et compétences", url: "https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features" },
    { name: "Google Workspace Updates, les compétences arrivent dans Gemini et Workspace (30 septembre 2026)", url: "https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html" },
    { name: "Microsoft Learn, compétences personnalisées de Copilot Cowork", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
    { name: "Microsoft Support, brouillon d'un message avec Copilot dans Outlook", url: "https://support.microsoft.com/fr-fr/outlook/copilot-pages/draft-an-email-message-with-copilot-in-outlook" },
    { name: "Microsoft Support, le coaching de Copilot relit vos mails dans Outlook", url: "https://support.microsoft.com/fr-fr/outlook/copilot-pages/get-email-coaching-with-copilot-in-outlook" },
    { name: "Microsoft Support, conditions du récapitulatif de réunion dans Teams", url: "https://support.microsoft.com/fr-fr/teams/meetings/recap-in-microsoft-teams" },
    { name: "Microsoft Support, « Modifier avec Copilot » dans Word", url: "https://support.microsoft.com/fr-fr/word/edit-with-copilot-in-word" },
    { name: "OpenAI, règles d'usage en Europe : exactitude des réponses et relecture humaine (16 janvier 2026)", url: "https://openai.com/fr-FR/policies/eu-terms-of-use/" },
    { name: "OpenAI, confidentialité des données de ChatGPT Business et Enterprise", url: "https://openai.com/fr-FR/business-data/" },
    { name: "EUR-Lex, AI Act : mention des textes publiés sur des questions d'intérêt public (article 50)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
}
