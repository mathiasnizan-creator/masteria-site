// Pages comparatifs IA : données des sept guides (face-à-face et panoramas).
// Faits produit, fenêtres de contexte et tarifs revérifiés le 3 octobre 2026, puis le 7 octobre 2026
// (fiche FAITS-OUTILS du 07/10) pour les six comparatifs autres que chatgpt-vs-claude,
// sur les pages officielles des éditeurs, listées dans `citations` de chaque entrée.
//
// Convention :
//   - toolA = colonne gauche (premier de l'URL)
//   - toolB = colonne droite (deuxième de l'URL)
//   - criteria[i].descriptionA = description du toolA
//   - criteria[i].descriptionB = description du toolB
//   - criteria[i].winner = "a" (toolA gagne) | "b" (toolB gagne) | "tie"
//   - verdict.recommendA / recommendB = listes de raisons
//   - useCases[i].recommendation = "a" | "b" | "tie"
//
// Rendu (ComparisonPage.jsx) : le gras **...** n'est interprété que dans intro,
// answerBox.answer, verdict.summary, methodology, realCases[].verdictText, faq[].a
// et alsoConsidered[].summary (ce dernier accepte aussi les liens [texte](/url)).
// Tous les autres champs s'affichent en texte brut : ni gras ni lien Markdown.

