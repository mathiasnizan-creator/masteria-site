import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, BarChart3, Check, ChevronDown, Code2, Compass, FileSearch,
  FileSpreadsheet, Headphones, Mail, Presentation, RefreshCw, Scale,
  Search, ShieldCheck, Sparkles, Workflow,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ToolLogo from '../components/ToolLogo'
import { SPOKE_SLUGS } from '../data/spoke-slugs'

/*
 * « Quel outil IA pour votre métier ? » — moteur d'arbitrage multi-critères.
 * Prolongement du sujet de l'article Les Échos (choisir l'IA adaptée à son métier).
 *
 * v2 (refonte) : la v1 décidait sur une seule question, ce qu'un tableau statique
 * donnait déjà. Ici, les usages cochés, l'environnement, les contraintes ET le
 * métier alimentent un score par outil ; la page rend un CLASSEMENT des cinq avec
 * le raisonnement (quels critères ont pesé), la combinaison à deux outils quand
 * les réponses la justifient, ce qui aurait fait gagner les autres, et des prompts
 * d'essai propres au métier.
 *
 * INTÉGRITÉ : la grille de pondération est un arbitrage ÉDITORIAL, assumé comme
 * tel sur la page, fondé sur le positionnement public des cinq produits et sur ce
 * que nous observons en formation. Aucun benchmark chiffré n'est inventé.
 * LIENS : résolus à l'exécution contre SPOKE_SLUGS → zéro lien mort.
 */

const c = '#2563EB'
const SECTION_PAD = 'clamp(56px, 8vw, 90px) 24px'
const kickerStyle = { fontFamily: 'Nunito, sans-serif', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14 }
const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(23px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 18px' }
const cardStyle = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 26 }

/* ─────────── Les cinq outils ─────────── */

const TOOLS = {
  chatgpt: {
    name: 'ChatGPT', short: 'ChatGPT', logo: 'chatgpt', color: '#10A37F',
    spoke: 'chatgpt', hub: 'formation-chatgpt',
    comparatif: { slug: 'chatgpt-vs-claude', label: 'ChatGPT vs Claude' },
    pitch: "Le plus polyvalent et le plus adopté, avec l'écosystème le plus riche (GPTs personnalisés, intégrations, API).",
    astuce: "créez un GPT personnalisé pour réutiliser ces consignes sans les recoller à chaque fois",
    edge: "des usages variés au quotidien et le besoin d'un écosystème ouvert",
  },
  claude: {
    name: 'Claude (Anthropic)', short: 'Claude', logo: 'claude', color: '#D97706',
    spoke: 'claude', hub: 'formation-claude-ia',
    comparatif: { slug: 'chatgpt-vs-claude', label: 'ChatGPT vs Claude' },
    pitch: "La référence des documents longs et de la rédaction exigeante : contrats, rapports, mémoires techniques, avec une grande fidélité au document source.",
    astuce: "regroupez vos documents de référence dans un Projet pour ne plus les redéposer à chaque conversation",
    edge: "du volume documentaire, de la rigueur rédactionnelle ou du code",
  },
  copilot: {
    name: 'Microsoft Copilot', short: 'Copilot', logo: 'copilot', color: '#0078D4',
    spoke: 'copilot', hub: 'formation-microsoft-copilot',
    comparatif: { slug: 'copilot-vs-chatgpt', label: 'Copilot vs ChatGPT' },
    pitch: "L'IA directement dans Word, Excel, Outlook et Teams : vos équipes ne quittent pas leurs outils et les données restent dans votre environnement Microsoft 365.",
    astuce: "lancez-les depuis le volet Copilot du document concerné, il a déjà le contexte du fichier ouvert",
    edge: "une suite Microsoft 365 déjà déployée et des usages bureautiques dominants",
  },
  gemini: {
    name: 'Google Gemini', short: 'Gemini', logo: 'gemini', color: '#4285F4',
    spoke: 'gemini', hub: 'formation-gemini-entreprise',
    comparatif: { slug: 'gemini-vs-copilot', label: 'Gemini vs Copilot' },
    pitch: "L'IA native de Google Workspace : Gmail, Docs, Sheets, Meet, avec de solides capacités de recherche et de multimodal.",
    astuce: "lancez-les depuis le document Docs ou Sheets concerné, Gemini lit le fichier ouvert",
    edge: "un environnement Google Workspace et beaucoup de recherche ou de messagerie",
  },
  mistral: {
    name: 'Mistral AI', short: 'Mistral', logo: 'mistral', color: '#FA520F',
    spoke: 'mistral', hub: 'formation-mistral-ai',
    comparatif: { slug: 'mistral-vs-chatgpt', label: 'Mistral vs ChatGPT' },
    pitch: "L'acteur français : hébergement et juridiction européens, assistant Vibe (anciennement Le Chat) pour le quotidien.",
    astuce: "enregistrez-les comme agents dans Vibe pour les relancer en un clic",
    edge: "une exigence de souveraineté ou de juridiction européenne",
  },
}
const TOOL_KEYS = ['chatgpt', 'claude', 'copilot', 'gemini', 'mistral']

/* ─────────── Grille d'arbitrage (assumée éditoriale) ─────────── */

const USAGES = [
  { id: 'docs', icon: FileSearch, label: 'Analyser des documents longs', ex: 'contrats, rapports, appels d’offres', short: 'documents longs',
    w: { claude: 3, chatgpt: 2, gemini: 2, mistral: 1, copilot: 1 } },
  { id: 'redaction', icon: Sparkles, label: 'Rédiger et produire du contenu', ex: 'articles, posts, argumentaires', short: 'rédaction',
    w: { chatgpt: 3, claude: 3, gemini: 2, mistral: 2, copilot: 2 } },
  { id: 'tableaux', icon: FileSpreadsheet, label: 'Travailler des tableaux et des données', ex: 'Excel, budgets, reportings', short: 'tableaux et données',
    w: { copilot: 3, chatgpt: 2, gemini: 2, claude: 2, mistral: 1 } },
  { id: 'emails', icon: Mail, label: 'Traiter emails et comptes rendus', ex: 'boîte de réception, réunions', short: 'emails et comptes rendus',
    w: { copilot: 3, gemini: 3, chatgpt: 2, claude: 2, mistral: 2 } },
  { id: 'slides', icon: Presentation, label: 'Préparer des présentations', ex: 'slides de comité, supports', short: 'présentations',
    w: { copilot: 3, gemini: 2, chatgpt: 2, claude: 1, mistral: 1 } },
  { id: 'code', icon: Code2, label: 'Coder et documenter du technique', ex: 'scripts, specs, revue de code', short: 'code et technique',
    // Microsoft 365 Copilot n'est pas un outil de développement : le produit de
    // référence côté Microsoft est GitHub Copilot, distinct et vendu à part.
    w: { claude: 3, chatgpt: 3, gemini: 2, mistral: 2, copilot: 1 },
    note: 'Côté Microsoft, le produit pour le code est GitHub Copilot, distinct de Microsoft 365 Copilot évalué ici.' },
  { id: 'client', icon: Headphones, label: 'Répondre à des clients en volume', ex: 'tickets, réclamations, FAQ', short: 'réponses client',
    w: { chatgpt: 3, mistral: 2, claude: 2, gemini: 2, copilot: 2 } },
  { id: 'recherche', icon: Search, label: 'Chercher et faire de la veille', ex: 'marché, réglementation, concurrence', short: 'recherche et veille',
    w: { gemini: 3, chatgpt: 3, claude: 2, mistral: 2, copilot: 2 } },
  { id: 'automatisation', icon: Workflow, label: 'Automatiser et connecter au SI', ex: 'API, agents, workflows', short: 'automatisation',
    w: { chatgpt: 3, claude: 3, mistral: 2, gemini: 2, copilot: 2 },
    note: "Côté Microsoft, l'automatisation passe par Copilot Studio et Power Automate plutôt que par le Copilot bureautique." },
]

/* Adéquation à la suite bureautique réellement déployée, sur 100.
   L'IA native de VOTRE suite est imbattable sur le quotidien. Celle de l'AUTRE
   suite tombe à 5 : Copilot suppose des licences Microsoft 365, Gemini des
   licences Workspace. La recommander à qui ne l'a pas déployée n'est pas un
   choix d'outil, c'est un projet de migration. */
const ENVS = [
  { id: 'm365', label: 'Microsoft 365', ex: 'Word, Excel, Outlook, Teams', short: 'suite Microsoft 365',
    fit: { copilot: 100, chatgpt: 55, claude: 55, mistral: 55, gemini: 5 } },
  { id: 'workspace', label: 'Google Workspace', ex: 'Gmail, Docs, Sheets, Meet', short: 'suite Google Workspace',
    fit: { gemini: 100, chatgpt: 55, claude: 55, mistral: 55, copilot: 5 } },
  { id: 'mixte', label: 'Mixte ou autre', ex: 'ou choix pas encore arrêté', short: 'environnement non contraignant',
    fit: { chatgpt: 75, claude: 75, mistral: 75, copilot: 35, gemini: 35 } },
]

