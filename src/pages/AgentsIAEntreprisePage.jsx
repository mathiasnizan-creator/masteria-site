import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BadgeCheck, Users, MapPin, ShieldCheck } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import OfficialSources from '../components/OfficialSources'

/*
 * Page pilier « Agents IA en entreprise » : guide complet + 20 cas d'usage.
 * Cible les requêtes « agent ia entreprise », « agents ia pour entreprise »,
 * « ia agentique entreprise », « cas d'usage concrets des agents IA pour
 * entreprises ». Pensée pour le ranking ET la citation par les LLM (GEO) :
 * réponses directes en gras, structure scannable, FAQ JSON-LD.
 * Accent bleu Masteria (#2563EB), pas de courseData (page guide, pas formation).
 */

const SLUG = 'agents-ia-entreprise'
const c = '#2563EB'
const cLight = '#DBEAFE'

const META_TITLE = "Agents IA en entreprise : guide & 20 cas d'usage | Masteria"
const META_DESC = "Qu'est-ce qu'un agent IA ? Fonctionnement, 20 cas d'usage concrets par fonction, outils 2026, gouvernance : le guide pour déployer des agents IA en entreprise."
const H1 = "Agents IA en entreprise : le guide complet et 20 cas d'usage concrets"

const TOC = [
  { href: '#definition', label: "Qu'est-ce qu'un agent IA ?" },
  { href: '#fonctionnement', label: 'Comment fonctionne un agent IA ?' },
  { href: '#cas-usage', label: "20 cas d'usage par fonction" },
  { href: '#outils', label: 'Quels outils en 2026 ?' },
  { href: '#risques', label: 'Risques et gouvernance' },
  { href: '#commencer', label: 'Par où commencer ?' },
  { href: '#faq', label: 'Questions fréquentes' },
]

const COMPARISON = [
  {
    emoji: '💬',
    title: 'Assistant IA',
    desc: "ChatGPT, Claude ou Copilot utilisés en conversation. L'assistant répond à vos questions et produit du texte, puis vous reprenez la main : copier le résultat, l'envoyer, mettre à jour le logiciel concerné. L'humain reste l'opérateur de chaque étape.",
  },
  {
    emoji: '⚙️',
    title: 'Workflow automatisé',
    desc: "Un scénario Make, n8n ou Power Automate enchaîne des étapes définies à l'avance : un déclencheur, des actions, toujours dans le même ordre. Fiable et prévisible, tant que le processus ne dévie jamais du scénario prévu.",
  },
  {
    emoji: '🤖',
    title: 'Agent IA',
    desc: "L'agent reçoit un objectif et choisit lui-même la séquence d'actions : consulter une base, appeler une API, rédiger, vérifier, recommencer si besoin. Il absorbe les cas imprévus qu'un workflow rigide rejette, sous le contrôle d'un humain.",
  },
]

const LOOP_STEPS = [
  {
    num: '01',
    title: 'Perception',
    desc: "L'agent collecte le contexte utile : votre demande, le contenu d'un email, l'historique CRM, un document, l'état d'un système. La qualité de cette matière première conditionne tout le reste.",
  },
  {
    num: '02',
    title: 'Décision',
    desc: "Le modèle de langage raisonne sur l'objectif et choisit la prochaine action : chercher une information, appeler un outil, rédiger un contenu, ou demander une clarification à un humain.",
  },
  {
    num: '03',
    title: 'Action',
    desc: "L'agent exécute l'action décidée via ses outils : requête dans une base, écriture dans le CRM, préparation d'un envoi, modification d'un fichier. Sans outils connectés, un agent reste un assistant.",
  },
  {
    num: '04',
    title: 'Vérification',
    desc: "L'agent contrôle le résultat obtenu, corrige si nécessaire et décide de la suite : poursuivre, recommencer ou rendre la main. La boucle se répète jusqu'à l'objectif ou jusqu'au point de contrôle humain.",
  },
]

