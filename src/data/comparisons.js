// Pages comparatifs IA : données des sept guides (face-à-face et panoramas).
// Faits produit, fenêtres de contexte et tarifs revérifiés le 3 octobre 2026
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
    dateModified: "2026-10-05",
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
          "Depuis le 9 juillet 2026, un répertoire de plugins remplace celui des applications : chaque plugin rassemble des compétences et des accès à vos outils, par exemple Gmail, Slack, Dropbox, Box, SharePoint ou Google Drive. Des extensions officielles amènent ChatGPT dans Word, Excel et PowerPoint. À surveiller : le 11 septembre 2026, OpenAI a annoncé que les GPTs personnalisés disparaîtraient peu à peu, avec une migration à prévoir vers les plugins.",
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
        { date: "Septembre 2026", text: "Le 16 septembre, Anthropic a fondu Cowork dans la conversation de Claude et ouvert Claude Docs et Claude Slides en bêta. Le 11 septembre, OpenAI a annoncé le retrait progressif des GPTs personnalisés au profit des plugins." },
        { date: "5 octobre 2026", text: "Notre revérification apporte trois précisions. Depuis le 7 mai 2026, tout abonnement payant permet d'ajouter Claude à Word, à Excel et à PowerPoint, et Outlook reste en bêta. Claude dans Chrome est en disponibilité générale depuis le 26 août 2026. Les applications d'Anthropic n'ont aucune région européenne, mais AWS Bedrock et Google Cloud Vertex AI permettent d'héberger Claude en Europe." },
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
      { name: "Microsoft 365 Copilot", summary: "L'alternative logique quand le travail se fait dans Outlook, Word et Teams : Copilot puise dans Microsoft Graph et donne aussi accès à des modèles d'Anthropic. Comparaison détaillée : [Copilot vs ChatGPT](/copilot-vs-chatgpt)." },
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
    metaTitle: "Copilot vs ChatGPT 2026 : lequel choisir ? | Comparatif Masteria",
    metaDesc:
      "Microsoft 365 Copilot ou ChatGPT (GPT-5.6, GPT-6) : vos données via Graph, contexte réel, agents, prix par siège. Comparatif vérifié le 3 octobre 2026.",
    h1: "Microsoft Copilot vs ChatGPT : quel outil IA pour votre entreprise ?",
    intro:
      "Microsoft Copilot et ChatGPT servent deux besoins distincts. **Copilot** travaille à l'intérieur de Microsoft 365 : avec la licence complète, il lit vos mails Outlook, vos fichiers SharePoint et vos réunions Teams, avec les permissions déjà en place, et propose des modèles d'OpenAI comme d'Anthropic. **ChatGPT** est un assistant autonome qui couvre un périmètre plus large : images, tâches longues avec ChatGPT Work, agents d'équipe, code avec Codex, et désormais des extensions pour Word, Excel et PowerPoint. Le bon arbitrage dépend de la part de votre travail qui se passe dans Office.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "3 octobre 2026",
    datePublished: "2026-05-04",
    dateModified: "2026-10-03",
    readTime: "9 minutes",
    keywords:
      "copilot vs chatgpt, microsoft 365 copilot prix, copilot business prix, chatgpt business prix, comparatif copilot chatgpt 2026, gpt-5.6, gpt-6, copilot ou chatgpt entreprise, microsoft graph ia",

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Copilot ou ChatGPT : lequel choisir en 2026 ?",
      answer:
        "Prenez **Microsoft 365 Copilot** si vos équipes vivent dans Outlook, Word, Excel et Teams : avec la licence complète, il accède à vos données via Microsoft Graph, applique vos permissions et garde les traitements dans le périmètre de Microsoft 365. Comptez **26 € HT par utilisateur et par mois** en paiement annuel, ou **18,20 € HT** avec Copilot Business pour les organisations jusqu'à 300 utilisateurs, en plus de la licence Microsoft 365. Prenez **ChatGPT** si vous cherchez la couverture la plus large pour **21 € par utilisateur et par mois** sur l'offre Business en annuel : GPT-5.6 Sol et GPT-6 Pro, ChatGPT Images 2.5, ChatGPT Work pour les livrables complets, agents d'espace de travail et Codex. Les deux répondent à des questions différentes : une configuration courante associe Copilot pour le quotidien bureautique et ChatGPT pour ce qui sort d'Office.",
      bullets: [
        "Mails, documents, réunions et tableurs Microsoft : Copilot",
        "Images et livrables complets hors Office : ChatGPT",
        "Recherche dans l'intranet et les fichiers d'équipe : Copilot",
        "Code, prototypage et automatisations hors Microsoft : ChatGPT",
        "Budget : Copilot Business à 18,20 € HT, ChatGPT Business à 21 €, licences Microsoft 365 en plus pour Copilot",
      ],
    },

    toolA: {
      id: "copilot",
      name: "Microsoft 365 Copilot",
      editor: "Microsoft",
      currentModel: "Modèles d'OpenAI et d'Anthropic, routage automatique, ancrage Microsoft Graph",
      country: "États-Unis",
      pricing: "26 € HT/utilisateur/mois (grandes entreprises) · 18,20 € HT (Copilot Business, jusqu'à 300 utilisateurs), en plus de Microsoft 365",
      foundedAI: "2023",
      color: "#0078D4",
    },
    toolB: {
      id: "chatgpt",
      name: "ChatGPT",
      editor: "OpenAI",
      currentModel: "GPT-5.6 dans la conversation · GPT-6 Astra et GPT-6.1 Sol dans Work et Codex",
      country: "États-Unis",
      pricing: "Go 8 € · Plus 23 € · Pro dès 103 € · Business 21 €/utilisateur en annuel (prix France)",
      foundedAI: "2022",
      color: "#10A37F",
    },

    // ─── GEO : tableau de faits datés, lisible en HTML brut par un moteur génératif
    keyFacts: {
      title: "L'essentiel en un tableau",
      note: "Faits vérifiés le 3 octobre 2026 sur les pages officielles de Microsoft et d'OpenAI, avec les prix affichés pour la France. Microsoft affiche ses prix hors taxes.",
      rows: [
        { criterion: "Modèles actuels", a: "Modèles d'OpenAI et d'Anthropic, avec un sélecteur et un routage automatique ; dans l'UE, ceux d'Anthropic sont désactivés par défaut", b: "GPT-5.6 Sol dans la conversation, GPT-6 Pro sur Business et Enterprise, GPT-6 Astra et GPT-6.1 Sol dans Work et Codex" },
        { criterion: "Accès à vos données internes", a: "Oui avec la licence complète : mails, fichiers SharePoint et OneDrive, réunions Teams et agenda via Microsoft Graph, dans la limite des permissions", b: "Par connecteurs que chaque utilisateur branche : Google Drive, SharePoint, Box, Dropbox, Gmail ou Outlook" },
        { criterion: "Inclus sans licence Copilot", a: "Copilot Chat et, selon votre abonnement Microsoft 365, un accès standard à Copilot dans Word, Excel, PowerPoint et OneNote", b: "Sans objet : ChatGPT s'achète par siège" },
        { criterion: "Contexte dans la conversation", a: "Non publié par Microsoft : Graph va chercher le passage utile dans vos fichiers", b: "54 000 tokens en mode instantané, 256 000 en mode raisonnement sur Business ; 128 000 et 256 000 sur Enterprise" },
        { criterion: "Génération d'images", a: "Oui dans Copilot Chat, si l'administrateur l'autorise", b: "Oui, ChatGPT Images 2.5 ; plus de vidéo depuis l'arrêt de Sora le 26 avril 2026" },
        { criterion: "Mode agent", a: "Copilot Studio pour les agents métier ; Copilot Cowork pour exécuter des tâches dans Microsoft 365, facturé à l'usage", b: "ChatGPT Work et agents d'espace de travail, payés en crédits au-delà de l'enveloppe incluse" },
        { criterion: "Assistant de code", a: "Non. Microsoft vend GitHub Copilot à part (Business à 19 $ par siège)", b: "Codex, inclus avec des limites dès l'offre gratuite" },
        { criterion: "Entrée individuelle", a: "Microsoft 365 Premium à 22 €/mois ou 219 €/an, pour 1 à 6 personnes, IA réservée au titulaire", b: "Go à 8 €/mois, Plus à 23 €/mois" },
        { criterion: "Offre équipe", a: "26 € HT/utilisateur/mois en annuel (27,30 € en mensuel), ou Copilot Business à 18,20 € HT jusqu'à 300 utilisateurs, en plus d'une licence Microsoft 365 éligible", b: "Business à 21 €/utilisateur/mois en annuel, 26 € en mensuel, dès deux sièges" },
        { criterion: "Localisation des traitements", a: "Périmètre du service Microsoft 365 ; trafic des utilisateurs européens maintenu dans l'EU Data Boundary (le périmètre européen de traitement de Microsoft), hors modèles d'Anthropic", b: "Chez OpenAI ; stockage en Europe en déploiement sur Business, stockage et inférence en Europe sur Enterprise (clients éligibles)" },
      ],
    },

    verdict: {
      title: "Verdict en 30 secondes",
      summary:
        "**Copilot** travaille dans votre environnement Microsoft. Si vos équipes vivent dans Outlook, Word, Excel et Teams, la licence complète fait gagner du temps là où elles passent leurs journées, avec des réponses ancrées dans leurs mails, fichiers et réunions, et des traitements qui restent dans le périmètre de Microsoft 365. **ChatGPT** couvre un périmètre plus large hors Office : génération d'images, ChatGPT Work pour les livrables complets, Codex pour le code, agents d'équipe déclenchés depuis Slack. Les deux se rapprochent : ChatGPT s'installe désormais dans Word, Excel et PowerPoint, et Copilot propose des modèles d'Anthropic. Le bon arbitrage dépend de la part de votre travail qui se passe dans Microsoft 365.",
      recommendA: ["Environnement Microsoft 365 dominant", "Recherche dans les mails, fichiers et réunions", "Traitements dans le périmètre de Microsoft 365", "Gouvernance IT centralisée (Purview, Copilot Studio)"],
      recommendB: ["Images et contenus visuels", "Livrables complets avec ChatGPT Work", "Code avec Codex", "Outils hors Microsoft (Google Drive, Slack, Box)"],
    },

    criteria: [
      {
        title: "Intégration aux outils de travail",
        descriptionA:
          "Copilot est intégré à Word, Excel, PowerPoint, Outlook, Teams et OneNote. Avec la licence complète, il agit sur le document ouvert et va chercher le contexte dans Microsoft Graph : « résume ce fil », « prépare une présentation à partir de ce document ».",
        descriptionB:
          "ChatGPT travaille dans son application (web, ordinateur, mobile) et, depuis 2026, dans Word, Excel et PowerPoint grâce à une extension officielle ouverte à toutes les offres. L'extension travaille sur le document ouvert ; l'accès à Outlook ou à SharePoint passe par des connecteurs à brancher.",
        winner: "a",
        winnerText: "Avantage Copilot pour les utilisateurs de Microsoft 365",
      },
      {
        title: "Fenêtre de contexte disponible dans votre offre",
        descriptionA:
          "Microsoft ne publie pas de fenêtre de contexte par offre : la valeur vient de l'ancrage dans Graph, qui va chercher le bon passage dans le bon fichier au lieu d'avaler le document entier.",
        descriptionB:
          "Sur Business, 54 000 tokens en mode instantané et 256 000 en mode raisonnement, soit environ 320 pages selon OpenAI ; via l'API, les modèles GPT-6 atteignent 1 050 000 tokens. Ces deux chiffres décrivent deux produits : la conversation de vos équipes et l'intégration d'un développeur.",
        winner: "tie",
        winnerText: "Match nul : deux façons d'atteindre le bon document",
      },
      {
        title: "Accès aux données de l'entreprise (Microsoft Graph)",
        descriptionA:
          "Avec la licence Microsoft 365 Copilot, les réponses s'appuient sur Microsoft Graph et Work IQ, la couche de Microsoft qui raisonne sur vos données de travail : mails, fichiers, réunions, agenda, relations dans l'organisation, toujours dans la limite des permissions de l'utilisateur.",
        descriptionB:
          "ChatGPT accède à vos contenus par des connecteurs que chaque utilisateur branche : Google Drive, SharePoint, Box et Dropbox dans sa bibliothèque, Gmail ou Outlook pour la messagerie. Le résultat dépend de ce qui est connecté et autorisé.",
        winner: "a",
        winnerText: "Avantage décisif Copilot sur le contexte interne",
      },
      {
        title: "Confidentialité et souveraineté des données",
        descriptionA:
          "Prompts et réponses restent dans le périmètre du service Microsoft 365, sous vos règles de conservation et Purview, sans servir à entraîner les modèles. Le trafic des utilisateurs européens reste dans l'EU Data Boundary, à une exception près : les modèles d'Anthropic, désactivés par défaut dans l'UE, en sortent si l'administrateur les active.",
        descriptionB:
          "OpenAI n'entraîne pas ses modèles sur Business et Enterprise. Enterprise et Edu peuvent stocker et traiter les contenus en Europe pour les clients éligibles ; sur Business, le stockage en Europe se déploie progressivement, l'inférence reste hors région et une copie des échanges est conservée un temps aux États-Unis.",
        winner: "a",
        winnerText: "Avantage Copilot pour les données en Europe",
      },
      {
        title: "Capacités créatives",
        descriptionA:
          "Copilot génère des images dans Copilot Chat quand l'administrateur l'autorise, et travaille les présentations dans PowerPoint : création à partir d'un document, ajout d'images, mise en forme de tout le fichier.",
        descriptionB:
          "ChatGPT Images 2.5 crée et retouche des images à partir d'un modèle ou d'un croquis ; la vidéo a disparu avec l'arrêt de Sora en avril 2026. ChatGPT Work produit aussi des sites légers et des pages partageables.",
        winner: "b",
        winnerText: "Avantage ChatGPT sur la création visuelle",
      },
      {
        title: "Agents et automatisation du travail",
        descriptionA:
          "Copilot Studio monte des agents métier en low-code (avec peu de code), connectés à vos sources de données, dont SharePoint. Les agents publiés dans Microsoft 365 Copilot sont inclus pour les détenteurs de la licence ; les agents autonomes ou ouverts sur des canaux externes se paient en crédits Copilot. Copilot Cowork exécute des tâches dans Microsoft 365 (mails, réunions, documents) après validation de chaque action, en facturation à l'usage.",
        descriptionB:
          "Les agents d'espace de travail, en disponibilité générale depuis le 21 mai 2026 sur Business et Enterprise, se décrivent en langage naturel, se partagent, se planifient, répondent dans Slack et se déclenchent par API. Depuis le 6 juillet 2026, leurs exécutions consomment des crédits, pris d'abord sur l'enveloppe incluse dans le siège.",
        winner: "tie",
        winnerText: "Match nul : gouvernance chez Microsoft, rapidité de montage chez OpenAI",
      },
      {
        title: "Code et développement",
        descriptionA:
          "Microsoft 365 Copilot n'est pas conçu pour le développement. Microsoft vend GitHub Copilot à part : Business à 19 $ par siège et par mois, Enterprise à 39 $, avec des modèles d'Anthropic, d'OpenAI et de Google au choix.",
        descriptionB:
          "Codex exécute des tâches de développement en autonomie, en local ou dans le cloud, et il est inclus dans les offres ChatGPT avec des limites. GPT-6.1 Sol y arrive progressivement depuis le 29 septembre 2026.",
        winner: "b",
        winnerText: "ChatGPT mieux placé sur le développement",
      },
      {
        title: "Tarifs et coût réel par siège",
        descriptionA:
          "Microsoft 365 Copilot coûte 26 € HT par utilisateur et par mois en paiement annuel (27,30 € en mensuel), en plus d'une licence Microsoft 365 éligible. Jusqu'à 300 utilisateurs, Copilot Business coûte 18,20 € HT, ramenés à 15,60 € la première année pour les clients existants qui souscrivent entre le 1er juillet et le 31 décembre 2026. Copilot Studio et Cowork se facturent à l'usage.",
        descriptionB:
          "En France : Go à 8 €, Plus à 23 €, Pro à partir de 103 € par mois ; Business à 21 € par utilisateur et par mois en annuel (26 € en mensuel) ; Enterprise sur devis. ChatGPT Work, Codex et les agents se paient en crédits au-delà de l'enveloppe incluse.",
        winner: "tie",
        winnerText: "Match nul : Copilot Business moins cher, licence Microsoft 365 en plus",
      },
      {
        title: "Adoption et formation des équipes",
        descriptionA:
          "Copilot se retrouve dans Word, Excel, PowerPoint, Outlook, Teams, OneNote et Forms, avec un comportement propre à chaque application : la formation se construit application par application, sur les documents de l'équipe.",
        descriptionB:
          "ChatGPT s'apprend dans une interface unique, avec deux modes (Chat pour les questions, Work pour les tâches longues) et Codex pour les développeurs. En mise en situation, la prise en main est plus rapide.",
        winner: "b",
        winnerText: "ChatGPT plus rapide à prendre en main",
      },
      {
        title: "Modèles et capacités avancées",
        descriptionA:
          "Copilot choisit le modèle par un routage automatique, propose un mode de réflexion approfondie et laisse l'utilisateur choisir Claude dans certaines fonctions, comme Researcher. Les agents Researcher et Analyst prennent en charge les recherches et les analyses de données longues.",
        descriptionB:
          "Les nouveaux modèles d'OpenAI arrivent dans ChatGPT dès leur sortie : GPT-6 Astra le 3 septembre 2026, GPT-6.1 Sol le 29 septembre, d'abord sur l'offre Pro. GPT-6 Pro est accessible dans la conversation sur Business et Enterprise.",
        winner: "tie",
        winnerText: "Match nul : routage automatique chez Microsoft, choix explicite chez OpenAI",
      },
    ],

    useCases: [
      { metier: "Productivité quotidienne (mails, documents, présentations)", recommendation: "a", why: "Copilot travaille dans Outlook, Word et PowerPoint, sur le document ouvert et avec le contexte de vos mails et réunions." },
      { metier: "Brainstorming et créativité", recommendation: "b", why: "ChatGPT varie plus vite les angles et produit les visuels associés avec ChatGPT Images 2.5." },
      { metier: "Analyse documentaire interne", recommendation: "a", why: "Copilot interroge SharePoint et OneDrive sans téléversement, dans la limite des permissions." },
      { metier: "Génération d'images", recommendation: "b", why: "ChatGPT Images 2.5 accepte modèles, croquis et retouches ciblées." },
      { metier: "Code et développement", recommendation: "b", why: "Codex est inclus dans ChatGPT ; pour l'environnement de développement, GitHub Copilot reste un produit séparé." },
      { metier: "Service client", recommendation: "tie", why: "Copilot Studio pour un agent ouvert à vos clients sur le site web, agents ChatGPT pour une équipe support outillée sur Slack." },
      { metier: "Sensibilité forte aux données (santé, finance, défense)", recommendation: "a", why: "Traitements dans le périmètre de Microsoft 365 et EU Data Boundary pour les utilisateurs européens." },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Ce qui a changé depuis notre version d'août 2026",
      items: [
        { date: "Septembre 2026", text: "OpenAI a présenté GPT-6 Astra le 3 septembre et GPT-6.1 Sol le 29 septembre ; GPT-6 Pro est accessible dans la conversation sur Business et Enterprise. Depuis le 17 septembre, ChatGPT s'installe aussi dans Word, après Excel et PowerPoint." },
        { date: "Octobre 2026", text: "Au 3 octobre 2026, la documentation de Microsoft distingue Copilot Chat, Microsoft 365 Copilot (Basic) et Microsoft 365 Copilot (Premium), décrit Copilot Cowork et propose des modèles d'Anthropic, désactivés par défaut dans l'UE. Microsoft y désigne désormais son produit sous le nom de Microsoft Copilot." },
        { date: "Juillet 2026", text: "Depuis le 6 juillet, les exécutions des agents d'espace de travail ChatGPT consomment des crédits, d'abord sur l'enveloppe incluse dans le siège Business. Microsoft propose à ses clients existants Copilot Business à 15,60 € HT la première année pour les souscriptions du 1er juillet au 31 décembre 2026." },
        { date: "Correction", text: "Nous citions Sora 2 pour la vidéo dans ChatGPT : OpenAI a fermé l'application Sora le 26 avril 2026. Nous écrivions aussi que ChatGPT n'avait aucune intégration native dans Word ou Excel : OpenAI publie des extensions officielles pour Word, Excel et PowerPoint." },
        { date: "Correction", text: "Nous écrivions que Copilot exigeait Microsoft 365 Business Standard ou supérieur : Business Basic, E3, E5 et Office 365 E1 figurent aussi parmi les licences éligibles. Nous présentions enfin Copilot Pro à 20 $ par mois pour les particuliers : la boutique Microsoft renvoie désormais vers Microsoft 365 Premium, à 22 € par mois." },
      ],
    },

    methodology:
      "Ce comparatif est rédigé par Masteria, cabinet lyonnais spécialisé en intelligence artificielle depuis 2022, qui forme les équipes à Microsoft Copilot comme à ChatGPT. Les verdicts reposent sur des mises en situation de formation construites sur des tâches de bureau réelles. Les faits produit et les tarifs ont été revérifiés le **3 octobre 2026** sur les pages officielles de Microsoft et d'OpenAI listées ci-dessous. Versions de référence : **Microsoft 365 Copilot** avec licence complète et **ChatGPT Business** (GPT-5.6 Sol, GPT-6 Pro).",

    citations: [
      { name: "Microsoft : tarifs de Microsoft 365 Copilot pour les grandes entreprises (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise" },
      { name: "Microsoft : Microsoft 365 Copilot Business pour les PME (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
      { name: "Microsoft Learn : présentation de Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Microsoft Learn : licences prérequises", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing" },
      { name: "Microsoft Learn : modèles d'Anthropic dans les services Microsoft", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
      { name: "Microsoft Learn : Copilot Cowork", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
      { name: "Microsoft Learn : configuration requise", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements" },
      { name: "Microsoft : Copilot Studio, offres et tarifs (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio" },
      { name: "Microsoft Store : Microsoft 365 Premium", url: "https://www.microsoft.com/fr-fr/microsoft-365/p/microsoft-365-premium/cfq7ttc11z3q" },
      { name: "GitHub : offres Copilot (documentation)", url: "https://docs.github.com/en/copilot/get-started/plans" },
      { name: "OpenAI : tarifs de ChatGPT (page France)", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "OpenAI : notes de version de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "OpenAI : GPT-5.6 et GPT-6 Pro dans ChatGPT", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "OpenAI : présentation de ChatGPT Business", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
      { name: "OpenAI : notes de version de ChatGPT Business", url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes" },
      { name: "OpenAI : agents d'espace de travail (Business et Enterprise)", url: "https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business" },
      { name: "OpenAI : arrêt de Sora", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
      { name: "OpenAI : résidence des données et de l'inférence", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "OpenAI : stockage des contenus de ChatGPT Business", url: "https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored" },
    ],

    realCases: [
      {
        scenario: "Préparer sa journée à partir de ses mails Outlook reçus pendant la nuit",
        feature: "Copilot dans Outlook et Microsoft Graph · ChatGPT avec connecteur Outlook",
        prompt: "Trie mes 30 courriels non lus reçus depuis hier 18 h : urgent, important ou pour information. Extrais les 3 courriels qui demandent une réponse aujourd'hui, propose un brouillon pour chacun et signale les conflits avec mon agenda du jour.",
        verdictText: "**Copilot gagne**. Avec la licence complète, il lit la boîte Outlook, l'agenda et les conversations Teams via Microsoft Graph, repère les fils qui attendent une réponse et les croise avec le planning du jour. ChatGPT y arrive en connectant Outlook, avec un résultat qui dépend des connecteurs branchés par chaque utilisateur.",
        winner: "a",
      },
      {
        scenario: "Créer une présentation PowerPoint à partir d'un document Word",
        feature: "Copilot dans PowerPoint · extension ChatGPT pour PowerPoint",
        prompt: "À partir de ce mémo Word de 12 pages (notre stratégie 2027), crée une présentation de 10 diapositives : un message par diapositive, des visuels sobres, une diapositive de chiffres clés avec graphiques et une diapositive finale de décision.",
        verdictText: "**Copilot prend l'avantage** dans PowerPoint : il construit la présentation à partir du document et applique la mise en forme à tout le fichier, avec le contexte des fichiers de l'organisation. L'extension PowerPoint de ChatGPT fait désormais le même travail ; OpenAI signale lui-même que la correspondance au modèle de l'entreprise demande encore une relecture.",
        winner: "a",
      },
      {
        scenario: "Analyser ses ventes du trimestre dans un fichier Excel",
        feature: "Copilot dans Excel · ChatGPT pour Excel et analyse de données",
        prompt: "Sur ce fichier des ventes du trimestre (15 000 lignes) : les 10 premiers produits par chiffre d'affaires, l'évolution mensuelle, les clients en croissance et en recul, une colonne « à relancer » pour les clients sans commande depuis 60 jours, et un graphique lisible en 30 secondes.",
        verdictText: "**Match nul**. Copilot analyse les données, crée formules et graphiques dans Excel. ChatGPT pour Excel travaille aussi dans le classeur, et l'analyse de données de ChatGPT exécute du code pour les traitements lourds. Pour l'usage quotidien dans Excel, l'outil déjà installé l'emporte.",
        winner: "tie",
      },
      {
        scenario: "Générer 5 visuels pour une publication LinkedIn d'entreprise",
        feature: "Copilot Chat et génération d'images · ChatGPT Images 2.5",
        prompt: "Je publie sur LinkedIn le bilan de notre programme de formation à l'IA : génère 5 visuels carrés (1080×1080) qui illustrent ce bilan, style minimaliste, palette bleu et orange de notre charte, aucun visage, ton professionnel.",
        verdictText: "**ChatGPT prend l'avantage** : ChatGPT Images 2.5 propose des modèles, le croquis et la retouche ciblée, ce qui aide à tenir une charte sur une série. Copilot génère aussi des images dans Copilot Chat quand l'administrateur l'autorise.",
        winner: "b",
      },
      {
        scenario: "Construire un agent qui suit les relances clients",
        feature: "Copilot Studio · agents d'espace de travail ChatGPT",
        prompt: "Construis un agent qui, chaque semaine, repère dans le CRM les prospects sans échange depuis 14 jours, prépare une relance personnalisée selon leur dernière conversation et m'envoie la liste chaque lundi à 9 h pour validation avant envoi.",
        verdictText: "**Match nul**, l'arbitrage se fait sur votre environnement. **Copilot Studio** monte l'agent dans le périmètre Microsoft, avec un accès natif à Outlook et Teams ; publié dans Microsoft 365 Copilot, son usage est inclus pour les détenteurs de la licence. Un **agent d'espace de travail ChatGPT** se décrit en langage naturel, se planifie chaque lundi et peut publier sa liste dans Slack ; chaque exécution consomme des crédits, à chiffrer avant de valider.",
        winner: "tie",
      },
      {
        scenario: "Rédiger 10 documents Word standardisés (proposition commerciale, contrat type, mémo)",
        feature: "Copilot dans Word · extension ChatGPT pour Word",
        prompt: "À partir de notre modèle de proposition commerciale et des informations de chaque prospect, génère 10 documents personnalisés : reprends notre style, prépare le bloc tarifaire et signale les paragraphes à personnaliser à la main.",
        verdictText: "**Copilot prend l'avantage** dans Word : il rédige et réécrit à partir des documents de l'organisation, accessibles via Graph. ChatGPT pour Word rédige, révise et ajuste titres et mise en forme depuis son panneau latéral, avec les informations que vous lui fournissez ou que ses connecteurs atteignent.",
        winner: "a",
      },
      {
        scenario: "Préparer le brief hebdomadaire de l'équipe à partir de Teams",
        feature: "Copilot dans Teams et agent Researcher · ChatGPT avec connecteurs",
        prompt: "Pour mon point d'équipe de lundi 9 h, synthétise les décisions prises dans nos 5 canaux Teams la semaine dernière, les sujets en attente de réponse, les points bloquants signalés par les managers, et propose 3 sujets pour l'ordre du jour. Format : une page.",
        verdictText: "**Copilot gagne** : Teams résume les réunions et capte les actions à suivre, et l'agent Researcher croise canaux, mails et documents SharePoint avec la licence complète. ChatGPT dépend des connecteurs disponibles dans votre espace de travail.",
        winner: "a",
      },
      {
        scenario: "Trouver 20 idées de campagne pour un lancement de produit",
        feature: "ChatGPT (GPT-5.6 Sol) · Copilot Chat",
        prompt: "Nous lançons une gamme de yaourts bio haut de gamme destinée aux jeunes parents urbains. Propose 20 angles de communication, 10 slogans au ton décalé mais haut de gamme, 5 animations en magasin et 3 concepts pour des micro-influenceurs parents.",
        verdictText: "**ChatGPT prend l'avantage** en mise en situation : il varie davantage les angles et enchaîne sur les visuels. Copilot reste plus proche des documents de l'entreprise, ce qui sert quand la campagne doit coller à une stratégie déjà écrite.",
        winner: "b",
      },
    ],

    mistakes: [
      {
        title: "Acheter Copilot pour des équipes qui travaillent peu dans Office",
        desc: "La licence complète prend sa valeur dans Outlook, Word, Excel, PowerPoint et Teams. Si vos équipes vivent surtout dans un CRM ou des outils métier, mesurez d'abord l'usage réel d'Office : 26 € HT par mois et par utilisateur se justifient mal sur un poste qui ouvre rarement Word.",
      },
      {
        title: "Penser que Copilot suffit et se priver de ChatGPT",
        desc: "ChatGPT garde l'avantage sur la création visuelle, le code et les tâches hors Microsoft 365. À 21 € par utilisateur et par mois en annuel, ChatGPT Business couvre ces usages pour les profils qui en ont besoin.",
      },
      {
        title: "Comparer une fenêtre de contexte d'API avec celle de l'interface",
        desc: "Les modèles GPT-6 lisent 1 050 000 tokens via l'API, mais ChatGPT Business s'arrête à 54 000 en mode instantané et 256 000 en raisonnement. Microsoft ne publie pas de fenêtre pour Copilot, qui va chercher le passage utile dans Graph. Comparez ce dont vos utilisateurs disposent.",
      },
      {
        title: "Budgéter les licences sans les agents",
        desc: "Les deux éditeurs facturent l'automatisation à part. Copilot Studio se paie en crédits pour les agents autonomes ou ouverts sur l'extérieur, et Copilot Cowork à l'usage. Chez OpenAI, ChatGPT Work, Codex et les agents d'espace de travail consomment des crédits au-delà de l'enveloppe incluse depuis le 6 juillet 2026.",
      },
      {
        title: "Sous-estimer le temps de formation à Copilot",
        desc: "Copilot se comporte différemment dans Word, Excel, Outlook et Teams : une formation par application, sur les documents de l'équipe, évite que l'outil reste sous-utilisé.",
      },
      {
        title: "Oublier la sécurité de Microsoft Graph",
        desc: "Copilot accède à tout ce que l'utilisateur peut techniquement voir. Si des sites SharePoint sont partagés trop largement, il peut faire remonter des documents que personne n'aurait ouverts à la main. Microsoft fournit SharePoint Advanced Management et la restriction de découverte de contenu pour nettoyer ces accès avant le déploiement.",
      },
      {
        title: "Confondre GitHub Copilot et Microsoft 365 Copilot",
        desc: "Ce sont deux produits. GitHub Copilot sert les développeurs (Pro à 10 $ par mois, Business à 19 $ par siège, Enterprise à 39 $). Microsoft 365 Copilot sert les utilisateurs d'Office. Pour vos développeurs, achetez GitHub Copilot.",
      },
    ],

    alsoConsidered: [
      { name: "GitHub Copilot", summary: "L'achat Microsoft pour le code : Business à 19 $ par siège et par mois, avec des modèles d'Anthropic, d'OpenAI et de Google au choix. Distinct de Microsoft 365 Copilot." },
      { name: "Google Gemini", summary: "L'équivalent de Copilot pour Google Workspace, inclus dans les forfaits dès Business Starter. Voir [Gemini vs Copilot](/gemini-vs-copilot)." },
      { name: "Claude", summary: "Un million de tokens par conversation sur les offres payantes et Claude Code dès l'offre Pro. Voir notre [comparatif ChatGPT vs Claude](/chatgpt-vs-claude)." },
      { name: "Vibe (Mistral AI)", summary: "Anciennement Le Chat, renommé le 28 mai 2026, avec des données hébergées dans l'Union européenne par défaut. Voir [Mistral vs ChatGPT](/mistral-vs-chatgpt)." },
    ],

    faq: [
      {
        q: "Si l'entreprise a déjà Microsoft 365, Copilot remplace-t-il ChatGPT ?",
        a: "Pas entièrement. Copilot excelle dans Office et sur vos données internes ; ChatGPT garde l'avantage sur l'image, le code et les tâches hors Microsoft 365. Une configuration courante équipe tout le monde de Copilot et réserve ChatGPT aux profils qui en ont l'usage.",
      },
      {
        q: "Copilot est-il plus sécurisé que ChatGPT ?",
        a: "Pour les données en Europe, Copilot part avec une longueur d'avance : traitements dans le périmètre de Microsoft 365 et EU Data Boundary pour les utilisateurs européens, hors modèles d'Anthropic. ChatGPT Enterprise offre le stockage et l'inférence en Europe aux clients éligibles ; ChatGPT Business stocke en Europe en déploiement progressif, sans inférence européenne. Aucun des deux n'entraîne ses modèles sur vos données d'entreprise.",
      },
      {
        q: "Faut-il Microsoft 365 pour utiliser Copilot ?",
        a: "Oui pour la version entreprise : Microsoft 365 Copilot s'ajoute à une licence éligible, de Business Basic à Microsoft 365 E5, en passant par Office 365 E1, E3 et E5. Copilot Chat est inclus avec les abonnements Microsoft 365 éligibles. Pour un particulier, Microsoft vend Microsoft 365 Premium à 22 € par mois.",
      },
      {
        q: "Quelle est la fenêtre de contexte de ChatGPT, et Copilot en a-t-il une ?",
        a: "Chez ChatGPT, il faut distinguer **l'interface** (54 000 tokens en mode instantané et 256 000 en raisonnement sur Business ; 128 000 et 256 000 sur Enterprise) et **l'API** (1 050 000 tokens pour les modèles GPT-6). Microsoft ne publie pas de fenêtre pour Copilot : l'outil s'appuie sur Microsoft Graph pour aller chercher le passage pertinent dans vos fichiers, une logique de recherche plus que d'ingestion.",
      },
      {
        q: "Quel est le coût annuel de Copilot et de ChatGPT pour 50 collaborateurs ?",
        a: "**ChatGPT Business** : 50 × 21 € × 12 = 12 600 € par an en facturation annuelle. **Microsoft 365 Copilot Business** (jusqu'à 300 utilisateurs) : 50 × 18,20 € HT × 12 = 10 920 € HT par an, en plus des licences Microsoft 365, ou 9 360 € HT la première année avec la remise ouverte aux souscriptions du 1er juillet au 31 décembre 2026. **Les deux** : de l'ordre de 23 500 € par an. Ajoutez les crédits d'agents si vous automatisez.",
      },
      {
        q: "L'offre ChatGPT Team existe-t-elle encore ?",
        a: "Non. OpenAI a renommé ChatGPT Team en **ChatGPT Business** le 29 août 2025. Le principe reste le même (espace de travail partagé, connecteurs, aucun entraînement sur vos données), avec depuis le 24 août 2026 des sièges Premium à 100 $ par mois en annuel pour les profils intensifs.",
      },
      {
        q: "Faut-il former différemment les équipes à Copilot et à ChatGPT ?",
        a: "Oui. Une formation ChatGPT travaille la formulation des demandes, les projets, ChatGPT Work et les agents. Une formation Copilot se construit application par application (Word, Excel, Outlook, Teams), sur les documents de l'équipe. Masteria propose les deux, et une formation multi-outils de deux jours si le choix n'est pas fait.",
      },
      {
        q: "Copilot fonctionne-t-il sur Mac ?",
        a: "Oui pour les usages documentés par Microsoft : Copilot fonctionne dans Outlook pour Windows et Mac, et dans Teams sur Windows, Mac, le web, Android et iOS. Vérifiez la version d'Office installée sur les postes avant le déploiement.",
      },
      {
        q: "Quelle est la différence entre Microsoft 365 Premium et Microsoft 365 Copilot ?",
        a: "**Microsoft 365 Premium** (22 € par mois ou 219 € par an) est l'abonnement grand public, pour 1 à 6 personnes, avec l'IA réservée au titulaire ; la page Copilot Pro de la boutique Microsoft renvoie désormais vers lui. **Microsoft 365 Copilot** (26 € HT par utilisateur et par mois en annuel) est la licence entreprise qui s'ajoute à votre abonnement professionnel et ancre les réponses dans Microsoft Graph.",
      },
      {
        q: "Microsoft a-t-il accès à mes données via Copilot ?",
        a: "Microsoft indique que les prompts et réponses de Copilot restent dans le périmètre du service Microsoft 365, sous vos règles de conservation, et ne servent pas à entraîner les grands modèles de langage. Point à connaître : si vous activez les modèles d'Anthropic, Anthropic intervient comme sous-traitant de Microsoft, et ces traitements sortent de l'EU Data Boundary.",
      },
      {
        q: "Peut-on déployer Copilot progressivement ?",
        a: "Oui. Les licences s'attribuent utilisateur par utilisateur depuis le centre d'administration Microsoft 365 : commencez par un groupe pilote, suivez l'usage avec les rapports d'adoption, puis étendez.",
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
    metaTitle: "Meilleure IA entreprise 2026 : comparatif de 5 outils | Masteria",
    metaDesc:
      "ChatGPT, Claude, Microsoft Copilot, Gemini et Mistral (Vibe) : contexte réel, agents, prix par siège, hébergement. Comparatif vérifié le 3 octobre 2026.",
    h1: "Quelle est la meilleure IA pour votre entreprise en 2026 ?",
    intro:
      "Vous voulez équiper vos équipes d'un outil d'IA et vous hésitez entre **ChatGPT**, **Claude**, **Microsoft Copilot**, **Google Gemini** et **Mistral AI** ? La réponse dépend de trois choses : votre suite bureautique, le métier dominant de vos équipes et vos contraintes réglementaires. Ce guide donne les critères de décision, avec les modèles, les prix et les fenêtres de contexte vérifiés le 3 octobre 2026 sur les pages officielles des cinq éditeurs.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "3 octobre 2026",
    datePublished: "2026-05-04",
    dateModified: "2026-10-03",
    readTime: "13 minutes",
    keywords:
      "benchmark ia 2026, benchmark ia entreprise, benchmark des ia, meilleure ia entreprise 2026, comparatif chatgpt claude copilot gemini mistral, quelle ia choisir entreprise, gpt-6, claude opus 5.5, gemini 3, vibe mistral, prix ia entreprise par siège",
    isPanorama: true,

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Quelle IA choisir pour son entreprise en 2026 ?",
      answer:
        "Aucun outil ne gagne partout : les cinq répondent à des questions différentes. Sur **Microsoft 365**, prenez **Copilot** (26 € HT par utilisateur et par mois, ou 18,20 € HT avec Copilot Business jusqu'à 300 utilisateurs) : il lit vos mails, vos fichiers et vos réunions via Microsoft Graph. Sur **Google Workspace**, prenez **Gemini**, inclus dans les forfaits, avec un million de tokens de contexte dans l'application Gemini dès Business Standard. Pour les documents longs et le code, prenez **Claude** : un million de tokens par conversation sur ses offres payantes et Claude Code dès l'offre Pro. Pour la création visuelle et les agents d'équipe montés sans code, prenez **ChatGPT**. Pour un hébergement européen par défaut et des modèles à poids ouverts déployables chez vous, prenez **Mistral AI** et son assistant **Vibe**.",
      bullets: [
        "Stack Microsoft 365 : Copilot, 26 € HT par utilisateur ou 18,20 € HT en Copilot Business",
        "Stack Google Workspace : Gemini, inclus dans les forfaits",
        "Documents longs, contrats, code : Claude, un million de tokens par conversation",
        "Images et agents d'équipe sans code : ChatGPT",
        "Hébergement européen et poids ouverts : Mistral AI (Vibe)",
      ],
    },

    tools: [
      { id: "chatgpt", name: "ChatGPT", editor: "OpenAI", country: "États-Unis", strengths: "Images, ChatGPT Work, agents d'équipe, Codex", priceMonthly: "23 € Plus · 21 € Business", color: "#10A37F" },
      { id: "claude", name: "Claude", editor: "Anthropic", country: "États-Unis", strengths: "Un million de tokens, Claude Code, Cowork intégré", priceMonthly: "20 $ Pro · 25 $ Team", color: "#D97706" },
      { id: "copilot", name: "Microsoft Copilot", editor: "Microsoft", country: "États-Unis", strengths: "Ancrage Microsoft Graph, Copilot Studio, gouvernance", priceMonthly: "26 € HT + licence M365", color: "#0078D4" },
      { id: "gemini", name: "Google Gemini", editor: "Google", country: "États-Unis", strengths: "Inclus dans Workspace, Gemini Notebook, vidéo avec Vids", priceMonthly: "inclus dans Workspace", color: "#4285F4" },
      { id: "mistral", name: "Mistral AI (Vibe)", editor: "Mistral AI", country: "France", strengths: "Hébergement UE par défaut, poids ouverts, Vibe Work et Code", priceMonthly: "17,99 € TTC Pro", color: "#FA500F" },
    ],

    verdict: {
      title: "Verdict express : 5 profils, 5 recommandations",
      summary:
        "La meilleure IA de 2026 est celle qui correspond à votre contexte. Cinq profils, cinq recommandations :",
      profiles: [
        { profile: "Entreprise sur Microsoft 365", tool: "Microsoft Copilot", why: "Ancré dans Microsoft Graph : vos mails, vos fichiers et vos réunions, avec les permissions déjà en place. 26 € HT par utilisateur et par mois, ou 18,20 € HT en Copilot Business jusqu'à 300 utilisateurs." },
        { profile: "Entreprise sur Google Workspace", tool: "Google Gemini", why: "Même logique dans Gmail, Docs et Sheets, inclus dans les forfaits Workspace, avec un million de tokens de contexte dès Business Standard." },
        { profile: "Marketing, communication, créatif", tool: "ChatGPT", why: "ChatGPT Images 2.5 pour les visuels, ChatGPT Work pour les livrables complets, agents d'équipe montés en langage naturel." },
        { profile: "Code, analyse, documents longs", tool: "Claude", why: "Un million de tokens par conversation sur les offres payantes, Claude Code dès l'offre Pro, Cowork intégré à la conversation." },
        { profile: "Hébergement européen et secteur sensible", tool: "Mistral AI (Vibe)", why: "Éditeur français, données hébergées dans l'UE par défaut, modèles à poids ouverts et déploiement sur site dans l'offre Enterprise." },
      ],
    },

    deepDive: [
      {
        tool: "chatgpt",
        title: "ChatGPT (OpenAI)",
        position: "Le généraliste le plus complet",
        pros: [
          "ChatGPT Work (9 juillet 2026) mène une tâche longue jusqu'au livrable : document, tableur, présentation ou site",
          "Agents d'espace de travail partagés, planifiés, déclenchés depuis Slack ou par API (Business et Enterprise)",
          "ChatGPT Images 2.5 pour créer et retoucher des images",
          "GPT-5.6 Sol dans la conversation, GPT-6 Pro sur Business et Enterprise, GPT-6 Astra et GPT-6.1 Sol dans Work et Codex",
          "Extensions officielles pour Word, Excel et PowerPoint, ouvertes à toutes les offres",
        ],
        cons: [
          "54 000 tokens en mode instantané et 256 000 en raisonnement sur Business, loin du million de Claude ou de Gemini",
          "Plus de génération vidéo depuis l'arrêt de Sora le 26 avril 2026",
          "Au-delà de l'enveloppe incluse, Work, Codex et les agents se paient en crédits",
          "Sur Business, stockage en Europe en déploiement et inférence hors région",
        ],
        idealFor: "Marketing, communication, équipes créatives, PME et start-up, automatisations d'équipe",
      },
      {
        tool: "claude",
        title: "Claude (Anthropic)",
        position: "La référence documentaire et technique",
        pros: [
          "Un million de tokens par conversation sur les offres payantes avec Fable 5.1, Opus 5.5 et Sonnet 5.5",
          "Claude Code inclus dans Pro, Max, Team et Enterprise",
          "Cowork intégré à la conversation depuis le 16 septembre 2026 : fichiers, applications connectées, tâches planifiées",
          "Claude Slides, Docs et Design (en bêta) pour produire des présentations et des documents exportables",
          "MCP, le standard ouvert de connexion aux outils créé par Anthropic, adopté par ChatGPT, Gemini et Microsoft Copilot",
        ],
        cons: [
          "Aucune génération de photos ni d'illustrations",
          "Aucune région européenne chez Anthropic : en Europe, passer par AWS Bedrock ou Google Cloud Vertex AI",
          "Claude Code absent de l'offre gratuite",
        ],
        idealFor: "Développement, analyse documentaire, juridique, finance, appels d'offres",
      },
      {
        tool: "copilot",
        title: "Microsoft 365 Copilot",
        position: "Le choix par défaut en environnement Microsoft",
        pros: [
          "Intégré à Word, Excel, PowerPoint, Outlook, Teams et OneNote",
          "Réponses ancrées dans Microsoft Graph et Work IQ : mails, fichiers, réunions, agenda, avec vos permissions",
          "Modèles d'OpenAI et d'Anthropic au choix, avec routage automatique",
          "Copilot Studio pour les agents métier, Copilot Cowork pour exécuter des tâches avec validation de chaque action",
          "EU Data Boundary (le périmètre européen de traitement de Microsoft) pour les utilisateurs européens, hors modèles d'Anthropic",
        ],
        cons: [
          "Licence complète à 26 € HT par utilisateur et par mois, en plus de Microsoft 365",
          "Agents autonomes et Copilot Cowork facturés en plus de la licence",
          "Modèles d'Anthropic désactivés par défaut dans l'UE et exclus de l'EU Data Boundary",
          "Audit des permissions SharePoint indispensable avant le déploiement",
        ],
        idealFor: "Grandes entreprises sous Microsoft 365, secteurs régulés, productivité Office au quotidien",
      },
      {
        tool: "gemini",
        title: "Google Gemini",
        position: "Le pendant Google de Copilot",
        pros: [
          "Intégré à Gmail, Docs, Sheets, Slides, Vids, Drive, Meet et Chat",
          "Inclus dans les forfaits Workspace : Business Standard à 13,60 € HT par utilisateur et par mois en annuel",
          "Un million de tokens de contexte dans l'application Gemini dès Business Standard",
          "Gemini Notebook (anciennement NotebookLM) : 300 sources par carnet, avec citation du passage d'origine",
          "Vidéo générée dans Vids et dans l'application Gemini",
        ],
        cons: [
          "Business Starter limité : accès restreint dans les applications, 32 000 tokens, 50 sources par carnet",
          "L'atelier d'agents Workflow Builder relève de Gemini Enterprise, licence distincte à partir de 21 $ par siège",
          "Modèle Pro plafonné à 25 requêtes par tranche de 4 heures en Business Standard",
        ],
        idealFor: "Entreprises sur Google Workspace, médias, éducation, équipes qui travaillent sur corpus",
      },
      {
        tool: "mistral",
        title: "Mistral AI (Vibe)",
        position: "La carte de l'hébergement européen",
        pros: [
          "Données hébergées dans l'Union européenne par défaut",
          "Modèles à poids ouverts (téléchargeables et exécutables chez vous) : Mistral Medium 3.5, Mistral Large 3, Mistral Small 4",
          "Déploiement sur site ou en cloud privé dans l'offre Enterprise",
          "Vibe réunit un mode Work (recherche, documents, tâches planifiées) et un mode Code (terminal, VS Code, JetBrains)",
          "Prix d'entrée bas : Pro à 17,99 € TTC par mois, Team à 29,99 € TTC par utilisateur",
        ],
        cons: [
          "Échanges Vibe utilisés pour l'entraînement par défaut hors Enterprise, à désactiver",
          "Connecteurs et MCP personnalisés encore en bêta",
          "Fenêtre de contexte de l'interface non détaillée par offre",
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
      title: "L'essentiel en un tableau",
      note: "Faits vérifiés le 3 octobre 2026 sur les pages officielles des cinq éditeurs. Les deux lignes de contexte sont séparées à dessein : celle de l'interface décrit ce dont disposent vos équipes, celle de l'API ce qu'obtient un développeur. Les prix sont ceux affichés pour la France, sauf Claude, affiché en dollars hors taxes.",
    },
    comparisonTable: [
      { criterion: "Modèles actuels", chatgpt: "GPT-5.6 Sol, GPT-6 Pro ; GPT-6 Astra et GPT-6.1 Sol dans Work et Codex", claude: "Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 4.5", copilot: "Modèles d'OpenAI et d'Anthropic, routage automatique", gemini: "Famille Gemini 3 (3.1 Pro et 3.8 Flash côté API)", mistral: "Medium 3.5, Large 3, Small 4" },
      { criterion: "Prix mensuel par utilisateur", chatgpt: "23 € Plus · 21 € Business en annuel", claude: "20 $ Pro · 25 $ Team (20 $ en annuel)", copilot: "26 € HT + licence M365 · 18,20 € HT en Copilot Business", gemini: "Inclus : Business Standard à 13,60 € HT en annuel", mistral: "17,99 € TTC Pro · 29,99 € TTC Team" },
      { criterion: "Contexte dans l'interface", chatgpt: "54 000 tokens, 256 000 en raisonnement (Plus, Business)", claude: "1 000 000 de tokens sur les offres payantes", copilot: "Non publié : ancrage Graph", gemini: "1 000 000 dès Business Standard, 32 000 en Starter", mistral: "Non détaillé par offre" },
      { criterion: "Contexte via API", chatgpt: "1 050 000 tokens (GPT-6)", claude: "1 000 000 de tokens", copilot: "Sans objet : Copilot s'utilise comme produit", gemini: "Selon le modèle de l'API Gemini", mistral: "256 000 tokens (Medium 3.5, Large 3)" },
      { criterion: "Génération d'images", chatgpt: "Oui, ChatGPT Images 2.5", claude: "Non : schémas et maquettes seulement", copilot: "Oui dans Copilot Chat, si l'administrateur l'autorise", gemini: "Oui, Nano Banana dans l'application Gemini", mistral: "Oui, dans Vibe" },
      { criterion: "Mode agent", chatgpt: "ChatGPT Work et agents d'espace de travail, crédits au-delà de l'enveloppe", claude: "Cowork intégré à la conversation, dès Pro", copilot: "Copilot Studio et Copilot Cowork (à l'usage)", gemini: "Workspace Studio ; Workflow Builder via Gemini Enterprise", mistral: "Vibe Work, tâches planifiées, workflows depuis Mistral Studio" },
      { criterion: "Assistant de code inclus", chatgpt: "Codex, avec des limites dès l'offre gratuite", claude: "Claude Code, dès Pro", copilot: "Non : GitHub Copilot vendu à part", gemini: "Import de dépôts GitHub dans l'application Gemini", mistral: "Vibe Code (terminal, VS Code), Devstral 2 en poids ouverts" },
      { criterion: "Hébergement en Europe", chatgpt: "Enterprise et Edu (clients éligibles) ; stockage seul, en déploiement, sur Business", claude: "Non : États-Unis ou infrastructure mondiale", copilot: "Oui, EU Data Boundary (hors modèles d'Anthropic)", gemini: "Régions de données sur les éditions Enterprise", mistral: "Oui, par défaut" },
      { criterion: "Entraînement sur vos données (offre équipe)", chatgpt: "Non par défaut (Business, Enterprise)", claude: "Non par défaut (Team, Enterprise)", copilot: "Non", gemini: "Non (éditions Workspace)", mistral: "Oui par défaut sur Team, désactivable ; non sur Enterprise" },
      { criterion: "Déploiement sur vos serveurs", chatgpt: "Non (OpenAI publie à part les modèles ouverts gpt-oss)", claude: "Non", copilot: "Non", gemini: "Non pour Gemini dans Workspace", mistral: "Oui : poids ouverts et offre Enterprise sur site" },
    ],

    faq: [
      {
        q: "Peut-on utiliser plusieurs IA en même temps dans une entreprise ?",
        a: "Oui. Une configuration possible associe le copilote de votre suite (Copilot ou Gemini) pour le quotidien, un assistant généraliste (ChatGPT ou Claude) pour les tâches créatives ou longues, et Mistral pour les flux sensibles. Chiffrez le surcoût : un assistant généraliste en offre équipe coûte autour de 20 à 25 par siège et par mois, en euros chez OpenAI, en dollars chez Anthropic.",
      },
      {
        q: "Comment choisir son IA d'entreprise si l'on n'a pas encore de suite dominante ?",
        a: "Commencez par un assistant généraliste en offre équipe, **ChatGPT Business** (21 € par utilisateur et par mois en annuel) ou **Claude Team** (20 $ en annuel), selon le métier dominant. Réévaluez au bout de trois à six mois selon ce qui remonte du terrain : besoin d'intégration à Office vers Copilot, documents longs et code vers Claude, contraintes d'hébergement vers Mistral.",
      },
      {
        q: "Quelle IA accepte les documents les plus longs ?",
        a: "Dans l'interface, **Claude** et **Gemini** sont à égalité : un million de tokens par conversation sur les offres payantes de Claude, et dans l'application Gemini dès Business Standard (32 000 en Business Starter). ChatGPT Plus et Business s'arrêtent à 54 000 tokens en mode instantané et 256 000 en raisonnement. Microsoft ne publie pas de limite pour Copilot, qui va chercher le passage utile dans vos fichiers. Les chiffres de l'API concernent les développeurs ; vérifiez toujours la limite de l'offre que vos équipes utilisent.",
      },
      {
        q: "Combien coûte une formation pour comparer les cinq outils d'IA ?",
        a: "Notre formation multi-outils de deux jours fait tester les cinq outils sur les cas d'usage de vos équipes. Tarif : **1 980 € HT la journée** en intra pour le groupe (jusqu'à 12 participants), au même tarif en individuel, TVA de 20 % en sus. Selon votre branche, votre OPCO peut la financer : nous préparons le programme et la convention, et l'entreprise dépose sa demande avant la session.",
      },
      {
        q: "Et l'IA chinoise (DeepSeek, Qwen) pour une entreprise française ?",
        a: "Posez les mêmes questions qu'à tout éditeur : lieu de traitement des données, droit applicable, garanties contractuelles, usage des échanges pour l'entraînement. Un modèle à poids ouverts exécuté sur votre propre infrastructure n'envoie rien à l'éditeur, quel que soit son pays d'origine ; une application en ligne, si.",
      },
      {
        q: "Existe-t-il un benchmark IA 2026 fiable pour choisir son outil ?",
        a: "Aucun ne suffit seul, et c'est le piège. Les classements publics (arènes de préférence, tests académiques, tableaux des éditeurs) mesurent des modèles sur des exercices standardisés, à une date donnée, souvent dans une version absente de l'offre entreprise. Ils changent tous les mois et ne disent rien de l'intégration à vos outils, de la gouvernance des données ni du prix par siège. Un benchmark utile se fait sur vos propres cas : cinq à dix tâches réelles (un courriel client, un compte rendu, une analyse de tableau, une synthèse de contrat), soumises aux outils candidats dans leur version entreprise et notées par les personnes qui feront le travail. Quand nous citons une étude, nous indiquons le modèle testé et la période de collecte.",
      },
      {
        q: "Quel est le retour sur investissement d'un déploiement d'IA en entreprise ?",
        a: "Aucun chiffre moyen ne vaut pour votre entreprise. Mesurez le temps passé sur cinq à dix tâches récurrentes avant et après le déploiement, puis décidez de ce que devient le temps libéré : c'est ce choix qui fait apparaître le retour sur investissement. Notre page sur le ROI de l'IA en entreprise détaille la méthode.",
      },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Ce qui a changé depuis notre version d'août 2026",
      items: [
        { date: "Septembre 2026", text: "Anthropic a lancé Claude Fable 5.1 le 1er septembre, Opus 5.5 le 22 et Sonnet 5.5 le 28 ; les trois lisent un million de tokens par conversation sur les offres payantes. Le 16 septembre, Cowork a rejoint la conversation de Claude." },
        { date: "Septembre 2026", text: "OpenAI a présenté GPT-6 Astra le 3 septembre, puis GPT-6 Sol, GPT-6 Luna et GPT-6.1 Sol pour ChatGPT Work et Codex ; la conversation reste sur GPT-5.6, avec GPT-6 Pro sur Business et Enterprise." },
        { date: "Octobre 2026", text: "Au 3 octobre 2026, Google renomme NotebookLM en Gemini Notebook, avec 300 sources par carnet dès Business Standard, et l'application Gemini lit un million de tokens sur ces éditions. Chez Microsoft, Copilot Business coûte 18,20 € HT jusqu'à 300 utilisateurs et propose des modèles d'Anthropic." },
        { date: "Mai 2026", text: "Mistral AI a renommé son assistant Le Chat en Vibe le 28 mai. La gamme de modèles s'articule désormais autour de Mistral Medium 3.5, Large 3 et Small 4 ; les modèles de raisonnement Magistral sont dépréciés." },
        { date: "Correction", text: "Nous annoncions NotebookLM Plus limité à 100 sources par carnet. La documentation de Google donne 300 sources en Business Standard, Business Plus et Enterprise, et 50 en Business Starter." },
        { date: "Correction", text: "Nous écrivions que Mistral était le seul du panorama à publier des modèles à poids ouverts : OpenAI a publié les siens (gpt-oss) en août 2025. Nous citions aussi Sora 2 pour la vidéo dans ChatGPT (application fermée le 26 avril 2026), un hébergement européen en option chez Claude (il n'existe pas) et Claude Code dans l'offre gratuite (il n'y figure pas)." },
      ],
    },

    methodology:
      "Ce panorama est rédigé par Masteria, cabinet lyonnais spécialisé en intelligence artificielle depuis 2022, qui forme les équipes aux cinq outils comparés. Les verdicts par cas reposent sur des mises en situation de formation construites sur des tâches réelles (marketing, RH, finance, juridique, bureautique). Les faits produit, les fenêtres de contexte et les tarifs ont été revérifiés le **3 octobre 2026** sur les pages officielles des cinq éditeurs listées ci-dessous. Versions de référence : **GPT-5.6 Sol et GPT-6 Pro**, **Claude Opus 5.5 et Sonnet 5.5**, **Microsoft 365 Copilot**, **Gemini pour Workspace (Business Standard)**, **Mistral Medium 3.5 et Vibe**.",

    citations: [
      { name: "OpenAI : tarifs de ChatGPT (page France)", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "OpenAI : notes de version de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "OpenAI : notes de version des modèles (gpt-oss, août 2025)", url: "https://help.openai.com/en/articles/9624314-model-release-notes" },
      { name: "OpenAI : GPT-5.6 et GPT-6 Pro dans ChatGPT", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "OpenAI : arrêt de Sora", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
      { name: "OpenAI : résidence des données et de l'inférence", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "OpenAI : modèles de l'API", url: "https://developers.openai.com/api/docs/models" },
      { name: "Anthropic : offres et tarifs de Claude", url: "https://claude.com/pricing" },
      { name: "Anthropic : fenêtre de contexte des offres payantes (centre d'aide)", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
      { name: "Anthropic : notes de version des applications Claude", url: "https://support.claude.com/en/articles/12138966-release-notes" },
      { name: "Anthropic : résidence des données (documentation de la plateforme)", url: "https://platform.claude.com/docs/en/manage-claude/data-residency" },
      { name: "Microsoft : tarifs de Microsoft 365 Copilot pour les grandes entreprises (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise" },
      { name: "Microsoft : Microsoft 365 Copilot Business pour les PME (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
      { name: "Microsoft Learn : présentation de Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Microsoft Learn : modèles d'Anthropic dans les services Microsoft", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
      { name: "Google Workspace : tarifs (France)", url: "https://workspace.google.com/intl/fr/pricing" },
      { name: "Google : application Gemini avec un compte professionnel, limites par édition", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
      { name: "Google Workspace : Gemini Notebook par édition", url: "https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/turn-gemini-notebook-on-or-off-for-users" },
      { name: "Google Workspace : limites d'usage de l'IA par édition", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
      { name: "Google Cloud : Gemini Enterprise", url: "https://cloud.google.com/gemini-enterprise" },
      { name: "Google : modèles de l'API Gemini", url: "https://ai.google.dev/gemini-api/docs/models" },
      { name: "Mistral AI : tarifs", url: "https://mistral.ai/pricing" },
      { name: "Mistral AI : modèles", url: "https://mistral.ai/models" },
      { name: "Mistral AI : Le Chat devient Vibe (centre d'aide)", url: "https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe" },
      { name: "Mistral AI : utilisation des données pour l'entraînement", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
      { name: "Mistral AI : lieu de stockage des données", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
    ],

    realCases: [
      {
        scenario: "Préparer une présentation client de 10 diapositives",
        feature: "Tâche du quotidien : construire une présentation à partir d'un document Word",
        verdictText: "**Microsoft Copilot prend l'avantage** si vous travaillez dans PowerPoint : il construit la présentation depuis le document et met en forme tout le fichier. **Gemini** fait l'équivalent dans Slides. **ChatGPT** et **Claude** produisent aussi des présentations, l'un par son extension PowerPoint, l'autre avec Claude Slides (en bêta), exportable en PowerPoint.",
        winner: "copilot",
      },
      {
        scenario: "Générer 5 visuels marketing pour LinkedIn",
        feature: "Tâche du quotidien : production de visuels de communication",
        verdictText: "**ChatGPT gagne** avec ChatGPT Images 2.5, qui part d'un modèle ou d'un croquis et accepte des retouches ciblées. **Gemini** génère aussi des images (Nano Banana dans l'application Gemini, images dans Slides). **Vibe** génère des images. **Claude** ne produit ni photos ni illustrations.",
        winner: "chatgpt",
      },
      {
        scenario: "Analyser un rapport de 400 pages et en faire la synthèse",
        feature: "Tâche du quotidien : digestion de documents longs",
        verdictText: "**Match nul entre Claude et Gemini** : les deux lisent un million de tokens par conversation, Claude sur ses offres payantes, Gemini dès Business Standard, et le rapport entier passe en une fois. **Gemini Notebook** ajoute un carnet de 300 sources avec citation du passage. **ChatGPT** s'arrête à 256 000 tokens en raisonnement sur Plus et Business, soit environ 320 pages selon OpenAI : au-delà, il faut découper.",
        winner: "tie",
      },
      {
        scenario: "Trier ses 30 courriels du matin et préparer ses brouillons",
        feature: "Tâche du quotidien : gestion de la boîte de réception",
        verdictText: "**Microsoft Copilot gagne dans Outlook** grâce à l'accès à la boîte mail et à l'agenda via Microsoft Graph. **Gemini** est l'équivalent dans Gmail. **ChatGPT** et **Claude** y arrivent par des connecteurs, avec un résultat qui dépend de ce que chaque utilisateur a branché.",
        winner: "copilot",
      },
      {
        scenario: "Construire un budget prévisionnel sur Excel ou Google Sheets",
        feature: "Tâche du quotidien : modélisation financière simple",
        verdictText: "**Match nul** : Copilot travaille dans Excel, Gemini dans Sheets (création et modification de feuilles, 100 par mois en Business Standard), et ChatGPT comme Claude disposent d'une extension pour Excel. La relecture des formules reste à votre charge.",
        winner: "tie",
      },
      {
        scenario: "Construire un agent simple pour automatiser une tâche récurrente",
        feature: "Tâche pro : monter un petit agent métier sans code",
        verdictText: "**Les agents d'espace de travail ChatGPT** se montent le plus vite : rôle, déclencheur et étapes se décrivent en langage naturel ; depuis le 6 juillet 2026, leurs exécutions consomment des crédits. **Microsoft Copilot Studio** est l'équivalent gouverné dans l'écosystème Microsoft. **Gemini** propose Workspace Studio pour des flux décrits en langage naturel. **Claude** planifie des tâches depuis la conversation, la connexion aux outils passant par MCP.",
        winner: "chatgpt",
      },
      {
        scenario: "Refactorer 1 000 lignes de code ancien",
        feature: "Tâche pro : refactoring et qualité de code",
        verdictText: "**Claude gagne** : Claude Code, inclus dès l'offre Pro, lit le module entier avec une fenêtre d'un million de tokens, et Anthropic présente Opus 5.5 comme son meilleur modèle Opus en programmation agentique. ChatGPT reste compétitif avec Codex. Microsoft 365 Copilot n'est pas conçu pour cette mission : Microsoft vend GitHub Copilot à part.",
        winner: "claude",
      },
      {
        scenario: "Garantir que mes données restent en France ou en Europe",
        feature: "Contrainte réglementaire : localisation des données",
        verdictText: "**Mistral AI gagne** : données hébergées dans l'UE par défaut, modèles à poids ouverts, déploiement sur site dans l'offre Enterprise ; réglez l'entraînement, actif par défaut sur Vibe hors Enterprise. **Microsoft Copilot** garde le trafic des utilisateurs européens dans l'EU Data Boundary, hors modèles d'Anthropic. **ChatGPT Enterprise** propose stockage et inférence en Europe aux clients éligibles. **Claude** n'offre pas de région européenne.",
        winner: "mistral",
      },
    ],

    mistakes: [
      {
        title: "Choisir le « meilleur » outil dans l'absolu plutôt que le bon pour son contexte",
        desc: "La question de la meilleure IA n'a pas de réponse unique. Le bon outil dépend de votre suite (Microsoft, Google ou aucune), de votre métier dominant et de vos contraintes. Choisir ChatGPT pour une entreprise qui vit dans Microsoft 365, c'est se priver de l'ancrage de Copilot dans les mails et les fichiers.",
      },
      {
        title: "N'évaluer qu'un seul outil avant de décider",
        desc: "L'outil le plus connu s'impose souvent sans test. Sur les documents longs, le code ou l'analyse, l'écart entre outils se voit pourtant vite. Testez au moins deux outils sur deux ou trois tâches réelles avant de signer.",
      },
      {
        title: "Sous-estimer le coût de la non-formation",
        desc: "Un abonnement sans formation reste sous-exploité. Le retour sur investissement vient de l'appropriation : formulation des demandes, choix du bon mode, vérification des sorties. Budgétez la formation avec les licences.",
      },
      {
        title: "Vouloir un outil unique « définitif »",
        desc: "Le marché bouge chaque trimestre : en septembre 2026, Anthropic a sorti trois modèles et OpenAI a lancé la famille GPT-6. Verrouiller un choix pour cinq ans expose à payer le mauvais outil. Équipez vos équipes de deux outils complémentaires et réévaluez chaque année.",
      },
      {
        title: "Oublier les contraintes réglementaires de votre secteur",
        desc: "En santé, défense, finance régulée ou secteur public, l'hébergement et la gouvernance des données changent le bon choix. Mistral héberge dans l'UE par défaut et propose le déploiement sur site ; Copilot reste dans l'EU Data Boundary ; ChatGPT Enterprise offre stockage et inférence en Europe aux clients éligibles ; Claude n'a pas de région européenne.",
      },
    ],

    costScenarios: [
      {
        size: "Start-up ou TPE (10 collaborateurs)",
        recommendation: "ChatGPT Business",
        annualCost: "2 520 €/an",
        rationale: "10 sièges à 21 € par mois en facturation annuelle. Couverture large pour un ticket d'entrée bas ; réévaluez au bout de six à douze mois selon les usages.",
      },
      {
        size: "PME (50 collaborateurs)",
        recommendation: "ChatGPT Business pour 40 personnes, Claude Team pour 10 profils techniques et juridiques",
        annualCost: "10 080 € + 2 400 $/an",
        rationale: "40 sièges ChatGPT Business à 21 € par mois et 10 sièges Claude Team à 20 $ par mois, en facturation annuelle. Claude couvre les documents longs et le code, ChatGPT le reste de l'équipe.",
      },
      {
        size: "ETI (200 collaborateurs sur Microsoft 365)",
        recommendation: "Copilot Business pour tous, ChatGPT Business pour 30 profils créatifs ou techniques",
        annualCost: "51 240 €/an",
        rationale: "200 licences Copilot Business à 18,20 € HT par mois (offre réservée aux organisations jusqu'à 300 utilisateurs) et 30 sièges ChatGPT Business à 21 €, en annuel, hors licences Microsoft 365 et hors crédits d'agents.",
      },
      {
        size: "Grand groupe (1 000 collaborateurs)",
        recommendation: "Copilot ou Gemini pour tous, Claude et Mistral pour les métiers concernés",
        annualCost: "312 000 € HT/an et plus",
        rationale: "1 000 licences Microsoft 365 Copilot à 26 € HT par mois en annuel représentent 312 000 € HT, avant les sièges spécialisés : Claude pour le juridique, la technique et la finance, Mistral pour les entités soumises à des contraintes d'hébergement. Un cadrage en amont évite de payer des licences inutilisées.",
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
      "Claude Code (Opus 5.5), GitHub Copilot, Cursor ou ChatGPT (Codex) : contexte, agents, éditeurs, prix par développeur. Comparatif vérifié le 3 octobre 2026.",
    h1: "Quelle est la meilleure IA pour coder en 2026 ?",
    intro:
      "Si vous équipez une équipe technique en 2026, le choix de l'IA de codage engage votre budget et votre vitesse de livraison. **Claude Code** s'appuie sur Opus 5.5 et Fable 5.1, avec une fenêtre d'un million de tokens, et il est inclus dans les offres Pro, Max, Team et Enterprise d'Anthropic. **GitHub Copilot** s'installe dans les éditeurs existants, avec le choix du modèle et le ticket d'entrée le plus bas. **Cursor** propose un éditeur bâti autour de l'agent. **ChatGPT** délègue des tâches de développement à **Codex**, inclus dans ses offres. Ce guide compare ces quatre outils, avec les prix et les modèles vérifiés le 3 octobre 2026.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "3 octobre 2026",
    datePublished: "2026-05-04",
    dateModified: "2026-10-03",
    readTime: "11 minutes",
    keywords:
      "meilleure ia pour coder 2026, claude code prix, github copilot vs claude, cursor prix, codex openai, ia refactoring code, comparatif ia développement, opus 5.5, gpt-6.1 sol",
    isPanorama: true,

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Quelle IA choisir pour coder en 2026 ?",
      answer:
        "**Claude Code** (Anthropic) est le choix des missions lourdes : refactoring de gros dépôts, architecture, débogage profond. Il tourne sur **Opus 5.5** et **Fable 5.1**, lit **un million de tokens** et il est inclus dans les offres Pro (20 $ par mois), Max, Team et Enterprise. **GitHub Copilot** reste le meilleur choix pour la complétion pendant la frappe dans VS Code, Visual Studio ou JetBrains, à 10 $ par mois en individuel et 19 $ par siège en Business, avec des modèles d'Anthropic, d'OpenAI et de Google au choix. **Cursor** convient aux développeurs qui veulent un éditeur agentique, où l'agent modifie plusieurs fichiers et lance les tests, à 20 $ par mois. **ChatGPT** couvre les profils mixtes et délègue des tâches de code à **Codex**, en local ou dans le cloud. Une association possible : Copilot pour toute l'équipe, Claude Code pour les missions de fond. Pour l'adopter en équipe sur votre dépôt, voir notre [formation Claude Code](/formation-claude-code).",
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
      title: "Verdict express : 4 outils, 4 profils",
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
        position: "La référence sur les missions de fond",
        pros: [
          "Opus 5.5, présenté par Anthropic comme son meilleur modèle Opus en programmation agentique, et Fable 5.1 pour les sessions de plusieurs jours",
          "Un million de tokens de contexte dans Claude Code avec Fable 5.1, Opus 5.5 et Sonnet 5.5",
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
          "Choix du modèle : Claude Opus 5.5, Sonnet 5.5 et Fable 5.1, GPT-6 Astra et GPT-5.6, Gemini 3.1 Pro et 3.8 Flash, entre autres",
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
          "Contexte de la conversation limité à 256 000 tokens en raisonnement sur Plus et Business",
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
      title: "L'essentiel en un tableau",
      note: "Faits vérifiés le 3 octobre 2026 sur les pages officielles d'Anthropic, de GitHub, de Cursor et d'OpenAI. Les prix sont affichés en dollars hors taxes, sauf ChatGPT (prix pour la France). Les deux lignes de contexte sont séparées à dessein : celle de l'interface décrit ce dont dispose un développeur dans l'outil, celle de l'API ce qu'obtient une intégration.",
    },
    comparisonTable: [
      { criterion: "Prix par développeur et par mois", chatgpt: "23 € Plus · 21 € Business en annuel", claude: "20 $ Pro · 25 $ Team (20 $ en annuel)", "github-copilot": "10 $ Pro · 19 $ Business · 39 $ Enterprise", cursor: "20 $ Pro · 40 $ Teams" },
      { criterion: "Modèles", chatgpt: "GPT-6.1 Sol, GPT-6 Astra et GPT-5.6 dans Codex", claude: "Fable 5.1, Opus 5.5, Sonnet 5.5", "github-copilot": "Claude, GPT, Gemini, Grok au choix", cursor: "Claude, GPT-5.6, Gemini, Grok, Composer 2.5" },
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
      title: "Ce qui a changé depuis notre version d'août 2026",
      items: [
        { date: "Septembre 2026", text: "Anthropic a lancé Opus 5.5 le 22 septembre, avec un mode rapide jusqu'à 2,5 fois plus rapide dans Claude Code, puis Sonnet 5.5 le 28 septembre ; Fable 5.1 était sorti le 1er septembre." },
        { date: "Septembre 2026", text: "OpenAI a ouvert GPT-6 Sol et GPT-6 Luna dans Codex le 22 septembre, puis GPT-6.1 Sol et Codex Cloud le 29 septembre." },
        { date: "Octobre 2026", text: "Au 3 octobre 2026, GitHub Copilot compte cinq offres payantes (Pro à 10 $, Pro+ à 39 $, Max à 100 $, Business à 19 $, Enterprise à 39 $) et décompte l'usage en crédits GitHub AI. Cursor propose son modèle maison Composer 2.5 aux côtés de Claude, GPT, Gemini et Grok." },
        { date: "Correction", text: "Nous écrivions que Claude Code était inclus dès l'offre gratuite : il est réservé à Pro, Max, Team et Enterprise. Nous donnions aussi GitHub Copilot à 10 € en Business et 19 € en Enterprise : les tarifs sont de 19 $ et 39 $ par siège, 10 $ étant le prix de l'offre individuelle Pro." },
        { date: "Correction", text: "Nous citions « Copilot Workspace » comme agent de GitHub Copilot : GitHub présente aujourd'hui un mode agent dans l'éditeur et un agent cloud. Nous décrivions aussi Composer comme un mode de Cursor : c'est le nom de son modèle maison." },
      ],
    },

    methodology:
      "Ce comparatif est rédigé par Masteria, cabinet lyonnais spécialisé en intelligence artificielle depuis 2022, qui développe des outils sur mesure et forme des équipes techniques. Les verdicts reposent sur des mises en situation : refactoring TypeScript, débogage Python, génération de tests, conception d'API REST, revue de code, migrations SQL. Les faits produit et les tarifs ont été revérifiés le **3 octobre 2026** sur les pages officielles des quatre éditeurs. Versions de référence : **Claude Code avec Opus 5.5**, **GitHub Copilot** avec choix du modèle, **Cursor**, **ChatGPT avec Codex**.",

    citations: [
      { name: "Anthropic : offres et tarifs de Claude", url: "https://claude.com/pricing" },
      { name: "Anthropic : fenêtre de contexte des offres payantes, Claude Code compris", url: "https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans" },
      { name: "Anthropic : Claude Opus 5.5 (22 septembre 2026)", url: "https://www.anthropic.com/claude-opus-5-5" },
      { name: "Anthropic : vue d'ensemble des modèles Claude", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
      { name: "Anthropic : notes de version des applications Claude", url: "https://support.claude.com/en/articles/12138966-release-notes" },
      { name: "GitHub : offres Copilot (documentation)", url: "https://docs.github.com/en/copilot/get-started/plans" },
      { name: "GitHub : modèles pris en charge par Copilot", url: "https://docs.github.com/en/copilot/reference/ai-models/supported-models" },
      { name: "GitHub : offres et questions fréquentes de Copilot", url: "https://github.com/features/copilot/plans" },
      { name: "Cursor : tarifs", url: "https://cursor.com/pricing" },
      { name: "Cursor : modèles et tarifs (documentation)", url: "https://cursor.com/docs/models-and-pricing" },
      { name: "OpenAI : ChatGPT Work et Codex", url: "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
      { name: "OpenAI : notes de version de ChatGPT (Codex Cloud, GPT-6.1 Sol)", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "OpenAI : tarifs de ChatGPT (page France)", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "OpenAI : modèles de l'API", url: "https://developers.openai.com/api/docs/models" },
      { name: "Mistral AI : modèles (Devstral 2, Medium 3.5)", url: "https://mistral.ai/models" },
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
        verdictText: "**Cursor prend l'avantage** pour qui veut rester dans l'éditeur : l'agent modifie plusieurs fichiers, lance les tests et itère sous vos yeux. Claude Code fait le même travail en ligne de commande, GitHub Copilot en mode agent ou avec son agent cloud, et Codex en local ou dans le cloud.",
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
        desc: "Les outils en ligne transmettent vos prompts et votre code aux serveurs de l'éditeur. Pour les bases de code sensibles (défense, santé, finance régulée), deux voies : des contrats d'entreprise avec garanties, ou des modèles à poids ouverts déployés chez vous, comme Devstral 2 de Mistral.",
      },
      {
        title: "Acheter sans former les équipes",
        desc: "Un développeur qui écrit des demandes vagues tire peu de ces outils. La formation porte sur le cadrage des tâches, le contexte fourni à l'agent, la revue de ses modifications et les règles de sécurité.",
      },
    ],

    faq: [
      {
        q: "Quelle est la meilleure IA pour coder en 2026 ?",
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
        a: "Oui, avec des modèles à poids ouverts déployés sur votre infrastructure : **Devstral 2** de Mistral, spécialisé dans le code agentique, ou **Mistral Medium 3.5**, publié sous licence MIT modifiée. La ligne de commande Vibe Code de Mistral accepte aussi tout modèle servi derrière une API compatible avec celle d'OpenAI, y compris hors ligne. C'est la solution pour les bases de code qui ne doivent pas quitter le réseau.",
      },
      {
        q: "Quelle IA pour coder en TypeScript, React ou Next.js ?",
        a: "**Claude Code** tient le fil sur des refactorings qui touchent des dizaines de fichiers, et sa fenêtre d'un million de tokens couvre une application entière. **GitHub Copilot** se comporte bien sur cette pile, d'autant qu'il propose Claude Sonnet 5.5 et Opus 5.5 parmi ses modèles.",
      },
      {
        q: "Comment former une équipe de développeurs aux IA de codage ?",
        a: "Notre formation IA informatique couvre le cadrage des tâches confiées à un agent, l'intégration aux éditeurs, la revue des modifications et la sécurité. Comptez **1 980 € HT la journée** en intra pour le groupe (jusqu'à 12 participants), TVA de 20 % en sus. Selon votre branche, votre OPCO peut financer la session.",
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
      "Claude Cowork, agents ChatGPT, Manus, Copilot Studio : autonomie, validation, gouvernance, coût des exécutions. Comparatif vérifié le 3 octobre 2026.",
    h1: "Quel est le meilleur agent IA pour votre entreprise en 2026 ?",
    intro:
      "Un agent IA exécute une tâche en plusieurs étapes sans qu'on le relance : il lit, décide, agit, recommence. En 2026, les quatre grandes offres ont changé de forme. Chez Anthropic, **Cowork** a rejoint la conversation de Claude le 16 septembre. Chez OpenAI, **ChatGPT Work** et les **agents d'espace de travail** se partagent le terrain. **Microsoft Copilot Studio** s'accompagne désormais de **Copilot Cowork**, et **Manus** a lancé sa version 2.0 le 28 septembre, après avoir repris son indépendance. Ce guide aide à choisir, et surtout à chiffrer ce que chacun coûte en production.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "3 octobre 2026",
    datePublished: "2026-05-04",
    dateModified: "2026-10-03",
    readTime: "11 minutes",
    keywords:
      "meilleur agent ia 2026, claude cowork, agents espace de travail chatgpt, chatgpt work, copilot studio prix, copilot cowork, manus 2.0, mcp model context protocol, agent ia entreprise gouvernance",
    isPanorama: true,

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Quel agent IA choisir pour son entreprise en 2026 ?",
      answer:
        "**Claude** est le plus direct pour agir sur des fichiers et des applications connectées : depuis le 16 septembre 2026, ce que faisait Cowork est disponible dans n'importe quelle conversation, avec une demande de validation avant d'agir par défaut et des tâches planifiées, dès l'offre **Pro à 20 $**. Les **agents d'espace de travail ChatGPT** (Business et Enterprise) se décrivent en langage naturel, se partagent, répondent dans Slack et se déclenchent par API ; depuis le 6 juillet 2026, leurs exécutions consomment des crédits. **Microsoft Copilot Studio** reste le choix des organisations sur Microsoft 365 qui veulent une gouvernance centralisée, complété par **Copilot Cowork**, facturé à l'usage. **Manus** enchaîne les tâches longues en autonomie ; son retour à l'indépendance le 1er septembre 2026, après l'annonce de son rapprochement avec Meta fin 2025, invite à la prudence pour un usage d'entreprise.",
      bullets: [
        "Agir sur des fichiers et des applications, avec validation : Claude, dès l'offre Pro",
        "Agent d'équipe monté en langage naturel, dans Slack ou par API : agents d'espace de travail ChatGPT",
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
      title: "Verdict express : 4 agents, 4 cas d'usage",
      summary:
        "**Claude** agit sur vos fichiers et enchaîne les étapes d'une tâche depuis n'importe quelle conversation, dès l'offre Pro. Les **agents d'espace de travail ChatGPT** se construisent en langage naturel et conviennent aux équipes non techniques, avec des exécutions payées en crédits depuis juillet 2026. **Microsoft Copilot Studio** reste le choix par défaut des organisations sur Microsoft 365 qui veulent une gouvernance centralisée. **Manus** tient les tâches longues en autonomie, avec moins de garanties d'entreprise. Le bon agent dépend de votre cas d'usage et du niveau de contrôle que votre service informatique exige.",
      profiles: [
        { profile: "Agir sur des fichiers et automatiser un travail de bureau", tool: "Claude Cowork", why: "Lit, modifie et crée des fichiers, demande avant d'agir par défaut et planifie des tâches qui tournent sans ordinateur allumé. Dès l'offre Pro." },
        { profile: "Agent monté par un profil non technique", tool: "Agents ChatGPT", why: "Rôle, déclencheur, outils et règles se décrivent en langage naturel ou partent d'un modèle. Disponibles sur Business et Enterprise depuis le 21 mai 2026." },
        { profile: "Intégration à vos outils et bases internes", tool: "Claude + MCP", why: "MCP est le standard ouvert de connexion aux outils créé par Anthropic, adopté par ChatGPT, Cursor, Gemini et Microsoft Copilot. Demande une mise en place technique." },
        { profile: "Stack Microsoft 365 et informatique centralisée", tool: "Microsoft Copilot Studio", why: "Gouvernance unifiée, traitements dans Microsoft 365, agents publiés dans Copilot inclus avec la licence, Copilot Cowork pour exécuter des tâches validées une à une." },
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
          "ChatGPT Work pour les tâches longues, déclenchables par un courriel Gmail, un message Slack ou une pull request GitHub",
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
          "Agents publiés dans Microsoft 365 Copilot inclus pour les détenteurs de la licence",
          "Copilot Cowork exécute des tâches dans Microsoft 365 (courriels, réunions, documents, Teams) après validation de chaque action",
          "Traitements dans le périmètre de Microsoft 365, gouvernance par l'administrateur",
          "Choix du modèle à la création de l'agent, dont des modèles d'Anthropic",
        ],
        cons: [
          "Agents autonomes et canaux externes facturés en crédits Copilot, abonnement Azure requis",
          "Copilot Cowork facturé à l'usage, en plus de la licence",
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
      title: "L'essentiel en un tableau",
      note: "Faits vérifiés le 3 octobre 2026 sur les pages officielles d'Anthropic, d'OpenAI, de Microsoft et de Manus. Attention à la ligne « coût des exécutions » : chez OpenAI comme chez Microsoft, l'exécution des agents se facture en dehors du prix du siège.",
    },
    comparisonTable: [
      { criterion: "Nom exact du produit", chatgpt: "Agents d'espace de travail et ChatGPT Work", claude: "Claude, qui intègre Cowork", manus: "Manus 2.0", copilot: "Copilot Studio et Copilot Cowork" },
      { criterion: "Jalons", chatgpt: "Agents en disponibilité générale le 21 mai 2026, ChatGPT Work le 9 juillet 2026", claude: "Cowork en disponibilité générale le 9 avril 2026, intégré à la conversation le 16 septembre 2026", manus: "Version 2.0 le 28 septembre 2026", copilot: "Copilot Cowork en disponibilité générale pour les comptes professionnels" },
      { criterion: "Offre minimum", chatgpt: "Business, 21 € par utilisateur en annuel", claude: "Pro à 20 $", manus: "Forfait mensuel en crédits", copilot: "Licence Microsoft 365 Copilot (26 € HT) ou Copilot Studio à l'usage" },
      { criterion: "Coût des exécutions", chatgpt: "Crédits depuis le 6 juillet 2026, au-delà de l'enveloppe incluse", claude: "Compris dans les limites de l'offre, usage supplémentaire possible", manus: "Crédits du forfait", copilot: "Crédits Copilot pour les agents autonomes, Cowork à l'usage" },
      { criterion: "Agit sur des fichiers locaux", chatgpt: "Oui avec Work dans l'application de bureau, avec votre accord", claude: "Oui, cœur de Cowork", manus: "Oui, avec l'accès à votre ordinateur", copilot: "Fichiers OneDrive et SharePoint" },
      { criterion: "Création sans code", chatgpt: "Oui, en langage naturel ou depuis un modèle", claude: "Oui pour les tâches ; connecteurs MCP à configurer", manus: "Oui, en une instruction", copilot: "Oui, atelier low-code" },
      { criterion: "Tâches planifiées ou déclenchées", chatgpt: "Oui : planification, Slack et API", claude: "Oui, tâches planifiées", manus: "Oui, planifiées et sur événement", copilot: "Oui, invites planifiées dans Cowork" },
      { criterion: "Standard MCP", chatgpt: "Oui, MCP personnalisés dans les agents", claude: "Oui, standard créé par Anthropic", manus: "Connecteurs propres (Gmail, Notion, Slack, Google Drive)", copilot: "Oui, MCP adopté par Microsoft Copilot" },
      { criterion: "Validation humaine des actions", chatgpt: "Écritures soumises à validation par défaut", claude: "Demande avant d'agir par défaut", manus: "Non documentée sur les pages consultées", copilot: "Chaque action de Cowork validée avant exécution" },
      { criterion: "Gouvernance et journaux", chatgpt: "Rôles par fonction, analytique des agents, console d'administration", claude: "Journaux d'audit et API de conformité sur Enterprise", manus: "Offre équipe avec authentification unique", copilot: "Supervision par l'administrateur, Purview" },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Ce qui a changé depuis notre version d'août 2026",
      items: [
        { date: "Septembre 2026", text: "Anthropic a intégré Cowork à la conversation de Claude le 16 septembre. Manus a repris ses activités indépendantes le 1er septembre, puis lancé Manus 2.0 le 28 septembre avec des automatisations déclenchées par événement." },
        { date: "Juillet 2026", text: "OpenAI a lancé ChatGPT Work le 9 juillet. Depuis le 6 juillet, les exécutions des agents d'espace de travail consomment des crédits, d'abord sur l'enveloppe incluse dans le siège Business." },
        { date: "Mai 2026", text: "Les agents d'espace de travail ChatGPT sont passés en disponibilité générale le 21 mai sur Business, Enterprise et Edu." },
        { date: "Octobre 2026", text: "Au 3 octobre 2026, Microsoft documente Copilot Cowork, qui exécute des tâches dans Microsoft 365 avec validation de chaque action, en facturation à l'usage." },
        { date: "Correction", text: "Nous présentions les Skills comme une brique propre à chaque éditeur : Anthropic a publié le format Agent Skills en standard ouvert le 18 décembre 2025, et Manus l'a adopté en janvier 2026." },
      ],
    },

    methodology:
      "Ce comparatif est rédigé par Masteria, cabinet lyonnais spécialisé en intelligence artificielle depuis 2022, qui conçoit des agents sur mesure et forme les équipes à leur usage. Les quatre plateformes ont été mises en situation sur des cas fréquents en entreprise : qualification de prospects, traitement de courriels, production de rapports, automatisation de processus. Les faits produit et les tarifs ont été revérifiés le **3 octobre 2026** sur les pages officielles des éditeurs. Versions de référence : **Claude avec Opus 5.5**, **agents d'espace de travail ChatGPT sur Business**, **Manus 2.0**, **Microsoft Copilot Studio et Copilot Cowork**.",

    citations: [
      { name: "Anthropic : Cowork et la conversation réunis dans Claude (16 septembre 2026)", url: "https://claude.com/blog/cowork-is-now-claude" },
      { name: "Anthropic : Claude Cowork, page produit", url: "https://claude.com/product/cowork" },
      { name: "Anthropic : notes de version des applications Claude", url: "https://support.claude.com/en/articles/12138966-release-notes" },
      { name: "Anthropic : offres et tarifs de Claude", url: "https://claude.com/pricing" },
      { name: "Anthropic : Claude Fable 5.1 et Mythos 5.1 (septembre 2026)", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1" },
      { name: "Anthropic : Agent Skills, standard ouvert depuis le 18 décembre 2025", url: "https://claude.com/blog/skills" },
      { name: "Anthropic : lancement de MCP (25 novembre 2024)", url: "https://www.anthropic.com/news/model-context-protocol" },
      { name: "Anthropic : don de MCP à l'Agentic AI Foundation (9 décembre 2025)", url: "https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation" },
      { name: "OpenAI : agents d'espace de travail (Business et Enterprise)", url: "https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business" },
      { name: "OpenAI : notes de version de ChatGPT Business", url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes" },
      { name: "OpenAI : grille de crédits Business et Enterprise", url: "https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing" },
      { name: "OpenAI : ChatGPT Work et Codex", url: "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex" },
      { name: "OpenAI : notes de version de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "Microsoft : Copilot Studio, offres et tarifs (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio" },
      { name: "Microsoft Learn : Copilot Cowork", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
      { name: "Microsoft Learn : présentation de Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Microsoft Learn : modèles d'Anthropic dans les services Microsoft", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
      { name: "Manus : présentation de Manus 2.0 (28 septembre 2026)", url: "https://manus.im/fr/blog/introducing-manus-2-0" },
      { name: "Manus : reprise des activités indépendantes (1er septembre 2026)", url: "https://manus.im/fr/blog/manus-resumes-independent-operations" },
      { name: "Manus : rapprochement avec Meta (29 décembre 2025)", url: "https://manus.im/fr/blog/manus-joins-meta-for-next-era-of-innovation" },
      { name: "Manus : offres et tarifs", url: "https://manus.im/pricing" },
    ],

    realCases: [
      {
        scenario: "Agent qui qualifie automatiquement les prospects entrants (200 par semaine)",
        feature: "Cas commercial : tri, enrichissement, notification",
        verdictText: "**Microsoft Copilot Studio gagne** si vous êtes sur Microsoft 365 : gouvernance centralisée, agents publiés dans Copilot inclus avec la licence, crédits pour les agents autonomes. Un **agent d'espace de travail ChatGPT** monte le même cas sans code et se déclenche par API depuis votre formulaire ; chiffrez les crédits de 200 exécutions par semaine, sachant qu'OpenAI estime une exécution typique entre 5 et 25 crédits. Pour un branchement sur une API interne, **Claude avec MCP** reste le plus souple.",
        winner: "copilot",
      },
      {
        scenario: "Agent qui prépare votre journée chaque matin (courriels, agenda, priorités)",
        feature: "Cas quotidien : assistant personnel",
        verdictText: "**Les agents ChatGPT gagnent** sur la simplicité : déclencheur à 7 h, sources (messagerie, agenda) et format se décrivent en langage naturel. **Microsoft Copilot** fait l'équivalent dans Outlook avec Cowork et ses invites planifiées. **Claude** planifie aussi la tâche depuis la conversation, avec ses connecteurs de messagerie.",
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
        verdictText: "**Microsoft Copilot Studio** est le plus outillé pour un agent ouvert à vos clients sur le site web : canaux externes, supervision par l'administrateur, crédits Copilot à prévoir. Un **agent d'espace de travail ChatGPT** connecté au CRM et à Slack convient à une équipe support interne ; surveillez la consommation de crédits sur un canal qui tourne en continu.",
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
        verdictText: "**Microsoft Copilot Studio gagne** pour les entreprises sur Microsoft 365 : atelier low-code, gouvernance, agents publiés dans Copilot inclus avec la licence. C'est le terrain pour lequel Microsoft a construit cet outil.",
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
        desc: "L'écart entre le devis et la facture vient presque toujours de là. Depuis le 6 juillet 2026, les exécutions d'agents ChatGPT consomment des crédits au-delà de l'enveloppe incluse ; Copilot Studio se paie en crédits pour les agents autonomes, et Copilot Cowork à l'usage. Un agent qui tourne toutes les heures ne coûte pas le prix d'un agent hebdomadaire : chiffrez le volume d'exécutions avant de valider.",
      },
      {
        title: "Croire que les Skills sont une invention d'OpenAI",
        desc: "Anthropic a lancé les Skills le 16 octobre 2025 et publié leur format, Agent Skills, en standard ouvert le 18 décembre 2025 ; Manus l'a adopté en janvier 2026. Même logique pour MCP, le standard de connexion aux outils créé par Anthropic et adopté par ChatGPT, Gemini et Microsoft Copilot. Cadrez vos automatisations sur ces formats ouverts pour limiter la dépendance à un atelier propriétaire.",
      },
      {
        title: "Négliger la gouvernance des données",
        desc: "Un agent qui accède à vos courriels, votre CRM ou votre intranet dispose d'un niveau de privilège élevé : il peut écrire à des clients, modifier des données, déclencher des achats. Fixez un périmètre d'action, une validation humaine pour toute action irréversible et des journaux. Les éditeurs vont dans ce sens : Claude demande avant d'agir, ChatGPT soumet les écritures à validation, Copilot Cowork fait approuver chaque action.",
      },
      {
        title: "Sous-estimer les coûts cachés",
        desc: "Les agents d'espace de travail ChatGPT supposent l'offre Business, plus des crédits au-delà de l'enveloppe. Copilot Studio se facture en crédits hors des agents publiés dans Copilot. Claude est inclus dès l'offre Pro, mais un branchement MCP sur vos outils internes demande du travail technique. Ajoutez la mise en place et la formation au budget.",
      },
      {
        title: "Penser qu'un agent IA remplace une équipe",
        desc: "Un agent prépare, enchaîne et exécute ; une personne valide et ajuste. Les déploiements qui tiennent organisent ce partage dès le départ, avec une personne responsable de chaque agent.",
      },
      {
        title: "Ignorer la localisation des données traitées par l'agent",
        desc: "Un agent transmet les données qu'il manipule aux serveurs de l'éditeur. Copilot garde le trafic des utilisateurs européens dans l'EU Data Boundary (le périmètre européen de traitement de Microsoft), hors modèles d'Anthropic ; ChatGPT Enterprise propose stockage et inférence en Europe aux clients éligibles ; Anthropic n'a pas de région européenne. Pour les flux les plus sensibles, un agent sur un modèle à poids ouverts hébergé chez vous reste l'option la plus sûre.",
      },
    ],

    faq: [
      {
        q: "Qu'est-ce qu'un agent IA ?",
        a: "Un agent IA est un système fondé sur un grand modèle de langage qui **agit** en plus de rédiger : il envoie un courriel, consulte un CRM, navigue sur le web ou manipule des fichiers, en enchaînant les étapes sans relance. C'est ce qui le distingue d'un assistant de conversation classique. Notre glossaire IA en donne la définition complète.",
      },
      {
        q: "Quel est le meilleur agent IA pour une PME française en 2026 ?",
        a: "Sur Microsoft 365 : **Copilot Studio**, pour la gouvernance, avec Copilot Cowork pour exécuter des tâches. Sur une pile hétérogène : les **agents d'espace de travail ChatGPT**, sur l'offre Business, les plus rapides à monter sans code. Pour automatiser un travail de bureau sur des fichiers : **Claude**, dès l'offre Pro à 20 $. Pour brancher l'agent sur vos outils internes : **Claude avec MCP**. Pour des essais individuels : **Manus**.",
      },
      {
        q: "Combien coûte un agent IA en entreprise ?",
        a: "La licence n'est que la première ligne. **ChatGPT** : Business à 21 € par utilisateur et par mois en annuel, plus des crédits au-delà de l'enveloppe incluse (OpenAI estime une exécution typique d'agent entre 5 et 25 crédits). **Microsoft** : licence Microsoft 365 Copilot à 26 € HT, crédits Copilot pour les agents autonomes, Copilot Cowork à l'usage. **Claude** : dès l'offre Pro à 20 $. S'ajoutent la mise en place (connexion aux outils, tests, gouvernance) et la formation des équipes.",
      },
      {
        q: "Quelle est la différence entre Claude Cowork et les agents d'espace de travail ChatGPT ?",
        a: "**Cowork** agit sur des fichiers et des applications : il ouvre vos documents, les modifie, en crée de nouveaux et enchaîne les étapes ; depuis le 16 septembre 2026, ces capacités sont disponibles dans n'importe quelle conversation de Claude, dès l'offre Pro. Les **agents d'espace de travail ChatGPT** vivent dans le cloud : on décrit leur rôle, leur déclencheur et leurs règles, on les partage dans l'équipe et on les planifie ; ils supposent l'offre Business et consomment des crédits depuis juillet 2026. Résumé pratique : Claude pour produire des livrables, les agents ChatGPT pour orchestrer un processus d'équipe.",
      },
      {
        q: "Les Skills sont-elles une nouveauté d'OpenAI ?",
        a: "Anthropic a lancé les Skills le 16 octobre 2025 et publié leur format, **Agent Skills**, en standard ouvert le 18 décembre 2025 ; Manus l'a adopté en janvier 2026. OpenAI propose ses propres Skills dans ChatGPT Business, Enterprise, Healthcare et Edu. Pour votre entreprise, l'enseignement est simple : une procédure formalisée dans un format ouvert reste réutilisable si vous changez d'éditeur.",
      },
      {
        q: "Les agents IA sont-ils sûrs en entreprise ?",
        a: "Tout dépend de la gouvernance mise en place : périmètre d'action limité, validation humaine pour toute action irréversible, journaux détaillés, tests réguliers, charte d'usage. Les éditeurs fournissent les garde-fous : Claude demande avant d'agir par défaut, ChatGPT soumet les écritures des agents à validation et OpenAI recommande des comptes de service pour les connexions partagées, Copilot Cowork fait approuver chaque action.",
      },
      {
        q: "Qu'est-ce que MCP (Model Context Protocol) ?",
        a: "MCP est un standard ouvert lancé par Anthropic le 25 novembre 2024 pour connecter un assistant à des outils tiers (bases de données, API, fichiers) de façon uniforme. Anthropic l'a confié le 9 décembre 2025 à l'Agentic AI Foundation, un fonds de la Linux Foundation cofondé avec Block et OpenAI ; ChatGPT, Cursor, Gemini et Microsoft Copilot l'ont adopté. On le compare souvent à un port USB-C pour les agents.",
      },
      {
        q: "Faut-il des compétences techniques pour déployer un agent IA ?",
        a: "Pas nécessairement. **Microsoft Copilot Studio** (low-code), les **agents d'espace de travail ChatGPT** (description en langage naturel) et **Manus** sont accessibles à des profils fonctionnels formés. **Claude** s'utilise sans code sur des tâches de bureau, mais brancher MCP sur vos outils internes demande un profil technique. Une progression sûre : un agent simple sur un cas balisé, puis la montée en complexité une fois la valeur prouvée.",
      },
      {
        q: "Comment former une équipe à utiliser des agents IA ?",
        a: "La formation part des usages de base (formulation des demandes, procédures réutilisables) avant les agents autonomes, puis couvre la gouvernance : périmètre d'action, validation humaine, journaux. Masteria facture **1 980 € HT la journée** en intra pour le groupe (jusqu'à 12 participants), TVA de 20 % en sus ; selon votre branche, votre OPCO peut financer la session.",
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
      "Mistral AI (Vibe) ou ChatGPT : hébergement UE, modèles à poids ouverts, entraînement sur vos données, fonctions, prix. Comparatif vérifié le 3 octobre 2026.",
    h1: "Mistral AI vs ChatGPT : souveraineté française ou écosystème américain ?",
    intro:
      "**Mistral AI**, dont l'assistant **Vibe** a remplacé Le Chat le 28 mai 2026, face à **ChatGPT** (OpenAI), qui tourne sur **GPT-5.6** dans la conversation et sur **GPT-6** dans son mode Work : sous la question patriotique se cache un choix structurant. Où sont traitées vos données, ce que vous pouvez déployer dans votre propre infrastructure, ce que chaque outil fait au-delà de la rédaction, et ce qu'il fait de vos échanges. Comparatif établi par une équipe qui forme aux deux outils.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "3 octobre 2026",
    datePublished: "2026-06-02",
    dateModified: "2026-10-03",
    readTime: "9 minutes",
    keywords:
      "mistral vs chatgpt, vibe mistral, le chat renommé vibe, ia souveraine française, mistral poids ouverts, mistral medium 3.5, comparatif mistral chatgpt 2026, gpt-6, ia hébergée en europe",

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Mistral (Vibe) ou ChatGPT : lequel choisir en 2026 ?",
      answer:
        "Choisissez **Mistral AI** si la localisation des données est une contrainte : éditeur français, données hébergées dans l'Union européenne par défaut, et des modèles à poids ouverts (téléchargeables et exécutables sur vos serveurs) jusqu'à son modèle phare, **Mistral Medium 3.5**. Point à régler dès le départ : hors offre Enterprise, Mistral utilise les échanges Vibe pour entraîner ses modèles tant que l'utilisateur ne s'y oppose pas. Choisissez **ChatGPT** pour la couverture fonctionnelle la plus large : GPT-5.6 Sol dans la conversation, GPT-6 dans ChatGPT Work et Codex, ChatGPT Images 2.5, agents d'espace de travail. Une stratégie efficace consiste à cartographier les flux : ce qui est sensible part chez Mistral ou en interne, le reste va à l'outil préféré des équipes.",
      bullets: [
        "Secteur public, défense, santé, données à garder dans l'UE : Mistral",
        "Déploiement sur votre propre infrastructure : Mistral, avec ses modèles à poids ouverts",
        "Images et écosystème de plugins : ChatGPT",
        "Agents d'équipe clés en main : ChatGPT",
        "Rédaction professionnelle courante en français : les deux",
      ],
    },

    toolA: {
      id: "mistral",
      name: "Mistral AI",
      editor: "Mistral AI",
      currentModel: "Mistral Medium 3.5 · Large 3 · Small 4 · assistant Vibe",
      country: "France",
      pricing: "Vibe gratuit · Pro 17,99 € TTC/mois · Team 29,99 € TTC/utilisateur · Enterprise sur devis · modèles à poids ouverts",
      foundedAI: "2023",
      color: "#FF7000",
    },
    toolB: {
      id: "chatgpt",
      name: "ChatGPT",
      editor: "OpenAI",
      currentModel: "GPT-5.6 dans la conversation · GPT-6 Astra et GPT-6.1 Sol dans Work et Codex",
      country: "États-Unis",
      pricing: "Go 8 € · Plus 23 € · Pro dès 103 € · Business 21 €/utilisateur en annuel (prix France)",
      foundedAI: "2022",
      color: "#10A37F",
    },

    // ─── GEO : tableau de faits datés, lisible en HTML brut par un moteur génératif
    keyFacts: {
      title: "L'essentiel en un tableau",
      note: "Faits vérifiés le 3 octobre 2026 sur les pages officielles de Mistral AI et d'OpenAI, avec les prix affichés pour la France. Mistral affiche ses prix toutes taxes comprises ou hors taxes au choix ; nous retenons le prix TTC.",
      rows: [
        { criterion: "Assistant grand public", a: "Vibe, anciennement Le Chat, depuis le 28 mai 2026, en modes Work, Code et Chat", b: "ChatGPT, en modes Chat et Work, plus Codex" },
        { criterion: "Modèles actuels", a: "Mistral Medium 3.5, Mistral Large 3, Mistral Small 4, Devstral 2 pour le code", b: "GPT-5.6 Sol dans la conversation, GPT-6 Pro sur Business, GPT-6 Astra et GPT-6.1 Sol dans Work et Codex" },
        { criterion: "Contexte dans le chat", a: "Non détaillé par offre", b: "54 000 tokens en mode instantané, 256 000 en raisonnement (Plus, Business)" },
        { criterion: "Contexte via API", a: "256 000 tokens (Medium 3.5, Large 3)", b: "1 050 000 tokens (modèles GPT-6)" },
        { criterion: "Déploiement sur vos serveurs", a: "Oui : modèles à poids ouverts et offre Enterprise sur site ou en cloud privé", b: "Non pour ChatGPT ; modèles ouverts gpt-oss publiés à part en août 2025" },
        { criterion: "Hébergement par défaut", a: "Union européenne, avec des transferts ponctuels possibles selon la fonction", b: "Hors Europe ; stockage et inférence en Europe sur Enterprise et Edu (clients éligibles)" },
        { criterion: "Entraînement sur vos échanges", a: "Oui par défaut hors Enterprise, désactivable ; non par défaut sur Enterprise", b: "Non sur Business et Enterprise ; refus possible sur les offres individuelles" },
        { criterion: "Génération d'images et de vidéo", a: "Images dans Vibe", b: "Images avec ChatGPT Images 2.5 ; plus de vidéo depuis l'arrêt de Sora le 26 avril 2026" },
        { criterion: "Mode agent", a: "Vibe Work : outils, étapes, tâches planifiées ; connecteurs et MCP personnalisés en bêta", b: "ChatGPT Work et agents d'espace de travail, crédits au-delà de l'enveloppe incluse" },
        { criterion: "Prix", a: "Pro 17,99 € TTC, Team 29,99 € TTC par utilisateur et par mois", b: "Plus 23 €, Business 21 € par utilisateur et par mois en annuel" },
      ],
    },

    verdict: {
      title: "Verdict en 30 secondes",
      summary:
        "**Mistral AI** est le choix de l'hébergement européen et de la maîtrise : éditeur français, données dans l'UE par défaut, modèles à poids ouverts déployables dans votre infrastructure, offre Enterprise sur site. Son assistant **Vibe** a remplacé Le Chat le 28 mai 2026 et réunit un mode Work et un mode Code. **ChatGPT** garde l'avantage sur l'étendue fonctionnelle : ChatGPT Work, ChatGPT Images 2.5, agents d'espace de travail, Codex. Pour les secteurs régulés et la commande publique, Mistral coche plus de cases ; pour la couverture la plus large au quotidien, ChatGPT reste devant. Dans les deux cas, réglez l'usage des données pour l'entraînement, actif par défaut sur Vibe hors Enterprise.",
      recommendA: ["Secteur public et défense", "Données sensibles (santé, juridique, banque)", "Exigence RGPD stricte ou hébergement dans l'UE", "Déploiement sur site ou auto-hébergé"],
      recommendB: ["Polyvalence maximale au quotidien", "Images et contenus visuels", "Agents d'équipe et plugins", "Équipes déjà habituées à ChatGPT"],
    },

    criteria: [
      {
        title: "Souveraineté et hébergement des données",
        descriptionA:
          "Entreprise française, données hébergées dans l'Union européenne par défaut ; certaines fonctions peuvent transférer ponctuellement des données vers des sous-traitants hors UE, encadrés par les clauses contractuelles types de la Commission. Surtout, les modèles à poids ouverts tournent dans votre propre centre de données, et l'offre Enterprise propose un déploiement sur site ou en cloud privé.",
        descriptionB:
          "Données traitées par OpenAI hors d'Europe par défaut. ChatGPT Enterprise et Edu peuvent stocker et traiter les contenus en Europe pour les clients éligibles ; Business propose le stockage en Europe en déploiement, sans inférence européenne. ChatGPT ne s'installe pas chez vous.",
        winner: "a",
        winnerText: "Avantage net Mistral, seul des deux à proposer l'auto-hébergement de l'assistant",
      },
      {
        title: "Qualité en français et rédaction",
        descriptionA:
          "Bon niveau sur la rédaction professionnelle courante : courriels, notes, synthèses. En mise en situation, l'écart avec ChatGPT ne se voit pas sur ces formats.",
        descriptionB:
          "Bon niveau aussi, avec un avantage sur les formats créatifs et les textes longs en mise en situation.",
        winner: "tie",
        winnerText: "Match nul sur le français professionnel courant",
      },
      {
        title: "Fonctionnalités et écosystème",
        descriptionA:
          "Vibe réunit recherche web, génération d'images, Canvas (documents, présentations, maquettes), bibliothèques de documents, tâches planifiées et Skills, avec des connecteurs et des MCP personnalisés en bêta. Le mode Code travaille en ligne de commande ou dans VS Code et JetBrains.",
        descriptionB:
          "ChatGPT ajoute ChatGPT Work pour les livrables complets, des agents d'espace de travail partagés, les Sites et les Pages, des extensions Word, Excel et PowerPoint, la recherche approfondie et un répertoire de plugins.",
        winner: "b",
        winnerText: "Avantage ChatGPT sur la richesse fonctionnelle",
      },
      {
        title: "Performance des modèles",
        descriptionA:
          "Mistral présente Medium 3.5 comme un modèle de classe frontière, optimisé pour les agents et le code, qui réunit instruction, raisonnement et programmation avec un effort de raisonnement réglable. Les modèles de raisonnement Magistral sont dépréciés au profit de cette approche unifiée.",
        descriptionB:
          "OpenAI présente GPT-6 Astra comme son modèle le plus capable pour les travaux exigeants, et GPT-6.1 Sol comme proche d'Astra pour un coût inférieur.",
        winner: "tie",
        winnerText: "Match nul sur les tâches courantes, à tester sur vos cas les plus exigeants",
      },
      {
        title: "Confidentialité et conformité (RGPD, AI Act)",
        descriptionA:
          "Éditeur européen soumis au RGPD et à l'AI Act, données dans l'UE par défaut, conformité SOC 2 Type II et ISO 27001/27701. Point à régler : hors Enterprise, les échanges Vibe servent à l'entraînement par défaut, et chaque utilisateur doit s'y opposer dans ses réglages.",
        descriptionB:
          "OpenAI n'entraîne pas ses modèles sur Business et Enterprise et publie SOC 2 Type II et ISO 27001, 27017, 27018 et 27701. Le transfert vers un acteur américain se documente dans l'analyse d'impact.",
        winner: "tie",
        winnerText: "Match nul : hébergement européen chez Mistral, entraînement exclu par défaut chez OpenAI",
      },
      {
        title: "Code et développement",
        descriptionA:
          "Vibe Code travaille dans le terminal, VS Code ou JetBrains avec Devstral, modèle de code à poids ouverts, et sa ligne de commande accepte tout modèle servi derrière une API compatible avec celle d'OpenAI, y compris hors ligne.",
        descriptionB:
          "Codex délègue des tâches de développement en local ou dans le cloud, avec GPT-6.1 Sol en cours de déploiement, et propose la revue de pull requests.",
        winner: "tie",
        winnerText: "Match nul : modèles ouverts chez Mistral, agent cloud chez OpenAI",
      },
      {
        title: "Tarifs et coût réel par siège",
        descriptionA:
          "En France : Pro à 17,99 € TTC par mois (14,99 $ hors taxes en dollars), Team à 29,99 € TTC par utilisateur et par mois, Enterprise sur devis. L'API se facture au token : Mistral Large 3 coûte 0,5 $ le million de tokens en entrée et 1,5 $ en sortie.",
        descriptionB:
          "En France : Go à 8 €, Plus à 23 €, Pro à partir de 103 € par mois ; Business à 21 € par utilisateur et par mois en annuel ; Enterprise sur devis. ChatGPT Work, Codex et les agents se paient en crédits au-delà de l'enveloppe incluse.",
        winner: "tie",
        winnerText: "Avantage Mistral en individuel, match nul en équipe",
      },
    ],

    useCases: [
      { metier: "Secteur public et parapublic", recommendation: "a", why: "Hébergement dans l'UE par défaut et déploiement sur site possible : le dossier de conformité se construit plus vite." },
      { metier: "Juridique, santé, banque (données sensibles)", recommendation: "a", why: "Modèles à poids ouverts déployables en interne pour les flux les plus sensibles." },
      { metier: "Marketing et communication", recommendation: "b", why: "Génération d'images, ChatGPT Work et extensions Office." },
      { metier: "Industrie et R&D confidentielle", recommendation: "a", why: "L'auto-hébergement traite plans, brevets et données de procédé sans qu'aucune donnée ne sorte." },
      { metier: "Développement logiciel", recommendation: "tie", why: "Codex pour l'agent cloud ; Vibe Code et Devstral 2 si le code ne doit pas quitter l'infrastructure." },
      { metier: "Direction générale", recommendation: "tie", why: "ChatGPT pour la polyvalence, Mistral pour les flux sensibles." },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Ce qui a changé depuis notre version d'août 2026",
      items: [
        { date: "Septembre 2026", text: "OpenAI a présenté GPT-6 Astra le 3 septembre, puis GPT-6 Sol, GPT-6 Luna et GPT-6.1 Sol pour ChatGPT Work et Codex ; la conversation reste sur GPT-5.6." },
        { date: "Mai 2026", text: "Mistral AI a renommé Le Chat en Vibe le 28 mai. Vibe se décline en trois modes : Work pour les tâches en plusieurs étapes, Code pour le développement, Chat pour la conversation." },
        { date: "Correction", text: "Nous citions Mistral Large et Magistral : Magistral est déprécié, et la gamme actuelle s'articule autour de Mistral Medium 3.5, Mistral Large 3 et Mistral Small 4. Nous donnions aussi 128 000 tokens pour Mistral Large via l'API : Medium 3.5 et Large 3 en lisent 256 000." },
        { date: "Correction", text: "Nous écrivions que les modèles à poids ouverts n'avaient « aucun équivalent chez les acteurs américains » : OpenAI a publié gpt-oss en août 2025. Nous ne signalions pas non plus que les échanges Vibe servent à l'entraînement par défaut hors Enterprise." },
        { date: "Correction", text: "Nous citions Sora 2 pour la vidéo dans ChatGPT : OpenAI a fermé l'application Sora le 26 avril 2026." },
      ],
    },

    methodology:
      "Ce comparatif est rédigé par Masteria, cabinet lyonnais spécialisé en intelligence artificielle depuis 2022, qui forme les équipes à Mistral AI comme à ChatGPT. Les verdicts reposent sur des mises en situation de formation. Les faits produit et les tarifs ont été revérifiés le **3 octobre 2026** sur les pages officielles de Mistral AI et d'OpenAI listées ci-dessous. Versions évaluées : **Vibe Pro et Mistral Medium 3.5** face à **ChatGPT Plus et Business (GPT-5.6 Sol)**.",

    citations: [
      { name: "Mistral AI : tarifs", url: "https://mistral.ai/pricing" },
      { name: "Mistral AI : modèles", url: "https://mistral.ai/models" },
      { name: "Mistral AI : fiche Mistral Medium 3.5", url: "https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04" },
      { name: "Mistral AI : fiche Mistral Large 3", url: "https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12" },
      { name: "Mistral AI : vue d'ensemble de la plateforme (Vibe Work, Vibe Code)", url: "https://docs.mistral.ai/getting-started/platform-overview" },
      { name: "Mistral AI : Le Chat devient Vibe (centre d'aide)", url: "https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe" },
      { name: "Mistral AI : utilisation des données pour l'entraînement", url: "https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models" },
      { name: "Mistral AI : lieu de stockage des données", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data" },
      { name: "Mistral AI : licences des modèles ouverts", url: "https://help.mistral.ai/en/articles/347393-under-which-license-are-mistral-s-open-models-available" },
      { name: "Mistral AI : certifications SOC 2 et ISO 27001", url: "https://help.mistral.ai/en/articles/347638-do-you-have-soc-2-or-iso-27001-certification" },
      { name: "Mistral AI : raisonnement natif (Magistral) déprécié", url: "https://docs.mistral.ai/resources/deprecated/native-reasoning" },
      { name: "OpenAI : tarifs de ChatGPT (page France)", url: "https://chatgpt.com/fr-FR/pricing/" },
      { name: "OpenAI : notes de version de ChatGPT", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { name: "OpenAI : notes de version des modèles (gpt-oss, août 2025)", url: "https://help.openai.com/en/articles/9624314-model-release-notes" },
      { name: "OpenAI : GPT-5.6 et GPT-6 Pro dans ChatGPT", url: "https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt" },
      { name: "OpenAI : présentation de ChatGPT Business", url: "https://help.openai.com/en/articles/8792828-chatgpt-business-overview" },
      { name: "OpenAI : résidence des données et de l'inférence", url: "https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt" },
      { name: "OpenAI : stockage des contenus de ChatGPT Business", url: "https://help.openai.com/en/articles/20001418-where-your-chatgpt-business-content-is-stored" },
      { name: "OpenAI : arrêt de Sora", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
      { name: "OpenAI : modèles de l'API", url: "https://developers.openai.com/api/docs/models" },
      { name: "EUR-Lex : règlement (UE) 2026/1744, nouvel article 4 de l'AI Act", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    ],

    realCases: [
      {
        scenario: "Répondre à un appel d'offres public avec exigence de souveraineté",
        feature: "Mistral (hébergement UE, déploiement sur site) · ChatGPT Enterprise (résidence en Europe)",
        prompt: "Notre collectivité exige que les données des usagers restent dans l'Union européenne et privilégie les solutions souveraines. Quelle architecture d'IA proposer pour un assistant de réponse aux usagers ?",
        verdictText: "**Mistral gagne** : hébergement européen par défaut et possibilité de déployer un modèle à poids ouverts dans l'infrastructure de la collectivité. Avec ChatGPT, le même dossier suppose l'offre Enterprise pour stocker et traiter les données en Europe, plus une analyse des transferts vers un acteur américain.",
        winner: "a",
      },
      {
        scenario: "Produire une campagne multicanal complète avec visuels",
        feature: "ChatGPT Images 2.5 et ChatGPT Work · Vibe avec génération d'images",
        prompt: "Lance la campagne de notre nouveau service : page d'atterrissage, séquence de 4 courriels, 6 publications LinkedIn, 8 visuels carrés cohérents avec notre charte (bleu nuit, minimaliste) et un script vidéo de 45 secondes.",
        verdictText: "**ChatGPT prend l'avantage** : textes, visuels cohérents avec ChatGPT Images 2.5, script et itérations tiennent dans un seul outil, et ChatGPT Work peut assembler le tout. Vibe couvre les textes et génère des images, avec plus d'allers-retours pour tenir une charte sur huit visuels. La vidéo elle-même sort du périmètre de ChatGPT depuis l'arrêt de Sora.",
        winner: "b",
      },
      {
        scenario: "Analyser des documents de R&D confidentiels sans sortie de données",
        feature: "Mistral à poids ouverts, auto-hébergé · ChatGPT Enterprise",
        prompt: "Synthétise ces 30 rapports d'essais internes et identifie les 5 pistes d'amélioration de procédé les plus prometteuses. Contrainte absolue : aucune donnée ne doit quitter notre réseau.",
        verdictText: "**Mistral est le seul à répondre à la contrainte telle quelle** : un modèle à poids ouverts déployé sur l'infrastructure interne traite les documents sans aucun flux sortant. ChatGPT Enterprise offre des garanties contractuelles et l'hébergement en Europe, mais les données passent par les serveurs d'OpenAI, ce que la contrainte excluait d'emblée.",
        winner: "a",
      },
    ],

    mistakes: [
      {
        title: "Croire que souverain signifie moins performant partout",
        desc: "Mistral présente Medium 3.5 comme un modèle de classe frontière pour les agents et le code. Sur les tâches d'entreprise courantes (rédaction, synthèse, analyse de documents), testez-le sur vos propres cas avant de conclure.",
      },
      {
        title: "Comparer Vibe gratuit à ChatGPT Plus",
        desc: "L'erreur symétrique du comparatif ChatGPT vs Claude : les versions gratuites sont bridées. Pour un test honnête, comparez Vibe Pro à ChatGPT Plus, sur vos cas d'usage réels, pendant deux semaines.",
      },
      {
        title: "Choisir la souveraineté par principe sans cartographier ses flux",
        desc: "Tous vos usages n'ont pas le même niveau de sensibilité. Routez les flux sensibles vers Mistral ou un déploiement interne, et laissez les usages courants sur l'outil préféré des équipes. La cartographie précède le choix.",
      },
      {
        title: "Oublier le réglage d'entraînement de Vibe",
        desc: "Hors offre Enterprise, Mistral utilise par défaut les échanges Vibe pour entraîner ses modèles, sauf opposition de l'utilisateur. Sur l'offre Team, faites désactiver ce réglage par chaque utilisateur, ou passez à Enterprise, où l'exclusion est la règle.",
      },
    ],

    alsoConsidered: [
      { name: "Claude (Anthropic)", summary: "Un million de tokens par conversation sur les offres payantes et Claude Code dès l'offre Pro ; aucune région européenne. Voir notre [comparatif ChatGPT vs Claude](/chatgpt-vs-claude)." },
      { name: "Gemini (Google)", summary: "Pertinent si vous êtes sur Google Workspace, où Gemini est inclus dans les forfaits. Voir [Gemini vs Copilot](/gemini-vs-copilot)." },
      { name: "gpt-oss (OpenAI)", summary: "Modèles à poids ouverts publiés par OpenAI en août 2025, pour un déploiement en interne sans passer par ChatGPT." },
    ],

    faq: [
      {
        q: "Mistral est-il 100 % souverain ?",
        a: "Mistral AI est une entreprise française ; ses données sont hébergées dans l'Union européenne par défaut, et ses modèles à poids ouverts peuvent tourner dans votre infrastructure. Nuances honnêtes : certaines fonctions transfèrent ponctuellement des données vers des sous-traitants hors UE, et l'API propose aussi un point d'accès américain. La souveraineté effective dépend du mode de déploiement que vous choisissez.",
      },
      {
        q: "Que signifie « poids ouverts » et pourquoi est-ce important ?",
        a: "Un modèle à poids ouverts publie ses poids (les paramètres appris pendant l'entraînement) : vous pouvez le télécharger et le faire tourner sur vos serveurs sans envoyer de données à l'éditeur. La plupart des modèles ouverts de Mistral sont sous licence Apache 2.0 ; certains, comme Medium 3.5, relèvent d'une licence MIT modifiée qui impose une licence commerciale aux entreprises de plus de 20 millions de dollars de chiffre d'affaires mensuel, sauf usage via Mistral Studio.",
      },
      {
        q: "Pourquoi Le Chat s'appelle-t-il maintenant Vibe ?",
        a: "Mistral AI a renommé son assistant **Le Chat en Vibe le 28 mai 2026**, avec une offre élargie : Vibe Work pour les tâches de bureau en plusieurs étapes, Vibe Code pour le développement, Vibe Chat pour la conversation classique. Compte, offre, historique et réglages sont conservés, et l'adresse chat.mistral.ai reste la porte d'entrée.",
      },
      {
        q: "Vibe peut-il remplacer ChatGPT au quotidien ?",
        a: "Pour la rédaction, la synthèse, l'analyse de documents et la traduction, oui. Les écarts tiennent aux fonctions propres à ChatGPT : ChatGPT Work, agents d'espace de travail partagés, extensions Office, Sites. Listez vos usages réels avant de trancher, c'est l'exercice que nous faisons en formation multi-outils.",
      },
      {
        q: "Quelle est la fenêtre de contexte de Vibe et de ChatGPT ?",
        a: "Côté ChatGPT : 54 000 tokens en mode instantané et 256 000 en raisonnement sur Plus et Business, 1 050 000 via l'API pour les modèles GPT-6. Côté Mistral : 256 000 tokens via l'API pour Medium 3.5 et Large 3 ; la limite de l'interface Vibe n'est pas détaillée par offre. Pour un document unique volumineux, Claude et Gemini (dès Business Standard) lisent un million de tokens dans leur interface.",
      },
      {
        q: "Quel est le meilleur choix au regard du RGPD et de l'AI Act ?",
        a: "Les deux peuvent être conformes. Avec Mistral, l'hébergement européen par défaut raccourcit l'analyse des transferts, à condition de désactiver l'entraînement sur les échanges hors Enterprise. Avec ChatGPT, l'offre Enterprise permet le stockage et l'inférence en Europe. Dans les deux cas, l'article 4 de l'AI Act, réécrit par le règlement (UE) 2026/1744 du 8 juillet 2026, demande de prendre des mesures pour développer la maîtrise de l'IA des équipes.",
      },
      {
        q: "Peut-on déployer Mistral et ChatGPT en parallèle ?",
        a: "Oui : ChatGPT (ou Claude) pour la polyvalence quotidienne, Mistral pour les flux sensibles et les métiers régulés. La formation des équipes couvre les deux logiques de demande, proches en pratique.",
      },
      {
        q: "Combien coûte la formation de mes équipes à Mistral ou à ChatGPT ?",
        a: "Une journée de formation Mistral AI ou ChatGPT coûte **1 980 € HT** en intra pour le groupe (jusqu'à 12 participants), au même tarif en individuel, TVA de 20 % en sus. Masteria est certifié Qualiopi : selon votre branche, votre OPCO peut financer la session. Le format multi-outils permet de comparer les deux sur vos cas réels avant de choisir.",
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
    metaTitle: "Gemini vs Copilot 2026 : lequel choisir ? | Comparatif Masteria",
    metaDesc:
      "Google Gemini ou Microsoft 365 Copilot : intégration Workspace ou M365, coût réel par siège, agents, Gemini Notebook. Comparatif vérifié le 3 octobre 2026.",
    h1: "Google Gemini vs Microsoft Copilot : le match des suites bureautiques",
    intro:
      "En 2026, le choix entre **Gemini** (Google) et **Microsoft Copilot** se joue sur votre suite bureautique bien plus que sur les modèles. Gemini vit dans Google Workspace (Gmail, Docs, Sheets, Meet) et se trouve inclus dans les forfaits, de Business Starter à Enterprise. Copilot vit dans Microsoft 365 (Outlook, Word, Excel, Teams) : Copilot Chat est inclus, et la licence complète coûte 26 € HT par utilisateur et par mois, ou 18,20 € HT avec Copilot Business jusqu'à 300 utilisateurs. Ce comparatif détaille ce que chacun fait bien, ce qu'il coûte une fois les options ajoutées, et comment trancher en environnement mixte.",
    lastUpdate: "Octobre 2026",
    verifiedOn: "3 octobre 2026",
    datePublished: "2026-06-02",
    dateModified: "2026-10-03",
    readTime: "9 minutes",
    keywords:
      "gemini vs copilot, gemini workspace, microsoft 365 copilot prix, copilot business prix, gemini notebook 300 sources, workspace studio, gemini enterprise, workflow builder, comparatif gemini copilot 2026",

    // ─── GEO : réponse directe citable, autoportante (entités nommées, chiffres datés)
    answerBox: {
      question: "Gemini ou Copilot : lequel choisir en 2026 ?",
      answer:
        "Votre suite décide. Organisation sur **Google Workspace** : prenez **Gemini**, inclus dans les forfaits ; dès Business Standard (13,60 € HT par utilisateur et par mois en annuel), l'application Gemini lit **un million de tokens**, Gemini Notebook (anciennement NotebookLM) interroge **300 sources par carnet** et Workspace Studio automatise des enchaînements décrits en langage naturel. Organisation sur **Microsoft 365** : prenez **Copilot**, dont la licence complète (26 € HT, ou 18,20 € HT en Copilot Business jusqu'à 300 utilisateurs) ancre les réponses dans Microsoft Graph, avec Copilot Studio pour les agents métier. Deux pièges de budget : côté Google, l'atelier d'agents Workflow Builder relève de **Gemini Enterprise**, une licence distincte à partir de 21 $ par siège ; côté Microsoft, les agents autonomes et Copilot Cowork se facturent à l'usage.",
      bullets: [
        "Gmail, Docs, Sheets, Meet au quotidien : Gemini, déjà inclus dans le forfait",
        "Outlook, Word, Excel, Teams au quotidien : Copilot",
        "Corpus documentaires à interroger : Gemini Notebook, 300 sources par carnet dès Business Standard",
        "Agents métier gouvernés par l'informatique : Copilot Studio, en crédits hors agents publiés dans Copilot",
        "Environnement mixte : comparez sur trois cas réels et chiffrez la licence complète",
      ],
    },

    toolA: {
      id: "gemini",
      name: "Google Gemini",
      editor: "Google",
      currentModel: "Famille Gemini 3 (modèles Pro, Thinking et Fast dans l'application)",
      country: "États-Unis",
      pricing: "Inclus dans Workspace : Business Standard à 13,60 € HT/utilisateur/mois en annuel · Gemini Enterprise dès 21 $ pour l'atelier d'agents",
      foundedAI: "2023",
      color: "#4285F4",
    },
    toolB: {
      id: "copilot",
      name: "Microsoft Copilot",
      editor: "Microsoft",
      currentModel: "Modèles d'OpenAI et d'Anthropic, routage automatique, ancrage Microsoft Graph",
      country: "États-Unis",
      pricing: "Copilot Chat inclus · 26 € HT/utilisateur/mois · Copilot Business 18,20 € HT jusqu'à 300 utilisateurs",
      foundedAI: "2023",
      color: "#0078D4",
    },

    // ─── GEO : tableau de faits datés, lisible en HTML brut par un moteur génératif
    keyFacts: {
      title: "L'essentiel en un tableau",
      note: "Faits vérifiés le 3 octobre 2026 sur les pages officielles de Google Workspace, de Google Cloud et de Microsoft. Les tarifs s'entendent hors taxes, en paiement annuel, pour la France, sauf Gemini Enterprise, affiché en dollars.",
      rows: [
        { criterion: "Modèles actuels", a: "Famille Gemini 3 : Gemini 3.1 Pro et 3.8 Flash côté API ; modèles Pro, Thinking et Fast dans l'application", b: "Modèles d'OpenAI et d'Anthropic, routage automatique ; ceux d'Anthropic désactivés par défaut dans l'UE" },
        { criterion: "Coût pour une équipe", a: "Inclus dans les forfaits Workspace : Starter 6,80 €, Standard 13,60 €, Plus 21,10 € HT par utilisateur et par mois", b: "26 € HT par utilisateur et par mois en plus de la licence Microsoft 365, ou 18,20 € HT en Copilot Business" },
        { criterion: "Applications couvertes", a: "Gmail, Docs, Sheets, Slides, Vids, Drive, Meet, Chat ; accès restreint en Business Starter", b: "Outlook, Word, Excel, PowerPoint, Teams, OneNote, Forms" },
        { criterion: "Contexte dans l'application", a: "1 000 000 de tokens dès Business Standard, 32 000 en Business Starter", b: "Non publié : ancrage dans Microsoft Graph" },
        { criterion: "Accès à vos données internes", a: "Oui, dans le périmètre des permissions Drive et des applications connectées", b: "Oui, via Microsoft Graph et Work IQ, avec la licence complète" },
        { criterion: "Bases documentaires", a: "Gemini Notebook : 300 sources par carnet dès Business Standard, 50 en Starter", b: "Copilot Search et indexation sémantique des contenus Microsoft 365" },
        { criterion: "Automatisations sans code", a: "Workspace Studio : flux décrits en langage naturel", b: "Copilot Studio (low-code) et invites planifiées de Copilot Cowork" },
        { criterion: "Atelier d'agents métier", a: "Workflow Builder, dans Gemini Enterprise : licence distincte dès 21 $ par siège", b: "Copilot Studio : agents publiés dans Copilot inclus avec la licence, autres usages en crédits" },
        { criterion: "Génération d'images et de vidéo", a: "Images (Nano Banana), vidéos dans Vids (500 secondes par mois en Business Standard) et dans l'application Gemini", b: "Images dans Copilot Chat si l'administrateur l'autorise" },
        { criterion: "Entraînement sur vos données", a: "Non : échanges ni relus par des humains ni utilisés pour améliorer les modèles", b: "Non : prompts et réponses exclus de l'entraînement" },
        { criterion: "Prérequis avant déploiement", a: "Vérifier les partages Drive trop larges", b: "Auditer les permissions SharePoint : Graph révèle les sur-partages" },
      ],
    },

    verdict: {
      title: "Verdict en 30 secondes",
      summary:
        "La règle simple tient : **votre suite décide**. Sur Google Workspace, prenez Gemini, inclus dans les forfaits, avec un million de tokens de contexte et Gemini Notebook dès Business Standard. Sur Microsoft 365, prenez Copilot, plus cher avec la licence complète, en échange d'un ancrage profond dans Outlook, Teams et Excel et de l'atelier d'agents le plus outillé des deux avec Copilot Studio. Dans les deux cas, l'automatisation avancée se facture à part : Workflow Builder suppose une licence Gemini Enterprise, et Copilot Studio comme Copilot Cowork consomment des crédits. En environnement mixte, comparez sur trois cas d'usage réels.",
      recommendA: ["Organisations sur Google Workspace", "Budget serré (inclus dans les forfaits)", "Documents longs et corpus documentaires", "Équipes Gmail, Docs et Meet au quotidien"],
      recommendB: ["Organisations sur Microsoft 365", "Usage intensif d'Outlook, de Teams et d'Excel", "Agents métier avec Copilot Studio", "Gouvernance informatique centralisée Microsoft"],
    },

    criteria: [
      {
        title: "Intégration à la suite bureautique",
        descriptionA:
          "Gemini est présent dans Gmail, Docs, Sheets, Slides, Vids, Drive, Meet et Chat dès Business Standard ; Business Starter n'a qu'un accès restreint : Gemini dans Gmail, l'application Gemini et des quotas réduits dans Vids.",
        descriptionB:
          "Copilot est présent dans Outlook, Word, Excel, PowerPoint, Teams et OneNote. Avec la licence complète, il s'appuie sur Microsoft Graph, donc sur vos mails, fichiers et réunions, avec les permissions existantes.",
        winner: "tie",
        winnerText: "Match nul : chacun excelle dans sa propre suite",
      },
      {
        title: "Qualité et capacités des modèles",
        descriptionA:
          "L'application Gemini lit un million de tokens dès Business Standard et propose un modèle Pro (25 requêtes par tranche de 4 heures), un mode Thinking (300 requêtes par jour) et un mode Fast. Côté API, Google publie Gemini 3.8 Flash et Gemini 3.1 Pro.",
        descriptionB:
          "Copilot choisit le modèle par un routage automatique entre modèles d'OpenAI et d'Anthropic, avec un mode de réflexion approfondie. Microsoft ne publie pas de fenêtre de contexte : Graph va chercher le passage utile au lieu d'ingérer le document entier.",
        winner: "a",
        winnerText: "Avantage Gemini sur le contexte long",
      },
      {
        title: "Tarifs et coût réel par siège",
        descriptionA:
          "Gemini est inclus dans les forfaits Workspace : 13,60 € HT par utilisateur et par mois en Business Standard, 21,10 € en Business Plus, en annuel. Le module AI Expanded Access relève les quotas des utilisateurs intensifs, et Gemini Enterprise, à partir de 21 $ par siège, ouvre l'atelier d'agents.",
        descriptionB:
          "Copilot Chat est inclus. La licence complète coûte 26 € HT par utilisateur et par mois en annuel, ou 18,20 € HT en Copilot Business jusqu'à 300 utilisateurs (15,60 € la première année pour les clients existants qui souscrivent entre le 1er juillet et le 31 décembre 2026), en plus de Microsoft 365. Copilot Studio et Copilot Cowork se paient à l'usage.",
        winner: "a",
        winnerText: "Avantage net Gemini : inclus dans Workspace",
      },
      {
        title: "Agents et automatisation",
        descriptionA:
          "Trois briques incluses : les Gems (assistants personnalisés), Gemini Notebook et Workspace Studio, qui crée des flux sur Gmail, Drive, Chat et des services tiers à partir d'une description. Au-dessus, Workflow Builder, l'atelier sans code de Gemini Enterprise, suppose une licence distincte ; la documentation d'Agent Designer, l'ancien nom souvent cité, renvoie désormais vers lui.",
        descriptionB:
          "Copilot Studio est l'atelier d'agents low-code de Microsoft : agents connectés à vos données, gouvernance centralisée, supervision par l'administrateur. Les agents Researcher et Analyst sont fournis avec la licence, et Copilot Cowork exécute des tâches dans Microsoft 365 après validation de chaque action.",
        winner: "b",
        winnerText: "Avantage Copilot sur les agents d'entreprise",
      },
      {
        title: "Sécurité, permissions et gouvernance",
        descriptionA:
          "Gemini respecte les permissions Drive existantes ; dans les éditions Workspace, les échanges et fichiers ne sont ni relus par des humains ni utilisés pour améliorer les modèles. La gouvernance passe par la console d'administration.",
        descriptionB:
          "Même principe via Microsoft Graph, avec un piège connu : Copilot révèle les sur-partages existants. Microsoft fournit SharePoint Advanced Management, la restriction de découverte de contenu et Purview pour les traiter avant le déploiement.",
        winner: "tie",
        winnerText: "Match nul, avec un prérequis d'audit côté Microsoft",
      },
      {
        title: "Réunions, mails et quotidien",
        descriptionA:
          "Meet : Gemini résume, traduit et prend des notes pendant la réunion. Gmail : recherche, résumé et rédaction des courriels.",
        descriptionB:
          "Teams : résumés et transcriptions des réunions (jusqu'à 30 jours), actions à suivre. Outlook : brouillons, résumés de fils, conseils sur la clarté et le ton.",
        winner: "tie",
        winnerText: "Équivalents : la qualité dépend de votre suite",
      },
      {
        title: "Création de contenus et multimodalité",
        descriptionA:
          "Images avec Nano Banana dans l'application, images dans Slides, vidéos générées dans Vids (500 secondes par mois en Business Standard) et dans l'application Gemini (3 par jour avec le modèle Omni).",
        descriptionB:
          "Images dans Copilot Chat quand l'administrateur l'autorise, présentations construites et mises en forme dans PowerPoint.",
        winner: "a",
        winnerText: "Avantage Gemini sur la création multimodale",
      },
      {
        title: "Interroger un corpus documentaire",
        descriptionA:
          "Gemini Notebook, nouveau nom de NotebookLM, interroge jusqu'à 300 sources par carnet dès Business Standard, avec citation du passage d'origine ; Business Starter reste à 50. Au-delà, il faut découper le corpus en plusieurs carnets.",
        descriptionB:
          "Copilot Search et l'indexation sémantique interrogent ce que vous avez déjà dans Microsoft 365, dans la limite de vos permissions, sans corpus à constituer. La contrepartie : un contrôle moins fin sur le périmètre exact d'une réponse.",
        winner: "tie",
        winnerText: "Match nul : corpus choisi chez Google, corpus existant chez Microsoft",
      },
    ],

    useCases: [
      { metier: "Organisation 100 % Google Workspace", recommendation: "a", why: "Gemini est inclus, intégré à toute la suite dès Business Standard, et s'active depuis la console d'administration." },
      { metier: "Organisation 100 % Microsoft 365", recommendation: "b", why: "Copilot exploite Microsoft Graph (mails, fichiers, réunions) : la valeur vient de cet ancrage." },
      { metier: "Finance et analyse (Excel intensif)", recommendation: "b", why: "Copilot travaille dans Excel, où vivent déjà les modèles financiers ; Gemini dans Sheets plafonne à 100 créations ou modifications de feuilles par mois en Business Standard." },
      { metier: "Data et gros corpus documentaires", recommendation: "a", why: "Un million de tokens dans l'application et Gemini Notebook, qui interroge 300 sources par carnet avec citation du passage d'origine." },
      { metier: "Service client et processus outillés", recommendation: "b", why: "Copilot Studio construit des agents connectés aux bases internes, gouvernés par l'administrateur." },
      { metier: "Environnement mixte ou migration en cours", recommendation: "tie", why: "Testez trois cas d'usage réels sur chaque suite avec un pilote de deux semaines, puis chiffrez le coût complet des licences." },
    ],

    // ─── GEO : delta daté, très citable par les moteurs génératifs
    changelog: {
      title: "Ce qui a changé depuis notre version d'août 2026",
      items: [
        { date: "Octobre 2026", text: "Au 3 octobre 2026, Google renomme NotebookLM en Gemini Notebook, avec 300 sources par carnet dès Business Standard, et l'application Gemini lit un million de tokens sur ces éditions. La documentation de Gemini Enterprise présente Workflow Builder comme atelier d'agents sans code." },
        { date: "Octobre 2026", text: "Au 3 octobre 2026, Microsoft distingue Copilot Chat, Microsoft 365 Copilot (Basic) et Microsoft 365 Copilot (Premium), documente Copilot Cowork et propose des modèles d'Anthropic, désactivés par défaut dans l'UE." },
        { date: "Juillet 2026", text: "Microsoft propose à ses clients existants Copilot Business à 15,60 € HT la première année, au lieu de 18,20 €, pour les souscriptions du 1er juillet au 31 décembre 2026." },
        { date: "Correction", text: "Nous annoncions NotebookLM Plus limité à 100 sources par carnet : la documentation de Google donne 300 sources en Business Standard, Business Plus et Enterprise." },
        { date: "Correction", text: "Nous chiffrions Copilot à environ 30 $ par utilisateur : le prix affiché pour la France est de 26 € HT en annuel, et Copilot Business coûte 18,20 € HT jusqu'à 300 utilisateurs. Nous écrivions aussi que Google ne détaillait pas la fenêtre de contexte de Gemini par édition : elle est publiée, d'un million de tokens dès Business Standard." },
      ],
    },

    methodology:
      "Ce comparatif est rédigé par Masteria, cabinet lyonnais spécialisé en intelligence artificielle depuis 2022, qui forme les équipes à Google Gemini comme à Microsoft Copilot. Les verdicts reposent sur des mises en situation de formation sur les deux suites. Les faits produit et les tarifs ont été revérifiés le **3 octobre 2026** sur les pages officielles de Google Workspace, de Google Cloud et de Microsoft listées ci-dessous. Versions évaluées : **Gemini pour Workspace (Business Standard)** et **Microsoft 365 Copilot**.",

    citations: [
      { name: "Google Workspace : tarifs (France)", url: "https://workspace.google.com/intl/fr/pricing" },
      { name: "Google : application Gemini avec un compte professionnel, limites par édition", url: "https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DBusiness-Enterprise" },
      { name: "Google Workspace : Gemini Notebook par édition", url: "https://knowledge.workspace.google.com/admin/generative-ai/gemini-notebook/turn-gemini-notebook-on-or-off-for-users" },
      { name: "Google Workspace : limites d'usage de l'IA par édition", url: "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits" },
      { name: "Google Workspace : Workspace Studio", url: "https://knowledge.workspace.google.com/admin/studio/get-started-workspace-studio-set-up-guide-for-admins" },
      { name: "Google Cloud : Gemini Enterprise", url: "https://cloud.google.com/gemini-enterprise" },
      { name: "Google Cloud : Workflow Builder (Gemini Enterprise)", url: "https://docs.cloud.google.com/gemini/enterprise/docs/workflow-builder" },
      { name: "Google : modèles de l'API Gemini", url: "https://ai.google.dev/gemini-api/docs/models" },
      { name: "Microsoft : tarifs de Microsoft 365 Copilot pour les grandes entreprises (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/enterprise" },
      { name: "Microsoft : Microsoft 365 Copilot Business pour les PME (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/business" },
      { name: "Microsoft Learn : présentation de Microsoft Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview" },
      { name: "Microsoft Learn : modèles d'Anthropic dans les services Microsoft", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor" },
      { name: "Microsoft Learn : Copilot Cowork", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" },
      { name: "Microsoft : Copilot Studio, offres et tarifs (France)", url: "https://www.microsoft.com/fr-fr/microsoft-365-copilot/microsoft-copilot-studio" },
    ],

    realCases: [
      {
        scenario: "Synthèse de réunion et suivi des actions",
        feature: "Gemini dans Meet · Copilot dans Teams",
        prompt: "Réunion de pilotage de 55 minutes. Produis les décisions prises, les actions par responsable avec échéances, les points de blocage, et un brouillon de courriel de synthèse pour les absents.",
        verdictText: "**Match nul**. Gemini dans Meet résume, traduit et prend des notes ; Copilot dans Teams résume, transcrit et liste les actions à suivre. Le facteur décisif est l'outil de visioconférence que vous utilisez déjà.",
        winner: "tie",
      },
      {
        scenario: "Construire une présentation à partir d'un document de référence",
        feature: "Gemini dans Slides · Copilot dans PowerPoint",
        prompt: "À partir de cette note stratégique de 12 pages, construis une présentation de 10 diapositives pour le comité de direction : structure claire, un message par diapositive, visuels sobres cohérents avec notre charte.",
        verdictText: "**Léger avantage Gemini** : un million de tokens dans l'application digère les documents sources volumineux, et Slides génère des images. Copilot construit la présentation dans PowerPoint et met en forme tout le fichier.",
        winner: "a",
      },
      {
        scenario: "Déployer un agent interne de réponse RH (congés, paie, intégration)",
        feature: "Copilot Studio · Gems, Workspace Studio et Gemini Enterprise",
        prompt: "Construis un agent qui répond aux questions RH des collaborateurs à partir de nos accords d'entreprise et procédures internes (SharePoint), avec escalade vers l'équipe RH quand il n'est pas sûr.",
        verdictText: "**Copilot gagne**. Copilot Studio est construit pour ce cas : connexion à SharePoint, respect des permissions, supervision par l'administrateur ; publié dans Microsoft 365 Copilot, l'agent est inclus pour les détenteurs de la licence. Côté Google, l'équivalent passe par Workflow Builder dans Gemini Enterprise, licence distincte : les Gems seuls ne couvrent pas la gouvernance attendue sur un agent ouvert à toute l'entreprise.",
        winner: "b",
      },
    ],

    mistakes: [
      {
        title: "Comparer les modèles au lieu de comparer les intégrations",
        desc: "Gemini 3 face aux modèles d'OpenAI et d'Anthropic, c'est un débat de classement. Sur le terrain, l'essentiel de la valeur vient de l'intégration à vos mails, vos fichiers et vos réunions. La bonne question : lequel exploite le mieux les données là où elles se trouvent ?",
      },
      {
        title: "Croire que l'atelier d'agents est inclus dans votre forfait Workspace",
        desc: "Les Gems, Gemini Notebook et Workspace Studio sont inclus dans les forfaits concernés. Workflow Builder, l'atelier d'agents sans code, relève de Gemini Enterprise, une licence distincte à partir de 21 $ par siège. Chiffrez-la avant de bâtir un projet d'agents.",
      },
      {
        title: "Déployer Copilot sans audit des permissions",
        desc: "Copilot rend visible tout ce que chaque collaborateur peut techniquement voir, y compris des dossiers partagés trop largement depuis des années. Sans audit préalable (rapports d'accès, SharePoint Advanced Management, Purview), le déploiement peut virer à l'incident interne.",
      },
      {
        title: "Ignorer le coût total réel",
        desc: "Sur 200 personnes, la licence Copilot Business ajoute 43 680 € HT par an (200 × 18,20 € × 12), à comparer à Gemini inclus dans Workspace. Changer de suite pour économiser ce montant engage des coûts de migration et de formation à chiffrer d'abord : le calcul se fait à suite constante, licences d'agents comprises.",
      },
    ],

    alsoConsidered: [
      { name: "ChatGPT", summary: "Un complément au copilote de suite pour la création visuelle, les livrables complets et les agents d'équipe. Voir [Copilot vs ChatGPT](/copilot-vs-chatgpt)." },
      { name: "Claude", summary: "Un million de tokens par conversation sur les offres payantes et Claude Code dès l'offre Pro. Voir [ChatGPT vs Claude](/chatgpt-vs-claude)." },
      { name: "Mistral AI", summary: "L'option de l'hébergement européen, en complément d'une suite. Voir [Mistral vs ChatGPT](/mistral-vs-chatgpt)." },
    ],

    faq: [
      {
        q: "Peut-on utiliser Gemini si on est sur Microsoft 365 (et inversement) ?",
        a: "Oui, via les applications web autonomes (gemini.google.com, application Microsoft Copilot), mais vous perdez l'essentiel : l'accès au contexte de votre suite (mails, fichiers, réunions). L'intérêt d'un copilote de suite tient à cet ancrage. En environnement croisé, un assistant généraliste (ChatGPT, Claude, Mistral) est souvent plus pertinent.",
      },
      {
        q: "Gemini est-il gratuit avec Google Workspace ?",
        a: "Gemini est inclus dans les forfaits Workspace, sans module à acheter : 6,80 € HT par utilisateur et par mois en Business Starter (Gemini dans Gmail et l'application, accès restreint ailleurs), 13,60 € en Business Standard (Gemini dans toutes les applications), en annuel. Le coût est donc compris dans le forfait. Les usages intensifs passent par le module AI Expanded Access, et l'atelier d'agents par Gemini Enterprise, licence à part.",
      },
      {
        q: "Combien de documents Gemini Notebook peut-il traiter ?",
        a: "**Jusqu'à 300 sources par carnet** en Business Standard, Business Plus et Enterprise, 50 en Business Starter, 400 avec le module AI Expanded Access. Chaque réponse cite le passage d'origine, ce qui accélère la vérification humaine.",
      },
      {
        q: "Qu'est-ce que Workflow Builder, et est-il inclus dans mon abonnement Workspace ?",
        a: "Workflow Builder est l'atelier sans code de **Gemini Enterprise** pour créer des agents conversationnels et des flux, les tester, les partager et les planifier. Il suppose une **licence distincte**, à partir de 21 $ par siège et par mois en édition Business (jusqu'à 300 sièges). Les briques incluses dans votre forfait Workspace sont les Gems, Gemini Notebook et Workspace Studio. La documentation d'Agent Designer, l'ancien nom souvent cité, renvoie désormais vers Workflow Builder.",
      },
      {
        q: "Gemini ou Copilot : lequel est le meilleur pour Excel et l'analyse de données ?",
        a: "Copilot dans Excel analyse les données, crée formules et graphiques là où vivent déjà vos modèles. Gemini dans Sheets construit et modifie des feuilles (100 par mois en Business Standard) et propose une fonction IA dans les cellules (5 000 appels par mois). Pour la donnée lourde, les deux écosystèmes renvoient vers leurs plateformes de données.",
      },
      {
        q: "Le risque de fuite de données est-il plus élevé avec Gemini ou avec Copilot ?",
        a: "Les deux respectent les permissions existantes et n'entraînent pas leurs modèles sur vos données d'entreprise. Le risque réel est organisationnel : des permissions internes mal gérées, que Copilot expose davantage car Graph voit tout ce que l'utilisateur peut voir. Auditez les accès avant de déployer, quelle que soit la suite.",
      },
      {
        q: "Faut-il ajouter ChatGPT ou Claude en plus du copilote de suite ?",
        a: "Souvent, oui. Les copilotes de suite excellent sur le contexte interne ; les assistants généralistes gardent l'avantage sur la création visuelle, la rédaction longue et le code. Combiner les deux niveaux coûte un siège de plus pour les profils qui en ont l'usage.",
      },
      {
        q: "Combien coûte une formation à Gemini ou à Copilot ?",
        a: "Une journée de formation Gemini ou Copilot coûte **1 980 € HT** en intra pour le groupe (jusqu'à 12 participants), au même tarif en individuel, TVA de 20 % en sus. Masteria est certifié Qualiopi : selon votre branche, votre OPCO peut financer la session. La formation se construit sur vos données et vos processus, et c'est elle qui décide de l'adoption.",
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
    subtitle: "Panorama complet : ChatGPT, Claude, Copilot, Gemini, Mistral",
    excerpt: "Le guide de référence pour choisir entre les cinq outils d'IA principaux en 2026 : décision selon la suite bureautique, le métier, le budget et l'hébergement des données. Prix et modèles vérifiés le 3 octobre 2026.",
    badge: "Le guide complet",
    isHero: true,
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    subtitle: "Quel modèle IA pour votre entreprise ?",
    excerpt: "OpenAI ou Anthropic ? Douze critères : contexte réel, code, agents, images, données, hébergement, prix par siège.",
    badge: "Face-à-face",
  },
  {
    slug: "copilot-vs-chatgpt",
    title: "Microsoft Copilot vs ChatGPT",
    subtitle: "Intégré à Microsoft 365 ou autonome ?",
    excerpt: "Le bon choix dépend de la part de votre travail qui se passe dans Office, de la sensibilité de vos données et de votre budget.",
    badge: "Face-à-face",
  },
  {
    slug: "meilleure-ia-pour-coder",
    title: "Quelle est la meilleure IA pour coder ?",
    subtitle: "Claude Code, GitHub Copilot, Cursor, ChatGPT",
    excerpt: "Quatre outils de code comparés en 2026 : agents, intégration aux éditeurs, modèles, prix par développeur, cas d'usage par profil.",
    badge: "Spécialisé code",
  },
  {
    slug: "meilleur-agent-ia",
    title: "Quel est le meilleur agent IA ?",
    subtitle: "Claude Cowork, agents ChatGPT, Manus, Copilot Studio",
    excerpt: "Quatre plateformes d'agents IA en 2026 : autonomie réelle, validation des actions, gouvernance, coût des exécutions.",
    badge: "Spécialisé agents",
  },
  {
    slug: "mistral-vs-chatgpt",
    title: "Mistral AI vs ChatGPT",
    subtitle: "Souveraineté française ou écosystème américain ?",
    excerpt: "Hébergement dans l'UE, modèles à poids ouverts, entraînement sur vos échanges, fonctions, prix : le duel des entreprises attentives à leurs données.",
    badge: "Face-à-face",
  },
  {
    slug: "gemini-vs-copilot",
    title: "Google Gemini vs Microsoft Copilot",
    subtitle: "Le match des suites bureautiques",
    excerpt: "Workspace ou Microsoft 365 : intégration, prix réel, sécurité, agents. Comment choisir votre copilote de suite en 2026.",
    badge: "Face-à-face",
  },
]