/* Contraintes PONDÉRÉES (sur 100). Elles nuancent, elles n'excluent pas :
   les cinq éditeurs proposent des offres entreprise qui excluent vos données de
   l'entraînement. Le départage se fait sur le lieu de traitement et la maturité
   d'administration, pas sur un jugement de sécurité des modèles. */
const CONTRAINTES = [
  { id: 'sensibles', icon: Scale, label: 'Données sensibles', ex: 'RH, santé, juridique, secret des affaires', short: 'données sensibles',
    fit: { copilot: 100, gemini: 100, mistral: 100, claude: 70, chatgpt: 70 },
    note: "Copilot et Gemini traitent la donnée dans le locataire M365 ou Workspace que vous administrez déjà ; Mistral la traite en Europe. ChatGPT et Claude offrent les mêmes garanties contractuelles en version entreprise, avec un traitement hors UE par défaut." },
  { id: 'large', icon: BarChart3, label: 'Déploiement à grande échelle', ex: 'administration centralisée, SSO, facturation unique', short: 'déploiement à grande échelle',
    fit: { copilot: 100, gemini: 100, chatgpt: 100, claude: 70, mistral: 70 },
    note: "Microsoft et Google s'appuient sur l'annuaire que vous administrez déjà, OpenAI propose une offre entreprise avec SSO et provisionnement. Anthropic et Mistral ont des offres entreprise plus récentes sur ce terrain." },
]

/* Contrainte ÉLIMINATOIRE, traitée à part : une exigence réglementaire ne se
   compense pas par des points d'usage. Seul un éditeur européen y répond ;
   l'hébergement en Europe est une question différente, expliquée dans le résultat. */
const SOUVERAINETE = {
  id: 'souverainete', icon: ShieldCheck,
  label: 'Souveraineté : éditeur européen exigé',
  ex: 'au-delà de l’hébergement en Europe, un éditeur soumis au droit européen',
  eligibles: ['mistral'],
}

const METIERS = [
  { slug: 'juridique', label: 'Juridique', w: { claude: 4, mistral: 2, chatgpt: 1, copilot: 1, gemini: 0 } },
  { slug: 'finance', label: 'Finance', w: { copilot: 3, claude: 3, chatgpt: 1, gemini: 1, mistral: 1 } },
  { slug: 'marketing', label: 'Marketing', w: { chatgpt: 3, gemini: 2, claude: 1, mistral: 1, copilot: 1 } },
  { slug: 'ressources-humaines', label: 'Ressources humaines', w: { chatgpt: 2, copilot: 2, claude: 2, gemini: 1, mistral: 1 } },
  { slug: 'commercial', label: 'Commercial', w: { chatgpt: 3, copilot: 2, claude: 1, gemini: 1, mistral: 1 } },
  { slug: 'communication', label: 'Communication', w: { chatgpt: 3, claude: 2, gemini: 1, mistral: 1, copilot: 1 } },
  { slug: 'management', label: 'Management', w: { copilot: 3, chatgpt: 2, gemini: 1, claude: 1, mistral: 1 } },
  { slug: 'assistante', label: 'Assistanat de direction', w: { copilot: 4, gemini: 3, chatgpt: 1, claude: 1, mistral: 1 } },
  { slug: 'seo', label: 'SEO et acquisition', w: { chatgpt: 3, gemini: 3, claude: 1, mistral: 1, copilot: 0 } },
  { slug: 'service-client', label: 'Service client', w: { chatgpt: 3, mistral: 2, claude: 1, gemini: 1, copilot: 1 } },
  { slug: 'informatique', label: 'Informatique et IT', w: { claude: 4, chatgpt: 3, gemini: 1, mistral: 2, copilot: 1 } },
  { slug: 'pedagogique', label: 'Métiers pédagogiques', w: { chatgpt: 3, claude: 2, gemini: 2, mistral: 1, copilot: 1 } },
  { slug: 'achats', label: 'Achats', w: { claude: 3, copilot: 2, chatgpt: 1, gemini: 1, mistral: 1 } },
  { slug: 'direction', label: 'Direction générale', w: { claude: 2, chatgpt: 2, copilot: 2, gemini: 1, mistral: 1 } },
]

/* Slugs irréguliers côté spokes (copilot et gemini écrivent « rh »). */
const SPOKE_ALIASES = { 'ressources-humaines': ['ressources-humaines', 'rh'] }
const METIER_HUB_SLUGS = ['marketing', 'ressources-humaines', 'commercial', 'finance', 'communication', 'management', 'assistante', 'seo', 'service-client', 'informatique', 'pedagogique', 'achats']

/* ─────────── Prompts d'essai par métier (matière de formation) ─────────── */

const PROMPTS = {
  juridique: [
    "Voici un contrat de prestation. Liste les clauses qui nous engagent au-delà de 12 mois, celles qui limitent notre responsabilité, et celles qui manquent par rapport à un contrat standard.",
    "Compare ces deux versions du même accord et produis un tableau des écarts, classés par niveau de risque pour nous.",
    "Résume cette décision de justice en 10 lignes pour un dirigeant non juriste, puis indique ce qu'elle change concrètement pour nos contrats en cours.",
  ],
  finance: [
    "À partir de ce tableau de charges, identifie les trois postes qui dérivent le plus par rapport au budget et propose une explication plausible pour chacun.",
    "Rédige la note de synthèse du comité financier à partir de ces chiffres trimestriels : faits marquants, écarts, points de vigilance, en une page.",
    "Transforme cette liasse en cinq indicateurs lisibles par un manager non financier, avec une phrase d'interprétation par indicateur.",
  ],
  marketing: [
    "Voici notre positionnement et trois posts publiés. Rédige cinq nouveaux posts LinkedIn dans le même ton, sur ce sujet, sans reprendre les formulations existantes.",
    "Analyse les retours clients ci-dessous et sors les cinq arguments qui reviennent le plus, formulés comme les clients les disent, pas comme nous les écrivons.",
    "Décline cette offre en trois angles différents : gain de temps, réduction de risque, avantage concurrentiel. Une accroche et trois arguments par angle.",
  ],
  'ressources-humaines': [
    "À partir de cette fiche de poste et de ces trois CV, prépare une grille d'entretien avec les questions qui départagent les candidats sur les compétences clés.",
    "Réécris cette annonce pour qu'elle parle des missions réelles et non de la culture d'entreprise, en gardant nos obligations légales de non-discrimination.",
    "Synthétise ces verbatims d'entretiens annuels en cinq signaux managériaux, sans citer de nom, et propose une action par signal.",
  ],
  commercial: [
    "Voici le compte rendu de mon rendez-vous. Rédige l'email de relance : reprends leurs mots, réponds à leur objection principale, propose une prochaine étape datée.",
    "Prépare ma prochaine négociation : liste leurs objections probables au vu de cet échange, et une réponse courte et factuelle pour chacune.",
    "Transforme ce cahier des charges client en proposition structurée : compréhension du besoin, réponse, livrables, planning.",
  ],
  communication: [
    "Décline cette annonce en trois formats : communiqué de presse, post LinkedIn, message interne aux équipes. Même information, trois registres.",
    "Voici notre charte éditoriale et deux textes validés. Réécris ce brouillon pour qu'il colle au ton, et signale ce qui s'en écarte.",
    "Prépare cinq questions difficiles qu'un journaliste pourrait poser sur ce sujet, avec une réponse courte et honnête pour chacune.",
  ],
  management: [
    "Transforme mes notes de réunion en compte rendu structuré : décisions prises, actions avec responsable et échéance, points en suspens.",
    "Aide-moi à préparer un entretien difficile : voici la situation. Propose une trame en trois temps et les formulations à éviter.",
    "Synthétise ces cinq rapports d'équipe en une page pour mon comité de direction : ce qui avance, ce qui bloque, ce qui demande un arbitrage.",
  ],
  assistante: [
    "Voici ma boîte de réception de la matinée. Classe les messages par urgence réelle, propose une réponse courte pour ceux qui n'appellent qu'un accusé de réception.",
    "À partir de ces échanges, prépare l'ordre du jour de la réunion, le dossier de préparation pour le dirigeant et la liste des documents à réunir.",
    "Rédige le compte rendu de cette réunion à partir de mes notes brutes, avec un tableau des actions et des échéances en fin de document.",
  ],
  seo: [
    "Voici les requêtes sur lesquelles nous sommes en page 2. Propose pour chacune l'intention de recherche réelle et ce qui manque à notre page pour y répondre.",
    "Rédige un brief rédacteur pour ce mot-clé : intention, plan en H2, questions à traiter, ce qu'il ne faut surtout pas écrire.",
    "Analyse ces cinq pages concurrentes et dis-moi ce qu'elles couvrent que nous ne couvrons pas, sans reprendre leur plan.",
  ],
  'service-client': [
    "Voici 20 tickets de cette semaine. Regroupe-les par cause racine et indique les trois corrections qui supprimeraient le plus de tickets.",
    "Réponds à cette réclamation : reconnais le problème, explique ce qui s'est passé sans jargon, propose une solution concrète et un délai.",
    "Transforme ces réponses types en versions plus courtes et plus humaines, sans perdre les mentions obligatoires.",
  ],
  informatique: [
    "Relis ce script et signale les erreurs de logique, les cas non gérés et ce qui poserait problème en production.",
    "Rédige la documentation de ce module pour un développeur qui arrive demain : ce que ça fait, comment l'appeler, les pièges connus.",
    "Transforme ce besoin métier en spécification technique : contraintes, interfaces, cas limites, critères d'acceptation.",
  ],
  pedagogique: [
    "À partir de ce contenu, construis une séquence de formation de 3 heures : objectifs, déroulé, exercice pratique, évaluation.",
    "Génère 10 questions de QCM sur ce support, avec une bonne réponse et trois distracteurs plausibles, plus l'explication de la bonne réponse.",
    "Reformule ce chapitre pour un public débutant : même contenu, phrases plus courtes, un exemple concret par notion.",
  ],
  achats: [
    "Compare ces trois offres fournisseurs sur un tableau : prix, périmètre réel, engagements, ce qui n'est pas inclus et qui coûtera en plus.",
    "Prépare ma négociation : à partir de cette proposition, liste les points où le fournisseur a de la marge et les questions qui le feront réagir.",
    "Rédige le cahier des charges de cette consultation à partir de ces besoins exprimés par les équipes, avec des critères de sélection pondérés.",
  ],
  direction: [
    "Résume ces trois rapports en une note d'une page pour mon comité : ce qui change, ce que ça coûte, ce que je dois arbitrer.",
    "Joue le rôle d'un administrateur sceptique et pose-moi les cinq questions les plus dérangeantes sur ce projet.",
    "Transforme cette stratégie en plan d'action sur 6 mois : jalons, responsables, indicateurs de réussite.",
  ],
}