export const COMPARISONS = {
  // ═══════════════════════════════════════════════════════════════════
  // toolA = ChatGPT, toolB = Claude
  // ═══════════════════════════════════════════════════════════════════
  "chatgpt-vs-claude": {
    slug: "chatgpt-vs-claude",
    metaTitle: "Claude vs ChatGPT 2026 : lequel choisir ? | Comparatif Masteria",
    metaDesc:
      "ChatGPT (GPT-5.6, GPT-6) ou Claude (Opus 5.5, Sonnet 5.5) : contexte réel, agents, prix par siège, données. Comparatif vérifié le 5 octobre 2026.",
    h1: "Claude ou ChatGPT : lequel choisir pour votre entreprise en 2026 ?",
    casIds: ["distribution"],
    missionsOutil: "Claude",
    intro:
      "En 2026, deux assistants se partagent l'essentiel du travail fait avec l'IA en entreprise. **ChatGPT**, d'OpenAI, répond avec **GPT-5.6** quand on converse et confie à **GPT-6** les missions de son agent Work. **Claude**, d'Anthropic, s'appuie sur trois modèles parus en septembre 2026 : **Opus 5.5**, que l'éditeur conseille par défaut, **Fable 5.1** pour les travaux les plus lourds, et **Sonnet 5.5** pour aller vite. Les deux rédigent, analysent et programment à un niveau équivalent. Leurs différences apparaissent à l'usage : le volume de documents que l'interface accepte d'un coup, la manière de mener une tâche jusqu'à son terme, et le coût d'un siège une fois ajoutées les options dont vous aurez besoin.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "5 octobre 2026",
    datePublished: "2026-05-04",
    dateModified: "2026-10-07",
    readTime: "10 minutes",
    keywords:
      "chatgpt vs claude, comparatif chatgpt claude 2026, claude opus 5.5, claude sonnet 5.5, claude fable 5.1, gpt-5.6, gpt-6, quel assistant ia entreprise, claude ou chatgpt entreprise, prix claude team, prix chatgpt business",

    // ─── Intros de section propres à ce comparatif (lues par ComparisonPage via `textes`)
    textes: {
      cas: "Sept situations de bureau que nous faisons travailler en formation, chacune tranchée entre ChatGPT et Claude sur leurs abonnements professionnels : diapositives, visuels, rapport, routine du matin, budget, entretiens, appel d'offres.",
      metiers: "Le choix que nous conseillons pour chaque fonction, tiré des formations par métier que Masteria anime depuis 2022.",
      erreurs: "Nous voyons ces faux pas revenir chaque fois qu'une entreprise hésite entre ChatGPT et Claude.",
      alternatives: "Quatre autres assistants reviennent souvent dans la discussion quand on compare ChatGPT et Claude.",
      ctaTitre: "Faites essayer ChatGPT et Claude à vos équipes avant de trancher",
      ctaTexte: "Pendant deux jours, notre formation multi-outils fait travailler vos équipes sur leurs propres tâches avec cinq assistants : Claude, ChatGPT, Gemini, Copilot et Mistral. Qualiopi certifie nos formations : un financement OPCO est envisageable pour ces deux jours.",
    },

    // ─── Ce que nos formations Claude ont montré (sources : etudes-de-cas.js, cas `distribution`, et missions-formation.js)
    terrain: {
      titre: "Ce que nos formations Claude ont montré",
      paras: [
        "En juin 2026, un distributeur informatique B2B a fait former [dix référents pendant deux jours](/etudes-de-cas-ia#distribution), un par projet. Avec nous, ils ont conçu onze compétences Claude, des procédures réutilisables, pour les relances, la cotation, les stocks ou les cahiers des charges. Celle qui relance les devis avait été mise à l'épreuve sur de vrais devis avant même la formation. D'octobre à décembre 2026, ces référents étendront l'usage au reste de l'entreprise.",
        "Les missions Claude d'août et de septembre 2026 partent, elles aussi, des fichiers de chaque équipe. Chez un éditeur de logiciels, le programme de l'équipe formation prévoyait [deux compétences partagées à toute l'organisation](/etudes-de-cas-ia#mission-editeur-pole-formation) et une préparation de session confiée à Cowork ; un bilan à froid fera ensuite le point sur les usages installés. Une [responsable études d'un groupe immobilier](/etudes-de-cas-ia#mission-immobilier-etudes) a travaillé sur ses propres fichiers de ventes, de l'analyse jusqu'au deck de résultats pour PowerPoint, et, dans un cabinet de géomètres-experts, [le parcours du gérant portait sur une compétence](/etudes-de-cas-ia#mission-gerance-cabinet) chargée de vérifier ses procès-verbaux de bornage en les rapprochant du plan et de l'acte.",
      ],
    },

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "ChatGPT ou Claude : lequel choisir en 2026 ?",
      answer:
        "Prenez **Claude** (Anthropic) quand l'essentiel du travail tient dans de gros documents, dans du code ou dans des tâches de bureau à mener du début à la fin. Avec un abonnement payant, Claude accepte **un million de tokens** dans un même échange (l'unité de texte que lit le modèle s'appelle le token), qu'il s'agisse d'Opus 5.5, de Sonnet 5.5 ou de Fable 5.1 ; sur ChatGPT Plus et Business, le mode raisonnement ne dépasse pas 256 000 tokens et le mode instantané 54 000. Prenez **ChatGPT** (OpenAI) pour produire des images, ce que Claude ne sait pas faire, ou pour laisser des collègues sans profil technique monter eux-mêmes des agents d'équipe reliés à Slack et à vos applications. Les offres équipe des deux éditeurs coûtent autant en dollars : 20 $ mensuels par siège quand la facture est annuelle, 25 $ quand elle est mensuelle. Beaucoup d'équipes ont intérêt à garder les deux.",
      bullets: [
        "Contrats, rapports, dossiers d'appel d'offres et autres documents volumineux : Claude",
        "Code et refonte de gros dépôts : Claude, puisque Claude Code est compris à partir de l'abonnement Pro",
        "Visuels de campagne et images générées : ChatGPT",
        "Agents partagés par l'équipe, créés sans programmer et lancés depuis Slack : ChatGPT",
        "Budget pour un seul outil : décidez sur l'usage qui pèse le plus, après un essai sur vos propres documents",
      ],
    },

    toolA: {
      id: "chatgpt",
      name: "ChatGPT",
      editor: "OpenAI",
      currentModel: "Conversation sur GPT-5.6 · Work et Codex sur GPT-6.1 Sol et GPT-6 Astra",
      country: "États-Unis",
      pricing: "Prix France par mois : Go 8 €, Plus 23 €, Pro 103 € et plus, Business 21 € l'utilisateur en annuel",
      foundedAI: "2022",
      color: "#10A37F",
    },
    toolB: {
      id: "claude",
      name: "Claude",
      editor: "Anthropic",
      currentModel: "Opus 5.5 par défaut, Fable 5.1 au sommet, Haiku 4.5 et Sonnet 5.5 pour aller vite",
      country: "États-Unis",
      pricing: "Pro 20 $ (17 $ en annuel) · Max dès 100 $ · Team 25 $/siège (20 $ en annuel)",
      foundedAI: "2023",
      color: "#D97706",
    },

    // ─── GEO : tableau de faits datés, lisible en HTML brut par un moteur génératif
    keyFacts: {
      title: "ChatGPT et Claude, ligne à ligne",
      note: "Relevé du 3 octobre 2026, fait à partir des pages d'OpenAI et d'Anthropic. OpenAI publie des prix en euros pour la France ; Anthropic donne les siens en dollars, hors taxes.",
      rows: [
        { criterion: "Modèles en service", a: "Conversation : GPT-5.6 Sol, ou Luna pour Free et Go. GPT-6 Pro s'y ajoute pour Pro, Business et Enterprise. Work et Codex tournent sur GPT-6 Astra, GPT-6 Sol ou GPT-6.1 Sol", b: "Trois sorties en septembre 2026 : le 1er pour Fable 5.1, le 22 pour Opus 5.5, le 28 pour Sonnet 5.5. La gamme compte aussi Haiku 4.5" },
        { criterion: "Fenêtre dans le chat", a: "Plus et Business : 256 000 tokens en raisonnement, 54 000 en instantané. Pro : 400 000 et 128 000", b: "Offres payantes : 1 000 000 de tokens pour les trois modèles de septembre, 200 000 pour Haiku 4.5" },
        { criterion: "Fenêtre côté API", a: "GPT-6 Astra, GPT-6.1 Sol et GPT-6 Luna : 1 050 000 tokens", b: "Les trois mêmes modèles : un million de tokens" },
        { criterion: "Images et vidéo générées", a: "Images : ChatGPT Images 2.5, sorti le 8 septembre 2026. Vidéo : impossible depuis que l'application Sora a fermé, le 26 avril 2026", b: "Ni photos ni illustrations ; Claude dessine schémas, graphiques et maquettes (Claude Design, Slides et Docs, en bêta)" },
        { criterion: "Mode agent", a: "ChatGPT Work, depuis le 9 juillet 2026, pour les tâches longues ; sur Business et Enterprise, l'équipe partage ses agents d'espace de travail, qu'elle programme ou lance depuis Slack ou par API", b: "Cowork, fondu dans le chat le 16 septembre 2026, ouvert d'abord à Pro et Max : il agit sur vos fichiers et vos applications connectées et répète une tâche à date fixe" },
        { criterion: "Assistant de code", a: "Codex, accessible avec un quota limité dès la formule gratuite", b: "Claude Code, compris dans les abonnements Pro, Max, Team et Enterprise, mais absent de la formule gratuite" },
        { criterion: "Abonnement individuel", a: "Prix France : 8 € par mois pour Go, 23 € pour Plus", b: "Pro : 17 $ par mois en paiement annuel, 20 $ en paiement mensuel" },
        { criterion: "Offre équipe", a: "Business : 21 € mensuels par utilisateur en paiement annuel, 26 € en paiement mensuel ; siège Premium : 100 $ en annuel ou 125 $ en mensuel", b: "Team : 20 $ mensuels par siège en paiement annuel, 25 $ en paiement mensuel ; siège Premium : 100 $ en annuel ou 125 $ en mensuel" },
        { criterion: "Entraînement sur vos échanges", a: "Business et Enterprise : exclus par défaut. Free, Go, Plus et Pro : chacun peut s'y opposer (opt-out)", b: "Team et Enterprise : exclus par défaut. Free, Pro et Max : chacun peut s'y opposer (opt-out)" },
        { criterion: "Données en Europe", a: "Enterprise et Edu : pour les clients éligibles, stockage en Europe et calcul des réponses sur place. Business : stockage européen seul, ouvert par étapes", b: "Pas de région européenne dans l'API ni dans les applications d'Anthropic (États-Unis ou infrastructure mondiale) ; pour rester en Europe, passer par Google Cloud Vertex AI ou AWS Bedrock" },
      ],
    },

    verdict: {
      title: "Verdict en 30 secondes",
      summary:
        "**Claude** prend le dessus sur le travail documentaire et technique : avec un abonnement payant, son chat lit d'un coup un million de tokens, près de quatre fois la fenêtre de raisonnement de ChatGPT Business ; Claude Code fait partie de l'abonnement Pro ; et Cowork conduit maintenant une tâche entière depuis n'importe quel échange. **ChatGPT** reste devant pour produire des visuels, avec ChatGPT Images 2.5, et pour automatiser le travail d'une équipe : on décrit ses agents d'espace de travail avec des phrases ordinaires, on les partage, puis on les lance depuis Slack. Votre usage principal tranche, et comme les prix se valent, rien n'empêche d'équiper les équipes des deux. Pour vous former, voyez notre [formation Claude](/formation-claude-ia) organisée par métier et la [formation Claude Code](/formation-claude-code) conçue pour les développeurs.",
      recommendA: ["Visuels et images pour la communication", "Agents d'équipe créés sans écrire de code", "Automatisations reliées à Slack et à vos applications", "Extensions Word, Excel et PowerPoint utilisables dès la formule gratuite"],
      recommendB: ["Développement logiciel avec Claude Code", "Lecture de contrats, de rapports et d'appels d'offres", "Textes longs qui doivent garder leur plan", "Tâches de bureau déléguées du début à la fin"],
    },

    criteria: [
      {
        title: "Quantité de texte traitée d'un coup selon l'abonnement",
        descriptionA:
          "Tout se joue sur la fenêtre de contexte, autrement dit la longueur de texte que l'assistant prend en compte d'un seul tenant pendant un échange. Dans ChatGPT Plus et Business, le mode raisonnement monte à 256 000 tokens, environ 320 pages d'après OpenAI, et le mode instantané à 54 000. L'abonnement Pro passe à 400 000 et 128 000. Côté API, les modèles GPT-6 vont jusqu'à 1 050 000 tokens : l'écart entre ce chiffre annoncé et celui de l'abonnement prend beaucoup d'équipes au dépourvu.",
        descriptionB:
          "Avec un abonnement payant, chaque échange avec Claude peut contenir un million de tokens, avec chacun des trois modèles sortis en septembre, soit la fenêtre que propose l'API. Un dossier de plusieurs centaines de pages entre en une seule fois. Quand l'échange se rapproche du plafond, Claude condense les messages les plus anciens et poursuit, pourvu que l'exécution de code soit activée.",
        winner: "b",
        winnerText: "Avantage net Claude dans l'interface, parité via l'API",
      },
      {
        title: "Qualité de génération de texte en français",
        descriptionA:
          "Bon niveau sur les formats courts : accroches, courriels, publications, variantes publicitaires. GPT-5.6 Sol suit bien un gabarit imposé, avec une tendance aux formulations passe-partout quand la consigne reste vague.",
        descriptionB:
          "Lors de nos mises en situation de formation, Claude conserve mieux le plan d'un texte long : note de synthèse, proposition commerciale, compte rendu. D'après Anthropic, Opus 5.5 commence par l'information principale, évite davantage le jargon et respecte les règles de rédaction que vous lui imposez.",
        winner: "b",
        winnerText: "Léger avantage Claude sur les contenus longs",
      },
      {
        title: "Code et développement",
        descriptionA:
          "Codex prend en charge seul des tâches de programmation, sur le poste du développeur ou dans le cloud grâce à Codex Cloud, ouvert le 29 septembre 2026. Codex accueille GPT-6.1 Sol par étapes. La formule gratuite donne déjà accès à Codex, dans la limite d'un quota ; dans les offres payantes, Codex puise dans la même enveloppe d'usage que ChatGPT Work.",
        descriptionB:
          "Claude Code s'utilise dans le terminal, sur votre dépôt, et profite du million de tokens des trois modèles de septembre. Selon Anthropic, Opus 5.5 est le plus performant de ses modèles Opus en programmation agentique, ce mode où le modèle lit, modifie et teste le code sans être guidé à chaque étape. Claude Code fait partie des abonnements Pro, Max, Team et Enterprise ; la formule gratuite en est privée.",
        winner: "b",
        winnerText: "Avantage Claude sur les gros dépôts, grâce au contexte",
      },
      {
        title: "Agents et tâches automatisées",
        descriptionA:
          "OpenAI propose deux outils. ChatGPT Work, disponible depuis le 9 juillet 2026, conduit une tâche longue jusqu'au résultat final (document, tableur, présentation ou site) et peut démarrer quand un événement survient dans une application connectée. Seconde brique, les agents d'équipe : en disponibilité générale pour Business, Enterprise et Edu depuis le 21 mai 2026, ces agents d'espace de travail naissent d'une simple description de la tâche, puis se partagent, se programment et répondent dans Slack. Depuis le 6 juillet 2026, chaque exécution se paie en crédits, prélevés d'abord sur l'enveloppe comprise dans le siège.",
        descriptionB:
          "Cowork et la conversation ne font plus qu'un depuis le 16 septembre 2026 : vous posez une question ou confiez un rapport, et Claude déroule les étapes sur vos fichiers et vos applications connectées. Par défaut, il attend votre feu vert avant d'agir, et la tâche peut revenir chaque semaine. Pro et Max en profitent les premiers ; Team et Free suivront, et Anthropic avertit les administrateurs Enterprise trente jours avant tout changement.",
        winner: "tie",
        winnerText: "Égalité : chacun automatise à sa façon",
      },
      {
        title: "Multimodalité (image, vidéo, voix)",
        descriptionA:
          "Pour l'image, ChatGPT Images 2.5 (8 septembre 2026) crée et corrige des visuels en partant d'un exemple ou d'une esquisse, et GPT-Live-1 tient la conversation à l'oral. La vidéo a disparu : OpenAI a mis fin à Sora, l'application le 26 avril 2026 puis l'API le 24 septembre 2026.",
        descriptionB:
          "Claude lit les images et dispose d'un mode vocal, sans produire de photos ni d'illustrations. Il dessine des schémas, des graphiques et des visuels interactifs, et depuis le 16 septembre 2026, Claude Slides et Claude Docs, en bêta, fabriquent des diapositives et des documents à exporter en PowerPoint ou en PDF.",
        winner: "a",
        winnerText: "Avantage ChatGPT sur l'image",
      },
      {
        title: "Écosystème, connecteurs et intégrations",
        descriptionA:
          "Depuis le 9 juillet 2026, un répertoire de plugins remplace celui des applications : chaque plugin rassemble des compétences et des accès à vos outils, par exemple Gmail, Slack, Dropbox, Box, SharePoint ou Google Drive. Des extensions officielles amènent ChatGPT dans Word, Excel et PowerPoint. À surveiller : les GPTs personnalisés disparaissent de toutes les offres le 11 décembre 2026, sauf dans les espaces Enterprise dotés d'un délai, qui les gardent jusqu'au 11 février 2027 ; ces espaces Enterprise ne pourront plus en créer après le 26 octobre. OpenAI organise leur migration vers les plugins.",
        descriptionB:
          "Claude se relie à vos logiciels grâce à MCP (pour Model Context Protocol), standard ouvert qu'Anthropic a conçu pour brancher un assistant sur les outils de l'entreprise et que ChatGPT, Gemini et Microsoft Copilot ont repris. Depuis le 7 mai 2026, chaque abonnement payant permet d'ajouter Claude à Word, à Excel et à PowerPoint, Outlook restant en bêta. Depuis juillet 2026, une fois l'administrateur d'accord, le connecteur Microsoft 365 rédige et envoie des courriels ou met à jour des fichiers.",
        winner: "tie",
        winnerText: "Match nul : deux écosystèmes ouverts sur vos outils",
      },
      {
        title: "Compétences réutilisables et portabilité",
        descriptionA:
          "Les Skills de ChatGPT regroupent instructions, exemples et scripts, et ChatGPT les mobilise de lui-même quand elles servent la demande. Elles sont ouvertes aux espaces Business, Enterprise, Healthcare et Edu, et se créent en dialoguant avec ChatGPT.",
        descriptionB:
          "Les Skills sont nées chez Anthropic le 16 octobre 2025 ; leur format, Agent Skills, a été rendu public le 18 décembre 2025 sous la forme d'un standard ouvert. Une procédure écrite une seule fois reste donc lisible par d'autres outils compatibles, et l'entreprise dépend moins d'un éditeur unique.",
        winner: "b",
        winnerText: "Avantage Claude sur la portabilité des procédures",
      },
      {
        title: "Sécurité et confidentialité des données",
        descriptionA:
          "Business et Enterprise : OpenAI ne se sert pas de ces échanges pour l'entraînement ; chez Free, Go, Plus et Pro, chaque utilisateur peut refuser cet usage. Business comprend l'authentification unique SAML, tandis que SCIM (qui crée et retire les comptes automatiquement), la gestion des clés et les droits par rôle restent réservés à Enterprise. Certifications affichées par OpenAI : SOC 2 Type II, ISO 27001, ISO 27017, ISO 27018 et ISO 27701.",
        descriptionB:
          "Par défaut, rien de ce qui passe par Team ou Enterprise ne sert à l'entraînement chez Anthropic ; sur Free, Pro et Max, l'utilisateur peut s'y opposer. Team inclut déjà l'authentification unique ; Enterprise ajoute SCIM, une API de conformité, des journaux d'audit et une durée de conservation sur mesure. Certifications publiées : ISO 27001, ISO/IEC 42001, consacrée au management de l'IA, SOC 2 Type I et Type II.",
        winner: "tie",
        winnerText: "Match nul : garanties comparables sur les offres équipe",
      },
      {
        title: "Hébergement des données en Europe",
        descriptionA:
          "Pour les clients éligibles, Enterprise et Edu peuvent conserver les contenus en Europe et y calculer aussi les réponses (l'inférence). Sur Business, l'option de stockage régional se déploie par étapes, sans inférence en Europe, et OpenAI garde quelque temps une copie des conversations sur le sol américain pour lutter contre les abus.",
        descriptionB:
          "Anthropic n'offre aucune région en Europe : son API fait tourner les requêtes soit aux États-Unis, soit sur une infrastructure mondiale, et claude.ai propose sur Enterprise une option qui cantonne l'inférence aux États-Unis. Claude est aussi disponible chez Microsoft Foundry, Google Cloud et Amazon Bedrock ; la localisation des données se vérifie alors auprès de ce fournisseur cloud.",
        winner: "a",
        winnerText: "Avantage ChatGPT Enterprise pour les données en Europe",
      },
      {
        title: "Raisonnement et analyse",
        descriptionA:
          "GPT-6 Pro, qui repose sur GPT-6 Astra (présenté le 3 septembre 2026), s'utilise dans la conversation pour Pro, Business et Enterprise, avec des quotas. GPT-5.6 Sol offre un curseur de réflexion à trois positions pour doser la profondeur d'analyse selon la question.",
        descriptionB:
          "Anthropic décrit Fable 5.1 comme le plus capable de ses modèles sur les travaux de longue haleine, et Opus 5.5 comme son équivalent sur la plupart des tâches, pour un coût 40 % plus bas que celui d'Opus 5. Fable 5.1 n'existe que dans les offres payantes : Pro y accède par des crédits d'usage, tandis que Max et les sièges Team Premium peuvent y consacrer jusqu'à la moitié de leurs limites hebdomadaires.",
        winner: "tie",
        winnerText: "Match nul : les deux sont au niveau, sur des terrains différents",
      },
      {
        title: "Prix publics et coût complet d'un siège",
        descriptionA:
          "Grille française : après la formule gratuite viennent Go (8 €), Plus (23 €) et Pro (103 € et plus) chaque mois. Business revient à 21 € le mois par utilisateur s'il est payé à l'année, 26 € s'il est payé au mois, dès deux sièges ; Enterprise se négocie sur devis. Passé l'enveloppe comprise, il faut acheter des crédits pour Codex, pour ChatGPT Work et pour chaque agent d'espace de travail.",
        descriptionB:
          "Après la formule gratuite viennent Pro, à 20 $ le mois ou 17 $ si l'on paie l'année, et Max, à partir de 100 $ par mois. Team se facture 25 $ le siège au mois ou 20 $ à l'année, et accueille entre 2 et 150 sièges ; un siège Premium, qui donne cinq fois plus d'usage, vaut 125 $, ou 100 $ à l'année. Enterprise demande 20 $ par siège en paiement annuel, et y ajoute la consommation facturée aux tarifs de l'API.",
        winner: "tie",
        winnerText: "Prix d'entrée identiques en dollars, options à chiffrer",
      },
      {
        title: "Hallucinations et fiabilité factuelle",
        descriptionA:
          "La recherche web et la recherche approfondie citent leurs sources, ce qui facilite le contrôle. Le risque qui compte en entreprise tient à tout ce qui vous engage : un chiffre repris tel quel dans un document contractuel se vérifie à la main.",
        descriptionB:
          "Même règle de prudence. Sur un document long chargé en entier, la citation du passage d'origine accélère la vérification humaine, surtout quand le dossier dépasse ce que la fenêtre de ChatGPT peut contenir.",
        winner: "tie",
        winnerText: "Match nul : la vérification humaine reste obligatoire",
      },
    ],

    useCases: [
      { metier: "Marketing et communication", recommendation: "a", why: "Visuels produits par ChatGPT Images 2.5, variantes d'un même message, agents qui montent les campagnes à partir de vos applications connectées." },
      { metier: "Code et développement", recommendation: "b", why: "Claude Code fait partie de l'abonnement Pro et charge un gros dépôt dans son million de tokens de contexte." },
      { metier: "Juridique et conformité", recommendation: "b", why: "Un contrat entier et ses annexes tiennent dans une seule conversation, avec citation des passages." },
      { metier: "Ressources humaines", recommendation: "tie", why: "ChatGPT pour produire annonces, supports et visuels ; Claude pour analyser des entretiens ou une enquête interne." },
      { metier: "Finance et contrôle de gestion", recommendation: "b", why: "Analyse de rapports longs avec traçabilité des chiffres. Dans les deux cas, la lecture des gros tableaux se contrôle." },
      { metier: "Service client", recommendation: "a", why: "Ses agents d'espace de travail répondent dans Slack, déclenchés par API depuis votre outil de support." },
      { metier: "Appels d'offres et achats", recommendation: "b", why: "Le dossier de consultation complet tient dans une conversation, ce qui évite de découper le cahier des charges." },
      { metier: "Direction générale", recommendation: "tie", why: "Veille et préparation de réunion d'un côté, mémos longs de l'autre : les deux outils se complètent." },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Ce qui a changé depuis la version publiée en août 2026",
      items: [
        { date: "Septembre 2026", text: "Chez Anthropic, trois modèles sont sortis en septembre : le 1er pour Fable 5.1, le 22 pour Opus 5.5, le 28 pour Sonnet 5.5. Avec un abonnement payant, chacun accepte un million de tokens dans un même échange." },
        { date: "Septembre 2026", text: "Côté OpenAI, GPT-6 Astra a été dévoilé le 3 septembre ; le 22 sont arrivés GPT-6 Sol ainsi que GPT-6 Luna, puis le 29 GPT-6.1 Sol, tous réservés à ChatGPT Work et à Codex. Le chat conserve GPT-5.6 et propose GPT-6 Pro aux abonnés Pro, Business et Enterprise." },
        { date: "Septembre 2026", text: "Le 16 septembre, Anthropic a fondu Cowork dans la conversation de Claude et ouvert Claude Docs et Claude Slides en bêta. OpenAI a fixé au 11 décembre 2026 le retrait des GPTs personnalisés, au profit des plugins ; dans les espaces Enterprise, leur création doit cesser dès le 26 octobre." },
        { date: "5 octobre 2026", text: "Notre revérification apporte trois précisions. Depuis le 7 mai 2026, tout abonnement payant permet d'ajouter Claude à Word, à Excel et à PowerPoint, et Outlook reste en bêta. Claude dans Chrome est en disponibilité générale depuis le 26 août 2026. Les applications d'Anthropic n'ont aucune région européenne, mais AWS Bedrock et Google Cloud Vertex AI permettent d'héberger Claude en Europe." },
        { date: "7 octobre 2026", text: "Précision sur les GPTs personnalisés, d'après le centre d'aide d'OpenAI consulté ce jour : la disparition prévue le 11 décembre 2026 vaut pour toutes les offres, tandis que l'arrêt des créations, programmé le 26 octobre, ne vise que les espaces Enterprise." },
        { date: "Correction", text: "Une version précédente présentait Claude Code comme accessible sans abonnement. La page tarifs d'Anthropic le réserve aux abonnés Pro, Max, Team et Enterprise." },
        { date: "Correction", text: "Notre ancienne version mentionnait Sora 2 pour créer des vidéos dans ChatGPT. L'application Sora a fermé le 26 avril 2026 et son API le 24 septembre 2026 : ChatGPT ne produit plus aucune vidéo." },
        { date: "Correction", text: "Nous avions rangé les échanges Pro et Max de Claude parmi ceux qui échappent d'office à l'entraînement. Sur ces abonnements individuels, l'utilisateur doit refuser lui-même cet usage dans les paramètres ; seuls Team et Enterprise en sont exclus par défaut." },
      ],
    },

    methodology:
      "Masteria, qui conseille, outille et forme les entreprises en intelligence artificielle depuis 2022 à partir de Lyon, a rédigé ce comparatif. Chaque verdict par cas d'usage s'appuie sur des exercices que nous faisons travailler en formation, construits à partir de tâches de bureau rencontrées en entreprise. Le **3 octobre 2026**, nous avons contrôlé une nouvelle fois les fonctionnalités, les prix et la taille des fenêtres de contexte sur les pages d'OpenAI et d'Anthropic citées plus bas. Modèles pris pour référence : **GPT-6 Pro** et **GPT-5.6 Sol** côté ChatGPT, **Opus 5.5** ainsi que **Sonnet 5.5** côté Claude.",

    citations: [
      { name: "Grille des abonnements Claude (claude.com)", url: "https://claude.com/pricing" },
      { name: "Centre d'aide Claude : taille du contexte sur les abonnements payants", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
      { name: "Documentation Anthropic : liste des modèles Claude", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
      { name: "Annonce d'Opus 5.5 par Anthropic, 22 septembre 2026", url: "https://www.anthropic.com/claude-opus-5-5" },
      { name: "Annonce de Sonnet 5.5 par Anthropic, 28 septembre 2026", url: "https://www.anthropic.com/claude-sonnet-5-5" },
      { name: "Présentation conjointe de Mythos 5.1 et de Fable 5.1 (septembre 2026)", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1" },
      { name: "Billet du 16 septembre 2026 : Cowork rejoint la conversation", url: "https://claude.com/blog/cowork-is-now-claude" },
      { name: "Journal des versions des applications Claude", url: "https://support.claude.com/en/articles/12138966-release-notes" },
      { name: "Centre d'aide Claude : la création d'images", url: "https://support.claude.com/en/articles/9002504-can-claude-produce-images" },
      { name: "Billet d'Anthropic sur les Skills et le standard Agent Skills", url: "https://claude.com/blog/skills" },
      { name: "Agentic AI Foundation : Anthropic lui confie MCP (9 décembre 2025)", url: "https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation" },
      { name: "Certifications obtenues par Anthropic, centre de confidentialité", url: "https://privacy.claude.com/en/articles/10015870-what-certifications-has-anthropic-obtained" },
      { name: "Résidence des données sur la plateforme Claude (documentation)", url: "https://platform.claude.com/docs/en/manage-claude/data-residency" },
      { name: "Prix de ChatGPT pour la France (chatgpt.com)", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "Historique des versions de ChatGPT, aide OpenAI", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "Fiche d'aide OpenAI sur GPT-6 Pro et GPT-5.6", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "Fiche OpenAI consacrée à ChatGPT Work et à Codex", url: "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
      { name: "Vue d'ensemble de l'offre ChatGPT Business", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
      { name: "Nouveautés successives de ChatGPT Business", url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes" },
      { name: "Les Skills côté ChatGPT, aide OpenAI", url: "https://help.openai.com/en/articles/20001066-skills-in-chatgpt" },
      { name: "Fin de Sora : la fiche d'information d'OpenAI", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
      { name: "Où ChatGPT stocke les données et calcule les réponses", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "Lieu de stockage des contenus ChatGPT Business", url: "https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored" },
      { name: "Catalogue des modèles de l'API OpenAI", url: "https://developers.openai.com/api/docs/models" },
      { name: "EUR-Lex : règlement 2026/1744 modifiant l'AI Act (son article 4)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
      { name: "Texte de l'AI Act publié par EUR-Lex (UE 2024/1689)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    ],

    realCases: [
      {
        scenario: "Construire une présentation commerciale depuis le brief d'un prospect",
        feature: "ChatGPT Work et extension PowerPoint · Claude Slides et Claude Design",
        prompt:
          "Je joins le brief de mon prospect (PDF de 6 pages) : une fintech qui veut équiper 80 commerciaux d'un outil d'IA. Prépare une présentation de 8 diapositives : besoin, 3 problèmes clés, notre proposition, retour attendu, cas comparables, planning, tarif, prochaines étapes. Style sobre, ton direct.",
        verdictText:
          "**Égalité.** ChatGPT fabrique les diapositives dans ChatGPT Work, ou dans PowerPoint grâce à son extension. Claude les prépare dans la conversation avec Claude Slides, en bêta depuis le 16 septembre 2026, exporte en PowerPoint ou en PDF et respecte la charte graphique fournie via Claude Design. Votre logiciel de présentation habituel fera la différence.",
        winner: "tie",
      },
      {
        scenario: "Générer 8 visuels pour une campagne LinkedIn en respectant la charte",
        feature: "ChatGPT Images 2.5 · Claude sans génération d'images",
        prompt:
          "Je lance une série LinkedIn sur l'IA en RH. Génère 8 visuels carrés (1080×1080) dans ce style : minimaliste, palette bleu nuit et or, aucun visage, ambiance sobre. Un thème par visuel : recrutement, intégration, formation, entretien annuel, mobilité interne, fidélisation, paie, départ.",
        verdictText:
          "**ChatGPT l'emporte** : ChatGPT Images 2.5 livre la série entière, s'inspire d'un exemple ou d'une esquisse et corrige un détail sans tout refaire. Claude ne crée ni photos ni illustrations ; il peut en revanche rédiger les huit consignes à transmettre ensuite à un générateur d'images.",
        winner: "a",
      },
      {
        scenario: "Synthétiser un rapport sectoriel de 400 pages pour le comité de direction",
        feature: "Claude, un million de tokens · ChatGPT, 256 000 tokens en mode raisonnement",
        prompt:
          "Je joins un rapport de 400 pages sur le commerce B2B en Europe. Pour mon comité de direction de demain : une synthèse d'une page, 5 chiffres clés, 3 conséquences pour notre activité, 2 questions à creuser. Reste fidèle aux chiffres du rapport et cite les pages.",
        verdictText:
          "**Avantage Claude** : avec un million de tokens, le rapport entre en entier d'un seul tenant, et Claude cite les pages. En mode raisonnement, ChatGPT Plus et Business lisent environ 320 pages d'après OpenAI ; au-delà, il faut couper le document, et les liens entre chapitres se perdent. Sur un rapport de 100 pages, les deux outils s'en sortent.",
        winner: "b",
      },
      {
        scenario: "Automatiser une tâche récurrente de préparation de journée",
        feature: "ChatGPT : tâches planifiées et déclenchées · Claude : tâches planifiées depuis la conversation",
        prompt:
          "Chaque matin à 7 h : résume mes courriels non lus de la nuit, liste mes 3 réunions du jour avec leur contexte (qui, sujet, dernier échange) et rappelle mes 5 priorités de la semaine. Format : un message court, lisible en 90 secondes.",
        verdictText:
          "**Aucun ne se détache.** ChatGPT programme la tâche et peut aussi la lancer à l'arrivée d'un courriel Gmail ou d'un message Slack, sur Plus, Pro et les offres d'équipe. Claude la programme depuis la conversation et consulte messagerie et agenda grâce à ses connecteurs, Microsoft 365 compris. Des deux côtés, chacun relie ses propres comptes.",
        winner: "tie",
      },
      {
        scenario: "Bâtir dans Excel le budget prévisionnel demandé à l'oral par un directeur",
        feature: "ChatGPT pour Excel · Claude pour Excel",
        prompt:
          "Mon directeur veut un budget prévisionnel pour notre nouveau département (8 personnes, lancement au troisième trimestre). Construis un classeur : salaires chargés par profil, logiciels, déplacements, marketing, consolidation mensuelle sur 18 mois, graphique de consommation de trésorerie, sensibilité de plus ou moins 10 % sur les trois premiers postes.",
        verdictText:
          "**Égalité** : OpenAI comme Anthropic proposent maintenant une extension qui travaille à l'intérieur d'Excel. Claude pour Excel fait partie de l'abonnement Pro ; ChatGPT pour Excel fonctionne dès la formule gratuite, avec un usage restreint. Dans les deux cas, c'est à vous de relire les formules.",
        winner: "tie",
      },
      {
        scenario: "Tirer une note de synthèse de 12 entretiens menés auprès des collaborateurs",
        feature: "Claude, projets et documents · ChatGPT, projets et Pages",
        prompt:
          "Je joins 12 transcriptions d'entretiens (60 pages) menés auprès de mes équipes sur le climat social. Identifie les 5 thèmes qui reviennent le plus, 3 verbatims exacts par thème, les écarts entre managers et opérationnels, et 4 actions possibles ce trimestre. Format : note de 2 pages.",
        verdictText:
          "**Avantage Claude** lors de nos mises en situation : les citations restent exactes, sans reformulation, et les désaccords sont rendus avec nuance. Les 60 pages entrent dans les deux fenêtres ; la différence porte sur la fidélité des verbatims.",
        winner: "b",
      },
      {
        scenario: "Bâtir une offre pour un marché public au dossier de 500 pages",
        feature: "Claude : dossier complet en une conversation · ChatGPT : découpage nécessaire",
        prompt:
          "Je joins le règlement de consultation, le CCTP, le CCAP et les annexes techniques. Extrais les critères de jugement et leur pondération, la liste des pièces à fournir et leur format, les exigences techniques qui nous posent problème, et les échéances. Pour chaque point, indique l'article et la page.",
        verdictText:
          "**Avantage Claude** : les 500 pages d'un dossier de consultation des entreprises (DCE) tiennent dans le million de tokens d'une seule conversation, ce qui permet de croiser le CCTP avec le règlement sans rien découper. En mode raisonnement, ChatGPT Plus et Business plafonnent vers 320 pages : il faut segmenter le dossier, et les renvois d'une pièce à l'autre se perdent à ce moment-là. Dans tous les cas, la liste des pièces se contrôle à la main avant le dépôt.",
        winner: "b",
      },
    ],

    mistakes: [
      {
        title: "Juger sur la fenêtre de contexte annoncée plutôt que sur celle de votre abonnement",
        desc: "Les annonces mettent en avant le million de tokens de l'API. Dans le chat, Claude tient ce million sur ses offres payantes avec ses modèles récents, alors que les plafonds de ChatGPT Plus et Business sont de 256 000 tokens pour le raisonnement et de 54 000 pour l'instantané. Cet écart décide si votre rapport de 400 pages passe d'un bloc.",
      },
      {
        title: "Se fier aux seuls benchmarks publics",
        desc: "Les benchmarks, ces tests standardisés comme SWE-bench ou GPQA, évaluent les modèles sur des exercices loin du quotidien d'une entreprise, et souvent dans une version que votre abonnement ne propose pas. Seule compte la qualité obtenue sur vos propres tâches.",
      },
      {
        title: "Opposer la formule gratuite de l'un à l'abonnement payant de l'autre",
        desc: "Les formules gratuites restreignent la longueur, le nombre de messages et l'accès aux modèles les plus puissants : l'offre gratuite de Claude ne donne accès ni à Opus 5.5 ni à Fable 5.1, celle de ChatGPT pas à GPT-5.6 Sol. Comparez des niveaux équivalents : Plus face à Pro, Business face à Team.",
      },
      {
        title: "Oublier ce qui se facture en plus de la licence",
        desc: "Chez OpenAI, une enveloppe d'usage comprise dans l'abonnement couvre d'abord Codex, ChatGPT Work, les extensions Office et les agents d'équipe ; ensuite, il faut acheter des crédits. Chez Anthropic, en paiement mensuel, un siège Team Premium coûte 100 $ de plus par mois qu'un siège standard, et Enterprise ajoute au prix du siège la consommation facturée aux tarifs de l'API. Un budget bâti sur le seul prix affiché se révèle faux dès le premier trimestre.",
      },
      {
        title: "Négliger le coût de l'adoption",
        desc: "L'abonnement pèse moins que le temps d'appropriation. Un outil que toute l'équipe utilise produit davantage qu'un outil plus puissant que personne n'ouvre. Prévoyez la formation et un référent interne dès le départ.",
      },
      {
        title: "Confondre un test de dix minutes et un usage professionnel",
        desc: "Les évaluations sur des cas joués (« écris un poème », « explique l'IA à un enfant ») ne révèlent rien. Faites tester pendant deux semaines sur de vraies tâches métier, avec les documents que vos équipes manipulent.",
      },
      {
        title: "Oublier la complémentarité",
        desc: "ChatGPT et Claude peuvent cohabiter. Une offre équipe coûte de 20 à 25 $ le siège chaque mois : un second outil pèse peu face au temps gagné sur les tâches où il fait mieux que le premier.",
      },
    ],

    alsoConsidered: [
      { name: "Perplexity", summary: "Moteur de recherche conversationnel qui cite ses sources, utile en complément pour la veille." },
      { name: "Vibe (Mistral AI)", summary: "Nom porté depuis le 28 mai 2026 par l'ancien Le Chat. Mistral AI, éditeur français, stocke les données de Vibe sur le sol de l'Union européenne, sauf demande contraire. Comparaison détaillée : [Mistral vs ChatGPT](/mistral-vs-chatgpt)." },
      { name: "Google Gemini", summary: "Compris dans les abonnements Google Workspace ; à partir de Business Standard, le contexte de l'application Gemini atteint le million de tokens. Comparaison détaillée : [Gemini vs Copilot](/gemini-vs-copilot)." },
      { name: "Microsoft Copilot (anciennement Microsoft 365 Copilot)", summary: "L'alternative logique quand le travail se fait dans Outlook, Word et Teams : Copilot puise dans Microsoft Graph et donne aussi accès à des modèles d'Anthropic. Comparaison détaillée : [Copilot vs ChatGPT](/copilot-vs-chatgpt)." },
    ],

    faq: [
      {
        q: "ChatGPT ou Claude : lequel choisir en 2026 ?",
        a: "**Claude** convient quand votre travail porte surtout sur de longs documents, du code ou des tâches de bureau à déléguer en totalité : avec un abonnement payant, son chat accepte un million de tokens, alors que ChatGPT Business plafonne à 256 000, et l'abonnement Pro comprend déjà Claude Code. **ChatGPT** l'emporte pour créer des images (ChatGPT Images 2.5) et pour laisser des profils non techniques bâtir seuls des agents d'équipe. Les offres équipe affichent le même tarif en dollars : si le budget le permet, équipez vos collaborateurs des deux.",
      },
      {
        q: "Quels sont les modèles actuels de ChatGPT et de Claude en octobre 2026 ?",
        a: "Chez OpenAI, le chat de ChatGPT fonctionne avec **GPT-5.6**, en version Sol pour les abonnés payants et Luna pour Free et Go. Les abonnés Pro, Business et Enterprise y trouvent aussi **GPT-6 Pro**, construit sur GPT-6 Astra et présenté le 3 septembre 2026, tandis que ChatGPT Work et Codex disposent en exclusivité de GPT-6.1 Sol, de GPT-6 Sol et de GPT-6 Luna. Chez Anthropic, **Claude Fable 5.1**, sorti le 1er septembre 2026, est le modèle le plus capable ; **Opus 5.5**, du 22 septembre, est celui qu'Anthropic recommande d'essayer en premier pour la plupart des travaux ; **Sonnet 5.5**, du 28 septembre, joue la rapidité et l'économie ; **Haiku 4.5** reste le plus véloce.",
      },
      {
        q: "Combien de texte ChatGPT et Claude lisent-ils en une fois ?",
        a: "Cette capacité s'appelle la fenêtre de contexte. **Dans le chat**, avec un abonnement payant, Claude atteint un million de tokens pour ses trois modèles de septembre, contre 200 000 pour Haiku 4.5 ; ChatGPT Plus et Business vont jusqu'à 256 000 tokens en mode raisonnement et 54 000 en mode instantané, l'abonnement Pro jusqu'à 400 000 et 128 000. **Côté API**, Anthropic fournit un million de tokens et OpenAI 1 050 000 pour ses modèles GPT-6. Un développeur dispose donc de la même marge des deux côtés ; une équipe qui travaille dans le chat fait lire à Claude près de quatre fois plus de texte.",
      },
      {
        q: "Combien coûtent ChatGPT et Claude pour une équipe ?",
        a: "**ChatGPT**, en prix France : Go à 8 € par mois, Plus à 23 €, Pro dès 103 € ; Business se paie 21 € mensuels par utilisateur en formule annuelle, 26 € en formule mensuelle ; Enterprise sur devis. **Claude**, en dollars hors taxes : 20 $ par mois pour Pro, 17 $ en formule annuelle ; Max dès 100 $ ; Team à 25 $ le siège en formule mensuelle, 20 $ en annuelle ; siège Premium à 125 $, ou 100 $ en annuelle ; Enterprise à 20 $ le siège, consommation en sus. En dollars, les offres équipe se valent : 20 $ en annuel, 25 $ en mensuel.",
      },
      {
        q: "OpenAI et Anthropic entraînent-ils leurs modèles sur nos données ?",
        a: "**Pas par défaut** sur les offres d'équipe : ni Business et Enterprise chez OpenAI, ni Team et Enterprise chez Anthropic ne nourrissent l'entraînement. Sur les abonnements individuels (Free, Go, Plus et Pro pour OpenAI ; Free, Pro et Max pour Anthropic), chaque utilisateur peut désactiver cet usage dans ses paramètres. Vérifiez ce point en premier, avant qu'une équipe travaille sur des documents internes depuis des comptes personnels.",
      },
      {
        q: "Qu'est devenu Claude Cowork, et quel est l'équivalent chez ChatGPT ?",
        a: "**Cowork** désignait le mode agent de Claude, capable d'ouvrir, de modifier et de créer des fichiers, de dérouler plusieurs étapes et de programmer des tâches. Apparu en préversion le 12 janvier 2026, ouvert à tous le 9 avril 2026 (disponibilité générale), il est intégré à chaque conversation de Claude, à commencer par Pro et Max, depuis le 16 septembre 2026. OpenAI répartit l'équivalent entre **ChatGPT Work** (9 juillet 2026), pour les tâches longues, et, sur Business et Enterprise, ses **agents d'espace de travail**, qui automatisent le travail d'équipe.",
      },
      {
        q: "Lequel écrit le mieux en français ?",
        a: "Tous deux produisent un français professionnel de bonne tenue. Nos mises en situation montrent Claude plus solide sur l'architecture d'un texte long, ChatGPT plus rapide pour décliner des formats courts. Si l'hébergement en Europe s'impose à vous, regardez **Vibe** (Mistral AI, ex-Le Chat), qui garde par défaut ses données à l'intérieur de l'Union européenne.",
      },
      {
        q: "Peut-on déployer ChatGPT ou Claude sur ses propres serveurs ?",
        a: "Non : ChatGPT et Claude s'utilisent par leur application ou par leur API. Claude est également disponible sur Google Cloud, Microsoft Foundry et Amazon Bedrock, ce qui permet de rester dans le contrat signé avec votre fournisseur cloud. Pour un traitement qui ne sort jamais de chez vous, il faut un modèle à poids ouverts (on le télécharge, puis on le fait tourner sur ses propres machines) : Mistral en diffuse, et OpenAI a mis gpt-oss à disposition en août 2025.",
      },
      {
        q: "Interface web ou API : qu'est-ce qui change avec ChatGPT et Claude ?",
        a: "L'**interface** (chatgpt.com, claude.ai) s'adresse aux personnes : on s'abonne, et l'usage est plafonné. L'**API**, l'accès programmatique destiné aux développeurs, sert à intégrer le modèle dans une application et se paie au token. Les deux n'offrent ni les mêmes modèles ni la même fenêtre de contexte, comme le détaille le tableau en haut de page.",
      },
      {
        q: "OpenAI a-t-il inventé les Skills de ChatGPT ?",
        a: "L'idée vient d'Anthropic : les Skills, qu'Anthropic a lancées le 16 octobre 2025, ont un format, **Agent Skills**, rendu public le 18 décembre 2025 sous la forme d'un standard ouvert. Les Skills d'OpenAI, proposées dans les espaces Edu, Healthcare, Enterprise et Business de ChatGPT, rassemblent elles aussi instructions, exemples et scripts. Le standard ouvert a un intérêt pratique pour l'entreprise : une procédure rédigée une fois se réutilise dans tout outil compatible.",
      },
      {
        q: "Combien coûte une formation Masteria à ChatGPT ou à Claude ?",
        a: "Chez Masteria, la journée sur ChatGPT ou sur Claude coûte **1 980 € HT**, TVA de 20 % en sus, pour un groupe intra (12 participants au plus) aussi bien que pour une personne seule. La certification Qualiopi rend la session finançable par l'OPCO, en fonction de votre branche. Masteria prépare programme et convention, et l'entreprise adresse sa demande de financement avant la date de formation.",
      },
      {
        q: "Quelles obligations l'AI Act fixe-t-il aux entreprises qui utilisent ChatGPT ou Claude ?",
        a: "Deux articles visent tous les utilisateurs. Dans sa rédaction du 8 juillet 2026 (règlement 2026/1744), l'**article 4** attend des entreprises utilisatrices de systèmes d'IA qu'elles agissent pour que leurs salariés maîtrisent mieux l'IA, sans imposer à chacun un niveau à atteindre. L'**article 50**, applicable dès le 2 août 2026, encadre la transparence des contenus générés : Anthropic indique marquer d'un filigrane invisible les textes de ses modèles sortis après cette date. Conservez la preuve des formations suivies : c'est la trace la plus simple des mesures engagées.",
      },
    ],

    relatedLinks: [
      { label: "Formation ChatGPT pour entreprises", href: "/formation-chatgpt" },
      { label: "Formation Claude IA", href: "/formation-claude-ia" },
      { label: "Formation multi-outils (ChatGPT, Claude, Copilot, Gemini, Mistral)", href: "/formation-multi-outils" },
      { label: "Comparatif Copilot vs ChatGPT", href: "/copilot-vs-chatgpt" },
      { label: "Quelle est la meilleure IA en 2026 ?", href: "/quelle-est-la-meilleure-ia" },
      { label: "IA et RGPD : ce que dit le règlement européen", href: "/ia-et-rgpd" },
      { label: "Glossaire IA : 83 termes", href: "/glossaire-ia" },
      { label: "Conseil IA pour entreprises", href: "/conseil-intelligence-artificielle" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // toolA = Microsoft Copilot, toolB = ChatGPT
  // ═══════════════════════════════════════════════════════════════════
  "copilot-vs-chatgpt": {
    slug: "copilot-vs-chatgpt",
    metaTitle: "Copilot vs ChatGPT 2026 : lequel choisir ? | Masteria",
    metaDesc:
      "Microsoft Copilot ou ChatGPT : données Microsoft 365, agents, Cowork, prix par siège en France. Comparatif mis à jour le 7 octobre 2026.",
    h1: "Microsoft Copilot vs ChatGPT : quel assistant IA pour votre entreprise en 2026 ?",
    intro:
      "Une question tranche souvent le débat : combien d'heures vos équipes passent-elles chaque jour dans Outlook, Word, Excel et Teams ? **Microsoft Copilot** (anciennement Microsoft 365 Copilot) vit dans ces applications. Avec sa licence, il s'appuie sur vos mails, vos fichiers SharePoint et vos réunions, dans la limite des droits de chaque personne, et il fait travailler des modèles d'OpenAI comme d'Anthropic. **ChatGPT** part de sa propre application : il dessine des images, conduit des tâches longues avec ChatGPT Work, confie la programmation à Codex et s'installe désormais dans Word, Excel et PowerPoint grâce à une extension. Dix critères et huit situations de bureau les départagent ci-dessous, d'après un relevé du 7 octobre 2026.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "7 octobre 2026",
    datePublished: "2026-05-04",
    dateModified: "2026-10-07",
    readTime: "10 minutes",
    keywords:
      "copilot vs chatgpt, microsoft copilot prix, copilot business prix, chatgpt business prix, comparatif copilot chatgpt 2026, gpt-5.6, gpt-6, copilot ou chatgpt entreprise, microsoft graph ia, copilot cowork",

    // ─── Textes de section propres à ce comparatif (lus par ComparisonPage via `textes`)
    textes: {
      legende: "Microsoft Copilot (Microsoft) et ChatGPT (OpenAI) mis côte à côte le 7 octobre 2026, avec les prix publiés pour la France.",
      criteres: "Dix critères repris un à un : ce que publient Microsoft et OpenAI au 7 octobre 2026, et ce que nous observons quand une équipe apprend l'un ou l'autre.",
      casTitre: "Huit situations de bureau, un verdict pour chacune",
      cas: "Des demandes que nos stagiaires apportent en formation Copilot ou ChatGPT : la boîte de réception du matin, un mémo à transformer en présentation, un fichier de ventes, une série de visuels, des relances, des propositions commerciales, le point d'équipe du lundi, une campagne à imaginer.",
      metiersTitre: "Quel outil pour quelle fonction",
      metiers: "Notre conseil pour chaque fonction, tiré des sessions Copilot et ChatGPT que nous animons auprès de la finance, du marketing, de l'assistanat ou des équipes support.",
      erreursTitre: "Sept faux pas au moment d'arbitrer entre Copilot et ChatGPT",
      erreurs: "Ces erreurs reviennent chaque fois qu'une direction hésite entre une licence Microsoft et des sièges ChatGPT.",
      alternativesTitre: "Quatre autres outils à connaître avant de signer",
      alternatives: "Selon votre environnement, un troisième outil complète le duo, ou le remplace.",
      ctaTitre: "Mettez Copilot et ChatGPT entre les mains de vos équipes avant d'acheter",
      ctaTexte: "En deux jours de formation multi-outils, vos collaborateurs traitent leurs propres mails, tableaux et présentations avec Copilot, ChatGPT et trois autres assistants, puis vous décidez sur pièces. Masteria étant certifié Qualiopi au titre des actions de formation, une prise en charge de ces deux journées par votre OPCO de branche est envisageable si ses règles le permettent.",
    },

    // ─── Ce que nos formations Copilot ont montré (sources : etudes-de-cas.js, cas `industrie`, et missions-formation.js)
    terrain: {
      titre: "Les leçons tirées de nos sessions Copilot",
      paras: [
        "Entre juillet et septembre 2026, un groupe international du packaging a suivi cinq sessions de deux jours sur Microsoft Copilot, dont deux en anglais ; les deux premières ont formé [24 managers pilotes](/etudes-de-cas-ia#industrie). Les treize ateliers partaient des fichiers du groupe (prix, coûts, base RH, présentations à la charte), jamais d'exemples tirés d'un manuel. Les implantations américaines et mexicaines suivent en octobre 2026, celles de l'Inde en décembre.",
        "Une [assistante de direction](/etudes-de-cas-ia#mission-assistanat-direction), employée par un éditeur de logiciels B2B, a appris en septembre 2026 à répartir son travail entre Copilot et Claude avec une règle simple : l'interne et le nominatif restent dans Copilot, le texte public ou anonymisé peut partir dans l'autre outil, et le moindre doute renvoie vers Copilot. Entre Copilot et ChatGPT, le raisonnement est le même : le périmètre des données se décide avant la qualité des réponses.",
      ],
    },

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Faut-il équiper vos équipes de Copilot ou de ChatGPT ?",
      answer:
        "Choisissez **Microsoft Copilot** quand la journée de vos équipes se passe dans Outlook, Word, Excel et Teams : sa licence relie les réponses à Microsoft Graph, c'est-à-dire à vos mails, fichiers, réunions et agendas, avec les droits d'accès déjà en place. En France, Microsoft la facture **26 € HT par siège et par mois** sur un engagement annuel ; une organisation de 300 utilisateurs au plus peut prendre **Copilot Business à 18,20 € HT**, toujours en plus de son abonnement Microsoft 365. Choisissez **ChatGPT** quand le travail déborde d'Office : des visuels grâce à ChatGPT Images 2.5, des livrables complets grâce à ChatGPT Work, du code grâce à Codex, des agents d'équipe lancés depuis Slack. Son offre Business est affichée **21 € mensuels par siège** pour la France, réglés à l'année. Beaucoup d'entreprises donnent Copilot à tout le monde et ouvrent quelques sièges ChatGPT aux profils créatifs ou techniques.",
      bullets: [
        "Boîte de réception, agenda, réunions Teams : Copilot",
        "Visuels de campagne et pages web légères : ChatGPT",
        "Questions posées aux fichiers SharePoint et OneDrive : Copilot",
        "Programmation et automatisations reliées à Slack ou GitHub : ChatGPT",
        "Budget par siège : 26 € HT ou 18,20 € HT pour Copilot, abonnement Microsoft 365 en plus ; 21 € pour ChatGPT Business en annuel",
      ],
    },

    toolA: {
      id: "copilot",
      name: "Microsoft Copilot",
      editor: "Microsoft",
      currentModel: "Routage entre modèles d'OpenAI et d'Anthropic, réponses ancrées dans vos données Microsoft 365",
      country: "États-Unis",
      pricing: "Licence à 26 € HT par mois en paiement annuel · Copilot Business à 18,20 € HT jusqu'à 300 utilisateurs · abonnement Microsoft 365 à prévoir",
      foundedAI: "2023",
      color: "#0078D4",
    },
    toolB: {
      id: "chatgpt",
      name: "ChatGPT",
      editor: "OpenAI",
      currentModel: "GPT-5.6 Sol pour dialoguer ; GPT-6 Astra et GPT-6.1 Sol réservés à Work et à Codex",
      country: "États-Unis",
      pricing: "Plus 23 € · Business 21 € par utilisateur en annuel, 26 € au mois · Pro à partir de 103 € (prix publiés pour la France)",
      foundedAI: "2022",
      color: "#10A37F",
    },

    // ─── GEO : tableau de faits datés, lisible en HTML brut par un moteur génératif
    keyFacts: {
      title: "Copilot et ChatGPT, ligne par ligne",
      note: "Chiffres et fonctions repris le 7 octobre 2026 chez Microsoft et chez OpenAI. Microsoft affiche ses prix hors taxes et présente encore, sur sa page tarifs française, la licence sous son ancien nom ; la page française d'OpenAI ne dit pas si ses montants s'entendent HT ou TTC.",
      rows: [
        { criterion: "Modèles", a: "Sélecteur Auto, réponse rapide ou réflexion approfondie ; modèles d'OpenAI et d'Anthropic, ces derniers coupés dans l'UE tant que l'administrateur ne les active pas", b: "GPT-5.6 Sol en dialogue ; GPT-6 Pro réservé à Business et Enterprise ; famille GPT-6 dans Work et Codex" },
        { criterion: "Vos données internes", a: "Avec la licence : mails, fichiers SharePoint et OneDrive, réunions et agenda, lus par Microsoft Graph et Work IQ dans la limite des droits de chacun", b: "Par des connecteurs que l'utilisateur active : SharePoint, Google Drive, Box, Dropbox, Gmail, Outlook" },
        { criterion: "Sans licence payante", a: "Copilot Chat, compris dans Microsoft 365 : réponses tirées du web, fichiers déposés, contenu ouvert dans Outlook ou Teams", b: "Formule gratuite, aux quotas plus serrés ; aucune version comprise dans une suite bureautique" },
        { criterion: "Texte gardé en tête", a: "Aucun chiffre publié : Graph extrait le passage utile au lieu de charger le dossier entier", b: "Compte Business : 54 000 tokens en instantané, 256 000 en raisonnement ; compte Enterprise : 128 000 et 256 000" },
        { criterion: "Images et vidéo", a: "Images dans Copilot Chat quand l'administrateur les autorise", b: "ChatGPT Images 2.5 ; vidéo impossible depuis l'arrêt de Sora (application en avril, API le 24 septembre 2026)" },
        { criterion: "Agents", a: "Copilot Studio pour les agents métier ; Copilot Cowork, en disponibilité générale, agit dans Microsoft 365 et se facture à l'usage", b: "ChatGPT Work pour les tâches longues ; agents d'équipe payés en crédits une fois l'enveloppe du siège consommée" },
        { criterion: "Programmation", a: "Hors du périmètre : GitHub Copilot, vendu séparément (Business à 19 $ le siège)", b: "Codex, avec un quota dès la formule gratuite" },
        { criterion: "Pour un particulier", a: "Microsoft 365 Premium : 22 € par mois ou 219 € par an", b: "Go à 8 €, Plus à 23 € par mois" },
        { criterion: "Prix pour une équipe", a: "Licence : 26 € HT mensuels réglés à l'année, 27,30 € HT réglés au mois ; Copilot Business 18,20 € HT en annuel, 21,84 € HT en paiement mensuel ; Microsoft 365 en sus", b: "Business : 21 € par mois en annuel, 26 € au mois, deux sièges au minimum" },
        { criterion: "Lieu des traitements", a: "Service Microsoft 365 ; les requêtes d'Europe restent dans l'EU Data Boundary, modèles d'Anthropic exceptés", b: "Serveurs d'OpenAI ; résidence européenne complète pour Enterprise et Edu éligibles, stockage seul et progressif pour Business" },
      ],
    },

    verdict: {
      title: "Ce qu'il faut retenir avant d'aller plus loin",
      summary:
        "**Copilot** rend service là où vos équipes travaillent déjà : il résume un fil Outlook, transforme un document Word en présentation, retrouve une décision prise en réunion, et les données restent dans le service Microsoft 365. **ChatGPT** va plus loin hors d'Office : visuels, livrables complets, code, agents d'équipe. Les frontières bougent des deux côtés, puisque ChatGPT s'installe dans Word, Excel et PowerPoint et que Copilot propose des modèles d'Anthropic. Mesurez d'abord la part de la journée passée dans la suite Microsoft : c'est elle qui tranche. Pour apprendre l'un ou l'autre, voyez notre [formation Microsoft Copilot](/formation-microsoft-copilot) et notre [formation ChatGPT](/formation-chatgpt).",
      recommendA: ["Vos équipes passent leurs journées dans Outlook, Word, Excel et Teams", "Vous voulez interroger mails, fichiers et réunions sans rien téléverser", "Vos données doivent rester dans le service Microsoft 365", "Votre service informatique gouverne déjà Microsoft 365 avec Purview"],
      recommendB: ["Vous produisez des visuels et des contenus de campagne", "Vous attendez de l'outil des livrables complets", "Vos développeurs veulent Codex", "Vos fichiers vivent hors de Microsoft : Google Drive, Slack, Box"],
    },

    criteria: [
      {
        title: "Présence dans les outils de travail",
        descriptionA:
          "Copilot apparaît dans Word, Excel, PowerPoint, Outlook, Teams et OneNote. Avec la licence, il travaille sur le document ouvert et puise le contexte dans Microsoft Graph : vous lui demandez de résumer un fil de discussion ou de bâtir des diapositives à partir d'une note, sans quitter l'application.",
        descriptionB:
          "ChatGPT se pratique dans son application (web, ordinateur, mobile) et, grâce à une extension officielle, dans Word, Excel et PowerPoint. L'extension agit sur le fichier ouvert ; pour atteindre Outlook ou SharePoint, il faut brancher des connecteurs.",
        winner: "a",
        winnerText: "Avantage Copilot chez les équipes équipées de Microsoft 365",
      },
      {
        title: "Quantité de texte prise en compte",
        descriptionA:
          "Microsoft ne communique aucune fenêtre de contexte, cette quantité de texte que l'outil garde en tête pendant un échange. Copilot procède autrement : il cherche dans Graph le passage pertinent du bon fichier au lieu de lire tout le dossier.",
        descriptionB:
          "Sur Business, ChatGPT garde 54 000 tokens en mode instantané et 256 000 en mode raisonnement, soit à peu près 320 pages selon l'éditeur. Côté API, la famille GPT-6 accepte 1 050 000 tokens, un chiffre qui concerne les développeurs et non la conversation de vos équipes.",
        winner: "tie",
        winnerText: "Match nul : deux manières d'atteindre l'information",
      },
      {
        title: "Lecture des données de l'entreprise",
        descriptionA:
          "La licence relie Copilot à Microsoft Graph et à Work IQ, la couche qui raisonne sur vos données de travail : mails, fichiers, réunions, agenda, organigramme. Chaque réponse respecte les droits de l'utilisateur, et l'administrateur peut désactiver Work IQ.",
        descriptionB:
          "ChatGPT atteint vos contenus par des connecteurs que chacun active : SharePoint, Google Drive, Box ou Dropbox pour les fichiers, Gmail ou Outlook pour la messagerie. La qualité de la réponse suit ce qui a été branché et autorisé.",
        winner: "a",
        winnerText: "Avantage net Copilot sur le contexte interne",
      },
      {
        title: "Données et lieu de traitement",
        descriptionA:
          "Prompts et réponses restent dans le service Microsoft 365, sous vos règles de conservation et Purview, et n'entraînent pas les modèles. Pour un utilisateur situé en Europe, le trafic ne sort pas de l'EU Data Boundary, la frontière de données que Microsoft a tracée autour de l'Union. Exception à connaître : les modèles d'Anthropic, coupés par défaut dans l'UE, sortent de ce périmètre une fois activés.",
        descriptionB:
          "OpenAI n'utilise pas les échanges Business et Enterprise pour l'entraînement. Enterprise et Edu peuvent stocker et calculer les réponses en Europe pour les clients éligibles. Sur Business, le stockage européen arrive par étapes, le calcul reste hors région et OpenAI garde un temps une copie aux États-Unis pour lutter contre les abus.",
        winner: "a",
        winnerText: "Avantage Copilot pour garder les traitements en Europe",
      },
      {
        title: "Création visuelle",
        descriptionA:
          "Copilot Chat produit des images à condition que l'administrateur ait ouvert cette fonction. Dans PowerPoint, il bâtit une présentation à partir d'un fichier, ajoute des images et met en forme l'ensemble du document.",
        descriptionB:
          "ChatGPT Images 2.5, en service depuis le 8 septembre 2026, fabrique ou reprend une image en s'inspirant d'un visuel fourni ou d'un croquis. Pour la vidéo, plus rien depuis l'arrêt de Sora. ChatGPT Work sait aussi produire un site simple.",
        winner: "b",
        winnerText: "Avantage ChatGPT sur les visuels",
      },
      {
        title: "Agents et automatisations",
        descriptionA:
          "Avec Copilot Studio, on monte des agents métier en low-code, en programmant peu ou pas, reliés à SharePoint et à vos sources. Un agent publié dans Microsoft Copilot est compris pour les titulaires de la licence ; les agents autonomes ou ouverts à l'extérieur consomment des crédits, vendus par packs de 25 000 à 173,30 € HT par mois ou à l'usage. Copilot Cowork, ouvert à tous les comptes professionnels, envoie des mails, planifie des réunions et crée des documents, en demandant votre accord avant chaque action sensible.",
        descriptionB:
          "Sur Business et Enterprise, un agent d'espace de travail se décrit avec des phrases ordinaires, puis se partage, se planifie, répond dans Slack ou démarre par API ; tous les clients de ces offres y ont accès depuis le 21 mai 2026. Depuis le 6 juillet 2026, chaque exécution est décomptée en crédits, pris d'abord sur l'enveloppe du siège.",
        winner: "tie",
        winnerText: "Match nul : gouvernance côté Microsoft, mise en route rapide côté OpenAI",
      },
      {
        title: "Développement logiciel",
        descriptionA:
          "Microsoft Copilot ne vise pas les développeurs. Pour eux, Microsoft vend GitHub Copilot : 19 $ mensuels par siège en Business, 39 $ en Enterprise, avec un sélecteur qui mêle Anthropic, OpenAI et Google.",
        descriptionB:
          "Codex exécute seul des chantiers de code, en local comme dans le cloud, et figure dans les offres ChatGPT avec des limites d'usage. GPT-6.1 Sol y est déployé depuis le 29 septembre 2026.",
        winner: "b",
        winnerText: "Avantage ChatGPT pour les développeurs",
      },
      {
        title: "Prix et coût d'un siège",
        descriptionA:
          "Sur la page tarifs France, qui garde encore l'ancien nom, la licence Microsoft Copilot vaut 26 € HT mensuels par personne si l'on règle l'année, 27,30 € HT si l'on règle chaque mois, en plus d'un abonnement Microsoft 365 éligible. Copilot Business, réservé aux organisations de 300 utilisateurs au plus, vaut 18,20 € HT en annuel et 21,84 € HT en mensuel ; un client Microsoft 365 existant qui ouvre un nouvel abonnement annuel paie 15,60 € HT la première année, jusqu'au 31 décembre 2026. Studio et Cowork s'ajoutent à l'usage.",
        descriptionB:
          "Grille française : Go 8 €, Plus 23 €, Pro à partir de 103 € par mois. Un siège Business revient à 21 € par mois réglés à l'année, 26 € si l'on paie mensuellement ; Enterprise se négocie. Une fois l'enveloppe du siège consommée, ChatGPT Work, Codex et les agents se paient en crédits.",
        winner: "tie",
        winnerText: "Match nul : Copilot Business coûte moins, mais suppose Microsoft 365",
      },
      {
        title: "Prise en main par les équipes",
        descriptionA:
          "Copilot se comporte différemment dans chaque application : Word, Excel, PowerPoint, Outlook, Teams, OneNote, Forms. Dans Excel, il propose trois modes de travail (édition, plan, conversation), et la fonction =COPILOT() a disparu le 14 septembre 2026. Une formation utile avance donc application par application, sur les fichiers du service.",
        descriptionB:
          "ChatGPT s'apprend dans une seule interface : la conversation pour les questions, ChatGPT Work pour les tâches longues, Codex pour les développeurs. En atelier, les participants gagnent leur autonomie plus vite.",
        winner: "b",
        winnerText: "Avantage ChatGPT sur la vitesse d'apprentissage",
      },
      {
        title: "Choix du modèle",
        descriptionA:
          "En mode Auto, Copilot choisit le modèle à votre place, et la réflexion approfondie pousse l'analyse. Claude se sélectionne dans « Modifier avec Copilot » de Word et dans l'agent Researcher, une fois Anthropic activé par l'administrateur. Depuis le 6 octobre 2026, sur le web, un clic relance la réponse en changeant de modèle.",
        descriptionB:
          "OpenAI ouvre ses nouveaux modèles dans ChatGPT dès leur sortie : GPT-6 Astra le 3 septembre 2026, GPT-6.1 Sol le 29. Dans la conversation, GPT-6 Pro est réservé à Pro, Business et Enterprise, tandis que GPT-5.6 Sol laisse doser la profondeur de réflexion.",
        winner: "tie",
        winnerText: "Match nul : routage automatique chez Microsoft, choix manuel chez OpenAI",
      },
    ],

    useCases: [
      { metier: "Mails, documents et présentations au quotidien", recommendation: "a", why: "Copilot agit dans Outlook, Word et PowerPoint sur le fichier ouvert, avec le contexte de vos échanges et de vos réunions." },
      { metier: "Recherche d'idées et créativité", recommendation: "b", why: "ChatGPT multiplie les angles plus vite et passe aux visuels avec ChatGPT Images 2.5." },
      { metier: "Recherche dans les documents internes", recommendation: "a", why: "Copilot lit SharePoint et OneDrive sans téléversement, en respectant les droits de chacun." },
      { metier: "Visuels et illustrations", recommendation: "b", why: "ChatGPT Images 2.5 prend un visuel de référence pour point de départ et retouche une zone choisie." },
      { metier: "Développement", recommendation: "b", why: "Codex fait partie des offres ChatGPT ; côté Microsoft, il faudrait acheter GitHub Copilot." },
      { metier: "Support client", recommendation: "tie", why: "Copilot Studio pour un agent visible par vos clients sur votre site, agents ChatGPT pour une équipe support qui vit dans Slack." },
      { metier: "Données sensibles (santé, finance, défense)", recommendation: "a", why: "Service Microsoft 365 et EU Data Boundary : les traitements des utilisateurs européens restent en Europe, hors modèles d'Anthropic." },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Les changements intégrés depuis la version d'août 2026",
      items: [
        { date: "7 octobre 2026", text: "Nouvelle vérification des prix et des fonctions. Pour Copilot Business, la page française indique désormais 21,84 € HT en paiement mensuel, à côté des 18,20 € HT en annuel. Microsoft documente depuis le 29 septembre la disponibilité générale de Copilot Cowork, qui demande votre accord avant chaque action sensible. Le 6 octobre, Microsoft a ajouté sur le web de quoi relancer une réponse en changeant de modèle." },
        { date: "Septembre 2026", text: "La documentation de Microsoft appelle désormais la licence Microsoft Copilot et la version incluse Copilot Chat. La fonction =COPILOT() d'Excel a été retirée le 14 septembre. Côté OpenAI, GPT-6 Astra (3 septembre) puis GPT-6.1 Sol (29 septembre) sont arrivés, et ChatGPT s'installe dans Word depuis le 17 septembre." },
        { date: "Juillet 2026", text: "Depuis le 6 juillet, faire tourner un agent ChatGPT coûte des crédits, prélevés d'abord sur l'enveloppe du siège Business. Microsoft accorde aux clients existants Copilot Business à 15,60 € HT la première année, pour un abonnement annuel souscrit d'ici le 31 décembre 2026." },
        { date: "Correction", text: "Une version antérieure citait Sora 2 pour produire des vidéos dans ChatGPT, alors que l'application n'existe plus depuis le 26 avril 2026. Elle affirmait aussi que ChatGPT ne s'intégrait ni à Word ni à Excel : OpenAI publie des extensions officielles pour Word, Excel et PowerPoint." },
        { date: "Correction", text: "Nous réservions Copilot aux abonnés Microsoft 365 Business Standard ou supérieur ; Business Basic, E3, E5 et Office 365 E1 sont aussi éligibles. Nous présentions Copilot Pro à 20 $ par mois aux particuliers, mais la boutique Microsoft renvoie vers Microsoft 365 Premium, à 22 € par mois." },
        { date: "Correction", text: "Nous écrivions que Copilot Cowork faisait valider chacune de ses actions. Microsoft précise qu'il demande l'accord avant chaque action sensible, en affichant un niveau de risque." },
      ],
    },

    methodology:
      "Masteria, cabinet lyonnais d'intelligence artificielle fondé en 2022, anime des formations Microsoft Copilot et ChatGPT ; ce comparatif en reprend les exercices de bureau (tri de mails, présentations, tableaux, relances). Le **7 octobre 2026**, nous avons contrôlé prix, modèles et fonctions sur les pages de Microsoft et d'OpenAI citées plus bas. OpenAI ne précise pas sur sa page française si ses prix en euros s'entendent HT ou TTC : nous les reprenons tels qu'affichés. Versions comparées : **Microsoft Copilot** avec licence et **ChatGPT Business** (GPT-5.6 Sol et GPT-6 Pro).",

    citations: [
      { name: "Prix de la licence Copilot pour les grandes entreprises, page France de Microsoft", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise" },
      { name: "Copilot Business pour 300 utilisateurs au plus, page France de Microsoft", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
      { name: "Ce que couvrent Copilot Chat et la licence Copilot (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Abonnements qui ouvrent droit à Copilot (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing" },
      { name: "Activer Anthropic comme sous-traitant de Copilot (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
      { name: "Actions et validations de Copilot Cowork (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
      { name: "Prérequis techniques avant d'ouvrir Copilot (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements" },
      { name: "Packs de crédits Copilot Studio, page France de Microsoft", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio" },
      { name: "Microsoft 365 Premium dans la boutique Microsoft", url: "https://www.microsoft.com/fr-fr/microsoft-365/p/microsoft-365-premium/cfq7ttc11z3q" },
      { name: "Offres GitHub Copilot pour les développeurs (documentation GitHub)", url: "https://docs.github.com/en/copilot/get-started/plans" },
      { name: "Prix de ChatGPT publiés pour la France (chatgpt.com)", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "Journal des nouveautés de ChatGPT, tenu par OpenAI", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "GPT-5.6 et GPT-6 Pro dans la conversation ChatGPT (OpenAI)", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "Contenu de l'offre ChatGPT Business, selon OpenAI", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
      { name: "Évolutions récentes de ChatGPT Business (OpenAI)", url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes" },
      { name: "Agents d'espace de travail ChatGPT pour Business et Enterprise", url: "https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business" },
      { name: "Fermeture de Sora, qui prive ChatGPT de vidéo (OpenAI)", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
      { name: "Stockage et calcul des réponses ChatGPT en Europe (OpenAI)", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "Où sont conservés les contenus d'un espace Business (OpenAI)", url: "https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored" },
    ],

    realCases: [
      {
        scenario: "Préparer sa journée à partir de ses mails Outlook reçus pendant la nuit",
        feature: "Copilot dans Outlook, relié à Graph · ChatGPT et son connecteur Outlook",
        prompt: "Trie mes 30 courriels non lus reçus depuis hier 18 h : urgent, important ou pour information. Extrais les 3 courriels qui demandent une réponse aujourd'hui, propose un brouillon pour chacun et signale les conflits avec mon agenda du jour.",
        verdictText: "**Copilot l'emporte**. Avec la licence, il parcourt la boîte, l'agenda et les conversations Teams grâce à Microsoft Graph, repère les fils en attente de réponse et les confronte au planning de la journée. ChatGPT approche ce résultat une fois le connecteur Outlook activé, mais il dépend de ce que chaque utilisateur a relié.",
        winner: "a",
      },
      {
        scenario: "Transformer un mémo Word en présentation PowerPoint",
        feature: "Copilot dans PowerPoint · extension PowerPoint de ChatGPT",
        prompt: "À partir de ce mémo Word de 12 pages (notre stratégie 2027), crée une présentation de 10 diapositives : un message par diapositive, des visuels sobres, une diapositive de chiffres clés avec graphiques et une diapositive finale de décision.",
        verdictText: "**Avantage Copilot** : dans PowerPoint, il construit le support à partir du mémo, met en forme l'ensemble du fichier et s'appuie sur les documents de l'organisation. L'extension de ChatGPT sait mener le même travail ; OpenAI reconnaît que le respect du modèle de l'entreprise demande encore une relecture.",
        winner: "a",
      },
      {
        scenario: "Analyser ses ventes du trimestre dans un fichier Excel",
        feature: "Copilot dans Excel · ChatGPT pour Excel et analyse de données",
        prompt: "Sur ce fichier des ventes du trimestre (15 000 lignes) : les 10 premiers produits par chiffre d'affaires, l'évolution mensuelle, les clients en croissance et en recul, une colonne « à relancer » pour les clients sans commande depuis 60 jours, et un graphique lisible en 30 secondes.",
        verdictText: "**Match nul**. Dans Excel, Copilot analyse les données, écrit les formules et trace les graphiques, avec ses modes édition, plan et conversation. ChatGPT pour Excel opère aussi dans le classeur, et son analyse de données exécute du code pour les calculs lourds. Au quotidien, l'outil déjà installé sur le poste gagne.",
        winner: "tie",
      },
      {
        scenario: "Générer 5 visuels pour une publication LinkedIn d'entreprise",
        feature: "Copilot Chat et génération d'images · ChatGPT Images 2.5",
        prompt: "Je publie sur LinkedIn le bilan de notre programme de formation à l'IA : génère 5 visuels carrés (1080×1080) qui illustrent ce bilan, style minimaliste, palette bleu et orange de notre charte, aucun visage, ton professionnel.",
        verdictText: "**ChatGPT prend l'avantage** : ChatGPT Images 2.5 s'appuie sur un modèle ou un dessin à main levée et reprend une zone précise, ce qui aide à tenir une charte sur cinq visuels. Copilot produit lui aussi des images dans Copilot Chat, une fois la fonction ouverte par l'administrateur.",
        winner: "b",
      },
      {
        scenario: "Construire un agent qui suit les relances clients",
        feature: "Copilot Studio · agent d'équipe ChatGPT",
        prompt: "Construis un agent qui, chaque semaine, repère dans le CRM les prospects sans échange depuis 14 jours, prépare une relance personnalisée selon leur dernière conversation et m'envoie la liste chaque lundi à 9 h pour validation avant envoi.",
        verdictText: "**Match nul** : votre environnement tranche. **Copilot Studio** construit l'agent dans le périmètre Microsoft, avec Outlook et Teams à portée de main ; publié dans Microsoft Copilot, il ne coûte rien de plus aux titulaires de la licence. Un **agent ChatGPT** se décrit en langage courant, tourne chaque lundi et dépose sa liste dans Slack ; chaque exécution consomme des crédits, à estimer avant de lancer le projet.",
        winner: "tie",
      },
      {
        scenario: "Rédiger 10 documents Word standardisés (proposition commerciale, contrat type, mémo)",
        feature: "Modifier avec Copilot dans Word · extension ChatGPT pour Word",
        prompt: "À partir de notre modèle de proposition commerciale et des informations de chaque prospect, génère 10 documents personnalisés : reprends notre style, prépare le bloc tarifaire et signale les paragraphes à personnaliser à la main.",
        verdictText: "**Avantage Copilot** dans Word : « Modifier avec Copilot » rédige et réécrit à partir des documents de l'organisation que Graph lui ouvre. ChatGPT pour Word rédige, révise et ajuste titres et mise en forme depuis son panneau latéral, avec ce que vous lui donnez ou ce que ses connecteurs atteignent.",
        winner: "a",
      },
      {
        scenario: "Préparer le brief hebdomadaire de l'équipe à partir de Teams",
        feature: "Copilot dans Teams et agent Researcher · ChatGPT avec connecteurs",
        prompt: "Pour mon point d'équipe de lundi 9 h, synthétise les décisions prises dans nos 5 canaux Teams la semaine dernière, les sujets en attente de réponse, les points bloquants signalés par les managers, et propose 3 sujets pour l'ordre du jour. Format : une page.",
        verdictText: "**Copilot l'emporte** : Teams résume les réunions et relève les actions à suivre, et l'agent Researcher croise canaux, mails et documents SharePoint pour les titulaires de la licence. ChatGPT dépend des connecteurs ouverts dans votre espace.",
        winner: "a",
      },
      {
        scenario: "Trouver 20 idées de campagne pour un lancement de produit",
        feature: "ChatGPT (GPT-5.6 Sol) · Copilot Chat",
        prompt: "Nous lançons une gamme de yaourts bio haut de gamme destinée aux jeunes parents urbains. Propose 20 angles de communication, 10 slogans au ton décalé mais haut de gamme, 5 animations en magasin et 3 concepts pour des micro-influenceurs parents.",
        verdictText: "**Avantage ChatGPT** lors de nos exercices : les angles proposés sont plus variés, et le passage aux visuels se fait dans la même conversation. Copilot colle davantage aux documents internes, ce qui aide quand la campagne doit respecter une stratégie déjà rédigée.",
        winner: "b",
      },
    ],

    mistakes: [
      {
        title: "Acheter Copilot pour des équipes qui ouvrent rarement Office",
        desc: "La licence prend sa valeur dans Outlook, Word, Excel, PowerPoint et Teams. Si vos équipes passent leurs journées dans un CRM ou un logiciel métier, mesurez d'abord leur usage d'Office : 26 € HT mensuels par personne se justifient mal sur un poste qui lance Word deux fois par semaine.",
      },
      {
        title: "Équiper tout le monde de Copilot et oublier ChatGPT",
        desc: "Les visuels, le code et les tâches hors Microsoft 365 restent le terrain de ChatGPT. Quelques sièges Business, affichés 21 € mensuels en formule annuelle, suffisent souvent pour ceux qui en ont l'usage.",
      },
      {
        title: "Mettre en regard la fenêtre de l'API et celle de la conversation",
        desc: "Par l'API, un modèle GPT-6 accepte 1 050 000 tokens, alors que ChatGPT Business s'arrête à 54 000 en instantané et à 256 000 en raisonnement. Copilot ne publie aucun chiffre et procède par recherche dans Graph. Comparez ce que vos utilisateurs auront sous les yeux.",
      },
      {
        title: "Chiffrer les licences sans les automatisations",
        desc: "Les deux éditeurs facturent l'automatisation en plus. Chez Microsoft, Copilot Studio se règle en crédits pour les agents autonomes ou ouverts à l'extérieur, et Cowork à l'usage. Chez OpenAI, ChatGPT Work, Codex et les agents puisent dans des crédits une fois l'enveloppe du siège épuisée.",
      },
      {
        title: "Former à Copilot en une heure de démonstration",
        desc: "Copilot n'a pas le même comportement dans Word, Excel, Outlook et Teams. Une formation par application, sur les documents de l'équipe, évite qu'il reste une icône que personne ne clique.",
      },
      {
        title: "Ouvrir Copilot sans revoir les droits SharePoint",
        desc: "Copilot atteint chaque fichier que la personne est autorisée à ouvrir. Un site SharePoint partagé trop largement depuis des années peut faire remonter des documents que personne n'aurait trouvés à la main. SharePoint Advanced Management et la restriction de découverte de contenu servent à corriger ces accès avant l'ouverture.",
      },
      {
        title: "Confondre GitHub Copilot et Microsoft Copilot",
        desc: "Deux produits, deux publics. GitHub Copilot équipe les développeurs (Pro à 10 $ par mois, Business à 19 $ par siège, Enterprise à 39 $) ; Microsoft Copilot équipe les utilisateurs d'Office. Vos développeurs ont besoin du premier.",
      },
    ],

    alsoConsidered: [
      { name: "GitHub Copilot", summary: "Le produit Microsoft destiné aux développeurs, vendu 19 $ par mois le siège Business ; on y choisit son modèle chez Anthropic, OpenAI ou Google. Un achat séparé de Microsoft Copilot." },
      { name: "Google Gemini", summary: "Le pendant de Copilot chez Google, compris dans les forfaits Workspace dès Business Starter. Détails dans [Gemini vs Copilot](/gemini-vs-copilot)." },
      { name: "Claude", summary: "Microsoft le propose déjà comme modèle dans Copilot ; utilisé seul, il accepte un million de tokens par échange dès l'abonnement Pro, qui comprend aussi Claude Code. Voir [ChatGPT vs Claude](/chatgpt-vs-claude)." },
      { name: "Vibe (Mistral AI)", summary: "L'assistant de Mistral AI, anciennement Le Chat, héberge d'office ses données en Europe. Voir [Mistral vs ChatGPT](/mistral-vs-chatgpt)." },
    ],

    faq: [
      {
        q: "Si l'entreprise a déjà Microsoft 365, Copilot remplace-t-il ChatGPT ?",
        a: "Rarement en totalité. Copilot brille dans Office et sur vos données internes ; ChatGPT reste devant pour l'image, le code et les tâches qui sortent de Microsoft 365. Beaucoup d'organisations donnent Copilot à tous et quelques sièges ChatGPT aux profils qui en ont besoin.",
      },
      {
        q: "Copilot protège-t-il mieux les données que ChatGPT ?",
        a: "Pour garder les traitements en Europe, Copilot part devant : service Microsoft 365 et EU Data Boundary pour les utilisateurs européens, à l'exception des modèles d'Anthropic. ChatGPT Enterprise peut héberger et calculer en Europe si le client y est éligible ; ChatGPT Business n'offre qu'un stockage européen, ouvert progressivement. Ni Microsoft ni OpenAI n'entraînent leurs modèles sur ces données d'entreprise.",
      },
      {
        q: "Faut-il Microsoft 365 pour utiliser Copilot ?",
        a: "Pour la version entreprise, oui : la licence Microsoft Copilot s'ajoute à un abonnement éligible, de Business Basic jusqu'à Microsoft 365 E5, Office 365 E1, E3 et E5 compris, et Microsoft 365 E7 l'inclut d'office. Copilot Chat est compris dans les abonnements Microsoft 365 éligibles. Un particulier passe par Microsoft 365 Premium, à 22 € par mois.",
      },
      {
        q: "Copilot a-t-il une fenêtre de contexte, comme ChatGPT ?",
        a: "ChatGPT en publie deux sortes. **Dans l'interface**, un compte Business dispose de 54 000 tokens en réponse instantanée et de 256 000 en raisonnement, un compte Enterprise de 128 000 et 256 000. **Par l'API**, la famille GPT-6 accepte 1 050 000 tokens. Microsoft ne donne aucun chiffre pour Copilot, qui interroge Microsoft Graph pour retrouver le passage pertinent dans vos fichiers : il cherche au lieu de tout lire d'un bloc.",
      },
      {
        q: "Combien coûtent Copilot et ChatGPT pour 50 personnes sur un an ?",
        a: "**Copilot Business** (300 utilisateurs au plus) : 50 × 18,20 € HT × 12 = 10 920 € HT par an, abonnements Microsoft 365 non compris ; 9 360 € HT sur la première année si vous êtes déjà client Microsoft 365 et souscrivez avant le 31 décembre 2026. **ChatGPT Business** : 50 × 21 € × 12 = 12 600 € par an, sur la base du prix affiché pour la France. Si vous automatisez, ajoutez les crédits des agents des deux côtés.",
      },
      {
        q: "L'offre ChatGPT Team existe-t-elle encore ?",
        a: "Non : depuis août 2025, elle s'appelle **ChatGPT Business**. On y retrouve l'espace partagé, les connecteurs et l'absence d'entraînement sur vos échanges, avec des sièges Premium (100 $ par mois en annuel, 125 $ au mois) pour les usages intensifs.",
      },
      {
        q: "Une formation Copilot ressemble-t-elle à une formation ChatGPT ?",
        a: "Non. Une formation ChatGPT travaille la façon de formuler une demande, les projets, ChatGPT Work et les agents. Une formation Copilot avance application par application (Word, Excel, Outlook, Teams), sur les fichiers de l'équipe. Masteria propose les deux, et une formation multi-outils de deux jours quand le choix reste ouvert.",
      },
      {
        q: "Copilot fonctionne-t-il sur Mac ?",
        a: "Oui pour les usages que Microsoft documente : Outlook pour Windows et Mac, Teams sur Windows, Mac, le web, Android et iOS. L'édition d'un classeur avec Copilot se déploie sur Windows, Mac, le web, iPad et iPhone. Contrôlez la version d'Office des postes avant l'ouverture.",
      },
      {
        q: "Microsoft 365 Premium ou licence Microsoft Copilot : quelle différence ?",
        a: "**Microsoft 365 Premium** (22 € par mois ou 219 € par an) s'adresse aux particuliers, pour une à six personnes, l'IA étant réservée au titulaire ; la page Copilot Pro de la boutique Microsoft renvoie vers lui. La **licence Microsoft Copilot** (26 € HT mensuels par siège, engagement d'un an) se greffe sur un abonnement professionnel et ancre les réponses dans Microsoft Graph.",
      },
      {
        q: "Microsoft lit-il mes données quand j'utilise Copilot ?",
        a: "D'après Microsoft, prompts et réponses restent dans le service Microsoft 365, sous vos règles de conservation, avec les engagements qui protègent déjà vos boîtes Exchange et vos bibliothèques SharePoint, et ils n'entraînent pas les modèles. Si vous activez les modèles d'Anthropic, Anthropic intervient comme sous-traitant de Microsoft et ces traitements quittent l'EU Data Boundary.",
      },
      {
        q: "Peut-on ouvrir Copilot à un petit groupe d'abord ?",
        a: "Oui. Les licences s'attribuent personne par personne dans le centre d'administration : démarrez avec un groupe pilote, suivez l'usage dans les rapports d'adoption, puis élargissez. Le rôle « AI Administrator » permet de confier ce pilotage sans droits d'administrateur global.",
      },
    ],

    relatedLinks: [
      { label: "Formation Microsoft Copilot", href: "/formation-microsoft-copilot" },
      { label: "Formation ChatGPT pour entreprises", href: "/formation-chatgpt" },
      { label: "Formation IA gestion de projet", href: "/formation-ia-gestion-de-projet" },
      { label: "Comparatif ChatGPT vs Claude", href: "/chatgpt-vs-claude" },
      { label: "Comparatif Gemini vs Copilot", href: "/gemini-vs-copilot" },
      { label: "Quelle est la meilleure IA en 2026 ?", href: "/quelle-est-la-meilleure-ia" },
      { label: "Glossaire IA : 83 termes", href: "/glossaire-ia" },
      { label: "Conseil IA pour entreprises", href: "/conseil-intelligence-artificielle" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // PANORAMA : utilise tools[], deepDive[], decisionTree[], comparisonTable[]
  // ═══════════════════════════════════════════════════════════════════
  "meilleure-ia-entreprise-2026": {
    slug: "meilleure-ia-entreprise-2026",
    metaTitle: "Meilleure IA entreprise 2026 : 5 outils comparés | Masteria",
    metaDesc:
      "ChatGPT, Claude, Microsoft Copilot, Gemini ou Mistral (Vibe) : quelle IA pour votre entreprise ? Suite, métier, données, prix par siège au 7 octobre 2026.",
    h1: "Quelle est la meilleure IA pour votre entreprise en 2026 ?",
    intro:
      "Vous hésitez entre **ChatGPT**, **Claude**, **Microsoft Copilot**, **Google Gemini** et **Mistral AI** pour équiper vos équipes ? Trois questions départagent la plupart des entreprises : quelle suite bureautique vous utilisez, quel métier pèse le plus dans vos usages, quelles règles s'appliquent à vos données. Ce panorama y répond outil par outil, avec les modèles, les prix par siège et la quantité de texte que chacun accepte, relevés le 7 octobre 2026 sur les pages des cinq éditeurs.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "7 octobre 2026",
    datePublished: "2026-05-04",
    dateModified: "2026-10-07",
    readTime: "13 minutes",
    keywords:
      "benchmark ia 2026, benchmark ia entreprise, benchmark des ia, meilleure ia entreprise 2026, comparatif chatgpt claude copilot gemini mistral, quelle ia choisir entreprise, gpt-6, claude opus 5.5, gemini 3, vibe mistral, prix ia entreprise par siège",
    isPanorama: true,

    // ─── Textes de section propres à ce panorama (lus par ComparisonPage via `textes`)
    textes: {
      legende: "Les cinq assistants critère par critère, d'après les pages des éditeurs au 7 octobre 2026.",
      analyseTitre: "Les cinq outils vus de près",
      analyse: "Pour chacun : ce qu'il fait mieux que les autres, ce qui le freine et l'équipe à qui il convient.",
      casTitre: "Huit tâches d'entreprise, et l'outil qui s'en sort le mieux",
      cas: "Huit demandes qui reviennent dans nos formations multi-outils, de la présentation client au refactoring de code, tranchées entre les cinq assistants dans leurs offres professionnelles.",
      coutTitre: "Ce que coûte l'équipement d'une entreprise, selon sa taille",
      cout: "Budget annuel des seuls abonnements, calculé sur les prix publics en paiement annuel ; formation et accompagnement viennent en plus.",
      aRetenir: "un abonnement ne produit rien tant que l'équipe ne sait pas s'en servir. Inscrivez la formation dans le budget dès le départ : chez Masteria, la journée intra (douze participants au plus) est facturée 1 980 € HT, somme que l'OPCO de votre branche peut prendre en charge selon ses propres règles. Le retour sur investissement se mesure ensuite sur vos propres tâches.",
      erreursTitre: "Cinq erreurs qui faussent le choix d'une IA d'entreprise",
      erreurs: "Les pièges que nous voyons le plus souvent quand une entreprise choisit son outil sans l'avoir mis à l'épreuve.",
      ctaTitre: "Comparez les cinq outils sur les dossiers de vos équipes",
      ctaTexte: "Notre formation multi-outils réunit vos collaborateurs pendant deux jours autour de ChatGPT, Claude, Copilot, Gemini et Mistral, chacun sur ses propres tâches. Vous repartez avec une grille de choix remplie par ceux qui feront le travail. Côté financement, Qualiopi (au titre des actions de formation) rend possible un financement de votre OPCO de branche, selon ses propres critères.",
    },

    // ─── Ce que nos formations multi-outils ont montré (sources : missions-formation.js, etudes-de-cas.js cas `photovoltaique`)
    terrain: {
      titre: "Ce que nos formations multi-outils montrent",
      paras: [
        "En septembre 2026, seize salariés d'une [interprofession agricole](/etudes-de-cas-ia#mission-interprofession-agricole) ont comparé six assistants en plénière (ChatGPT, Claude, Gemini, Perplexity, Copilot et Vibe) sur des documents publics de leur filière. La journée s'est conclue sur une grille de choix que le groupe a remplie lui-même, avant deux ateliers métier, l'un en marketing, l'autre en gestion.",
        "Une [PME de distribution photovoltaïque](/etudes-de-cas-ia#photovoltaique) a pris le chemin inverse du réflexe habituel : un diagnostic par flux de travail d'abord, puis le choix d'des comptes d'équipe gérés par la société, qui ont remplacé les abonnements personnels. L'outil vient après la cartographie des tâches, jamais avant.",
      ],
    },

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Quelle IA choisir pour équiper son entreprise en 2026 ?",
      answer:
        "Personne ne gagne sur tous les terrains : chaque outil répond à une situation précise. Si votre entreprise vit dans **Microsoft 365**, **Copilot** puise dans votre messagerie, vos documents et vos réunions grâce à Microsoft Graph ; comptez 26 € HT par personne chaque mois, ou 18,20 € HT avec Copilot Business tant que vous restez sous 300 utilisateurs. Si elle vit dans **Google Workspace**, **Gemini** est déjà compris dans vos forfaits, et son application traite un million de tokens dès l'édition Business Standard. Pour des équipes qui manient de longs dossiers ou du code, **Claude** absorbe un dossier d'un million de tokens dès qu'on paie un abonnement, et l'offre Pro donne déjà Claude Code. Pour produire des visuels et monter des agents sans programmer, **ChatGPT**. Pour des données qui doivent rester en Europe, voire chez vous, **Mistral AI**, son assistant **Vibe** et ses modèles à poids ouverts.",
      bullets: [
        "Entreprise sous Microsoft 365 : Copilot, 26 € HT le siège, 18,20 € HT en Copilot Business",
        "Entreprise sous Google Workspace : Gemini, compris dans le forfait",
        "Contrats, rapports, code : Claude et son million de tokens",
        "Visuels et agents d'équipe sans code : ChatGPT",
        "Données gardées en Europe ou sur vos serveurs : Mistral AI et Vibe",
      ],
    },

    tools: [
      { id: "chatgpt", name: "ChatGPT", editor: "OpenAI", country: "États-Unis", strengths: "Visuels, tâches longues avec Work, agents d'équipe, Codex", priceMonthly: "23 € Plus · 21 € Business", color: "#10A37F" },
      { id: "claude", name: "Claude", editor: "Anthropic", country: "États-Unis", strengths: "Dossiers d'un million de tokens, Claude Code, Cowork dans la conversation", priceMonthly: "20 $ Pro · 25 $ Team", color: "#D97706" },
      { id: "copilot", name: "Microsoft Copilot", editor: "Microsoft", country: "États-Unis", strengths: "Vos mails et fichiers via Graph, Copilot Studio, Cowork", priceMonthly: "26 € HT + Microsoft 365", color: "#0078D4" },
      { id: "gemini", name: "Google Gemini", editor: "Google", country: "États-Unis", strengths: "Compris dans Workspace, Gemini Notebook, vidéos dans Vids", priceMonthly: "13,60 € Business Standard", color: "#4285F4" },
      { id: "mistral", name: "Mistral AI (Vibe)", editor: "Mistral AI", country: "France", strengths: "Données en Europe par défaut, poids ouverts, Vibe Work et Code", priceMonthly: "17,99 € TTC Pro", color: "#FA500F" },
    ],

    verdict: {
      title: "Cinq profils d'entreprise, cinq choix",
      summary:
        "Votre point de départ décide. Pour chaque profil, l'outil que nous conseillons :",
      profiles: [
        { profile: "Entreprise sous Microsoft 365", tool: "Microsoft Copilot", why: "Ses réponses s'appuient sur vos mails, fichiers et réunions, avec les droits déjà en place. Licence à 26 € HT mensuels en formule annuelle ; Copilot Business descend à 18,20 € HT pour 300 utilisateurs au plus." },
        { profile: "Entreprise sous Google Workspace", tool: "Google Gemini", why: "La même logique dans Gmail, Docs et Sheets, sans supplément : Gemini est compris dans les forfaits, avec un million de tokens dès Business Standard." },
        { profile: "Marketing, communication, création", tool: "ChatGPT", why: "ChatGPT Images 2.5 pour les visuels de campagne, ChatGPT Work pour des fichiers finis, des agents d'équipe écrits en phrases simples." },
        { profile: "Code, analyse, gros dossiers", tool: "Claude", why: "Un million de tokens par échange sur les offres payantes, Claude Code dès Pro, Cowork intégré à chaque conversation." },
        { profile: "Données sensibles, secteur public", tool: "Mistral AI (Vibe)", why: "Un éditeur français qui stocke vos données dans l'Union sauf demande contraire, publie des modèles à poids ouverts et s'installe sur site avec l'offre Enterprise." },
      ],
    },

    deepDive: [
      {
        tool: "chatgpt",
        title: "ChatGPT (OpenAI)",
        position: "Le généraliste au périmètre le plus large",
        pros: [
          "Depuis juillet 2026, ChatGPT Work mène une demande jusqu'au fichier final : document, tableur, présentation ou site",
          "Agents d'équipe partagés, planifiés, lancés depuis Slack ou par API sur Business et Enterprise",
          "ChatGPT Images 2.5 crée et retouche des visuels",
          "Modèles : GPT-5.6 Sol dans le dialogue, GPT-6 Pro ajouté pour Business et Enterprise, la famille GPT-6 au service de Work et de Codex",
          "Extensions officielles pour Word, Excel et PowerPoint, dès la formule gratuite",
        ],
        cons: [
          "Côté contexte, un compte Business s'arrête à 256 000 tokens avec raisonnement et à 54 000 sans : près de quatre fois moins que Claude ou Gemini",
          "Aucune vidéo depuis la fermeture de Sora, le 26 avril 2026",
          "Work, Codex et les agents passent en crédits une fois l'enveloppe consommée",
          "Sur Business, stockage européen en cours de déploiement et calcul des réponses hors d'Europe",
        ],
        idealFor: "Marketing, communication, équipes créatives, PME et start-up qui automatisent leurs routines",
      },
      {
        tool: "claude",
        title: "Claude (Anthropic)",
        position: "Le spécialiste des gros dossiers et du code",
        pros: [
          "Avec un abonnement payant, Sonnet 5.5, Fable 5.1 et Opus 5.5 acceptent un million de tokens par échange",
          "Claude Code compris dans Pro, Max, Team et Enterprise",
          "Depuis le 16 septembre 2026, Cowork travaille dans chaque conversation : fichiers, applications connectées, tâches planifiées",
          "Claude Slides, Docs et Design, en bêta, pour des présentations et des documents exportables",
          "MCP, standard ouvert de connexion inventé par Anthropic, repris par ChatGPT, Gemini et Microsoft Copilot",
        ],
        cons: [
          "Aucune image produite : ni photo, ni illustration",
          "Les applications d'Anthropic tournent hors d'Europe ; une installation européenne suppose AWS Bedrock ou Google Cloud Vertex AI",
          "Pas de Claude Code dans la formule gratuite",
        ],
        idealFor: "Développement, juridique, finance, appels d'offres, analyse de documents longs",
      },
      {
        tool: "copilot",
        title: "Microsoft Copilot (anciennement Microsoft 365 Copilot)",
        position: "Le réflexe des entreprises sous Microsoft 365",
        pros: [
          "Disponible dans Outlook, Teams, Word, Excel, PowerPoint et OneNote",
          "Réponses tirées de Microsoft Graph et de Work IQ : mails, fichiers, réunions, agenda, dans la limite des droits",
          "Un mode Auto répartit les demandes entre les modèles OpenAI et, si l'administrateur les active, ceux d'Anthropic",
          "Agents métier dans Copilot Studio ; dans Microsoft 365, Copilot Cowork agit et réclame votre accord avant toute action sensible",
          "Pour les utilisateurs européens, traitement dans l'EU Data Boundary, à l'exception de Claude",
        ],
        cons: [
          "26 € HT mensuels par personne pour la licence, sans compter l'abonnement Microsoft 365",
          "Agents autonomes et Cowork facturés à l'usage, en plus de la licence",
          "Claude reste éteint par défaut pour les clients européens, et ses requêtes quittent l'EU Data Boundary dès qu'on l'allume",
          "Droits SharePoint à auditer avant l'ouverture",
        ],
        idealFor: "ETI et grands groupes sous Microsoft 365, secteurs régulés, bureautique quotidienne",
      },
      {
        tool: "gemini",
        title: "Google Gemini",
        position: "L'équivalent de Copilot chez Google",
        pros: [
          "Dès Business Standard, Gemini répond dans Gmail, Meet, Drive, Docs, Sheets, Slides, Vids et Chat",
          "Aucun supplément : le forfait Business Standard, à 13,60 € mensuels en engagement annuel, comprend Gemini",
          "Contexte d'un million de tokens dans l'application Gemini, à partir de Business Standard",
          "Gemini Notebook (anciennement NotebookLM) : 300 sources par carnet, et des réponses qui citent le passage source",
          "Les compétences, procédures réutilisables, succèdent aux Gems à partir du 5 octobre 2026",
        ],
        cons: [
          "Business Starter bridé : Gemini seulement dans Gmail et dans son application, 32 000 tokens, 100 sources par carnet",
          "L'atelier d'agents Workflow Builder relève de Gemini Enterprise, une licence Google Cloud facturée à partir de 21 $ le siège",
          "Modèle Pro limité à 200 requêtes par jour en Business Standard (relevé du 7 octobre 2026)",
        ],
        idealFor: "Entreprises sous Google Workspace, éducation, médias, équipes qui travaillent sur des corpus",
      },
      {
        tool: "mistral",
        title: "Mistral AI (Vibe)",
        position: "Le choix des données gardées en Europe",
        pros: [
          "Stockage dans l'Union européenne, sauf demande contraire",
          "Modèles à poids ouverts, que vous téléchargez et faites tourner chez vous : Mistral Medium 3.5, Mistral Large 3, Mistral Small 4",
          "Installation sur site ou en cloud privé avec l'offre Enterprise",
          "Vibe a fusionné conversation et mode Work le 22 septembre 2026, avec un interrupteur Fast ou Think ; Vibe Code s'adresse aux développeurs",
          "Pro à 17,99 € TTC par mois, Team à 29,99 € TTC par utilisateur",
        ],
        cons: [
          "Hors Enterprise, Mistral entraîne ses modèles sur vos échanges par défaut ; l'administrateur d'une offre Team peut désactiver ce réglage pour tous",
          "Pas de connecteur natif vers un CRM ou un ERP : il faut un MCP ajouté par l'administrateur",
          "Taille de contexte de l'interface non publiée par offre",
        ],
        idealFor: "Secteur public, défense, santé, finance régulée, R&D confidentielle",
      },
    ],

    decisionTree: [
      { question: "Vous travaillez majoritairement sur Microsoft 365 ?", yes: "Microsoft Copilot", no: null },
      { question: "Vous travaillez majoritairement sur Google Workspace ?", yes: "Google Gemini", no: null },
      { question: "Hébergement en Europe ou déploiement interne impératifs ?", yes: "Mistral AI", no: null },
      { question: "Cas d'usage dominant : code, analyse, documents longs ?", yes: "Claude", no: null },
      { question: "Cas d'usage dominant : marketing, création, polyvalence ?", yes: "ChatGPT", no: null },
    ],

    // ─── GEO : titre et note du tableau N colonnes (équivalent panorama de keyFacts)
    comparisonTableMeta: {
      title: "Les cinq outils dans un même tableau",
      note: "Vérifié le 7 octobre 2026 auprès des cinq éditeurs, sur leurs pages officielles. La ligne « contexte dans l'interface » décrit ce dont disposent vos équipes ; la ligne « contexte via API », ce qu'obtient un développeur qui intègre le modèle. Prix publiés pour la France, sauf Claude (dollars hors taxes) ; OpenAI ne précise pas s'il affiche HT ou TTC.",
    },
    comparisonTable: [
      { criterion: "Modèles disponibles", chatgpt: "GPT-5.6 Sol et GPT-6 Pro pour dialoguer ; famille GPT-6 pour Work et Codex", claude: "Fable 5.1, Opus 5.5 (par défaut), Sonnet 5.5, Haiku 4.5", copilot: "OpenAI et Anthropic, choix automatique en mode Auto", gemini: "Gemini 3.x ; l'application propose les modes Rapide, Raisonnement et Pro", mistral: "Medium 3.5, Small 4 et Large 3 ; Large 4 présenté en préversion par API le 6 octobre 2026" },
      { criterion: "Prix par utilisateur et par mois", chatgpt: "Plus 23 € ; Business 21 € à l'année", claude: "Pro 20 $ ; Team 25 $, 20 $ à l'année", copilot: "26 € HT ; 18,20 € HT pour Copilot Business ; Microsoft 365 en plus", gemini: "Compris : Business Standard à 13,60 € en annuel", mistral: "17,99 € TTC en Pro, 29,99 € TTC en Team" },
      { criterion: "Contexte dans l'interface", chatgpt: "Plus et Business : 54 000 tokens, 256 000 en raisonnement", claude: "Un million de tokens sur les offres payantes", copilot: "Aucun chiffre publié, recherche dans Graph", gemini: "Un million dès Business Standard, 32 000 en Starter", mistral: "Pas de chiffre par offre" },
      { criterion: "Contexte via API", chatgpt: "1 050 000 tokens avec GPT-6", claude: "Un million de tokens", copilot: "Sans objet, Copilot reste un produit fini", gemini: "Variable selon le modèle Gemini choisi", mistral: "256 000 tokens (Medium 3.5 et Large 3)" },
      { criterion: "Images générées", chatgpt: "Oui, avec ChatGPT Images 2.5", claude: "Non ; schémas et maquettes uniquement", copilot: "Oui dans Copilot Chat, avec l'accord de l'administrateur", gemini: "Oui, Nano Banana Pro (30 images par mois en Business Standard)", mistral: "Oui, dans Vibe" },
      { criterion: "Agents", chatgpt: "ChatGPT Work et agents d'équipe, en crédits au-delà de l'enveloppe", claude: "Cowork dans la conversation, dès Pro", copilot: "Copilot Studio ; Copilot Cowork facturé à l'usage", gemini: "Workspace Studio (plafonds dès le 1er novembre 2026) ; Workflow Builder via Gemini Enterprise", mistral: "Skills de Vibe, tâches planifiées, workflows de Mistral Studio" },
      { criterion: "Outil de code compris", chatgpt: "Codex, limité dans la formule gratuite", claude: "Claude Code dès Pro", copilot: "Aucun : GitHub Copilot s'achète à part", gemini: "Import de dépôts GitHub dans l'application", mistral: "Vibe Code (terminal, VS Code), Medium 3.5 en poids ouverts" },
      { criterion: "Hébergement européen", chatgpt: "Possible sur Enterprise et Edu si le client est éligible ; Business : stockage seul, par étapes", claude: "Non, sauf via AWS Bedrock ou Google Cloud Vertex AI", copilot: "Oui, EU Data Boundary, sauf Claude", gemini: "Régions de données sur les éditions Enterprise", mistral: "Oui, d'office" },
      { criterion: "Entraînement sur les échanges (offre équipe)", chatgpt: "Exclu par défaut sur Business et Enterprise", claude: "Exclu par défaut sur Team et Enterprise", copilot: "Exclu", gemini: "Exclu dans les éditions Workspace", mistral: "Actif par défaut sur Team, coupé par l'administrateur ; exclu sur Enterprise" },
      { criterion: "Installation sur vos serveurs", chatgpt: "Non ; OpenAI publie à part les modèles ouverts gpt-oss", claude: "Non", copilot: "Non", gemini: "Non pour Gemini dans Workspace", mistral: "Oui, poids ouverts et offre Enterprise sur site" },
    ],

    faq: [
      {
        q: "Peut-on faire cohabiter plusieurs IA dans une même entreprise ?",
        a: "Oui, et c'est fréquent. Le copilote de votre suite (Copilot ou Gemini) couvre la bureautique quotidienne, un assistant généraliste (ChatGPT ou Claude) prend les tâches créatives et les dossiers longs, et Mistral peut traiter les flux sensibles. Comptez, pour un siège de généraliste, 21 € mensuels chez OpenAI ou 20 $ chez Anthropic, sur facturation annuelle.",
      },
      {
        q: "Par quel outil commencer quand aucune suite ne domine ?",
        a: "Par un assistant généraliste en offre équipe, choisi d'après le métier qui pèse le plus : **ChatGPT Business** (21 € mensuels le siège, facturés à l'année) pour la polyvalence, **Claude Team** (20 $ en annuel) pour les dossiers longs et le code. Faites le point après trois à six mois : un besoin d'intégration à Office oriente vers Copilot, des contraintes d'hébergement vers Mistral.",
      },
      {
        q: "Quelle IA lit les documents les plus longs ?",
        a: "Dans l'interface, **Claude** et **Gemini** font jeu égal avec un million de tokens : Claude sur ses offres payantes, Gemini dès l'édition Business Standard, l'édition Starter étant bridée à 32 000. Côté ChatGPT, Plus et Business plafonnent à 256 000 tokens pour un modèle qui raisonne, 54 000 pour une réponse immédiate. Microsoft ne publie pas de limite pour Copilot, qui va chercher l'extrait utile dans vos fichiers. Les chiffres de l'API concernent les développeurs : vérifiez la limite de l'offre que vos équipes auront entre les mains.",
      },
      {
        q: "Combien coûte une formation pour comparer les cinq outils ?",
        a: "Notre formation multi-outils dure deux jours : vos équipes essaient les cinq assistants sur leurs propres tâches. La facture s'élève à **1 980 € HT** par journée, à majorer de 20 % de TVA, que vous inscriviez un groupe intra (douze personnes au maximum) ou une seule personne. L'OPCO de votre branche peut la financer selon ses règles : Le programme et la convention sont préparés par nos soins ; à vous d'envoyer la demande à l'OPCO avant la première journée.",
      },
      {
        q: "Et les IA chinoises, comme DeepSeek ou Qwen ?",
        a: "Interrogez-les comme n'importe quel éditeur : où les données sont traitées, quel droit s'applique, quelles garanties figurent au contrat, si vos échanges servent à l'entraînement. Un modèle à poids ouverts que vous faites tourner sur vos propres serveurs ne transmet rien à son éditeur, quelle que soit sa nationalité ; une application en ligne reçoit tout ce que vous tapez.",
      },
      {
        q: "Existe-t-il un benchmark IA 2026 fiable pour choisir son outil ?",
        a: "Aucun ne suffit seul, et c'est le piège. Les classements publics (arènes de préférence, tests académiques, tableaux des éditeurs) mesurent des modèles sur des exercices standardisés, à une date donnée, souvent dans une version absente de l'offre entreprise. Ils changent tous les mois et ne disent rien de l'intégration à vos outils, de la gouvernance des données ni du prix par siège. Un benchmark utile se fait sur vos propres cas : cinq à dix tâches courantes (un courriel client, un compte rendu, une analyse de tableau, une synthèse de contrat), soumises aux outils candidats dans leur version entreprise et notées par les personnes qui feront le travail. Quand nous citons une étude, nous indiquons le modèle testé et la période de collecte.",
      },
      {
        q: "Quel est le retour sur investissement d'un déploiement d'IA en entreprise ?",
        a: "Aucun chiffre moyen ne vaut pour votre entreprise. Mesurez le temps passé sur cinq à dix tâches récurrentes avant et après le déploiement, puis décidez de ce que devient le temps libéré : c'est ce choix qui fait apparaître le retour sur investissement. La méthode complète figure sur notre page consacrée au ROI de l'IA.",
      },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Ce qui a bougé depuis notre panorama d'août",
      items: [
        { date: "7 octobre 2026", text: "Revue des prix et des plafonds. En Business Standard, Google autorise désormais chaque jour 200 questions au modèle Pro, 600 en mode Thinking et 20 rapports Deep Research ; un carnet Gemini Notebook de Business Starter monte à 100 sources. Microsoft affiche Copilot Business à 21,84 € HT en paiement mensuel. Mistral a présenté Mistral Large 4 en préversion par API le 6 octobre." },
        { date: "Septembre 2026", text: "Trois modèles chez Anthropic : Fable 5.1 le 1er, Opus 5.5 le 22, Sonnet 5.5 le 28, tous dotés d'un million de tokens pour les abonnés payants ; Cowork s'est fondu dans la conversation le 16. Chez OpenAI, la famille GPT-6 (Astra, Sol, Luna, puis GPT-6.1 Sol le 29) sert ChatGPT Work et Codex, la conversation restant sur GPT-5.6." },
        { date: "Septembre et octobre 2026", text: "Chez Google, les compétences prennent la relève des Gems depuis le 5 octobre, et Workspace Studio appliquera ses plafonds à partir du 1er novembre. Chez Mistral, Vibe a fusionné sa conversation et son mode Work le 22 septembre, et les Skills y ont pris la place des agents." },
        { date: "Mai 2026", text: "Le 28 mai, Mistral AI a donné le nom de Vibe à son assistant, anciennement Le Chat. Sa gamme s'appuie désormais sur Medium 3.5, Small 4 et Large 3 ; Magistral est déprécié." },
        { date: "Correction", text: "Nous limitions à 100 sources les carnets de l'outil documentaire de Google. Gemini Notebook en accepte 300 dans les éditions Business Standard, Business Plus et Enterprise, Business Starter étant passé à 100 le 7 octobre 2026." },
        { date: "Correction", text: "Pour Business Standard, nous citions 25 requêtes Pro toutes les 4 heures : ce plafond vaut pour Business Starter. Nous présentions aussi Devstral 2 comme le modèle de code de Mistral, alors que l'éditeur l'a déprécié le 22 mai 2026 et recommande désormais Medium 3.5." },
        { date: "Correction", text: "Nous présentions Mistral comme le seul du panorama à publier des modèles à poids ouverts, alors qu'OpenAI a publié gpt-oss en août 2025. Nous citions aussi Sora 2 pour la vidéo dans ChatGPT (application fermée le 26 avril 2026), une région européenne en option chez Claude (elle n'existe pas) et Claude Code dans l'offre gratuite (il en est absent)." },
      ],
    },

    methodology:
      "Masteria, cabinet d'intelligence artificielle installé à Lyon depuis 2022, forme des équipes aux cinq outils de ce panorama. Les verdicts par tâche viennent d'exercices de formation tirés du travail de bureau : marketing, RH, finance, juridique. Le **7 octobre 2026**, nous avons repris modèles, prix et limites de texte chez les cinq éditeurs, d'après les pages listées ci-dessous ; pour Claude, notre relevé du 5 octobre reste valable, Anthropic n'ayant rien publié de nouveau depuis. Versions de référence : **GPT-5.6 Sol et GPT-6 Pro**, **Claude Sonnet 5.5 et Opus 5.5**, **Microsoft Copilot**, **Gemini dans Workspace Business Standard**, **Mistral Medium 3.5 et Vibe**.",

    citations: [
      { name: "ChatGPT : prix publiés pour la France", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "ChatGPT : historique des nouveautés", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "OpenAI : sortie des modèles ouverts gpt-oss en août 2025", url: "https://help.openai.com/en/articles/9624314-model-release-notes" },
      { name: "ChatGPT : GPT-5.6 et GPT-6 Pro selon l'offre", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "ChatGPT : fin de Sora et de la vidéo", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
      { name: "ChatGPT : options de résidence des données en Europe", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "OpenAI : catalogue des modèles pour développeurs", url: "https://developers.openai.com/api/docs/models" },
      { name: "Claude : grille Free, Pro, Max, Team et Enterprise", url: "https://claude.com/pricing" },
      { name: "Claude : un million de tokens sur les offres payantes", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
      { name: "Claude : nouveautés publiées par Anthropic", url: "https://support.claude.com/en/articles/12138966-release-notes" },
      { name: "Claude : hébergement régional des données", url: "https://platform.claude.com/docs/en/manage-claude/data-residency" },
      { name: "Copilot : prix France pour les grandes entreprises", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise" },
      { name: "Copilot : prix France de l'offre Business", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
      { name: "Copilot : fonctions par niveau de licence", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Copilot : Anthropic comme sous-traitant, désactivé dans l'UE", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
      { name: "Gemini : forfaits Google Workspace en France", url: "https://workspace.google.com/intl/fr/pricing" },
      { name: "Gemini : quotas de l'application par édition", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
      { name: "Gemini Notebook : sources et carnets par édition", url: "https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/turn-gemini-notebook-on-or-off-for-users" },
      { name: "Gemini : plafonds d'usage de l'IA dans Workspace", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
      { name: "Gemini Enterprise : la licence de Google Cloud", url: "https://cloud.google.com/gemini-enterprise" },
      { name: "Gemini : modèles disponibles par API", url: "https://ai.google.dev/gemini-api/docs/models" },
      { name: "Mistral : prix de Vibe et de l'API", url: "https://mistral.ai/pricing" },
      { name: "Mistral : gamme de modèles en service", url: "https://mistral.ai/models" },
      { name: "Mistral : l'assistant prend le nom de Vibe", url: "https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe" },
      { name: "Mistral : réglages d'entraînement sur vos échanges", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
      { name: "Mistral : hébergement des données dans l'UE", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
    ],

    realCases: [
      {
        scenario: "Préparer une présentation client de 10 diapositives",
        feature: "À partir d'un document Word, dans l'outil de présentation de l'entreprise",
        verdictText: "**Microsoft Copilot l'emporte** si vos supports naissent dans PowerPoint : il bâtit la présentation depuis le document et met en forme tout le fichier. **Gemini** fait de même dans Slides, dans la limite de 100 diapositives générées par mois en Business Standard. **ChatGPT** passe par son extension PowerPoint, **Claude** par Claude Slides (en bêta), exportable en PowerPoint.",
        winner: "copilot",
      },
      {
        scenario: "Générer 5 visuels marketing pour LinkedIn",
        feature: "Visuels de communication qui respectent une charte",
        verdictText: "**ChatGPT gagne** : ChatGPT Images 2.5 reprend la charte d'un visuel existant et corrige une zone isolée. **Gemini** produit aussi des images avec Nano Banana Pro, 30 par mois en Business Standard. **Vibe** en génère également. **Claude**, lui, s'en tient aux schémas.",
        winner: "chatgpt",
      },
      {
        scenario: "Analyser un rapport de 400 pages et en faire la synthèse",
        feature: "Lecture d'un document long, d'un seul tenant",
        verdictText: "**Claude et Gemini à égalité** : un million de tokens chacun, sur les offres payantes de Claude et dès Business Standard pour Gemini, si bien que le rapport entre en une fois. **Gemini Notebook** y ajoute un carnet de 300 sources qui renvoie au passage cité. **ChatGPT** plafonne à 256 000 tokens en raisonnement sur Plus et Business, de quoi couvrir quelque 320 pages : les 80 dernières obligent à couper le rapport en deux.",
        winner: "tie",
      },
      {
        scenario: "Trier ses 30 courriels du matin et préparer ses brouillons",
        feature: "Boîte de réception et agenda",
        verdictText: "**Microsoft Copilot gagne dans Outlook**, parce qu'il lit la boîte et l'agenda par Microsoft Graph. **Gemini** joue le même rôle dans Gmail. **ChatGPT** et **Claude** y parviennent par des connecteurs, avec un résultat qui dépend de ce que chacun a branché.",
        winner: "copilot",
      },
      {
        scenario: "Construire un budget prévisionnel sur Excel ou Google Sheets",
        feature: "Modélisation financière simple dans un tableur",
        verdictText: "**Match nul** : Copilot travaille dans Excel, Gemini dans Sheets (100 créations ou modifications de feuilles par mois en Business Standard), ChatGPT et Claude par leur extension pour Excel. Dans tous les cas, quelqu'un relit les formules.",
        winner: "tie",
      },
      {
        scenario: "Construire un agent simple pour automatiser une tâche récurrente",
        feature: "Petit agent métier monté sans programmer",
        verdictText: "**Les agents ChatGPT** se montent le plus vite : rôle, déclencheur et étapes s'écrivent en phrases ordinaires, et chaque exécution consomme des crédits depuis le 6 juillet 2026. **Copilot Studio** offre l'équivalent gouverné chez Microsoft. **Gemini** propose Workspace Studio, qui appliquera ses plafonds à partir du 1er novembre 2026. **Claude** planifie des tâches depuis la conversation et se relie à vos outils par MCP.",
        winner: "chatgpt",
      },
      {
        scenario: "Refactorer 1 000 lignes de code ancien",
        feature: "Reprise et qualité de code",
        verdictText: "**Claude gagne** : Claude Code, compris dès Pro, charge le module entier dans un million de tokens, et Anthropic présente Opus 5.5 comme son modèle Opus le plus fort en programmation agentique. Codex garde ChatGPT dans la course. Microsoft Copilot sort de son rôle ici : Microsoft vend GitHub Copilot séparément.",
        winner: "claude",
      },
      {
        scenario: "Garantir que mes données restent en France ou en Europe",
        feature: "Contrainte réglementaire sur la localisation",
        verdictText: "**Mistral AI gagne** : hébergement dans l'Union européenne par défaut, modèles à poids ouverts, installation sur site avec Enterprise ; pensez seulement à couper l'entraînement sur Vibe, activé d'office hors Enterprise. **Microsoft Copilot** traite les requêtes européennes dans l'EU Data Boundary, Claude excepté. **ChatGPT Enterprise** propose stockage et calcul européens aux clients qui y ont droit. Les applications de **Claude** n'offrent aucune région en Europe.",
        winner: "mistral",
      },
    ],

    mistakes: [
      {
        title: "Chercher la meilleure IA dans l'absolu",
        desc: "La question n'a pas de réponse universelle. Le bon outil dépend de votre suite (Microsoft, Google ou aucune), du métier qui domine et de vos contraintes de données. Une entreprise qui vit dans Microsoft 365 et choisit ChatGPT se prive de l'ancrage de Copilot dans ses mails et ses fichiers.",
      },
      {
        title: "Signer après avoir essayé un seul outil",
        desc: "L'outil le plus connu s'impose souvent sans essai. Sur les dossiers longs, le code ou l'analyse, les écarts apparaissent pourtant en quelques heures. Faites passer deux ou trois tâches courantes à au moins deux outils avant de signer.",
      },
      {
        title: "Payer les licences et faire l'impasse sur la formation",
        desc: "Un abonnement que personne n'a appris à utiliser rapporte peu. Le retour sur investissement vient de la façon de formuler les demandes, du choix du bon mode et de la relecture des sorties : inscrivez la formation dans le même budget que les licences.",
      },
      {
        title: "Verrouiller un outil pour cinq ans",
        desc: "Le marché change chaque trimestre : rien qu'en septembre 2026, Anthropic a publié trois modèles et OpenAI sa famille GPT-6. Un engagement de cinq ans fait courir le risque de payer le mauvais outil. Deux outils complémentaires et une revue annuelle protègent mieux.",
      },
      {
        title: "Ignorer les règles propres à votre secteur",
        desc: "Santé, défense, finance régulée, secteur public : l'hébergement des données y change la réponse. Mistral garde d'office vos données dans l'Union et peut s'installer chez vous ; Copilot traite dans l'EU Data Boundary ; ChatGPT Enterprise ouvre une résidence européenne aux clients admissibles ; Anthropic ne propose aucune région européenne pour Claude.",
      },
    ],

    costScenarios: [
      {
        size: "TPE ou start-up (10 personnes)",
        recommendation: "ChatGPT Business",
        annualCost: "2 520 €/an",
        rationale: "Dix sièges ChatGPT Business, affichés 21 € par mois en formule annuelle. Un outil polyvalent pour un petit budget, à revoir après six à douze mois d'usage.",
      },
      {
        size: "PME (50 personnes)",
        recommendation: "ChatGPT Business pour 40 personnes, Claude Team pour 10 profils techniques et juridiques",
        annualCost: "10 080 € + 2 400 $/an",
        rationale: "Quarante sièges ChatGPT Business à 21 € et dix sièges Claude Team à 20 $ par mois, en paiement annuel. Claude prend les dossiers longs et le code, ChatGPT le reste de l'équipe.",
      },
      {
        size: "ETI (200 personnes sous Microsoft 365)",
        recommendation: "Copilot Business pour tous, ChatGPT Business pour 30 profils créatifs ou techniques",
        annualCost: "51 240 €/an",
        rationale: "Deux cents licences Copilot Business à 18,20 € HT par mois (offre limitée à 300 utilisateurs), soit 43 680 € HT, et trente sièges ChatGPT Business à 21 €, soit 7 560 €, en paiement annuel. Abonnements Microsoft 365 et crédits d'agents non compris.",
      },
      {
        size: "Grand groupe (1 000 personnes)",
        recommendation: "Copilot ou Gemini pour tous, Claude et Mistral pour les métiers qui en ont besoin",
        annualCost: "312 000 € HT/an et plus",
        rationale: "Mille licences Microsoft Copilot à 26 € HT chaque mois, en engagement annuel, font 312 000 € HT, avant les sièges spécialisés : Claude pour le juridique, la technique et la finance, Mistral pour les entités tenues de garder leurs données en Europe. Un cadrage préalable évite de payer des licences qui dorment.",
      },
    ],

    relatedLinks: [
      { label: "Quelle est la meilleure IA en 2026 ?", href: "/quelle-est-la-meilleure-ia" },
      { label: "Comparatif ChatGPT vs Claude", href: "/chatgpt-vs-claude" },
      { label: "Comparatif Copilot vs ChatGPT", href: "/copilot-vs-chatgpt" },
      { label: "ROI de l'IA en entreprise", href: "/roi-ia-entreprise" },
      { label: "Formation ChatGPT", href: "/formation-chatgpt" },
      { label: "Formation Claude IA", href: "/formation-claude-ia" },
      { label: "Formation Microsoft Copilot", href: "/formation-microsoft-copilot" },
      { label: "Formation Google Gemini", href: "/formation-gemini-entreprise" },
      { label: "Formation Mistral AI", href: "/formation-mistral-ai" },
      { label: "Glossaire IA : 83 termes", href: "/glossaire-ia" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // PANORAMA SPÉCIALISÉ : meilleure IA pour coder (cible « meilleur ia pour coder »)
  // ═══════════════════════════════════════════════════════════════════
  "meilleure-ia-pour-coder": {
    slug: "meilleure-ia-pour-coder",
    metaTitle: "Meilleure IA pour coder en 2026 : comparatif | Masteria",
    metaDesc:
      "Claude Code (Opus 5.5), GitHub Copilot, Cursor ou Codex : contexte, agents, éditeurs, prix par développeur. Comparatif mis à jour le 7 octobre 2026.",
    h1: "Quelle est la meilleure IA pour coder en 2026 ?",
    intro:
      "Si vous équipez une équipe technique en 2026, le choix de l'IA de codage engage votre budget et votre vitesse de livraison. **Claude Code** s'appuie sur Opus 5.5 et Fable 5.1, lit des dépôts d'un million de tokens et figure dans les abonnements Claude Pro, Max, Team et Enterprise. **GitHub Copilot** s'installe dans les éditeurs existants, avec le choix du modèle et le ticket d'entrée le plus bas. **Cursor** propose un éditeur bâti autour de l'agent. **ChatGPT** délègue des tâches de développement à **Codex**, inclus dans ses offres. Ce guide compare ces quatre outils ; les données d'Anthropic et d'OpenAI ont été relues le 7 octobre 2026, celles de GitHub et de Cursor le 3.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "7 octobre 2026 (GitHub et Cursor : 3 octobre)",
    datePublished: "2026-05-04",
    dateModified: "2026-10-07",
    readTime: "11 minutes",
    keywords:
      "meilleure ia pour coder 2026, claude code prix, github copilot vs claude, cursor prix, codex openai, ia refactoring code, comparatif ia développement, opus 5.5, gpt-6.1 sol",
    isPanorama: true,

    // ─── Textes de section propres à ce panorama (lus par ComparisonPage via `textes`)
    textes: {
      legende: "Quatre outils de code comparés : Anthropic et OpenAI relus le 7 octobre 2026, GitHub et Cursor le 3 octobre.",
      analyseTitre: "Chaque outil de code en détail",
      analyse: "Points forts, limites et développeur type, outil par outil.",
      casTitre: "Huit tâches de développement, un vainqueur pour chacune",
      cas: "Des situations que nous reproduisons avec les équipes techniques : complétion, refactoring, fonctionnalité complète, tests, incident en production, présentation à la direction, revue de pull request, documentation.",
      erreursTitre: "Six erreurs quand on équipe des développeurs",
      erreurs: "Elles coûtent des licences inutilisées ou des heures de revue, et se repèrent dès le cadrage.",
      ctaTitre: "Formez vos développeurs à travailler avec un agent de code",
      ctaTexte: "Nos formations Claude Code et IA informatique se déroulent sur votre dépôt : cadrage des tâches confiées à l'agent, revue de ses modifications, règles de sécurité. Pour comparer d'abord les assistants généralistes, la formation multi-outils les met deux jours à l'essai. Masteria, certifié Qualiopi au titre des actions de formation, prépare le dossier ; l'OPCO de votre branche décide du financement selon ses règles.",
    },

    // ─── Terrain (sources : missions-formation.js, mission `editeur-pole-formation` ; équipe Masteria du brief commun)
    terrain: {
      titre: "Ce que nous voyons chez les équipes qui codent avec l'IA",
      paras: [
        "Le [pôle formation d'un éditeur de logiciels B2B](/etudes-de-cas-ia#mission-editeur-pole-formation), formé à Claude en septembre 2026, a terminé ses deux jours par un premier essai de Claude Code, avec sa responsable et deux ingénieures pédagogiques. L'outil s'ouvre donc à d'autres profils que les développeurs, à condition de cadrer ce qu'on lui confie.",
        "Pour ses propres projets, Masteria mobilise environ cinq développeurs IA indépendants, et Mathias Nizan pilote chaque mission. Le conseil que nous donnons aux équipes techniques en découle : un outil d'éditeur pour le quotidien, un agent en ligne de commande pour les chantiers de fond, et une revue humaine avant chaque fusion de code.",
      ],
    },

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Quelle IA choisir pour coder en 2026 ?",
      answer:
        "**Claude Code** (Anthropic) est le choix des missions lourdes : refactoring de gros dépôts, architecture, débogage profond. Il tourne sur **Opus 5.5** et **Fable 5.1**, lit **un million de tokens** et il est inclus dans les offres Pro (20 $ par mois), Max, Team et Enterprise. **GitHub Copilot** reste le meilleur choix pour la complétion pendant la frappe dans VS Code, Visual Studio ou JetBrains, à 10 $ par mois en individuel et 19 $ par siège en Business, avec un sélecteur qui propose Claude, GPT ou Gemini. **Cursor** convient aux développeurs qui veulent un éditeur agentique, où l'agent modifie plusieurs fichiers et lance les tests, à 20 $ par mois. **ChatGPT** couvre les profils mixtes et délègue des tâches de code à **Codex**, en local ou dans le cloud. Une association possible : Copilot pour toute l'équipe, Claude Code pour les missions de fond. Pour l'adopter en équipe sur votre dépôt, voir notre [formation Claude Code](/formation-claude-code).",
      bullets: [
        "Refactoring, architecture, débogage profond : Claude Code",
        "Complétion pendant la frappe dans VS Code ou JetBrains : GitHub Copilot",
        "Éditeur agentique multi-fichiers : Cursor",
        "Profils mixtes (code, documentation, analyse) : ChatGPT avec Codex",
        "Équipe de 10 développeurs et plus : Copilot pour tous, Claude Code pour les missions de fond",
      ],
    },

    tools: [
      { id: "claude", name: "Claude Code", editor: "Anthropic", country: "États-Unis", strengths: "Missions lourdes, un million de tokens, inclus dès Pro", priceMonthly: "20 $ Pro · 25 $ Team", color: "#D97706" },
      { id: "github-copilot", name: "GitHub Copilot", editor: "Microsoft / GitHub", country: "États-Unis", strengths: "Complétion dans l'éditeur, choix du modèle, revue de code", priceMonthly: "10 $ Pro · 19 $ Business", color: "#24292F" },
      { id: "cursor", name: "Cursor", editor: "Cursor", country: "États-Unis", strengths: "Éditeur agentique, agents cloud, modèle Composer 2.5", priceMonthly: "20 $ Pro · 40 $ Teams", color: "#000000" },
      { id: "chatgpt", name: "ChatGPT", editor: "OpenAI", country: "États-Unis", strengths: "Codex en local et dans le cloud, tâches mixtes", priceMonthly: "23 € Plus · 21 € Business", color: "#10A37F" },
    ],

    verdict: {
      title: "Quatre outils, quatre profils de développeur",
      summary:
        "Le meilleur outil de code est celui qui épouse votre façon de travailler. **Claude Code** pour les dépôts complexes et les missions longues, **GitHub Copilot** pour la productivité quotidienne dans l'éditeur, **Cursor** pour un éditeur conçu autour de l'agent, **ChatGPT** pour les tâches qui mêlent code, documentation et analyse. Les quatre donnent accès aux modèles les plus récents : la différence se fait sur l'outillage autour.",
      profiles: [
        { profile: "Développeur senior, code complexe et refactoring", tool: "Claude Code", why: "Un million de tokens de contexte, Opus 5.5 et Fable 5.1, inclus dans les offres Pro, Max, Team et Enterprise." },
        { profile: "Développeur fullstack, VS Code au quotidien", tool: "GitHub Copilot", why: "Extension pour VS Code et JetBrains, complétion pendant la frappe, mode agent, choix du modèle. À partir de 10 $ par mois en individuel." },
        { profile: "Développeur autonome sur des projets entiers", tool: "Cursor", why: "Éditeur bâti autour de l'agent, agents cloud, modèles Claude, GPT et Gemini au choix en plus de Composer 2.5." },
        { profile: "Profil mixte : code, documentation, analyse", tool: "ChatGPT", why: "Codex pour l'exécution autonome, ChatGPT Work pour la documentation et les présentations, inclus dans les offres payantes." },
        { profile: "Responsable technique qui équipe 20 développeurs ou plus", tool: "GitHub Copilot + Claude Code", why: "Copilot pour la productivité quotidienne dans l'éditeur, Claude Code pour les missions de fond en architecture et refactoring." },
      ],
    },

    deepDive: [
      {
        tool: "claude",
        title: "Claude Code (Anthropic)",
        position: "Le spécialiste des chantiers de fond",
        pros: [
          "Opus 5.5, présenté par Anthropic comme son meilleur modèle Opus en programmation agentique, et Fable 5.1 pour les sessions de plusieurs jours",
          "Claude Code lit jusqu'à un million de tokens, que vous travailliez avec Sonnet 5.5, Opus 5.5 ou Fable 5.1",
          "Inclus dans Pro, Max, Team (sièges standard compris depuis le 16 janvier 2026) et Enterprise",
          "Mode rapide d'Opus 5.5, jusqu'à 2,5 fois plus rapide, facturé le double du tarif standard",
          "Skills et serveurs MCP pour brancher l'outil sur vos systèmes et vos procédures",
        ],
        cons: [
          "Absent de l'offre gratuite d'Anthropic",
          "Fable 5.1 en usage restreint : crédits d'usage sur Pro, sièges Premium sur Team",
          "Usage encadré par des limites sur cinq heures et à la semaine",
        ],
        idealFor: "Développeurs seniors, missions de refactoring et de débogage profond, responsables techniques sur l'architecture",
      },
      {
        tool: "github-copilot",
        title: "GitHub Copilot",
        position: "Le standard quotidien dans l'éditeur",
        pros: [
          "Extensions pour VS Code, Visual Studio, JetBrains, Vim, Neovim et Azure Data Studio",
          "Complétion pendant la frappe et conversation dans toutes les offres",
          "Sélecteur de modèles : Claude (Sonnet 5.5, Fable 5.1, Opus 5.5), GPT-6 Astra et GPT-5.6, Gemini 3.1 Pro et 3.8 Flash, entre autres",
          "Mode agent dans l'éditeur, agent cloud qui travaille sur GitHub, revue de code et Copilot CLI",
          "Données de Copilot Business et Enterprise exclues de l'entraînement",
        ],
        cons: [
          "Usage décompté en crédits GitHub AI au-delà de l'allocation de l'offre (1 crédit = 0,01 $)",
          "Business à 19 $ et Enterprise à 39 $ par siège, au-dessus de l'offre individuelle à 10 $",
          "Indexation du code de toute l'organisation réservée à Enterprise",
        ],
        idealFor: "Développeurs sur VS Code ou JetBrains, équipes GitHub, organisations qui veulent choisir le modèle",
      },
      {
        tool: "cursor",
        title: "Cursor",
        position: "L'éditeur conçu pour l'agent",
        pros: [
          "Éditeur conçu autour de l'agent, avec complétion contextuelle",
          "Modèles Claude, GPT-5.6, Gemini et Grok au choix, plus Composer 2.5, le modèle maison",
          "Agents cloud et revue de code automatisée avec Bugbot (offre Teams)",
          "MCP, compétences et crochets (hooks) pour adapter l'agent aux règles de l'équipe",
        ],
        cons: [
          "Demande de changer d'éditeur, là où Copilot s'installe en extension",
          "Teams à 40 $ par utilisateur et par mois",
          "Bugbot facturé à l'usage sur l'offre individuelle",
        ],
        idealFor: "Développeurs autonomes, indépendants, équipes produit qui travaillent par agent",
      },
      {
        tool: "chatgpt",
        title: "ChatGPT (OpenAI)",
        position: "Le polyvalent code et hors code",
        pros: [
          "Codex délègue des tâches de développement, en local ou dans le cloud (Codex Cloud, 29 septembre 2026)",
          "GPT-6.1 Sol en cours de déploiement dans Codex, GPT-6 Astra accessible dès l'offre Plus dans Work et Codex",
          "Revue de pull requests dans Codex et analyse de sécurité des dépôts avec Codex Security Cloud",
          "Utile sur les tâches mixtes : code, documentation, présentation du projet",
          "Accès limité à Codex dès l'offre gratuite",
        ],
        cons: [
          "Conversation plafonnée à 256 000 tokens de raisonnement sur les offres Plus et Business",
          "Usage de Codex partagé avec ChatGPT Work dans la même enveloppe, puis en crédits",
        ],
        idealFor: "Profils mixtes (chefs de produit technique, fondateurs, indépendants généralistes), prototypage rapide",
      },
    ],

    decisionTree: [
      { question: "Vous menez des missions de fond sur des dépôts complexes (refactoring, architecture) ?", yes: "Claude Code", no: null },
      { question: "Vous travaillez dans VS Code ou JetBrains au quotidien ?", yes: "GitHub Copilot", no: null },
      { question: "Vous voulez un éditeur agentique qui modifie plusieurs fichiers d'un coup ?", yes: "Cursor", no: null },
      { question: "Vous mêlez code, documentation et analyse ?", yes: "ChatGPT", no: null },
      { question: "Vous équipez une équipe de 10 développeurs ou plus ?", yes: "GitHub Copilot Business + Claude Code pour les missions de fond", no: null },
    ],

    // ─── GEO : titre et note du tableau N colonnes (équivalent panorama de keyFacts)
    comparisonTableMeta: {
      title: "Claude Code, GitHub Copilot, Cursor et Codex en un coup d'œil",
      note: "Anthropic et OpenAI relus le 7 octobre 2026, GitHub et Cursor le 3 octobre. Prix en dollars hors taxes, sauf ChatGPT (grille française). Nous distinguons le contexte disponible dans l'outil, celui du développeur au quotidien, du contexte offert par l'API à une application qui intègre le modèle.",
    },
    comparisonTable: [
      { criterion: "Prix par développeur et par mois", chatgpt: "23 € Plus · 21 € Business en annuel", claude: "20 $ Pro · 25 $ Team (20 $ en annuel)", "github-copilot": "10 $ Pro · 19 $ Business · 39 $ Enterprise", cursor: "20 $ Pro · 40 $ Teams" },
      { criterion: "Modèles", chatgpt: "GPT-6.1 Sol, GPT-6 Astra et GPT-5.6 dans Codex", claude: "Sonnet 5.5 ; Opus 5.5 ; Fable 5.1", "github-copilot": "Claude, GPT, Gemini, Grok au choix", cursor: "Claude, GPT-5.6, Gemini, Grok, Composer 2.5" },
      { criterion: "Intégration à l'éditeur", chatgpt: "Application Codex, ligne de commande, extension d'éditeur", claude: "Ligne de commande (Claude Code)", "github-copilot": "Extensions VS Code, Visual Studio, JetBrains, Neovim", cursor: "Éditeur dédié" },
      { criterion: "Contexte dans l'outil", chatgpt: "256 000 tokens en raisonnement (Plus, Business)", claude: "1 000 000 de tokens dans Claude Code", "github-copilot": "Selon le modèle choisi", cursor: "Selon le modèle choisi" },
      { criterion: "Contexte via API", chatgpt: "1 050 000 tokens (GPT-6)", claude: "1 000 000 de tokens", "github-copilot": "Sans objet", cursor: "Sans objet" },
      { criterion: "Complétion pendant la frappe", chatgpt: "Non documentée sur les pages consultées", claude: "Non documentée sur les pages consultées", "github-copilot": "Oui, dans toutes les offres", cursor: "Oui, complétion contextuelle" },
      { criterion: "Mode agentique multi-fichiers", chatgpt: "Oui, Codex en local et dans le cloud", claude: "Oui, Claude Code", "github-copilot": "Oui, mode agent et agent cloud", cursor: "Oui, agent et agents cloud" },
      { criterion: "Inclus sans licence développeur", chatgpt: "Codex dans toutes les offres, limité en Free", claude: "Claude Code dans Pro, Max, Team, Enterprise", "github-copilot": "Non : licence ou crédits par développeur", cursor: "Non : licence par développeur" },
      { criterion: "Revue de code", chatgpt: "Oui, Code Review dans Codex", claude: "Oui, sur demande dans Claude Code", "github-copilot": "Oui, intégrée à GitHub", cursor: "Oui, Bugbot" },
      { criterion: "Code et entraînement (offre entreprise)", chatgpt: "Non par défaut (Business, Enterprise)", claude: "Non par défaut (Team, Enterprise)", "github-copilot": "Non (Business, Enterprise)", cursor: "Mode confidentialité pour toute l'équipe (Teams)" },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Les changements notés depuis août 2026",
      items: [
        { date: "7 octobre 2026", text: "Relecture des pages d'Anthropic et d'OpenAI : aucune nouvelle version de Claude depuis Sonnet 5.5, et GPT-6.1 Sol poursuit son arrivée dans Codex. Mistral Large 4 apparaît depuis le 6 octobre dans la liste des modèles de Mistral, en préversion par l'API." },
        { date: "Septembre 2026", text: "Anthropic a lancé Opus 5.5 le 22 septembre, avec un mode rapide jusqu'à 2,5 fois plus rapide dans Claude Code, puis Sonnet 5.5 le 28 septembre ; Fable 5.1 était sorti le 1er septembre." },
        { date: "Septembre 2026", text: "OpenAI a ouvert GPT-6 Sol et GPT-6 Luna dans Codex le 22 septembre, puis GPT-6.1 Sol et Codex Cloud le 29 septembre." },
        { date: "Octobre 2026", text: "Au 3 octobre 2026, GitHub Copilot compte cinq offres payantes (Pro à 10 $, Pro+ à 39 $, Max à 100 $, Business à 19 $, Enterprise à 39 $) et décompte l'usage en crédits GitHub AI. Cursor propose son modèle maison Composer 2.5 aux côtés de Claude, GPT, Gemini et Grok." },
        { date: "Correction", text: "Nous écrivions que Claude Code était inclus dès l'offre gratuite : il est réservé à Pro, Max, Team et Enterprise. Nous donnions aussi GitHub Copilot à 10 € en Business et 19 € en Enterprise : les tarifs sont de 19 $ et 39 $ par siège, 10 $ étant le prix de l'offre individuelle Pro." },
        { date: "Correction", text: "Devstral 2, que nous citions pour coder avec des poids ouverts, n'est plus recommandé par Mistral depuis le 22 mai 2026 : l'éditeur oriente vers Medium 3.5." },
        { date: "Correction", text: "Nous citions « Copilot Workspace » comme agent de GitHub Copilot : GitHub présente aujourd'hui un mode agent dans l'éditeur et un agent cloud. Nous décrivions aussi Composer comme un mode de Cursor : c'est le nom de son modèle maison." },
      ],
    },

    methodology:
      "Créé à Lyon en 2022, Masteria développe des outils sur mesure et forme des équipes techniques. Nos verdicts viennent de mises en situation : refactoring TypeScript, débogage Python, écriture de tests, conception d'une API REST, revue de code, migrations SQL. Les pages d'Anthropic et d'OpenAI ont été relues le **7 octobre 2026**, celles de GitHub et de Cursor le **3 octobre**. Versions de référence : **Claude Code avec Opus 5.5**, **GitHub Copilot** et son sélecteur de modèles, **Cursor**, **ChatGPT avec Codex**.",

    citations: [
      { name: "Abonnements Claude qui incluent Claude Code", url: "https://claude.com/pricing" },
      { name: "Taille du contexte de Claude Code sur les offres payantes", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
      { name: "Opus 5.5 et la programmation agentique, selon Anthropic", url: "https://www.anthropic.com/claude-opus-5-5" },
      { name: "Gamme des modèles Claude pour développeurs", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
      { name: "Historique des nouveautés de Claude", url: "https://support.claude.com/en/articles/12138966-release-notes" },
      { name: "Offres GitHub Copilot, de Pro à Enterprise", url: "https://docs.github.com/en/copilot/get-started/plans" },
      { name: "Modèles sélectionnables dans GitHub Copilot", url: "https://docs.github.com/en/copilot/reference/ai-models/supported-models" },
      { name: "Questions fréquentes sur les offres GitHub Copilot", url: "https://github.com/features/copilot/plans" },
      { name: "Prix de Cursor Pro et Teams", url: "https://cursor.com/pricing" },
      { name: "Modèles et facturation à l'usage dans Cursor", url: "https://cursor.com/docs/models-and-pricing" },
      { name: "Codex et ChatGPT Work, d'après OpenAI", url: "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
      { name: "Codex Cloud et GPT-6.1 Sol dans le journal de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "Grille ChatGPT pour la France, Codex compris", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "Fenêtre de contexte des modèles GPT-6 par API", url: "https://developers.openai.com/api/docs/models" },
      { name: "Modèles à poids ouverts de Mistral AI pour le code", url: "https://mistral.ai/models" },
    ],

    realCases: [
      {
        scenario: "Compléter du code pendant la frappe",
        feature: "Tâche du quotidien : suggestions en ligne dans l'éditeur",
        verdictText: "**GitHub Copilot gagne** : c'est sa raison d'être, avec des suggestions en ligne dans toutes ses offres et dans la plupart des éditeurs. Cursor offre une complétion contextuelle dans son propre éditeur. Claude Code et Codex travaillent en agents, sur des tâches entières.",
        winner: "github-copilot",
      },
      {
        scenario: "Refactorer un module ancien de plus de 1 000 lignes (TypeScript ou Python)",
        feature: "Tâche pro : refactoring et non-régression",
        verdictText: "**Claude Code gagne** : la fenêtre d'un million de tokens tient le module et ses dépendances, et Anthropic indique qu'Opus 5.5 cherche la cause d'un problème avant de modifier le code et vérifie son travail en avançant. Cursor avec un modèle Claude est l'alternative si vous tenez à rester dans un éditeur.",
        winner: "claude",
      },
      {
        scenario: "Transformer une demande métier en fonctionnalité complète sur plusieurs fichiers",
        feature: "Tâche pro : implémentation autonome d'une fonctionnalité",
        verdictText: "**Cursor prend l'avantage** pour qui veut rester dans l'éditeur : l'agent retouche plusieurs fichiers, exécute les tests puis recommence sous vos yeux. Claude Code fait le même travail en ligne de commande, GitHub Copilot en mode agent ou avec son agent cloud, et Codex en local ou dans le cloud.",
        winner: "cursor",
      },
      {
        scenario: "Générer une suite de tests unitaires Jest ou pytest",
        feature: "Tâche pro : couverture de tests",
        verdictText: "**GitHub Copilot gagne pour la fluidité** dans l'éditeur, au fil de l'écriture du code. En mise en situation, Claude Code produit des tests plus complets sur les cas limites. Une combinaison efficace : Copilot pour le squelette, Claude pour les cas tordus.",
        winner: "github-copilot",
      },
      {
        scenario: "Diagnostiquer une erreur en production à partir d'une trace d'exécution",
        feature: "Tâche pro : diagnostic et résolution de bug",
        verdictText: "**Claude gagne** sur les bugs complexes : Anthropic présente Opus 5.5 comme un modèle qui remonte à la cause racine avant de corriger. Codex sait aussi reproduire et corriger en autonomie sur un dépôt cadré. Copilot et Cursor restent les plus pratiques pour appliquer le correctif dans l'éditeur.",
        winner: "claude",
      },
      {
        scenario: "Préparer une présentation de l'architecture pour la direction",
        feature: "Tâche mixte : code et communication",
        verdictText: "**ChatGPT gagne** sur cette tâche mixte : ChatGPT Work produit la présentation et ChatGPT Images 2.5 les illustrations. Claude produit les schémas et, avec Claude Slides (en bêta), une présentation exportable, sans illustrations générées. Copilot et Cursor ne sont pas conçus pour ce cas.",
        winner: "chatgpt",
      },
      {
        scenario: "Relire une pull request de 15 à 50 commits",
        feature: "Tâche pro : revue de qualité avant fusion",
        verdictText: "**GitHub Copilot gagne** grâce à l'intégration à GitHub : commentaires dans la pull request, suggestions, détection des erreurs courantes. Cursor automatise la revue avec Bugbot, et Codex propose Code Review. Claude Code sert d'escalade pour les revues d'architecture et de sécurité.",
        winner: "github-copilot",
      },
      {
        scenario: "Écrire la documentation technique d'un code existant",
        feature: "Tâche pro : README, commentaires, OpenAPI",
        verdictText: "**Claude gagne** sur la qualité rédactionnelle en mise en situation : structure claire, style naturel. ChatGPT suit de près. GitHub Copilot et Cursor génèrent la documentation en ligne (commentaires, docstrings) dans le code.",
        winner: "claude",
      },
    ],

    mistakes: [
      {
        title: "Choisir un seul outil pour toute l'équipe sans tenir compte des profils",
        desc: "Imposer GitHub Copilot à un développeur senior qui fait surtout du refactoring, ou Claude Code à un junior qui découvre l'éditeur, gaspille une partie de l'investissement. Une stratégie simple : Copilot pour tous, Claude Code pour les profils qui mènent les missions de fond.",
      },
      {
        title: "Sous-estimer GitHub Copilot parce qu'il « existe depuis longtemps »",
        desc: "Copilot 2022 et Copilot 2026 partagent le nom. Le modèle se choisit aujourd'hui parmi les familles Claude, GPT, Gemini et Grok, le mode agent modifie plusieurs fichiers et un agent cloud travaille sur GitHub. Réévaluez-le si votre jugement date d'avant 2025.",
      },
      {
        title: "Oublier que Claude Code est inclus dans les offres Claude",
        desc: "Claude Code fait partie des offres Pro, Max, Team et Enterprise, sans licence développeur à part. Si vos équipes ont déjà des sièges Claude, la comparaison honnête porte sur ce que chaque outil ajoute à la facture existante.",
      },
      {
        title: "Vouloir tout faire dans la conversation de ChatGPT",
        desc: "La conversation de ChatGPT n'est pas un environnement de développement. Pour un développeur, Codex, Copilot, Cursor ou Claude Code apportent l'accès au dépôt, l'exécution des tests et les modifications sur plusieurs fichiers.",
      },
      {
        title: "Ignorer la question de la souveraineté du code",
        desc: "Les outils en ligne transmettent vos prompts et votre code aux serveurs de l'éditeur. Pour les bases de code sensibles (défense, santé, finance régulée), deux voies : des contrats d'entreprise avec garanties, ou des modèles à poids ouverts déployés chez vous, comme Mistral Medium 3.5.",
      },
      {
        title: "Acheter sans former les équipes",
        desc: "Un développeur qui écrit des demandes vagues tire peu de ces outils. La formation porte sur le cadrage des tâches, le contexte fourni à l'agent, la revue de ses modifications et les règles de sécurité.",
      },
    ],

    faq: [
      {
        q: "Quel outil d'IA retenir pour programmer en 2026 ?",
        a: "**Claude Code** est le choix des missions lourdes : refactoring, architecture, débogage profond. Il tourne sur **Opus 5.5** et **Fable 5.1**, lit un million de tokens et il est inclus dans les offres Pro, Max, Team et Enterprise d'Anthropic. **GitHub Copilot** reste le standard de la productivité quotidienne dans l'éditeur, à 10 $ par mois en individuel et 19 $ par siège en Business. **Cursor** est l'éditeur conçu pour l'agent. **ChatGPT** couvre les profils mixtes, avec **Codex** pour l'exécution autonome. Le bon choix suit le profil : missions de fond vers Claude Code, développement quotidien vers Copilot, autonomie complète vers Cursor.",
      },
      {
        q: "Claude Code est-il inclus dans l'offre gratuite de Claude ?",
        a: "Non. Anthropic inclut **Claude Code** dans les offres Pro (20 $ par mois, 17 $ en annuel), Max (à partir de 100 $), Team et Enterprise, sans licence développeur séparée ; les sièges standard de Team le comprennent depuis le 16 janvier 2026. L'offre gratuite se limite à la conversation.",
      },
      {
        q: "Claude Code ou GitHub Copilot : lequel choisir ?",
        a: "Les deux se complètent. **GitHub Copilot** pour la productivité quotidienne (complétion pendant la frappe, mode agent, revue de code sur GitHub), à 19 $ par siège en Business. **Claude Code** pour les missions lourdes de refactoring et d'architecture, inclus dans les offres Claude Pro, Team et Enterprise. Une équipe qui combine Copilot Business et Claude Team paie de l'ordre de 39 à 44 $ par développeur et par mois.",
      },
      {
        q: "Cursor ou GitHub Copilot : lequel est meilleur ?",
        a: "**Cursor** construit tout l'éditeur autour de l'agent et propose son propre modèle, Composer 2.5. **GitHub Copilot** s'installe dans VS Code, Visual Studio, JetBrains ou Neovim et profite de l'intégration à GitHub. Pour un indépendant ou une petite équipe produit, Cursor ; pour une entreprise aux environnements variés, Copilot.",
      },
      {
        q: "Combien coûte une IA pour coder en entreprise ?",
        a: "**GitHub Copilot** : 19 $ par siège et par mois en Business, 39 $ en Enterprise. **Claude** : Team à 25 $ par siège (20 $ en annuel), Claude Code inclus. **Cursor** : Teams à 40 $ par utilisateur. **ChatGPT** : Business à 21 € par utilisateur en annuel, Codex inclus. Pour 20 développeurs avec Copilot Business pour tous et Claude Team pour 5 profils seniors, comptez 5 760 $ par an en facturation annuelle, avant les crédits d'usage au-delà des allocations.",
      },
      {
        q: "Mes codes sources sont-ils utilisés pour entraîner les modèles ?",
        a: "Sur les offres d'entreprise, **non** : GitHub n'utilise pas les données de Copilot Business et Enterprise ; OpenAI exclut Business et Enterprise, Anthropic Team et Enterprise. Sur les offres individuelles d'OpenAI et d'Anthropic, l'utilisateur peut refuser cet usage dans ses réglages : vérifiez-le avant d'ouvrir un dépôt d'entreprise avec un compte personnel.",
      },
      {
        q: "Quelle IA pour un débutant en code ?",
        a: "**ChatGPT** reste le plus pédagogique pour démarrer : il explique, reformule et répond à la voix. Une fois à l'aise avec un éditeur, passez à **GitHub Copilot** dans VS Code (offre gratuite, puis Pro à 10 $ par mois). Masteria propose une formation IA informatique pour les profils techniques débutants comme avancés.",
      },
      {
        q: "Peut-on coder avec une IA sans envoyer le code aux éditeurs ?",
        a: "Oui, avec des modèles à poids ouverts déployés sur votre infrastructure : **Mistral Medium 3.5**, publié sous licence MIT modifiée, vers lequel Mistral renvoie depuis la dépréciation de Devstral 2 le 22 mai 2026. La ligne de commande Vibe Code de Mistral accepte aussi tout modèle servi derrière une API compatible avec celle d'OpenAI, y compris hors ligne. C'est la solution pour les bases de code qui ne doivent pas quitter le réseau.",
      },
      {
        q: "Quelle IA pour coder en TypeScript, React ou Next.js ?",
        a: "**Claude Code** tient le fil sur des refactorings qui touchent des dizaines de fichiers, et sa fenêtre d'un million de tokens couvre une application entière. **GitHub Copilot** se comporte bien sur cette pile, d'autant qu'il propose Claude Sonnet 5.5 et Opus 5.5 parmi ses modèles.",
      },
      {
        q: "Comment former une équipe de développeurs aux IA de codage ?",
        a: "Notre formation IA informatique couvre le cadrage des tâches confiées à un agent, l'intégration aux éditeurs, la revue des modifications et la sécurité ; la formation Claude Code travaille directement sur votre dépôt. La journée est à **1 980 € HT** (TVA de 20 % en plus) pour un groupe intra de douze développeurs au maximum ; votre OPCO de branche examine la prise en charge d'après ses critères.",
      },
    ],

    relatedLinks: [
      { label: "Quelle est la meilleure IA en 2026 ?", href: "/quelle-est-la-meilleure-ia" },
      { label: "Comparatif ChatGPT vs Claude", href: "/chatgpt-vs-claude" },
      { label: "Formation IA informatique", href: "/formation-ia-informatique" },
      { label: "Formation Claude IA", href: "/formation-claude-ia" },
      { label: "Formation ChatGPT", href: "/formation-chatgpt" },
      { label: "Glossaire IA : 83 termes", href: "/glossaire-ia" },
      { label: "Conseil IA pour entreprises", href: "/conseil-intelligence-artificielle" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // PANORAMA SPÉCIALISÉ : meilleur agent IA (cible « meilleur agent ia »)
  // ═══════════════════════════════════════════════════════════════════
  "meilleur-agent-ia": {
    slug: "meilleur-agent-ia",
    metaTitle: "Meilleur agent IA en 2026 : comparatif | Masteria",
    metaDesc:
      "Claude Cowork, agents ChatGPT, Manus, Copilot Studio : autonomie, validation, gouvernance, coût des exécutions. Comparatif mis à jour le 7 octobre 2026.",
    h1: "Quel est le meilleur agent IA pour votre entreprise en 2026 ?",
    intro:
      "Un agent IA exécute une tâche en plusieurs étapes sans qu'on le relance : il lit, décide, agit, recommence. En 2026, les quatre grandes offres ont changé de forme. Chez Anthropic, **Cowork** a rejoint la conversation de Claude le 16 septembre. Chez OpenAI, **ChatGPT Work** et les **agents d'espace de travail** se partagent le terrain. **Microsoft Copilot Studio** s'accompagne désormais de **Copilot Cowork**, et **Manus** a lancé sa version 2.0 le 28 septembre, après avoir repris son indépendance. Ce guide aide à choisir, et surtout à chiffrer ce que chacun coûte en production.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "7 octobre 2026 (Manus : 3 octobre)",
    datePublished: "2026-05-04",
    dateModified: "2026-10-07",
    readTime: "11 minutes",
    keywords:
      "meilleur agent ia 2026, claude cowork, agents espace de travail chatgpt, chatgpt work, copilot studio prix, copilot cowork, manus 2.0, mcp model context protocol, agent ia entreprise gouvernance",
    isPanorama: true,

    // ─── Textes de section propres à ce panorama (lus par ComparisonPage via `textes`)
    textes: {
      legende: "Les quatre plateformes d'agents comparées au 7 octobre 2026 (Manus : relevé du 3 octobre).",
      analyseTitre: "Les quatre plateformes, une par une",
      analyse: "Ce que chacune automatise bien, où elle coince, et pour quelle équipe.",
      casTitre: "Huit agents d'entreprise mis à l'épreuve",
      cas: "Des automatisations que nos clients nous demandent de construire ou d'enseigner : prospects entrants, préparation de la journée, veille, support, relances, voyages, circuit d'approbation, prix des concurrents.",
      erreursTitre: "Sept erreurs qui font échouer un projet d'agent",
      erreurs: "Ce sont les erreurs que nous corrigeons le plus souvent au moment de cadrer un projet d'agent.",
      ctaTitre: "Apprenez à vos équipes à confier une tâche à un agent",
      ctaTexte: "Notre formation multi-outils consacre deux jours à Claude, ChatGPT, Copilot, Gemini et Mistral, des demandes simples jusqu'aux premiers agents, avec la validation humaine et la gouvernance qui les accompagnent. Pour le financement, notre certification Qualiopi au titre des actions de formation autorise l'OPCO de votre branche à examiner une prise en charge.",
    },

    // ─── Ce que nos projets d'agents ont montré (sources : etudes-de-cas.js, cas `conseil-financier` et `photovoltaique`, missions-formation.js)
    terrain: {
      titre: "Ce que nos projets d'agents nous ont appris",
      paras: [
        "Un [cabinet de conseil financier](/etudes-de-cas-ia#conseil-financier), habitué des appels d'offres publics, nous a confié la conception de quatre assistants, un par famille de marchés, construits avec ses consultants au fil de quatre séances de deux heures. Une règle est écrite dans chacun : avant de rédiger, l'assistant interroge le consultant sur le client, les priorités, les références et l'équipe. L'agent prépare, la personne décide.",
        "Chez une [PME de distribution photovoltaïque](/etudes-de-cas-ia#photovoltaique), le diagnostic a conduit à trois assistants, construits sur les fichiers de l'entreprise : un pour interroger les transporteurs, un pour importer dans Odoo les réceptions d'entrepôt, un pour les devis et les relances, chacun confié à un porteur nommé. Pendant sa formation Claude de septembre 2026, l'[équipe pédagogique d'un éditeur de logiciels](/etudes-de-cas-ia#mission-editeur-pole-formation) a délégué à Cowork tout le travail préparatoire d'une session.",
      ],
    },

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Quel agent IA choisir pour son entreprise en 2026 ?",
      answer:
        "**Claude** est le plus direct pour agir sur des fichiers et des applications connectées : depuis le 16 septembre 2026, ce que faisait Cowork est disponible dans n'importe quelle conversation, avec une demande de validation avant d'agir par défaut et des tâches planifiées, dès l'offre **Pro à 20 $**. Sur Business et Enterprise, les **agents ChatGPT** se décrivent en langage naturel, se partagent, répondent dans Slack et démarrent par API ; chaque exécution puise dans des crédits depuis l'été 2026. **Microsoft Copilot Studio** reste le choix des organisations sur Microsoft 365 qui veulent une gouvernance centralisée, complété par **Copilot Cowork**, qui agit dans Microsoft 365 contre une facturation à l'usage. **Manus** enchaîne les tâches longues en autonomie ; son retour à l'indépendance le 1er septembre 2026, après l'annonce de son rapprochement avec Meta fin 2025, invite à la prudence pour un usage d'entreprise.",
      bullets: [
        "Agir sur des fichiers et des applications, avec validation : Claude, dès l'offre Pro",
        "Agent d'équipe monté en langage naturel, dans Slack ou par API : agents ChatGPT",
        "Gouvernance IT et environnement Microsoft 365 : Copilot Studio et Copilot Cowork",
        "Connexion à vos outils internes : MCP, le standard ouvert créé par Anthropic",
        "Coût réel : chiffrez les exécutions en plus des licences",
      ],
    },

    tools: [
      { id: "claude", name: "Claude Cowork", editor: "Anthropic", country: "États-Unis", strengths: "Fichiers, applications connectées, tâches planifiées, MCP natif", priceMonthly: "dès 20 $ (Pro)", color: "#D97706" },
      { id: "chatgpt", name: "Agents ChatGPT", editor: "OpenAI", country: "États-Unis", strengths: "Agents d'équipe en langage naturel, Slack, API, ChatGPT Work", priceMonthly: "21 € Business + crédits", color: "#10A37F" },
      { id: "manus", name: "Manus", editor: "Manus AI", country: "Laboratoire indépendant", strengths: "Agent généraliste autonome, automatisations sur événement", priceMonthly: "forfaits en crédits", color: "#7C3AED" },
      { id: "copilot", name: "Microsoft Copilot Studio", editor: "Microsoft", country: "États-Unis", strengths: "Agents gouvernés dans Microsoft 365, Copilot Cowork", priceMonthly: "26 € HT + crédits Copilot", color: "#0078D4" },
    ],

    verdict: {
      title: "Quatre agents, quatre usages : notre verdict",
      summary:
        "**Claude** agit sur vos fichiers et enchaîne les étapes d'une tâche depuis n'importe quelle conversation, dès l'offre Pro. Les **agents ChatGPT** se construisent en langage naturel et conviennent aux équipes non techniques ; leurs exécutions se paient en crédits depuis juillet 2026. **Microsoft Copilot Studio** reste le choix par défaut des organisations sur Microsoft 365 qui veulent une gouvernance centralisée. **Manus** tient les tâches longues en autonomie, avec moins de garanties d'entreprise. Le bon agent dépend de votre cas d'usage et du niveau de contrôle que votre service informatique exige.",
      profiles: [
        { profile: "Agir sur des fichiers et automatiser un travail de bureau", tool: "Claude Cowork", why: "Lit, modifie et crée des fichiers, demande avant d'agir par défaut et planifie des tâches qui tournent sans ordinateur allumé. Dès l'offre Pro." },
        { profile: "Agent monté par un profil non technique", tool: "Agents ChatGPT", why: "Rôle, déclencheur, outils et règles se décrivent en langage naturel ou partent d'un modèle. Disponibles sur Business et Enterprise depuis le 21 mai 2026." },
        { profile: "Intégration à vos outils et bases internes", tool: "Claude + MCP", why: "MCP est le standard ouvert de connexion aux outils créé par Anthropic, adopté par ChatGPT, Cursor, Gemini et Microsoft Copilot. Demande une mise en place technique." },
        { profile: "Stack Microsoft 365 et informatique centralisée", tool: "Microsoft Copilot Studio", why: "Gouvernance unifiée, données traitées dans Microsoft 365, agents publiés dans Copilot sans surcoût, et Copilot Cowork, qui s'interrompt pour un accord dès qu'une action est sensible." },
        { profile: "Tâches longues autonomes, usage individuel", tool: "Manus", why: "Bon sur les enchaînements recherche, synthèse et livrable, avec des automatisations sur événement. Garanties d'entreprise à évaluer avant tout déploiement." },
      ],
    },

    deepDive: [
      {
        tool: "claude",
        title: "Claude Cowork (Anthropic)",
        position: "L'agent qui travaille sur vos fichiers",
        pros: [
          "Lit, modifie et crée des fichiers, enchaîne les étapes et demande avant d'agir par défaut",
          "Intégré à la conversation de Claude depuis le 16 septembre 2026 (déploiement sur Pro et Max, puis Team et Free)",
          "Tâches planifiées qui tournent sans ordinateur allumé depuis l'ouverture au web et au mobile en juillet 2026",
          "Navigateur intégré depuis le 26 août 2026 pour terminer des tâches sur le web",
          "MCP et Agent Skills, deux standards ouverts créés par Anthropic",
          "Fable 5.1, conçu pour des travaux de plusieurs heures à travers plusieurs applications",
        ],
        cons: [
          "Connexion aux outils métier par connecteurs MCP, parfois à configurer",
          "Nouvelle expérience déployée progressivement : Team et Enterprise la reçoivent après Pro et Max",
          "Gouvernance avancée (rôles, journaux d'audit, API de conformité) réservée à Enterprise",
        ],
        idealFor: "Équipes techniques, automatisation du travail de bureau, intégrations internes, projets d'agents",
      },
      {
        tool: "chatgpt",
        title: "Agents d'espace de travail ChatGPT",
        position: "Le plus accessible aux profils non techniques",
        pros: [
          "Création en langage naturel ou depuis un modèle, avec aperçu avant publication",
          "Partage dans l'équipe, planification, canal Slack et déclenchement par API",
          "Contraintes sur les actions des connecteurs (n'écrire qu'à un domaine, ne lire qu'un document) et validation des écritures par défaut",
          "ChatGPT Work pour les tâches longues, qui peuvent démarrer à l'arrivée d'un courriel Gmail, d'un message Slack ou d'une pull request GitHub",
          "Historique des versions et édition à plusieurs",
        ],
        cons: [
          "Exécutions décomptées en crédits depuis le 6 juillet 2026, au-delà de l'enveloppe incluse",
          "Offre Business au minimum pour les agents d'espace de travail",
          "Désactivés par défaut sur Enterprise, à activer par l'administrateur",
          "Une connexion partagée mal choisie expose les données du créateur de l'agent : OpenAI recommande des comptes de service",
        ],
        idealFor: "Automatisation de processus d'équipe, service client, ventes, équipes métier sans profil technique",
      },
      {
        tool: "manus",
        title: "Manus",
        position: "L'agent autonome sur tâches longues",
        pros: [
          "Manus 2.0 (28 septembre 2026) : nouvelle architecture d'agent et ordinateur cloud pour les projets qui tournent en continu",
          "Automatisations déclenchées par un courriel, un message Slack, un événement d'agenda ou une mise à jour Notion",
          "Recherche étendue (Wide Research) et opérateur de navigateur",
          "Compatible avec le standard Agent Skills depuis janvier 2026",
        ],
        cons: [
          "Rapprochement avec Meta annoncé le 29 décembre 2025, puis retour à l'indépendance le 1er septembre 2026, avec sauvegarde et restauration de données pour certains utilisateurs",
          "Forfaits en crédits : la consommation varie selon la tâche",
          "Garanties contractuelles et gouvernance à évaluer avant tout usage sur des données d'entreprise",
        ],
        idealFor: "Indépendants, usage personnel, prototypage avant industrialisation",
      },
      {
        tool: "copilot",
        title: "Microsoft Copilot Studio",
        position: "Le choix des services informatiques centralisés",
        pros: [
          "Atelier low-code : un profil fonctionnel formé monte un agent avec peu ou pas de code",
          "Agents publiés dans Microsoft Copilot (anciennement Microsoft 365 Copilot) compris pour les titulaires de la licence",
          "Copilot Cowork, ouvert aux comptes professionnels depuis le 29 septembre 2026, envoie des courriels, planifie des réunions, crée des documents et publie dans Teams, en demandant l'accord avant chaque action sensible ; il accepte jusqu'à 50 compétences personnalisées",
          "Données traitées dans Microsoft 365, sous la gouvernance de l'administrateur",
          "Choix du modèle à la création de l'agent, dont des modèles d'Anthropic",
        ],
        cons: [
          "Agents autonomes et canaux externes payés en crédits Copilot (pack de 25 000 crédits à 173,30 € HT par mois, ou paiement à l'usage), abonnement Azure requis",
          "Cowork se règle à la consommation, par-dessus la licence",
          "Intégrations hors Microsoft à construire par connecteurs",
        ],
        idealFor: "ETI et grands groupes sur Microsoft 365, services informatiques centralisés, agents métier industrialisés",
      },
    ],

    decisionTree: [
      { question: "Vous voulez qu'un agent agisse sur vos fichiers et vos documents ?", yes: "Claude Cowork", no: null },
      { question: "Vous voulez qu'un profil métier monte l'agent lui-même, sans code ?", yes: "Agents d'espace de travail ChatGPT", no: null },
      { question: "Vous êtes sur Microsoft 365 et l'informatique veut tout centraliser ?", yes: "Microsoft Copilot Studio", no: null },
      { question: "Vous devez connecter l'agent à vos outils et bases internes ?", yes: "Claude + MCP", no: null },
      { question: "Vous voulez tester une tâche longue autonome en usage individuel ?", yes: "Manus", no: null },
    ],

    // ─── GEO : titre et note du tableau N colonnes (équivalent panorama de keyFacts)
    comparisonTableMeta: {
      title: "Quatre plateformes d'agents, ligne par ligne",
      note: "Anthropic, OpenAI et Microsoft relus le 7 octobre 2026, Manus le 3 octobre. Regardez d'abord la ligne « coût des exécutions » : chez OpenAI comme chez Microsoft, faire tourner un agent se paie en plus du siège.",
    },
    comparisonTable: [
      { criterion: "Nom exact du produit", chatgpt: "Agents d'espace de travail et ChatGPT Work", claude: "Claude, qui intègre Cowork", manus: "Manus 2.0", copilot: "Copilot Studio et Copilot Cowork" },
      { criterion: "Jalons", chatgpt: "Agents en disponibilité générale le 21 mai 2026, ChatGPT Work le 9 juillet 2026", claude: "Cowork en disponibilité générale le 9 avril 2026, intégré à la conversation le 16 septembre 2026", manus: "Version 2.0 le 28 septembre 2026", copilot: "Copilot Cowork en disponibilité générale le 29 septembre 2026" },
      { criterion: "Offre minimum", chatgpt: "Business, 21 € le siège en formule annuelle", claude: "Pro à 20 $", manus: "Forfait mensuel en crédits", copilot: "Licence Microsoft Copilot (26 € HT) ou Copilot Studio à l'usage" },
      { criterion: "Coût des exécutions", chatgpt: "Crédits depuis le 6 juillet 2026, au-delà de l'enveloppe incluse", claude: "Compris dans les limites de l'offre, usage supplémentaire possible", manus: "Crédits du forfait", copilot: "Crédits Copilot pour les agents autonomes, Cowork à l'usage" },
      { criterion: "Agit sur des fichiers locaux", chatgpt: "Oui avec Work dans l'application de bureau, avec votre accord", claude: "Oui, cœur de Cowork", manus: "Oui, avec l'accès à votre ordinateur", copilot: "Fichiers OneDrive et SharePoint" },
      { criterion: "Création sans code", chatgpt: "Oui, en langage naturel ou depuis un modèle", claude: "Oui pour les tâches ; connecteurs MCP à configurer", manus: "Oui, en une instruction", copilot: "Oui, atelier low-code" },
      { criterion: "Tâches planifiées ou déclenchées", chatgpt: "Oui : planification, Slack et API", claude: "Oui, tâches planifiées", manus: "Oui, planifiées et sur événement", copilot: "Oui : Cowork planifie, ou démarre quand arrive un courriel ou une conversation Teams" },
      { criterion: "Standard MCP", chatgpt: "Oui, MCP personnalisés dans les agents", claude: "Oui, standard créé par Anthropic", manus: "Connecteurs propres (Gmail, Notion, Slack, Google Drive)", copilot: "Oui, MCP adopté par Microsoft Copilot" },
      { criterion: "Validation humaine des actions", chatgpt: "Écritures soumises à validation par défaut", claude: "Demande avant d'agir par défaut", manus: "Rien de publié à ce sujet", copilot: "Cowork demande l'accord avant toute action sensible, niveau de risque affiché" },
      { criterion: "Gouvernance et journaux", chatgpt: "Rôles par fonction, analytique des agents, console d'administration", claude: "Journaux d'audit et API de conformité sur Enterprise", manus: "Offre équipe avec authentification unique", copilot: "Supervision par l'administrateur, Purview" },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Les nouveautés intégrées depuis août 2026",
      items: [
        { date: "7 octobre 2026", text: "Microsoft documente Copilot Cowork en disponibilité générale depuis le 29 septembre : l'agent sollicite votre feu vert pour toute action sensible, niveau de risque à l'appui, se déclenche sur réception d'un courriel ou d'un message Teams et accepte jusqu'à 50 compétences personnalisées. Chez OpenAI, la fin des GPTs personnalisés est fixée au 11 décembre 2026 : chaque GPT migre vers un plugin, ses instructions devenant une compétence." },
        { date: "Septembre 2026", text: "Anthropic a intégré Cowork à la conversation de Claude le 16 septembre. Manus a repris ses activités indépendantes le 1er septembre, puis lancé Manus 2.0 le 28 septembre avec des automatisations déclenchées par événement." },
        { date: "Juillet 2026", text: "OpenAI a lancé ChatGPT Work le 9 juillet. Depuis le 6 juillet, les exécutions des agents d'espace de travail consomment des crédits, d'abord sur l'enveloppe incluse dans le siège Business." },
        { date: "Mai 2026", text: "Disponibilité générale des agents ChatGPT sur Business, Enterprise et Edu le 21 mai." },
                { date: "Correction", text: "Nous présentions les Skills comme une brique propre à chaque éditeur : Anthropic a publié le format Agent Skills en standard ouvert le 18 décembre 2025, et Manus l'a adopté en janvier 2026." },
        { date: "Correction", text: "Une version précédente prêtait à Copilot Cowork une validation systématique de chaque action ; la documentation de Microsoft limite cette demande aux actions sensibles, avec un niveau de risque." },
      ],
    },

    methodology:
      "Masteria conçoit des agents sur mesure et apprend aux équipes de ses clients à s'en servir ; le cabinet est né à Lyon en 2022. Nous avons éprouvé les quatre plateformes sur des cas courants : tri de prospects, courriels, rapports, circuits de validation. Les fonctions et les prix d'Anthropic, d'OpenAI et de Microsoft ont été relus le **7 octobre 2026** ; ceux de Manus datent de notre relevé du **3 octobre**. Versions de référence : **Claude avec Opus 5.5**, **agents ChatGPT sur Business**, **Manus 2.0**, **Microsoft Copilot Studio et Copilot Cowork**.",

    citations: [
      { name: "Billet d'Anthropic : Cowork rejoint chaque conversation (16 septembre 2026)", url: "https://claude.com/blog/cowork-is-now-claude" },
      { name: "Page produit de Claude Cowork", url: "https://claude.com/product/cowork" },
      { name: "Mises à jour publiées pour les applications Claude", url: "https://support.claude.com/en/articles/12138966-release-notes" },
      { name: "Prix de Claude Pro, Max, Team et Enterprise", url: "https://claude.com/pricing" },
      { name: "Annonce de Fable 5.1, pensé pour les travaux de plusieurs heures", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1" },
      { name: "Le format Agent Skills rendu public par Anthropic", url: "https://claude.com/blog/skills" },
      { name: "Naissance du protocole MCP, novembre 2024", url: "https://www.anthropic.com/news/model-context-protocol" },
      { name: "MCP confié à une fondation ouverte, décembre 2025", url: "https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation" },
      { name: "Mode d'emploi des agents ChatGPT pour Business et Enterprise", url: "https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business" },
      { name: "Nouveautés de l'offre Business, côté administrateurs", url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes" },
      { name: "Combien de crédits consomme un agent ChatGPT", url: "https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing" },
      { name: "Tâches longues avec ChatGPT Work et Codex", url: "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
      { name: "Chronologie des versions de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "Crédits et prix de Copilot Studio en France", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio" },
      { name: "Copilot Cowork : actions, accords et tâches planifiées", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
      { name: "Copilot Chat, licence Copilot et agents compris", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Claude chez Microsoft : sous-traitance et réglages pour l'Europe", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
      { name: "Lancement de Manus 2.0, 28 septembre 2026", url: "https://manus.im/fr/blog/introducing-manus-2-0" },
      { name: "Manus redevient indépendant, 1er septembre 2026", url: "https://manus.im/fr/blog/manus-resumes-independent-operations" },
      { name: "Annonce du rapprochement de Manus avec Meta, décembre 2025", url: "https://manus.im/fr/blog/manus-joins-meta-for-next-era-of-innovation" },
      { name: "Forfaits en crédits de Manus", url: "https://manus.im/pricing" },
    ],

    realCases: [
      {
        scenario: "Agent qui qualifie automatiquement les prospects entrants (200 par semaine)",
        feature: "Cas commercial : tri, enrichissement, notification",
        verdictText: "**Microsoft Copilot Studio gagne** si vous êtes sur Microsoft 365 : gouvernance centralisée, agents publiés dans Copilot compris dans la licence, crédits pour les agents autonomes. Côté OpenAI, un **agent ChatGPT** monte le même cas sans code et démarre par API depuis votre formulaire ; chiffrez les crédits de 200 exécutions par semaine, sachant qu'OpenAI estime une exécution typique entre 5 et 25 crédits. Pour un branchement sur une API interne, **Claude avec MCP** reste le plus souple.",
        winner: "copilot",
      },
      {
        scenario: "Agent qui prépare votre journée chaque matin (courriels, agenda, priorités)",
        feature: "Cas quotidien : assistant personnel",
        verdictText: "**Les agents ChatGPT gagnent** sur la simplicité : déclencheur à 7 h, sources (messagerie, agenda) et format se décrivent en langage naturel. **Microsoft Copilot** fait l'équivalent dans Outlook, grâce aux tâches planifiées de Cowork. **Claude** planifie aussi la tâche depuis la conversation, avec ses connecteurs de messagerie.",
        winner: "chatgpt",
      },
      {
        scenario: "Agent qui fait la veille concurrentielle et publie un rapport hebdomadaire",
        feature: "Cas métier : automatisation de la veille",
        verdictText: "**Manus tient bien** l'enchaînement recherche, synthèse et livrable avec Wide Research, et ses automatisations le relancent chaque semaine. Les **agents ChatGPT** font le même travail avec des garanties contractuelles d'entreprise. **Claude** prend l'avantage si le rapport doit atterrir au bon format dans le bon dossier : il écrit le fichier lui-même.",
        winner: "manus",
      },
      {
        scenario: "Agent qui gère le support client de premier niveau (questions fréquentes et escalade)",
        feature: "Cas service client : support automatisé",
        verdictText: "**Microsoft Copilot Studio** est le plus outillé pour un agent ouvert à vos clients sur le site web : canaux externes, supervision par l'administrateur, crédits Copilot à prévoir. Un **agent ChatGPT** relié au CRM et à Slack convient à une équipe support interne ; surveillez la consommation de crédits sur un canal qui tourne en continu.",
        winner: "copilot",
      },
      {
        scenario: "Agent qui automatise les relances commerciales (CRM et courriels)",
        feature: "Cas commercial : automatisation des relances",
        verdictText: "**Microsoft Copilot Studio gagne** dans un environnement Microsoft, avec un accès natif à Outlook et à vos données. Un **agent ChatGPT** connecté à HubSpot ou Salesforce est l'équivalent pour les autres CRM ; ses écritures restent soumises à validation par défaut. **Claude** reprend l'avantage si chaque relance doit partir d'un document que l'agent remplit et enregistre lui-même.",
        winner: "copilot",
      },
      {
        scenario: "Agent personnel qui prépare vos voyages d'affaires (vols, hôtels, train)",
        feature: "Cas individuel : assistant de voyage",
        verdictText: "**ChatGPT gagne** : ChatGPT Work navigue sur les sites de réservation, peut se connecter à ceux qui l'autorisent et demande confirmation avant toute réservation ou tout paiement. **Manus** fait l'équivalent en usage individuel. **Claude** s'en sort mieux pour produire un dossier de voyage propre. L'humain garde le clic de paiement, et c'est une garantie à conserver.",
        winner: "chatgpt",
      },
      {
        scenario: "Agent qui automatise un processus métier interne (validation et circuit d'approbation)",
        feature: "Cas d'entreprise : industrialisation d'un processus",
        verdictText: "**Microsoft Copilot Studio gagne** pour les entreprises sur Microsoft 365 : atelier low-code, gouvernance, agents publiés dans Copilot sans surcoût pour les titulaires de la licence. C'est le terrain pour lequel Microsoft a construit cet outil.",
        winner: "copilot",
      },
      {
        scenario: "Agent qui relève les prix publics de vos concurrents",
        feature: "Cas marketing : veille tarifaire",
        verdictText: "**Les agents ChatGPT gagnent** : ChatGPT Work navigue sur les sites et compare les prix sans configuration. **Claude avec MCP** est l'alternative dès qu'il faut brancher le résultat sur votre propre base de tarifs. Réserve légale à respecter : la collecte suit les conditions d'utilisation des sites visités, et certaines l'interdisent.",
        winner: "chatgpt",
      },
    ],

    mistakes: [
      {
        title: "Vouloir un agent autonome avant de maîtriser les usages de base",
        desc: "Beaucoup d'équipes veulent « un agent IA » avant de savoir formuler une demande ou formaliser une procédure réutilisable. Les projets échouent au premier obstacle. Validez d'abord les cas simples, puis investissez dans des agents autonomes.",
      },
      {
        title: "Budgéter les licences sans budgéter les exécutions",
        desc: "L'écart entre le devis et la facture vient presque toujours de là. Depuis le 6 juillet 2026, chaque exécution d'un agent ChatGPT entame un stock de crédits dès que l'enveloppe comprise dans le siège est vide ; chez Microsoft, les agents autonomes de Copilot Studio vident un pack de crédits et Copilot Cowork se facture à la consommation. Un agent qui tourne toutes les heures ne coûte pas le prix d'un agent hebdomadaire : chiffrez le volume d'exécutions avant de valider.",
      },
      {
        title: "Croire que les Skills sont une invention d'OpenAI",
        desc: "Anthropic a lancé les Skills le 16 octobre 2025 et publié leur format, Agent Skills, en standard ouvert le 18 décembre 2025 ; Manus l'a adopté en janvier 2026. Même logique pour MCP, le protocole de connexion aux outils qu'Anthropic a conçu et que ses concurrents (ChatGPT, Gemini, Microsoft Copilot) ont adopté. Cadrez vos automatisations sur ces formats ouverts pour limiter la dépendance à un atelier propriétaire.",
      },
      {
        title: "Négliger la gouvernance des données",
        desc: "Un agent qui accède à vos courriels, votre CRM ou votre intranet dispose d'un niveau de privilège élevé : il peut écrire à des clients, modifier des données, déclencher des achats. Fixez un périmètre d'action, une validation humaine pour toute action irréversible et des journaux. Les éditeurs vont dans ce sens : Claude demande avant d'agir, ChatGPT soumet les écritures à validation, Copilot Cowork réclame un accord avant toute action sensible.",
      },
      {
        title: "Sous-estimer les coûts cachés",
        desc: "Côté OpenAI, il faut l'offre Business, puis des crédits une fois l'enveloppe consommée. Copilot Studio se facture en crédits hors des agents publiés dans Copilot. Claude est inclus dès l'offre Pro, mais un branchement MCP sur vos outils internes demande du travail technique. Ajoutez la mise en place et la formation au budget.",
      },
      {
        title: "Penser qu'un agent IA remplace une équipe",
        desc: "Un agent prépare, enchaîne et exécute ; une personne valide et ajuste. Les déploiements qui tiennent organisent ce partage dès le départ, avec une personne responsable de chaque agent.",
      },
      {
        title: "Ignorer la localisation des données traitées par l'agent",
        desc: "Un agent transmet les données qu'il manipule aux serveurs de l'éditeur. Copilot traite les demandes européennes dans l'EU Data Boundary, la zone de traitement que Microsoft réserve à l'Europe, sauf quand un modèle d'Anthropic répond ; ChatGPT Enterprise ouvre stockage et calcul européens aux clients admissibles ; Claude n'a aucune région en Europe dans les applications d'Anthropic. Pour les flux les plus sensibles, un agent sur un modèle à poids ouverts hébergé chez vous reste l'option la plus sûre.",
      },
    ],

    faq: [
      {
        q: "Qu'appelle-t-on un agent IA ?",
        a: "C'est un programme construit autour d'un modèle de langage qui **passe à l'action** : il envoie un courriel, interroge un CRM, navigue sur le web ou modifie des fichiers, et enchaîne ces étapes sans attendre qu'on le relance. Un assistant de conversation classique répond, puis s'arrête. Notre glossaire IA en donne la définition complète.",
      },
      {
        q: "Quel est le meilleur agent IA pour une PME française en 2026 ?",
        a: "Sur Microsoft 365 : **Copilot Studio**, pour la gouvernance, avec Copilot Cowork pour exécuter des tâches. Sur un parc d'outils hétérogène : les **agents ChatGPT** de l'offre Business, les plus rapides à monter sans code. Pour automatiser un travail de bureau sur des fichiers : **Claude**, dès l'offre Pro à 20 $. Pour brancher l'agent sur vos outils internes : **Claude avec MCP**. Pour des essais individuels : **Manus**.",
      },
      {
        q: "Combien coûte un agent IA en entreprise ?",
        a: "La licence n'est que la première ligne. **ChatGPT** : Business à 21 € le siège chaque mois en formule annuelle, puis des crédits une fois l'enveloppe consommée (de 5 à 25 crédits pour une exécution typique, d'après OpenAI). **Microsoft** : licence Microsoft Copilot à 26 € HT, crédits Copilot pour les agents autonomes, Copilot Cowork à la consommation. **Claude** : dès l'offre Pro à 20 $. Viennent ensuite la mise en place (connexion aux outils, tests, gouvernance) et l'apprentissage par les utilisateurs.",
      },
      {
        q: "Claude Cowork ou agents ChatGPT : en quoi diffèrent-ils ?",
        a: "**Cowork** agit sur des fichiers et des applications : il ouvre vos documents, les modifie, en crée de nouveaux et enchaîne les étapes ; depuis le 16 septembre 2026, ces capacités sont disponibles dans n'importe quelle conversation de Claude, dès l'offre Pro. Les **agents ChatGPT** vivent dans le cloud : on décrit leur rôle, leur déclencheur et leurs règles, on les partage dans l'équipe et on les planifie ; ils supposent l'offre Business et consomment des crédits depuis juillet 2026. Résumé pratique : Claude pour produire des livrables, les agents ChatGPT pour orchestrer un processus d'équipe.",
      },
      {
        q: "Les Skills sont-elles une nouveauté d'OpenAI ?",
        a: "Anthropic a lancé les Skills le 16 octobre 2025 et publié leur format, **Agent Skills**, en standard ouvert le 18 décembre 2025 ; Manus l'a adopté en janvier 2026. OpenAI propose ses propres Skills dans ChatGPT Business, Enterprise, Healthcare et Edu. Pour votre entreprise, l'enseignement est simple : une procédure formalisée dans un format ouvert reste réutilisable si vous changez d'éditeur.",
      },
      {
        q: "Les agents IA sont-ils sûrs en entreprise ?",
        a: "Tout dépend de la gouvernance mise en place : périmètre d'action limité, validation humaine pour toute action irréversible, journaux détaillés, tests réguliers, charte d'usage. Les éditeurs fournissent les garde-fous : Claude demande avant d'agir par défaut, ChatGPT soumet les écritures des agents à validation et OpenAI recommande des comptes de service pour les connexions partagées, Copilot Cowork demande l'accord avant chaque action sensible.",
      },
      {
        q: "Qu'est-ce que MCP (Model Context Protocol) ?",
        a: "MCP est un standard ouvert lancé par Anthropic le 25 novembre 2024 pour connecter un assistant à des outils tiers (bases de données, API, fichiers) de façon uniforme. Depuis décembre 2025, une fondation hébergée par la Linux Foundation, l'Agentic AI Foundation, que Block et OpenAI ont cofondée avec Anthropic, en assure la gouvernance ; ChatGPT, Cursor, Gemini et Microsoft Copilot l'ont adopté. On le compare souvent à un port USB-C pour les agents.",
      },
      {
        q: "Faut-il des compétences techniques pour déployer un agent IA ?",
        a: "Pas nécessairement. **Microsoft Copilot Studio** (low-code), les **agents ChatGPT** (description en langage naturel) et **Manus** sont accessibles à des profils fonctionnels formés. **Claude** s'utilise sans code sur des tâches de bureau, mais brancher MCP sur vos outils internes demande un profil technique. Une progression sûre : un agent simple sur un cas balisé, puis la montée en complexité une fois la valeur prouvée.",
      },
      {
        q: "Comment former une équipe à utiliser des agents IA ?",
        a: "On commence par les bases (formuler une demande, écrire une procédure réutilisable) avant de passer aux agents autonomes, puis on traite la gouvernance : périmètre d'action, validation humaine, journaux. Chez Masteria, la journée intra se facture **1 980 € HT**, TVA de 20 % à ajouter, pour douze personnes au maximum ; l'OPCO de votre branche décidera de la financer ou non selon ses critères.",
      },
      {
        q: "Manus est-il une alternative sérieuse aux agents ChatGPT ?",
        a: "Manus est un agent généraliste pensé pour les tâches longues, et sa version 2.0 du 28 septembre 2026 ajoute automatisations et ordinateur cloud. Son parcours récent appelle la prudence en entreprise : rapprochement avec Meta annoncé fin 2025, retour à l'indépendance le 1er septembre 2026, avec sauvegarde et restauration de données pour certains utilisateurs. Pour un usage individuel, oui ; pour un déploiement, testez sur des données non sensibles et lisez les garanties contractuelles.",
      },
    ],

    relatedLinks: [
      { label: "Quelle est la meilleure IA en 2026 ?", href: "/quelle-est-la-meilleure-ia" },
      { label: "Formation agents IA", href: "/formation-agents-ia" },
      { label: "Comparatif ChatGPT vs Claude", href: "/chatgpt-vs-claude" },
      { label: "Comparatif Copilot vs ChatGPT", href: "/copilot-vs-chatgpt" },
      { label: "Glossaire IA : agent IA", href: "/glossaire-ia#agent-ia" },
      { label: "Glossaire IA : MCP", href: "/glossaire-ia#mcp" },
      { label: "Conseil IA pour entreprises", href: "/conseil-intelligence-artificielle" },
      { label: "Formation Claude IA", href: "/formation-claude-ia" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // toolA = Mistral AI, toolB = ChatGPT : angle hébergement et souveraineté
  // ═══════════════════════════════════════════════════════════════════
  "mistral-vs-chatgpt": {
    slug: "mistral-vs-chatgpt",
    metaTitle: "Mistral (Vibe) vs ChatGPT 2026 : lequel choisir ? | Masteria",
    metaDesc:
      "Mistral AI (Vibe) ou ChatGPT : données dans l'UE, poids ouverts, entraînement sur vos échanges, fonctions et prix. Comparatif revu le 7 octobre 2026.",
    h1: "Mistral AI vs ChatGPT : souveraineté française ou écosystème américain ?",
    intro:
      "Depuis le 28 mai 2026, l'assistant de **Mistral AI** s'appelle **Vibe**. En face, **ChatGPT** (OpenAI) converse avec **GPT-5.6** et confie ses tâches longues à la famille **GPT-6**. Derrière le réflexe patriotique, le choix tient en quatre questions concrètes : où vos données sont traitées, ce que vous pouvez installer sur vos propres serveurs, ce que l'outil sait faire au-delà de la rédaction, et l'usage qu'il fait de vos échanges. Nous formons des équipes aux deux outils ; ce comparatif rassemble ce que nous en retenons au 7 octobre 2026.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "7 octobre 2026",
    datePublished: "2026-06-02",
    dateModified: "2026-10-07",
    readTime: "9 minutes",
    keywords:
      "mistral vs chatgpt, vibe mistral, le chat renommé vibe, ia souveraine française, mistral poids ouverts, mistral medium 3.5, mistral large 4, comparatif mistral chatgpt 2026, gpt-6, ia hébergée en europe",

    // ─── Textes de section propres à ce comparatif (lus par ComparisonPage via `textes`)
    textes: {
      legende: "Mistral AI et ChatGPT au 7 octobre 2026, d'après les pages de Mistral AI et d'OpenAI.",
      criteres: "Sept critères, du lieu de traitement des données au prix d'un siège, établis à partir des pages officielles et de nos sessions sur Vibe et ChatGPT.",
      casTitre: "Trois dossiers où la question des données change le verdict",
      cas: "Un appel d'offres public, une campagne multicanal, des rapports de R&D confidentiels : trois demandes où l'hébergement compte autant que la qualité du texte.",
      metiersTitre: "Le bon choix selon votre secteur ou votre fonction",
      metiers: "Nos recommandations varient avec le secteur et la sensibilité des fichiers manipulés ; elles viennent des formations Mistral et ChatGPT que nous animons.",
      erreursTitre: "Quatre erreurs quand on oppose Mistral et ChatGPT",
      erreurs: "Ces confusions reviennent dès qu'une équipe parle d'IA souveraine.",
      alternativesTitre: "Trois autres options à mettre dans la balance",
      alternatives: "Si ni Mistral ni ChatGPT ne coche toutes vos cases, ces outils méritent un essai.",
      ctaTitre: "Essayez Vibe et ChatGPT sur vos propres documents",
      ctaTexte: "La formation multi-outils de Masteria fait travailler vos équipes deux jours sur Vibe, ChatGPT, Claude, Copilot et Gemini, avec leurs dossiers et une règle nette sur les informations autorisées à quitter l'entreprise. Organisme certifié Qualiopi au titre des actions de formation, Masteria prépare programme et convention ; l'OPCO de votre branche décide ensuite s'il finance la session, selon ses règles.",
    },

    // ─── Ce que nos formations ont montré (sources : missions-formation.js, etudes-de-cas.js cas `photovoltaique`)
    terrain: {
      titre: "Ce que nos formations Mistral et ChatGPT ont montré",
      paras: [
        "En septembre 2026, une [interprofession agricole](/etudes-de-cas-ia#mission-interprofession-agricole) et son syndicat de producteurs ont mis Vibe et ChatGPT côte à côte, avec quatre autres assistants, sur des documents publics du secteur. Le groupe a terminé la plénière avec sa propre grille de choix, puis chaque participant a appris à ranger ses situations en trois cases (autorisé, à vérifier, interdit) selon le compte utilisé et la nature des données.",
        "Chez une [PME de distribution photovoltaïque](/etudes-de-cas-ia#photovoltaique), la confidentialité a été posée comme condition de départ : abandon des abonnements personnels au profit de comptes que l'entreprise administre, aucune donnée réutilisée pour entraîner les modèles, et une inscription au registre RGPD. Sur Vibe, c'est le premier réglage que nous faisons vérifier, puisque l'entraînement y reste actif par défaut hors offre Enterprise.",
      ],
    },

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Vibe ou ChatGPT : que choisir pour vos équipes en 2026 ?",
      answer:
        "Prenez **Mistral AI** quand l'endroit où vivent vos données pèse dans la décision : l'éditeur est français, Vibe stocke par défaut dans l'Union européenne, et ses modèles à poids ouverts (téléchargeables pour tourner sur vos serveurs) vont jusqu'à **Mistral Medium 3.5**, son modèle phare. Un réglage s'impose dès l'ouverture : hors Enterprise, Mistral entraîne ses modèles sur les échanges Vibe sauf refus de l'utilisateur, et sur Team l'administrateur peut couper cet usage pour tout le monde. Prenez **ChatGPT** pour l'étendue des fonctions : GPT-5.6 Sol dans la conversation, famille GPT-6 dans ChatGPT Work et Codex, ChatGPT Images 2.5, agents d'équipe. La méthode qui fonctionne consiste à classer vos flux : le sensible va chez Mistral ou reste en interne, le reste suit l'outil que les équipes préfèrent.",
      bullets: [
        "Secteur public, défense, santé : Mistral, données dans l'UE",
        "Modèle installé sur vos propres serveurs : Mistral et ses poids ouverts",
        "Visuels et plugins : ChatGPT",
        "Agents d'équipe prêts à l'emploi : ChatGPT",
        "Courriels, notes et synthèses en français : l'un ou l'autre",
      ],
    },

    toolA: {
      id: "mistral",
      name: "Mistral AI",
      editor: "Mistral AI",
      currentModel: "Medium 3.5, Large 3, Small 4, Large 4 en préversion par API · assistant Vibe",
      country: "France",
      pricing: "Vibe gratuit · Pro 17,99 € TTC par mois · Team 29,99 € TTC par utilisateur · Enterprise sur devis · poids ouverts téléchargeables",
      foundedAI: "2023",
      color: "#FF7000",
    },
    toolB: {
      id: "chatgpt",
      name: "ChatGPT",
      editor: "OpenAI",
      currentModel: "Échanges sur GPT-5.6 Sol, tâches longues et code sur la famille GPT-6",
      country: "États-Unis",
      pricing: "Go 8 € · Plus 23 € · Business 21 € par siège (annuel) · Pro dès 103 € · grille France",
      foundedAI: "2022",
      color: "#10A37F",
    },

    // ─── GEO : tableau de faits datés, lisible en HTML brut par un moteur génératif
    keyFacts: {
      title: "Mistral et ChatGPT en dix lignes",
      note: "Données relues le 7 octobre 2026 chez Mistral AI et chez OpenAI. Mistral affiche ses prix hors taxes en dollars (Pro 14,99 $, Team 24,99 $) ; les montants toutes taxes comprises en euros proviennent de notre relevé du 3 octobre. OpenAI ne dit pas si sa grille française s'entend HT ou TTC.",
      rows: [
        { criterion: "Assistant", a: "Vibe depuis le 28 mai 2026 ; conversation et mode Work réunis le 22 septembre, Vibe Code pour les développeurs", b: "ChatGPT : conversation, ChatGPT Work, Codex" },
        { criterion: "Modèles", a: "Mistral Medium 3.5 (code compris), Large 3, Small 4 ; Large 4 en préversion par API", b: "GPT-5.6 Sol en conversation ; GPT-6 Pro ajouté pour Business ; Astra et GPT-6.1 Sol dans Work et Codex" },
        { criterion: "Contexte dans l'interface", a: "Non publié par offre", b: "Plus et Business : 256 000 tokens si le modèle raisonne, 54 000 en réponse rapide" },
        { criterion: "Contexte par l'API", a: "256 000 tokens pour Medium 3.5 et Large 3", b: "1 050 000 tokens pour la famille GPT-6" },
        { criterion: "Installation chez vous", a: "Oui : poids ouverts, ou offre Enterprise sur site et en cloud privé", b: "Pas pour ChatGPT ; gpt-oss, modèles ouverts publiés en août 2025" },
        { criterion: "Lieu de stockage", a: "Union européenne par défaut, transferts ponctuels selon la fonction", b: "Hors d'Europe par défaut ; Enterprise et Edu peuvent tout garder en Europe" },
        { criterion: "Entraînement sur vos échanges", a: "Actif par défaut sauf Enterprise ; coupé par l'utilisateur, ou par l'administrateur sur Team", b: "Exclu sur Business et Enterprise ; refus possible sur les offres individuelles" },
        { criterion: "Images et vidéo", a: "Images générées dans Vibe", b: "ChatGPT Images 2.5 ; vidéo arrêtée avec Sora en 2026" },
        { criterion: "Agents et automatisations", a: "Skills (à la place des agents depuis le 22 septembre), tâches planifiées, MCP ajoutés par l'administrateur", b: "ChatGPT Work et agents d'équipe, payés en crédits passé l'enveloppe du siège" },
        { criterion: "Prix mensuel", a: "Pro 17,99 € TTC ; Team 29,99 € TTC par utilisateur", b: "Plus 23 € ; Business 21 € le siège en formule annuelle" },
      ],
    },

    verdict: {
      title: "Notre lecture en trente secondes",
      summary:
        "**Mistral AI** l'emporte quand vous devez garder la main sur vos données : éditeur français, stockage dans l'UE par défaut, modèles à poids ouverts installables chez vous, offre Enterprise sur site. Son assistant **Vibe** rassemble depuis le 22 septembre 2026 la conversation et le mode Work, avec Vibe Code pour les développeurs. **ChatGPT** reste devant sur l'étendue des fonctions : ChatGPT Work, ChatGPT Images 2.5, agents d'équipe, Codex. Secteurs régulés et commande publique penchent vers Mistral ; un usage polyvalent au quotidien penche vers ChatGPT. Dans les deux cas, vérifiez si vos échanges servent à entraîner les modèles : c'est le cas par défaut sur Vibe, hors Enterprise. Pour passer à la pratique : [formation Mistral AI](/formation-mistral-ai) ou [formation ChatGPT](/formation-chatgpt).",
      recommendA: ["Administrations et défense", "Fichiers sensibles : santé, droit, banque", "Hébergement imposé dans l'Union européenne", "Modèle installé sur vos propres machines"],
      recommendB: ["Un outil unique pour des usages variés", "Visuels et contenus de campagne", "Agents d'équipe et plugins", "Équipes déjà formées à ChatGPT"],
    },

    criteria: [
      {
        title: "Où vivent vos données",
        descriptionA:
          "Mistral AI, société française, conserve d'office les données sur le territoire de l'Union européenne. Elles ne rejoignent les États-Unis que si vous optez pour l'adresse américaine de l'API ; quelques fonctions font aussi appel à des sous-traitants hors UE, qu'un client Enterprise peut faire désactiver. Les modèles à poids ouverts tournent dans votre propre centre de données, et l'offre Enterprise s'installe sur site ou en cloud privé.",
        descriptionB:
          "OpenAI traite les données hors d'Europe par défaut. Un client Enterprise ou Edu qui y a droit peut stocker ses contenus et faire calculer les réponses en Europe ; Business propose un stockage européen en cours de déploiement, sans calcul européen. ChatGPT ne s'installe pas sur vos serveurs.",
        winner: "a",
        winnerText: "Net avantage Mistral, seul des deux à s'installer chez vous",
      },
      {
        title: "Rédaction en français",
        descriptionA:
          "Bon niveau sur les écrits professionnels du quotidien : courriels, notes, synthèses. En atelier, la différence avec ChatGPT ne se voit pas sur ces formats.",
        descriptionB:
          "Bon niveau aussi, avec un léger avantage en atelier sur les formats créatifs et les textes longs.",
        winner: "tie",
        winnerText: "Égalité sur le français de tous les jours",
      },
      {
        title: "Fonctions et écosystème",
        descriptionA:
          "Vibe réunit recherche web, images, Canvas de mini-applications, bibliothèques de documents avec citations, tâches planifiées et Skills ; depuis le 22 septembre 2026, il analyse aussi des fichiers Excel et CSV et crée des classeurs avec formules. Il se connecte à Outlook, Gmail, SharePoint, Slack et GitHub, et l'administrateur peut ajouter des MCP. Vibe Code travaille en ligne de commande, dans VS Code ou sur le web.",
        descriptionB:
          "ChatGPT ajoute ChatGPT Work pour les livrables complets, des agents d'équipe partagés, des extensions Word, Excel et PowerPoint, la recherche approfondie et des plugins que l'administrateur Business gère depuis le 1er octobre 2026.",
        winner: "b",
        winnerText: "Avantage ChatGPT sur l'étendue des fonctions",
      },
      {
        title: "Modèles",
        descriptionA:
          "Mistral décrit Medium 3.5 comme un modèle de classe frontière, multimodal, taillé pour les agents et le code. Small 4 rassemble dans un même modèle le suivi d'instructions, le raisonnement et le code, sous licence Apache 2.0, et Magistral est déprécié. Le 6 octobre 2026, Mistral a ajouté Large 4 à sa documentation, en préversion par API.",
        descriptionB:
          "OpenAI présente GPT-6 Astra comme son modèle le plus capable pour les travaux exigeants, et GPT-6.1 Sol comme un proche d'Astra à moindre coût. Dans la conversation des abonnés payants, GPT-5.6 Sol reste le modèle de base.",
        winner: "tie",
        winnerText: "Égalité sur le courant ; testez vos cas les plus durs",
      },
      {
        title: "RGPD, AI Act et confidentialité",
        descriptionA:
          "Éditeur européen soumis au RGPD et à l'AI Act, données dans l'Union par défaut, certifications ISO 27001 et 27701 et SOC 2 Type II. Point de vigilance : hors Enterprise, les échanges Vibe entraînent les modèles si personne ne refuse ; sur Team, l'administrateur peut couper ce réglage pour toute l'organisation.",
        descriptionB:
          "OpenAI exclut les échanges Business et Enterprise de l'entraînement et affiche SOC 2 Type II, ISO 27001, 27017, 27018 et 27701. Le transfert de données vers un prestataire américain s'écrit noir sur blanc dans votre analyse d'impact.",
        winner: "tie",
        winnerText: "Égalité : stockage européen chez Mistral, entraînement exclu d'office chez OpenAI",
      },
      {
        title: "Code",
        descriptionA:
          "Vibe Code s'appuie sur Mistral Medium 3.5, puisque l'éditeur a déprécié Devstral 2 le 22 mai 2026. Sa ligne de commande accepte n'importe quel modèle exposé par une API au format d'OpenAI, même sans connexion à internet.",
        descriptionB:
          "Codex mène des tâches de développement sur le poste ou dans le cloud, relit les pull requests et reçoit GPT-6.1 Sol depuis le 29 septembre 2026.",
        winner: "tie",
        winnerText: "Égalité : modèles ouverts côté Mistral, agent cloud côté OpenAI",
      },
      {
        title: "Prix d'un siège",
        descriptionA:
          "L'abonnement Pro revient à 17,99 € TTC par mois (14,99 $ hors taxes), le siège Team à 29,99 € TTC (facture d'au moins 50 $ par mois), Enterprise sur devis. Par l'API, Mistral Large 3 revient à 0,5 $ le million de tokens lus et à 1,5 $ le million de tokens produits.",
        descriptionB:
          "En France, l'offre Go coûte 8 € par mois, Plus 23 €, Pro à partir de 103 € ; un siège Business coûte 21 € en formule annuelle ou 26 € au mois, et Enterprise se négocie. Au-delà de l'enveloppe comprise, Work, Codex et les agents consomment des crédits.",
        winner: "tie",
        winnerText: "Mistral moins cher en individuel, ChatGPT Business moins cher en équipe à l'année",
      },
    ],

    useCases: [
      { metier: "Secteur public et parapublic", recommendation: "a", why: "Données stockées dans l'Union par défaut et installation sur site possible : le dossier de conformité avance plus vite." },
      { metier: "Juridique, santé, banque (données sensibles)", recommendation: "a", why: "Les poids ouverts permettent de traiter en interne les dossiers les plus sensibles." },
      { metier: "Marketing et communication", recommendation: "b", why: "Images, ChatGPT Work et extensions Office dans un même abonnement." },
      { metier: "Industrie et R&D confidentielle", recommendation: "a", why: "Plans, brevets et données de procédé restent sur vos serveurs avec un modèle auto-hébergé." },
      { metier: "Développement logiciel", recommendation: "tie", why: "Codex pour déléguer dans le cloud ; Vibe Code et Medium 3.5 quand le code ne doit pas sortir." },
      { metier: "Direction générale", recommendation: "tie", why: "ChatGPT pour la polyvalence, Mistral pour les sujets confidentiels." },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Les évolutions suivies depuis août 2026",
      items: [
        { date: "7 octobre 2026", text: "Mistral a ajouté Mistral Large 4 à sa documentation le 6 octobre, en préversion par API. Nous avons aussi précisé le réglage d'entraînement de l'offre Team : l'administrateur peut le couper pour toute l'organisation, sans attendre que chaque utilisateur le fasse." },
        { date: "Septembre 2026", text: "Le 22 septembre, Vibe a fusionné conversation et mode Work, avec une bascule Fast ou Think ; les Skills y remplacent les agents et une Knowledge Base remplace les mémoires. Vibe lit aussi Excel et CSV et crée des classeurs. Chez OpenAI, la famille GPT-6 a rejoint ChatGPT Work et Codex entre le 3 et le 29 septembre, tandis que la conversation gardait GPT-5.6." },
        { date: "Mai 2026", text: "Lancement du nom Vibe le 28 mai : l'assistant de Mistral AI gagne un mode Work pour les tâches en plusieurs étapes et un mode Code pour le développement. Compte, offre et historique ont été conservés." },
        { date: "Correction", text: "Nous citions Mistral Large et Magistral comme modèles actuels. Magistral est déprécié et la gamme s'organise autour de Medium 3.5, Large 3 et Small 4 ; par l'API, Medium 3.5 et Large 3 lisent 256 000 tokens, et non 128 000 comme nous l'écrivions." },
        { date: "Correction", text: "Nous affirmions que les modèles à poids ouverts n'avaient aucun équivalent américain, alors qu'OpenAI a mis gpt-oss en ligne en août 2025. Nous passions aussi sous silence l'entraînement par défaut sur les échanges Vibe hors Enterprise." },
        { date: "Correction", text: "Deux mentions périmées ont disparu : Sora 2, que nous citions pour produire des vidéos dans ChatGPT (application arrêtée en avril 2026), et Devstral 2 pour le code chez Mistral, que l'éditeur a déprécié le 22 mai 2026 au profit de Medium 3.5." },
      ],
    },

    methodology:
      "Masteria forme des équipes à Mistral AI comme à ChatGPT depuis Lyon, où le cabinet est né en 2022. Les verdicts de cette page viennent de mises en situation de formation, et les faits ont été contrôlés le **7 octobre 2026** à partir des pages de Mistral AI et d'OpenAI citées plus bas ; les prix de Mistral en euros reprennent notre relevé du 3 octobre, ces montants n'ayant pas pu être relus le 7. Versions comparées : **Vibe Pro avec Mistral Medium 3.5** face à **ChatGPT Plus et Business sur GPT-5.6 Sol**.",

    citations: [
      { name: "Mistral AI, grille des offres Vibe et de l'API", url: "https://mistral.ai/pricing" },
      { name: "Mistral AI, catalogue de ses modèles", url: "https://mistral.ai/models" },
      { name: "Fiche technique de Mistral Medium 3.5", url: "https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04" },
      { name: "Fiche technique de Mistral Large 3", url: "https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12" },
      { name: "Vibe Work et Vibe Code dans la documentation de Mistral AI", url: "https://docs.mistral.ai/getting-started/platform-overview" },
      { name: "Mistral AI explique le passage au nom Vibe", url: "https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe" },
      { name: "Mistral AI et l'entraînement sur les données des utilisateurs", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
      { name: "Mistral AI : pays où sont stockées les données", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
      { name: "Mistral AI : licences de ses modèles ouverts", url: "https://help.mistral.ai/en/articles/347393-under-which-license-are-mistral-s-open-models-available" },
      { name: "Mistral AI : certifications SOC 2 et ISO", url: "https://help.mistral.ai/en/articles/347638-do-you-have-soc-2-or-iso-27001-certification" },
      { name: "Mistral AI : fin des modèles de raisonnement Magistral", url: "https://docs.mistral.ai/resources/deprecated/native-reasoning" },
      { name: "OpenAI, grille française de ChatGPT", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "OpenAI, chronologie des mises à jour de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "OpenAI et la publication de gpt-oss (août 2025)", url: "https://help.openai.com/en/articles/9624314-model-release-notes" },
      { name: "OpenAI, modèles de conversation par offre", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "OpenAI, fiche de l'offre ChatGPT Business", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
      { name: "OpenAI, résidence européenne des données et des calculs", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "OpenAI, stockage des contenus Business", url: "https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored" },
      { name: "OpenAI, arrêt de l'application Sora", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
      { name: "OpenAI, modèles proposés aux développeurs", url: "https://developers.openai.com/api/docs/models" },
      { name: "Texte du règlement (UE) 2026/1744 modifiant l'AI Act", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    ],

    realCases: [
      {
        scenario: "Répondre à un appel d'offres public avec exigence de souveraineté",
        feature: "Mistral : hébergement dans l'UE, installation sur site · ChatGPT Enterprise : résidence européenne",
        prompt: "Notre collectivité exige que les données des usagers restent dans l'Union européenne et privilégie les solutions souveraines. Quelle architecture d'IA proposer pour un assistant de réponse aux usagers ?",
        verdictText: "**Mistral l'emporte** : stockage européen par défaut, et la possibilité d'installer un modèle à poids ouverts dans l'infrastructure de la collectivité. Côté ChatGPT, le même dossier exige l'offre Enterprise pour stocker et calculer en Europe, puis une analyse des transferts vers une société américaine.",
        winner: "a",
      },
      {
        scenario: "Produire une campagne multicanal complète avec visuels",
        feature: "ChatGPT Images 2.5 et ChatGPT Work · Vibe et ses images",
        prompt: "Lance la campagne de notre nouveau service : page d'atterrissage, séquence de 4 courriels, 6 publications LinkedIn, 8 visuels carrés cohérents avec notre charte (bleu nuit, minimaliste) et un script vidéo de 45 secondes.",
        verdictText: "**ChatGPT prend l'avantage** : textes, visuels fidèles à la charte grâce à ChatGPT Images 2.5, script et retouches restent dans un seul outil, que ChatGPT Work peut assembler. Vibe écrit les textes et génère des images, au prix de plus d'allers-retours pour garder huit visuels cohérents. Le film lui-même sort du périmètre de ChatGPT depuis l'arrêt de Sora.",
        winner: "b",
      },
      {
        scenario: "Analyser des documents de R&D confidentiels sans sortie de données",
        feature: "Mistral à poids ouverts, sur vos serveurs · ChatGPT Enterprise",
        prompt: "Synthétise ces 30 rapports d'essais internes et identifie les 5 pistes d'amélioration de procédé les plus prometteuses. Contrainte absolue : aucune donnée ne doit quitter notre réseau.",
        verdictText: "**Seul Mistral respecte la consigne à la lettre** : un modèle à poids ouverts installé sur l'infrastructure interne lit les rapports sans qu'aucune donnée ne sorte. ChatGPT Enterprise apporte des garanties contractuelles et un hébergement européen, mais les documents transitent par les serveurs d'OpenAI, ce que la consigne interdisait.",
        winner: "a",
      },
    ],

    mistakes: [
      {
        title: "Croire qu'un outil souverain est forcément moins bon",
        desc: "Mistral présente Medium 3.5 comme un modèle de classe frontière pour les agents et le code. Sur la rédaction, la synthèse ou l'analyse de documents, jugez sur vos propres dossiers plutôt que sur une réputation.",
      },
      {
        title: "Comparer Vibe gratuit et ChatGPT Plus",
        desc: "Une formule gratuite est bridée, chez Mistral comme chez OpenAI. Pour un essai loyal, mettez Vibe Pro face à ChatGPT Plus, sur vos usages, pendant deux semaines.",
      },
      {
        title: "Choisir la souveraineté par principe, sans regarder vos flux",
        desc: "Vos usages n'ont pas tous la même sensibilité. Envoyez les flux sensibles vers Mistral ou vers un modèle installé chez vous, et laissez le reste sur l'outil que vos équipes préfèrent : la cartographie vient avant le choix.",
      },
      {
        title: "Laisser l'entraînement actif sur Vibe",
        desc: "Hors Enterprise, Mistral entraîne ses modèles sur les échanges Vibe par défaut, sauf opposition. Sur Team, un administrateur désactive l'option pour tout le monde en une fois ; sur Enterprise, vos échanges sont exclus d'office.",
      },
    ],

    alsoConsidered: [
      { name: "Claude (Anthropic)", summary: "Avale un million de tokens par conversation quand on paie un abonnement, mais n'offre aucune région européenne : à réserver aux données qui peuvent quitter l'Union. Voir [ChatGPT vs Claude](/chatgpt-vs-claude)." },
      { name: "Gemini (Google)", summary: "Compris dans les forfaits Google Workspace : le choix logique si votre messagerie est Gmail. Voir [Gemini vs Copilot](/gemini-vs-copilot)." },
      { name: "gpt-oss (OpenAI)", summary: "Les modèles à poids ouverts d'OpenAI, publiés en août 2025, pour un usage interne qui ne passe pas par ChatGPT." },
    ],

    faq: [
      {
        q: "Mistral est-il 100 % souverain ?",
        a: "Mistral AI est une société française qui héberge par défaut les données de ses clients dans l'Union européenne, et ses modèles à poids ouverts peuvent tourner chez vous. Trois nuances honnêtes : certaines fonctions passent ponctuellement par des sous-traitants hors UE, l'API propose aussi un point d'accès américain, et seul un client Enterprise peut faire désactiver les fonctions concernées. Votre niveau de souveraineté dépend donc du mode de déploiement retenu.",
      },
      {
        q: "« Poids ouverts » : de quoi parle-t-on ?",
        a: "Un modèle à poids ouverts publie ses poids, ces paramètres appris pendant l'entraînement : vous le téléchargez et le faites tourner sur vos serveurs, sans rien envoyer à l'éditeur. Small 4 et Large 3 sont sous licence Apache 2.0 ; Medium 3.5 relève d'une licence MIT modifiée, qui impose une licence commerciale aux entreprises dépassant 20 millions de dollars de chiffre d'affaires mensuel, sauf usage par Mistral Studio.",
      },
      {
        q: "Pourquoi Le Chat s'appelle-t-il maintenant Vibe ?",
        a: "Mistral AI a donné le nom **Vibe** à son assistant le **28 mai 2026**, en élargissant l'offre : un mode Work pour les tâches de bureau en plusieurs étapes, un mode Code pour le développement. Depuis le 22 septembre 2026, la conversation et le mode Work ne forment plus qu'une seule expérience, avec un interrupteur qui passe d'une réponse rapide à une réflexion plus longue. Compte, abonnement, historique et réglages ont suivi, et l'adresse chat.mistral.ai n'a pas changé.",
      },
      {
        q: "Vibe peut-il remplacer ChatGPT au quotidien ?",
        a: "Pour rédiger, synthétiser, analyser un document ou traduire, oui. L'écart tient aux fonctions propres à ChatGPT : ChatGPT Work, agents d'équipe partagés, extensions Office, génération de sites. Faites la liste de vos usages avant de trancher ; c'est l'exercice d'ouverture de notre formation multi-outils.",
      },
      {
        q: "Combien de texte Vibe et ChatGPT lisent-ils d'un coup ?",
        a: "Sur ChatGPT Plus et Business, la conversation garde 256 000 tokens quand le modèle raisonne et 54 000 en mode rapide ; par l'API, la famille GPT-6 monte à 1 050 000. Chez Mistral, Medium 3.5 et Large 3 lisent 256 000 tokens par l'API, et l'interface Vibe ne publie pas de limite par offre. Pour un document unique de plusieurs centaines de pages, Claude et Gemini (dès Business Standard) acceptent un million de tokens dans leur interface.",
      },
      {
        q: "RGPD et AI Act : lequel choisir ?",
        a: "Les deux peuvent être conformes. Le stockage européen de Mistral simplifie l'analyse des transferts, à condition de couper l'entraînement sur les échanges hors Enterprise. Chez OpenAI, l'offre Enterprise permet de stocker et de calculer en Europe. Dans les deux cas, l'AI Act s'applique : son article 4, que le règlement (UE) 2026/1744 a réécrit avec effet au 27 juillet 2026, demande aux entreprises des mesures concrètes pour que leurs salariés comprennent et maîtrisent les outils d'IA qu'ils utilisent.",
      },
      {
        q: "Peut-on utiliser Mistral et ChatGPT en parallèle ?",
        a: "Oui : ChatGPT, ou Claude, pour la polyvalence de tous les jours, Mistral pour les flux sensibles et les métiers régulés. Les deux se pilotent avec des demandes formulées de la même façon, ce qui allège la formation.",
      },
      {
        q: "Combien coûte une formation Mistral ou ChatGPT pour mes équipes ?",
        a: "Une journée de formation à Mistral AI ou à ChatGPT coûte **1 980 € HT** chez Masteria, TVA en sus au taux de 20 %, que ce soit pour un groupe intra de douze participants au plus ou pour un stagiaire seul. Notre certification Qualiopi permet à votre OPCO de branche d'accepter de la financer, selon ses règles. Le format multi-outils compare les deux sur vos dossiers avant que vous choisissiez.",
      },
    ],

    relatedLinks: [
      { label: "Formation Mistral AI pour entreprises", href: "/formation-mistral-ai" },
      { label: "Formation ChatGPT pour entreprises", href: "/formation-chatgpt" },
      { label: "Comparatif ChatGPT vs Claude", href: "/chatgpt-vs-claude" },
      { label: "Quelle est la meilleure IA en 2026 ?", href: "/quelle-est-la-meilleure-ia" },
      { label: "IA et RGPD : ce que dit le règlement européen", href: "/ia-et-rgpd" },
      { label: "Conseil IA pour entreprises", href: "/conseil-intelligence-artificielle" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // toolA = Google Gemini, toolB = Microsoft Copilot : angle suite bureautique
  // ═══════════════════════════════════════════════════════════════════
  "gemini-vs-copilot": {
    slug: "gemini-vs-copilot",
    metaTitle: "Gemini vs Copilot 2026 : lequel choisir ? | Masteria",
    metaDesc:
      "Google Gemini ou Microsoft Copilot : Workspace ou Microsoft 365, coût par siège, agents, Gemini Notebook, compétences. Comparatif revu le 7 octobre 2026.",
    h1: "Google Gemini vs Microsoft Copilot : le match des suites bureautiques",
    intro:
      "Entre **Gemini** (Google) et **Microsoft Copilot** (anciennement Microsoft 365 Copilot), la suite bureautique que vous payez déjà décide presque tout. Gemini travaille dans Google Workspace (Gmail, Docs, Sheets, Meet) et figure dans chaque forfait, de Business Starter à Enterprise. Copilot travaille dans Microsoft 365 (Outlook, Word, Excel, Teams) : Copilot Chat est compris, la licence complète coûte 26 € HT par mois et par siège, ou 18,20 € HT avec Copilot Business pour les structures de 300 utilisateurs au plus. Mis à jour le 7 octobre 2026, ce comparatif détaille ce que chacun fait bien, ce qu'il coûte une fois les options ajoutées, et la marche à suivre quand votre parc mélange les deux mondes.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "7 octobre 2026",
    datePublished: "2026-06-02",
    dateModified: "2026-10-07",
    readTime: "9 minutes",
    keywords:
      "gemini vs copilot, gemini workspace, microsoft copilot prix, copilot business prix, gemini notebook 300 sources, workspace studio, gemini enterprise, workflow builder, compétences gemini, comparatif gemini copilot 2026",

    // ─── Textes de section propres à ce comparatif (lus par ComparisonPage via `textes`)
    textes: {
      legende: "Gemini dans Workspace et Copilot dans Microsoft 365, relevé du 7 octobre 2026 (prix France en engagement annuel, Gemini Enterprise en dollars).",
      criteres: "Huit critères, de l'intégration aux réunions jusqu'au coût par siège, vérifiés chez Google et chez Microsoft puis éprouvés dans nos formations sur les deux suites.",
      casTitre: "Trois chantiers de bureau, deux suites face à face",
      cas: "Une réunion à résumer, une note à transformer en présentation, un agent RH à ouvrir à toute l'entreprise : trois demandes où la suite installée pèse lourd.",
      metiersTitre: "Gemini ou Copilot, selon votre organisation",
      metiers: "Le bon copilote dépend d'abord de votre parc logiciel, ensuite des métiers ; ces choix viennent de nos sessions Gemini et Copilot.",
      erreursTitre: "Quatre pièges du choix entre Gemini et Copilot",
      erreurs: "Ils coûtent souvent plus cher que la licence elle-même.",
      alternativesTitre: "Ce qui complète un copilote de suite",
      alternatives: "Un assistant généraliste s'ajoute souvent au copilote de la suite, pour les personnes qui s'en serviront.",
      ctaTitre: "Gemini ou Copilot : laissez vos équipes juger sur leurs fichiers",
      ctaTexte: "Pendant deux jours, la formation multi-outils fait travailler Gemini, Copilot, ChatGPT, Claude et Mistral sur les mails, les tableaux et les comptes rendus de vos collaborateurs. Masteria, certifié Qualiopi au titre des actions de formation, fournit programme et convention ; à l'OPCO de votre branche ensuite de statuer sur le financement, d'après ses règles.",
    },

    // ─── Ce que nos formations ont montré (sources : missions-formation.js, mission `franchise-gemini`, et etudes-de-cas.js, cas `industrie`)
    terrain: {
      titre: "Les deux suites vues depuis nos formations",
      paras: [
        "En septembre 2026, huit membres de la direction d'un [réseau de franchise B2B](/etudes-de-cas-ia#mission-franchise-gemini), installé sous Google Workspace Business Standard, ont passé deux jours avec Gemini dans Gmail, Meet, Sheets, Docs et Slides. Ils ont bâti un flux Workspace Studio qui, une fois par semaine, prépare les relances des devis sans retour, et un carnet Gemini Notebook nourri des procédures du réseau. Leurs deux administrateurs ont consacré une troisième journée à la console, à la sécurité et à une charte d'usage.",
        "Côté Microsoft, un groupe international du packaging a fait suivre à [24 managers pilotes](/etudes-de-cas-ia#industrie) deux jours de formation à Copilot, sur treize ateliers bâtis à partir de documents du groupe. Dans leurs retours écrits, les participants citent d'abord ce point : chaque atelier partait d'un document qu'ils manipulent au travail.",
      ],
    },

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Gemini ou Copilot : lequel retenir en 2026 ?",
      answer:
        "Votre suite tranche. Sous **Google Workspace**, prenez **Gemini**, compris dans les forfaits : dès Business Standard (13,60 € par utilisateur et par mois en engagement annuel), l'application Gemini accepte **un million de tokens**, Gemini Notebook (anciennement NotebookLM) interroge **300 sources par carnet** et Workspace Studio enchaîne des actions décrites en phrases ordinaires. Sous **Microsoft 365**, prenez **Copilot** : sa licence (26 € HT par siège, 18,20 € HT pour Copilot Business sous le seuil de 300 utilisateurs) ancre les réponses dans Microsoft Graph, et Copilot Studio fabrique les agents métier. Deux pièges budgétaires : chez Google, l'atelier d'agents Workflow Builder suppose **Gemini Enterprise**, licence distincte à partir de 21 $ par siège ; chez Microsoft, les agents autonomes et Copilot Cowork se paient à l'usage.",
      bullets: [
        "Courriels Gmail, documents Docs, réunions Meet : Gemini, déjà payé avec le forfait",
        "Outlook, Word, Excel et Teams au quotidien : Copilot",
        "Corpus à interroger avec citations : Gemini Notebook, jusqu'à 300 sources dans un carnet en Business Standard",
        "Agents métier sous contrôle du service informatique : Copilot Studio",
        "Parc mixte : trois cas d'usage testés sur chaque suite, licence complète chiffrée",
      ],
    },

    toolA: {
      id: "gemini",
      name: "Google Gemini",
      editor: "Google",
      currentModel: "Modèles Gemini 3.x : Rapide, Raisonnement et Pro dans l'application",
      country: "États-Unis",
      pricing: "Compris dans Workspace : Business Standard à 13,60 € par utilisateur et par mois (annuel) · Gemini Enterprise dès 21 $ pour l'atelier d'agents",
      foundedAI: "2023",
      color: "#4285F4",
    },
    toolB: {
      id: "copilot",
      name: "Microsoft Copilot",
      editor: "Microsoft",
      currentModel: "Mode Auto, modèles OpenAI ou Anthropic selon la tâche, réponses ancrées dans Graph",
      country: "États-Unis",
      pricing: "Copilot Chat compris · licence à 26 € HT mensuels le siège · Copilot Business à 18,20 € HT (300 utilisateurs au plus)",
      foundedAI: "2023",
      color: "#0078D4",
    },

    // ─── GEO : tableau de faits datés, lisible en HTML brut par un moteur génératif
    keyFacts: {
      title: "Gemini et Copilot, point par point",
      note: "Relevé du 7 octobre 2026 chez Google Workspace, Google Cloud et Microsoft. Prix pour la France en engagement annuel, hors taxes chez Microsoft ; Google ne précise pas HT ou TTC sur sa grille, et Gemini Enterprise s'affiche en dollars.",
      rows: [
        { criterion: "Modèles", a: "Gemini 3.x : 3.8 Flash et 3.1 Pro côté API ; dans l'application, trois modes (Rapide, Raisonnement, Pro)", b: "Mode Auto entre OpenAI et Anthropic ; Claude coupé par défaut pour les clients européens" },
        { criterion: "Prix pour une équipe", a: "Compris dans Workspace : Starter 6,80 €, Standard 13,60 €, Plus 21,10 € par utilisateur et par mois", b: "26 € HT par siège en plus de Microsoft 365, ou 18,20 € HT en Copilot Business" },
        { criterion: "Applications couvertes", a: "Gmail, Chat, Meet, Drive, Docs, Sheets, Slides et Vids ; Starter limité à Gmail et à l'application", b: "Teams, Outlook, Word, Excel, PowerPoint, OneNote, Forms" },
        { criterion: "Contexte dans l'application", a: "Un million de tokens à partir de Business Standard ; Business Starter reste à 32 000", b: "Aucune fenêtre publiée ; Graph extrait le passage utile" },
        { criterion: "Accès aux données internes", a: "Dans la limite des droits Drive et des applications connectées", b: "Par Microsoft Graph et Work IQ, avec la licence" },
        { criterion: "Corpus documentaire", a: "Gemini Notebook : 300 sources par carnet en Standard et Plus, 100 en Starter", b: "Copilot Search et index sémantique des contenus Microsoft 365" },
        { criterion: "Automatisations sans code", a: "Workspace Studio, flux décrits en langage naturel ; limites effectives au 1er novembre 2026", b: "Copilot Studio (low-code) ; tâches planifiées ou déclenchées par un mail dans Copilot Cowork" },
        { criterion: "Atelier d'agents métier", a: "Workflow Builder, réservé à Gemini Enterprise (dès 21 $ par siège)", b: "Copilot Studio : publication dans Copilot sans surcoût pour les porteurs de licence ; crédits pour le reste" },
        { criterion: "Images et vidéo", a: "Images Nano Banana Pro, 30 par mois en Standard ; Vids : 500 secondes de vidéo mensuelles", b: "Images dans Copilot Chat si l'administrateur l'autorise" },
        { criterion: "Entraînement sur vos données", a: "Non : aucun humain ne relit vos contenus, et ils ne servent à aucun entraînement hors de votre domaine", b: "Non : prompts et réponses exclus de l'entraînement" },
        { criterion: "À faire avant d'ouvrir", a: "Repérer les partages Drive trop larges", b: "Auditer SharePoint : Graph met au jour les sur-partages" },
      ],
    },

    verdict: {
      title: "Le verdict en une minute",
      summary:
        "La règle tient en trois mots : **votre suite décide**. Sous Google Workspace, Gemini est compris dans le forfait, avec un million de tokens et Gemini Notebook dès Business Standard. Sous Microsoft 365, Copilot coûte davantage avec sa licence, mais il s'ancre profondément dans Outlook, Teams et Excel et offre, avec Copilot Studio, l'atelier d'agents le mieux outillé des deux. Dans chaque camp, l'automatisation poussée se paie à part : Workflow Builder suppose Gemini Enterprise, Copilot Studio et Copilot Cowork consomment des crédits. Si votre parc mélange les deux suites, testez trois cas d'usage sur chacune. Nos formations [Google Gemini](/formation-gemini-entreprise) et [Microsoft Copilot](/formation-microsoft-copilot) partent de vos propres fichiers.",
      recommendA: ["Organisation sous Google Workspace", "Budget serré : l'IA est déjà dans le forfait", "Corpus documentaires et documents longs", "Équipes qui vivent dans Gmail, Docs et Meet"],
      recommendB: ["Organisation sous Microsoft 365", "Usage intensif d'Outlook, de Teams et d'Excel", "Agents métier construits avec Copilot Studio", "Service informatique déjà outillé par Microsoft"],
    },

    criteria: [
      {
        title: "Place dans la suite bureautique",
        descriptionA:
          "À partir de Business Standard, on trouve Gemini dans Gmail, Chat, Meet, Drive, Docs, Sheets, Slides et Vids. Business Starter reste en accès réduit : Gemini dans Gmail, l'application Gemini et des quotas plus bas dans Vids.",
        descriptionB:
          "Copilot se trouve dans Teams, Outlook, Word, Excel, PowerPoint et OneNote. Avec la licence, il puise dans Microsoft Graph, donc dans vos mails, vos fichiers et vos réunions, sans dépasser les droits existants.",
        winner: "tie",
        winnerText: "Égalité : chacun excelle chez lui",
      },
      {
        title: "Modèles et quotas",
        descriptionA:
          "Dès Business Standard, une conversation dans l'application Gemini peut contenir un million de tokens. Au 7 octobre 2026, un compte Business Standard dispose chaque jour de 200 requêtes Pro, de 600 requêtes Thinking et de 20 Deep Research ; Business Starter plafonne à 25 requêtes Pro toutes les quatre heures et à 32 000 tokens. Pour les développeurs, l'API propose Gemini 3.8 Flash en version stable et 3.1 Pro en préversion.",
        descriptionB:
          "Copilot choisit lui-même le modèle en mode Auto, entre OpenAI et Anthropic, et propose une réflexion approfondie. Microsoft ne publie pas de fenêtre de contexte : Graph sélectionne l'extrait pertinent au lieu de charger le document entier.",
        winner: "a",
        winnerText: "Avantage Gemini sur les longs documents",
      },
      {
        title: "Coût réel par siège",
        descriptionA:
          "Gemini fait partie du forfait Workspace : 13,60 € par utilisateur et par mois en Business Standard, 21,10 € en Business Plus, en engagement annuel. Le module AI Expanded Access relève les plafonds des gros utilisateurs, à un prix que Google ne publie pas, et Gemini Enterprise, dès 21 $ par siège, donne accès à l'atelier d'agents.",
        descriptionB:
          "Copilot Chat est compris. La licence revient à 26 € HT mensuels par siège sur un an ; Copilot Business, limité à 300 utilisateurs, la ramène à 18,20 € HT (21,84 € HT en paiement mensuel, et une remise à 15,60 € HT pendant un an pour les clients existants qui s'engagent d'ici la fin 2026), toujours en plus de Microsoft 365. Studio et Cowork se règlent à l'usage.",
        winner: "a",
        winnerText: "Net avantage Gemini : il est déjà payé",
      },
      {
        title: "Agents et automatisation",
        descriptionA:
          "Trois briques sont comprises. Les compétences, instructions réutilisables qui succèdent aux Gems, arrivent depuis le 5 octobre 2026 dans les domaines Workspace en publication rapide, le 19 octobre dans les autres, et gagnent l'application à partir du 13 octobre. Gemini Notebook organise vos sources. Workspace Studio crée des flux sur Gmail, Drive, Chat et des services tiers à partir d'une simple description. Au-dessus, Workflow Builder, l'atelier sans code de Gemini Enterprise, exige une licence distincte.",
        descriptionB:
          "Copilot Studio est l'atelier d'agents low-code de Microsoft : agents reliés à vos données, gouvernance centrale, supervision par l'administrateur. Researcher et Analyst viennent avec la licence, et Copilot Cowork agit dans Microsoft 365 en s'arrêtant pour obtenir votre accord quand une action est sensible.",
        winner: "b",
        winnerText: "Avantage Copilot sur les agents d'entreprise",
      },
      {
        title: "Droits, sécurité, gouvernance",
        descriptionA:
          "Gemini suit les droits Drive existants. Dans les éditions Workspace, échanges et fichiers ne sont ni relus par des humains ni utilisés pour entraîner les modèles en dehors de votre domaine sans autorisation, et la console d'administration pilote l'ensemble.",
        descriptionB:
          "Même principe avec Microsoft Graph, et un piège bien connu : Copilot rend visibles les partages trop larges. SharePoint Advanced Management, la restriction de découverte de contenu et Purview servent à les corriger avant l'ouverture, et le rôle « AI Administrator » confie Copilot à un responsable sans droits d'administrateur global.",
        winner: "tie",
        winnerText: "Égalité, avec un audit préalable côté Microsoft",
      },
      {
        title: "Réunions et messagerie",
        descriptionA:
          "Dans Meet, « Prendre des notes pour moi » rédige le compte rendu pendant la réunion. Dans Gmail, Gemini cherche, résume et rédige les courriels.",
        descriptionB:
          "Dans Teams, Copilot résume et transcrit les réunions, jusqu'à trente jours en arrière, et dresse la liste des actions. Dans Outlook, il prépare des brouillons, résume les fils et conseille sur le ton comme sur la clarté.",
        winner: "tie",
        winnerText: "Équivalents : votre visioconférence tranche",
      },
      {
        title: "Images, vidéo, présentations",
        descriptionA:
          "En Business Standard, Nano Banana Pro fournit 30 images par mois avant de passer la main à un modèle plus ancien ; Vids produit jusqu'à 500 secondes de vidéo et 25 avatars par mois ; Slides génère au plus 100 diapositives par mois.",
        descriptionB:
          "Copilot Chat produit des images si l'administrateur l'autorise. PowerPoint construit et met en forme des présentations, et accepte depuis le 6 octobre 2026 des compétences personnalisées sur Windows.",
        winner: "a",
        winnerText: "Avantage Gemini sur la création multimodale",
      },
      {
        title: "Interroger un corpus",
        descriptionA:
          "Un carnet Gemini Notebook accueille 300 sources en Business Standard ou Plus, et Google a porté la limite de Business Starter à 100 le 7 octobre 2026 ; chaque réponse renvoie au passage d'origine. Au-delà, on répartit le corpus entre plusieurs carnets.",
        descriptionB:
          "Copilot Search et l'index sémantique interrogent ce qui existe déjà dans Microsoft 365, dans la limite de vos droits, sans corpus à constituer ; en contrepartie, le périmètre exact d'une réponse se contrôle moins finement.",
        winner: "tie",
        winnerText: "Égalité : corpus choisi chez Google, corpus existant chez Microsoft",
      },
    ],

    useCases: [
      { metier: "Organisation entièrement sous Google Workspace", recommendation: "a", why: "Gemini est compris, présent dans toute la suite dès Business Standard, et s'active depuis la console d'administration." },
      { metier: "Organisation entièrement sous Microsoft 365", recommendation: "b", why: "Copilot tire sa valeur de Microsoft Graph : vos mails, vos fichiers, vos réunions." },
      { metier: "Finance et analyse (Excel intensif)", recommendation: "b", why: "Copilot travaille dans Excel, où vivent déjà les modèles financiers ; Sheets limite Gemini à 100 feuilles créées ou modifiées chaque mois en Business Standard." },
      { metier: "Data et gros corpus documentaires", recommendation: "a", why: "Un million de tokens dans l'application et 300 sources par carnet dans Gemini Notebook, citations à l'appui." },
      { metier: "Service client et processus outillés", recommendation: "b", why: "Copilot Studio branche des agents sur vos bases internes, sous l'œil de l'administrateur." },
      { metier: "Parc mixte ou migration en cours", recommendation: "tie", why: "Pilote de deux semaines sur trois cas d'usage dans chaque suite, puis calcul du coût complet des licences." },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Ce que nous avons mis à jour depuis août 2026",
      items: [
        { date: "7 octobre 2026", text: "Google a révisé ses plafonds : en Business Standard et Plus, 200 requêtes Pro, 600 en Thinking et 20 Deep Research par jour ; un carnet Gemini Notebook accepte 100 sources en Business Starter, et Workspace Studio appliquera ses limites à partir du 1er novembre. Chez Microsoft, PowerPoint accepte des compétences personnalisées depuis le 6 octobre." },
        { date: "Octobre 2026", text: "Les compétences remplacent les Gems : déploiement dans Workspace depuis le 5 octobre, dans l'application Gemini à partir du 13. Pour les comptes professionnels, les Gems resteront utilisables au moins jusqu'au 1er mars 2027, puis se transformeront en brouillons de compétences désactivés, réactivables par la personne qui les a créés." },
        { date: "Septembre 2026", text: "Copilot Cowork, l'agent qui agit dans Microsoft 365, est sorti de préversion le 29 septembre pour tous les comptes professionnels, et les pages de Microsoft appellent désormais la licence Microsoft Copilot. Le 15 septembre, Google a ouvert dans Gemini des connecteurs MCP vers Asana, Atlassian Rovo, HubSpot, Intuit, Monday et Salesforce." },
        { date: "Juillet 2026", text: "Remise de lancement chez Microsoft : un abonné Microsoft 365 qui ajoute Copilot Business à l'année avant la fin de 2026 le paie 15,60 € HT au lieu de 18,20 € pendant douze mois." },
        { date: "Correction", text: "Une version antérieure limitait le carnet de Google à 100 sources en Business Standard ; la documentation en donne 300 en Business Standard, Business Plus et Enterprise. Nous écrivions aussi 50 sources en Business Starter, quand Google en annonce 100 depuis le 7 octobre 2026." },
        { date: "Correction", text: "Nous donnions pour Business Standard des plafonds de 25 requêtes Pro par tranche de 4 heures et de 300 requêtes Thinking par jour : ce sont ceux de Business Starter. Nous chiffrions aussi Copilot à environ 30 $ par utilisateur, alors que la page France affiche 26 € HT en annuel, et nous pensions que Google ne publiait pas la fenêtre de contexte de Gemini par édition : elle atteint un million de tokens dès Business Standard." },
      ],
    },

    methodology:
      "Ce comparatif vient de Masteria, cabinet lyonnais fondé en 2022 qui forme des équipes à Google Gemini comme à Microsoft Copilot. Les verdicts reposent sur nos mises en situation sur les deux suites ; faits et prix ont été relus le **7 octobre 2026** chez Google Workspace, Google Cloud et Microsoft, à partir des pages listées ci-dessous, dont les limites d'usage que Google a mises à jour ce jour-là. Versions comparées : **Gemini dans Workspace Business Standard** et **Microsoft Copilot** avec licence.",

    citations: [
      { name: "Grille des forfaits Google Workspace pour la France", url: "https://workspace.google.com/intl/fr/pricing" },
      { name: "Quotas de l'application Gemini pour les comptes professionnels", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
      { name: "Plafonds de Gemini Notebook selon l'édition Workspace (maj du 7 octobre 2026)", url: "https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/turn-gemini-notebook-on-or-off-for-users" },
      { name: "Limites d'usage de l'IA dans Workspace (maj du 7 octobre 2026)", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
      { name: "Mise en route de Workspace Studio pour les administrateurs", url: "https://knowledge.workspace.google.com/admin/studio/get-started-workspace-studio-set-up-guide-for-admins" },
      { name: "Présentation de Gemini Enterprise sur Google Cloud", url: "https://cloud.google.com/gemini-enterprise" },
      { name: "Documentation de Workflow Builder dans Gemini Enterprise", url: "https://docs.cloud.google.com/gemini/enterprise/docs/workflow-builder" },
      { name: "Modèles Gemini accessibles aux développeurs", url: "https://ai.google.dev/gemini-api/docs/models" },
      { name: "Tarif France de la licence Copilot pour les grands comptes", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise" },
      { name: "Tarif France de Copilot Business pour les PME", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
      { name: "Ce que la licence Copilot ajoute à Copilot Chat", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Modèles d'Anthropic proposés dans Copilot et réglages européens", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
      { name: "Fonctionnement de Copilot Cowork", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
      { name: "Tarif France de Copilot Studio et de ses crédits", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio" },
    ],

    realCases: [
      {
        scenario: "Synthèse de réunion et suivi des actions",
        feature: "Gemini dans Meet · Copilot dans Teams",
        prompt: "Réunion de pilotage de 55 minutes. Produis les décisions prises, les actions par responsable avec échéances, les points de blocage, et un brouillon de courriel de synthèse pour les absents.",
        verdictText: "**Match nul**. Dans Meet, Gemini prend les notes et rédige le compte rendu ; dans Teams, Copilot résume, transcrit et relève les actions à suivre. L'outil de visioconférence déjà installé fait pencher la balance.",
        winner: "tie",
      },
      {
        scenario: "Construire une présentation à partir d'un document de référence",
        feature: "Gemini dans Slides · Copilot dans PowerPoint",
        prompt: "À partir de cette note stratégique de 12 pages, construis une présentation de 10 diapositives pour le comité de direction : structure claire, un message par diapositive, visuels sobres cohérents avec notre charte.",
        verdictText: "**Léger avantage Gemini** : l'application lit d'un bloc un document source volumineux grâce à son million de tokens, et Slides génère des images, dans la limite de 100 diapositives par mois en Business Standard. Copilot bâtit la présentation dans PowerPoint et soigne la mise en page de toutes les diapositives.",
        winner: "a",
      },
      {
        scenario: "Déployer un agent interne de réponse RH (congés, paie, intégration)",
        feature: "Copilot Studio · compétences Gemini, Workspace Studio et Gemini Enterprise",
        prompt: "Construis un agent qui répond aux questions RH des collaborateurs à partir de nos accords d'entreprise et procédures internes (SharePoint), avec escalade vers l'équipe RH quand il n'est pas sûr.",
        verdictText: "**Copilot gagne**. Copilot Studio est taillé pour ce cas : connexion à SharePoint, respect des droits, supervision par l'administrateur ; une fois publié dans Microsoft Copilot, l'agent n'entraîne aucun surcoût pour qui détient déjà la licence. Chez Google, l'équivalent passe par Workflow Builder dans Gemini Enterprise, licence à part : les compétences Gemini, qui remplacent les Gems, n'apportent pas seules la gouvernance attendue d'un agent ouvert à toute l'entreprise.",
        winner: "b",
      },
    ],

    mistakes: [
      {
        title: "Comparer des modèles au lieu de comparer des suites",
        desc: "Gemini 3.x face à GPT et Claude : le débat nourrit les classements. Sur le terrain, la valeur vient de l'accès à vos mails, vos fichiers et vos réunions. La question utile : lequel exploite le mieux vos données là où elles se trouvent ?",
      },
      {
        title: "Croire l'atelier d'agents compris dans Workspace",
        desc: "Compétences, Gemini Notebook et Workspace Studio sont compris dans les forfaits concernés. Workflow Builder, l'atelier d'agents sans code, relève de Gemini Enterprise, une licence à part dès 21 $ par siège : chiffrez-la avant de lancer un projet d'agents.",
      },
      {
        title: "Ouvrir Copilot sans auditer les accès",
        desc: "Copilot montre à chaque collaborateur tout ce qu'il peut techniquement ouvrir, y compris des dossiers partagés trop largement depuis des années. Sans audit préalable (rapports d'accès, SharePoint Advanced Management, Purview), le lancement peut tourner à l'incident interne.",
      },
      {
        title: "Oublier le coût total",
        desc: "Pour 200 personnes, Copilot Business ajoute 43 680 € HT par an (200 × 18,20 € × 12), quand Gemini est déjà dans le forfait Workspace. Changer de suite pour économiser cette somme engage pourtant des frais de migration et de formation : faites le calcul à suite constante, agents compris.",
      },
    ],

    alsoConsidered: [
      { name: "ChatGPT", summary: "Complète un copilote de suite pour les visuels, les livrables complets et les agents d'équipe. Comparatif : [Copilot vs ChatGPT](/copilot-vs-chatgpt)." },
      { name: "Claude", summary: "Sur abonnement payant, des échanges d'un million de tokens, et Claude Code à partir de Pro. Comparatif : [ChatGPT vs Claude](/chatgpt-vs-claude)." },
      { name: "Mistral AI", summary: "L'option des données gardées en Europe, à côté d'une suite. Comparatif : [Mistral vs ChatGPT](/mistral-vs-chatgpt)." },
    ],

    faq: [
      {
        q: "Peut-on utiliser Gemini sous Microsoft 365, ou Copilot sous Google Workspace ?",
        a: "Oui, par les applications web autonomes (gemini.google.com, application Microsoft Copilot), mais vous perdez l'essentiel : le contexte de votre suite, c'est-à-dire vos mails, vos fichiers et vos réunions. Un copilote de suite vaut par cet ancrage ; en environnement croisé, un assistant généraliste (ChatGPT, Claude ou Mistral) convient souvent mieux.",
      },
      {
        q: "Gemini est-il gratuit avec Google Workspace ?",
        a: "Il est compris dans les forfaits, sans module à acheter : Business Starter à 6,80 € par utilisateur et par mois (Gemini dans Gmail et dans l'application, accès réduit ailleurs), Business Standard à 13,60 € (Gemini dans toutes les applications), en engagement annuel. Son coût est donc déjà dans votre facture. Les gros utilisateurs passent par le module AI Expanded Access, et l'atelier d'agents par Gemini Enterprise, licence à part.",
      },
      {
        q: "Combien de documents Gemini Notebook peut-il traiter ?",
        a: "**Jusqu'à 300 sources par carnet** en Business Standard, Business Plus et Enterprise, 400 avec le module AI Expanded Access ; Business Starter en accepte 100 depuis le 7 octobre 2026. Chaque réponse cite le passage d'origine, ce qui accélère la relecture.",
      },
      {
        q: "Workflow Builder fait-il partie de mon abonnement Workspace ?",
        a: "Non. Workflow Builder est l'atelier sans code de **Gemini Enterprise** : on y crée des agents conversationnels et des flux, on les teste, les partage et les planifie. Il demande une **licence distincte**, à partir de 21 $ par siège et par mois en édition Business, pour 300 sièges au plus. Votre forfait Workspace comprend les compétences (qui succèdent aux Gems depuis le 5 octobre 2026), Gemini Notebook et Workspace Studio.",
      },
      {
        q: "Gemini ou Copilot pour Excel et l'analyse de données ?",
        a: "Copilot travaille dans Excel, là où vivent vos modèles : il lit les données, propose des formules et dessine des graphiques, en mode édition, plan ou conversation. Dans Sheets, Gemini crée ou modifie jusqu'à 100 feuilles par mois en Business Standard et propose une fonction d'IA dans les cellules, avec 5 000 appels par mois. Pour les gros volumes, chaque écosystème renvoie vers sa plateforme de données.",
      },
      {
        q: "Gemini ou Copilot : lequel expose le plus vos données ?",
        a: "Aucun des deux n'utilise vos données d'entreprise pour entraîner ses modèles, et chacun respecte les droits en place. Le risque tient à l'organisation : des permissions mal tenues, que Copilot rend plus visibles puisque Graph voit tout ce que l'utilisateur peut ouvrir. Auditez les accès avant d'ouvrir l'outil, quelle que soit la suite.",
      },
      {
        q: "Faut-il ajouter ChatGPT ou Claude au copilote de suite ?",
        a: "Souvent, oui. Les copilotes de suite brillent sur le contexte interne ; les généralistes restent devant pour les visuels, la rédaction longue et le code. Associer les deux niveaux coûte un siège de plus pour les profils qui en ont besoin.",
      },
      {
        q: "Combien coûte une formation Gemini ou Copilot ?",
        a: "Comptez **1 980 € HT** par journée sur Gemini ou sur Copilot, TVA à 20 % en plus, que le groupe intra compte douze personnes au plus ou que la session soit individuelle. Notre certification Qualiopi permet de solliciter l'OPCO de votre branche, seul juge du financement. La formation se construit sur vos données et vos processus : c'est elle qui décide de l'adoption.",
      },
    ],

    relatedLinks: [
      { label: "Formation Google Gemini pour entreprises", href: "/formation-gemini-entreprise" },
      { label: "Formation Microsoft Copilot", href: "/formation-microsoft-copilot" },
      { label: "Comparatif Copilot vs ChatGPT", href: "/copilot-vs-chatgpt" },
      { label: "Quelle est la meilleure IA en 2026 ?", href: "/quelle-est-la-meilleure-ia" },
      { label: "Conseil IA pour entreprises", href: "/conseil-intelligence-artificielle" },
    ],
  },
}

export const COMPARISON_SLUGS = Object.keys(COMPARISONS)

// Liste exposée pour les pages cluster (hub des comparatifs)
export const COMPARISONS_INDEX = [
  {
    slug: "meilleure-ia-entreprise-2026",
    title: "Meilleure IA pour entreprise en 2026",
    subtitle: "Cinq assistants passés en revue, de Copilot à Mistral",
    excerpt: "Suite bureautique, métier, budget, hébergement des données : les critères qui départagent les cinq grands assistants, avec des prix et des modèles relevés le 7 octobre 2026.",
    badge: "Le guide complet",
    isHero: true,
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    subtitle: "OpenAI ou Anthropic pour vos équipes ?",
    excerpt: "Douze critères passés au crible : volume de texte lu d'un coup, code, agents, images, données, hébergement, prix par siège.",
    badge: "Face-à-face",
  },
  {
    slug: "copilot-vs-chatgpt",
    title: "Microsoft Copilot vs ChatGPT",
    subtitle: "Intégré à Microsoft 365 ou autonome ?",
    excerpt: "Tout dépend du temps que vos équipes passent dans Office, de la sensibilité de vos données et du budget par siège.",
    badge: "Face-à-face",
  },
  {
    slug: "meilleure-ia-pour-coder",
    title: "La meilleure IA pour coder",
    subtitle: "Quatre outils pour vos développeurs",
    excerpt: "Claude Code, Cursor, GitHub Copilot et Codex face à face : agents, éditeurs, modèles, prix par développeur, profil par profil.",
    badge: "Spécialisé code",
  },
  {
    slug: "meilleur-agent-ia",
    title: "Le meilleur agent IA pour l'entreprise",
    subtitle: "Quatre plateformes pour automatiser",
    excerpt: "Claude Cowork, agents ChatGPT, Manus et Copilot Studio : autonomie, validation des actions, gouvernance, coût de chaque exécution.",
    badge: "Spécialisé agents",
  },
  {
    slug: "mistral-vs-chatgpt",
    title: "Mistral AI vs ChatGPT",
    subtitle: "Données en Europe ou écosystème le plus large ?",
    excerpt: "Hébergement dans l'UE, modèles à poids ouverts, réglage d'entraînement sur vos échanges, fonctions et prix : le duel des entreprises attentives à leurs données.",
    badge: "Face-à-face",
  },
  {
    slug: "gemini-vs-copilot",
    title: "Google Gemini vs Microsoft Copilot",
    subtitle: "Workspace ou Microsoft 365 : votre suite décide",
    excerpt: "Intégration, coût par siège, sécurité et agents : comment choisir le copilote de votre suite bureautique en 2026.",
    badge: "Face-à-face",
  },
]
