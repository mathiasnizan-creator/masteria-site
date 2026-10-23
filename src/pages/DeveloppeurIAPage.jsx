import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, BookOpen, Cpu, Database, FlaskConical, Plug, Server, ShieldCheck, Target, MessagesSquare } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Page « Développeur IA » : GUIDE MÉTIER à double tunnel (créée le 23/10/2026).
 * Requête « développeur ia » : intention partagée entre le métier (définition,
 * compétences, salaire, TJM, comment le devenir) et le recrutement (freelance,
 * agence, régie). La page sert les deux :
 *   - « je veux RECRUTER / faire intervenir un développeur IA » → agence et régie Masteria ;
 *   - « je veux DEVENIR développeur IA » → formations techniques Masteria.
 * Thèse propre à la page : en 2026, le développeur IA entraîne rarement un
 * modèle ; il relie un modèle existant aux données et aux logiciels, et passe
 * l'essentiel de son temps sur l'évaluation et la mise en production.
 * Distincte de /agence-developpement-ia (l'agence et son contrat), de
 * /prix-projet-ia (budget d'un projet), de /consultant-ia (profil de conseil)
 * et de /formation-claude-code (coder avec un agent).
 * Chiffres : uniquement sourcés et datés (Silkhom 2026 via Le Monde
 * Informatique, Free-Work relevé le 23/10/2026). Masteria ne publie pas son TJM.
 * Équipe : environ cinq développeurs IA indépendants (EquipeMasteria.jsx).
 * Accent bleu #2563EB.
 */

const SITE = 'https://www.master-ia.fr'
const SLUG = 'developpeur-ia'
const FULL_URL = `${SITE}/${SLUG}`
const c = '#2563EB'
const cLight = '#DBEAFE'
const DATE_PUBLISHED = '2026-10-23'
const DATE_MODIFIED = '2026-10-23'
const RDV_URL = '/contact?type=projet&rdv=30'

const URL_SILKHOM = 'https://www.lemondeinformatique.fr/actualites/lire-salaires-en-forte-hausse-dans-les-donnees-et-l-ia-en-2026-100670.html'
const URL_FREEWORK = 'https://www.free-work.com/fr/tech-it/developpeur-ia-machine-learning/rate-tjm-freelance'
const URL_AI_ACT = 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689'

const META_TITLE = 'Développeur IA : métier, compétences, salaire, TJM | Masteria'
const META_DESC = "Développeur IA : ce qu'il construit, compétences et outils attendus, salaire et TJM 2026 sourcés, comment le devenir et comment en recruter un."
const KEYWORDS = 'développeur ia, développeur intelligence artificielle, développeur en intelligence artificielle, ingénieur ia, ai engineer, développeur llm, développeur ia freelance, recruter un développeur ia, salaire développeur ia, tjm développeur ia, devenir développeur ia, développeur machine learning, mlops, llmops'

/* ── Design system local (aligné sur les pages money) ── */
const SECTION_PAD = 'clamp(64px, 9vw, 110px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const leadStyle = { fontSize: 'clamp(16.5px, 2vw, 18px)', color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }
const mutedStyle = { fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 740 }
const calloutStyle = { background: '#fff', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.75, color: '#0A0A0A', margin: '0 0 14px', maxWidth: 880 }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 28 }
const iconBoxStyle = { width: 44, height: 44, background: cLight, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
const tableWrapStyle = { overflowX: 'auto', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const thStyle = { background: '#F9FAFB', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB', whiteSpace: 'nowrap' }
const srOnlyStyle = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }

const EN_BREF = [
  ['Le métier', "Relier un modèle d'IA aux données et aux logiciels d'une entreprise, puis le faire tenir en production : justesse des réponses, coût par requête, sécurité."],
  ['Profils voisins', 'AI engineer (applications à base de modèles de langage), ML engineer (modèles entraînés sur des données chiffrées), data scientist, MLOps et LLMOps.'],
  ['Compétences', 'Python ou TypeScript, API des modèles, RAG, agents, protocole MCP, jeux de tests, déploiement, RGPD et AI Act.'],
  ['Salaire', "Environ 75 000 € brut par an en MLOps et 85 000 € en LLMOps pour un profil expérimenté, contre 45 000 € pour un développeur Java ou Python (Silkhom, 2026)."],
  ['TJM en freelance', "440 € HT par jour en moyenne en direct ; en Île-de-France, de 207 € la première année à 611 € entre cinq et dix ans d'expérience (Free-Work, octobre 2026)."],
  ['Pour en recruter un', 'Un freelance, une agence au forfait, des développeurs détachés en régie ou un poste interne, selon la durée du besoin et le lieu où vos données doivent rester.'],
]

/* Les quatre métiers que recouvre l'intitulé « développeur IA » */
const PROFILS = [
  { profil: 'Développeur IA applicatif (AI engineer)', builds: "Assistants qui répondent à partir de vos documents, agents qui agissent dans vos logiciels, automatisations appuyées sur un modèle de langage.", tools: 'API Claude, OpenAI, Gemini ou Mistral ; Python, TypeScript ; bases vectorielles', when: 'Vous voulez un outil qui lit vos documents, rédige ou agit dans votre CRM et votre ERP.', highlight: true },
  { profil: 'ML engineer', builds: 'Modèles entraînés sur vos propres données : prévision des ventes, scoring, détection d\'anomalies, vision par ordinateur.', tools: 'PyTorch, scikit-learn, MLflow', when: 'Vous disposez d\'un historique chiffré et cherchez à prédire une valeur.' },
  { profil: 'Data scientist', builds: 'Analyses, modèles statistiques et prototypes qui répondent à une question métier précise.', tools: 'Python, SQL, notebooks', when: 'Vous cherchez d\'abord à comprendre ce que disent vos données.' },
  { profil: 'MLOps ou LLMOps', builds: 'La chaîne qui garde les modèles en service : déploiement, surveillance, versions des modèles et des prompts, maîtrise des coûts.', tools: 'Docker, Kubernetes, outils d\'observabilité', when: 'Plusieurs modèles tournent déjà et doivent rester fiables dans la durée.' },
]

/* Les cinq étapes d'un projet, vues depuis le poste du développeur */
const ETAPES = [
  { icon: Target, title: 'Traduire une tâche en spécification', body: "Avec les personnes qui font le travail, il décrit ce que l'outil reçoit, ce qu'il rend, ce qu'il n'a pas le droit de faire et qui valide. « Un assistant pour les devis » devient une liste d'entrées, de sorties et de cas limites." },
  { icon: Database, title: 'Préparer les données', body: "Pour un assistant qui répond à partir de vos documents, il les nettoie, les découpe, les indexe et garde la trace de leur source. La justesse des réponses dépend davantage de ce travail que du modèle retenu." },
  { icon: Plug, title: 'Construire et brancher', body: "Appels au modèle, prompts versionnés, outils que l'agent peut utiliser, connexions au CRM, à l'ERP ou à la messagerie par API ou par MCP, écran pour les utilisateurs. Le modèle se choisit selon la tâche, le coût par requête et l'endroit où les données doivent rester." },
  { icon: FlaskConical, title: 'Évaluer avant de livrer', body: "Il constitue un jeu de questions dont les bonnes réponses sont connues, mesure les réponses justes, les inventions et les refus, puis rejoue ce jeu à chaque changement de prompt ou de modèle. Sans lui, personne ne peut dire si la version suivante répond mieux." },
  { icon: Server, title: 'Mettre en service et surveiller', body: "Journaux, coût par utilisateur, temps de réponse, alertes, droits d'accès, protection contre les instructions glissées dans un document (l'injection de prompt). Il documente l'ensemble pour que votre équipe puisse reprendre le code." },
]

/* Compétences (jauge à trois niveaux) */
const SKILLS = [
  { fam: 'Développement logiciel', level: 3, detail: 'Python et TypeScript le plus souvent, API REST, bases de données, tests automatisés, gestion de versions avec Git.' },
  { fam: 'Modèles de langage et leurs API', level: 3, detail: "Fonctionnement et limites des modèles, fenêtre de contexte, appel d'outils, sorties structurées, coût au token, arbitrage entre modèles commerciaux (Claude, GPT, Gemini, Mistral) et modèles ouverts hébergés chez soi." },
  { fam: 'Recherche documentaire et agents', level: 3, detail: "RAG, bases vectorielles comme pgvector ou Qdrant, orchestration d'agents, protocole MCP pour brancher un modèle sur d'autres logiciels." },
  { fam: 'Évaluation', level: 2, detail: 'Jeux de tests, mesure des erreurs, comparaison de versions, relecture humaine sur un échantillon de réponses.' },
  { fam: 'Mise en production', level: 2, detail: 'Conteneurs, cloud, surveillance, maîtrise des coûts, sécurité applicative. Le cœur du métier de MLOps et de LLMOps.' },
  { fam: 'Droit et protection des données', level: 2, detail: "RGPD, AI Act, lieu d'hébergement des données, liste de l'OWASP sur les risques propres aux applications de modèles de langage." },
]

/* Salaires et TJM : uniquement des chiffres publiés, avec leur source */
const TARIFS = [
  { profil: 'Développeur Java ou Python, salarié expérimenté', montant: '≈ 45 000 € brut / an', note: 'Point de comparaison, en léger recul selon Silkhom.', source: 'Silkhom 2026' },
  { profil: 'MLOps, salarié expérimenté', montant: '≈ 75 000 € brut / an', note: 'Mise en production et surveillance des modèles.', source: 'Silkhom 2026' },
  { profil: 'LLMOps, salarié expérimenté', montant: '≈ 85 000 € brut / an', note: 'La même chose appliquée aux modèles de langage, profil plus rare.', source: 'Silkhom 2026' },
  { profil: 'Freelance, moyenne nationale', montant: '440 € HT / jour', note: '421 € HT quand la mission passe par un intermédiaire.', source: 'Free-Work, oct. 2026', highlight: true },
  { profil: 'Freelance en Île-de-France, moins d\'un an', montant: '207 € HT / jour', note: 'Premier contrat, souvent après une formation.', source: 'Free-Work, oct. 2026' },
  { profil: 'Freelance en Île-de-France, 3 à 4 ans', montant: '459 € HT / jour', note: 'Autres villes : 400 € HT.', source: 'Free-Work, oct. 2026' },
  { profil: 'Freelance en Île-de-France, 5 à 10 ans', montant: '611 € HT / jour', note: 'Autres villes : 550 € HT.', source: 'Free-Work, oct. 2026' },
]

/* Quatre façons de faire travailler un développeur IA */
const HIRE = [
  { voie: 'Freelance', cout: 'Au taux journalier', force: 'Souplesse, démarrage rapide', limite: 'Un seul profil ; la continuité et la reprise du code sont à organiser', when: 'Un prototype, un connecteur, un renfort de quelques semaines.' },
  { voie: 'Agence de développement IA, au forfait', cout: 'Prix global fixé après cadrage', force: 'Une équipe qui couvre cadrage, code et formation, engagée sur un livrable', limite: 'Le périmètre se fixe avant de démarrer', when: 'Un outil à livrer de bout en bout, avec un budget connu à l\'avance.', highlight: true },
  { voie: 'Développeurs détachés en régie', cout: 'Au taux journalier, sur site ou à distance', force: 'Le développeur travaille dans vos systèmes, au rythme de vos priorités', limite: 'Vous pilotez le travail au quotidien', when: 'Des données qui ne quittent pas vos locaux, une feuille de route qui bouge.', highlight: true },
  { voie: 'Poste interne', cout: 'Salaire et charges', force: 'Présence continue, connaissance fine de la maison', limite: 'Recrutement long sur un profil rare', when: 'Plusieurs projets IA en continu, sans date de fin.' },
]

/* Questions d'entretien : ce qu'une bonne réponse contient */
const QUESTIONS = [
  { q: '« Comment saurez-vous que la version 2 répond mieux que la version 1 ? »', a: "Une bonne réponse parle d'un jeu de tests et d'une mesure. Une impression après quelques essais ne suffit pas." },
  { q: '« Combien coûtera une requête, puis le mois à 500 utilisateurs ? »', a: 'Un ordre de grandeur, et les leviers pour le baisser : modèle plus petit sur les tâches simples, cache, contexte résumé.' },
  { q: '« Que se passe-t-il si un document contient une instruction cachée ? »', a: "Une explication claire de l'injection de prompt et des droits limités accordés à l'agent." },
  { q: '« À la fin du projet, qu\'est-ce qui nous appartient ? »', a: 'Le code, les prompts, les jeux de tests et la documentation, avec de quoi changer de prestataire sans repartir de zéro.' },
]

/* ── Repères citables (GEO) ── */
const MARKET_STATS = [
  { value: '+56 %', label: "À poste équivalent, un professionnel qui maîtrise l'IA gagne en moyenne 56 % de plus que ses pairs, un écart qui a plus que doublé en un an.", source: 'Silkhom, baromètre 2026, cité par Le Monde Informatique (juillet 2026)', url: URL_SILKHOM },
  { value: '440 € HT', label: "TJM moyen d'un développeur IA ou machine learning en freelance, facturé en direct. La moyenne descend à 421 € HT via un intermédiaire.", source: 'Free-Work, relevé du 23 octobre 2026', url: URL_FREEWORK },
  { value: '2 août 2026', label: "Les personnes qui échangent avec un assistant ou un agent doivent savoir qu'elles parlent à une IA (article 50 de l'AI Act). Le développeur le prévoit dès la conception.", source: 'Règlement (UE) 2024/1689', url: URL_AI_ACT },
]

const GLOSSARY = [
  { term: 'RAG (génération augmentée par récupération)', def: "Technique qui fait chercher au modèle les passages utiles dans vos documents avant qu'il réponde, et lui fait citer ses sources." },
  { term: 'Agent IA', def: 'Programme qui confie à un modèle de langage le choix des actions à mener (chercher, calculer, écrire dans un logiciel) pour atteindre un objectif, dans des limites fixées par le développeur.' },
  { term: 'MCP (Model Context Protocol)', def: "Standard ouvert, publié par Anthropic fin 2024, qui permet de brancher un assistant sur des logiciels et des sources de données sans écrire un connecteur différent pour chaque modèle." },
  { term: 'Évaluation (evals)', def: "Jeu de questions aux réponses connues, rejoué à chaque modification pour mesurer la justesse d'une application d'IA." },
  { term: 'Fine-tuning', def: "Réentraînement partiel d'un modèle sur des exemples propres à l'entreprise. Plus coûteux que le RAG, il sert surtout à fixer un style ou un format de sortie." },
  { term: 'LLMOps', def: 'Pratiques et outils qui gardent une application de modèle de langage fiable en production : versions des prompts, surveillance, coûts, alertes.' },
]

const SOURCES = [
  { name: 'Le Monde Informatique, « Salaires en forte hausse dans les data et l\'IA en 2026 »', note: 'les salaires du baromètre Silkhom 2026 par métier de l\'IA (juillet 2026).', url: URL_SILKHOM },
  { name: 'Free-Work, TJM du développeur IA et machine learning', note: 'les taux journaliers déclarés par des freelances, par expérience et par région.', url: URL_FREEWORK },
  { name: 'OWASP, Top 10 des risques des applications de LLM', note: "la liste de référence des failles propres aux assistants et aux agents, dont l'injection de prompt.", url: 'https://genai.owasp.org/llm-top-10/' },
  { name: "L'AI Act (règlement 2024/1689) sur EUR-Lex", note: 'les obligations de transparence et de maîtrise de l\'IA qui pèsent sur ce que le développeur livre.', url: URL_AI_ACT },
  { name: 'France Compétences, répertoire national des certifications', note: 'pour vérifier un titre de développeur en intelligence artificielle avant de s\'inscrire.', url: 'https://www.francecompetences.fr/recherche_certificationprofessionnelle/' },
  { name: "La CNIL et l'intelligence artificielle", note: 'les recommandations françaises pour développer un système d\'IA qui traite des données personnelles.', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
]

const FAQ = [
  {
    q: "Qu'est-ce qu'un développeur IA ?",
    a: "Un développeur IA, ou développeur en intelligence artificielle, conçoit des logiciels dont un modèle d'IA est un composant : assistant qui répond à partir des documents d'une entreprise, agent qui agit dans ses outils, automatisation, modèle de prévision. En 2026, il entraîne rarement un modèle lui-même. Il choisit un modèle existant, le relie aux données et aux logiciels, mesure la justesse des réponses et assure la mise en production.",
  },
  {
    q: 'Quelle différence entre développeur IA, ingénieur IA et data scientist ?',
    a: "« Développeur IA » et « ingénieur IA » (AI engineer) désignent le plus souvent le même poste : construire des applications appuyées sur des modèles de langage. Le ML engineer entraîne des modèles sur des données chiffrées, pour prévoir ou classer. Le data scientist analyse les données et répond à des questions métier. Le MLOps ou le LLMOps garde les modèles en service. Lisez toujours les missions d'une annonce plutôt que son titre.",
  },
  {
    q: "Quel est le salaire d'un développeur IA en France ?",
    a: "Le baromètre Silkhom 2026 place un profil expérimenté autour de 75 000 € brut par an en MLOps et de 85 000 € en LLMOps, quand un développeur Java ou Python tourne autour de 45 000 €. Le même baromètre relève qu'à poste équivalent, la maîtrise de l'IA rapporte en moyenne 56 % de plus. Les débuts de carrière se situent nettement plus bas ; l'expérience, la région et le secteur font varier ces montants.",
  },
  {
    q: 'Quel TJM pour un développeur IA freelance ?',
    a: "Free-Work relève en octobre 2026 un taux journalier moyen de 440 € HT en direct et de 421 € HT via un intermédiaire. En Île-de-France, il passe de 207 € HT la première année à 459 € HT entre trois et quatre ans d'expérience, puis à 611 € HT entre cinq et dix ans. Les spécialistes rares de la mise en production dépassent ces moyennes.",
  },
  {
    q: 'Quel langage apprendre pour devenir développeur IA ?',
    a: "Python d'abord : la plupart des bibliothèques d'IA et des kits des fournisseurs de modèles le prennent en charge en premier. TypeScript ensuite, très utilisé pour les applications web et les agents qui tournent côté serveur. SQL reste indispensable dès qu'il faut lire des données d'entreprise.",
  },
  {
    q: 'Faut-il savoir entraîner un modèle pour être développeur IA ?',
    a: "Pour un poste de développeur IA applicatif, non : le travail consiste à utiliser des modèles existants par leur API et à les relier aux données. Comprendre comment un modèle a été entraîné aide à anticiper ses erreurs. L'entraînement devient le cœur du métier pour un ML engineer, qui construit des modèles de prévision ou de classement sur des données chiffrées.",
  },
  {
    q: 'Comment devenir développeur IA en reconversion ?',
    a: "Des titres professionnels de niveau bac+3 à bac+5 préparent au métier, en alternance ou en formation continue ; vérifiez chacun dans le répertoire de France Compétences. Comptez plusieurs mois de formation, puis un premier poste junior. Ce qui fait la différence à l'embauche : deux ou trois projets publiés, chacun avec son jeu de tests et une page qui explique les choix faits.",
  },
  {
    q: "L'IA va-t-elle remplacer les développeurs ?",
    a: "Elle change leur travail. Les assistants de code comme Claude Code, GitHub Copilot ou Cursor écrivent une part croissante du code courant, et Silkhom observe un léger recul des salaires des développeurs Java et Python. La demande se déplace vers ce que ces assistants ne font pas seuls : comprendre un besoin, concevoir un système, vérifier, sécuriser, mettre en production. Le développeur IA se trouve précisément sur ce terrain.",
  },
  {
    q: "Combien coûte un développeur IA pour un projet d'entreprise ?",
    a: "Au taux journalier, comptez les moyennes du marché : autour de 440 € HT pour un freelance selon Free-Work, davantage pour une agence ou une ESN, dont le prix inclut le pilotage, la continuité et les garanties. Au forfait, le prix dépend du livrable : un prototype coûte bien moins qu'un agent branché sur plusieurs logiciels. Notre page sur le prix d'un projet IA donne les ordres de grandeur par type d'outil.",
  },
  {
    q: 'Freelance ou agence : qui choisir pour développer un outil IA ?',
    a: "Un freelance convient à une tâche bornée : un prototype, un connecteur, quelques semaines de renfort. Une agence convient quand l'outil doit être cadré, construit, testé, déployé et pris en main par vos équipes, avec un interlocuteur qui répond de l'ensemble. Dans les deux cas, exigez que le code, les prompts et la documentation vous soient remis.",
  },
  {
    q: "Un développeur IA peut-il travailler sans que nos données sortent de l'entreprise ?",
    a: "Oui. Le développeur peut être détaché dans vos locaux et travailler sur vos serveurs. Côté modèle, plusieurs options existent : offres d'entreprise des grands fournisseurs hébergées en Europe, sans réutilisation de vos données pour l'entraînement, ou modèle ouvert installé sur votre propre infrastructure. Le choix se fait au cadrage, selon la sensibilité des données.",
  },
  {
    q: 'Masteria met-il des développeurs IA à disposition ?',
    a: "Oui. Masteria s'appuie sur environ cinq développeurs IA indépendants, choisis selon le projet et pilotés par Mathias Nizan. Ils interviennent au forfait, quand Masteria livre un outil complet, ou en régie, détachés dans vos équipes sur site ou à distance. Le développement n'est pas finançable par l'OPCO, contrairement à la formation. Le premier échange dure 30 minutes et ne vous engage pas.",
  },
]

/* ───────── JSON-LD ───────── */

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Vocabulaire du métier de développeur IA',
  hasDefinedTerm: GLOSSARY.map(g => ({ '@type': 'DefinedTerm', name: g.term, description: g.def })),
}

const occupationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Occupation',
  '@id': `${FULL_URL}#occupation`,
  name: 'Développeur IA',
  alternateName: ['Développeur en intelligence artificielle', 'Ingénieur IA', 'AI engineer', 'Développeur LLM'],
  description: "Professionnel qui conçoit des logiciels dont un modèle d'intelligence artificielle est un composant : il relie un modèle aux données et aux logiciels d'une entreprise, mesure la justesse des réponses et assure la mise en production.",
  occupationalCategory: '2512 Concepteurs et analystes de logiciels (CITP-08)',
  skills: SKILLS.map(s => `${s.fam} : ${s.detail}`).join(' '),
  occupationLocation: { '@type': 'Country', name: 'France' },
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${FULL_URL}#service`,
  name: 'Développeurs IA au forfait ou en régie',
  serviceType: 'Développement de logiciels d\'intelligence artificielle',
  provider: { '@id': `${SITE}/#organization` },
  areaServed: ['France', 'Europe', 'États-Unis', 'Inde'],
  description: "Développeurs IA indépendants pilotés par Masteria : outils livrés au forfait après cadrage, ou développeurs détachés en régie dans les équipes du client, sur site ou à distance. Code et documentation remis au client.",
  url: FULL_URL,
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${FULL_URL}#article`,
  headline: "Développeur IA : ce qu'il construit, ce qu'il sait faire et ce qu'il coûte en 2026",
  description: META_DESC,
  author: { '@id': `${SITE}/#mathias-nizan` },
  editor: { '@id': `${SITE}/#mathias-nizan` },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': `${FULL_URL}#webpage` },
  about: [{ '@id': `${FULL_URL}#occupation` }, 'Développement d\'applications d\'IA', 'Recrutement de développeurs IA'],
  mentions: ['RAG', 'Model Context Protocol', 'LLMOps', 'MLOps', 'AI Act', 'OWASP Top 10 for LLM Applications'],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#definition', 'h2'] },
  citation: SOURCES.map(s => s.url),
}

function Meter({ level, label }) {
  return (
    <span role="img" aria-label={`${label} : ${level === 3 ? 'mobilisée chaque jour' : 'selon les projets'}`} style={{ display: 'inline-flex', gap: 4 }}>
      {[1, 2, 3].map(i => (
        <span key={i} aria-hidden="true" style={{ width: 9, height: 9, borderRadius: '50%', background: i <= level ? c : '#D1D5DB', display: 'inline-block' }} />
      ))}
    </span>
  )
}

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {/* Réponse toujours dans le DOM (prérendu citable), repliée en CSS */}
      <div aria-hidden={!open} style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

function SectionHeader({ icon: Icon, kicker, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 18 }}>
      <div style={{ ...iconBoxStyle, marginTop: 4 }}>
        <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
      </div>
      <div>
        <div style={{ ...kickerStyle, marginBottom: 8 }}>{kicker}</div>
        <h2 style={{ ...h2Style, margin: 0 }}>{title}</h2>
      </div>
    </div>
  )
}

