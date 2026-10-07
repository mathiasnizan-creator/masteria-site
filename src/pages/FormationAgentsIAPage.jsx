import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Building2, Check, Eye, GraduationCap, Landmark, Layers,
  ListChecks, MapPin, MessagesSquare, Network, Scale, ShieldCheck, Sparkles,
  Target, Users, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useIsDesktop } from '../hooks/useMediaQuery'

/*
 * Money page « formation agents IA » (slug /formation-agents-ia), côté
 * FORMATION (OPCO/Qualiopi visibles).
 * Cible (Semrush fr, relevé 2026-08-28) : « formation agent ia » (390/mois,
 * KD 29, CPC 6,66 €), « formation agents ia » (170, KD 23) et « formation ia
 * agentique » (90, KD 18). Title = singulier exact-match, H1 = pluriel,
 * « IA agentique » traité en H2/FAQ/lexique.
 *
 * RÉPARTITION D'INTENTIONS (anti-cannibalisation) :
 *  - /formation-agents-ia = CETTE page : APPRENDRE à concevoir, fiabiliser et
 *    superviser des agents (formation, 2 jours) ;
 *  - /agents-ia-entreprise = le guide côté solutions + faire construire
 *    (ses H2 : « Qu'est-ce qu'un agent IA ? », « cas d'usage », « quels
 *    outils pour déployer » : ne PAS reprendre ces formulations) ;
 *  - /formation-automatisation-ia = les workflows no-code (Make/Zapier/n8n) ;
 *  - /formation-vibe-coding = construire un OUTIL en pilotant l'IA ;
 *  - /formation-claude-code = les agents dans le code, pour les devs.
 *
 * RÉÉCRITURE DU 2026-10-07 (texte propre, faits à jour, source :
 * scratchpad FAITS-OUTILS-2026-10-07.md et src/data/claude-facts.js) :
 * - ChatGPT : agents d'espace de travail GA le 21/05/2026 (Business,
 *   Enterprise, Edu), exécutions en crédits depuis le 06/07/2026 ; GPTs
 *   retirés le 11/12/2026 (11/02/2027 Enterprise avec délai), migration
 *   vers des plugins (help.openai.com 20001519, vérifié le 07/10).
 * - Microsoft Copilot (ex-Microsoft 365 Copilot) : Agent Builder, Copilot
 *   Studio (licence à part), Copilot Cowork GA (accord avant action sensible).
 * - Gemini : compétences à la place des Gems (Workspace dès le 05/10/2026,
 *   fin d'usage des Gems au plus tôt le 01/03/2027 pour les comptes pro) ;
 *   Workspace Studio. Vibe : Skills à la place des agents le 22/09/2026,
 *   données hébergées dans l'UE par défaut, entraînement actif par défaut
 *   sur Team (l'administrateur le coupe).
 * - AI Act : art. 4 depuis le 02/02/2025, art. 50 depuis le 02/08/2026,
 *   haut risque annexe III au 02/12/2027.
 * - Preuves : cas distribution et industrie de src/data/etudes-de-cas.js.
 * - FounderNote, OfficialSources et bloc « Qui vous forme » remplacés.
 */

const SLUG = 'formation-agents-ia'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = 'Formation agent IA : bâtir des agents fiables | Masteria'
const META_DESC = "Formation agents IA en 2 jours : construire, éprouver et surveiller des agents sans code dans Claude, ChatGPT, Copilot, Gemini ou n8n. Qualiopi, OPCO."
const KEYWORDS = "formation agent ia, formation agents ia, formation ia agentique, créer un agent ia, construire un agent ia sans coder, agent ia entreprise"

/* ───────── Styles partagés ───────── */

const sectionPad = 'clamp(64px, 9vw, 110px) 24px'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px', lineHeight: 1.25, letterSpacing: '-0.01em' }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 18, fontWeight: 800, color: '#0A0A0A', margin: 0, letterSpacing: '-0.01em' }
const aStyle = { color: c, fontWeight: 600 }