const USE_CASE_GROUPS = [
  {
    id: 'commercial',
    emoji: '💼',
    label: 'Fonction commerciale',
    cases: [
      {
        title: '1. Qualification des leads entrants',
        desc: "L'agent lit chaque demande entrante (formulaire, email), recherche l'entreprise, applique votre grille de qualification et crée une fiche complète dans le CRM. Le commercial reçoit un lead documenté et scoré, avec un brouillon de première réponse à valider.",
      },
      {
        title: '2. Préparation des rendez-vous commerciaux',
        desc: "Avant chaque rendez-vous, l'agent compile l'historique CRM, les actualités récentes du prospect et les échanges passés, puis produit une fiche de préparation d'une page. Le commercial arrive informé sans avoir passé sa soirée à chercher.",
      },
      {
        title: '3. Relance des devis en attente',
        desc: "L'agent surveille les propositions restées sans réponse, prépare une relance personnalisée selon le contexte du dossier et la soumet au commercial avant envoi. Le pipeline reste à jour sans tableur parallèle.",
      },
    ],
  },
  {
    id: 'marketing',
    emoji: '📣',
    label: 'Marketing et communication',
    cases: [
      {
        title: '4. Veille concurrentielle continue',
        desc: "L'agent surveille les sites, pages tarifs, communiqués et publications des concurrents que vous lui désignez, puis livre chaque semaine une synthèse sourcée des changements détectés. L'équipe marketing décide de ce qui mérite une réaction.",
      },
      {
        title: '5. Déclinaison de contenus multicanale',
        desc: "À partir d'un contenu pilier validé (article, webinaire, étude), l'agent produit les déclinaisons : posts LinkedIn, newsletter, script vidéo, dans le respect de votre charte éditoriale. Tout passe en relecture avant publication.",
      },
      {
        title: '6. Reporting des campagnes',
        desc: "L'agent collecte les données de vos plateformes publicitaires et de votre analytics, repère les écarts notables et rédige un reporting commenté. Le responsable marketing consacre son temps aux arbitrages plutôt qu'à la collecte.",
      },
    ],
  },
  {
    id: 'rh',
    emoji: '👥',
    label: 'Ressources humaines',
    cases: [
      {
        title: '7. Présélection des candidatures',
        desc: "L'agent analyse les candidatures au regard de la grille de critères du poste et prépare une synthèse par candidat. Le recruteur garde la décision : le tri automatisé en recrutement relève des usages à haut risque de l'AI Act et exige une supervision humaine documentée.",
      },
      {
        title: "8. Accompagnement de l'onboarding",
        desc: "L'agent répond aux questions pratiques des nouveaux arrivants à partir de la documentation interne, déclenche les demandes d'accès et de matériel, et suit la check-list d'intégration. Les RH se concentrent sur les sujets humains, l'agent gère la logistique.",
      },
      {
        title: '9. Premier niveau de réponse RH',
        desc: "Congés, mutuelle, notes de frais, attestations : l'agent répond aux questions récurrentes en s'appuyant sur vos accords et politiques internes, et transfère à l'équipe RH dès qu'un cas sort du cadre prévu.",
      },
    ],
  },
  {
    id: 'finance',
    emoji: '🧾',
    label: 'Finance et administratif',
    cases: [
      {
        title: '10. Traitement des factures fournisseurs',
        desc: "L'agent extrait les données des factures reçues, les rapproche des bons de commande, prépare l'imputation comptable et signale toute anomalie (montant inhabituel, doublon, fournisseur inconnu) à un humain avant validation.",
      },
      {
        title: '11. Relance des impayés',
        desc: "L'agent identifie les factures échues, adapte le ton de la relance à l'historique du client et prépare les courriers selon votre procédure d'escalade. Les envois et le passage au contentieux restent validés par l'équipe.",
      },
      {
        title: '12. Préparation du reporting de gestion',
        desc: "L'agent rassemble les chiffres dans vos outils (comptabilité, banque, facturation), construit les tableaux convenus et rédige un premier commentaire de gestion. Le DAF contrôle, corrige et garde la main sur l'analyse.",
      },
    ],
  },
  {
    id: 'service-client',
    emoji: '🎧',
    label: 'Service client',
    cases: [
      {
        title: '13. Résolution des demandes de niveau 1',
        desc: "L'agent répond aux questions courantes à partir de la base de connaissances, consulte le statut réel d'une commande dans vos systèmes et exécute des gestes simples : renvoyer une facture, corriger une adresse. Il transfère à un conseiller dès que le cas l'exige.",
      },
      {
        title: '14. Tri et routage des tickets',
        desc: "À l'arrivée de chaque demande, l'agent identifie le sujet, l'urgence et le ton, enrichit le ticket avec le contexte client et le route vers la bonne équipe accompagné d'un résumé. Les conseillers démarrent chaque dossier avec l'essentiel sous les yeux.",
      },
      {
        title: '15. Synthèse de la voix du client',
        desc: "L'agent agrège tickets, avis et verbatims d'enquêtes, repère les motifs récurrents et produit un rapport d'irritants priorisé. Les équipes produit et qualité travaillent sur des signaux consolidés plutôt que sur des cas isolés.",
      },
    ],
  },
  {
    id: 'it-dev',
    emoji: '💻',
    label: 'IT et développement',
    cases: [
      {
        title: '16. Agents de code pour les équipes de développement',
        desc: "À partir d'un ticket, un agent de code comme Claude Code explore la base de code, propose une implémentation, écrit les tests et prépare une pull request qu'un développeur relit avant fusion. Le développeur consacre plus de temps à la conception et à la revue.",
        link: { to: '/formation-claude-code', label: 'Découvrir la formation Claude Code →' },
      },
      {
        title: '17. Support informatique interne',
        desc: "Réinitialisations de mot de passe, demandes d'accès, diagnostics standards : l'agent traite les sollicitations de niveau 1 selon vos procédures et escalade aux techniciens avec un diagnostic déjà documenté.",
      },
      {
        title: '18. Mise à jour de la documentation technique',
        desc: "L'agent compare régulièrement la documentation aux systèmes réels (code, configurations, procédures), repère les écarts et propose les corrections correspondantes. L'équipe IT valide les mises à jour au fil de l'eau.",
      },
    ],
  },
  {
    id: 'direction',
    emoji: '🧭',
    label: 'Direction et fonctions transverses',
    cases: [
      {
        title: '19. Veille stratégique pour le comité de direction',
        desc: "L'agent surveille votre marché, la réglementation et les signaux concurrents sur un périmètre défini, puis prépare une note de synthèse sourcée à fréquence fixe. La direction lit dix minutes au lieu d'ouvrir cinquante onglets.",
      },
      {
        title: '20. Préparation des dossiers de COMEX',
        desc: "L'agent collecte les contributions et les chiffres des différents services, met en forme le dossier selon votre trame et signale les données manquantes avant l'échéance. Le dirigeant arbitre sur un dossier complet.",
      },
    ],
  },
]