export default function DeveloppeurIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop ? { position: 'sticky', top: 130, alignSelf: 'start' } : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Développement IA', slug: 'agence-developpement-ia' },
    { name: 'Développeur IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        citations={SOURCES.map(s => ({ name: s.name, url: s.url }))}
        author
        extraJsonLd={[occupationJsonLd, serviceJsonLd, definedTermSetJsonLd, articleJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#94A3B8', display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/agence-developpement-ia" style={{ color: '#94A3B8' }}>Développement IA</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }} aria-current="page">Développeur IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Cpu size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Fiche métier · octobre 2026
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.7vw, 48px)', fontWeight: 900, lineHeight: 1.06, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 860 }}>
            Développeur IA
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>ce qu'il construit, ce qu'il sait faire et ce qu'il coûte en 2026</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Fiche rédigée par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, qui pilote les développeurs IA de Masteria · mise à jour le 23 octobre 2026
          </p>

          {/* GEO : réponse directe citable, définition */}
          <p id="definition" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 26px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>Un développeur IA conçoit des logiciels dont un modèle d'intelligence artificielle est un composant</strong> : assistants branchés sur les documents d'une entreprise, agents qui agissent dans ses outils, automatisations, modèles de prévision. En 2026, il entraîne rarement un modèle ; il en choisit un, le relie aux données et aux logiciels, mesure la justesse des réponses et le fait tenir en production.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 34px', maxWidth: 680 }}>
            Cette fiche sert deux lecteurs : l'entreprise qui cherche à recruter un développeur IA ou à en faire intervenir un, et la personne qui veut exercer ce métier. Chaque montant cité vient d'une source publiée, avec sa date.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
            <a href="#recruter" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Recruter un développeur IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <a href="#devenir" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Devenir développeur IA
            </a>
          </div>

          {/* En bref (GEO) : dl citable */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 14, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 760 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 16 }}>En bref</div>
            <dl style={{ margin: 0, display: 'grid', gap: 14 }}>
              {EN_BREF.map(([k, v], i) => (
                <div key={k} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 800, color: '#E2E8F0', marginBottom: 4 }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ancré ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9CA3AF', paddingRight: 8, flexShrink: 0 }}>Sur cette page</span>
          {[
            ['#profils', 'Profils'],
            ['#travail', 'Le travail'],
            ['#competences', 'Compétences'],
            ['#salaire', 'Salaire et TJM'],
            ['#recruter', 'Recruter'],
            ['#devenir', 'Devenir développeur IA'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#374151', textDecoration: 'none', padding: '13px 12px', flexShrink: 0 }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── PROFILS : quatre métiers derrière un intitulé ── */}
      <section id="profils" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Un intitulé, quatre métiers</div>
          <h2 style={h2Style}>Développeur IA, AI engineer, ML engineer : qui fait quoi ?</h2>
          <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
            <strong>Le titre « développeur IA » recouvre des métiers différents d'une annonce à l'autre.</strong>{' '}
            Depuis l'arrivée des modèles de langage accessibles par API, la plus forte demande des entreprises porte sur le premier profil du tableau : celui qui construit des applications avec un modèle existant, sans l'entraîner.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Avant de publier une offre ou de signer un devis, repérez lequel des quatre correspond à votre besoin : leurs outils, leurs tarifs et leurs délais diffèrent.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 880 }}>
              <caption style={srOnlyStyle}>Les quatre profils regroupés sous l'intitulé développeur IA : ce qu'ils construisent, leurs outils et le besoin auquel ils répondent</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Profil</th>
                  <th scope="col" style={thStyle}>Ce qu'il construit</th>
                  <th scope="col" style={thStyle}>Outils typiques</th>
                  <th scope="col" style={thStyle}>Faites appel à lui si…</th>
                </tr>
              </thead>
              <tbody>
                {PROFILS.map((p, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={p.profil} style={p.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: p.highlight ? c : '#0A0A0A', textAlign: 'left', minWidth: 180 }}>
                        {p.profil}
                        {p.highlight && (
                          <span style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Le profil de nos développeurs
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, minWidth: 240 }}>{p.builds}</td>
                      <td style={{ ...td, minWidth: 170 }}>{p.tools}</td>
                      <td style={{ ...td, minWidth: 200 }}>{p.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            <strong>Une confusion fréquente :</strong> tout développeur se sert désormais d'assistants de code comme Claude Code, GitHub Copilot ou Cursor. Ces outils accélèrent son travail sans changer son métier ; on parle de développeur IA quand l'IA fait partie du logiciel livré. Pour apprendre à coder avec un agent, voyez notre{' '}
            <Link to="/formation-claude-code" style={{ color: c, fontWeight: 600 }}>formation Claude Code</Link>, ou la{' '}
            <Link to="/formation-vibe-coding" style={{ color: c, fontWeight: 600 }}>formation au vibe coding</Link> si vous ne codez pas.
          </p>
        </div>
      </section>

      {/* ── LE TRAVAIL : cinq étapes d'un projet ── */}
      <section id="travail" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Le travail au quotidien</div>
          <h2 style={h2Style}>Que fait un développeur IA dans un projet ?</h2>
          <p style={leadStyle}>
            L'appel au modèle tient en quelques lignes de code. Le métier se joue autour : les données qu'on lui confie, les outils qu'il a le droit d'utiliser, les tests qui disent s'il répond juste, la surveillance une fois l'outil en service.
          </p>
          <p style={mutedStyle}>
            Les cinq étapes suivent l'ordre d'un projet, du premier échange avec les utilisateurs à la mise en service.
          </p>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
            {ETAPES.map((e, i) => {
              const Icon = e.icon
              return (
                <li key={e.title} style={{ ...cardStyle, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={21} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                    </div>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: c }}>{`Étape ${i + 1}`}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(16.5px, 2vw, 19px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{e.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{e.body}</p>
                </li>
              )
            })}
          </ol>

          <p style={{ fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, margin: '32px 0 0', maxWidth: 820, fontStyle: 'italic' }}>
            « Sur nos projets, le premier jeu de tests demande souvent plus de travail que le premier prompt. C'est lui qui permet ensuite de changer de modèle sans crainte. »{' '}
            <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600, fontStyle: 'normal' }}>Mathias Nizan</Link>, fondateur de Masteria
          </p>
        </div>
      </section>

      {/* ── COMPÉTENCES (tableau à jauges) ── */}
      <section id="competences" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>Compétences et technologies</div>
          <h2 style={h2Style}>Les compétences d'un développeur IA en 2026</h2>
          <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
            <strong>Un développeur IA est d'abord un bon développeur.</strong>{' '}
            Les recruteurs cherchent un socle logiciel solide (code lisible, tests, bases de données, API), auquel s'ajoutent les briques propres à l'IA : modèles, recherche documentaire, agents, évaluation.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Trois points : une compétence mobilisée chaque jour par un développeur IA applicatif. Deux points : une compétence importante, dont le poids varie selon les projets.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
              <caption style={srOnlyStyle}>Les six familles de compétences d'un développeur IA, leur poids au quotidien et leur contenu</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Famille</th>
                  <th scope="col" style={{ ...thStyle, textAlign: 'center' }}>Poids au quotidien</th>
                  <th scope="col" style={thStyle}>Ce qu'elle recouvre</th>
                </tr>
              </thead>
              <tbody>
                {SKILLS.map((s, i) => {
                  const td = { padding: '18px', verticalAlign: 'middle', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={s.fam}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#0A0A0A', textAlign: 'left', minWidth: 200 }}>{s.fam}</th>
                      <td style={{ ...td, textAlign: 'center' }}><Meter level={s.level} label={s.fam} /></td>
                      <td style={{ ...td, fontSize: 13.5, color: '#374151', lineHeight: 1.65, minWidth: 300 }}>{s.detail}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SALAIRE ET TJM (ancre sombre) ── */}
      <section id="salaire" style={{ scrollMarginTop: 96, position: 'relative', padding: SECTION_PAD, background: '#0A0F1E', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Rémunération 2026</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC' }}>Salaire et TJM d'un développeur IA en 2026</h2>
          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 14px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Selon le baromètre Silkhom 2026, un profil expérimenté gagne environ 75 000 € brut par an en MLOps et 85 000 € en LLMOps, contre 45 000 € pour un développeur Java ou Python. En freelance, Free-Work relève un TJM moyen de 440 € HT pour un développeur IA ou machine learning.</strong>
          </p>
          <p style={{ fontSize: 15, color: '#B4C0D3', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Ce sont des moyennes publiées par un cabinet de recrutement et par une plateforme de missions. Les graphiques de Silkhom portent sur des profils de plus de sept ans d'expérience ; les débuts de carrière se situent plus bas, et la région comme le secteur déplacent les montants.
          </p>

          <div style={{ border: '1px solid #1E293B', borderRadius: 16, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <caption style={srOnlyStyle}>Salaires et taux journaliers publiés en 2026 pour les développeurs IA en France, avec leur source</caption>
              <thead>
                <tr>
                  {['Situation', 'Montant', 'À savoir', 'Source'].map(h => (
                    <th key={h} scope="col" style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left', padding: '14px 18px', fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #1E293B', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TARIFS.map((t, i) => {
                  const td = { padding: '14px 18px', verticalAlign: 'top', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }
                  return (
                    <tr key={t.profil} style={t.highlight ? { background: 'rgba(37,99,235,0.1)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: '#F8FAFC', textAlign: 'left', minWidth: 220, lineHeight: 1.5 }}>{t.profil}</th>
                      <td style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14.5, color: '#60A5FA', whiteSpace: 'nowrap' }}>{t.montant}</td>
                      <td style={{ ...td, fontSize: 13.5, color: '#B4C0D3', lineHeight: 1.65, minWidth: 220 }}>{t.note}</td>
                      <td style={{ ...td, fontSize: 12.5, color: '#94A3B8', whiteSpace: 'nowrap' }}>
                        <a href={t.source.startsWith('Silkhom') ? URL_SILKHOM : URL_FREEWORK} target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD', textDecoration: 'underline', textUnderlineOffset: 2 }}>{t.source}</a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.75, margin: '28px 0 0', maxWidth: 880 }}>
            Une agence ou une ESN facture la journée plus cher qu'un freelance : son prix couvre le pilotage, la continuité en cas d'absence, les garanties et le travail de conception autour du code. Pour estimer le budget d'un outil complet plutôt qu'un taux journalier, lisez notre page sur le{' '}
            <Link to="/prix-projet-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>prix d'un projet IA</Link>.
          </p>
        </div>
      </section>

      {/* ── RECRUTER : quatre voies + questions d'entretien ── */}
      <section id="recruter" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={kickerStyle}>Recruter un développeur IA</div>
          <h2 style={h2Style}>Freelance, agence, régie ou poste interne : comment recruter un développeur IA</h2>
          <p style={{ ...calloutStyle, background: '#F9FAFB' }}>
            <strong>Deux questions tranchent le plus souvent : combien de temps durera le besoin, et vos données peuvent-elles sortir de vos murs ?</strong>{' '}
            Un besoin de quelques semaines appelle un freelance ; un outil à livrer de bout en bout, une agence ; des données qui restent chez vous et des priorités mouvantes, des développeurs détachés en régie.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 760 }}>
            Le poste interne se justifie quand les projets d'IA s'enchaînent sans date de fin ; le profil reste rare et long à recruter.
          </p>

          <div style={tableWrapStyle}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 900 }}>
              <caption style={srOnlyStyle}>Quatre façons de faire travailler un développeur IA, comparées sur la facturation, l'atout, la limite et le besoin type</caption>
              <thead>
                <tr>
                  <th scope="col" style={thStyle}>Voie</th>
                  <th scope="col" style={thStyle}>Facturation</th>
                  <th scope="col" style={thStyle}>Atout</th>
                  <th scope="col" style={thStyle}>Limite</th>
                  <th scope="col" style={thStyle}>Besoin type</th>
                </tr>
              </thead>
              <tbody>
                {HIRE.map((h, i) => {
                  const td = { padding: '16px 18px', verticalAlign: 'top', fontSize: 13.5, color: '#374151', lineHeight: 1.6, borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }
                  return (
                    <tr key={h.voie} style={h.highlight ? { background: 'rgba(37,99,235,0.06)' } : undefined}>
                      <th scope="row" style={{ ...td, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, color: h.highlight ? c : '#0A0A0A', textAlign: 'left', minWidth: 170, lineHeight: 1.5 }}>
                        {h.voie}
                        {h.highlight && (
                          <span style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: 6, background: c, color: '#fff', borderRadius: 99, padding: '4px 10px', fontSize: 11.5, fontWeight: 800, marginTop: 10, whiteSpace: 'nowrap' }}>
                            <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                            Proposé par Masteria
                          </span>
                        )}
                      </th>
                      <td style={{ ...td, minWidth: 150 }}>{h.cout}</td>
                      <td style={{ ...td, minWidth: 190 }}>{h.force}</td>
                      <td style={{ ...td, minWidth: 170 }}>{h.limite}</td>
                      <td style={{ ...td, minWidth: 200 }}>{h.when}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div style={{ ...editorialGrid, marginTop: 'clamp(48px, 7vw, 72px)' }}>
            <div style={editorialAside}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={iconBoxStyle}>
                  <MessagesSquare size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <div style={{ ...kickerStyle, margin: 0 }}>En entretien</div>
              </div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Quatre questions qui révèlent un développeur IA expérimenté</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Une démonstration réussie ne dit rien de la tenue en production. Ces questions valent pour un candidat, un freelance comme une agence.
              </p>
            </div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
              {QUESTIONS.map((x, i) => (
                <li key={x.q} style={{ ...cardStyle, padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: '50%', background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                  <div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', marginBottom: 6, lineHeight: 1.45 }}>{x.q}</div>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{x.a}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, margin: '40px 0 0', maxWidth: 880 }}>
            <strong>Masteria</strong> travaille dans les deux formats du milieu : au forfait, comme{' '}
            <Link to="/agence-developpement-ia" style={{ color: c, fontWeight: 600 }}>agence de développement IA</Link>, ou en régie, avec des développeurs détachés dans vos équipes. Le code et sa documentation vous sont remis. Les{' '}
            <Link to="/outils-ia-sur-mesure" style={{ color: c, fontWeight: 600 }}>outils IA sur mesure</Link> que nous livrons et notre{' '}
            <Link to="/methode-projet-ia" style={{ color: c, fontWeight: 600 }}>méthode de projet IA</Link> détaillent la suite. Si votre besoin relève du choix des usages plus que du code, la fiche{' '}
            <Link to="/consultant-ia" style={{ color: c, fontWeight: 600 }}>consultant IA</Link> vous concerne davantage.
          </p>
        </div>
      </section>

      {/* ── DEVENIR DÉVELOPPEUR IA (tunnel formation) ── */}
      <section id="devenir" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>Devenir développeur IA</div>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>Comment devenir développeur IA</h2>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Trois chemins mènent au métier. Tous passent par des projets montrés, que les recruteurs regardent avant le diplôme.
              </p>
            </div>
            <div>
              <div style={{ ...cardStyle, padding: 32, borderTop: `3px solid ${c}` }}>
                <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 18 }}>
                  {[
                    ['Depuis le développement logiciel', "Le chemin le plus court. Il reste à apprendre les API des modèles, le RAG, les agents et surtout l'évaluation. Un développeur web qui livre un premier assistant, mesuré sur un vrai jeu de tests, a déjà fait la moitié du chemin."],
                    ['Depuis la data', "Data analysts et data scientists connaissent les données et les statistiques. Il leur manque souvent l'ingénierie logicielle : tests, déploiement, code que d'autres devront maintenir."],
                    ['En reconversion', "Des titres professionnels de niveau bac+3 à bac+5 sont inscrits au répertoire national des certifications, accessibles en alternance ou en formation continue. Comptez plusieurs mois de formation, puis un premier poste junior, et vérifiez chaque titre auprès de France Compétences."],
                  ].map(([t, d], i) => (
                    <li key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: '50%', background: c, color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                      <div>
                        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 4px' }}>{t}</h3>
                        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div style={{ background: '#F9FAFB', borderLeft: `3px solid ${c}`, borderRadius: '0 10px 10px 0', padding: '16px 20px' }}>
                  <p style={{ fontSize: 14.5, color: '#0A0A0A', lineHeight: 1.7, margin: 0 }}>
                    <BadgeCheck size={15} strokeWidth={2.4} style={{ color: c, verticalAlign: '-2px', marginRight: 6 }} aria-hidden="true" />
                    <strong>Pour les développeurs déjà en poste :</strong> nos formations certifiées Qualiopi ajoutent les briques d'IA à un socle technique existant.{' '}
                    <Link to="/formation-claude-code" style={{ color: c, fontWeight: 600 }}>Claude Code</Link> pour coder avec un agent,{' '}
                    <Link to="/formation-agents-ia" style={{ color: c, fontWeight: 600 }}>agents IA</Link> pour en concevoir,{' '}
                    <Link to="/formation-n8n" style={{ color: c, fontWeight: 600 }}>n8n</Link> pour les automatisations. Elles complètent un parcours diplômant sans le remplacer. La journée démarre à 1 980 € HT ; pour un salarié, l'OPCO de la branche étudie la prise en charge selon ses propres règles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REPÈRES citables (GEO) + vocabulaire ── */}
      <section style={{ padding: SECTION_PAD, background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeader icon={BookOpen} kicker="Repères" title="Trois chiffres datés sur le marché des développeurs IA" />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: '0 0 14px', maxWidth: 780 }}>
            La maîtrise de l'IA se paie, les freelances publient leurs taux, et le droit européen pèse déjà sur la conception des outils. Le vocabulaire qui suit revient dans chaque fiche de poste.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20, margin: '36px 0 44px' }}>
            {MARKET_STATS.map(s => (
              <div key={s.value} style={cardStyle}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: c, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, color: c, textDecoration: 'underline', textUnderlineOffset: 2 }}>Source : {s.source}</a>
              </div>
            ))}
          </div>

          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={{ ...kickerStyle, marginBottom: 10 }}>Vocabulaire</div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 14px', letterSpacing: '-0.01em' }}>Six termes du métier de développeur IA</h3>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                Utiles pour lire une annonce, un devis ou une architecture. Le <Link to="/glossaire-ia" style={{ color: c, fontWeight: 600 }}>glossaire de l'IA</Link> en définit d'autres.
              </p>
            </div>
            <div>
              <dl style={{ margin: 0, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, overflow: 'hidden' }}>
                {GLOSSARY.map((g, i) => (
                  <div key={g.term} style={{ padding: '20px 24px', borderTop: i === 0 ? 'none' : '1px solid #E5E7EB' }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{g.term}</dt>
                    <dd style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.7 }}>{g.def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ scrollMarginTop: 96, padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <div style={kickerStyle}>FAQ</div>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Douze questions sur le métier de développeur IA</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>Votre projet ou votre parcours soulève une autre question ?</p>
              <Link to="/contact" style={{ color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, textDecoration: 'none' }}>
                Écrivez-nous
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
            <div>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} color={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE DOUBLE (faire construire / se former) ── */}
      <section style={{ background: '#fff', padding: SECTION_PAD }}>
        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Votre projet</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Un outil d'IA à construire, ou une équipe à faire monter en compétence
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
              Décrivez la tâche que vous voulez confier à l'IA et l'endroit où vos données doivent rester. En 30 minutes, nous vous disons si un forfait, une régie ou une formation de vos développeurs répond le mieux.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              <Link to={RDV_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 30px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>
                Réserver 30 minutes de cadrage
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link to="/formation-agents-ia" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1px solid #2A3650' }}>
                Former vos développeurs
              </Link>
            </div>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Échange en visio, créneau proposé sous 24 heures · Développement au forfait ou en régie, non finançable par l'OPCO
            </p>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : nos développeurs ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Nos développeurs IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 900, color: '#F8FAFC', margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
              Des développeurs indépendants, retenus pour chaque projet, sous la responsabilité du fondateur
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Ils construisent des agents, des assistants branchés sur les documents de l'entreprise, des automatisations et des intégrations au CRM et à l'ERP. Mathias Nizan les choisit selon la technologie et le secteur, et répond du résultat devant vous. Quand le projet le demande, un consultant cadre les usages et un formateur prépare vos équipes à prendre l'outil en main. Nos <Link to="/etudes-de-cas-ia" style={{ color: '#93C5FD', fontWeight: 600 }}>missions documentées</Link> en donnent un aperçu.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
            {[
              ['≈ 5', 'développeurs IA indépendants'],
              ['Forfait ou régie', 'sur site ou à distance'],
              ['Code remis', 'avec sa documentation'],
              ['Lyon, 2022', 'France · Europe · États-Unis · Inde'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCES ── */}
      <section aria-labelledby="sources-developpeur-ia" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-developpeur-ia" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Sources et lectures utiles
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.6, margin: '0 0 20px' }}>
            Les chiffres de cette fiche, et les références qu'un développeur IA comme une entreprise qui recrute gagne à connaître. Taux Free-Work relevés le 23 octobre 2026.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            {SOURCES.map(s => (
              <li key={s.url} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 15, lineHeight: 1.6 }}>
                <ShieldCheck size={16} strokeWidth={2.2} style={{ color: c, flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                <span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: c, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>{s.name}</a>
                  <span style={{ color: '#6B7280' }}> : {s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