const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }
const answerStyle = { background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#0A0A0A', margin: '0 0 28px', maxWidth: 880 }

const thStyle = { textAlign: 'left', padding: '12px 16px', fontSize: 12.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#6B7280', borderBottom: '2px solid #E5E7EB', fontFamily: 'Nunito, sans-serif' }
const tdStyle = { padding: '14px 16px', fontSize: 14.5, color: '#374151', lineHeight: 1.6, borderBottom: '1px solid #F3F4F6', verticalAlign: 'top' }

function Kicker({ children }) {
  return <div style={kickerStyle}>{children}</div>
}

function IconTile({ icon: Icon }) {
  return (
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={22} strokeWidth={2} style={{ color: c }} />
    </div>
  )
}

const HERO_BADGES = [
  { icon: Bot, label: 'Sans code, dans vos propres outils' },
  { icon: GraduationCap, label: 'Qualiopi · dossier OPCO fourni' },
  { icon: Building2, label: 'Deux jours, en intra ou en individuel' },
  { icon: MapPin, label: 'Sur site en France, ou ailleurs sur demande' },
]

/* ───────── Les points clés (synthèse citable, GEO) ───────── */

const EN_BREF = [
  { label: 'Durée', value: "Deux jours (14 h) ; une journée centrée sur le premier agent, ou un parcours individuel, selon le besoin." },
  { label: 'Public', value: "Équipes métier, référents IA, managers, responsables de processus ; aucune compétence en programmation." },
  { label: 'Outils', value: "Ceux de votre entreprise : Claude, ChatGPT, Microsoft Copilot, Gemini ou Vibe, avec n8n ou Make quand l'agent doit traverser plusieurs applications." },
  { label: 'Méthode', value: "Chacun conçoit un agent pour un processus de son poste, le soumet à un jeu de tests, puis lui fixe ses limites." },
  { label: 'Livrables', value: "Agents partagés dans vos espaces d'équipe, gabarit de cadrage, modèle d'instructions, grille de recette, plan de déploiement." },
  { label: 'Financement', value: "Organisme Qualiopi : votre OPCO peut prendre le relais, selon ses règles et ses fonds." },
]

/* ───────── Sommaire ───────── */

const SOMMAIRE = [
  ['#autonomie', 'Assistant, workflow, agent'],
  ['#programme', 'Programme des 2 jours'],
  ['#outils', 'Agents par outil'],
  ['#fin-de-vie', 'Ce qui disparaît'],
  ['#fiabilite', 'Échecs fréquents'],
  ['#profils', 'Pour qui'],
  ['#tarif', 'Tarif'],
  ['#faq', 'FAQ'],
]

/* ───────── Trois degrés d'autonomie (3 cartes + 1 carte sombre) ───────── */

const NIVEAUX = [
  {
    icon: MessagesSquare,
    title: "L'assistant répond",
    desc: "Vous posez une question ou confiez une tâche, il produit, et vous reprenez la main à chaque échange. Rédiger, résumer, analyser : c'est par là que commencent la plupart des équipes.",
  },
  {
    icon: Workflow,
    title: 'Le workflow exécute',
    desc: "Un enchaînement écrit à l'avance se répète à l'identique : un formulaire arrive, une ligne se crée, une notification part. Il reste fiable tant que les entrées gardent la même forme.",
  },
  {
    icon: Bot,
    title: "L'agent poursuit un objectif",
    desc: "Préparer ce dossier, qualifier cette demande : l'agent découpe la tâche, cherche l'information dans les applications que vous lui ouvrez, produit, puis s'arrête là où une personne doit valider. Son autonomie se règle.",
  },
]

/* ───────── Programme 2 jours (Matin / Après-midi) ───────── */

const PROGRAMME = [
  {
    jour: 'Jour 1',
    titre: 'Comprendre, cadrer, construire',
    resume: "De la mécanique d'un agent au premier agent construit et essayé sur un dossier du poste.",
    matin: [
      { t: 'Un agent observé pas à pas', d: "Objectif, découpage, appel d'un outil, contrôle du résultat : le formateur fait travailler un agent devant le groupe et commente chaque étape." },
      { t: "Le bon degré d'autonomie", d: "Pour chaque tâche apportée, on tranche entre assistant, workflow et agent, à l'aide d'une grille de questions simples." },
      { t: "L'inventaire de vos licences", d: "Ce que vos offres Claude, ChatGPT, Microsoft Copilot ou Gemini permettent de construire, édition par édition, au jour de la session." },
      { t: "Le cadrage d'un agent", d: "Tâche, données utilisées, applications ouvertes, point de validation humaine : un gabarit d'une page, que vous réutiliserez en interne." },
      { t: 'Atelier : choisir son processus', d: "Chaque participant passe un processus de son poste à la grille et rédige le cadrage de son futur agent." },
    ],
    apresmidi: [
      { t: "Construire l'agent, sans code", d: "Instructions, documents de référence, outils autorisés : chacun monte son agent dans l'environnement retenu (agent d'espace de travail ChatGPT, projet et compétences Claude, compétence Gemini, agent Copilot)." },
      { t: 'Lui donner vos références', d: "Gabarits, procédures, exemples maison : l'agent écrit dans vos formats et avec le ton de la maison." },
      { t: 'Les accès aux applications', d: "Messagerie, agenda, stockage, tableurs : ce que l'agent peut lire ou modifier selon vos licences, et ce qui lui reste fermé d'office." },
      { t: 'Atelier : premier essai sur dossiers', d: "L'agent traite des cas tirés du poste ; on note ce qui tient, ce qui dérive, ce qui manque." },
      { t: 'Revue en groupe', d: "Chaque agent passe devant les autres : erreurs repérées, instructions corrigées, premières limites posées." },
    ],
  },
  {
    jour: 'Jour 2',
    titre: 'Fiabiliser, orchestrer, gouverner',
    resume: "Des instructions éprouvées au branchement sur vos applications, jusqu'au plan de déploiement.",
    matin: [
      { t: 'Écrire des instructions qui tiennent', d: "Rôle, périmètre, cas de refus, format de sortie, moment où l'agent passe la main : ce qui sépare un agent qui dérive d'un agent utile." },
      { t: 'Recetter avant de déployer', d: "Un jeu de cas de test, pièges compris, et des critères d'acceptation écrits : l'agent se valide comme un livrable." },
      { t: 'Un agent ou plusieurs', d: "Quand un seul agent suffit, et quand mieux vaut une chaîne d'agents spécialisés qui se contrôlent l'un l'autre." },
      { t: "Relier l'agent à vos applications", d: "Avec n8n ou Make : un déclencheur, des étapes IA, des points de contrôle humains ; l'agent entre dans le flux de l'équipe." },
      { t: 'Atelier : durcir son agent', d: "Instructions révisées, jeu de test, limites, ou passage à une chaîne de plusieurs étapes." },
    ],
    apresmidi: [
      { t: 'Surveiller au quotidien', d: "Journal des actions, revue des réponses, traitement des erreurs : qui regarde quoi, à quel rythme, et à quel moment on suspend l'agent." },
      { t: 'Le cadre écrit', d: "Données autorisées par agent, information des personnes qui dialoguent avec lui, mesures de maîtrise de l'IA (article 4 du règlement européen), propriété des agents créés." },
      { t: "Passer l'agent à l'équipe", d: "Partage dans l'espace d'équipe, référent nommé, versions successives : l'agent devient un outil commun." },
      { t: 'Atelier : le plan de déploiement', d: "Pour chaque agent : responsable, indicateurs suivis, prochaine version, date de revue." },
      { t: 'Les trois agents suivants', d: "L'équipe retient ses trois prochains agents, chacun confié à un responsable, avec sa date." },
    ],
  },
]

/* ───────── Objectifs (6 cartes) ───────── */

const OBJECTIFS = [
  { icon: Target, title: 'Choisir les bons cas', desc: "Décider, tâche par tâche, ce qui justifie un agent, ce qu'un workflow simple suffit à traiter et ce qui reste à l'assistant." },
  { icon: Bot, title: 'Monter un agent sans code', desc: "Construire un agent dans votre environnement, avec ses instructions, ses documents de référence et ses accès, sur un processus du poste." },
  { icon: ListChecks, title: 'Le recetter comme un livrable', desc: "Préparer des cas de test, pièges compris, et prononcer l'acceptation sur des critères écrits." },
  { icon: ShieldCheck, title: 'Lui fixer des limites', desc: "Borner le périmètre, prévoir les refus, soumettre à une personne toute action qui engage l'entreprise." },
  { icon: Network, title: 'Le brancher sur vos applications', desc: "Insérer l'agent dans le flux de l'équipe avec n8n ou Make : déclencheurs, étapes, points de contrôle." },
  { icon: Eye, title: 'Le suivre dans la durée', desc: "Lire le journal des actions, organiser la revue des réponses, faire évoluer l'agent sans qu'il dérive." },
]

/* ───────── Agents par outil (tableau, faits au 7 octobre 2026) ───────── */

const OUTILS_TABLE = [
  {
    env: 'Claude (Team, Enterprise)',
    build: "Des projets partagés sur vos documents, des compétences (Skills) au format SKILL.md, des connecteurs MCP vers vos logiciels",
    fort: "La qualité rédactionnelle et des compétences qui se partagent entre collègues",
  },
  {
    env: 'ChatGPT (Business)',
    build: "Des agents d'espace de travail, disponibles depuis le 21 mai 2026 et dont chaque exécution se paie en crédits, des compétences regroupées en plugins, des tâches planifiées",
    fort: "La polyvalence, et une console où l'administrateur gère les plugins de l'espace depuis le 1er octobre 2026",
  },
  {
    env: 'Microsoft Copilot',
    build: "Des agents avec Agent Builder, des agents métier avec Copilot Studio (licence à part), et Copilot Cowork pour des tâches planifiées qui demandent l'accord avant chaque action sensible",
    fort: "L'ancrage dans Outlook, Teams, Word, Excel et SharePoint",
  },
  {
    env: 'Gemini (Google Workspace)',
    build: "Des compétences, qui remplacent les Gems et arrivent dans Workspace depuis le 5 octobre 2026, des carnets Gemini Notebook, des flux Workspace Studio selon l'édition",
    fort: "L'intégration à Gmail, Docs, Sheets et Drive",
  },
  {
    env: 'Vibe (Mistral)',
    build: "Des compétences (Skills), qui ont pris la place des agents le 22 septembre 2026, une base de connaissances et des connecteurs",
    fort: "Un hébergement européen par défaut, chez un éditeur français",
  },
  {
    env: 'n8n ou Make',
    build: "Des chaînes complètes entre applications : déclencheur, étapes IA, agent, points de contrôle humains",
    fort: "L'orchestration au-delà d'un seul éditeur ; n8n peut exiger un accord humain avant chaque outil",
  },
]

/* ───────── Formats en fin de vie (3 cartes) ───────── */

const FIN_DE_VIE = [
  {
    title: 'Les GPTs personnalisés de ChatGPT',
    desc: "Fin de service fixée par OpenAI au 11 décembre 2026, quelle que soit l'offre ; un espace Enterprise ayant négocié un report tient jusqu'au 11 février 2027. Les GPTs migrent vers des plugins : leurs consignes passent dans une compétence, leurs actions personnalisées sont perdues.",
  },
  {
    title: 'Les Gems de Gemini',
    desc: "Google les remplace par des compétences, arrivées dans Workspace à partir du 5 octobre 2026. Pour les comptes professionnels, leur usage prendra fin le 1er mars 2027 ou plus tard ; les Gems non convertis deviennent alors des brouillons de compétences inactifs.",
  },
  {
    title: 'Les agents de Vibe',
    desc: "Mistral les a remplacés par des compétences (Skills) dans ses notes de version du 22 septembre 2026 ; la recherche approfondie est désormais une compétence parmi d'autres.",
  },
]

/* ───────── Ce qui fait échouer un agent (5 cartes) ───────── */

const ECHECS = [
  {
    title: "L'agent à tout faire",
    desc: "Un agent chargé de tout ne fait rien de fiable. Un agent par processus, avec un périmètre écrit : c'est la première décision de cadrage, et celle qui rapporte le plus.",
  },
  {
    title: 'Des instructions qui ne bornent rien',
    desc: "« Sois professionnel » ne contraint aucune réponse. Rôle, limites, refus, format, passage de relais : des instructions se rédigent comme une consigne de travail, puis s'éprouvent.",
  },
  {
    title: 'Trois essais réussis pris pour une recette',
    desc: "Une démonstration qui marche prouve peu de chose. L'agent se valide sur un jeu de cas, pièges compris, avec des critères écrits à l'avance.",
  },
  {
    title: "L'envoi sans relecture",
    desc: "Un agent qui envoie, publie ou modifie sans accord finira par se tromper devant un client. L'agent prépare, une personne valide : la règle s'inscrit dans la conception.",
  },
  {
    title: "L'agent que personne ne regarde",
    desc: "Sans journal ni revue des réponses, la dérive passe inaperçue. Qui surveille quoi, à quel rythme et quand suspendre l'agent se décide dès la conception.",
  },
]

/* ───────── Profils (6 cartes) ───────── */

const PROFILS = [
  { icon: Users, title: 'Équipes métier', desc: "Commerce, RH, finance, marketing, support : leurs processus à plusieurs étapes donnent les meilleurs premiers agents." },
  { icon: Sparkles, title: 'Référents IA', desc: "Ceux qui outillent leur service repartent avec la grille de cadrage, le modèle d'instructions et la méthode de recette." },
  { icon: Target, title: 'Managers et chefs de projet', desc: "Pour décider ce que l'on confie à un agent, régler son autonomie et porter le plan de déploiement de l'équipe." },
  { icon: Workflow, title: 'Responsables de processus', desc: "Qualité, opérations, ADV : ceux qui connaissent les flux que les agents traverseront, et les contrôles qui vont avec." },
  { icon: Layers, title: 'PMO et transformation', desc: "Pour tenir un portefeuille d'agents cohérent, avec des règles communes à toutes les équipes." },
  { icon: Building2, title: 'DSI et informatique de proximité', desc: "Pour fixer licences, connecteurs et périmètres de données, et garder la main sur ce que les agents peuvent toucher." },
]

/* ───────── FAQ ───────── */

const FAQ = [
  {
    q: "Qu'est-ce qu'une formation agents IA ?",
    a: "Une formation où vos équipes apprennent à concevoir, construire, éprouver et surveiller des agents IA : des systèmes qui enchaînent les étapes d'une tâche (chercher, produire, vérifier, transmettre) dans vos applications, sous le contrôle d'une personne. Chez Masteria, elle dure deux jours, en intra ou à distance, et chaque participant construit un agent pour l'une de ses propres tâches, dans votre environnement : Claude, ChatGPT, Microsoft Copilot, Gemini ou Vibe, avec n8n ou Make pour relier les applications. Masteria est certifiée Qualiopi.",
  },
  {
    q: 'Agent IA ou assistant comme ChatGPT : quelle différence ?',
    a: "L'assistant répond à vos demandes une par une ; vous reprenez la main après chaque réponse. L'agent reçoit un objectif et le poursuit : il découpe la tâche, choisit ses étapes, cherche l'information dans vos applications, produit le livrable et s'arrête aux points de validation prévus. La frontière tient à l'autonomie entre deux interventions humaines. La formation commence par cette distinction, parce que le premier gain consiste à donner à chaque tâche l'outil qui lui convient.",
  },
  {
    q: 'Que signifie « IA agentique » ?',
    a: "L'expression désigne une IA qui poursuit un objectif en plusieurs étapes et se sert d'outils pour l'atteindre : lire une boîte mail, interroger un tableau, remplir un document, déclencher une action. « Agentique » qualifie cette façon de travailler ; « agent » désigne le système construit. La première matinée la rend concrète : on regarde un agent travailler sur vos propres outils, puis chacun en monte un.",
  },
  {
    q: 'La formation agents IA demande-t-elle de savoir coder ?',
    a: "Non. Tout ce qui se construit pendant les deux jours se fait sans code : agents d'espace de travail dans ChatGPT, projets et compétences dans Claude, Agent Builder dans Copilot, compétences dans Gemini ou Vibe, et n8n ou Make à la souris pour l'orchestration. Une aisance ordinaire avec les outils de bureau suffit. Les profils qui veulent ensuite intégrer des agents à un produit poursuivent avec la formation Claude Code ou un développement sur mesure.",
  },
  {
    q: 'Quels agents construit-on pendant la formation ?',
    a: "Ceux de vos postes. Les plus fréquents : qualifier et résumer les demandes entrantes avant réponse, préparer un dossier complet avant un rendez-vous, produire un premier livrable dans vos gabarits (compte rendu, brief, réponse type), tenir une veille et livrer une synthèse chaque semaine, rassembler les éléments d'un reporting. Les cas qui engageraient l'entreprise sans relecture sont écartés au cadrage ; ils viendront quand la surveillance aura fait ses preuves.",
  },
  {
    q: 'Avec quels outils travaille-t-on ?',
    a: "Sur vos outils, dans leurs versions professionnelles : Claude (projets, compétences, connecteurs), ChatGPT Business (agents d'espace de travail, plugins, planification), Microsoft Copilot (Agent Builder, Copilot Studio, Cowork), Gemini (compétences, Gemini Notebook, Workspace Studio selon l'édition), Vibe de Mistral (compétences), et n8n ou Make pour relier les applications. Le cadrage recense vos licences : la formation travaille sur ce que vos équipes ouvriront le lendemain, avec leurs droits.",
  },
  {
    q: 'Nos GPTs et nos Gems vont-ils disparaître ?',
    a: "Oui, selon un calendrier connu. OpenAI éteint les GPTs personnalisés le 11 décembre 2026, ou le 11 février 2027 pour un espace Enterprise bénéficiant d'un report, et les transforme en plugins. Google remplace les Gems par des compétences ; sur les comptes professionnels, ils cesseront de fonctionner, pas avant le 1er mars 2027. Chez Mistral, les compétences ont pris la place des agents de Vibe le 22 septembre 2026. La formation part donc du format compétence, qui se recopie d'un outil à l'autre.",
  },
  {
    q: 'Un agent IA peut-il travailler seul, sans validation humaine ?',
    a: "Techniquement, oui ; c'est précisément ce que la formation encadre. La règle enseignée : ce qui engage l'entreprise (envoyer, publier, répondre à un client, modifier un dossier) passe par une personne, l'agent préparant le travail. L'autonomie complète se réserve aux tâches sans enjeu, avec un journal des actions et une revue régulière. Le degré d'autonomie se décide à la conception et se révise à mesure que l'agent fait ses preuves.",
  },
  {
    q: 'Quel cadre RGPD et AI Act pour des agents IA ?',
    a: "Côté données, chaque agent reçoit un périmètre écrit (ce qu'il lit, où il écrit, ce qui lui est interdit), et les ateliers se font sur des offres professionnelles où l'entraînement sur vos échanges est coupé ; chez Vibe Team, c'est à l'administrateur de le désactiver. Côté règlement européen, l'article 4, applicable depuis février 2025, pousse les entreprises à développer la culture IA de leurs équipes, ce qu'une formation documentée appuie, et l'article 50 oblige, depuis le 2 août 2026, à prévenir les gens qu'ils échangent avec une IA. Les recommandations de la CNIL servent de repère.",
  },
  {
    q: 'Qui peut financer la formation agents IA ?',
    a: "Votre OPCO de branche, en premier lieu : Masteria étant certifiée Qualiopi, la session lui est éligible, et l'opérateur tranche selon ses règles et ses fonds. Nous fournissons le programme détaillé, les objectifs, les modalités d'évaluation et la convention. À Genève et à Bruxelles, hors du système des OPCO, nous chiffrons en euros HT.",
  },
  {
    q: 'Distanciel, individuel : quels autres formats ?',
    a: "Oui. Le format de référence réunit jusqu'à douze personnes chez vous ; le programme existe aussi en visioconférence, découpé si besoin en séquences d'une demi-journée. En individuel, un référent ou un dirigeant suit le programme seul, appliqué à ses propres dossiers, au même tarif journalier. Nous organisons aussi des sessions hors de France, en anglais si besoin.",
  },
  {
    q: 'Que garde l\'entreprise après les deux jours ?',
    a: "Les agents construits en atelier, rangés dans vos espaces d'équipe, à l'abri du départ d'un salarié ; le gabarit de cadrage et le modèle d'instructions pour les agents suivants ; la grille de recette et les jeux de test ; les règles écrites (données, validation, surveillance) ; et le plan de déploiement : les trois prochains agents, leur porteur, leur échéance.",
  },
  {
    q: 'Et si nous voulons faire construire nos agents plutôt que former nos équipes ?',
    a: "Les deux chemins existent et se combinent. Quand l'agent traverse plusieurs systèmes, demande des connecteurs spécifiques ou doit tenir une forte charge, nous le construisons en mission ; notre offre agents IA en entreprise couvre ce cas, une prestation de développement pas finançable par votre OPCO. Former l'équipe reste utile : une équipe qui comprend le fonctionnement d'un agent cadre mieux le besoin et surveille mieux ce qu'on lui confie.",
  },
]

/* ───────── JSON-LD ───────── */

const COURSE_DATA = {
  name: 'Formation agents IA, Masteria',
  description: "Formation agents IA en 2 jours : fonctionnement d'un agent, choix du degré d'autonomie, cadrage d'un cas d'usage, construction sans code dans Claude, ChatGPT, Microsoft Copilot, Gemini ou Vibe, recette (instructions, jeux de test, limites), orchestration avec n8n ou Make, surveillance et gouvernance. Pour un groupe intra ou une personne seule, chez vous ou en visioconférence ; organisme Qualiopi.",
  level: 'Tous niveaux',
  teaches: [
    "Distinguer assistant, workflow et agent, et choisir le degré d'autonomie de chaque tâche",
    "Cadrer un cas d'usage d'agent : tâche, données, applications, point de validation humaine",
    "Construire un agent sans code dans son environnement (Claude, ChatGPT, Copilot, Gemini, Vibe)",
    "Recetter un agent : instructions éprouvées, jeu de cas de test, limites",
    "Relier un agent à plusieurs applications avec n8n ou Make",
    "Surveiller des agents en service : journal des actions, revue des réponses, gouvernance",
  ],
  about: "Agents d'intelligence artificielle (IA agentique)",
  timeRequired: 'PT14H',
  duration: 'PT14H',
  prerequisites: "Aucun prérequis technique ; une pratique, même récente, d'un assistant IA aide.",
  audience: 'Équipes métier, référents IA, managers, responsables de processus, PMO, DSI',
  locationName: 'Masteria, intra ou individuel, présentiel ou visioconférence',
}

/* Le programme en ItemList (séquence citable, GEO). */
const programmeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Le programme de la formation agents IA (2 jours)',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: PROGRAMME.flatMap((day, di) => [
    {
      '@type': 'ListItem',
      position: di * 2 + 1,
      name: `${day.jour} · Matin · ${day.titre}`,
      description: day.matin.map(m => m.t).join(' ; '),
    },
    {
      '@type': 'ListItem',
      position: di * 2 + 2,
      name: `${day.jour} · Après-midi · ${day.titre}`,
      description: day.apresmidi.map(m => m.t).join(' ; '),
    },
  ]),
}