/* ─────────── Moteur de scoring ─────────── */

/* Pondération des quatre composantes. Le métier pèse peu à dessein : il recoupe
   largement les usages, que l'utilisateur a déjà déclarés explicitement. Le
   compter lourdement reviendrait à valoriser deux fois la même réalité. */
const POIDS = { usages: 0.55, suite: 0.25, contraintes: 0.15, metier: 0.05 }
const NEUTRE = 50 // composante non renseignée : n'avantage personne

/* Score sur 100 par composante, puis moyenne pondérée. Les usages sont MOYENNÉS
   et non additionnés : cocher dix cases ne doit pas noyer les critères
   structurels (suite déployée, contraintes), c'est ce qui faisait passer un
   éditeur non européen devant Mistral malgré une exigence de souveraineté. */
function computeRanking({ metier, usages, env, contraintes, souverainete }) {
  const m = METIERS.find(x => x.slug === metier)
  const e = ENVS.find(x => x.id === env)
  const cts = CONTRAINTES.filter(x => contraintes.includes(x.id))

  const rows = TOOL_KEYS.map(k => {
    const usageFits = usages
      .map(id => USAGES.find(u => u.id === id))
      .filter(Boolean)
      .map(u => ((u.w[k] || 0) / 3) * 100)
    const cUsages = usageFits.length ? usageFits.reduce((a, b) => a + b, 0) / usageFits.length : NEUTRE
    const cSuite = e ? e.fit[k] : NEUTRE
    const cContraintes = cts.length ? cts.reduce((a, ct) => a + ct.fit[k], 0) / cts.length : NEUTRE
    const cMetier = m ? ((m.w[k] || 0) / 4) * 100 : NEUTRE

    const score = cUsages * POIDS.usages + cSuite * POIDS.suite + cContraintes * POIDS.contraintes + cMetier * POIDS.metier

    // Usages où l'outil est au meilleur niveau, et ceux où il décroche : sert à
    // expliquer le résultat honnêtement, forces ET faiblesses.
    const forts = usages.map(id => USAGES.find(u => u.id === id)).filter(u => u && (u.w[k] || 0) >= 3).map(u => u.short)
    const faibles = usages.map(id => USAGES.find(u => u.id === id)).filter(u => u && (u.w[k] || 0) <= 1).map(u => u.short)

    return {
      key: k,
      score: Math.round(score),
      composantes: {
        usages: Math.round(cUsages),
        suite: Math.round(cSuite),
        contraintes: Math.round(cContraintes),
        metier: Math.round(cMetier),
      },
      forts,
      faibles,
      eligible: !souverainete || SOUVERAINETE.eligibles.includes(k),
    }
  })

  // Départage explicite plutôt qu'arbitraire : à score égal, la composante la
  // plus substantielle (l'adéquation aux usages) tranche, puis la suite.
  const tri = (a, b) =>
    b.score - a.score ||
    b.composantes.usages - a.composantes.usages ||
    b.composantes.suite - a.composantes.suite
  const eligibles = rows.filter(r => r.eligible).sort(tri)
  const ecartes = rows.filter(r => !r.eligible).sort(tri)
  // Ce qu'aurait donné le classement SANS la contrainte éliminatoire : on le dit.
  const sansFiltre = [...rows].sort(tri)

  return { ranking: eligibles, ecartes, sansFiltre }
}

/* Formation à recommander : spoke outil×métier si la page existe, sinon hub outil. */
function formationFor(toolKey, metierSlug) {
  const tool = TOOLS[toolKey]
  for (const v of (SPOKE_ALIASES[metierSlug] || [metierSlug])) {
    const s = `formation-${tool.spoke}-${v}`
    if (SPOKE_SLUGS.includes(s)) return { href: `/${s}`, label: `Formation ${tool.short} pour votre métier` }
  }
  return { href: `/${tool.hub}`, label: `Toutes les formations ${tool.short}` }
}

/* Combinaison à deux outils : pertinente quand un outil bureautique arrive en tête
   alors que des usages de fond (documents, code, automatisation) sont cochés,
   ou l'inverse quand la suite est déployée et les usages bureautiques présents. */
function computeCombo(ranking, { usages, env }) {
  const first = ranking[0]
  const bureautique = ['copilot', 'gemini']
  const fond = usages.some(u => ['docs', 'code', 'automatisation'].includes(u))
  const quotidien = usages.some(u => ['emails', 'slides', 'tableaux'].includes(u))

  if (bureautique.includes(first.key) && fond) {
    const partner = ranking.find(r => !bureautique.includes(r.key))
    if (partner) return { first, partner, why: "vos usages de fond (documents longs, technique ou automatisation) dépassent ce que fait une IA intégrée à la bureautique" }
  }
  if (!bureautique.includes(first.key) && quotidien && (env === 'm365' || env === 'workspace')) {
    const wanted = env === 'm365' ? 'copilot' : 'gemini'
    const partner = ranking.find(r => r.key === wanted)
    if (partner) return { first, partner, why: "votre suite bureautique est déjà déployée et une partie de vos usages vit dans les documents et la messagerie" }
  }
  return null
}

/* ─────────── Lexique (ancrage d'entités GEO → DefinedTermSet) ─────────── */

const LEXIQUE = [
  { t: 'LLM (grand modèle de langage)', d: "Le moteur derrière ChatGPT, Claude, Copilot, Gemini et Mistral : un modèle entraîné sur de vastes corpus de texte, capable de rédiger, synthétiser, analyser et raisonner à partir d'instructions en langage naturel." },
  { t: 'Suite bureautique intégrée', d: "L'IA installée directement dans les documents et la messagerie : Copilot dans Microsoft 365, Gemini dans Google Workspace. L'intégration évite les copier-coller mais n'a de valeur que si la suite est réellement déployée." },
  { t: 'Souveraineté des données', d: "La localisation et la juridiction qui s'appliquent à vos données : hébergement en Europe, droit européen, acteur européen. Le critère qui fait choisir Mistral à certaines organisations publiques et régulées." },
  { t: 'Fenêtre de contexte', d: "La quantité de texte qu'un modèle peut traiter en une fois. Une grande fenêtre permet d'analyser des contrats ou rapports entiers sans les découper, la force historique de Claude sur les documents longs." },
]

