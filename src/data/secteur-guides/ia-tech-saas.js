// Contenu propre à /ia-tech-saas. Lu par SecteurIAPage.jsx, qui masque ses blocs communs quand ce fichier existe.
// Vérifié le 03/10/2026 : Numeum (Top 250, 6/11/2025), règlement (UE) 2024/1689 (art. 3, 25, 50, annexe III, service desk de la Commission) et règlement (UE) 2026/1744 (JO du 24/07/2026), documentation Anthropic (retraits, tarifs, conservation) et OpenAI (retraits, données), OWASP Top 10 LLM 2025, Commission (Data Act).
export default {
  slug: 'ia-tech-saas',
  dateModified: '2026-10-03',
  intro: "Pour un éditeur de logiciels, ajouter l'IA générative au produit engage trois choses : des obligations au titre du règlement européen sur l'IA, un contrat avec un fournisseur de modèle qui fixe la conservation et la région des données, et un coût à chaque requête. Masteria cadre ces engagements avec vos équipes produit, puis développe la fonctionnalité dans votre base de code, avec un jeu d'évaluation, un cloisonnement par client et une documentation que votre équipe reprend.",

  offresIntro: [
    "Pour un éditeur, nos trois métiers se placent à côté de vos équipes produit et techniques : nous apportons ce que l'IA générative ajoute à leur métier, l'évaluation des réponses, le coût par requête et la conformité au règlement européen.",
    "Le conseil tranche entre construire, acheter ou attendre. Le développement livre la fonctionnalité dans votre base de code avec ses tests, et l'automatisation outille vos équipes internes : support, documentation, exploitation.",
  ],
  offres: [
    {
      desc: "Nous qualifions la fonctionnalité au regard du règlement européen sur l'IA, comparons les fournisseurs de modèles sur la conservation des données, la région de traitement et le calendrier de retrait des versions, puis estimons le coût par compte client avant d'écrire une ligne de code. Vous décidez sur un dossier chiffré.",
      points: ["Qualification au regard de l'AI Act", "Comparatif des fournisseurs de modèles", "Coût par compte client estimé"],
    },
    {
      desc: "Nous développons la fonctionnalité dans votre dépôt, selon vos conventions : une couche qui isole le fournisseur de modèle, une recherche dans les données de chaque client cloisonnée par compte, un jeu d'évaluation rejoué à chaque changement de version et des journaux exploitables par votre support. Le code et sa documentation vous sont livrés.",
      points: ["Fournisseur de modèle interchangeable", "Index cloisonné par client", "Jeu d'évaluation rejoué à chaque version"],
    },
    {
      desc: "Nous outillons vos équipes internes : préparation des réponses du support à partir de votre documentation, notes de version rédigées depuis les tickets livrés, agents reliés à vos outils par MCP (protocole ouvert qui connecte un modèle à des outils et à des données) avec des droits limités au strict nécessaire.",
      points: ["Réponses du support préparées", "Notes de version depuis les tickets", "Agents MCP aux droits limités"],
    },
  ],
  regie: [
    "Chez un éditeur, le développeur IA détaché s'intègre à une équipe produit existante : il prend des tickets dans votre outil de suivi, participe aux revues de code comme ses collègues et installe l'évaluation continue dans votre chaîne d'intégration. Sa mission se borne à un objectif produit (une fonctionnalité en production, un jeu d'évaluation repris par l'équipe), et la passation se prépare dès sa première semaine.",
  ],
  formation: [
    "Les développeurs, les chefs de produit et les équipes de support n'apprennent pas la même chose. Les développeurs travaillent l'évaluation, la gestion du contexte et la sécurité des agents ; les chefs de produit, la spécification d'une fonctionnalité au résultat variable et ses indicateurs ; le support, la lecture des journaux et l'escalade.",
    "Nous formons en intra, sur votre produit et votre base de code, à 1 980 € HT par journée de groupe, et votre OPCO peut financer ces journées en France grâce à notre certification Qualiopi. Depuis l'Omnibus de juillet 2026, l'article 4 du règlement européen attend des fournisseurs qu'ils agissent pour développer la maîtrise de l'IA chez leurs équipes, et le texte ne fixe aucun niveau à atteindre : une formation documentée en apporte la preuve.",
  ],

  guide: {
    kicker: "Guide tech et éditeurs SaaS",
    h2: "Pour un éditeur, une fonctionnalité d'IA est un engagement de produit : elle a un coût par requête, une date de retrait et des obligations de transparence",
    lead: "Selon le panorama Top 250 publié en novembre 2025 par Numeum, l'organisation professionnelle des entreprises du numérique, 61 % des éditeurs de logiciels français ont déjà intégré des fonctionnalités d'IA générative dans leurs offres, et 24 % seulement utilisent leurs propres modèles. Les autres dépendent d'un fournisseur de modèle, de ses conditions de conservation et de région, et du calendrier dans lequel il retire ses versions. Le règlement européen sur l'IA y ajoute, depuis le 2 août 2026, des obligations de transparence. La fonctionnalité doit donc survivre à un changement de modèle, tenir dans l'économie de l'abonnement et respecter le contrat signé avec chaque client.",
    sections: [
      {
        h3: "Une fonctionnalité d'IA fait de l'éditeur un fournisseur au sens du règlement européen",
        paras: [
          "Le règlement (UE) 2024/1689 désigne comme fournisseur l'entreprise qui conçoit un système d'IA, ou le fait concevoir, et le met en service sous son nom. L'éditeur qui ajoute un assistant à son logiciel l'est donc. Depuis le 2 août 2026, l'article 50 lui impose de concevoir l'assistant pour que l'utilisateur sache qu'il échange avec une IA, et de marquer les contenus générés dans un format lisible par machine. L'Omnibus numérique de juillet 2026 laisse jusqu'au 2 décembre 2026 aux systèmes déjà sur le marché pour ce marquage.",
          "Le régime change avec la destination. Un outil qui trie des candidatures, décide de l'admission dans une formation ou calcule le score de crédit d'une personne relève de l'annexe III, donc du haut risque, dont les obligations s'appliqueront le 2 décembre 2027 après le report fixé par l'Omnibus. L'article 25 vise aussi les intégrateurs : celui qui appose sa marque sur un système à haut risque, le modifie substantiellement ou change la destination d'un système au point de le rendre à haut risque en devient le fournisseur. La qualification se fait fonctionnalité par fonctionnalité, avant le développement.",
        ],
      },
      {
        h3: "Les conditions du fournisseur de modèle deviennent celles que vous promettez à vos clients",
        paras: [
          "L'accord de traitement des données que vous signez avec vos clients liste vos sous-traitants, leurs pays et leurs durées de conservation, et le fournisseur de modèle y entre. Chez Anthropic, les entrées et sorties de l'API sont supprimées sous 30 jours par défaut, et la conservation zéro (aucune donnée gardée après la réponse) relève d'un accord négocié. Chez OpenAI, les journaux de surveillance des abus sont gardés jusqu'à 30 jours, et la résidence des données en Europe ne s'applique qu'aux nouveaux projets, après approbation et signature d'un avenant.",
          "Ces conditions évoluent, et un tableau tenu à jour doit répondre au client qui demande où partent ses données : fournisseur, modèle, région, durée de conservation, option retenue. Depuis le 12 septembre 2025, le règlement européen sur les données (Data Act) impose en outre aux fournisseurs de SaaS des interfaces ouvertes et un export dans un format lisible par machine ; il supprimera les frais de changement de fournisseur le 12 janvier 2027. Prévoyez dès la conception l'export de ce que vos clients produisent avec l'assistant.",
        ],
      },
      {
        h3: "Chaque modèle a une date de retrait, et la fonctionnalité doit lui survivre",
        paras: [
          "Anthropic s'engage à prévenir au moins 60 jours avant de retirer un modèle publié : Claude Sonnet 4.5, signalé le 30 septembre 2026, sera retiré le 30 novembre 2026. OpenAI annonce au moins six mois pour un modèle généralement disponible, et parfois deux semaines pour un modèle en préversion. Après la date de retrait, les requêtes vers l'ancien modèle échouent. Une fonctionnalité branchée sur une version précise doit donc migrer à temps, et la date de retrait entre dans le planning produit comme une échéance client.",
          "La migration se prépare avant l'annonce. La fonctionnalité appelle le modèle à travers une couche qui permet d'en changer, et un jeu d'évaluation (des questions réelles avec la réponse attendue) se rejoue sur le remplaçant avant la bascule. Le coût se recalcule aussi : selon la documentation d'Anthropic, les modèles Claude à partir de la version 4.7 découpent un même texte en environ 30 % de jetons de plus (les unités que le modèle lit et facture). Un changement de modèle peut donc déplacer votre marge.",
        ],
      },
      {
        h3: "Le coût par requête se règle dans l'architecture",
        paras: [
          "Une fonctionnalité d'IA coûte à chaque appel, alors que votre client paie un abonnement fixe. Deux mécanismes changent l'équation. Le cache de prompt réutilise la partie fixe d'une requête, comme les instructions ou la documentation : chez Anthropic, une lecture en cache coûte 10 % du prix d'entrée standard, et le cache de cinq minutes est rentable dès la première relecture. Le traitement par lots, pour ce qui n'exige pas de réponse immédiate, divise le prix par deux.",
          "Le reste tient au choix des modèles et au suivi. Un petit modèle traite le tri et la classification, un grand modèle les réponses difficiles, et le routage se décide sur le jeu d'évaluation. Le coût se mesure par compte client et par mois, avec un plafond qui protège contre l'emballement : l'OWASP classe la consommation non bornée parmi les dix risques majeurs des applications de grands modèles de langage (LLM10). Le prix de l'option se fixe sur ces mesures.",
        ],
      },
      {
        h3: "Un agent relié à vos outils élargit la surface d'attaque",
        paras: [
          "L'injection de prompt arrive en tête du Top 10 publié par l'OWASP pour les applications de grands modèles de langage : un texte malveillant, glissé dans un document ou une page que l'agent lit, détourne ses instructions. Dans un SaaS, ce texte peut venir d'un client et viser les données d'un autre. Le même classement cite l'agentivité excessive (LLM06), c'est-à-dire un agent doté de plus de droits que sa tâche n'en demande, et les faiblesses des index vectoriels (LLM08), ces bases qui retrouvent les passages pertinents pour la recherche documentaire.",
          "Les parades relèvent de l'architecture. Chaque client dispose d'un index séparé, et des tests vérifient à chaque version qu'aucune requête ne franchit la frontière. Un agent relié à vos outils par MCP reçoit des droits limités à sa tâche, et toute action qui écrit, supprime ou envoie passe par une confirmation humaine. Les journaux gardent la trace de chaque appel d'outil, pour votre support comme pour un audit de sécurité demandé par un grand compte.",
        ],
      },
    ],
    table: {
      caption: "Six décisions à trancher avant la mise en production",
      headers: ["Décision", "Question à trancher", "Ce qui la contraint"],
      rows: [
        ["Transparence", "L'utilisateur sait-il qu'il échange avec une IA, et les contenus générés sont-ils marqués ?", "Article 50 du règlement (UE) 2024/1689 depuis le 2 août 2026 ; marquage exigé au 2 décembre 2026 pour les systèmes déjà sur le marché"],
        ["Fournisseur de modèle", "Où les requêtes sont-elles traitées, et combien de temps sont-elles conservées ?", "Conditions du fournisseur, accord de traitement signé avec vos clients"],
        ["Retrait du modèle", "Que fait la fonctionnalité quand sa version est retirée ?", "Au moins 60 jours de préavis chez Anthropic, six mois chez OpenAI pour un modèle généralement disponible"],
        ["Coût", "Quel coût par question, par compte et par mois ?", "Grille du fournisseur, cache de prompt, traitement par lots, plafonds par compte"],
        ["Cloisonnement", "Une donnée d'un client peut-elle remonter chez un autre ?", "Contrat client, RGPD, tests d'isolation de l'index à chaque version"],
        ["Agents", "Quelles actions l'IA peut-elle déclencher, et avec quels droits ?", "Top 10 OWASP 2025 (LLM01, LLM06), confirmation humaine des écritures"],
      ],
    },
    cas: {
      h3: "Mise en situation : un éditeur de logiciel de maintenance ajoute une recherche de pannes similaires",
      contexte: "Prenons un éditeur de GMAO (logiciel de gestion de la maintenance) vendu par abonnement à des sites industriels. Ses clients veulent poser une question en langage courant et retrouver, dans l'historique de leur propre site, la panne semblable et l'intervention qui l'a réglée. Ce scénario sert d'illustration : il ne relate aucune mission menée par Masteria.",
      etapes: [
        "Écrire le contrat de la fonctionnalité : les questions couvertes, les sources autorisées (interventions et procédures du site client), la forme de la réponse avec un renvoi vers l'intervention citée.",
        "Constituer un jeu d'évaluation à partir de questions réelles tirées des tickets de support, chacune avec la bonne réponse validée par un technicien.",
        "Cloisonner l'index par compte client, puis vérifier par des tests qu'une question posée depuis un site ne remonte jamais l'intervention d'un autre.",
        "Comparer deux ou trois modèles sur ce jeu, en qualité, en coût par question et en temps de réponse, avec le cache de prompt activé.",
        "Ouvrir la fonctionnalité à quelques clients pilotes, avec la mention d'IA à l'écran, un bouton de signalement et le suivi du coût par compte.",
      ],
      resultat: "Vous obtenez une fonctionnalité dont la qualité, le coût par compte et le comportement au changement de modèle sont mesurés avant la généralisation, et un jeu d'évaluation que votre équipe rejoue à chaque nouvelle version. Le prix de vente de l'option se fixe ensuite sur ces mesures.",
    },
    pieges: [
      { titre: "Promettre à vos clients une région que votre fournisseur ne garantit pas", texte: "La résidence européenne d'OpenAI ne vaut que pour les nouveaux projets, après approbation et signature d'un avenant. Avant d'écrire « données traitées en Europe » dans un contrat, vérifiez la configuration de chaque projet et de chaque modèle appelé, y compris dans les outils annexes de l'équipe." },
      { titre: "Mélanger les données de deux clients dans un même index", texte: "Un index vectoriel commun, filtré par un champ client, laisse la frontière à la merci d'un filtre oublié. Un index par compte, ou un cloisonnement vérifié par des tests automatiques à chaque version, rend la fuite visible avant la mise en production." },
      { titre: "Donner à un agent les droits d'un administrateur", texte: "Un agent hérite facilement du jeton d'accès le plus pratique, donc le plus large. Il reçoit à la place un jeton limité à sa tâche, et chaque action d'écriture passe par une confirmation. L'OWASP range ce défaut parmi les dix risques majeurs, sous le nom d'agentivité excessive." },
      { titre: "Vendre l'option au forfait avant de mesurer le coût par compte", texte: "Un client qui fait passer tout son historique dans l'assistant peut coûter plus que son abonnement. Le coût se suit par compte dès les pilotes, avec des plafonds et une alerte, et le prix de l'option se fixe ensuite sur ces mesures." },
      { titre: "Découvrir le retrait d'un modèle par une erreur en production", texte: "Après la date de retrait, les requêtes vers l'ancien modèle échouent. L'adresse qui reçoit les avis du fournisseur doit être lue, la date doit figurer au planning produit, et le jeu d'évaluation doit tourner sur le remplaçant plusieurs semaines avant l'échéance." },
    ],
  },
  faq: [
    { q: "Quelles obligations l'AI Act impose-t-il à un éditeur qui ajoute un assistant à son logiciel ?", a: "Pour un assistant de support ou de recherche documentaire, l'essentiel tient dans l'article 50, en vigueur depuis le 2 août 2026 : informer l'utilisateur qu'il échange avec une IA, et marquer les contenus générés dans un format lisible par machine, au plus tard le 2 décembre 2026 pour un système déjà commercialisé. Le reste dépend de la destination de la fonctionnalité, et nous la qualifions avec vous au cadrage." },
    { q: "Notre fonctionnalité peut-elle devenir un système à haut risque ?", a: "Oui, si sa destination entre dans l'annexe III du règlement : recrutement et sélection de candidats, admission dans une formation, évaluation de la solvabilité d'une personne, entre autres. Les obligations correspondantes s'appliqueront le 2 décembre 2027. La qualification se fait au cadrage, fonctionnalité par fonctionnalité, et un avis juridique la complète quand le cas est limite." },
    { q: "Quel fournisseur de modèle choisir pour des clients européens ?", a: "Celui dont les conditions tiennent dans votre contrat client. Comparez la région de traitement, la durée de conservation, l'accès à la conservation zéro et la politique de retrait. OpenAI propose une résidence en Europe pour les nouveaux projets, avec un surcoût de 10 % sur les modèles sortis depuis le 5 mars 2026 ; chez Anthropic, l'API ne propose pas de région européenne en direct, et un routage régional passe par Amazon Bedrock ou Google Cloud, avec une majoration de 10 %. Masteria ne revend aucune licence : le comparatif suit vos contraintes." },
    { q: "Que se passe-t-il quand le fournisseur retire le modèle que nous utilisons ?", a: "Les requêtes échouent après la date de retrait. Anthropic prévient au moins 60 jours avant, OpenAI au moins six mois pour un modèle généralement disponible. La fonctionnalité doit pouvoir changer de modèle sans réécriture, et votre jeu d'évaluation dit si le remplaçant fait aussi bien, pour un coût que vous recalculez. Nous livrons cette couche et ce jeu avec le code." },
    { q: "Comment maîtriser le coût par client d'une fonctionnalité d'IA ?", a: "En le mesurant par compte dès le pilote, puis en jouant sur l'architecture : cache de prompt pour la partie fixe des requêtes, traitement par lots pour ce qui peut attendre, petit modèle pour le tri et grand modèle pour les cas difficiles, plafonds par compte. Le prix de l'option se décide ensuite sur des chiffres mesurés, et il se revoit à chaque changement de modèle." },
    { q: "Faut-il affiner un modèle sur nos données ?", a: "Rarement en premier. Le RAG (la recherche dans vos documents juste avant chaque réponse) couvre beaucoup de besoins d'un éditeur, se met à jour sans réentraînement et garde chaque client dans son index. L'affinage (le réentraînement partiel d'un modèle sur vos exemples) se justifie pour un format de sortie particulier, ou pour un volume qui rend un petit modèle spécialisé moins cher ; il se décide sur le jeu d'évaluation, chiffres à l'appui." },
    { q: "Pouvez-vous renforcer notre équipe plutôt que livrer une boîte noire ?", a: "Oui. Un développeur IA de notre réseau peut rejoindre votre équipe produit en régie, sur vos outils et vos rituels, ou nous livrons la fonctionnalité au forfait. Dans les deux cas, le code et la documentation vous sont remis et la passation figure au contrat : votre équipe doit pouvoir faire évoluer la fonctionnalité et rejouer l'évaluation seule." },
    { q: "Combien coûte le développement d'une fonctionnalité d'IA, et la formation de nos développeurs est-elle finançable ?", a: "Le prix dépend du nombre de sources à brancher, du niveau d'évaluation attendu et de la part du travail confiée à vos équipes. Le cadrage commence par 30 minutes offertes avec votre responsable produit ou technique. Quand la décision demande une analyse plus poussée, un Diagnostic IA payant suit, et sa durée comme son forfait se fixent pendant ce cadrage. Le développement fait ensuite l'objet d'une proposition forfaitaire écrite. La formation de vos équipes est finançable par votre OPCO en France ; le développement ne l'est pas." },
  ],
  sources: [
    { name: "Numeum : panorama Top 250 des éditeurs de logiciels français, 15e édition (6 novembre 2025)", url: "https://numeum.fr/economie-marche/panorama-top-250-des-editeurs-de-logiciels-francais-15eme-edition-lia-entre-au-coeur-du-modele-des-editeurs-francais/" },
    { name: "EUR-Lex : règlement (UE) 2024/1689 sur l'intelligence artificielle (articles 3, 25 et 50, annexe III)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { name: "EUR-Lex : règlement (UE) 2026/1744 du 8 juillet 2026, Omnibus numérique sur l'IA (JO du 24 juillet 2026)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    { name: "Anthropic : Model deprecations (calendrier de retrait des modèles)", url: "https://platform.claude.com/docs/en/about-claude/model-deprecations" },
    { name: "Anthropic : tarifs de l'API, cache de prompt et traitement par lots", url: "https://platform.claude.com/docs/en/about-claude/pricing" },
    { name: "Anthropic Privacy Center : durée de conservation des données de l'API", url: "https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data" },
    { name: "OpenAI : politique de dépréciation des modèles", url: "https://developers.openai.com/api/docs/deprecations" },
    { name: "OpenAI : contrôles des données de l'API et résidence en Europe", url: "https://developers.openai.com/api/docs/guides/your-data" },
    { name: "OWASP GenAI Security Project : Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/" },
    { name: "Commission européenne : le Data Act expliqué", url: "https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained" },
  ],
}