/* Article : porte l'auteur (Mathias Nizan) et les dates (E-E-A-T + fraîcheur GEO). */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.master-ia.fr/formation-agents-ia#article',
  headline: 'Formation agents IA : concevoir, fiabiliser et gouverner vos agents',
  description: META_DESC,
  author: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  editor: { '@id': 'https://www.master-ia.fr/#mathias-nizan' },
  publisher: { '@id': 'https://www.master-ia.fr/#organization' },
  datePublished: '2026-08-28',
  dateModified: '2026-10-07',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@id': 'https://www.master-ia.fr/formation-agents-ia#webpage' },
  /* Entités liées à Wikipédia (sameAs) : désambiguïsation pour les moteurs
     génératifs et le Knowledge Graph. URLs vérifiées (curl 200) le 2026-08-28. */
  about: [
    { '@type': 'Thing', name: 'Agent intelligent', sameAs: 'https://fr.wikipedia.org/wiki/Agent_intelligent' },
    { '@type': 'Thing', name: 'Intelligence artificielle', sameAs: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle' },
    { '@type': 'Thing', name: 'Grand modèle de langage', sameAs: 'https://fr.wikipedia.org/wiki/Grand_mod%C3%A8le_de_langage' },
    { '@type': 'Thing', name: 'Automatisation', sameAs: 'https://fr.wikipedia.org/wiki/Automatisation' },
  ],
}