const TOOLS = [
  {
    emoji: '🟠',
    name: 'Claude et le standard MCP (Anthropic)',
    desc: "Les modèles Claude sont reconnus pour le travail documentaire et les agents de code (Claude Code). Le Model Context Protocol, protocole ouvert, connecte les agents à vos bases, API et fichiers avec des connecteurs réutilisables. Une option solide quand le besoin mêle analyse de documents, code et connexion au système d'information.",
  },
  {
    emoji: '🟢',
    name: 'ChatGPT et les agents OpenAI',
    desc: "OpenAI propose des GPT personnalisés et des capacités agentiques adossées à l'écosystème ChatGPT, déjà familier de la plupart des équipes métiers. Cette familiarité accélère l'adoption ; elle impose en contrepartie un cadrage précis des données qui transitent par l'outil.",
  },
  {
    emoji: '🟦',
    name: 'Microsoft Copilot Studio',
    desc: "L'outil de création d'agents de l'écosystème Microsoft permet de construire des agents connectés à Microsoft 365, Teams et Dynamics. Le choix naturel des organisations déjà engagées sur le socle Microsoft, avec une gouvernance centralisable par la DSI.",
  },
  {
    emoji: '🔵',
    name: 'Google Gemini et Vertex AI',
    desc: "Google propose les modèles Gemini et la plateforme Vertex AI pour construire et déployer des agents dans l'environnement Google Cloud et Workspace. Pertinent quand vos données et vos outils collaboratifs vivent déjà chez Google.",
  },
  {
    emoji: '🔗',
    name: 'n8n, Make et les plateformes d’orchestration',
    desc: "Ces plateformes relient les modèles d'IA à vos logiciels métiers et encadrent les agents dans des workflows contrôlés : déclencheurs, étapes, points de validation humaine. Elles conviennent bien aux premiers déploiements, où la prévisibilité compte autant que l'intelligence.",
  },
]

