// Contenu propre à /formation-chatgpt-strasbourg (guide terrain). Rendu par GeoPage.
// Fonctions ChatGPT (instructions personnalisées, mémoire, projets, saisie vocale) vérifiées sur help.openai.com le 03/10/2026.
// Chiffres : Insee Analyses Grand Est n° 144, Eurométropole (Eurodistrict), BMAS (Mindestlohn), EUR-Lex, Conseil de l'Europe ; textes : Légifrance et gesetze-im-internet.de, consultés le 03/10/2026.
export default {
  slug: 'formation-chatgpt-strasbourg',
  dateModified: '2026-10-03',
  metaDesc: "Formation ChatGPT Strasbourg : style bilingue franco-allemand, instructions personnalisées, mémoire, droit social des deux rives. Intra, Qualiopi, OPCO.",
  intro: "À Strasbourg, beaucoup de courriers partent en deux langues : l'offre au client de l'Ortenau, la lettre au salarié frontalier, la note préparée avant une session au Parlement européen. ChatGPT traduit vite. Tenir le même style d'un courrier à l'autre, avec le « Sie » allemand et les formules de la maison, demande des réglages précis et quelques règles sur ce que l'outil retient de vous. Masteria, cabinet lyonnais spécialisé en IA, accompagne vos équipes strasbourgeoises sur site ou à distance, avec vos propres courriers bilingues comme matière.",
  guide: {
    kicker: "Guide terrain Strasbourg",
    h2: "ChatGPT à Strasbourg : le style bilingue se règle une fois, le droit de chaque rive se vérifie à chaque lettre",
    lead: "En 2018, 48 200 habitants du Grand Est travaillaient en Allemagne, dont 7 900 dans l'arrondissement de l'Ortenau, sur l'autre rive du Rhin, selon l'Insee. L'Eurodistrict Strasbourg-Ortenau rassemble 980 000 habitants dans 112 communes françaises et allemandes. Les entreprises de ce bassin écrivent chaque jour dans les deux langues, à des clients, des salariés et des administrations. ChatGPT tient ce double registre quand on lui donne des règles stables. Il peut en revanche mélanger les règles sociales des deux côtés du pont de l'Europe, et c'est là que la relecture humaine compte.",
    sections: [
      {
        h3: "Les instructions personnalisées fixent le style bilingue de toutes vos conversations",
        paras: [
          "Les instructions personnalisées existent sur toutes les offres de ChatGPT, sur le web, l'application de bureau, iOS et Android. On les saisit dans les paramètres de personnalisation, et elles s'appliquent aussitôt à toutes les conversations. Sur ChatGPT Business, le champ accepte 5 000 caractères, contre 1 500 sur les offres Free et Go : de quoi décrire un style de correspondance complet et un glossaire de plusieurs dizaines de termes.",
          "Pour une assistante commerciale qui écrit à des clients du Bade-Wurtemberg, ce bloc dit l'essentiel : répondre dans la langue du correspondant, vouvoyer en allemand avec « Sie » et ouvrir par « Sehr geehrte Frau » ou « Sehr geehrter Herr », garder la formule de politesse française de l'entreprise, écrire la date 03.10.2026 côté allemand et 3 octobre 2026 côté français, ne jamais traduire les noms de produits. Le texte reste court et testable : une règle par ligne, un exemple quand la règle prête à confusion.",
          "Une subtilité échappe souvent aux équipes. Dans un projet, les instructions du projet s'appliquent à ses conversations et priment sur les instructions personnalisées. Un projet partagé va plus loin : il n'a accès ni aux instructions personnelles de ses membres ni à leur mémoire. Les règles bilingues d'une équipe se rédigent donc dans les instructions du projet partagé, sans quoi ses conversations repartent du style par défaut de ChatGPT.",
        ],
      },
      {
        h3: "La mémoire retient vos préférences et peut mêler deux portefeuilles clients",
        paras: [
          "Quand la mémoire est activée, ChatGPT puise dans plusieurs sources : conversations passées, souvenirs enregistrés, instructions personnalisées et, selon l'offre, fichiers de la bibliothèque et contenus d'apps connectées. Le réglage se trouve dans les paramètres de personnalisation. Un résumé de la mémoire permet de corriger une information, et l'option qui demande de ne plus mentionner un sujet réduit les rappels sans effacer la source. Dans un espace Business, les propriétaires et les administrateurs gèrent les réglages de mémoire ouverts aux membres.",
          "Le risque, pour une entreprise strasbourgeoise, tient au mélange. Une jeune pousse de Kehl peut tutoyer ses partenaires (« Du »), quand une étude notariale de Baden-Baden attend le « Sie » et des formules classiques. Si la mémoire retient le tutoiement de la veille, il peut glisser dans le courrier du lendemain. La mémoire limitée au projet empêche les conversations d'un projet de puiser hors de lui, et réciproquement. La conversation temporaire, lancée sans personnalisation, n'utilise ni mémoire ni instructions et ne crée aucun souvenir.",
          "Pour un portefeuille de clients allemands, nous conseillons un projet par grand compte, en mémoire limitée au projet, avec ses propres règles de ton. Les courriers ponctuels à un nouveau contact passent par une conversation temporaire. L'utilisateur garde la main sur ce que l'outil réutilise, et le collègue qui reprend le dossier pendant un congé retrouve le contexte au bon endroit.",
        ],
      },
      {
        h3: "D'une rive à l'autre, la même question sociale appelle une autre procédure",
        paras: [
          "Prenons l'arrivée de ChatGPT dans une entreprise implantée à Strasbourg et à Kehl. En France, dans une entreprise d'au moins cinquante salariés, le comité social et économique est informé et consulté sur l'introduction de nouvelles technologies (article L2312-8 du Code du travail). En Allemagne, le Betriebsrat (le conseil élu par les salariés de l'établissement) dispose d'un droit de codécision sur l'introduction et l'usage de dispositifs techniques destinés à surveiller le comportement ou la performance des salariés (§ 87, alinéa 1, point 6, de la loi allemande sur l'organisation des entreprises).",
          "Les deux textes ne posent pas la même question, et une note traduite mot à mot de l'un vers l'autre passe à côté du sujet. ChatGPT traduit l'information destinée aux deux instances ; il ne décide ni de la procédure applicable ni de l'ordre des étapes. Nos exercices font rédiger à ChatGPT la note bilingue, puis demandent au service RH de cocher, texte officiel en main, ce qui relève de chaque rive.",
          "Les montants posent le même problème. Le salaire minimum légal allemand (Mindestlohn) est fixé à 13,90 euros de l'heure depuis le 1er janvier 2026, selon le ministère fédéral du Travail. Un modèle peut citer le montant d'une année précédente, ou le confondre avec le Smic. L'Insee relève qu'un quart des frontaliers qui travaillent en Allemagne sont des Allemands résidant en France : la langue d'un courrier RH se choisit selon le salarié, quelle que soit son adresse.",
        ],
      },
      {
        h3: "Autour des institutions européennes de Strasbourg, chaque dossier mérite son projet",
        paras: [
          "Le Parlement européen a son siège à Strasbourg, où se tiennent ses douze périodes de sessions plénières mensuelles, selon le protocole n° 6 annexé aux traités. Le Conseil de l'Europe y réunit 46 États membres. Autour de ces institutions travaillent des représentations permanentes, des organisations non gouvernementales, des cabinets de conseil, des interprètes et des agences d'événements, qui écrivent en anglais, en français et en allemand au rythme des sessions.",
          "Pour ces équipes, un projet par dossier évite de mêler les sujets : la résolution suivie, les documents publics de la session, les notes déjà envoyées. Les instructions du projet fixent la langue de sortie, le format attendu par le destinataire et la règle des citations, toujours reprises du texte officiel. Un consultant qui travaille pour une institution relit d'abord les clauses de confidentialité de son contrat : un document de travail non public n'entre dans ChatGPT qu'avec l'accord écrit du donneur d'ordre.",
        ],
      },
    ],
    table: {
      caption: "Strasbourg et l'Ortenau : documents bilingues, réglage ChatGPT et contrôle avant envoi",
      headers: ["Document", "Réglage ChatGPT", "Contrôle avant envoi"],
      rows: [
        ["Offre commerciale à un client de l'Ortenau", "Instructions personnalisées : « Sie », formule d'appel, glossaire produit", "Prix, délais et conditions de vente relus par le commercial"],
        ["Courrier RH à un salarié frontalier", "Conversation temporaire sans personnalisation, modèle anonymisé", "Règles sociales et fiscales validées par le service RH"],
        ["Note d'information au CSE et au Betriebsrat", "Projet partagé avec instructions bilingues", "Procédure française et procédure allemande arbitrées par un juriste"],
        ["Fiche technique d'une PME industrielle du Bas-Rhin", "Projet par gamme, mémoire limitée au projet", "Unités, normes et tolérances vérifiées par le bureau d'études"],
        ["Note de synthèse avant une session plénière", "Projet par dossier, documents publics uniquement", "Chaque citation contrôlée dans le texte officiel"],
        ["Relance d'un fournisseur de Kehl", "Saisie vocale avec la langue réglée, puis reformulation en allemand", "Date d'engagement et ton relus par l'acheteur"],
      ],
    },
    cas: {
      h3: "Cas pratique : écrire les instructions bilingues d'une PME qui vend outre-Rhin",
      contexte: "Prenons l'assistante commerciale d'une PME de l'Eurométropole qui fabrique des menuiseries en aluminium et réalise une bonne part de ses ventes dans le Bade-Wurtemberg. Elle écrit chaque jour en français et en allemand, et ses courriers changent de ton selon le jour et la personne. La direction veut un style unique, applicable par les trois personnes de l'administration des ventes.",
      etapes: [
        "Rassembler dix courriers récents validés par la direction, cinq en français et cinq en allemand, et en retirer les noms et coordonnées des clients.",
        "Lancer le prompt ci-dessous dans une conversation temporaire sans personnalisation, pour que la mémoire n'interfère pas avec l'analyse.",
        "Relire le texte proposé avec le responsable commercial germanophone, puis le coller dans les instructions personnalisées (5 000 caractères au plus sur Business).",
        "Pour l'équipe, recopier les mêmes règles dans les instructions du projet partagé « Clients Allemagne » et y déposer le glossaire.",
        "Tester sur trois courriers réels, comparer avec la version écrite à la main et ajuster les règles une par une.",
      ],
      prompt: "Tu analyses le style de correspondance commerciale d'une PME alsacienne qui écrit à ses clients en français et en allemand. Je colle ci-dessous dix courriers validés par la direction, anonymisés.\n\nPremière tâche : dégage les règles de style constantes, séparément pour le français et pour l'allemand. Formule d'appel et de politesse, vouvoiement, longueur des phrases, façon d'annoncer un prix ou un délai, signature, format des dates et des montants.\n\nDeuxième tâche : établis un glossaire bilingue des termes techniques et commerciaux employés, avec le terme retenu dans chaque langue. Signale les termes traduits de deux façons différentes d'un courrier à l'autre.\n\nTroisième tâche : rédige un bloc d'instructions personnalisées de 4 500 caractères au plus, à la deuxième personne, qui demande à ChatGPT de répondre dans la langue du correspondant, d'appliquer ces règles et ce glossaire, et de signaler toute mention de droit, de prix ou de délai à faire vérifier par un humain.\n\nN'invente aucune règle absente des courriers. Si deux courriers se contredisent, présente les deux usages et demande-moi lequel retenir.\n\nCourriers :\n[coller ici les dix courriers]",
      resultat: "Vous obtenez une analyse du style maison dans les deux langues, un glossaire qui révèle les traductions concurrentes et un bloc d'instructions prêt à coller. La limite de 4 500 caractères laisse une marge sous le plafond de 5 000 de l'offre Business. Faites relire le glossaire par un germanophone de la maison : une traduction erronée inscrite dans les instructions se répète ensuite dans chaque courrier.",
    },
    pieges: [
      { titre: "Croire que le projet partagé reprend vos instructions", texte: "Un projet partagé ignore les instructions personnalisées et la mémoire de ses membres. Les règles de style communes se recopient dans les instructions du projet, faute de quoi les courriers de l'équipe repartent du style par défaut." },
      { titre: "Laisser la mémoire mêler deux clients", texte: "Le tutoiement accepté par un partenaire de Kehl peut ressurgir dans une lettre à un client plus formel. Un projet par grand compte, en mémoire limitée au projet, cloisonne les contextes ; l'option qui demande de ne plus mentionner une information réduit les rappels sans supprimer la source." },
      { titre: "Recopier un montant légal fourni par l'outil", texte: "Salaire minimum, plafonds, seuils : chaque chiffre se vérifie sur le site officiel le jour de l'envoi. Le Mindestlohn est fixé à 13,90 euros de l'heure depuis le 1er janvier 2026 ; un modèle entraîné plus tôt peut citer un montant périmé." },
      { titre: "Traduire une procédure au lieu de la transposer", texte: "L'information-consultation du CSE et la codécision du Betriebsrat suivent deux logiques distinctes. Une note traduite garde la logique de son pays d'origine ; le juriste ou la DRH arbitre ce qui s'applique de chaque côté du Rhin." },
      { titre: "Dicter en allemand avec un réglage vocal inadapté", texte: "OpenAI prévient que la saisie vocale peut reconnaître une autre langue que celle parlée. Une assistante bilingue choisit sa langue de travail dans les réglages vocaux de ChatGPT, et relit toujours la transcription avant l'envoi." },
    ],
  },
  faq: [
    { q: "ChatGPT traduit-il correctement les courriers commerciaux entre la France et l'Allemagne ?", a: "Il produit des traductions fluides et respecte le vouvoiement allemand quand on le lui demande. Sa fiabilité dépend des règles fournies : un glossaire des termes de l'entreprise, la formule d'appel attendue, le format des dates et des montants. Les prix, délais, conditions de vente et références juridiques se relisent toujours, par un germanophone de la maison quand le courrier engage l'entreprise auprès d'un client de l'Ortenau ou du Bade-Wurtemberg." },
    { q: "Comment garder le même style bilingue dans ChatGPT pour toute une équipe strasbourgeoise ?", a: "Chaque personne peut inscrire le style dans ses instructions personnalisées, jusqu'à 5 000 caractères sur Business. Pour une équipe, ces règles vont dans les instructions d'un projet partagé : un projet partagé ignore les instructions personnelles et la mémoire de ses membres, et ses propres instructions s'appliquent à tous. Le glossaire franco-allemand se dépose dans le même projet, sous forme de fichier." },
    { q: "Que retient la mémoire de ChatGPT, et comment l'empêcher de mélanger deux clients ?", a: "La mémoire peut s'appuyer sur vos conversations passées, vos souvenirs enregistrés, vos instructions et, selon l'offre, vos fichiers et vos apps connectées. Pour cloisonner, créez un projet par client en mémoire limitée au projet, ou ouvrez une conversation temporaire sans personnalisation pour un courrier ponctuel. Dans un espace Business, l'administrateur décide des réglages de mémoire ouverts aux membres." },
    { q: "Quelles données d'un salarié frontalier ne faut-il pas mettre dans ChatGPT ?", a: "Numéro de sécurité sociale, identifiant fiscal français ou allemand, coordonnées bancaires, données de santé, contenu d'un dossier disciplinaire. Un courrier RH se prépare sur un modèle anonymisé, puis le service RH complète les données personnelles dans son propre logiciel. Dans un espace Business, OpenAI n'utilise pas vos échanges pour entraîner ses modèles ; sur un compte personnel, cela dépend du réglage d'amélioration du modèle." },
    { q: "ChatGPT Business ou Enterprise pour une entreprise implantée des deux côtés du Rhin ?", a: "Business convient à une PME : deux sièges au minimum, instructions et projets partagés, aucun entraînement sur vos données. Enterprise devient nécessaire quand le groupe veut garder ses contenus en Europe et y faire tourner le modèle, ce que l'offre propose à ses nouveaux clients, ou réclame des outils de conformité centralisés. Côté allemand, prévoyez le passage devant le Betriebsrat si l'outil peut servir à suivre l'activité ou la performance des salariés." },
    { q: "Dans quels lieux se tient une formation ChatGPT à Strasbourg, et une équipe de Kehl peut-elle s'y joindre ?", a: "Chez vous, dans l'Eurométropole, avec un groupe de douze personnes au maximum, ou à distance en classe virtuelle. Une équipe installée à Kehl ou à Offenbourg rejoint le groupe sur place ou à distance, et les exercices portent sur vos courriers français et allemands. Le formateur vient de Lyon, et le devis fixe les conditions de sa venue." },
    { q: "Combien coûte une formation ChatGPT à Strasbourg, et comment financer la part d'une filiale allemande ?", a: "Comptez 1 980 € HT pour une journée intra, quel que soit l'effectif jusqu'à 12 participants, et le même montant pour une journée d'accompagnement individuel. Masteria étant certifié Qualiopi, la société française peut solliciter son OPCO : Atlas pour la banque, l'assurance ou le conseil, OPCO 2i pour l'industrie et la pharmacie. Une filiale de droit allemand, hors du système des OPCO, paie sa part sur ses propres fonds ; elle reçoit une facture hors taxes, la TVA suivant les règles applicables à la prestation." },
  ],
  sources: [
    { name: "Insee Analyses Grand Est n° 144 : le travail frontalier dans le Grand Est (2022)", url: "https://www.insee.fr/fr/statistiques/6444588" },
    { name: "Ville et Eurométropole de Strasbourg : l'Eurodistrict Strasbourg-Ortenau", url: "https://www.strasbourg.eu/eurodistrict-strasbourg-ortenau" },
    { name: "OpenAI Help Center : ChatGPT Custom Instructions", url: "https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions" },
    { name: "OpenAI Help Center : Memory in ChatGPT", url: "https://help.openai.com/en/articles/8590148-memory-in-chatgpt" },
    { name: "OpenAI Help Center : Projects in ChatGPT", url: "https://help.openai.com/en/articles/10169521-projects-in-chatgpt" },
    { name: "Légifrance : article L2312-8 du Code du travail", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196" },
    { name: "gesetze-im-internet.de : § 87 BetrVG, droits de codécision du Betriebsrat", url: "https://www.gesetze-im-internet.de/betrvg/__87.html" },
    { name: "Bundesministerium für Arbeit und Soziales : Mindestlohn", url: "https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/mindestlohn.html" },
    { name: "EUR-Lex : protocole n° 6 sur la fixation des sièges des institutions", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:12016E/PRO/06" },
    { name: "Conseil de l'Europe : nos États membres", url: "https://www.coe.int/fr/web/about-us/our-member-states" },
  ],
}
