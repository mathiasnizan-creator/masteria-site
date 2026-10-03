// Contenu propre à /formation-chatgpt-toulouse (guide terrain). Rendu par GeoPage.
// Fonctions ChatGPT vérifiées sur help.openai.com (stockage des données Business, résidence des données et de l'inférence, blocage d'espaces de travail, mode Lockdown, partage dans Business, projets) et openai.com le 03/10/2026.
// Filière : Insee Flash Occitanie n° 138 (décembre 2024) et n° 157 (septembre 2026). Contrôle des exportations : EUR-Lex (règlement 2021/821) et DGE ; Diffusion Restreinte : cyber.gouv.fr (II 901). Consultés le 03/10/2026.
export default {
  slug: 'formation-chatgpt-toulouse',
  dateModified: '2026-10-03',
  metaDesc: "Formation ChatGPT Toulouse : documentation aéronautique, double usage, Diffusion Restreinte, Business ou Enterprise. Intra, Qualiopi, finançable OPCO.",
  intro: "Dans la chaîne aéronautique toulousaine, un document change de mains plusieurs fois : la spécification d'un constructeur devient un plan chez un rang 1, puis une gamme de fabrication chez un rang 2. ChatGPT aide à lire, rédiger et traduire cette documentation, et certaines de ses pages ne doivent jamais quitter le système d'information de l'entreprise. Masteria, cabinet lyonnais spécialisé en IA, apprend à vos équipes toulousaines à faire ce tri, à choisir entre ChatGPT Business et Enterprise et à travailler sur des exercices autorisés, sur site ou à distance.",
  guide: {
    kicker: "Guide terrain Toulouse",
    h2: "ChatGPT dans l'aéronautique toulousaine : accélérer la documentation, ne rien exporter par mégarde",
    lead: "Fin 2022, la filière aéronautique et spatiale d'Occitanie réunissait 820 entreprises, 1 010 établissements et 108 900 salariés selon l'Insee, principalement dans l'ancienne région Midi-Pyrénées. En 2025, son chiffre d'affaires a progressé de 8 % et dépassé pour la première fois son niveau de 2019, et l'emploi de sa chaîne d'approvisionnement a augmenté de 2 %. Ces entreprises produisent et échangent une documentation abondante, souvent en anglais. ChatGPT la rédige et la traduit vite. Un simple copier-coller peut aussi y devenir une exportation de technologie au sens du droit européen.",
    sections: [
      {
        h3: "La documentation technique est le meilleur terrain de ChatGPT",
        paras: [
          "Un bureau d'études ou un service qualité de Blagnac écrit toute la journée : procédures, rapports de non-conformité, comptes rendus de revue, notices, réponses aux questionnaires fournisseurs. ChatGPT reformule une procédure trop longue, structure un rapport d'anomalie, traduit en anglais une instruction de travail ou prépare la trame d'une revue de conception. Dans ChatGPT Business, un projet partagé réunit jusqu'à 40 fichiers de référence, des instructions communes et une mémoire limitée au projet : toute une équipe qualité travaille sur la même base documentaire, avec les mêmes consignes de rédaction.",
          "Le gain porte sur la forme et sur le temps de rédaction. Le fond technique reste celui de l'ingénieur : une cote, une tolérance ou une référence de matériau produite par un modèle de langage ne vaut rien tant qu'elle n'a pas été vérifiée dans le document source. En formation, chaque exercice part d'un document interne non sensible, comme une procédure générique, un rapport anonymisé ou un questionnaire fournisseur vierge. Les participants apprennent à exiger un renvoi au paragraphe et à la page pour chaque information reprise.",
        ],
      },
      {
        h3: "Quatre familles de documents n'entrent dans aucun assistant en ligne",
        paras: [
          "Le règlement européen 2021/821 sur les biens à double usage définit l'exportation de façon large. Elle comprend la transmission de logiciels ou de technologies par voie électronique vers une destination située hors du territoire douanier de l'Union, y compris leur mise à disposition sous forme électronique à des personnes situées hors de l'Union. La technologie d'une pièce listée à l'annexe I, collée dans un service dont une partie des données transite ou se conserve aux États-Unis, peut donc constituer une exportation soumise à licence. La Direction générale des entreprises rappelle que cette annexe est mise à jour chaque année.",
          "Trois autres familles s'ajoutent au double usage, chacune avec son texte et son responsable dans l'entreprise. Le responsable conformité export tient la classification des produits et des technologies : il lui revient de dire si un dossier relève de l'annexe I. La règle de formation qui en découle tient en une phrase : un document marqué, ou dont vous ignorez le statut, reste hors de ChatGPT jusqu'à l'avis du responsable sécurité ou du responsable conformité export.",
        ],
        list: [
          "Les documents marqués Diffusion Restreinte : l'instruction interministérielle 901 impose de les traiter sur des systèmes homologués et de les chiffrer avec des produits agréés par l'ANSSI quand ils sortent du système d'information.",
          "Les données techniques d'origine américaine soumises aux réglementations ITAR ou EAR : la DGE précise que l'État français n'y est pas partie et n'en est généralement pas informé ; leur suivi revient au responsable conformité export de l'entreprise.",
          "Les plans, spécifications et données que le contrat du donneur d'ordres interdit de communiquer à un tiers, quel que soit leur niveau de sensibilité apparent.",
        ],
      },
      {
        h3: "Business ou Enterprise : ce que chaque offre garantit, et ce qu'aucune ne garantit",
        paras: [
          "ChatGPT Business, l'ancien ChatGPT Team, s'ouvre à partir de deux sièges ; le siège standard est affiché à 20 dollars par mois en engagement annuel et à 25 en mensuel dans la plupart des pays. Les données de l'espace restent exclues de l'entraînement des modèles d'OpenAI. La résidence des données y arrive progressivement : la région se choisit à la souscription, et OpenAI précise que, hors des États-Unis, une copie de chaque requête et de chaque réponse reste conservée aux États-Unis pendant une durée limitée pour la détection des abus. Business ne permet ni de désactiver les liens de partage pour tout l'espace, ni d'exporter les données.",
          "Enterprise va plus loin. Les nouveaux espaces peuvent stocker leurs contenus en Europe (Espace économique européen et Suisse), et les clients éligibles peuvent y faire tourner l'inférence, c'est-à-dire le calcul de la réponse par le modèle. La documentation d'OpenAI reste précise sur les limites : des traitements hors processeur graphique, comme l'extraction du texte d'un PDF ou d'un fichier Word, peuvent avoir lieu hors de la région, et les applications connectées suivent les règles de leur propre fournisseur. Aucune de ces options ne fait de ChatGPT un système homologué pour la Diffusion Restreinte.",
          "Enterprise apporte une protection utile contre l'usage parallèle. Le blocage d'espaces de travail (Workspace Blocking), configuré au niveau du réseau par un en-tête ajouté aux requêtes, n'autorise sur le réseau de l'entreprise que les espaces ChatGPT approuvés : les espaces personnels et l'usage sans connexion sont filtrés, y compris dans les applications mobiles des appareils gérés. Dans un atelier où chacun a ChatGPT sur son téléphone, ce réglage pèse plus lourd qu'une note de service.",
        ],
      },
      {
        h3: "Le sous-traitant de rang 2 travaille sous les règles de son client",
        paras: [
          "Une PME de mécanique de précision ou de traitement de surface reçoit ses plans d'un rang 1, qui les tient lui-même d'un constructeur. Le contrat fixe ce qu'elle peut en faire. Avant de choisir une offre ChatGPT, elle relit ses clauses de confidentialité et demande par écrit à son client si un outil d'IA en ligne est admis, pour quels documents et avec quelle offre. Une réponse écrite protège l'entreprise lors d'un audit et donne aux équipes une consigne claire. En l'absence de réponse, la règle par défaut s'applique : les plans du client restent hors de l'outil.",
          "Pour une PME, ChatGPT Business couvre la plupart des usages autorisés : procédures internes, devis, courriers, réponses aux réclamations rédigées hors des données techniques du client. Deux réglages comptent. Le mode Lockdown, que Business propose dans les paramètres de sécurité selon le déploiement en cours, limite les requêtes réseau sortantes pour réduire le risque d'exfiltration par injection de prompt, c'est-à-dire par des instructions cachées dans un fichier reçu ; il désactive en contrepartie la recherche approfondie et le mode agent. Les instructions du projet rappellent ensuite à chaque conversation ce qui ne doit pas y entrer.",
        ],
      },
    ],
    table: {
      caption: "Documents d'un sous-traitant aéronautique : ce qui peut entrer dans ChatGPT Business",
      headers: ["Document", "Dans ChatGPT Business ?", "Condition ou alternative"],
      rows: [
        ["Procédure qualité interne non marquée", "Oui", "Projet partagé, instructions qui interdisent toute donnée client"],
        ["Rapport de non-conformité", "Oui, après anonymisation", "Références de pièce, nom du client et cotes remplacés par des codes"],
        ["Plan ou spécification d'un donneur d'ordres", "Seulement avec son accord écrit", "À défaut, travail dans les outils internes autorisés"],
        ["Technologie listée à l'annexe I du règlement 2021/821", "Non", "Avis du responsable conformité export, licence le cas échéant"],
        ["Document marqué Diffusion Restreinte", "Non", "Système homologué selon l'instruction interministérielle 901"],
        ["Donnée technique marquée ITAR ou EAR", "Non", "Règles américaines gérées par le responsable conformité export"],
      ],
    },
    cas: {
      h3: "Cas pratique : rédiger la réponse 8D à une réclamation sans exposer de donnée technique",
      contexte: "Prenons le responsable qualité d'un sous-traitant de rang 2 installé à Colomiers. Son client de rang 1 lui adresse une réclamation sur un lot de pièces usinées hors tolérance et attend sous dix jours une réponse au format 8D, une méthode de résolution de problème en huit étapes répandue dans l'industrie. Le plan de la pièce et la spécification du client restent hors de ChatGPT.",
      etapes: [
        "Remplacer dans les notes d'enquête la référence de pièce, le nom du client et toutes les cotes par des codes neutres (PIÈCE-A, CLIENT-1, COTE-1).",
        "Ouvrir un projet « Réclamations » dans ChatGPT Business, activer le mode Lockdown et écrire dans les instructions l'interdiction de toute donnée client.",
        "Coller les notes anonymisées et lancer le prompt ci-dessous.",
        "Remettre les vraies références et valeurs dans le document final, hors de ChatGPT.",
        "Faire valider le 8D par le responsable de production avant l'envoi au client.",
      ],
      prompt: "Tu assistes le service qualité d'un sous-traitant aéronautique. Les notes ci-dessous sont anonymisées : PIÈCE-A, CLIENT-1 et COTE-1 remplacent les vraies références. Ne cherche pas à les deviner.\n\nTâche 1 : structure une réponse 8D en anglais, discipline par discipline : équipe, description du problème, actions de confinement, analyse des causes, actions correctives, mise en œuvre, actions préventives, clôture.\n\nTâche 2 : pour l'analyse des causes, propose un diagramme d'Ishikawa en texte (main-d'œuvre, méthode, machine, matière, milieu, mesure) et une série de « 5 pourquoi » à partir des faits fournis. Distingue les causes établies par les notes de celles qui restent des hypothèses à vérifier.\n\nTâche 3 : liste les preuves à joindre pour chaque discipline (relevés, enregistrements, photos) et les informations manquantes.\n\nRègles : n'invente aucune mesure, aucune date, aucune action déjà réalisée. Écris « à compléter » quand une donnée manque. Style factuel, phrases courtes, vocabulaire qualité de l'aéronautique.",
      resultat: "Vous obtenez un 8D complet dans sa structure, des causes classées entre faits et hypothèses, la liste des preuves à réunir et celle des données manquantes. Aucune valeur technique n'a quitté l'entreprise : les codes ont tenu lieu de références. Relisez les actions correctives avec le responsable de production, car ce sont elles que le client de rang 1 vérifiera lors de son prochain audit.",
    },
    pieges: [
      { titre: "Croire que la résidence européenne rend tout document éligible", texte: "Même avec des données stockées en Europe, OpenAI conserve aux États-Unis une copie des échanges Business pour la détection des abus, et Enterprise peut traiter certaines étapes hors région. Le double usage, la Diffusion Restreinte et l'ITAR restent hors de l'outil." },
      { titre: "Le compte personnel sur le téléphone de l'atelier", texte: "Un compte gratuit échappe aux règles de l'entreprise. Sur Enterprise, le blocage d'espaces de travail filtre les espaces personnels sur les appareils gérés ; sur Business, seules une charte d'usage et la formation l'encadrent." },
      { titre: "La capture d'écran d'un plan pour « juste une question »", texte: "Une image de plan avec son cartouche transmet la technologie aussi sûrement qu'un fichier. La question se pose avec une description anonymisée, jamais avec le plan." },
      { titre: "La spécification fournisseur qui contient des instructions cachées", texte: "Un fichier reçu peut porter des consignes destinées à l'IA. Le mode Lockdown limite les requêtes sortantes qui serviraient à exfiltrer des données ; il n'empêche pas l'instruction d'influencer la réponse, qui se relit." },
      { titre: "Le lien de partage qui circule dans tout l'espace", texte: "Sur Business, chacun peut créer un lien vers une conversation, lisible par les membres de l'espace, et l'administrateur ne peut pas désactiver cette fonction pour tous. Une conversation qui contient une information sensible se supprime avec ses liens." },
    ],
  },
  faq: [
    { q: "ChatGPT peut-il aider un bureau d'études aéronautique toulousain sur sa documentation technique ?", a: "Oui, pour reformuler des procédures, structurer des rapports de non-conformité, traduire des instructions de travail en anglais et préparer des revues de conception. Un projet partagé dans ChatGPT Business réunit les documents de référence et les consignes de rédaction de l'équipe. Les valeurs techniques se vérifient toujours dans le document source, et les documents protégés restent hors de l'outil." },
    { q: "Quelles données un sous-traitant aéronautique ne doit-il jamais mettre dans ChatGPT ?", a: "Quatre familles : les technologies listées à l'annexe I du règlement européen 2021/821 sur le double usage, les documents marqués Diffusion Restreinte, les données techniques soumises aux réglementations américaines ITAR ou EAR, et les documents que le contrat du donneur d'ordres interdit de communiquer. En cas de doute sur le statut d'un document, il reste dehors jusqu'à l'avis du responsable sécurité ou export." },
    { q: "Transmettre une donnée technique à ChatGPT peut-il constituer une exportation ?", a: "Oui, pour une technologie à double usage. Le règlement 2021/821 inclut dans l'exportation la transmission électronique de technologies vers une destination hors de l'Union. ChatGPT Business conserve une copie des échanges aux États-Unis pour la détection des abus, même avec une résidence choisie en Europe. Une technologie listée à l'annexe I n'y entre donc pas sans l'avis du responsable conformité export, et une licence le cas échéant." },
    { q: "ChatGPT Business ou Enterprise pour une entreprise aéronautique à Toulouse ?", a: "Business suffit à une PME pour les usages autorisés : procédures, devis, courriers, réclamations anonymisées, à partir de deux sièges. Enterprise s'adresse aux groupes qui veulent stocker leurs données en Europe, y faire tourner l'inférence quand ils y sont éligibles, désactiver les liens de partage et filtrer les comptes personnels sur leur réseau. Aucune des deux offres ne remplace un système homologué pour la Diffusion Restreinte." },
    { q: "Où se déroule une formation ChatGPT pour une entreprise de Blagnac ou de Colomiers ?", a: "Chez vous, de préférence dans une salle située hors des zones protégées, avec douze personnes au maximum ; une classe virtuelle convient aux équipes réparties entre plusieurs sites. Les exercices utilisent des documents que l'entreprise a sélectionnés et validés. Mathias Nizan ou l'un des formateurs indépendants que Masteria réunit en réseau anime la journée, et le devis précise les conditions de déplacement." },
    { q: "Combien coûte une formation ChatGPT à Toulouse et quel OPCO la finance ?", a: "Comptez 1 980 € HT pour une journée intra, que le groupe compte cinq ou douze personnes. Grâce à la certification Qualiopi de Masteria, l'OPCO de l'entreprise peut la financer selon les fonds disponibles : OPCO 2i pour la métallurgie et la construction aéronautique, Atlas pour les bureaux d'études et le conseil. Masteria fournit programme et convention, et le dossier part avant la session." },
    { q: "Un sous-traitant de rang 2 peut-il se contenter de ChatGPT Business ?", a: "Oui, si son client l'autorise et si les règles d'usage sont écrites. Business garantit que les données de l'espace ne servent pas à l'entraînement et propose le mode Lockdown contre l'exfiltration par injection de prompt. Il ne filtre pas les comptes personnels sur le réseau de l'entreprise, ce que seul Enterprise permet : la charte d'usage et la formation des équipes comblent ce manque." },
  ],
  sources: [
    { name: "Insee Flash Occitanie n° 138 : la filière aéronautique et spatiale en Occitanie en 2023 (décembre 2024)", url: "https://www.insee.fr/fr/statistiques/8290878" },
    { name: "Insee Flash Occitanie n° 157 : filière aéronautique et spatiale en 2025 (septembre 2026)", url: "https://www.insee.fr/fr/statistiques/9031891" },
    { name: "EUR-Lex : règlement (UE) 2021/821 sur les biens à double usage", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32021R0821" },
    { name: "Direction générale des entreprises : le règlement européen sur les biens à double usage", url: "https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/le-reglement-europeen-sur-les-biens-double" },
    { name: "ANSSI : instruction interministérielle n° 901/SGDSN/ANSSI", url: "https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/protection-information-sensible-diffusion-restreinte/instruction-interministerielle-n901/" },
    { name: "OpenAI Help Center : Where your ChatGPT Business content is stored", url: "https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored" },
    { name: "OpenAI Help Center : Data residency and inference residency for ChatGPT", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
    { name: "OpenAI Help Center : Corporate Network Controls in ChatGPT Enterprise", url: "https://help.openai.com/en/articles/20001323-corporate-network-controls-in-chatgpt-enterprise" },
    { name: "OpenAI Help Center : Lockdown Mode", url: "https://help.openai.com/en/articles/20001061-lockdown-mode" },
    { name: "OpenAI Help Center : Managing data, sharing, and privacy in ChatGPT Business", url: "https://help.openai.com/en/articles/8798634-managing-data-sharing-and-privacy-in-chatgpt-business" },
  ],
}
