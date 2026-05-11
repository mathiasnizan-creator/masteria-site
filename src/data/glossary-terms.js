// Glossaire IA — 80 termes essentiels pour comprendre l'IA en entreprise
// Source : Masteria, centre de formation IA certifié Qualiopi

export const GLOSSARY_CATEGORIES = [
  { id: 'fondamentaux', label: 'Concepts fondamentaux', emoji: '🧠' },
  { id: 'modeles', label: 'Modèles & architectures', emoji: '🏗️' },
  { id: 'entrainement', label: 'Entraînement & apprentissage', emoji: '📚' },
  { id: 'prompt', label: 'Prompt engineering', emoji: '💬' },
  { id: 'agents', label: 'Agents & outils', emoji: '🤖' },
  { id: 'donnees', label: 'Données & contexte', emoji: '📊' },
  { id: 'evaluation', label: 'Évaluation & qualité', emoji: '🎯' },
  { id: 'regulation', label: 'Réglementation & sécurité', emoji: '⚖️' },
  { id: 'multimodal', label: 'Multimodalité', emoji: '🎨' },
]

export const GLOSSARY_TERMS = [
  // ═══════════════════ CONCEPTS FONDAMENTAUX ═══════════════════
  {
    id: 'intelligence-artificielle',
    term: 'Intelligence Artificielle (IA)',
    category: 'fondamentaux',
    definition:
      "Domaine de l'informatique qui développe des systèmes capables d'effectuer des tâches normalement associées à l'intelligence humaine : compréhension du langage, raisonnement, perception, prise de décision. En entreprise, l'IA désigne aujourd'hui principalement les outils basés sur des modèles génératifs comme ChatGPT, Claude ou Copilot.",
  },
  {
    id: 'machine-learning',
    term: 'Machine Learning (ML)',
    category: 'fondamentaux',
    definition:
      "Apprentissage automatique. Sous-domaine de l'IA qui permet à un système d'apprendre à partir de données sans être explicitement programmé. Plutôt que d'écrire des règles, on entraîne un modèle sur des exemples pour qu'il généralise à de nouveaux cas.",
  },
  {
    id: 'deep-learning',
    term: 'Deep Learning',
    category: 'fondamentaux',
    definition:
      "Apprentissage profond. Branche du Machine Learning utilisant des réseaux de neurones à plusieurs couches (souvent des dizaines ou des centaines). C'est la technologie qui a permis les avancées spectaculaires des LLM, de la vision par ordinateur et de la reconnaissance vocale.",
  },
  {
    id: 'llm',
    term: 'LLM (Large Language Model)',
    category: 'fondamentaux',
    definition:
      "Grand modèle de langage. Modèle d'IA entraîné sur des centaines de milliards de mots, capable de générer du texte, répondre à des questions, traduire, résumer. ChatGPT, Claude, Gemini, Mistral et Copilot sont tous bâtis sur des LLM.",
  },
  {
    id: 'nlp',
    term: 'NLP / TAL (Traitement du Langage)',
    category: 'fondamentaux',
    definition:
      "Natural Language Processing, ou Traitement Automatique du Langage. Branche de l'IA qui se concentre sur la compréhension et la génération du langage humain. Couvre la traduction, la synthèse, l'analyse de sentiment, l'extraction d'information.",
  },
  {
    id: 'agi',
    term: 'AGI (Intelligence Artificielle Générale)',
    category: 'fondamentaux',
    definition:
      "Artificial General Intelligence. Hypothétique IA capable d'effectuer n'importe quelle tâche intellectuelle qu'un humain peut faire, avec un niveau de polyvalence et d'adaptation comparable. Aucun système actuel n'est considéré comme AGI.",
  },
  {
    id: 'ia-generative',
    term: 'IA générative',
    category: 'fondamentaux',
    definition:
      "Catégorie d'IA qui produit du nouveau contenu (texte, image, audio, vidéo, code) à partir de prompts. Par opposition à l'IA prédictive ou classificatrice. ChatGPT, Midjourney, Sora, ElevenLabs sont des IA génératives.",
  },
  {
    id: 'reseau-neurones',
    term: 'Réseau de neurones',
    category: 'fondamentaux',
    definition:
      "Architecture de calcul inspirée du cerveau humain, composée de couches de \"neurones\" interconnectés qui traitent l'information. Chaque connexion porte un poids ajusté pendant l'entraînement. C'est la brique de base du Deep Learning.",
  },
  {
    id: 'modele-fondation',
    term: 'Modèle de fondation (Foundation Model)',
    category: 'fondamentaux',
    definition:
      "Grand modèle pré-entraîné sur des données massives, conçu pour être adapté à de multiples cas d'usage. GPT-4, Claude 3.5 Sonnet, Gemini Pro et Mistral Large sont des modèles de fondation.",
  },
  {
    id: 'inference',
    term: 'Inférence',
    category: 'fondamentaux',
    definition:
      "Phase d'utilisation d'un modèle d'IA déjà entraîné pour produire une réponse. Quand vous posez une question à ChatGPT, le modèle effectue une inférence. Coûte moins cher en compute que l'entraînement, mais à grande échelle reste significatif.",
  },

  // ═══════════════════ MODÈLES & ARCHITECTURES ═══════════════════
  {
    id: 'transformer',
    term: 'Transformer',
    category: 'modeles',
    definition:
      "Architecture de réseau de neurones introduite par Google en 2017 (papier \"Attention is All You Need\"). Base de pratiquement tous les LLM modernes. Sa capacité à traiter des séquences en parallèle via le mécanisme d'attention a révolutionné le NLP.",
  },
  {
    id: 'gpt',
    term: 'GPT',
    category: 'modeles',
    definition:
      "Generative Pre-trained Transformer. Famille de LLM développée par OpenAI. GPT-3, GPT-4, GPT-4o, GPT-5 sont les versions successives. Alimente ChatGPT et de nombreuses applications via l'API OpenAI.",
  },
  {
    id: 'claude',
    term: 'Claude',
    category: 'modeles',
    definition:
      "Famille de modèles développée par Anthropic, fondée par d'anciens d'OpenAI. Connu pour sa sécurité, son alignement (Constitutional AI) et ses excellentes capacités en analyse de longs documents et en code. Versions phares : Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude Opus 4.",
  },
  {
    id: 'gemini',
    term: 'Gemini',
    category: 'modeles',
    definition:
      "Famille de LLM multimodaux développée par Google DeepMind. Native dans Workspace (Docs, Gmail, Sheets) et Android. Versions principales : Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini 2.0.",
  },
  {
    id: 'mistral',
    term: 'Mistral AI',
    category: 'modeles',
    definition:
      "Entreprise française fondée en 2023, éditrice des modèles Mistral 7B, Mixtral, Mistral Large, Codestral. Souveraine européenne, propose des modèles open-weight ainsi que des services API hébergés en France.",
  },
  {
    id: 'copilot',
    term: 'Microsoft Copilot',
    category: 'modeles',
    definition:
      "Famille de produits IA de Microsoft basée sur GPT-4 (en partenariat avec OpenAI). Intégré nativement à Word, Excel, Teams, Outlook, GitHub. Existe en version Microsoft 365 Copilot (entreprises) et Copilot gratuit.",
  },
  {
    id: 'llama',
    term: 'Llama',
    category: 'modeles',
    definition:
      "Famille de LLM open-weight publiée par Meta (Facebook). Llama 3.1, Llama 3.3 sont massivement utilisés en self-hosted par des entreprises voulant garder le contrôle de leurs données.",
  },
  {
    id: 'diffusion',
    term: 'Modèle de diffusion',
    category: 'modeles',
    definition:
      "Architecture utilisée principalement pour générer des images (Stable Diffusion, Midjourney, DALL-E). Le modèle apprend à reconstruire une image à partir de bruit. Aussi utilisé pour la vidéo (Sora, Veo) et l'audio.",
  },
  {
    id: 'moe',
    term: 'MoE (Mixture of Experts)',
    category: 'modeles',
    definition:
      "Architecture où plusieurs sous-réseaux \"experts\" sont activés sélectivement selon le type d'input. Permet de scaler les modèles sans coût d'inférence proportionnel. Mixtral, GPT-4, Claude utilisent cette approche.",
  },
  {
    id: 'multimodal',
    term: 'Modèle multimodal',
    category: 'modeles',
    definition:
      "Modèle capable de traiter plusieurs types d'entrées : texte, image, audio, vidéo. GPT-4o, Gemini, Claude 3.5 sont multimodaux. Permet par exemple d'analyser une capture d'écran ou un graphique en plus du texte.",
  },

  // ═══════════════════ ENTRAÎNEMENT & APPRENTISSAGE ═══════════════════
  {
    id: 'pre-training',
    term: 'Pré-entraînement (Pre-training)',
    category: 'entrainement',
    definition:
      "Phase initiale d'entraînement d'un LLM sur d'énormes corpus de texte (web, livres, code) pour qu'il apprenne la structure du langage, les connaissances générales. Coûte des dizaines de millions de dollars en GPU pour les modèles frontières.",
  },
  {
    id: 'fine-tuning',
    term: 'Fine-tuning (Affinage)',
    category: 'entrainement',
    definition:
      "Ré-entraînement d'un modèle pré-existant sur un jeu de données spécifique pour le spécialiser. Permet par exemple d'adapter un LLM au vocabulaire métier de votre entreprise ou à un style rédactionnel précis.",
  },
  {
    id: 'rlhf',
    term: 'RLHF',
    category: 'entrainement',
    definition:
      "Reinforcement Learning from Human Feedback. Technique d'alignement où le modèle apprend à partir de préférences humaines (ce que les humains jugent meilleur). Utilisée pour rendre ChatGPT, Claude et Gemini plus utiles et sûrs.",
  },
  {
    id: 'rag',
    term: 'RAG (Retrieval-Augmented Generation)',
    category: 'entrainement',
    definition:
      "Génération augmentée par récupération. Architecture qui combine un LLM avec une base de connaissances externe : avant de répondre, le système cherche les documents pertinents et les fournit au modèle. Réduit drastiquement les hallucinations et permet d'utiliser des données privées sans fine-tuning.",
  },
  {
    id: 'distillation',
    term: 'Distillation',
    category: 'entrainement',
    definition:
      "Technique consistant à entraîner un \"petit\" modèle à imiter un \"grand\" modèle. Permet d'obtenir des performances proches du modèle d'origine pour une fraction du coût et de la latence. Claude 3.5 Haiku est en partie le résultat d'une distillation depuis Sonnet.",
  },
  {
    id: 'apprentissage-supervise',
    term: 'Apprentissage supervisé',
    category: 'entrainement',
    definition:
      "Entraînement où chaque exemple d'apprentissage est associé à une réponse correcte (\"label\"). Le modèle apprend à reproduire ces réponses. Utilisé en classification, en traduction, etc.",
  },
  {
    id: 'apprentissage-non-supervise',
    term: 'Apprentissage non-supervisé',
    category: 'entrainement',
    definition:
      "Apprentissage sans labels : le modèle découvre lui-même des patterns dans les données. Le pré-entraînement des LLM est un cas particulier (auto-supervisé : le modèle prédit le mot suivant à partir des précédents).",
  },
  {
    id: 'few-shot',
    term: 'Few-shot learning',
    category: 'entrainement',
    definition:
      "Capacité d'un modèle à généraliser à une nouvelle tâche après seulement quelques exemples (souvent 2-5) fournis dans le prompt. Pas besoin de re-entraîner le modèle.",
  },
  {
    id: 'zero-shot',
    term: 'Zero-shot learning',
    category: 'entrainement',
    definition:
      "Capacité d'un modèle à effectuer une tâche sans aucun exemple préalable, en se basant uniquement sur la description de la tâche en langage naturel. Démontre la puissance des grands modèles modernes.",
  },
  {
    id: 'transfer-learning',
    term: 'Transfer Learning',
    category: 'entrainement',
    definition:
      "Apprentissage par transfert. Réutilisation d'un modèle entraîné sur une tâche pour résoudre une autre tâche connexe. Le fine-tuning est une forme de transfer learning.",
  },

  // ═══════════════════ PROMPT ENGINEERING ═══════════════════
  {
    id: 'prompt',
    term: 'Prompt',
    category: 'prompt',
    definition:
      "Instruction donnée à un modèle d'IA générative pour obtenir une réponse. Peut être une simple question, une commande détaillée, ou une combinaison de contexte, exemples et tâche. La qualité du prompt détermine largement la qualité du résultat.",
  },
  {
    id: 'system-prompt',
    term: 'System prompt',
    category: 'prompt',
    definition:
      "Instructions de haut niveau données au modèle avant le début de la conversation, qui définissent son rôle, son ton, ses contraintes. Invisible pour l'utilisateur final dans la plupart des applications.",
  },
  {
    id: 'chain-of-thought',
    term: 'Chain-of-thought (CoT)',
    category: 'prompt',
    definition:
      "Technique de prompt consistant à demander explicitement au modèle de raisonner étape par étape avant de répondre. Améliore la précision sur les tâches complexes (math, logique, planning).",
  },
  {
    id: 'few-shot-prompting',
    term: 'Few-shot prompting',
    category: 'prompt',
    definition:
      "Donner quelques exemples (input → output souhaité) dans le prompt pour montrer au modèle le format ou le style attendu. Très efficace pour des tâches structurées.",
  },
  {
    id: 'prompt-injection',
    term: 'Prompt injection',
    category: 'prompt',
    definition:
      "Attaque où un acteur malveillant insère des instructions dans une donnée (email, document, page web) qui sera lue par un agent IA, dans le but de détourner son comportement. Risque de sécurité majeur des agents.",
  },
  {
    id: 'jailbreak',
    term: 'Jailbreak',
    category: 'prompt',
    definition:
      "Technique visant à contourner les garde-fous d'un LLM pour lui faire produire du contenu interdit. Les éditeurs (OpenAI, Anthropic) corrigent constamment leurs modèles pour résister à ces attaques.",
  },
  {
    id: 'bibliotheque-prompts',
    term: 'Bibliothèque de prompts',
    category: 'prompt',
    definition:
      "Collection structurée de prompts éprouvés et réutilisables pour des tâches récurrentes (rédaction, synthèse, analyse, etc.). Élément clé pour industrialiser l'usage de l'IA en équipe — chaque formation Masteria en livre une.",
  },
  {
    id: 'meta-prompt',
    term: 'Meta-prompt',
    category: 'prompt',
    definition:
      "Prompt qui demande au modèle d'écrire ou améliorer un autre prompt. Technique avancée pour automatiser la création de prompts optimisés.",
  },
  {
    id: 'prompt-template',
    term: 'Prompt template',
    category: 'prompt',
    definition:
      "Modèle de prompt avec des variables à remplir, utilisé pour standardiser les interactions avec un LLM. Ex: \"Résume le document {DOC} en {N} phrases pour un public {AUDIENCE}\".",
  },
  {
    id: 'prompt-engineering',
    term: 'Prompt Engineering',
    category: 'prompt',
    definition:
      "Discipline de conception et d'optimisation de prompts pour obtenir les meilleures performances d'un LLM. Englobe le choix de la formulation, du format, des exemples, du contexte et de la structure.",
  },

  // ═══════════════════ AGENTS & OUTILS ═══════════════════
  {
    id: 'agent-ia',
    term: 'Agent IA',
    category: 'agents',
    definition:
      "Système IA capable d'effectuer des actions dans un environnement (web, système de fichiers, API) en plus de générer du texte. Combine LLM + outils + boucle de raisonnement pour accomplir des tâches en plusieurs étapes.",
  },
  {
    id: 'agent-autonome',
    term: 'Agent autonome',
    category: 'agents',
    definition:
      "Agent IA capable de fonctionner avec une supervision minimale, planifiant et exécutant des tâches complexes par lui-même. Claude avec computer use, AutoGPT, ou les agents Cursor en sont des exemples.",
  },
  {
    id: 'mcp',
    term: 'MCP (Model Context Protocol)',
    category: 'agents',
    definition:
      "Protocole ouvert lancé par Anthropic en 2024 pour standardiser la connexion entre LLM et systèmes externes (bases de données, APIs, fichiers). Devenu un standard de fait pour les agents en 2025.",
  },
  {
    id: 'function-calling',
    term: 'Function calling / Tool use',
    category: 'agents',
    definition:
      "Capacité d'un LLM à appeler des fonctions ou outils externes dans le cadre de sa réponse, en respectant un schéma JSON. Base technique des agents : permet au modèle de chercher sur le web, requêter une base, envoyer un email.",
  },
  {
    id: 'react',
    term: 'ReAct (Reasoning + Acting)',
    category: 'agents',
    definition:
      "Pattern d'agent où le modèle alterne entre raisonnement (réflexion) et action (utilisation d'outils). Améliore la fiabilité par rapport à un agent qui se contente de générer une suite d'actions.",
  },
  {
    id: 'workflow-ia',
    term: 'Workflow IA',
    category: 'agents',
    definition:
      "Suite ordonnée d'étapes IA (avec ou sans humain dans la boucle) automatisant un processus métier. Plus prévisible qu'un agent autonome, plus rigide mais souvent plus adapté en entreprise pour des tâches récurrentes.",
  },
  {
    id: 'orchestrateur',
    term: 'Orchestrateur',
    category: 'agents',
    definition:
      "Composant qui coordonne plusieurs LLM et outils pour résoudre une tâche. LangChain, LlamaIndex, et n8n sont des frameworks d'orchestration populaires.",
  },
  {
    id: 'humain-dans-la-boucle',
    term: 'Human-in-the-loop (HITL)',
    category: 'agents',
    definition:
      "Architecture où un humain valide ou corrige certaines étapes d'un workflow IA. Recommandé pour toute action irréversible ou à fort impact (envoi d'email client, validation contractuelle).",
  },

  // ═══════════════════ DONNÉES & CONTEXTE ═══════════════════
  {
    id: 'token',
    term: 'Token',
    category: 'donnees',
    definition:
      "Unité de base de traitement d'un LLM : un fragment de texte (souvent 3-4 caractères en moyenne). Le mot \"intelligence\" peut faire 2-3 tokens. Les LLM sont facturés au million de tokens en entrée et en sortie.",
  },
  {
    id: 'tokenizer',
    term: 'Tokenizer',
    category: 'donnees',
    definition:
      "Composant qui découpe le texte en tokens avant de le passer au modèle. Chaque famille de modèles a son propre tokenizer (GPT, Claude, Mistral).",
  },
  {
    id: 'context-window',
    term: 'Context window (Fenêtre de contexte)',
    category: 'donnees',
    definition:
      "Quantité maximale de tokens (input + output) qu'un modèle peut traiter en une seule requête. Claude 3.5 Sonnet : 200k tokens. Gemini 1.5 Pro : jusqu'à 2M tokens. GPT-4o : 128k tokens. Détermine la taille des documents analysables.",
  },
  {
    id: 'embedding',
    term: 'Embedding',
    category: 'donnees',
    definition:
      "Représentation numérique vectorielle d'un texte (ou image, audio) capturant son sens sémantique. Deux textes proches en sens auront des embeddings proches mathématiquement. Base technique du RAG et de la recherche sémantique.",
  },
  {
    id: 'vectorisation',
    term: 'Vectorisation',
    category: 'donnees',
    definition:
      "Processus de transformation d'un texte en un vecteur d'embedding. Réalisée par des modèles dédiés (text-embedding-3, voyage-3, Cohere Embed).",
  },
  {
    id: 'vector-database',
    term: 'Vector database',
    category: 'donnees',
    definition:
      "Base de données spécialisée dans le stockage et la recherche de vecteurs d'embeddings. Permet de retrouver rapidement les documents les plus similaires à une requête. Pinecone, Qdrant, Weaviate, pgvector sont les acteurs principaux.",
  },
  {
    id: 'knowledge-base',
    term: 'Base de connaissances',
    category: 'donnees',
    definition:
      "Ensemble structuré de documents privés (PDF, intranet, CRM) accessible à un système IA via RAG. Permet à l'IA de répondre sur le périmètre métier de l'entreprise.",
  },
  {
    id: 'prompt-cache',
    term: 'Prompt caching',
    category: 'donnees',
    definition:
      "Technique permettant de réutiliser le résultat de calcul sur des portions de prompt identiques entre requêtes. Réduit les coûts API jusqu'à 90% sur les usages avec contexte long et stable (système prompt, documentation).",
  },
  {
    id: 'streaming',
    term: 'Streaming',
    category: 'donnees',
    definition:
      "Transmission progressive de la réponse d'un LLM, token par token, au fur et à mesure de la génération. Améliore l'UX (l'utilisateur voit la réponse arriver) sans changer le coût total.",
  },
  {
    id: 'truncation',
    term: 'Truncation',
    category: 'donnees',
    definition:
      "Coupure d'un input ou d'un output qui dépasse la fenêtre de contexte. Risque de perte d'information. Les bonnes architectures gèrent la troncature en priorisant l'information critique.",
  },

  // ═══════════════════ ÉVALUATION & QUALITÉ ═══════════════════
  {
    id: 'hallucination',
    term: 'Hallucination',
    category: 'evaluation',
    definition:
      "Cas où un LLM génère une information factuellement fausse mais formulée avec assurance. Inhérent au fonctionnement statistique des modèles. Atténuée par le RAG, le fine-tuning et la vérification humaine, jamais éliminée à 100%.",
  },
  {
    id: 'biais',
    term: 'Biais (Bias)',
    category: 'evaluation',
    definition:
      "Tendance d'un modèle à refléter des stéréotypes ou inégalités présents dans ses données d'entraînement. Critique en RH, recrutement, octroi de crédit. L'AI Act impose des audits de biais sur les usages à haut risque.",
  },
  {
    id: 'benchmark',
    term: 'Benchmark',
    category: 'evaluation',
    definition:
      "Test standardisé permettant de comparer objectivement les performances de plusieurs modèles sur une même tâche. MMLU (connaissances générales), HumanEval (code), GPQA (raisonnement scientifique) sont les références.",
  },
  {
    id: 'mmlu',
    term: 'MMLU',
    category: 'evaluation',
    definition:
      "Massive Multitask Language Understanding. Benchmark de référence couvrant 57 sujets (math, histoire, droit, médecine). Score humain expert : ~90%. GPT-4o : ~88%. Claude 3.5 Sonnet : ~88%.",
  },
  {
    id: 'eval',
    term: 'Eval',
    category: 'evaluation',
    definition:
      "Méthode d'évaluation continue d'un système IA en production : ensemble de cas de test représentatifs lancés régulièrement pour détecter les régressions de qualité.",
  },
  {
    id: 'temperature',
    term: 'Temperature',
    category: 'evaluation',
    definition:
      "Paramètre contrôlant la variabilité des réponses d'un LLM. 0 = déterministe et factuel, 1 = créatif et varié. Pour les tâches business factuelles : 0.2-0.4. Pour l'idéation créative : 0.7-1.",
  },
  {
    id: 'top-p',
    term: 'Top-p / Top-k',
    category: 'evaluation',
    definition:
      "Paramètres contrôlant la diversité des tokens considérés lors de la génération. Top-p (nucleus sampling) ne considère que les tokens dont la probabilité cumulée atteint p. Plus technique que la temperature, mais offre un contrôle plus fin.",
  },
  {
    id: 'determinisme',
    term: 'Déterminisme',
    category: 'evaluation',
    definition:
      "Capacité d'un système à produire la même sortie pour la même entrée. Les LLM ne sont jamais 100% déterministes (variations même à temperature=0 sur l'infrastructure cloud). Important à anticiper en production.",
  },
  {
    id: 'latence',
    term: 'Latence',
    category: 'evaluation',
    definition:
      "Temps écoulé entre l'envoi d'une requête et la réception de la réponse. Un facteur critique en production. Les modèles \"flash\" (Gemini Flash, Claude Haiku) sont optimisés pour la basse latence.",
  },

  // ═══════════════════ RÉGULATION & SÉCURITÉ ═══════════════════
  {
    id: 'ai-act',
    term: 'AI Act',
    category: 'regulation',
    definition:
      "Règlement européen sur l'IA, entré progressivement en vigueur depuis 2024. Classe les usages de l'IA par niveau de risque et impose des obligations (transparence, audit, gouvernance) aux systèmes à haut risque (RH, crédit, biométrie).",
  },
  {
    id: 'rgpd',
    term: 'RGPD / GDPR',
    category: 'regulation',
    definition:
      "Règlement Général sur la Protection des Données. S'applique à tout traitement de données personnelles, y compris par des outils IA. Implique de cartographier ce qui transite par ChatGPT et consorts, et d'éviter d'y verser des données identifiantes sans accord.",
  },
  {
    id: 'souverainete',
    term: 'Souveraineté numérique',
    category: 'regulation',
    definition:
      "Capacité d'une organisation à maîtriser ses données et infrastructures sans dépendre exclusivement d'acteurs étrangers (notamment américains, soumis au Cloud Act). Argument-clé pour Mistral AI et le self-hosting de Llama.",
  },
  {
    id: 'cnil',
    term: 'CNIL',
    category: 'regulation',
    definition:
      "Commission Nationale de l'Informatique et des Libertés. Autorité française de protection des données. Publie des recommandations spécifiques sur l'usage de l'IA en entreprise.",
  },
  {
    id: 'red-teaming',
    term: 'Red teaming',
    category: 'regulation',
    definition:
      "Pratique consistant à attaquer délibérément un système IA pour identifier ses vulnérabilités avant qu'un acteur malveillant ne le fasse. Anthropic, OpenAI et les labs de pointe ont des équipes dédiées.",
  },
  {
    id: 'constitutional-ai',
    term: 'Constitutional AI',
    category: 'regulation',
    definition:
      "Méthode développée par Anthropic pour aligner les LLM sur un ensemble de principes (\"constitution\") sans dépendre uniquement du feedback humain. Base de l'alignement de Claude.",
  },
  {
    id: 'alignement',
    term: 'Alignement (Alignment)',
    category: 'regulation',
    definition:
      "Discipline visant à s'assurer qu'un système IA poursuit bien les objectifs voulus par ses créateurs et ses utilisateurs, sans effets de bord nuisibles. Domaine de recherche actif.",
  },
  {
    id: 'guardrails',
    term: 'Guardrails (Garde-fous)',
    category: 'regulation',
    definition:
      "Mécanismes techniques empêchant un LLM de produire certains contenus (haineux, illégaux, hors sujet). Implémentés par filtrage en entrée et en sortie. Indispensables pour les chatbots clients.",
  },
  {
    id: 'shadow-ai',
    term: 'Shadow AI',
    category: 'regulation',
    definition:
      "Usage non autorisé d'outils IA grand public (ChatGPT, Claude perso) par les collaborateurs avec des données d'entreprise. Risque majeur de fuite de propriété intellectuelle. À encadrer par une charte IA et des outils licenciés.",
  },

  // ═══════════════════ MULTIMODALITÉ ═══════════════════
  {
    id: 'computer-vision',
    term: 'Computer Vision',
    category: 'multimodal',
    definition:
      "Branche de l'IA dédiée à l'analyse d'images et vidéos : détection d'objets, reconnaissance faciale, OCR, compréhension de scène. Désormais largement intégrée dans les LLM modernes (GPT-4o, Claude 3.5, Gemini).",
  },
  {
    id: 'tts',
    term: 'TTS (Text-to-Speech)',
    category: 'multimodal',
    definition:
      "Synthèse vocale. Conversion d'un texte en parole. ElevenLabs, OpenAI TTS, et les modèles natifs Gemini Live offrent désormais des voix presque indiscernables d'humains.",
  },
  {
    id: 'stt',
    term: 'STT (Speech-to-Text)',
    category: 'multimodal',
    definition:
      "Reconnaissance vocale. Conversion de la parole en texte. Whisper (OpenAI), Deepgram, AssistantAI sont les références. Précision proche du parfait sur le français standard.",
  },
  {
    id: 'ocr',
    term: 'OCR',
    category: 'multimodal',
    definition:
      "Optical Character Recognition. Extraction de texte depuis une image ou un PDF scanné. Les LLM multimodaux modernes intègrent l'OCR nativement (analyser une facture scannée devient trivial).",
  },
  {
    id: 'image-generation',
    term: 'Génération d\'image',
    category: 'multimodal',
    definition:
      "Création d'images à partir de prompts textuels. Midjourney, DALL-E 3, Stable Diffusion, Flux, Imagen sont les principaux modèles. Cas d'usage entreprise : visuels marketing, mockups produit, illustration.",
  },
  {
    id: 'voice-cloning',
    term: 'Voice cloning',
    category: 'multimodal',
    definition:
      "Reproduction synthétique d'une voix humaine à partir d'un échantillon audio court (parfois <1 minute). Risque de fraude (deepfake vocal) ; en entreprise, surtout utilisé pour la voix de marque dans des contenus marketing.",
  },
  {
    id: 'video-generation',
    term: 'Génération vidéo',
    category: 'multimodal',
    definition:
      "Création de vidéos à partir de prompts textuels ou d'images sources. Sora (OpenAI), Veo (Google), Runway, Kling sont les références 2025. Encore coûteux et imparfait, mais qualité en progrès rapide.",
  },
]

export const TOTAL_TERMS = GLOSSARY_TERMS.length