/* ── GEO : vocabulaire des agents (DefinedTermSet, JSON-LD seul) ── */
const SITE = 'https://www.master-ia.fr'
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/${SLUG}#lexique`,
  name: 'Vocabulaire des agents IA',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Agent IA', description: "Système qui poursuit un objectif confié par une personne : il découpe la tâche, se sert d'applications (lire, chercher, produire, transmettre) et s'arrête aux points de validation prévus." },
    { '@type': 'DefinedTerm', name: 'IA agentique', description: "Façon de travailler où un modèle d'IA enchaîne des étapes et mobilise des outils pour atteindre un objectif, au lieu de produire une seule réponse." },
    { '@type': 'DefinedTerm', name: 'Boucle agentique', description: "Le cycle d'un agent : comprendre l'objectif, découper, agir avec un outil, contrôler le résultat, recommencer ou rendre la main." },
    { '@type': 'DefinedTerm', name: 'Compétence (skill)', description: "Procédure écrite une fois, souvent dans un fichier SKILL.md, que l'assistant charge quand la demande s'y prête. Format adopté par Anthropic, OpenAI, Google, Microsoft et Mistral." },
    { '@type': 'DefinedTerm', name: 'Orchestrateur', description: "Outil qui relie les applications et y insère des étapes d'IA, comme n8n ou Make : il porte les déclencheurs, les enchaînements et les contrôles humains d'un processus." },
    { '@type': 'DefinedTerm', name: 'Connecteur', description: "Accès donné à un agent vers une application (messagerie, agenda, stockage, tableur, CRM), en lecture ou en écriture, décidé au cadrage." },
    { '@type': 'DefinedTerm', name: 'Garde-fou', description: "Règle de conception qui borne un agent : périmètre de données, cas de refus, format imposé, validation humaine sur ce qui engage, journal des actions." },
    { '@type': 'DefinedTerm', name: 'Multi-agents', description: "Organisation où plusieurs agents spécialisés se répartissent un processus (trier, rédiger, contrôler), reliés par un orchestrateur." },
  ],
}