const RISKS = [
  {
    emoji: '🔒',
    title: "Périmètre d'action limité",
    desc: "Un agent reçoit uniquement les droits nécessaires à sa mission : lecture seule là où l'écriture est inutile, accès à un sous-ensemble de données, plafonds sur les actions (montants, volumes, destinataires). Le principe du moindre privilège, standard en sécurité informatique, s'applique pleinement aux agents.",
  },
  {
    emoji: '✋',
    title: 'Validation humaine sur les actions sensibles',
    desc: "Tout envoi externe, paiement, engagement contractuel, suppression de données ou décision affectant une personne passe par une validation humaine explicite. L'agent prépare, l'humain décide.",
  },
  {
    emoji: '🛡️',
    title: 'Protection des données sensibles',
    desc: "Les données personnelles et confidentielles appellent les mêmes exigences qu'avec tout sous-traitant logiciel : cadre contractuel sur l'usage des données par l'éditeur, hébergement maîtrisé, conformité RGPD et cloisonnement des accès entre agents.",
  },
  {
    emoji: '📜',
    title: 'Traçabilité complète',
    desc: "Chaque action d'un agent est journalisée : ce qu'il a consulté, ce qu'il a décidé, ce qu'il a exécuté, qui a validé. Ce journal conditionne l'audit, le débogage et la confiance des équipes.",
  },
  {
    emoji: '⚖️',
    title: "Conformité avec l'AI Act",
    desc: "Le règlement européen sur l'IA, entré en application par étapes depuis 2025, impose des obligations graduées selon le risque : transparence pour les systèmes qui interagissent avec des humains, exigences renforcées pour les usages à haut risque comme le recrutement. Cartographier vos agents au regard de ces catégories devient un prérequis.",
    link: { to: '/formation-ai-act', label: "Préparer vos équipes avec la formation AI Act →" },
  },
]

const START_STEPS = [
  {
    num: 1,
    title: 'Choisir un processus pilote',
    desc: "Cherchez un processus fréquent, bien documenté, aux règles claires et au risque faible en cas d'erreur : tri de tickets, préparation de reporting, qualification de leads. Évitez de commencer par un processus critique ou mal défini.",
  },
  {
    num: 2,
    title: 'Déployer un agent supervisé',
    desc: "Configurez l'agent avec un périmètre d'action minimal et une validation humaine sur chaque action sortante. Les premières semaines servent à construire la confiance et à affiner les consignes sur des cas réels.",
  },
  {
    num: 3,
    title: 'Mesurer',
    desc: "Suivez trois familles d'indicateurs : le temps rendu à l'équipe, le taux d'erreurs ou de reprises, et le taux d'escalade vers un humain. Ces mesures objectivent la décision d'étendre, d'ajuster ou d'arrêter.",
  },
  {
    num: 4,
    title: 'Étendre progressivement',
    desc: "Élargissez le périmètre du premier agent, puis répliquez la démarche sur un deuxième processus. L'autonomie accordée à l'agent augmente à mesure que la fiabilité mesurée le justifie, jamais l'inverse.",
  },
]

const NEXT_STEPS = [
  {
    to: '/formation-claude-code',
    tag: 'Formation',
    title: 'Formation Claude Code',
    desc: "Former vos développeurs et profils techniques aux agents de code, sur vos projets réels.",
  },
  {
    to: '/conseil-intelligence-artificielle',
    tag: 'Conseil',
    title: 'Conseil en intelligence artificielle',
    desc: "Cadrer votre feuille de route agents : processus pilotes, choix des outils, gouvernance.",
  },
  {
    to: '/automatisation-ia',
    tag: 'Guide',
    title: "Guide de l'automatisation IA",
    desc: "Comprendre comment workflows et agents se combinent pour automatiser vos processus.",
  },
]