const FAQ = [
  { q: 'Quelle est la meilleure IA pour une entreprise en 2026 ?', a: "Aucun outil ne domine tous les usages : ChatGPT est le plus polyvalent et le plus adopté, Claude est la référence des documents longs et de la rédaction rigoureuse, Copilot et Gemini gagnent quand les équipes vivent déjà dans Microsoft 365 ou Google Workspace, Mistral répond à l'exigence de souveraineté européenne. La bonne question est celle de vos cas d'usage : ce simulateur les pondère pour produire un classement argumenté, une formation panorama permet de trancher sur vos vrais documents." },
  { q: 'Sur quoi repose le classement produit par ce simulateur ?', a: "Sur une grille de pondération que nous assumons comme éditoriale : chaque usage, contrainte, environnement et métier attribue des points aux cinq outils, selon leur positionnement public et ce que nous observons en formation depuis 2022. Elle est publiée en bas de page, critère par critère, pour que vous puissiez la contester. Ce n'est pas un benchmark de performance des modèles : ceux-ci évoluent tous les trimestres, les profils d'usage beaucoup moins." },
  { q: 'Faut-il attendre que les modèles se stabilisent avant de choisir ?', a: "Non, pour deux raisons. D'abord les usages en cachette existent déjà dans la plupart des équipes : attendre, c'est laisser des données partir vers des comptes personnels non cadrés. Ensuite les compétences se transfèrent : une équipe formée au prompting et aux bons réflexes sur un outil bascule vers un autre en quelques jours. On choisit un point de départ et un cadre, pas un mariage définitif." },
  { q: 'ChatGPT ou Claude, comment trancher ?', a: "Par la nature du travail. Pour la polyvalence quotidienne (emails, brainstorming, contenus variés, écosystème d'intégrations), ChatGPT reste le point d'entrée le plus naturel. Dès que le volume documentaire et la rigueur priment (contrats, rapports d'audit, mémoires techniques, appels d'offres), Claude prend l'avantage grâce à sa gestion des documents longs et sa fidélité au texte source. Beaucoup d'équipes finissent avec les deux, chacun sur son terrain." },
  { q: 'Copilot ou Gemini ?', a: "Suivez votre suite bureautique : Copilot n'a de sens plein que dans Microsoft 365, Gemini que dans Google Workspace. Choisir l'IA de l'autre écosystème revient à payer une intégration dont vous ne profiterez pas. Si votre environnement est mixte ou en cours de choix, un outil indépendant de la suite (ChatGPT, Claude ou Mistral) évite de figer la décision." },
  { q: 'Peut-on utiliser plusieurs outils en même temps ?', a: "Oui, et les organisations matures le font : un outil bureautique intégré (Copilot ou Gemini) pour le quotidien dans les documents, et un assistant généraliste (ChatGPT, Claude ou Mistral) pour les tâches de fond. Le simulateur propose d'ailleurs cette combinaison quand vos réponses la justifient. L'important est un cadre d'usage clair : qui utilise quoi, avec quelles données." },
  { q: 'Faut-il une IA souveraine, et laquelle ?', a: "Tout dépend de ce que recouvre votre exigence, et la confusion coûte cher. Si elle porte sur la localisation des données, les offres entreprise des cinq acteurs permettent un traitement en Europe : le critère ne départage plus grand-chose. Si elle porte sur la nationalité de l'éditeur, parce que vous voulez échapper au droit extraterritorial américain, alors Mistral AI est le seul des cinq à être une société européenne, et le débat s'arrête là. C'est pour cette raison que notre comparateur traite cette exigence comme éliminatoire et non comme un bonus : une obligation réglementaire ne se compense pas par de meilleures performances ailleurs." },
  { q: 'Et la confidentialité des données ?', a: "Elle se règle par le choix de l'offre, pas seulement de l'outil : les offres professionnelles des cinq acteurs excluent par défaut vos données de l'entraînement des modèles, ce que ne garantissent pas les comptes gratuits grand public. La règle d'or : des comptes professionnels administrés, une charte d'usage écrite, et la liste de ce qui ne doit jamais être saisi. Ce cadrage fait partie de chacune de nos formations." },
  { q: 'Cette recommandation vaut-elle décision définitive ?', a: "Non, elle donne un point de départ argumenté. Le bon choix dépend aussi de vos documents réels, de vos volumes et de vos contraintes d'achat. Pour décider en connaissance de cause : une formation panorama multi-outils qui compare les cinq sur vos propres cas, ou un échange de cadrage gratuit avec Masteria." },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #E5E7EB' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '18px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4, fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <ChevronDown size={18} strokeWidth={2} style={{ flexShrink: 0, color: '#6B7280', marginTop: 2, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
      </button>
      <div aria-hidden={!open} style={{ maxHeight: open ? 1200 : 0, overflow: 'hidden', transition: 'max-height 0.32s ease' }}>
        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.75, paddingBottom: 18, margin: 0 }}>{a}</p>
      </div>
    </div>
  )
}

/* ─────────── UI : anneau d'écart avec le second ───────────
   Affiche l'avance du premier sur le deuxième, pas un score absolu :
   le gagnant est toujours à 100 en relatif, ce qui n'apprendrait rien. */

function ScoreRing({ score, color, mounted }) {
  const R = 34, C = 2 * Math.PI * R
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="42" cy="42" r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
      <circle
        cx="42" cy="42" r={R} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
        strokeDasharray={C}
        strokeDashoffset={mounted ? C - (C * score) / 100 : C}
        transform="rotate(-90 42 42)"
        style={{ transition: 'stroke-dashoffset 900ms cubic-bezier(0.22,1,0.36,1)' }}
      />
      <text x="42" y="45" textAnchor="middle" fill="#fff" style={{ font: '800 19px Nunito, sans-serif' }}>{score}</text>
      <text x="42" y="59" textAnchor="middle" fill="#94A3B8" style={{ font: '700 8px DM Sans, sans-serif', letterSpacing: '0.06em' }}>
        SUR 100
      </text>
    </svg>
  )
}

/* Verdict de netteté du classement, formulé honnêtement. */
function verdictEcart(gap, secondName) {
  if (gap >= 20) return { ton: 'net', texte: `Écart net avec le deuxième (${secondName}) : sur ce profil, le choix se discute peu.` }
  if (gap >= 8) return { ton: 'clair', texte: `Avance réelle mais pas écrasante sur ${secondName} : les deux tiennent la route, celui-ci coche plus de cases.` }
  return { ton: 'serre', texte: `Résultat serré avec ${secondName} : les deux se défendent sur votre profil, testez-les côte à côte avant de trancher.` }
}

/* ─────────── Maillage croisé ─────────── */

const AUTRES_OUTILS = [
  { href: '/quel-opco', label: 'Quel est mon OPCO ? (simulateur)' },
  { href: '/test-maturite-ia', label: 'Test de maturité IA (3 min)' },
  { href: '/bibliotheque-de-prompts', label: 'Bibliothèque de 112 prompts' },
]

const PAGE_URL = 'https://www.master-ia.fr/quel-outil-ia'

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${PAGE_URL}#app`,
  name: 'Quel outil IA pour votre métier ? — comparateur',
  url: PAGE_URL,
  description: "Comparateur gratuit : vos usages, votre environnement, vos contraintes et votre métier sont pondérés pour classer ChatGPT, Claude, Microsoft Copilot, Google Gemini et Mistral AI, avec le raisonnement, la combinaison à deux outils et des prompts d'essai.",
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  provider: { '@id': 'https://www.master-ia.fr/#organization' },
  inLanguage: 'fr-FR',
}

const definedTermsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${PAGE_URL}#lexique`,
  name: "Lexique du choix d'un outil IA",
  hasDefinedTerm: LEXIQUE.map(({ t, d }) => ({ '@type': 'DefinedTerm', name: t, description: d })),
}

/* ─────────── Page ─────────── */