function FAQItem({ q, a, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '20px 0', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, padding: '0 0 20px', margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* Sources de la page : émises en WebPage.citation (JSON-LD) et affichées en fin de page. */
const PAGE_CITATIONS = [
  { name: 'OpenAI, retrait des GPTs personnalisés et migration vers des plugins', url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
  { name: 'Google Workspace, arrivée des compétences et fin des Gems', url: 'https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html' },
  { name: 'Google Workspace, calendrier de transition des Gems', url: 'https://knowledge.workspace.google.com/p/gems-migration' },
  { name: 'Mistral, notes de version (compétences de Vibe)', url: 'https://docs.mistral.ai/resources/release-notes' },
  { name: 'Microsoft Learn, Copilot Cowork', url: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/' },
  { name: "Règlement (UE) 2024/1689, dit AI Act, sur EUR-Lex", url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
  { name: "CNIL, recommandations sur l'intelligence artificielle", url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
  { name: 'Qualiopi expliquée par le ministère du Travail', url: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation' },
]

export default function FormationAgentsIAPage() {
  const isDesktop = useIsDesktop()
  const editorialGrid = isDesktop
    ? { display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }
    : {}
  const editorialAside = isDesktop
    ? { position: 'sticky', top: 130, alignSelf: 'start' }
    : { marginBottom: 32 }

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Formation intelligence artificielle', slug: 'formation-intelligence-artificielle' },
    { name: 'Formation agents IA', slug: SLUG },
  ]

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        keywords={KEYWORDS}
        breadcrumbs={breadcrumbs}
        courseData={COURSE_DATA}
        faqItems={FAQ}
        datePublished="2026-08-28"
        dateModified="2026-10-07"
        speakable={['#geo-summary', '#en-bref']}
        citations={PAGE_CITATIONS}
        extraJsonLd={[programmeJsonLd, articleJsonLd, termsJsonLd]}
      />

      {/* ── HERO sombre premium ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(48px, 7vw, 76px) 24px clamp(52px, 8vw, 80px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/formation-intelligence-artificielle" style={{ color: '#94A3B8' }}>Formation intelligence artificielle</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Formation agents IA</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>
              Formation · Agents IA
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.032em', maxWidth: 880 }}>
            Formation agents IA :
            <br />
            <span style={{ color: '#60A5FA', fontWeight: 800 }}>concevoir, fiabiliser et gouverner vos agents</span>
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 26px' }}>
            Signée par <Link to="/mathias-nizan" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link> · fonctions d'agents des cinq assistants vérifiées le 7 octobre 2026
          </p>

          {/* GEO : réponse directe citable */}
          <p id="geo-summary" style={{ fontSize: 'clamp(17px, 2.4vw, 20px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.58, margin: '0 0 28px', maxWidth: 740, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            Avec la formation agents IA de Masteria, vos équipes apprennent à construire des agents : des IA qui enchaînent les étapes d'une tâche, se servent de vos applications et rendent compte à une personne. <strong style={{ color: '#fff', fontWeight: 700 }}>Pendant deux jours, chaque participant conçoit, éprouve et borne un agent pour un processus de son poste, sans écrire de code</strong>, dans l'outil de l'entreprise : Microsoft Copilot (anciennement Microsoft 365 Copilot), Claude, ChatGPT, Gemini ou Vibe, avec n8n ou Make pour relier les applications. Organisme certifié Qualiopi ; financement OPCO possible.
          </p>

          <p style={{ fontSize: 15.5, color: '#94A3B8', lineHeight: 1.72, margin: '0 0 36px', maxWidth: 680 }}>
            Les agents prolongent le travail des équipes qui utilisent déjà un assistant : ils prennent en charge un enchaînement entier, de la demande au livrable. Cette autonomie rend service à trois conditions, que la formation installe une à une : des instructions précises, une recette sérieuse, une surveillance humaine.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 28px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Monter votre formation agents IA
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <a href="#programme" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
              Parcourir le programme
            </a>
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 40 }}>
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}
              >
                <Icon size={14} strokeWidth={2.2} style={{ color: '#60A5FA' }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* Les points clés : synthèse citable (GEO), carte sombre */}
          <div id="en-bref" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(20px, 3vw, 28px)', maxWidth: 820 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 14 }}>Les points clés</div>
            <dl style={{ margin: 0 }}>
              {EN_BREF.map((row, i) => (
                <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 110px', fontWeight: 800, fontSize: 13.5, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{row.label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14.5, color: '#94A3B8', lineHeight: 1.6 }}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ── */}
      <nav aria-label="Sur cette page" style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '14px 24px' }}>
        <div style={{ ...wrap, display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', fontFamily: 'Nunito, sans-serif' }}>Sur cette page</span>
          {SOMMAIRE.map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 13.5, color: '#374151', fontWeight: 600, textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── ASSISTANT / WORKFLOW / AGENT (éditorial asymétrique) ── */}
      <section id="autonomie" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>Les notions</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 18 }}>
                Assistant, workflow, agent : trois degrés d'autonomie à distinguer
              </h2>
              <p style={{ ...answerStyle, maxWidth: 'none', margin: '0 0 18px' }}>
                <strong>Un assistant répond pendant l'échange, un workflow déroule un scénario fixé d'avance, un agent IA vise un objectif : il choisit ses étapes, utilise vos applications et rend la main quand une décision engage l'entreprise. La formation apprend d'abord à placer chaque tâche au bon degré, puis à construire les agents qui le justifient.</strong>
              </p>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                On parle d'IA agentique pour désigner cette façon de travailler par objectifs. Le principe se comprend en une matinée ; rendre un agent fiable prend plus de temps, et l'essentiel des deux jours y est consacré. Pour confier la construction de vos agents à notre équipe, voyez notre offre <Link to="/agents-ia-entreprise" style={aStyle}>agents IA en entreprise</Link>.
              </p>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                {NIVEAUX.map((item, i) => (
                  <div key={i} style={{ ...cardStyle, padding: 24 }}>
                    <div style={{ marginBottom: 14 }}>
                      <IconTile icon={item.icon} />
                    </div>
                    <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
                {/* Carte sombre : le multi-agents, abordé au jour 2 */}
                <div style={{ ...cardStyle, padding: 24, background: '#0A0F1E', border: '1px solid #1E293B' }}>
                  <div style={{ marginBottom: 14 }}>
                    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={22} strokeWidth={2} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>
                  <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8, color: '#F8FAFC' }}>Plusieurs agents en relais ?</h3>
                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.65, margin: 0 }}>
                    Un agent trie, un deuxième rédige, un troisième vérifie. Ce découpage sert sur les processus longs ; nous l'abordons le deuxième jour, quand un premier agent a déjà fait ses preuves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LE PROGRAMME (ancre sombre, pivot) ── */}
      <section id="programme" style={{ position: 'relative', padding: sectionPad, background: '#0A0F1E', overflow: 'hidden', scrollMarginTop: 96 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -130, right: -90, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />

        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ ...kickerStyle, color: '#60A5FA' }}>Le programme</div>
          <h2 style={{ ...h2Style, color: '#F8FAFC', maxWidth: 880 }}>
            Du premier agent au plan de déploiement, en deux journées
          </h2>

          <p style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E293B', borderLeft: `3px solid ${c}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', fontSize: 16.5, lineHeight: 1.7, color: '#E2E8F0', margin: '0 0 28px', maxWidth: 880 }}>
            <strong style={{ color: '#fff' }}>Jour 1 : comprendre ce que fait un agent, cadrer un cas d'usage, puis construire un premier agent sans code dans votre environnement. Jour 2 : l'éprouver (instructions, tests, limites), le relier à vos applications avec n8n ou Make, puis organiser sa surveillance. Les exercices portent sur les processus des participants.</strong>
          </p>

          <div style={{ display: 'grid', gap: 22 }}>
            {PROGRAMME.map(day => (
              <div key={day.jour} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(22px, 3.5vw, 32px)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA' }}>{day.jour}</span>
                  <h3 style={{ ...h3Style, fontSize: 19, color: '#F8FAFC' }}>{day.titre}</h3>
                </div>
                <p style={{ fontSize: 14, color: '#94A3B8', margin: '0 0 20px' }}>{day.resume}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(18px, 3vw, 32px)' }}>
                  {[['Matin', day.matin], ['Après-midi', day.apresmidi]].map(([label, items]) => (
                    <div key={label}>
                      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7DA9F0', marginBottom: 12, fontFamily: 'Nunito, sans-serif' }}>{label}</div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                        {items.map(item => (
                          <li key={item.t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 99, background: '#60A5FA', flexShrink: 0, marginTop: 8 }} />
                            <div>
                              <div style={{ fontSize: 14.5, fontWeight: 700, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif', marginBottom: 3 }}>{item.t}</div>
                              <p style={{ fontSize: 13.5, color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginTop: 20, maxWidth: 800 }}>
            Nous ajustons le programme avant la session : niveau du groupe, licences en place, processus visés. En une journée, on s'arrête au premier agent éprouvé ; la deuxième journée ajoute l'orchestration et le plan de déploiement.
          </p>
        </div>
      </section>

      {/* ── OBJECTIFS ── */}
      <section id="objectifs" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Les objectifs</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six savoir-faire acquis à la fin de la formation
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Au terme des deux jours, chaque participant sait cadrer un agent, le construire sans code, l'éprouver sur un jeu de cas, lui fixer des limites et organiser sa surveillance. L'équipe repart avec des agents en service et un plan pour les suivants.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {OBJECTIFS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENTS PAR OUTIL (tableau) ── */}
      <section id="outils" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Vos outils</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Chaque assistant construit ses agents à sa manière
          </h2>

          <p style={answerStyle}>
            <strong>Nous travaillons sur les logiciels dont vos équipes disposent, dans leurs versions professionnelles. Chaque éditeur a sa façon de monter un agent ; le tableau résume ce qu'on y construit en atelier au 7 octobre 2026, et n8n ou Make prennent le relais quand l'agent doit traverser plusieurs applications.</strong>
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Environnement</th>
                  <th style={thStyle} scope="col">Ce que l'on y construit</th>
                  <th style={thStyle} scope="col">Son point fort</th>
                </tr>
              </thead>
              <tbody>
                {OUTILS_TABLE.map((row, i) => (
                  <tr key={row.env}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap', borderBottom: i === OUTILS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.env}</td>
                    <td style={{ ...tdStyle, borderBottom: i === OUTILS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.build}</td>
                    <td style={{ ...tdStyle, borderBottom: i === OUTILS_TABLE.length - 1 ? 'none' : tdStyle.borderBottom }}>{row.fort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, margin: '24px 0 0', maxWidth: 880 }}>
            Pour aller au fond de l'orchestration, la <Link to="/formation-n8n" style={aStyle}>formation n8n</Link> y consacre deux jours ; les tâches répétitives qui n'appellent pas d'agent relèvent de la <Link to="/formation-automatisation-ia" style={aStyle}>formation automatisation IA</Link> ; et si vos développeurs veulent programmer leurs agents, la <Link to="/formation-claude-code" style={aStyle}>formation Claude Code</Link> prend le relais.
          </p>
        </div>
      </section>

      {/* ── FORMATS EN FIN DE VIE ── */}
      <section id="fin-de-vie" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Calendrier des éditeurs</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Trois formats d'assistants s'arrêtent : bâtissez sur les compétences
          </h2>
          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>Les GPTs personnalisés, les Gems et les agents de Vibe ont tous une date de fin. Leur remplaçant se ressemble d'un éditeur à l'autre : la compétence, une procédure écrite une fois, souvent dans un fichier SKILL.md, que l'assistant charge quand la demande s'y prête. Les agents construits pendant la formation partent de ce format.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {FIN_DE_VIE.map(item => (
              <div key={item.title} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.75, margin: '26px 0 0', maxWidth: 860 }}>
            Une compétence bien rédigée se recopie d'un outil à l'autre : Claude, ChatGPT, Gemini, Copilot et Vibe lisent désormais ce type de procédure. C'est l'argument le plus solide pour fonder vos agents sur ce socle commun aux éditeurs.
          </p>
        </div>
      </section>

      {/* ── CE QUI FAIT ÉCHOUER UN AGENT ── */}
      <section id="fiabilite" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Ce qui fait échouer</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Cinq défauts expliquent la plupart des agents qui déçoivent
          </h2>
          <p style={answerStyle}>
            <strong>Un agent qui déçoit une fois en service souffre presque toujours de l'un de ces cinq défauts : un périmètre fourre-tout, des instructions vagues, une validation sur simple démonstration, une autonomie sans relecture ou une absence de surveillance. Le deuxième jour de la formation est construit autour de leurs parades.</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20, marginTop: 12 }}>
            {ECHECS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24, borderTop: `3px solid ${c}` }}>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: 14.5, lineHeight: 1.75, margin: '26px 0 0', maxWidth: 860 }}>
            Ces règles viennent du terrain. Dans une société de distribution informatique B2B de 58 personnes, dix référents ont été formés en deux jours en juin 2026 ; ensemble, ils ont bâti onze compétences Claude, validées par la direction avant diffusion, et le reste de l'entreprise doit en bénéficier entre octobre et décembre 2026 (<Link to="/etudes-de-cas-ia#distribution" style={{ color: c, fontWeight: 600 }}>le cas détaillé</Link>).
          </p>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section id="profils" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Pour qui</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Six profils pour qui la formation agents IA est conçue
          </h2>

          <p style={{ ...answerStyle, background: '#fff' }}>
            <strong>La formation s'adresse aux équipes qui pratiquent déjà un assistant IA et veulent passer aux agents, ainsi qu'aux référents chargés d'outiller leur service. Aucun prérequis technique : tout se construit sans code. Les profils techniques en retirent la méthode et le cadre, avant de passer au code s'ils le souhaitent.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {PROFILS.map((item, i) => (
              <div key={i} style={{ ...cardStyle, padding: 24 }}>
                <div style={{ marginBottom: 14 }}>
                  <IconTile icon={item.icon} />
                </div>
                <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE CADRE : DONNÉES, VALIDATION HUMAINE, CONFORMITÉ ── */}
      <section id="cadre" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <Kicker>Le cadre</Kicker>
          <h2 style={{ ...h2Style, maxWidth: 880 }}>
            Un agent agit davantage qu'un assistant : son cadre doit être plus net
          </h2>

          <p style={answerStyle}>
            <strong>Chaque agent reçoit un périmètre de données écrit, travaille sur une offre professionnelle et passe la main à une personne pour tout ce qui engage l'entreprise. Les obligations de l'AI Act arrivent par étapes ; la formation dit ce qui vaut aujourd'hui.</strong>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginTop: 12 }}>
            {[
              { icon: ShieldCheck, title: 'Les données', desc: "Pour chaque agent, le cadrage fixe ce qu'il lit et où il écrit. Les ateliers se tiennent sur des offres professionnelles où l'entraînement sur vos échanges est coupé ; il l'est par défaut chez la plupart des éditeurs, et chez Vibe Team, l'administrateur doit le désactiver. Les recommandations de la CNIL servent de repère." },
              { icon: Eye, title: 'La validation humaine', desc: "Envoyer un courrier, répondre à un client, modifier un dossier : l'agent prépare, une personne décide. Le degré d'autonomie se fixe à la conception et se révise à mesure que la confiance s'installe." },
              { icon: Scale, title: "L'AI Act, sans dramatiser", desc: "L'article 4, applicable depuis le 2 février 2025, attend des entreprises qu'elles fassent progresser la maîtrise de l'IA dans leurs équipes ; une formation documentée y contribue. L'article 50, en vigueur depuis le 2 août 2026, exige d'informer les personnes qui dialoguent avec un système d'IA. Les obligations du haut risque (recrutement, évaluation des salariés) sont reportées à décembre 2027.", link: { href: '/formation-ai-act', label: 'La formation AI Act' } },
            ].map(card => {
              const Icon = card.icon
              return (
                <div key={card.title} style={{ ...cardStyle, padding: 28, borderTop: `3px solid ${c}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Icon size={20} strokeWidth={2.1} style={{ color: c, flexShrink: 0 }} aria-hidden="true" />
                    <h3 style={{ ...h3Style, fontSize: 16 }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: card.link ? '0 0 12px' : 0 }}>{card.desc}</p>
                  {card.link && (
                    <Link to={card.link.href} style={{ fontSize: 13.5, color: c, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                      {card.link.label}
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TARIF ET FINANCEMENT ── */}
      <section id="tarif" style={{ padding: sectionPad, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={{ ...cardStyle, background: '#fff', borderLeft: `4px solid ${c}`, padding: 'clamp(28px, 4vw, 44px)', display: 'flex', gap: 'clamp(20px, 4vw, 40px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: 14, background: cLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Landmark size={28} strokeWidth={2} style={{ color: c }} />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <Kicker>Tarif et financement</Kicker>
              <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.6vw, 28px)', marginBottom: 14 }}>
                Une journée de formation agents IA coûte 1 980 € HT
              </h2>
              <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: '0 0 16px', maxWidth: 760 }}>
                Pour une équipe de douze au plus, réunie en intra, les deux jours reviennent à 3 960 € HT ; le même tarif journalier vaut pour un parcours individuel, destiné à un référent ou à un dirigeant. Les licences des outils restent à votre charge. Masteria détenant la certification Qualiopi, ces journées peuvent être financées par votre OPCO, au regard de ses règles et du budget dont il dispose ; nous lui fournissons programme, objectifs, modalités d'évaluation et convention. L'outil <Link to="/quel-opco" style={aStyle}>Quel OPCO ?</Link> vous indique votre opérateur, et la page <Link to="/financement-formation-ia" style={aStyle}>financement d'une formation IA</Link> détaille les règles.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 10 }}>
                {[
                  'Deux jours en intra : 3 960 € HT',
                  'Parcours individuel au même tarif journalier',
                  'Licences des outils non comprises',
                  "Objectifs et évaluation prêts pour l'OPCO",
                ].map(pt => (
                  <li key={pt} style={{ fontSize: 14, color: '#374151', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: c, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T : qui forme vos équipes ── */}
      <section style={{ padding: 'clamp(44px, 6vw, 64px) 24px', background: '#0A0F1E' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 380px', minWidth: 300 }}>
              <div style={{ ...kickerStyle, color: '#60A5FA' }}>Qui forme vos équipes</div>
              <h2 style={{ ...h2Style, color: '#F8FAFC', fontSize: 'clamp(20px, 2.4vw, 26px)', marginBottom: 12 }}>
                Des formateurs qui conçoivent des agents pour des clients
              </h2>
              <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                À la tête de Masteria, cabinet lyonnais créé en 2022 qui ne travaille que sur l'intelligence artificielle, sans attache avec un éditeur, Mathias Nizan pilote chaque session ; les formateurs du réseau, une vingtaine d'indépendants, conçoivent eux aussi des agents en mission. Dans un groupe industriel international du packaging, par exemple, les sessions des 24 managers pilotes comprenaient la création d'assistants Copilot sur les fichiers du groupe, l'un d'eux préparant la fiche fournisseur dès réception d'un mail (<Link to="/etudes-de-cas-ia#industrie" style={{ color: '#93C5FD', fontWeight: 600 }}>le cas complet</Link>).
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 3vw, 36px)', flex: '1 1 420px' }}>
              {[
                ['11', 'compétences Claude construites avec dix référents'],
                ['24', 'managers pilotes formés dans un groupe industriel'],
                ['5', 'assistants du marché couverts en atelier'],
                ['2', 'orchestrateurs pour relier les agents : n8n, Make'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{k}</div>
                  <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (éditorial asymétrique) ── */}
      <section id="faq" style={{ padding: sectionPad, background: '#fff', scrollMarginTop: 96 }}>
        <div style={wrap}>
          <div style={editorialGrid}>
            <div style={editorialAside}>
              <Kicker>FAQ</Kicker>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Formation agents IA : les réponses aux questions courantes
              </h2>
              <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, margin: '0 0 16px' }}>
                Votre outil ou votre processus n'apparaît pas ici ?
              </p>
              <Link to="/contact" style={{ ...aStyle, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700 }}>
                Décrivez-le-nous
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

      {/* ── MAILLAGE INTERNE ── */}
      <section style={{ padding: sectionPad, background: '#F9FAFB' }}>
        <div style={wrap}>
          <Kicker>Pages liées</Kicker>
          <h2 style={{ ...h2Style, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Autour des agents : automatisation, prompts, construction
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Les agents se combinent avec l'automatisation, reposent sur des instructions bien écrites et, pour les besoins spécifiques, sur nos missions de construction.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {[
              { label: 'Agents IA en entreprise', href: '/agents-ia-entreprise', tag: 'Faire construire', desc: "Les agents vus côté déploiement : usages par fonction, gouvernance, et nos missions sur mesure." },
              { label: 'Formation automatisation IA', href: '/formation-automatisation-ia', tag: 'Workflows', desc: "Les tâches répétitives confiées à Make, Zapier ou n8n, en complément des agents." },
              { label: 'Formation vibe coding', href: '/formation-vibe-coding', tag: 'Créer un outil', desc: "Piloter l'IA pour produire un prototype ou un petit outil, sans être développeur." },
              { label: 'Formation Claude Code', href: '/formation-claude-code', tag: 'Développeurs', desc: "Des agents programmés et relus par vos développeurs." },
              { label: 'Formation prompt engineering', href: '/formation-prompt-engineering', tag: 'Fondamentaux', desc: "Écrire des demandes précises, base d'instructions d'agent qui se testent." },
              { label: 'Meilleur agent IA : le comparatif', href: '/meilleur-agent-ia', tag: 'Comparatif', desc: "Les agents du marché passés en revue, pour situer ce que vous construirez." },
              { label: 'Formation IA en entreprise', href: '/formation-ia-entreprise', tag: 'Déploiement', desc: "Le cadre général de nos sessions en entreprise, par métier et par outil." },
              { label: 'Financement formation IA', href: '/financement-formation-ia', tag: 'Financement', desc: "Comment un OPCO prend en charge une formation d'équipe, pièces à l'appui." },
            ].map(rel => (
              <Link key={rel.href} to={rel.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{ ...cardStyle, padding: 26, transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB' }}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
                    {rel.tag}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15.5, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
                    {rel.label}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65, margin: '0 0 12px' }}>{rel.desc}</p>
                  <ArrowRight size={16} strokeWidth={2.4} style={{ color: c }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE (E-E-A-T, remplace FounderNote) ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 56px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ fontSize: 15.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
            Dernière révision le 7 octobre 2026, par Mathias Nizan : fonctions d'agents vérifiées chez OpenAI, Anthropic, Microsoft, Google et Mistral, ainsi que le calendrier de retrait des GPTs et des Gems. Son parcours est décrit sur <Link to="/mathias-nizan" style={{ color: c, fontWeight: 600 }}>sa page de fondateur</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA FINALE SOMBRE ── */}
      <section style={{ background: '#fff', padding: 'clamp(64px, 9vw, 110px) 24px' }}>
        <div style={{ ...wrap, position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 16, padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...kickerStyle, color: '#60A5FA' }}>Formation agents IA</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, color: '#fff', letterSpacing: '-0.02em' }}>
              Passez de l'assistant à l'agent, en gardant la décision
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: 16, lineHeight: 1.7, margin: '0 auto 32px', maxWidth: 620 }}>
              Décrivez vos processus, vos outils et le niveau de vos équipes. Sous 24 heures, vous recevez un programme cadré, des dates possibles et le devis, avec les pièces pour votre OPCO.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '16px 34px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 800, marginBottom: 24 }}>
              Monter votre formation agents IA
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
              Qualiopi · deux jours ou un parcours individuel · Claude, ChatGPT, Copilot, Gemini, Vibe
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES DE LA PAGE ── */}
      <section aria-labelledby="sources-agents" style={{ padding: '56px 24px', background: '#FAFAF7', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 id="sources-agents" style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>
            Sur quoi s'appuient les dates et les fonctions citées
          </h2>
          <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
            Annonces et documentation des éditeurs consultées le 7 octobre 2026, règlement européen sur l'IA, recommandations de la CNIL.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, fontSize: 15, lineHeight: 1.6 }}>
            {PAGE_CITATIONS.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1A62FF', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