const FAQ = [
  {
    q: 'Quelle différence entre un agent IA et un chatbot ?',
    aStrong: "Un chatbot répond à des questions dans une conversation ; un agent IA exécute des actions dans vos logiciels pour accomplir une tâche complète.",
    aRest: "Le chatbot reste dans le canal conversationnel : il informe, oriente, rédige. L'agent se connecte à vos outils (CRM, ERP, helpdesk, fichiers) et agit : il crée une fiche, met à jour un dossier, prépare un envoi. Beaucoup de services client combinent les deux, avec un chatbot en façade et un agent derrière pour exécuter les gestes.",
  },
  {
    q: 'Un agent IA peut-il travailler sans supervision ?',
    aStrong: "Techniquement oui, sur des tâches étroites et bien bornées ; en pratique, la plupart des déploiements en entreprise conservent une validation humaine sur les actions importantes.",
    aRest: "L'autonomie complète suppose une fiabilité démontrée, des actions réversibles et un risque faible. La démarche raisonnable consiste à démarrer en mode supervisé, à mesurer le taux d'erreurs, puis à élargir l'autonomie par paliers, sur les seules actions où l'agent a fait ses preuves.",
  },
  {
    q: "Qu'est-ce que l'IA agentique ?",
    aStrong: "L'IA agentique désigne la famille de systèmes d'IA capables de poursuivre un objectif de façon autonome : planifier des étapes, utiliser des outils, évaluer leurs résultats et ajuster leur démarche.",
    aRest: "Le terme s'est imposé pour distinguer ces systèmes des assistants conversationnels. Une IA agentique d'entreprise combine un modèle de langage, des connecteurs vers les logiciels métiers (souvent via le standard MCP) et des règles de supervision. Les définitions associées figurent dans notre glossaire de l'IA.",
  },
  {
    q: "Combien coûte le déploiement d'un agent IA ?",
    aStrong: "Le budget se répartit entre trois postes : la consommation ou les licences des modèles d'IA, l'intégration aux logiciels existants et l'accompagnement humain (cadrage, formation, supervision).",
    aRest: "Un pilote sur un processus simple, avec des outils du marché, reste accessible à une PME. Un déploiement multi-services avec connecteurs sur mesure constitue un vrai projet informatique. Le coût d'intégration et de conduite du changement dépasse souvent celui des licences, ce qui plaide pour démarrer petit et mesurer avant d'étendre.",
  },
  {
    q: "Quels sont les risques d'un agent IA en entreprise ?",
    aStrong: "Les principaux risques sont les erreurs d'exécution, les actions hors périmètre, la fuite de données sensibles et la non-conformité réglementaire.",
    aRest: "Tous se maîtrisent par la gouvernance : droits d'accès limités au strict nécessaire, validation humaine sur les actions sensibles, journalisation complète des actions et cartographie des usages au regard de l'AI Act. Un agent sans garde-fous constitue un risque opérationnel ; un agent gouverné reste un outil de productivité contrôlé.",
  },
  {
    q: 'Quelles compétences faut-il en interne pour déployer des agents IA ?',
    aStrong: "Trois profils suffisent pour démarrer : un expert du processus métier concerné, une personne formée au paramétrage et au pilotage des agents, et un référent qui supervise les résultats et la conformité.",
    aRest: "Aucun de ces rôles n'exige un data scientist. La connaissance fine du processus pèse plus lourd que la technique : un agent mal cadré sur un processus flou échouera quel que soit l'outil. La formation des équipes en place couvre l'essentiel du besoin ; le développement sur mesure ne devient nécessaire que pour les intégrations complexes.",
  },
]

function FAQItem({ q, aStrong, aRest, color }) {
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
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0A0A0A', fontFamily: 'Nunito, sans-serif' }}>{q}</span>
        <span style={{ fontSize: 22, color, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>
          <strong style={{ color: '#0A0A0A' }}>{aStrong}</strong> {aRest}
        </p>
      )}
    </div>
  )
}