export default function QuelOutilIAPage() {
  const [metier, setMetier] = useState('')
  const [usages, setUsages] = useState([])
  const [env, setEnv] = useState('')
  const [contraintes, setContraintes] = useState([])
  const [souverainete, setSouverainete] = useState(false)
  const [onglet, setOnglet] = useState('pourquoi')
  const [mounted, setMounted] = useState(false)

  const done = Boolean(metier) && usages.length > 0
  const resultat = useMemo(
    () => (done ? computeRanking({ metier, usages, env, contraintes, souverainete }) : null),
    [done, metier, usages, env, contraintes, souverainete],
  )
  const ranking = resultat?.ranking || null
  const ecartes = resultat?.ecartes || []
  const sansFiltre = resultat?.sansFiltre || []
  const combo = useMemo(() => (ranking ? computeCombo(ranking, { usages, env }) : null), [ranking, usages, env])

  // Animation des barres et de l'anneau au premier rendu du résultat
  useEffect(() => {
    if (!done) { setMounted(false); return }
    const id = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(id)
  }, [done, metier, usages, env, contraintes, souverainete])

  const toggle = (list, setList) => (id) =>
    setList(list.includes(id) ? list.filter(x => x !== id) : [...list, id])
  const toggleUsage = toggle(usages, setUsages)
  const toggleContrainte = toggle(contraintes, setContraintes)

  const winner = ranking?.[0]
  const second = ranking?.[1]
  const gap = winner && second && winner.score > 0
    ? Math.round(((winner.score - second.score) / winner.score) * 100)
    : 0
  const verdict = winner && second ? verdictEcart(gap, TOOLS[second.key].short) : null
  const tool = winner ? TOOLS[winner.key] : null
  // Si la souveraineté a écarté un outil qui aurait gagné, on le dit franchement.
  const evinceParSouverainete = souverainete && sansFiltre[0] && sansFiltre[0].key !== winner?.key
    ? sansFiltre[0]
    : null
  const formation = winner ? formationFor(winner.key, metier) : null
  const metierLabel = METIERS.find(m => m.slug === metier)?.label
  const metierHub = METIER_HUB_SLUGS.includes(metier) ? `/formation-ia-${metier}` : null
  const prompts = PROMPTS[metier] || []

  const etapes = [Boolean(metier), usages.length > 0, Boolean(env) || contraintes.length > 0 || souverainete]
  const progression = Math.round((etapes.filter(Boolean).length / 3) * 100)

  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Quelle est la meilleure IA ?', slug: 'quelle-est-la-meilleure-ia' },
    { name: 'Quel outil IA pour votre métier ?', slug: 'quel-outil-ia' },
  ]

  const chip = (selected, color = c) => ({
    display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', textAlign: 'left',
    border: `2px solid ${selected ? color : '#E5E7EB'}`, background: selected ? '#F8FAFF' : '#fff',
    borderRadius: 12, padding: '13px 15px', fontFamily: 'DM Sans, sans-serif',
    transition: 'border-color 160ms, background 160ms, transform 160ms',
    transform: selected ? 'translateY(-1px)' : 'none', width: '100%',
  })

  return (
    <>
      <SEOHead
        title="Quel outil IA choisir pour votre métier ? | Masteria"
        description="Comparateur gratuit : vos usages, votre environnement et votre métier classent ChatGPT, Claude, Copilot, Gemini et Mistral, avec le raisonnement et des prompts d'essai."
        slug="quel-outil-ia"
        breadcrumbs={breadcrumbs}
        faqItems={FAQ}
        keywords="quel outil ia choisir, quelle ia choisir, comparateur ia entreprise, chatgpt ou claude, copilot ou gemini, meilleur outil ia métier"
        datePublished="2026-08-07"
        dateModified="2026-08-07"
        speakable={['#geo-summary', '#grille']}
        citations={[
          { name: "Les Échos — ChatGPT, Claude, Copilot, Gemini, Mistral : comment choisir l'IA la plus adaptée à son métier", url: 'https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741' },
        ]}
        extraJsonLd={[webAppJsonLd, definedTermsJsonLd]}
      />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: 'clamp(44px, 6vw, 64px) 24px clamp(48px, 7vw, 72px)', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -140, right: -100, width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16), rgba(37,99,235,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#5B6679', display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#5B6679' }}>Accueil</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <Link to="/quelle-est-la-meilleure-ia" style={{ color: '#5B6679' }}>Quelle est la meilleure IA ?</Link>
            <span style={{ color: '#3A4658' }}>/</span>
            <span style={{ color: '#93C5FD', fontWeight: 600 }}>Quel outil pour votre métier ?</span>
          </nav>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(37,99,235,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} strokeWidth={2.2} style={{ color: '#60A5FA' }} />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7DA9F0' }}>Comparateur gratuit · 2 minutes</span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 16, color: '#F8FAFC', letterSpacing: '-0.03em', maxWidth: 800 }}>
            Quel outil IA choisir pour votre métier&nbsp;?
          </h1>

          <p style={{ fontSize: 13.5, color: '#94A3B8', margin: '0 0 20px' }}>
            Par <Link to="/centre-formation-ia-entreprise" style={{ color: '#E2E8F0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Mathias Nizan</Link>, fondateur de Masteria · Mis à jour en août 2026
          </p>

          <p id="geo-summary" style={{ fontSize: 'clamp(16px, 2.2vw, 18.5px)', fontWeight: 500, color: '#E2E8F0', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 720, paddingLeft: 20, borderLeft: `3px solid ${c}` }}>
            ChatGPT, Claude, Copilot, Gemini ou Mistral : aucun ne domine tous les usages, et un outil mal choisi finit contourné par les équipes. Ce comparateur pondère vos usages réels, votre environnement, vos contraintes et votre métier, puis classe les cinq outils en expliquant ce qui a pesé.
          </p>

          <nav aria-label="Sur cette page" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
            {[['Le comparateur', '#comparateur'], ['Grille d’arbitrage', '#grille'], ['Les 5 outils', '#profils-outils'], ['Lexique', '#lexique'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', textDecoration: 'none', border: '1px solid #2A3650', borderRadius: 99, padding: '6px 12px' }}>
                {label}
              </a>
            ))}
          </nav>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: 16, padding: 'clamp(18px, 3vw, 24px)', maxWidth: 720 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 12 }}>En bref</div>
            <dl style={{ margin: 0 }}>
              {[
                ['Ce qui entre', '9 usages métier, votre suite bureautique, 3 contraintes, 14 métiers'],
                ['Ce qui sort', 'Les 5 outils classés avec un score, le raisonnement critère par critère, et ce qui aurait fait gagner les autres'],
                ['En plus', "La combinaison à deux outils quand elle s'impose, et 3 prompts d'essai propres à votre métier"],
                ['Méthode', 'Grille de pondération éditoriale, publiée en bas de page'],
              ].map(([label, value], i) => (
                <div key={label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '8px 0', borderTop: i === 0 ? 'none' : '1px solid #1E293B' }}>
                  <dt style={{ flex: '0 0 130px', fontWeight: 800, fontSize: 13, color: '#E2E8F0', fontFamily: 'Nunito, sans-serif' }}>{label}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 13.5, color: '#94A3B8', lineHeight: 1.55 }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── LE COMPARATEUR ── */}
      <section id="comparateur" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* Barre de progression */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 30, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 240px', height: 6, background: '#F3F4F6', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ width: `${progression}%`, height: '100%', background: c, borderRadius: 99, transition: 'width 420ms cubic-bezier(0.22,1,0.36,1)' }} />
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: progression === 100 ? c : '#6B7280', fontFamily: 'Nunito, sans-serif' }}>
              {etapes.filter(Boolean).length} / 3 renseigné{etapes.filter(Boolean).length > 1 ? 's' : ''}
            </span>
          </div>

          {/* 1. Métier */}
          <div style={{ marginBottom: 32 }}>
            <label htmlFor="metier-select" style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>
              1. Votre métier
            </label>
            <p style={{ fontSize: 13.5, color: '#6B7280', margin: '0 0 12px' }}>Il pondère le classement et détermine les prompts d'essai proposés.</p>
            <select
              id="metier-select"
              value={metier}
              onChange={e => setMetier(e.target.value)}
              style={{ width: '100%', maxWidth: 420, padding: '13px 14px', borderRadius: 10, border: `1px solid ${metier ? c : '#D1D5DB'}`, fontSize: 15, color: '#0A0A0A', background: '#F9FAFB', fontFamily: 'DM Sans, sans-serif' }}
            >
              <option value="">Sélectionnez votre métier…</option>
              {METIERS.map(m => <option key={m.slug} value={m.slug}>{m.label}</option>)}
            </select>
          </div>

          {/* 2. Usages */}
          <fieldset style={{ border: 'none', padding: 0, margin: '0 0 32px' }}>
            <legend style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>
              2. Ce que vos équipes feront avec l'IA
            </legend>
            <p style={{ fontSize: 13.5, color: '#6B7280', margin: '0 0 12px' }}>
              Cochez ce qui pèse dans leur quotidien {usages.length > 0 && <strong style={{ color: c }}>· {usages.length} sélectionné{usages.length > 1 ? 's' : ''}</strong>}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 265px), 1fr))', gap: 10 }}>
              {USAGES.map(({ id, icon: Icon, label, ex }) => {
                const on = usages.includes(id)
                return (
                  <label key={id} style={chip(on)}>
                    <input type="checkbox" checked={on} onChange={() => toggleUsage(id)} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
                    <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 9, background: on ? c : '#F3F4F6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 160ms' }}>
                      {on ? <Check size={17} color="#fff" strokeWidth={3} /> : <Icon size={17} color="#6B7280" strokeWidth={2} />}
                    </span>
                    <span>
                      <span style={{ display: 'block', fontSize: 14.5, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.35 }}>{label}</span>
                      <span style={{ display: 'block', fontSize: 12.5, color: '#6B7280', marginTop: 2 }}>{ex}</span>
                    </span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          {/* 3. Environnement + contraintes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 28, marginBottom: 34 }}>
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <legend style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>3. Votre suite bureautique</legend>
              <p style={{ fontSize: 13.5, color: '#6B7280', margin: '0 0 12px' }}>Celle qui est réellement déployée aujourd'hui.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {ENVS.map(e => {
                  const on = env === e.id
                  return (
                    <label key={e.id} style={chip(on)}>
                      <input type="radio" name="env" checked={on} onChange={() => setEnv(e.id)} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
                      <span aria-hidden="true" style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${on ? c : '#D1D5DB'}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        {on && <span style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />}
                      </span>
                      <span>
                        <span style={{ display: 'block', fontSize: 14.5, fontWeight: 700, color: '#0A0A0A' }}>{e.label}</span>
                        <span style={{ display: 'block', fontSize: 12.5, color: '#6B7280', marginTop: 2 }}>{e.ex}</span>
                      </span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <legend style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>4. Vos contraintes</legend>
              <p style={{ fontSize: 13.5, color: '#6B7280', margin: '0 0 12px' }}>Facultatif, mais souvent décisif.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {CONTRAINTES.map(({ id, icon: Icon, label, ex }) => {
                  const on = contraintes.includes(id)
                  return (
                    <label key={id} style={chip(on)}>
                      <input type="checkbox" checked={on} onChange={() => toggleContrainte(id)} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
                      <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 9, background: on ? c : '#F3F4F6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 160ms' }}>
                        {on ? <Check size={17} color="#fff" strokeWidth={3} /> : <Icon size={17} color="#6B7280" strokeWidth={2} />}
                      </span>
                      <span>
                        <span style={{ display: 'block', fontSize: 14.5, fontWeight: 700, color: '#0A0A0A' }}>{label}</span>
                        <span style={{ display: 'block', fontSize: 12.5, color: '#6B7280', marginTop: 2 }}>{ex}</span>
                      </span>
                    </label>
                  )
                })}

                {/* Contrainte éliminatoire, visuellement distinguée des pondérées */}
                <label style={{ ...chip(souverainete, '#D97706'), background: souverainete ? '#FFFBEB' : '#fff', marginTop: 4 }}>
                  <input type="checkbox" checked={souverainete} onChange={() => setSouverainete(s => !s)} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
                  <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 9, background: souverainete ? '#D97706' : '#F3F4F6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 160ms' }}>
                    {souverainete ? <Check size={17} color="#fff" strokeWidth={3} /> : <ShieldCheck size={17} color="#6B7280" strokeWidth={2} />}
                  </span>
                  <span>
                    <span style={{ display: 'block', fontSize: 14.5, fontWeight: 700, color: '#0A0A0A' }}>{SOUVERAINETE.label}</span>
                    <span style={{ display: 'block', fontSize: 12.5, color: '#6B7280', marginTop: 2 }}>{SOUVERAINETE.ex}</span>
                    <span style={{ display: 'inline-block', marginTop: 6, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#92400E', background: '#FEF3C7', borderRadius: 99, padding: '3px 9px' }}>
                      Critère éliminatoire
                    </span>
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* ── RÉSULTAT ── */}
          <div aria-live="polite">
            {!done && (
              <div style={{ border: '1px dashed #D1D5DB', borderRadius: 14, padding: '22px 24px', background: '#F9FAFB' }}>
                <p style={{ fontSize: 14.5, color: '#374151', margin: 0, lineHeight: 1.6 }}>
                  Le classement des cinq outils s'affiche ici dès que vous avez choisi un métier et au moins un usage. La suite bureautique et les contraintes affinent le résultat.
                </p>
              </div>
            )}

            {done && winner && (
              <div>
                {/* Gagnant */}
                <div style={{ position: 'relative', overflow: 'hidden', background: '#0A0F1E', borderRadius: 18, padding: 'clamp(22px, 3.5vw, 34px)', marginBottom: 14 }}>
                  <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: tool.color }} />
                  <div aria-hidden="true" style={{ position: 'absolute', top: -110, right: -70, width: 320, height: 320, borderRadius: '50%', background: `radial-gradient(circle, ${tool.color}26, transparent 68%)`, pointerEvents: 'none' }} />
                  <div style={{ position: 'relative', display: 'flex', gap: 22, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <ScoreRing score={winner.score} color={tool.color} mounted={mounted} />
                    <div style={{ flex: 1, minWidth: 260 }}>
                      <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7DA9F0', marginBottom: 8 }}>
                        Recommandé pour {metierLabel ? metierLabel.toLowerCase() : 'votre métier'}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                        <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ToolLogo tool={tool.logo} size={24} color={tool.color} />
                        </span>
                        <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>{tool.name}</h3>
                      </div>
                      {verdict && (
                        <p style={{ fontSize: 13.5, color: verdict.ton === 'serre' ? '#FBBF24' : '#93C5FD', fontWeight: 600, lineHeight: 1.6, margin: '0 0 10px' }}>
                          {verdict.texte}
                        </p>
                      )}
                      <p style={{ fontSize: 14.5, color: '#CBD5E1', lineHeight: 1.7, margin: '0 0 16px' }}>{tool.pitch}</p>
                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        <Link to={formation.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '12px 22px', borderRadius: 10, textDecoration: 'none', fontSize: 14.5, fontWeight: 700 }}>
                          {formation.label} <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                        <button
                          onClick={() => { setMetier(''); setUsages([]); setEnv(''); setContraintes([]); setSouverainete(false); setOnglet('pourquoi') }}
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'transparent', border: '1px solid #2A3650', borderRadius: 10, padding: '12px 18px', fontSize: 14, fontWeight: 600, color: '#E2E8F0', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          <RefreshCw size={14} aria-hidden="true" /> Recommencer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Effet de la contrainte éliminatoire, dit franchement */}
                {evinceParSouverainete && (
                  <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderLeft: '4px solid #D97706', borderRadius: 12, padding: '16px 20px', marginBottom: 14 }}>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>
                      <strong style={{ color: '#0A0A0A' }}>Sans votre exigence d'éditeur européen, {TOOLS[evinceParSouverainete.key].short} arrivait en tête ({evinceParSouverainete.score}/100).</strong>{' '}
                      Mistral AI est le seul éditeur européen des cinq : c'est ce qui le place devant ici, pas une supériorité sur vos usages.
                    </p>
                    <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                      Nuance qui change souvent la décision : si votre exigence porte sur la <strong>localisation des données</strong> et non sur la nationalité de l'éditeur, les offres entreprise des quatre autres permettent un traitement en Europe. Elles restent éditées par des sociétés américaines, donc exposées au droit extraterritorial. Cet arbitrage se tranche avec votre direction juridique, pas avec un simulateur.
                    </p>
                  </div>
                )}

                {/* Combinaison recommandée */}
                {combo && (
                  <div style={{ background: '#F8FAFF', border: `1px solid #BFDBFE`, borderLeft: `4px solid ${c}`, borderRadius: 12, padding: '16px 20px', marginBottom: 14 }}>
                    <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                      <strong style={{ color: '#0A0A0A' }}>Combinaison à envisager : {TOOLS[combo.first.key].short} + {TOOLS[combo.partner.key].short}.</strong>{' '}
                      C'est ce que font les organisations les plus avancées, et vos réponses le justifient : {combo.why}. Un outil pour le quotidien dans vos documents, l'autre pour les tâches de fond, avec une règle claire sur qui utilise quoi.
                    </p>
                  </div>
                )}

                {/* Classement complet */}
                <div style={{ ...cardStyle, padding: 'clamp(20px, 3vw, 28px)', marginBottom: 14 }}>
                  <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 16px' }}>
                    Le classement des cinq, sur vos réponses
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {ranking.map((r, i) => {
                      const t = TOOLS[r.key]
                      return (
                        <div key={r.key}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: i === 0 ? '#0A0A0A' : '#9CA3AF', width: 18 }}>{i + 1}</span>
                            <ToolLogo tool={t.logo} size={16} color={t.color} />
                            <span style={{ fontSize: 14, fontWeight: i === 0 ? 800 : 600, color: i === 0 ? '#0A0A0A' : '#374151', flex: 1, fontFamily: 'Nunito, sans-serif' }}>{t.short}</span>
                            <span style={{ fontSize: 13, fontWeight: 700, color: i === 0 ? t.color : '#9CA3AF' }}>{r.score}</span>
                          </div>
                          <div style={{ height: 8, background: '#F3F4F6', borderRadius: 99, overflow: 'hidden' }}>
                            <div style={{
                              width: mounted ? `${r.score}%` : '0%', height: '100%', background: t.color, borderRadius: 99,
                              transition: `width 800ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`, opacity: i === 0 ? 1 : 0.72,
                            }} />
                          </div>
                        </div>
                      )
                    })}

                    {/* Outils écartés par la contrainte éliminatoire */}
                    {ecartes.length > 0 && (
                      <div style={{ marginTop: 6, paddingTop: 14, borderTop: '1px dashed #E5E7EB' }}>
                        <p style={{ fontSize: 12.5, fontWeight: 700, color: '#92400E', margin: '0 0 10px', fontFamily: 'Nunito, sans-serif' }}>
                          Écartés par votre exigence d'éditeur européen
                        </p>
                        {ecartes.map(r => {
                          const t = TOOLS[r.key]
                          return (
                            <div key={r.key} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0', opacity: 0.5 }}>
                              <span style={{ width: 18 }} />
                              <ToolLogo tool={t.logo} size={15} color={t.color} />
                              <span style={{ fontSize: 13.5, color: '#6B7280', flex: 1, fontFamily: 'Nunito, sans-serif' }}>{t.short}</span>
                              <span style={{ fontSize: 12.5, color: '#9CA3AF' }}>aurait obtenu {r.score}</span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                  <p style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.6, margin: '16px 0 0' }}>
                    Score sur 100 : le taux de correspondance avec votre profil, calculé sur la <a href="#grille" style={{ color: c, fontWeight: 600 }}>grille d'arbitrage</a> publiée plus bas (usages 55 %, suite bureautique 25 %, contraintes 15 %, métier 5 %). Quelques points d'écart ne départagent pas deux outils ; au-delà de dix, la différence est structurelle.
                  </p>
                </div>

                {/* Onglets d'explication */}
                <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
                  <div role="tablist" aria-label="Détail de la recommandation" style={{ display: 'flex', borderBottom: '1px solid #E5E7EB', flexWrap: 'wrap' }}>
                    {[
                      ['pourquoi', 'Pourquoi ce choix'],
                      ['autres', 'Pourquoi pas les autres'],
                      ['prompts', 'À tester aujourd’hui'],
                    ].map(([id, label]) => (
                      <button
                        key={id} role="tab" aria-selected={onglet === id} onClick={() => setOnglet(id)}
                        style={{
                          flex: '1 1 auto', padding: '14px 16px', background: onglet === id ? '#fff' : '#F9FAFB',
                          border: 'none', borderBottom: `2px solid ${onglet === id ? c : 'transparent'}`,
                          fontSize: 13.5, fontWeight: onglet === id ? 800 : 600, color: onglet === id ? '#0A0A0A' : '#6B7280',
                          cursor: 'pointer', fontFamily: 'Nunito, sans-serif', transition: 'background 160ms, color 160ms',
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div style={{ padding: 'clamp(20px, 3vw, 26px)' }}>
                    {onglet === 'pourquoi' && (
                      <div>
                        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>
                          Le détail du score de {TOOLS[winner.key].short}, composante par composante :
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 18 }}>
                          {[
                            ['Vos usages', winner.composantes.usages, '55 %'],
                            ['Votre suite bureautique', winner.composantes.suite, '25 %'],
                            ['Vos contraintes', winner.composantes.contraintes, '15 %'],
                            ['Votre métier', winner.composantes.metier, '5 %'],
                          ].map(([label, val, poids]) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <span style={{ fontSize: 13.5, color: '#374151', flex: '0 0 165px' }}>{label}</span>
                              <div style={{ flex: 1, height: 6, background: '#F3F4F6', borderRadius: 99, overflow: 'hidden' }}>
                                <div style={{ width: `${val}%`, height: '100%', background: TOOLS[winner.key].color, borderRadius: 99, opacity: 0.85 }} />
                              </div>
                              <span style={{ fontSize: 12.5, fontWeight: 700, color: '#0A0A0A', width: 30, textAlign: 'right' }}>{val}</span>
                              <span style={{ fontSize: 11.5, color: '#9CA3AF', width: 34, textAlign: 'right' }}>{poids}</span>
                            </div>
                          ))}
                        </div>
                        {winner.forts.length > 0 && (
                          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>
                            <Check size={15} color={c} strokeWidth={3} style={{ verticalAlign: -2, marginRight: 6 }} aria-hidden="true" />
                            Au meilleur niveau sur vos usages de : {winner.forts.join(', ')}.
                          </p>
                        )}
                        {winner.faibles.length > 0 && (
                          <p style={{ fontSize: 14, color: '#92400E', lineHeight: 1.7, margin: '0 0 14px' }}>
                            Plus faible, en revanche, sur : {winner.faibles.join(', ')}. C'est le point à couvrir autrement, éventuellement par un second outil.
                          </p>
                        )}
                        <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                          Pour creuser le duel le plus fréquent sur ce profil : <Link to={`/${TOOLS[winner.key].comparatif.slug}`} style={{ color: c, fontWeight: 600 }}>{TOOLS[winner.key].comparatif.label}</Link>
                          {metierHub && <> · <Link to={metierHub} style={{ color: c, fontWeight: 600 }}>toutes les formations IA {metierLabel ? `en ${metierLabel.toLowerCase()}` : 'de votre métier'}</Link></>}
                        </p>
                      </div>
                    )}

                    {onglet === 'autres' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {ranking.slice(1).map(r => {
                          const t = TOOLS[r.key]
                          return (
                            <div key={r.key} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                              <span style={{ width: 30, height: 30, borderRadius: 8, background: '#F3F4F6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <ToolLogo tool={t.logo} size={16} color={t.color} />
                              </span>
                              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                                <strong style={{ color: '#0A0A0A' }}>{t.short}</strong> passerait devant avec {t.edge}.
                              </p>
                            </div>
                          )
                        })}
                        <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.65, margin: '4px 0 0' }}>
                          Aucun de ces outils n'est disqualifié : ils sont classés sur VOS réponses, pas dans l'absolu.
                        </p>
                      </div>
                    )}

                    {onglet === 'prompts' && (
                      <div>
                        <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 14px' }}>
                          Trois prompts tirés de nos formations {metierLabel ? metierLabel.toLowerCase() : ''}, à essayer sur un vrai document dès aujourd'hui :
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {prompts.map((p, i) => (
                            <div key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `3px solid ${TOOLS[winner.key].color}`, borderRadius: '0 10px 10px 0', padding: '13px 16px' }}>
                              <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.65, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>{p}</p>
                            </div>
                          ))}
                        </div>
                        <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.7, margin: '14px 0 0' }}>
                          Ils fonctionnent sur les cinq outils. Sur {TOOLS[winner.key].short}, {TOOLS[winner.key].astuce}.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── GRILLE D'ARBITRAGE (contenu statique citable) ── */}
      <section id="grille" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La méthode, en clair</div>
          <h2 style={h2Style}>Comment nous arbitrons entre les cinq outils</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 12px', maxWidth: 780 }}>
            Le score sur 100 est la moyenne pondérée de quatre composantes, chacune notée sur 100. Voici la grille complète, publiée pour que vous puissiez la contester plutôt que de faire confiance à une boîte noire.
          </p>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 780 }}>
            C'est un arbitrage éditorial, fondé sur le positionnement public des cinq produits et sur ce que nous observons en formation depuis 2022. Ce n'est pas un benchmark de performance des modèles : ceux-ci évoluent chaque trimestre, les profils d'usage beaucoup moins.
          </p>

          {/* Les 4 composantes et leur poids */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 14, marginBottom: 26 }}>
            {[
              ['55 %', 'Vos usages', "Moyenne de l'adéquation de l'outil à chaque usage coché. Une moyenne, pas une somme : cocher dix cases ne doit pas écraser les critères structurels."],
              ['25 %', 'Votre suite bureautique', "L'IA native de votre suite est imbattable sur le quotidien ; celle de l'autre suite vous fait payer une intégration inutilisable."],
              ['15 %', 'Vos contraintes', 'Données sensibles et déploiement à grande échelle. Elles nuancent, elles n’excluent pas.'],
              ['5 %', 'Votre métier', "Volontairement faible : le métier recoupe les usages déjà déclarés, le compter lourd valoriserait deux fois la même réalité."],
            ].map(([poids, titre, desc]) => (
              <div key={titre} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '18px 20px' }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: c, lineHeight: 1, marginBottom: 6 }}>{poids}</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14.5, fontWeight: 800, color: '#0A0A0A', marginBottom: 6 }}>{titre}</div>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* La contrainte éliminatoire, traitée hors pondération */}
          <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderLeft: '4px solid #D97706', borderRadius: 12, padding: '18px 22px', marginBottom: 26 }}>
            <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: '0 0 8px' }}>
              <strong style={{ color: '#0A0A0A' }}>Hors pondération : l'exigence d'un éditeur européen est éliminatoire.</strong>{' '}
              Une obligation réglementaire ne se compense pas par des points d'usage. Si vous la cochez, seul Mistral AI reste éligible, parce qu'il est le seul éditeur européen des cinq ; les autres sont écartés quel que soit leur score, et nous affichons celui qu'ils auraient obtenu.
            </p>
            <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
              À ne pas confondre avec l'hébergement : les quatre autres proposent en offre entreprise un traitement des données en Europe, tout en restant édités par des sociétés américaines soumises au droit extraterritorial. Selon que votre exigence porte sur la localisation ou sur la nationalité de l'éditeur, la réponse change.
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 14, border: '1px solid #E5E7EB' }}>
            <table aria-label="Grille de pondération des usages par outil IA" style={{ width: '100%', minWidth: 680, borderCollapse: 'collapse', fontSize: 13.5 }}>
              <thead>
                <tr style={{ background: '#F9FAFB' }}>
                  <th scope="col" style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12.5, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB' }}>Usage</th>
                  {TOOL_KEYS.map(k => (
                    <th key={k} scope="col" style={{ textAlign: 'center', padding: '12px 10px', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12.5, color: '#0A0A0A', borderBottom: '1px solid #E5E7EB' }}>{TOOLS[k].short}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {USAGES.map(u => (
                  <tr key={u.id}>
                    <td style={{ padding: '11px 16px', color: '#374151', borderBottom: '1px solid #F3F4F6' }}>{u.label}</td>
                    {TOOL_KEYS.map(k => {
                      const p = u.w[k] || 0
                      return (
                        <td key={k} style={{ padding: '11px 10px', textAlign: 'center', borderBottom: '1px solid #F3F4F6' }}>
                          <span style={{
                            display: 'inline-block', minWidth: 26, padding: '3px 8px', borderRadius: 99, fontSize: 12.5, fontWeight: 700,
                            background: p >= 3 ? `${TOOLS[k].color}1F` : p === 2 ? '#F3F4F6' : 'transparent',
                            color: p >= 3 ? TOOLS[k].color : p === 2 ? '#374151' : '#9CA3AF',
                          }}>{p}</span>
                        </td>
                      )
                    })}
                  </tr>
                ))}
                {ENVS.map(e => (
                  <tr key={e.id} style={{ background: '#FAFAFA' }}>
                    <td style={{ padding: '11px 16px', color: '#374151', borderBottom: '1px solid #F3F4F6', fontStyle: 'italic' }}>Suite déployée : {e.label}</td>
                    {TOOL_KEYS.map(k => {
                      const p = e.fit[k]
                      return (
                        <td key={k} style={{ padding: '11px 10px', textAlign: 'center', borderBottom: '1px solid #F3F4F6' }}>
                          <span style={{
                            display: 'inline-block', minWidth: 30, padding: '3px 8px', borderRadius: 99, fontSize: 12.5, fontWeight: 700,
                            background: p >= 100 ? `${TOOLS[k].color}1F` : p >= 55 ? '#F3F4F6' : 'transparent',
                            color: p >= 100 ? TOOLS[k].color : p >= 55 ? '#374151' : '#9CA3AF',
                          }}>{p}</span>
                        </td>
                      )
                    })}
                  </tr>
                ))}
                {CONTRAINTES.map(ct => (
                  <tr key={ct.id} style={{ background: '#FAFAFA' }}>
                    <td style={{ padding: '11px 16px', color: '#374151', borderBottom: '1px solid #F3F4F6', fontStyle: 'italic' }}>Contrainte : {ct.label.toLowerCase()}</td>
                    {TOOL_KEYS.map(k => {
                      const p = ct.fit[k]
                      return (
                        <td key={k} style={{ padding: '11px 10px', textAlign: 'center', borderBottom: '1px solid #F3F4F6' }}>
                          <span style={{
                            display: 'inline-block', minWidth: 30, padding: '3px 8px', borderRadius: 99, fontSize: 12.5, fontWeight: 700,
                            background: p >= 100 ? `${TOOLS[k].color}1F` : '#F3F4F6',
                            color: p >= 100 ? TOOLS[k].color : '#374151',
                          }}>{p}</span>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes de précision produit : là où le nom commercial induit en erreur */}
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[...USAGES.filter(u => u.note).map(u => [u.label, u.note]), ...CONTRAINTES.filter(x => x.note).map(x => [x.label, x.note])].map(([titre, note]) => (
              <p key={titre} style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: '#374151' }}>{titre} :</strong> {note}
              </p>
            ))}
            <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: '#374151' }}>Métier :</strong> chaque fonction ajoute un ajustement de 0 à 4, ramené sur 100 et pesé à 5 % seulement. Le juridique pousse Claude, l'assistanat de direction pousse Copilot, le SEO pousse ChatGPT et Gemini.
            </p>
          </div>
        </div>
      </section>

      {/* ── LES 5 PROFILS (contenu statique citable) ── */}
      <section id="profils-outils" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={kickerStyle}>La grille de lecture</div>
          <h2 style={h2Style}>À qui va chaque outil</h2>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 30px', maxWidth: 760 }}>
            Le résumé de ce que nous observons en formation et en mission, outil par outil. Les modèles évoluent vite ; ces profils d'usage, eux, restent stables.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 18 }}>
            {TOOL_KEYS.map(k => {
              const t = TOOLS[k]
              return (
                <div key={k} style={{ ...cardStyle, borderTop: `3px solid ${t.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ width: 36, height: 36, borderRadius: 9, background: `${t.color}14`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ToolLogo tool={t.logo} size={20} color={t.color} />
                    </span>
                    <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, fontWeight: 800, color: '#0A0A0A', margin: 0 }}>{t.name}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>{t.pitch}</p>
                  <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.6, margin: '0 0 14px' }}>
                    <strong style={{ color: '#374151' }}>Il gagne quand il y a</strong> {t.edge}.
                  </p>
                  <Link to={`/${t.hub}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: c, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
                    Formations {t.short} <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '20px 0 0' }}>
            Les comparatifs détaillés, critère par critère : <Link to="/quelle-est-la-meilleure-ia" style={{ color: c, fontWeight: 600 }}>quelle est la meilleure IA ?</Link> et <Link to="/meilleure-ia-entreprise-2026" style={{ color: c, fontWeight: 600 }}>meilleure IA pour entreprise</Link>.
          </p>
        </div>
      </section>

      {/* ── APRÈS LE CHOIX ── */}
      <section style={{ padding: SECTION_PAD, background: '#F9FAFB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={kickerStyle}>Après le choix</div>
          <h2 style={h2Style}>L'outil ne fait pas l'adoption</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 18 }}>
            {[
              { icon: Sparkles, title: 'Former sur vos cas réels', desc: "L'article des Échos qui cite notre fondateur le résume : un modèle mal adapté, et les gens vont chercher ailleurs. La formation sur vos propres documents ancre l'outil choisi dans le quotidien." },
              { icon: ShieldCheck, title: "Cadrer l'usage", desc: 'Comptes professionnels, charte, liste des données interdites : le cadre se pose au moment du déploiement, pas après le premier incident.' },
              { icon: Scale, title: 'Réévaluer chaque année', desc: "Les modèles et les tarifs bougent vite. Un point annuel suffit pour vérifier que l'outil choisi reste le bon, sans zapping permanent." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={cardStyle}>
                <div style={{ width: 44, height: 44, background: '#DBEAFE', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={22} strokeWidth={2} style={{ color: c }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
            <Link to="/formation-multi-outils" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '13px 26px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
              Comparer les 5 outils en formation <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#374151', border: '1px solid #E5E7EB', padding: '13px 26px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
              Échanger sur votre contexte
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEXIQUE ── */}
      <section id="lexique" style={{ padding: SECTION_PAD, background: '#fff', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={kickerStyle}>Lexique express</div>
          <h2 style={h2Style}>Les 4 notions qui éclairent le choix</h2>
          <div style={{ ...cardStyle, padding: 'clamp(20px, 3vw, 28px)' }}>
            <dl style={{ margin: 0 }}>
              {LEXIQUE.map(({ t, d }, i) => (
                <div key={t} style={{ padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}>
                  <dt style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', marginBottom: 4 }}>{t}</dt>
                  <dd style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '16px 0 0' }}>
            83 autres termes de l'IA en entreprise dans notre <Link to="/glossaire-ia" style={{ color: c, fontWeight: 600 }}>glossaire IA</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: SECTION_PAD, background: '#F9FAFB', scrollMarginTop: 96 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={h2Style}>Questions fréquentes</h2>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── AUTRES OUTILS ── */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 24px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 12px' }}>
            Nos autres outils gratuits
          </h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {AUTRES_OUTILS.map(o => (
              <Link key={o.href} to={o.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '9px 15px', fontSize: 13.5, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                {o.label} <ArrowRight size={13} color="#6B7280" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