const h2Style = { fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0A0A0A', marginBottom: 16, lineHeight: 1.25 }
const h3Style = { fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }
const pStyle = { fontSize: 16, color: '#374151', lineHeight: 1.8, marginBottom: 20, maxWidth: 760 }
const linkStyle = { color: c, fontWeight: 600 }

export default function AgentsIAEntreprisePage() {
  const breadcrumbs = [
    { name: 'Accueil', slug: '' },
    { name: 'Agents IA en entreprise', slug: SLUG },
  ]

  const faqItems = FAQ.map(({ q, aStrong, aRest }) => ({ q, a: `${aStrong} ${aRest}` }))

  return (
    <>
      <SEOHead
        title={META_TITLE}
        description={META_DESC}
        slug={SLUG}
        breadcrumbs={breadcrumbs}
        faqItems={faqItems}
      />

      {/* ── HERO ── */}
      <section style={{ background: '#FAFAF7', color: '#0A0A0A', paddingTop: 60, paddingBottom: 64, paddingLeft: 40, paddingRight: 40, borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B7280' }}>Accueil</Link>
            <span style={{ color: '#374151' }}>/</span>
            <span style={{ color: c, fontWeight: 600 }}>Agents IA en entreprise</span>
          </nav>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: cLight, color: c, padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 700 }}>
              Guide 2026
            </span>
            <span style={{ background: '#fff', color: '#6B7280', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB' }}>
              Lecture : 15 min
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: 24, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
            {H1}
          </h1>

          <p style={{ fontSize: 17, color: '#0A0A0A', lineHeight: 1.7, marginBottom: 20, maxWidth: 720, fontWeight: 500 }}>
            Les agents IA exécutent des tâches complètes dans vos logiciels : qualifier un lead, traiter une facture, résoudre un ticket, corriger du code. Ce guide explique ce qu'est un agent IA, comment il fonctionne, puis détaille 20 cas d'usage concrets des agents IA pour entreprises, fonction par fonction, avec les outils disponibles en 2026 et les règles de gouvernance à poser avant de déployer.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
            {[
              { icon: BadgeCheck, label: 'Organisme certifié Qualiopi' },
              { icon: Users, label: '+1 500 professionnels formés' },
              { icon: ShieldCheck, label: '98 % de satisfaction' },
              { icon: MapPin, label: 'France · Suisse · Belgique' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} style={{ background: '#fff', color: '#374151', padding: '7px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, border: '1px solid #E5E7EB', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon size={15} strokeWidth={2.2} style={{ color: c }} />
                {label}
              </span>
            ))}
          </div>

          {/* Sommaire */}
          <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '20px 24px' }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>Sommaire</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
              {TOC.map(item => (
                <a key={item.href} href={item.href} style={{ fontSize: 14, color: c, fontWeight: 600, textDecoration: 'none' }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. DÉFINITION ── */}
      <section id="definition" style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={h2Style}>Qu'est-ce qu'un agent IA ?</h2>

          {/* GEO : réponse directe citable */}
          <div style={{ background: '#EFF6FF', borderLeft: `4px solid ${c}`, borderRadius: 8, padding: '24px 28px', margin: '24px 0 32px' }}>
            <p style={{ fontSize: 17, lineHeight: 1.75, margin: 0, color: '#0A0A0A' }}>
              <strong>Un agent IA est un système qui perçoit un contexte, décide d'une séquence d'actions et les exécute via des outils (logiciels métiers, bases de données, API) pour atteindre un objectif fixé par un humain. Là où un assistant conversationnel répond à une question, un agent accomplit une tâche complète, en plusieurs étapes, avec un minimum d'allers-retours.</strong>
            </p>
          </div>

          <p style={pStyle}>
            Concrètement, un agent IA d'entreprise reçoit une mission (« qualifie ce lead et crée la fiche dans le CRM »), consulte les informations disponibles, choisit les actions à mener, les exécute dans vos logiciels et vérifie le résultat. Le grand modèle de langage (LLM) lui sert de moteur de raisonnement ; les connecteurs vers vos outils lui servent de bras. On parle aussi d'IA agentique pour désigner cette approche, par opposition aux usages purement conversationnels.
          </p>
          <p style={pStyle}>
            Dans ce guide, « agent IA pour entreprise » désigne un agent connecté aux logiciels de l'organisation et soumis à ses règles de sécurité. La distinction avec deux notions voisines mérite d'être posée d'emblée, car elle conditionne le choix des outils et le niveau de risque.
          </p>

          <h3 style={{ ...h3Style, fontSize: 22, margin: '40px 0 24px' }}>Assistant, workflow automatisé, agent : trois logiques différentes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginBottom: 28 }}>
            {COMPARISON.map(item => (
              <div key={item.title} style={{ background: '#F9FAFB', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.emoji}</div>
                <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 8px' }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ ...pStyle, marginBottom: 0 }}>
            Dans la pratique, les trois approches se combinent. Beaucoup de déploiements 2026 insèrent un agent dans un workflow : l'orchestration encadre le processus, l'agent gère les étapes qui demandent du jugement. Les définitions détaillées sont regroupées dans notre glossaire, aux entrées <Link to="/glossaire-ia#agent-ia" style={linkStyle}>agent IA</Link> et <Link to="/glossaire-ia#workflow-ia" style={linkStyle}>workflow IA</Link>.
          </p>
        </div>
      </section>

      {/* ── 2. FONCTIONNEMENT ── */}
      <section id="fonctionnement" style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={h2Style}>Comment fonctionne un agent IA ?</h2>
          <p style={pStyle}>
            Tous les agents, quel que soit l'éditeur, reposent sur la même boucle de fonctionnement. La comprendre suffit pour cadrer un projet, dialoguer avec un intégrateur et repérer les promesses excessives.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, margin: '32px 0 48px' }}>
            {LOOP_STEPS.map(step => (
              <div key={step.num} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB', borderTop: `4px solid ${c}` }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 13, fontWeight: 800, color: c, marginBottom: 8 }}>{step.num}</div>
                <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ ...h3Style, fontSize: 22, marginBottom: 16 }}>L'accès aux outils : le rôle du standard MCP</h3>
          <p style={pStyle}>
            Pour agir, un agent doit se connecter à vos logiciels. Cette connexion passe par ce que les éditeurs appellent le <Link to="/glossaire-ia#function-calling" style={linkStyle}>function calling ou tool use</Link> : le modèle demande l'exécution d'une fonction précise, avec des paramètres structurés, et reçoit le résultat en retour. Le <Link to="/glossaire-ia#mcp" style={linkStyle}>Model Context Protocol (MCP)</Link>, protocole ouvert lancé par Anthropic fin 2024, standardise cette connexion entre les modèles et les systèmes externes : bases de données, API, fichiers. Son adoption large en a fait un standard de fait : un connecteur MCP développé une fois peut servir à plusieurs agents, quel que soit le modèle qui les anime.
          </p>

          <h3 style={{ ...h3Style, fontSize: 22, marginBottom: 16 }}>La supervision humaine</h3>
          <p style={{ ...pStyle, marginBottom: 0 }}>
            Un agent d'entreprise sérieux fonctionne avec des points de contrôle humains, ce que la littérature appelle le <Link to="/glossaire-ia#humain-dans-la-boucle" style={linkStyle}>human-in-the-loop</Link>. Trois niveaux existent : l'humain valide chaque action (le mode le plus prudent), l'humain valide uniquement les actions sensibles (envoi externe, paiement, suppression), ou l'humain contrôle a posteriori sur échantillon. La plupart des déploiements 2026 restent supervisés : l'autonomie se gagne progressivement, à mesure que la fiabilité est démontrée sur le terrain.
          </p>
        </div>
      </section>

      {/* ── 3. LES 20 CAS D'USAGE ── */}
      <section id="cas-usage" style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={h2Style}>20 cas d'usage concrets des agents IA pour entreprises</h2>
          <p style={pStyle}>
            Voici 20 cas d'usage d'agents IA réalistes en 2026, classés par fonction. Chacun suppose un agent connecté aux outils concernés et supervisé par l'équipe métier. Aucun chiffre de gain n'est avancé ici : les résultats dépendent du volume traité, de la qualité des données et du niveau de supervision retenu.
          </p>

          {USE_CASE_GROUPS.map(group => (
            <div key={group.id} style={{ marginTop: 48 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 26 }}>{group.emoji}</span>
                <h3 style={{ ...h3Style, fontSize: 22, margin: 0 }}>{group.label}</h3>
                <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                {group.cases.map(uc => (
                  <div key={uc.title} style={{ background: '#F9FAFB', borderRadius: 12, padding: 24, border: '1px solid #E5E7EB', borderLeft: `4px solid ${c}` }}>
                    <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px' }}>{uc.title}</h4>
                    <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{uc.desc}</p>
                    {uc.link && (
                      <Link to={uc.link.to} style={{ display: 'inline-block', marginTop: 12, fontSize: 14, color: c, fontWeight: 700, textDecoration: 'none' }}>
                        {uc.link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA MILIEU ── */}
      <section style={{ padding: '48px 40px', background: `linear-gradient(135deg, ${c} 0%, ${c}dd 100%)`, color: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Nunito, sans-serif', margin: 0, marginBottom: 8, lineHeight: 1.25 }}>
              Un de ces cas d'usage ressemble à votre quotidien ?
            </h2>
            <p style={{ fontSize: 15, opacity: 0.92, margin: 0, lineHeight: 1.6 }}>
              Réponse sous 24 h · Cadrage sur vos processus réels · Organisme certifié Qualiopi
            </p>
          </div>
          <Link to="/contact" style={{ background: '#fff', color: c, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>
            Parler à notre équipe →
          </Link>
        </div>
      </section>

      {/* ── 4. OUTILS 2026 ── */}
      <section id="outils" style={{ padding: '80px 40px', background: '#F5F3EE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={h2Style}>Quels outils pour déployer des agents IA en 2026 ?</h2>
          <p style={pStyle}>
            Le marché évolue vite et aucun outil ne couvre tous les besoins. Le bon choix dépend de votre système d'information existant, des compétences internes et du niveau d'autonomie visé. Panorama des principales options, sans classement : chacune domine sur son terrain.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '32px 0' }}>
            {TOOLS.map(tool => (
              <div key={tool.name} style={{ background: '#fff', borderRadius: 12, padding: '24px 28px', border: '1px solid #E5E7EB', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{tool.emoji}</span>
                <div>
                  <h3 style={{ ...h3Style, fontSize: 17 }}>{tool.name}</h3>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ ...pStyle, marginBottom: 0 }}>
            Les plateformes d'orchestration s'appuient souvent sur un <Link to="/glossaire-ia#orchestrateur" style={linkStyle}>orchestrateur</Link> qui coordonne modèles et outils. Pour un comparatif détaillé des forces et des limites de chaque solution, consultez notre guide <Link to="/meilleur-agent-ia" style={linkStyle}>meilleur agent IA</Link>.
          </p>
        </div>
      </section>

      {/* ── 5. RISQUES ET GOUVERNANCE ── */}
      <section id="risques" style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={h2Style}>Risques et gouvernance des agents IA</h2>
          <p style={pStyle}>
            Donner des capacités d'action à un système d'IA crée des risques nouveaux par rapport à un simple assistant : une erreur ne reste plus dans une fenêtre de conversation, elle se propage dans vos systèmes. Cinq chantiers de gouvernance permettent de les maîtriser.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {RISKS.map(risk => (
              <div key={risk.title} style={{ background: '#F9FAFB', borderRadius: 12, padding: '24px 28px', border: '1px solid #E5E7EB', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{risk.emoji}</span>
                <div>
                  <h3 style={{ ...h3Style, fontSize: 17 }}>{risk.title}</h3>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{risk.desc}</p>
                  {risk.link && (
                    <Link to={risk.link.to} style={{ display: 'inline-block', marginTop: 10, fontSize: 14, color: c, fontWeight: 700, textDecoration: 'none' }}>
                      {risk.link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PAR OÙ COMMENCER ── */}
      <section id="commencer" style={{ padding: '80px 40px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={h2Style}>Par où commencer ?</h2>
          <p style={pStyle}>
            Le déploiement d'agents IA en entreprise réussit mieux par cercles concentriques que par grand soir. La méthode tient en quatre étapes : un processus pilote, un agent supervisé, des mesures, puis l'extension.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '32px 0 48px' }}>
            {START_STEPS.map(step => (
              <div key={step.num} style={{ background: '#fff', borderRadius: 12, padding: '24px 28px', border: '1px solid #E5E7EB', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, background: c, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ ...h3Style, fontSize: 17 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ ...h3Style, fontSize: 22, marginBottom: 8 }}>Trois façons d'avancer avec Masteria</h3>
          <p style={{ ...pStyle, marginBottom: 28 }}>
            Masteria, organisme de formation IA certifié Qualiopi fondé en 2022 à Lyon, a formé plus de 1 500 professionnels avec 98 % de satisfaction, en France, en Suisse et en Belgique. Sur les agents, nous intervenons en formation comme en cadrage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
            {NEXT_STEPS.map(item => (
              <Link key={item.to} to={item.to} style={{ textDecoration: 'none' }}>
                <div
                  style={{ background: '#fff', borderRadius: 10, padding: 22, border: `2px solid ${c}20`, height: '100%', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${c}20` }}
                >
                  <div style={{ display: 'inline-block', background: cLight, color: c, padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
                    {item.tag}
                  </div>
                  <h4 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 800, color: '#0A0A0A', margin: '0 0 6px' }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: '0 0 10px' }}>{item.desc}</p>
                  <span style={{ fontSize: 13, color: c, fontWeight: 700 }}>En savoir plus →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section id="faq" style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={h2Style}>Questions fréquentes sur les agents IA en entreprise</h2>
          <div style={{ marginTop: 24 }}>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} aStrong={item.aStrong} aRest={item.aRest} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ background: '#F5F3EE', color: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Déployez vos premiers agents IA
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Décrivez-nous le processus qui consomme le plus de temps dans vos équipes. On revient vers vous sous 24 heures avec un avis honnête : agent, workflow, ou simple formation des équipes.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: c, color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
            Contacter notre équipe →
          </Link>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Organisme certifié Qualiopi · +1 500 professionnels formés · 98 % de satisfaction · France, Suisse, Belgique
          </p>
        </div>
      </section>

      <OfficialSources />
    </>
  )
}
